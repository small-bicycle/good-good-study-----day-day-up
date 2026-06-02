const fs = require('fs');
const path = require('path');

const WEBPACK_FILE = path.join(__dirname, 'data', 'challenge21_webpack.js');
const SIGN_MODULE_ID = 0x208;
const REQUIRED_MODULE_IDS = [0x2ac, 0xc8, 0x112, 0x22b, 0x237, SIGN_MODULE_ID];

let cachedRuntime = null;

// 从目标站 webpack 文件里抽取指定模块函数源码，避免执行页面入口和 UI 代码。
function findWebpackModule(source, moduleId) {
  const moduleKey = `0x${moduleId.toString(16)}`;
  const pattern = `${moduleKey}:function`;
  const index = source.indexOf(pattern);
  if (index < 0) {
    throw new Error(`找不到 webpack 模块: ${moduleKey}`);
  }

  const keyEnd = source.indexOf(':', index);
  const functionStart = keyEnd + 1;
  const bodyStart = source.indexOf('{', functionStart);
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let pos = bodyStart; pos < source.length; pos += 1) {
    const char = source[pos];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === "'" || char === '"') {
      quote = char;
    } else if (char === '{') {
      depth += 1;
    } else if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(functionStart, pos + 1);
      }
    }
  }

  throw new Error(`webpack 模块未闭合: ${moduleKey}`);
}

// 构建 challenge21 的最小 webpack 运行时，只加载签名模块依赖。
function createRuntime() {
  if (cachedRuntime) {
    return cachedRuntime;
  }

  const source = fs.readFileSync(WEBPACK_FILE, 'utf8');
  const modules = {};

  for (const moduleId of REQUIRED_MODULE_IDS) {
    modules[moduleId] = eval(`(${findWebpackModule(source, moduleId)})`);
  }

  const cache = {};

  function requireModule(moduleId) {
    if (cache[moduleId]) {
      return cache[moduleId].exports;
    }
    if (!modules[moduleId]) {
      throw new Error(`缺少签名依赖模块: ${moduleId}`);
    }

    const module = { exports: {} };
    cache[moduleId] = module;
    modules[moduleId].call(module.exports, module, module.exports, requireModule);
    return module.exports;
  }

  cachedRuntime = { requireModule };
  return cachedRuntime;
}

// 在固定时间戳下执行目标签名模块，返回接口需要的 t 和 s。
function makeChallenge21Sign(timestamp) {
  const t = timestamp == null ? Date.now() : Number(timestamp);
  const runtime = createRuntime();
  const originalDate = globalThis.Date;
  const originalEval = globalThis.eval;
  const originalSetInterval = globalThis.setInterval;
  const originalP = globalThis.p;

  globalThis.p = globalThis;
  globalThis.eval = () => undefined;
  globalThis.setInterval = () => 0;

  class FixedDate extends originalDate {
    constructor(...args) {
      if (args.length > 0) {
        return new originalDate(...args);
      }
      return new originalDate(t);
    }

    static now() {
      return t;
    }
  }

  globalThis.Date = FixedDate;

  try {
    globalThis.p.s = undefined;
    const makeSign = runtime.requireModule(SIGN_MODULE_ID);
    const s = makeSign();
    return { t: String(globalThis.p.s), s };
  } finally {
    globalThis.Date = originalDate;
    globalThis.eval = originalEval;
    globalThis.setInterval = originalSetInterval;
    if (originalP === undefined) {
      delete globalThis.p;
    } else {
      globalThis.p = originalP;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = { makeChallenge21Sign };
}

if (require.main === module) {
  const timestamp = process.env.CHALLENGE21_T || undefined;
  process.stdout.write(JSON.stringify(makeChallenge21Sign(timestamp)));
}
