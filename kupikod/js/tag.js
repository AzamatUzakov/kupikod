(function () {
    try {
        (function () {
            function lf(a, c, b, d) {
                var e = this; return D(window, "c.i", function () {
                    function f(F) { (F = mf(l, m, "", F)(l, m)) && (P(F.then) ? F.then(g) : g(F)); return F } function g(F) { F && (P(F) ? p.push(F) : oa(F) && x(function (O) { var L = O[0]; O = O[1]; P(O) && ("u" === L ? p.push(O) : h(O, L)) }, Oa(F))) } function h(F, O, L) { e[O] = km(l, m, L || q, O, F) } var k, l = window; (!l || isNaN(a) && !a) && ie(); var m = lm(a, nf, c, b, d), p = [], q = [sh, mf, th]; q.unshift(mm); var r = A(Q, cb), t = M(m); m.id || Va(ib("Invalid Metrika id: " + m.id, !0)); var y = ld.C("counters", {}); if (y[t]) return Mb(l,
                        t, "dc", (k = {}, k.key = t, k)), y[t]; y[t] = e; ld.D("counters", y); ld.Ia("counter", e); x(function (F) { F(l, m) }, of); x(f, md); f(nm); h(om(l, m, p), "destruct", [sh, th]); Ub(l, C([l, r, f, 1, "a.i"], uh)); x(f, X)
                })()
            } function pm(a) { qm(a, function () { for (var c = 0; c < arguments.length; c++); }); return function (c) { oa(c) && (c = c.code, R(c) && x(function (b) { if (R(b) && 1 === b[0]) { var d = b[1]; I(d, rm) && vh("ytm.p." + d, sm)(a, b) } }, c)) } } function sm(a, c) { var b, d = c.slice(2), e = [(b = {}, b.require = { kind: 0, value: w(tm, Pc([a, {}])) }, b)]; pf(e, je([3], d)) } function pf(a,
                c, b) { c = c.slice(1); a.push(b || {}); x(function (d) { R(d) && 3 === d[0] ? pf(a, d) : !R(d) || 18 !== d[0] && 19 !== d[0] ? R(d) && 2 === d[0] && ec(a, d[1]) : um(a, d) }, c); a.pop() } function um(a, c) { var b = 18 === c[0]; x(function (d) { var e = d[0], f = d[1]; if (b && 1 === d.length) throw ib("mca"); d = a[a.length - 1]; if (Nb(d, e)) throw ib("vr"); f = ec(a, f); d[e] = { kind: b ? 0 : 1, value: f } }, c.slice(1)) } function ec(a, c) {
                    if (fa(c) || "[object Number]" === Object.prototype.toString.call(c) || !!c === c || ha(c) || c instanceof RegExp) return c; if (R(c) && 40 === c[0]) {
                        a: {
                            var b = c[1]; for (var d =
                                a.length; 0 < d;) { var e = a[--d]; if (Nb(e, b)) { b = e[b]; break a } } b = void 0
                        } if (!b) throw ib("vnd"); return b.value
                    } if (R(c) && 37 === c[0]) { d = c.slice(2); b = ec(a, c[1]); if (!P(b)) throw ib("tenf"); d = A(u(a, ec), d); return b.apply(null, d) } if (R(c) && 24 === c[0]) return vm(a, c); if (R(c) && 35 === c[0]) { d = c[2]; b = ec(a, c[1]); d = ec(a, d); if (!b) throw ib("noma"); return b["" + d] } if (R(c) && 23 === c[0]) return wm(a, c)
                } function wm(a, c) { return N(function (b, d) { var e = d[1], f = ec(a, d[0]); e = ec(a, e); b["" + f] = e; return b }, {}, c.slice(1)) } function vm(a, c) {
                    var b = c[1],
                    d = c[2], e = c[3], f = A(Q, a); return vh("ytm.f." + b, function () { var g = arguments, h = N(function (k, l, m) { k[l] = { kind: 1, value: g[m] }; return k }, {}, d); b && !I(b, d) && (h[b] = { kind: 0, value: b }); pf(f, e, h) })
                } function vh(a, c) { return function () { try { return c.apply(null, arguments) } catch (b) { wh(a, b) } } } function tm(a) { return xm[a] } function zm(a) { return N(function (c, b) { Nb(a, b) && (c[b] = a[b]); return c }, {}, ca(a)) } function Am(a, c) {
                    var b = "" + c, d = { id: 1, ca: "0" }, e = Bm(b); e ? d.id = e : -1 === jb(b, ":") ? (b = Fa(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Fa(b[0]),
                        d.ca = ke(e) ? "1" : "0"); return [Aa(a, d), d]
                } function Cm(a, c) { if ("*" === c) return !0; var b = U(a); return c === b.host + b.pathname } function Dm(a, c) { var b = n(c, "target"); b && a(b) } function Em(a, c, b) { var d = n(b, "submitter"); d || (b = n(b, "target")) && (d = le(a, b)); d && c(d) } function Fm(a, c, b, d) {
                    var e = me(a, d); e && x(function (f) {
                        var g, h = null; try { var k = n(f, "css_selector"), l = fc(k, a.document); h = xh(l) } catch (r) { } k = null; try {
                            var m = n(f, "xpath"), p = Gm(m); var q = p ? n(a, "document.evaluate") ? a.document.evaluate(p, a.document, null, a.XPathResult.FIRST_ORDERED_NODE_TYPE,
                                null).singleNodeValue : null : null; k = xh(q)
                        } catch (r) { } f = (g = {}, g.s = [k, h], g.b = e, g); c(f)
                    }, b)
                } function xh(a) { return (a = Ob(a)) ? nd(ne(a)) : null } function Gm(a) { if (!a) return ""; a = a.match(Hm); if (!a || 0 === a.length) return ""; var c = Im(); return "//HTML/BODY/" + N(function (b, d) { var e = d[0], f = Fa(d.slice(1)); return "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b }, "", a) } function Jm(a) {
                    x(function (c) {
                        var b; if (c.data.auctionId) {
                            var d = c.event, e = c.data; c = e.auctionId; Ja[c] || (Ja[c] = (b = {}, b.auctionId = c, b)); b = "auctionInit" === d; if (!Ja[c].startStamp || b) Ja[c].startStamp =
                                b ? e.auctionStart || e.timestamp : e.auctionStart; if (I(d, Km)) { if (b = e.bidderCode) { Ja[c][d] || (Ja[c][d] = {}); var f = {}; Ja[c][d][b] = f; x(function (g) { var h = e[g]; ha(h) || (f[g] = h) }, Lm); Ja[c].endStamp && (Ja[c].aa = !0) } } else "auctionEnd" === d && (Ja[c].aa = !0, Ja[c].endStamp = e.auctionEnd || e.timestamp, Ja[c].requestedBidders = ia(function (g, h, k) { return oe(g, k) === h }, A(S("bidderCode"), e.bidderRequests)))
                        }
                    }, a)
                } function Mm(a, c) { x(function (b) { b.aa && Nm(a, c, b.auctionId) }, yh(Ja)) } function Nm(a, c, b) {
                    Ja[b].aa = !1; Ja[b].Ka && la(a, Ja[b].Ka);
                    Ja[b].Ka = T(a, function () { var d, e; delete Ja[b].Ka; delete Ja[b].aa; c((d = {}, d.__ym = (e = {}, e.pbjs = Ja[b], e), d)); delete Ja[b] }, 2E3)
                } function Om(a) { var c = n(a, "featurePolicy"); return c ? "browsingTopics" in a && c.allowsFeature("browsing-topics") : !1 } function Pm(a, c, b, d) { var e = n(d, "data"); if (fa(e)) { var f = e.split("*"); e = f[0]; var g = f[1]; f = f[2]; "sc.topics-response" === e ? (g && ("1" === g && f ? (a = zb(a, f), R(a) && c.D("cta", a)) : c.D("cta.e", g)), b()) : "sc.frame" === e && d.source && d.source.postMessage("sc.topics", "*") } } function Qm(a, c) {
                    var b;
                    if ("https://oauth.yandex.ru" === n(c, "origin") && n(c, "source.window") && "_ym_uid_request" === n(c.data, "_ym")) { var d = c.source, e = (b = {}, b._ym_uid = a, b); d.postMessage(e, "https://oauth.yandex.ru") }
                } function zh(a, c) { void 0 === c && (c = !0); var b = fc("canvas", a.document); if (b && (b = Qc(b))) { var d = pe(a) || Rc(a), e = d[0]; d = d[1]; if (.3 <= Ah(a, b, { h: d, w: e }) / (d * e)) { J(a).D("hc", 1); return } } c && T(a, C([a, !1], zh), 3E3) } function Bh(a) { return { N: function (c, b) { Rm(a).then(function (d) { c.J || (c.J = {}); c.J.uah = d; b() }, b) } } } function Sm(a) {
                    var c = N(function (b,
                        d) { var e = d[1], f = Tm(a[d[0]]); f && b.push("" + e + "\n" + f); return b }, [], Oa(Um)); return G("\n", c)
                } function Vm(a) { return "che\n" + a } function Tm(a) { return fa(a) ? a : R(a) ? G(",", A(function (c) { return '"' + c.brand + '";v="' + c.version + '"' }, a)) : ha(a) ? "" : a ? "?1" : "?0" } function qf(a) { var c = Wm(a); return { N: function (b, d) { b.ha || (b.ha = {}); b.ha.Ph = c(Ch); d() }, sa: function (b, d) { var e = b.Ii; W(e) || c(Xm(e)); d() } } } function Ch(a) { var c = a.Ke, b = a.Oh; x(function (f, g) { 1 < b[g] && (a.pd = g) }, c); var d = a.pd, e = c.slice().splice(d - 1, 1); e.unshift(c[d]); return e }
            function Ym(a, c) { c.cookie.D("hostIndex", G(",", A(function (b, d) { return G("-", [d, b]) }, a)), 1440) } function Dh(a, c) { var b = a.C("hostIndex"); return b ? A(function (d) { return Fa(d.split("-")[1]) }, b.split(",")) : A(u(0, Q), c) } function Zm(a, c) { var b = $m(a), d = [an(a) || bn(a)]; cn(a) && d.push(b); d.unshift("mc.webvisor.org"); var e = ka(a); b = Pa(a); var f = b.C("synced", {}); d = ia(function (g) { if (c[g]) { var h = (f[g] || 1) + 1440 < e(sb); h && delete f[g]; return h } }, d); b.D("synced", f); return A(function (g) { return { Si: c[g], hi: g } }, d) } function bn(a) {
                a =
                dn(a); return en[a] || a
            } function $m(a) { a = Eh(a); return fn[a] || "ru" } function gn(a, c, b, d) {
                if (!b.K || ke(c.ca)) d(); else {
                    var e = qe(a), f = u(e, hn), g = Sc(a, ""), h = function () { var q = G(",", A(jn(rf), re(e))); q = "" + q + kn(q, g); se(b, "gdpr", q); d() }; if (c.kj) f("31"), h(); else if (3 === c.id) h(); else {
                        var k = J(a), l = k.C("f1"); if (l) l(h); else if (l = re(e), Za(wc(rf), l)) h(); else if (g.C("yandex_login")) f("13"), g.D("gdpr", Tc, 525600), h(); else {
                            l = te(a); var m = U(a); var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                version: 2, tf: ln, Bf: "_inversed_buttons"
                            } : void 0; l || p ? (l = g.C("gdpr"), I(l, xc) ? (f(l === sf ? "12" : "3"), h()) : tf(a) || mn(a) ? (f("17"), h()) : nn(a).then(Q, E).then(function (q) {
                                q ? (f("28"), h()) : (Fh(h), k.D("f1", Fh), (0, uf[0])(a).then(S("params.eu")).then(function (r) { if (r || db(m.href, "yagdprcheck=1") || g.C("yaGdprCheck")) { g.D("gdpr_popup", sf); on(a, c); if (kb(a)) return pn(a, f, c); var t = Gh(a, e); if (t) return r = qn(a, f, t, c, p), r.then(C([a, c], rn)), r } r || f("8"); return K.resolve({ value: Tc, Od: !0 }) }).then(function (r) {
                                    g.Gb("gdpr_popup");
                                    if (r) { var t = r.value; r = r.Od; I(t, xc) && g.D("gdpr", t, r ? void 0 : 525600) } t = gc(Hh, ma); od(a, t, 20)(Ra(D(a, "gdr"), E)); k.D("f1", ma)
                                })["catch"](D(a, "gdp.a")))
                            })) : (f("14"), h())
                        }
                    }
                }
            } function rn(a, c) { if (te(a)) { var b = qe(a), d = Aa(a, c); d = d && d.params; b = A(u(sn, n), re(b)); d && b.length && d("gdpr", va(b)) } } function pn(a, c, b) {
                var d = ue(a, b); return new K(function (e) {
                    var f; if (d) {
                        var g = d.$, h = w(u("4", c), u(null, e)), k = T(a, h, 2E3, "gdp.f.t"); d.Vf((f = {}, f.type = "isYandex", f)).then(function (l) {
                            l.isYandex ? (c("5"), g.F(Ih, function (m) { e({ value: Jh(m[1].type) }) })) :
                            (c("6"), e(null))
                        })["catch"](h).then(C([a, k], la))
                    } else e({ value: sf, Od: !0 })
                })
            } function on(a, c) { var b = ue(a, c); b && b.$.F(["isYandex"], function () { var d; return d = { type: "isYandex" }, d.isYandex = te(a), d }); return b } function tn(a, c, b) { a = b || Eh(a); return I(a, c) ? a : "en" } function Jh(a) { if (I(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Tc; a = a.replace("GDPR-ok-view-detailed-", ""); return I(a, xc) ? a : Tc } function Kh(a, c, b) {
                var d = n(a, "AppMetricaInitializer"), e = n(d, "init"); if (e) try { H(e, d)(Ab(a, c)) } catch (f) { } else Lh =
                    T(a, C([a, c, 2 * b], Kh), b, "ai.d"); return function () { return la(a, Lh) }
            } function Mh(a, c, b, d) { var e, f, g, h = b.Yh, k = b.Th; b = b.isTrusted; a = vf(a, k); k = k.readOnly; d = (e = {}, e.fi = wf((f = {}, f.a = h ? 1 : 0, f.b = a, f.c = d || 0, f.d = k ? 1 : null, f)).Ha(), e); ha(b) || (d.ite = Bb(b)); c.params((g = {}, g.__ym = d, g)) } function Nh(a) {
                var c = n(a, "target"); if (c) {
                    var b = n(c, "value"); if ((b = $a(b)) && !(100 <= Ua(b))) {
                        var d = Vb(b), e = 0 < jb(b, "@"), f = "tel" === n(c, "type") || !e && Ua(d); if (e || f) {
                            if (f) {
                                if (un(b)) return; var g = b[0], h = d[0]; if (g !== h && "+" !== g) return; var k = b[1];
                                if ("+" === g && k !== h) return; b = b[Ua(b) - 1]; g = d[Ua(d) - 1]; if (b !== g) return; b = d
                            } d = e ? 5 : 11; g = e ? 100 : 16; if (!(Ua(b) < d || Ua(b) > g)) return a = n(a, "isTrusted"), { Th: c, Yh: e, Gj: f, Uh: b, isTrusted: a }
                        }
                    }
                }
            } function Oh(a, c, b, d, e) {
                if (!pd(a)) return E; var f = [], g = ja(a); Pb(a)(Ra(E, function () {
                    var h = lb(c, a.document.body); e && (h = ia(e, h)); x(function (l) { f.push(g.F(l, b, d)) }, h); if (Ga("MutationObserver", a.MutationObserver)) {
                        var k = c.toUpperCase(); h = new a.MutationObserver(D(a, "de.m", function (l) {
                            x(function (m) {
                                var p = m.addedNodes; m = m.removedNodes;
                                p && p.length && x(function (q) { qd(a, q, function (r) { r.nodeName !== k || e && !e(r) || f.push(g.F(r, b, d)) }, void 0, a.NodeFilter.SHOW_ELEMENT, !0) }, p); m && m.length && x(function (q) { qd(a, q, function (r) { r.nodeName !== k || e && !e(r) || g.xb(r, b, d) }, void 0, a.NodeFilter.SHOW_ELEMENT, !0) }, m)
                            }, l)
                        })); h.observe(a.document.body, { childList: !0, subtree: !0 }); f.push(H(h.disconnect, h))
                    }
                })); return C([ma, f], x)
            } function vn(a) { var c = n(a, "speechSynthesis.getVoices"); if (c) return a = H(c, a.speechSynthesis), yc(function (b) { return A(u(b, n), wn) }, a()) } function xn(a,
                c, b) { return G("x", A(w(Q, Ha("concat", "" + a), u(b, n)), c)) } function yn(a, c) {
                    var b = c.Ig; if (!zn(a, b)) return ""; var d = []; a: { var e = An(a, b); try { var f = C(e, w)()(); break a } catch (F) { if ("ccf" === F.message) { f = null; break a } Va(F) } f = void 0 } if (Wa(f)) var g = ""; else try { g = f.toDataURL() } catch (F) { g = "" } (f = g) && d.push(f); var h = b.getContextAttributes(); try { var k = pa(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : [] } catch (F) { k = [] } k = G(";", k); f = xf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b); e = xf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE),
                        b); g = b.getParameter(b.ALPHA_BITS); h = h && h.antialias ? "yes" : "no"; var l = b.getParameter(b.BLUE_BITS), m = b.getParameter(b.DEPTH_BITS), p = b.getParameter(b.GREEN_BITS), q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic"); if (q) { var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT); 0 === r && (r = 2) } r = {
                            wj: k, "webgl aliased line width range": f, "webgl aliased point size range": e, "webgl alpha bits": g, "webgl antialiasing": h,
                            "webgl blue bits": l, "webgl depth bits": m, "webgl green bits": p, "webgl max anisotropy": q ? r : null, "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS), "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE), "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS), "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE), "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS), "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                            "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS), "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS), "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS), "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS), "webgl max viewport dims": xf(b.getParameter(b.MAX_VIEWPORT_DIMS), b), "webgl red bits": b.getParameter(b.RED_BITS), "webgl renderer": b.getParameter(b.RENDERER), "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                            "webgl stencil bits": b.getParameter(b.STENCIL_BITS), "webgl vendor": b.getParameter(b.VENDOR), "webgl version": b.getParameter(b.VERSION)
                        }; yf(d, r, ": "); a: { try { var t = b.getExtension("WEBGL_debug_renderer_info"); if (t) { var y = { "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL), "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL) }; break a } } catch (F) { } y = {} } yf(d, y); if (!b.getShaderPrecisionFormat) return G("~", d); yf(d, Bn(b)); return G("~", d)
                } function yf(a, c, b) {
                    void 0 === b && (b = ":"); x(function (d) {
                        return a.push("" +
                            d[0] + b + d[1])
                    }, Oa(c))
                } function Cn(a, c, b, d) { c = d.C("cc"); d = C(["cc", ""], d.D); if (c) { var e = c.split("&"); c = e[0]; if ((e = (e = e[1]) && Fa(e)) && 1440 < ka(a)(sb) - e) return d(); b.D("cc", c) } else Ba(0)(c) || d() } function Dn(a, c, b, d) {
                    return sa(c, function (e) {
                        if (!zf(e) && !rd(a)) if (e = d.C("zzlc"), W(e) || Wa(e) || "na" === e) {
                            var f = eb(a); if (f && (e = hc(a))) {
                                var g = f("iframe"); z(g.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" }); f = Af(a, 68); var h = Bf(a, 79); g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + Ph("L21ldHJpa2EvenpsYy5odG1s");
                                e.appendChild(g); var k = 0, l = ja(a).F(a, ["message"], D(a, "zz.m", function (m) { (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (zc(g), m = m.substr(8), d.D("zzlc", m), b.D("zzlc", m), l(), la(a, k)) })); k = T(a, w(l, u(g, zc)), 3E3)
                            }
                        } else b.D("zzlc", e)
                    })
                } function En(a, c, b) {
                    var d, e; c = tb(u(a, n), Fn); c = W(c) ? null : n(a, c); if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                        var f = new c((d = {}, d.iceServers = [], d)); a = n(f, "createDataChannel"); P(a) && (H(a, f, "y.metrika")(), a = n(f, "createOffer"), P(a) && !a.length && (a =
                            H(a, f)(), d = n(a, "then"), P(d) && H(d, a, function (g) { var h = n(f, "setLocalDescription"); P(h) && H(h, f, g, E, E)() })(), z(f, (e = {}, e.onicecandidate = function () { var g, h = n(f, "close"); if (P(h)) { h = H(h, f); try { var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/) } catch (l) { f.onicecandidate = E; "closed" !== f.iceConnectionState && h(); return } k && 0 < k.length && (g = ic(k[1]), b.D("pp", g)); f.onicecandidate = E; h() } }, e))))
                    }
                } function Gn(a, c, b) {
                    var d, e = sd(a, c); if (e) {
                        e.$.F(["gpu-get"], function () {
                            var h; return h = {}, h.type =
                                "gpu-get", h.pu = b.C("pu"), h
                        }); var f = n(a, "opener"); if (f) { var g = T(a, C([a, c, b], Qh), 200, "pu.m"); e.pe(f, (d = {}, d.type = "gpu-get", d), function (h, k) { var l = n(k, "pu"); l && (la(a, g), b.D("pu", l)) }) } else Qh(a, c, b)
                    }
                } function Qh(a, c, b) { var d = n(a, "location.host"); a = td(a, c); b.D("pu", "" + ic(d) + a) } function Rh(a, c, b) {
                    c = Sc(a, void 0, c); c = Sh(a, c.C("phc_settings") || ""); var d = n(c, "clientId"), e = n(c, "orderId"), f = n(c, "service_id"), g = n(c, "phones") || []; return d && e && g && f ? Hn(a, b.oc, { hg: In })(g).then(function (h) {
                        return Jn(b, {
                            Db: d, Qb: e,
                            Yf: f
                        }, h.ma, g, h.Ba)
                    })["catch"](E) : K.resolve()
                } function In(a, c, b) { a = Kn(b.Tb); if ("href" === b.le) { var d = b.sb; c = d.href; b = c.replace(a, b.bb); if (c !== b) return d.href = b, !0 } else if ((a = null === (d = b.sb.textContent) || void 0 === d ? void 0 : d.replace(a, b.bb)) && a !== b.sb.textContent) return b.sb.textContent = a, !0; return !1 } function Jn(a, c, b, d, e) {
                    var f; c.Db && c.Qb && (c.Db === a.Db && c.Qb === a.Qb || z(a, c, { ma: {}, gb: !0 }), 0 < e && ta(a.Ba, [e]), x(function (g) {
                        var h, k, l = g[0]; g = g[1]; var m = +(a.ma[l] && a.ma[l][g] ? a.ma[l][g] : 0); z(a.ma, (h = {}, h[l] =
                            (k = {}, k[g] = m, k), h))
                    }, d), x(function (g) { var h, k, l = g[0]; g = g[1]; var m = 1 + (a.ma[l] ? a.ma[l][g] : 0); z(a.ma, (h = {}, h[l] = (k = {}, k[g] = m, k), h)) }, b), a.qf && (a.gb || b.length) && ((c = Aa(a.l, a.oc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Db, f.orderId = a.Qb, f.service_id = a.Yf, f.phones = a.ma, f.performance = a.Ba, f)), a.gb = !1))
                } function Ln(a) { a = eb(a); if (!a) return ""; a = a("video"); try { var c = Ha("canPlayType", a), b = yc(function (d) { return A(w(Q, Ha("concat", d + "; codecs=")), Mn) }, Th); return A(c, Th.concat(b)) } catch (d) { return "canPlayType" } }
            function Nn(a) { var c = n(a, "matchMedia"); if (c && Ga("matchMedia", c)) { var b = Ha("matchMedia", a); return N(function (d, e) { d[e] = b("(" + e + ")"); return d }, {}, On) } } function Bn(a) {
                return N(function (c, b) { var d = b[0], e = b[1]; c[d + " precision"] = n(e, "precision") || "n"; c[d + " precision rangeMin"] = n(e, "rangeMin") || "n"; c[d + " precision rangeMax"] = n(e, "rangeMax") || "n"; return c }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER,
                    a.MEDIUM_FLOAT)], ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int",
                    a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
            } function An(a, c) {
                return [function () {
                    var b = c.createBuffer(); b && c.getParameter &&
                        Ga("getParameter", c.getParameter) || Cf(); c.bindBuffer(c.ARRAY_BUFFER, b); var d = new a.Float32Array(Pn); c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW); b.$h = 3; b.mi = 3; d = c.createProgram(); var e = c.createShader(c.VERTEX_SHADER); d && e || Cf(); return { je: d, jj: e, ij: b }
                }, function (b) {
                    var d = b.je, e = b.jj; c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"); c.compileShader(e); c.attachShader(d,
                        e); (d = c.createShader(c.FRAGMENT_SHADER)) || Cf(); return z(b, { oh: d })
                }, function (b) { var d = b.je, e = b.oh; c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"); c.compileShader(e); c.attachShader(d, e); c.linkProgram(d); c.useProgram(d); return b }, function (b) {
                    var d = b.je; b = b.ij; d.hj = c.getAttribLocation(d, "attrVertex"); d.oi = c.getUniformLocation(d, "uniformOffset"); c.enableVertexAttribArray(d.Qj); c.vertexAttribPointer(d.hj, b.$h, c.FLOAT,
                        !1, 0, 0); c.uniform2f(d.oi, 1, 1); c.drawArrays(c.TRIANGLE_STRIP, 0, b.mi); return c.canvas
                }]
            } function zn(a, c) { if (!P(a.Float32Array)) return !1; var b = n(c, "canvas"); if (!b || !Ga("toDataUrl", b.toDataURL)) return !1; try { c.createBuffer() } catch (d) { return !1 } return !0 } function xf(a, c) { c.clearColor(0, 0, 0, 1); c.enable(c.DEPTH_TEST); c.depthFunc(c.LEQUAL); c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT); return "[" + n(a, "0") + ", " + n(a, "1") + "]" } function Qn(a, c) {
                if (n(c, "settings.ins")) {
                    var b = J(a); if (!b.C("scip")) {
                        var d = Pa(a), e = ka(a)(sb),
                        f = ve(d.C("sci")); if (!(f && 1440 >= e - f)) {
                            f = wa(a, "ci"); var g = ["sync.cook.int"], h = function (l) { l = b.C("scip", "") + l; b.D("scip", l) }, k = u("a", h); b.D("scip", "0"); return f({ ba: { ia: g, Pa: 3E3, Ab: !0 } }, ["https://an.yandex.ru/sync_cookie"]).then(function (l) { l = n(l.Tc, "CookieMatchUrls"); if (R(l) && Ua(l)) { h("1"); var m = wa(a, "c"); l = A(function (p, q) { return m({ ba: { ia: g, Pa: 3E3 } }, ["https://" + p])["catch"](w(u("b", h), u("" + q, h))) }, ia(fa, l)); return K.all(l) } k() }, k).then(function () {
                                var l = b.C("scip"); !l || db(l, "a") || db(l, "b") || (d.D("sci",
                                    e), h("2"))
                            }, E)
                        }
                    }
                }
            } function Uh(a) { return { N: function (c, b) { if (!c.K) return b(); var d = J(a).C("fid"); !Vh && d && (se(c, "fid", d), Vh = !0); return b() } } } function Rn(a, c) { var b = a.document; if (I(b.readyState, ["interactive", "complete"])) Ub(a, c); else { var d = ja(a), e = d.F, f = d.xb, g = function () { f(b, ["DOMContentLoaded"], g); f(a, ["load"], g); c() }; e(b, ["DOMContentLoaded"], g); e(a, ["load"], g) } } function Df(a) { return { N: function (c, b) { var d = c.K; if (d) { var e = J(a).C("adBlockEnabled"); e && d.D("adb", e) } b() } } } function Sn(a) {
                var c = D(a, "i.clch",
                    Tn); ja(a).F(a.document, ["click"], u(a, c), { passive: !1 }); return function (b) { var d = Ia.Ra, e = a.Ya[Ia.lc], f = !!e._informer; e._informer = z({ domain: "metrika-informer.com" }, b); f || Ac(a, { src: d + "//metrika-informer.com/metrika/informer.js" }) }
            } function Un(a, c) {
                var b = Pa(a); if ("" === b.C("cc")) {
                    var d = u("cc", b.D); d(0); var e = ka(a), f = J(a); f = w(S(Vn({ Tc: 1 }) + ".c"), ud(function (g) { d(g + "&" + e(sb)) }), u("cc", f.D)); wa(a, "6", c)({ ba: { Ab: !0, Je: !1 } }, ["https://mc.yandex.md/cc"]).then(f)["catch"](w(ud(function () {
                        var g = e(sb); b.D("cc", "&" +
                            g)
                    }), D(a, "cc")))
                }
            } function we(a, c) { if (!c) return !1; var b = U(a); return (new RegExp(c)).test("" + b.pathname + b.hash + b.search) } function Wn(a, c) { return sa(c, function (b) { var d = n(b, "settings.dr"); return { Wg: Xn(a, d), isEnabled: n(b, "settings.auto_goals") } }) } function Yn(a, c, b, d, e) { b = Ef(a.document.body, b); d = Ef(a.document.body, d); I(e.target, [b, d]) && Ff(a, c) } function Wh(a, c, b, d) { (b = Zn(a, d, b)) && Ff(a, c, b) } function Xh(a, c) { var b = Yh(a, c); return $n(a, b) } function Yh(a, c) { var b = Ef(a.document.body, c); return b ? ao(a, b) : "" } function Ff(a,
                c, b) { if (c = Aa(a, c)) a = vd(["dr", b || "" + Xa(a, 10, 99)]), c.params(vd(["__ym", a])) } function Ef(a, c) { var b = null; try { b = c ? fc(c, a) : b } catch (d) { } return b } function Zh(a) { a = Ca(Ph(a)); return A(function (c) { c = c.charCodeAt(0).toString(2); return $h("0", 8, c) }, a) } function ao(a, c) {
                    if (!c) return ""; var b = [], d = n(a, "document"); qd(a, c, function (e) { if (e.nodeType === d.TEXT_NODE) var f = e.textContent; else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value); (f = f && $a(f)) && b.push(f) }); return 0 === b.length ?
                        "" : G(" ", b)
                } function bo(a, c, b) { a = Qa(b); b = a[1]; "track" === a[0] && c({ version: "0", uc: b }) } function co(a, c, b) { if (b) { var d = b.version; (b = n(eo, d + "." + b.uc)) && (c && I(b, fo) || a("ym-" + b + "-" + d)) } } function go(a, c, b) {
                    if ("rt" === b) return "https://" + ai(a, c) + ".mc.yandex.ru/watch/3/1"; if ("mf" === b) {
                        b = U(a); b = xe(b.protocol + "//" + b.hostname + b.pathname); c = td(a, c); var d = ""; do d += Xa(a); while (d.length < c.length); d = d.slice(0, c.length); a = ""; for (var e = 0; e < c.length; e += 1)a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10; a = [d, a]; return "https://adstat.yandex.ru/track?service=metrika&id=" +
                            a[1] + "&mask=" + a[0] + "&ref=" + b
                    }
                } function ho(a, c, b) { var d, e = Gf(c).Sb; return wa(a, "pi", c)({ K: Ka((d = {}, d[e] = 1, d)) }, [b]) } function io(a, c, b) { return new K(function (d, e) { if (bi(a, ye, "isp")) { var f = E, g = function (h) { ("1" === h ? d : e)(); f(); ci(ye, "isp") }; f = ja(a).F(a, ["message"], C([b, g], D(a, "isp.stat.m", jo))); T(a, g, 1500) } else e() }) } function jo(a, c, b) { var d = n(b, "data"); if (fa(d)) { var e = d.split("*"); d = e[0]; var f = e[1]; e = e[2]; "sc.frame" === d && b.source ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e) } } function ko(a,
                    c) { var b = Pa(a), d = "wv2rf:" + M(c), e = c.jc, f = Hf(a), g = b.C(d), h = c.aj; return W(f) || Wa(g) ? Da(function (k, l) { sa(c, function (m) { var p = !!n(m, "settings.webvisor.forms"); p = !n(m, "settings.x3") && p; f = Hf(a) || n(m, "settings.eu"); b.D(d, Bb(p)); l({ jc: e, Nd: !!f, Ef: p, jg: h }) }) }) : If({ jc: e, Nd: f, Ef: !!Fa(g), jg: h }) } function lo() {
                        var a = N(function (c, b) { c[b[0]] = { hd: 0, Gg: 1 / b[1] }; return c }, {}, [["blur", .0034], ["change", .0155], ["click", .01095], ["deviceRotation", 2E-4], ["focus", .0061], ["mousemove", .5132], ["scroll", .4795], ["selection", .0109],
                        ["touchcancel", 2E-4], ["touchend", .0265], ["touchforcechange", .0233], ["touchmove", .1442], ["touchstart", .027], ["zoom", .0014]]); return { Cg: function (c) { if (c.length) return { type: "activity", data: N(function (b, d) { var e = a[d]; return Math.round(b + e.hd * e.Gg) }, 0, ca(a)) } }, ri: function (c) { c && (c = a[c.data.type || c.event]) && (c.hd += 1) } }
                    } function mo(a) {
                        return {
                            qh: function () { var c = a.document.querySelector("base[href]"); return c ? c.getAttribute("href") : null }, sh: function () {
                                if (a.document.doctype) {
                                    var c = z({
                                        name: "html", publicId: "",
                                        systemId: ""
                                    }, a.document.doctype), b = c.publicId, d = c.systemId; return "<!DOCTYPE " + G("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                                } return null
                            }
                        }
                    } function no(a, c, b) {
                        var d = wd(a), e = ja(a), f = kb(a), g = c.Bd(), h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"), k = u(d, Q); if (h) { if (!g) return T(a, H(d.T, d, "i", { xa: !1 }), 10), { Ad: k, Rf: E, stop: E }; Va(Sa()) } d.F(["sr"], function (r) { var t, y = di(a, r.source); y && Jf(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.va().Z(y), t)) }); d.F(["sd"], function (r) {
                            var t =
                                r.data; r = r.source; (a === r || di(a, r)) && d.T("sdr", { data: t.data, frameId: t.frameId })
                        }); if (f && !g) { var l = !1, m = 0, p = function () { var r; Jf(a, a.parent, (r = {}, r.type = "sr", r)); m = T(a, p, 100, "if.i") }; p(); var q = function (r) { d.ga(["\u043d"], q); la(a, m); var t = Uc(a, r.origin).host; l || r.source !== a.parent || !r.data.frameId || "about:blank" !== U(a).host && !I(t, b) || (l = !0, d.T("i", { frameId: r.data.frameId, xa: !0 })) }; d.F(["\u043d"], q); T(a, function () { d.ga(["\u043d"], q); la(a, m); l || (l = !0, d.T("i", { xa: !1 })) }, 2E3, "if.r") } e = e.F(a, ["message"], function (r) {
                            var t =
                                zb(a, r.data); t && t.type && I(t.type, oo) && d.T(t.type, { data: t, source: r.source, origin: r.origin })
                        }); return { Ad: k, Rf: function (r) { var t; return Jf(a, a.parent, (t = {}, t.frameId = c.Bd(), t.data = r, t.type = "sd", t)) }, stop: e }
                    } function di(a, c) { try { return tb(w(S("contentWindow"), Ba(c)), Ca(a.document.querySelectorAll("iframe"))) } catch (b) { return null } } function Jf(a, c, b) { c || Va(Sa()); a = Ab(a, b); c.postMessage(a, "*") } function ei() { return jc() + jc() + "-" + jc() + "-" + jc() + "-" + jc() + "-" + jc() + jc() + jc() } function jc() {
                        return Math.floor(65536 *
                            (1 + Math.random())).toString(16).substring(1)
                    } function po(a, c) { if (fa(c)) return c; var b = a.textContent; if (fa(b)) return b; b = a.data; if (fa(b)) return b; b = a.nodeValue; return fa(b) ? b : "" } function qo(a, c, b, d, e) {
                        void 0 === d && (d = {}); void 0 === e && (e = Ma(c)); var f = z(N(function (h, k) { h[k.name] = k.value; return h }, {}, Ca(c.attributes)), d); z(f, ro(c, e, f)); var g = (d = Cb(function (h, k) { var l = k[0], m = ze(a, c, l, k[1], b, e), p = m.value; ha(p) ? delete f[l] : f[l] = p; return h || m.pb }, !1, Oa(f))) && Qc(c); g && (f.width = g.width, f.height = g.height); return {
                            pb: d,
                            Dg: f
                        }
                    } function ro(a, c, b) { var d = {}; Kf(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = ""); return d } function ze(a, c, b, d, e, f) {
                        void 0 === f && (f = Ma(c)); var g = { pb: !1, value: d }; if (Kf(c)) "value" === b ? !ha(d) && "" !== d && (b = e.Nd, f = e.Ef, e = xd(a, c), f ? (b = Vc(a, c, b), a = b.qb, c = b.hb, b = b.Va, g.pb = !c && (e || a)) : (g.pb = e, b = !(c && kc("ym-record-keys", c))), b || e) && (d = "" + d, g.value = 0 < d.length ? fi("\u2022", d.length) : "") : "checked" === b && I((c.getAttribute("type") || "").toLowerCase(), so) ? g.value = c.checked ? "checked" : null : to.test(b) && Lf(a,
                            c) && (g.value = null); else if ("IMG" === f && "src" === b) (e = xd(a, c)) ? (g.pb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src; else if ("A" === f && "href" === b) g.value = d ? "#" : ""; else if (I(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === jb(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && I(b, ["src", "type"])) g.value = null; return g
                    } function Mf(a, c, b, d) {
                        void 0 === d &&
                        (d = "wv2"); return { H: function (e, f) { return D(a, d + "." + b + "." + f, e, void 0, c) } }
                    } function uo(a, c, b, d, e) {
                        function f() { l && l.stop() } if (!c.zb) return K.resolve(E); var g = wa(a, "4", c), h = { K: Ka() }, k = new vo(a, b, function (m, p, q) {
                            if (!g) return K.resolve(); var r = "wv-data=" + nd(m, !0), t = D(a, "m.n.m.s"); p = {}; p["wv-part"] = "" + q; q = m.length; for (var y = 0, F = 255, O = 255, L, na, xa; q;) {
                                L = 21 < q ? 21 : q; q -= L; do na = "string" === typeof m ? m.charCodeAt(y) : m[y], y += 1, 255 < na && (xa = na >> 8, na &= 255, na ^= xa), F += na, O += F; while (--L); F = (F & 255) + (F >> 8); O = (O & 255) + (O >>
                                    8)
                            } m = (F & 255) + (F >> 8) << 8 | (O & 255) + (O >> 8); return g(z({}, h, { ba: { da: r }, J: (p["wv-check"] = "" + (65535 === m ? 0 : m), p["wv-type"] = b.type, p) }), c)["catch"](t)
                        }), l = wo(a, k, d, e); return sa(c, function (m) { m && J(a).D("isEU", n(m, "settings.eu")); J(a).C("oo") || l && gi(a, m) && l.start(); return f })
                    } function wo(a, c, b, d) {
                        var e = a.document, f = [], g = ja(a), h = ":submit" + Math.random(), k = [], l = H(c.flush, c), m = qa(function (r, t) { D(a, "hfv." + r, function () { try { var y = t.type } catch (F) { return } y = I(y, d); c.push(t, { type: r }); y && l() })() }), p = D(a, "sfv", function () {
                            var r =
                                b(a), t = xo(a); x(function (y) { f.push(g.F(y.target, [y.event], m(y.type))) }, r); x(function (y) { f.push(g.F(y.target, [y.event], D(a, "hff." + y.type + "." + y.event, function (F) { x(Da({ l: a, qa: F, flush: l }), y.O) }))) }, t); k = hi(a, "form", e); e.attachEvent && (r = hi(a, "form *", e), x(function (y) { f.push(g.F(y, ["submit"], m("form"))) }, k), x(function (y) { Nf(y) && f.push(g.F(y, ["change"], m("formInput"))) }, r)); x(function (y) {
                                    var F = y.submit; if (P(F) || "object" === typeof F && yo.test("" + F)) y[h] = F, y.submit = D(a, "fv", function () {
                                        var O = { target: y, type: "submit" };
                                        m("document")(O); return y[h]()
                                    })
                                }, k)
                        }), q = D(a, "ufv", function () { x(ma, f); x(function (r) { r && (r.submit = r[h]) }, k); c.flush() }); return { start: p, stop: q }
                    } function zo(a, c) { var b = ia(function (e) { return 0 < e.O.length }, c), d = ii({ target: a.document, type: "document" }); return A(w(Q, d, Ao(a)), b) } function ji(a, c) { var b = a.l, d = [], e = c.form; if (!c[Ya] && e) { var f = e.elements; e = e.length; for (var g = 0; g < e; g += 1) { var h = f[g]; Ae(h) && !h[Ya] && ta(d, Bc(b, h)) } } else ta(d, Bc(b, c)); return d } function Of(a) {
                        if (yd) {
                            yd = !1; var c = Db(a.l), b = []; mb(a.l, b,
                                15) ? a = [] : (V(b, c), a = b); return a
                        }
                    } function ki(a) { if (!yd) { yd = !0; a = Db(a.l); var c = []; Wb(c, 14); V(c, a); return c } } function Bo(a, c, b) { var d = c[Ya]; if (d) { a: { var e = Db(a), f = c[Ya]; if (0 < f) { var g = []; c = Pf(a, c); var h = Cc[f], k = c[0] + "x" + c[1], l = c[2] + "x" + c[3]; if (k !== h.Af) { h.Af = k; if (mb(a, g, 9)) { a = []; break a } V(g, e); V(g, f); V(g, c[0]); V(g, c[1]) } if (l !== h.size) { h.size = l; if (mb(a, g, 10)) { a = []; break a } V(g, e); V(g, f); V(g, c[2]); V(g, c[3]) } if (g.length) { a = g; break a } } a = [] } ta(b, a) } return d } function Vc(a, c, b) {
                        void 0 === b && (b = !1); if (!c) return {
                            Va: !1,
                            hb: !1, qb: !1
                        }; var d = c.getAttribute("type") || c.type; if ("button" === d) return { Va: !1, hb: !1, qb: !1 }; var e = ia(li, [c.className, c.id, c.name]), f = c && kc("ym-record-keys", c); d = d && I(d, mi) || Za(fb(Co), e); var g; (g = d) || (g = c.placeholder, g = Za(fb(Do), e) || li(g) && Eo.test(g || "")); e = g; return { Va: !f && (Qf(a, c) || e && b || e && !d && !b), hb: f, qb: e }
                    } function Qf(a, c) { return Lf(a, c) || zd(a, c) ? !0 : xd(a, c) } function li(a) { return !!(a && 2 < a.length) } function Kf(a) {
                        try {
                            var c = Ma(a); if (I(c, Rf)) {
                                if ("INPUT" === c) {
                                    var b = a.type; return !b || I(b.toLocaleLowerCase(),
                                        Fo)
                                } return !0
                            }
                        } catch (d) { } return !1
                    } function ni(a, c) { return c && kc("(ym-disable-submit|-metrika-noform)", c) } function Go(a, c) { return G("", A(function (b) { return a.isNaN(b) ? Ho.test(b) ? (b = b.toUpperCase() === b ? Io : Jo, String.fromCharCode(Xa(a, b[0], b[1]))) : b : "" + Xa(a, 0, 9) }, c.split(""))) } function xd(a, c) {
                        if (ha(c)) return !1; if (Sf(c)) { var b = c.parentNode; return (ha(b) ? 0 : 11 === b.nodeType) ? !1 : xd(a, c.parentNode) } b = oi(a); if (!b) return !1; var d = b.call(c, ".ym-hide-content,.ym-hide-content *"); return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ?
                            !1 : d
                    } function gi(a, c) { var b = lc(a), d = b.C("visorc"); I(d, ["w", "b"]) || (d = ""); pi(a) && qi(a, Be, "visorc") && !Ko.test(nb(a) || "") || (d = "b"); var e = n(c, "settings.webvisor.recp"); if (!a.isFinite(e) || 0 > e || 1 < e) d = "w"; d || (d = J(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b"); b.D("visorc", d, 30); return "w" === d } function Lo(a, c) { return { N: function (b, d) { b.K.Xb("we", Qb(c.zb)); ri(a, c, b, "rn"); d() } } } function si(a, c, b) { if (ti.isEnabled(a)) return new ti(a, c); if (ui.isEnabled(a)) return new ui(a, b) } function vi(a, c) {
                        var b = c[1][3], d = 0, e = new a.Uint8Array(c[0]);
                        return gc([b], function (f, g) { if (!f) return e; f[0](a, f[2], e, d); d += f[1]; g.push(f[3]); return e })
                    } function wi(a, c, b) {
                        a = c(b); c = [E, 0, 0]; var d = [0, c, c, void 0]; return gc(a, function (e, f) {
                            var g = e[0], h = e[1], k = e[2]; if (0 === g) return k(d, h), d; if (void 0 === h || null === h) return d; var l = g >> 3; if (g & 1) Dc(d, Y(l)), h = k(h), l & 2 && Dc(d, Y(h[1])), Dc(d, h); else if (g & 4) for (g = h.length - 1; 0 <= g;) { var m = k(h[g]); m.push([0, 0, Tf]); m.push([0, Y(l), Dc]); m.unshift([0, 0, Uf]); ta(f, m); --g } else if (g & 2) {
                                k = e[2]; var p = e[3], q = e[4], r = e[5], t = ca(h); for (g = t.length -
                                    1; 0 <= g;)m = t[g], m = [[0, 0, Uf], [q, h[m], r], [k, m, p], [0, 0, Tf], [0, Y(l), Dc]], ta(f, m), --g
                            } else m = k(h), m.push([0, 0, Tf]), m.push([0, Y(l), Dc]), m.unshift([0, 0, Uf]), ta(f, m); return d
                        })
                    } function Uf(a) { var c = a[1], b = a[0], d = a[2]; a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [E, 0, 0], a[2] = a[1]); Dc(a, Y(b)); b && (a[2][3] = c[3], a[2] = d, a[0] += b) } function Tf(a) { a[3] = [a[0], a[1], a[2], a[3]]; a[1] = [E, 0, 0]; a[2] = a[1]; a[0] = 0 } function Dc(a, c) { a[0] += c[1]; a[2][3] = c; a[2] = c } function xi(a) {
                        return [[1857, a.partsTotal,
                            Y], [1793, a.activity, Y], [1744, a.textChangeMutation, Mo], [1680, a.removedNodesMutation, No], [1616, a.addedNodesMutation, Oo], [1552, a.attributesChangeMutation, Po], [1488, a.publishersHeader, Qo], [1424, a.articleInfo, Ro], [1360, a.focusEvent, So], [1296, a.fatalErrorEvent, To], [1232, a.deviceRotationEvent, Uo], [1168, a.keystrokesEvent, Vo], [1104, a.resizeEvent, Wo], [1040, a.zoomEvent, Xo], [976, a.touchEvent, Yo], [912, a.changeEvent, Zo], [848, a.selectionEvent, $o], [784, a.scrollEvent, ap], [720, a.mouseEvent, bp], [656, a.Nj, cp], [592, a.page,
                            dp], [513, a.end, Ec], [449, a.partNum, Y], [401, a.chunk, ep], [257, a.frameId, ua], [193, a.event, Y], [129, a.type, Y], [65, a.stamp, Y]]
                    } function fp(a) { return [[84, a.Fi, xi]] } function gp(a) { return [[129, a.position, ua], [81, a.name, da]] } function hp(a) { return [[81, a.name, da]] } function ip(a) { return [[81, a.name, da]] } function Ro(a) { return [[593, a.updateDate, da], [532, a.rubric, gp], [449, a.chars, ua], [401, a.publicationDate, da], [340, a.topics, hp], [276, a.authors, ip], [209, a.pageTitle, da], [145, a.pageUrlCanonical, da], [65, a.id, Y]] } function jp(a) {
                        return [[513,
                            a.chars, ua], [489, a.maxScrolled, Ad], [385, a.involvedTime, ua], [321, a.height, ua], [257, a.width, ua], [193, a.y, ua], [129, a.x, ua], [65, a.id, Y]]
                    } function Qo(a) { return [[129, a.involvedTime, ua], [84, a.articleMeta, jp]] } function So(a) { return [[65, a.target, ua]] } function To(a) { return [[209, a.stack, da], [145, a.ah, da], [81, a.code, da]] } function Uo(a) { return [[193, a.orientation, ua], [129, a.height, Y], [65, a.width, Y]] } function Vo(a) { return [[84, a.keystrokes, kp]] } function kp(a) {
                        return [[273, a.modifier, da], [193, a.isMeta, Ec], [145, a.key,
                            da], [65, a.id, Y]]
                    } function Wo(a) { return [[257, a.pageHeight, Y], [193, a.pageWidth, Y], [129, a.height, Y], [65, a.width, Y]] } function Xo(a) { return [[193, a.y, ua], [129, a.x, ua], [105, a.level, Ad]] } function Yo(a) { return [[129, a.target, ua], [84, a.touches, lp]] } function lp(a) { return [[297, a.force, Ad], [233, a.y, Ad], [169, a.x, Ad], [81, a.id, da]] } function Zo(a) { return [[257, a.target, ua], [193, a.hidden, Ec], [129, a.checked, Ec], [81, a.value, da]] } function $o(a) { return [[257, a.endNode, Y], [193, a.startNode, Y], [129, a.end, ua], [65, a.start, ua]] }
            function ap(a) { return [[257, a.target, ua], [193, a.page, Ec], [129, a.y, ua], [65, a.x, ua]] } function bp(a) { return [[193, a.target, ua], [129, a.y, Y], [65, a.x, Y]] } function cp(a) { return [[148, a.changes, mp], [65, a.target, ua]] } function mp(a) { return [[193, a.index, Y], [145, a.op, da], [81, a.style, da]] } function Mo(a) { return [[209, a.value, da], [129, a.index, Y], [65, a.target, Y]] } function No(a) { return [[129, a.index, Y], [69, a.nodes, ua]] } function Oo(a) { return [[129, a.index, Y], [84, a.nodes, yi]] } function Po(a) {
                return [[210, a.attributes, 81, da,
                    145, da], [129, a.index, Y], [65, a.target, Y]]
            } function dp(a) { return [[852, a.content, yi], [785, a.tabId, da], [705, a.recordStamp, np], [656, a.location, op], [592, a.viewport, zi], [528, a.screen, zi], [449, a.hasBase, Ec], [401, a.base, da], [337, a.referrer, da], [273, a.ua, da], [209, a.address, da], [145, a.title, da], [81, a.doctype, da]] } function op(a) { return [[209, a.path, da], [145, a.protocol, da], [81, a.host, da]] } function zi(a) { return [[129, a.height, ua], [65, a.width, ua]] } function yi(a) {
                return [[513, a.hidden, Ec], [449, a.prev, Y], [385, a.next,
                    Y], [337, a.content, da], [257, a.parent, Y], [210, a.attributes, 81, da, 145, da], [145, a.name, da], [65, a.id, Y]]
            } function da(a) { var c = pp({}, a, [], 0); return c ? [qp, c, a] : [Ai, 0, 0] } function ep(a) { return [rp, a.length, a] } function Ec(a) { return [Ai, 1, a ? 1 : 0] } function np(a) { a = Bi(a); var c = a[0], b = a[1], d = (b >>> 28 | c << 4) >>> 0; c >>>= 24; return [Ci, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a] } function Ad(a) { return [sp, 4, a] } function ua(a) { return 0 > a ? [Ci, 10, Bi(a)] : Y(a) } function Y(a) {
                return [tp,
                    128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
            } function tp(a, c, b, d) { for (a = c; 127 < a;)b[d++] = a & 127 | 128, a >>>= 7; b[d] = a } function Ai(a, c, b, d) { b[d] = c } function rp(a, c, b, d) { for (a = 0; a < c.length; ++a)b[d + a] = c[a] } function Di(a) {
                return function (c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c; else {
                        if (2048 > c) { if (a) { g += 2; continue } d[e++] = c >> 6 | 192 } else {
                            if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                if (a) { g += 4; continue } c = 65536 + ((c & 1023) << 10) + (f & 1023); ++h; d[e++] = c >> 18 |
                                    240; d[e++] = c >> 12 & 63 | 128
                            } else { if (a) { g += 3; continue } d[e++] = c >> 12 | 224 } d[e++] = c >> 6 & 63 | 128
                        } d[e++] = c & 63 | 128
                    } return a ? g : e
                }
            } function sp(a, c, b, d) { return up(a)(a, c, b, d) } function vp(a, c, b, d) {
                var e = 0 > c ? 1 : 0; e && (c = -c); if (0 === c) Bd(0 < 1 / c ? 0 : 2147483648, b, d); else if (a.isNaN(c)) Bd(2143289344, b, d); else if (3.4028234663852886E38 < c) Bd((e << 31 | 2139095040) >>> 0, b, d); else if (1.1754943508222875E-38 > c) Bd((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d); else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2); Bd((e << 31 | f + 127 << 23 | Math.round(c *
                        a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            } function Bd(a, c, b) { c[b] = a & 255; c[b + 1] = a >>> 8 & 255; c[b + 2] = a >>> 16 & 255; c[b + 3] = a >>> 24 } function Ci(a, c, b, d) { a = c[0]; for (c = c[1]; a;)b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7; for (; 127 < c;)b[d++] = c & 127 | 128, c >>>= 7; b[d++] = c } function Bi(a) { if (!a) return [0, 0]; var c = 0 > a; c && (a = -a); var b = a >>> 0; a = (a - b) / 4294967296 >>> 0; c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0))); return [a, b] } function ri(a, c, b, d) {
                var e, f = b.J; f.wmode = "0"; f["wv-hit"] = f["wv-hit"] || "" + Fc(a);
                f["page-url"] = f["page-url"] || U(a).href; d && (f[d] = f[d] || "" + Xa(a)); a = { ha: { Ca: "webvisor/" + c.id }, ba: z(b.ba || {}, { Za: (e = {}, e["Content-Type"] = "text/plain", e), bd: "POST" }), J: f }; z(b, a)
            } function wp(a, c) {
                return sa(c, function (b) {
                    var d = J(a); M(c); if (!d.C("dSync", !1)) return d.D("dSync", !0), Ei(a, b, {
                        cb: c, Sb: "s", Sd: "ds", Qi: function (e, f, g) {
                            var h = e.Tc; e = e.host; if (n(h, "settings")) return Va(Sa("ds.e")); f = f(Z) - g; g = e[1]; var k, l; h = Ka((k = {}, k.di = h, k.dit = f, k.dip = g, k)); k = (l = {}, l["page-url"] = U(a).href, l); return wa(a, "S", Fi)({
                                K: h,
                                J: k
                            }, Fi)["catch"](D(a, "ds.rs"))
                        }
                    })
                })
            } function Ei(a, c, b) { var d, e = b.cb, f = ka(a), g = xp(a, c.userData, e), h = yp(a), k = w(Gi, C([zp, Ap], Cd))(a), l = n(c, "settings.sbp"); l && (b.data = z({}, l, (d = {}, d.c = e.id, d))); return h.length ? Bp(a, f, g, c, k, b).then(function () { return Cp(a, h, g, f, k, b) }, E) : K.resolve() } function yp(a) { var c = Dd(a); a = w(Vf, wc(["iPhone", "iPad"]))(a); return c ? Dp : a ? Ep : [] } function Cp(a, c, b, d, e, f) {
                e = f.Qi; var g = void 0 === e ? E : e, h = f.Sd, k = d(Z); return Fp(a, c, f)(Ra(function (l) {
                    x(function (m) { m && Ce(a, h + ".s", m) }, l); l = d(sb);
                    b.D(h, l)
                }, function (l) { b.D(h, d(sb)); g(l, d, k) }))
            } function Bp(a, c, b, d, e, f) { var g = f.Sd, h = f.cb; return new K(function (k, l) { var m = b.C(g, 0); m = parseInt("" + m, 10); return c(sb) - m <= e.cg ? l() : Gp(a) ? k(void 0) : zf(d) ? l() : k(Hp(a, h)) }) } function Fp(a, c, b) {
                var d = b.Sb, e = b.data, f = wa(a, d, b.cb); a = z({}, Hi); e && z(a.J, e); return Ip(A(function (g) {
                    return Jp(f(z({ ba: { Je: !1, me: !0 } }, Hi), A(function (h) {
                        var k = h[1], l = h[2]; h = G("", A(function (m) { return String.fromCharCode(m.charCodeAt(0) + 10) }, h[0].split(""))); return "http" + (l ? "s" : "") + "://" +
                            h + ":" + k + "/" + Kp[d]
                    }, g)).then(function (h) { return z({}, h, { host: g[h.lg] }) }))
                }, c))
            } function xp(a, c, b) { var d = c || {}, e = wa(a, "u", b), f = Pa(a); return { C: function (g, h) { return W(d[g]) ? f.C(g, h) : d[g] }, D: function (g, h) { var k, l = "" + h; d[g] = l; f.D(g, l); return e({ J: (k = {}, k.key = g, k.value = l, k) }, [Ia.Ra + "//" + mc + "/user_storage_set"], {})["catch"](D(a, "u.d.s.s")) } } } function Lp(a) { return { N: function (c, b) { J(a).C("oo") || b() } } } function Mp(a, c) {
                try { var b = c[0]; var d = b[1] } catch (e) { return function () { return K.resolve() } } return function (e) {
                    var f,
                    g = (f = {}, f["browser-info"] = Np, f["page-url"] = a.location && "" + a.location.href, f); return d && (e = Ab(a, e)) ? d(Op, { $a: g, ia: [], da: "site-info=" + xe(e) })["catch"](E) : K.resolve()
                }
            } function Pp(a, c) { if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) { var b = M(c); delete J(a).C("counters", {})[b]; Va(Sa("oo.e")) } } function Qp(a) { if (Ed(a)) return null; var c = Rp(a), b = c.Df; W(b) && (c.Df = null, Sp(a).then(function (d) { c.Df = d })); return b ? 1 : null } function Tp(a, c, b) {
                b = b.J; if ((void 0 === b ? {} : b).nohit) return null; a = Fd(a); if (!a) return null;
                var d = b = null; n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Up); if (!b) { var e = n(a, "timing"); e && (b = Vp, d = e) } if (!b) return null; a = Wp(a, d, b); c = M(c); c = Xp(c); return (c = Yp(c, a)) && G(",", c)
            } function Yp(a, c) { var b = a.length ? A(function (d, e) { var f = c[e]; return f === d ? null : f }, a) : c; a.length = 0; x(w(Q, Ha("push", a)), c); return ia(Ba(null), b).length === a.length ? null : b } function Wp(a, c, b) {
                return A(function (d) {
                    var e = d[0], f = d[1]; if (P(e)) return e(a, c) || null; if (1 === d.length) return c[e] ? Math.round(c[e]) :
                        null; var g; !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Ii[d[0]] || Ii[g])); if (!g) return null; d = Math.round(c[e]) - Math.round(c[f]); return 0 > d || 36E5 < d ? null : d
                }, b)
            } function De(a, c) { try { var b = c.localStorage.getItem(a); return b && nd(ne(b)) } catch (d) { } return null } function ne(a) { for (var c = [], b = 0; b < a.length; b++) { var d = a.charCodeAt(b); 128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128)) } return c } function nd(a, c) {
                void 0 === c && (c = !1); for (var b = a.length,
                    d = b - b % 3, e = [], f = 0; f < d; f += 3) { var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2]; e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63]) } switch (b - d) {
                        case 1: b = a[d] << 4; e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b &
                            63], "=", "="); break; case 2: b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=")
                    }e = G("", e); return c ? Ji(e, !0) : e
            } function Ph(a, c) {
                void 0 === c && (c = !1); var b = a, d = "", e = 0; if (!b) return ""; for (c && (b = Ji(b)); b.length % 4;)b += "="; do {
                    var f = Gc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        b.charAt(e++)), g = Gc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)), h = Gc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)), k = Gc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)); if (0 > f || 0 > g || 0 > h || 0 > k) return ""; var l = f << 18 | g << 12 | h << 6 | k; f = l >> 16 & 255; g = l >> 8 & 255; l &= 255; d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length); return d
            } function Ji(a,
                c) { void 0 === c && (c = !1); return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) { return Zp[b] || b }) : "" } function $p(a) { try { var c = Ua(a) ? a : []; return G(",", [a.name, a.description, w(Ca, va, Xb(aq), Ee(","))(c)]) } catch (b) { return "" } } function aq(a) { return G(",", [a.description, a.suffixes, a.type]) } function bq(a, c) { for (var b = "", d = 0; d < c; d += 1)b += a; return b } function cq(a, c, b, d, e, f, g, h) { var k = b.C(f); ha(k) && (b.D(f, g), e(a, c, b, d), k = b.C(f, g)); W(h) || h.Xb(f, "" + k); return k } function dq(a, c) {
                    if (Gd(a)) {
                        var b = nb(a).match(eq); if (b && b.length) return b[1] ===
                            c
                    } return !1
                } function Fe(a, c, b) { return function (d) { var e, f, g = Aa(c, b); g && fq(a, d, c) && (g = H(g.params, g), (d = Wf({ event: a, La: "products", za: nc, Gh: "goods" }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e))) } } function fq(a, c, b) {
                    var d = !1, e = ""; if (!oa(c)) return Mb(b, "", "ecomeo"), d; var f = c.goods; switch (a) { case "detail": case "add": case "remove": R(f) && f.length ? (d = Ki(function (g) { return oa(g) && (fa(g.id) || Wc(b, g.id) || fa(g.name)) }, f)) || (e = "ecomgi") : e = "ecomgei"; break; case "purchase": Wc(b, c.id) || fa(c.id) ? d = !0 : e = "ecompi" }Mb(b,
                        "", e); return d
                } function Hd(a, c) { return { N: function (b, d) { Xf(b) ? d() : sa(c, function (e) { var f; if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.J = z(b.J || {}, e); d() }) } } } function gq(a, c) {
                    function b() { q.hidden ? z(k.style, Id(["top", "right", "left", "background"], "initial")) : z(k.style, Id(["top", "right", "left"], "0"), { background: "rgba(0, 0, 0, .3)" }); y.parentNode || (r.appendChild(p), r.appendChild(y)); q.hidden = !q.hidden; r.hidden = !r.hidden; t.hidden = !t.hidden } function d(L) {
                        var na = g(); z(na.style, Hc("2px", "18px"),
                            Xc, { left: "15px", top: "7px", background: "#2f3747", borderRadius: "2px" }); na.style.transform = "rotate(" + L + "deg)"; return na
                    } function e(L, na, xa, Eb, Jd) { var Ge = g(); z(Ge.style, Hc(na + "px", xa + "px"), Xc, { left: L + "px", bottom: 0, background: Eb, borderTopLeftRadius: Jd }); return Ge } var f = eb(a); if (!f) return E; var g = u("div", f), h = u("iframe", f), k = g(); k.classList.add("__ym_wv_ign"); z(k.style, Li, { bottom: "0", width: "100%", maxWidth: "initial", zIndex: "999999999" }); var l = k.attachShadow ? k.attachShadow({ mode: "open" }) : k, m = g(); z(m.style,
                        Hc("24px"), Xc, Yf, { top: "12px", right: "10px", background: "#3367dc", overflow: "hidden" }); var p = g(); z(p.style, { border: "2px solid transparent", animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear" }, Yf, Xc, Hc("48px"), Id(["top", "left"], "calc(50% - 24px)"), Id(["borderTopColor", "borderLeftColor"], "#fc0")); f = f("style"); f.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}"; p.appendChild(f); var q = g(); q.id = "__ym_wv_ign__opener"; z(q.style, Hc("46px", "48px"), Li, {
                            right: "0",
                            bottom: "60px", cursor: "pointer", background: "#fff", borderRadius: "16px 0 0 16px", boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)"
                        }); var r = g(); z(r.style, Xc, Id(["top", "right", "bottom"], "0"), { width: "600px", background: "#fff" }); var t = g(); t.id = "__ym_wv_ign__closer"; z(t.style, Hc("32px"), Xc, Yf, { top: "12px", right: "612px", cursor: "pointer", background: "#fff" }); f = h(); f.src = "https://metrika.yandex.ru/widget/iframe-check"; var y = h(); z(y.style, Hc("100%"), { border: "none" }); y.src = "https://metrika.yandex.ru/widget/dashboard?id=" +
                            c; r.hidden = !0; t.hidden = !0; t.appendChild(d(45)); t.appendChild(d(-45)); r.appendChild(f); m.appendChild(e(0, 8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)")); m.appendChild(e(8, 9, 16, "#04acff", "3px")); m.appendChild(e(17, 7, 24, "#ffdd13")); q.appendChild(m); l.appendChild(r); l.appendChild(t); var F = ["click", "touchstart"]; h = ja(a); m = a.document.body; l = [h.F(q, F, b), h.F(t, F, b), h.F(f, ["load"], C([ma, [H(r.removeChild, r, f), H(l.appendChild, l, q)]], x)), h.F(y, ["load"],
                                H(r.removeChild, r, p)), H(m.removeChild, m, k)]; var O = C([ma, l], x); l.push(h.F(a, ["securitypolicyviolation"], function (L) { (L = n(L, "blockedURI")) && 0 <= jb(L, "https://metrika.yandex.ru") && O() })); m.appendChild(k); return O
                } function Id(a, c) { return N(function (b, d) { b[d] = c; return b }, {}, a) } function Hc(a, c) { var b; return b = {}, b.width = a, b.height = c || a, b } function hq(a, c) { var b = n(c, "origin"), d; if (d = b) d = iq.test(b) || jq.test(b); d && (b = zb(a, c.data), "appendremote" === n(b, "action") && kq(a, c, b)) } function Mi(a, c, b, d) {
                    var e, f, g, h; void 0 ===
                        b && (b = ""); void 0 === d && (d = ""); var k = J(a), l = {}; l.getCachedTags = He; l.form = (e = {}, e.closest = u(a, Ni), e.select = lq, e.getData = u(a, Oi), e); l.button = (f = {}, f.closest = u(a, le), f.select = Zf, f.getData = u(a, me), f); l.phone = (g = {}, g.hidePhones = C([a, null, [d]], Pi), g); l.status = (h = {}, h.checkStatus = C([a, Fa(b)], mq), h); k.D("_u", l); c && Ac(a, { src: c })
                } function Qi(a) {
                    var c = a.lang; c = void 0 === c ? "" : c; var b = a.appVersion; b = void 0 === b ? "" : b; var d = a.fileId; d = void 0 === d ? "" : d; a = a.beta; a = void 0 === a ? !1 : a; b = G(".", va(A(w(Q, Fa), b.split(".")))); if (!I(d,
                        nq) || !I(c, ["ru", "en", "tr"])) return ""; c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js"); return Ri(c) ? c : ""
                } function oq(a, c) {
                    var b = eb(a); if (b) {
                        var d = b("div"), e = hc(a); if (e) {
                            d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>'; var f = d.firstChild; f.onload = function () {
                                var h = b("meta"); h.setAttribute("http-equiv", "Content-Security-Policy");
                                h.setAttribute("content", "script-src *"); f.contentWindow.document.head.appendChild(h); Ac(f.contentWindow, { src: c })
                            }; a._ym__remoteIframeEl = f; e.appendChild(d); d.removeChild(f); var g = null; d.attachShadow ? g = d.attachShadow({ mode: "open" }) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot()); g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer = f)
                        }
                    }
                } function mq(a) {
                    var c, b = Si(a); a = J(a).C("getCounters", Kd)(); a = A(S("id"), a); return c = { id: b }, c.counterFound =
                        !!b && I(b, a), c
                } function Pi(a, c, b) { var d; c = Ti(a, c, { hg: pq, ki: (d = {}, d.href = !0, d) }); b = va(A(function (f) { return "*" === f ? f : Vb(f) }, b)); var e = A(w(Q, Ha("concat", [""]), Ui("reverse"), ma), b); b = Ld(a); d = Vi(a, b, 1E3); c = u(e, c); d.F(c); qq(a, b); Wi(a, b); c() } function pq(a, c, b) {
                    var d = eb(a), e = b.sb, f = b.Tb, g = e.parentNode, h = e.textContent; if (!("text" === b.le && h && d && g)) return !1; b = d("small"); Xi(b); var k = Yi(h).length; x(Ha("appendChild", b), N(function (l, m) {
                        var p = l.nodes, q = l.og, r = d("small"); r.innerHTML = m; var t = rq.test(m); Xi(r); t && (r.style.opacity =
                            "" + (k - q - 1) / k); p.push(r); return { nodes: p, og: q + (t ? 1 : 0) }
                    }, { nodes: [], og: 0 }, h).nodes); sq(a, c, b, f); g.insertBefore(b, e); e.textContent = ""; return !0
                } function sq(a, c, b, d) { function e() { x(function (l) { l.style && z(l.style, { opacity: "" }) }, Ca(b.childNodes)); if (c) { var k = Aa(a, c); k && k.extLink("tel:" + d, {}) } g(); h() } var f = ja(a), g = E, h = E; g = f.F(b, ["mouseenter"], function (k) { if (k.target === b) { var l = T(a, e, 200, "ph.h.e"); h(); h = f.F(b, ["mouseleave"], function (m) { m.target === b && la(a, l) }) } }) } function Wi(a, c) {
                    Pb(a)(Ra(E, function () {
                        var b,
                        d = a.document.body, e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b); Ga("MutationObserver", a.MutationObserver) && (new MutationObserver(c.T)).observe(d, e)
                    }))
                } function qq(a, c) { return ja(a).F(a, ["load"], c.T) } function Ti(a, c, b) {
                    function d(k) { return f(a, c, k) ? h[k.Tb] && h[k.Tb].Zc : null } var e, f = b.hg; b = b.ki; var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b, h; return function (k) {
                        return new K(function (l, m) {
                            k && k.length || m(); h = Zi()(k); Pb(a)(Ra(u({ ma: [], Ba: 0 }, l), function () {
                                var p = ka(a), q = p(Z), r = g.href ? tq(a, h) : [],
                                t = g.text ? $i(a, h, a.document.body) : []; l({ ma: ia(R, va(A(d, r.concat(t)))), Ba: p(Z) - q })
                            }))
                        })
                    }
                } function tq(a, c) { var b = a.document.body; if (!b) return []; var d = aj(c); return N(function (e, f) { var g = n(f, "href"); try { var h = decodeURI(g || "") } catch (p) { h = "" } if ("tel:" === h.slice(0, 4)) { var k = (d.exec(h) || [])[0], l = k ? Vb(k) : "", m = c[l]; W(m) || !l && "*" !== m.Zc[0] || (e.push({ le: "href", sb: f, Tb: l, bb: bj(k, c[l].bb), Ti: g }), g = Vb(h.slice(4)), l = Zi()([l ? m.Zc : [g, ""]]), ta(e, $i(a, l, f))) } return e }, [], Ca(b.querySelectorAll("a"))) } function $i(a, c, b) {
                    if (!b) return [];
                    var d = [], e = aj(c), f = ["script", "style"]; qd(a, b, function (g) { var h = n(g, "parentNode.nodeName") || ""; g === b || I(h.toLowerCase(), f) || (h = va(e.exec(g.textContent || "") || []), x(function (k) { var l = Vb(k); W(c[l]) || d.push({ le: "text", sb: g, Tb: l, bb: bj(k, c[l].bb), Ti: g.textContent || "" }) }, h)) }, function (g) { return e.test(g.textContent || "") ? 1 : 0 }, a.NodeFilter.SHOW_TEXT); return d
                } function Zi() { return $f(function (a, c) { var b = A(Vb, c), d = b[0]; b = b[1]; a[d] = { bb: b, Zc: c }; var e = cj(d); e !== d && (a[e] = { bb: cj(b), Zc: c }); return a }, {}) } function bj(a,
                    c) { for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) { var h = d[g]; "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g]) } return G("", b) + c.slice(f + 1) } function cj(a) { var c = { 7: "8", 8: "7" }; return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a } function aj(a) { return new RegExp("(?:" + G("|", A(dj, ca(a))) + ")") } function ej(a, c, b, d) { if (c) { var e = []; c && (a.document.documentElement.contains(c) ? qd(a, c, Ha("push", e), d) : ta(e, fj(a, c, d))); x(b, e) } } function qd(a, c, b, d, e, f) {
                        function g(k) {
                            return P(d) ?
                                d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                        } void 0 === e && (e = -1); void 0 === f && (f = !1); var h = g(c); if (P(b) && (f || h === a.NodeFilter.FILTER_ACCEPT) && (h && b(c), !Sf(c))) for (c = a.document.createTreeWalker(c, e, d ? { acceptNode: g } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
                    } function fj(a, c, b) {
                        var d = [], e = w(Q, Ha("push", d)); P(b) ? (b = b(c), (ha(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c); if (c.childNodes && 0 < c.childNodes.length) {
                            c = c.childNodes; b = 0; for (var f = c.length; b < f; b += 1) {
                                var g =
                                    fj(a, c[b]); x(e, g)
                            }
                        } return d
                    } function gj(a, c, b) { var d; a = [hj(a, c, function (e) { d = e; e.ra.F(b) }), function () { d && d.unsubscribe() }]; return C([Ie, a], x) } function uq(a, c, b, d) {
                        var e, f, g; if (b) {
                            var h = n(d, "ecommerce") || {}; var k = n(d, "event") || ""; h = oa(h) && fa(k) ? Wf(k, h) : void 0; if (!h) a: { var l = d; !R(d) && Wc(a, Ua(d)) && (l = Qa(l)); if (R(l) && (h = l[0], k = l[1], l = l[2], fa(k) && oa(l) && "event" === h)) { h = Wf(k, l); break a } h = void 0 } if (d = h || vq(d)) ub(a, (e = {}, e.counterKey = c, e.name = "ecommerce", e.data = d, e)), b((f = {}, f.__ym = (g = {}, g.ecommerce = [d],
                                g), f))
                        }
                    } function vq(a) { var c = n(a, "ecommerce"); if (oa(c)) return a = ia(wc(wq), ca(c)), a = N(function (b, d) { b[d] = c[d]; return b }, {}, a), 0 === ca(a).length ? void 0 : a } function Wf(a, c) {
                        var b, d, e = fa(a) ? xq[a] : a; if (e) {
                            var f = e.event, g = e.La, h = e.Gh, k = void 0 === h ? "items" : h, l = c.purchase || c; if (h = l[k]) {
                                e = A(u(e.za, yq), h); var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b); b = ca(l); g && 1 < b.length && (m[f].actionField = Cb(function (p, q) { if (q === k) return p; if ("currency" === q) return m.currencyCode = l.currency, p; p[zq[q] || ag[q] || q] = l[q]; return p }, {}, b));
                                return m
                            }
                        }
                    } function yq(a, c) { var b = {}; x(function (d) { var e = a[d] || ag[d] || d; -1 !== jb(d, "item_category") ? (e = ag.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d] }, ca(c)); return b } function Aq(a, c, b) { var d, e, f, g = n(b, "target"); if (g && (g = le(a, g), g = me(a, g))) { g = "?" + Ic(g); var h = oc(a, c, "gbn", (d = {}, d.id = c.id, d.query = g, d)); b = n(b, "isTrusted"); b = ha(b) ? void 0 : (e = {}, e.__ym = (f = {}, f.ite = Bb(b), f), e); Je(a, c, "btn", h).reachGoal(g, b) } } function Bq(a, c, b, d) {
                        var e = n(d, "target"); e && (d = n(d, "isTrusted"), (e = pc("button,input",
                            a, e)) && "submit" === e.type && (e = Ni(a, e))) && (b.push(e), T(a, C([!1, a, c, b, e, d], ij), 300))
                    } function ij(a, c, b, d, e, f) { var g, h, k, l = Rb(c)(e, d), m = -1 !== l; if (a || m) m && d.splice(l, 1), a = Oi(c, e), a = "?" + Ic(a), d = C([c, b, "fg", (g = {}, g.id = b.id, g.query = a, g)], jj), f = ha(f) ? void 0 : (h = {}, h.__ym = (k = {}, k.ite = Bb(f), k), h), Je(c, b, "form", d).reachGoal(a, f) } function jj(a, c, b) { var d; return Cq(a, c).then(w(C([oc(a, c, b, (d = {}, d.id = c.id, d)), E], Cd), ma)) } function Oi(a, c, b) { return kj(a, c, ["i", "n", "p"], void 0, b) } function Dq(a, c) {
                        var b; a((b = {}, b.clickmap =
                            W(c) ? !0 : c, b))
                    } function Eq(a, c, b, d, e) { var f, g = "clmap/" + e.id; c = (f = {}, f["page-url"] = c, f["pointer-click"] = b, f); f = { K: Ka(), J: c, ha: { Ca: g } }; d(f, e)["catch"](D(a, "c.s.c")) } function Fq(a, c, b, d, e) {
                        if (Nb(a, "ymDisabledClickmap") || !c || !c.element) return !1; a = Ma(c.element); if (e && !e(c.element, a) || I(c.button, [2, 3]) && "A" !== a || Za(Ba(a), d)) return !1; d = c.element; if (c && b) {
                            if (50 > c.time - b.time) return !1; e = Math.abs(b.position.x - c.position.x); a = Math.abs(b.position.y - c.position.y); c = c.time - b.time; if (b.element === d && 2 > e && 2 > a && 1E3 >
                                c) return !1
                        } for (; d;) { if (Gq(d)) return !1; d = d.parentElement } return !0
                    } function Hq(a, c) { var b = null; try { if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null) } catch (d) { } return b } function Iq(a) { var c = a.which; a = a.button; return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0 } function lj(a, c) { var b = hc(a), d = bg(a); return { x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0, y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0 } } function Ke(a, c) {
                        return {
                            N: function (b,
                                d) { var e, f = b.K, g = b.Ja, h = b.J, k = b.ba; k = void 0 === k ? {} : k; if (f && h) { var l = ka(a); f.Xb("rqnl", 1); for (var m = Md(a), p = 1; m[p];)p += 1; b.M || (b.M = {}); b.M.Ub = p; m[p] = (e = {}, e.protocol = Ia.Ra, e.host = mc, e.resource = b.ha.Ca, e.postParams = k.da, e.time = l(Z), e.counterType = c.ca, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = Fc(a), e); g && (m[p].telemetry = g.l()); cg(a) } d() }, sa: function (b, d) { mj(a, b); d() }
                        }
                    } function mj(a, c) { var b = Md(a); c.K && !Wa(b) && c.M && (delete b[c.M.Ub], cg(a)) } function cg(a) { var c = Md(a); Pa(a).D("retryReqs", c) }
            function Jq(a, c) {
                if (a.Zi()) {
                    var b = nj(c); if (b && !kc("ym-disable-tracklink", b)) {
                        var d = a.l, e = a.Rg, f = a.cb, g = a.sender, h = a.eh, k = f.yc, l = b.href; var m = $a(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, "")); m || (m = (m = b.querySelector("img")) ? $a(m.getAttribute("title") || m.getAttribute("alt")) : ""); m = l === m ? "" : m; var p = n(c, "isTrusted"); if (kc("ym-external-link", b)) Le(d, f, { url: l, ob: !0, title: m, Hc: p, sender: g }); else {
                            k = k ? Uc(d, k).hostname : U(d).hostname; h = RegExp("\\.(" + G("|", A(Kq, h)) + ")$", "i"); var q = b.protocol + "//" + b.hostname +
                                b.pathname; h = oj.test(q) || oj.test(l) || h.test(l) || h.test(q); b = b.hostname; Me(k) === Me(b) ? h ? Le(d, f, { url: l, Fc: !0, Hc: p, title: m, sender: g }) : m && e.D("il", $a(m).slice(0, 100)) : l && Lq.test(l) || Le(d, f, { url: l, Jc: !0, ob: !0, Fc: h, Hc: p, title: m, sender: g })
                        }
                    }
                }
            } function Le(a, c, b) {
                var d, e, f, g, h = Ka(); void 0 !== b.Hc && h.D("ite", Bb(b.Hc)); b.Fc && h.D("dl", 1); b.ob && h.D("ln", 1); var k = b.ng || {}; h = { K: h, M: { title: k.title || b.title, Jc: !!b.Jc, R: k.params }, J: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.yc || U(a).href, d) }; d = "Link"; b.Fc ? d = b.ob ? "Ext link - File" :
                    "File" : b.ob && (d = "Ext link"); ub(a, (e = {}, e.counterKey = M(c), e.name = "event", e.data = (f = {}, f.schema = "Link click", f.name = (b.ob ? "external" : "internal") + " url: " + b.url, f), e)); c = b.sender(h, c).then(oc(a, c, "lcl", (g = {}, g.prefix = d, g.id = c.id, g.url = b.url, g), b.ng)); return Yc(a, "cl.p.s", c, k.callback || E, k.ctx)
            } function Mq(a, c) { var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1; a((d = {}, d.trackLinks = e, d)) } function Nq(a, c, b, d) {
                var e = U(a), f = e.hostname; e = e.href; if (c = Nd(c).url) a = Uc(a, c), f = a.hostname, e =
                    a.href; return [d + "://" + f + "/" + b, e || ""]
            } function pj(a) { return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0] } function Oq(a, c, b, d) { var e; if (a = Aa(a, b)) { var f = d.data; b = "" + b.id; var g = d.sended || []; d.sended || (d.sended = g); I(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.Vf((e = {}, e.type = "params", e.data = f, e))) } } function Gh(a, c, b) { void 0 === b && (b = Q); var d = wd(a); b(d); var e = u(d, Pq); Od(a, c, function (f) { f.ra.F(e) }); return d } function Pq(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.T(n(b, "type"), b)
            } function Od(a, c, b, d) { void 0 === b && (b = E); void 0 === d && (d = !1); var e = Ld(a); if (c && P(c.push)) { var f = c.push; c.push = function () { var g = Qa(arguments), h = g[0]; d && e.T(h); g = f.apply(c, g); d || e.T(h); return g }; a = { ra: e, unsubscribe: function () { c.push = f } }; b(a); x(e.T, c); return a } } function qe(a) { a = J(a); var c = a.C("dataLayer", []); a.D("dataLayer", c); return c } function hn(a, c) { var b, d; I(c, A(S("ymetrikaEvent.type"), a)) || a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b)) } function qj(a, c) {
                var b = sd(a, c), d = [],
                e = []; if (!b) return null; var f = C([a, b.pe], Qq), g = u(f, Rq); b.$.F(["initToParent"], function (h) { g(d, b.children[h[1].counterId]) }).F(["parentConnect"], function (h) { g(e, b.Ga[h[1].counterId]) }); return { $: b.$, Mj: function (h, k) { return new K(function (l, m) { b.pe(h, k, function (p, q) { l([p, q]) }); T(a, u(Sa(), m), 5100, "is.o") }) }, Uf: function (h) { var k = { Xf: [], Ce: [], data: h }; d.push(k); return f(b.children, k, h) }, Vf: function (h) { var k = { Xf: [], Ce: [], data: h }; e.push(k); return f(b.Ga, k, h) } }
            } function Rq(a, c, b) {
                c = ia(function (d) {
                    return !I(b.info.counterId,
                        d.Ce)
                }, c); x(function (d) { var e; b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data) }, c)
            } function Qq(a, c, b, d, e) { return (new K(function (f, g) { var h = ca(b), k = w(d.resolve || Q, ud(f)), l = w(d.reject || Q, ud(g)); d.resolve = k; d.reject = l; x(function (m) { var p; d.Ce.push(+m); var q = b[m], r = T(a, u(Sa(), l), 5100, "is.m"); c(q.window, z(e, (p = {}, p.toCounter = Fa(m), p)), function (t, y) { la(a, r); d.Xf.push(m); d.resolve && d.resolve(y) }) }, h) }))["catch"](D(a, "if.b")) } function Sq(a) {
                var c = E, b = null, d = a.length; if (0 !== a.length && a[0]) {
                    var e =
                        a.slice(-1)[0]; P(e) && (c = e, d = a.length + -1); var f = a.slice(-2)[0]; P(f) && (c = f, b = e, d = a.length + -2); d = a.slice(0, d); return { Sg: b, ec: c, R: 1 === d.length ? a[0] : vd(d) }
                }
            } function Yc(a, c, b, d, e) { var f = C([a, d, e], dg); return b.then(f, function (g) { f(); Ce(a, c, g) }) } function eg(a, c) {
                return {
                    N: function (b, d) {
                        var e, f, g = (b.M || {}).R, h = b.ba; h = void 0 === h ? {} : h; if (g && (rj(c, g), !h.da && b.K && b.J)) {
                            var k = Ab(a, g), l = sj(a), m = b.K.C("pv"); k && !b.J.nohit && (ub(a, (e = {}, e.counterKey = M(c), e.name = "params", e.data = (f = {}, f.val = g, f), e)), m ? encodeURIComponent(k).length >
                                Ia.ug ? l.push([b.K, g]) : b.J["site-info"] = k : (h.da = k, b.ba = h, b.Qc || (b.Qc = {}), b.Qc.li = !0))
                        } d()
                    }, sa: function (b, d) { var e = sj(a), f = Aa(a, c), g = f && f.params; g && (f = ia(w(Zc, Ba(b.K)), e), x(function (h) { g(h[1]); h = Ne(a)(h, e); e.splice(h, 1) }, f)); d() }
                }
            } function Oe(a, c) { return function (b) { fg(a, c, b) } } function Tq(a, c) { gg(a)(function (b) { delete b[c] }) } function fg(a, c, b) { gg(a)(function (d) { d[c] = z(d[c] || {}, b) }) } function gg(a) { a = J(a); var c = a.C("dsjf") || Da({}); a.Ia("dsjf", c); return c } function Uq(a, c) {
                return function (b) {
                    var d, e, f =
                        Aa(a, c); if (f) { var g = qc(a, M(c)); oa(b) ? Ua(ca(b)) ? (b = tj(b)) && Ua(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : g.log("fpeo") : g.log("fpno") }
                }
            } function tj(a) { return N(function (c, b) { var d = b[0], e = b[1], f = oa(e); if (!fa(e) && !f) return c; e = f ? tj(e) : e; Ua(e) && c.push([d, e]); return c }, [], Oa(a)) } function uj(a, c, b) {
                void 0 === b && (b = 0); c = Oa(c); c = N(function (d, e) {
                    var f = e[0], g = e[1], h = oa(g); if (!fa(g) && !h) return d; h ? g = uj(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = Vq(a, g) : "email" === f && (g = Wq(g)), g = vj(a, g)) : g = K.resolve(g);
                    d.push(g.then(function (k) { return [f, k] })); return d
                }, [], c); return K.all(c)
            } function Wq(a) { var c = $a(a).replace(/^\++/gm, "").toLowerCase(), b = c.lastIndexOf("@"); if (-1 === b) return c; a = c.substr(0, b); b = c.substr(b + 1); if (!b || !Xq(a)) return c; b = b.replace("googlemail.com", "gmail.com"); wj(b) && (b = "yandex.ru"); "yandex.ru" === b ? a = a.replace(hg, "-") : "gmail.com" === b && (a = a.replace(hg, "")); c = jb(a, "+"); -1 !== c && (a = a.slice(0, c)); return a + "@" + b } function Xq(a) {
                return 1 > a.length || 64 < a.length ? !1 : Ki(function (c) {
                    if (1 > c.length) c =
                        !1; else if ('"' === c[0] && '"' === c[c.length - 1] && 2 < c.length) a: { for (var b = 1; b + 2 < c.length; b += 1) { var d = c.charCodeAt(b); if (32 > d || 34 === d || 126 < d) { c = !1; break a } if (92 === d) { if (b + 2 === c.length || 32 > c.charCodeAt(b + 1)) { c = !1; break a } b += 1 } } c = !0 } else c = Yq.test(c) ? !0 : !1; return c
                }, a.split("."))
            } function Vq(a, c) { var b = $a(c), d = Vb(c); return 10 > d.length || 13 < d.length || b.startsWith("+8") ? b : "8" === b[0] ? "7" + d.slice(1) : "+" === b[0] || Wc(a, +b[0]) ? d : "7" + d } function vj(a, c) {
                return new K(function (b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function (f) { f = new a.Blob([f], { type: "application/octet-binary" }); var g = new a.FileReader; g.onload = function (h) { h = n(h, "target.result") || ""; var k = jb(h, ","); -1 !== k ? b(h.substring(k + 1)) : d(ib("fpm.i")) }; g.readAsDataURL(f) }, d)
                })
            } function Aa(a, c) { var b = J(a).C("counters", {}), d = M(c); return b[d] } function oc(a, c, b, d, e) { return C([a, M(c), e ? [b + ".p", e] : b, d], Mb) } function Mb(a, c, b, d) { qc(a, c).log(b, d) } function Zq(a, c) {
                function b(d, e, f) {
                    var g, h; ub(a, (g = {}, g.name = "log", g.counterKey =
                        c, g.data = (h = {}, h.args = R(e) ? e : [e], h.type = d, h.variables = f, h), g))
                } return { log: u("log", b), error: u("error", b), warn: u("warn", b) }
            } function sa(a, c) { var b = M(a); return xj()($q(b)).then(c) } function ar(a, c, b) { var d, e; c = M(c); var f = ig(a); b = z({ gh: f(Z) }, b); ub(a, (d = {}, d.counterKey = c, d.name = "counterSettings", d.data = (e = {}, e.settings = b, e), d)); return xj()(br(c, b)) } function br(a, c) { return function (b) { var d = b[a]; d ? (d.Ei = c, d.If = !0, d.Hf ? d.Hf(c) : d.promise = K.resolve(c)) : b[a] = { promise: K.resolve(c), Ei: c, If: !0 } } } function jg(a) {
                return !Ed(a) &&
                    kg(a)
            } function Pd(a) { return eb(a) ? u(a, cr) : !1 } function Fb(a) { if (a.fetch) { var c = n(a, "AbortController"); return C([a, c ? new c : void 0], dr) } return !1 } function kg(a) { var c = n(a, "navigator.sendBeacon"); return c && Ga("sendBeacon", c) ? C([a, H(c, n(a, "navigator"))], er) : !1 } function er(a, c, b, d) { return new K(function (e, f) { var g; if (!n(a, "navigator.onLine")) return f(); var h = z(d.$a, (g = {}, g["force-urlencoded"] = 1, g)); g = b + "?" + Ic(h) + (d.da ? "&" + d.da : ""); return 2E3 < g.length ? f(Sa("sb.tlq")) : c(g) ? e("") : f() }) } function cr(a, c, b) {
                return new K(function (d,
                    e) { var f, g, h = "_ymjsp" + Xa(a), k = z((f = {}, f.callback = h, f), b.$a), l = C([a, h], fr); a[h] = function (p) { try { l(), zc(m), d(p) } catch (q) { e(q) } }; k.wmode = "5"; var m = Ac(a, (g = {}, g.src = yj(c, b, k), g)); if (!m) return l(), e(ib("jp.s")); f = u(m, zc); f = w(f, u(Sa(b.ia), e)); g = Qd(a, f, b.Pa || 1E4); g = C([a, g], la); m.onload = g; m.onerror = w(l, g, f) })
            } function fr(a, c) { try { delete a[c] } catch (b) { a[c] = void 0 } } function $c(a) { var c = eb(a); return c ? C([a, c], gr) : !1 } function gr(a, c, b, d) {
                return new K(function (e, f) {
                    var g = hc(a), h = c("img"), k = w(u(h, zc), u(Sa(d.ia),
                        f)), l = Qd(a, k, d.Pa || 3E3); h.onerror = k; h.onload = w(u(h, zc), u(null, e), C([a, l], la)); k = z({}, d.$a); delete k.wmode; h.src = yj(b, d, k); Gd(a) && (z(h.style, { position: "absolute", visibility: "hidden", width: "0px", height: "0px" }), g.appendChild(h))
                })
            } function dr(a, c, b, d) {
                var e, f = z(d.Ab ? (e = {}, e.wmode = "7", e) : {}, d.$a), g = c || { signal: void 0, abort: E }, h = a.fetch(b + "?" + Ic(f), { method: d.bd, body: d.da, credentials: !1 === d.Je ? "omit" : "include", headers: d.Za, signal: g.signal }), k = u(d.ia, Sa); return new K(function (l, m) {
                    d.Pa && Qd(a, function () { try { g.abort() } catch (p) { } m(k()) },
                        d.Pa); return h.then(function (p) { if (!p.ok) { if (d.me) return Va(zj(p)); ie(d.ia) } return d.me ? p.text() : d.Ab ? p.json() : null }).then(l)["catch"](u(k(), m))
                })
            } function Gb(a) { var c; if (c = n(a, "XMLHttpRequest")) if (c = "withCredentials" in new a.XMLHttpRequest) { a: { if (hr.test(a.location.host) && a.opera && P(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) { c = !0; break a } c = !1 } c = !c } return c ? u(a, ir) : !1 } function ir(a, c, b) {
                var d, e = new a.XMLHttpRequest, f = b.da, g = z(b.Ab ? (d = {}, d.wmode = "7", d) : {},
                    b.$a); return new K(function (h, k) { e.open(b.bd || "GET", c + "?" + Ic(g), !0); e.withCredentials = !1 !== b.Je; b.Pa && (e.timeout = b.Pa); jr(Oa, Xb(function (m) { e.setRequestHeader(m[0], m[1]) }))(b.Za); var l = C([a, e, Sa(b.ia), b.Ab, b.me, h, k], kr); e.onreadystatechange = l; try { e.send(f) } catch (m) { } })
            } function kr(a, c, b, d, e, f, g, h) { if (4 === c.readyState) if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(zj(c)); else { e = null; if (d) try { (e = zb(a, c.responseText)) || g(b) } catch (k) { g(b) } f(e) } return h } function yj(a, c, b) {
                (b = Ic(b)) && (a +=
                    "?" + b); c.da && (a += (b ? "&" : "?") + c.da); return a
            } function lr(a, c, b) { var d = A(Zc, Yb[c] || Zb); x(function (e) { return d.unshift(e) }, lg); return A(w(Pc([a, b]), ma), d) } function Aj(a, c) {
                var b = U(a), d = b.href, e = b.host, f = -1; if (!fa(c) || W(c)) return d; b = c.replace(Bj, ""); if (-1 !== b.search(mr)) return b; var g = b.charAt(0); if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b; if (-1 !== f) return d.substr(0, f) + b; if ("/" === g) { if (f = jb(d, e), -1 !== f) return d.substr(0, f + e.length) + b } else return d = d.split("/"),
                    d[d.length - 1] = b, G("/", d); return ""
            } function Pe(a, c) { return { N: function (b, d) { var e = Cj(c); e = C([b, e, d], nr); or(a, c, e) }, sa: function (b, d) { var e = b.K, f = Cj(c); if (e) { var g = f.wa; f.Ye === e && g && (x(ma, g), f.wa = null) } d() } } } function nr(a, c, b) { var d = a.K; d ? Xf(a) ? (c.Ye = d, b()) : c.wa ? c.wa.push(b) : b() : b() } function Xf(a) { return (a = a.K) && a.C("pv") && !a.C("ar") } function or(a, c, b) {
                if (Qe(a) && kb(a)) {
                    var d = pr(c); if (!d.Wh) {
                        d.Wh = !0; c = sd(a, c); if (!c) { b(); return } d.wa = []; var e = function () { d.wa && (x(ma, d.wa), d.wa = null) }; T(a, e, 3E3); c.$.F(["initToChild"],
                            e)
                    } d.wa ? d.wa.push(b) : b()
                } else b()
            } function Dj(a, c) { return { N: function (b, d) { var e = b.K; if (e && (!c || c.Tf)) { var f = a.document.title; b.M && b.M.title && (f = b.M.title); var g = Jc("getElementsByTagName", a.document); "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : ""); f = f.slice(0, Ia.vg); e.D("t", f) } d() } } } function Sb(a) {
                return function (c, b) {
                    return {
                        N: function (d, e) {
                            var f = d.K, g = d.J; f && g && x(function (h) { var k = Rd[h], l = "bi", m = f; k || (k = mg[h], l = "tel", m = se(d)); k && (k = B(l + ":" + h, k, null)(c, b, d), m.Xb(h, k)) }, a || qr());
                            e()
                        }
                    }
                }
            } function rr(a, c) { var b = Sd(a); c.F(["initToParent"], function (d) { var e = d[0]; d = d[1]; window.window && (b.children[d.counterId] = { info: d, window: e.source }) }).F(["initToChild"], function (d) { var e = d[0]; d = d[1]; e.source === a.parent && c.T("parentConnect", [e, d]) }).F(["parentConnect"], function (d) { var e = d[1]; e.counterId && (b.Ga[e.counterId] = { info: e, window: d[0].source }) }) } function sr(a) {
                if (Ga("MutationObserver", a.MutationObserver)) {
                    var c = Sd(a).children, b = new a.MutationObserver(function () {
                        x(function (d) {
                            n(c[d], "window.window") ||
                            delete c[d]
                        }, ca(c))
                    }); Pb(a)(Ra(E, function () { b.observe(a.document.body, { subtree: !0, childList: !0 }) }))
                }
            } function tr(a, c) { return function (b, d) { var e, f = { rc: ka(a)(Z), key: a.Math.random(), dir: 0 }; b.length && (f.rc = Fa(b[0]), f.key = parseFloat(b[1]), f.dir = Fa(b[2])); z(d, c); var g = (e = { data: d }, e.__yminfo = G(":", ["__yminfo", f.rc, f.key, f.dir]), e); return { meta: f, ag: Ab(a, g) || "" } } } function Pb(a, c) {
                function b(e) { n(c, d) ? e() : T(a, u(e, b), 100) } void 0 === c && (c = a); var d = (c.nodeType ? "contentWindow." : "") + "document.body"; return Da(function (e,
                    f) { b(f) })
            } function Td(a, c) { var b = c.Td, d = b || "uid"; b = b ? a.location.hostname : void 0; var e = lc(a), f = Pa(a), g = ka(a)(ng), h = Ej(a, c), k = h[0]; h = h[1]; var l = e.C("d"); Fj(a, c); var m = !1; !h && k && (h = k, m = !0); if (!h) h = G("", [g, Xa(a, 1E6, 999999999)]), m = !0; else if (!l || 15768E3 < g - Fa(l)) m = !0; m && !c.Ta && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b)); f.D(d, h); return h } function ur(a, c) { return !c.Ta && Fj(a, c) } function Ej(a, c) { var b = Pa(a), d = lc(a), e = c.Td || "uid"; return [b.C(e), d.C(e)] } function Fc(a) {
                var c = J(a), b = c.C("hitId"); b || (b = Xa(a), c.D("hitId",
                    b)); return b
            } function me(a, c, b) { var d = Ma(c); return d && kj(a, c, va(["p", vr[d], "c"]), Zf, b) } function le(a, c) { var b = pc(og, a, c); if (!b) { var d = pc("div", a, c); d && (lb(og + ",div", d).length || (b = d)) } return b } function kj(a, c, b, d, e) { return N(function (f, g) { var h = null; g in Gj ? h = c.getAttribute && c.getAttribute(Gj[g]) : g in ad && (h = "p" === g ? ad[g](a, c, e) : "c" === g ? ad[g](a, c, d) : ad[g](a, c)); h && (h = h.slice(0, Hj[g] || 100), f[g] = pg[g] ? "" + ic(h) : h); return f }, {}, b) } function hi(a, c, b) {
                if (pd(a)) return Ca(b.querySelectorAll(c)); var d = Ij(c.split(" "),
                    b); return ia(function (e, f) { return Rb(a)(e, d) === f }, d)
            } function Ij(a, c) { var b = ta([], a), d = b.shift(); if (!d) return []; d = c.getElementsByTagName(d); return b.length ? yc(u(b, Ij), Ca(d)) : Ca(d) } function fc(a, c) { if (c.querySelector) return c.querySelector(a); var b = lb(a, c); return b && b.length ? b[0] : null } function lb(a, c) { if (!c || !c.querySelectorAll) return []; var b = c.querySelectorAll(a); return b ? Ca(b) : [] } function nj(a) {
                var c = null; try { c = a.target || a.srcElement } catch (b) { } if (c) {
                    3 === c.nodeType && (c = c.parentNode); for (a = c && c.nodeName &&
                        ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));)a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase(); return c.href ? c : null
                } return null
            } function Ac(a, c) {
                var b = eb(a); if (b) {
                    var d = a.document, e = b("script"); e.src = c.src; e.type = c.type || "text/javascript"; e.charset = c.charset || "utf-8"; e.async = c.async || !0; try {
                        var f = d.getElementsByTagName("head")[0]; if (!f) { var g = d.getElementsByTagName("html")[0]; f = b("head"); g && g.appendChild(f) } f.insertBefore(e,
                            f.firstChild); return e
                    } catch (h) { }
                }
            } function ci(a, c) { var b = Jj(a); I(c, b.rb) && (b.rb = ia(w(Ba(c), Kc), b.rb), b.rb.length || (zc(b.ib), b.ib = null)) } function bi(a, c, b) { var d = Jj(c); I(b, d.rb) || d.rb.push(b); if (Wa(d.ib)) { b = eb(a); if (!b) return null; b = b("iframe"); z(b.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" }); b.src = c; a = hc(a); if (!a) return null; a.appendChild(b); d.ib = b } else (a = n(d.ib, "contentWindow")) && a.postMessage("frameReinit", "*"); return d.ib } function wr(a, c) {
                var b = R(a) ? a : [a]; c = c || document;
                if (c.querySelectorAll) { var d = G(", ", A(function (e) { return "." + e }, b)); return Ca(c.querySelectorAll(d)) } if (c.getElementsByClassName) return yc(w(Ha("getElementsByClassName", c), Ca), b); d = c.getElementsByTagName("*"); b = "(" + G("|", b) + ")"; return ia(u(b, kc), Ca(d))
            } function vf(a, c, b) { for (var d = "", e = He(), f = Ma(c) || "*"; c && c.parentNode && !I(f, ["BODY", "HTML"]);)d += e[f] || "*", d += Kj(a, c, b) || "", c = c.parentElement, f = Ma(c) || "*"; return $a(d, 128) } function Kj(a, c, b) {
                if (a = Re(a, c)) {
                    a = a.childNodes; for (var d = c && c.nodeName, e = 0, f = 0; f <
                        a.length; f += 1)if (d === (a[f] && a[f].nodeName)) { if (c === a[f]) return e; b && a[f] === b || (e += 1) }
                } return 0
            } function Re(a, c) { var b = n(a, "document"); return c && c !== b.documentElement ? c === Lc(a) ? b.documentElement : n(c, "parentNode") : null } function Pf(a, c) { var b = qg(a, c), d = b.left; b = b.top; var e = Se(a, c); return [d, b, e[0], e[1]] } function Se(a, c) {
                var b = n(a, "document"); if (c === Lc(a) || c === b.documentElement) { b = hc(a); var d = Rc(a); return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])] } return (b = Qc(c)) ? [b.width, b.height] : [c.offsetWidth,
                c.offsetHeight]
            } function qg(a, c) { var b = c, d = n(a, "document"), e = Ma(b); if (!b || !b.ownerDocument || "PARAM" === e || b === Lc(a) || b === d.documentElement) return { left: 0, top: 0 }; if (d = Qc(b)) return b = bg(a), { left: Math.round(d.left + b.x), top: Math.round(d.top + b.y) }; for (e = d = 0; b;)d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent; return { left: d, top: e } } function pc(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null; if (c.Element.prototype.closest && Ga("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = oi(c); if (d) { for (; b && 1 === b.nodeType && !d.call(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null } if (pd(c)) { for (a = Ca((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Rb(c)(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null } return null
            } function pd(a) { return !(!Ga("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll) } function Ah(a, c, b) {
                var d = c.top, e = c.bottom, f = c.left, g = b.w; b = b.h; a = a.Math; c = a.min(a.max(c.right,
                    0), g) - a.min(a.max(f, 0), g); return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
            } function Lj(a) { return Te(a) && !Za(Ba(a.type), xr) ? Ue(a) ? !a.checked : !a.value : yr(a) ? !a.value : zr(a) ? 0 > a.selectedIndex : !0 } function Ma(a) { if (a) try { var c = a.nodeName; if (fa(c)) return c; c = a.tagName; if (fa(c)) return c } catch (b) { } } function Mj(a, c) { var b = a.document.getElementsByTagName("form"); return Rb(a)(c, Ca(b)) } function Ar(a, c, b) {
                b = Jc("dispatchEvent", b || a.document); var d = null, e = n(a, "Event.prototype.constructor"); if (e && (Ga("(Event|Object|constructor)",
                    e) || rg(a) && "[object Event]" === "" + e)) try { d = new a.Event(c) } catch (f) { if ((a = Jc("createEvent", n(a, "document"))) && P(a)) { try { d = a(c) } catch (g) { } d && d.initEvent && d.initEvent(c, !1, !1) } } d && b(d)
            } function Qc(a) { try { return a.getBoundingClientRect && a.getBoundingClientRect() } catch (c) { return "object" === typeof c && null !== c && 16389 === (c.yf && c.yf & 65535) ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 } : null } } function bg(a) {
                var c = Lc(a), b = n(a, "document"); return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft ||
                        c && c.scrollLeft || 0, y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            } function Rc(a) { var c = pe(a); if (c) { var b = c[2]; return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)] } c = hc(a); return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight] } function pe(a) { var c = n(a, "visualViewport.width"), b = n(a, "visualViewport.height"); a = n(a, "visualViewport.scale"); return ha(c) || ha(b) ? null : [Math.floor(c), Math.floor(b), a] } function hc(a) {
                var c = n(a, "document") || {}, b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : Lc(a) || b
            } function Lc(a) { a = n(a, "document"); try { return a.getElementsByTagName("body")[0] } catch (c) { return null } } function kc(a, c) { try { return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className) } catch (b) { return !1 } } function Mc(a) { var c; try { if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null) } catch (b) { } return c } function zc(a) { var c = a && a.parentNode; c && c.removeChild(a) } function Ob(a) {
                return a ? a.innerText ||
                    "" : ""
            } function Sf(a) { if (ha(a)) return !1; a = a.nodeType; return 3 === a || 8 === a } function Nj(a, c, b) { void 0 === c && (c = ""); void 0 === b && (b = "_ym"); var d = "" + b + c; d && (d += "_"); return { Md: Br(a), C: function (e, f) { var g = Oj(a, "" + d + e); return Wa(g) && !W(f) ? f : g }, D: function (e, f) { Pj(a, "" + d + e, f); return this }, Gb: function (e) { Qj(a, "" + d + e); return this } } } function Pj(a, c, b) { var d = sg(a); a = Ab(a, b); if (!Wa(a)) try { d.setItem(c, a) } catch (e) { } } function Oj(a, c) { var b = sg(a); try { return zb(a, b.getItem(c)) } catch (d) { } return null } function Qj(a, c) {
                var b =
                    sg(a); try { b.removeItem(c) } catch (d) { }
            } function sg(a) { try { return a.localStorage } catch (c) { } return null } function Ab(a, c, b) { try { return a.JSON.stringify(c, null, b) } catch (d) { return null } } function se(a, c, b) { void 0 === b && (b = null); a.Ja || (a.Ja = wf()); c && a.Ja.Xb(c, b); return a.Ja } function Ve(a) { return { N: function (c, b) { var d = a.document, e = c.K; if (e && tg(a)) { var f = ja(a), g = function (h) { tg(a) || (f.xb(d, Rj, g), b()); return h }; f.F(d, Rj, g); e.D("pr", "1") } else b() } } } function Ud(a) {
                return function (c, b, d) {
                    return function (e, f) {
                        var g =
                            A(w(Zc, Pc([c, f]), ma), Sj[a] || []); g = ta(g, d); return Tj(c, b, g)(e)
                    }
                }
            } function Tj(a, c, b) { var d = $b(a, c); return function (e) { return Uj(b, e, !0).then(function () { var f = e.ha || {}, g = f.Nh, h = void 0 === g ? "" : g; g = f.Ca; var k = void 0 === g ? "" : g; f = f.Ph; f = A(function (l) { return Ia.Ra + "//" + ("" + h + l || mc) + "/" + k }, void 0 === f ? [mc] : f); return d(e, f) }).then(function (f) { var g = f.Tc; f = f.lg; e.Hi = g; e.Ii = f; return Uj(b, e).then(u(g, Q)) }) } } function $b(a, c) { return function (b, d) { return Vj(a, c, d, b) } } function Vj(a, c, b, d, e, f) {
                var g; void 0 === e && (e = 0);
                void 0 === f && (f = 0); var h = z({ ia: [] }, d.ba), k = c[f], l = k[0]; k = k[1]; var m = b[e]; h.Za && h.Za["Content-Type"] || !h.da || (h.Za = z({}, h.Za, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.da = "site-info=" + xe(h.da)); h.bd = h.da ? "POST" : "GET"; h.$a = Cr(a, d, l); h.Ca = (d.ha || {}).Ca; h.ia.push(l); z(d.ba, h); g = "" + m + (d.Qc && d.Qc.li ? "/1" : ""); var p = 0; p = Dr(a, g, h); return k(g, h).then(function (q) { var r = p, t, y; ub(a, (t = {}, t.name = "requestSuccess", t.data = (y = {}, y.body = q, y.requestId = r, y), t)); return { Tc: q, lg: e } })["catch"](function (q) {
                    var r =
                        p, t, y; ub(a, (t = {}, t.name = "requestFail", t.data = (y = {}, y.error = q, y.requestId = r, y), t)); r = f + 1 >= c.length; t = e + 1 >= b.length; r && t && Va(q); return Vj(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1)
                })
            } function Cr(a, c, b) { var d = z({}, c.J); a = ka(a); c.K && (d["browser-info"] = Ka(c.K.l()).D("st", a(ng)).Ha()); !d.t && (c = c.Ja) && (c.D("ti", b), d.t = c.Ha()); return d } function Dr(a, c, b) {
                var d, e, f, g = Xa(a), h = b.ia, k = b.da, l = b.Za, m = b.$a; b = b.bd; ub(a, (d = {}, d.name = "request", d.data = (e = {}, e.url = c, e.requestId = g, e.senderParams = (f = {}, f.rBody = k, f.debugStack = h, f.rHeaders =
                    l, f.rQuery = m, f.verb = b, f), e), d)); return g
            } function Wj(a, c, b, d) { a[c] || (a[c] = []); b && !ha(d) && Xj(a[c], b, d) } function Xj(a, c, b) { for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) { var g = a[f], h = g[0]; g = g[1]; if (b === g && h === c) return; if (b < g && b >= e) { a.splice(f, 0, d); return } e = g } a.push(d) } function Uj(a, c, b) { void 0 === b && (b = !1); return new K(function (d, e) { function f(k, l) { l(); d() } var g = a.slice(); g.push({ N: f, sa: f }); var h = gc(g, function (k, l) { var m = b ? k.N : k.sa; if (m) try { m(c, l) } catch (p) { h(Er), e(p) } else l() }); h(Yj) }) } function Ub(a, c,
                b) { var d = b || "as"; if (a.postMessage && !a.attachEvent) { b = ja(a); var e = "__ym__promise_" + Xa(a) + "_" + Xa(a), f = E; d = D(a, d, function (g) { try { var h = g.data } catch (k) { return } h === e && (f(), g.stopPropagation && g.stopPropagation(), c()) }); f = b.F(a, ["message"], d); a.postMessage(e, "*") } else T(a, c, 0, d) } function uh(a, c, b, d, e) { void 0 === d && (d = 1); void 0 === e && (e = "itc"); c = gc(c, b); od(a, c, d)(Ra(D(a, e), E)) } function od(a, c, b, d) {
                    void 0 === b && (b = 1); void 0 === d && (d = Zj); ug = Infinity === b; return Da(function (e, f) {
                        function g() {
                            try {
                                var k = c(d(a, b));
                                h = h.concat(k)
                            } catch (l) { return e(l) } c(Fr); if (c(Vd)) return f(h), ak(a); ug ? (c(d(a, 1E4)), f(h), ak(a)) : T(a, g, 100)
                        } var h = []; Gr(g)
                    })
                } function ak(a) { if (vg.length) { var c = vg.shift(); ug ? c() : T(a, c, 100) } else wg = !1 } function Gr(a) { wg ? vg.push(a) : (wg = !0, a()) } function If(a) { return Da(function (c, b) { b(a) }) } function Jp(a) { return Da(function (c, b) { a.then(b, c) }) } function Hr(a) { var c = [], b = 0; return Da(function (d, e) { x(function (f, g) { f(Ra(d, function (h) { try { c[g] = h, b += 1, b === a.length && e(c) } catch (k) { d(k) } })) }, a) }) } function Ip(a) {
                    var c =
                        [], b = !1; return Da(function (d, e) { function f(g) { c.push(g) === a.length && d(c) } x(function (g) { g(Ra(f, function (h) { if (!b) try { e(h), b = !0 } catch (k) { f(k) } })) }, a) })
                } function Ra(a, c) { return function (b) { return b(a, c) } } function gc(a, c) { return Da({ Sa: a, Pd: c || Q, we: !1, ya: 0 }) } function Yj(a) { function c() { function d() { b = !0; a.ya += 1 } b = !1; a.Pd(a.Sa[a.ya], function () { d() }); b || (a.ya += 1, d = u(a, Yj)) } for (var b = !0; !Vd(a) && b;)c() } function Zj(a, c) { return function (b) { var d = ka(a), e = d(Z); return bk(function (f, g) { d(Z) - e >= c && g(ck) })(b) } } function xg(a,
                    c) { return function (b) { var d = ka(a), e = d(Z); return yg(function (f) { d(Z) - e >= c && ck(f) })(b) } } function yg(a) { return function (c) { for (var b; c.Sa.length && !Vd(c);)b = c.Sa.pop(), b = c.Pd(b, c.Sa), a(c); return b } } function Ir(a) { Vd(a) && Va(ib("i")); var c = a.Pd(a.Sa[a.ya]); a.ya += 1; return c } function Fr(a) { a.we = !1 } function ck(a) { a.we = !0 } function Er(a) { a.ya = a.Sa.length } function Vd(a) { return a.we || a.Sa.length <= a.ya } function Db(a) { a = ka(a); return Math.round(a(dk) / 50) } function dk(a) { var c = a.Ba, b = c[1]; a = c[0] && b ? b() : Z(a) - a.Qh; return Math.round(a) }
            function ng(a) { return Math.round(Z(a) / 1E3) } function sb(a) { return Math.floor(Z(a) / 1E3 / 60) } function Z(a) { var c = a.Ee; return 0 !== c ? c : zg(a.l, a.Ba) } function ig(a) { var c = ja(a), b = ek(a), d = { l: a, Ee: 0, Ba: b, Qh: zg(a, b) }, e = b[1]; b[0] && e || c.F(a, ["beforeunload", "unload"], function () { 0 === d.Ee && (d.Ee = zg(a, d.Ba)) }); return Da(d) } function Jr(a) { return (10 > a ? "0" : "") + a } function Vi(a, c, b) { function d() { f = 0; g && (g = !1, f = T(a, d, b), e.T(h)) } var e = Ld(a), f, g = !1, h; c.F(function (k) { g = !0; h = k; f || d(); return E }); return e } function Kr(a, c) { return a.clearInterval(c) }
            function Lr(a, c, b, d) { return a.setInterval(D(a, "i.err." + (d || "def"), c), b) } function T(a, c, b, d) { return Qd(a, D(a, "d.err." + (d || "def"), c), b) } function wd(a) { var c = {}; return { F: function (b, d) { x(function (e) { n(c, e) || (c[e] = Ld(a)); c[e].F(d) }, b); return this }, ga: function (b, d) { x(function (e) { n(c, e) && c[e].ga(d) }, b); return this }, T: function (b, d) { return n(c, b) ? D(a, "e." + d, c[b].T)(d) : [] } } } function Ld(a) {
                var c = [], b = {}; b.Hj = c; b.F = w(Ha("push", c), u(b, Q)); b.ga = w(vb(Rb(a))(c), vb(Ha("splice", c))(1), u(b, Q)); b.T = w(Q, vb(ma), Mr(c));
                return b
            } function fk(a, c, b, d, e, f) { a = Nr(a); var g = a.F, h = a.ga; f = f ? h : g; if (c[f]) if (a.Ri) c[f](b, d, e); else c[f]("on" + b, d) } function B(a, c, b) { return function () { return D(arguments[0], a, c, b).apply(this, arguments) } } function D(a, c, b, d, e) { var f = Va, g = b || f; return function () { var h = d; try { h = g.apply(e || null, arguments) } catch (k) { Ce(a, c, k) } return h } } function zg(a, c) { var b = c || ek(a), d = b[0]; b = b[1]; return !isNaN(d) && P(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime() } function ek(a) {
                a = Fd(a); var c = n(a, "timing.navigationStart"),
                    b = n(a, "now"); b && (b = H(b, a)); return [c, b]
            } function Fd(a) { return n(a, "performance") || n(a, "webkitPerformance") } function Ce(a, c, b) { var d = "u.a.e", e = ""; b && ("object" === typeof b ? (b.unk && Va(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b); Or(d) || Za(u(d, db), Pr) || Qr(d) && .1 <= a.Math.random() || x(w(Q, Pc(["jserrs", d, c, e]), ma), gk) } function ie() { var a = Qa(arguments); return Va(Sa(a)) } function Sa(a) { var c = ""; R(a) ? c = G(".", a) : fa(a) && (c = a); return ib("err.kn(" + Ia.cc + ")" + c) } function zj(a) {
                return ib("http." +
                    a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50))
            } function Rr(a) { this.message = a } function ub(a, c) { if (We(a)) { var b = c.oa; if (b) { var d = b.split(":"); b = d[1]; d = Ag(ve(d[0])); if ("1" === b || d) return } b = hk(a); 1E3 === b.length && b.shift(); b.push(c) } } function Xe(a, c) { return -1 < Gc(U(a).href, "_ym_debug=" + c) } function pi(a, c, b) { Bg(a, "metrika_enabled", "1", 0, c, b, !0); var d = ik(a); (d = d && d.metrika_enabled) && jk(a, "metrika_enabled", c, b, !0); return !!d } function Bg(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1); if (qi(a, Be,
                    c)) { var h = c + "=" + encodeURIComponent(b) + ";"; h += "" + Sr(a); if (d) { var k = new Date; k.setTime(k.getTime() + 6E4 * d); h += "expires=" + k.toUTCString() + ";" } e && (d = e.replace(Tr, ""), h += "domain=" + d + ";"); try { a.document.cookie = h + ("path=" + (f || "/")), g || (kk(a)[c] = b) } catch (l) { } }
            } function Be(a, c) { var b = kk(a); return b ? b[c] || null : null } function ik(a) { try { var c = a.document.cookie; if (!ha(c)) { var b = {}; x(function (d) { d = d.split("="); var e = d[1]; b[$a(d[0])] = $a(lk(e)) }, (c || "").split(";")); return b } } catch (d) { } return null } function qi(a, c, b) {
                return !Cg.length ||
                    I(b, Wd) ? !0 : N(function (d, e) { return d && e(a, c, b) }, !0, Cg)
            } function Ic(a) { return a ? w(Oa, $f(function (c, b) { var d = b[0], e = b[1]; W(e) || ha(e) || c.push(d + "=" + xe(e)); return c }, []), Ee("&"))(a) : "" } function Ur(a) { return a ? w(Xb(function (c) { c = c.split("="); var b = c[1]; return [c[0], ha(b) ? void 0 : lk(b)] }), $f(function (c, b) { c[b[0]] = b[1]; return c }, {}))(a.split("&")) : {} } function lk(a) { var c = ""; try { c = decodeURIComponent(a) } catch (b) { } return c } function xe(a) {
                try { return encodeURIComponent(a) } catch (c) { } a = G("", ia(function (c) {
                    return 55296 >=
                        c.charCodeAt(0)
                }, a.split(""))); return encodeURIComponent(a)
            } function $a(a, c) { if (a) { var b = mk ? mk.call(a) : ("" + a).replace(Bj, ""); return c && b.length > c ? b.substring(0, c) : b } return "" } function wj(a) { var c = a.match(nk); if (c) { a = c[1]; if (c = c[2]) return I(c, Dg) ? c : !1; if (a) return Dg[0] } return !1 } function U(a) { return N(function (c, b) { var d = n(a, "location." + b); c[b] = d ? "" + d : ""; return c }, {}, Vr) } function ok(a) { return N(function (c, b) { c[nf[b[0]].ea] = b[1]; return c }, {}, Oa(a)) } function rc(a) {
                x(function (c) {
                    var b = c[1]; nf[c[0]] = {
                        ea: b.ea,
                        Ua: b.Ua
                    }
                }, Oa(a))
            } function lm(a, c, b, d, e) { var f = "object" === typeof a ? a : { id: a, ca: d, nc: e, R: b }; a = N(function (g, h) { var k = h[1], l = k.Ua; k = f[k.ea]; g[h[0]] = l ? l(k) : k; return g }, {}, Oa(c)); rj(a, a.R || {}); return a } function Wr(a) { a = M(a); return sc[a] && sc[a].Yi || null } function pk(a) { a = M(a); return sc[a] && sc[a].Xi } function rj(a, c) { var b = M(a), d = n(c, "__ym.turbo_page"), e = n(c, "__ym.turbo_page_id"); sc[b] || (sc[b] = {}); if (d || e) sc[b].Xi = d, sc[b].Yi = e } function qk(a) { return Ye(a) || Dd(a) || /mobile/i.test(nb(a)) || !W(n(a, "orientation")) }
            function Af(a, c) { if (Xd(a) && c) { var b = nb(a).match(Eg); if (b && b.length) return +b[1] >= c } return !1 } function Bf(a, c) { var b = nb(a); return b && (b = b.match(Xr)) && 1 < b.length ? Fa(b[1]) >= c : !1 } function tg(a) { return I("prerender", A(u(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"])) } function Xa(a, c, b) { var d = W(b); W(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b); return a.Math.floor(a.Math.random() * (c - d)) + d } function Yr() {
                var a = Qa(arguments), c = a[0]; for (a = a.slice(1); a.length;) {
                    var b = a.shift(), d; for (d in b) Nb(b, d) &&
                        (c[d] = b[d]); Nb(b, "toString") && (c.toString = b.toString)
                } return c
            } function Zr(a) { return function (c) { return c ? a(c) : [] } } function rk(a) { return W(a) ? [] : Fg(function (c, b) { c.push([b, a[b]]); return c }, [], sk(a)) } function sk(a) { var c = [], b; for (b in a) Nb(a, b) && c.push(b); return c } function ve(a) { try { return parseInt(a, 10) } catch (c) { return null } } function Wc(a, c) { return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c) } function $r(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b)c[a.length - 1 - b] = a[b];
                return c
            } function ta(a, c) { x(w(Q, Ha("push", a)), c); return a } function Gg(a, c) { return Array.prototype.sort.call(c, a) } function Ze(a) { return a.splice(0, a.length) } function Ca(a) { return a ? R(a) ? a : Yd ? Yd(a) : "number" === typeof a.length && 0 <= a.length ? tk(a) : [] : [] } function as(a, c) { for (var b = 0; b < c.length; b += 1)if (b in c && a.call(c, c[b], b)) return !0; return !1 } function bs(a, c) { return N(function (b, d, e) { d = a(d, e); return b.concat(R(d) ? d : [d]) }, [], c) } function uk(a, c) { return N(function (b, d, e) { b.push(a(d, e)); return b }, [], c) } function cs(a,
                c) { if (!Xd(a)) return !0; try { c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () { throw 1; }) } catch (b) { return !1 } return !0 } function ds(a, c) { for (var b = "", d = 0; d < c.length; d += 1)b += "" + (d ? a : "") + c[d]; return b } function es(a, c) { return 1 <= vk(Ba(a), c).length } function fs(a, c) { for (var b = 0; b < c.length; b += 1)if (a.call(c, c[b], b)) return c[b] } function vk(a, c) { return Fg(function (b, d, e) { a(d, e) && b.push(d); return b }, [], c) } function Cd(a, c, b) { return b ? a : c } function gs(a, c) { return N(function (b, d, e) { return b ? !!a(d, e) : !1 }, !0, c) } function dg(a,
                    c, b) { try { if (P(c)) { var d = Qa(arguments).slice(3); ha(b) ? c.apply(null, d) : c.apply(b, d) } } catch (e) { Qd(a, u(e, Va), 0) } } function Va(a) { throw a; } function Qd(a, c, b) { return Jc("setTimeout", a)(c, b) } function la(a, c) { return Jc("clearTimeout", a)(c) } function Kd() { return [] } function Nc() { return {} } function Jc(a, c) { var b = n(c, a), d = n(c, "constructor.prototype." + a) || b; try { if (d && d.apply) return function () { return d.apply(c, arguments) } } catch (e) { return b } return d } function ob(a, c, b) {
                        return function () {
                            var d = J(arguments[0]), e = b ? "global" :
                                "m1272", f = d.C(e, {}), g = n(f, a); g || (g = v(c), f[a] = g, d.D(e, f)); return g.apply(null, arguments)
                        }
                    } function vd(a, c) { void 0 === c && (c = {}); if (!a || 1 > a.length) return c; Cb(function (b, d, e) { if (e === a.length - 1) return b; e === a.length - 2 ? b[d] = a[e + 1] : Nb(b, d) || (b[d] = {}); return b[d] }, c, a); return c } function Zd(a) { a = a.Ya = a.Ya || {}; var c = a._metrika = a._metrika || {}; return { Ia: function (b, d) { Hg.call(c, b) || (c[b] = d); return this }, D: function (b, d) { c[b] = d; return this }, C: function (b, d) { var e = c[b]; return Hg.call(c, b) || W(d) ? e : d } } } function Nb(a,
                        c) { return ha(a) ? !1 : Hg.call(a, c) } function v(a, c) { var b = [], d = []; var e = c ? c : Q; return function () { var f = Qa(arguments), g = e.apply(void 0, f), h = oe(g, d); if (-1 !== h) return b[h]; f = a.apply(void 0, f); b.push(f); d.push(g); return f } } function Rb(a) { if (Ig) return Ig; var c = !1; try { c = [].indexOf && 0 === [void 0].indexOf(void 0) } catch (d) { } var b = a.Array && a.Array.prototype && pa(a.Array.prototype.indexOf, "indexOf"); a = void 0; return Ig = a = c && b ? function (d, e) { return b.call(e, d) } : hs } function hs(a, c) {
                            for (var b = 0; b < c.length; b += 1)if (c[b] ===
                                a) return b; return -1
                        } function ma(a, c) { return c ? a(c) : a() } function w() { var a = Qa(arguments), c = a.shift(); return function () { var b = c.apply(void 0, arguments); return N(wk, b, a) } } function $f(a, c) { return C([a, c], N) } function Fg(a, c, b) { for (var d = 0, e = b.length; d < e;)c = a(c, b[d], d), d += 1; return c } function fb(a) { return Ha("test", a) } function Ha(a, c) { return H(c[a], c) } function u(a, c) { return H(c, null, a) } function C(a, c) { return H.apply(void 0, je([c, null], a)) } function is(a) {
                            return function () {
                                var c = Qa(arguments); return a.apply(c[0],
                                    [c[1]].concat(c.slice(2)))
                            }
                        } function js() { var a = Qa(arguments), c = a[0], b = a[1], d = a.slice(2); return function () { var e = je(d, Qa(arguments)); if (Function.prototype.call) return Function.prototype.call.apply(c, je([b], e)); if (b) { for (var f = "_b"; b[f];)f += "_" + f.length; b[f] = c; e = b[f] && xk(f, e, b); delete b[f]; return e } return xk(c, e) } } function xk(a, c, b) {
                            void 0 === c && (c = []); b = b || {}; var d = c.length, e = a; P(e) && (e = "d", b[e] = a); var f; d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0],
                                c[1], c[2], c[3])) : f = b[e](); return f
                        } function Qa(a) { if (Yd) try { return Yd(a) } catch (c) { } return tk(a) } function tk(a) { for (var c = a.length, b = [], d = 0; d < c; d += 1)b.push(a[d]); return b } function oa(a) { return !Wa(a) && !W(a) && "[object Object]" === Object.prototype.toString.call(a) } function ha(a) { return W(a) || Wa(a) } function P(a) { return "function" === typeof a } function vb(a) { return function (c) { return function (b) { return a(b, c) } } } function qa(a) { return function (c) { return function (b) { return a(c, b) } } } function wk(a, c) { return c(a) }
            function Kq(a) { return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(hg, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}") } function ks(a) { return "" + a } function db(a, c) { return !(!a || -1 === jb(a, c)) } function Gc(a, c) { return jb(a, c) } function ls(a, c) {
                for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
                    b = a[e] === c[b] ? b + 1 : 0; if (b === c.length) return e -
                        c.length + 1; if (!b && e > d) break
                } return -1
            } function fa(a) { return "string" === typeof a } function pa(a, c) { return Ga(c, a) && a } function Ga(a, c) { var b = $e(a, c); c && !b && Jg.push([a, c]); return b } function $e(a, c) { if (!c || "function" !== typeof c) return !1; try { var b = "" + c } catch (h) { return !1 } var d = b.length; if (d > 35 + a.length) return !1; for (var e = d - 13, f = 0, g = 8; g < d; g += 1) { f = "[native code]"[f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0; if (12 === f) return !0; if (!f && g > e) break } return !1 } function E() { } function Kg(a, c) {
                Kg = Object.setPrototypeOf || { __proto__: [] } instanceof
                Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]) }; return Kg(a, c)
            } function Kc(a) { return !a } function gb(a, c) { return c } function Q(a) { return a } function Na(a, c) { function b() { this.constructor = a } Kg(a, c); a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b) } function je() { for (var a = 0, c = 0, b = arguments.length; c < b; c++)a += arguments[c].length; a = Array(a); var d = 0; for (c = 0; c < b; c++)for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)a[d] = e[f]; return a } function n(a,
                c) { return a ? N(function (b, d) { if (ha(b)) return b; try { return b[d] } catch (e) { } return null }, a, c.split(".")) : null } function ms(a) { return "[object Array]" === Object.prototype.toString.call(a) } function ns() { } function os(a, c) { return function () { a.apply(c, arguments) } } function La(a) { if (!(this instanceof La)) throw new TypeError("Promises must be constructed via new"); if ("function" !== typeof a) throw new TypeError("not a function"); this.Ma = 0; this.Le = !1; this.Qa = void 0; this.Bb = []; yk(a, this) } function zk(a, c) {
                    for (; 3 === a.Ma;)a =
                        a.Qa; 0 === a.Ma ? a.Bb.push(c) : (a.Le = !0, La.Me(function () { var b = 1 === a.Ma ? c.ti : c.xi; if (null === b) (1 === a.Ma ? Lg : $d)(c.promise, a.Qa); else { try { var d = b(a.Qa) } catch (e) { $d(c.promise, e); return } Lg(c.promise, d) } }))
                } function Lg(a, c) { try { if (c === a) throw new TypeError("A promise cannot be resolved with itself."); if (c && ("object" === typeof c || "function" === typeof c)) { var b = c.then; if (c instanceof La) { a.Ma = 3; a.Qa = c; Mg(a); return } if ("function" === typeof b) { yk(os(b, c), a); return } } a.Ma = 1; a.Qa = c; Mg(a) } catch (d) { $d(a, d) } } function $d(a,
                    c) { a.Ma = 2; a.Qa = c; Mg(a) } function Mg(a) { 2 === a.Ma && 0 === a.Bb.length && La.Me(function () { a.Le || La.Bg(a.Qa) }); for (var c = 0, b = a.Bb.length; c < b; c++)zk(a, a.Bb[c]); a.Bb = null } function ps(a, c, b) { this.ti = "function" === typeof a ? a : null; this.xi = "function" === typeof c ? c : null; this.promise = b } function yk(a, c) { var b = !1; try { a(function (d) { b || (b = !0, Lg(c, d)) }, function (d) { b || (b = !0, $d(c, d)) }) } catch (d) { b || (b = !0, $d(c, d)) } } function jk(a, c, b, d, e) { void 0 === e && (e = !1); return Bg(a, c, "", -100, b, d, e) } function Sc(a, c, b) {
                        void 0 === c && (c = "_ym_");
                        void 0 === b && (b = ""); var d = qs(a), e = 1 === (d || "").split(".").length ? d : "." + d, f = b ? "_" + b : ""; return { Gb: function (g, h, k) { jk(a, "" + c + g + f, h || e, k); return this }, C: function (g) { return Be(a, "" + c + g + f) }, D: function (g, h, k, l, m) { Bg(a, "" + c + g + f, h, k, l || e, m); return this } }
                    } function zb(a, c) { if (!c) return null; try { return a.JSON.parse(c) } catch (b) { return null } } function ic(a) { a = "" + a; for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24); return c >>> 0 } function mm(a, c, b, d) {
                        var e = Ak[b]; return e ?
                            function () { var f = Qa(arguments); try { var g = d.apply(void 0, f); var h = J(a); h.Ia("mt", {}); var k = h.C("mt"), l = k[e]; k[e] = l ? l + 1 : 1 } catch (m) { Va(m) } return g } : d
                    } function Uc(a, c) { var b = rs(a); return b ? (b.href = c, { protocol: b.protocol, host: b.host, port: b.port, hostname: b.hostname, hash: b.hash, search: b.search, query: b.search.replace(/^\?/, ""), pathname: b.pathname || "/", path: (b.pathname || "/") + b.search, href: b.href }) : {} } function Bk(a) { return (a = U(a).hash.split("#")[1]) ? a.split("?")[0] : "" } function ss(a, c) {
                        var b = Bk(a); Ck = Lr(a, function () {
                            var d =
                                Bk(a); d !== b && (c(), b = d)
                        }, 200, "t.h"); return H(Kr, null, a, Ck)
                    } function ts(a, c, b, d) { var e, f, g = c.ca, h = c.He, k = c.yc, l = J(a), m = Ka((e = {}, e.wh = 1, e.pv = 1, e)); e = n(d, "isTrusted"); d && !ha(e) && m.D("ite", Bb(e)); ke(g) && a.Ya && a.Ya.Direct && m.D("ad", "1"); h && m.D("ut", "1"); g = l.C("lastReferrer"); d = U(a).href; k = { J: (f = {}, f["page-url"] = k || d, f["page-ref"] = g, f), K: m }; b(k, c)["catch"](D(a, "g.s")); l.D("lastReferrer", d) } function us(a, c, b) {
                        function d() { r || (q = !0, t = !1, r = !0, f()) } function e() { m = !0; k(!1); c() } function f() {
                            la(a, l); if (m) k(!1);
                            else { var L = Math.max(0, b - (t ? y : y + p(Z) - F)); L ? l = T(a, e, L, "u.t.d.c") : e() }
                        } function g() { t = q = r = !0; y += p(Z) - F; F = p(Z); f() } function h() { q || r || (y = 0); F = p(Z); q = r = !0; t = !1; f() } function k(L) { L = L ? O.F : O.xb; L(a, ["blur"], g); L(a, ["focus"], h); L(a.document, ["click", "mousemove", "keydown", "scroll"], d) } var l = 0, m = !1; if (rg(a)) return l = T(a, c, b, "u.t.d"), C([a, l], la); var p = ka(a), q = !1, r = !1, t = !0, y = 0, F = p(Z), O = ja(a); k(!0); f(); return function () { la(a, l); k(!1) }
                    } function mf(a, c, b, d) {
                        return function () {
                            if (Aa(a, c)) {
                                var e = Qa(arguments); return d.apply(void 0,
                                    e)
                            }
                        }
                    } function wb(a, c) { a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] * c[3]; b[2] += b[3] >>> 16; b[3] &= 65535; b[2] += a[2] * c[3]; b[1] += b[2] >>> 16; b[2] &= 65535; b[2] += a[3] * c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] * c[3]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[2] * c[2]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[3] * c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]] } function tc(a,
                        c) { a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] + c[3]; b[2] += b[3] >>> 16; b[3] &= 65535; b[2] += a[2] + c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] + c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] + c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]] } function bd(a, c) { c %= 64; if (32 === c) return [a[1], a[0]]; if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c]; c -= 32; return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c] } function pb(a, c) {
                            c %= 64; return 0 ===
                                c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
                        } function ya(a, c) { return [a[0] ^ c[0], a[1] ^ c[1]] } function Dk(a) { a = ya(a, [0, a[0] >>> 1]); a = wb(a, [4283543511, 3981806797]); a = ya(a, [0, a[0] >>> 1]); a = wb(a, [3301882366, 444984403]); return a = ya(a, [0, a[0] >>> 1]) } function vs(a, c) {
                            void 0 === c && (c = 210); var b = a || "", d = c || 0, e = b.length - b.length % 16; d = { V: [0, d], X: [0, d] }; for (var f = 0; f < e; f += 16) {
                                var g = d, h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) &
                                    255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24], k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24]; h = wb(h, af); h = bd(h, 31); h = wb(h, bf); g.V = ya(g.V, h); g.V = bd(g.V, 27); g.V = tc(g.V, g.X); g.V = tc(wb(g.V, [0, 5]), [0, 1390208809]); k = wb(k, bf); k = bd(k, 33); k = wb(k, af); g.X = ya(g.X, k); g.X = bd(g.X, 31); g.X = tc(g.X, g.V);
                                g.X = tc(wb(g.X, [0, 5]), [0, 944331445])
                            } e = b.length % 16; f = b.length - e; g = [0, 0]; h = [0, 0]; switch (e) {
                                case 15: h = ya(h, pb([0, b.charCodeAt(f + 14)], 48)); case 14: h = ya(h, pb([0, b.charCodeAt(f + 13)], 40)); case 13: h = ya(h, pb([0, b.charCodeAt(f + 12)], 32)); case 12: h = ya(h, pb([0, b.charCodeAt(f + 11)], 24)); case 11: h = ya(h, pb([0, b.charCodeAt(f + 10)], 16)); case 10: h = ya(h, pb([0, b.charCodeAt(f + 9)], 8)); case 9: h = ya(h, [0, b.charCodeAt(f + 8)]), h = wb(h, bf), h = bd(h, 33), h = wb(h, af), d.X = ya(d.X, h); case 8: g = ya(g, pb([0, b.charCodeAt(f + 7)], 56)); case 7: g = ya(g,
                                    pb([0, b.charCodeAt(f + 6)], 48)); case 6: g = ya(g, pb([0, b.charCodeAt(f + 5)], 40)); case 5: g = ya(g, pb([0, b.charCodeAt(f + 4)], 32)); case 4: g = ya(g, pb([0, b.charCodeAt(f + 3)], 24)); case 3: g = ya(g, pb([0, b.charCodeAt(f + 2)], 16)); case 2: g = ya(g, pb([0, b.charCodeAt(f + 1)], 8)); case 1: g = ya(g, [0, b.charCodeAt(f)]), g = wb(g, af), g = bd(g, 31), g = wb(g, bf), d.V = ya(d.V, g)
                            }d.V = ya(d.V, [0, b.length]); d.X = ya(d.X, [0, b.length]); d.V = tc(d.V, d.X); d.X = tc(d.X, d.V); d.V = Dk(d.V); d.X = Dk(d.X); d.V = tc(d.V, d.X); d.X = tc(d.X, d.V); return ("00000000" + (d.V[0] >>> 0).toString(16)).slice(-8) +
                                ("00000000" + (d.V[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.X[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.X[1] >>> 0).toString(16)).slice(-8)
                        } function ae(a, c, b) { var d = c.getAttribute("itemtype"); b = lb('[itemprop~="' + b + '"]', c); return d ? ia(function (e) { return e.parentNode && pc("[itemtype]", a, e.parentNode) === c }, b) : b } function hb(a, c, b) { return (a = ae(a, c, b)) && a.length ? a[0] : null } function ab(a) { if (!a) return ""; a = R(a) ? a : [a]; return a.length ? a[0].getAttribute("content") || Ob(a[0]) : "" } function Ek(a) {
                            return a ? a.attributes &&
                                a.getAttribute("datetime") ? a.getAttribute("datetime") : ab(a) : ""
                        } function zd(a, c, b) { a = c && (db(c.className, "ym-disable-keys") || db(c.className, "-metrika-nokeys")); return b && c ? a || !!wr(["ym-disable-keys", "-metrika-nokeys"], c).length : a } function Lf(a, c) { return Te(c) ? "password" === c.type || c.name && I(c.name.toLowerCase(), Fk) || c.id && I(c.id.toLowerCase(), Fk) : !1 } function Gk(a, c) { var b = Math.max(0, Math.min(c, 65535)); ta(a, [b >> 8, b & 255]) } function Wb(a, c) { ta(a, [c & 255]) } function mb(a, c, b) {
                            return -1 !== Rb(a)(b, ws) ? (Wb(c, b),
                                !1) : !0
                        } function V(a, c) { for (var b = Math.max(0, c | 0); 127 < b;)ta(a, [b & 127 | 128]), b >>= 7; ta(a, [b]) } function Ng(a, c) { V(a, c.length); for (var b = 0; b < c.length; b += 1)V(a, c.charCodeAt(b)) } function Og(a, c) { var b = c; 255 < b.length && (b = b.substr(0, 255)); a.push(b.length); for (var d = 0; d < b.length; d += 1)Gk(a, b.charCodeAt(d)) } function xs(a, c) { var b = []; if (mb(a, b, 27)) return []; V(b, c); return b } function ys(a, c) {
                            var b = Ma(c); if (!b) return c[Ya] = -1, null; var d = +c[Ya]; if (!isFinite(d) || 0 >= d) return null; if (c.attributes) for (var e = c; e;) {
                                if (e.attributes.rj) return null;
                                e = e.parentElement
                            } e = 64; var f = Re(a, c), g = f && f[Ya] ? f[Ya] : 0; 0 > g && (g = 0); b = (b || "").toUpperCase(); var h = zs()[b]; h || (e |= 2); var k = Kj(a, c); k || (e |= 4); var l = Pf(a, c); (f = f ? Pf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8); Cc[d].Af = l[0] + "x" + l[1]; Cc[d].size = l[2] + "x" + l[3]; c.id && "string" === typeof c.id && (e |= 32); f = []; if (mb(a, f, 1)) return null; V(f, d); Wb(f, e); V(f, g); h ? Wb(f, h) : Og(f, b); k && V(f, k); e & 8 || (V(f, l[0]), V(f, l[1]), V(f, l[2]), V(f, l[3])); e & 32 && Og(f, c.id); Wb(f, 0); return f
                        } function As(a, c) {
                            var b =
                                c[Ya]; if (!b || 0 > b || !Nf(c) || !c.form || ni(a, c.form)) return []; var d = Mj(a, c.form); if (0 > d) return []; if (Te(c)) { var e = { text: 0, color: 0, rc: 0, vj: 0, "datetime-local": 0, email: 0, yf: 0, Lj: 0, search: 0, Pj: 0, time: 0, url: 0, month: 0, Rj: 0, password: 2, Kj: 3, tj: 4, file: 6, image: 7 }; e = e[c.type] } else { e = { oj: 1, pj: 5 }; var f = Ma(c); e = W(f) ? "" : e[f] } if ("number" !== typeof e) return []; f = -1; for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)if (g[k].name === c.name) { if (g[k] === c) { f = l; break } l += 1 } if (0 > f) return []; g = []; if (mb(a, g, 7)) return []; V(g, b); V(g,
                                    d); V(g, e); Ng(g, c.name || ""); V(g, f); return g
                        } function Bc(a, c, b) { void 0 === b && (b = []); for (var d = []; c && !Bo(a, c, b); c = Re(a, c))d.push(c); x(function (e) { Cc.counter += 1; var f = Cc.counter; e[Ya] = f; Cc[f] = {}; f = ys(a, e); e = As(a, e); f && e && (ta(b, f), ta(b, e)) }, Bs(d)); return b } function Cs(a) { var c = a.qa; if (!yd || c && !c.fromElement) return ki(a) } function Ds(a) { var c = a.qa; if (c && !c.toElement) return Of(a) } function Hk(a) {
                            var c = Mc(a.qa); if (c && Ae(c)) {
                                var b = ji(a, c), d = b.concat; var e = Db(a.l), f = []; mb(a.l, f, 17) ? a = [] : (V(f, e), V(f, c[Ya]), a = f);
                                return d.call(b, a)
                            }
                        } function Ik(a) { var c = a.l, b = a.qa.target; if (b && Ae(b)) { c = Bc(c, b); var d = c.concat; var e = Db(a.l), f = []; mb(a.l, f, 18) ? a = [] : (V(f, e), V(f, b[Ya]), a = f); return d.call(c, a) } } function Jk(a) {
                            var c = a.l, b = Mc(a.qa); if (!b || Lf(c, b) || zd(c, b)) return []; if (Nf(b)) {
                                var d = J(c).C("isEU"), e = Vc(c, b, d), f = e.Va; d = e.qb; e = e.hb; if (Ue(b)) var g = b.checked; else g = b.value, g = f ? G("", Kk(g.split(""))) : g; c = Bc(c, b); f = c.concat; var h = Db(a.l); d = d && !e; e = []; mb(a.l, e, 39) ? a = [] : (V(e, h), V(e, b[Ya]), Og(e, String(g)), Wb(e, d ? 1 : 0), a = e); return f.call(c,
                                    a)
                            }
                        } function cf(a) {
                            var c = a.l, b = a.qa, d = Mc(b); if (!d || "SCROLLBAR" === d.nodeName) return []; var e = [], f = u(e, ta); d && Ae(d) ? f(ji(a, d)) : f(Bc(c, d)); var g = lj(c, b); f = e.concat; a = Db(a.l); var h = b.type, k = [g.x, g.y]; g = b.which; b = b.button; var l; var m = Se(c, d); var p = m[0]; for (m = m[1]; d && (!p || !m);)if (d = Re(c, d)) m = Se(c, d), p = m[0], m = m[1]; d ? (p = d[Ya], !p || 0 > p ? c = [] : (m = (l = {}, l.mousemove = 2, l.click = 32, l.dblclick = 33, l.mousedown = 4, l.mouseup = 30, l.touch = 12, l)[h]) ? (l = [], d = qg(c, d), mb(c, l, m) ? c = [] : (V(l, a), V(l, p), V(l, Math.max(0, k[0] - d.left)), V(l,
                                Math.max(0, k[1] - d.top)), /^mouse(up|down)|click$/.test(h) && (c = g || b, Wb(l, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = l)) : c = []) : c = []; return f.call(e, c)
                        } function Es(a) {
                            var c = null, b = a.l, d = b.document; if (b.getSelection) { d = void 0; try { d = b.getSelection() } catch (g) { return [] } if (Wa(d)) return []; var e = "" + d; c = d.anchorNode } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement()); if ("string" !== typeof e) return []; try { for (; c && 1 !== c.nodeType;)c = c.parentNode } catch (g) { return [] } if (!c) return []; d =
                                Vc(b, c).Va || zd(b, c, !0); c = c.getElementsByTagName("*"); for (var f = 0; f < c.length && !d;)d = c[f], d = Vc(b, d).Va || zd(b, d, !0), f += 1; if (e !== Pg) return Pg = e, d = d ? G("", Kk(e.split(""))) : e, e = Db(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], mb(a.l, c, 29) ? a = [] : (V(c, e), Ng(c, b), Ng(c, d), a = c), a
                        } function Fs(a) { return cf(a).concat(Es(a) || []) } function Lk(a) {
                            return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) |
                                (a.ctrlKey || a.altKey ? 16 : 0)
                        } function Mk(a) { var c = []; Qg || (Qg = !0, Pg && ta(c, xs(a.l, Db(a.l))), Ub(a.l, function () { Qg = !1 }, "fv.c")); return c } function Nk(a, c, b, d) { c = Mc(c); if (!c || Qf(a, c)) return []; var e = Vc(a, c), f = e.qb, g = e.hb; e = e.Va; var h = J(a); if (!g && (f && h.C("isEU") || zd(a, c))) a = []; else { f = Bc(a, c); g = f.concat; var k = Db(a); h = []; if (mb(a, h, 38)) a = []; else { V(h, k); Gk(h, b); Wb(h, d); a = c[Ya]; if (!a || 0 > a) a = 0; V(h, a); Wb(h, e ? 1 : 0); a = h } a = g.call(f, a) } return a } function Gs(a) {
                            var c = a.l, b = a.qa, d = b.keyCode, e = Lk(b), f = [], g = u(f, ta); if ({
                                3: 1,
                                8: 1, 9: 1, 13: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 27: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 45: 1, 46: 1, 91: 1, 92: 1, 93: 1, 106: 1, 110: 1, 111: 1, 144: 1, 145: 1
                            }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(Nk(c, b, d, e | 16)), Rg = !1, Ub(c, function () { Rg = !0 }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(Mk(a)); return f
                        } function Hs(a) { var c = a.l; a = a.qa; var b = []; Rg && !Sg && 0 !== a.which && (ta(b, Nk(c, a, a.charCode || a.keyCode, Lk(a))), Sg = !0, Ub(c, function () { Sg = !1 }, "fv.kp")); return b } function Ok(a) {
                            var c = a.l, b = Mc(a.qa); if (!b ||
                                ni(c, b)) return []; var d = []; if ("FORM" === b.nodeName) { for (var e = b.elements, f = 0; f < e.length; f += 1)Lj(e[f]) || ta(d, Bc(c, e[f])); a = Db(a.l); e = Mj(c, b); if (0 > e) c = []; else { f = b.elements; var g = f.length; b = []; for (var h = 0; h < g; h += 1)if (!Lj(f[h])) { var k = f[h][Ya]; k && 0 < k && b.push(k) } f = []; if (mb(c, f, 11)) c = []; else { V(f, a); V(f, e); V(f, b.length); for (c = 0; c < b.length; c += 1)V(f, b[c]); c = f } } ta(d, c) } return d
                        } function Is(a) { var c = a.flush; a = Mc(a.qa); "BODY" === Ma(a) && c() } function Tn(a, c) {
                            var b, d = Mc(c), e = Ia.lc, f = Zd(a); if (d && kc("ym-advanced-informer",
                                d)) { var g = f.C("ifc", 0) + 1; f.D("ifc", g); g = d.getAttribute("data-lang"); var h = Fa(d.getAttribute("data-cid") || ""); if (h || 0 === h) (e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.D("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1 }
                        } function th(a, c, b, d) { return function () { var e = Qa(arguments); e = d.apply(void 0, e); return W(e) ? Aa(a, c) : e } } function sh(a, c, b, d) { return D(a, "cm." + b, d) } function km(a, c, b, d, e) {
                            return b.length && e ? C(N(function (f, g, h) {
                                return b[h] ? f.concat(C([a,
                                    c, d], g)) : f
                            }, [], b), w)()(e) : e
                        } var cd = { construct: "Metrika2", callbackPostfix: "2", version: "1gvp3hi7cuop7ko7kjkfjiswv", host: "mc.yandex.ru" }, Jg = [], hg = /\./g, Pk = pa(String.prototype.indexOf, "indexOf"), jb = Pk ? function (a, c) { return Pk.call(a, c) } : ls, Ba = qa(function (a, c) { return a === c }), ud = qa(function (a, c) { a(c); return c }), Da = qa(wk), Wa = Ba(null), W = Ba(void 0), Yd = pa(Array.from, "from"), Qk = pa(Function.prototype.bind, "bind"), H = Qk ? is(Qk) : js, Rk = pa(Array.prototype.reduce, "reduce"), Cb = Rk ? function (a, c, b) { return Rk.call(b, a, c) } :
                            Fg, N = Cb, jr = w, Ie = w(Q, ma), Ig, oe = Rb(window), jn = vb(oe), Hg = Object.prototype.hasOwnProperty, J = v(Zd), S = vb(n), Ua = S("length"), Pc = qa(C), Ui = qa(Ha), Sk = pa(Array.prototype.every, "every"), Ki = Sk ? function (a, c) { return Sk.call(c, a) } : gs, Qb = C([1, null], Cd), Bb = C([1, 0], Cd), Hb = Boolean, Tk = pa(Array.prototype.filter, "filter"), ia = Tk ? function (a, c) { return Tk.call(c, a) } : vk, va = u(Hb, ia), Js = qa(ia), Uk = pa(Array.prototype.find, "find"), tb = Uk ? function (a, c) { return Uk.call(c, a) } : fs, Vk = pa(Array.prototype.includes, "includes"), I = Vk ? function (a,
                                c, b) { return Vk.call(c, a, b) } : es, wc = vb(I), Wk = pa(Array.prototype.join, "join"), G = Wk ? function (a, c) { return Wk.call(c, a) } : ds, Ee = qa(G), Xk = v(function (a) { var c = n(a, "navigator") || {}; a = n(c, "userAgent") || ""; c = n(c, "vendor") || ""; return { pf: -1 < jb(c, "Apple"), mg: a } }), nb = v(S("navigator.userAgent")), Eg = /Firefox\/([0-9]+)/i, Xd = v(function (a) {
                                    var c = n(a, "document.documentElement.style"), b = n(a, "InstallTrigger"); a = -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(Eg); Eg.lastIndex = 0; return !(!(c && "MozAppearance" in c) ||
                                        ha(b)) || a
                                }), Yk = pa(Array.isArray, "isArray"), R = Yk ? function (a) { return Yk(a) } : ms, Zk = pa(Array.prototype.map, "map"), A = Zk && cs(window, Array.prototype.map) ? function (a, c) { return c && 0 < c.length ? Zk.call(c, a) : [] } : uk, x = A, $k = pa(Array.prototype.flatMap, "flatMap"), yc = $k ? function (a, c) { return $k.call(c, a) } : bs, Xb = qa(A), Mr = vb(A), al = pa(Array.prototype.some, "some"), Za = al ? function (a, c) { return al.call(c, a) } : as, Ne = v(Rb), Zc = S("0"), Ks = qa(Gg), bl = pa(Array.prototype.reverse, "reverse"), Bs = bl ? function (a) { return bl.call(a) } : $r, cl =
                                vb(parseInt), Fa = cl(10), Tg = cl(2), dl = pa(Object.keys, "keys"), el = pa(Object.entries, "entries"), Oa = el ? Zr(el) : rk, ca = dl ? function (a) { return dl(a) } : sk, fl = pa(Object.values, "values"), Ls = w(rk, u(S("1"), uk)), yh = fl ? function (a) { return fl(a) } : Ls, z = Object.assign || Yr, ii = qa(function (a, c) { return z({}, a, c) }), rd = v(w(S("String.fromCharCode"), u("fromCharCode", Ga), Kc)), Ye = v(w(nb, fb(/ipad|iphone|ipod/i))), Vf = v(function (a) { return n(a, "navigator.platform") || "" }), Gd = v(function (a) { a = Xk(a); var c = a.mg; return a.pf && !c.match("CriOS") }),
                            Ms = fb(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/), Ns = fb(/; wv\)/), Ed = v(function (a) { a = nb(a); return Ns(a) || Ms(a) }), Os = /Chrome\/(\d+)\./, Ps = v(function (a) { return (a = (n(a, "navigator.userAgent") || "").match(Os)) && a.length ? 76 <= Fa(a[1]) : !1 }), Dd = v(function (a) { var c = (nb(a) || "").toLowerCase(); a = Vf(a); return db(c, "android") && db(c, "mobile") && /^android|linux armv/i.test(a) }), Qs =
                                "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), Rs = v(function (a) { var c = n(a, "navigator.connection.type"); if (W(c)) return null; a = Ne(a)(c, Qs); return -1 === a ? c : "" + a }), rg = v(w(S("document.addEventListener"), Kc)), gl = v(function (a) { var c = n(a, "navigator") || {}; return N(function (b, d) { return b || n(c, d) }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"]) }), Eh = v(function (a) { var c = n(a, "navigator") || {}; a = gl(a); fa(a) || (a = "", c = n(c, "languages.0"), fa(c) && (a = c)); return a.toLowerCase().split("-")[0] }),
                            kb = v(function (a) { return (n(a, "top") || a) !== a }), Ss = v(S("top.contentWindow")), Ts = v(function (a) { var c = !1; try { c = a.navigator.javaEnabled() } catch (b) { } return c }), Us = v(function (a) {
                                var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "), b = n(a, "external"); b = n(b, "toString") ? "" + b.toString() : ""; b = -1 !== jb(b, "Sequentum");
                                var d = n(a, "document.documentElement"), e = ["selenium", "webdriver", "driver"]; return !!(Za(u(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Za(u(n(a, "document"), n), c) || b || d && Za(H(d.getAttribute, d), e))
                            }), Vs = v(function (a) { return !!(Za(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(nb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome")) }), Ws = v(function (a) { return !(!n(a, "ia_document.shareURL") || !n(a, "ia_document.referrer")) }), be = v(function (a) {
                                var c =
                                    nb(a) || "", b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/); b = b ? [+b[1], +b[2]] : [0, 0]; c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/); return 14 <= (c ? +c[1] : 0) ? !0 : (Ye(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Gd(a)
                            }), Xr = /Edg\/(\d+)\./, Qe = v(function (a) { return be(a) || Af(a, 68) || Bf(a, 79) }), Xs = cd.construct, mc = cd.host, Ug = rg(window), Ia = { xg: 24226447, qg: 26302566, Ag: 51533966, mj: 65446441, Ra: "https:", cc: "1272", lc: Xs, wg: Ug ? 512 : 2048, ug: Ug ? 512 : 2048, vg: Ug ? 100 : 400, nj: 100, yg: "noindex" }, ce = [], M = v(function (a) { return a.id + ":" + a.ca }), sc = {}, ke = Ba("1"),
                            Ys = setTimeout; La.prototype["catch"] = function (a) { return this.then(null, a) }; La.prototype.then = function (a, c) { var b = new this.constructor(ns); zk(this, new ps(a, c, b)); return b }; La.prototype["finally"] = function (a) { var c = this.constructor; return this.then(function (b) { return c.resolve(a()).then(function () { return b }) }, function (b) { return c.resolve(a()).then(function () { return c.reject(b) }) }) }; La.all = function (a) {
                                return new La(function (c, b) {
                                    function d(h, k) {
                                        try {
                                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                                var l =
                                                    k.then; if ("function" === typeof l) { l.call(k, function (m) { d(h, m) }, b); return }
                                            } e[h] = k; 0 === --f && c(e)
                                        } catch (m) { b(m) }
                                    } if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array")); var e = Array.prototype.slice.call(a); if (0 === e.length) return c([]); for (var f = e.length, g = 0; g < e.length; g++)d(g, e[g])
                                })
                            }; La.resolve = function (a) { return a && "object" === typeof a && a.constructor === La ? a : new La(function (c) { c(a) }) }; La.reject = function (a) { return new La(function (c, b) { b(a) }) }; La.race = function (a) {
                                return new La(function (c,
                                    b) { if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array")); for (var d = 0, e = a.length; d < e; d++)La.resolve(a[d]).then(c, b) })
                            }; La.Me = "function" === typeof setImmediate && function (a) { setImmediate(a) } || function (a) { Ys(a, 0) }; La.Bg = function (a) { "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a) }; var K = window.Promise, Zs = pa(K, "Promise"), hl = pa(n(K, "resolve"), "resolve"), il = pa(n(K, "reject"), "reject"), jl = pa(n(K, "all"), "all"); if (Zs && hl && il &&
                                jl) { var df = function (a) { return new Promise(a) }; df.resolve = H(hl, K); df.reject = H(il, K); df.all = H(jl, K); K = df } else K = La; var of = [], md = [], X = [], cb = [], Vg = [], uc = [], Ag = wc([26812653]), $s = v(w(S("id"), Ag), M), ac = { id: "id", He: "ut", ca: "type", Td: "ldc", Ta: "nck", yc: "url", nh: "referrer" }, at = /^\d+$/, dd = { id: function (a) { a = "" + (a || "0"); at.test(a) || (a = "0"); try { var c = Fa(a) } catch (b) { c = 0 } return c }, ca: function (a) { return "" + (a || 0 === a ? a : "0") }, Ta: Hb, He: Hb }; ac.nc = "defer"; dd.nc = Hb; ac.R = "params"; dd.R = function (a) { return oa(a) || R(a) ? a : null };
            ac.Ge = "userParams"; ac.ig = "triggerEvent"; dd.ig = Hb; ac.Tf = "sendTitle"; dd.Tf = function (a) { return !!a || W(a) }; ac.Be = "trackHash"; dd.Be = Hb; ac.gg = "trackLinks"; ac.Xg = "enableAll"; var nf = N(function (a, c) { var b = c[0]; a[b] = { ea: c[1], Ua: dd[b] }; return a }, {}, Oa(ac)), Vr = "hash host hostname href pathname port protocol search".split(" "), Dg = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "), nk = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/, Me = v(function (a) {
                return (a ? a.replace(/^www\./,
                    "") : "").toLowerCase()
            }), Gi = v(function (a) { a = U(a).hostname; var c = !1; a && (c = -1 !== a.search(nk)); return c }), kl = w(U, S("protocol"), Ba("https:")), Sr = v(function (a) { return Ps(a) && kl(a) ? "SameSite=None;Secure;" : "" }), Bj = /^\s+|\s+$/g, mk = pa(String.prototype.trim, "trim"), ll = qa(function (a, c) { return c.replace(a, "") }), Yi = ll(/\s/g), Vb = ll(/\D/g), Wd = ["metrika_enabled"], Cg = [], kk = ob("gsc", ik), Tr = /:\d+$/, qs = v(function (a) {
                var c = (U(a).host || "").split("."); return 1 === c.length ? c[0] : N(function (b, d, e) {
                    e += 1; 2 <= e && !b && (e = G(".", c.slice(-e)),
                        pi(a, e) && (b = e)); return b
                }, "", c)
            }), lc = v(Sc), We = v(function (a) { var c = lc(a), b = "1" === c.C("debug"), d = Xe(a, "1") || Xe(a, "2"), e = a._ym_debug; !e && !d || b || (a = U(a), c.D("debug", "1", void 0, a.host)); return !!(b || e || d) }), hk = ob("debuggerEvents", Kd, !0), Pr = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], de, ib = function (a) {
                return function (c, b) {
                    void 0 === b && (b = !1); if (de) var d = new de(c); else Ga("Error", a.Error) ? (de = a.Error, d = new a.Error(c)) : (de = Rr, d = new de(c)); b && (d.unk =
                        !0); return d
                }
            }(window), Qr = fb(/^http./), Or = fb(/^err.kn/), gk = [], Nr = v(function (a) { a = !(!a.addEventListener || !a.removeEventListener); return { Ri: a, F: a ? "addEventListener" : "attachEvent", ga: a ? "removeEventListener" : "detachEvent" } }), bt = v(function (a) { var c = !1; if (!a.addEventListener) return c; try { var b = Object.defineProperty({}, "passive", { get: function () { c = !0; return 1 } }); a.addEventListener("test", E, b) } catch (d) { } return c }), ct = qa(function (a, c) { return a ? z({ capture: !0, passive: !0 }, c || {}) : !!c }), ja = v(function (a) {
                var c = bt(a),
                b = ct(c), d = {}; return z(d, { F: function (e, f, g, h) { x(function (k) { var l = b(h); fk(a, e, k, g, l, !1) }, f); return H(d.xb, d, e, f, g, h) }, xb: function (e, f, g, h) { x(function (k) { var l = b(h); fk(a, e, k, g, l, !0) }, f) } })
            }), ka = v(ig), bk = qa(function (a, c) { for (var b = []; !Vd(c);) { var d = Ir(c); a(d, function (e) { return e(c) }); b.push(d) } return b }), ml = qa(function (a, c) { return Da(function (b, d) { return c(b, function (e) { try { d(a(e)) } catch (f) { b(f) } }) }) }), Wg = qa(function (a, c) { return Da(function (b, d) { return c(b, function (e) { try { a(e)(Ra(b, d)) } catch (f) { b(f) } }) }) }),
                vg = [], wg = !1, ug = !1, nl = qa(function (a, c) { var b = c || {}; return { l: u(b, Q), C: function (d, e) { var f = b[d]; return W(f) && !W(e) ? e : f }, D: function (d, e) { b[d] = e; return this }, Xb: function (d, e) { return "" === e || ha(e) ? this : this.D(d, e) }, Ha: u(b, a) } }), Ka = nl(function (a) { var c = ""; a = Cb(function (b, d) { var e = d[0], f = "" + e + ":" + d[1]; "t" === e ? c = f : b.push(f); return b }, [], Oa(a)); c && a.push(c); return G(":", a) }), Xg, Sj = (Xg = {}, Xg.w = [[function (a, c) {
                    return {
                        N: function (b, d) {
                            var e, f = b.J; f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e); "0" !==
                                c.ca && (f["cnt-class"] = c.ca); b.K || (b.K = Ka()); e = b.K; var g = b.ba; f = { ha: { Ca: "watch/" + c.id }, ba: z(void 0 === g ? {} : g, { Ab: !!e.C("pv") && !e.C("ar") && !e.C("wh") }), J: z(b.J || {}, f) }; z(b, f); d()
                        }
                    }
                }, 1]], Xg), ed = u(Sj, Wj), qb = Ud("w"), Rj = ["webkitvisibilitychange", "visibilitychange"], wf = nl(function (a) { a = Oa(a); return G("", A(function (c) { var b = c[0]; c = c[1]; return Wa(c) ? "" : b + "(" + c + ")" }, a)) }), ol = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                Lq = /^\s*(data|javascript):/i, oj = new RegExp(G("", ["\\.(" + G("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"), Ta, Ak = (Ta = {}, Ta.hit = "h", Ta.params = "p", Ta.reachGoal = "g", Ta.userParams = "up",
                    Ta.trackHash = "th", Ta.accurateTrackBounce = "atb", Ta.notBounce = "nb", Ta.addFileExtension = "fe", Ta.extLink = "el", Ta.file = "fc", Ta.trackLinks = "tl", Ta.destruct = "d", Ta.setUserID = "ui", Ta.getClientID = "ci", Ta.clickmap = "cm", Ta.enableAll = "ea", Ta), dt = v(function () { var a = 0; return function () { return a += 1 } }), et = w(M, dt, ma), mg = {
                        mc: function (a) { a = Zd(a).C("mt", {}); a = Oa(a); return a.length ? N(function (c, b, d) { return "" + c + (d ? "-" : "") + b[0] + "-" + b[1] }, "", a) : null }, clc: function (a) {
                            var c = J(a).C("cls", { kc: 0, x: 0, y: 0 }), b = c.kc, d = c.x; c = c.y;
                            return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                        }, rqnt: function (a, c, b) { a = b.J; return !a || a.nohit ? null : et(c) }
                    }, Br = v(function (a) { Pj(a, "_ymBRC", "1"); var c = "1" !== Oj(a, "_ymBRC"); c || Qj(a, "_ymBRC"); return c }), Pa = v(Nj), fd = v(Nj, function (a, c, b) { return "" + c + b }), ft = v(S("document.documentElement")), gt = v(function (a) { a = n(a, "document") || {}; return ("" + (a.characterSet || a.charset || "")).toLowerCase() }), eb = v(w(S("document"), u("createElement", Jc))), oi = v(function (a) {
                        var c = n(a, "Element.prototype"); return c ?
                            (a = tb(function (b) { var d = c[b]; return !!d && Ga(b, d) }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                    }), ht = Ba("INPUT"), Te = w(Ma, ht), it = Ba("TEXTAREA"), yr = w(Ma, it), jt = Ba("SELECT"), zr = w(Ma, jt), Ue = w(S("type"), fb(/^(checkbox|radio)$/)), Nf = w(Ma, fb(/^INPUT|SELECT|TEXTAREA$/)), Ae = w(Ma, fb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), Rf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "), xr = ["submit", "image", "hidden"], He = v(function () {
                        for (var a = 59, c = {},
                            b = 0; b < ol.length; b += 1)c[ol[b]] = String.fromCharCode(a), a += 1; return c
                    }), Jj = v(function (a) { return { yj: a, ib: null, rb: [] } }), Hj = {}, pg = {}; Hj.p = 500; var Gj = { i: "id", n: "name", h: "href", ty: "type" }; pg.h = !0; pg.c = !0; var ad = {}; ad.p = vf; ad.c = function (a, c, b) { (a = $a(n(c, "textContent"))) && b && (b = b(c), b.length && Za(w(S("textContent"), $a, Ba(a)), b) && (a = "")); Te(c) && (a = $a(c.getAttribute && c.getAttribute("value") || a)); return a }; var gd, og = "button," + G(",", A(function (a) { return 'input[type="' + a + '"]' }, ["button", "submit", "reset", "file"])) +
                        ",a", Zf = u(og, lb), vr = (gd = {}, gd.A = "h", gd.BUTTON = "i", gd.DIV = "i", gd.INPUT = "ty", gd), pl = /\/$/, Fj = ob("r", function (a, c) { var b = Ej(a, c), d = b[0]; return !b[1] && d }), Sd = v(function () { return { Ga: {}, pending: {}, children: {} } }), Yg = S("postMessage"), kt = B("s.f", function (a, c, b, d, e) { c = c(d); var f = Sd(a), g = G(":", [c.meta.rc, c.meta.key]); if (Yg(b)) { f.pending[g] = e; try { b.postMessage(c.ag, "*") } catch (h) { delete f.pending[g]; return } T(a, function () { delete f.pending[g] }, 5E3, "if.s") } }), lt = B("s.fh", function (a, c, b, d, e, f) {
                            var g = null, h = null, k =
                                Sd(a), l = null; try { g = zb(a, f.data), h = g.__yminfo, l = g.data } catch (m) { return } if (!ha(h) && h.substring && "__yminfo" === h.substring(0, 8) && !ha(l) && (g = h.split(":"), 4 === g.length)) if (h = c.id, c = g[1], a = g[2], g = g[3], !R(l) && l.type && "0" === g && l.counterId) { if (!l.toCounter || l.toCounter == h) { k = null; try { k = f.source } catch (m) { } !Wa(k) && Yg(k) && (f = d.T(l.type, [f, l]), e = A(w(Q, ii(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.ag, "*")) } } else g === "" + h && R(l) && ia(function (m) { return !(!m.hid || !m.counterId) }, l).length === l.length &&
                                    (b = k.pending[G(":", [c, a])]) && b.apply(null, [f].concat(l))
                        }), sd = v(function (a, c) {
                            var b, d = Jc("getElementsByTagName", n(a, "document")), e = Sd(a), f = Yg(a), g = wd(a), h = ja(a); if (!d || !f) return null; d = d.call(a.document, "iframe"); f = (b = {}, b.counterId = c.id, b.hid = "" + Fc(a), b); Qe(a) && (f.duid = Td(a, c)); rr(a, g); sr(a); b = tr(a, f); var k = C([a, u([], b)], kt); x(function (l) { var m = null; try { m = l.contentWindow } catch (p) { } m && k(m, { type: "initToChild" }, function (p, q) { g.T("initToParent", [p, q]) }) }, d); kb(a) && k(a.parent, { type: "initToParent" }, function (l,
                                m) { g.T("parentConnect", [l, m]) }); h.F(a, ["message"], C([a, c, b, g, f], lt)); return { $: g, Ga: e.Ga, children: e.children, pe: k }
                        }, w(gb, M)), td = v(function (a, c) { if (!Qe(a) || !kb(a)) return Td(a, c); var b = sd(a, c); return b && b.Ga[c.id] ? b.Ga[c.id].info.duid || Td(a, c) : Td(a, c) }, function (a, c) { return "{" + c.Td + c.Ta }), mt = v(w(ka, Da(function (a) { return -(new a.l.Date).getTimezoneOffset() }))), nt = w(ka, Da(function (a) { a = new a.l.Date; return G("", A(Jr, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()])) })),
                        ot = w(ka, Da(ng)), ql = v(w(ka, Da(function (a) { return a.Ba[0] }))), pt = v(function (a) { a = J(a); var c = a.C("counterNum", 0) + 1; a.D("counterNum", c); return c }, w(gb, M)), ra, Rd = (ra = {}, ra.vf = u(cd.version, Q), ra.nt = Rs, ra.fu = function (a, c, b) { var d = b.J; if (!d) return null; c = (n(a, "document.referrer") || "").replace(pl, ""); b = (d["page-ref"] || "").replace(pl, ""); d = d["page-url"]; a = U(a).href !== d; c = c !== b; b = 0; a && c ? b = 3 : c ? b = 1 : a && (b = 2); return b }, ra.en = gt, ra.la = gl, ra.ut = function (a, c, b) {
                            var d = b.M; b = b.J; d = d && d.Jc; b && (Gi(a) || c.He || d) && (b.ut =
                                Ia.yg); return null
                        }, ra.v = u(Ia.cc, Q), ra.cn = pt, ra.dp = function (a) { var c = J(a), b = c.C("bt", {}); if (W(c.C("bt"))) { var d = n(a, "navigator.getBattery"); try { b.p = d && d.call(a.navigator) } catch (e) { } c.D("bt", b); b.p && b.p.then && b.p.then(D(a, "bi:dp.p", function (e) { b.fj = n(e, "charging") && 0 === n(e, "chargingTime") })) } return Bb(b.fj) }, ra.ls = v(function (a, c) { var b = fd(a, c.id), d = ka(a), e = b.C("lsid"); return +e ? e : (d = Xa(a, 0, d(Z)), b.D("lsid", d), d) }, gb), ra.hid = Fc, ra.phid = function (a, c) {
                            if (!kb(a)) return null; var b = sd(a, c); if (!b) return null;
                            var d = ca(b.Ga); return d.length ? b.Ga[d[0]].info.hid : null
                        }, ra.z = mt, ra.i = nt, ra.et = ot, ra.c = w(S("navigator.cookieEnabled"), Qb), ra.rn = w(Q, Xa), ra.rqn = function (a, c, b) { b = b.J; if (!b || b.nohit) return null; c = M(c); a = fd(a, c); c = (a.C("reqNum", 0) || 0) + 1; a.D("reqNum", c); if (a.C("reqNum") === c) return c; a.Gb("reqNum"); return null }, ra.u = td, ra.w = function (a) { a = Rc(a); return a[0] + "x" + a[1] }, ra.s = function (a) { var c = n(a, "screen"); if (c) { a = n(c, "width"); var b = n(c, "height"); c = n(c, "colorDepth") || n(c, "pixelDepth"); return G("x", [a, b, c]) } return null },
                            ra.sk = S("devicePixelRatio"), ra.ifr = w(kb, Qb), ra.j = w(Ts, Qb), ra.sti = function (a) { return kb(a) && Ss(a) ? "1" : null }, ra), qr = v(function () { return ta(ca(Rd), ca(mg)) }), pr = v(Nc, M), Cj = v(function () { return { Ye: null, wa: [] } }, M), mr = /^[a-z][\w.+-]+:/i, Zg, Zb = [[Ve, 1], [Pe, 2], [Sb(), 3], [Dj, 4]], lg = [], xb = u(Zb, Xj), Yb = (Zg = {}, Zg.h = Zb, Zg), aa = u(Yb, Wj); xb(function (a) {
                                return {
                                    N: function (c, b) {
                                        var d = c.J; if (!c.K || !d) return b(); var e = d["page-ref"], f = d["page-url"]; e && f !== e ? d["page-ref"] = Aj(a, e) : delete d["page-ref"]; d["page-url"] = Aj(a, f).slice(0,
                                            Ia.wg); return b()
                                    }
                                }
                            }, -100); var hr = /[^a-z0-9.:-]/, $g, ah = {}, rl = va([jg && [jg, 0], Fb && [Fb, 1], [Gb, 2], Pd && [Pd, 3], [$c, 4]]), vc = va([jg, Fb, Gb, Pd, $c]), bh = [Gb]; bh.unshift(Fb); bh.push(Pd); var sl = va(bh), hd = va([$c]); va([Fb, Gb]); var qt = va([Fb, $c]), tl = va([Fb, Gb, Pd, $c]), za = ($g = {}, $g.h = sl, $g), ch = v(function (a, c) { var b = ah["*"] ? ah["*"] : c && ah[c]; b || (b = c ? za[c] || [] : vc); b = N(function (d, e) { var f = e(a); if (f) { var g = tb(w(Zc, Ba(e)), rl); g && d.push([g[1], f]) } return d }, [], b); b.length || ie(); return b }, gb), dh, rt = H(K.reject, K, Sa()), Ea = (dh =
                                {}, dh.h = qb, dh), wa = B("g.sen", function (a, c, b) { var d = ch(a, c); b = b ? lr(a, c, b) : []; var e = Ea[c], f = e ? e(a, d, b) : qb(a, d, b); return function () { var g = Qa(arguments), h = g[0]; g = g.slice(1); var k = h.ba; h = z(h, { ba: z(void 0 === k ? {} : k, { ia: [c] }) }); return f.apply(null, [h].concat(g)) } }, rt), $q = qa(function (a, c) { if (!c[a]) { var b, d = new K(function (e) { b = e }); c[a] = { Hf: b, promise: d, If: !1 } } return c[a].promise }), xj = v(w(Nc, Da)), st = B("dc.init", function (a, c) { return c && Ag(ve(c.split(":")[0])) ? { log: E, warn: E, error: E } : Zq(a, c) }), qc = v(st, gb), ea, ef =
                                    /{(\w+)}/g, ul = (ea = {}, ea.gbn = "Button goal. Counter {id}. Button: {query}.", ea.gbi = "Button goal. Counter {id}. Init.", ea["gbi.p"] = "Button goal. Counter {id}. Init. Params: ", ea.dc = "Duplicate counter {key} initialization", ea.clel = "Empty link", ea.fpeo = "First party params error. Empty object.", ea.fpno = "First party params error. Not an object.", ea.fgi = "Form goal. Counter {id}. Init.", ea["fgi.p"] = "Form goal. Counter {id}. Init. Params: ", ea.fg = "Form goal. Counter {id}. Form: {query}.", ea["fg.p"] = "Form goal. Counter {id}. Form: {query}. Params: ",
                                        ea.gr = "Reach goal. Counter: {id}. Goal id: {goal}", ea["gr.p"] = "Reach goal. Counter: {id}. Goal id: {goal}. Params: ", ea.h = "PageView. Counter {id}. URL: {url}. Referrer: {ref}", ea["h.p"] = "PageView. Counter {id}. URL: {url}. Referrer: {ref}. Params: ", ea.lcl = "{prefix}. Counter {id}. Url: {url}", ea["lcl.p"] = "{prefix}. Counter {id}. Url: {url}. Params: ", ea.ns = "Not supported", ea.nnw = 'Function "{name}" has been overridden, this may cause issues with Metrika counter', ea.nbnc = '"callback" argument missing',
                                        ea.nci = "No counter instance found", ea.pv = "PageView. Counter {id}. URL: {url}. Referrer: {ref}", ea["pv.p"] = "PageView. Counter {id}. URL: {url}. Referrer: {ref}. Params: ", ea.pa = "Params. Counter {id}", ea["pa.p"] = "Params. Counter {id}. Params: ", ea.pau = "Set user id {uid}", ea["pau.p"] = "Set user id {uid}. Params: ", ea.paup = "User params. Counter {id}", ea["paup.p"] = "User params. Counter {id}. Params: ", ea.wuid = "Incorrect user ID", ea.wup = "Wrong user params", ea), nm = B("h.p", function (a, c) {
                                            var b, d, e = wa(a, "h",
                                                c), f = c.yc || "" + U(a).href, g = c.nh || a.document.referrer, h = { K: Ka((b = {}, b.pv = 1, b)), J: (d = {}, d["page-url"] = f, d["page-ref"] = g, d), M: {} }; h.M.R = c.R; h.M.Ge = c.Ge; c.nc && h.J && (h.J.nohit = "1"); return e(h, c).then(function (k) { var l; k && (c.nc || oc(a, c, "h", (l = {}, l.id = c.id, l.url = f, l.ref = g, l), c.R)(), Ub(a, C([a, c, k], ar))) })["catch"](D(a, "h.g.s"))
                                        }), eh = ["yandex_metrika_callback" + cd.callbackPostfix, "yandex_metrika_callbacks" + cd.callbackPostfix], tt = B("cb.i", function (a) {
                                            var c = eh[0], b = eh[1]; if (P(a[c])) a[c](); "object" === typeof a[b] &&
                                                x(function (d, e) { a[b][e] = null; dg(a, d) }, a[b]); x(function (d) { try { delete a[d] } catch (e) { a[d] = void 0 } }, eh)
                                        }), Yq = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/, vl = v(function (a) { return !!n(a, "crypto.subtle.digest") && !!n(a, "TextEncoder") && !!n(a, "FileReader") && !!n(a, "Blob") }), ut = B("fpm", function (a, c) {
                                            if (!kl(a)) return E; var b = M(c); if (!vl(a)) return Mb(a, b, "ns"), E; var d = Aa(a, c); return d ? function (e) {
                                                return (new K(function (f, g) {
                                                    return oa(e) ? ca(e).length ? f(uj(a, e).then(function (h) {
                                                        var k, l; h && h.length && d.params((k = {}, k.__ym = (l =
                                                            {}, l.fpp = h, l), k))
                                                    }, E)) : g(Sa("fpm.l")) : g(Sa("fpm.o"))
                                                }))["catch"](D(a, "fpm.en"))
                                            } : E
                                        }), ff = qa(function (a, c) { var b = {}; gg(a)(function (d) { b = d[c] || {} }); return b }), vt = B("c.c.cc", function (a) { var c = J(a), b = w(ff(a), function (d) { var e, f = (e = {}, e.clickmap = !!d.clickmap, e); return z({}, d, f) }); return D(a, "g.c.cc", w(H(c.C, c, "counters", {}), ca, Xb(b))) }), wt = B("gt.c.rs", function (a, c) { var b, d = M(c), e = c.id, f = c.ca, g = c.Ng, h = c.Be, k = C([a, d], Tq); fg(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b)); return k }), sj = v(Kd), Nd =
                                    v(Nc, M), xt = B("pa.int", function (a, c) {
                                        var b; return b = {}, b.params = function () {
                                            var d, e, f, g = Qa(arguments), h = Sq(g); if (!h) return null; g = h.Sg; var k = h.R; h = h.ec; if (!oa(k) && !R(k)) return null; var l = wa(a, "1", c), m = Nd(c).url, p = !$s(c), q = "pa", r = (d = {}, d.id = c.id, d); d = k; var t = ""; if (t = n(k, "__ym.user_id")) q = "pau", r.uid = t; I("__ymu", ca(k)) && (q = "paup"); d.__ym && (d = z({}, k), d.__ym = N(function (y, F) { var O = n(k, "__ym." + F); O && (y[F] = O); return y }, {}, ce), ca(d.__ym).length || delete d.__ym, p = !!ca(d).length); d = t ? void 0 : JSON.stringify(d);
                                            d = oc(a, c, q, r, d); l = l({ M: { R: k }, K: Ka((e = {}, e.pa = 1, e.ar = 1, e)), J: (f = {}, f["page-url"] = m || U(a).href, f) }, c).then(p ? d : E); return Yc(a, "p.s", l, h, g)
                                        }, b
                                    }), ue = v(qj, w(gb, M)), yt = B("y.p", function (a, c) { var b = qj(a, c); if (b) { var d = qe(a), e = C([a, b, c], Oq); Gh(a, d, function (f) { f.F(["params"], e) }); b.$.F(["params"], w(S("1"), e)) } }), rs = v(function (a) { if (a = eb(a)) return a("a") }), wl = { Cj: fb(/[/&=?#]/) }, Je = B("go.in", function (a, c, b, d) {
                                        var e; void 0 === b && (b = "goal"); return e = {}, e.reachGoal = function (f, g, h, k) {
                                            var l, m, p; if (!f || wl[b] && wl[b](f)) return null;
                                            var q = g, r = h || E; P(g) && (r = g, q = void 0, k = h); var t = oc(a, c, "gr", (l = {}, l.id = c.id, l.goal = f, l), q), y = "goal" === b; g = wa(a, "g", c); l = Nq(a, c, f, b); h = l[0]; l = l[1]; q = g({ M: { R: q }, K: Ka((m = {}, m.ar = 1, m)), J: (p = {}, p["page-url"] = h, p["page-ref"] = l, p) }, c).then(function () { var F, O; y && t(); ub(a, (F = {}, F.counterKey = M(c), F.name = "event", F.data = (O = {}, O.schema = b, O.name = f, O), F)); d && d() }); return Yc(a, "g.s", q, r, k)
                                        }, e
                                    }), zt = B("guid.int", function (a, c) { var b; return b = {}, b.getClientID = function (d) { var e = Td(a, c); d && dg(a, d, null, e); return e }, b }), Ck,
                                At = B("th.e", function (a, c) { function b() { g || (k = Nb(a, "onhashchange") ? ja(a).F(a, ["hashchange"], h) : ss(a, h)) } var d, e = wa(a, "t", c), f = Oe(a, M(c)), g = !1, h = D(a, "h.h.ch", H(ts, null, a, c, e)), k = E; c.Be && (b(), g = !0); e = D(a, "tr.hs.h", function (l) { var m; l ? b() : k(); g = !!l; f((m = {}, m.trackHash = g, m)) }); return d = {}, d.trackHash = e, d.u = k, d }), Bt = qa(function (a, c) { fa(c) ? a.push(c) : x(w(Q, Ha("push", a)), c) }), Md = ob("retryReqs", function (a) {
                                    var c = Pa(a), b = c.C("retryReqs", {}), d = ka(a)(Z); x(function (e) {
                                        var f = e[0]; e = e[1]; (!e || !e.time || e.time + 864E5 <
                                            d) && delete b[f]
                                    }, Oa(b)); c.D("retryReqs", b); return b
                                }, !0), fh = w(Gc, Ba(0)), xl = vb(fh), Ct = [xl("watch"), xl("clmap")], Dt = B("g.r", function (a) {
                                    var c = ka(a), b = Md(a), d = c(Z), e = Fc(a); return Cb(function (f, g) {
                                        var h = g[0], k = g[1]; k && Za(Da(k.resource), Ct) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = { protocol: k.protocol, host: k.host, Ca: k.resource, Ci: k.postParams, R: k.params, Fg: k.browserInfo, Aj: k.ghid, time: k.time, Ub: Fa(h), Qg: k.counterId, ca: k.counterType }, k.telemetry &&
                                            (h.Ja = k.telemetry), f.push(h)); return f
                                    }, [], Oa(b))
                                }), Et = B("nb.p", function (a, c) {
                                    function b(F) { l() || (F = "number" === typeof F ? F : 15E3, y = us(a, d(!1), F), m()) } function d(F) {
                                        return function (O) {
                                            var L, na, xa; void 0 === O && (O = (L = {}, L.ctx = {}, L.callback = E, L)); if (F || !r && !k.Md) {
                                                r = !0; m(); y && y(); var Eb = p(Z); L = (Fa(k.C("lastHit")) || 0) < Eb - 18E5; var Jd = .1 > Math.random(); k.D("lastHit", Eb); Eb = Ka((na = {}, na.nb = 1, na.cl = t, na.ar = 1, na)); na = Nd(c); na = { J: (xa = {}, xa["page-url"] = na.url || U(a).href, xa), K: Eb, M: { force: F } }; xa = qc(a, M(c)).warn; !O.callback &&
                                                    O.ctx && xa("nbnc"); (xa = F || L || Jd) || (xa = a.location.href, L = a.document.referrer, xa = !(xa && L ? pj(xa) === pj(L) : !xa && !L)); if (xa) return xa = g(na, c), Yc(a, "l.o.l", xa, O.callback, O.ctx)
                                            } return null
                                        }
                                    } var e, f, g = wa(a, "n", c), h = M(c), k = fd(a, c.id), l = u(u(h, ff(a)), w(ma, S("accurateTrackBounce"))), m = u((e = {}, e.accurateTrackBounce = !0, e), Oe(a, h)), p = ka(a), q = p(Z), r = !1, t = 0, y; sa(c, function (F) { t = F.gh - q }); c.Ne && b(c.Ne); e = (f = {}, f.notBounce = d(!0), f.u = y, f); e.accurateTrackBounce = b; return e
                                }), Gq = qa(kc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                                Ft = B("clm.p", function (a, c) {
                                    if (rd(a)) return E; var b = wa(a, "m", c), d = M(c), e = ka(a), f = e(Z), g = u(u(d, ff(a)), w(ma, S("clickmap"))), h, k = null; d = D(a, "clm.p.c", function (l) {
                                        var m = g(); if (m) {
                                            var p = J(a), q = p.C("cls", { kc: 0, x: 0, y: 0 }); p.D("cls", { kc: q.kc + 1, x: q.x + l.clientX, y: q.y + l.clientY }); p = "object" === typeof m ? m : {}; q = p.filter; m = p.isTrackHash || !1; var r = A(function (y) { return ("" + y).toUpperCase() }, p.ignoreTags || []); W(h) && (h = p.quota || null); var t = !!p.quota; l = { element: Hq(a, l), position: lj(a, l), button: Iq(l), time: e(Z) }; p = U(a).href;
                                            if (Fq(a, l, k, r, q)) { if (t) { if (!h) return; --h } r = Se(a, l.element); q = r[0]; r = r[1]; t = qg(a, l.element); q = ["rn", Xa(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", vf(a, l.element), "X", l.position.x, "Y", l.position.y]; q = G(":", q); m && (q += ":wh:1"); Eq(a, p, q, b, c); k = l }
                                        }
                                    }); return ja(a).F(n(a, "document"), ["click"], d)
                                }), Gt = B("trigger.in", function (a, c) { c.ig && Ub(a, C([a, "yacounter" + c.id + "inited"], Ar), "t.i") }), Ht = B("c.m.p", function (a, c) {
                                    var b,
                                    d = M(c); return b = {}, b.clickmap = u(Oe(a, d), Dq), b
                                }), Ni = u("form", pc), lq = u("form", lb), Cq = v(w(gb, vb(sa)(S("settings.form_goals"))), gb), It = B("s.f.i", function (a, c) { var b = [], d = [], e = ja(a); b.push(e.F(a, ["click"], D(a, "s.f.c", C([a, c, d], Bq)))); b.push(e.F(a, ["submit"], D(a, "s.f.e", function (f) { var g = n(f, "target"); f = n(f, "isTrusted"); ij(!0, a, c, d, g, f) }))); jj(a, c, "fgi"); return C([Ie, b], x) }), Jt = B("s.f.i", function (a, c) {
                                    return sa(c, function (b) {
                                        var d; if (n(b, "settings.button_goals")) return b = ja(a).F(a, ["click"], D(a, "c.t.c",
                                            w(C([a, c], mf(a, c, "", Aq))))), oc(a, c, "gbi", (d = {}, d.id = c.id, d))(), b
                                    })
                                }), bc, ee, gh, id, Ib, ag = (bc = {}, bc.transaction_id = "id", bc.item_brand = "brand", bc.index = "position", bc.item_variant = "variant", bc.value = "revenue", bc.item_category = "category", bc.item_list_name = "list", bc), nc = (ee = {}, ee.item_id = "id", ee.item_name = "name", ee.promotion_name = "coupon", ee), zq = (gh = {}, gh.promotion_name = "name", gh), yl = (id = {}, id.promotion_name = "name", id.promotion_id = "id", id.item_id = "product_id", id.item_name = "product_name", id), wq = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "),
                                xq = (Ib = {}, Ib.view_item = { event: "detail", za: nc, La: "products" }, Ib.add_to_cart = { event: "add", za: nc, La: "products" }, Ib.remove_from_cart = { event: "remove", za: nc, La: "products" }, Ib.begin_checkout = { event: "checkout", za: nc, La: "products" }, Ib.purchase = { event: "purchase", za: nc, La: "products" }, Ib.view_item_list = { event: "impressions", za: nc }, Ib.select_item = { event: "click", La: "products", za: nc }, Ib.view_promotion = { event: "promoView", La: "promotions", za: yl }, Ib.select_promotion = { event: "promoClick", La: "promotions", za: yl }, Ib), hj =
                                    B("dl.w", function (a, c, b) { function d() { var g = n(a, c); (e = R(g) && Od(a, g, b)) || (f = T(a, d, 1E3, "ec.dl")) } var e, f = 0; d(); return function () { return la(a, f) } }), Kt = B("p.e", function (a, c) { var b = Aa(a, c); if (b) { var d = J(a); b = b.params; var e = D(a, "h.ee", C([a, M(c), b], uq)); return c.ud ? (d.D("ecs", 0), gj(a, c.ud, e)) : sa(c, function (f) { if ((f = n(f, "settings.ecommerce")) && fa(f)) return d.D("ecs", 1), gj(a, f, e) }) } }), dj = v(function (a) { return G("[^\\d<>]*", a.split("")) }), Kn = v(function (a) { return new RegExp(dj(a), "g") }), rq = /\S/, Xi = u(["style",
                                        "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], vd), zl = v(function (a) { return rd(a) || !pd(a) }), Lt = B("phc.h", function (a, c) { if (!qk(a) && !zl(a)) return sa(c, function (b) { if (!n(b, "settings.phchange")) { var d = Pa(a), e = db(U(a).search, "_ym_hide_phones=1") || d.C("_ym_hide_phones", 0); b = n(b, "settings.phhide"); e && !b && (b = ["*"], d.D("_ym_hide_phones", 1)); b && Pi(a, c, b) } })["catch"](D(a, "phc.hs")) }), Al = v(function (a) {
                                            a = U(a); a = Ur(a.search.substring(1)); a["_ym_status-check"] = a["_ym_status-check"] ||
                                                ""; a._ym_lang = a._ym_lang || "ru"; return a
                                        }), Si = w(Al, S("_ym_status-check"), Fa), Mt = w(Al, S("_ym_lang")), iq = /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, jq = /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|by|kz|com|com\.tr)\/?$/, Ri = fb(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/), nq = ["form", "button", "phone", "status"], hh = [], kq = v(function (a, c, b) {
                                            x(w(Pc([a, c, b]), ma), hh); if (b.inline) {
                                                c =
                                                Qi(b); var d = b.data; b = b.id; Mi(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d)
                                            } else b.resource && Ri(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, oq(a, b.resource))
                                        }, function (a, c, b) { return b.id }), Nt = B("cs.init", function (a, c) { var b, d = Si(a); if (d && c.id === d && "0" === c.ca) { var e = Qi((b = {}, b.lang = Mt(a), b.fileId = "status", b)); T(a, C([a, e, "" + d], Mi), 0, "cs") } }), Ot = B("suid.int", function (a, c) {
                                            var b; return b = {}, b.setUserID = function (d, e, f) {
                                                if (fa(d) || Wc(a, d)) {
                                                    var g = Aa(a, c);
                                                    d = vd(["__ym", "user_id", d]); g.params(d, e || E, f)
                                                } else qc(a, M(c)).error("wuid")
                                            }, b
                                        }), Xc = { position: "absolute" }, Li = { position: "fixed" }, Yf = { borderRadius: "50%" }, Pt = ob("siteStatistics", function (a, c) { if (!qk(a)) return Pb(a)(Ra(E, C([c, w(S("settings.sm"), Ba(1), C([C([a, c.id], gq), E], Cd), ma)], sa))) }), Qt = B("up.int", function (a, c) { var b; return b = {}, b.userParams = D(a, "up.c", function (d, e, f) { var g, h = Aa(a, c), k = qc(a, M(c)).warn; h ? oa(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || E, f)) : k("wup") : k("nci") }), b }), Rt = /[\*\.\?\(\)]/g,
                                St = v(function (a, c, b) { var d; try { var e = b.replace("\\s", " ").replace(Rt, ""); qc(a, "").warn("nnw", (d = {}, d.name = e, d)) } catch (f) { } }, gb), Tt = B("r.nn", function (a) { We(a) && Od(a, Jg, function (c) { c.ra.F(function (b) { St(a, b[1], b[0]); Jg.splice(100) }) }) }), Ut = B("e.a.p", function (a, c) { var b, d = Aa(a, c); d = C([w(Q, Da(!0)), va(A(u(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], A); c.Xg && d(); return b = {}, b.enableAll = d, b }), Vt = v(Nc, M), Wt = B("fpi", function (a) {
                                    var c = Fd(a); if (c && !a.document.hidden) {
                                        var b = J(a).Ia; b("fpe", 1); var d =
                                            ja(a).F(a, ["visibilitychange", "webkitvisibilitychange"], function () { a.document.hidden && (b("fht", c.now()), d()) })
                                    }
                                }), Bl = v(function (a) { a = n(a, "console"); var c = n(a, "log"); c = $e("log", c) ? H(c, a) : E; var b = n(a, "warn"); b = $e("warn", b) ? H(b, a) : c; var d = n(a, "error"); a = $e("error", d) ? H(d, a) : c; return { log: c, error: a, warn: b } }), Xt = B("cr", function (a) {
                                    if (We(a)) {
                                        var c = hk(a), b = Bl(a); Od(a, c, function (d) {
                                            d.ra.F(function (e) {
                                                if ("log" === e.name) {
                                                    var f = A(function (g) {
                                                        if (fa(g)) {
                                                            var h = e.data.variables; var k = ul[g]; if (k) {
                                                                if (h) {
                                                                    ef.lastIndex =
                                                                    0; for (var l = ef.exec(k); l;) { g = l[1]; if (Nb(h, g)) { var m = g.length + 2; l = l.index; k = "" + k.substring(0, l) + h[g] + k.substring(l + m, k.length); ef.lastIndex = m + l } l = ef.exec(k) }
                                                                } h = k
                                                            } else h = g
                                                        } else h = g; return h
                                                    }, e.data.args); b[e.data.type].apply(b, f)
                                                }
                                            })
                                        })
                                    }
                                }), Jb, Yt = (Jb = {}, Jb.ecomeo = "Ecommerce data should be an object", Jb.ecomgei = "Ecommerce data should contain 'goods' non-empty array", Jb.ecomgi = "All items in 'goods' should be objects and contain 'id' or 'name' field", Jb.ecompi = "Purchase object should contain string or number 'id' field",
                                    Jb.pcs = "Warning: content has only {chars} chars. Required {limit}", Jb.pdf = "Publisher content info found: ", Jb.pfi = "Warning: invalid value {value} in {itemField} in field {field}, this item will be ignored", Jb.ps = 'Publishers analytics schema "{schema}"', Jb.w2mo = "MutationObserver is overridden, webvisor is not guaranteed to work in this environment", Jb), Zt = u("add", Fe), $t = u("remove", Fe), au = u("detail", Fe), bu = u("purchase", Fe), cu = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                                tf = v(function (a) { var c = Xk(a); a = c.mg; if (!c.pf) return !1; c = Ha("indexOf", a); c = Za(w(c, Ba(-1), Kc), cu); var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a), d = /YaBrowser\/[\d.]+/.test(a), e = /Mobile/.test(a); return c || b || d && e || !/Safari/.test(a) && e }), mn = v(function (a) { var c = nb(a); return c ? db(c, "YangoEats") || Ed(a) : !1 }), eq = /([0-9\\.]+) Safari/, du = /\sYptp\/\d\.(\d+)\s/, Cl = v(function (a) { var c; a: { if ((c = nb(a)) && (c = du.exec(c)) && 1 < c.length) { c = Fa(c[1]); break a } c = 0 } return 50 <= c && 99 >= c || Bf(a, 79) ? !1 : !be(a) || tf(a) }),
                                Dl = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                                eu = v(function (a) { a = eb(a)("canvas"); var c = n(a, "getContext"); if (!c) return null; try { var b = H(c, a)("2d"); b.font = "72px mmmmmmmmmmlli"; var d = b.measureText("mmmmmmmmmmlli").width; return function (e) { b.font = "72px " + e; return b.measureText("mmmmmmmmmmlli").width === d } } catch (e) { return null } }), El = pa(String.prototype.repeat, "repeat"), fi = El ? function (a, c) { return El.call(a, c) } : bq, $h = u(!0, function (a, c, b, d) { b = c.length && (b - d.length) / c.length; if (0 >= b) return d; c = fi(c, b); return a ? c + d : d + c }), af = [2277735313, 289559509], bf = [1291169091,
                                    658871167], fu = B("p.cd", function (a) { if (Dd(a) || Ye(a)) { var c = Pa(a); if (ha(c.C("jn"))) { c.D("jn", !1); var b = a.chrome || Gd(a) ? function () { } : /./; a = Bl(a); b.toString = function () { c.D("jn", !0); return "Yandex.Metrika counter is initialized" }; a.log("%c%s", "color: inherit", b) } } }), gu = v(function (a) { a = n(a, "navigator.plugins"); return !!(a && Ua(a) && Za(w(S("name"), fb(/Chrome PDF Viewer/)), a)) }), cc = qa(function (a, c) { return J(c).C(a, null) }), Zp = { "*": "+", "-": "/", qj: "=", "+": "*", "/": "-", "=": "_" }, hu = v(function (a) {
                                        return P(n(a, "yandex.getSiteUid")) ?
                                            a.yandex.getSiteUid() : null
                                    }), iu = v(u("panoramaId", De)), ju = v(function (a) { return De("pubcid.org", a) || De("_pubCommonId", a) }), ku = v(u("_sharedid", De)), lu = v(function (a, c) { if (c.Ta) return null; var b = Sc(a, "").C("_ga"); return b && nd(ne(b)) }, w(gb, M)), Vp = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function (a, c) { return n(c, "redirectCount") || n(a, "navigation.redirectCount") }],
                                    ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]], yb, Up = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd",
                                        "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]], Ii = (yb = {}, yb.responseEnd = 1, yb.domInteractive = 1, yb.domContentLoadedEventStart = 1, yb.domContentLoadedEventEnd = 1, yb.domComplete = 1, yb.loadEventStart = 1, yb.loadEventEnd = 1, yb.unloadEventStart = 1, yb.unloadEventEnd = 1, yb.secureConnectionStart = 1, yb), Xp = v(Kd), Rp = v(Nc), Sp = v(function (a) {
                                            var c = n(a, "webkitRequestFileSystem"); if (P(c) && !Dd(a)) return (new K(H(c, a, 0, 0))).then(function () {
                                                var d =
                                                    n(a, "navigator.storage") || {}; return d.estimate ? d.estimate() : {}
                                            }).then(function (d) { return (d = d.quota) && 12E7 > d ? !0 : !1 })["catch"](u(!0, Q)); if (Xd(a)) return c = n(a, "navigator.serviceWorker"), K.resolve(W(c)); c = n(a, "openDatabase"); if (Gd(a) && P(c)) { var b = !1; try { c(null, null, null, null) } catch (d) { b = !0 } return K.resolve(b) } return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                                        }), mu = /(\?|&)turbo_uid=([\w\d]+)($|&)/, nu = v(function (a, c) {
                                            var b = lc(a), d = U(a).search.match(mu); return d && 2 <= d.length ?
                                                (d = d[2], c.Ta || b.D("turbo_uid", d), d) : (b = b.C("turbo_uid")) ? b : ""
                                        }), ou = B("pa.plgn", function (a, c) { var b = ue(a, c); b && b.$.F(["pluginInfo"], D(a, "c.plgn", function () { var d = J(a); d.D("cmc", d.C("cmc", 0) + 1); return ok(c) })) }), Tb, rb, en = (Tb = {}, Tb.am = "com.am", Tb.tr = "com.tr", Tb.ge = "com.ge", Tb.il = "co.il", Tb["\u0440\u0444"] = "ru", Tb["xn--p1ai"] = "ru", Tb["\u0431\u0435\u043b"] = "by", Tb["xn--90ais"] = "by", Tb), Fl = { "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/, "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/, "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/ },
                                fn = (rb = {}, rb.ka = "ge", rb.ro = "md", rb.tg = "tj", rb.tk = "tm", rb.et = "ee", rb.hy = "com.am", rb.he = "co.li", rb.ky = "kg", rb.be = "by", rb.tr = "com.tr", rb.kk = "kz", rb), Gl = /^https?:\/\//, pu = { 1882689622: 1, 2318205080: 1, 3115871109: 1, 3604875100: 1, 339366994: 1, 2890452365: 1, 849340123: 1, 173872646: 1, 2343947156: 1, 655012937: 1, 3724710748: 1, 3364370932: 1, 1996539654: 1, 2065498185: 1, 823651274: 1, 12282461: 1, 1555719328: 1, 1417229093: 1, 138396985: 1, 3015043526: 1 }, Hl = v(function () {
                                    return N(function (a, c) { var b = ic(c + "/tag.js"); a[b] = 1; return a }, {},
                                        ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                                }), qu = v(function (a) { a = Fd(a); if (!a || !P(a.getEntriesByType)) return null; a = a.getEntriesByType("resource"); var c = Hl(); return (a = tb(function (b) { b = b.name.replace(Gl, "").split("?")[0]; b = ic(b); return c[b] }, a)) ? Bb(a.transferSize) : null }), Np = "ar:1:pv:1:v:" + Ia.cc + ":vf:" + cd.version, Op = Ia.Ra + "//" + mc + "/watch/" + Ia.qg, Il = {}, ru = B("exps.int", function (a, c) {
                                    var b; return b = {}, b.experiments = function (d, e, f) {
                                        var g, h; void 0 === e && (e =
                                            E); if (d && 0 < d.length) { var k = wa(a, "e", c), l = Nd(c).url; d = k({ K: Ka((g = {}, g.ex = 1, g.ar = 1, g)), J: (h = {}, h["page-url"] = l || U(a).href, h.exp = d, h) }, c); return Yc(a, "exps.s", d, e, f) }
                                    }, b
                                }), uf = [], su = B("p.fh", function (a, c) {
                                    var b, d; void 0 === c && (c = !0); var e = Pa(a), f = ka(a), g = e.C("wasSynced"), h = { id: 3, ca: "0" }; return c && g && g.time + 864E5 > f(Z) ? K.resolve(g) : wa(a, "f", h)({ K: Ka((b = {}, b.pv = 1, b)), J: (d = {}, d["page-url"] = U(a).href, d["page-ref"] = a.document.referrer, d) }, h).then(function (k) {
                                        var l; k = (l = {}, l.time = f(Z), l.params = n(k, "settings"),
                                            l.bkParams = n(k, "userData"), l); e.D("wasSynced", k); return k
                                    })["catch"](D(a, "f.h"))
                                }), tu = qa(function (a, c) { 0 === parseFloat(n(c, "settings.c_recp")) && (a.Ud.D("ymoo" + a.oa, a.eg(sb)), a.nd && a.nd.destruct && a.nd.destruct()) }), zf = w(S("settings.pcs"), Ba("1")), Dp = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Ep = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Hi = { J: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } }, Ap = { cg: 60, error: 15 }, zp = {
                                    cg: 5,
                                    error: 1
                                }, Fi = { id: 42822899, ca: "0" }, Jl = mc.split("."), uu = Jl.pop(), Kl = G(".", Jl), dn = v(function (a) { a = U(a).hostname.split("."); return a[a.length - 1] }), cn = v(function (a) { return -1 !== U(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/) }), vu = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech)$/, te = v(function (a) {
                                    a = U(a).hostname; var c = !1; a && (c =
                                        -1 !== a.search(vu)); return c
                                }), wu = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/, Gp = v(function (a) { a = U(a).hostname; var c = !1; a && (c = -1 !== a.search(wu)); return c }), Ll = Ia.Ra + "//" + mc + "/metrika", ye = Ll + "/metrika_match.html", gf, Kp = (gf = {}, gf.s = "p", gf["8"] = "i", gf), Hp = ob("csp", function (a, c) { return wa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]) }), ih = "et w v z i u vf".split(" "), Ml = Ud("wv"), xu = Ud("pub"), ui = function () {
                                    function a(c,
                                        b) { this.l = c; this.type = b } a.isEnabled = function (c) { return !!c.JSON }; a.prototype.Ha = function (c) { return If(Ab(this.l, c)) }; a.prototype.ub = function (c) { var b = c.data; "string" !== typeof b && (b = Ab(this.l, c.data)); return b }; a.prototype.lb = function (c) { return encodeURIComponent(c).length }; a.prototype.te = function (c, b) { for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)e.push(c.slice(f * d, d * (f + 1))); return e }; return a
                                }(), up = v(function (a) {
                                    function c(f, g, h, k) { d[0] = g; h[k] = e[3]; h[k + 1] = e[2]; h[k + 2] = e[1]; h[k + 3] = e[0] } function b(f,
                                        g, h, k) { d[0] = g; h[k] = e[0]; h[k + 1] = e[1]; h[k + 2] = e[2]; h[k + 3] = e[3] } if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return vp; var d = new Float32Array([-0]), e = new Uint8Array(d.buffer); return 128 === e[3] ? b : c
                                }), qp = Di(!1), pp = Di(!0), ba, Oc, Nl = (ba = {}, ba.mousemove = 0, ba.mouseup = 1, ba.mousedown = 2, ba.click = 3, ba.scroll = 4, ba.windowblur = 5, ba.windowfocus = 6, ba.focus = 7, ba.blur = 8, ba.eof = 9, ba.selection = 10, ba.change = 11, ba.input = 12, ba.touchmove = 13, ba.touchstart = 14, ba.touchend = 15, ba.touchcancel = 16, ba.touchforcechange =
                                    17, ba.zoom = 18, ba.resize = 19, ba.keystroke = 20, ba.deviceRotation = 21, ba.fatalError = 22, ba.hashchange = 23, ba.stylechange = 24, ba.articleInfo = 25, ba.publishersHeader = 26, ba.pageData = 27, ba.mutationAdd = 28, ba.mutationRemove = 29, ba.mutationTextChange = 30, ba.mutationAttributesChange = 31, ba), Ol = (Oc = {}, Oc.page = 0, Oc.event = 1, Oc.mutation = 2, Oc.publishers = 3, Oc.activity = 4, Oc), ti = function () {
                                        function a(c, b) {
                                            var d, e, f = this; this.isSync = !1; this.Fb = []; this.Zg = (d = {}, d.ad = "mutationAdd", d.re = "mutationRemove", d.tc = "mutationTextChange",
                                                d.ac = "mutationAttributesChange", d.page = "pageData", d); this.Ug = (e = {}, e.ad = "addedNodesMutation", e.re = "removedNodesMutation", e.tc = "textChangeMutation", e.ac = "attributesChangeMutation", e.touchmove = "touchEvent", e.touchstart = "touchEvent", e.touchend = "touchEvent", e.touchforcechange = "touchEvent", e.touchcancel = "touchEvent", e.resize = "resizeEvent", e.scroll = "scrollEvent", e.change = "changeEvent", e.mousemove = "mouseEvent", e.mousedown = "mouseEvent", e.mouseup = "mouseEvent", e.click = "mouseEvent", e.focus = "focusEvent", e.blur =
                                                    "focusEvent", e.deviceRotation = "deviceRotationEvent", e.zoom = "zoomEvent", e.keystroke = "keystrokesEvent", e.selection = "selectionEvent", e.stylechange = "stylechangeEvent", e.fatalError = "fatalErrorEvent", e.pageData = "page", e); this.uh = function (g) { var h = g.type; return g.event || "publishersHeader" !== h && "articleInfo" !== h ? { type: Ol[h], event: Nl[f.Zg[g.event] || g.event] } : { type: Ol.publishers, event: Nl[h] } }; this.xf = function (g) {
                                                        var h = !W(g.partNum), k = f.uh(g); k = {
                                                            stamp: g.stamp, type: k.type, event: k.event, frameId: g.frameId, chunk: h ?
                                                                g.data : void 0, partNum: g.partNum, end: g.end
                                                        }; !h && g.data && (h = f.Ug[g.event] || g.event || g.type) && (k[h] = g.data); return k
                                                    }; this.l = c; this.type = b
                                        } a.prototype.Ha = function (c, b) {
                                            var d = this; void 0 === b && (b = !1); var e = gc(c, this.xf), f = this.isSync || b ? Infinity : 10; e = od(this.l, e, f); var g = [e]; this.Fb.push(e); return e(Wg(function (h) { h = wi(d.l, fp, { Fi: h }); h = od(d.l, h, f, xg); g.push(h); d.Fb.push(h); return h }))(Wg(function (h) { h = vi(d.l, h.slice(-4)); h = od(d.l, h, f, xg); g.push(h); d.Fb.push(h); return h }))(ml(function (h) {
                                                h = h[h.length - 1];
                                                x(function (k) { k = Ne(d.l)(k, d.Fb); d.Fb.splice(k, 1) }, g); return h
                                            }))
                                        }; a.prototype.ub = function (c) { return wi(this.l, xi, this.xf(c))(yg(E)) }; a.prototype.lb = function (c) { return c[0] }; a.prototype.te = function (c, b) { for (var d = vi(this.l, c)(yg(E)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1)f.push(d.slice(g * e, e * (g + 1))); return f }; a.isEnabled = function (c) { var b = We(c), d = !1; try { d = (d = 2 === (new c.Blob(["\u00e4"])).size) && 2 === (new c.Blob([new c.Uint8Array([1, 2])])).size } catch (e) { } return !b && d && !(!c.Uint8Array || !n(c, "Uint8Array.prototype.slice")) };
                                        return a
                                    }(), Pl = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "), yu = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "), zu = function () {
                                        function a(c, b, d, e, f) {
                                            var g = this; this.Gc = !1; this.meta = {}; this.scroll = { x: 0, y: 0 }; this.involvedTime = this.uf = 0; this.Vd = this.Cf = ""; this.fa = []; this.qe = this.Ka = 0; this.yb = { h: 0, w: 0 }; this.buffer = []; this.rg = yu; this.flush = function () {
                                                g.qe = T(g.l, g.flush,
                                                    2500); var h = g.Dd(); if (g.buffer.length || h) { var k = Ze(g.buffer); h && k.push(h); g.Cf = g.Vd; g.na.Ha(k)(Ra(D(g.l, "p.b.st"), function (l) { l && g.Wb(l) })) }
                                            }; this.Wb = e; this.na = d; this.bc = H(this.bc, this); this.Dd = H(this.Dd, this); this.flush = H(this.flush, this); this.l = c; this.oa = f; this.Uc = b; this.Qd = "pai" + b.id; this.Kb(); this.Ue = ja(this.l); this.time = ka(this.l); this.kg(); this.Gd = J(this.l); this.Fe = null
                                        } a.prototype.start = function () {
                                            this.qe = T(this.l, this.flush, 2500); if (!this.Gc) {
                                                this.Pi(); var c = this.Gd.C(this.Qd, []), b = !c.length;
                                                c.push(H(this.ai, this)); this.Gd.Ia(this.Qd, c); b && this.Lf(); this.Fe = ja(this.l).F(this.l, ["click"], H(this.Ni, this)); this.bc({ type: "page", target: this.l })
                                            }
                                        }; a.prototype.stop = function () { this.cj(); this.Gc = !0; this.flush(); la(this.l, this.qe) }; a.prototype.rf = function (c) { return pc("html", this.l, c) !== this.l.document.documentElement }; a.prototype.Lf = function () {
                                            var c = this; D(this.l, "p.ic" + this.Uc.id, function () {
                                                if (!c.Gc) {
                                                    var b = c.Gd.C(c.Qd), d = c.Uc.fh(); x(function (e) { var f = A(function (g) { return z({}, g) }, d); P(e) && e(f) },
                                                        b); c.Ka = T(c.l, H(c.Lf, c), 1E3, "p")
                                                }
                                            })()
                                        }; a.prototype.ai = function (c) { this.Gc || (this.dj(c), this.ej(), this.Jg()) }; a.prototype.Og = function (c, b) { return (c.ne || 0) <= (b.ne || 0) ? b : c }; a.prototype.Ni = function (c) { if (this.fa.length) { c = nj(c); var b = U(this.l).hostname, d; if (d = c) d = Me(c.hostname) === Me(b); d && (c = N(this.Og, this.fa[0], this.fa).id, b = Fc(this.l), fd(this.l, this.oa.split(":")[0]).D("pai", c + "-" + b)) } }; a.prototype.bc = function (c) {
                                            var b = this; D(this.l, "p.ec." + this.Uc.id, function () {
                                                var d, e; try { var f = c.type; var g = c.target } catch (p) { return } var h =
                                                    "page" === f; if ("scroll" === f || h) { var k = [b.l, b.l.document, b.l.document.documentElement, Lc(b.l)]; I(g, k) && b.Kb() } ("resize" === f || h) && b.kg(); f = b.time(Z); var l = Math.min(f - b.uf, 5E3); b.involvedTime += Math.round(l); b.uf = f; if (b.meta && b.scroll && b.yb) {
                                                        var m = b.yb.h * b.yb.w; b.fa = A(function (p) {
                                                            var q = z({}, p), r = b.meta[q.id], t = Qc(p.Eb); if (!r || b.rf(q.element) || !t) return q; p = b.l.Math; r = p.max((b.scroll.y + b.yb.h - r.y) / r.height, 0); var y = t.height * t.width; t = Ah(b.l, t, b.yb); q.ne = t / m; q.visibility = t / y; if (.9 <= q.visibility || .1 <= q.ne) q.involvedTime +=
                                                                l; q.maxScrolled = p.round(1E4 * r) / 1E4; return q
                                                        }, b.fa); ub(b.l, (d = {}, d.name = "publishers", d.counterKey = b.oa, d.data = (e = {}, e.involvedTime = b.involvedTime, e.contentItems = A(function (p) { var q; return z((q = {}, q.contentElement = p.Eb, q), p) }, b.fa), e), d))
                                                    }
                                            })()
                                        }; a.prototype.dj = function (c) { var b = A(function (d) { return d.id }, this.fa); this.fa = this.fa.concat(ia(function (d) { return !I(d.id, b) }, c)) }; a.prototype.kg = function () { var c = pe(this.l) || Rc(this.l); this.yb = { w: c[0], h: c[1] } }; a.prototype.ej = function () {
                                            var c = this; D(this.l, "p.um." +
                                                this.Uc.id, function () {
                                                    var b = []; c.Kb(); c.meta = Cb(function (d, e) { var f; if (c.rf(e.element)) b.push(e), delete d[e.id]; else { var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f); e.Eb && (f = Qc(e.Eb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height)); d[e.id] = g } return d }, {}, c.fa); x(function (d) {
                                                        d = Ne(c.l)(d, c.fa); c.fa.splice(d,
                                                            1)
                                                    }, b)
                                                })()
                                        }; a.prototype.Dd = function () { var c, b, d = A(u(this.meta, n), ca(this.meta)); return d.length && (this.Vd = Ab(this.l, d), this.Cf !== this.Vd) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.involvedTime, b), c) : null }; a.prototype.Jg = function () {
                                            var c = this; if (this.fa.length) {
                                                var b = A(function (d) { var e, f = N(function (g, h) { d[h] && (g[h] = d[h]); return g }, {}, c.rg); d.Wf = !0; return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e }, ia(function (d) { return !d.Wf }, this.fa)); b.length &&
                                                    (this.buffer = this.buffer.concat(b), Mb(this.l, this.oa, ["pdf", b]))
                                            }
                                        }; a.prototype.Pi = function () { this.Ue.F(this.l, Pl, this.bc) }; a.prototype.cj = function () { this.Fe && this.Fe(); this.Ue.xb(this.l, Pl, this.bc) }; a.prototype.Kb = function () { this.scroll = { x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0, y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0 } }; return a
                                    }(), fe, jh = (fe = {}, fe[1] = 500, fe[2] = 500, fe[3] = 0, fe), Au = ["topics", "rubric", "authors"], kh = function () {
                                        function a(c,
                                            b) {
                                                var d, e = this; this.id = "a"; this.Ld = !1; this.Hb = {}; this.tb = { "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "), zf: ["article"] }; this.De = (d = {}, d.Answer = 3, d.Review = 2, d); this.Xe = v(function (f, g, h) { var k; Mb(e.l, e.oa, "pfi", (k = {}, k.field = f, k.itemField = g, k.value = h, k)) }, function (f, g, h) { return "" + f + g + h }); this.gj = function (f) {
                                                    Au.forEach(function (g) {
                                                        f[g] && (f[g] = f[g].reduce(function (h, k) {
                                                            var l = k.name, m = k.position; if (!l) return e.Xe(g, "name", l), h; if ("string" === typeof m) {
                                                                l = ve(m); if (null ===
                                                                    l || e.l.isNaN(l)) return e.Xe(g, "position", m), h; k.position = l
                                                            } h.push(k); return h
                                                        }, []))
                                                    }); return f
                                                }; this.Pg = v(function (f, g) { var h; Mb(e.l, e.oa, ["pcs", g], (h = {}, h.chars = g.chars, h.limit = jh[g.type], h)) }); this.l = c; this.root = hc(c); this.oa = b
                                        } a.prototype.Na = function (c) { return c.element }; a.prototype.df = function (c, b) { var d = this, e; D(this.l, "P.s." + b, function () { e = d.Hb[b].call(d, c) })(); return e }; a.prototype.Di = function (c) {
                                            var b = z({}, c); this.Ld && !b.id && I(c.type, [3, 2]) && (c = G(", ", A(S("name"), b.authors || [])), b.pageTitle =
                                                c + ": " + b.pageTitle); b.pageTitle || (b.pageTitle = this.Eh(b.Eb)); b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Ch()); b.id || (b.id = b.pageTitle || b.pageUrlCanonical); return b
                                        }; a.prototype.Ea = function (c) {
                                            var b = this, d = {}, e = this.Na(c); if (!e) return null; d.type = c.type; x(function (g) { d[g] = b.df(c, g) }, ca(this.Hb)); var f = ka(this.l); d.stamp = f(dk); d.element = c.element; d.Eb = e; d = this.gj(this.Di(d)); d.id = d.id ? ic(d.id) : 1; d.update = function (g) {
                                                return b.Na(c) ? b.df(c,
                                                    g) : void 0
                                            }; return d
                                        }; a.prototype.Eh = function (c) { for (var b = 1; 5 >= b; b += 1) { var d = ab(fc("h" + b, c)); if (d) return d } }; a.prototype.Ch = function () { var c = fc('[rel="canonical"]', this.root); if (c) return c.href }; a.prototype.jf = function () { return 1 }; a.prototype.xc = function () { return [] }; a.prototype.fh = function () {
                                            var c = this, b = this.xc(), d = 1; return Cb(function (e, f) {
                                                var g = c.Ea({ element: f, type: c.jf(f) }) || []; R(g) || (g = [g]); g = Cb(function (h, k) {
                                                    var l = h.values, m = h.lf; k && k.chars > jh[k.type] && !I(k.id, m) ? (l.push(k), m.push(k.id)) : k &&
                                                        k.chars <= jh[k.type] && c.Pg(k.id, k); return { values: l, lf: m }
                                                }, { values: [], lf: A(S("id"), e) }, g).values; return e.concat(A(function (h) { var k; h = z((k = { index: d, Wf: !1 }, k.involvedTime = 0, k), h); d += 1; return h }, g))
                                            }, [], b)
                                        }; return a
                                    }(), Ql = function (a) {
                                        function c() {
                                            var b, d = null !== a && a.apply(this, arguments) || this; d.id = "j"; d.Ld = !0; d.Re = G(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']); d.Hb = (b = {}, b.id = function (e) {
                                                var f = e.data["@id"]; e = e.data.mainEntity ||
                                                    e.data.mainEntityOfPage; !f && oa(e) && (f = e["@id"]); return f
                                            }, b.chars = function (e) { var f = e.data; return fa(f.text) ? f.text.length : Ob(this.Na(e)).length }, b.authors = function (e) { e = e.data; var f = []; f = f.concat(this.wc(e, "author")); f = f.concat(this.wc(e.mainEntity, "author")); return f.concat(this.wc(e.mainEntityOfPage, "author")) }, b.pageTitle = function (e) {
                                                var f = e.data, g = f.headline || ""; f.alternativeHeadline && (g += " " + f.alternativeHeadline); "" === g && (f.name ? g = f.name : f.itemReviewed && (g = f.itemReviewed)); 3 === e.type && oa(f.parentItem) &&
                                                    (g = f.parentItem.text); return g
                                            }, b.updateDate = function (e) { return e.data.dateModified || "" }, b.publicationDate = function (e) { return e.data.datePublished || "" }, b.pageUrlCanonical = function (e) { return e.data.url }, b.topics = function (e) { return this.wc(e.data, "about", ["name", "alternateName"]) }, b.rubric = function (e) {
                                                var f = this, g = this.Na(e); e = va(A(function (h) {
                                                    h = zb(f.l, Ob(h)); if (oa(h) || R(h)) {
                                                        var k = f.ef(h); if (k) return N(function (l, m) { return l ? l : oa(m) && "BreadcrumbList" === m["@type"] ? m : l }, null, k); if ("BreadcrumbList" ===
                                                            h["@type"]) return h
                                                    } return null
                                                }, [e.element].concat(lb(this.Re, document.body === g ? document.documentElement : g)))); return e.length && (e = e[0].itemListElement, R(e)) ? va(A(function (h) { return oa(h) && h.item && oa(h.item) && !f.l.isNaN(h.position) ? { name: h.item.name || h.name, position: h.position } : null }, e)) : []
                                            }, b); return d
                                        } Na(c, a); c.prototype.wc = function (b, d, e) {
                                            void 0 === e && (e = ["name"]); if (!b || !b[d]) return []; b = R(b[d]) ? b[d] : [b[d]]; b = va(A(function (f) {
                                                return f ? "string" === typeof f ? f : N(function (g, h) { return g || "" + f[h] }, "",
                                                    e) : null
                                            }, b)); return A(function (f) { var g; return g = {}, g.name = f, g }, b)
                                        }; c.prototype.Na = function (b) { var d = b.element, e = b.data || {}; b = e["@id"]; var f = e.url; e = null; f && fa(f) && (e = this.We(f)); !e && b && fa(b) && (e = this.We(b)); e || (e = b = d.parentNode, !pc("head", this.l, d) && b && 0 !== Ob(b).length) || (e = this.l.document.body); return e }; c.prototype.We = function (b) { try { var d = Uc(this.l, b).hash; if (d) { var e = fc(d, this.l.document.body); if (e) return e } } catch (f) { } return null }; c.prototype.ae = function (b) { return this.De[b["@type"]] || 1 }; c.prototype.Ea =
                                            function (b) {
                                                var d = this, e = b.element, f = b.data; if (!f && (f = zb(this.l, Ob(e)), !f || !/schema\.org/.test(f["@context"]) && !R(f))) return null; var g = this.ef(f); if (g) return A(function (k) { return oa(k) && I(k["@type"], d.tb["schema.org"]) ? a.prototype.Ea.call(d, { element: e, data: k, type: d.ae(k) }) : null }, g); b.data = f; if ("QAPage" === b.data["@type"]) { var h = b.data.mainEntity || b.data.mainEntityOfPage; if (!h) return null } "Question" === b.data["@type"] && (h = b.data); return h ? (b = yc(u(h, n), ["acceptedAnswer", "suggestedAnswer"]), A(function (k) {
                                                    var l;
                                                    if (!oa(k) || !I(k["@type"], d.tb["schema.org"])) return null; k = { element: e, type: d.ae(k), data: z((l = {}, l.parentItem = h, l), k) }; return a.prototype.Ea.call(d, k)
                                                }, b)) : I(b.data["@type"], this.tb["schema.org"]) ? a.prototype.Ea.call(this, z(b, { type: this.ae(b.data) })) : null
                                            }; c.prototype.xc = function () { return lb(this.Re, this.root) }; c.prototype.ef = function (b) { if (R(b)) return b; if (b && R(b["@graph"])) return b["@graph"] }; return c
                                    }(kh), lh = function (a) {
                                        function c() {
                                            var b, d = null !== a && a.apply(this, arguments) || this; d.id = "s"; d.Ld =
                                                !0; d.bj = Ha("exec", new RegExp("schema.org\\/(" + G("|", ca(d.De)) + ")$")); d.Hb = (b = {}, b.id = function (e) { e = e.element; var f = hb(this.l, e, "identifier"); return f ? ab(f) : (f = hb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null }, b.chars = function (e) { var f = 0; e = e.element; for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) { var k = hb(this.l, e, g[h]); if (k) { f = ab(k).length; break } } e = Ob(e); 0 === f && e && (f += e.length); return f }, b.topics = function (e) {
                                                    var f =
                                                        this, g = ae(this.l, e.element, "about"); return A(function (h) { var k = { name: ab(h) }; if (g = hb(f.l, h, "name")) k.name = ab(g); return k }, g)
                                                }, b.rubric = function (e) { var f = this; (e = fc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = fc('[itemtype$="schema.org/BreadcrumbList"]', this.root)); return e ? A(function (g) { return { name: ab(hb(f.l, g, "name")), position: ab(hb(f.l, g, "position")) } }, ae(this.l, e, "itemListElement")) : [] }, b.updateDate = function (e) { return (e = hb(this.l, e.element, "dateModified")) ? Ek(e) : "" }, b.publicationDate =
                                                    function (e) { return (e = hb(this.l, e.element, "datePublished")) ? Ek(e) : "" }, b.pageUrlCanonical = function (e) { e = ae(this.l, e.element, "url"); if (e.length) { var f = e[0]; return f.href ? f.href : ab(e) } return null }, b.pageTitle = function (e) {
                                                        var f = "", g = e.element, h = hb(this.l, g, "headline"); h && (f += ab(h)); (h = hb(this.l, g, "alternativeHeadline")) && (f += " " + ab(h)); "" === f && ((h = hb(this.l, g, "name")) || (h = hb(this.l, g, "itemReviewed")), h && (f += ab(h))); 3 === e.type && (e = pc('[itemtype$="schema.org/Question"]', this.l, g)) && (e = hb(this.l, e, "text")) &&
                                                            (f += ab(e)); return f
                                                    }, b.authors = function (e) { var f = this; e = ae(this.l, e.element, "author"); return A(function (g) { var h, k = (h = {}, h.name = "", h); /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = hb(f.l, g, "name")) && (k.name = ab(h)); k.name || (k.name = g.getAttribute("content") || Ob(g) || g.getAttribute("href")); return k }, e) }, b); return d
                                        } Na(c, a); c.prototype.jf = function (b) { b = b.getAttribute("itemtype") || ""; return (b = this.bj(b)) ? this.De[b[1]] : 1 }; c.prototype.Ea = function (b) {
                                            return b.element && Ob(b.element).length ?
                                                a.prototype.Ea.call(this, b) : null
                                        }; c.prototype.xc = function () { var b = G(",", A(function (d) { return '[itemtype$="schema.org/' + d + '"]' }, this.tb["schema.org"])); return lb(b, this.root) }; return c
                                    }(kh), Rl = function (a) {
                                        function c(b, d) {
                                            var e, f = a.call(this, b, d) || this; f.id = "o"; f.Hb = (e = {}, e.chars = function (g) { g = this.Na(g); return Ob(g).length }, e.authors = function (g) { return this.zd(g.data.author) }, e.pageTitle = function (g) { return this.Bc(g.data.title) || "" }, e.updateDate = function (g) { return this.Bc(g.data.modified_time) }, e.publicationDate =
                                                function (g) { return this.Bc(g.data.published_time) }, e.pageUrlCanonical = function (g) { return this.Bc(g.data.url) }, e.rubric = function (g) { return this.zd(g.data.section) }, e.topics = function (g) { return this.zd(g.data.tag) }, e); f.Yg = new RegExp("^(og:)?((" + G("|", f.tb.zf) + "):)?"); return f
                                        } Na(c, a); c.prototype.zd = function (b) { var d; return b ? R(b) ? A(function (e) { var f; return f = {}, f.name = e ? "" + e : null, f }, b) : [(d = {}, d.name = b ? "" + b : null, d)] : [] }; c.prototype.Bc = function (b) { return R(b) ? b.length ? "" + b[0] : null : b ? "" + b : null }; c.prototype.xc =
                                            function () { var b = lb('meta[property="og:type"]', this.l.document.body); return [this.l.document.head].concat(b) }; c.prototype.th = function (b) {
                                                var d = this, e = b.element, f = {}, g = this.Na(b); e = lb("meta[property]", e === this.l.document.head ? e : g); if (e.length) x(function (h) { try { if (h.parentNode === g || h.parentNode === d.l.document.head) { var k = h.getAttribute("property").replace(d.Yg, ""), l = ab(h); f[k] ? R(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l } } catch (m) { Ce(d.l, "og.ed", m) } }, e); else return null; return I(f.type, this.tb.zf) ? z(b,
                                                    { data: f }) : null
                                            }; c.prototype.Na = function (b) { b = b.element; var d = this.l.document; return b === d.head ? d.body : b.parentNode }; c.prototype.Ea = function (b) { return (b = this.th(b)) ? a.prototype.Ea.call(this, b) : null }; return c
                                    }(kh), ge = {}; Ql && (ge.json_ld = Ql); lh && (ge.schema = lh, ge.microdata = lh); Rl && (ge.opengraph = Rl); var Bu = B("p.p", function (a, c) {
                                        function b(m) { var p = z({}, l); p.ba.da = m; return f(p, c)["catch"](D(a, "s.ww.p")) } var d, e = si(a, "9", "8"); if (!Ga("querySelectorAll", a.document.querySelectorAll) || !e) return K.resolve(); var f =
                                            wa(a, "p", c), g = Ka(), h = fd(a, c.id), k = h.C("pai"); k && (h.Gb("pai"), g.D("pai", k)); var l = { J: (d = {}, d["wv-type"] = e.type, d), K: g, ba: {} }; return sa(c, D(a, "ps.s", function (m) { var p; if (m = n(m, "settings.publisher.schema")) { pk(c) && (m = "microdata"); var q = ge[m]; if (q && e) { var r = M(c); q = new q(a, r); q = new zu(a, q, e, b, r); q.start(); Mb(a, r, "ps", (p = {}, p.schema = m, p)); return H(q.stop, q) } } }))
                                    }), Cu = function () {
                                        function a(c, b) { this.type = "0"; this.l = c; this.rh = b } a.prototype.Ha = function (c) { return If(yc(H(this.ub, this), c)) }; a.prototype.ub = function (c,
                                            b) { var d = this, e = [], f = this.rh(this.l, b && b.type, c.type); f && (e = yc(function (g) { return g({ l: d.l, qa: c }) || [] }, f)); return e }; a.prototype.lb = function (c) { return c.length }; a.prototype.te = function (c) { return [c] }; a.prototype.isEnabled = function () { return !0 }; return a
                                    }(), Sl = function () {
                                        function a(c, b, d) { this.Se = 0; this.ce = 1; this.cd = 5E3; this.l = c; this.na = b; this.Wb = d } a.prototype.Xc = function () { this.Se = T(this.l, w(H(this.flush, this), H(this.Xc, this)), this.cd, "b.f") }; a.prototype.send = function (c, b) {
                                            var d = this.Wb(c, b || [], this.ce);
                                            this.ce += 1; return d
                                        }; a.prototype.push = function () { }; a.prototype.flush = function () { }; return a
                                    }(), vo = function (a) { function c(b, d, e) { b = a.call(this, b, d, e) || this; b.buffer = []; b.sg = 7500; b.cd = 3E4; b.Xc(); return b } Na(c, a); c.prototype.push = function (b, d) { var e = this.na.ub(b, d); ta(this.buffer, e); this.na.lb(this.buffer) > this.sg && this.flush() }; c.prototype.flush = function () { var b = this.buffer; b.length && (this.send(b), this.buffer = []) }; return c }(Sl), Ko = /opera mini/i, mi = ["phone", "email"], Tl = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                                        Ho = /^[\w\u0410-\u042f\u0430-\u044f]$/, Io = [65, 90], Jo = [97, 122], Fo = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "), Do = new RegExp("(" + G("|", Tl) + ")", "i"), Co = new RegExp("(" + G("|", mi) + ")", "i"), Fk = ["password", "passwd", "pswd"], Eo = new RegExp("(" + G("|", Tl.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                                            ")", "i"), Ya = "metrikaId_" + Math.random(), Cc = { counter: 0 }, zs = v(function () {
                                                var a; return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                                                    43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                                                    100, a
                                            }), ws = [17, 18, 38, 32, 39, 15, 11, 7, 1], Du = function () {
                                                var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                                                return {
                                                    zj: new RegExp("(" + G("|", a) + ")", "i"), Jj: new RegExp("(" + G("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                                                        ")", "i"), xj: /ym-record-keys/i, ni: "\u2022", Ij: 88
                                                }
                                            }(), Kk = Xb(u(Du.ni, Q)), yd = !0, Pg = "", Qg = !1, Rg = !0, Sg = !1, Ao = qa(function (a, c) { var b = C([a, "efv." + c.event], D); c.O = A(w(Q, b), c.O); return c }), Ul = v(function (a) {
                                                var c = [], b = [], d = []; a.document.attachEvent && !a.opera && (c.push(Of), b.push(Cs), b.push(Ds)); a.document.addEventListener ? c.push(Ik) : (b.push(Hk), d.push(Ik)); return zo(a, [{ target: a, type: "window", event: "beforeunload", O: [E] }, { target: a, type: "window", event: "unload", O: [E] }, { event: "click", O: [cf] }, { event: "dblclick", O: [cf] },
                                                { event: "mousedown", O: [cf] }, { event: "mouseup", O: [Fs] }, { event: "keydown", O: [Gs] }, { event: "keypress", O: [Hs] }, { event: "copy", O: [Mk] }, { event: "blur", O: c }, { event: "focusin", O: b }, { event: "focusout", O: d }].concat(!a.document.attachEvent || a.opera ? [{ target: a, type: "window", event: "focus", O: [ki] }, { target: a, type: "window", event: "blur", O: [Of] }] : []).concat(a.document.addEventListener ? [{ event: "focus", O: [Hk] }, { event: "change", O: [Jk] }, { event: "submit", O: [Ok] }] : [{ type: "formInput", event: "change", O: [Jk] }, {
                                                    type: "form", event: "submit",
                                                    O: [Ok]
                                                }]))
                                            }), xo = v(function (a) { return Lc(a) ? [{ target: a, type: "document", event: "mouseleave", O: [Is] }] : [] }), Eu = ["submit", "beforeunload", "unload"], Fu = v(function (a, c) { var b = c(a); return N(function (d, e) { d[e.type + ":" + e.event] = e.O; return d }, {}, b) }), Gu = u(Ul, function (a, c, b, d) { return Fu(c, a)[b + ":" + d] || [] }), yo = /^\s*function submit\(\)/, Hu = B("fw.p", function (a, c) {
                                                var b; if (!(b = c.Vg || !c.zb)) { var d = J(a), e = !1; b = d.C("hitParam", {}); var f = M(c); b[f] && (d = d.C("counters", {}), e = ke(c.ca) && !d[f]); b[f] = 1; b = e } if (b) return K.resolve(E);
                                                b = new Cu(a, Gu); return uo(a, c, b, Ul, Eu)
                                            }), mh, Vl = (mh = function (a) {
                                                function c(b, d, e, f) { void 0 === f && (f = 0); d = a.call(this, b, d, e) || this; d.Ae = 0; d.Cb = 0; d.ze = 0; d.buffer = []; d.cd = 2E3; d.$ = wd(b); d.Xc(); d.ze = f; return d } Na(c, a); c.prototype.bf = function (b) { return va(this.$.T("ag", b)) }; c.prototype.af = function (b, d) { var e = this; b(Ra(D(this.l, "wv2.b.st"), function (f) { e.send(f, d) })) }; c.prototype.Oi = function (b, d) {
                                                    var e = this; la(this.l, this.Se); var f = Math.ceil(this.na.lb(d) / 63E4), g = this.na.te(d, f); x(function (h, k) {
                                                        var l, m = z({},
                                                            b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l.partsTotal = g.length, l)); l = e.na.Ha([m], !1); e.af(l, [m])
                                                    }, g); this.Xc()
                                                }; c.prototype.send = function (b, d) { var e = this; this.$.T("se", d); return a.prototype.send.call(this, b, d).then(Q, function () { e.$.T("see", d) }) }; c.cf = function (b, d, e, f, g) { c.fd["" + b + d] || (this.fd[d] = new c(g, f, e, "m" === d ? 31457280 : 0)); return this.fd[d] }; c.prototype.Zh = function () { return this.ze && this.Ae >= this.ze }; c.prototype.push = function (b) {
                                                    var d = this; if (!this.Zh()) {
                                                        this.$.T("p", b); var e = this.na.ub(b),
                                                            f = this.na.lb(e); 7E5 < f ? this.Oi(b, e) : (e = this.bf(this.buffer.concat([b])), e = Cb(function (g, h) { return g + d.na.lb(d.na.ub(h)) }, 0, e), this.Cb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Cb += f)
                                                    }
                                                }; c.prototype.F = function (b, d) { this.$.F([b], d) }; c.prototype.ga = function (b, d) { this.$.ga([b], d) }; c.prototype.flush = function (b) { var d = this.buffer.concat(this.bf(this.buffer)); d.length && (this.buffer = [], this.Ae += this.Cb, this.Cb = 0, b = this.na.Ha(d, b), this.af(b, d)) }; return c
                                            }(Sl), mh.fd = {}, mh), bb = function () {
                                                function a(c,
                                                    b, d) { this.ei = "wv2.c"; this.Pb = []; this.ja = []; this.l = c; this.L = Mf(c, this, d, this.ei); this.G = b; this.eb = this.G.xh(); this.start = this.L.H(this.start, "st"); this.stop = this.L.H(this.stop, "sp") } a.prototype.start = function () { var c = this; this.Pb = A(function (b) { var d = b[0], e = b[2]; b = H(c.L.H(b[1], d[0]), c); return c.eb.F(e || c.l, d, b) }, this.ja) }; a.prototype.stop = function () { x(ma, this.Pb) }; a.prototype.Z = function (c) { return this.G.va().Z(c) }; return a
                                            }(), so = ["checkbox", "radio"], to = /pwd|value|password/i, nh = S("location.href"), Iu =
                                            function (a) {
                                                function c(b, d, e) { d = a.call(this, b, d, e) || this; d.ta = { elements: [], attributes: [] }; d.index = 0; d.Xd = d.L.H(d.Xd, "o"); d.od = d.L.H(d.od, "io"); d.dd = d.L.H(d.dd, "ao"); d.fe = d.L.H(d.fe, "a"); d.de = d.L.H(d.de, "at"); d.ie = d.L.H(d.ie, "r"); d.ee = d.L.H(d.ee, "c"); d.ra = new b.MutationObserver(d.Xd); return d } Na(c, a); c.prototype.start = function () { this.ra.observe(this.l.document.documentElement, { attributes: !0, characterData: !0, childList: !0, subtree: !0, attributeOldValue: !0, characterDataOldValue: !0 }) }; c.prototype.stop = function () { this.ra.disconnect() };
                                                c.prototype.dd = function (b) { var d = b.target; b = b.attributeName; var e = Rb(this.l)(d, this.ta.elements); -1 === e && (e = this.ta.elements.push(d) - 1, this.ta.attributes[e] = {}); this.ta.attributes[e] || (this.ta.attributes[e] = {}); e = this.ta.attributes[e]; var f = d.getAttribute(b); e[b] = ze(this.l, d, b, f, this.G.Jb()).value }; c.prototype.od = function (b) {
                                                    function d(k) { var l = Rb(e.l)(k, f); return -1 === l ? (f.push(k), k = { xd: {} }, g.push(k), k) : g[l] } var e = this, f = [], g = []; x(function (k) {
                                                        var l = k.attributeName, m = k.removedNodes, p = k.oldValue, q =
                                                            k.target, r = k.nextSibling, t = k.previousSibling; switch (k.type) { case "attributes": e.dd(k); var y = d(q); y.xd[l] || (y.xd[l] = ze(e.l, q, l, p, e.G.Jb()).value); break; case "childList": m && x(function (F) { y = d(F); y.Ze || z(y, { Ze: q, lh: r ? r : void 0, mh: t ? t : void 0 }) }, Ca(m)); break; case "characterData": y = d(q), y.$e || (y.$e = p) }
                                                    }, b); var h = this.G.va(); x(function (k, l) { h.se(k, g[l]) }, f)
                                                }; c.prototype.Xd = function (b) {
                                                    var d = this; if (nh(this.l)) {
                                                        var e = this.G.stamp(); this.od(b); x(function (f) {
                                                            var g = f.addedNodes, h = f.removedNodes, k = f.target; switch (f.type) {
                                                                case "childList": h &&
                                                                    h.length && d.ie(Ca(h), e); g && g.length && d.fe(Ca(g), e); break; case "characterData": d.ee(k, e)
                                                            }
                                                        }, b); this.de(e)
                                                    } else this.stop()
                                                }; c.prototype.de = function (b) { var d = this; x(function (e, f) { var g = d.zc(); d.G.Y("mutation", { index: g, attributes: d.ta.attributes[f], target: d.Z(e) }, "ac", b) }, this.ta.elements); this.ta.elements = []; this.ta.attributes = [] }; c.prototype.fe = function (b, d) {
                                                    var e = this, f = this.zc(); this.G.va().Dc({
                                                        nodes: b, Wc: function (g) {
                                                            g = A(function (h) { h.node = void 0; return h }, g); e.G.Y("mutation", { index: f, nodes: g }, "ad",
                                                                d)
                                                        }
                                                    })
                                                }; c.prototype.ie = function (b, d) { var e = this, f = this.zc(), g = this.G.va(), h = A(function (k) { var l = g.removeNode(k); ej(e.l, k, function (m) { g.removeNode(m) }); return l }, b); this.G.Y("mutation", { index: f, nodes: h }, "re", d) }; c.prototype.ee = function (b, d) { var e = this.zc(); this.G.Y("mutation", { value: b.textContent, target: this.Z(b), index: e }, "tc", d) }; c.prototype.zc = function () { var b = this.index; this.index += 1; return b }; return c
                                            }(bb), Ju = function () {
                                                function a(c, b) {
                                                    var d = this; this.vc = []; this.fb = []; this.Wd = 1; this.Pe = this.Sf =
                                                        0; this.Aa = {}; this.Nb = {}; this.Ib = []; this.Id = function (f) { return d.fb.length ? I(f, d.fb) : !1 }; this.removeNode = function (f) { var g = d.Z(f), h = Ma(f); if (h) return h = "NR:" + h.toLowerCase(), d.Id(h) && d.$.T(h, { data: { node: f, id: g } }), g }; this.kb = function (f) { var g = Ma(f); if (g) { var h = f.__ym_indexer; return h ? h : (h = d.Wd, f.__ym_indexer = h, d.Wd += 1, g = "NA:" + g.toLowerCase(), d.Id(g) && d.$.T(g, { data: { node: f, id: h } }), h) } return null }; this.Mf = function () { d.Sf = T(d.l, w(H(d.aa, d, !1), d.Mf), 50, "i.s") }; this.Kf = function () {
                                                            d.Pe = T(d.l, w(H(d.jd, d, !1),
                                                                d.Kf), 50, "i.g")
                                                        }; this.Gi = function (f) { null === d.Aa[f] && delete d.Aa[f] }; this.l = c; var e = Mf(c, this, "i"); this.$ = wd(c); this.options = b; this.start = e.H(this.start, "st"); this.stop = e.H(this.stop, "sp"); this.Z = e.H(this.Z, "i"); this.se = e.H(this.se, "o"); this.Dc = e.H(this.Dc, "a"); this.removeNode = e.H(this.removeNode, "r"); this.aa = e.H(this.aa, "s"); this.jd = e.H(this.jd, "g")
                                                } a.prototype.se = function (c, b) { var d = this.kb(c); Wa(d) || (this.Nb[d] && this.Z(c), this.Nb[d] = b) }; a.prototype.F = function (c, b, d) {
                                                    c = "" + b + c; this.fb.push(c); this.Id(c) ||
                                                        this.fb.push(c); this.$.F([c], d)
                                                }; a.prototype.ga = function (c, b, d) { var e = "" + b + c; this.fb = ia(function (f) { return f !== e }, this.fb); this.$.ga([e], d) }; a.prototype.start = function () { this.Mf(); this.Kf() }; a.prototype.stop = function () { this.flush(); la(this.l, this.Pe); la(this.l, this.Sf); this.vc = []; this.Ib = []; this.Aa = {}; this.Nb = {} }; a.prototype.Dc = function (c) {
                                                    var b = this, d = [], e = 0, f = { Wc: c.Wc, result: [], Ec: 0, nodes: d }; this.vc.push(f); x(function (g) {
                                                        ej(b.l, g, function (h) {
                                                            var k = b.kb(h); Wa(k) || (d.push(h), b.Aa[k] && b.Z(h), b.Aa[k] =
                                                                { node: h, event: f, $i: e }, e += 1)
                                                        })
                                                    }, c.nodes)
                                                }; a.prototype.Z = function (c) {
                                                    if (c === this.l) return 0; var b = this.kb(c), d = this.Aa[b], e = this.ph(b), f = e.Ze, g = e.xd, h = e.$e, k = e.lh, l = e.mh; if (d) {
                                                        e = d.event; d = d.$i; var m = ft(this.l) === c; k = k || c.nextSibling; var p = l || c.previousSibling; l = !m && k ? this.kb(k) : null; p = !m && p ? this.kb(p) : null; m = this.l; k = this.options; f = this.kb(f || c.parentNode || c.parentElement) || 0; var q = g, r = void 0; void 0 === p && (p = null); void 0 === l && (l = null); void 0 === q && (q = {}); void 0 === r && (r = Ma(c)); if (W(r)) c = void 0; else {
                                                            g =
                                                            { id: b, prev: p !== f ? p : null, next: l !== f ? l : null, parent: f, name: r.toLowerCase(), node: c }; if (Sf(c)) { if (h = po(c, h), g.attributes = {}, g.content = h) if (c = xd(m, c)) g.content = "" !== $a(h) ? Go(m, h) : h, g.hidden = c } else h = qo(m, c, k, q, r), m = h.pb, g.attributes = h.Dg, m && (g.hidden = m), c.namespaceURI && db(c.namespaceURI, "svg") && (g.namespace = c.namespaceURI); c = g
                                                        } if (W(c)) return; this.Aa[b] = null; this.Ib.push(b); e.result[d] = c; e.Ec += 1; e.nodes.length === e.Ec && e.Wc(e.result)
                                                    } return b
                                                }; a.prototype.flush = function () { this.aa(!0) }; a.prototype.jd = function () {
                                                    if (this.Ib.length) {
                                                        var c =
                                                            gc(this.Ib, this.Gi), b = xg(this.l, 30); c(b)
                                                    }
                                                }; a.prototype.aa = function (c) { var b = this; if (nh(this.l)) { var d = ca(this.Aa); d = N(function (e, f) { b.Aa[f] && e.push(b.Aa[f].node); return e }, [], d); d = gc(d, this.Z); c = c ? bk(E) : Zj(this.l, 20); d(c); this.vc = ia(function (e) { return e.Ec !== e.result.length }, this.vc) } }; a.prototype.ph = function (c) { if (Wa(c)) return {}; var b = this.Nb[c]; return b ? (this.Nb[c] = null, this.Ib.push(c), b) : {} }; return a
                                            }(), Ku = ["input", "change", "keyup", "paste", "cut"], Lu = function (a) {
                                                function c(b, d, e) {
                                                    b = a.call(this,
                                                        b, d, e) || this; b.inputs = {}; b.sd = !1; b.Lc = b.L.H(b.Lc, "ii"); b.Mc = b.L.H(b.Mc, "ir"); b.Rc = b.L.H(b.Rc, "ri"); b.$c = b.L.H(b.$c, "ur"); b.Hd = b.L.H(b.Hd, "ce"); b.Cc = b.L.H(b.Cc, "vc"); return b
                                                } Na(c, a); c.prototype.start = function () { var b = this, d = this.G.va(); this.sd = this.Kg(); x(function (e) { e = e.toLowerCase(); d.F(e, "NA:", H(b.Lc, b)); d.F(e, "NR:", H(b.Mc, b)) }, Rf); this.Pb = [this.eb.F(this.l.document, Ku, H(this.Hd, this)), function () { x(function (e) { e = e.toLowerCase(); d.ga(e, "NA:", b.Lc); d.ga(e, "NR:", b.Mc) }, Rf); x(b.$c, ca(b.inputs)) }] };
                                                c.prototype.$c = function (b) { var d = this.inputs[b]; if (d) { if (this.sd) { var e = d.Ai; d = d.element; e && this.l.Object.defineProperty(d, this.Ac(d), e) } delete this.inputs[b] } }; c.prototype.Mc = function (b) { b && this.$c(b.data.id) }; c.prototype.Lc = function (b) { b && (b = b.data, this.Rc(b.node, b.id)) }; c.prototype.Ac = function (b) { return Ue(b) ? "checked" : "value" }; c.prototype.Hd = function (b) { if (b = b.target) { var d = this.Ac(b); this.Cc(b[d], b) } }; c.prototype.Cc = function (b, d) {
                                                    var e = this.Z(d), f = this.inputs[e]; if (!f && (f = this.Rc(f, e), !f)) return;
                                                    e = f.Mg; var g = f.value, h = this.Ac(d), k = !b || I(typeof b, ["string", "boolean", "number"]), l = this.G.Jb().Nd; k && b !== g && (g = ze(this.l, d, h, b, this.G.Jb()).value, e ? this.G.Y("event", { target: this.Z(d), checked: !!b }, "change") : (e = Vc(this.l, d, l), l = e.hb, this.G.Y("event", { value: g, hidden: e.qb && !l, target: this.Z(d) }, "change")), f.value = b)
                                                }; c.prototype.Rc = function (b, d) {
                                                    var e = this; if (!Kf(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null; var f = Ue(b), g = this.Ac(b), h = { element: b, Mg: f, value: b[g] };
                                                    this.inputs[d] = h; this.sd && Ub(this.l, function () { var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {}, l = e.l.Object.getOwnPropertyDescriptor(b, g) || {}, m = z({}, k, l); if (Ga("((set)?(\\s?" + g + ")?)?", m.set)) { try { e.l.Object.defineProperty(b, g, z({}, m, { configurable: !0, set: function (p) { e.Cc(p, this); return m.set.call(this, p) } })) } catch (p) { } h.Ai = m } }); return h
                                                }; c.prototype.Kg = function () {
                                                    var b = !0, d = eb(this.l)("input"); try {
                                                        d = eb(this.l)("input"); d.value = "INPUT_VALUE"; d.style.setProperty("display", "none",
                                                            "important"); d.setAttribute("type", "text"); d.setAttribute("class", "__ym_input_override_test"); var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {}, f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {}, g = z({}, e, f); this.l.Object.defineProperty(d, "value", z({}, g, { configurable: !0, set: function (h) { return g.set.call(d, h) } })); "INPUT_VALUE" !== d.value && (b = !1); d.value = "INPUT_TEST"; "INPUT_TEST" !== d.value && (b = !1)
                                                    } catch (h) { b = !1 } return b
                                                }; return c
                                            }(bb), Mu = function (a) {
                                                function c(b,
                                                    d, e) { b = a.call(this, b, d, e) || this; b.Xa = { width: 0, height: 0, pageHeight: 0, pageWidth: 0, orientation: 0 }; b.ja.push([["resize"], b.yi]); b.ja.push([["orientationchange"], b.wi]); return b } Na(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.Pf() }; c.prototype.yi = function () { var b = this.Fd(); this.Mh(b) && (this.Xa = b, this.Qf(b)) }; c.prototype.wi = function () { var b = this.Fd(); this.Xa.orientation !== b.orientation && (this.Xa = b, this.Ki(b)) }; c.prototype.sf = function (b) { return !b.height || !b.width || !b.pageWidth || !b.pageHeight };
                                                c.prototype.Mh = function (b) { return b.height !== this.Xa.height || b.width !== this.Xa.width }; c.prototype.Fd = function () { var b = this.G.jb(), d = Rc(this.l), e = d[0]; d = d[1]; b = b.Ed(); return { width: e, height: d, pageWidth: b ? b.scrollWidth : 0, pageHeight: b ? b.scrollHeight : 0, orientation: this.G.jb().zh() } }; c.prototype.Ki = function (b) { var d; void 0 === d && (d = this.G.stamp()); this.G.Y("event", { width: b.width, height: b.height, orientation: b.orientation }, "deviceRotation", d) }; c.prototype.Qf = function (b, d) {
                                                    void 0 === d && (d = this.G.stamp()); this.G.Y("event",
                                                        { width: b.width, height: b.height, pageWidth: b.pageWidth, pageHeight: b.pageHeight }, "resize", d)
                                                }; c.prototype.Pf = function () { var b = this.Fd(); this.sf(b) ? T(this.l, H(this.Pf, this), 300) : (this.sf(this.Xa) && (this.Xa = b), this.Qf(b, 0)) }; return c
                                            }(bb), hf = function () {
                                                function a(c) { this.index = 0; this.wb = {}; this.l = c } a.prototype.qc = function (c, b, d) {
                                                    void 0 === d && (d = {}); var e = ka(this.l), f = this.index; this.index += 1; this.wb[f] = { Ka: 0, Vb: !1, jh: c, ed: [], Rd: e(Z) }; var g = this; return function () {
                                                        var h = Qa(arguments), k = d.gb && !g.wb[f].Vb,
                                                        l = g.wb[f]; la(g.l, l.Ka); l.ed = h; l.Vb = !0; var m = e(Z); if (k || m - l.Rd >= b) c.apply(void 0, h), l.Rd = m; l.Ka = T(g.l, function () { k || (c.apply(void 0, h), l.Rd = e(Z)); l.Vb = !1; l.ed = [] }, b, "th")
                                                    }
                                                }; a.prototype.flush = function () { var c = this; x(function (b) { var d = c.wb[b], e = d.Ka, f = d.jh, g = d.ed; d.Vb && (c.wb[b].Vb = !1, f.apply(void 0, g), la(c.l, e)) }, ca(this.wb)) }; return a
                                            }(), Nu = function (a) {
                                                function c(b, d, e) { d = a.call(this, b, d, e) || this; d.dg = []; d.Ie = { x: 0, y: 0 }; d.Da = new hf(b); d.Pc = d.L.H(d.Pc, "o"); d.ja.push([["scroll"], d.zi]); return d } Na(c, a);
                                                c.prototype.start = function () { a.prototype.start.call(this); this.G.Y("event", { x: Math.max(this.l.scrollX, 0), y: Math.max(this.l.scrollY, 0), page: !0, target: -1 }, "scroll", 0) }; c.prototype.stop = function () { a.prototype.stop.call(this); this.Da.flush() }; c.prototype.zi = function (b) { if (this.G.jb().nf()) this.Pc(b); else { var d = b.target, e = ia(function (f) { return f[0] === d }, this.dg).pop(); e ? e = e[1] : (e = this.Da.qc(H(this.Pc, this), 100, { gb: !0 }), this.dg.push([d, e])); e(b) } }; c.prototype.Pc = function (b) {
                                                    var d = this.G.jb().Ed(); b = b.target;
                                                    var e = this.Kb(b); d = d === b || this.l === b || this.l.document === b; var f = Math.max(e.left, 0); e = Math.max(e.top, 0); if (d) { if (this.Ie.x === f && this.Ie.y === e) return; this.Ie = { x: f, y: e } } this.G.Y("event", { x: f, y: e, page: d, target: d ? -1 : this.Z(b) }, "scroll")
                                                }; c.prototype.Kb = function (b) {
                                                    var d = { left: 0, top: 0 }; if (!b) return d; if (b.window === b) return { top: b.scrollY || 0, left: b.scrollX || 0 }; var e = b.ownerDocument || b, f = b.documentElement, g = e.defaultView || e.parentWindow, h = e.body; return b !== e || (b = this.G.jb().Ed(), b) ? I(b, [f, h]) ? {
                                                        top: b.scrollTop ||
                                                            g.scrollY, left: b.scrollLeft || g.scrollX
                                                    } : { top: b.scrollTop || 0, left: b.scrollLeft || 0 } : d
                                                }; return c
                                            }(bb), Ou = ["mousemove", "mousedown", "mouseup", "click"], Pu = function (a) {
                                                function c(b, d, e) { d = a.call(this, b, d, e) || this; d.ja.push([Ou, d.vi]); d.Da = new hf(b); d.Kc = d.L.H(d.Kc, "n"); d.Ui = d.L.H(d.Da.qc(H(d.Kc, d), 100), "t"); return d } Na(c, a); c.prototype.stop = function () { a.prototype.stop.call(this); this.Da.flush() }; c.prototype.vi = function (b) { var d = null; try { d = b.type } catch (e) { return } "mousemove" === d ? this.Ui(b) : this.Kc(b) }; c.prototype.Kc =
                                                    function (b) { var d = b.type, e = b.clientX; e = void 0 === e ? null : e; var f = b.clientY; f = void 0 === f ? null : f; b = b.target || this.l.document.elementFromPoint(e, f); this.G.Y("event", { x: e || 0, y: f || 0, target: this.Z(b) }, d) }; return c
                                            }(bb), Qu = ["focus", "blur"], Ru = function (a) { function c(b, d, e) { b = a.call(this, b, d, e) || this; b.ja.push([Qu, b.kh]); return b } Na(c, a); c.prototype.kh = function (b) { var d = b.target; b = b.type; this.G.Y("event", { target: this.Z(d === this.l ? this.l.document.documentElement : d) }, b) }; return c }(bb), Su = v(function (a) {
                                                var c = pa(a.getSelection,
                                                    "getSelection"); return c ? H(c, a) : E
                                            }), Tu = w(Su, ma), Uu = ["mousemove", "touchmove", "mousedown", "touchdown", "select"], Vu = /text|search|password|tel|url/, Wu = function (a) {
                                                function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Jd = !1; b.ja.push([Uu, b.Kh]); return b } Na(c, a); c.prototype.Kh = function (b) { var d = this.G, e = b.type, f = b.which; b = b.target; if ("mousemove" !== e || 1 === f) (e = "select" === e ? this.Dh(b) : this.Bh()) && e.start !== e.end ? (this.Jd = !0, d.Y("event", e, "selection")) : this.Jd && (this.Jd = !1, d.Y("event", { start: 0, end: 0 }, "selection")) };
                                                c.prototype.Bh = function () { var b = Tu(this.l); if (b && 0 < b.rangeCount) { b = b.getRangeAt(0) || this.l.document.createRange(); var d = this.Z(b.startContainer), e = this.Z(b.endContainer); if (!W(d) && !W(e)) return { start: b.startOffset, end: b.endOffset, startNode: d, endNode: e } } }; c.prototype.Dh = function (b) { if (Vu.test(b.type || "")) { var d = this.Z(b); if (!W(d)) return { start: b.selectionStart, end: b.selectionEnd, target: d } } }; return c
                                            }(bb), Xu = { focus: "windowfocus", blur: "windowblur" }, Yu = function (a) {
                                                function c(b, d, e) {
                                                    b = a.call(this, b, d, e) ||
                                                    this; b.visibility = null; W(b.l.document.hidden) ? W(b.l.document.msHidden) ? W(b.l.document.webkitHidden) || (b.visibility = { hidden: "webkitHidden", event: "webkitvisibilitychange" }) : b.visibility = { hidden: "msHidden", event: "msvisibilitychange" } : b.visibility = { hidden: "hidden", event: "visibilitychange" }; b.handleEvent = b.L.H(b.handleEvent, "e"); return b
                                                } Na(c, a); c.prototype.start = function () { this.Pb = [this.eb.F(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], H(this.handleEvent, this))] }; c.prototype.handleEvent =
                                                    function (b) { this.G.Y("event", {}, Xu[this.visibility ? this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type]) }; return c
                                            }(bb), Zu = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], $u = function (a) {
                                                function c(b, d, e) { d = a.call(this, b, d, e) || this; d.Yc = {}; d.scrolling = !1; d.Nf = 0; d.ja.push([["scroll"], d.Ji, d.l.document]); d.ja.push([Zu, d.Wi, d.l.document]); d.Da = new hf(b); d.Ob = d.L.H(d.Ob, "nh"); d.Vi = d.L.H(d.Da.qc(d.Ob, d.G.jb().nf() ? 0 : 50, { gb: !0 }), "th"); return d } Na(c, a); c.prototype.Ji = function () {
                                                    var b =
                                                        this; this.scrolling = !0; la(this.l, this.Nf); this.Nf = T(this.l, function () { b.scrolling = !1 }, 150)
                                                }; c.prototype.Wi = function (b) { var d = this, e = "touchcancel" === b.type || "touchend" === b.type; b.changedTouches && 0 < b.changedTouches.length && x(function (f) { var g = d.Fh(f); f.__ym_touch_id = g; e && delete d.Yc[f.identifier] }, Ca(b.changedTouches)); "touchmove" === b.type ? this.scrolling ? this.Ob(b) : this.Vi(b, this.G.stamp()) : this.Ob(b) }; c.prototype.Fh = function (b) { this.Yc[b.identifier] || (this.Yc[b.identifier] = ei()); return this.Yc[b.identifier] };
                                                c.prototype.Ob = function (b, d) { void 0 === d && (d = this.G.stamp()); var e = b.type, f = A(function (g) { return { id: g.__ym_touch_id, x: Math.round(g.clientX), y: Math.round(g.clientY), force: g.force } }, Ca(b.changedTouches)); 0 < f.length && this.G.Y("event", { touches: f, target: this.Z(b.target) }, e, d) }; return c
                                            }(bb), av = function (a) {
                                                function c(b, d, e) { b = a.call(this, b, d, e) || this; b.ja.push([["load"], b.ui, b.l.document]); return b } Na(c, a); c.prototype.ui = function (b) {
                                                    b = b.target; "IMG" === Ma(b) && b.getAttribute("srcset") && this.G.Y("mutation",
                                                        { target: this.Z(b), attributes: { src: b.currentSrc } }, "ac")
                                                }; return c
                                            }(bb), bv = function (a) {
                                                function c(b, d, e) { d = a.call(this, b, d, e) || this; d.pg = 1; d.Da = new hf(b); d.ic = d.L.H(d.ic, "z"); return d } Na(c, a); c.prototype.start = function () { if (this.kf()) { a.prototype.start.call(this); this.ic(); var b = this.eb.F(n(this.l, "visualViewport"), ["resize"], this.Da.qc(this.ic, 10)); this.Pb.push(b) } }; c.prototype.stop = function () { a.prototype.stop.call(this); this.Da.flush() }; c.prototype.ic = function () {
                                                    var b = this.kf(); b && b !== this.pg && (this.pg =
                                                        b, this.Li(b))
                                                }; c.prototype.kf = function () { var b = pe(this.l); return b ? b[2] : null }; c.prototype.Li = function (b) { var d = bg(this.l); this.G.Y("event", { x: d.x, y: d.y, level: b }, "zoom") }; return c
                                            }(bb), he, jf = { 91: "super", 93: "super", 224: "super", 18: "alt", 17: "ctrl", 16: "shift", 9: "tab", 8: "backspace", 46: "delete" }, Wl = { "super": 1, uj: 2, alt: 3, shift: 4, Oj: 5, "delete": 6, sj: 6 }, cv = [4, 9, 8, 32, 37, 38, 39, 40, 46], Xl = (he = {}, he["1"] = { 91: "&#8984;", 93: "&#8984;", 224: "&#8984;", 18: "&#8997;", 17: "&#8963;", 16: "&#8679;", 9: "&#8677;", 8: "&#9003;", 46: "&#9003;" },
                                                he["2"] = { 91: "&#xff;", 93: "&#xff;", 224: "&#xff;", 18: "Alt", 17: "Ctrl", 16: "Shift", 9: "Tab", 8: "Backspace", 46: "Delete" }, he.ii = { 32: "SPACEBAR", 37: "&larr;", 38: "&uarr;", 39: "&rarr;", 40: "&darr;", 13: "Enter" }, he), dv = /flash/, ev = /ym-disable-keys/, fv = /^&#/, gv = function (a) {
                                                    function c(b, d, e) {
                                                        d = a.call(this, b, d, e) || this; d.mb = {}; d.Oa = 0; d.Fa = []; d.bg = []; d.sc = 0; d.Gf = 0; d.ja.push([["keydown"], d.Hh]); d.ja.push([["keyup"], d.Ih]); d.zg = -1 !== Gc(n(b, "navigator.appVersion") || "", "Mac") ? "1" : "2"; d.Ic = d.L.H(d.Ic, "v"); d.vd = d.L.H(d.vd, "ec");
                                                        d.Vc = d.L.H(d.Vc, "sk"); d.Cd = d.L.H(d.Cd, "gk"); d.ue = d.L.H(d.ue, "sc"); d.fc = d.L.H(d.fc, "cc"); d.reset = d.L.H(d.reset, "r"); d.Sc = d.L.H(d.Sc, "rs"); return d
                                                    } Na(c, a); c.prototype.Hh = function (b) { if (this.Ic(b) && !this.Xh(b)) { var d = b.keyCode; b.repeat || this.mb[d] || (this.mb[b.keyCode] = !0, jf[b.keyCode] && !this.Oa ? (this.Oa += 1, this.ue(b), this.reset(300)) : this.Oa ? (this.Hg(), this.ke(b), this.vd()) : (this.reset(), this.ke(b))) } }; c.prototype.Ih = function (b) {
                                                        if (this.Ic(b)) {
                                                            var d = b.keyCode, e = jf[b.keyCode]; this.mb[b.keyCode] && (this.mb[d] =
                                                                !1); e && this.Oa && (this.Oa = 0, this.mb = {}); 1 === this.Fa.length && (b = this.Fa[0], I(b.keyCode, cv) && (this.Vc([b], !0), this.reset())); this.Fa = ia(w(S("keyCode"), Ba(d), Kc), this.Fa); la(this.l, this.sc)
                                                        }
                                                    }; c.prototype.Ic = function (b) { var d = this.l.document.activeElement; d = d && "OBJECT" === d.nodeName && dv.test(d.getAttribute("type") || ""); b = b.target; if (!b) return !d; b = "INPUT" === b.nodeName && "password" === b.getAttribute("type") && ev.test(b.className); return !d && !b }; c.prototype.vd = function () {
                                                        this.bg = this.Fa.slice(0); la(this.l, this.sc);
                                                        this.sc = T(this.l, u(this.bg, H(this.Vc, this)), 0, "e.c")
                                                    }; c.prototype.Vc = function (b, d) { void 0 === d && (d = !1); if (1 < b.length || d) { var e = this.Cd(b); this.G.Y("event", { keystrokes: e }, "keystroke") } }; c.prototype.Cd = function (b) { var d = this; b = A(function (e) { e = e.keyCode; var f = jf[e], g = d.yh(e); return { id: e, key: g, isMeta: !!f && fv.test(g), modifier: f } }, b); return Gg(function (e, f) { return (Wl[e.modifier] || 100) - (Wl[f.modifier] || 100) }, b) }; c.prototype.yh = function (b) { return Xl[this.zg][b] || Xl.ii[b] || String.fromCharCode(b) }; c.prototype.ke =
                                                        function (b) { I(b, this.Fa) || this.Fa.push(b) }; c.prototype.ue = function (b) { this.ke(b); this.fc() }; c.prototype.fc = function () { this.Oa ? T(this.l, this.fc, 100) : this.Fa = [] }; c.prototype.Hg = function () { la(this.l, this.Gf) }; c.prototype.reset = function (b) { b ? this.Gf = T(this.l, H(this.Sc, this), b) : this.Sc() }; c.prototype.Sc = function () { this.Oa = 0; this.Fa = []; this.mb = {}; la(this.l, this.sc) }; c.prototype.Xh = function (b) { return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === jf[b.keyCode] : !1 }; return c
                                                }(bb),
                                        oo = ["sr", "sd", "\u043d"], hv = /allow-same-origin/, iv = function (a) {
                                            function c(b, d, e) { d = a.call(this, b, d, e) || this; d.Yb = []; d.yd = {}; d.Yd = d.L.H(d.Yd, "fi"); d.Zd = d.L.H(d.Zd, "sd"); d.$d = d.L.H(d.$d, "src"); d.ra = new b.MutationObserver(d.$d); return d } Na(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.G.Jb().jc && this.G.va().F("iframe", "NA:", H(this.Yd, this)); this.G.ff().Ad().F(["sdr"], H(this.Zd, this)) }; c.prototype.stop = function () { a.prototype.stop.call(this); x(function (b) { b.G.stop() }, this.Yb) }; c.prototype.$d =
                                                function (b) { var d = b.pop().target; if (b = tb(function (f) { return f.mf === d }, this.Yb)) { this.Yb = ia(function (f) { return f.mf !== d }, this.Yb); var e = b.G.Bd(); try { b.G.stop() } catch (f) { } this.pc(d, e) } }; c.prototype.Yd = function (b) { if (b) { var d = b.data.node; this.ra.observe(d, { attributes: !0, attributeFilter: ["src"] }); this.pc(d, b.data.id) } }; c.prototype.pc = function (b, d) { var e = this; this.Vh(b) && Pb(this.l, b)(Ra(E, function () { var f = e.G.pc(b.contentWindow, d); e.Yb.push({ G: f, mf: b }) })) }; c.prototype.Zd = function (b) {
                                                    var d = this, e = b.frameId;
                                                    b = b.data; this.yd[e] || (this.yd[e] = { data: [] }); var f = this.yd[e]; f.data = f.data.concat(b); this.l.isNaN(f.rd) && x(function (g) { "page" === g.type && (f.rd = g.data.recordStamp - d.G.gf()) }, f.data); this.l.isNaN(f.rd) || (this.G.aa(A(function (g) { g.stamp += f.rd; g.stamp = d.l.Math.max(0, g.stamp); return g }, f.data)), f.data = [])
                                                }; c.prototype.Vh = function (b) {
                                                    var d = b.getAttribute("src"), e = b.getAttribute("sandbox"); return b.getAttribute("_ym_ignore") || e && !e.match(hv) || d && "about:blank" !== d && (d = Uc(this.l, d).host) && U(this.l).host !==
                                                        d ? !1 : n(b, "contentWindow.location.href")
                                                }; return c
                                        }(bb), jv = v(function (a) { var c = n(a, "sessionStorage"); if (!c) return null; try { var b = c.getItem("__ym_tab_guid"); c = !1; var d = n(a, "opener.sessionStorage"); try { c = !!d && b === d.getItem("__ym_tab_guid") } catch (e) { c = !0 } if (!b || c) b = ei(), a.sessionStorage.setItem("__ym_tab_guid", b); return b } catch (e) { return null } }), kv = function (a) {
                                            function c(b, d, e) { b = a.call(this, b, d, e) || this; b.oe = b.L.H(b.oe, "ps"); return b } Na(c, a); c.prototype.start = function () {
                                                this.G.va().Dc({
                                                    nodes: [this.l.document.documentElement],
                                                    Wc: this.oe
                                                })
                                            }; c.prototype.oe = function (b) {
                                                var d = this.G.Ah(), e = d.qh(), f = U(this.l), g = f.host, h = f.protocol; f = f.pathname; var k = Rc(this.l), l = k[0]; k = k[1]; this.G.Y("page", {
                                                    content: A(function (m) { m.node = void 0; return m }, b), base: e || "", hasBase: !!e, viewport: { width: l, height: k }, title: this.l.document.title, doctype: d.sh() || "", address: this.l.location.href, ua: this.l.navigator.userAgent, referrer: this.l.document.referrer, screen: { width: this.l.screen.width, height: this.l.screen.height }, location: { host: g, protocol: h, path: f },
                                                    recordStamp: this.G.gf(), tabId: jv(this.l)
                                                }, "page", 0)
                                            }; return c
                                        }(bb), lv = ["addRule", "removeRule", "insertRule", "deleteRule"], oh = [[function (a) {
                                            function c(b, d, e) { b = a.call(this, b, d, e) || this; b.ab = {}; b.Zb = {}; b.Oe = 0; b.Nc = b.L.H(b.Nc, "a"); b.vb = b.L.H(b.vb, "sr"); b.Oc = b.L.H(b.Oc, "r"); b.aa = b.L.H(b.aa, "d"); return b } Na(c, a); c.prototype.start = function () { var b = this.G.va(); b.F("style", "NA:", this.Nc); b.F("style", "NR:", this.Oc); this.aa() }; c.prototype.stop = function () {
                                                var b = this; a.prototype.stop.call(this); var d = this.G.va();
                                                d.ga("style", "NA:", this.Nc); d.ga("style", "NR:", this.Oc); this.aa(); la(this.l, this.Oe); x(function (e) { b.ab[e].sheet && b.Jf(b.ab[e].sheet) }, ca(this.ab)); this.ab = {}
                                            }; c.prototype.aa = function () {
                                                var b = this; x(function (d) { var e = d[0]; d = d[1]; if (d.length) { for (var f = [], g = d[0].stamp, h = [], k = 0; k < d.length; k += 1) { var l = d[k], m = l.stamp; delete l.stamp; m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l]) } f.length && h.push(f); h.length && x(function (p) { b.G.Y("event", { target: Fa(e), changes: p }, "stylechange", g) }, h); delete b.Zb[e] } }, Oa(this.Zb));
                                                this.Oe = T(this.l, this.aa, 100)
                                            }; c.prototype.vb = function (b, d, e, f, g) { void 0 === f && (f = ""); void 0 === g && (g = -1); this.Zb[b] || (this.Zb[b] = []); this.Zb[b].push({ op: d, style: f, index: g, stamp: e }) }; c.prototype.Bi = function (b, d) {
                                                var e = this, f = b.addRule, g = b.removeRule, h = b.insertRule, k = b.deleteRule; P(f) && (b.addRule = function (l, m, p) { e.vb(d, "a", e.G.stamp(), l + "{" + m + "}", p); return f.call(b, l, m, p) }); P(g) && (b.removeRule = function (l) { e.vb(d, "r", e.G.stamp(), "", l); return g.call(b, l) }); P(h) && (b.insertRule = function (l, m) {
                                                    e.vb(d, "a",
                                                        e.G.stamp(), l, m); return h.call(b, l, m)
                                                }); P(k) && (b.deleteRule = function (l) { e.vb(d, "r", e.G.stamp(), "", l); return k.call(b, l) })
                                            }; c.prototype.Jf = function (b) { var d = this; x(function (e) { var f = d.l.CSSStyleSheet.prototype[e]; P(f) && (b[e] = H(f, b)) }, lv) }; c.prototype.bh = function (b) { try { return b.cssRules || b.rules } catch (d) { return null } }; c.prototype.Nc = function (b) {
                                                var d = b.data; b = d.id; d = d.node; if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                                    var e = d.sheet, f = this.bh(e); if (f && f.length) {
                                                        for (var g = [], h = 0; h < f.length; h += 1)g.push({
                                                            style: f[h].cssText,
                                                            index: h, op: "a"
                                                        }); this.G.Y("event", { changes: g, target: b }, "stylechange")
                                                    } this.Bi(e, b); this.ab[b] = d
                                                }
                                            }; c.prototype.Oc = function (b) { b = b.data.id; var d = this.ab[b]; d && (delete this.ab[b], d.sheet && this.Jf(d.sheet)) }; return c
                                        }(bb), "ss"], [Lu, "in"], [Iu, "mu"], [Mu, "r"], [Nu, "sc"], [Pu, "mo"], [Ru, "f"], [Wu, "se"], [Yu, "wf"], [$u, "t"], [av, "src"], [bv, "z"], [gv, "ks"]]; oh.push([iv, "if"]); oh.push([kv, "pa"]); var mv = v(function (a) {
                                            var c = a.document; return {
                                                Ed: function () {
                                                    if (c.scrollingElement) return c.scrollingElement; var b = 0 === jb(c.compatMode,
                                                        "CSS1") ? c.documentElement : c.body; return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                                                }, zh: function () { var b = a.screen; if (!b) return 0; var d = tb(u(b, n), ["orientation", "mozOrientation", "msOrientation"]); return n(b, d + ".angle") || 0 }, Fj: u(a, kb), nf: u(a, Dd), Ej: u(a, Ye)
                                            }
                                        }), nv = function () {
                                            function a(c, b) {
                                                var d = this; this.Mb = 0; this.qd = []; this.Lb = null; this.xa = this.$b = this.$f = !1; this.recordStamp = 0; this.Ah = function () { return d.page }; this.Bd = function () { return d.Mb }; this.gf = function () { return d.recordStamp };
                                                this.xh = function () { return d.eb }; this.ff = function () { return d.Lb }; this.va = function () { return d.Kd }; this.stamp = function () { return d.ye ? d.l.Math.max(d.ye(Z) - d.recordStamp, 0) : 0 }; this.Jb = function () { return d.options }; this.jb = function () { return d.Eg }; this.Y = function (f, g, h, k) { void 0 === k && (k = d.stamp()); f = d.vh(f, g, h, k); d.aa(f) }; this.vh = function (f, g, h, k) { void 0 === k && (k = d.stamp()); return { type: f, data: g, stamp: k, frameId: d.Mb, event: h } }; this.aa = function (f) {
                                                    f = R(f) ? f : [f]; d.$f && !d.$b ? d.xa ? (f = A(function (g) {
                                                        return g.frameId ?
                                                            g : z(g, { frameId: d.Mb })
                                                    }, f), d.ff().Rf(f)) : d.Wb(f) : d.qd = d.qd.concat(f)
                                                }; this.l = c; var e = Mf(c, this, "R"); this.ve = e.H(this.ve, "s"); this.aa = e.H(this.aa, "sd"); e = J(c); e.C("wv2e") && ie(); e.D("wv2e", !0); this.options = b; this.eb = ja(c); this.Kd = new Ju(this.l, b); this.Eg = mv(c); this.Qe = A(function (f) { return new f[0](c, d, f[1]) }, oh); this.Sh(); this.page = mo(this.l); this.ve()
                                            } a.prototype.start = function (c) { this.$f = !0; this.Wb = c; this.Of() }; a.prototype.stop = function () {
                                                nh(this.l) && (x(function (c) { return c.stop() }, this.Qe), this.Kd.stop(),
                                                    this.Lb && this.Lb.stop(), this.xa || this.Y("event", {}, "eof"))
                                            }; a.prototype.pc = function (c, b) { var d = new a(c, z({}, this.options, { frameId: b })); d.start(E); return d }; a.prototype.Sh = function () { var c = this; this.xa = !!this.options.frameId; this.Mb = this.options.frameId || 0; this.$b = !this.xa; var b = this.options.jg || []; b.push(U(this.l).host); this.Lb = no(this.l, this, b); b = this.Lb.Ad(); kb(this.l) ? this.$b && b.F(["i"], function (d) { c.xa = d.xa; c.$b = !1; d.frameId && (c.Mb = d.frameId); c.Of() }) : this.$b = this.xa = !1 }; a.prototype.Of = function () {
                                                var c =
                                                    Ze(this.qd); this.aa(c)
                                            }; a.prototype.ve = function () { this.ye = ig(this.l); this.recordStamp = this.ye(Z); x(function (c) { c.start() }, this.Qe); this.Kd.start() }; return a
                                        }(), ov = function () {
                                            return function (a, c, b) {
                                                var d = this; this.gd = this.Rb = !1; this.Wa = []; this.wf = []; this.Te = []; this.send = function (e, f, g) { e = d.sender(e, d.oc); f && g && e.then(f, g); return e }; this.xe = function (e, f, g) { return new K(function (h, k) { e.push([f, h, k, g]) }) }; this.Lh = function () {
                                                    d.Wa = Gg(function (g, h) { return g[3].partNum - h[3].partNum }, d.Wa); var e = N(function (g,
                                                        h, k) { h = h[3]; return g && k + 1 === h.partNum }, !0, d.Wa), f = !!d.Wa[d.Wa.length - 1][3].end; return e && f
                                                }; this.wd = function (e) { uh(d.l, e.slice(), function (f) { d.send(f[0], f[1], f[2]) }, 20, "s.w2.sf.fes"); Ze(e) }; this.ih = function () { d.gd || (d.gd = !0, d.wd(d.wf), d.wd(d.Te)) }; this.Lg = function (e) { return N(function (f, g) { var h = "page" === g.type && !g.frameId, k = "eof" === g.data.type || "eof" === g.event, l = h && !!g.partNum; return { md: f.md || l, ld: f.ld || h, kd: f.kd || k } }, { ld: !1, kd: !1, md: !1 }, e) }; this.Jh = function (e, f, g) {
                                                    g ? (e = d.xe(d.Wa, e, f[0]), d.Lh() &&
                                                        (d.wd(d.Wa), d.Rb = !0)) : (d.Rb = !0, e = d.send(e)); return e
                                                }; this.hf = function (e, f, g) { var h; f = { J: (h = {}, h["wv-part"] = "" + g, h["wv-type"] = d.Mi, h), K: Ka(), ba: { da: f } }; e && f.K.D("bt", 1); return f }; this.$g = function (e, f, g) { e = d.hf(!1, e, g); return d.Rb ? d.send(e) : d.xe(d.Te, e, f) }; this.ji = function (e, f, g) { e = d.hf(!0, e, g); if (d.Rb) return d.send(e); var h = d.Lg(f); g = h.ld; var k = h.kd; h = h.md; var l; g && (l = d.Jh(e, f, h)); d.gd ? g || (l = d.send(e)) : (g || (l = d.xe(d.wf, e, f)), (d.Rb || k) && d.ih()); return l }; this.l = a; this.Mi = b; this.sender = wa(a, "W", c);
                                                this.oc = c
                                            }
                                        }(), Yl = v(function (a) { var c = J(a), b = c.C("isEU"); if (W(b)) { var d = Fa(Be(a, "is_gdpr") || ""); if (I(d, [0, 1])) c.D("isEU", d), b = !!d; else if (a = Pa(a).C("wasSynced"), a = n(a, "params.eu")) c.D("isEU", a), b = !!a } return b }, function (a) { return J(a).C("isEU") }), Hf = B("i.e", Yl), pv = B("i.ep", function (a) { Yl(a) }), qv = B("w2", function (a, c) {
                                            function b() { h = !0 } var d = J(a), e = M(c); if (!c.zb || rd(a) || !a.MutationObserver || !Ga("Element", a.Element)) return E; Ga("MutationObserver", a.MutationObserver) || qc(a, e).warn("w2mo"); var f = Da(function (k,
                                                l) { sa(c, l)["catch"](k) }), g = Pb(a)(Wg(C([a, c], ko)))(ml(function (k) { return new nv(a, k) })), h = !1; Hr([g, f])(Ra(D(a, "wv2.R.c"), function (k) {
                                                    var l = k[0]; k = k[1]; if (!h) {
                                                        b = function () { h || (h = !0, l && l.stop()) }; var m = d.C("wv2Counter"); if (!gi(a, k) || m) b(); else if (ja(a).F(a, ["beforeunload", "unload"], b), d.D("wv2Counter", e), d.D("stopRecorder", b), k = si(a, "7", "6")) {
                                                            m = new ov(a, c, k.type); var p = Vl.cf(e, "m", H(m.ji, m), k, a), q = Vl.cf(e, "e", H(m.$g, m), k, a); k = lo(); m = k.ri; q.F("ag", k.Cg); q.F("p", m); p.F("see", function (t) {
                                                                var y = !1; x(function (F) {
                                                                    "page" ===
                                                                    F.type && (y = !0)
                                                                }, t); y && (h || q.push({ type: "event", event: "fatalError", data: { code: "invalid-snapshot", ah: "p.s.f", stack: "" } }), b())
                                                            }); var r = Xb(function (t) { "eof" === n(t, "data.type") || "eof" === t.event ? (q.push(t), p.push(t), q.flush(!0), p.flush(!0)) : ("event" === t.type ? q : p).push(t) }); T(a, b, 864E5); Ub(a, function () { var t, y; ub(a, (t = {}, t.counterKey = e, t.name = "webvisor", t.data = (y = {}, y.version = 2, y), t)); l.start(r) })
                                                        }
                                                    }
                                                })); return function () { return b() }
                                        }), rv = B("w2.cs", function (a, c) {
                                            var b, d = M(c); fg(a, d, (b = {}, b.webvisor = !!c.zb,
                                                b))
                                        }), sv = ["rt", "mf"], Gf = v(Nc, M), ai = w(td, ic), tv = ob("isp", function (a, c) { sa(c, function (b) { var d = tb(function (h) { return n(b, "settings." + h) }, sv); if (d && be(a)) { var e = zf(b) && !te(a), f = Gf(c); z(f, { Sb: d, status: e ? 3 : 4 }); if (!e) { e = go(a, c, d); var g = function (h) { f.status = h }; return ("mf" === d ? io : ho)(a, c, e).then(u(1, g))["catch"](u(2, g)) } } })["catch"](D(a, "l.isp")) }), Zl = B("fbq.o", function (a, c, b) {
                                            var d = n(a, "fbq"); if (d && d.callMethod) {
                                                var e = function () { var g = Qa(arguments), h = d.apply(void 0, g); c(g); return h }; z(e, d); b && x(c, b); a.fbq =
                                                    e
                                            } else var f = T(a, C([a, c].concat(Ca(d && d.queue)), Zl), 1E3, "fbq.d"); return H(la, null, a, f)
                                        }), jd, Kb, kd, ph = (jd = {}, jd.add_to_wishlist = "add-to-wishlist", jd.begin_checkout = "begin-checkout", jd.generate_lead = "submit-lead", jd.add_payment_info = "add-payment-info", jd), qh = (Kb = {}, Kb.AddToCart = "add-to-cart", Kb.Lead = "submit-lead", Kb.InitiateCheckout = "begin-checkout", Kb.Purchase = "purchase", Kb.CompleteRegistration = "register", Kb.Contact = "submit-contact", Kb.AddPaymentInfo = "add-payment-info", Kb.AddToWishlist = "add-to-wishlist",
                                            Kb.Subscribe = "subscribe", Kb), eo = (kd = {}, kd["1"] = ph, kd["2"] = ph, kd["3"] = ph, kd["0"] = qh, kd), fo = [qh.AddToCart, qh.Purchase], uv = qa(function (a, c) { var b = n(c, "ecommerce"), d = n(c, "event") || ""; if (!(b = b && d && { version: "3", uc: d })) a: { if (R(c) || Ua(c)) if (b = Qa(c), d = b[1], "event" === b[0] && d) { b = { version: "2", uc: d }; break a } b = void 0 } b || (b = (b = n(c, "ecommerce")) && { version: "1", uc: G(",", ca(b)) }); b && a(b) }), vv = B("ag.e", function (a, c) {
                                                if ("0" === c.ca) {
                                                    var b = [], d = D(a, "ag.s", C([ma, b], x)); sa(c, function (e) {
                                                        if (n(e, "settings.auto_goals") && Aa(a,
                                                            c) && (e = Je(a, c, "autogoal").reachGoal)) { e = C([e, c.ud], co); var f = uv(e); e = C([a, e], bo); b.push(Zl(a, e)); b.push(hj(a, "dataLayer", function (g) { g.ra.F(f) })) }
                                                    }); return d
                                                }
                                            }), wv = /[^\d.,]/g, xv = /[.,]$/, $n = B("ep.pp", function (a, c) {
                                                if (!c) return 0; a: { var b = c.replace(wv, "").replace(xv, ""); var d = "0" === b[b.length - 1]; for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) { var f = b[e - 1]; if (I(f, [",", "."])) { d = f; break a } } d = "" } b = d ? c.split(d) : [c]; d = d ? b[1] : "00"; b = parseFloat(Vb(b[0]) + "." + Vb(d)); d = Math.pow(10, 8) - .01; a.isNaN(b) ? b = 0 : (b = a.Math.min(b,
                                                    d), b = a.Math.max(b, 0)); return b
                                            }), yv = [[["EUR", "\u20ac"], "978"], [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"], [["GBP", "\u00a3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]], zv = v(function (a) { return new RegExp(G("|", a), "i") }), Av = B("ep.cp", function (a) {
                                                if (!a) return "643";
                                                var c = Yi(a); return (a = tb(function (b) { return zv(b[0]).test(c) }, yv)) ? a[1] : "643"
                                            }), Bv = v(function () {
                                                function a() { var k = h + "0", l = h + "1"; f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1) } function c() { var k = h + "1"; f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1) } function b(k) { void 0 === k && (k = 1); var l = d.slice(g, g + k); g += k; return l } for (var d = G("", Zh("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")),
                                                    e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)(); return e
                                            }), Xn = B("ep.dec", function (a, c) {
                                                if (!c || rd(a)) return []; var b = Zh(c), d = b[1], e = b[2], f = b.slice(3); if (2 !== Tg(b[0])) return []; b = Bv(); f = G("", f); e = Tg(d + e); var g = ""; d = ""; for (var h = 0; d.length < e && f[h];)g += f[h], b[g] && (d += String.fromCharCode(Tg(b[g])), g = ""), h += 1; b = ""; for (f = 0; f < d.length;)e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                                                    15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3); d = zb(a, b); return R(d) ? A(ks, d) : []
                                            }), Zn = B("ep.ent", function (a, c, b) { a = "" + Xa(a, 10, 99); b = "" + 100 * c + b + a; if (16 < Ua(b)) return ""; b = $h("0", 16, b); c = b.slice(0, 8); b = b.slice(-8); c = (+c ^ 92844).toString(35); b = (+b ^ 92844).toString(35); return "" + c + "z" + b }), $l = w(Yh, Av), am = B("ep.ctp", function (a, c, b, d) {
                                                var e = $l(a, b), f = Xh(a, d); Wh(a, c, e, f); Ga("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function () { var g = $l(a, b), h = Xh(a, d); if (e !== g || f !== h) e = g, f = h, Wh(a, c, e, f) })).observe(a.document.body,
                                                    { attributes: !0, childList: !0, subtree: !0, characterData: !0 })
                                            }), Cv = B("ep.chp", function (a, c, b, d, e) { b && Ff(a, c); return d || e ? ja(a).F(a.document, ["click"], D(a, "ep.chp.cl", C([a, c, d, e], Yn))) : E }), Gv = B("ep.i", function (a, c) {
                                                if (pd(a)) return Wn(a, c).then(function (b) {
                                                    var d = b.Wg, e = d[0], f = d[1], g = d[2], h = d[3], k = d[4], l = d[5], m = d[6], p = d[7], q = d[8], r = d[9], t = d[10], y = d[11], F = d[12], O = d[13], L = d[14], na = d[15]; if (!b.isEnabled) return K.resolve(E); var xa = we(a, e), Eb = we(a, h), Jd = we(a, m), Ge = we(a, q), Dv = "" + e + f + g === "" + h + k + l; return new K(function (Ev,
                                                        Fv) { Pb(a)(Ra(Fv, function () { xa && am(a, c, f, g, t, y, F); Eb && !Dv && am(a, c, k, l, O, L, na); Ev(Cv(a, c, Jd || Ge, p, r)) })) })
                                                })
                                            }), Fn = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"], Vn = w(ca, Zc), Hv = B("cc.i", function (a, c) { var b = C([a, c], Un); b = C([a, b, 300, void 0], T); sa(c, b) }), Iv = u("9-d5ve+.r%7", Q), Jv = B("ad", function (a, c) {
                                                if (!c.Ta) {
                                                    var b = J(a); if (!b.C("adBlockEnabled")) {
                                                        var d = function (m) { I(m, ["2", "1"]) && b.D("adBlockEnabled", m) }, e = lc(a), f = e.C("isad"); if (f) d(f); else {
                                                            var g = u("adStatus", b.D), h = function (m) {
                                                                m =
                                                                m ? "1" : "2"; d(m); g("complete"); e.D("isad", m, 1200); return m
                                                            }, k = wa(a, "adb", c); if (!b.C("adStatus")) { g("process"); var l = "metrika/a" + Iv().replace(/[^a-v]+/g, "") + "t.gif"; Rn(a, function () { return k({ ha: { Ca: l } }).then(u(!1, h))["catch"](u(!0, h)) }) }
                                                        }
                                                    }
                                                }
                                            }), Kv = B("pr.p", function (a, c) { var b, d; if (tg(a)) { var e = wa(a, "5", c), f = Ka((b = {}, b.pq = 1, b.ar = 1, b)); e({ K: f, J: (d = {}, d["page-url"] = U(a).href, d["page-ref"] = n(a, "document.referrer") || "", d) }, c)["catch"](D(a, "pr.p.s")) } }), Vh = !1, Lv = B("fid", function (a) {
                                                var c, b = E; if (!P(a.PerformanceObserver)) return b;
                                                var d = J(a); if (d.C("fido")) return b; d.D("fido", !0); var e = new a.PerformanceObserver(D(a, "fid", function (f) { f = f.getEntries()[0]; d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime))); b() })); b = function () { return e.disconnect() }; try { e.observe((c = {}, c.type = "first-input", c.buffered = !0, c)) } catch (f) { } return b
                                            }), Mv = B("lt.p", ob("lt.p", function (a) {
                                                var c; if (Ga("PerformanceObserver", a.PerformanceObserver)) {
                                                    var b = 0, d = new a.PerformanceObserver(D(a, "lt.o", function (e) {
                                                        e && e.getEntries && (e = e.getEntries(), b = N(function (f,
                                                            g) { return f + g.duration }, b, e), Zd(a).D("lt", b))
                                                    })); try { d.observe((c = {}, c.type = "longtask", c.buffered = !0, c)) } catch (e) { return } return function () { return d.disconnect() }
                                                }
                                            })), Nv = v(w(S("performance.memory.jsHeapSizeLimit"), Ha("concat", ""))), Ov = ["availWidth", "availHeight", "availTop"], Pv = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "), Qv = ["webgl", "experimental-webgl"], Pn = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], Cf = u(Sa("ccf"), Va), On = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                                            Th = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "), Mn = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), Hn = v(Ti), Sh = v(zb, gb), Rv = B("phc.p", function (a, c) {
                                                if (!zl(a)) return sa(c, function (b) {
                                                    var d = c.id, e = Sc(a, void 0, d), f = e.C("phc_settings") || ""; if (b = n(b, "settings.phchange")) { var g = Ab(a, b) || ""; g !== f && e.D("phc_settings", g) } else f && (b = Sh(a, f)); e = n(b, "clientId"); f = n(b, "orderId"); b = n(b, "phones") || []; e && f && b.length && (f =
                                                        { Db: "", Qb: "", Yf: 0, ma: {}, Ba: [], qf: !1, gb: !0, l: a, oc: c }, z(f, { qf: !0 }), Rh(a, d, f), b = Ld(a), e = Vi(a, b, 1E3), d = H(Rh, null, a, d, f), e.F(d), Wi(a, b))
                                                })
                                            }), rh = v(function (a, c) {
                                                var b = J(a), d = Pa(a), e = [], f = C([a, c, b, d], cq); Ed(a) || dq(a, "14.1") || e.push(C([En, "pp", ""], f)); var g = !Cl(a) || Af(a, 68); g && e.push(C([Gn, "pu", ""], f)); !g || d.Md || be(a) || (e.push(C([Dn, "zzlc", "na"], f)), e.push(C([Cn, "cc", ""], f))); return e.length ? {
                                                    sa: function (h, k) { if (0 === b.C("isEU")) try { x(Ie, e) } catch (l) { } k() }, N: function (h, k) {
                                                        var l = h.K; if (l && 0 === b.C("isEU")) try {
                                                            x(Da(l),
                                                                e)
                                                        } catch (m) { } k()
                                                    }
                                                } : {}
                                            }, w(gb, M)), Sv = w(function (a) { return (a = n(a, "navigator.plugins")) && Ua(a) ? w(Ca, va, Ks(function (c, b) { return c.name > b.name ? 1 : 2 }), Xb($p))(a) : "" }, Ee(",")), Tv = function (a) { return function (c) { var b = eb(c); if (!b) return ""; b = b("canvas"); var d = [], e = a(), f = e.dh; e = e.Tg; try { var g = Ha("getContext", b); d = A(w(Q, g), e) } catch (h) { return "" } return (g = tb(Q, d)) ? f(c, { canvas: b, Ig: g }) : "" } }(function () { return { Tg: Qv, dh: yn } }), wn = ["name", "lang", "localService", "voiceURI", "default"], Uv = B("p.tfs", function (a) {
                                                var c = J(a); if (!c.C("tfs")) {
                                                    c.D("tfs",
                                                        !0); c = ja(a); var b = E; b = c.F(a, ["message"], function (d) {
                                                            var e = n(d, "origin"); if ("https://iframe-toloka.com" === e || "https://iframe-tasks.yandex" === e) if (d = zb(a, d.data), oa(d) && "appendremote" === d.action) if (d = Pa(a), d.C("tfsc") || a.confirm("\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?")) {
                                                                d.D("tfsc",
                                                                    1); var f, g; J(a).D("_u", (f = {}, f.getCachedTags = He, f.button = (g = {}, g.closest = u(a, le), g.select = Zf, g.getData = u(a, me), g), f)); Ac(a, { src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js" }); b()
                                                            } else a.close()
                                                        })
                                                }
                                            }), un = fb(/[a-z\u0430-\u044f\u0451,.]/gi), Vv = B("ice", function (a, c, b) { (c = Aa(a, c)) && (b = Nh(b)) && Mh(a, c, b) }), Wv = B("ice", function (a, c, b) { (c = Aa(a, c)) && (b = Nh(b)) && vj(a, b.Uh).then(C([a, c, b], Mh), D(a, "ice.s")) }), Xv = ["text", "email", "tel"], Yv = ["cc-", "name", "shipping"], Zv = B("icei", function (a,
                                                c) { if (vl(a)) { var b = !1, d = E, e = E; sa(c, function (f) { if (!(Hf(a) || n(f, "settings.eu") || b)) { f = n(f, "settings.cf") ? Wv : Vv; var g = C([a, c], f), h = function (k) { return Qf(a, k) || !I(k.type, Xv) || Za(Hb, A(u(k.autocomplete, db), Yv)) ? !1 : !0 }; d = Oh(a, "input", ["blur"], g, h); e = Oh(a, "form", ["submit"], function (k) { var l = k.target; l && (l = lb("input", l), x(function (m) { h(m) && g({ target: m, isTrusted: k.isTrusted }) }, l)) }) } }); return function () { b = !0; d(); e() } } }), Lh, $v = B("p.ai", function (a, c) {
                                                    if (Ed(a) || tf(a)) return sa(c, function (b) {
                                                        var d; if (b = n(b, "settings.sbp")) return Kh(a,
                                                            z({}, b, (d = {}, d.c = c.id, d)), 10)
                                                    })
                                                }), aw = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "), bm = ob("uah", function (a) { if (!Ga("getHighEntropyValues", n(a, "navigator.userAgentData.getHighEntropyValues"))) return K.reject("0"); try { return a.navigator.userAgentData.getHighEntropyValues(aw).then(function (c) { if (!oa(c)) throw "2"; return c }, function () { throw "1"; }) } catch (c) { return K.reject("3") } }), cm = new RegExp(G("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
                                                    "\\$&")), nn = v(function (a) { var c = nb(a); return (c = cm.test(c)) ? K.resolve(c) : bm(a).then(function (b) { try { return N(function (d, e) { return d || cm.test(e.brand) }, !1, b.brands) } catch (d) { return !1 } }, u(!1, Q)) }), xc = ["0", "1", "2", "3"], Tc = xc[0], sf = xc[1], bw = xc[2], dm = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"], Ih = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(dm), rf = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(dm).concat(["28",
                                                        "29", "30", "31"]), cw = "3 13 14 15 16 17 28".split(" "), re = w(Xb(S("ymetrikaEvent.type")), Js(wc(rf))), dw = { bi: !0, url: "https://yastatic.net/s3/gdpr/v3/gdpr", Bf: "", tf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ") }, qn = ob("gdpr", function (a, c, b, d, e) {
                                                            function f(p) { c("10"); b.F(Ih, function (q) { var r; q = q.type; l.Uf((r = {}, r.type = q, r)); p({ value: Jh(q) }) }) } var g = void 0 === e ? dw : e; e = g.url; var h = g.Bf, k = g.bi; g = tn(a, g.tf, d.lj); var l = ue(a, d); if (!l) return K.resolve({
                                                                value: Tc,
                                                                Od: !0
                                                            }); if (a._yaGdprLoaded) return new K(function (p) { c("7"); f(p) }); var m = Ac(a, { src: "" + e + (k ? "" : g) + h + ".js" }); return new K(function (p, q) { m ? (c("7"), m.onerror = function () { var r; c("9"); l.Uf((r = {}, r.type = "GDPR-ok-view-default", r)); p(null) }, m.onload = u(p, f)) : (c("9"), q(Sa("gdp.e"))) })
                                                        }), dc, sn = (dc = {}, dc["GDPR-ok"] = "ok", dc["GDPR-ok-view-default"] = "ok-default", dc["GDPR-ok-view-detailed"] = "ok-detailed", dc["GDPR-ok-view-detailed-0"] = "ok-detailed-all", dc["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", dc["GDPR-ok-view-detailed-2"] =
                                                            "ok-detailed-tech-analytics", dc["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", dc), ln = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "), Hh = [], Fh = Ha("push", Hh), kn = v(function (a, c) { var b = c.C("gdpr"); return I(b, xc) ? "-" + b : "" }), em = v(Kd), ew = v(function () { var a = N(function (c, b) { "ru" !== b && (c[b] = Kl + "." + b); return c }, {}, Dg); x(function (c) { a[c] = c }, ca(Fl)); a["mc.webvisor.org"] = "mc.webvisor.org"; return a }), an = v(function (a) {
                                                                a = U(a).hostname; return (a = tb(w(S("1"), Ui("test"),
                                                                    vb(ma)(a)), Oa(Fl))) && a[0]
                                                            }), fm = function (a, c) { return function (b, d) { var e = M(d); e = ew(e); var f = Zm(b, e), g = J(b), h = kb(b); return be(b) || Xd(b) ? {} : { N: function (k, l) { var m = k.K; m = !(m && m.C("pv")); if (h || m || !f.length) return l(); if (g.C("startSync")) em(b).push(l); else { g.D("startSync", !0); m = C([b, f, E, !1], a); var p = uf[0]; if (!p) return l(); l(); p(b).then(m).then(E, w(ud(E), D(b, c)))["catch"](E) } } } } }(function (a, c, b, d) {
                                                                var e = ka(a), f = J(a), g = Pa(a); b = ch(a, "c"); var h = $b(a, b); return Cb(function (k, l) {
                                                                    function m() {
                                                                        var r = g.C("synced");
                                                                        f.D("startSync", !1); r && (r[l.hi] = p, g.D("synced", r)); r = em(a); x(ma, r); Ze(r)
                                                                    } var p, q = h({ ba: { ia: ["sync.cook"], Pa: 1500 } }, [Ia.Ra + "//" + l.Si + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function () { p = e(sb); m() })["catch"](function () { p = e(sb) - 1435; m() }); q = u(q, Q); return k.then(q)
                                                                }, K.resolve(), c)["catch"](D(a, "ctl"))
                                                            }, "sy.c"), Xm = qa(function (a, c) { var b = c.pd, d = c.Ke, e = c.cookie, f = Ch(c)[a]; f = oe(f, d); b !== f && (b = Dh(e, d), b[f] += 1, Ym(b, c)) }), fw = v(function (a) {
                                                                var c; (c = n(a, "document.referrer")) ? (c = Uc(a, c).host, c = wj(c),
                                                                    c = Kl + "." + (c || uu)) : c = mc; c = ["mc.webvisor.org", c]; a = lc(a); return { cookie: a, Ke: c, pd: c.length - 1, Oh: Dh(a, c) }
                                                            }), Wm = w(fw, Da), Lb, Um = (Lb = {}, Lb.brands = "chu", Lb.architecture = "cha", Lb.bitness = "chb", Lb.uaFullVersion = "chf", Lb.fullVersionList = "chl", Lb.mobile = "chm", Lb.model = "cho", Lb.platform = "chp", Lb.platformVersion = "chv", Lb), Rm = v(function (a) { return bm(a).then(Sm, Vm) }), gw = ob("ot", function (a, c) {
                                                                if (Qe(a)) {
                                                                    var b = ja(a); return sa(c, D(a, "ot.s", function (d) {
                                                                        if (n(d, "settings.oauth")) {
                                                                            var e = [], f = td(a, c); e.push(b.F(a, ["message"],
                                                                                D(a, "ot.m", u(f, Qm)))); Pb(a)(Ra(E, D(a, "ot.b", function () {
                                                                                    function g(q) { var r, t = q.href; t && fh(t, "https://oauth.yandex.ru/") && !db(t, "_ym_uid=") && (t = db(t, "?") ? "&" : "?", q.href += "" + t + Ic((r = {}, r._ym_uid = f, r.mc = "v", r)), b.F(q, ["click"], D(a, "ot.click", function () { var y = "et=" + l(Z); q.href += "&" + y }))) } var h, k = a.document.body, l = ka(a), m = lb("a", k); x(g, m); if (Ga("MutationObserver", a.MutationObserver)) {
                                                                                        m = new a.MutationObserver(D(a, "ot.m", u(function (q) {
                                                                                            q = q.addedNodes; for (var r = 0; r < q.length; r += 1) {
                                                                                                var t = q[r]; "A" === t.nodeName &&
                                                                                                    g(t)
                                                                                            }
                                                                                        }, x))); var p = (h = {}, h.childList = !0, h.subtree = !0, h); m.observe(k, p); e.push(H(m.disconnect, m))
                                                                                    }
                                                                                }))); return C([Ie, e], x)
                                                                        }
                                                                    }))
                                                                }
                                                            }), hw = B("p.cta", function (a) { Pb(a)(Ra(E, function () { var c = J(a); if (Om(a.document)) { var b = 0; if (bi(a, ye, "cta")) { var d = E, e = function () { ci(ye, "cta"); d(); la(a, b) }; d = ja(a).F(a, ["message"], B("p.cta.o", C([a, c, e], Pm))); b = T(a, e, 1500) } else c.D("cta.e", "if") } else c.D("cta.e", "ns") })) }), Km = ["bidResponse", "bidAdjustment", "bidWon"], Lm = ["cpm", "currency", "netRevenue", "requestTimestamp", "responseTimestamp"],
                                            Ja = {}, iw = B("pj", function (a, c) { var b, d = Aa(a, c), e = d && d.params; return e ? (b = {}, b.pbjs = function (f) { R(f) && (f = ia(Hb, A(function (g) { if (oa(g) && g.data && g.event && oa(g.data)) { var h = n(g, "data.args"); return h ? { event: g.event, data: h } : g } }, f)), Jm(f), Mm(a, e)) }, b) : E }), Hm = /(\D\d*)/g, Im = v(function () { var a = He(); return N(function (c, b) { c[a[b]] = b; return c }, {}, ca(a)) }), jw = B("g.v.e", function (a, c) {
                                                return sa(c, D(a, "g.v.t", function (b) {
                                                    var d = Aa(a, c); if (d && (b = n(b, "settings.goal_values"))) {
                                                        var e = ia(w(S("url"), u(a, Cm)), b); if (0 !== e.length) {
                                                            b =
                                                            ja(a); var f = []; e = C([a, function (g) { var h, k; return d.params((h = {}, h.__ym = (k = {}, k.goal_values = g, k), h)) }, e], Fm); f.push(b.F(a, ["click"], D(a, "g.v.c", C([e], Dm)))); f.push(b.F(a, ["submit"], D(a, "g.v.s", C([a, e], Em)))); return C([w(Q, ma), f], x)
                                                        }
                                                    }
                                                }))
                                            }), gm = {}, hm = v(Nc), Bm = w(Ha("exec", /counterID=(\d+)/), S("1")), im = qa(function (a, c) {
                                                var b, d = hm(a), e = Ca(c), f = e[0], g = e[1], h = e.slice(2); if (g) {
                                                    e = Am(a, f); var k = e[0], l = e[1]; e = M(l); d[e] || (d[e] = {}); d = d[e]; c.Ve || gm[g] && N(function (m, p) { return m || !!p(a, l, h, k) }, !1, gm[g]) || ("init" ===
                                                        g ? (c.Ve = !0, k ? Mb(a, "" + f, "dc", (b = {}, b.key = f, b)) : a["yaCounter" + l.id] = new a.Ya[Ia.lc](z({}, h[0], l))) : k && k[g] && d.Rh ? (k[g].apply(k, h), c.Ve = !0) : (b = d.Zf, b || (b = [], d.Zf = b), b.push(ta([f, g], h))))
                                                }
                                            }), kw = "close stop focus blur open alert confirm prompt print postMessage captureEvents releaseEvents getSelection getComputedStyle matchMedia moveTo moveBy resizeTo resizeBy scroll scrollTo scrollBy getDefaultComputedStyle scrollByLines scrollByPages find dump requestIdleCallback cancelIdleCallback requestAnimationFrame cancelAnimationFrame reportError setTimeout clearTimeout setInterval clearInterval queueMicrotask fetch self history customElements event frames opener parent frameElement navigator clientInformation external performance visualViewport crypto speechSynthesis localStorage origin indexedDB caches sessionStorage window document location top".split(" "),
                                            kf, xm = (kf = {}, kf.copyFromWindow = function (a, c, b) { if (I(b, kw) || fh(b, "on")) throw ib("rwp"); c = a[b]; if (ha(c) || Wc(a, c) || fa(c) || P(c)) return c; if (R(c)) return Yd(c); if (oa(c)) return zm(c) }, kf.loadScript = function (a, c, b, d, e) { a = Ac(a, { src: b }); if (!a) throw ib("stce"); P(d) && (a.onload = function () { return d.apply(null) }); P(e) && (a.onerror = function () { return e.apply(null) }) }, kf), wh = E, qm = v(function (a, c) { wh = c }), rm = ["ymab", "rcmx", "yaServey", "ym_debug"], lw = ob("is", function (a) {
                                                var c; if (!kb(a)) {
                                                    var b = lc(a); if (Xe(a, "0")) b.Gb("sup_debug");
                                                    else { var d = Xe(a, "2"), e = !!b.C("sup_debug"); if (d || e) a._ym_debug = !0, b.D("sup_debug", "1", 1440), pm(a)((c = {}, c.code = [[1, "ym_debug", [18, ["a", [37, [40, "require"], "loadScript"]]], [2, [37, [40, "a"], Ll + "/tag_debug.js"]]]], c)) }
                                                }
                                            }), om = B("destruct.e", function (a, c, b) { return function () { var d = J(a), e = c.id; x(function (f, g) { return P(f) && D(a, "dest.fr." + g, f)() }, b); delete d.C("counters")[M(c)]; delete a["yaCounter" + e] } }), ld = J(window); ld.Ia("hitParam", {}); ld.Ia("lastReferrer", window.location.href); (function () {
                                                X.push(function (a,
                                                    c) { var b; return b = {}, b.firstPartyParams = ut(a, c), b.firstPartyParamsHashed = Uq(a, c), b }); ce.push("fpp"); ce.push("fpmh")
                                            })(); (function () { var a = J(window); a.Ia("getCounters", vt(window)); md.push(wt); Vg.push(function (c, b) { b.counters = a.C("getCounters") }) })(); (function () { X.push(function (a, c) { var b; ub(a, (b = {}, b.counterKey = M(c), b.name = "counter", b.data = ok(c), b)) }) })(); Ea["1"] = qb; X.push(xt); za["1"] = vc; xb(eg, -1); Yb["1"] = [[eg, -1], [Ve, 1], [Pe, 2], [Sb(), 3]]; X.push(yt); X.push(B("p.ar", function (a, c) {
                                                var b, d = wa(a, "a", c);
                                                return b = {}, b.hit = function (e, f, g, h, k, l) { var m, p, q, r = { J: {}, K: Ka((m = {}, m.pv = 1, m.ar = 1, m)) }; f = oa(f) ? { title: f.title, Ff: f.referer, R: f.params, ec: f.callback, l: f.ctx } : { title: f, Ff: g, R: h, ec: k, l: l }; h = Nd(c); g = e || U(a).href; h.url !== g && (h.ref = h.url, h.url = e); e = f.Ff || h.ref || a.document.referrer; h = oc(a, c, "pv", (p = {}, p.id = c.id, p.url = g, p.ref = e, p), f.R); p = z(r.M || {}, { R: f.R, title: f.title }); r = d(z(r, { M: p, J: z(r.J || {}, (q = {}, q["page-url"] = g, q["page-ref"] = e, q)) }), c).then(h); return Yc(a, "p.ar.s", r, f.ec || E, f.l) }, b
                                            })); Ea.a = qb; Yb.a =
                                                Zb; za.a = tl; X.push(Je); Ea.g = qb; za.g = vc; Yb.g = Zb; X.push(zt); X.push(At); Yb.t = Zb; Ea.t = qb; za.t = vc; X.push(B("cl.p", function (a, c) {
                                                    function b(p, q, r, t) { void 0 === t && (t = {}); r ? Le(a, c, { url: r, ob: !0, Fc: p, Jc: q, sender: e, ng: t }) : h.warn("clel") } var d, e = wa(a, "2", c), f = [], g = M(c), h = qc(a, g), k = D(a, "s.s.tr", u(Oe(a, g), Mq)); g = { l: a, cb: c, eh: f, sender: e, Bj: J(a), Rg: fd(a, c.id), Dj: Fc(a), Zi: u(u(g, ff(a)), w(ma, S("trackLinks"))) }; g = D(a, "cl.p.c", u(g, Jq)); g = ja(a).F(a, ["click"], g); c.gg && k(c.gg); var l = D(a, "file.clc", C([!0, !1], b)), m = D(a, "e.l.l.clc",
                                                        C([!1, !0], b)); f = D(a, "add.f.e.clc", Bt(f)); return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = g, d
                                                })); Yb["2"] = Zb; Ea["2"] = qb; za["2"] = vc; Ea.r = Ud("r"); za.r = tl; cb.push(B("p.r", function (a, c) { var b = Dt(a), d = wa(a, "r", c), e = D(a, "rts.p"); return sa(c, C([function (f, g) { var h = { id: g.Qg, ca: g.ca }, k = { ba: { da: g.Ci }, K: Ka(g.Fg), J: g.R, M: { Ub: g.Ub }, ha: { Ca: g.Ca } }; g.Ja && (k.Ja = wf(g.Ja)); h = d(k, h)["catch"](e); return f.then(u(h, Q)) }, K.resolve(), b], N))["catch"](e) })); aa("r", function (a) {
                                                    return {
                                                        N: function (c, b) {
                                                            var d =
                                                                c.K, e = void 0 === d ? Ka() : d, f = c.M.Ub, g = Md(a); d = e.C("rqnl", 0) + 1; e.D("rqnl", d); if (e = n(g, G(".", [f, "browserInfo"]))) e.rqnl = d, cg(a); b()
                                                        }, sa: function (c, b) { mj(a, c); b() }
                                                    }
                                                }, 1); xb(Ke, 100); aa("1", Ke, 100); X.push(Et); aa("n", Ve, 1); aa("n", Pe, 2); aa("n", Sb(), 3); aa("n", Ke, 100); Ea.n = qb; za.n = vc; rc({ Ne: { ea: "accurateTrackBounce" } }); X.push(Ft); Ea.m = Ud("cm"); za.m = qt; aa("m", Sb(["u", "v", "vf"]), 1); aa("m", Ke, 2); rc({ Ng: { ea: "clickmap" } }); X.push(Gt); X.push(Ht); X.push(It); X.push(Jt); (function () {
                                                    X.push(Kt); ce.push("ecommerce"); rc({
                                                        ud: {
                                                            ea: "ecommerce",
                                                            Ua: function (a) { if (a) return !0 === a ? "dataLayer" : "" + a }
                                                        }
                                                    })
                                                })(); X.push(Lt); cb.push(Nt); X.push(Ot); ce.push("user_id"); cb.push(B("p.st", Pt)); X.push(Qt); xb(function (a, c) { return { sa: function (b, d) { var e = Aa(a, c); e = e && e.userParams; var f = (b.M || {}).Ge; e && f && e(f); d() } } }, 0); Wd.push("debug"); uc.unshift(Tt); X.push(Ut); uc.push(function (a) { var c = J(a); c.C("i") || (c.D("i", !0), ja(a).F(a, ["message"], u(a, hq))) }); (function () { var a, c = (a = {}, a.tp = w(gb, pk, Qb), a.tpid = w(gb, Wr), a); z(Rd, c) })(); xb(Hd, 20); aa("n", Hd, 20); aa("1", Hd, 20); uc.unshift(Wt);
            Rd.fp = function (a, c, b) {
                if (b.J && b.J.nohit) return null; b = J(a).C; if (!b("fpe")) return null; c = Vt(c); if (c.hh) return null; b = b("fht", Infinity); a: { var d = n(a, "performance.getEntriesByType"); if (P(d)) { if (a = ia(w(Q, S("name"), Ba("first-contentful-paint")), d.call(a.performance, "paint")), a.length) { a = a[0].startTime; break a } } else { var e = n(a, "chrome.loadTimes"); d = ql(a); if (P(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) { a = 1E3 * e - d; break a } if (a = n(a, "performance.timing.msFirstPaint")) { a -= d; break a } } a = void 0 } return a &&
                    b > a ? (c.hh = a, Math.round(a)) : null
            }; cb.push(Xt); X.push(function (a, c) { var b; return b = {}, b.ecommerceAdd = B("ecm.a", Zt(a, c)), b.ecommerceRemove = B("ecm.r", $t(a, c)), b.ecommerceDetail = B("ecm.d", au(a, c)), b.ecommercePurchase = B("ecm.p", bu(a, c)), b }); (function () {
                var a, c = {}; c.bu = hu; c.pri = Qp; c.wv = u(2, Q); c.ds = Tp; c.co = function (b) { return Bb(J(b).C("jn")) }; c.td = nu; z(c, (a = {}, a.iss = w(Us, Qb), a.hdl = w(Vs, Qb), a.iia = w(Ws, Qb), a.cpf = w(gu, Qb), a.ntf = v(function (b) {
                    b = n(b, "Notification.permission"); b = "denied" === b ? !1 : "granted" === b ? !0 :
                        null; return Wa(b) ? null : b ? 2 : 1
                }), a.eu = cc("isEU"), a.ns = ql, a.np = function (b) { return Xa(b, 0, 100) ? null : nd(ne($a(Vf(b), 100))) }, a)); c.pani = iu; c.pci = ju; c.si = ku; c.gi = lu; z(Rd, c)
            })(); (function () {
                var a = {}; a.hc = cc("hc"); a.oo = cc("oo"); a.pmc = cc("cmc"); a.lt = function (c) { var b = Zd(c).C("lt", null); return b ? c.Math.round(100 * b) : b }; a.re = w(ur, Qb); a.aw = function (c) { c = tb(w(ha, Kc), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]); return ha(c) ? null : Bb(!c) }; a.rcm = qu; a.yu = function (c) {
                    return (c = Sc(c, "").C("yandexuid")) &&
                        c.substring(0, 25)
                }; a.ifc = cc("ifc"); a.ifb = cc("ifb"); a.ecs = cc("ecs"); a.csi = cc("scip"); a.cdl = cc("cdl"); z(mg, a)
            })(); za.er = hd; (function (a) { try { var c = ch(a, "er"), b = Mp(a, c); gk.push(function (d, e, f, g) { var h, k, l, m, p; .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[Ia.cc] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h)) }) } catch (d) { } })(window); (function () { of.push(Pp); lg.unshift(Lp); hh.push(function (a) { var c = void 0; void 0 === c && (c = !0); J(a).D("oo", c) }) })(); xb(function (a, c) {
                return {
                    N: function (b,
                        d) { var e = b.J, f = b.K; !Il[c.id] && f.C("pv") && c.exp && !e.nohit && (e.exp = c.exp, Il[c.id] = !0); d() }
                }
            }, -99); X.push(ru); Yb.e = Zb; Ea.e = qb; za.e = vc; rc({ exp: { ea: "experiments" } }); Ak.experiments = "ex"; (function () { var a; uf.push(su); Ea.f = qb; z(za, (a = {}, a.f = sl, a)); aa("f", Sb(), 1); aa("f", Dj, 2); aa("f", Hd, 20) })(); of.push(function (a, c) { var b = { oa: M(c), nd: Aa(a, c), eg: ka(a), Ud: Pa(a) }, d = b.eg(sb); if (!b.Ud.Md) { var e = b.Ud.C("ymoo" + b.oa); if (e && 30 > d - e) b = b.oa, delete J(a).C("counters", {})[b], Va(Sa("uws")); else sa(c, tu(b))["catch"](D(a, "d.f")) } });
            (function () { var a, c, b = [Gb]; z(za, (a = {}, a.s = b, a.S = b, a.u = hd, a)); z(Ea, (c = {}, c.s = $b, c.S = qb, c.u = $b, c)); aa("s"); aa("u"); aa("S", Sb(["v", "hid", "u", "vf", "rn"]), 1); X.push(B("s", wp)) })(); Ea["8"] = $b; za["8"] = [kg]; rl.push([kg, 0]); X.push(B("p.us", function (a, c) { return sa(c, function (b) { if (n(b, "settings.sbp")) return Ei(a, b, { cb: c, Sb: "8", Sd: "cs" }) }) })); aa("p", Sb(ih), 1); ed("pub", function (a, c) { return { N: function (b, d) { ri(a, c, b); d() } } }, 1); Ea.p = xu; za.p = va([Fb, Gb]); cb.push(Bu); rc({
                zb: { ea: "webvisor", Ua: Hb }, Vg: {
                    ea: "disableFormAnalytics",
                    Ua: Hb
                }
            }); aa("4", Sb(ih), 1); Ea["4"] = Ml; za["4"] = va([Fb, Gb, $c]); cb.push(Hu); (function () { aa("W", Sb(ih), 1); ed("wv", Lo, 1); za.W = va([Fb, Gb]); Ea.W = Ml; cb.push(qv); X.push(rv); rc({ zb: { ea: "webvisor" } }); rc({ aj: { ea: "trustedDomains" }, jc: { ea: "childIframe", Ua: Hb } }); hh.push(function (a) { J(a).C("stopRecorder", E)() }) })(); X.push(tv); aa("pi"); Ea.pi = $b; za.pi = hd; ed("w", function (a, c) { return { N: function (b, d) { if (b.K) { var e = Gf(c), f = e.status; "rt" === e.Sb && f && (b.K.D("rt", f), b.ha || (b.ha = {}), b.ha.Nh = 1 === f ? ai(a, c) + "." : "") } d() } } }, 2); X.push(vv);
            X.push(Gv); za["6"] = va([Fb, Gb]); Ea["6"] = $b; X.push(Hv); X.push(ou); (function () { Vg.push(function (a, c) { c.informer = Sn(a) }) })(); xb(Df, 6); aa("1", Df, 6); aa("adb"); aa("n", Df, 4); za.adb = hd; Ea.adb = Tj; md.push(Jv); za["5"] = vc; Ea["5"] = qb; Yb["5"] = ia(w(Zc, wc([Ve, Pe]), Kc), Zb); X.push(Kv); aa("5", Hd, 20); xb(Uh, 7); aa("n", Uh, 6); cb.push(Lv); Ea.d = qb; aa("d", Sb(["hid", "u", "v", "vf"]), 1); za.d = hd; aa("n", function (a, c) {
                return {
                    sa: function (b, d) {
                        if (!b.M || !b.M.force) {
                            var e = .002, f = c.id === Ia.xg ? 1 : .002, g, h, k, l, m; void 0 === e && (e = 1); void 0 ===
                                f && (f = 1); var p = Fd(a); if (p && P(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                    p = p.getEntriesByType("resource"); for (var q = {}, r = {}, t = {}, y = Hl(), F = U(a).href, O = 0; O < p.length; O += 1) {
                                        var L = p[O], na = L.name.replace(Gl, "").split("?")[0], xa = ic(na), Eb = (g = {}, g.dns = Math.round(L.domainLookupEnd - L.domainLookupStart), g.tcp = Math.round(L.connectEnd - L.connectStart), g.duration = Math.round(L.duration), g.response = Math.round(L.responseEnd - L.requestStart), g); "script" !== L.initiatorType || e || (r[na] = z(Eb, (h = {},
                                            h.name = L.name, h.decodedBodySize = L.decodedBodySize, h.transferSize = Math.round(L.transferSize), h))); !pu[xa] && !y[xa] || q[na] || f || (q[na] = z(Eb, (k = {}, k.pages = F, k)))
                                    } ca(q).length && (t.timings8 = q); ca(r).length && (t.scripts = r); if (ca(t).length) wa(a, "d", c)({ K: Ka((l = {}, l.ar = 1, l.pv = 1, l)), ba: { da: Ab(a, t) || void 0 }, J: (m = {}, m["page-url"] = F, m) }, { id: Ia.Ag, ca: "0" })["catch"](D(a, "r.tim.ng2"))
                                }
                        } d()
                    }
                }
            }, 7); za.ci = [Gb]; Ea.ci = $b; cb.push(B("p.sci", function (a, c) { return sa(c, u(a, Qn))["catch"](D(a, "ins.cs")) })); X.push(Mv); cb.push(fu);
            X.push(Rv); xb(rh, 8); aa("f", rh, 3); aa("n", rh, 5); md.push(function (a) { return B("fip", function (c) { if (!Cl(c) || Xd(c)) { var b = Pa(c); if (!b.C("fip")) { var d = w(Xb(w(function (e, f) { return B("fip." + f, e)(c) }, H(vs, null))), Ee("-"))(a); b.D("fip", d) } } }) }([Tv, Sv, function (a) { var c = n(a, "ApplePaySession"), b = U(a).protocol; a = c && "https:" === b && !kb(a) ? c : void 0; c = ""; if (!a) return c; try { c = "" + a.canMakePayments(); b = ""; var d = a.supportsVersion; if (P(d)) for (var e = 1; 20 >= e; e += 1)b += d.call(a, e) ? "" + e : "0"; return b + c } catch (f) { return c } }, function (a) {
                a =
                n(a, "navigator") || {}; return a.doNotTrack || a.msDoNotTrack || "unknown"
            }, function (a) { if (a = eu(a)) try { for (var c = [], b = 0; b < Dl.length; b += 1) { var d = a(Dl[b]); c.push(d) } var e = c } catch (f) { e = [] } else e = []; return e ? G("x", e) : "" }, function (a) { var c = void 0; void 0 === c && (c = Pv); var b = n(a, "navigator") || {}; c = A(u(b, n), c); c = G("x", c); try { var d = n(a, "navigator.getGamepads"); var e = pa(d, "getGamepads") && a.navigator.getGamepads() || [] } catch (f) { e = [] } return c + "x" + Ua(e) }, Nv, function (a) { a = n(a, "screen") || {}; return G("x", A(u(a, n), Ov)) }, function (a) {
                return G("x",
                    vn(a) || [])
            }, function (a) { a = Ln(a); return R(a) ? G("x", a) : a }, function (a) { return (a = Nn(a)) ? G("x", A(C(["", ["matches", "media"]], xn), va(yh(a)))) : "" }])); xb(function (a) { return { N: function (c, b) { var d = c.K, e = Pa(a).C("fip"); e && d && (d.D("fip", e), se(c, "fip", Bb(e))); b() } } }, 9); aa("h", function (a) { return { sa: function (c, b) { var d = c.Hi; Xf(c) && d && J(a).D("isEU", n(d, "settings.eu")); b() } } }, 3); md.push(pv); uc.push(Uv); cb.push(Zv); X.push($v); rc({ kj: { ea: "yaDisableGDPR" }, lj: { ea: "yaGDPRLang" } }); lg.push(function (a, c) {
                return {
                    N: C([a, c],
                        gn)
                }
            }); Wd.push("gdpr"); Wd.push("gdpr_popup"); Cg.push(function (a, c) { var b = qe(a); b = re(b); if (ia(wc(cw), b).length) return !0; b = c(a, "gdpr"); return I(b, [Tc, bw]) }); xb(fm, 5); aa("1", fm, 6); za.c = hd; Ea.c = $b; ed("w", qf, 3); ed("cm", qf, 1); ed("wv", qf, 1); aa("1", Bh, 7); xb(Bh, 7); uc.push(B("hcp", zh)); cb.push(B("p.ot", gw)); cb.push(ob("cta", hw, !0)); aa("n", function (a) {
                var c = J(a); return {
                    N: function (b, d) {
                        var e = b.M || {}, f = c.C("cta"), g = c.C("cta.e"); if (f || g) {
                            e.R || (e.R = {}); e.R.__ym || (e.R.__ym = {}); var h = {}; f ? (f = A(function (k) {
                                var l, m =
                                    n(k, "topic"); k = n(k, "version"); return l = {}, l.topic = m, l.version = k, l
                            }, f), h.ct = f) : g && (h["ct.e"] = g); z(e.R.__ym, h); b.M = z(b.M || {}, e)
                        } d()
                    }
                }
            }, 7); aa("n", eg, 8); X.push(iw); X.push(jw); uc.push(B("cdl", function (a) { var c = J(a).Ia; if (a = n(a, "navigator.cookieDeprecationLabel")) try { a.getValue().then(u("cdl", c), C(["cdl", "e"], c)) } catch (b) { c("cdl", "d") } else c("cdl", "na") })); z(ul, Yt); X.push(function (a, c) { var b = hm(a), d = M(c), e = b[d]; e || (e = {}, b[d] = e); e.Rh = !0; if (b = e.Zf) d = im(a), x(d, b) }); Wd.push("_ym_sup_debug"); uc.unshift(lw);
            x(vb(ma)(window), uc); if (window.Ya && lf) { var jm = Ia.lc; window.Ya[jm] = lf; tt(window); x(w(Pc([window, window.Ya[jm]]), ma), Vg) } (function (a) { var c = n(a, "ym"); if (c) { var b = n(c, "a"); b || (c.a = [], b = c.a); var d = im(a); Od(a, b, function (e) { e.ra.F(d) }, !0) } })(window)
        })()
    } catch (lf) { };
}).call(this)
