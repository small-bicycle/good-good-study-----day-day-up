
ssss = {'result': 'nqrwLgmK5bop6C0xw94mGTKehVFFdLWUVWU3AubXRQaWU5tpr0KVv9cjV3Jh8KCqdYLnW4Rh+Wk/IIpZkPhUm9Mq5ooDJt4h7Svhlb/kq1K3VdSX3h662cA6SU4deFi3YnQTXKeJJOm92fJTCHcu/242lebtx79Pb0mRb1usL5TURsuqkA278rwgbD0EJSLAZDt/VsXJCy/EdUGNjhLDeJxs2o61oNSb6hkAp/kDdAbEEUrbzP0AuN+5CREAXI1wXxDgJ1Z+kOI4+hmYCz2cF8XNVFmzA809Dq1/346L+Wk/IIpZkPjkd8z1TgcPk94h7Svhlb/kRJx4BZ8VnJi7OjUYnfgjIQ=='}
var str = k["result"]["slice"](8)
var X = k["result"]["slice"](0, 8)


var keykey ='nqrwLgmK';
var strstr = "5bop6C0xw94mGTKehVFFdLWUVWU3AubXRQaWU5tpr0KVv9cjV3Jh8KCqdYLnW4Rh+Wk/IIpZkPhUm9Mq5ooDJt4h7Svhlb/kq1K3VdSX3h662cA6SU4deFi3YnQTXKeJJOm92fJTCHcu/242lebtx79Pb0mRb1usL5TURsuqkA278rwgbD0EJSLAZDt/VsXJCy/EdUGNjhLDeJxs2o61oNSb6hkAp/kDdAbEEUrbzP0AuN+5CREAXI1wXxDgJ1Z+kOI4+hmYCz2cF8XNVFmzA809Dq1/346L+Wk/IIpZkPjkd8z1TgcPk94h7Svhlb/kRJx4BZ8VnJi7OjUYnfgjIQ=="

function P(I, S, X) {
    function l(q, v) {
        if (!S[q]) {
            if (!I[q]) {
                var K = 'function' == typeof require && require;
                if (!v && K) return K(q, !0x0);
                if (k) return k(q, !0x0);
                var T = new Error('Cannot\x20fin' + 'd\x20module\x20\x27' + q + '\x27');
                throw T['code'] = 'MODULE_NOT' + '_FOUND', T;
            }
            var z = S[q] = {'exports': {}};
            I[q][0x0]['call'](z['exports'], function (h) {
                var R = I[q][0x1][h];
                return l(R || h);
            }, z, z['exports'], P, I, S, X);
        }
        return S[q]['exports'];
    }

    for (var k = 'function' == typeof require && require, C = 0x0; C < 8; C++) l(X[C]);
    return l;
}

var CryptoJS = P([function (P, n, o) {
        ;(function (I, S, X) {
            if (typeof o === 'object') n['exports'] = o = S(P('./core'), P('./x64-core'), P('./lib-type' + 'darrays'), P('./enc-utf1' + '6'), P('./enc-base' + '64'), P('./enc-base' + '64url'), P('./md5'), P('./sha1'), P('./sha256'), P('./sha224'), P('./sha512'), P('./sha384'), P('./sha3'), P('./ripemd16' + '0'), P('./hmac'), P('./pbkdf2'), P('./evpkdf'), P('./cipher-c' + 'ore'), P('./mode-cfb'), P('./mode-ctr'), P('./mode-ctr' + '-gladman'), P('./mode-ofb'), P('./mode-ecb'), P('./pad-ansi' + 'x923'), P('./pad-iso1' + '0126'), P('./pad-iso9' + '7971'), P('./pad-zero' + 'padding'), P('./pad-nopa' + 'dding'), P('./format-h' + 'ex'), P('./DES'), P('./tripleAE' + 'S'), P('./rc4'), P('./rabbit'), P('./rabbit-l' + 'egacy')); else typeof define === 'function' && define['amd'] ? define(['./core', './x64-core', './lib-type' + 'darrays', './enc-utf1' + '6', './enc-base' + '64', './enc-base' + '64url', './md5', './sha1', './sha256', './sha224', './sha512', './sha384', './sha3', './ripemd16' + '0', './hmac', './pbkdf2', './evpkdf', './cipher-c' + 'ore', './mode-cfb', './mode-ctr', './mode-ctr' + '-gladman', './mode-ofb', './mode-ecb', './pad-ansi' + 'x923', './pad-iso1' + '0126', './pad-iso9' + '7971', './pad-zero' + 'padding', './pad-nopa' + 'dding', './format-h' + 'ex', './DES', './tripleAE' + 'S', './rc4', './rabbit', './rabbit-l' + 'egacy'], S) : I['CryptoJS'] = S(I['CryptoJS']);
        }(this, function (I) {
            return I;
        }));
    }, {
        './DES': 0x3,
        './cipher-core': 0x4,
        './core': 0x5,
        './enc-base64': 0x6,
        './enc-base64url': 0x7,
        './enc-utf16': 0x8,
        './evpkdf': 0x9,
        './format-hex': 0xa,
        './hmac': 0xb,
        './lib-typedarrays': 0xd,
        './md5': 0xe,
        './mode-cfb': 0xf,
        './mode-ctr': 0x11,
        './mode-ctr-gladman': 0x10,
        './mode-ecb': 0x12,
        './mode-ofb': 0x13,
        './pad-ansix923': 0x14,
        './pad-iso10126': 0x15,
        './pad-iso97971': 0x16,
        './pad-nopadding': 0x17,
        './pad-zeropadding': 0x18,
        './pbkdf2': 0x19,
        './rabbit': 0x1b,
        './rabbit-legacy': 0x1a,
        './rc4': 0x1c,
        './ripemd160': 0x1d,
        './sha1': 0x1e,
        './sha224': 0x1f,
        './sha256': 0x20,
        './sha3': 0x21,
        './sha384': 0x22,
        './sha512': 0x23,
        './tripleAES': 0x24,
        './x64-core': 0x25
    }]);

function decode(k) {
    var KEY = k["result"]["slice"](0x0, 0x8);
    console.log(KEY)
    var str = k["result"]["slice"](0x8);
    console.log(str)
    var key = CryptoJS.enc.Utf8.parse(KEY);
    console.log(key)
    var decrypted = CryptoJS.AES.decrypt(str, key, {
        // iv: iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8).toString()
}

// 5bop6C0xw94mGTKehVFFdLWUVWU3AubXRQaWU5tpr0KVv9cjV3Jh8KCqdYLnW4Rh+Wk/IIpZkPhUm9Mq5ooDJt4h7Svhlb/kq1K3VdSX3h662cA6SU4deFi3YnQTXKeJJOm92fJTCHcu/242lebtx79Pb0mRb1usL5TURsuqkA278rwgbD0EJSLAZDt/VsXJCy/EdUGNjhLDeJxs2o61oNSb6hkAp/kDdAbEE
// UrbzP0AuN+5CREAXI1wXxDgJ1Z+kOI4+hmYCz2cF8XNVFmzA809Dq1/346L+Wk/IIpZkPjkd8z1TgcPk94h7Svhlb/kRJx4BZ8VnJi7OjUYnfgjIQ==
//

console.log(Keyss)
console.log(str)
var a = decode(k)
console.log(a)