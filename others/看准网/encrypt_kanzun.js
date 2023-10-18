
const crypto = require('crypto');
crypto.getCiphers()
function func(e) {
    e = 16;
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), n = "", r = 0; r < e; r++) {

        n += t[Math.ceil(61 * Math.random())]
    }
    console.log('n -> ', n)

    return n
}


function func_t(e, t) {
    return e ? ("string" != typeof e && (e = e.toString()),
        l(e, t.iv)) : ""
}


function aes_encrypt(data,iv) {
    // 定义加密密钥和初始化向量
    const secretKey = 'your-secret-key'; // 替换为你的加密密钥
    // const iv = Buffer.from('your-initialization-vector'); // 替换为你的初始化向量

// 创建一个 AES 加密器
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secretKey), iv);

// 加密的数据
//     let data = 'Hello, World!'; // 要加密的数据

// 更新加密器的数据
    let encrypted = cipher.update(data, 'utf-8', 'base64');

// 完成加密操作
    encrypted += cipher.final('base64');

    console.log('Encrypted:', encrypted);
    return
}


e = {
    "data": {
        "encCompanyId": "1nR-298~",
        "questionId": "",
        "optionId": "",
        "type": 2
    },
    "url": "/api_to/webquestion/publish.json",
    "method": "get"
}
r = {
    "url": "/api_to/webquestion/publish.json",
    "method": "get",
    "data": {
        "encCompanyId": "1nR-298~",
        "questionId": "",
        "optionId": "",
        "type": 2
    },
    "responseType": "json",
    "requestType": "form",
    "headers": {}
}
var t, n, r = {
    "url": "/api_to/webquestion/publish.json",
    "method": "get",
    "data": {
        "encCompanyId": "1nR-298~",
        "questionId": "",
        "optionId": "",
        "type": 2
    },
    "responseType": "json",
    "requestType": "form",
    "headers": {}
}, a = "";

a = func()

console.log('a --->', a)

n = {"encCompanyId":"1nR-298~","questionId":"","optionId":"","type":2}
console.log('n --->', n)

aes_encrypt(n,a)
// t = func_t(n, {iv: a}).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "~")
// console.log('t --->', t)