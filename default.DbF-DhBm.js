import {
  d as O,
  X as Je,
  N as X,
  p as $e,
  t as b,
  o as k,
  c as A,
  a as f,
  a3 as wn,
  q as v,
  h as ue,
  b as L,
  B as te,
  _ as be,
  a5 as U,
  Y as Sn,
  G as Ln,
  l as Qe,
  i as fe,
  m as G,
  U as ee,
  L as kn,
  f as xn,
  al as He,
  A as Ge,
  r as Cn,
  F as ge,
  e as Xt,
  w as Ut,
  av as Mn,
  g as ne,
  Z as Tn,
  aw as An,
  n as zt,
  ax as In,
  z as Jt,
  ay as En,
  az as Wn,
  W as Ke,
  j as Q,
  a0 as de,
  E as qe,
  J as Fn,
  V as Qt,
  s as he,
  u as Pn,
  aq as Vn,
  ar as $n,
  k as Rn,
  aA as Nn,
  aB as Hn,
  v as Gn,
  aC as Pt,
  S as Ie,
  x as Vt,
  aa as Dn,
  C as Ee,
  aD as Zn,
  aE as Bn,
  aF as On,
  aG as Yn,
  aH as jn,
} from "./entry.NL0qTmvO.js";
import { _ as Kt } from "./image.vue.SW2HRJNr.js";
import { a as Xn, _ as qt } from "./Price.vue.BSvTwE8U.js";
import { u as Un } from "./earn.KSgpA-H6.js";
import { _ as zn } from "./Preloader._ApEYg9Q.js";
const Jn = "" + globalThis.__publicAssetsURL("images/lambo.png"),
  Qn = "" + globalThis.__publicAssetsURL("images/loading/_bg_.jpg"),
  Kn = { class: "main" },
  qn = { key: 0, class: "loading-logout" },
  eo = { class: "loading-launch" },
  to = f("div", { class: "loading-launch-image" }, [f("img", { src: Qn, alt: "Loading screen" })], -1),
  no = { class: "loading-launch-progress" },
  oo = { class: "loading-launch-progress-text" },
  ro = { class: "loading-launch-bottom" },
  ao = f("div", { class: "loading-launch-text-token" }, "Hamster Kombat Token", -1),
  io = f("div", { class: "loading-launch-text-launch" }, "will be launched", -1),
  so = f("div", { class: "loading-launch-text-title" }, "on TON", -1),
  co = { class: "loading-launch-social" },
  lo = f("p", null, "Stay tuned", -1),
  uo = f("span", null, "More info in official channels", -1),
  fo = O({
      __name: "LoadingLaunch",
      setup(e) {
          const t = Je(),
              n = X(),
              o = $e(() => b().$config.public.appEnv !== "production");
          return (r, a) => {
              const c = be;
              return (
                  k(),
                  A("div", Kn, [
                      f("div", { class: "loading-progress", style: wn({ width: `${v(n).progress_loading}%` }) }, null, 4),
                      v(o) ? (k(), A("div", qn, [f("button", { class: "button button-primary button-xs", onClick: a[0] || (a[0] = (i) => v(t).logout(!1)) }, "Logout")])) : ue("", !0),
                      f("div", eo, [
                          to,
                          f("div", no, [L(c, { name: "loading-yellow" }), f("div", oo, te(v(t).error ? r.$t("messages.oops") : r.$t("buttons.loading")), 1)]),
                          f("div", ro, [
                              ao,
                              io,
                              so,
                              f("div", co, [
                                  lo,
                                  uo,
                                  f("ul", null, [
                                      f("li", null, [L(c, { class: "is-telegram", name: "ln-telegram" })]),
                                      f("li", null, [L(c, { class: "is-youtube", name: "ln-youtube" })]),
                                      f("li", null, [L(c, { class: "is-x", name: "ln-x" })]),
                                  ]),
                                  f("i", null, te(("useNuxtApp" in r ? r.useNuxtApp : v(b))().$config.public.appVersion ? ("useNuxtApp" in r ? r.useNuxtApp : v(b))().$config.public.appVersion : "1.0.3"), 1),
                              ]),
                          ]),
                      ]),
                  ])
              );
          };
      },
  }),
  mo = "" + globalThis.__publicAssetsURL("images/qr.png"),
  po = { class: "main-center" },
  vo = { class: "content-no-telegram" },
  ho = ["alt"],
  go = { key: 0, class: "is-version" },
  bo = O({
      __name: "NotTelegram",
      setup(e) {
          const t = Je();
          return (n, o) => {
              const r = Ln;
              return (
                  k(),
                  A("main", po, [
                      f("div", vo, [
                          f("p", null, te(n.$t("messages.play_mobile")), 1),
                          L(
                              r,
                              { to: ("useNuxtApp" in n ? n.useNuxtApp : v(b))().$config.public.botUrl },
                              { default: U(() => [f("img", { src: mo, alt: ("useNuxtApp" in n ? n.useNuxtApp : v(b))().$config.public.botName }, null, 8, ho)]), _: 1 },
                              8,
                              ["to"]
                          ),
                          L(r, { to: ("useNuxtApp" in n ? n.useNuxtApp : v(b))().$config.public.botUrl }, { default: U(() => [Sn(te(("useNuxtApp" in n ? n.useNuxtApp : v(b))().$config.public.botName), 1)]), _: 1 }, 8, ["to"]),
                          v(t).telegram_version || v(t).telegram_version ? (k(), A("p", go, te(v(t).telegram_platform) + " " + te(v(t).telegram_version), 1)) : ue("", !0),
                      ]),
                  ])
              );
          };
      },
  }),
  _o = { class: "app-bar" },
  yo = { class: "app-bar-nav" },
  wo = { class: "app-bar-item-image" },
  So = ["innerHTML"],
  Lo = { class: "app-bar-item-image" },
  ko = ["innerHTML"],
  xo = { class: "app-bar-item-image" },
  Co = ["innerHTML"],
  Mo = { class: "app-bar-item-image" },
  To = { key: 0, class: "app-bar-item-notification" },
  Ao = ["innerHTML"],
  Io = { class: "app-bar-item-image" },
  Eo = ["innerHTML"],
  Wo = O({
      __name: "AppBar",
      setup(e) {
          Qe();
          const t = fe(),
              n = X();
          return (
              G(0),
              (o, r) => {
                  const a = Kt,
                      c = kn,
                      i = be,
                      s = xn;
                  return (
                      k(),
                      A("div", _o, [
                          f("nav", yo, [
                              L(
                                  c,
                                  { class: "app-bar-item no-select", to: v(ee).GAME_INDEX, onClick: r[0] || (r[0] = (l) => ("useUiStore" in o ? o.useUiStore : v(X))().useHapticFeedback("soft")) },
                                  {
                                      default: U(() => {
                                          var l;
                                          return [f("div", wo, [L(a, { class: "is-border-6", name: (l = v(t).currentExchange) == null ? void 0 : l.id }, null, 8, ["name"])]), f("p", { innerHTML: o.$t("buttons.exchange") }, null, 8, So)];
                                      }),
                                      _: 1,
                                  },
                                  8,
                                  ["to"]
                              ),
                              L(
                                  c,
                                  { class: "app-bar-item no-select", to: v(ee).GAME_MINE, onClick: r[2] || (r[2] = (l) => ("useUiStore" in o ? o.useUiStore : v(X))().useHapticFeedback("soft")) },
                                  {
                                      default: U(() => [
                                          f("div", Lo, [L(i, { class: "icon-mine", name: "app-bar-mine" })]),
                                          f("p", { innerHTML: o.$t("buttons.mine"), onClick: r[1] || (r[1] = (l) => ("useUiStore" in o ? o.useUiStore : v(X))().useHapticFeedback()) }, null, 8, ko),
                                      ]),
                                      _: 1,
                                  },
                                  8,
                                  ["to"]
                              ),
                              L(
                                  c,
                                  { class: "app-bar-item no-select", to: v(ee).GAME_FRIENDS, onClick: r[3] || (r[3] = (l) => ("useUiStore" in o ? o.useUiStore : v(X))().useHapticFeedback("soft")) },
                                  { default: U(() => [f("div", xo, [L(i, { class: "icon-friends", name: "app-bar-friends" })]), f("p", { innerHTML: o.$t("buttons.friends") }, null, 8, Co)]), _: 1 },
                                  8,
                                  ["to"]
                              ),
                              L(
                                  c,
                                  { class: "app-bar-item no-select", to: v(ee).GAME_EARN, onClick: r[4] || (r[4] = (l) => ("useUiStore" in o ? o.useUiStore : v(X))().useHapticFeedback("soft")) },
                                  {
                                      default: U(() => [
                                          f("div", Mo, [L(i, { class: "icon-earn", name: "app-bar-earn" }), v(n).taskNotification ? (k(), A("div", To)) : ue("", !0)]),
                                          f("p", { innerHTML: o.$t("buttons.earn") }, null, 8, Ao),
                                      ]),
                                      _: 1,
                                  },
                                  8,
                                  ["to"]
                              ),
                              L(
                                  c,
                                  { class: "app-bar-item no-select", to: v(ee).GAME_AIRDROP, onClick: r[5] || (r[5] = (l) => ("useUiStore" in o ? o.useUiStore : v(X))().useHapticFeedback("soft")) },
                                  { default: U(() => [f("div", Io, [L(s)]), f("p", { innerHTML: o.$t("buttons.airdrop") }, null, 8, Eo)]), _: 1 },
                                  8,
                                  ["to"]
                              ),
                          ]),
                      ])
                  );
              }
          );
      },
  }),
  Fo = { class: "content-coins" },
  Po = ["id", "initial", "enter"],
  Vo = O({
      __name: "CoinsAnimation",
      setup(e) {
          const t = G([]),
              { $listen: n, $event: o } = b(),
              r = He(),
              a = (i, s) => ((i = Math.ceil(i)), (s = Math.floor(s)), Math.floor(Math.random() * (s - i + 1)) + i),
              c = (i) => {
                  const s = Math.min(i.count, 75);
                  if (r.settings.coins_animation)
                      for (let l = 0; l < s; l++)
                          setTimeout(() => {
                              const d = a(i.x_start_from, i.x_start_to),
                                  u = i.random_end_x ? a(i.x_end_from, i.x_end_to) : d,
                                  m = a(i.y_start_from, i.y_start_to),
                                  p = i.direction_y === "from_top" ? m + a(i.y_end_from, i.y_end_to) : m - a(i.y_end_from, i.y_end_to),
                                  _ = i.random_end_x ? Math.random() * (1 - 0.5) + 0.5 : 1;
                              t.value.push({ x_start: d, x_end: u, y_start: m, y_end: p, opacity_start: _, opacity_end: 0, date: Date.now(), id: l }),
                                  setTimeout(() => {
                                      t.value.shift();
                                  }, i.timeout_fly ?? 2e3);
                          }, i.delay * l);
                  setTimeout(
                      () => {
                          o("balance-animate:stop"), o("balance-animate-passive:stop");
                      },
                      r.settings.coins_animation ? i.delay * s + 1e3 : 50
                  );
              };
          return (
              Ge(() => {
                  n("coins-animate", (i) => c(i));
              }),
              (i, s) => {
                  const l = Xn,
                      d = Cn("motion");
                  return (
                      k(),
                      A("div", Fo, [
                          (k(!0),
                          A(
                              ge,
                              null,
                              Xt(v(t), (u) =>
                                  Ut(
                                      (k(),
                                      A(
                                          "div",
                                          {
                                              id: u.date,
                                              key: `coins-${u.date}-${u.id}`,
                                              initial: { x: u.x_start, y: u.y_start, opacity: u.opacity_start },
                                              enter: { x: u.x_end, y: u.y_end, opacity: u.opacity_end, transition: { type: "spring", stiffness: "50" } },
                                          },
                                          [L(l, { class: "is-20" })],
                                          8,
                                          Po
                                      )),
                                      [[d]]
                                  )
                              ),
                              128
                          )),
                      ])
                  );
              }
          );
      },
  }),
  $o = { class: "bottom-sheet-inner" },
  Ro = { class: "bottom-sheet-scroll" },
  No = O({
      __name: "Main",
      props: { isOpen: { type: Boolean, default: !1 } },
      setup(e) {
          const { $event: t } = b(),
              n = G(null),
              o = (r) => {
                  t("bs:close");
              };
          return (
              Mn(n, {
                  disableTextSelect: !0,
                  onSwipe(r) {
                      t("bs:close");
                  },
                  onSwipeEnd(r, a) {
                      a === "down" && t("bs:close");
                  },
              }),
              (r, a) => {
                  const c = be;
                  return (
                      k(),
                      ne(
                          In,
                          { name: "bs-open" },
                          {
                              default: U(() => [
                                  Ut(
                                      f(
                                          "div",
                                          { class: zt(["bottom-sheet", { open: e.isOpen }]) },
                                          [
                                              f("div", { class: "bottom-sheet-bg", onClick: o, ref_key: "bottomSheetSwipe", ref: n }, null, 512),
                                              f("div", $o, [f("div", { class: "bottom-sheet-close", onClick: o }, [L(c, { name: "close" })]), f("div", Ro, [An(r.$slots, "default")])]),
                                          ],
                                          2
                                      ),
                                      [[Tn, e.isOpen]]
                                  ),
                              ]),
                              _: 3,
                          }
                      )
                  );
              }
          );
      },
  }),
  Ho = O({
      __name: "Root",
      setup(e) {
          const { $event: t, $listen: n } = b(),
              o = X(),
              r = G(null),
              a = G(null),
              c = G(!0),
              i = G(!1);
          let s;
          const l = ({ component: p, props: _ = null, closeOnClick: h, onCloseDialog: g }) => {
                  (a.value = _),
                      setTimeout(() => {
                          r.value = p;
                      }, 100),
                      (c.value = h),
                      (s = g),
                      (i.value = !0);
              },
              d = () => {
                  (i.value = !1),
                      setTimeout(() => {
                          r.value = null;
                      }, 400),
                      s && s();
              },
              u = () => {
                  c.value && d();
              },
              m = (p) => {
                  p.keyCode === 27 && d();
              };
          return (
              Ge(() => {
                  document.addEventListener("keyup", m);
              }),
              Jt(() => {
                  document.removeEventListener("keyup", m);
              }),
              n("bs:open", (p) => {
                  l(p), o.setBottomSheetOpen(!0);
              }),
              n("bs:close", (p) => {
                  d(), o.setBottomSheetOpen(!1);
              }),
              (p, _) => {
                  const h = No;
                  return k(), ne(h, { isOpen: v(i), onOnClose: u }, { default: U(() => [v(r) ? (k(), ne(En(v(r)), Wn({ key: 0, onOnClose: d }, v(a)), null, 16)) : ue("", !0)]), _: 1 }, 8, ["isOpen"]);
              }
          );
      },
  }),
  en = "" + globalThis.__publicAssetsURL("images/daily-combo-success.png"),
  Go = { class: "daily-combo-success-inner" },
  Do = f("div", { class: "daily-combo-success-divider" }, null, -1),
  Zo = { class: "daily-combo-success-header" },
  Bo = ["innerHTML"],
  Oo = { class: "daily-combo-progress-center" },
  Yo = f("div", { class: "daily-combo-success-divider" }, null, -1),
  jo = { class: "daily-combo-success-content" },
  Xo = f("div", { class: "bs-content-image is-daily-combo-info" }, [f("div", { class: "bs-content-image-round-bg is-violet" }), f("img", { src: en })], -1),
  Uo = ["innerHTML"],
  zo = f("div", { class: "daily-combo-success-divider" }, null, -1),
  Jo = f("div", { class: "daily-combo-success-divider" }, null, -1),
  Qo = O({
      __name: "DailyComboSuccess",
      setup(e) {
          const t = Ke(),
              n = () => {
                  t.setDailyComboSuccess(!1);
              },
              o = $e(() => (c.value === 1 ? b().$i18n.t("daily_combo.card_found_1") : b().$i18n.t("daily_combo.card_found_2"))),
              r = G(null),
              a = G(0),
              c = $e(() => {
                  var i, s;
                  return ((s = (i = t.dailyCombo) == null ? void 0 : i.upgradeIds) == null ? void 0 : s.filter((l) => l !== null).length) ?? 1;
              });
          return (
              Ge(() => {
                  c.value === 1 ? Q().trackEvent(de.DAILY_COMBO_FOUND_1) : Q().trackEvent(de.DAILY_COMBO_FOUND_2);
                  const i = r.value,
                      s = i.getContext("2d"),
                      l = 50,
                      d = 300,
                      u = (Math.PI * 2) / l;
                  (i.width = 400), (i.height = 400);
                  function m() {
                      s.clearRect(0, 0, i.width, i.height);
                      const p = i.width / 2,
                          _ = i.height / 2;
                      for (let h = 0; h < l; h++) {
                          const g = h * u + a.value,
                              y = p + Math.cos(g) * 30,
                              x = _ + Math.sin(g) * 30,
                              C = p + Math.cos(g + (Math.PI / 180) * 20) * d,
                              M = _ + Math.sin(g + (Math.PI / 180) * 20) * d,
                              F = s.createLinearGradient(y, x, C, M);
                          F.addColorStop(0, "rgba(110, 76, 244, 0.5)"), F.addColorStop(1, "transparent"), s.beginPath(), s.moveTo(y, x), s.lineTo(C, M), s.lineTo(p, _), s.closePath(), (s.fillStyle = F), s.fill();
                      }
                      (a.value += Math.PI / 180), setTimeout(m, 50);
                  }
                  m();
              }),
              (i, s) => {
                  var l;
                  return (
                      k(),
                      A("div", { class: "daily-combo-success", onClick: n }, [
                          f("div", Go, [
                              Do,
                              f("div", Zo, [
                                  f("p", { innerHTML: i.$t("daily_combo.title") }, null, 8, Bo),
                                  f("div", Oo, [
                                      f("ul", null, [
                                          (k(!0),
                                          A(
                                              ge,
                                              null,
                                              Xt((l = v(t).dailyCombo) == null ? void 0 : l.upgradeIds, (d, u) => {
                                                  var m, p;
                                                  return k(), A("li", { key: `ddc${u}-${d || new Date()}`, class: zt({ "is-completed": (p = (m = v(t).dailyCombo) == null ? void 0 : m.upgradeIds) == null ? void 0 : p[u] }) }, null, 2);
                                              }),
                                              128
                                          )),
                                      ]),
                                  ]),
                              ]),
                              Yo,
                              f("div", jo, [Xo, f("canvas", { ref_key: "canvasSun", ref: r }, null, 512)]),
                              f("div", { class: "bs-content-subtitle", innerHTML: v(o) }, null, 8, Uo),
                              zo,
                              Jo,
                          ]),
                      ])
                  );
              }
          );
      },
  });
var Xe = function () {
  return (
      (Xe =
          Object.assign ||
          function (t) {
              for (var n, o = 1, r = arguments.length; o < r; o++) {
                  n = arguments[o];
                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
              }
              return t;
          }),
      Xe.apply(this, arguments)
  );
};
function E(e, t, n, o) {
  function r(a) {
      return a instanceof n
          ? a
          : new n(function (c) {
                c(a);
            });
  }
  return new (n || (n = Promise))(function (a, c) {
      function i(d) {
          try {
              l(o.next(d));
          } catch (u) {
              c(u);
          }
      }
      function s(d) {
          try {
              l(o.throw(d));
          } catch (u) {
              c(u);
          }
      }
      function l(d) {
          d.done ? a(d.value) : r(d.value).then(i, s);
      }
      l((o = o.apply(e, t || [])).next());
  });
}
function W(e, t) {
  var n = {
          label: 0,
          sent: function () {
              if (a[0] & 1) throw a[1];
              return a[1];
          },
          trys: [],
          ops: [],
      },
      o,
      r,
      a,
      c;
  return (
      (c = { next: i(0), throw: i(1), return: i(2) }),
      typeof Symbol == "function" &&
          (c[Symbol.iterator] = function () {
              return this;
          }),
      c
  );
  function i(l) {
      return function (d) {
          return s([l, d]);
      };
  }
  function s(l) {
      if (o) throw new TypeError("Generator is already executing.");
      for (; c && ((c = 0), l[0] && (n = 0)), n; )
          try {
              if (((o = 1), r && (a = l[0] & 2 ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done)) return a;
              switch (((r = 0), a && (l = [l[0] & 2, a.value]), l[0])) {
                  case 0:
                  case 1:
                      a = l;
                      break;
                  case 4:
                      return n.label++, { value: l[1], done: !1 };
                  case 5:
                      n.label++, (r = l[1]), (l = [0]);
                      continue;
                  case 7:
                      (l = n.ops.pop()), n.trys.pop();
                      continue;
                  default:
                      if (((a = n.trys), !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2))) {
                          n = 0;
                          continue;
                      }
                      if (l[0] === 3 && (!a || (l[1] > a[0] && l[1] < a[3]))) {
                          n.label = l[1];
                          break;
                      }
                      if (l[0] === 6 && n.label < a[1]) {
                          (n.label = a[1]), (a = l);
                          break;
                      }
                      if (a && n.label < a[2]) {
                          (n.label = a[2]), n.ops.push(l);
                          break;
                      }
                      a[2] && n.ops.pop(), n.trys.pop();
                      continue;
              }
              l = t.call(e, n);
          } catch (d) {
              (l = [6, d]), (r = 0);
          } finally {
              o = a = 0;
          }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function tn(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, a; o < r; o++) (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), (a[o] = t[o]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var nn = "4.2.1";
function ae(e, t) {
  return new Promise(function (n) {
      return setTimeout(n, e, t);
  });
}
function Re() {
  return ae(0);
}
function Ko(e, t) {
  t === void 0 && (t = 1 / 0);
  var n = window.requestIdleCallback;
  return n
      ? new Promise(function (o) {
            return n.call(
                window,
                function () {
                    return o();
                },
                { timeout: t }
            );
        })
      : ae(Math.min(e, t));
}
function on(e) {
  return !!e && typeof e.then == "function";
}
function $t(e, t) {
  try {
      var n = e();
      on(n)
          ? n.then(
                function (o) {
                    return t(!0, o);
                },
                function (o) {
                    return t(!1, o);
                }
            )
          : t(!0, n);
  } catch (o) {
      t(!1, o);
  }
}
function Rt(e, t, n) {
  return (
      n === void 0 && (n = 16),
      E(this, void 0, void 0, function () {
          var o, r, a, c;
          return W(this, function (i) {
              switch (i.label) {
                  case 0:
                      (o = Array(e.length)), (r = Date.now()), (a = 0), (i.label = 1);
                  case 1:
                      return a < e.length ? ((o[a] = t(e[a], a)), (c = Date.now()), c >= r + n ? ((r = c), [4, ae(0)]) : [3, 3]) : [3, 4];
                  case 2:
                      i.sent(), (i.label = 3);
                  case 3:
                      return ++a, [3, 1];
                  case 4:
                      return [2, o];
              }
          });
      })
  );
}
function Ne(e) {
  e.then(void 0, function () {});
}
function qo(e, t) {
  for (var n = 0, o = e.length; n < o; ++n) if (e[n] === t) return !0;
  return !1;
}
function er(e, t) {
  return !qo(e, t);
}
function et(e) {
  return parseInt(e);
}
function j(e) {
  return parseFloat(e);
}
function J(e, t) {
  return typeof e == "number" && isNaN(e) ? t : e;
}
function $(e) {
  return e.reduce(function (t, n) {
      return t + (n ? 1 : 0);
  }, 0);
}
function rn(e, t) {
  if ((t === void 0 && (t = 1), Math.abs(t) >= 1)) return Math.round(e / t) * t;
  var n = 1 / t;
  return Math.round(e * n) / n;
}
function tr(e) {
  for (
      var t,
          n,
          o = "Unexpected syntax '".concat(e, "'"),
          r = /^\s*([a-z-]*)(.*)$/i.exec(e),
          a = r[1] || void 0,
          c = {},
          i = /([.:#][\w-]+|\[.+?\])/gi,
          s = function (m, p) {
              (c[m] = c[m] || []), c[m].push(p);
          };
      ;

  ) {
      var l = i.exec(r[2]);
      if (!l) break;
      var d = l[0];
      switch (d[0]) {
          case ".":
              s("class", d.slice(1));
              break;
          case "#":
              s("id", d.slice(1));
              break;
          case "[": {
              var u = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(d);
              if (u) s(u[1], (n = (t = u[4]) !== null && t !== void 0 ? t : u[5]) !== null && n !== void 0 ? n : "");
              else throw new Error(o);
              break;
          }
          default:
              throw new Error(o);
      }
  }
  return [a, c];
}
function nr(e) {
  for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) {
      var o = e.charCodeAt(n);
      if (o > 127) return new TextEncoder().encode(e);
      t[n] = o;
  }
  return t;
}
function q(e, t) {
  var n = e[0] >>> 16,
      o = e[0] & 65535,
      r = e[1] >>> 16,
      a = e[1] & 65535,
      c = t[0] >>> 16,
      i = t[0] & 65535,
      s = t[1] >>> 16,
      l = t[1] & 65535,
      d = 0,
      u = 0,
      m = 0,
      p = 0;
  (p += a + l), (m += p >>> 16), (p &= 65535), (m += r + s), (u += m >>> 16), (m &= 65535), (u += o + i), (d += u >>> 16), (u &= 65535), (d += n + c), (d &= 65535), (e[0] = (d << 16) | u), (e[1] = (m << 16) | p);
}
function B(e, t) {
  var n = e[0] >>> 16,
      o = e[0] & 65535,
      r = e[1] >>> 16,
      a = e[1] & 65535,
      c = t[0] >>> 16,
      i = t[0] & 65535,
      s = t[1] >>> 16,
      l = t[1] & 65535,
      d = 0,
      u = 0,
      m = 0,
      p = 0;
  (p += a * l),
      (m += p >>> 16),
      (p &= 65535),
      (m += r * l),
      (u += m >>> 16),
      (m &= 65535),
      (m += a * s),
      (u += m >>> 16),
      (m &= 65535),
      (u += o * l),
      (d += u >>> 16),
      (u &= 65535),
      (u += r * s),
      (d += u >>> 16),
      (u &= 65535),
      (u += a * i),
      (d += u >>> 16),
      (u &= 65535),
      (d += n * l + o * s + r * i + a * c),
      (d &= 65535),
      (e[0] = (d << 16) | u),
      (e[1] = (m << 16) | p);
}
function se(e, t) {
  var n = e[0];
  (t %= 64),
      t === 32 ? ((e[0] = e[1]), (e[1] = n)) : t < 32 ? ((e[0] = (n << t) | (e[1] >>> (32 - t))), (e[1] = (e[1] << t) | (n >>> (32 - t)))) : ((t -= 32), (e[0] = (e[1] << t) | (n >>> (32 - t))), (e[1] = (n << t) | (e[1] >>> (32 - t))));
}
function H(e, t) {
  (t %= 64), t !== 0 && (t < 32 ? ((e[0] = e[1] >>> (32 - t)), (e[1] = e[1] << t)) : ((e[0] = e[1] << (t - 32)), (e[1] = 0)));
}
function T(e, t) {
  (e[0] ^= t[0]), (e[1] ^= t[1]);
}
var or = [4283543511, 3981806797],
  rr = [3301882366, 444984403];
function Nt(e) {
  var t = [0, e[0] >>> 1];
  T(e, t), B(e, or), (t[1] = e[0] >>> 1), T(e, t), B(e, rr), (t[1] = e[0] >>> 1), T(e, t);
}
var We = [2277735313, 289559509],
  Fe = [1291169091, 658871167],
  Ht = [0, 5],
  ar = [0, 1390208809],
  ir = [0, 944331445];
function sr(e, t) {
  var n = nr(e);
  t = t || 0;
  var o = [0, n.length],
      r = o[1] % 16,
      a = o[1] - r,
      c = [0, t],
      i = [0, t],
      s = [0, 0],
      l = [0, 0],
      d;
  for (d = 0; d < a; d = d + 16)
      (s[0] = n[d + 4] | (n[d + 5] << 8) | (n[d + 6] << 16) | (n[d + 7] << 24)),
          (s[1] = n[d] | (n[d + 1] << 8) | (n[d + 2] << 16) | (n[d + 3] << 24)),
          (l[0] = n[d + 12] | (n[d + 13] << 8) | (n[d + 14] << 16) | (n[d + 15] << 24)),
          (l[1] = n[d + 8] | (n[d + 9] << 8) | (n[d + 10] << 16) | (n[d + 11] << 24)),
          B(s, We),
          se(s, 31),
          B(s, Fe),
          T(c, s),
          se(c, 27),
          q(c, i),
          B(c, Ht),
          q(c, ar),
          B(l, Fe),
          se(l, 33),
          B(l, We),
          T(i, l),
          se(i, 31),
          q(i, c),
          B(i, Ht),
          q(i, ir);
  (s[0] = 0), (s[1] = 0), (l[0] = 0), (l[1] = 0);
  var u = [0, 0];
  switch (r) {
      case 15:
          (u[1] = n[d + 14]), H(u, 48), T(l, u);
      case 14:
          (u[1] = n[d + 13]), H(u, 40), T(l, u);
      case 13:
          (u[1] = n[d + 12]), H(u, 32), T(l, u);
      case 12:
          (u[1] = n[d + 11]), H(u, 24), T(l, u);
      case 11:
          (u[1] = n[d + 10]), H(u, 16), T(l, u);
      case 10:
          (u[1] = n[d + 9]), H(u, 8), T(l, u);
      case 9:
          (u[1] = n[d + 8]), T(l, u), B(l, Fe), se(l, 33), B(l, We), T(i, l);
      case 8:
          (u[1] = n[d + 7]), H(u, 56), T(s, u);
      case 7:
          (u[1] = n[d + 6]), H(u, 48), T(s, u);
      case 6:
          (u[1] = n[d + 5]), H(u, 40), T(s, u);
      case 5:
          (u[1] = n[d + 4]), H(u, 32), T(s, u);
      case 4:
          (u[1] = n[d + 3]), H(u, 24), T(s, u);
      case 3:
          (u[1] = n[d + 2]), H(u, 16), T(s, u);
      case 2:
          (u[1] = n[d + 1]), H(u, 8), T(s, u);
      case 1:
          (u[1] = n[d]), T(s, u), B(s, We), se(s, 31), B(s, Fe), T(c, s);
  }
  return (
      T(c, o),
      T(i, o),
      q(c, i),
      q(i, c),
      Nt(c),
      Nt(i),
      q(c, i),
      q(i, c),
      ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
  );
}
function cr(e) {
  var t;
  return Xe(
      {
          name: e.name,
          message: e.message,
          stack:
              (t = e.stack) === null || t === void 0
                  ? void 0
                  : t.split(`
`),
      },
      e
  );
}
function lr(e) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e));
}
function ur(e) {
  return typeof e != "function";
}
function dr(e, t) {
  var n = new Promise(function (o) {
      var r = Date.now();
      $t(e.bind(null, t), function () {
          for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
          var i = Date.now() - r;
          if (!a[0])
              return o(function () {
                  return { error: a[1], duration: i };
              });
          var s = a[1];
          if (ur(s))
              return o(function () {
                  return { value: s, duration: i };
              });
          o(function () {
              return new Promise(function (l) {
                  var d = Date.now();
                  $t(s, function () {
                      for (var u = [], m = 0; m < arguments.length; m++) u[m] = arguments[m];
                      var p = i + Date.now() - d;
                      if (!u[0]) return l({ error: u[1], duration: p });
                      l({ value: u[1], duration: p });
                  });
              });
          });
      });
  });
  return (
      Ne(n),
      function () {
          return n.then(function (r) {
              return r();
          });
      }
  );
}
function fr(e, t, n) {
  var o = Object.keys(e).filter(function (a) {
          return er(n, a);
      }),
      r = Rt(o, function (a) {
          return dr(e[a], t);
      });
  return (
      Ne(r),
      function () {
          return E(this, void 0, void 0, function () {
              var c, i, s, l, d;
              return W(this, function (u) {
                  switch (u.label) {
                      case 0:
                          return [4, r];
                      case 1:
                          return (
                              (c = u.sent()),
                              [
                                  4,
                                  Rt(c, function (m) {
                                      var p = m();
                                      return Ne(p), p;
                                  }),
                              ]
                          );
                      case 2:
                          return (i = u.sent()), [4, Promise.all(i)];
                      case 3:
                          for (s = u.sent(), l = {}, d = 0; d < o.length; ++d) l[o[d]] = s[d];
                          return [2, l];
                  }
              });
          });
      }
  );
}
function an() {
  var e = window,
      t = navigator;
  return $(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4;
}
function mr() {
  var e = window,
      t = navigator;
  return $(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !an();
}
function tt() {
  var e = window,
      t = navigator;
  return $(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, t.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5;
}
function oe() {
  var e = window,
      t = navigator;
  return $(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, t.vendor.indexOf("Apple") === 0, "getStorageUpdates" in t, "WebKitMediaKeys" in e]) >= 4;
}
function nt() {
  var e = window,
      t = e.HTMLElement,
      n = e.Document;
  return $(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), t && !("autocapitalize" in t.prototype), n && "pointerLockElement" in n.prototype]) >= 4;
}
function De() {
  var e = window;
  return lr(e.print) ? $([String(e.browser) === "[object WebPageNamespace]", "MicrodataExtractor" in e]) >= 1 : !1;
}
function sn() {
  var e,
      t,
      n = window;
  return (
      $([
          "buildID" in navigator,
          "MozAppearance" in ((t = (e = document.documentElement) === null || e === void 0 ? void 0 : e.style) !== null && t !== void 0 ? t : {}),
          "onmozfullscreenchange" in n,
          "mozInnerScreenX" in n,
          "CSSMozDocumentRule" in n,
          "CanvasCaptureMediaStream" in n,
      ]) >= 4
  );
}
function pr() {
  var e = window;
  return $([!("MediaSettingsRange" in e), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3;
}
function vr() {
  var e = window;
  return $(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3;
}
function Ze() {
  var e = window,
      t = navigator,
      n = e.CSS,
      o = e.HTMLButtonElement;
  return $([!("getStorageUpdates" in t), o && "popover" in o.prototype, "CSSCounterStyleRule" in e, n.supports("font-size-adjust: ex-height 0.5"), n.supports("text-transform: full-width")]) >= 4;
}
function hr() {
  if (navigator.platform === "iPad") return !0;
  var e = screen,
      t = e.width / e.height;
  return $(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > 0.65 && t < 1.53]) >= 2;
}
function gr() {
  var e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null;
}
function br() {
  var e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e);
}
function cn() {
  var e = tt(),
      t = sn(),
      n = window,
      o = navigator,
      r = "connection";
  return e ? $([!("SharedWorker" in n), o[r] && "ontypechange" in o[r], !("sinkId" in new window.Audio())]) >= 2 : t ? $(["onorientationchange" in n, "orientation" in n, /android/i.test(navigator.appVersion)]) >= 2 : !1;
}
function ln(e, t, n) {
  var o, r, a;
  return (
      n === void 0 && (n = 50),
      E(this, void 0, void 0, function () {
          var c, i;
          return W(this, function (s) {
              switch (s.label) {
                  case 0:
                      (c = document), (s.label = 1);
                  case 1:
                      return c.body ? [3, 3] : [4, ae(n)];
                  case 2:
                      return s.sent(), [3, 1];
                  case 3:
                      (i = c.createElement("iframe")), (s.label = 4);
                  case 4:
                      return (
                          s.trys.push([4, , 10, 11]),
                          [
                              4,
                              new Promise(function (l, d) {
                                  var u = !1,
                                      m = function () {
                                          (u = !0), l();
                                      },
                                      p = function (g) {
                                          (u = !0), d(g);
                                      };
                                  (i.onload = m), (i.onerror = p);
                                  var _ = i.style;
                                  _.setProperty("display", "block", "important"),
                                      (_.position = "absolute"),
                                      (_.top = "0"),
                                      (_.left = "0"),
                                      (_.visibility = "hidden"),
                                      t && "srcdoc" in i ? (i.srcdoc = t) : (i.src = "about:blank"),
                                      c.body.appendChild(i);
                                  var h = function () {
                                      var g, y;
                                      u || (((y = (g = i.contentWindow) === null || g === void 0 ? void 0 : g.document) === null || y === void 0 ? void 0 : y.readyState) === "complete" ? m() : setTimeout(h, 10));
                                  };
                                  h();
                              }),
                          ]
                      );
                  case 5:
                      s.sent(), (s.label = 6);
                  case 6:
                      return !((r = (o = i.contentWindow) === null || o === void 0 ? void 0 : o.document) === null || r === void 0) && r.body ? [3, 8] : [4, ae(n)];
                  case 7:
                      return s.sent(), [3, 6];
                  case 8:
                      return [4, e(i, i.contentWindow)];
                  case 9:
                      return [2, s.sent()];
                  case 10:
                      return (a = i.parentNode) === null || a === void 0 || a.removeChild(i), [7];
                  case 11:
                      return [2];
              }
          });
      })
  );
}
function _r(e) {
  for (var t = tr(e), n = t[0], o = t[1], r = document.createElement(n ?? "div"), a = 0, c = Object.keys(o); a < c.length; a++) {
      var i = c[a],
          s = o[i].join(" ");
      i === "style" ? yr(r.style, s) : r.setAttribute(i, s);
  }
  return r;
}
function yr(e, t) {
  for (var n = 0, o = t.split(";"); n < o.length; n++) {
      var r = o[n],
          a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(r);
      if (a) {
          var c = a[1],
              i = a[2],
              s = a[4];
          e.setProperty(c, i, s || "");
      }
  }
}
function wr() {
  return new Promise(function (e) {
      var t = document,
          n = "visibilitychange",
          o = function () {
              t.hidden || (t.removeEventListener(n, o), e());
          };
      t.addEventListener(n, o), o();
  });
}
var Pe = 44100,
  Sr = 4e4,
  Lr = 6.2;
function kr() {
  return E(this, void 0, void 0, function () {
      var e;
      return W(this, function (t) {
          switch (t.label) {
              case 0:
                  return [4, xr()];
              case 1:
                  return (
                      (e = t.sent()),
                      [
                          2,
                          function () {
                              var n = e();
                              return Er(n, Lr);
                          },
                      ]
                  );
          }
      });
  });
}
function xr() {
  return E(this, void 0, void 0, function () {
      var e, t, n;
      return W(this, function (o) {
          switch (o.label) {
              case 0:
                  return (
                      (t = wr().then(function () {
                          return ae(500);
                      })),
                      (n = Cr().then(
                          function (r) {
                              return (e = [!0, r]);
                          },
                          function (r) {
                              return (e = [!1, r]);
                          }
                      )),
                      [4, Promise.race([t, n])]
                  );
              case 1:
                  return (
                      o.sent(),
                      [
                          2,
                          function () {
                              if (!e) return -3;
                              if (!e[0]) throw e[1];
                              return e[1];
                          },
                      ]
                  );
          }
      });
  });
}
function Cr() {
  return E(this, void 0, void 0, function () {
      var e, t, n, o, r, a, c;
      return W(this, function (i) {
          switch (i.label) {
              case 0:
                  return (e = window), (t = e.OfflineAudioContext || e.webkitOfflineAudioContext), t ? (Mr() ? [2, -1] : [4, Tr(t)]) : [2, -2];
              case 1:
                  return (
                      (n = i.sent()),
                      n
                          ? ((o = new t(1, n.length - 1 + Sr, Pe)),
                            (r = o.createBufferSource()),
                            (r.buffer = n),
                            (r.loop = !0),
                            (r.loopStart = (n.length - 1) / Pe),
                            (r.loopEnd = n.length / Pe),
                            r.connect(o.destination),
                            r.start(),
                            [4, un(o)])
                          : [2, -3]
                  );
              case 2:
                  return (a = i.sent()), a ? ((c = Ar(n, a.getChannelData(0).subarray(n.length - 1))), [2, Math.abs(c)]) : [2, -3];
          }
      });
  });
}
function Mr() {
  return oe() && !nt() && !vr();
}
function Tr(e) {
  return E(this, void 0, void 0, function () {
      var t, n, o, r, a;
      return W(this, function (c) {
          switch (c.label) {
              case 0:
                  return (
                      (t = 3395),
                      (n = new e(1, t + 1, Pe)),
                      (o = n.createOscillator()),
                      (o.type = "square"),
                      (o.frequency.value = 1e3),
                      (r = n.createDynamicsCompressor()),
                      (r.threshold.value = -70),
                      (r.knee.value = 40),
                      (r.ratio.value = 12),
                      (r.attack.value = 0),
                      (r.release.value = 0.25),
                      (a = n.createBiquadFilter()),
                      (a.type = "allpass"),
                      (a.frequency.value = 5.239622852977861),
                      (a.Q.value = 0.1),
                      o.connect(r),
                      r.connect(a),
                      a.connect(n.destination),
                      o.start(0),
                      [4, un(n)]
                  );
              case 1:
                  return [2, c.sent()];
          }
      });
  });
}
function un(e) {
  return new Promise(function (t, n) {
      var o = 200,
          r = 25;
      e.oncomplete = function (c) {
          return t(c.renderedBuffer);
      };
      var a = function () {
          try {
              var c = e.startRendering();
              on(c) && Ne(c), e.state === "suspended" && (document.hidden || r--, r > 0 ? setTimeout(a, o) : t(null));
          } catch (i) {
              n(i);
          }
      };
      a();
  });
}
function Ar(e, t) {
  for (var n = void 0, o = !1, r = 0; r < t.length; r += Math.floor(t.length / 10))
      if (t[r] !== 0) {
          if (n === void 0) n = t[r];
          else if (n !== t[r]) {
              o = !0;
              break;
          }
      }
  return n === void 0 ? (n = e.getChannelData(0)[e.length - 1]) : o && (n = Ir(t)), n;
}
function Ir(e) {
  for (var t = 1 / 0, n = -1 / 0, o = 0; o < e.length; o++) {
      var r = e[o];
      r !== 0 && (r < t && (t = r), r > n && (n = r));
  }
  return (t + n) / 2;
}
function Er(e, t) {
  if (e === 0) return e;
  var n = Math.floor(Math.log10(Math.abs(e))),
      o = n - Math.floor(t) + 1,
      r = Math.pow(10, -o) * ((t * 10) % 10 || 1);
  return Math.round(e * r) / r;
}
var Wr = "mmMwWLliI0O&1",
  Fr = "48px",
  ce = ["monospace", "sans-serif", "serif"],
  Gt = [
      "sans-serif-thin",
      "ARNO PRO",
      "Agency FB",
      "Arabic Typesetting",
      "Arial Unicode MS",
      "AvantGarde Bk BT",
      "BankGothic Md BT",
      "Batang",
      "Bitstream Vera Sans Mono",
      "Calibri",
      "Century",
      "Century Gothic",
      "Clarendon",
      "EUROSTILE",
      "Franklin Gothic",
      "Futura Bk BT",
      "Futura Md BT",
      "GOTHAM",
      "Gill Sans",
      "HELV",
      "Haettenschweiler",
      "Helvetica Neue",
      "Humanst521 BT",
      "Leelawadee",
      "Letter Gothic",
      "Levenim MT",
      "Lucida Bright",
      "Lucida Sans",
      "Menlo",
      "MS Mincho",
      "MS Outlook",
      "MS Reference Specialty",
      "MS UI Gothic",
      "MT Extra",
      "MYRIAD PRO",
      "Marlett",
      "Meiryo UI",
      "Microsoft Uighur",
      "Minion Pro",
      "Monotype Corsiva",
      "PMingLiU",
      "Pristina",
      "SCRIPTINA",
      "Segoe UI Light",
      "Serifa",
      "SimHei",
      "Small Fonts",
      "Staccato222 BT",
      "TRAJAN PRO",
      "Univers CE 55 Medium",
      "Vrinda",
      "ZWAdobeF",
  ];
function Pr() {
  var e = this;
  return ln(function (t, n) {
      var o = n.document;
      return E(e, void 0, void 0, function () {
          var r, a, c, i, s, l, d, u, m, p, _, h;
          return W(this, function (g) {
              switch (g.label) {
                  case 0:
                      return (
                          (r = o.body),
                          (r.style.fontSize = Fr),
                          (a = o.createElement("div")),
                          a.style.setProperty("visibility", "hidden", "important"),
                          (c = {}),
                          (i = {}),
                          (s = function (y) {
                              var x = o.createElement("span"),
                                  C = x.style;
                              return (C.position = "absolute"), (C.top = "0"), (C.left = "0"), (C.fontFamily = y), (x.textContent = Wr), a.appendChild(x), x;
                          }),
                          (l = function (y, x) {
                              return s("'".concat(y, "',").concat(x));
                          }),
                          (d = function () {
                              return ce.map(s);
                          }),
                          (u = function () {
                              for (
                                  var y = {},
                                      x = function (Y) {
                                          y[Y] = ce.map(function (D) {
                                              return l(Y, D);
                                          });
                                      },
                                      C = 0,
                                      M = Gt;
                                  C < M.length;
                                  C++
                              ) {
                                  var F = M[C];
                                  x(F);
                              }
                              return y;
                          }),
                          (m = function (y) {
                              return ce.some(function (x, C) {
                                  return y[C].offsetWidth !== c[x] || y[C].offsetHeight !== i[x];
                              });
                          }),
                          (p = d()),
                          (_ = u()),
                          r.appendChild(a),
                          [4, Re()]
                      );
                  case 1:
                      for (g.sent(), h = 0; h < ce.length; h++) (c[ce[h]] = p[h].offsetWidth), (i[ce[h]] = p[h].offsetHeight);
                      return [
                          2,
                          Gt.filter(function (y) {
                              return m(_[y]);
                          }),
                      ];
              }
          });
      });
  });
}
function Vr() {
  var e = navigator.plugins;
  if (e) {
      for (var t = [], n = 0; n < e.length; ++n) {
          var o = e[n];
          if (o) {
              for (var r = [], a = 0; a < o.length; ++a) {
                  var c = o[a];
                  r.push({ type: c.type, suffixes: c.suffixes });
              }
              t.push({ name: o.name, description: o.description, mimeTypes: r });
          }
      }
      return t;
  }
}
function $r() {
  return Rr(Or());
}
function Rr(e) {
  return E(this, void 0, void 0, function () {
      var t, n, o, r, a, c, i;
      return W(this, function (s) {
          switch (s.label) {
              case 0:
                  return (t = !1), (r = Nr()), (a = r[0]), (c = r[1]), Hr(a, c) ? [3, 1] : ((n = o = "unsupported"), [3, 4]);
              case 1:
                  return (t = Gr(c)), e ? ((n = o = "skipped"), [3, 4]) : [3, 2];
              case 2:
                  return [4, Dr(a, c)];
              case 3:
                  (i = s.sent()), (n = i[0]), (o = i[1]), (s.label = 4);
              case 4:
                  return [2, { winding: t, geometry: n, text: o }];
          }
      });
  });
}
function Nr() {
  var e = document.createElement("canvas");
  return (e.width = 1), (e.height = 1), [e, e.getContext("2d")];
}
function Hr(e, t) {
  return !!(t && e.toDataURL);
}
function Gr(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd");
}
function Dr(e, t) {
  return E(this, void 0, void 0, function () {
      var n, o, r;
      return W(this, function (a) {
          switch (a.label) {
              case 0:
                  return Zr(e, t), [4, Re()];
              case 1:
                  return a.sent(), (n = Be(e)), (o = Be(e)), n !== o ? [2, ["unstable", "unstable"]] : (Br(e, t), [4, Re()]);
              case 2:
                  return a.sent(), (r = Be(e)), [2, [n, r]];
          }
      });
  });
}
function Zr(e, t) {
  (e.width = 240), (e.height = 60), (t.textBaseline = "alphabetic"), (t.fillStyle = "#f60"), t.fillRect(100, 1, 62, 20), (t.fillStyle = "#069"), (t.font = '11pt "Times New Roman"');
  var n = "Cwm fjordbank gly ".concat("😃");
  t.fillText(n, 2, 15), (t.fillStyle = "rgba(102, 204, 0, 0.2)"), (t.font = "18pt Arial"), t.fillText(n, 4, 45);
}
function Br(e, t) {
  (e.width = 122), (e.height = 110), (t.globalCompositeOperation = "multiply");
  for (
      var n = 0,
          o = [
              ["#f2f", 40, 40],
              ["#2ff", 80, 40],
              ["#ff2", 60, 80],
          ];
      n < o.length;
      n++
  ) {
      var r = o[n],
          a = r[0],
          c = r[1],
          i = r[2];
      (t.fillStyle = a), t.beginPath(), t.arc(c, i, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  }
  (t.fillStyle = "#f9c"), t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd");
}
function Be(e) {
  return e.toDataURL();
}
function Or() {
  return oe() && Ze() && De();
}
function Yr() {
  var e = navigator,
      t = 0,
      n;
  e.maxTouchPoints !== void 0 ? (t = et(e.maxTouchPoints)) : e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints);
  try {
      document.createEvent("TouchEvent"), (n = !0);
  } catch {
      n = !1;
  }
  var o = "ontouchstart" in window;
  return { maxTouchPoints: t, touchEvent: n, touchStart: o };
}
function jr() {
  return navigator.oscpu;
}
function Xr() {
  var e = navigator,
      t = [],
      n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if ((n !== void 0 && t.push([n]), Array.isArray(e.languages))) (tt() && pr()) || t.push(e.languages);
  else if (typeof e.languages == "string") {
      var o = e.languages;
      o && t.push(o.split(","));
  }
  return t;
}
function Ur() {
  return window.screen.colorDepth;
}
function zr() {
  return J(j(navigator.deviceMemory), void 0);
}
function Jr() {
  if (!(oe() && Ze() && De())) return Qr();
}
function Qr() {
  var e = screen,
      t = function (o) {
          return J(et(o), null);
      },
      n = [t(e.width), t(e.height)];
  return n.sort().reverse(), n;
}
var Kr = 2500,
  qr = 10,
  Ve,
  Oe;
function ea() {
  if (Oe === void 0) {
      var e = function () {
          var t = Ue();
          ze(t) ? (Oe = setTimeout(e, Kr)) : ((Ve = t), (Oe = void 0));
      };
      e();
  }
}
function ta() {
  var e = this;
  return (
      ea(),
      function () {
          return E(e, void 0, void 0, function () {
              var t;
              return W(this, function (n) {
                  switch (n.label) {
                      case 0:
                          return (t = Ue()), ze(t) ? (Ve ? [2, tn([], Ve, !0)] : gr() ? [4, br()] : [3, 2]) : [3, 2];
                      case 1:
                          n.sent(), (t = Ue()), (n.label = 2);
                      case 2:
                          return ze(t) || (Ve = t), [2, t];
                  }
              });
          });
      }
  );
}
function na() {
  var e = this;
  if (oe() && Ze() && De())
      return function () {
          return Promise.resolve(void 0);
      };
  var t = ta();
  return function () {
      return E(e, void 0, void 0, function () {
          var n, o;
          return W(this, function (r) {
              switch (r.label) {
                  case 0:
                      return [4, t()];
                  case 1:
                      return (
                          (n = r.sent()),
                          (o = function (a) {
                              return a === null ? null : rn(a, qr);
                          }),
                          [2, [o(n[0]), o(n[1]), o(n[2]), o(n[3])]]
                      );
              }
          });
      });
  };
}
function Ue() {
  var e = screen;
  return [J(j(e.availTop), null), J(j(e.width) - j(e.availWidth) - J(j(e.availLeft), 0), null), J(j(e.height) - j(e.availHeight) - J(j(e.availTop), 0), null), J(j(e.availLeft), null)];
}
function ze(e) {
  for (var t = 0; t < 4; ++t) if (e[t]) return !1;
  return !0;
}
function oa() {
  return J(et(navigator.hardwareConcurrency), void 0);
}
function ra() {
  var e,
      t = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
  if (t) {
      var n = new t().resolvedOptions().timeZone;
      if (n) return n;
  }
  var o = -aa();
  return "UTC".concat(o >= 0 ? "+" : "").concat(Math.abs(o));
}
function aa() {
  var e = new Date().getFullYear();
  return Math.max(j(new Date(e, 0, 1).getTimezoneOffset()), j(new Date(e, 6, 1).getTimezoneOffset()));
}
function ia() {
  try {
      return !!window.sessionStorage;
  } catch {
      return !0;
  }
}
function sa() {
  try {
      return !!window.localStorage;
  } catch {
      return !0;
  }
}
function ca() {
  if (!(an() || mr()))
      try {
          return !!window.indexedDB;
      } catch {
          return !0;
      }
}
function la() {
  return !!window.openDatabase;
}
function ua() {
  return navigator.cpuClass;
}
function da() {
  var e = navigator.platform;
  return e === "MacIntel" && oe() && !nt() ? (hr() ? "iPad" : "iPhone") : e;
}
function fa() {
  return navigator.vendor || "";
}
function ma() {
  for (
      var e = [], t = 0, n = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"];
      t < n.length;
      t++
  ) {
      var o = n[t],
          r = window[o];
      r && typeof r == "object" && e.push(o);
  }
  return e.sort();
}
function pa() {
  var e = document;
  try {
      e.cookie = "cookietest=1; SameSite=Strict;";
      var t = e.cookie.indexOf("cookietest=") !== -1;
      return (e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT"), t;
  } catch {
      return !1;
  }
}
function va() {
  var e = atob;
  return {
      abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', e("I0JveC1CYW5uZXItYWRz")],
      abpvn: [".quangcao", "#mobileCatfish", e("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
      adBlockFinland: [".mainostila", e("LnNwb25zb3JpdA=="), ".ylamainos", e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
      adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", e("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
      adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", e("LmhlYWRlci1ibG9ja2VkLWFk"), e("I2FkX2Jsb2NrZXI=")],
      adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
      adGuardBase: [".BetterJsPopOverlay", e("I2FkXzMwMFgyNTA="), e("I2Jhbm5lcmZsb2F0MjI="), e("I2NhbXBhaWduLWJhbm5lcg=="), e("I0FkLUNvbnRlbnQ=")],
      adGuardChinese: [e("LlppX2FkX2FfSA=="), e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", e("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), e("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
      adGuardFrench: ["#pavePub", e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", e("LmFkc19iYW4=")],
      adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
      adGuardJapanese: ["#kauli_yad_1", e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), e("LmFkZ29vZ2xl"), e("Ll9faXNib29zdFJldHVybkFk")],
      adGuardMobile: [e("YW1wLWF1dG8tYWRz"), e("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", e("I2FkX2ludmlld19hcmVh")],
      adGuardRussian: [e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), e("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
      adGuardSocial: [e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
      adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
      adGuardTrackingProtection: [
          "#qoo-counter",
          e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),
          e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),
          e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),
          "#top100counter",
      ],
      adGuardTurkish: ["#backkapat", e("I3Jla2xhbWk="), e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
      bulgarian: [e("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
      easyList: [".yb-floorad", e("LndpZGdldF9wb19hZHNfd2lkZ2V0"), e("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", e("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
      easyListChina: [e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), e("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
      easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", e("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
      easyListCzechSlovak: ["#onlajny-stickers", e("I3Jla2xhbW5pLWJveA=="), e("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
      easyListDutch: [e("I2FkdmVydGVudGll"), e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
      easyListGermany: ["#SSpotIMPopSlider", e("LnNwb25zb3JsaW5rZ3J1ZW4="), e("I3dlcmJ1bmdza3k="), e("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), e("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
      easyListItaly: [
          e("LmJveF9hZHZfYW5udW5jaQ=="),
          ".sb-box-pubbliredazionale",
          e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),
          e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),
          e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ=="),
      ],
      easyListLithuania: [e("LnJla2xhbW9zX3RhcnBhcw=="), e("LnJla2xhbW9zX251b3JvZG9z"), e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
      estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
      fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
      fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
      fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
      fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
      frellwitSwedish: [e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", e("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
      greekAdBlock: [
          e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),
          e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),
          e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),
          "DIV.agores300",
          "TABLE.advright",
      ],
      hungarian: ["#cemp_doboz", ".optimonk-iframe-container", e("LmFkX19tYWlu"), e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
      iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
      icelandicAbp: [e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
      latvian: [
          e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),
          e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ=="),
      ],
      listKr: [e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), e("I2xpdmVyZUFkV3JhcHBlcg=="), e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), e("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
      listeAr: [e("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
      listeFr: [e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
      officialPolish: [
          "#ceneo-placeholder-ceneo-12",
          e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),
          e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),
          e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),
          e("ZGl2I3NrYXBpZWNfYWQ="),
      ],
      ro: [
          e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),
          e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),
          e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),
          e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),
          'a[href^="/url/"]',
      ],
      ruAd: [e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
      thaiAds: ["a[href*=macau-uta-popup]", e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), e("LmFkczMwMHM="), ".bumq", ".img-kosana"],
      webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", e("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"],
  };
}
function ha(e) {
  var t = e === void 0 ? {} : e,
      n = t.debug;
  return E(this, void 0, void 0, function () {
      var o, r, a, c, i, s;
      return W(this, function (l) {
          switch (l.label) {
              case 0:
                  return ga()
                      ? ((o = va()),
                        (r = Object.keys(o)),
                        (a = (s = []).concat.apply(
                            s,
                            r.map(function (d) {
                                return o[d];
                            })
                        )),
                        [4, ba(a)])
                      : [2, void 0];
              case 1:
                  return (
                      (c = l.sent()),
                      n && _a(o, c),
                      (i = r.filter(function (d) {
                          var u = o[d],
                              m = $(
                                  u.map(function (p) {
                                      return c[p];
                                  })
                              );
                          return m > u.length * 0.6;
                      })),
                      i.sort(),
                      [2, i]
                  );
          }
      });
  });
}
function ga() {
  return oe() || cn();
}
function ba(e) {
  var t;
  return E(this, void 0, void 0, function () {
      var n, o, r, a, s, c, i, s;
      return W(this, function (l) {
          switch (l.label) {
              case 0:
                  for (n = document, o = n.createElement("div"), r = new Array(e.length), a = {}, Dt(o), s = 0; s < e.length; ++s)
                      (c = _r(e[s])), c.tagName === "DIALOG" && c.show(), (i = n.createElement("div")), Dt(i), i.appendChild(c), o.appendChild(i), (r[s] = c);
                  l.label = 1;
              case 1:
                  return n.body ? [3, 3] : [4, ae(50)];
              case 2:
                  return l.sent(), [3, 1];
              case 3:
                  return n.body.appendChild(o), [4, Re()];
              case 4:
                  l.sent();
                  try {
                      for (s = 0; s < e.length; ++s) r[s].offsetParent || (a[e[s]] = !0);
                  } finally {
                      (t = o.parentNode) === null || t === void 0 || t.removeChild(o);
                  }
                  return [2, a];
          }
      });
  });
}
function Dt(e) {
  e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important");
}
function _a(e, t) {
  for (var n = "DOM blockers debug:\n```", o = 0, r = Object.keys(e); o < r.length; o++) {
      var a = r[o];
      n += `
`.concat(a, ":");
      for (var c = 0, i = e[a]; c < i.length; c++) {
          var s = i[c];
          n += `
`
              .concat(t[s] ? "🚫" : "➡️", " ")
              .concat(s);
      }
  }
  console.log("".concat(n, "\n```"));
}
function ya() {
  for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
      var n = t[e];
      if (matchMedia("(color-gamut: ".concat(n, ")")).matches) return n;
  }
}
function wa() {
  if (Zt("inverted")) return !0;
  if (Zt("none")) return !1;
}
function Zt(e) {
  return matchMedia("(inverted-colors: ".concat(e, ")")).matches;
}
function Sa() {
  if (Bt("active")) return !0;
  if (Bt("none")) return !1;
}
function Bt(e) {
  return matchMedia("(forced-colors: ".concat(e, ")")).matches;
}
var La = 100;
function ka() {
  if (matchMedia("(min-monochrome: 0)").matches) {
      for (var e = 0; e <= La; ++e) if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
      throw new Error("Too high value");
  }
}
function xa() {
  if (le("no-preference")) return 0;
  if (le("high") || le("more")) return 1;
  if (le("low") || le("less")) return -1;
  if (le("forced")) return 10;
}
function le(e) {
  return matchMedia("(prefers-contrast: ".concat(e, ")")).matches;
}
function Ca() {
  if (Ot("reduce")) return !0;
  if (Ot("no-preference")) return !1;
}
function Ot(e) {
  return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches;
}
function Ma() {
  if (Yt("reduce")) return !0;
  if (Yt("no-preference")) return !1;
}
function Yt(e) {
  return matchMedia("(prefers-reduced-transparency: ".concat(e, ")")).matches;
}
function Ta() {
  if (jt("high")) return !0;
  if (jt("standard")) return !1;
}
function jt(e) {
  return matchMedia("(dynamic-range: ".concat(e, ")")).matches;
}
var S = Math,
  P = function () {
      return 0;
  };
function Aa() {
  var e = S.acos || P,
      t = S.acosh || P,
      n = S.asin || P,
      o = S.asinh || P,
      r = S.atanh || P,
      a = S.atan || P,
      c = S.sin || P,
      i = S.sinh || P,
      s = S.cos || P,
      l = S.cosh || P,
      d = S.tan || P,
      u = S.tanh || P,
      m = S.exp || P,
      p = S.expm1 || P,
      _ = S.log1p || P,
      h = function (w) {
          return S.pow(S.PI, w);
      },
      g = function (w) {
          return S.log(w + S.sqrt(w * w - 1));
      },
      y = function (w) {
          return S.log(w + S.sqrt(w * w + 1));
      },
      x = function (w) {
          return S.log((1 + w) / (1 - w)) / 2;
      },
      C = function (w) {
          return S.exp(w) - 1 / S.exp(w) / 2;
      },
      M = function (w) {
          return (S.exp(w) + 1 / S.exp(w)) / 2;
      },
      F = function (w) {
          return S.exp(w) - 1;
      },
      Y = function (w) {
          return (S.exp(2 * w) - 1) / (S.exp(2 * w) + 1);
      },
      D = function (w) {
          return S.log(1 + w);
      };
  return {
      acos: e(0.12312423423423424),
      acosh: t(1e308),
      acoshPf: g(1e154),
      asin: n(0.12312423423423424),
      asinh: o(1),
      asinhPf: y(1),
      atanh: r(0.5),
      atanhPf: x(0.5),
      atan: a(0.5),
      sin: c(-1e300),
      sinh: i(1),
      sinhPf: C(1),
      cos: s(10.000000000123),
      cosh: l(1),
      coshPf: M(1),
      tan: d(-1e300),
      tanh: u(1),
      tanhPf: Y(1),
      exp: m(1),
      expm1: p(1),
      expm1Pf: F(1),
      log1p: _(10),
      log1pPf: D(10),
      powPI: h(-100),
  };
}
var Ia = "mmMwWLliI0fiflO&1",
  Ye = {
      default: [],
      apple: [{ font: "-apple-system-body" }],
      serif: [{ fontFamily: "serif" }],
      sans: [{ fontFamily: "sans-serif" }],
      mono: [{ fontFamily: "monospace" }],
      min: [{ fontSize: "1px" }],
      system: [{ fontFamily: "system-ui" }],
  };
function Ea() {
  return Wa(function (e, t) {
      for (var n = {}, o = {}, r = 0, a = Object.keys(Ye); r < a.length; r++) {
          var c = a[r],
              i = Ye[c],
              s = i[0],
              l = s === void 0 ? {} : s,
              d = i[1],
              u = d === void 0 ? Ia : d,
              m = e.createElement("span");
          (m.textContent = u), (m.style.whiteSpace = "nowrap");
          for (var p = 0, _ = Object.keys(l); p < _.length; p++) {
              var h = _[p],
                  g = l[h];
              g !== void 0 && (m.style[h] = g);
          }
          (n[c] = m), t.append(e.createElement("br"), m);
      }
      for (var y = 0, x = Object.keys(Ye); y < x.length; y++) {
          var c = x[y];
          o[c] = n[c].getBoundingClientRect().width;
      }
      return o;
  });
}
function Wa(e, t) {
  return (
      t === void 0 && (t = 4e3),
      ln(function (n, o) {
          var r = o.document,
              a = r.body,
              c = a.style;
          (c.width = "".concat(t, "px")), (c.webkitTextSizeAdjust = c.textSizeAdjust = "none"), tt() ? (a.style.zoom = "".concat(1 / o.devicePixelRatio)) : oe() && (a.style.zoom = "reset");
          var i = r.createElement("div");
          return (
              (i.textContent = tn([], Array((t / 20) << 0), !0)
                  .map(function () {
                      return "word";
                  })
                  .join(" ")),
              a.appendChild(i),
              e(r, a)
          );
      }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
  );
}
function Fa() {
  return navigator.pdfViewerEnabled;
}
function Pa() {
  var e = new Float32Array(1),
      t = new Uint8Array(e.buffer);
  return (e[0] = 1 / 0), (e[0] = e[0] - e[0]), t[3];
}
function Va() {
  var e = window.ApplePaySession;
  if (typeof (e == null ? void 0 : e.canMakePayments) != "function") return -1;
  try {
      return e.canMakePayments() ? 1 : 0;
  } catch (t) {
      return $a(t);
  }
}
function $a(e) {
  if (e instanceof Error) {
      if (e.name === "InvalidAccessError") {
          if (/\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
          if (/\bdifferent\b.*\borigin\b.*top.level\b.*\bframe\b/i.test(e.message)) return -3;
      }
      if (e.name === "SecurityError" && /\bthird.party iframes?.*\bnot.allowed\b/i.test(e.message)) return -3;
  }
  throw e;
}
function Ra() {
  var e,
      t = document.createElement("a"),
      n = (e = t.attributionSourceId) !== null && e !== void 0 ? e : t.attributionsourceid;
  return n === void 0 ? void 0 : String(n);
}
var dn = -1,
  fn = -2,
  Na = new Set([
      10752,
      2849,
      2884,
      2885,
      2886,
      2928,
      2929,
      2930,
      2931,
      2932,
      2960,
      2961,
      2962,
      2963,
      2964,
      2965,
      2966,
      2967,
      2968,
      2978,
      3024,
      3042,
      3088,
      3089,
      3106,
      3107,
      32773,
      32777,
      32777,
      32823,
      32824,
      32936,
      32937,
      32938,
      32939,
      32968,
      32969,
      32970,
      32971,
      3317,
      33170,
      3333,
      3379,
      3386,
      33901,
      33902,
      34016,
      34024,
      34076,
      3408,
      3410,
      3411,
      3412,
      3413,
      3414,
      3415,
      34467,
      34816,
      34817,
      34818,
      34819,
      34877,
      34921,
      34930,
      35660,
      35661,
      35724,
      35738,
      35739,
      36003,
      36004,
      36005,
      36347,
      36348,
      36349,
      37440,
      37441,
      37443,
      7936,
      7937,
      7938,
  ]),
  Ha = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Ga = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  Da = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  mn = "WEBGL_debug_renderer_info",
  Za = "WEBGL_polygon_mode";
function Ba(e) {
  var t,
      n,
      o,
      r,
      a,
      c,
      i = e.cache,
      s = pn(i);
  if (!s) return dn;
  if (!hn(s)) return fn;
  var l = vn() ? null : s.getExtension(mn);
  return {
      version: ((t = s.getParameter(s.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
      vendor: ((n = s.getParameter(s.VENDOR)) === null || n === void 0 ? void 0 : n.toString()) || "",
      vendorUnmasked: l ? ((o = s.getParameter(l.UNMASKED_VENDOR_WEBGL)) === null || o === void 0 ? void 0 : o.toString()) : "",
      renderer: ((r = s.getParameter(s.RENDERER)) === null || r === void 0 ? void 0 : r.toString()) || "",
      rendererUnmasked: l ? ((a = s.getParameter(l.UNMASKED_RENDERER_WEBGL)) === null || a === void 0 ? void 0 : a.toString()) : "",
      shadingLanguageVersion: ((c = s.getParameter(s.SHADING_LANGUAGE_VERSION)) === null || c === void 0 ? void 0 : c.toString()) || "",
  };
}
function Oa(e) {
  var t = e.cache,
      n = pn(t);
  if (!n) return dn;
  if (!hn(n)) return fn;
  var o = n.getSupportedExtensions(),
      r = n.getContextAttributes(),
      a = [],
      c = [],
      i = [],
      s = [];
  if (r)
      for (var l = 0, d = Object.keys(r); l < d.length; l++) {
          var u = d[l];
          a.push("".concat(u, "=").concat(r[u]));
      }
  for (var m = je(n), p = 0, _ = m; p < _.length; p++) {
      var h = _[p],
          g = n[h];
      c.push(
          ""
              .concat(h, "=")
              .concat(g)
              .concat(Na.has(g) ? "=".concat(n.getParameter(g)) : "")
      );
  }
  if (o)
      for (var y = 0, x = o; y < x.length; y++) {
          var C = x[y];
          if (!(C === Za || (C === mn && vn()))) {
              var M = n.getExtension(C);
              if (M) {
                  C === "WEBGL_polygon_mode" && console.log(je(M));
                  for (var F = 0, Y = je(M); F < Y.length; F++) {
                      var h = Y[F],
                          g = M[h];
                      i.push(
                          ""
                              .concat(h, "=")
                              .concat(g)
                              .concat(Ha.has(g) ? "=".concat(n.getParameter(g)) : "")
                      );
                  }
              }
          }
      }
  for (var D = 0, w = Ga; D < w.length; D++)
      for (var _e = w[D], ie = 0, me = Da; ie < me.length; ie++) {
          var pe = me[ie],
              ye = Ya(n, _e, pe);
          s.push("".concat(_e, ".").concat(pe, "=").concat(ye.join(",")));
      }
  return i.sort(), c.sort(), { contextAttributes: a, parameters: c, shaderPrecisions: s, extensions: o, extensionParameters: i };
}
function pn(e) {
  if (e.webgl) return e.webgl.context;
  var t = document.createElement("canvas"),
      n;
  t.addEventListener("webglCreateContextError", function () {
      return (n = void 0);
  });
  for (var o = 0, r = ["webgl", "experimental-webgl"]; o < r.length; o++) {
      var a = r[o];
      try {
          n = t.getContext(a);
      } catch {}
      if (n) break;
  }
  return (e.webgl = { context: n }), n;
}
function Ya(e, t, n) {
  var o = e.getShaderPrecisionFormat(e[t], e[n]);
  return o ? [o.rangeMin, o.rangeMax, o.precision] : [];
}
function je(e) {
  var t = Object.keys(e.__proto__);
  return t.filter(ja);
}
function ja(e) {
  return typeof e == "string" && !e.match(/[^A-Z0-9_x]/);
}
function vn() {
  return sn();
}
function hn(e) {
  return typeof e.getParameter == "function";
}
var Xa = {
  fonts: Pr,
  domBlockers: ha,
  fontPreferences: Ea,
  audio: kr,
  screenFrame: na,
  canvas: $r,
  osCpu: jr,
  languages: Xr,
  colorDepth: Ur,
  deviceMemory: zr,
  screenResolution: Jr,
  hardwareConcurrency: oa,
  timezone: ra,
  sessionStorage: ia,
  localStorage: sa,
  indexedDB: ca,
  openDatabase: la,
  cpuClass: ua,
  platform: da,
  plugins: Vr,
  touchSupport: Yr,
  vendor: fa,
  vendorFlavors: ma,
  cookiesEnabled: pa,
  colorGamut: ya,
  invertedColors: wa,
  forcedColors: Sa,
  monochrome: ka,
  contrast: xa,
  reducedMotion: Ca,
  reducedTransparency: Ma,
  hdr: Ta,
  math: Aa,
  pdfViewerEnabled: Fa,
  architecture: Pa,
  applePay: Va,
  privateClickMeasurement: Ra,
  webGlBasics: Ba,
  webGlExtensions: Oa,
};
function Ua(e) {
  return fr(Xa, e, []);
}
var za = "$ if upgrade to Pro: https://fpjs.dev/pro";
function Ja(e) {
  var t = Qa(e),
      n = Ka(t);
  return { score: t, comment: za.replace(/\$/g, "".concat(n)) };
}
function Qa(e) {
  if (cn()) return 0.4;
  if (oe()) return nt() && !(Ze() && De()) ? 0.5 : 0.3;
  var t = "value" in e.platform ? e.platform.value : "";
  return /^Win/.test(t) ? 0.6 : /^Mac/.test(t) ? 0.5 : 0.7;
}
function Ka(e) {
  return rn(0.99 + 0.01 * e, 1e-4);
}
function qa(e) {
  for (var t = "", n = 0, o = Object.keys(e).sort(); n < o.length; n++) {
      var r = o[n],
          a = e[r],
          c = "error" in a ? "error" : JSON.stringify(a.value);
      t += ""
          .concat(t ? "|" : "")
          .concat(r.replace(/([:|\\])/g, "\\$1"), ":")
          .concat(c);
  }
  return t;
}
function gn(e) {
  return JSON.stringify(
      e,
      function (t, n) {
          return n instanceof Error ? cr(n) : n;
      },
      2
  );
}
function bn(e) {
  return sr(qa(e));
}
function ei(e) {
  var t,
      n = Ja(e);
  return {
      get visitorId() {
          return t === void 0 && (t = bn(this.components)), t;
      },
      set visitorId(o) {
          t = o;
      },
      confidence: n,
      components: e,
      version: nn,
  };
}
function ti(e) {
  return e === void 0 && (e = 50), Ko(e, e * 2);
}
function ni(e, t) {
  var n = Date.now();
  return {
      get: function (o) {
          return E(this, void 0, void 0, function () {
              var r, a, c;
              return W(this, function (i) {
                  switch (i.label) {
                      case 0:
                          return (r = Date.now()), [4, e()];
                      case 1:
                          return (
                              (a = i.sent()),
                              (c = ei(a)),
                              (t || (o != null && o.debug)) &&
                                  console.log(
                                      "Copy the text below to get the debug data:\n\n```\nversion: "
                                          .concat(
                                              c.version,
                                              `
userAgent: `
                                          )
                                          .concat(
                                              navigator.userAgent,
                                              `
timeBetweenLoadAndGet: `
                                          )
                                          .concat(
                                              r - n,
                                              `
visitorId: `
                                          )
                                          .concat(
                                              c.visitorId,
                                              `
components: `
                                          )
                                          .concat(gn(a), "\n```")
                                  ),
                              [2, c]
                          );
                  }
              });
          });
      },
  };
}
function oi() {
  if (!(window.__fpjs_d_m || Math.random() >= 0.001))
      try {
          var e = new XMLHttpRequest();
          e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(nn, "/npm-monitoring"), !0), e.send();
      } catch (t) {
          console.error(t);
      }
}
function ri(e) {
  var t;
  return (
      e === void 0 && (e = {}),
      E(this, void 0, void 0, function () {
          var n, o, r;
          return W(this, function (a) {
              switch (a.label) {
                  case 0:
                      return (!((t = e.monitoring) !== null && t !== void 0) || t) && oi(), (n = e.delayFallback), (o = e.debug), [4, ti(n)];
                  case 1:
                      return a.sent(), (r = Ua({ cache: {}, debug: o })), [2, ni(r, o)];
              }
          });
      })
  );
}
var ai = { load: ri, hashComponents: bn, componentsToDebugString: gn };
const ii = { class: "bs-content" },
  si = { class: "bs-content-image" },
  ci = ["src"],
  li = ["innerHTML"],
  ui = { class: "upgrade-buy-stats" },
  di = ["innerHTML"],
  fi = { class: "upgrade-buy-stats-info" },
  mi = ["innerHTML"],
  pi = { class: "upgrade-buy-stats-info" },
  vi = ["innerHTML"],
  hi = O({
      __name: "LevelUp",
      setup(e) {
          const { $event: t } = b();
          fe();
          const n = qe();
          Q();
          function o() {
              t("bs:close");
          }
          return (r, a) => (
              k(),
              A("div", ii, [
                  f("div", si, [f("img", { class: "is-coin-star", src: "IMAGE_COIN_STAR" in r ? r.IMAGE_COIN_STAR : v(Fn) }, null, 8, ci)]),
                  f("div", { class: "bs-content-title", innerHTML: r.$t("messages.level_up_success") }, null, 8, li),
                  f("ul", ui, [
                      f("li", null, [f("p", { innerHTML: r.$t("boost.boost_multitap") }, null, 8, di), f("div", fi, "+" + te(v(n).levelUpEarnPerTap ?? 1), 1)]),
                      f("li", null, [f("p", { innerHTML: r.$t("boost.boost_energy_limit") }, null, 8, mi), f("div", pi, "+" + te(v(n).levelUpMaxTaps ?? 500), 1)]),
                  ]),
                  f("button", { class: "bottom-sheet-button button button-primary button-large", onClick: o }, [f("span", { innerHTML: r.$t("buttons.close") }, null, 8, vi)]),
              ])
          );
      },
  }),
  gi = { class: "bs-passive" },
  bi = { class: "bs-passive-inner" },
  _i = { class: "bs-passive-exchange" },
  yi = ["innerHTML"],
  wi = ["disabled"],
  Si = ["innerHTML"],
  Li = O({
      __name: "PassiveIncomeOffline",
      setup(e) {
          const { $event: t } = b(),
              n = fe();
          Q();
          const o = He(),
              r = G(!1);
          function a() {
              var c;
              if (!r.value) {
                  X().useHapticFeedback("heavy"), (r.value = !0), t("bs:close");
                  const i = ((c = document.querySelector(".user-balance-image")) == null ? void 0 : c.getBoundingClientRect()) ?? null;
                  let s;
                  const l = Math.min(150, Math.floor(n.lastPassiveEarn ?? 50));
                  i
                      ? (s = {
                            x_start_from: -20,
                            x_start_to: window.innerWidth + 20,
                            y_start_from: -20,
                            y_start_to: 0,
                            x_end_from: i.x - 40,
                            x_end_to: i.x + i.width - 40,
                            y_end_from: window.innerHeight - i.y - i.height / 2,
                            y_end_to: window.innerHeight - i.y - i.height / 2,
                            count: l,
                            delay: 5,
                            timeout_fly: 2e3,
                            direction_y: "from_bottom",
                            random_end_x: !0,
                        })
                      : (s = {
                            x_start_from: -20,
                            x_start_to: window.innerWidth + 20,
                            y_start_from: -20,
                            y_start_to: 0,
                            x_end_from: -20,
                            x_end_to: window.innerWidth + 20,
                            y_end_from: window.innerHeight - 64,
                            y_end_to: window.innerHeight,
                            count: l,
                            delay: 5,
                            timeout_fly: 2e3,
                            direction_y: "from_bottom",
                            random_end_x: !1,
                        }),
                      t("coins-animate", s),
                      o.settings.coins_animation && t("balance-animate:start"),
                      setTimeout(() => {
                          r.value = !1;
                      }, 400);
              }
          }
          return (c, i) => {
              var u, m;
              const s = Kt,
                  l = qt,
                  d = be;
              return (
                  k(),
                  A("div", gi, [
                      f("div", bi, [
                          f("div", _i, [L(s, { name: (u = v(n).currentExchange) == null ? void 0 : u.id }, null, 8, ["name"])]),
                          L(l, { price: v(n).lastPassiveEarn, size: "xx-large" }, null, 8, ["price"]),
                          f("p", { innerHTML: c.$t("exchange.work_for_you") }, null, 8, yi),
                      ]),
                      f(
                          "button",
                          { class: "bottom-sheet-button button button-primary button-large", onClick: a, disabled: v(r) },
                          [f("span", { innerHTML: c.$t("exchange.thank_you", { name: ((m = v(n).currentExchange) == null ? void 0 : m.name) ?? "unknown" }) }, null, 8, Si), L(d, { class: "icon-heart", name: "heart" })],
                          8,
                          wi
                      ),
                  ])
              );
          };
      },
  }),
  ki = { class: "bs-content" },
  xi = f("div", { class: "bs-content-image is-w100" }, [f("img", { src: Jn })], -1),
  Ci = ["innerHTML"],
  Mi = ["innerHTML"],
  Ti = ["innerHTML"],
  Ai = O({
      __name: "JoinBot",
      setup(e) {
          const { $event: t } = b();
          fe(), Q(), qe(), Qe();
          function n() {
              setTimeout(() => {
                  var o;
                  Q().trackEvent(de.REFERRAL_CLICK_DIALOG_JOIN_BOT), (o = window == null ? void 0 : window.Telegram) == null || o.WebApp.openTelegramLink(b().$config.public.botUrl);
              }, 400),
                  t("bs:close");
          }
          return (o, r) => (
              k(),
              A("div", ki, [
                  xi,
                  f("div", { class: "bs-content-title has-top-gap", innerHTML: o.$t("messages.join_bot_title") }, null, 8, Ci),
                  f("div", { class: "bs-content-target no-gap", innerHTML: o.$t("messages.join_bot_description", { bot_name: v(Qt).GAME_NAME }) }, null, 8, Mi),
                  f("button", { class: "bottom-sheet-button button button-primary button-large", onClick: n }, [f("span", { innerHTML: o.$t("messages.join_bot_button") }, null, 8, Ti)]),
              ])
          );
      },
  }),
  Ii = { class: "bs-content" },
  Ei = f("div", { class: "bs-content-image is-daily-combo-info" }, [f("div", { class: "bs-content-image-round-bg is-violet" }), f("img", { src: en })], -1),
  Wi = ["innerHTML"],
  Fi = { class: "upgrade-buy-info" },
  Pi = ["disabled"],
  Vi = ["innerHTML"],
  $i = O({
      __name: "DailyComboClaim",
      setup(e) {
          const { $event: t } = b(),
              n = G(!1),
              o = Ke(),
              r = fe(),
              a = He();
          function c() {
              t("bs:close");
          }
          let i;
          const s = async () => {
                  o.getDailyComboNotClaimed &&
                      (n.value ||
                          ((n.value = !0),
                          (i = he.promise({ title: b().$i18n.t("messages.recharging_energy") })),
                          await o
                              .postClaimDailyCombo()
                              .then((d) => {
                                  c(), Q().trackEvent(de.DAILY_COMBO_CLAIMED), i == null || i.resolve({ title: b().$i18n.t("messages.claim_success"), duration: 3e3 }), l();
                              })
                              .catch((d) => {
                                  i == null || i.reject(b().$i18n.t("messages.unable_to_claim"));
                              })
                              .finally(() => {
                                  setTimeout(() => {
                                      n.value = !1;
                                  }, 400);
                              })));
              },
              l = () => {
                  var p, _;
                  const d = ((p = document.querySelector(".user-balance-image")) == null ? void 0 : p.getBoundingClientRect()) ?? null;
                  let u;
                  const m = Math.min(150, Math.floor(((_ = o.dailyCombo) == null ? void 0 : _.bonusCoins) ?? 1e4));
                  d
                      ? (u = {
                            x_start_from: -20,
                            x_start_to: window.innerWidth + 20,
                            y_start_from: -20,
                            y_start_to: 0,
                            x_end_from: d.x - 40,
                            x_end_to: d.x + d.width - 40,
                            y_end_from: window.innerHeight - d.y - d.height / 2,
                            y_end_to: window.innerHeight - d.y - d.height / 2,
                            count: m,
                            delay: 5,
                            timeout_fly: 2e3,
                            direction_y: "from_bottom",
                            random_end_x: !0,
                        })
                      : (u = {
                            x_start_from: -20,
                            x_start_to: window.innerWidth + 20,
                            y_start_from: -20,
                            y_start_to: 0,
                            x_end_from: -20,
                            x_end_to: window.innerWidth + 20,
                            y_end_from: window.innerHeight - 64,
                            y_end_to: window.innerHeight,
                            count: m,
                            delay: 5,
                            timeout_fly: 2e3,
                            direction_y: "from_bottom",
                            random_end_x: !1,
                        }),
                      t("coins-animate", u),
                      a.settings.coins_animation && t("balance-animate:start");
              };
          return (d, u) => {
              var h;
              const m = qt,
                  p = be,
                  _ = zn;
              return (
                  k(),
                  A("div", Ii, [
                      Ei,
                      f("div", { class: "bs-content-subtitle", innerHTML: d.$t("daily_combo.claim_title") }, null, 8, Wi),
                      f("div", Fi, [L(m, { price: ((h = v(o).dailyCombo) == null ? void 0 : h.bonusCoins) ?? 1e4, size: "large", round: !1 }, null, 8, ["price"])]),
                      f(
                          "button",
                          { class: "bottom-sheet-button button button-primary button-large pulse", onClick: s, disabled: v(n) || v(r).stop },
                          [v(n) ? (k(), ne(_, { key: 1 })) : (k(), A(ge, { key: 0 }, [f("span", { innerHTML: d.$t("daily_combo.claim_button") }, null, 8, Vi), L(p, { class: "icon-heart", name: "heart" })], 64))],
                          8,
                          Pi
                      ),
                  ])
              );
          };
      },
  }),
  Ri = { class: "page" },
  Ni = 7,
  Yi = O({
      __name: "default",
      setup(e) {
          const { locales: t, setLocale: n } = Pn(),
              o = Vn();
          $n({ title: `${Qt.GAME_NAME}` });
          const { $stopListen: r, $listen: a, $event: c } = b(),
              i = Qe(),
              s = Je(),
              l = fe(),
              d = Rn(),
              u = Ke(),
              m = qe(),
              p = X(),
              _ = Un(),
              h = He(),
              g = Nn(),
              y = G(!1),
              x = G(0);
          let C = !1,
              M = !1,
              F,
              Y,
              D = null;
          const w = $e(() => t.value.map((I) => I.code)),
              _e = {
                  ...Hn,
                  "--nv-min-width": "calc(100vw - 32px)",
                  "--nv-global-bg": "rgba(39, 42, 47, 0.9)",
                  "--nv-global-border": "rgba(39, 42, 47, 0.9)",
                  "--nv-radius": "16px",
                  "--nv-tip-width": "0",
                  "--nv-icon-size": "18px",
                  "--nv-spacing": "6px",
                  "--nv-title-size": "14px",
                  "--nv-message-size": "12px",
                  "--nv-global-fg": "#fff",
                  "--nv-success-accent": "#82F88E",
              };
          Ge(async () => {
              var R, N, V, we, Se, Le, ke, xe, Ce, Me, Te, ve, at, it, st, ct, lt, ut, dt, ft, mt, pt, vt, ht, gt, bt, _t, yt, wt, St, Lt, kt, xt, Ct, Mt, Tt, At, It, Et, Wt, Ft;
              D = Gn(() => {
                  p.setProgressLoading(p.progress_loading + 0.5), (p.progress_loading >= 100 || M) && (D && clearInterval(D), (D = null));
              }, 500);
              const I = Pt("initData");
              if (
                  ((s.token = localStorage.getItem(Ie.AUTH_TOKEN) ?? null),
                  setTimeout(() => {
                      var K, z, Z, Ae;
                      (s.telegram_platform = (z = (K = window == null ? void 0 : window.Telegram) == null ? void 0 : K.WebApp) == null ? void 0 : z.platform),
                          (s.telegram_version = (Ae = (Z = window == null ? void 0 : window.Telegram) == null ? void 0 : Z.WebApp) == null ? void 0 : Ae.version);
                  }, 500),
                  (N = (R = window == null ? void 0 : window.Telegram) == null ? void 0 : R.WebApp) != null && N.initData)
              ) {
                  (g.query.tgWebAppStartParam || ((Se = (we = (V = window == null ? void 0 : window.Telegram) == null ? void 0 : V.WebApp) == null ? void 0 : we.initDataUnsafe) != null && Se.start_param)) &&
                      (s.setStartParam(
                          s.parseParameters(
                              ((xe = (ke = (Le = window == null ? void 0 : window.Telegram) == null ? void 0 : Le.WebApp) == null ? void 0 : ke.initDataUnsafe) == null ? void 0 : xe.start_param) ??
                                  ((Ce = g.query.tgWebAppStartParam) == null ? void 0 : Ce.toString()) ??
                                  ""
                          )
                      ),
                      (F = s.start_param.get("fb")),
                      F &&
                          setTimeout(() => {
                              _n(F);
                          }, 3e3),
                      (Y = s.start_param.get("kentId"))),
                      console.log(
                          `platform: ${(Te = (Me = window == null ? void 0 : window.Telegram) == null ? void 0 : Me.WebApp) == null ? void 0 : Te.platform}, version: ${
                              (at = (ve = window == null ? void 0 : window.Telegram) == null ? void 0 : ve.WebApp) == null ? void 0 : at.version
                          }`
                      ),
                      (s.telegram_platform = (st = (it = window == null ? void 0 : window.Telegram) == null ? void 0 : it.WebApp) == null ? void 0 : st.platform),
                      (s.telegram_version = (lt = (ct = window == null ? void 0 : window.Telegram) == null ? void 0 : ct.WebApp) == null ? void 0 : lt.version);
                  const K = ((mt = (ft = (dt = (ut = window == null ? void 0 : window.Telegram) == null ? void 0 : ut.WebApp) == null ? void 0 : dt.initDataUnsafe) == null ? void 0 : ft.user) == null ? void 0 : mt.language_code) ?? "en",
                      z = Pt("i18n_redirected");
                  !z.value && w.value.indexOf(K) > -1 && (o(K), n(K), Vt(i(ee.GAME_INDEX))),
                      z.value && w.value.indexOf(z.value) > -1 && (o(z.value), n(z.value), Vt(i(ee.GAME_INDEX))),
                      ["android", "android_x", "ios"].indexOf((vt = (pt = window == null ? void 0 : window.Telegram) == null ? void 0 : pt.WebApp) == null ? void 0 : vt.platform) >= 0 || b().$config.public.appEnv !== "production"
                          ? ((gt = (ht = window == null ? void 0 : window.Telegram) == null ? void 0 : ht.WebApp) == null || gt.expand(),
                            (_t = (bt = window == null ? void 0 : window.Telegram) == null ? void 0 : bt.WebApp) == null || _t.setBackgroundColor("#000000"),
                            (Lt = (yt = window == null ? void 0 : window.Telegram) == null ? void 0 : yt.WebApp) == null ||
                                Lt.setHeaderColor((St = (wt = window == null ? void 0 : window.Telegram) == null ? void 0 : wt.WebApp) != null && St.isVersionAtLeast("6.9") ? "#000000" : "bg_color"),
                            (x.value = ((Mt = (Ct = (xt = (kt = window == null ? void 0 : window.Telegram) == null ? void 0 : kt.WebApp) == null ? void 0 : xt.initDataUnsafe) == null ? void 0 : Ct.user) == null ? void 0 : Mt.id) ?? 0),
                            (At = (Tt = window == null ? void 0 : window.Telegram) == null ? void 0 : Tt.WebApp) == null || At.ready(),
                            I.value || (I.value = (Et = (It = window == null ? void 0 : window.Telegram) == null ? void 0 : It.WebApp) == null ? void 0 : Et.initData),
                            (C = !0))
                          : (C = !1);
              }
              if (C)
                  if ((await s.check(), s.authenticated)) await ie();
                  else {
                      const K = await ai.load(),
                          { visitorId: z, components: Z, version: Ae } = await K.get();
                      Z != null && Z.canvas && (Z.canvas = null),
                          Z != null && Z.webGlExtensions && (Z.webGlExtensions = null),
                          await s
                              .postLogin({
                                  initDataRaw: s.telegram_hash ? s.telegram_hash : (Ft = (Wt = window == null ? void 0 : window.Telegram) == null ? void 0 : Wt.WebApp) == null ? void 0 : Ft.initData,
                                  fingerprint: { version: Ae, visitorId: z, components: { ...Z, canvas: null, webGlExtensions: null } },
                              })
                              .then(async (yn) => {
                                  re(1), Y && ((s.opened_by_miniapp = !0), await me(Number(Y)).catch((Hi) => {})), await ie();
                              })
                              .catch((yn) => {
                                  he.error({ title: b().$i18n.t("messages.request_error"), message: b().$i18n.t("messages.no_login"), duration: 2e4 }), (M = !0);
                              });
                  }
              setTimeout(() => {
                  s.setError(M), s.setTelegram(C), s.setLoading(M), C && !M && (l.startTimers(), h.loadSettings()), l.lastPassiveEarn && l.lastPassiveEarn > 1 && c("passive-income:success");
              }, 150);
          });
          const ie = async () => {
              M ||
                  (await s
                      .postGetMe()
                      .then(async (I) => {
                          re(2);
                          const R = I.telegramUser.id;
                          if (x.value !== 0 && Number.isFinite(R) && Number(x.value) !== Number(R))
                              await s.postWebappConflict({ userId1: Number(R), userId2: Number(x.value) }).finally(() => {
                                  s.logout(),
                                      setTimeout(() => {
                                          var N, V;
                                          (V = (N = window == null ? void 0 : window.Telegram) == null ? void 0 : N.WebApp) == null || V.close();
                                      }, 200);
                              });
                          else {
                              await m.postConfig().catch((V) => {
                                  he.error({ title: b().$i18n.t("messages.request_error"), message: b().$i18n.t("messages.no_config"), duration: 2e4 }), (M = !0);
                              }),
                                  re(3);
                              const N = l.storageSyncTapsGet();
                              N &&
                                  (await l.postTap(N, !0).finally(() => {
                                      localStorage.removeItem(Ie.SYNC_AVAILABLE_TAPS), localStorage.removeItem(Ie.SYNC_TIMESTAMP_TAPS), localStorage.removeItem(Ie.SYNC_TAPS);
                                  }),
                                  re(4)),
                                  l.setFirstTimeLoad(!0),
                                  await l.postSync().catch((V) => {
                                      he.error({ title: b().$i18n.t("messages.request_error"), message: b().$i18n.t("messages.no_sync"), duration: 2e4 }), (M = !0);
                                  }),
                                  await u.postUpgradesForBuy().catch((V) => {
                                      M = !0;
                                  }),
                                  re(5),
                                  await d.postBoostsForBuy().catch((V) => {
                                      M = !0;
                                  }),
                                  re(6),
                                  await _.postListTasks().catch((V) => {
                                      M = !0;
                                  }),
                                  re(7),
                                  l.setFirstTimeLoad(!1);
                          }
                      })
                      .catch((I) => {
                          he.error({ title: b().$i18n.t("messages.request_error"), message: b().$i18n.t("messages.no_auth"), duration: 2e4 }), (M = !0);
                      }));
          };
          async function me(I, R = 1, N = 5) {
              try {
                  await s.postAddReferral(I).then(() => {
                      Q().trackEvent(de.REFERRAL_ADDED);
                  });
              } catch (V) {
                  if (V.statusCode >= 500) R < N ? await me(I, R + 1, N) : (M = !0);
                  else return;
              }
          }
          a("level-up:success", () => ot()),
              a("passive-income:success", () => pe()),
              a("join-bot:success", () => ye()),
              a("daily-combo:claim", () => rt()),
              Jt(() => {
                  r("level-up:success", ot), r("passive-income:success", pe), r("join-bot:success", ye), r("daily-combo:claim", rt);
              }),
              Dn(
                  () => g.path,
                  () => {
                      y.value = g.path !== i(ee.GAME_INDEX);
                  }
              );
          function pe() {
              c("bs:close"),
                  setTimeout(() => {
                      l.setStop(!1),
                          c("bs:open", {
                              component: Ee(Li),
                              onCloseDialog: () => {
                                  l.addBalance(l.lastPassiveEarn ?? 0);
                              },
                          });
                  }, 400);
          }
          function ye() {
              c("bs:close"),
                  setTimeout(() => {
                      Q().trackEvent(de.REFERRAL_SHOW_DIALOG_JOIN_BOT), c("bs:open", { component: Ee(Ai) });
                  }, 400);
          }
          function ot() {
              c("bs:close"),
                  setTimeout(() => {
                      var I;
                      (I = p.notificationLevelUp) == null || I.resolve({ title: b().$i18n.t("messages.level_up_success"), duration: 3e3 }),
                          (p.notificationLevelUp = null),
                          l.setStop(!1),
                          setTimeout(() => {
                              c("bs:open", { component: Ee(hi) });
                          }, 400);
                  }, 400);
          }
          const rt = () => {
                  c("bs:open", { component: Ee($i) });
              },
              re = (I) => {
                  const R = Math.floor((I / Ni) * 100);
                  R > p.progress_loading && !M && p.setProgressLoading(R);
              },
              _n = (I) => {
                  b().$fb.setPixelId(I), b().$fb.enable();
              };
          return (I, R) => {
              const N = fo,
                  V = bo,
                  we = Zn,
                  Se = Wo,
                  Le = Vo,
                  ke = Ho,
                  xe = Qo,
                  Ce = Yn,
                  Me = jn,
                  Te = Bn;
              return (
                  k(),
                  A("div", Ri, [
                      v(s).loading
                          ? (k(), ne(N, { key: 0 }))
                          : (k(),
                            A(
                                ge,
                                { key: 1 },
                                [
                                    v(s).is_telegram
                                        ? (k(), A(ge, { key: 1 }, [L(v(On), { visible: v(y), onClick: v(p).goBackButton }, null, 8, ["visible", "onClick"]), L(we), v(l).exchangeId ? (k(), ne(Se, { key: 0 })) : ue("", !0), L(Le)], 64))
                                        : (k(), ne(V, { key: 0 })),
                                ],
                                64
                            )),
                      L(ke),
                      v(u).dailyCombo && v(u).dailyComboSuccess ? (k(), ne(xe, { key: 2 })) : ue("", !0),
                      L(Te, null, { default: U((ve) => [L(Me, { item: ve }, { default: U(() => [L(Ce, { item: ve, theme: _e }, null, 8, ["item"])]), _: 2 }, 1032, ["item"])]), _: 1 }),
                  ])
              );
          };
      },
  });
export { Yi as default };
