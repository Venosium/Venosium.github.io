var skel = function() {
    var e = "config",
        t = "breakpoints",
        n = "iterate",
        r = "elements",
        i = "getCachedElement",
        s = "stateId",
        o = "getElementsByClassName",
        u = !1,
        a = "stateElements",
        f = "cacheElement",
        l = "deviceType",
        c = "length",
        h = "getElementsByTagName",
        p = "parentNode",
        d = null,
        v = "match",
        m = "config_breakpoint",
        g = "orientationChange",
        y = "newInline",
        b = "insertBefore",
        w = "vars",
        E = "object",
        S = "cache",
        x = "lockState",
        T = "!important",
        N = "head",
        C = "containers",
        k = "createElement",
        L = "_skel_isReversed",
        A = "className",
        O = "locations",
        M = "extend",
        _ = "}",
        D = " 0 0 ",
        P = "replace",
        H = "indexOf",
        B = !0,
        j = "onorientationchange",
        F = "isArray",
        I = "location",
        q = "DOMReady",
        R = "devicePixelRatio",
        U = "push",
        z = "addEventListener",
        W = "{display:none!important}",
        X = "parseMeasurement",
        V = "registerLocation",
        $ = "padding-top:0!important",
        J = "defaults",
        K = "events",
        Q = "substring",
        G = "^head",
        Y = "hasOwnProperty",
        Z = "android",
        et = "viewportWidth",
        tt = "DOMContentLoaded",
        nt = "getDevicePixelRatio",
        rt = "string",
        it = "IEVersion",
        st = "matchMedia",
        ot = "states",
        ut = "_skel_attach",
        at = "ios",
        ft = "ignoreOrientation",
        lt = "placeholder",
        ct = "removeEventListener",
        ht = "padding-top:",
        pt = "attached",
        dt = "resize",
        vt = "documentElement",
        mt = ".row",
        gt = "_skel_placeholder",
        yt = "href",
        bt = "stateChange",
        wt = "firstChild",
        Et = "querySelectorAll",
        St = "windows",
        xt = "getViewportWidth",
        Tt = "previousSibling",
        Nt = "prototype",
        Ct = "gutters",
        kt = "innerHTML",
        Lt = "text/css",
        At = "domready",
        Ot = "html",
        Mt = "padding:",
        _t = "attachElements",
        Dt = "priority",
        Pt = "attachElement",
        Ht = ".\\3$1 ",
        Bt = "collapse",
        jt = "onresize",
        Ft = "readyState",
        It = {
            config: {
                containers: 960,
                pollOnce: u,
                pollOnLock: u,
                prefix: d,
                preload: u,
                reset: u,
                perpetualLock: B,
                domainLock: B,
                ignoreOrientation: u,
                RTL: u,
                grid: {
                    collapse: u,
                    gutters: 40
                },
                breakpoints: {
                    global: {
                        href: u,
                        range: "*"
                    }
                },
                events: {}
            },
            isInit: u,
            lockState: d,
            stateId: "",
            me: d,
            breakpoints: [],
            breakpointList: [],
            events: [],
            plugins: {},
            cache: {
                elements: {},
                states: {},
                stateElements: {}
            },
            locations: {
                html: d,
                head: d,
                body: d
            },
            vars: {},
            lsc: "_skel_lock",
            sd: " ",
            css: {
                n: 'article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a{background:transparent}a:focus{outline:none}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}abbr[title]{border-bottom:none}b,strong{font-weight:bold}dfn{font-style:italic}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"C" "D" "8" "9"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}',
                r: "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}",
                bm: "*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}"
            },
            defaults: {
                breakpoint: {
                    config: d,
                    elements: d,
                    test: d
                },
                config_breakpoint: {
                    containers: "100%",
                    grid: {},
                    href: "",
                    range: "",
                    viewport: "",
                    lockViewport: u,
                    viewportWidth: u
                }
            },
            DOMReady: d,
            getElementsByClassName: d,
            indexOf: d,
            isArray: d,
            iterate: d,
            extend: function(e, t) {
                var r;
                It[n](t, function(n) {
                    It[F](t[n]) ? (It[F](e[n]) || (e[n] = []), It[M](e[n], t[n])) : typeof t[n] == E ? (typeof e[n] != E && (e[n] = {}), It[M](e[n], t[n])) : e[n] = t[n]
                })
            },
            parseMeasurement: function(e) {
                var t, n;
                if (typeof e !== rt) t = [e, "px"];
                else if (e == "fluid") t = [100, "%"];
                else {
                    var n;
                    n = e[v](/([0-9\.]+)([^\s]*)/), n[c] < 3 || !n[2] ? t = [parseFloat(e), "px"] : t = [parseFloat(n[1]), n[2]]
                }
                return t
            },
            getArray: function(e) {
                return It[F](e) ? e : [e]
            },
            getDevicePixelRatio: function() {
                var e = navigator.userAgent;
                if (It[w][l] == at || It[w][l] == "mac" || It[w][l] == St || It[w][l] == Z && e[v](/Safari\/([0-9]+)/) && parseInt(RegExp.$1) >= 537) return 1;
                if (window[R] !== undefined && !e[v](/(Firefox; Mobile)/)) return window[R];
                if (window[st]) {
                    if (window[st]("(-webkit-min-device-pixel-ratio: 2),(min--moz-device-pixel-ratio: 2),(-o-min-device-pixel-ratio: 2/1),(min-resolution: 2dppx)").matches) return 2;
                    if (window[st]("(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)").matches) return 1.5
                }
                return 1
            },
            getLevel: function(e) {
                return typeof e == "boolean" ? e ? 1 : 0 : parseInt(e)
            },
            getViewportWidth: function() {
                var t, n, r;
                return t = document[vt].clientWidth, n = window.orientation !== undefined ? Math.abs(window.orientation) : u, r = It[nt](), screen.width < t && (t = screen.width), n !== u && (It[e][ft] ? t = Math.min(screen.width, screen.height) : n === 90 ? t = Math.max(screen.width, screen.height) : t = Math.min(screen.width, screen.height)), t /= r, t
            },
            unlock: function() {
                It[x] = d, document.cookie = It.lsc + "=;expires=Thu, 1 Jan 1970 12:00:00 UTC; path=" + (It[e].domainLock ? "/" : window[I].pathname), It[e].pollOnLock ? It.poll() : window[I].reload()
            },
            lock: function(t) {
                It[x] = t, document.cookie = It.lsc + "=" + t + ";expires=" + (It[e].perpetualLock ? "Thu, 1 Jan 2077 12:00:00 UTC" : 0) + "; path=" + (It[e].domainLock ? "/" : window[I].pathname), It[e].pollOnLock ? It.poll() : window[I].reload()
            },
            getLock: function() {
                return It[x]
            },
            isLocked: function() {
                return !!It[x]
            },
            hasActive: function(e) {
                var t = u;
                return It[n](e, function(n) {
                    t = t || It.isActive(e[n])
                }), t
            },
            isActive: function(e) {
                return It[H](It[s], It.sd + e) !== -1
            },
            wasActive: function(e) {
                return It[H](It[w].lastStateId, It.sd + e) !== -1
            },
            canUse: function(e) {
                return It[t][e] && It[t][e].test(It[xt]())
            },
            useActive: function(e) {
                if (typeof e !== E) return e;
                var t = d;
                return It[n](e, function(n) {
                    if (t !== d) return;
                    It.isActive(n) && (t = e[n])
                }), t
            },
            unreverseRows: function() {
                var e = It[o]("row");
                It[n](e, function(t) {
                    if (t === c) return;
                    var n = e[t];
                    if (!n[L]) return;
                    var r = n.children,
                        i;
                    for (i = 1; i < r[c]; i++) n[b](r[i], r[0]);
                    n[L] = u
                })
            },
            reverseRows: function(e) {
                var t = It[o]("row");
                It[n](t, function(n) {
                    if (n === c) return;
                    var r = t[n];
                    if (r[L] || e > 0 && r[A][v](/\bno-collapse-([0-9])\b/) && parseInt(RegExp.$1) >= e) return;
                    var i = r.children,
                        s;
                    for (s = 1; s < i[c]; s++) r[b](i[s], i[0]);
                    r[L] = B
                })
            },
            bind: function(e, t) {
                It[K][e] || (It[K][e] = []), It[K][e][U](t)
            },
            trigger: function(e) {
                if (!It[K][e] || It[K][e][c] == 0) return;
                var t;
                It[n](It[K][e], function(t) {
                    It[K][e][t]()
                })
            },
            onStateChange: function(e) {
                It.bind(bt, e), It.isInit && e()
            },
            registerLocation: function(e, t) {
                e == N ? t[ut] = function(e, t) {
                    t ? this[b](e, this[wt]) : this === It.me[p] ? this[b](e, It.me) : this.appendChild(e)
                } : t[ut] = function(e, t) {
                    t ? this[b](e, this[wt]) : this.appendChild(e)
                }, It[O][e] = t
            },
            addCachedElementToBreakpoint: function(e, n) {
                It[t][e] && It[t][e][r][U](n)
            },
            addCachedElementToState: function(e, t) {
                It[S][a][e] ? It[S][a][e][U](t) : It[S][a][e] = [t]
            },
            cacheElement: function(e, t, n, i) {
                return t[p] && t[p].removeChild(t), It[S][r][e] = {
                    id: e,
                    object: t,
                    location: n,
                    priority: i,
                    attached: u
                }
            },
            getCachedElement: function(e) {
                return It[S][r][e] ? It[S][r][e] : d
            },
            detachElement: function(e) {
                var t = It[S][r][e],
                    n;
                if (!t[pt]) return;
                n = t[E];
                if (!n[p] || n[p] && !n[p].tagName) return;
                n[p].removeChild(n), t[pt] = u, t.onDetach && t.onDetach()
            },
            detachAllElements: function(e) {
                var t, i, s = {};
                It[n](e, function(t) {
                    s[e[t].id] = B
                }), It[n](It[S][r], function(e) {
                    if (e in s) return;
                    It.detachElement(e)
                })
            },
            attachElement: function(e) {
                var t, n = e[I],
                    r = u;
                return e[pt] ? B : (n[0] == "^" && (n = n[Q](1), r = B), n in It[O] ? (t = It[O][n], t[ut](e[E], r), e[pt] = B, e.onAttach && e.onAttach(), B) : u)
            },
            attachElements: function(e) {
                var t = [],
                    r = [],
                    i, s, o;
                It[n](e, function(n) {
                    t[e[n][Dt]] || (t[e[n][Dt]] = []), t[e[n][Dt]][U](e[n])
                }), It[n](t, function(e) {
                    if (t[e][c] == 0) return;
                    It[n](t[e], function(n) {
                        It[Pt](t[e][n]) || r[U](t[e][n])
                    })
                }), r[c] > 0 && It[q](function() {
                    It[n](r, function(e) {
                        It[Pt](r[e])
                    })
                })
            },
            poll: function() {
                var e, r, i = "";
                It[x] ? r = It[x] : r = It[xt](), It[w][et] = r, It[w][R] = It[nt](), It[n](It[t], function(e) {
                    It[t][e].test(r) && (i += It.sd + e)
                }), i === "" && (i = It.sd), i !== It[s] && (It[O][Ot][A] = It[O][Ot][A][P](It[s], ""), It.changeState(i), It[O][Ot][A] = It[O][Ot][A] + It[s])
            },
            updateState: function() {
                var e, i, o, u, f = [];
                if (It[s] == It.sd) return;
                e = It[s][Q](1).split(It.sd), It[n](e, function(o) {
                    i = It[t][e[o]];
                    if (i[r][c] == 0) return;
                    It[n](i[r], function(e) {
                        It[S][ot][It[s]][r][U](i[r][e]), f[U](i[r][e])
                    })
                }), It[S][a][It[s]] && (It[n](It[S][a][It[s]], function(e) {
                    It[S][ot][It[s]][r][U](It[S][a][It[s]][e]), f[U](It[S][a][It[s]][e])
                }), It[S][a][It[s]] = []), f[c] > 0 && It[_t](f)
            },
            changeState: function(l) {
                var h, d, g, E, x, k, L, O;
                It[w].lastStateId = It[s], It[s] = l;
                if (!It[S][ot][It[s]]) {
                    It[S][ot][It[s]] = {
                        config: {},
                        elements: [],
                        values: {}
                    }, g = It[S][ot][It[s]], It[s] === It.sd ? h = [] : h = It[s][Q](1).split(It.sd), It[M](g[e], It[J][m]), It[n](h, function(n) {
                        It[M](g[e], It[t][h[n]][e])
                    });
                    switch (It[e].reset) {
                        case "full":
                            k = "iR", (x = It[i](k)) || (x = It[f](k, It[y](It.css.r), G, 2)), g[r][U](x);
                            break;
                        case "normalize":
                            k = "iN", (x = It[i](k)) || (x = It[f](k, It[y](It.css.n), G, 2)), g[r][U](x)
                    }
                    k = "iBM", (x = It[i](k)) || (x = It[f](k, It[y](It.css.bm), G, 1)), g[r][U](x), L = g[e].viewport, g[e][et] ? L += (L != "" ? "," : "") + "width=" + g[e][et] : g[e].lockViewport && (L += (L != "" ? "," : "") + "width=device-width"), g[e].lockViewport && (L += (L != "" ? "," : "") + "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"), L != "" && (k = "mV" + It[s], (x = It[i](k)) || (x = It[f](k, It.newMeta("viewport", L), G, 4)), g[r][U](x)), It[w][it] >= 10 && (k = "mVIE" + It[s], (x = It[i](k)) || (x = It[f](k, It[y]("@-ms-viewport{width: device-width}"), G, 3)), g[r][U](x));
                    var B, j;
                    E = It[X](g[e][C]), B = E[0], j = E[1], g.values[C] = B + j, k = "iC" + g.values[C];
                    if (!(x = It[i](k))) {
                        var F, I, R;
                        F = B * .75 + j, I = B + j, R = B * 1.25 + j, x = It[f](k, It[y]("body{min-width:" + I + _ + ".container{margin-left:auto;margin-right:auto;width:" + I + _ + ".container.small{width:" + F + _ + ".container.big{width:100%;max-width:" + R + ";min-width:" + I + _), N, 3)
                    }
                    g[r][U](x), k = "iG", (x = It[i](k)) || (x = It[f](k, It[y](".\\31 2u{width:100%}.\\31 1u{width:91.6666666667%}.\\31 0u{width:83.3333333333%}.\\39 u{width:75%}.\\38 u{width:66.6666666667%}.\\37 u{width:58.3333333333%}.\\36 u{width:50%}.\\35 u{width:41.6666666667%}.\\34 u{width:33.3333333333%}.\\33 u{width:25%}.\\32 u{width:16.6666666667%}.\\31 u{width:8.3333333333%}.\\-11u{margin-left:91.6666666667%}.\\-10u{margin-left:83.3333333333%}.\\-9u{margin-left:75%}.\\-8u{margin-left:66.6666666667%}.\\-7u{margin-left:58.3333333333%}.\\-6u{margin-left:50%}.\\-5u{margin-left:41.6666666667%}.\\-4u{margin-left:33.3333333333%}.\\-3u{margin-left:25%}.\\-2u{margin-left:16.6666666667%}.\\-1u{margin-left:8.3333333333%}"), N, 3)), g[r][U](x), k = "iGR", (x = It[i](k)) || (x = It[f](k, It[y](".row>*{float:left}.row:after{content:'';display:block;clear:both;height:0}.row:first-child>*{padding-top:0!important}"), N, 3)), g[r][U](x), k = "iGG" + g[e].grid[Ct];
                    if (!(x = It[i](k))) {
                        var z, V, K, Z, tt, nt, rt;
                        E = It[X](g[e].grid[Ct]), z = E[0], V = E[1], K = z + V, Z = z / 2 + V, tt = z / 4 + V, nt = z * 1.5 + V, rt = z * 2 + V, x = It[f]("iGG" + g[e].grid[Ct], It[y](".row>*{padding-left:" + K + _ + ".row+.row>*{padding:" + K + D + K + _ + ".row{margin-left:-" + K + _ + ".row.flush>*{padding-left:0}" + ".row+.row.flush>*{padding:0}" + ".row.flush{margin-left:0}" + ".row.half>*{padding-left:" + Z + _ + ".row+.row.half>*{padding:" + Z + D + Z + _ + ".row.half{margin-left:-" + Z + _ + ".row.quarter>*{padding-left:" + tt + _ + ".row+.row.quarter>*{padding:" + tt + D + tt + _ + ".row.quarter{margin-left:-" + tt + _ + ".row.oneandhalf>*{padding-left:" + nt + _ + ".row+.row.oneandhalf>*{padding:" + nt + D + nt + _ + ".row.oneandhalf{margin-left:-" + nt + _ + ".row.double>*{padding-left:" + rt + _ + ".row+.row.double>*{padding:" + rt + D + rt + _ + ".row.double{margin-left:-" + rt + _), N, 3)
                    }
                    g[r][U](x);
                    if (g[e].grid[Bt]) {
                        var st = It.getLevel(g[e].grid[Bt]);
                        k = "iGC" + st + "-" + g.values[C];
                        if (!(x = It[i](k))) {
                            L = ":not(.no-collapse)";
                            switch (st) {
                                case 4:
                                    break;
                                case 3:
                                    L += ":not(.no-collapse-3)";
                                    break;
                                case 2:
                                    L += ":not(.no-collapse-2):not(.no-collapse-3)";
                                    break;
                                case 1:
                                default:
                                    L += ":not(.no-collapse-1):not(.no-collapse-2):not(.no-collapse-3)"
                            }
                            E = It[X](g[e].grid[Ct]), O = E[0] + E[1], x = It[f](k, It[y](".row>*{padding-left:" + O + T + _ + ".row>*:first-child{" + $ + _ + ".row+.row>*{" + Mt + O + D + O + T + _ + ".row{" + "margin-left:-" + O + T + _ + mt + L + ">*{" + "float:none!important;" + "width:100%!important;" + "margin-left:0!important" + _ + ".row:not(.flush)" + L + ":first-child>*{" + ht + O + T + _ + mt + L + ":first-child>:first-child {" + $ + _ + mt + L + ">*{" + ht + O + _ + mt + L + ">*:first-child{" + "padding-top:0" + _ + ".row+.row" + L + ">*{" + Mt + O + D + O + _ + ".row.flush>*{" + "padding:0!important" + _ + ".row.flush{" + "margin-left:0px!important" + _ + ".container{" + "max-width:none!important;" + "min-width:0!important;" + "width:" + g[e][C] + T + _), N, 3)
                        }
                        g[r][U](x)
                    }
                    k = "iCd" + It[s];
                    if (!(x = It[i](k))) {
                        L = [], O = [], It[n](It[t], function(e) {
                            It[H](h, e) !== -1 ? L[U](".not-" + e) : O[U](".only-" + e)
                        });
                        var ut = (L[c] > 0 ? L.join(",") + W : "") + (O[c] > 0 ? O.join(",") + W : "");
                        x = It[f](k, It[y](ut[P](/\.([0-9])/, Ht)), N, 3), g[r][U](x)
                    }
                    It[n](h, function(s) {
                        It[t][h[s]][e][yt] && (k = "ss" + h[s], (x = It[i](k)) || (x = It[f](k, It.newStyleSheet(It[t][h[s]][e][yt]), N, 5)), g[r][U](x)), It[t][h[s]][r][c] > 0 && It[n](It[t][h[s]][r], function(e) {
                            g[r][U](It[t][h[s]][r][e])
                        })
                    }), It[S][a][It[s]] && (It[n](It[S][a][It[s]], function(e) {
                        g[r][U](It[S][a][It[s]][e])
                    }), It[S][a][It[s]] = [])
                } else g = It[S][ot][It[s]];
                It.detachAllElements(g[r]), It[_t](g[r]), It[q](function() {
                    var t, r, i, s = It.getLevel(g[e].grid[Bt]);
                    It[e].RTL && (It.unreverseRows(), s > 0 && It.reverseRows(s)), It[w][it] > 8 && (r = "_skel_cell_important_placeholder", t = It[o]("skel-cell-important"), t && t[c] > 0 && It[n](t, function(e) {
                        if (e === c) return;
                        var n = t[e],
                            i = n[p],
                            o;
                        if (!i) return;
                        i[A][v](/no-collapse-([0-9])/) ? o = parseInt(RegExp.$1) : i[A][v](/no-collapse/) ? o = 100 : o = 0;
                        if (o < s) {
                            if (n[Y](r) && n[r] !== u) return;
                            i = n[Tt];
                            while (i && i.nodeName == "#text") i = i[Tt];
                            if (!i) return;
                            n[p][b](n, n[p][wt]), n[r] = i
                        } else n[Y](r) || (n[r] = u), i = n[r], i !== u && (n[p][b](n, i.nextSibling), n[r] = u)
                    }))
                }), It[w].state = It[S][ot][It[s]], It[w][s] = It[s], It.trigger(bt)
            },
            newMeta: function(e, t) {
                var n = document[k]("meta");
                return n.name = e, n.content = t, n
            },
            newStyleSheet: function(e) {
                var t = document[k]("link");
                return t.rel = "stylesheet", t.type = Lt, t[yt] = e, t
            },
            newInline: function(e) {
                var t;
                return It[w][it] <= 8 ? (t = document[k]("span"), t[kt] = '&nbsp;<style type="text/css">' + e + "</style>") : (t = document[k]("style"), t.type = Lt, t[kt] = e), t
            },
            newDiv: function(e) {
                var t = document[k]("div");
                return t[kt] = e, t
            },
            registerPlugin: function(e, t) {
                if (!t) return u;
                It.plugins[e] = t, t._ = this
            },
            initPlugin: function(t, n) {
                typeof n == E && It[M](t[e], n), t.init()
            },
            initConfig: function(i) {
                function a(e, t) {
                    var n;
                    return typeof t != rt && (n = function(e) {
                        return u
                    }), t == "*" ? n = function(e) {
                        return B
                    } : t.charAt(0) == "-" ? (s[e] = parseInt(t[Q](1)), n = function(t) {
                        return t <= s[e]
                    }) : t.charAt(t[c] - 1) == "-" ? (s[e] = parseInt(t[Q](0, t[c] - 1)), n = function(t) {
                        return t >= s[e]
                    }) : It[H](t, "-") != -1 ? (t = t.split("-"), s[e] = [parseInt(t[0]), parseInt(t[1])], n = function(t) {
                        return t >= s[e][0] && t <= s[e][1]
                    }) : (s[e] = parseInt(t), n = function(t) {
                        return t == s[e]
                    }), n
                }
                var s = [],
                    o = [];
                typeof i == E && (i[t] && (It[e][t] = {}), It[M](It[e], i)), It[M](It[J][m].grid, It[e].grid), It[J][m][C] = It[e][C], It[n](It[e][t], function(n) {
                    var i, s = {};
                    It[M](s, It[e][t][n]), yt in s || (s[yt] = It[J][m][yt]), "range" in s || (s.range = It[J][m].range), It[e][t][n] = s, i = {}, It[M](i, It[J].breakpoint), i[e] = It[e][t][n], i.test = a(n, i[e].range), i[r] = [], It[e].prefix && i[e][yt] !== u && (i[e][yt] = It[e].prefix + "-" + n + ".css"), i[e][yt] === "" && (i[e][yt] = u), It[e].preload && i[e][yt] && o[U](i[e][yt]), It[t][n] = i, It.breakpointList[U](n)
                }), It[n](It[e][K], function(t) {
                    It.bind(t, It[e][K][t])
                }), o[c] > 0 && window[I].protocol != "file:" && It[q](function() {
                    var e, t = document[h](N)[0],
                        r = new XMLHttpRequest;
                    It[n](o, function(e) {
                        r.open("GET", o[e], u), r.send("")
                    })
                })
            },
            initEvents: function() {
                var t;
                It[e].pollOnce || (It.bind(dt, function() {
                    It.poll()
                }), It[e][ft] || It.bind(g, function() {
                    It.poll()
                })), It[w][l] == at && It[q](function() {
                    It.bind(g, function() {
                        var e = document[h]("input");
                        It[n](e, function(t) {
                            e[t][gt] = e[t][lt], e[t][lt] = ""
                        }), window.setTimeout(function() {
                            It[n](e, function(t) {
                                e[t][lt] = e[t][gt]
                            })
                        }, 100)
                    })
                }), window[jt] && It.bind(dt, window[jt]), window[jt] = function() {
                    It.trigger(dt)
                }, window[j] && It.bind(g, window[j]), window[j] = function() {
                    It.trigger(g)
                }
            },
            initUtilityMethods: function() {
                document[z] ? ! function(e, t) {
                    It[q] = t()
                }(At, function() {
                    function e(e) {
                        s = 1;
                        while (e = t.shift()) e()
                    }
                    var t = [],
                        n, r = document,
                        i = tt,
                        s = /^loaded|^c/.test(r[Ft]);
                    return r[z](i, n = function() {
                            r[ct](i, n), e()
                        }),
                        function(e) {
                            s ? e() : t[U](e)
                        }
                }) : ! function(e, t) {
                    It[q] = t()
                }(At, function(e) {
                    function t(e) {
                        p = 1;
                        while (e = n.shift()) e()
                    }
                    var n = [],
                        r, i = !1,
                        s = document,
                        o = s[vt],
                        u = o.doScroll,
                        a = tt,
                        f = z,
                        l = "onreadystatechange",
                        c = Ft,
                        h = u ? /^loaded|^c/ : /^loaded|c/,
                        p = h.test(s[c]);
                    return s[f] && s[f](a, r = function() {
                        s[ct](a, r, i), t()
                    }, i), u && s.attachEvent(l, r = function() {
                        /^c/.test(s[c]) && (s.detachEvent(l, r), t())
                    }), e = u ? function(t) {
                        self != top ? p ? t() : n[U](t) : function() {
                            try {
                                o.doScroll("left")
                            } catch (n) {
                                return setTimeout(function() {
                                    e(t)
                                }, 50)
                            }
                            t()
                        }()
                    } : function(e) {
                        p ? e() : n[U](e)
                    }
                }), document[o] ? It[o] = function(e) {
                    return document[o](e)
                } : It[o] = function(e) {
                    var t = document;
                    return t[Et] ? t[Et](("." + e[P](" ", " ."))[P](/\.([0-9])/, Ht)) : []
                }, Array[Nt][H] ? It[H] = function(e, t) {
                    return e[H](t)
                } : It[H] = function(e, t) {
                    if (typeof e == rt) return e[H](t);
                    var n, r = t ? t : 0,
                        i;
                    if (!this) throw new TypeError;
                    i = this[c];
                    if (i === 0 || r >= i) return -1;
                    r < 0 && (r = i - Math.abs(r));
                    for (n = r; n < i; n++)
                        if (this[n] === e) return n;
                    return -1
                }, Array[F] ? It[F] = function(e) {
                    return Array[F](e)
                } : It[F] = function(e) {
                    return Object[Nt].toString.call(e) === "[object Array]"
                }, Object.keys ? It[n] = function(e, t) {
                    if (!e) return [];
                    var n, r = Object.keys(e);
                    for (n = 0; r[n]; n++) t(r[n])
                } : It[n] = function(e, t) {
                    if (!e) return [];
                    var n;
                    for (n in e) Object[Nt][Y].call(e, n) && t(n)
                }
            },
            initAPI: function() {
                var e, t, r = navigator.userAgent;
                It[w][it] = r[v](/MSIE ([0-9]+)\./) ? RegExp.$1 : 99, e = "other", r[v](/Firefox/) ? e = "firefox" : r[v](/Chrome/) ? e = "chrome" : r[v](/Safari/) && !r[v](/Chrome/) ? e = "safari" : r[v](/(OPR|Opera)/) ? e = "opera" : r[v](/MSIE/) && (e = "ie"), It[w].browser = e, It[w][l] = "other", t = {
                    ios: "(iPad|iPhone|iPod)",
                    android: "Android",
                    mac: "Macintosh",
                    wp: "Windows Phone",
                    windows: "Windows NT"
                }, It[n](t, function(e) {
                    r[v](new RegExp(t[e], "g")) && (It[w][l] = e)
                });
                switch (It[w][l]) {
                    case at:
                        r[v](/([0-9_]+) like Mac OS X/), e = parseFloat(RegExp.$1[P]("_", ".")[P]("_", ""));
                        break;
                    case Z:
                        r[v](/Android ([0-9\.]+)/), e = parseFloat(RegExp.$1);
                        break;
                    case "mac":
                        r[v](/Mac OS X ([0-9_]+)/), e = parseFloat(RegExp.$1[P]("_", ".")[P]("_", ""));
                        break;
                    case "wp":
                        r[v](/IEMobile\/([0-9\.]+)/), e = parseFloat(RegExp.$1);
                        break;
                    case St:
                        r[v](/Windows NT ([0-9\.]+)/), e = parseFloat(RegExp.$1);
                        break;
                    default:
                        e = 99
                }
                It[w].deviceVersion = e, It[w].isTouch = It[w][l] == "wp" ? navigator.msMaxTouchPoints > 0 : "ontouchstart" in window, It[w].isMobile = It[w][l] == "wp" || It[w][l] == Z || It[w][l] == at, e = document.cookie.split(";"), It[n](e, function(t) {
                    var n = e[t].split("=");
                    if (n[0][P](/^\s+|\s+$/g, "") == It.lsc) {
                        It[x] = n[1];
                        return
                    }
                })
            },
            init: function(e, t) {
                It.initUtilityMethods(), It.initAPI(), It.initConfig(e), It[V](Ot, document[h](Ot)[0]), It[V](N, document[h](N)[0]), It[q](function() {
                    It[V]("body", document[h]("body")[0])
                }), It.initEvents(), It.poll(), It[n](It.plugins, function(e) {
                    It.initPlugin(It.plugins[e], typeof t == E && e in t ? t[e] : d)
                }), It.isInit = B
            }
        },
        qt = document[h]("script");
    return It.me = qt[qt[c] - 1], It
}();