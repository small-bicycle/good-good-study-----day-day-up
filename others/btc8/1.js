 function(e, t, n) {
    var l, r, o, d, c;
    l = n(433),
    r = n(275).utf8,
    o = n(434),
    d = n(275).bin,
    (c = function(e, t) {
        e.constructor == String ? e = t && "binary" === t.encoding ? d.stringToBytes(e) : r.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
        for (var n = l.bytesToWords(e), h = 8 * e.length, a = 1732584193, b = -271733879, f = -1732584194, m = 271733878, i = 0; i < n.length; i++)
            n[i] = 16711935 & (n[i] << 8 | n[i] >>> 24) | 4278255360 & (n[i] << 24 | n[i] >>> 8);
        n[h >>> 5] |= 128 << h % 32,
        n[14 + (h + 64 >>> 9 << 4)] = h;
        var v = c._ff
          , y = c._gg
          , _ = c._hh
          , x = c._ii;
        for (i = 0; i < n.length; i += 16) {
            var w = a
              , S = b
              , C = f
              , dd = m;
            a = v(a, b, f, m, n[i + 0], 7, -680876936),
            m = v(m, a, b, f, n[i + 1], 12, -389564586),
            f = v(f, m, a, b, n[i + 2], 17, 606105819),
            b = v(b, f, m, a, n[i + 3], 22, -1044525330),
            a = v(a, b, f, m, n[i + 4], 7, -176418897),
            m = v(m, a, b, f, n[i + 5], 12, 1200080426),
            f = v(f, m, a, b, n[i + 6], 17, -1473231341),
            b = v(b, f, m, a, n[i + 7], 22, -45705983),
            a = v(a, b, f, m, n[i + 8], 7, 1770035416),
            m = v(m, a, b, f, n[i + 9], 12, -1958414417),
            f = v(f, m, a, b, n[i + 10], 17, -42063),
            b = v(b, f, m, a, n[i + 11], 22, -1990404162),
            a = v(a, b, f, m, n[i + 12], 7, 1804603682),
            m = v(m, a, b, f, n[i + 13], 12, -40341101),
            f = v(f, m, a, b, n[i + 14], 17, -1502002290),
            a = y(a, b = v(b, f, m, a, n[i + 15], 22, 1236535329), f, m, n[i + 1], 5, -165796510),
            m = y(m, a, b, f, n[i + 6], 9, -1069501632),
            f = y(f, m, a, b, n[i + 11], 14, 643717713),
            b = y(b, f, m, a, n[i + 0], 20, -373897302),
            a = y(a, b, f, m, n[i + 5], 5, -701558691),
            m = y(m, a, b, f, n[i + 10], 9, 38016083),
            f = y(f, m, a, b, n[i + 15], 14, -660478335),
            b = y(b, f, m, a, n[i + 4], 20, -405537848),
            a = y(a, b, f, m, n[i + 9], 5, 568446438),
            m = y(m, a, b, f, n[i + 14], 9, -1019803690),
            f = y(f, m, a, b, n[i + 3], 14, -187363961),
            b = y(b, f, m, a, n[i + 8], 20, 1163531501),
            a = y(a, b, f, m, n[i + 13], 5, -1444681467),
            m = y(m, a, b, f, n[i + 2], 9, -51403784),
            f = y(f, m, a, b, n[i + 7], 14, 1735328473),
            a = _(a, b = y(b, f, m, a, n[i + 12], 20, -1926607734), f, m, n[i + 5], 4, -378558),
            m = _(m, a, b, f, n[i + 8], 11, -2022574463),
            f = _(f, m, a, b, n[i + 11], 16, 1839030562),
            b = _(b, f, m, a, n[i + 14], 23, -35309556),
            a = _(a, b, f, m, n[i + 1], 4, -1530992060),
            m = _(m, a, b, f, n[i + 4], 11, 1272893353),
            f = _(f, m, a, b, n[i + 7], 16, -155497632),
            b = _(b, f, m, a, n[i + 10], 23, -1094730640),
            a = _(a, b, f, m, n[i + 13], 4, 681279174),
            m = _(m, a, b, f, n[i + 0], 11, -358537222),
            f = _(f, m, a, b, n[i + 3], 16, -722521979),
            b = _(b, f, m, a, n[i + 6], 23, 76029189),
            a = _(a, b, f, m, n[i + 9], 4, -640364487),
            m = _(m, a, b, f, n[i + 12], 11, -421815835),
            f = _(f, m, a, b, n[i + 15], 16, 530742520),
            a = x(a, b = _(b, f, m, a, n[i + 2], 23, -995338651), f, m, n[i + 0], 6, -198630844),
            m = x(m, a, b, f, n[i + 7], 10, 1126891415),
            f = x(f, m, a, b, n[i + 14], 15, -1416354905),
            b = x(b, f, m, a, n[i + 5], 21, -57434055),
            a = x(a, b, f, m, n[i + 12], 6, 1700485571),
            m = x(m, a, b, f, n[i + 3], 10, -1894986606),
            f = x(f, m, a, b, n[i + 10], 15, -1051523),
            b = x(b, f, m, a, n[i + 1], 21, -2054922799),
            a = x(a, b, f, m, n[i + 8], 6, 1873313359),
            m = x(m, a, b, f, n[i + 15], 10, -30611744),
            f = x(f, m, a, b, n[i + 6], 15, -1560198380),
            b = x(b, f, m, a, n[i + 13], 21, 1309151649),
            a = x(a, b, f, m, n[i + 4], 6, -145523070),
            m = x(m, a, b, f, n[i + 11], 10, -1120210379),
            f = x(f, m, a, b, n[i + 2], 15, 718787259),
            b = x(b, f, m, a, n[i + 9], 21, -343485551),
            a = a + w >>> 0,
            b = b + S >>> 0,
            f = f + C >>> 0,
            m = m + dd >>> 0
        }
        return l.endian([a, b, f, m])
    }
    )._ff = function(a, b, e, t, n, s, l) {
        var r = a + (b & e | ~b & t) + (n >>> 0) + l;
        return (r << s | r >>> 32 - s) + b
    }
    ,
    c._gg = function(a, b, e, t, n, s, l) {
        var r = a + (b & t | e & ~t) + (n >>> 0) + l;
        return (r << s | r >>> 32 - s) + b
    }
    ,
    c._hh = function(a, b, e, t, n, s, l) {
        var r = a + (b ^ e ^ t) + (n >>> 0) + l;
        return (r << s | r >>> 32 - s) + b
    }
    ,
    c._ii = function(a, b, e, t, n, s, l) {
        var r = a + (e ^ (b | ~t)) + (n >>> 0) + l;
        return (r << s | r >>> 32 - s) + b
    }
    ,
    c._blocksize = 16,
    c._digestsize = 16,
    e.exports = function(e, t) {
        if (null == e)
            throw new Error("Illegal argument " + e);
        var n = l.wordsToBytes(c(e, t));
        return t && t.asBytes ? n : t && t.asString ? d.bytesToString(n) : l.bytesToHex(n)
    }
}