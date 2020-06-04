! function(e) {
    function s(s) {
        for (var i, n, r = s[0], c = s[1], h = s[2], l = 0, p = []; l < r.length; l++) n = r[l], Object.prototype.hasOwnProperty.call(a, n) && a[n] && p.push(a[n][0]), a[n] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
        for (d && d(s); p.length;) p.shift()();
        return o.push.apply(o, h || []), t()
    }

    function t() {
        for (var e, s = 0; s < o.length; s++) {
            for (var t = o[s], i = !0, r = 1; r < t.length; r++) {
                var c = t[r];
                0 !== a[c] && (i = !1)
            }
            i && (o.splice(s--, 1), e = n(n.s = t[0]))
        }
        return e
    }
    var i = {},
        a = {
            13: 0
        },
        o = [];

    function n(s) {
        if (i[s]) return i[s].exports;
        var t = i[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(t.exports, t, t.exports, n), t.l = !0, t.exports
    }
    n.m = e, n.c = i, n.d = function(e, s, t) {
        n.o(e, s) || Object.defineProperty(e, s, {
            enumerable: !0,
            get: t
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, s) {
        if (1 & s && (e = n(e)), 8 & s) return e;
        if (4 & s && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (n.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & s && "string" != typeof e)
            for (var i in e) n.d(t, i, function(s) {
                return e[s]
            }.bind(null, i));
        return t
    }, n.n = function(e) {
        var s = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(s, "a", s), s
    }, n.o = function(e, s) {
        return Object.prototype.hasOwnProperty.call(e, s)
    }, n.p = "/";
    var r = window.webpackJsonp = window.webpackJsonp || [],
        c = r.push.bind(r);
    r.push = s, r = r.slice();
    for (var h = 0; h < r.length; h++) s(r[h]);
    var d = c;
    o.push([414, 1, 0]), t()
}({
    414: function(e, s, t) {
        "use strict";
        t.r(s);
        var i = t(12),
            a = t(0),
            o = t(6),
            n = t(75),
            r = t(207),
            c = t(3),
            h = t(68),
            d = t(65),
            l = t(7),
            p = t(4),
            u = t(10),
            g = t(36);
        const m = {
                toggle_toggleButton: {
                    float: Object(h.c)("right", "left"),
                    marginInlineStart: "5px"
                },
                toggle_statusMessage: {
                    paddingInlineStart: "0px"
                }
            },
            y = {
                button: {
                    height: "28px",
                    margin: "2px 0",
                    width: "fit-content"
                }
            },
            b = {
                settingsHamburgerMenu: {
                    display: "block",
                    marginInlineStart: "auto",
                    marginBottom: "4px",
                    backgroundColor: "transparent"
                },
                settingsHamburgerMenu_closeButton: Object.assign(Object.assign({}, Object(g.a)(l.b, p.C, p.C)), {
                    position: "absolute",
                    top: "0",
                    margin: "6px",
                    [Object(h.b)("right", "left", l.b.direction)]: "0",
                    "& $settingsHamburgerMenu_closeButton_icon": Object.assign({}, Object(u.a)())
                }),
                settingsHamburgerMenu_closeButton_icon: {},
                settingsHamburgerMenu_flyout_buttonSection: {
                    display: "flex",
                    flexDirection: "column"
                },
                settingsHamburgerMenu_flyout_divider: {
                    margin: "8px -16px"
                },
                settingsHamburgerMenu_flyout: {
                    padding: "16px"
                },
                settingsHamburgerMenu_flyout_label: {
                    margin: "0 0 0.5em",
                    display: "block"
                },
                settingsHamburgerMenu_flyout_score: {
                    marginTop: "8px",
                    display: "flex",
                    alignItems: "center"
                },
                settingsHamburgerMenu_flyout_scoreCrown: {
                    height: "16px",
                    width: "16px",
                    color: "currentColor",
                    fill: "currentColor",
                    marginInlineEnd: "4px"
                },
                settingsHamburgerMenu_flyout_toggleRow: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "6px 0"
                },
                settingsHamburgerMenu_centered: {
                    margin: "0 auto"
                },
                settingsHamburgerMenu_icon: {
                    color: d.c,
                    fill: "currentColor"
                },
                settingsHamburgerMenu_creditsTable: {
                    margin: "0 auto",
                    color: d.c
                },
                settingsHamburgerMenu_creditsTable_specialThanks: {
                    marginTop: "8px",
                    marginBottom: "4px"
                }
            };
        var w, f = t(149),
            S = t(619),
            k = t(289),
            O = t(144),
            x = t(200),
            v = t(633),
            C = t(109),
            E = t(431),
            T = t(644),
            P = t(630),
            M = t(613),
            I = t(618),
            A = t(634),
            D = t(2),
            L = t(91),
            B = t(454),
            R = t(41),
            j = t(611),
            N = t(287),
            G = t(1);
        ! function(e) {
            e.Buoy = "BUOY", e.Classic = "CLASSIC", e.Speed = "SPEED"
        }(w || (w = {}));
        class W {
            static recordNewGame(e) {
                switch (e) {
                    case w.Buoy:
                        W.numBuoyGames += 1;
                        break;
                    case w.Classic:
                        W.numClassicGames += 1;
                        break;
                    case w.Speed:
                        W.numSpeedGames += 1
                }
            }
            static defaultStats() {
                return {
                    buoy_bestScore: -1,
                    classic_bestScore: -1,
                    currentCharacter: 4,
                    highVisibilityMode: false,
                    mode: "CLASSIC",
                    reducedSpeedMode: false,
                    speed_bestScore: -0.001
                }
            }
            static getAllStats() {
                //G.b.sendWithPromise("get-stats")
                return ("undefined" != typeof G.a && "function" == typeof G.a.send && "undefined" != typeof G.b && "function" == typeof G.b.sendWithPromise)
                    ? G.b.sendWithPromise("get-stats")
                    : Promise.resolve(
                        JSON.parse( localStorage.getItem("stats")) || W.defaultStats() );
            }
            static resetAllStats() {
                //G.a.send("reset-stats")
                ("undefined" != typeof G.a && "function" == typeof G.a.send)
                    ? G.a.send("reset-stats")
                    : localStorage.removeItem("stats");
            }
            static saveClassicHighScore(e) {
                //G.a.send("set-high-score", [w.Classic, Math.floor(e)])
                if ("undefined" != typeof G.a && "function" == typeof G.a.send) {
                    G.a.send("set-high-score", [w.Classic, Math.floor(e)])
                } else {
                    localStorage.setItem("stats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("stats"))), {
                        classic_bestScore: e
                    })));
                }
            }
            static saveBuoyHighScore(e) {
                //G.a.send("set-high-score", [w.Buoy, Math.floor(e)])
                if ("undefined" != typeof G.a && "function" == typeof G.a.send) {
                    G.a.send("set-high-score", [w.Buoy, Math.floor(e)])
                } else {
                    localStorage.setItem("stats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("stats"))), {
                        buoy_bestScore: e
                    })));
                }
            }
            static saveSpeedHighScore(e) {
                let s = e;
                //e > 0 && (s *= 1e3), G.a.send("set-high-score", [w.Speed, Math.floor(s)])
                if ("undefined" != typeof G.a && "function" == typeof G.a.send) {
                    e > 0 && (s *= 1e3), G.a.send("set-high-score", [w.Speed, Math.floor(s)])
                } else {
                    e > 0 && (s *= 1e3);
                    localStorage.setItem("stats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("stats"))), {
                        speed_bestScore: s
                    })));
                }
            }
            static saveGameMode(e) {
                //G.a.send("save-game-mode", [e])
                if ("undefined" != typeof G.a && "function" == typeof G.a.send) {
                    G.a.send("save-game-mode", [e])
                } else {
                    localStorage.setItem("stats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("stats"))), {
                        mode: e
                    })));
                }
            }
            static saveHighVisibilityMode(e) {
                //G.a.send("save-high-visibility-mode", [e])
                if ("undefined" != typeof G.a && "function" == typeof G.a.send) {
                    G.a.send("save-high-visibility-mode", [e])
                } else {
                    localStorage.setItem("stats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("stats"))), {
                        highVisibilityMode: e
                    })));
                }
            }
            static saveReducedSpeedMode(e) {
                //G.a.send("save-reduced-speed-mode", [e])
                if ("undefined" != typeof G.a && "function" == typeof G.a.send) {
                    G.a.send("save-reduced-speed-mode", [e])
                } else {
                    localStorage.setItem("stats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("stats"))), {
                        reducedSpeedMode: e
                    })));
                }
            }
            static saveDefaultSurfer(e) {
                //G.a.send("save-selected-surfer", [e])
                if ("undefined" != typeof G.a && "function" == typeof G.a.send) {
                    G.a.send("save-selected-surfer", [e])
                } else {
                    localStorage.setItem("stats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("stats"))), {
                        currentCharacter: e
                    })));
                }
            }
            static recordUnload() {
                const e = Math.floor(Date.now() - W.sessionStartTime) || 0,
                    s = {
                        buoyGamesPlayed: W.numBuoyGames,
                        classicGamesPlayed: W.numClassicGames,
                        speedGamesPlayed: W.numSpeedGames
                    };
                //G.a.send("record-unload", [s, e]), W.numBuoyGames = 0, W.numClassicGames = 0, W.numSpeedGames = 0, W.sessionStartTime = Date.now()
                if ("undefined" != typeof G.a && "function" == typeof G.a.send) {
                    G.a.send("record-unload", [s, e]), W.numBuoyGames = 0, W.numClassicGames = 0, W.numSpeedGames = 0, W.sessionStartTime = Date.now()
                }
            }
            static recordGameEnd(e) {
                // let e = {
                //     "dogCollected": false,
                //     "edgeCodeUsed": false,
                //     "gameMode": "CLASSIC", // "BUOY", or "SPEED" 
                //     "konamiCodeUsed": false,
                //     "loseCondition": "lives", // or "kraken"
                //     "msftCodeUsed": false,
                //     "powerUpsCollected": 0,
                //     "powerUpsUsed": 0,
                //     "score": 0
                // }
                const s = Object.assign(Object.assign({}, e), {
                    score: Math.floor(e.score)
                });
                //G.a.send("record-game-end", [s])
                if ("undefined" != typeof G.a && "function" == typeof G.a.send) {
                    G.a.send("record-game-end", [s])
                }
            }
        }
        W.numSpeedGames = 0, W.numClassicGames = 0, W.numBuoyGames = 0, W.sessionStartTime = Date.now();
        class H {
            constructor() {
                if (H.system) return H.system;
                H.system = this
            }
            defineClusters() {
                this.poses = {
                    dock: {
                        sw: [1],
                        s: [2],
                        se: [3],
                        solo: [4],
                        n: [5],
                        w: [6],
                        e: [7],
                        arch: [8],
                        broken: [9],
                        ropes: [10]
                    },
                    solids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
                    posts: [1, 2],
                    logs: [3, 4, 5],
                    coral: [6, 7],
                    rocks: [8, 9, 10, 11, 12, 13, 14],
                    smallrocks: [8, 9, 10],
                    largerocks: [11, 12, 13, 14],
                    woodenboat: [15],
                    boats: [15, 16],
                    flagbuoy: [17, 18, 19],
                    oceanbuoy: [20, 21, 22],
                    markerbuoy: [23],
                    scuba: [25],
                    sign: [26],
                    friends: [27, 28, 29, 30],
                    float: [1, 2, 3, 4, 5],
                    wakebuoy: [1],
                    floater: [2],
                    ball: [3],
                    ring: [4],
                    cone: [5],
                    guidebuoy: [6],
                    ramp: [1],
                    tentacle: [2],
                    powerup: [3],
                    heart: [4],
                    coin: [5],
                    dog: [7],
                    wake64: [1, 2, 3, 4, 5, 6],
                    seaweed64: [7, 8, 9],
                    wake192: [1, 2],
                    seaweed192: [3],
                    ambient: [1, 2, 3, 4],
                    whirlpool: [1],
                    sandbar: [1, 2, 3, 4]
                }, this.characterScenes = {
                    friendBeach1: {
                        Sandbar256: [
                            [-3, 5], this.poses.sandbar
                        ],
                        Wake64: [
                            [-8, 4],
                            [-2, 9],
                            [2, 8],
                            [7, 6], this.poses.wake64
                        ],
                        Wake192: [
                            [0, 3],
                            [-5, 8], this.poses.wake192
                        ],
                        Heart64: [
                            [4, 5], this.poses.heart
                        ],
                        Objects64: [
                            [-1, 7], this.poses.friends
                        ]
                    },
                    friendBeach2: {
                        Sandbar256: [
                            [4, 5], this.poses.sandbar
                        ],
                        Wake64: [
                            [-7, 4],
                            [-6, 8],
                            [8, 5], this.poses.wake64
                        ],
                        Wake192: [
                            [1, 3],
                            [5, 8],
                            [0, 9], this.poses.wake192
                        ],
                        Heart64: [
                            [-4, 4], this.poses.heart
                        ],
                        Objects64: [
                            [-1, 6], this.poses.friends
                        ]
                    }
                }, this.classicStart = {
                    classicStart: {
                        Wake192: [
                            [-14, 2],
                            [-8, 6],
                            [-18, 8],
                            [-9, 10],
                            [6, 5],
                            [13, 1],
                            [10, 10],
                            [17, 11], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-20, 2],
                            [-19, 5],
                            [-16, 5],
                            [-21, 7],
                            [-17, 11],
                            [-14, 9],
                            [-6, 9],
                            [7, 9],
                            [11, 5],
                            [14, 9],
                            [16, 6],
                            [20, 4],
                            [20, 8], this.poses.seaweed64
                        ],
                        Powerup64: [
                            [-6, 1],
                            [-2, 1],
                            [2, 1],
                            [6, 1], this.poses.powerup
                        ],
                        Objects64: [
                            [-19, 8],
                            [-15, 6],
                            [-11, 6],
                            [-11, 12],
                            [10, 6],
                            [15, 7],
                            [16, 10],
                            [20, 5],
                            [-20, 6, this.poses.logs],
                            [-16, 10, this.poses.logs],
                            [11, 11, this.poses.logs],
                            [21, 6, this.poses.logs],
                            [-10, 11, this.poses.woodenboat],
                            [18, 9, this.poses.scuba],
                            [-5, 6, this.poses.flagbuoy],
                            [-4, 10, this.poses.flagbuoy],
                            [-6, 12, this.poses.flagbuoy],
                            [5, 6, this.poses.flagbuoy],
                            [4, 10, this.poses.flagbuoy],
                            [6, 12, this.poses.flagbuoy], this.poses.rocks
                        ],
                        Docks64: [
                            [-18, 2, 5],
                            [-18, 4, 1],
                            [-16, 4, 10],
                            [-14, 4, 2],
                            [-12, 4, 2],
                            [-10, 4, 3],
                            [-13, 6, 5],
                            [-13, 8, 1],
                            [-11, 8, 2],
                            [-9, 8, 10],
                            [-7, 8, 2],
                            [-5, 8, 3],
                            [5, 8, 1],
                            [7, 8, 10],
                            [9, 8, 2],
                            [11, 8, 9],
                            [13, 8, 3],
                            [13, 6, 5],
                            [10, 4, 1],
                            [12, 4, 2],
                            [14, 4, 9],
                            [16, 4, 2],
                            [18, 4, 3],
                            [18, 2, 5], this.poses.dock.solo
                        ]
                    }
                }, this.island = {
                    island: {
                        Wake192: [
                            [-15, 1],
                            [-21, 4],
                            [-23, 14],
                            [-16, 22],
                            [17, 2],
                            [23, 5],
                            [21, 13],
                            [16, 20], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-21, 10],
                            [-19, 16],
                            [-12, 18],
                            [4, 19],
                            [10, 18],
                            [15, 17],
                            [19, 15],
                            [21, 9], this.poses.seaweed64
                        ],
                        Objects64: [
                            [-8, 3],
                            [-19, 6],
                            [12, 3],
                            [19, 6],
                            [16, 15],
                            [8, 16],
                            [3, 17],
                            [-10, 16],
                            [-14, 17],
                            [-5, 17, this.poses.coral],
                            [13, 16, this.poses.coral],
                            [-5, 0, this.poses.flagbuoy],
                            [-4, 3, this.poses.flagbuoy],
                            [-3, 4, this.poses.flagbuoy],
                            [3, 4, this.poses.flagbuoy],
                            [5, 0, this.poses.flagbuoy],
                            [4, 3, this.poses.flagbuoy],
                            [-13, 19, this.poses.logs], this.poses.rocks
                        ],
                        Docks64: [
                            [-3, 16, 5],
                            [-3, 18, 5],
                            [-3, 20, 2],
                            [-1, 20, 3],
                            [-5, 20, 10],
                            [-7, 20, 2],
                            [-9, 20, 1],
                            [0, 22],
                            [-17, 0, 1],
                            [-15, 0, 8],
                            [-13, 0, 7],
                            [-13, 2, 1],
                            [-11, 2, 2],
                            [-9, 2, 10],
                            [-7, 2, 2],
                            [-7, 0, 5],
                            [-5, 2, 3],
                            [5, 2, 1],
                            [7, 2, 10],
                            [9, 2, 3],
                            [9, 0, 6],
                            [11, 0, 9],
                            [13, 0, 2],
                            [15, 0, 10],
                            [17, 0, 7],
                            [17, 2, 4], this.poses.dock.solo
                        ]
                    }
                }, this.normal = {
                    large2: {
                        Sandbar256: [
                            [-5, 9, 1],
                            [5, 2], this.poses.sandbar
                        ],
                        Wake192: [
                            [-1, 4], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-7, 4],
                            [4, 8], this.poses.seaweed64
                        ],
                        Objects64: [
                            [-6, 1],
                            [-5, 3],
                            [-4, 2],
                            [-1, 1],
                            [6, 10],
                            [7, 5],
                            [-3, 1, this.poses.posts],
                            [2, 8, this.poses.posts], this.poses.coral
                        ],
                        Docks64: [
                            [-4, 8, 6],
                            [-2, 8, 10],
                            [0, 8, 3],
                            [0, 6, 6],
                            [2, 6, 10],
                            [4, 6, 3],
                            [4, 4, 5],
                            [3, 10], this.poses.dock.solo
                        ]
                    },
                    large3: {
                        Sandbar256: [
                            [-3, 4], this.poses.sandbar
                        ],
                        Wake64: [
                            [-6, 1],
                            [2, 1],
                            [-7, 9], this.poses.wake64
                        ],
                        Wake192: [
                            [-6, 3], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-5, 8],
                            [0, 6],
                            [5, 9], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-2, 10],
                            [3, 11], this.poses.seaweed192
                        ],
                        Objects64: [
                            [-2, 2, this.poses.coral],
                            [8, 2, this.poses.oceanbuoy],
                            [7, 8, this.poses.logs],
                            [-5, 6],
                            [1, 3], this.poses.rocks
                        ],
                        Docks64: [
                            [-2, 6, 5],
                            [-2, 8, 1],
                            [0, 8, 8],
                            [2, 10, 4],
                            [2, 8, 7],
                            [2, 6, 6],
                            [4, 6, 9],
                            [6, 6, 3], this.poses.dock.solo
                        ]
                    },
                    large8: {
                        Seaweed64: [
                            [-5, 7],
                            [1, 4],
                            [3, 11], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [2, 2],
                            [0, 9], this.poses.seaweed192
                        ],
                        Objects64: [
                            [-5, 4],
                            [-3, 3],
                            [-3, 5],
                            [-2, 4],
                            [2, 6],
                            [3, 7],
                            [4, 6],
                            [5, 4],
                            [5, 8],
                            [-8, 7, this.poses.oceanbuoy],
                            [-5, 1, this.poses.oceanbuoy],
                            [8, 2, this.poses.oceanbuoy],
                            [7, 11, this.poses.oceanbuoy], this.poses.rocks
                        ]
                    },
                    large9: {
                        Sandbar256: [
                            [-2, 5], this.poses.sandbar
                        ],
                        Wake64: [
                            [-8, 4],
                            [-3, 10],
                            [4, 10],
                            [3, 7],
                            [7, 8], this.poses.wake64
                        ],
                        Wake192: [
                            [-6, 9], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-7, 5],
                            [2, 4],
                            [7, 5], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [0, 9], this.poses.seaweed192
                        ],
                        Objects64: [
                            [-6, 2],
                            [4, 3],
                            [6, 6],
                            [-4, 7, this.poses.logs],
                            [5, 8, this.poses.scuba], this.poses.coral
                        ]
                    },
                    large12: {
                        Sandbar256: [
                            [-1, 3, 4],
                            [3, 4, 3], this.poses.sandbar
                        ],
                        Wake64: [
                            [-6, 3],
                            [7, 7],
                            [-3, 9], this.poses.wake64
                        ],
                        Seaweed64: [
                            [-6, 8], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [1, 9], this.poses.seaweed192
                        ],
                        Objects64: [
                            [-5, 4],
                            [2, 2],
                            [-2, 5, this.poses.posts],
                            [5, 5, this.poses.posts], this.poses.coral
                        ],
                        Docks64: [
                            [2, 5, 5],
                            [2, 7, 2],
                            [4, 7, 3],
                            [0, 7, 8],
                            [-2, 7, 2],
                            [-4, 7, 1], this.poses.dock.solo
                        ]
                    },
                    medium4: {
                        Wake64: [
                            [-1, 1], this.poses.wake64
                        ],
                        Wake192: [
                            [2, 3], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-5, 5], this.poses.seaweed64
                        ],
                        Objects64: [
                            [-5, 3],
                            [2, 1],
                            [3, 5],
                            [-3, 6, this.poses.posts],
                            [5, 6, this.poses.posts],
                            [-3, 2, this.poses.scuba], this.poses.rocks
                        ],
                        Docks64: [
                            [-1, 5, 5],
                            [-1, 7, 1],
                            [1, 7, 8],
                            [3, 7, 3], this.poses.dock.solo
                        ]
                    },
                    medium6: {
                        Wake64: [
                            [-3, 4],
                            [-1, 5],
                            [4, 5], this.poses.wake64
                        ],
                        Objects64: [
                            [-3, 1],
                            [-4, 2],
                            [-5, 4],
                            [-3, 6],
                            [-5, 7],
                            [-2, 7],
                            [1, 4],
                            [5, 1],
                            [4, 7],
                            [-1, 3, this.poses.scuba], this.poses.rocks
                        ]
                    },
                    medium7: {
                        Seaweed64: [
                            [-2, 6], this.poses.seaweed64
                        ],
                        Objects32: [
                            [5.5, .5],
                            [4.5, 3.5],
                            [5.5, 5.5],
                            [3.5, 7.5], this.poses.floater
                        ],
                        Objects64: [
                            [-4, 5], this.poses.scuba
                        ],
                        Docks64: [
                            [-5, 2, 1],
                            [-3, 2, 9],
                            [-1, 2, 2],
                            [1, 2, 10],
                            [3, 2, 7],
                            [3, 4, 5],
                            [3, 6, 3],
                            [1, 6, 1], this.poses.dock.solo
                        ]
                    },
                    medium10: {
                        Wake64: [
                            [-4, 1],
                            [-5, 3],
                            [-4, 6],
                            [2, 1],
                            [5, 2],
                            [4, 5],
                            [3, 7], this.poses.wake64
                        ],
                        Objects64: [
                            [-2, 4],
                            [0, 5],
                            [1, 3],
                            [2, 4],
                            [-2, 2, this.poses.flagbuoy],
                            [3, 2, this.poses.oceanbuoy],
                            [-2, 6, this.poses.scuba], this.poses.rocks
                        ]
                    },
                    small1: {
                        Sandbar256: [
                            [0, 4], this.poses.sandbar
                        ],
                        Wake192: [
                            [-2, 3], this.poses.wake192
                        ],
                        Objects32: [
                            [.5, 1.5], this.poses.float
                        ],
                        Objects64: [
                            [4, 2], this.poses.flagbuoy
                        ]
                    },
                    small2: {
                        Wake192: [
                            [-2, 5], this.poses.wake192
                        ],
                        Seaweed64: [
                            [2, 3], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-1, 1], this.poses.seaweed192
                        ],
                        Objects32: [
                            [-4.5, 2.5], this.poses.wakebuoy
                        ],
                        Objects64: [
                            [-2, 2],
                            [0, 3],
                            [4, 1, this.poses.oceanbuoy], this.poses.rocks
                        ]
                    },
                    small3: {
                        Seaweed64: [
                            [-4, 2],
                            [1, 1], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [1, 5], this.poses.seaweed192
                        ],
                        Objects64: [
                            [-1, 3],
                            [4, 2], this.poses.logs
                        ],
                        Docks64: [
                            [-3, 4], this.poses.dock.solo
                        ]
                    },
                    small4: {
                        Wake192: [
                            [2, 5], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-1, 1], this.poses.seaweed64
                        ],
                        Objects64: [
                            [-4, 1],
                            [-3, 2],
                            [-1, 5],
                            [0, 2],
                            [-4, 4, this.poses.scuba],
                            [2, 2, this.poses.scuba],
                            [4, 1, this.poses.rocks], this.poses.coral
                        ]
                    },
                    small6: {
                        Sandbar256: [
                            [1, 1], this.poses.sandbar
                        ],
                        Seaweed64: [
                            [-4, 3],
                            [-1, 5],
                            [1, 4],
                            [3, 5], this.poses.seaweed64
                        ],
                        Objects32: [
                            [-3.5, 1.5], this.poses.float
                        ],
                        Objects64: [
                            [-2, 3],
                            [-4, 5, this.poses.flagbuoy], this.poses.logs
                        ]
                    },
                    small7: {
                        Wake64: [
                            [-1, 1],
                            [-2, 5],
                            [1, 4], this.poses.wake64
                        ],
                        Objects64: [
                            [-4, 1],
                            [-2, 2],
                            [-3, 3],
                            [1, 5],
                            [2, 2],
                            [3, 1],
                            [4, 4], this.poses.coral
                        ]
                    },
                    small8: {
                        Wake64: [
                            [-2, 1],
                            [-4, 3],
                            [-1, 4],
                            [1, 5],
                            [3, 3], this.poses.wake64
                        ],
                        Objects64: [
                            [-4, 1],
                            [-3, 4],
                            [0, 2],
                            [3, 1],
                            [4, 4], this.poses.flagbuoy
                        ]
                    },
                    small9: {
                        Seaweed64: [
                            [-4, 4],
                            [3, 2], this.poses.seaweed64
                        ],
                        Objects64: [
                            [-1, 1],
                            [4, 4, this.poses.flagbuoy],
                            [-2, 3, this.poses.posts], this.poses.rocks
                        ],
                        Docks64: [
                            [-1, 5, 1],
                            [1, 5, 3],
                            [1, 3, 5], this.poses.dock.solo
                        ]
                    },
                    small10: {
                        Wake64: [
                            [4, 1], this.poses.wake64
                        ],
                        Objects64: [
                            [-3, 1],
                            [3, 3], this.poses.rocks
                        ],
                        Docks64: [
                            [0, 1, 5],
                            [0, 3, 3],
                            [-2, 3, 10],
                            [-4, 3, 6],
                            [-4, 5, 1],
                            [-2, 5, 2],
                            [0, 5, 9],
                            [2, 5, 3], this.poses.dock.solo
                        ]
                    },
                    small11: {
                        Seaweed64: [
                            [-3, 2],
                            [3, 4], this.poses.seaweed64
                        ],
                        Objects64: [
                            [-2, 4],
                            [-1, 2],
                            [0, 3],
                            [1, 4],
                            [1, 1],
                            [2, 2], this.poses.rocks
                        ]
                    },
                    small12: {
                        Seaweed64: [
                            [0, 4], this.poses.seaweed64
                        ],
                        Objects64: [
                            [-3, 1],
                            [1, 1],
                            [-3, 4],
                            [3, 4], this.poses.rocks
                        ],
                        Docks64: [
                            [-2, 3, 1],
                            [0, 3, 10],
                            [2, 3, 3], this.poses.dock.solo
                        ]
                    },
                    small13: {
                        Sandbar256: [
                            [0, 2], this.poses.sandbar
                        ],
                        Wake64: [
                            [-4, 2],
                            [3, 1], this.poses.wake64
                        ],
                        Wake192: [
                            [0, 5], this.poses.wake192
                        ],
                        Objects64: [
                            [0, 1],
                            [-3, 3],
                            [3, 4],
                            [0, 3, this.poses.rocks], this.poses.coral
                        ]
                    },
                    small14: {
                        Seaweed64: [
                            [-1, 1],
                            [-4, 4],
                            [1, 5], this.poses.seaweed64
                        ],
                        Objects32: [
                            [-4.5, 1.5],
                            [3.5, .5], this.poses.wakebuoy
                        ],
                        Objects64: [
                            [1, 1],
                            [0, 4],
                            [3, 4], this.poses.rocks
                        ],
                        Docks64: [
                            [-2, 5, 4],
                            [-2, 3, 6],
                            [0, 3, 8],
                            [2, 3, 3], this.poses.dock.solo
                        ]
                    },
                    small16: {
                        Seaweed64: [
                            [2, 1],
                            [-4, 4],
                            [3, 3], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-2, 2],
                            [0, 5], this.poses.seaweed192
                        ],
                        Objects64: [
                            [-2, 3, this.poses.logs],
                            [2, 2], this.poses.rocks
                        ]
                    },
                    small17: {
                        Seaweed64: [
                            [-4, 5],
                            [0, 3],
                            [4, 2], this.poses.seaweed64
                        ],
                        Objects64: [
                            [-3, 3],
                            [-1, 2],
                            [-2, 5],
                            [1, 4],
                            [-2, 4, this.poses.posts],
                            [3, 1, this.poses.oceanbuoy], this.poses.rocks
                        ]
                    },
                    medium19: {
                        Sandbar256: [
                            [-2, 2], this.poses.sandbar
                        ],
                        Seaweed64: [
                            [4, 3], this.poses.seaweed64
                        ],
                        Objects64: [
                            [-5, 7],
                            [-3, 5],
                            [3, 1, this.poses.flagbuoy], this.poses.coral
                        ],
                        Docks64: [
                            [-1, 4, 5],
                            [-1, 6, 1],
                            [1, 6, 2],
                            [3, 6, 3], this.poses.dock.solo
                        ]
                    },
                    tiny1: {
                        Seaweed192: [
                            [0, 3], this.poses.seaweed192
                        ],
                        Objects64: [
                            [-1, 1, this.poses.scuba],
                            [2, 1], this.poses.rocks
                        ]
                    },
                    tiny2: {
                        Seaweed64: [
                            [-2, 2],
                            [2, 1], this.poses.seaweed64
                        ],
                        Objects64: [
                            [0, 2, this.poses.coral],
                            [2, 3], this.poses.rocks
                        ]
                    },
                    tiny3: {
                        Seaweed192: [
                            [0, 1], this.poses.seaweed192
                        ],
                        Objects32: [
                            [-2, 2], this.poses.float
                        ],
                        Objects64: [
                            [0, 2],
                            [2, 3], this.poses.rocks
                        ]
                    },
                    tiny4: {
                        Seaweed64: [
                            [0, 3],
                            [2, 2], this.poses.seaweed64
                        ],
                        Objects64: [
                            [-2, 2],
                            [2, 0], this.poses.rocks
                        ]
                    },
                    tiny5: {
                        Wake64: [
                            [-2, 2], this.poses.wake64
                        ],
                        Seaweed64: [
                            [1, 1],
                            [2, 3], this.poses.seaweed64
                        ],
                        Objects32: [
                            [-1, 3], this.poses.float
                        ]
                    },
                    tiny6: {
                        Seaweed64: [
                            [0, 1], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [0, 3], this.poses.seaweed192
                        ],
                        Docks64: [
                            [1, 2], this.poses.dock.solo
                        ]
                    },
                    tiny7: {
                        Objects64: [
                            [-2, 1],
                            [0, 1],
                            [2, 3],
                            [-1, 2, this.poses.coral], this.poses.rocks
                        ]
                    },
                    tiny8: {
                        Objects64: [
                            [-2, 1],
                            [1, 2],
                            [2, 3],
                            [-1, 3, this.poses.posts],
                            [2, 1, this.poses.posts], this.poses.coral
                        ]
                    },
                    tiny9: {
                        Seaweed64: [
                            [-1, 3], this.poses.seaweed64
                        ],
                        Objects64: [
                            [0, 1],
                            [2, 1],
                            [-2, 1, this.poses.coral],
                            [1, 2, this.poses.coral], this.poses.solids
                        ]
                    },
                    tiny10: {
                        Objects64: [
                            [-2, 1, this.poses.oceanbuoy],
                            [0, 2],
                            [2, 1],
                            [1, 3], this.poses.rocks
                        ]
                    },
                    tiny11: {
                        Objects32: [
                            [0, 1], this.poses.float
                        ],
                        Objects64: [
                            [-2, 1],
                            [2, 2, this.poses.oceanbuoy], this.poses.logs
                        ],
                        Docks64: [
                            [-2, 3, 1],
                            [0, 3, 3], this.poses.dock.solo
                        ]
                    },
                    tiny12: {
                        Objects64: [
                            [-2, 1],
                            [-2, 3],
                            [2, 1],
                            [1, 3],
                            [0, 2, this.poses.sign], this.poses.rocks
                        ]
                    },
                    tiny13: {
                        Objects64: [
                            [-2, 1, this.poses.scuba],
                            [0, 2],
                            [1, 1],
                            [-2, 3],
                            [2, 3, this.poses.logs], this.poses.rocks
                        ]
                    },
                    tiny14: {
                        Objects64: [
                            [-2, 1],
                            [0, 2],
                            [2, 2], this.poses.rocks
                        ]
                    },
                    tiny15: {
                        Objects64: [
                            [-1, 1], this.poses.posts
                        ],
                        Docks64: [
                            [-2, 3, 1],
                            [0, 3, 9],
                            [2, 3, 3],
                            [2, 1, 5], this.poses.dock.solo
                        ]
                    },
                    tiny16: {
                        Wake64: [
                            [-2, 1],
                            [-1, 3],
                            [2, 1], this.poses.wake64
                        ],
                        Objects64: [
                            [0, 1], this.poses.scuba
                        ]
                    },
                    tiny17: {
                        Objects64: [
                            [-2, 1],
                            [2, 1],
                            [1, 3],
                            [0, 2, this.poses.posts], this.poses.coral
                        ]
                    },
                    tiny18: {
                        Wake64: [
                            [-1, 1], this.poses.wake64
                        ],
                        Objects64: [
                            [-2, 3],
                            [2, 1],
                            [0, 2, this.poses.posts], this.poses.rocks
                        ]
                    },
                    small19: {
                        Objects64: [
                            [-4, 2],
                            [-2, 1],
                            [0, 3],
                            [2, 4],
                            [4, 3],
                            [-3, 5, this.poses.coral], this.poses.rocks
                        ]
                    },
                    large18: {
                        Wake64: [
                            [-2, 4],
                            [-5, 7],
                            [-1, 5],
                            [1, 8], this.poses.wake64
                        ],
                        Seaweed64: [
                            [-6, 2],
                            [-2, 2],
                            [-4, 4],
                            [-7, 6],
                            [-3, 11], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [5, 4], this.poses.seaweed192
                        ],
                        Objects32: [
                            [6, 6], this.poses.ring
                        ],
                        Objects64: [
                            [-8, 3],
                            [-5, 5],
                            [-3, 2],
                            [-2, 4],
                            [-6, 5],
                            [-4, 6],
                            [-8, 6],
                            [-2, 10],
                            [3, 3],
                            [5, 2],
                            [4, 6],
                            [8, 4],
                            [-5, 1, this.poses.logs],
                            [5, 5, this.poses.oceanbuoy], this.poses.rocks
                        ]
                    }
                }, this.dog = {
                    dog1: {
                        Sandbar256: [
                            [7, 4], this.poses.sandbar
                        ],
                        Seaweed64: [
                            [-7, 2],
                            [-4, 1],
                            [5, 2],
                            [7, 3],
                            [5, 7], this.poses.seaweed64
                        ],
                        Objects32: [
                            [1.5, 5.5], this.poses.ball
                        ],
                        Objects64: [
                            [-4, 7],
                            [3, 6], this.poses.rocks
                        ],
                        Docks64: [
                            [-10, 6, 1],
                            [-8, 6, 10],
                            [-6, 6, 3],
                            [-6, 4, 6],
                            [-4, 4, 3], this.poses.dock.solo
                        ],
                        Dog64: [
                            [-1, 6], this.poses.dog
                        ]
                    },
                    dog2: {
                        Wake64: [
                            [-10, 5],
                            [-8, 6],
                            [-10, 8],
                            [10, 5],
                            [8, 7],
                            [10, 8], this.poses.wake64
                        ],
                        Seaweed64: [
                            [-8, 8],
                            [-6, 9],
                            [3, 7],
                            [6, 8], this.poses.seaweed64
                        ],
                        Objects32: [
                            [-.5, 7.5], this.poses.ball
                        ],
                        Objects64: [
                            [0, .5],
                            [-5, 3],
                            [-6, 4],
                            [-6, 6],
                            [2, 5],
                            [3, 3],
                            [5, 2],
                            [6, 4],
                            [6, 6], this.poses.rocks
                        ],
                        Dog64: [
                            [-2, 6], this.poses.dog
                        ]
                    }
                }, this.passive = {
                    small15: {
                        Wake64: [
                            [-3, 2],
                            [2, 5], this.poses.wake64
                        ],
                        Whirlpool128: [
                            [0, 3], this.poses.whirlpool
                        ],
                        Objects32: [
                            [-3.5, 4.5],
                            [-1.5, 1.5],
                            [.5, .5],
                            [-.5, 5.5],
                            [2.5, 1.5],
                            [3.5, 3.5], this.poses.float
                        ]
                    },
                    medium15: {
                        Seaweed64: [
                            [-3, 2],
                            [-4, 4], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [1, 3],
                            [-3, 6],
                            [3, 5], this.poses.seaweed192
                        ],
                        Objects32: [
                            [-5, 1],
                            [5, 2], this.poses.wakebuoy
                        ]
                    },
                    medium16: {
                        Wake64: [
                            [-4, 3],
                            [-5, 5],
                            [2, 6],
                            [5, 4], this.poses.wake64
                        ],
                        Wake192: [
                            [2, 2],
                            [-2, 7], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-3, 5],
                            [4, 6], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [1, 4], this.poses.seaweed192
                        ]
                    },
                    medium17: {
                        Wake64: [
                            [-3, 6], this.poses.wake64
                        ],
                        Wake192: [
                            [0, 4],
                            [3, 6], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-5, 4],
                            [3, 2],
                            [4, 4], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-2, 2], this.poses.seaweed192
                        ],
                        Objects32: [
                            [-4, 1],
                            [-1, 5],
                            [5, 2], this.poses.float
                        ]
                    },
                    medium18: {
                        Wake64: [
                            [-4, 5],
                            [-1, 3],
                            [2, 7], this.poses.wake64
                        ],
                        Wake192: [
                            [3, 5],
                            [2, 1], this.poses.wake192
                        ],
                        Whirlpool128: [
                            [-4, 2],
                            [-1, 6],
                            [2, 3], this.poses.whirlpool
                        ]
                    }
                }, this.powerup = {
                    large5: {
                        Sandbar256: [
                            [-3, 2],
                            [5, 8], this.poses.sandbar
                        ],
                        Wake192: [
                            [3, 5], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-7, 2],
                            [-6, 10],
                            [-5, 4],
                            [1, 1],
                            [3, 11],
                            [7, 10], this.poses.seaweed64
                        ],
                        Whirlpool128: [
                            [-1, 6], this.poses.whirlpool
                        ],
                        Powerup64: [
                            [-2, 9], this.poses.powerup
                        ],
                        Objects32: [
                            [-7.5, 4.5],
                            [7.5, 6.5], this.poses.float
                        ],
                        Objects64: [
                            [-8, 9],
                            [-7, 7],
                            [-5, 8], this.poses.solids
                        ]
                    },
                    large6: {
                        Seaweed64: [
                            [-8, 3],
                            [-3, 11],
                            [7, 2],
                            [7, 10],
                            [8, 6], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-3, 1], this.poses.seaweed192
                        ],
                        Powerup64: [
                            [-5, 9], this.poses.powerup
                        ],
                        Objects32: [
                            [-8, 7.5],
                            [-7.5, 10.5], this.poses.wakebuoy
                        ],
                        Objects64: [
                            [-7, 7], this.poses.scuba
                        ],
                        Docks64: [
                            [-6, 3, 1],
                            [-4, 3, 10],
                            [-2, 3, 3],
                            [-2, 9, 1],
                            [0, 9, 7],
                            [0, 11, 1],
                            [2, 11, 3],
                            [4, 4, 1],
                            [6, 4, 7],
                            [6, 6, 5],
                            [6, 8, 4], this.poses.dock.solo
                        ]
                    },
                    large7: {
                        Wake64: [
                            [-6, 1],
                            [8, 4],
                            [-1, 11], this.poses.wake64
                        ],
                        Wake192: [
                            [-5, 3], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-7, 5],
                            [-7, 11],
                            [-5, 7],
                            [4, 1],
                            [6, 2],
                            [8, 1],
                            [6, 5],
                            [7, 10], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-5, 9], this.poses.seaweed192
                        ],
                        Powerup64: [
                            [2, 7], this.poses.powerup
                        ],
                        Objects64: [
                            [-8, 1],
                            [-5, 4],
                            [-2, 7],
                            [-4, 11],
                            [2, 1],
                            [4, 4],
                            [5, 7],
                            [4, 11], this.poses.flagbuoy
                        ]
                    },
                    large13: {
                        Wake64: [
                            [-8, 5],
                            [-6, 6],
                            [-8, 8],
                            [8, 5],
                            [6, 7],
                            [8, 8], this.poses.wake64
                        ],
                        Seaweed64: [
                            [-6, 9],
                            [-4, 10],
                            [5, 11],
                            [6, 4], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [4, 9], this.poses.seaweed192
                        ],
                        Powerup64: [
                            [-2, 5],
                            [2, 5], this.poses.powerup
                        ],
                        Objects32: [
                            [-4.5, 1.5],
                            [2.5, .5],
                            [6.5, 2.5], this.poses.wakebuoy
                        ],
                        Objects64: [
                            [-2, 2],
                            [-3, 3],
                            [-4, 4],
                            [-4, 6],
                            [2, 2],
                            [3, 3],
                            [4, 4],
                            [4, 6],
                            [-5, 3, this.poses.logs],
                            [-3, 8, this.poses.logs],
                            [3, 7, this.poses.logs], this.poses.rocks
                        ]
                    },
                    large14: {
                        Seaweed64: [
                            [-7, 3],
                            [-3, 4],
                            [-3, 8],
                            [-4, 11],
                            [-1, 2],
                            [5, 4],
                            [7, 8], this.poses.seaweed64
                        ],
                        Powerup64: [
                            [-1, 6], this.poses.powerup
                        ],
                        Objects32: [
                            [.5, 1.5],
                            [3.5, 3.5],
                            [7.5, 2.5],
                            [4.5, 8.5], this.poses.floater
                        ],
                        Objects64: [
                            [-6, 4],
                            [2, 5],
                            [0, 11],
                            [-8, 4, this.poses.coral],
                            [-3, 2, this.poses.coral], this.poses.posts
                        ],
                        Docks64: [
                            [-5, 1, 6],
                            [-3, 1, 9],
                            [-1, 1, 3],
                            [-5, 3, 4],
                            [-6, 6, 6],
                            [-4, 6, 3],
                            [-6, 8, 5],
                            [-6, 10, 2],
                            [-8, 10, 1],
                            [-4, 10, 10],
                            [-2, 10, 3],
                            [4, 6, 1],
                            [6, 6, 10],
                            [8, 6, 3], this.poses.dock.solo
                        ]
                    },
                    medium2: {
                        Seaweed64: [
                            [-4, 6],
                            [0, 2], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [1, 4], this.poses.seaweed192
                        ],
                        Powerup64: [
                            [2, 7], this.poses.powerup
                        ],
                        Objects64: [
                            [2, 0],
                            [5, 1],
                            [3, 2],
                            [5, 4],
                            [-3, 3],
                            [-5, 4],
                            [-2, 6],
                            [-4, 7], this.poses.rocks
                        ]
                    },
                    medium3: {
                        Seaweed64: [
                            [-4, 6], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-1, 4], this.poses.seaweed192
                        ],
                        Powerup64: [
                            [-1, 7], this.poses.powerup
                        ],
                        Objects32: [
                            [3.5, 6.5], this.poses.floater
                        ],
                        Objects64: [
                            [-3, 2],
                            [-5, 3],
                            [0, 1],
                            [2, 7],
                            [5, 2, this.poses.flagbuoy], this.poses.rocks
                        ]
                    },
                    medium9: {
                        Seaweed64: [
                            [2, 3],
                            [-2, 7], this.poses.seaweed64
                        ],
                        Powerup64: [
                            [0, 5], this.poses.powerup
                        ],
                        Objects64: [
                            [-4, 2],
                            [3, 6], this.poses.rocks
                        ],
                        Docks64: [
                            [-5, 4, 5],
                            [-5, 6, 1],
                            [-3, 6, 3],
                            [1, 1, 1],
                            [3, 1, 10],
                            [5, 1, 3],
                            [4, 5], this.poses.dock.solo
                        ]
                    },
                    medium11: {
                        Whirlpool128: [
                            [-3, 2],
                            [3, 3], this.poses.whirlpool
                        ],
                        Powerup64: [
                            [0, 5], this.poses.powerup
                        ],
                        Objects64: [
                            [-5, 6],
                            [-4, 7],
                            [-2, 6],
                            [2, 6],
                            [4, 7],
                            [5, 5], this.poses.rocks
                        ]
                    },
                    small18: {
                        Seaweed64: [
                            [-2, 3],
                            [4, 5], this.poses.seaweed64
                        ],
                        Powerup64: [
                            [1, 4], this.poses.powerup
                        ],
                        Objects32: [
                            [-2.5, .5], this.poses.wakebuoy
                        ],
                        Docks64: [
                            [-4, 3, 5],
                            [-4, 5, 1],
                            [-2, 5, 3],
                            [2, 1, 1],
                            [4, 1, 7],
                            [4, 3, 4], this.poses.dock.solo
                        ]
                    },
                    large17: {
                        Seaweed64: [
                            [-8, 1],
                            [-7, 6],
                            [-6, 11],
                            [5, 7],
                            [9, 3], this.poses.seaweed64
                        ],
                        Powerup64: [
                            [1, 7], this.poses.powerup
                        ],
                        Objects32: [
                            [-2, 1],
                            [3, 0],
                            [-1, 9],
                            [3, 8], this.poses.wakebuoy
                        ],
                        Objects64: [
                            [-6, 2],
                            [-3, 4],
                            [7, 6],
                            [-9, 6, this.poses.posts], this.poses.rocks
                        ],
                        Docks64: [
                            [-7, 4, 1],
                            [-5, 4, 7],
                            [-5, 6, 1],
                            [-3, 6, 2],
                            [-1, 6, 3],
                            [3, 6, 4],
                            [3, 4, 6],
                            [5, 4, 2],
                            [7, 4, 3],
                            [7, 2, 5],
                            [-7, 9], this.poses.dock.solo
                        ]
                    }
                }, this.ramp = {
                    large1: {
                        Objects32: [
                            [6.5, .5],
                            [-8.5, 1.5], this.poses.wakebuoy
                        ],
                        Ramp64: [
                            [5, 4],
                            [-1, 8],
                            [-6, 6], this.poses.ramp
                        ],
                        Seaweed64: [
                            [-8, 3],
                            [-8, 10],
                            [8, 2],
                            [6, 8], this.poses.seaweed64
                        ],
                        Objects64: [
                            [-8, 6],
                            [-5, 9],
                            [1, 6],
                            [7, 4],
                            [-1, 2, this.poses.posts],
                            [3, 11, this.poses.posts], this.poses.rocks
                        ],
                        Docks64: [
                            [-7, 8, 1],
                            [-5, 8, 9],
                            [-3, 8, 7],
                            [-3, 10, 1],
                            [-1, 10, 8],
                            [1, 10, 3],
                            [1, 8, 6],
                            [3, 8, 3],
                            [3, 6, 6],
                            [5, 6, 10],
                            [7, 6, 3], this.poses.dock.solo
                        ]
                    },
                    large10: {
                        Sandbar256: [
                            [-4, 2],
                            [5, 4], this.poses.sandbar
                        ],
                        Wake64: [
                            [-8, 5],
                            [-2, 7],
                            [-3, 11],
                            [3, 9],
                            [8, 8], this.poses.wake64
                        ],
                        Wake192: [
                            [-5, 10],
                            [4, 11],
                            [4, 2], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-5, 7],
                            [6, 9], this.poses.seaweed64
                        ],
                        Ramp64: [
                            [0, 9], this.poses.ramp
                        ],
                        Objects32: [
                            [-1.5, 9.5],
                            [1.5, 9.5], this.poses.floater
                        ],
                        Objects64: [
                            [-3, 5],
                            [4, 7], this.poses.coral
                        ]
                    },
                    large11: {
                        Sandbar256: [
                            [-4, 2, 1],
                            [5, 10, 2], this.poses.sandbar
                        ],
                        Wake64: [
                            [-2, 11],
                            [7, 5],
                            [1, 9], this.poses.wake64
                        ],
                        Wake192: [
                            [0, 1],
                            [-5, 9], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-8, 7],
                            [-4, 11],
                            [-1, 10], this.poses.seaweed64
                        ],
                        Ramp64: [
                            [2, 6], this.poses.ramp
                        ],
                        Objects64: [
                            [-5, 4],
                            [0, 6],
                            [3, 9],
                            [5, 6, this.poses.rocks], this.poses.coral
                        ],
                        Docks64: [
                            [-2, 4, 5],
                            [-2, 6, 3],
                            [-4, 6, 6],
                            [-4, 8, 1],
                            [-2, 8, 2],
                            [0, 8, 9],
                            [2, 8, 2],
                            [4, 8, 10],
                            [6, 8, 7],
                            [6, 10, 4], this.poses.dock.solo
                        ]
                    },
                    large16: {
                        Wake64: [
                            [-6, 2],
                            [-7, 4],
                            [-6, 10],
                            [1, 11],
                            [6, 4],
                            [7, 1], this.poses.wake64
                        ],
                        Seaweed64: [
                            [-5, 5],
                            [-6, 7],
                            [-4, 9],
                            [-2, 8],
                            [4, 6],
                            [6, 7], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [4, 9], this.poses.seaweed192
                        ],
                        Ramp64: [
                            [0, 8], this.poses.ramp
                        ],
                        Objects64: [
                            [-3, 4],
                            [-2, 6],
                            [3, 4],
                            [2, 6],
                            [-4, 2, this.poses.oceanbuoy],
                            [4, 2, this.poses.oceanbuoy],
                            [-5, 6, this.poses.rocks],
                            [-4, 7, this.poses.rocks],
                            [3, 7, this.poses.logs], this.poses.flagbuoy
                        ]
                    },
                    medium8: {
                        Ramp64: [
                            [-4, 3],
                            [4, 2], this.poses.ramp
                        ],
                        Objects64: [
                            [-5, 5],
                            [-2, 7],
                            [-1, 3],
                            [1, 5],
                            [4, 6],
                            [5, 4], this.poses.rocks
                        ]
                    },
                    medium12: {
                        Sandbar256: [
                            [-2, 5], this.poses.sandbar
                        ],
                        Wake64: [
                            [-4, 1],
                            [4, 4], this.poses.wake64
                        ],
                        Seaweed64: [
                            [2, 1],
                            [5, 2],
                            [2, 5], this.poses.seaweed64
                        ],
                        Ramp64: [
                            [-1, 3], this.poses.ramp
                        ],
                        Objects64: [
                            [3, 2], this.poses.flagbuoy
                        ]
                    },
                    medium13: {
                        Seaweed64: [
                            [-5, 2],
                            [-1, 7],
                            [4, 7], this.poses.seaweed64
                        ],
                        Ramp64: [
                            [-3, 6],
                            [1, 6], this.poses.ramp
                        ],
                        Objects32: [
                            [-.5, .5], this.poses.wakebuoy
                        ],
                        Objects64: [
                            [4, 2],
                            [-1, 5, this.poses.posts], this.poses.rocks
                        ],
                        Docks64: [
                            [-5, 4, 5],
                            [-5, 6, 4],
                            [3, 6, 4],
                            [3, 4, 6],
                            [5, 4, 3], this.poses.dock.solo
                        ]
                    },
                    medium14: {
                        Seaweed64: [
                            [-2, 2],
                            [-5, 5],
                            [5, 2], this.poses.seaweed64
                        ],
                        Ramp64: [
                            [-1, 7], this.poses.ramp
                        ],
                        Objects64: [
                            [-2, 0],
                            [-4, 1],
                            [-5, 3],
                            [5, 5],
                            [4, 7],
                            [4, 3, this.poses.logs], this.poses.rocks
                        ],
                        Docks64: [
                            [3, 5], this.poses.dock.solo
                        ]
                    }
                }, this.tentacle = {
                    large4: {
                        Wake64: [
                            [-8, 7],
                            [-2, 9],
                            [0, 4],
                            [3, 6],
                            [3, 10],
                            [7, 11], this.poses.wake64
                        ],
                        Wake192: [
                            [-4, 6],
                            [6, 8],
                            [-5, 11], this.poses.wake192
                        ],
                        Whirlpool128: [
                            [-3, 4],
                            [3, 3],
                            [0, 7], this.poses.whirlpool
                        ],
                        Tentacle64: [
                            [-6, 9],
                            [5, 10], this.poses.tentacle
                        ],
                        Objects64: [
                            [-1, 0],
                            [1, 0],
                            [-1, 1, this.poses.sign], this.poses.rocks
                        ]
                    },
                    large15: {
                        Wake64: [
                            [-6, 4],
                            [-3, 3],
                            [3, 4], this.poses.wake64
                        ],
                        Seaweed64: [
                            [-7, 7],
                            [-2, 7],
                            [-6, 10],
                            [3, 8],
                            [7, 7], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-1, 9],
                            [3, 11], this.poses.seaweed192
                        ],
                        Tentacle64: [
                            [-5, 8], this.poses.tentacle
                        ],
                        Objects64: [
                            [-1, 4, this.poses.sign],
                            [7, 2, this.poses.flagbuoy],
                            [7, 11, this.poses.flagbuoy],
                            [-8, 5],
                            [-8, 7],
                            [-7, 8],
                            [8, 8], this.poses.rocks
                        ],
                        Docks64: [
                            [1, 5, 5],
                            [1, 7, 1],
                            [3, 7, 10],
                            [5, 7, 7],
                            [5, 9, 4],
                            [5, 5, 6],
                            [7, 5, 3], this.poses.dock.solo
                        ]
                    },
                    medium1: {
                        Wake64: [
                            [-2, 2],
                            [2, 1], this.poses.wake64
                        ],
                        Tentacle64: [
                            [2, 6], this.poses.tentacle
                        ],
                        Objects32: [
                            [-1.5, 4.5], this.poses.wakebuoy
                        ],
                        Objects64: [
                            [-5, 4],
                            [-4, 5],
                            [-3, 6],
                            [-5, 7],
                            [5, 3],
                            [4, 2, this.poses.sign], this.poses.rocks
                        ]
                    },
                    medium5: {
                        Seaweed64: [
                            [-4, 2],
                            [-5, 5],
                            [2, 1], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-2, 7], this.poses.seaweed192
                        ],
                        Tentacle64: [
                            [3, 3], this.poses.tentacle
                        ],
                        Objects64: [
                            [5, 4],
                            [4, 1],
                            [5, 2],
                            [-5, 3],
                            [-3, 4, this.poses.sign], this.poses.rocks
                        ]
                    },
                    small5: {
                        Wake64: [
                            [-1, 2], this.poses.wake64
                        ],
                        Seaweed64: [
                            [-2, 3],
                            [3, 2],
                            [4, 4], this.poses.seaweed64
                        ],
                        Tentacle64: [
                            [2, 3], this.poses.tentacle
                        ],
                        Objects32: [
                            [.5, 4.5], this.poses.ring
                        ],
                        Objects64: [
                            [-3, 2], this.poses.sign
                        ]
                    }
                }, this.cove = {
                    coveLarge: {
                        Wake64: [
                            [-14, 5],
                            [-17, 10],
                            [-13, 13],
                            [-4, 9],
                            [-5, 12],
                            [-1, 15],
                            [4, 8],
                            [7, 11],
                            [16, 23], this.poses.wake64
                        ],
                        Wake192: [
                            [-12, 2],
                            [-18, 7],
                            [3, 1],
                            [8, 2],
                            [-16, 21],
                            [-8, 19],
                            [-7, 24],
                            [18, 8],
                            [20, 11],
                            [22, 21],
                            [1, 21], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-8, 2],
                            [-6, 4],
                            [-4, 5],
                            [-8, 6],
                            [-11, 6],
                            [-14, 9],
                            [-12, 10],
                            [-15, 12],
                            [-16, 14],
                            [-13, 15],
                            [-18, 18],
                            [2, 5],
                            [0, 26],
                            [5, 25],
                            [5, 21],
                            [8, 19],
                            [10, 20],
                            [10, 23],
                            [13, 16],
                            [17, 13],
                            [17, 16],
                            [17, 19],
                            [19, 14],
                            [20, 12], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [0, 3],
                            [4, 23], this.poses.seaweed192
                        ],
                        Whirlpool128: [
                            [-3, 12],
                            [1, 10],
                            [3, 14], this.poses.whirlpool
                        ],
                        SwimTrigger: [
                            [0, 12],
                            [1]
                        ],
                        Tentacle64: [
                            [-1, 6],
                            [-5, 7],
                            [-8, 9],
                            [-9, 12],
                            [-8, 16],
                            [4, 18],
                            [8, 16],
                            [11, 12], this.poses.tentacle
                        ],
                        Objects32: [
                            [-12.5, 18.5], this.poses.ring
                        ],
                        Objects64: [
                            [-11, 3, this.poses.logs],
                            [-12, 7, this.poses.logs],
                            [-16, 8, this.poses.logs],
                            [14, 18, this.poses.logs],
                            [2, 25, this.poses.logs],
                            [19, 15, this.poses.logs],
                            [-14, 17, this.poses.woodenboat],
                            [7, 3, this.poses.sign],
                            [17, 8, this.poses.sign],
                            [1, 4],
                            [-2, 2],
                            [-4, 3],
                            [-5, 2],
                            [-3, 4],
                            [-7, 3],
                            [-9, 4],
                            [-10, 2],
                            [-7, 5],
                            [-10, 5],
                            [-12, 4],
                            [-10, 7],
                            [-13, 6],
                            [-13, 8],
                            [-13, 11],
                            [-15, 7],
                            [-15, 10],
                            [-19, 12],
                            [-20, 13],
                            [-18, 14],
                            [-10, 15],
                            [-11, 16],
                            [16, 12],
                            [12, 14],
                            [14, 15],
                            [13, 16],
                            [15, 17],
                            [18, 18],
                            [13, 19],
                            [11, 20],
                            [8, 20],
                            [6, 21],
                            [10, 21],
                            [8, 22],
                            [12, 22],
                            [14, 20],
                            [7, 26], this.poses.rocks
                        ],
                        Docks64: [
                            [-16, 17], this.poses.dock.solo
                        ]
                    }
                }, this.buoyFirst = {
                    buoyFirst: {
                        Buoy64: [
                            [-4, 3.5],
                            [4, 3.5], this.poses.markerbuoy
                        ],
                        BuoyGuide32: [
                            [-8.5, -1.5],
                            [-7.5, -.5],
                            [-6.5, .5],
                            [-5.5, 1.5],
                            [-4.5, 2.5],
                            [8.5, -1.5],
                            [7.5, -.5],
                            [6.5, .5],
                            [5.5, 1.5],
                            [4.5, 2.5],
                            [-4, 5],
                            [-4.5, 6],
                            [-5.25, 7],
                            [4, 5],
                            [3.5, 6],
                            [2.75, 7], this.poses.guidebuoy
                        ],
                        BuoyTrigger: [
                            [0, 4.5], 1
                        ]
                    }
                }, this.buoyLeft = {
                    buoyLeft: {
                        Buoy64: [
                            [-4.25, 3.5],
                            [3.75, 3.5], this.poses.markerbuoy
                        ],
                        BuoyGuide32: [
                            [-2, .5],
                            [-3.175, 1.5],
                            [-4, 2.5],
                            [-4, 5],
                            [-3.175, 6],
                            [-2, 7],
                            [4, 2.5],
                            [5, 1.75],
                            [5, 5.75],
                            [4, 5], this.poses.guidebuoy
                        ],
                        BuoyTrigger: [
                            [-.25, 4.5], 1
                        ]
                    }
                }, this.buoyRight = {
                    buoyRight: {
                        Buoy64: [
                            [-3.75, 3.5],
                            [4.25, 3.5], this.poses.markerbuoy
                        ],
                        BuoyGuide32: [
                            [2, .5],
                            [3.175, 1.5],
                            [4, 2.5],
                            [4, 5],
                            [3.175, 6],
                            [2, 7],
                            [-4, 2.5],
                            [-5, 1.75],
                            [-5, 5.75],
                            [-4, 5], this.poses.guidebuoy
                        ],
                        BuoyTrigger: [
                            [.25, 4.5], 1
                        ]
                    }
                }, this.buoyRandom = {
                    buoyRandom1: {
                        Objects64: [
                            [-8, 5],
                            [-5, 11],
                            [-3, 1],
                            [-2, 10],
                            [0, 3],
                            [3, 2],
                            [4, 11],
                            [8, 6], this.poses.solids
                        ]
                    },
                    buoyRandom2: {
                        Objects64: [
                            [-8, 9],
                            [-1, 1],
                            [-1, 10],
                            [2, 11],
                            [3, 2],
                            [8, 8], this.poses.solids
                        ]
                    },
                    buoyRandom3: {
                        Objects64: [
                            [-8, 5],
                            [-2, 1],
                            [-2, 10],
                            [0, .5],
                            [2, 11],
                            [3, 1],
                            [7, 5],
                            [8, 7], this.poses.solids
                        ]
                    },
                    buoyRandom4: {
                        Objects64: [
                            [-8, 7],
                            [-2, 2],
                            [-1, 11],
                            [3, 1],
                            [7, 9], this.poses.solids
                        ]
                    },
                    buoyRandom5: {
                        Objects64: [
                            [-8, 5],
                            [-7, 7],
                            [-2, 0],
                            [-1, 11],
                            [0, 10],
                            [1, 1],
                            [3, 11],
                            [7, 6],
                            [8, 4], this.poses.solids
                        ]
                    },
                    buoyRandom6: {
                        Objects64: [
                            [-8, 8],
                            [-3, 2],
                            [-2, 7],
                            [-1, 11],
                            [1, 1],
                            [6, 7],
                            [7, 4], this.poses.solids
                        ]
                    }
                }, this.speedActs = {
                    start: {
                        Sandbar256: [
                            [-8, 25, 1],
                            [9, 22, 2], this.poses.sandbar
                        ],
                        Wake64: [
                            [-10, 23],
                            [-14, 25],
                            [-13, 29],
                            [-2, 26],
                            [3, 27],
                            [14, 26], this.poses.wake64
                        ],
                        Seaweed64: [
                            [-13, 10],
                            [-14, 14],
                            [-8, 13],
                            [-11, 17],
                            [7, 13],
                            [10, 15],
                            [14, 12],
                            [-13, 26],
                            [-8, 29],
                            [-6, 28],
                            [-4, 25],
                            [5, 24],
                            [11, 25],
                            [13, 21], this.poses.seaweed64
                        ],
                        Coin64: [
                            [0, 30], this.poses.coin
                        ],
                        Ramp64: [
                            [-7, 20],
                            [7, 20], this.poses.ramp
                        ],
                        Objects32: [
                            [-6, 22],
                            [6, 26],
                            [9, 21], this.poses.float
                        ],
                        Objects64: [
                            [-10, 28, this.poses.logs],
                            [8, 24, this.poses.logs],
                            [-12, 23, this.poses.coral],
                            [-14, 11],
                            [-17, 14],
                            [-15, 18],
                            [-10, 13],
                            [-8, 15],
                            [-7, 10],
                            [9, 13],
                            [11, 10],
                            [10, 16],
                            [15, 14],
                            [15, 17],
                            [11, 20], this.poses.rocks
                        ],
                        Docks64: [
                            [-16, 16, 1],
                            [-14, 16, 10],
                            [-12, 16, 9],
                            [-10, 16, 3],
                            [-12, 14, 5],
                            [-12, 12, 6],
                            [-10, 12, 2],
                            [-8, 12, 10],
                            [-6, 12, 3],
                            [16, 16, 3],
                            [14, 16, 10],
                            [12, 16, 1],
                            [12, 14, 5],
                            [8, 15],
                            [10, 12, 3],
                            [8, 12, 10],
                            [6, 12, 1], this.poses.dock.solo
                        ]
                    },
                    intro: {
                        Wake64: [
                            [-15, 9],
                            [-6, 10],
                            [-16, 11],
                            [-9, 12],
                            [9, 11],
                            [12, 8],
                            [-17, 21],
                            [-2, 22],
                            [4, 18],
                            [4, 23],
                            [15, 17],
                            [17, 18], this.poses.wake64
                        ],
                        Seaweed64: [
                            [-14, 11],
                            [-7, 12],
                            [6, 11],
                            [14, 9],
                            [15, 11],
                            [-3, 3],
                            [-1, 5],
                            [1, 2],
                            [3, 4],
                            [-13, 17],
                            [-17, 23],
                            [-15, 24],
                            [-7, 22],
                            [-4, 23],
                            [-4, 31],
                            [4, 30],
                            [6, 23],
                            [13, 17],
                            [16, 20],
                            [15, 22], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-10, 10],
                            [9, 9], this.poses.seaweed192
                        ],
                        Powerup64: [
                            [-11, 22], this.poses.powerup
                        ],
                        Coin64: [
                            [11, 22], this.poses.coin
                        ],
                        Ramp64: [
                            [0, 27], this.poses.ramp
                        ],
                        Objects32: [
                            [-16, 9],
                            [-11, 13],
                            [-5, 10],
                            [6, 7],
                            [10, 13],
                            [16, 9], this.poses.float
                        ],
                        Objects64: [
                            [-2, 3, this.poses.oceanbuoy],
                            [15, 18, this.poses.oceanbuoy],
                            [5, 21, this.poses.scuba],
                            [-1, 2],
                            [1, 4],
                            [-5, 17],
                            [-7, 18],
                            [-8, 20],
                            [-4, 19],
                            [-4, 21],
                            [-13, 18],
                            [-14, 19],
                            [-15, 21],
                            [6, 18],
                            [7, 19],
                            [8, 21],
                            [12, 18],
                            [13, 20],
                            [-1, 29],
                            [-2, 30],
                            [2, 30], this.poses.rocks
                        ]
                    },
                    act1a: {
                        Seaweed64: [
                            [-7, 5],
                            [-5, 7],
                            [-10, 8],
                            [7, 6],
                            [10, 8],
                            [7, 9],
                            [-8, 16],
                            [-11, 20],
                            [-6, 20],
                            [-2, 23],
                            [-7, 28],
                            [-3, 29],
                            [3, 25],
                            [5, 19],
                            [5, 30],
                            [8, 28],
                            [9, 15],
                            [-13, 12],
                            [-15, 17],
                            [-16, 21],
                            [-17, 24],
                            [16, 17],
                            [17, 20],
                            [15, 24],
                            [15, 12], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-16, 15],
                            [-14, 27],
                            [16, 15],
                            [16, 26], this.poses.seaweed192
                        ],
                        Whirlpool128: [
                            [-3, 3],
                            [3, 4], this.poses.whirlpool
                        ],
                        Heart64: [
                            [-10, 24], this.poses.heart
                        ],
                        Coin64: [
                            [12, 7], this.poses.coin
                        ],
                        Objects64: [
                            [-9, 6],
                            [-8, 7],
                            [-6, 6],
                            [6, 7],
                            [8, 8],
                            [9, 6],
                            [-9, 17],
                            [-5, 20],
                            [9, 14],
                            [6, 20],
                            [3, 23],
                            [4, 28],
                            [6, 29],
                            [-5, 28],
                            [-3, 27],
                            [-4, 30],
                            [-3, 24, this.poses.logs],
                            [7, 28, this.poses.logs], this.poses.rocks
                        ],
                        Docks64: [
                            [-9, 12, 5],
                            [-9, 14, 3],
                            [-11, 14, 6],
                            [-11, 16, 5],
                            [-11, 18, 3],
                            [-13, 18, 6],
                            [-13, 20, 5],
                            [-13, 22, 5],
                            [-13, 24, 4],
                            [-3, 14, 5],
                            [-3, 16, 5],
                            [-3, 18, 5],
                            [-3, 20, 5],
                            [-3, 22, 3],
                            [-5, 22, 6],
                            [-5, 24, 5],
                            [-5, 26, 3],
                            [-7, 26, 1],
                            [3, 14, 5],
                            [3, 16, 5],
                            [3, 18, 5],
                            [3, 20, 5],
                            [3, 22, 1],
                            [5, 22, 7],
                            [5, 24, 5],
                            [5, 26, 1],
                            [7, 26, 3],
                            [11, 16, 5],
                            [11, 18, 1],
                            [13, 18, 7],
                            [13, 20, 5],
                            [13, 22, 5],
                            [13, 24, 4], this.poses.dock.solo
                        ]
                    },
                    act1b: {
                        Seaweed64: [
                            [0, 4],
                            [-11, 12],
                            [-10, 18],
                            [-4, 17],
                            [-15, 15],
                            [-12, 24],
                            [-1, 20],
                            [0, 30],
                            [1, 25],
                            [3, 20],
                            [4, 16],
                            [10, 20],
                            [12, 12],
                            [15, 5],
                            [-14, 5],
                            [-17, 12],
                            [-16, 17],
                            [-15, 21],
                            [-16, 23],
                            [16, 12],
                            [15, 17],
                            [16, 19],
                            [17, 23], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-16, 8],
                            [16, 9], this.poses.seaweed192
                        ],
                        Whirlpool128: [
                            [-1, 13],
                            [3, 11], this.poses.whirlpool
                        ],
                        Coin64: [
                            [2, 18], this.poses.coin
                        ],
                        Ramp64: [
                            [-8, 7],
                            [8, 7], this.poses.ramp
                        ],
                        Objects64: [
                            [0, 2],
                            [1, 3],
                            [14, 4],
                            [-11, 19],
                            [-5, 20],
                            [-3, 19],
                            [-3, 22],
                            [-4, 23],
                            [2, 16],
                            [4, 18],
                            [5, 17],
                            [5, 20],
                            [-2, 18, this.poses.woodenboat],
                            [13, 13, this.poses.logs],
                            [-14, 14, this.poses.logs], this.poses.rocks
                        ],
                        Docks64: [
                            [-11, 6, 5],
                            [-11, 8, 5],
                            [-11, 10, 1],
                            [-9, 10, 7],
                            [-9, 12, 6],
                            [-5, 12, 3],
                            [-7, 12, 10],
                            [-9, 14, 5],
                            [-9, 16, 3],
                            [-11, 16, 9],
                            [-13, 16, 6],
                            [-13, 18, 5],
                            [-13, 20, 5],
                            [-13, 22, 1],
                            [-11, 22, 3],
                            [11, 6, 5],
                            [11, 8, 5],
                            [11, 10, 3],
                            [9, 10, 6],
                            [9, 12, 5],
                            [9, 14, 2],
                            [7, 14, 1],
                            [11, 14, 7],
                            [11, 16, 5],
                            [11, 18, 1],
                            [13, 18, 7],
                            [13, 20, 5],
                            [13, 22, 3],
                            [11, 22, 1],
                            [-2, 29, 1],
                            [0, 29, 10],
                            [2, 29, 3],
                            [2, 27, 5], this.poses.dock.solo
                        ]
                    },
                    act2a: {
                        Sandbar256: [
                            [5, 4], this.poses.sandbar
                        ],
                        Seaweed64: [
                            [-13, 3],
                            [-11, 4],
                            [-14, 5],
                            [-15, 9],
                            [-11, 9],
                            [17, 12],
                            [-13, 13],
                            [-6, 13],
                            [-16, 14],
                            [-14, 17],
                            [-11, 17],
                            [-7, 16],
                            [-14, 20],
                            [-9, 21],
                            [-6, 21],
                            [-10, 25],
                            [-11, 27],
                            [0, 20],
                            [4, 18],
                            [1, 28],
                            [2, 26],
                            [4, 28],
                            [6, 29],
                            [15, 8],
                            [17, 10],
                            [14, 12],
                            [16, 13],
                            [16, 17],
                            [17, 21],
                            [18, 24],
                            [17, 27],
                            [-18, 6],
                            [-18, 9],
                            [-18, 15], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-14, 7],
                            [-13, 11],
                            [-12, 15],
                            [-10, 19],
                            [-9, 23],
                            [16, 15],
                            [16, 19], this.poses.seaweed192
                        ],
                        Powerup64: [
                            [12, 24], this.poses.powerup
                        ],
                        Coin64: [
                            [7, 9], this.poses.coin
                        ],
                        Objects32: [
                            [-3, 15],
                            [3, 16],
                            [5, 19],
                            [10, 17], this.poses.wakebuoy
                        ],
                        Objects64: [
                            [-3, 13],
                            [-8, 9],
                            [-3, 28],
                            [5, 6],
                            [6, 21],
                            [5, 22],
                            [5, 24],
                            [12, 19],
                            [13, 20],
                            [14, 21],
                            [15, 22],
                            [15, 24],
                            [4, 21, this.poses.logs],
                            [6, 27, this.poses.logs],
                            [14, 26, this.poses.logs],
                            [2, 5, this.poses.coral],
                            [5, 3, this.poses.coral],
                            [8, 6, this.poses.coral], this.poses.rocks
                        ],
                        Docks64: [
                            [-8, 12, 1],
                            [-6, 12, 10],
                            [-4, 12, 3],
                            [-5, 16, 5],
                            [-5, 18, 4],
                            [0, 18, 1],
                            [2, 18, 7],
                            [2, 20, 4], this.poses.dock.solo
                        ]
                    },
                    act2b: {
                        Seaweed64: [
                            [-18, 4],
                            [-5, 4],
                            [-14, 9],
                            [-8, 16],
                            [-15, 26],
                            [-14, 28],
                            [-13, 30],
                            [-11, 27],
                            [12, 12],
                            [16, 10],
                            [18, 14],
                            [8, 3],
                            [9, 6],
                            [6, 8],
                            [3, 8],
                            [4, 10],
                            [2, 11],
                            [5, 12],
                            [6, 15],
                            [4, 16],
                            [1, 17],
                            [3, 21],
                            [0, 21],
                            [-3, 26],
                            [2, 27],
                            [-4, 30],
                            [15, 27],
                            [16, 30],
                            [12, 31], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [2, 14],
                            [2, 19],
                            [0, 23], this.poses.seaweed192
                        ],
                        Heart64: [
                            [12, 17], this.poses.heart
                        ],
                        Coin64: [
                            [-15, 17], this.poses.coin
                        ],
                        Ramp64: [
                            [-8, 6],
                            [13, 8], this.poses.ramp
                        ],
                        Objects64: [
                            [-18, 6],
                            [-13, 7],
                            [-3, 5],
                            [-7, 17],
                            [-6, 12],
                            [-5, 22],
                            [-12, 23],
                            [16, 6],
                            [17, 8],
                            [16, 11],
                            [17, 12],
                            [14, 12],
                            [15, 13],
                            [13, 14],
                            [16, 14],
                            [15, 18],
                            [16, 28],
                            [15, 29],
                            [13, 30],
                            [-12, 13, this.poses.posts],
                            [-4, 13, this.poses.posts], this.poses.rocks
                        ],
                        Docks64: [
                            [-12, 3, 3],
                            [-14, 3, 6],
                            [-14, 5, 3],
                            [-16, 5, 6],
                            [-16, 7, 5],
                            [-16, 9, 4],
                            [-10, 12, 5],
                            [-10, 14, 1],
                            [-8, 14, 8],
                            [-6, 14, 3],
                            [-4, 2, 1],
                            [-2, 2, 7],
                            [-2, 4, 1],
                            [0, 4, 9],
                            [2, 4, 2],
                            [4, 4, 10],
                            [6, 4, 7],
                            [6, 6, 4],
                            [-13, 25, 5],
                            [-13, 27, 4],
                            [-2, 21],
                            [-4, 24],
                            [-3, 29, 1],
                            [-1, 29, 3],
                            [-1, 27, 5],
                            [-1, 25, 6],
                            [1, 25, 10],
                            [3, 25, 3], this.poses.dock.solo
                        ]
                    },
                    ramps1a: {
                        Seaweed64: [
                            [-13, 2],
                            [-10, 6],
                            [-11, 9],
                            [-5, 7],
                            [-17, 13],
                            [-2, 13],
                            [-16, 16],
                            [-9, 16],
                            [11, 14],
                            [-4, 19],
                            [16, 18],
                            [0, 23],
                            [-18, 27],
                            [-1, 30],
                            [10, 27],
                            [18, 27], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-4, 4],
                            [12, 12],
                            [17, 15],
                            [-3, 17],
                            [-17, 19],
                            [-18, 23],
                            [0, 26],
                            [-5, 29],
                            [18, 21],
                            [18, 29], this.poses.seaweed192
                        ],
                        Powerup64: [
                            [-5, 11],
                            [13, 28], this.poses.powerup
                        ],
                        Ramp64: [
                            [-9, 3],
                            [4, 3],
                            [10, 3],
                            [-5, 15],
                            [-12, 27],
                            [7, 27], this.poses.ramp
                        ],
                        Objects64: [
                            [-12, 1],
                            [-13, 4],
                            [-14, 5],
                            [-12, 7],
                            [-8, 7],
                            [-7, 5],
                            [-4, 3],
                            [-4, 6],
                            [5, 8],
                            [6, 9],
                            [11, 10],
                            [14, 9],
                            [16, 13],
                            [0, 12],
                            [1, 14],
                            [-1, 14],
                            [-3, 15],
                            [0, 16],
                            [-10, 15],
                            [-18, 14],
                            [-17, 15],
                            [15, 16],
                            [18, 16],
                            [-18, 17],
                            [-16, 18],
                            [-3, 18],
                            [13, 17],
                            [14, 18],
                            [-18, 21],
                            [-3, 24],
                            [1, 24],
                            [16, 22],
                            [-17, 24],
                            [-4, 28],
                            [-2, 29],
                            [-1, 27],
                            [2, 27],
                            [9, 28],
                            [16, 25],
                            [17, 24],
                            [18, 30], this.poses.rocks
                        ]
                    },
                    ramps1b: {
                        Seaweed64: [
                            [-9, 6],
                            [-18, 8],
                            [-16, 14],
                            [-3, 9],
                            [-1, 10],
                            [2, 15],
                            [11, 8],
                            [14, 9],
                            [16, 5],
                            [17, 3],
                            [15, 13],
                            [-2, 16],
                            [-15, 17],
                            [-5, 19],
                            [-16, 26],
                            [4, 24],
                            [8, 23],
                            [16, 23],
                            [12, 19], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-10, 4],
                            [-19, 11],
                            [16, 9],
                            [-8, 21],
                            [-16, 31],
                            [15, 27],
                            [17, 30], this.poses.seaweed192
                        ],
                        Coin64: [
                            [11, 11], this.poses.coin
                        ],
                        Heart64: [
                            [-13, 23], this.poses.heart
                        ],
                        Ramp64: [
                            [-2, 7],
                            [14, 2],
                            [-9, 19],
                            [7, 19], this.poses.ramp
                        ],
                        Objects64: [
                            [-13, 2],
                            [-10, 3],
                            [-12, 5],
                            [-8, 7],
                            [-17, 9],
                            [-16, 12],
                            [-18, 14],
                            [0, 8],
                            [6, 5],
                            [7, 6],
                            [8, 4],
                            [10, 6],
                            [11, 5],
                            [13, 6],
                            [15, 4],
                            [15, 8],
                            [17, 7],
                            [16, 10],
                            [14, 12],
                            [0, 16],
                            [-16, 16],
                            [-18, 17],
                            [-4, 17],
                            [-8, 22],
                            [-17, 25],
                            [-18, 27],
                            [-14, 28],
                            [-13, 29],
                            [-12, 27],
                            [-11, 30],
                            [5, 23],
                            [6, 22],
                            [7, 24],
                            [9, 21],
                            [17, 18],
                            [18, 21],
                            [17, 24],
                            [15, 25],
                            [13, 28],
                            [16, 29], this.poses.rocks
                        ]
                    },
                    ramps2a: {
                        Seaweed64: [
                            [-14, 2],
                            [-7, 3],
                            [-4, 2],
                            [-18, 9],
                            [-15, 9],
                            [-17, 12],
                            [-8, 13],
                            [-4, 11],
                            [3, 2],
                            [15, 5],
                            [3, 12],
                            [9, 11],
                            [8, 13],
                            [5, 14],
                            [2, 16],
                            [3, 19],
                            [9, 17],
                            [7, 20],
                            [-6, 24],
                            [-9, 27],
                            [-5, 28],
                            [-8, 30],
                            [2, 30],
                            [5, 28],
                            [5, 31],
                            [-19, 20],
                            [-21, 23],
                            [-18, 24],
                            [-17, 26],
                            [-15, 27],
                            [18, 20],
                            [15, 22],
                            [18, 23],
                            [20, 27], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [16, 3],
                            [-15, 6],
                            [-5, 16], this.poses.seaweed192
                        ],
                        Powerup64: [
                            [-14, 20],
                            [9, 23], this.poses.powerup
                        ],
                        Ramp64: [
                            [0, 2],
                            [-12, 11],
                            [12, 11], this.poses.ramp
                        ],
                        Objects64: [
                            [-7, 10],
                            [-16, 8],
                            [-16, 13],
                            [-15, 3],
                            [-14, 4],
                            [-13, 3],
                            [-13, 7],
                            [-7, 12],
                            [-6, 1],
                            [-6, 4],
                            [-6, 14],
                            [-5, 3],
                            [-5, 10],
                            [-5, 13],
                            [-4, 15],
                            [1, 4],
                            [3, 3],
                            [4, 12],
                            [5, 11],
                            [7, 11],
                            [9, 15],
                            [15, 1],
                            [16, 6],
                            [17, 2],
                            [-21, 21],
                            [-20, 20],
                            [-18, 20],
                            [-17, 21],
                            [-16, 22],
                            [-17, 23],
                            [-20, 22],
                            [-19, 24],
                            [-18, 25],
                            [-16, 26],
                            [-17, 27],
                            [17, 20],
                            [16, 21],
                            [15, 22],
                            [16, 23],
                            [18, 24],
                            [19, 23],
                            [20, 24],
                            [21, 26],
                            [19, 27],
                            [21, 25],
                            [-8, 26],
                            [-7, 29],
                            [-6, 27],
                            [-6, 31],
                            [-5, 25],
                            [3, 17],
                            [3, 29],
                            [4, 30],
                            [5, 18],
                            [6, 21],
                            [7, 17],
                            [7, 29],
                            [8, 19], this.poses.rocks
                        ]
                    },
                    ramps2b: {
                        Sandbar256: [
                            [-13, 16, 1],
                            [13, 17, 3], this.poses.sandbar
                        ],
                        Wake192: [
                            [-16, 13],
                            [-8, 15],
                            [-15, 18],
                            [-5, 20],
                            [13, 22],
                            [15, 19], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-16, 2],
                            [-15, 7],
                            [-16, 11],
                            [-11, 11],
                            [-10, 9],
                            [-9, 13],
                            [-5, 5],
                            [-5, 13],
                            [-2, 16],
                            [-18, 31],
                            [-15, 29],
                            [-7, 29],
                            [-5, 31],
                            [5, 11],
                            [5, 27],
                            [5, 31],
                            [6, 1],
                            [8, 3],
                            [8, 12],
                            [7, 16],
                            [11, 14],
                            [14, 9],
                            [16, 1],
                            [16, 28],
                            [15, 31],
                            [18, 30], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-16, 9],
                            [16, 5],
                            [2, 9],
                            [17, 8], this.poses.seaweed192
                        ],
                        Coin64: [
                            [3, 14], this.poses.coin
                        ],
                        Dog64: [
                            [-4, 9], this.poses.dog
                        ],
                        Ramp64: [
                            [-11, 6],
                            [0, 4],
                            [11, 9], this.poses.ramp
                        ],
                        Objects64: [
                            [-14, 19, 27],
                            [-8, 18, 28],
                            [9, 19, 29],
                            [14, 20, 30],
                            [-12, 14, this.poses.woodenboat],
                            [-17, 0],
                            [-15, 1],
                            [-17, 3],
                            [-14, 3],
                            [-15, 5],
                            [-14, 6],
                            [-13, 7],
                            [-13, 9],
                            [-12, 8],
                            [-10, 10],
                            [-9, 11],
                            [-8, 10],
                            [-7, 12],
                            [-6, 13],
                            [-4, 14],
                            [-3, 15],
                            [-2, 14],
                            [0, 15],
                            [1, 17],
                            [-7, 1],
                            [-6, 3],
                            [-5, 2],
                            [-4, 4],
                            [-3, 5],
                            [-1, 6],
                            [1, 7],
                            [2, 8],
                            [4, 9],
                            [6, 10],
                            [7, 12],
                            [8, 13],
                            [9, 15],
                            [7, 17],
                            [13, 14],
                            [13, 10],
                            [14, 12],
                            [15, 9],
                            [15, 6],
                            [16, 8],
                            [15, 2],
                            [16, 4],
                            [17, 3],
                            [7, 2],
                            [8, 1],
                            [-17, 28],
                            [-16, 29],
                            [-15, 30],
                            [-6, 28],
                            [-4, 29],
                            [-16, 31],
                            [4, 29],
                            [6, 28],
                            [7, 30],
                            [16, 29],
                            [17, 31],
                            [18, 27], this.poses.rocks
                        ]
                    },
                    act3a: {
                        Sandbar256: [
                            [-9, 8],
                            [-7, 26],
                            [12, 5],
                            [8, 22], this.poses.sandbar
                        ],
                        Wake64: [
                            [0, 12],
                            [6, 12],
                            [0, 18], this.poses.wake64
                        ],
                        Wake192: [
                            [-4, 3],
                            [6, 1],
                            [-10, 15],
                            [-1, 14],
                            [6, 14],
                            [16, 18], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-14, 8],
                            [-5, 7],
                            [-3, 8],
                            [7, 6],
                            [10, 8],
                            [14, 7],
                            [-5, 23],
                            [-11, 26],
                            [-9, 29],
                            [5, 25], this.poses.seaweed64
                        ],
                        Whirlpool128: [
                            [0, 16],
                            [5, 18], this.poses.whirlpool
                        ],
                        Coin64: [
                            [3, 15], this.poses.coin
                        ],
                        Objects32: [
                            [9, 2],
                            [-1, 24], this.poses.float
                        ],
                        Objects64: [
                            [-9, 6],
                            [-3, 6],
                            [-6, 10],
                            [-9, 25],
                            [8, 7],
                            [13, 8],
                            [5, 21],
                            [4, 23],
                            [8, 24],
                            [-6, 20, this.poses.rocks],
                            [-4, 21, this.poses.rocks],
                            [-7, 22, this.poses.rocks],
                            [11, 25, this.poses.rocks],
                            [-11, 10, this.poses.logs], this.poses.coral
                        ]
                    },
                    act3b: {
                        Sandbar256: [
                            [-14, 18],
                            [-5, 26],
                            [9, 16, 4],
                            [13, 17, 3], this.poses.sandbar
                        ],
                        Wake192: [
                            [-12, 7],
                            [-5, 12],
                            [-10, 17],
                            [-15, 25],
                            [12, 8],
                            [6, 26], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-15, 5],
                            [1, 5],
                            [0, 8],
                            [14, 1],
                            [4, 21],
                            [10, 21],
                            [13, 22],
                            [-17, 23],
                            [-9, 18],
                            [-5, 28],
                            [-2, 27], this.poses.seaweed64
                        ],
                        Heart64: [
                            [1, 21], this.poses.heart
                        ],
                        Coin64: [
                            [-11, 27], this.poses.coin
                        ],
                        Objects64: [
                            [-16, 3],
                            [-13, 2],
                            [-5, 22],
                            [12, 3],
                            [15, 2],
                            [13, 5],
                            [-17, 5, this.poses.oceanbuoy],
                            [-10, 4, this.poses.oceanbuoy],
                            [-13, 4, this.poses.scuba],
                            [4, 8, this.poses.posts],
                            [11, 1, this.poses.oceanbuoy],
                            [17, 4, this.poses.oceanbuoy],
                            [-12, 24, this.poses.posts],
                            [-6, 23, this.poses.posts],
                            [-15, 19, this.poses.coral],
                            [-10, 20, this.poses.coral],
                            [-7, 25, this.poses.coral],
                            [5, 17, this.poses.coral],
                            [8, 18, this.poses.posts],
                            [12, 15, this.poses.coral],
                            [15, 18, this.poses.posts],
                            [17, 19, this.poses.posts], this.poses.rocks
                        ],
                        Docks64: [
                            [-4, 7, 1],
                            [-2, 7, 2],
                            [0, 7, 10],
                            [-2, 5, 5],
                            [-2, 3, 6],
                            [0, 3, 3],
                            [2, 7, 3],
                            [-12, 20, 5],
                            [-12, 22, 3],
                            [-14, 22, 6],
                            [-14, 24, 9],
                            [-4, 24, 5],
                            [-4, 26, 4],
                            [5, 23],
                            [6, 20, 1],
                            [8, 20, 2],
                            [10, 20, 8],
                            [12, 20, 2],
                            [14, 20, 3],
                            [12, 18, 5], this.poses.dock.solo
                        ]
                    },
                    act4a: {
                        Seaweed64: [
                            [-8, 3],
                            [-10, 5],
                            [-14, 6],
                            [-6, 9],
                            [2, 13],
                            [11, 10],
                            [15, 12],
                            [18, 14],
                            [-18, 17],
                            [-12, 19],
                            [-5, 19],
                            [-2, 21],
                            [-11, 27],
                            [-7, 25],
                            [8, 20],
                            [15, 24],
                            [5, 26],
                            [4, 29], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [-9, 7],
                            [11, 8], this.poses.seaweed192
                        ],
                        Coin64: [
                            [11, 29], this.poses.coin
                        ],
                        Heart64: [
                            [-13, 24], this.poses.heart
                        ],
                        Ramp64: [
                            [2, 10], this.poses.ramp
                        ],
                        Objects64: [
                            [-14, 3],
                            [-12, 2],
                            [-12, 4],
                            [-11, 3],
                            [-7, 5],
                            [-5, 5],
                            [-4, 3],
                            [-6, 6],
                            [-4, 7],
                            [0, 13],
                            [2, 14],
                            [4, 15],
                            [3, 17],
                            [7, 7],
                            [9, 6],
                            [12, 5],
                            [13, 11],
                            [14, 14],
                            [16, 13],
                            [16, 16],
                            [15, 17],
                            [-17, 19],
                            [-16, 17],
                            [-13, 17],
                            [-15, 18],
                            [-14, 19],
                            [-5, 17],
                            [-5, 16],
                            [-4, 20],
                            [-2, 19],
                            [-10, 25],
                            [-8, 24],
                            [-9, 27],
                            [-6, 26],
                            [14, 20],
                            [15, 22],
                            [17, 21],
                            [17, 24],
                            [8, 21],
                            [9, 22],
                            [6, 22],
                            [7, 23],
                            [5, 24],
                            [8, 24],
                            [6, 27],
                            [7, 28],
                            [8, 29],
                            [6, 30], this.poses.rocks
                        ]
                    },
                    act4b: {
                        Wake64: [
                            [-14, 5],
                            [-17, 10],
                            [-13, 13],
                            [-4, 9],
                            [-5, 12],
                            [-1, 15],
                            [4, 8],
                            [7, 11],
                            [16, 23], this.poses.wake64
                        ],
                        Wake192: [
                            [-12, 2],
                            [-18, 7],
                            [3, 1],
                            [8, 2],
                            [-16, 21],
                            [-8, 19],
                            [-7, 24],
                            [18, 8],
                            [20, 11],
                            [22, 21],
                            [1, 21], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-8, 2],
                            [-6, 4],
                            [-8, 6],
                            [-11, 6],
                            [-14, 9],
                            [-12, 10],
                            [-15, 12],
                            [-16, 14],
                            [-13, 15],
                            [-18, 18],
                            [2, 5],
                            [0, 26],
                            [5, 25],
                            [5, 21],
                            [8, 19],
                            [10, 20],
                            [10, 23],
                            [13, 16],
                            [17, 13],
                            [17, 16],
                            [17, 19],
                            [19, 14],
                            [20, 12], this.poses.seaweed64
                        ],
                        Seaweed192: [
                            [0, 3],
                            [4, 23], this.poses.seaweed192
                        ],
                        Whirlpool128: [
                            [-3, 15],
                            [1, 13],
                            [3, 19], this.poses.whirlpool
                        ],
                        Ramp64: [
                            [9, 17], this.poses.ramp
                        ],
                        Coin64: [
                            [-14, 25], this.poses.coin
                        ],
                        Powerup64: [
                            [-7, 16], this.poses.powerup
                        ],
                        Objects64: [
                            [-11, 3, this.poses.logs],
                            [-12, 7, this.poses.logs],
                            [-16, 8, this.poses.logs],
                            [14, 18, this.poses.logs],
                            [2, 25, this.poses.logs],
                            [19, 15, this.poses.logs],
                            [1, 4],
                            [-1, 2],
                            [-7, 3],
                            [-9, 4],
                            [-10, 2],
                            [-7, 5],
                            [-10, 5],
                            [-12, 4],
                            [-10, 7],
                            [-13, 6],
                            [-13, 8],
                            [-13, 11],
                            [-15, 7],
                            [-15, 10],
                            [-19, 12],
                            [-20, 13],
                            [-18, 14],
                            [-10, 15],
                            [-11, 16],
                            [16, 12],
                            [12, 14],
                            [14, 15],
                            [13, 16],
                            [15, 17],
                            [18, 18],
                            [13, 19],
                            [11, 20],
                            [8, 20],
                            [6, 21],
                            [10, 21],
                            [8, 22],
                            [12, 22],
                            [14, 20],
                            [7, 26], this.poses.rocks
                        ]
                    },
                    act5a: {
                        Wake192: [
                            [-14, 6],
                            [15, 8],
                            [-1, 16],
                            [-12, 24],
                            [12, 28], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-18, 16],
                            [-14, 15],
                            [-9, 18],
                            [-6, 8],
                            [-3, 6],
                            [-2, 11],
                            [3, 10],
                            [6, 9],
                            [8, 17],
                            [10, 15],
                            [14, 18],
                            [18, 17],
                            [-5, 28],
                            [0, 31],
                            [5, 29], this.poses.seaweed64
                        ],
                        Ramp64: [
                            [0, 5],
                            [-12, 14],
                            [12, 14],
                            [-3, 27],
                            [3, 27], this.poses.ramp
                        ],
                        Objects64: [
                            [-6, 6],
                            [-9, 15],
                            [6, 7],
                            [9, 14],
                            [14, 15],
                            [17, 19],
                            [-6, 29],
                            [1, 28],
                            [-15, 19],
                            [-17, 13, this.poses.logs],
                            [-5, 11, this.poses.logs],
                            [2, 11, this.poses.posts], this.poses.solids
                        ],
                        Docks64: [
                            [-16, 15, 5],
                            [-16, 17, 1],
                            [-14, 17, 2],
                            [-12, 17, 10],
                            [-10, 17, 3],
                            [-4, 8, 5],
                            [-4, 10, 1],
                            [-2, 10, 10],
                            [0, 10, 3],
                            [0, 8, 6],
                            [2, 8, 10],
                            [4, 8, 3],
                            [4, 6, 5],
                            [4, 12],
                            [10, 17, 1],
                            [12, 17, 2],
                            [14, 17, 8],
                            [16, 17, 3],
                            [16, 15, 5],
                            [9, 19],
                            [-6, 26],
                            [-4, 30, 1],
                            [-2, 30, 2],
                            [0, 30, 10],
                            [2, 30, 9],
                            [4, 30, 3], this.poses.dock.solo
                        ]
                    },
                    act5b: {
                        Wake192: [
                            [-7, 12],
                            [8, 16],
                            [-14, 22],
                            [-3, 30],
                            [14, 25], this.poses.wake192
                        ],
                        Seaweed64: [
                            [-13, 5],
                            [-16, 9],
                            [-12, 10],
                            [-12, 19],
                            [-6, 9],
                            [6, 8],
                            [14, 11],
                            [0, 16],
                            [-2, 24],
                            [1, 17],
                            [1, 21],
                            [5, 27],
                            [6, 23],
                            [9, 21], this.poses.seaweed64
                        ],
                        Coin64: [
                            [0, 4], this.poses.coin
                        ],
                        Ramp64: [
                            [-10, 6],
                            [10, 6],
                            [0, 14], this.poses.ramp
                        ],
                        Objects64: [
                            [-17, 7],
                            [-7, 7],
                            [7, 7],
                            [16, 8],
                            [15, 12],
                            [-13, 20],
                            [-4, 23],
                            [2, 22],
                            [7, 24],
                            [6, 10, this.poses.logs],
                            [1, 16, this.poses.woodenboat],
                            [-5, 25, this.poses.logs], this.poses.rocks
                        ],
                        Docks64: [
                            [-14, 7, 5],
                            [-14, 9, 1],
                            [-12, 9, 8],
                            [-10, 9, 9],
                            [-8, 9, 3],
                            [-15, 12],
                            [14, 7, 5],
                            [14, 9, 3],
                            [12, 9, 9],
                            [10, 9, 10],
                            [8, 9, 6],
                            [8, 11, 1],
                            [10, 11, 2],
                            [12, 11, 3],
                            [-6, 22, 1],
                            [-4, 22, 9],
                            [-2, 22, 3],
                            [2, 24, 1],
                            [4, 24, 3],
                            [4, 22, 6],
                            [6, 22, 10],
                            [8, 22, 3], this.poses.dock.solo
                        ]
                    }
                }, this.randomObj = {
                    Docks64: [this.poses.dock.solo, this.poses.dock.arch],
                    Objects64: this.poses.solids,
                    Objects32: this.poses.float,
                    Wake64: this.poses.wake64,
                    Wake192: this.poses.wake192,
                    Seaweed64: this.poses.seaweed64,
                    Seaweed192: this.poses.seaweed192,
                    Whirlpool128: this.poses.whirlpool,
                    Ambient64: this.poses.ambient
                }
            }
        }
        class F {
            constructor(e, s, t) {
                const i = $(e);
                this.poses = s, this.frames = t, this.spriteWidth = i.width / s, this.spriteHeight = i.height / t, this.image = i
            }
            draw(e, s, t, i) {
                $e.data.ctx.drawImage(this.image, t * this.spriteWidth, i * this.spriteHeight, this.spriteWidth, this.spriteHeight, Math.floor(e), Math.floor(s), this.spriteWidth, this.spriteHeight)
            }
        }
        let _ = new F("surfboard64", 13, 3),
            U = new F("player64", 13, 9),
            V = new F("enemy128", 2, 6),
            Y = new F("surfer64", 27, 2),
            z = new F("docks64", 10, 1),
            K = new F("objects64", 30, 1),
            J = new F("objects32", 20, 1),
            X = new F("interact64", 8, 4),
            q = new F("slowdown64", 9, 3),
            Q = new F("slowdown64", 3, 3),
            Z = new F("effects128", 6, 3),
            ee = new F("ripple96", 1, 3),
            se = new F("ambient64", 4, 6),
            te = new F("sandbar256", 4, 1),
            ie = new F("island1280", 1, 1);
        class ae {
            constructor(e, s, t, i, a, o) {
                this.hitbox = new ne(this, 0, 0, t, i), this.x = e, this.y = s, this.width = t, this.height = i, this.sprite = a, this.pose = o, this.reset()
            }
            reset() {
                this.creation = $e.data.game.time.elapsed, this.lifetime = 0, this.fps = 6, this.frame = {
                    current: 1,
                    updated: this.creation
                }, this.isAnimated = !1, this.sleep = !1, this.defineEffect("HIT")
            }
            defineEffect(e = "HIT") {
                switch (this.effect = e, this.effect) {
                    case "CHEST":
                    case "ISLAND":
                        this.strokeType = "TRANSPARENT";
                        break;
                    case "RAMP":
                    case "POWERUP":
                    case "HEART":
                    case "COIN":
                    case "DOG":
                    case "BUOYTRIGGER":
                    case "SWIMTRIGGER":
                        this.strokeType = "GOOD";
                        break;
                    case "SLOW":
                    case "SUPERSLOW":
                    case "SPIN":
                    case "TENTACLE":
                        this.strokeType = "AVOID";
                        break;
                    default:
                        this.strokeType = "COLLIDE"
                }
            }
            update() {
                if (this.lifetime += $e.data.game.time.loop, this.sprite.frames > 1 && this.isAnimated) {
                    if (("AMBIENT" === this.effect || "CHEST" === this.effect) && this.frame.current === this.sprite.frames) return;
                    if (this.ending && this.frame.current + 1 > this.sprite.frames) return void(this.sleep = !0);
                    this.cycleFrame(this.frame, this.sprite)
                }
            }
            move() {
                this.shift(-$e.data.player.speed.x, -$e.data.player.speed.y)
            }
            shift(e = 0, s = 0) {
                this.x += e, this.hitbox.x += e, this.y += s, this.hitbox.y += s
            }
            changePose(e) {
                e || (e = this.pose + 1), this.pose = e
            }
            changeFrame(e) {
                e || (e = this.frame.current + 1), this.frame.current = e, this.frame.updated = $e.data.game.time.elapsed
            }
            cycleFrame(e, s, t = this.fps) {
                if ($e.data.game.time.elapsed >= e.updated + 1 / t) {
                    e.updated = $e.data.game.time.elapsed;
                    let t = e.current + 1;
                    t > s.frames && (t = 1), e.current = t
                }
            }
            draw() {
                this.sprite.draw(this.x - this.width / 2, this.y - this.height / 2, this.pose - 1, this.frame.current - 1)
            }
            drawHitbox() {
                const e = Math.floor(this.hitbox.x),
                    s = Math.floor(this.hitbox.y),
                    t = this.hitbox.width,
                    i = this.hitbox.height;
                let a = "#000000";
                let o = !1;
                if ($e.data.session.isHighContrast) switch (this.strokeType) {
                    case "COLLIDE":
                        a = "CanvasText";
                        break;
                    case "GOOD":
                        a = "GrayText", o = !0;
                        break;
                    case "AVOID":
                        a = "LinkText", o = !0
                } else switch (this.strokeType) {
                    case "COLLIDE":
                        a = "#000000";
                        break;
                    case "GOOD":
                        a = "#00FF00", o = !0;
                        break;
                    case "AVOID":
                        a = "#FF0000", o = !0
                }
                const n = $e.data.ctx;
                n.beginPath(), n.lineWidth = "4", n.strokeStyle = "" + a, o ? n.setLineDash([8]) : n.setLineDash([]), n.strokeRect(e + 1, s + 1, t - 2, i - 2)
            }
            drawLayer(e, s, t, i, a) {
                e.draw(this.x - e.spriteWidth / 2 + s, this.y - e.spriteHeight / 2 + t, i - 1, a - 1)
            }
        }
        class oe extends ae {
            constructor(e, s, t, i, a, o) {
                super(e, s, t, i, a, o), this.reset()
            }
            reset() {
                super.reset(), this.type = "Obstacle", this.ending = !1, this.collectedByPlayer = !1, this.hitByPlayer = !1, this.hitByEnemy = !1, this.hitBySurfer = !1, this.rippleOffset = -4, this.rippleSprite = ee, this.rippleFrame = {
                    current: 1,
                    updated: this.creation
                }, this.isAnimated = !0
            }
            update() {
                super.update(), void 0 !== this.rippleOffset && this.cycleFrame(this.rippleFrame, this.rippleSprite)
            }
            draw() {
                void 0 !== this.rippleOffset && this.drawLayer(this.rippleSprite, 0, this.rippleOffset, 1, this.rippleFrame.current), super.draw()
            }
        }
        class ne {
            constructor(e, s, t, i, a) {
                this.x = e.x - e.width / 2 + s, this.y = e.y - e.height / 2 + t, this.width = i, this.height = a
            }
            touches(e) {
                return !(e.x + e.width < this.x) && (!(this.x + this.width < e.x) && (!(e.y + e.height < this.y) && !(this.y + this.height < e.y)))
            }
        }
        class re extends ae {
            constructor(e, s, t) {
                super(e, s, 128, 128, t, 1), this.hitbox = new ne(this, 32, 80, 64, 40), this.reset()
            }
            reset() {
                super.reset(), this.state = "CHASE", this.type = "Enemy", this.defineEffect("ENEMY"), this.gotPlayer = !1, this.obstaclesHit = [], this.rippleOffset = void 0, this.angle = {
                    current: 0,
                    radian: 0,
                    driftTime: 0,
                    distance: 0
                }, this.sprite = V, this.speed = {
                    current: 3,
                    raw: 3,
                    max: 9,
                    accel: .05
                }, this.timer = {
                    crash: 0,
                    direction: 0
                }, this.frame = {
                    current: 1,
                    updated: this.creation
                }, this.speed.raw = $e.data.player.speed.raw + 1
            }
            update() {
                super.update(), this.updateEnemyFrames(), this.isCrashed() || this.gotPlayer || (this.updateDirection(), this.updateSpeed(), this.updatePosition())
            }
            updateEnemyFrames() {
                switch (this.state) {
                    case "CHASE":
                        this.cycleEnemyFrame(1, 4);
                        break;
                    case "CRASH":
                        this.cycleEnemyFrame(5, 6);
                        break;
                    case "GRAB":
                        this.cycleEnemyFrame(1, 6)
                }
            }
            cycleEnemyFrame(e, s) {
                if ($e.data.game.time.elapsed >= this.frame.updated + 1 / this.fps) {
                    if (this.ending && this.frame.current + 1 > this.sprite.frames) return;
                    let t = this.frame.current + 1;
                    t > s && (t = e), this.changeFrame(t)
                }
            }
            crash() {
                this.changeState("CRASH")
            }
            resume() {
                this.changeState("CHASE")
            }
            slow() {
                this.speed.raw = this.speed.raw / 2
            }
            grab() {
                this.changeState("GRAB")
            }
            isCrashed() {
                return !(this.timer.crash <= 0) && (this.timer.crash -= $e.data.game.time.loop * $e.data.game.time.scale, !(this.timer.crash <= 0) || (this.resume(), !1))
            }
            changeState(e) {
                switch (this.state = e, e) {
                    case "CHASE":
                        this.changeFrame(1), this.timer.crash = 0, this.timer.direction = 0;
                        break;
                    case "CRASH":
                        this.changeFrame(5), this.timer.crash += 1.25, this.speed.raw = 0;
                        break;
                    case "GRAB":
                        this.changePose(2), this.changeFrame(1), this.speed.raw = 0, this.gotPlayer = !0, this.ending = !0
                }
            }
            updateDirection() {
                if (this.angle.distance = Math.hypot($e.data.session.xOrigin - this.x, $e.data.session.yOrigin - this.y), this.timer.direction -= $e.data.game.time.loop * $e.data.game.time.scale, this.timer.direction <= 0) {
                    this.timer.direction += $e.data.randomNumberBetween(25, 100) / 100 * (this.angle.distance / $e.data.session.yOrigin);
                    const e = $e.data.session.xOrigin - this.x,
                        s = $e.data.session.yOrigin - this.y;
                    this.angle.current = 180 * Math.atan2(s, e) / Math.PI, this.angle.radian = this.angle.current * Math.PI / 180
                }
            }
            updateSpeed() {
                const e = this.y >= $e.data.session.yOrigin;
                this.speed.raw < this.speed.max && !e ? this.speed.raw += this.speed.accel * $e.data.game.time.scale : e ? this.speed.raw -= this.speed.accel * $e.data.game.time.scale : this.speed.raw = this.speed.max, this.speed.current = this.speed.raw * $e.data.game.time.scale
            }
            updatePosition() {
                const e = this.angle.distance / $e.data.session.yOrigin * 15,
                    s = Math.cos(16 * this.lifetime) * e * Math.PI / 180,
                    t = this.speed.current * Math.cos(this.angle.radian + s),
                    i = this.speed.current * Math.sin(this.angle.radian + s);
                this.shift(t, i)
            }
        }
        class ce extends ae {
            constructor(e, s, t) {
                super(e, s, 64, 64, t), this.hitbox = new ne(this, 20, 32, 24, 24), this.reset()
            }
            reset() {
                super.reset(), this.state = "CRASH", this.type = "Surfer", this.defineEffect("SURFER"), this.boardPose = 0, this.hitByPlayer = !1, this.obstaclesHit = [], this.angle = {
                    current: 0,
                    radian: 0
                }, this.sprite = Y, this.speed = {
                    current: 5,
                    raw: 5,
                    max: 10,
                    accel: .025
                }, this.timer = {
                    crash: 0,
                    direction: 0
                }, this.surferInstance = $e.data.randomNumberBetween(1, 9), this.surferInstance <= 6 ? this.boardInstance = $e.data.randomNumberBetween(1, 6) : this.boardInstance = $e.data.randomNumberBetween(7, 9), this.resume()
            }
            update() {
                super.update(), this.isCrashed() || (this.updateDirection(), this.updateSpeed(), this.updatePosition())
            }
            crash() {
                this.changeState("CRASH")
            }
            resume() {
                const e = Math.random() > .5 ? "RIGHT" : "LEFT";
                this.changeState(e), this.timer.crash = 0, this.timer.direction = 0
            }
            slow() {
                this.speed.raw = this.speed.raw / 2
            }
            isCrashed() {
                return !(this.timer.crash <= 0) && (this.timer.crash -= $e.data.game.time.loop * $e.data.game.time.scale, !(this.timer.crash <= 0) || (this.resume(), !1))
            }
            changeState(e) {
                this.state = e;
                const s = 3 * (this.surferInstance - 1),
                    t = 3 * (this.boardInstance - 1);
                switch (e) {
                    case "LEFT":
                        this.changePose(s + 1), this.changeBoardPose(t + 1), this.angle.current = -155;
                        break;
                    case "RIGHT":
                        this.changePose(s + 2), this.changeBoardPose(t + 2), this.angle.current = 155;
                        break;
                    case "CRASH":
                        this.changePose(s + 3), this.changeBoardPose(t + 3), this.timer.crash += 2.5, this.speed.raw = 0
                }
                "LEFT" !== e && "RIGHT" !== e || (this.angle.radian = (this.angle.current - 90) * Math.PI / 180)
            }
            changeBoardPose(e = 0) {
                e <= 0 && (e = 1), this.boardPose = e
            }
            updateDirection() {
                if (this.timer.direction -= $e.data.game.time.loop * $e.data.game.time.scale, this.timer.direction <= 0 && (this.timer.direction += $e.data.randomNumberBetween(25, 150) / 100, Math.random() > .5)) {
                    const e = "LEFT" === this.state ? "RIGHT" : "LEFT";
                    this.changeState(e)
                }
            }
            updateSpeed() {
                this.speed.raw < this.speed.max ? this.speed.raw += this.speed.accel * $e.data.game.time.scale : this.speed.raw > this.speed.max ? this.speed.raw -= this.speed.accel * $e.data.game.time.scale : this.speed.raw = this.speed.max, this.speed.current = this.speed.raw * $e.data.game.time.scale
            }
            updatePosition() {
                const e = this.speed.current * Math.cos(this.angle.radian),
                    s = this.speed.current * Math.sin(this.angle.radian);
                this.shift(e, s)
            }
            draw() {
                super.drawLayer(this.sprite, 0, 0, this.boardPose, 2), super.draw()
            }
        }
        class he extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, z, t), this.hitbox = new ne(this, 6, 16, 52, 32), this.reset()
            }
            reset() {
                super.reset(), this.type = "Docks64", this.defineEffect("HIT"), this.isAnimated = !1, this.rippleOffset = -6, this.dockDecor = void 0, this.dockDecorPos = void 0, this.pose >= 1 && this.pose <= 8 && Math.random() < .75 && (this.dockDecor = $e.data.randomNumberBetween(1, 12), this.dockDecorPos = $e.data.randomNumberBetween(-16, -24)), this.pose >= 10 && this.pose <= 12 && (this.rippleOffset = void 0)
            }
            draw() {
                super.draw(), void 0 !== this.dockDecor && super.drawLayer(J, 0, this.dockDecorPos, 8 + this.dockDecor, 1)
            }
        }
        class de extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, K, t), this.hitbox = new ne(this, 12, 36, 40, 20), this.reset()
            }
            reset() {
                super.reset(), this.type = "Objects64", this.defineEffect("HIT"), this.isAnimated = !1
            }
        }
        class le extends oe {
            constructor(e, s, t) {
                super(e, s, 32, 32, J, t), this.hitbox = new ne(this, 4, 20, 24, 12), this.reset()
            }
            reset() {
                super.reset(), this.type = "Objects32", this.defineEffect("SPIN"), this.isAnimated = !1, this.rippleOffset = -12
            }
        }
        class pe extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, X, t), this.hitbox = new ne(this, 8, 8, 48, 24), this.reset()
            }
            reset() {
                super.reset(), this.type = "Ramp64", this.defineEffect("RAMP")
            }
        }
        class ue extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, X, t), this.hitbox = new ne(this, -64, -64, 192, 192), this.reset()
            }
            reset() {
                super.reset(), this.type = "Tentacle64", this.defineEffect("TENTACLE")
            }
        }
        class ge extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, q, t), this.hitbox = new ne(this, 4, 8, 56, 48), this.reset()
            }
            reset() {
                super.reset(), this.type = "Wake64", this.defineEffect("SLOW"), this.rippleOffset = void 0
            }
        }
        class me extends oe {
            constructor(e, s, t) {
                super(e, s, 192, 64, Q, t), this.hitbox = new ne(this, 8, 8, 176, 48), this.reset()
            }
            reset() {
                super.reset(), this.type = "Wake192", this.defineEffect("SLOW"), this.rippleOffset = void 0
            }
        }
        class ye extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, q, t), this.hitbox = new ne(this, 4, 8, 56, 48), this.reset()
            }
            reset() {
                super.reset(), this.type = "Seaweed64", this.defineEffect("SUPERSLOW"), this.rippleOffset = void 0
            }
        }
        class be extends oe {
            constructor(e, s, t) {
                super(e, s, 192, 64, Q, t), this.hitbox = new ne(this, 8, 8, 176, 48), this.reset()
            }
            reset() {
                super.reset(), this.type = "Seaweed192", this.defineEffect("SUPERSLOW"), this.rippleOffset = void 0
            }
        }
        class we extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, X, t), this.hitbox = new ne(this, 0, 0, 64, 64), this.reset()
            }
            reset() {
                super.reset(), this.type = "Powerup64", this.defineEffect("POWERUP")
            }
        }
        class fe extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, X, t), this.hitbox = new ne(this, 0, 0, 64, 64), this.reset()
            }
            reset() {
                super.reset(), this.type = "Heart64", this.defineEffect("HEART")
            }
        }
        class Se extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, X, t), this.hitbox = new ne(this, 0, 0, 64, 64), this.reset()
            }
            reset() {
                super.reset(), this.type = "Coin64", this.defineEffect("COIN")
            }
        }
        class ke extends oe {
            constructor(e, s, t) {
                super(e, s, 128, 128, Z, t), this.hitbox = new ne(this, 16, 32, 96, 64), this.reset()
            }
            reset() {
                super.reset(), this.type = "Whirlpool128", this.defineEffect("SPIN"), this.rippleOffset = void 0
            }
        }
        class Oe extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, se, t), this.hitbox = new ne(this, 0, 0, 64, 64), this.reset()
            }
            reset() {
                super.reset(), this.type = "Ambient64", this.defineEffect("AMBIENT"), this.frame.current = 0, this.rippleOffset = 0, this.isAnimated = !1
            }
        }
        class xe extends oe {
            constructor(e, s, t) {
                super(e, s, 256, 128, te, t), this.hitbox = new ne(this, 24, 72, 208, 24), this.reset()
            }
            reset() {
                super.reset(), this.type = "Sandbar256", this.defineEffect("HIT"), this.rippleOffset = void 0, this.isAnimated = !1
            }
        }
        class ve extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, K, t), this.hitbox = new ne(this, 8, 36, 48, 20), this.reset()
            }
            reset() {
                super.reset(), this.type = "Characters64", this.defineEffect("HIT"), this.isAnimated = !1
            }
        }
        class Ce extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, X, t), this.hitbox = new ne(this, -32, -32, 128, 128), this.reset()
            }
            reset() {
                super.reset(), this.type = "Dog64", this.defineEffect("DOG")
            }
        }
        class Ee extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, X, t), this.hitbox = new ne(this, 0, 0, 64, 64), this.reset()
            }
            reset() {
                super.reset(), this.type = "DogCrash64", this.defineEffect("DOGCRASH")
            }
        }
        class Te extends oe {
            constructor(e, s, t) {
                super(e, s, 64, 64, K, t), this.hitbox = new ne(this, 16, 48, 32, 16), this.reset()
            }
            reset() {
                super.reset(), this.buoyId = null, this.buoyTriggered = void 0, this.type = "Buoy64", this.defineEffect("HIT")
            }
        }
        class Pe extends oe {
            constructor(e, s, t) {
                super(e, s, 32, 32, J, t), this.hitbox = new ne(this, 4, 20, 24, 12), this.reset()
            }
            reset() {
                super.reset(), this.buoyId = null, this.buoyTriggered = void 0, this.type = "BuoyGuide32", this.defineEffect("SPIN"), this.isAnimated = !1, this.rippleOffset = -12
            }
        }
        class Me extends oe {
            constructor(e, s, t) {
                super(e, s, 224, 64, K, t), this.hitbox = new ne(this, 0, 0, 224, 64), this.reset()
            }
            update() {}
            reset() {
                super.reset(), this.buoyId = null, this.type = "BuoyTrigger", this.defineEffect("BUOYTRIGGER")
            }
            draw() {}
        }
        class Ie extends oe {
            constructor(e, s, t) {
                super(e, s, 756, 512, K, t), this.hitbox = new ne(this, 0, 0, 756, 512), this.reset()
            }
            update() {}
            reset() {
                super.reset(), this.type = "SwimTrigger", this.defineEffect("SWIMTRIGGER")
            }
            draw() {}
        }
        class Ae extends oe {
            constructor(e, s, t) {
                super(e, s, 1280, 512, ie, t), this.hitbox = new ne(this, 0, 180, 1280, 100), this.reset()
            }
            reset() {
                super.reset(), this.type = "Island", this.defineEffect("ISLAND")
            }
        }
        class De extends oe {
            constructor(e, s, t) {
                super(e, s, 128, 128, Z, t), this.hitbox = new ne(this, 0, 0, 128, 256), this.reset()
            }
            reset() {
                super.reset(), this.type = "Chest", this.defineEffect("CHEST"), this.isAnimated = !1, this.rippleOffset = void 0, this.fps = 4, this.sparkleSprite = Z, this.sparkleFrame = {
                    current: 1,
                    updated: this.creation
                }
            }
            startChestAnimation() {
                this.frame.updated = $e.data.game.time.elapsed, this.isAnimated = !0
            }
            update() {
                super.update(), this.cycleFrame(this.sparkleFrame, this.sparkleSprite, 6)
            }
            draw() {
                super.draw(), this.drawLayer(this.sparkleSprite, 0, -32, 5, this.sparkleFrame.current)
            }
        }
        class Le {
            constructor() {
                if (Le.system) return Le.system;
                Le.system = this, this.cluster = new H, this.cluster.defineClusters(), this.reset(), this.createNewElements()
            }
            reset() {
                void 0 === this.sleeping ? this.sleeping = [] : this.sleeping = this.sleeping.concat(this.obstacles).concat(this.passives).concat(this.surfers).concat(this.enemies), this.grid = {
                    size: 32,
                    gap: 16,
                    height: 12,
                    padding: 12,
                    xGap: 0,
                    yGap: 0
                }, this.spawnClassic = {
                    row: {
                        next: 0
                    },
                    enemy: {
                        next: 1e3,
                        inc: 480
                    },
                    surfer: {
                        next: 30,
                        inc: 100
                    },
                    ramp: {
                        next: 500,
                        inc: 500
                    },
                    powerup: {
                        next: 650,
                        inc: 500
                    },
                    tentacle: {
                        next: 800,
                        inc: 500
                    },
                    dog: {
                        next: 3e3,
                        inc: 3e3
                    },
                    character: {
                        next: 2e3,
                        inc: 1e3
                    }
                }, this.spawnSpeed = {
                    row: {
                        next: 0,
                        inc: 1024
                    }
                }, this.spawnBuoy = {
                    row: {
                        next: 400,
                        inc: 1200
                    },
                    heart: {
                        next: 500,
                        inc: 1500
                    },
                    powerup: {
                        next: 3e3,
                        inc: 5e3
                    }
                }, this.characters = {}, this.everything = [], this.player = void 0, this.obstacles = [], this.passives = [], this.surfers = [], this.enemies = [], this.island = void 0, this.chest = void 0, this.nextBuoyIsLeft = !0, this.prevBuoyCluster = [], this.nextBuoyCluster = [], this.totalBuoyCount = 0, this.currentSpeedAct = 0, this.buoyGap = 1024, this.coveBuilt = !1, this.clustersLastSpawned = [], this.clusterArray = Object.keys(this.cluster.randomObj), this.allSpeedActs = Object.keys(this.cluster.speedActs)
            }
            createNewElements() {
                this.startingObjects = {
                    Docks64: 50,
                    Objects64: 80,
                    Objects32: 20,
                    Ramp64: 10,
                    Tentacle64: 3,
                    Wake64: 30,
                    Wake192: 15,
                    Seaweed64: 30,
                    Seaweed192: 15,
                    Coin64: 2,
                    Powerup64: 2,
                    Heart64: 1,
                    Whirlpool128: 5,
                    Ambient64: 10,
                    Sandbar256: 10,
                    Characters64: 1,
                    Dog64: 1,
                    Buoy64: 10,
                    BuoyGuide32: 20,
                    Island: 1,
                    Chest: 1,
                    Enemy: 3,
                    Surfer: 20
                };
                for (const e in this.startingObjects)
                    if (this.startingObjects.hasOwnProperty(e)) {
                        const s = this.startingObjects[e];
                        for (let t = 0; t < s; t++) {
                            const s = this.createObject(e, -1e3, -1e3, 0);
                            this.sleeping.push(s)
                        }
                    }
            }
            createPlayer() {
                const e = $e.data.session.xOrigin,
                    s = $e.data.session.yOrigin;
                this.player = this.createObject("Player", e, s), this.player.reset(), this.everything.push(this.player)
            }
            createSurfer() {
                const e = Math.random() * $e.data.session.width;
                let s = -32;
                const t = $e.data.randomNumberBetween(1, 13);
                t < $e.data.player.speed.raw && (s = $e.data.session.height), this.buildNewObject("Surfer", e, s).speed.max = t
            }
            createEnemy() {
                const e = Math.random() * $e.data.session.width;
                this.buildNewObject("Enemy", e, -32)
            }
            buildStartScene() {
                switch ($e.data.session.settings.mode) {
                    case "CLASSIC":
                        this.createClassicStart();
                        break;
                    case "SPEED":
                        this.createFirstSpeedStart();
                        break;
                    case "BUOY":
                        this.createFirstBuoyPass()
                }
            }
            update() {
                switch (this.putToSleep(), this.grid.xGap = this.grid.gap * this.grid.size + this.grid.padding * this.grid.size, this.grid.yGap = this.grid.height * this.grid.size + this.grid.padding * this.grid.size, $e.data.session.settings.mode) {
                    case "CLASSIC":
                        this.updateClassicMode();
                        break;
                    case "SPEED":
                        this.updateSpeedMode();
                        break;
                    case "BUOY":
                        this.updateBuoyMode()
                }
                this.mergeEverything()
            }
            updateClassicMode() {
                this.spawnClassic.row.next < $e.data.game.distance.yPx && (this.createClassicClusters(), this.spawnClassic.row.next += this.grid.yGap + this.grid.padding * this.grid.size * 2), !this.player.swimming && this.spawnClassic.enemy.next < $e.data.game.distance.y && (this.createEnemy(), this.spawnClassic.enemy.next += this.spawnClassic.enemy.inc), (this.spawnClassic.surfer.next < $e.data.game.distance.y || this.player.swimming && this.spawnClassic.surfer.next - this.spawnClassic.surfer.inc / 2 < $e.data.game.distance.y) && (this.createSurfer(), this.spawnClassic.surfer.next += this.spawnClassic.surfer.inc)
            }
            updateSpeedMode() {
                if (this.spawnSpeed.row.next < $e.data.game.distance.yPx)
                    if (this.currentSpeedAct > 0 && this.currentSpeedAct < this.allSpeedActs.length) this.createSpeedClusters(), this.currentSpeedAct % 2 == 0 ? this.spawnSpeed.row.next += this.spawnSpeed.row.inc + 64 : this.spawnSpeed.row.next += this.spawnSpeed.row.inc;
                    else if (void 0 === this.island && this.currentSpeedAct === this.allSpeedActs.length) {
                    const e = $e.data.session.xOrigin - $e.data.game.distance.xPx,
                        s = $e.data.session.yOrigin - $e.data.game.distance.yPx + this.spawnSpeed.row.next + ($e.data.session.height - $e.data.session.yOrigin) + this.spawnSpeed.row.inc;
                    this.buildIsland(e, s)
                }
            }
            updateBuoyMode() {
                this.spawnBuoy.row.next < $e.data.game.distance.yPx && (this.createBuoyPass(), this.createBuoyClusters(), this.spawnBuoy.row.next += this.spawnBuoy.row.inc)
            }
            createClassicStart() {
                const e = $e.data.session.xOrigin,
                    s = $e.data.session.yOrigin + 128;
                this.buildCluster(this.cluster.classicStart, e, s)
            }
            createClassicClusters() {
                const e = [0, this.grid.xGap, -this.grid.xGap, this.grid.xGap / 2, -this.grid.xGap / 2],
                    s = [0, 0, 0, this.grid.yGap, this.grid.yGap],
                    t = Math.round(this.grid.xGap / 448),
                    i = Math.round(this.grid.yGap / 448 * .7);
                for (let a = 0; a < e.length; a++) {
                    let o = $e.data.randomNumberBetween(-6, 6) * this.grid.size,
                        n = $e.data.randomNumberBetween(0, 12) * this.grid.size,
                        r = this.cluster.normal;
                    0 === a && (o = 0, n = 0, $e.data.player.distance.air > 0 ? r = this.cluster.passive : this.spawnClassic.character.next < $e.data.game.distance.y ? (r = this.cluster.characterScenes, this.spawnClassic.character.next += this.spawnClassic.character.inc) : this.spawnClassic.dog.next < $e.data.game.distance.y ? (r = this.cluster.dog, this.spawnClassic.dog.next += this.spawnClassic.dog.inc) : this.spawnClassic.powerup.next < $e.data.game.distance.y ? (r = this.cluster.powerup, this.spawnClassic.powerup.next += this.spawnClassic.powerup.inc) : this.spawnClassic.ramp.next < $e.data.game.distance.y ? (r = this.cluster.ramp, this.spawnClassic.ramp.next += this.spawnClassic.ramp.inc) : this.spawnClassic.tentacle.next < $e.data.game.distance.y && (r = this.cluster.tentacle, this.spawnClassic.tentacle.next += this.spawnClassic.tentacle.inc));
                    let c = 0;
                    "LEFT" === $e.data.player.direction || "DOWN LEFT" === $e.data.player.direction ? c = -this.grid.xGap / 2 : "RIGHT" !== $e.data.player.direction && "DOWN RIGHT" !== $e.data.player.direction || (c = this.grid.xGap / 2);
                    const h = $e.data.session.xOrigin + e[a] + o + c,
                        d = $e.data.session.height + 128 + s[a] + n;
                    this.buildCluster(r, h, d), this.buildClassicRandomObstacles(h, d, t, i, 448)
                }
            }
            createFirstSpeedStart() {
                const e = this.cluster.speedActs,
                    s = $e.data.session.xOrigin - $e.data.game.distance.xPx,
                    t = $e.data.session.yOrigin - $e.data.game.distance.yPx + this.spawnSpeed.row.next,
                    i = this.allSpeedActs[this.currentSpeedAct];
                this.buildCluster(e, s, t, !1, i), this.spawnSpeed.row.next += this.spawnSpeed.row.inc - ($e.data.session.height - $e.data.session.yOrigin), this.currentSpeedAct += 1
            }
            createSpeedClusters() {
                const e = this.cluster.speedActs,
                    s = $e.data.session.xOrigin - $e.data.game.distance.xPx,
                    t = $e.data.session.yOrigin - $e.data.game.distance.yPx + this.spawnSpeed.row.next + ($e.data.session.height - $e.data.session.yOrigin),
                    i = this.allSpeedActs[this.currentSpeedAct];
                this.buildCluster(e, s, t, !1, i), this.currentSpeedAct += 1
            }
            createFirstBuoyPass() {
                const e = $e.data.session.height - 128;
                this.nextBuoyCluster = this.buildCluster(this.cluster.buoyFirst, $e.data.session.xOrigin, e, !0)
            }
            createBuoyPass() {
                let e, s;
                this.totalBuoyCount += 1;
                const t = $e.data.session.height + 128 - $e.data.game.distance.yPx + this.spawnBuoy.row.next;
                this.nextBuoyIsLeft ? (e = this.cluster.buoyLeft, s = $e.data.session.xOrigin - 320 - $e.data.game.distance.xPx - 1 * this.grid.size, this.nextBuoyIsLeft = !1) : (e = this.cluster.buoyRight, s = $e.data.session.xOrigin + 320 - $e.data.game.distance.xPx + 1 * this.grid.size, this.nextBuoyIsLeft = !0), this.prevBuoyCluster = this.nextBuoyCluster, this.nextBuoyCluster = this.buildCluster(e, s, t, !0)
            }
            confirmBuoyHit(e) {
                const s = this.prevBuoyCluster.concat(this.nextBuoyCluster);
                for (let t = 0; t < s.length; t++) s[t].buoyId === e && (s[t].buoyTriggered = !0, "BuoyGuide32" === s[t].type ? s[t].pose = 7 : "Buoy64" === s[t].type && (s[t].pose = 24))
            }
            denyBuoyHit(e) {
                const s = this.prevBuoyCluster.concat(this.nextBuoyCluster);
                for (let t = 0; t < s.length; t++) s[t].buoyId === e && (s[t].buoyTriggered = !1, "BuoyGuide32" === s[t].type && (s[t].pose = 8))
            }
            createBuoyClusters() {
                const e = this.cluster.normal,
                    s = $e.data.session.xOrigin - $e.data.game.distance.xPx;
                let t = $e.data.session.height + .6 * this.spawnBuoy.row.inc;
                const i = $e.data.randomNumberBetween(0, 2) * this.grid.size,
                    a = $e.data.randomNumberBetween(0, 3) * this.grid.size;
                this.buildCluster(e, s - 560 - i, t), this.buildCluster(e, s + 560 + i, t + a);
                let o = 128;
                this.nextBuoyIsLeft && (o = -128), this.buildCluster(e, s + o, $e.data.session.height + 128 - $e.data.game.distance.yPx + this.spawnBuoy.row.next), this.buildCluster(this.cluster.buoyRandom, s, t), t += 5.5 * this.grid.size, this.spawnBuoy.heart.next < $e.data.game.distance.y ? (this.buildNewObject("Heart64", s, t, 4), this.spawnBuoy.heart.next += this.spawnBuoy.heart.inc) : this.spawnBuoy.powerup.next < $e.data.game.distance.y ? (this.buildNewObject("Powerup64", s, t, 3), this.spawnBuoy.powerup.next += this.spawnBuoy.powerup.inc) : Math.random() < .1 && this.buildNewObject("Whirlpool128", s, t, 1)
            }
            buildCluster(e, s, t, i = !1, a) {
                let o;
                if (a) o = e[a];
                else {
                    const s = Object.keys(e);
                    o = e[$e.data.randomArrayIndex(s)];
                    let t = 0;
                    for (; - 1 !== this.clustersLastSpawned.indexOf(o) && t < 5;) o = e[$e.data.randomArrayIndex(s)], t++
                }
                this.clustersLastSpawned.unshift(o), this.clustersLastSpawned.length > 20 && this.clustersLastSpawned.pop();
                const n = s,
                    r = t,
                    c = [];
                for (const e in o)
                    if (o.hasOwnProperty(e)) {
                        const s = o[e];
                        for (let t = 0; t < s.length - 1; t++) {
                            const i = s[t],
                                a = n + i[0] * this.grid.size,
                                o = r + i[1] * this.grid.size;
                            let h = i[2];
                            void 0 === h ? h = $e.data.randomArrayIndex(s[s.length - 1]) : Array.isArray(h) && (h = $e.data.randomArrayIndex(i[2]));
                            const d = this.buildNewObject(e, a, o, h);
                            c.push(d)
                        }
                    } if (i) return c
            }
            buildClassicRandomObstacles(e, s, t, i, a) {
                const o = this.grid.padding / 3;
                for (let i = 0; i < t; i++) {
                    const t = e + i * a,
                        n = s + .66 * this.grid.yGap;
                    this.buildNewRandomObstacle(t, n, o)
                }
                for (let t = 0; t < i; t++) {
                    const i = e + this.grid.xGap / 2,
                        n = s + t * a / 2;
                    this.buildNewRandomObstacle(i, n, o)
                }
                for (let t = 0; t < i; t++) {
                    const i = e - this.grid.xGap / 2,
                        n = s + a / 2 + t * a / 2;
                    this.buildNewRandomObstacle(i, n, o)
                }
            }
            buildNewRandomObstacle(e, s, t) {
                const i = $e.data.randomNumberBetween(-4 - t, 4 + t) * this.grid.size,
                    a = $e.data.randomNumberBetween(-2 - t, 2 + t) * this.grid.size;
                let o = "Objects64";
                Math.random() < .5 && (o = $e.data.randomArrayIndex(this.clusterArray));
                const n = $e.data.randomArrayIndex(this.cluster.randomObj[o]);
                this.buildNewObject(o, e + i, s + a, n)
            }
            buildIsland(e, s) {
                this.island = this.buildNewObject("Island", e, s), this.chest = this.buildNewObject("Chest", e + 180, s - 64, 6), this.buildCluster(this.cluster.island, e, s - 256 - 64, !1, "island")
            }
            buildCove() {
                this.coveBuilt || (this.coveBuilt = !0, this.spawnClassic.row.next += this.grid.yGap + this.grid.padding * this.grid.size * 2, this.obstacles = this.goToSleep(this.obstacles, -64, $e.data.session.height + 64), this.buildCluster(this.cluster.cove, $e.data.session.xOrigin - ($e.data.session.height - $e.data.session.yOrigin) - 256, $e.data.session.height))
            }
            buildNewObject(e, s, t, i = 1) {
                let a, o = this.wakeObject(e, s, t, i);
                switch (o || (o = this.createObject(e, s, t, i)), o.effect) {
                    case "HIT":
                    case "POWERUP":
                    case "HEART":
                    case "RAMP":
                    case "COIN":
                    case "TENTACLE":
                    case "DOG":
                    case "DOGCRASH":
                        a = this.obstacles;
                        break;
                    case "SLOW":
                    case "SUPERSLOW":
                    case "SPIN":
                    case "AMBIENT":
                    case "ISLAND":
                    case "BUOYTRIGGER":
                    case "SWIMTRIGGER":
                        a = this.passives;
                        break;
                    case "ENEMY":
                        a = this.enemies;
                        break;
                    case "SURFER":
                        a = this.surfers;
                        break;
                    default:
                        a = this.obstacles
                }
                switch (o.type) {
                    case "BuoyTrigger":
                    case "BuoyGuide32":
                    case "Buoy64":
                        o.buoyId = this.totalBuoyCount
                }
                return a.push(o), o
            }
            createObject(e, s, t, i) {
                switch (e) {
                    case "Docks64":
                        return new he(s, t, i);
                    case "Objects64":
                        return new de(s, t, i);
                    case "Objects32":
                        return new le(s, t, i);
                    case "Ramp64":
                        return new pe(s, t, 1);
                    case "Tentacle64":
                        return new ue(s, t, 2);
                    case "Wake64":
                        return new ge(s, t, i);
                    case "Wake192":
                        return new me(s, t, i);
                    case "Seaweed64":
                        return new ye(s, t, i);
                    case "Seaweed192":
                        return new be(s, t, i);
                    case "Powerup64":
                        return new we(s, t, 3);
                    case "Heart64":
                        return new fe(s, t, 4);
                    case "Coin64":
                        return new Se(s, t, 5);
                    case "Whirlpool128":
                        return new ke(s, t, 1);
                    case "Ambient64":
                        return new Oe(s, t, i);
                    case "Sandbar256":
                        return new xe(s, t, i);
                    case "Characters64":
                        return new ve(s, t, i);
                    case "Dog64":
                        return new Ce(s, t, 7);
                    case "DogCrash64":
                        return new Ee(s, t, 8);
                    case "Buoy64":
                        return new Te(s, t, 23);
                    case "BuoyGuide32":
                        return new Pe(s, t, 6);
                    case "BuoyTrigger":
                        return new Me(s, t, 1);
                    case "SwimTrigger":
                        return new Ie(s, t, 1);
                    case "Island":
                        return new Ae(s, t, 1);
                    case "Chest":
                        return new De(s, t, 6);
                    case "Enemy":
                        return new re(s, t);
                    case "Surfer":
                        return new ce(s, t);
                    case "Player":
                        return new je(s, t)
                }
            }
            mergeEverything() {
                const e = this.obstacles.concat(this.surfers).concat(this.enemies).concat(this.player);
                if (e.sort((e, s) => e.hitbox.y + e.hitbox.height - (s.hitbox.y + s.hitbox.height)), $e.data.player.distance.air > 0) {
                    const s = e.findIndex(e => "Player" === e.type),
                        t = e.splice(s, 1)[0];
                    e.push(t)
                }
                this.everything = this.passives.concat(e)
            }
            wakeObject(e, s, t, i) {
                let a = void 0;
                const o = this.wakeFromSleep(e, i);
                return !!o && (a = o, a.shift(s - a.x, t - a.y), a.reset(), a)
            }
            wakeFromSleep(e, s) {
                let t = 0,
                    i = this.sleeping;
                for (; t < i.length; t++)
                    if (i[t].type === e) {
                        i[t].pose = s;
                        const e = i[t];
                        return i = i.splice(t, 1), e
                    }
            }
            putToSleep() {
                this.obstacles = this.goToSleep(this.obstacles, -64), this.passives = this.goToSleep(this.passives, -64), this.surfers = this.goToSleep(this.surfers, -64, $e.data.session.height + 64), this.enemies = this.goToSleep(this.enemies, -128, $e.data.session.height + 128)
            }
            goToSleep(e, s, t = 1e6) {
                function i(e) {
                    return e.y > s && e.y < t && !1 === e.sleep
                }
                const a = e.filter(e => !i(e));
                return this.sleeping = this.sleeping.concat(a), e.filter(e => i(e))
            }
        }
        class Be {
            constructor() {
                if (Be.system) return Be.system;
                Be.system = this, this.reset()
            }
            reset() {
                this.lastTime = 0, this.thisTime = 0, this.lastInput = 0, this.doubleDelta = 300
            }
            checkDoubleInput(e) {
                if (this.thisTime = Date.now(), this.thisTime - this.lastTime <= this.doubleDelta) {
                    if (this.lastInput === e) switch (e) {
                        case "DOWN":
                            this.routeInputType("BOOST")
                    }
                    this.thisTime = 0
                }
                this.lastTime = this.thisTime, this.lastInput = e
            }
            routeInputType(e) {
                const s = $e.data.session.state;
                switch (this.checkDoubleInput(e), e) {
                    case "UP":
                        this.inputUp(s);
                        break;
                    case "DOWN":
                        this.inputDown(s);
                        break;
                    case "DOWN LEFT":
                        this.inputDownLeft(s);
                        break;
                    case "DOWN RIGHT":
                        this.inputDownRight(s);
                        break;
                    case "LEFT":
                        this.inputLeft(s);
                        break;
                    case "RIGHT":
                        this.inputRight(s);
                        break;
                    case "FORWARD":
                        this.inputForward(s);
                        break;
                    case "BACKWARD":
                        this.inputBackward(s);
                        break;
                    case "TOGGLE PLAY":
                        this.inputTogglePlay(s);
                        break;
                    case "CYCLEMODE":
                        this.inputCycleMode(s);
                        break;
                    case "BOOST":
                        this.inputBoost(s);
                        break;
                    case "SETTINGS":
                        this.inputSettings(s);
                        break;
                    case "KONAMI":
                        this.codeKonami(s);
                        break;
                    case "MICROSOFT":
                        this.codeMicrosoft(s);
                        break;
                    case "EDGE":
                        this.codeEdge(s);
                        break;
                    case "RESET":
                        Xe.system.changeGameState("MENU")
                }
            }
            inputUp(e) {
                const s = $e.data.session.isFlyoutActive;
                "PLAY" !== e || s ? this.inputMenuUp(e) : je.system.changeState("STOP")
            }
            inputDown(e) {
                const s = $e.data.player.state,
                    t = $e.data.session.isFlyoutActive;
                "PLAY" !== e || t ? this.inputMenuDown(e) : "AIR" === s.substring(0, 3) ? this.inputTrick(e) : je.system.changeDirection("DOWN")
            }
            inputLeft(e) {
                const s = $e.data.player.direction,
                    t = $e.data.session.isFlyoutActive;
                "PLAY" !== e || t ? this.inputMenuLeft(e) : "DOWN LEFT" === s || "UP" === s ? je.system.changeDirection("LEFT") : "LEFT" !== s && je.system.changeDirection("DOWN LEFT")
            }
            inputDownLeft(e) {
                const s = $e.data.session.isFlyoutActive;
                "PLAY" !== e || s ? this.inputMenuLeft(e) : je.system.changeDirection("DOWN LEFT")
            }
            inputRight(e) {
                const s = $e.data.player.direction,
                    t = $e.data.session.isFlyoutActive;
                "PLAY" !== e || t ? this.inputMenuRight(e) : "DOWN RIGHT" === s || "UP" === s ? je.system.changeDirection("RIGHT") : "RIGHT" !== s && je.system.changeDirection("DOWN RIGHT")
            }
            inputDownRight(e) {
                const s = $e.data.session.isFlyoutActive;
                "PLAY" !== e || s ? this.inputMenuRight(e) : je.system.changeDirection("DOWN RIGHT")
            }
            inputMenuUp(e) {}
            inputMenuDown(e) {}
            inputMenuLeft(e) {
                const s = $e.data.session.isFlyoutActive;
                "MENU" !== e || s || je.system.changeCharacter(-1)
            }
            inputMenuRight(e) {
                const s = $e.data.session.isFlyoutActive;
                "MENU" !== e || s || je.system.changeCharacter(1)
            }
            inputForward(e) {
                const s = $e.data.session.isFlyoutActive,
                    t = document.activeElement;
                if (s && t)
                    if ("select" === t.tagName.toLowerCase()) {
                        let e = Number(t.value) + 1;
                        e > 3 && (e = 1), t.value = e, Flyout.system.changeGameMode(t)
                    } else document.activeElement.click();
                else "PLAY" === e || "PAUSE" === e ? this.inputTogglePlay(e) : "MENU" !== e || s ? "OVER" === e && Xe.system.changeGameState("MENU") : Xe.system.changeGameState("PLAY")
            }
            inputBackward(e) {
                const s = $e.data.session.isFlyoutActive;
                "PLAY" === e || "PAUSE" === e || s ? this.inputTogglePlay(e) : "OVER" === e && Xe.system.changeGameState("MENU")
            }
            inputSettings(e) {
                $e.data.session.isFlyoutActive ? Flyout.system.destroyFlyout() : Flyout.system.buildFlyout()
            }
            inputTogglePlay(e) {
                $e.data.session.isFlyoutActive && Flyout.system.destroyFlyout(), "PLAY" === e ? Xe.system.changeGameState("PAUSE") : "PAUSE" === e && Xe.system.changeGameState("PLAY")
            }
            inputCycleMode(e) {
                if ("MENU" === e) {
                    const e = $e.data.session.settings.mode;
                    let s;
                    s = "CLASSIC" === e ? "SPEED" : "SPEED" === e ? "BUOY" : "CLASSIC", $e.data.session.settings.mode = s, $e.data.saveGameSettings(), Ve.system.buildMenu(), Ve.system.sendNotification("MODE")
                }
            }
            inputBoost(e) {
                "PLAY" === e && je.system.changeState("BOOST")
            }
            inputTrick(e) {
                "PLAY" === e && je.system.newTrick()
            }
            codeKonami(e) {
                "MENU" === e && (je.system.konamiSprite(), Ve.system.sendNotification("KONAMI"))
            }
            codeMicrosoft(e) {
                "MENU" === e && ($e.data.game.enhancements.codeUsed = !0, $e.data.game.enhancements.infiniteLives = !0, $e.data.game.lives.current = 3, Ve.system.updateIcons(), Ve.system.sendNotification("MICROSOFT", 8e3))
            }
            codeEdge(e) {
                "MENU" === e && ($e.data.game.enhancements.codeUsed = !0, $e.data.game.enhancements.infinitePowerups = !0, $e.data.game.powerups.current = 3, Ve.system.updateIcons(), Ve.system.sendNotification("EDGE", 8e3))
            }
        }
        class Re {
            constructor() {
                if (Re.system) return Re.system;
                Re.system = this, this.reset()
            }
            reset() {
                this.controllerList = [], this.lastJoystick = void 0, this.pressed = {}, this.controllerType = "xbox", this.defineVibrations(), this.setVibration()
            }
            defineVibrations() {
                this.newVibration = {
                    DEFAULT: {
                        DUR: 0,
                        DELAY: 0,
                        WEAK: .4,
                        STRONG: .4
                    },
                    TINY: {
                        DUR: 100,
                        DELAY: 0,
                        WEAK: .05,
                        STRONG: 0
                    },
                    SMALL: {
                        DUR: 100,
                        DELAY: 0,
                        WEAK: .15,
                        STRONG: 0
                    },
                    BIG: {
                        DUR: 600,
                        DELAY: 0,
                        WEAK: .5,
                        STRONG: 0
                    },
                    BOOST: {
                        DUR: 3e3,
                        DELAY: 0,
                        WEAK: 0,
                        STRONG: .25
                    },
                    PICKUP: {
                        DUR: 200,
                        DELAY: 0,
                        WEAK: .2,
                        STRONG: 0
                    },
                    RAMP: {
                        DUR: 200,
                        DELAY: 0,
                        WEAK: 0,
                        STRONG: .15
                    },
                    SLOW: {
                        DUR: 400,
                        DELAY: 0,
                        WEAK: 0,
                        STRONG: .15
                    },
                    CRASH: {
                        DUR: 300,
                        DELAY: 0,
                        WEAK: .4,
                        STRONG: .4
                    }
                }
            }
            setVibration(e = "DEFAULT") {
                const s = this.newVibration[e];
                this.vibrateProps = {
                    BASE: s.DUR,
                    TIMER: s.DUR,
                    DELAY: s.DELAY,
                    WEAK: s.WEAK,
                    STRONG: s.STRONG
                }
            }
            vibrateController(e, s, t, i) {
                const a = $e.data.controller;
                a.pad.vibrationActuator && "function" == typeof a.pad.vibrationActuator.playEffect && a.pad.vibrationActuator.playEffect("dual-rumble", {
                    startDelay: e,
                    duration: s,
                    weakMagnitude: t,
                    strongMagnitude: i
                })
            }
            update() {
                if (-1 === $e.data.controller.index && this.controllerList.length > 0) {
                    const e = this.controllerList;
                    for (let s = 0; s < e.length; s++) {
                        const t = navigator.getGamepads()[e[s]];
                        if (void 0 !== t) {
                            const i = this.checkJoysticks(t),
                                a = this.checkButtons(t);
                            if (void 0 !== i || void 0 !== a) return void this.setController(e[s], t)
                        }
                    }
                } else if (this.controllerList.length > 0) {
                    this.vibrateProps.TIMER > 0 && this.checkVibrations();
                    const e = $e.data.controller;
                    e.pad = navigator.getGamepads()[e.index], void 0 !== e.pad && (this.checkJoysticks(e.pad), this.checkButtons(e.pad))
                }
            }
            checkVibrations() {
                const e = this.vibrateProps,
                    s = e.TIMER / e.BASE;
                this.vibrateController(e.DELAY, e.TIMER, s * e.WEAK, s * e.STRONG), e.TIMER -= 1e3 * $e.data.game.time.loop, e.TIMER <= 0 && this.setVibration()
            }
            setController(e, s) {
                const t = $e.data.controller;
                t.index = e, t.pad = s;
                let i = "xbox";
                t.pad.id.toLowerCase().includes("045e") || t.pad.id.toLowerCase().includes("xbox") ? i = "xbox" : (t.pad.id.toLowerCase().includes("054c") || t.pad.id.toLowerCase().includes("playstation")) && (i = "ps"), this.controllerType = i, $e.data.changeInputMethod(i)
            }
            checkJoysticks(e) {
                const s = e.axes[0] > .5 || e.axes[2] > .5,
                    t = e.axes[0] < -.5 || e.axes[2] < -.5,
                    i = e.axes[1] > .5 || e.axes[3] > .5,
                    a = e.axes[1] < -.5 || e.axes[3] < -.5;
                let o = void 0;
                if (s || t || a || i ? ($e.data.changeInputMethod(this.controllerType), !a || s || t ? !i || s || t ? !t || a || i ? !s || a || i ? s && a ? o = "RIGHT" : s && i ? o = "DOWN RIGHT" : t && a ? o = "LEFT" : t && i && (o = "DOWN LEFT") : o = "RIGHT" : o = "LEFT" : o = "DOWN" : o = "UP") : this.lastJoystick = void 0, this.lastJoystick !== o) return this.lastJoystick = o, void 0 !== o && Be.system.routeInputType(o), o
            }
            checkButtons(e) {
                function s(e) {
                    return "object" == typeof e ? e.pressed : 1 == e
                }
                if (s(e.buttons[4]) && s(e.buttons[5])) return Be.system.routeInputType("RESET"), this.pressed[4] = !0, void(this.pressed[5] = !0);
                let t = void 0;
                for (let i = 0; i < e.buttons.length; i++)
                    if (s(e.buttons[i])) {
                        if (this.pressed[i]) return;
                        switch (i) {
                            case 0:
                                t = "FORWARD";
                                break;
                            case 1:
                                t = "BACKWARD";
                                break;
                            case 2:
                                break;
                            case 3:
                                t = "CYCLEMODE";
                                break;
                            case 4:
                                t = "LEFT";
                                break;
                            case 5:
                                t = "RIGHT";
                                break;
                            case 6:
                            case 7:
                                t = "BOOST";
                                break;
                            case 8:
                            case 9:
                                t = "TOGGLE PLAY";
                                break;
                            case 10:
                            case 11:
                                break;
                            case 12:
                                t = "UP";
                                break;
                            case 13:
                                t = "DOWN";
                                break;
                            case 14:
                                t = "LEFT";
                                break;
                            case 15:
                                t = "RIGHT";
                                break;
                            case 16:
                            case 17:
                                t = "TOGGLE PLAY"
                        }
                        this.pressed[i] = !0, $e.data.changeInputMethod(this.controllerType), Be.system.routeInputType(t)
                    } else this.pressed[i] = !1;
                return t
            }
        }
        class je extends ae {
            constructor(e, s, t) {
                if (super(e, s, 64, 64, t, 1), je.system) return je.system;
                je.system = this, this.hitbox = new ne(this, 20, 32, 24, 24), this.reset()
            }
            reset() {
                super.reset(), this.type = "Player", this.defineEffect("PLAYER"), this.isAnimated = !1, this.obstaclesHit = [], this.lastBuoyId = -1, this.shadowOffset = 0, this.animPose = 0, this.konamiActive = !1, this.classicFinishLine = !1, this.surfboardFrame = {
                    current: 1,
                    updated: this.creation
                }, this.dogEndPose = {
                    current: 7,
                    updated: this.creation
                }, this.spriteImage = {
                    characters: U,
                    surfboard: _,
                    shield: Z,
                    dog: U,
                    swimming: V
                }, this.sprite = this.spriteImage.characters, this.resetSwim()
            }
            move() {}
            update() {
                super.update(), this.checkBoundaries(), this.cycleFrame(this.surfboardFrame, this.spriteImage.surfboard), this.updateState(), "STOP" !== $e.data.player.state && "CRASH" !== $e.data.player.state && this.updateSpeed()
            }
            checkBoundaries() {
                const e = $e.data.game.distance.xPx,
                    s = $e.data.game.distance.yPx;
                switch ($e.data.session.settings.mode) {
                    case "CLASSIC":
                        !this.swimming && e < -6400 && s < 8e3 && Le.system.buildCove();
                        break;
                    case "SPEED":
                        (e > 576 || e < -576) && this.bounce();
                        break;
                    case "BUOY":
                        (e > 960 || e < -960) && this.bounce()
                }
            }
            changeCharacter(e, s = !1) {
                if (this.konamiActive) return;
                const t = $e.data.session.settings.character;
                let i = t;
                if (s) i = e;
                else {
                    if (!(t + e >= 1 && t + e <= 7)) return;
                    i = t + e
                }
                this.frame.current = i, this.frame.updated = $e.data.game.time.elapsed, $e.data.session.settings.character = i, $e.data.saveGameSettings(), Re.system.setVibration("SMALL")
            }
            changeState(e) {
                const s = $e.data.player;
                if (!(s.distance.air > 0 && "AIR" !== e.substring(0, 3) || "BOOST" === e && $e.data.game.powerups.current <= 0 || s.timer.crash > 0)) {
                    switch (e) {
                        case "DEFAULT":
                            s.speed.max = s.speed.base, Re.system.setVibration("TINY");
                            break;
                        case "STOP":
                            s.speed.current = 0, s.speed.raw = 0, s.speed.max = 0, this.changeDirection("UP"), this.changePose(1), Re.system.setVibration("TINY");
                            break;
                        case "CRASH":
                            s.speed.current = 0, s.speed.raw = 0, s.speed.max = 0, this.changePose(7);
                            break;
                        case "AIR1":
                        case "AIR2":
                        case "AIR3":
                        case "AIR4":
                            s.speed.max = s.speed.base + s.speed.airAdd, this.changePose(9 + $e.data.player.trick);
                            break;
                        case "BOOST":
                            this.boost()
                    }
                    $e.data.player.state = e
                }
            }
            changeDirection(e) {
                const s = $e.data.player;
                if (!(s.timer.crash > 0 || s.distance.bounce > 0)) {
                    if (s.distance.air > 0) {
                        if ("DOWN" !== e) return;
                        this.newTrick()
                    }
                    switch ("STOP" === s.state && this.changeState("DEFAULT"), e) {
                        case "LEFT":
                            s.angle.current = -132, this.changePose(2);
                            break;
                        case "DOWN LEFT":
                            s.angle.current = -150, this.changePose(3);
                            break;
                        case "DOWN":
                            s.angle.current = 180, this.changePose(4);
                            break;
                        case "DOWN RIGHT":
                            s.angle.current = 150, this.changePose(5);
                            break;
                        case "RIGHT":
                            s.angle.current = 132, this.changePose(6)
                    }
                    s.direction = e, s.angle.radian = (s.angle.current - 90) * Math.PI / 180
                }
            }
            updateState() {
                const e = $e.data.player.timer,
                    s = $e.data.player.distance;
                s.air > 0 && (s.air -= $e.data.player.speed.current, s.air <= 0) ? this.endAir() : s.boost > 0 && (s.boost -= $e.data.player.speed.current, s.boost <= 0) ? this.endBoost() : s.bounce > 0 && (s.bounce -= $e.data.player.speed.current, s.bounce <= 0) ? this.endBounce() : s.immunity > 0 && (s.immunity -= $e.data.player.speed.current, s.immunity <= 0) ? this.endImmune() : (e.crash > 0 && (e.crash -= $e.data.game.time.loop * $e.data.game.time.scale, e.crash <= 0 && this.endCrash()), this.swimming && ("CRASH" === $e.data.player.state ? (this.frame.current < 5 && this.changeFrame(5), this.cycleSwimFrame(5, 6)) : this.cycleSwimFrame(1, 4)))
            }
            updateSwim() {
                const e = $e.data.player.timer;
                e.swim > 0 && (e.swim -= $e.data.game.time.loop * $e.data.game.time.scale, e.swim <= 0 && this.swim())
            }
            cycleSwimFrame(e, s) {
                if ($e.data.game.time.elapsed >= this.frame.updated + 1 / this.fps) {
                    let t = this.frame.current + 1;
                    t > s && (t = e), this.changeFrame(t)
                }
            }
            cycleDogWinFrame(e, s) {
                if ($e.data.game.time.elapsed >= this.dogEndPose.updated + 1 / 4) {
                    let t = this.dogEndPose.current + 1;
                    t > s && (t = e), this.dogEndPose.current = t, this.dogEndPose.updated = $e.data.game.time.elapsed
                }
            }
            updateSpeed() {
                const e = $e.data.player.speed;
                let s = 1;
                ($e.data.player.distance.air > 0 || $e.data.player.distance.boost > 0) && (s = 8), e.raw < e.initial ? e.raw = e.initial : e.raw < e.max ? e.raw += e.accel * s * $e.data.game.time.scale : e.raw > e.max ? e.raw -= e.accel * s * $e.data.game.time.scale : e.raw = e.max, e.current = e.raw * $e.data.game.time.scale
            }
            changePose(e) {
                this.swimming || (e || (e = this.pose + 1), this.pose = e)
            }
            stop() {
                this.changePose(1)
            }
            slow() {
                $e.data.player.speed.raw = .8 * $e.data.player.speed.raw, Re.system.setVibration("SLOW")
            }
            superslow() {
                $e.data.player.speed.raw = .6 * $e.data.player.speed.raw, Re.system.setVibration("SLOW")
            }
            crash() {
                this.changeState("CRASH"), $e.data.player.timer.crash = 1, $e.data.game.enhancements.collectedDog ? ($e.data.game.enhancements.collectedDog = !1, $e.data.game.shields.current = 0, Ve.system.announceMessage("lostShield")) : $e.data.game.enhancements.infiniteLives ? Ve.system.announceMessage("playerCrash") : ($e.data.game.lives.current -= 1, Ve.system.announceMessage("playerLifeUsed")), Ve.system.refreshInterface(), $e.data.game.lives.current <= 0 ? this.lose() : Re.system.setVibration("CRASH")
            }
            endCrash() {
                this.changeState("STOP"), $e.data.player.timer.crash = 0, this.immune()
            }
            air(e = 1600) {
                this.changeDirection("DOWN"), $e.data.player.distance.air = e, this.shadowOffset = 0, this.newTrick(), Re.system.setVibration("RAMP")
            }
            newTrick() {
                $e.data.player.trick = $e.data.player.trick % 4 + 1, this.changeState("AIR" + $e.data.player.trick), Re.system.setVibration("SMALL")
            }
            endAir() {
                this.changeState("DEFAULT"), this.changeDirection("DOWN"), $e.data.player.trick = 0, $e.data.player.distance.air = 0, Re.system.setVibration("SLOW"), this.immune()
            }
            boost() {
                $e.data.game.enhancements.infinitePowerups ? Ve.system.announceMessage("playerBoost") : ($e.data.game.powerups.current -= 1, $e.data.game.powerups.numUsed += 1, Ve.system.announceMessage("playerBoostUsed")), $e.data.player.distance.boost = 2400, $e.data.player.speed.max = $e.data.player.speed.base + $e.data.player.speed.boostAdd, Ve.system.refreshInterface(), Re.system.setVibration("BOOST")
            }
            endBoost() {
                this.changeState("DEFAULT"), $e.data.player.distance.boost = 0
            }
            powerup() {
                $e.data.game.powerups.numCollected += 1, $e.data.game.powerups.current >= $e.data.game.powerups.max || ($e.data.game.powerups.current += 1, Ve.system.refreshInterface(), Re.system.setVibration("PICKUP"), Ve.system.announceMessage("collectedBoost"))
            }
            heart() {
                $e.data.game.lives.numCollected += 1, $e.data.game.lives.current >= $e.data.game.lives.max || ($e.data.game.lives.current += 1, Ve.system.refreshInterface(), Re.system.setVibration("PICKUP"), Ve.system.announceMessage("collectedLife"))
            }
            coin() {
                $e.data.game.coins += 1, Re.system.setVibration("PICKUP"), Ve.system.announceMessage("collectedCoin")
            }
            spin() {
                $e.data.player.speed.raw = .8 * $e.data.player.speed.raw;
                const e = $e.data.player.direction;
                let s = "DOWN";
                const t = ["LEFT", "DOWN LEFT", "RIGHT", "DOWN RIGHT"];
                switch (e) {
                    case "DOWN":
                        s = t[$e.data.randomNumberBetween(0, 3)];
                        break;
                    case "DOWN RIGHT":
                    case "RIGHT":
                        s = t[$e.data.randomNumberBetween(0, 1)];
                        break;
                    case "DOWN LEFT":
                    case "LEFT":
                        s = t[$e.data.randomNumberBetween(2, 3)]
                }
                this.changeDirection(s), Ve.system.announceMessage("playerSpun", e.toLowerCase()), Re.system.setVibration("SLOW")
            }
            bounce() {
                this.spin(), $e.data.player.distance.bounce = 32
            }
            endBounce() {
                $e.data.player.distance.bounce = 0
            }
            immune() {
                $e.data.player.distance.immunity = 96
            }
            endImmune() {
                $e.data.player.distance.immunity = 0
            }
            rescueDog() {
                $e.data.game.enhancements.collectedDog = !0, "CLASSIC" === $e.data.session.settings.mode && ($e.data.game.shields.current = $e.data.game.shields.max, Ve.system.refreshInterface()), Re.system.setVibration("PICKUP")
            }
            dogShield() {
                $e.data.game.shields.current -= 1, Ve.system.refreshInterface(), Re.system.setVibration("SMALL"), Ve.system.announceMessage("playerShieldUsed")
            }
            grabbedByEnemy() {
                $e.data.game.lives.current = 0, Ve.system.refreshInterface(), this.lose(!0)
            }
            arriveAtIsland() {
                $e.data.game.isAtIsland = !0, Xe.system.changeGameState("OVER");
                const e = $e.data.player.speed;
                e.current = 0, e.raw = 0, e.max = 0, this.changePose(9), Re.system.setVibration("BIG")
            }
            triggeredBuoy(e) {
                e - 1 === this.lastBuoyId && ($e.data.game.buoys += 1, Ve.system.announceMessage("triggeredBuoy")), this.lastBuoyId = e, Re.system.setVibration("SMALL")
            }
            missedBuoy(e) {
                $e.data.game.buoys = 0, this.lastBuoyId = e, Re.system.setVibration("SLOW"), Ve.system.announceMessage("missedBuoy")
            }
            konamiSprite() {
                this.konamiActive = !0, this.changeFrame(8)
            }
            startSwimTimer() {
                $e.data.player.timer.swim = 5
            }
            swim() {
                this.swimming = !0, this.width = 128, this.height = 128, this.hitbox = new ne(this, 32, 80, 64, 40), this.sprite = this.spriteImage.swimming, this.pose = 1, this.frame.current = 1, $e.data.player.timer.swim = 0, $e.data.player.speed.base = $e.data.player.speed.base + 3, $e.data.player.speed.max = $e.data.player.speed.base, $e.data.game.enhancements.codeUsed = !0, Ve.system.sendNotification("EVENT", 8e3), Re.system.setVibration("BIG")
            }
            resetSwim() {
                this.swimming = !1, this.width = 64, this.height = 64, this.hitbox = new ne(this, 20, 32, 24, 24), this.sprite = this.spriteImage.characters, this.changeCharacter($e.data.session.settings.character, !0)
            }
            lose(e = !1) {
                $e.data.game.grabbedByEnemy = e, Xe.system.changeGameState("OVER");
                const s = $e.data.player.speed;
                s.current = 0, s.raw = 0, s.max = 0, e ? this.changePose(8) : this.changeState("CRASH"), Re.system.setVibration("BIG")
            }
            enablePlayer() {
                this.changeState("DEFAULT"), this.changeDirection("DOWN"), Re.system.setVibration("BIG"), this.frame.updated = $e.data.game.time.elapsed, this.surfboardFrame.updated = $e.data.game.time.elapsed
            }
            drawShadow() {
                const e = $e.data.ctx;
                $e.data.player.distance.air <= 256 ? this.shadowOffset = $e.data.player.distance.air / 4 : this.shadowOffset < 64 ? this.shadowOffset += 3 * $e.data.game.time.scale : this.shadowOffset = 64, e.beginPath(), e.arc(this.x, this.y + 16 + this.shadowOffset, 20 - this.shadowOffset / 12, 0, 2 * Math.PI), e.fillStyle = "rgba(0,0,0," + (.6 - this.shadowOffset / 200) + ")", e.fill()
            }
            renderCharacterSelection() {
                if (this.cycleFrame(this.surfboardFrame, this.spriteImage.surfboard), $e.data.game.time.elapsed >= this.frame.updated + 1 / this.fps) {
                    this.frame.updated = $e.data.game.time.elapsed;
                    const e = [4, 5, 6, 6, 6, 5, 4, 3, 2, 2, 2, 3];
                    this.changePose(e[this.animPose]), this.animPose += 1, this.animPose >= e.length && (this.animPose = 0)
                }
                if (this.konamiActive) super.drawLayer(this.spriteImage.surfboard, 0, 0, this.pose, this.surfboardFrame.current), this.sprite.draw(this.x + (0 - this.width / 2), this.y - this.height / 2, this.pose - 1, 7);
                else
                    for (let e = 1; e <= 7; e++) {
                        const s = 116 * (e - $e.data.session.settings.character);
                        let t = 4;
                        e === $e.data.session.settings.character && (t = this.pose), super.drawLayer(this.spriteImage.surfboard, s, 0, t, this.surfboardFrame.current), this.sprite.draw(this.x + (s - this.width / 2), this.y - this.height / 2, t - 1, e - 1)
                    }
            }
            draw() {
                if (this.swimming) super.draw();
                else {
                    if ($e.data.game.shields.current > 0 && "OVER" !== $e.data.session.state && super.drawLayer(this.spriteImage.shield, 0, 0, 5 - $e.data.game.shields.current, this.surfboardFrame.current), $e.data.player.distance.air > 0 && this.drawShadow(), $e.data.player.distance.immunity > 0 && ($e.data.ctx.save(), Math.floor(4 * $e.data.game.time.elapsed) % 2 == 0 ? $e.data.ctx.globalAlpha = .3 : $e.data.ctx.globalAlpha = .7), super.drawLayer(this.spriteImage.surfboard, 0, 0, this.pose, this.surfboardFrame.current), super.draw(), $e.data.game.enhancements.collectedDog) {
                        let e = this.pose;
                        $e.data.game.isAtIsland && (this.cycleDogWinFrame(7, 9), e = this.dogEndPose.current), super.drawLayer(this.spriteImage.dog, 0, 0, e, 9)
                    }
                    $e.data.player.distance.immunity > 0 && $e.data.ctx.restore()
                }
            }
        }
        class Ne {
            constructor() {
                if (Ne.system) return Ne.system;
                Ne.system = this, this.defineIconSVGs(), this.defineTextStrings()
            }
            defineTextStrings() {
                this.buttons = {
                    keyboard: {
                        select: '<span class="info-button-key">' + this.icon.keyLeft + '</span> <span class="info-button-key">' + this.icon.keyRight + "</span>",
                        action: '<span class="info-button-keytext">' + loadTimeData.getString("keyboardAction") + "</span>"
                    },
                    mouse: {
                        select: '<span class="info-button-key">' + this.icon.arrowLeft + '</span> <span class="info-button-key">' + this.icon.arrowRight + "</span>",
                        action: '<span class="info-button-text">' + loadTimeData.getString("mouseAction") + "</span>"
                    },
                    touch: {
                        select: '<span class="info-button-key">' + this.icon.arrowLeft + '</span> <span class="info-button-key">' + this.icon.arrowRight + "</span>",
                        action: '<span class="info-button-text">' + loadTimeData.getString("touchAction") + "</span>"
                    },
                    controller: {
                        select: '<span class="info-button-icon">' + this.icon.dpadLeft + '</span> <span class="info-button-icon">' + this.icon.dpadRight + "</span>",
                        action: '<span class="info-button-icon">' + this.icon.xbox.a + "</span>"
                    },
                    xbox: {
                        select: '<span class="info-button-icon">' + this.icon.dpadLeft + '</span> <span class="info-button-icon">' + this.icon.dpadRight + "</span>",
                        action: '<span class="info-button-icon">' + this.icon.xbox.a + "</span>"
                    },
                    ps: {
                        select: '<span class="info-button-icon">' + this.icon.dpadLeft + '</span> <span class="info-button-icon">' + this.icon.dpadRight + "</span>",
                        action: '<span class="info-button-icon">' + this.icon.ps.x + "</span>"
                    }
                }
            }
            defineIconSVGs() {
                this.icon = {
                    king: '<svg class="icon-king" width="16px" height="16px" viewBox="0 0 16 16"><path class="icon-fill" d="M10.58,8.62L14,4.5v10H2v-10l3.48,4.11L8,4.5L10.58,8.62z"/><circle class="icon-fill" cx="2" cy="2.5" r="1"/><circle class="icon-fill" cx="8" cy="2.5" r="1"/><circle class="icon-fill" cx="14" cy="2.5" r="1"/></svg>',
                    arrowLeft: '<svg class="icon-arrow-left" width="32px" height="32px" viewBox="0 0 16 16"><polyline class="icon-stroke" points="10.5,1 3.5,8 10.5,15"/></svg>',
                    arrowRight: '<svg class="icon-arrow-right" width="32px" height="32px" viewBox="0 0 16 16"><polyline class="icon-stroke" points="5.5,1 12.5,8 5.5,15"/></svg>',
                    keyLeft: '<svg class="icon-key-left" width="32px" height="32px" viewBox="0 0 16 16"><polyline class="icon-stroke" style="stroke-width:1.5;" points="7.93,12.24 3.69,8 7.93,3.76"/><line class="icon-stroke" style="stroke-width:1.5;" x1="3.69" y1="8" x2="12.93" y2="8"/></svg>',
                    keyRight: '<svg class="icon-key-right" width="32px" height="32px" viewBox="0 0 16 16"><polyline class="icon-stroke" style="stroke-width:1.5;" points="8.07,12.24 12.31,8 8.07,3.76"/><line class="icon-stroke" style="stroke-width:1.5;" x1="12.31" y1="8" x2="3.07" y2="8"/></svg>',
                    dpadLeft: '<svg class="icon-dpad-left" width="32px" height="32px" viewBox="0 0 16 16"><polygon class="icon-stroke" style="stroke-width:1.5;" points="4.75,6.25 8.25,6.25 8.25,2.75 11.75,2.75 11.75,6.25 15.25,6.25 15.25,9.75 11.75,9.75 11.75,13.25 8.25,13.25 8.25,9.75 4.75,9.75"/><polygon class="icon-fill" points="2.5,5.5 0,8 2.5,10.5"/></svg>',
                    dpadRight: '<svg class="icon-dpad-right" width="32px" height="32px" viewBox="0 0 16 16"><polygon class="icon-stroke" style="stroke-width:1.5;" points="11.25,6.25 7.75,6.25 7.75,2.75 4.25,2.75 4.25,6.25 0.75,6.25 0.75,9.75 4.25,9.75 4.25,13.25 7.75,13.25 7.75,9.75 11.25,9.75"/><polygon class="icon-fill" points="13.5,5.5 16,8 13.5,10.5"/></svg>',
                    xbox: {
                        a: '<svg class="icon-xbox-a" width="32px" height="32px" viewBox="0 0 16 16"><path class="icon-fill" d="M11.45,11.5H9.74l-0.5-1.56H6.75L6.25,11.5H4.55l2.55-7h1.87L11.45,11.5z M8.88,8.73L8.12,6.38C8.07,6.2,8.03,5.99,8.01,5.75H7.97C7.95,5.95,7.91,6.16,7.85,6.36L7.08,8.73H8.88z"/><circle class="icon-stroke" style="" cx="8" cy="8" r="7.5"/></svg>',
                        rt: '<svg class="icon-xbox-rt" width="32px" height="32px" viewBox="0 0 16 16"><path class="icon-stroke" d="M1.75,1.42C1.14,2.29,0.04,8.35,1.99,11.68s5.33,3.83,7.67,3.83s4.83-0.01,5.38-1.28c0.53-1.22-2.01-3.41-2.01-7.54s2.09-4.67,0.75-5.87C13.44,0.51,11.24,0.5,7.95,0.5S2.36,0.55,1.75,1.42z"/><path class="icon-fill" d="M7.83,9.95H6.56L5.8,8.69c-0.06-0.1-0.11-0.18-0.16-0.26C5.59,8.36,5.53,8.29,5.48,8.24C5.43,8.19,5.37,8.15,5.31,8.12C5.25,8.09,5.19,8.07,5.12,8.07h-0.3v1.88h-1.1v-4.9h1.75c1.19,0,1.78,0.44,1.78,1.33c0,0.17-0.03,0.33-0.08,0.47C7.12,7,7.05,7.13,6.95,7.25s-0.21,0.22-0.35,0.3S6.32,7.7,6.15,7.75v0.01C6.23,7.78,6.3,7.82,6.37,7.87c0.07,0.05,0.13,0.11,0.2,0.18s0.12,0.14,0.18,0.22C6.8,8.35,6.86,8.43,6.91,8.5L7.83,9.95z M4.82,5.88v1.36H5.3c0.24,0,0.43-0.07,0.57-0.21C6.02,6.9,6.09,6.72,6.09,6.52c0-0.43-0.26-0.64-0.77-0.64H4.82z"/><path class="icon-fill" d="M11.59,5.95h-1.4v4H9.09v-4H7.69v-0.9h3.9V5.95z"/></svg>'
                    },
                    ps: {
                        x: '<svg class="icon-ps-x" width="32px" height="32px" viewBox="0 0 16 16"><circle class="icon-stroke" cx="8" cy="8" r="7.5"/><path class="icon-stroke" style="stroke-width:1.5;" d="M4.5,4.5l7,7L4.5,4.5z"/><path class="icon-stroke" style="stroke-width:1.5;" d="M11.5,4.5l-7,7L11.5,4.5z"/></svg>',
                        r2: '<svg class="icon-ps-r2" width="32px" height="32px" viewBox="0 0 16 16"><path class="icon-stroke" d="M1.75,1.42C1.14,2.29,0.04,8.35,1.99,11.68s5.33,3.83,7.67,3.83s4.83-0.01,5.38-1.28c0.53-1.22-2.01-3.41-2.01-7.54s2.09-4.67,0.75-5.87C13.44,0.51,11.24,0.5,7.95,0.5S2.36,0.55,1.75,1.42z"/><path class="icon-fill" d="M7.83,9.95H6.56L5.8,8.69c-0.06-0.1-0.11-0.18-0.16-0.26C5.59,8.36,5.53,8.29,5.48,8.24C5.43,8.19,5.37,8.15,5.31,8.12C5.25,8.09,5.19,8.07,5.12,8.07h-0.3v1.88h-1.1v-4.9h1.75c1.19,0,1.78,0.44,1.78,1.33c0,0.17-0.03,0.33-0.08,0.47C7.12,7,7.05,7.13,6.95,7.25s-0.21,0.22-0.35,0.3S6.32,7.7,6.15,7.75v0.01C6.23,7.78,6.3,7.82,6.37,7.87c0.07,0.05,0.13,0.11,0.2,0.18s0.12,0.14,0.18,0.22C6.8,8.35,6.86,8.43,6.91,8.5L7.83,9.95z M4.82,5.88v1.36H5.3c0.24,0,0.43-0.07,0.57-0.21C6.02,6.9,6.09,6.72,6.09,6.52c0-0.43-0.26-0.64-0.77-0.64H4.82z"/><path class="icon-fill" d="M9.2,9.06h2.08v0.9H8.01V9.58c0-0.25,0.04-0.48,0.13-0.67c0.08-0.2,0.19-0.38,0.32-0.54c0.13-0.16,0.27-0.3,0.42-0.42c0.15-0.12,0.3-0.23,0.43-0.33c0.14-0.1,0.27-0.2,0.38-0.29s0.2-0.19,0.27-0.28c0.07-0.09,0.13-0.19,0.17-0.28c0.04-0.09,0.05-0.2,0.05-0.3c0-0.21-0.06-0.37-0.18-0.48C9.88,5.88,9.7,5.83,9.46,5.83c-0.42,0-0.82,0.17-1.21,0.5V5.38c0.43-0.28,0.91-0.41,1.44-0.41c0.25,0,0.47,0.03,0.67,0.1c0.2,0.06,0.36,0.16,0.5,0.28s0.24,0.27,0.31,0.44c0.07,0.17,0.11,0.36,0.11,0.58c0,0.23-0.03,0.43-0.1,0.6S11.01,7.3,10.9,7.44s-0.25,0.27-0.4,0.4c-0.15,0.12-0.31,0.23-0.47,0.35C9.92,8.26,9.82,8.33,9.72,8.41c-0.1,0.08-0.19,0.15-0.27,0.23C9.37,8.71,9.31,8.78,9.26,8.85C9.22,8.92,9.2,8.99,9.2,9.06z"/></svg>'
                    },
                    inputs: {
                        keyboard: '<svg class="icon-keyboard" width="32px" height="32px" viewBox="0 0 16 16"><rect class="icon-fill" x="2.5" y="4.5" width="1" height="1"/><rect class="icon-fill" x="2.5" y="6.5" width="2" height="1"/><rect class="icon-fill" x="2.5" y="8.5" width="2" height="1"/><rect class="icon-fill" x="4.5" y="4.5" width="1" height="1"/><rect class="icon-fill" x="5.5" y="6.5" width="1" height="1"/><rect class="icon-fill" x="5.5" y="8.5" width="5" height="1"/><rect class="icon-fill" x="6.5" y="4.5" width="1" height="1"/><rect class="icon-fill" x="7.5" y="6.5" width="1" height="1"/><rect class="icon-fill" x="8.5" y="4.5" width="1" height="1"/><rect class="icon-fill" x="9.5" y="6.5" width="1" height="1"/><rect class="icon-fill" x="10.5" y="4.5" width="1" height="1"/><rect class="icon-fill" x="11.5" y="6.5" width="2" height="1"/><rect class="icon-fill" x="11.5" y="8.5" width="2" height="1"/><rect class="icon-fill" x="12.5" y="4.5" width="1" height="1"/><rect class="icon-fill" x="1" y="3" class="icon-stroke" style="" width="14" height="8" rx="0.5"/></svg>',
                        touch: '<svg class="icon-touch" width="32px" height="32px" viewBox="0 0 16 16"><path class="icon-stroke" style="stroke-linejoin:round;" d="M5.95,6.33C4.8,5.91,3.97,4.8,3.97,3.5c0-1.66,1.34-3,3-3s3,1.34,3,3c0,1.31-0.84,2.43-2.02,2.84"/><path class="icon-stroke" style="stroke-linejoin:round;" d="M13.95,8.5c0-0.55-0.45-1-1-1c-0.55,0-1,0.45-1,1V9.8l0-1.79c0-0.55-0.45-1-1-1c-0.55,0-1,0.45-1,1v1V7.5c0-0.55-0.45-1-1-1c-0.55,0-1,0.45-1,1v1c0,0,0-4.72,0-5c0-0.55-0.45-1-1-1c-0.55,0-1,0.45-1,1v7.02C5.08,9.7,4.31,8.95,4.16,8.8c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41c0.25,0.25,4,4,4,4s1.31,1.29,3.21,1.29c2.21,0,4-1.79,4-4c0,0,0,0,0,0l0,0V8.5z"/></svg>',
                        mouse: '<svg class="icon-mouse" width="32px" height="32px" viewBox="0 0 16 16"><path class="icon-stroke" d="M8,15.5L8,15.5c-2.76,0-5-2.24-5-5v-7c0-1.66,1.34-3,3-3h4c1.66,0,3,1.34,3,3v7C13,13.27,10.76,15.5,8,15.5z"/><line class="icon-stroke" style="" x1="8" y1="0.5" x2="8" y2="6"/></svg>',
                        controller: '<svg class="icon-controller" width="32px" height="32px" viewBox="0 0 16 16"><path class="icon-stroke" style="stroke-linejoin:round;" d="M15.2,8.27c-0.4-1.48-1.68-4.27-1.8-4.43c-0.13-0.16-0.45-0.33-0.45-0.33l0.04-0.48c-0.44-0.3-2.03-0.59-2.61-0.52L9.57,3H6.43l-0.8-0.49C5.04,2.44,3.45,2.73,3.01,3.03l0.04,0.48c0,0-0.32,0.17-0.45,0.33C2.47,3.99,1.19,6.79,0.8,8.27c-0.39,1.45-0.33,2.44-0.19,3.01s0.84,1.22,1.47,1.22c0.45,0,2.16-2.41,2.95-2.76C5.85,9.36,6.06,9.48,8,9.48s2.15-0.12,2.97,0.25c0.78,0.35,2.5,2.76,2.95,2.76c0.63,0,1.33-0.65,1.47-1.22S15.59,9.72,15.2,8.27z"/><circle class="icon-fill" cx="8" cy="5" r="0.5"/></svg>'
                    }
                }
            }
        }
        var Ge = t(46);
        const We = {
            currentCharacter: G.c.getInteger("lastSelectedPlayer"),
            highVisibilityMode: G.c.getBoolean("highVisibilityActive"),
            gameSpeed: G.c.getBoolean("reducedSpeedActive") ? .5 : 1,
            mode: function(e) {
                switch (e) {
                    case "SPEED":
                        return w.Speed;
                    case "BUOY":
                        return w.Buoy;
                    case "CLASSIC":
                    default:
                        return w.Classic
                }
            }(G.c.getString("lastSelectedMode")),
            gameState: "MENU",
            classic_bestScore: G.c.getInteger("classicBestScore"),
            speed_bestScore: G.c.getInteger("speedBestScore") < 0 ? -1 : G.c.getInteger("speedBestScore") / 1e3,
            buoy_bestScore: G.c.getInteger("buoyBestScore")
        };
        var He;

        function Fe(e) {
            return Object.assign({
                type: He.UPDATE_STATS
            }, e)
        }

        function _e() {
            return {
                type: He.RESET_STATS,
                classic_bestScore: -1,
                buoy_bestScore: -1,
                speed_bestScore: -1,
                currentCharacter: 4
            }
        }! function(e) {
            e.RESET_STATS = "RESET_STATS", e.UPDATE_GAME_STATE = "UPDATE_GAME_STATE", e.UPDATE_STATS = "UPDATE_STATS"
        }(He || (He = {}));
        const Ue = Object(Ge.c)((function(e = We, s) {
            switch (s.type) {
                case He.UPDATE_STATS:
                    return Object.assign(Object.assign({}, e), {
                        currentCharacter: s.currentCharacter,
                        mode: s.mode,
                        highVisibilityMode: s.highVisibilityMode,
                        gameSpeed: s.gameSpeed,
                        classic_bestScore: Math.max(e.classic_bestScore, s.classic_bestScore),
                        buoy_bestScore: Math.max(e.buoy_bestScore, s.buoy_bestScore),
                        speed_bestScore: e.speed_bestScore < 0 ? s.speed_bestScore : Math.min(e.speed_bestScore, s.speed_bestScore)
                    });
                case He.UPDATE_GAME_STATE:
                    return Object.assign(Object.assign({}, e), {
                        gameState: s.gameState
                    });
                case He.RESET_STATS:
                    return Object.assign(Object.assign({}, e), {
                        classic_bestScore: s.classic_bestScore,
                        buoy_bestScore: s.buoy_bestScore,
                        speed_bestScore: s.speed_bestScore,
                        currentCharacter: s.currentCharacter
                    });
                default:
                    return e
            }
        }), We);
        class Ve {
            constructor() {
                if (Ve.system) return Ve.system;
                Ve.system = this, this.string = new Ne, this.reset(), Ue.subscribe(this.displayBestCounter.bind(this))
            }
            reset() {
                this.container = $("game-ui"), this.notify = this.createNew("div", this.container, "ui-notify"), this.notifyClear = void 0, this.destroyInterface(), this.lives = void 0, this.counter = void 0, this.power = void 0
            }
            update() {
                this.updateCounter()
            }
            buildMenu() {
                this.destroyInterface();
                const e = this.createNew("div", this.container, "ui-top");
                this.buildTopIcons(e);
                const s = $e.data.session.settings.mode;
                this.createNew("h1", this.container, "ui-title").innerHTML = G.c.getString(s.toLowerCase() + "Title");
                const t = $e.data.session.inputType,
                    i = this.createNew("h2", this.container, "ui-info");
                let a, o;
                switch (t) {
                    case "mouse":
                    case "touch":
                        a = G.c.getStringF(t + "Select", this.string.buttons[t].select), o = '<span class="info-button-text">' + G.c.getString(t + "Action") + "</span>";
                        break;
                    case "ps":
                        a = G.c.getStringF("controllerSelect", this.string.buttons.ps.select), o = G.c.getStringF("controllerAction", this.string.buttons.ps.action);
                        break;
                    case "xbox":
                    case "controller":
                        a = G.c.getStringF("controllerSelect", this.string.buttons.controller.select), o = G.c.getStringF("controllerAction", this.string.buttons.controller.action);
                        break;
                    case "keyboard":
                    default:
                        a = G.c.getStringF(t + "Select", this.string.buttons.keyboard.select), o = '<span class="info-button-keytext">' + G.c.getString("keyboardAction") + "</span>"
                }
                i.innerHTML = G.c.getStringF("menuInfo", a, o), a = this.createNew("div", this.container, "ui-selection");
                const n = this.createNew("button", a);
                n.innerHTML = this.string.icon.arrowLeft, n.tabIndex = -1, this.createNew("div", a, "selection-box");
                const r = this.createNew("button", a);
                r.innerHTML = this.string.icon.arrowRight, r.tabIndex = -1, n.addEventListener("click", (function() {
                    je.system.changeCharacter(-1)
                }), !1), r.addEventListener("click", (function() {
                    je.system.changeCharacter(1)
                }), !1)
            }
            destroyInterface() {
                const e = this.container.childNodes;
                for (let s = e.length - 1; s >= 0; s--) e[s] !== this.notify && this.container.removeChild(e[s]);
                this.clearNotification()
            }
            buildGameInterface() {
                this.destroyInterface();
                const e = this.createNew("div", this.container, "ui-top");
                this.buildTopIcons(e), $("game-tint").classList.remove("visible"), this.refreshInterface()
            }
            buildPauseInterface() {
                this.buildGameInterface();
                const e = G.c.getString("pauseTitle"),
                    s = G.c.getStringF("pauseInfo", this.string.buttons[$e.data.session.inputType].action);
                this.buildTitleInfo(e, s), this.refreshInterface(), $("game-tint").classList.add("visible")
            }
            buildOverInterface() {
                const e = G.c.getString("overTitle"),
                    s = G.c.getStringF("overInfo", this.string.buttons[$e.data.session.inputType].action);
                this.buildTitleInfo(e, s), this.refreshInterface()
            }
            buildTitleInfo(e, s) {
                this.createNew("h1", this.container, "ui-title").innerHTML = e, this.createNew("h2", this.container, "ui-info").innerHTML = s
            }
            buildTopIcons(e) {
                const s = this.createNew("div", e, "top-stats");
                this.lives = this.createNew("div", s, "stats-lives");
                const t = this.createNew("div", s, "stats-counter");
                this.counter = this.createNew("p", t, "counter-amount"), this.power = this.createNew("div", s, "stats-power"), this.refreshInterface(), this.displayBestCounter()
            }
            sendNotification(e, s = 5e3) {
                const t = this,
                    i = $e.data.session.settings.mode;
                this.clearNotification();
                const a = this.createNew("div", this.notify, "notify-text");
                let o;
                switch (e) {
                    case "KONAMI":
                        o = G.c.getStringF("codeKonami", G.c.getString("codeScoring"));
                        break;
                    case "MICROSOFT":
                        o = G.c.getStringF("codeMicrosoft", G.c.getString("codeScoring"));
                        break;
                    case "EDGE":
                        o = G.c.getStringF("codeEdge", G.c.getString("codeScoring"));
                        break;
                    case "EVENT":
                        o = G.c.getString("codeScoring");
                        break;
                    case "MODE":
                        o = G.c.getStringF("gameMode", G.c.getString(i.toLowerCase() + "Title"));
                        break;
                    case "SCORE":
                        let e = $e.data.session.bestScore[i.toLowerCase()];
                        "SPEED" === i && (e = $e.data.formatTime(e)), o = G.c.getStringF("newBestScore", G.c.getString(i.toLowerCase() + "Descriptor"), e, G.c.getString(i.toLowerCase() + "Unit"))
                }
                this.announceMessage("notification", o), a.innerHTML = o, this.notifyClear = setTimeout((function() {
                    t.notify.innerHTML = ""
                }), s)
            }
            announceMessage(e, s) {}
            clearNotification() {
                clearTimeout(this.notifyClear), this.notify.innerHTML = ""
            }
            refreshInterface() {
                this.updateIcons(), this.updateCounter()
            }
            updateIcons() {
                if (this.lives.innerHTML = "", this.power.innerHTML = "", $e.data.game.enhancements.infiniteLives && $e.data.game.shields.current <= 0) this.createNew("div", this.lives, void 0, "icon life-full"), this.createNew("div", this.lives, void 0, "icon infinite");
                else
                    for (let e = 1; e <= $e.data.game.lives.max; e++) {
                        let s = "life-empty";
                        e <= $e.data.game.shields.current ? s = "shield" : e <= $e.data.game.lives.current && (s = "life-full"), this.createNew("div", this.lives, void 0, "icon " + s)
                    }
                if ($e.data.game.enhancements.infinitePowerups) this.createNew("div", this.power, void 0, "icon powerup-full"), this.createNew("div", this.power, void 0, "icon infinite");
                else
                    for (let e = 1; e <= $e.data.game.powerups.max; e++) {
                        let s = "powerup-empty";
                        e <= $e.data.game.powerups.current && (s = "powerup-full"), this.createNew("div", this.power, void 0, "icon " + s)
                    }
            }
            displayBestCounter() {
                const e = $e.data.session.settings.mode;
                let s = $e.data.session.bestScore[e.toLowerCase()];
                "SPEED" === e ? s = $e.data.formatTime(s) : s < 0 && (s = 0), this.counter.innerHTML = G.c.getStringF("bestScoreTopDisplay", this.string.icon.king, s, G.c.getString(e.toLowerCase() + "Unit"))
            }
            updateCounter() {
                let e;
                const s = $e.data.session.settings.mode;
                switch (s) {
                    case "CLASSIC":
                        e = Math.floor($e.data.game.distance.y);
                        break;
                    case "SPEED":
                        e = $e.data.formatTime($e.data.game.time.elapsed - 2 * $e.data.game.coins);
                        break;
                    case "BUOY":
                        e = $e.data.game.buoys + " "
                }
                this.counter.innerHTML = e + G.c.getString(s.toLowerCase() + "Unit")
            }
            createNew(e, s, t, i) {
                const a = document.createElement(e);
                return void 0 !== t && (a.id = t), void 0 !== i && (a.className = i), void 0 !== s && s.insertAdjacentElement("beforeend", a), a
            }
        }

        function Ye(e) {
            if ("number" != typeof e) return "----";
            let s = 14,
                t = 8;
            return e < 0 && (e = 3599), e >= 3600 && (s = 12, t = 10), new Date(1e3 * e).toISOString().substr(s, t)
        }
        class ze {
            constructor() {
                if (ze.offline) return ze.offline;
                ze.offline = this, this.loadData(), Ue.subscribe(this.loadData.bind(this))
            }
            static getSpeedScore() {
                return $e.data.game.time.elapsed - 2 * $e.data.game.coins
            }
            loadData() {
                const e = Ue.getState();
                // var e = {
                //     "buoy_bestScore": -1,
                //     "classic_bestScore": -1,
                //     "currentCharacter": 4,
                //     "gameSpeed": 1,
                //     "gameState": "MENU",
                //     "highVisibilityMode": false,
                //     "mode": "CLASSIC",
                //     "speed_bestScore": -0.001
                // }
                this.localData = {
                    settings: {
                        character: e.currentCharacter,
                        mode: e.mode,
                        highVisibility: e.highVisibilityMode,
                        gameSpeed: e.gameSpeed
                    },
                    classic: {
                        bestScore: e.classic_bestScore
                    },
                    speed: {
                        bestScore: e.speed_bestScore
                    },
                    buoy: {
                        bestScore: e.buoy_bestScore
                    }
                }
            }
            saveData(e) {
                // var e = {
                //     "buoy_bestScore": -1,
                //     "classic_bestScore": -1,
                //     "currentCharacter": 4,
                //     "gameSpeed": 1,
                //     "gameState": "MENU",
                //     "highVisibilityMode": false,
                //     "mode": "CLASSIC",
                //     "speed_bestScore": -0.001
                // }
                Ue.dispatch(Fe(e)), W.saveBuoyHighScore(e.buoy_bestScore), W.saveClassicHighScore(e.classic_bestScore), W.saveSpeedHighScore(e.speed_bestScore), W.saveGameMode(e.mode), W.saveHighVisibilityMode(e.highVisibilityMode), W.saveReducedSpeedMode(e.gameSpeed < 1), W.saveDefaultSurfer(e.currentCharacter)
            }
            resetData() {
                Ue.dispatch(_e()), W.resetAllStats()
            }
            storeClassicStats() {
                const e = Math.floor($e.data.game.distance.y),
                    s = $e.data.game;
                W.recordGameEnd(Object.assign(Object.assign({}, this.getCommonStats(w.Classic, e)), {
                    loseCondition: s.grabbedByEnemy ? "kraken" : "lives",
                    dogCollected: s.enhancements.collectedDog
                })), !$e.data.game.enhancements.codeUsed && e > this.localData.classic.bestScore && ($e.data.session.bestScore.classic = e, Ve.system.sendNotification("SCORE"), this.saveData(Object.assign(Object.assign({}, Ue.getState()), {
                    classic_bestScore: e
                })))
            }
            getCommonStats(e, s) {
                const t = $e.data.game;
                return {
                    gameMode: e,
                    score: e === w.Speed ? Math.floor(1e3 * s) : s,
                    konamiCodeUsed: je.system.konamiActive,
                    msftCodeUsed: t.enhancements.infiniteLives,
                    edgeCodeUsed: t.enhancements.infinitePowerups,
                    powerUpsUsed: t.powerups.numUsed,
                    powerUpsCollected: t.powerups.numCollected
                }
            }
            storeSpeedStats() {
                const e = this.localData.speed,
                    s = ze.getSpeedScore();
                W.recordGameEnd(Object.assign(Object.assign({}, this.getCommonStats(w.Speed, s)), {
                    livesCollected: $e.data.game.lives.numCollected
                })), !$e.data.game.enhancements.codeUsed && (s < e.bestScore || -1 === e.bestScore) && $e.data.game.isAtIsland && ($e.data.session.bestScore.speed = s, Ve.system.sendNotification("SCORE"), this.saveData(Object.assign(Object.assign({}, Ue.getState()), {
                    speed_bestScore: s
                })))
            }
            storeBuoyStats() {
                const e = this.localData.buoy,
                    s = $e.data.game,
                    t = s.buoys;
                W.recordGameEnd(this.getCommonStats(w.Buoy, s.buoys)), !$e.data.game.enhancements.codeUsed && t >= e.bestScore && Ve.system.sendNotification("SCORE")
            }
            storeBuoyStreak() {
                const e = $e.data.game.buoys,
                    s = this.localData.buoy;
                !$e.data.game.enhancements.codeUsed && e > s.bestScore && (s.bestScore = e, $e.data.session.bestScore.buoy = e, this.saveData(Object.assign(Object.assign({}, Ue.getState()), {
                    buoy_bestScore: e
                })))
            }
        }
        var Ke;
        ze.offline = void 0,
            function(e) {
                e.Menu = "MENU", e.Play = "PLAY", e.Pause = "PAUSE", e.Over = "OVER"
            }(Ke || (Ke = {}));
        class $e {
            constructor(e) {
                if (this.canvas = null, this.ctx = null, this.session = void 0, this.controller = void 0, this.player = void 0, this.game = void 0, $e.data) return $e.data;
                $e.data = this, this.canvas = e, this.ctx = this.canvas.getContext("2d"), this.ctx.imageSmoothingEnabled = !1, this.defineSessionSettings(), this.resetCurrentPlayerData(), this.resetCurrentGameData(), Ue.subscribe(this.loadGameSettings.bind(this))
            }
            defineSessionSettings() {
                const e = Ue.getState();
                this.session = {
                    state: Ke.Menu,
                    settings: {
                        mode: e.mode,
                        character: e.currentCharacter,
                        highVisibility: e.highVisibilityMode,
                        gameSpeed: e.gameSpeed
                    },
                    bestScore: {
                        classic: e.classic_bestScore,
                        speed: e.speed_bestScore,
                        buoy: e.buoy_bestScore
                    },
                    isFlyoutActive: !1,
                    isHighContrast: !1,
                    inputType: "keyboard",
                    inputLastChange: Date.now(),
                    width: 0,
                    height: 0,
                    xOrigin: 0,
                    yOrigin: 0,
                    xPercent: .5,
                    yPercent: .4
                }, this.controller = {
                    index: -1,
                    pad: -1,
                    pressed: {}
                }
            }
            saveGameSettings() {
                ze.offline.saveData({
                    mode: this.session.settings.mode,
                    currentCharacter: this.session.settings.character,
                    highVisibilityMode: this.session.settings.highVisibility,
                    gameSpeed: this.session.settings.gameSpeed,
                    classic_bestScore: this.session.bestScore.classic,
                    buoy_bestScore: this.session.bestScore.buoy,
                    speed_bestScore: this.session.bestScore.speed,
                    gameState: this.session.state
                })
            }
            loadGameSettings() {
                const e = Ue.getState();
                this.session.settings.mode = e.mode, this.session.settings.character = e.currentCharacter, this.session.settings.highVisibility = e.highVisibilityMode, this.session.settings.gameSpeed = e.gameSpeed, this.session.bestScore.classic = e.classic_bestScore, this.session.bestScore.speed = e.speed_bestScore, this.session.bestScore.buoy = e.buoy_bestScore
            }
            setupNewGame() {
                this.resetCurrentPlayerData(), this.resetCurrentGameData(), this.loadGameSettings(), this.defineCanvas(), this.clearCanvas(), this.definePlayerOrigin()
            }
            resetCurrentPlayerData() {
                this.player = {
                    state: "STOP",
                    direction: "DOWN",
                    distance: {
                        air: 0,
                        boost: 0,
                        bounce: 0,
                        immunity: 0
                    },
                    angle: {
                        current: 0,
                        radian: 0
                    },
                    trick: 0,
                    speed: {
                        current: 0,
                        x: 0,
                        y: 0,
                        initial: 1,
                        raw: 0,
                        max: 7.5,
                        base: 7.5,
                        accel: .02,
                        airAdd: 2.5,
                        boostAdd: 5
                    },
                    timer: {
                        crash: 0,
                        swim: 0
                    }
                }
            }
            resetCurrentGameData() {
                this.game = {
                    distance: {
                        x: 0,
                        y: 0,
                        vector: 0,
                        mult: 10,
                        xPx: 0,
                        yPx: 0
                    },
                    time: {
                        elapsed: 0,
                        loop: 0,
                        scale: 0
                    },
                    lives: {
                        current: 3,
                        max: 3,
                        numCollected: 0
                    },
                    powerups: {
                        current: 0,
                        max: 3,
                        numCollected: 0,
                        numUsed: 0
                    },
                    shields: {
                        current: 0,
                        max: 3
                    },
                    buoys: 0,
                    coins: 0,
                    isAtIsland: !1,
                    grabbedByEnemy: !1,
                    enhancements: {
                        codeUsed: !1,
                        infiniteLives: !1,
                        infinitePowerups: !1,
                        collectedDog: !1
                    }
                }
            }
            update(e) {
                this.game.time.loop = e / 1e3, this.game.time.elapsed += this.game.time.loop, this.game.time.scale = 60 * this.game.time.loop * this.session.settings.gameSpeed, this.player.speed.x = this.player.speed.current * Math.cos(this.player.angle.radian), this.player.speed.y = this.player.speed.current * Math.sin(this.player.angle.radian), this.game.distance.xPx += this.player.speed.x, this.game.distance.yPx += this.player.speed.y, this.game.distance.x += this.player.speed.x / this.game.distance.mult, this.game.distance.y += this.player.speed.y / this.game.distance.mult, this.game.distance.vector += this.player.speed.current / this.game.distance.mult
            }
            randomNumberBetween(e, s) {
                return Math.floor(e + (s + 1 - e) * Math.random())
            }
            randomArrayIndex(e) {
                if (!Array.isArray(e)) return e;
                return e[Math.floor(Math.random() * e.length)]
            }
            formatTime(e) {
                return Ye(e)
            }
            changeInputMethod(e) {
                const s = Date.now(),
                    t = s - this.session.inputLastChange;
                if (this.session.inputLastChange = s, !(this.session.inputType === e || t < 300)) switch (this.session.inputType = e, this.session.state) {
                    case "MENU":
                        Ve.system.buildMenu();
                        break;
                    case "PAUSE":
                        Ve.system.buildPauseInterface();
                        break;
                    case "OVER":
                        Ve.system.buildOverInterface()
                }
            }
            defineCanvas() {
                const e = window.getComputedStyle(this.canvas.parentNode);
                this.session.width = parseInt(e.getPropertyValue("width"), 10), this.session.height = parseInt(e.getPropertyValue("height"), 10), this.canvas.style.width = this.session.width + "px", this.canvas.style.height = this.session.height + "px", this.canvas.width = this.session.width, this.canvas.height = this.session.height
            }
            clearCanvas() {
                this.ctx.clearRect(0, 0, this.session.width, this.session.height)
            }
            checkHighContrast() {
                window.matchMedia("(forced-colors:active)").matches ? $e.data.session.isHighContrast = !0 : $e.data.session.isHighContrast = !1
            }
            definePlayerOrigin() {
                this.session.xOrigin = Math.floor(this.session.width * this.session.xPercent), this.session.yOrigin = Math.floor(this.session.height * this.session.yPercent)
            }
        }
        $e.data = void 0;
        class Je {
            constructor() {
                if (Je.system) return Je.system;
                Je.system = this
            }
            update() {
                this.evalPlayer = Le.system.player;
                const e = Le.system.obstacles.concat(Le.system.passives);
                this.evalImpacts = this.filterVisible(e), this.evalSurfers = Le.system.surfers, this.evalEnemies = Le.system.enemies, this.checkCollisions()
            }
            filterVisible(e) {
                return e.filter(e => function(e) {
                    return e.y > -64 && e.y < $e.data.session.height + 64 && e.x > -64 && e.x < $e.data.session.width + 64 || "BUOYTRIGGER" === e.effect
                }(e))
            }
            checkCollisions() {
                const e = $e.data.player.distance.air > 0,
                    s = this.evalSurfers.concat(this.evalEnemies);
                for (let t = 0; t < this.evalImpacts.length; t++) {
                    const i = this.evalImpacts[t],
                        a = 64;
                    if (this.collision(this.evalPlayer, i) && !i.hitByPlayer && !e && i.y + a > $e.data.session.yOrigin) {
                        if (i.hitByPlayer = !0, this.evalPlayer.swimming && "Sandbar256" !== i.type) {
                            if ("HIT" === i.effect || "Objects32" === i.type || "RAMP" === i.effect) return void(i.sleep = !0);
                            if ("SLOW" === i.effect || "SUPERSLOW" === i.effect || "DOG" === i.effect) return
                        }
                        switch (i.effect) {
                            case "HIT":
                                if ($e.data.player.distance.immunity > 0) continue;
                                $e.data.game.enhancements.collectedDog && Le.system.buildNewObject("DogCrash64", this.evalPlayer.x + 24, this.evalPlayer.y + 48, 8), this.evalPlayer.crash();
                                continue;
                            case "SLOW":
                                this.evalPlayer.slow();
                                continue;
                            case "SUPERSLOW":
                                this.evalPlayer.superslow();
                                continue;
                            case "SPIN":
                                this.evalPlayer.spin();
                                continue;
                            case "POWERUP":
                                this.evalPlayer.powerup(), this.itemCollectAnimation(i);
                                continue;
                            case "HEART":
                                this.evalPlayer.heart(), this.itemCollectAnimation(i);
                                continue;
                            case "COIN":
                                this.evalPlayer.coin(), this.itemCollectAnimation(i);
                                continue;
                            case "RAMP":
                                if ($e.data.player.distance.boost > 0 && "SPEED" !== $e.data.session.settings.mode) this.evalPlayer.air(2048);
                                else if ("SPEED" === $e.data.session.settings.mode) this.evalPlayer.air(512);
                                else {
                                    if ("CRASH" === $e.data.player.state) continue;
                                    this.evalPlayer.air(1024)
                                }
                                continue;
                            case "DOG":
                                this.evalPlayer.rescueDog(), this.itemCollectAnimation(i);
                                continue;
                            case "ISLAND":
                                this.evalPlayer.arriveAtIsland();
                                continue;
                            case "SWIMTRIGGER":
                                this.evalPlayer.startSwimTimer();
                                continue;
                            case "BUOYTRIGGER":
                                this.evalPlayer.triggeredBuoy(i.buoyId), ze.offline.storeBuoyStreak(), Le.system.confirmBuoyHit(i.buoyId);
                                continue
                        }
                    } else this.collision(this.evalPlayer, i) && "SWIMTRIGGER" === i.effect && i.hitByPlayer ? this.evalPlayer.updateSwim() : "BUOYTRIGGER" === i.effect && !i.hitByPlayer && i.y < this.evalPlayer.y ? (ze.offline.storeBuoyStats(), this.evalPlayer.missedBuoy(i.buoyId), Le.system.denyBuoyHit(i.buoyId), i.hitByPlayer = !0) : "AMBIENT" === i.effect && i.y + a < this.evalPlayer.y ? i.isAnimated = !0 : "TENTACLE" === i.effect && i.hitByPlayer && !this.evalPlayer.swimming && i.y + 4 * a < this.evalPlayer.y && (Le.system.buildNewObject("Enemy", i.x, i.y), i.sleep = !0);
                    for (let e = 0; e < s.length; e++) {
                        const t = s[e];
                        if (this.collision(t, i) && -1 === t.obstaclesHit.indexOf(i)) {
                            if (i.y < 64) continue;
                            switch (t.obstaclesHit.push(i), i.effect) {
                                case "HIT":
                                case "RAMP":
                                    t.crash();
                                    continue;
                                case "SLOW":
                                case "SUPERSLOW":
                                case "SPIN":
                                    t.slow();
                                    continue
                            }
                        }
                    }
                }
                for (let e = 0; e < this.evalEnemies.length; e++) {
                    const s = this.evalEnemies[e];
                    this.collision(s, this.evalPlayer) && !s.gotPlayer && 0 === s.timer.crash && ($e.data.game.enhancements.collectedDog ? (s.crash(), this.evalPlayer.dogShield()) : (s.grab(), this.evalPlayer.grabbedByEnemy()));
                    for (let e = 0; e < this.evalSurfers.length; e++) {
                        const t = this.evalSurfers[e];
                        this.collision(s, t) && 0 === t.timer.crash && t.crash()
                    }
                }
                for (let s = 0; s < this.evalSurfers.length; s++) {
                    const t = this.evalSurfers[s];
                    this.collision(t, this.evalPlayer) && 0 === $e.data.player.timer.crash && 0 === t.timer.crash && !e && ($e.data.game.enhancements.collectedDog ? (t.crash(), this.evalPlayer.dogShield()) : "BOOST" === $e.data.player.state || this.evalPlayer.swimming ? t.crash() : this.evalPlayer.crash())
                }
            }
            itemCollectAnimation(e) {
                e.changePose(6), e.changeFrame(1), e.ending = !0, e.rippleOffset = void 0
            }
            collision(e, s) {
                return e.hitbox.touches(s.hitbox)
            }
        }
        class Xe {
            constructor(e) {
                if (Xe.system) return Xe.system;
                Xe.system = this, this.statistics = new ze, this.core = new $e(e), this.router = new Be, this.controller = new Re, this.spawn = new Le, this.collisions = new Je, this.interface = new Ve, this.water = $("game-water"), this.xWater = 0, this.yWater = 0, this.reflowCanvas(), this.changeGameState("MENU")
            }
            changeGameState(e) {
                switch (e) {
                    case "MENU":
                        this.initializeMenu();
                        break;
                    case "PLAY":
                        if ("PAUSE" === $e.data.session.state) {
                            this.initializeResume();
                            break
                        }
                        if ("MENU" === $e.data.session.state) {
                            this.initializeStart();
                            break
                        }
                        case "OVER":
                            this.initializeOver();
                            break;
                        case "PAUSE":
                            this.initializePause()
                }
                var s;
                $e.data.checkHighContrast(), $e.data.session.state = e, Ue.dispatch((s = e, {
                    type: He.UPDATE_GAME_STATE,
                    gameState: s
                }))
            }
            gameLoop(e) {
                if (Re.system.update(), "PAUSE" !== $e.data.session.state && !$e.data.session.isFlyoutActive) switch ($e.data.update(e), $e.data.session.state) {
                    case "MENU":
                        this.updateMenu();
                        break;
                    case "PLAY":
                        this.updatePlay();
                        break;
                    case "OVER":
                        this.updateOver()
                }
            }
            initializeMenu() {
                $e.data.setupNewGame(), Le.system.reset(), Ve.system.reset(), Ve.system.buildMenu(), Ve.system.sendNotification("MODE"), Le.system.createPlayer()
            }
            initializeStart() {
                $e.data.game.time.elapsed = 0, Le.system.player.enablePlayer(), Ve.system.buildGameInterface(), Le.system.buildStartScene()
            }
            initializePause() {
                Ve.system.buildPauseInterface()
            }
            initializeResume() {
                Ve.system.buildGameInterface()
            }
            initializeOver() {
                $e.data.game;
                switch ($e.data.session.settings.mode) {
                    case "CLASSIC":
                        ze.offline.storeClassicStats();
                        break;
                    case "SPEED":
                        Le.system.chest && Le.system.chest.startChestAnimation(), ze.offline.storeSpeedStats();
                        break;
                    case "BUOY":
                        ze.offline.storeBuoyStats()
                }
                Ve.system.buildOverInterface()
            }
            updateMenu() {
                $e.data.clearCanvas(), Le.system.player.renderCharacterSelection()
            }
            updatePlay() {
                Je.system.update(), Le.system.update(), Le.system.everything.forEach(e => {
                    e.update(), e.move()
                }), Ve.system.update(), this.updateWater(), this.redrawAll()
            }
            updateOver() {
                Le.system.enemies.forEach(e => {
                    e.updateEnemyFrames()
                }), "SPEED" === $e.data.session.settings.mode && Le.system.chest && Le.system.chest.update(), this.redrawAll()
            }
            redrawAll() {
                $e.data.clearCanvas();
                const e = Le.system.everything.filter(e => function(e) {
                    return e.hitbox.x + e.hitbox.width > -32 && e.hitbox.x < $e.data.session.width + 32 && e.hitbox.y < $e.data.session.height + 64 || "ISLAND" === e.effect
                }(e));
                $e.data.session.settings.highVisibility ? e.forEach(e => {
                    e.draw(), e.drawHitbox()
                }) : e.forEach(e => {
                    e.draw()
                }), "CLASSIC" === $e.data.session.settings.mode || $e.data.game.isAtIsland || this.drawBoundaries()
            }
            drawBoundaries() {
                const e = $e.data.session.width,
                    s = $e.data.session.height,
                    t = $e.data.session.xOrigin - $e.data.game.distance.xPx,
                    i = $e.data.ctx,
                    a = "BUOY" === $e.data.session.settings.mode ? 960 : 576;
                i.beginPath(), i.rect(0, 0, t - a, s), i.rect(t + a, 0, e, s), i.fillStyle = "rgba(255,255,255,0.2)", i.fill()
            }
            reflowCanvas() {
                const e = $e.data.session.xOrigin,
                    s = $e.data.session.yOrigin;
                $e.data.defineCanvas(), $e.data.definePlayerOrigin();
                const t = $e.data.session.xOrigin - e,
                    i = $e.data.session.yOrigin - s;
                switch (Le.system.everything.forEach(e => {
                    e.shift(t, i)
                }), $e.data.checkHighContrast(), this.updateWater(t, i), $e.data.session.state) {
                    case "MENU":
                        Le.system.player && Le.system.player.renderCharacterSelection();
                        break;
                    case "PLAY":
                        this.changeGameState("PAUSE"), this.redrawAll();
                        break;
                    case "PAUSE":
                        this.redrawAll()
                }
            }
            updateWater(e = 0, s = 0) {
                this.xWater = (this.xWater + ($e.data.player.speed.x - e)) % 256, this.yWater = (this.yWater + 1.025 * ($e.data.player.speed.y - s)) % 256, this.water.style.backgroundPosition = Math.floor(-this.xWater) + "px " + Math.floor(-this.yWater) + "px"
            }
        }
        Xe.system = null;
        var qe = t(85),
            Qe = t(34),
            Ze = t(15);
        const es = Object.assign(Object.assign({}, Ze.a), {
            baseModal_content: Object.assign(Object.assign({}, Ze.a.baseModal_content), {
                color: d.c
            }),
            singleActionModal: {},
            singleActionModal_primaryButton: Object.assign(Object.assign(Object.assign({}, Object(qe.c)()), Object(Qe.d)("t7")), {
                height: "32px",
                paddingInlineStart: "12px",
                paddingInlineEnd: "12px"
            })
        });
        var ss = t(640),
            ts = t(17);
        class is extends D.a {
            constructor() {
                super(...arguments), this.handledProps = {
                    accept: void 0,
                    acceptMessage: void 0,
                    closeButtonToolTip: void 0,
                    content: void 0,
                    dismiss: void 0,
                    label: void 0
                }
            }
            render() {
                const e = "function" == typeof this.props.content ? this.props.content(this.props.managedClasses) : this.props.content;
                return a.createElement(ts.a, Object.assign({}, this.unhandledProps(), {
                    title: this.props.label,
                    label: this.props.label,
                    closeButtonTooltip: this.props.closeButtonToolTip,
                    onCloseButtonClick: this.props.dismiss,
                    className: Object(L.a)(this.props.managedClasses.singleActionModal)
                }), e, Object(ts.c)(a.createElement(ss.a, {
                    className: this.props.managedClasses.singleActionModal_primaryButton,
                    onClick: this.props.accept
                }, this.props.acceptMessage), this.props.managedClasses))
            }
        }
        var as = t(28);
        const os = Object(as.c)(Object(c.a)(es)(is), as.a.Secondary);
        var ns = t(118),
            rs = t(617),
            cs = t(66),
            hs = t(606),
            ds = t(486),
            ls = t(607),
            ps = t(608),
            us = t(609),
            gs = t(610);

        function ms(e) {
            e.stopPropagation()
        }
        class ys extends D.a {
            constructor() {
                super(...arguments), this.handledProps = {
                    managedClasses: void 0
                }, this.inputRefMap = new Map([
                    ["keyboard", a.createRef()],
                    ["mouse", a.createRef()],
                    ["touch", a.createRef()],
                    ["controller", a.createRef()]
                ]), this.state = {
                    selectedInput: "keyboard"
                }, this.renderHowToPlayContent = e => a.createElement(a.Fragment, null, a.createElement(S.a, {
                    className: this.props.managedClasses.howToPlayModal_paragraph
                }, a.createElement("strong", null, G.c.getString("classicModeTitleInline")), " ", G.c.getString("howToPlayClassic")), a.createElement(S.a, {
                    className: this.props.managedClasses.howToPlayModal_paragraph
                }, a.createElement("strong", null, G.c.getString("speedModeTitleInline")), " ", G.c.getString("howToPlaySpeed")), a.createElement(S.a, {
                    className: this.props.managedClasses.howToPlayModal_paragraph
                }, a.createElement("strong", null, G.c.getString("buoyModeTitleInline")), " ", G.c.getString("howToPlayBuoy")), this.renderInputSection()), this.onInputIconKeydown = e => {
                    let s = this.state.selectedInput;
                    if (e.keyCode === cs.a.arrowLeft || e.keyCode === cs.a.arrowUp) switch (this.state.selectedInput) {
                        case "keyboard":
                            return;
                        case "mouse":
                            s = "keyboard";
                            break;
                        case "touch":
                            s = "mouse";
                            break;
                        case "controller":
                            s = "touch"
                    } else {
                        if (e.keyCode !== cs.a.arrowRight && e.keyCode !== cs.a.arrowDown) return;
                        switch (this.state.selectedInput) {
                            case "keyboard":
                                s = "mouse";
                                break;
                            case "mouse":
                                s = "touch";
                                break;
                            case "touch":
                                s = "controller";
                                break;
                            case "controller":
                                return
                        }
                    }
                    e.stopPropagation(), this.setState({
                        selectedInput: s
                    })
                }
            }
            render() {
                return a.createElement(os, Object.assign({}, this.unhandledProps(), {
                    onKeyDown: ms,
                    content: this.renderHowToPlayContent
                }))
            }
            componentDidUpdate(e, s) {
                if (s.selectedInput !== this.state.selectedInput) {
                    const e = this.inputRefMap.get(this.state.selectedInput);
                    if (e.current) {
                        const s = Object(i.findDOMNode)(e.current);
                        s && "function" == typeof s.focus && s.focus()
                    }
                }
            }
            renderInputSection() {
                return a.createElement("div", null, this.renderInputIcons(), this.getInputDescription(this.state.selectedInput))
            }
            getInputDescription(e) {
                const s = this.props.managedClasses.howToPlayModal_icon,
                    t = this.props.managedClasses.howToPlayModal_iconContainer,
                    i = this.props.managedClasses.howToPlayModal_listItem;
                let o, n, r;
                switch (e) {
                    case "touch":
                        o = "howToPlayTouchMovement", n = "howToPlayTouchBoost", r = "howToPlayTouchRefresh";
                        break;
                    case "mouse":
                        o = "howToPlayMouseMovement", n = "howToPlayMouseBoost", r = "howToPlayMouseRefresh";
                        break;
                    case "controller":
                        o = "howToPlayControllerMovement", n = "howToPlayControllerBoost", r = "howToPlayControllerRefresh";
                        break;
                    default:
                    case "keyboard":
                        o = "howToPlayKeyboardMovement", n = "howToPlayKeyboardBoost", r = "howToPlayKeyboardRefresh"
                }
                return a.createElement("ul", {
                    className: this.props.managedClasses.howToPlayModal_bulletedList
                }, a.createElement("li", {
                    className: i
                }, a.createElement("div", {
                    "aria-hidden": !0,
                    className: t
                }, Object(hs.a)(s)), G.c.getString(o)), a.createElement("li", {
                    className: i
                }, a.createElement("div", {
                    "aria-hidden": !0,
                    className: "icon life-small"
                }), G.c.getString("howToPlayLife")), a.createElement("li", {
                    className: i
                }, a.createElement("div", {
                    "aria-hidden": !0,
                    className: "icon powerup-small"
                }), G.c.getString(n)), a.createElement("li", {
                    className: i
                }, a.createElement("div", {
                    "aria-hidden": !0,
                    className: "icon shield-small"
                }), G.c.getString("howToPlayShield")), a.createElement("li", {
                    className: i
                }, a.createElement("div", {
                    "aria-hidden": !0,
                    className: "icon coin-small"
                }), G.c.getString("howToPlayCoin")), a.createElement("li", {
                    className: i
                }, a.createElement("div", {
                    "aria-hidden": !0,
                    className: t
                }, Object(ds.a)(s)), G.c.getString(r)))
            }
            renderInputIcons() {
                const e = [
                    [ls.a, "keyboard"],
                    [ps.a, "mouse"],
                    [us.a, "touch"],
                    [gs.a, "controller"]
                ].map(e => {
                    const s = e[0],
                        t = e[1],
                        i = this.state.selectedInput === t;
                    let o = this.props.managedClasses.howToPlayModal_inputButton;
                    return i && (o += ` ${this.props.managedClasses.howToPlayModal_inputButton__selected}`), a.createElement(x.a, {
                        role: "radio",
                        key: t,
                        innerRef: this.inputRefMap.get(t),
                        onClick: () => this.setState({
                            selectedInput: t
                        }),
                        onKeyDown: this.onInputIconKeydown,
                        className: o,
                        "aria-checked": i,
                        tabIndex: i ? 0 : -1
                    }, s(""))
                });
                return a.createElement("div", {
                    className: this.props.managedClasses.howToPlayModal_inputButtonGroup,
                    role: "radiogroup"
                }, e)
            }
        }
        var bs = t(78);
        const ws = {
                howToPlayModal: {},
                howToPlayModal_bulletedList: {
                    listStyle: "none",
                    color: d.c
                },
                howToPlayModal_listItem: Object.assign(Object.assign({}, Object(Qe.d)("t7")), {
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.25em"
                }),
                howToPlayModal_icon: {
                    color: d.c,
                    fill: "currentColor",
                    padding: "4px",
                    height: "16px",
                    width: "16px"
                },
                howToPlayModal_iconContainer: {
                    marginInlineEnd: "12px",
                    display: "inline-block"
                },
                howToPlayModal_inputButton: {},
                howToPlayModal_inputButton__selected: {
                    backgroundColor: bs.d
                },
                howToPlayModal_inputButtonGroup: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "12px",
                    marginBottom: "8px"
                },
                howToPlayModal_paragraph: {
                    marginBottom: "0.5em"
                }
            },
            fs = Object(c.a)(ws)(ys);

        function Ss(e) {
            e.stopPropagation()
        }
        const ks = Object.assign(Object.assign({}, l.b), {
            neutralPalette: Object(rs.a)(Object(ns.c)("#38c2ee"))
        });
        class Os extends D.a {
            constructor(e) {
                super(e), this.handledProps = {
                    setModal: void 0,
                    dispatch: void 0,
                    currentCharacter: void 0,
                    gameState: void 0,
                    highVisibilityMode: void 0,
                    gameSpeed: void 0,
                    mode: void 0,
                    classic_bestScore: void 0,
                    speed_bestScore: void 0,
                    buoy_bestScore: void 0
                }, this.buttonRef = a.createRef(), this.onHighVisiblityModeChange = () => {
                    const e = !this.props.highVisibilityMode;
                    W.saveHighVisibilityMode(e), this.props.dispatch(Fe(Object.assign(Object.assign({}, Ue.getState()), {
                        highVisibilityMode: e
                    }))), $e.data.session.settings.highVisibility = e, Xe.system.redrawAll()
                }, this.onReducedSpeedModeChange = () => {
                    const e = 1 === this.props.gameSpeed ? .5 : 1;
                    W.saveReducedSpeedMode(1 !== e), this.props.dispatch(Fe(Object.assign(Object.assign({}, Ue.getState()), {
                        gameSpeed: e
                    })))
                }, this.onGameModeChange = e => {
                    this.props.dispatch(Fe(Object.assign(Object.assign({}, Ue.getState()), {
                        mode: e
                    }))), Xe.system.changeGameState(Ke.Menu), W.saveGameMode(e)
                }, this.onNewGameClick = () => {
                    Xe.system.changeGameState(Ke.Menu)
                }, this.onHamburgerMenuClick = e => {
                    "function" == typeof this.props.onClick && this.props.onClick(e), this.state.menuOpen || this.props.gameState !== Ke.Play || Xe.system.changeGameState(Ke.Pause), this.setState({
                        menuOpen: !this.state.menuOpen
                    })
                }, this.dismissMenu = () => {
                    this.setState({
                        menuOpen: !1
                    })
                }, this.closeModal = () => {
                    this.props.setModal(null)
                }, this.openHowToPlayModal = () => {
                    this.props.setModal(a.createElement(fs, {
                        onClick: Ss,
                        label: G.c.getString("howToPlayDialogTitle"),
                        accept: this.closeModal,
                        acceptMessage: G.c.getString("close"),
                        dismiss: this.closeModal,
                        closeButtonToolTip: G.c.getString("close")
                    }))
                }, this.openGameCreditsModal = () => {
                    this.props.setModal(a.createElement(os, {
                        onClick: Ss,
                        label: G.c.getString("gameCreditsDialogTitle"),
                        accept: this.closeModal,
                        acceptMessage: G.c.getString("close"),
                        dismiss: this.closeModal,
                        closeButtonToolTip: G.c.getString("close"),
                        content: this.getGameCreditsModalBody
                    }))
                }, this.getGameCreditsModalBody = e => a.createElement(a.Fragment, null, a.createElement(S.a, null, "Parker Young, Patrick Evan Little, Scott Porterfield, Connor Smith, William Devereux, Adina Shanholtz"), a.createElement(k.a, {
                    className: this.props.managedClasses.settingsHamburgerMenu_creditsTable_specialThanks,
                    size: O.a._7,
                    tag: O.b.h3
                }, G.c.getString("specialThanks")), a.createElement(S.a, null, "Jonathan Merrin, Charles Duval, Addison Kaufmann, Rachel Weil, Amanda Velasco Gallardo, Ramya Challa, Chris Pirih")), this.confirmResetStats = () => {
                    this.props.setModal(a.createElement(R.a, {
                        title: G.c.getString("resetAllStatsDialogTitle"),
                        closeButtonTooltip: G.c.getString("close"),
                        dialogText: G.c.getString("resetAllStatsDialogText"),
                        confirmText: G.c.getString("resetAllStats"),
                        rejectText: G.c.getString("cancel"),
                        handleConfirm: this.resetStats,
                        handleReject: this.closeModal,
                        onClick: Ss
                    }))
                }, this.resetStats = () => {
                    this.props.dispatch(_e()), W.resetAllStats(), this.closeModal()
                }, this.state = {
                    menuOpen: !1
                }
            }
            render() {
                return a.createElement(a.Fragment, null, a.createElement(r.a, {
                    designSystem: ks
                }, a.createElement(f.a, {
                    value: "#38c2ee",
                    tag: null,
                    drawBackground: !1
                }, a.createElement(x.a, Object.assign({}, this.unhandledProps(), {
                    ref: this.buttonRef,
                    onClick: this.onHamburgerMenuClick,
                    className: Object(L.a)(this.props.managedClasses.settingsHamburgerMenu)
                }), a.createElement(B.a, null)))), this.renderMenu())
            }
            getHighScore() {
                switch (this.props.mode) {
                    case w.Buoy:
                        return G.c.getStringF("bestScoreMenuDisplay", Math.max(this.props.buoy_bestScore, 0).toString(), G.c.getString("buoyUnit"));
                    case w.Speed:
                        return Ye(this.props.speed_bestScore);
                    case w.Classic:
                    default:
                        return G.c.getStringF("bestScoreMenuDisplay", Math.max(this.props.classic_bestScore, 0).toString(), G.c.getString("classicUnit"))
                }
            }
            renderMenu() {
                const e = this.getHighScore();
                return a.createElement(v.a, {
                    className: this.props.managedClasses.settingsHamburgerMenu_flyout,
                    width: "280px",
                    height: "fit-content",
                    defaultVerticalPosition: C.c.bottom,
                    defaultHorizontalPosition: C.b.left,
                    verticalPositioningMode: C.a.adjacent,
                    visible: this.state.menuOpen,
                    anchor: this.buttonRef,
                    onDismiss: this.dismissMenu,
                    onClick: Ss
                }, this.renderCloseButton(), a.createElement(k.a, {
                    tag: O.b.h2,
                    size: O.a._7
                }, G.c.getString("gameSettings")), this.renderGameModePicker(), a.createElement(S.a, {
                    className: this.props.managedClasses.settingsHamburgerMenu_flyout_score
                }, Object(j.a)(this.props.managedClasses.settingsHamburgerMenu_flyout_scoreCrown), G.c.getStringF("bestScoreFlyout", e)), a.createElement(E.a, {
                    className: this.props.managedClasses.settingsHamburgerMenu_flyout_divider
                }), this.renderToggleSection(), a.createElement(E.a, {
                    className: this.props.managedClasses.settingsHamburgerMenu_flyout_divider
                }), this.renderButtonSection())
            }
            renderCloseButton() {
                return a.createElement(x.a, {
                    className: this.props.managedClasses.settingsHamburgerMenu_closeButton,
                    title: G.c.getString("close"),
                    onClick: this.dismissMenu
                }, Object(N.a)(this.props.managedClasses.settingsHamburgerMenu_closeButton_icon))
            }
            renderGameModePicker() {
                const e = G.c.getString("gameModeBuoy"),
                    s = G.c.getString("gameModeClassic"),
                    t = G.c.getString("gameModeSpeed"),
                    i = this.props.mode,
                    o = "PAUSE" === this.props.gameState || "PLAY" === this.props.gameState;
                return a.createElement(a.Fragment, null, a.createElement(T.a, {
                    onClick: this.onNewGameClick
                }, G.c.getString("newGame")), a.createElement(P.a, {
                    className: this.props.managedClasses.settingsHamburgerMenu_flyout_label
                }, o ? G.c.getString("gameModeSelectLabelDisabled") : G.c.getString("gameModeSelectLabel")), a.createElement(M.a, {
                    jssStyleSheet: u.g,
                    menu: u.h,
                    onValueChange: this.onGameModeChange,
                    selectedItems: [i],
                    disabled: o
                }, a.createElement(I.a, {
                    id: w.Classic,
                    value: w.Classic,
                    displayString: s
                }), a.createElement(I.a, {
                    id: w.Speed,
                    value: w.Speed,
                    displayString: t
                }), a.createElement(I.a, {
                    id: w.Buoy,
                    value: w.Buoy,
                    displayString: e
                })))
            }
            renderToggleSection() {
                const e = G.c.getString("on"),
                    s = G.c.getString("off");
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: this.props.managedClasses.settingsHamburgerMenu_flyout_toggleRow
                }, a.createElement(P.a, {
                    htmlFor: "highVisibilityMode"
                }, G.c.getString("highVisiblityModeToggleLabel")), a.createElement(A.a, {
                    jssStyleSheet: m,
                    inputId: "highVisibilityMode",
                    selectedMessage: e,
                    unselectedMessage: s,
                    selected: this.props.highVisibilityMode,
                    onChange: this.onHighVisiblityModeChange
                })), a.createElement("div", {
                    className: this.props.managedClasses.settingsHamburgerMenu_flyout_toggleRow
                }, a.createElement(P.a, {
                    htmlFor: "reducedSpeedMode"
                }, G.c.getString("reducedSpeedModeToggleLabel")), a.createElement(A.a, {
                    jssStyleSheet: m,
                    inputId: "reducedSpeedMode",
                    defaultChecked: !0,
                    selectedMessage: e,
                    unselectedMessage: s,
                    selected: 1 !== this.props.gameSpeed,
                    onChange: this.onReducedSpeedModeChange
                })))
            }
            renderButtonSection() {
                return a.createElement("div", {
                    className: this.props.managedClasses.settingsHamburgerMenu_flyout_buttonSection
                }, a.createElement(T.a, {
                    jssStyleSheet: y,
                    onClick: this.openHowToPlayModal
                }, G.c.getString("howToPlayButton")), a.createElement(T.a, {
                    jssStyleSheet: y,
                    onClick: this.openGameCreditsModal
                }, G.c.getString("gameCreditsButton")), a.createElement(T.a, {
                    jssStyleSheet: y,
                    onClick: this.confirmResetStats
                }, G.c.getString("resetAllStats")))
            }
        }
        const xs = Object(o.b)((function(e) {
            return e
        }))(Object(c.a)(b)(Os));
        var vs = t(31),
            Cs = function(e, s, t, i) {
                return new(t || (t = Promise))((function(a, o) {
                    function n(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function r(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var s;
                        e.done ? a(e.value) : (s = e.value, s instanceof t ? s : new t((function(e) {
                            e(s)
                        }))).then(n, r)
                    }
                    c((i = i.apply(e, s || [])).next())
                }))
            };

        function Es(e) {
            const [s, t] = a.useState(null);
            return a.createElement(a.Fragment, null, a.createElement(xs, {
                setModal: t
            }), a.createElement(n.a, {
                modal: s,
                rootElement: document.getElementById("modal-root")
            }))
        }
        window.addEventListener("beforeunload", () => {
            W.recordUnload()
        }), window.onload = function() {
            return Cs(this, void 0, void 0, (function*() {
                yield function() {
                        return Cs(this, void 0, void 0, (function*() {
                            const e = yield W.getAllStats();
                            Ue.dispatch(Fe({
                                buoy_bestScore: e.buoy_bestScore,
                                speed_bestScore: e.speed_bestScore / 1e3,
                                classic_bestScore: e.classic_bestScore,
                                highVisibilityMode: e.highVisibilityMode,
                                currentCharacter: e.currentCharacter,
                                mode: e.mode,
                                gameSpeed: e.reducedSpeedMode ? .5 : 1
                            }))
                        }))
                    }(), _ = new F("surfboard64", 13, 3), U = new F("player64", 13, 9), V = new F("enemy128", 2, 6), Y = new F("surfer64", 27, 2), z = new F("docks64", 10, 1), K = new F("objects64", 30, 1), J = new F("objects32", 20, 1), X = new F("interact64", 8, 4), q = new F("slowdown64", 9, 3), Q = new F("slowdown64", 3, 3), Z = new F("effects128", 6, 3), ee = new F("ripple96", 1, 3), se = new F("ambient64", 4, 6), te = new F("sandbar256", 4, 1), ie = new F("island1280", 1, 1), window.addEventListener("gamepadconnected", (function(e) {
                        const s = e.gamepad.index;
                        navigator.getGamepads()[s], Re.system.controllerList.push(s)
                    })), window.addEventListener("gamepaddisconnected", (function(e) {
                        const s = Re.system,
                            t = e.gamepad.index,
                            i = s.controllerList.indexOf(t);
                        i > -1 && s.controllerList.splice(i, 1), $e.data.controller = {
                            index: -1,
                            pad: -1,
                            pressed: {}
                        }
                    })),
                    function() {
                        window.addEventListener("keydown", (function(e) {
                            $e.data.changeInputMethod("keyboard"), t.onKeydown(e)
                        }), !1), window.addEventListener("keyup", (function(e) {
                            t.onKeyup(e)
                        }), !1);
                        let e = !1,
                            s = void 0;
                        const t = {
                            pressed: {},
                            UP: 38,
                            DOWN: 40,
                            LEFT: 37,
                            RIGHT: 39,
                            ENTER: 13,
                            BACKSPACE: 8,
                            HOME: 36,
                            DELETE: 46,
                            SPACE: 32,
                            W: 87,
                            A: 65,
                            S: 83,
                            D: 68,
                            F: 70,
                            ESC: 27,
                            K: 75,
                            M: 77,
                            P: 80,
                            L: 76,
                            O: 79,
                            codes: [
                                [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
                                [77, 73, 67, 82, 79, 83, 79, 70, 84],
                                [69, 68, 71, 69]
                            ],
                            codePosition: 0,
                            onKeydown: function(i) {
                                if (!this.pressed[i.keyCode]) {
                                    if (this.pressed[i.keyCode] = !0, "MENU" === $e.data.session.state) {
                                        const t = i.keyCode;
                                        if (e && t === this.codes[s][this.codePosition + 1]) {
                                            if (this.codePosition++, t === this.codes[s][this.codes[s].length - 1]) {
                                                switch (s) {
                                                    case 0:
                                                        Be.system.routeInputType("KONAMI");
                                                        break;
                                                    case 1:
                                                        Be.system.routeInputType("MICROSOFT");
                                                        break;
                                                    case 2:
                                                        Be.system.routeInputType("EDGE")
                                                }
                                                e = !1, this.codePosition = 0, s = void 0
                                            }
                                        } else {
                                            if (e && this.codePosition <= 1 && t === this.codes[s][0]) return;
                                            e = !1, this.codePosition = 0;
                                            for (let i = 0; i <= this.codes.length - 1 && !e; i++) {
                                                t === this.codes[i][0] && (s = i, e = !0)
                                            }
                                        }
                                    }
                                    switch (i.keyCode) {
                                        case t.DOWN:
                                        case t.S:
                                            Be.system.routeInputType("DOWN");
                                            break;
                                        case t.UP:
                                        case t.W:
                                            Be.system.routeInputType("UP");
                                            break;
                                        case t.LEFT:
                                        case t.A:
                                            Be.system.routeInputType("LEFT");
                                            break;
                                        case t.RIGHT:
                                        case t.D:
                                            Be.system.routeInputType("RIGHT");
                                            break;
                                        case t.ENTER:
                                        case t.SPACE:
                                            $e.data.session.isFlyoutActive || Be.system.routeInputType("FORWARD");
                                            break;
                                        case t.BACKSPACE:
                                        case t.DELETE:
                                            $e.data.session.isFlyoutActive || Be.system.routeInputType("BACKWARD");
                                            break;
                                        case t.HOME:
                                        case t.ESC:
                                            Be.system.routeInputType("TOGGLE PLAY");
                                            break;
                                        case t.F:
                                            Be.system.routeInputType("BOOST")
                                    }
                                }
                            },
                            onKeyup: function(e) {
                                delete this.pressed[e.keyCode]
                            }
                        }
                    }(),
                    function() {
                        window.addEventListener("mousemove", (function(s) {
                            "PLAY" === $e.data.session.state && e.onMouseMove(s)
                        }), !1), window.addEventListener("click", (function(s) {
                            (s = s || window.event).target || s.srcElement;
                            e.onMouseClick(s)
                        }), !1);
                        const e = {
                            moused: void 0,
                            thisClick: 0,
                            lastClick: 0,
                            doubleDelta: 300,
                            onMouseMove: function(e) {
                                this.moused = this.definePosition(e)
                            },
                            definePosition: function(e) {
                                const s = $e.data.session.xOrigin,
                                    t = $e.data.session.yOrigin,
                                    i = e.clientX,
                                    a = e.clientY,
                                    o = 180 * Math.atan2(t - a, s - i) / Math.PI;
                                let n = this.moused;
                                return n = o < 0 && o > -55 ? "LEFT" : o > -180 && o < -125 ? "RIGHT" : o < -55 && o > -75 ? "DOWN LEFT" : o > -125 && o < -105 ? "DOWN RIGHT" : o > 0 && o < 180 ? "UP" : "DOWN", this.moused === n || Be.system.routeInputType(n), n
                            },
                            onMouseClick: function(e) {
                                this.thisClick = Date.now(), this.thisClick - this.lastClick <= this.doubleDelta && ("PLAY" === $e.data.session.state ? Be.system.routeInputType("BOOST") : Be.system.routeInputType("FORWARD"), this.thisClick = 0), this.lastClick = this.thisClick
                            }
                        }
                    }(),
                    function() {
                        window.addEventListener("touchstart", (function(s) {
                            $e.data.changeInputMethod("touch"), e.onTouchStart(s)
                        }), !1), window.addEventListener("touchmove", (function(s) {
                            e.onTouchMove(s)
                        }), !1), window.addEventListener("touchend", (function(s) {
                            e.onTouchEnd(s)
                        }), !1);
                        const e = {
                            touched: void 0,
                            thisTap: 0,
                            lastTap: 0,
                            doubleDelta: 300,
                            xDown: 0,
                            yDown: 0,
                            xMove: 0,
                            yMove: 0,
                            onTouchStart: function(e) {
                                e.cancelable && e.preventDefault(), e.targetTouches && !this.isInteractive(e) && (this.xDown = e.targetTouches[0].clientX, this.yDown = e.targetTouches[0].clientY)
                            },
                            onTouchMove: function(e) {
                                if (e.cancelable && e.preventDefault(), this.xMove = e.targetTouches[0].clientX, this.yMove = e.targetTouches[0].clientY, e.touches && !this.isInteractive(e) && "PLAY" === $e.data.session.state) {
                                    const s = e.targetTouches[0];
                                    this.touched = this.definePosition(s)
                                }
                            },
                            onTouchEnd: function(e) {
                                const s = this.xMove - this.xDown,
                                    t = this.yMove - this.yDown,
                                    i = 180 * Math.atan2(t, s) / Math.PI;
                                Math.abs(i) > 135 ? "MENU" === $e.data.session.state ? Be.system.routeInputType("RIGHT") : Be.system.routeInputType("LEFT") : Math.abs(i) < 45 ? "MENU" === $e.data.session.state ? Be.system.routeInputType("LEFT") : Be.system.routeInputType("RIGHT") : i > 45 && i < 135 && Be.system.routeInputType("DOWN"), this.isInteractive(e) || (this.thisTap = Date.now(), this.thisTap - this.lastTap <= this.doubleDelta && (Be.system.routeInputType("FORWARD"), this.thisTap = 0), this.lastTap = this.thisTap, this.touched = void 0, this.stopDefault(e))
                            },
                            isInteractive: function(e) {
                                const s = e.target || e.srcElement,
                                    t = $("hamburger-container") || null,
                                    i = $("modal-root") || null,
                                    a = $("game-clicktarget") || null,
                                    o = "a" === e.target.tagName.toLowerCase() || "select" === e.target.tagName.toLowerCase() || "input" === e.target.tagName.toLowerCase() || "button" === e.target.tagName.toLowerCase();
                                return !(!t || !t.contains(s) && s !== a) || (!(!i || !i.contains(s) && i !== a) || !!o)
                            },
                            stopDefault: function(e) {
                                this.isInteractive(e) || (e.preventDefault(), e.stopPropagation())
                            },
                            definePosition: function(e) {
                                const s = $e.data.session.xOrigin,
                                    t = $e.data.session.yOrigin,
                                    i = e.clientX,
                                    a = e.clientY,
                                    o = 180 * Math.atan2(t - a, s - i) / Math.PI;
                                let n = this.touched;
                                return n = o < 0 && o > -55 || i < .2 * $e.data.session.width ? "LEFT" : o > -180 && o < -125 || i > .8 * $e.data.session.width ? "RIGHT" : o < -55 && o > -75 ? "DOWN LEFT" : o > -125 && o < -105 ? "DOWN RIGHT" : o > 0 && o < 180 ? "UP" : "DOWN", this.touched === n || Be.system.routeInputType(n), n
                            }
                        }
                    }(),
                    function() {
                        const e = document.getElementById("hamburger-container");
                        e.style.zIndex = vs.b.CONTEXT_MENU.toString(), i.render(a.createElement(o.a, {
                            store: Ue
                        }, a.createElement(r.a, {
                            designSystem: l.b
                        }, a.createElement(Es, null))), e)
                    }(),
                    function() {
                        const e = $("game-canvas"),
                            s = new Xe(e);
                        let t, i = window.performance.now();
                        const a = () => {
                            t = requestAnimationFrame(a);
                            const e = window.performance.now() - i;
                            s.gameLoop(e), i = window.performance.now()
                        };
                        requestAnimationFrame(a),
                            function(e, s) {
                                let t = void 0;
                                window.addEventListener("resize", (function() {
                                    void 0 !== t && (clearTimeout(t), t = void 0), t = setTimeout((function() {
                                        t = void 0, e()
                                    }), s)
                                }))
                            }((function() {
                                s.reflowCanvas()
                            }), 50), document.addEventListener("visibilitychange", (function() {
                                s.reflowCanvas()
                            }))
                    }()
            }))
        }
    }
});