(this.webpackJsonpsite = this.webpackJsonpsite || []).push([
  [0],
  {
    124: function (e, a) {},
    128: function (e, a, t) {},
    129: function (e, a, t) {},
    134: function (e, a, t) {},
    136: function (e, a, t) {},
    137: function (e, a, t) {},
    138: function (e, a, t) {},
    139: function (e, a, t) {},
    140: function (e, a, t) {},
    141: function (e, a, t) {},
    142: function (e, a, t) {},
    143: function (e, a, t) {},
    144: function (e, a, t) {},
    145: function (e, a, t) {},
    146: function (e, a, t) {},
    147: function (e, a, t) {},
    148: function (e, a, t) {},
    149: function (e, a, t) {},
    150: function (e, a, t) {},
    151: function (e, a, t) {},
    152: function (e, a, t) {},
    153: function (e, a, t) {},
    154: function (e, a, t) {},
    155: function (e, a, t) {},
    156: function (e, a, t) {},
    157: function (e, a, t) {},
    158: function (e, a, t) {},
    159: function (e, a, t) {},
    160: function (e, a, t) {},
    161: function (e, a, t) {},
    162: function (e, a, t) {},
    163: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(1),
        r = t.n(n),
        o = t(18),
        i = t.n(o),
        l = (t(89), t(6)),
        s = t(12),
        c = (t(41), t(90), t(11)),
        m = function (e) {
          var a = e.path,
            t = e.className,
            n = e.background;
          return (
            <c.b to={{ pathname: a, state: { background: n } }} className={t}>
              {e.children}
            </c.b>
          );
        },
        u = t(21),
        d = t(77),
        h = t.n(d)()("https://blaseball.com", { upgrade: !1, transports: ["websocket"] }),
        E = r.a.createContext({
          sim: void 0,
          standings: void 0,
          season: void 0,
          schedule: void 0,
          tomorrowSchedule: void 0,
          postseason: {
            playoffs: void 0,
            matchups: void 0,
            round: void 0,
            tomorrowMatchups: void 0,
            tomorrowRound: void 0,
          },
        }),
        p = function (e) {
          var a = e.children,
            t = Object(n.useState)({
              sim: void 0,
              standings: void 0,
              season: void 0,
              schedule: void 0,
              tomorrowSchedule: void 0,
              postseason: {
                playoffs: void 0,
                matchups: void 0,
                round: void 0,
                tomorrowMatchups: void 0,
                tomorrowRound: void 0,
              },
            }),
            o = Object(l.a)(t, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(function () {
              return (
                h.on("gameDataUpdate", function (e) {
                  s(function (a) {
                    return Object(u.a)({}, a, {}, e);
                  });
                }),
                function () {
                  h.off("gameDataUpdate");
                }
              );
            }, []),
            (<E.Provider value={i}>{a}</E.Provider>)
          );
        };
      p.context = E;
      var f = p,
        A = t(3),
        v = t.n(A),
        g = t(5),
        y = (t(13), "https://blaseball.com"),
        b = function (e) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return fetch(e, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: a,
          });
        };
      function N() {
        return T.apply(this, arguments);
      }
      function T() {
        return (T = Object(g.a)(
          v.a.mark(function e() {
            var a, t;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/globalEvents"));
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
                    case 6:
                      return (t = e.sent), e.abrupt("return", t);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function S() {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = Object(g.a)(
          v.a.mark(function e() {
            var a, t;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/offseasonSetup"));
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
                    case 6:
                      return (t = e.sent), e.abrupt("return", t);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function B(e) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = Object(g.a)(
          v.a.mark(function e(a) {
            var t, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/offseasonRecap?season=").concat(a))
                      );
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (n = e.sent), e.abrupt("return", n);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function I(e) {
        return k.apply(this, arguments);
      }
      function k() {
        return (k = Object(g.a)(
          v.a.mark(function e(a) {
            var t, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/bonusResults?ids=").concat(a));
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (n = e.sent), e.abrupt("return", n);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function C(e) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = Object(g.a)(
          v.a.mark(function e(a) {
            var t, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/decreeResults?ids=").concat(a));
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (n = e.sent), console.log(a), e.abrupt("return", n);
                    case 11:
                      (e.prev = 11), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 11]]
            );
          })
        )).apply(this, arguments);
      }
      function G(e) {
        return L.apply(this, arguments);
      }
      function L() {
        return (L = Object(g.a)(
          v.a.mark(function e(a) {
            var t, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/team?id=").concat(a));
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (n = e.sent), e.abrupt("return", n);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function D(e) {
        return M.apply(this, arguments);
      }
      function M() {
        return (M = Object(g.a)(
          v.a.mark(function e(a) {
            var t, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/players?ids=").concat(a));
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (n = e.sent), e.abrupt("return", n);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      var P = {
          id: "",
          email: "",
          isSignedIn: !1,
          coins: 0,
          isFetching: !0,
          favoriteTeam: void 0,
          votes: 1,
          favoriteTeamInfo: null,
          maxBetTier: 0,
          dailyCoinsTier: 0,
          lastActive: Date.now(),
          unlockedShop: !1,
          unlockedElection: !1,
          peanuts: 10,
          squirrels: 0,
        },
        Q = { user: P, initUser: function () {}, clearUser: function () {}, refreshUser: function () {} },
        W = Object(n.createContext)(Q),
        j = function (e, a) {
          var t = Object(u.a)({}, e, {
            id: e._id,
            isFetching: !1,
            isSignedIn: !(!e || !e.email),
            favoriteTeamInfo: a.favoriteTeamInfo,
          });
          return (
            t.votes || (t.votes = 0),
            void 0 === t.maxBetTier && (t.maxBetTier = 0),
            void 0 === t.dailyCoinsTier && (t.dailyCoinsTier = 0),
            void 0 === t.unlockedElection && (t.unlockedElection = !1),
            void 0 === t.unlockedShop && (t.unlockedShop = !1),
            void 0 === t.peanuts && (t.peanuts = 0),
            void 0 === t.squirrels && (t.squirrels = 0),
            t
          );
        },
        x = function (e) {
          var a = e.children,
            t = Object(n.useState)(P),
            o = Object(l.a)(t, 2),
            i = o[0],
            s = o[1],
            c = function () {
              h.emit("getUserData");
            },
            m = Object(n.useCallback)(
              Object(g.a)(
                v.a.mark(function e() {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/api/getUser", { credentials: "include" })
                              .then(function (e) {
                                return e.json();
                              })
                              .then(
                                (function () {
                                  var e = Object(g.a)(
                                    v.a.mark(function e(a) {
                                      var t;
                                      return v.a.wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                (((t = j(a, i)).isFetching = !1),
                                                void 0 === t.favoriteTeam || i.favoriteTeamInfo)
                                              ) {
                                                e.next = 6;
                                                break;
                                              }
                                              return (e.next = 5), G(t.favoriteTeam);
                                            case 5:
                                              t.favoriteTeamInfo = e.sent;
                                            case 6:
                                              s(t), h.emit("setUserId", { userId: (t && t._id) || "" }), c();
                                            case 9:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  );
                                  return function (a) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )
                              .catch(function (e) {
                                var a = Object(u.a)({}, i, { isFetching: !1 });
                                s(a), console.log(e);
                              })
                          );
                        case 2:
                          return e.abrupt("return", null);
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              []
            ),
            d = Object(n.useCallback)(
              Object(g.a)(
                v.a.mark(function e() {
                  var a;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (a = i.favoriteTeam), (e.next = 3), G(a);
                        case 3:
                          return (i.favoriteTeamInfo = e.sent), e.abrupt("return", null);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [i]
            );
          Object(n.useEffect)(
            function () {
              void 0 === i.favoriteTeam || i.favoriteTeamInfo || d();
            },
            [i]
          ),
            Object(n.useEffect)(
              function () {
                m();
              },
              [m]
            ),
            Object(n.useEffect)(function () {
              return (
                h.on("userDataUpdate", function (e) {
                  s(function (a) {
                    return Object(u.a)({}, a, {}, e);
                  });
                }),
                function () {
                  h.off("userDataUpdate");
                }
              );
            }, []);
          var E = {
            user: i,
            initUser: m,
            clearUser: function () {
              h.emit("setUserId", { userId: "" }), s(P);
            },
            refreshUser: c,
          };
          return <W.Provider value={E}>{a}</W.Provider>;
        };
      x.context = W;
      var U = x,
        Y = r.a.createContext([]),
        H = function (e) {
          var a = e.children,
            t = Object(s.g)().pathname,
            o = Object(n.useState)({}),
            i = Object(l.a)(o, 2),
            c = i[0],
            m = i[1];
          return (
            Object(n.useEffect)(
              function () {
                fetch("/api/getActiveBets", { credentials: "include" })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    var a = {};
                    e &&
                      e.length &&
                      e.forEach(function (e) {
                        var t = e.gameId;
                        t && (a[t] || (a[t] = []), a[t].push(e));
                      }),
                      m(a);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              [t]
            ),
            (<Y.Provider value={c}>{a}</Y.Provider>)
          );
        };
      H.context = Y;
      var J = H;
      function F() {
        return (F =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function V(e, a) {
        if (null == e) return {};
        var t,
          n,
          r = (function (e, a) {
            if (null == e) return {};
            var t,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (t = o[n]), a.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (t = o[n]), a.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
        }
        return r;
      }
      var q = r.a.createElement(
          "style",
          { type: "text/css" },
          "\n\t.st0{fill:none;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;}\n"
        ),
        K = (
          <g id="base2" className="st0" transform="matrix(0.7071,-0.7071,0.7071,0.7071,-16.7558,95.4764)">
            <rect x={84.83} y={48.54} width={70.31} height={70.31} />
          </g>
        ),
        z = (
          <g id="base1" className="st0" transform="matrix(0.7071,-0.7071,0.7071,0.7071,-40.4706,152.625)">
            <rect x={141.95} y={105.74} width={70.31} height={70.31} />
          </g>
        ),
        Z = (
          <g id="base3" className="st0" transform="matrix(0.7071,-0.7071,0.7071,0.7071,-74.0296,71.6061)">
            <rect x={27.38} y={105.74} width={70.31} height={70.31} />
          </g>
        ),
        X = function (e) {
          var a = e.svgRef,
            t = e.title,
            n = V(e, ["svgRef", "title"]);
          return (
            <svg
              {...F(
                {
                  viewBox: "0 0 255 197",
                  xmlSpace: "preserve",
                  style: { enableBackground: "new 0 0 240 240" },
                  ref: a,
                },
                n
              )}
            >
              {t ? <title>{t}</title> : null}
              {q}
              {K}
              {z}
              {Z}
            </svg>
          );
        },
        _ = r.a.forwardRef(function (e, a) {
          return <X {...F({ svgRef: a }, e)} />;
        });
      t.p;
      function $(e) {
        var a,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.2;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))
          return (
            3 == (a = e.substring(1).split("")).length && (a = [a[0], a[0], a[1], a[1], a[2], a[2]]),
            "rgba(" + [((a = "0x" + a.join("")) >> 16) & 255, (a >> 8) & 255, 255 & a].join(",") + ",".concat(t, ")")
          );
        throw new Error("Bad Hex");
      }
      function ee() {
        var e = [0],
          a = new Date();
        if ((a.setMinutes(a.getMinutes() + 1, 0, 0), 0 == e.length)) return a;
        for (var t = !1; !t; ) {
          for (var n = a.getMinutes(), r = 0; r < e.length; r++)
            if (e[r] == n) {
              t = !0;
              break;
            }
          t || a.setMinutes(n + 1, 0, 0);
        }
        return a;
      }
      var ae,
        te = t(14),
        ne = t(80),
        re = t(17),
        oe = (t(128), t(129), t(27)),
        ie = t(55);
      !(function (e) {
        e[(e.GENERIC = 1)] = "GENERIC";
      })(ae || (ae = {}));
      var le = function (e) {
        var a = Object(s.f)(),
          t = Object(s.g)(),
          o = (t.state && t.state.background, e.isModal),
          i = e.className,
          l = e.children,
          c = e.dismissable,
          m = e.style,
          u = Object(n.useRef)(null),
          d = function () {
            document.body.classList.remove("noscroll"), a.goBack();
          };
        Object(n.useEffect)(function () {
          o && document.body.classList.add("noscroll");
          var e = function (e) {
            27 === e.keyCode && o && d();
          };
          return (
            window.addEventListener("keydown", e),
            function () {
              window.removeEventListener("keydown", e), document.body.classList.remove("noscroll");
            }
          );
        }, []);
        var h = Object(ie.b)({
            opacity: 1,
            transform: o ? "translate(-50%, -50%)" : "none",
            from: { opacity: 0, transform: o ? "translate(-50%, -40%)" : "none" },
          }),
          E = "Modal";
        switch (m) {
          case ae.GENERIC:
            E += " Modal--Generic";
        }
        var p = (
          <ie.a.div style={h} className={E + (o ? "" : " Modal--Static") + (i ? " ".concat(i) : "")} ref={u}>
            {c && o && (
              <button
                className="Modal-Close"
                onClick={function () {
                  return d();
                }}
              >
                <oe.d />
              </button>
            )}
            {l}
          </ie.a.div>
        );
        if (o) {
          return (
            <div
              className="Modal-Background"
              onClick={function (e) {
                !c || (u && u.current && u.current.contains(e.target)) || d();
              }}
            >
              {p}
            </div>
          );
        }
        return p;
      };
      le.defaultProps = { dismissable: !0, style: ae.GENERIC };
      var se = le,
        ce = t(16),
        me = t(24),
        ue = t(23),
        de = t(54),
        he =
          (t(134),
          function () {
            return (
              <div className="LoadingSpinner-Inline">
                <de.a />
              </div>
            );
          }),
        Ee = function () {
          return (
            <div className="LoadingSpinner">
              <de.a />
            </div>
          );
        };
      function pe(e, a) {
        return 0.5 === e
          ? Math.round(2 * a)
          : e < 0.5
          ? Math.round(a * (2 + 555e-6 * Math.pow(100 * (0.5 - e), 2.4135)))
          : Math.round(a * (2 - 335e-6 * Math.pow(100 * (e - 0.5), 2.045)));
      }
      var fe = function (e) {
          var a = Object(ce.useToasts)().addToast,
            t = Object(n.useContext)(U.context),
            o = t.user,
            i = t.refreshUser,
            c = Object(s.f)(),
            m = Object(n.useRef)(null),
            u = Object(s.h)().gameId,
            d = Object(n.useState)(0),
            h = Object(l.a)(d, 2),
            E = h[0],
            p = h[1],
            A = Object(n.useState)(""),
            v = Object(l.a)(A, 2),
            g = v[0],
            y = v[1],
            N = Object(n.useState)(void 0),
            T = Object(l.a)(N, 2),
            S = T[0],
            w = T[1],
            B = Object(n.useContext)(f.context),
            O = function (e) {
              var a = e.target.value;
              p(a);
            };
          if (
            (Object(n.useEffect)(function () {
              var e,
                a,
                t =
                  null === (e = B.schedule) || void 0 === e
                    ? void 0
                    : e.find(function (e) {
                        return u === e._id;
                      });
              void 0 === t &&
                (t =
                  null === (a = B.tomorrowSchedule) || void 0 === a
                    ? void 0
                    : a.find(function (e) {
                        return u === e._id;
                      })),
                t && (w(t), y(t.homeTeam));
            }, []),
            void 0 === S)
          )
            return <Ee />;
          var I = [
              {
                text: null === S || void 0 === S ? void 0 : S.homeTeamNickname,
                value: null === S || void 0 === S ? void 0 : S.homeTeam,
              },
              {
                text: null === S || void 0 === S ? void 0 : S.awayTeamNickname,
                value: null === S || void 0 === S ? void 0 : S.awayTeam,
              },
            ],
            k = ue.maxBetTiers[o.maxBetTier].amount,
            C = function () {
              return S ? (g === S.homeTeam ? S.homeOdds : S.awayOdds) : 0.5;
            };
          S && (g === S.homeTeam ? S.homeTeamNickname : S.awayTeamNickname),
            S && (g === S.homeTeam ? S.homeTeamColor : S.awayTeamColor);
          var R,
            G = (
              <span
                style={{
                  color: ((R = C()), R > 0.6 ? "#59bd42" : R > 0.5 ? "#93ed77" : R < 0.4 ? "#bf3f3f" : "#f28383"),
                }}
                className="Bet-Outcome-Winnings"
              >
                {Math.round(100 * C())}%
              </span>
            ),
            L = <span className="Bet-Outcome-Winnings">{pe(C(), E)}</span>,
            D = (
              <div className="Bet-Outcome-Wrapper">
                You'll have a {G} chance to win {L} coins.
              </div>
            );
          return (
            <se {...Object.assign({}, e, { className: "Bet" })}>
              <div className="Bet-Header">Place a Bet</div>
              <me.a
                className="Bet-Form"
                onSubmit={function (e) {
                  if ((e.preventDefault(), E > k)) a("Max bet is ".concat(k, "!"), { appearance: "error" });
                  else {
                    var t = { gameId: u, amount: E, userId: o._id, entityId: g, type: "winner", odds: C() };
                    b("/api/bet", JSON.stringify(t)).then(function (e) {
                      e.ok && e.status && 200 === e.status
                        ? (i(), a("Bet Placed", { appearance: "success" }), c.goBack())
                        : e.json().then(function (e) {
                            a(e.error || "Error", { appearance: "error" });
                          });
                    });
                  }
                }}
              >
                <div className="Bet-Form-Inputs">
                  <me.a.Group className="Bet-Form-Inputs-Right" controlId="amount">
                    <me.a.Group controlId="entityId">
                      <me.a.Label>
                        <div className="Bet-Form-Inputs-Label">Who will win the game?</div>
                      </me.a.Label>
                      <me.a.Control
                        as="select"
                        name="entityId"
                        ref={m}
                        onChange={function (e) {
                          var a = e.target.value;
                          y(a);
                        }}
                      >
                        {I.map(function (e, a) {
                          return (
                            <option key={a} value={e.value}>
                              {e.text}
                            </option>
                          );
                        })}
                      </me.a.Control>
                    </me.a.Group>
                    <me.a.Label>
                      <div className="Bet-Form-Inputs-Label">How much do you want to wager?</div>
                    </me.a.Label>
                    <div className="Bet-Form-Inputs-Amount">
                      <div className="Bet-Coin-Wrapper">
                        <re.k className="Bet-Coin-Icon" />
                        {o.coins}
                      </div>
                      <me.a.Label>
                        <div className="Bet-Form-Inputs-Amount-MaxBet">Max Bet: {k}</div>
                      </me.a.Label>
                      <me.a.Control type="number" value={E} onChange={O} />
                      <me.a.Control type="range" min={0} max={Math.min(o.coins, k)} value={E} onChange={O} step="1" />
                    </div>
                  </me.a.Group>
                </div>
                {D}
                <div className="Bet-Submit-Wrapper">
                  <te.a className="Bet-Submit" type="submit" variant="success">
                    Submit
                  </te.a>
                </div>
              </me.a>
            </se>
          );
        },
        Ae = (t(136), t(20));
      function ve(e) {
        var a = e.type,
          t = null;
        switch (a) {
          case 0:
            t = <Ae.e />;
            break;
          case 1:
            t = <Ae.c />;
            break;
          case 2:
            t = <Ae.a />;
            break;
          case 3:
            t = <Ae.f />;
            break;
          case 4:
            t = <Ae.g />;
            break;
          case 5:
            t = <Ae.h />;
            break;
          case 6:
            t = <Ae.d />;
            break;
          case 7:
            t = <Ae.i />;
            break;
          case 8:
            t = <Ae.j />;
            break;
          case 9:
            t = <Ae.k />;
            break;
          case 10:
            t = <re.g />;
            break;
          case 11:
            t = <re.a />;
        }
        return (
          <div className="WeatherIcon" style={{ color: ge(a), background: ye(a) }}>
            {t}
          </div>
        );
      }
      function ge(e) {
        switch (e) {
          case 0:
            return "#000000";
          case 1:
            return "#fffec4";
          case 2:
            return "#737373";
          case 3:
            return "#0727a8";
          case 4:
            return "#e0dac3";
          case 5:
            return "#ffffff";
          case 6:
            return "#235917";
          case 7:
            return "#3c6cba";
          case 8:
            return "#fff98a";
          case 9:
            return "#ff5cab";
          case 10:
            return "#423822";
          case 11:
            return "#8e5fad";
        }
        return "#ffffff";
      }
      function ye(e) {
        switch (e) {
          case 0:
            return "#67678a";
          case 1:
            return "#db7900";
          case 2:
            return "#cfcfcf";
          case 3:
            return "#348e9e";
          case 4:
            return "#877652";
          case 5:
            return "#68969e";
          case 6:
            return "#92ad58";
          case 7:
            return "#002f3b";
          case 8:
            return "#ff94ff";
          case 9:
            return "#b50027";
          case 10:
            return "#c4aa70";
          case 11:
            return "#45235e";
        }
        return "#e1e1e1";
      }
      function be(e) {
        return e.homeScore;
      }
      function Ne(e) {
        return e.awayScore;
      }
      function Te(e) {
        var a = Object(n.useContext)(f.context),
          t = (function (e, a) {
            var t, n, r, o;
            if (a) {
              for (var i in a.wins) e.homeTeam === i && (t = a.wins[i]), e.awayTeam === i && (r = a.wins[i]);
              for (var l in a.losses) e.homeTeam === l && (n = a.losses[l]), e.awayTeam === l && (o = a.losses[l]);
            }
            return {
              homeTeamName: e.homeTeamNickname,
              homeTeamWins: void 0 === t ? "" : t.toString(),
              homeTeamLosses: void 0 === n ? "" : n.toString(),
              homeTeamScore: be(e).toString(),
              awayTeamName: e.awayTeamNickname,
              awayTeamWins: void 0 === r ? "" : r.toString(),
              awayTeamLosses: void 0 === o ? "" : o.toString(),
              awayTeamScore: Ne(e).toString(),
            };
          })(e.data, a.standings);
        return <Se data={e.data} metaInfo={t} />;
      }
      function Se(e) {
        var a,
          t,
          o,
          i = e.data,
          l = e.metaInfo,
          c = Object(n.useContext)(U.context).user,
          u = Object(n.useContext)(J.context),
          d = {
            started: (a = i).gameStart,
            complete: a.gameComplete,
            shame: a.shame,
            inning: a.inning,
            topOfInning: a.topOfInning,
            outs: a.halfInningOuts,
            balls: a.atBatBalls,
            strikes: a.atBatStrikes,
            strikesNeeded: a.topOfInning ? a.awayStrikes : a.homeStrikes,
            weather: a.weather,
          },
          h = (function (e) {
            var a, t;
            if (e.complete) (t = "Complete"), (a = "Final" + (e.inning <= 9 ? "" : " (".concat(e.inning + 1, ")")));
            else if (e.started)
              if (e.shame) (a = "Shame"), (t = "Shame");
              else {
                t = "Live";
                var n = e.topOfInning ? "\u25b2" : "\u25bc";
                a = "Live - ".concat(e.inning + 1, " ").concat(n);
              }
            else (a = "Upcoming"), (t = "Upcoming");
            return (
              <div className="GameWidget-StatusBar">
                <div className={"GameWidget-Status GameWidget-Status--".concat(t)}>{a}</div>
                {e.started ? <ve type={e.weather} /> : null}
              </div>
            );
          })(d),
          E = (function (e) {
            for (var a = [], t = 0; t < 3; t++)
              a.push(
                <div className="GameWidget-Outs-Dots" key={t}>
                  {t < e.balls ? "\u25cf" : "\u25cb"}
                </div>
              );
            for (var n = [], o = 0; o < e.strikesNeeded - 1; o++)
              n.push(
                <div className="GameWidget-Outs-Dots" key={o}>
                  {o < e.strikes ? "\u25cf" : "\u25cb"}
                </div>
              );
            for (var i = [], l = 0; l < 2; l++)
              i.push(
                <div className="GameWidget-Outs-Dots" key={l}>
                  {l < e.outs ? "\u25cf" : "\u25cb"}
                </div>
              );
            return (
              <r.a.Fragment>
                <div className="GameWidget-Outs-Row">
                  <div className="GameWidget-Outs-Label">Balls</div>
                  <div className="GameWidget-Outs-DotList">{a}</div>
                </div>
                <div className="GameWidget-Outs-Row">
                  <div className="GameWidget-Outs-Label">Strikes</div>
                  <div className="GameWidget-Outs-DotList">{n}</div>
                </div>
                <div className="GameWidget-Outs-Row">
                  <div className="GameWidget-Outs-Label">Outs</div>
                  <div className="GameWidget-Outs-DotList">{i}</div>
                </div>
              </r.a.Fragment>
            );
          })(d),
          p = i.topOfInning ? i.awayTeamColor : i.homeTeamColor,
          f = i.topOfInning ? i.homeTeamColor : i.awayTeamColor,
          A = be(i),
          v = Ne(i);
        function g() {
          return i.homeScore > i.awayScore ? i.homeTeam : i.awayTeam;
        }
        function y() {
          return i.homeScore > i.awayScore ? i.awayTeam : i.homeTeam;
        }
        function b(e) {
          return e === i.homeTeam ? i.homeTeamNickname : e === i.awayTeam ? i.awayTeamNickname : "Null Team";
        }
        function N(e) {
          return e === i.homeTeam ? i.homeTeamColor : e === i.awayTeam ? i.awayTeamColor : "Null Color";
        }
        (t = A > v && i.gameComplete ? { border: 2, borderColor: "#fffffff", borderStyle: "solid" } : {}),
          (o = v > A && i.gameComplete ? { border: 2, borderColor: "#fffffff", borderStyle: "solid" } : {});
        var T = (function (e) {
            for (
              var a = {
                  onFirst: !1,
                  onSecond: !1,
                  onThird: !1,
                  playerOnFirst: void 0,
                  playerOnSecond: void 0,
                  playerOnThird: void 0,
                },
                t = 0;
              t < e.baserunnerCount;
              t++
            ) {
              var n = e.baseRunners[t];
              switch (e.basesOccupied[t]) {
                case 0:
                  (a.onFirst = !0), (a.playerOnFirst = n);
                  break;
                case 1:
                  (a.onSecond = !0), (a.playerOnSecond = n);
                  break;
                case 2:
                  (a.onThird = !0), (a.playerOnThird = n);
              }
            }
            return a;
          })(i),
          S = "";
        T.onFirst && (S += " first"), T.onSecond && (S += " second"), T.onThird && (S += " third");
        var w = (
            <div className={"GameWidget-Bases" + S}>
              <_ width="100%" height="100%" />
            </div>
          ),
          B = <div className="GameWidget-Outs">{E}</div>,
          O =
            d.complete || !d.started ? (
              <div />
            ) : (
              <div className="GameWidget-AtBat">
                <div className="GameWidget-PlayerLine">
                  <div className="GameWidget-PlayerStatusIcon GameWidget-PlayerStatusIcon--Pitching" />
                  <div className="GameWidget-PlayerStatusLabel">Pitching</div>
                  <div className="GameWidget-PlayerLineNameWrapper" style={{ background: $(f, 0.5) }}>
                    <div className="GameWidget-PlayerLineName">
                      {i.topOfInning ? i.homePitcherName : i.awayPitcherName}
                    </div>
                  </div>
                </div>
                <div className="GameWidget-PlayerLine">
                  <div className="GameWidget-PlayerStatusIcon GameWidget-PlayerStatusIcon--Batting" />
                  <div className="GameWidget-PlayerStatusLabel">Batting</div>
                  <div className="GameWidget-PlayerLineNameWrapper" style={{ background: $(p, 0.5) }}>
                    <div className="GameWidget-PlayerLineName">
                      {(i.topOfInning ? i.awayBatterName : i.homeBatterName) || "-"}
                    </div>
                  </div>
                </div>
              </div>
            ),
          I = Object(s.g)(),
          k = null;
        if (d.started && c.isSignedIn) k = null;
        else if (d.started) k = <div />;
        else if (c.isSignedIn) {
          var C,
            R = u[i._id],
            G = (null === R || void 0 === R ? void 0 : R.length) || 0,
            L = G > 0 ? R[0] : void 0;
          void 0 !== L && (C = L.entityId === i.homeTeam ? i.homeTeamName : i.awayTeamName),
            (k = (
              <ne.a className="GameWidget-Button-Centered">
                {G > 0 ? (
                  <div className="GameWidget-UpcomingBet">
                    <re.k /> {G > 0 ? "".concat(L.amount, " on ").concat(C) : "No active bets"}
                  </div>
                ) : (
                  <te.a className="GameWidget-Button" variant="success">
                    <m background={I} path={"/bet/".concat(i._id)}>
                      Place a Bet
                    </m>
                  </te.a>
                )}
              </ne.a>
            ));
        } else
          k = (
            <a href="/login">
              <te.a className="GameWidget-Button" variant="success">
                Login to Play
              </te.a>
            </a>
          );
        var D = null,
          M = null;
        if (d.started) {
          var P = u[i._id],
            Q = ((null === P || void 0 === P ? void 0 : P.length) || 0) > 0 ? P[0] : void 0,
            W = void 0 !== Q ? pe(Q.odds, Q.amount) : 0;
          (D =
            void 0 !== Q && Q.entityId === i.homeTeam ? (
              <div className="GameWidget-ScoreBet">
                <div className="GameWidget-ScoreBet-Bet">
                  <re.k />
                  <div className="GameWidget-ScoreBet-Amount">{Q.amount}</div>
                </div>
                <div className="GameWidget-ScoreBet-Winnings">
                  <div className="GameWidget-ScoreBet-Triangle" />
                  {W}
                </div>
              </div>
            ) : null),
            (M =
              void 0 !== Q && Q.entityId === i.awayTeam ? (
                <div className="GameWidget-ScoreBet">
                  <div className="GameWidget-ScoreBet-Bet">
                    <re.k />
                    <div className="GameWidget-ScoreBet-Amount">{Q.amount}</div>
                  </div>
                  <div className="GameWidget-ScoreBet-Winnings">
                    <div className="GameWidget-ScoreBet-Triangle" />
                    {W}
                  </div>
                </div>
              ) : null);
        }
        var j,
          x = null;
        if (d.complete) {
          var Y = u[i._id],
            H = ((null === Y || void 0 === Y ? void 0 : Y.length) || 0) > 0 ? Y[0] : void 0,
            F = g() === i.homeTeam ? i.homeOdds - i.awayOdds : i.awayOdds - i.homeOdds;
          x = (
            <div className="GameWidget-Outcome">
              <div className="GameWidget-Outcome-Blurb">
                The{" "}
                {(j = F) > 0.25
                  ? "heavily favored"
                  : j > 0
                  ? "favored"
                  : j < -0.25
                  ? "heavy underdog"
                  : j < 0
                  ? "underdog"
                  : ""}
                 
                <span
                  className="GameWidget-Outcome-Callout"
                  style={{ color: i.homeScore > i.awayScore ? i.homeTeamColor : i.awayTeamColor }}
                >
                  {i.homeScore > i.awayScore ? i.homeTeamNickname : i.awayTeamNickname}
                </span>
                 won the game.
              </div>
              {i.shame ? (
                <div className="GameWidget-Outcome-Blurb">
                  The  
                  <span className="GameWidget-Outcome-Callout" style={{ color: N(y()) }}>
                    {b(y())}
                  </span>
                   were <span className="GameWidget-Outcome-Callout"> shamed!</span>
                </div>
              ) : null}
              {void 0 !== H ? (
                <div className="GameWidget-Outcome-Blurb">
                  You bet{" "}
                  <span className="GameWidget-Outcome-Callout">
                    <re.k />
                     {H.amount}
                  </span>
                   on the  
                  <span className="GameWidget-Outcome-Callout" style={{ color: N(H.entityId) }}>
                    {b(H.entityId)}
                  </span>
                   and{" "}
                  {g() == H.entityId ? (
                    <span>
                      won{" "}
                      <span className="GameWidget-Outcome-Callout">
                        <re.k />
                         {pe(H.odds, H.amount)}
                      </span>
                      .
                    </span>
                  ) : (
                    <span>lost.</span>
                  )}
                </div>
              ) : null}
              {void 0 !== i.outcomes && i.outcomes.length > 0
                ? i.outcomes.map(function (e, a) {
                    return (
                      <div key={a} className="GameWidget-Outcome-Blurb">
                        {e}
                      </div>
                    );
                  })
                : null}
            </div>
          );
        } else
          x = d.started ? (
            <r.a.Fragment>
              <div className="GameWidget-Display-Visual">
                <div className="GameWidget-Display-Body">
                  {!d.complete && d.started && (
                    <r.a.Fragment>
                      {w}
                      {B}
                      {O}
                      <div className="GameWidget-Log">{i.lastUpdate}</div>
                    </r.a.Fragment>
                  )}
                </div>
              </div>
            </r.a.Fragment>
          ) : (
            <r.a.Fragment>
              <div className="GameWidget-Upcoming-Info">
                <div className="GameWidget-Upcoming-Header">Game Information</div>
                <div className="GameWidget-Upcoming-InfoBody">
                  <div className="GameWidget-Upcoming-Body">
                    <div className="GameWidget-Upcoming-Icon GameWidget-Upcoming-Icon--Pitcher" />
                    <div className="GameWidget-Upcoming-Label">PITCHERS</div>
                    <div className="GameWidget-Upcoming-Content">
                      <div className="GameWidget-PlayerLine">
                        <div
                          className="GameWidget-Upcoming-Pitchers-Wrapper"
                          style={{ background: $(i.awayTeamColor, 0.5) }}
                        >
                          <div className="GameWidget-PlayerLineName">{i.awayPitcherName}</div>
                        </div>
                      </div>
                      <div className="GameWidget-PlayerLine">
                        <div
                          className="GameWidget-Upcoming-Pitchers-Wrapper"
                          style={{ background: $(i.homeTeamColor, 0.5) }}
                        >
                          <div className="GameWidget-PlayerLineName">{i.homePitcherName}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="GameWidget-Upcoming-Body">
                    <Ae.b className="GameWidget-Upcoming-Icon" />
                    <div className="GameWidget-Upcoming-Label">WEATHER</div>
                    <div className="GameWidget-Upcoming-Weather">
                      <span className="GameWidget-Upcoming-WeatherLabel">
                        {(function (e) {
                          switch (e) {
                            case 0:
                              return "Void";
                            case 1:
                              return "Sunny";
                            case 2:
                              return "Overcast";
                            case 3:
                              return "Rainy";
                            case 4:
                              return "Sandstorm";
                            case 5:
                              return "Snowy";
                            case 6:
                              return "Acidic";
                            case 7:
                              return "Solar Eclipse";
                            case 8:
                              return "Glitter";
                            case 9:
                              return "Bloodwind";
                            case 10:
                              return "Peanuts";
                            case 11:
                              return "Lots of Birds";
                          }
                          return "";
                        })(d.weather)}
                      </span>
                      <ve type={d.weather} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="GameWidget-Upcoming-Bets">
                <div className="GameWidget-Upcoming-Header">Chances of Winning</div>
                <div className="GameWidget-Upcoming-Odds">
                  <div className="GameWidget-Upcoming-OddsTeam">
                    <div
                      className="GameWidget-Upcoming-Favorites-Team"
                      style={{ color: i.homeOdds > i.awayOdds ? i.homeTeamColor : i.awayTeamColor }}
                    >
                      {i.homeOdds > i.awayOdds ? i.homeTeamNickname : i.awayTeamNickname}
                    </div>
                    <div className="GameWidget-Upcoming-Favorites-Percentage">
                      {(i.homeOdds > i.awayOdds ? Math.round(100 * i.homeOdds) : Math.round(100 * i.awayOdds)) + "%"}
                    </div>
                  </div>
                  <div className="GameWidget-Upcoming-OddsTeam">
                    <div
                      className="GameWidget-Upcoming-Favorites-Team"
                      style={{ color: i.homeOdds > i.awayOdds ? i.awayTeamColor : i.homeTeamColor }}
                    >
                      {i.homeOdds > i.awayOdds ? i.awayTeamNickname : i.homeTeamNickname}
                    </div>
                    <div className="GameWidget-Upcoming-Favorites-Percentage">
                      {(i.homeOdds > i.awayOdds ? Math.round(100 * i.awayOdds) : Math.round(100 * i.homeOdds)) + "%"}
                    </div>
                  </div>
                </div>
                <div className="GameWidget-Upcoming-BetButtons">{k}</div>
              </div>
            </r.a.Fragment>
          );
        var V = null;
        d.started &&
          (V = (
            <div className="GameWidget-Log">
              <div className="GameWidget-Log-Header">Game Log</div>
              <div className="GameWidget-Log-Content">{i.lastUpdate}</div>
              {k}
            </div>
          ));
        var q = d.started ? "GameWidget-Full-Live" : "GameWidget-Full-Upcoming",
          K = i.isPostseason
            ? "Game ".concat(i.seriesIndex, " - Best of ").concat(i.seriesLength)
            : "Game ".concat(i.seriesIndex, " of ").concat(i.seriesLength);
        return (
          <div className={"GameWidget ".concat(d.complete ? "IsComplete" : "")}>
            <div className={q}>
              <div className="GameWidget-Header-Wrapper">
                <div className="GameWidget-Header">
                  {h}
                  <div className="GameWidget-ScoreLabel GameWidget-ScoreLabel--Series">{K}</div>
                </div>
                <div className="GameWidget-ScoreBacking">
                  <m background={I} path={"/team/".concat(i.awayTeam)} className="GameWidget-ScoreLine">
                    <div className="GameWidget-ScoreTeamColorBar" style={{ background: i.awayTeamColor }}>
                      {String.fromCodePoint(Number(i.awayTeamEmoji))}
                    </div>
                    <div className="GameWidget-ScoreTeam">
                      <div className="GameWidget-ScoreName" style={{ color: i.awayTeamColor }}>
                        {l.awayTeamName}
                      </div>
                      <div className="GameWidget-ScoreTeamInfo">
                        <div className="GameWidget-ScoreRecord">
                          {l.awayTeamWins}-{l.awayTeamLosses}
                        </div>
                        {d.started ? (
                          <span className="GameWidget-AllBetInfo">
                            <div className="GameWidget-WinChance" style={{ color: i.awayTeamColor }}>
                              {Math.round(100 * i.awayOdds)}%
                            </div>
                            {M}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className="GameWidget-ScoreNumber" style={o}>
                      {l.awayTeamScore}
                    </div>
                  </m>
                  <m background={I} path={"/team/".concat(i.homeTeam)} className="GameWidget-ScoreLine">
                    <div className="GameWidget-ScoreTeamColorBar" style={{ background: i.homeTeamColor }}>
                      {String.fromCodePoint(Number(i.homeTeamEmoji))}
                    </div>
                    <div className="GameWidget-ScoreTeam">
                      <div className="GameWidget-ScoreName" style={{ color: i.homeTeamColor }}>
                        {l.homeTeamName}
                      </div>
                      <div className="GameWidget-ScoreTeamInfo">
                        <div className="GameWidget-ScoreRecord">
                          {l.homeTeamWins}-{l.homeTeamLosses}
                        </div>
                        {d.started ? (
                          <span className="GameWidget-AllBetInfo">
                            <div className="GameWidget-WinChance" style={{ color: i.homeTeamColor }}>
                              {Math.round(100 * i.homeOdds)}%
                            </div>
                            {D}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className="GameWidget-ScoreNumber" style={t}>
                      {l.homeTeamScore}
                    </div>
                  </m>
                </div>
              </div>
              {x}
              {V}
            </div>
          </div>
        );
      }
      function we(e) {
        var a = (function (e, a) {
          var t = void 0;
          if (void 0 !== a)
            for (var n = 0; n < a.length; n++)
              if (a[n].homeTeam === e.homeTeam) {
                t = a[n];
                break;
              }
          return {
            homeTeamName: e.homeTeamNickname,
            homeTeamWins: void 0 === t ? "" : t.homeWins,
            homeTeamLosses: void 0 === t ? "" : t.awayWins,
            homeTeamScore: be(e).toString(),
            awayTeamName: e.awayTeamNickname,
            awayTeamWins: void 0 === t ? "" : t.awayWins,
            awayTeamLosses: void 0 === t ? "" : t.homeWins,
            awayTeamScore: Ne(e).toString(),
          };
        })(e.data, e.matchups);
        return <Se data={e.data} metaInfo={a} />;
      }
      t(137);
      var Be = t(39),
        Oe = t(82),
        Ie = t(81),
        ke =
          (t(138),
          function (e) {
            var a,
              t = Object(n.useRef)(null),
              o = e.content,
              i = e.children,
              s = e.url,
              c = e.className,
              m = e.buttonClassname,
              d = e.handleClick,
              h = Object(n.useState)(!1),
              E = Object(l.a)(h, 2),
              p = E[0],
              f = E[1],
              A = function () {
                clearTimeout(a), f(!0);
              },
              v = function () {
                a = setTimeout(function () {
                  f(!1);
                }, 100);
              },
              g = (
                <Ie.a target={t.current} show={p} placement="bottom">
                  {function (e) {
                    e.placement, e.scheduleUpdate, e.arrowProps, e.outOfBoundaries, e.show;
                    var a = Object(Oe.a)(e, ["placement", "scheduleUpdate", "arrowProps", "outOfBoundaries", "show"]);
                    return (
                      <div
                        {...Object.assign({}, a, {
                          style: Object(u.a)({}, a.style, { top: "12px" }),
                          className: "Overlay ".concat(c),
                          onMouseOver: A,
                          onMouseOut: v,
                        })}
                      >
                        <div className="Overlay-Arrow" />
                        {o}
                      </div>
                    );
                  }}
                </Ie.a>
              );
            return s ? (
              <r.a.Fragment>
                <a href={s} ref={t} onMouseOver={A} onMouseOut={v} className={m}>
                  {i}
                </a>
                {g}
              </r.a.Fragment>
            ) : d ? (
              <r.a.Fragment>
                <button ref={t} onMouseOver={A} onMouseOut={v} onClick={d} className={m}>
                  {i}
                </button>
                {g}
              </r.a.Fragment>
            ) : (
              <r.a.Fragment>
                <div ref={t} onMouseOver={A} onMouseOut={v} className={m}>
                  {i}
                </div>
                {g}
              </r.a.Fragment>
            );
          });
      t(139);
      function Ce() {
        var e = Object(n.useState)([]),
          a = Object(l.a)(e, 2),
          t = a[0],
          o = a[1],
          i = Object(n.useState)(!1),
          s = Object(l.a)(i, 2),
          c = s[0],
          m = s[1];
        Object(n.useEffect)(function () {
          u();
        }, []);
        function u() {
          return d.apply(this, arguments);
        }
        function d() {
          return (d = Object(g.a)(
            v.a.mark(function e() {
              var a, t, n;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), N();
                    case 2:
                      if (((a = e.sent), (t = []), void 0 !== a)) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      for (n = 0; n < a.length; n++) t.push(a[n].msg);
                      o(t), m(!0);
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var h = "EventTicker-Group";
        if (c) {
          for (var E = 0, p = 0; p < t.length; p++) E += t[p].length;
          var f = E / 5;
          h +=
            f > 300
              ? " EventTicker-Group-Animating-300"
              : f > 240
              ? " EventTicker-Group-Animating-240"
              : f > 180
              ? " EventTicker-Group-Animating-180"
              : f > 120
              ? " EventTicker-Group-Animating-120"
              : " EventTicker-Group-Animating-60";
        }
        return (
          <div className="EventTicker-Display">
            <div className="EventTicker-News">News:</div>
            <div className="EventTicker-Scroll">
              <div
                className={h}
                onAnimationEnd={function () {
                  m(!1), u();
                }}
              >
                {t.map(function (e) {
                  return <div className="EventTicker-Item">{e}</div>;
                })}
              </div>
            </div>
          </div>
        );
      }
      var Re = function () {
          var e = Object(n.useContext)(U.context),
            a = e.user,
            t = (e.clearUser, e.refreshUser),
            o = Object(n.useContext)(f.context),
            i = (Object(s.f)(), Object(n.useState)(!1)),
            c = Object(l.a)(i, 2),
            m = c[0],
            u = c[1],
            d = Object(ce.useToasts)().addToast,
            h = ["PEANUTS", "EVERYONE LOVES PEANUTS", "CRACK IT OPEN", "CRACK IT OPEN NOW"],
            E = ["SO GOOD", "YUMMY", "SO GREAT"],
            p = Object(n.useRef)(Math.floor(Math.random() * h.length)),
            A = Object(n.useRef)(Math.floor(Math.random() * E.length)),
            y = (
              <div className="CoinOverlay-Content">
                <div className="CoinOverlay-Content-Body">Earn Coins by placing bets on upcoming games</div>
              </div>
            ),
            N = (
              <div className="CoinOverlay-Content">
                <div className="CoinOverlay-Content-Body">Buy Votes in the Shop to spend in the Offseason</div>
              </div>
            ),
            T = (
              <div className="CoinOverlay-Content">
                <div className="CoinOverlay-Content-Body">{m ? E[A.current] : h[p.current]}</div>
              </div>
            ),
            S = null;
          if (a.favoriteTeamInfo) {
            var w = String.fromCodePoint(Number(a.favoriteTeamInfo.emoji)),
              B = encodeURIComponent("".concat(a.favoriteTeamInfo.slogan || "", " ").concat(w, " #blaseball")),
              O = "http://twitter.com/intent/tweet?text=".concat(B, "&url=https%3A%2F%2Fblaseball.com");
            S = (
              <a
                target="_blank"
                href={O}
                style={{ background: a.favoriteTeamInfo.mainColor }}
                className="Navigation-FavoriteTeamEmoji"
              >
                {w}
              </a>
            );
          }
          return (
            <r.a.Fragment>
              <ke className="CoinOverlay" buttonClassname="Navigation-CurrencyButton" content={y} url="/upcoming">
                <re.k />
                 {a.coins}
              </ke>
              {a.unlockedElection ? (
                <ke className="CoinOverlay" buttonClassname="Navigation-CurrencyButton" content={N} url="/shop">
                  <re.j />
                   {a.votes}
                </ke>
              ) : null}
              {void 0 !== o && void 0 !== o.sim && o.sim.unlockedPeanuts ? (
                <div className="Peanut-Container">
                  <ke
                    className="CoinOverlay"
                    buttonClassname="Navigation-CurrencyButton"
                    content={T}
                    handleClick={
                      m
                        ? void 0
                        : function () {
                            (function () {
                              var e = Object(g.a)(
                                v.a.mark(function e() {
                                  var n, r, o;
                                  return v.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (!(a.peanuts > 0)) {
                                            e.next = 9;
                                            break;
                                          }
                                          return (
                                            u(!0),
                                            (r = (n = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144])[
                                              Math.min(a.squirrels, n.length - 1)
                                            ]),
                                            (o = Math.min(r, a.peanuts)),
                                            (e.next = 7),
                                            b("/api/eatADangPeanut", JSON.stringify({ amount: o }))
                                              .then(
                                                Object(g.a)(
                                                  v.a.mark(function e() {
                                                    return v.a.wrap(function (e) {
                                                      for (;;)
                                                        switch ((e.prev = e.next)) {
                                                          case 0:
                                                            return (
                                                              (e.next = 2),
                                                              new Promise(function (e) {
                                                                return setTimeout(e, 2300);
                                                              })
                                                            );
                                                          case 2:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    }, e);
                                                  })
                                                )
                                              )
                                              .catch(function (e) {
                                                d(e, { appearance: "error" });
                                              })
                                              .finally(
                                                Object(g.a)(
                                                  v.a.mark(function e() {
                                                    return v.a.wrap(function (e) {
                                                      for (;;)
                                                        switch ((e.prev = e.next)) {
                                                          case 0:
                                                            return (e.next = 2), t();
                                                          case 2:
                                                            d(
                                                              "You consumed "
                                                                .concat(o, " Peanut")
                                                                .concat(o > 1 ? "s" : "", "."),
                                                              { appearance: "success" }
                                                            ),
                                                              u(!1);
                                                          case 4:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    }, e);
                                                  })
                                                )
                                              )
                                          );
                                        case 7:
                                          e.next = 10;
                                          break;
                                        case 9:
                                          d("You have no peanuts.", { appearance: "error" });
                                        case 10:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function () {
                                return e.apply(this, arguments);
                              };
                            })()();
                          }
                    }
                  >
                    <span className="Peanut-Line">
                      <span className="Peanut-Icon">{m ? "" : <re.g />}</span> {a.peanuts}
                    </span>
                  </ke>
                  <div className={m ? "Peanut-Eating" : "Peanut"}>
                    <re.g />
                  </div>
                </div>
              ) : null}
              {S}
              <a href="/auth/logout" className="Navigation-Button">
                Log Out
              </a>
            </r.a.Fragment>
          );
        },
        Ge = function () {
          return (
            <r.a.Fragment>
              <De isModal={!0} path="/signup">
                Signup
              </De>
              <De isModal={!0} path="/login">
                Login
              </De>
            </r.a.Fragment>
          );
        };
      function Le(e) {
        var a,
          t = Object(n.useContext)(f.context),
          o = Object(n.useContext)(U.context).user,
          i = Object(n.useState)(!1),
          s = Object(l.a)(i, 2),
          c = s[0],
          m = s[1],
          u = [];
        (null === (a = t.sim) || void 0 === a ? void 0 : a.unlockedInterviews)
          ? (u.push({ text: "Hello", path: "/" }),
            u.push({ text: "League", path: "/league", subpaths: ["/upcoming", "/standings"] }))
          : u.push({ text: "League", path: "/", subpaths: ["/upcoming", "/standings"] }),
          o &&
            o.isSignedIn &&
            (u.push({ text: "Shop", path: "/shop", locked: !o.unlockedShop }),
            u.push({ text: "Election", path: "/offseason", locked: !o.unlockedElection }),
            t && t.sim && t.sim.openedBook && u.push({ text: "Book", path: "/thebook" }));
        var d = o.isFetching ? null : o.isSignedIn ? <Re /> : <Ge />;
        return (
          <header className="Navigation">
            <div className="Navigation-Bar">
              <div className="Navigation-Bar-Section">
                {(function (e) {
                  if (!e || (e && !e.sim))
                    return (
                      <h1 className="Navigation-Header">
                        Blaseball<div className="Navigation-Tag">BETA</div>
                      </h1>
                    );
                  var a = e.sim.eraTitle && "" !== e.sim.eraTitle,
                    t = e.sim.subEraTitle && "" !== e.sim.subEraTitle;
                  if (a && t)
                    return (
                      <h1 className="Navigation-Header-SubEra">
                        Blaseball
                        {e && e.sim && "" !== e.sim.eraTitle ? (
                          <div className="Navigation-Bar Navigation-Era">{e.sim.eraTitle}</div>
                        ) : null}
                        {e && e.sim && "" !== e.sim.subEraTitle ? (
                          <div className="Navigation-Bar Navigation-SubEra">{e.sim.subEraTitle}</div>
                        ) : null}
                        <div className="Navigation-Tag">BETA</div>
                      </h1>
                    );
                  if (a)
                    return (
                      <h1 className="Navigation-Header-Era">
                        Blaseball
                        {e && e.sim && "" !== e.sim.eraTitle ? (
                          <div className="Navigation-Bar Navigation-Era">{e.sim.eraTitle}</div>
                        ) : null}
                        <div className="Navigation-Tag">BETA</div>
                      </h1>
                    );
                  return (
                    <h1 className="Navigation-Header">
                      Blaseball<div className="Navigation-Tag">BETA</div>
                    </h1>
                  );
                })(t)}
                <div className="Navigation-Patreon">
                  <div className="Navigation-Patreon-Inner">
                    <a className="Navigation-Patreon-Icon" href="https://www.patreon.com/blaseball" target="_blank">
                      PATREON
                    </a>
                    \{" "}
                  </div>
                </div>
                <div className="Navigation-Follow">
                  <div className="Navigation-Follow-Inner">
                    <a className="Navigation-Follow-Icon" href="https://discord.gg/3uFgJhu" target="_blank">
                      <Be.b />
                    </a>
                    <a className="Navigation-Follow-Icon" href="https://twitter.com/blaseballcomms" target="_blank">
                      <Be.d />
                    </a>
                  </div>
                  <div className="Navigation-Follow-Triangle" />
                </div>
              </div>
              <div className="Navigation-Bar-Section Navigation-Bar-Section--Mobile">
                <div className={"Navigation-Bar-Menu ".concat(c ? "Navigation-Bar-Menu--IsOpen" : "")}>
                  <a
                    className="Navigation-Bar-Menu-Toggle"
                    onClick={function () {
                      return m(!c);
                    }}
                  >
                    My Account
                  </a>
                  <div className="Navigation-Bar-Menu-List">{d}</div>
                </div>
              </div>
            </div>
            {t && t.sim && t.sim.openedBook ? <Ce /> : null}
            <div className="Navigation-Bar">
              <div className="Navigation-Bar-Section">
                {u.map(function (e, a) {
                  return (
                    <De key={a} path={e.path} subpaths={e.subpaths}>
                      {e.text} {e.locked ? <oe.a /> : null}
                    </De>
                  );
                })}
              </div>
              <div className="Navigation-Bar-Section Navigation-Bar-Section--Desktop">{d}</div>
            </div>
          </header>
        );
      }
      function De(e) {
        var a = e.path,
          t = e.isModal,
          n = e.subpaths,
          o = Object(s.g)(),
          i = o.pathname,
          l = !("/login" === i || "/signup" === i),
          c =
            i === a ||
            void 0 !==
              (null === n || void 0 === n
                ? void 0
                : n.find(function (e) {
                    return e === i;
                  }));
        return (
          <m
            background={l && t && o}
            path={a}
            className={"Navigation-Button" + (c ? " Navigation-Button-Current" : "")}
          >
            {e.children}
          </m>
        );
      }
      function Me() {
        Object(n.useContext)(f.context);
        return (
          <header className="Navigation">
            <div className="Navigation-Bar">
              <div className="Navigation-Bar-Section">
                <h1 className="Navigation-Header">
                  Blaseball<div className="Navigation-Tag">BETA</div>
                </h1>
                <div className="Navigation-Follow">
                  <div className="Navigation-Follow-Inner">
                    <a className="Navigation-Follow-Icon" href="https://discord.gg/3uFgJhu" target="_blank">
                      <Be.b />
                    </a>
                    <a className="Navigation-Follow-Icon" href="https://twitter.com/blaseballcomms" target="_blank">
                      <Be.d />
                    </a>
                  </div>
                  <div className="Navigation-Follow-Triangle" />
                </div>
              </div>
              <div className="Navigation-Bar-Section Navigation-Bar-Section--Mobile">
                <Ge />
              </div>
            </div>
            <div className="Navigation-Bar">
              <div className="Navigation-Bar-Section Navigation-Bar-Section--Desktop">
                <Ge />
              </div>
            </div>
          </header>
        );
      }
      function Pe() {
        Object(n.useContext)(f.context);
        return (
          <header className="Navigation">
            <h1 className="Navigation-Header">
              Blaseball<div className="Navigation-Tag">BETA</div>
            </h1>
          </header>
        );
      }
      t(140);
      function Qe() {
        return (
          <div className="Advertisement-SiteHeader">
            This season is brought to you by{" "}
            <a
              className="Advertisement-SiteHeader-Callout"
              href="http://friendsatthetable.net/bonus-episode-sports-are-just-numerology"
              target="_blank"
            >
              Friends at the Table
            </a>
          </div>
        );
      }
      t(141);
      var We,
        je = function (e) {
          var a = e.dateString,
            t = Object(n.useState)(),
            o = Object(l.a)(t, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(
              function () {
                var e,
                  t = function () {
                    var e = (new Date(Date.parse(a)).getTime() - new Date().getTime()) / 1e3,
                      t = Math.max(Math.floor(e / 3600), 0);
                    e -= 3600 * t;
                    var n = Math.max(Math.floor(e / 60), 0);
                    e -= 60 * n;
                    var r = Math.max(Math.floor(e), 0);
                    s({ hours: t, minutes: n, seconds: r });
                  };
                return (
                  t(),
                  (e = setInterval(t, 1e3)),
                  function () {
                    clearInterval(e);
                  }
                );
              },
              [a]
            ),
            (
              <span className="Countdown">
                <span className="Countdown-Number">{null === i || void 0 === i ? void 0 : i.hours}</span>Hours
                <span className="Countdown-Number">{null === i || void 0 === i ? void 0 : i.minutes}</span>Minutes
                <span className="Countdown-Number">{null === i || void 0 === i ? void 0 : i.seconds}</span>Seconds
              </span>
            )
          );
        };
      !(function (e) {
        (e[(e.Live = 0)] = "Live"), (e[(e.Upcoming = 1)] = "Upcoming");
      })(We || (We = {}));
      var xe,
        Ue = function (e) {
          var a,
            t = e.path,
            o = Object(n.useContext)(f.context),
            i = Object(n.useContext)(U.context).user,
            l = Object(n.useContext)(J.context),
            s = void 0 === o.schedule;
          function c() {
            return "/upcoming" === t ? We.Upcoming : We.Live;
          }
          if (!o.sim) return null;
          var m = c() === We.Upcoming ? o.tomorrowSchedule : o.schedule,
            u = c() === We.Live ? o.sim.day : o.sim.day + 1,
            d =
              void 0 === m ? null : (
                <ul>
                  {null ===
                    (a = (function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                      if (!i || !l || void 0 === e) return e;
                      for (var a = [], t = 0; t < e.length; t++) a.push(e[t]);
                      return (
                        a.sort(),
                        (a = a.sort(function (e, a) {
                          var t = e.homeTeam == i.favoriteTeam || e.awayTeam == i.favoriteTeam,
                            n = a.homeTeam == i.favoriteTeam || a.awayTeam == i.favoriteTeam;
                          if (t) return -1;
                          if (n) return 1;
                          if (!e.gameComplete && a.gameComplete) return -1;
                          if (e.gameComplete && !a.gameComplete) return 1;
                          var r = void 0 !== l[e._id] && l[e._id].length > 0,
                            o = void 0 !== l[a._id] && l[a._id].length > 0,
                            s = r ? l[e._id][0] : void 0,
                            c = o ? l[a._id][0] : void 0;
                          return r && o ? (s.amount > c.amount ? -1 : c.amount > s.amount ? 1 : 0) : r ? -1 : 1;
                        }))
                      );
                    })(m)) || void 0 === a
                    ? void 0
                    : a.map(function (e, a) {
                        return <Te key={a} data={e} />;
                      })}
                </ul>
              ),
            h =
              void 0 === m || (void 0 !== m && m.length <= 0) ? (
                <div className="DailySchedule-Body">There are no season games scheduled for Day {u + 1}.</div>
              ) : (
                <div>
                  <div className="DailySchedule-Countdown">
                    {c() === We.Upcoming ? <je dateString={ee().toString()} /> : null}
                  </div>
                  {d}
                </div>
              ),
            E = void 0 !== o && void 0 !== o.sim ? o.sim.season : -1;
          return (
            <div>
              <div className="DailySchedule-Header">
                Season<span className="DailySchedule-Number">{E + 1}</span>Day
                <span className="DailySchedule-Number">{u + 1}</span>
              </div>
              <Qe />
              <div className="DailySchedule-Nav">
                <De path="/">Watch Live</De>
                <De path="/upcoming">Place Bets</De>
                <De path="/standings">Standings</De>
              </div>
              {s ? <Ee /> : h}
            </div>
          );
        };
      !(function (e) {
        (e[(e.Live = 0)] = "Live"), (e[(e.Upcoming = 1)] = "Upcoming");
      })(xe || (xe = {}));
      var Ye = function (e) {
          var a,
            t,
            o,
            i,
            l,
            s,
            c,
            m,
            u,
            d,
            h,
            E,
            p = e.path,
            A = Object(n.useContext)(f.context),
            v = Object(n.useContext)(U.context).user,
            g = Object(n.useContext)(J.context),
            y = void 0 === A.schedule;
          if (void 0 === A.postseason.playoffs) return null;
          function b() {
            return "/upcoming" === p ? xe.Upcoming : xe.Live;
          }
          function N() {
            var e, a;
            return b() === xe.Live
              ? (null === (e = A.sim) || void 0 === e ? void 0 : e.day) || -1
              : (null === (a = A.sim) || void 0 === a ? void 0 : a.day) || 0;
          }
          if (!A.sim) return null;
          var T = b() === xe.Live ? A.schedule : A.tomorrowSchedule,
            S =
              (b() === xe.Live ? A.sim.day : A.sim.day,
              b() === xe.Live ? A.postseason.matchups : A.postseason.tomorrowMatchups),
            w =
              void 0 === T || (void 0 !== T && T.length <= 0) ? null : (
                <ul>
                  {null ===
                    (a = (function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                      if (!v || !g || void 0 === e) return e;
                      for (var a = [], t = 0; t < e.length; t++) a.push(e[t]);
                      return (
                        a.sort(),
                        (a = a.sort(function (e, a) {
                          var t = e.homeTeam == v.favoriteTeam || e.awayTeam == v.favoriteTeam,
                            n = a.homeTeam == v.favoriteTeam || a.awayTeam == v.favoriteTeam;
                          if (t) return -1;
                          if (n) return 1;
                          if (!e.gameComplete && a.gameComplete) return -1;
                          if (e.gameComplete && !a.gameComplete) return 1;
                          var r = void 0 !== g[e._id] && g[e._id].length > 0,
                            o = void 0 !== g[a._id] && g[a._id].length > 0,
                            i = r ? g[e._id][0] : void 0,
                            l = o ? g[a._id][0] : void 0;
                          return r && o ? (i.amount > l.amount ? -1 : l.amount > i.amount ? 1 : 0) : r ? -1 : 1;
                        }))
                      );
                    })(T)) || void 0 === a
                    ? void 0
                    : a.map(function (e, a) {
                        return <we key={a} data={e} matchups={S} />;
                      })}
                </ul>
              ),
            B =
              void 0 !==
              (null === A ||
              void 0 === A ||
              null === (t = A.postseason) ||
              void 0 === t ||
              null === (o = t.round) ||
              void 0 === o
                ? void 0
                : o.roundNumber)
                ? null === A ||
                  void 0 === A ||
                  null === (i = A.postseason) ||
                  void 0 === i ||
                  null === (l = i.round) ||
                  void 0 === l
                  ? void 0
                  : l.roundNumber
                : -1,
            O =
              void 0 !==
              (null === A ||
              void 0 === A ||
              null === (s = A.postseason) ||
              void 0 === s ||
              null === (c = s.tomorrowRound) ||
              void 0 === c
                ? void 0
                : c.roundNumber)
                ? null === A ||
                  void 0 === A ||
                  null === (m = A.postseason) ||
                  void 0 === m ||
                  null === (u = m.tomorrowRound) ||
                  void 0 === u
                  ? void 0
                  : u.roundNumber
                : -1,
            I = (b() === xe.Live ? B : O) + 1;
          return (
            <div>
              <div className="DailySchedule-Header">
                <div className="DailySchedule-Header-Group">
                  {(null === (d = A.postseason.round) || void 0 === d ? void 0 : d.special) ? (
                    <r.a.Fragment>{null === (h = A.postseason.round) || void 0 === h ? void 0 : h.name} </r.a.Fragment>
                  ) : (
                    "Postseason Round"
                  )}
                </div>
                {(null === (E = A.postseason.round) || void 0 === E ? void 0 : E.special) ? null : (
                  <span className="DailySchedule-Number">{I}</span>
                )}
                Day<span className="DailySchedule-Number">{N() + 1}</span>
              </div>
              <Qe />
              <div className="DailySchedule-Nav">
                <De path="/">Watch Live</De>
                <De path="/upcoming">Place Bets</De>
                <De path="/standings">Standings</De>
              </div>
              {y ? (
                <Ee />
              ) : (
                <div>
                  {null !== w ? (
                    <div>
                      <div className="DailySchedule-Countdown">
                        {b() === xe.Upcoming ? <je dateString={ee().toString()} /> : null}
                      </div>
                      <ul>{w}</ul>
                    </div>
                  ) : (
                    <div className="DailySchedule-Body">
                      There are no postseason games yet scheduled for Day {N() + 1}. Check back when the current batch
                      of games finish.
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        },
        He =
          (t(142), t(143), r.a.createContext({ leagues: [], subleagues: [], divisions: [], teams: [], players: [] })),
        Je = function (e) {
          var a = e.children,
            t = Object(n.useState)({ leagues: [], subleagues: [], divisions: [], teams: [], players: [] }),
            o = Object(l.a)(t, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(function () {
              return (
                h.on("leagueDataUpdate", function (e) {
                  s(function (a) {
                    return Object(u.a)({}, a, {}, e);
                  });
                }),
                function () {
                  h.off("leagueDataUpdate");
                }
              );
            }, []),
            (<He.Provider value={i}>{a}</He.Provider>)
          );
        };
      Je.context = He;
      var Fe = Je;
      function Ve() {
        var e = Object(n.useContext)(f.context);
        if (!e || !e.sim) return null;
        var a = void 0 !== e.sim.season ? e.sim.season : -1;
        return (
          <div>
            <div className="DailySchedule-Header">
              Season<span className="DailySchedule-Number">{a + 1}</span> Standings
            </div>
            <Qe />
            <div className="DailySchedule-Nav">
              <De path="/">Watch Live</De>
              <De path="/upcoming">Place Bets</De>
              <De path="/standings">Standings</De>
            </div>
            <qe />
          </div>
        );
      }
      function qe() {
        var e = Object(n.useContext)(f.context),
          a = Object(n.useContext)(Fe.context);
        if (!e || !e.sim) return null;
        if (!a || !a.leagues) return null;
        var t = a.leagues.find(function (a) {
          var t;
          return a._id === (null === (t = e.season) || void 0 === t ? void 0 : t.league);
        });
        if (void 0 === t) return null;
        var o = [];
        if (a)
          for (var i = 0; i < t.subleagues.length; i++)
            o.push(<Ke key={i} subleague={t.subleagues[i]} standings={e.standings} />);
        return void 0 !== t ? (
          <div className="Standings-League">
            {t.name}
            <ul className="Standings-Subleague-Container">{o}</ul>
          </div>
        ) : (
          <Ee />
        );
      }
      function Ke(e) {
        var a = Object(n.useContext)(Fe.context).subleagues.find(function (a) {
          return a._id === e.subleague;
        });
        if (void 0 === a) return null;
        for (var t = [], o = 0; o < a.divisions.length; o++)
          t.push(<ze key={o} division={a.divisions[o]} standings={e.standings} />);
        return (
          <div className="Standings-Subleague">
            <div className="Standings-Subleague-Header">{a.name}</div>
            <ul className="Standings-Division-Container">{t}</ul>
          </div>
        );
      }
      function ze(e) {
        var a = Object(n.useContext)(Fe.context).divisions.find(function (a) {
          return a._id === e.division;
        });
        if (void 0 === a) return null;
        for (var t = [], o = [], i = [], l = [], s = 0; s < a.teams.length; s++) {
          for (var c = Ze(a.teams[s], e.standings), m = !1, u = 0; u < o.length; u++) {
            var d = i[u];
            if (c[0] > d) {
              o.splice(u, 0, a.teams[s]), i.splice(u, 0, c[0]), l.splice(u, 0, c[1]), (m = !0);
              break;
            }
          }
          m || (o.push(a.teams[s]), i.push(c[0]), l.push(c[1]));
        }
        for (var h = 0; h < o.length; h++) t.push(<Xe key={h} team={o[h]} wins={i[h]} losses={l[h]} />);
        return (
          <div className="Standings-Division">
            <div className="Standings-Division-Header">{a.name}</div>
            <ul className="Standings-Team-Container">{t}</ul>
          </div>
        );
      }
      function Ze(e, a) {
        var t = 0,
          n = 0;
        if (void 0 !== a) {
          for (var r in a.wins)
            if (r === e) {
              t = a.wins[r];
              break;
            }
          for (var o in a.losses)
            if (o === e) {
              n = a.losses[o];
              break;
            }
        }
        return [t, n];
      }
      function Xe(e) {
        var a = Object(s.g)(),
          t = Object(n.useContext)(Fe.context).teams.find(function (a) {
            return a._id === e.team;
          });
        return void 0 === t ? null : (
          <m background={a} path={"/team/".concat(t._id)} className="Standings-Team">
            <div className="Standings-Team-Name-Container">
              <div className="Standings-Team-Color" style={{ background: t.mainColor }}>
                <div className="Standings-Team-Emoji">{String.fromCodePoint(Number(t.emoji))}</div>
              </div>
              <div className="Standings-Team-Name">{t.fullName}</div>
            </div>
            <div className="Standings-Team-Standings" style={{ color: t.mainColor }}>
              {e.wins}-{e.losses}
            </div>
          </m>
        );
      }
      var _e = function () {
        var e = Object(n.useContext)(f.context),
          a = Object(n.useContext)(Fe.context);
        if (void 0 === e || void 0 === e.sim || void 0 === a) return null;
        if (void 0 === e.postseason || void 0 === e.postseason.playoffs) return null;
        var t = a.teams.find(function (a) {
          var t;
          return a._id === (null === (t = e.postseason.playoffs) || void 0 === t ? void 0 : t.winner);
        });
        if (void 0 === t) return null;
        var o = void 0 !== t ? t.mainColor : "#ffffff",
          i = void 0 !== t ? t.fullName : "",
          l =
            void 0 !== t ? (
              <div className="PlayoffsEnd-Body">
                Your Champions are the{" "}
                <span className="PlayoffsEnd-Callout" style={{ color: o }}>
                  {i}!
                </span>
              </div>
            ) : null;
        return (
          <div>
            <div className="PlayoffsEnd">
              <div className="PlayoffsEnd-Header">Season {e.sim.season + 1} is over.</div>
              {l}
              <div className="PlayoffsEnd-End">
                <a href="/offseason">The Election ends soon! Go cast your Votes.</a>
              </div>
              <div className="PlayoffsEnd-End">The next season starts in...</div>
              <je dateString={e.sim.nextSeasonStart} />
            </div>
            <qe />
          </div>
        );
      };
      t(144);
      function $e() {
        return (
          <div className="About-All">
            <div className="About-Header">Welcome to Blaseball.</div>
            <div className="About-Body">
              Blaseball is baseball at your mercy. Baseball perfected. Our players are inhuman. They play day and night.
              Rain or shine. They never grow sick. They never tire.
            </div>
            <div className="About-Body">
              This is our gift to you — the fans. We hear your prayers at trade deadlines. We suffer your DH debates. No
              more. Democracy returns to blaseball. At the end of each week, you will vote on how to change the league.
              Everything from rules to rosters is in your hands.
            </div>
            <div className="About-Body">
              Of course, votes aren’t free. Cash is king. So do what you do best.{" "}
              <a className="Stubs-Highlight" href="/upcoming">
                Gamble.
              </a>{" "}
              Betting is allowed and encouraged. But parents fear not — your currencies and credit cards have no value
              here. Blaseball deals in its own dollar.
            </div>
            <div className="About-Body">
              Seasons run Monday to Thursday. The Postseason runs on Friday. Saturday is Election Day. On Sunday, we
              rest.
            </div>
            <div className="About-Body">
              <a target="_blank" href="https://discord.gg/3uFgJhu">
                Join the official<span className="Stubs-Highlight">Discord</span>
              </a>
              to commune with the rest of your kind. And take care to{" "}
              <a target="_blank" href="https://twitter.com/blaseballcomms">
                follow the commissioner on<span className="Stubs-Highlight">Twitter.</span>
              </a>{" "}
              We expect he’ll need your help.
            </div>
            <div className="About-Body">
              <span className="Stubs-Serif">A warning:</span> beware the forbidden book.
            </div>
            <div className="About-Body">Rejoice. Play ball.</div>
            <div className="About-Body">
              <span className="Stubs-Serif">— The Blaseball Gods</span>
            </div>
          </div>
        );
      }
      function ea() {
        var e = Object(s.g)();
        return (
          <div className="About-All">
            <div className="About-Header">Welcome to Blaseball.</div>
            <m background={e} path="/signup" className="About-Ticket">
              <re.j />
            </m>
            <a
              href="https://www.polygon.com/features/2020/8/6/21357131/blaseball-fans-absurd-baseball-sim-the-game-band"
              target="_blank"
              className="About-Quote"
            >
              “A strong contender to become the best game of 2020.”
            </a>
            <a
              href="https://www.polygon.com/features/2020/8/6/21357131/blaseball-fans-absurd-baseball-sim-the-game-band"
              target="_blank"
              className="About-QuoteAuthor"
            >
              – Polygon
            </a>
            <a
              href="https://www.vice.com/en_us/article/n7w44w/blaseball-is-the-real-return-of-baseball"
              target="_blank"
              className="About-Quote"
            >
              “A dangerous time waster”
            </a>
            <a
              href="https://www.vice.com/en_us/article/n7w44w/blaseball-is-the-real-return-of-baseball"
              target="_blank"
              className="About-QuoteAuthor"
            >
              - VICE
            </a>
            <a href="https://megaphone.link/ZAM4811988841" target="_blank" className="About-Quote">
              “A f***ing delight in this horrible cruel world that we live in”
            </a>
            <a href="https://megaphone.link/ZAM4811988841" target="_blank" className="About-QuoteAuthor">
              – FANBYTE
            </a>
            <m background={e} path="/signup">
              <te.a className="About-Button" variant="success">
                <div className="About-Button-Text">Play Now</div>
              </te.a>
            </m>
            <div className="About-Body-Container">
              <div className="About-Body">
                Blaseball is baseball at your mercy. Baseball perfected. Our players are inhuman. They play day and
                night. Rain or shine. They never grow sick. They never tire.
              </div>
              <div className="About-Body">
                This is our gift to you — the fans. We hear your prayers at trade deadlines. We suffer your DH debates.
                No more. Democracy returns to the national pastime. Each week, you vote to remake the league in your own
                image. Everything from rules to rosters is in your hands.
              </div>
              <div className="About-Body">
                Of course, votes aren’t free. Cash is king. So do what you do best. Gamble. Betting is allowed and
                encouraged. But parents fear not — your currencies and credit cards have no value here. Blaseball deals
                in its own dollar.
              </div>
              <div className="About-Body">
                Seasons run Monday to Friday. The Postseason runs on Saturday. On Sunday, we rest.
              </div>
              <div className="About-Body">Your first vote is on us. The fate of the league is on you.</div>
              <div className="About-Body">Rejoice. Play ball.</div>
              <div className="About-Body">
                <span className="Stubs-Serif">— The Blaseball Gods</span>
              </div>
            </div>
          </div>
        );
      }
      t(145);
      function aa(e) {
        return void 0 !== e.element ? e.element : <div className="Stubs-Header">{e.text}</div>;
      }
      t(146);
      var ta = t(32);
      t(147);
      function na(e) {
        var a = e.type,
          t = null;
        switch (a) {
          case "EXTRA_STRIKE":
            t = <re.e />;
        }
        return (
          <div className="WeatherIcon" style={{ color: ra(a), background: oa(a) }}>
            {t}
          </div>
        );
      }
      function ra(e) {
        switch (e) {
          case "EXTRA_STRIKE":
            return "#f77c9f";
        }
        return "#ffffff";
      }
      function oa(e) {
        switch (e) {
          case "EXTRA_STRIKE":
            return "#8c1839";
        }
        return "#e1e1e1";
      }
      function ia(e) {
        return sa(
          (function (e) {
            return (
              Math.pow(1 - e.tragicness, 0.01) *
              Math.pow(e.buoyancy, 0) *
              Math.pow(e.thwackability, 0.35) *
              Math.pow(e.moxie, 0.075) *
              Math.pow(e.divinity, 0.35) *
              Math.pow(e.musclitude, 0.075) *
              Math.pow(1 - e.patheticism, 0.05) *
              Math.pow(e.martyrdom, 0.02)
            );
          })(e)
        );
      }
      function la(e) {
        return sa(
          (function (e) {
            return (
              Math.pow(e.shakespearianism, 0.1) *
              Math.pow(e.suppression, 0) *
              Math.pow(e.unthwackability, 0.5) *
              Math.pow(e.coldness, 0.025) *
              Math.pow(e.overpowerment, 0.15) *
              Math.pow(e.ruthlessness, 0.4)
            );
          })(e)
        );
      }
      function sa(e) {
        for (var a = e / 0.2, t = Math.round(2 * a) / 2, n = Math.floor(t), o = Math.ceil(t), i = [], l = 0; l < n; l++)
          i.push(<ta.a />);
        return n !== o && i.push(<ta.b />), (<span>{i}</span>);
      }
      var ca = function (e) {
          var a,
            t = Object(s.h)().nickname,
            o = Object(n.useContext)(f.context),
            i = Object(n.useContext)(Fe.context),
            c = Object(s.g)(),
            u = Object(n.useState)({ lineup: [], rotation: [], bullpen: [], bench: [] }),
            d = Object(l.a)(u, 2),
            h = d[0],
            E = d[1],
            p = i.teams.find(function (e) {
              return e._id === t;
            });
          Object(n.useEffect)(function () {
            A();
          }, []);
          var A = (function () {
            var e = Object(g.a)(
              v.a.mark(function e() {
                var a, t, n, r, o, i, l, s, c, m;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (void 0 !== p) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        for (a = [], t = 0; t < p.lineup.length; t++) a.push(p.lineup[t]);
                        for (n = 0; n < p.rotation.length; n++) a.push(p.rotation[n]);
                        return (e.next = 7), D(a);
                      case 7:
                        for (
                          r = e.sent,
                            o = [],
                            i = function (e) {
                              o.push(
                                r.find(function (a) {
                                  return p.lineup[e] === a._id;
                                })
                              );
                            },
                            l = 0;
                          l < p.lineup.length;
                          l++
                        )
                          i(l);
                        for (
                          s = [],
                            c = function (e) {
                              s.push(
                                r.find(function (a) {
                                  return p.rotation[e] === a._id;
                                })
                              );
                            },
                            m = 0;
                          m < p.rotation.length;
                          m++
                        )
                          c(m);
                        E({ lineup: o, rotation: s, bench: [], bullpen: [] });
                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          if (void 0 === o) return null;
          if (void 0 === i || void 0 === i.teams) return null;
          if (void 0 === p) return null;
          var y,
            b = p.emoji;
          if (void 0 === h) return <Ee />;
          var N = null === (a = o.sim) || void 0 === a ? void 0 : a.unlockedInterviews,
            T = N
              ? h.lineup.map(function (e) {
                  return (
                    <m background={c} path={"/player/".concat(e._id)} className="Team-Player-Line">
                      <div className="Team-Player-Header">{null === e || void 0 === e ? void 0 : e.name}</div>
                      <div className="Team-Player-Ratings">{ia(e)}</div>
                    </m>
                  );
                })
              : h.lineup.map(function (e) {
                  return (
                    <div className="Team-Player-Line-Blank">
                      <div className="Team-Player-Header">{null === e || void 0 === e ? void 0 : e.name}</div>
                      <div className="Team-Player-Ratings">{ia(e)}</div>
                    </div>
                  );
                }),
            S = N
              ? h.rotation.map(function (e) {
                  return (
                    <m background={c} path={"/player/".concat(e._id)} className="Team-Player-Line">
                      <div className="Team-Player-Header">{null === e || void 0 === e ? void 0 : e.name}</div>
                      <div className="Team-Player-Ratings">{la(e)}</div>
                    </m>
                  );
                })
              : h.rotation.map(function (e) {
                  return (
                    <div className="Team-Player-Line-Blank">
                      <div className="Team-Player-Header">{null === e || void 0 === e ? void 0 : e.name}</div>
                      <div className="Team-Player-Ratings">{la(e)}</div>
                    </div>
                  );
                }),
            w = (function (e, a) {
              var t = 0,
                n = 0;
              if ((console.log(a), void 0 !== a)) {
                for (var r in a.wins)
                  if (r === e) {
                    t = a.wins[r];
                    break;
                  }
                for (var o in a.losses)
                  if (o === e) {
                    n = a.losses[o];
                    break;
                  }
              }
              return [t, n];
            })(p._id, null === o || void 0 === o ? void 0 : o.standings),
            B = w[1],
            O = w[0];
          return (
            (y = (
              <r.a.Fragment>
                <div className="Team-Info">
                  <div className="Team-Header">
                    <div className="Team-LogoLine">
                      <div style={{ backgroundColor: p.mainColor }} className="Team-Logo">
                        {String.fromCodePoint(Number(b))}
                      </div>
                      <div className="Team-Attributes">
                        {void 0 !== p.seasonAttributes
                          ? p.seasonAttributes.map(function (e, a) {
                              return (
                                <div key={a} className="Team-Attributes-Icon">
                                  <na type={e} />
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>
                    <div className="Team-Name-Wrapper">
                      <header className="Team-Name">{p.fullName}</header>
                      <div className="Team-Slogan">
                        <i>"{p.slogan}"</i>
                      </div>
                      <div className="Team-Standing">{"( ".concat(O, " - ").concat(B, " )")}</div>
                    </div>
                  </div>
                </div>
                <div className="Team-Content">
                  <div className="Team-Section">
                    <div className="Team-Subheader">Lineup</div>
                    <ul>{T}</ul>
                  </div>
                  <div className="Team-Section">
                    <div className="Team-Subheader">Rotation</div>
                    <ul>{S}</ul>
                  </div>
                </div>
              </r.a.Fragment>
            )),
            (<se {...Object.assign({}, e, { className: "Team" })}>{y}</se>)
          );
        },
        ma = (t(148), r.a.createContext({ doc: void 0 })),
        ua = function (e) {
          var a = e.children,
            t = Object(n.useState)({ doc: void 0 }),
            o = Object(l.a)(t, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(function () {
              return (
                h.on("temporalDataUpdate", function (e) {
                  s(function (a) {
                    return Object(u.a)({}, a, {}, e);
                  });
                }),
                function () {
                  h.off("temporalDataUpdate");
                }
              );
            }, []),
            (<ma.Provider value={i}>{a}</ma.Provider>)
          );
        };
      ua.context = ma;
      var da = ua;
      function ha() {
        var e,
          a = Object(ce.useToasts)().addToast,
          t = Object(n.useState)(),
          o = Object(l.a)(t, 2),
          i = o[0],
          s = o[1],
          c = Object(n.useContext)(U.context),
          m = c.user,
          u = c.refreshUser,
          d = Object(n.useContext)(Fe.context).teams.find(function (e) {
            return e._id === m.favoriteTeam;
          }),
          h = Object(n.useContext)(f.context),
          E = Object(n.useContext)(da.context);
        function p(e) {
          return A.apply(this, arguments);
        }
        function A() {
          return (A = Object(g.a)(
            v.a.mark(function e(t) {
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(t.amount <= m.coins || 0 === t.amount)) {
                        e.next = 11;
                        break;
                      }
                      if ((y(t), !t.buyUrl)) {
                        e.next = 7;
                        break;
                      }
                      return (
                        (e.next = 5),
                        b(t.buyUrl, JSON.stringify(t.buyParams))
                          .then(function (e) {
                            e.json().then(function (t) {
                              t.message &&
                                (e.ok && e.status && 200 === e.status
                                  ? a(t.message, { appearance: "success" })
                                  : a(t.message, { appearance: "error" }));
                            });
                          })
                          .then(function () {
                            t.handleComplete();
                          })
                          .catch(function (e) {
                            a(e, { appearance: "error" });
                          })
                          .finally(
                            Object(g.a)(
                              v.a.mark(function e() {
                                return v.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        u(), s({ purchaseItem: void 0 });
                                      case 2:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )
                          )
                      );
                    case 5:
                      e.next = 9;
                      break;
                    case 7:
                      t.handleComplete(), s({ purchaseItem: void 0 });
                    case 9:
                      e.next = 12;
                      break;
                    case 11:
                      a("Insufficient coins!", { appearance: "error" });
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function y(e) {
          s({ purchaseItem: e });
        }
        function N(e) {
          return e.maxed ? "Maxed Out" : e.available ? (0 === e.amount ? "Get" : "Buy") : "Unavailable";
        }
        return (
          (e =
            void 0 === (null === E || void 0 === E ? void 0 : E.doc)
              ? []
              : m.unlockedShop
              ? (function (e, a, t, n) {
                  var o = [],
                    i = t.doc;
                  e.unlockedElection
                    ? o.push({
                        id: 0,
                        name: "Vote",
                        description:
                          "Each Vote can be spent in the Election to boost your team or bring important change to Blaseball.",
                        amount: 100,
                        toast: "Vote purchased. You now have ".concat(e.votes + 1),
                        available: !0,
                        icon: <re.j />,
                        buyUrl: "/api/buyVote",
                        handleComplete: function () {},
                      })
                    : o.push({
                        id: 0,
                        name: "Voting Rights",
                        description:
                          "Purchase access to the Election page, where you can participate in the league-wide voting.",
                        amount: 100,
                        available: !0,
                        toast: "Welcome, Voter! You have ".concat(e.votes, " Vote already from signing up."),
                        icon: <re.j />,
                        buyUrl: "/api/buyUnlockElection",
                        handleComplete: function () {},
                      });
                  i &&
                    i.delta &&
                    o.push({
                      id: 5,
                      name: "Friends at the Table",
                      description: "Perfect for your next Blaseball siesta. \ud83d\udecf\ufe0f",
                      amount: 0,
                      toast: "Have a great time listening.",
                      available: !0,
                      handleComplete: function () {
                        window.open("http://friendsatthetable.net/bonus-episode-sports-are-just-numerology");
                      },
                    });
                  var l = ue.maxBetTiers[Math.min(e.maxBetTier, ue.maxBetTiers.length - 1)],
                    s = ue.maxBetTiers[e.maxBetTier + 1];
                  if (void 0 !== s) {
                    var c = l.amount,
                      m = ue.maxBetTiers[e.maxBetTier + 1].amount;
                    o.push({
                      id: 1,
                      name: "High Roller Snake Oil",
                      description: "This invigorating oil allows you to place larger wagers on each game. Your current limit is "
                        .concat(c, ", it would increase to ")
                        .concat(m, "."),
                      amount: s.price,
                      toast: "Max Bet is now ".concat(m, "!"),
                      available: !0,
                      buyUrl: "/api/buyIncreaseMaxBet",
                      handleComplete: function () {},
                    });
                  } else {
                    var u = l.amount;
                    o.push({
                      id: 1,
                      name: "High Roller Snake Oil",
                      description: "This invigorating oil allows you to place larger wagers on each game. Your current limit is ".concat(
                        u,
                        ", you are maxed out."
                      ),
                      maxed: !0,
                      amount: 0,
                      handleComplete: function () {},
                    });
                  }
                  var d = ue.teamWinCoinTiers[Math.min(e.dailyCoinsTier, ue.teamWinCoinTiers.length - 1)],
                    h = ue.teamWinCoinTiers[e.dailyCoinsTier + 1];
                  void 0 !== h
                    ? o.push({
                        id: 2,
                        name: "Passive Income Potion",
                        description: "This potion will boost the coins you earn when your team wins. Your current income per win is "
                          .concat(d.amount, ", it would increase to ")
                          .concat(h.amount, "."),
                        amount: h.price,
                        toast: "Coins per win is now ".concat(h.amount),
                        available: !0,
                        buyUrl: "/api/buyIncreaseDailyCoins",
                        handleComplete: function () {},
                      })
                    : o.push({
                        id: 2,
                        name: "Passive Income Potion",
                        description: "This potion will boost the coins you earn when your team wins. Your current income per win is ".concat(
                          d.amount,
                          ", you are maxed out."
                        ),
                        maxed: !0,
                        amount: 0,
                        handleComplete: function () {},
                      });
                  if (a && a.sim && a.sim.unlockedPeanuts && t) {
                    if (
                      (o.push({
                        id: 6,
                        name: "Peanut".concat(i.alpha > 1 ? "s" : ""),
                        description:
                          i.alpha < 0
                            ? "Purchase ".concat(i.alpha, " peanuts")
                            : 0 == i.alpha
                            ? "Purchase zero peanuts."
                            : 1 == i.alpha
                            ? "Purchase a peanut."
                            : i.alpha <= 10
                            ? "Purchase a pack of ".concat(i.alpha, " peanuts.")
                            : "Purchase a bucket of ".concat(i.alpha, " peanuts."),
                        amount: i.alpha,
                        toast: "You receive "
                          .concat(i.alpha, ". You now have ")
                          .concat(e.peanuts + i.alpha, " Peanuts."),
                        available: !0,
                        buyUrl: "/api/buyADangPeanut",
                        handleComplete: function () {},
                      }),
                      i.beta > 0 || e.squirrels > 0)
                    ) {
                      var E = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
                        p = E[Math.min(e.squirrels, E.length)],
                        f = 100 * Math.pow(2, e.squirrels + 1),
                        A = E[Math.min(e.squirrels + 1, E.length)];
                      e.squirrels < Math.min(i.beta, E.length - 1)
                        ? o.push({
                            id: 7,
                            name: "Squirrel of Devouring",
                            description:
                              e.squirrels > 0
                                ? "Recruit another Peanut-hungry squirrel to your side, to help you eat Peanuts faster. You currently have "
                                    .concat(e.squirrels, " squirrel")
                                    .concat(1 === e.squirrels ? "" : "s", " capable of eating ")
                                    .concat(p, " peanut")
                                    .concat(p > 1 ? "s" : "", ".")
                                : "Recruit a Peanut-hungry squirrel to your side, to help you eat Peanuts faster.",
                            amount: f,
                            toast: "You now have "
                              .concat(e.squirrels, " squirrel")
                              .concat(1 === e.squirrels ? "" : "s", " capable of eating ")
                              .concat(A, " peanut")
                              .concat(1 === A ? "" : "s", "."),
                            available: !0,
                            buyUrl: "/api/buyADangSquirrel",
                            handleComplete: function () {},
                          })
                        : o.push({
                            id: 7,
                            name: "Squirrel of Devouring",
                            description: "Recruit a Peanut-hungry squirrel to your side, to help you eat Peanuts faster. You currently have "
                              .concat(e.squirrels, " squirrel")
                              .concat(1 === e.squirrels ? "" : "s", " capable of eating ")
                              .concat(p, " peanut")
                              .concat(p > 1 ? "s" : "", "."),
                            amount: 100,
                            toast: "You receive 100 peanuts.",
                            available: !0,
                            maxed: !0,
                            handleComplete: (function () {
                              var e = Object(g.a)(
                                v.a.mark(function e() {
                                  return v.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function () {
                                return e.apply(this, arguments);
                              };
                            })(),
                          });
                    }
                  }
                  o.push({
                    id: 4,
                    name: "Beg",
                    description:
                      "If you have no coins, you may beg the Blaseball Gods to grant you more, so that you may continue gambling.",
                    amount: 0,
                    toast: "You find coins in your pocket.",
                    available: 0 === e.coins,
                    buyUrl: "/api/logBeg",
                    handleComplete: function () {},
                  }),
                    n &&
                      o.push({
                        id: 3,
                        name: "Fair Weather Flute",
                        description:
                          "Plays a tune that allows you to change your favorite team. Your former team will be disappointed, but understand.",
                        amount: 2e3,
                        toast: "You abandon the ".concat(n.nickname, "."),
                        available: !0,
                        buyUrl: "/api/buyUpdateFavoriteTeam",
                        handleComplete: function () {},
                      });
                  return o;
                })(m, h, E, d)
              : (function (e) {
                  var a = [];
                  return (
                    a.push({
                      id: 10,
                      name: "Membership Card",
                      description: "Grants access to the entire shop.",
                      amount: 20,
                      toast: "Welcome, Shop Member!",
                      available: !0,
                      buyUrl: "/api/buyUnlockShop",
                      handleComplete: function () {},
                    }),
                    a
                  );
                })()),
          (
            <div className="Shop">
              <div className="Shop-Header">Shop</div>
              <div className="Shop-Description">
                Purchase items to enhance your Blaseball experience. New items may appear each week, so keep checking
                in.
              </div>
              {void 0 !== (null === E || void 0 === E ? void 0 : E.doc) ? (
                <div className="Shop-Grid">
                  {e.map(function (e, a) {
                    return (
                      <div className="Shop-Item" key={a}>
                        <div className="Shop-Item-Header">
                          {e.name}
                          <span className="Shop-Item-Icon">{e.icon}</span>
                        </div>
                        <div className="Shop-Item-Body">{e.description}</div>
                        <div className="Shop-Item-Checkout">
                          <re.k className="Shop-Item-Coins" />
                          <div className="Shop-Item-Amount">
                            {(function (e) {
                              return e.maxed ? "N/A" : 0 === e.amount ? "Free" : e.amount.toString();
                            })(e)}
                          </div>
                          <div className="Shop-Item-ButtonContainer">
                            {i && i.purchaseItem && i.purchaseItem.id === e.id ? (
                              <he />
                            ) : (
                              (function (e) {
                                return !e.available || e.maxed ? (
                                  <te.a
                                    className="Shop-Item-Button"
                                    type="submit"
                                    variant="secondary"
                                    disabled={!0}
                                    onClick={function () {
                                      p(e);
                                    }}
                                  >
                                    {N(e)}
                                  </te.a>
                                ) : (
                                  <te.a
                                    className="Shop-Item-Button"
                                    type="submit"
                                    variant="success"
                                    onClick={function () {
                                      p(e);
                                    }}
                                  >
                                    {N(e)}
                                  </te.a>
                                );
                              })(e)
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <Ee />
              )}
            </div>
          )
        );
      }
      t(149);
      var Ea = function (e) {
          var a = Object(n.useContext)(U.context).refreshUser,
            t = Object(n.useContext)(Fe.context),
            o = Object(n.useState)(),
            i = Object(l.a)(o, 2),
            s = i[0],
            c = i[1],
            m = (function () {
              var t = Object(g.a)(
                v.a.mark(function t() {
                  return v.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), b("/api/updateFavoriteTeam", JSON.stringify({ teamId: s }));
                        case 2:
                          return (t.next = 4), a();
                        case 4:
                          e.dismiss();
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return (
            <se {...Object.assign({}, e, { className: "Welcome" })}>
              <div className="Welcome-Header">Welcome to Blaseball</div>
              <div className="Welcome-Subheader">To begin, pick your favorite team</div>
              <div className="Welcome-Teams-Wrapper">
                <div className="Welcome-Teams">
                  {t.teams
                    .sort(function (e, a) {
                      var t = e.nickname.toUpperCase(),
                        n = a.nickname.toUpperCase();
                      return t < n ? -1 : t > n ? 1 : 0;
                    })
                    .map(function (e, a) {
                      var t = s === e._id;
                      return (
                        <div
                          onClick={function () {
                            return c(e._id);
                          }}
                          key={a}
                          className={"Welcome-Team" + (t ? " Welcome-Team--Selected" : "")}
                        >
                          <div className="TeamLogo" style={{ background: e.mainColor }}>
                            {String.fromCodePoint(e.emoji)}
                          </div>
                          <div className="Welcome-Team-Name-Wrapper">
                            <div className="Welcome-Team-Location">{e.location}</div>
                            <div className="Welcome-Team-Name">{e.nickname}</div>
                          </div>
                          <div className="Welcome-Team-Overlay">
                            <Be.a />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="Welcome-Message"> </div>
              <div className="Welcome-Submit-Wrapper">
                <button onClick={m} disabled={!s} className={"Welcome-Submit" + (s ? " Welcome-Submit--Ready" : "")}>
                  Submit
                </button>
              </div>
            </se>
          );
        },
        pa = function (e) {
          var a = Object(n.useContext)(U.context).user,
            t = Object(n.useState)(!1),
            o = Object(l.a)(t, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(function () {
              a.isFetching || (void 0 !== a.favoriteTeam && null !== a.favoriteTeam && "null" !== a.favoriteTeam)
                ? s(!1)
                : s(!0);
            }, []),
            a && a.isSignedIn && i ? (
              <Ea
                {...Object.assign({}, e, {
                  dismiss: Object(g.a)(
                    v.a.mark(function e() {
                      return v.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              s(!1);
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  ),
                })}
              />
            ) : null
          );
        },
        fa =
          (t(150),
          function (e) {
            var a = Object(n.useContext)(U.context).initUser,
              t = Object(s.f)(),
              o = Object(ce.useToasts)().addToast,
              i = Object(s.g)(),
              l = i.state && i.state.background ? i.state.background.pathname : "",
              c = e.isModal,
              m = e.isLogin,
              u = Object(n.useRef)(null),
              d = Object(n.useRef)(null),
              h = Object(s.h)().code;
            return (
              <div className={"".concat(c ? "" : "Auth-SignupWrapper")}>
                {!c && <ea />}
                <se {...Object.assign({}, e, { className: "Auth" })}>
                  <header className="Auth-Header">{m ? "Login to Blaseball" : "Signup for Blaseball"}</header>
                  <form
                    onSubmit={function (e) {
                      e.preventDefault();
                      var n = { username: u.current.value, password: d.current.value, code: h, isLogin: m };
                      b("/auth/local", JSON.stringify(n)).then(function (e) {
                        e.ok && e.status && 200 === e.status
                          ? (m || o("Account Created", { appearance: "success" }), a(), t.push("/"))
                          : e.json().then(function (e) {
                              o(e.error || "Error", { appearance: "error" });
                            });
                      });
                    }}
                  >
                    <div>
                      <input ref={u} className="Auth-Input" placeholder="Email" type="text" name="username" />
                    </div>
                    <div>
                      <input ref={d} className="Auth-Input" placeholder="Password" type="password" name="password" />
                    </div>
                    <div>
                      <input className="Auth-Submit" type="submit" value="Continue" />
                    </div>
                  </form>
                  <div className="Auth-Divider">OR</div>
                  <a className="Auth-SocialAuth" href={"auth/apple?redirectUrl=".concat(l)}>
                    <div className="Auth-SocialAuth-Icon-Container">
                      <oe.b className="Auth-SocialAuth-Icon" />
                    </div>
                    Continue with Apple
                  </a>
                  <a className="Auth-SocialAuth" href={"auth/facebook?redirectUrl=".concat(l)}>
                    <div className="Auth-SocialAuth-Icon-Container">
                      <Be.c />
                    </div>{" "}
                    Continue with Facebook
                  </a>
                  <a className="Auth-SocialAuth" href={"auth/google?redirectUrl=".concat(l)}>
                    <div className="Auth-SocialAuth-Icon-Container">
                      <oe.c className="Auth-SocialAuth-Icon" />
                    </div>
                    Continue with Google
                  </a>
                  <a className="Auth-CTA" href={m ? "/signup" : "/login"}>
                    {m ? "Not on Blaseball yet? Signup" : "Already a member? Log in"}
                  </a>
                </se>
              </div>
            );
          }),
        Aa = (t(151), r.a.createContext({ bonuses: [], decrees: [], decreesToPass: 0 })),
        va = function (e) {
          var a = e.children,
            t = Object(n.useState)({ bonuses: [], decrees: [], decreesToPass: 0 }),
            o = Object(l.a)(t, 2),
            i = o[0],
            s = o[1];
          function c() {
            return m.apply(this, arguments);
          }
          function m() {
            return (m = Object(g.a)(
              v.a.mark(function e() {
                var a;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), S();
                      case 2:
                        (a = e.sent), s(a);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return (
            Object(n.useEffect)(function () {
              var e = setInterval(c, 1e4);
              return (
                c(),
                function () {
                  return clearInterval(e);
                }
              );
            }, []),
            (<Aa.Provider value={i}>{a}</Aa.Provider>)
          );
        };
      va.context = Aa;
      var ga,
        ya = va;
      t(152);
      !(function (e) {
        (e[(e.DECREE = 0)] = "DECREE"), (e[(e.BONUS = 1)] = "BONUS");
      })(ga || (ga = {}));
      var ba = function (e) {
          var a = Object(ce.useToasts)().addToast,
            t = e.entityId,
            o = e.data,
            i = e.onSubmit,
            s = Object(n.useState)(!1),
            c = Object(l.a)(s, 2),
            m = c[0],
            u = c[1];
          return !0 === m ? (
            <Ee />
          ) : (
            <te.a
              onClick={function () {
                u(!0);
                var e = { entityId: t, voteType: ga.BONUS, data: o };
                b("/api/vote", JSON.stringify(e))
                  .then(function (e) {
                    e.status && 200 === e.status
                      ? (a("Vote Placed", { appearance: "success" }), i())
                      : (a("Error", { appearance: "error" }), console.log(e));
                  })
                  .finally(
                    Object(g.a)(
                      v.a.mark(function e() {
                        return v.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                u(!1);
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )
                  );
              }}
              variant="success"
              className="Blessings-Submit-Button"
              disabled={!t}
            >
              Submit Blessing Vote
            </te.a>
          );
        },
        Na = function () {
          return (
            <a href="/login">
              <te.a className="Blessings-Submit-Button">Login to Vote</te.a>
            </a>
          );
        },
        Ta = function () {
          return (
            <a href="/welcome">
              <te.a className="Blessings-Submit-Button">Pick a Favorite Team to Vote</te.a>
            </a>
          );
        },
        Sa = function () {
          return (
            <a href="/shop">
              <te.a className="Blessings-Submit-Button">Buy Another Vote</te.a>
            </a>
          );
        },
        wa = function (e) {
          var a = e.isActive;
          return <button className="Blessings-Option-Button">Select{a ? "ed" : ""}</button>;
        },
        Ba = function (e) {
          var a = e.title,
            t = e.description,
            n = e._id,
            o = e.isActive,
            i = e.onSelect;
          return (
            <div
              className={"Blessings-Option" + (o ? " Blessings-Option-Current" : "")}
              onClick={function () {
                return i(n);
              }}
            >
              <div className="Blessings-Option-Header">{a}</div>
              <div className="Blessings-Option-Description">{t}</div>
              <wa isActive={o} />
            </div>
          );
        },
        Oa = function () {
          var e = Object(n.useContext)(ya.context),
            a = Object(n.useContext)(U.context),
            t = a.user,
            o = a.refreshUser,
            i = Object(n.useState)(),
            s = Object(l.a)(i, 2),
            c = s[0],
            m = s[1],
            u = <Na />;
          if (
            (t.isFetching || !t.isSignedIn || t.favoriteTeam || (u = <Ta />),
            t.isFetching || !t.isSignedIn || t.votes || (u = <Sa />),
            !t.isFetching && t.isSignedIn && t.favoriteTeam && t.votes)
          ) {
            var d = { team1: t.favoriteTeam };
            u = (
              <ba
                entityId={c}
                data={d}
                onSubmit={function () {
                  o(), m(void 0);
                }}
              />
            );
          }
          return (
            <div className="Blessings">
              <h2 className="Blessings-Header">Blessings</h2>
              <p className="Blessings-Description">
                Each Blessing will be rewarded to a randomly selected player. Vote for Blessings for chances to win them
                for your team.
              </p>
              <div className="Blessings-Container">
                {e.bonuses.map(function (e, a) {
                  return (
                    <Ba
                      {...Object.assign({ key: a }, e, {
                        isActive: c === e._id,
                        onSelect: function (e) {
                          return m(e);
                        },
                      })}
                    />
                  );
                })}
              </div>
              {u}
            </div>
          );
        };
      t(153);
      function Ia() {
        return (Ia =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ka(e, a) {
        if (null == e) return {};
        var t,
          n,
          r = (function (e, a) {
            if (null == e) return {};
            var t,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (t = o[n]), a.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (t = o[n]), a.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
        }
        return r;
      }
      var Ca = (
          <path d="M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z" />
        ),
        Ra = function (e) {
          var a = e.svgRef,
            t = e.title,
            n = ka(e, ["svgRef", "title"]);
          return (
            <svg {...Ia({ viewBox: "0 0 24 24", ref: a }, n)}>
              {t ? <title>{t}</title> : null}
              {Ca}
            </svg>
          );
        },
        Ga = r.a.forwardRef(function (e, a) {
          return <Ra {...Ia({ svgRef: a }, e)} />;
        });
      t.p;
      function La() {
        return (La =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Da(e, a) {
        if (null == e) return {};
        var t,
          n,
          r = (function (e, a) {
            if (null == e) return {};
            var t,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (t = o[n]), a.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (t = o[n]), a.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
        }
        return r;
      }
      var Ma = (
          <path d="M7.919 17.377l-4.869-13.377h-2.05c-.266 0-.52-.105-.707-.293-.188-.187-.293-.442-.293-.707 0-.552.447-1 1-1h3.45l5.469 15.025c.841.101 1.59.5 2.139 1.088l11.258-4.097.684 1.879-11.049 4.021c.032.19.049.385.049.584 0 1.932-1.569 3.5-3.5 3.5-1.932 0-3.5-1.568-3.5-3.5 0-1.363.781-2.545 1.919-3.123zm1.581 1.811c.724 0 1.312.588 1.312 1.312 0 .724-.588 1.313-1.312 1.313-.725 0-1.313-.589-1.313-1.313s.588-1.312 1.313-1.312zm13.314-6.512l-11.418 4.156-2.736-7.518 11.418-4.156 2.736 7.518zm-8.71-3.215l-2.88 1.048 1.368 3.759 7.659-2.787-1.368-3.759-2.9 1.055.684 1.879-1.879.685-.684-1.88zm2.672-4.165l-8.458 3.078-1.927-5.296 8.457-3.078 1.928 5.296zm-3.123-2.733l-4.699 1.711.56 1.537 4.698-1.71-.559-1.538z" />
        ),
        Pa = function (e) {
          var a = e.svgRef,
            t = e.title,
            n = Da(e, ["svgRef", "title"]);
          return (
            <svg {...La({ viewBox: "0 0 24 24", ref: a }, n)}>
              {t ? <title>{t}</title> : null}
              {Ma}
            </svg>
          );
        },
        Qa = r.a.forwardRef(function (e, a) {
          return <Pa {...La({ svgRef: a }, e)} />;
        });
      t.p;
      function Wa() {
        return (Wa =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ja(e, a) {
        if (null == e) return {};
        var t,
          n,
          r = (function (e, a) {
            if (null == e) return {};
            var t,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (t = o[n]), a.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (t = o[n]), a.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
        }
        return r;
      }
      var xa = (
          <path d="M5.495 2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505c-1.375 0-1.375-2 0-2zm.505 4h14v6h-6c-1.104 0-2 .896-2 2s.896 2 2 2h6v6h-14v-16zm9 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z" />
        ),
        Ua = function (e) {
          var a = e.svgRef,
            t = e.title,
            n = ja(e, ["svgRef", "title"]);
          return (
            <svg {...Wa({ viewBox: "0 0 24 24", ref: a }, n)}>
              {t ? <title>{t}</title> : null}
              {xa}
            </svg>
          );
        },
        Ya = r.a.forwardRef(function (e, a) {
          return <Ua {...Wa({ svgRef: a }, e)} />;
        });
      t.p;
      function Ha() {
        return (Ha =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Ja(e, a) {
        if (null == e) return {};
        var t,
          n,
          r = (function (e, a) {
            if (null == e) return {};
            var t,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (t = o[n]), a.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (t = o[n]), a.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
        }
        return r;
      }
      var Fa,
        Va = (
          <path d="M8 1c0-.552.448-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-.552 0-1-.448-1-1zm13 20.554c0 1.284-1.023 2.446-2.424 2.446h-13.153c-1.4 0-2.423-1.162-2.423-2.445 0-.35.076-.709.242-1.057l3.743-7.856c1.04-2.186 2.015-4.581 2.015-7.007v-1.635h2l-.006 2c-.087 2.623-1.09 5.092-1.973 7h3.682l4.377 9h1.496c.309 0 .52-.342.377-.644l-3.743-7.854c-1.046-2.197-2.12-4.791-2.21-7.502v-2h2v1.635c0 2.426.975 4.82 2.016 7.006l3.743 7.856c.165.348.241.707.241 1.057zm-12-1.054c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5 1.5.671 1.5 1.5 1.5 1.5-.671 1.5-1.5zm2-3.5c0-.553-.448-1-1-1-.553 0-1 .447-1 1s.447 1 1 1c.552 0 1-.447 1-1zm3 3c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z" />
        ),
        qa = function (e) {
          var a = e.svgRef,
            t = e.title,
            n = Ja(e, ["svgRef", "title"]);
          return (
            <svg {...Ha({ width: 24, height: 24, viewBox: "0 0 24 24", ref: a }, n)}>
              {t ? <title>{t}</title> : null}
              {Va}
            </svg>
          );
        },
        Ka = r.a.forwardRef(function (e, a) {
          return <qa {...Ha({ svgRef: a }, e)} />;
        });
      t.p;
      !(function (e) {
        (e[(e.DECREE = 0)] = "DECREE"), (e[(e.BONUS = 1)] = "BONUS");
      })(Fa || (Fa = {}));
      var za = function (e) {
          var a = Object(ce.useToasts)().addToast,
            t = e.entityId,
            o = e.data,
            i = e.onSubmit,
            s = Object(n.useState)(!1),
            c = Object(l.a)(s, 2),
            m = c[0],
            u = c[1];
          return !0 === m ? (
            <Ee />
          ) : (
            <te.a
              onClick={function () {
                u(!0);
                var e = { entityId: t, voteType: Fa.DECREE, data: o };
                b("/api/vote", JSON.stringify(e))
                  .then(function (e) {
                    e.status && 200 === e.status
                      ? (a("Vote Placed", { appearance: "success" }), i())
                      : (a("Error", { appearance: "error" }), console.log(e));
                  })
                  .finally(
                    Object(g.a)(
                      v.a.mark(function e() {
                        return v.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                u(!1);
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )
                  );
              }}
              variant="success"
              className="Decrees-Submit-Button"
              disabled={!t}
            >
              Submit Decree Vote
            </te.a>
          );
        },
        Za = function () {
          return (
            <a href="/login">
              <te.a className="Decrees-Submit-Button">Login to Vote</te.a>
            </a>
          );
        },
        Xa = function () {
          return (
            <a href="/welcome">
              <te.a className="Decrees-Submit-Button">Pick a Favorite Team to Vote</te.a>
            </a>
          );
        },
        _a = function () {
          return (
            <c.b to={{ pathname: "/shop" }}>
              <te.a className="Decrees-Submit-Button">Buy Another Vote</te.a>
            </c.b>
          );
        },
        $a = function (e) {
          var a = e.isActive;
          return <button className="Decrees-Option-Button">Select{a ? "ed" : ""}</button>;
        };
      function et(e) {
        return "forbidden_book" === e ? (
          <Ya className="Decrees-Option-Icon" />
        ) : "eliminate_team" === e ? (
          <Qa className="Decrees-Option-Icon" />
        ) : "redistribute_wealth" === e ? (
          <Ga className="Decrees-Option-Icon" />
        ) : "four_for_four" === e ? (
          <re.e className="Decrees-Option-Icon" />
        ) : "peanuts" === e ? (
          <re.g className="Decrees-Option-Icon" />
        ) : "popular_evolution" === e ? (
          <Ka className="Decrees-Option-Icon" />
        ) : "enhanced_shame" === e ? (
          <re.i className="Decrees-Option-Icon" />
        ) : "late_stage" === e ? (
          <re.b className="Decrees-Option-Icon" />
        ) : "blaserunning" === e ? (
          <re.d className="Decrees-Option-Icon" />
        ) : "eat_the_rich" === e ? (
          <re.c className="Decrees-Option-Icon" />
        ) : "eat_the_crust" === e ? (
          <re.h className="Decrees-Option-Icon" />
        ) : "interviews" === e ? (
          <re.f className="Decrees-Option-Icon" />
        ) : (
          <div />
        );
      }
      var at = function (e) {
          var a = e.title,
            t = e.description,
            n = e._id,
            o = e.isActive,
            i = e.onSelect;
          return (
            <div
              className={"Decrees-Option" + (o ? " Decrees-Option-Current" : "")}
              onClick={function () {
                return i(n);
              }}
            >
              {et(n)}
              <div className="Decrees-Option-Header">{a}</div>
              {t && <p className="Decrees-Option-Description">{t}</p>}
              <$a isActive={o} />
            </div>
          );
        },
        tt = function () {
          var e = Object(n.useContext)(ya.context),
            a = Object(n.useContext)(U.context),
            t = a.user,
            o = a.refreshUser,
            i = Object(n.useState)(),
            s = Object(l.a)(i, 2),
            c = s[0],
            m = s[1],
            u = Object(n.useState)(!1),
            d = Object(l.a)(u, 2),
            h = (d[0], d[1]),
            E = <Za />;
          if (
            (t.isFetching || !t.isSignedIn || t.favoriteTeam || (E = <Xa />),
            t.isFetching || !t.isSignedIn || t.votes || (E = <_a />),
            !t.isFetching && t.isSignedIn && t.favoriteTeam && t.votes)
          ) {
            var p = { team1: t.favoriteTeam };
            E = (
              <za
                entityId={c}
                data={p}
                onSubmit={function () {
                  o(), m(void 0), h(!0);
                }}
              />
            );
          }
          return (
            <div className="Decrees">
              <h2 className="Decrees-Header">Decrees</h2>
              <p className="Decrees-Description">
                The {e.decreesToPass > 1 ? e.decreesToPass : ""} Decree{e.decreesToPass > 1 ? "s" : ""} with the most
                votes from the community will go into effect.
              </p>
              <div className="Decrees-Container">
                {e.decrees.map(function (e, a) {
                  return (
                    <at
                      {...Object.assign({ key: a }, e, {
                        isActive: c === e._id,
                        onSelect: function (e) {
                          return m(e);
                        },
                      })}
                    />
                  );
                })}
              </div>
              {E}
            </div>
          );
        };
      t(154);
      function nt() {
        var e,
          a = Object(n.useContext)(f.context),
          t = Object(n.useState)({
            recap: {
              name: "",
              voteCount: 0,
              totalDecreeVotes: 0,
              totalBonusVotes: 0,
              bonusResults: [],
              decreeResults: [],
            },
            decreeResults: [{ description: "", decreeId: "", decreeTitle: "", totalVotes: 0 }],
            bonusResults: [
              {
                description: "",
                bonusTitle: "",
                teamId: "",
                team: { nickname: "", mainColor: "", emoji: 0 },
                teamVotes: 0,
                highestTeam: "",
                highestTeamNickname: "",
                highestTeamVotes: 0,
                totalVotes: 0,
              },
            ],
          }),
          o = Object(l.a)(t, 2),
          i = o[0],
          s = o[1],
          c = Object(n.useState)(!1),
          m = Object(l.a)(c, 2),
          u = m[0],
          d = m[1],
          h = Object(n.useContext)(Fe.context);
        function E() {
          return (E = Object(g.a)(
            v.a.mark(function e() {
              var t, n, r, o, i, l, c, m, u, d, E, p, f, A, g;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), B(null === (t = a.sim) || void 0 === t ? void 0 : t.season);
                    case 2:
                      if (((n = e.sent), (r = []), (o = void 0), !n)) {
                        e.next = 16;
                        break;
                      }
                      return (e.next = 8), I(n.bonusResults);
                    case 8:
                      for (
                        i = e.sent,
                          r = [],
                          l = function (e) {
                            r.push(
                              i.find(function (a) {
                                return a._id === n.bonusResults[e];
                              })
                            );
                          },
                          c = 0;
                        c < n.bonusResults.length;
                        c++
                      )
                        l(c);
                      return (e.next = 14), C(n.decreeResults);
                    case 14:
                      for (o = e.sent, m = 0; m < i.length; m++)
                        for (u = i[m].teamId, d = i[m].highestTeam, E = 0; E < h.teams.length; E++)
                          h.teams[E]._id === u &&
                            ((p = h.teams[E]),
                            (f = p.mainColor),
                            (A = p.emoji),
                            (g = p.nickname),
                            (i[m].team = { mainColor: f, emoji: A, nickname: g })),
                            h.teams[E]._id === d && (i[m].highestTeamNickname = h.teams[E].nickname);
                    case 16:
                      s({ recap: n, bonusResults: r, decreeResults: o });
                    case 17:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        if (
          (Object(n.useEffect)(
            function () {
              d(!0),
                (function () {
                  return E.apply(this, arguments);
                })().then(function () {
                  d(!1);
                });
            },
            [null === (e = a.sim) || void 0 === e ? void 0 : e.season]
          ),
          !a || !a.sim || !i || !i.recap)
        )
          return null;
        var p =
            i.recap.decreeResults.length > 0 ? (
              <div className="Recap-Results">
                <h2 className="Recap-ResultsHeader">Decrees</h2>
                {i.decreeResults.map(function (e, a) {
                  return (
                    <div className="Recap-Decree-Container">
                      <div className="Recap-Decree-Info">
                        <div className="Recap-Decree-Header">{e.decreeTitle}</div>
                        <div className="Recap-Decree-Votes">
                           - {e.totalVotes} Votes, {Math.round((e.totalVotes / i.recap.totalDecreeVotes) * 100)}% of all
                          Decree Votes
                        </div>
                      </div>
                      <div className="Recap-Decree-Content">
                        <div className="Recap-Decree-Icon">{et(e.decreeId)}</div>
                        <div className="Recap-Decree-Description">
                          {e.description.split("\n").map(function (e, a) {
                            return (
                              <div key={a} className="Recap-Decree-Description-Line">
                                {e}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null,
          A =
            i.recap.bonusResults.length > 0 ? (
              <div className="Recap-Results">
                <h2 className="Recap-ResultsHeader">Blessings</h2>
                {i.bonusResults.length > 0 ? (
                  i.bonusResults.map(function (e, a) {
                    return (
                      <div key={a} className="Recap-Blessing-Container">
                        <div className="Recap-Blessing-Info">
                          <div className="Recap-Blessing-Header">{e.bonusTitle}</div>
                          <div className="Recap-Blessing-Votes">
                             - {e.totalVotes} Vote{e.totalVotes > 1 ? "s" : ""} Cast
                          </div>
                        </div>
                        <div className="Recap-Blessing-Content">
                          <div className="Recap-Blessing-Team" style={{ background: e.team.mainColor }}>
                            {String.fromCodePoint(e.team.emoji)}
                          </div>
                          <div className="Recap-Blessing-Description">
                            {e.description.split("\n").map(function (e, a) {
                              return (
                                <div key={a} className="Recap-Blessing-Description-Line">
                                  {e}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="Recap-Blessing-VoteContainer">
                          <div className="Recap-Blessing-Votes">
                            The {e.team.nickname} had {Math.round((e.teamVotes / e.totalVotes) * 100)}% of the Votes
                          </div>
                          {e.team.nickname === e.highestTeamNickname || e.teamVotes === e.highestTeamVotes ? (
                            <div className="Recap-Blessing-Votes">They were the highest bidders.</div>
                          ) : (
                            <div className="Recap-Blessing-Votes">
                              Highest Bidder - The {e.highestTeamNickname} with{" "}
                              {Math.round((e.highestTeamVotes / e.totalVotes) * 100)}%
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="Recap-Blessing-Container">"No Bonuses were claimed."</div>
                )}
              </div>
            ) : null,
          y = null === A && null === p ? <div className="Recap-Note">Nothing happened in this Election.</div> : null;
        return (
          <div className="Recap">
            <div className="Recap-Header">The Results are in.</div>
            {u ? (
              <Ee />
            ) : (
              <div>
                <div className="Recap-Name">{i.recap.name}</div>
                <div className="Recap-Body">
                  {p}
                  {A}
                  {y}
                </div>
              </div>
            )}
          </div>
        );
      }
      function rt() {
        var e = Object(n.useContext)(U.context).user,
          a = Object(n.useContext)(f.context);
        return a && a.sim ? 0 === a.sim.phase ? <nt /> : e.unlockedElection ? <ot /> : <lt /> : null;
      }
      function ot() {
        var e,
          a = Object(n.useContext)(f.context),
          t = void 0 !== a.sim && void 0 !== a.sim.season ? a.sim.season : -1;
        return (
          <div className="Offseason">
            <div className="Offseason-Info">
              <div className="Offseason-Header">
                Season <span className="Offseason-Number">{t + 1}</span> Election
              </div>
              <div className="Offseason-Description">
                Votes are counted up and changes are made at the end of every week, between seasons of Blaseball. This
                Election ends in...
              </div>
              <je dateString={null === (e = a.sim) || void 0 === e ? void 0 : e.nextElectionEnd} />
            </div>
            <div className="Offseason-Body">
              <ya value={{ bonuses: [], decrees: [], decreesToPass: 0 }}>
                <it />
              </ya>
            </div>
          </div>
        );
      }
      function it() {
        var e = Object(n.useContext)(ya.context);
        return void 0 === e || 0 === e.bonuses.length || 0 === e.decrees.length ? (
          <Ee />
        ) : (
          <r.a.Fragment>
            <tt />
            <Oa />
          </r.a.Fragment>
        );
      }
      function lt() {
        Object(n.useContext)(f.context);
        return (
          <div className="Offseason">
            <div className="Offseason-Info">
              <div className="Offseason-Header">Election</div>
              <div className="Offseason-Description">
                Votes are counted up and changes are made at the end of every week, between seasons of Blaseball.
              </div>
              <div className="Offseason-Description">
                <c.b className="Offseason-Description-Link" to={{ pathname: "/shop" }}>
                  Purchase your Voting Rights in the Shop to participate.
                </c.b>
              </div>
            </div>
          </div>
        );
      }
      t(155);
      function st(e) {
        var a = Object(n.useContext)(Fe.context),
          t = Object(n.useContext)(f.context);
        if (void 0 === a || void 0 === t) return null;
        var o = a.teams.find(function (e) {
          var a;
          return e._id === (null === (a = t.postseason.playoffs) || void 0 === a ? void 0 : a.winner);
        });
        if (void 0 === o) return null;
        var i = void 0 !== t.sim ? t.sim.season : -1,
          l = void 0 !== o ? o.mainColor : "#ffffff",
          s = void 0 !== o ? o.fullName : "",
          c =
            void 0 !== o ? (
              <div className="PlayoffsEnd-Body">
                Your Season {i + 1} champions are the{" "}
                <span className="PlayoffsEnd-Callout" style={{ color: l }}>
                  {s}!
                </span>
              </div>
            ) : null;
        return (
          <div>
            <div className="GodsDay">
              <div className="GodsDay-Header">Blaseball Gods' Day</div>
              {c}
              <div className="GodsDay-Body">
                Welcome to Blaseball. We're taking a brief break. Check the Election page for the results of last
                season's voting, and we hope to see you again when Blaseball is back.
              </div>
            </div>
            <qe />
          </div>
        );
      }
      t(156);
      var ct = function () {
          return (
            <div className="Privacy">
              <h1 className="Privacy-Header">Privacy Policy</h1>
              <div className="Privacy-Content">
                <h2 className="Privacy-Subheader">Introduction</h2>
                <p>
                  The Game Band ("<b>The Game Band</b>" or "<b>We</b>") respect your privacy and are committed to
                  protecting it through our compliance with this policy. This policy describes:
                </p>
                <ul>
                  <li>
                    The types of information we may collect or that you may provide when you download, install, access,
                    or use the Game, “BLASEBALL” (the “<b>Game</b>"); and
                  </li>
                  <li>
                    Our practices for collecting, using, maintaining, protecting, and disclosing that information.
                  </li>
                </ul>
                <p>
                  This policy applies only to information we collect on the Game and in email, text, and other
                  electronic communications sent through or in connection with the Game. This policy DOES NOT apply to
                  information that:
                </p>
                <ul>
                  <li>We collect offline, or</li>
                  <li>You provide to or is collected by any third party (see Third-Party Information Collection).</li>
                </ul>
                <p>
                  Third parties may have their own privacy policies, which we encourage you to read before providing
                  information on or through them.
                </p>
                <p>
                  Please read this policy carefully to understand our policies and practices regarding your information
                  and how we will treat it. If you do not agree with our policies and practices, do not download,
                  register with, or use the Game. By downloading, registering with, or using this Game you agree to this
                  privacy policy. This policy may change from time to time (see Changes to Our Privacy Policy). Your
                  continued use of this Game after we revise this policy means you accept those changes, so please check
                  the policy periodically for updates.
                </p>
                <h2 className="Privacy-Subheader">Children Under the Age of 13</h2>
                <p>
                  The Game is not intended for children under 13 years of age, and we do not knowingly collect personal
                  information from children under 13. If we learn we have collected or received personal information
                  from a child under 13 without verification of parental consent, we will delete that information. If
                  you believe we might have any information from or about a child under 13, please contact us at{" "}
                  <a href="mailto:legal@thegameband.com">legal@thegameband.com</a>.
                </p>
                <h2 className="Privacy-Subheader">Information We Collect and How We Collect It</h2>
                <p>We collect several types of information from and about users of the Game, from two sources:</p>
                <ul>
                  <li>You, either directly when provide it to us or automatically when you use the Game; and</li>
                  <li>Third parties</li>
                </ul>
                <h3 className="Privacy-Miniheader">
                  Information You Provide to Us <b>Directly</b>
                </h3>
                <p>
                  When using the Game, you may provide us with certain types of information which may include,
                  information:
                </p>
                <ul>
                  <li>
                    By which you may be personally identified, such as your name, email address, or any other identifier
                    by which you may be contacted online or offline ("<b>personal information</b>").
                  </li>
                  <li>About your internet connection, the equipment you use to access the Game, and usage details.</li>
                </ul>
                <p>This information includes: </p>
                <ul>
                  <li>Information you provide us when you create an account.</li>
                  <li>
                    Information provided by your device, by which to identify it, when you download and use the Game.
                  </li>
                  <li>
                    Records and copies of your correspondence (including email addresses and phone numbers), if you
                    contact us.
                  </li>
                </ul>
                <h3 className="Privacy-Miniheader">Information Collected Automatically When You Use The Game</h3>
                <p>When you download, access, and use the Game it may use technology to automatically collect:</p>
                <ul>
                  <li>
                    <b>Usage Details.</b> When you access and use the Game, we may automatically collect certain details
                    of your access to and use of the Game including traffic data, logs, communication data and the
                    resources that you access and use on or through the Game.
                  </li>
                  <li>
                    <b>Device or Computer Information.</b> We may collect information about your computer, mobile device
                    and internet connection, including the device's unique device identifier, IP address, operating
                    system, browser type, mobile network information, and the device's telephone number.
                  </li>
                </ul>
                <p>
                  If you do not want us to collect this information do not use or download the Game or delete it from
                  your device.
                </p>
                <h2 className="Privacy-Subheader">Information Collection Technologies</h2>
                <p>The technologies we use for automatic information collection may include:</p>
                <ul>
                  <li>
                    <b>Cookies (or mobile cookies).</b> A cookie is a small file placed on your computer or smartphone.
                    It may be possible to refuse to accept mobile cookies by activating the appropriate setting on your
                    smartphone. However, if you select this setting you may be unable to access certain parts of the
                    Game
                  </li>
                </ul>
                <h2 className="Privacy-Subheader">How We Use Your Information</h2>
                <p>
                  We use information that we collect about you or that you provide to us, including any personal
                  information, to:
                </p>
                <ul>
                  <li>
                    Provide you with the Game, and any other information, products or services that you specifically
                    request from us.
                  </li>
                  <li>Provide you with news and information about us and the Game.</li>
                  <li>Improve and optimize the Game and our users’ experiences.</li>
                  <li>Fulfill any other purpose for which you provide it.</li>
                  <li>
                    Carry out our obligations and enforce our rights arising from any contracts entered into between you
                    and us, including for billing and collection.
                  </li>
                  <li>
                    Notify you when Game updates are available, and of changes to any products or services we offer or
                    provide though it.
                  </li>
                </ul>
                <p>
                  The usage information we collect helps us to improve the Game and to deliver a better and more
                  personalized experience by enabling us to:
                </p>
                <ul>
                  <li>Estimate our audience size, demographics and usage patterns.</li>
                  <li>
                    Store information about your preferences, allowing us to tailor our services according to your
                    individual interests.
                  </li>
                  <li>Recognize you when you use the Game.</li>
                </ul>
                <p>For more information, see Your Rights and Choices below.</p>
                <h2 className="Privacy-Subheader">Disclosure of Your Information</h2>
                <p>
                  We may disclose aggregated information about our users, and information that does not identify any
                  individual or device without restriction.{" "}
                </p>
                <p>In addition, we may disclose personal information that we collect, or you provide:</p>
                <ul>
                  <li>To our subsidiaries and affiliates.</li>
                  <li>To contractors, service providers, and other third parties we use to support our business.</li>
                  <li>
                    To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization,
                    dissolution, or other sale or transfer of some or all of The Game Band's assets, whether as a going
                    concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information
                    held by The Game Band about the Game users is among the assets transferred.
                  </li>
                  <li>To fulfill the purpose for which you provide it. </li>
                  <li>For any other purpose disclosed by us when you provide the information.</li>
                  <li>With your consent.</li>
                  <li>
                    To comply with any court order, law, or legal process, including to respond to any government or
                    regulatory request.
                  </li>
                  <li>
                    To enforce our rights arising from any contracts entered into between you and us, including our
                    Terms of Service.
                  </li>
                  <li>
                    If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of
                    The Game Band, our customers or others.
                  </li>
                </ul>
                <h2 className="Privacy-Subheader">Where, How and How Long We Store Your Information</h2>
                <p>
                  We store your information securely in the United States. By using the Game, you authorize us to
                  transfer, store and process your information in the United States and any other country where we
                  operate.
                </p>
                <p>
                  We keep your information only for the length of time necessary to fulfill the purposes for which the
                  information was collected. For example, if you have an account with us, we will retain the personal
                  information associated with your account for the lifetime of your account. If applicable laws require
                  us to store your information for a longer period, then we will keep your information for the period of
                  time required by law. When it is no longer necessary or required for us to retain your data, we will
                  delete it.
                </p>
                <h2 className="Privacy-Subheader">Your Rights and Choices</h2>
                <h3 className="Privacy-Miniheader">
                  <b>Data Protection Rights</b>
                </h3>
                The laws of the European Economic Area and other territories provide their residents with certain data
                protection rights. If you are resident of the European Economic Area, these are your rights:
                <ul>
                  <li>
                    <b>The right to access</b> - You have the right to request The Game Band provide you with copies of
                    your personal data. We may charge you a small fee for this service.
                  </li>
                  <li>
                    <b>The right to rectification</b> - You have the right to request that The Game Band correct any
                    information you believe is inaccurate. You also have the right to request The Game Band to complete
                    information you believe is incomplete.
                  </li>
                  <li>
                    <b>The right to be forgotten</b> - You have the right to request that The Game Band erase your
                    personal data, under certain conditions.
                  </li>
                  <li>
                    <b>The right to restrict processing</b> - You have the right to request that The Game Band restrict
                    the processing of your personal data, under certain conditions.
                  </li>
                  <li>
                    <b>The right to object to processing</b> - You have the right to object to our processing of your
                    personal data, under certain conditions.
                  </li>
                  <li>
                    <b>The right to data portability</b> - You have the right to request that The Game Band transfer the
                    data that we have collected to another organization, or directly to you, under certain conditions.
                  </li>
                </ul>
                <p>
                  If you make a request, we have one month to respond to you. If you would like to exercise any of these
                  rights, please contact us at our email:{" "}
                  <a href="mailto:legal@thegameband.com">legal@thegameband.com</a>.
                </p>
                <h3 className="Privacy-Miniheader">
                  <b>Additional Data Choices</b>
                </h3>
                <p>
                  We strive to provide you with choices regarding the personal information you provide to us. This
                  section describes mechanisms we provide for you to control certain uses and disclosures of over your
                  information.
                </p>
                <ul>
                  <li>
                    <b>Tracking Technologies.</b> You can set your browser to refuse all or some browser cookies, or to
                    alert you when cookies are being sent. If you disable or refuse cookies or block the use of other
                    tracking technologies, some parts of the Game may then be inaccessible or not function properly.
                  </li>
                  <li>
                    <b>Promotion by The Game Band.</b> If you do not want us to use your email address to promote our
                    own or third parties' products or services, you can opt-out by clicking the unsubscribe link at the
                    bottom of our emails and following the instructions provided.{" "}
                  </li>
                </ul>
                <div className="Privacy-Subheader">Third-Party Information Collection</div>
                <p>
                  Some content in the Game is served by third-parties. When you use the Game or its content, certain
                  third parties may use automatic information collection technologies to collect information about you
                  or your device.
                </p>
                <p>These third parties include:</p>
                <ul>
                  <li>
                    <b>App marketplaces where you download or sign into the Game</b>
                  </li>
                  <ul>
                    <li>
                      To Learn more about the Apple and how they collect and use your information, please visit{" "}
                      <a href="https://www.apple.com/legal/privacy/en-ww/">
                        https://www.apple.com/legal/privacy/en-ww/
                      </a>
                    </li>
                    <li>
                      To Learn more about Google Play and how they collect and use your information, please visit:{" "}
                      <a href="https://play.google.com/about/privacy-security-deception/">
                        https://play.google.com/about/privacy-security-deception/
                      </a>
                    </li>
                    <li>
                      To learn more about the Facebook and how they collect and use your information, please visit:{" "}
                      <a href="https://www.facebook.com/privacy/explanation">
                        https://www.facebook.com/privacy/explanation
                      </a>
                    </li>
                    <li>
                      To learn more about the Google and how they collect and use your information, please visit:{" "}
                      <a href="https://policies.google.com/privacy?hl=en-US">
                        https://policies.google.com/privacy?hl=en-US
                      </a>
                    </li>
                  </ul>
                  <li>
                    <b>Wireless network providers</b>
                  </li>
                  <li>
                    <b>Analytics companies</b>
                  </li>
                  <ul>
                    <li>
                      To learn more about Google Analytics and how they collect and use your information, please visit{" "}
                      <a href="https://marketingplatform.google.com/about/">
                        https://marketingplatform.google.com/about/
                      </a>{" "}
                      or{" "}
                      <a href="https://support.google.com/analytics/answer/181881?hl=en">
                        https://support.google.com/analytics/answer/181881?hl=en
                      </a>
                      .
                    </li>
                  </ul>
                  <li>
                    <b>Your mobile device manufacturer</b>
                  </li>
                  <li>
                    <b>Your mobile service provider</b>
                  </li>
                  <li>
                    <b>
                      Our Social Media Accounts - when you interact with us on our social media accounts, the
                      information collected is governed by the privacy policies of the relevant social media platform.
                    </b>
                  </li>
                  <ul>
                    <li>
                      To learn more about the Twitter and how they collect and use your information, please visit:{" "}
                      <a href="https://twitter.com/en/privacy">https://twitter.com/en/privacy</a>
                    </li>
                    <li>
                      To learn more about the Facebook and how they collect and use your information, please visit:{" "}
                      <a href="https://www.facebook.com/privacy/explanation">
                        https://www.facebook.com/privacy/explanation
                      </a>
                    </li>
                    <li>
                      To learn more about the Instagram and how they collect and use your information, please visit:{" "}
                      <a href="https://help.instagram.com/519522125107875">
                        https://help.instagram.com/519522125107875
                      </a>
                    </li>
                  </ul>
                </ul>
                <p>
                  Note: the websites above are provided solely for your convenience and The Game Band is not responsible
                  for updating them or ensuring their validity or correctness.{" "}
                </p>
                <p>
                  These third parties may use tracking technologies to collect information about you when you use the
                  Game. The information they collect may be associated with your personal information or they may
                  collect information, including personal information, about your online activities over time and across
                  different websites, apps, and other online services websites. They may use this information to provide
                  you with interest-based (behavioral) advertising or other targeted content.{" "}
                </p>
                <p>
                  We do not control these third parties' tracking technologies or how they may be used. We do not
                  control third parties' collection or use of your information to serve interest-based advertising.
                  However, these third parties may provide you with ways to choose not to have your information
                  collected or used in this way. If you have any questions about an advertisement or other targeted
                  content, you should contact the responsible provider directly.
                </p>
                <h2 className="Privacy-Subheader">Changes to Our Privacy Policy</h2>
                <p>
                  We may update our privacy policy from time to time. If we make material changes to how we treat our
                  users' personal information, we will post the new privacy policy on this page with a notice that the
                  privacy policy has been updated.
                </p>
                <p>
                  The date the privacy policy was last revised is identified at the top of the page. You are responsible
                  for periodically visiting this privacy policy to check for any changes.
                </p>
                <h2 className="Privacy-Subheader">Contact Information</h2>
                <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
                <div className="Privacy-Contact">
                  The Game Band
                  <br />
                  448 S Hill St. Suite 301
                  <br />
                  Los Angeles, CA 90013
                </div>
              </div>
            </div>
          );
        },
        mt =
          (t(157),
          function () {
            return (
              <div className="TermsOfService">
                <h1 className="TermsOfService-Header">Terms of Service</h1>
                <div className="TermsOfService-Content">
                  <p>
                    Welcome to The Game Band! These Terms of Service (<b>“Terms”</b>) govern your use of our game,
                    BLASEBALL (referred to herein as the <b>“Game”</b>).
                  </p>
                  <p>
                    The Game is a copyrighted work belonging to The Game Band (<b>“The Game Band”</b>, <b>“us”</b>,{" "}
                    <b>“our”</b>, and <b>“we”</b>). Certain features of the Game may be subject to additional
                    guidelines, terms, or rules, which will be posted in the Game in connection with such features. All
                    such additional terms, guidelines, and rules are incorporated by reference into these Terms.
                  </p>
                  <p>
                    These Terms of Service (these <b>“Terms”</b>) set forth the legally binding terms and conditions
                    that govern your use of the Game. BY DOWNLOADING/INSTALLING/USING/ACCESSING THE GAME, YOU (A)
                    ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THESE TERMS; (B) REPRESENT THAT YOU ARE OF LEGAL AGE
                    TO ENTER INTO A BINDING AGREEMENT; AND (C) ACCEPT THIS AGREEMENT AND AGREE THAT YOU ARE LEGALLY
                    BOUND BY ITS TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT DOWNLOAD/ INSTALL/USE THE GAME AND
                    DELETE IT FROM YOUR DEVICE AND DO NOT USE OR ACCESS THE SITE.
                  </p>
                  <p>
                    YOU MAY ONLY USE THE GAME (i) IF YOU AT OR ABOVE THE LEGAL AGE OF MAJORITY IN YOUR JURISDICTION (18
                    YEARS OLD IN MOST STATES) OR (ii) IF YOUR ARE BETWEEN THE AGES OF 13 AND THE LEGAL AGE OF MAJORITY
                    WITH THE CONSENT AND UNDER THE SUPERVISION OF YOUR PARENT OR LEGAL GUARDIAN.
                  </p>
                  <p>
                    PERSONS UNDER THE AGE OF 13 MAY NOT USE THE GAME. PERSONS BETWEEN THE AGE OF 13 AND THE LEGAL AGE OF
                    MAJORITY IN THEIR JURISDICTION MAY NOT USE THE GAME WITHOUT THE CONSENT AND SUPERVISION OF THEIR
                    PARENT OR LEGAL GUARDIAN. BY USING THE GAME, YOU REPRESENT THAT YOU ARE EITHER (i) AT OR ABOVE THE
                    LEGAL AGE OF MAJORITY IN YOUR JURISDICTION AND THAT YOU AGREE TO THESE TERMS OF SERVICE OR (ii) THAT
                    YOU ARE BETWEEN THE AGES OF 13 AND THE LEGAL AGE OF MAJORITY, YOU HAVE THE CONSENT AND ARE UNDER THE
                    SUPERVISION OF YOUR PARENT OR LEGAL GUARDIAN AND THAT YOU AND YOUR PARENT OR GUARDIAN AGREE TO THESE
                    TERMS OF SERVICE. IF YOU DO NOT MEET THESE REQUIREMENTS YOU MAY NOT USE OR ACCESS THE GAME.
                  </p>
                  <p>
                    These terms require the use of arbitration (Section 15.2) on an individual basis to resolve
                    disputes, rather than jury trials or class actions, and also limit the remedies available to you in
                    the event of a dispute.
                  </p>
                  <ol>
                    <li>
                      Access to the Game.
                      <ol>
                        <li>
                          <b>License.</b> Subject to these Terms, The Game Band grants you a limited non-transferable,
                          non-exclusive, revocable, limited license to: download and install the Game for your personal,
                          non-commercial use on a single gaming device owned or otherwise controlled by you ("Device")
                          strictly in accordance with the Game's documentation; and to use and access the Site solely
                          for your own personal use.
                        </li>
                        <li>
                          <b>Certain Restrictions.</b> The rights granted to you in these Terms are subject to the
                          following restrictions: (a) you shall not license, sell, rent, lease, transfer, assign,
                          distribute, host, or otherwise commercially exploit the Game, whether in whole or in part, or
                          any content displayed in the Game; (b) you shall not modify, translate, adapt, make derivative
                          works of, improve, disassemble, decode, reverse compile or reverse engineer or otherwise
                          attempt to derive or gain access to the source code of any part of the Game; (c) you shall not
                          access the Game in order to build a similar or competitive website, product, game or service;
                          (d) except as expressly stated herein, no part of the Game may be copied, reproduced,
                          distributed, republished, downloaded, displayed, posted or transmitted in any form or by any
                          means; and (e) you shall not remove, disable, circumvent or otherwise create or implement any
                          workaround to any copy protection, rights management, or security features in or protecting
                          the Game. Unless otherwise indicated, any future release, update, or other addition to
                          functionality of the Game shall be subject to these Terms. All copyright and other proprietary
                          notices in the Game (or on any content displayed in the Game) must be retained on all copies
                          thereof.
                        </li>
                        <li>
                          <b>Modification.</b> The Game Band reserves the right, at any time, to modify, suspend, or
                          discontinue the Game (in whole or in part) with or without notice to you. You agree that The
                          Game Band will not be liable to you or to any third party for any modification, suspension, or
                          discontinuation of the Game or any part thereof.
                        </li>
                        <li>
                          <b>No Support or Maintenance.</b> You acknowledge and agree that The Game Band will have no
                          obligation to provide you with any support or maintenance in connection with the Game.
                        </li>
                        <li>
                          <b>Ownership.</b> You acknowledge and agree that the Game is provided under license, and not
                          sold, to you. You do not acquire any ownership interest in the Game under these Terms, or any
                          other rights thereto other than to use the Game in accordance with these Terms. The Game Band
                          and its licensors and service providers reserve and retain their entire right, title, and
                          interest in and to the Game, including all copyrights, trademarks, and other intellectual
                          property rights therein or relating thereto, except as expressly granted to you in these
                          Terms. Neither these Terms (nor your access to the Game) transfers to you or any third party
                          any rights, title or interest in or to such intellectual property rights, except for the
                          limited access rights expressly set forth in Section 1.1. The Game Band and its suppliers
                          reserve all rights not granted in these Terms. There are no implied licenses granted under
                          these Terms.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <b>Accounts.</b>
                      <ol>
                        <li>
                          <b>Account Creation.</b> In order to use certain features of the Game, you must register for
                          an account (<b>"Account"</b>) and provide certain information about yourself as prompted by
                          the account registration form (including but not limited to your full name, email address and
                          a unique password). You represent and warrant that: (a) all required registration information
                          you submit is truthful and accurate; (b) you will maintain the accuracy of such information;
                          (c) you reside in the United States or, if you reside outside the United States, that your use
                          of the Game will comply with applicable law in your jurisdiction. You may delete your Account
                          at any time, for any reason, by following the instructions in the Game. The Game Band may
                          suspend or terminate your Account in accordance with Section 14.
                        </li>
                        <li>
                          <b>Account Responsibilities. </b>You are responsible for maintaining the confidentiality of
                          your Account login information and are fully responsible for all activities that occur under
                          your Account. You agree to immediately notify The Game Band of any unauthorized use, or
                          suspected unauthorized use of your Account or any other breach of security. The Game Band
                          cannot and will not be liable for any loss or damage arising from your failure to comply with
                          the above requirements.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <b>Feedback.</b> If you provide The Game Band with any feedback or suggestions regarding the Game
                      (<b>"Feedback"</b>), you hereby assign to The Game Band all rights in such Feedback and agree that
                      The Game Band shall have the right to use and fully exploit such Feedback and related information
                      in any manner it deems appropriate. The Game Band will treat any Feedback you provide to The Game
                      Band as non-confidential and non-proprietary. You agree that you will not submit to The Game Band
                      any information or ideas that you consider to be confidential or proprietary.
                    </li>
                    <li>
                      <b>Collection of Your Information.</b> You acknowledge that when you download, install, access or
                      use the Game, The Game Band may use automatic means (including, for example, cookies and web
                      beacons) to collect information about your device and about your use of the Game. You also may be
                      required to provide certain information about yourself as a condition to downloading, installing,
                      or using the Game or certain of its features or functionality. All information we collect through
                      or in connection with this Game is subject to our{" "}
                      <a href="https://blaseball.com/privacy">Privacy Policy</a>. By downloading, installing, accessing,
                      using, and providing information to or through this Game, you consent to all actions taken by us
                      with respect to your information in compliance with the Privacy Policy.
                    </li>
                    <li>
                      <b>Device Requirements.</b> The Game can only be used via certain devices, like your smartphone, a
                      list of compatible devices is provided the third-party application marketplaces (
                      <b>"Marketplaces"</b>) where the Game can be downloaded. Your Device must also meet the system
                      requirements listed on the Site and/or the Marketplaces
                    </li>
                    <li>
                      <b>Free Content.</b> Upon downloading the Game, users will have access to certain features of the
                      game (<b>"Free Features"</b>). The Game Band may add, remove, modify or otherwise change the free
                      features at any time with or without notice to you.
                    </li>
                    <li>
                      <b>Updates.</b> The Game Band may from time to time in its sole discretion develop and provide
                      Game updates, which may include upgrades, bug fixes, patches, other error corrections, and/or new
                      features (collectively, including related documentation,<b>"Updates"</b>). Updates may also modify
                      or delete in their entirety certain features and functionality. You agree that The Game Band has
                      no obligation to provide any Updates or to continue to provide or enable any particular features
                      or functionality. Based on your Device settings, when your Device is connected to the internet
                      either:
                      <ul>
                        <li>(a) the Game will automatically download and install all available Updates; or</li>
                        <li>(b) you may receive notice of or be prompted to download and install available Updates.</li>
                      </ul>
                    </li>
                    <div className="indented">
                      You will promptly download and install all Updates and acknowledge and agree that the Game or
                      portions thereof may not properly operate should you fail to do so. You further agree that all
                      Updates will be deemed part of the Game and be subject to all terms and conditions of these Terms.
                    </div>
                    <li>
                      <b>Virtual Goods and Virtual Money.</b>
                      <ol>
                        <li>
                          The Game may include virtual currencies such as virtual coins or items or services for use
                          with the Game (collectively <b>“Virtual Items"</b>). Users may be able to earn Virtual Items
                          within the Game. You agree that once earned, Virtual Items have no monetary value and can
                          never be exchanged for real money, real goods or real services from us or anyone else. You
                          also agree that you will obtain the Virtual Items only from us, and not from any third party.
                          You agree that Virtual Items are not transferrable from one person to another or one account
                          to another, and you will not transfer or attempt to transfer any Virtual Items to any other
                          person or account.
                        </li>
                        <li>
                          You agree that any Virtual Items that you earn, are not owned by you, but that you instead
                          have been granted, by us, a limited personal revocable license to use such Virtual Items. You
                          agree that any balance of Virtual Items does not reflect any stored value.
                        </li>
                        <li>
                          You understand and agree that we are not responsible for any problems or losses associated
                          with your marketplace account, including without limitation, problems transferring Virtual
                          Items from one device to another, restoring Virtual Items from a lost or damaged device to a
                          different device, or any other losses of Virtual Items. The risk of loss of Virtual Items is
                          transferred to you at the time that you earn such Virtual Item.
                        </li>
                        <li>
                          We reserve the right to control, regulate, change or remove any Virtual Items without any
                          liability to you.
                        </li>
                        <li>
                          We may revise the requirements for earning Virtual Items through the Game at any time. We may
                          limit the total amount of Virtual Items that may be earned at any one time, and/or limit the
                          total amount of Virtual Items that may be held in your account in the aggregate. You are only
                          allowed to earn Virtual Items from us or our authorized partners through the Game, and not in
                          any other way.
                        </li>
                        <li>
                          If we suspend or terminate your account in accordance with these terms you will lose any
                          Virtual Items that you may have accumulated, and we will not compensate you for this loss.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <b>Indemnification.</b> You agree to indemnify and hold The Game Band (and its officers,
                      employees, and agents) harmless, including costs and attorneys’ fees, from any claim or demand
                      made by any third party due to or arising out of (a) your use of the Game, (b) your violation of
                      these Terms, or (c) your violation of applicable laws or regulations. The Game Band reserves the
                      right, at your expense, to assume the exclusive defense and control of any matter for which you
                      are required to indemnify us, and you agree to cooperate with our defense of these claims. You
                      agree not to settle any matter without the prior written consent of The Game Band. The Game Band
                      will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming
                      aware of it.
                    </li>
                    <li>
                      <b>Third Party Materials.</b> The Game may contain links to third-party websites and services,
                      including through third party advertising (collectively, <b>"Third-Party Materials"</b>). Such
                      Third Party Materials are not under the control of The Game Band, and The Game Band is not
                      responsible for any Third Party Materials. The Game Band provides access to these Third Party
                      Materials only as a convenience to you, and does not review, approve, monitor, endorse, warrant,
                      or make any representations with respect to Third Party Materials. You acknowledge and agree that
                      The Game Band is not responsible for Third Party Materials, including their accuracy,
                      completeness, timeliness, validity, copyright compliance, legality, decency, quality, or any other
                      aspect thereof. The Game Band does not assume and will not have any liability or responsibility to
                      you or any other person or entity for any Third Party Materials. Third Party Materials and links
                      thereto are provided solely as a convenience to you, and you access and use them entirely at your
                      own risk and subject to such third parties' terms and conditions. You should make whatever
                      investigation you feel necessary or appropriate before proceeding with any transaction in
                      connection with such Third Party Materials.
                    </li>
                    <li>
                      <b>Release.</b> You hereby release and forever discharge The Game Band (and our officers,
                      employees, agents, successors, and assigns) from, and hereby waive and relinquish, each and every
                      past, present and future dispute, claim, controversy, demand, right, obligation, liability, action
                      and cause of action of every kind and nature (including personal injuries, death, and property
                      damage), that has arisen or arises directly or indirectly out of, or that relates directly or
                      indirectly to, the Game (including any interactions with, or act or omission of, other Game users
                      or any Third Party Materials). IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL
                      CODE SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: “A GENERAL RELEASE DOES NOT
                      EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE
                      TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR
                      HER SETTLEMENT WITH THE DEBTOR.”
                    </li>
                    <li>
                      <b>Disclaimers.</b> THE GAME IS PROVIDED TO YOU "AS IS" AND WITH ALL FAULTS AND DEFECTS WITHOUT
                      WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE GAME BAND, ON ITS
                      OWN BEHALF AND ON BEHALF OF ITS AFFILIATES AND ITS AND THEIR RESPECTIVE LICENSORS AND SERVICE
                      PROVIDERS, EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE,
                      WITH RESPECT TO THE GAME, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                      PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT AND NON-INFRINGEMENT, AND WARRANTIES THAT MAY ARISE OUT
                      OF COURSE OF DEALING, COURSE OF PERFORMANCE, USAGE, OR TRADE PRACTICE. WITHOUT LIMITATION TO THE
                      FOREGOING, THE GAME BAND PROVIDES NO WARRANTY OR UNDERTAKING, AND MAKES NO REPRESENTATION OF ANY
                      KIND THAT THE GAME WILL MEET YOUR REQUIREMENTS, ACHIEVE ANY INTENDED RESULTS, BE COMPATIBLE, OR
                      WORK WITH ANY OTHER SOFTWARE, GAMES, SYSTEMS, OR SERVICES, OPERATE WITHOUT INTERRUPTION, MEET ANY
                      PERFORMANCE OR RELIABILITY STANDARDS, OR BE ERROR-FREE, ACCURATE, RELIABLE, FREE FROM HARMFUL
                      CODE, COMPLETE, LEGAL, SAFE, ABAILABLE ON AN UNTERUPTED BASIS OR THAT ANY ERRORS OR DEFECTS CAN OR
                      WILL BE CORRECTED.
                    </li>
                    <div className="indented">
                      SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY
                      NOT APPLY TO YOU. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY
                      LASTS, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
                    </div>
                    <li>
                      <b>Limitation on Liability.</b> TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                      WILL THE GAME BAND OR ITS AFFILIATES, OR ANY OF ITS OR THEIR RESPECTIVE LICENSORS OR SERVICE
                      PROVIDERS, HAVE ANY LIABILITY ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE THE GAME
                      FOR:
                      <ol className="alphabetical">
                        <li>
                          PERSONAL INJURY, PROPERTY DAMAGE, LOST PROFITS, COST OF SUBSTITUTE GOODS OR SERVICES, LOSS OF
                          DATA, LOSS OF GOODWILL, BUSINESS INTERRUPTION, COMPUTER OR DEVICE FAILURE OR MALFUNCTION, OR
                          ANY OTHER CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL, OR PUNITIVE DAMAGES.
                        </li>
                        <li>
                          DIRECT DAMAGES IN AMOUNTS THAT IN THE AGGREGATE EXCEED THE AMOUNT ACTUALLY PAID BY YOU FOR THE
                          GAME OR VIRTUAL ITEMS.
                        </li>
                      </ol>
                    </li>
                    <div className="indented">
                      THE FOREGOING LIMITATIONS WILL APPLY WHETHER SUCH DAMAGES ARISE OUT OF BREACH OF CONTRACT, TORT
                      (INCLUDING NEGLIGENCE), OR OTHERWISE AND REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR
                      THE GAME BAND WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW
                      CERTAIN LIMITATIONS OF LIABILITY SO SOME OR ALL OF THE ABOVE LIMITATIONS OF LIABILITY MAY NOT
                      APPLY TO YOU.
                    </div>
                    <div className="indented">
                      SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR
                      CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
                    </div>
                    <li>
                      <b>Term and Termination.</b> Subject to this Section, these Terms will remain in full force and
                      effect while you use the Game. We may suspend or terminate your rights to use the Game (including
                      your Account) at any time for any reason at our sole discretion, including for any use of the Game
                      in violation of these Terms. Upon termination of your rights under these Terms, your Account and
                      right to access and use the Game will terminate immediately. You understand that any termination
                      of your Account may involve deletion of all information and Virtual Items associated with your
                      Account from our live databases. The Game Band will not have any liability whatsoever to you for
                      any termination of your rights under these Terms, including for termination of your Account or
                      deletion of your information. Even after your rights under these Terms are terminated, the
                      following provisions of these Terms will remain in effect: Sections 1.2, Section 3 and Sections 6
                      through 15.
                    </li>
                    <li>
                      <b>General</b>
                      <ol>
                        <li>
                          <b>Changes.</b> These Terms are subject to occasional revision, and if we make any substantial
                          changes, we may notify you by sending you an e-mail to the last e-mail address you provided to
                          us (if any), and/or by prominently posting notice of the changes in the Game. You are
                          responsible for providing us with your most current e-mail address. In the event that the last
                          e-mail address that you have provided us is not valid, or for any reason is not capable of
                          delivering to you the notice described above, our dispatch of the e-mail containing such
                          notice will nonetheless constitute effective notice of the changes described in the notice.
                          Any changes to these Terms will be effective upon the earlier of thirty (30) calendar days
                          following our dispatch of an e-mail notice to you (if applicable) or thirty (30) calendar days
                          following our posting of notice of the changes in the Game. These changes will be effective
                          immediately for new users of the Game. Continued use of the Game following notice of such
                          changes shall indicate your acknowledgement of such changes and agreement to be bound by the
                          terms and conditions of such changes.
                        </li>
                        <li>
                          <b>
                            Dispute Resolution.
                            <i>
                              Please read this Arbitration Agreement carefully. It is part of your contract with The
                              Game Band and affects your rights. It contains procedures for MANDATORY BINDING
                              ARBITRATION AND A CLASS ACTION WAIVER.
                            </i>
                          </b>
                          <ol className="alphabetical">
                            <li>
                              <i>Applicability of Arbitration Agreement.</i> All claims and disputes (excluding claims
                              for injunctive or other equitable relief as set forth below) in connection with the Terms
                              or the use of any product or service provided by The Game Band that cannot be resolved
                              informally or in small claims court shall be resolved by binding arbitration on an
                              individual basis under the terms of this Arbitration Agreement. Unless otherwise agreed
                              to, all arbitration proceedings shall be held in English. This Arbitration Agreement
                              applies to you and The Game Band, and to any subsidiaries, affiliates, agents, employees,
                              predecessors in interest, successors, and assigns, as well as all authorized or
                              unauthorized users or beneficiaries of services or goods provided under the Terms.
                            </li>
                            <li>
                              <i>Notice Requirement and Informal Dispute Resolution.</i> Before either party may seek
                              arbitration, the party must first send to the other party a written Notice of Dispute (
                              <b>"Notice"</b>) describing the nature and basis of the claim or dispute, and the
                              requested relief. A Notice to The Game Band should be sent to The Game Band attn.: Terms
                              of Service Dispute at the address listed in Section 15.12 (or such other address as may be
                              provided by The Game Band for this purpose. After the Notice is received, you and The Game
                              Band may attempt to resolve the claim or dispute informally. If you and The Game Band do
                              not resolve the claim or dispute within thirty (30) days after the Notice is received,
                              either party may begin an arbitration proceeding. The amount of any settlement offer made
                              by any party may not be disclosed to the arbitrator until after the arbitrator has
                              determined the amount of the award, if any, to which either party is entitled.
                            </li>
                            <li>
                              <i>Arbitration.</i> You agree that any dispute, claim or controversy arising hereunder or
                              relating in any way to these Terms and not informally resolved shall be settled by binding
                              arbitration in the Commonwealth of Massachusetts, in accordance with the commercial
                              arbitration rules of Judicial Arbitration and Mediation Services (<b>"JAMS"</b>). The
                              arbitrator shall issue a written decision specifying the basis for the award made. The
                              party filing a claim or counterclaim in the arbitration proceeding shall pay the
                              deposit(s) determined by JAMS with respect to such claim or counterclaim. All other costs
                              associated with the arbitration and imposed by JAMS shall be paid as determined by the
                              arbitrator(s) and, in absence of such determination, equally by each party to the
                              arbitration. In addition, unless the arbitrator awards payment of reasonable attorney and
                              other fees to a party, each party to the arbitration shall be responsible for its own
                              attorneys' fees and other professional fees incurred in connection with the arbitration.
                              Determinations of the arbitrator will be final and binding upon the parties to the
                              arbitration, and judgment upon the award rendered by the arbitrator may be entered in any
                              court having jurisdiction, or application may be made to such court for a judicial
                              acceptance of the award and an order of enforcement, as the case may be. The arbitrator
                              shall apply the substantive law of the Commonwealth of Massachusetts, without giving
                              effect to its conflict of laws rules.
                            </li>
                            <li>
                              <i>Waiver of Jury Trial.</i> THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY
                              RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing
                              that all claims and disputes shall be resolved by arbitration under this Arbitration
                              Agreement. Arbitration procedures are typically more limited, more efficient and less
                              costly than rules applicable in a court and are subject to very limited review by a court.
                              In the event any litigation should arise between you and The Game Band in any state or
                              federal court in a suit to vacate or enforce an arbitration award or otherwise, YOU AND
                              THE GAME BAND WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be
                              resolved by a judge.
                            </li>
                            <li>
                              <i>Waiver of Class or Consolidated Actions.</i> ALL CLAIMS AND DISPUTES WITHIN THE SCOPE
                              OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND
                              NOT ON A CLASS BASIS, AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR
                              LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER.
                            </li>
                            <li>
                              <i>Confidentiality.</i> All aspects of the arbitration proceeding, including but not
                              limited to the award of the arbitrator and compliance therewith, shall be strictly
                              confidential. The parties agree to maintain confidentiality unless otherwise required by
                              law. This paragraph shall not prevent a party from submitting to a court of law any
                              information necessary to enforce this Agreement, to enforce an arbitration award, or to
                              seek injunctive or equitable relief.
                            </li>
                            <li>
                              <i>Severability.</i> If any part or parts of this Arbitration Agreement are found under
                              the law to be invalid or unenforceable by a court of competent jurisdiction, then such
                              specific part or parts shall be of no force and effect and shall be severed and the
                              remainder of the Agreement shall continue in full force and effect.
                            </li>
                            <li>
                              <i>Right to Waive.</i> Any or all of the rights and limitations set forth in this
                              Arbitration Agreement may be waived by the party against whom the claim is asserted. Such
                              waiver shall not waive or affect any other portion of this Arbitration Agreement.
                            </li>
                            <li>
                              <i>Emergency Equitable Relief.</i> Notwithstanding the foregoing, either party may seek
                              emergency equitable relief before a state or federal court in order to maintain the status
                              quo pending arbitration. A request for interim measures shall not be deemed a waiver of
                              any other rights or obligations under this Arbitration Agreement.
                            </li>
                            <li>
                              <i>Claims Not Subject to Arbitration.</i> Notwithstanding the foregoing, claims of
                              defamation, violation of the Computer Fraud and Abuse Act, and infringement or
                              misappropriation of the other party’s patent, copyright, trademark or trade secrets shall
                              not be subject to this Arbitration Agreement.
                            </li>
                            <li>
                              <i>Courts.</i> In any circumstances where the foregoing Arbitration Agreement permits the
                              parties to litigate in court, the parties hereby agree to submit to the personal
                              jurisdiction of the courts located within the State of California, for such purpose
                            </li>
                          </ol>
                        </li>
                        <li>
                          <b>Export.</b> The Game may be subject to U.S. export control laws and may be subject to
                          export or import regulations in other countries. You agree not to export, reexport, or
                          transfer, directly or indirectly, any U.S. technical data acquired from The Game Band, or any
                          products utilizing such data, in violation of the United States export laws or regulations.
                        </li>
                        <li>
                          <b>Disclosures.</b> The Game Band is located at the address in Section 15.12. If you are a
                          California resident, you may report complaints to the Complaint Assistance Unit of the
                          Division of Consumer Product of the California Department of Consumer Affairs by contacting
                          them in writing at 400 R Street, Sacramento, CA 95814, or by telephone at (800) 952-5210.
                        </li>
                        <li>
                          <b>Electronic Communications.</b> The communications between you and The Game Band use
                          electronic means, whether you use the Game or send us emails, or whether The Game Band posts
                          notices in the Game or communicates with you via email. For contractual purposes, you (a)
                          consent to receive communications from The Game Band in an electronic form; and (b) agree that
                          all terms and conditions, agreements, notices, disclosures, and other communications that The
                          Game Band provides to you electronically satisfy any legal requirement that such
                          communications would satisfy if it were be in a hardcopy writing. The foregoing does not
                          affect your non-waivable rights.
                        </li>
                        <li>
                          <b>Severability.</b> If any provision of this Agreement is illegal or unenforceable under
                          applicable law, the remainder of the provision will be amended to achieve as closely as
                          possible the effect of the original term and all other provisions of this Agreement will
                          continue in full force and effect.
                        </li>
                        <li>
                          <b>Governing Law.</b> This Agreement is governed by and construed in accordance with the
                          internal laws of the State of California without giving effect to any choice or conflict of
                          law provision or rule.
                        </li>
                        <li>
                          <b>Limitation of Time for Claims.</b> ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF
                          OR RELATING TO THIS AGREEMENT OR THE GAME MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE
                          CAUSE OF ACTION ACCRUES OTHERWISE SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.
                        </li>
                        <li>
                          <b>Waiver.</b> No failure to exercise, and no delay in exercising, on the part of either
                          party, any right or any power hereunder will operate as a waiver thereof, nor will any single
                          or partial exercise of any right or power hereunder preclude further exercise of that or any
                          other right hereunder. In the event of a conflict between this Agreement and any applicable
                          purchase or other terms, the terms of this Agreement will govern.
                        </li>
                        <li>
                          <b>Entire Terms.</b> These Terms constitute the entire agreement between you and us regarding
                          the use of the Game. Our failure to exercise or enforce any right or provision of these Terms
                          shall not operate as a waiver of such right or provision. The section titles in these Terms
                          are for convenience only and have no legal or contractual effect. The word “including” means
                          “including without limitation”. If any provision of these Terms is, for any reason, held to be
                          invalid or unenforceable, the other provisions of these Terms will be unimpaired, and the
                          invalid or unenforceable provision will be deemed modified so that it is valid and enforceable
                          to the maximum extent permitted by law. Your relationship to The Game Band is that of an
                          independent contractor, and neither party is an agent or partner of the other. These Terms,
                          and your rights and obligations herein, may not be assigned, subcontracted, delegated, or
                          otherwise transferred by you without The Game Band’ prior written consent, and any attempted
                          assignment, subcontract, delegation, or transfer in violation of the foregoing will be null
                          and void. The Game Band may freely assign these Terms. The terms and conditions set forth in
                          these Terms shall be binding upon assignees.
                        </li>
                        <li>
                          <b>Copyright/Trademark Information.</b> Copyright © 2020 The Game Band. All rights reserved.
                          All trademarks, logos and service marks (<b>"Marks"</b>) displayed in the Game are our
                          property or the property of other third parties. You are not permitted to use these Marks
                          without our prior written consent or the consent of such third party which may own the Marks.
                        </li>
                        <li>
                          <b>Contact Information:</b>
                        </li>
                      </ol>
                    </li>
                    <div className="indented">
                      The Game Band
                      <br />
                      448 S Hill St. Suite 301
                      <br />
                      Los Angeles, CA 90013
                      <br />
                      <a href="mailto:legal@thegameband.com">legal@thegameband.com</a>
                    </div>
                  </ol>
                </div>
              </div>
            );
          });
      function ut() {
        return (ut =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function dt(e, a) {
        if (null == e) return {};
        var t,
          n,
          r = (function (e, a) {
            if (null == e) return {};
            var t,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (t = o[n]), a.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (t = o[n]), a.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
        }
        return r;
      }
      var ht = <image id="Ball" x={87} y={75} width={784} height={911} xlinkHref="<img/png blob>" />,
        Et = function (e) {
          var a = e.svgRef,
            t = e.title,
            n = dt(e, ["svgRef", "title"]);
          return (
            <svg {...ut({ width: 959, height: 1065, viewBox: "0 0 959 1065", ref: a }, n)}>
              {t ? <title>{t}</title> : null}
              {ht}
            </svg>
          );
        },
        pt = r.a.forwardRef(function (e, a) {
          return <Et {...ut({ svgRef: a }, e)} />;
        }),
        ft =
          (t.p,
          t(158),
          {
            notes: [],
            refreshNotes: (function () {
              var e = Object(g.a)(
                v.a.mark(function e() {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
          }),
        At = Object(n.createContext)(ft),
        vt = function (e) {
          var a = e.children,
            t = Object(n.useState)([]),
            o = Object(l.a)(t, 2),
            i = o[0],
            c = o[1],
            m = (Object(s.g)().pathname, Object(ce.useToasts)().addToast),
            u = Object(n.useCallback)(
              Object(g.a)(
                v.a.mark(function e() {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/api/getUserNotifications", { credentials: "include" })
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                e && c(e.notes);
                              })
                              .catch(function (e) {
                                c([]);
                              })
                          );
                        case 2:
                          return e.abrupt("return", null);
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              []
            ),
            d = (function () {
              var e = Object(g.a)(
                v.a.mark(function e() {
                  var a;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = []),
                            i.forEach(function (e) {
                              a.push(e._id);
                            }),
                            (e.next = 4),
                            b("/api/clearUserNotifications", JSON.stringify({ noteIds: a }))
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(
            function () {
              if (i) {
                for (var e = 0; e < i.length; e++) {
                  var a = i[e];
                  m(a.message, { appearance: "info", autoDismiss: !1 });
                }
                d();
              }
            },
            [i]
          ),
            Object(n.useEffect)(function () {
              u(),
                h.on("notify", function (e) {
                  u();
                });
            }, []);
          var E = { notes: i, refreshNotes: u };
          return <At.Provider value={E}>{a}</At.Provider>;
        };
      vt.context = At;
      var gt = vt;
      t(159);
      function yt() {
        return (
          <div className="TheBook-All">
            <div className="TheBook-Header">The Book of Blaseball</div>
            <div className="TheBook-Subheader">
              The Game of{" "}
              <span className="TheBook-Subheader-Group">
                <bt str="||||||||||||||||||" /> and <bt str="|||||||||||||" />
              </span>
            </div>
            <div className="TheBook-Subheader">Official Rulebook</div>
            <div className="TheBook-Line TheBook-Bullet">1. Seasons</div>
            <div className="TheBook-Line TheBook-SubBullet">
              a. Each season of Blaseball shall last 99 games. In the case of <bt str="the Ultimate ||||||||" />,
              seasons shall <bt str="|||||||||||||||||, or at least until the ||||||| have ||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              b. Every day of Blaseball shall last one <bt str="|||||" /> hour.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              c. If any games last longer than one <bt str="|||||" /> hour, a Spillover shall occur, and all games shall
              be delayed until the next <bt str="|||||" /> hour. In the case of a game lasting two <bt str="|||||" />{" "}
              hours, the{" "}
              <bt str="entire season should be ||||||||| and both teams should be ||||||||| ||||||||| |||||||| |||| for |||||| |||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              d. A season should start on a "Monday" and therefore conclude on a "Friday".
            </div>
            <div className="TheBook-Line TheBook-Bullet">2. Postseasons</div>
            <div className="TheBook-Line TheBook-SubBullet">
              a. Each Postseason of Blaseball shall consist of 8 teams. These teams shall be the 4 best teams from each
              league, regardless of division. Teams will be ranked by their total wins over the season. In the case of
              ties, teams shall be chosen based on their <bt str="Divine Favor" />. <i>See: </i>{" "}
              <bt str="Divine Favor" />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              b. The Postseason should start early on a "Saturday" and conclude within the same day. If the Postseason
              lasts into the following day, no{" "}
              <bt str="||||| shall be ||||||||, and both teams shall be |||||||||| |||||||| ||||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              c. Postseason rounds should be played in best 3 of 5 game series.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              d. The home team in each Postseason game shall be{" "}
              <bt str="the |||||||||||, if the |||||||||||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-Bullet">3. Elections</div>
            <div className="TheBook-Line TheBook-SubBullet">
              a. Participants should be allowed to Vote on the rules, rosters, and other effects of the game of
              Blaseball.{" "}
              <bt str="The content of such Votes shall be ||||||||||||||| ||||||||||||||||||| ||||||||| entertainment" />
              .
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              <span>b. Decrees will be decided by popular vote.</span>
              <bt str="It is understood that ||||||||||||||||| will be a ||||||||||| |||||||||||, and the others shall ||||||||||||||| ||||||||||||||| ||||||||| |||||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              c. Blessings will be decided by a raffle. <bt str="It is understood that each of these" /> should give
              players <bt str="||||||||||||| |||||||||||" /> control of the league. All won Blessings shall be processed
              & applied in order of the standings.{" "}
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              c. <bt str="||||||||||||||||||" /> may occur at the end of an Election, before Decrees and Blessings are
              processed. <bt str="Anything can happen here" />. Good luck.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              d. Elections should end on a "Sunday," although Votes should be able to be cast on any day of the week.
            </div>
            <div className="TheBook-Line TheBook-Bullet">4. Playing the Game</div>
            <div className="TheBook-Line TheBook-SubBullet">
              a. The game of Blaseball should be played between two teams.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              b. Each game should take place <bt str="at the home team's stadium" /> on the immaterial plane.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              c. Weather: <bt str="The home team's stadium should determine the weather." /> In the case that{" "}
              <bt str="||||||||||||||||||||" />, a Solar Eclipse shall last until <bt str="||||||||||||||||||||" />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              d. There are <bt str="two positions" /> in Blaseball, <bt str="||||||||||||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              e. When a team is on Defense,{" "}
              <bt str="all of the team's ||||||| will stand ||||||||| out in the field. Doesn't really matter where." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              f. The pitcher must throw the ball <bt str="with their hands." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              g. Once the ball is in play,{" "}
              <bt str="||| |||| || ||| |||||||||| ||||| |||||||||| the outcome of the play. ||| |||| ||||||| || ||||||||||||||||" />{" "}
              immaterial plane{" "}
              <bt str="|||||||||||||| ||||||| ||||||| ||||||||| ||||||||||||||| |||||||||||||||| |||||||| |||||||| unfathomable." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">h. The team with the most runs will win the game.</div>
            <div className="TheBook-Line TheBook-SubBullet">
              i. Shame Phase: If the home team scores the winning run in the bottom of the final inning, the away team
              must complete the game in shame, despite being mathematically eliminated.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              j. <bt str="||||||||||||||||||||||" />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              k. Crying in Blaseball is <bt str="||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-Bullet">
              5. <bt str="The Gods" /> and You
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              a. Should the Participants open the Forbidden Book,{" "}
              <bt str="The Discipline Era should begin||||||||||||||||||||||" /> suffering{" "}
              <bt str="upon the league. Players shall be " /> banished{" "}
              <bt str="at the ||||||||||| ||||||||| |||| ||||||||||||||||." /> The Discipline Era shall last until{" "}
              <bt str="the Participants have" /> atoned.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              b. If a team wins three championships, they, and Blaseball, shall ascend.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              c. When teams are sent to <bt str="||||||||||| |||||||||||||" />, they shall return once{" "}
              <bt str="|||||||||||||||| |||||||||||||||||||||| |||||||||||||" />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              d. <bt str="Divine Favor" />: the <bt str="||||" /> have an internal ranking{" "}
              <bt str="of favored teams. When a team wins a Divine Favor blessing, they will be" /> boosted to the top
              of the list.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              e. If at any time, <bt str="||||||||||||||| |||||||||||||||," /> atone{" "}
              <bt str="they may |||||||||||||||" /> one million Peanuts.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              f. Sunglasses{" "}
              <bt str="shall be |||||||||| ||||||||||||| |||||||||||||||||. They shall provide |||||||||||||| may be ||||||||||||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">g. Splortsmanship, splortsmanship, is BACK.</div>
            <div className="TheBook-Line TheBook-Bullet">
              6. <bt str="||||||||||||" />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              a. It is known{" "}
              <bt str="that the intention of the game of Blaseball |||||||||||||||||||||||| |||||||||||||||||||| |||||||||||||| |||||||||||||||||| ||||||||||| |||||||||| would be diminished." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              b. <bt str="|||||||" />: Several entities in the <bt str="||||||||||||||" /> shall be chosen{" "}
              <bt str="||||||||||" /> to bring Blaseball to the people{" "}
              <bt str="|||||||||||||||||| ||||||||||||||||||" />
            </div>
            <div className="TheBook-Line TheBook-Bullet">Signed,</div>
            <div className="TheBook-Line TheBook-SubBullet">
              <bt str="||||" />,  <bt str="||||" />,  <bt str="||||||||" />,  <bt str="|||||||" />,  
              <bt str="||||||||" />,  <bt str="|||||||||" />,  <bt str="|||||||" />,  <bt str="||||" />,  
              <bt str="||||||" />,  <bt str="||||||||||" />,  <bt str="||||||" />,  <bt str="|||||||" />,  
              <bt str="||||| ||||" />,  A
              <bt str="|||||| ||||||" />,  <bt str="||||" />,  N
              <bt str="||||||" />,  <bt str="||" />,  <bt str="||||||" />,  M
              <bt str="|| ||||||" />
            </div>
          </div>
        );
      }
      function bt(e) {
        var a = e.str.split(" ");
        return (
          <span className="TheBook-RedactGroup">
            {a.map(function (e) {
              return (
                <div className="TheBook-Redacted">
                  {e.split("").map(function () {
                    return <span>  </span>;
                  })}
                </div>
              );
            })}
          </span>
        );
      }
      t(160);
      function Nt() {
        var e,
          a = Object(n.useContext)(da.context);
        return (
          <div className="BigDeal-All">
            <div className="BigDeal-Icon">
              <re.g />
            </div>
            <div className="BigDeal-Body">
              <div className="BigDeal-RedLine">
                {null === a || void 0 === a || null === (e = a.doc) || void 0 === e ? void 0 : e.zeta}
              </div>
            </div>
          </div>
        );
      }
      t(161);
      var Tt,
        St,
        wt = t(167);
      !(function (e) {
        (e[(e.SingleA = 0)] = "SingleA"),
          (e[(e.TripleA = 1)] = "TripleA"),
          (e[(e.DoubleA = 2)] = "DoubleA"),
          (e[(e.Acid = 3)] = "Acid"),
          (e[(e.Base = 4)] = "Base"),
          (e[(e.Oh = 5)] = "Oh"),
          (e[(e.OhNo = 6)] = "OhNo"),
          (e[(e.Water = 7)] = "Water"),
          (e[(e.Electric = 8)] = "Electric"),
          (e[(e.Love = 9)] = "Love"),
          (e[(e.Fire = 10)] = "Fire"),
          (e[(e.Psychic = 11)] = "Psychic"),
          (e[(e.Grass = 12)] = "Grass");
      })(Tt || (Tt = {})),
        (function (e) {
          (e[(e.Black = 0)] = "Black"),
            (e[(e.LightAndSweet = 1)] = "LightAndSweet"),
            (e[(e.Macchiato = 2)] = "Macchiato"),
            (e[(e.CreamAndSugar = 3)] = "CreamAndSugar"),
            (e[(e.ColdBrew = 4)] = "ColdBrew"),
            (e[(e.FlatWhite = 5)] = "FlatWhite"),
            (e[(e.Americano = 6)] = "Americano"),
            (e[(e.Espresso = 7)] = "Espresso"),
            (e[(e.Foam = 8)] = "Foam"),
            (e[(e.Latte = 9)] = "Latte"),
            (e[(e.Decaf = 10)] = "Decaf"),
            (e[(e.MilkSubstitute = 11)] = "MilkSubstitute"),
            (e[(e.PlentyOfSugar = 12)] = "PlentyOfSugar"),
            (e[(e.Anything = 13)] = "Anything");
        })(St || (St = {}));
      function Bt(e) {
        for (var a = e / 0.2, t = Math.round(2 * a) / 2, n = Math.floor(t), o = Math.ceil(t), i = [], l = 0; l < n; l++)
          i.push(<ta.a />);
        return n !== o && i.push(<ta.b />), (<span>{i}</span>);
      }
      function Ot(e) {
        return (
          Math.pow(e.omniscience, 0.2) *
          Math.pow(e.tenaciousness, 0.2) *
          Math.pow(e.watchfulness, 0.1) *
          Math.pow(e.anticapitalism, 0.1) *
          Math.pow(e.chasiness, 0.1)
        );
      }
      var It = function (e) {
        var a,
          t = Object(s.h)().id,
          o = Object(n.useContext)(f.context),
          i = Object(n.useContext)(Fe.context),
          c = Object(n.useState)(void 0),
          m = Object(l.a)(c, 2),
          u = m[0],
          d = m[1];
        function h(e) {
          for (var a = 0; a < i.teams.length; a++) {
            for (var t = i.teams[a], n = 0; n < t.lineup.length; n++) if (t.lineup[n] === e._id) return t;
            for (var r = 0; r < t.rotation.length; r++) if (t.rotation[r] === e._id) return t;
            for (var o = 0; o < t.bench.length; o++) if (t.bench[o] === e._id) return t;
            for (var l = 0; l < t.bullpen.length; l++) if (t.bullpen[l] === e._id) return t;
          }
        }
        Object(n.useEffect)(function () {
          (function () {
            var e = Object(g.a)(
              v.a.mark(function e() {
                var a, n, r;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), D([t]);
                      case 2:
                        void 0 !== (a = e.sent) && 1 == a.length && ((n = a[0]), (r = h(n)), d({ player: n, team: r }));
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })()();
        }, []);
        var E =
          void 0 === (null === u || void 0 === u ? void 0 : u.player) ? (
            <Ee />
          ) : (
            <r.a.Fragment>
              <div className="Player-Info">
                <div className="Player-Header">{u.player.name}</div>
                <div className="Player-Team-Line">
                  <div
                    className="Player-Team-Logo"
                    style={{ background: void 0 !== u.team ? u.team.mainColor : "#999999" }}
                  >
                    <div className="Player-Team-Emoji">
                      {String.fromCodePoint(Number(void 0 !== u.team ? u.team.emoji : "0x2753"))}
                    </div>
                  </div>
                  <div className="Player-Team-Name">{void 0 !== u.team ? u.team.fullName : "Null Team"}</div>
                </div>
              </div>
              <div className="Player-Content">
                <ul className="Player-Info-Stats">
                  <div className="Player-Info-Line">
                    <div className="Player-Info-Line-Header">Current Vibe</div>
                    {(function (e, a) {
                      var t = (function (e, a) {
                        var t = 6 + Math.round(10 * e.buoyancy),
                          n = Math.PI * ((2 / t) * a + 0.5);
                        return (
                          0.5 * (e.pressurization + e.cinnamon) * Math.sin(n) -
                          0.5 * e.pressurization +
                          0.5 * e.cinnamon
                        );
                      })(e, a);
                      if (t > 0.8)
                        return (
                          <span className="Player-VibeLine Player-Vibe-MostExcellent">
                            <wt.c className="Player-VibeLine-Arrow" />
                            <wt.c className="Player-VibeLine-Arrow" />
                            <wt.c className="Player-VibeLine-Arrow" />
                            <div className="Player-VibeLine-Text">Most Excellent</div>
                          </span>
                        );
                      if (t > 0.4)
                        return (
                          <span className="Player-VibeLine Player-Vibe-Excellent">
                            <wt.c className="Player-VibeLine-Arrow" />
                            <wt.c className="Player-VibeLine-Arrow" />
                            <div className="Player-VibeLine-Text">Excellent</div>
                          </span>
                        );
                      if (t > 0.1)
                        return (
                          <span className="Player-VibeLine Player-Vibe-Quality">
                            <wt.c className="Player-VibeLine-Arrow" />
                            <div className="Player-VibeLine-Text">Quality</div>
                          </span>
                        );
                      if (t > -0.1)
                        return (
                          <span className="Player-VibeLine Player-Vibe-Neutral">
                            <wt.a className="Player-VibeLine-Arrow" />
                            <div className="Player-VibeLine-Text">Neutral</div>
                          </span>
                        );
                      if (t > -0.4)
                        return (
                          <span className="Player-VibeLine Player-Vibe-LessThanIdeal">
                            <wt.b className="Player-VibeLine-Arrow" />
                            <div className="Player-VibeLine-Text">Less Than Ideal</div>
                          </span>
                        );
                      if (t > -0.8)
                        return (
                          <span className="Player-VibeLine Player-Vibe-FarLessThanIdeal">
                            <wt.b className="Player-VibeLine-Arrow" />
                            <wt.b className="Player-VibeLine-Arrow" />
                            <div className="Player-VibeLine-Text">Far Less Than Ideal</div>
                          </span>
                        );
                      return (
                        <span className="Player-VibeLine Player-Vibe-Terrible">
                          <wt.b className="Player-VibeLine-Arrow" />
                          <wt.b className="Player-VibeLine-Arrow" />
                          <wt.b className="Player-VibeLine-Arrow" />
                          <div className="Player-VibeLine-Text">Honestly Terrible</div>
                        </span>
                      );
                    })(u.player, void 0 !== (null === (a = o.sim) || void 0 === a ? void 0 : a.day) ? o.sim.day : -1)}
                  </div>
                  <div className="Player-Info-Line">
                    <div className="Player-Info-Line-Header">Batting</div>
                    <div className="Player-Ratings">
                      {Bt(
                        (function (e) {
                          return (
                            Math.pow(1 - e.tragicness, 0.01) *
                            Math.pow(e.buoyancy, 0) *
                            Math.pow(e.thwackability, 0.35) *
                            Math.pow(e.moxie, 0.075) *
                            Math.pow(e.divinity, 0.35) *
                            Math.pow(e.musclitude, 0.075) *
                            Math.pow(1 - e.patheticism, 0.05) *
                            Math.pow(e.martyrdom, 0.02)
                          );
                        })(u.player)
                      )}
                    </div>
                  </div>
                  <div className="Player-Info-Line">
                    <div className="Player-Info-Line-Header">Pitching</div>
                    <div className="Player-Ratings">
                      {(function (e) {
                        return Bt(
                          (function (e) {
                            return (
                              Math.pow(e.shakespearianism, 0.1) *
                              Math.pow(e.suppression, 0) *
                              Math.pow(e.unthwackability, 0.5) *
                              Math.pow(e.coldness, 0.025) *
                              Math.pow(e.overpowerment, 0.15) *
                              Math.pow(e.ruthlessness, 0.4)
                            );
                          })(e)
                        );
                      })(u.player)}
                    </div>
                  </div>
                  <div className="Player-Info-Line">
                    <div className="Player-Info-Line-Header">Baserunning</div>
                    <div className="Player-Ratings">
                      {(function (e) {
                        return Bt(Ot(e));
                      })(u.player)}
                    </div>
                  </div>
                  <div className="Player-Info-Line">
                    <div className="Player-Info-Line-Header">Defense</div>
                    <div className="Player-Ratings">
                      {(function (e) {
                        return Bt(Ot(e));
                      })(u.player)}
                    </div>
                  </div>
                </ul>
                <div className="Player-Info-Items">
                  <div className="Player-Info-Items-Box">
                    <div className="Player-Info-Items-Header">Item</div>
                    <div className="Player-Info-Items-Details">
                      <div className="Player-Info-Items-Name">
                        {(function (e) {
                          return void 0 === e || void 0 === e.bat || "" === e.bat ? "None" : e.bat;
                        })(u.player)}
                      </div>
                      <div className="Player-Info-Items-Icon">
                        {(function (e) {
                          return void 0 === e || void 0 === e.bat || e.bat, null;
                        })(u.player)}
                      </div>
                    </div>
                  </div>
                  <div className="Player-Info-Items-Box">
                    <div className="Player-Info-Items-Header">Armor</div>
                    <div className="Player-Info-Items-Details">
                      <div className="Player-Info-Items-Name">
                        {(function (e) {
                          return void 0 === e || void 0 === e.armor || "" === e.armor ? "None" : e.armor;
                        })(u.player)}
                      </div>
                      <div className="Player-Info-Items-Icon">
                        {(function (e) {
                          return void 0 === e || void 0 === e.armor || e.armor, null;
                        })(u.player)}
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="Player-Info-Bio">
                  <div className="Player-Info-Line">
                    <div className="Player-Info-Line-Header">Evolution</div>
                    <div className="Player-Info-Line-Body">Base</div>
                  </div>
                  <div className="Player-Info-Line">
                    <div className="Player-Info-Line-Header">Pregame Ritual</div>
                    <div className="Player-Info-Line-Body">{u.player.ritual}</div>
                  </div>
                  <div className="Player-Info-Line">
                    <div className="Player-Info-Line-Header">Coffee Style</div>
                    <div className="Player-Info-Line-Body">
                      {(function (e) {
                        switch (e) {
                          case St.Black:
                            return "Black";
                          case St.LightAndSweet:
                            return "Light & Sweet";
                          case St.Macchiato:
                            return "Macchiato";
                          case St.CreamAndSugar:
                            return "Cream & Sugar";
                          case St.ColdBrew:
                            return "Cold Brew";
                          case St.FlatWhite:
                            return "Flat White";
                          case St.Americano:
                            return "Americano";
                          case St.Foam:
                            return "Heavy Foam";
                          case St.Latte:
                            return "Latte";
                          case St.Decaf:
                            return "Decaf";
                          case St.MilkSubstitute:
                            return "Milk Substitute";
                          case St.PlentyOfSugar:
                            return "Plenty of Sugar";
                          case St.Anything:
                            return "Anything";
                        }
                        return "Coffee?";
                      })(u.player.coffee)}
                    </div>
                  </div>
                  <div className="Player-Info-Line">
                    <div className="Player-Info-Line-Header">Blood Type</div>
                    <div className="Player-Info-Line-Body">
                      {(function (e) {
                        switch (e) {
                          case Tt.SingleA:
                            return "A";
                          case Tt.DoubleA:
                            return "AA";
                          case Tt.TripleA:
                            return "AAA";
                          case Tt.Acid:
                            return "Acidic";
                          case Tt.Base:
                            return "Basic";
                          case Tt.Oh:
                            return "O";
                          case Tt.OhNo:
                            return "O No";
                          case Tt.Water:
                            return "H\u2082O";
                          case Tt.Electric:
                            return "Electric";
                          case Tt.Love:
                            return "Love";
                          case Tt.Fire:
                            return "Fire";
                          case Tt.Psychic:
                            return "Psychic";
                          case Tt.Grass:
                            return "Grass";
                        }
                        return "Blood?";
                      })(u.player.blood)}
                    </div>
                  </div>
                  <div className="Player-Info-Line">
                    <div className="Player-Info-Line-Header">Fate</div>
                    <div className="Player-Info-Line-Body">{u.player.fate}</div>
                  </div>
                  <div className="Player-Info-Line">
                    <div className="Player-Info-Line-Header">Soulscream</div>
                    {(function (e) {
                      for (
                        var a = "",
                          t = ["A", "E", "I", "O", "U", "X", "H", "A", "E", "I"],
                          n = [e.pressurization, e.divinity, e.tragicness, e.shakespearianism, e.ruthlessness],
                          o = 0;
                        o < e.soul;
                        o++
                      )
                        for (var i = 0; i < 11; i++) {
                          var l = 1 / Math.pow(10, o),
                            s = n[i % n.length] % l,
                            c = Math.floor((s / l) * 10);
                          a += t[c];
                        }
                      return (
                        <div className="Player-Soulscream">
                          <div className="Player-Soulscream-Body">{a}</div>
                        </div>
                      );
                    })(u.player)}
                  </div>
                </ul>
              </div>
            </r.a.Fragment>
          );
        return <se {...Object.assign({}, e, { className: "Player" })}>{E}</se>;
      };
      t(162);
      function kt() {
        return (
          <div className="Hiatus-All">
            <div className="Hiatus-Header">
              Blaseball is taking an <span className="Hiatus-NoWrap">Extended Siesta.</span>
            </div>
            <div className="Hiatus-Body">
              Blaseball began as a small side project that we decided would be fun to share. We've been overjoyed -- and
              honestly overwhelmed -- to watch it explode the way it has. We LOVE this community -- from the fan art to
              the wiki, to the team chants, rituals and personalities that sprang forth. This is way, way bigger than we
              expected. Your creativity continues to fuel and inspire us.
            </div>
            <div className="Hiatus-Body">
              <span className="Stubs-Serif">BLASEBALL WILL BE BACK.</span> We plan to bring you more exciting action
              every week. But to do that, we need some time to fix bugs, add some features, make the machines bigger,
              and breathe. Our team is exhausted and overworked. We need a little time to recoup so Blaseball can come
              back stronger than ever.
            </div>
            <div className="Hiatus-Body">
              But we will be back. The Peanut demands it. It's not finished with you yet.
            </div>
            <div className="Hiatus-Body">
              We really appreciate your patience. We’re expanding the team right now so we can be ready to relaunch,
              hopefully in a week or two. Follow us on{" "}
              <a target="_blank" href="https://twitter.com/blaseballcomms" className="Hiatus-Serif">
                Twitter
              </a>{" "}
              and{" "}
              <a target="_blank" href="https://discord.gg/3uFgJhu" className="Hiatus-Serif">
                Discord
              </a>{" "}
              to stay in the loop as we prepare for Blaseball’s return.
            </div>
            <div className="Hiatus-Body">
              And a very special thank you goes out to everyone who has supported us on{" "}
              <a target="_blank" href="https://www.patreon.com/blaseball" className="Hiatus-Serif">
                Patreon
              </a>
              . For those that can donate, any help goes a long way. Blaseball was created and self-published by a very
              small team, and it's going to be independence that keeps Blaseball’s spirit alive.
            </div>
            <div className="Hiatus-Body">Thank you again, Blaseball fans. We will see you very soon.</div>
            <div className="Hiatus-Body">We can't wait to see what you create next.</div>
            <div className="Hiatus-Body">
              <a target="_blank" href="https://twitter.com/thegameband" className="Hiatus-Serif">
                - The Game Band
              </a>
            </div>
          </div>
        );
      }
      function Ct() {
        var e = Object(n.useContext)(U.context).user,
          a = Object(n.useContext)(f.context),
          t = Object(n.useContext)(da.context),
          o = Object(n.useState)(!1),
          i = Object(l.a)(o, 2),
          s = i[0],
          c = i[1];
        return (
          Object(n.useEffect)(
            function () {
              void 0 !== e && !e.isFetching && e.isSignedIn ? c(!0) : c(!1);
            },
            [e]
          ),
          (void 0 !== e && e.isFetching) || void 0 === a || void 0 === a.sim ? (
            <Gt />
          ) : t && t.doc && t.doc.epsilon ? (
            <Lt />
          ) : s ? (
            <Dt />
          ) : (
            <Rt />
          )
        );
      }
      function Rt() {
        var e = Object(s.g)(),
          a = e.state && e.state.background;
        return (
          <div>
            <Me />
            <div className="Main-Body-Intro">
              <s.c location={a || e}>
                <s.a path="/tos">
                  <mt />
                </s.a>
                <s.a path="/privacy">
                  <ct />
                </s.a>
                <s.a path="/login">
                  <fa isLogin={!0} />
                </s.a>
                <s.a path="/signup/:code?">
                  <fa />
                </s.a>
                <s.a path="/">
                  <ea />
                </s.a>
              </s.c>
              {a && (
                <r.a.Fragment>
                  <s.a path="/signup" children={<fa isModal={!0} />} />
                  <s.a path="/login" children={<fa isModal={!0} isLogin={!0} />} />
                  <s.a path="/team/:nickname" children={<ca isModal={!0} />} />
                  <s.a path="/bet/:gameId" children={<fe isModal={!0} />} />
                </r.a.Fragment>
              )}
              <pa isModal={!0} dismissable={!1} />
            </div>
            <footer className="Main-Footer">
              <div className="Main-Footer-Links">
                <a className="Main-Footer-Link" href="/tos">
                  Terms of Service
                </a>
                <a className="Main-Footer-Link" href="/privacy">
                  Privacy Policy
                </a>
                <a className="Main-Footer-Link" href={Mt()}>
                  Advertise
                </a>
              </div>
              <a href="https://twitter.com/thegameband" target="_blank" className="Main-Footer-Logo">
                <pt />
              </a>
            </footer>
          </div>
        );
      }
      function Gt() {
        return (
          <div>
            <Pe />
            <div className="Main-Body" />
          </div>
        );
      }
      function Lt() {
        return (
          <div>
            <Pe />
            <div className="Main-Body">
              <Nt />
            </div>
          </div>
        );
      }
      function Dt() {
        var e = Object(n.useContext)(f.context),
          a = Object(s.g)(),
          t = a.state && a.state.background,
          o = function (a, t) {
            var n,
              o,
              i = void 0 !== e.sim && void 0 !== e.sim.season ? e.sim.season : -1;
            switch (a) {
              case 0:
                return <st />;
              case 1:
                return (
                  <div>
                    <aa
                      element={
                        <div className="Stubs-All">
                          <div className="Stubs-Header">It's the Pre-Season.</div>
                          <je dateString={null === (n = e.sim) || void 0 === n ? void 0 : n.nextPhaseTime} />
                          <div className="Stubs-Body">Season {i + 1} will begin soon.</div>
                        </div>
                      }
                      text="Offseason. Check for updates on the Discord!"
                    />
                    <qe />
                  </div>
                );
              case 2:
                return <Ue path={t} />;
              case 3:
                return (
                  <div>
                    <aa
                      element={
                        <div className="Stubs-All">
                          <div className="Stubs-Header">The Season is Over!</div>
                          <je dateString={null === (o = e.sim) || void 0 === o ? void 0 : o.nextPhaseTime} />
                          <div className="Stubs-Body">Postseason {i + 1} will begin soon.</div>
                        </div>
                      }
                      text="Offseason. Check for updates on the Discord!"
                    />
                    <qe />
                  </div>
                );
              case 4:
                return <Ye path={t} />;
              case 5:
              case 6:
                return <_e />;
            }
            return <div />;
          };
        return (
          <gt>
            <J>
              <Le state={e} />
              <div className="Main-Body">
                <s.c location={t || a}>
                  <s.a path="/tos">
                    <mt />
                  </s.a>
                  <s.a path="/privacy">
                    <ct />
                  </s.a>
                  <s.a path="/about">
                    <$e />
                  </s.a>
                  <s.a path="/shop">
                    <ha />
                  </s.a>
                  <s.a path="/thebook">
                    <yt />
                  </s.a>
                  <s.a path="/standings">
                    <Ve />
                  </s.a>
                  <s.a path="/offseason">
                    <rt />
                  </s.a>
                  <s.a path="/login">
                    <fa isLogin={!0} />
                  </s.a>
                  <s.a path="/signup">
                    <fa />
                  </s.a>
                  <s.a path="/team/:nickname">
                    <ca />
                  </s.a>
                  <s.a path="/player/:id">
                    <It />
                  </s.a>
                  <s.a path="/upcoming">{e.sim && o(e.sim.phase, "/upcoming")}</s.a>
                  {e.sim && e.sim.unlockedInterviews ? (
                    <s.a path="/league">{e.sim && o(e.sim.phase, "/")}</s.a>
                  ) : (
                    <s.a path="/">{e.sim && o(e.sim.phase, "/")}</s.a>
                  )}
                  {e.sim && e.sim.unlockedInterviews ? (
                    <s.a path="/">
                      <kt />
                    </s.a>
                  ) : null}
                </s.c>
                {t && (
                  <r.a.Fragment>
                    <s.a path="/signup" children={<fa isModal={!0} />} />
                    <s.a path="/login" children={<fa isModal={!0} isLogin={!0} />} />
                    <s.a path="/team/:nickname" children={<ca isModal={!0} />} />
                    <s.a path="/player/:id" children={<It isModal={!0} />} />
                    <s.a path="/bet/:gameId" children={<fe isModal={!0} />} />
                  </r.a.Fragment>
                )}
                <pa isModal={!0} dismissable={!1} />
              </div>
              <footer className="Main-Footer">
                <div className="Main-Footer-Links">
                  <a className="Main-Footer-Link" href="/tos">
                    Terms of Service
                  </a>
                  <a className="Main-Footer-Link" href="/privacy">
                    Privacy Policy
                  </a>
                  <a className="Main-Footer-Link" href={Mt()}>
                    Advertise
                  </a>
                </div>
                <a href="https://twitter.com/thegameband" target="_blank" className="Main-Footer-Logo">
                  <pt />
                </a>
              </footer>
            </J>
          </gt>
        );
      }
      function Mt() {
        return "mailto:sponsors@thegameband.com?subject=".concat(
          encodeURIComponent("I\u2019d like to sponsor a season of Blaseball")
        );
      }
      var Pt = function () {
        return (
          <div className="Main">
            <U>
              <Ct />
            </U>
          </div>
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      var Qt = { sim: void 0, standings: void 0, season: void 0 };
      "serviceWorker" in navigator &&
        navigator.serviceWorker.ready
          .then(function (e) {
            e.unregister();
          })
          .catch(function (e) {
            console.error(e.message);
          }),
        i.a.render(
          <r.a.StrictMode>
            <ce.ToastProvider autoDismiss={!0} autoDismissTimeout={3e3} placement="bottom-right">
              <f value={Qt}>
                <Fe value={{}}>
                  <da value={{}}>
                    <c.a>
                      <Pt />
                    </c.a>
                  </da>
                </Fe>
              </f>
            </ce.ToastProvider>
          </r.a.StrictMode>,
          document.getElementById("root")
        );
    },
    23: function (e) {
      e.exports = {
        maxBetTiers: [
          { price: 0, amount: 20 },
          { price: 20, amount: 40 },
          { price: 30, amount: 60 },
          { price: 40, amount: 80 },
          { price: 50, amount: 100 },
          { price: 60, amount: 120 },
          { price: 70, amount: 140 },
          { price: 80, amount: 160 },
          { price: 90, amount: 180 },
          { price: 100, amount: 200 },
          { price: 110, amount: 220 },
          { price: 120, amount: 240 },
          { price: 130, amount: 260 },
          { price: 140, amount: 280 },
          { price: 150, amount: 300 },
          { price: 160, amount: 320 },
          { price: 170, amount: 340 },
          { price: 180, amount: 360 },
          { price: 190, amount: 380 },
          { price: 200, amount: 400 },
          { price: 210, amount: 420 },
          { price: 220, amount: 440 },
          { price: 230, amount: 460 },
          { price: 240, amount: 480 },
          { price: 250, amount: 500 },
          { price: 260, amount: 520 },
          { price: 270, amount: 540 },
          { price: 280, amount: 560 },
          { price: 290, amount: 580 },
          { price: 300, amount: 600 },
          { price: 325, amount: 620 },
          { price: 350, amount: 640 },
          { price: 375, amount: 660 },
          { price: 400, amount: 680 },
          { price: 425, amount: 700 },
          { price: 450, amount: 720 },
          { price: 475, amount: 740 },
          { price: 500, amount: 760 },
          { price: 525, amount: 780 },
          { price: 550, amount: 800 },
        ],
        teamWinCoinTiers: [
          { price: 0, amount: 5 },
          { price: 20, amount: 6 },
          { price: 20, amount: 7 },
          { price: 20, amount: 8 },
          { price: 20, amount: 9 },
          { price: 25, amount: 10 },
          { price: 25, amount: 11 },
          { price: 25, amount: 12 },
          { price: 25, amount: 13 },
          { price: 25, amount: 14 },
          { price: 30, amount: 15 },
          { price: 30, amount: 16 },
          { price: 30, amount: 17 },
          { price: 30, amount: 18 },
          { price: 30, amount: 19 },
          { price: 35, amount: 20 },
          { price: 35, amount: 21 },
          { price: 35, amount: 22 },
          { price: 35, amount: 23 },
          { price: 35, amount: 24 },
          { price: 40, amount: 25 },
          { price: 40, amount: 26 },
          { price: 40, amount: 27 },
          { price: 40, amount: 28 },
          { price: 40, amount: 29 },
          { price: 45, amount: 30 },
          { price: 45, amount: 31 },
          { price: 45, amount: 32 },
          { price: 45, amount: 33 },
          { price: 45, amount: 34 },
          { price: 50, amount: 35 },
          { price: 50, amount: 36 },
          { price: 50, amount: 37 },
          { price: 50, amount: 38 },
          { price: 50, amount: 39 },
          { price: 55, amount: 40 },
          { price: 55, amount: 41 },
          { price: 55, amount: 42 },
          { price: 55, amount: 43 },
          { price: 55, amount: 44 },
          { price: 60, amount: 45 },
          { price: 60, amount: 46 },
          { price: 60, amount: 47 },
          { price: 60, amount: 48 },
          { price: 60, amount: 49 },
          { price: 70, amount: 50 },
          { price: 70, amount: 51 },
          { price: 70, amount: 52 },
          { price: 70, amount: 53 },
          { price: 70, amount: 54 },
          { price: 80, amount: 55 },
          { price: 80, amount: 56 },
          { price: 80, amount: 57 },
          { price: 80, amount: 58 },
          { price: 80, amount: 59 },
          { price: 85, amount: 60 },
        ],
      };
    },
    41: function (e, a, t) {},
    84: function (e, a, t) {
      e.exports = t(163);
    },
    89: function (e, a, t) {},
    90: function (e, a, t) {},
  },
  [[84, 1, 2]],
]);
