var JSEncryptExports = {};
(function (p) {
    function n(nj, nO, nt) {
        null != nj && ("number" == typeof nj ? this["fromNumber"](nj, nO, nt) : null == nO && "string" != typeof nj ? this["fromString"](nj, 0x100) : this["fromString"](nj, nO));
    }

    function c() {
        return new n(null);
    }

    function a(nj, nO, nt, nX, nG, nx) {
        for (; --nx >= 0x0;) {
            var nN = nO * this[nj++] + nt[nX] + nG;
            (nG = Math["floor"](nN / 0x4000000)),
                (nt[nX++] = 0x3ffffff & nN);
        }
        return nG;
    }

    function A(nj, nO, nt, nX, nG, nx) {
        for (var nN = 0x7fff & nO,
                 nD = nO >> 0xf; --nx >= 0x0;) {
            var ny = 0x7fff & this[nj],
                no = this[nj++] >> 0xf,
                nv = nD * ny + no * nN;
            (ny = nN * ny + ((0x7fff & nv) << 0xf) + nt[nX] + (0x3fffffff & nG)),
                (nG = (ny >>> 0x1e) + (nv >>> 0xf) + nD * no + (nG >>> 0x1e)),
                (nt[nX++] = 0x3fffffff & ny);
        }
        return nG;
    }

    function g(nj, nO, nt, nX, nG, nx) {
        for (var nN = 0x3fff & nO,
                 nD = nO >> 0xe; --nx >= 0x0;) {
            var ny = 0x3fff & this[nj],
                no = this[nj++] >> 0xe,
                nv = nD * ny + no * nN;
            (ny = nN * ny + ((0x3fff & nv) << 0xe) + nt[nX] + nG),
                (nG = (ny >> 0x1c) + (nv >> 0xe) + nD * no),
                (nt[nX++] = 0xfffffff & ny);
        }
        return nG;
    }

    function S(nj) {
        return nW["charAt"](nj);
    }

    function f(nj, nO) {
        var nt = nl[nj["charCodeAt"](nO)];
        return null == nt ? -0x1 : nt;
    }

    function Y(nj) {
        for (var nO = this["t"] - 0x1; nO >= 0x0; --nO) nj[nO] = this[nO];
        (nj["t"] = this["t"]),
            (nj["s"] = this["s"]);
    }

    function J(nj) {
        (this["t"] = 0x1),
            (this["s"] = 0x0 > nj ? -0x1 : 0x0),
            nj > 0x0 ? (this[0x0] = nj) : -0x1 > nj ? (this[0x0] = nj + DV) : (this["t"] = 0x0);
    }

    function b(nj) {
        var nO = c();
        return nO["fromInt"](nj),
            nO;
    }

    function C(nj, nO) {
        var nt;
        if (0x10 == nO) nt = 0x4;
        else {
            if (0x8 == nO) nt = 0x3;
            else {
                if (0x100 == nO) nt = 0x8;
                else {
                    if (0x2 == nO) nt = 0x1;
                    else {
                        if (0x20 == nO) nt = 0x5;
                        else {
                            if (0x4 != nO) return void this["fromRadix"](nj, nO);
                            nt = 0x2;
                        }
                    }
                }
            }
        }
        (this["t"] = 0x0),
            (this["s"] = 0x0);
        for (var nX = nj["length"], nG = !0x1, nx = 0x0; --nX >= 0x0;
        ) {
            var nN = 0x8 == nt ? 0xff & nj[nX] : f(nj, nX);
            0x0 > nN ? "-" == nj["charAt"](nX) && (nG = !0x0) : ((nG = !0x1), 0x0 == nx ? (this[this["t"]++] = nN) : nx + nt > this["DB"] ? ((this[this["t"] - 0x1] |= (nN & ((0x1 << (this["DB"] - nx)) - 0x1)) << nx), (this[this["t"]++] = nN >> (this["DB"] - nx))) : (this[this["t"] - 0x1] |= nN << nx), (nx += nt), nx >= this["DB"] && (nx -= this["DB"]));
        }
        0x8 == nt && 0x0 != (0x80 & nj[0x0]) && ((this["s"] = -0x1), nx > 0x0 && (this[this["t"] - 0x1] |= ((0x1 << (this["DB"] - nx)) - 0x1) << nx)),
            this["clamp"](),
        nG && n["ZERO"]["subTo"](this, this);
    }

    function V() {
        for (var nj = this["s"] & this["DM"]; this["t"] > 0x0 && this[this["t"] - 0x1] == nj;
        ) --this["t"];
    }

    function W(nj) {
        if (this["s"] < 0x0) return ("-" + this["negate"]()["toString"](nj));
        var nO;
        if (0x10 == nj) nO = 0x4;
        else {
            if (0x8 == nj) nO = 0x3;
            else {
                if (0x2 == nj) nO = 0x1;
                else {
                    if (0x20 == nj) nO = 0x5;
                    else {
                        if (0x4 != nj) return this["toRadix"](nj);
                        nO = 0x2;
                    }
                }
            }
        }
        var nt, nX = (0x1 << nO) - 0x1,
            nG = !0x1,
            nx = "",
            nN = this["t"],
            nD = this["DB"] - ((nN * this["DB"]) % nO);
        if (nN-- > 0x0) {
            for (nD < this["DB"] && (nt = this[nN] >> nD) > 0x0 && ((nG = !0x0), (nx = S(nt))); nN >= 0x0;
            ) nO > nD ? ((nt = (this[nN] & ((0x1 << nD) - 0x1)) << (nO - nD)), (nt |= this[--nN] >> (nD += this["DB"] - nO))) : ((nt = (this[nN] >> (nD -= nO)) & nX), 0x0 >= nD && ((nD += this["DB"]), --nN)),
            nt > 0x0 && (nG = !0x0),
            nG && (nx += S(nt));
        }
        return nG ? nx : "0";
    }

    function l() {
        var nj = c();
        return n["ZERO"]["subTo"](this, nj),
            nj;
    }

    function R() {
        return this["s"] < 0x0 ? this["negate"]() : this;
    }

    function B(nj) {
        var nO = this["s"] - nj["s"];
        if (0x0 != nO) return nO;
        var nt = this["t"];
        if (((nO = nt - nj["t"]), 0x0 != nO)) return this["s"] < 0x0 ? -nO : nO;
        for (; --nt >= 0x0;) if (0x0 != (nO = this[nt] - nj[nt])) return nO;
        return 0x0;
    }

    function F(nj) {
        var nO, nt = 0x1;
        return (0x0 != (nO = nj >>> 0x10) && ((nj = nO), (nt += 0x10)), 0x0 != (nO = nj >> 0x8) && ((nj = nO), (nt += 0x8)), 0x0 != (nO = nj >> 0x4) && ((nj = nO), (nt += 0x4)), 0x0 != (nO = nj >> 0x2) && ((nj = nO), (nt += 0x2)), 0x0 != (nO = nj >> 0x1) && ((nj = nO), (nt += 0x1)), nt);
    }

    function E() {
        return this["t"] <= 0x0 ? 0x0 : this["DB"] * (this["t"] - 0x1) + F(this[this["t"] - 0x1] ^ (this["s"] & this["DM"]));
    }

    function s(nj, nO) {
        var nt;
        for (nt = this["t"] - 0x1; nt >= 0x0; --nt) nO[nt + nj] = this[nt];
        for (nt = nj - 0x1; nt >= 0x0; --nt) nO[nt] = 0x0;
        (nO["t"] = this["t"] + nj),
            (nO["s"] = this["s"]);
    }

    function I(nj, nO) {
        for (var nt = nj; nt < this["t"]; ++nt) nO[nt - nj] = this[nt];
        (nO["t"] = Math["max"](this["t"] - nj, 0x0)),
            (nO["s"] = this["s"]);
    }

    function K(nj, nO) {
        var nt, nX = nj % this["DB"],
            nG = this["DB"] - nX,
            nx = (0x1 << nG) - 0x1,
            nN = Math["floor"](nj / this["DB"]),
            nD = (this["s"] << nX) & this["DM"];
        for (nt = this["t"] - 0x1; nt >= 0x0; --nt) (nO[nt + nN + 0x1] = (this[nt] >> nG) | nD),
            (nD = (this[nt] & nx) << nX);
        for (nt = nN - 0x1; nt >= 0x0; --nt) nO[nt] = 0x0;
        (nO[nN] = nD),
            (nO["t"] = this["t"] + nN + 0x1),
            (nO["s"] = this["s"]),
            nO["clamp"]();
    }

    function T(nj, nO) {
        nO["s"] = this["s"];
        var nt = Math["floor"](nj / this["DB"]);
        if (nt >= this["t"]) return void (nO["t"] = 0x0);
        var nX = nj % this["DB"],
            nG = this["DB"] - nX,
            nx = (0x1 << nX) - 0x1;
        nO[0x0] = this[nt] >> nX;
        for (var nN = nt + 0x1; nN < this["t"]; ++nN) (nO[nN - nt - 0x1] |= (this[nN] & nx) << nG),
            (nO[nN - nt] = this[nN] >> nX);
        nX > 0x0 && (nO[this["t"] - nt - 0x1] |= (this["s"] & nx) << nG),
            (nO["t"] = this["t"] - nt),
            nO["clamp"]();
    }

    function i(nj, nO) {
        for (var nt = 0x0,
                 nX = 0x0,
                 nG = Math["min"](nj["t"], this["t"]); nG > nt;
        ) (nX += this[nt] - nj[nt]),
            (nO[nt++] = nX & this["DM"]),
            (nX >>= this["DB"]);
        if (nj["t"] < this["t"]) {
            for (nX -= nj["s"]; nt < this["t"];) (nX += this[nt]),
                (nO[nt++] = nX & this["DM"]),
                (nX >>= this["DB"]);
            nX += this["s"];
        } else {
            for (nX += this["s"]; nt < nj["t"];) (nX -= nj[nt]),
                (nO[nt++] = nX & this["DM"]),
                (nX >>= this["DB"]);
            nX -= nj["s"];
        }
        (nO["s"] = 0x0 > nX ? -0x1 : 0x0),
            -0x1 > nX ? (nO[nt++] = this["DV"] + nX) : nX > 0x0 && (nO[nt++] = nX),
            (nO["t"] = nt),
            nO["clamp"]();
    }

    function e(nj, nO) {
        var nt = this["abs"](),
            nX = nj["abs"](),
            nG = nt["t"];
        for (nO["t"] = nG + nX["t"]; --nG >= 0x0;) nO[nG] = 0x0;
        for (nG = 0x0; nG < nX["t"]; ++nG) nO[nG + nt["t"]] = nt["am"](0x0, nX[nG], nO, nG, 0x0, nt["t"]);
        (nO["s"] = 0x0),
            nO["clamp"](),
        this["s"] != nj["s"] && n["ZERO"]["subTo"](nO, nO);
    }

    function Z(nj) {
        for (var nO = this["abs"](), nt = (nj["t"] = 0x2 * nO["t"]); --nt >= 0x0;
        ) nj[nt] = 0x0;
        for (nt = 0x0; nt < nO["t"] - 0x1; ++nt) {
            var nX = nO["am"](nt, nO[nt], nj, 0x2 * nt, 0x0, 0x1);
            (nj[nt + nO["t"]] += nO["am"](nt + 0x1, 0x2 * nO[nt], nj, 0x2 * nt + 0x1, nX, nO["t"] - nt - 0x1)) >= nO["DV"] && ((nj[nt + nO["t"]] -= nO["DV"]), (nj[nt + nO["t"] + 0x1] = 0x1));
        }
        nj["t"] > 0x0 && (nj[nj["t"] - 0x1] += nO["am"](nt, nO[nt], nj, 0x2 * nt, 0x0, 0x1)),
            (nj["s"] = 0x0),
            nj["clamp"]();
    }

    function w(nj, nO, nt) {
        var nX = nj["abs"]();
        if (!(nX["t"] <= 0x0)) {
            var nG = this["abs"]();
            if (nG["t"] < nX["t"]) return (null != nO && nO["fromInt"](0x0), void (null != nt && this["copyTo"](nt)));
            null == nt && (nt = c());
            var nx = c(),
                nN = this["s"],
                nD = nj["s"],
                ny = this["DB"] - F(nX[nX["t"] - 0x1]);
            ny > 0x0 ? (nX["lShiftTo"](ny, nx), nG["lShiftTo"](ny, nt)) : (nX["copyTo"](nx), nG["copyTo"](nt));
            var no = nx["t"],
                nv = nx[no - 0x1];
            if (0x0 != nv) {
                var nm = nv * (0x1 << this["F1"]) + (no > 0x1 ? nx[no - 0x2] >> this["F2"] : 0x0),
                    nd = this["FV"] / nm,
                    nr = (0x1 << this["F1"]) / nm,
                    nQ = 0x1 << this["F2"],
                    nP = nt["t"],
                    c0 = nP - no,
                    c1 = null == nO ? c() : nO;
                for (nx["dlShiftTo"](c0, c1), nt["compareTo"](c1) >= 0x0 && ((nt[nt["t"]++] = 0x1), nt["subTo"](c1, nt)), n["ONE"]["dlShiftTo"](no, c1), c1["subTo"](nx, nx); nx["t"] < no;
                ) nx[nx["t"]++] = 0x0;
                for (; --c0 >= 0x0;) {
                    var c2 = nt[--nP] == nv ? this["DM"] : Math["floor"](nt[nP] * nd + (nt[nP - 0x1] + nQ) * nr);
                    if ((nt[nP] += nx["am"](0x0, c2, nt, c0, 0x0, no)) < c2) {
                        for (nx["dlShiftTo"](c0, c1), nt["subTo"](c1, nt); nt[nP] < --c2;
                        ) nt["subTo"](c1, nt);
                    }
                }
                null != nO && (nt["drShiftTo"](no, nO), nN != nD && n["ZERO"]["subTo"](nO, nO)),
                    (nt["t"] = no),
                    nt["clamp"](),
                ny > 0x0 && nt["rShiftTo"](ny, nt),
                0x0 > nN && n["ZERO"]["subTo"](nt, nt);
            }
        }
    }

    function M(nj) {
        var nO = c();
        return (this["abs"]()["divRemTo"](nj, null, nO), this["s"] < 0x0 && nO["compareTo"](n["ZERO"]) > 0x0 && nj["subTo"](nO, nO), nO);
    }

    function u(nj) {
        this["m"] = nj;
    }

    function k(nj) {
        return nj["s"] < 0x0 || nj["compareTo"](this["m"]) >= 0x0 ? nj["mod"](this["m"]) : nj;
    }

    function q(nj) {
        return nj;
    }

    function U(nj) {
        nj["divRemTo"](this["m"], null, nj);
    }

    function h(nj, nO, nt) {
        nj["multiplyTo"](nO, nt),
            this["reduce"](nt);
    }

    function H(nj, nO) {
        nj["squareTo"](nO),
            this["reduce"](nO);
    }

    function j() {
        if (this["t"] < 0x1) return 0x0;
        var nj = this[0x0];
        if (0x0 == (0x1 & nj)) return 0x0;
        var nO = 0x3 & nj;
        return ((nO = (nO * (0x2 - (0xf & nj) * nO)) & 0xf), (nO = (nO * (0x2 - (0xff & nj) * nO)) & 0xff), (nO = (nO * (0x2 - (((0xffff & nj) * nO) & 0xffff))) & 0xffff), (nO = (nO * (0x2 - ((nj * nO) % this["DV"]))) % this["DV"]), nO > 0x0 ? this["DV"] - nO : -nO);
    }

    function O(nj) {
        (this["m"] = nj),
            (this["mp"] = nj["invDigit"]()),
            (this["mpl"] = 0x7fff & this["mp"]),
            (this["mph"] = this["mp"] >> 0xf),
            (this["um"] = (0x1 << (nj["DB"] - 0xf)) - 0x1),
            (this["mt2"] = 0x2 * nj["t"]);
    }

    function X(nj) {
        var nO = c();
        return (nj["abs"]()["dlShiftTo"](this["m"]["t"], nO), nO["divRemTo"](this["m"], null, nO), nj["s"] < 0x0 && nO["compareTo"](n["ZERO"]) > 0x0 && this["m"]["subTo"](nO, nO), nO);
    }

    function G(nj) {
        var nO = c();
        return (nj["copyTo"](nO), this["reduce"](nO), nO);
    }

    function x(nj) {
        for (; nj["t"] <= this["mt2"];) nj[nj["t"]++] = 0x0;
        for (var nO = 0x0; nO < this["m"]["t"]; ++nO) {
            var nt = 0x7fff & nj[nO],
                nX = (nt * this["mpl"] + (((nt * this["mph"] + (nj[nO] >> 0xf) * this["mpl"]) & this["um"]) << 0xf)) & nj["DM"];
            for (nt = nO + this["m"]["t"], nj[nt] += this["m"]["am"](0x0, nX, nj, nO, 0x0, this["m"]["t"]); nj[nt] >= nj["DV"];
            ) (nj[nt] -= nj["DV"]),
                nj[++nt]++;
        }
        nj["clamp"](),
            nj["drShiftTo"](this["m"]["t"], nj),
        nj["compareTo"](this["m"]) >= 0x0 && nj["subTo"](this["m"], nj);
    }

    function N(nj, nO) {
        nj["squareTo"](nO),
            this["reduce"](nO);
    }

    function D(nj, nO, nt) {
        nj["multiplyTo"](nO, nt),
            this["reduce"](nt);
    }

    function y() {
        return 0x0 == (this["t"] > 0x0 ? 0x1 & this[0x0] : this["s"]);
    }

    function o(nj, nO) {
        if (nj > 0xffffffff || 0x1 > nj) return n["ONE"];
        var nt = c(),
            nX = c(),
            nG = nO["convert"](this),
            nx = F(nj) - 0x1;
        for (nG["copyTo"](nt); --nx >= 0x0;) if ((nO["sqrTo"](nt, nX), (nj & (0x1 << nx)) > 0x0)) nO["mulTo"](nX, nG, nt);
        else {
            var nN = nt;
            (nt = nX),
                (nX = nN);
        }
        return nO["revert"](nt);
    }

    function v(nj, nO) {
        var nt;
        return ((nt = 0x100 > nj || nO["isEven"]() ? new u(nO) : new O(nO)), this["exp"](nj, nt));
    }

    function m() {
        var nj = c();
        return this["copyTo"](nj),
            nj;
    }

    function d() {
        if (this["s"] < 0x0) {
            if (0x1 == this["t"]) return this[0x0] - this["DV"];
            if (0x0 == this["t"]) return -0x1;
        } else {
            if (0x1 == this["t"]) return this[0x0];
            if (0x0 == this["t"]) return 0x0;
        }
        return (((this[0x1] & ((0x1 << (0x20 - this["DB"])) - 0x1)) << this["DB"]) | this[0x0]);
    }

    function r() {
        return 0x0 == this["t"] ? this["s"] : (this[0x0] << 0x18) >> 0x18;
    }

    function Q() {
        return 0x0 == this["t"] ? this["s"] : (this[0x0] << 0x10) >> 0x10;
    }

    function P(nj) {
        return Math["floor"]((Math["LN2"] * this["DB"]) / Math["log"](nj));
    }

    function p0() {
        return this["s"] < 0x0 ? -0x1 : this["t"] <= 0x0 || (0x1 == this["t"] && this[0x0] <= 0x0) ? 0x0 : 0x1;
    }

    function p1(nj) {
        if ((null == nj && (nj = 0xa), 0x0 == this["signum"]() || 0x2 > nj || nj > 0x24)) return "0";
        var nO = this["chunkSize"](nj),
            nt = Math["pow"](nj, nO),
            nX = b(nt),
            nG = c(),
            nx = c(),
            nN = "";
        for (this["divRemTo"](nX, nG, nx); nG["signum"]() > 0x0;
        ) (nN = (nt + nx["intValue"]())["toString"](nj)["substr"](0x1) + nN),
            nG["divRemTo"](nX, nG, nx);
        return (nx["intValue"]()["toString"](nj) + nN);
    }

    function p2(nj, nO) {
        this["fromInt"](0x0),
        null == nO && (nO = 0xa);
        for (var nt = this["chunkSize"](nO), nX = Math["pow"](nO, nt), nG = !0x1, nx = 0x0, nN = 0x0, nD = 0x0; nD < nj["length"]; ++nD) {
            var ny = f(nj, nD);
            0x0 > ny ? "-" == nj["charAt"](nD) && 0x0 == this["signum"]() && (nG = !0x0) : ((nN = nO * nN + ny), ++nx >= nt && (this["dMultiply"](nX), this["dAddOffset"](nN, 0x0), (nx = 0x0), (nN = 0x0)));
        }
        nx > 0x0 && (this["dMultiply"](Math["pow"](nO, nx)), this["dAddOffset"](nN, 0x0)),
        nG && n["ZERO"]["subTo"](this, this);
    }

    function p3(nj, nO, nt) {
        if ("number" == typeof nO) {
            if (0x2 > nj) this["fromInt"](0x1);
            else {
                for (this["fromNumber"](nj, nt), this["testBit"](nj - 0x1) || this["bitwiseTo"](n["ONE"]["shiftLeft"](nj - 0x1), pn, this), this["isEven"]() && this["dAddOffset"](0x1, 0x0); !this["isProbablePrime"](nO);
                ) this["dAddOffset"](0x2, 0x0),
                this["bitLength"]() > nj && this["subTo"](n["ONE"]["shiftLeft"](nj - 0x1), this);
            }
        } else {
            var nX = new Array(),
                nG = 0x7 & nj;
            (nX["length"] = (nj >> 0x3) + 0x1),
                nO["nextBytes"](nX),
                nG > 0x0 ? (nX[0x0] &= (0x1 << nG) - 0x1) : (nX[0x0] = 0x0),
                this["fromString"](nX, 0x100);
        }
    }

    function p4() {
        var nj = this["t"],
            nO = new Array();
        nO[0x0] = this["s"];
        var nt, nX = this["DB"] - ((nj * this["DB"]) % 0x8),
            nG = 0x0;
        if (nj-- > 0x0) {
            for (nX < this["DB"] && (nt = this[nj] >> nX) != (this["s"] & this["DM"]) >> nX && (nO[nG++] = nt | (this["s"] << (this["DB"] - nX))); nj >= 0x0;
            ) 0x8 > nX ? ((nt = (this[nj] & ((0x1 << nX) - 0x1)) << (0x8 - nX)), (nt |= this[--nj] >> (nX += this["DB"] - 0x8))) : ((nt = (this[nj] >> (nX -= 0x8)) & 0xff), 0x0 >= nX && ((nX += this["DB"]), --nj)),
            0x0 != (0x80 & nt) && (nt |= -0x100),
            0x0 == nG && (0x80 & this["s"]) != (0x80 & nt) && ++nG,
            (nG > 0x0 || nt != this["s"]) && (nO[nG++] = nt);
        }
        return nO;
    }

    function p5(nj) {
        return 0x0 == this["compareTo"](nj);
    }

    function p6(nj) {
        return this["compareTo"](nj) < 0x0 ? this : nj;
    }

    function p7(nj) {
        return this["compareTo"](nj) > 0x0 ? this : nj;
    }

    function p8(nj, nO, nt) {
        var nX, nG, nx = Math["min"](nj["t"], this["t"]);
        for (nX = 0x0; nx > nX; ++nX) nt[nX] = nO(this[nX], nj[nX]);
        if (nj["t"] < this["t"]) {
            for (nG = nj["s"] & this["DM"], nX = nx; nX < this["t"]; ++nX) nt[nX] = nO(this[nX], nG);
            nt["t"] = this["t"];
        } else {
            for (nG = this["s"] & this["DM"], nX = nx; nX < nj["t"]; ++nX) nt[nX] = nO(nG, nj[nX]);
            nt["t"] = nj["t"];
        }
        (nt["s"] = nO(this["s"], nj["s"])),
            nt["clamp"]();
    }

    function p9(nj, nO) {
        return nj & nO;
    }

    function pp(nj) {
        var nO = c();
        return this["bitwiseTo"](nj, p9, nO),
            nO;
    }

    function pn(nj, nO) {
        return nj | nO;
    }

    function pc(nj) {
        var nO = c();
        return this["bitwiseTo"](nj, pn, nO),
            nO;
    }

    function pa(nj, nO) {
        return nj ^ nO;
    }

    function pA(nj) {
        var nO = c();
        return this["bitwiseTo"](nj, pa, nO),
            nO;
    }

    function pL(nj, nO) {
        return nj & ~nO;
    }

    function pg(nj) {
        var nO = c();
        return this["bitwiseTo"](nj, pL, nO),
            nO;
    }

    function pS() {
        for (var nj = c(), nO = 0x0; nO < this["t"]; ++nO) nj[nO] = this["DM"] & ~this[nO];
        return (nj["t"] = this["t"]),
            (nj["s"] = ~this["s"]),
            nj;
    }

    function pf(nj) {
        var nO = c();
        return (0x0 > nj ? this["rShiftTo"](-nj, nO) : this["lShiftTo"](nj, nO), nO);
    }

    function pY(nj) {
        var nO = c();
        return (0x0 > nj ? this["lShiftTo"](-nj, nO) : this["rShiftTo"](nj, nO), nO);
    }

    function pJ(nj) {
        if (0x0 == nj) return -0x1;
        var nO = 0x0;
        return (0x0 == (0xffff & nj) && ((nj >>= 0x10), (nO += 0x10)), 0x0 == (0xff & nj) && ((nj >>= 0x8), (nO += 0x8)), 0x0 == (0xf & nj) && ((nj >>= 0x4), (nO += 0x4)), 0x0 == (0x3 & nj) && ((nj >>= 0x2), (nO += 0x2)), 0x0 == (0x1 & nj) && ++nO, nO);
    }

    function pb() {
        for (var nj = 0x0; nj < this["t"]; ++nj) if (0x0 != this[nj]) return nj * this["DB"] + pJ(this[nj]);
        return this["s"] < 0x0 ? this["t"] * this["DB"] : -0x1;
    }

    function pC(nj) {
        for (var nO = 0x0; 0x0 != nj;) (nj &= nj - 0x1),
            ++nO;
        return nO;
    }

    function pV() {
        for (var nj = 0x0,
                 nO = this["s"] & this["DM"], nt = 0x0; nt < this["t"]; ++nt) nj += pC(this[nt] ^ nO);
        return nj;
    }

    function pW(nj) {
        var nO = Math["floor"](nj / this["DB"]);
        return nO >= this["t"] ? 0x0 != this["s"] : 0x0 != (this[nO] & (0x1 << nj % this["DB"]));
    }

    function pl(nj, nO) {
        var nt = n["ONE"]["shiftLeft"](nj);
        return this["bitwiseTo"](nt, nO, nt),
            nt;
    }

    function pR(nj) {
        return this["changeBit"](nj, pn);
    }

    function pB(nj) {
        return this["changeBit"](nj, pL);
    }

    function pF(nj) {
        return this["changeBit"](nj, pa);
    }

    function pE(nj, nO) {
        for (var nt = 0x0,
                 nX = 0x0,
                 nG = Math["min"](nj["t"], this["t"]); nG > nt;
        ) (nX += this[nt] + nj[nt]),
            (nO[nt++] = nX & this["DM"]),
            (nX >>= this["DB"]);
        if (nj["t"] < this["t"]) {
            for (nX += nj["s"]; nt < this["t"];) (nX += this[nt]),
                (nO[nt++] = nX & this["DM"]),
                (nX >>= this["DB"]);
            nX += this["s"];
        } else {
            for (nX += this["s"]; nt < nj["t"];) (nX += nj[nt]),
                (nO[nt++] = nX & this["DM"]),
                (nX >>= this["DB"]);
            nX += nj["s"];
        }
        (nO["s"] = 0x0 > nX ? -0x1 : 0x0),
            nX > 0x0 ? (nO[nt++] = nX) : -0x1 > nX && (nO[nt++] = this["DV"] + nX),
            (nO["t"] = nt),
            nO["clamp"]();
    }

    function ps(nj) {
        var nO = c();
        return this["addTo"](nj, nO),
            nO;
    }

    function pI(nj) {
        var nO = c();
        return this["subTo"](nj, nO),
            nO;
    }

    function pK(nj) {
        var nO = c();
        return this["multiplyTo"](nj, nO),
            nO;
    }

    function pT() {
        var nj = c();
        return this["squareTo"](nj),
            nj;
    }

    function pi(nj) {
        var nO = c();
        return this["divRemTo"](nj, nO, null),
            nO;
    }

    function pe(nj) {
        var nO = c();
        return this["divRemTo"](nj, null, nO),
            nO;
    }

    function pZ(nj) {
        var nO = c(),
            nt = c();
        return (this["divRemTo"](nj, nO, nt), new Array(nO, nt));
    }

    function pw(nj) {
        (this[this["t"]] = this["am"](0x0, nj - 0x1, this, 0x0, 0x0, this["t"])),
            ++this["t"],
            this["clamp"]();
    }

    function pM(nj, nO) {
        if (0x0 != nj) {
            for (; this["t"] <= nO;) this[this["t"]++] = 0x0;
            for (this[nO] += nj; this[nO] >= this["DV"];) (this[nO] -= this["DV"]),
            ++nO >= this["t"] && (this[this["t"]++] = 0x0),
                ++this[nO];
        }
    }

    function pu() {
    }

    function pk(nj) {
        return nj;
    }

    function pq(nj, nO, nt) {
        nj["multiplyTo"](nO, nt);
    }

    function pU(nj, nO) {
        nj["squareTo"](nO);
    }

    function pz(nj) {
        return this["exp"](nj, new pu());
    }

    function ph(nj, nO, nt) {
        var nX = Math["min"](this["t"] + nj["t"], nO);
        for (nt["s"] = 0x0, nt["t"] = nX; nX > 0x0;) nt[--nX] = 0x0;
        var nG;
        for (nG = nt["t"] - this["t"]; nG > nX; ++nX) nt[nX + this["t"]] = this["am"](0x0, nj[nX], nt, nX, 0x0, this["t"]);
        for (nG = Math["min"](nj["t"], nO); nG > nX; ++nX) this["am"](0x0, nj[nX], nt, nX, 0x0, nO - nX);
        nt["clamp"]();
    }

    function pH(nj, nO, nt) {
        --nO;
        var nX = (nt["t"] = this["t"] + nj["t"] - nO);
        for (nt["s"] = 0x0; --nX >= 0x0;) nt[nX] = 0x0;
        for (nX = Math["max"](nO - this["t"], 0x0); nX < nj["t"]; ++nX) nt[this["t"] + nX - nO] = this["am"](nO - nX, nj[nX], nt, 0x0, 0x0, this["t"] + nX - nO);
        nt["clamp"](),
            nt["drShiftTo"](0x1, nt);
    }

    function pj(nj) {
        (this["r2"] = c()),
            (this["q3"] = c()),
            n["ONE"]["dlShiftTo"](0x2 * nj["t"], this["r2"]),
            (this["mu"] = this["r2"]["divide"](nj)),
            (this["m"] = nj);
    }

    function pO(nj) {
        if (nj["s"] < 0x0 || nj["t"] > 0x2 * this["m"]["t"]) return nj["mod"](this["m"]);
        if (nj["compareTo"](this["m"]) < 0x0) return nj;
        var nO = c();
        return (nj["copyTo"](nO), this["reduce"](nO), nO);
    }

    function pt(nj) {
        return nj;
    }

    function pX(nj) {
        for (nj["drShiftTo"](this["m"]["t"] - 0x1, this["r2"]), nj["t"] > this["m"]["t"] + 0x1 && ((nj["t"] = this["m"]["t"] + 0x1), nj["clamp"]()), this["mu"]["multiplyUpperTo"](this["r2"], this["m"]["t"] + 0x1, this["q3"]), this["m"]["multiplyLowerTo"](this["q3"], this["m"]["t"] + 0x1, this["r2"]); nj["compareTo"](this["r2"]) < 0x0;
        ) nj["dAddOffset"](0x1, this["m"]["t"] + 0x1);
        for (nj["subTo"](this["r2"], nj); nj["compareTo"](this["m"]) >= 0x0;
        ) nj["subTo"](this["m"], nj);
    }

    function pG(nj, nO) {
        nj["squareTo"](nO),
            this["reduce"](nO);
    }

    function px(nj, nO, nt) {
        nj["multiplyTo"](nO, nt),
            this["reduce"](nt);
    }

    function pN(nj, nO) {
        var nt, nX, nG = nj["bitLength"](),
            nx = b(0x1);
        if (0x0 >= nG) return nx;
        (nt = 0x12 > nG ? 0x1 : 0x30 > nG ? 0x3 : 0x90 > nG ? 0x4 : 0x300 > nG ? 0x5 : 0x6),
            (nX = 0x8 > nG ? new u(nO) : nO["isEven"]() ? new pj(nO) : new O(nO));
        var nN = new Array(),
            nD = 0x3,
            ny = nt - 0x1,
            no = (0x1 << nt) - 0x1;
        if (((nN[0x1] = nX["convert"](this)), nt > 0x1)) {
            var nv = c();
            for (nX["sqrTo"](nN[0x1], nv); no >= nD;) (nN[nD] = c()),
                nX["mulTo"](nv, nN[nD - 0x2], nN[nD]),
                (nD += 0x2);
        }
        var nm, nd, nr = nj["t"] - 0x1,
            nQ = !0x0,
            nP = c();
        for (nG = F(nj[nr]) - 0x1; nr >= 0x0;) {
            for (nG >= ny ? (nm = (nj[nr] >> (nG - ny)) & no) : ((nm = (nj[nr] & ((0x1 << (nG + 0x1)) - 0x1)) << (ny - nG)), nr > 0x0 && (nm |= nj[nr - 0x1] >> (this["DB"] + nG - ny))), nD = nt; 0x0 == (0x1 & nm);
            ) (nm >>= 0x1),
                --nD;
            if (((nG -= nD) < 0x0 && ((nG += this["DB"]), --nr), nQ)) nN[nm]["copyTo"](nx),
                (nQ = !0x1);
            else {
                for (; nD > 0x1;) nX["sqrTo"](nx, nP),
                    nX["sqrTo"](nP, nx),
                    (nD -= 0x2);
                nD > 0x0 ? nX["sqrTo"](nx, nP) : ((nd = nx), (nx = nP), (nP = nd)),
                    nX["mulTo"](nP, nN[nm], nx);
            }
            for (; nr >= 0x0 && 0x0 == (nj[nr] & (0x1 << nG));) nX["sqrTo"](nx, nP),
                (nd = nx),
                (nx = nP),
                (nP = nd),
            --nG < 0x0 && ((nG = this["DB"] - 0x1), --nr);
        }
        return nX["revert"](nx);
    }

    function pD(nj) {
        var nO = this["s"] < 0x0 ? this["negate"]() : this["clone"](),
            nt = nj["s"] < 0x0 ? nj["negate"]() : nj["clone"]();
        if (nO["compareTo"](nt) < 0x0) {
            var nX = nO;
            (nO = nt),
                (nt = nX);
        }
        var nG = nO["getLowestSetBit"](),
            nx = nt["getLowestSetBit"]();
        if (0x0 > nx) return nO;
        for (nx > nG && (nx = nG), nx > 0x0 && (nO["rShiftTo"](nx, nO), nt["rShiftTo"](nx, nt)); nO["signum"]() > 0x0;
        ) (nG = nO["getLowestSetBit"]()) > 0x0 && nO["rShiftTo"](nG, nO),
        (nG = nt["getLowestSetBit"]()) > 0x0 && nt["rShiftTo"](nG, nt),
            nO["compareTo"](nt) >= 0x0 ? (nO["subTo"](nt, nO), nO["rShiftTo"](0x1, nO)) : (nt["subTo"](nO, nt), nt["rShiftTo"](0x1, nt));
        return nx > 0x0 && nt["lShiftTo"](nx, nt),
            nt;
    }

    function py(nj) {
        if (0x0 >= nj) return 0x0;
        var nO = this["DV"] % nj,
            nt = this["s"] < 0x0 ? nj - 0x1 : 0x0;
        if (this["t"] > 0x0) {
            if (0x0 == nO) nt = this[0x0] % nj;
            else {
                for (var nX = this["t"] - 0x1; nX >= 0x0; --nX) nt = (nO * nt + this[nX]) % nj;
            }
        }
        return nt;
    }

    function po(nj) {
        var nO = nj["isEven"]();
        if ((this["isEven"]() && nO) || 0x0 == nj["signum"]()) return n["ZERO"];
        for (var nt = nj["clone"](), nX = this["clone"](), nG = b(0x1), nx = b(0x0), nN = b(0x0), nD = b(0x1); 0x0 != nt["signum"]();
        ) {
            for (; nt["isEven"]();) nt["rShiftTo"](0x1, nt),
                nO ? ((nG["isEven"]() && nx["isEven"]()) || (nG["addTo"](this, nG), nx["subTo"](nj, nx)), nG["rShiftTo"](0x1, nG)) : nx["isEven"]() || nx["subTo"](nj, nx),
                nx["rShiftTo"](0x1, nx);
            for (; nX["isEven"]();) nX["rShiftTo"](0x1, nX),
                nO ? ((nN["isEven"]() && nD["isEven"]()) || (nN["addTo"](this, nN), nD["subTo"](nj, nD)), nN["rShiftTo"](0x1, nN)) : nD["isEven"]() || nD["subTo"](nj, nD),
                nD["rShiftTo"](0x1, nD);
            nt["compareTo"](nX) >= 0x0 ? (nt["subTo"](nX, nt), nO && nG["subTo"](nN, nG), nx["subTo"](nD, nx)) : (nX["subTo"](nt, nX), nO && nN["subTo"](nG, nN), nD["subTo"](nx, nD));
        }
        return 0x0 != nX["compareTo"](n["ONE"]) ? n["ZERO"] : nD["compareTo"](nj) >= 0x0 ? nD["subtract"](nj) : nD["signum"]() < 0x0 ? (nD["addTo"](nj, nD), nD["signum"]() < 0x0 ? nD["add"](nj) : nD) : nD;
    }

    function pv(nj) {
        var nO, nt = this["abs"]();
        if (0x1 == nt["t"] && nt[0x0] <= nF[nF["length"] - 0x1]) {
            for (nO = 0x0; nO < nF["length"]; ++nO) if (nt[0x0] == nF[nO]) return !0x0;
            return !0x1;
        }
        if (nt["isEven"]()) return !0x1;
        for (nO = 0x1; nO < nF["length"];) {
            for (var nX = nF[nO], nG = nO + 0x1; nG < nF["length"] && nE > nX;
            ) nX *= nF[nG++];
            for (nX = nt["modInt"](nX); nG > nO;) if (nX % nF[nO++] == 0x0) return !0x1;
        }
        return nt["millerRabin"](nj);
    }

    function pm(nj) {
        var nO = this["subtract"](n["ONE"]),
            nt = nO["getLowestSetBit"]();
        if (0x0 >= nt) return !0x1;
        var nX = nO["shiftRight"](nt);
        (nj = (nj + 0x1) >> 0x1),
        nj > nF["length"] && (nj = nF["length"]);
        for (var nG = c(), nx = 0x0; nj > nx; ++nx) {
            nG["fromInt"](nF[Math["floor"](Math["random"]() * nF["length"])]);
            var nN = nG["modPow"](nX, this);
            if (0x0 != nN["compareTo"](n["ONE"]) && 0x0 != nN["compareTo"](nO)) {
                for (var nD = 0x1; nD++ < nt && 0x0 != nN["compareTo"](nO);
                ) if (((nN = nN["modPowInt"](0x2, this)), 0x0 == nN["compareTo"](n["ONE"]))) return !0x1;
                if (0x0 != nN["compareTo"](nO)) return !0x1;
            }
        }
        return !0x0;
    }

    function pd() {
        (this["i"] = 0x0),
            (this["j"] = 0x0),
            (this["S"] = new Array());
    }

    function pr(nj) {
        var nO, nt, nX;
        for (nO = 0x0; 0x100 > nO; ++nO) this["S"][nO] = nO;
        for (nt = 0x0, nO = 0x0; 0x100 > nO; ++nO) (nt = (nt + this["S"][nO] + nj[nO % nj["length"]]) & 0xff),
            (nX = this["S"][nO]),
            (this["S"][nO] = this["S"][nt]),
            (this["S"][nt] = nX);
        (this["i"] = 0x0),
            (this["j"] = 0x0);
    }

    function pQ() {
        var nj;
        return ((this["i"] = (this["i"] + 0x1) & 0xff), (this["j"] = (this["j"] + this["S"][this["i"]]) & 0xff), (nj = this["S"][this["i"]]), (this["S"][this["i"]] = this["S"][this["j"]]), (this["S"][this["j"]] = nj), this["S"][(nj + this["S"][this["i"]]) & 0xff]);
    }

    function pP() {
        return new pd();
    }

    function n0() {
        if (null == nI) {
            for (nI = pP(); ns > nT;) {
                var nj = Math["floor"](0x10000 * Math["random"]());
                nK[nT++] = 0xff & nj;
            }
            for (nI["init"](nK), nT = 0x0; nT < nK["length"]; ++nT) nK[nT] = 0x0;
            nT = 0x0;
        }
        return nI["next"]();
    }

    function n1(nj) {
        var nO;
        for (nO = 0x0; nO < nj["length"]; ++nO) nj[nO] = n0();
    }

    function n2() {
    }

    function n3(nj, nO) {
        return new n(nj, nO);
    }

    function n4(nj, nO) {
        for (var nt = "",
                 nX = 0x0; nX + nO < nj["length"];) (nt += nj["substring"](nX, nX + nO) + "
        "),
        (nX += nO);
        return (nt + nj["substring"](nX, nj["length"]));
    }

    function n5(nj) {
        return 0x10 > nj ? "0" + nj["toString"](0x10) : nj["toString"](0x10);
    }

    function n6(nj, nO) {
        if (nO < nj["length"] + 0xb) return (console["error"]("Message too long for RSA"), null);
        for (var nt = new Array(), nX = nj["length"] - 0x1; nX >= 0x0 && nO > 0x0;
        ) {
            var nG = nj["charCodeAt"](nX--);
            0x80 > nG ? (nt[--nO] = nG) : nG > 0x7f && 0x800 > nG ? ((nt[--nO] = (0x3f & nG) | 0x80), (nt[--nO] = (nG >> 0x6) | 0xc0)) : ((nt[--nO] = (0x3f & nG) | 0x80), (nt[--nO] = ((nG >> 0x6) & 0x3f) | 0x80), (nt[--nO] = (nG >> 0xc) | 0xe0));
        }
        nt[--nO] = 0x0;
        for (var nx = new n2(), nN = new Array(); nO > 0x2;) {
            for (nN[0x0] = 0x0; 0x0 == nN[0x0];) nx["nextBytes"](nN);
            nt[--nO] = nN[0x0];
        }
        return (nt[--nO] = 0x2),
            (nt[--nO] = 0x0),
            new n(nt);
    }

    function n7() {
        (this["n"] = null),
            (this["e"] = 0x0),
            (this["d"] = null),
            (this["p"] = null),
            (this["q"] = null),
            (this["dmp1"] = null),
            (this["dmq1"] = null),
            (this["coeff"] = null);
    }

    function n8(nj, nO) {
        null != nj && null != nO && nj["length"] > 0x0 && nO["length"] > 0x0 ? ((this["n"] = n3(nj, 0x10)), (this["e"] = parseInt(nO, 0x10))) : console["error"]("Invalid RSA public key");
    }

    function n9(nj) {
        return nj["modPowInt"](this["e"], this["n"]);
    }

    function np(nj) {
        var nO = n6(nj, (this["n"]["bitLength"]() + 0x7) >> 0x3);
        if (null == nO) return null;
        var nt = this["doPublic"](nO);
        if (null == nt) return null;
        var nX = nt["toString"](0x10);
        return 0x0 == (0x1 & nX["length"]) ? nX : "0" + nX;
    }

    function nn(nj, nO) {
        for (var nt = nj["toByteArray"](), nX = 0x0; nX < nt["length"] && 0x0 == nt[nX];
        ) ++nX;
        if (nt["length"] - nX != nO - 0x1 || 0x2 != nt[nX]) return null;
        for (++nX; 0x0 != nt[nX];) if (++nX >= nt["length"]) return null;
        for (var nG = ""; ++nX < nt["length"];) {
            var nx = 0xff & nt[nX];
            0x80 > nx ? (nG += String["fromCharCode"](nx)) : nx > 0xbf && 0xe0 > nx ? ((nG += String["fromCharCode"](((0x1f & nx) << 0x6) | (0x3f & nt[nX + 0x1]))), ++nX) : ((nG += String["fromCharCode"](((0xf & nx) << 0xc) | ((0x3f & nt[nX + 0x1]) << 0x6) | (0x3f & nt[nX + 0x2]))), (nX += 0x2));
        }
        return nG;
    }

    function nc(nj, nO, nt) {
        null != nj && null != nO && nj["length"] > 0x0 && nO["length"] > 0x0 ? ((this["n"] = n3(nj, 0x10)), (this["e"] = parseInt(nO, 0x10)), (this["d"] = n3(nt, 0x10))) : console["error"]("Invalid RSA private key");
    }

    function na(nj, nO, nt, nX, nG, nx, nN, nD) {
        null != nj && null != nO && nj["length"] > 0x0 && nO["length"] > 0x0 ? ((this["n"] = n3(nj, 0x10)), (this["e"] = parseInt(nO, 0x10)), (this["d"] = n3(nt, 0x10)), (this["p"] = n3(nX, 0x10)), (this["q"] = n3(nG, 0x10)), (this["dmp1"] = n3(nx, 0x10)), (this["dmq1"] = n3(nN, 0x10)), (this["coeff"] = n3(nD, 0x10))) : console["error"]("Invalid RSA private key");
    }

    function nA(nj, nO) {
        var nt = new n2(),
            nX = nj >> 0x1;
        this["e"] = parseInt(nO, 0x10);
        for (var nG = new n(nO, 0x10); ;) {
            for (; (this["p"] = new n(nj - nX, 0x1, nt)), 0x0 != this["p"]["subtract"](n["ONE"])["gcd"](nG)["compareTo"](n["ONE"]) || !this["p"]["isProbablePrime"](0xa);
            ) ;
            for (; (this["q"] = new n(nX, 0x1, nt)), 0x0 != this["q"]["subtract"](n["ONE"])["gcd"](nG)["compareTo"](n["ONE"]) || !this["q"]["isProbablePrime"](0xa);
            ) ;
            if (this["p"]["compareTo"](this["q"]) <= 0x0) {
                var nx = this["p"];
                (this["p"] = this["q"]),
                    (this["q"] = nx);
            }
            var nN = this["p"]["subtract"](n["ONE"]),
                nD = this["q"]["subtract"](n["ONE"]),
                ny = nN["multiply"](nD);
            if (0x0 == ny["gcd"](nG)["compareTo"](n["ONE"])) {
                (this["n"] = this["p"]["multiply"](this["q"])),
                    (this["d"] = nG["modInverse"](ny)),
                    (this["dmp1"] = this["d"]["mod"](nN)),
                    (this["dmq1"] = this["d"]["mod"](nD)),
                    (this["coeff"] = this["q"]["modInverse"](this["p"]));
                break;
            }
        }
    }

    function nL(nj) {
        if (null == this["p"] || null == this["q"]) return nj["modPow"](this["d"], this["n"]);
        for (var nO = nj["mod"](this["p"])["modPow"](this["dmp1"], this["p"]), nt = nj["mod"](this["q"])["modPow"](this["dmq1"], this["q"]); nO["compareTo"](nt) < 0x0;
        ) nO = nO["add"](this["p"]);
        return nO["subtract"](nt)["multiply"](this["coeff"])["mod"](this["p"])["multiply"](this["q"])["add"](nt);
    }

    function ng(nj) {
        var nO = n3(nj, 0x10),
            nt = this["doPrivate"](nO);
        return null == nt ? null : nn(nt, (this["n"]["bitLength"]() + 0x7) >> 0x3);
    }

    function nS(nj) {
        var nO, nt, nX = "";
        for (nO = 0x0; nO + 0x3 <= nj["length"]; nO += 0x3) (nt = parseInt(nj["substring"](nO, nO + 0x3), 0x10)),
            (nX += nw["charAt"](nt >> 0x6) + nw["charAt"](0x3f & nt));
        for (nO + 0x1 == nj["length"] ? ((nt = parseInt(nj["substring"](nO, nO + 0x1), 0x10)), (nX += nw["charAt"](nt << 0x2))) : nO + 0x2 == nj["length"] && ((nt = parseInt(nj["substring"](nO, nO + 0x2), 0x10)), (nX += nw["charAt"](nt >> 0x2) + nw["charAt"]((0x3 & nt) << 0x4))); (0x3 & nX["length"]) > 0x0;
        ) nX += nM;
        return nX;
    }

    function nf(nj) {
        var nO, nt, nX = "",
            nG = 0x0;
        for (nO = 0x0; nO < nj["length"] && nj["charAt"](nO) != nM; ++nO) (v = nw["indexOf"](nj["charAt"](nO))),
        v < 0x0 || (0x0 == nG ? ((nX += S(v >> 0x2)), (nt = 0x3 & v), (nG = 0x1)) : 0x1 == nG ? ((nX += S((nt << 0x2) | (v >> 0x4))), (nt = 0xf & v), (nG = 0x2)) : 0x2 == nG ? ((nX += S(nt)), (nX += S(v >> 0x2)), (nt = 0x3 & v), (nG = 0x3)) : ((nX += S((nt << 0x2) | (v >> 0x4))), (nX += S(0xf & v)), (nG = 0x0)));
        return 0x1 == nG && (nX += S(nt << 0x2)),
            nX;
    }

    function nY(nj) {
        var nO, nt = nf(nj),
            nX = new Array();
        for (nO = 0x0; 0x2 * nO < nt["length"]; ++nO) nX[nO] = parseInt(nt["substring"](0x2 * nO, 0x2 * nO + 0x2), 0x10);
        return nX;
    }

    var nJ, nb = 0xdeadbeefcafe,
        nC = 0xefcafe == (0xffffff & nb);
    nC && "Microsoft Internet Explorer" == navigator["appName"] ? ((n["prototype"]["am"] = A), (nJ = 0x1e)) : nC && "Netscape" != navigator["appName"] ? ((n["prototype"]["am"] = a), (nJ = 0x1a)) : ((n["prototype"]["am"] = g), (nJ = 0x1c)),
        (n["prototype"]["DB"] = nJ),
        (n["prototype"]["DM"] = (0x1 << nJ) - 0x1),
        (n["prototype"]["DV"] = 0x1 << nJ);
    var nV = 0x34;
    (n["prototype"]["FV"] = Math["pow"](0x2, nV)),
        (n["prototype"]["F1"] = nV - nJ),
        (n["prototype"]["F2"] = 0x2 * nJ - nV);
    var nW = "0123456789abcdefghijklmnopqrstuvwxyz",
        nl = new Array(),
        nR,
        nB;
    for (nR = "0" ["charCodeAt"](0x0), nB = 0x0; 0x9 >= nB; ++nB) nl[nR++] = nB;
    for (nR = "a" ["charCodeAt"](0x0), nB = 0xa; 0x24 > nB; ++nB) nl[nR++] = nB;
    for (nR = "A" ["charCodeAt"](0x0), nB = 0xa; 0x24 > nB; ++nB) nl[nR++] = nB;
    (u["prototype"]["convert"] = k),
        (u["prototype"]["revert"] = q),
        (u["prototype"]["reduce"] = U),
        (u["prototype"]["mulTo"] = h),
        (u["prototype"]["sqrTo"] = H),
        (O["prototype"]["convert"] = X),
        (O["prototype"]["revert"] = G),
        (O["prototype"]["reduce"] = x),
        (O["prototype"]["mulTo"] = D),
        (O["prototype"]["sqrTo"] = N),
        (n["prototype"]["copyTo"] = Y),
        (n["prototype"]["fromInt"] = J),
        (n["prototype"]["fromString"] = C),
        (n["prototype"]["clamp"] = V),
        (n["prototype"]["dlShiftTo"] = s),
        (n["prototype"]["drShiftTo"] = I),
        (n["prototype"]["lShiftTo"] = K),
        (n["prototype"]["rShiftTo"] = T),
        (n["prototype"]["subTo"] = i),
        (n["prototype"]["multiplyTo"] = e),
        (n["prototype"]["squareTo"] = Z),
        (n["prototype"]["divRemTo"] = w),
        (n["prototype"]["invDigit"] = j),
        (n["prototype"]["isEven"] = y),
        (n["prototype"]["exp"] = o),
        (n["prototype"]["toString"] = W),
        (n["prototype"]["negate"] = l),
        (n["prototype"]["abs"] = R),
        (n["prototype"]["compareTo"] = B),
        (n["prototype"]["bitLength"] = E),
        (n["prototype"]["mod"] = M),
        (n["prototype"]["modPowInt"] = v),
        (n["ZERO"] = b(0x0)),
        (n["ONE"] = b(0x1)),
        (pu["prototype"]["convert"] = pk),
        (pu["prototype"]["revert"] = pk),
        (pu["prototype"]["mulTo"] = pq),
        (pu["prototype"]["sqrTo"] = pU),
        (pj["prototype"]["convert"] = pO),
        (pj["prototype"]["revert"] = pt),
        (pj["prototype"]["reduce"] = pX),
        (pj["prototype"]["mulTo"] = px),
        (pj["prototype"]["sqrTo"] = pG);
    var nF = [0x2, 0x3, 0x5, 0x7, 0xb, 0xd, 0x11, 0x13, 0x17, 0x1d, 0x1f, 0x25, 0x29, 0x2b, 0x2f, 0x35, 0x3b, 0x3d, 0x43, 0x47, 0x49, 0x4f, 0x53, 0x59, 0x61, 0x65, 0x67, 0x6b, 0x6d, 0x71, 0x7f, 0x83, 0x89, 0x8b, 0x95, 0x97, 0x9d, 0xa3, 0xa7, 0xad, 0xb3, 0xb5, 0xbf, 0xc1, 0xc5, 0xc7, 0xd3, 0xdf, 0xe3, 0xe5, 0xe9, 0xef, 0xf1, 0xfb, 0x101, 0x107, 0x10d, 0x10f, 0x115, 0x119, 0x11b, 0x125, 0x133, 0x137, 0x139, 0x13d, 0x14b, 0x151, 0x15b, 0x15d, 0x161, 0x167, 0x16f, 0x175, 0x17b, 0x17f, 0x185, 0x18d, 0x191, 0x199, 0x1a3, 0x1a5, 0x1af, 0x1b1, 0x1b7, 0x1bb, 0x1c1, 0x1c9, 0x1cd, 0x1cf, 0x1d3, 0x1df, 0x1e7, 0x1eb, 0x1f3, 0x1f7, 0x1fd, 0x209, 0x20b, 0x21d, 0x223, 0x22d, 0x233, 0x239, 0x23b, 0x241, 0x24b, 0x251, 0x257, 0x259, 0x25f, 0x265, 0x269, 0x26b, 0x277, 0x281, 0x283, 0x287, 0x28d, 0x293, 0x295, 0x2a1, 0x2a5, 0x2ab, 0x2b3, 0x2bd, 0x2c5, 0x2cf, 0x2d7, 0x2dd, 0x2e3, 0x2e7, 0x2ef, 0x2f5, 0x2f9, 0x301, 0x305, 0x313, 0x31d, 0x329, 0x32b, 0x335, 0x337, 0x33b, 0x33d, 0x347, 0x355, 0x359, 0x35b, 0x35f, 0x36d, 0x371, 0x373, 0x377, 0x38b, 0x38f, 0x397, 0x3a1, 0x3a9, 0x3ad, 0x3b3, 0x3b9, 0x3c7, 0x3cb, 0x3d1, 0x3d7, 0x3df, 0x3e5],
        nE = (0x1 << 0x1a) / nF[nF["length"] - 0x1];
    (n["prototype"]["chunkSize"] = P),
        (n["prototype"]["toRadix"] = p1),
        (n["prototype"]["fromRadix"] = p2),
        (n["prototype"]["fromNumber"] = p3),
        (n["prototype"]["bitwiseTo"] = p8),
        (n["prototype"]["changeBit"] = pl),
        (n["prototype"]["addTo"] = pE),
        (n["prototype"]["dMultiply"] = pw),
        (n["prototype"]["dAddOffset"] = pM),
        (n["prototype"]["multiplyLowerTo"] = ph),
        (n["prototype"]["multiplyUpperTo"] = pH),
        (n["prototype"]["modInt"] = py),
        (n["prototype"]["millerRabin"] = pm),
        (n["prototype"]["clone"] = m),
        (n["prototype"]["intValue"] = d),
        (n["prototype"]["byteValue"] = r),
        (n["prototype"]["shortValue"] = Q),
        (n["prototype"]["signum"] = p0),
        (n["prototype"]["toByteArray"] = p4),
        (n["prototype"]["equals"] = p5),
        (n["prototype"]["min"] = p6),
        (n["prototype"]["max"] = p7),
        (n["prototype"]["and"] = pp),
        (n["prototype"]["or"] = pc),
        (n["prototype"]["xor"] = pA),
        (n["prototype"]["andNot"] = pg),
        (n["prototype"]["not"] = pS),
        (n["prototype"]["shiftLeft"] = pf),
        (n["prototype"]["shiftRight"] = pY),
        (n["prototype"]["getLowestSetBit"] = pb),
        (n["prototype"]["bitCount"] = pV),
        (n["prototype"]["testBit"] = pW),
        (n["prototype"]["setBit"] = pR),
        (n["prototype"]["clearBit"] = pB),
        (n["prototype"]["flipBit"] = pF),
        (n["prototype"]["add"] = ps),
        (n["prototype"]["subtract"] = pI),
        (n["prototype"]["multiply"] = pK),
        (n["prototype"]["divide"] = pi),
        (n["prototype"]["remainder"] = pe),
        (n["prototype"]["divideAndRemainder"] = pZ),
        (n["prototype"]["modPow"] = pN),
        (n["prototype"]["modInverse"] = po),
        (n["prototype"]["pow"] = pz),
        (n["prototype"]["gcd"] = pD),
        (n["prototype"]["isProbablePrime"] = pv),
        (n["prototype"]["square"] = pT),
        (pd["prototype"]["init"] = pr),
        (pd["prototype"]["next"] = pQ);
    var ns = 0x100,
        nI, nK, nT;
    if (null == nK) {
        (nK = new Array()),
            (nT = 0x0);
        var ni;
        if (window["crypto"] && window["crypto"]["getRandomValues"]) {
            var ne = new Uint32Array(0x100);
            for (window["crypto"]["getRandomValues"](ne), ni = 0x0; ni < ne["length"]; ++ni) nK[nT++] = 0xff & ne[ni];
        }
        var nZ = function (nj) {
            if (((this["count"] = this["count"] || 0x0), this["count"] >= 0x100 || nT >= ns)) return void (window["removeEventListener"] ? window["removeEventListener"]("mousemove", nZ) : window["detachEvent"] && window["detachEvent"]("onmousemove", nZ));
            this["count"] += 0x1;
            var nO = nj["x"] + nj["y"];
            nK[nT++] = 0xff & nO;
        };
        window["addEventListener"] ? window["addEventListener"]("mousemove", nZ) : window["attachEvent"] && window["attachEvent"]("onmousemove", nZ);
    }
    (n2["prototype"]["nextBytes"] = n1),
        (n7["prototype"]["doPublic"] = n9),
        (n7["prototype"]["setPublic"] = n8),
        (n7["prototype"]["encrypt"] = np),
        (n7["prototype"]["doPrivate"] = nL),
        (n7["prototype"]["setPrivate"] = nc),
        (n7["prototype"]["setPrivateEx"] = na),
        (n7["prototype"]["generate"] = nA),
        (n7["prototype"]["decrypt"] = ng),
        (function () {
            var nj = function (nX, nG, nx) {
                var nN = new n2(),
                    nD = nX >> 0x1;
                this["e"] = parseInt(nG, 0x10);
                var ny = new n(nG, 0x10),
                    no = this,
                    nv = function () {
                        var nm = function () {
                                if (no["p"]["compareTo"](no["q"]) <= 0x0) {
                                    var nQ = no["p"];
                                    (no["p"] = no["q"]),
                                        (no["q"] = nQ);
                                }
                                var nP = no["p"]["subtract"](n["ONE"]),
                                    c0 = no["q"]["subtract"](n["ONE"]),
                                    c1 = nP["multiply"](c0);
                                0x0 == c1["gcd"](ny)["compareTo"](n["ONE"]) ? ((no["n"] = no["p"]["multiply"](no["q"])), (no["d"] = ny["modInverse"](c1)), (no["dmp1"] = no["d"]["mod"](nP)), (no["dmq1"] = no["d"]["mod"](c0)), (no["coeff"] = no["q"]["modInverse"](no["p"])), setTimeout(function () {
                                        nx();
                                    },
                                    0x0)) : setTimeout(nv, 0x0);
                            },
                            nd = function () {
                                (no["q"] = c()),
                                    no["q"]["fromNumberAsync"](nD, 0x1, nN,
                                        function () {
                                            no["q"]["subtract"](n["ONE"])["gcda"](ny,
                                                function (nQ) {
                                                    0x0 == nQ["compareTo"](n["ONE"]) && no["q"]["isProbablePrime"](0xa) ? setTimeout(nm, 0x0) : setTimeout(nd, 0x0);
                                                });
                                        });
                            },
                            nr = function () {
                                (no["p"] = c()),
                                    no["p"]["fromNumberAsync"](nX - nD, 0x1, nN,
                                        function () {
                                            no["p"]["subtract"](n["ONE"])["gcda"](ny,
                                                function (nQ) {
                                                    0x0 == nQ["compareTo"](n["ONE"]) && no["p"]["isProbablePrime"](0xa) ? setTimeout(nd, 0x0) : setTimeout(nr, 0x0);
                                                });
                                        });
                            };
                        setTimeout(nr, 0x0);
                    };
                setTimeout(nv, 0x0);
            };
            n7["prototype"]["generateAsync"] = nj;
            var nO = function (nX, nG) {
                var nx = this["s"] < 0x0 ? this["negate"]() : this["clone"](),
                    nN = nX["s"] < 0x0 ? nX["negate"]() : nX["clone"]();
                if (nx["compareTo"](nN) < 0x0) {
                    var nD = nx;
                    (nx = nN),
                        (nN = nD);
                }
                var ny = nx["getLowestSetBit"](),
                    no = nN["getLowestSetBit"]();
                if (0x0 > no) return void nG(nx);
                no > ny && (no = ny),
                no > 0x0 && (nx["rShiftTo"](no, nx), nN["rShiftTo"](no, nN));
                var nv = function () {
                    (ny = nx["getLowestSetBit"]()) > 0x0 && nx["rShiftTo"](ny, nx),
                    (ny = nN["getLowestSetBit"]()) > 0x0 && nN["rShiftTo"](ny, nN),
                        nx["compareTo"](nN) >= 0x0 ? (nx["subTo"](nN, nx), nx["rShiftTo"](0x1, nx)) : (nN["subTo"](nx, nN), nN["rShiftTo"](0x1, nN)),
                        nx["signum"]() > 0x0 ? setTimeout(nv, 0x0) : (no > 0x0 && nN["lShiftTo"](no, nN), setTimeout(function () {
                                nG(nN);
                            },
                            0x0));
                };
                setTimeout(nv, 0xa);
            };
            n["prototype"]["gcda"] = nO;
            var nt = function (nX, nG, nx, nN) {
                if ("number" == typeof nG) {
                    if (0x2 > nX) this["fromInt"](0x1);
                    else {
                        this["fromNumber"](nX, nx),
                        this["testBit"](nX - 0x1) || this["bitwiseTo"](n["ONE"]["shiftLeft"](nX - 0x1), pn, this),
                        this["isEven"]() && this["dAddOffset"](0x1, 0x0);
                        var nD = this,
                            ny = function () {
                                nD["dAddOffset"](0x2, 0x0),
                                nD["bitLength"]() > nX && nD["subTo"](n["ONE"]["shiftLeft"](nX - 0x1), nD),
                                    nD["isProbablePrime"](nG) ? setTimeout(function () {
                                            nN();
                                        },
                                        0x0) : setTimeout(ny, 0x0);
                            };
                        setTimeout(ny, 0x0);
                    }
                } else {
                    var no = new Array(),
                        nv = 0x7 & nX;
                    (no["length"] = (nX >> 0x3) + 0x1),
                        nG["nextBytes"](no),
                        nv > 0x0 ? (no[0x0] &= (0x1 << nv) - 0x1) : (no[0x0] = 0x0),
                        this["fromString"](no, 0x100);
                }
            };
            n["prototype"]["fromNumberAsync"] = nt;
        })();
    var nw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        nM = "=",
        nu = nu || {};
    nu["env"] = nu["env"] || {};
    var nk = nu,
        nq = Object["prototype"],
        nU = "[object Function]",
        nz = ["toString", "valueOf"];
    (nu["env"]["parseUA"] = function (nj) {
        var nO, nt = function (ny) {
                var no = 0x0;
                return parseFloat(ny["replace"](/\./g,
                    function () {
                        return 0x1 == no++ ? "" : ".";
                    }));
            },
            nX = navigator,
            nG = {
                "ie": 0x0,
                "opera": 0x0,
                "gecko": 0x0,
                "webkit": 0x0,
                "chrome": 0x0,
                "mobile": null,
                "air": 0x0,
                "ipad": 0x0,
                "iphone": 0x0,
                "ipod": 0x0,
                "ios": null,
                "android": 0x0,
                "webos": 0x0,
                "caja": nX && nX["cajaVersion"],
                "secure": !0x1,
                "os": null
            },
            nx = nj || (navigator && navigator["userAgent"]),
            nN = window && window["location"],
            nD = nN && nN["href"];
        return ((nG["secure"] = nD && 0x0 === nD["toLowerCase"]()["indexOf"]("https")), nx && (/windows|win32/i["test"](nx) ? (nG["os"] = "windows") : /macintosh/i["test"](nx) ? (nG["os"] = "macintosh") : /rhino/i["test"](nx) && (nG["os"] = "rhino"), /KHTML/ ["test"](nx) && (nG["webkit"] = 0x1), (nO = nx["match"](/AppleWebKit\/([^\s]*)/)), nO && nO[0x1] && ((nG["webkit"] = nt(nO[0x1])), / Mobile\// ["test"](nx) ? ((nG["mobile"] = "Apple"), (nO = nx["match"](/OS ([^\s]*)/)), nO && nO[0x1] && (nO = nt(nO[0x1]["replace"]("_", "."))), (nG["ios"] = nO), (nG["ipad"] = nG["ipod"] = nG["iphone"] = 0x0), (nO = nx["match"](/iPad|iPod|iPhone/)), nO && nO[0x0] && (nG[nO[0x0]["toLowerCase"]()] = nG["ios"])) : ((nO = nx["match"](/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)), nO && (nG["mobile"] = nO[0x0]), /webOS/ ["test"](nx) && ((nG["mobile"] = "WebOS"), (nO = nx["match"](/webOS\/([^\s]*);/)), nO && nO[0x1] && (nG["webos"] = nt(nO[0x1]))), / Android/ ["test"](nx) && ((nG["mobile"] = "Android"), (nO = nx["match"](/Android ([^\s]*);/)), nO && nO[0x1] && (nG["android"] = nt(nO[0x1])))), (nO = nx["match"](/Chrome\/([^\s]*)/)), nO && nO[0x1] ? (nG["chrome"] = nt(nO[0x1])) : ((nO = nx["match"](/AdobeAIR\/([^\s]*)/)), nO && (nG["air"] = nO[0x0]))), nG["webkit"] || ((nO = nx["match"](/Opera[\s\/]([^\s]*)/)), nO && nO[0x1] ? ((nG["opera"] = nt(nO[0x1])), (nO = nx["match"](/Version\/([^\s]*)/)), nO && nO[0x1] && (nG["opera"] = nt(nO[0x1])), (nO = nx["match"](/Opera Mini[^;]*/)), nO && (nG["mobile"] = nO[0x0])) : ((nO = nx["match"](/MSIE\s([^;]*)/)), nO && nO[0x1] ? (nG["ie"] = nt(nO[0x1])) : ((nO = nx["match"](/Gecko\/([^\s]*)/)), nO && ((nG["gecko"] = 0x1), (nO = nx["match"](/rv:([^\s\)]*)/)), nO && nO[0x1] && (nG["gecko"] = nt(nO[0x1]))))))), nG);
    }),
        (nu["env"]["ua"] = nu["env"]["parseUA"]()),
        (nu["isFunction"] = function (nj) {
            return ("function" == typeof nj || nq["toString"]["apply"](nj) === nU);
        }),
        (nu["_IEEnumFix"] = nu["env"]["ua"]["ie"] ?
            function (nj, nO) {
                var nt, nX, nG;
                for (nt = 0x0; nt < nz["length"]; nt += 0x1) (nX = nz[nt]),
                    (nG = nO[nX]),
                nk["isFunction"](nG) && nG != nq[nX] && (nj[nX] = nG);
            } : function () {
            }),
        (nu["extend"] = function (nj, nO, nt) {
            if (!nO || !nj) throw new Error("extend failed, please check that all dependencies are included.");
            var nX, nG = function () {
            };
            if (((nG["prototype"] = nO["prototype"]), (nj["prototype"] = new nG()), (nj["prototype"]["constructor"] = nj), (nj["superclass"] = nO["prototype"]), nO["prototype"]["constructor"] == nq["constructor"] && (nO["prototype"]["constructor"] = nO), nt)) {
                for (nX in nt) nk["hasOwnProperty"](nt, nX) && (nj["prototype"][nX] = nt[nX]);
                nk["_IEEnumFix"](nj["prototype"], nt);
            }
        }),
    ("undefined" != typeof KJUR && KJUR) || (KJUR = {}),
    ("undefined" != typeof KJUR["asn1"] && KJUR["asn1"]) || (KJUR["asn1"] = {}),
        (KJUR["asn1"]["ASN1Util"] = new (function () {
            (this["integerToByteHex"] = function (nj) {
                var nO = nj["toString"](0x10);
                return (nO["length"] % 0x2 == 0x1 && (nO = "0" + nO), nO);
            }),
                (this["bigIntToMinTwosComplementsHex"] = function (nj) {
                    var nO = nj["toString"](0x10);
                    if ("-" != nO["substr"](0x0, 0x1)) nO["length"] % 0x2 == 0x1 ? (nO = "0" + nO) : nO["match"](/^[0-7]/) || (nO = "00" + nO);
                    else {
                        var nt = nO["substr"](0x1),
                            nX = nt["length"];
                        nX % 0x2 == 0x1 ? (nX += 0x1) : nO["match"](/^[0-7]/) || (nX += 0x2);
                        for (var nG = "",
                                 nx = 0x0; nX > nx; nx++) nG += "f";
                        var nN = new n(nG, 0x10),
                            nD = nN["xor"](nj)["add"](n["ONE"]);
                        nO = nD["toString"](0x10)["replace"](/^-/, "");
                    }
                    return nO;
                }),
                (this["getPEMStringFromHex"] = function (nj, nO) {
                    var nt = CryptoJS["enc"]["Hex"]["parse"](nj),
                        nX = CryptoJS["enc"]["Base64"]["stringify"](nt),
                        nG = nX["replace"](/(.{64})/g, "$1
                    ");
                    return ((nG = nG["replace"](/\r\n$/, "")), "-----BEGIN " + nO + "-----
                    " + nG + "
                    -----END
                    " + nO + "--
                    ---
                        ");
                });
        })()),
        (KJUR["asn1"]["ASN1Object"] = function () {
            var nj = "";
            (this["getLengthHexFromValue"] = function () {
                if ("undefined" == typeof this["hV"] || null == this["hV"]) throw "this.hV is null or undefined.";
                if (this["hV"]["length"] % 0x2 == 0x1) throw ("value hex must be even length: n=" + nj["length"] + ",v=" + this["hV"]);
                var nO = this["hV"]["length"] / 0x2,
                    nt = nO["toString"](0x10);
                if ((nt["length"] % 0x2 == 0x1 && (nt = "0" + nt), 0x80 > nO)) return nt;
                var nX = nt["length"] / 0x2;
                if (nX > 0xf) throw ("ASN.1 length too long to represent by 8x: n = " + nO["toString"](0x10));
                var nG = 0x80 + nX;
                return nG["toString"](0x10) + nt;
            }),
                (this["getEncodedHex"] = function () {
                    return ((null == this["hTLV"] || this["isModified"]) && ((this["hV"] = this["getFreshValueHex"]()), (this["hL"] = this["getLengthHexFromValue"]()), (this["hTLV"] = this["hT"] + this["hL"] + this["hV"]), (this["isModified"] = !0x1)), this["hTLV"]);
                }),
                (this["getValueHex"] = function () {
                    return (this["getEncodedHex"](), this["hV"]);
                }),
                (this["getFreshValueHex"] = function () {
                    return "";
                });
        }),
        (KJUR["asn1"]["DERAbstractString"] = function (nj) {
            KJUR["asn1"]["DERAbstractString"]["superclass"]["constructor"]["call"](this),
                ((this["getString"] = function () {
                    return this["s"];
                }), (this["setString"] = function (nO) {
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        (this["s"] = nO),
                        (this["hV"] = stohex(this["s"]));
                }), (this["setStringHex"] = function (nO) {
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        (this["s"] = null),
                        (this["hV"] = nO);
                }), (this["getFreshValueHex"] = function () {
                    return this["hV"];
                }), "undefined" != typeof nj && ("undefined" != typeof nj["str"] ? this["setString"](nj["str"]) : "undefined" != typeof nj["hex"] && this["setStringHex"](nj["hex"])));
        }),
        nu["extend"](KJUR["asn1"]["DERAbstractString"], KJUR["asn1"]["ASN1Object"]),
        (KJUR["asn1"]["DERAbstractTime"] = function () {
            KJUR["asn1"]["DERAbstractTime"]["superclass"]["constructor"]["call"](this),
                ((this["localDateToUTC"] = function (nj) {
                    utc = nj["getTime"]() + 0xea60 * nj["getTimezoneOffset"]();
                    var nO = new Date(utc);
                    return nO;
                }), (this["formatDate"] = function (nj, nO) {
                    var nt = this["zeroPadding"],
                        nX = this["localDateToUTC"](nj),
                        nG = String(nX["getFullYear"]());
                    "utc" == nO && (nG = nG["substr"](0x2, 0x2));
                    var nx = nt(String(nX["getMonth"]() + 0x1), 0x2),
                        nN = nt(String(nX["getDate"]()), 0x2),
                        nD = nt(String(nX["getHours"]()), 0x2),
                        ny = nt(String(nX["getMinutes"]()), 0x2),
                        no = nt(String(nX["getSeconds"]()), 0x2);
                    return nG + nx + nN + nD + ny + no + "Z";
                }), (this["zeroPadding"] = function (nj, nO) {
                    return nj["length"] >= nO ? nj : new Array(nO - nj["length"] + 0x1)["join"]("0") + nj;
                }), (this["getString"] = function () {
                    return this["s"];
                }), (this["setString"] = function (nj) {
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        (this["s"] = nj),
                        (this["hV"] = stohex(this["s"]));
                }), (this["setByDateValue"] = function (nj, nO, nt, nX, nG, nx) {
                    var nN = new Date(Date["UTC"](nj, nO - 0x1, nt, nX, nG, nx, 0x0));
                    this["setByDate"](nN);
                }), (this["getFreshValueHex"] = function () {
                    return this["hV"];
                }));
        }),
        nu["extend"](KJUR["asn1"]["DERAbstractTime"], KJUR["asn1"]["ASN1Object"]),
        (KJUR["asn1"]["DERAbstractStructured"] = function (nj) {
            KJUR["asn1"]["DERAbstractString"]["superclass"]["constructor"]["call"](this),
                ((this["setByASN1ObjectArray"] = function (nO) {
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        (this["asn1Array"] = nO);
                }), (this["appendASN1Object"] = function (nO) {
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        this["asn1Array"]["push"](nO);
                }), (this["asn1Array"] = new Array()), "undefined" != typeof nj && "undefined" != typeof nj["array"] && (this["asn1Array"] = nj["array"]));
        }),
        nu["extend"](KJUR["asn1"]["DERAbstractStructured"], KJUR["asn1"]["ASN1Object"]),
        (KJUR["asn1"]["DERBoolean"] = function () {
            KJUR["asn1"]["DERBoolean"]["superclass"]["constructor"]["call"](this),
                (this["hT"] = "01"),
                (this["hTLV"] = "0101ff");
        }),
        nu["extend"](KJUR["asn1"]["DERBoolean"], KJUR["asn1"]["ASN1Object"]),
        (KJUR["asn1"]["DERInteger"] = function (nj) {
            KJUR["asn1"]["DERInteger"]["superclass"]["constructor"]["call"](this),
                (this["hT"] = "02"),
                (this["setByBigInteger"] = function (nO) {
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        (this["hV"] = KJUR["asn1"]["ASN1Util"]["bigIntToMinTwosComplementsHex"](nO));
                }),
                (this["setByInteger"] = function (nO) {
                    var nt = new n(String(nO), 0xa);
                    this["setByBigInteger"](nt);
                }),
                (this["setValueHex"] = function (nO) {
                    this["hV"] = nO;
                }),
                (this["getFreshValueHex"] = function () {
                    return this["hV"];
                }),
            "undefined" != typeof nj && ("undefined" != typeof nj["bigint"] ? this["setByBigInteger"](nj["bigint"]) : "undefined" != typeof nj["int"] ? this["setByInteger"](nj["int"]) : "undefined" != typeof nj["hex"] && this["setValueHex"](nj["hex"]));
        }),
        nu["extend"](KJUR["asn1"]["DERInteger"], KJUR["asn1"]["ASN1Object"]),
        (KJUR["asn1"]["DERBitString"] = function (nj) {
            KJUR["asn1"]["DERBitString"]["superclass"]["constructor"]["call"](this),
                (this["hT"] = "03"),
                (this["setHexValueIncludingUnusedBits"] = function (nO) {
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        (this["hV"] = nO);
                }),
                (this["setUnusedBitsAndHexValue"] = function (nO, nt) {
                    if (0x0 > nO || nO > 0x7) throw ("unused bits shall be from 0 to 7: u = " + nO);
                    var nX = "0" + nO;
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        (this["hV"] = nX + nt);
                }),
                (this["setByBinaryString"] = function (nO) {
                    nO = nO["replace"](/0+$/, "");
                    var nt = 0x8 - (nO["length"] % 0x8);
                    0x8 == nt && (nt = 0x0);
                    for (var nX = 0x0; nt >= nX; nX++) nO += "0";
                    for (var nG = "",
                             nX = 0x0; nX < nO["length"] - 0x1; nX += 0x8) {
                        var nx = nO["substr"](nX, 0x8),
                            nN = parseInt(nx, 0x2)["toString"](0x10);
                        0x1 == nN["length"] && (nN = "0" + nN),
                            (nG += nN);
                    }
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        (this["hV"] = "0" + nt + nG);
                }),
                (this["setByBooleanArray"] = function (nO) {
                    for (var nt = "",
                             nX = 0x0; nX < nO["length"]; nX++) nt += 0x1 == nO[nX] ? "1" : "0";
                    this["setByBinaryString"](nt);
                }),
                (this["newFalseArray"] = function (nO) {
                    for (var nt = new Array(nO), nX = 0x0; nO > nX; nX++) nt[nX] = !0x1;
                    return nt;
                }),
                (this["getFreshValueHex"] = function () {
                    return this["hV"];
                }),
            "undefined" != typeof nj && ("undefined" != typeof nj["hex"] ? this["setHexValueIncludingUnusedBits"](nj["hex"]) : "undefined" != typeof nj["bin"] ? this["setByBinaryString"](nj["bin"]) : "undefined" != typeof nj["array"] && this["setByBooleanArray"](nj["array"]));
        }),
        nu["extend"](KJUR["asn1"]["DERBitString"], KJUR["asn1"]["ASN1Object"]),
        (KJUR["asn1"]["DEROctetString"] = function (nj) {
            KJUR["asn1"]["DEROctetString"]["superclass"]["constructor"]["call"](this, nj),
                (this["hT"] = "04");
        }),
        nu["extend"](KJUR["asn1"]["DEROctetString"], KJUR["asn1"]["DERAbstractString"]),
        (KJUR["asn1"]["DERNull"] = function () {
            KJUR["asn1"]["DERNull"]["superclass"]["constructor"]["call"](this),
                (this["hT"] = "05"),
                (this["hTLV"] = "0500");
        }),
        nu["extend"](KJUR["asn1"]["DERNull"], KJUR["asn1"]["ASN1Object"]),
        (KJUR["asn1"]["DERObjectIdentifier"] = function (nj) {
            var nO = function (nX) {
                    var nG = nX["toString"](0x10);
                    return (0x1 == nG["length"] && (nG = "0" + nG), nG);
                },
                nt = function (nX) {
                    var nG = "",
                        nx = new n(nX, 0xa),
                        nN = nx["toString"](0x2),
                        nD = 0x7 - (nN["length"] % 0x7);
                    0x7 == nD && (nD = 0x0);
                    for (var ny = "",
                             no = 0x0; nD > no; no++) ny += "0";
                    nN = ny + nN;
                    for (var no = 0x0; no < nN["length"] - 0x1; no += 0x7) {
                        var nv = nN["substr"](no, 0x7);
                        no != nN["length"] - 0x7 && (nv = "1" + nv),
                            (nG += nO(parseInt(nv, 0x2)));
                    }
                    return nG;
                };
            KJUR["asn1"]["DERObjectIdentifier"]["superclass"]["constructor"]["call"](this),
                (this["hT"] = "06"),
                (this["setValueHex"] = function (nX) {
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        (this["s"] = null),
                        (this["hV"] = nX);
                }),
                (this["setValueOidString"] = function (nX) {
                    if (!nX["match"](/^[0-9.]+$/)) throw ("malformed oid string: " + nX);
                    var nG = "",
                        nx = nX["split"]("."),
                        nN = 0x28 * parseInt(nx[0x0]) + parseInt(nx[0x1]);
                    (nG += nO(nN)),
                        nx["splice"](0x0, 0x2);
                    for (var nD = 0x0; nD < nx["length"]; nD++) nG += nt(nx[nD]);
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        (this["s"] = null),
                        (this["hV"] = nG);
                }),
                (this["setValueName"] = function (nX) {
                    if ("undefined" == typeof KJUR["asn1"]["x509"]["OID"]["name2oidList"][nX]) throw ("DERObjectIdentifier oidName undefined: " + nX);
                    var nG = KJUR["asn1"]["x509"]["OID"]["name2oidList"][nX];
                    this["setValueOidString"](nG);
                }),
                (this["getFreshValueHex"] = function () {
                    return this["hV"];
                }),
            "undefined" != typeof nj && ("undefined" != typeof nj["oid"] ? this["setValueOidString"](nj["oid"]) : "undefined" != typeof nj["hex"] ? this["setValueHex"](nj["hex"]) : "undefined" != typeof nj["name"] && this["setValueName"](nj["name"]));
        }),
        nu["extend"](KJUR["asn1"]["DERObjectIdentifier"], KJUR["asn1"]["ASN1Object"]),
        (KJUR["asn1"]["DERUTF8String"] = function (nj) {
            KJUR["asn1"]["DERUTF8String"]["superclass"]["constructor"]["call"](this, nj),
                (this["hT"] = "0c");
        }),
        nu["extend"](KJUR["asn1"]["DERUTF8String"], KJUR["asn1"]["DERAbstractString"]),
        (KJUR["asn1"]["DERNumericString"] = function (nj) {
            KJUR["asn1"]["DERNumericString"]["superclass"]["constructor"]["call"](this, nj),
                (this["hT"] = "12");
        }),
        nu["extend"](KJUR["asn1"]["DERNumericString"], KJUR["asn1"]["DERAbstractString"]),
        (KJUR["asn1"]["DERPrintableString"] = function (nj) {
            KJUR["asn1"]["DERPrintableString"]["superclass"]["constructor"]["call"](this, nj),
                (this["hT"] = "13");
        }),
        nu["extend"](KJUR["asn1"]["DERPrintableString"], KJUR["asn1"]["DERAbstractString"]),
        (KJUR["asn1"]["DERTeletexString"] = function (nj) {
            KJUR["asn1"]["DERTeletexString"]["superclass"]["constructor"]["call"](this, nj),
                (this["hT"] = "14");
        }),
        nu["extend"](KJUR["asn1"]["DERTeletexString"], KJUR["asn1"]["DERAbstractString"]),
        (KJUR["asn1"]["DERIA5String"] = function (nj) {
            KJUR["asn1"]["DERIA5String"]["superclass"]["constructor"]["call"](this, nj),
                (this["hT"] = "16");
        }),
        nu["extend"](KJUR["asn1"]["DERIA5String"], KJUR["asn1"]["DERAbstractString"]),
        (KJUR["asn1"]["DERUTCTime"] = function (nj) {
            KJUR["asn1"]["DERUTCTime"]["superclass"]["constructor"]["call"](this, nj),
                (this["hT"] = "17"),
                (this["setByDate"] = function (nO) {
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        (this["date"] = nO),
                        (this["s"] = this["formatDate"](this["date"], "utc")),
                        (this["hV"] = stohex(this["s"]));
                }),
            "undefined" != typeof nj && ("undefined" != typeof nj["str"] ? this["setString"](nj["str"]) : "undefined" != typeof nj["hex"] ? this["setStringHex"](nj["hex"]) : "undefined" != typeof nj["date"] && this["setByDate"](nj["date"]));
        }),
        nu["extend"](KJUR["asn1"]["DERUTCTime"], KJUR["asn1"]["DERAbstractTime"]),
        (KJUR["asn1"]["DERGeneralizedTime"] = function (nj) {
            KJUR["asn1"]["DERGeneralizedTime"]["superclass"]["constructor"]["call"](this, nj),
                (this["hT"] = "18"),
                (this["setByDate"] = function (nO) {
                    (this["hTLV"] = null),
                        (this["isModified"] = !0x0),
                        (this["date"] = nO),
                        (this["s"] = this["formatDate"](this["date"], "gen")),
                        (this["hV"] = stohex(this["s"]));
                }),
            "undefined" != typeof nj && ("undefined" != typeof nj["str"] ? this["setString"](nj["str"]) : "undefined" != typeof nj["hex"] ? this["setStringHex"](nj["hex"]) : "undefined" != typeof nj["date"] && this["setByDate"](nj["date"]));
        }),
        nu["extend"](KJUR["asn1"]["DERGeneralizedTime"], KJUR["asn1"]["DERAbstractTime"]),
        (KJUR["asn1"]["DERSequence"] = function (nj) {
            KJUR["asn1"]["DERSequence"]["superclass"]["constructor"]["call"](this, nj),
                (this["hT"] = "30"),
                (this["getFreshValueHex"] = function () {
                    for (var nO = "",
                             nt = 0x0; nt < this["asn1Array"]["length"]; nt++) {
                        var nX = this["asn1Array"][nt];
                        nO += nX["getEncodedHex"]();
                    }
                    return (this["hV"] = nO),
                        this["hV"];
                });
        }),
        nu["extend"](KJUR["asn1"]["DERSequence"], KJUR["asn1"]["DERAbstractStructured"]),
        (KJUR["asn1"]["DERSet"] = function (nj) {
            KJUR["asn1"]["DERSet"]["superclass"]["constructor"]["call"](this, nj),
                (this["hT"] = "31"),
                (this["getFreshValueHex"] = function () {
                    for (var nO = new Array(), nt = 0x0; nt < this["asn1Array"]["length"]; nt++) {
                        var nX = this["asn1Array"][nt];
                        nO["push"](nX["getEncodedHex"]());
                    }
                    return (nO["sort"](), (this["hV"] = nO["join"]("")), this["hV"]);
                });
        }),
        nu["extend"](KJUR["asn1"]["DERSet"], KJUR["asn1"]["DERAbstractStructured"]),
        (KJUR["asn1"]["DERTaggedObject"] = function (nj) {
            KJUR["asn1"]["DERTaggedObject"]["superclass"]["constructor"]["call"](this),
                (this["hT"] = "a0"),
                (this["hV"] = ""),
                (this["isExplicit"] = !0x0),
                (this["asn1Object"] = null),
                (this["setASN1Object"] = function (nO, nt, nX) {
                    (this["hT"] = nt),
                        (this["isExplicit"] = nO),
                        (this["asn1Object"] = nX),
                        this["isExplicit"] ? ((this["hV"] = this["asn1Object"]["getEncodedHex"]()), (this["hTLV"] = null), (this["isModified"] = !0x0)) : ((this["hV"] = null), (this["hTLV"] = nX["getEncodedHex"]()), (this["hTLV"] = this["hTLV"]["replace"](/^../, nt)), (this["isModified"] = !0x1));
                }),
                (this["getFreshValueHex"] = function () {
                    return this["hV"];
                }),
            "undefined" != typeof nj && ("undefined" != typeof nj["tag"] && (this["hT"] = nj["tag"]), "undefined" != typeof nj["explicit"] && (this["isExplicit"] = nj["explicit"]), "undefined" != typeof nj["obj"] && ((this["asn1Object"] = nj["obj"]), this["setASN1Object"](this["isExplicit"], this["hT"], this["asn1Object"])));
        }),
        nu["extend"](KJUR["asn1"]["DERTaggedObject"], KJUR["asn1"]["ASN1Object"]),
        (function (nj) {
            "use strict";
            var nO, nt = {};
            (nt["decode"] = function (nX) {
                var nG;
                if (nO === nj) {
                    var nx = "0123456789ABCDEF",
                        nN = " 

                    聽
                    ";
                    for (nO = [], nG = 0x0; 0x10 > nG; ++nG) nO[nx["charAt"](nG)] = nG;
                    for (nx = nx["toLowerCase"](), nG = 0xa; 0x10 > nG; ++nG) nO[nx["charAt"](nG)] = nG;
                    for (nG = 0x0; nG < nN["length"]; ++nG) nO[nN["charAt"](nG)] = -0x1;
                }
                var nD = [],
                    ny = 0x0,
                    no = 0x0;
                for (nG = 0x0; nG < nX["length"]; ++nG) {
                    var nv = nX["charAt"](nG);
                    if ("=" == nv) break;
                    if (((nv = nO[nv]), -0x1 != nv)) {
                        if (nv === nj) throw ("Illegal character at offset " + nG);
                        (ny |= nv),
                            ++no >= 0x2 ? ((nD[nD["length"]] = ny), (ny = 0x0), (no = 0x0)) : (ny <<= 0x4);
                    }
                }
                if (no) throw "Hex encoding incomplete: 4 bits missing";
                return nD;
            }),
                (window["Hex"] = nt);
        })(),
        (function (nj) {
            "use strict";
            var nO, nt = {};
            (nt["decode"] = function (nX) {
                var nG;
                if (nO === nj) {
                    var nx = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        nN = "= 

                    聽
                    ";
                    for (nO = [], nG = 0x0; 0x40 > nG; ++nG) nO[nx["charAt"](nG)] = nG;
                    for (nG = 0x0; nG < nN["length"]; ++nG) nO[nN["charAt"](nG)] = -0x1;
                }
                var nD = [],
                    ny = 0x0,
                    no = 0x0;
                for (nG = 0x0; nG < nX["length"]; ++nG) {
                    var nv = nX["charAt"](nG);
                    if ("=" == nv) break;
                    if (((nv = nO[nv]), -0x1 != nv)) {
                        if (nv === nj) throw ("Illegal character at offset " + nG);
                        (ny |= nv),
                            ++no >= 0x4 ? ((nD[nD["length"]] = ny >> 0x10), (nD[nD["length"]] = (ny >> 0x8) & 0xff), (nD[nD["length"]] = 0xff & ny), (ny = 0x0), (no = 0x0)) : (ny <<= 0x6);
                    }
                }
                switch (no) {
                    case 0x1:
                        throw "Base64 encoding incomplete: at least 2 bits missing";
                    case 0x2:
                        nD[nD["length"]] = ny >> 0xa;
                        break;
                    case 0x3:
                        (nD[nD["length"]] = ny >> 0x10),
                            (nD[nD["length"]] = (ny >> 0x8) & 0xff);
                }
                return nD;
            }),
                (nt["re"] = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/),
                (nt["unarmor"] = function (nX) {
                    var nG = nt["re"]["exec"](nX);
                    if (nG) {
                        if (nG[0x1]) nX = nG[0x1];
                        else {
                            if (!nG[0x2]) throw "RegExp out of sync";
                            nX = nG[0x2];
                        }
                    }
                    return nt["decode"](nX);
                }),
                (window["Base64"] = nt);
        })(),
        (function (nj) {
            "use strict";

            function nO(nN, nD) {
                nN instanceof nO ? ((this["enc"] = nN["enc"]), (this["pos"] = nN["pos"])) : ((this["enc"] = nN), (this["pos"] = nD));
            }

            function nt(nN, nD, ny, no, nv) {
                (this["stream"] = nN),
                    (this["header"] = nD),
                    (this["length"] = ny),
                    (this["tag"] = no),
                    (this["sub"] = nv);
            }

            var nX = 0x64,
                nG = "鈥�",
                nx = {
                    "tag": function (nN, nD) {
                        var ny = document["createElement"](nN);
                        return (ny["className"] = nD),
                            ny;
                    },
                    "text": function (nN) {
                        return document["createTextNode"](nN);
                    }
                };
            (nO["prototype"]["get"] = function (nN) {
                if ((nN === nj && (nN = this["pos"]++), nN >= this["enc"]["length"])) throw ("Requesting byte offset " + nN + " on a stream of length " + this["enc"]["length"]);
                return this["enc"][nN];
            }),
                (nO["prototype"]["hexDigits"] = "0123456789ABCDEF"),
                (nO["prototype"]["hexByte"] = function (nN) {
                    return (this["hexDigits"]["charAt"]((nN >> 0x4) & 0xf) + this["hexDigits"]["charAt"](0xf & nN));
                }),
                (nO["prototype"]["hexDump"] = function (nN, nD, ny) {
                    for (var no = "",
                             nv = nN; nD > nv; ++nv) if (((no += this["hexByte"](this["get"](nv))), ny !== !0x0)) switch (0xf & nv) {
                        case 0x7:
                            no += "  ";
                            break;
                        case 0xf:
                            no += "
                            ";
                            break;
                        default:
                            no += " ";
                    }
                    return no;
                }),
                (nO["prototype"]["parseStringISO"] = function (nN, nD) {
                    for (var ny = "",
                             no = nN; nD > no; ++no) ny += String["fromCharCode"](this["get"](no));
                    return ny;
                }),
                (nO["prototype"]["parseStringUTF"] = function (nN, nD) {
                    for (var ny = "",
                             no = nN; nD > no;) {
                        var nv = this["get"](no++);
                        ny += String["fromCharCode"](0x80 > nv ? nv : nv > 0xbf && 0xe0 > nv ? ((0x1f & nv) << 0x6) | (0x3f & this["get"](no++)) : ((0xf & nv) << 0xc) | ((0x3f & this["get"](no++)) << 0x6) | (0x3f & this["get"](no++)));
                    }
                    return ny;
                }),
                (nO["prototype"]["parseStringBMP"] = function (nN, nD) {
                    for (var ny = "",
                             no = nN; nD > no; no += 0x2) {
                        var nv = this["get"](no),
                            nm = this["get"](no + 0x1);
                        ny += String["fromCharCode"]((nv << 0x8) + nm);
                    }
                    return ny;
                }),
                (nO["prototype"]["reTime"] = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/),
                (nO["prototype"]["parseTime"] = function (nN, nD) {
                    var ny = this["parseStringISO"](nN, nD),
                        no = this["reTime"]["exec"](ny);
                    return no ? ((ny = no[0x1] + "-" + no[0x2] + "-" + no[0x3] + " " + no[0x4]), no[0x5] && ((ny += ":" + no[0x5]), no[0x6] && ((ny += ":" + no[0x6]), no[0x7] && (ny += "." + no[0x7]))), no[0x8] && ((ny += " UTC"), "Z" != no[0x8] && ((ny += no[0x8]), no[0x9] && (ny += ":" + no[0x9]))), ny) : "Unrecognized time: " + ny;
                }),
                (nO["prototype"]["parseInteger"] = function (nN, nD) {
                    var ny = nD - nN;
                    if (ny > 0x4) {
                        ny <<= 0x3;
                        var no = this["get"](nN);
                        if (0x0 === no) ny -= 0x8;
                        else {
                            for (; 0x80 > no;) (no <<= 0x1),
                                --ny;
                        }
                        return "(" + ny + " bit)";
                    }
                    for (var nv = 0x0,
                             nm = nN; nD > nm; ++nm) nv = (nv << 0x8) | this["get"](nm);
                    return nv;
                }),
                (nO["prototype"]["parseBitString"] = function (nN, nD) {
                    var ny = this["get"](nN),
                        no = ((nD - nN - 0x1) << 0x3) - ny,
                        nv = "(" + no + " bit)";
                    if (0x14 >= no) {
                        var nm = ny;
                        nv += " ";
                        for (var nd = nD - 0x1; nd > nN; --nd) {
                            for (var nr = this["get"](nd), nQ = nm; 0x8 > nQ; ++nQ) nv += (nr >> nQ) & 0x1 ? "1" : "0";
                            nm = 0x0;
                        }
                    }
                    return nv;
                }),
                (nO["prototype"]["parseOctetString"] = function (nN, nD) {
                    var ny = nD - nN,
                        no = "(" + ny + " byte) ";
                    ny > nX && (nD = nN + nX);
                    for (var nv = nN; nD > nv; ++nv) no += this["hexByte"](this["get"](nv));
                    return ny > nX && (no += nG),
                        no;
                }),
                (nO["prototype"]["parseOID"] = function (nN, nD) {
                    for (var ny = "",
                             no = 0x0,
                             nv = 0x0,
                             nm = nN; nD > nm; ++nm) {
                        var nd = this["get"](nm);
                        if (((no = (no << 0x7) | (0x7f & nd)), (nv += 0x7), !(0x80 & nd))) {
                            if ("" === ny) {
                                var nr = 0x50 > no ? (0x28 > no ? 0x0 : 0x1) : 0x2;
                                ny = nr + "." + (no - 0x28 * nr);
                            } else ny += "." + (nv >= 0x1f ? "bigint" : no);
                            no = nv = 0x0;
                        }
                    }
                    return ny;
                }),
                (nt["prototype"]["typeName"] = function () {
                    if (this["tag"] === nj) return "unknown";
                    var nN = this["tag"] >> 0x6,
                        nD = ((this["tag"] >> 0x5) & 0x1, 0x1f & this["tag"]);
                    switch (nN) {
                        case 0x0:
                            switch (nD) {
                                case 0x0:
                                    return "EOC";
                                case 0x1:
                                    return "BOOLEAN";
                                case 0x2:
                                    return "INTEGER";
                                case 0x3:
                                    return "BIT_STRING";
                                case 0x4:
                                    return "OCTET_STRING";
                                case 0x5:
                                    return "NULL";
                                case 0x6:
                                    return "OBJECT_IDENTIFIER";
                                case 0x7:
                                    return "ObjectDescriptor";
                                case 0x8:
                                    return "EXTERNAL";
                                case 0x9:
                                    return "REAL";
                                case 0xa:
                                    return "ENUMERATED";
                                case 0xb:
                                    return "EMBEDDED_PDV";
                                case 0xc:
                                    return "UTF8String";
                                case 0x10:
                                    return "SEQUENCE";
                                case 0x11:
                                    return "SET";
                                case 0x12:
                                    return "NumericString";
                                case 0x13:
                                    return "PrintableString";
                                case 0x14:
                                    return "TeletexString";
                                case 0x15:
                                    return "VideotexString";
                                case 0x16:
                                    return "IA5String";
                                case 0x17:
                                    return "UTCTime";
                                case 0x18:
                                    return "GeneralizedTime";
                                case 0x19:
                                    return "GraphicString";
                                case 0x1a:
                                    return "VisibleString";
                                case 0x1b:
                                    return "GeneralString";
                                case 0x1c:
                                    return "UniversalString";
                                case 0x1e:
                                    return "BMPString";
                                default:
                                    return ("Universal_" + nD["toString"](0x10));
                            }
                        case 0x1:
                            return ("Application_" + nD["toString"](0x10));
                        case 0x2:
                            return "[" + nD + "]";
                        case 0x3:
                            return ("Private_" + nD["toString"](0x10));
                    }
                }),
                (nt["prototype"]["reSeemsASCII"] = /^[ -~]+$/),
                (nt["prototype"]["content"] = function () {
                    if (this["tag"] === nj) return null;
                    var nN = this["tag"] >> 0x6,
                        nD = 0x1f & this["tag"],
                        ny = this["posContent"](),
                        no = Math["abs"](this["length"]);
                    if (0x0 !== nN) {
                        if (null !== this["sub"]) return ("(" + this["sub"]["length"] + " elem)");
                        var nv = this["stream"]["parseStringISO"](ny, ny + Math["min"](no, nX));
                        return this["reSeemsASCII"]["test"](nv) ? nv["substring"](0x0, 0x2 * nX) + (nv["length"] > 0x2 * nX ? nG : "") : this["stream"]["parseOctetString"](ny, ny + no);
                    }
                    switch (nD) {
                        case 0x1:
                            return 0x0 === this["stream"]["get"](ny) ? "false" : "true";
                        case 0x2:
                            return this["stream"]["parseInteger"](ny, ny + no);
                        case 0x3:
                            return this["sub"] ? "(" + this["sub"]["length"] + " elem)" : this["stream"]["parseBitString"](ny, ny + no);
                        case 0x4:
                            return this["sub"] ? "(" + this["sub"]["length"] + " elem)" : this["stream"]["parseOctetString"](ny, ny + no);
                        case 0x6:
                            return this["stream"]["parseOID"](ny, ny + no);
                        case 0x10:
                        case 0x11:
                            return ("(" + this["sub"]["length"] + " elem)");
                        case 0xc:
                            return this["stream"]["parseStringUTF"](ny, ny + no);
                        case 0x12:
                        case 0x13:
                        case 0x14:
                        case 0x15:
                        case 0x16:
                        case 0x1a:
                            return this["stream"]["parseStringISO"](ny, ny + no);
                        case 0x1e:
                            return this["stream"]["parseStringBMP"](ny, ny + no);
                        case 0x17:
                        case 0x18:
                            return this["stream"]["parseTime"](ny, ny + no);
                    }
                    return null;
                }),
                (nt["prototype"]["toString"] = function () {
                    return (this["typeName"]() + "@" + this["stream"]["pos"] + "[header:" + this["header"] + ",length:" + this["length"] + ",sub:" + (null === this["sub"] ? "null" : this["sub"]["length"]) + "]");
                }),
                (nt["prototype"]["print"] = function (nN) {
                    if ((nN === nj && (nN = ""), document["writeln"](nN + this), null !== this["sub"])) {
                        nN += "  ";
                        for (var nD = 0x0,
                                 ny = this["sub"]["length"]; ny > nD; ++nD) this["sub"][nD]["print"](nN);
                    }
                }),
                (nt["prototype"]["toPrettyString"] = function (nN) {
                    nN === nj && (nN = "");
                    var nD = nN + this["typeName"]() + " @" + this["stream"]["pos"];
                    if ((this["length"] >= 0x0 && (nD += "+"), (nD += this["length"]), 0x20 & this["tag"] ? (nD += " (constructed)") : (0x3 != this["tag"] && 0x4 != this["tag"]) || null === this["sub"] || (nD += " (encapsulates)"), (nD += "
                        "), null !== this["
                    sub
                    "])) {
                    nN += "  ";
                    for (var ny = 0x0,
                             no = this["sub"]["length"]; no > ny; ++ny) nD += this["sub"][ny]["toPrettyString"](nN);
                }
            return nD;
        }),
        (nt["prototype"]["toDOM"] = function () {
            var nN = nx["tag"]("div", "node");
            nN["asn1"] = this;
            var nD = nx["tag"]("div", "head"),
                ny = this["typeName"]()["replace"](/_/g, " ");
            nD["innerHTML"] = ny;
            var no = this["content"]();
            if (null !== no) {
                no = String(no)["replace"](/</g, "&lt;");
                var nv = nx["tag"]("span", "preview");
                nv["appendChild"](nx["text"](no)),
                    nD["appendChild"](nv);
            }
            nN["appendChild"](nD),
                (this["node"] = nN),
                (this["head"] = nD);
            var nm = nx["tag"]("div", "value");
            if (((ny = "Offset: " + this["stream"]["pos"] + "<br/>"), (ny += "Length: " + this["header"] + "+"), (ny += this["length"] >= 0x0 ? this["length"] : -this["length"] + " (undefined)"), 0x20 & this["tag"] ? (ny += "<br/>(constructed)") : (0x3 != this["tag"] && 0x4 != this["tag"]) || null === this["sub"] || (ny += "<br/>(encapsulates)"), null !== no && ((ny += "<br/>Value:<br/><b>" + no + "</b>"), "object" == typeof oids && 0x6 == this["tag"]))) {
                var nd = oids[no];
                nd && (nd["d"] && (ny += "<br/>" + nd["d"]), nd["c"] && (ny += "<br/>" + nd["c"]), nd["w"] && (ny += "<br/>(warning!)"));
            }
            (nm["innerHTML"] = ny),
                nN["appendChild"](nm);
            var nr = nx["tag"]("div", "sub");
            if (null !== this["sub"]) {
                for (var nQ = 0x0,
                         nP = this["sub"]["length"]; nP > nQ; ++nQ) nr["appendChild"](this["sub"][nQ]["toDOM"]());
            }
            return (nN["appendChild"](nr), (nD["onclick"] = function () {
                nN["className"] = "node collapsed" == nN["className"] ? "node" : "node collapsed";
            }), nN);
        }),
        (nt["prototype"]["posStart"] = function () {
            return this["stream"]["pos"];
        }),
        (nt["prototype"]["posContent"] = function () {
            return (this["stream"]["pos"] + this["header"]);
        }),
        (nt["prototype"]["posEnd"] = function () {
            return (this["stream"]["pos"] + this["header"] + Math["abs"](this["length"]));
        }),
        (nt["prototype"]["fakeHover"] = function (nN) {
            (this["node"]["className"] += " hover"),
            nN && (this["head"]["className"] += " hover");
        }),
        (nt["prototype"]["fakeOut"] = function (nN) {
            var nD = / ?hover/;
            (this["node"]["className"] = this["node"]["className"]["replace"](nD, "")),
            nN && (this["head"]["className"] = this["head"]["className"]["replace"](nD, ""));
        }),
        (nt["prototype"]["toHexDOM_sub"] = function (nN, nD, ny, no, nv) {
            if (!(no >= nv)) {
                var nm = nx["tag"]("span", nD);
                nm["appendChild"](nx["text"](ny["hexDump"](no, nv))),
                    nN["appendChild"](nm);
            }
        }),
        (nt["prototype"]["toHexDOM"] = function (nN) {
            var nD = nx["tag"]("span", "hex");
            if ((nN === nj && (nN = nD), (this["head"]["hexNode"] = nD), (this["head"]["onmouseover"] = function () {
                this["hexNode"]["className"] = "hexCurrent";
            }), (this["head"]["onmouseout"] = function () {
                this["hexNode"]["className"] = "hex";
            }), (nD["asn1"] = this), (nD["onmouseover"] = function () {
                var nd = !nN["selected"];
                nd && ((nN["selected"] = this["asn1"]), (this["className"] = "hexCurrent")),
                    this["asn1"]["fakeHover"](nd);
            }), (nD["onmouseout"] = function () {
                var nd = nN["selected"] == this["asn1"];
                this["asn1"]["fakeOut"](nd),
                nd && ((nN["selected"] = null), (this["className"] = "hex"));
            }), this["toHexDOM_sub"](nD, "tag", this["stream"], this["posStart"](), this["posStart"]() + 0x1), this["toHexDOM_sub"](nD, this["length"] >= 0x0 ? "dlen" : "ulen", this["stream"], this["posStart"]() + 0x1, this["posContent"]()), null === this["sub"])) nD["appendChild"](nx["text"](this["stream"]["hexDump"](this["posContent"](), this["posEnd"]())));
            else {
                if (this["sub"]["length"] > 0x0) {
                    var ny = this["sub"][0x0],
                        no = this["sub"][this["sub"]["length"] - 0x1];
                    this["toHexDOM_sub"](nD, "intro", this["stream"], this["posContent"](), ny["posStart"]());
                    for (var nv = 0x0,
                             nm = this["sub"]["length"]; nm > nv; ++nv) nD["appendChild"](this["sub"][nv]["toHexDOM"](nN));
                    this["toHexDOM_sub"](nD, "outro", this["stream"], no["posEnd"](), this["posEnd"]());
                }
            }
            return nD;
        }),
        (nt["prototype"]["toHexString"] = function () {
            return this["stream"]["hexDump"](this["posStart"](), this["posEnd"](), !0x0);
        }),
        (nt["decodeLength"] = function (nN) {
            var nD = nN["get"](),
                ny = 0x7f & nD;
            if (ny == nD) return ny;
            if (ny > 0x3) throw ("Length over 24 bits not supported at position " + (nN["pos"] - 0x1));
            if (0x0 === ny) return -0x1;
            nD = 0x0;
            for (var no = 0x0; ny > no; ++no) nD = (nD << 0x8) | nN["get"]();
            return nD;
        }),
        (nt["hasContent"] = function (nN, nD, ny) {
            if (0x20 & nN) return !0x0;
            if (0x3 > nN || nN > 0x4) return !0x1;
            var no = new nO(ny);
            0x3 == nN && no["get"]();
            var nv = no["get"]();
            if ((nv >> 0x6) & 0x1) return !0x1;
            try {
                var nm = nt["decodeLength"](no);
                return no["pos"] - ny["pos"] + nm == nD;
            } catch (nd) {
                return !0x1;
            }
        }),
        (nt["decode"] = function (nN) {
            nN instanceof nO || (nN = new nO(nN, 0x0));
            var nD = new nO(nN),
                ny = nN["get"](),
                no = nt["decodeLength"](nN),
                nv = nN["pos"] - nD["pos"],
                nm = null;
            if (nt["hasContent"](ny, no, nN)) {
                var nd = nN["pos"];
                if ((0x3 == ny && nN["get"](), (nm = []), no >= 0x0)) {
                    for (var nr = nd + no; nN["pos"] < nr;) nm[nm["length"]] = nt["decode"](nN);
                    if (nN["pos"] != nr) throw ("Content size is not correct for container starting at offset " + nd);
                } else try {
                    for (; ;) {
                        var nQ = nt["decode"](nN);
                        if (0x0 === nQ["tag"]) break;
                        nm[nm["length"]] = nQ;
                    }
                    no = nd - nN["pos"];
                } catch (nP) {
                    throw ("Exception while decoding undefined length content: " + nP);
                }
            } else nN["pos"] += no;
            return new nt(nD, nv, no, ny, nm);
        }),
        (nt["test"] = function () {
            for (var nN = [{
                "value": [0x27],
                "expected": 0x27
            },
                {
                    "value": [0x81, 0xc9],
                    "expected": 0xc9
                },
                {
                    "value": [0x83, 0xfe, 0xdc, 0xba],
                    "expected": 0xfedcba
                }], nD = 0x0, ny = nN["length"]; ny > nD; ++nD) {
                var no = new nO(nN[nD]["value"], 0x0),
                    nv = nt["decodeLength"](no);
                nv != nN[nD]["expected"] && document["write"]("In test[" + nD + "] expected " + nN[nD]["expected"] + " got " + nv + "
                ");
            }
        }),
        (window["ASN1"] = nt);
})(),
    (ASN1["prototype"]["getHexStringValue"] = function () {
        var nj = this["toHexString"](),
            nO = 0x2 * this["header"],
            nt = 0x2 * this["length"];
        return nj["substr"](nO, nt);
    }),
    (n7["prototype"]["parseKey"] = function (nj) {
        try {
            var nO = 0x0,
                nt = 0x0,
                nX = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
                nG = nX["test"](nj) ? Hex["decode"](nj) : Base64["unarmor"](nj),
                nx = ASN1["decode"](nG);
            if ((0x3 === nx["sub"]["length"] && (nx = nx["sub"][0x2]["sub"][0x0]), 0x9 === nx["sub"]["length"])) {
                (nO = nx["sub"][0x1]["getHexStringValue"]()),
                    (this["n"] = n3(nO, 0x10)),
                    (nt = nx["sub"][0x2]["getHexStringValue"]()),
                    (this["e"] = parseInt(nt, 0x10));
                var nN = nx["sub"][0x3]["getHexStringValue"]();
                this["d"] = n3(nN, 0x10);
                var nD = nx["sub"][0x4]["getHexStringValue"]();
                this["p"] = n3(nD, 0x10);
                var ny = nx["sub"][0x5]["getHexStringValue"]();
                this["q"] = n3(ny, 0x10);
                var no = nx["sub"][0x6]["getHexStringValue"]();
                this["dmp1"] = n3(no, 0x10);
                var nv = nx["sub"][0x7]["getHexStringValue"]();
                this["dmq1"] = n3(nv, 0x10);
                var nm = nx["sub"][0x8]["getHexStringValue"]();
                this["coeff"] = n3(nm, 0x10);
            } else {
                if (0x2 !== nx["sub"]["length"]) return !0x1;
                var nd = nx["sub"][0x1],
                    nr = nd["sub"][0x0];
                (nO = nr["sub"][0x0]["getHexStringValue"]()),
                    (this["n"] = n3(nO, 0x10)),
                    (nt = nr["sub"][0x1]["getHexStringValue"]()),
                    (this["e"] = parseInt(nt, 0x10));
            }
            return !0x0;
        } catch (nQ) {
            return !0x1;
        }
    }),
    (n7["prototype"]["getPrivateBaseKey"] = function () {
        var nj = {
                "array": [new KJUR["asn1"]["DERInteger"]({
                    "int": 0x0
                }), new KJUR["asn1"]["DERInteger"]({
                    "bigint": this["n"]
                }), new KJUR["asn1"]["DERInteger"]({
                    "int": this["e"]
                }), new KJUR["asn1"]["DERInteger"]({
                    "bigint": this["d"]
                }), new KJUR["asn1"]["DERInteger"]({
                    "bigint": this["p"]
                }), new KJUR["asn1"]["DERInteger"]({
                    "bigint": this["q"]
                }), new KJUR["asn1"]["DERInteger"]({
                    "bigint": this["dmp1"]
                }), new KJUR["asn1"]["DERInteger"]({
                    "bigint": this["dmq1"]
                }), new KJUR["asn1"]["DERInteger"]({
                    "bigint": this["coeff"]
                })]
            },
            nO = new KJUR["asn1"]["DERSequence"](nj);
        return nO["getEncodedHex"]();
    }),
    (n7["prototype"]["getPrivateBaseKeyB64"] = function () {
        return nS(this["getPrivateBaseKey"]());
    }),
    (n7["prototype"]["getPublicBaseKey"] = function () {
        var nj = {
                "array": [new KJUR["asn1"]["DERObjectIdentifier"]({
                    "oid": "1.2.840.113549.1.1.1"
                }), new KJUR["asn1"]["DERNull"]()]
            },
            nO = new KJUR["asn1"]["DERSequence"](nj);
        nj = {
            "array": [new KJUR["asn1"]["DERInteger"]({
                "bigint": this["n"]
            }), new KJUR["asn1"]["DERInteger"]({
                "int": this["e"]
            })]
        };
        var nt = new KJUR["asn1"]["DERSequence"](nj);
        nj = {
            "hex": "00" + nt["getEncodedHex"]()
        };
        var nX = new KJUR["asn1"]["DERBitString"](nj);
        nj = {
            "array": [nO, nX]
        };
        var nG = new KJUR["asn1"]["DERSequence"](nj);
        return nG["getEncodedHex"]();
    }),
    (n7["prototype"]["getPublicBaseKeyB64"] = function () {
        return nS(this["getPublicBaseKey"]());
    }),
    (n7["prototype"]["wordwrap"] = function (nj, nO) {
        if (((nO = nO || 0x40), !nj)) return nj;
        var nt = "(.{1," + nO + "})( +|$
            ?
    )|
        (.
        {
            1, " + nO + "
        }
    )
        ";
        return nj["match"](RegExp(nt, "g"))["join"]("
        ");
    }),
    (n7["prototype"]["getPrivateKey"] = function () {
        var nj = "-----BEGIN RSA PRIVATE KEY-----
        ";
        return ((nj += this["wordwrap"](this["getPrivateBaseKeyB64"]()) + "
        "), (nj += "--
        ---END
        RSA
        PRIVATE
        KEY--
        ---"));
    }),
    (n7["prototype"]["getPublicKey"] = function () {
        var nj = "-----BEGIN PUBLIC KEY-----
        ";
        return ((nj += this["wordwrap"](this["getPublicBaseKeyB64"]()) + "
        "), (nj += "--
        ---END
        PUBLIC
        KEY--
        ---"));
    }),
    (n7["prototype"]["hasPublicKeyProperty"] = function (nj) {
        return ((nj = nj || {}), nj["hasOwnProperty"]("n") && nj["hasOwnProperty"]("e"));
    }),
    (n7["prototype"]["hasPrivateKeyProperty"] = function (nj) {
        return ((nj = nj || {}), nj["hasOwnProperty"]("n") && nj["hasOwnProperty"]("e") && nj["hasOwnProperty"]("d") && nj["hasOwnProperty"]("p") && nj["hasOwnProperty"]("q") && nj["hasOwnProperty"]("dmp1") && nj["hasOwnProperty"]("dmq1") && nj["hasOwnProperty"]("coeff"));
    }),
    (n7["prototype"]["parsePropertiesFrom"] = function (nj) {
        (this["n"] = nj["n"]),
            (this["e"] = nj["e"]),
        nj["hasOwnProperty"]("d") && ((this["d"] = nj["d"]), (this["p"] = nj["p"]), (this["q"] = nj["q"]), (this["dmp1"] = nj["dmp1"]), (this["dmq1"] = nj["dmq1"]), (this["coeff"] = nj["coeff"]));
    });
var nh = function (nj) {
    n7["call"](this),
    nj && ("string" == typeof nj ? this["parseKey"](nj) : (this["hasPrivateKeyProperty"](nj) || this["hasPublicKeyProperty"](nj)) && this["parsePropertiesFrom"](nj));
};
(nh["prototype"] = new n7()),
    (nh["prototype"]["constructor"] = nh);
var nH = function (nj) {
    (nj = nj || {}),
        (this["default_key_size"] = parseInt(nj["default_key_size"]) || 0x400),
        (this["default_public_exponent"] = nj["default_public_exponent"] || "010001"),
        (this["log"] = nj["log"] || !0x1),
        (this["key"] = null);
};
(nH["prototype"]["setKey"] = function (nj) {
    this["log"] && this["key"] && console["warn"]("A key was already set, overriding existing."),
        (this["key"] = new nh(nj));
}),
    (nH["prototype"]["setPrivateKey"] = function (nj) {
        this["setKey"](nj);
    }),
    (nH["prototype"]["setPublicKey"] = function (nj) {
        this["setKey"](nj);
    }),
    (nH["prototype"]["decrypt"] = function (nj) {
        try {
            return this["getKey"]()["decrypt"](nf(nj));
        } catch (nO) {
            return !0x1;
        }
    }),
    (nH["prototype"]["encrypt"] = function (nj) {
        try {
            return nS(this["getKey"]()["encrypt"](nj));
        } catch (nO) {
            return !0x1;
        }
    }),
    (nH["prototype"]["getKey"] = function (nj) {
        if (!this["key"]) {
            if (((this["key"] = new nh()), nj && "[object Function]" === {} ["toString"]["call"](nj))) return void this["key"]["generateAsync"](this["default_key_size"], this["default_public_exponent"], nj);
            this["key"]["generate"](this["default_key_size"], this["default_public_exponent"]);
        }
        return this["key"];
    }),
    (nH["prototype"]["getPrivateKey"] = function () {
        return this["getKey"]()["getPrivateKey"]();
    }),
    (nH["prototype"]["getPrivateKeyB64"] = function () {
        return this["getKey"]()["getPrivateBaseKeyB64"]();
    }),
    (nH["prototype"]["getPublicKey"] = function () {
        return this["getKey"]()["getPublicKey"]();
    }),
    (nH["prototype"]["getPublicKeyB64"] = function () {
        return this["getKey"]()["getPublicBaseKeyB64"]();
    }),
    (p["JSEncrypt"] = nH);
})
(JSEncryptExports);
var JSEncrypt = JSEncryptExports["JSEncrypt"];
if (YAHOO === undefined) var YAHOO = {};
(YAHOO["lang"] = {
    "extend": function (p, n, A) {
        if (!n || !p) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
        var L = function () {
        };
        (L["prototype"] = n["prototype"]),
            (p["prototype"] = new L()),
            (p["prototype"]["constructor"] = p),
            (p["superclass"] = n["prototype"]);
        n["prototype"]["constructor"] == Object["prototype"]["constructor"] && (n["prototype"]["constructor"] = n);
        if (A) {
            var S;
            for (S in A) {
                p["prototype"][S] = A[S];
            }
            var Y = function () {
                },
                J = ["toString", "valueOf"];
            try {
                / MSIE / ["test"](navigator["userAgent"]) && (Y = function (C, V) {
                    for (S = 0x0; S < J["length"]; S = S + 0x1) {
                        var W = J[S],
                            R = V[W];
                        typeof R === "function" && R != Object["prototype"][W] && (C[W] = R);
                    }
                });
            } catch (C) {
            }
            Y(p["prototype"], A);
        }
    }
}),
    (PVA = "-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAy5R1R2yM5jPPvkO2F47qVqMkYj7o92DF8y1yMkCSxY1WwqG0
dCdUZTnaoBuAz99wGt55oGLcdalV71nPUiGWs / b6GzVN5v72baz / Q2OxHtkrFKqL
VX16LW31cW9hAntN84RCbvTeB0MNV + SHmXjIf17OQLCtDKHBZWZ5NKyqFstO + KOd
u32d2jsw + DT5lOBzDUBk / wUw2KyFJVx7eK6sSXEyWqBk2nxMRDNYixIEN1V1EBSq
f + OwKK5Mxi04r38 + Qog8z03 / t / u6CfAOWVmi + MdrD1VHXv / P7bnFlgRcLzKwK1QL
TSLBE1PrMmNNj0oRjByhMoI9tY5X6mRBqLyDhwIDAQABAoIBAGO++
RmGO6D9CNAJ4
Bm52eKaK5UBiubOIR8NiNLLZb5qinRxg3eX35d7Wb2xzBLNwOFBWSl21trFncfY4
qY0s + C4ZYHYQ7Om / 7n
sFeQAYAOj1yJYj01TXf4NTsGGF2t + W8qxZlV0H6dCOLL0
U2YkUmRp4Le8eQVj6dyTcVaYNPxWQBnb9ZOEIEvEjeoO / DD7CCmt7LDCey9KrTQl
Avuc2nN6uRV1Wfm0P8conKPJtVdgzMvJujNdpz + bBDqwsqgeCICjs / hSCNO81VH3
DD7J0mG2OHqowOVqagoDHpBprHOUKxAeTs9I0KEL + hEI4zXCDL69 + Xs6azuts733
zSOmwxkCgYEA25czfPVxxcK685LhaAvwbmzWHqNp07ytRNGf + Aww6OdgWkdgPy0n20
Gkg0HAqsxGcgZJk6cAkOy5hBLNHpHlGbeWFi + 62
lVNYUv3hAxumtiPyBMu7avE
ZQCTXND1H1f / 2
enRDJRxQsR8y / SX1ivmC5U6fx7hbpKxnXyRHnvSlk8CgYEA7VWp
hLNkn4AEaPPW0TknwKG40At / hjecX2zWAyZVt4ydDSeKgMEOUdmvGGlSCrefAl0n
PTfM9SdIDcO5OTa2wUayKLIsrb6TDnG6KXXN6z3HR3Q4qKJbG83eaMYDqqziPPV +
xzRVWShI3EGwkLczASmiYy + sEAT0OkxP59xTKUkCgYBgaGjFkukJfy4fJDxsNtmv
UX9MYkhjGrIjxbjq6UdL6dGGsVGTSxr1i0NUETkqg5bmFtaUybxY5GWqk6qUok8o
VE7DnN73Xn4jmnun8OFagHvXxnxTApeuFGueU2tbAIKmxJ3wXPfA7Y0w6kkDUbCl
IzZUe1VT + 3mZgAgijxBsxwKBgQDNytiJ62 / V6hBo3P6pPtEcdF6nb0DtpazfBaVw572
twaywqlermzsKeCIenbx49I1ZZGLQ72C2NpCA9vTWCn5fiyiSpyScp0ImZTDS
IIckctYoPDug5d7wdgtjeEfXp78osopyuwtCmu7Kpd8vLNt6J5raPI0K + vC22FL1
LpOhmQKBgQCFeU448fL87N1MjMyusi8wJ5MLcn + kHbLTtpskTpfQM2p3Cnp4oL + 7
BI4AlXlKItV37rJIjZxQgLWhGoTZPplZaW4ooJCFJbazce5ua5fnsFS0oXhDN7uw
jaq + v5t8G6gFS09hEa4kz9O53t / 7UGuQqh0Bxb0cJ9iNeAlhagvBDQ ==
-----ENDRSAPRIVATEKEY-----");
var CryptoJS = CryptoJS || (function (p, n) {
    var A = {},
        L = (A["lib"] = {}),
        S = (L["Base"] = (function () {
            function E() {
            }

            return {
                "extend": function (s) {
                    E["prototype"] = this;
                    var I = new E();
                    return (s && I["mixIn"](s), !I["hasOwnProperty"]("init") && (I["init"] = function () {
                        I["$super"]["init"]["apply"](this, arguments);
                    }), (I["init"]["prototype"] = I), (I["$super"] = this), I);
                },
                "create": function () {
                    var s = this["extend"]();
                    return (s["init"]["apply"](s, arguments), s);
                },
                "init": function () {
                },
                "mixIn": function (s) {
                    for (var I in s) {
                        s["hasOwnProperty"](I) && (this[I] = s[I]);
                    }
                    s["hasOwnProperty"]("toString") && (this["toString"] = s["toString"]);
                },
                "clone": function () {
                    return this["init"]["prototype"]["extend"](this);
                }
            };
        })()),
        Y = (L["WordArray"] = S["extend"]({
            "init": function (E, s) {
                (E = this["words"] = E || []),
                    s != n ? (this["sigBytes"] = s) : (this["sigBytes"] = E["length"] * 0x4);
            },
            "toString": function (E) {
                return (E || C)["stringify"](this);
            },
            "concat": function (E) {
                var I = this["words"],
                    K = E["words"],
                    T = this["sigBytes"],
                    Z = E["sigBytes"];
                this["clamp"]();
                if (T % 0x4) for (var w = 0x0; w < Z; w++) {
                    var M = (K[w >>> 0x2] >>> (0x18 - (w % 0x4) * 0x8)) & 0xff;
                    I[(T + w) >>> 0x2] |= M << (0x18 - ((T + w) % 0x4) * 0x8);
                } else for (var w = 0x0; w < Z; w += 0x4) {
                    I[(T + w) >>> 0x2] = K[w >>> 0x2];
                }
                return (this["sigBytes"] += Z),
                    this;
            },
            "clamp": function () {
                var E = this["words"],
                    s = this["sigBytes"];
                (E[s >>> 0x2] &= 0xffffffff << (0x20 - (s % 0x4) * 0x8)),
                    (E["length"] = p["ceil"](s / 0x4));
            },
            "clone": function () {
                var E = S["clone"]["call"](this);
                return ((E["words"] = this["words"]["slice"](0x0)), E);
            },
            "random": function (E) {
                var s = [];
                for (var I = 0x0; I < E; I += 0x4) {
                    s["push"]((p["random"]() * 0x100000000) | 0x0);
                }
                return new Y["init"](s, E);
            }
        })),
        J = (A["enc"] = {}),
        C = (J["Hex"] = {
            "stringify": function (E) {
                var I = E["words"],
                    K = E["sigBytes"],
                    T = [];
                for (var Z = 0x0; Z < K; Z++) {
                    var w = (I[Z >>> 0x2] >>> (0x18 - (Z % 0x4) * 0x8)) & 0xff;
                    T["push"]((w >>> 0x4)["toString"](0x10)),
                        T["push"]((w & 0xf)["toString"](0x10));
                }
                return T["join"]("");
            },
            "parse": function (E) {
                var s = E["length"],
                    I = [];
                for (var K = 0x0; K < s; K += 0x2) {
                    I[K >>> 0x3] |= parseInt(E["substr"](K, 0x2), 0x10) << (0x18 - (K % 0x8) * 0x4);
                }
                return new Y["init"](I, s / 0x2);
            }
        }),
        V = (J["Latin1"] = {
            "stringify": function (E) {
                var I = E["words"],
                    K = E["sigBytes"],
                    T = [];
                for (var Z = 0x0; Z < K; Z++) {
                    var w = (I[Z >>> 0x2] >>> (0x18 - (Z % 0x4) * 0x8)) & 0xff;
                    T["push"](String["fromCharCode"](w));
                }
                return T["join"]("");
            },
            "parse": function (E) {
                var s = E["length"],
                    I = [];
                for (var K = 0x0; K < s; K++) {
                    I[K >>> 0x2] |= (E["charCodeAt"](K) & 0xff) << (0x18 - (K % 0x4) * 0x8);
                }
                return new Y["init"](I, s);
            }
        }),
        W = (J["Utf8"] = {
            "stringify": function (E) {
                try {
                    return decodeURIComponent(escape(V["stringify"](E)));
                } catch (s) {
                    throw new Error("Malformed UTF-8 data");
                }
            },
            "parse": function (E) {
                return V["parse"](unescape(encodeURIComponent(E)));
            }
        }),
        R = (L["BufferedBlockAlgorithm"] = S["extend"]({
            "reset": function () {
                (this["_data"] = new Y["init"]()),
                    (this["_nDataBytes"] = 0x0);
            },
            "_append": function (E) {
                typeof E == "string" && (E = W["parse"](E)),
                    this["_data"]["concat"](E),
                    (this["_nDataBytes"] += E["sigBytes"]);
            },
            "_process": function (E) {
                var I = this["_data"],
                    K = I["words"],
                    T = I["sigBytes"],
                    Z = this["blockSize"],
                    M = Z * 0x4,
                    U = T / M;
                E ? (U = p["ceil"](U)) : (U = p["max"]((U | 0x0) - this["_minBufferSize"], 0x0));
                var H = U * Z,
                    O = p["min"](H * 0x4, T);
                if (H) {
                    for (var X = 0x0; X < H; X += Z) {
                        this["_doProcessBlock"](K, X);
                    }
                    var G = K["splice"](0x0, H);
                    I["sigBytes"] -= O;
                }
                return new Y["init"](G, O);
            },
            "clone": function () {
                var E = S["clone"]["call"](this);
                return ((E["_data"] = this["_data"]["clone"]()), E);
            },
            "_minBufferSize": 0x0
        })),
        B = (L["Hasher"] = R["extend"]({
            "cfg": S["extend"](),
            "init": function (E) {
                (this["cfg"] = this["cfg"]["extend"](E)),
                    this["reset"]();
            },
            "reset": function () {
                R["reset"]["call"](this),
                    this["_doReset"]();
            },
            "update": function (E) {
                return (this["_append"](E), this["_process"](), this);
            },
            "finalize": function (E) {
                E && this["_append"](E);
                var s = this["_doFinalize"]();
                return s;
            },
            "blockSize": 0x200 / 0x20,
            "_createHelper": function (E) {
                return function (s, I) {
                    return new E["init"](I)["finalize"](s);
                };
            },
            "_createHmacHelper": function (E) {
                return function (s, I) {
                    return new F["HMAC"]["init"](E, I)["finalize"](s);
                };
            }
        })),
        F = (A["algo"] = {});
    return A;
})(Math);
(function (p) {
    var n = CryptoJS,
        c = n["lib"],
        A = c["Base"],
        L = c["WordArray"],
        n = (n["x64"] = {});
    (n["Word"] = A["extend"]({
        "init": function (S, Y) {
            (this["high"] = S),
                (this["low"] = Y);
        }
    })),
        (n["WordArray"] = A["extend"]({
            "init": function (S, Y) {
                (S = this["words"] = S || []),
                    (this["sigBytes"] = Y != p ? Y : 0x8 * S["length"]);
            },
            "toX32": function () {
                for (var S = this["words"], Y = S["length"], J = [], C = 0x0; C < Y; C++) {
                    var V = S[C];
                    J["push"](V["high"]),
                        J["push"](V["low"]);
                }
                return L["create"](J, this["sigBytes"]);
            },
            "clone": function () {
                for (var S = A["clone"]["call"](this), Y = (S["words"] = this["words"]["slice"](0x0)), J = Y["length"], C = 0x0; C < J; C++) Y[C] = Y[C]["clone"]();
                return S;
            }
        }));
})(),
CryptoJS["lib"]["Cipher"] || (function (c) {
    var a = CryptoJS,
        A = a["lib"],
        L = A["Base"],
        S = A["WordArray"],
        Y = A["BufferedBlockAlgorithm"],
        J = a["enc"]["Base64"],
        b = a["algo"]["EvpKDF"],
        C = (A["Cipher"] = Y["extend"]({
            "cfg": L["extend"](),
            "createEncryptor": function (I, K) {
                return this["create"](this["_ENC_XFORM_MODE"], I, K);
            },
            "createDecryptor": function (I, K) {
                return this["create"](this["_DEC_XFORM_MODE"], I, K);
            },
            "init": function (I, K, T) {
                (this["cfg"] = this["cfg"]["extend"](T)),
                    (this["_xformMode"] = I),
                    (this["_key"] = K),
                    this["reset"]();
            },
            "reset": function () {
                Y["reset"]["call"](this),
                    this["_doReset"]();
            },
            "process": function (I) {
                return (this["_append"](I), this["_process"]());
            },
            "finalize": function (I) {
                return (I && this["_append"](I), this["_doFinalize"]());
            },
            "keySize": 0x4,
            "ivSize": 0x4,
            "_ENC_XFORM_MODE": 0x1,
            "_DEC_XFORM_MODE": 0x2,
            "_createHelper": function (I) {
                return {
                    "encrypt": function (K, T, i) {
                        return ("string" == typeof T ? E : F)["encrypt"](I, K, T, i);
                    },
                    "decrypt": function (K, T, i) {
                        return ("string" == typeof T ? E : F)["decrypt"](I, K, T, i);
                    }
                };
            }
        }));
    A["StreamCipher"] = C["extend"]({
        "_doFinalize": function () {
            return this["_process"](!0x0);
        },
        "blockSize": 0x1
    });
    var V = (a["mode"] = {}),
        W = function (I, K, T) {
            var i = this["_iv"];
            i ? (this["_iv"] = c) : (i = this["_prevBlock"]);
            for (var Z = 0x0; Z < T; Z++) I[K + Z] ^= i[Z];
        },
        R = (A["BlockCipherMode"] = L["extend"]({
            "createEncryptor": function (I, K) {
                return this["Encryptor"]["create"](I, K);
            },
            "createDecryptor": function (I, K) {
                return this["Decryptor"]["create"](I, K);
            },
            "init": function (I, K) {
                (this["_cipher"] = I),
                    (this["_iv"] = K);
            }
        }))["extend"]();
    (R["Encryptor"] = R["extend"]({
        "processBlock": function (I, K) {
            var T = this["_cipher"],
                i = T["blockSize"];
            W["call"](this, I, K, i),
                T["encryptBlock"](I, K),
                (this["_prevBlock"] = I["slice"](K, K + i));
        }
    })),
        (R["Decryptor"] = R["extend"]({
            "processBlock": function (I, K) {
                var T = this["_cipher"],
                    i = T["blockSize"],
                    Z = I["slice"](K, K + i);
                T["decryptBlock"](I, K),
                    W["call"](this, I, K, i),
                    (this["_prevBlock"] = Z);
            }
        })),
        (V = V["CBC"] = R),
        (R = (a["pad"] = {})["Pkcs7"] = {
            "pad": function (I, K) {
                for (var T = 0x4 * K,
                         T = T - (I["sigBytes"] % T), i = (T << 0x18) | (T << 0x10) | (T << 0x8) | T, Z = [], w = 0x0; w < T; w += 0x4) Z["push"](i);
                (T = S["create"](Z, T)),
                    I["concat"](T);
            },
            "unpad": function (I) {
                I["sigBytes"] -= I["words"][(I["sigBytes"] - 0x1) >>> 0x2] & 0xff;
            }
        }),
        (A["BlockCipher"] = C["extend"]({
            "cfg": C["cfg"]["extend"]({
                "mode": V,
                "padding": R
            }),
            "reset": function () {
                C["reset"]["call"](this);
                var I = this["cfg"],
                    K = I["iv"],
                    I = I["mode"];
                if (this["_xformMode"] == this["_ENC_XFORM_MODE"]) var T = I["createEncryptor"];
                else (T = I["createDecryptor"]),
                    (this["_minBufferSize"] = 0x1);
                this["_mode"] = T["call"](I, this, K && K["words"]);
            },
            "_doProcessBlock": function (I, K) {
                this["_mode"]["processBlock"](I, K);
            },
            "_doFinalize": function () {
                var I = this["cfg"]["padding"];
                if (this["_xformMode"] == this["_ENC_XFORM_MODE"]) {
                    I["pad"](this["_data"], this["blockSize"]);
                    var K = this["_process"](!0x0);
                } else (K = this["_process"](!0x0)),
                    I["unpad"](K);
                return K;
            },
            "blockSize": 0x4
        }));
    var B = (A["CipherParams"] = L["extend"]({
            "init": function (I) {
                this["mixIn"](I);
            },
            "toString": function (I) {
                return (I || this["formatter"])["stringify"](this);
            }
        })),
        V = ((a["format"] = {})["OpenSSL"] = {
            "stringify": function (I) {
                var K = I["ciphertext"];
                return ((I = I["salt"]), (I ? S["create"]([0x53616c74, 0x65645f5f])["concat"](I)["concat"](K) : K)["toString"](J));
            },
            "parse": function (I) {
                I = J["parse"](I);
                var K = I["words"];
                if (0x53616c74 == K[0x0] && 0x65645f5f == K[0x1]) {
                    var T = S["create"](K["slice"](0x2, 0x4));
                    K["splice"](0x0, 0x4),
                        (I["sigBytes"] -= 0x10);
                }
                return B["create"]({
                    "ciphertext": I,
                    "salt": T
                });
            }
        }),
        F = (A["SerializableCipher"] = L["extend"]({
            "cfg": L["extend"]({
                "format": V
            }),
            "encrypt": function (I, K, T, i) {
                i = this["cfg"]["extend"](i);
                var Z = I["createEncryptor"](T, i);
                return ((K = Z["finalize"](K)), (Z = Z["cfg"]), B["create"]({
                    "ciphertext": K,
                    "key": T,
                    "iv": Z["iv"],
                    "algorithm": I,
                    "mode": Z["mode"],
                    "padding": Z["padding"],
                    "blockSize": I["blockSize"],
                    "formatter": i["format"]
                }));
            },
            "decrypt": function (I, K, T, i) {
                return ((i = this["cfg"]["extend"](i)), (K = this["_parse"](K, i["format"])), I["createDecryptor"](T, i)["finalize"](K["ciphertext"]));
            },
            "_parse": function (I, K) {
                return "string" == typeof I ? K["parse"](I, this) : I;
            }
        })),
        a = ((a["kdf"] = {})["OpenSSL"] = {
            "execute": function (I, K, T, i) {
                return (i || (i = S["random"](0x8)), (I = b["create"]({
                    "keySize": K + T
                })["compute"](I, i)), (T = S["create"](I["words"]["slice"](K), 0x4 * T)), (I["sigBytes"] = 0x4 * K), B["create"]({
                    "key": I,
                    "iv": T,
                    "salt": i
                }));
            }
        }),
        E = (A["PasswordBasedCipher"] = F["extend"]({
            "cfg": F["cfg"]["extend"]({
                "kdf": a
            }),
            "encrypt": function (I, K, T, i) {
                return ((i = this["cfg"]["extend"](i)), (T = i["kdf"]["execute"](T, I["keySize"], I["ivSize"])), (i["iv"] = T["iv"]), (I = F["encrypt"]["call"](this, I, K, T["key"], i)), I["mixIn"](T), I);
            },
            "decrypt": function (I, K, T, i) {
                return ((i = this["cfg"]["extend"](i)), (K = this["_parse"](K, i["format"])), (T = i["kdf"]["execute"](T, I["keySize"], I["ivSize"], K["salt"])), (i["iv"] = T["iv"]), F["decrypt"]["call"](this, I, K, T["key"], i));
            }
        }));
})(),
    (function () {
        for (var p = CryptoJS,
                 c = p["lib"]["BlockCipher"], a = p["algo"], L = [], S = [], Y = [], J = [], V = [], W = [], R = [], I = [], K = [], T = [], i = [], e = 0x0; 0x100 > e; e++) i[e] = 0x80 > e ? e << 0x1 : (e << 0x1) ^ 0x11b;
        for (var Z = 0x0,
                 M = 0x0,
                 e = 0x0; 0x100 > e; e++) {
            var U = M ^ (M << 0x1) ^ (M << 0x2) ^ (M << 0x3) ^ (M << 0x4),
                U = (U >>> 0x8) ^ (U & 0xff) ^ 0x63;
            (L[Z] = U),
                (S[U] = Z);
            var h = i[Z],
                H = i[h],
                O = i[H],
                X = (0x101 * i[U]) ^ (0x1010100 * U);
            (Y[Z] = (X << 0x18) | (X >>> 0x8)),
                (J[Z] = (X << 0x10) | (X >>> 0x10)),
                (V[Z] = (X << 0x8) | (X >>> 0x18)),
                (W[Z] = X),
                (X = (0x1010101 * O) ^ (0x10001 * H) ^ (0x101 * h) ^ (0x1010100 * Z)),
                (R[U] = (X << 0x18) | (X >>> 0x8)),
                (I[U] = (X << 0x10) | (X >>> 0x10)),
                (K[U] = (X << 0x8) | (X >>> 0x18)),
                (T[U] = X),
                Z ? ((Z = h ^ i[i[i[O ^ h]]]), (M ^= i[i[M]])) : (Z = M = 0x1);
        }
        var G = [0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36],
            a = (a["AES"] = c["extend"]({
                "_doReset": function () {
                    for (var N = this["_key"], o = N["words"], m = N["sigBytes"] / 0x4, N = 0x4 * ((this["_nRounds"] = m + 0x6) + 0x1), Q = (this["_keySchedule"] = []), P = 0x0; P < N; P++) if (P < m) Q[P] = o[P];
                    else {
                        var p0 = Q[P - 0x1];
                        P % m ? 0x6 < m && 0x4 == P % m && (p0 = (L[p0 >>> 0x18] << 0x18) | (L[(p0 >>> 0x10) & 0xff] << 0x10) | (L[(p0 >>> 0x8) & 0xff] << 0x8) | L[p0 & 0xff]) : ((p0 = (p0 << 0x8) | (p0 >>> 0x18)), (p0 = (L[p0 >>> 0x18] << 0x18) | (L[(p0 >>> 0x10) & 0xff] << 0x10) | (L[(p0 >>> 0x8) & 0xff] << 0x8) | L[p0 & 0xff]), (p0 ^= G[(P / m) | 0x0] << 0x18)),
                            (Q[P] = Q[P - m] ^ p0);
                    }
                    o = this["_invKeySchedule"] = [];
                    for (m = 0x0; m < N; m++) (P = N - m),
                        (p0 = m % 0x4 ? Q[P] : Q[P - 0x4]),
                        (o[m] = 0x4 > m || 0x4 >= P ? p0 : R[L[p0 >>> 0x18]] ^ I[L[(p0 >>> 0x10) & 0xff]] ^ K[L[(p0 >>> 0x8) & 0xff]] ^ T[L[p0 & 0xff]]);
                },
                "encryptBlock": function (N, o) {
                    this["_doCryptBlock"](N, o, this["_keySchedule"], Y, J, V, W, L);
                },
                "decryptBlock": function (N, o) {
                    var m = N[o + 0x1];
                    (N[o + 0x1] = N[o + 0x3]),
                        (N[o + 0x3] = m),
                        this["_doCryptBlock"](N, o, this["_invKeySchedule"], R, I, K, T, S),
                        (m = N[o + 0x1]),
                        (N[o + 0x1] = N[o + 0x3]),
                        (N[o + 0x3] = m);
                },
                "_doCryptBlock": function (N, o, Q, P, p0, p1, p2, p3) {
                    for (var p4 = this["_nRounds"], p5 = N[o] ^ Q[0x0], p6 = N[o + 0x1] ^ Q[0x1], p7 = N[o + 0x2] ^ Q[0x2], p8 = N[o + 0x3] ^ Q[0x3], p9 = 0x4, pp = 0x1; pp < p4; pp++) var pn = P[p5 >>> 0x18] ^ p0[(p6 >>> 0x10) & 0xff] ^ p1[(p7 >>> 0x8) & 0xff] ^ p2[p8 & 0xff] ^ Q[p9++],
                        pc = P[p6 >>> 0x18] ^ p0[(p7 >>> 0x10) & 0xff] ^ p1[(p8 >>> 0x8) & 0xff] ^ p2[p5 & 0xff] ^ Q[p9++],
                        pa = P[p7 >>> 0x18] ^ p0[(p8 >>> 0x10) & 0xff] ^ p1[(p5 >>> 0x8) & 0xff] ^ p2[p6 & 0xff] ^ Q[p9++],
                        p8 = P[p8 >>> 0x18] ^ p0[(p5 >>> 0x10) & 0xff] ^ p1[(p6 >>> 0x8) & 0xff] ^ p2[p7 & 0xff] ^ Q[p9++],
                        p5 = pn,
                        p6 = pc,
                        p7 = pa;
                    (pn = ((p3[p5 >>> 0x18] << 0x18) | (p3[(p6 >>> 0x10) & 0xff] << 0x10) | (p3[(p7 >>> 0x8) & 0xff] << 0x8) | p3[p8 & 0xff]) ^ Q[p9++]),
                        (pc = ((p3[p6 >>> 0x18] << 0x18) | (p3[(p7 >>> 0x10) & 0xff] << 0x10) | (p3[(p8 >>> 0x8) & 0xff] << 0x8) | p3[p5 & 0xff]) ^ Q[p9++]),
                        (pa = ((p3[p7 >>> 0x18] << 0x18) | (p3[(p8 >>> 0x10) & 0xff] << 0x10) | (p3[(p5 >>> 0x8) & 0xff] << 0x8) | p3[p6 & 0xff]) ^ Q[p9++]),
                        (p8 = ((p3[p8 >>> 0x18] << 0x18) | (p3[(p5 >>> 0x10) & 0xff] << 0x10) | (p3[(p6 >>> 0x8) & 0xff] << 0x8) | p3[p7 & 0xff]) ^ Q[p9++]),
                        (N[o] = pn),
                        (N[o + 0x1] = pc),
                        (N[o + 0x2] = pa),
                        (N[o + 0x3] = p8);
                },
                "keySize": 0x8
            }));
        p["AES"] = c["_createHelper"](a);
    })(),
    (function () {
        function c(R, B) {
            var F = ((this["_lBlock"] >>> R) ^ this["_rBlock"]) & B;
            (this["_rBlock"] ^= F),
                (this["_lBlock"] ^= F << R);
        }

        function a(R, B) {
            var F = ((this["_rBlock"] >>> R) ^ this["_lBlock"]) & B;
            (this["_lBlock"] ^= F),
                (this["_rBlock"] ^= F << R);
        }

        var A = CryptoJS,
            L = A["lib"],
            S = L["WordArray"],
            L = L["BlockCipher"],
            f = A["algo"],
            Y = [0x39, 0x31, 0x29, 0x21, 0x19, 0x11, 0x9, 0x1, 0x3a, 0x32, 0x2a, 0x22, 0x1a, 0x12, 0xa, 0x2, 0x3b, 0x33, 0x2b, 0x23, 0x1b, 0x13, 0xb, 0x3, 0x3c, 0x34, 0x2c, 0x24, 0x3f, 0x37, 0x2f, 0x27, 0x1f, 0x17, 0xf, 0x7, 0x3e, 0x36, 0x2e, 0x26, 0x1e, 0x16, 0xe, 0x6, 0x3d, 0x35, 0x2d, 0x25, 0x1d, 0x15, 0xd, 0x5, 0x1c, 0x14, 0xc, 0x4],
            J = [0xe, 0x11, 0xb, 0x18, 0x1, 0x5, 0x3, 0x1c, 0xf, 0x6, 0x15, 0xa, 0x17, 0x13, 0xc, 0x4, 0x1a, 0x8, 0x10, 0x7, 0x1b, 0x14, 0xd, 0x2, 0x29, 0x34, 0x1f, 0x25, 0x2f, 0x37, 0x1e, 0x28, 0x33, 0x2d, 0x21, 0x30, 0x2c, 0x31, 0x27, 0x38, 0x22, 0x35, 0x2e, 0x2a, 0x32, 0x24, 0x1d, 0x20],
            b = [0x1, 0x2, 0x4, 0x6, 0x8, 0xa, 0xc, 0xe, 0xf, 0x11, 0x13, 0x15, 0x17, 0x19, 0x1b, 0x1c],
            C = [{
                "0": 0x808200,
                0x10000000: 0x8000,
                0x20000000: 0x808002,
                0x30000000: 0x2,
                0x40000000: 0x200,
                0x50000000: 0x808202,
                0x60000000: 0x800202,
                0x70000000: 0x800000,
                0x80000000: 0x202,
                0x90000000: 0x800200,
                0xa0000000: 0x8200,
                0xb0000000: 0x808000,
                0xc0000000: 0x8002,
                0xd0000000: 0x800002,
                0xe0000000: 0x0,
                0xf0000000: 0x8202,
                0x8000000: 0x0,
                0x18000000: 0x808202,
                0x28000000: 0x8202,
                0x38000000: 0x8000,
                0x48000000: 0x808200,
                0x58000000: 0x200,
                0x68000000: 0x808002,
                0x78000000: 0x2,
                0x88000000: 0x800200,
                0x98000000: 0x8200,
                0xa8000000: 0x808000,
                0xb8000000: 0x800202,
                0xc8000000: 0x800002,
                0xd8000000: 0x8002,
                0xe8000000: 0x202,
                0xf8000000: 0x800000,
                0x1: 0x8000,
                0x10000001: 0x2,
                0x20000001: 0x808200,
                0x30000001: 0x800000,
                0x40000001: 0x808002,
                0x50000001: 0x8200,
                0x60000001: 0x200,
                0x70000001: 0x800202,
                0x80000001: 0x808202,
                0x90000001: 0x808000,
                0xa0000001: 0x800002,
                0xb0000001: 0x8202,
                0xc0000001: 0x202,
                0xd0000001: 0x800200,
                0xe0000001: 0x8002,
                0xf0000001: 0x0,
                0x8000001: 0x808202,
                0x18000001: 0x808000,
                0x28000001: 0x800000,
                0x38000001: 0x200,
                0x48000001: 0x8000,
                0x58000001: 0x800002,
                0x68000001: 0x2,
                0x78000001: 0x8202,
                0x88000001: 0x8002,
                0x98000001: 0x800202,
                0xa8000001: 0x202,
                0xb8000001: 0x808200,
                0xc8000001: 0x800200,
                0xd8000001: 0x0,
                0xe8000001: 0x8200,
                0xf8000001: 0x808002
            },
                {
                    "0": 0x40084010,
                    0x1000000: 0x4000,
                    0x2000000: 0x80000,
                    0x3000000: 0x40080010,
                    0x4000000: 0x40000010,
                    0x5000000: 0x40084000,
                    0x6000000: 0x40004000,
                    0x7000000: 0x10,
                    0x8000000: 0x84000,
                    0x9000000: 0x40004010,
                    0xa000000: 0x40000000,
                    0xb000000: 0x84010,
                    0xc000000: 0x80010,
                    0xd000000: 0x0,
                    0xe000000: 0x4010,
                    0xf000000: 0x40080000,
                    0x800000: 0x40004000,
                    0x1800000: 0x84010,
                    0x2800000: 0x10,
                    0x3800000: 0x40004010,
                    0x4800000: 0x40084010,
                    0x5800000: 0x40000000,
                    0x6800000: 0x80000,
                    0x7800000: 0x40080010,
                    0x8800000: 0x80010,
                    0x9800000: 0x0,
                    0xa800000: 0x4000,
                    0xb800000: 0x40080000,
                    0xc800000: 0x40000010,
                    0xd800000: 0x84000,
                    0xe800000: 0x40084000,
                    0xf800000: 0x4010,
                    0x10000000: 0x0,
                    0x11000000: 0x40080010,
                    0x12000000: 0x40004010,
                    0x13000000: 0x40084000,
                    0x14000000: 0x40080000,
                    0x15000000: 0x10,
                    0x16000000: 0x84010,
                    0x17000000: 0x4000,
                    0x18000000: 0x4010,
                    0x19000000: 0x80000,
                    0x1a000000: 0x80010,
                    0x1b000000: 0x40000010,
                    0x1c000000: 0x84000,
                    0x1d000000: 0x40004000,
                    0x1e000000: 0x40000000,
                    0x1f000000: 0x40084010,
                    0x10800000: 0x84010,
                    0x11800000: 0x80000,
                    0x12800000: 0x40080000,
                    0x13800000: 0x4000,
                    0x14800000: 0x40004000,
                    0x15800000: 0x40084010,
                    0x16800000: 0x10,
                    0x17800000: 0x40000000,
                    0x18800000: 0x40084000,
                    0x19800000: 0x40000010,
                    0x1a800000: 0x40004010,
                    0x1b800000: 0x80010,
                    0x1c800000: 0x0,
                    0x1d800000: 0x4010,
                    0x1e800000: 0x40080010,
                    0x1f800000: 0x84000
                },
                {
                    "0": 0x104,
                    0x100000: 0x0,
                    0x200000: 0x4000100,
                    0x300000: 0x10104,
                    0x400000: 0x10004,
                    0x500000: 0x4000004,
                    0x600000: 0x4010104,
                    0x700000: 0x4010000,
                    0x800000: 0x4000000,
                    0x900000: 0x4010100,
                    0xa00000: 0x10100,
                    0xb00000: 0x4010004,
                    0xc00000: 0x4000104,
                    0xd00000: 0x10000,
                    0xe00000: 0x4,
                    0xf00000: 0x100,
                    0x80000: 0x4010100,
                    0x180000: 0x4010004,
                    0x280000: 0x0,
                    0x380000: 0x4000100,
                    0x480000: 0x4000004,
                    0x580000: 0x10000,
                    0x680000: 0x10004,
                    0x780000: 0x104,
                    0x880000: 0x4,
                    0x980000: 0x100,
                    0xa80000: 0x4010000,
                    0xb80000: 0x10104,
                    0xc80000: 0x10100,
                    0xd80000: 0x4000104,
                    0xe80000: 0x4010104,
                    0xf80000: 0x4000000,
                    0x1000000: 0x4010100,
                    0x1100000: 0x10004,
                    0x1200000: 0x10000,
                    0x1300000: 0x4000100,
                    0x1400000: 0x100,
                    0x1500000: 0x4010104,
                    0x1600000: 0x4000004,
                    0x1700000: 0x0,
                    0x1800000: 0x4000104,
                    0x1900000: 0x4000000,
                    0x1a00000: 0x4,
                    0x1b00000: 0x10100,
                    0x1c00000: 0x4010000,
                    0x1d00000: 0x104,
                    0x1e00000: 0x10104,
                    0x1f00000: 0x4010004,
                    0x1080000: 0x4000000,
                    0x1180000: 0x104,
                    0x1280000: 0x4010100,
                    0x1380000: 0x0,
                    0x1480000: 0x10004,
                    0x1580000: 0x4000100,
                    0x1680000: 0x100,
                    0x1780000: 0x4010004,
                    0x1880000: 0x10000,
                    0x1980000: 0x4010104,
                    0x1a80000: 0x10104,
                    0x1b80000: 0x4000004,
                    0x1c80000: 0x4000104,
                    0x1d80000: 0x4010000,
                    0x1e80000: 0x4,
                    0x1f80000: 0x10100
                },
                {
                    "0": 0x80401000,
                    0x10000: 0x80001040,
                    0x20000: 0x401040,
                    0x30000: 0x80400000,
                    0x40000: 0x0,
                    0x50000: 0x401000,
                    0x60000: 0x80000040,
                    0x70000: 0x400040,
                    0x80000: 0x80000000,
                    0x90000: 0x400000,
                    0xa0000: 0x40,
                    0xb0000: 0x80001000,
                    0xc0000: 0x80400040,
                    0xd0000: 0x1040,
                    0xe0000: 0x1000,
                    0xf0000: 0x80401040,
                    0x8000: 0x80001040,
                    0x18000: 0x40,
                    0x28000: 0x80400040,
                    0x38000: 0x80001000,
                    0x48000: 0x401000,
                    0x58000: 0x80401040,
                    0x68000: 0x0,
                    0x78000: 0x80400000,
                    0x88000: 0x1000,
                    0x98000: 0x80401000,
                    0xa8000: 0x400000,
                    0xb8000: 0x1040,
                    0xc8000: 0x80000000,
                    0xd8000: 0x400040,
                    0xe8000: 0x401040,
                    0xf8000: 0x80000040,
                    0x100000: 0x400040,
                    0x110000: 0x401000,
                    0x120000: 0x80000040,
                    0x130000: 0x0,
                    0x140000: 0x1040,
                    0x150000: 0x80400040,
                    0x160000: 0x80401000,
                    0x170000: 0x80001040,
                    0x180000: 0x80401040,
                    0x190000: 0x80000000,
                    0x1a0000: 0x80400000,
                    0x1b0000: 0x401040,
                    0x1c0000: 0x80001000,
                    0x1d0000: 0x400000,
                    0x1e0000: 0x40,
                    0x1f0000: 0x1000,
                    0x108000: 0x80400000,
                    0x118000: 0x80401040,
                    0x128000: 0x0,
                    0x138000: 0x401000,
                    0x148000: 0x400040,
                    0x158000: 0x80000000,
                    0x168000: 0x80001040,
                    0x178000: 0x40,
                    0x188000: 0x80000040,
                    0x198000: 0x1000,
                    0x1a8000: 0x80001000,
                    0x1b8000: 0x80400040,
                    0x1c8000: 0x1040,
                    0x1d8000: 0x80401000,
                    0x1e8000: 0x400000,
                    0x1f8000: 0x401040
                },
                {
                    "0": 0x80,
                    0x1000: 0x1040000,
                    0x2000: 0x40000,
                    0x3000: 0x20000000,
                    0x4000: 0x20040080,
                    0x5000: 0x1000080,
                    0x6000: 0x21000080,
                    0x7000: 0x40080,
                    0x8000: 0x1000000,
                    0x9000: 0x20040000,
                    0xa000: 0x20000080,
                    0xb000: 0x21040080,
                    0xc000: 0x21040000,
                    0xd000: 0x0,
                    0xe000: 0x1040080,
                    0xf000: 0x21000000,
                    0x800: 0x1040080,
                    0x1800: 0x21000080,
                    0x2800: 0x80,
                    0x3800: 0x1040000,
                    0x4800: 0x40000,
                    0x5800: 0x20040080,
                    0x6800: 0x21040000,
                    0x7800: 0x20000000,
                    0x8800: 0x20040000,
                    0x9800: 0x0,
                    0xa800: 0x21040080,
                    0xb800: 0x1000080,
                    0xc800: 0x20000080,
                    0xd800: 0x21000000,
                    0xe800: 0x1000000,
                    0xf800: 0x40080,
                    0x10000: 0x40000,
                    0x11000: 0x80,
                    0x12000: 0x20000000,
                    0x13000: 0x21000080,
                    0x14000: 0x1000080,
                    0x15000: 0x21040000,
                    0x16000: 0x20040080,
                    0x17000: 0x1000000,
                    0x18000: 0x21040080,
                    0x19000: 0x21000000,
                    0x1a000: 0x1040000,
                    0x1b000: 0x20040000,
                    0x1c000: 0x40080,
                    0x1d000: 0x20000080,
                    0x1e000: 0x0,
                    0x1f000: 0x1040080,
                    0x10800: 0x21000080,
                    0x11800: 0x1000000,
                    0x12800: 0x1040000,
                    0x13800: 0x20040080,
                    0x14800: 0x20000000,
                    0x15800: 0x1040080,
                    0x16800: 0x80,
                    0x17800: 0x21040000,
                    0x18800: 0x40080,
                    0x19800: 0x21040080,
                    0x1a800: 0x0,
                    0x1b800: 0x21000000,
                    0x1c800: 0x1000080,
                    0x1d800: 0x40000,
                    0x1e800: 0x20040000,
                    0x1f800: 0x20000080
                },
                {
                    "0": 0x10000008,
                    0x100: 0x2000,
                    0x200: 0x10200000,
                    0x300: 0x10202008,
                    0x400: 0x10002000,
                    0x500: 0x200000,
                    0x600: 0x200008,
                    0x700: 0x10000000,
                    0x800: 0x0,
                    0x900: 0x10002008,
                    0xa00: 0x202000,
                    0xb00: 0x8,
                    0xc00: 0x10200008,
                    0xd00: 0x202008,
                    0xe00: 0x2008,
                    0xf00: 0x10202000,
                    0x80: 0x10200000,
                    0x180: 0x10202008,
                    0x280: 0x8,
                    0x380: 0x200000,
                    0x480: 0x202008,
                    0x580: 0x10000008,
                    0x680: 0x10002000,
                    0x780: 0x2008,
                    0x880: 0x200008,
                    0x980: 0x2000,
                    0xa80: 0x10002008,
                    0xb80: 0x10200008,
                    0xc80: 0x0,
                    0xd80: 0x10202000,
                    0xe80: 0x202000,
                    0xf80: 0x10000000,
                    0x1000: 0x10002000,
                    0x1100: 0x10200008,
                    0x1200: 0x10202008,
                    0x1300: 0x2008,
                    0x1400: 0x200000,
                    0x1500: 0x10000000,
                    0x1600: 0x10000008,
                    0x1700: 0x202000,
                    0x1800: 0x202008,
                    0x1900: 0x0,
                    0x1a00: 0x8,
                    0x1b00: 0x10200000,
                    0x1c00: 0x2000,
                    0x1d00: 0x10002008,
                    0x1e00: 0x10202000,
                    0x1f00: 0x200008,
                    0x1080: 0x8,
                    0x1180: 0x202000,
                    0x1280: 0x200000,
                    0x1380: 0x10000008,
                    0x1480: 0x10002000,
                    0x1580: 0x2008,
                    0x1680: 0x10202008,
                    0x1780: 0x10200000,
                    0x1880: 0x10202000,
                    0x1980: 0x10200008,
                    0x1a80: 0x2000,
                    0x1b80: 0x202008,
                    0x1c80: 0x200008,
                    0x1d80: 0x0,
                    0x1e80: 0x10000000,
                    0x1f80: 0x10002008
                },
                {
                    "0": 0x100000,
                    0x10: 0x2000401,
                    0x20: 0x400,
                    0x30: 0x100401,
                    0x40: 0x2100401,
                    0x50: 0x0,
                    0x60: 0x1,
                    0x70: 0x2100001,
                    0x80: 0x2000400,
                    0x90: 0x100001,
                    0xa0: 0x2000001,
                    0xb0: 0x2100400,
                    0xc0: 0x2100000,
                    0xd0: 0x401,
                    0xe0: 0x100400,
                    0xf0: 0x2000000,
                    0x8: 0x2100001,
                    0x18: 0x0,
                    0x28: 0x2000401,
                    0x38: 0x2100400,
                    0x48: 0x100000,
                    0x58: 0x2000001,
                    0x68: 0x2000000,
                    0x78: 0x401,
                    0x88: 0x100401,
                    0x98: 0x2000400,
                    0xa8: 0x2100000,
                    0xb8: 0x100001,
                    0xc8: 0x400,
                    0xd8: 0x2100401,
                    0xe8: 0x1,
                    0xf8: 0x100400,
                    0x100: 0x2000000,
                    0x110: 0x100000,
                    0x120: 0x2000401,
                    0x130: 0x2100001,
                    0x140: 0x100001,
                    0x150: 0x2000400,
                    0x160: 0x2100400,
                    0x170: 0x100401,
                    0x180: 0x401,
                    0x190: 0x2100401,
                    0x1a0: 0x100400,
                    0x1b0: 0x1,
                    0x1c0: 0x0,
                    0x1d0: 0x2100000,
                    0x1e0: 0x2000001,
                    0x1f0: 0x400,
                    0x108: 0x100400,
                    0x118: 0x2000401,
                    0x128: 0x2100001,
                    0x138: 0x1,
                    0x148: 0x2000000,
                    0x158: 0x100000,
                    0x168: 0x401,
                    0x178: 0x2100400,
                    0x188: 0x2000001,
                    0x198: 0x2100000,
                    0x1a8: 0x0,
                    0x1b8: 0x2100401,
                    0x1c8: 0x100401,
                    0x1d8: 0x400,
                    0x1e8: 0x2000400,
                    0x1f8: 0x100001
                },
                {
                    "0": 0x8000820,
                    0x1: 0x20000,
                    0x2: 0x8000000,
                    0x3: 0x20,
                    0x4: 0x20020,
                    0x5: 0x8020820,
                    0x6: 0x8020800,
                    0x7: 0x800,
                    0x8: 0x8020000,
                    0x9: 0x8000800,
                    0xa: 0x20800,
                    0xb: 0x8020020,
                    0xc: 0x820,
                    0xd: 0x0,
                    0xe: 0x8000020,
                    0xf: 0x20820,
                    0x80000000: 0x800,
                    0x80000001: 0x8020820,
                    0x80000002: 0x8000820,
                    0x80000003: 0x8000000,
                    0x80000004: 0x8020000,
                    0x80000005: 0x20800,
                    0x80000006: 0x20820,
                    0x80000007: 0x20,
                    0x80000008: 0x8000020,
                    0x80000009: 0x820,
                    0x8000000a: 0x20020,
                    0x8000000b: 0x8020800,
                    0x8000000c: 0x0,
                    0x8000000d: 0x8020020,
                    0x8000000e: 0x8000800,
                    0x8000000f: 0x20000,
                    0x10: 0x20820,
                    0x11: 0x8020800,
                    0x12: 0x20,
                    0x13: 0x800,
                    0x14: 0x8000800,
                    0x15: 0x8000020,
                    0x16: 0x8020020,
                    0x17: 0x20000,
                    0x18: 0x0,
                    0x19: 0x20020,
                    0x1a: 0x8020000,
                    0x1b: 0x8000820,
                    0x1c: 0x8020820,
                    0x1d: 0x20800,
                    0x1e: 0x820,
                    0x1f: 0x8000000,
                    0x80000010: 0x20000,
                    0x80000011: 0x800,
                    0x80000012: 0x8020020,
                    0x80000013: 0x20820,
                    0x80000014: 0x20,
                    0x80000015: 0x8020000,
                    0x80000016: 0x8000000,
                    0x80000017: 0x8000820,
                    0x80000018: 0x8020820,
                    0x80000019: 0x8000020,
                    0x8000001a: 0x8000800,
                    0x8000001b: 0x0,
                    0x8000001c: 0x20800,
                    0x8000001d: 0x820,
                    0x8000001e: 0x20020,
                    0x8000001f: 0x8020800
                }],
            V = [0xf8000001, 0x1f800000, 0x1f80000, 0x1f8000, 0x1f800, 0x1f80, 0x1f8, 0x8000001f],
            W = (f["DES"] = L["extend"]({
                "_doReset": function () {
                    for (var R = this["_key"]["words"], B = [], F = 0x0; 0x38 > F; F++) {
                        var E = Y[F] - 0x1;
                        B[F] = (R[E >>> 0x5] >>> (0x1f - (E % 0x20))) & 0x1;
                    }
                    R = this["_subKeys"] = [];
                    for (E = 0x0; 0x10 > E; E++) {
                        for (var I = (R[E] = []), K = b[E], F = 0x0; 0x18 > F; F++) (I[(F / 0x6) | 0x0] |= B[(J[F] - 0x1 + K) % 0x1c] << (0x1f - (F % 0x6))),
                            (I[0x4 + ((F / 0x6) | 0x0)] |= B[0x1c + ((J[F + 0x18] - 0x1 + K) % 0x1c)] << (0x1f - (F % 0x6)));
                        I[0x0] = (I[0x0] << 0x1) | (I[0x0] >>> 0x1f);
                        for (F = 0x1; 0x7 > F; F++) I[F] >>>= 0x4 * (F - 0x1) + 0x3;
                        I[0x7] = (I[0x7] << 0x5) | (I[0x7] >>> 0x1b);
                    }
                    B = this["_invSubKeys"] = [];
                    for (F = 0x0; 0x10 > F; F++) B[F] = R[0xf - F];
                },
                "encryptBlock": function (R, B) {
                    this["_doCryptBlock"](R, B, this["_subKeys"]);
                },
                "decryptBlock": function (R, B) {
                    this["_doCryptBlock"](R, B, this["_invSubKeys"]);
                },
                "_doCryptBlock": function (R, B, F) {
                    (this["_lBlock"] = R[B]),
                        (this["_rBlock"] = R[B + 0x1]),
                        c["call"](this, 0x4, 0xf0f0f0f),
                        c["call"](this, 0x10, 0xffff),
                        a["call"](this, 0x2, 0x33333333),
                        a["call"](this, 0x8, 0xff00ff),
                        c["call"](this, 0x1, 0x55555555);
                    for (var E = 0x0; 0x10 > E; E++) {
                        for (var I = F[E], K = this["_lBlock"], T = this["_rBlock"], i = 0x0, Z = 0x0; 0x8 > Z; Z++) i |= C[Z][((T ^ I[Z]) & V[Z]) >>> 0x0];
                        (this["_lBlock"] = T),
                            (this["_rBlock"] = K ^ i);
                    }
                    (F = this["_lBlock"]),
                        (this["_lBlock"] = this["_rBlock"]),
                        (this["_rBlock"] = F),
                        c["call"](this, 0x1, 0x55555555),
                        a["call"](this, 0x8, 0xff00ff),
                        a["call"](this, 0x2, 0x33333333),
                        c["call"](this, 0x10, 0xffff),
                        c["call"](this, 0x4, 0xf0f0f0f),
                        (R[B] = this["_lBlock"]),
                        (R[B + 0x1] = this["_rBlock"]);
                },
                "keySize": 0x2,
                "ivSize": 0x2,
                "blockSize": 0x2
            }));
        (A["DES"] = L["_createHelper"](W)),
            (f = f["TripleDES"] = L["extend"]({
                "_doReset": function () {
                    var R = this["_key"]["words"];
                    (this["_des1"] = W["createEncryptor"](S["create"](R["slice"](0x0, 0x2)))),
                        (this["_des2"] = W["createEncryptor"](S["create"](R["slice"](0x2, 0x4)))),
                        (this["_des3"] = W["createEncryptor"](S["create"](R["slice"](0x4, 0x6))));
                },
                "encryptBlock": function (R, B) {
                    this["_des1"]["encryptBlock"](R, B),
                        this["_des2"]["decryptBlock"](R, B),
                        this["_des3"]["encryptBlock"](R, B);
                },
                "decryptBlock": function (R, B) {
                    this["_des3"]["decryptBlock"](R, B),
                        this["_des2"]["encryptBlock"](R, B),
                        this["_des1"]["decryptBlock"](R, B);
                },
                "keySize": 0x6,
                "ivSize": 0x2,
                "blockSize": 0x2
            })),
            (A["TripleDES"] = L["_createHelper"](f));
    })(),
    (function () {
        var p = CryptoJS,
            n = p["lib"]["WordArray"];
        p["enc"]["Base64"] = {
            "stringify": function (A) {
                var L = A["words"],
                    S = A["sigBytes"],
                    Y = this["_map"];
                A["clamp"](),
                    (A = []);
                for (var J = 0x0; J < S; J += 0x3) for (var C = (((L[J >>> 0x2] >>> (0x18 - 0x8 * (J % 0x4))) & 0xff) << 0x10) | (((L[(J + 0x1) >>> 0x2] >>> (0x18 - 0x8 * ((J + 0x1) % 0x4))) & 0xff) << 0x8) | ((L[(J + 0x2) >>> 0x2] >>> (0x18 - 0x8 * ((J + 0x2) % 0x4))) & 0xff), V = 0x0; 0x4 > V && J + 0.75 * V < S; V++) A["push"](Y["charAt"]((C >>> (0x6 * (0x3 - V))) & 0x3f));
                if ((L = Y["charAt"](0x40))) {
                    for (; A["length"] % 0x4;) A["push"](L);
                }
                return A["join"]("");
            },
            "parse": function (A) {
                var L = A["length"],
                    S = this["_map"],
                    Y = S["charAt"](0x40);
                Y && ((Y = A["indexOf"](Y)), -0x1 != Y && (L = Y));
                for (var Y = [], J = 0x0, C = 0x0; C < L; C++) if (C % 0x4) {
                    var V = S["indexOf"](A["charAt"](C - 0x1)) << (0x2 * (C % 0x4)),
                        W = S["indexOf"](A["charAt"](C)) >>> (0x6 - 0x2 * (C % 0x4));
                    (Y[J >>> 0x2] |= (V | W) << (0x18 - 0x8 * (J % 0x4))),
                        J++;
                }
                return n["create"](Y, J);
            },
            "_map": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
    })(),
    (function (p) {
        function c(V, W, R, B, I, K, T) {
            return ((V = V + ((W & R) | (~W & B)) + I + T), ((V << K) | (V >>> (0x20 - K))) + W);
        }

        function A(V, W, R, B, I, K, T) {
            return ((V = V + ((W & B) | (R & ~B)) + I + T), ((V << K) | (V >>> (0x20 - K))) + W);
        }

        function L(V, W, R, B, I, K, T) {
            return (V = V + (W ^ R ^ B) + I + T),
            ((V << K) | (V >>> (0x20 - K))) + W;
        }

        function g(V, W, R, B, I, K, T) {
            return ((V = V + (R ^ (W | ~B)) + I + T), ((V << K) | (V >>> (0x20 - K))) + W);
        }

        for (var S = CryptoJS,
                 f = S["lib"], Y = f["WordArray"], J = f["Hasher"], f = S["algo"], b = [], C = 0x0; 0x40 > C; C++) b[C] = (0x100000000 * p["abs"](p["sin"](C + 0x1))) | 0x0;
        (f = f["MD5"] = J["extend"]({
            "_doReset": function () {
                this["_hash"] = new Y["init"]([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
            },
            "_doProcessBlock": function (V, W) {
                for (var R = 0x0; 0x10 > R; R++) {
                    var I = W + R,
                        K = V[I];
                    V[I] = (((K << 0x8) | (K >>> 0x18)) & 0xff00ff) | (((K << 0x18) | (K >>> 0x8)) & 0xff00ff00);
                }
                var R = this["_hash"]["words"],
                    I = V[W + 0x0],
                    K = V[W + 0x1],
                    T = V[W + 0x2],
                    i = V[W + 0x3],
                    Z = V[W + 0x4],
                    M = V[W + 0x5],
                    U = V[W + 0x6],
                    H = V[W + 0x7],
                    O = V[W + 0x8],
                    X = V[W + 0x9],
                    G = V[W + 0xa],
                    N = V[W + 0xb],
                    o = V[W + 0xc],
                    Q = V[W + 0xd],
                    P = V[W + 0xe],
                    p0 = V[W + 0xf],
                    p1 = R[0x0],
                    p2 = R[0x1],
                    p3 = R[0x2],
                    p4 = R[0x3],
                    p1 = c(p1, p2, p3, p4, I, 0x7, b[0x0]),
                    p4 = c(p4, p1, p2, p3, K, 0xc, b[0x1]),
                    p3 = c(p3, p4, p1, p2, T, 0x11, b[0x2]),
                    p2 = c(p2, p3, p4, p1, i, 0x16, b[0x3]),
                    p1 = c(p1, p2, p3, p4, Z, 0x7, b[0x4]),
                    p4 = c(p4, p1, p2, p3, M, 0xc, b[0x5]),
                    p3 = c(p3, p4, p1, p2, U, 0x11, b[0x6]),
                    p2 = c(p2, p3, p4, p1, H, 0x16, b[0x7]),
                    p1 = c(p1, p2, p3, p4, O, 0x7, b[0x8]),
                    p4 = c(p4, p1, p2, p3, X, 0xc, b[0x9]),
                    p3 = c(p3, p4, p1, p2, G, 0x11, b[0xa]),
                    p2 = c(p2, p3, p4, p1, N, 0x16, b[0xb]),
                    p1 = c(p1, p2, p3, p4, o, 0x7, b[0xc]),
                    p4 = c(p4, p1, p2, p3, Q, 0xc, b[0xd]),
                    p3 = c(p3, p4, p1, p2, P, 0x11, b[0xe]),
                    p2 = c(p2, p3, p4, p1, p0, 0x16, b[0xf]),
                    p1 = A(p1, p2, p3, p4, K, 0x5, b[0x10]),
                    p4 = A(p4, p1, p2, p3, U, 0x9, b[0x11]),
                    p3 = A(p3, p4, p1, p2, N, 0xe, b[0x12]),
                    p2 = A(p2, p3, p4, p1, I, 0x14, b[0x13]),
                    p1 = A(p1, p2, p3, p4, M, 0x5, b[0x14]),
                    p4 = A(p4, p1, p2, p3, G, 0x9, b[0x15]),
                    p3 = A(p3, p4, p1, p2, p0, 0xe, b[0x16]),
                    p2 = A(p2, p3, p4, p1, Z, 0x14, b[0x17]),
                    p1 = A(p1, p2, p3, p4, X, 0x5, b[0x18]),
                    p4 = A(p4, p1, p2, p3, P, 0x9, b[0x19]),
                    p3 = A(p3, p4, p1, p2, i, 0xe, b[0x1a]),
                    p2 = A(p2, p3, p4, p1, O, 0x14, b[0x1b]),
                    p1 = A(p1, p2, p3, p4, Q, 0x5, b[0x1c]),
                    p4 = A(p4, p1, p2, p3, T, 0x9, b[0x1d]),
                    p3 = A(p3, p4, p1, p2, H, 0xe, b[0x1e]),
                    p2 = A(p2, p3, p4, p1, o, 0x14, b[0x1f]),
                    p1 = L(p1, p2, p3, p4, M, 0x4, b[0x20]),
                    p4 = L(p4, p1, p2, p3, O, 0xb, b[0x21]),
                    p3 = L(p3, p4, p1, p2, N, 0x10, b[0x22]),
                    p2 = L(p2, p3, p4, p1, P, 0x17, b[0x23]),
                    p1 = L(p1, p2, p3, p4, K, 0x4, b[0x24]),
                    p4 = L(p4, p1, p2, p3, Z, 0xb, b[0x25]),
                    p3 = L(p3, p4, p1, p2, H, 0x10, b[0x26]),
                    p2 = L(p2, p3, p4, p1, G, 0x17, b[0x27]),
                    p1 = L(p1, p2, p3, p4, Q, 0x4, b[0x28]),
                    p4 = L(p4, p1, p2, p3, I, 0xb, b[0x29]),
                    p3 = L(p3, p4, p1, p2, i, 0x10, b[0x2a]),
                    p2 = L(p2, p3, p4, p1, U, 0x17, b[0x2b]),
                    p1 = L(p1, p2, p3, p4, X, 0x4, b[0x2c]),
                    p4 = L(p4, p1, p2, p3, o, 0xb, b[0x2d]),
                    p3 = L(p3, p4, p1, p2, p0, 0x10, b[0x2e]),
                    p2 = L(p2, p3, p4, p1, T, 0x17, b[0x2f]),
                    p1 = g(p1, p2, p3, p4, I, 0x6, b[0x30]),
                    p4 = g(p4, p1, p2, p3, H, 0xa, b[0x31]),
                    p3 = g(p3, p4, p1, p2, P, 0xf, b[0x32]),
                    p2 = g(p2, p3, p4, p1, M, 0x15, b[0x33]),
                    p1 = g(p1, p2, p3, p4, o, 0x6, b[0x34]),
                    p4 = g(p4, p1, p2, p3, i, 0xa, b[0x35]),
                    p3 = g(p3, p4, p1, p2, G, 0xf, b[0x36]),
                    p2 = g(p2, p3, p4, p1, K, 0x15, b[0x37]),
                    p1 = g(p1, p2, p3, p4, O, 0x6, b[0x38]),
                    p4 = g(p4, p1, p2, p3, p0, 0xa, b[0x39]),
                    p3 = g(p3, p4, p1, p2, U, 0xf, b[0x3a]),
                    p2 = g(p2, p3, p4, p1, Q, 0x15, b[0x3b]),
                    p1 = g(p1, p2, p3, p4, Z, 0x6, b[0x3c]),
                    p4 = g(p4, p1, p2, p3, N, 0xa, b[0x3d]),
                    p3 = g(p3, p4, p1, p2, T, 0xf, b[0x3e]),
                    p2 = g(p2, p3, p4, p1, X, 0x15, b[0x3f]);
                (R[0x0] = (R[0x0] + p1) | 0x0),
                    (R[0x1] = (R[0x1] + p2) | 0x0),
                    (R[0x2] = (R[0x2] + p3) | 0x0),
                    (R[0x3] = (R[0x3] + p4) | 0x0);
            },
            "_doFinalize": function () {
                var V = this["_data"],
                    W = V["words"],
                    R = 0x8 * this["_nDataBytes"],
                    B = 0x8 * V["sigBytes"];
                W[B >>> 0x5] |= 0x80 << (0x18 - (B % 0x20));
                var I = p["floor"](R / 0x100000000);
                (W[(((B + 0x40) >>> 0x9) << 0x4) + 0xf] = (((I << 0x8) | (I >>> 0x18)) & 0xff00ff) | (((I << 0x18) | (I >>> 0x8)) & 0xff00ff00)),
                    (W[(((B + 0x40) >>> 0x9) << 0x4) + 0xe] = (((R << 0x8) | (R >>> 0x18)) & 0xff00ff) | (((R << 0x18) | (R >>> 0x8)) & 0xff00ff00)),
                    (V["sigBytes"] = 0x4 * (W["length"] + 0x1)),
                    this["_process"](),
                    (V = this["_hash"]),
                    (W = V["words"]);
                for (R = 0x0; 0x4 > R; R++) (B = W[R]),
                    (W[R] = (((B << 0x8) | (B >>> 0x18)) & 0xff00ff) | (((B << 0x18) | (B >>> 0x8)) & 0xff00ff00));
                return V;
            },
            "clone": function () {
                var V = J["clone"]["call"](this);
                return ((V["_hash"] = this["_hash"]["clone"]()), V);
            }
        })),
            (S["MD5"] = J["_createHelper"](f)),
            (S["HmacMD5"] = J["_createHmacHelper"](f));
    })(Math),
    (function () {
        var p = CryptoJS,
            n = p["lib"],
            c = n["WordArray"],
            a = n["Hasher"],
            A = [],
            n = (p["algo"]["SHA1"] = a["extend"]({
                "_doReset": function () {
                    this["_hash"] = new c["init"]([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
                },
                "_doProcessBlock": function (L, S) {
                    for (var Y = this["_hash"]["words"], J = Y[0x0], C = Y[0x1], V = Y[0x2], W = Y[0x3], R = Y[0x4], B = 0x0; 0x50 > B; B++) {
                        if (0x10 > B) A[B] = L[S + B] | 0x0;
                        else {
                            var F = A[B - 0x3] ^ A[B - 0x8] ^ A[B - 0xe] ^ A[B - 0x10];
                            A[B] = (F << 0x1) | (F >>> 0x1f);
                        }
                        (F = ((J << 0x5) | (J >>> 0x1b)) + R + A[B]),
                            (F = 0x14 > B ? F + (((C & V) | (~C & W)) + 0x5a827999) : 0x28 > B ? F + ((C ^ V ^ W) + 0x6ed9eba1) : 0x3c > B ? F + (((C & V) | (C & W) | (V & W)) - 0x70e44324) : F + ((C ^ V ^ W) - 0x359d3e2a)),
                            (R = W),
                            (W = V),
                            (V = (C << 0x1e) | (C >>> 0x2)),
                            (C = J),
                            (J = F);
                    }
                    (Y[0x0] = (Y[0x0] + J) | 0x0),
                        (Y[0x1] = (Y[0x1] + C) | 0x0),
                        (Y[0x2] = (Y[0x2] + V) | 0x0),
                        (Y[0x3] = (Y[0x3] + W) | 0x0),
                        (Y[0x4] = (Y[0x4] + R) | 0x0);
                },
                "_doFinalize": function () {
                    var L = this["_data"],
                        g = L["words"],
                        S = 0x8 * this["_nDataBytes"],
                        f = 0x8 * L["sigBytes"];
                    return ((g[f >>> 0x5] |= 0x80 << (0x18 - (f % 0x20))), (g[(((f + 0x40) >>> 0x9) << 0x4) + 0xe] = Math["floor"](S / 0x100000000)), (g[(((f + 0x40) >>> 0x9) << 0x4) + 0xf] = S), (L["sigBytes"] = 0x4 * g["length"]), this["_process"](), this["_hash"]);
                },
                "clone": function () {
                    var L = a["clone"]["call"](this);
                    return ((L["_hash"] = this["_hash"]["clone"]()), L);
                }
            }));
        (p["SHA1"] = a["_createHelper"](n)),
            (p["HmacSHA1"] = a["_createHmacHelper"](n));
    })(),
    (function (p) {
        for (var c = CryptoJS,
                 a = c["lib"], A = a["WordArray"], L = a["Hasher"], a = c["algo"], S = [], f = [], Y = function (F) {
                return (0x100000000 * (F - (F | 0x0))) | 0x0;
            },
                 J = 0x2, C = 0x0; 0x40 > C;
        ) {
            var V;
            F: {
                V = J;
                for (var W = p["sqrt"](V), R = 0x2; R <= W; R++) if (!(V % R)) {
                    V = !0x1;
                    break F;
                }
                V = !0x0;
            }
            V && (0x8 > C && (S[C] = Y(p["pow"](J, 0.5))), (f[C] = Y(p["pow"](J, 0x1 / 0x3))), C++),
                J++;
        }
        var B = [],
            a = (a["SHA256"] = L["extend"]({
                "_doReset": function () {
                    this["_hash"] = new A["init"](S["slice"](0x0));
                },
                "_doProcessBlock": function (F, E) {
                    for (var I = this["_hash"]["words"], K = I[0x0], T = I[0x1], i = I[0x2], Z = I[0x3], M = I[0x4], U = I[0x5], H = I[0x6], O = I[0x7], X = 0x0; 0x40 > X; X++) {
                        if (0x10 > X) B[X] = F[E + X] | 0x0;
                        else {
                            var G = B[X - 0xf],
                                x = B[X - 0x2];
                            B[X] = (((G << 0x19) | (G >>> 0x7)) ^ ((G << 0xe) | (G >>> 0x12)) ^ (G >>> 0x3)) + B[X - 0x7] + (((x << 0xf) | (x >>> 0x11)) ^ ((x << 0xd) | (x >>> 0x13)) ^ (x >>> 0xa)) + B[X - 0x10];
                        }
                        (G = O + (((M << 0x1a) | (M >>> 0x6)) ^ ((M << 0x15) | (M >>> 0xb)) ^ ((M << 0x7) | (M >>> 0x19))) + ((M & U) ^ (~M & H)) + f[X] + B[X]),
                            (x = (((K << 0x1e) | (K >>> 0x2)) ^ ((K << 0x13) | (K >>> 0xd)) ^ ((K << 0xa) | (K >>> 0x16))) + ((K & T) ^ (K & i) ^ (T & i))),
                            (O = H),
                            (H = U),
                            (U = M),
                            (M = (Z + G) | 0x0),
                            (Z = i),
                            (i = T),
                            (T = K),
                            (K = (G + x) | 0x0);
                    }
                    (I[0x0] = (I[0x0] + K) | 0x0),
                        (I[0x1] = (I[0x1] + T) | 0x0),
                        (I[0x2] = (I[0x2] + i) | 0x0),
                        (I[0x3] = (I[0x3] + Z) | 0x0),
                        (I[0x4] = (I[0x4] + M) | 0x0),
                        (I[0x5] = (I[0x5] + U) | 0x0),
                        (I[0x6] = (I[0x6] + H) | 0x0),
                        (I[0x7] = (I[0x7] + O) | 0x0);
                },
                "_doFinalize": function () {
                    var F = this["_data"],
                        E = F["words"],
                        I = 0x8 * this["_nDataBytes"],
                        K = 0x8 * F["sigBytes"];
                    return ((E[K >>> 0x5] |= 0x80 << (0x18 - (K % 0x20))), (E[(((K + 0x40) >>> 0x9) << 0x4) + 0xe] = p["floor"](I / 0x100000000)), (E[(((K + 0x40) >>> 0x9) << 0x4) + 0xf] = I), (F["sigBytes"] = 0x4 * E["length"]), this["_process"](), this["_hash"]);
                },
                "clone": function () {
                    var F = L["clone"]["call"](this);
                    return ((F["_hash"] = this["_hash"]["clone"]()), F);
                }
            }));
        (c["SHA256"] = L["_createHelper"](a)),
            (c["HmacSHA256"] = L["_createHmacHelper"](a));
    })(Math),
    (function () {
        var p = CryptoJS,
            n = p["lib"]["WordArray"],
            A = p["algo"],
            L = A["SHA256"],
            A = (A["SHA224"] = L["extend"]({
                "_doReset": function () {
                    this["_hash"] = new n["init"]([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);
                },
                "_doFinalize": function () {
                    var g = L["_doFinalize"]["call"](this);
                    return (g["sigBytes"] -= 0x4),
                        g;
                }
            }));
        (p["SHA224"] = L["_createHelper"](A)),
            (p["HmacSHA224"] = L["_createHmacHelper"](A));
    })(),
    (function () {
        function p() {
            return g["create"]["apply"](g, arguments);
        }

        for (var c = CryptoJS,
                 A = c["lib"]["Hasher"], L = c["x64"], g = L["Word"], S = L["WordArray"], L = c["algo"], f = [p(0x428a2f98, 0xd728ae22), p(0x71374491, 0x23ef65cd), p(0xb5c0fbcf, 0xec4d3b2f), p(0xe9b5dba5, 0x8189dbbc), p(0x3956c25b, 0xf348b538), p(0x59f111f1, 0xb605d019), p(0x923f82a4, 0xaf194f9b), p(0xab1c5ed5, 0xda6d8118), p(0xd807aa98, 0xa3030242), p(0x12835b01, 0x45706fbe), p(0x243185be, 0x4ee4b28c), p(0x550c7dc3, 0xd5ffb4e2), p(0x72be5d74, 0xf27b896f), p(0x80deb1fe, 0x3b1696b1), p(0x9bdc06a7, 0x25c71235), p(0xc19bf174, 0xcf692694), p(0xe49b69c1, 0x9ef14ad2), p(0xefbe4786, 0x384f25e3), p(0xfc19dc6, 0x8b8cd5b5), p(0x240ca1cc, 0x77ac9c65), p(0x2de92c6f, 0x592b0275), p(0x4a7484aa, 0x6ea6e483), p(0x5cb0a9dc, 0xbd41fbd4), p(0x76f988da, 0x831153b5), p(0x983e5152, 0xee66dfab), p(0xa831c66d, 0x2db43210), p(0xb00327c8, 0x98fb213f), p(0xbf597fc7, 0xbeef0ee4), p(0xc6e00bf3, 0x3da88fc2), p(0xd5a79147, 0x930aa725), p(0x6ca6351, 0xe003826f), p(0x14292967, 0xa0e6e70), p(0x27b70a85, 0x46d22ffc), p(0x2e1b2138, 0x5c26c926), p(0x4d2c6dfc, 0x5ac42aed), p(0x53380d13, 0x9d95b3df), p(0x650a7354, 0x8baf63de), p(0x766a0abb, 0x3c77b2a8), p(0x81c2c92e, 0x47edaee6), p(0x92722c85, 0x1482353b), p(0xa2bfe8a1, 0x4cf10364), p(0xa81a664b, 0xbc423001), p(0xc24b8b70, 0xd0f89791), p(0xc76c51a3, 0x654be30), p(0xd192e819, 0xd6ef5218), p(0xd6990624, 0x5565a910), p(0xf40e3585, 0x5771202a), p(0x106aa070, 0x32bbd1b8), p(0x19a4c116, 0xb8d2d0c8), p(0x1e376c08, 0x5141ab53), p(0x2748774c, 0xdf8eeb99), p(0x34b0bcb5, 0xe19b48a8), p(0x391c0cb3, 0xc5c95a63), p(0x4ed8aa4a, 0xe3418acb), p(0x5b9cca4f, 0x7763e373), p(0x682e6ff3, 0xd6b2b8a3), p(0x748f82ee, 0x5defb2fc), p(0x78a5636f, 0x43172f60), p(0x84c87814, 0xa1f0ab72), p(0x8cc70208, 0x1a6439ec), p(0x90befffa, 0x23631e28), p(0xa4506ceb, 0xde82bde9), p(0xbef9a3f7, 0xb2c67915), p(0xc67178f2, 0xe372532b), p(0xca273ece, 0xea26619c), p(0xd186b8c7, 0x21c0c207), p(0xeada7dd6, 0xcde0eb1e), p(0xf57d4f7f, 0xee6ed178), p(0x6f067aa, 0x72176fba), p(0xa637dc5, 0xa2c898a6), p(0x113f9804, 0xbef90dae), p(0x1b710b35, 0x131c471b), p(0x28db77f5, 0x23047d84), p(0x32caab7b, 0x40c72493), p(0x3c9ebe0a, 0x15c9bebc), p(0x431d67c4, 0x9c100d4c), p(0x4cc5d4be, 0xcb3e42b6), p(0x597f299c, 0xfc657e2a), p(0x5fcb6fab, 0x3ad6faec), p(0x6c44198c, 0x4a475817)], Y = [], J = 0x0; 0x50 > J; J++) Y[J] = p();
        (L = L["SHA512"] = A["extend"]({
            "_doReset": function () {
                this["_hash"] = new S["init"]([new g["init"](0x6a09e667, 0xf3bcc908), new g["init"](0xbb67ae85, 0x84caa73b), new g["init"](0x3c6ef372, 0xfe94f82b), new g["init"](0xa54ff53a, 0x5f1d36f1), new g["init"](0x510e527f, 0xade682d1), new g["init"](0x9b05688c, 0x2b3e6c1f), new g["init"](0x1f83d9ab, 0xfb41bd6b), new g["init"](0x5be0cd19, 0x137e2179)]);
            },
            "_doProcessBlock": function (i, o) {
                for (var p0 = this["_hash"]["words"], p1 = p0[0x0], p2 = p0[0x1], p3 = p0[0x2], p4 = p0[0x3], p5 = p0[0x4], p6 = p0[0x5], p7 = p0[0x6], p0 = p0[0x7], p8 = p1["high"], p9 = p1["low"], pp = p2["high"], pn = p2["low"], pc = p3["high"], pa = p3["low"], pA = p4["high"], pL = p4["low"], pg = p5["high"], pS = p5["low"], pf = p6["high"], pY = p6["low"], pJ = p7["high"], pb = p7["low"], pC = p0["high"], pV = p0["low"], pW = p8, pl = p9, pR = pp, pB = pn, pF = pc, pE = pa, ps = pA, pI = pL, pK = pg, pT = pS, pi = pf, pe = pY, pZ = pJ, pw = pb, pM = pC, pu = pV, pk = 0x0; 0x50 > pk; pk++) {
                    var pq = Y[pk];
                    if (0x10 > pk) var pU = (pq["high"] = i[o + 0x2 * pk] | 0x0),
                        pz = (pq["low"] = i[o + 0x2 * pk + 0x1] | 0x0);
                    else {
                        var pU = Y[pk - 0xf],
                            pz = pU["high"],
                            ph = pU["low"],
                            pU = ((pz >>> 0x1) | (ph << 0x1f)) ^ ((pz >>> 0x8) | (ph << 0x18)) ^ (pz >>> 0x7),
                            ph = ((ph >>> 0x1) | (pz << 0x1f)) ^ ((ph >>> 0x8) | (pz << 0x18)) ^ ((ph >>> 0x7) | (pz << 0x19)),
                            pH = Y[pk - 0x2],
                            pz = pH["high"],
                            pj = pH["low"],
                            pH = ((pz >>> 0x13) | (pj << 0xd)) ^ ((pz << 0x3) | (pj >>> 0x1d)) ^ (pz >>> 0x6),
                            pj = ((pj >>> 0x13) | (pz << 0xd)) ^ ((pj << 0x3) | (pz >>> 0x1d)) ^ ((pj >>> 0x6) | (pz << 0x1a)),
                            pz = Y[pk - 0x7],
                            pO = pz["high"],
                            pt = Y[pk - 0x10],
                            pX = pt["high"],
                            pt = pt["low"],
                            pz = ph + pz["low"],
                            pU = pU + pO + (pz >>> 0x0 < ph >>> 0x0 ? 0x1 : 0x0),
                            pz = pz + pj,
                            pU = pU + pH + (pz >>> 0x0 < pj >>> 0x0 ? 0x1 : 0x0),
                            pz = pz + pt,
                            pU = pU + pX + (pz >>> 0x0 < pt >>> 0x0 ? 0x1 : 0x0);
                        (pq["high"] = pU),
                            (pq["low"] = pz);
                    }
                    var pO = (pK & pi) ^ (~pK & pZ),
                        pt = (pT & pe) ^ (~pT & pw),
                        pq = (pW & pR) ^ (pW & pF) ^ (pR & pF),
                        pG = (pl & pB) ^ (pl & pE) ^ (pB & pE),
                        ph = ((pW >>> 0x1c) | (pl << 0x4)) ^ ((pW << 0x1e) | (pl >>> 0x2)) ^ ((pW << 0x19) | (pl >>> 0x7)),
                        pH = ((pl >>> 0x1c) | (pW << 0x4)) ^ ((pl << 0x1e) | (pW >>> 0x2)) ^ ((pl << 0x19) | (pW >>> 0x7)),
                        pj = f[pk],
                        px = pj["high"],
                        pN = pj["low"],
                        pj = pu + (((pT >>> 0xe) | (pK << 0x12)) ^ ((pT >>> 0x12) | (pK << 0xe)) ^ ((pT << 0x17) | (pK >>> 0x9))),
                        pX = pM + (((pK >>> 0xe) | (pT << 0x12)) ^ ((pK >>> 0x12) | (pT << 0xe)) ^ ((pK << 0x17) | (pT >>> 0x9))) + (pj >>> 0x0 < pu >>> 0x0 ? 0x1 : 0x0),
                        pj = pj + pt,
                        pX = pX + pO + (pj >>> 0x0 < pt >>> 0x0 ? 0x1 : 0x0),
                        pj = pj + pN,
                        pX = pX + px + (pj >>> 0x0 < pN >>> 0x0 ? 0x1 : 0x0),
                        pj = pj + pz,
                        pX = pX + pU + (pj >>> 0x0 < pz >>> 0x0 ? 0x1 : 0x0),
                        pz = pH + pG,
                        pq = ph + pq + (pz >>> 0x0 < pH >>> 0x0 ? 0x1 : 0x0),
                        pM = pZ,
                        pu = pw,
                        pZ = pi,
                        pw = pe,
                        pi = pK,
                        pe = pT,
                        pT = (pI + pj) | 0x0,
                        pK = (ps + pX + (pT >>> 0x0 < pI >>> 0x0 ? 0x1 : 0x0)) | 0x0,
                        ps = pF,
                        pI = pE,
                        pF = pR,
                        pE = pB,
                        pR = pW,
                        pB = pl,
                        pl = (pj + pz) | 0x0,
                        pW = (pX + pq + (pl >>> 0x0 < pj >>> 0x0 ? 0x1 : 0x0)) | 0x0;
                }
                (p9 = p1["low"] = p9 + pl),
                    (p1["high"] = p8 + pW + (p9 >>> 0x0 < pl >>> 0x0 ? 0x1 : 0x0)),
                    (pn = p2["low"] = pn + pB),
                    (p2["high"] = pp + pR + (pn >>> 0x0 < pB >>> 0x0 ? 0x1 : 0x0)),
                    (pa = p3["low"] = pa + pE),
                    (p3["high"] = pc + pF + (pa >>> 0x0 < pE >>> 0x0 ? 0x1 : 0x0)),
                    (pL = p4["low"] = pL + pI),
                    (p4["high"] = pA + ps + (pL >>> 0x0 < pI >>> 0x0 ? 0x1 : 0x0)),
                    (pS = p5["low"] = pS + pT),
                    (p5["high"] = pg + pK + (pS >>> 0x0 < pT >>> 0x0 ? 0x1 : 0x0)),
                    (pY = p6["low"] = pY + pe),
                    (p6["high"] = pf + pi + (pY >>> 0x0 < pe >>> 0x0 ? 0x1 : 0x0)),
                    (pb = p7["low"] = pb + pw),
                    (p7["high"] = pJ + pZ + (pb >>> 0x0 < pw >>> 0x0 ? 0x1 : 0x0)),
                    (pV = p0["low"] = pV + pu),
                    (p0["high"] = pC + pM + (pV >>> 0x0 < pu >>> 0x0 ? 0x1 : 0x0));
            },
            "_doFinalize": function () {
                var b = this["_data"],
                    C = b["words"],
                    V = 0x8 * this["_nDataBytes"],
                    W = 0x8 * b["sigBytes"];
                return ((C[W >>> 0x5] |= 0x80 << (0x18 - (W % 0x20))), (C[(((W + 0x80) >>> 0xa) << 0x5) + 0x1e] = Math["floor"](V / 0x100000000)), (C[(((W + 0x80) >>> 0xa) << 0x5) + 0x1f] = V), (b["sigBytes"] = 0x4 * C["length"]), this["_process"](), this["_hash"]["toX32"]());
            },
            "clone": function () {
                var b = A["clone"]["call"](this);
                return ((b["_hash"] = this["_hash"]["clone"]()), b);
            },
            "blockSize": 0x20
        })),
            (c["SHA512"] = A["_createHelper"](L)),
            (c["HmacSHA512"] = A["_createHmacHelper"](L));
    })(),
    (function () {
        var p = CryptoJS,
            n = p["x64"],
            A = n["Word"],
            L = n["WordArray"],
            n = p["algo"],
            g = n["SHA512"],
            n = (n["SHA384"] = g["extend"]({
                "_doReset": function () {
                    this["_hash"] = new L["init"]([new A["init"](0xcbbb9d5d, 0xc1059ed8), new A["init"](0x629a292a, 0x367cd507), new A["init"](0x9159015a, 0x3070dd17), new A["init"](0x152fecd8, 0xf70e5939), new A["init"](0x67332667, 0xffc00b31), new A["init"](0x8eb44a87, 0x68581511), new A["init"](0xdb0c2e0d, 0x64f98fa7), new A["init"](0x47b5481d, 0xbefa4fa4)]);
                },
                "_doFinalize": function () {
                    var S = g["_doFinalize"]["call"](this);
                    return (S["sigBytes"] -= 0x10),
                        S;
                }
            }));
        (p["SHA384"] = g["_createHelper"](n)),
            (p["HmacSHA384"] = g["_createHmacHelper"](n));
    })(),
    (function () {
        var c = CryptoJS,
            a = c["lib"],
            L = a["WordArray"],
            g = a["Hasher"],
            a = c["algo"],
            S = L["create"]([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x7, 0x4, 0xd, 0x1, 0xa, 0x6, 0xf, 0x3, 0xc, 0x0, 0x9, 0x5, 0x2, 0xe, 0xb, 0x8, 0x3, 0xa, 0xe, 0x4, 0x9, 0xf, 0x8, 0x1, 0x2, 0x7, 0x0, 0x6, 0xd, 0xb, 0x5, 0xc, 0x1, 0x9, 0xb, 0xa, 0x0, 0x8, 0xc, 0x4, 0xd, 0x3, 0x7, 0xf, 0xe, 0x5, 0x6, 0x2, 0x4, 0x0, 0x5, 0x9, 0x7, 0xc, 0x2, 0xa, 0xe, 0x1, 0x3, 0x8, 0xb, 0x6, 0xf, 0xd]),
            f = L["create"]([0x5, 0xe, 0x7, 0x0, 0x9, 0x2, 0xb, 0x4, 0xd, 0x6, 0xf, 0x8, 0x1, 0xa, 0x3, 0xc, 0x6, 0xb, 0x3, 0x7, 0x0, 0xd, 0x5, 0xa, 0xe, 0xf, 0x8, 0xc, 0x4, 0x9, 0x1, 0x2, 0xf, 0x5, 0x1, 0x3, 0x7, 0xe, 0x6, 0x9, 0xb, 0x8, 0xc, 0x2, 0xa, 0x0, 0x4, 0xd, 0x8, 0x6, 0x4, 0x1, 0x3, 0xb, 0xf, 0x0, 0x5, 0xc, 0x2, 0xd, 0x9, 0x7, 0xa, 0xe, 0xc, 0xf, 0xa, 0x4, 0x1, 0x5, 0x8, 0x7, 0x6, 0x2, 0xd, 0xe, 0x0, 0x3, 0x9, 0xb]),
            Y = L["create"]([0xb, 0xe, 0xf, 0xc, 0x5, 0x8, 0x7, 0x9, 0xb, 0xd, 0xe, 0xf, 0x6, 0x7, 0x9, 0x8, 0x7, 0x6, 0x8, 0xd, 0xb, 0x9, 0x7, 0xf, 0x7, 0xc, 0xf, 0x9, 0xb, 0x7, 0xd, 0xc, 0xb, 0xd, 0x6, 0x7, 0xe, 0x9, 0xd, 0xf, 0xe, 0x8, 0xd, 0x6, 0x5, 0xc, 0x7, 0x5, 0xb, 0xc, 0xe, 0xf, 0xe, 0xf, 0x9, 0x8, 0x9, 0xe, 0x5, 0x6, 0x8, 0x6, 0x5, 0xc, 0x9, 0xf, 0x5, 0xb, 0x6, 0x8, 0xd, 0xc, 0x5, 0xc, 0xd, 0xe, 0xb, 0x8, 0x5, 0x6]),
            J = L["create"]([0x8, 0x9, 0x9, 0xb, 0xd, 0xf, 0xf, 0x5, 0x7, 0x7, 0x8, 0xb, 0xe, 0xe, 0xc, 0x6, 0x9, 0xd, 0xf, 0x7, 0xc, 0x8, 0x9, 0xb, 0x7, 0x7, 0xc, 0x7, 0x6, 0xf, 0xd, 0xb, 0x9, 0x7, 0xf, 0xb, 0x8, 0x6, 0x6, 0xe, 0xc, 0xd, 0x5, 0xe, 0xd, 0xd, 0x7, 0x5, 0xf, 0x5, 0x8, 0xb, 0xe, 0xe, 0x6, 0xe, 0x6, 0x9, 0xc, 0x9, 0xc, 0x5, 0xf, 0x8, 0x8, 0x5, 0xc, 0x9, 0xc, 0x5, 0xe, 0x6, 0x8, 0xd, 0x6, 0x5, 0xf, 0xd, 0xb, 0xb]),
            b = L["create"]([0x0, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e]),
            V = L["create"]([0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x0]),
            a = (a["RIPEMD160"] = g["extend"]({
                "_doReset": function () {
                    this["_hash"] = L["create"]([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
                },
                "_doProcessBlock": function (W, R) {
                    for (var F = 0x0; 0x10 > F; F++) {
                        var E = R + F,
                            I = W[E];
                        W[E] = (((I << 0x8) | (I >>> 0x18)) & 0xff00ff) | (((I << 0x18) | (I >>> 0x8)) & 0xff00ff00);
                    }
                    var E = this["_hash"]["words"],
                        I = b["words"],
                        K = V["words"],
                        T = S["words"],
                        i = f["words"],
                        Z = Y["words"],
                        M = J["words"],
                        U,
                        H,
                        O,
                        X,
                        G,
                        N,
                        D,
                        o,
                        Q,
                        P;
                    (N = U = E[0x0]),
                        (D = H = E[0x1]),
                        (o = O = E[0x2]),
                        (Q = X = E[0x3]),
                        (P = G = E[0x4]);
                    for (var p0, F = 0x0; 0x50 > F; F += 0x1) (p0 = (U + W[R + T[F]]) | 0x0),
                        (p0 = 0x10 > F ? p0 + ((H ^ O ^ X) + I[0x0]) : 0x20 > F ? p0 + (((H & O) | (~H & X)) + I[0x1]) : 0x30 > F ? p0 + (((H | ~O) ^ X) + I[0x2]) : 0x40 > F ? p0 + (((H & X) | (O & ~X)) + I[0x3]) : p0 + ((H ^ (O | ~X)) + I[0x4])),
                        (p0 |= 0x0),
                        (p0 = (p0 << Z[F]) | (p0 >>> (0x20 - Z[F]))),
                        (p0 = (p0 + G) | 0x0),
                        (U = G),
                        (G = X),
                        (X = (O << 0xa) | (O >>> 0x16)),
                        (O = H),
                        (H = p0),
                        (p0 = (N + W[R + i[F]]) | 0x0),
                        (p0 = 0x10 > F ? p0 + ((D ^ (o | ~Q)) + K[0x0]) : 0x20 > F ? p0 + (((D & Q) | (o & ~Q)) + K[0x1]) : 0x30 > F ? p0 + (((D | ~o) ^ Q) + K[0x2]) : 0x40 > F ? p0 + (((D & o) | (~D & Q)) + K[0x3]) : p0 + ((D ^ o ^ Q) + K[0x4])),
                        (p0 |= 0x0),
                        (p0 = (p0 << M[F]) | (p0 >>> (0x20 - M[F]))),
                        (p0 = (p0 + P) | 0x0),
                        (N = P),
                        (P = Q),
                        (Q = (o << 0xa) | (o >>> 0x16)),
                        (o = D),
                        (D = p0);
                    (p0 = (E[0x1] + O + Q) | 0x0),
                        (E[0x1] = (E[0x2] + X + P) | 0x0),
                        (E[0x2] = (E[0x3] + G + N) | 0x0),
                        (E[0x3] = (E[0x4] + U + D) | 0x0),
                        (E[0x4] = (E[0x0] + H + o) | 0x0),
                        (E[0x0] = p0);
                },
                "_doFinalize": function () {
                    var W = this["_data"],
                        l = W["words"],
                        R = 0x8 * this["_nDataBytes"],
                        F = 0x8 * W["sigBytes"];
                    (l[F >>> 0x5] |= 0x80 << (0x18 - (F % 0x20))),
                        (l[(((F + 0x40) >>> 0x9) << 0x4) + 0xe] = (((R << 0x8) | (R >>> 0x18)) & 0xff00ff) | (((R << 0x18) | (R >>> 0x8)) & 0xff00ff00)),
                        (W["sigBytes"] = 0x4 * (l["length"] + 0x1)),
                        this["_process"](),
                        (W = this["_hash"]),
                        (l = W["words"]);
                    for (R = 0x0; 0x5 > R; R++) (F = l[R]),
                        (l[R] = (((F << 0x8) | (F >>> 0x18)) & 0xff00ff) | (((F << 0x18) | (F >>> 0x8)) & 0xff00ff00));
                    return W;
                },
                "clone": function () {
                    var W = g["clone"]["call"](this);
                    return ((W["_hash"] = this["_hash"]["clone"]()), W);
                }
            }));
        (c["RIPEMD160"] = g["_createHelper"](a)),
            (c["HmacRIPEMD160"] = g["_createHmacHelper"](a));
    })(Math),
    (function () {
        var p = CryptoJS,
            n = p["enc"]["Utf8"];
        p["algo"]["HMAC"] = p["lib"]["Base"]["extend"]({
            "init": function (A, L) {
                (A = this["_hasher"] = new A["init"]()),
                "string" == typeof L && (L = n["parse"](L));
                var S = A["blockSize"],
                    Y = 0x4 * S;
                L["sigBytes"] > Y && (L = A["finalize"](L)),
                    L["clamp"]();
                for (var J = (this["_oKey"] = L["clone"]()), C = (this["_iKey"] = L["clone"]()), V = J["words"], W = C["words"], l = 0x0; l < S; l++) (V[l] ^= 0x5c5c5c5c),
                    (W[l] ^= 0x36363636);
                (J["sigBytes"] = C["sigBytes"] = Y),
                    this["reset"]();
            },
            "reset": function () {
                var A = this["_hasher"];
                A["reset"](),
                    A["update"](this["_iKey"]);
            },
            "update": function (A) {
                return (this["_hasher"]["update"](A), this);
            },
            "finalize": function (A) {
                var L = this["_hasher"];
                return ((A = L["finalize"](A)), L["reset"](), L["finalize"](this["_oKey"]["clone"]()["concat"](A)));
            }
        });
    })(),
    (function () {
        var p = CryptoJS,
            n = p["lib"],
            c = n["Base"],
            A = n["WordArray"],
            n = p["algo"],
            L = n["HMAC"],
            g = (n["PBKDF2"] = c["extend"]({
                "cfg": c["extend"]({
                    "keySize": 0x4,
                    "hasher": n["SHA1"],
                    "iterations": 0x1
                }),
                "init": function (S) {
                    this["cfg"] = this["cfg"]["extend"](S);
                },
                "compute": function (S, Y) {
                    for (var J = this["cfg"], C = L["create"](J["hasher"], S), V = A["create"](), W = A["create"]([0x1]), R = V["words"], B = W["words"], F = J["keySize"], J = J["iterations"]; R["length"] < F;
                    ) {
                        var E = C["update"](Y)["finalize"](W);
                        C["reset"]();
                        for (var I = E["words"], K = I["length"], T = E, i = 0x1; i < J; i++) {
                            (T = C["finalize"](T)),
                                C["reset"]();
                            for (var Z = T["words"], w = 0x0; w < K; w++) I[w] ^= Z[w];
                        }
                        V["concat"](E),
                            B[0x0]++;
                    }
                    return (V["sigBytes"] = 0x4 * F),
                        V;
                }
            }));
        p["PBKDF2"] = function (S, f, Y) {
            return g["create"](Y)["compute"](S, f);
        };
    })();
var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    b64pad = "=";

function hex2b64(p) {
    var n, c, A = "";
    for (n = 0x0; n + 0x3 <= p["length"]; n += 0x3) {
        (c = parseInt(p["substring"](n, n + 0x3), 0x10)),
            (A += b64map["charAt"](c >> 0x6) + b64map["charAt"](c & 0x3f));
    }
    n + 0x1 == p["length"] ? ((c = parseInt(p["substring"](n, n + 0x1), 0x10)), (A += b64map["charAt"](c << 0x2))) : n + 0x2 == p["length"] && ((c = parseInt(p["substring"](n, n + 0x2), 0x10)), (A += b64map["charAt"](c >> 0x2) + b64map["charAt"]((c & 0x3) << 0x4)));
    if (b64pad) while ((A["length"] & 0x3) > 0x0) {
        A += b64pad;
    }
    return A;
}

function b64tohex(p) {
    var n = "",
        A, L = 0x0,
        g, S;
    for (A = 0x0; A < p["length"]; ++A) {
        if (p["charAt"](A) == b64pad) break;
        S = b64map["indexOf"](p["charAt"](A));
        if (S < 0x0) continue;
        L == 0x0 ? ((n += int2char(S >> 0x2)), (g = S & 0x3), (L = 0x1)) : L == 0x1 ? ((n += int2char((g << 0x2) | (S >> 0x4))), (g = S & 0xf), (L = 0x2)) : L == 0x2 ? ((n += int2char(g)), (n += int2char(S >> 0x2)), (g = S & 0x3), (L = 0x3)) : ((n += int2char((g << 0x2) | (S >> 0x4))), (n += int2char(S & 0xf)), (L = 0x0));
    }
    return L == 0x1 && (n += int2char(g << 0x2)),
        n;
}

function b64toBA(p) {
    var n = b64tohex(p),
        a,
        A = new Array();
    for (a = 0x0; 0x2 * a < n["length"]; ++a) {
        A[a] = parseInt(n["substring"](0x2 * a, 0x2 * a + 0x2), 0x10);
    }
    return A;
}

var dbits, canary = 0xdeadbeefcafe,
    j_lm = (canary & 0xffffff) == 0xefcafe;

function BigInteger(p, n, c) {
    p != null && ("number" == typeof p ? this["fromNumber"](p, n, c) : n == null && "string" != typeof p ? this["fromString"](p, 0x100) : this["fromString"](p, n));
}

function nbi() {
    return new BigInteger(null);
}

function am1(p, n, c, A, L, S) {
    while (--S >= 0x0) {
        var Y = n * this[p++] + c[A] + L;
        (L = Math["floor"](Y / 0x4000000)),
            (c[A++] = Y & 0x3ffffff);
    }
    return L;
}

function am2(n, c, A, L, S, Y) {
    var J = c & 0x7fff,
        C = c >> 0xf;
    while (--Y >= 0x0) {
        var V = this[n] & 0x7fff,
            W = this[n++] >> 0xf,
            l = C * V + W * J;
        (V = J * V + ((l & 0x7fff) << 0xf) + A[L] + (S & 0x3fffffff)),
            (S = (V >>> 0x1e) + (l >>> 0xf) + C * W + (S >>> 0x1e)),
            (A[L++] = V & 0x3fffffff);
    }
    return S;
}

function am3(n, c, A, L, S, Y) {
    var J = c & 0x3fff,
        C = c >> 0xe;
    while (--Y >= 0x0) {
        var V = this[n] & 0x3fff,
            W = this[n++] >> 0xe,
            l = C * V + W * J;
        (V = J * V + ((l & 0x3fff) << 0xe) + A[L] + S),
            (S = (V >> 0x1c) + (l >> 0xe) + C * W),
            (A[L++] = V & 0xfffffff);
    }
    return S;
}

j_lm && navigator["appName"] == "Microsoft Internet Explorer" ? ((BigInteger["prototype"]["am"] = am2), (dbits = 0x1e)) : j_lm && navigator["appName"] != "Netscape" ? ((BigInteger["prototype"]["am"] = am1), (dbits = 0x1a)) : ((BigInteger["prototype"]["am"] = am3), (dbits = 0x1c));
(BigInteger["prototype"]["DB"] = dbits),
    (BigInteger["prototype"]["DM"] = (0x1 << dbits) - 0x1),
    (BigInteger["prototype"]["DV"] = 0x1 << dbits);
var BI_FP = 0x34;
(BigInteger["prototype"]["FV"] = Math["pow"](0x2, BI_FP)),
    (BigInteger["prototype"]["F1"] = BI_FP - dbits),
    (BigInteger["prototype"]["F2"] = 0x2 * dbits - BI_FP);
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz",
    BI_RC = new Array(),
    rr,
    vv;
rr = "0" ["charCodeAt"](0x0);
for (vv = 0x0; vv <= 0x9; ++vv) {
    BI_RC[rr++] = vv;
}
rr = "a" ["charCodeAt"](0x0);
for (vv = 0xa; vv < 0x24; ++vv) {
    BI_RC[rr++] = vv;
}
rr = "A" ["charCodeAt"](0x0);
for (vv = 0xa; vv < 0x24; ++vv) {
    BI_RC[rr++] = vv;
}

function int2char(p) {
    return BI_RM["charAt"](p);
}

function intAt(p, n) {
    var c = BI_RC[p["charCodeAt"](n)];
    return c == null ? -0x1 : c;
}

function bnpCopyTo(p) {
    for (var n = this["t"] - 0x1; n >= 0x0; --n) {
        p[n] = this[n];
    }
    (p["t"] = this["t"]),
        (p["s"] = this["s"]);
}

function bnpFromInt(p) {
    (this["t"] = 0x1),
        (this["s"] = p < 0x0 ? -0x1 : 0x0),
        p > 0x0 ? (this[0x0] = p) : p < -0x1 ? (this[0x0] = p + this["DV"]) : (this["t"] = 0x0);
}

function nbv(p) {
    var n = nbi();
    return n["fromInt"](p),
        n;
}

function bnpFromString(p, n) {
    var A;
    if (n == 0x10) A = 0x4;
    else {
        if (n == 0x8) A = 0x3;
        else {
            if (n == 0x100) A = 0x8;
            else {
                if (n == 0x2) A = 0x1;
                else {
                    if (n == 0x20) A = 0x5;
                    else {
                        if (n == 0x4) A = 0x2;
                        else {
                            this["fromRadix"](p, n);
                            return;
                        }
                    }
                }
            }
        }
    }
    (this["t"] = 0x0),
        (this["s"] = 0x0);
    var L = p["length"],
        S = ![],
        Y = 0x0;
    while (--L >= 0x0) {
        var J = A == 0x8 ? p[L] & 0xff : intAt(p, L);
        if (J < 0x0) {
            p["charAt"](L) == "-" && (S = !![]);
            continue;
        }
        (S = ![]),
            Y == 0x0 ? (this[this["t"]++] = J) : Y + A > this["DB"] ? ((this[this["t"] - 0x1] |= (J & ((0x1 << (this["DB"] - Y)) - 0x1)) << Y), (this[this["t"]++] = J >> (this["DB"] - Y))) : (this[this["t"] - 0x1] |= J << Y),
            (Y += A),
        Y >= this["DB"] && (Y -= this["DB"]);
    }
    A == 0x8 && (p[0x0] & 0x80) != 0x0 && ((this["s"] = -0x1), Y > 0x0 && (this[this["t"] - 0x1] |= ((0x1 << (this["DB"] - Y)) - 0x1) << Y)),
        this["clamp"](),
    S && BigInteger["ZERO"]["subTo"](this, this);
}

function bnpClamp() {
    var p = this["s"] & this["DM"];
    while (this["t"] > 0x0 && this[this["t"] - 0x1] == p) {
        --this["t"];
    }
}

function bnToString(p) {
    if (this["s"] < 0x0) return ("-" + this["negate"]()["toString"](p));
    var n;
    if (p == 0x10) n = 0x4;
    else {
        if (p == 0x8) n = 0x3;
        else {
            if (p == 0x2) n = 0x1;
            else {
                if (p == 0x20) n = 0x5;
                else {
                    if (p == 0x4) n = 0x2;
                    else return this["toRadix"](p);
                }
            }
        }
    }
    var A = (0x1 << n) - 0x1,
        L,
        S = ![],
        Y = "",
        J = this["t"],
        b = this["DB"] - ((J * this["DB"]) % n);
    if (J-- > 0x0) {
        b < this["DB"] && (L = this[J] >> b) > 0x0 && ((S = !![]), (Y = int2char(L)));
        while (J >= 0x0) {
            b < n ? ((L = (this[J] & ((0x1 << b) - 0x1)) << (n - b)), (L |= this[--J] >> (b += this["DB"] - n))) : ((L = (this[J] >> (b -= n)) & A), b <= 0x0 && ((b += this["DB"]), --J)),
            L > 0x0 && (S = !![]),
            S && (Y += int2char(L));
        }
    }
    return S ? Y : "0";
}

function bnNegate() {
    var p = nbi();
    return BigInteger["ZERO"]["subTo"](this, p),
        p;
}

function bnAbs() {
    return this["s"] < 0x0 ? this["negate"]() : this;
}

function bnCompareTo(p) {
    var n = this["s"] - p["s"];
    if (n != 0x0) return n;
    var a = this["t"];
    n = a - p["t"];
    if (n != 0x0) return this["s"] < 0x0 ? -n : n;
    while (--a >= 0x0) {
        if ((n = this[a] - p[a]) != 0x0) return n;
    }
    return 0x0;
}

function nbits(p) {
    var n = 0x1,
        A;
    return ((A = p >>> 0x10) != 0x0 && ((p = A), (n += 0x10)), (A = p >> 0x8) != 0x0 && ((p = A), (n += 0x8)), (A = p >> 0x4) != 0x0 && ((p = A), (n += 0x4)), (A = p >> 0x2) != 0x0 && ((p = A), (n += 0x2)), (A = p >> 0x1) != 0x0 && ((p = A), (n += 0x1)), n);
}

function bnBitLength() {
    if (this["t"] <= 0x0) return 0x0;
    return (this["DB"] * (this["t"] - 0x1) + nbits(this[this["t"] - 0x1] ^ (this["s"] & this["DM"])));
}

function bnpDLShiftTo(p, n) {
    var A;
    for (A = this["t"] - 0x1; A >= 0x0; --A) {
        n[A + p] = this[A];
    }
    for (A = p - 0x1; A >= 0x0; --A) {
        n[A] = 0x0;
    }
    (n["t"] = this["t"] + p),
        (n["s"] = this["s"]);
}

function bnpDRShiftTo(p, n) {
    for (var A = p; A < this["t"]; ++A) {
        n[A - p] = this[A];
    }
    (n["t"] = Math["max"](this["t"] - p, 0x0)),
        (n["s"] = this["s"]);
}

function bnpLShiftTo(p, n) {
    var c = p % this["DB"],
        A = this["DB"] - c,
        L = (0x1 << A) - 0x1,
        S = Math["floor"](p / this["DB"]),
        Y = (this["s"] << c) & this["DM"],
        J;
    for (J = this["t"] - 0x1; J >= 0x0; --J) {
        (n[J + S + 0x1] = (this[J] >> A) | Y),
            (Y = (this[J] & L) << c);
    }
    for (J = S - 0x1; J >= 0x0; --J) {
        n[J] = 0x0;
    }
    (n[S] = Y),
        (n["t"] = this["t"] + S + 0x1),
        (n["s"] = this["s"]),
        n["clamp"]();
}

function bnpRShiftTo(p, n) {
    n["s"] = this["s"];
    var A = Math["floor"](p / this["DB"]);
    if (A >= this["t"]) {
        n["t"] = 0x0;
        return;
    }
    var L = p % this["DB"],
        S = this["DB"] - L,
        Y = (0x1 << L) - 0x1;
    n[0x0] = this[A] >> L;
    for (var J = A + 0x1; J < this["t"]; ++J) {
        (n[J - A - 0x1] |= (this[J] & Y) << S),
            (n[J - A] = this[J] >> L);
    }
    L > 0x0 && (n[this["t"] - A - 0x1] |= (this["s"] & Y) << S),
        (n["t"] = this["t"] - A),
        n["clamp"]();
}

function bnpSubTo(p, n) {
    var c = 0x0,
        a = 0x0,
        A = Math["min"](p["t"], this["t"]);
    while (c < A) {
        (a += this[c] - p[c]),
            (n[c++] = a & this["DM"]),
            (a >>= this["DB"]);
    }
    if (p["t"] < this["t"]) {
        a -= p["s"];
        while (c < this["t"]) {
            (a += this[c]),
                (n[c++] = a & this["DM"]),
                (a >>= this["DB"]);
        }
        a += this["s"];
    } else {
        a += this["s"];
        while (c < p["t"]) {
            (a -= p[c]),
                (n[c++] = a & this["DM"]),
                (a >>= this["DB"]);
        }
        a -= p["s"];
    }
    (n["s"] = a < 0x0 ? -0x1 : 0x0),
        a < -0x1 ? (n[c++] = this["DV"] + a) : a > 0x0 && (n[c++] = a),
        (n["t"] = c),
        n["clamp"]();
}

function bnpMultiplyTo(p, n) {
    var a = this["abs"](),
        A = p["abs"](),
        L = a["t"];
    n["t"] = L + A["t"];
    while (--L >= 0x0) {
        n[L] = 0x0;
    }
    for (L = 0x0; L < A["t"]; ++L) {
        n[L + a["t"]] = a["am"](0x0, A[L], n, L, 0x0, a["t"]);
    }
    (n["s"] = 0x0),
        n["clamp"](),
    this["s"] != p["s"] && BigInteger["ZERO"]["subTo"](n, n);
}

function bnpSquareTo(p) {
    var n = this["abs"](),
        c = (p["t"] = 0x2 * n["t"]);
    while (--c >= 0x0) {
        p[c] = 0x0;
    }
    for (c = 0x0; c < n["t"] - 0x1; ++c) {
        var A = n["am"](c, n[c], p, 0x2 * c, 0x0, 0x1);
        (p[c + n["t"]] += n["am"](c + 0x1, 0x2 * n[c], p, 0x2 * c + 0x1, A, n["t"] - c - 0x1)) >= n["DV"] && ((p[c + n["t"]] -= n["DV"]), (p[c + n["t"] + 0x1] = 0x1));
    }
    p["t"] > 0x0 && (p[p["t"] - 0x1] += n["am"](c, n[c], p, 0x2 * c, 0x0, 0x1)),
        (p["s"] = 0x0),
        p["clamp"]();
}

function bnpDivRemTo(L, S, Y) {
    var J = L["abs"]();
    if (J["t"] <= 0x0) return;
    var C = this["abs"]();
    if (C["t"] < J["t"]) {
        S != null && S["fromInt"](0x0);
        Y != null && this["copyTo"](Y);
        return;
    }
    Y == null && (Y = nbi());
    var V = nbi(),
        W = this["s"],
        R = L["s"],
        B = this["DB"] - nbits(J[J["t"] - 0x1]);
    B > 0x0 ? (J["lShiftTo"](B, V), C["lShiftTo"](B, Y)) : (J["copyTo"](V), C["copyTo"](Y));
    var F = V["t"],
        E = V[F - 0x1];
    if (E == 0x0) return;
    var I = E * (0x1 << this["F1"]) + (F > 0x1 ? V[F - 0x2] >> this["F2"] : 0x0),
        K = this["FV"] / I,
        T = (0x1 << this["F1"]) / I,
        i = 0x1 << this["F2"],
        e = Y["t"],
        Z = e - F,
        M = S == null ? nbi() : S;
    V["dlShiftTo"](Z, M);
    Y["compareTo"](M) >= 0x0 && ((Y[Y["t"]++] = 0x1), Y["subTo"](M, Y));
    BigInteger["ONE"]["dlShiftTo"](F, M),
        M["subTo"](V, V);
    while (V["t"] < F) {
        V[V["t"]++] = 0x0;
    }
    while (--Z >= 0x0) {
        var q = Y[--e] == E ? this["DM"] : Math["floor"](Y[e] * K + (Y[e - 0x1] + i) * T);
        if ((Y[e] += V["am"](0x0, q, Y, Z, 0x0, F)) < q) {
            V["dlShiftTo"](Z, M),
                Y["subTo"](M, Y);
            while (Y[e] < --q) {
                Y["subTo"](M, Y);
            }
        }
    }
    S != null && (Y["drShiftTo"](F, S), W != R && BigInteger["ZERO"]["subTo"](S, S)),
        (Y["t"] = F),
        Y["clamp"](),
    B > 0x0 && Y["rShiftTo"](B, Y),
    W < 0x0 && BigInteger["ZERO"]["subTo"](Y, Y);
}

function bnMod(p) {
    var n = nbi();
    return (this["abs"]()["divRemTo"](p, null, n), this["s"] < 0x0 && n["compareTo"](BigInteger["ZERO"]) > 0x0 && p["subTo"](n, n), n);
}

function Classic(p) {
    this["m"] = p;
}

function cConvert(p) {
    return p["s"] < 0x0 || p["compareTo"](this["m"]) >= 0x0 ? p["mod"](this["m"]) : p;
}

function cRevert(p) {
    return p;
}

function cReduce(p) {
    p["divRemTo"](this["m"], null, p);
}

function cMulTo(p, n, A) {
    p["multiplyTo"](n, A),
        this["reduce"](A);
}

function cSqrTo(p, n) {
    p["squareTo"](n),
        this["reduce"](n);
}

(Classic["prototype"]["convert"] = cConvert),
    (Classic["prototype"]["revert"] = cRevert),
    (Classic["prototype"]["reduce"] = cReduce),
    (Classic["prototype"]["mulTo"] = cMulTo),
    (Classic["prototype"]["sqrTo"] = cSqrTo);

function bnpInvDigit() {
    if (this["t"] < 0x1) return 0x0;
    var p = this[0x0];
    if ((p & 0x1) == 0x0) return 0x0;
    var n = p & 0x3;
    return ((n = (n * (0x2 - (p & 0xf) * n)) & 0xf), (n = (n * (0x2 - (p & 0xff) * n)) & 0xff), (n = (n * (0x2 - (((p & 0xffff) * n) & 0xffff))) & 0xffff), (n = (n * (0x2 - ((p * n) % this["DV"]))) % this["DV"]), n > 0x0 ? this["DV"] - n : -n);
}

function Montgomery(p) {
    (this["m"] = p),
        (this["mp"] = p["invDigit"]()),
        (this["mpl"] = this["mp"] & 0x7fff),
        (this["mph"] = this["mp"] >> 0xf),
        (this["um"] = (0x1 << (p["DB"] - 0xf)) - 0x1),
        (this["mt2"] = 0x2 * p["t"]);
}

function montConvert(p) {
    var n = nbi();
    return (p["abs"]()["dlShiftTo"](this["m"]["t"], n), n["divRemTo"](this["m"], null, n), p["s"] < 0x0 && n["compareTo"](BigInteger["ZERO"]) > 0x0 && this["m"]["subTo"](n, n), n);
}

function montRevert(p) {
    var n = nbi();
    return (p["copyTo"](n), this["reduce"](n), n);
}

function montReduce(p) {
    while (p["t"] <= this["mt2"]) {
        p[p["t"]++] = 0x0;
    }
    for (var n = 0x0; n < this["m"]["t"]; ++n) {
        var A = p[n] & 0x7fff,
            L = (A * this["mpl"] + (((A * this["mph"] + (p[n] >> 0xf) * this["mpl"]) & this["um"]) << 0xf)) & p["DM"];
        (A = n + this["m"]["t"]),
            (p[A] += this["m"]["am"](0x0, L, p, n, 0x0, this["m"]["t"]));
        while (p[A] >= p["DV"]) {
            (p[A] -= p["DV"]),
                p[++A]++;
        }
    }
    p["clamp"](),
        p["drShiftTo"](this["m"]["t"], p),
    p["compareTo"](this["m"]) >= 0x0 && p["subTo"](this["m"], p);
}

function montSqrTo(p, n) {
    p["squareTo"](n),
        this["reduce"](n);
}

function montMulTo(p, n, A) {
    p["multiplyTo"](n, A),
        this["reduce"](A);
}

(Montgomery["prototype"]["convert"] = montConvert),
    (Montgomery["prototype"]["revert"] = montRevert),
    (Montgomery["prototype"]["reduce"] = montReduce),
    (Montgomery["prototype"]["mulTo"] = montMulTo),
    (Montgomery["prototype"]["sqrTo"] = montSqrTo);

function bnpIsEven() {
    return (this["t"] > 0x0 ? this[0x0] & 0x1 : this["s"]) == 0x0;
}

function bnpExp(p, n) {
    if (p > 0xffffffff || p < 0x1) return BigInteger["ONE"];
    var A = nbi(),
        L = nbi(),
        g = n["convert"](this),
        S = nbits(p) - 0x1;
    g["copyTo"](A);
    while (--S >= 0x0) {
        n["sqrTo"](A, L);
        if ((p & (0x1 << S)) > 0x0) n["mulTo"](L, g, A);
        else {
            var Y = A;
            (A = L),
                (L = Y);
        }
    }
    return n["revert"](A);
}

function bnModPowInt(p, n) {
    var A;
    return (p < 0x100 || n["isEven"]() ? (A = new Classic(n)) : (A = new Montgomery(n)), this["exp"](p, A));
}

(BigInteger["prototype"]["copyTo"] = bnpCopyTo),
    (BigInteger["prototype"]["fromInt"] = bnpFromInt),
    (BigInteger["prototype"]["fromString"] = bnpFromString),
    (BigInteger["prototype"]["clamp"] = bnpClamp),
    (BigInteger["prototype"]["dlShiftTo"] = bnpDLShiftTo),
    (BigInteger["prototype"]["drShiftTo"] = bnpDRShiftTo),
    (BigInteger["prototype"]["lShiftTo"] = bnpLShiftTo),
    (BigInteger["prototype"]["rShiftTo"] = bnpRShiftTo),
    (BigInteger["prototype"]["subTo"] = bnpSubTo),
    (BigInteger["prototype"]["multiplyTo"] = bnpMultiplyTo),
    (BigInteger["prototype"]["squareTo"] = bnpSquareTo),
    (BigInteger["prototype"]["divRemTo"] = bnpDivRemTo),
    (BigInteger["prototype"]["invDigit"] = bnpInvDigit),
    (BigInteger["prototype"]["isEven"] = bnpIsEven),
    (BigInteger["prototype"]["exp"] = bnpExp),
    (BigInteger["prototype"]["toString"] = bnToString),
    (BigInteger["prototype"]["negate"] = bnNegate),
    (BigInteger["prototype"]["abs"] = bnAbs),
    (BigInteger["prototype"]["compareTo"] = bnCompareTo),
    (BigInteger["prototype"]["bitLength"] = bnBitLength),
    (BigInteger["prototype"]["mod"] = bnMod),
    (BigInteger["prototype"]["modPowInt"] = bnModPowInt),
    (BigInteger["ZERO"] = nbv(0x0)),
    (BigInteger["ONE"] = nbv(0x1));

function bnClone() {
    var p = nbi();
    return this["copyTo"](p),
        p;
}

function bnIntValue() {
    if (this["s"] < 0x0) {
        if (this["t"] == 0x1) return this[0x0] - this["DV"];
        else {
            if (this["t"] == 0x0) return -0x1;
        }
    } else {
        if (this["t"] == 0x1) return this[0x0];
        else {
            if (this["t"] == 0x0) return 0x0;
        }
    }
    return (((this[0x1] & ((0x1 << (0x20 - this["DB"])) - 0x1)) << this["DB"]) | this[0x0]);
}

function bnByteValue() {
    return this["t"] == 0x0 ? this["s"] : (this[0x0] << 0x18) >> 0x18;
}

function bnShortValue() {
    return this["t"] == 0x0 ? this["s"] : (this[0x0] << 0x10) >> 0x10;
}

function bnpChunkSize(p) {
    return Math["floor"]((Math["LN2"] * this["DB"]) / Math["log"](p));
}

function bnSigNum() {
    return this["s"] < 0x0 ? -0x1 : this["t"] <= 0x0 || (this["t"] == 0x1 && this[0x0] <= 0x0) ? 0x0 : 0x1;
}

function bnpToRadix(p) {
    p == null && (p = 0xa);
    if (this["signum"]() == 0x0 || p < 0x2 || p > 0x24) return "0";
    var n = this["chunkSize"](p),
        a = Math["pow"](p, n),
        A = nbv(a),
        L = nbi(),
        S = nbi(),
        Y = "";
    this["divRemTo"](A, L, S);
    while (L["signum"]() > 0x0) {
        (Y = (a + S["intValue"]())["toString"](p)["substr"](0x1) + Y),
            L["divRemTo"](A, L, S);
    }
    return (S["intValue"]()["toString"](p) + Y);
}

function bnpFromRadix(p, n) {
    this["fromInt"](0x0);
    n == null && (n = 0xa);
    var A = this["chunkSize"](n),
        L = Math["pow"](n, A),
        S = ![],
        Y = 0x0,
        J = 0x0;
    for (var b = 0x0; b < p["length"]; ++b) {
        var C = intAt(p, b);
        if (C < 0x0) {
            p["charAt"](b) == "-" && this["signum"]() == 0x0 && (S = !![]);
            continue;
        }
        (J = n * J + C),
        ++Y >= A && (this["dMultiply"](L), this["dAddOffset"](J, 0x0), (Y = 0x0), (J = 0x0));
    }
    Y > 0x0 && (this["dMultiply"](Math["pow"](n, Y)), this["dAddOffset"](J, 0x0)),
    S && BigInteger["ZERO"]["subTo"](this, this);
}

function bnpFromNumber(p, n, c) {
    if ("number" == typeof n) {
        if (p < 0x2) this["fromInt"](0x1);
        else {
            this["fromNumber"](p, c);
            !this["testBit"](p - 0x1) && this["bitwiseTo"](BigInteger["ONE"]["shiftLeft"](p - 0x1), op_or, this);
            this["isEven"]() && this["dAddOffset"](0x1, 0x0);
            while (!this["isProbablePrime"](n)) {
                this["dAddOffset"](0x2, 0x0),
                this["bitLength"]() > p && this["subTo"](BigInteger["ONE"]["shiftLeft"](p - 0x1), this);
            }
        }
    } else {
        var a = new Array(),
            A = p & 0x7;
        (a["length"] = (p >> 0x3) + 0x1),
            n["nextBytes"](a),
            A > 0x0 ? (a[0x0] &= (0x1 << A) - 0x1) : (a[0x0] = 0x0),
            this["fromString"](a, 0x100);
    }
}

function bnToByteArray() {
    var p = this["t"],
        n = new Array();
    n[0x0] = this["s"];
    var A = this["DB"] - ((p * this["DB"]) % 0x8),
        L,
        g = 0x0;
    if (p-- > 0x0) {
        A < this["DB"] && (L = this[p] >> A) != (this["s"] & this["DM"]) >> A && (n[g++] = L | (this["s"] << (this["DB"] - A)));
        while (p >= 0x0) {
            A < 0x8 ? ((L = (this[p] & ((0x1 << A) - 0x1)) << (0x8 - A)), (L |= this[--p] >> (A += this["DB"] - 0x8))) : ((L = (this[p] >> (A -= 0x8)) & 0xff), A <= 0x0 && ((A += this["DB"]), --p)),
            (L & 0x80) != 0x0 && (L |= -0x100),
            g == 0x0 && (this["s"] & 0x80) != (L & 0x80) && ++g,
            (g > 0x0 || L != this["s"]) && (n[g++] = L);
        }
    }
    return n;
}

function bnEquals(p) {
    return this["compareTo"](p) == 0x0;
}

function bnMin(p) {
    return this["compareTo"](p) < 0x0 ? this : p;
}

function bnMax(p) {
    return this["compareTo"](p) > 0x0 ? this : p;
}

function bnpBitwiseTo(p, n, a) {
    var A, L, S = Math["min"](p["t"], this["t"]);
    for (A = 0x0; A < S; ++A) {
        a[A] = n(this[A], p[A]);
    }
    if (p["t"] < this["t"]) {
        L = p["s"] & this["DM"];
        for (A = S; A < this["t"]; ++A) {
            a[A] = n(this[A], L);
        }
        a["t"] = this["t"];
    } else {
        L = this["s"] & this["DM"];
        for (A = S; A < p["t"]; ++A) {
            a[A] = n(L, p[A]);
        }
        a["t"] = p["t"];
    }
    (a["s"] = n(this["s"], p["s"])),
        a["clamp"]();
}

function op_and(p, n) {
    return p & n;
}

function bnAnd(p) {
    var n = nbi();
    return this["bitwiseTo"](p, op_and, n),
        n;
}

function op_or(p, n) {
    return p | n;
}

function bnOr(p) {
    var n = nbi();
    return this["bitwiseTo"](p, op_or, n),
        n;
}

function op_xor(p, n) {
    return p ^ n;
}

function bnXor(p) {
    var n = nbi();
    return this["bitwiseTo"](p, op_xor, n),
        n;
}

function op_andnot(p, n) {
    return p & ~n;
}

function bnAndNot(p) {
    var n = nbi();
    return this["bitwiseTo"](p, op_andnot, n),
        n;
}

function bnNot() {
    var p = nbi();
    for (var n = 0x0; n < this["t"]; ++n) {
        p[n] = this["DM"] & ~this[n];
    }
    return (p["t"] = this["t"]),
        (p["s"] = ~this["s"]),
        p;
}

function bnShiftLeft(p) {
    var n = nbi();
    return (p < 0x0 ? this["rShiftTo"](-p, n) : this["lShiftTo"](p, n), n);
}

function bnShiftRight(p) {
    var n = nbi();
    return (p < 0x0 ? this["lShiftTo"](-p, n) : this["rShiftTo"](p, n), n);
}

function lbit(p) {
    if (p == 0x0) return -0x1;
    var n = 0x0;
    return ((p & 0xffff) == 0x0 && ((p >>= 0x10), (n += 0x10)), (p & 0xff) == 0x0 && ((p >>= 0x8), (n += 0x8)), (p & 0xf) == 0x0 && ((p >>= 0x4), (n += 0x4)), (p & 0x3) == 0x0 && ((p >>= 0x2), (n += 0x2)), (p & 0x1) == 0x0 && ++n, n);
}

function bnGetLowestSetBit() {
    for (var p = 0x0; p < this["t"]; ++p) {
        if (this[p] != 0x0) return p * this["DB"] + lbit(this[p]);
    }
    if (this["s"] < 0x0) return this["t"] * this["DB"];
    return -0x1;
}

function cbit(p) {
    var n = 0x0;
    while (p != 0x0) {
        (p &= p - 0x1),
            ++n;
    }
    return n;
}

function bnBitCount() {
    var p = 0x0,
        n = this["s"] & this["DM"];
    for (var A = 0x0; A < this["t"]; ++A) {
        p += cbit(this[A] ^ n);
    }
    return p;
}

function bnTestBit(p) {
    var n = Math["floor"](p / this["DB"]);
    if (n >= this["t"]) return this["s"] != 0x0;
    return (this[n] & (0x1 << p % this["DB"])) != 0x0;
}

function bnpChangeBit(p, n) {
    var A = BigInteger["ONE"]["shiftLeft"](p);
    return this["bitwiseTo"](A, n, A),
        A;
}

function bnSetBit(p) {
    return this["changeBit"](p, op_or);
}

function bnClearBit(p) {
    return this["changeBit"](p, op_andnot);
}

function bnFlipBit(p) {
    return this["changeBit"](p, op_xor);
}

function bnpAddTo(p, n) {
    var c = 0x0,
        a = 0x0,
        A = Math["min"](p["t"], this["t"]);
    while (c < A) {
        (a += this[c] + p[c]),
            (n[c++] = a & this["DM"]),
            (a >>= this["DB"]);
    }
    if (p["t"] < this["t"]) {
        a += p["s"];
        while (c < this["t"]) {
            (a += this[c]),
                (n[c++] = a & this["DM"]),
                (a >>= this["DB"]);
        }
        a += this["s"];
    } else {
        a += this["s"];
        while (c < p["t"]) {
            (a += p[c]),
                (n[c++] = a & this["DM"]),
                (a >>= this["DB"]);
        }
        a += p["s"];
    }
    (n["s"] = a < 0x0 ? -0x1 : 0x0),
        a > 0x0 ? (n[c++] = a) : a < -0x1 && (n[c++] = this["DV"] + a),
        (n["t"] = c),
        n["clamp"]();
}

function bnAdd(p) {
    var n = nbi();
    return this["addTo"](p, n),
        n;
}

function bnSubtract(p) {
    var n = nbi();
    return this["subTo"](p, n),
        n;
}

function bnMultiply(p) {
    var n = nbi();
    return this["multiplyTo"](p, n),
        n;
}

function bnSquare() {
    var p = nbi();
    return this["squareTo"](p),
        p;
}

function bnDivide(p) {
    var n = nbi();
    return this["divRemTo"](p, n, null),
        n;
}

function bnRemainder(p) {
    var n = nbi();
    return this["divRemTo"](p, null, n),
        n;
}

function bnDivideAndRemainder(p) {
    var n = nbi(),
        a = nbi();
    return this["divRemTo"](p, n, a),
        new Array(n, a);
}

function bnpDMultiply(p) {
    (this[this["t"]] = this["am"](0x0, p - 0x1, this, 0x0, 0x0, this["t"])),
        ++this["t"],
        this["clamp"]();
}

function bnpDAddOffset(p, n) {
    if (p == 0x0) return;
    while (this["t"] <= n) {
        this[this["t"]++] = 0x0;
    }
    this[n] += p;
    while (this[n] >= this["DV"]) {
        (this[n] -= this["DV"]),
        ++n >= this["t"] && (this[this["t"]++] = 0x0),
            ++this[n];
    }
}

function NullExp() {
}

function nNop(p) {
    return p;
}

function nMulTo(p, n, A) {
    p["multiplyTo"](n, A);
}

function nSqrTo(p, n) {
    p["squareTo"](n);
}

(NullExp["prototype"]["convert"] = nNop),
    (NullExp["prototype"]["revert"] = nNop),
    (NullExp["prototype"]["mulTo"] = nMulTo),
    (NullExp["prototype"]["sqrTo"] = nSqrTo);

function bnPow(p) {
    return this["exp"](p, new NullExp());
}

function bnpMultiplyLowerTo(p, n, a) {
    var A = Math["min"](this["t"] + p["t"], n);
    (a["s"] = 0x0),
        (a["t"] = A);
    while (A > 0x0) {
        a[--A] = 0x0;
    }
    var L;
    for (L = a["t"] - this["t"]; A < L; ++A) {
        a[A + this["t"]] = this["am"](0x0, p[A], a, A, 0x0, this["t"]);
    }
    for (L = Math["min"](p["t"], n); A < L; ++A) {
        this["am"](0x0, p[A], a, A, 0x0, n - A);
    }
    a["clamp"]();
}

function bnpMultiplyUpperTo(p, n, a) {
    --n;
    var A = (a["t"] = this["t"] + p["t"] - n);
    a["s"] = 0x0;
    while (--A >= 0x0) {
        a[A] = 0x0;
    }
    for (A = Math["max"](n - this["t"], 0x0); A < p["t"]; ++A) {
        a[this["t"] + A - n] = this["am"](n - A, p[A], a, 0x0, 0x0, this["t"] + A - n);
    }
    a["clamp"](),
        a["drShiftTo"](0x1, a);
}

function Barrett(p) {
    (this["r2"] = nbi()),
        (this["q3"] = nbi()),
        BigInteger["ONE"]["dlShiftTo"](0x2 * p["t"], this["r2"]),
        (this["mu"] = this["r2"]["divide"](p)),
        (this["m"] = p);
}

function barrettConvert(p) {
    if (p["s"] < 0x0 || p["t"] > 0x2 * this["m"]["t"]) return p["mod"](this["m"]);
    else {
        if (p["compareTo"](this["m"]) < 0x0) return p;
        else {
            var n = nbi();
            return (p["copyTo"](n), this["reduce"](n), n);
        }
    }
}

function barrettRevert(p) {
    return p;
}

function barrettReduce(p) {
    p["drShiftTo"](this["m"]["t"] - 0x1, this["r2"]);
    p["t"] > this["m"]["t"] + 0x1 && ((p["t"] = this["m"]["t"] + 0x1), p["clamp"]());
    this["mu"]["multiplyUpperTo"](this["r2"], this["m"]["t"] + 0x1, this["q3"]),
        this["m"]["multiplyLowerTo"](this["q3"], this["m"]["t"] + 0x1, this["r2"]);
    while (p["compareTo"](this["r2"]) < 0x0) {
        p["dAddOffset"](0x1, this["m"]["t"] + 0x1);
    }
    p["subTo"](this["r2"], p);
    while (p["compareTo"](this["m"]) >= 0x0) {
        p["subTo"](this["m"], p);
    }
}

function barrettSqrTo(p, n) {
    p["squareTo"](n),
        this["reduce"](n);
}

function barrettMulTo(p, n, A) {
    p["multiplyTo"](n, A),
        this["reduce"](A);
}

(Barrett["prototype"]["convert"] = barrettConvert),
    (Barrett["prototype"]["revert"] = barrettRevert),
    (Barrett["prototype"]["reduce"] = barrettReduce),
    (Barrett["prototype"]["mulTo"] = barrettMulTo),
    (Barrett["prototype"]["sqrTo"] = barrettSqrTo);

function bnModPow(n, L) {
    var g = n["bitLength"](),
        S,
        Y = nbv(0x1),
        J;
    if (g <= 0x0) return Y;
    else g < 0x12 ? (S = 0x1) : g < 0x30 ? (S = 0x3) : g < 0x90 ? (S = 0x4) : g < 0x300 ? (S = 0x5) : (S = 0x6);
    g < 0x8 ? (J = new Classic(L)) : L["isEven"]() ? (J = new Barrett(L)) : (J = new Montgomery(L));
    var C = new Array(),
        V = 0x3,
        W = S - 0x1,
        R = (0x1 << S) - 0x1;
    C[0x1] = J["convert"](this);
    if (S > 0x1) {
        var B = nbi();
        J["sqrTo"](C[0x1], B);
        while (V <= R) {
            (C[V] = nbi()),
                J["mulTo"](B, C[V - 0x2], C[V]),
                (V += 0x2);
        }
    }
    var F = n["t"] - 0x1,
        E,
        I = !![],
        K = nbi(),
        T;
    g = nbits(n[F]) - 0x1;
    while (F >= 0x0) {
        g >= W ? (E = (n[F] >> (g - W)) & R) : ((E = (n[F] & ((0x1 << (g + 0x1)) - 0x1)) << (W - g)), F > 0x0 && (E |= n[F - 0x1] >> (this["DB"] + g - W)));
        V = S;
        while ((E & 0x1) == 0x0) {
            (E >>= 0x1),
                --V;
        }
        (g -= V) < 0x0 && ((g += this["DB"]), --F);
        if (I) C[E]["copyTo"](Y),
            (I = ![]);
        else {
            while (V > 0x1) {
                J["sqrTo"](Y, K),
                    J["sqrTo"](K, Y),
                    (V -= 0x2);
            }
            V > 0x0 ? J["sqrTo"](Y, K) : ((T = Y), (Y = K), (K = T)),
                J["mulTo"](K, C[E], Y);
        }
        while (F >= 0x0 && (n[F] & (0x1 << g)) == 0x0) {
            J["sqrTo"](Y, K),
                (T = Y),
                (Y = K),
                (K = T),
            --g < 0x0 && ((g = this["DB"] - 0x1), --F);
        }
    }
    return J["revert"](Y);
}

function bnGCD(p) {
    var n = this["s"] < 0x0 ? this["negate"]() : this["clone"](),
        a = p["s"] < 0x0 ? p["negate"]() : p["clone"]();
    if (n["compareTo"](a) < 0x0) {
        var A = n;
        (n = a),
            (a = A);
    }
    var L = n["getLowestSetBit"](),
        g = a["getLowestSetBit"]();
    if (g < 0x0) return n;
    L < g && (g = L);
    g > 0x0 && (n["rShiftTo"](g, n), a["rShiftTo"](g, a));
    while (n["signum"]() > 0x0) {
        (L = n["getLowestSetBit"]()) > 0x0 && n["rShiftTo"](L, n),
        (L = a["getLowestSetBit"]()) > 0x0 && a["rShiftTo"](L, a),
            n["compareTo"](a) >= 0x0 ? (n["subTo"](a, n), n["rShiftTo"](0x1, n)) : (a["subTo"](n, a), a["rShiftTo"](0x1, a));
    }
    return g > 0x0 && a["lShiftTo"](g, a),
        a;
}

function bnpModInt(p) {
    if (p <= 0x0) return 0x0;
    var n = this["DV"] % p,
        A = this["s"] < 0x0 ? p - 0x1 : 0x0;
    if (this["t"] > 0x0) {
        if (n == 0x0) A = this[0x0] % p;
        else for (var L = this["t"] - 0x1; L >= 0x0; --L) {
            A = (n * A + this[L]) % p;
        }
    }
    return A;
}

function bnModInverse(p) {
    var n = p["isEven"]();
    if ((this["isEven"]() && n) || p["signum"]() == 0x0) return BigInteger["ZERO"];
    var c = p["clone"](),
        a = this["clone"](),
        A = nbv(0x1),
        L = nbv(0x0),
        S = nbv(0x0),
        Y = nbv(0x1);
    while (c["signum"]() != 0x0) {
        while (c["isEven"]()) {
            c["rShiftTo"](0x1, c),
                n ? ((!A["isEven"]() || !L["isEven"]()) && (A["addTo"](this, A), L["subTo"](p, L)), A["rShiftTo"](0x1, A)) : !L["isEven"]() && L["subTo"](p, L),
                L["rShiftTo"](0x1, L);
        }
        while (a["isEven"]()) {
            a["rShiftTo"](0x1, a),
                n ? ((!S["isEven"]() || !Y["isEven"]()) && (S["addTo"](this, S), Y["subTo"](p, Y)), S["rShiftTo"](0x1, S)) : !Y["isEven"]() && Y["subTo"](p, Y),
                Y["rShiftTo"](0x1, Y);
        }
        c["compareTo"](a) >= 0x0 ? (c["subTo"](a, c), n && A["subTo"](S, A), L["subTo"](Y, L)) : (a["subTo"](c, a), n && S["subTo"](A, S), Y["subTo"](L, Y));
    }
    if (a["compareTo"](BigInteger["ONE"]) != 0x0) return BigInteger["ZERO"];
    if (Y["compareTo"](p) >= 0x0) return Y["subtract"](p);
    if (Y["signum"]() < 0x0) Y["addTo"](p, Y);
    else return Y;
    return Y["signum"]() < 0x0 ? Y["add"](p) : Y;
}

var lowprimes = [0x2, 0x3, 0x5, 0x7, 0xb, 0xd, 0x11, 0x13, 0x17, 0x1d, 0x1f, 0x25, 0x29, 0x2b, 0x2f, 0x35, 0x3b, 0x3d, 0x43, 0x47, 0x49, 0x4f, 0x53, 0x59, 0x61, 0x65, 0x67, 0x6b, 0x6d, 0x71, 0x7f, 0x83, 0x89, 0x8b, 0x95, 0x97, 0x9d, 0xa3, 0xa7, 0xad, 0xb3, 0xb5, 0xbf, 0xc1, 0xc5, 0xc7, 0xd3, 0xdf, 0xe3, 0xe5, 0xe9, 0xef, 0xf1, 0xfb, 0x101, 0x107, 0x10d, 0x10f, 0x115, 0x119, 0x11b, 0x125, 0x133, 0x137, 0x139, 0x13d, 0x14b, 0x151, 0x15b, 0x15d, 0x161, 0x167, 0x16f, 0x175, 0x17b, 0x17f, 0x185, 0x18d, 0x191, 0x199, 0x1a3, 0x1a5, 0x1af, 0x1b1, 0x1b7, 0x1bb, 0x1c1, 0x1c9, 0x1cd, 0x1cf, 0x1d3, 0x1df, 0x1e7, 0x1eb, 0x1f3, 0x1f7, 0x1fd, 0x209, 0x20b, 0x21d, 0x223, 0x22d, 0x233, 0x239, 0x23b, 0x241, 0x24b, 0x251, 0x257, 0x259, 0x25f, 0x265, 0x269, 0x26b, 0x277, 0x281, 0x283, 0x287, 0x28d, 0x293, 0x295, 0x2a1, 0x2a5, 0x2ab, 0x2b3, 0x2bd, 0x2c5, 0x2cf, 0x2d7, 0x2dd, 0x2e3, 0x2e7, 0x2ef, 0x2f5, 0x2f9, 0x301, 0x305, 0x313, 0x31d, 0x329, 0x32b, 0x335, 0x337, 0x33b, 0x33d, 0x347, 0x355, 0x359, 0x35b, 0x35f, 0x36d, 0x371, 0x373, 0x377, 0x38b, 0x38f, 0x397, 0x3a1, 0x3a9, 0x3ad, 0x3b3, 0x3b9, 0x3c7, 0x3cb, 0x3d1, 0x3d7, 0x3df, 0x3e5],
    lplim = (0x1 << 0x1a) / lowprimes[lowprimes["length"] - 0x1];

function bnIsProbablePrime(p) {
    var n, A = this["abs"]();
    if (A["t"] == 0x1 && A[0x0] <= lowprimes[lowprimes["length"] - 0x1]) {
        for (n = 0x0; n < lowprimes["length"]; ++n) {
            if (A[0x0] == lowprimes[n]) return !![];
        }
        return ![];
    }
    if (A["isEven"]()) return ![];
    n = 0x1;
    while (n < lowprimes["length"]) {
        var L = lowprimes[n],
            g = n + 0x1;
        while (g < lowprimes["length"] && L < lplim) {
            L *= lowprimes[g++];
        }
        L = A["modInt"](L);
        while (n < g) {
            if (L % lowprimes[n++] == 0x0) return ![];
        }
    }
    return A["millerRabin"](p);
}

function bnpMillerRabin(p) {
    var n = this["subtract"](BigInteger["ONE"]),
        a = n["getLowestSetBit"]();
    if (a <= 0x0) return ![];
    var A = n["shiftRight"](a);
    p = (p + 0x1) >> 0x1;
    p > lowprimes["length"] && (p = lowprimes["length"]);
    var L = nbi();
    for (var S = 0x0; S < p; ++S) {
        L["fromInt"](lowprimes[Math["floor"](Math["random"]() * lowprimes["length"])]);
        var Y = L["modPow"](A, this);
        if (Y["compareTo"](BigInteger["ONE"]) != 0x0 && Y["compareTo"](n) != 0x0) {
            var J = 0x1;
            while (J++ < a && Y["compareTo"](n) != 0x0) {
                Y = Y["modPowInt"](0x2, this);
                if (Y["compareTo"](BigInteger["ONE"]) == 0x0) return ![];
            }
            if (Y["compareTo"](n) != 0x0) return ![];
        }
    }
    return !![];
}

(BigInteger["prototype"]["chunkSize"] = bnpChunkSize),
    (BigInteger["prototype"]["toRadix"] = bnpToRadix),
    (BigInteger["prototype"]["fromRadix"] = bnpFromRadix),
    (BigInteger["prototype"]["fromNumber"] = bnpFromNumber),
    (BigInteger["prototype"]["bitwiseTo"] = bnpBitwiseTo),
    (BigInteger["prototype"]["changeBit"] = bnpChangeBit),
    (BigInteger["prototype"]["addTo"] = bnpAddTo),
    (BigInteger["prototype"]["dMultiply"] = bnpDMultiply),
    (BigInteger["prototype"]["dAddOffset"] = bnpDAddOffset),
    (BigInteger["prototype"]["multiplyLowerTo"] = bnpMultiplyLowerTo),
    (BigInteger["prototype"]["multiplyUpperTo"] = bnpMultiplyUpperTo),
    (BigInteger["prototype"]["modInt"] = bnpModInt),
    (BigInteger["prototype"]["millerRabin"] = bnpMillerRabin),
    (BigInteger["prototype"]["clone"] = bnClone),
    (BigInteger["prototype"]["intValue"] = bnIntValue),
    (BigInteger["prototype"]["byteValue"] = bnByteValue),
    (BigInteger["prototype"]["shortValue"] = bnShortValue),
    (BigInteger["prototype"]["signum"] = bnSigNum),
    (BigInteger["prototype"]["toByteArray"] = bnToByteArray),
    (BigInteger["prototype"]["equals"] = bnEquals),
    (BigInteger["prototype"]["min"] = bnMin),
    (BigInteger["prototype"]["max"] = bnMax),
    (BigInteger["prototype"]["and"] = bnAnd),
    (BigInteger["prototype"]["or"] = bnOr),
    (BigInteger["prototype"]["xor"] = bnXor),
    (BigInteger["prototype"]["andNot"] = bnAndNot),
    (BigInteger["prototype"]["not"] = bnNot),
    (BigInteger["prototype"]["shiftLeft"] = bnShiftLeft),
    (BigInteger["prototype"]["shiftRight"] = bnShiftRight),
    (BigInteger["prototype"]["getLowestSetBit"] = bnGetLowestSetBit),
    (BigInteger["prototype"]["bitCount"] = bnBitCount),
    (BigInteger["prototype"]["testBit"] = bnTestBit),
    (BigInteger["prototype"]["setBit"] = bnSetBit),
    (BigInteger["prototype"]["clearBit"] = bnClearBit),
    (BigInteger["prototype"]["flipBit"] = bnFlipBit),
    (BigInteger["prototype"]["add"] = bnAdd),
    (BigInteger["prototype"]["subtract"] = bnSubtract),
    (BigInteger["prototype"]["multiply"] = bnMultiply),
    (BigInteger["prototype"]["divide"] = bnDivide),
    (BigInteger["prototype"]["remainder"] = bnRemainder),
    (BigInteger["prototype"]["divideAndRemainder"] = bnDivideAndRemainder),
    (BigInteger["prototype"]["modPow"] = bnModPow),
    (BigInteger["prototype"]["modInverse"] = bnModInverse),
    (BigInteger["prototype"]["pow"] = bnPow),
    (BigInteger["prototype"]["gcd"] = bnGCD),
    (BigInteger["prototype"]["isProbablePrime"] = bnIsProbablePrime),
    (BigInteger["prototype"]["square"] = bnSquare);

function Arcfour() {
    (this["i"] = 0x0),
        (this["j"] = 0x0),
        (this["S"] = new Array());
}

function ARC4init(p) {
    var n, A, L;
    for (n = 0x0; n < 0x100; ++n) {
        this["S"][n] = n;
    }
    A = 0x0;
    for (n = 0x0; n < 0x100; ++n) {
        (A = (A + this["S"][n] + p[n % p["length"]]) & 0xff),
            (L = this["S"][n]),
            (this["S"][n] = this["S"][A]),
            (this["S"][A] = L);
    }
    (this["i"] = 0x0),
        (this["j"] = 0x0);
}

function ARC4next() {
    var p;
    return ((this["i"] = (this["i"] + 0x1) & 0xff), (this["j"] = (this["j"] + this["S"][this["i"]]) & 0xff), (p = this["S"][this["i"]]), (this["S"][this["i"]] = this["S"][this["j"]]), (this["S"][this["j"]] = p), this["S"][(p + this["S"][this["i"]]) & 0xff]);
}

(Arcfour["prototype"]["init"] = ARC4init),
    (Arcfour["prototype"]["next"] = ARC4next);

function prng_newstate() {
    return new Arcfour();
}

var rng_psize = 0x100,
    rng_state, rng_pool, rng_pptr;

function rng_seed_int(p) {
    (rng_pool[rng_pptr++] ^= p & 0xff),
        (rng_pool[rng_pptr++] ^= (p >> 0x8) & 0xff),
        (rng_pool[rng_pptr++] ^= (p >> 0x10) & 0xff),
        (rng_pool[rng_pptr++] ^= (p >> 0x18) & 0xff),
    rng_pptr >= rng_psize && (rng_pptr -= rng_psize);
}

function rng_seed_time() {
    rng_seed_int(new Date()["getTime"]());
}

if (rng_pool == null) {
    (rng_pool = new Array()),
        (rng_pptr = 0x0);
    var t;
    if (window !== undefined && (window["crypto"] !== undefined || window["msCrypto"] !== undefined)) {
        var crypto = window["crypto"] || window["msCrypto"];
        if (crypto["getRandomValues"]) {
            var ua = new Uint8Array(0x20);
            crypto["getRandomValues"](ua);
            for (t = 0x0; t < 0x20; ++t) {
                rng_pool[rng_pptr++] = ua[t];
            }
        } else {
            if (navigator["appName"] == "Netscape" && navigator["appVersion"] < "5") {
                var z = window["crypto"]["random"](0x20);
                for (t = 0x0; t < z["length"]; ++t) {
                    rng_pool[rng_pptr++] = z["charCodeAt"](t) & 0xff;
                }
            }
        }
    }
    while (rng_pptr < rng_psize) {
        (t = Math["floor"](0x10000 * Math["random"]())),
            (rng_pool[rng_pptr++] = t >>> 0x8),
            (rng_pool[rng_pptr++] = t & 0xff);
    }
    (rng_pptr = 0x0),
        rng_seed_time();
}

function rng_get_byte() {
    if (rng_state == null) {
        rng_seed_time(),
            (rng_state = prng_newstate()),
            rng_state["init"](rng_pool);
        for (rng_pptr = 0x0; rng_pptr < rng_pool["length"]; ++rng_pptr) {
            rng_pool[rng_pptr] = 0x0;
        }
        rng_pptr = 0x0;
    }
    return rng_state["next"]();
}

function rng_get_bytes(p) {
    var n;
    for (n = 0x0; n < p["length"]; ++n) {
        p[n] = rng_get_byte();
    }
}

function SecureRandom() {
}

SecureRandom["prototype"]["nextBytes"] = rng_get_bytes;

function parseBigInt(p, n) {
    return new BigInteger(p, n);
}

function linebrk(p, n) {
    var A = "",
        L = 0x0;
    while (L + n < p["length"]) {
        (A += p["substring"](L, L + n) + "
        "),
        (L += n);
    }
    return (A + p["substring"](L, p["length"]));
}

function byte2Hex(p) {
    return p < 0x10 ? "0" + p["toString"](0x10) : p["toString"](0x10);
}

function pkcs1pad2(p, n) {
    if (n < p["length"] + 0xb) {
        throw "Message too long for RSA";
        return null;
    }
    var c = new Array(),
        A = p["length"] - 0x1;
    while (A >= 0x0 && n > 0x0) {
        var L = p["charCodeAt"](A--);
        L < 0x80 ? (c[--n] = L) : L > 0x7f && L < 0x800 ? ((c[--n] = (L & 0x3f) | 0x80), (c[--n] = (L >> 0x6) | 0xc0)) : ((c[--n] = (L & 0x3f) | 0x80), (c[--n] = ((L >> 0x6) & 0x3f) | 0x80), (c[--n] = (L >> 0xc) | 0xe0));
    }
    c[--n] = 0x0;
    var S = new SecureRandom(),
        Y = new Array();
    while (n > 0x2) {
        Y[0x0] = 0x0;
        while (Y[0x0] == 0x0) {
            S["nextBytes"](Y);
        }
        c[--n] = Y[0x0];
    }
    return (c[--n] = 0x2),
        (c[--n] = 0x0),
        new BigInteger(c);
}

function oaep_mgf1_arr(p, n, A) {
    var L = "",
        g = 0x0;
    while (L["length"] < n) {
        (L += A(String["fromCharCode"]["apply"](String, p["concat"]([(g & 0xff000000) >> 0x18, (g & 0xff0000) >> 0x10, (g & 0xff00) >> 0x8, g & 0xff])))),
            (g += 0x1);
    }
    return L;
}

function oaep_pad(n, A, L, S) {
    var Y = KJUR["crypto"]["MessageDigest"],
        J = KJUR["crypto"]["Util"],
        C = null;
    !L && (L = "sha1");
    typeof L === "string" && ((C = Y["getCanonicalAlgName"](L)), (S = Y["getHashLength"](C)), (L = function (K) {
        return hextorstr(J["hashHex"](rstrtohex(K), C));
    }));
    if (n["length"] + 0x2 * S + 0x2 > A) throw "Message too long for RSA";
    var V = "",
        W;
    for (W = 0x0; W < A - n["length"] - 0x2 * S - 0x2; W += 0x1) {
        V += "";
    }
    var R = L("") + V + "" + n,
        B = new Array(S);
    new SecureRandom()["nextBytes"](B);
    var F = oaep_mgf1_arr(B, R["length"], L),
        E = [];
    for (W = 0x0; W < R["length"]; W += 0x1) {
        E[W] = R["charCodeAt"](W) ^ F["charCodeAt"](W);
    }
    var s = oaep_mgf1_arr(E, B["length"], L),
        I = [0x0];
    for (W = 0x0; W < B["length"]; W += 0x1) {
        I[W + 0x1] = B[W] ^ s["charCodeAt"](W);
    }
    return new BigInteger(I["concat"](E));
}

function RSAKey() {
    (this["n"] = null),
        (this["e"] = 0x0),
        (this["d"] = null),
        (this["p"] = null),
        (this["q"] = null),
        (this["dmp1"] = null),
        (this["dmq1"] = null),
        (this["coeff"] = null);
}

function RSASetPublic(p, n) {
    (this["isPublic"] = !![]),
        (this["isPrivate"] = ![]);
    if (typeof p !== "string") (this["n"] = p),
        (this["e"] = n);
    else {
        if (p != null && n != null && p["length"] > 0x0 && n["length"] > 0x0) (this["n"] = parseBigInt(p, 0x10)),
            (this["e"] = parseInt(n, 0x10));
        else throw "Invalid RSA public key";
    }
}

function RSADoPublic(p) {
    return p["modPowInt"](this["e"], this["n"]);
}

function RSAEncrypt(p) {
    var n = pkcs1pad2(p, (this["n"]["bitLength"]() + 0x7) >> 0x3);
    if (n == null) return null;
    var c = this["doPublic"](n);
    if (c == null) return null;
    var A = c["toString"](0x10);
    return (A["length"] & 0x1) == 0x0 ? A : "0" + A;
}

function RSAEncryptOAEP(p, n, c) {
    var A = oaep_pad(p, (this["n"]["bitLength"]() + 0x7) >> 0x3, n, c);
    if (A == null) return null;
    var L = this["doPublic"](A);
    if (L == null) return null;
    var S = L["toString"](0x10);
    return (S["length"] & 0x1) == 0x0 ? S : "0" + S;
}

(RSAKey["prototype"]["doPublic"] = RSADoPublic),
    (RSAKey["prototype"]["setPublic"] = RSASetPublic),
    (RSAKey["prototype"]["encrypt"] = RSAEncrypt),
    (RSAKey["prototype"]["encryptOAEP"] = RSAEncryptOAEP),
    (RSAKey["prototype"]["type"] = "RSA");

function pkcs1unpad2(p, n) {
    var c = p["toByteArray"](),
        A = 0x0;
    while (A < c["length"] && c[A] == 0x0) {
        ++A;
    }
    if (c["length"] - A != n - 0x1 || c[A] != 0x2) return null;
    ++A;
    while (c[A] != 0x0) {
        if (++A >= c["length"]) return null;
    }
    var L = "";
    while (++A < c["length"]) {
        var S = c[A] & 0xff;
        S < 0x80 ? (L += String["fromCharCode"](S)) : S > 0xbf && S < 0xe0 ? ((L += String["fromCharCode"](((S & 0x1f) << 0x6) | (c[A + 0x1] & 0x3f))), ++A) : ((L += String["fromCharCode"](((S & 0xf) << 0xc) | ((c[A + 0x1] & 0x3f) << 0x6) | (c[A + 0x2] & 0x3f))), (A += 0x2));
    }
    return L;
}

function oaep_mgf1_str(p, n, A) {
    var L = "",
        g = 0x0;
    while (L["length"] < n) {
        (L += A(p + String["fromCharCode"]["apply"](String, [(g & 0xff000000) >> 0x18, (g & 0xff0000) >> 0x10, (g & 0xff00) >> 0x8, g & 0xff]))),
            (g += 0x1);
    }
    return L;
}

function oaep_unpad(n, A, L, S) {
    var Y = KJUR["crypto"]["MessageDigest"],
        J = KJUR["crypto"]["Util"],
        C = null;
    !L && (L = "sha1");
    typeof L === "string" && ((C = Y["getCanonicalAlgName"](L)), (S = Y["getHashLength"](C)), (L = function (i) {
        return hextorstr(J["hashHex"](rstrtohex(i), C));
    }));
    n = n["toByteArray"]();
    var V;
    for (V = 0x0; V < n["length"]; V += 0x1) {
        n[V] &= 0xff;
    }
    while (n["length"] < A) {
        n["unshift"](0x0);
    }
    n = String["fromCharCode"]["apply"](String, n);
    if (n["length"] < 0x2 * S + 0x2) throw "Cipher too short";
    var W = n["substr"](0x1, S),
        R = n["substr"](S + 0x1),
        B = oaep_mgf1_str(R, S, L),
        F = [],
        V;
    for (V = 0x0; V < W["length"]; V += 0x1) {
        F[V] = W["charCodeAt"](V) ^ B["charCodeAt"](V);
    }
    var E = oaep_mgf1_str(String["fromCharCode"]["apply"](String, F), n["length"] - S, L),
        I = [];
    for (V = 0x0; V < R["length"]; V += 0x1) {
        I[V] = R["charCodeAt"](V) ^ E["charCodeAt"](V);
    }
    I = String["fromCharCode"]["apply"](String, I);
    if (I["substr"](0x0, S) !== L("")) throw "Hash mismatch";
    I = I["substr"](S);
    var K = I["indexOf"](""),
        T = K != -0x1 ? I["substr"](0x0, K)["lastIndexOf"]("") : -0x1;
    if (T + 0x1 != K) throw "Malformed data";
    return I["substr"](K + 0x1);
}

function RSASetPrivate(p, n, A) {
    this["isPrivate"] = !![];
    if (typeof p !== "string") (this["n"] = p),
        (this["e"] = n),
        (this["d"] = A);
    else {
        if (p != null && n != null && p["length"] > 0x0 && n["length"] > 0x0) (this["n"] = parseBigInt(p, 0x10)),
            (this["e"] = parseInt(n, 0x10)),
            (this["d"] = parseBigInt(A, 0x10));
        else throw "Invalid RSA private key";
    }
}

function RSASetPrivateEx(p, n, A, L, S, Y, J, C) {
    (this["isPrivate"] = !![]),
        (this["isPublic"] = ![]);
    if (p == null) throw "RSASetPrivateEx N == null";
    if (n == null) throw "RSASetPrivateEx E == null";
    if (p["length"] == 0x0) throw "RSASetPrivateEx N.length == 0";
    if (n["length"] == 0x0) throw "RSASetPrivateEx E.length == 0";
    if (p != null && n != null && p["length"] > 0x0 && n["length"] > 0x0) (this["n"] = parseBigInt(p, 0x10)),
        (this["e"] = parseInt(n, 0x10)),
        (this["d"] = parseBigInt(A, 0x10)),
        (this["p"] = parseBigInt(L, 0x10)),
        (this["q"] = parseBigInt(S, 0x10)),
        (this["dmp1"] = parseBigInt(Y, 0x10)),
        (this["dmq1"] = parseBigInt(J, 0x10)),
        (this["coeff"] = parseBigInt(C, 0x10));
    else throw "Invalid RSA private key in RSASetPrivateEx";
}

function RSAGenerate(p, n) {
    var A = new SecureRandom(),
        L = p >> 0x1;
    this["e"] = parseInt(n, 0x10);
    var S = new BigInteger(n, 0x10);
    for (; ;) {
        for (; ;) {
            this["p"] = new BigInteger(p - L, 0x1, A);
            if (this["p"]["subtract"](BigInteger["ONE"])["gcd"](S)["compareTo"](BigInteger["ONE"]) == 0x0 && this["p"]["isProbablePrime"](0xa)) break;
        }
        for (; ;) {
            this["q"] = new BigInteger(L, 0x1, A);
            if (this["q"]["subtract"](BigInteger["ONE"])["gcd"](S)["compareTo"](BigInteger["ONE"]) == 0x0 && this["q"]["isProbablePrime"](0xa)) break;
        }
        if (this["p"]["compareTo"](this["q"]) <= 0x0) {
            var Y = this["p"];
            (this["p"] = this["q"]),
                (this["q"] = Y);
        }
        var J = this["p"]["subtract"](BigInteger["ONE"]),
            C = this["q"]["subtract"](BigInteger["ONE"]),
            V = J["multiply"](C);
        if (V["gcd"](S)["compareTo"](BigInteger["ONE"]) == 0x0) {
            this["n"] = this["p"]["multiply"](this["q"]);
            if (this["n"]["bitLength"]() == p) {
                (this["d"] = S["modInverse"](V)),
                    (this["dmp1"] = this["d"]["mod"](J)),
                    (this["dmq1"] = this["d"]["mod"](C)),
                    (this["coeff"] = this["q"]["modInverse"](this["p"]));
                break;
            }
        }
    }
    this["isPrivate"] = !![];
}

function RSADoPrivate(p) {
    if (this["p"] == null || this["q"] == null) return p["modPow"](this["d"], this["n"]);
    var n = p["mod"](this["p"])["modPow"](this["dmp1"], this["p"]),
        A = p["mod"](this["q"])["modPow"](this["dmq1"], this["q"]);
    while (n["compareTo"](A) < 0x0) {
        n = n["add"](this["p"]);
    }
    return n["subtract"](A)["multiply"](this["coeff"])["mod"](this["p"])["multiply"](this["q"])["add"](A);
}

function RSADecrypt(p) {
    if (p["length"] != Math["ceil"](this["n"]["bitLength"]() / 0x4)) throw new Error("wrong ctext length");
    var n = parseBigInt(p, 0x10),
        c = this["doPrivate"](n);
    if (c == null) return null;
    return pkcs1unpad2(c, (this["n"]["bitLength"]() + 0x7) >> 0x3);
}

function RSADecryptOAEP(p, n, c) {
    if (p["length"] != Math["ceil"](this["n"]["bitLength"]() / 0x4)) throw new Error("wrong ctext length");
    var A = parseBigInt(p, 0x10),
        L = this["doPrivate"](A);
    if (L == null) return null;
    return oaep_unpad(L, (this["n"]["bitLength"]() + 0x7) >> 0x3, n, c);
}

(RSAKey["prototype"]["doPrivate"] = RSADoPrivate),
    (RSAKey["prototype"]["setPrivate"] = RSASetPrivate),
    (RSAKey["prototype"]["setPrivateEx"] = RSASetPrivateEx),
    (RSAKey["prototype"]["generate"] = RSAGenerate),
    (RSAKey["prototype"]["decrypt"] = RSADecrypt),
    (RSAKey["prototype"]["decryptOAEP"] = RSADecryptOAEP);

function ECFieldElementFp(p, n) {
    (this["x"] = n),
        (this["q"] = p);
}

function feFpEquals(p) {
    if (p == this) return !![];
    return (this["q"]["equals"](p["q"]) && this["x"]["equals"](p["x"]));
}

function feFpToBigInteger() {
    return this["x"];
}

function feFpNegate() {
    return new ECFieldElementFp(this["q"], this["x"]["negate"]()["mod"](this["q"]));
}

function feFpAdd(p) {
    return new ECFieldElementFp(this["q"], this["x"]["add"](p["toBigInteger"]())["mod"](this["q"]));
}

function feFpSubtract(p) {
    return new ECFieldElementFp(this["q"], this["x"]["subtract"](p["toBigInteger"]())["mod"](this["q"]));
}

function feFpMultiply(p) {
    return new ECFieldElementFp(this["q"], this["x"]["multiply"](p["toBigInteger"]())["mod"](this["q"]));
}

function feFpSquare() {
    return new ECFieldElementFp(this["q"], this["x"]["square"]()["mod"](this["q"]));
}

function feFpDivide(p) {
    return new ECFieldElementFp(this["q"], this["x"]["multiply"](p["toBigInteger"]()["modInverse"](this["q"]))["mod"](this["q"]));
}

(ECFieldElementFp["prototype"]["equals"] = feFpEquals),
    (ECFieldElementFp["prototype"]["toBigInteger"] = feFpToBigInteger),
    (ECFieldElementFp["prototype"]["negate"] = feFpNegate),
    (ECFieldElementFp["prototype"]["add"] = feFpAdd),
    (ECFieldElementFp["prototype"]["subtract"] = feFpSubtract),
    (ECFieldElementFp["prototype"]["multiply"] = feFpMultiply),
    (ECFieldElementFp["prototype"]["square"] = feFpSquare),
    (ECFieldElementFp["prototype"]["divide"] = feFpDivide);

function ECPointFp(p, n, A, L) {
    (this["curve"] = p),
        (this["x"] = n),
        (this["y"] = A),
        L == null ? (this["z"] = BigInteger["ONE"]) : (this["z"] = L),
        (this["zinv"] = null);
}

function pointFpGetX() {
    return (this["zinv"] == null && (this["zinv"] = this["z"]["modInverse"](this["curve"]["q"])), this["curve"]["fromBigInteger"](this["x"]["toBigInteger"]()["multiply"](this["zinv"])["mod"](this["curve"]["q"])));
}

function pointFpGetY() {
    return (this["zinv"] == null && (this["zinv"] = this["z"]["modInverse"](this["curve"]["q"])), this["curve"]["fromBigInteger"](this["y"]["toBigInteger"]()["multiply"](this["zinv"])["mod"](this["curve"]["q"])));
}

function pointFpEquals(p) {
    if (p == this) return !![];
    if (this["isInfinity"]()) return p["isInfinity"]();
    if (p["isInfinity"]()) return this["isInfinity"]();
    var n, A;
    n = p["y"]["toBigInteger"]()["multiply"](this["z"])["subtract"](this["y"]["toBigInteger"]()["multiply"](p["z"]))["mod"](this["curve"]["q"]);
    if (!n["equals"](BigInteger["ZERO"])) return ![];
    return ((A = p["x"]["toBigInteger"]()["multiply"](this["z"])["subtract"](this["x"]["toBigInteger"]()["multiply"](p["z"]))["mod"](this["curve"]["q"])), A["equals"](BigInteger["ZERO"]));
}

function pointFpIsInfinity() {
    if (this["x"] == null && this["y"] == null) return !![];
    return (this["z"]["equals"](BigInteger["ZERO"]) && !this["y"]["toBigInteger"]()["equals"](BigInteger["ZERO"]));
}

function pointFpNegate() {
    return new ECPointFp(this["curve"], this["x"], this["y"]["negate"](), this["z"]);
}

function pointFpAdd(A) {
    if (this["isInfinity"]()) return A;
    if (A["isInfinity"]()) return this;
    var L = A["y"]["toBigInteger"]()["multiply"](this["z"])["subtract"](this["y"]["toBigInteger"]()["multiply"](A["z"]))["mod"](this["curve"]["q"]),
        S = A["x"]["toBigInteger"]()["multiply"](this["z"])["subtract"](this["x"]["toBigInteger"]()["multiply"](A["z"]))["mod"](this["curve"]["q"]);
    if (BigInteger["ZERO"]["equals"](S)) {
        if (BigInteger["ZERO"]["equals"](L)) return this["twice"]();
        return this["curve"]["getInfinity"]();
    }
    var Y = new BigInteger("3"),
        J = this["x"]["toBigInteger"](),
        b = this["y"]["toBigInteger"](),
        C = A["x"]["toBigInteger"](),
        V = A["y"]["toBigInteger"](),
        W = S["square"](),
        R = W["multiply"](S),
        B = J["multiply"](W),
        F = L["square"]()["multiply"](this["z"]),
        E = F["subtract"](B["shiftLeft"](0x1))["multiply"](A["z"])["subtract"](R)["multiply"](S)["mod"](this["curve"]["q"]),
        s = B["multiply"](Y)["multiply"](L)["subtract"](b["multiply"](R))["subtract"](F["multiply"](L))["multiply"](A["z"])["add"](L["multiply"](R))["mod"](this["curve"]["q"]),
        I = R["multiply"](this["z"])["multiply"](A["z"])["mod"](this["curve"]["q"]);
    return new ECPointFp(this["curve"], this["curve"]["fromBigInteger"](E), this["curve"]["fromBigInteger"](s), I);
}

function pointFpTwice() {
    if (this["isInfinity"]()) return this;
    if (this["y"]["toBigInteger"]()["signum"]() == 0x0) return this["curve"]["getInfinity"]();
    var p = new BigInteger("3"),
        n = this["x"]["toBigInteger"](),
        a = this["y"]["toBigInteger"](),
        A = a["multiply"](this["z"]),
        L = A["multiply"](a)["mod"](this["curve"]["q"]),
        S = this["curve"]["a"]["toBigInteger"](),
        Y = n["square"]()["multiply"](p);
    !BigInteger["ZERO"]["equals"](S) && (Y = Y["add"](this["z"]["square"]()["multiply"](S)));
    Y = Y["mod"](this["curve"]["q"]);
    var J = Y["square"]()["subtract"](n["shiftLeft"](0x3)["multiply"](L))["shiftLeft"](0x1)["multiply"](A)["mod"](this["curve"]["q"]),
        C = Y["multiply"](p)["multiply"](n)["subtract"](L["shiftLeft"](0x1))["shiftLeft"](0x2)["multiply"](L)["subtract"](Y["square"]()["multiply"](Y))["mod"](this["curve"]["q"]),
        V = A["square"]()["multiply"](A)["shiftLeft"](0x3)["mod"](this["curve"]["q"]);
    return new ECPointFp(this["curve"], this["curve"]["fromBigInteger"](J), this["curve"]["fromBigInteger"](C), V);
}

function pointFpMultiply(A) {
    if (this["isInfinity"]()) return this;
    if (A["signum"]() == 0x0) return this["curve"]["getInfinity"]();
    var L = A,
        S = L["multiply"](new BigInteger("3")),
        Y = this["negate"](),
        J = this,
        C = this["curve"]["q"]["subtract"](A),
        V = C["multiply"](new BigInteger("3")),
        W = new ECPointFp(this["curve"], this["x"], this["y"]),
        R = W["negate"](),
        B;
    for (B = S["bitLength"]() - 0x2; B > 0x0; --B) {
        J = J["twice"]();
        var F = S["testBit"](B),
            E = L["testBit"](B);
        F != E && (J = J["add"](F ? this : Y));
    }
    for (B = V["bitLength"]() - 0x2; B > 0x0; --B) {
        W = W["twice"]();
        var s = V["testBit"](B),
            I = C["testBit"](B);
        s != I && (W = W["add"](s ? W : R));
    }
    return J;
}

function pointFpMultiplyTwo(p, n, A) {
    var L;
    p["bitLength"]() > A["bitLength"]() ? (L = p["bitLength"]() - 0x1) : (L = A["bitLength"]() - 0x1);
    var g = this["curve"]["getInfinity"](),
        S = this["add"](n);
    while (L >= 0x0) {
        (g = g["twice"]()),
            p["testBit"](L) ? A["testBit"](L) ? (g = g["add"](S)) : (g = g["add"](this)) : A["testBit"](L) && (g = g["add"](n)),
            --L;
    }
    return g;
}

(ECPointFp["prototype"]["getX"] = pointFpGetX),
    (ECPointFp["prototype"]["getY"] = pointFpGetY),
    (ECPointFp["prototype"]["equals"] = pointFpEquals),
    (ECPointFp["prototype"]["isInfinity"] = pointFpIsInfinity),
    (ECPointFp["prototype"]["negate"] = pointFpNegate),
    (ECPointFp["prototype"]["add"] = pointFpAdd),
    (ECPointFp["prototype"]["twice"] = pointFpTwice),
    (ECPointFp["prototype"]["multiply"] = pointFpMultiply),
    (ECPointFp["prototype"]["multiplyTwo"] = pointFpMultiplyTwo);

function ECCurveFp(p, n, a) {
    (this["q"] = p),
        (this["a"] = this["fromBigInteger"](n)),
        (this["b"] = this["fromBigInteger"](a)),
        (this["infinity"] = new ECPointFp(this, null, null));
}

function curveFpGetQ() {
    return this["q"];
}

function curveFpGetA() {
    return this["a"];
}

function curveFpGetB() {
    return this["b"];
}

function curveFpEquals(p) {
    if (p == this) return !![];
    return (this["q"]["equals"](p["q"]) && this["a"]["equals"](p["a"]) && this["b"]["equals"](p["b"]));
}

function curveFpGetInfinity() {
    return this["infinity"];
}

function curveFpFromBigInteger(p) {
    return new ECFieldElementFp(this["q"], p);
}

function curveFpDecodePointHex(p) {
    switch (parseInt(p["substr"](0x0, 0x2), 0x10)) {
        case 0x0:
            return this["infinity"];
        case 0x2:
        case 0x3:
            return null;
        case 0x4:
        case 0x6:
        case 0x7:
            var n = (p["length"] - 0x2) / 0x2,
                A = p["substr"](0x2, n),
                L = p["substr"](n + 0x2, n);
            return new ECPointFp(this, this["fromBigInteger"](new BigInteger(A, 0x10)), this["fromBigInteger"](new BigInteger(L, 0x10)));
        default:
            return null;
    }
}

(ECCurveFp["prototype"]["getQ"] = curveFpGetQ),
    (ECCurveFp["prototype"]["getA"] = curveFpGetA),
    (ECCurveFp["prototype"]["getB"] = curveFpGetB),
    (ECCurveFp["prototype"]["equals"] = curveFpEquals),
    (ECCurveFp["prototype"]["getInfinity"] = curveFpGetInfinity),
    (ECCurveFp["prototype"]["fromBigInteger"] = curveFpFromBigInteger),
    (ECCurveFp["prototype"]["decodePointHex"] = curveFpDecodePointHex),
    (ECFieldElementFp["prototype"]["getByteLength"] = function () {
        return Math["floor"]((this["toBigInteger"]()["bitLength"]() + 0x7) / 0x8);
    }),
    (ECPointFp["prototype"]["getEncoded"] = function (p) {
        var n = function (S, Y) {
                var J = S["toByteArrayUnsigned"]();
                if (Y < J["length"]) J = J["slice"](J["length"] - Y);
                else while (Y > J["length"]) {
                    J["unshift"](0x0);
                }
                return J;
            },
            A = this["getX"]()["toBigInteger"](),
            L = this["getY"]()["toBigInteger"](),
            g = n(A, 0x20);
        return (p ? L["isEven"]() ? g["unshift"](0x2) : g["unshift"](0x3) : (g["unshift"](0x4), (g = g["concat"](n(L, 0x20)))), g);
    }),
    (ECPointFp["decodeFrom"] = function (p, n) {
        var A = n[0x0],
            L = n["length"] - 0x1,
            S = n["slice"](0x1, 0x1 + L / 0x2),
            Y = n["slice"](0x1 + L / 0x2, 0x1 + L);
        S["unshift"](0x0),
            Y["unshift"](0x0);
        var J = new BigInteger(S),
            C = new BigInteger(Y);
        return new ECPointFp(p, p["fromBigInteger"](J), p["fromBigInteger"](C));
    }),
    (ECPointFp["decodeFromHex"] = function (p, n) {
        var A = n["substr"](0x0, 0x2),
            L = n["length"] - 0x2,
            S = n["substr"](0x2, L / 0x2),
            Y = n["substr"](0x2 + L / 0x2, L / 0x2),
            J = new BigInteger(S, 0x10),
            C = new BigInteger(Y, 0x10);
        return new ECPointFp(p, p["fromBigInteger"](J), p["fromBigInteger"](C));
    }),
    (ECPointFp["prototype"]["add2D"] = function (p) {
        if (this["isInfinity"]()) return p;
        if (p["isInfinity"]()) return this;
        if (this["x"]["equals"](p["x"])) {
            if (this["y"]["equals"](p["y"])) return this["twice"]();
            return this["curve"]["getInfinity"]();
        }
        var n = p["x"]["subtract"](this["x"]),
            A = p["y"]["subtract"](this["y"]),
            L = A["divide"](n),
            S = L["square"]()["subtract"](this["x"])["subtract"](p["x"]),
            Y = L["multiply"](this["x"]["subtract"](S))["subtract"](this["y"]);
        return new ECPointFp(this["curve"], S, Y);
    }),
    (ECPointFp["prototype"]["twice2D"] = function () {
        if (this["isInfinity"]()) return this;
        if (this["y"]["toBigInteger"]()["signum"]() == 0x0) return this["curve"]["getInfinity"]();
        var p = this["curve"]["fromBigInteger"](BigInteger["valueOf"](0x2)),
            n = this["curve"]["fromBigInteger"](BigInteger["valueOf"](0x3)),
            A = this["x"]["square"]()["multiply"](n)["add"](this["curve"]["a"])["divide"](this["y"]["multiply"](p)),
            L = A["square"]()["subtract"](this["x"]["multiply"](p)),
            g = A["multiply"](this["x"]["subtract"](L))["subtract"](this["y"]);
        return new ECPointFp(this["curve"], L, g);
    }),
    (ECPointFp["prototype"]["multiply2D"] = function (p) {
        if (this["isInfinity"]()) return this;
        if (p["signum"]() == 0x0) return this["curve"]["getInfinity"]();
        var n = p,
            A = n["multiply"](new BigInteger("3")),
            L = this["negate"](),
            S = this,
            Y;
        for (Y = A["bitLength"]() - 0x2; Y > 0x0; --Y) {
            S = S["twice"]();
            var J = A["testBit"](Y),
                C = n["testBit"](Y);
            J != C && (S = S["add2D"](J ? this : L));
        }
        return S;
    }),
    (ECPointFp["prototype"]["isOnCurve"] = function () {
        var p = this["getX"]()["toBigInteger"](),
            n = this["getY"]()["toBigInteger"](),
            a = this["curve"]["getA"]()["toBigInteger"](),
            A = this["curve"]["getB"]()["toBigInteger"](),
            L = this["curve"]["getQ"](),
            S = n["multiply"](n)["mod"](L),
            Y = p["multiply"](p)["multiply"](p)["add"](a["multiply"](p))["add"](A)["mod"](L);
        return S["equals"](Y);
    }),
    (ECPointFp["prototype"]["toString"] = function () {
        return ("(" + this["getX"]()["toBigInteger"]()["toString"]() + "," + this["getY"]()["toBigInteger"]()["toString"]() + ")");
    }),
    (ECPointFp["prototype"]["validate"] = function () {
        var p = this["curve"]["getQ"]();
        if (this["isInfinity"]()) throw new Error("Point is at infinity.");
        var n = this["getX"]()["toBigInteger"](),
            A = this["getY"]()["toBigInteger"]();
        if (n["compareTo"](BigInteger["ONE"]) < 0x0 || n["compareTo"](p["subtract"](BigInteger["ONE"])) > 0x0) throw new Error("x coordinate out of bounds");
        if (A["compareTo"](BigInteger["ONE"]) < 0x0 || A["compareTo"](p["subtract"](BigInteger["ONE"])) > 0x0) throw new Error("y coordinate out of bounds");
        if (!this["isOnCurve"]()) throw new Error("Point is not on the curve.");
        if (this["multiply"](p)["isInfinity"]()) throw new Error("Point is not a scalar multiple of G.");
        return !![];
    });
var jsonParse = (function () {
    var p = "(?:-?\b(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\b)",
        n = "(?:[^\0-\x08\x0a-\x1f"\\] | \\ (? : ["/\\bfnrt]|u[0-9A-Fa-f]{4}))", A = "(?:"" + n + " * ")", L = new RegExp("(?:false|true|null|[\{\}\[\]]|" + p + "|" + A + ")", "g"), S = new RegExp("\\(?:([^u])|u(.{4}))", "g"), Y = {
        """: """,
        "/": "/",
        "\": "\",
    "b "
:
    "",
        "f "
:
    "",
        "n "
:
    "",
        "r "
:
    "",
        "t "
:
    ""
}
    ;

    function J(R, B, F) {
        return B
            ? Y[B]
            : String["fromCharCode "](
                parseInt(F, 0x10)
            );
    }

    var C = new String(""),
        V = "\",
    W = {
        " {
        ": Object,
        " [": Array
    },
        l = Object["hasOwnProperty "];
    return function (R, B) {
        var F = R["match "](L),
            E,
            I = F[0x0],
            K = ![];
        " {
        " === I ? (E = {}) : " [" === I ? (E = []) : ((E = []), (K = !![]));
        var T,
            Z = [E];
        for (var M = 0x1 - K, U = F["length "]; M < U; ++M) {
            I = F[M];
            var H;
            switch (I["charCodeAt "](0x0)) {
                default:
                    (H = Z[0x0]),
                        (H[T || H["length "]] = +I),
                        (T = void 0x0);
                    break;
                case 0x22:
                    I = I["substring "](
                        0x1,
                        I["length "] - 0x1
                    );
                    I["indexOf "](V) !== -0x1 &&
                    (I = I["replace "](S, J));
                    H = Z[0x0];
                    if (!T) {
                        if (H instanceof Array) T = H["length "];
                        else {
                            T = I || C;
                            break;
                        }
                    }
                    (H[T] = I), (T = void 0x0);
                    break;
                case 0x5b:
                    (H = Z[0x0]),
                        Z["unshift "](
                            (H[T || H["length "]] = [])
                        ),
                        (T = void 0x0);
                    break;
                case 0x5d:
                    Z["shift "]();
                    break;
                case 0x66:
                    (H = Z[0x0]),
                        (H[T || H["length "]] = ![]),
                        (T = void 0x0);
                    break;
                case 0x6e:
                    (H = Z[0x0]),
                        (H[T || H["length "]] = null),
                        (T = void 0x0);
                    break;
                case 0x74:
                    (H = Z[0x0]),
                        (H[T || H["length "]] = !![]),
                        (T = void 0x0);
                    break;
                case 0x7b:
                    (H = Z[0x0]),
                        Z["unshift "](
                            (H[T || H["length "]] = {})
                        ),
                        (T = void 0x0);
                    break;
                case 0x7d:
                    Z["shift "]();
                    break;
            }
        }
        if (K) {
            if (Z["length "] !== 0x1) throw new Error();
            E = E[0x0];
        } else {
            if (Z["length "]) throw new Error();
        }
        if (B) {
            var O = function (X, G) {
                var N = X[G];
                if (N && typeof N === "object ") {
                    var Q = null;
                    for (var P in N) {
                        if (l["call "](N, P) && N !== X) {
                            var p0 = O(N, P);
                            p0 !== void 0x0
                                ? (N[P] = p0)
                                : (!Q && (Q = []), Q["push "](P));
                        }
                    }
                    if (Q)
                        for (var p1 = Q["length "]; --p1 >= 0x0;) {
                            delete N[Q[p1]];
                        }
                }
                return B["call "](X, G, N);
            };
            E = O(
                {
                    "": E
                },
                ""
            );
        }
        return E;
    };
})();
(typeof KJUR == "undefined " || !KJUR) && (KJUR = {});
(typeof KJUR["asn1 "] == "undefined " ||
    !KJUR["asn1 "]) &&
(KJUR["asn1 "] = {});
(KJUR["asn1 "]["ASN1Util "] =
    new (function () {
        (this["integerToByteHex "] =
            function (p) {
                var n = p["toString "](0x10);
                return (
                    n["length "] % 0x2 == 0x1 && (n = "0 " + n), n
                );
            }),
            (this[
                "bigIntToMinTwosComplementsHex "
                ] = function (p) {
                var n = p["toString "](0x10);
                if (n["substr "](0x0, 0x1) != " - ")
                    n["length "] % 0x2 == 0x1
                        ? (n = "0 " + n)
                        : !n["match "](/^[0-7]/) && (n = "00 " + n);
                else {
                    var A = n["substr "](0x1),
                        L = A["length "];
                    L % 0x2 == 0x1
                        ? (L += 0x1)
                        : !n["match "](/^[0-7]/) && (L += 0x2);
                    var S = "";
                    for (var Y = 0x0; Y < L; Y++) {
                        S += "f ";
                    }
                    var J = new BigInteger(S, 0x10),
                        C = J["xor "](p)["add "](
                            BigInteger["ONE "]
                        );
                    n = C["toString "](0x10)[
                        "replace "
                        ](/^-/, "");
                }
                return n;
            }),
            (this[
                "getPEMStringFromHex "
                ] = function (p, n) {
                return hextopem(p, n);
            }),
            (this["newObject "] = function (a) {
                var L = KJUR,
                    S = L["asn1 "],
                    Y = S["DERBoolean "],
                    J = S["DERInteger "],
                    V = S["DERBitString "],
                    W = S["DEROctetString "],
                    R = S["DERNull "],
                    I =
                        S[
                            "DERObjectIdentifier "
                            ],
                    K = S["DEREnumerated "],
                    T = S["DERUTF8String "],
                    i =
                        S[
                            "DERNumericString "
                            ],
                    Z =
                        S[
                            "DERPrintableString "
                            ],
                    M =
                        S[
                            "DERTeletexString "
                            ],
                    U = S["DERIA5String "],
                    H = S["DERUTCTime "],
                    O =
                        S[
                            "DERGeneralizedTime "
                            ],
                    X = S["DERSequence "],
                    G = S["DERSet "],
                    N = S["DERTaggedObject "],
                    Q =
                        S["ASN1Util "][
                            "newObject "
                            ],
                    P = Object["keys "](a);
                if (P["length "] != 0x1)
                    throw "key of param shall be only one.";
                var p0 = P[0x0];
                if (
                    ": bool: int: bitstr: octstr: null: oid: enum: utf8str: numstr: prnstr: telstr: ia5str: utctime: gentime: seq: set: tag: "[
                        "indexOf "
                        ](": " + p0 + ": ") == -0x1
                )
                    throw (
                        "undefined key: " + p0
                    );
                if (p0 == "bool ") return new Y(a[p0]);
                if (p0 == "int ") return new J(a[p0]);
                if (p0 == "bitstr ") return new V(a[p0]);
                if (p0 == "octstr ") return new W(a[p0]);
                if (p0 == "null ") return new R(a[p0]);
                if (p0 == "oid ") return new I(a[p0]);
                if (p0 == "enum ") return new K(a[p0]);
                if (p0 == "utf8str ") return new T(a[p0]);
                if (p0 == "numstr ") return new i(a[p0]);
                if (p0 == "prnstr ") return new Z(a[p0]);
                if (p0 == "telstr ") return new M(a[p0]);
                if (p0 == "ia5str ") return new U(a[p0]);
                if (p0 == "utctime ") return new H(a[p0]);
                if (p0 == "gentime ") return new O(a[p0]);
                if (p0 == "seq ") {
                    var p1 = a[p0],
                        p2 = [];
                    for (var p3 = 0x0; p3 < p1["length "]; p3++) {
                        var p4 = Q(p1[p3]);
                        p2["push "](p4);
                    }
                    return new X({
                        "array ": p2
                    });
                }
                if (p0 == "set ") {
                    var p1 = a[p0],
                        p2 = [];
                    for (var p3 = 0x0; p3 < p1["length "]; p3++) {
                        var p4 = Q(p1[p3]);
                        p2["push "](p4);
                    }
                    return new G({
                        "array ": p2
                    });
                }
                if (p0 == "tag ") {
                    var p5 = a[p0];
                    if (
                        Object["prototype "][
                            "toString "
                            ]["call "](p5) ===
                        " [object Array]" &&
                        p5["length "] == 0x3
                    ) {
                        var p6 = Q(p5[0x2]);
                        return new N({
                            "tag ": p5[0x0],
                            "explicit ": p5[0x1],
                            "obj ": p6
                        });
                    } else {
                        var p7 = {};
                        p5["explicit "] !== undefined &&
                        (p7["explicit "] =
                            p5["explicit "]);
                        p5["tag "] !== undefined &&
                        (p7["tag "] = p5["tag "]);
                        if (p5["obj "] === undefined)
                            throw "obj shall be specified
                        for 'tag'.";
                        return (p7["obj "] = Q(p5["obj "])), new N(p7);
                    }
                }
            }),
            (this["jsonToASN1HEX "] = function (
                p
            ) {
                var n = this["newObject "](p);
                return n["getEncodedHex "]();
            });
    })()),
    (KJUR["asn1 "]["ASN1Util "][
        "oidHexToInt "
        ] = function (p) {
        var n = "",
            A = parseInt(p["substr "](0x0, 0x2), 0x10),
            L = Math["floor "](A / 0x28),
            S = A % 0x28,
            n = L + "." + S,
            Y = "";
        for (var J = 0x2; J < p["length "]; J += 0x2) {
            var C = parseInt(p["substr "](J, 0x2), 0x10),
                V = ("00000000 " +
                    C["toString "](0x2))["slice "](
                    -0x8
                );
            Y = Y + V["substr "](0x1, 0x7);
            if (V["substr "](0x0, 0x1) == "0 ") {
                var W = new BigInteger(Y, 0x2);
                (n = n + "." + W["toString "](0xa)), (Y = "");
            }
        }
        return n;
    }),
    (KJUR["asn1 "]["ASN1Util "][
        "oidIntToHex "
        ] = function (p) {
        var n = function (J) {
                var C = J["toString "](0x10);
                return C["length "] == 0x1 && (C = "0 " + C), C;
            },
            a = function (J) {
                var C = "",
                    V = new BigInteger(J, 0xa),
                    W = V["toString "](0x2),
                    R = 0x7 - (W["length "] % 0x7);
                R == 0x7 && (R = 0x0);
                var B = "";
                for (var F = 0x0; F < R; F++) {
                    B += "0 ";
                }
                W = B + W;
                for (var F = 0x0; F < W["length "] - 0x1; F += 0x7) {
                    var E = W["substr "](F, 0x7);
                    F != W["length "] - 0x7 && (E = "1 " + E),
                        (C += n(parseInt(E, 0x2)));
                }
                return C;
            };
        if (!p["match "](/^[0-9.]+$/))
            throw (
                "malformed oid string: " +
                p
            );
        var A = "",
            L = p["split "]("."),
            S = parseInt(L[0x0]) * 0x28 + parseInt(L[0x1]);
        (A += n(S)), L["splice "](0x0, 0x2);
        for (var Y = 0x0; Y < L["length "]; Y++) {
            A += a(L[Y]);
        }
        return A;
    }),
    (KJUR["asn1 "]["ASN1Object "] =
        function () {
            var p = !![],
                n = null,
                A = "00 ",
                L = "00 ",
                g = "";
            (this[
                "getLengthHexFromValue "
                ] = function () {
                if (
                    typeof this["hV "] == "undefined " ||
                    this["hV "] == null
                )
                    throw "this.hV is null or undefined.";
                if (this["hV "]["length "] % 0x2 == 0x1)
                    throw (
                        "value hex must be even length: n = " +
                        g["length "] +
                        ", v = " +
                        this["hV "]
                    );
                var S = this["hV "]["length "] / 0x2,
                    Y = S["toString "](0x10);
                Y["length "] % 0x2 == 0x1 && (Y = "0 " + Y);
                if (S < 0x80) return Y;
                else {
                    var J = Y["length "] / 0x2;
                    if (J > 0xf)
                        throw (
                            "ASN.1 length too long to represent by 8x: n = " +
                            S["toString "](0x10)
                        );
                    var C = 0x80 + J;
                    return C["toString "](0x10) + Y;
                }
            }),
                (this["getEncodedHex "] =
                    function () {
                        return (
                            (this["hTLV "] == null ||
                                this["isModified "]) &&
                            ((this["hV "] =
                                this[
                                    "getFreshValueHex "
                                    ]()),
                                (this["hL "] =
                                    this[
                                        "getLengthHexFromValue "
                                        ]()),
                                (this["hTLV "] =
                                    this["hT "] + this["hL "] + this["hV "]),
                                (this["isModified "] = ![])),
                                this["hTLV "]
                        );
                    }),
                (this["getValueHex "] = function () {
                    return (
                        this["getEncodedHex "](),
                            this["hV "]
                    );
                }),
                (this[
                    "getFreshValueHex "
                    ] = function () {
                    return "";
                });
        }),
    (KJUR["asn1 "][
        "DERAbstractString "
        ] = function (p) {
        KJUR["asn1 "][
            "DERAbstractString "
            ]["superclass "][
            "constructor "
            ]["call "](this);
        var n = null,
            A = null;
        (this["getString "] = function () {
            return this["s "];
        }),
            (this["setString "] = function (L) {
                (this["hTLV "] = null),
                    (this["isModified "] = !![]),
                    (this["s "] = L),
                    (this["hV "] = utf8tohex(this["s "])[
                        "toLowerCase "
                        ]());
            }),
            (this["setStringHex "] = function (L) {
                (this["hTLV "] = null),
                    (this["isModified "] = !![]),
                    (this["s "] = null),
                    (this["hV "] = L);
            }),
            (this[
                "getFreshValueHex "
                ] = function () {
                return this["hV "];
            }),
        typeof p != "undefined " &&
        (typeof p == "string "
            ? this["setString "](p)
            : typeof p["str "] != "undefined "
                ? this["setString "](p["str "])
                : typeof p["hex "] !=
                "undefined " &&
                this["setStringHex "](
                    p["hex "]
                ));
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DERAbstractString "
            ],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "][
        "DERAbstractTime "
        ] = function (p) {
        KJUR["asn1 "][
            "DERAbstractTime "
            ]["superclass "][
            "constructor "
            ]["call "](this);
        var n = null,
            A = null;
        (this["localDateToUTC "] =
            function (L) {
                var S =
                        L["getTime "]() +
                        L[
                            "getTimezoneOffset "
                            ]() *
                        0xea60,
                    Y = new Date(S);
                return Y;
            }),
            (this["formatDate "] = function (L, S, Y) {
                var J = this["zeroPadding "],
                    C =
                        this["localDateToUTC "](L),
                    V = String(C["getFullYear "]());
                S == "utc " && (V = V["substr "](0x2, 0x2));
                var W = J(String(C["getMonth "]() + 0x1), 0x2),
                    R = J(String(C["getDate "]()), 0x2),
                    B = J(String(C["getHours "]()), 0x2),
                    F = J(String(C["getMinutes "]()), 0x2),
                    E = J(String(C["getSeconds "]()), 0x2),
                    s = V + W + R + B + F + E;
                if (Y === !![]) {
                    var I =
                        C["getMilliseconds "]();
                    if (I != 0x0) {
                        var K = J(String(I), 0x3);
                        (K = K["replace "](/[0]+$/, "")),
                            (s = s + "." + K);
                    }
                }
                return s + "Z ";
            }),
            (this["zeroPadding "] = function (L, g) {
                if (L["length "] >= g) return L;
                return (
                    new Array(g - L["length "] + 0x1)[
                        "join "
                        ]("0 ") + L
                );
            }),
            (this["getString "] = function () {
                return this["s "];
            }),
            (this["setString "] = function (L) {
                (this["hTLV "] = null),
                    (this["isModified "] = !![]),
                    (this["s "] = L),
                    (this["hV "] = stohex(L));
            }),
            (this["setByDateValue "] =
                function (L, S, Y, J, C, V) {
                    var W = new Date(Date["UTC "](L, S - 0x1, Y, J, C, V, 0x0));
                    this["setByDate "](W);
                }),
            (this[
                "getFreshValueHex "
                ] = function () {
                return this["hV "];
            });
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DERAbstractTime "
            ],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "][
        "DERAbstractStructured "
        ] = function (p) {
        KJUR["asn1 "][
            "DERAbstractString "
            ]["superclass "][
            "constructor "
            ]["call "](this);
        var n = null;
        (this[
            "setByASN1ObjectArray "
            ] = function (A) {
            (this["hTLV "] = null),
                (this["isModified "] = !![]),
                (this["asn1Array "] = A);
        }),
            (this[
                "appendASN1Object "
                ] = function (A) {
                (this["hTLV "] = null),
                    (this["isModified "] = !![]),
                    this["asn1Array "]["push "](A);
            }),
            (this["asn1Array "] = new Array()),
        typeof p != "undefined " &&
        typeof p["array "] !=
        "undefined " &&
        (this["asn1Array "] =
            p["array "]);
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DERAbstractStructured "
            ],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "]["DERBoolean "] =
        function () {
            KJUR["asn1 "]["DERBoolean "][
                "superclass "
                ]["constructor "]["call "](
                this
            ),
                (this["hT "] = "01 "),
                (this["hTLV "] = "0101ff ");
        }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["DERBoolean "],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "]["DERInteger "] =
        function (p) {
            KJUR["asn1 "]["DERInteger "][
                "superclass "
                ]["constructor "]["call "](
                this
            ),
                (this["hT "] = "02 "),
                (this["setByBigInteger "] =
                    function (n) {
                        (this["hTLV "] = null),
                            (this["isModified "] = !![]),
                            (this["hV "] =
                                KJUR["asn1 "]["ASN1Util "][
                                    "bigIntToMinTwosComplementsHex "
                                    ](n));
                    }),
                (this["setByInteger "] = function (
                    n
                ) {
                    var A = new BigInteger(String(n), 0xa);
                    this["setByBigInteger "](
                        A
                    );
                }),
                (this["setValueHex "] = function (n) {
                    this["hV "] = n;
                }),
                (this[
                    "getFreshValueHex "
                    ] = function () {
                    return this["hV "];
                }),
            typeof p != "undefined " &&
            (typeof p["bigint "] !=
            "undefined "
                ? this[
                    "setByBigInteger "
                    ](p["bigint "])
                : typeof p["int "] != "undefined "
                    ? this["setByInteger "](
                        p["int "]
                    )
                    : typeof p == "number "
                        ? this["setByInteger "](p)
                        : typeof p["hex "] !=
                        "undefined " &&
                        this["setValueHex "](
                            p["hex "]
                        ));
        }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["DERInteger "],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "][
        "DERBitString "
        ] = function (p) {
        if (
            p !== undefined &&
            typeof p["obj "] !== "undefined "
        ) {
            var n = KJUR["asn1 "]["ASN1Util "][
                "newObject "
                ](p["obj "]);
            p["hex "] =
                "00 " +
                n["getEncodedHex "]();
        }
        KJUR["asn1 "][
            "DERBitString "
            ]["superclass "][
            "constructor "
            ]["call "](this),
            (this["hT "] = "03 "),
            (this[
                "setHexValueIncludingUnusedBits "
                ] = function (A) {
                (this["hTLV "] = null),
                    (this["isModified "] = !![]),
                    (this["hV "] = A);
            }),
            (this[
                "setUnusedBitsAndHexValue "
                ] = function (A, L) {
                if (A < 0x0 || 0x7 < A)
                    throw (
                        "unused bits shall be from 0 to 7 : u = " +
                        A
                    );
                var g = "0 " + A;
                (this["hTLV "] = null),
                    (this["isModified "] = !![]),
                    (this["hV "] = g + L);
            }),
            (this[
                "setByBinaryString "
                ] = function (A) {
                A = A["replace "](/0+$/, "");
                var L = 0x8 - (A["length "] % 0x8);
                L == 0x8 && (L = 0x0);
                for (var S = 0x0; S <= L; S++) {
                    A += "0 ";
                }
                var Y = "";
                for (var S = 0x0; S < A["length "] - 0x1; S += 0x8) {
                    var J = A["substr "](S, 0x8),
                        C = parseInt(J, 0x2)["toString "](0x10);
                    C["length "] == 0x1 && (C = "0 " + C), (Y += C);
                }
                (this["hTLV "] = null),
                    (this["isModified "] = !![]),
                    (this["hV "] = "0 " + L + Y);
            }),
            (this[
                "setByBooleanArray "
                ] = function (A) {
                var L = "";
                for (var g = 0x0; g < A["length "]; g++) {
                    A[g] == !![] ? (L += "1 ") : (L += "0 ");
                }
                this[
                    "setByBinaryString "
                    ](L);
            }),
            (this["newFalseArray "] = function (
                A
            ) {
                var L = new Array(A);
                for (var g = 0x0; g < A; g++) {
                    L[g] = ![];
                }
                return L;
            }),
            (this[
                "getFreshValueHex "
                ] = function () {
                return this["hV "];
            }),
        typeof p != "undefined " &&
        (typeof p == "string " &&
        p["toLowerCase "]()[
            "match "
            ](/^[0-9a-f]+$/)
            ? this[
                "setHexValueIncludingUnusedBits "
                ](p)
            : typeof p["hex "] != "undefined "
                ? this[
                    "setHexValueIncludingUnusedBits "
                    ](p["hex "])
                : typeof p["bin "] != "undefined "
                    ? this[
                        "setByBinaryString "
                        ](p["bin "])
                    : typeof p["array "] !=
                    "undefined " &&
                    this[
                        "setByBooleanArray "
                        ](p["array "]));
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DERBitString "
            ],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "][
        "DEROctetString "
        ] = function (p) {
        if (
            p !== undefined &&
            typeof p["obj "] !== "undefined "
        ) {
            var n = KJUR["asn1 "]["ASN1Util "][
                "newObject "
                ](p["obj "]);
            p["hex "] =
                n["getEncodedHex "]();
        }
        KJUR["asn1 "][
            "DEROctetString "
            ]["superclass "][
            "constructor "
            ]["call "](this, p),
            (this["hT "] = "04 ");
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DEROctetString "
            ],
        KJUR["asn1 "][
            "DERAbstractString "
            ]
    ),
    (KJUR["asn1 "]["DERNull "] = function () {
        KJUR["asn1 "]["DERNull "][
            "superclass "
            ]["constructor "]["call "](this),
            (this["hT "] = "05 "),
            (this["hTLV "] = "0500 ");
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["DERNull "],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "][
        "DERObjectIdentifier "
        ] = function (p) {
        var n = function (L) {
                var g = L["toString "](0x10);
                return g["length "] == 0x1 && (g = "0 " + g), g;
            },
            A = function (L) {
                var S = "",
                    Y = new BigInteger(L, 0xa),
                    J = Y["toString "](0x2),
                    C = 0x7 - (J["length "] % 0x7);
                C == 0x7 && (C = 0x0);
                var V = "";
                for (var W = 0x0; W < C; W++) {
                    V += "0 ";
                }
                J = V + J;
                for (var W = 0x0; W < J["length "] - 0x1; W += 0x7) {
                    var R = J["substr "](W, 0x7);
                    W != J["length "] - 0x7 && (R = "1 " + R),
                        (S += n(parseInt(R, 0x2)));
                }
                return S;
            };
        KJUR["asn1 "][
            "DERObjectIdentifier "
            ]["superclass "][
            "constructor "
            ]["call "](this),
            (this["hT "] = "06 "),
            (this["setValueHex "] = function (L) {
                (this["hTLV "] = null),
                    (this["isModified "] = !![]),
                    (this["s "] = null),
                    (this["hV "] = L);
            }),
            (this[
                "setValueOidString "
                ] = function (L) {
                if (!L["match "](/^[0-9.]+$/))
                    throw (
                        "malformed oid string: " +
                        L
                    );
                var S = "",
                    Y = L["split "]("."),
                    J = parseInt(Y[0x0]) * 0x28 + parseInt(Y[0x1]);
                (S += n(J)), Y["splice "](0x0, 0x2);
                for (var C = 0x0; C < Y["length "]; C++) {
                    S += A(Y[C]);
                }
                (this["hTLV "] = null),
                    (this["isModified "] = !![]),
                    (this["s "] = null),
                    (this["hV "] = S);
            }),
            (this["setValueName "] = function (L) {
                var g =
                    KJUR["asn1 "]["x509 "]["OID "][
                        "name2oid "
                        ](L);
                if (g !== "")
                    this[
                        "setValueOidString "
                        ](g);
                else
                    throw (
                        "DERObjectIdentifier oidName undefined: " +
                        L
                    );
            }),
            (this[
                "getFreshValueHex "
                ] = function () {
                return this["hV "];
            }),
        p !== undefined &&
        (typeof p === "string "
            ? p["match "](/^[0-2].[0-9.]+$/)
                ? this[
                    "setValueOidString "
                    ](p)
                : this["setValueName "](p)
            : p["oid "] !== undefined
                ? this[
                    "setValueOidString "
                    ](p["oid "])
                : p["hex "] !== undefined
                    ? this["setValueHex "](
                        p["hex "]
                    )
                    : p["name "] !== undefined &&
                    this["setValueName "](
                        p["name "]
                    ));
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DERObjectIdentifier "
            ],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "][
        "DEREnumerated "
        ] = function (p) {
        KJUR["asn1 "][
            "DEREnumerated "
            ]["superclass "][
            "constructor "
            ]["call "](this),
            (this["hT "] = "0a "),
            (this["setByBigInteger "] =
                function (n) {
                    (this["hTLV "] = null),
                        (this["isModified "] = !![]),
                        (this["hV "] =
                            KJUR["asn1 "]["ASN1Util "][
                                "bigIntToMinTwosComplementsHex "
                                ](n));
                }),
            (this["setByInteger "] = function (n) {
                var A = new BigInteger(String(n), 0xa);
                this["setByBigInteger "](A);
            }),
            (this["setValueHex "] = function (n) {
                this["hV "] = n;
            }),
            (this[
                "getFreshValueHex "
                ] = function () {
                return this["hV "];
            }),
        typeof p != "undefined " &&
        (typeof p["int "] != "undefined "
            ? this["setByInteger "](
                p["int "]
            )
            : typeof p == "number "
                ? this["setByInteger "](p)
                : typeof p["hex "] !=
                "undefined " &&
                this["setValueHex "](
                    p["hex "]
                ));
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DEREnumerated "
            ],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "][
        "DERUTF8String "
        ] = function (p) {
        KJUR["asn1 "][
            "DERUTF8String "
            ]["superclass "][
            "constructor "
            ]["call "](this, p),
            (this["hT "] = "0c ");
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DERUTF8String "
            ],
        KJUR["asn1 "][
            "DERAbstractString "
            ]
    ),
    (KJUR["asn1 "][
        "DERNumericString "
        ] = function (p) {
        KJUR["asn1 "][
            "DERNumericString "
            ]["superclass "][
            "constructor "
            ]["call "](this, p),
            (this["hT "] = "12 ");
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DERNumericString "
            ],
        KJUR["asn1 "][
            "DERAbstractString "
            ]
    ),
    (KJUR["asn1 "][
        "DERPrintableString "
        ] = function (p) {
        KJUR["asn1 "][
            "DERPrintableString "
            ]["superclass "][
            "constructor "
            ]["call "](this, p),
            (this["hT "] = "13 ");
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DERPrintableString "
            ],
        KJUR["asn1 "][
            "DERAbstractString "
            ]
    ),
    (KJUR["asn1 "][
        "DERTeletexString "
        ] = function (p) {
        KJUR["asn1 "][
            "DERTeletexString "
            ]["superclass "][
            "constructor "
            ]["call "](this, p),
            (this["hT "] = "14 ");
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DERTeletexString "
            ],
        KJUR["asn1 "][
            "DERAbstractString "
            ]
    ),
    (KJUR["asn1 "][
        "DERIA5String "
        ] = function (p) {
        KJUR["asn1 "][
            "DERIA5String "
            ]["superclass "][
            "constructor "
            ]["call "](this, p),
            (this["hT "] = "16 ");
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DERIA5String "
            ],
        KJUR["asn1 "][
            "DERAbstractString "
            ]
    ),
    (KJUR["asn1 "]["DERUTCTime "] =
        function (p) {
            KJUR["asn1 "]["DERUTCTime "][
                "superclass "
                ]["constructor "]["call "](
                this,
                p
            ),
                (this["hT "] = "17 "),
                (this["setByDate "] = function (n) {
                    (this["hTLV "] = null),
                        (this["isModified "] = !![]),
                        (this["date "] = n),
                        (this["s "] = this["formatDate "](
                            this["date "],
                            "utc "
                        )),
                        (this["hV "] = stohex(this["s "]));
                }),
                (this[
                    "getFreshValueHex "
                    ] = function () {
                    return (
                        typeof this["date "] ==
                        "undefined " &&
                        typeof this["s "] == "undefined " &&
                        ((this["date "] = new Date()),
                            (this["s "] = this["formatDate "](
                                this["date "],
                                "utc "
                            )),
                            (this["hV "] = stohex(this["s "]))),
                            this["hV "]
                    );
                }),
            p !== undefined &&
            (p["str "] !== undefined
                ? this["setString "](p["str "])
                : typeof p == "string " &&
                p["match "](/^[0-9]{12}Z$/)
                    ? this["setString "](p)
                    : p["hex "] !== undefined
                        ? this["setStringHex "](
                            p["hex "]
                        )
                        : p["date "] !== undefined &&
                        this["setByDate "](
                            p["date "]
                        ));
        }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["DERUTCTime "],
        KJUR["asn1 "][
            "DERAbstractTime "
            ]
    ),
    (KJUR["asn1 "][
        "DERGeneralizedTime "
        ] = function (p) {
        KJUR["asn1 "][
            "DERGeneralizedTime "
            ]["superclass "][
            "constructor "
            ]["call "](this, p),
            (this["hT "] = "18 "),
            (this["withMillis "] = ![]),
            (this["setByDate "] = function (n) {
                (this["hTLV "] = null),
                    (this["isModified "] = !![]),
                    (this["date "] = n),
                    (this["s "] = this["formatDate "](
                        this["date "],
                        "gen ",
                        this["withMillis "]
                    )),
                    (this["hV "] = stohex(this["s "]));
            }),
            (this[
                "getFreshValueHex "
                ] = function () {
                return (
                    this["date "] === undefined &&
                    this["s "] === undefined &&
                    ((this["date "] = new Date()),
                        (this["s "] = this["formatDate "](
                            this["date "],
                            "gen ",
                            this["withMillis "]
                        )),
                        (this["hV "] = stohex(this["s "]))),
                        this["hV "]
                );
            }),
        p !== undefined &&
        (p["str "] !== undefined
            ? this["setString "](p["str "])
            : typeof p == "string " &&
            p["match "](/^[0-9]{14}Z$/)
                ? this["setString "](p)
                : p["hex "] !== undefined
                    ? this["setStringHex "](
                        p["hex "]
                    )
                    : p["date "] !== undefined &&
                    this["setByDate "](p["date "]),
        p["millis "] === !![] &&
        (this["withMillis "] = !![]));
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DERGeneralizedTime "
            ],
        KJUR["asn1 "][
            "DERAbstractTime "
            ]
    ),
    (KJUR["asn1 "]["DERSequence "] =
        function (p) {
            KJUR["asn1 "]["DERSequence "][
                "superclass "
                ]["constructor "]["call "](
                this,
                p
            ),
                (this["hT "] = "30 "),
                (this[
                    "getFreshValueHex "
                    ] = function () {
                    var n = "";
                    for (
                        var A = 0x0;
                        A <
                        this["asn1Array "][
                            "length "
                            ];
                        A++
                    ) {
                        var L = this["asn1Array "][A];
                        n += L["getEncodedHex "]();
                    }
                    return (this["hV "] = n), this["hV "];
                });
        }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["DERSequence "],
        KJUR["asn1 "][
            "DERAbstractStructured "
            ]
    ),
    (KJUR["asn1 "]["DERSet "] = function (p) {
        KJUR["asn1 "]["DERSet "][
            "superclass "
            ]["constructor "]["call "](
            this,
            p
        ),
            (this["hT "] = "31 "),
            (this["sortFlag "] = !![]),
            (this[
                "getFreshValueHex "
                ] = function () {
                var n = new Array();
                for (
                    var A = 0x0;
                    A <
                    this["asn1Array "][
                        "length "
                        ];
                    A++
                ) {
                    var L = this["asn1Array "][A];
                    n["push "](
                        L["getEncodedHex "]()
                    );
                }
                return (
                    this["sortFlag "] == !![] &&
                    n["sort "](),
                        (this["hV "] = n["join "]("")),
                        this["hV "]
                );
            }),
        typeof p != "undefined " &&
        typeof p["sortflag "] !=
        "undefined " &&
        p["sortflag "] == ![] &&
        (this["sortFlag "] = ![]);
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["DERSet "],
        KJUR["asn1 "][
            "DERAbstractStructured "
            ]
    ),
    (KJUR["asn1 "][
        "DERTaggedObject "
        ] = function (p) {
        KJUR["asn1 "][
            "DERTaggedObject "
            ]["superclass "][
            "constructor "
            ]["call "](this),
            (this["hT "] = "a0 "),
            (this["hV "] = ""),
            (this["isExplicit "] = !![]),
            (this["asn1Object "] = null),
            (this["setASN1Object "] = function (
                n,
                A,
                L
            ) {
                (this["hT "] = A),
                    (this["isExplicit "] = n),
                    (this["asn1Object "] = L),
                    this["isExplicit "]
                        ? ((this["hV "] =
                            this["asn1Object "][
                                "getEncodedHex "
                                ]()),
                            (this["hTLV "] = null),
                            (this["isModified "] = !![]))
                        : ((this["hV "] = null),
                            (this["hTLV "] =
                                L["getEncodedHex "]()),
                            (this["hTLV "] = this["hTLV "][
                                "replace "
                                ](/^../, A)),
                            (this["isModified "] = ![]));
            }),
            (this[
                "getFreshValueHex "
                ] = function () {
                return this["hV "];
            }),
        typeof p != "undefined " &&
        (typeof p["tag "] != "undefined " &&
        (this["hT "] = p["tag "]),
        typeof p["explicit "] !=
        "undefined " &&
        (this["isExplicit "] =
            p["explicit "]),
        typeof p["obj "] != "undefined " &&
        ((this["asn1Object "] =
            p["obj "]),
            this["setASN1Object "](
                this["isExplicit "],
                this["hT "],
                this["asn1Object "]
            )));
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "][
            "DERTaggedObject "
            ],
        KJUR["asn1 "]["ASN1Object "]
    );
var ASN1HEX = new (function () {
})();
(ASN1HEX["getLblen "] = function (p, n) {
    if (p["substr "](n + 0x2, 0x1) != "8 ") return 0x1;
    var A = parseInt(p["substr "](n + 0x3, 0x1));
    if (A == 0x0) return -0x1;
    if (0x0 < A && A < 0xa) return A + 0x1;
    return -0x2;
}),
    (ASN1HEX["getL "] = function (p, n) {
        var A = ASN1HEX["getLblen "](p, n);
        if (A < 0x1) return "";
        return p["substr "](n + 0x2, A * 0x2);
    }),
    (ASN1HEX["getVblen "] = function (p, n) {
        var A, L;
        A = ASN1HEX["getL "](p, n);
        if (A == "") return -0x1;
        return (
            A["substr "](0x0, 0x1) === "8 "
                ? (L = new BigInteger(A["substr "](0x2), 0x10))
                : (L = new BigInteger(A, 0x10)),
                L["intValue "]()
        );
    }),
    (ASN1HEX["getVidx "] = function (p, n) {
        var A = ASN1HEX["getLblen "](p, n);
        if (A < 0x0) return A;
        return n + (A + 0x1) * 0x2;
    }),
    (ASN1HEX["getV "] = function (p, n) {
        var A = ASN1HEX["getVidx "](p, n),
            L = ASN1HEX["getVblen "](p, n);
        return p["substr "](A, L * 0x2);
    }),
    (ASN1HEX["getTLV "] = function (p, n) {
        return (
            p["substr "](n, 0x2) +
            ASN1HEX["getL "](p, n) +
            ASN1HEX["getV "](p, n)
        );
    }),
    (ASN1HEX[
        "getNextSiblingIdx "
        ] = function (p, n) {
        var A = ASN1HEX["getVidx "](p, n),
            L = ASN1HEX["getVblen "](p, n);
        return A + L * 0x2;
    }),
    (ASN1HEX["getChildIdx "] = function (p, n) {
        var a = ASN1HEX,
            A = new Array(),
            L = a["getVidx "](p, n);
        p["substr "](n, 0x2) == "03 "
            ? A["push "](L + 0x2)
            : A["push "](L);
        var S = a["getVblen "](p, n),
            Y = L,
            J = 0x0;
        while (0x1) {
            var C = a[
                "getNextSiblingIdx "
                ](p, Y);
            if (C == null || C - L >= S * 0x2) break;
            if (J >= 0xc8) break;
            A["push "](C), (Y = C), J++;
        }
        return A;
    }),
    (ASN1HEX["getNthChildIdx "] =
        function (p, n, a) {
            var A = ASN1HEX["getChildIdx "](p, n);
            return A[a];
        }),
    (ASN1HEX["getIdxbyList "] = function (
        p,
        n,
        a,
        A
    ) {
        var L = ASN1HEX,
            S,
            Y;
        if (a["length "] == 0x0) {
            if (A !== undefined) {
                if (p["substr "](n, 0x2) !== A)
                    throw Error(
                        "checking tag doesn 't match: " +
                        p["substr"](n, 0x2) +
                        "!=" +
                        A
                    );
            }
            return n;
        }
        return (
            (S = a["shift"]()),
                (Y = L["getChildIdx"](p, n)),
                L["getIdxbyList"](p, Y[S], a, A)
        );
    }),
    (ASN1HEX["getTLVbyList"] = function (
        p,
        n,
        A,
        L
    ) {
        var g = ASN1HEX,
            S = g["getIdxbyList"](p, n, A);
        if (S === undefined)
            throw "can't find nthList object ";
        if (L !== undefined) {
            if (p["substr "](S, 0x2) != L)
                throw (
                    "checking tag doesn 't match: " +
                    p["substr"](S, 0x2) +
                    "!=" +
                    L
                );
        }
        return g["getTLV"](p, S);
    }),
    (ASN1HEX["getVbyList"] = function (
        p,
        n,
        A,
        L,
        S
    ) {
        var Y = ASN1HEX,
            J,
            C;
        J = Y["getIdxbyList"](p, n, A, L);
        if (J === undefined)
            throw "can't find nthList object ";
        return (
            (C = Y["getV "](p, J)),
            S === !![] && (C = C["substr "](0x2)),
                C
        );
    }),
    (ASN1HEX["hextooidstr "] = function (p) {
        var c = function (W, R) {
                if (W["length "] >= R) return W;
                return (
                    new Array(R - W["length "] + 0x1)[
                        "join "
                        ]("0 ") + W
                );
            },
            a = [],
            A = p["substr "](0x0, 0x2),
            L = parseInt(A, 0x10);
        (a[0x0] = new String(Math["floor "](L / 0x28))),
            (a[0x1] = new String(L % 0x28));
        var S = p["substr "](0x2),
            Y = [];
        for (var J = 0x0; J < S["length "] / 0x2; J++) {
            Y["push "](
                parseInt(S["substr "](J * 0x2, 0x2), 0x10)
            );
        }
        var b = [],
            C = "";
        for (var J = 0x0; J < Y["length "]; J++) {
            Y[J] & 0x80
                ? (C =
                    C + c((Y[J] & 0x7f)["toString "](0x2), 0x7))
                : ((C =
                    C + c((Y[J] & 0x7f)["toString "](0x2), 0x7)),
                    b["push "](new String(parseInt(C, 0x2))),
                    (C = ""));
        }
        var V = a["join "](".");
        return (
            b["length "] > 0x0 &&
            (V = V + "." + b["join "](".")),
                V
        );
    }),
    (ASN1HEX["dump "] = function (A, L, S, Y) {
        var J = ASN1HEX,
            C = J["getV "],
            V = J["dump "],
            W = J["getChildIdx "],
            R = A;
        A instanceof
        KJUR["asn1 "]["ASN1Object "] &&
        (R = A["getEncodedHex "]());
        var B = function (G, N) {
            if (G["length "] <= N * 0x2) return G;
            else {
                var D =
                    G["substr "](0x0, N) +
                    ".. (total " +
                    G["length "] / 0x2 +
                    "bytes).." +
                    G["substr "](G["length "] - N, N);
                return D;
            }
        };
        L === undefined &&
        (L = {
            "ommit_long_octet ": 0x20
        });
        S === undefined && (S = 0x0);
        Y === undefined && (Y = "");
        var F =
            L["ommit_long_octet "];
        if (R["substr "](S, 0x2) == "01 ") {
            var E = C(R, S);
            return E == "00 "
                ? Y + "BOOLEAN FALSE "
                : Y + "BOOLEAN TRUE ";
        }
        if (R["substr "](S, 0x2) == "02 ") {
            var E = C(R, S);
            return Y + "INTEGER " + B(E, F) + "";
        }
        if (R["substr "](S, 0x2) == "03 ") {
            var E = C(R, S);
            return Y + "BITSTRING " + B(E, F) + "";
        }
        if (R["substr "](S, 0x2) == "04 ") {
            var E = C(R, S);
            if (J["isASN1HEX "](E)) {
                var s =
                    Y +
                    "OCTETSTRING, encapsulates ";
                return (s = s + V(E, L, 0x0, Y + "")), s;
            } else
                return (
                    Y +
                    "OCTETSTRING " +
                    B(E, F) +
                    ""
                );
        }
        if (R["substr "](S, 0x2) == "05 ")
            return Y + "NULL ";
        if (R["substr "](S, 0x2) == "06 ") {
            var I = C(R, S),
                K =
                    KJUR["asn1 "]["ASN1Util "][
                        "oidHexToInt "
                        ](I),
                T =
                    KJUR["asn1 "]["x509 "]["OID "][
                        "oid2name "
                        ](K),
                i = K["replace "](/\./g, "");
            return T != ""
                ? Y +
                "ObjectIdentifier " +
                T +
                " (" +
                i +
                ")"
                : Y +
                "ObjectIdentifier(" +
                i +
                ")";
        }
        if (R["substr "](S, 0x2) == "0c ")
            return (
                Y +
                "UTF8String '" +
                hextoutf8(C(R, S)) +
                "'"
            );
        if (R["substr "](S, 0x2) == "13 ")
            return (
                Y +
                "PrintableString '" +
                hextoutf8(C(R, S)) +
                "'"
            );
        if (R["substr "](S, 0x2) == "14 ")
            return (
                Y +
                "TeletexString '" +
                hextoutf8(C(R, S)) +
                "'"
            );
        if (R["substr "](S, 0x2) == "16 ")
            return (
                Y +
                "IA5String '" +
                hextoutf8(C(R, S)) +
                "'"
            );
        if (R["substr "](S, 0x2) == "17 ")
            return (
                Y + "UTCTime " + hextoutf8(C(R, S)) + ""
            );
        if (R["substr "](S, 0x2) == "18 ")
            return (
                Y +
                "GeneralizedTime " +
                hextoutf8(C(R, S)) +
                ""
            );
        if (R["substr "](S, 0x2) == "30 ") {
            if (R["substr "](S, 0x4) == "3000 ")
                return Y + "SEQUENCE {}
            ";
            var s = Y + "SEQUENCE ",
                Z = W(R, S),
                M = L;
            if (
                (Z["length "] == 0x2 ||
                    Z["length "] == 0x3) &&
                R["substr "](Z[0x0], 0x2) == "06 " &&
                R["substr "](
                    Z[Z["length "] - 0x1],
                    0x2
                ) == "04 "
            ) {
                var T = J["oidname "](C(R, Z[0x0])),
                    U = JSON["parse "](
                        JSON["stringify "](L)
                    );
                (U["x509ExtName "] = T), (M = U);
            }
            for (var H = 0x0; H < Z["length "]; H++) {
                s = s + V(R, M, Z[H], Y + "");
            }
            return s;
        }
        if (R["substr "](S, 0x2) == "31 ") {
            var s = Y + "SET ",
                Z = W(R, S);
            for (var H = 0x0; H < Z["length "]; H++) {
                s = s + V(R, L, Z[H], Y + "");
            }
            return s;
        }
        var O = parseInt(R["substr "](S, 0x2), 0x10);
        if ((O & 0x80) != 0x0) {
            var X = O & 0x1f;
            if ((O & 0x20) != 0x0) {
                var s = Y + " [" + X + "]",
                    Z = W(R, S);
                for (var H = 0x0; H < Z["length "]; H++) {
                    s = s + V(R, L, Z[H], Y + "");
                }
                return s;
            } else {
                var E = C(R, S);
                E["substr "](0x0, 0x8) ==
                "68747470 " && (E = hextoutf8(E));
                L["x509ExtName "] ===
                "subjectAltName " &&
                X == 0x2 &&
                (E = hextoutf8(E));
                var s = Y + " [" + X + "]" + E + "";
                return s;
            }
        }
        return (
            Y +
            "UNKNOWN(" +
            R["substr "](S, 0x2) +
            ")" +
            C(R, S) +
            ""
        );
    }),
    (ASN1HEX["isASN1HEX "] = function (p) {
        var n = ASN1HEX;
        if (p["length "] % 0x2 == 0x1) return ![];
        var A = n["getVblen "](p, 0x0),
            L = p["substr "](0x0, 0x2),
            g = n["getL "](p, 0x0),
            S =
                p["length "] -
                L["length "] -
                g["length "];
        if (S == A * 0x2) return !![];
        return ![];
    }),
    (ASN1HEX["checkStrictDER "] =
        function (A, L, S, Y, J) {
            var C = ASN1HEX;
            if (S === undefined) {
                if (typeof A != "string ")
                    throw new Error(
                        "not hex string "
                    );
                A = A["toLowerCase "]();
                if (
                    !KJUR["lang "]["String "][
                        "isHex "
                        ](A)
                )
                    throw new Error(
                        "not hex string "
                    );
                (S = A["length "]),
                    (Y = A["length "] / 0x2),
                    Y < 0x80
                        ? (J = 0x1)
                        : (J =
                            Math["ceil "](
                                Y["toString "](0x10)
                            ) + 0x1);
            }
            var V = C["getL "](A, L);
            if (V["length "] > J * 0x2)
                throw new Error(
                    "L of TLV too long: idx = " +
                    L
                );
            var W = C["getVblen "](A, L);
            if (W > Y)
                throw new Error(
                    "value of L too long than hex: idx = " +
                    L
                );
            var R = C["getTLV "](A, L),
                B =
                    R["length "] -
                    0x2 -
                    C["getL "](A, L)["length "];
            if (B !== W * 0x2)
                throw new Error(
                    "V string length and L 's value not the same:" +
                    B +
                    "/" +
                    W * 0x2
                );
            if (L === 0x0) {
                if (A["length"] != R["length"])
                    throw new Error(
                        "total length and TLV length unmatch:" +
                        A["length"] +
                        "!=" +
                        R["length"]
                    );
            }
            var F = A["substr"](L, 0x2);
            if (F === "02") {
                var E = C["getVidx"](A, L);
                if (
                    A["substr"](E, 0x2) == "00" &&
                    A["charCodeAt"](E + 0x2) < 0x38
                )
                    throw new Error(
                        "not least zeros for DER INTEGER"
                    );
            }
            if (parseInt(F, 0x10) & 0x20) {
                var I = C["getVblen"](A, L),
                    K = 0x0,
                    T = C["getChildIdx"](A, L);
                for (var i = 0x0; i < T["length"]; i++) {
                    var Z = C["getTLV"](A, T[i]);
                    (K += Z["length"]),
                        C["checkStrictDER"](
                            A,
                            T[i],
                            S,
                            Y,
                            J
                        );
                }
                if (I * 0x2 != K)
                    throw new Error(
                        "sum of children's TLV length and L unmatch: " +
                        I * 0x2 +
                        " != " +
                        K
                    );
            }
        }),
    (ASN1HEX["oidname "] = function (p) {
        var n = KJUR["asn1 "];
        KJUR["lang "]["String "][
            "isHex "
            ](p) &&
        (p =
            n["ASN1Util "][
                "oidHexToInt "
                ](p));
        var A =
            n["x509 "]["OID "]["oid2name "](
                p
            );
        return A === "" && (A = p), A;
    });
(typeof KJUR == "undefined " || !KJUR) && (KJUR = {});
(typeof KJUR["asn1 "] == "undefined " ||
    !KJUR["asn1 "]) &&
(KJUR["asn1 "] = {});
(typeof KJUR["asn1 "]["x509 "] ==
    "undefined " ||
    !KJUR["asn1 "]["x509 "]) &&
(KJUR["asn1 "]["x509 "] = {});
(KJUR["asn1 "]["x509 "][
    "Certificate "
    ] = function (p) {
    KJUR["asn1 "]["x509 "][
        "Certificate "
        ]["superclass "][
        "constructor "
        ]["call "](this);
    var n = null,
        A = null,
        L = null,
        S = null,
        Y = null,
        J = KJUR,
        C = J["crypto "],
        V = J["asn1 "],
        W = V["DERSequence "],
        l = V["DERBitString "];
    (this["sign "] = function () {
        this["asn1SignatureAlg "] =
            this["asn1TBSCert "][
                "asn1SignatureAlg "
                ];
        var R = new KJUR["crypto "][
            "Signature "
            ]({
            "alg ":
                this[
                    "asn1SignatureAlg "
                    ]["nameAlg "]
        });
        R["init "](this["prvKey "]),
            R["updateHex "](
                this["asn1TBSCert "][
                    "getEncodedHex "
                    ]()
            ),
            (this["hexSig "] = R["sign "]()),
            (this["asn1Sig "] = new l({
                "hex ": "00 " + this["hexSig "]
            }));
        var B = new W({
            "array ": [
                this["asn1TBSCert "],
                this[
                    "asn1SignatureAlg "
                    ],
                this["asn1Sig "]
            ]
        });
        (this["hTLV "] =
            B["getEncodedHex "]()),
            (this["isModified "] = ![]);
    }),
        (this["setSignatureHex "] =
            function (R) {
                (this[
                    "asn1SignatureAlg "
                    ] =
                    this["asn1TBSCert "][
                        "asn1SignatureAlg "
                        ]),
                    (this["hexSig "] = R),
                    (this["asn1Sig "] = new l({
                        "hex ": "00 " + this["hexSig "]
                    }));
                var B = new W({
                    "array ": [
                        this["asn1TBSCert "],
                        this[
                            "asn1SignatureAlg "
                            ],
                        this["asn1Sig "]
                    ]
                });
                (this["hTLV "] =
                    B["getEncodedHex "]()),
                    (this["isModified "] = ![]);
            }),
        (this["getEncodedHex "] =
            function () {
                if (
                    this["isModified "] == ![] &&
                    this["hTLV "] != null
                )
                    return this["hTLV "];
                throw "not signed yet ";
            }),
        (this["getPEMString "] = function () {
            var R = hextob64nl(
                this["getEncodedHex "]()
            );
            return (
                "-----BEGIN CERTIFICATE-----" +
                R +
                "-----END CERTIFICATE-----"
            );
        }),
    p !== undefined &&
    (p["tbscertobj "] !== undefined &&
    (this["asn1TBSCert "] =
        p["tbscertobj "]),
    p["prvkeyobj "] !== undefined &&
    (this["prvKey "] =
        p["prvkeyobj "]));
}),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "Certificate "
            ],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "]["x509 "][
        "TBSCertificate "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "TBSCertificate "
            ]["superclass "][
            "constructor "
            ]["call "](this);
        var n = KJUR,
            A = n["asn1 "],
            L = A["DERSequence "],
            S = A["DERInteger "],
            Y = A["DERTaggedObject "],
            J = A["x509 "],
            C = J["Time "],
            V = J["X500Name "],
            W =
                J[
                    "SubjectPublicKeyInfo "
                    ];
        (this["_initialize "] = function () {
            (this["asn1Array "] = new Array()),
                (this["asn1Version "] = new Y({
                    "obj ": new S({
                        "int ": 0x2
                    })
                })),
                (this[
                    "asn1SerialNumber "
                    ] = null),
                (this[
                    "asn1SignatureAlg "
                    ] = null),
                (this["asn1Issuer "] = null),
                (this["asn1NotBefore "] = null),
                (this["asn1NotAfter "] = null),
                (this["asn1Subject "] = null),
                (this["asn1SubjPKey "] = null),
                (this["extensionsArray "] =
                    new Array());
        }),
            (this[
                "setSerialNumberByParam "
                ] = function (l) {
                this[
                    "asn1SerialNumber "
                    ] = new S(l);
            }),
            (this[
                "setSignatureAlgByParam "
                ] = function (l) {
                this[
                    "asn1SignatureAlg "
                    ] = new J[
                    "AlgorithmIdentifier "
                    ](l);
            }),
            (this[
                "setIssuerByParam "
                ] = function (l) {
                this["asn1Issuer "] = new V(l);
            }),
            (this[
                "setNotBeforeByParam "
                ] = function (l) {
                this["asn1NotBefore "] = new C(l);
            }),
            (this[
                "setNotAfterByParam "
                ] = function (l) {
                this["asn1NotAfter "] = new C(l);
            }),
            (this[
                "setSubjectByParam "
                ] = function (l) {
                this["asn1Subject "] = new V(l);
            }),
            (this[
                "setSubjectPublicKey "
                ] = function (l) {
                this["asn1SubjPKey "] = new W(l);
            }),
            (this[
                "setSubjectPublicKeyByGetKey "
                ] = function (R) {
                var B = KEYUTIL["getKey "](R);
                this["asn1SubjPKey "] = new W(B);
            }),
            (this["appendExtension "] =
                function (l) {
                    this["extensionsArray "][
                        "push "
                        ](l);
                }),
            (this[
                "appendExtensionByName "
                ] = function (R, B) {
                KJUR["asn1 "]["x509 "][
                    "Extension "
                    ][
                    "appendByNameToArray "
                    ](
                    R,
                    B,
                    this["extensionsArray "]
                );
            }),
            (this["getEncodedHex "] =
                function () {
                    if (
                        this["asn1NotBefore "] ==
                        null ||
                        this["asn1NotAfter "] == null
                    )
                        throw "notBefore and / or notAfter not set ";
                    var R = new L({
                        "array ": [
                            this["asn1NotBefore "],
                            this["asn1NotAfter "]
                        ]
                    });
                    (this["asn1Array "] = new Array()),
                        this["asn1Array "]["push "](
                            this["asn1Version "]
                        ),
                        this["asn1Array "]["push "](
                            this[
                                "asn1SerialNumber "
                                ]
                        ),
                        this["asn1Array "]["push "](
                            this[
                                "asn1SignatureAlg "
                                ]
                        ),
                        this["asn1Array "]["push "](
                            this["asn1Issuer "]
                        ),
                        this["asn1Array "]["push "](R),
                        this["asn1Array "]["push "](
                            this["asn1Subject "]
                        ),
                        this["asn1Array "]["push "](
                            this["asn1SubjPKey "]
                        );
                    if (
                        this[
                            "extensionsArray "
                            ]["length "] > 0x0
                    ) {
                        var B = new L({
                                "array ":
                                    this[
                                        "extensionsArray "
                                        ]
                            }),
                            F = new Y({
                                "explicit ": !![],
                                "tag ": "a3 ",
                                "obj ": B
                            });
                        this["asn1Array "]["push "](F);
                    }
                    var E = new L({
                        "array ": this["asn1Array "]
                    });
                    return (
                        (this["hTLV "] =
                            E["getEncodedHex "]()),
                            (this["isModified "] = ![]),
                            this["hTLV "]
                    );
                }),
            this["_initialize "]();
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "TBSCertificate "
            ],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "]["x509 "][
        "Extension "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "Extension "
            ]["superclass "][
            "constructor "
            ]["call "](this);
        var n = null,
            A = KJUR,
            L = A["asn1 "],
            S =
                L[
                    "DERObjectIdentifier "
                    ],
            Y = L["DEROctetString "],
            J = L["DERBitString "],
            C = L["DERBoolean "],
            V = L["DERSequence "];
        (this["getEncodedHex "] =
            function () {
                var W = new S({
                        "oid ": this["oid "]
                    }),
                    R = new Y({
                        "hex ":
                            this[
                                "getExtnValueHex "
                                ]()
                    }),
                    B = new Array();
                B["push "](W);
                this["critical "] &&
                B["push "](new C());
                B["push "](R);
                var F = new V({
                    "array ": B
                });
                return F["getEncodedHex "]();
            }),
            (this["critical "] = ![]),
        p !== undefined &&
        p["critical "] !== undefined &&
        (this["critical "] =
            p["critical "]);
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "Extension "
            ],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "]["x509 "][
        "Extension "
        ][
        "appendByNameToArray "
        ] = function (p, n, a) {
        var A = p["toLowerCase "](),
            L = KJUR["asn1 "]["x509 "];
        if (
            A == "basicconstraints "
        ) {
            var S = new L[
                "BasicConstraints "
                ](n);
            a["push "](S);
        } else {
            if (A == "keyusage ") {
                var S = new L["KeyUsage "](n);
                a["push "](S);
            } else {
                if (
                    A ==
                    "crldistributionpoints "
                ) {
                    var S = new L[
                        "CRLDistributionPoints "
                        ](n);
                    a["push "](S);
                } else {
                    if (A == "extkeyusage ") {
                        var S = new L["ExtKeyUsage "](n);
                        a["push "](S);
                    } else {
                        if (
                            A ==
                            "authoritykeyidentifier "
                        ) {
                            var S = new L[
                                "AuthorityKeyIdentifier "
                                ](n);
                            a["push "](S);
                        } else {
                            if (
                                A ==
                                "subjectkeyidentifier "
                            ) {
                                var S = new L[
                                    "SubjectKeyIdentifier "
                                    ](n);
                                a["push "](S);
                            } else {
                                if (
                                    A ==
                                    "authorityinfoaccess "
                                ) {
                                    var S = new L[
                                        "AuthorityInfoAccess "
                                        ](n);
                                    a["push "](S);
                                } else {
                                    if (
                                        A ==
                                        "subjectaltname "
                                    ) {
                                        var S = new L[
                                            "SubjectAltName "
                                            ](n);
                                        a["push "](S);
                                    } else {
                                        if (
                                            A ==
                                            "issueraltname "
                                        ) {
                                            var S = new L[
                                                "IssuerAltName "
                                                ](n);
                                            a["push "](S);
                                        } else
                                            throw (
                                                "unsupported extension name: " +
                                                p
                                            );
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }),
    (KJUR["asn1 "]["x509 "][
        "KeyUsage "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "KeyUsage "
            ]["superclass "][
            "constructor "
            ]["call "](this, p);
        var n = X509["KEYUSAGE_NAME "];
        (this["getExtnValueHex "] =
            function () {
                return this["asn1ExtnValue "][
                    "getEncodedHex "
                    ]();
            }),
            (this["oid "] = "2.5.29.15 ");
        if (p !== undefined) {
            p["bin "] !== undefined &&
            (this["asn1ExtnValue "] =
                new KJUR["asn1 "][
                    "DERBitString "
                    ](p));
            if (
                p["names "] !== undefined &&
                p["names "]["length "] !== undefined
            ) {
                var A = p["names "],
                    L = "000000000 ";
                for (var g = 0x0; g < A["length "]; g++) {
                    for (var S = 0x0; S < n["length "]; S++) {
                        A[g] === n[S] &&
                        (L =
                            L["substring "](0x0, S) +
                            "1 " +
                            L["substring "](
                                S + 0x1,
                                L["length "]
                            ));
                    }
                }
                this["asn1ExtnValue "] = new KJUR[
                    "asn1 "
                    ]["DERBitString "]({
                    "bin ": L
                });
            }
        }
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "KeyUsage "
            ],
        KJUR["asn1 "]["x509 "][
            "Extension "
            ]
    ),
    (KJUR["asn1 "]["x509 "][
        "BasicConstraints "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "BasicConstraints "
            ]["superclass "][
            "constructor "
            ]["call "](this, p);
        var n = ![],
            A = -0x1;
        (this["getExtnValueHex "] =
            function () {
                var L = new Array();
                this["cA "] &&
                L["push "](
                    new KJUR["asn1 "][
                        "DERBoolean "
                        ]()
                );
                this["pathLen "] > -0x1 &&
                L["push "](
                    new KJUR["asn1 "][
                        "DERInteger "
                        ]({
                        "int ": this["pathLen "]
                    })
                );
                var g = new KJUR["asn1 "][
                    "DERSequence "
                    ]({
                    "array ": L
                });
                return (
                    (this["asn1ExtnValue "] = g),
                        this["asn1ExtnValue "][
                            "getEncodedHex "
                            ]()
                );
            }),
            (this["oid "] = "2.5.29.19 "),
            (this["cA "] = ![]),
            (this["pathLen "] = -0x1),
        p !== undefined &&
        (p["cA "] !== undefined && (this["cA "] = p["cA "]),
        p["pathLen "] !== undefined &&
        (this["pathLen "] =
            p["pathLen "]));
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "BasicConstraints "
            ],
        KJUR["asn1 "]["x509 "][
            "Extension "
            ]
    ),
    (KJUR["asn1 "]["x509 "][
        "CRLDistributionPoints "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "CRLDistributionPoints "
            ]["superclass "][
            "constructor "
            ]["call "](this, p);
        var n = KJUR,
            A = n["asn1 "],
            L = A["x509 "];
        (this["getExtnValueHex "] =
            function () {
                return this["asn1ExtnValue "][
                    "getEncodedHex "
                    ]();
            }),
            (this["setByDPArray "] = function (g) {
                this["asn1ExtnValue "] = new A[
                    "DERSequence "
                    ]({
                    "array ": g
                });
            }),
            (this["setByOneURI "] = function (S) {
                var Y = new L["GeneralNames "]([
                        {
                            "uri ": S
                        }
                    ]),
                    J = new L[
                        "DistributionPointName "
                        ](Y),
                    C = new L[
                        "DistributionPoint "
                        ]({
                        "dpobj ": J
                    });
                this["setByDPArray "]([C]);
            }),
            (this["oid "] = "2.5.29.31 "),
        p !== undefined &&
        (p["array "] !== undefined
            ? this["setByDPArray "](
                p["array "]
            )
            : p["uri "] !== undefined &&
            this["setByOneURI "](
                p["uri "]
            ));
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "CRLDistributionPoints "
            ],
        KJUR["asn1 "]["x509 "][
            "Extension "
            ]
    ),
    (KJUR["asn1 "]["x509 "][
        "ExtKeyUsage "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "ExtKeyUsage "
            ]["superclass "][
            "constructor "
            ]["call "](this, p);
        var n = KJUR,
            A = n["asn1 "];
        (this["setPurposeArray "] =
            function (L) {
                this["asn1ExtnValue "] = new A[
                    "DERSequence "
                    ]();
                for (var g = 0x0; g < L["length "]; g++) {
                    var S = new A[
                        "DERObjectIdentifier "
                        ](L[g]);
                    this["asn1ExtnValue "][
                        "appendASN1Object "
                        ](S);
                }
            }),
            (this["getExtnValueHex "] =
                function () {
                    return this["asn1ExtnValue "][
                        "getEncodedHex "
                        ]();
                }),
            (this["oid "] = "2.5.29.37 "),
        p !== undefined &&
        p["array "] !== undefined &&
        this["setPurposeArray "](
            p["array "]
        );
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "ExtKeyUsage "
            ],
        KJUR["asn1 "]["x509 "][
            "Extension "
            ]
    ),
    (KJUR["asn1 "]["x509 "][
        "AuthorityKeyIdentifier "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "AuthorityKeyIdentifier "
            ]["superclass "][
            "constructor "
            ]["call "](this, p);
        var n = KJUR,
            A = n["asn1 "],
            L = A["DERTaggedObject "],
            g =
                A["x509 "][
                    "GeneralNames "
                    ],
            S =
                n["crypto "]["Util "][
                    "isKey "
                    ];
        (this["asn1KID "] = null),
            (this["asn1CertIssuer "] = null),
            (this["asn1CertSN "] = null),
            (this["getExtnValueHex "] =
                function () {
                    var Y = new Array();
                    this["asn1KID "] &&
                    Y["push "](
                        new L({
                            "explicit ": ![],
                            "tag ": "80 ",
                            "obj ": this["asn1KID "]
                        })
                    );
                    this["asn1CertIssuer "] &&
                    Y["push "](
                        new L({
                            "explicit ": ![],
                            "tag ": "a1 ",
                            "obj ": new g([
                                {
                                    "dn ":
                                        this[
                                            "asn1CertIssuer "
                                            ]
                                }
                            ])
                        })
                    );
                    this["asn1CertSN "] &&
                    Y["push "](
                        new L({
                            "explicit ": ![],
                            "tag ": "82 ",
                            "obj ": this["asn1CertSN "]
                        })
                    );
                    var J = new A["DERSequence "]({
                        "array ": Y
                    });
                    return (
                        (this["asn1ExtnValue "] = J),
                            this["asn1ExtnValue "][
                                "getEncodedHex "
                                ]()
                    );
                }),
            (this["setKIDByParam "] = function (
                Y
            ) {
                if (Y["str "] !== undefined || Y["hex "] !== undefined)
                    this["asn1KID "] = new KJUR["asn1 "][
                        "DEROctetString "
                        ](Y);
                else {
                    if (
                        (typeof Y === "object " &&
                            KJUR["crypto "]["Util "][
                                "isKey "
                                ](Y)) ||
                        (typeof Y === "string " &&
                            Y["indexOf "]("BEGIN ") !=
                            -0x1)
                    ) {
                        var J = Y;
                        typeof Y === "string " &&
                        (J = KEYUTIL["getKey "](Y));
                        var C = KEYUTIL["getKeyID "](J);
                        this["asn1KID "] = new KJUR["asn1 "][
                            "DEROctetString "
                            ]({
                            "hex ": C
                        });
                    }
                }
            }),
            (this[
                "setCertIssuerByParam "
                ] = function (Y) {
                Y["str "] !== undefined ||
                Y["ldapstr "] !== undefined ||
                Y["hex "] !== undefined ||
                Y["certsubject "] !== undefined ||
                Y["certissuer "] !== undefined
                    ? (this["asn1CertIssuer "] =
                        new KJUR["asn1 "]["x509 "][
                            "X500Name "
                            ](Y))
                    : typeof Y === "string " &&
                    Y["indexOf "]("BEGIN ") !=
                    -0x1 &&
                    Y["indexOf "](
                        "CERTIFICATE "
                    ) != -0x1 &&
                    (this["asn1CertIssuer "] =
                        new KJUR["asn1 "]["x509 "][
                            "X500Name "
                            ]({
                            "certissuer ": Y
                        }));
            }),
            (this[
                "setCertSNByParam "
                ] = function (Y) {
                if (
                    Y["str "] !== undefined ||
                    Y["bigint "] !== undefined ||
                    Y["hex "] !== undefined
                )
                    this["asn1CertSN "] = new KJUR[
                        "asn1 "
                        ]["DERInteger "](Y);
                else {
                    if (
                        typeof Y === "string " &&
                        Y["indexOf "]("BEGIN ") !=
                        -0x1 &&
                        Y["indexOf "](
                            "CERTIFICATE "
                        )
                    ) {
                        var J = new X509();
                        J["readCertPEM "](Y);
                        var C =
                            J[
                                "getSerialNumberHex "
                                ]();
                        this["asn1CertSN "] = new KJUR[
                            "asn1 "
                            ]["DERInteger "]({
                            "hex ": C
                        });
                    }
                }
            }),
            (this["oid "] = "2.5.29.35 "),
        p !== undefined &&
        (p["kid "] !== undefined &&
        this["setKIDByParam "](
            p["kid "]
        ),
        p["issuer "] !== undefined &&
        this[
            "setCertIssuerByParam "
            ](p["issuer "]),
        p["sn "] !== undefined &&
        this[
            "setCertSNByParam "
            ](p["sn "]),
        p["issuersn "] !== undefined &&
        typeof p["issuersn "] ===
        "string " &&
        p["issuersn "]["indexOf "](
            "BEGIN "
        ) != -0x1 &&
        p["issuersn "]["indexOf "](
            "CERTIFICATE "
        ) &&
        (this[
            "setCertSNByParam "
            ](p["issuersn "]),
            this[
                "setCertIssuerByParam "
                ](p["issuersn "])));
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "AuthorityKeyIdentifier "
            ],
        KJUR["asn1 "]["x509 "][
            "Extension "
            ]
    ),
    (KJUR["asn1 "]["x509 "][
        "SubjectKeyIdentifier "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "SubjectKeyIdentifier "
            ]["superclass "][
            "constructor "
            ]["call "](this, p);
        var n = KJUR,
            A = n["asn1 "],
            L = A["DEROctetString "];
        (this["asn1KID "] = null),
            (this["getExtnValueHex "] =
                function () {
                    return (
                        (this["asn1ExtnValue "] =
                            this["asn1KID "]),
                            this["asn1ExtnValue "][
                                "getEncodedHex "
                                ]()
                    );
                }),
            (this["setKIDByParam "] = function (
                S
            ) {
                if (S["str "] !== undefined || S["hex "] !== undefined)
                    this["asn1KID "] = new L(S);
                else {
                    if (
                        (typeof S === "object " &&
                            KJUR["crypto "]["Util "][
                                "isKey "
                                ](S)) ||
                        (typeof S === "string " &&
                            S["indexOf "]("BEGIN ") != -0x1)
                    ) {
                        var Y = S;
                        typeof S === "string " &&
                        (Y = KEYUTIL["getKey "](S));
                        var J = KEYUTIL["getKeyID "](Y);
                        this["asn1KID "] = new KJUR["asn1 "][
                            "DEROctetString "
                            ]({
                            "hex ": J
                        });
                    }
                }
            }),
            (this["oid "] = "2.5.29.14 "),
        p !== undefined &&
        p["kid "] !== undefined &&
        this["setKIDByParam "](
            p["kid "]
        );
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "SubjectKeyIdentifier "
            ],
        KJUR["asn1 "]["x509 "][
            "Extension "
            ]
    ),
    (KJUR["asn1 "]["x509 "][
        "AuthorityInfoAccess "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "AuthorityInfoAccess "
            ]["superclass "][
            "constructor "
            ]["call "](this, p),
            (this[
                "setAccessDescriptionArray "
                ] = function (n) {
                var A = new Array(),
                    L = KJUR,
                    S = L["asn1 "],
                    Y = S["DERSequence "];
                for (var J = 0x0; J < n["length "]; J++) {
                    var C = new S[
                            "DERObjectIdentifier "
                            ](n[J]["accessMethod "]),
                        V = new S["x509 "][
                            "GeneralName "
                            ](n[J]["accessLocation "]),
                        W = new Y({
                            "array ": [C, V]
                        });
                    A["push "](W);
                }
                this["asn1ExtnValue "] = new Y({
                    "array ": A
                });
            }),
            (this["getExtnValueHex "] =
                function () {
                    return this["asn1ExtnValue "][
                        "getEncodedHex "
                        ]();
                }),
            (this["oid "] =
                "1.3.6.1.5.5.7.1.1 "),
        p !== undefined &&
        p["array "] !== undefined &&
        this[
            "setAccessDescriptionArray "
            ](p["array "]);
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "AuthorityInfoAccess "
            ],
        KJUR["asn1 "]["x509 "][
            "Extension "
            ]
    ),
    (KJUR["asn1 "]["x509 "][
        "SubjectAltName "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "SubjectAltName "
            ]["superclass "][
            "constructor "
            ]["call "](this, p),
            (this["setNameArray "] = function (n) {
                this["asn1ExtnValue "] = new KJUR[
                    "asn1 "
                    ]["x509 "][
                    "GeneralNames "
                    ](n);
            }),
            (this["getExtnValueHex "] =
                function () {
                    return this["asn1ExtnValue "][
                        "getEncodedHex "
                        ]();
                }),
            (this["oid "] = "2.5.29.17 "),
        p !== undefined &&
        p["array "] !== undefined &&
        this["setNameArray "](
            p["array "]
        );
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "SubjectAltName "
            ],
        KJUR["asn1 "]["x509 "][
            "Extension "
            ]
    ),
    (KJUR["asn1 "]["x509 "][
        "IssuerAltName "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "IssuerAltName "
            ]["superclass "][
            "constructor "
            ]["call "](this, p),
            (this["setNameArray "] = function (n) {
                this["asn1ExtnValue "] = new KJUR[
                    "asn1 "
                    ]["x509 "][
                    "GeneralNames "
                    ](n);
            }),
            (this["getExtnValueHex "] =
                function () {
                    return this["asn1ExtnValue "][
                        "getEncodedHex "
                        ]();
                }),
            (this["oid "] = "2.5.29.18 "),
        p !== undefined &&
        p["array "] !== undefined &&
        this["setNameArray "](
            p["array "]
        );
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "IssuerAltName "
            ],
        KJUR["asn1 "]["x509 "][
            "Extension "
            ]
    ),
    (KJUR["asn1 "]["x509 "]["CRL "] = function (p) {
        KJUR["asn1 "]["x509 "]["CRL "][
            "superclass "
            ]["constructor "]["call "](this);
        var n = null,
            A = null,
            L = null,
            g = null,
            S = null;
        (this["sign "] = function () {
            (this[
                "asn1SignatureAlg "
                ] =
                this["asn1TBSCertList "][
                    "asn1SignatureAlg "
                    ]),
                (sig = new KJUR["crypto "][
                    "Signature "
                    ]({
                    "alg ":
                        this[
                            "asn1SignatureAlg "
                            ]["nameAlg "],
                    "prov ":
                        "cryptojs / jsrsa "
                })),
                sig["init "](this["prvKey "]),
                sig["updateHex "](
                    this["asn1TBSCertList "][
                        "getEncodedHex "
                        ]()
                ),
                (this["hexSig "] = sig["sign "]()),
                (this["asn1Sig "] = new KJUR["asn1 "][
                    "DERBitString "
                    ]({
                    "hex ": "00 " + this["hexSig "]
                }));
            var Y = new KJUR["asn1 "][
                "DERSequence "
                ]({
                "array ": [
                    this["asn1TBSCertList "],
                    this[
                        "asn1SignatureAlg "
                        ],
                    this["asn1Sig "]
                ]
            });
            (this["hTLV "] =
                Y["getEncodedHex "]()),
                (this["isModified "] = ![]);
        }),
            (this["getEncodedHex "] =
                function () {
                    if (
                        this["isModified "] == ![] &&
                        this["hTLV "] != null
                    )
                        return this["hTLV "];
                    throw "not signed yet ";
                }),
            (this["getPEMString "] = function () {
                var Y = hextob64nl(
                    this["getEncodedHex "]()
                );
                return (
                    "-----BEGIN X509 CRL-----" +
                    Y +
                    "-----END X509 CRL-----"
                );
            }),
        p !== undefined &&
        (p["tbsobj "] !== undefined &&
        (this[
            "asn1TBSCertList "
            ] = p["tbsobj "]),
        p["prvkeyobj "] !== undefined &&
        (this["prvKey "] =
            p["prvkeyobj "]));
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "]["CRL "],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "]["x509 "][
        "TBSCertList "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "TBSCertList "
            ]["superclass "][
            "constructor "
            ]["call "](this);
        var n = null,
            A = KJUR,
            L = A["asn1 "],
            S = L["DERSequence "],
            Y = L["x509 "],
            J = Y["Time "];
        (this[
            "setSignatureAlgByParam "
            ] = function (C) {
            this["asn1SignatureAlg "] =
                new Y[
                    "AlgorithmIdentifier "
                    ](C);
        }),
            (this[
                "setIssuerByParam "
                ] = function (C) {
                this["asn1Issuer "] = new Y[
                    "X500Name "
                    ](C);
            }),
            (this[
                "setThisUpdateByParam "
                ] = function (C) {
                this["asn1ThisUpdate "] =
                    new J(C);
            }),
            (this[
                "setNextUpdateByParam "
                ] = function (C) {
                this["asn1NextUpdate "] =
                    new J(C);
            }),
            (this["addRevokedCert "] =
                function (C, V) {
                    var W = {};
                    C != undefined && C != null && (W["sn "] = C);
                    V != undefined && V != null && (W["time "] = V);
                    var l = new Y["CRLEntry "](W);
                    this["aRevokedCert "][
                        "push "
                        ](l);
                }),
            (this["getEncodedHex "] =
                function () {
                    this["asn1Array "] = new Array();
                    this["asn1Version "] != null &&
                    this["asn1Array "]["push "](
                        this["asn1Version "]
                    );
                    this["asn1Array "]["push "](
                        this[
                            "asn1SignatureAlg "
                            ]
                    ),
                        this["asn1Array "]["push "](
                            this["asn1Issuer "]
                        ),
                        this["asn1Array "]["push "](
                            this["asn1ThisUpdate "]
                        );
                    this["asn1NextUpdate "] !=
                    null &&
                    this["asn1Array "]["push "](
                        this["asn1NextUpdate "]
                    );
                    if (
                        this["aRevokedCert "][
                            "length "
                            ] > 0x0
                    ) {
                        var C = new S({
                            "array ":
                                this["aRevokedCert "]
                        });
                        this["asn1Array "]["push "](C);
                    }
                    var V = new S({
                        "array ": this["asn1Array "]
                    });
                    return (
                        (this["hTLV "] =
                            V["getEncodedHex "]()),
                            (this["isModified "] = ![]),
                            this["hTLV "]
                    );
                }),
            (this["_initialize "] = function () {
                (this["asn1Version "] = null),
                    (this[
                        "asn1SignatureAlg "
                        ] = null),
                    (this["asn1Issuer "] = null),
                    (this["asn1ThisUpdate "] =
                        null),
                    (this["asn1NextUpdate "] =
                        null),
                    (this["aRevokedCert "] =
                        new Array());
            }),
            this["_initialize "]();
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "TBSCertList "
            ],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "]["x509 "][
        "CRLEntry "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "CRLEntry "
            ]["superclass "][
            "constructor "
            ]["call "](this);
        var n = null,
            A = null,
            L = KJUR,
            g = L["asn1 "];
        (this["setCertSerial "] = function (
            S
        ) {
            this["sn "] = new g["DERInteger "](S);
        }),
            (this[
                "setRevocationDate "
                ] = function (S) {
                this["time "] = new g["x509 "][
                    "Time "
                    ](S);
            }),
            (this["getEncodedHex "] =
                function () {
                    var S = new g["DERSequence "]({
                        "array ": [this["sn "], this["time "]]
                    });
                    return (
                        (this["TLV "] =
                            S["getEncodedHex "]()),
                            this["TLV "]
                    );
                }),
        p !== undefined &&
        (p["time "] !== undefined &&
        this[
            "setRevocationDate "
            ](p["time "]),
        p["sn "] !== undefined &&
        this["setCertSerial "](
            p["sn "]
        ));
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "CRLEntry "
            ],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "]["x509 "][
        "X500Name "
        ] = function (p) {
        KJUR["asn1 "]["x509 "][
            "X500Name "
            ]["superclass "][
            "constructor "
            ]["call "](this),
            (this["asn1Array "] = new Array());
        var n = KJUR,
            A = n["asn1 "],
            L = A["x509 "],
            g = pemtohex;
        (this["setByString "] = function (Y) {
            var J = Y["split "](" / ");
            J["shift "]();
            var C = [];
            for (var V = 0x0; V < J["length "]; V++) {
                if (J[V]["match "](/^[^=]+=.+$/))
                    C["push "](J[V]);
                else {
                    var W = C["length "] - 0x1;
                    C[W] = C[W] + " / " + J[V];
                }
            }
            for (var V = 0x0; V < C["length "]; V++) {
                this["asn1Array "]["push "](
                    new L["RDN "]({
                        "str ": C[V]
                    })
                );
            }
        }),
            (this["setByLdapString "] =
                function (Y) {
                    var J =
                        L["X500Name "][
                            "ldapToCompat "
                            ](Y);
                    this["setByString "](J);
                }),
            (this["setByObject "] = function (Y) {
                for (var J in Y) {
                    if (
                        Y["hasOwnProperty "](J)
                    ) {
                        var C = new KJUR["asn1 "]["x509 "][
                            "RDN "
                            ]({
                            "str ": J + " = " + Y[J]
                        });
                        this["asn1Array "]
                            ? this["asn1Array "][
                                "push "
                                ](C)
                            : (this["asn1Array "] = [C]);
                    }
                }
            }),
            (this["getEncodedHex "] =
                function () {
                    if (typeof this["hTLV "] == "string ")
                        return this["hTLV "];
                    var Y = new A["DERSequence "]({
                        "array ": this["asn1Array "]
                    });
                    return (
                        (this["hTLV "] =
                            Y["getEncodedHex "]()),
                            this["hTLV "]
                    );
                });
        if (p !== undefined) {
            if (p["str "] !== undefined)
                this["setByString "](p["str "]);
            else {
                if (p["ldapstr "] !== undefined)
                    this["setByLdapString "](
                        p["ldapstr "]
                    );
                else {
                    if (p["hex "] !== undefined)
                        this["hTLV "] = p["hex "];
                    else {
                        if (p["certissuer "] !== undefined) {
                            var S = new X509();
                            S["readCertPEM "](
                                p["certissuer "]
                            ),
                                (this["hTLV "] =
                                    S["getIssuerHex "]());
                        } else {
                            if (
                                p["certsubject "] !== undefined
                            ) {
                                var S = new X509();
                                S["readCertPEM "](
                                    p["certsubject "]
                                ),
                                    (this["hTLV "] =
                                        S[
                                            "getSubjectHex "
                                            ]());
                            } else
                                typeof p === "object " &&
                                p["certsubject "] ===
                                undefined &&
                                p["certissuer "] === undefined &&
                                this["setByObject "](p);
                        }
                    }
                }
            }
        }
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "][
            "X500Name "
            ],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "]["x509 "][
        "X500Name "
        ]["compatToLDAP "] = function (p) {
        if (p["substr "](0x0, 0x1) !== " / ")
            throw "malformed input ";
        var n = "";
        p = p["substr "](0x1);
        var a = p["split "](" / ");
        return (
            a["reverse "](),
                (a = a["map "](function (A) {
                    return A["replace "](/,/, "\, ");
                })),
                a["join "](", ")
        );
    }),
    (KJUR["asn1 "]["x509 "][
        "X500Name "
        ]["onelineToLDAP "] = function (p) {
        return KJUR["asn1 "]["x509 "][
            "X500Name "
            ]["compatToLDAP "](p);
    }),
    (KJUR["asn1 "]["x509 "][
        "X500Name "
        ]["ldapToCompat "] = function (p) {
        var n = p["split "](", "),
            a = ![],
            A = [];
        for (var L = 0x0; n["length "] > 0x0; L++) {
            var S = n["shift "]();
            if (a === !![]) {
                var Y = A["pop "](),
                    J = (Y + ", " + S)["replace "](/\\,/g, ", ");
                A["push "](J), (a = ![]);
            } else A["push "](S);
            S["substr "](-0x1, 0x1) === "\" && (a = !![]);
        }
        return (
            (A = A["map "](function (C) {
                return C["replace "](" / ", "\ / ");
            })),
                A["reverse "](),
            " / " + A["join "](" / ")
        );
    }),
    (KJUR["asn1 "]["x509 "][
        "X500Name "
        ]["ldapToOneline "] = function (p) {
        return KJUR["asn1 "]["x509 "][
            "X500Name "
            ]["ldapToCompat "](p);
    }),
    (KJUR["asn1 "]["x509 "]["RDN "] = function (p) {
        KJUR["asn1 "]["x509 "]["RDN "][
            "superclass "
            ]["constructor "]["call "](this),
            (this["asn1Array "] = new Array()),
            (this["addByString "] = function (n) {
                this["asn1Array "]["push "](
                    new KJUR["asn1 "]["x509 "][
                        "AttributeTypeAndValue "
                        ]({
                        "str ": n
                    })
                );
            }),
            (this[
                "addByMultiValuedString "
                ] = function (n) {
                var A =
                    KJUR["asn1 "]["x509 "]["RDN "][
                        "parseString "
                        ](n);
                for (var L = 0x0; L < A["length "]; L++) {
                    this["addByString "](A[L]);
                }
            }),
            (this["getEncodedHex "] =
                function () {
                    var n = new KJUR["asn1 "]["DERSet "]({
                        "array ": this["asn1Array "]
                    });
                    return (
                        (this["TLV "] =
                            n["getEncodedHex "]()),
                            this["TLV "]
                    );
                }),
        p !== undefined &&
        p["str "] !== undefined &&
        this[
            "addByMultiValuedString "
            ](p["str "]);
    }),
    YAHOO["lang "]["extend "](
        KJUR["asn1 "]["x509 "]["RDN "],
        KJUR["asn1 "]["ASN1Object "]
    ),
    (KJUR["asn1 "]["x509 "]["RDN "][
        "parseString "
        ] = function (p) {
        var n = p["split "](/\+/),
            a = ![],
            A = [];
        for (var L = 0x0; n["length "] > 0x0; L++) {
            var S = n["shift "]();
            if (a === !![]) {
                var Y = A["pop "](),
                    J = (Y + " + " + S)["replace "](/\\\+/g, " + ");
                A["push "](J), (a = ![]);
            } else A["push "](S);
            S["substr "](-0x1, 0x1) === "\" && (a = !![]);
        }
        var C = ![],
            V = [];
        for (var L = 0x0; A["length "] > 0x0; L++) {
            var S = A["shift "]();
            if (C === !![]) {
                var W = V["pop "]();
                if (S["match "](/"$ /)) {
                    var J = (W + "+" + S)["replace"](/^([^=]+)="(.*)"$/, "$1=$2");
                    V["push"](J),
                        (C = ![]);
                } else V["push"](W + "+" + S);
            } else V["push"](S);
            S["match"](/^[^=]+="/) && (C = !![]);
        }
        return V;
    }), (KJUR["asn1"]["x509"]["AttributeTypeAndValue"] = function (p) {
    KJUR["asn1"]["x509"]["AttributeTypeAndValue"]["superclass"]["constructor"]["call"](this);
    var n = null,
        A = null,
        L = "utf8",
        g = KJUR,
        S = g["asn1"];
    (this["setByString"] = function (Y) {
        var J = Y["match"](/^([^=]+)=(.+)$/);
        if (J) this["setByAttrTypeAndValueStr"](J[0x1], J[0x2]);
        else throw ("malformed attrTypeAndValueStr: " + Y);
    }),
        (this["setByAttrTypeAndValueStr"] = function (Y, J) {
            this["typeObj"] = KJUR["asn1"]["x509"]["OID"]["atype2obj"](Y);
            var C = L;
            Y == "C" && (C = "prn"),
                (this["valueObj"] = this["getValueObj"](C, J));
        }),
        (this["getValueObj"] = function (Y, J) {
            if (Y == "utf8") return new S["DERUTF8String"]({
                "str": J
            });
            if (Y == "prn") return new S["DERPrintableString"]({
                "str": J
            });
            if (Y == "tel") return new S["DERTeletexString"]({
                "str": J
            });
            if (Y == "ia5") return new S["DERIA5String"]({
                "str": J
            });
            throw ("unsupported directory string type: type=" + Y + " value=" + J);
        }),
        (this["getEncodedHex"] = function () {
            var Y = new S["DERSequence"]({
                "array": [this["typeObj"], this["valueObj"]]
            });
            return ((this["TLV"] = Y["getEncodedHex"]()), this["TLV"]);
        }),
    p !== undefined && p["str"] !== undefined && this["setByString"](p["str"]);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["x509"]["AttributeTypeAndValue"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["x509"]["SubjectPublicKeyInfo"] = function (p) {
    KJUR["asn1"]["x509"]["SubjectPublicKeyInfo"]["superclass"]["constructor"]["call"](this);
    var A = null,
        L = null,
        S = KJUR,
        Y = S["asn1"],
        J = Y["DERInteger"],
        C = Y["DERBitString"],
        V = Y["DERObjectIdentifier"],
        W = Y["DERSequence"],
        R = Y["ASN1Util"]["newObject"],
        B = Y["x509"],
        F = B["AlgorithmIdentifier"],
        E = S["crypto"],
        s = E["ECDSA"],
        I = E["DSA"];
    (this["getASN1Object"] = function () {
        if (this["asn1AlgId"] == null || this["asn1SubjPKey"] == null) throw "algId and/or subjPubKey not set";
        var K = new W({
            "array": [this["asn1AlgId"], this["asn1SubjPKey"]]
        });
        return K;
    }),
        (this["getEncodedHex"] = function () {
            var K = this["getASN1Object"]();
            return ((this["hTLV"] = K["getEncodedHex"]()), this["hTLV"]);
        }),
        (this["setPubKey"] = function (K) {
            try {
                if (K instanceof RSAKey) {
                    var T = R({
                            "seq": [{
                                "int": {
                                    "bigint": K["n"]
                                }
                            },
                                {
                                    "int": {
                                        "int": K["e"]
                                    }
                                }]
                        }),
                        Z = T["getEncodedHex"]();
                    (this["asn1AlgId"] = new F({
                        "name": "rsaEncryption"
                    })),
                        (this["asn1SubjPKey"] = new C({
                            "hex": "00" + Z
                        }));
                }
            } catch (U) {
            }
            try {
                if (K instanceof KJUR["crypto"]["ECDSA"]) {
                    var w = new V({
                        "name": K["curveName"]
                    });
                    (this["asn1AlgId"] = new F({
                        "name": "ecPublicKey",
                        "asn1params": w
                    })),
                        (this["asn1SubjPKey"] = new C({
                            "hex": "00" + K["pubKeyHex"]
                        }));
                }
            } catch (H) {
            }
            try {
                if (K instanceof KJUR["crypto"]["DSA"]) {
                    var w = new R({
                        "seq": [{
                            "int": {
                                "bigint": K["p"]
                            }
                        },
                            {
                                "int": {
                                    "bigint": K["q"]
                                }
                            },
                            {
                                "int": {
                                    "bigint": K["g"]
                                }
                            }]
                    });
                    this["asn1AlgId"] = new F({
                        "name": "dsa",
                        "asn1params": w
                    });
                    var M = new J({
                        "bigint": K["y"]
                    });
                    this["asn1SubjPKey"] = new C({
                        "hex": "00" + M["getEncodedHex"]()
                    });
                }
            } catch (O) {
            }
        }),
    p !== undefined && this["setPubKey"](p);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["x509"]["SubjectPublicKeyInfo"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["x509"]["Time"] = function (p) {
    KJUR["asn1"]["x509"]["Time"]["superclass"]["constructor"]["call"](this);
    var n = null,
        A = null,
        L = KJUR,
        S = L["asn1"],
        Y = S["DERUTCTime"],
        J = S["DERGeneralizedTime"];
    (this["setTimeParams"] = function (C) {
        this["timeParams"] = C;
    }),
        (this["getEncodedHex"] = function () {
            var C = null;
            return (this["timeParams"] != null ? this["type"] == "utc" ? (C = new Y(this["timeParams"])) : (C = new J(this["timeParams"])) : this["type"] == "utc" ? (C = new Y()) : (C = new J()), (this["TLV"] = C["getEncodedHex"]()), this["TLV"]);
        }),
        (this["type"] = "utc"),
    p !== undefined && (p["type"] !== undefined ? (this["type"] = p["type"]) : p["str"] !== undefined && (p["str"]["match"](/^[0-9]{12}Z$/) && (this["type"] = "utc"), p["str"]["match"](/^[0-9]{14}Z$/) && (this["type"] = "gen")), (this["timeParams"] = p));
}), YAHOO["lang"]["extend"](KJUR["asn1"]["x509"]["Time"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["x509"]["AlgorithmIdentifier"] = function (p) {
    KJUR["asn1"]["x509"]["AlgorithmIdentifier"]["superclass"]["constructor"]["call"](this),
        (this["nameAlg"] = null),
        (this["asn1Alg"] = null),
        (this["asn1Params"] = null),
        (this["paramEmpty"] = ![]);
    var n = KJUR,
        A = n["asn1"];
    this["getEncodedHex"] = function () {
        if (this["nameAlg"] === null && this["asn1Alg"] === null) throw "algorithm not specified";
        this["nameAlg"] !== null && this["asn1Alg"] === null && (this["asn1Alg"] = A["x509"]["OID"]["name2obj"](this["nameAlg"]));
        var g = [this["asn1Alg"]];
        this["asn1Params"] !== null && g["push"](this["asn1Params"]);
        var S = new A["DERSequence"]({
            "array": g
        });
        return ((this["hTLV"] = S["getEncodedHex"]()), this["hTLV"]);
    };
    p !== undefined && (p["name"] !== undefined && (this["nameAlg"] = p["name"]), p["asn1params"] !== undefined && (this["asn1Params"] = p["asn1params"]), p["paramempty"] !== undefined && (this["paramEmpty"] = p["paramempty"]));
    if (this["asn1Params"] === null && this["paramEmpty"] === ![] && this["nameAlg"] !== null) {
        var L = this["nameAlg"]["toLowerCase"]();
        L["substr"](-0x7, 0x7) !== "withdsa" && L["substr"](-0x9, 0x9) !== "withecdsa" && (this["asn1Params"] = new A["DERNull"]());
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["x509"]["AlgorithmIdentifier"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["x509"]["GeneralName"] = function (p) {
    KJUR["asn1"]["x509"]["GeneralName"]["superclass"]["constructor"]["call"](this);
    var n = null,
        A = null,
        L = {
            "rfc822": "81",
            "dns": "82",
            "dn": "a4",
            "uri": "86",
            "ip": "87"
        },
        S = KJUR,
        Y = S["asn1"],
        J = Y["DERSequence"],
        C = Y["DEROctetString"],
        V = Y["DERIA5String"],
        W = Y["DERTaggedObject"],
        R = Y["ASN1Object"],
        B = Y["x509"]["X500Name"],
        F = pemtohex;
    (this["explicit"] = ![]),
        (this["setByParam"] = function (E) {
            var I = null,
                K = null;
            if (E === undefined) return;
            E["rfc822"] !== undefined && ((this["type"] = "rfc822"), (K = new V({
                "str": E[this["type"]]
            })));
            E["dns"] !== undefined && ((this["type"] = "dns"), (K = new V({
                "str": E[this["type"]]
            })));
            E["uri"] !== undefined && ((this["type"] = "uri"), (K = new V({
                "str": E[this["type"]]
            })));
            E["dn"] !== undefined && ((this["type"] = "dn"), (this["explicit"] = !![]), typeof E["dn"] === "string" ? (K = new B({
                "str": E["dn"]
            })) : E["dn"] instanceof KJUR["asn1"]["x509"]["X500Name"] ? (K = E["dn"]) : (K = new B(E["dn"])));
            E["ldapdn"] !== undefined && ((this["type"] = "dn"), (this["explicit"] = !![]), (K = new B({
                "ldapstr": E["ldapdn"]
            })));
            if (E["certissuer"] !== undefined) {
                (this["type"] = "dn"),
                    (this["explicit"] = !![]);
                var T = E["certissuer"],
                    Z = null;
                T["match"](/^[0-9A-Fa-f]+$/) && Z == T;
                T["indexOf"]("-----BEGIN ") != -0x1 && (Z = F(T));
                if (Z == null) throw "certissuer param not cert";
                var M = new X509();
                M["hex"] = Z;
                var U = M["getIssuerHex"]();
                (K = new R()),
                    (K["hTLV"] = U);
            }
            if (E["certsubj"] !== undefined) {
                (this["type"] = "dn"),
                    (this["explicit"] = !![]);
                var T = E["certsubj"],
                    Z = null;
                T["match"](/^[0-9A-Fa-f]+$/) && Z == T;
                T["indexOf"]("-----BEGIN ") != -0x1 && (Z = F(T));
                if (Z == null) throw "certsubj param not cert";
                var M = new X509();
                M["hex"] = Z;
                var U = M["getSubjectHex"]();
                (K = new R()),
                    (K["hTLV"] = U);
            }
            if (E["ip"] !== undefined) {
                (this["type"] = "ip"),
                    (this["explicit"] = ![]);
                var H = E["ip"],
                    O,
                    X = "malformed IP address";
                if (H["match"](/^[0-9.]+[.][0-9.]+$/)) {
                    O = intarystrtohex("[" + H["split"](".")["join"](",") + "]");
                    if (O["length"] !== 0x8) throw X;
                } else {
                    if (H["match"](/^[0-9A-Fa-f:]+:[0-9A-Fa-f:]+$/)) O = ipv6tohex(H);
                    else {
                        if (H["match"](/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) O = H;
                        else throw X;
                    }
                }
                K = new C({
                    "hex": O
                });
            }
            if (this["type"] == null) throw ("unsupported type in params=" + E);
            this["asn1Obj"] = new W({
                "explicit": this["explicit"],
                "tag": L[this["type"]],
                "obj": K
            });
        }),
        (this["getEncodedHex"] = function () {
            return this["asn1Obj"]["getEncodedHex"]();
        }),
    p !== undefined && this["setByParam"](p);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["x509"]["GeneralName"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["x509"]["GeneralNames"] = function (p) {
    KJUR["asn1"]["x509"]["GeneralNames"]["superclass"]["constructor"]["call"](this);
    var n = null,
        A = KJUR,
        L = A["asn1"];
    (this["setByParamArray"] = function (S) {
        for (var Y = 0x0; Y < S["length"]; Y++) {
            var J = new L["x509"]["GeneralName"](S[Y]);
            this["asn1Array"]["push"](J);
        }
    }),
        (this["getEncodedHex"] = function () {
            var g = new L["DERSequence"]({
                "array": this["asn1Array"]
            });
            return g["getEncodedHex"]();
        }),
        (this["asn1Array"] = new Array()),
    typeof p != "undefined" && this["setByParamArray"](p);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["x509"]["GeneralNames"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["x509"]["DistributionPointName"] = function (p) {
    KJUR["asn1"]["x509"]["DistributionPointName"]["superclass"]["constructor"]["call"](this);
    var n = null,
        A = null,
        L = null,
        S = null,
        Y = KJUR,
        J = Y["asn1"],
        C = J["DERTaggedObject"];
    this["getEncodedHex"] = function () {
        if (this["type"] != "full") throw ("currently type shall be 'full': " + this["type"]);
        return ((this["asn1Obj"] = new C({
            "explicit": ![],
            "tag": this["tag"],
            "obj": this["asn1V"]
        })), (this["hTLV"] = this["asn1Obj"]["getEncodedHex"]()), this["hTLV"]);
    };
    if (p !== undefined) {
        if (J["x509"]["GeneralNames"]["prototype"]["isPrototypeOf"](p)) (this["type"] = "full"),
            (this["tag"] = "a0"),
            (this["asn1V"] = p);
        else throw "This class supports GeneralNames only as argument";
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["x509"]["DistributionPointName"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["x509"]["DistributionPoint"] = function (p) {
    KJUR["asn1"]["x509"]["DistributionPoint"]["superclass"]["constructor"]["call"](this);
    var n = null,
        A = KJUR,
        L = A["asn1"];
    (this["getEncodedHex"] = function () {
        var g = new L["DERSequence"]();
        if (this["asn1DP"] != null) {
            var S = new L["DERTaggedObject"]({
                "explicit": !![],
                "tag": "a0",
                "obj": this["asn1DP"]
            });
            g["appendASN1Object"](S);
        }
        return ((this["hTLV"] = g["getEncodedHex"]()), this["hTLV"]);
    }),
    p !== undefined && p["dpobj"] !== undefined && (this["asn1DP"] = p["dpobj"]);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["x509"]["DistributionPoint"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["x509"]["OID"] = new (function (p) {
    (this["atype2oidList"] = {
        "CN": "2.5.4.3",
        "L": "2.5.4.7",
        "ST": "2.5.4.8",
        "O": "2.5.4.10",
        "OU": "2.5.4.11",
        "C": "2.5.4.6",
        "STREET": "2.5.4.9",
        "DC": "0.9.2342.19200300.100.1.25",
        "UID": "0.9.2342.19200300.100.1.1",
        "SN": "2.5.4.4",
        "T": "2.5.4.12",
        "DN": "2.5.4.49",
        "E": "1.2.840.113549.1.9.1",
        "description": "2.5.4.13",
        "businessCategory": "2.5.4.15",
        "postalCode": "2.5.4.17",
        "serialNumber": "2.5.4.5",
        "uniqueIdentifier": "2.5.4.45",
        "organizationIdentifier": "2.5.4.97",
        "jurisdictionOfIncorporationL": "1.3.6.1.4.1.311.60.2.1.1",
        "jurisdictionOfIncorporationSP": "1.3.6.1.4.1.311.60.2.1.2",
        "jurisdictionOfIncorporationC": "1.3.6.1.4.1.311.60.2.1.3"
    }),
        (this["name2oidList"] = {
            "sha1": "1.3.14.3.2.26",
            "sha256": "2.16.840.1.101.3.4.2.1",
            "sha384": "2.16.840.1.101.3.4.2.2",
            "sha512": "2.16.840.1.101.3.4.2.3",
            "sha224": "2.16.840.1.101.3.4.2.4",
            "md5": "1.2.840.113549.2.5",
            "md2": "1.3.14.7.2.2.1",
            "ripemd160": "1.3.36.3.2.1",
            "MD2withRSA": "1.2.840.113549.1.1.2",
            "MD4withRSA": "1.2.840.113549.1.1.3",
            "MD5withRSA": "1.2.840.113549.1.1.4",
            "SHA1withRSA": "1.2.840.113549.1.1.5",
            "SHA224withRSA": "1.2.840.113549.1.1.14",
            "SHA256withRSA": "1.2.840.113549.1.1.11",
            "SHA384withRSA": "1.2.840.113549.1.1.12",
            "SHA512withRSA": "1.2.840.113549.1.1.13",
            "SHA1withECDSA": "1.2.840.10045.4.1",
            "SHA224withECDSA": "1.2.840.10045.4.3.1",
            "SHA256withECDSA": "1.2.840.10045.4.3.2",
            "SHA384withECDSA": "1.2.840.10045.4.3.3",
            "SHA512withECDSA": "1.2.840.10045.4.3.4",
            "dsa": "1.2.840.10040.4.1",
            "SHA1withDSA": "1.2.840.10040.4.3",
            "SHA224withDSA": "2.16.840.1.101.3.4.3.1",
            "SHA256withDSA": "2.16.840.1.101.3.4.3.2",
            "rsaEncryption": "1.2.840.113549.1.1.1",
            "commonName": "2.5.4.3",
            "countryName": "2.5.4.6",
            "localityName": "2.5.4.7",
            "stateOrProvinceName": "2.5.4.8",
            "streetAddress": "2.5.4.9",
            "organizationName": "2.5.4.10",
            "organizationalUnitName": "2.5.4.11",
            "domainComponent": "0.9.2342.19200300.100.1.25",
            "userId": "0.9.2342.19200300.100.1.1",
            "surname": "2.5.4.4",
            "title": "2.5.4.12",
            "distinguishedName": "2.5.4.49",
            "emailAddress": "1.2.840.113549.1.9.1",
            "description": "2.5.4.13",
            "businessCategory": "2.5.4.15",
            "postalCode": "2.5.4.17",
            "uniqueIdentifier": "2.5.4.45",
            "organizationIdentifier": "2.5.4.97",
            "jurisdictionOfIncorporationL": "1.3.6.1.4.1.311.60.2.1.1",
            "jurisdictionOfIncorporationSP": "1.3.6.1.4.1.311.60.2.1.2",
            "jurisdictionOfIncorporationC": "1.3.6.1.4.1.311.60.2.1.3",
            "subjectKeyIdentifier": "2.5.29.14",
            "keyUsage": "2.5.29.15",
            "subjectAltName": "2.5.29.17",
            "issuerAltName": "2.5.29.18",
            "basicConstraints": "2.5.29.19",
            "nameConstraints": "2.5.29.30",
            "cRLDistributionPoints": "2.5.29.31",
            "certificatePolicies": "2.5.29.32",
            "authorityKeyIdentifier": "2.5.29.35",
            "policyConstraints": "2.5.29.36",
            "extKeyUsage": "2.5.29.37",
            "authorityInfoAccess": "1.3.6.1.5.5.7.1.1",
            "ocsp": "1.3.6.1.5.5.7.48.1",
            "caIssuers": "1.3.6.1.5.5.7.48.2",
            "anyExtendedKeyUsage": "2.5.29.37.0",
            "serverAuth": "1.3.6.1.5.5.7.3.1",
            "clientAuth": "1.3.6.1.5.5.7.3.2",
            "codeSigning": "1.3.6.1.5.5.7.3.3",
            "emailProtection": "1.3.6.1.5.5.7.3.4",
            "timeStamping": "1.3.6.1.5.5.7.3.8",
            "ocspSigning": "1.3.6.1.5.5.7.3.9",
            "ecPublicKey": "1.2.840.10045.2.1",
            "secp256r1": "1.2.840.10045.3.1.7",
            "secp256k1": "1.3.132.0.10",
            "secp384r1": "1.3.132.0.34",
            "pkcs5PBES2": "1.2.840.113549.1.5.13",
            "pkcs5PBKDF2": "1.2.840.113549.1.5.12",
            "des-EDE3-CBC": "1.2.840.113549.3.7",
            "data": "1.2.840.113549.1.7.1",
            "signed-data": "1.2.840.113549.1.7.2",
            "enveloped-data": "1.2.840.113549.1.7.3",
            "digested-data": "1.2.840.113549.1.7.5",
            "encrypted-data": "1.2.840.113549.1.7.6",
            "authenticated-data": "1.2.840.113549.1.9.16.1.2",
            "tstinfo": "1.2.840.113549.1.9.16.1.4",
            "extensionRequest": "1.2.840.113549.1.9.14"
        }),
        (this["objCache"] = {}),
        (this["name2obj"] = function (n) {
            if (typeof this["objCache"][n] != "undefined") return this["objCache"][n];
            if (typeof this["name2oidList"][n] == "undefined") throw ("Name of ObjectIdentifier not defined: " + n);
            var A = this["name2oidList"][n],
                L = new KJUR["asn1"]["DERObjectIdentifier"]({
                    "oid": A
                });
            return (this["objCache"][n] = L),
                L;
        }),
        (this["atype2obj"] = function (n) {
            if (typeof this["objCache"][n] != "undefined") return this["objCache"][n];
            if (typeof this["atype2oidList"][n] == "undefined") throw ("AttributeType name undefined: " + n);
            var A = this["atype2oidList"][n],
                L = new KJUR["asn1"]["DERObjectIdentifier"]({
                    "oid": A
                });
            return (this["objCache"][n] = L),
                L;
        });
})()), (KJUR["asn1"]["x509"]["OID"]["oid2name"] = function (p) {
    var n = KJUR["asn1"]["x509"]["OID"]["name2oidList"];
    for (var A in n) {
        if (n[A] == p) return A;
    }
    return "";
}), (KJUR["asn1"]["x509"]["OID"]["oid2atype"] = function (p) {
    var n = KJUR["asn1"]["x509"]["OID"]["atype2oidList"];
    for (var A in n) {
        if (n[A] == p) return A;
    }
    return p;
}), (KJUR["asn1"]["x509"]["OID"]["name2oid"] = function (p) {
    var n = KJUR["asn1"]["x509"]["OID"]["name2oidList"];
    if (n[p] === undefined) return "";
    return n[p];
}), (KJUR["asn1"]["x509"]["X509Util"] = {}), (KJUR["asn1"]["x509"]["X509Util"]["newCertPEM"] = function (p) {
    var n = KJUR["asn1"]["x509"],
        A = n["TBSCertificate"],
        L = n["Certificate"],
        S = new A();
    if (p["serial"] !== undefined) S["setSerialNumberByParam"](p["serial"]);
    else throw "serial number undefined.";
    if (typeof p["sigalg"]["name"] === "string") S["setSignatureAlgByParam"](p["sigalg"]);
    else throw "unproper signature algorithm name";
    if (p["issuer"] !== undefined) S["setIssuerByParam"](p["issuer"]);
    else throw "issuer name undefined.";
    if (p["notbefore"] !== undefined) S["setNotBeforeByParam"](p["notbefore"]);
    else throw "notbefore undefined.";
    if (p["notafter"] !== undefined) S["setNotAfterByParam"](p["notafter"]);
    else throw "notafter undefined.";
    if (p["subject"] !== undefined) S["setSubjectByParam"](p["subject"]);
    else throw "subject name undefined.";
    if (p["sbjpubkey"] !== undefined) S["setSubjectPublicKeyByGetKey"](p["sbjpubkey"]);
    else throw "subject public key undefined.";
    if (p["ext"] !== undefined && p["ext"]["length"] !== undefined) for (var Y = 0x0; Y < p["ext"]["length"]; Y++) {
        for (key in p["ext"][Y]) {
            S["appendExtensionByName"](key, p["ext"][Y][key]);
        }
    }
    if (p["cakey"] === undefined && p["sighex"] === undefined) throw "param cakey and sighex undefined.";
    var J = null,
        C = null;
    return (p["cakey"] && (p["cakey"]["isPrivate"] === !![] ? (J = p["cakey"]) : (J = KEYUTIL["getKey"]["apply"](null, p["cakey"])), (C = new L({
        "tbscertobj": S,
        "prvkeyobj": J
    })), C["sign"]()), p["sighex"] && ((C = new L({
        "tbscertobj": S
    })), C["setSignatureHex"](p["sighex"])), C["getPEMString"]());
});
(typeof KJUR == "undefined" || !KJUR) && (KJUR = {});
(typeof KJUR["asn1"] == "undefined" || !KJUR["asn1"]) && (KJUR["asn1"] = {});
(typeof KJUR["asn1"]["cms"] == "undefined" || !KJUR["asn1"]["cms"]) && (KJUR["asn1"]["cms"] = {});
(KJUR["asn1"]["cms"]["Attribute"] = function (p) {
    var n = [],
        A = KJUR,
        L = A["asn1"];
    L["cms"]["Attribute"]["superclass"]["constructor"]["call"](this),
        (this["getEncodedHex"] = function () {
            var S, Y, J;
            (S = new L["DERObjectIdentifier"]({
                "oid": this["attrTypeOid"]
            })),
                (Y = new L["DERSet"]({
                    "array": this["valueList"]
                }));
            try {
                Y["getEncodedHex"]();
            } catch (C) {
                throw ("fail valueSet.getEncodedHex in Attribute(1)/" + C);
            }
            J = new L["DERSequence"]({
                "array": [S, Y]
            });
            try {
                this["hTLV"] = J["getEncodedHex"]();
            } catch (V) {
                throw ("failed seq.getEncodedHex in Attribute(2)/" + V);
            }
            return this["hTLV"];
        });
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cms"]["Attribute"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["cms"]["ContentType"] = function (p) {
    var n = KJUR,
        A = n["asn1"];
    A["cms"]["ContentType"]["superclass"]["constructor"]["call"](this),
        (this["attrTypeOid"] = "1.2.840.113549.1.9.3");
    var L = null;
    if (typeof p != "undefined") {
        var L = new A["DERObjectIdentifier"](p);
        this["valueList"] = [L];
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cms"]["ContentType"], KJUR["asn1"]["cms"]["Attribute"]), (KJUR["asn1"]["cms"]["MessageDigest"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DEROctetString"],
        S = A["cms"];
    S["MessageDigest"]["superclass"]["constructor"]["call"](this),
        (this["attrTypeOid"] = "1.2.840.113549.1.9.4");
    if (p !== undefined) {
        if (p["eciObj"] instanceof S["EncapsulatedContentInfo"] && typeof p["hashAlg"] === "string") {
            var Y = p["eciObj"]["eContentValueHex"],
                J = p["hashAlg"],
                C = n["crypto"]["Util"]["hashHex"](Y, J),
                V = new L({
                    "hex": C
                });
            V["getEncodedHex"](),
                (this["valueList"] = [V]);
        } else {
            var V = new L(p);
            V["getEncodedHex"](),
                (this["valueList"] = [V]);
        }
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cms"]["MessageDigest"], KJUR["asn1"]["cms"]["Attribute"]), (KJUR["asn1"]["cms"]["SigningTime"] = function (p) {
    var n = KJUR,
        A = n["asn1"];
    A["cms"]["SigningTime"]["superclass"]["constructor"]["call"](this),
        (this["attrTypeOid"] = "1.2.840.113549.1.9.5");
    if (p !== undefined) {
        var L = new A["x509"]["Time"](p);
        try {
            L["getEncodedHex"]();
        } catch (g) {
            throw ("SigningTime.getEncodedHex() failed/" + g);
        }
        this["valueList"] = [L];
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cms"]["SigningTime"], KJUR["asn1"]["cms"]["Attribute"]), (KJUR["asn1"]["cms"]["SigningCertificate"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERSequence"],
        g = A["cms"],
        S = n["crypto"];
    g["SigningCertificate"]["superclass"]["constructor"]["call"](this),
        (this["attrTypeOid"] = "1.2.840.113549.1.9.16.2.12"),
        (this["setCerts"] = function (Y) {
            var J = [];
            for (var C = 0x0; C < Y["length"]; C++) {
                var V = pemtohex(Y[C]),
                    W = n["crypto"]["Util"]["hashHex"](V, "sha1"),
                    R = new A["DEROctetString"]({
                        "hex": W
                    });
                R["getEncodedHex"]();
                var B = new g["IssuerAndSerialNumber"]({
                    "cert": Y[C]
                });
                B["getEncodedHex"]();
                var F = new L({
                    "array": [R, B]
                });
                F["getEncodedHex"](),
                    J["push"](F);
            }
            var E = new L({
                "array": J
            });
            E["getEncodedHex"](),
                (this["valueList"] = [E]);
        }),
    p !== undefined && typeof p["array"] == "object" && this["setCerts"](p["array"]);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cms"]["SigningCertificate"], KJUR["asn1"]["cms"]["Attribute"]), (KJUR["asn1"]["cms"]["SigningCertificateV2"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERSequence"],
        S = A["x509"],
        Y = A["cms"],
        J = n["crypto"];
    Y["SigningCertificateV2"]["superclass"]["constructor"]["call"](this),
        (this["attrTypeOid"] = "1.2.840.113549.1.9.16.2.47"),
        (this["setCerts"] = function (V, W) {
            var R = [];
            for (var B = 0x0; B < V["length"]; B++) {
                var F = pemtohex(V[B]),
                    E = [];
                W !== "sha256" && E["push"](new S["AlgorithmIdentifier"]({
                    "name": W
                }));
                var I = J["Util"]["hashHex"](F, W),
                    K = new A["DEROctetString"]({
                        "hex": I
                    });
                K["getEncodedHex"](),
                    E["push"](K);
                var T = new Y["IssuerAndSerialNumber"]({
                    "cert": V[B]
                });
                T["getEncodedHex"](),
                    E["push"](T);
                var i = new L({
                    "array": E
                });
                i["getEncodedHex"](),
                    R["push"](i);
            }
            var Z = new L({
                "array": R
            });
            Z["getEncodedHex"](),
                (this["valueList"] = [Z]);
        });
    if (p !== undefined) {
        if (typeof p["array"] == "object") {
            var C = "sha256";
            typeof p["hashAlg"] == "string" && (C = p["hashAlg"]),
                this["setCerts"](p["array"], C);
        }
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cms"]["SigningCertificateV2"], KJUR["asn1"]["cms"]["Attribute"]), (KJUR["asn1"]["cms"]["IssuerAndSerialNumber"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERInteger"],
        S = A["cms"],
        Y = A["x509"],
        J = Y["X500Name"],
        C = X509;
    S["IssuerAndSerialNumber"]["superclass"]["constructor"]["call"](this);
    var V = null,
        W = null;
    (this["setByCertPEM"] = function (R) {
        var B = pemtohex(R),
            F = new C();
        F["hex"] = B;
        var E = F["getIssuerHex"]();
        (this["dIssuer"] = new J()),
            (this["dIssuer"]["hTLV"] = E);
        var s = F["getSerialNumberHex"]();
        this["dSerial"] = new L({
            "hex": s
        });
    }),
        (this["getEncodedHex"] = function () {
            var l = new A["DERSequence"]({
                "array": [this["dIssuer"], this["dSerial"]]
            });
            return ((this["hTLV"] = l["getEncodedHex"]()), this["hTLV"]);
        }),
    p !== undefined && (typeof p == "string" && p["indexOf"]("-----BEGIN ") != -0x1 && this["setByCertPEM"](p), p["issuer"] && p["serial"] && (p["issuer"] instanceof J ? (this["dIssuer"] = p["issuer"]) : (this["dIssuer"] = new J(p["issuer"])), p["serial"] instanceof L ? (this["dSerial"] = p["serial"]) : (this["dSerial"] = new L(p["serial"]))), typeof p["cert"] == "string" && this["setByCertPEM"](p["cert"]));
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cms"]["IssuerAndSerialNumber"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["cms"]["AttributeList"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["cms"];
    L["AttributeList"]["superclass"]["constructor"]["call"](this),
        (this["list"] = new Array()),
        (this["sortFlag"] = !![]),
        (this["add"] = function (g) {
            g instanceof L["Attribute"] && this["list"]["push"](g);
        }),
        (this["length"] = function () {
            return this["list"]["length"];
        }),
        (this["clear"] = function () {
            (this["list"] = new Array()),
                (this["hTLV"] = null),
                (this["hV"] = null);
        }),
        (this["getEncodedHex"] = function () {
            if (typeof this["hTLV"] == "string") return this["hTLV"];
            var g = new A["DERSet"]({
                "array": this["list"],
                "sortflag": this["sortFlag"]
            });
            return ((this["hTLV"] = g["getEncodedHex"]()), this["hTLV"]);
        }),
    p !== undefined && typeof p["sortflag"] != "undefined" && p["sortflag"] == ![] && (this["sortFlag"] = ![]);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cms"]["AttributeList"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["cms"]["SignerInfo"] = function (p) {
    var A = KJUR,
        L = A["asn1"],
        S = L["DERTaggedObject"],
        Y = L["cms"],
        J = Y["AttributeList"],
        C = Y["ContentType"],
        V = Y["EncapsulatedContentInfo"],
        W = Y["MessageDigest"],
        R = Y["SignedData"],
        B = L["x509"],
        F = B["AlgorithmIdentifier"],
        E = A["crypto"],
        s = KEYUTIL;
    Y["SignerInfo"]["superclass"]["constructor"]["call"](this),
        (this["dCMSVersion"] = new L["DERInteger"]({
            "int": 0x1
        })),
        (this["dSignerIdentifier"] = null),
        (this["dDigestAlgorithm"] = null),
        (this["dSignedAttrs"] = new J()),
        (this["dSigAlg"] = null),
        (this["dSig"] = null),
        (this["dUnsignedAttrs"] = new J()),
        (this["setSignerIdentifier"] = function (I) {
            if (typeof I == "string" && I["indexOf"]("CERTIFICATE") != -0x1 && I["indexOf"]("BEGIN") != -0x1 && I["indexOf"]("END") != -0x1) {
                var K = I;
                this["dSignerIdentifier"] = new Y["IssuerAndSerialNumber"]({
                    "cert": I
                });
            }
        }),
        (this["setForContentAndHash"] = function (I) {
            I !== undefined && (I["eciObj"] instanceof V && (this["dSignedAttrs"]["add"](new C({
                "oid": "1.2.840.113549.1.7.1"
            })), this["dSignedAttrs"]["add"](new W({
                "eciObj": I["eciObj"],
                "hashAlg": I["hashAlg"]
            }))), I["sdObj"] !== undefined && I["sdObj"] instanceof R && I["sdObj"]["digestAlgNameList"]["join"](":")["indexOf"](I["hashAlg"]) == -0x1 && I["sdObj"]["digestAlgNameList"]["push"](I["hashAlg"]), typeof I["hashAlg"] == "string" && (this["dDigestAlgorithm"] = new F({
                "name": I["hashAlg"]
            })));
        }),
        (this["sign"] = function (I, K) {
            this["dSigAlg"] = new F({
                "name": K
            });
            var T = this["dSignedAttrs"]["getEncodedHex"](),
                Z = s["getKey"](I),
                w = new E["Signature"]({
                    "alg": K
                });
            w["init"](Z),
                w["updateHex"](T);
            var M = w["sign"]();
            this["dSig"] = new L["DEROctetString"]({
                "hex": M
            });
        }),
        (this["addUnsigned"] = function (I) {
            (this["hTLV"] = null),
                (this["dUnsignedAttrs"]["hTLV"] = null),
                this["dUnsignedAttrs"]["add"](I);
        }),
        (this["getEncodedHex"] = function () {
            if (this["dSignedAttrs"] instanceof J && this["dSignedAttrs"]["length"]() == 0x0) throw "SignedAttrs length = 0 (empty)";
            var I = new S({
                    "obj": this["dSignedAttrs"],
                    "tag": "a0",
                    "explicit": ![]
                }),
                K = null;
            this["dUnsignedAttrs"]["length"]() > 0x0 && (K = new S({
                "obj": this["dUnsignedAttrs"],
                "tag": "a1",
                "explicit": ![]
            }));
            var T = [this["dCMSVersion"], this["dSignerIdentifier"], this["dDigestAlgorithm"], I, this["dSigAlg"], this["dSig"]];
            K != null && T["push"](K);
            var Z = new L["DERSequence"]({
                "array": T
            });
            return ((this["hTLV"] = Z["getEncodedHex"]()), this["hTLV"]);
        });
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cms"]["SignerInfo"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["cms"]["EncapsulatedContentInfo"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERTaggedObject"],
        S = A["DERSequence"],
        Y = A["DERObjectIdentifier"],
        J = A["DEROctetString"],
        C = A["cms"];
    C["EncapsulatedContentInfo"]["superclass"]["constructor"]["call"](this),
        (this["dEContentType"] = new Y({
            "name": "data"
        })),
        (this["dEContent"] = null),
        (this["isDetached"] = ![]),
        (this["eContentValueHex"] = null),
        (this["setContentType"] = function (V) {
            V["match"](/^[0-2][.][0-9.]+$/) ? (this["dEContentType"] = new Y({
                "oid": V
            })) : (this["dEContentType"] = new Y({
                "name": V
            }));
        }),
        (this["setContentValue"] = function (V) {
            V !== undefined && (typeof V["hex"] == "string" ? (this["eContentValueHex"] = V["hex"]) : typeof V["str"] == "string" && (this["eContentValueHex"] = utf8tohex(V["str"])));
        }),
        (this["setContentValueHex"] = function (V) {
            this["eContentValueHex"] = V;
        }),
        (this["setContentValueStr"] = function (V) {
            this["eContentValueHex"] = utf8tohex(V);
        }),
        (this["getEncodedHex"] = function () {
            if (typeof this["eContentValueHex"] != "string") throw "eContentValue not yet set";
            var V = new J({
                "hex": this["eContentValueHex"]
            });
            this["dEContent"] = new L({
                "obj": V,
                "tag": "a0",
                "explicit": !![]
            });
            var W = [this["dEContentType"]];
            !this["isDetached"] && W["push"](this["dEContent"]);
            var l = new S({
                "array": W
            });
            return ((this["hTLV"] = l["getEncodedHex"]()), this["hTLV"]);
        });
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cms"]["EncapsulatedContentInfo"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["cms"]["ContentInfo"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERTaggedObject"],
        g = A["DERSequence"],
        S = A["x509"];
    KJUR["asn1"]["cms"]["ContentInfo"]["superclass"]["constructor"]["call"](this),
        (this["dContentType"] = null),
        (this["dContent"] = null),
        (this["setContentType"] = function (Y) {
            typeof Y == "string" && (this["dContentType"] = S["OID"]["name2obj"](Y));
        }),
        (this["getEncodedHex"] = function () {
            var Y = new L({
                    "obj": this["dContent"],
                    "tag": "a0",
                    "explicit": !![]
                }),
                J = new g({
                    "array": [this["dContentType"], Y]
                });
            return ((this["hTLV"] = J["getEncodedHex"]()), this["hTLV"]);
        }),
    p !== undefined && (p["type"] && this["setContentType"](p["type"]), p["obj"] && p["obj"] instanceof A["ASN1Object"] && (this["dContent"] = p["obj"]));
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cms"]["ContentInfo"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["cms"]["SignedData"] = function (p) {
    var A = KJUR,
        L = A["asn1"],
        S = L["ASN1Object"],
        Y = L["DERInteger"],
        J = L["DERSet"],
        C = L["DERSequence"],
        V = L["DERTaggedObject"],
        W = L["cms"],
        R = W["EncapsulatedContentInfo"],
        B = W["SignerInfo"],
        F = W["ContentInfo"],
        E = L["x509"],
        s = E["AlgorithmIdentifier"];
    KJUR["asn1"]["cms"]["SignedData"]["superclass"]["constructor"]["call"](this),
        (this["dCMSVersion"] = new Y({
            "int": 0x1
        })),
        (this["dDigestAlgs"] = null),
        (this["digestAlgNameList"] = []),
        (this["dEncapContentInfo"] = new R()),
        (this["dCerts"] = null),
        (this["certificateList"] = []),
        (this["crlList"] = []),
        (this["signerInfoList"] = [new B()]),
        (this["addCertificatesByPEM"] = function (I) {
            var K = pemtohex(I),
                T = new S();
            (T["hTLV"] = K),
                this["certificateList"]["push"](T);
        }),
        (this["getEncodedHex"] = function () {
            if (typeof this["hTLV"] == "string") return this["hTLV"];
            if (this["dDigestAlgs"] == null) {
                var I = [];
                for (var K = 0x0; K < this["digestAlgNameList"]["length"]; K++) {
                    var T = this["digestAlgNameList"][K],
                        Z = new s({
                            "name": T
                        });
                    I["push"](Z);
                }
                this["dDigestAlgs"] = new J({
                    "array": I
                });
            }
            var M = [this["dCMSVersion"], this["dDigestAlgs"], this["dEncapContentInfo"]];
            if (this["dCerts"] == null) {
                if (this["certificateList"]["length"] > 0x0) {
                    var U = new J({
                        "array": this["certificateList"]
                    });
                    this["dCerts"] = new V({
                        "obj": U,
                        "tag": "a0",
                        "explicit": ![]
                    });
                }
            }
            this["dCerts"] != null && M["push"](this["dCerts"]);
            var H = new J({
                "array": this["signerInfoList"]
            });
            M["push"](H);
            var O = new C({
                "array": M
            });
            return ((this["hTLV"] = O["getEncodedHex"]()), this["hTLV"]);
        }),
        (this["getContentInfo"] = function () {
            this["getEncodedHex"]();
            var I = new F({
                "type": "signed-data",
                "obj": this
            });
            return I;
        }),
        (this["getContentInfoEncodedHex"] = function () {
            var I = this["getContentInfo"](),
                K = I["getEncodedHex"]();
            return K;
        }),
        (this["getPEM"] = function () {
            return hextopem(this["getContentInfoEncodedHex"](), "CMS");
        });
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cms"]["SignedData"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["cms"]["CMSUtil"] = new (function () {
})()), (KJUR["asn1"]["cms"]["CMSUtil"]["newSignedData"] = function (A) {
    var L = KJUR,
        S = L["asn1"],
        Y = S["cms"],
        J = Y["SignerInfo"],
        C = Y["SignedData"],
        V = Y["SigningTime"],
        W = Y["SigningCertificate"],
        R = Y["SigningCertificateV2"],
        B = S["cades"],
        F = B["SignaturePolicyIdentifier"],
        E = new C();
    E["dEncapContentInfo"]["setContentValue"](A["content"]);
    typeof A["detached"] == "boolean" && (E["dEncapContentInfo"]["isDetached"] = A["detached"]);
    if (typeof A["certs"] == "object") for (var s = 0x0; s < A["certs"]["length"]; s++) {
        E["addCertificatesByPEM"](A["certs"][s]);
    }
    E["signerInfoList"] = [];
    for (var s = 0x0; s < A["signerInfos"]["length"]; s++) {
        var I = A["signerInfos"][s],
            K = new J();
        K["setSignerIdentifier"](I["signerCert"]),
            K["setForContentAndHash"]({
                "sdObj": E,
                "eciObj": E["dEncapContentInfo"],
                "hashAlg": I["hashAlg"]
            });
        for (attrName in I["sAttr"]) {
            var T = I["sAttr"][attrName];
            if (attrName == "SigningTime") {
                var i = new V(T);
                K["dSignedAttrs"]["add"](i);
            }
            if (attrName == "SigningCertificate") {
                var i = new W(T);
                K["dSignedAttrs"]["add"](i);
            }
            if (attrName == "SigningCertificateV2") {
                var i = new R(T);
                K["dSignedAttrs"]["add"](i);
            }
            if (attrName == "SignaturePolicyIdentifier") {
                var i = new F(T);
                K["dSignedAttrs"]["add"](i);
            }
        }
        K["sign"](I["signerPrvKey"], I["sigAlg"]),
            E["signerInfoList"]["push"](K);
    }
    return E;
}), (KJUR["asn1"]["cms"]["CMSUtil"]["verifySignedData"] = function (L) {
    var S = KJUR,
        Y = S["asn1"],
        J = Y["cms"],
        V = J["SignerInfo"],
        W = J["SignedData"],
        R = J["SigningTime"],
        F = J["SigningCertificate"],
        I = J["SigningCertificateV2"],
        K = Y["cades"],
        T = K["SignaturePolicyIdentifier"],
        Z = S["lang"]["String"]["isHex"],
        M = ASN1HEX,
        U = M["getVbyList"],
        H = M["getTLVbyList"],
        O = M["getIdxbyList"],
        X = M["getChildIdx"],
        G = M["getTLV"],
        N = M["oidname"],
        Q = S["crypto"]["Util"]["hashHex"];
    if (L["cms"] === undefined && !Z(L["cms"])) {
    }
    var P = L["cms"],
        p0 = function (pp, pn) {
            var pc;
            for (var pa = 0x3; pa < 0x6; pa++) {
                pc = O(pp, 0x0, [0x1, 0x0, pa]);
                if (pc !== undefined) {
                    var pA = pp["substr"](pc, 0x2);
                    pA === "a0" && (pn["certsIdx"] = pc),
                    pA === "a1" && (pn["revinfosIdx"] = pc),
                    pA === "31" && (pn["signerinfosIdx"] = pc);
                }
            }
        },
        p1 = function (pp, pn) {
            var pc = pn["signerinfosIdx"];
            if (pc === undefined) return;
            var pa = X(pp, pc);
            pn["signerInfoIdxList"] = pa;
            for (var pA = 0x0; pA < pa["length"]; pA++) {
                var pL = pa[pA],
                    pg = {
                        "idx": pL
                    };
                p2(pp, pg),
                    pn["signerInfos"]["push"](pg);
            }
        },
        p2 = function (pp, pn) {
            var pc = pn["idx"];
            (pn["signerid_issuer1"] = H(pp, pc, [0x1, 0x0], "30")),
                (pn["signerid_serial1"] = U(pp, pc, [0x1, 0x1], "02")),
                (pn["hashalg"] = N(U(pp, pc, [0x2, 0x0], "06")));
            var pa = O(pp, pc, [0x3], "a0");
            (pn["idxSignedAttrs"] = pa),
                p3(pp, pn, pa);
            var pA = X(pp, pc),
                pL = pA["length"];
            if (pL < 0x6) throw "malformed SignerInfo";
            (pn["sigalg"] = N(U(pp, pc, [pL - 0x2, 0x0], "06"))),
                (pn["sigval"] = U(pp, pc, [pL - 0x1], "04"));
        },
        p3 = function (pp, pn, pc) {
            var pa = X(pp, pc);
            pn["signedAttrIdxList"] = pa;
            for (var pA = 0x0; pA < pa["length"]; pA++) {
                var pL = pa[pA],
                    pg = U(pp, pL, [0x0], "06"),
                    pS;
                pg === "2a864886f70d010905" ? ((pS = hextoutf8(U(pp, pL, [0x1, 0x0]))), (pn["saSigningTime"] = pS)) : pg === "2a864886f70d010904" && ((pS = U(pp, pL, [0x1, 0x0], "04")), (pn["saMessageDigest"] = pS));
            }
        },
        p4 = function (pp, pn) {
            if (U(pp, 0x0, [0x0], "06") !== "2a864886f70d010702") return pn;
            (pn["cmsType"] = "signedData"),
                (pn["econtent"] = U(pp, 0x0, [0x1, 0x0, 0x2, 0x1, 0x0])),
                p0(pp, pn),
                (pn["signerInfos"] = []),
                p1(pp, pn);
        },
        p5 = function (pp, pn) {
            var pc = pn["parse"]["signerInfos"],
                pa = pc["length"],
                pA = !![];
            for (var pL = 0x0; pL < pa; pL++) {
                var pg = pc[pL];
                p7(pp, pn, pg, pL),
                !pg["isValid"] && (pA = ![]);
            }
            pn["isValid"] = pA;
        },
        p6 = function (pp, pn, pc, pa) {
            var pA = pn["parse"]["certsIdx"],
                pL;
            if (pn["certs"] === undefined) {
                (pL = []),
                    (pn["certkeys"] = []);
                var pg = X(pp, pA);
                for (var pS = 0x0; pS < pg["length"]; pS++) {
                    var pf = G(pp, pg[pS]),
                        pY = new X509();
                    pY["readCertHex"](pf),
                        (pL[pS] = pY),
                        (pn["certkeys"][pS] = pY["getPublicKey"]());
                }
                pn["certs"] = pL;
            } else pL = pn["certs"];
            (pn["cccc"] = pL["length"]),
                (pn["cccci"] = pg["length"]);
            for (var pS = 0x0; pS < pL["length"]; pS++) {
                var pJ = pY["getIssuerHex"](),
                    pb = pY["getSerialNumberHex"]();
                pc["signerid_issuer1"] === pJ && pc["signerid_serial1"] === pb && (pc["certkey_idx"] = pS);
            }
        },
        p7 = function (pp, pn, pc, pa) {
            pc["verifyDetail"] = {};
            var pA = pc["verifyDetail"],
                pL = pn["parse"]["econtent"],
                pg = pc["hashalg"],
                pS = pc["saMessageDigest"];
            pA["validMessageDigest"] = ![];
            Q(pL, pg) === pS && (pA["validMessageDigest"] = !![]);
            p6(pp, pn, pc, pa),
                (pA["validSignatureValue"] = ![]);
            var pf = pc["sigalg"],
                pY = "31" + G(pp, pc["idxSignedAttrs"])["substr"](0x2);
            pc["signedattrshex"] = pY;
            var pJ = pn["certs"][pc["certkey_idx"]]["getPublicKey"](),
                pb = new KJUR["crypto"]["Signature"]({
                    "alg": pf
                });
            pb["init"](pJ),
                pb["updateHex"](pY);
            var pC = pb["verify"](pc["sigval"]);
            (pA["validSignatureValue_isValid"] = pC),
            pC === !![] && (pA["validSignatureValue"] = !![]),
                (pc["isValid"] = ![]),
            pA["validMessageDigest"] && pA["validSignatureValue"] && (pc["isValid"] = !![]);
        },
        p8 = function () {
        },
        p9 = {
            "isValid": ![],
            "parse": {}
        };
    return p4(P, p9["parse"]),
        p5(P, p9),
        p9;
});
(typeof KJUR == "undefined" || !KJUR) && (KJUR = {});
(typeof KJUR["asn1"] == "undefined" || !KJUR["asn1"]) && (KJUR["asn1"] = {});
(typeof KJUR["asn1"]["tsp"] == "undefined" || !KJUR["asn1"]["tsp"]) && (KJUR["asn1"]["tsp"] = {});
(KJUR["asn1"]["tsp"]["Accuracy"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERInteger"],
        g = A["DERSequence"],
        S = A["DERTaggedObject"];
    A["tsp"]["Accuracy"]["superclass"]["constructor"]["call"](this),
        (this["seconds"] = null),
        (this["millis"] = null),
        (this["micros"] = null),
        (this["getEncodedHex"] = function () {
            var Y = null,
                J = null,
                C = null,
                V = [];
            this["seconds"] != null && ((Y = new L({
                "int": this["seconds"]
            })), V["push"](Y));
            if (this["millis"] != null) {
                var W = new L({
                    "int": this["millis"]
                });
                (J = new S({
                    "obj": W,
                    "tag": "80",
                    "explicit": ![]
                })),
                    V["push"](J);
            }
            if (this["micros"] != null) {
                var R = new L({
                    "int": this["micros"]
                });
                (C = new S({
                    "obj": R,
                    "tag": "81",
                    "explicit": ![]
                })),
                    V["push"](C);
            }
            var B = new g({
                "array": V
            });
            return ((this["hTLV"] = B["getEncodedHex"]()), this["hTLV"]);
        }),
    p !== undefined && (typeof p["seconds"] == "number" && (this["seconds"] = p["seconds"]), typeof p["millis"] == "number" && (this["millis"] = p["millis"]), typeof p["micros"] == "number" && (this["micros"] = p["micros"]));
}), YAHOO["lang"]["extend"](KJUR["asn1"]["tsp"]["Accuracy"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["tsp"]["MessageImprint"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERSequence"],
        S = A["DEROctetString"],
        Y = A["x509"],
        J = Y["AlgorithmIdentifier"];
    A["tsp"]["MessageImprint"]["superclass"]["constructor"]["call"](this),
        (this["dHashAlg"] = null),
        (this["dHashValue"] = null),
        (this["getEncodedHex"] = function () {
            if (typeof this["hTLV"] == "string") return this["hTLV"];
            var C = new L({
                "array": [this["dHashAlg"], this["dHashValue"]]
            });
            return C["getEncodedHex"]();
        }),
    p !== undefined && (typeof p["hashAlg"] == "string" && (this["dHashAlg"] = new J({
        "name": p["hashAlg"]
    })), typeof p["hashValue"] == "string" && (this["dHashValue"] = new S({
        "hex": p["hashValue"]
    })));
}), YAHOO["lang"]["extend"](KJUR["asn1"]["tsp"]["MessageImprint"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["tsp"]["TimeStampReq"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERSequence"],
        S = A["DERInteger"],
        Y = A["DERBoolean"],
        J = A["DERObjectIdentifier"],
        C = A["tsp"],
        V = C["MessageImprint"];
    C["TimeStampReq"]["superclass"]["constructor"]["call"](this),
        (this["dVersion"] = new S({
            "int": 0x1
        })),
        (this["dMessageImprint"] = null),
        (this["dPolicy"] = null),
        (this["dNonce"] = null),
        (this["certReq"] = !![]),
        (this["setMessageImprint"] = function (W) {
            if (W instanceof V) {
                this["dMessageImprint"] = W;
                return;
            }
            typeof W == "object" && (this["dMessageImprint"] = new V(W));
        }),
        (this["getEncodedHex"] = function () {
            if (this["dMessageImprint"] == null) throw "messageImprint shall be specified";
            var W = [this["dVersion"], this["dMessageImprint"]];
            this["dPolicy"] != null && W["push"](this["dPolicy"]);
            this["dNonce"] != null && W["push"](this["dNonce"]);
            this["certReq"] && W["push"](new Y());
            var l = new L({
                "array": W
            });
            return ((this["hTLV"] = l["getEncodedHex"]()), this["hTLV"]);
        }),
    p !== undefined && (typeof p["mi"] == "object" && this["setMessageImprint"](p["mi"]), typeof p["policy"] == "object" && (this["dPolicy"] = new J(p["policy"])), typeof p["nonce"] == "object" && (this["dNonce"] = new S(p["nonce"])), typeof p["certreq"] == "boolean" && (this["certReq"] = p["certreq"]));
}), YAHOO["lang"]["extend"](KJUR["asn1"]["tsp"]["TimeStampReq"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["tsp"]["TSTInfo"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERSequence"],
        S = A["DERInteger"],
        Y = A["DERBoolean"],
        J = A["DERGeneralizedTime"],
        C = A["DERObjectIdentifier"],
        V = A["tsp"],
        W = V["MessageImprint"],
        R = V["Accuracy"],
        B = A["x509"]["X500Name"];
    V["TSTInfo"]["superclass"]["constructor"]["call"](this),
        (this["dVersion"] = new S({
            "int": 0x1
        })),
        (this["dPolicy"] = null),
        (this["dMessageImprint"] = null),
        (this["dSerialNumber"] = null),
        (this["dGenTime"] = null),
        (this["dAccuracy"] = null),
        (this["dOrdering"] = null),
        (this["dNonce"] = null),
        (this["dTsa"] = null),
        (this["getEncodedHex"] = function () {
            var F = [this["dVersion"]];
            if (this["dPolicy"] == null) throw "policy shall be specified.";
            F["push"](this["dPolicy"]);
            if (this["dMessageImprint"] == null) throw "messageImprint shall be specified.";
            F["push"](this["dMessageImprint"]);
            if (this["dSerialNumber"] == null) throw "serialNumber shall be specified.";
            F["push"](this["dSerialNumber"]);
            if (this["dGenTime"] == null) throw "genTime shall be specified.";
            F["push"](this["dGenTime"]);
            this["dAccuracy"] != null && F["push"](this["dAccuracy"]);
            this["dOrdering"] != null && F["push"](this["dOrdering"]);
            this["dNonce"] != null && F["push"](this["dNonce"]);
            this["dTsa"] != null && F["push"](this["dTsa"]);
            var E = new L({
                "array": F
            });
            return ((this["hTLV"] = E["getEncodedHex"]()), this["hTLV"]);
        });
    if (p !== undefined) {
        if (typeof p["policy"] == "string") {
            if (!p["policy"]["match"](/^[0-9.]+$/)) throw "policy shall be oid like 0.1.4.134";
            this["dPolicy"] = new C({
                "oid": p["policy"]
            });
        }
        p["messageImprint"] !== undefined && (this["dMessageImprint"] = new W(p["messageImprint"])),
        p["serialNumber"] !== undefined && (this["dSerialNumber"] = new S(p["serialNumber"])),
        p["genTime"] !== undefined && (this["dGenTime"] = new J(p["genTime"])),
        p["accuracy"] !== undefined && (this["dAccuracy"] = new R(p["accuracy"])),
        p["ordering"] !== undefined && p["ordering"] == !![] && (this["dOrdering"] = new Y()),
        p["nonce"] !== undefined && (this["dNonce"] = new S(p["nonce"])),
        p["tsa"] !== undefined && (this["dTsa"] = new B(p["tsa"]));
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["tsp"]["TSTInfo"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["tsp"]["TimeStampResp"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERSequence"],
        S = A["ASN1Object"],
        Y = A["tsp"],
        J = Y["PKIStatusInfo"];
    Y["TimeStampResp"]["superclass"]["constructor"]["call"](this),
        (this["dStatus"] = null),
        (this["dTST"] = null),
        (this["getEncodedHex"] = function () {
            if (this["dStatus"] == null) throw "status shall be specified";
            var C = [this["dStatus"]];
            this["dTST"] != null && C["push"](this["dTST"]);
            var V = new L({
                "array": C
            });
            return ((this["hTLV"] = V["getEncodedHex"]()), this["hTLV"]);
        }),
    p !== undefined && (typeof p["status"] == "object" && (this["dStatus"] = new J(p["status"])), p["tst"] !== undefined && p["tst"] instanceof S && (this["dTST"] = p["tst"]["getContentInfo"]()));
}), YAHOO["lang"]["extend"](KJUR["asn1"]["tsp"]["TimeStampResp"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["tsp"]["PKIStatusInfo"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERSequence"],
        S = A["tsp"],
        Y = S["PKIStatus"],
        J = S["PKIFreeText"],
        C = S["PKIFailureInfo"];
    S["PKIStatusInfo"]["superclass"]["constructor"]["call"](this),
        (this["dStatus"] = null),
        (this["dStatusString"] = null),
        (this["dFailureInfo"] = null),
        (this["getEncodedHex"] = function () {
            if (this["dStatus"] == null) throw "status shall be specified";
            var V = [this["dStatus"]];
            this["dStatusString"] != null && V["push"](this["dStatusString"]);
            this["dFailureInfo"] != null && V["push"](this["dFailureInfo"]);
            var W = new L({
                "array": V
            });
            return ((this["hTLV"] = W["getEncodedHex"]()), this["hTLV"]);
        }),
    p !== undefined && (typeof p["status"] == "object" && (this["dStatus"] = new Y(p["status"])), typeof p["statstr"] == "object" && (this["dStatusString"] = new J({
        "array": p["statstr"]
    })), typeof p["failinfo"] == "object" && (this["dFailureInfo"] = new C(p["failinfo"])));
}), YAHOO["lang"]["extend"](KJUR["asn1"]["tsp"]["PKIStatusInfo"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["tsp"]["PKIStatus"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERInteger"],
        S = A["tsp"],
        Y = S["PKIStatus"];
    S["PKIStatus"]["superclass"]["constructor"]["call"](this);
    var J = null;
    this["getEncodedHex"] = function () {
        return ((this["hTLV"] = this["dStatus"]["getEncodedHex"]()), this["hTLV"]);
    };
    if (p !== undefined) {
        if (p["name"] !== undefined) {
            var C = Y["valueList"];
            if (C[p["name"]] === undefined) throw ("name undefined: " + p["name"]);
            this["dStatus"] = new L({
                "int": C[p["name"]]
            });
        } else this["dStatus"] = new L(p);
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["tsp"]["PKIStatus"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["tsp"]["PKIStatus"]["valueList"] = {
    "granted": 0x0,
    "grantedWithMods": 0x1,
    "rejection": 0x2,
    "waiting": 0x3,
    "revocationWarning": 0x4,
    "revocationNotification": 0x5
}), (KJUR["asn1"]["tsp"]["PKIFreeText"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERSequence"],
        g = A["DERUTF8String"],
        S = A["tsp"];
    S["PKIFreeText"]["superclass"]["constructor"]["call"](this),
        (this["textList"] = []),
        (this["getEncodedHex"] = function () {
            var Y = [];
            for (var J = 0x0; J < this["textList"]["length"]; J++) {
                Y["push"](new g({
                    "str": this["textList"][J]
                }));
            }
            var C = new L({
                "array": Y
            });
            return ((this["hTLV"] = C["getEncodedHex"]()), this["hTLV"]);
        }),
    p !== undefined && typeof p["array"] == "object" && (this["textList"] = p["array"]);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["tsp"]["PKIFreeText"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["tsp"]["PKIFailureInfo"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERBitString"],
        S = A["tsp"],
        Y = S["PKIFailureInfo"];
    Y["superclass"]["constructor"]["call"](this),
        (this["value"] = null),
        (this["getEncodedHex"] = function () {
            if (this["value"] == null) throw "value shall be specified";
            var C = new Number(this["value"])["toString"](0x2),
                V = new L();
            return (V["setByBinaryString"](C), (this["hTLV"] = V["getEncodedHex"]()), this["hTLV"]);
        });
    if (p !== undefined) {
        if (typeof p["name"] == "string") {
            var J = Y["valueList"];
            if (J[p["name"]] === undefined) throw ("name undefined: " + p["name"]);
            this["value"] = J[p["name"]];
        } else typeof p["int"] == "number" && (this["value"] = p["int"]);
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["tsp"]["PKIFailureInfo"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["tsp"]["PKIFailureInfo"]["valueList"] = {
    "badAlg": 0x0,
    "badRequest": 0x2,
    "badDataFormat": 0x5,
    "timeNotAvailable": 0xe,
    "unacceptedPolicy": 0xf,
    "unacceptedExtension": 0x10,
    "addInfoNotAvailable": 0x11,
    "systemFailure": 0x19
}), (KJUR["asn1"]["tsp"]["AbstractTSAAdapter"] = function (p) {
    this["getTSTHex"] = function (n, A) {
        throw "not implemented yet";
    };
}), (KJUR["asn1"]["tsp"]["SimpleTSAAdapter"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["tsp"],
        g = n["crypto"]["Util"]["hashHex"];
    L["SimpleTSAAdapter"]["superclass"]["constructor"]["call"](this),
        (this["params"] = null),
        (this["serial"] = 0x0),
        (this["getTSTHex"] = function (S, Y) {
            var J = g(S, Y);
            (this["params"]["tstInfo"]["messageImprint"] = {
                "hashAlg": Y,
                "hashValue": J
            }),
                (this["params"]["tstInfo"]["serialNumber"] = {
                    "int": this["serial"]++
                });
            var C = Math["floor"](Math["random"]() * 0x3b9aca00);
            this["params"]["tstInfo"]["nonce"] = {
                "int": C
            };
            var V = L["TSPUtil"]["newTimeStampToken"](this["params"]);
            return V["getContentInfoEncodedHex"]();
        }),
    p !== undefined && (this["params"] = p);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["tsp"]["SimpleTSAAdapter"], KJUR["asn1"]["tsp"]["AbstractTSAAdapter"]), (KJUR["asn1"]["tsp"]["FixedTSAAdapter"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["tsp"],
        g = n["crypto"]["Util"]["hashHex"];
    L["FixedTSAAdapter"]["superclass"]["constructor"]["call"](this),
        (this["params"] = null),
        (this["getTSTHex"] = function (S, Y) {
            var J = g(S, Y);
            this["params"]["tstInfo"]["messageImprint"] = {
                "hashAlg": Y,
                "hashValue": J
            };
            var C = L["TSPUtil"]["newTimeStampToken"](this["params"]);
            return C["getContentInfoEncodedHex"]();
        }),
    p !== undefined && (this["params"] = p);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["tsp"]["FixedTSAAdapter"], KJUR["asn1"]["tsp"]["AbstractTSAAdapter"]), (KJUR["asn1"]["tsp"]["TSPUtil"] = new (function () {
})()), (KJUR["asn1"]["tsp"]["TSPUtil"]["newTimeStampToken"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["cms"],
        S = A["tsp"],
        Y = A["tsp"]["TSTInfo"],
        J = new L["SignedData"](),
        C = new Y(p["tstInfo"]),
        V = C["getEncodedHex"]();
    J["dEncapContentInfo"]["setContentValue"]({
        "hex": V
    }),
        J["dEncapContentInfo"]["setContentType"]("tstinfo");
    if (typeof p["certs"] == "object") for (var W = 0x0; W < p["certs"]["length"]; W++) {
        J["addCertificatesByPEM"](p["certs"][W]);
    }
    var R = J["signerInfoList"][0x0];
    R["setSignerIdentifier"](p["signerCert"]),
        R["setForContentAndHash"]({
            "sdObj": J,
            "eciObj": J["dEncapContentInfo"],
            "hashAlg": p["hashAlg"]
        });
    var B = new L["SigningCertificate"]({
        "array": [p["signerCert"]]
    });
    return (R["dSignedAttrs"]["add"](B), R["sign"](p["signerPrvKey"], p["sigAlg"]), J);
}), (KJUR["asn1"]["tsp"]["TSPUtil"]["parseTimeStampReq"] = function (p) {
    var n = ASN1HEX,
        A = n["getChildIdx"],
        L = n["getV"],
        S = n["getTLV"],
        Y = {};
    Y["certreq"] = ![];
    var J = A(p, 0x0);
    if (J["length"] < 0x2) throw "TimeStampReq must have at least 2 items";
    var C = S(p, J[0x1]);
    Y["mi"] = KJUR["asn1"]["tsp"]["TSPUtil"]["parseMessageImprint"](C);
    for (var V = 0x2; V < J["length"]; V++) {
        var W = J[V],
            R = p["substr"](W, 0x2);
        if (R == "06") {
            var B = L(p, W);
            Y["policy"] = n["hextooidstr"](B);
        }
        R == "02" && (Y["nonce"] = L(p, W)),
        R == "01" && (Y["certreq"] = !![]);
    }
    return Y;
}), (KJUR["asn1"]["tsp"]["TSPUtil"]["parseMessageImprint"] = function (p) {
    var n = ASN1HEX,
        A = n["getChildIdx"],
        L = n["getV"],
        S = n["getIdxbyList"],
        Y = {};
    if (p["substr"](0x0, 0x2) != "30") throw "head of messageImprint hex shall be '30'";
    var J = A(p, 0x0),
        C = S(p, 0x0, [0x0, 0x0]),
        V = L(p, C),
        W = n["hextooidstr"](V),
        R = KJUR["asn1"]["x509"]["OID"]["oid2name"](W);
    if (R == "") throw ("hashAlg name undefined: " + W);
    var B = R,
        F = S(p, 0x0, [0x1]);
    return ((Y["hashAlg"] = B), (Y["hashValue"] = L(p, F)), Y);
});
(typeof KJUR == "undefined" || !KJUR) && (KJUR = {});
(typeof KJUR["asn1"] == "undefined" || !KJUR["asn1"]) && (KJUR["asn1"] = {});
(typeof KJUR["asn1"]["cades"] == "undefined" || !KJUR["asn1"]["cades"]) && (KJUR["asn1"]["cades"] = {});
(KJUR["asn1"]["cades"]["SignaturePolicyIdentifier"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERObjectIdentifier"],
        S = A["DERSequence"],
        Y = A["cades"],
        J = Y["OtherHashAlgAndValue"];
    Y["SignaturePolicyIdentifier"]["superclass"]["constructor"]["call"](this),
        (this["attrTypeOid"] = "1.2.840.113549.1.9.16.2.15");
    if (p !== undefined) {
        if (typeof p["oid"] == "string" && typeof p["hash"] == "object") {
            var C = new L({
                    "oid": p["oid"]
                }),
                V = new J(p["hash"]),
                W = new S({
                    "array": [C, V]
                });
            this["valueList"] = [W];
        }
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cades"]["SignaturePolicyIdentifier"], KJUR["asn1"]["cms"]["Attribute"]), (KJUR["asn1"]["cades"]["OtherHashAlgAndValue"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERSequence"],
        S = A["DEROctetString"],
        Y = A["x509"],
        J = Y["AlgorithmIdentifier"],
        C = A["cades"],
        V = C["OtherHashAlgAndValue"];
    V["superclass"]["constructor"]["call"](this),
        (this["dAlg"] = null),
        (this["dHash"] = null),
        (this["getEncodedHex"] = function () {
            var W = new L({
                "array": [this["dAlg"], this["dHash"]]
            });
            return ((this["hTLV"] = W["getEncodedHex"]()), this["hTLV"]);
        }),
    p !== undefined && typeof p["alg"] == "string" && typeof p["hash"] == "string" && ((this["dAlg"] = new J({
        "name": p["alg"]
    })), (this["dHash"] = new S({
        "hex": p["hash"]
    })));
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cades"]["OtherHashAlgAndValue"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["cades"]["SignatureTimeStamp"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["ASN1Object"],
        S = A["x509"],
        Y = A["cades"];
    Y["SignatureTimeStamp"]["superclass"]["constructor"]["call"](this),
        (this["attrTypeOid"] = "1.2.840.113549.1.9.16.2.14"),
        (this["tstHex"] = null);
    if (p !== undefined) {
        if (p["res"] !== undefined) {
            if (typeof p["res"] == "string" && p["res"]["match"](/^[0-9A-Fa-f]+$/)) {
            } else {
                if (p["res"] instanceof L) {
                } else throw "res param shall be ASN1Object or hex string";
            }
        }
        if (p["tst"] !== undefined) {
            if (typeof p["tst"] == "string" && p["tst"]["match"](/^[0-9A-Fa-f]+$/)) {
                var J = new L();
                (this["tstHex"] = p["tst"]),
                    (J["hTLV"] = this["tstHex"]),
                    J["getEncodedHex"](),
                    (this["valueList"] = [J]);
            } else {
                if (p["tst"] instanceof L) {
                } else throw "tst param shall be ASN1Object or hex string";
            }
        }
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cades"]["SignatureTimeStamp"], KJUR["asn1"]["cms"]["Attribute"]), (KJUR["asn1"]["cades"]["CompleteCertificateRefs"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["cades"];
    L["CompleteCertificateRefs"]["superclass"]["constructor"]["call"](this),
        (this["attrTypeOid"] = "1.2.840.113549.1.9.16.2.21"),
        (this["setByArray"] = function (S) {
            this["valueList"] = [];
            for (var Y = 0x0; Y < S["length"]; Y++) {
                var J = new L["OtherCertID"](S[Y]);
                this["valueList"]["push"](J);
            }
        }),
    p !== undefined && typeof p == "object" && typeof p["length"] == "number" && this["setByArray"](p);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cades"]["CompleteCertificateRefs"], KJUR["asn1"]["cms"]["Attribute"]), (KJUR["asn1"]["cades"]["OtherCertID"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["cms"],
        g = A["cades"];
    g["OtherCertID"]["superclass"]["constructor"]["call"](this),
        (this["hasIssuerSerial"] = !![]),
        (this["dOtherCertHash"] = null),
        (this["dIssuerSerial"] = null),
        (this["setByCertPEM"] = function (S) {
            (this["dOtherCertHash"] = new g["OtherHash"](S)),
            this["hasIssuerSerial"] && (this["dIssuerSerial"] = new L["IssuerAndSerialNumber"](S));
        }),
        (this["getEncodedHex"] = function () {
            if (this["hTLV"] != null) return this["hTLV"];
            if (this["dOtherCertHash"] == null) throw "otherCertHash not set";
            var S = [this["dOtherCertHash"]];
            this["dIssuerSerial"] != null && S["push"](this["dIssuerSerial"]);
            var Y = new A["DERSequence"]({
                "array": S
            });
            return ((this["hTLV"] = Y["getEncodedHex"]()), this["hTLV"]);
        }),
    p !== undefined && (typeof p == "string" && p["indexOf"]("-----BEGIN ") != -0x1 && this["setByCertPEM"](p), typeof p == "object" && (p["hasis"] === ![] && (this["hasIssuerSerial"] = ![]), typeof p["cert"] == "string" && this["setByCertPEM"](p["cert"])));
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cades"]["OtherCertID"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["cades"]["OtherHash"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["cms"],
        S = A["cades"],
        Y = S["OtherHashAlgAndValue"],
        J = n["crypto"]["Util"]["hashHex"];
    S["OtherHash"]["superclass"]["constructor"]["call"](this),
        (this["alg"] = "sha256"),
        (this["dOtherHash"] = null),
        (this["setByCertPEM"] = function (C) {
            if (C["indexOf"]("-----BEGIN ") == -0x1) throw "certPEM not to seem PEM format";
            var V = pemtohex(C),
                W = J(V, this["alg"]);
            this["dOtherHash"] = new Y({
                "alg": this["alg"],
                "hash": W
            });
        }),
        (this["getEncodedHex"] = function () {
            if (this["dOtherHash"] == null) throw "OtherHash not set";
            return this["dOtherHash"]["getEncodedHex"]();
        });
    if (p !== undefined) {
        if (typeof p == "string") {
            if (p["indexOf"]("-----BEGIN ") != -0x1) this["setByCertPEM"](p);
            else {
                if (p["match"](/^[0-9A-Fa-f]+$/)) this["dOtherHash"] = new A["DEROctetString"]({
                    "hex": p
                });
                else throw "unsupported string value for params";
            }
        } else typeof p == "object" && (typeof p["cert"] == "string" ? (typeof p["alg"] == "string" && (this["alg"] = p["alg"]), this["setByCertPEM"](p["cert"])) : (this["dOtherHash"] = new Y(p)));
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["cades"]["OtherHash"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["cades"]["CAdESUtil"] = new (function () {
})()), (KJUR["asn1"]["cades"]["CAdESUtil"]["addSigTS"] = function (p, n, A) {
}), (KJUR["asn1"]["cades"]["CAdESUtil"]["parseSignedDataForAddingUnsigned"] = function (L) {
    var S = ASN1HEX,
        Y = S["getChildIdx"],
        J = S["getTLV"],
        C = S["getTLVbyList"],
        V = S["getIdxbyList"],
        W = KJUR,
        R = W["asn1"],
        F = R["ASN1Object"],
        E = R["cms"],
        I = E["SignedData"],
        K = R["cades"],
        T = K["CAdESUtil"],
        i = {};
    if (C(L, 0x0, [0x0]) != "06092a864886f70d010702") throw "hex is not CMS SignedData";
    var Z = V(L, 0x0, [0x1, 0x0]),
        M = Y(L, Z);
    if (M["length"] < 0x4) throw "num of SignedData elem shall be 4 at least";
    var U = M["shift"]();
    i["version"] = J(L, U);
    var H = M["shift"]();
    i["algs"] = J(L, H);
    var O = M["shift"]();
    (i["encapcontent"] = J(L, O)),
        (i["certs"] = null),
        (i["revs"] = null),
        (i["si"] = []);
    var X = M["shift"]();
    L["substr"](X, 0x2) == "a0" && ((i["certs"] = J(L, X)), (X = M["shift"]()));
    L["substr"](X, 0x2) == "a1" && ((i["revs"] = J(L, X)), (X = M["shift"]()));
    var G = X;
    if (L["substr"](G, 0x2) != "31") throw "Can't find signerInfos";
    var N = Y(L, G);
    for (var D = 0x0; D < N["length"]; D++) {
        var r = N[D],
            Q = T["parseSignerInfoForAddingUnsigned"](L, r, D);
        i["si"][D] = Q;
    }
    var P = null;
    (i["obj"] = new I()),
        (P = new F()),
        (P["hTLV"] = i["version"]),
        (i["obj"]["dCMSVersion"] = P),
        (P = new F()),
        (P["hTLV"] = i["algs"]),
        (i["obj"]["dDigestAlgs"] = P),
        (P = new F()),
        (P["hTLV"] = i["encapcontent"]),
        (i["obj"]["dEncapContentInfo"] = P),
        (P = new F()),
        (P["hTLV"] = i["certs"]),
        (i["obj"]["dCerts"] = P),
        (i["obj"]["signerInfoList"] = []);
    for (var D = 0x0; D < i["si"]["length"]; D++) {
        i["obj"]["signerInfoList"]["push"](i["si"][D]["obj"]);
    }
    return i;
}), (KJUR["asn1"]["cades"]["CAdESUtil"]["parseSignerInfoForAddingUnsigned"] = function (A, L, S) {
    var Y = ASN1HEX,
        J = Y["getChildIdx"],
        C = Y["getTLV"],
        V = Y["getV"],
        W = KJUR,
        R = W["asn1"],
        B = R["ASN1Object"],
        F = R["cms"],
        E = F["AttributeList"],
        I = F["SignerInfo"],
        K = {},
        T = J(A, L);
    if (T["length"] != 0x6) throw "not supported items for SignerInfo (!=6)";
    var Z = T["shift"]();
    K["version"] = C(A, Z);
    var M = T["shift"]();
    K["si"] = C(A, M);
    var U = T["shift"]();
    K["digalg"] = C(A, U);
    var H = T["shift"]();
    K["sattrs"] = C(A, H);
    var O = T["shift"]();
    K["sigalg"] = C(A, O);
    var X = T["shift"]();
    (K["sig"] = C(A, X)),
        (K["sigval"] = V(A, X));
    var G = null;
    return ((K["obj"] = new I()), (G = new B()), (G["hTLV"] = K["version"]), (K["obj"]["dCMSVersion"] = G), (G = new B()), (G["hTLV"] = K["si"]), (K["obj"]["dSignerIdentifier"] = G), (G = new B()), (G["hTLV"] = K["digalg"]), (K["obj"]["dDigestAlgorithm"] = G), (G = new B()), (G["hTLV"] = K["sattrs"]), (K["obj"]["dSignedAttrs"] = G), (G = new B()), (G["hTLV"] = K["sigalg"]), (K["obj"]["dSigAlg"] = G), (G = new B()), (G["hTLV"] = K["sig"]), (K["obj"]["dSig"] = G), (K["obj"]["dUnsignedAttrs"] = new E()), K);
});
(typeof KJUR["asn1"]["csr"] == "undefined" || !KJUR["asn1"]["csr"]) && (KJUR["asn1"]["csr"] = {});
(KJUR["asn1"]["csr"]["CertificationRequest"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERBitString"],
        S = A["DERSequence"],
        Y = A["csr"],
        J = A["x509"];
    Y["CertificationRequest"]["superclass"]["constructor"]["call"](this);
    var C = null,
        V = null,
        W = null,
        R = null,
        B = null;
    (this["sign"] = function (F, E) {
        this["prvKey"] == null && (this["prvKey"] = E);
        this["asn1SignatureAlg"] = new J["AlgorithmIdentifier"]({
            "name": F
        });
        var s = new n["crypto"]["Signature"]({
            "alg": F
        });
        s["init"](this["prvKey"]),
            s["updateHex"](this["asn1CSRInfo"]["getEncodedHex"]()),
            (this["hexSig"] = s["sign"]()),
            (this["asn1Sig"] = new L({
                "hex": "00" + this["hexSig"]
            }));
        var I = new S({
            "array": [this["asn1CSRInfo"], this["asn1SignatureAlg"], this["asn1Sig"]]
        });
        (this["hTLV"] = I["getEncodedHex"]()),
            (this["isModified"] = ![]);
    }),
        (this["getPEMString"] = function () {
            return hextopem(this["getEncodedHex"](), "CERTIFICATE REQUEST");
        }),
        (this["getEncodedHex"] = function () {
            if (this["isModified"] == ![] && this["hTLV"] != null) return this["hTLV"];
            throw "not signed yet";
        }),
    p !== undefined && p["csrinfo"] !== undefined && (this["asn1CSRInfo"] = p["csrinfo"]);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["csr"]["CertificationRequest"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["csr"]["CertificationRequestInfo"] = function (p) {
    var A = KJUR,
        L = A["asn1"],
        S = L["DERInteger"],
        Y = L["DERSequence"],
        J = L["DERSet"],
        C = L["DERNull"],
        V = L["DERTaggedObject"],
        W = L["DERObjectIdentifier"],
        R = L["csr"],
        B = L["x509"],
        F = B["X500Name"],
        E = B["Extension"],
        s = KEYUTIL;
    R["CertificationRequestInfo"]["superclass"]["constructor"]["call"](this),
        (this["_initialize"] = function () {
            (this["asn1Array"] = new Array()),
                (this["asn1Version"] = new S({
                    "int": 0x0
                })),
                (this["asn1Subject"] = null),
                (this["asn1SubjPKey"] = null),
                (this["extensionsArray"] = new Array());
        }),
        (this["setSubjectByParam"] = function (I) {
            this["asn1Subject"] = new F(I);
        }),
        (this["setSubjectPublicKeyByGetKey"] = function (I) {
            var K = s["getKey"](I);
            this["asn1SubjPKey"] = new B["SubjectPublicKeyInfo"](K);
        }),
        (this["appendExtensionByName"] = function (I, K) {
            E["appendByNameToArray"](I, K, this["extensionsArray"]);
        }),
        (this["getEncodedHex"] = function () {
            (this["asn1Array"] = new Array()),
                this["asn1Array"]["push"](this["asn1Version"]),
                this["asn1Array"]["push"](this["asn1Subject"]),
                this["asn1Array"]["push"](this["asn1SubjPKey"]);
            if (this["extensionsArray"]["length"] > 0x0) {
                var I = new Y({
                        "array": this["extensionsArray"]
                    }),
                    K = new J({
                        "array": [I]
                    }),
                    T = new Y({
                        "array": [new W({
                            "oid": "1.2.840.113549.1.9.14"
                        }), K]
                    }),
                    Z = new V({
                        "explicit": !![],
                        "tag": "a0",
                        "obj": T
                    });
                this["asn1Array"]["push"](Z);
            } else {
                var Z = new V({
                    "explicit": ![],
                    "tag": "a0",
                    "obj": new C()
                });
                this["asn1Array"]["push"](Z);
            }
            var w = new Y({
                "array": this["asn1Array"]
            });
            return ((this["hTLV"] = w["getEncodedHex"]()), (this["isModified"] = ![]), this["hTLV"]);
        }),
        this["_initialize"]();
}), YAHOO["lang"]["extend"](KJUR["asn1"]["csr"]["CertificationRequestInfo"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["csr"]["CSRUtil"] = new (function () {
})()), (KJUR["asn1"]["csr"]["CSRUtil"]["newCSRPEM"] = function (p) {
    var n = KEYUTIL,
        A = KJUR["asn1"]["csr"];
    if (p["subject"] === undefined) throw "parameter subject undefined";
    if (p["sbjpubkey"] === undefined) throw "parameter sbjpubkey undefined";
    if (p["sigalg"] === undefined) throw "parameter sigalg undefined";
    if (p["sbjprvkey"] === undefined) throw "parameter sbjpubkey undefined";
    var L = new A["CertificationRequestInfo"]();
    L["setSubjectByParam"](p["subject"]),
        L["setSubjectPublicKeyByGetKey"](p["sbjpubkey"]);
    if (p["ext"] !== undefined && p["ext"]["length"] !== undefined) for (var S = 0x0; S < p["ext"]["length"]; S++) {
        for (key in p["ext"][S]) {
            L["appendExtensionByName"](key, p["ext"][S][key]);
        }
    }
    var Y = new A["CertificationRequest"]({
            "csrinfo": L
        }),
        J = n["getKey"](p["sbjprvkey"]);
    Y["sign"](p["sigalg"], J);
    var C = Y["getPEMString"]();
    return C;
}), (KJUR["asn1"]["csr"]["CSRUtil"]["getInfo"] = function (p) {
    var n = ASN1HEX,
        A = n["getTLVbyList"],
        L = {};
    (L["subject"] = {}),
        (L["pubkey"] = {});
    if (p["indexOf"]("-----BEGIN CERTIFICATE REQUEST") == -0x1) throw "argument is not PEM file";
    var S = pemtohex(p, "CERTIFICATE REQUEST");
    try {
        L["subject"]["hex"] = A(S, 0x0, [0x0, 0x1]);
    } catch (J) {
    }
    try {
        L["subject"]["name"] = X509["hex2dn"](L["subject"]["hex"]);
    } catch (C) {
    }
    (L["pubkey"]["hex"] = A(S, 0x0, [0x0, 0x2])),
        (L["pubkey"]["obj"] = KEYUTIL["getKey"](L["pubkey"]["hex"], null, "pkcs8pub"));
    try {
        L["ext"] = [];
        var Y = new X509();
        Y["parseExt"](p),
            L["ext"]["push"]({
                "subjectAltName": {
                    "array": Y["getExtSubjectAltName2"]()
                }
            });
    } catch (V) {
    }
    return L;
});
(typeof KJUR == "undefined" || !KJUR) && (KJUR = {});
(typeof KJUR["asn1"] == "undefined" || !KJUR["asn1"]) && (KJUR["asn1"] = {});
(typeof KJUR["asn1"]["ocsp"] == "undefined" || !KJUR["asn1"]["ocsp"]) && (KJUR["asn1"]["ocsp"] = {});
(KJUR["asn1"]["ocsp"]["DEFAULT_HASH"] = "sha1"), (KJUR["asn1"]["ocsp"]["CertID"] = function (p) {
    var A = KJUR,
        L = A["asn1"],
        S = L["DEROctetString"],
        Y = L["DERInteger"],
        J = L["DERSequence"],
        C = L["x509"],
        V = C["AlgorithmIdentifier"],
        W = L["ocsp"],
        R = W["DEFAULT_HASH"],
        B = A["crypto"],
        F = B["Util"]["hashHex"],
        E = X509,
        s = ASN1HEX;
    W["CertID"]["superclass"]["constructor"]["call"](this),
        (this["dHashAlg"] = null),
        (this["dIssuerNameHash"] = null),
        (this["dIssuerKeyHash"] = null),
        (this["dSerialNumber"] = null),
        (this["setByValue"] = function (T, Z, w, M) {
            M === undefined && (M = R),
                (this["dHashAlg"] = new V({
                    "name": M
                })),
                (this["dIssuerNameHash"] = new S({
                    "hex": T
                })),
                (this["dIssuerKeyHash"] = new S({
                    "hex": Z
                })),
                (this["dSerialNumber"] = new Y({
                    "hex": w
                }));
        }),
        (this["setByCert"] = function (T, Z, M) {
            M === undefined && (M = R);
            var U = new E();
            U["readCertPEM"](Z);
            var H = new E();
            H["readCertPEM"](T);
            var O = H["getPublicKeyHex"](),
                X = s["getTLVbyList"](O, 0x0, [0x1, 0x0], "30"),
                G = U["getSerialNumberHex"](),
                N = F(H["getSubjectHex"](), M),
                D = F(X, M);
            this["setByValue"](N, D, G, M),
                (this["hoge"] = U["getSerialNumberHex"]());
        }),
        (this["getEncodedHex"] = function () {
            if (this["dHashAlg"] === null && this["dIssuerNameHash"] === null && this["dIssuerKeyHash"] === null && this["dSerialNumber"] === null) throw "not yet set values";
            var T = [this["dHashAlg"], this["dIssuerNameHash"], this["dIssuerKeyHash"], this["dSerialNumber"]],
                Z = new J({
                    "array": T
                });
            return ((this["hTLV"] = Z["getEncodedHex"]()), this["hTLV"]);
        });
    if (p !== undefined) {
        var I = p;
        if (I["issuerCert"] !== undefined && I["subjectCert"] !== undefined) {
            var K = R;
            I["alg"] === undefined && (K = undefined),
                this["setByCert"](I["issuerCert"], I["subjectCert"], K);
        } else {
            if (I["namehash"] !== undefined && I["keyhash"] !== undefined && I["serial"] !== undefined) {
                var K = R;
                I["alg"] === undefined && (K = undefined),
                    this["setByValue"](I["namehash"], I["keyhash"], I["serial"], K);
            } else throw "invalid constructor arguments";
        }
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["ocsp"]["CertID"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["ocsp"]["Request"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERSequence"],
        g = A["ocsp"];
    g["Request"]["superclass"]["constructor"]["call"](this),
        (this["dReqCert"] = null),
        (this["dExt"] = null),
        (this["getEncodedHex"] = function () {
            var Y = [];
            if (this["dReqCert"] === null) throw "reqCert not set";
            Y["push"](this["dReqCert"]);
            var J = new L({
                "array": Y
            });
            return ((this["hTLV"] = J["getEncodedHex"]()), this["hTLV"]);
        });
    if (typeof p !== "undefined") {
        var S = new g["CertID"](p);
        this["dReqCert"] = S;
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["ocsp"]["Request"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["ocsp"]["TBSRequest"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERSequence"],
        g = A["ocsp"];
    g["TBSRequest"]["superclass"]["constructor"]["call"](this),
        (this["version"] = 0x0),
        (this["dRequestorName"] = null),
        (this["dRequestList"] = []),
        (this["dRequestExt"] = null),
        (this["setRequestListByParam"] = function (S) {
            var Y = [];
            for (var J = 0x0; J < S["length"]; J++) {
                var C = new g["Request"](S[0x0]);
                Y["push"](C);
            }
            this["dRequestList"] = Y;
        }),
        (this["getEncodedHex"] = function () {
            var S = [];
            if (this["version"] !== 0x0) throw ("not supported version: " + this["version"]);
            if (this["dRequestorName"] !== null) throw "requestorName not supported";
            var Y = new L({
                "array": this["dRequestList"]
            });
            S["push"](Y);
            if (this["dRequestExt"] !== null) throw "requestExtensions not supported";
            var J = new L({
                "array": S
            });
            return ((this["hTLV"] = J["getEncodedHex"]()), this["hTLV"]);
        }),
    p !== undefined && p["reqList"] !== undefined && this["setRequestListByParam"](p["reqList"]);
}), YAHOO["lang"]["extend"](KJUR["asn1"]["ocsp"]["TBSRequest"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["ocsp"]["OCSPRequest"] = function (p) {
    var n = KJUR,
        A = n["asn1"],
        L = A["DERSequence"],
        g = A["ocsp"];
    g["OCSPRequest"]["superclass"]["constructor"]["call"](this),
        (this["dTbsRequest"] = null),
        (this["dOptionalSignature"] = null),
        (this["getEncodedHex"] = function () {
            var Y = [];
            if (this["dTbsRequest"] !== null) Y["push"](this["dTbsRequest"]);
            else throw "tbsRequest not set";
            if (this["dOptionalSignature"] !== null) throw "optionalSignature not supported";
            var J = new L({
                "array": Y
            });
            return ((this["hTLV"] = J["getEncodedHex"]()), this["hTLV"]);
        });
    if (p !== undefined) {
        if (p["reqList"] !== undefined) {
            var S = new g["TBSRequest"](p);
            this["dTbsRequest"] = S;
        }
    }
}), YAHOO["lang"]["extend"](KJUR["asn1"]["ocsp"]["OCSPRequest"], KJUR["asn1"]["ASN1Object"]), (KJUR["asn1"]["ocsp"]["OCSPUtil"] = {}), (KJUR["asn1"]["ocsp"]["OCSPUtil"]["getRequestHex"] = function (p, n, A) {
    var L = KJUR,
        S = L["asn1"],
        Y = S["ocsp"];
    A === undefined && (A = Y["DEFAULT_HASH"]);
    var J = {
            "alg": A,
            "issuerCert": p,
            "subjectCert": n
        },
        C = new Y["OCSPRequest"]({
            "reqList": [J]
        });
    return C["getEncodedHex"]();
}), (KJUR["asn1"]["ocsp"]["OCSPUtil"]["getOCSPResponseInfo"] = function (p) {
    var n = ASN1HEX,
        A = n["getVbyList"],
        L = n["getIdxbyList"],
        A = n["getVbyList"],
        S = n["getV"],
        Y = {};
    try {
        var J = A(p, 0x0, [0x0], "0a");
        Y["responseStatus"] = parseInt(J, 0x10);
    } catch (R) {
    }
    if (Y["responseStatus"] !== 0x0) return Y;
    try {
        var C = L(p, 0x0, [0x1, 0x0, 0x1, 0x0, 0x0, 0x2, 0x0, 0x1]);
        p["substr"](C, 0x2) === "80" ? (Y["certStatus"] = "good") : p["substr"](C, 0x2) === "a1" ? ((Y["certStatus"] = "revoked"), (Y["revocationTime"] = hextoutf8(A(p, C, [0x0])))) : p["substr"](C, 0x2) === "82" && (Y["certStatus"] = "unknown");
    } catch (B) {
    }
    try {
        var V = L(p, 0x0, [0x1, 0x0, 0x1, 0x0, 0x0, 0x2, 0x0, 0x2]);
        Y["thisUpdate"] = hextoutf8(S(p, V));
    } catch (F) {
    }
    try {
        var W = L(p, 0x0, [0x1, 0x0, 0x1, 0x0, 0x0, 0x2, 0x0, 0x3]);
        p["substr"](W, 0x2) === "a0" && (Y["nextUpdate"] = hextoutf8(A(p, W, [0x0])));
    } catch (E) {
    }
    return Y;
});
var KJUR;
(typeof KJUR == "undefined" || !KJUR) && (KJUR = {});
(typeof KJUR["lang"] == "undefined" || !KJUR["lang"]) && (KJUR["lang"] = {});
KJUR["lang"]["String"] = function () {
};

function Base64x() {
}

function stoBA(p) {
    var n = new Array();
    for (var a = 0x0; a < p["length"]; a++) {
        n[a] = p["charCodeAt"](a);
    }
    return n;
}

function BAtos(p) {
    var n = "";
    for (var a = 0x0; a < p["length"]; a++) {
        n = n + String["fromCharCode"](p[a]);
    }
    return n;
}

function BAtohex(p) {
    var n = "";
    for (var a = 0x0; a < p["length"]; a++) {
        var A = p[a]["toString"](0x10);
        A["length"] == 0x1 && (A = "0" + A),
            (n = n + A);
    }
    return n;
}

function stohex(p) {
    return BAtohex(stoBA(p));
}

function stob64(p) {
    return hex2b64(stohex(p));
}

function stob64u(p) {
    return b64tob64u(hex2b64(stohex(p)));
}

function b64utos(p) {
    return BAtos(b64toBA(b64utob64(p)));
}

function b64tob64u(p) {
    return ((p = p["replace"](/\=/g, "")), (p = p["replace"](/\+/g, "-")), (p = p["replace"](/\//g, "_")), p);
}

function b64utob64(p) {
    return (p["length"] % 0x4 == 0x2 ? (p = p + "==") : p["length"] % 0x4 == 0x3 && (p = p + "="), (p = p["replace"](/-/g, "+")), (p = p["replace"](/_/g, "/")), p);
}

function hextob64u(p) {
    return (p["length"] % 0x2 == 0x1 && (p = "0" + p), b64tob64u(hex2b64(p)));
}

function b64utohex(p) {
    return b64tohex(b64utob64(p));
}

var utf8tob64u, b64utoutf8;
typeof Buffer === "function" ? ((utf8tob64u = function (p) {
    return b64tob64u(new Buffer(p, "utf8")["toString"]("base64"));
}), (b64utoutf8 = function (p) {
    return new Buffer(b64utob64(p), "base64")["toString"]("utf8");
})) : ((utf8tob64u = function (p) {
    return hextob64u(uricmptohex(encodeURIComponentAll(p)));
}), (b64utoutf8 = function (p) {
    return decodeURIComponent(hextouricmp(b64utohex(p)));
}));

function utf8tob64(p) {
    return hex2b64(uricmptohex(encodeURIComponentAll(p)));
}

function b64toutf8(p) {
    return decodeURIComponent(hextouricmp(b64tohex(p)));
}

function utf8tohex(p) {
    return uricmptohex(encodeURIComponentAll(p));
}

function hextoutf8(p) {
    return decodeURIComponent(hextouricmp(p));
}

function hextorstr(p) {
    var n = "";
    for (var A = 0x0; A < p["length"] - 0x1; A += 0x2) {
        n += String["fromCharCode"](parseInt(p["substr"](A, 0x2), 0x10));
    }
    return n;
}

function rstrtohex(p) {
    var n = "";
    for (var A = 0x0; A < p["length"]; A++) {
        n += ("0" + p["charCodeAt"](A)["toString"](0x10))["slice"](-0x2);
    }
    return n;
}

function hextob64(p) {
    return hex2b64(p);
}

function hextob64nl(p) {
    var n = hextob64(p),
        A = n["replace"](/(.{64})/g, "$1
    ");
    return (A = A["replace"](/\r\n$/, "")),
        A;
}

function b64nltohex(p) {
    var n = p["replace"](/[^0-9A-Za-z\/+=]*/g, ""),
        A = b64tohex(n);
    return A;
}

function hextopem(p, n) {
    var A = hextob64nl(p);
    return ("-----BEGIN " + n + "-----
    " + A + "
    -----END
    " + n + "--
    ---
        ");
}

function pemtohex(p, n) {
    if (p["indexOf"]("-----BEGIN ") == -0x1) throw ("can't find PEM header: " + n);
    return (n !== undefined ? ((p = p["replace"](new RegExp("^[^]*-----BEGIN " + n + "-----"), "")), (p = p["replace"](new RegExp("-----END " + n + "-----[^]*$"), ""))) : ((p = p["replace"](/^[^]*-----BEGIN [^-]+-----/, "")), (p = p["replace"](/-----END [^-]+-----[^]*$/, ""))), b64nltohex(p));
}

function hextoArrayBuffer(p) {
    if (p["length"] % 0x2 != 0x0) throw "input is not even length";
    if (p["match"](/^[0-9A-Fa-f]+$/) == null) throw "input is not hexadecimal";
    var n = new ArrayBuffer(p["length"] / 0x2),
        A = new DataView(n);
    for (var L = 0x0; L < p["length"] / 0x2; L++) {
        A["setUint8"](L, parseInt(p["substr"](L * 0x2, 0x2), 0x10));
    }
    return n;
}

function ArrayBuffertohex(p) {
    var n = "",
        A = new DataView(p);
    for (var L = 0x0; L < p["byteLength"]; L++) {
        n += ("00" + A["getUint8"](L)["toString"](0x10))["slice"](-0x2);
    }
    return n;
}

function zulutomsec(p) {
    var A, L, S, Y, J, C, V, W, R, B, F, E;
    E = p["match"](/^(\d{2}|\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/);
    if (E) return ((R = E[0x1]), (A = parseInt(R)), R["length"] === 0x2 && (0x32 <= A && A < 0x64 ? (A = 0x76c + A) : 0x0 <= A && A < 0x32 && (A = 0x7d0 + A)), (L = parseInt(E[0x2]) - 0x1), (S = parseInt(E[0x3])), (Y = parseInt(E[0x4])), (J = parseInt(E[0x5])), (C = parseInt(E[0x6])), (V = 0x0), (B = E[0x7]), B !== "" && ((F = (B["substr"](0x1) + "00")["substr"](0x0, 0x3)), (V = parseInt(F))), Date["UTC"](A, L, S, Y, J, C, V));
    throw ("unsupported zulu format: " + p);
}

function zulutosec(p) {
    var n = zulutomsec(p);
    return ~~(n / 0x3e8);
}

function zulutodate(p) {
    return new Date(zulutomsec(p));
}

function datetozulu(p, n, A) {
    var L, S = p["getUTCFullYear"]();
    if (n) {
        if (S < 0x79e || 0x801 < S) throw ("not proper year for UTCTime: " + S);
        L = ("" + S)["slice"](-0x2);
    } else L = ("000" + S)["slice"](-0x4);
    (L += ("0" + (p["getUTCMonth"]() + 0x1))["slice"](-0x2)),
        (L += ("0" + p["getUTCDate"]())["slice"](-0x2)),
        (L += ("0" + p["getUTCHours"]())["slice"](-0x2)),
        (L += ("0" + p["getUTCMinutes"]())["slice"](-0x2)),
        (L += ("0" + p["getUTCSeconds"]())["slice"](-0x2));
    if (A) {
        var Y = p["getUTCMilliseconds"]();
        Y !== 0x0 && ((Y = ("00" + Y)["slice"](-0x3)), (Y = Y["replace"](/0+$/g, "")), (L += "." + Y));
    }
    return (L += "Z"),
        L;
}

function uricmptohex(p) {
    return p["replace"](/%/g, "");
}

function hextouricmp(p) {
    return p["replace"](/(..)/g, "%$1");
}

function ipv6tohex(p) {
    var n = "malformed IPv6 address";
    if (!p["match"](/^[0-9A-Fa-f:]+$/)) throw n;
    p = p["toLowerCase"]();
    var a = p["split"](":")["length"] - 0x1;
    if (a < 0x2) throw n;
    var A = ":" ["repeat"](0x7 - a + 0x2);
    p = p["replace"]("::", A);
    var L = p["split"](":");
    if (L["length"] != 0x8) throw n;
    for (var S = 0x0; S < 0x8; S++) {
        L[S] = ("0000" + L[S])["slice"](-0x4);
    }
    return L["join"]("");
}

function hextoipv6(p) {
    if (!p["match"](/^[0-9A-Fa-f]{32}$/)) throw "malformed IPv6 address octet";
    p = p["toLowerCase"]();
    var n = p["match"](/.{1,4}/g);
    for (var a = 0x0; a < 0x8; a++) {
        (n[a] = n[a]["replace"](/^0+/, "")),
        n[a] == "" && (n[a] = "0");
    }
    p = ":" + n["join"](":") + ":";
    var A = p["match"](/:(0:){2,}/g);
    if (A === null) return p["slice"](0x1, -0x1);
    var L = "";
    for (var a = 0x0; a < A["length"]; a++) {
        A[a]["length"] > L["length"] && (L = A[a]);
    }
    return ((p = p["replace"](L, "::")), p["slice"](0x1, -0x1));
}

function hextoip(p) {
    var n = "malformed hex value";
    if (!p["match"](/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) throw n;
    if (p["length"] == 0x8) {
        var A;
        try {
            return ((A = parseInt(p["substr"](0x0, 0x2), 0x10) + "." + parseInt(p["substr"](0x2, 0x2), 0x10) + "." + parseInt(p["substr"](0x4, 0x2), 0x10) + "." + parseInt(p["substr"](0x6, 0x2), 0x10)), A);
        } catch (L) {
            throw n;
        }
    } else return p["length"] == 0x20 ? hextoipv6(p) : p;
}

function iptohex(p) {
    var n = "malformed IP address";
    p = p["toLowerCase"](p);
    if (p["match"](/^[0-9.]+$/)) {
        var a = p["split"](".");
        if (a["length"] !== 0x4) throw n;
        var A = "";
        try {
            for (var L = 0x0; L < 0x4; L++) {
                var S = parseInt(a[L]);
                A += ("0" + S["toString"](0x10))["slice"](-0x2);
            }
            return A;
        } catch (Y) {
            throw n;
        }
    } else {
        if (p["match"](/^[0-9a-f:]+$/) && p["indexOf"](":") !== -0x1) return ipv6tohex(p);
        else throw n;
    }
}

function encodeURIComponentAll(p) {
    var n = encodeURIComponent(p),
        A = "";
    for (var L = 0x0; L < n["length"]; L++) {
        n[L] == "%" ? ((A = A + n["substr"](L, 0x3)), (L = L + 0x2)) : (A = A + "%" + stohex(n[L]));
    }
    return A;
}

function newline_toUnix(p) {
    return (p = p["replace"](/\r\n/gm, "
    ")),
    p;
}

function newline_toDos(p) {
    return ((p = p["replace"](/\r\n/gm, "
    ")), (p = p["
    replace
    "](/\n/gm, "
    ")), p);
}

(KJUR["lang"]["String"]["isInteger"] = function (p) {
    return p["match"](/^[0-9]+$/) ? !![] : p["match"](/^-[0-9]+$/) ? !![] : ![];
}), (KJUR["lang"]["String"]["isHex"] = function (p) {
    return p["length"] % 0x2 == 0x0 && (p["match"](/^[0-9a-f]+$/) || p["match"](/^[0-9A-F]+$/)) ? !![] : ![];
}), (KJUR["lang"]["String"]["isBase64"] = function (p) {
    return ((p = p["replace"](/\s+/g, "")), p["match"](/^[0-9A-Za-z+\/]+={0,3}$/) && p["length"] % 0x4 == 0x0 ? !![] : ![]);
}), (KJUR["lang"]["String"]["isBase64URL"] = function (p) {
    if (p["match"](/[+/ = ] /)) return ![];
    return ((p = b64utob64(p)), KJUR["lang"]["String"]["isBase64"](p));
}), (KJUR["lang"]["String"]["isIntegerArray"] = function (p) {
    return ((p = p["replace"](/\s+/g, "")), p["match"](/^\[[0-9,]+\]$/) ? !![] : ![]);
});

function hextoposhex(p) {
    if (p["length"] % 0x2 == 0x1) return "0" + p;
    if (p["substr"](0x0, 0x1) > "7") return "00" + p;
    return p;
}

function intarystrtohex(p) {
    (p = p["replace"](/^\s*\[\s*/, "")),
        (p = p["replace"](/\s*\]\s*$/, "")),
        (p = p["replace"](/\s*/g, ""));
    try {
        var n = p["split"](/,/)["map"](function (A, L, S) {
            var Y = parseInt(A);
            if (Y < 0x0 || 0xff < Y) throw "integer not in range 0-255";
            var J = ("00" + Y["toString"](0x10))["slice"](-0x2);
            return J;
        })["join"]("");
        return n;
    } catch (A) {
        throw ("malformed integer array string: " + A);
    }
}

var strdiffidx = function (p, n) {
    var A = p["length"];
    p["length"] > n["length"] && (A = n["length"]);
    for (var L = 0x0; L < A; L++) {
        if (p["charCodeAt"](L) != n["charCodeAt"](L)) return L;
    }
    if (p["length"] != n["length"]) return A;
    return -0x1;
};
(typeof KJUR == "undefined" || !KJUR) && (KJUR = {});
(typeof KJUR["crypto"] == "undefined" || !KJUR["crypto"]) && (KJUR["crypto"] = {});
(KJUR["crypto"]["Util"] = new (function () {
    (this["DIGESTINFOHEAD"] = {
        "sha1": "3021300906052b0e03021a05000414",
        "sha224": "302d300d06096086480165030402040500041c",
        "sha256": "3031300d060960864801650304020105000420",
        "sha384": "3041300d060960864801650304020205000430",
        "sha512": "3051300d060960864801650304020305000440",
        "md2": "3020300c06082a864886f70d020205000410",
        "md5": "3020300c06082a864886f70d020505000410",
        "ripemd160": "3021300906052b2403020105000414"
    }),
        (this["DEFAULTPROVIDER"] = {
            "md5": "cryptojs",
            "sha1": "cryptojs",
            "sha224": "cryptojs",
            "sha256": "cryptojs",
            "sha384": "cryptojs",
            "sha512": "cryptojs",
            "ripemd160": "cryptojs",
            "hmacmd5": "cryptojs",
            "hmacsha1": "cryptojs",
            "hmacsha224": "cryptojs",
            "hmacsha256": "cryptojs",
            "hmacsha384": "cryptojs",
            "hmacsha512": "cryptojs",
            "hmacripemd160": "cryptojs",
            "MD5withRSA": "cryptojs/jsrsa",
            "SHA1withRSA": "cryptojs/jsrsa",
            "SHA224withRSA": "cryptojs/jsrsa",
            "SHA256withRSA": "cryptojs/jsrsa",
            "SHA384withRSA": "cryptojs/jsrsa",
            "SHA512withRSA": "cryptojs/jsrsa",
            "RIPEMD160withRSA": "cryptojs/jsrsa",
            "MD5withECDSA": "cryptojs/jsrsa",
            "SHA1withECDSA": "cryptojs/jsrsa",
            "SHA224withECDSA": "cryptojs/jsrsa",
            "SHA256withECDSA": "cryptojs/jsrsa",
            "SHA384withECDSA": "cryptojs/jsrsa",
            "SHA512withECDSA": "cryptojs/jsrsa",
            "RIPEMD160withECDSA": "cryptojs/jsrsa",
            "SHA1withDSA": "cryptojs/jsrsa",
            "SHA224withDSA": "cryptojs/jsrsa",
            "SHA256withDSA": "cryptojs/jsrsa",
            "MD5withRSAandMGF1": "cryptojs/jsrsa",
            "SHA1withRSAandMGF1": "cryptojs/jsrsa",
            "SHA224withRSAandMGF1": "cryptojs/jsrsa",
            "SHA256withRSAandMGF1": "cryptojs/jsrsa",
            "SHA384withRSAandMGF1": "cryptojs/jsrsa",
            "SHA512withRSAandMGF1": "cryptojs/jsrsa",
            "RIPEMD160withRSAandMGF1": "cryptojs/jsrsa"
        }),
        (this["CRYPTOJSMESSAGEDIGESTNAME"] = {
            "md5": CryptoJS["algo"]["MD5"],
            "sha1": CryptoJS["algo"]["SHA1"],
            "sha224": CryptoJS["algo"]["SHA224"],
            "sha256": CryptoJS["algo"]["SHA256"],
            "sha384": CryptoJS["algo"]["SHA384"],
            "sha512": CryptoJS["algo"]["SHA512"],
            "ripemd160": CryptoJS["algo"]["RIPEMD160"]
        }),
        (this["getDigestInfoHex"] = function (p, n) {
            if (typeof this["DIGESTINFOHEAD"][n] == "undefined") throw ("alg not supported in Util.DIGESTINFOHEAD: " + n);
            return (this["DIGESTINFOHEAD"][n] + p);
        }),
        (this["getPaddedDigestInfoHex"] = function (p, n, A) {
            var L = this["getDigestInfoHex"](p, n),
                S = A / 0x4;
            if (L["length"] + 0x16 > S) throw ("key is too short for SigAlg: keylen=" + A + "," + n);
            var Y = "0001",
                J = "00" + L,
                C = "",
                V = S - Y["length"] - J["length"];
            for (var W = 0x0; W < V; W += 0x2) {
                C += "ff";
            }
            var R = Y + C + J;
            return R;
        }),
        (this["hashString"] = function (p, n) {
            var A = new KJUR["crypto"]["MessageDigest"]({
                "alg": n
            });
            return A["digestString"](p);
        }),
        (this["hashHex"] = function (p, n) {
            var A = new KJUR["crypto"]["MessageDigest"]({
                "alg": n
            });
            return A["digestHex"](p);
        }),
        (this["sha1"] = function (p) {
            return this["hashString"](p, "sha1");
        }),
        (this["sha256"] = function (p) {
            return this["hashString"](p, "sha256");
        }),
        (this["sha256Hex"] = function (p) {
            return this["hashHex"](p, "sha256");
        }),
        (this["sha512"] = function (p) {
            return this["hashString"](p, "sha512");
        }),
        (this["sha512Hex"] = function (p) {
            return this["hashHex"](p, "sha512");
        }),
        (this["isKey"] = function (p) {
            return p instanceof RSAKey || p instanceof KJUR["crypto"]["DSA"] || p instanceof KJUR["crypto"]["ECDSA"] ? !![] : ![];
        });
})()), (KJUR["crypto"]["Util"]["md5"] = function (p) {
    var n = new KJUR["crypto"]["MessageDigest"]({
        "alg": "md5",
        "prov": "cryptojs"
    });
    return n["digestString"](p);
}), (KJUR["crypto"]["Util"]["ripemd160"] = function (p) {
    var n = new KJUR["crypto"]["MessageDigest"]({
        "alg": "ripemd160",
        "prov": "cryptojs"
    });
    return n["digestString"](p);
}), (KJUR["crypto"]["Util"]["SECURERANDOMGEN"] = new SecureRandom()), (KJUR["crypto"]["Util"]["getRandomHexOfNbytes"] = function (p) {
    var n = new Array(p);
    return (KJUR["crypto"]["Util"]["SECURERANDOMGEN"]["nextBytes"](n), BAtohex(n));
}), (KJUR["crypto"]["Util"]["getRandomBigIntegerOfNbytes"] = function (p) {
    return new BigInteger(KJUR["crypto"]["Util"]["getRandomHexOfNbytes"](p), 0x10);
}), (KJUR["crypto"]["Util"]["getRandomHexOfNbits"] = function (p) {
    var n = p % 0x8,
        A = (p - n) / 0x8,
        L = new Array(A + 0x1);
    return (KJUR["crypto"]["Util"]["SECURERANDOMGEN"]["nextBytes"](L), (L[0x0] = (((0xff << n) & 0xff) ^ 0xff) & L[0x0]), BAtohex(L));
}), (KJUR["crypto"]["Util"]["getRandomBigIntegerOfNbits"] = function (p) {
    return new BigInteger(KJUR["crypto"]["Util"]["getRandomHexOfNbits"](p), 0x10);
}), (KJUR["crypto"]["Util"]["getRandomBigIntegerZeroToMax"] = function (p) {
    var n = p["bitLength"]();
    while (0x1) {
        var A = KJUR["crypto"]["Util"]["getRandomBigIntegerOfNbits"](n);
        if (p["compareTo"](A) != -0x1) return A;
    }
}), (KJUR["crypto"]["Util"]["getRandomBigIntegerMinToMax"] = function (p, n) {
    var A = p["compareTo"](n);
    if (A == 0x1) throw "biMin is greater than biMax";
    if (A == 0x0) return p;
    var L = n["subtract"](p),
        g = KJUR["crypto"]["Util"]["getRandomBigIntegerZeroToMax"](L);
    return g["add"](p);
}), (KJUR["crypto"]["MessageDigest"] = function (p) {
    var n = null,
        A = null,
        L = null;
    (this["setAlgAndProvider"] = function (S, Y) {
        S = KJUR["crypto"]["MessageDigest"]["getCanonicalAlgName"](S);
        S !== null && Y === undefined && (Y = KJUR["crypto"]["Util"]["DEFAULTPROVIDER"][S]);
        if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:" ["indexOf"](S) != -0x1 && Y == "cryptojs") {
            try {
                this["md"] = KJUR["crypto"]["Util"]["CRYPTOJSMESSAGEDIGESTNAME"][S]["create"]();
            } catch (J) {
                throw ("setAlgAndProvider hash alg set fail alg=" + S + "/" + J);
            }
            (this["updateString"] = function (C) {
                this["md"]["update"](C);
            }),
                (this["updateHex"] = function (C) {
                    var V = CryptoJS["enc"]["Hex"]["parse"](C);
                    this["md"]["update"](V);
                }),
                (this["digest"] = function () {
                    var C = this["md"]["finalize"]();
                    return C["toString"](CryptoJS["enc"]["Hex"]);
                }),
                (this["digestString"] = function (C) {
                    return (this["updateString"](C), this["digest"]());
                }),
                (this["digestHex"] = function (C) {
                    return (this["updateHex"](C), this["digest"]());
                });
        }
        if (":sha256:" ["indexOf"](S) != -0x1 && Y == "sjcl") {
            try {
                this["md"] = new sjcl["hash"]["sha256"]();
            } catch (C) {
                throw ("setAlgAndProvider hash alg set fail alg=" + S + "/" + C);
            }
            (this["updateString"] = function (V) {
                this["md"]["update"](V);
            }),
                (this["updateHex"] = function (V) {
                    var W = sjcl["codec"]["hex"]["toBits"](V);
                    this["md"]["update"](W);
                }),
                (this["digest"] = function () {
                    var V = this["md"]["finalize"]();
                    return sjcl["codec"]["hex"]["fromBits"](V);
                }),
                (this["digestString"] = function (V) {
                    return (this["updateString"](V), this["digest"]());
                }),
                (this["digestHex"] = function (V) {
                    return (this["updateHex"](V), this["digest"]());
                });
        }
    }),
        (this["updateString"] = function (g) {
            throw ("updateString(str) not supported for this alg/prov: " + this["algName"] + "/" + this["provName"]);
        }),
        (this["updateHex"] = function (g) {
            throw ("updateHex(hex) not supported for this alg/prov: " + this["algName"] + "/" + this["provName"]);
        }),
        (this["digest"] = function () {
            throw ("digest() not supported for this alg/prov: " + this["algName"] + "/" + this["provName"]);
        }),
        (this["digestString"] = function (g) {
            throw ("digestString(str) not supported for this alg/prov: " + this["algName"] + "/" + this["provName"]);
        }),
        (this["digestHex"] = function (g) {
            throw ("digestHex(hex) not supported for this alg/prov: " + this["algName"] + "/" + this["provName"]);
        }),
    p !== undefined && p["alg"] !== undefined && ((this["algName"] = p["alg"]), p["prov"] === undefined && (this["provName"] = KJUR["crypto"]["Util"]["DEFAULTPROVIDER"][this["algName"]]), this["setAlgAndProvider"](this["algName"], this["provName"]));
}), (KJUR["crypto"]["MessageDigest"]["getCanonicalAlgName"] = function (p) {
    return (typeof p === "string" && ((p = p["toLowerCase"]()), (p = p["replace"](/-/, ""))), p);
}), (KJUR["crypto"]["MessageDigest"]["getHashLength"] = function (p) {
    var n = KJUR["crypto"]["MessageDigest"],
        A = n["getCanonicalAlgName"](p);
    if (n["HASHLENGTH"][A] === undefined) throw ("not supported algorithm: " + p);
    return n["HASHLENGTH"][A];
}), (KJUR["crypto"]["MessageDigest"]["HASHLENGTH"] = {
    "md5": 0x10,
    "sha1": 0x14,
    "sha224": 0x1c,
    "sha256": 0x20,
    "sha384": 0x30,
    "sha512": 0x40,
    "ripemd160": 0x14
}), (KJUR["crypto"]["Mac"] = function (p) {
    var n = null,
        A = null,
        L = null,
        g = null,
        S = null;
    (this["setAlgAndProvider"] = function (Y, J) {
        Y = Y["toLowerCase"]();
        Y == null && (Y = "hmacsha1");
        Y = Y["toLowerCase"]();
        if (Y["substr"](0x0, 0x4) != "hmac") throw ("setAlgAndProvider unsupported HMAC alg: " + Y);
        J === undefined && (J = KJUR["crypto"]["Util"]["DEFAULTPROVIDER"][Y]);
        this["algProv"] = Y + "/" + J;
        var C = Y["substr"](0x4);
        if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:" ["indexOf"](C) != -0x1 && J == "cryptojs") {
            try {
                var V = KJUR["crypto"]["Util"]["CRYPTOJSMESSAGEDIGESTNAME"][C];
                this["mac"] = CryptoJS["algo"]["HMAC"]["create"](V, this["pass"]);
            } catch (W) {
                throw ("setAlgAndProvider hash alg set fail hashAlg=" + C + "/" + W);
            }
            (this["updateString"] = function (R) {
                this["mac"]["update"](R);
            }),
                (this["updateHex"] = function (R) {
                    var B = CryptoJS["enc"]["Hex"]["parse"](R);
                    this["mac"]["update"](B);
                }),
                (this["doFinal"] = function () {
                    var R = this["mac"]["finalize"]();
                    return R["toString"](CryptoJS["enc"]["Hex"]);
                }),
                (this["doFinalString"] = function (R) {
                    return (this["updateString"](R), this["doFinal"]());
                }),
                (this["doFinalHex"] = function (R) {
                    return (this["updateHex"](R), this["doFinal"]());
                });
        }
    }),
        (this["updateString"] = function (Y) {
            throw ("updateString(str) not supported for this alg/prov: " + this["algProv"]);
        }),
        (this["updateHex"] = function (Y) {
            throw ("updateHex(hex) not supported for this alg/prov: " + this["algProv"]);
        }),
        (this["doFinal"] = function () {
            throw ("digest() not supported for this alg/prov: " + this["algProv"]);
        }),
        (this["doFinalString"] = function (Y) {
            throw ("digestString(str) not supported for this alg/prov: " + this["algProv"]);
        }),
        (this["doFinalHex"] = function (Y) {
            throw ("digestHex(hex) not supported for this alg/prov: " + this["algProv"]);
        }),
        (this["setPassword"] = function (Y) {
            if (typeof Y == "string") {
                var J = Y;
                (Y["length"] % 0x2 == 0x1 || !Y["match"](/^[0-9A-Fa-f]+$/)) && (J = rstrtohex(Y));
                this["pass"] = CryptoJS["enc"]["Hex"]["parse"](J);
                return;
            }
            if (typeof Y != "object") throw ("KJUR.crypto.Mac unsupported password type: " + Y);
            var J = null;
            if (Y["hex"] !== undefined) {
                if (Y["hex"]["length"] % 0x2 != 0x0 || !Y["hex"]["match"](/^[0-9A-Fa-f]+$/)) throw ("Mac: wrong hex password: " + Y["hex"]);
                J = Y["hex"];
            }
            Y["utf8"] !== undefined && (J = utf8tohex(Y["utf8"]));
            Y["rstr"] !== undefined && (J = rstrtohex(Y["rstr"]));
            Y["b64"] !== undefined && (J = b64tohex(Y["b64"]));
            Y["b64u"] !== undefined && (J = b64utohex(Y["b64u"]));
            if (J == null) throw ("KJUR.crypto.Mac unsupported password type: " + Y);
            this["pass"] = CryptoJS["enc"]["Hex"]["parse"](J);
        }),
    p !== undefined && (p["pass"] !== undefined && this["setPassword"](p["pass"]), p["alg"] !== undefined && ((this["algName"] = p["alg"]), p["prov"] === undefined && (this["provName"] = KJUR["crypto"]["Util"]["DEFAULTPROVIDER"][this["algName"]]), this["setAlgAndProvider"](this["algName"], this["provName"])));
}), (KJUR["crypto"]["Signature"] = function (A) {
    var L = null,
        S = null,
        Y = null,
        J = null,
        C = null,
        V = null,
        W = null,
        R = null,
        B = null,
        F = null,
        E = -0x1,
        s = null,
        I = null,
        K = null,
        T = null,
        Z = null;
    (this["_setAlgNames"] = function () {
        var w = this["algName"]["match"](/^(.+)with(.+)$/);
        w && ((this["mdAlgName"] = w[0x1]["toLowerCase"]()), (this["pubkeyAlgName"] = w[0x2]["toLowerCase"]()));
    }),
        (this["_zeroPaddingOfSignature"] = function (M, U) {
            var H = "",
                O = U / 0x4 - M["length"];
            for (var X = 0x0; X < O; X++) {
                H = H + "0";
            }
            return H + M;
        }),
        (this["setAlgAndProvider"] = function (w, M) {
            this["_setAlgNames"]();
            if (M != "cryptojs/jsrsa") throw ("provider not supported: " + M);
            if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:" ["indexOf"](this["mdAlgName"]) != -0x1) {
                try {
                    this["md"] = new KJUR["crypto"]["MessageDigest"]({
                        "alg": this["mdAlgName"]
                    });
                } catch (U) {
                    throw ("setAlgAndProvider hash alg set fail alg=" + this["mdAlgName"] + "/" + U);
                }
                (this["init"] = function (H, O) {
                    var X = null;
                    try {
                        O === undefined ? (X = KEYUTIL["getKey"](H)) : (X = KEYUTIL["getKey"](H, O));
                    } catch (G) {
                        throw "init failed:" + G;
                    }
                    if (X["isPrivate"] === !![]) (this["prvKey"] = X),
                        (this["state"] = "SIGN");
                    else {
                        if (X["isPublic"] === !![]) (this["pubKey"] = X),
                            (this["state"] = "VERIFY");
                        else throw ("init failed.:" + X);
                    }
                }),
                    (this["updateString"] = function (H) {
                        this["md"]["updateString"](H);
                    }),
                    (this["updateHex"] = function (H) {
                        this["md"]["updateHex"](H);
                    }),
                    (this["sign"] = function () {
                        this["sHashHex"] = this["md"]["digest"]();
                        this["prvKey"] === undefined && this["ecprvhex"] !== undefined && this["eccurvename"] !== undefined && KJUR["crypto"]["ECDSA"] !== undefined && (this["prvKey"] = new KJUR["crypto"]["ECDSA"]({
                            "curve": this["eccurvename"],
                            "prv": this["ecprvhex"]
                        }));
                        if (this["prvKey"] instanceof RSAKey && this["pubkeyAlgName"] === "rsaandmgf1") this["hSign"] = this["prvKey"]["signWithMessageHashPSS"](this["sHashHex"], this["mdAlgName"], this["pssSaltLen"]);
                        else {
                            if (this["prvKey"] instanceof RSAKey && this["pubkeyAlgName"] === "rsa") this["hSign"] = this["prvKey"]["signWithMessageHash"](this["sHashHex"], this["mdAlgName"]);
                            else {
                                if (this["prvKey"] instanceof KJUR["crypto"]["ECDSA"]) this["hSign"] = this["prvKey"]["signWithMessageHash"](this["sHashHex"]);
                                else {
                                    if (this["prvKey"] instanceof KJUR["crypto"]["DSA"]) this["hSign"] = this["prvKey"]["signWithMessageHash"](this["sHashHex"]);
                                    else throw ("Signature: unsupported private key alg: " + this["pubkeyAlgName"]);
                                }
                            }
                        }
                        return this["hSign"];
                    }),
                    (this["signString"] = function (H) {
                        return (this["updateString"](H), this["sign"]());
                    }),
                    (this["signHex"] = function (H) {
                        return (this["updateHex"](H), this["sign"]());
                    }),
                    (this["verify"] = function (H) {
                        this["sHashHex"] = this["md"]["digest"]();
                        this["pubKey"] === undefined && this["ecpubhex"] !== undefined && this["eccurvename"] !== undefined && KJUR["crypto"]["ECDSA"] !== undefined && (this["pubKey"] = new KJUR["crypto"]["ECDSA"]({
                            "curve": this["eccurvename"],
                            "pub": this["ecpubhex"]
                        }));
                        if (this["pubKey"] instanceof RSAKey && this["pubkeyAlgName"] === "rsaandmgf1") return this["pubKey"]["verifyWithMessageHashPSS"](this["sHashHex"], H, this["mdAlgName"], this["pssSaltLen"]);
                        else {
                            if (this["pubKey"] instanceof RSAKey && this["pubkeyAlgName"] === "rsa") return this["pubKey"]["verifyWithMessageHash"](this["sHashHex"], H);
                            else {
                                if (KJUR["crypto"]["ECDSA"] !== undefined && this["pubKey"] instanceof KJUR["crypto"]["ECDSA"]) return this["pubKey"]["verifyWithMessageHash"](this["sHashHex"], H);
                                else {
                                    if (KJUR["crypto"]["DSA"] !== undefined && this["pubKey"] instanceof KJUR["crypto"]["DSA"]) return this["pubKey"]["verifyWithMessageHash"](this["sHashHex"], H);
                                    else throw ("Signature: unsupported public key alg: " + this["pubkeyAlgName"]);
                                }
                            }
                        }
                    });
            }
        }),
        (this["init"] = function (w, M) {
            throw ("init(key, pass) not supported for this alg:prov=" + this["algProvName"]);
        }),
        (this["updateString"] = function (w) {
            throw ("updateString(str) not supported for this alg:prov=" + this["algProvName"]);
        }),
        (this["updateHex"] = function (w) {
            throw ("updateHex(hex) not supported for this alg:prov=" + this["algProvName"]);
        }),
        (this["sign"] = function () {
            throw ("sign() not supported for this alg:prov=" + this["algProvName"]);
        }),
        (this["signString"] = function (w) {
            throw ("digestString(str) not supported for this alg:prov=" + this["algProvName"]);
        }),
        (this["signHex"] = function (w) {
            throw ("digestHex(hex) not supported for this alg:prov=" + this["algProvName"]);
        }),
        (this["verify"] = function (w) {
            throw ("verify(hSigVal) not supported for this alg:prov=" + this["algProvName"]);
        }),
        (this["initParams"] = A);
    if (A !== undefined) {
        A["alg"] !== undefined && ((this["algName"] = A["alg"]), A["prov"] === undefined ? (this["provName"] = KJUR["crypto"]["Util"]["DEFAULTPROVIDER"][this["algName"]]) : (this["provName"] = A["prov"]), (this["algProvName"] = this["algName"] + ":" + this["provName"]), this["setAlgAndProvider"](this["algName"], this["provName"]), this["_setAlgNames"]());
        A["psssaltlen"] !== undefined && (this["pssSaltLen"] = A["psssaltlen"]);
        if (A["prvkeypem"] !== undefined) {
            if (A["prvkeypas"] !== undefined) throw "both prvkeypem and prvkeypas parameters not supported";
            else try {
                var L = KEYUTIL["getKey"](A["prvkeypem"]);
                this["init"](L);
            } catch (w) {
                throw ("fatal error to load pem private key: " + w);
            }
        }
    }
}), (KJUR["crypto"]["Cipher"] = function (p) {
}), (KJUR["crypto"]["Cipher"]["encrypt"] = function (p, n, a) {
    if (n instanceof RSAKey && n["isPublic"]) {
        var A = KJUR["crypto"]["Cipher"]["getAlgByKeyAndName"](n, a);
        if (A === "RSA") return n["encrypt"](p);
        if (A === "RSAOAEP") return n["encryptOAEP"](p, "sha1");
        var L = A["match"](/^RSAOAEP(\d+)$/);
        if (L !== null) return n["encryptOAEP"](p, "sha" + L[0x1]);
        throw ("Cipher.encrypt: unsupported algorithm for RSAKey: " + a);
    } else throw "Cipher.encrypt: unsupported key or algorithm";
}), (KJUR["crypto"]["Cipher"]["decrypt"] = function (p, n, a) {
    if (n instanceof RSAKey && n["isPrivate"]) {
        var A = KJUR["crypto"]["Cipher"]["getAlgByKeyAndName"](n, a);
        if (A === "RSA") return n["decrypt"](p);
        if (A === "RSAOAEP") return n["decryptOAEP"](p, "sha1");
        var L = A["match"](/^RSAOAEP(\d+)$/);
        if (L !== null) return n["decryptOAEP"](p, "sha" + L[0x1]);
        throw ("Cipher.decrypt: unsupported algorithm for RSAKey: " + a);
    } else throw "Cipher.decrypt: unsupported key or algorithm";
}), (KJUR["crypto"]["Cipher"]["getAlgByKeyAndName"] = function (p, n) {
    if (p instanceof RSAKey) {
        if (":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:" ["indexOf"](n) != -0x1) return n;
        if (n === null || n === undefined) return "RSA";
        throw ("getAlgByKeyAndName: not supported algorithm name for RSAKey: " + n);
    }
    throw ("getAlgByKeyAndName: not supported algorithm name: " + n);
}), (KJUR["crypto"]["OID"] = new (function () {
    this["oidhex2name"] = {
        "2a864886f70d010101": "rsaEncryption",
        "2a8648ce3d0201": "ecPublicKey",
        "2a8648ce380401": "dsa",
        "2a8648ce3d030107": "secp256r1",
        "2b8104001f": "secp192k1",
        "2b81040021": "secp224r1",
        "2b8104000a": "secp256k1",
        "2b81040023": "secp521r1",
        "2b81040022": "secp384r1",
        "2a8648ce380403": "SHA1withDSA",
        "608648016503040301": "SHA224withDSA",
        "608648016503040302": "SHA256withDSA"
    };
})());
(typeof KJUR == "undefined" || !KJUR) && (KJUR = {});
(typeof KJUR["crypto"] == "undefined" || !KJUR["crypto"]) && (KJUR["crypto"] = {});
(KJUR["crypto"]["ECDSA"] = function (p) {
    var n = "secp256r1",
        A = null,
        L = null,
        S = null,
        Y = BigInteger,
        J = ECPointFp,
        C = KJUR["crypto"]["ECDSA"],
        V = KJUR["crypto"]["ECParameterDB"],
        W = new SecureRandom(),
        R = null;
    (this["type"] = "EC"),
        (this["isPrivate"] = ![]),
        (this["isPublic"] = ![]);

    function B(F, E, I, K) {
        var T = Math["max"](E["bitLength"](), K["bitLength"]()),
            Z = F["add2D"](I),
            w = F["curve"]["getInfinity"]();
        for (var M = T - 0x1; M >= 0x0; --M) {
            (w = w["twice2D"]()),
                (w["z"] = Y["ONE"]),
                E["testBit"](M) ? K["testBit"](M) ? (w = w["add2D"](Z)) : (w = w["add2D"](F)) : K["testBit"](M) && (w = w["add2D"](I));
        }
        return w;
    }

    (this["getBigRandom"] = function (F) {
        return new Y(F["bitLength"](), W)["mod"](F["subtract"](Y["ONE"]))["add"](Y["ONE"]);
    }),
        (this["setNamedCurve"] = function (F) {
            (this["ecparams"] = V["getByName"](F)),
                (this["prvKeyHex"] = null),
                (this["pubKeyHex"] = null),
                (this["curveName"] = F);
        }),
        (this["setPrivateKeyHex"] = function (F) {
            (this["isPrivate"] = !![]),
                (this["prvKeyHex"] = F);
        }),
        (this["setPublicKeyHex"] = function (F) {
            (this["isPublic"] = !![]),
                (this["pubKeyHex"] = F);
        }),
        (this["getPublicKeyXYHex"] = function () {
            var F = this["pubKeyHex"];
            if (F["substr"](0x0, 0x2) !== "04") throw "this method supports uncompressed format(04) only";
            var E = this["ecparams"]["keylen"] / 0x4;
            if (F["length"] !== 0x2 + E * 0x2) throw "malformed public key hex length";
            var s = {};
            return ((s["x"] = F["substr"](0x2, E)), (s["y"] = F["substr"](0x2 + E)), s);
        }),
        (this["getShortNISTPCurveName"] = function () {
            var F = this["curveName"];
            if (F === "secp256r1" || F === "NIST P-256" || F === "P-256" || F === "prime256v1") return "P-256";
            if (F === "secp384r1" || F === "NIST P-384" || F === "P-384") return "P-384";
            return null;
        }),
        (this["generateKeyPairHex"] = function () {
            var F = this["ecparams"]["n"],
                E = this["getBigRandom"](F),
                I = this["ecparams"]["G"]["multiply"](E),
                K = I["getX"]()["toBigInteger"](),
                T = I["getY"]()["toBigInteger"](),
                Z = this["ecparams"]["keylen"] / 0x4,
                w = ("0000000000" + E["toString"](0x10))["slice"](-Z),
                M = ("0000000000" + K["toString"](0x10))["slice"](-Z),
                U = ("0000000000" + T["toString"](0x10))["slice"](-Z),
                H = "04" + M + U;
            return (this["setPrivateKeyHex"](w), this["setPublicKeyHex"](H), {
                "ecprvhex": w,
                "ecpubhex": H
            });
        }),
        (this["signWithMessageHash"] = function (F) {
            return this["signHex"](F, this["prvKeyHex"]);
        }),
        (this["signHex"] = function (F, E) {
            var s = new Y(E, 0x10),
                I = this["ecparams"]["n"],
                K = new Y(F["substring"](0x0, this["ecparams"]["keylen"] / 0x4), 0x10);
            do {
                var T = this["getBigRandom"](I), Z = this["ecparams"]["G"], M = Z["multiply"](T),
                    U = M["getX"]()["toBigInteger"]()["mod"](I);
            } while (U ["compareTo"](Y["ZERO"]) <= 0x0);
            var H = T["modInverse"](I)["multiply"](K["add"](s["multiply"](U)))["mod"](I);
            return C["biRSSigToASN1Sig"](U, H);
        }),
        (this["sign"] = function (F, E) {
            var s = E,
                I = this["ecparams"]["n"],
                K = Y["fromByteArrayUnsigned"](F);
            do {
                var T = this["getBigRandom"](I), Z = this["ecparams"]["G"], M = Z["multiply"](T),
                    U = M["getX"]()["toBigInteger"]()["mod"](I);
            } while (U ["compareTo"](BigInteger["ZERO"]) <= 0x0);
            var H = T["modInverse"](I)["multiply"](K["add"](s["multiply"](U)))["mod"](I);
            return this["serializeSig"](U, H);
        }),
        (this["verifyWithMessageHash"] = function (F, E) {
            return this["verifyHex"](F, E, this["pubKeyHex"]);
        }),
        (this["verifyHex"] = function (F, E, s) {
            try {
                var I, K, T = C["parseSigHex"](E);
                (I = T["r"]),
                    (K = T["s"]);
                var Z = J["decodeFromHex"](this["ecparams"]["curve"], s),
                    M = new Y(F["substring"](0x0, this["ecparams"]["keylen"] / 0x4), 0x10);
                return this["verifyRaw"](M, I, K, Z);
            } catch (U) {
                return ![];
            }
        }),
        (this["verify"] = function (F, E, s) {
            var I, K;
            if (Bitcoin["Util"]["isArray"](E)) {
                var T = this["parseSig"](E);
                (I = T["r"]),
                    (K = T["s"]);
            } else {
                if ("object" === typeof E && E["r"] && E["s"]) (I = E["r"]),
                    (K = E["s"]);
                else throw "Invalid value for signature";
            }
            var Z;
            if (s instanceof ECPointFp) Z = s;
            else {
                if (Bitcoin["Util"]["isArray"](s)) Z = J["decodeFrom"](this["ecparams"]["curve"], s);
                else throw "Invalid format for pubkey value, must be byte array or ECPointFp";
            }
            var w = Y["fromByteArrayUnsigned"](F);
            return this["verifyRaw"](w, I, K, Z);
        }),
        (this["verifyRaw"] = function (F, E, s, I) {
            var K = this["ecparams"]["n"],
                T = this["ecparams"]["G"];
            if (E["compareTo"](Y["ONE"]) < 0x0 || E["compareTo"](K) >= 0x0) return ![];
            if (s["compareTo"](Y["ONE"]) < 0x0 || s["compareTo"](K) >= 0x0) return ![];
            var Z = s["modInverse"](K),
                M = F["multiply"](Z)["mod"](K),
                U = E["multiply"](Z)["mod"](K),
                H = T["multiply"](M)["add"](I["multiply"](U)),
                O = H["getX"]()["toBigInteger"]()["mod"](K);
            return O["equals"](E);
        }),
        (this["serializeSig"] = function (F, E) {
            var s = F["toByteArraySigned"](),
                I = E["toByteArraySigned"](),
                K = [];
            return (K["push"](0x2), K["push"](s["length"]), (K = K["concat"](s)), K["push"](0x2), K["push"](I["length"]), (K = K["concat"](I)), K["unshift"](K["length"]), K["unshift"](0x30), K);
        }),
        (this["parseSig"] = function (F) {
            var E;
            if (F[0x0] != 0x30) throw new Error("Signature not a valid DERSequence");
            E = 0x2;
            if (F[E] != 0x2) throw new Error("First element in signature must be a DERInteger");
            var s = F["slice"](E + 0x2, E + 0x2 + F[E + 0x1]);
            E += 0x2 + F[E + 0x1];
            if (F[E] != 0x2) throw new Error("Second element in signature must be a DERInteger");
            var I = F["slice"](E + 0x2, E + 0x2 + F[E + 0x1]);
            E += 0x2 + F[E + 0x1];
            var K = Y["fromByteArrayUnsigned"](s),
                T = Y["fromByteArrayUnsigned"](I);
            return {
                "r": K,
                "s": T
            };
        }),
        (this["parseSigCompact"] = function (F) {
            if (F["length"] !== 0x41) throw "Signature has the wrong length";
            var E = F[0x0] - 0x1b;
            if (E < 0x0 || E > 0x7) throw "Invalid signature type";
            var s = this["ecparams"]["n"],
                I = Y["fromByteArrayUnsigned"](F["slice"](0x1, 0x21))["mod"](s),
                K = Y["fromByteArrayUnsigned"](F["slice"](0x21, 0x41))["mod"](s);
            return {
                "r": I,
                "s": K,
                "i": E
            };
        }),
        (this["readPKCS5PrvKeyHex"] = function (F) {
            var E = ASN1HEX,
                I = C["getName"],
                K = E["getVbyList"];
            if (E["isASN1HEX"](F) === ![]) throw "not ASN.1 hex string";
            var T, Z, w;
            try {
                (T = K(F, 0x0, [0x2, 0x0], "06")),
                    (Z = K(F, 0x0, [0x1], "04"));
                try {
                    w = K(F, 0x0, [0x3, 0x0], "03")["substr"](0x2);
                } catch (M) {
                }
            } catch (u) {
                throw "malformed PKCS#1/5 plain ECC private key";
            }
            this["curveName"] = I(T);
            if (this["curveName"] === undefined) throw "unsupported curve name";
            this["setNamedCurve"](this["curveName"]),
                this["setPublicKeyHex"](w),
                this["setPrivateKeyHex"](Z),
                (this["isPublic"] = ![]);
        }),
        (this["readPKCS8PrvKeyHex"] = function (F) {
            var E = ASN1HEX,
                I = KJUR["crypto"]["ECDSA"]["getName"],
                K = E["getVbyList"];
            if (E["isASN1HEX"](F) === ![]) throw "not ASN.1 hex string";
            var T, Z, w, M;
            try {
                (T = K(F, 0x0, [0x1, 0x0], "06")),
                    (Z = K(F, 0x0, [0x1, 0x1], "06")),
                    (w = K(F, 0x0, [0x2, 0x0, 0x1], "04"));
                try {
                    M = K(F, 0x0, [0x2, 0x0, 0x2, 0x0], "03")["substr"](0x2);
                } catch (U) {
                }
            } catch (H) {
                throw "malformed PKCS#8 plain ECC private key";
            }
            this["curveName"] = I(Z);
            if (this["curveName"] === undefined) throw "unsupported curve name";
            this["setNamedCurve"](this["curveName"]),
                this["setPublicKeyHex"](M),
                this["setPrivateKeyHex"](w),
                (this["isPublic"] = ![]);
        }),
        (this["readPKCS8PubKeyHex"] = function (F) {
            var E = ASN1HEX,
                I = KJUR["crypto"]["ECDSA"]["getName"],
                K = E["getVbyList"];
            if (E["isASN1HEX"](F) === ![]) throw "not ASN.1 hex string";
            var T, Z, w;
            try {
                (T = K(F, 0x0, [0x0, 0x0], "06")),
                    (Z = K(F, 0x0, [0x0, 0x1], "06")),
                    (w = K(F, 0x0, [0x1], "03")["substr"](0x2));
            } catch (M) {
                throw "malformed PKCS#8 ECC public key";
            }
            this["curveName"] = I(Z);
            if (this["curveName"] === null) throw "unsupported curve name";
            this["setNamedCurve"](this["curveName"]),
                this["setPublicKeyHex"](w);
        }),
        (this["readCertPubKeyHex"] = function (F, E) {
            E !== 0x5 && (E = 0x6);
            var I = ASN1HEX,
                K = C["getName"],
                T = I["getVbyList"];
            if (I["isASN1HEX"](F) === ![]) throw "not ASN.1 hex string";
            var Z, w;
            try {
                (Z = T(F, 0x0, [0x0, E, 0x0, 0x1], "06")),
                    (w = T(F, 0x0, [0x0, E, 0x1], "03")["substr"](0x2));
            } catch (M) {
                throw "malformed X.509 certificate ECC public key";
            }
            this["curveName"] = K(Z);
            if (this["curveName"] === null) throw "unsupported curve name";
            this["setNamedCurve"](this["curveName"]),
                this["setPublicKeyHex"](w);
        }),
    p !== undefined && p["curve"] !== undefined && (this["curveName"] = p["curve"]),
    this["curveName"] === undefined && (this["curveName"] = n),
        this["setNamedCurve"](this["curveName"]),
    p !== undefined && (p["prv"] !== undefined && this["setPrivateKeyHex"](p["prv"]), p["pub"] !== undefined && this["setPublicKeyHex"](p["pub"]));
}), (KJUR["crypto"]["ECDSA"]["parseSigHex"] = function (p) {
    var n = KJUR["crypto"]["ECDSA"]["parseSigHexInHexRS"](p),
        A = new BigInteger(n["r"], 0x10),
        L = new BigInteger(n["s"], 0x10);
    return {
        "r": A,
        "s": L
    };
}), (KJUR["crypto"]["ECDSA"]["parseSigHexInHexRS"] = function (p) {
    var n = ASN1HEX,
        a = n["getChildIdx"],
        A = n["getV"];
    n["checkStrictDER"](p, 0x0);
    if (p["substr"](0x0, 0x2) != "30") throw new Error("signature is not a ASN.1 sequence");
    var L = a(p, 0x0);
    if (L["length"] != 0x2) throw new Error("signature shall have two elements");
    var S = L[0x0],
        Y = L[0x1];
    if (p["substr"](S, 0x2) != "02") throw new Error("1st item not ASN.1 integer");
    if (p["substr"](Y, 0x2) != "02") throw new Error("2nd item not ASN.1 integer");
    var J = A(p, S),
        C = A(p, Y);
    return {
        "r": J,
        "s": C
    };
}), (KJUR["crypto"]["ECDSA"]["asn1SigToConcatSig"] = function (p) {
    var n = KJUR["crypto"]["ECDSA"]["parseSigHexInHexRS"](p),
        A = n["r"],
        L = n["s"];
    A["substr"](0x0, 0x2) == "00" && A["length"] % 0x20 == 0x2 && (A = A["substr"](0x2));
    L["substr"](0x0, 0x2) == "00" && L["length"] % 0x20 == 0x2 && (L = L["substr"](0x2));
    A["length"] % 0x20 == 0x1e && (A = "00" + A);
    L["length"] % 0x20 == 0x1e && (L = "00" + L);
    if (A["length"] % 0x20 != 0x0) throw "unknown ECDSA sig r length error";
    if (L["length"] % 0x20 != 0x0) throw "unknown ECDSA sig s length error";
    return A + L;
}), (KJUR["crypto"]["ECDSA"]["concatSigToASN1Sig"] = function (p) {
    if (((p["length"] / 0x2) * 0x8) % (0x10 * 0x8) != 0x0) throw "unknown ECDSA concatinated r-s sig  length error";
    var n = p["substr"](0x0, p["length"] / 0x2),
        A = p["substr"](p["length"] / 0x2);
    return KJUR["crypto"]["ECDSA"]["hexRSSigToASN1Sig"](n, A);
}), (KJUR["crypto"]["ECDSA"]["hexRSSigToASN1Sig"] = function (p, n) {
    var A = new BigInteger(p, 0x10),
        L = new BigInteger(n, 0x10);
    return KJUR["crypto"]["ECDSA"]["biRSSigToASN1Sig"](A, L);
}), (KJUR["crypto"]["ECDSA"]["biRSSigToASN1Sig"] = function (p, n) {
    var A = KJUR["asn1"],
        L = new A["DERInteger"]({
            "bigint": p
        }),
        g = new A["DERInteger"]({
            "bigint": n
        }),
        S = new A["DERSequence"]({
            "array": [L, g]
        });
    return S["getEncodedHex"]();
}), (KJUR["crypto"]["ECDSA"]["getName"] = function (p) {
    if (p === "2b8104001f") return "secp192k1";
    if (p === "2a8648ce3d030107") return "secp256r1";
    if (p === "2b8104000a") return "secp256k1";
    if (p === "2b81040021") return "secp224r1";
    if (p === "2b81040022") return "secp384r1";
    if ("|secp256r1|NIST P-256|P-256|prime256v1|" ["indexOf"](p) !== -0x1) return "secp256r1";
    if ("|secp256k1|" ["indexOf"](p) !== -0x1) return "secp256k1";
    if ("|secp224r1|NIST P-224|P-224|" ["indexOf"](p) !== -0x1) return "secp224r1";
    if ("|secp384r1|NIST P-384|P-384|" ["indexOf"](p) !== -0x1) return "secp384r1";
    return null;
});
(typeof KJUR == "undefined" || !KJUR) && (KJUR = {});
(typeof KJUR["crypto"] == "undefined" || !KJUR["crypto"]) && (KJUR["crypto"] = {});
(KJUR["crypto"]["ECParameterDB"] = new (function () {
    var p = {},
        n = {};

    function A(L) {
        return new BigInteger(L, 0x10);
    }

    (this["getByName"] = function (L) {
        var g = L;
        typeof n[g] != "undefined" && (g = n[L]);
        if (typeof p[g] != "undefined") return p[g];
        throw ("unregistered EC curve name: " + g);
    }),
        (this["regist"] = function (L, S, Y, J, C, V, W, R, B, F, E, I) {
            p[L] = {};
            var K = A(Y),
                T = A(J),
                i = A(C),
                Z = A(V),
                M = A(W),
                U = new ECCurveFp(K, T, i),
                h = U["decodePointHex"]("04" + R + B);
            (p[L]["name"] = L),
                (p[L]["keylen"] = S),
                (p[L]["curve"] = U),
                (p[L]["G"] = h),
                (p[L]["n"] = Z),
                (p[L]["h"] = M),
                (p[L]["oid"] = E),
                (p[L]["info"] = I);
            for (var H = 0x0; H < F["length"]; H++) {
                n[F[H]] = L;
            }
        });
})()), KJUR["crypto"]["ECParameterDB"]["regist"]("secp128r1", 0x80, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field"), KJUR["crypto"]["ECParameterDB"]["regist"]("secp160k1", 0xa0, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field"), KJUR["crypto"]["ECParameterDB"]["regist"]("secp160r1", 0xa0, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field"), KJUR["crypto"]["ECParameterDB"]["regist"]("secp192k1", 0xc0, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []), KJUR["crypto"]["ECParameterDB"]["regist"]("secp192r1", 0xc0, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []), KJUR["crypto"]["ECParameterDB"]["regist"]("secp224r1", 0xe0, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []), KJUR["crypto"]["ECParameterDB"]["regist"]("secp256k1", 0x100, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []), KJUR["crypto"]["ECParameterDB"]["regist"]("secp256r1", 0x100, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", ["NIST P-256", "P-256", "prime256v1"]), KJUR["crypto"]["ECParameterDB"]["regist"]("secp384r1", 0x180, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", ["NIST P-384", "P-384"]), KJUR["crypto"]["ECParameterDB"]["regist"]("secp521r1", 0x209, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", ["NIST P-521", "P-521"]);
(typeof KJUR == "undefined" || !KJUR) && (KJUR = {});
(typeof KJUR["crypto"] == "undefined" || !KJUR["crypto"]) && (KJUR["crypto"] = {});
KJUR["crypto"]["DSA"] = function () {
    (this["p"] = null),
        (this["q"] = null),
        (this["g"] = null),
        (this["y"] = null),
        (this["x"] = null),
        (this["type"] = "DSA"),
        (this["isPrivate"] = ![]),
        (this["isPublic"] = ![]),
        (this["setPrivate"] = function (p, n, A, L, g) {
            (this["isPrivate"] = !![]),
                (this["p"] = p),
                (this["q"] = n),
                (this["g"] = A),
                (this["y"] = L),
                (this["x"] = g);
        }),
        (this["setPrivateHex"] = function (p, n, A, L, S) {
            var Y, J, C, V, W;
            (Y = new BigInteger(p, 0x10)),
                (J = new BigInteger(n, 0x10)),
                (C = new BigInteger(A, 0x10)),
                typeof L === "string" && L["length"] > 0x1 ? (V = new BigInteger(L, 0x10)) : (V = null),
                (W = new BigInteger(S, 0x10)),
                this["setPrivate"](Y, J, C, V, W);
        }),
        (this["setPublic"] = function (p, n, A, L) {
            (this["isPublic"] = !![]),
                (this["p"] = p),
                (this["q"] = n),
                (this["g"] = A),
                (this["y"] = L),
                (this["x"] = null);
        }),
        (this["setPublicHex"] = function (p, n, A, L) {
            var S, Y, J, C;
            (S = new BigInteger(p, 0x10)),
                (Y = new BigInteger(n, 0x10)),
                (J = new BigInteger(A, 0x10)),
                (C = new BigInteger(L, 0x10)),
                this["setPublic"](S, Y, J, C);
        }),
        (this["signWithMessageHash"] = function (p) {
            var A = this["p"],
                L = this["q"],
                g = this["g"],
                S = this["y"],
                Y = this["x"],
                J = KJUR["crypto"]["Util"]["getRandomBigIntegerMinToMax"](BigInteger["ONE"]["add"](BigInteger["ONE"]), L["subtract"](BigInteger["ONE"])),
                C = p["substr"](0x0, L["bitLength"]() / 0x4),
                V = new BigInteger(C, 0x10),
                W = g["modPow"](J, A)["mod"](L),
                R = J["modInverse"](L)["multiply"](V["add"](Y["multiply"](W)))["mod"](L),
                B = KJUR["asn1"]["ASN1Util"]["jsonToASN1HEX"]({
                    "seq": [{
                        "int": {
                            "bigint": W
                        }
                    },
                        {
                            "int": {
                                "bigint": R
                            }
                        }]
                });
            return B;
        }),
        (this["verifyWithMessageHash"] = function (p, A) {
            var L = this["p"],
                g = this["q"],
                S = this["g"],
                Y = this["y"],
                J = this["parseASN1Signature"](A),
                C = J[0x0],
                V = J[0x1],
                W = p["substr"](0x0, g["bitLength"]() / 0x4),
                R = new BigInteger(W, 0x10);
            if (BigInteger["ZERO"]["compareTo"](C) > 0x0 || C["compareTo"](g) > 0x0) throw "invalid DSA signature";
            if (BigInteger["ZERO"]["compareTo"](V) >= 0x0 || V["compareTo"](g) > 0x0) throw "invalid DSA signature";
            var B = V["modInverse"](g),
                F = R["multiply"](B)["mod"](g),
                E = C["multiply"](B)["mod"](g),
                s = S["modPow"](F, L)["multiply"](Y["modPow"](E, L))["mod"](L)["mod"](g);
            return s["compareTo"](C) == 0x0;
        }),
        (this["parseASN1Signature"] = function (p) {
            try {
                var n = new BigInteger(ASN1HEX["getVbyList"](p, 0x0, [0x0], "02"), 0x10),
                    A = new BigInteger(ASN1HEX["getVbyList"](p, 0x0, [0x1], "02"), 0x10);
                return [n, A];
            } catch (L) {
                throw "malformed ASN.1 DSA signature";
            }
        }),
        (this["readPKCS5PrvKeyHex"] = function (p) {
            var n, A, L, S, Y, J = ASN1HEX,
                C = J["getVbyList"];
            if (J["isASN1HEX"](p) === ![]) throw "not ASN.1 hex string";
            try {
                (n = C(p, 0x0, [0x1], "02")),
                    (A = C(p, 0x0, [0x2], "02")),
                    (L = C(p, 0x0, [0x3], "02")),
                    (S = C(p, 0x0, [0x4], "02")),
                    (Y = C(p, 0x0, [0x5], "02"));
            } catch (V) {
                console["log"]("EXCEPTION:" + V);
                throw "malformed PKCS#1/5 plain DSA private key";
            }
            this["setPrivateHex"](n, A, L, S, Y);
        }),
        (this["readPKCS8PrvKeyHex"] = function (p) {
            var n, A, L, S, Y = ASN1HEX,
                J = Y["getVbyList"];
            if (Y["isASN1HEX"](p) === ![]) throw "not ASN.1 hex string";
            try {
                (n = J(p, 0x0, [0x1, 0x1, 0x0], "02")),
                    (A = J(p, 0x0, [0x1, 0x1, 0x1], "02")),
                    (L = J(p, 0x0, [0x1, 0x1, 0x2], "02")),
                    (S = J(p, 0x0, [0x2, 0x0], "02"));
            } catch (C) {
                console["log"]("EXCEPTION:" + C);
                throw "malformed PKCS#8 plain DSA private key";
            }
            this["setPrivateHex"](n, A, L, null, S);
        }),
        (this["readPKCS8PubKeyHex"] = function (p) {
            var n, A, L, S, Y = ASN1HEX,
                J = Y["getVbyList"];
            if (Y["isASN1HEX"](p) === ![]) throw "not ASN.1 hex string";
            try {
                (n = J(p, 0x0, [0x0, 0x1, 0x0], "02")),
                    (A = J(p, 0x0, [0x0, 0x1, 0x1], "02")),
                    (L = J(p, 0x0, [0x0, 0x1, 0x2], "02")),
                    (S = J(p, 0x0, [0x1, 0x0], "02"));
            } catch (C) {
                console["log"]("EXCEPTION:" + C);
                throw "malformed PKCS#8 DSA public key";
            }
            this["setPublicHex"](n, A, L, S);
        }),
        (this["readCertPubKeyHex"] = function (p, n) {
            n !== 0x5 && (n = 0x6);
            var A, L, S, Y, J = ASN1HEX,
                C = J["getVbyList"];
            if (J["isASN1HEX"](p) === ![]) throw "not ASN.1 hex string";
            try {
                (A = C(p, 0x0, [0x0, n, 0x0, 0x1, 0x0], "02")),
                    (L = C(p, 0x0, [0x0, n, 0x0, 0x1, 0x1], "02")),
                    (S = C(p, 0x0, [0x0, n, 0x0, 0x1, 0x2], "02")),
                    (Y = C(p, 0x0, [0x0, n, 0x1, 0x0], "02"));
            } catch (V) {
                console["log"]("EXCEPTION:" + V);
                throw "malformed X.509 certificate DSA public key";
            }
            this["setPublicHex"](A, L, S, Y);
        });
};
var KEYUTIL = (function () {
    var p = function (K, T, Z) {
            return S(CryptoJS["AES"], K, T, Z);
        },
        A = function (K, T, Z) {
            return S(CryptoJS["TripleDES"], K, T, Z);
        },
        L = function (K, T, Z) {
            return S(CryptoJS["DES"], K, T, Z);
        },
        S = function (K, T, Z, M) {
            var U = CryptoJS["enc"]["Hex"]["parse"](T),
                H = CryptoJS["enc"]["Hex"]["parse"](Z),
                O = CryptoJS["enc"]["Hex"]["parse"](M),
                X = {};
            (X["key"] = H),
                (X["iv"] = O),
                (X["ciphertext"] = U);
            var G = K["decrypt"](X, H, {
                "iv": O
            });
            return CryptoJS["enc"]["Hex"]["stringify"](G);
        },
        Y = function (K, T, Z) {
            return V(CryptoJS["AES"], K, T, Z);
        },
        J = function (K, T, Z) {
            return V(CryptoJS["TripleDES"], K, T, Z);
        },
        C = function (K, T, Z) {
            return V(CryptoJS["DES"], K, T, Z);
        },
        V = function (K, T, Z, M) {
            var U = CryptoJS["enc"]["Hex"]["parse"](T),
                H = CryptoJS["enc"]["Hex"]["parse"](Z),
                O = CryptoJS["enc"]["Hex"]["parse"](M),
                X = K["encrypt"](U, H, {
                    "iv": O
                }),
                G = CryptoJS["enc"]["Hex"]["parse"](X["toString"]()),
                N = CryptoJS["enc"]["Base64"]["stringify"](G);
            return N;
        },
        W = {
            "AES-256-CBC": {
                "proc": p,
                "eproc": Y,
                "keylen": 0x20,
                "ivlen": 0x10
            },
            "AES-192-CBC": {
                "proc": p,
                "eproc": Y,
                "keylen": 0x18,
                "ivlen": 0x10
            },
            "AES-128-CBC": {
                "proc": p,
                "eproc": Y,
                "keylen": 0x10,
                "ivlen": 0x10
            },
            "DES-EDE3-CBC": {
                "proc": A,
                "eproc": J,
                "keylen": 0x18,
                "ivlen": 0x8
            },
            "DES-CBC": {
                "proc": L,
                "eproc": C,
                "keylen": 0x8,
                "ivlen": 0x8
            }
        },
        R = function (K) {
            return W[K]["proc"];
        },
        B = function (K) {
            var T = CryptoJS["lib"]["WordArray"]["random"](K),
                Z = CryptoJS["enc"]["Hex"]["stringify"](T);
            return Z;
        },
        F = function (K) {
            var T = {},
                Z = K["match"](new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
            Z && ((T["cipher"] = Z[0x1]), (T["ivsalt"] = Z[0x2]));
            var M = K["match"](new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
            M && (T["type"] = M[0x1]);
            var U = -0x1,
                H = 0x0;
            K["indexOf"]("

            ") != -0x1 && ((U = K["
            indexOf
            "]("

            ")), (H = 0x2));
            K["indexOf"]("

            ") != -0x1 && ((U = K["
            indexOf
            "]("

            ")), (H = 0x1));
            var O = K["indexOf"]("-----END");
            if (U != -0x1 && O != -0x1) {
                var X = K["substring"](U + H * 0x2, O - H);
                (X = X["replace"](/\s+/g, "")),
                    (T["data"] = X);
            }
            return T;
        },
        E = function (K, T, Z) {
            var M = Z["substring"](0x0, 0x10),
                U = CryptoJS["enc"]["Hex"]["parse"](M),
                H = CryptoJS["enc"]["Utf8"]["parse"](T),
                O = W[K]["keylen"] + W[K]["ivlen"],
                X = "",
                G = null;
            for (; ;) {
                var N = CryptoJS["algo"]["MD5"]["create"]();
                G != null && N["update"](G);
                N["update"](H),
                    N["update"](U),
                    (G = N["finalize"]()),
                    (X = X + CryptoJS["enc"]["Hex"]["stringify"](G));
                if (X["length"] >= O * 0x2) break;
            }
            var D = {};
            return ((D["keyhex"] = X["substr"](0x0, W[K]["keylen"] * 0x2)), (D["ivhex"] = X["substr"](W[K]["keylen"] * 0x2, W[K]["ivlen"] * 0x2)), D);
        },
        s = function (K, T, Z, M) {
            var U = CryptoJS["enc"]["Base64"]["parse"](K),
                H = CryptoJS["enc"]["Hex"]["stringify"](U),
                O = W[T]["proc"],
                X = O(H, Z, M);
            return X;
        },
        I = function (K, T, Z, w) {
            var M = W[T]["eproc"],
                U = M(K, Z, w);
            return U;
        };
    return {
        "version": "1.0.0",
        "parsePKCS5PEM": function (K) {
            return F(K);
        },
        "getKeyAndUnusedIvByPasscodeAndIvsalt": function (K, T, Z) {
            return E(K, T, Z);
        },
        "decryptKeyB64": function (K, T, Z, w) {
            return s(K, T, Z, w);
        },
        "getDecryptedKeyHex": function (K, T) {
            var Z = F(K),
                M = Z["type"],
                U = Z["cipher"],
                H = Z["ivsalt"],
                O = Z["data"],
                X = E(U, T, H),
                G = X["keyhex"],
                N = s(O, U, G, H);
            return N;
        },
        "getEncryptedPKCS5PEMFromPrvKeyHex": function (K, T, Z, M, U) {
            var H = "";
            (typeof M == "undefined" || M == null) && (M = "AES-256-CBC");
            if (typeof W[M] == "undefined") throw ("KEYUTIL unsupported algorithm: " + M);
            if (typeof U == "undefined" || U == null) {
                var O = W[M]["ivlen"],
                    X = B(O);
                U = X["toUpperCase"]();
            }
            var G = E(M, Z, U),
                N = G["keyhex"],
                D = I(T, M, N, U),
                Q = D["replace"](/(.{64})/g, "$1
            "),
            H = "-----BEGIN " + K + " PRIVATE KEY-----
            ";
            return ((H += "Proc-Type: 4,ENCRYPTED
            "), (H += "
            DEK - Info
        :
            " + M + ", " + U + "
            "), (H += "
            "), (H += Q), (H += "
            -----END
            " + K + "
            PRIVATE
            KEY--
            ---
                "), H);
        },
        "parseHexOfEncryptedPKCS8": function (K) {
            var T = ASN1HEX,
                Z = T["getChildIdx"],
                M = T["getV"],
                U = {},
                H = Z(K, 0x0);
            if (H["length"] != 0x2) throw ("malformed format: SEQUENCE(0).items != 2: " + H["length"]);
            U["ciphertext"] = M(K, H[0x1]);
            var O = Z(K, H[0x0]);
            if (O["length"] != 0x2) throw ("malformed format: SEQUENCE(0.0).items != 2: " + O["length"]);
            if (M(K, O[0x0]) != "2a864886f70d01050d") throw "this only supports pkcs5PBES2";
            var X = Z(K, O[0x1]);
            if (O["length"] != 0x2) throw ("malformed format: SEQUENCE(0.0.1).items != 2: " + X["length"]);
            var G = Z(K, X[0x1]);
            if (G["length"] != 0x2) throw ("malformed format: SEQUENCE(0.0.1.1).items != 2: " + G["length"]);
            if (M(K, G[0x0]) != "2a864886f70d0307") throw "this only supports TripleDES";
            (U["encryptionSchemeAlg"] = "TripleDES"),
                (U["encryptionSchemeIV"] = M(K, G[0x1]));
            var N = Z(K, X[0x0]);
            if (N["length"] != 0x2) throw ("malformed format: SEQUENCE(0.0.1.0).items != 2: " + N["length"]);
            if (M(K, N[0x0]) != "2a864886f70d01050c") throw "this only supports pkcs5PBKDF2";
            var D = Z(K, N[0x1]);
            if (D["length"] < 0x2) throw ("malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + D["length"]);
            U["pbkdf2Salt"] = M(K, D[0x0]);
            var Q = M(K, D[0x1]);
            try {
                U["pbkdf2Iter"] = parseInt(Q, 0x10);
            } catch (P) {
                throw ("malformed format pbkdf2Iter: " + Q);
            }
            return U;
        },
        "getPBKDF2KeyHexFromParam": function (K, T) {
            var Z = CryptoJS["enc"]["Hex"]["parse"](K["pbkdf2Salt"]),
                w = K["pbkdf2Iter"],
                M = CryptoJS["PBKDF2"](T, Z, {
                    "keySize": 0xc0 / 0x20,
                    "iterations": w
                }),
                U = CryptoJS["enc"]["Hex"]["stringify"](M);
            return U;
        },
        "_getPlainPKCS8HexFromEncryptedPKCS8PEM": function (K, T) {
            var Z = pemtohex(K, "ENCRYPTED PRIVATE KEY"),
                M = this["parseHexOfEncryptedPKCS8"](Z),
                U = KEYUTIL["getPBKDF2KeyHexFromParam"](M, T),
                H = {};
            H["ciphertext"] = CryptoJS["enc"]["Hex"]["parse"](M["ciphertext"]);
            var O = CryptoJS["enc"]["Hex"]["parse"](U),
                X = CryptoJS["enc"]["Hex"]["parse"](M["encryptionSchemeIV"]),
                G = CryptoJS["TripleDES"]["decrypt"](H, O, {
                    "iv": X
                }),
                N = CryptoJS["enc"]["Hex"]["stringify"](G);
            return N;
        },
        "getKeyFromEncryptedPKCS8PEM": function (K, T) {
            var Z = this["_getPlainPKCS8HexFromEncryptedPKCS8PEM"](K, T),
                w = this["getKeyFromPlainPrivatePKCS8Hex"](Z);
            return w;
        },
        "parsePlainPrivatePKCS8Hex": function (K) {
            var T = ASN1HEX,
                Z = T["getChildIdx"],
                w = T["getV"],
                M = {};
            M["algparam"] = null;
            if (K["substr"](0x0, 0x2) != "30") throw "malformed plain PKCS8 private key(code:001)";
            var U = Z(K, 0x0);
            if (U["length"] != 0x3) throw "malformed plain PKCS8 private key(code:002)";
            if (K["substr"](U[0x1], 0x2) != "30") throw "malformed PKCS8 private key(code:003)";
            var H = Z(K, U[0x1]);
            if (H["length"] != 0x2) throw "malformed PKCS8 private key(code:004)";
            if (K["substr"](H[0x0], 0x2) != "06") throw "malformed PKCS8 private key(code:005)";
            M["algoid"] = w(K, H[0x0]);
            K["substr"](H[0x1], 0x2) == "06" && (M["algparam"] = w(K, H[0x1]));
            if (K["substr"](U[0x2], 0x2) != "04") throw "malformed PKCS8 private key(code:006)";
            return ((M["keyidx"] = T["getVidx"](K, U[0x2])), M);
        },
        "getKeyFromPlainPrivatePKCS8PEM": function (K) {
            var T = pemtohex(K, "PRIVATE KEY"),
                Z = this["getKeyFromPlainPrivatePKCS8Hex"](T);
            return Z;
        },
        "getKeyFromPlainPrivatePKCS8Hex": function (K) {
            var T = this["parsePlainPrivatePKCS8Hex"](K),
                Z;
            if (T["algoid"] == "2a864886f70d010101") Z = new RSAKey();
            else {
                if (T["algoid"] == "2a8648ce380401") Z = new KJUR["crypto"]["DSA"]();
                else {
                    if (T["algoid"] == "2a8648ce3d0201") Z = new KJUR["crypto"]["ECDSA"]();
                    else throw "unsupported private key algorithm";
                }
            }
            return (Z["readPKCS8PrvKeyHex"](K), Z);
        },
        "_getKeyFromPublicPKCS8Hex": function (K) {
            var T, Z = ASN1HEX["getVbyList"](K, 0x0, [0x0, 0x0], "06");
            if (Z === "2a864886f70d010101") T = new RSAKey();
            else {
                if (Z === "2a8648ce380401") T = new KJUR["crypto"]["DSA"]();
                else {
                    if (Z === "2a8648ce3d0201") T = new KJUR["crypto"]["ECDSA"]();
                    else throw "unsupported PKCS#8 public key hex";
                }
            }
            return (T["readPKCS8PubKeyHex"](K), T);
        },
        "parsePublicRawRSAKeyHex": function (K) {
            var T = ASN1HEX,
                Z = T["getChildIdx"],
                w = T["getV"],
                M = {};
            if (K["substr"](0x0, 0x2) != "30") throw "malformed RSA key(code:001)";
            var U = Z(K, 0x0);
            if (U["length"] != 0x2) throw "malformed RSA key(code:002)";
            if (K["substr"](U[0x0], 0x2) != "02") throw "malformed RSA key(code:003)";
            M["n"] = w(K, U[0x0]);
            if (K["substr"](U[0x1], 0x2) != "02") throw "malformed RSA key(code:004)";
            return (M["e"] = w(K, U[0x1])),
                M;
        },
        "parsePublicPKCS8Hex": function (K) {
            var T = ASN1HEX,
                Z = T["getChildIdx"],
                M = T["getV"],
                U = {};
            U["algparam"] = null;
            var H = Z(K, 0x0);
            if (H["length"] != 0x2) throw ("outer DERSequence shall have 2 elements: " + H["length"]);
            var O = H[0x0];
            if (K["substr"](O, 0x2) != "30") throw "malformed PKCS8 public key(code:001)";
            var X = Z(K, O);
            if (X["length"] != 0x2) throw "malformed PKCS8 public key(code:002)";
            if (K["substr"](X[0x0], 0x2) != "06") throw "malformed PKCS8 public key(code:003)";
            U["algoid"] = M(K, X[0x0]);
            K["substr"](X[0x1], 0x2) == "06" ? (U["algparam"] = M(K, X[0x1])) : K["substr"](X[0x1], 0x2) == "30" && ((U["algparam"] = {}), (U["algparam"]["p"] = T["getVbyList"](K, X[0x1], [0x0], "02")), (U["algparam"]["q"] = T["getVbyList"](K, X[0x1], [0x1], "02")), (U["algparam"]["g"] = T["getVbyList"](K, X[0x1], [0x2], "02")));
            if (K["substr"](H[0x1], 0x2) != "03") throw "malformed PKCS8 public key(code:004)";
            return ((U["key"] = M(K, H[0x1])["substr"](0x2)), U);
        }
    };
})();
(KEYUTIL["getKey"] = function (p, a, g) {
    var S = ASN1HEX,
        Y = S["getChildIdx"],
        V = S["getV"],
        W = S["getVbyList"],
        R = KJUR["crypto"],
        T = R["ECDSA"],
        Z = R["DSA"],
        q = RSAKey,
        U = pemtohex,
        h = KEYUTIL;
    if (typeof q != "undefined" && p instanceof q) return p;
    if (typeof T != "undefined" && p instanceof T) return p;
    if (typeof Z != "undefined" && p instanceof Z) return p;
    if (p["curve"] !== undefined && p["xy"] !== undefined && p["d"] === undefined) return new T({
        "pub": p["xy"],
        "curve": p["curve"]
    });
    if (p["curve"] !== undefined && p["d"] !== undefined) return new T({
        "prv": p["d"],
        "curve": p["curve"]
    });
    if (p["kty"] === undefined && p["n"] !== undefined && p["e"] !== undefined && p["d"] === undefined) {
        var X = new q();
        return X["setPublic"](p["n"], p["e"]),
            X;
    }
    if (p["kty"] === undefined && p["n"] !== undefined && p["e"] !== undefined && p["d"] !== undefined && p["p"] !== undefined && p["q"] !== undefined && p["dp"] !== undefined && p["dq"] !== undefined && p["co"] !== undefined && p["qi"] === undefined) {
        var X = new q();
        return (X["setPrivateEx"](p["n"], p["e"], p["d"], p["p"], p["q"], p["dp"], p["dq"], p["co"]), X);
    }
    if (p["kty"] === undefined && p["n"] !== undefined && p["e"] !== undefined && p["d"] !== undefined && p["p"] === undefined) {
        var X = new q();
        return (X["setPrivate"](p["n"], p["e"], p["d"]), X);
    }
    if (p["p"] !== undefined && p["q"] !== undefined && p["g"] !== undefined && p["y"] !== undefined && p["x"] === undefined) {
        var X = new Z();
        return (X["setPublic"](p["p"], p["q"], p["g"], p["y"]), X);
    }
    if (p["p"] !== undefined && p["q"] !== undefined && p["g"] !== undefined && p["y"] !== undefined && p["x"] !== undefined) {
        var X = new Z();
        return (X["setPrivate"](p["p"], p["q"], p["g"], p["y"], p["x"]), X);
    }
    if (p["kty"] === "RSA" && p["n"] !== undefined && p["e"] !== undefined && p["d"] === undefined) {
        var X = new q();
        return (X["setPublic"](b64utohex(p["n"]), b64utohex(p["e"])), X);
    }
    if (p["kty"] === "RSA" && p["n"] !== undefined && p["e"] !== undefined && p["d"] !== undefined && p["p"] !== undefined && p["q"] !== undefined && p["dp"] !== undefined && p["dq"] !== undefined && p["qi"] !== undefined) {
        var X = new q();
        return (X["setPrivateEx"](b64utohex(p["n"]), b64utohex(p["e"]), b64utohex(p["d"]), b64utohex(p["p"]), b64utohex(p["q"]), b64utohex(p["dp"]), b64utohex(p["dq"]), b64utohex(p["qi"])), X);
    }
    if (p["kty"] === "RSA" && p["n"] !== undefined && p["e"] !== undefined && p["d"] !== undefined) {
        var X = new q();
        return (X["setPrivate"](b64utohex(p["n"]), b64utohex(p["e"]), b64utohex(p["d"])), X);
    }
    if (p["kty"] === "EC" && p["crv"] !== undefined && p["x"] !== undefined && p["y"] !== undefined && p["d"] === undefined) {
        var x = new T({
                "curve": p["crv"]
            }),
            y = x["ecparams"]["keylen"] / 0x4,
            Q = ("0000000000" + b64utohex(p["x"]))["slice"](-y),
            p0 = ("0000000000" + b64utohex(p["y"]))["slice"](-y),
            p1 = "04" + Q + p0;
        return (x["setPublicKeyHex"](p1), x);
    }
    if (p["kty"] === "EC" && p["crv"] !== undefined && p["x"] !== undefined && p["y"] !== undefined && p["d"] !== undefined) {
        var x = new T({
                "curve": p["crv"]
            }),
            y = x["ecparams"]["keylen"] / 0x4,
            Q = ("0000000000" + b64utohex(p["x"]))["slice"](-y),
            p0 = ("0000000000" + b64utohex(p["y"]))["slice"](-y),
            p1 = "04" + Q + p0,
            p2 = ("0000000000" + b64utohex(p["d"]))["slice"](-y);
        return (x["setPublicKeyHex"](p1), x["setPrivateKeyHex"](p2), x);
    }
    if (g === "pkcs5prv") {
        var p3 = p,
            S = ASN1HEX,
            p4, X;
        p4 = Y(p3, 0x0);
        if (p4["length"] === 0x9) (X = new q()),
            X["readPKCS5PrvKeyHex"](p3);
        else {
            if (p4["length"] === 0x6) (X = new Z()),
                X["readPKCS5PrvKeyHex"](p3);
            else {
                if (p4["length"] > 0x2 && p3["substr"](p4[0x1], 0x2) === "04") (X = new T()),
                    X["readPKCS5PrvKeyHex"](p3);
                else throw "unsupported PKCS#1/5 hexadecimal key";
            }
        }
        return X;
    }
    if (g === "pkcs8prv") {
        var X = h["getKeyFromPlainPrivatePKCS8Hex"](p);
        return X;
    }
    if (g === "pkcs8pub") return h["_getKeyFromPublicPKCS8Hex"](p);
    if (g === "x509pub") return X509["getPublicKeyFromCertHex"](p);
    if (p["indexOf"]("-END CERTIFICATE-", 0x0) != -0x1 || p["indexOf"]("-END X509 CERTIFICATE-", 0x0) != -0x1 || p["indexOf"]("-END TRUSTED CERTIFICATE-", 0x0) != -0x1) return X509["getPublicKeyFromCertPEM"](p);
    if (p["indexOf"]("-END PUBLIC KEY-") != -0x1) {
        var p5 = pemtohex(p, "PUBLIC KEY");
        return h["_getKeyFromPublicPKCS8Hex"](p5);
    }
    if (p["indexOf"]("-END RSA PRIVATE KEY-") != -0x1 && p["indexOf"]("4,ENCRYPTED") == -0x1) {
        var p6 = U(p, "RSA PRIVATE KEY");
        return h["getKey"](p6, null, "pkcs5prv");
    }
    if (p["indexOf"]("-END DSA PRIVATE KEY-") != -0x1 && p["indexOf"]("4,ENCRYPTED") == -0x1) {
        var p7 = U(p, "DSA PRIVATE KEY"),
            p8 = W(p7, 0x0, [0x1], "02"),
            p9 = W(p7, 0x0, [0x2], "02"),
            pp = W(p7, 0x0, [0x3], "02"),
            pn = W(p7, 0x0, [0x4], "02"),
            pc = W(p7, 0x0, [0x5], "02"),
            X = new Z();
        return (X["setPrivate"](new BigInteger(p8, 0x10), new BigInteger(p9, 0x10), new BigInteger(pp, 0x10), new BigInteger(pn, 0x10), new BigInteger(pc, 0x10)), X);
    }
    if (p["indexOf"]("-END EC PRIVATE KEY-") != -0x1 && p["indexOf"]("4,ENCRYPTED") == -0x1) {
        var p6 = U(p, "EC PRIVATE KEY");
        return h["getKey"](p6, null, "pkcs5prv");
    }
    if (p["indexOf"]("-END PRIVATE KEY-") != -0x1) return h["getKeyFromPlainPrivatePKCS8PEM"](p);
    if (p["indexOf"]("-END RSA PRIVATE KEY-") != -0x1 && p["indexOf"]("4,ENCRYPTED") != -0x1) {
        var pa = h["getDecryptedKeyHex"](p, a),
            pA = new RSAKey();
        return (pA["readPKCS5PrvKeyHex"](pa), pA);
    }
    if (p["indexOf"]("-END EC PRIVATE KEY-") != -0x1 && p["indexOf"]("4,ENCRYPTED") != -0x1) {
        var p7 = h["getDecryptedKeyHex"](p, a),
            X = W(p7, 0x0, [0x1], "04"),
            pL = W(p7, 0x0, [0x2, 0x0], "06"),
            pg = W(p7, 0x0, [0x3, 0x0], "03")["substr"](0x2),
            pS = "";
        if (KJUR["crypto"]["OID"]["oidhex2name"][pL] !== undefined) pS = KJUR["crypto"]["OID"]["oidhex2name"][pL];
        else throw ("undefined OID(hex) in KJUR.crypto.OID: " + pL);
        var x = new T({
            "curve": pS
        });
        return (x["setPublicKeyHex"](pg), x["setPrivateKeyHex"](X), (x["isPublic"] = ![]), x);
    }
    if (p["indexOf"]("-END DSA PRIVATE KEY-") != -0x1 && p["indexOf"]("4,ENCRYPTED") != -0x1) {
        var p7 = h["getDecryptedKeyHex"](p, a),
            p8 = W(p7, 0x0, [0x1], "02"),
            p9 = W(p7, 0x0, [0x2], "02"),
            pp = W(p7, 0x0, [0x3], "02"),
            pn = W(p7, 0x0, [0x4], "02"),
            pc = W(p7, 0x0, [0x5], "02"),
            X = new Z();
        return (X["setPrivate"](new BigInteger(p8, 0x10), new BigInteger(p9, 0x10), new BigInteger(pp, 0x10), new BigInteger(pn, 0x10), new BigInteger(pc, 0x10)), X);
    }
    if (p["indexOf"]("-END ENCRYPTED PRIVATE KEY-") != -0x1) return h["getKeyFromEncryptedPKCS8PEM"](p, a);
    throw "not supported argument";
}), (KEYUTIL["generateKeypair"] = function (p, n) {
    if (p == "RSA") {
        var A = n,
            L = new RSAKey();
        L["generate"](A, "10001"),
            (L["isPrivate"] = !![]),
            (L["isPublic"] = !![]);
        var S = new RSAKey(),
            Y = L["n"]["toString"](0x10),
            J = L["e"]["toString"](0x10);
        S["setPublic"](Y, J),
            (S["isPrivate"] = ![]),
            (S["isPublic"] = !![]);
        var C = {};
        return ((C["prvKeyObj"] = L), (C["pubKeyObj"] = S), C);
    } else {
        if (p == "EC") {
            var V = n,
                W = new KJUR["crypto"]["ECDSA"]({
                    "curve": V
                }),
                l = W["generateKeyPairHex"](),
                L = new KJUR["crypto"]["ECDSA"]({
                    "curve": V
                });
            L["setPublicKeyHex"](l["ecpubhex"]),
                L["setPrivateKeyHex"](l["ecprvhex"]),
                (L["isPrivate"] = !![]),
                (L["isPublic"] = ![]);
            var S = new KJUR["crypto"]["ECDSA"]({
                "curve": V
            });
            S["setPublicKeyHex"](l["ecpubhex"]),
                (S["isPrivate"] = ![]),
                (S["isPublic"] = !![]);
            var C = {};
            return ((C["prvKeyObj"] = L), (C["pubKeyObj"] = S), C);
        } else throw ("unknown algorithm: " + p);
    }
}), (KEYUTIL["getPEM"] = function (L, S, Y, J, V, W) {
    var R = KJUR,
        s = R["asn1"],
        I = s["DERObjectIdentifier"],
        K = s["DERInteger"],
        T = s["ASN1Util"]["newObject"],
        Z = s["x509"],
        M = Z["SubjectPublicKeyInfo"],
        U = R["crypto"],
        H = U["DSA"],
        O = U["ECDSA"],
        X = RSAKey;

    function G(pp) {
        var pn = T({
            "seq": [{
                "int": 0x0
            },
                {
                    "int": {
                        "bigint": pp["n"]
                    }
                },
                {
                    "int": pp["e"]
                },
                {
                    "int": {
                        "bigint": pp["d"]
                    }
                },
                {
                    "int": {
                        "bigint": pp["p"]
                    }
                },
                {
                    "int": {
                        "bigint": pp["q"]
                    }
                },
                {
                    "int": {
                        "bigint": pp["dmp1"]
                    }
                },
                {
                    "int": {
                        "bigint": pp["dmq1"]
                    }
                },
                {
                    "int": {
                        "bigint": pp["coeff"]
                    }
                }]
        });
        return pn;
    }

    function N(pp) {
        var pn = T({
            "seq": [{
                "int": 0x1
            },
                {
                    "octstr": {
                        "hex": pp["prvKeyHex"]
                    }
                },
                {
                    "tag": ["a0", !![], {
                        "oid": {
                            "name": pp["curveName"]
                        }
                    }]
                },
                {
                    "tag": ["a1", !![], {
                        "bitstr": {
                            "hex": "00" + pp["pubKeyHex"]
                        }
                    }]
                }]
        });
        return pn;
    }

    function Q(pp) {
        var pn = T({
            "seq": [{
                "int": 0x0
            },
                {
                    "int": {
                        "bigint": pp["p"]
                    }
                },
                {
                    "int": {
                        "bigint": pp["q"]
                    }
                },
                {
                    "int": {
                        "bigint": pp["g"]
                    }
                },
                {
                    "int": {
                        "bigint": pp["y"]
                    }
                },
                {
                    "int": {
                        "bigint": pp["x"]
                    }
                }]
        });
        return pn;
    }

    if (((X !== undefined && L instanceof X) || (H !== undefined && L instanceof H) || (O !== undefined && L instanceof O)) && L["isPublic"] == !![] && (S === undefined || S == "PKCS8PUB")) {
        var P = new M(L),
            p0 = P["getEncodedHex"]();
        return hextopem(p0, "PUBLIC KEY");
    }
    if (S == "PKCS1PRV" && X !== undefined && L instanceof X && (Y === undefined || Y == null) && L["isPrivate"] == !![]) {
        var P = G(L),
            p0 = P["getEncodedHex"]();
        return hextopem(p0, "RSA PRIVATE KEY");
    }
    if (S == "PKCS1PRV" && O !== undefined && L instanceof O && (Y === undefined || Y == null) && L["isPrivate"] == !![]) {
        var p1 = new I({
                "name": L["curveName"]
            }),
            p2 = p1["getEncodedHex"](),
            p3 = N(L),
            p4 = p3["getEncodedHex"](),
            p5 = "";
        return ((p5 += hextopem(p2, "EC PARAMETERS")), (p5 += hextopem(p4, "EC PRIVATE KEY")), p5);
    }
    if (S == "PKCS1PRV" && H !== undefined && L instanceof H && (Y === undefined || Y == null) && L["isPrivate"] == !![]) {
        var P = Q(L),
            p0 = P["getEncodedHex"]();
        return hextopem(p0, "DSA PRIVATE KEY");
    }
    if (S == "PKCS5PRV" && X !== undefined && L instanceof X && Y !== undefined && Y != null && L["isPrivate"] == !![]) {
        var P = G(L),
            p0 = P["getEncodedHex"]();
        return (J === undefined && (J = "DES-EDE3-CBC"), this["getEncryptedPKCS5PEMFromPrvKeyHex"]("RSA", p0, Y, J, W));
    }
    if (S == "PKCS5PRV" && O !== undefined && L instanceof O && Y !== undefined && Y != null && L["isPrivate"] == !![]) {
        var P = N(L),
            p0 = P["getEncodedHex"]();
        return (J === undefined && (J = "DES-EDE3-CBC"), this["getEncryptedPKCS5PEMFromPrvKeyHex"]("EC", p0, Y, J, W));
    }
    if (S == "PKCS5PRV" && H !== undefined && L instanceof H && Y !== undefined && Y != null && L["isPrivate"] == !![]) {
        var P = Q(L),
            p0 = P["getEncodedHex"]();
        return (J === undefined && (J = "DES-EDE3-CBC"), this["getEncryptedPKCS5PEMFromPrvKeyHex"]("DSA", p0, Y, J, W));
    }
    var p6 = function (pp, pn) {
            var pc = p7(pp, pn),
                pa = new T({
                    "seq": [{
                        "seq": [{
                            "oid": {
                                "name": "pkcs5PBES2"
                            }
                        },
                            {
                                "seq": [{
                                    "seq": [{
                                        "oid": {
                                            "name": "pkcs5PBKDF2"
                                        }
                                    },
                                        {
                                            "seq": [{
                                                "octstr": {
                                                    "hex": pc["pbkdf2Salt"]
                                                }
                                            },
                                                {
                                                    "int": pc["pbkdf2Iter"]
                                                }]
                                        }]
                                },
                                    {
                                        "seq": [{
                                            "oid": {
                                                "name": "des-EDE3-CBC"
                                            }
                                        },
                                            {
                                                "octstr": {
                                                    "hex": pc["encryptionSchemeIV"]
                                                }
                                            }]
                                    }]
                            }]
                    },
                        {
                            "octstr": {
                                "hex": pc["ciphertext"]
                            }
                        }]
                });
            return pa["getEncodedHex"]();
        },
        p7 = function (pp, pn) {
            var pc = 0x64,
                pa = CryptoJS["lib"]["WordArray"]["random"](0x8),
                pA = "DES-EDE3-CBC",
                pL = CryptoJS["lib"]["WordArray"]["random"](0x8),
                pg = CryptoJS["PBKDF2"](pn, pa, {
                    "keySize": 0xc0 / 0x20,
                    "iterations": pc
                }),
                pS = CryptoJS["enc"]["Hex"]["parse"](pp),
                pf = CryptoJS["TripleDES"]["encrypt"](pS, pg, {
                    "iv": pL
                }) + "",
                pY = {};
            return ((pY["ciphertext"] = pf), (pY["pbkdf2Salt"] = CryptoJS["enc"]["Hex"]["stringify"](pa)), (pY["pbkdf2Iter"] = pc), (pY["encryptionSchemeAlg"] = pA), (pY["encryptionSchemeIV"] = CryptoJS["enc"]["Hex"]["stringify"](pL)), pY);
        };
    if (S == "PKCS8PRV" && X != undefined && L instanceof X && L["isPrivate"] == !![]) {
        var p8 = G(L),
            p9 = p8["getEncodedHex"](),
            P = T({
                "seq": [{
                    "int": 0x0
                },
                    {
                        "seq": [{
                            "oid": {
                                "name": "rsaEncryption"
                            }
                        },
                            {
                                "null": !![]
                            }]
                    },
                    {
                        "octstr": {
                            "hex": p9
                        }
                    }]
            }),
            p0 = P["getEncodedHex"]();
        if (Y === undefined || Y == null) return hextopem(p0, "PRIVATE KEY");
        else {
            var p4 = p6(p0, Y);
            return hextopem(p4, "ENCRYPTED PRIVATE KEY");
        }
    }
    if (S == "PKCS8PRV" && O !== undefined && L instanceof O && L["isPrivate"] == !![]) {
        var p8 = new T({
                "seq": [{
                    "int": 0x1
                },
                    {
                        "octstr": {
                            "hex": L["prvKeyHex"]
                        }
                    },
                    {
                        "tag": ["a1", !![], {
                            "bitstr": {
                                "hex": "00" + L["pubKeyHex"]
                            }
                        }]
                    }]
            }),
            p9 = p8["getEncodedHex"](),
            P = T({
                "seq": [{
                    "int": 0x0
                },
                    {
                        "seq": [{
                            "oid": {
                                "name": "ecPublicKey"
                            }
                        },
                            {
                                "oid": {
                                    "name": L["curveName"]
                                }
                            }]
                    },
                    {
                        "octstr": {
                            "hex": p9
                        }
                    }]
            }),
            p0 = P["getEncodedHex"]();
        if (Y === undefined || Y == null) return hextopem(p0, "PRIVATE KEY");
        else {
            var p4 = p6(p0, Y);
            return hextopem(p4, "ENCRYPTED PRIVATE KEY");
        }
    }
    if (S == "PKCS8PRV" && H !== undefined && L instanceof H && L["isPrivate"] == !![]) {
        var p8 = new K({
                "bigint": L["x"]
            }),
            p9 = p8["getEncodedHex"](),
            P = T({
                "seq": [{
                    "int": 0x0
                },
                    {
                        "seq": [{
                            "oid": {
                                "name": "dsa"
                            }
                        },
                            {
                                "seq": [{
                                    "int": {
                                        "bigint": L["p"]
                                    }
                                },
                                    {
                                        "int": {
                                            "bigint": L["q"]
                                        }
                                    },
                                    {
                                        "int": {
                                            "bigint": L["g"]
                                        }
                                    }]
                            }]
                    },
                    {
                        "octstr": {
                            "hex": p9
                        }
                    }]
            }),
            p0 = P["getEncodedHex"]();
        if (Y === undefined || Y == null) return hextopem(p0, "PRIVATE KEY");
        else {
            var p4 = p6(p0, Y);
            return hextopem(p4, "ENCRYPTED PRIVATE KEY");
        }
    }
    throw "unsupported object nor format";
}), (KEYUTIL["getKeyFromCSRPEM"] = function (p) {
    var n = pemtohex(p, "CERTIFICATE REQUEST"),
        A = KEYUTIL["getKeyFromCSRHex"](n);
    return A;
}), (KEYUTIL["getKeyFromCSRHex"] = function (p) {
    var n = KEYUTIL["parseCSRHex"](p),
        A = KEYUTIL["getKey"](n["p8pubkeyhex"], null, "pkcs8pub");
    return A;
}), (KEYUTIL["parseCSRHex"] = function (p) {
    var n = ASN1HEX,
        A = n["getChildIdx"],
        L = n["getTLV"],
        S = {},
        Y = p;
    if (Y["substr"](0x0, 0x2) != "30") throw "malformed CSR(code:001)";
    var J = A(Y, 0x0);
    if (J["length"] < 0x1) throw "malformed CSR(code:002)";
    if (Y["substr"](J[0x0], 0x2) != "30") throw "malformed CSR(code:003)";
    var C = A(Y, J[0x0]);
    if (C["length"] < 0x3) throw "malformed CSR(code:004)";
    return ((S["p8pubkeyhex"] = L(Y, C[0x2])), S);
}), (KEYUTIL["getKeyID"] = function (p) {
    var n = KEYUTIL,
        A = ASN1HEX;
    typeof p === "string" && p["indexOf"]("BEGIN ") != -0x1 && (p = n["getKey"](p));
    var L = pemtohex(n["getPEM"](p)),
        g = A["getIdxbyList"](L, 0x0, [0x1]),
        S = A["getV"](L, g)["substring"](0x2);
    return KJUR["crypto"]["Util"]["hashHex"](S, "sha1");
}), (KEYUTIL["getJWKFromKey"] = function (p) {
    var n = {};
    if (p instanceof RSAKey && p["isPrivate"]) return ((n["kty"] = "RSA"), (n["n"] = hextob64u(p["n"]["toString"](0x10))), (n["e"] = hextob64u(p["e"]["toString"](0x10))), (n["d"] = hextob64u(p["d"]["toString"](0x10))), (n["p"] = hextob64u(p["p"]["toString"](0x10))), (n["q"] = hextob64u(p["q"]["toString"](0x10))), (n["dp"] = hextob64u(p["dmp1"]["toString"](0x10))), (n["dq"] = hextob64u(p["dmq1"]["toString"](0x10))), (n["qi"] = hextob64u(p["coeff"]["toString"](0x10))), n);
    else {
        if (p instanceof RSAKey && p["isPublic"]) return ((n["kty"] = "RSA"), (n["n"] = hextob64u(p["n"]["toString"](0x10))), (n["e"] = hextob64u(p["e"]["toString"](0x10))), n);
        else {
            if (p instanceof KJUR["crypto"]["ECDSA"] && p["isPrivate"]) {
                var A = p["getShortNISTPCurveName"]();
                if (A !== "P-256" && A !== "P-384") throw ("unsupported curve name for JWT: " + A);
                var L = p["getPublicKeyXYHex"]();
                return ((n["kty"] = "EC"), (n["crv"] = A), (n["x"] = hextob64u(L["x"])), (n["y"] = hextob64u(L["y"])), (n["d"] = hextob64u(p["prvKeyHex"])), n);
            } else {
                if (p instanceof KJUR["crypto"]["ECDSA"] && p["isPublic"]) {
                    var A = p["getShortNISTPCurveName"]();
                    if (A !== "P-256" && A !== "P-384") throw ("unsupported curve name for JWT: " + A);
                    var L = p["getPublicKeyXYHex"]();
                    return ((n["kty"] = "EC"), (n["crv"] = A), (n["x"] = hextob64u(L["x"])), (n["y"] = hextob64u(L["y"])), n);
                }
            }
        }
    }
    throw "not supported key object";
}), (RSAKey["getPosArrayOfChildrenFromHex"] = function (p) {
    return ASN1HEX["getChildIdx"](p, 0x0);
}), (RSAKey["getHexValueArrayOfChildrenFromHex"] = function (p) {
    var a = ASN1HEX,
        A = a["getV"],
        L = RSAKey["getPosArrayOfChildrenFromHex"](p),
        S = A(p, L[0x0]),
        Y = A(p, L[0x1]),
        J = A(p, L[0x2]),
        C = A(p, L[0x3]),
        V = A(p, L[0x4]),
        W = A(p, L[0x5]),
        R = A(p, L[0x6]),
        B = A(p, L[0x7]),
        F = A(p, L[0x8]),
        L = new Array();
    return L["push"](S, Y, J, C, V, W, R, B, F),
        L;
}), (RSAKey["prototype"]["readPrivateKeyFromPEMString"] = function (p) {
    var n = pemtohex(p),
        a = RSAKey["getHexValueArrayOfChildrenFromHex"](n);
    this["setPrivateEx"](a[0x1], a[0x2], a[0x3], a[0x4], a[0x5], a[0x6], a[0x7], a[0x8]);
}), (RSAKey["prototype"]["readPKCS5PrvKeyHex"] = function (p) {
    var n = RSAKey["getHexValueArrayOfChildrenFromHex"](p);
    this["setPrivateEx"](n[0x1], n[0x2], n[0x3], n[0x4], n[0x5], n[0x6], n[0x7], n[0x8]);
}), (RSAKey["prototype"]["readPKCS8PrvKeyHex"] = function (p) {
    var n, A, L, S, Y, J, C, V, W = ASN1HEX,
        R = W["getVbyList"];
    if (W["isASN1HEX"](p) === ![]) throw "not ASN.1 hex string";
    try {
        (n = R(p, 0x0, [0x2, 0x0, 0x1], "02")),
            (A = R(p, 0x0, [0x2, 0x0, 0x2], "02")),
            (L = R(p, 0x0, [0x2, 0x0, 0x3], "02")),
            (S = R(p, 0x0, [0x2, 0x0, 0x4], "02")),
            (Y = R(p, 0x0, [0x2, 0x0, 0x5], "02")),
            (J = R(p, 0x0, [0x2, 0x0, 0x6], "02")),
            (C = R(p, 0x0, [0x2, 0x0, 0x7], "02")),
            (V = R(p, 0x0, [0x2, 0x0, 0x8], "02"));
    } catch (B) {
        throw "malformed PKCS#8 plain RSA private key";
    }
    this["setPrivateEx"](n, A, L, S, Y, J, C, V);
}), (RSAKey["prototype"]["readPKCS5PubKeyHex"] = function (p) {
    var n = ASN1HEX,
        A = n["getV"];
    if (n["isASN1HEX"](p) === ![]) throw "keyHex is not ASN.1 hex string";
    var L = n["getChildIdx"](p, 0x0);
    if (L["length"] !== 0x2 || p["substr"](L[0x0], 0x2) !== "02" || p["substr"](L[0x1], 0x2) !== "02") throw "wrong hex for PKCS#5 public key";
    var g = A(p, L[0x0]),
        S = A(p, L[0x1]);
    this["setPublic"](g, S);
}), (RSAKey["prototype"]["readPKCS8PubKeyHex"] = function (p) {
    var n = ASN1HEX;
    if (n["isASN1HEX"](p) === ![]) throw "not ASN.1 hex string";
    if (n["getTLVbyList"](p, 0x0, [0x0, 0x0]) !== "06092a864886f70d010101") throw "not PKCS8 RSA public key";
    var A = n["getTLVbyList"](p, 0x0, [0x1, 0x0]);
    this["readPKCS5PubKeyHex"](A);
}), (RSAKey["prototype"]["readCertPubKeyHex"] = function (p, n) {
    var A, L;
    (A = new X509()),
        A["readCertHex"](p),
        (L = A["getPublicKeyHex"]()),
        this["readPKCS8PubKeyHex"](L);
});
var _RE_HEXDECONLY = new RegExp("[^0-9a-f]", "gi");

function _rsasign_getHexPaddedDigestInfoForString(p, n, A) {
    var L = function (S) {
            return KJUR["crypto"]["Util"]["hashString"](S, A);
        },
        g = L(p);
    return KJUR["crypto"]["Util"]["getPaddedDigestInfoHex"](g, A, n);
}

function _zeroPaddingOfSignature(p, n) {
    var A = "",
        L = n / 0x4 - p["length"];
    for (var g = 0x0; g < L; g++) {
        A = A + "0";
    }
    return A + p;
}

(RSAKey["prototype"]["sign"] = function (p, n) {
    var A = function (g) {
            return KJUR["crypto"]["Util"]["hashString"](g, n);
        },
        L = A(p);
    return this["signWithMessageHash"](L, n);
}), (RSAKey["prototype"]["signWithMessageHash"] = function (p, n) {
    var A = KJUR["crypto"]["Util"]["getPaddedDigestInfoHex"](p, n, this["n"]["bitLength"]()),
        L = parseBigInt(A, 0x10),
        g = this["doPrivate"](L),
        S = g["toString"](0x10);
    return _zeroPaddingOfSignature(S, this["n"]["bitLength"]());
});

function pss_mgf1_str(p, n, A) {
    var L = "",
        g = 0x0;
    while (L["length"] < n) {
        (L += hextorstr(A(rstrtohex(p + String["fromCharCode"]["apply"](String, [(g & 0xff000000) >> 0x18, (g & 0xff0000) >> 0x10, (g & 0xff00) >> 0x8, g & 0xff]))))),
            (g += 0x1);
    }
    return L;
}

(RSAKey["prototype"]["signPSS"] = function (p, n, A) {
    var L = function (S) {
            return KJUR["crypto"]["Util"]["hashHex"](S, n);
        },
        g = L(rstrtohex(p));
    return (A === undefined && (A = -0x1), this["signWithMessageHashPSS"](g, n, A));
}), (RSAKey["prototype"]["signWithMessageHashPSS"] = function (A, L, S) {
    var Y = hextorstr(A),
        J = Y["length"],
        C = this["n"]["bitLength"]() - 0x1,
        V = Math["ceil"](C / 0x8),
        W,
        R = function (Z) {
            return KJUR["crypto"]["Util"]["hashHex"](Z, L);
        };
    if (S === -0x1 || S === undefined) S = J;
    else {
        if (S === -0x2) S = V - J - 0x2;
        else {
            if (S < -0x2) throw "invalid salt length";
        }
    }
    if (V < J + S + 0x2) throw "data too long";
    var B = "";
    S > 0x0 && ((B = new Array(S)), new SecureRandom()["nextBytes"](B), (B = String["fromCharCode"]["apply"](String, B)));
    var F = hextorstr(R(rstrtohex("" + Y + B))),
        E = [];
    for (W = 0x0; W < V - S - J - 0x2; W += 0x1) {
        E[W] = 0x0;
    }
    var s = String["fromCharCode"]["apply"](String, E) + "" + B,
        I = pss_mgf1_str(F, s["length"], R),
        K = [];
    for (W = 0x0; W < s["length"]; W += 0x1) {
        K[W] = s["charCodeAt"](W) ^ I["charCodeAt"](W);
    }
    var T = (0xff00 >> (0x8 * V - C)) & 0xff;
    K[0x0] &= ~T;
    for (W = 0x0; W < J; W++) {
        K["push"](F["charCodeAt"](W));
    }
    return (K["push"](0xbc), _zeroPaddingOfSignature(this["doPrivate"](new BigInteger(K))["toString"](0x10), this["n"]["bitLength"]()));
});

function _rsasign_getDecryptSignatureBI(p, n, A) {
    var L = new RSAKey();
    L["setPublic"](n, A);
    var g = L["doPublic"](p);
    return g;
}

function _rsasign_getHexDigestInfoFromSig(p, n, A) {
    var L = _rsasign_getDecryptSignatureBI(p, n, A),
        g = L["toString"](0x10)["replace"](/^1f+00/, "");
    return g;
}

function _rsasign_getAlgNameAndHashFromHexDisgestInfo(p) {
    for (var n in KJUR["crypto"]["Util"]["DIGESTINFOHEAD"]) {
        var a = KJUR["crypto"]["Util"]["DIGESTINFOHEAD"][n],
            A = a["length"];
        if (p["substring"](0x0, A) == a) {
            var L = [n, p["substring"](A)];
            return L;
        }
    }
    return [];
}

(RSAKey["prototype"]["verify"] = function (p, n) {
    (n = n["replace"](_RE_HEXDECONLY, "")),
        (n = n["replace"](/[ \n]+/g, ""));
    var A = parseBigInt(n, 0x10);
    if (A["bitLength"]() > this["n"]["bitLength"]()) return 0x0;
    var L = this["doPublic"](A),
        S = L["toString"](0x10)["replace"](/^1f+00/, ""),
        Y = _rsasign_getAlgNameAndHashFromHexDisgestInfo(S);
    if (Y["length"] == 0x0) return ![];
    var J = Y[0x0],
        C = Y[0x1],
        V = function (l) {
            return KJUR["crypto"]["Util"]["hashString"](l, J);
        },
        W = V(p);
    return C == W;
}), (RSAKey["prototype"]["verifyWithMessageHash"] = function (p, n) {
    if (n["length"] != Math["ceil"](this["n"]["bitLength"]() / 0x4)) return ![];
    var A = parseBigInt(n, 0x10);
    if (A["bitLength"]() > this["n"]["bitLength"]()) return 0x0;
    var L = this["doPublic"](A),
        S = L["toString"](0x10)["replace"](/^1f+00/, ""),
        Y = _rsasign_getAlgNameAndHashFromHexDisgestInfo(S);
    if (Y["length"] == 0x0) return ![];
    var J = Y[0x0],
        C = Y[0x1];
    return C == p;
}), (RSAKey["prototype"]["verifyPSS"] = function (p, n, A, L) {
    var g = function (Y) {
            return KJUR["crypto"]["Util"]["hashHex"](Y, A);
        },
        S = g(rstrtohex(p));
    return (L === undefined && (L = -0x1), this["verifyWithMessageHashPSS"](S, n, A, L));
}), (RSAKey["prototype"]["verifyWithMessageHashPSS"] = function (A, L, S, Y) {
    if (L["length"] != Math["ceil"](this["n"]["bitLength"]() / 0x4)) return ![];
    var J = new BigInteger(L, 0x10),
        C = function (M) {
            return KJUR["crypto"]["Util"]["hashHex"](M, S);
        },
        V = hextorstr(A),
        W = V["length"],
        R = this["n"]["bitLength"]() - 0x1,
        B = Math["ceil"](R / 0x8),
        F;
    if (Y === -0x1 || Y === undefined) Y = W;
    else {
        if (Y === -0x2) Y = B - W - 0x2;
        else {
            if (Y < -0x2) throw "invalid salt length";
        }
    }
    if (B < W + Y + 0x2) throw "data too long";
    var E = this["doPublic"](J)["toByteArray"]();
    for (F = 0x0; F < E["length"]; F += 0x1) {
        E[F] &= 0xff;
    }
    while (E["length"] < B) {
        E["unshift"](0x0);
    }
    if (E[B - 0x1] !== 0xbc) throw "encoded message does not end in 0xbc";
    E = String["fromCharCode"]["apply"](String, E);
    var I = E["substr"](0x0, B - W - 0x1),
        K = E["substr"](I["length"], W),
        T = (0xff00 >> (0x8 * B - R)) & 0xff;
    if ((I["charCodeAt"](0x0) & T) !== 0x0) throw "bits beyond keysize not zero";
    var i = pss_mgf1_str(K, I["length"], C),
        Z = [];
    for (F = 0x0; F < I["length"]; F += 0x1) {
        Z[F] = I["charCodeAt"](F) ^ i["charCodeAt"](F);
    }
    Z[0x0] &= ~T;
    var w = B - W - Y - 0x2;
    for (F = 0x0; F < w; F += 0x1) {
        if (Z[F] !== 0x0) throw "leftmost octets not zero";
    }
    if (Z[w] !== 0x1) throw "0x01 marker not found";
    return (K === hextorstr(C(rstrtohex("" + V + String["fromCharCode"]["apply"](String, Z["slice"](-Y))))));
}), (RSAKey["SALT_LEN_HLEN"] = -0x1), (RSAKey["SALT_LEN_MAX"] = -0x2), (RSAKey["SALT_LEN_RECOVER"] = -0x2);

function X509() {
    var p = ASN1HEX,
        n = p["getChildIdx"],
        A = p["getV"],
        L = p["getTLV"],
        S = p["getVbyList"],
        Y = p["getTLVbyList"],
        J = p["getIdxbyList"],
        C = p["getVidx"],
        V = p["oidname"],
        W = X509,
        l = pemtohex;
    (this["hex"] = null),
        (this["version"] = 0x0),
        (this["foffset"] = 0x0),
        (this["aExtInfo"] = null),
        (this["getVersion"] = function () {
            if (this["hex"] === null || this["version"] !== 0x0) return this["version"];
            if (Y(this["hex"], 0x0, [0x0, 0x0]) !== "a003020102") return ((this["version"] = 0x1), (this["foffset"] = -0x1), 0x1);
            return (this["version"] = 0x3),
                0x3;
        }),
        (this["getSerialNumberHex"] = function () {
            return S(this["hex"], 0x0, [0x0, 0x1 + this["foffset"]], "02");
        }),
        (this["getSignatureAlgorithmField"] = function () {
            return V(S(this["hex"], 0x0, [0x0, 0x2 + this["foffset"], 0x0], "06"));
        }),
        (this["getIssuerHex"] = function () {
            return Y(this["hex"], 0x0, [0x0, 0x3 + this["foffset"]], "30");
        }),
        (this["getIssuerString"] = function () {
            return W["hex2dn"](this["getIssuerHex"]());
        }),
        (this["getSubjectHex"] = function () {
            return Y(this["hex"], 0x0, [0x0, 0x5 + this["foffset"]], "30");
        }),
        (this["getSubjectString"] = function () {
            return W["hex2dn"](this["getSubjectHex"]());
        }),
        (this["getNotBefore"] = function () {
            var R = S(this["hex"], 0x0, [0x0, 0x4 + this["foffset"], 0x0]);
            return ((R = R["replace"](/(..)/g, "%$1")), (R = decodeURIComponent(R)), R);
        }),
        (this["getNotAfter"] = function () {
            var R = S(this["hex"], 0x0, [0x0, 0x4 + this["foffset"], 0x1]);
            return ((R = R["replace"](/(..)/g, "%$1")), (R = decodeURIComponent(R)), R);
        }),
        (this["getPublicKeyHex"] = function () {
            return p["getTLVbyList"](this["hex"], 0x0, [0x0, 0x6 + this["foffset"]], "30");
        }),
        (this["getPublicKeyIdx"] = function () {
            return J(this["hex"], 0x0, [0x0, 0x6 + this["foffset"]], "30");
        }),
        (this["getPublicKeyContentIdx"] = function () {
            var R = this["getPublicKeyIdx"]();
            return J(this["hex"], R, [0x1, 0x0], "30");
        }),
        (this["getPublicKey"] = function () {
            return KEYUTIL["getKey"](this["getPublicKeyHex"](), null, "pkcs8pub");
        }),
        (this["getSignatureAlgorithmName"] = function () {
            return V(S(this["hex"], 0x0, [0x1, 0x0], "06"));
        }),
        (this["getSignatureValueHex"] = function () {
            return S(this["hex"], 0x0, [0x2], "03", !![]);
        }),
        (this["verifySignature"] = function (R) {
            var B = this["getSignatureAlgorithmName"](),
                F = this["getSignatureValueHex"](),
                E = Y(this["hex"], 0x0, [0x0], "30"),
                s = new KJUR["crypto"]["Signature"]({
                    "alg": B
                });
            return (s["init"](R), s["updateHex"](E), s["verify"](F));
        }),
        (this["parseExt"] = function (R) {
            var B, F, E;
            if (R === undefined) {
                E = this["hex"];
                if (this["version"] !== 0x3) return -0x1;
                (B = J(E, 0x0, [0x0, 0x7, 0x0], "30")),
                    (F = n(E, B));
            } else {
                E = pemtohex(R);
                var I = J(E, 0x0, [0x0, 0x3, 0x0, 0x0], "06");
                if (A(E, I) != "2a864886f70d01090e") {
                    this["aExtInfo"] = new Array();
                    return;
                }
                (B = J(E, 0x0, [0x0, 0x3, 0x0, 0x1, 0x0], "30")),
                    (F = n(E, B)),
                    (this["hex"] = E);
            }
            this["aExtInfo"] = new Array();
            for (var K = 0x0; K < F["length"]; K++) {
                var T = {};
                T["critical"] = ![];
                var Z = n(E, F[K]),
                    w = 0x0;
                Z["length"] === 0x3 && ((T["critical"] = !![]), (w = 0x1));
                T["oid"] = p["hextooidstr"](S(E, F[K], [0x0], "06"));
                var M = J(E, F[K], [0x1 + w]);
                (T["vidx"] = C(E, M)),
                    this["aExtInfo"]["push"](T);
            }
        }),
        (this["getExtInfo"] = function (R) {
            var B = this["aExtInfo"],
                F = R;
            !R["match"](/^[0-9.]+$/) && (F = KJUR["asn1"]["x509"]["OID"]["name2oid"](R));
            if (F === "") return undefined;
            for (var E = 0x0; E < B["length"]; E++) {
                if (B[E]["oid"] === F) return B[E];
            }
            return undefined;
        }),
        (this["getExtBasicConstraints"] = function () {
            var R = this["getExtInfo"]("basicConstraints");
            if (R === undefined) return R;
            var B = A(this["hex"], R["vidx"]);
            if (B === "") return {};
            if (B === "0101ff") return {
                "cA": !![]
            };
            if (B["substr"](0x0, 0x8) === "0101ff02") {
                var F = A(B, 0x6),
                    E = parseInt(F, 0x10);
                return {
                    "cA": !![],
                    "pathLen": E
                };
            }
            throw "basicConstraints parse error";
        }),
        (this["getExtKeyUsageBin"] = function () {
            var R = this["getExtInfo"]("keyUsage");
            if (R === undefined) return "";
            var B = A(this["hex"], R["vidx"]);
            if (B["length"] % 0x2 != 0x0 || B["length"] <= 0x2) throw "malformed key usage value";
            var F = parseInt(B["substr"](0x0, 0x2)),
                E = parseInt(B["substr"](0x2), 0x10)["toString"](0x2);
            return E["substr"](0x0, E["length"] - F);
        }),
        (this["getExtKeyUsageString"] = function () {
            var R = this["getExtKeyUsageBin"](),
                B = new Array();
            for (var F = 0x0; F < R["length"]; F++) {
                R["substr"](F, 0x1) == "1" && B["push"](X509["KEYUSAGE_NAME"][F]);
            }
            return B["join"](",");
        }),
        (this["getExtSubjectKeyIdentifier"] = function () {
            var R = this["getExtInfo"]("subjectKeyIdentifier");
            if (R === undefined) return R;
            return A(this["hex"], R["vidx"]);
        }),
        (this["getExtAuthorityKeyIdentifier"] = function () {
            var R = this["getExtInfo"]("authorityKeyIdentifier");
            if (R === undefined) return R;
            var B = {},
                F = L(this["hex"], R["vidx"]),
                E = n(F, 0x0);
            for (var s = 0x0; s < E["length"]; s++) {
                F["substr"](E[s], 0x2) === "80" && (B["kid"] = A(F, E[s]));
            }
            return B;
        }),
        (this["getExtExtKeyUsageName"] = function () {
            var R = this["getExtInfo"]("extKeyUsage");
            if (R === undefined) return R;
            var B = new Array(),
                F = L(this["hex"], R["vidx"]);
            if (F === "") return B;
            var E = n(F, 0x0);
            for (var s = 0x0; s < E["length"]; s++) {
                B["push"](V(A(F, E[s])));
            }
            return B;
        }),
        (this["getExtSubjectAltName"] = function () {
            var R = this["getExtSubjectAltName2"](),
                B = new Array();
            for (var F = 0x0; F < R["length"]; F++) {
                R[F][0x0] === "DNS" && B["push"](R[F][0x1]);
            }
            return B;
        }),
        (this["getExtSubjectAltName2"] = function () {
            var R, B, F, E = this["getExtInfo"]("subjectAltName");
            if (E === undefined) return E;
            var I = new Array(),
                K = L(this["hex"], E["vidx"]),
                T = n(K, 0x0);
            for (var Z = 0x0; Z < T["length"]; Z++) {
                (F = K["substr"](T[Z], 0x2)),
                    (R = A(K, T[Z])),
                F === "81" && ((B = hextoutf8(R)), I["push"](["MAIL", B])),
                F === "82" && ((B = hextoutf8(R)), I["push"](["DNS", B])),
                F === "84" && ((B = X509["hex2dn"](R, 0x0)), I["push"](["DN", B])),
                F === "86" && ((B = hextoutf8(R)), I["push"](["URI", B])),
                F === "87" && ((B = hextoip(R)), I["push"](["IP", B]));
            }
            return I;
        }),
        (this["getExtCRLDistributionPointsURI"] = function () {
            var R = this["getExtInfo"]("cRLDistributionPoints");
            if (R === undefined) return R;
            var B = new Array(),
                F = n(this["hex"], R["vidx"]);
            for (var E = 0x0; E < F["length"]; E++) {
                try {
                    var s = S(this["hex"], F[E], [0x0, 0x0, 0x0], "86"),
                        I = hextoutf8(s);
                    B["push"](I);
                } catch (K) {
                }
            }
            return B;
        }),
        (this["getExtAIAInfo"] = function () {
            var R = this["getExtInfo"]("authorityInfoAccess");
            if (R === undefined) return R;
            var B = {
                    "ocsp": [],
                    "caissuer": []
                },
                F = n(this["hex"], R["vidx"]);
            for (var E = 0x0; E < F["length"]; E++) {
                var s = S(this["hex"], F[E], [0x0], "06"),
                    I = S(this["hex"], F[E], [0x1], "86");
                s === "2b06010505073001" && B["ocsp"]["push"](hextoutf8(I)),
                s === "2b06010505073002" && B["caissuer"]["push"](hextoutf8(I));
            }
            return B;
        }),
        (this["getExtCertificatePolicies"] = function () {
            var R = this["getExtInfo"]("certificatePolicies");
            if (R === undefined) return R;
            var B = L(this["hex"], R["vidx"]),
                F = [],
                E = n(B, 0x0);
            for (var I = 0x0; I < E["length"]; I++) {
                var K = {},
                    T = n(B, E[I]);
                K["id"] = V(A(B, T[0x0]));
                if (T["length"] === 0x2) {
                    var Z = n(B, T[0x1]);
                    for (var w = 0x0; w < Z["length"]; w++) {
                        var M = S(B, Z[w], [0x0], "06");
                        M === "2b06010505070201" ? (K["cps"] = hextoutf8(S(B, Z[w], [0x1]))) : M === "2b06010505070202" && (K["unotice"] = hextoutf8(S(B, Z[w], [0x1, 0x0])));
                    }
                }
                F["push"](K);
            }
            return F;
        }),
        (this["readCertPEM"] = function (R) {
            this["readCertHex"](l(R));
        }),
        (this["readCertHex"] = function (R) {
            (this["hex"] = R),
                this["getVersion"]();
            try {
                J(this["hex"], 0x0, [0x0, 0x7], "a3"),
                    this["parseExt"]();
            } catch (B) {
            }
        }),
        (this["getInfo"] = function () {
            var R = X509,
                F, E, s;
            (F = "Basic Fields
            "),
            (F += "  serial number: " + this["getSerialNumberHex"]() + "
            "),
            (F += "  signature algorithm: " + this["getSignatureAlgorithmField"]() + "
            "),
            (F += "  issuer: " + this["getIssuerString"]() + "
            "),
            (F += "  notBefore: " + this["getNotBefore"]() + "
            "),
            (F += "  notAfter: " + this["getNotAfter"]() + "
            "),
            (F += "  subject: " + this["getSubjectString"]() + "
            "),
            (F += "  subject public key info:
            "),
            (E = this["getPublicKey"]()),
                (F += "    key algorithm: " + E["type"] + "
            ");
            E["type"] === "RSA" && ((F += "    n=" + hextoposhex(E["n"]["toString"](0x10))["substr"](0x0, 0x10) + "...
            "), (F += "
            e = " + hextoposhex(E["
            e
            "]["
            toString
            "](0x10)) + "
            "));
            s = this["aExtInfo"];
            if (s !== undefined && s !== null) {
                F += "X509v3 Extensions:
                ";
                for (var I = 0x0; I < s["length"]; I++) {
                    var K = s[I],
                        T = KJUR["asn1"]["x509"]["OID"]["oid2name"](K["oid"]);
                    T === "" && (T = K["oid"]);
                    var Z = "";
                    K["critical"] === !![] && (Z = "CRITICAL");
                    F += "  " + T + " " + Z + ":
                    ";
                    if (T === "basicConstraints") {
                        var M = this["getExtBasicConstraints"]();
                        M["cA"] === undefined ? (F += "    {}
                            ") : ((F += "
                        cA = true
                        "), M["
                        pathLen
                        "] !== undefined && (F += ", pathLen = " + M["
                        pathLen
                        "]), (F += "
                        "));
                    } else {
                        if (T === "keyUsage") F += "    " + this["getExtKeyUsageString"]() + "
                        ";
                    else
                        {
                            if (T === "subjectKeyIdentifier") F += "    " + this["getExtSubjectKeyIdentifier"]() + "
                            ";
                        else
                            {
                                if (T === "authorityKeyIdentifier") {
                                    var U = this["getExtAuthorityKeyIdentifier"]();
                                    U["kid"] !== undefined && (F += "    kid=" + U["kid"] + "
                                    ");
                                } else {
                                    if (T === "extKeyUsage") {
                                        var H = this["getExtExtKeyUsageName"]();
                                        F += "    " + H["join"](", ") + "
                                        ";
                                    } else {
                                        if (T === "subjectAltName") {
                                            var O = this["getExtSubjectAltName2"]();
                                            F += "    " + O + "
                                            ";
                                        } else {
                                            if (T === "cRLDistributionPoints") {
                                                var X = this["getExtCRLDistributionPointsURI"]();
                                                F += "    " + X + "
                                                ";
                                            } else {
                                                if (T === "authorityInfoAccess") {
                                                    var G = this["getExtAIAInfo"]();
                                                    G["ocsp"] !== undefined && (F += "    ocsp: " + G["ocsp"]["join"](",") + "
                                                    "),
                                                    G["caissuer"] !== undefined && (F += "    caissuer: " + G["caissuer"]["join"](",") + "
                                                    ");
                                                } else {
                                                    if (T === "certificatePolicies") {
                                                        var N = this["getExtCertificatePolicies"]();
                                                        for (var D = 0x0; D < N["length"]; D++) {
                                                            N[D]["id"] !== undefined && (F += "    policy oid: " + N[D]["id"] + "
                                                            "),
                                                            N[D]["cps"] !== undefined && (F += "    cps: " + N[D]["cps"] + "
                                                            ");
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return ((F += "signature algorithm: " + this["getSignatureAlgorithmName"]() + "
            "), (F += "
            signature: " + this["
            getSignatureValueHex
            "]()["
            substr
            "](0x0, 0x10) + "
        ...
            "), F);
        });
}

(X509["hex2dn"] = function (p, n) {
    n === undefined && (n = 0x0);
    if (p["substr"](n, 0x2) !== "30") throw "malformed DN";
    var a = new Array(),
        A = ASN1HEX["getChildIdx"](p, n);
    for (var L = 0x0; L < A["length"]; L++) {
        a["push"](X509["hex2rdn"](p, A[L]));
    }
    return ((a = a["map"](function (g) {
        return g["replace"]("/", "\/");
    })), "/" + a["join"]("/"));
}), (X509["hex2rdn"] = function (p, n) {
    n === undefined && (n = 0x0);
    if (p["substr"](n, 0x2) !== "31") throw "malformed RDN";
    var a = new Array(),
        A = ASN1HEX["getChildIdx"](p, n);
    for (var L = 0x0; L < A["length"]; L++) {
        a["push"](X509["hex2attrTypeValue"](p, A[L]));
    }
    return ((a = a["map"](function (g) {
        return g["replace"]("+", "\+");
    })), a["join"]("+"));
}), (X509["hex2attrTypeValue"] = function (p, n) {
    var A = ASN1HEX,
        L = A["getV"];
    n === undefined && (n = 0x0);
    if (p["substr"](n, 0x2) !== "30") throw "malformed attribute type and value";
    var S = A["getChildIdx"](p, n);
    (S["length"] !== 0x2 || p["substr"](S[0x0], 0x2) !== "06") && "malformed attribute type and value";
    var Y = L(p, S[0x0]),
        J = KJUR["asn1"]["ASN1Util"]["oidHexToInt"](Y),
        C = KJUR["asn1"]["x509"]["OID"]["oid2atype"](J),
        V = L(p, S[0x1]),
        W = hextorstr(V);
    return C + "=" + W;
}), (X509["getPublicKeyFromCertHex"] = function (p) {
    var n = new X509();
    return (n["readCertHex"](p), n["getPublicKey"]());
}), (X509["getPublicKeyFromCertPEM"] = function (p) {
    var n = new X509();
    return (n["readCertPEM"](p), n["getPublicKey"]());
}), (X509["getPublicKeyInfoPropOfCertPEM"] = function (p) {
    var n = ASN1HEX,
        A = n["getVbyList"],
        L = {},
        S,
        Y,
        J;
    return ((L["algparam"] = null), (S = new X509()), S["readCertPEM"](p), (Y = S["getPublicKeyHex"]()), (L["keyhex"] = A(Y, 0x0, [0x1], "03")["substr"](0x2)), (L["algoid"] = A(Y, 0x0, [0x0, 0x0], "06")), L["algoid"] === "2a8648ce3d0201" && (L["algparam"] = A(Y, 0x0, [0x0, 0x1], "06")), L);
}), (X509["KEYUSAGE_NAME"] = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"]);
(typeof KJUR == "undefined" || !KJUR) && (KJUR = {});
(typeof KJUR["jws"] == "undefined" || !KJUR["jws"]) && (KJUR["jws"] = {});
(KJUR["jws"]["JWS"] = function () {
    var p = KJUR,
        n = p["jws"]["JWS"],
        A = n["isSafeJSONString"];
    this["parseJWS"] = function (L, S) {
        if (this["parsedJWS"] !== undefined && (S || this["parsedJWS"]["sigvalH"] !== undefined)) return;
        var Y = L["match"](/^([^.]+)\.([^.]+)\.([^.]+)$/);
        if (Y == null) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
        var J = Y[0x1],
            C = Y[0x2],
            V = Y[0x3],
            W = J + "." + C;
        (this["parsedJWS"] = {}),
            (this["parsedJWS"]["headB64U"] = J),
            (this["parsedJWS"]["payloadB64U"] = C),
            (this["parsedJWS"]["sigvalB64U"] = V),
            (this["parsedJWS"]["si"] = W);
        if (!S) {
            var R = b64utohex(V),
                B = parseBigInt(R, 0x10);
            (this["parsedJWS"]["sigvalH"] = R),
                (this["parsedJWS"]["sigvalBI"] = B);
        }
        var F = b64utoutf8(J),
            E = b64utoutf8(C);
        (this["parsedJWS"]["headS"] = F),
            (this["parsedJWS"]["payloadS"] = E);
        if (!A(F, this["parsedJWS"], "headP")) throw ("malformed JSON string for JWS Head: " + F);
    };
}), (KJUR["jws"]["JWS"]["sign"] = function (L, S, Y, J, C) {
    var V = KJUR,
        W = V["jws"],
        R = W["JWS"],
        B = R["readSafeJSONString"],
        F = R["isSafeJSONString"],
        E = V["crypto"],
        I = E["ECDSA"],
        K = E["Mac"],
        T = E["Signature"],
        Z = JSON,
        M,
        U,
        H;
    if (typeof S != "string" && typeof S != "object") throw ("spHeader must be JSON string or object: " + S);
    typeof S == "object" && ((U = S), (M = Z["stringify"](U)));
    if (typeof S == "string") {
        M = S;
        if (!F(M)) throw ("JWS Head is not safe JSON string: " + M);
        U = B(M);
    }
    H = Y;
    typeof Y == "object" && (H = Z["stringify"](Y));
    (L == "" || L == null) && U["alg"] !== undefined && (L = U["alg"]);
    L != "" && L != null && U["alg"] === undefined && ((U["alg"] = L), (M = Z["stringify"](U)));
    if (L !== U["alg"]) throw ("alg and sHeader.alg doesn't match: " + L + "!=" + U["alg"]);
    var O = null;
    if (R["jwsalg2sigalg"][L] === undefined) throw ("unsupported alg name: " + L);
    else O = R["jwsalg2sigalg"][L];
    var X = utf8tob64u(M),
        G = utf8tob64u(H),
        N = X + "." + G,
        D = "";
    if (O["substr"](0x0, 0x4) == "Hmac") {
        if (J === undefined) throw "mac key shall be specified for HS* alg";
        var Q = new K({
            "alg": O,
            "prov": "cryptojs",
            "pass": J
        });
        Q["updateString"](N),
            (D = Q["doFinal"]());
    } else {
        if (O["indexOf"]("withECDSA") != -0x1) {
            var P = new T({
                "alg": O
            });
            P["init"](J, C),
                P["updateString"](N);
            var p0 = P["sign"]();
            D = KJUR["crypto"]["ECDSA"]["asn1SigToConcatSig"](p0);
        } else {
            if (O != "none") {
                var P = new T({
                    "alg": O
                });
                P["init"](J, C),
                    P["updateString"](N),
                    (D = P["sign"]());
            }
        }
    }
    var p1 = hextob64u(D);
    return N + "." + p1;
}), (KJUR["jws"]["JWS"]["verify"] = function (a, L, S) {
    var Y = KJUR,
        J = Y["jws"],
        C = J["JWS"],
        V = C["readSafeJSONString"],
        W = Y["crypto"],
        R = W["ECDSA"],
        F = W["Mac"],
        E = W["Signature"],
        I;
    typeof RSAKey !== undefined && (I = RSAKey);
    var K = a["split"](".");
    if (K["length"] !== 0x3) return ![];
    var T = K[0x0],
        Z = K[0x1],
        M = T + "." + Z,
        U = b64utohex(K[0x2]),
        H = V(b64utoutf8(K[0x0])),
        O = null,
        X = null;
    if (H["alg"] === undefined) throw "algorithm not specified in header";
    else (O = H["alg"]),
        (X = O["substr"](0x0, 0x2));
    if (S != null && Object["prototype"]["toString"]["call"](S) === "[object Array]" && S["length"] > 0x0) {
        var G = ":" + S["join"](":") + ":";
        if (G["indexOf"](":" + O + ":") == -0x1) throw ("algorithm '" + O + "' not accepted in the list");
    }
    if (O != "none" && L === null) throw "key shall be specified to verify.";
    typeof L == "string" && L["indexOf"]("-----BEGIN ") != -0x1 && (L = KEYUTIL["getKey"](L));
    if (X == "RS" || X == "PS") {
        if (!(L instanceof I)) throw "key shall be a RSAKey obj for RS* and PS* algs";
    }
    if (X == "ES") {
        if (!(L instanceof R)) throw "key shall be a ECDSA obj for ES* algs";
    }
    if (O == "none") {
    }
    var N = null;
    if (C["jwsalg2sigalg"][H["alg"]] === undefined) throw ("unsupported alg name: " + O);
    else N = C["jwsalg2sigalg"][O];
    if (N == "none") throw "not supported";
    else {
        if (N["substr"](0x0, 0x4) == "Hmac") {
            var D = null;
            if (L === undefined) throw "hexadecimal key shall be specified for HMAC";
            var Q = new F({
                "alg": N,
                "pass": L
            });
            return (Q["updateString"](M), (D = Q["doFinal"]()), U == D);
        } else {
            if (N["indexOf"]("withECDSA") != -0x1) {
                var P = null;
                try {
                    P = R["concatSigToASN1Sig"](U);
                } catch (p1) {
                    return ![];
                }
                var p0 = new E({
                    "alg": N
                });
                return (p0["init"](L), p0["updateString"](M), p0["verify"](P));
            } else {
                var p0 = new E({
                    "alg": N
                });
                return (p0["init"](L), p0["updateString"](M), p0["verify"](U));
            }
        }
    }
}), (KJUR["jws"]["JWS"]["parse"] = function (p) {
    var n = p["split"]("."),
        a = {},
        A,
        L,
        S;
    if (n["length"] != 0x2 && n["length"] != 0x3) throw "malformed sJWS: wrong number of '.' splitted elements";
    return ((A = n[0x0]), (L = n[0x1]), n["length"] == 0x3 && (S = n[0x2]), (a["headerObj"] = KJUR["jws"]["JWS"]["readSafeJSONString"](b64utoutf8(A))), (a["payloadObj"] = KJUR["jws"]["JWS"]["readSafeJSONString"](b64utoutf8(L))), (a["headerPP"] = JSON["stringify"](a["headerObj"], null, "  ")), a["payloadObj"] == null ? (a["payloadPP"] = b64utoutf8(L)) : (a["payloadPP"] = JSON["stringify"](a["payloadObj"], null, "  ")), S !== undefined && (a["sigHex"] = b64utohex(S)), a);
}), (KJUR["jws"]["JWS"]["verifyJWT"] = function (a, A, L) {
    var S = KJUR,
        Y = S["jws"],
        J = Y["JWS"],
        C = J["readSafeJSONString"],
        V = J["inArray"],
        W = J["includedArray"],
        R = a["split"]("."),
        B = R[0x0],
        F = R[0x1],
        E = B + "." + F,
        s = b64utohex(R[0x2]),
        I = C(b64utoutf8(B)),
        K = C(b64utoutf8(F));
    if (I["alg"] === undefined) return ![];
    if (L["alg"] === undefined) throw "acceptField.alg shall be specified";
    if (!V(I["alg"], L["alg"])) return ![];
    if (K["iss"] !== undefined && typeof L["iss"] === "object") {
        if (!V(K["iss"], L["iss"])) return ![];
    }
    if (K["sub"] !== undefined && typeof L["sub"] === "object") {
        if (!V(K["sub"], L["sub"])) return ![];
    }
    if (K["aud"] !== undefined && typeof L["aud"] === "object") {
        if (typeof K["aud"] == "string") {
            if (!V(K["aud"], L["aud"])) return ![];
        } else {
            if (typeof K["aud"] == "object") {
                if (!W(K["aud"], L["aud"])) return ![];
            }
        }
    }
    var T = Y["IntDate"]["getNow"]();
    L["verifyAt"] !== undefined && typeof L["verifyAt"] === "number" && (T = L["verifyAt"]);
    (L["gracePeriod"] === undefined || typeof L["gracePeriod"] !== "number") && (L["gracePeriod"] = 0x0);
    if (K["exp"] !== undefined && typeof K["exp"] == "number") {
        if (K["exp"] + L["gracePeriod"] < T) return ![];
    }
    if (K["nbf"] !== undefined && typeof K["nbf"] == "number") {
        if (T < K["nbf"] - L["gracePeriod"]) return ![];
    }
    if (K["iat"] !== undefined && typeof K["iat"] == "number") {
        if (T < K["iat"] - L["gracePeriod"]) return ![];
    }
    if (K["jti"] !== undefined && L["jti"] !== undefined) {
        if (K["jti"] !== L["jti"]) return ![];
    }
    if (!J["verify"](a, A, L["alg"])) return ![];
    return !![];
}), (KJUR["jws"]["JWS"]["includedArray"] = function (p, n) {
    var A = KJUR["jws"]["JWS"]["inArray"];
    if (p === null) return ![];
    if (typeof p !== "object") return ![];
    if (typeof p["length"] !== "number") return ![];
    for (var L = 0x0; L < p["length"]; L++) {
        if (!A(p[L], n)) return ![];
    }
    return !![];
}), (KJUR["jws"]["JWS"]["inArray"] = function (p, n) {
    if (n === null) return ![];
    if (typeof n !== "object") return ![];
    if (typeof n["length"] !== "number") return ![];
    for (var a = 0x0; a < n["length"]; a++) {
        if (n[a] == p) return !![];
    }
    return ![];
}), (KJUR["jws"]["JWS"]["jwsalg2sigalg"] = {
    "HS256": "HmacSHA256",
    "HS384": "HmacSHA384",
    "HS512": "HmacSHA512",
    "RS256": "SHA256withRSA",
    "RS384": "SHA384withRSA",
    "RS512": "SHA512withRSA",
    "ES256": "SHA256withECDSA",
    "ES384": "SHA384withECDSA",
    "PS256": "SHA256withRSAandMGF1",
    "PS384": "SHA384withRSAandMGF1",
    "PS512": "SHA512withRSAandMGF1",
    "none": "none"
}), (KJUR["jws"]["JWS"]["isSafeJSONString"] = function (p, n, A) {
    var L = null;
    try {
        L = jsonParse(p);
        if (typeof L != "object") return 0x0;
        if (L["constructor"] === Array) return 0x0;
        return n && (n[A] = L),
            0x1;
    } catch (g) {
        return 0x0;
    }
}), (KJUR["jws"]["JWS"]["readSafeJSONString"] = function (p) {
    var n = null;
    try {
        n = jsonParse(p);
        if (typeof n != "object") return null;
        if (n["constructor"] === Array) return null;
        return n;
    } catch (A) {
        return null;
    }
}), (KJUR["jws"]["JWS"]["getEncodedSignatureValueFromJWS"] = function (p) {
    var n = p["match"](/^[^.]+\.[^.]+\.([^.]+)$/);
    if (n == null) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
    return n[0x1];
}), (KJUR["jws"]["JWS"]["getJWKthumbprint"] = function (p) {
    if (p["kty"] !== "RSA" && p["kty"] !== "EC" && p["kty"] !== "oct") throw "unsupported algorithm for JWK Thumprint";
    var n = "{";
    if (p["kty"] === "RSA") {
        if (typeof p["n"] != "string" || typeof p["e"] != "string") throw "wrong n and e value for RSA key";
        (n += ""
        e
        ":"
        " + p["
        e
        "] + "
        ","
    ),
        (n += ""
        kty
        ":"
        " + p["
        kty
        "] + "
        ","
    ),
        (n += ""
        n
        ":"
        " + p["
        n
        "] + "
        "}"
    )
        ;
    } else {
        if (p["kty"] === "EC") {
            if (typeof p["crv"] != "string" || typeof p["x"] != "string" || typeof p["y"] != "string") throw "wrong crv, x and y value for EC key";
            (n += ""
            crv
            ":"
            " + p["
            crv
            "] + "
            ","
        ),
            (n += ""
            kty
            ":"
            " + p["
            kty
            "] + "
            ","
        ),
            (n += ""
            x
            ":"
            " + p["
            x
            "] + "
            ","
        ),
            (n += ""
            y
            ":"
            " + p["
            y
            "] + "
            "}"
        )
            ;
        } else {
            if (p["kty"] === "oct") {
                if (typeof p["k"] != "string") throw "wrong k value for oct(symmetric) key";
                (n += ""
                kty
                ":"
                " + p["
                kty
                "] + "
                ","
            ),
                (n += ""
                k
                ":"
                " + p["
                k
                "] + "
                "}"
            )
                ;
            }
        }
    }
    var A = rstrtohex(n),
        L = KJUR["crypto"]["Util"]["hashHex"](A, "sha256"),
        g = hextob64u(L);
    return g;
}), (KJUR["jws"]["IntDate"] = {}), (KJUR["jws"]["IntDate"]["get"] = function (p) {
    var n = KJUR["jws"]["IntDate"],
        A = n["getNow"],
        L = n["getZulu"];
    if (p == "now") return A();
    else {
        if (p == "now + 1hour") return A() + 0x3c * 0x3c;
        else {
            if (p == "now + 1day") return A() + 0x3c * 0x3c * 0x18;
            else {
                if (p == "now + 1month") return A() + 0x3c * 0x3c * 0x18 * 0x1e;
                else {
                    if (p == "now + 1year") return A() + 0x3c * 0x3c * 0x18 * 0x16d;
                    else {
                        if (p["match"](/Z$/)) return L(p);
                        else {
                            if (p["match"](/^[0-9]+$/)) return parseInt(p);
                        }
                    }
                }
            }
        }
    }
    throw ("unsupported format: " + p);
}), (KJUR["jws"]["IntDate"]["getZulu"] = function (p) {
    return zulutosec(p);
}), (KJUR["jws"]["IntDate"]["getNow"] = function () {
    var p = ~~(new Date() / 0x3e8);
    return p;
}), (KJUR["jws"]["IntDate"]["intDate2UTCString"] = function (p) {
    var n = new Date(p * 0x3e8);
    return n["toUTCString"]();
}), (KJUR["jws"]["IntDate"]["intDate2Zulu"] = function (p) {
    var n = new Date(p * 0x3e8),
        A = ("0000" + n["getUTCFullYear"]())["slice"](-0x4),
        L = ("00" + (n["getUTCMonth"]() + 0x1))["slice"](-0x2),
        S = ("00" + n["getUTCDate"]())["slice"](-0x2),
        Y = ("00" + n["getUTCHours"]())["slice"](-0x2),
        J = ("00" + n["getUTCMinutes"]())["slice"](-0x2),
        C = ("00" + n["getUTCSeconds"]())["slice"](-0x2);
    return A + L + S + Y + J + C + "Z";
});
(typeof KJUR == "undefined" || !KJUR) && (KJUR = {});
(typeof KJUR["jws"] == "undefined" || !KJUR["jws"]) && (KJUR["jws"] = {});
KJUR["jws"]["JWSJS"] = function () {
    var p = KJUR,
        n = p["jws"],
        A = n["JWS"],
        L = A["readSafeJSONString"];
    (this["aHeader"] = []),
        (this["sPayload"] = ""),
        (this["aSignature"] = []),
        (this["init"] = function () {
            (this["aHeader"] = []),
                (this["sPayload"] = undefined),
                (this["aSignature"] = []);
        }),
        (this["initWithJWS"] = function (g) {
            this["init"]();
            var S = g["split"](".");
            if (S["length"] != 0x3) throw "malformed input JWS";
            this["aHeader"]["push"](S[0x0]),
                (this["sPayload"] = S[0x1]),
                this["aSignature"]["push"](S[0x2]);
        }),
        (this["addSignature"] = function (S, Y, J, C) {
            if (this["sPayload"] === undefined || this["sPayload"] === null) throw "there's no JSON-JS signature to add.";
            var V = this["aHeader"]["length"];
            if (this["aHeader"]["length"] != this["aSignature"]["length"]) throw "aHeader.length != aSignature.length";
            try {
                var W = KJUR["jws"]["JWS"]["sign"](S, Y, this["sPayload"], J, C),
                    R = W["split"]("."),
                    B = R[0x0],
                    F = R[0x2];
                this["aHeader"]["push"](R[0x0]),
                    this["aSignature"]["push"](R[0x2]);
            } catch (E) {
                this["aHeader"]["length"] > V && this["aHeader"]["pop"]();
                this["aSignature"]["length"] > V && this["aSignature"]["pop"]();
                throw ("addSignature failed: " + E);
            }
        }),
        (this["verifyAll"] = function (S) {
            if (this["aHeader"]["length"] !== S["length"] || this["aSignature"]["length"] !== S["length"]) return ![];
            for (var Y = 0x0; Y < S["length"]; Y++) {
                var J = S[Y];
                if (J["length"] !== 0x2) return ![];
                var C = this["verifyNth"](Y, J[0x0], J[0x1]);
                if (C === ![]) return ![];
            }
            return !![];
        }),
        (this["verifyNth"] = function (S, Y, J) {
            if (this["aHeader"]["length"] <= S || this["aSignature"]["length"] <= S) return ![];
            var C = this["aHeader"][S],
                V = this["aSignature"][S],
                W = C + "." + this["sPayload"] + "." + V,
                R = ![];
            try {
                R = A["verify"](W, Y, J);
            } catch (B) {
                return ![];
            }
            return R;
        }),
        (this["readJWSJS"] = function (S) {
            if (typeof S === "string") {
                var Y = L(S);
                if (Y == null) throw "argument is not safe JSON object string";
                (this["aHeader"] = Y["headers"]),
                    (this["sPayload"] = Y["payload"]),
                    (this["aSignature"] = Y["signatures"]);
            } else try {
                if (S["headers"]["length"] > 0x0) this["aHeader"] = S["headers"];
                else throw "malformed header";
                if (typeof S["payload"] === "string") this["sPayload"] = S["payload"];
                else throw "malformed signatures";
                if (S["signatures"]["length"] > 0x0) this["aSignature"] = S["signatures"];
                else throw "malformed signatures";
            } catch (J) {
                throw ("malformed JWS-JS JSON object: " + J);
            }
        }),
        (this["getJSON"] = function () {
            return {
                "headers": this["aHeader"],
                "payload": this["sPayload"],
                "signatures": this["aSignature"]
            };
        }),
        (this["isEmpty"] = function () {
            if (this["aHeader"]["length"] == 0x0) return 0x1;
            return 0x0;
        });
};
var url = "/api/challenge56";
(call = function (p) {
    var n = {
        "page": String(p)
    };
    $["ajax"]({
        "url": url,
        "dataType": "json",
        "async": !![],
        "data": n,
        "type": "POST",
        "beforeSend": function (c) {
            (function () {
            })();
        },
        "success": function (c) {
            var a = "<tr class='odd '>",
                A = new JSEncrypt();
            A["setPrivateKey"](PVA["toString"]("ascii")),
                (datas = JSON["parse"](A["decrypt"](c["result"]))["data"]),
                $["each"](datas,
                    function (L, g) {
                        var S = "<td class='info '>" + g["value"] + "</td>";
                        a += S;
                    }),
                $(".data")["text"]("")["append"](a + "</tr>");
        },
        "complete": function () {
            $("#page")["paging"]({
                "nowPage": p,
                "pageNum": 0x64,
                "buttonNum": 0x7,
                "canJump": 0x1,
                "showOne": 0x1,
                "callback": function (c) {
                    call(c);
                }
            });
        },
        "error": function () {
            alert("检测到异常情况，请关闭抓包工具，使用chrome浏览器再试试"),
                location["reload"]();
        }
    });
}), call(0x1);