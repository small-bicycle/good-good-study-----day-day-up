
var cookies_SDK = function () {
    window = this;
    window.btoa = require('btoa');

    var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
    var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
    var chrsz = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

    function hex_md5(s) {
        return binl2hex(core_md5(str2binl(s), s.length * chrsz));
    }

    function core_md5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;

        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;

            a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

            a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);

    }

    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }

    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    function str2binl(str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz)
            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
        return bin;
    }

    function str2binl(str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz)
            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
        return bin;
    }

    function binl2hex(binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
                hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
        }
        return str;
    }

    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }


    var _$oa = ['cmVsb2Fk', 'Y2hhaW4=', 'VU5jWVA=', 'V3lFRmQ=', 'cmNHUmc=', 'blN4Zlg=', 'a21Pd3M=', 'c3RhdGVPYmplY3Q=', 'cFNuVEo=', 'WlJVclY=', 'aVVjUUo=', 'RGpuRFM=', 'SkVkcE8=', 'T3VLQkE=', 'amRxSU4=', 'REVCd1c=', 'UkhYRmM=', 'c2lnbj0=', 'Q2RQS3Y=', 'dGVzdA==', 'Y29uc3RydWN0b3I=', 'WHZLaGQ=', 'SFpxeXI=', 'eUhMWXQ=', 'REJRcGM=', 'bGVuZ3Ro', 'YWN0aW9u', 'Wm5lcUo=', 'bUx0Zmk=', 'S0FiVW8=', 'Y1VBSkQ=', 'aW5wdXQ=', 'aGZFeUY=', 'S21QSFQ=', 'VVZZQWY=', 'RFV5TUs=', 'ZGFkcXM=', 'RkRrVHQ=', 'T1BmYm4=', 'aW5pdA==', 'RXBWdGQ=', 'Z3VkV2Y=', 'VkFObUs=', 'ZVJsakE=', 'ZkhPcEM=', 'YWRaU3k=', 'UXBodng=', 'cmlRRWk=', 'RmFPS3g=', 'bW1aTHY=', 'ZXJSbEo=', 'ZW1PbXM=', 'YWlkaW5nX3dpbg==', 'Z2FsWE0=', 'S0p3Yk8=', 'bnBTZVA=', 'WE5RQlc=', 'THlwdnY=', 'SkxhZng=', 'bllIZ0Q=', 'QVhJVnI=', 'WHh0ZEw=', 'dkdyemI=', 'V1l1aHk=', 'YXBwbHk=', 'S3lNR2Q=', 'Z2dlcg==', 'T2l4QlM=', 'S1NTRFQ=', 'dGJoWXI=', 'WE5Ec0o=', 'a0lpWHE=', 'UFhuSlQ=', 'RkNIaEw=', 'SmJkUXI=', 'ZGRRb0U=', 'aXNCUUI=', 'cG53YVg=', 'aXpWVGQ=', 'eGhyYkw=', 'bWlvdGs=', 'XCtcKyAqKD86W2EtekEtWl8kXVswLTlhLXpBLVpfJF0qKQ==', 'dWF5RHc=', 'V0xRT3k=', 'RUZXd3M=', 'bHlvY3k=', 'YkJHSUU=', 'c3RyaW5n', 'anJVY3g=', 'aWFzTUs=', 'Vm5BYm0=', 'ak5ETmc=', 'ZWNJQ0c=', 'ZGVidQ==', 'cE9nVXY=', 'YnRvYQ==', 'aGh0RHg=', 'WGJ2T20=', 'em55WnU=', 'bnNmUWU=', 'bG92YlI=', 'c3BSeE4=', 'QlBrQnQ=', 'blFSRkQ=', 'WU1LbEY=', 'VXhlQlM=', 'c0NXWE4=', '5q2k572R6aG15Y+X44CQ54ix6ZSt5LqR55u+IFYxLjAg5Yqo5oCB54mI44CR5L+d5oqk', 'VmZ6elk=', 'aGRXekM=', 'SUJUTW0=', 'UVdGa0w=', 'TXR4bFc=', 'bkFUaFg=', 'YmJkQ2I=', 'UmxyTkE=', 'dmFsdWVPZg==', 'Z1VxSW0=', 'cWVsR1E=', 'TkhyTnA=', 'cEpPa2Y=', 'RVNjWU0=', 'VEdrU1c=', 'QWNUaGY=', 'YmhDd1g=', 'OyBwYXRoPS8='];
    (function (a, b) {
        var c = function (f) {
            while (--f) {
                a['push'](a['shift']());
            }
        };
        c(++b);
    }(_$oa, 0x16d));
    var _$ob = function (a, b) {
        a = a - 0x0;
        var c = _$oa[a];
        if (_$ob['JahXgq'] === undefined) {
            (function () {
                var f;
                try {
                    var h = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                    f = h();
                } catch (i) {
                    f = window;
                }
                var g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                f['atob'] || (f['atob'] = function (j) {
                        var k = String(j)['replace'](/=+$/, '');
                        var l = '';
                        for (var m = 0x0, n, o, p = 0x0; o = k['charAt'](p++); ~o && (n = m % 0x4 ? n * 0x40 + o : o,
                        m++ % 0x4) ? l += String['fromCharCode'](0xff & n >> (-0x2 * m & 0x6)) : 0x0) {
                            o = g['indexOf'](o);
                        }
                        return l;
                    }
                );
            }());
            _$ob['xZgLJx'] = function (e) {
                var f = atob(e);
                var g = [];
                for (var h = 0x0, j = f['length']; h < j; h++) {
                    g += '%' + ('00' + f['charCodeAt'](h)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(g);
            }
            ;
            _$ob['gZwyJA'] = {};
            _$ob['JahXgq'] = !![];
        }
        var d = _$ob['gZwyJA'][a];
        if (d === undefined) {
            c = _$ob['xZgLJx'](c);
            _$ob['gZwyJA'][a] = c;
        } else {
            c = d;
        }
        return c;
    };

    var a = {
        'riQEi': function (d, e) {
            return d + e;
        },
        'jrUcx': _$ob('0x6a'),
        'XbvOm': _$ob('0x4f'),
        'bjrZk': _$ob('0x14'),
        'UVYAf': function (d, e) {
            return d !== e;
        },
        'FCHhL': _$ob('0x2d'),
        'hhtDx': _$ob('0x37'),
        'KmPHT': function (d, e) {
            return d(e);
        },
        'OuKBA': function (d, e) {
            return d !== e;
        },
        'npSeP': 'IVKiN',
        'WYuhy': _$ob('0x3b'),
        'kikfH': 'function\x20*\x5c(\x20*\x5c)',
        'isBQB': _$ob('0x5e'),
        'cPIPQ': _$ob('0x34'),
        'ZneqJ': function (d, e) {
            return d + e;
        },
        'kIiXq': _$ob('0xe'),
        'FaOKx': _$ob('0x2c'),
        'nQRFD': function (d) {
            return d();
        },
        'adZSy': function (d, e, f) {
            return d(e, f);
        },
        'DEBwW': function (d, e) {
            return d === e;
        },
        'EpVtd': _$ob('0x4e'),
        'nAThX': 'yGDPV',
        'UxeBS': function (d, e) {
            return d(e);
        },
        'OPfbn': function (d, e) {
            return d + e;
        },
        'utPUI': 'nKxpc',
        'MDyiP': function (d, e) {
            return d(e);
        },
        'EMnSy': function (d) {
            return d();
        },
        'qelGQ': _$ob('0x58'),
        'DBQpc': _$ob('0x7c'),
        'mLtfi': _$ob('0x78'),
        'jdqIN': _$ob('0x41'),
        'pOgUv': function (d, e) {
            return d(e);
        },
        'WLQOy': function (d, e) {
            return d(e);
        },
        'nsfQe': function (d, e) {
            return d / e;
        },
        'nSxfX': function (d, e) {
            return d + e;
        },
        'JLafx': function (d, e) {
            return d + e;
        },
        'hmzZS': _$ob('0x1e'),
        'RHXFc': function (d, e) {
            return d / e;
        },
        'bhCwX': _$ob('0xc')
    };

    var c = new Date()[_$ob('0x3')]();
    // var c = 1587102734000
    console.log(c)
    token = window[_$ob('0x6c')](a[_$ob('0x33')](a[_$ob('0x1b')], a['pOgUv'](String, c)));
    md = a[_$ob('0x6b')](hex_md5, window['btoa'](a[_$ob('0x33')](a['jdqIN'], a[_$ob('0x60')](String, Math['round'](a[_$ob('0x70')](c, 0x3e8))))));

    cookie = a[_$ob('0x12')](a['nSxfX'](a[_$ob('0x12')](a[_$ob('0x47')](a[_$ob('0x47')](a['JLafx'](a['hmzZS'], Math['round'](a[_$ob('0x1d')](c, 0x3e8))), '~'), token), '|'), md), a[_$ob('0xb')]);

    return cookie
}
console.log(cookies_SDK())