(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([[42], {
    "+7FK": function(e, t, n) {
        "use strict";
        var r = n("nGXB")
          , o = n("DLGp")
          , i = n("YHpG")
          , a = n("16cg")
          , s = n("Z6Z4")
          , c = n("LUuf")
          , u = n("GtEJ").f;
        o && r({
            target: "Object",
            proto: !0,
            forced: i
        }, {
            __lookupSetter__: function(e) {
                var t, n = a(this), r = s(e, !0);
                do {
                    if (t = u(n, r))
                        return t.set
                } while (n = c(n))
            }
        })
    },
    "+z6/": function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useAuthentication = void 0;
        var o = r(n("VtSi"))
          , i = r(n("KEM+"))
          , a = r(n("m3Bd"))
          , s = r(n("ddV6"))
          , c = r(n("cbiG"))
          , u = n("qwB3")
          , l = n("JBtm")
          , f = n("nHJM")
          , d = n("YCZe")
          , p = n("I38j")
          , g = n("MK0x")
          , h = n("z9Jo")
          , v = n("cchr");
        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach((function(t) {
                    (0,
                    i.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var b = function() {
            var e = (0,
            c.default)(o.default.mark((function e(t, n, r) {
                var i, a;
                return o.default.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            (0,
                            f.getTokens)(t, r);
                        case 2:
                            if (i = e.sent) {
                                e.next = 5;
                                break
                            }
                            throw new Error("Failed to fetch tokens");
                        case 5:
                            return e.next = 7,
                            (0,
                            f.createTokens)(i);
                        case 7:
                            return a = e.sent,
                            history.replaceState({}, null, n),
                            e.abrupt("return", a);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }();
        t.useAuthentication = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = arguments.length > 2 ? arguments[2] : void 0
              , r = (0,
            v.useStableCallback)(n)
              , o = (0,
            g.usePersistedState)(h.StorageKey.TOKENS, void 0, h.sessionStorageService)
              , i = (0,
            s.default)(o, 2)
              , c = i[0]
              , m = i[1]
              , O = (0,
            g.usePersistedState)(h.StorageKey.LOGGED_IN, !0, h.localStorageService)
              , E = (0,
            s.default)(O, 2)
              , k = E[1]
              , w = Boolean(c)
              , S = (0,
            l.parseUrl)(location.href)
              , x = S.url
              , j = S.query
              , T = j.code
              , C = (0,
            a.default)(j, ["code"])
              , _ = (0,
            p.useAsync)({
                onSuccess: function(e) {
                    m(e),
                    (0,
                    f.persistAuthTime)(),
                    k(!0)
                },
                onError: function(e) {
                    (0,
                    d.handleCriticalError)(e);
                    var t = (0,
                    l.stringifyUrl)({
                        url: x,
                        query: y(y({}, C), (0,
                        f.getPersistedQueryParams)())
                    });
                    history.replaceState({}, null, t)
                }
            })
              , P = _.execute
              , L = _.error
              , R = _.isLoading
              , I = _.isIdle
              , A = _.isSuccess;
            (0,
            u.useEffect)((function() {
                if (T && !w && !R && !L) {
                    (0,
                    d.logInfo)("[Role Switcher]: Fetching consumer/corporate user tokens");
                    var t = (0,
                    l.stringifyUrl)({
                        url: x,
                        query: y(y({}, C), (0,
                        f.getPersistedQueryParams)())
                    });
                    P(b(T, t, e.env))
                }
            }
            ), [T, w, x, C, P, R, e.env, L]),
            (0,
            u.useEffect)((function() {
                t && !T && I && !w && (0,
                f.login)(e.env, e.locale)
            }
            ), [T, I, w, t, e.env, e.locale]);
            var N = (0,
            u.useCallback)((function(t) {
                var n = t.key
                  , r = t.newValue;
                n === h.StorageKey.LOGGED_IN && "true" !== r && ((0,
                d.logInfo)("[Role Switcher]: Logging the user out because the logged-in value has changed to ".concat(r)),
                (0,
                f.logout)(e.env, e.locale, e.returnUrl))
            }
            ), [e.env, e.locale, e.returnUrl]);
            return (0,
            u.useEffect)((function() {
                var e;
                return null === (e = (0,
                d.getWindow)()) || void 0 === e || e.addEventListener("storage", N),
                function() {
                    var e;
                    null === (e = (0,
                    d.getWindow)()) || void 0 === e || e.removeEventListener("storage", N)
                }
            }
            ), [N]),
            (0,
            u.useEffect)((function() {
                c && r.current && r.current(c)
            }
            ), [r, c]),
            (0,
            u.useMemo)((function() {
                return {
                    logout: function() {
                        return (0,
                        f.logout)(e.env, e.locale, e.returnUrl)
                    },
                    loggedIn: w,
                    tokens: c,
                    setTokens: m,
                    error: L,
                    isAuthenticating: R,
                    login: f.login,
                    isExchangingTokens: (T || R || A) && !w
                }
            }
            ), [e, L, R, w, A, m, c, T])
        }
    },
    "/Bu2": function(e, t, n) {
        var r = n("nGXB")
          , o = n("lpjI").values;
        r({
            target: "Object",
            stat: !0
        }, {
            values: function(e) {
                return o(e)
            }
        })
    },
    "/MQ/": function(e, t, n) {
        var r = n("nGXB")
          , o = n("T/ei")
          , i = n("16cg")
          , a = n("LUuf")
          , s = n("pxDA");
        r({
            target: "Object",
            stat: !0,
            forced: o((function() {
                a(1)
            }
            )),
            sham: !s
        }, {
            getPrototypeOf: function(e) {
                return a(i(e))
            }
        })
    },
    "/zUi": function(e, t, n) {
        var r = n("nGXB")
          , o = n("Opzy")
          , i = n("hr1O").onFreeze
          , a = n("JIX3")
          , s = n("T/ei")
          , c = Object.preventExtensions;
        r({
            target: "Object",
            stat: !0,
            forced: s((function() {
                c(1)
            }
            )),
            sham: !a
        }, {
            preventExtensions: function(e) {
                return c && o(e) ? c(i(e)) : e
            }
        })
    },
    "0yn4": function(e, t, n) {
        n("/vb6")("match")
    },
    "378H": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = {
            toggle: {
                label: "Användaruppgifter och användarroller"
            },
            roles: {
                switch: "Byt användarroll",
                current: "Vald användarroll",
                select: "Väljä roll"
            },
            services: {
                title: "TBD"
            },
            links: {
                userSettings: "Användar inställningar"
            },
            logout: "Logga ut",
            login: "Logga in"
        }
    },
    "3M/Q": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useLatestRef = void 0;
        var r = n("qwB3");
        t.useLatestRef = function(e) {
            var t = r.useRef(e);
            return r.useLayoutEffect((function() {
                t.current = e
            }
            )),
            t
        }
    },
    "3Tam": function(e, t, n) {
        var r = n("5uek");
        n("roqG")(r.JSON, "JSON", !0)
    },
    "3cDC": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("zmxB");
        Object.keys(r).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            }))
        }
        ))
    },
    "4KWU": function(e) {
        e.exports = JSON.parse('{"fi":{"error.noItems":"Antamallasi lähetystunnuksella ei löytynyt yhtään lähetystä.","error.reasonCouldBe":"Syynä saattaa olla jokin seuraavista:","error.typingError":"Kirjoitusvirhe. Tarkista lähetystunnus.","error.trackingCodeFormat":"Poista lähetystunnuksesta välilyönnit ja etsi yhtä lähetystunnusta kerrallaan.","error.tryAgainLater":"Posti odottaa lähetystä rekisteröitäväksi tai kuljetettavaksi. Yritä myöhemmin uudelleen.","error.shippedTooLongAgo":"Lähetys lähetettiin yli 2,5 kuukautta sitten.","multitracking.backToItems":"Palaa takaisin listaukseen.","multitracking.itemsFound":"{amount, plural, one {# lähetys} other {# lähetystä}} löytyi."},"en":{"error.noItems":"No items could be found based on the tracking code.","error.reasonCouldBe":"The reason could be one of the following:","error.typingError":"Typing error. Please check the tracking code.","error.trackingCodeFormat":"Enter the code without spaces and search only one code at a time.","error.tryAgainLater":"Posti is still waiting the item to be registered or to be left for transport. Please try again later.","error.shippedTooLongAgo":"The item was shipped more than 2.5 months ago.","multitracking.backToItems":"Back to items.","multitracking.itemsFound":"{amount, plural, one {# item} other {# items}} found."},"sv":{"error.noItems":"Ingen försändelse hittades med den försändelsekod du gav.","error.reasonCouldBe":"Orsaken kan vara någon av följande:","error.typingError":"Ett skrivfel. Kontrollera försändelsekoden.","error.trackingCodeFormat":"Ta bort mellanslagen från försändelsekoden och sök efter en försändelsekod åt gången.","error.tryAgainLater":"Posti väntar på att försändelsen kommer in för registrering eller transport. Försök på nytt senare.","error.shippedTooLongAgo":"Försändelsen skickades för mer än 2,5 månader sedan.","multitracking.backToItems":"Återgå till listan.","multitracking.itemsFound":"{amount, plural, one {# försändelse} other {# sändningar}} hittades."}}')
    },
    "5rQp": function(e, t, n) {
        e.exports = {
            parse: n("FWHK"),
            stringify: n("nGxM")
        }
    },
    "6Bin": function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CurrentRole = void 0;
        var o = r(n("qwB3"))
          , i = n("DrGY")
          , a = n("l+CB")
          , s = n("jp49")
          , c = n("BOhL")
          , u = n("liE7");
        t.CurrentRole = function(e) {
            var t = e.role
              , n = e.onClick
              , r = (0,
            u.useTranslation)().t;
            return t ? o.default.createElement(s.CurrentRoleWrapper, {
                onClick: n,
                onKeyPress: (0,
                c.onEnterKeyPress)(n),
                role: "button",
                "aria-label": "".concat(r("roles.current"), " ").concat((0,
                c.determineRoleTitle)(t) || "", " ").concat((0,
                c.determineRoleSubtitle)(t) || ""),
                tabIndex: 0
            }, o.default.createElement(i.Role, {
                data: t,
                isCurrentRole: !0
            }), o.default.createElement(a.ChevronUpIcon, {
                width: "1.5em",
                height: "1.5em"
            })) : null
        }
    },
    "6G9+": function(e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n),
            Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }
        : function(e, t, n, r) {
            void 0 === r && (r = n),
            e[r] = t[n]
        }
        )
          , o = this && this.__exportStar || function(e, t) {
            for (var n in e)
                "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LATEST_VERSION_ID = t.fetchFeatureConfiguration = t.clearCachedFeatureData = t.clearInvalidCaches = t.cacheRequest = void 0,
        o(n("lOD/"), t),
        o(n("prif"), t);
        var i = n("t1en");
        Object.defineProperty(t, "cacheRequest", {
            enumerable: !0,
            get: function() {
                return i.cacheRequest
            }
        }),
        Object.defineProperty(t, "clearInvalidCaches", {
            enumerable: !0,
            get: function() {
                return i.clearInvalidCaches
            }
        }),
        Object.defineProperty(t, "clearCachedFeatureData", {
            enumerable: !0,
            get: function() {
                return i.clearCachedFeatureData
            }
        });
        var a = n("KrJc");
        Object.defineProperty(t, "fetchFeatureConfiguration", {
            enumerable: !0,
            get: function() {
                return a.fetchFeatureConfiguration
            }
        });
        var s = n("ITvT");
        Object.defineProperty(t, "LATEST_VERSION_ID", {
            enumerable: !0,
            get: function() {
                return s.LATEST_VERSION_ID
            }
        })
    },
    "6luk": function(e, t, n) {
        "use strict";
        var r = n("ddV6");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useAsync = void 0;
        var o = n("qwB3")
          , i = n("3M/Q");
        t.useAsync = function(e) {
            var t = o.useState("idle")
              , n = r(t, 2)
              , a = n[0]
              , s = n[1]
              , c = o.useState(null)
              , u = r(c, 2)
              , l = u[0]
              , f = u[1]
              , d = o.useState(null)
              , p = r(d, 2)
              , g = p[0]
              , h = p[1]
              , v = i.useLatestRef(null == e ? void 0 : e.onError)
              , m = i.useLatestRef(null == e ? void 0 : e.onSuccess);
            return {
                execute: o.useCallback((function(e) {
                    if (!e || !e.then)
                        throw new Error("The argument passed to execute must be a promise. Maybe a function that's passed isn't returning anything?");
                    s("pending"),
                    f(null),
                    h(null),
                    e.then((function(e) {
                        var t;
                        s("resolved"),
                        f(e),
                        null === (t = null == m ? void 0 : m.current) || void 0 === t || t.call(m, e)
                    }
                    ), (function(e) {
                        var t;
                        s("rejected"),
                        h(e),
                        null === (t = null == v ? void 0 : v.current) || void 0 === t || t.call(v, e)
                    }
                    ))
                }
                ), [v, m]),
                status: a,
                data: l,
                error: g,
                isIdle: "idle" === a,
                isLoading: "pending" === a,
                isError: "rejected" === a,
                isSuccess: "resolved" === a
            }
        }
    },
    "8+a7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("4VHr"),
        n("HiP7");
        var r = n("VtSi")
          , o = n.n(r)
          , i = (n("3yYM"),
        n("yVXO"),
        n("7lS7"),
        n("qwB3"))
          , a = n.n(i)
          , s = n("tYqs")
          , c = n("L21V")
          , u = n("6G9+")
          , l = (n("FSl4"),
        n("Y7xb"),
        n("CFFa"),
        n("Hfs8"),
        n("j/s1"))
          , f = n("owPT")
          , d = n("EiD0")
          , p = n("dqaP");
        var g = Object(l.default)(p.a).withConfig({
            componentId: "sc-12jkr55-0"
        })(["display:flex;flex-direction:column;@media screen and (min-width:", "){flex-direction:row;}"], (function(e) {
            return e.theme.breakpoint.lg
        }
        ))
          , h = l.default.div.withConfig({
            componentId: "sc-12jkr55-1"
        })(["display:flex;justify-content:center;align-items:center;flex-direction:column;"])
          , v = Object(l.default)(f.Headline).withConfig({
            componentId: "sc-12jkr55-2"
        })(["margin-top:2rem;margin-bottom:", "rem;"], (function(e) {
            return e.theme.spacing.xs
        }
        ))
          , m = function(e) {
            return a.a.createElement(h, Object.assign({
                role: "alert"
            }, e), a.a.createElement(d.ErrorAnimation, {
                width: "10rem",
                height: "10rem"
            }), a.a.createElement(v, {
                as: "h2",
                size: "Two"
            }, a.a.createElement(c.FormattedMessage, {
                id: "feature.error"
            })))
        }
          , y = Object(c.injectIntl)((function(e) {
            var t = e.intl
              , n = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, ["intl"]);
            return a.a.createElement(h, Object.assign({
                "aria-busy": !0,
                "aria-label": t.formatMessage({
                    id: "status.loading"
                })
            }, n), a.a.createElement(f.Loading, {
                preset: "brandPetrol",
                statusText: t.formatMessage({
                    id: "status.loading"
                })
            }))
        }
        ))
          , b = (n("izFX"),
        n("bVRK"),
        n("YJP+"),
        n("97js"),
        n("qfyY"),
        n("/sgr"),
        n("uns9"),
        n("jmUK"))
          , O = b.XyzTheme.color
          , E = b.XyzTheme.breakpoint
          , k = b.XyzTheme.fontWeight
          , w = Object(l.default)(y).withConfig({
            componentId: "sc-1hxhiqk-0"
        })(["width:100%;"])
          , S = l.default.div.withConfig({
            componentId: "sc-1hxhiqk-1"
        })(["display:", ";margin:0 -1rem;@media screen and (min-width:", "){padding-left:", ";width:", ";}"], (function(e) {
            return e.visible ? "block" : "none"
        }
        ), E.lg, (function(e) {
            return e.itemAmount > 1 ? "1rem" : "0"
        }
        ), (function(e) {
            return 1 === e.itemAmount ? "100%" : "60%"
        }
        ))
          , x = l.default.div.withConfig({
            componentId: "sc-1hxhiqk-2"
        })(["display:", ";width:100%;@media screen and (min-width:", "){width:", ";}"], (function(e) {
            return 1 === e.itemAmount ? "none" : "block"
        }
        ), E.lg, (function(e) {
            return e.trackingVisible ? "40%" : "100%"
        }
        ))
          , j = l.default.div.withConfig({
            componentId: "sc-1hxhiqk-3"
        })(["display:", ";@media screen and (min-width:", "){display:block;}"], (function(e) {
            return e.trackingVisible ? "none" : "block"
        }
        ), E.lg)
          , T = l.default.div.withConfig({
            componentId: "sc-1hxhiqk-4"
        })(["border-radius:0.75rem;border:1px solid ", ";max-width:44rem;margin-top:1rem;"], O.neutralGray2)
          , C = Object(l.default)(f.Body).attrs({
            size: "Five"
        }).withConfig({
            componentId: "sc-1hxhiqk-5"
        })(["margin-bottom:0;"])
          , _ = Object(l.default)(f.ListItem).withConfig({
            componentId: "sc-1hxhiqk-6"
        })(["background:", ";border-radius:0.75rem;&:active{background:", ";}&:focus-visible{box-shadow:0 0 0 3px ", ";outline:none;}"], (function(e) {
            return e.selected ? O.neutralGray2 : "none"
        }
        ), O.neutralOnPressGray, O.signalBlue)
          , P = function(e) {
            var t;
            switch (e.statusCode) {
            case "DELIVERED":
                t = a.a.createElement(f.Square, {
                    color: O.neutralGray5
                }, a.a.createElement(f.CheckmarkCircledIcon, {
                    color: O.neutralNetworkGray
                }));
                break;
            case "READY_FOR_PICKUP":
                t = a.a.createElement(f.Square, {
                    color: O.brandPink
                }, a.a.createElement(f.ClockIcon, {
                    color: O.neutralNetworkGray
                }));
                break;
            default:
                t = a.a.createElement(f.Square, {
                    color: O.signalLightGreen
                }, a.a.createElement(f.VehicleIcon, {
                    color: O.neutralNetworkGray
                }))
            }
            return t
        }
          , L = l.default.div.withConfig({
            componentId: "sc-1hxhiqk-7"
        })(["display:flex;flex-direction:column;max-width:50rem;& img{margin-bottom:1rem;display:block;text-align:center;max-width:10rem;align-self:center;}& ul{padding-inline-start:1.25rem;}"])
          , R = l.default.button.withConfig({
            componentId: "sc-1hxhiqk-8"
        })(["display:", ";background:none;align-self:flex-start;padding:0.5rem 0;font-weight:", ";color:", ";&:hover,&:active{color:", ";}@media screen and (min-width:", "){display:none;}"], (function(e) {
            return e.trackingVisible ? "block" : "none"
        }
        ), k.bold, O.signalBlue, O.signalHoverBlue, E.lg);
        var I = ["error.typingError", "error.trackingCodeFormat", "error.tryAgainLater", "error.shippedTooLongAgo"]
          , A = Object(c.injectIntl)((function(e) {
            var t = e.intl
              , n = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, ["intl"]);
            return a.a.createElement(L, n, a.a.createElement("img", {
                src: "/img/404-500-error.svg",
                alt: "",
                "aria-hidden": "true"
            }), a.a.createElement("b", null, t.formatMessage({
                id: "error.noItems"
            })), a.a.createElement("p", null, t.formatMessage({
                id: "error.reasonCouldBe"
            })), a.a.createElement("ul", null, I.map((function(e, n) {
                return a.a.createElement("li", {
                    key: n
                }, t.formatMessage({
                    id: e
                }))
            }
            ))))
        }
        ))
          , N = n("EH/7");
        function M(e) {
            return function(e) {
                if (Array.isArray(e))
                    return F(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return F(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return F(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function F(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function D(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a)
                  , c = s.value
            } catch (A) {
                return void n(A)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }
        var B = Object(c.injectIntl)((function(e) {
            var t = e.host
              , n = e.feature
              , r = e.ready
              , c = void 0 !== r && r
              , u = e.tokens
              , l = e.intl
              , f = Object(i.useState)([])
              , d = f[0]
              , p = f[1]
              , g = Object(i.useState)("")
              , h = g[0]
              , v = g[1]
              , m = Object(i.useState)(null)
              , y = m[0]
              , b = m[1]
              , O = Object(i.useState)("")
              , E = O[0]
              , k = O[1]
              , L = Object(s.useLocation)().hash
              , I = Object(i.useCallback)(function() {
                var e, n = (e = o.a.mark((function e(n) {
                    var r, i;
                    return o.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                "undefined" != typeof window && c && (Object(N.b)(u.decodedIdToken) && window.location.reload(),
                                i = n.trackingNumber || n.waybillNumber,
                                n.id = i,
                                b(n),
                                v("selected"),
                                null === (r = window) || void 0 === r || r.postMessage({
                                    type: "SHIPMENT_ID",
                                    payload: i,
                                    sender: t,
                                    receiver: "tracking"
                                }, "*"));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )),
                function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            D(i, r, o, a, s, "next", e)
                        }
                        function s(e) {
                            D(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
                );
                return function(e) {
                    return n.apply(this, arguments)
                }
            }(), [t, c, u])
              , F = Object(i.useCallback)((function(e) {
                fetch("/tracking-api-proxy/?q=" + e).then((function(e) {
                    return e.json()
                }
                )).then((function(e) {
                    p(e),
                    1 === e.length ? I(e[0]) : e.length > 1 ? v("showList") : v("error")
                }
                )).catch((function(e) {
                    p([]),
                    v("error"),
                    console.error(e)
                }
                ))
            }
            ), [I]);
            return Object(i.useEffect)((function() {
                if ("undefined" != typeof window) {
                    var e = Object(N.d)(L);
                    e ? (k(e),
                    v("loading"),
                    F(e)) : (k(""),
                    v(""),
                    b(null))
                }
            }
            ), [F, L]),
            a.a.createElement(a.a.Fragment, null, "loading" === h && a.a.createElement(w, null), "error" === h && a.a.createElement(A, null), ("showList" === h || "selected" === h) && a.a.createElement(x, {
                trackingVisible: "selected" === h,
                itemAmount: d.length
            }, a.a.createElement("b", null, l.formatMessage({
                id: "multitracking.itemsFound"
            }, {
                amount: d.length
            })), a.a.createElement(R, {
                trackingVisible: "selected" === h,
                onClick: function() {
                    return v("showList")
                },
                "aria-label": l.formatMessage({
                    id: "multitracking.backToItems"
                })
            }, l.formatMessage({
                id: "multitracking.backToItems"
            })), a.a.createElement(j, {
                trackingVisible: "selected" === h
            }, d.map((function(e, t) {
                var n, r = new Date(e.createdAt), o = new Intl.DateTimeFormat("fi-FI").format(r), i = e.trackingNumber, s = e.otherTrackingNumber, c = e.waybillNumber, u = e.references, f = void 0 === u ? {} : u, d = e.goodsItems, p = void 0 === d ? [] : d, g = f.consignor, h = void 0 === g ? [] : g, v = f.consignee, m = void 0 === v ? [] : v, b = i || c, O = p.reduce((function(e, t) {
                    if (!t.packages)
                        return e;
                    var n = t.packages.map((function(e) {
                        return e.trackingNumber
                    }
                    ));
                    return e.push.apply(e, M(n)),
                    e
                }
                ), []), k = [i, s].concat(M(O)).includes(E) ? "trackingNumber" : E === c ? "waybillNumber" : h.includes(E) ? "senderReference" : m.includes(E) ? "receiverReference" : "orderNumber";
                return a.a.createElement(T, {
                    key: t
                }, a.a.createElement(_, {
                    role: "button",
                    "aria-label": l.formatMessage({
                        id: "search.trackingCode"
                    }, {
                        trackingCode: b
                    }),
                    title: a.a.createElement(a.a.Fragment, null, a.a.createElement(C, {
                        size: "Five"
                    }, o), a.a.createElement("div", null, "ID: " + b)),
                    body: a.a.createElement(a.a.Fragment, null, e.status ? a.a.createElement("span", null, e.status.description[l.locale]) : "", a.a.createElement("span", null, l.formatMessage({
                        id: "tracking." + k
                    }), ": ", E)),
                    leftContent: a.a.createElement(P, {
                        statusCode: null === (n = e.status) || void 0 === n ? void 0 : n.code
                    }),
                    onClick: function() {
                        return I(e)
                    },
                    onKeyDown: function(t) {
                        return "Enter" === t.key && I(e)
                    },
                    selected: y && y.id === b && y.createdAt === e.createdAt
                }))
            }
            )))), a.a.createElement(S, {
                visible: "selected" === h,
                itemAmount: d.length
            }, n))
        }
        ))
          , G = n("4KWU");
        var U = Object(c.injectIntl)((function(e) {
            var t = e.intl
              , n = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, ["intl"])
              , r = Object.assign({}, t.messages, G[t.locale]);
            return a.a.createElement(c.IntlProvider, {
                locale: t.locale,
                messages: r
            }, a.a.createElement(B, n))
        }
        ))
          , z = n("b6UH");
        function K(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a)
                  , c = s.value
            } catch (A) {
                return void n(A)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }
        var V = "postifi"
          , H = Object(c.injectIntl)((function(e) {
            var t = e.componentData
              , n = e.parentProps
              , r = e.intl.locale
              , c = Object(s.useLocation)().pathname
              , l = void 0 === c ? "/" : c
              , f = Object(i.useState)(!1)
              , d = f[0]
              , p = f[1]
              , h = Object(i.useState)({
                idToken: "",
                roleToken: "",
                decodedIdToken: ""
            })
              , v = h[0]
              , b = h[1]
              , O = (n || {}).className
              , E = t || {}
              , k = E.featureName
              , w = E.featureUrl
              , S = E.addResponsiveContainer
              , x = void 0 !== S && S
              , j = ["development", "staging"].includes("production")
              , T = "true" === {}.GATSBY_LOAD_FEATURES_FROM_LOCAL
              , C = function() {
                var e, t = (e = o.a.mark((function e(t) {
                    var n, r, i, a, s;
                    return o.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return void 0 === t && (t = "DEV"),
                                e.prev = 1,
                                e.next = 4,
                                Object(z.getAnonymousToken)(t);
                            case 4:
                                n = e.sent,
                                r = n.idToken,
                                i = n.decodedIdToken,
                                a = n.roleTokens,
                                s = a[0].token,
                                b({
                                    idToken: r,
                                    roleToken: s,
                                    decodedIdToken: i
                                }),
                                e.next = 14;
                                break;
                            case 11:
                                return e.prev = 11,
                                e.t0 = e.catch(1),
                                e.abrupt("return", e.t0);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 11]])
                }
                )),
                function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            K(i, r, o, a, s, "next", e)
                        }
                        function s(e) {
                            K(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
                );
                return function(e) {
                    return t.apply(this, arguments)
                }
            }();
            Object(i.useEffect)((function() {
                C(j ? "DEV" : "PRD")
            }
            ), [j]);
            var _ = Object(u.useTokens)(k, V, v)
              , P = Object(u.useAnalytics)(k, V, (function(e) {
                var t, n;
                return null === (t = window) || void 0 === t || null === (n = t.dataLayer) || void 0 === n ? void 0 : n.push(e)
            }
            ))
              , L = Object(u.useErrorHandling)(k, V, (function(e) {
                return console.error(e)
            }
            ))
              , R = {
                feature: k,
                host: V,
                locale: r,
                basename: l,
                versionsFileUrl: w,
                onMessage: function(e) {
                    _(e),
                    P(e),
                    L(e),
                    "READY" === e.type && p(!0)
                },
                errorTemplate: a.a.createElement(m, null),
                loadingTemplate: a.a.createElement(y, null),
                debug: j,
                overrideOptions: T ? {
                    allowUrlBasedOverride: !1,
                    fileSystemFeaturePath: "/" + k + "/index.js"
                } : {}
            }
              , I = "tracking" === k ? a.a.createElement(U, {
                feature: a.a.createElement(u.Feature, R),
                host: V,
                ready: d,
                tokens: v
            }) : a.a.createElement(u.Feature, R);
            return a.a.createElement("div", {
                className: O
            }, x ? a.a.createElement(g, null, I) : I)
        }
        ));
        t.default = H
    },
    "80+j": function(e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.postMessageToFeature = t.createMessage = t.sendUnmount = t.InboundMessageType = t.OutboundMessageType = void 0,
        function(e) {
            e.AUTH_TOKEN = "AUTH_TOKEN",
            e.TOKENS = "TOKENS",
            e.PARENT_URL = "PARENT_URL",
            e.UNMOUNT = "UNMOUNT",
            e.UPDATE_MESSAGE = "UPDATE_MESSAGE",
            e.LANGUAGE = "LANGUAGE",
            e.NETWORK_CONNECTION_CHANGED = "NETWORK_CONNECTION_CHANGED"
        }(r = t.OutboundMessageType || (t.OutboundMessageType = {})),
        function(e) {
            e.READY = "READY",
            e.OPEN = "OPEN",
            e.CLOSE = "CLOSE",
            e.REDIRECT = "REDIRECT",
            e.SIZE = "SIZE",
            e.GO_TO_PAY = "GO_TO_PAY",
            e.GO_TO_COLLECTOR = "GO_TO_COLLECTOR",
            e.SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD",
            e.SHOW_TOAST = "SHOW_TOAST",
            e.UPDATE_MESSAGE = "UPDATE_MESSAGE",
            e.ANALYTICS_EVENT = "ANALYTICS_EVENT",
            e.ERROR = "ERROR"
        }(t.InboundMessageType || (t.InboundMessageType = {})),
        t.sendUnmount = function(e, n) {
            var o = t.createMessage(r.UNMOUNT, null, e, n);
            t.postMessageToFeature(o)
        }
        ,
        t.createMessage = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , n = arguments.length > 2 ? arguments[2] : void 0
              , r = arguments.length > 3 ? arguments[3] : void 0;
            return {
                type: e,
                payload: t,
                sender: r,
                receiver: n
            }
        }
        ,
        t.postMessageToFeature = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "*";
            t.postMessage(e, n)
        }
    },
    "8HtR": function(e, t, n) {
        var r = n("nGXB")
          , o = n("T/ei")
          , i = n("Opzy")
          , a = Object.isExtensible;
        r({
            target: "Object",
            stat: !0,
            forced: o((function() {
                a(1)
            }
            ))
        }, {
            isExtensible: function(e) {
                return !!i(e) && (!a || a(e))
            }
        })
    },
    "8pHb": function(e, t, n) {
        var r = n("nGXB")
          , o = n("T/ei")
          , i = n("HHgZ").f;
        r({
            target: "Object",
            stat: !0,
            forced: o((function() {
                return !Object.getOwnPropertyNames(1)
            }
            ))
        }, {
            getOwnPropertyNames: i
        })
    },
    "8zFE": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("fZzs");
        Object.keys(r).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            }))
        }
        ))
    },
    "9TxS": function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = r(n("KEM+"))
          , i = r(n("qwB3"))
          , a = r(n("aWzz"))
          , s = n("j/s1")
          , c = n("d6wg");
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var f = function(e) {
            var t = e.children;
            return i.default.createElement(s.ThemeProvider, {
                theme: l(l({}, c.PostiTheme), {}, {
                    xyz: c.XyzTheme
                })
            }, i.default.createElement(i.default.Fragment, null, t))
        };
        f.propTypes = {
            children: a.default.oneOfType([a.default.arrayOf(a.default.node), a.default.node]).isRequired
        };
        var d = f;
        t.default = d
    },
    BOhL: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("XiPS");
        Object.keys(r).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            }))
        }
        ));
        var o = n("kO/L");
        Object.keys(o).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e]
                }
            }))
        }
        ));
        var i = n("z9Jo");
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            }))
        }
        ));
        var a = n("iI//");
        Object.keys(a).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === a[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return a[e]
                }
            }))
        }
        ));
        var s = n("YCZe");
        Object.keys(s).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === s[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return s[e]
                }
            }))
        }
        ));
        var c = n("jyK7");
        Object.keys(c).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === c[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return c[e]
                }
            }))
        }
        ));
        var u = n("aLSp");
        Object.keys(u).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === u[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return u[e]
                }
            }))
        }
        ));
        var l = n("MK0x");
        Object.keys(l).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === l[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return l[e]
                }
            }))
        }
        ));
        var f = n("cchr");
        Object.keys(f).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === f[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return f[e]
                }
            }))
        }
        ));
        var d = n("I38j");
        Object.keys(d).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === d[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return d[e]
                }
            }))
        }
        ))
    },
    C2Vm: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useTokens = void 0;
        var r = n("qwB3")
          , o = n("mQHI")
          , i = function(e, t, n) {
            var r = n.idToken
              , i = n.accessToken
              , a = n.roleToken
              , s = n.decodedIdToken
              , c = n.decodedRoleToken;
            if (r) {
                o.logInfo("[".concat(t.toUpperCase(), " to ").concat(e.toUpperCase(), "]: Sending TOKENS message"));
                var u = {
                    encoded: {
                        idToken: r,
                        accessToken: i,
                        roleToken: a
                    },
                    decoded: {
                        idToken: s,
                        roleToken: c
                    }
                }
                  , l = o.createMessage(o.OutboundMessageType.TOKENS, u, e, t);
                o.postMessageToFeature(l)
            }
        };
        t.useTokens = function(e, t, n) {
            var a = r.useRef(!1);
            return r.useEffect((function() {
                a.current && i(e, t, n)
            }
            ), [n, e, t]),
            function(r) {
                r && r.type === o.InboundMessageType.READY && (i(e, t, n),
                a.current = !0)
            }
        }
    },
    DY5D: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useErrorHandling = void 0;
        var r = n("mQHI");
        t.useErrorHandling = function(e) {
            return function(t) {
                if ((null == t ? void 0 : t.type) === r.InboundMessageType.ERROR) {
                    var n = t.payload;
                    n && n.code && (null == e || e(n))
                }
            }
        }
    },
    DrGY: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("8zFE");
        Object.keys(r).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            }))
        }
        ));
        var o = n("r3qd");
        Object.keys(o).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e]
                }
            }))
        }
        ));
        var i = n("3cDC");
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            }))
        }
        ));
        var a = n("lXt7");
        Object.keys(a).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === a[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return a[e]
                }
            }))
        }
        ));
        var s = n("F5DN");
        Object.keys(s).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === s[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return s[e]
                }
            }))
        }
        ));
        var c = n("Oong");
        Object.keys(c).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === c[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return c[e]
                }
            }))
        }
        ))
    },
    "F+Mn": function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.initLocales = function() {
            var e, t = (e = {},
            (0,
            o.default)(e, i.Locale.fi, (0,
            o.default)({}, "RoleSwitcher", s.default)),
            (0,
            o.default)(e, i.Locale.en, (0,
            o.default)({}, "RoleSwitcher", a.default)),
            (0,
            o.default)(e, i.Locale.sv, (0,
            o.default)({}, "RoleSwitcher", c.default)),
            e);
            i.localisation.init(t, "RoleSwitcher")
        }
        ;
        var o = r(n("KEM+"))
          , i = n("XiPS")
          , a = r(n("ZEoF"))
          , s = r(n("IfmR"))
          , c = r(n("378H"))
    },
    F5DN: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("iEui");
        Object.keys(r).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            }))
        }
        ))
    },
    FB7m: function(e, t, n) {
        n("/vb6")("toPrimitive")
    },
    FWHK: function(e, t, n) {
        var r = /(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g
          , o = n("IiFM")
          , i = Object.create ? Object.create(null) : {};
        function a(e, t, n, r, o) {
            var i = t.indexOf("<", r)
              , a = t.slice(r, -1 === i ? void 0 : i);
            /^\s*$/.test(a) && (a = " "),
            (!o && i > -1 && n + e.length >= 0 || " " !== a) && e.push({
                type: "text",
                content: a
            })
        }
        e.exports = function(e, t) {
            t || (t = {}),
            t.components || (t.components = i);
            var n, s = [], c = -1, u = [], l = {}, f = !1;
            return e.replace(r, (function(r, i) {
                if (f) {
                    if (r !== "</" + n.name + ">")
                        return;
                    f = !1
                }
                var d, p = "/" !== r.charAt(1), g = 0 === r.indexOf("\x3c!--"), h = i + r.length, v = e.charAt(h);
                p && !g && (c++,
                "tag" === (n = o(r)).type && t.components[n.name] && (n.type = "component",
                f = !0),
                n.voidElement || f || !v || "<" === v || a(n.children, e, c, h, t.ignoreWhitespace),
                l[n.tagName] = n,
                0 === c && s.push(n),
                (d = u[c - 1]) && d.children.push(n),
                u[c] = n),
                (g || !p || n.voidElement) && (g || c--,
                !f && "<" !== v && v && a(d = -1 === c ? s : u[c].children, e, c, h, t.ignoreWhitespace))
            }
            )),
            !s.length && e.length && a(s, e, 0, 0, t.ignoreWhitespace),
            s
        }
    },
    FivH: function(e, t, n) {
        "use strict";
        var r, o, i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Privilege = t.RoleType = t.AuthenticationRoute = t.AuthServiceEndpoint = void 0,
        t.AuthServiceEndpoint = r,
        function(e) {
            e.DEV = "https://auth-cf.dev.omaposti.postinext.fi/",
            e.TST = "https://auth-cf.tst.omaposti.postinext.fi/",
            e.STG = "https://auth-cf.stg.omaposti.postinext.fi/",
            e.PRD = "https://auth-service.posti.fi/"
        }(r || (t.AuthServiceEndpoint = r = {})),
        t.AuthenticationRoute = o,
        function(e) {
            e.LOGIN = "api/v1/login",
            e.REFRESH = "api/v1/refresh_v2",
            e.TOKEN = "api/v1/token_v2",
            e.ANONYMOUS_TOKEN = "api/v1/anonymous_token",
            e.LOGOUT = "api/v1/logout"
        }(o || (t.AuthenticationRoute = o = {})),
        t.RoleType = i,
        function(e) {
            e.CORPORATE = "corporate",
            e.CONSUMER = "consumer",
            e.ANONYMOUS = "anonymous"
        }(i || (t.RoleType = i = {}));
        t.Privilege = {
            OPC_CREATE_SHIPMENTS: "opc_create_shipments",
            OPC_TRACK_SHIPMENTS: "opc_track_shipments",
            OPC_SEE_RECEIVED_INVOICES_AND_LETTERS: "opc_see_received_invoices_and_letters",
            OPC_CREATE_INVOICES: "opc_create_invoices",
            OPC_ACTIVATE_B2B_EINVOICE: "opc_activate_b2b_einvoice",
            OPC_ACCESS_REPORTS: "opc_access_reports",
            AP_SMARTSHIPUSER: "ap_smartshipUser",
            CORP_MAIN_USER: "MainUser"
        }
    },
    GKyO: function(e, t, n) {
        "use strict";
        var r = n("nGXB")
          , o = n("DLGp")
          , i = n("YHpG")
          , a = n("16cg")
          , s = n("3zCA")
          , c = n("fCnm");
        o && r({
            target: "Object",
            proto: !0,
            forced: i
        }, {
            __defineGetter__: function(e, t) {
                c.f(a(this), e, {
                    get: s(t),
                    enumerable: !0,
                    configurable: !0
                })
            }
        })
    },
    Gd2Q: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useAnalytics = void 0;
        var r = n("mQHI");
        t.useAnalytics = function(e, t) {
            return function(n) {
                if (n && n.type === r.InboundMessageType.ANALYTICS_EVENT) {
                    var o = n.payload;
                    if (!o || !o.type)
                        return void r.logError("[".concat(e.toUpperCase(), "]: Received analytics event is invalid: property 'payload' or 'payload.type' is falsy"), o);
                    null == t || t(o)
                }
            }
        }
    },
    H5LP: function(e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n),
            Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }
        : function(e, t, n, r) {
            void 0 === r && (r = n),
            e[r] = t[n]
        }
        )
          , o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , i = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
            return o(t, e),
            t
        }
          , a = this && this.__rest || function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Feature = void 0;
        var s = i(n("qwB3"))
          , c = n("mQHI")
          , u = n("3M/Q")
          , l = n("6luk")
          , f = n("RU7F");
        t.Feature = function(e) {
            var t = e.feature
              , n = e.locale
              , r = e.basename
              , o = e.host
              , i = e.versionsFileUrl
              , d = e.overrideOptions
              , p = void 0 === d ? {} : d
              , g = e.cache
              , h = e.onMessage
              , v = e.errorTemplate
              , m = e.loadingTemplate
              , y = e.debug
              , b = e.attributes
              , O = e.onBeforeLoadingVersion
              , E = e.onCriticalError
              , k = e.history
              , w = e.style
              , S = a(e, ["feature", "locale", "basename", "host", "versionsFileUrl", "overrideOptions", "cache", "onMessage", "errorTemplate", "loadingTemplate", "debug", "attributes", "onBeforeLoadingVersion", "onCriticalError", "history", "style"])
              , x = p.fileSystemFeaturePath
              , j = p.versionName
              , T = p.featureUrl
              , C = p.allowUrlBasedOverride
              , _ = l.useAsync({
                onError: function(e) {
                    c.logError(e),
                    null == E || E(e)
                }
            })
              , P = _.execute
              , L = _.data
              , R = _.error
              , I = _.isLoading
              , A = f.useScript(L || void 0)
              , N = A.status
              , M = A.removeScript
              , F = s.useRef(null)
              , D = u.useLatestRef(O)
              , B = u.useLatestRef(h)
              , G = u.useLatestRef(g)
              , U = s.useCallback((function(e) {
                var n;
                c.isValidMessage(e, t, o) && (null === (n = B.current) || void 0 === n || n.call(B, e.data))
            }
            ), [t, o, B])
              , z = R || "error" === N
              , K = I || "loading" === N;
            return s.useEffect((function() {
                c.config.debug = Boolean(y)
            }
            ), [y]),
            s.useEffect((function() {
                return window.addEventListener("message", U),
                function() {
                    return window.removeEventListener("message", U)
                }
            }
            ), [U]),
            s.useEffect((function() {
                P(c.setupCache(G.current).then((function(e) {
                    return x ? Promise.resolve(x) : c.determineFeatureUrl({
                        feature: t,
                        featureUrl: T,
                        versionsFileUrl: i,
                        allowUrlBasedOverride: C,
                        versionName: j,
                        cacheName: e
                    })
                }
                )).then((function(e) {
                    var n;
                    if (!e)
                        throw new Error("Invalid feature url");
                    return null === (n = D.current) || void 0 === n || n.call(D, {
                        feature: t,
                        url: e
                    }),
                    e
                }
                )))
            }
            ), [C, G, P, t, T, x, D, j, i]),
            s.useEffect((function() {
                var e, n = F.current, r = null === (e = window) || void 0 === e ? void 0 : e[t];
                if ("ready" === N)
                    return (null == r ? void 0 : r.mount) && (null == n ? void 0 : n.id) && (c.logInfo("[".concat(t.toUpperCase(), "]: Mounting the feature")),
                    r.mount(n.id, {
                        history: k
                    })),
                    function() {
                        "ready" === N && (null == r ? void 0 : r.unmount) && (null == n ? void 0 : n.id) && (c.logInfo("[".concat(t.toUpperCase(), "]: Unmounting the feature")),
                        r.unmount(n.id))
                    }
            }
            ), [t, N, k]),
            s.useEffect((function() {
                return function() {
                    var e;
                    if ("ready" === N) {
                        var n = null === (e = window) || void 0 === e ? void 0 : e[t];
                        (null == n ? void 0 : n.unmount) || (c.logInfo("[".concat(t.toUpperCase(), "]: Unmounting with legacy approach")),
                        c.postMessageToFeature(c.createMessage(c.OutboundMessageType.UNMOUNT, void 0, t, o)),
                        M())
                    }
                }
            }
            ), [t, N, o, M]),
            s.useEffect((function() {
                "error" === N && M()
            }
            ), [N, M]),
            s.default.createElement(s.default.Fragment, null, z && v, K && m, s.default.createElement("div", Object.assign({
                id: t,
                "data-testid": "feature-loader",
                ref: F,
                style: K || z ? {
                    display: "none"
                } : Object.assign({
                    height: "100%",
                    width: "100%"
                }, w),
                "data-locale": n,
                "data-basename": r
            }, b, S)))
        }
    },
    I38j: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useAsync = function(e) {
            var t = (0,
            s.useState)("idle")
              , n = (0,
            a.default)(t, 2)
              , r = n[0]
              , c = n[1]
              , u = (0,
            s.useState)(null)
              , l = (0,
            a.default)(u, 2)
              , f = l[0]
              , d = l[1]
              , p = (0,
            s.useState)(null)
              , g = (0,
            a.default)(p, 2)
              , h = g[0]
              , v = g[1];
            return {
                execute: (0,
                s.useCallback)(function() {
                    var t = (0,
                    i.default)(o.default.mark((function t(n) {
                        return o.default.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (n || n.then) {
                                        t.next = 2;
                                        break
                                    }
                                    throw new Error("The argument passed to execute must be a promise. Maybe a function that's passed isn't returning anything?");
                                case 2:
                                    c("pending"),
                                    d(null),
                                    v(null),
                                    n.then((function(t) {
                                        c("resolved"),
                                        d(t),
                                        null == e || e.onSuccess(t)
                                    }
                                    ), (function(t) {
                                        v(t),
                                        c("rejected"),
                                        null == e || e.onError(t)
                                    }
                                    ));
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(), [e]),
                status: r,
                data: f,
                error: h,
                isIdle: "idle" === r,
                isLoading: "pending" === r,
                isError: "rejected" === r,
                isSuccess: "resolved" === r
            }
        }
        ;
        var o = r(n("VtSi"))
          , i = r(n("cbiG"))
          , a = r(n("ddV6"))
          , s = n("qwB3")
    },
    ITvT: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LATEST_VERSION_ID = t.isLocalhost = t.ALLOWED_FEATURE_ORIGIN = t.ID = void 0,
        function(e) {
            e.FEATURE_CONTAINER = "feature-container"
        }(t.ID || (t.ID = {})),
        t.ALLOWED_FEATURE_ORIGIN = /https:\/\/(|.*\.)(postinext\.fi|posti\.fi|posticloud\.fi)$/,
        t.isLocalhost = function() {
            return Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))
        }
        ,
        t.LATEST_VERSION_ID = "latest"
    },
    IfmR: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = {
            toggle: {
                label: "Käyttäjätiedot ja käyttäjäroolit"
            },
            roles: {
                switch: "Vaihda käyttäjäroolia",
                current: "Valittu käyttäjärooli",
                select: "Valitse rooli"
            },
            services: {
                title: "TBD"
            },
            links: {
                userSettings: "Käyttäjäasetukset"
            },
            logout: "Kirjaudu ulos",
            login: "Kirjaudu sisään"
        }
    },
    IiFM: function(e, t, n) {
        var r = /([\w-]+)|=|(['"])([.\s\S]*?)\2/g
          , o = n("nkkX");
        e.exports = function(e) {
            var t, n = 0, i = !0, a = {
                type: "tag",
                name: "",
                voidElement: !1,
                attrs: {},
                children: []
            };
            return e.replace(r, (function(r) {
                if ("=" === r)
                    return i = !0,
                    void n++;
                i ? 0 === n ? ((o[r] || "/" === e.charAt(e.length - 2)) && (a.voidElement = !0),
                a.name = r) : (a.attrs[t] = r.replace(/^['"]|['"]$/g, ""),
                t = void 0) : (t && (a.attrs[t] = t),
                t = r),
                n++,
                i = !1
            }
            )),
            a
        }
    },
    Jree: function(e, t, n) {
        "use strict";
        var r = n("nGXB")
          , o = n("DLGp")
          , i = n("YHpG")
          , a = n("16cg")
          , s = n("3zCA")
          , c = n("fCnm");
        o && r({
            target: "Object",
            proto: !0,
            forced: i
        }, {
            __defineSetter__: function(e, t) {
                c.f(a(this), e, {
                    set: s(t),
                    enumerable: !0,
                    configurable: !0
                })
            }
        })
    },
    "KEM+": function(e, t) {
        e.exports = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
    },
    KrJc: function(e, t, n) {
        "use strict";
        var r = n("VtSi");
        n("3yYM");
        var o = n("ddV6")
          , i = this && this.__awaiter || function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.determineFeatureUrl = t.fetchFeatureConfiguration = void 0;
        var s = n("t1en")
          , c = n("ITvT")
          , u = n("vISZ")
          , l = a(n("01Zg"))
          , f = function(e) {
            var t = l.default.qs.parse(location.search).feature
              , n = (void 0 === t ? "" : t).split("|")
              , r = o(n, 2)
              , i = r[0]
              , a = r[1];
            if (i === e && a) {
                if (c.isLocalhost() || c.ALLOWED_FEATURE_ORIGIN.test(l.default(a).origin))
                    return a;
                u.logError("The feature url ".concat(a, " was blocked because it had unallowed origin"))
            }
        };
        t.fetchFeatureConfiguration = function(e, t) {
            return i(void 0, void 0, void 0, r.mark((function n() {
                var o;
                return r.wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return o = new Request(e,{
                                headers: {
                                    Accept: "application/json"
                                }
                            }),
                            n.abrupt("return", s.getResource(o, {
                                cacheName: t,
                                caching: s.CacheDirective.FETCH_FIRST,
                                dataType: "json"
                            }));
                        case 2:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            )))
        }
        ;
        var d = function(e) {
            return c.isLocalhost() || c.ALLOWED_FEATURE_ORIGIN.test(l.default(e).origin)
        };
        t.determineFeatureUrl = function(e) {
            var n = e.feature
              , o = e.versionsFileUrl
              , a = e.featureUrl
              , s = e.versionName
              , l = e.allowUrlBasedOverride
              , p = e.cacheName;
            return i(void 0, void 0, void 0, r.mark((function e() {
                var i, g, h, v;
                return r.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (g = null,
                            !l) {
                                e.next = 6;
                                break
                            }
                            if (!(h = f(n))) {
                                e.next = 6;
                                break
                            }
                            return u.logInfo("[".concat(n.toUpperCase(), "]: Loading the feature from ").concat(h)),
                            e.abrupt("return", h);
                        case 6:
                            if (!a) {
                                e.next = 10;
                                break
                            }
                            g = a,
                            e.next = 18;
                            break;
                        case 10:
                            if (!o) {
                                e.next = 18;
                                break
                            }
                            return e.next = 13,
                            t.fetchFeatureConfiguration(o, p);
                        case 13:
                            if (e.t0 = e.sent,
                            e.t0) {
                                e.next = 16;
                                break
                            }
                            e.t0 = {};
                        case 16:
                            v = e.t0,
                            g = s && (null === (i = v[s]) || void 0 === i ? void 0 : i.url) ? v[s].url : v[c.LATEST_VERSION_ID].url;
                        case 18:
                            if (!g || d(g)) {
                                e.next = 21;
                                break
                            }
                            return u.logError("The feature url ".concat(g, " was blocked because it had unallowed origin")),
                            e.abrupt("return", null);
                        case 21:
                            return e.abrupt("return", g);
                        case 22:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))
        }
    },
    LWcO: function(e, t, n) {
        var r = n("nGXB")
          , o = n("T/ei")
          , i = n("Zrst")
          , a = n("GtEJ").f
          , s = n("DLGp")
          , c = o((function() {
            a(1)
        }
        ));
        r({
            target: "Object",
            stat: !0,
            forced: !s || c,
            sham: !s
        }, {
            getOwnPropertyDescriptor: function(e, t) {
                return a(i(e), t)
            }
        })
    },
    LmHW: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useLanguageChange = void 0;
        var r = n("qwB3")
          , o = n("mQHI");
        t.useLanguageChange = function(e, t, n) {
            r.useEffect((function() {
                n && function(e, t, n) {
                    o.logInfo("[".concat(t.toUpperCase(), "]: Sending LANGUAGE message: '").concat(n, "'"));
                    var r = o.createMessage(o.OutboundMessageType.LANGUAGE, n, e, t);
                    o.postMessageToFeature(r)
                }(e, t, n)
            }
            ), [n, e, t])
        }
    },
    MK0x: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.usePersistedState = function(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , s = r.serialize
              , c = void 0 === s ? JSON.stringify : s
              , u = r.deserialize
              , l = void 0 === u ? JSON.parse : u
              , f = (0,
            i.useState)((function() {
                try {
                    var r = n.getFromStorage(e);
                    return r ? l(r) : t
                } catch (o) {
                    return (0,
                    a.logError)("[Role Switcher]: error deserializing key ".concat(e, " from local/session storage: "), o),
                    t
                }
            }
            ))
              , d = (0,
            o.default)(f, 2)
              , p = d[0]
              , g = d[1]
              , h = function(t) {
                try {
                    var r = t instanceof Function ? t(p) : t;
                    g(r),
                    n.setToStorage(e, c(r))
                } catch (o) {
                    (0,
                    a.logError)("[Role Switcher]: error serializing key ".concat(e, " to local/session storage: "), o)
                }
            }
              , v = function() {
                n.removeFromStorage(e)
            };
            return [p, h, v]
        }
        ;
        var o = r(n("ddV6"))
          , i = n("qwB3")
          , a = n("YCZe")
    },
    MrvR: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.RoleList = void 0;
        var o = r(n("qwB3"))
          , i = n("l+CB")
          , a = n("jp49")
          , s = n("iEui")
          , c = n("BOhL")
          , u = n("liE7");
        t.RoleList = function(e) {
            var t = e.roles
              , n = e.onRoleSelected
              , r = function(e) {
                return n(e)
            }
              , l = (0,
            u.useTranslation)().t;
            return o.default.createElement(o.default.Fragment, null, o.default.createElement(a.LabelWrapper, null, o.default.createElement(i.Body, {
                size: i.BodySize.Four,
                as: "span"
            }, l("roles.switch"))), o.default.createElement(a.ListWrapper, null, t.map((function(e, t) {
                return o.default.createElement(s.Role, {
                    data: e,
                    key: t,
                    isCurrentRole: !1,
                    onClick: r.bind(null, e),
                    onKeyPress: (0,
                    c.onEnterKeyPress)(r.bind(null, e)),
                    tabIndex: 0,
                    role: "button"
                })
            }
            ))))
        }
    },
    NmEr: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("6Bin");
        Object.keys(r).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            }))
        }
        ));
        var o = n("fk7E");
        Object.keys(o).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e]
                }
            }))
        }
        ));
        var i = n("sEzv");
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            }))
        }
        ));
        var a = n("s4bR");
        Object.keys(a).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === a[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return a[e]
                }
            }))
        }
        ));
        var s = n("MrvR");
        Object.keys(s).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === s[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return s[e]
                }
            }))
        }
        ))
    },
    OcWw: function(e, t, n) {
        var r = n("nGXB")
          , o = n("T/ei")
          , i = n("Opzy")
          , a = Object.isSealed;
        r({
            target: "Object",
            stat: !0,
            forced: o((function() {
                a(1)
            }
            ))
        }, {
            isSealed: function(e) {
                return !i(e) || !!a && a(e)
            }
        })
    },
    Ongf: function(e, t, n) {
        "use strict";
        var r = n("yWCo");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Wrapper = void 0;
        var o = r(n("j/s1"))
          , i = o.default.div.withConfig({
            componentId: "uj5cdg-0"
        })((function(e) {
            e.theme;
            return (0,
            o.css)(["display:flex;position:relative;flex-direction:column;align-items:flex-end;z-index:999;"])
        }
        ));
        t.Wrapper = i
    },
    Oong: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("oBCf");
        Object.keys(r).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            }))
        }
        ))
    },
    "Pf+4": function(e, t, n) {
        n("/vb6")("search")
    },
    Q0bk: function(e, t, n) {
        "use strict";
        var r = n("yWCo");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Container = void 0;
        var o = r(n("j/s1"))
          , i = o.default.div.withConfig({
            componentId: "sc-1cq67y6-0"
        })((function(e) {
            var t = e.theme;
            return (0,
            o.css)(["display:flex;flex-direction:column;padding:", "rem;background-color:", ";box-shadow:0px 15px 22px rgba(0,0,0,0.06),0px 3px 8px rgba(0,0,0,0.08),0px 1px 1px rgba(0,0,0,0.08),0px 3px 1px rgba(0,0,0,0.04);border-radius:1.5rem;min-width:300px;overflow-y:auto;--webkit-overflow-scrolling:touch;max-height:calc(100vh - 5rem);"], t.xyz.spacing.space2, t.xyz.color.neutralWhite)
        }
        ));
        t.Container = i
    },
    RPHr: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Link = void 0;
        var o = r(n("97Jx"))
          , i = r(n("m3Bd"))
          , a = r(n("qwB3"))
          , s = n("zpld")
          , c = n("liE7")
          , u = n("l+CB")
          , l = n("j/s1");
        t.Link = function(e) {
            var t = e.icon
              , n = e.text
              , r = (0,
            i.default)(e, ["icon", "text"])
              , f = (0,
            c.useTranslation)().t
              , d = (0,
            l.useTheme)();
            return t ? a.default.createElement(s.Anchor, r, t, a.default.createElement(s.StyledLabel, {
                as: "div",
                size: u.LabelSize.Three,
                fontWeight: d.xyz.fontWeight.semiBold
            }, f(n))) : a.default.createElement(s.Anchor, (0,
            o.default)({
                smallSpacing: !0
            }, r), a.default.createElement(s.StyledLabel, {
                as: "span",
                size: u.LabelSize.Three,
                fontWeight: d.xyz.fontWeight.normal
            }, f(n)))
        }
    },
    RU7F: function(e, t, n) {
        "use strict";
        var r = n("ddV6");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useScript = t.getScript = void 0;
        var o = n("qwB3")
          , i = n("mQHI");
        function a(e) {
            return document.querySelector('script[src="'.concat(e, '"]'))
        }
        t.getScript = a,
        t.useScript = function(e) {
            var t = o.useState(e ? "loading" : "idle")
              , n = r(t, 2)
              , s = n[0]
              , c = n[1]
              , u = o.useCallback((function() {
                if (!e)
                    throw new Error("Trying to remove undefined script");
                var t = a(e);
                t instanceof HTMLElement && i.unmountFromDOM(t)
            }
            ), [e]);
            return o.useEffect((function() {
                if (e) {
                    var t = a(e);
                    if (t)
                        c(t.getAttribute("data-status"));
                    else {
                        (t = document.createElement("script")).src = e,
                        t.async = !0,
                        t.setAttribute("data-status", "loading"),
                        document.body.appendChild(t);
                        var n = function(e) {
                            null == t || t.setAttribute("data-status", "load" === e.type ? "ready" : "error")
                        };
                        t.addEventListener("load", n),
                        t.addEventListener("error", n)
                    }
                    var r = function(e) {
                        c("load" === e.type ? "ready" : "error")
                    };
                    return t.addEventListener("load", r),
                    t.addEventListener("error", r),
                    function() {
                        t && (t.removeEventListener("load", r),
                        t.removeEventListener("error", r))
                    }
                }
                c("idle")
            }
            ), [e]),
            {
                status: s,
                removeScript: u
            }
        }
    },
    Rzqm: function(e, t, n) {
        "use strict";
        var r = n("nGXB")
          , o = n("DLGp")
          , i = n("5uek")
          , a = n("3k8r")
          , s = n("Opzy")
          , c = n("fCnm").f
          , u = n("7krk")
          , l = i.Symbol;
        if (o && "function" == typeof l && (!("description"in l.prototype) || void 0 !== l().description)) {
            var f = {}
              , d = function() {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0])
                  , t = this instanceof d ? new l(e) : void 0 === e ? l() : l(e);
                return "" === e && (f[t] = !0),
                t
            };
            u(d, l);
            var p = d.prototype = l.prototype;
            p.constructor = d;
            var g = p.toString
              , h = "Symbol(test)" == String(l("test"))
              , v = /^Symbol\((.*)\)[^)]+$/;
            c(p, "description", {
                configurable: !0,
                get: function() {
                    var e = s(this) ? this.valueOf() : this
                      , t = g.call(e);
                    if (a(f, e))
                        return "";
                    var n = h ? t.slice(7, -1) : t.replace(v, "$1");
                    return "" === n ? void 0 : n
                }
            }),
            r({
                global: !0,
                forced: !0
            }, {
                Symbol: d
            })
        }
    },
    T4vw: function(e, t, n) {
        "use strict";
        var r = n("yWCo");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Wrapper = t.StyledLabel = void 0;
        var o = r(n("j/s1"))
          , i = n("l+CB")
          , a = (0,
        o.default)(i.Label).withConfig({
            componentId: "skd06b-0"
        })((function(e) {
            var t = e.theme
              , n = e.color;
            return (0,
            o.css)(["font-weight:", ";color:", ";"], t.xyz.fontWeight.bold, n)
        }
        ));
        t.StyledLabel = a;
        var s = o.default.div.withConfig({
            componentId: "skd06b-1"
        })((function(e) {
            var t = e.theme
              , n = e.mainToggle;
            return (0,
            o.css)(["display:flex;justify-content:center;align-items:center;", ""], n && (0,
            o.css)(["padding:4px 0 4px 0;border-bottom:4px solid transparent;cursor:pointer;&:focus{border-bottom:4px solid ", ";}"], t.xyz.color.brandBrightYellow))
        }
        ));
        t.Wrapper = s
    },
    Us4k: function(e, t, n) {
        "use strict";
        var r = n("nGXB")
          , o = n("DLGp")
          , i = n("YHpG")
          , a = n("16cg")
          , s = n("Z6Z4")
          , c = n("LUuf")
          , u = n("GtEJ").f;
        o && r({
            target: "Object",
            proto: !0,
            forced: i
        }, {
            __lookupGetter__: function(e) {
                var t, n = a(this), r = s(e, !0);
                do {
                    if (t = u(n, r))
                        return t.get
                } while (n = c(n))
            }
        })
    },
    V3Ro: function(e, t, n) {
        var r = n("nGXB")
          , o = n("0419")
          , i = n("dsym");
        r({
            target: "Object",
            stat: !0
        }, {
            fromEntries: function(e) {
                var t = {};
                return o(e, (function(e, n) {
                    i(t, e, n)
                }
                ), void 0, !0),
                t
            }
        })
    },
    "Xf//": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    XiPS: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.localisation = t.Localisation = t.Locale = void 0;
        var o = r(n("VrFO"))
          , i = r(n("d5gM"))
          , a = {
            fi: "fi",
            en: "en",
            sv: "sv"
        };
        t.Locale = a;
        var s = function e() {
            var t = this;
            (0,
            o.default)(this, e),
            this.locale = void 0,
            this.i18nInstance = void 0,
            this.changeLocale = function(e) {
                t.locale = e,
                t.i18nInstance.changeLanguage(t.locale)
            }
            ,
            this.init = function(e, n) {
                var r = "undefined" != typeof document ? document.documentElement.lang.toLowerCase() : a.fi;
                Object.keys(a).forEach((function(e) {
                    a[e] !== r || (t.locale = r)
                }
                )),
                t.i18nInstance.init({
                    resources: e,
                    lng: t.locale,
                    whitelist: Object.values(a),
                    fallbackLng: a.fi,
                    ns: [n],
                    defaultNS: n,
                    debug: !1,
                    interpolation: {
                        escapeValue: !1
                    },
                    react: {
                        wait: !0
                    }
                })
            }
            ,
            this.i18nInstance = i.default.createInstance()
        };
        t.Localisation = s;
        var c = new s;
        t.localisation = c
    },
    XnwG: function(e, t, n) {
        n("roqG")(Math, "Math", !0)
    },
    YCZe: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getWindow = t.logInfo = t.logError = t.handleCriticalError = t.isProduction = t.isTst = t.isDev = t.onEnterKeyPress = void 0;
        var r = n("l+CB")
          , o = n("iI//");
        t.onEnterKeyPress = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(e) {
                e.key !== r.KeyboardKeys.Enter && e.key !== r.KeyboardKeys.Space || t.map((function(e) {
                    return null == e ? void 0 : e()
                }
                ))
            }
        }
        ;
        t.isDev = function() {
            return "DEV" === o.config.environment
        }
        ;
        t.isTst = function() {
            return "TST" === o.config.environment
        }
        ;
        var i = function() {
            return ["PRD", "STG"].includes(o.config.environment)
        };
        t.isProduction = i;
        t.handleCriticalError = function(e) {
            o.config.notifyCriticalError && o.config.notifyCriticalError(e)
        }
        ;
        t.logError = function() {
            var e;
            if (o.config.notifyNonCriticalError && o.config.notifyNonCriticalError(arguments.length <= 0 ? void 0 : arguments[0]),
            !i())
                return (e = console).error.apply(e, arguments)
        }
        ;
        t.logInfo = function() {
            var e;
            if (!i())
                return (e = console).info.apply(e, arguments)
        }
        ;
        t.getWindow = function() {
            return "undefined" != typeof window ? window : void 0
        }
    },
    YHpG: function(e, t, n) {
        "use strict";
        var r = n("hVlx")
          , o = n("5uek")
          , i = n("T/ei");
        e.exports = r || !i((function() {
            var e = Math.random();
            __defineSetter__.call(null, e, (function() {}
            )),
            delete o[e]
        }
        ))
    },
    ZEoF: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = {
            toggle: {
                label: "User information and roles"
            },
            roles: {
                switch: "Switch role",
                current: "Current role",
                select: "Select role"
            },
            services: {
                title: "TBD"
            },
            links: {
                userSettings: "User settings"
            },
            logout: "Logout",
            login: "Log in"
        }
    },
    ZcHM: function(e, t, n) {
        var r = n("nGXB")
          , o = n("DLGp")
          , i = n("Bh2j")
          , a = n("Zrst")
          , s = n("GtEJ")
          , c = n("dsym");
        r({
            target: "Object",
            stat: !0,
            sham: !o
        }, {
            getOwnPropertyDescriptors: function(e) {
                for (var t, n, r = a(e), o = s.f, u = i(r), l = {}, f = 0; u.length > f; )
                    void 0 !== (n = o(r, t = u[f++])) && c(l, t, n);
                return l
            }
        })
    },
    a8se: function(e, t, n) {
        n("/vb6")("iterator")
    },
    aLSp: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.sendAnalyticsUserAction = t.AnalyticsUserActionType = void 0;
        var o, i = r(n("KEM+")), a = n("YCZe");
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        t.AnalyticsUserActionType = o,
        function(e) {
            e.ELEMENT_CLICKED = "elementClicked",
            e.ROLE_SWITCHER_INIT = "roleSwitcherInit",
            e.SWITCH_ROLE = "roleSwitch",
            e.LOGOUT = "logoutUser",
            e.LINK_CLICKED = "linkClicked"
        }(o || (t.AnalyticsUserActionType = o = {}));
        t.sendAnalyticsUserAction = function(e) {
            var t, n = null === (t = (0,
            a.getWindow)()) || void 0 === t ? void 0 : t.dataLayer;
            n && (null == n || n.push(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        (0,
                        i.default)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                event: "userAction"
            }, e)))
        }
    },
    b3Wf: function(e, t, n) {
        n("/vb6")("replace")
    },
    b6UH: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Privilege", {
            enumerable: !0,
            get: function() {
                return o.Privilege
            }
        }),
        Object.defineProperty(t, "isConsumerRole", {
            enumerable: !0,
            get: function() {
                return o.isConsumerRole
            }
        }),
        Object.defineProperty(t, "isCorporateRole", {
            enumerable: !0,
            get: function() {
                return o.isCorporateRole
            }
        }),
        Object.defineProperty(t, "isAnonymousRole", {
            enumerable: !0,
            get: function() {
                return o.isAnonymousRole
            }
        }),
        Object.defineProperty(t, "logout", {
            enumerable: !0,
            get: function() {
                return o.logout
            }
        }),
        Object.defineProperty(t, "login", {
            enumerable: !0,
            get: function() {
                return o.login
            }
        }),
        Object.defineProperty(t, "refresh", {
            enumerable: !0,
            get: function() {
                return o.refresh
            }
        }),
        Object.defineProperty(t, "resolveSelectedRole", {
            enumerable: !0,
            get: function() {
                return o.resolveSelectedRole
            }
        }),
        Object.defineProperty(t, "findSelectedRole", {
            enumerable: !0,
            get: function() {
                return o.findSelectedRole
            }
        }),
        Object.defineProperty(t, "getAnonymousToken", {
            enumerable: !0,
            get: function() {
                return o.getAnonymousToken
            }
        }),
        Object.defineProperty(t, "decodeTokens", {
            enumerable: !0,
            get: function() {
                return i.decodeTokens
            }
        }),
        Object.defineProperty(t, "getSessionLifeTime", {
            enumerable: !0,
            get: function() {
                return i.getSessionLifeTime
            }
        }),
        Object.defineProperty(t, "useAuthentication", {
            enumerable: !0,
            get: function() {
                return a.useAuthentication
            }
        }),
        Object.defineProperty(t, "useAnonymousAuthentication", {
            enumerable: !0,
            get: function() {
                return s.useAnonymousAuthentication
            }
        }),
        t.default = void 0,
        n("/sgr"),
        n("Rzqm"),
        n("qfyY"),
        n("xgHz"),
        n("fLgj"),
        n("a8se"),
        n("0yn4"),
        n("b3Wf"),
        n("Pf+4"),
        n("szVb"),
        n("pSHd"),
        n("FB7m"),
        n("zQvS"),
        n("th6P"),
        n("ATnA"),
        n("3Tam"),
        n("XnwG"),
        n("HiP7"),
        n("Hfs8"),
        n("GKyO"),
        n("Jree"),
        n("bKol"),
        n("O2mx"),
        n("V3Ro"),
        n("LWcO"),
        n("ZcHM"),
        n("8pHb"),
        n("/MQ/"),
        n("zmrT"),
        n("8HtR"),
        n("uv78"),
        n("OcWw"),
        n("CFFa"),
        n("Us4k"),
        n("+7FK"),
        n("/zUi"),
        n("xDkV"),
        n("/Bu2");
        var r = n("r91r")
          , o = n("kO/L")
          , i = n("nHJM")
          , a = n("+z6/")
          , s = n("evI2")
          , c = r.MainView;
        t.default = c
    },
    cchr: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useStableCallback = function(e) {
            var t = (0,
            r.useRef)(e);
            return (0,
            r.useLayoutEffect)((function() {
                t.current = e
            }
            )),
            t
        }
        ;
        var r = n("qwB3")
    },
    d5gM: function(e, t, n) {
        "use strict";
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    o(e, t, n[t])
                }
                ))
            }
            return e
        }
        function a(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        n.r(t);
        var s = n("MMYH")
          , c = n("pWxA");
        function u(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? Object(c.a)(e) : t
        }
        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function f(e, t) {
            return (f = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function d(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && f(e, t)
        }
        var p = {
            type: "logger",
            log: function(e) {
                this.output("log", e)
            },
            warn: function(e) {
                this.output("warn", e)
            },
            error: function(e) {
                this.output("error", e)
            },
            output: function(e, t) {
                console && console[e] && console[e].apply(console, t)
            }
        }
          , g = new (function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                a(this, e),
                this.init(t, n)
            }
            return Object(s.a)(e, [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = t.prefix || "i18next:",
                    this.logger = e || p,
                    this.options = t,
                    this.debug = t.debug
                }
            }, {
                key: "setDebug",
                value: function(e) {
                    this.debug = e
                }
            }, {
                key: "log",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "log", "", !0)
                }
            }, {
                key: "warn",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "", !0)
                }
            }, {
                key: "error",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "error", "")
                }
            }, {
                key: "deprecate",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
            }, {
                key: "forward",
                value: function(e, t, n, r) {
                    return r && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
                    this.logger[t](e))
                }
            }, {
                key: "create",
                value: function(t) {
                    return new e(this.logger,i({}, {
                        prefix: "".concat(this.prefix, ":").concat(t, ":")
                    }, this.options))
                }
            }]),
            e
        }())
          , h = function() {
            function e() {
                a(this, e),
                this.observers = {}
            }
            return Object(s.a)(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this;
                    return e.split(" ").forEach((function(e) {
                        n.observers[e] = n.observers[e] || [],
                        n.observers[e].push(t)
                    }
                    )),
                    this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
                        return e !== t
                    }
                    )) : delete this.observers[e])
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    if (this.observers[e]) {
                        var o = [].concat(this.observers[e]);
                        o.forEach((function(e) {
                            e.apply(void 0, n)
                        }
                        ))
                    }
                    if (this.observers["*"]) {
                        var i = [].concat(this.observers["*"]);
                        i.forEach((function(t) {
                            t.apply(t, [e].concat(n))
                        }
                        ))
                    }
                }
            }]),
            e
        }();
        function v() {
            var e, t, n = new Promise((function(n, r) {
                e = n,
                t = r
            }
            ));
            return n.resolve = e,
            n.reject = t,
            n
        }
        function m(e) {
            return null == e ? "" : "" + e
        }
        function y(e, t, n) {
            e.forEach((function(e) {
                t[e] && (n[e] = t[e])
            }
            ))
        }
        function b(e, t, n) {
            function r(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            }
            function o() {
                return !e || "string" == typeof e
            }
            for (var i = "string" != typeof t ? [].concat(t) : t.split("."); i.length > 1; ) {
                if (o())
                    return {};
                var a = r(i.shift());
                !e[a] && n && (e[a] = new n),
                e = e[a]
            }
            return o() ? {} : {
                obj: e,
                k: r(i.shift())
            }
        }
        function O(e, t, n) {
            var r = b(e, t, Object);
            r.obj[r.k] = n
        }
        function E(e, t) {
            var n = b(e, t)
              , r = n.obj
              , o = n.k;
            if (r)
                return r[o]
        }
        function k(e, t, n) {
            var r = E(e, n);
            return void 0 !== r ? r : E(t, n)
        }
        function w(e, t, n) {
            for (var r in t)
                "__proto__" !== r && (r in e ? "string" == typeof e[r] || e[r]instanceof String || "string" == typeof t[r] || t[r]instanceof String ? n && (e[r] = t[r]) : w(e[r], t[r], n) : e[r] = t[r]);
            return e
        }
        function S(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
        var x = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        function j(e) {
            return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                return x[e]
            }
            )) : e
        }
        var T = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1
          , C = function(e) {
            function t(e) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                return a(this, t),
                n = u(this, l(t).call(this)),
                T && h.call(Object(c.a)(n)),
                n.data = e || {},
                n.options = r,
                void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
                n
            }
            return d(t, e),
            Object(s.a)(t, [{
                key: "addNamespaces",
                value: function(e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }
            }, {
                key: "removeNamespaces",
                value: function(e) {
                    var t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                      , o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator
                      , i = [e, t];
                    return n && "string" != typeof n && (i = i.concat(n)),
                    n && "string" == typeof n && (i = i.concat(o ? n.split(o) : n)),
                    e.indexOf(".") > -1 && (i = e.split(".")),
                    E(this.data, i)
                }
            }, {
                key: "addResource",
                value: function(e, t, n, r) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        silent: !1
                    }
                      , i = this.options.keySeparator;
                    void 0 === i && (i = ".");
                    var a = [e, t];
                    n && (a = a.concat(i ? n.split(i) : n)),
                    e.indexOf(".") > -1 && (r = t,
                    t = (a = e.split("."))[1]),
                    this.addNamespaces(t),
                    O(this.data, a, r),
                    o.silent || this.emit("added", e, t, n, r)
                }
            }, {
                key: "addResources",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (var o in n)
                        "string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], {
                            silent: !0
                        });
                    r.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "addResourceBundle",
                value: function(e, t, n, r, o) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                        silent: !1
                    }
                      , s = [e, t];
                    e.indexOf(".") > -1 && (r = n,
                    n = t,
                    t = (s = e.split("."))[1]),
                    this.addNamespaces(t);
                    var c = E(this.data, s) || {};
                    r ? w(c, n, o) : c = i({}, c, n),
                    O(this.data, s, c),
                    a.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "removeResourceBundle",
                value: function(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t)
                }
            }, {
                key: "hasResourceBundle",
                value: function(e, t) {
                    return void 0 !== this.getResource(e, t)
                }
            }, {
                key: "getResourceBundle",
                value: function(e, t) {
                    return t || (t = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI ? i({}, {}, this.getResource(e, t)) : this.getResource(e, t)
                }
            }, {
                key: "getDataByLanguage",
                value: function(e) {
                    return this.data[e]
                }
            }, {
                key: "toJSON",
                value: function() {
                    return this.data
                }
            }]),
            t
        }(h)
          , _ = {
            processors: {},
            addPostProcessor: function(e) {
                this.processors[e.name] = e
            },
            handle: function(e, t, n, r, o) {
                var i = this;
                return e.forEach((function(e) {
                    i.processors[e] && (t = i.processors[e].process(t, n, r, o))
                }
                )),
                t
            }
        }
          , P = {}
          , L = function(e) {
            function t(e) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return a(this, t),
                n = u(this, l(t).call(this)),
                T && h.call(Object(c.a)(n)),
                y(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, Object(c.a)(n)),
                n.options = r,
                void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
                n.logger = g.create("translator"),
                n
            }
            return d(t, e),
            Object(s.a)(t, [{
                key: "changeLanguage",
                value: function(e) {
                    e && (this.language = e)
                }
            }, {
                key: "exists",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    }
                      , n = this.resolve(e, t);
                    return n && void 0 !== n.res
                }
            }, {
                key: "extractFromKey",
                value: function(e, t) {
                    var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , o = t.ns || this.options.defaultNS;
                    if (n && e.indexOf(n) > -1) {
                        var i = e.match(this.interpolator.nestingRegexp);
                        if (i && i.length > 0)
                            return {
                                key: e,
                                namespaces: o
                            };
                        var a = e.split(n);
                        (n !== r || n === r && this.options.ns.indexOf(a[0]) > -1) && (o = a.shift()),
                        e = a.join(r)
                    }
                    return "string" == typeof o && (o = [o]),
                    {
                        key: e,
                        namespaces: o
                    }
                }
            }, {
                key: "translate",
                value: function(e, t, n) {
                    var o = this;
                    if ("object" !== r(t) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)),
                    t || (t = {}),
                    null == e)
                        return "";
                    Array.isArray(e) || (e = [String(e)]);
                    var a = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , s = this.extractFromKey(e[e.length - 1], t)
                      , c = s.key
                      , u = s.namespaces
                      , l = u[u.length - 1]
                      , f = t.lng || this.language
                      , d = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (f && "cimode" === f.toLowerCase()) {
                        if (d) {
                            var p = t.nsSeparator || this.options.nsSeparator;
                            return l + p + c
                        }
                        return c
                    }
                    var g = this.resolve(e, t)
                      , h = g && g.res
                      , v = g && g.usedKey || c
                      , m = g && g.exactUsedKey || c
                      , y = Object.prototype.toString.apply(h)
                      , b = ["[object Number]", "[object Function]", "[object RegExp]"]
                      , O = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays
                      , E = !this.i18nFormat || this.i18nFormat.handleAsObject
                      , k = "string" != typeof h && "boolean" != typeof h && "number" != typeof h;
                    if (E && h && k && b.indexOf(y) < 0 && ("string" != typeof O || "[object Array]" !== y)) {
                        if (!t.returnObjects && !this.options.returnObjects)
                            return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                            this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, h, t) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
                        if (a) {
                            var w = "[object Array]" === y
                              , S = w ? [] : {}
                              , x = w ? m : v;
                            for (var j in h)
                                if (Object.prototype.hasOwnProperty.call(h, j)) {
                                    var T = "".concat(x).concat(a).concat(j);
                                    S[j] = this.translate(T, i({}, t, {
                                        joinArrays: !1,
                                        ns: u
                                    })),
                                    S[j] === T && (S[j] = h[j])
                                }
                            h = S
                        }
                    } else if (E && "string" == typeof O && "[object Array]" === y)
                        (h = h.join(O)) && (h = this.extendTranslation(h, e, t, n));
                    else {
                        var C = !1
                          , _ = !1;
                        if (!this.isValidLookup(h) && void 0 !== t.defaultValue) {
                            if (C = !0,
                            void 0 !== t.count) {
                                var P = this.pluralResolver.getSuffix(f, t.count);
                                h = t["defaultValue".concat(P)]
                            }
                            h || (h = t.defaultValue)
                        }
                        this.isValidLookup(h) || (_ = !0,
                        h = c);
                        var L = t.defaultValue && t.defaultValue !== h && this.options.updateMissing;
                        if (_ || C || L) {
                            if (this.logger.log(L ? "updateKey" : "missingKey", f, l, c, L ? t.defaultValue : h),
                            a) {
                                var R = this.resolve(c, i({}, t, {
                                    keySeparator: !1
                                }));
                                R && R.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            var I = []
                              , A = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && A && A[0])
                                for (var N = 0; N < A.length; N++)
                                    I.push(A[N]);
                            else
                                "all" === this.options.saveMissingTo ? I = this.languageUtils.toResolveHierarchy(t.lng || this.language) : I.push(t.lng || this.language);
                            var M = function(e, n) {
                                o.options.missingKeyHandler ? o.options.missingKeyHandler(e, l, n, L ? t.defaultValue : h, L, t) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(e, l, n, L ? t.defaultValue : h, L, t),
                                o.emit("missingKey", e, l, n, h)
                            };
                            if (this.options.saveMissing) {
                                var F = void 0 !== t.count && "string" != typeof t.count;
                                this.options.saveMissingPlurals && F ? I.forEach((function(e) {
                                    o.pluralResolver.getPluralFormsOfKey(e, c).forEach((function(t) {
                                        return M([e], t)
                                    }
                                    ))
                                }
                                )) : M(I, c)
                            }
                        }
                        h = this.extendTranslation(h, e, t, g, n),
                        _ && h === c && this.options.appendNamespaceToMissingKey && (h = "".concat(l, ":").concat(c)),
                        _ && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(h))
                    }
                    return h
                }
            }, {
                key: "extendTranslation",
                value: function(e, t, n, r, o) {
                    var a = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                        e = this.i18nFormat.parse(e, n, r.usedLng, r.usedNS, r.usedKey, {
                            resolved: r
                        });
                    else if (!n.skipInterpolation) {
                        n.interpolation && this.interpolator.init(i({}, n, {
                            interpolation: i({}, this.options.interpolation, n.interpolation)
                        }));
                        var s, c = n.interpolation && n.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                        if (c) {
                            var u = e.match(this.interpolator.nestingRegexp);
                            s = u && u.length
                        }
                        var l = n.replace && "string" != typeof n.replace ? n.replace : n;
                        if (this.options.interpolation.defaultVariables && (l = i({}, this.options.interpolation.defaultVariables, l)),
                        e = this.interpolator.interpolate(e, l, n.lng || this.language, n),
                        c) {
                            var f = e.match(this.interpolator.nestingRegexp);
                            s < (f && f.length) && (n.nest = !1)
                        }
                        !1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                                n[r] = arguments[r];
                            return o && o[0] === n[0] ? (a.logger.warn("It seems you are nesting recursively key: ".concat(n[0], " in key: ").concat(t[0])),
                            null) : a.translate.apply(a, n.concat([t]))
                        }
                        ), n)),
                        n.interpolation && this.interpolator.reset()
                    }
                    var d = n.postProcess || this.options.postProcess
                      , p = "string" == typeof d ? [d] : d;
                    return null != e && p && p.length && !1 !== n.applyPostProcessor && (e = _.handle(p, e, t, this.options && this.options.postProcessPassResolved ? i({
                        i18nResolved: r
                    }, n) : n, this)),
                    e
                }
            }, {
                key: "resolve",
                value: function(e) {
                    var t, n, r, o, i, a = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" == typeof e && (e = [e]),
                    e.forEach((function(e) {
                        if (!a.isValidLookup(t)) {
                            var c = a.extractFromKey(e, s)
                              , u = c.key;
                            n = u;
                            var l = c.namespaces;
                            a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
                            var f = void 0 !== s.count && "string" != typeof s.count
                              , d = void 0 !== s.context && "string" == typeof s.context && "" !== s.context
                              , p = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                            l.forEach((function(e) {
                                a.isValidLookup(t) || (i = e,
                                !P["".concat(p[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(i) && (P["".concat(p[0], "-").concat(e)] = !0,
                                a.logger.warn('key "'.concat(n, '" for languages "').concat(p.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                                p.forEach((function(n) {
                                    if (!a.isValidLookup(t)) {
                                        o = n;
                                        var i, c, l = u, p = [l];
                                        if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                            a.i18nFormat.addLookupKeys(p, u, n, e, s);
                                        else
                                            f && (i = a.pluralResolver.getSuffix(n, s.count)),
                                            f && d && p.push(l + i),
                                            d && p.push(l += "".concat(a.options.contextSeparator).concat(s.context)),
                                            f && p.push(l += i);
                                        for (; c = p.pop(); )
                                            a.isValidLookup(t) || (r = c,
                                            t = a.getResource(n, e, c, s))
                                    }
                                }
                                )))
                            }
                            ))
                        }
                    }
                    )),
                    {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: o,
                        usedNS: i
                    }
                }
            }, {
                key: "isValidLookup",
                value: function(e) {
                    return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
                }
            }]),
            t
        }(h);
        function R(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        var I = function() {
            function e(t) {
                a(this, e),
                this.options = t,
                this.whitelist = this.options.supportedLngs || !1,
                this.supportedLngs = this.options.supportedLngs || !1,
                this.logger = g.create("languageUtils")
            }
            return Object(s.a)(e, [{
                key: "getScriptPartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0)
                        return null;
                    var t = e.split("-");
                    return 2 === t.length ? null : (t.pop(),
                    "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                }
            }, {
                key: "getLanguagePartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0)
                        return e;
                    var t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }
            }, {
                key: "formatLanguageCode",
                value: function(e) {
                    if ("string" == typeof e && e.indexOf("-") > -1) {
                        var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                          , n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map((function(e) {
                            return e.toLowerCase()
                        }
                        )) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                        n[1] = n[1].toUpperCase(),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = R(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                        2 === n[1].length && (n[1] = n[1].toUpperCase()),
                        "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = R(n[1].toLowerCase())),
                        t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = R(n[2].toLowerCase()))),
                        n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
            }, {
                key: "isWhitelisted",
                value: function(e) {
                    return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'),
                    this.isSupportedCode(e)
                }
            }, {
                key: "isSupportedCode",
                value: function(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
            }, {
                key: "getBestMatchFromCodes",
                value: function(e) {
                    var t, n = this;
                    return e ? (e.forEach((function(e) {
                        if (!t) {
                            var r = n.formatLanguageCode(e);
                            n.options.supportedLngs && !n.isSupportedCode(r) || (t = r)
                        }
                    }
                    )),
                    !t && this.options.supportedLngs && e.forEach((function(e) {
                        if (!t) {
                            var r = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(r))
                                return t = r;
                            t = n.options.supportedLngs.find((function(e) {
                                if (0 === e.indexOf(r))
                                    return e
                            }
                            ))
                        }
                    }
                    )),
                    t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                    t) : null
                }
            }, {
                key: "getFallbackCodes",
                value: function(e, t) {
                    if (!e)
                        return [];
                    if ("string" == typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                        return e;
                    if (!t)
                        return e.default || [];
                    var n = e[t];
                    return n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                }
            }, {
                key: "toResolveHierarchy",
                value: function(e, t) {
                    var n = this
                      , r = this.getFallbackCodes(t || this.options.fallbackLng || [], e)
                      , o = []
                      , i = function(e) {
                        e && (n.isSupportedCode(e) ? o.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                    };
                    return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)),
                    "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)),
                    "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" == typeof e && i(this.formatLanguageCode(e)),
                    r.forEach((function(e) {
                        o.indexOf(e) < 0 && i(n.formatLanguageCode(e))
                    }
                    )),
                    o
                }
            }]),
            e
        }()
          , A = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4
        }, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {
            lngs: ["cs", "sk"],
            nr: [1, 2, 5],
            fc: 6
        }, {
            lngs: ["csb", "pl"],
            nr: [1, 2, 5],
            fc: 7
        }, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {
            lngs: ["fr"],
            nr: [1, 2],
            fc: 9
        }, {
            lngs: ["ga"],
            nr: [1, 2, 3, 7, 11],
            fc: 10
        }, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {
            lngs: ["is"],
            nr: [1, 2],
            fc: 12
        }, {
            lngs: ["jv"],
            nr: [0, 1],
            fc: 13
        }, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {
            lngs: ["lt"],
            nr: [1, 2, 10],
            fc: 15
        }, {
            lngs: ["lv"],
            nr: [1, 2, 0],
            fc: 16
        }, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {
            lngs: ["mnk"],
            nr: [0, 1, 2],
            fc: 18
        }, {
            lngs: ["mt"],
            nr: [1, 2, 11, 20],
            fc: 19
        }, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {
            lngs: ["ro"],
            nr: [1, 2, 20],
            fc: 20
        }, {
            lngs: ["sl"],
            nr: [5, 1, 2, 3],
            fc: 21
        }, {
            lngs: ["he", "iw"],
            nr: [1, 2, 20, 21],
            fc: 22
        }]
          , N = {
            1: function(e) {
                return Number(e > 1)
            },
            2: function(e) {
                return Number(1 != e)
            },
            3: function(e) {
                return 0
            },
            4: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            5: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
            },
            6: function(e) {
                return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
            },
            7: function(e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            8: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
            },
            9: function(e) {
                return Number(e >= 2)
            },
            10: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
            },
            11: function(e) {
                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
            },
            12: function(e) {
                return Number(e % 10 != 1 || e % 100 == 11)
            },
            13: function(e) {
                return Number(0 !== e)
            },
            14: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
            },
            15: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            16: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
            },
            17: function(e) {
                return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
            },
            18: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2)
            },
            19: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
            },
            20: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
            },
            21: function(e) {
                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
            },
            22: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
            }
        };
        function M() {
            var e = {};
            return A.forEach((function(t) {
                t.lngs.forEach((function(n) {
                    e[n] = {
                        numbers: t.nr,
                        plurals: N[t.fc]
                    }
                }
                ))
            }
            )),
            e
        }
        var F = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                a(this, e),
                this.languageUtils = t,
                this.options = n,
                this.logger = g.create("pluralResolver"),
                this.rules = M()
            }
            return Object(s.a)(e, [{
                key: "addRule",
                value: function(e, t) {
                    this.rules[e] = t
                }
            }, {
                key: "getRule",
                value: function(e) {
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
            }, {
                key: "needsPlural",
                value: function(e) {
                    var t = this.getRule(e);
                    return t && t.numbers.length > 1
                }
            }, {
                key: "getPluralFormsOfKey",
                value: function(e, t) {
                    var n = this
                      , r = []
                      , o = this.getRule(e);
                    return o ? (o.numbers.forEach((function(o) {
                        var i = n.getSuffix(e, o);
                        r.push("".concat(t).concat(i))
                    }
                    )),
                    r) : r
                }
            }, {
                key: "getSuffix",
                value: function(e, t) {
                    var n = this
                      , r = this.getRule(e);
                    if (r) {
                        var o = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t))
                          , i = r.numbers[o];
                        this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = ""));
                        var a = function() {
                            return n.options.prepend && i.toString() ? n.options.prepend + i.toString() : i.toString()
                        };
                        return "v1" === this.options.compatibilityJSON ? 1 === i ? "" : "number" == typeof i ? "_plural_".concat(i.toString()) : a() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] ? a() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
                    }
                    return this.logger.warn("no plural rule found for: ".concat(e)),
                    ""
                }
            }]),
            e
        }()
          , D = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a(this, e),
                this.logger = g.create("interpolator"),
                this.options = t,
                this.format = t.interpolation && t.interpolation.format || function(e) {
                    return e
                }
                ,
                this.init(t)
            }
            return Object(s.a)(e, [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    var t = e.interpolation;
                    this.escape = void 0 !== t.escape ? t.escape : j,
                    this.escapeValue = void 0 === t.escapeValue || t.escapeValue,
                    this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape,
                    this.prefix = t.prefix ? S(t.prefix) : t.prefixEscaped || "{{",
                    this.suffix = t.suffix ? S(t.suffix) : t.suffixEscaped || "}}",
                    this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",",
                    this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-",
                    this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "",
                    this.nestingPrefix = t.nestingPrefix ? S(t.nestingPrefix) : t.nestingPrefixEscaped || S("$t("),
                    this.nestingSuffix = t.nestingSuffix ? S(t.nestingSuffix) : t.nestingSuffixEscaped || S(")"),
                    this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",",
                    this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3,
                    this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat,
                    this.resetRegExp()
                }
            }, {
                key: "reset",
                value: function() {
                    this.options && this.init(this.options)
                }
            }, {
                key: "resetRegExp",
                value: function() {
                    var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                    this.regexp = new RegExp(e,"g");
                    var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                    this.regexpUnescape = new RegExp(t,"g");
                    var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                    this.nestingRegexp = new RegExp(n,"g")
                }
            }, {
                key: "interpolate",
                value: function(e, t, n, r) {
                    var o, i, a, s = this, c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
                    function u(e) {
                        return e.replace(/\$/g, "$$$$")
                    }
                    var l = function(e) {
                        if (e.indexOf(s.formatSeparator) < 0) {
                            var o = k(t, c, e);
                            return s.alwaysFormat ? s.format(o, void 0, n) : o
                        }
                        var i = e.split(s.formatSeparator)
                          , a = i.shift().trim()
                          , u = i.join(s.formatSeparator).trim();
                        return s.format(k(t, c, a), u, n, r)
                    };
                    this.resetRegExp();
                    var f = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler
                      , d = r && r.interpolation && r.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: function(e) {
                            return u(e)
                        }
                    }, {
                        regex: this.regexp,
                        safeValue: function(e) {
                            return s.escapeValue ? u(s.escape(e)) : u(e)
                        }
                    }].forEach((function(t) {
                        for (a = 0; o = t.regex.exec(e); ) {
                            if (void 0 === (i = l(o[1].trim())))
                                if ("function" == typeof f) {
                                    var n = f(e, o, r);
                                    i = "string" == typeof n ? n : ""
                                } else {
                                    if (d) {
                                        i = o[0];
                                        continue
                                    }
                                    s.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)),
                                    i = ""
                                }
                            else
                                "string" == typeof i || s.useRawValueToEscape || (i = m(i));
                            if (e = e.replace(o[0], t.safeValue(i)),
                            t.regex.lastIndex = 0,
                            ++a >= s.maxReplaces)
                                break
                        }
                    }
                    )),
                    e
                }
            }, {
                key: "nest",
                value: function(e, t) {
                    var n, r, o = this, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = i({}, a);
                    function c(e, t) {
                        var n = this.nestingOptionsSeparator;
                        if (e.indexOf(n) < 0)
                            return e;
                        var r = e.split(new RegExp("".concat(n, "[ ]*{")))
                          , o = "{".concat(r[1]);
                        e = r[0],
                        o = (o = this.interpolate(o, s)).replace(/'/g, '"');
                        try {
                            s = JSON.parse(o),
                            t && (s = i({}, t, s))
                        } catch (a) {
                            return this.logger.warn("failed parsing options string in nesting for key ".concat(e), a),
                            "".concat(e).concat(n).concat(o)
                        }
                        return delete s.defaultValue,
                        e
                    }
                    for (s.applyPostProcessor = !1,
                    delete s.defaultValue; n = this.nestingRegexp.exec(e); ) {
                        var u = []
                          , l = !1;
                        if (n[0].includes(this.formatSeparator) && !/{.*}/.test(n[1])) {
                            var f = n[1].split(this.formatSeparator).map((function(e) {
                                return e.trim()
                            }
                            ));
                            n[1] = f.shift(),
                            u = f,
                            l = !0
                        }
                        if ((r = t(c.call(this, n[1].trim(), s), s)) && n[0] === e && "string" != typeof r)
                            return r;
                        "string" != typeof r && (r = m(r)),
                        r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)),
                        r = ""),
                        l && (r = u.reduce((function(e, t) {
                            return o.format(e, t, a.lng, a)
                        }
                        ), r.trim())),
                        e = e.replace(n[0], r),
                        this.regexp.lastIndex = 0
                    }
                    return e
                }
            }]),
            e
        }();
        var B = function(e) {
            function t(e, n, r) {
                var o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return a(this, t),
                o = u(this, l(t).call(this)),
                T && h.call(Object(c.a)(o)),
                o.backend = e,
                o.store = n,
                o.services = r,
                o.languageUtils = r.languageUtils,
                o.options = i,
                o.logger = g.create("backendConnector"),
                o.state = {},
                o.queue = [],
                o.backend && o.backend.init && o.backend.init(r, i.backend, i),
                o
            }
            return d(t, e),
            Object(s.a)(t, [{
                key: "queueLoad",
                value: function(e, t, n, r) {
                    var o = this
                      , i = []
                      , a = []
                      , s = []
                      , c = [];
                    return e.forEach((function(e) {
                        var r = !0;
                        t.forEach((function(t) {
                            var s = "".concat(e, "|").concat(t);
                            !n.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? a.indexOf(s) < 0 && a.push(s) : (o.state[s] = 1,
                            r = !1,
                            a.indexOf(s) < 0 && a.push(s),
                            i.indexOf(s) < 0 && i.push(s),
                            c.indexOf(t) < 0 && c.push(t)))
                        }
                        )),
                        r || s.push(e)
                    }
                    )),
                    (i.length || a.length) && this.queue.push({
                        pending: a,
                        loaded: {},
                        errors: [],
                        callback: r
                    }),
                    {
                        toLoad: i,
                        pending: a,
                        toLoadLanguages: s,
                        toLoadNamespaces: c
                    }
                }
            }, {
                key: "loaded",
                value: function(e, t, n) {
                    var r = e.split("|")
                      , o = r[0]
                      , i = r[1];
                    t && this.emit("failedLoading", o, i, t),
                    n && this.store.addResourceBundle(o, i, n),
                    this.state[e] = t ? -1 : 2;
                    var a = {};
                    this.queue.forEach((function(n) {
                        var r, s, c, u, l, f;
                        r = n.loaded,
                        s = i,
                        u = b(r, [o], Object),
                        l = u.obj,
                        f = u.k,
                        l[f] = l[f] || [],
                        c && (l[f] = l[f].concat(s)),
                        c || l[f].push(s),
                        function(e, t) {
                            for (var n = e.indexOf(t); -1 !== n; )
                                e.splice(n, 1),
                                n = e.indexOf(t)
                        }(n.pending, e),
                        t && n.errors.push(t),
                        0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function(e) {
                            a[e] || (a[e] = []),
                            n.loaded[e].length && n.loaded[e].forEach((function(t) {
                                a[e].indexOf(t) < 0 && a[e].push(t)
                            }
                            ))
                        }
                        )),
                        n.done = !0,
                        n.errors.length ? n.callback(n.errors) : n.callback())
                    }
                    )),
                    this.emit("loaded", a),
                    this.queue = this.queue.filter((function(e) {
                        return !e.done
                    }
                    ))
                }
            }, {
                key: "read",
                value: function(e, t, n) {
                    var r = this
                      , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350
                      , a = arguments.length > 5 ? arguments[5] : void 0;
                    return e.length ? this.backend[n](e, t, (function(s, c) {
                        s && c && o < 5 ? setTimeout((function() {
                            r.read.call(r, e, t, n, o + 1, 2 * i, a)
                        }
                        ), i) : a(s, c)
                    }
                    )) : a(null, {})
                }
            }, {
                key: "prepareLoading",
                value: function(e, t) {
                    var n = this
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , o = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend)
                        return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                        o && o();
                    "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                    "string" == typeof t && (t = [t]);
                    var i = this.queueLoad(e, t, r, o);
                    if (!i.toLoad.length)
                        return i.pending.length || o(),
                        null;
                    i.toLoad.forEach((function(e) {
                        n.loadOne(e)
                    }
                    ))
                }
            }, {
                key: "load",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {}, n)
                }
            }, {
                key: "reload",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }
            }, {
                key: "loadOne",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , r = e.split("|")
                      , o = r[0]
                      , i = r[1];
                    this.read(o, i, "read", void 0, void 0, (function(r, a) {
                        r && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r),
                        !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a),
                        t.loaded(e, r, a)
                    }
                    ))
                }
            }, {
                key: "saveMissing",
                value: function(e, t, n, r, o) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                    this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, r, null, i({}, a, {
                        isUpdate: o
                    })),
                    e && e[0] && this.store.addResource(e[0], t, n, r))
                }
            }]),
            t
        }(h);
        function G() {
            return {
                debug: !1,
                initImmediate: !0,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                whitelist: !1,
                nonExplicitWhitelist: !1,
                supportedLngs: !1,
                nonExplicitSupportedLngs: !1,
                load: "all",
                preload: !1,
                simplifyPluralSuffix: !0,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                partialBundledLanguages: !1,
                saveMissing: !1,
                updateMissing: !1,
                saveMissingTo: "fallback",
                saveMissingPlurals: !0,
                missingKeyHandler: !1,
                missingInterpolationHandler: !1,
                postProcess: !1,
                postProcessPassResolved: !1,
                returnNull: !0,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: !1,
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                appendNamespaceToCIMode: !1,
                overloadTranslationOptionHandler: function(e) {
                    var t = {};
                    if ("object" === r(e[1]) && (t = e[1]),
                    "string" == typeof e[1] && (t.defaultValue = e[1]),
                    "string" == typeof e[2] && (t.tDescription = e[2]),
                    "object" === r(e[2]) || "object" === r(e[3])) {
                        var n = e[3] || e[2];
                        Object.keys(n).forEach((function(e) {
                            t[e] = n[e]
                        }
                        ))
                    }
                    return t
                },
                interpolation: {
                    escapeValue: !0,
                    format: function(e, t, n, r) {
                        return e
                    },
                    prefix: "{{",
                    suffix: "}}",
                    formatSeparator: ",",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    nestingOptionsSeparator: ",",
                    maxReplaces: 1e3,
                    skipOnVariables: !1
                }
            }
        }
        function U(e) {
            return "string" == typeof e.ns && (e.ns = [e.ns]),
            "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
            "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
            e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])),
            e.supportedLngs = e.whitelist),
            e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist),
            e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
            e
        }
        function z() {}
        var K = new (function(e) {
            function t() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
                if (a(this, t),
                e = u(this, l(t).call(this)),
                T && h.call(Object(c.a)(e)),
                e.options = U(n),
                e.services = {},
                e.logger = g,
                e.modules = {
                    external: []
                },
                r && !e.isInitialized && !n.isClone) {
                    if (!e.options.initImmediate)
                        return e.init(n, r),
                        u(e, Object(c.a)(e));
                    setTimeout((function() {
                        e.init(n, r)
                    }
                    ), 0)
                }
                return e
            }
            return d(t, e),
            Object(s.a)(t, [{
                key: "init",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = arguments.length > 1 ? arguments[1] : void 0;
                    function r(e) {
                        return e ? "function" == typeof e ? new e : e : null
                    }
                    if ("function" == typeof t && (n = t,
                    t = {}),
                    t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'),
                    t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'),
                    this.options = i({}, G(), this.options, U(t)),
                    this.format = this.options.interpolation.format,
                    n || (n = z),
                    !this.options.isClone) {
                        this.modules.logger ? g.init(r(this.modules.logger), this.options) : g.init(null, this.options);
                        var o = new I(this.options);
                        this.store = new C(this.options.resources,this.options);
                        var a = this.services;
                        a.logger = g,
                        a.resourceStore = this.store,
                        a.languageUtils = o,
                        a.pluralResolver = new F(o,{
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }),
                        a.interpolator = new D(this.options),
                        a.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        },
                        a.backendConnector = new B(r(this.modules.backend),a.resourceStore,a,this.options),
                        a.backendConnector.on("*", (function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                r[o - 1] = arguments[o];
                            e.emit.apply(e, [t].concat(r))
                        }
                        )),
                        this.modules.languageDetector && (a.languageDetector = r(this.modules.languageDetector),
                        a.languageDetector.init(a, this.options.detection, this.options)),
                        this.modules.i18nFormat && (a.i18nFormat = r(this.modules.i18nFormat),
                        a.i18nFormat.init && a.i18nFormat.init(this)),
                        this.translator = new L(this.services,this.options),
                        this.translator.on("*", (function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                r[o - 1] = arguments[o];
                            e.emit.apply(e, [t].concat(r))
                        }
                        )),
                        this.modules.external.forEach((function(t) {
                            t.init && t.init(e)
                        }
                        ))
                    }
                    this.modules.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                    var s = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                    s.forEach((function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments)
                        }
                    }
                    ));
                    var c = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                    c.forEach((function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments),
                            e
                        }
                    }
                    ));
                    var u = v()
                      , l = function() {
                        e.changeLanguage(e.options.lng, (function(t, r) {
                            e.isInitialized = !0,
                            e.logger.log("initialized", e.options),
                            e.emit("initialized", e.options),
                            u.resolve(r),
                            n(t, r)
                        }
                        ))
                    };
                    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0),
                    u
                }
            }, {
                key: "loadResources",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z
                      , r = n
                      , o = "string" == typeof e ? e : this.language;
                    if ("function" == typeof e && (r = e),
                    !this.options.resources || this.options.partialBundledLanguages) {
                        if (o && "cimode" === o.toLowerCase())
                            return r();
                        var i = []
                          , a = function(e) {
                            e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                                i.indexOf(e) < 0 && i.push(e)
                            }
                            ))
                        };
                        if (o)
                            a(o);
                        else {
                            var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                            s.forEach((function(e) {
                                return a(e)
                            }
                            ))
                        }
                        this.options.preload && this.options.preload.forEach((function(e) {
                            return a(e)
                        }
                        )),
                        this.services.backendConnector.load(i, this.options.ns, r)
                    } else
                        r(null)
                }
            }, {
                key: "reloadResources",
                value: function(e, t, n) {
                    var r = v();
                    return e || (e = this.languages),
                    t || (t = this.options.ns),
                    n || (n = z),
                    this.services.backendConnector.reload(e, t, (function(e) {
                        r.resolve(),
                        n(e)
                    }
                    )),
                    r
                }
            }, {
                key: "use",
                value: function(e) {
                    if (!e)
                        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!e.type)
                        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === e.type && (this.modules.backend = e),
                    ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e),
                    "languageDetector" === e.type && (this.modules.languageDetector = e),
                    "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                    "postProcessor" === e.type && _.addPostProcessor(e),
                    "3rdParty" === e.type && this.modules.external.push(e),
                    this
                }
            }, {
                key: "changeLanguage",
                value: function(e, t) {
                    var n = this;
                    this.isLanguageChangingTo = e;
                    var r = v();
                    this.emit("languageChanging", e);
                    var o = function(e) {
                        var o = "string" == typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e);
                        o && (n.language || (n.language = o,
                        n.languages = n.services.languageUtils.toResolveHierarchy(o)),
                        n.translator.language || n.translator.changeLanguage(o),
                        n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(o)),
                        n.loadResources(o, (function(e) {
                            !function(e, o) {
                                o ? (n.language = o,
                                n.languages = n.services.languageUtils.toResolveHierarchy(o),
                                n.translator.changeLanguage(o),
                                n.isLanguageChangingTo = void 0,
                                n.emit("languageChanged", o),
                                n.logger.log("languageChanged", o)) : n.isLanguageChangingTo = void 0,
                                r.resolve((function() {
                                    return n.t.apply(n, arguments)
                                }
                                )),
                                t && t(e, (function() {
                                    return n.t.apply(n, arguments)
                                }
                                ))
                            }(e, o)
                        }
                        ))
                    };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()),
                    r
                }
            }, {
                key: "getFixedT",
                value: function(e, t) {
                    var n = this
                      , o = function e(t, o) {
                        var a;
                        if ("object" !== r(o)) {
                            for (var s = arguments.length, c = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++)
                                c[u - 2] = arguments[u];
                            a = n.options.overloadTranslationOptionHandler([t, o].concat(c))
                        } else
                            a = i({}, o);
                        return a.lng = a.lng || e.lng,
                        a.lngs = a.lngs || e.lngs,
                        a.ns = a.ns || e.ns,
                        n.t(t, a)
                    };
                    return "string" == typeof e ? o.lng = e : o.lngs = e,
                    o.ns = t,
                    o
                }
            }, {
                key: "t",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).translate.apply(e, arguments)
                }
            }, {
                key: "exists",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).exists.apply(e, arguments)
                }
            }, {
                key: "setDefaultNamespace",
                value: function(e) {
                    this.options.defaultNS = e
                }
            }, {
                key: "hasLoadedNamespace",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized)
                        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                        !1;
                    if (!this.languages || !this.languages.length)
                        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                        !1;
                    var r = this.languages[0]
                      , o = !!this.options && this.options.fallbackLng
                      , i = this.languages[this.languages.length - 1];
                    if ("cimode" === r.toLowerCase())
                        return !0;
                    var a = function(e, n) {
                        var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                        return -1 === r || 2 === r
                    };
                    if (n.precheck) {
                        var s = n.precheck(this, a);
                        if (void 0 !== s)
                            return s
                    }
                    return !!this.hasResourceBundle(r, e) || (!this.services.backendConnector.backend || !(!a(r, e) || o && !a(i, e)))
                }
            }, {
                key: "loadNamespaces",
                value: function(e, t) {
                    var n = this
                      , r = v();
                    return this.options.ns ? ("string" == typeof e && (e = [e]),
                    e.forEach((function(e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                    }
                    )),
                    this.loadResources((function(e) {
                        r.resolve(),
                        t && t(e)
                    }
                    )),
                    r) : (t && t(),
                    Promise.resolve())
                }
            }, {
                key: "loadLanguages",
                value: function(e, t) {
                    var n = v();
                    "string" == typeof e && (e = [e]);
                    var r = this.options.preload || []
                      , o = e.filter((function(e) {
                        return r.indexOf(e) < 0
                    }
                    ));
                    return o.length ? (this.options.preload = r.concat(o),
                    this.loadResources((function(e) {
                        n.resolve(),
                        t && t(e)
                    }
                    )),
                    n) : (t && t(),
                    Promise.resolve())
                }
            }, {
                key: "dir",
                value: function(e) {
                    if (e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language),
                    !e)
                        return "rtl";
                    return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr"
                }
            }, {
                key: "createInstance",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = arguments.length > 1 ? arguments[1] : void 0;
                    return new t(e,n)
                }
            }, {
                key: "cloneInstance",
                value: function() {
                    var e = this
                      , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z
                      , o = i({}, this.options, n, {
                        isClone: !0
                    })
                      , a = new t(o)
                      , s = ["store", "services", "language"];
                    return s.forEach((function(t) {
                        a[t] = e[t]
                    }
                    )),
                    a.services = i({}, this.services),
                    a.services.utils = {
                        hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                    },
                    a.translator = new L(a.services,a.options),
                    a.translator.on("*", (function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                            n[r - 1] = arguments[r];
                        a.emit.apply(a, [e].concat(n))
                    }
                    )),
                    a.init(o, r),
                    a.translator.options = a.options,
                    a.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                    },
                    a
                }
            }]),
            t
        }(h));
        t.default = K
    },
    d6wg: function(e, t) {
        var n, r = {
            xs: "20em",
            sm: "23.4375em",
            md: "48em",
            lg: "64em",
            xl: "80em",
            xxl: "100em"
        }, o = {
            neutralBlack: "#262C30",
            neutralNetworkGray: "#3B4A57",
            neutralIconGray: "#73808C",
            neutralPassiveGray: "#C2C9D1",
            neutralGray5: "#E6EBF1",
            neutralGray2: "#F6F7F9",
            neutralWhite: "#FFFFFF",
            neutralOnPressGray: "#EAEDF1",
            brandRed: "#7D2332",
            brandPeach: "#FFA894",
            brandPink: "#EDBDBD",
            brandBrightYellow: "#FFC226",
            brandMutedYellow: "#F7CC7A",
            brandCardboard: "#D9BFAD",
            brandPurple: "#5C2952",
            brandNavy: "#1E3264",
            brandSky: "#A6EBEC",
            brandPetrol: "#29545C",
            brandForest: "#38572B",
            signalBlue: "#0051C2",
            signalGreen: "#008A00",
            signalLightGreen: "#E0F3D7",
            signalLightYellow: "#F9F4EB",
            signalRed: "#BD2841",
            signalLightRed: "#F8E7E7",
            signalLightBlue: "#D4E2F7",
            signalHoverBlue: "#004099",
            signalHoverRed: "#F7C3C3"
        }, i = {
            xxs: .5,
            xs: 1,
            sm: 1.5,
            md: 2,
            lg: 3,
            xl: 4,
            xxl: 6
        }, a = {
            primary: "Montserrat, sans-serif",
            secondary: "Posti Sans, sans-serif"
        }, s = {
            text: {
                xl: 1.25,
                lg: 1.125,
                md: 1,
                sm: .875,
                xs: .8125
            },
            title: {
                xxxl: 3.5,
                xxl: 3,
                xl: 2.4375,
                lg: 1.96875,
                md: 1.5625,
                sm: 1.125,
                xs: 1
            }
        }, c = {
            text: {
                xl: 2,
                lg: 1.75,
                md: 1.5,
                sm: 1.125,
                xs: 1.25
            },
            title: {
                xxl: 3.5,
                xl: 2.5,
                lg: 2.25,
                md: 1.875,
                sm: 1.375,
                xs: 1.25
            }
        }, u = {
            thin: 100,
            light: 300,
            normal: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            ultraBold: 900
        }, l = {
            icon: {
                xxs: .813,
                xs: 1,
                s: 1.5,
                m: 2,
                l: 2.5,
                xl: 3,
                xxl: 4
            }
        }, f = {
            md: .25
        }, d = {
            semantic: {},
            layout: {
                header: o.neutralNetworkGray
            },
            ui: {}
        }, p = {
            breakpoint: r,
            color: o,
            spacing: i,
            fontFamily: a,
            fontSize: s,
            fontWeight: u,
            lineHeight: c,
            size: l,
            borderRadius: f,
            colors: d,
            name: "posti"
        };
        (n = t.ThemeName || (t.ThemeName = {})).POSTI = "posti",
        n.XYZ = "xyz";
        var g = p;
        t.PostiTheme = p,
        t.Theme = g,
        t.XyzTheme = {
            breakpoint: {
                xs: "20em",
                sm: "23.4375em",
                md: "48em",
                lg: "64em",
                xl: "80em",
                xxl: "100em"
            },
            spacing: {
                space0: 0,
                space1: .25,
                space2: .5,
                space3: 1,
                space4: 1.5,
                space5: 2,
                space6: 2.5,
                space7: 3,
                space8: 3.5,
                space9: 4,
                space10: 4.5,
                space11: 5,
                space12: 5.5,
                space13: 6,
                space14: 6.5,
                space15: 7,
                space16: 7.5,
                space17: 8
            },
            iconSize: {
                xxs: .813,
                xs: 1,
                s: 1.5,
                m: 2,
                l: 2.5,
                xl: 3,
                xxl: 4
            },
            color: {
                neutralBlack: "#262C30",
                neutralNetworkGray: "#3B4A57",
                neutralIconGray: "#73808C",
                neutralPassiveGray: "#C2C9D1",
                neutralGray5: "#E6EBF1",
                neutralGray2: "#F6F7F9",
                neutralWhite: "#FFFFFF",
                neutralOnPressGray: "#DDE1E9",
                neutralOnHoverGray: "#EAEDF1",
                neutralRealBlack: "#000000",
                brandRed: "#7D2332",
                brandPeach: "#FFA894",
                brandPink: "#EDBDBD",
                brandBrightYellow: "#FFC226",
                brandMutedYellow: "#F7CC7A",
                brandCardboard: "#D9BFAD",
                brandPurple: "#5C2952",
                brandNavy: "#1E3264",
                brandSky: "#A6EBEC",
                brandPetrol: "#29545C",
                brandForest: "#38572B",
                signalBlue: "#0051C2",
                signalGreen: "#008A00",
                signalLightGreen: "#E0F3D7",
                signalLightYellow: "#F9F4EB",
                signalRed: "#BD2841",
                signalLightRed: "#F8E7E7",
                signalLightBlue: "#D4E2F7",
                signalHoverBlue: "#004099",
                signalHoverRed: "#F7C3C3",
                backgroundUIGray: "#FCFCFD",
                backgroundModalGray: "rgba(38, 44, 48, 0.64)",
                backgroundCTABlue: "#E5EEFA",
                backgroundNotificationGreen: "#E1F4E5",
                backgroundWarningYellow: "#FFF5E1",
                backgroundExceptionalGray: "rgba(246, 247, 249, 0.4)",
                backgroundAlertRed: "#FFE7E7"
            },
            fontFamily: {
                Telegraf: "Telegraf",
                Montserrat: "Montserrat"
            },
            fontSize: {
                headline: {
                    one: 5,
                    two: 3,
                    three: 2.4375,
                    four: 1.96875,
                    five: 1.5625,
                    six: 1.125,
                    seven: 1,
                    eight: .875
                },
                body: {
                    one: 1.25,
                    two: 1.125,
                    three: 1,
                    four: .875,
                    five: .8125
                },
                label: {
                    one: 1.5,
                    two: 1.125,
                    three: 1,
                    four: 1,
                    five: .875,
                    six: .625
                }
            },
            fontWeight: {
                thin: 100,
                light: 300,
                normal: 400,
                medium: 500,
                semiBold: 600,
                bold: 700,
                ultraBold: 900
            },
            lineHeight: {
                headline: {
                    one: 1.17,
                    two: 1.17,
                    three: 1.08,
                    four: 1.14,
                    five: 1.28,
                    six: 1.556,
                    seven: 1.25,
                    eight: 1.2
                },
                body: {
                    one: 1.6,
                    two: 1.556,
                    three: 1.5,
                    four: 1.43,
                    five: 1.54
                },
                label: {
                    one: 1,
                    two: 1,
                    three: 1,
                    four: 1,
                    five: 1,
                    six: 1
                }
            },
            borderRadius: {
                md: 2.75
            },
            name: "xyz"
        },
        t.borderRadius = f,
        t.breakpoint = r,
        t.color = o,
        t.colors = d,
        t.fontFamily = a,
        t.fontSize = s,
        t.fontWeight = u,
        t.lineHeight = c,
        t.size = l,
        t.spacing = i
    },
    evI2: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useAnonymousAuthentication = void 0;
        var o = r(n("ddV6"))
          , i = n("qwB3")
          , a = n("YCZe")
          , s = n("I38j")
          , c = n("z9Jo")
          , u = n("MK0x")
          , l = n("cchr")
          , f = n("nHJM");
        t.useAnonymousAuthentication = function(e) {
            var t = e.env
              , n = e.onUpdate
              , r = e.startFetching
              , d = (0,
            u.usePersistedState)(c.StorageKey.ANONYMOUS_TOKENS, void 0, c.sessionStorageService)
              , p = (0,
            o.default)(d, 2)
              , g = p[0]
              , h = p[1]
              , v = (0,
            l.useStableCallback)(n)
              , m = (0,
            s.useAsync)({
                onSuccess: function(e) {
                    h(e)
                },
                onError: function(e) {
                    (0,
                    a.handleCriticalError)(e)
                }
            })
              , y = m.execute
              , b = m.error
              , O = m.isIdle
              , E = m.isLoading;
            return (0,
            i.useEffect)((function() {
                O && !g && r && ((0,
                a.logInfo)("[Role Switcher]: Fetching anonymous user tokens"),
                y((0,
                f.getAnonymousToken)(t)))
            }
            ), [t, O, g, r, y]),
            (0,
            i.useEffect)((function() {
                g && v.current && v.current(g)
            }
            ), [v, g]),
            (0,
            i.useMemo)((function() {
                return {
                    anonymousTokens: g,
                    setAnonymousTokens: h,
                    error: b,
                    isLoading: E
                }
            }
            ), [b, E, g, h])
        }
    },
    fLgj: function(e, t, n) {
        n("/vb6")("isConcatSpreadable")
    },
    fZzs: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Logo = void 0;
        var o = r(n("97Jx"))
          , i = r(n("m3Bd"))
          , a = r(n("qwB3"))
          , s = n("T4vw")
          , c = n("l+CB")
          , u = n("j/s1")
          , l = n("liE7");
        t.Logo = function(e) {
            var t = e.text
              , n = e.isCorporateRole
              , r = void 0 !== n && n
              , f = e.isMainToggle
              , d = void 0 !== f && f
              , p = (0,
            i.default)(e, ["text", "isCorporateRole", "isMainToggle"])
              , g = (0,
            u.useTheme)()
              , h = (0,
            l.useTranslation)().t
              , v = r ? c.Square : c.Circle
              , m = r ? {
                color: g.xyz.color.brandPurple
            } : {
                color: g.xyz.color.brandNavy
            }
              , y = d ? h("toggle.label") : void 0;
            return a.default.createElement(s.Wrapper, (0,
            o.default)({
                mainToggle: d,
                "aria-label": y
            }, p), a.default.createElement(v, (0,
            o.default)({
                size: "2.5rem"
            }, m, {
                "aria-hidden": "true"
            }), a.default.createElement(s.StyledLabel, {
                as: "span",
                color: g.xyz.color.brandPink,
                size: c.LabelSize.Five
            }, t)))
        }
    },
    fk7E: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Links = void 0;
        var o = r(n("97Jx"))
          , i = r(n("m3Bd"))
          , a = r(n("KEM+"))
          , s = r(n("qwB3"))
          , c = n("l+CB")
          , u = n("jp49")
          , l = n("DrGY")
          , f = n("BOhL");
        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var p = {
            width: "1.5em",
            height: "1.5em",
            style: {
                marginRight: "1rem"
            },
            color: n("d6wg").XyzTheme.color.neutralBlack,
            "aria-hidden": !0
        }
          , g = function(e) {
            (0,
            f.sendAnalyticsUserAction)(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        (0,
                        a.default)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                actionType: f.AnalyticsUserActionType.LINK_CLICKED
            }, e))
        }
          , h = [{
            text: "links.userSettings",
            getHref: function(e) {
                return (0,
                f.isDev)() ? "https://myaccount-ext.dev.oneaccount.postinext.fi?lang=".concat(e) : (0,
                f.isTst)() ? "https://asiakastiedot.testi.posti.fi/myaccount/details?lang=".concat(e) : "https://asiakastiedot.posti.fi/myaccount/details?lang=".concat(e)
            },
            target: "_blank",
            icon: s.default.createElement(c.UserSettingsIcon, p),
            analytics: {
                clickedLink: "https://asiakastiedot.posti.fi/myaccount/details",
                linkLabel: "User Settings"
            }
        }];
        t.Links = function(e) {
            var t = e.role
              , n = e.locale;
            return s.default.createElement(u.ListWrapper, null, h.filter((function(e) {
                var n = e.onlyFor;
                return !n || n === t.type
            }
            )).map((function(e, t) {
                var r = e.getHref
                  , a = e.analytics
                  , c = (0,
                i.default)(e, ["getHref", "analytics"]);
                return s.default.createElement(l.Link, (0,
                o.default)({
                    key: t,
                    href: r(n),
                    onClick: g.bind(null, a),
                    onKeyPress: (0,
                    f.onEnterKeyPress)(g.bind(null, a))
                }, c, {
                    tabIndex: 0
                }))
            }
            )))
        }
    },
    i3tk: function(e, t, n) {
        "use strict";
        var r = n("yWCo");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SubTitle = t.Title = t.TitleContainer = t.Wrapper = void 0;
        var o = r(n("j/s1"))
          , i = n("l+CB")
          , a = o.default.div.withConfig({
            componentId: "wyqx7t-0"
        })((function(e) {
            var t = e.theme;
            return (0,
            o.css)(["display:flex;flex-direction:row;padding:0 0.75rem;border-radius:1.5rem;cursor:pointer;&:active,&:focus{background-color:", ";}@media (hover:hover){&:hover{background-color:", ";}}"], t.xyz.color.neutralGray2, t.xyz.color.neutralGray2)
        }
        ));
        t.Wrapper = a;
        var s = o.default.div.withConfig({
            componentId: "wyqx7t-1"
        })((function(e) {
            var t = e.theme;
            return (0,
            o.css)(["display:flex;flex-direction:column;padding:", "rem;"], t.xyz.spacing.space3)
        }
        ));
        t.TitleContainer = s;
        var c = (0,
        o.default)(i.Body).withConfig({
            componentId: "wyqx7t-2"
        })((function(e) {
            e.theme;
            var t = e.fontWeight;
            return (0,
            o.css)(["font-weight:", ";margin:0;"], t)
        }
        ));
        t.Title = c;
        var u = (0,
        o.default)(i.Body).withConfig({
            componentId: "wyqx7t-3"
        })((function(e) {
            e.theme;
            var t = e.fontWeight;
            return (0,
            o.css)(["font-weight:", ";margin:0;"], t)
        }
        ));
        t.SubTitle = u
    },
    iEui: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Role = void 0;
        var o = r(n("97Jx"))
          , i = r(n("m3Bd"))
          , a = r(n("qwB3"))
          , s = n("kO/L")
          , c = n("i3tk")
          , u = n("8zFE")
          , l = n("BOhL")
          , f = n("liE7")
          , d = n("l+CB")
          , p = n("j/s1");
        t.Role = function(e) {
            var t = e.data
              , n = e.isCurrentRole
              , r = (0,
            i.default)(e, ["data", "isCurrentRole"])
              , g = (0,
            l.determineRoleTitle)(t)
              , h = (0,
            l.determineRoleSubtitle)(t)
              , v = (0,
            f.useTranslation)().t
              , m = (0,
            p.useTheme)()
              , y = n ? void 0 : "".concat(v("roles.select"), " ").concat(g || "", " ").concat(h || "");
            return a.default.createElement(c.Wrapper, (0,
            o.default)({
                "aria-label": y
            }, r), a.default.createElement(u.Logo, {
                text: (0,
                l.getRoleInitials)(t),
                isCorporateRole: (0,
                s.isCorporateRole)(t),
                "aria-hidden": "true"
            }), a.default.createElement(c.TitleContainer, null, a.default.createElement(c.Title, {
                size: d.BodySize.Four,
                fontWeight: m.xyz.fontWeight.semiBold
            }, g), a.default.createElement(c.SubTitle, {
                size: d.BodySize.Four,
                fontWeight: m.xyz.fontWeight.normal
            }, h)))
        }
    },
    "iI//": function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.config = void 0;
        var o = r(n("VrFO"))
          , i = r(n("Y9Ll"))
          , a = new (function() {
            function e() {
                (0,
                o.default)(this, e),
                this._environment = void 0,
                this._notifyNonCriticalError = void 0,
                this._notifyCriticalError = void 0
            }
            return (0,
            i.default)(e, [{
                key: "environment",
                get: function() {
                    return this._environment
                },
                set: function(e) {
                    this._environment = e
                }
            }, {
                key: "notifyNonCriticalError",
                get: function() {
                    return this._notifyNonCriticalError
                },
                set: function(e) {
                    this._notifyNonCriticalError = e
                }
            }, {
                key: "notifyCriticalError",
                get: function() {
                    return this._notifyCriticalError
                },
                set: function(e) {
                    this._notifyCriticalError = e
                }
            }]),
            e
        }());
        t.config = a
    },
    jp49: function(e, t, n) {
        "use strict";
        var r = n("yWCo");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LogoutText = t.LogoutContainer = t.CurrentRoleWrapper = t.ListContainer = t.LabelWrapper = t.ListWrapper = void 0;
        var o = r(n("j/s1"))
          , i = n("l+CB")
          , a = o.default.div.withConfig({
            componentId: "sc-11tlgv6-0"
        })((function() {
            return (0,
            o.css)(["display:flex;flex-direction:column;"])
        }
        ));
        t.ListWrapper = a;
        var s = o.default.div.withConfig({
            componentId: "sc-11tlgv6-1"
        })((function(e) {
            var t = e.theme;
            return (0,
            o.css)(["display:flex;padding:", "rem;"], t.xyz.spacing.space2)
        }
        ));
        t.LabelWrapper = s;
        var c = o.default.div.withConfig({
            componentId: "sc-11tlgv6-2"
        })((function(e) {
            var t = e.theme;
            return (0,
            o.css)(["display:flex;flex-direction:column;padding:", "rem 0;"], t.xyz.spacing.space2)
        }
        ));
        t.ListContainer = c;
        var u = o.default.div.withConfig({
            componentId: "sc-11tlgv6-3"
        })((function(e) {
            var t = e.theme;
            return (0,
            o.css)(["display:flex;align-items:center;justify-content:space-between;padding-right:0.75rem;border-radius:1.5rem;cursor:pointer;&:active,&:focus{background-color:", ";}@media (hover:hover){&:hover{background-color:", ";}}"], t.xyz.color.neutralGray2, t.xyz.color.neutralGray2)
        }
        ));
        t.CurrentRoleWrapper = u;
        var l = o.default.div.withConfig({
            componentId: "sc-11tlgv6-4"
        })((function(e) {
            var t = e.theme;
            return (0,
            o.css)(["display:flex;align-items:center;padding:0.75rem;border-radius:1.5rem;cursor:pointer;&:active,&:focus{background-color:", ";}@media (hover:hover){&:hover{background-color:", ";}}"], t.xyz.color.neutralGray2, t.xyz.color.neutralGray2)
        }
        ));
        t.LogoutContainer = l;
        var f = (0,
        o.default)(i.Label).withConfig({
            componentId: "sc-11tlgv6-5"
        })((function(e) {
            var t = e.theme;
            return (0,
            o.css)(["color:", ";font-weight:", ";margin:0 0 0 ", "rem;"], t.xyz.color.signalRed, t.xyz.fontWeight.semiBold, t.xyz.spacing.space3)
        }
        ));
        t.LogoutText = f
    },
    jyK7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.determineRoleSubtitle = t.determineRoleTitle = t.getRoleInitials = void 0;
        var r = n("kO/L")
          , o = function(e) {
            return e.charAt(0)
        };
        t.getRoleInitials = function(e) {
            if (!e)
                return "";
            if ((0,
            r.isCorporateRole)(e)) {
                var t = e.name.businessName;
                return o(t)
            }
            var n = e.name
              , i = n.firstName
              , a = n.lastName;
            return "".concat(o(i)).concat(o(a))
        }
        ;
        t.determineRoleTitle = function(e) {
            if ((0,
            r.isConsumerRole)(e)) {
                var t = null == e ? void 0 : e.name
                  , n = t.firstName
                  , o = void 0 === n ? "" : n
                  , i = t.lastName
                  , a = void 0 === i ? "" : i;
                return "".concat(o, " ").concat(a)
            }
            var s, c;
            if ((0,
            r.isCorporateRole)(e))
                return null !== (s = null == e || null === (c = e.name) || void 0 === c ? void 0 : c.businessName) && void 0 !== s ? s : ""
        }
        ;
        t.determineRoleSubtitle = function(e) {
            return (0,
            r.isConsumerRole)(e) ? null == e ? void 0 : e.email : (0,
            r.isCorporateRole)(e) ? null == e ? void 0 : e.businessId : void 0
        }
    },
    k2tF: function(e, t, n) {
        "use strict";
        function r(e) {
            this.message = e
        }
        n.r(t),
        n.d(t, "InvalidTokenError", (function() {
            return a
        }
        )),
        r.prototype = new Error,
        r.prototype.name = "InvalidCharacterError";
        var o = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(e) {
            var t = String(e).replace(/=+$/, "");
            if (t.length % 4 == 1)
                throw new r("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var n, o, i = 0, a = 0, s = ""; o = t.charAt(a++); ~o && (n = i % 4 ? 64 * n + o : o,
            i++ % 4) ? s += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0)
                o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
            return s
        }
        ;
        function i(e) {
            var t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
            case 0:
                break;
            case 2:
                t += "==";
                break;
            case 3:
                t += "=";
                break;
            default:
                throw "Illegal base64url string!"
            }
            try {
                return function(e) {
                    return decodeURIComponent(o(e).replace(/(.)/g, (function(e, t) {
                        var n = t.charCodeAt(0).toString(16).toUpperCase();
                        return n.length < 2 && (n = "0" + n),
                        "%" + n
                    }
                    )))
                }(t)
            } catch (e) {
                return o(t)
            }
        }
        function a(e) {
            this.message = e
        }
        a.prototype = new Error,
        a.prototype.name = "InvalidTokenError",
        t.default = function(e, t) {
            if ("string" != typeof e)
                throw new a("Invalid token specified");
            var n = !0 === (t = t || {}).header ? 0 : 1;
            try {
                return JSON.parse(i(e.split(".")[n]))
            } catch (e) {
                throw new a("Invalid token specified: " + e.message)
            }
        }
    },
    "kO/L": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("nHJM");
        Object.keys(r).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            }))
        }
        ));
        var o = n("+z6/");
        Object.keys(o).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e]
                }
            }))
        }
        ));
        var i = n("FivH");
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            }))
        }
        ))
    },
    l3FK: function(e, t, n) {
        "use strict";
        var r = n("yWCo");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LoginButton = t.LoginButtonText = void 0;
        var o = n("l+CB")
          , i = n("d6wg")
          , a = r(n("j/s1"))
          , s = (0,
        a.default)(o.Label).withConfig({
            componentId: "sc-1rrmbjw-0"
        })((function(e) {
            var t = e.theme;
            return (0,
            a.css)(["color:", ";font-weight:", ";cursor:pointer;"], t.xyz.color.signalBlue, t.xyz.fontWeight.semiBold)
        }
        ));
        t.LoginButtonText = s;
        var c = (0,
        a.default)(o.Button).withConfig({
            componentId: "sc-1rrmbjw-1"
        })((function(e) {
            var t = e.theme.xyz
              , n = t.color
              , r = t.spacing
              , o = t.fontSize
              , c = e.darkVariant;
            return (0,
            a.css)(["margin:0 0.1rem;border:2px solid ", ";background-color:", ";padding:0.3rem 0.6rem;height:50%;&:hover,&:active,&:focus{color:", ";&::before{background:", ";}}& svg{margin-right:0;}& > ", "{color:", ";font-size:", "rem;}&:focus{background-color:", ";border:2px solid ", ";", "}&:hover,&:active{border:2px solid ", ";&::before{background-color:", ";}& ", "{color:", ";}& svg{filter:none;& > path{fill:", ";}}}& ", "{display:none;}@media screen and (min-width:", "){& svg{margin-right:", "rem;}& ", "{display:inline-flex;}}"], n.signalBlue, n.neutralWhite, c ? n.neutralWhite : n.neutralBlack, c ? n.neutralIconGray : n.neutralOnPressGray, s, n.signalBlue, o.body.five, n.neutralWhite, n.signalBlue, c && (0,
            a.css)(["box-shadow:0px 0px 7px ", ";"], n.neutralWhite), c ? n.brandBrightYellow : n.signalBlue, c ? n.brandBrightYellow : n.signalBlue, s, c ? n.neutralNetworkGray : n.neutralWhite, c ? n.neutralNetworkGray : n.neutralWhite, s, i.breakpoint.md, r.space2, s)
        }
        ));
        t.LoginButton = c
    },
    "lOD/": function(e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n),
            Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }
        : function(e, t, n, r) {
            void 0 === r && (r = n),
            e[r] = t[n]
        }
        )
          , o = this && this.__exportStar || function(e, t) {
            for (var n in e)
                "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        o(n("Gd2Q"), t),
        o(n("DY5D"), t),
        o(n("LmHW"), t),
        o(n("C2Vm"), t)
    },
    lXt7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("RPHr");
        Object.keys(r).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            }))
        }
        ))
    },
    liE7: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "Trans", (function() {
            return z
        }
        )),
        n.d(t, "useTranslation", (function() {
            return Y
        }
        )),
        n.d(t, "withTranslation", (function() {
            return X
        }
        )),
        n.d(t, "Translation", (function() {
            return Q
        }
        )),
        n.d(t, "I18nextProvider", (function() {
            return Z
        }
        )),
        n.d(t, "withSSR", (function() {
            return te
        }
        )),
        n.d(t, "useSSR", (function() {
            return $
        }
        )),
        n.d(t, "I18nContext", (function() {
            return E
        }
        )),
        n.d(t, "initReactI18next", (function() {
            return T
        }
        )),
        n.d(t, "setDefaults", (function() {
            return k
        }
        )),
        n.d(t, "getDefaults", (function() {
            return w
        }
        )),
        n.d(t, "setI18n", (function() {
            return x
        }
        )),
        n.d(t, "getI18n", (function() {
            return j
        }
        )),
        n.d(t, "composeInitialProps", (function() {
            return C
        }
        )),
        n.d(t, "getInitialProps", (function() {
            return _
        }
        ));
        var r = n("m3Bd")
          , o = n.n(r)
          , i = n("T0aG")
          , a = n.n(i)
          , s = n("KEM+")
          , c = n.n(s)
          , u = n("qwB3")
          , l = n.n(u)
          , f = n("5rQp")
          , d = n.n(f)
          , p = n("VrFO")
          , g = n.n(p)
          , h = n("Y9Ll")
          , v = n.n(h);
        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach((function(t) {
                    c()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var b, O = {
            bindI18n: "languageChanged",
            bindI18nStore: "",
            transEmptyNodeValue: "",
            transSupportBasicHtmlNodes: !0,
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
            useSuspense: !0
        }, E = l.a.createContext();
        function k() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            O = y(y({}, O), e)
        }
        function w() {
            return O
        }
        var S = function() {
            function e() {
                g()(this, e),
                this.usedNamespaces = {}
            }
            return v()(e, [{
                key: "addUsedNamespaces",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        t.usedNamespaces[e] || (t.usedNamespaces[e] = !0)
                    }
                    ))
                }
            }, {
                key: "getUsedNamespaces",
                value: function() {
                    return Object.keys(this.usedNamespaces)
                }
            }]),
            e
        }();
        function x(e) {
            b = e
        }
        function j() {
            return b
        }
        var T = {
            type: "3rdParty",
            init: function(e) {
                k(e.options.react),
                x(e)
            }
        };
        function C(e) {
            return function(t) {
                return new Promise((function(n) {
                    var r = _();
                    e.getInitialProps ? e.getInitialProps(t).then((function(e) {
                        n(y(y({}, e), r))
                    }
                    )) : n(r)
                }
                ))
            }
        }
        function _() {
            var e = j()
              , t = e.reportNamespaces ? e.reportNamespaces.getUsedNamespaces() : []
              , n = {}
              , r = {};
            return e.languages.forEach((function(n) {
                r[n] = {},
                t.forEach((function(t) {
                    r[n][t] = e.getResourceBundle(n, t) || {}
                }
                ))
            }
            )),
            n.initialI18nStore = r,
            n.initialLanguage = e.language,
            n
        }
        function P() {
            if (console && console.warn) {
                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                "string" == typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
                (e = console).warn.apply(e, n)
            }
        }
        var L = {};
        function R() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            "string" == typeof t[0] && L[t[0]] || ("string" == typeof t[0] && (L[t[0]] = new Date),
            P.apply(void 0, t))
        }
        function I(e, t, n) {
            e.loadNamespaces(t, (function() {
                if (e.isInitialized)
                    n();
                else {
                    e.on("initialized", (function t() {
                        setTimeout((function() {
                            e.off("initialized", t)
                        }
                        ), 0),
                        n()
                    }
                    ))
                }
            }
            ))
        }
        function A(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!t.languages || !t.languages.length)
                return R("i18n.languages were undefined or empty", t.languages),
                !0;
            var r = t.languages[0]
              , o = !!t.options && t.options.fallbackLng
              , i = t.languages[t.languages.length - 1];
            if ("cimode" === r.toLowerCase())
                return !0;
            var a = function(e, n) {
                var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                return -1 === r || 2 === r
            };
            return !(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !a(t.isLanguageChangingTo, e)) && (!!t.hasResourceBundle(r, e) || (!t.services.backendConnector.backend || !(!a(r, e) || o && !a(i, e))))
        }
        function N(e) {
            return e.displayName || e.name || ("string" == typeof e && e.length > 0 ? e : "Unknown")
        }
        function M(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function F(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? M(Object(n), !0).forEach((function(t) {
                    c()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function D(e, t) {
            if (!e)
                return !1;
            var n = e.props ? e.props.children : e.children;
            return t ? n.length > 0 : !!n
        }
        function B(e) {
            return e ? e && e.children ? e.children : e.props && e.props.children : []
        }
        function G(e) {
            return Array.isArray(e) ? e : [e]
        }
        function U(e, t, n, r, o) {
            if ("" === t)
                return [];
            var i = r.transKeepBasicHtmlNodesFor || []
              , s = t && new RegExp(i.join("|")).test(t);
            if (!e && !s)
                return [t];
            var c = {};
            !function e(t) {
                G(t).forEach((function(t) {
                    "string" != typeof t && (D(t) ? e(B(t)) : "object" !== a()(t) || l.a.isValidElement(t) || Object.assign(c, t))
                }
                ))
            }(e);
            var u = n.services.interpolator.interpolate(t, F(F({}, c), o), n.language)
              , f = d.a.parse("<0>".concat(u, "</0>"));
            function p(e, t, n) {
                var r = B(e)
                  , o = h(r, t.children, n);
                return function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e) && e.every((function(e) {
                        return l.a.isValidElement(e)
                    }
                    ))
                }(r) && 0 === o.length ? r : o
            }
            function g(e, t, n, r) {
                e.dummy && (e.children = t),
                n.push(l.a.cloneElement(e, F(F({}, e.props), {}, {
                    key: r
                }), t))
            }
            function h(t, n, o) {
                var c = G(t);
                return G(n).reduce((function(t, n, u) {
                    var f, d, v, m = n.children && n.children[0] && n.children[0].content;
                    if ("tag" === n.type) {
                        var y = c[parseInt(n.name, 10)];
                        !y && 1 === o.length && o[0][n.name] && (y = o[0][n.name]),
                        y || (y = {});
                        var b = 0 !== Object.keys(n.attrs).length ? (f = {
                            props: n.attrs
                        },
                        (v = F({}, d = y)).props = Object.assign(f.props, d.props),
                        v) : y
                          , O = l.a.isValidElement(b)
                          , E = O && D(n, !0) && !n.voidElement
                          , k = s && "object" === a()(b) && b.dummy && !O
                          , w = "object" === a()(e) && null !== e && Object.hasOwnProperty.call(e, n.name);
                        if ("string" == typeof b)
                            t.push(b);
                        else if (D(b) || E) {
                            g(b, p(b, n, o), t, u)
                        } else if (k) {
                            var S = h(c, n.children, o);
                            t.push(l.a.cloneElement(b, F(F({}, b.props), {}, {
                                key: u
                            }), S))
                        } else if (Number.isNaN(parseFloat(n.name))) {
                            if (w)
                                g(b, p(b, n, o), t, u);
                            else if (r.transSupportBasicHtmlNodes && i.indexOf(n.name) > -1)
                                if (n.voidElement)
                                    t.push(l.a.createElement(n.name, {
                                        key: "".concat(n.name, "-").concat(u)
                                    }));
                                else {
                                    var x = h(c, n.children, o);
                                    t.push(l.a.createElement(n.name, {
                                        key: "".concat(n.name, "-").concat(u)
                                    }, x))
                                }
                            else if (n.voidElement)
                                t.push("<".concat(n.name, " />"));
                            else {
                                var j = h(c, n.children, o);
                                t.push("<".concat(n.name, ">").concat(j, "</").concat(n.name, ">"))
                            }
                        } else if ("object" !== a()(b) || O)
                            1 === n.children.length && m ? t.push(l.a.cloneElement(b, F(F({}, b.props), {}, {
                                key: u
                            }), m)) : t.push(l.a.cloneElement(b, F(F({}, b.props), {}, {
                                key: u
                            })));
                        else {
                            var T = n.children[0] ? m : null;
                            T && t.push(T)
                        }
                    } else
                        "text" === n.type && t.push(n.content);
                    return t
                }
                ), [])
            }
            return B(h([{
                dummy: !0,
                children: e
            }], f, G(e || []))[0])
        }
        function z(e) {
            var t = e.children
              , n = e.count
              , r = e.parent
              , i = e.i18nKey
              , s = e.tOptions
              , c = e.values
              , f = e.defaults
              , d = e.components
              , p = e.ns
              , g = e.i18n
              , h = e.t
              , v = o()(e, ["children", "count", "parent", "i18nKey", "tOptions", "values", "defaults", "components", "ns", "i18n", "t"])
              , m = Object(u.useContext)(E) || {}
              , y = m.i18n
              , b = m.defaultNS
              , O = g || y || j();
            if (!O)
                return R("You will need to pass in an i18next instance by using i18nextReactModule"),
                t;
            var k = h || O.t.bind(O) || function(e) {
                return e
            }
              , S = F(F({}, w()), O.options && O.options.react)
              , x = p || k.ns || b || O.options && O.options.defaultNS;
            x = "string" == typeof x ? [x] : x || ["translation"];
            var T = f || function e(t, n) {
                if (!t)
                    return "";
                var r = ""
                  , i = G(t)
                  , s = n.transKeepBasicHtmlNodesFor || [];
                return i.forEach((function(t, i) {
                    if ("string" == typeof t)
                        r += "".concat(t);
                    else if (l.a.isValidElement(t)) {
                        var c = Object.keys(t.props).length
                          , u = s.indexOf(t.type) > -1
                          , f = t.props.children;
                        if (!f && u && 0 === c)
                            r += "<".concat(t.type, "/>");
                        else if (f || u && 0 === c)
                            if (t.props.i18nIsDynamicList)
                                r += "<".concat(i, "></").concat(i, ">");
                            else if (u && 1 === c && "string" == typeof f)
                                r += "<".concat(t.type, ">").concat(f, "</").concat(t.type, ">");
                            else {
                                var d = e(f, n);
                                r += "<".concat(i, ">").concat(d, "</").concat(i, ">")
                            }
                        else
                            r += "<".concat(i, "></").concat(i, ">")
                    } else if ("object" === a()(t)) {
                        var p = t.format
                          , g = o()(t, ["format"])
                          , h = Object.keys(g);
                        if (1 === h.length) {
                            var v = p ? "".concat(h[0], ", ").concat(p) : h[0];
                            r += "{{".concat(v, "}}")
                        } else
                            P("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", t)
                    } else
                        P("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", t)
                }
                )),
                r
            }(t, S) || S.transEmptyNodeValue || i
              , C = S.hashTransKey
              , _ = i || (C ? C(T) : T)
              , L = c ? {} : {
                interpolation: {
                    prefix: "#$?",
                    suffix: "?$#"
                }
            }
              , I = F(F(F(F({}, s), {}, {
                count: n
            }, c), L), {}, {
                defaultValue: T,
                ns: x
            })
              , A = U(d || t, _ ? k(_, I) : T, O, S, I)
              , N = void 0 !== r ? r : S.defaultTransParent;
            return N ? l.a.createElement(N, v, A) : A
        }
        var K = n("ddV6")
          , V = n.n(K);
        function H(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function W(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? H(Object(n), !0).forEach((function(t) {
                    c()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Y(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.i18n
              , r = Object(u.useContext)(E) || {}
              , o = r.i18n
              , i = r.defaultNS
              , a = n || o || j();
            if (a && !a.reportNamespaces && (a.reportNamespaces = new S),
            !a) {
                R("You will need to pass in an i18next instance by using initReactI18next");
                var s = function(e) {
                    return Array.isArray(e) ? e[e.length - 1] : e
                }
                  , c = [s, {}, !1];
                return c.t = s,
                c.i18n = {},
                c.ready = !1,
                c
            }
            var l = W(W(W({}, w()), a.options.react), t)
              , f = l.useSuspense
              , d = e || i || a.options && a.options.defaultNS;
            d = "string" == typeof d ? [d] : d || ["translation"],
            a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(d);
            var p = (a.isInitialized || a.initializedStoreOnce) && d.every((function(e) {
                return A(e, a, l)
            }
            ));
            function g() {
                return {
                    t: a.getFixedT(null, "fallback" === l.nsMode ? d : d[0])
                }
            }
            var h = Object(u.useState)(g())
              , v = V()(h, 2)
              , m = v[0]
              , y = v[1]
              , b = Object(u.useRef)(!0);
            Object(u.useEffect)((function() {
                var e = l.bindI18n
                  , t = l.bindI18nStore;
                function n() {
                    b.current && y(g())
                }
                return b.current = !0,
                p || f || I(a, d, (function() {
                    b.current && y(g())
                }
                )),
                e && a && a.on(e, n),
                t && a && a.store.on(t, n),
                function() {
                    b.current = !1,
                    e && a && e.split(" ").forEach((function(e) {
                        return a.off(e, n)
                    }
                    )),
                    t && a && t.split(" ").forEach((function(e) {
                        return a.store.off(e, n)
                    }
                    ))
                }
            }
            ), [d.join()]);
            var O = [m.t, a, p];
            if (O.t = m.t,
            O.i18n = a,
            O.ready = p,
            p)
                return O;
            if (!p && !f)
                return O;
            throw new Promise((function(e) {
                I(a, d, (function() {
                    e()
                }
                ))
            }
            ))
        }
        function q(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function J(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? q(Object(n), !0).forEach((function(t) {
                    c()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function X(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return function(n) {
                function r(r) {
                    var i = r.forwardedRef
                      , a = o()(r, ["forwardedRef"])
                      , s = Y(e, a)
                      , c = V()(s, 3)
                      , u = c[0]
                      , f = c[1]
                      , d = c[2]
                      , p = J(J({}, a), {}, {
                        t: u,
                        i18n: f,
                        tReady: d
                    });
                    return t.withRef && i ? p.ref = i : !t.withRef && i && (p.forwardedRef = i),
                    l.a.createElement(n, p)
                }
                r.displayName = "withI18nextTranslation(".concat(N(n), ")"),
                r.WrappedComponent = n;
                return t.withRef ? l.a.forwardRef((function(e, t) {
                    return l.a.createElement(r, Object.assign({}, e, {
                        forwardedRef: t
                    }))
                }
                )) : r
            }
        }
        function Q(e) {
            var t = e.ns
              , n = e.children
              , r = Y(t, o()(e, ["ns", "children"]))
              , i = V()(r, 3)
              , a = i[0]
              , s = i[1]
              , c = i[2];
            return n(a, {
                i18n: s,
                lng: s.language
            }, c)
        }
        function Z(e) {
            var t = e.i18n
              , n = e.defaultNS
              , r = e.children;
            return Object(u.createElement)(E.Provider, {
                value: {
                    i18n: t,
                    defaultNS: n
                }
            }, r)
        }
        function $(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = n.i18n
              , o = Object(u.useContext)(E) || {}
              , i = o.i18n
              , a = r || i || j();
            a.options && a.options.isClone || (e && !a.initializedStoreOnce && (a.services.resourceStore.data = e,
            a.options.ns = Object.values(e).reduce((function(e, t) {
                return Object.keys(t).forEach((function(t) {
                    e.indexOf(t) < 0 && e.push(t)
                }
                )),
                e
            }
            ), a.options.ns),
            a.initializedStoreOnce = !0,
            a.isInitialized = !0),
            t && !a.initializedLanguageOnce && (a.changeLanguage(t),
            a.initializedLanguageOnce = !0))
        }
        function ee(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function te() {
            return function(e) {
                function t(t) {
                    var n = t.initialI18nStore
                      , r = t.initialLanguage
                      , i = o()(t, ["initialI18nStore", "initialLanguage"]);
                    return $(n, r),
                    l.a.createElement(e, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ee(Object(n), !0).forEach((function(t) {
                                c()(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ee(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({}, i))
                }
                return t.getInitialProps = C(e),
                t.displayName = "withI18nextSSR(".concat(N(e), ")"),
                t.WrappedComponent = e,
                t
            }
        }
    },
    m3Bd: function(e, t, n) {
        var r = n("LdEA");
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var n, o, i = r(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++)
                    n = a[o],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
    },
    mQHI: function(e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n),
            Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }
        : function(e, t, n, r) {
            void 0 === r && (r = n),
            e[r] = t[n]
        }
        )
          , o = this && this.__exportStar || function(e, t) {
            for (var n in e)
                "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        o(n("ITvT"), t),
        o(n("t1en"), t),
        o(n("KrJc"), t),
        o(n("80+j"), t),
        o(n("vISZ"), t),
        o(n("vx//"), t)
    },
    nGxM: function(e, t) {
        function n(e, t) {
            switch (t.type) {
            case "text":
                return e + t.content;
            case "tag":
                return e += "<" + t.name + (t.attrs ? function(e) {
                    var t = [];
                    for (var n in e)
                        t.push(n + '="' + e[n] + '"');
                    return t.length ? " " + t.join(" ") : ""
                }(t.attrs) : "") + (t.voidElement ? "/>" : ">"),
                t.voidElement ? e : e + t.children.reduce(n, "") + "</" + t.name + ">"
            }
        }
        e.exports = function(e) {
            return e.reduce((function(e, t) {
                return e + n("", t)
            }
            ), "")
        }
    },
    nHJM: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getSessionLifeTime = t.findSelectedRole = t.getAnonymousToken = t.resolveSelectedRole = t.clearPersistedSession = t.isAnonymousRole = t.isConsumerRole = t.isCorporateRole = t.logout = t.login = t.refresh = t.getPersistedQueryParams = t.persistQueryParams = t.persistAuthTime = t.persistSession = t.createTokens = t.decodeTokens = t.getTokens = void 0;
        var o = r(n("VtSi"))
          , i = r(n("m3Bd"))
          , a = r(n("ddV6"))
          , s = r(n("KEM+"))
          , c = r(n("cbiG"))
          , u = r(n("k2tF"))
          , l = n("JBtm")
          , f = n("FivH")
          , d = n("yzeg")
          , p = n("z9Jo")
          , g = n("YCZe")
          , h = n("XiPS");
        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(n), !0).forEach((function(t) {
                    (0,
                    s.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var y = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}.ENVIRONMENT;
            return "".concat(f.AuthServiceEndpoint[t]).concat(e)
        }
          , b = function() {
            var e = (0,
            c.default)(o.default.mark((function e(t) {
                var n;
                return o.default.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.json();
                        case 2:
                            if (n = e.sent,
                            t.ok) {
                                e.next = 5;
                                break
                            }
                            throw {
                                response: t,
                                responseBody: n
                            };
                        case 5:
                            return e.abrupt("return", n);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , O = function() {
            var e = (0,
            c.default)(o.default.mark((function e(t) {
                var n, r, i, a;
                return o.default.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = null,
                            n = (0,
                            u.default)(t.token),
                            !L(t)) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return", m(m({}, t), {}, {
                                decodedToken: n
                            }));
                        case 4:
                            return e.prev = 4,
                            e.next = 7,
                            (0,
                            d.digestText)("".concat(t.email, " ").concat(t.businessId, " ").concat(null === (i = t.name) || void 0 === i ? void 0 : i.firstName, " ").concat(null === (a = t.name) || void 0 === a ? void 0 : a.lastName));
                        case 7:
                            r = e.sent,
                            e.next = 13;
                            break;
                        case 10:
                            e.prev = 10,
                            e.t0 = e.catch(4),
                            (0,
                            g.logError)(e.t0);
                        case 13:
                            if (!_(t)) {
                                e.next = 15;
                                break
                            }
                            return e.abrupt("return", m(m({}, t), {}, {
                                decodedToken: n,
                                hash: r
                            }));
                        case 15:
                            return e.abrupt("return", m(m({}, t), {}, {
                                decodedToken: n,
                                hash: r
                            }));
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[4, 10]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , E = function() {
            var e = (0,
            c.default)(o.default.mark((function e(t, n, r) {
                var i;
                return o.default.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            fetch(y(f.AuthenticationRoute.REFRESH, r), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded",
                                    Authorization: "Bearer ".concat(n)
                                },
                                body: "refresh_token=".concat(t)
                            });
                        case 2:
                            return i = e.sent,
                            e.abrupt("return", b(i));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }()
          , k = function() {
            var e = (0,
            c.default)(o.default.mark((function e(t, n) {
                var r;
                return o.default.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            fetch(y(f.AuthenticationRoute.TOKEN, n), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: "code=".concat(t),
                                credentials: "include"
                            });
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", b(r));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }();
        t.getTokens = k;
        var w = function() {
            var e = (0,
            c.default)(o.default.mark((function e(t) {
                var n, r, i, s, l, f, d, p;
                return o.default.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            n = t.id_token,
                            r = t.access_token,
                            i = t.role_tokens,
                            s = t.refresh_token;
                            try {
                                l = (0,
                                u.default)(n)
                            } catch (h) {
                                (0,
                                g.handleCriticalError)(h)
                            }
                            if (f = [],
                            e.prev = 3,
                            !(d = Object.entries(i)).length) {
                                e.next = 9;
                                break
                            }
                            return e.next = 8,
                            Promise.all(d.map(function() {
                                var e = (0,
                                c.default)(o.default.mark((function e(t) {
                                    var n, r;
                                    return o.default.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return n = (0,
                                                a.default)(t, 2),
                                                n[0],
                                                r = n[1],
                                                e.t0 = m,
                                                e.t1 = {},
                                                e.next = 5,
                                                O(r);
                                            case 5:
                                                return e.t2 = e.sent,
                                                e.abrupt("return", (0,
                                                e.t0)(e.t1, e.t2));
                                            case 7:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()));
                        case 8:
                            f = e.sent;
                        case 9:
                            e.next = 14;
                            break;
                        case 11:
                            e.prev = 11,
                            e.t0 = e.catch(3),
                            (0,
                            g.handleCriticalError)(e.t0);
                        case 14:
                            return p = {
                                idToken: n,
                                decodedIdToken: l,
                                roleTokens: f
                            },
                            r && (p.accessToken = r),
                            s && (p.refreshToken = s),
                            e.abrupt("return", p);
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 11]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        t.decodeTokens = w;
        window.__tokens = {};
        var S = function() {
            var e = (0,c.default)(o.default.mark((function e(t) {
                var n, r, i, a, s, c, u;
                return o.default.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        //switch (0) {
                        case 0:
                            window.__tokens = {
                                "id_token": t.id_token,
                                "role_token": t.role_tokens[0].token,
                            };
                            console.log(window.__tokens);
                            console.log('------------ 分割线 -------------');
                            //debugger;
                            //return

                            ///*
                            return n = t.id_token,
                            r = t.access_token,
                            i = t.role_tokens,
                            a = t.refresh_token,
                            e.next = 3,
                            w({
                                id_token: n,
                                role_tokens: i
                            });
                        
                        case 3:
                            return s = e.sent,
                            c = s.decodedIdToken,
                            u = s.roleTokens,
                            e.abrupt("return", {
                                idToken: n,
                                decodedIdToken: c,
                                roleTokens: u,
                                accessToken: r,
                                refreshToken: a
                            });
                        case 7:
                        case "end":
                            return e.stop()
                        //*/
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        t.createTokens = S;
        var x = function(e) {
            p.sessionStorageService.setToStorage(p.StorageKey.TOKENS, JSON.stringify(e))
        };
        t.persistSession = x;
        var j = function() {
            p.localStorageService.setToStorage(p.StorageKey.AUTHENTICATION_COMPLETED_AT, JSON.stringify((new Date).getTime()))
        };
        t.persistAuthTime = j;
        var T = function(e) {
            try {
                p.localStorageService.setToStorage(p.StorageKey.PERSISTED_QUERY_PARAMS, JSON.stringify(e))
            } catch (t) {
                (0,
                g.logError)(t)
            }
        };
        t.persistQueryParams = T;
        t.getPersistedQueryParams = function() {
            try {
                var e = JSON.parse(p.localStorageService.getFromStorage(p.StorageKey.PERSISTED_QUERY_PARAMS));
                return p.localStorageService.removeFromStorage(p.StorageKey.PERSISTED_QUERY_PARAMS),
                e
            } catch (t) {
                (0,
                g.logError)(t),
                p.localStorageService.removeFromStorage(p.StorageKey.PERSISTED_QUERY_PARAMS)
            }
            return {}
        }
        ;
        var C = function() {
            var e = (0,
            c.default)(o.default.mark((function e(t, n, r) {
                var i, a;
                return o.default.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            E(t, n, r);
                        case 2:
                            return i = e.sent,
                            e.next = 5,
                            S(i);
                        case 5:
                            return a = e.sent,
                            x(a),
                            j(),
                            e.abrupt("return", a);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }();
        t.refresh = C;
        t.login = function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Locale.fi;
            R();
            var r = (0,
            l.parseUrl)(location.href)
              , o = r.url
              , i = r.query;
            T(i),
            null === (t = (0,
            g.getWindow)()) || void 0 === t || t.location.assign("".concat(y(f.AuthenticationRoute.LOGIN, e), "?redirect_uri=").concat(o, "&locale=").concat(n))
        }
        ;
        t.logout = function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Locale.fi, r = arguments.length > 2 ? arguments[2] : void 0;
            R(),
            p.localStorageService.removeFromStorage(p.StorageKey.LOGGED_IN),
            p.localStorageService.removeFromStorage(p.StorageKey.CURRENT_ROLE);
            var o = (0,
            l.stringifyUrl)({
                url: y(f.AuthenticationRoute.LOGOUT, e),
                query: {
                    locale: n,
                    redirect_uri: r
                }
            });
            null === (t = (0,
            g.getWindow)()) || void 0 === t || t.location.assign(o)
        }
        ;
        var _ = function(e) {
            return (null == e ? void 0 : e.type) === f.RoleType.CORPORATE
        };
        t.isCorporateRole = _;
        var P = function(e) {
            return (null == e ? void 0 : e.type) === f.RoleType.CONSUMER
        };
        t.isConsumerRole = P;
        var L = function(e) {
            return (null == e ? void 0 : e.type) === f.RoleType.ANONYMOUS
        };
        t.isAnonymousRole = L;
        var R = function() {
            p.sessionStorageService.removeFromStorage(p.StorageKey.TOKENS),
            p.localStorageService.removeFromStorage(p.StorageKey.AUTHENTICATION_COMPLETED_AT)
        };
        t.clearPersistedSession = R;
        t.resolveSelectedRole = function(e, t) {
            var n, r = (0,
            l.parseUrl)(location.href), o = r.url, a = r.query, s = a.preferred_role_type, c = (0,
            i.default)(a, ["preferred_role_type"]), u = e.find(P);
            if ((n = s) && !Array.isArray(n) && [f.RoleType.CONSUMER, f.RoleType.CORPORATE].includes(n)) {
                var d = e.find((function(e) {
                    return e.type === s
                }
                ));
                return location.replace((0,
                l.stringifyUrl)({
                    url: o,
                    query: m({}, c)
                })),
                (null == t ? void 0 : t.type) !== (null == d ? void 0 : d.type) ? ((0,
                g.logInfo)("[Role Switcher]: Preferred role is of a different type than the selected role, using preferred role"),
                d) : t || d || u || e[0]
            }
            return s && (0,
            g.logError)("[Role Switcher]: preferred_role_type=".concat(s, " doesn't match 'consumer' or 'corporate'")),
            t || u || e[0]
        }
        ;
        var I = function() {
            var e = (0,
            c.default)(o.default.mark((function e(t) {
                var n;
                return o.default.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            fetch(y(f.AuthenticationRoute.ANONYMOUS_TOKEN, t), {
                                method: "POST",
                                credentials: "include"
                            });
                        case 2:
                            return n = e.sent,
                            e.abrupt("return", b(n));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , A = function() {
            var e = (0,
            c.default)(o.default.mark((function e() {
                var t, n, r = arguments;
                return o.default.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = r.length > 0 && void 0 !== r[0] ? r[0] : "DEV",
                            e.next = 3,
                            I(t);
                        case 3:
                            return n = e.sent,
                            e.abrupt("return", S(n));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }();
        t.getAnonymousToken = A;
        t.findSelectedRole = function(e) {
            var t = p.localStorageService.getFromStorage(p.StorageKey.CURRENT_ROLE);
            if (t)
                try {
                    var n = JSON.parse(t);
                    return e.find((function(e) {
                        return e.hash === n
                    }
                    ))
                } catch (r) {
                    (0,
                    g.logError)(r)
                }
        }
        ;
        t.getSessionLifeTime = function(e) {
            var t = 1e3 * (e.exp - e.iat)
              , n = Number(p.localStorageService.getFromStorage(p.StorageKey.AUTHENTICATION_COMPLETED_AT));
            return t - (n ? Date.now() - n : performance.now())
        }
    },
    nkkX: function(e, t) {
        e.exports = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            menuitem: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }
    },
    oBCf: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Login = void 0;
        var o = r(n("97Jx"))
          , i = r(n("m3Bd"))
          , a = r(n("qwB3"))
          , s = n("l+CB")
          , c = n("liE7")
          , u = n("l3FK");
        t.Login = function(e) {
            var t = e.darkVariant
              , n = void 0 !== t && t
              , r = (0,
            i.default)(e, ["darkVariant"])
              , l = (0,
            (0,
            c.useTranslation)().t)("login");
            return a.default.createElement(u.LoginButton, (0,
            o.default)({
                size: "sm",
                darkVariant: n,
                mode: "secondary"
            }, r), a.default.createElement(s.ProfileIcon, {
                color: "signalBlue",
                width: "1.5em",
                "aria-hidden": !0
            }), a.default.createElement(u.LoginButtonText, {
                size: "Five"
            }, l))
        }
    },
    pSHd: function(e, t, n) {
        n("/vb6")("split")
    },
    prif: function(e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n),
            Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }
        : function(e, t, n, r) {
            void 0 === r && (r = n),
            e[r] = t[n]
        }
        )
          , o = this && this.__exportStar || function(e, t) {
            for (var n in e)
                "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        o(n("H5LP"), t),
        o(n("Xf//"), t)
    },
    r3qd: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("wEF6");
        Object.keys(r).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            }))
        }
        ))
    },
    r91r: function(e, t, n) {
        "use strict";
        var r = n("yWCo")
          , o = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MainView = void 0;
        var i = o(n("KEM+"))
          , a = o(n("ddV6"))
          , s = r(n("qwB3"))
          , c = n("liE7")
          , u = o(n("9TxS"))
          , l = n("Ongf")
          , f = n("F+Mn")
          , d = n("DrGY")
          , p = n("NmEr")
          , g = n("BOhL")
          , h = n("evI2");
        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(n), !0).forEach((function(t) {
                    (0,
                    i.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        (0,
        f.initLocales)();
        var y = function(e) {
            var t, n, r, o = (0,
            s.useState)(!e.allowAnonymousAccess), i = (0,
            a.default)(o, 2), f = i[0], v = i[1], y = (0,
            s.useState)(!1), b = (0,
            a.default)(y, 2), O = b[0], E = b[1], k = (0,
            g.usePersistedState)(g.StorageKey.CURRENT_ROLE, null, g.localStorageService), w = (0,
            a.default)(k, 2), S = w[0], x = w[1], j = (0,
            s.useRef)(!0), T = (0,
            s.useRef)(!0);
            (0,
            s.useEffect)((function() {
                g.config.environment = e.environment,
                g.config.notifyNonCriticalError = e.onNonCriticalError,
                g.config.notifyCriticalError = e.onCriticalError
            }
            ), [e.environment, e.onNonCriticalError, e.onCriticalError]);
            var C = (0,
            g.useAuthentication)({
                env: e.environment,
                locale: e.locale,
                returnUrl: e.logoutReturnUrl
            }, f, (function(t) {
                var n;
                R(t),
                null === (n = e.onTokensUpdated) || void 0 === n || n.call(e, t);
                var r, o, i, a, s, c = t.roleTokens.find((function(e) {
                    return e.hash === S
                }
                )), u = (0,
                g.resolveSelectedRole)(t.roleTokens, c);
                (F(u),
                j.current && t) && ((0,
                g.sendAnalyticsUserAction)(m(m(m({
                    actionType: g.AnalyticsUserActionType.ROLE_SWITCHER_INIT,
                    roles: null !== (r = null == t || null === (o = t.roleTokens) || void 0 === o ? void 0 : o.length) && void 0 !== r ? r : 1
                }, (0,
                g.isCorporateRole)(u) && {
                    activeCompany: null == u || null === (i = u.name) || void 0 === i ? void 0 : i.businessName
                }), (0,
                g.isCorporateRole)(u) && {
                    activeCompanyVat: null == u ? void 0 : u.businessId
                }), (0,
                g.isCorporateRole)(u) && {
                    privileges: null == u || null === (a = u.decodedToken) || void 0 === a || null === (s = a.role) || void 0 === s ? void 0 : s.privileges
                })),
                j.current = !1)
            }
            ))
              , _ = C.logout
              , P = C.loggedIn
              , L = C.tokens
              , R = C.setTokens
              , I = C.isExchangingTokens
              , A = null == L || null === (t = L.roleTokens) || void 0 === t ? void 0 : t.find((function(e) {
                return (null == e ? void 0 : e.hash) === S
            }
            ))
              , N = null !== (n = null == L || null === (r = L.roleTokens) || void 0 === r ? void 0 : r.filter((function(e) {
                return (null == e ? void 0 : e.hash) !== S
            }
            ))) && void 0 !== n ? n : []
              , M = e.allowAnonymousAccess && !P && !I;
            (0,
            h.useAnonymousAuthentication)({
                env: e.environment,
                startFetching: M,
                onUpdate: function(t) {
                    var n;
                    null === (n = e.onTokensUpdated) || void 0 === n || n.call(e, t)
                }
            }),
            (0,
            s.useEffect)((function() {
                g.localisation.changeLocale(e.locale)
            }
            ), [e.locale]);
            var F = function(t) {
                var n;
                (null == t ? void 0 : t.hash) && x(t.hash),
                null === (n = e.onSelectedRoleChanged) || void 0 === n || n.call(e, t)
            }
              , D = function() {
                var e;
                (null === (e = (0,
                g.getWindow)().getSelection()) || void 0 === e ? void 0 : e.toString()) || E(!1)
            }
              , B = function() {
                var e = !O;
                T.current && e && ((0,
                g.sendAnalyticsUserAction)({
                    actionType: g.AnalyticsUserActionType.ELEMENT_CLICKED,
                    elementClass: "userRoleSwitcher",
                    elementName: "Role Switcher"
                }),
                T.current = !1),
                E(e)
            }
              , G = function() {
                var t = e.onLogout;
                (0,
                g.sendAnalyticsUserAction)({
                    actionType: g.AnalyticsUserActionType.LOGOUT
                }),
                t ? Promise.resolve(t()).then((function() {
                    _()
                }
                )).catch((function(e) {
                    (0,
                    g.logInfo)("[Role Switcher]: Logout callback error: ", e),
                    _()
                }
                )) : _()
            };
            return s.default.createElement(u.default, null, s.default.createElement(c.I18nextProvider, {
                i18n: g.localisation.i18nInstance
            }, s.default.createElement(l.Wrapper, {
                className: "userRoleSwitcher"
            }, P && s.default.createElement(s.default.Fragment, null, s.default.createElement(d.Logo, {
                text: (0,
                g.getRoleInitials)(A),
                isCorporateRole: (0,
                g.isCorporateRole)(A),
                onClick: B,
                onKeyPress: (0,
                g.onEnterKeyPress)(B),
                isMainToggle: !0,
                tabIndex: 0
            }), O && s.default.createElement(d.Menu, {
                onOutsideClick: D
            }, s.default.createElement(p.CurrentRole, {
                role: A,
                onClick: D
            }), s.default.createElement(d.Divider, null), s.default.createElement(p.Links, {
                role: A,
                locale: e.locale
            }), s.default.createElement(d.Divider, null), (null == N ? void 0 : N.length) > 0 && s.default.createElement(s.default.Fragment, null, s.default.createElement(p.RoleList, {
                roles: N,
                onRoleSelected: function(e) {
                    var t, n, r;
                    (0,
                    g.sendAnalyticsUserAction)(m(m(m({
                        actionType: g.AnalyticsUserActionType.SWITCH_ROLE,
                        roleSwitch: e.type
                    }, (0,
                    g.isCorporateRole)(e) && {
                        activeCompany: null == e || null === (t = e.name) || void 0 === t ? void 0 : t.businessName
                    }), (0,
                    g.isCorporateRole)(e) && {
                        activeCompanyVat: null == e ? void 0 : e.businessId
                    }), (0,
                    g.isCorporateRole)(e) && {
                        privileges: null == e || null === (n = e.decodedToken) || void 0 === n || null === (r = n.role) || void 0 === r ? void 0 : r.privileges
                    })),
                    F(e),
                    D()
                }
            }), s.default.createElement(d.Divider, null)), s.default.createElement(p.Logout, {
                onClick: G,
                onKeyPress: (0,
                g.onEnterKeyPress)(G),
                tabIndex: 0
            }))), M && s.default.createElement(d.Login, {
                onClick: function() {
                    g.sessionStorageService.removeFromStorage(g.StorageKey.ANONYMOUS_TOKENS),
                    v(!0)
                },
                darkVariant: e.businessTheme
            }))))
        }
          , b = (0,
        s.memo)(y);
        t.MainView = b
    },
    s4bR: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Logout = void 0;
        var o = r(n("qwB3"))
          , i = n("l+CB")
          , a = n("j/s1")
          , s = n("jp49")
          , c = n("liE7");
        t.Logout = function(e) {
            var t = Object.assign({}, e)
              , n = (0,
            a.useTheme)()
              , r = (0,
            c.useTranslation)().t;
            return o.default.createElement(s.LogoutContainer, t, o.default.createElement(i.LogoutIcon, {
                color: n.xyz.color.signalRed,
                width: "1.5em",
                height: "1.5em"
            }), o.default.createElement(s.LogoutText, {
                size: i.BodySize.Three
            }, r("logout")))
        }
    },
    sEzv: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Services = void 0;
        var o = r(n("97Jx"))
          , i = r(n("qwB3"))
          , a = n("DrGY")
          , s = n("jp49")
          , c = [{
            text: "Muuttoilmoitus",
            href: "https://",
            target: "_blank"
        }, {
            text: "Lähetyksen seuranta ja ohjaus",
            href: "https://",
            target: "_blank"
        }, {
            text: "Omat tiedot",
            href: "https://",
            target: "_blank"
        }, {
            text: "Verkkokauppa",
            href: "https://",
            target: "_blank"
        }, {
            text: "Osoitekirja",
            href: "https://",
            target: "_blank"
        }, {
            text: "Alennuskoodit",
            href: "https://",
            target: "_blank"
        }];
        t.Services = function() {
            return i.default.createElement(i.default.Fragment, null, i.default.createElement(s.LabelWrapper, null), i.default.createElement(s.ListWrapper, null, i.default.createElement(s.ListContainer, null, c.map((function(e, t) {
                return i.default.createElement(a.Link, (0,
                o.default)({
                    key: t
                }, e))
            }
            )))))
        }
    },
    szVb: function(e, t, n) {
        n("/vb6")("species")
    },
    t1en: function(e, t, n) {
        "use strict";
        var r = n("VtSi");
        n("3yYM");
        var o = this && this.__awaiter || function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.checkCacheSupport = t.clearCachedFeatureData = t.clearInvalidCaches = t.cacheRequest = t.getResource = t.CacheDirective = t.setupCache = void 0;
        var i, a = n("vISZ");
        t.setupCache = function(e) {
            return o(void 0, void 0, void 0, r.mark((function n() {
                var o, i, s, c;
                return r.wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2,
                            t.checkCacheSupport();
                        case 2:
                            if (o = n.sent,
                            e && o) {
                                n.next = 5;
                                break
                            }
                            return n.abrupt("return");
                        case 5:
                            if (i = e.prefix,
                            s = e.version,
                            c = e.name,
                            !(i && s && c)) {
                                n.next = 14;
                                break
                            }
                            if (!c.startsWith(i)) {
                                n.next = 13;
                                break
                            }
                            return n.next = 10,
                            t.clearInvalidCaches(i, c);
                        case 10:
                            return n.abrupt("return", c);
                        case 13:
                            a.logError("[posti-feature-loader cache] Invalid cache name ".concat(c, " configured, skipping using the cache.\n        Cache name should start with the prefix in order to invalidate old versions properly"));
                        case 14:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            )))
        }
        ,
        function(e) {
            e.CACHE_FIRST = "cache-first",
            e.CACHE_ONLY = "cache-only",
            e.FETCH_FIRST = "fetch-first",
            e.FETCH_ONLY = "fetch-only"
        }(i = t.CacheDirective || (t.CacheDirective = {}));
        var s = function(e, t, n) {
            return o(void 0, void 0, void 0, r.mark((function o() {
                var i, a;
                return r.wrap((function(r) {
                    for (; ; )
                        switch (r.prev = r.next) {
                        case 0:
                            if ("string" != typeof n) {
                                r.next = 9;
                                break
                            }
                            return r.next = 3,
                            caches.open(n);
                        case 3:
                            return i = r.sent,
                            r.next = 6,
                            i.match(e);
                        case 6:
                            if (void 0 === (a = r.sent)) {
                                r.next = 9;
                                break
                            }
                            return r.abrupt("return", a[t]());
                        case 9:
                            throw new Error("Not found - cache miss for ".concat("string" == typeof e ? e : e.url));
                        case 10:
                        case "end":
                            return r.stop()
                        }
                }
                ), o)
            }
            )))
        }
          , c = function(e, t, n, i) {
            return o(void 0, void 0, void 0, r.mark((function o() {
                var s, c, u;
                return r.wrap((function(r) {
                    for (; ; )
                        switch (r.prev = r.next) {
                        case 0:
                            return s = "string" == typeof e ? e : e.url,
                            r.next = 3,
                            fetch(e).catch((function(e) {
                                throw e.message += ": ".concat(s),
                                e
                            }
                            ));
                        case 3:
                            if (c = r.sent,
                            "string" != typeof i || !n || !c.ok) {
                                r.next = 18;
                                break
                            }
                            return r.prev = 5,
                            r.next = 8,
                            caches.open(i);
                        case 8:
                            return u = r.sent,
                            r.next = 11,
                            u.put(e, c.clone());
                        case 11:
                            r.next = 16;
                            break;
                        case 13:
                            r.prev = 13,
                            r.t0 = r.catch(5),
                            a.logWarn("[posti-feature-loader cache] Failed to cache ".concat(s), r.t0);
                        case 16:
                            r.next = 21;
                            break;
                        case 18:
                            if (c.ok) {
                                r.next = 21;
                                break
                            }
                            throw new Error("".concat(c.status, " ").concat(c.statusText, ": ").concat(s));
                        case 21:
                            return r.abrupt("return", c[t]());
                        case 22:
                        case "end":
                            return r.stop()
                        }
                }
                ), o, null, [[5, 13]])
            }
            )))
        };
        t.getResource = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.cacheName
              , u = t.cacheResponse
              , l = void 0 === u || u
              , f = t.dataType
              , d = void 0 === f ? "text" : f
              , p = t.caching
              , g = void 0 === p ? i.CACHE_FIRST : p;
            return o(void 0, void 0, void 0, r.mark((function t() {
                var o, u, f;
                return r.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            o = "string" == typeof e ? e : e.url,
                            t.t0 = g,
                            t.next = t.t0 === i.CACHE_FIRST ? 4 : t.t0 === i.FETCH_ONLY ? 11 : t.t0 === i.FETCH_FIRST ? 13 : t.t0 === i.CACHE_ONLY ? 20 : 22;
                            break;
                        case 4:
                            return t.next = 6,
                            s(e, d, n).catch((function(e) {
                                a.logWarn(e)
                            }
                            ));
                        case 6:
                            if (void 0 === (u = t.sent)) {
                                t.next = 10;
                                break
                            }
                            return a.logInfo("[posti-feature-loader cache] Using cached response for ".concat(o)),
                            t.abrupt("return", u);
                        case 10:
                            a.logInfo("[posti-feature-loader cache] Cache miss or cache failure. Falling back to fetch for ".concat(o));
                        case 11:
                            return a.logInfo("[posti-feature-loader cache] Fetching ".concat(o, " without fallback")),
                            t.abrupt("return", c(e, d, l, n));
                        case 13:
                            return t.next = 15,
                            c(e, d, l, n).catch((function(e) {
                                a.logWarn(e)
                            }
                            ));
                        case 15:
                            if (void 0 === (f = t.sent)) {
                                t.next = 19;
                                break
                            }
                            return a.logInfo("[posti-feature-loader cache] Using fetched response for ".concat(o)),
                            t.abrupt("return", f);
                        case 19:
                            a.logInfo("[posti-feature-loader cache] Failed to fetch. Falling back to cache for ".concat(o));
                        case 20:
                            return a.logInfo("[posti-feature-loader cache] Trying to get ".concat(o, " from cache without fallback")),
                            t.abrupt("return", s(e, d, n));
                        case 22:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))
        }
        ,
        t.cacheRequest = function(e, n) {
            return o(void 0, void 0, void 0, r.mark((function o() {
                return r.wrap((function(r) {
                    for (; ; )
                        switch (r.prev = r.next) {
                        case 0:
                            t.getResource(e, {
                                cacheName: n,
                                cacheResponse: !0,
                                caching: i.CACHE_FIRST
                            });
                        case 1:
                        case "end":
                            return r.stop()
                        }
                }
                ), o)
            }
            )))
        }
        ,
        t.clearInvalidCaches = function(e, n) {
            return o(void 0, void 0, void 0, r.mark((function o() {
                var i;
                return r.wrap((function(r) {
                    for (; ; )
                        switch (r.prev = r.next) {
                        case 0:
                            return r.next = 2,
                            t.checkCacheSupport();
                        case 2:
                            if (!r.sent) {
                                r.next = 8;
                                break
                            }
                            return r.next = 6,
                            caches.keys();
                        case 6:
                            return i = r.sent,
                            r.abrupt("return", Promise.all(i.map((function(t) {
                                if (t.startsWith(e) && t !== n)
                                    return a.logInfo("[posti-feature-loader cache] Clearing previous cache versions due to version update"),
                                    caches.delete(t).catch((function(e) {
                                        return a.logError(e)
                                    }
                                    ))
                            }
                            ))));
                        case 8:
                        case "end":
                            return r.stop()
                        }
                }
                ), o)
            }
            )))
        }
        ,
        t.clearCachedFeatureData = function(e) {
            return o(void 0, void 0, void 0, r.mark((function n() {
                return r.wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2,
                            t.checkCacheSupport();
                        case 2:
                            if (!n.sent) {
                                n.next = 5;
                                break
                            }
                            return n.abrupt("return", caches.delete(e));
                        case 5:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            )))
        }
        ,
        t.checkCacheSupport = function() {
            return o(void 0, void 0, void 0, r.mark((function e() {
                return r.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if ("caches"in window) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 2:
                            return e.prev = 2,
                            e.next = 5,
                            caches.keys();
                        case 5:
                            e.next = 11;
                            break;
                        case 7:
                            return e.prev = 7,
                            e.t0 = e.catch(2),
                            a.logError(e.t0),
                            e.abrupt("return", !1);
                        case 11:
                            return e.abrupt("return", !0);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[2, 7]])
            }
            )))
        }
    },
    th6P: function(e, t, n) {
        n("/vb6")("unscopables")
    },
    uv78: function(e, t, n) {
        var r = n("nGXB")
          , o = n("T/ei")
          , i = n("Opzy")
          , a = Object.isFrozen;
        r({
            target: "Object",
            stat: !0,
            forced: o((function() {
                a(1)
            }
            ))
        }, {
            isFrozen: function(e) {
                return !i(e) || !!a && a(e)
            }
        })
    },
    vISZ: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.unmountFromDOM = t.isValidMessage = t.logWarn = t.logInfo = t.logError = void 0;
        var r = n("vx//")
          , o = n("ITvT");
        t.logError = function() {
            var e;
            if (r.config.debug)
                return (e = console).error.apply(e, arguments)
        }
        ,
        t.logInfo = function() {
            var e;
            if (r.config.debug)
                return (e = console).info.apply(e, arguments)
        }
        ,
        t.logWarn = function() {
            var e;
            if (r.config.debug)
                return (e = console).warn.apply(e, arguments)
        }
        ,
        t.isValidMessage = function(e, t, n) {
            var r, i, a = (null === (r = e.data) || void 0 === r ? void 0 : r.sender) === t && (null === (i = e.data) || void 0 === i ? void 0 : i.receiver) === n;
            return (o.isLocalhost() || e.origin === window.location.origin && o.ALLOWED_FEATURE_ORIGIN.test(e.origin)) && a
        }
        ,
        t.unmountFromDOM = function(e) {
            var t;
            null === (t = e.parentElement) || void 0 === t || t.removeChild(e)
        }
    },
    "vx//": function(e, t, n) {
        "use strict";
        var r = n("VrFO")
          , o = n("Y9Ll");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.config = void 0;
        var i = function() {
            function e() {
                r(this, e),
                this._debug = !1
            }
            return o(e, [{
                key: "debug",
                get: function() {
                    return this._debug
                },
                set: function(e) {
                    this._debug = e
                }
            }]),
            e
        }();
        t.config = new i
    },
    wEF6: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Menu = void 0;
        var o = r(n("qwB3"))
          , i = n("Q0bk")
          , a = n("l+CB");
        t.Menu = function(e) {
            var t = e.children
              , n = e.onOutsideClick;
            return o.default.createElement(a.OutsideClick, {
                onOutsideClick: n,
                style: {
                    position: "absolute",
                    top: "4rem",
                    zIndex: 10,
                    right: 0
                }
            }, o.default.createElement(i.Container, null, t))
        }
    },
    xDkV: function(e, t, n) {
        var r = n("nGXB")
          , o = n("Opzy")
          , i = n("hr1O").onFreeze
          , a = n("JIX3")
          , s = n("T/ei")
          , c = Object.seal;
        r({
            target: "Object",
            stat: !0,
            forced: s((function() {
                c(1)
            }
            )),
            sham: !a
        }, {
            seal: function(e) {
                return c && o(e) ? c(i(e)) : e
            }
        })
    },
    xgHz: function(e, t, n) {
        n("/vb6")("hasInstance")
    },
    yzeg: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.digestText = void 0;
        var o = r(n("VtSi"))
          , i = r(n("cbiG"))
          , a = n("YCZe")
          , s = function(e) {
            if ((0,
            a.getWindow)().TextEncoder)
                return (new TextEncoder).encode(e);
            var t = unescape(encodeURIComponent(e));
            return new Uint8Array(t.length).map((function(e, n) {
                return t.charCodeAt(n)
            }
            ))
        }
          , c = function(e) {
            var t = (0,
            a.getWindow)()
              , n = (null == t ? void 0 : t.msCrypto) || (null == t ? void 0 : t.crypto);
            if (!n)
                throw new Error("[Role Switcher]: Crypto library is unavailable, maybe due to SSR context");
            var r = n.subtle.digest("SHA-256", e);
            return r.then ? r : void 0 !== r.oncomplete ? r.result ? Promise.resolve(r.result) : new Promise((function(e) {
                r.oncomplete = function(t) {
                    return e(t.target.result)
                }
            }
            )) : void (0,
            a.logError)("[Role Switcher]: Unknown response type from the crypto operation", r)
        }
          , u = function() {
            var e = (0,
            i.default)(o.default.mark((function e(t) {
                var n;
                return o.default.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            c(s(t));
                        case 2:
                            return n = e.sent,
                            e.abrupt("return", Array.from(new Uint8Array(n)).map((function(e) {
                                return e.toString(16).padStart(2, "0")
                            }
                            )).join(""));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        t.digestText = u
    },
    z9Jo: function(e, t, n) {
        "use strict";
        var r = n("IGGJ");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.localStorageService = t.sessionStorageService = t.StorageService = t.StorageKey = void 0;
        var o, i = r(n("VrFO")), a = n("YCZe");
        t.StorageKey = o,
        function(e) {
            e.TOKENS = "TOKENS",
            e.ANONYMOUS_TOKENS = "ANONYMOUS_TOKENS",
            e.AVAILIBILITY_TEST = "TEST",
            e.CURRENT_ROLE = "CURRENT_ROLE",
            e.LOGGED_IN = "LOGGED_IN",
            e.PERSISTED_QUERY_PARAMS = "PERSISTED_QUERY_PARAMS",
            e.AUTHENTICATION_COMPLETED_AT = "AUTHENTICATION_COMPLETED_AT"
        }(o || (t.StorageKey = o = {}));
        var s = function e(t) {
            var n = this;
            (0,
            i.default)(this, e),
            this.storage = t,
            this.isAvailable = void 0,
            this.isStorageAvailable = function(e) {
                try {
                    return e.setItem(o.AVAILIBILITY_TEST, "test"),
                    e.removeItem(o.AVAILIBILITY_TEST),
                    !0
                } catch (t) {
                    return (0,
                    a.logError)("Storage service not available"),
                    !1
                }
            }
            ,
            this.getFromStorage = function(e) {
                if (n.isAvailable)
                    return n.storage.getItem(e)
            }
            ,
            this.setToStorage = function(e, t) {
                if (n.isAvailable)
                    return n.storage.setItem(e, t)
            }
            ,
            this.removeFromStorage = function(e) {
                if (n.isAvailable)
                    return n.storage.removeItem(e)
            }
            ,
            this.isAvailable = this.isStorageAvailable(t)
        };
        t.StorageService = s;
        var c = "undefined" != typeof window ? window : {}
          , u = c.sessionStorage
          , l = c.localStorage
          , f = new s(u);
        t.sessionStorageService = f;
        var d = new s(l);
        t.localStorageService = d
    },
    zQvS: function(e, t, n) {
        n("/vb6")("toStringTag")
    },
    zmrT: function(e, t, n) {
        n("nGXB")({
            target: "Object",
            stat: !0
        }, {
            is: n("n+/X")
        })
    },
    zmxB: function(e, t, n) {
        "use strict";
        var r = n("yWCo");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Divider = void 0;
        var o = r(n("j/s1"))
          , i = o.default.hr.withConfig({
            componentId: "sc-5yipj5-0"
        })((function(e) {
            var t = e.theme;
            return (0,
            o.css)(["display:flex;border:1px solid ", ";width:100%;"], t.xyz.color.neutralGray5)
        }
        ));
        t.Divider = i
    },
    zpld: function(e, t, n) {
        "use strict";
        var r = n("yWCo");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Anchor = t.StyledLabel = void 0;
        var o = r(n("j/s1"))
          , i = n("l+CB")
          , a = (0,
        o.default)(i.Label).withConfig({
            componentId: "kx83k1-0"
        })((function(e) {
            var t = e.theme
              , n = e.fontWeight;
            return (0,
            o.css)(["padding-left:", "rem;font-weight:", ";"], t.xyz.spacing.space1, n)
        }
        ));
        t.StyledLabel = a;
        var s = o.default.a.withConfig({
            componentId: "kx83k1-1"
        })((function(e) {
            var t = e.theme;
            return (0,
            o.css)(["display:flex;align-items:center;padding:0.75rem;margin:", "rem 0;border-radius:1.5rem;cursor:pointer;text-decoration:none;background-color:transparent;&:active,&:focus{text-decoration:none;background-color:", ";}@media (hover:hover){&:hover{text-decoration:none;background-color:", ";}}"], t.xyz.spacing.space1, t.xyz.color.neutralGray2, t.xyz.color.neutralGray2)
        }
        ));
        t.Anchor = s
    }
}]);