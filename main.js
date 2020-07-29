(this.webpackJsonpsite = this.webpackJsonpsite || []).push([
  [0],
  {
    124: function (e, t) {},
    128: function (e, t, a) {},
    129: function (e, t, a) {},
    134: function (e, t, a) {},
    136: function (e, t, a) {},
    137: function (e, t, a) {},
    138: function (e, t, a) {},
    139: function (e, t, a) {},
    140: function (e, t, a) {},
    141: function (e, t, a) {},
    142: function (e, t, a) {},
    143: function (e, t, a) {},
    144: function (e, t, a) {},
    145: function (e, t, a) {},
    146: function (e, t, a) {},
    147: function (e, t, a) {},
    148: function (e, t, a) {},
    149: function (e, t, a) {},
    150: function (e, t, a) {},
    151: function (e, t, a) {},
    152: function (e, t, a) {},
    153: function (e, t, a) {},
    154: function (e, t, a) {},
    155: function (e, t, a) {},
    156: function (e, t, a) {},
    157: function (e, t, a) {},
    158: function (e, t, a) {},
    159: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        r = a.n(n),
        o = a(17),
        i = a.n(o),
        l = (a(89), a(6)),
        s = a(11),
        c = (a(40), a(90), a(14)),
        m = function (e) {
          var t = e.path,
            a = e.className,
            n = e.background;
          return (
            <c.b to={{ pathname: t, state: { background: n } }} className={a}>
              {e.children}
            </c.b>
          );
        },
        u = a(22),
        d = a(77),
        h = a.n(d)()("https://blaseball.com", { transports: ["websocket", "polling"] }),
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
          var t = e.children,
            a = Object(n.useState)({
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
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(function () {
              return (
                h.on("gameDataUpdate", function (e) {
                  s(function (t) {
                    return Object(u.a)({}, t, {}, e);
                  });
                }),
                function () {
                  h.off("gameDataUpdate");
                }
              );
            }, []),
            (<E.Provider value={i}>{t}</E.Provider>)
          );
        };
      p.context = E;
      var A = p,
        f = a(3),
        v = a.n(f),
        g = a(5),
        y = (a(15), "https://blaseball.com"),
        b = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return fetch(e, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: t,
          });
        };
      function T() {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = Object(g.a)(
          v.a.mark(function e() {
            var t, a;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/globalEvents"));
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (a = e.sent), e.abrupt("return", a);
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
            var t, a;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/offseasonSetup"));
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (a = e.sent), e.abrupt("return", a);
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
          v.a.mark(function e(t) {
            var a, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/offseasonRecap?season=").concat(t))
                      );
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
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
        return C.apply(this, arguments);
      }
      function C() {
        return (C = Object(g.a)(
          v.a.mark(function e(t) {
            var a, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/bonusResults?ids=").concat(t));
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
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
      function k(e) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = Object(g.a)(
          v.a.mark(function e(t) {
            var a, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/decreeResults?ids=").concat(t));
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
                    case 6:
                      return (n = e.sent), console.log(t), e.abrupt("return", n);
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
      function G() {
        return L.apply(this, arguments);
      }
      function L() {
        return (L = Object(g.a)(
          v.a.mark(function e() {
            var t, a;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/allTeams"));
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (a = e.sent), e.abrupt("return", a);
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
        return Q.apply(this, arguments);
      }
      function Q() {
        return (Q = Object(g.a)(
          v.a.mark(function e(t) {
            var a, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/team?id=").concat(t));
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
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
      function M(e) {
        return W.apply(this, arguments);
      }
      function W() {
        return (W = Object(g.a)(
          v.a.mark(function e(t) {
            var a, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch("".concat(y, "/database/players?ids=").concat(t));
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
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
      var j = {
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
        },
        x = { user: j, initUser: function () {}, clearUser: function () {}, refreshUser: function () {} },
        U = Object(n.createContext)(x),
        Y = function (e, t) {
          var a = Object(u.a)({}, e, {
            id: e._id,
            isFetching: !1,
            isSignedIn: !(!e || !e.email),
            favoriteTeamInfo: t.favoriteTeamInfo,
          });
          return (
            a.votes || (a.votes = 0),
            void 0 === a.maxBetTier && (a.maxBetTier = 0),
            void 0 === a.dailyCoinsTier && (a.dailyCoinsTier = 0),
            void 0 === a.unlockedElection && (a.unlockedElection = !1),
            void 0 === a.unlockedShop && (a.unlockedShop = !1),
            a
          );
        },
        P = function (e) {
          var t = e.children,
            a = Object(n.useState)(j),
            o = Object(l.a)(a, 2),
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
                                    v.a.mark(function e(t) {
                                      var a;
                                      return v.a.wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                (((a = Y(t, i)).isFetching = !1),
                                                void 0 === a.favoriteTeam || i.favoriteTeamInfo)
                                              ) {
                                                e.next = 6;
                                                break;
                                              }
                                              return (e.next = 5), D(a.favoriteTeam);
                                            case 5:
                                              a.favoriteTeamInfo = e.sent;
                                            case 6:
                                              s(a), h.emit("setUserId", { userId: (a && a._id) || "" }), c();
                                            case 9:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  );
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )
                              .catch(function (e) {
                                var t = Object(u.a)({}, i, { isFetching: !1 });
                                s(t), console.log(e);
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
                  var t;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (t = i.favoriteTeam), (e.next = 3), D(t);
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
                  s(function (t) {
                    return Object(u.a)({}, t, {}, e);
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
              h.emit("setUserId", { userId: "" }), s(j);
            },
            refreshUser: c,
          };
          return <U.Provider value={E}>{t}</U.Provider>;
        };
      P.context = U;
      var J = P,
        F = r.a.createContext([]),
        H = function (e) {
          var t = e.children,
            a = Object(s.g)().pathname,
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
                    var t = {};
                    e &&
                      e.length &&
                      e.forEach(function (e) {
                        var a = e.gameId;
                        a && (t[a] || (t[a] = []), t[a].push(e));
                      }),
                      m(t);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              [a]
            ),
            (<F.Provider value={c}>{t}</F.Provider>)
          );
        };
      H.context = F;
      var V = H;
      function K() {
        return (K =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function q(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
        }
        return r;
      }
      var z = r.a.createElement(
          "style",
          { type: "text/css" },
          "\n\t.st0{fill:none;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;}\n"
        ),
        Z = (
          <g id="base2" className="st0" transform="matrix(0.7071,-0.7071,0.7071,0.7071,-16.7558,95.4764)">
            <rect x={84.83} y={48.54} width={70.31} height={70.31} />
          </g>
        ),
        X = (
          <g id="base1" className="st0" transform="matrix(0.7071,-0.7071,0.7071,0.7071,-40.4706,152.625)">
            <rect x={141.95} y={105.74} width={70.31} height={70.31} />
          </g>
        ),
        _ = (
          <g id="base3" className="st0" transform="matrix(0.7071,-0.7071,0.7071,0.7071,-74.0296,71.6061)">
            <rect x={27.38} y={105.74} width={70.31} height={70.31} />
          </g>
        ),
        $ = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = q(e, ["svgRef", "title"]);
          return (
            <svg
              {...K(
                {
                  viewBox: "0 0 255 197",
                  xmlSpace: "preserve",
                  style: { enableBackground: "new 0 0 240 240" },
                  ref: t,
                },
                n
              )}
            >
              {a ? <title>{a}</title> : null}
              {z}
              {Z}
              {X}
              {_}
            </svg>
          );
        },
        ee = r.a.forwardRef(function (e, t) {
          return <$ {...K({ svgRef: t }, e)} />;
        });
      a.p;
      function te(e) {
        var t,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.2;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))
          return (
            3 == (t = e.substring(1).split("")).length && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
            "rgba(" + [((t = "0x" + t.join("")) >> 16) & 255, (t >> 8) & 255, 255 & t].join(",") + ",".concat(a, ")")
          );
        throw new Error("Bad Hex");
      }
      function ae() {
        var e = [0],
          t = new Date();
        if ((t.setMinutes(t.getMinutes() + 1, 0, 0), 0 == e.length)) return t;
        for (var a = !1; !a; ) {
          for (var n = t.getMinutes(), r = 0; r < e.length; r++)
            if (e[r] == n) {
              a = !0;
              break;
            }
          a || t.setMinutes(n + 1, 0, 0);
        }
        return t;
      }
      var ne,
        re = a(12),
        oe = a(80),
        ie = a(21),
        le = (a(128), a(129), a(27)),
        se = a(55);
      !(function (e) {
        e[(e.GENERIC = 1)] = "GENERIC";
      })(ne || (ne = {}));
      var ce = function (e) {
        var t = Object(s.f)(),
          a = Object(s.g)(),
          o = (a.state && a.state.background, e.isModal),
          i = e.className,
          l = e.children,
          c = e.dismissable,
          m = e.style,
          u = Object(n.useRef)(null),
          d = function () {
            document.body.classList.remove("noscroll"), t.goBack();
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
        var h = Object(se.b)({
            opacity: 1,
            transform: o ? "translate(-50%, -50%)" : "none",
            from: { opacity: 0, transform: o ? "translate(-50%, -40%)" : "none" },
          }),
          E = "Modal";
        switch (m) {
          case ne.GENERIC:
            E += " Modal--Generic";
        }
        var p = (
          <se.a.div style={h} className={E + (o ? "" : " Modal--Static") + (i ? " ".concat(i) : "")} ref={u}>
            {c && o && (
              <button
                className="Modal-Close"
                onClick={function () {
                  return d();
                }}
              >
                <le.d />
              </button>
            )}
            {l}
          </se.a.div>
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
      ce.defaultProps = { dismissable: !0, style: ne.GENERIC };
      var me = ce,
        ue = a(16),
        de = a(23),
        he = a(26),
        Ee = a(53),
        pe =
          (a(134),
          function () {
            return (
              <div className="LoadingSpinner-Inline">
                <Ee.a />
              </div>
            );
          }),
        Ae = function () {
          return (
            <div className="LoadingSpinner">
              <Ee.a />
            </div>
          );
        };
      function fe(e, t) {
        return 0.5 === e
          ? Math.round(2 * t)
          : e < 0.5
          ? Math.round(t * (2 + 555e-6 * Math.pow(100 * (0.5 - e), 2.4135)))
          : Math.round(t * (2 - 335e-6 * Math.pow(100 * (e - 0.5), 2.045)));
      }
      var ve = function (e) {
          var t = Object(ue.useToasts)().addToast,
            a = Object(n.useContext)(J.context),
            o = a.user,
            i = a.refreshUser,
            c = Object(s.f)(),
            m = Object(n.useRef)(null),
            u = Object(s.h)().gameId,
            d = Object(n.useState)(0),
            h = Object(l.a)(d, 2),
            E = h[0],
            p = h[1],
            f = Object(n.useState)(""),
            v = Object(l.a)(f, 2),
            g = v[0],
            y = v[1],
            T = Object(n.useState)(void 0),
            N = Object(l.a)(T, 2),
            S = N[0],
            w = N[1],
            B = Object(n.useContext)(A.context),
            O = function (e) {
              var t = e.target.value;
              p(t);
            };
          if (
            (Object(n.useEffect)(function () {
              var e,
                t,
                a =
                  null === (e = B.schedule) || void 0 === e
                    ? void 0
                    : e.find(function (e) {
                        return u === e._id;
                      });
              void 0 === a &&
                (a =
                  null === (t = B.tomorrowSchedule) || void 0 === t
                    ? void 0
                    : t.find(function (e) {
                        return u === e._id;
                      })),
                a && (w(a), y(a.homeTeam));
            }, []),
            void 0 === S)
          )
            return <Ae />;
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
            C = he.maxBetTiers[o.maxBetTier].amount,
            k = function () {
              return S ? (g === S.homeTeam ? S.homeOdds : S.awayOdds) : 0.5;
            };
          S && (g === S.homeTeam ? S.homeTeamNickname : S.awayTeamNickname),
            S && (g === S.homeTeam ? S.homeTeamColor : S.awayTeamColor);
          var R,
            G = (
              <span
                style={{
                  color: ((R = k()), R > 0.6 ? "#59bd42" : R > 0.5 ? "#93ed77" : R < 0.4 ? "#bf3f3f" : "#f28383"),
                }}
                className="Bet-Outcome-Winnings"
              >
                {Math.round(100 * k())}%
              </span>
            ),
            L = <span className="Bet-Outcome-Winnings">{fe(k(), E)}</span>,
            D = (
              <div className="Bet-Outcome-Wrapper">
                You'll have a {G} chance to win {L} coins.
              </div>
            );
          return (
            <me {...Object.assign({}, e, { className: "Bet" })}>
              <div className="Bet-Header">Place a Bet</div>
              <de.a
                className="Bet-Form"
                onSubmit={function (e) {
                  if ((e.preventDefault(), E > C)) t("Max bet is ".concat(C, "!"), { appearance: "error" });
                  else {
                    var a = { gameId: u, amount: E, userId: o._id, entityId: g, type: "winner", odds: k() };
                    b("/api/bet", JSON.stringify(a)).then(function (e) {
                      e.ok && e.status && 200 === e.status
                        ? (i(), t("Bet Placed", { appearance: "success" }), c.goBack())
                        : e.json().then(function (e) {
                            t(e.error || "Error", { appearance: "error" });
                          });
                    });
                  }
                }}
              >
                <div className="Bet-Form-Inputs">
                  <de.a.Group className="Bet-Form-Inputs-Right" controlId="amount">
                    <de.a.Group controlId="entityId">
                      <de.a.Label>
                        <div className="Bet-Form-Inputs-Label">Who will win the game?</div>
                      </de.a.Label>
                      <de.a.Control
                        as="select"
                        name="entityId"
                        ref={m}
                        onChange={function (e) {
                          var t = e.target.value;
                          y(t);
                        }}
                      >
                        {I.map(function (e, t) {
                          return (
                            <option key={t} value={e.value}>
                              {e.text}
                            </option>
                          );
                        })}
                      </de.a.Control>
                    </de.a.Group>
                    <de.a.Label>
                      <div className="Bet-Form-Inputs-Label">How much do you want to wager?</div>
                    </de.a.Label>
                    <div className="Bet-Form-Inputs-Amount">
                      <div className="Bet-Coin-Wrapper">
                        <ie.f className="Bet-Coin-Icon" />
                        {o.coins}
                      </div>
                      <de.a.Label>
                        <div className="Bet-Form-Inputs-Amount-MaxBet">Max Bet: {C}</div>
                      </de.a.Label>
                      <de.a.Control type="number" value={E} onChange={O} />
                      <de.a.Control type="range" min={0} max={Math.min(o.coins, C)} value={E} onChange={O} step="1" />
                    </div>
                  </de.a.Group>
                </div>
                {D}
                <div className="Bet-Submit-Wrapper">
                  <re.a className="Bet-Submit" type="submit" variant="success">
                    Submit
                  </re.a>
                </div>
              </de.a>
            </me>
          );
        },
        ge = (a(136), a(19));
      function ye(e) {
        var t = e.type,
          a = null;
        switch (t) {
          case 0:
            a = <ge.e />;
            break;
          case 1:
            a = <ge.c />;
            break;
          case 2:
            a = <ge.a />;
            break;
          case 3:
            a = <ge.f />;
            break;
          case 4:
            a = <ge.g />;
            break;
          case 5:
            a = <ge.h />;
            break;
          case 6:
            a = <ge.d />;
            break;
          case 7:
            a = <ge.i />;
            break;
          case 8:
            a = <ge.j />;
            break;
          case 9:
            a = <ge.k />;
        }
        return (
          <div className="WeatherIcon" style={{ color: be(t), background: Te(t) }}>
            {a}
          </div>
        );
      }
      function be(e) {
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
        }
        return "#ffffff";
      }
      function Te(e) {
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
        }
        return "#e1e1e1";
      }
      function Ne(e) {
        return e.homeScore;
      }
      function Se(e) {
        return e.awayScore;
      }
      function we(e) {
        var t = Object(n.useContext)(A.context),
          a = (function (e, t) {
            var a, n, r, o;
            if (t) {
              for (var i in t.wins) e.homeTeam === i && (a = t.wins[i]), e.awayTeam === i && (r = t.wins[i]);
              for (var l in t.losses) e.homeTeam === l && (n = t.losses[l]), e.awayTeam === l && (o = t.losses[l]);
            }
            return {
              homeTeamName: e.homeTeamNickname,
              homeTeamWins: void 0 === a ? "" : a.toString(),
              homeTeamLosses: void 0 === n ? "" : n.toString(),
              homeTeamScore: Ne(e).toString(),
              awayTeamName: e.awayTeamNickname,
              awayTeamWins: void 0 === r ? "" : r.toString(),
              awayTeamLosses: void 0 === o ? "" : o.toString(),
              awayTeamScore: Se(e).toString(),
            };
          })(e.data, t.standings);
        return <Be data={e.data} metaInfo={a} />;
      }
      function Be(e) {
        var t,
          a,
          o,
          i = e.data,
          l = e.metaInfo,
          c = Object(n.useContext)(J.context).user,
          u = Object(n.useContext)(V.context),
          d = {
            started: (t = i).gameStart,
            complete: t.gameComplete,
            shame: t.shame,
            inning: t.inning,
            topOfInning: t.topOfInning,
            outs: t.halfInningOuts,
            balls: t.atBatBalls,
            strikes: t.atBatStrikes,
            strikesNeeded: t.topOfInning ? t.awayStrikes : t.homeStrikes,
            weather: t.weather,
          },
          h = (function (e) {
            var t, a;
            if (e.complete) (a = "Complete"), (t = "Final" + (e.inning <= 9 ? "" : " (".concat(e.inning + 1, ")")));
            else if (e.started)
              if (e.shame) (t = "Shame"), (a = "Shame");
              else {
                a = "Live";
                var n = e.topOfInning ? "\u25b2" : "\u25bc";
                t = "Live - ".concat(e.inning + 1, " ").concat(n);
              }
            else (t = "Upcoming"), (a = "Upcoming");
            return (
              <div className="GameWidget-StatusBar">
                <div className={"GameWidget-Status GameWidget-Status--".concat(a)}>{t}</div>
                {e.started ? <ye type={e.weather} /> : null}
              </div>
            );
          })(d),
          E = (function (e) {
            for (var t = [], a = 0; a < 3; a++)
              t.push(
                <div className="GameWidget-Outs-Dots" key={a}>
                  {a < e.balls ? "\u25cf" : "\u25cb"}
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
                  <div className="GameWidget-Outs-DotList">{t}</div>
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
          A = i.topOfInning ? i.homeTeamColor : i.awayTeamColor,
          f = Ne(i),
          v = Se(i);
        function g() {
          return i.homeScore > i.awayScore ? i.homeTeam : i.awayTeam;
        }
        function y() {
          return i.homeScore > i.awayScore ? i.awayTeam : i.homeTeam;
        }
        function b(e) {
          return e === i.homeTeam ? i.homeTeamNickname : e === i.awayTeam ? i.awayTeamNickname : "Null Team";
        }
        function T(e) {
          return e === i.homeTeam ? i.homeTeamColor : e === i.awayTeam ? i.awayTeamColor : "Null Color";
        }
        (a = f > v && i.gameComplete ? { border: 2, borderColor: "#fffffff", borderStyle: "solid" } : {}),
          (o = v > f && i.gameComplete ? { border: 2, borderColor: "#fffffff", borderStyle: "solid" } : {});
        var N = (function (e) {
            for (
              var t = {
                  onFirst: !1,
                  onSecond: !1,
                  onThird: !1,
                  playerOnFirst: void 0,
                  playerOnSecond: void 0,
                  playerOnThird: void 0,
                },
                a = 0;
              a < e.baserunnerCount;
              a++
            ) {
              var n = e.baseRunners[a];
              switch (e.basesOccupied[a]) {
                case 0:
                  (t.onFirst = !0), (t.playerOnFirst = n);
                  break;
                case 1:
                  (t.onSecond = !0), (t.playerOnSecond = n);
                  break;
                case 2:
                  (t.onThird = !0), (t.playerOnThird = n);
              }
            }
            return t;
          })(i),
          S = "";
        N.onFirst && (S += " first"), N.onSecond && (S += " second"), N.onThird && (S += " third");
        var w = (
            <div className={"GameWidget-Bases" + S}>
              <ee width="100%" height="100%" />
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
                  <div className="GameWidget-PlayerLineNameWrapper" style={{ background: te(A, 0.5) }}>
                    <div className="GameWidget-PlayerLineName">
                      {i.topOfInning ? i.homePitcherName : i.awayPitcherName}
                    </div>
                  </div>
                </div>
                <div className="GameWidget-PlayerLine">
                  <div className="GameWidget-PlayerStatusIcon GameWidget-PlayerStatusIcon--Batting" />
                  <div className="GameWidget-PlayerStatusLabel">Batting</div>
                  <div className="GameWidget-PlayerLineNameWrapper" style={{ background: te(p, 0.5) }}>
                    <div className="GameWidget-PlayerLineName">
                      {(i.topOfInning ? i.awayBatterName : i.homeBatterName) || "-"}
                    </div>
                  </div>
                </div>
              </div>
            ),
          I = Object(s.g)(),
          C = null;
        if (d.started && c.isSignedIn) C = null;
        else if (d.started) C = <div />;
        else if (c.isSignedIn) {
          var k,
            R = u[i._id],
            G = (null === R || void 0 === R ? void 0 : R.length) || 0,
            L = G > 0 ? R[0] : void 0;
          void 0 !== L && (k = L.entityId === i.homeTeam ? i.homeTeamName : i.awayTeamName),
            (C = (
              <oe.a className="GameWidget-Button-Centered">
                {G > 0 ? (
                  <div className="GameWidget-UpcomingBet">
                    <ie.f /> {G > 0 ? "".concat(L.amount, " on ").concat(k) : "No active bets"}
                  </div>
                ) : (
                  <re.a className="GameWidget-Button" variant="success">
                    <m background={I} path={"/bet/".concat(i._id)}>
                      Place a Bet
                    </m>
                  </re.a>
                )}
              </oe.a>
            ));
        } else
          C = (
            <a href="/login">
              <re.a className="GameWidget-Button" variant="success">
                Login to Play
              </re.a>
            </a>
          );
        var D = null,
          Q = null;
        if (d.started) {
          var M = u[i._id],
            W = ((null === M || void 0 === M ? void 0 : M.length) || 0) > 0 ? M[0] : void 0,
            j = void 0 !== W ? fe(W.odds, W.amount) : 0;
          (D =
            void 0 !== W && W.entityId === i.homeTeam ? (
              <div className="GameWidget-ScoreBet">
                <div className="GameWidget-ScoreBet-Bet">
                  <ie.f />
                  <div className="GameWidget-ScoreBet-Amount">{W.amount}</div>
                </div>
                <div className="GameWidget-ScoreBet-Winnings">
                  <div className="GameWidget-ScoreBet-Triangle" />
                  {j}
                </div>
              </div>
            ) : null),
            (Q =
              void 0 !== W && W.entityId === i.awayTeam ? (
                <div className="GameWidget-ScoreBet">
                  <div className="GameWidget-ScoreBet-Bet">
                    <ie.f />
                    <div className="GameWidget-ScoreBet-Amount">{W.amount}</div>
                  </div>
                  <div className="GameWidget-ScoreBet-Winnings">
                    <div className="GameWidget-ScoreBet-Triangle" />
                    {j}
                  </div>
                </div>
              ) : null);
        }
        var x,
          U = null;
        if (d.complete) {
          var Y = u[i._id],
            P = ((null === Y || void 0 === Y ? void 0 : Y.length) || 0) > 0 ? Y[0] : void 0,
            F = g() === i.homeTeam ? i.homeOdds - i.awayOdds : i.awayOdds - i.homeOdds;
          U = (
            <div className="GameWidget-Outcome">
              <div className="GameWidget-Outcome-Blurb">
                The{" "}
                {(x = F) > 0.25
                  ? "heavily favored"
                  : x > 0
                  ? "favored"
                  : x < -0.25
                  ? "heavy underdog"
                  : x < 0
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
                  <span className="GameWidget-Outcome-Callout" style={{ color: T(y()) }}>
                    {b(y())}
                  </span>
                   were <span className="GameWidget-Outcome-Callout"> shamed!</span>
                </div>
              ) : null}
              {void 0 !== P ? (
                <div className="GameWidget-Outcome-Blurb">
                  You bet{" "}
                  <span className="GameWidget-Outcome-Callout">
                    <ie.f />
                     {P.amount}
                  </span>
                   on the  
                  <span className="GameWidget-Outcome-Callout" style={{ color: T(P.entityId) }}>
                    {b(P.entityId)}
                  </span>
                   and{" "}
                  {g() == P.entityId ? (
                    <span>
                      won{" "}
                      <span className="GameWidget-Outcome-Callout">
                        <ie.f />
                         {fe(P.odds, P.amount)}
                      </span>
                      .
                    </span>
                  ) : (
                    <span>lost.</span>
                  )}
                </div>
              ) : null}
              {void 0 !== i.outcomes && i.outcomes.length > 0
                ? i.outcomes.map(function (e, t) {
                    return (
                      <div key={t} className="GameWidget-Outcome-Blurb">
                        {e}
                      </div>
                    );
                  })
                : null}
            </div>
          );
        } else
          U = d.started ? (
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
                          style={{ background: te(i.awayTeamColor, 0.5) }}
                        >
                          <div className="GameWidget-PlayerLineName">{i.awayPitcherName}</div>
                        </div>
                      </div>
                      <div className="GameWidget-PlayerLine">
                        <div
                          className="GameWidget-Upcoming-Pitchers-Wrapper"
                          style={{ background: te(i.homeTeamColor, 0.5) }}
                        >
                          <div className="GameWidget-PlayerLineName">{i.homePitcherName}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="GameWidget-Upcoming-Body">
                    <ge.b className="GameWidget-Upcoming-Icon" />
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
                          }
                          return "";
                        })(d.weather)}
                      </span>
                      <ye type={d.weather} />
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
                <div className="GameWidget-Upcoming-BetButtons">{C}</div>
              </div>
            </r.a.Fragment>
          );
        var H = null;
        d.started &&
          (H = (
            <div className="GameWidget-Log">
              <div className="GameWidget-Log-Header">Game Log</div>
              <div className="GameWidget-Log-Content">{i.lastUpdate}</div>
              {C}
            </div>
          ));
        var K = d.started ? "GameWidget-Full-Live" : "GameWidget-Full-Upcoming",
          q = i.isPostseason
            ? "Game ".concat(i.seriesIndex, " - Best of ").concat(i.seriesLength)
            : "Game ".concat(i.seriesIndex, " of ").concat(i.seriesLength);
        return (
          <div className={"GameWidget ".concat(d.complete ? "IsComplete" : "")}>
            <div className={K}>
              <div className="GameWidget-Header-Wrapper">
                <div className="GameWidget-Header">
                  {h}
                  <div className="GameWidget-ScoreLabel GameWidget-ScoreLabel--Series">{q}</div>
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
                            {Q}
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
                    <div className="GameWidget-ScoreNumber" style={a}>
                      {l.homeTeamScore}
                    </div>
                  </m>
                </div>
              </div>
              {U}
              {H}
            </div>
          </div>
        );
      }
      function Oe(e) {
        var t = (function (e, t) {
          var a = void 0;
          if (void 0 !== t)
            for (var n = 0; n < t.length; n++)
              if (t[n].homeTeam === e.homeTeam) {
                a = t[n];
                break;
              }
          return {
            homeTeamName: e.homeTeamNickname,
            homeTeamWins: void 0 === a ? "" : a.homeWins,
            homeTeamLosses: void 0 === a ? "" : a.awayWins,
            homeTeamScore: Ne(e).toString(),
            awayTeamName: e.awayTeamNickname,
            awayTeamWins: void 0 === a ? "" : a.awayWins,
            awayTeamLosses: void 0 === a ? "" : a.homeWins,
            awayTeamScore: Se(e).toString(),
          };
        })(e.data, e.matchups);
        return <Be data={e.data} metaInfo={t} />;
      }
      a(137);
      var Ie = a(37),
        Ce = a(82),
        ke = a(81),
        Re =
          (a(138),
          function (e) {
            var t,
              a = Object(n.useRef)(null),
              o = e.content,
              i = e.children,
              s = e.url,
              c = e.className,
              m = e.buttonClassname,
              d = Object(n.useState)(!1),
              h = Object(l.a)(d, 2),
              E = h[0],
              p = h[1],
              A = function () {
                clearTimeout(t), p(!0);
              },
              f = function () {
                t = setTimeout(function () {
                  p(!1);
                }, 100);
              },
              v = (
                <ke.a target={a.current} show={E} placement="bottom">
                  {function (e) {
                    e.placement, e.scheduleUpdate, e.arrowProps, e.outOfBoundaries, e.show;
                    var t = Object(Ce.a)(e, ["placement", "scheduleUpdate", "arrowProps", "outOfBoundaries", "show"]);
                    return (
                      <div
                        {...Object.assign({}, t, {
                          style: Object(u.a)({}, t.style, { top: "12px" }),
                          className: "Overlay ".concat(c),
                          onMouseOver: A,
                          onMouseOut: f,
                        })}
                      >
                        <div className="Overlay-Arrow" />
                        {o}
                      </div>
                    );
                  }}
                </ke.a>
              );
            return s ? (
              <r.a.Fragment>
                <a href={s} ref={a} onMouseOver={A} onMouseOut={f} className={m}>
                  {i}
                </a>
                {v}
              </r.a.Fragment>
            ) : (
              <r.a.Fragment>
                <div ref={a} onMouseOver={A} onMouseOut={f} className={m}>
                  {i}
                </div>
                {v}
              </r.a.Fragment>
            );
          });
      a(139);
      function Ge() {
        var e = Object(n.useState)([]),
          t = Object(l.a)(e, 2),
          a = t[0],
          o = t[1],
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
              var t, a, n;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), T();
                    case 2:
                      if (((t = e.sent), (a = []), void 0 !== t)) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      for (n = 0; n < t.length; n++) a.push(t[n].msg);
                      o(a), m(!0);
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
          for (var E = 0, p = 0; p < a.length; p++) E += a[p].length;
          var A = E / 5;
          h +=
            A > 300
              ? " EventTicker-Group-Animating-300"
              : A > 240
              ? " EventTicker-Group-Animating-240"
              : A > 180
              ? " EventTicker-Group-Animating-180"
              : A > 120
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
                {a.map(function (e) {
                  return <div className="EventTicker-Item">{e}</div>;
                })}
              </div>
            </div>
          </div>
        );
      }
      var Le = function () {
          var e = Object(n.useContext)(J.context),
            t = e.user,
            a =
              (e.clearUser,
              Object(s.f)(),
              (
                <div className="CoinOverlay-Content">
                  <div className="CoinOverlay-Content-Body">Earn Coins by placing bets on upcoming games</div>
                </div>
              )),
            o = (
              <div className="CoinOverlay-Content">
                <div className="CoinOverlay-Content-Body">Buy Votes in the Shop to spend in the Offseason</div>
              </div>
            ),
            i = null;
          if (t.favoriteTeamInfo) {
            var l = String.fromCodePoint(Number(t.favoriteTeamInfo.emoji)),
              c = encodeURIComponent("".concat(t.favoriteTeamInfo.slogan || "", " ").concat(l, " #blaseball")),
              m = "http://twitter.com/intent/tweet?text=".concat(c, "&url=https%3A%2F%2Fblaseball.com");
            i = (
              <a
                target="_blank"
                href={m}
                style={{ background: t.favoriteTeamInfo.mainColor }}
                className="Navigation-FavoriteTeamEmoji"
              >
                {l}
              </a>
            );
          }
          return (
            <r.a.Fragment>
              <Re className="CoinOverlay" buttonClassname="Navigation-CurrencyButton" content={a} url="/upcoming">
                <ie.f />
                 {t.coins}
              </Re>
              {t.unlockedElection ? (
                <Re className="CoinOverlay" buttonClassname="Navigation-CurrencyButton" content={o} url="/shop">
                  <ie.e />
                   {t.votes}
                </Re>
              ) : null}
              {i}
              <a href="/auth/logout" className="Navigation-Button">
                Log Out
              </a>
            </r.a.Fragment>
          );
        },
        De = function () {
          return (
            <r.a.Fragment>
              <Me isModal={!0} path="/signup">
                Signup
              </Me>
              <Me isModal={!0} path="/login">
                Login
              </Me>
            </r.a.Fragment>
          );
        };
      function Qe(e) {
        var t = Object(n.useContext)(A.context),
          a = Object(n.useContext)(J.context).user,
          o = Object(n.useState)(!1),
          i = Object(l.a)(o, 2),
          s = i[0],
          c = i[1],
          m = [];
        m.push({ text: "League", path: "/", subpaths: ["/upcoming", "/standings"] }),
          a &&
            a.isSignedIn &&
            (m.push({ text: "Shop", path: "/shop", locked: !a.unlockedShop }),
            m.push({ text: "Election", path: "/offseason", locked: !a.unlockedElection }),
            t && t.sim && t.sim.openedBook && m.push({ text: "Book", path: "/thebook" }));
        var u = a.isFetching ? null : a.isSignedIn ? <Le /> : <De />;
        return (
          <header className="Navigation">
            <div className="Navigation-Bar">
              <div className="Navigation-Bar-Section">
                <h1 className={t && t.sim && t.sim.eraTitle ? "Navigation-Header-Era" : "Navigation-Header"}>
                  Blaseball
                  {t && t.sim && "" !== t.sim.eraTitle ? (
                    <div className="Navigation-Bar Navigation-Era">{t.sim.eraTitle}</div>
                  ) : null}
                  <div className="Navigation-Tag">BETA</div>
                </h1>
                <div className="Navigation-Follow">
                  <div className="Navigation-Follow-Inner">
                    <a className="Navigation-Follow-Icon" href="https://discord.gg/3uFgJhu" target="_blank">
                      <Ie.b />
                    </a>
                    <a className="Navigation-Follow-Icon" href="https://twitter.com/blaseballcomms" target="_blank">
                      <Ie.d />
                    </a>
                  </div>
                  <div className="Navigation-Follow-Triangle" />
                </div>
              </div>
              <div className="Navigation-Bar-Section Navigation-Bar-Section--Mobile">
                <div className={"Navigation-Bar-Menu ".concat(s ? "Navigation-Bar-Menu--IsOpen" : "")}>
                  <a
                    className="Navigation-Bar-Menu-Toggle"
                    onClick={function () {
                      return c(!s);
                    }}
                  >
                    My Account
                  </a>
                  <div className="Navigation-Bar-Menu-List">{u}</div>
                </div>
              </div>
            </div>
            {t && t.sim && t.sim.openedBook ? <Ge /> : null}
            <div className="Navigation-Bar">
              <div className="Navigation-Bar-Section">
                {m.map(function (e, t) {
                  return (
                    <Me key={t} path={e.path} subpaths={e.subpaths}>
                      {e.text} {e.locked ? <le.a /> : null}
                    </Me>
                  );
                })}
              </div>
              <div className="Navigation-Bar-Section Navigation-Bar-Section--Desktop">{u}</div>
            </div>
          </header>
        );
      }
      function Me(e) {
        var t = e.path,
          a = e.isModal,
          n = e.subpaths,
          o = Object(s.g)(),
          i = o.pathname,
          l = !("/login" === i || "/signup" === i),
          c =
            i === t ||
            void 0 !==
              (null === n || void 0 === n
                ? void 0
                : n.find(function (e) {
                    return e === i;
                  }));
        return (
          <m
            background={l && a && o}
            path={t}
            className={"Navigation-Button" + (c ? " Navigation-Button-Current" : "")}
          >
            {e.children}
          </m>
        );
      }
      function We() {
        Object(n.useContext)(A.context);
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
                      <Ie.b />
                    </a>
                    <a className="Navigation-Follow-Icon" href="https://twitter.com/blaseballcomms" target="_blank">
                      <Ie.d />
                    </a>
                  </div>
                  <div className="Navigation-Follow-Triangle" />
                </div>
              </div>
              <div className="Navigation-Bar-Section Navigation-Bar-Section--Mobile">
                <De />
              </div>
            </div>
            <div className="Navigation-Bar">
              <div className="Navigation-Bar-Section Navigation-Bar-Section--Desktop">
                <De />
              </div>
            </div>
          </header>
        );
      }
      function je() {
        Object(n.useContext)(A.context);
        return (
          <header className="Navigation">
            <h1 className="Navigation-Header">
              Blaseball<div className="Navigation-Tag">BETA</div>
            </h1>
          </header>
        );
      }
      a(140);
      function xe() {
        return (
          <div className="Advertisement-SiteHeader">
            This season is brought to you by{" "}
            <a
              className="Advertisement-SiteHeader-Callout"
              href="https://yesplz.coffee/?promo=BLASEBALL&utm_source=blaseball&utm_medium=referral&utm_campaign=blaseballweb"
            >
              Yes Plz Coffee
            </a>
          </div>
        );
      }
      a(141);
      var Ue,
        Ye = function (e) {
          var t = e.dateString,
            a = Object(n.useState)(),
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(
              function () {
                var e,
                  a = function () {
                    var e = (new Date(Date.parse(t)).getTime() - new Date().getTime()) / 1e3,
                      a = Math.max(Math.floor(e / 3600), 0);
                    e -= 3600 * a;
                    var n = Math.max(Math.floor(e / 60), 0);
                    e -= 60 * n;
                    var r = Math.max(Math.floor(e), 0);
                    s({ hours: a, minutes: n, seconds: r });
                  };
                return (
                  a(),
                  (e = setInterval(a, 1e3)),
                  function () {
                    clearInterval(e);
                  }
                );
              },
              [t]
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
      })(Ue || (Ue = {}));
      var Pe,
        Je = function (e) {
          var t,
            a = e.path,
            o = Object(n.useContext)(A.context),
            i = Object(n.useContext)(J.context).user,
            l = Object(n.useContext)(V.context),
            s = void 0 === o.schedule;
          function c() {
            return "/upcoming" === a ? Ue.Upcoming : Ue.Live;
          }
          if (!o.sim) return null;
          var m = c() === Ue.Upcoming ? o.tomorrowSchedule : o.schedule,
            u = c() === Ue.Live ? o.sim.day : o.sim.day + 1,
            d =
              void 0 === m ? null : (
                <ul>
                  {null ===
                    (t = (function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                      if (!i || !l || void 0 === e) return e;
                      for (var t = 0; t < e.length; t++) {
                        var a = e[t],
                          n = l[a._id];
                        void 0 !== n && (e.splice(t, 1), e.splice(0, 0, a));
                      }
                      for (var r = 0; r < e.length; r++) {
                        var o = e[r];
                        (i.favoriteTeam != o.homeTeam && i.favoriteTeam != o.awayTeam) ||
                          (e.splice(r, 1), e.splice(0, 0, o));
                      }
                      return e;
                    })(m)) || void 0 === t
                    ? void 0
                    : t.map(function (e, t) {
                        return <we key={t} data={e} />;
                      })}
                </ul>
              ),
            h =
              void 0 === m || (void 0 !== m && m.length <= 0) ? (
                <div className="DailySchedule-Body">There are no season games scheduled for Day {u + 1}.</div>
              ) : (
                <div>
                  <div className="DailySchedule-Countdown">
                    {c() === Ue.Upcoming ? <Ye dateString={ae().toString()} /> : null}
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
              <xe />
              <div className="DailySchedule-Nav">
                <Me path="/">Watch Live</Me>
                <Me path="/upcoming">Place Bets</Me>
                <Me path="/standings">Standings</Me>
              </div>
              {s ? <Ae /> : h}
            </div>
          );
        };
      !(function (e) {
        (e[(e.Live = 0)] = "Live"), (e[(e.Upcoming = 1)] = "Upcoming");
      })(Pe || (Pe = {}));
      var Fe = function (e) {
          var t,
            a,
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
            f = Object(n.useContext)(A.context),
            v = Object(n.useContext)(J.context).user,
            g = Object(n.useContext)(V.context),
            y = void 0 === f.schedule;
          if (void 0 === f.postseason.playoffs) return null;
          function b() {
            return "/upcoming" === p ? Pe.Upcoming : Pe.Live;
          }
          function T() {
            var e, t;
            return b() === Pe.Live
              ? (null === (e = f.sim) || void 0 === e ? void 0 : e.day) || -1
              : (null === (t = f.sim) || void 0 === t ? void 0 : t.day) || 0;
          }
          if (!f.sim) return null;
          var N = b() === Pe.Live ? f.schedule : f.tomorrowSchedule,
            S =
              (b() === Pe.Live ? f.sim.day : f.sim.day,
              b() === Pe.Live ? f.postseason.matchups : f.postseason.tomorrowMatchups),
            w =
              void 0 === N || (void 0 !== N && N.length <= 0) ? null : (
                <ul>
                  {null ===
                    (t = (function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                      if (!v || !g || void 0 === e) return e;
                      for (var t = 0; t < e.length; t++) {
                        var a = e[t],
                          n = g[a._id];
                        void 0 !== n && (e.splice(t, 1), e.splice(0, 0, a));
                      }
                      for (var r = 0; r < e.length; r++) {
                        var o = e[r];
                        (v.favoriteTeam != o.homeTeam && v.favoriteTeam != o.awayTeam) ||
                          (e.splice(r, 1), e.splice(0, 0, o));
                      }
                      return e;
                    })(N)) || void 0 === t
                    ? void 0
                    : t.map(function (e, t) {
                        return <Oe key={t} data={e} matchups={S} />;
                      })}
                </ul>
              ),
            B =
              void 0 !==
              (null === f ||
              void 0 === f ||
              null === (a = f.postseason) ||
              void 0 === a ||
              null === (o = a.round) ||
              void 0 === o
                ? void 0
                : o.roundNumber)
                ? null === f ||
                  void 0 === f ||
                  null === (i = f.postseason) ||
                  void 0 === i ||
                  null === (l = i.round) ||
                  void 0 === l
                  ? void 0
                  : l.roundNumber
                : -1,
            O =
              void 0 !==
              (null === f ||
              void 0 === f ||
              null === (s = f.postseason) ||
              void 0 === s ||
              null === (c = s.tomorrowRound) ||
              void 0 === c
                ? void 0
                : c.roundNumber)
                ? null === f ||
                  void 0 === f ||
                  null === (m = f.postseason) ||
                  void 0 === m ||
                  null === (u = m.tomorrowRound) ||
                  void 0 === u
                  ? void 0
                  : u.roundNumber
                : -1,
            I = (b() === Pe.Live ? B : O) + 1;
          return (
            <div>
              <div className="DailySchedule-Header">
                <div className="DailySchedule-Header-Group">
                  {(null === (d = f.postseason.round) || void 0 === d ? void 0 : d.special) ? (
                    <r.a.Fragment>{null === (h = f.postseason.round) || void 0 === h ? void 0 : h.name} </r.a.Fragment>
                  ) : (
                    "Postseason Round"
                  )}
                </div>
                {(null === (E = f.postseason.round) || void 0 === E ? void 0 : E.special) ? null : (
                  <span className="DailySchedule-Number">{I}</span>
                )}
                Day<span className="DailySchedule-Number">{T() + 1}</span>
              </div>
              <xe />
              <div className="DailySchedule-Nav">
                <Me path="/">Watch Live</Me>
                <Me path="/upcoming">Place Bets</Me>
                <Me path="/standings">Standings</Me>
              </div>
              {y ? (
                <Ae />
              ) : (
                <div>
                  {null !== w ? (
                    <div>
                      <div className="DailySchedule-Countdown">
                        {b() === Pe.Upcoming ? <Ye dateString={ae().toString()} /> : null}
                      </div>
                      <ul>{w}</ul>
                    </div>
                  ) : (
                    <div className="DailySchedule-Body">
                      There are no postseason games yet scheduled for Day {T() + 1}. Check back when the current batch
                      of games finish.
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        },
        He =
          (a(142), a(143), r.a.createContext({ leagues: [], subleagues: [], divisions: [], teams: [], players: [] })),
        Ve = function (e) {
          var t = e.children,
            a = Object(n.useState)({ leagues: [], subleagues: [], divisions: [], teams: [], players: [] }),
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(function () {
              return (
                h.on("leagueDataUpdate", function (e) {
                  s(function (t) {
                    return Object(u.a)({}, t, {}, e);
                  });
                }),
                function () {
                  h.off("leagueDataUpdate");
                }
              );
            }, []),
            (<He.Provider value={i}>{t}</He.Provider>)
          );
        };
      Ve.context = He;
      var Ke = Ve;
      function qe() {
        var e = Object(n.useContext)(A.context);
        if (!e || !e.sim) return null;
        var t = void 0 !== e.sim.season ? e.sim.season : -1;
        return (
          <div>
            <div className="DailySchedule-Header">
              Season<span className="DailySchedule-Number">{t + 1}</span> Standings
            </div>
            <xe />
            <div className="DailySchedule-Nav">
              <Me path="/">Watch Live</Me>
              <Me path="/upcoming">Place Bets</Me>
              <Me path="/standings">Standings</Me>
            </div>
            <ze />
          </div>
        );
      }
      function ze() {
        var e = Object(n.useContext)(A.context),
          t = Object(n.useContext)(Ke.context);
        if (!e || !e.sim) return null;
        if (!t || !t.leagues) return null;
        var a = t.leagues.find(function (t) {
          var a;
          return t._id === (null === (a = e.season) || void 0 === a ? void 0 : a.league);
        });
        if (void 0 === a) return null;
        var o = [];
        if (t)
          for (var i = 0; i < a.subleagues.length; i++)
            o.push(<Ze key={i} subleague={a.subleagues[i]} standings={e.standings} />);
        return void 0 !== a ? (
          <div className="Standings-League">
            {a.name}
            <ul className="Standings-Subleague-Container">{o}</ul>
          </div>
        ) : (
          <Ae />
        );
      }
      function Ze(e) {
        var t = Object(n.useContext)(Ke.context).subleagues.find(function (t) {
          return t._id === e.subleague;
        });
        if (void 0 === t) return null;
        for (var a = [], o = 0; o < t.divisions.length; o++)
          a.push(<Xe key={o} division={t.divisions[o]} standings={e.standings} />);
        return (
          <div className="Standings-Subleague">
            <div className="Standings-Subleague-Header">{t.name}</div>
            <ul className="Standings-Division-Container">{a}</ul>
          </div>
        );
      }
      function Xe(e) {
        var t = Object(n.useContext)(Ke.context).divisions.find(function (t) {
          return t._id === e.division;
        });
        if (void 0 === t) return null;
        for (var a = [], o = [], i = [], l = [], s = 0; s < t.teams.length; s++) {
          for (var c = _e(t.teams[s], e.standings), m = !1, u = 0; u < o.length; u++) {
            var d = i[u];
            if (c[0] > d) {
              o.splice(u, 0, t.teams[s]), i.splice(u, 0, c[0]), l.splice(u, 0, c[1]), (m = !0);
              break;
            }
          }
          m || (o.push(t.teams[s]), i.push(c[0]), l.push(c[1]));
        }
        for (var h = 0; h < o.length; h++) a.push(<$e key={h} team={o[h]} wins={i[h]} losses={l[h]} />);
        return (
          <div className="Standings-Division">
            <div className="Standings-Division-Header">{e.division.name}</div>
            <ul className="Standings-Team-Container">{a}</ul>
          </div>
        );
      }
      function _e(e, t) {
        var a = 0,
          n = 0;
        if (void 0 !== t) {
          for (var r in t.wins)
            if (r === e) {
              a = t.wins[r];
              break;
            }
          for (var o in t.losses)
            if (o === e) {
              n = t.losses[o];
              break;
            }
        }
        return [a, n];
      }
      function $e(e) {
        var t = Object(s.g)(),
          a = Object(n.useContext)(Ke.context).teams.find(function (t) {
            return t._id === e.team;
          });
        return void 0 === a ? null : (
          <m background={t} path={"/team/".concat(a._id)} className="Standings-Team">
            <div className="Standings-Team-Name-Container">
              <div className="Standings-Team-Color" style={{ background: a.mainColor }}>
                <div className="Standings-Team-Emoji">{String.fromCodePoint(Number(a.emoji))}</div>
              </div>
              <div className="Standings-Team-Name">{a.fullName}</div>
            </div>
            <div className="Standings-Team-Standings" style={{ color: a.mainColor }}>
              {e.wins}-{e.losses}
            </div>
          </m>
        );
      }
      var et = function (e) {
        var t = e.sim,
          a = Object(n.useState)(),
          o = Object(l.a)(a, 2),
          i = o[0],
          s = o[1],
          c = (function () {
            var e = Object(g.a)(
              v.a.mark(function e() {
                var a, n, r, o, i;
                return v.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (void 0 === t) {
                            e.next = 22;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            (a = ""),
                            (e.next = 5),
                            fetch("".concat(y, "/database/playoffs?number=").concat(t.season))
                          );
                        case 5:
                          return (n = e.sent), (e.next = 8), n.json();
                        case 8:
                          return (
                            (r = e.sent),
                            (a = r.winner),
                            (e.next = 12),
                            fetch("".concat(y, "/database/team?id=").concat(a))
                          );
                        case 12:
                          return (o = e.sent), (e.next = 15), o.json();
                        case 15:
                          (i = e.sent), s(i), (e.next = 22);
                          break;
                        case 19:
                          (e.prev = 19), (e.t0 = e.catch(1)), console.log(e.t0);
                        case 22:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 19]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        if (
          (Object(n.useEffect)(
            function () {
              c();
            },
            [t]
          ),
          void 0 === t)
        )
          return null;
        if (void 0 === i || "" === i) return null;
        var m = void 0 !== i ? i.mainColor : "#ffffff",
          u = void 0 !== i ? i.fullName : "",
          d =
            void 0 !== i ? (
              <div className="PlayoffsEnd-Body">
                Your Champions are the{" "}
                <span className="PlayoffsEnd-Callout" style={{ color: m }}>
                  {u}!
                </span>
              </div>
            ) : null;
        return (
          <div>
            <div className="PlayoffsEnd">
              <div className="PlayoffsEnd-Header">Season {t.season + 1} is over.</div>
              {d}
              <div className="PlayoffsEnd-End">
                <a href="/offseason">The Election ends soon! Go cast your Votes.</a>
              </div>
              <div className="PlayoffsEnd-End">The next season starts in...</div>
              <Ye dateString={t.nextSeasonStart} />
            </div>
            <ze />
          </div>
        );
      };
      a(144);
      function tt() {
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
      function at() {
        var e = Object(s.g)();
        return (
          <div className="About-All">
            <div className="About-Header">Welcome to Blaseball.</div>
            <m background={e} path="/signup" className="About-Ticket">
              <ie.e />
            </m>
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
            <a href="https://twitter.com/blaseballcomms" target="_blank" className="About-Quote">
              “Very strange”
            </a>
            <a href="https://twitter.com/blaseballcomms" target="_blank" className="About-QuoteAuthor">
              – A lot of people on Twitter
            </a>
            <m background={e} path="/signup">
              <re.a className="About-Button" variant="success">
                <div className="About-Button-Text">Play Now</div>
              </re.a>
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
      a(145);
      function nt(e) {
        return void 0 !== e.element ? e.element : <div className="Stubs-Header">{e.text}</div>;
      }
      a(146);
      var rt = a(54);
      function ot(e) {
        for (var t = e / 0.2, a = Math.round(2 * t) / 2, n = Math.floor(a), o = Math.ceil(a), i = [], l = 0; l < n; l++)
          i.push(<rt.a />);
        return n !== o && i.push(<rt.b />), (<span>{i}</span>);
      }
      var it = function (e) {
        var t = Object(s.h)().nickname,
          a = Object(n.useContext)(A.context),
          o = Object(n.useContext)(Ke.context),
          i = Object(n.useState)({ lineup: [], rotation: [], bullpen: [], bench: [] }),
          c = Object(l.a)(i, 2),
          m = c[0],
          u = c[1],
          d = o.teams.find(function (e) {
            return e._id === t;
          });
        Object(n.useEffect)(function () {
          h();
        }, []);
        var h = (function () {
          var e = Object(g.a)(
            v.a.mark(function e() {
              var t, a, n, r, o, i, l, s, c, m;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (void 0 !== d) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      for (t = [], a = 0; a < d.lineup.length; a++) t.push(d.lineup[a]);
                      for (n = 0; n < d.rotation.length; n++) t.push(d.rotation[n]);
                      return (e.next = 7), M(t);
                    case 7:
                      for (
                        r = e.sent,
                          o = [],
                          i = function (e) {
                            o.push(
                              r.find(function (t) {
                                return d.lineup[e] === t._id;
                              })
                            );
                          },
                          l = 0;
                        l < d.lineup.length;
                        l++
                      )
                        i(l);
                      for (
                        s = [],
                          c = function (e) {
                            s.push(
                              r.find(function (t) {
                                return d.rotation[e] === t._id;
                              })
                            );
                          },
                          m = 0;
                        m < d.rotation.length;
                        m++
                      )
                        c(m);
                      u({ lineup: o, rotation: s, bench: [], bullpen: [] });
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
        if (void 0 === o || void 0 === o.teams) return null;
        if (void 0 === d) return null;
        var E,
          p = d.emoji;
        if (void 0 === m) return <Ae />;
        var f = m.lineup.map(function (e) {
            return (
              <li className="Player-Line">
                <div className="Player-Header">{null === e || void 0 === e ? void 0 : e.name}</div>
                <div className="Player-Ratings">
                  {ot(
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
                  )}
                </div>
              </li>
            );
          }),
          y = m.rotation.map(function (e) {
            return (
              <li className="Player-Line">
                <div className="Player-Header">{null === e || void 0 === e ? void 0 : e.name}</div>
                <div className="Player-Ratings">
                  {ot(
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
                  )}
                </div>
              </li>
            );
          }),
          b = (function (e, t) {
            var a = 0,
              n = 0;
            if (void 0 !== t) {
              for (var r in t.wins)
                if (r === e._id) {
                  a = t.wins[r];
                  break;
                }
              for (var o in t.losses)
                if (o === e._id) {
                  n = t.losses[o];
                  break;
                }
            }
            return [a, n];
          })(d._id, null === a || void 0 === a ? void 0 : a.standings),
          T = b[1],
          N = b[0];
        return (
          (E = (
            <r.a.Fragment>
              <div className="Team-Info">
                <div className="Team-Header">
                  <div style={{ backgroundColor: d.mainColor }} className="Team-Logo">
                    {String.fromCodePoint(Number(p))}
                  </div>
                  <div className="Team-Name-Wrapper">
                    <header className="Team-Name">{d.fullName}</header>
                    <div className="Team-Slogan">
                      <i>"{d.slogan}"</i>
                    </div>
                    <div className="Team-Standing">{"( ".concat(N, " - ").concat(T, " )")}</div>
                  </div>
                </div>
              </div>
              <div className="Team-Content">
                <div className="Team-Section">
                  <div className="Team-Subheader">Lineup</div>
                  <ul>{f}</ul>
                </div>
                <div className="Team-Section">
                  <div className="Team-Subheader">Rotation</div>
                  <ul>{y}</ul>
                </div>
              </div>
            </r.a.Fragment>
          )),
          (<me {...Object.assign({}, e, { className: "Team" })}>{E}</me>)
        );
      };
      a(147);
      function lt() {
        var e,
          t = Object(ue.useToasts)().addToast,
          a = Object(n.useState)(),
          o = Object(l.a)(a, 2),
          i = o[0],
          s = o[1],
          c = Object(n.useContext)(J.context),
          m = c.user,
          u = c.refreshUser;
        function d(e) {
          return h.apply(this, arguments);
        }
        function h() {
          return (h = Object(g.a)(
            v.a.mark(function e(a) {
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(a.amount <= m.coins || 0 === a.amount)) {
                        e.next = 6;
                        break;
                      }
                      return (
                        E(a),
                        (e.next = 4),
                        b("/api/updateCoins", JSON.stringify({ amount: -a.amount }))
                          .catch(function (e) {
                            t(e, { appearance: "error" });
                          })
                          .then(
                            Object(g.a)(
                              v.a.mark(function e() {
                                return v.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), p(a);
                                      case 2:
                                        t(a.toast, { appearance: "success" });
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )
                          )
                          .then(function () {
                            a.handleComplete();
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
                    case 4:
                      e.next = 7;
                      break;
                    case 6:
                      t("Insufficient coins!", { appearance: "error" });
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function E(e) {
          console.log("Buying ".concat(e.name, " ...")), s({ purchaseItem: e });
        }
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
                      return (e.next = 2), t.handleBuy();
                    case 2:
                      console.log("Bought ".concat(t.name, "."));
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function f(e) {
          return e.maxed ? "Maxed Out" : e.available ? (0 === e.amount ? "Get" : "Buy") : "Unavailable";
        }
        return (
          (e = m.unlockedShop
            ? (function (e) {
                var t = [];
                e.unlockedElection
                  ? t.push({
                      id: 0,
                      name: "Vote",
                      description:
                        "Each Vote can be spent in the Election to boost your team or bring important change to Blaseball.",
                      amount: 100,
                      toast: "Vote purchased. You now have ".concat(e.votes + 1),
                      available: !0,
                      icon: <ie.e />,
                      handleBuy: (function () {
                        var e = Object(g.a)(
                          v.a.mark(function e() {
                            return v.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), b("/api/increaseVotes");
                                  case 2:
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
                      handleComplete: function () {},
                    })
                  : t.push({
                      id: 0,
                      name: "Voting Rights",
                      description:
                        "Purchase access to the Election page, where you can participate in the league-wide voting.",
                      amount: 100,
                      available: !0,
                      toast: "Welcome, Voter! You have ".concat(e.votes, " Vote already from signing up."),
                      icon: <ie.e />,
                      handleBuy: (function () {
                        var e = Object(g.a)(
                          v.a.mark(function e() {
                            return v.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), b("/api/unlockElection");
                                  case 2:
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
                      handleComplete: function () {},
                    });
                t.push({
                  id: 5,
                  name: "Juiced",
                  description:
                    "Grab $5 buck off your first order with our sponsor Yes Plz and get a real-life pick me up.",
                  amount: 0,
                  toast: "Enjoy the coffee.",
                  icon: <ie.a />,
                  available: !0,
                  handleBuy: (function () {
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
                  handleComplete: function () {
                    window.open(
                      "https://yesplz.coffee/?promo=BLASEBALL&utm_source=blaseball&utm_medium=referral&utm_campaign=blaseballshop"
                    );
                  },
                });
                var a = he.maxBetTiers[e.maxBetTier],
                  n = he.maxBetTiers[e.maxBetTier + 1];
                if (void 0 !== n) {
                  var o = a.amount,
                    i = he.maxBetTiers[e.maxBetTier + 1].amount;
                  t.push({
                    id: 1,
                    name: "High Roller Snake Oil",
                    description: "This invigorating oil allows you to place larger wagers on each game. Your current limit is "
                      .concat(o, ", it would increase to ")
                      .concat(i, "."),
                    amount: n.price,
                    toast: "Max Bet is now ".concat(i, "!"),
                    available: !0,
                    handleBuy: (function () {
                      var e = Object(g.a)(
                        v.a.mark(function e() {
                          return v.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), b("/api/increaseMaxBet");
                                case 2:
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
                    handleComplete: function () {},
                  });
                } else {
                  var l = a.amount;
                  t.push({
                    id: 1,
                    name: "High Roller Snake Oil",
                    description: "This invigorating oil allows you to place larger wagers on each game. Your current limit is ".concat(
                      l,
                      ", you are maxed out."
                    ),
                    maxed: !0,
                    amount: 0,
                    handleBuy: (function () {
                      var e = Object(g.a)(
                        v.a.mark(function e() {
                          return v.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), b("/api/increaseMaxBet");
                                case 2:
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
                    handleComplete: function () {},
                  });
                }
                var s = he.teamWinCoinTiers[e.dailyCoinsTier],
                  c = he.teamWinCoinTiers[e.dailyCoinsTier + 1];
                void 0 !== c
                  ? t.push({
                      id: 2,
                      name: "Passive Income Potion",
                      description: "This potion will boost the coins you earn when your team wins. Your current income per win is "
                        .concat(s.amount, ", it would increase to ")
                        .concat(c.amount, "."),
                      amount: c.price,
                      toast: "Coins per win is now ".concat(c.amount),
                      available: !0,
                      handleBuy: (function () {
                        var e = Object(g.a)(
                          v.a.mark(function e() {
                            return v.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), b("/api/increaseDailyCoins");
                                  case 2:
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
                      handleComplete: function () {},
                    })
                  : t.push({
                      id: 2,
                      name: "Passive Income Potion",
                      description: "This potion will boost the coins you earn when your team wins. Your current income per win is ".concat(
                        s.amount,
                        ", you are maxed out."
                      ),
                      maxed: !0,
                      amount: 0,
                      handleBuy: (function () {
                        var e = Object(g.a)(
                          v.a.mark(function e() {
                            return v.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), b("/api/increaseDailyCoins");
                                  case 2:
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
                      handleComplete: function () {},
                    });
                var m = 5 + Math.random() * Math.random() * 20,
                  u = Math.round(m);
                t.push({
                  id: 4,
                  name: "Beg",
                  description:
                    "If you have no coins, you may beg the Blaseball Gods to grant you more, so that you may continue gambling.",
                  amount: 0,
                  toast: "You find ".concat(u, " coins in your pocket."),
                  available: 0 === e.coins,
                  handleBuy: (function () {
                    var e = Object(g.a)(
                      v.a.mark(function e() {
                        return v.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), b("/api/logBeg");
                              case 2:
                                return (e.next = 4), b("/api/updateCoins", JSON.stringify({ amount: u }));
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
                  })(),
                  handleComplete: function () {},
                }),
                  e.favoriteTeamInfo &&
                    t.push({
                      id: 3,
                      name: "Fair Weather Flute",
                      description:
                        "Plays a tune that allows you to change your favorite team. Your former team will be disappointed, but understand.",
                      amount: 2e3,
                      toast: "You abandon the ".concat(e.favoriteTeamInfo.nickname, "."),
                      available: !0,
                      handleBuy: (function () {
                        var e = Object(g.a)(
                          v.a.mark(function e() {
                            return v.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), b("/api/updateFavoriteTeam");
                                  case 2:
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
                      handleComplete: function () {},
                    });
                return t;
              })(m)
            : (function (e) {
                var t = [];
                return (
                  t.push({
                    id: 10,
                    name: "Membership Card",
                    description: "Grants access to the entire shop.",
                    amount: 20,
                    toast: "Welcome, Shop Member!",
                    available: !0,
                    handleBuy: (function () {
                      var e = Object(g.a)(
                        v.a.mark(function e() {
                          return v.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), b("/api/unlockShop");
                                case 2:
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
                    handleComplete: function () {},
                  }),
                  t
                );
              })()),
          (
            <div className="Shop">
              <div className="Shop-Header">Shop</div>
              <div className="Shop-Description">
                Purchase items to enhance your Blaseball experience. New items may appear each week, so keep checking
                in.
              </div>
              <div className="Shop-Grid">
                {e.map(function (e, t) {
                  return (
                    <div className="Shop-Item" key={t}>
                      <div className="Shop-Item-Header">
                        {e.name}
                        <span className="Shop-Item-Icon">{e.icon}</span>
                      </div>
                      <div className="Shop-Item-Body">{e.description}</div>
                      <div className="Shop-Item-Checkout">
                        <ie.f className="Shop-Item-Coins" />
                        <div className="Shop-Item-Amount">
                          {(function (e) {
                            return e.maxed ? "N/A" : 0 === e.amount ? "Free" : e.amount.toString();
                          })(e)}
                        </div>
                        <div className="Shop-Item-ButtonContainer">
                          {i && i.purchaseItem && i.purchaseItem.id === e.id ? (
                            <pe />
                          ) : (
                            (function (e) {
                              return !e.available || e.maxed ? (
                                <re.a
                                  className="Shop-Item-Button"
                                  type="submit"
                                  variant="secondary"
                                  disabled={!0}
                                  onClick={function () {
                                    d(e);
                                  }}
                                >
                                  {f(e)}
                                </re.a>
                              ) : (
                                <re.a
                                  className="Shop-Item-Button"
                                  type="submit"
                                  variant="success"
                                  onClick={function () {
                                    d(e);
                                  }}
                                >
                                  {f(e)}
                                </re.a>
                              );
                            })(e)
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        );
      }
      a(148);
      var st = function (e) {
          var t = Object(n.useContext)(J.context).refreshUser,
            a = Object(n.useState)([]),
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1],
            c = Object(n.useState)(),
            m = Object(l.a)(c, 2),
            u = m[0],
            d = m[1];
          function h() {
            return (h = Object(g.a)(
              v.a.mark(function e() {
                var t;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), G();
                      case 2:
                        (t = e.sent), s(t);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          Object(n.useEffect)(function () {
            !(function () {
              h.apply(this, arguments);
            })();
          }, []);
          var E = (function () {
            var a = Object(g.a)(
              v.a.mark(function a() {
                return v.a.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (a.next = 2), b("/api/updateFavoriteTeam", JSON.stringify({ teamId: u }));
                      case 2:
                        e.dismiss(), t();
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            );
            return function () {
              return a.apply(this, arguments);
            };
          })();
          return (
            <me {...Object.assign({}, e, { className: "Welcome" })}>
              <div className="Welcome-Header">Welcome to Blaseball</div>
              <div className="Welcome-Subheader">To begin, pick your favorite team</div>
              <div className="Welcome-Teams-Wrapper">
                <div className="Welcome-Teams">
                  {i
                    .sort(function (e, t) {
                      var a = e.nickname.toUpperCase(),
                        n = t.nickname.toUpperCase();
                      return a < n ? -1 : a > n ? 1 : 0;
                    })
                    .map(function (e, t) {
                      var a = u === e._id;
                      return (
                        <div
                          onClick={function () {
                            return d(e._id);
                          }}
                          key={t}
                          className={"Welcome-Team" + (a ? " Welcome-Team--Selected" : "")}
                        >
                          <div className="TeamLogo" style={{ background: e.mainColor }}>
                            {String.fromCodePoint(e.emoji)}
                          </div>
                          <div className="Welcome-Team-Name-Wrapper">
                            <div className="Welcome-Team-Location">{e.location}</div>
                            <div className="Welcome-Team-Name">{e.nickname}</div>
                          </div>
                          <div className="Welcome-Team-Overlay">
                            <Ie.a />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="Welcome-Message"> </div>
              <div className="Welcome-Submit-Wrapper">
                <button onClick={E} disabled={!u} className={"Welcome-Submit" + (u ? " Welcome-Submit--Ready" : "")}>
                  Submit
                </button>
              </div>
            </me>
          );
        },
        ct = function (e) {
          var t = Object(n.useContext)(J.context).user,
            a = Object(n.useState)(!1),
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(function () {
              t.isFetching || (void 0 !== t.favoriteTeam && null !== t.favoriteTeam) ? s(!1) : s(!0);
            }, []),
            t && t.isSignedIn && i ? (
              <st
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
        mt =
          (a(149),
          function (e) {
            var t = Object(n.useContext)(J.context).initUser,
              a = Object(s.f)(),
              o = Object(ue.useToasts)().addToast,
              i = Object(s.g)(),
              l = i.state && i.state.background ? i.state.background.pathname : "",
              c = e.isModal,
              m = e.isLogin,
              u = Object(n.useRef)(null),
              d = Object(n.useRef)(null),
              h = Object(s.h)().code;
            return (
              <div className={"".concat(c ? "" : "Auth-SignupWrapper")}>
                {!c && <at />}
                <me {...Object.assign({}, e, { className: "Auth" })}>
                  <header className="Auth-Header">{m ? "Login to Blaseball" : "Signup for Blaseball"}</header>
                  <form
                    onSubmit={function (e) {
                      e.preventDefault();
                      var n = { username: u.current.value, password: d.current.value, code: h, isLogin: m };
                      b("/auth/local", JSON.stringify(n)).then(function (e) {
                        e.ok && e.status && 200 === e.status
                          ? (m || o("Account Created", { appearance: "success" }), t(), a.push("/"))
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
                      <le.b className="Auth-SocialAuth-Icon" />
                    </div>
                    Continue with Apple
                  </a>
                  <a className="Auth-SocialAuth" href={"auth/facebook?redirectUrl=".concat(l)}>
                    <div className="Auth-SocialAuth-Icon-Container">
                      <Ie.c />
                    </div>{" "}
                    Continue with Facebook
                  </a>
                  <a className="Auth-SocialAuth" href={"auth/google?redirectUrl=".concat(l)}>
                    <div className="Auth-SocialAuth-Icon-Container">
                      <le.c className="Auth-SocialAuth-Icon" />
                    </div>
                    Continue with Google
                  </a>
                  <a className="Auth-CTA" href={m ? "/signup" : "/login"}>
                    {m ? "Not on Blaseball yet? Signup" : "Already a member? Log in"}
                  </a>
                </me>
              </div>
            );
          }),
        ut = (a(150), r.a.createContext({ bonuses: [], decrees: [], decreesToPass: 0 })),
        dt = function (e) {
          var t = e.children,
            a = Object(n.useState)({ bonuses: [], decrees: [], decreesToPass: 0 }),
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1];
          function c() {
            return m.apply(this, arguments);
          }
          function m() {
            return (m = Object(g.a)(
              v.a.mark(function e() {
                var t;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), S();
                      case 2:
                        (t = e.sent), s(t);
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
            (<ut.Provider value={i}>{t}</ut.Provider>)
          );
        };
      dt.context = ut;
      var ht,
        Et = dt;
      a(151);
      !(function (e) {
        (e[(e.DECREE = 0)] = "DECREE"), (e[(e.BONUS = 1)] = "BONUS");
      })(ht || (ht = {}));
      var pt = function (e) {
          var t = Object(ue.useToasts)().addToast,
            a = e.entityId,
            o = e.data,
            i = e.onSubmit,
            s = Object(n.useState)(!1),
            c = Object(l.a)(s, 2),
            m = c[0],
            u = c[1];
          return !0 === m ? (
            <Ae />
          ) : (
            <re.a
              onClick={function () {
                u(!0);
                var e = { entityId: a, voteType: ht.BONUS, data: o };
                b("/api/vote", JSON.stringify(e))
                  .then(function (e) {
                    e.status && 200 === e.status
                      ? (t("Vote Placed", { appearance: "success" }), i())
                      : (t("Error", { appearance: "error" }), console.log(e));
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
              disabled={!a}
            >
              Submit Blessing Vote
            </re.a>
          );
        },
        At = function () {
          return (
            <a href="/login">
              <re.a className="Blessings-Submit-Button">Login to Vote</re.a>
            </a>
          );
        },
        ft = function () {
          return (
            <a href="/welcome">
              <re.a className="Blessings-Submit-Button">Pick a Favorite Team to Vote</re.a>
            </a>
          );
        },
        vt = function () {
          return (
            <a href="/shop">
              <re.a className="Blessings-Submit-Button">Buy Another Vote</re.a>
            </a>
          );
        },
        gt = function (e) {
          var t = e.isActive;
          return <button className="Blessings-Option-Button">Select{t ? "ed" : ""}</button>;
        },
        yt = function (e) {
          var t = e.title,
            a = e.description,
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
              <div className="Blessings-Option-Header">{t}</div>
              <div className="Blessings-Option-Description">{a}</div>
              <gt isActive={o} />
            </div>
          );
        },
        bt = function () {
          var e = Object(n.useContext)(Et.context),
            t = Object(n.useContext)(J.context),
            a = t.user,
            o = t.refreshUser,
            i = Object(n.useState)(),
            s = Object(l.a)(i, 2),
            c = s[0],
            m = s[1],
            u = <At />;
          if (
            (a.isFetching || !a.isSignedIn || a.favoriteTeam || (u = <ft />),
            a.isFetching || !a.isSignedIn || a.votes || (u = <vt />),
            !a.isFetching && a.isSignedIn && a.favoriteTeam && a.votes)
          ) {
            var d = { team1: a.favoriteTeam };
            u = (
              <pt
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
                {e.bonuses.map(function (e, t) {
                  return (
                    <yt
                      {...Object.assign({ key: t }, e, {
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
      a(152);
      function Tt() {
        return (Tt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Nt(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
        }
        return r;
      }
      var St = (
          <path d="M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z" />
        ),
        wt = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = Nt(e, ["svgRef", "title"]);
          return (
            <svg {...Tt({ viewBox: "0 0 24 24", ref: t }, n)}>
              {a ? <title>{a}</title> : null}
              {St}
            </svg>
          );
        },
        Bt = r.a.forwardRef(function (e, t) {
          return <wt {...Tt({ svgRef: t }, e)} />;
        });
      a.p;
      function Ot() {
        return (Ot =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function It(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
        }
        return r;
      }
      var Ct = (
          <path d="M7.919 17.377l-4.869-13.377h-2.05c-.266 0-.52-.105-.707-.293-.188-.187-.293-.442-.293-.707 0-.552.447-1 1-1h3.45l5.469 15.025c.841.101 1.59.5 2.139 1.088l11.258-4.097.684 1.879-11.049 4.021c.032.19.049.385.049.584 0 1.932-1.569 3.5-3.5 3.5-1.932 0-3.5-1.568-3.5-3.5 0-1.363.781-2.545 1.919-3.123zm1.581 1.811c.724 0 1.312.588 1.312 1.312 0 .724-.588 1.313-1.312 1.313-.725 0-1.313-.589-1.313-1.313s.588-1.312 1.313-1.312zm13.314-6.512l-11.418 4.156-2.736-7.518 11.418-4.156 2.736 7.518zm-8.71-3.215l-2.88 1.048 1.368 3.759 7.659-2.787-1.368-3.759-2.9 1.055.684 1.879-1.879.685-.684-1.88zm2.672-4.165l-8.458 3.078-1.927-5.296 8.457-3.078 1.928 5.296zm-3.123-2.733l-4.699 1.711.56 1.537 4.698-1.71-.559-1.538z" />
        ),
        kt = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = It(e, ["svgRef", "title"]);
          return (
            <svg {...Ot({ viewBox: "0 0 24 24", ref: t }, n)}>
              {a ? <title>{a}</title> : null}
              {Ct}
            </svg>
          );
        },
        Rt = r.a.forwardRef(function (e, t) {
          return <kt {...Ot({ svgRef: t }, e)} />;
        });
      a.p;
      function Gt() {
        return (Gt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Lt(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
        }
        return r;
      }
      var Dt = (
          <path d="M5.495 2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505c-1.375 0-1.375-2 0-2zm.505 4h14v6h-6c-1.104 0-2 .896-2 2s.896 2 2 2h6v6h-14v-16zm9 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z" />
        ),
        Qt = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = Lt(e, ["svgRef", "title"]);
          return (
            <svg {...Gt({ viewBox: "0 0 24 24", ref: t }, n)}>
              {a ? <title>{a}</title> : null}
              {Dt}
            </svg>
          );
        },
        Mt = r.a.forwardRef(function (e, t) {
          return <Qt {...Gt({ svgRef: t }, e)} />;
        });
      a.p;
      function Wt() {
        return (Wt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function jt(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
        }
        return r;
      }
      var xt,
        Ut = (
          <path d="M8 1c0-.552.448-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-.552 0-1-.448-1-1zm13 20.554c0 1.284-1.023 2.446-2.424 2.446h-13.153c-1.4 0-2.423-1.162-2.423-2.445 0-.35.076-.709.242-1.057l3.743-7.856c1.04-2.186 2.015-4.581 2.015-7.007v-1.635h2l-.006 2c-.087 2.623-1.09 5.092-1.973 7h3.682l4.377 9h1.496c.309 0 .52-.342.377-.644l-3.743-7.854c-1.046-2.197-2.12-4.791-2.21-7.502v-2h2v1.635c0 2.426.975 4.82 2.016 7.006l3.743 7.856c.165.348.241.707.241 1.057zm-12-1.054c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5 1.5.671 1.5 1.5 1.5 1.5-.671 1.5-1.5zm2-3.5c0-.553-.448-1-1-1-.553 0-1 .447-1 1s.447 1 1 1c.552 0 1-.447 1-1zm3 3c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z" />
        ),
        Yt = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = jt(e, ["svgRef", "title"]);
          return (
            <svg {...Wt({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n)}>
              {a ? <title>{a}</title> : null}
              {Ut}
            </svg>
          );
        },
        Pt = r.a.forwardRef(function (e, t) {
          return <Yt {...Wt({ svgRef: t }, e)} />;
        });
      a.p;
      !(function (e) {
        (e[(e.DECREE = 0)] = "DECREE"), (e[(e.BONUS = 1)] = "BONUS");
      })(xt || (xt = {}));
      var Jt = function (e) {
          var t = Object(ue.useToasts)().addToast,
            a = e.entityId,
            o = e.data,
            i = e.onSubmit,
            s = Object(n.useState)(!1),
            c = Object(l.a)(s, 2),
            m = c[0],
            u = c[1];
          return !0 === m ? (
            <Ae />
          ) : (
            <re.a
              onClick={function () {
                u(!0);
                var e = { entityId: a, voteType: xt.DECREE, data: o };
                b("/api/vote", JSON.stringify(e))
                  .then(function (e) {
                    e.status && 200 === e.status
                      ? (t("Vote Placed", { appearance: "success" }), i())
                      : (t("Error", { appearance: "error" }), console.log(e));
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
              disabled={!a}
            >
              Submit Decree Vote
            </re.a>
          );
        },
        Ft = function () {
          return (
            <a href="/login">
              <re.a className="Decrees-Submit-Button">Login to Vote</re.a>
            </a>
          );
        },
        Ht = function () {
          return (
            <a href="/welcome">
              <re.a className="Decrees-Submit-Button">Pick a Favorite Team to Vote</re.a>
            </a>
          );
        },
        Vt = function () {
          return (
            <c.b to={{ pathname: "/shop" }}>
              <re.a className="Decrees-Submit-Button">Buy Another Vote</re.a>
            </c.b>
          );
        },
        Kt = function (e) {
          var t = e.isActive;
          return <button className="Decrees-Option-Button">Select{t ? "ed" : ""}</button>;
        };
      function qt(e) {
        return "forbidden_book" === e ? (
          <Mt className="Decrees-Option-Icon" />
        ) : "eliminate_team" === e ? (
          <Rt className="Decrees-Option-Icon" />
        ) : "redistribute_wealth" === e ? (
          <Bt className="Decrees-Option-Icon" />
        ) : "four_for_four" === e ? (
          <ie.b className="Decrees-Option-Icon" />
        ) : "peanuts" === e ? (
          <ie.c className="Decrees-Option-Icon" />
        ) : "popular_evolution" === e ? (
          <Pt className="Decrees-Option-Icon" />
        ) : "enhanced_shame" === e ? (
          <ie.d className="Decrees-Option-Icon" />
        ) : (
          <div />
        );
      }
      var zt = function (e) {
          var t = e.title,
            a = e.description,
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
              {qt(n)}
              <div className="Decrees-Option-Header">{t}</div>
              {a && <p className="Decrees-Option-Description">{a}</p>}
              <Kt isActive={o} />
            </div>
          );
        },
        Zt = function () {
          var e = Object(n.useContext)(Et.context),
            t = Object(n.useContext)(J.context),
            a = t.user,
            o = t.refreshUser,
            i = Object(n.useState)(),
            s = Object(l.a)(i, 2),
            c = s[0],
            m = s[1],
            u = Object(n.useState)(!1),
            d = Object(l.a)(u, 2),
            h = (d[0], d[1]),
            E = <Ft />;
          if (
            (a.isFetching || !a.isSignedIn || a.favoriteTeam || (E = <Ht />),
            a.isFetching || !a.isSignedIn || a.votes || (E = <Vt />),
            !a.isFetching && a.isSignedIn && a.favoriteTeam && a.votes)
          ) {
            var p = { team1: a.favoriteTeam };
            E = (
              <Jt
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
                {e.decrees.map(function (e, t) {
                  return (
                    <zt
                      {...Object.assign({ key: t }, e, {
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
      a(153);
      function Xt() {
        var e,
          t = Object(n.useContext)(A.context),
          a = Object(n.useState)({
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
              { description: "", bonusTitle: "", teamId: "", team: { mainColor: "", emoji: 0 }, totalVotes: 0 },
            ],
          }),
          o = Object(l.a)(a, 2),
          i = o[0],
          s = o[1],
          c = Object(n.useState)(!1),
          m = Object(l.a)(c, 2),
          u = m[0],
          d = m[1];
        function h() {
          return (h = Object(g.a)(
            v.a.mark(function e() {
              var a, n, r, o, i, l, c, m, u, d, h, E, p, A;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), B(null === (a = t.sim) || void 0 === a ? void 0 : a.season);
                    case 2:
                      if (((n = e.sent), (r = []), (o = void 0), !n)) {
                        e.next = 19;
                        break;
                      }
                      return (e.next = 8), I(n.bonusResults);
                    case 8:
                      for (
                        i = e.sent,
                          r = [],
                          l = function (e) {
                            r.push(
                              i.find(function (t) {
                                return t._id === n.bonusResults[e];
                              })
                            );
                          },
                          c = 0;
                        c < n.bonusResults.length;
                        c++
                      )
                        l(c);
                      return (e.next = 14), k(n.decreeResults);
                    case 14:
                      return (o = e.sent), (e.next = 17), G();
                    case 17:
                      for (m = e.sent, u = 0; u < i.length; u++)
                        for (d = i[u].teamId, h = 0; h < m.length; h++)
                          m[h]._id === d &&
                            ((E = m[h]), (p = E.mainColor), (A = E.emoji), (i[u].team = { mainColor: p, emoji: A }));
                    case 19:
                      s({ recap: n, bonusResults: r, decreeResults: o });
                    case 20:
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
                  return h.apply(this, arguments);
                })().then(function () {
                  d(!1);
                });
            },
            [null === (e = t.sim) || void 0 === e ? void 0 : e.season]
          ),
          !t || !t.sim || !i || !i.recap)
        )
          return null;
        var E =
            i.recap.decreeResults.length > 0 ? (
              <div className="Recap-Results">
                <h2 className="Recap-ResultsHeader">Decrees</h2>
                {i.decreeResults.map(function (e, t) {
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
                        <div className="Recap-Decree-Icon">{qt(e.decreeId)}</div>
                        <div className="Recap-Decree-Description">
                          {e.description.split("\n").map(function (e, t) {
                            return (
                              <div key={t} className="Recap-Decree-Description-Line">
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
          p =
            i.recap.bonusResults.length > 0 ? (
              <div className="Recap-Results">
                <h2 className="Recap-ResultsHeader">Blessings</h2>
                {i.bonusResults.length > 0 ? (
                  i.bonusResults.map(function (e, t) {
                    return (
                      <div key={t} className="Recap-Blessing-Container">
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
                            {e.description.split("\n").map(function (e, t) {
                              return (
                                <div key={t} className="Recap-Blessing-Description-Line">
                                  {e}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="Recap-Blessing-Container">"No Bonuses were claimed."</div>
                )}
              </div>
            ) : null,
          f = null === p && null === E ? <div className="Recap-Note">Nothing happened in this Election.</div> : null;
        return (
          <div className="Recap">
            <div className="Recap-Header">The Results are in.</div>
            {u ? (
              <Ae />
            ) : (
              <div>
                <div className="Recap-Name">{i.recap.name}</div>
                <div className="Recap-Body">
                  {E}
                  {p}
                  {f}
                </div>
              </div>
            )}
          </div>
        );
      }
      function _t() {
        var e = Object(n.useContext)(J.context).user,
          t = Object(n.useContext)(A.context);
        return t && t.sim ? 0 === t.sim.phase ? <Xt /> : e.unlockedElection ? <$t /> : <ta /> : null;
      }
      function $t() {
        var e,
          t = Object(n.useContext)(A.context),
          a = void 0 !== t.sim && void 0 !== t.sim.season ? t.sim.season : -1;
        return (
          <div className="Offseason">
            <div className="Offseason-Info">
              <div className="Offseason-Header">
                Season <span className="Offseason-Number">{a + 1}</span> Election
              </div>
              <div className="Offseason-Description">
                Votes are counted up and changes are made at the end of every week, between seasons of Blaseball. This
                Election ends in...
              </div>
              <Ye dateString={null === (e = t.sim) || void 0 === e ? void 0 : e.nextElectionEnd} />
            </div>
            <div className="Offseason-Body">
              <Et value={{ bonuses: [], decrees: [], decreesToPass: 0 }}>
                <ea />
              </Et>
            </div>
          </div>
        );
      }
      function ea() {
        var e = Object(n.useContext)(Et.context);
        return void 0 === e || 0 === e.bonuses.length || 0 === e.decrees.length ? (
          <Ae />
        ) : (
          <r.a.Fragment>
            <Zt />
            <bt />
          </r.a.Fragment>
        );
      }
      function ta() {
        Object(n.useContext)(A.context);
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
      a(154);
      function aa(e) {
        e.season;
        var t,
          a = Object(n.useContext)(A.context);
        return (
          <div>
            <div className="GodsDay">
              <div className="GodsDay-Header">Blaseball Gods' Day</div>
              <Ye dateString={null === (t = a.sim) || void 0 === t ? void 0 : t.nextPhaseTime} />
              <div className="GodsDay-Body">
                Welcome to Blaseball. The season will begin soon. Check the Election page for the results of last
                season's voting.
              </div>
            </div>
            <ze />
          </div>
        );
      }
      a(155);
      var na = function () {
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
        ra =
          (a(156),
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
      function oa() {
        return (oa =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ia(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
        }
        return r;
      }
      var la = <image id="Ball" x={87} y={75} width={784} height={911} xlinkHref="<img/png blob>" />,
        sa = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = ia(e, ["svgRef", "title"]);
          return (
            <svg {...oa({ width: 959, height: 1065, viewBox: "0 0 959 1065", ref: t }, n)}>
              {a ? <title>{a}</title> : null}
              {la}
            </svg>
          );
        },
        ca = r.a.forwardRef(function (e, t) {
          return <sa {...oa({ svgRef: t }, e)} />;
        }),
        ma =
          (a.p,
          a(157),
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
        ua = Object(n.createContext)(ma),
        da = function (e) {
          var t = e.children,
            a = Object(n.useState)([]),
            o = Object(l.a)(a, 2),
            i = o[0],
            c = o[1],
            m = (Object(s.g)().pathname, Object(ue.useToasts)().addToast),
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
                  var t;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = []),
                            i.forEach(function (e) {
                              t.push(e._id);
                            }),
                            (e.next = 4),
                            b("/api/clearUserNotifications", JSON.stringify({ noteIds: t }))
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
                  var t = i[e];
                  m(t.message, { appearance: "info", autoDismiss: !1 });
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
          return <ua.Provider value={E}>{t}</ua.Provider>;
        };
      da.context = ua;
      var ha = da;
      a(158);
      function Ea() {
        return (
          <div className="TheBook-All">
            <div className="TheBook-Header">The Book of Blaseball</div>
            <div className="TheBook-Subheader">
              The Game of{" "}
              <span className="TheBook-Subheader-Group">
                <pa str="||||||||||||||||||" /> and <pa str="|||||||||||||" />
              </span>
            </div>
            <div className="TheBook-Subheader">Official Rulebook</div>
            <div className="TheBook-Line TheBook-Bullet">1. Seasons</div>
            <div className="TheBook-Line TheBook-SubBullet">
              a. Each season of Blaseball shall last 99 games. In the case of <pa str="the Ultimate ||||||||" />,
              seasons shall <pa str="|||||||||||||||||, or at least until the ||||||| have ||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              b. Every day of Blaseball shall last one <pa str="|||||" /> hour.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              c. If any games last longer than one <pa str="|||||" /> hour, a Spillover shall occur, and all games shall
              be delayed until the next <pa str="|||||" /> hour. In the case of a game lasting two <pa str="|||||" />{" "}
              hours, the{" "}
              <pa str="entire season should be ||||||||| and both teams should be ||||||||| ||||||||| |||||||| |||| for |||||| |||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              d. A season should start on a "Monday" and therefore conclude on a "Friday".
            </div>
            <div className="TheBook-Line TheBook-Bullet">2. Postseasons</div>
            <div className="TheBook-Line TheBook-SubBullet">
              a. Each Postseason of Blaseball shall consist of 8 teams. These teams shall be the 4 best teams from each
              league, regardless of division. Teams will be ranked by their total wins over the season. In the case of
              ties, teams shall be chosen based on their <pa str="Divine Favor" />. <i>See: </i>{" "}
              <pa str="Divine Favor" />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              b. The Postseason should start early on a "Saturday" and conclude within the same day. If the Postseason
              lasts into the following day, no{" "}
              <pa str="||||| shall be ||||||||, and both teams shall be |||||||||| |||||||| ||||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              c. Postseason rounds should be played in best 3 of 5 game series.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              d. The home team in each Postseason game shall be{" "}
              <pa str="the |||||||||||, if the |||||||||||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-Bullet">3. Elections</div>
            <div className="TheBook-Line TheBook-SubBullet">
              a. Participants should be allowed to Vote on the rules, rosters, and other effects of the game of
              Blaseball.{" "}
              <pa str="The content of such Votes shall be ||||||||||||||| ||||||||||||||||||| ||||||||| entertainment" />
              .
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              <span>b. Decrees will be decided by popular vote.</span>
              <pa str="It is understood that ||||||||||||||||| will be a ||||||||||| |||||||||||, and the others shall ||||||||||||||| ||||||||||||||| ||||||||| |||||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              c. Blessings will be decided by a raffle. <pa str="It is understood that each of these" /> should give
              players <pa str="||||||||||||| |||||||||||" /> control of the league. All won Blessings shall be processed
              & applied in order of the standings.{" "}
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              c. <pa str="||||||||||||||||||" /> may occur at the end of an Election, before Decrees and Blessings are
              processed. <pa str="Anything can happen here" />. Good luck.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              d. Elections should end on a "Sunday," although Votes should be able to be cast on any day of the week.
            </div>
            <div className="TheBook-Line TheBook-Bullet">4. Playing the Game</div>
            <div className="TheBook-Line TheBook-SubBullet">
              a. The game of Blaseball should be played between two teams.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              b. Each game should take place <pa str="at the home team's stadium |||||||||||||||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              c. Weather: <pa str="The home team's stadium should determine the weather." /> In the case that{" "}
              <pa str="||||||||||||||||||||" />, a Solar Eclipse shall last until <pa str="||||||||||||||||||||" />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              d. There are <pa str="two positions" /> in Blaseball, <pa str="||||||||||||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              e. When a team is on Defense,{" "}
              <pa str="all of the team's ||||||| will stand ||||||||| out in the field. Doesn't really matter where." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              f. The pitcher must throw the ball <pa str="with their hands." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              g. Once the ball is in play,{" "}
              <pa str="||| |||| || ||| |||||||||| ||||| |||||||||| the outcome of the play. ||| |||| ||||||| || |||||||||||||||| |||||||||||||| ||||||| ||||||| ||||||||| ||||||||||||||| |||||||||||||||| |||||||| |||||||| unfathomable." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">h. The team with the most runs will win the game.</div>
            <div className="TheBook-Line TheBook-SubBullet">
              i. Shame Phase: If the home team scores the winning run in the bottom of the final inning, the away team
              must complete the game in shame, despite being mathematically eliminated.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              j. <pa str="||||||||||||||||||||||" />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              k. Crying in Blaseball is <pa str="||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-Bullet">
              5. <pa str="The Gods" /> and You
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              a. Should the Participants open the Forbidden Book,{" "}
              <pa str="The Discipline Era should begin||||||||||||||||||||||" /> suffering{" "}
              <pa str="upon the league. Players shall be " /> banished{" "}
              <pa str="at the ||||||||||| ||||||||| |||| ||||||||||||||||. The Discipline Era" /> shall last until{" "}
              <pa str="the Participants have atoned." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              b. If a team wins three championships, they, and Blaseball, shall ascend.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              c. When teams are sent to <pa str="||||||||||| |||||||||||||" />, they shall return once{" "}
              <pa str="|||||||||||||||| |||||||||||||||||||||| |||||||||||||" />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              d. <pa str="Divine Favor" />: the <pa str="||||" /> have an internal ranking{" "}
              <pa str="of favored teams. When a team wins a Divine Favor blessing, they will be" /> boosted to the top
              of the list.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              e. If at any time, <pa str="||||||||||||||| |||||||||||||||, they may |||||||||||||||" /> one million
              Peanuts.
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              f. Sunglasses{" "}
              <pa str="shall be |||||||||| ||||||||||||| |||||||||||||||||. They shall provide |||||||||||||| may be ||||||||||||||||||||." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              g. Splortsmanship, splortsmanship, <pa str="splortsmanship." />
            </div>
            <div className="TheBook-Line TheBook-Bullet">
              6. <pa str="||||||||||||" />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              a. It is known{" "}
              <pa str="that the intention of the game of Blaseball |||||||||||||||||||||||| |||||||||||||||||||| |||||||||||||| |||||||||||||||||| ||||||||||| |||||||||| would be diminished." />
            </div>
            <div className="TheBook-Line TheBook-SubBullet">
              b. <pa str="|||||||" />: Several entities in the <pa str="||||||||||||||" /> shall be chosen{" "}
              <pa str="||||||||||" /> to bring Blaseball to the people{" "}
              <pa str="|||||||||||||||||| ||||||||||||||||||" />
            </div>
            <div className="TheBook-Line TheBook-Bullet">Signed,</div>
            <div className="TheBook-Line TheBook-SubBullet">
              <pa str="||||" />,  <pa str="||||" />,  <pa str="||||||||" />,  <pa str="|||||||" />,  
              <pa str="||||||||" />,  <pa str="|||||||||" />,  <pa str="|||||||" />,  <pa str="||||" />,  
              <pa str="||||||" />,  <pa str="||||||||||" />,  <pa str="||||||" />,  <pa str="|||||||" />,  
              <pa str="||||| ||||" />,  <pa str="||||||| ||||||" />,  <pa str="||||" />,  <pa str="|||||||" />,  
              <pa str="||" />,  <pa str="||||||" />,  <pa str="||| ||||||" />
            </div>
          </div>
        );
      }
      function pa(e) {
        var t = e.str.split(" ");
        return (
          <span className="TheBook-RedactGroup">
            {t.map(function (e) {
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
      function Aa() {
        var e = Object(n.useContext)(J.context).user,
          t = Object(n.useState)(!1),
          a = Object(l.a)(t, 2),
          o = a[0],
          i = a[1];
        return (
          Object(n.useEffect)(
            function () {
              void 0 !== e && !e.isFetching && e.isSignedIn ? i(!0) : i(!1);
            },
            [e]
          ),
          void 0 !== e && e.isFetching ? <va /> : o ? <ga /> : <fa />
        );
      }
      function fa() {
        var e = Object(s.g)(),
          t = e.state && e.state.background;
        return (
          <div>
            <We />
            <div className="Main-Body-Intro">
              <s.c location={t || e}>
                <s.a path="/tos">
                  <ra />
                </s.a>
                <s.a path="/privacy">
                  <na />
                </s.a>
                <s.a path="/login">
                  <mt isLogin={!0} />
                </s.a>
                <s.a path="/signup/:code?">
                  <mt />
                </s.a>
                <s.a path="/">
                  <at />
                </s.a>
              </s.c>
              {t && (
                <r.a.Fragment>
                  <s.a path="/signup" children={<mt isModal={!0} />} />
                  <s.a path="/login" children={<mt isModal={!0} isLogin={!0} />} />
                  <s.a path="/team/:nickname" children={<it isModal={!0} />} />
                  <s.a path="/bet/:gameId" children={<ve isModal={!0} />} />
                </r.a.Fragment>
              )}
              <ct isModal={!0} dismissable={!1} />
            </div>
            <footer className="Main-Footer">
              <div className="Main-Footer-Links">
                <a className="Main-Footer-Link" href="/tos">
                  Terms of Service
                </a>
                <a className="Main-Footer-Link" href="/privacy">
                  Privacy Policy
                </a>
                <a className="Main-Footer-Link" href={ya()}>
                  Advertise
                </a>
              </div>
              <a href="https://twitter.com/thegameband" target="_blank" className="Main-Footer-Logo">
                <ca />
              </a>
            </footer>
          </div>
        );
      }
      function va() {
        return (
          <div>
            <je />
            <div className="Main-Body" />
          </div>
        );
      }
      function ga() {
        var e = Object(n.useContext)(A.context),
          t = Object(s.g)(),
          a = t.state && t.state.background,
          o = function (t, a) {
            var n,
              o,
              i,
              l = void 0 !== e.sim && void 0 !== e.sim.season ? e.sim.season : -1;
            switch (t) {
              case 0:
                return <aa season={null === (n = e.season) || void 0 === n ? void 0 : n.seasonNumber} />;
              case 1:
                return (
                  <div>
                    <nt
                      element={
                        <div className="Stubs-All">
                          <div className="Stubs-Header">It's the Pre-Season.</div>
                          <Ye dateString={null === (o = e.sim) || void 0 === o ? void 0 : o.nextPhaseTime} />
                          <div className="Stubs-Body">Season {l + 1} will begin soon.</div>
                        </div>
                      }
                      text="Offseason. Check for updates on the Discord!"
                    />
                    <ze />
                  </div>
                );
              case 2:
                return <Je path={a} />;
              case 3:
                return (
                  <div>
                    <nt
                      element={
                        <div className="Stubs-All">
                          <div className="Stubs-Header">The Season is Over!</div>
                          <Ye dateString={null === (i = e.sim) || void 0 === i ? void 0 : i.nextPhaseTime} />
                          <div className="Stubs-Body">Postseason {l + 1} will begin soon.</div>
                        </div>
                      }
                      text="Offseason. Check for updates on the Discord!"
                    />
                    <ze />
                  </div>
                );
              case 4:
                return <Fe path={a} />;
              case 5:
              case 6:
                return <et sim={e.sim} />;
            }
            return <div />;
          };
        return (
          <ha>
            <V>
              <Qe state={e} />
              <div className="Main-Body">
                <s.c location={a || t}>
                  <s.a path="/tos">
                    <ra />
                  </s.a>
                  <s.a path="/privacy">
                    <na />
                  </s.a>
                  <s.a path="/about">
                    <tt />
                  </s.a>
                  <s.a path="/shop">
                    <lt />
                  </s.a>
                  <s.a path="/thebook">
                    <Ea />
                  </s.a>
                  <s.a path="/standings">
                    <qe />
                  </s.a>
                  <s.a path="/offseason">
                    <_t />
                  </s.a>
                  <s.a path="/login">
                    <mt isLogin={!0} />
                  </s.a>
                  <s.a path="/signup">
                    <mt />
                  </s.a>
                  <s.a path="/team/:nickname">
                    <it />
                  </s.a>
                  <s.a path="/upcoming">{e.sim && o(e.sim.phase, "/upcoming")}</s.a>
                  <s.a path="/">{e.sim && o(e.sim.phase, "/")}</s.a>
                </s.c>
                {a && (
                  <r.a.Fragment>
                    <s.a path="/signup" children={<mt isModal={!0} />} />
                    <s.a path="/login" children={<mt isModal={!0} isLogin={!0} />} />
                    <s.a path="/team/:nickname" children={<it isModal={!0} />} />
                    <s.a path="/bet/:gameId" children={<ve isModal={!0} />} />
                  </r.a.Fragment>
                )}
                <ct isModal={!0} dismissable={!1} />
              </div>
              <footer className="Main-Footer">
                <div className="Main-Footer-Links">
                  <a className="Main-Footer-Link" href="/tos">
                    Terms of Service
                  </a>
                  <a className="Main-Footer-Link" href="/privacy">
                    Privacy Policy
                  </a>
                  <a className="Main-Footer-Link" href={ya()}>
                    Advertise
                  </a>
                </div>
                <a href="https://twitter.com/thegameband" target="_blank" className="Main-Footer-Logo">
                  <ca />
                </a>
              </footer>
            </V>
          </ha>
        );
      }
      function ya() {
        return "mailto:sponsors@thegameband.com?subject=".concat(
          encodeURIComponent("I\u2019d like to sponsor a season of Blaseball")
        );
      }
      var ba = function () {
        return (
          <div className="Main">
            <J>
              <Aa />
            </J>
          </div>
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      var Ta = { sim: void 0, standings: void 0, season: void 0 };
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
            <ue.ToastProvider autoDismiss={!0} autoDismissTimeout={3e3} placement="bottom-right">
              <A value={Ta}>
                <Ke value={{}}>
                  <c.a>
                    <ba />
                  </c.a>
                </Ke>
              </A>
            </ue.ToastProvider>
          </r.a.StrictMode>,
          document.getElementById("root")
        );
    },
    26: function (e) {
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
    40: function (e, t, a) {},
    84: function (e, t, a) {
      e.exports = a(159);
    },
    89: function (e, t, a) {},
    90: function (e, t, a) {},
  },
  [[84, 1, 2]],
]);
