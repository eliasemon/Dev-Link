var Yx = Object.defineProperty;
var Xx = (e, t, n) =>
  t in e
    ? Yx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var ah = (e, t, n) => Xx(e, typeof t != 'symbol' ? t + '' : t, n);
function Qx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Av(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ov = { exports: {} },
  za = {},
  Dv = { exports: {} },
  ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Es = Symbol.for('react.element'),
  qx = Symbol.for('react.portal'),
  Jx = Symbol.for('react.fragment'),
  ew = Symbol.for('react.strict_mode'),
  tw = Symbol.for('react.profiler'),
  nw = Symbol.for('react.provider'),
  rw = Symbol.for('react.context'),
  ow = Symbol.for('react.forward_ref'),
  iw = Symbol.for('react.suspense'),
  sw = Symbol.for('react.memo'),
  lw = Symbol.for('react.lazy'),
  uh = Symbol.iterator;
function aw(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (uh && e[uh]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Iv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Lv = Object.assign,
  Fv = {};
function Yo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fv),
    (this.updater = n || Iv);
}
Yo.prototype.isReactComponent = {};
Yo.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Yo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Vv() {}
Vv.prototype = Yo.prototype;
function yf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fv),
    (this.updater = n || Iv);
}
var xf = (yf.prototype = new Vv());
xf.constructor = yf;
Lv(xf, Yo.prototype);
xf.isPureReactComponent = !0;
var ch = Array.isArray,
  zv = Object.prototype.hasOwnProperty,
  wf = { current: null },
  $v = { key: !0, ref: !0, __self: !0, __source: !0 };
function Uv(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      zv.call(t, r) && !$v.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Es,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: wf.current,
  };
}
function uw(e, t) {
  return {
    $$typeof: Es,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Sf(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Es;
}
function cw(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var dh = /\/+/g;
function Pu(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? cw('' + e.key)
    : t.toString(36);
}
function El(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Es:
          case qx:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + Pu(s, 0) : r),
      ch(o)
        ? ((n = ''),
          e != null && (n = e.replace(dh, '$&/') + '/'),
          El(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (Sf(o) &&
            (o = uw(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ''
                  : ('' + o.key).replace(dh, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), ch(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Pu(i, l);
      s += El(i, t, n, a, o);
    }
  else if (((a = aw(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Pu(i, l++)), (s += El(i, t, n, a, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return s;
}
function Ks(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    El(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function dw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pt = { current: null },
  bl = { transition: null },
  fw = {
    ReactCurrentDispatcher: pt,
    ReactCurrentBatchConfig: bl,
    ReactCurrentOwner: wf,
  };
function Bv() {
  throw Error('act(...) is not supported in production builds of React.');
}
ue.Children = {
  map: Ks,
  forEach: function (e, t, n) {
    Ks(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ks(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ks(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Sf(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
ue.Component = Yo;
ue.Fragment = Jx;
ue.Profiler = tw;
ue.PureComponent = yf;
ue.StrictMode = ew;
ue.Suspense = iw;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fw;
ue.act = Bv;
ue.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = Lv({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = wf.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      zv.call(t, a) &&
        !$v.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Es, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ue.createContext = function (e) {
  return (
    (e = {
      $$typeof: rw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: nw, _context: e }),
    (e.Consumer = e)
  );
};
ue.createElement = Uv;
ue.createFactory = function (e) {
  var t = Uv.bind(null, e);
  return (t.type = e), t;
};
ue.createRef = function () {
  return { current: null };
};
ue.forwardRef = function (e) {
  return { $$typeof: ow, render: e };
};
ue.isValidElement = Sf;
ue.lazy = function (e) {
  return { $$typeof: lw, _payload: { _status: -1, _result: e }, _init: dw };
};
ue.memo = function (e, t) {
  return { $$typeof: sw, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function (e) {
  var t = bl.transition;
  bl.transition = {};
  try {
    e();
  } finally {
    bl.transition = t;
  }
};
ue.unstable_act = Bv;
ue.useCallback = function (e, t) {
  return pt.current.useCallback(e, t);
};
ue.useContext = function (e) {
  return pt.current.useContext(e);
};
ue.useDebugValue = function () {};
ue.useDeferredValue = function (e) {
  return pt.current.useDeferredValue(e);
};
ue.useEffect = function (e, t) {
  return pt.current.useEffect(e, t);
};
ue.useId = function () {
  return pt.current.useId();
};
ue.useImperativeHandle = function (e, t, n) {
  return pt.current.useImperativeHandle(e, t, n);
};
ue.useInsertionEffect = function (e, t) {
  return pt.current.useInsertionEffect(e, t);
};
ue.useLayoutEffect = function (e, t) {
  return pt.current.useLayoutEffect(e, t);
};
ue.useMemo = function (e, t) {
  return pt.current.useMemo(e, t);
};
ue.useReducer = function (e, t, n) {
  return pt.current.useReducer(e, t, n);
};
ue.useRef = function (e) {
  return pt.current.useRef(e);
};
ue.useState = function (e) {
  return pt.current.useState(e);
};
ue.useSyncExternalStore = function (e, t, n) {
  return pt.current.useSyncExternalStore(e, t, n);
};
ue.useTransition = function () {
  return pt.current.useTransition();
};
ue.version = '18.3.1';
Dv.exports = ue;
var d = Dv.exports;
const I = Av(d),
  Wv = Qx({ __proto__: null, default: I }, [d]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pw = d,
  hw = Symbol.for('react.element'),
  mw = Symbol.for('react.fragment'),
  vw = Object.prototype.hasOwnProperty,
  gw = pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hv(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) vw.call(t, r) && !yw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: hw,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: gw.current,
  };
}
za.Fragment = mw;
za.jsx = Hv;
za.jsxs = Hv;
Ov.exports = za;
var p = Ov.exports,
  Kv = { exports: {} },
  Mt = {},
  Gv = { exports: {} },
  Zv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, L) {
    var K = M.length;
    M.push(L);
    e: for (; 0 < K; ) {
      var J = (K - 1) >>> 1,
        ee = M[J];
      if (0 < o(ee, L)) (M[J] = L), (M[K] = ee), (K = J);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var L = M[0],
      K = M.pop();
    if (K !== L) {
      M[0] = K;
      e: for (var J = 0, ee = M.length, me = ee >>> 1; J < me; ) {
        var pe = 2 * (J + 1) - 1,
          je = M[pe],
          ce = pe + 1,
          q = M[ce];
        if (0 > o(je, K))
          ce < ee && 0 > o(q, je)
            ? ((M[J] = q), (M[ce] = K), (J = ce))
            : ((M[J] = je), (M[pe] = K), (J = pe));
        else if (ce < ee && 0 > o(q, K)) (M[J] = q), (M[ce] = K), (J = ce);
        else break e;
      }
    }
    return L;
  }
  function o(M, L) {
    var K = M.sortIndex - L.sortIndex;
    return K !== 0 ? K : M.id - L.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    m = 3,
    y = !1,
    S = !1,
    v = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    g = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(M) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= M)
        r(u), (L.sortIndex = L.expirationTime), t(a, L);
      else break;
      L = n(u);
    }
  }
  function E(M) {
    if (((v = !1), x(M), !S))
      if (n(a) !== null) (S = !0), H(C);
      else {
        var L = n(u);
        L !== null && W(E, L.startTime - M);
      }
  }
  function C(M, L) {
    (S = !1), v && ((v = !1), g(R), (R = -1)), (y = !0);
    var K = m;
    try {
      for (
        x(L), f = n(a);
        f !== null && (!(f.expirationTime > L) || (M && !F()));

      ) {
        var J = f.callback;
        if (typeof J == 'function') {
          (f.callback = null), (m = f.priorityLevel);
          var ee = J(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof ee == 'function' ? (f.callback = ee) : f === n(a) && r(a),
            x(L);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var me = !0;
      else {
        var pe = n(u);
        pe !== null && W(E, pe.startTime - L), (me = !1);
      }
      return me;
    } finally {
      (f = null), (m = K), (y = !1);
    }
  }
  var b = !1,
    N = null,
    R = -1,
    _ = 5,
    j = -1;
  function F() {
    return !(e.unstable_now() - j < _);
  }
  function A() {
    if (N !== null) {
      var M = e.unstable_now();
      j = M;
      var L = !0;
      try {
        L = N(!0, M);
      } finally {
        L ? D() : ((b = !1), (N = null));
      }
    } else b = !1;
  }
  var D;
  if (typeof h == 'function')
    D = function () {
      h(A);
    };
  else if (typeof MessageChannel < 'u') {
    var O = new MessageChannel(),
      Z = O.port2;
    (O.port1.onmessage = A),
      (D = function () {
        Z.postMessage(null);
      });
  } else
    D = function () {
      w(A, 0);
    };
  function H(M) {
    (N = M), b || ((b = !0), D());
  }
  function W(M, L) {
    R = w(function () {
      M(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || y || ((S = !0), H(C));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (_ = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (M) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var K = m;
      m = L;
      try {
        return M();
      } finally {
        m = K;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, L) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var K = m;
      m = M;
      try {
        return L();
      } finally {
        m = K;
      }
    }),
    (e.unstable_scheduleCallback = function (M, L, K) {
      var J = e.unstable_now();
      switch (
        (typeof K == 'object' && K !== null
          ? ((K = K.delay), (K = typeof K == 'number' && 0 < K ? J + K : J))
          : (K = J),
        M)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = K + ee),
        (M = {
          id: c++,
          callback: L,
          priorityLevel: M,
          startTime: K,
          expirationTime: ee,
          sortIndex: -1,
        }),
        K > J
          ? ((M.sortIndex = K),
            t(u, M),
            n(a) === null &&
              M === n(u) &&
              (v ? (g(R), (R = -1)) : (v = !0), W(E, K - J)))
          : ((M.sortIndex = ee), t(a, M), S || y || ((S = !0), H(C))),
        M
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (M) {
      var L = m;
      return function () {
        var K = m;
        m = L;
        try {
          return M.apply(this, arguments);
        } finally {
          m = K;
        }
      };
    });
})(Zv);
Gv.exports = Zv;
var xw = Gv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ww = d,
  _t = xw;
function V(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Yv = new Set(),
  Yi = {};
function Qr(e, t) {
  Io(e, t), Io(e + 'Capture', t);
}
function Io(e, t) {
  for (Yi[e] = t, e = 0; e < t.length; e++) Yv.add(t[e]);
}
var On = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  $c = Object.prototype.hasOwnProperty,
  Sw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fh = {},
  ph = {};
function Cw(e) {
  return $c.call(ph, e)
    ? !0
    : $c.call(fh, e)
      ? !1
      : Sw.test(e)
        ? (ph[e] = !0)
        : ((fh[e] = !0), !1);
}
function Ew(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function bw(e, t, n, r) {
  if (t === null || typeof t > 'u' || Ew(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ht(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var nt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    nt[e] = new ht(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  nt[t] = new ht(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  nt[e] = new ht(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  nt[e] = new ht(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    nt[e] = new ht(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  nt[e] = new ht(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  nt[e] = new ht(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  nt[e] = new ht(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  nt[e] = new ht(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cf = /[\-:]([a-z])/g;
function Ef(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Cf, Ef);
    nt[t] = new ht(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Cf, Ef);
    nt[t] = new ht(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Cf, Ef);
  nt[t] = new ht(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  nt[e] = new ht(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
nt.xlinkHref = new ht(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  nt[e] = new ht(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bf(e, t, n, r) {
  var o = nt.hasOwnProperty(t) ? nt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (bw(t, n, o, r) && (n = null),
    r || o === null
      ? Cw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zn = ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Gs = Symbol.for('react.element'),
  ao = Symbol.for('react.portal'),
  uo = Symbol.for('react.fragment'),
  Nf = Symbol.for('react.strict_mode'),
  Uc = Symbol.for('react.profiler'),
  Xv = Symbol.for('react.provider'),
  Qv = Symbol.for('react.context'),
  kf = Symbol.for('react.forward_ref'),
  Bc = Symbol.for('react.suspense'),
  Wc = Symbol.for('react.suspense_list'),
  Rf = Symbol.for('react.memo'),
  Zn = Symbol.for('react.lazy'),
  qv = Symbol.for('react.offscreen'),
  hh = Symbol.iterator;
function mi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (hh && e[hh]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var De = Object.assign,
  _u;
function Ri(e) {
  if (_u === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      _u = (t && t[1]) || '';
    }
  return (
    `
` +
    _u +
    e
  );
}
var Mu = !1;
function ju(e, t) {
  if (!e || Mu) return '';
  Mu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Mu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ri(e) : '';
}
function Nw(e) {
  switch (e.tag) {
    case 5:
      return Ri(e.type);
    case 16:
      return Ri('Lazy');
    case 13:
      return Ri('Suspense');
    case 19:
      return Ri('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = ju(e.type, !1)), e;
    case 11:
      return (e = ju(e.type.render, !1)), e;
    case 1:
      return (e = ju(e.type, !0)), e;
    default:
      return '';
  }
}
function Hc(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case uo:
      return 'Fragment';
    case ao:
      return 'Portal';
    case Uc:
      return 'Profiler';
    case Nf:
      return 'StrictMode';
    case Bc:
      return 'Suspense';
    case Wc:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Qv:
        return (e.displayName || 'Context') + '.Consumer';
      case Xv:
        return (e._context.displayName || 'Context') + '.Provider';
      case kf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Rf:
        return (
          (t = e.displayName || null), t !== null ? t : Hc(e.type) || 'Memo'
        );
      case Zn:
        (t = e._payload), (e = e._init);
        try {
          return Hc(e(t));
        } catch {}
    }
  return null;
}
function kw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Hc(t);
    case 8:
      return t === Nf ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function yr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Jv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Rw(e) {
  var t = Jv(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = '' + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Zs(e) {
  e._valueTracker || (e._valueTracker = Rw(e));
}
function e1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Jv(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Bl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Kc(e, t) {
  var n = t.checked;
  return De({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mh(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = yr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function t1(e, t) {
  (t = t.checked), t != null && bf(e, 'checked', t, !1);
}
function Gc(e, t) {
  t1(e, t);
  var n = yr(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Zc(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Zc(e, t.type, yr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function vh(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Zc(e, t, n) {
  (t !== 'number' || Bl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ti = Array.isArray;
function bo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + yr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return De({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function gh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(V(92));
      if (Ti(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: yr(n) };
}
function n1(e, t) {
  var n = yr(t.value),
    r = yr(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function yh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function r1(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Xc(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? r1(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Ys,
  o1 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Ys = Ys || document.createElement('div'),
          Ys.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ys.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Oi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tw = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Oi).forEach(function (e) {
  Tw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Oi[t] = Oi[e]);
  });
});
function i1(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Oi.hasOwnProperty(e) && Oi[e])
      ? ('' + t).trim()
      : t + 'px';
}
function s1(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = i1(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Pw = De(
  { menuitem: !0 },
  {
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
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Qc(e, t) {
  if (t) {
    if (Pw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(V(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(V(62));
  }
}
function qc(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Jc = null;
function Tf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ed = null,
  No = null,
  ko = null;
function xh(e) {
  if ((e = ks(e))) {
    if (typeof ed != 'function') throw Error(V(280));
    var t = e.stateNode;
    t && ((t = Ha(t)), ed(e.stateNode, e.type, t));
  }
}
function l1(e) {
  No ? (ko ? ko.push(e) : (ko = [e])) : (No = e);
}
function a1() {
  if (No) {
    var e = No,
      t = ko;
    if (((ko = No = null), xh(e), t)) for (e = 0; e < t.length; e++) xh(t[e]);
  }
}
function u1(e, t) {
  return e(t);
}
function c1() {}
var Au = !1;
function d1(e, t, n) {
  if (Au) return e(t, n);
  Au = !0;
  try {
    return u1(e, t, n);
  } finally {
    (Au = !1), (No !== null || ko !== null) && (c1(), a1());
  }
}
function Qi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ha(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(V(231, t, typeof n));
  return n;
}
var td = !1;
if (On)
  try {
    var vi = {};
    Object.defineProperty(vi, 'passive', {
      get: function () {
        td = !0;
      },
    }),
      window.addEventListener('test', vi, vi),
      window.removeEventListener('test', vi, vi);
  } catch {
    td = !1;
  }
function _w(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Di = !1,
  Wl = null,
  Hl = !1,
  nd = null,
  Mw = {
    onError: function (e) {
      (Di = !0), (Wl = e);
    },
  };
function jw(e, t, n, r, o, i, s, l, a) {
  (Di = !1), (Wl = null), _w.apply(Mw, arguments);
}
function Aw(e, t, n, r, o, i, s, l, a) {
  if ((jw.apply(this, arguments), Di)) {
    if (Di) {
      var u = Wl;
      (Di = !1), (Wl = null);
    } else throw Error(V(198));
    Hl || ((Hl = !0), (nd = u));
  }
}
function qr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function f1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function wh(e) {
  if (qr(e) !== e) throw Error(V(188));
}
function Ow(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qr(e)), t === null)) throw Error(V(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return wh(o), e;
        if (i === r) return wh(o), t;
        i = i.sibling;
      }
      throw Error(V(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(V(189));
      }
    }
    if (n.alternate !== r) throw Error(V(190));
  }
  if (n.tag !== 3) throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function p1(e) {
  return (e = Ow(e)), e !== null ? h1(e) : null;
}
function h1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = h1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var m1 = _t.unstable_scheduleCallback,
  Sh = _t.unstable_cancelCallback,
  Dw = _t.unstable_shouldYield,
  Iw = _t.unstable_requestPaint,
  Le = _t.unstable_now,
  Lw = _t.unstable_getCurrentPriorityLevel,
  Pf = _t.unstable_ImmediatePriority,
  v1 = _t.unstable_UserBlockingPriority,
  Kl = _t.unstable_NormalPriority,
  Fw = _t.unstable_LowPriority,
  g1 = _t.unstable_IdlePriority,
  $a = null,
  yn = null;
function Vw(e) {
  if (yn && typeof yn.onCommitFiberRoot == 'function')
    try {
      yn.onCommitFiberRoot($a, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Jt = Math.clz32 ? Math.clz32 : Uw,
  zw = Math.log,
  $w = Math.LN2;
function Uw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((zw(e) / $w) | 0)) | 0;
}
var Xs = 64,
  Qs = 4194304;
function Pi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Gl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Pi(l)) : ((i &= s), i !== 0 && (r = Pi(i)));
  } else (s = n & ~o), s !== 0 ? (r = Pi(s)) : i !== 0 && (r = Pi(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Jt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Bw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ww(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Jt(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = Bw(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function rd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function y1() {
  var e = Xs;
  return (Xs <<= 1), !(Xs & 4194240) && (Xs = 64), e;
}
function Ou(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Jt(t)),
    (e[t] = n);
}
function Hw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Jt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function _f(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Jt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var we = 0;
function x1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var w1,
  Mf,
  S1,
  C1,
  E1,
  od = !1,
  qs = [],
  ar = null,
  ur = null,
  cr = null,
  qi = new Map(),
  Ji = new Map(),
  Qn = [],
  Kw =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Ch(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ar = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ur = null;
      break;
    case 'mouseover':
    case 'mouseout':
      cr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      qi.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ji.delete(t.pointerId);
  }
}
function gi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ks(t)), t !== null && Mf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Gw(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (ar = gi(ar, e, t, n, r, o)), !0;
    case 'dragenter':
      return (ur = gi(ur, e, t, n, r, o)), !0;
    case 'mouseover':
      return (cr = gi(cr, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return qi.set(i, gi(qi.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Ji.set(i, gi(Ji.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function b1(e) {
  var t = Ir(e.target);
  if (t !== null) {
    var n = qr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = f1(n)), t !== null)) {
          (e.blockedOn = t),
            E1(e.priority, function () {
              S1(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Nl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = id(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Jc = r), n.target.dispatchEvent(r), (Jc = null);
    } else return (t = ks(n)), t !== null && Mf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Eh(e, t, n) {
  Nl(e) && n.delete(t);
}
function Zw() {
  (od = !1),
    ar !== null && Nl(ar) && (ar = null),
    ur !== null && Nl(ur) && (ur = null),
    cr !== null && Nl(cr) && (cr = null),
    qi.forEach(Eh),
    Ji.forEach(Eh);
}
function yi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    od ||
      ((od = !0),
      _t.unstable_scheduleCallback(_t.unstable_NormalPriority, Zw)));
}
function es(e) {
  function t(o) {
    return yi(o, e);
  }
  if (0 < qs.length) {
    yi(qs[0], e);
    for (var n = 1; n < qs.length; n++) {
      var r = qs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ar !== null && yi(ar, e),
      ur !== null && yi(ur, e),
      cr !== null && yi(cr, e),
      qi.forEach(t),
      Ji.forEach(t),
      n = 0;
    n < Qn.length;
    n++
  )
    (r = Qn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qn.length && ((n = Qn[0]), n.blockedOn === null); )
    b1(n), n.blockedOn === null && Qn.shift();
}
var Ro = zn.ReactCurrentBatchConfig,
  Zl = !0;
function Yw(e, t, n, r) {
  var o = we,
    i = Ro.transition;
  Ro.transition = null;
  try {
    (we = 1), jf(e, t, n, r);
  } finally {
    (we = o), (Ro.transition = i);
  }
}
function Xw(e, t, n, r) {
  var o = we,
    i = Ro.transition;
  Ro.transition = null;
  try {
    (we = 4), jf(e, t, n, r);
  } finally {
    (we = o), (Ro.transition = i);
  }
}
function jf(e, t, n, r) {
  if (Zl) {
    var o = id(e, t, n, r);
    if (o === null) Wu(e, t, r, Yl, n), Ch(e, r);
    else if (Gw(o, e, t, n, r)) r.stopPropagation();
    else if ((Ch(e, r), t & 4 && -1 < Kw.indexOf(e))) {
      for (; o !== null; ) {
        var i = ks(o);
        if (
          (i !== null && w1(i),
          (i = id(e, t, n, r)),
          i === null && Wu(e, t, r, Yl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Wu(e, t, r, null, n);
  }
}
var Yl = null;
function id(e, t, n, r) {
  if (((Yl = null), (e = Tf(r)), (e = Ir(e)), e !== null))
    if (((t = qr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = f1(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yl = e), null;
}
function N1(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Lw()) {
        case Pf:
          return 1;
        case v1:
          return 4;
        case Kl:
        case Fw:
          return 16;
        case g1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var er = null,
  Af = null,
  kl = null;
function k1() {
  if (kl) return kl;
  var e,
    t = Af,
    n = t.length,
    r,
    o = 'value' in er ? er.value : er.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (kl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Rl(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Js() {
  return !0;
}
function bh() {
  return !1;
}
function jt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Js
        : bh),
      (this.isPropagationStopped = bh),
      this
    );
  }
  return (
    De(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Js));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Js));
      },
      persist: function () {},
      isPersistent: Js,
    }),
    t
  );
}
var Xo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Of = jt(Xo),
  Ns = De({}, Xo, { view: 0, detail: 0 }),
  Qw = jt(Ns),
  Du,
  Iu,
  xi,
  Ua = De({}, Ns, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Df,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== xi &&
            (xi && e.type === 'mousemove'
              ? ((Du = e.screenX - xi.screenX), (Iu = e.screenY - xi.screenY))
              : (Iu = Du = 0),
            (xi = e)),
          Du);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Iu;
    },
  }),
  Nh = jt(Ua),
  qw = De({}, Ua, { dataTransfer: 0 }),
  Jw = jt(qw),
  e3 = De({}, Ns, { relatedTarget: 0 }),
  Lu = jt(e3),
  t3 = De({}, Xo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  n3 = jt(t3),
  r3 = De({}, Xo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  o3 = jt(r3),
  i3 = De({}, Xo, { data: 0 }),
  kh = jt(i3),
  s3 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  l3 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  a3 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function u3(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = a3[e]) ? !!t[e] : !1;
}
function Df() {
  return u3;
}
var c3 = De({}, Ns, {
    key: function (e) {
      if (e.key) {
        var t = s3[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Rl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? l3[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Df,
    charCode: function (e) {
      return e.type === 'keypress' ? Rl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Rl(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  d3 = jt(c3),
  f3 = De({}, Ua, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Rh = jt(f3),
  p3 = De({}, Ns, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Df,
  }),
  h3 = jt(p3),
  m3 = De({}, Xo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  v3 = jt(m3),
  g3 = De({}, Ua, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  y3 = jt(g3),
  x3 = [9, 13, 27, 32],
  If = On && 'CompositionEvent' in window,
  Ii = null;
On && 'documentMode' in document && (Ii = document.documentMode);
var w3 = On && 'TextEvent' in window && !Ii,
  R1 = On && (!If || (Ii && 8 < Ii && 11 >= Ii)),
  Th = ' ',
  Ph = !1;
function T1(e, t) {
  switch (e) {
    case 'keyup':
      return x3.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function P1(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var co = !1;
function S3(e, t) {
  switch (e) {
    case 'compositionend':
      return P1(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Ph = !0), Th);
    case 'textInput':
      return (e = t.data), e === Th && Ph ? null : e;
    default:
      return null;
  }
}
function C3(e, t) {
  if (co)
    return e === 'compositionend' || (!If && T1(e, t))
      ? ((e = k1()), (kl = Af = er = null), (co = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return R1 && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var E3 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _h(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!E3[e.type] : t === 'textarea';
}
function _1(e, t, n, r) {
  l1(r),
    (t = Xl(t, 'onChange')),
    0 < t.length &&
      ((n = new Of('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Li = null,
  ts = null;
function b3(e) {
  $1(e, 0);
}
function Ba(e) {
  var t = ho(e);
  if (e1(t)) return e;
}
function N3(e, t) {
  if (e === 'change') return t;
}
var M1 = !1;
if (On) {
  var Fu;
  if (On) {
    var Vu = 'oninput' in document;
    if (!Vu) {
      var Mh = document.createElement('div');
      Mh.setAttribute('oninput', 'return;'),
        (Vu = typeof Mh.oninput == 'function');
    }
    Fu = Vu;
  } else Fu = !1;
  M1 = Fu && (!document.documentMode || 9 < document.documentMode);
}
function jh() {
  Li && (Li.detachEvent('onpropertychange', j1), (ts = Li = null));
}
function j1(e) {
  if (e.propertyName === 'value' && Ba(ts)) {
    var t = [];
    _1(t, ts, e, Tf(e)), d1(b3, t);
  }
}
function k3(e, t, n) {
  e === 'focusin'
    ? (jh(), (Li = t), (ts = n), Li.attachEvent('onpropertychange', j1))
    : e === 'focusout' && jh();
}
function R3(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Ba(ts);
}
function T3(e, t) {
  if (e === 'click') return Ba(t);
}
function P3(e, t) {
  if (e === 'input' || e === 'change') return Ba(t);
}
function _3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rn = typeof Object.is == 'function' ? Object.is : _3;
function ns(e, t) {
  if (rn(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!$c.call(t, o) || !rn(e[o], t[o])) return !1;
  }
  return !0;
}
function Ah(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Oh(e, t) {
  var n = Ah(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ah(n);
  }
}
function A1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? A1(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function O1() {
  for (var e = window, t = Bl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Bl(e.document);
  }
  return t;
}
function Lf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function M3(e) {
  var t = O1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    A1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Lf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Oh(n, i));
        var s = Oh(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var j3 = On && 'documentMode' in document && 11 >= document.documentMode,
  fo = null,
  sd = null,
  Fi = null,
  ld = !1;
function Dh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ld ||
    fo == null ||
    fo !== Bl(r) ||
    ((r = fo),
    'selectionStart' in r && Lf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fi && ns(Fi, r)) ||
      ((Fi = r),
      (r = Xl(sd, 'onSelect')),
      0 < r.length &&
        ((t = new Of('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = fo))));
}
function el(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var po = {
    animationend: el('Animation', 'AnimationEnd'),
    animationiteration: el('Animation', 'AnimationIteration'),
    animationstart: el('Animation', 'AnimationStart'),
    transitionend: el('Transition', 'TransitionEnd'),
  },
  zu = {},
  D1 = {};
On &&
  ((D1 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete po.animationend.animation,
    delete po.animationiteration.animation,
    delete po.animationstart.animation),
  'TransitionEvent' in window || delete po.transitionend.transition);
function Wa(e) {
  if (zu[e]) return zu[e];
  if (!po[e]) return e;
  var t = po[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in D1) return (zu[e] = t[n]);
  return e;
}
var I1 = Wa('animationend'),
  L1 = Wa('animationiteration'),
  F1 = Wa('animationstart'),
  V1 = Wa('transitionend'),
  z1 = new Map(),
  Ih =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function Nr(e, t) {
  z1.set(e, t), Qr(t, [e]);
}
for (var $u = 0; $u < Ih.length; $u++) {
  var Uu = Ih[$u],
    A3 = Uu.toLowerCase(),
    O3 = Uu[0].toUpperCase() + Uu.slice(1);
  Nr(A3, 'on' + O3);
}
Nr(I1, 'onAnimationEnd');
Nr(L1, 'onAnimationIteration');
Nr(F1, 'onAnimationStart');
Nr('dblclick', 'onDoubleClick');
Nr('focusin', 'onFocus');
Nr('focusout', 'onBlur');
Nr(V1, 'onTransitionEnd');
Io('onMouseEnter', ['mouseout', 'mouseover']);
Io('onMouseLeave', ['mouseout', 'mouseover']);
Io('onPointerEnter', ['pointerout', 'pointerover']);
Io('onPointerLeave', ['pointerout', 'pointerover']);
Qr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
Qr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
Qr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Qr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
Qr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
Qr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var _i =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  D3 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(_i));
function Lh(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Aw(r, t, void 0, e), (e.currentTarget = null);
}
function $1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Lh(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Lh(o, l, u), (i = a);
        }
    }
  }
  if (Hl) throw ((e = nd), (Hl = !1), (nd = null), e);
}
function ke(e, t) {
  var n = t[fd];
  n === void 0 && (n = t[fd] = new Set());
  var r = e + '__bubble';
  n.has(r) || (U1(t, e, 2, !1), n.add(r));
}
function Bu(e, t, n) {
  var r = 0;
  t && (r |= 4), U1(n, e, r, t);
}
var tl = '_reactListening' + Math.random().toString(36).slice(2);
function rs(e) {
  if (!e[tl]) {
    (e[tl] = !0),
      Yv.forEach(function (n) {
        n !== 'selectionchange' && (D3.has(n) || Bu(n, !1, e), Bu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[tl] || ((t[tl] = !0), Bu('selectionchange', !1, t));
  }
}
function U1(e, t, n, r) {
  switch (N1(t)) {
    case 1:
      var o = Yw;
      break;
    case 4:
      o = Xw;
      break;
    default:
      o = jf;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !td ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Wu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Ir(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  d1(function () {
    var u = i,
      c = Tf(n),
      f = [];
    e: {
      var m = z1.get(e);
      if (m !== void 0) {
        var y = Of,
          S = e;
        switch (e) {
          case 'keypress':
            if (Rl(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            y = d3;
            break;
          case 'focusin':
            (S = 'focus'), (y = Lu);
            break;
          case 'focusout':
            (S = 'blur'), (y = Lu);
            break;
          case 'beforeblur':
          case 'afterblur':
            y = Lu;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = Nh;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = Jw;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = h3;
            break;
          case I1:
          case L1:
          case F1:
            y = n3;
            break;
          case V1:
            y = v3;
            break;
          case 'scroll':
            y = Qw;
            break;
          case 'wheel':
            y = y3;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            y = o3;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = Rh;
        }
        var v = (t & 4) !== 0,
          w = !v && e === 'scroll',
          g = v ? (m !== null ? m + 'Capture' : null) : m;
        v = [];
        for (var h = u, x; h !== null; ) {
          x = h;
          var E = x.stateNode;
          if (
            (x.tag === 5 &&
              E !== null &&
              ((x = E),
              g !== null && ((E = Qi(h, g)), E != null && v.push(os(h, E, x)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((m = new y(m, S, null, n, c)), f.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          m &&
            n !== Jc &&
            (S = n.relatedTarget || n.fromElement) &&
            (Ir(S) || S[Dn]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          y
            ? ((S = n.relatedTarget || n.toElement),
              (y = u),
              (S = S ? Ir(S) : null),
              S !== null &&
                ((w = qr(S)), S !== w || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((y = null), (S = u)),
          y !== S)
        ) {
          if (
            ((v = Nh),
            (E = 'onMouseLeave'),
            (g = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = Rh),
              (E = 'onPointerLeave'),
              (g = 'onPointerEnter'),
              (h = 'pointer')),
            (w = y == null ? m : ho(y)),
            (x = S == null ? m : ho(S)),
            (m = new v(E, h + 'leave', y, n, c)),
            (m.target = w),
            (m.relatedTarget = x),
            (E = null),
            Ir(c) === u &&
              ((v = new v(g, h + 'enter', S, n, c)),
              (v.target = x),
              (v.relatedTarget = w),
              (E = v)),
            (w = E),
            y && S)
          )
            t: {
              for (v = y, g = S, h = 0, x = v; x; x = no(x)) h++;
              for (x = 0, E = g; E; E = no(E)) x++;
              for (; 0 < h - x; ) (v = no(v)), h--;
              for (; 0 < x - h; ) (g = no(g)), x--;
              for (; h--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = no(v)), (g = no(g));
              }
              v = null;
            }
          else v = null;
          y !== null && Fh(f, m, y, v, !1),
            S !== null && w !== null && Fh(f, w, S, v, !0);
        }
      }
      e: {
        if (
          ((m = u ? ho(u) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && m.type === 'file'))
        )
          var C = N3;
        else if (_h(m))
          if (M1) C = P3;
          else {
            C = R3;
            var b = k3;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (C = T3);
        if (C && (C = C(e, u))) {
          _1(f, C, n, c);
          break e;
        }
        b && b(e, m, u),
          e === 'focusout' &&
            (b = m._wrapperState) &&
            b.controlled &&
            m.type === 'number' &&
            Zc(m, 'number', m.value);
      }
      switch (((b = u ? ho(u) : window), e)) {
        case 'focusin':
          (_h(b) || b.contentEditable === 'true') &&
            ((fo = b), (sd = u), (Fi = null));
          break;
        case 'focusout':
          Fi = sd = fo = null;
          break;
        case 'mousedown':
          ld = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ld = !1), Dh(f, n, c);
          break;
        case 'selectionchange':
          if (j3) break;
        case 'keydown':
        case 'keyup':
          Dh(f, n, c);
      }
      var N;
      if (If)
        e: {
          switch (e) {
            case 'compositionstart':
              var R = 'onCompositionStart';
              break e;
            case 'compositionend':
              R = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              R = 'onCompositionUpdate';
              break e;
          }
          R = void 0;
        }
      else
        co
          ? T1(e, n) && (R = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart');
      R &&
        (R1 &&
          n.locale !== 'ko' &&
          (co || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && co && (N = k1())
            : ((er = c),
              (Af = 'value' in er ? er.value : er.textContent),
              (co = !0))),
        (b = Xl(u, R)),
        0 < b.length &&
          ((R = new kh(R, e, null, n, c)),
          f.push({ event: R, listeners: b }),
          N ? (R.data = N) : ((N = P1(n)), N !== null && (R.data = N)))),
        (N = w3 ? S3(e, n) : C3(e, n)) &&
          ((u = Xl(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new kh('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = N)));
    }
    $1(f, t);
  });
}
function os(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Qi(e, n)),
      i != null && r.unshift(os(e, i, o)),
      (i = Qi(e, t)),
      i != null && r.push(os(e, i, o))),
      (e = e.return);
  }
  return r;
}
function no(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fh(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = Qi(n, i)), a != null && s.unshift(os(n, a, l)))
        : o || ((a = Qi(n, i)), a != null && s.push(os(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var I3 = /\r\n?/g,
  L3 = /\u0000|\uFFFD/g;
function Vh(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      I3,
      `
`,
    )
    .replace(L3, '');
}
function nl(e, t, n) {
  if (((t = Vh(t)), Vh(e) !== t && n)) throw Error(V(425));
}
function Ql() {}
var ad = null,
  ud = null;
function cd(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var dd = typeof setTimeout == 'function' ? setTimeout : void 0,
  F3 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  zh = typeof Promise == 'function' ? Promise : void 0,
  V3 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof zh < 'u'
        ? function (e) {
            return zh.resolve(null).then(e).catch(z3);
          }
        : dd;
function z3(e) {
  setTimeout(function () {
    throw e;
  });
}
function Hu(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), es(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  es(t);
}
function dr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function $h(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Qo = Math.random().toString(36).slice(2),
  pn = '__reactFiber$' + Qo,
  is = '__reactProps$' + Qo,
  Dn = '__reactContainer$' + Qo,
  fd = '__reactEvents$' + Qo,
  $3 = '__reactListeners$' + Qo,
  U3 = '__reactHandles$' + Qo;
function Ir(e) {
  var t = e[pn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Dn] || n[pn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $h(e); e !== null; ) {
          if ((n = e[pn])) return n;
          e = $h(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ks(e) {
  return (
    (e = e[pn] || e[Dn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ho(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function Ha(e) {
  return e[is] || null;
}
var pd = [],
  mo = -1;
function kr(e) {
  return { current: e };
}
function Re(e) {
  0 > mo || ((e.current = pd[mo]), (pd[mo] = null), mo--);
}
function Ee(e, t) {
  mo++, (pd[mo] = e.current), (e.current = t);
}
var xr = {},
  lt = kr(xr),
  yt = kr(!1),
  Ur = xr;
function Lo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function xt(e) {
  return (e = e.childContextTypes), e != null;
}
function ql() {
  Re(yt), Re(lt);
}
function Uh(e, t, n) {
  if (lt.current !== xr) throw Error(V(168));
  Ee(lt, t), Ee(yt, n);
}
function B1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(V(108, kw(e) || 'Unknown', o));
  return De({}, n, r);
}
function Jl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xr),
    (Ur = lt.current),
    Ee(lt, e),
    Ee(yt, yt.current),
    !0
  );
}
function Bh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n
    ? ((e = B1(e, t, Ur)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Re(yt),
      Re(lt),
      Ee(lt, e))
    : Re(yt),
    Ee(yt, n);
}
var Rn = null,
  Ka = !1,
  Ku = !1;
function W1(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e);
}
function B3(e) {
  (Ka = !0), W1(e);
}
function Rr() {
  if (!Ku && Rn !== null) {
    Ku = !0;
    var e = 0,
      t = we;
    try {
      var n = Rn;
      for (we = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Rn = null), (Ka = !1);
    } catch (o) {
      throw (Rn !== null && (Rn = Rn.slice(e + 1)), m1(Pf, Rr), o);
    } finally {
      (we = t), (Ku = !1);
    }
  }
  return null;
}
var vo = [],
  go = 0,
  ea = null,
  ta = 0,
  Lt = [],
  Ft = 0,
  Br = null,
  Pn = 1,
  _n = '';
function jr(e, t) {
  (vo[go++] = ta), (vo[go++] = ea), (ea = e), (ta = t);
}
function H1(e, t, n) {
  (Lt[Ft++] = Pn), (Lt[Ft++] = _n), (Lt[Ft++] = Br), (Br = e);
  var r = Pn;
  e = _n;
  var o = 32 - Jt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Jt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Pn = (1 << (32 - Jt(t) + o)) | (n << o) | r),
      (_n = i + e);
  } else (Pn = (1 << i) | (n << o) | r), (_n = e);
}
function Ff(e) {
  e.return !== null && (jr(e, 1), H1(e, 1, 0));
}
function Vf(e) {
  for (; e === ea; )
    (ea = vo[--go]), (vo[go] = null), (ta = vo[--go]), (vo[go] = null);
  for (; e === Br; )
    (Br = Lt[--Ft]),
      (Lt[Ft] = null),
      (_n = Lt[--Ft]),
      (Lt[Ft] = null),
      (Pn = Lt[--Ft]),
      (Lt[Ft] = null);
}
var Tt = null,
  Rt = null,
  Me = !1,
  qt = null;
function K1(e, t) {
  var n = $t(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Wh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Tt = e), (Rt = dr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Tt = e), (Rt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Br !== null ? { id: Pn, overflow: _n } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = $t(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Tt = e),
            (Rt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function hd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function md(e) {
  if (Me) {
    var t = Rt;
    if (t) {
      var n = t;
      if (!Wh(e, t)) {
        if (hd(e)) throw Error(V(418));
        t = dr(n.nextSibling);
        var r = Tt;
        t && Wh(e, t)
          ? K1(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Me = !1), (Tt = e));
      }
    } else {
      if (hd(e)) throw Error(V(418));
      (e.flags = (e.flags & -4097) | 2), (Me = !1), (Tt = e);
    }
  }
}
function Hh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Tt = e;
}
function rl(e) {
  if (e !== Tt) return !1;
  if (!Me) return Hh(e), (Me = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !cd(e.type, e.memoizedProps))),
    t && (t = Rt))
  ) {
    if (hd(e)) throw (G1(), Error(V(418)));
    for (; t; ) K1(e, t), (t = dr(t.nextSibling));
  }
  if ((Hh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Rt = dr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Rt = null;
    }
  } else Rt = Tt ? dr(e.stateNode.nextSibling) : null;
  return !0;
}
function G1() {
  for (var e = Rt; e; ) e = dr(e.nextSibling);
}
function Fo() {
  (Rt = Tt = null), (Me = !1);
}
function zf(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
var W3 = zn.ReactCurrentBatchConfig;
function wi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(V(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(V(284));
    if (!n._owner) throw Error(V(290, e));
  }
  return e;
}
function ol(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      V(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function Kh(e) {
  var t = e._init;
  return t(e._payload);
}
function Z1(e) {
  function t(g, h) {
    if (e) {
      var x = g.deletions;
      x === null ? ((g.deletions = [h]), (g.flags |= 16)) : x.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function o(g, h) {
    return (g = mr(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, h, x) {
    return (
      (g.index = x),
      e
        ? ((x = g.alternate),
          x !== null
            ? ((x = x.index), x < h ? ((g.flags |= 2), h) : x)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, x, E) {
    return h === null || h.tag !== 6
      ? ((h = Ju(x, g.mode, E)), (h.return = g), h)
      : ((h = o(h, x)), (h.return = g), h);
  }
  function a(g, h, x, E) {
    var C = x.type;
    return C === uo
      ? c(g, h, x.props.children, E, x.key)
      : h !== null &&
          (h.elementType === C ||
            (typeof C == 'object' &&
              C !== null &&
              C.$$typeof === Zn &&
              Kh(C) === h.type))
        ? ((E = o(h, x.props)), (E.ref = wi(g, h, x)), (E.return = g), E)
        : ((E = Ol(x.type, x.key, x.props, null, g.mode, E)),
          (E.ref = wi(g, h, x)),
          (E.return = g),
          E);
  }
  function u(g, h, x, E) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== x.containerInfo ||
      h.stateNode.implementation !== x.implementation
      ? ((h = ec(x, g.mode, E)), (h.return = g), h)
      : ((h = o(h, x.children || [])), (h.return = g), h);
  }
  function c(g, h, x, E, C) {
    return h === null || h.tag !== 7
      ? ((h = $r(x, g.mode, E, C)), (h.return = g), h)
      : ((h = o(h, x)), (h.return = g), h);
  }
  function f(g, h, x) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = Ju('' + h, g.mode, x)), (h.return = g), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Gs:
          return (
            (x = Ol(h.type, h.key, h.props, null, g.mode, x)),
            (x.ref = wi(g, null, h)),
            (x.return = g),
            x
          );
        case ao:
          return (h = ec(h, g.mode, x)), (h.return = g), h;
        case Zn:
          var E = h._init;
          return f(g, E(h._payload), x);
      }
      if (Ti(h) || mi(h))
        return (h = $r(h, g.mode, x, null)), (h.return = g), h;
      ol(g, h);
    }
    return null;
  }
  function m(g, h, x, E) {
    var C = h !== null ? h.key : null;
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return C !== null ? null : l(g, h, '' + x, E);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case Gs:
          return x.key === C ? a(g, h, x, E) : null;
        case ao:
          return x.key === C ? u(g, h, x, E) : null;
        case Zn:
          return (C = x._init), m(g, h, C(x._payload), E);
      }
      if (Ti(x) || mi(x)) return C !== null ? null : c(g, h, x, E, null);
      ol(g, x);
    }
    return null;
  }
  function y(g, h, x, E, C) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (g = g.get(x) || null), l(h, g, '' + E, C);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case Gs:
          return (g = g.get(E.key === null ? x : E.key) || null), a(h, g, E, C);
        case ao:
          return (g = g.get(E.key === null ? x : E.key) || null), u(h, g, E, C);
        case Zn:
          var b = E._init;
          return y(g, h, x, b(E._payload), C);
      }
      if (Ti(E) || mi(E)) return (g = g.get(x) || null), c(h, g, E, C, null);
      ol(h, E);
    }
    return null;
  }
  function S(g, h, x, E) {
    for (
      var C = null, b = null, N = h, R = (h = 0), _ = null;
      N !== null && R < x.length;
      R++
    ) {
      N.index > R ? ((_ = N), (N = null)) : (_ = N.sibling);
      var j = m(g, N, x[R], E);
      if (j === null) {
        N === null && (N = _);
        break;
      }
      e && N && j.alternate === null && t(g, N),
        (h = i(j, h, R)),
        b === null ? (C = j) : (b.sibling = j),
        (b = j),
        (N = _);
    }
    if (R === x.length) return n(g, N), Me && jr(g, R), C;
    if (N === null) {
      for (; R < x.length; R++)
        (N = f(g, x[R], E)),
          N !== null &&
            ((h = i(N, h, R)), b === null ? (C = N) : (b.sibling = N), (b = N));
      return Me && jr(g, R), C;
    }
    for (N = r(g, N); R < x.length; R++)
      (_ = y(N, g, R, x[R], E)),
        _ !== null &&
          (e && _.alternate !== null && N.delete(_.key === null ? R : _.key),
          (h = i(_, h, R)),
          b === null ? (C = _) : (b.sibling = _),
          (b = _));
    return (
      e &&
        N.forEach(function (F) {
          return t(g, F);
        }),
      Me && jr(g, R),
      C
    );
  }
  function v(g, h, x, E) {
    var C = mi(x);
    if (typeof C != 'function') throw Error(V(150));
    if (((x = C.call(x)), x == null)) throw Error(V(151));
    for (
      var b = (C = null), N = h, R = (h = 0), _ = null, j = x.next();
      N !== null && !j.done;
      R++, j = x.next()
    ) {
      N.index > R ? ((_ = N), (N = null)) : (_ = N.sibling);
      var F = m(g, N, j.value, E);
      if (F === null) {
        N === null && (N = _);
        break;
      }
      e && N && F.alternate === null && t(g, N),
        (h = i(F, h, R)),
        b === null ? (C = F) : (b.sibling = F),
        (b = F),
        (N = _);
    }
    if (j.done) return n(g, N), Me && jr(g, R), C;
    if (N === null) {
      for (; !j.done; R++, j = x.next())
        (j = f(g, j.value, E)),
          j !== null &&
            ((h = i(j, h, R)), b === null ? (C = j) : (b.sibling = j), (b = j));
      return Me && jr(g, R), C;
    }
    for (N = r(g, N); !j.done; R++, j = x.next())
      (j = y(N, g, R, j.value, E)),
        j !== null &&
          (e && j.alternate !== null && N.delete(j.key === null ? R : j.key),
          (h = i(j, h, R)),
          b === null ? (C = j) : (b.sibling = j),
          (b = j));
    return (
      e &&
        N.forEach(function (A) {
          return t(g, A);
        }),
      Me && jr(g, R),
      C
    );
  }
  function w(g, h, x, E) {
    if (
      (typeof x == 'object' &&
        x !== null &&
        x.type === uo &&
        x.key === null &&
        (x = x.props.children),
      typeof x == 'object' && x !== null)
    ) {
      switch (x.$$typeof) {
        case Gs:
          e: {
            for (var C = x.key, b = h; b !== null; ) {
              if (b.key === C) {
                if (((C = x.type), C === uo)) {
                  if (b.tag === 7) {
                    n(g, b.sibling),
                      (h = o(b, x.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  b.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === Zn &&
                    Kh(C) === b.type)
                ) {
                  n(g, b.sibling),
                    (h = o(b, x.props)),
                    (h.ref = wi(g, b, x)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, b);
                break;
              } else t(g, b);
              b = b.sibling;
            }
            x.type === uo
              ? ((h = $r(x.props.children, g.mode, E, x.key)),
                (h.return = g),
                (g = h))
              : ((E = Ol(x.type, x.key, x.props, null, g.mode, E)),
                (E.ref = wi(g, h, x)),
                (E.return = g),
                (g = E));
          }
          return s(g);
        case ao:
          e: {
            for (b = x.key; h !== null; ) {
              if (h.key === b)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === x.containerInfo &&
                  h.stateNode.implementation === x.implementation
                ) {
                  n(g, h.sibling),
                    (h = o(h, x.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = ec(x, g.mode, E)), (h.return = g), (g = h);
          }
          return s(g);
        case Zn:
          return (b = x._init), w(g, h, b(x._payload), E);
      }
      if (Ti(x)) return S(g, h, x, E);
      if (mi(x)) return v(g, h, x, E);
      ol(g, x);
    }
    return (typeof x == 'string' && x !== '') || typeof x == 'number'
      ? ((x = '' + x),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = o(h, x)), (h.return = g), (g = h))
          : (n(g, h), (h = Ju(x, g.mode, E)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return w;
}
var Vo = Z1(!0),
  Y1 = Z1(!1),
  na = kr(null),
  ra = null,
  yo = null,
  $f = null;
function Uf() {
  $f = yo = ra = null;
}
function Bf(e) {
  var t = na.current;
  Re(na), (e._currentValue = t);
}
function vd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function To(e, t) {
  (ra = e),
    ($f = yo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (vt = !0), (e.firstContext = null));
}
function Bt(e) {
  var t = e._currentValue;
  if ($f !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yo === null)) {
      if (ra === null) throw Error(V(308));
      (yo = e), (ra.dependencies = { lanes: 0, firstContext: e });
    } else yo = yo.next = e;
  return t;
}
var Lr = null;
function Wf(e) {
  Lr === null ? (Lr = [e]) : Lr.push(e);
}
function X1(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Wf(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    In(e, r)
  );
}
function In(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Yn = !1;
function Hf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Q1(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function jn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function fr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), he & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      In(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Wf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    In(e, n)
  );
}
function Tl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _f(e, n);
  }
}
function Gh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function oa(e, t, n, r) {
  var o = e.updateQueue;
  Yn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = a = null), (l = i);
    do {
      var m = l.lane,
        y = l.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var S = e,
            v = l;
          switch (((m = t), (y = n), v.tag)) {
            case 1:
              if (((S = v.payload), typeof S == 'function')) {
                f = S.call(y, f, m);
                break e;
              }
              f = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = v.payload),
                (m = typeof S == 'function' ? S.call(y, f, m) : S),
                m == null)
              )
                break e;
              f = De({}, f, m);
              break e;
            case 2:
              Yn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [l]) : m.push(l));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (a = f)) : (c = c.next = y),
          (s |= m);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (m = l),
          (l = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Hr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Zh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(V(191, o));
        o.call(r);
      }
    }
}
var Rs = {},
  xn = kr(Rs),
  ss = kr(Rs),
  ls = kr(Rs);
function Fr(e) {
  if (e === Rs) throw Error(V(174));
  return e;
}
function Kf(e, t) {
  switch ((Ee(ls, t), Ee(ss, e), Ee(xn, Rs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xc(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Xc(t, e));
  }
  Re(xn), Ee(xn, t);
}
function zo() {
  Re(xn), Re(ss), Re(ls);
}
function q1(e) {
  Fr(ls.current);
  var t = Fr(xn.current),
    n = Xc(t, e.type);
  t !== n && (Ee(ss, e), Ee(xn, n));
}
function Gf(e) {
  ss.current === e && (Re(xn), Re(ss));
}
var Ae = kr(0);
function ia(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Gu = [];
function Zf() {
  for (var e = 0; e < Gu.length; e++)
    Gu[e]._workInProgressVersionPrimary = null;
  Gu.length = 0;
}
var Pl = zn.ReactCurrentDispatcher,
  Zu = zn.ReactCurrentBatchConfig,
  Wr = 0,
  Oe = null,
  We = null,
  Ye = null,
  sa = !1,
  Vi = !1,
  as = 0,
  H3 = 0;
function ot() {
  throw Error(V(321));
}
function Yf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rn(e[n], t[n])) return !1;
  return !0;
}
function Xf(e, t, n, r, o, i) {
  if (
    ((Wr = i),
    (Oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Pl.current = e === null || e.memoizedState === null ? Y3 : X3),
    (e = n(r, o)),
    Vi)
  ) {
    i = 0;
    do {
      if (((Vi = !1), (as = 0), 25 <= i)) throw Error(V(301));
      (i += 1),
        (Ye = We = null),
        (t.updateQueue = null),
        (Pl.current = Q3),
        (e = n(r, o));
    } while (Vi);
  }
  if (
    ((Pl.current = la),
    (t = We !== null && We.next !== null),
    (Wr = 0),
    (Ye = We = Oe = null),
    (sa = !1),
    t)
  )
    throw Error(V(300));
  return e;
}
function Qf() {
  var e = as !== 0;
  return (as = 0), e;
}
function fn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ye === null ? (Oe.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye;
}
function Wt() {
  if (We === null) {
    var e = Oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = We.next;
  var t = Ye === null ? Oe.memoizedState : Ye.next;
  if (t !== null) (Ye = t), (We = e);
  else {
    if (e === null) throw Error(V(310));
    (We = e),
      (e = {
        memoizedState: We.memoizedState,
        baseState: We.baseState,
        baseQueue: We.baseQueue,
        queue: We.queue,
        next: null,
      }),
      Ye === null ? (Oe.memoizedState = Ye = e) : (Ye = Ye.next = e);
  }
  return Ye;
}
function us(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Yu(e) {
  var t = Wt(),
    n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = We,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((Wr & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (Oe.lanes |= c),
          (Hr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      rn(r, t.memoizedState) || (vt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Oe.lanes |= i), (Hr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xu(e) {
  var t = Wt(),
    n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    rn(i, t.memoizedState) || (vt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function J1() {}
function eg(e, t) {
  var n = Oe,
    r = Wt(),
    o = t(),
    i = !rn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (vt = !0)),
    (r = r.queue),
    qf(rg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ye !== null && Ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      cs(9, ng.bind(null, n, r, o, t), void 0, null),
      qe === null)
    )
      throw Error(V(349));
    Wr & 30 || tg(n, t, o);
  }
  return o;
}
function tg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ng(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), og(t) && ig(e);
}
function rg(e, t, n) {
  return n(function () {
    og(t) && ig(e);
  });
}
function og(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rn(e, n);
  } catch {
    return !0;
  }
}
function ig(e) {
  var t = In(e, 1);
  t !== null && en(t, e, 1, -1);
}
function Yh(e) {
  var t = fn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: us,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Z3.bind(null, Oe, e)),
    [t.memoizedState, e]
  );
}
function cs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sg() {
  return Wt().memoizedState;
}
function _l(e, t, n, r) {
  var o = fn();
  (Oe.flags |= e),
    (o.memoizedState = cs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ga(e, t, n, r) {
  var o = Wt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (We !== null) {
    var s = We.memoizedState;
    if (((i = s.destroy), r !== null && Yf(r, s.deps))) {
      o.memoizedState = cs(t, n, i, r);
      return;
    }
  }
  (Oe.flags |= e), (o.memoizedState = cs(1 | t, n, i, r));
}
function Xh(e, t) {
  return _l(8390656, 8, e, t);
}
function qf(e, t) {
  return Ga(2048, 8, e, t);
}
function lg(e, t) {
  return Ga(4, 2, e, t);
}
function ag(e, t) {
  return Ga(4, 4, e, t);
}
function ug(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function cg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ga(4, 4, ug.bind(null, t, e), n)
  );
}
function Jf() {}
function dg(e, t) {
  var n = Wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function fg(e, t) {
  var n = Wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function pg(e, t, n) {
  return Wr & 21
    ? (rn(n, t) || ((n = y1()), (Oe.lanes |= n), (Hr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (vt = !0)), (e.memoizedState = n));
}
function K3(e, t) {
  var n = we;
  (we = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zu.transition;
  Zu.transition = {};
  try {
    e(!1), t();
  } finally {
    (we = n), (Zu.transition = r);
  }
}
function hg() {
  return Wt().memoizedState;
}
function G3(e, t, n) {
  var r = hr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    mg(e))
  )
    vg(t, n);
  else if (((n = X1(e, t, n, r)), n !== null)) {
    var o = ft();
    en(n, e, r, o), gg(n, t, r);
  }
}
function Z3(e, t, n) {
  var r = hr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mg(e)) vg(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), rn(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Wf(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = X1(e, t, o, r)),
      n !== null && ((o = ft()), en(n, e, r, o), gg(n, t, r));
  }
}
function mg(e) {
  var t = e.alternate;
  return e === Oe || (t !== null && t === Oe);
}
function vg(e, t) {
  Vi = sa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function gg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _f(e, n);
  }
}
var la = {
    readContext: Bt,
    useCallback: ot,
    useContext: ot,
    useEffect: ot,
    useImperativeHandle: ot,
    useInsertionEffect: ot,
    useLayoutEffect: ot,
    useMemo: ot,
    useReducer: ot,
    useRef: ot,
    useState: ot,
    useDebugValue: ot,
    useDeferredValue: ot,
    useTransition: ot,
    useMutableSource: ot,
    useSyncExternalStore: ot,
    useId: ot,
    unstable_isNewReconciler: !1,
  },
  Y3 = {
    readContext: Bt,
    useCallback: function (e, t) {
      return (fn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Bt,
    useEffect: Xh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _l(4194308, 4, ug.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _l(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _l(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = fn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = fn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = G3.bind(null, Oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = fn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Yh,
    useDebugValue: Jf,
    useDeferredValue: function (e) {
      return (fn().memoizedState = e);
    },
    useTransition: function () {
      var e = Yh(!1),
        t = e[0];
      return (e = K3.bind(null, e[1])), (fn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Oe,
        o = fn();
      if (Me) {
        if (n === void 0) throw Error(V(407));
        n = n();
      } else {
        if (((n = t()), qe === null)) throw Error(V(349));
        Wr & 30 || tg(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Xh(rg.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        cs(9, ng.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = fn(),
        t = qe.identifierPrefix;
      if (Me) {
        var n = _n,
          r = Pn;
        (n = (r & ~(1 << (32 - Jt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = as++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = H3++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  X3 = {
    readContext: Bt,
    useCallback: dg,
    useContext: Bt,
    useEffect: qf,
    useImperativeHandle: cg,
    useInsertionEffect: lg,
    useLayoutEffect: ag,
    useMemo: fg,
    useReducer: Yu,
    useRef: sg,
    useState: function () {
      return Yu(us);
    },
    useDebugValue: Jf,
    useDeferredValue: function (e) {
      var t = Wt();
      return pg(t, We.memoizedState, e);
    },
    useTransition: function () {
      var e = Yu(us)[0],
        t = Wt().memoizedState;
      return [e, t];
    },
    useMutableSource: J1,
    useSyncExternalStore: eg,
    useId: hg,
    unstable_isNewReconciler: !1,
  },
  Q3 = {
    readContext: Bt,
    useCallback: dg,
    useContext: Bt,
    useEffect: qf,
    useImperativeHandle: cg,
    useInsertionEffect: lg,
    useLayoutEffect: ag,
    useMemo: fg,
    useReducer: Xu,
    useRef: sg,
    useState: function () {
      return Xu(us);
    },
    useDebugValue: Jf,
    useDeferredValue: function (e) {
      var t = Wt();
      return We === null ? (t.memoizedState = e) : pg(t, We.memoizedState, e);
    },
    useTransition: function () {
      var e = Xu(us)[0],
        t = Wt().memoizedState;
      return [e, t];
    },
    useMutableSource: J1,
    useSyncExternalStore: eg,
    useId: hg,
    unstable_isNewReconciler: !1,
  };
function Xt(e, t) {
  if (e && e.defaultProps) {
    (t = De({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function gd(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : De({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Za = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ft(),
      o = hr(e),
      i = jn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = fr(e, i, o)),
      t !== null && (en(t, e, o, r), Tl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ft(),
      o = hr(e),
      i = jn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = fr(e, i, o)),
      t !== null && (en(t, e, o, r), Tl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ft(),
      r = hr(e),
      o = jn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = fr(e, o, r)),
      t !== null && (en(t, e, r, n), Tl(t, e, r));
  },
};
function Qh(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ns(n, r) || !ns(o, i)
        : !0
  );
}
function yg(e, t, n) {
  var r = !1,
    o = xr,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Bt(i))
      : ((o = xt(t) ? Ur : lt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Lo(e, o) : xr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Za),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function qh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Za.enqueueReplaceState(t, t.state, null);
}
function yd(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Hf(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Bt(i))
    : ((i = xt(t) ? Ur : lt.current), (o.context = Lo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (gd(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Za.enqueueReplaceState(o, o.state, null),
      oa(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function $o(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Nw(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Qu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var q3 = typeof WeakMap == 'function' ? WeakMap : Map;
function xg(e, t, n) {
  (n = jn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ua || ((ua = !0), (Pd = r)), xd(e, t);
    }),
    n
  );
}
function wg(e, t, n) {
  (n = jn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        xd(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        xd(e, t),
          typeof r != 'function' &&
            (pr === null ? (pr = new Set([this])) : pr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    n
  );
}
function Jh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new q3();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = f4.bind(null, e, t, n)), t.then(e, e));
}
function em(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tm(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = jn(-1, 1)), (t.tag = 2), fr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var J3 = zn.ReactCurrentOwner,
  vt = !1;
function ct(e, t, n, r) {
  t.child = e === null ? Y1(t, null, n, r) : Vo(t, e.child, n, r);
}
function nm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    To(t, o),
    (r = Xf(e, t, n, r, i, o)),
    (n = Qf()),
    e !== null && !vt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ln(e, t, o))
      : (Me && n && Ff(t), (t.flags |= 1), ct(e, t, r, o), t.child)
  );
}
function rm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !lp(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Sg(e, t, i, r, o))
      : ((e = Ol(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ns), n(s, r) && e.ref === t.ref)
    )
      return Ln(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = mr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ns(i, r) && e.ref === t.ref)
      if (((vt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (vt = !0);
      else return (t.lanes = e.lanes), Ln(e, t, o);
  }
  return wd(e, t, n, r, o);
}
function Cg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ee(wo, bt),
        (bt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ee(wo, bt),
          (bt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Ee(wo, bt),
        (bt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ee(wo, bt),
      (bt |= r);
  return ct(e, t, o, n), t.child;
}
function Eg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function wd(e, t, n, r, o) {
  var i = xt(n) ? Ur : lt.current;
  return (
    (i = Lo(t, i)),
    To(t, o),
    (n = Xf(e, t, n, r, i, o)),
    (r = Qf()),
    e !== null && !vt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ln(e, t, o))
      : (Me && r && Ff(t), (t.flags |= 1), ct(e, t, n, o), t.child)
  );
}
function om(e, t, n, r, o) {
  if (xt(n)) {
    var i = !0;
    Jl(t);
  } else i = !1;
  if ((To(t, o), t.stateNode === null))
    Ml(e, t), yg(t, n, r), yd(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Bt(u))
      : ((u = xt(n) ? Ur : lt.current), (u = Lo(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && qh(t, s, r, u)),
      (Yn = !1);
    var m = t.memoizedState;
    (s.state = m),
      oa(t, r, s, o),
      (a = t.memoizedState),
      l !== r || m !== a || yt.current || Yn
        ? (typeof c == 'function' && (gd(t, n, c, r), (a = t.memoizedState)),
          (l = Yn || Qh(t, n, l, r, m, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Q1(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Xt(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (m = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Bt(a))
        : ((a = xt(n) ? Ur : lt.current), (a = Lo(t, a)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== f || m !== a) && qh(t, s, r, a)),
      (Yn = !1),
      (m = t.memoizedState),
      (s.state = m),
      oa(t, r, s, o);
    var S = t.memoizedState;
    l !== f || m !== S || yt.current || Yn
      ? (typeof y == 'function' && (gd(t, n, y, r), (S = t.memoizedState)),
        (u = Yn || Qh(t, n, u, r, m, S, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, S, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, S, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (s.props = r),
        (s.state = S),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Sd(e, t, n, r, i, o);
}
function Sd(e, t, n, r, o, i) {
  Eg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Bh(t, n, !1), Ln(e, t, i);
  (r = t.stateNode), (J3.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Vo(t, e.child, null, i)), (t.child = Vo(t, null, l, i)))
      : ct(e, t, l, i),
    (t.memoizedState = r.state),
    o && Bh(t, n, !0),
    t.child
  );
}
function bg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Uh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Uh(e, t.context, !1),
    Kf(e, t.containerInfo);
}
function im(e, t, n, r, o) {
  return Fo(), zf(o), (t.flags |= 256), ct(e, t, n, r), t.child;
}
var Cd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ed(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ng(e, t, n) {
  var r = t.pendingProps,
    o = Ae.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ee(Ae, o & 1),
    e === null)
  )
    return (
      md(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Qa(s, r, 0, null)),
              (e = $r(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ed(n)),
              (t.memoizedState = Cd),
              e)
            : ep(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return e4(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = mr(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = mr(l, i)) : ((i = $r(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ed(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Cd),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = mr(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ep(e, t) {
  return (
    (t = Qa({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function il(e, t, n, r) {
  return (
    r !== null && zf(r),
    Vo(t, e.child, null, n),
    (e = ep(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function e4(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Qu(Error(V(422)))), il(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Qa({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = $r(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Vo(t, e.child, null, s),
          (t.child.memoizedState = Ed(s)),
          (t.memoizedState = Cd),
          i);
  if (!(t.mode & 1)) return il(e, t, s, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(V(419))), (r = Qu(i, r, void 0)), il(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), vt || l)) {
    if (((r = qe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), In(e, o), en(r, e, o, -1));
    }
    return sp(), (r = Qu(Error(V(421)))), il(e, t, s, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = p4.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Rt = dr(o.nextSibling)),
      (Tt = t),
      (Me = !0),
      (qt = null),
      e !== null &&
        ((Lt[Ft++] = Pn),
        (Lt[Ft++] = _n),
        (Lt[Ft++] = Br),
        (Pn = e.id),
        (_n = e.overflow),
        (Br = t)),
      (t = ep(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vd(e.return, t, n);
}
function qu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function kg(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ct(e, t, r.children, n), (r = Ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sm(e, n, t);
        else if (e.tag === 19) sm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ee(Ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ia(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          qu(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ia(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        qu(t, !0, n, null, i);
        break;
      case 'together':
        qu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ml(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ln(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Hr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (
      e = t.child, n = mr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = mr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function t4(e, t, n) {
  switch (t.tag) {
    case 3:
      bg(t), Fo();
      break;
    case 5:
      q1(t);
      break;
    case 1:
      xt(t.type) && Jl(t);
      break;
    case 4:
      Kf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Ee(na, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ee(Ae, Ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ng(e, t, n)
            : (Ee(Ae, Ae.current & 1),
              (e = Ln(e, t, n)),
              e !== null ? e.sibling : null);
      Ee(Ae, Ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return kg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ee(Ae, Ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Cg(e, t, n);
  }
  return Ln(e, t, n);
}
var Rg, bd, Tg, Pg;
Rg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
bd = function () {};
Tg = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Fr(xn.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Kc(e, o)), (r = Kc(e, r)), (i = []);
        break;
      case 'select':
        (o = De({}, o, { value: void 0 })),
          (r = De({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = Yc(e, o)), (r = Yc(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ql);
    }
    Qc(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Yi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === 'children'
              ? (typeof a != 'string' && typeof a != 'number') ||
                (i = i || []).push(u, '' + a)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Yi.hasOwnProperty(u)
                  ? (a != null && u === 'onScroll' && ke('scroll', e),
                    i || l === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Pg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Si(e, t) {
  if (!Me)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function it(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function n4(e, t, n) {
  var r = t.pendingProps;
  switch ((Vf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return it(t), null;
    case 1:
      return xt(t.type) && ql(), it(t), null;
    case 3:
      return (
        (r = t.stateNode),
        zo(),
        Re(yt),
        Re(lt),
        Zf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (rl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qt !== null && (jd(qt), (qt = null)))),
        bd(e, t),
        it(t),
        null
      );
    case 5:
      Gf(t);
      var o = Fr(ls.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Tg(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return it(t), null;
        }
        if (((e = Fr(xn.current)), rl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[pn] = t), (r[is] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ke('cancel', r), ke('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ke('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < _i.length; o++) ke(_i[o], r);
              break;
            case 'source':
              ke('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ke('error', r), ke('load', r);
              break;
            case 'details':
              ke('toggle', r);
              break;
            case 'input':
              mh(r, i), ke('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ke('invalid', r);
              break;
            case 'textarea':
              gh(r, i), ke('invalid', r);
          }
          Qc(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      nl(r.textContent, l, e),
                    (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      nl(r.textContent, l, e),
                    (o = ['children', '' + l]))
                : Yi.hasOwnProperty(s) &&
                  l != null &&
                  s === 'onScroll' &&
                  ke('scroll', r);
            }
          switch (n) {
            case 'input':
              Zs(r), vh(r, i, !0);
              break;
            case 'textarea':
              Zs(r), yh(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Ql);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = r1(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[pn] = t),
            (e[is] = r),
            Rg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = qc(n, r)), n)) {
              case 'dialog':
                ke('cancel', e), ke('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ke('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < _i.length; o++) ke(_i[o], e);
                o = r;
                break;
              case 'source':
                ke('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ke('error', e), ke('load', e), (o = r);
                break;
              case 'details':
                ke('toggle', e), (o = r);
                break;
              case 'input':
                mh(e, r), (o = Kc(e, r)), ke('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = De({}, r, { value: void 0 })),
                  ke('invalid', e);
                break;
              case 'textarea':
                gh(e, r), (o = Yc(e, r)), ke('invalid', e);
                break;
              default:
                o = r;
            }
            Qc(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === 'style'
                  ? s1(e, a)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && o1(e, a))
                    : i === 'children'
                      ? typeof a == 'string'
                        ? (n !== 'textarea' || a !== '') && Xi(e, a)
                        : typeof a == 'number' && Xi(e, '' + a)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Yi.hasOwnProperty(i)
                          ? a != null && i === 'onScroll' && ke('scroll', e)
                          : a != null && bf(e, i, a, s));
              }
            switch (n) {
              case 'input':
                Zs(e), vh(e, r, !1);
                break;
              case 'textarea':
                Zs(e), yh(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + yr(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? bo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      bo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = Ql);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return it(t), null;
    case 6:
      if (e && t.stateNode != null) Pg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(V(166));
        if (((n = Fr(ls.current)), Fr(xn.current), rl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pn] = t),
            (i = r.nodeValue !== n) && ((e = Tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                nl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  nl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pn] = t),
            (t.stateNode = r);
      }
      return it(t), null;
    case 13:
      if (
        (Re(Ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Me && Rt !== null && t.mode & 1 && !(t.flags & 128))
          G1(), Fo(), (t.flags |= 98560), (i = !1);
        else if (((i = rl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(V(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(V(317));
            i[pn] = t;
          } else
            Fo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          it(t), (i = !1);
        } else qt !== null && (jd(qt), (qt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ae.current & 1 ? Ke === 0 && (Ke = 3) : sp())),
          t.updateQueue !== null && (t.flags |= 4),
          it(t),
          null);
    case 4:
      return (
        zo(), bd(e, t), e === null && rs(t.stateNode.containerInfo), it(t), null
      );
    case 10:
      return Bf(t.type._context), it(t), null;
    case 17:
      return xt(t.type) && ql(), it(t), null;
    case 19:
      if ((Re(Ae), (i = t.memoizedState), i === null)) return it(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Si(i, !1);
        else {
          if (Ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ia(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Si(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ee(Ae, (Ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Le() > Uo &&
            ((t.flags |= 128), (r = !0), Si(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ia(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Si(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !Me)
            )
              return it(t), null;
          } else
            2 * Le() - i.renderingStartTime > Uo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Si(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Le()),
          (t.sibling = null),
          (n = Ae.current),
          Ee(Ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (it(t), null);
    case 22:
    case 23:
      return (
        ip(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? bt & 1073741824 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : it(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function r4(e, t) {
  switch ((Vf(t), t.tag)) {
    case 1:
      return (
        xt(t.type) && ql(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        zo(),
        Re(yt),
        Re(lt),
        Zf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Gf(t), null;
    case 13:
      if (
        (Re(Ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(V(340));
        Fo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Re(Ae), null;
    case 4:
      return zo(), null;
    case 10:
      return Bf(t.type._context), null;
    case 22:
    case 23:
      return ip(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var sl = !1,
  st = !1,
  o4 = typeof WeakSet == 'function' ? WeakSet : Set,
  X = null;
function xo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Ie(e, t, r);
      }
    else n.current = null;
}
function Nd(e, t, n) {
  try {
    n();
  } catch (r) {
    Ie(e, t, r);
  }
}
var lm = !1;
function i4(e, t) {
  if (((ad = Zl), (e = O1()), Lf(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (m = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++u === o && (l = s),
                m === i && ++c === r && (a = s),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = y;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ud = { focusedElem: e, selectionRange: n }, Zl = !1, X = t; X !== null; )
    if (((t = X), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (X = e);
    else
      for (; X !== null; ) {
        t = X;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var v = S.memoizedProps,
                    w = S.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Xt(t.type, v),
                      w,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = '')
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(V(163));
            }
        } catch (E) {
          Ie(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (X = e);
          break;
        }
        X = t.return;
      }
  return (S = lm), (lm = !1), S;
}
function zi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Nd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ya(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function kd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function _g(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _g(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pn], delete t[is], delete t[fd], delete t[$3], delete t[U3])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Mg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function am(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Mg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Rd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ql));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rd(e, t, n), e = e.sibling; e !== null; ) Rd(e, t, n), (e = e.sibling);
}
function Td(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Td(e, t, n), e = e.sibling; e !== null; ) Td(e, t, n), (e = e.sibling);
}
var et = null,
  Qt = !1;
function Bn(e, t, n) {
  for (n = n.child; n !== null; ) jg(e, t, n), (n = n.sibling);
}
function jg(e, t, n) {
  if (yn && typeof yn.onCommitFiberUnmount == 'function')
    try {
      yn.onCommitFiberUnmount($a, n);
    } catch {}
  switch (n.tag) {
    case 5:
      st || xo(n, t);
    case 6:
      var r = et,
        o = Qt;
      (et = null),
        Bn(e, t, n),
        (et = r),
        (Qt = o),
        et !== null &&
          (Qt
            ? ((e = et),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : et.removeChild(n.stateNode));
      break;
    case 18:
      et !== null &&
        (Qt
          ? ((e = et),
            (n = n.stateNode),
            e.nodeType === 8
              ? Hu(e.parentNode, n)
              : e.nodeType === 1 && Hu(e, n),
            es(e))
          : Hu(et, n.stateNode));
      break;
    case 4:
      (r = et),
        (o = Qt),
        (et = n.stateNode.containerInfo),
        (Qt = !0),
        Bn(e, t, n),
        (et = r),
        (Qt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !st &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Nd(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Bn(e, t, n);
      break;
    case 1:
      if (
        !st &&
        (xo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ie(n, t, l);
        }
      Bn(e, t, n);
      break;
    case 21:
      Bn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((st = (r = st) || n.memoizedState !== null), Bn(e, t, n), (st = r))
        : Bn(e, t, n);
      break;
    default:
      Bn(e, t, n);
  }
}
function um(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new o4()),
      t.forEach(function (r) {
        var o = h4.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Zt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (et = l.stateNode), (Qt = !1);
              break e;
            case 3:
              (et = l.stateNode.containerInfo), (Qt = !0);
              break e;
            case 4:
              (et = l.stateNode.containerInfo), (Qt = !0);
              break e;
          }
          l = l.return;
        }
        if (et === null) throw Error(V(160));
        jg(i, s, o), (et = null), (Qt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Ie(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ag(t, e), (t = t.sibling);
}
function Ag(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Zt(t, e), dn(e), r & 4)) {
        try {
          zi(3, e, e.return), Ya(3, e);
        } catch (v) {
          Ie(e, e.return, v);
        }
        try {
          zi(5, e, e.return);
        } catch (v) {
          Ie(e, e.return, v);
        }
      }
      break;
    case 1:
      Zt(t, e), dn(e), r & 512 && n !== null && xo(n, n.return);
      break;
    case 5:
      if (
        (Zt(t, e),
        dn(e),
        r & 512 && n !== null && xo(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Xi(o, '');
        } catch (v) {
          Ie(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && i.type === 'radio' && i.name != null && t1(o, i),
              qc(l, s);
            var u = qc(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === 'style'
                ? s1(o, f)
                : c === 'dangerouslySetInnerHTML'
                  ? o1(o, f)
                  : c === 'children'
                    ? Xi(o, f)
                    : bf(o, c, f, u);
            }
            switch (l) {
              case 'input':
                Gc(o, i);
                break;
              case 'textarea':
                n1(o, i);
                break;
              case 'select':
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? bo(o, !!i.multiple, y, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? bo(o, !!i.multiple, i.defaultValue, !0)
                      : bo(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[is] = i;
          } catch (v) {
            Ie(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Zt(t, e), dn(e), r & 4)) {
        if (e.stateNode === null) throw Error(V(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          Ie(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Zt(t, e), dn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          es(t.containerInfo);
        } catch (v) {
          Ie(e, e.return, v);
        }
      break;
    case 4:
      Zt(t, e), dn(e);
      break;
    case 13:
      Zt(t, e),
        dn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (rp = Le())),
        r & 4 && um(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((st = (u = st) || c), Zt(t, e), (st = u)) : Zt(t, e),
        dn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (X = e, c = e.child; c !== null; ) {
            for (f = X = c; X !== null; ) {
              switch (((m = X), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zi(4, m, m.return);
                  break;
                case 1:
                  xo(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (v) {
                      Ie(r, n, v);
                    }
                  }
                  break;
                case 5:
                  xo(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    dm(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (X = y)) : dm(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (l.style.display = i1('display', s)));
              } catch (v) {
                Ie(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (v) {
                Ie(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Zt(t, e), dn(e), r & 4 && um(e);
      break;
    case 21:
      break;
    default:
      Zt(t, e), dn(e);
  }
}
function dn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Mg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Xi(o, ''), (r.flags &= -33));
          var i = am(e);
          Td(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = am(e);
          Rd(e, l, s);
          break;
        default:
          throw Error(V(161));
      }
    } catch (a) {
      Ie(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function s4(e, t, n) {
  (X = e), Og(e);
}
function Og(e, t, n) {
  for (var r = (e.mode & 1) !== 0; X !== null; ) {
    var o = X,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || sl;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || st;
        l = sl;
        var u = st;
        if (((sl = s), (st = a) && !u))
          for (X = o; X !== null; )
            (s = X),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? fm(o)
                : a !== null
                  ? ((a.return = s), (X = a))
                  : fm(o);
        for (; i !== null; ) (X = i), Og(i), (i = i.sibling);
        (X = o), (sl = l), (st = u);
      }
      cm(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (X = i)) : cm(e);
  }
}
function cm(e) {
  for (; X !== null; ) {
    var t = X;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              st || Ya(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !st)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Xt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Zh(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Zh(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && es(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(V(163));
          }
        st || (t.flags & 512 && kd(t));
      } catch (m) {
        Ie(t, t.return, m);
      }
    }
    if (t === e) {
      X = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (X = n);
      break;
    }
    X = t.return;
  }
}
function dm(e) {
  for (; X !== null; ) {
    var t = X;
    if (t === e) {
      X = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (X = n);
      break;
    }
    X = t.return;
  }
}
function fm(e) {
  for (; X !== null; ) {
    var t = X;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ya(4, t);
          } catch (a) {
            Ie(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ie(t, o, a);
            }
          }
          var i = t.return;
          try {
            kd(t);
          } catch (a) {
            Ie(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            kd(t);
          } catch (a) {
            Ie(t, s, a);
          }
      }
    } catch (a) {
      Ie(t, t.return, a);
    }
    if (t === e) {
      X = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (X = l);
      break;
    }
    X = t.return;
  }
}
var l4 = Math.ceil,
  aa = zn.ReactCurrentDispatcher,
  tp = zn.ReactCurrentOwner,
  Ut = zn.ReactCurrentBatchConfig,
  he = 0,
  qe = null,
  ze = null,
  tt = 0,
  bt = 0,
  wo = kr(0),
  Ke = 0,
  ds = null,
  Hr = 0,
  Xa = 0,
  np = 0,
  $i = null,
  mt = null,
  rp = 0,
  Uo = 1 / 0,
  kn = null,
  ua = !1,
  Pd = null,
  pr = null,
  ll = !1,
  tr = null,
  ca = 0,
  Ui = 0,
  _d = null,
  jl = -1,
  Al = 0;
function ft() {
  return he & 6 ? Le() : jl !== -1 ? jl : (jl = Le());
}
function hr(e) {
  return e.mode & 1
    ? he & 2 && tt !== 0
      ? tt & -tt
      : W3.transition !== null
        ? (Al === 0 && (Al = y1()), Al)
        : ((e = we),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : N1(e.type))),
          e)
    : 1;
}
function en(e, t, n, r) {
  if (50 < Ui) throw ((Ui = 0), (_d = null), Error(V(185)));
  bs(e, n, r),
    (!(he & 2) || e !== qe) &&
      (e === qe && (!(he & 2) && (Xa |= n), Ke === 4 && qn(e, tt)),
      wt(e, r),
      n === 1 && he === 0 && !(t.mode & 1) && ((Uo = Le() + 500), Ka && Rr()));
}
function wt(e, t) {
  var n = e.callbackNode;
  Ww(e, t);
  var r = Gl(e, e === qe ? tt : 0);
  if (r === 0)
    n !== null && Sh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Sh(n), t === 1))
      e.tag === 0 ? B3(pm.bind(null, e)) : W1(pm.bind(null, e)),
        V3(function () {
          !(he & 6) && Rr();
        }),
        (n = null);
    else {
      switch (x1(r)) {
        case 1:
          n = Pf;
          break;
        case 4:
          n = v1;
          break;
        case 16:
          n = Kl;
          break;
        case 536870912:
          n = g1;
          break;
        default:
          n = Kl;
      }
      n = Ug(n, Dg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Dg(e, t) {
  if (((jl = -1), (Al = 0), he & 6)) throw Error(V(327));
  var n = e.callbackNode;
  if (Po() && e.callbackNode !== n) return null;
  var r = Gl(e, e === qe ? tt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = da(e, r);
  else {
    t = r;
    var o = he;
    he |= 2;
    var i = Lg();
    (qe !== e || tt !== t) && ((kn = null), (Uo = Le() + 500), zr(e, t));
    do
      try {
        c4();
        break;
      } catch (l) {
        Ig(e, l);
      }
    while (!0);
    Uf(),
      (aa.current = i),
      (he = o),
      ze !== null ? (t = 0) : ((qe = null), (tt = 0), (t = Ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = rd(e)), o !== 0 && ((r = o), (t = Md(e, o)))), t === 1)
    )
      throw ((n = ds), zr(e, 0), qn(e, r), wt(e, Le()), n);
    if (t === 6) qn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !a4(o) &&
          ((t = da(e, r)),
          t === 2 && ((i = rd(e)), i !== 0 && ((r = i), (t = Md(e, i)))),
          t === 1))
      )
        throw ((n = ds), zr(e, 0), qn(e, r), wt(e, Le()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          Ar(e, mt, kn);
          break;
        case 3:
          if (
            (qn(e, r), (r & 130023424) === r && ((t = rp + 500 - Le()), 10 < t))
          ) {
            if (Gl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ft(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = dd(Ar.bind(null, e, mt, kn), t);
            break;
          }
          Ar(e, mt, kn);
          break;
        case 4:
          if ((qn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Jt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * l4(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = dd(Ar.bind(null, e, mt, kn), r);
            break;
          }
          Ar(e, mt, kn);
          break;
        case 5:
          Ar(e, mt, kn);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return wt(e, Le()), e.callbackNode === n ? Dg.bind(null, e) : null;
}
function Md(e, t) {
  var n = $i;
  return (
    e.current.memoizedState.isDehydrated && (zr(e, t).flags |= 256),
    (e = da(e, t)),
    e !== 2 && ((t = mt), (mt = n), t !== null && jd(t)),
    e
  );
}
function jd(e) {
  mt === null ? (mt = e) : mt.push.apply(mt, e);
}
function a4(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!rn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function qn(e, t) {
  for (
    t &= ~np,
      t &= ~Xa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Jt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pm(e) {
  if (he & 6) throw Error(V(327));
  Po();
  var t = Gl(e, 0);
  if (!(t & 1)) return wt(e, Le()), null;
  var n = da(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = rd(e);
    r !== 0 && ((t = r), (n = Md(e, r)));
  }
  if (n === 1) throw ((n = ds), zr(e, 0), qn(e, t), wt(e, Le()), n);
  if (n === 6) throw Error(V(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ar(e, mt, kn),
    wt(e, Le()),
    null
  );
}
function op(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    (he = n), he === 0 && ((Uo = Le() + 500), Ka && Rr());
  }
}
function Kr(e) {
  tr !== null && tr.tag === 0 && !(he & 6) && Po();
  var t = he;
  he |= 1;
  var n = Ut.transition,
    r = we;
  try {
    if (((Ut.transition = null), (we = 1), e)) return e();
  } finally {
    (we = r), (Ut.transition = n), (he = t), !(he & 6) && Rr();
  }
}
function ip() {
  (bt = wo.current), Re(wo);
}
function zr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), F3(n)), ze !== null))
    for (n = ze.return; n !== null; ) {
      var r = n;
      switch ((Vf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ql();
          break;
        case 3:
          zo(), Re(yt), Re(lt), Zf();
          break;
        case 5:
          Gf(r);
          break;
        case 4:
          zo();
          break;
        case 13:
          Re(Ae);
          break;
        case 19:
          Re(Ae);
          break;
        case 10:
          Bf(r.type._context);
          break;
        case 22:
        case 23:
          ip();
      }
      n = n.return;
    }
  if (
    ((qe = e),
    (ze = e = mr(e.current, null)),
    (tt = bt = t),
    (Ke = 0),
    (ds = null),
    (np = Xa = Hr = 0),
    (mt = $i = null),
    Lr !== null)
  ) {
    for (t = 0; t < Lr.length; t++)
      if (((n = Lr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Lr = null;
  }
  return e;
}
function Ig(e, t) {
  do {
    var n = ze;
    try {
      if ((Uf(), (Pl.current = la), sa)) {
        for (var r = Oe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        sa = !1;
      }
      if (
        ((Wr = 0),
        (Ye = We = Oe = null),
        (Vi = !1),
        (as = 0),
        (tp.current = null),
        n === null || n.return === null)
      ) {
        (Ke = 1), (ds = t), (ze = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = tt),
          (l.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = em(s);
          if (y !== null) {
            (y.flags &= -257),
              tm(y, s, l, i, t),
              y.mode & 1 && Jh(i, u, t),
              (t = y),
              (a = u);
            var S = t.updateQueue;
            if (S === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Jh(i, u, t), sp();
              break e;
            }
            a = Error(V(426));
          }
        } else if (Me && l.mode & 1) {
          var w = em(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              tm(w, s, l, i, t),
              zf($o(a, l));
            break e;
          }
        }
        (i = a = $o(a, l)),
          Ke !== 4 && (Ke = 2),
          $i === null ? ($i = [i]) : $i.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = xg(i, a, t);
              Gh(i, g);
              break e;
            case 1:
              l = a;
              var h = i.type,
                x = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (x !== null &&
                    typeof x.componentDidCatch == 'function' &&
                    (pr === null || !pr.has(x))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = wg(i, l, t);
                Gh(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Vg(n);
    } catch (C) {
      (t = C), ze === n && n !== null && (ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Lg() {
  var e = aa.current;
  return (aa.current = la), e === null ? la : e;
}
function sp() {
  (Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
    qe === null || (!(Hr & 268435455) && !(Xa & 268435455)) || qn(qe, tt);
}
function da(e, t) {
  var n = he;
  he |= 2;
  var r = Lg();
  (qe !== e || tt !== t) && ((kn = null), zr(e, t));
  do
    try {
      u4();
      break;
    } catch (o) {
      Ig(e, o);
    }
  while (!0);
  if ((Uf(), (he = n), (aa.current = r), ze !== null)) throw Error(V(261));
  return (qe = null), (tt = 0), Ke;
}
function u4() {
  for (; ze !== null; ) Fg(ze);
}
function c4() {
  for (; ze !== null && !Dw(); ) Fg(ze);
}
function Fg(e) {
  var t = $g(e.alternate, e, bt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Vg(e) : (ze = t),
    (tp.current = null);
}
function Vg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = r4(n, t)), n !== null)) {
        (n.flags &= 32767), (ze = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ke = 6), (ze = null);
        return;
      }
    } else if (((n = n4(n, t, bt)), n !== null)) {
      ze = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ze = t;
      return;
    }
    ze = t = e;
  } while (t !== null);
  Ke === 0 && (Ke = 5);
}
function Ar(e, t, n) {
  var r = we,
    o = Ut.transition;
  try {
    (Ut.transition = null), (we = 1), d4(e, t, n, r);
  } finally {
    (Ut.transition = o), (we = r);
  }
  return null;
}
function d4(e, t, n, r) {
  do Po();
  while (tr !== null);
  if (he & 6) throw Error(V(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(V(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Hw(e, i),
    e === qe && ((ze = qe = null), (tt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ll ||
      ((ll = !0),
      Ug(Kl, function () {
        return Po(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ut.transition), (Ut.transition = null);
    var s = we;
    we = 1;
    var l = he;
    (he |= 4),
      (tp.current = null),
      i4(e, n),
      Ag(n, e),
      M3(ud),
      (Zl = !!ad),
      (ud = ad = null),
      (e.current = n),
      s4(n),
      Iw(),
      (he = l),
      (we = s),
      (Ut.transition = i);
  } else e.current = n;
  if (
    (ll && ((ll = !1), (tr = e), (ca = o)),
    (i = e.pendingLanes),
    i === 0 && (pr = null),
    Vw(n.stateNode),
    wt(e, Le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ua) throw ((ua = !1), (e = Pd), (Pd = null), e);
  return (
    ca & 1 && e.tag !== 0 && Po(),
    (i = e.pendingLanes),
    i & 1 ? (e === _d ? Ui++ : ((Ui = 0), (_d = e))) : (Ui = 0),
    Rr(),
    null
  );
}
function Po() {
  if (tr !== null) {
    var e = x1(ca),
      t = Ut.transition,
      n = we;
    try {
      if (((Ut.transition = null), (we = 16 > e ? 16 : e), tr === null))
        var r = !1;
      else {
        if (((e = tr), (tr = null), (ca = 0), he & 6)) throw Error(V(331));
        var o = he;
        for (he |= 4, X = e.current; X !== null; ) {
          var i = X,
            s = i.child;
          if (X.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (X = u; X !== null; ) {
                  var c = X;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zi(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (X = f);
                  else
                    for (; X !== null; ) {
                      c = X;
                      var m = c.sibling,
                        y = c.return;
                      if ((_g(c), c === u)) {
                        X = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (X = m);
                        break;
                      }
                      X = y;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var v = S.child;
                if (v !== null) {
                  S.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              X = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (X = s);
          else
            e: for (; X !== null; ) {
              if (((i = X), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zi(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (X = g);
                break e;
              }
              X = i.return;
            }
        }
        var h = e.current;
        for (X = h; X !== null; ) {
          s = X;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) (x.return = s), (X = x);
          else
            e: for (s = h; X !== null; ) {
              if (((l = X), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ya(9, l);
                  }
                } catch (C) {
                  Ie(l, l.return, C);
                }
              if (l === s) {
                X = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (X = E);
                break e;
              }
              X = l.return;
            }
        }
        if (
          ((he = o), Rr(), yn && typeof yn.onPostCommitFiberRoot == 'function')
        )
          try {
            yn.onPostCommitFiberRoot($a, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (we = n), (Ut.transition = t);
    }
  }
  return !1;
}
function hm(e, t, n) {
  (t = $o(n, t)),
    (t = xg(e, t, 1)),
    (e = fr(e, t, 1)),
    (t = ft()),
    e !== null && (bs(e, 1, t), wt(e, t));
}
function Ie(e, t, n) {
  if (e.tag === 3) hm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (pr === null || !pr.has(r)))
        ) {
          (e = $o(n, e)),
            (e = wg(t, e, 1)),
            (t = fr(t, e, 1)),
            (e = ft()),
            t !== null && (bs(t, 1, e), wt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function f4(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ft()),
    (e.pingedLanes |= e.suspendedLanes & n),
    qe === e &&
      (tt & n) === n &&
      (Ke === 4 || (Ke === 3 && (tt & 130023424) === tt && 500 > Le() - rp)
        ? zr(e, 0)
        : (np |= n)),
    wt(e, t);
}
function zg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Qs), (Qs <<= 1), !(Qs & 130023424) && (Qs = 4194304))
      : (t = 1));
  var n = ft();
  (e = In(e, t)), e !== null && (bs(e, t, n), wt(e, n));
}
function p4(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zg(e, n);
}
function h4(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(V(314));
  }
  r !== null && r.delete(t), zg(e, n);
}
var $g;
$g = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || yt.current) vt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (vt = !1), t4(e, t, n);
      vt = !!(e.flags & 131072);
    }
  else (vt = !1), Me && t.flags & 1048576 && H1(t, ta, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ml(e, t), (e = t.pendingProps);
      var o = Lo(t, lt.current);
      To(t, n), (o = Xf(null, t, r, e, o, n));
      var i = Qf();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xt(r) ? ((i = !0), Jl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Hf(t),
            (o.updater = Za),
            (t.stateNode = o),
            (o._reactInternals = t),
            yd(t, r, e, n),
            (t = Sd(null, t, r, !0, i, n)))
          : ((t.tag = 0), Me && i && Ff(t), ct(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ml(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = v4(r)),
          (e = Xt(r, e)),
          o)
        ) {
          case 0:
            t = wd(null, t, r, e, n);
            break e;
          case 1:
            t = om(null, t, r, e, n);
            break e;
          case 11:
            t = nm(null, t, r, e, n);
            break e;
          case 14:
            t = rm(null, t, r, Xt(r.type, e), n);
            break e;
        }
        throw Error(V(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Xt(r, o)),
        wd(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Xt(r, o)),
        om(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((bg(t), e === null)) throw Error(V(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Q1(e, t),
          oa(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = $o(Error(V(423)), t)), (t = im(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = $o(Error(V(424)), t)), (t = im(e, t, r, n, o));
            break e;
          } else
            for (
              Rt = dr(t.stateNode.containerInfo.firstChild),
                Tt = t,
                Me = !0,
                qt = null,
                n = Y1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Fo(), r === o)) {
            t = Ln(e, t, n);
            break e;
          }
          ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        q1(t),
        e === null && md(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        cd(r, o) ? (s = null) : i !== null && cd(r, i) && (t.flags |= 32),
        Eg(e, t),
        ct(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && md(t), null;
    case 13:
      return Ng(e, t, n);
    case 4:
      return (
        Kf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vo(t, null, r, n)) : ct(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Xt(r, o)),
        nm(e, t, r, o, n)
      );
    case 7:
      return ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Ee(na, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (rn(i.value, s)) {
            if (i.children === o.children && !yt.current) {
              t = Ln(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = jn(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      vd(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(V(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  vd(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        ct(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        To(t, n),
        (o = Bt(o)),
        (r = r(o)),
        (t.flags |= 1),
        ct(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Xt(r, t.pendingProps)),
        (o = Xt(r.type, o)),
        rm(e, t, r, o, n)
      );
    case 15:
      return Sg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Xt(r, o)),
        Ml(e, t),
        (t.tag = 1),
        xt(r) ? ((e = !0), Jl(t)) : (e = !1),
        To(t, n),
        yg(t, r, o),
        yd(t, r, o, n),
        Sd(null, t, r, !0, e, n)
      );
    case 19:
      return kg(e, t, n);
    case 22:
      return Cg(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function Ug(e, t) {
  return m1(e, t);
}
function m4(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function $t(e, t, n, r) {
  return new m4(e, t, n, r);
}
function lp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function v4(e) {
  if (typeof e == 'function') return lp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === kf)) return 11;
    if (e === Rf) return 14;
  }
  return 2;
}
function mr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = $t(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ol(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == 'function')) lp(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case uo:
        return $r(n.children, o, i, t);
      case Nf:
        (s = 8), (o |= 8);
        break;
      case Uc:
        return (
          (e = $t(12, n, t, o | 2)), (e.elementType = Uc), (e.lanes = i), e
        );
      case Bc:
        return (e = $t(13, n, t, o)), (e.elementType = Bc), (e.lanes = i), e;
      case Wc:
        return (e = $t(19, n, t, o)), (e.elementType = Wc), (e.lanes = i), e;
      case qv:
        return Qa(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Xv:
              s = 10;
              break e;
            case Qv:
              s = 9;
              break e;
            case kf:
              s = 11;
              break e;
            case Rf:
              s = 14;
              break e;
            case Zn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(V(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = $t(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function $r(e, t, n, r) {
  return (e = $t(7, e, r, t)), (e.lanes = n), e;
}
function Qa(e, t, n, r) {
  return (
    (e = $t(22, e, r, t)),
    (e.elementType = qv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ju(e, t, n) {
  return (e = $t(6, e, null, t)), (e.lanes = n), e;
}
function ec(e, t, n) {
  return (
    (t = $t(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function g4(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ou(0)),
    (this.expirationTimes = Ou(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ou(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ap(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new g4(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = $t(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Hf(i),
    e
  );
}
function y4(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ao,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Bg(e) {
  if (!e) return xr;
  e = e._reactInternals;
  e: {
    if (qr(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xt(n)) return B1(e, n, t);
  }
  return t;
}
function Wg(e, t, n, r, o, i, s, l, a) {
  return (
    (e = ap(n, r, !0, e, o, i, s, l, a)),
    (e.context = Bg(null)),
    (n = e.current),
    (r = ft()),
    (o = hr(n)),
    (i = jn(r, o)),
    (i.callback = t ?? null),
    fr(n, i, o),
    (e.current.lanes = o),
    bs(e, o, r),
    wt(e, r),
    e
  );
}
function qa(e, t, n, r) {
  var o = t.current,
    i = ft(),
    s = hr(o);
  return (
    (n = Bg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = jn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = fr(o, t, s)),
    e !== null && (en(e, o, s, i), Tl(e, o, s)),
    s
  );
}
function fa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function up(e, t) {
  mm(e, t), (e = e.alternate) && mm(e, t);
}
function x4() {
  return null;
}
var Hg =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function cp(e) {
  this._internalRoot = e;
}
Ja.prototype.render = cp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  qa(e, t, null, null);
};
Ja.prototype.unmount = cp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kr(function () {
      qa(null, e, null, null);
    }),
      (t[Dn] = null);
  }
};
function Ja(e) {
  this._internalRoot = e;
}
Ja.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = C1();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qn.length && t !== 0 && t < Qn[n].priority; n++);
    Qn.splice(n, 0, e), n === 0 && b1(e);
  }
};
function dp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function eu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function vm() {}
function w4(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = fa(s);
        i.call(u);
      };
    }
    var s = Wg(t, r, e, 0, null, !1, !1, '', vm);
    return (
      (e._reactRootContainer = s),
      (e[Dn] = s.current),
      rs(e.nodeType === 8 ? e.parentNode : e),
      Kr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var u = fa(a);
      l.call(u);
    };
  }
  var a = ap(e, 0, !1, null, null, !1, !1, '', vm);
  return (
    (e._reactRootContainer = a),
    (e[Dn] = a.current),
    rs(e.nodeType === 8 ? e.parentNode : e),
    Kr(function () {
      qa(t, a, n, r);
    }),
    a
  );
}
function tu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == 'function') {
      var l = o;
      o = function () {
        var a = fa(s);
        l.call(a);
      };
    }
    qa(t, s, e, o);
  } else s = w4(n, t, e, o, r);
  return fa(s);
}
w1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pi(t.pendingLanes);
        n !== 0 &&
          (_f(t, n | 1), wt(t, Le()), !(he & 6) && ((Uo = Le() + 500), Rr()));
      }
      break;
    case 13:
      Kr(function () {
        var r = In(e, 1);
        if (r !== null) {
          var o = ft();
          en(r, e, 1, o);
        }
      }),
        up(e, 1);
  }
};
Mf = function (e) {
  if (e.tag === 13) {
    var t = In(e, 134217728);
    if (t !== null) {
      var n = ft();
      en(t, e, 134217728, n);
    }
    up(e, 134217728);
  }
};
S1 = function (e) {
  if (e.tag === 13) {
    var t = hr(e),
      n = In(e, t);
    if (n !== null) {
      var r = ft();
      en(n, e, t, r);
    }
    up(e, t);
  }
};
C1 = function () {
  return we;
};
E1 = function (e, t) {
  var n = we;
  try {
    return (we = e), t();
  } finally {
    we = n;
  }
};
ed = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Gc(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ha(r);
            if (!o) throw Error(V(90));
            e1(r), Gc(r, o);
          }
        }
      }
      break;
    case 'textarea':
      n1(e, n);
      break;
    case 'select':
      (t = n.value), t != null && bo(e, !!n.multiple, t, !1);
  }
};
u1 = op;
c1 = Kr;
var S4 = { usingClientEntryPoint: !1, Events: [ks, ho, Ha, l1, a1, op] },
  Ci = {
    findFiberByHostInstance: Ir,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  C4 = {
    bundleType: Ci.bundleType,
    version: Ci.version,
    rendererPackageName: Ci.rendererPackageName,
    rendererConfig: Ci.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = p1(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ci.findFiberByHostInstance || x4,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!al.isDisabled && al.supportsFiber)
    try {
      ($a = al.inject(C4)), (yn = al);
    } catch {}
}
Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = S4;
Mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dp(t)) throw Error(V(200));
  return y4(e, t, null, n);
};
Mt.createRoot = function (e, t) {
  if (!dp(e)) throw Error(V(299));
  var n = !1,
    r = '',
    o = Hg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ap(e, 1, !1, null, null, n, !1, r, o)),
    (e[Dn] = t.current),
    rs(e.nodeType === 8 ? e.parentNode : e),
    new cp(t)
  );
};
Mt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(V(188))
      : ((e = Object.keys(e).join(',')), Error(V(268, e)));
  return (e = p1(t)), (e = e === null ? null : e.stateNode), e;
};
Mt.flushSync = function (e) {
  return Kr(e);
};
Mt.hydrate = function (e, t, n) {
  if (!eu(t)) throw Error(V(200));
  return tu(null, e, t, !0, n);
};
Mt.hydrateRoot = function (e, t, n) {
  if (!dp(e)) throw Error(V(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = Hg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Wg(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Dn] = t.current),
    rs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ja(t);
};
Mt.render = function (e, t, n) {
  if (!eu(t)) throw Error(V(200));
  return tu(null, e, t, !1, n);
};
Mt.unmountComponentAtNode = function (e) {
  if (!eu(e)) throw Error(V(40));
  return e._reactRootContainer
    ? (Kr(function () {
        tu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Dn] = null);
        });
      }),
      !0)
    : !1;
};
Mt.unstable_batchedUpdates = op;
Mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!eu(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return tu(e, t, n, !1, r);
};
Mt.version = '18.3.1-next-f1338f8080-20240426';
function Kg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kg);
    } catch (e) {
      console.error(e);
    }
}
Kg(), (Kv.exports = Mt);
var kt = Kv.exports;
const So = Av(kt);
var Gg,
  gm = kt;
(Gg = gm.createRoot), gm.hydrateRoot;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fs() {
  return (
    (fs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fs.apply(this, arguments)
  );
}
var nr;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(nr || (nr = {}));
const ym = 'popstate';
function E4(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return Ad(
      '',
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : pa(o);
  }
  return N4(t, n, null, e);
}
function $e(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Zg(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function b4() {
  return Math.random().toString(36).substr(2, 8);
}
function xm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ad(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    fs(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? qo(t) : t,
      { state: n, key: (t && t.key) || r || b4() },
    )
  );
}
function pa(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function qo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function N4(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = nr.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), s.replaceState(fs({}, s.state, { idx: u }), ''));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = nr.Pop;
    let w = c(),
      g = w == null ? null : w - u;
    (u = w), a && a({ action: l, location: v.location, delta: g });
  }
  function m(w, g) {
    l = nr.Push;
    let h = Ad(v.location, w, g);
    u = c() + 1;
    let x = xm(h, u),
      E = v.createHref(h);
    try {
      s.pushState(x, '', E);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      o.location.assign(E);
    }
    i && a && a({ action: l, location: v.location, delta: 1 });
  }
  function y(w, g) {
    l = nr.Replace;
    let h = Ad(v.location, w, g);
    u = c();
    let x = xm(h, u),
      E = v.createHref(h);
    s.replaceState(x, '', E),
      i && a && a({ action: l, location: v.location, delta: 0 });
  }
  function S(w) {
    let g = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      h = typeof w == 'string' ? w : pa(w);
    return (
      (h = h.replace(/ $/, '%20')),
      $e(
        g,
        'No window.location.(origin|href) available to create URL for href: ' +
          h,
      ),
      new URL(h, g)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(ym, f),
        (a = w),
        () => {
          o.removeEventListener(ym, f), (a = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: S,
    encodeLocation(w) {
      let g = S(w);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: m,
    replace: y,
    go(w) {
      return s.go(w);
    },
  };
  return v;
}
var wm;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(wm || (wm = {}));
function k4(e, t, n) {
  return n === void 0 && (n = '/'), R4(e, t, n, !1);
}
function R4(e, t, n, r) {
  let o = typeof t == 'string' ? qo(t) : t,
    i = fp(o.pathname || '/', n);
  if (i == null) return null;
  let s = Yg(e);
  T4(s);
  let l = null;
  for (let a = 0; l == null && a < s.length; ++a) {
    let u = V4(i);
    l = L4(s[a], u, r);
  }
  return l;
}
function Yg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, s, l) => {
    let a = {
      relativePath: l === void 0 ? i.path || '' : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    a.relativePath.startsWith('/') &&
      ($e(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = vr([r, a.relativePath]),
      c = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      ($e(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".'),
      ),
      Yg(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: D4(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var l;
      if (i.path === '' || !((l = i.path) != null && l.includes('?'))) o(i, s);
      else for (let a of Xg(i.path)) o(i, s, a);
    }),
    t
  );
}
function Xg(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let s = Xg(r.join('/')),
    l = [];
  return (
    l.push(...s.map((a) => (a === '' ? i : [i, a].join('/')))),
    o && l.push(...s),
    l.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
  );
}
function T4(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : I4(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const P4 = /^:[\w-]+$/,
  _4 = 3,
  M4 = 2,
  j4 = 1,
  A4 = 10,
  O4 = -2,
  Sm = (e) => e === '*';
function D4(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Sm) && (r += O4),
    t && (r += M4),
    n
      .filter((o) => !Sm(o))
      .reduce((o, i) => o + (P4.test(i) ? _4 : i === '' ? j4 : A4), r)
  );
}
function I4(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function L4(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = '/',
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      c = i === '/' ? t : t.slice(i.length) || '/',
      f = Cm(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        c,
      ),
      m = a.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Cm(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          c,
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: vr([i, f.pathname]),
        pathnameBase: B4(vr([i, f.pathnameBase])),
        route: m,
      }),
      f.pathnameBase !== '/' && (i = vr([i, f.pathnameBase]));
  }
  return s;
}
function Cm(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = F4(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, '$1'),
    l = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: m, isOptional: y } = c;
      if (m === '*') {
        let v = l[f] || '';
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, '$1');
      }
      const S = l[f];
      return (
        y && !S ? (u[m] = void 0) : (u[m] = (S || '').replace(/%2F/g, '/')), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function F4(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Zg(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function V4(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Zg(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function fp(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function z4(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? qo(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : $4(n, t)) : t,
    search: W4(r),
    hash: H4(o),
  };
}
function $4(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function tc(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function U4(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Qg(e, t) {
  let n = U4(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function qg(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = qo(e))
    : ((o = fs({}, e)),
      $e(
        !o.pathname || !o.pathname.includes('?'),
        tc('?', 'pathname', 'search', o),
      ),
      $e(
        !o.pathname || !o.pathname.includes('#'),
        tc('#', 'pathname', 'hash', o),
      ),
      $e(!o.search || !o.search.includes('#'), tc('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    s = i ? '/' : o.pathname,
    l;
  if (s == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith('..')) {
      let m = s.split('/');
      for (; m[0] === '..'; ) m.shift(), (f -= 1);
      o.pathname = m.join('/');
    }
    l = f >= 0 ? t[f] : '/';
  }
  let a = z4(o, l),
    u = s && s !== '/' && s.endsWith('/'),
    c = (i || s === '.') && n.endsWith('/');
  return !a.pathname.endsWith('/') && (u || c) && (a.pathname += '/'), a;
}
const vr = (e) => e.join('/').replace(/\/\/+/g, '/'),
  B4 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  W4 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  H4 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function K4(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Jg = ['post', 'put', 'patch', 'delete'];
new Set(Jg);
const G4 = ['get', ...Jg];
new Set(G4);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ps() {
  return (
    (ps = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ps.apply(this, arguments)
  );
}
const pp = d.createContext(null),
  Z4 = d.createContext(null),
  Jr = d.createContext(null),
  nu = d.createContext(null),
  Tr = d.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  e0 = d.createContext(null);
function Y4(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ts() || $e(!1);
  let { basename: r, navigator: o } = d.useContext(Jr),
    { hash: i, pathname: s, search: l } = r0(e, { relative: n }),
    a = s;
  return (
    r !== '/' && (a = s === '/' ? r : vr([r, s])),
    o.createHref({ pathname: a, search: l, hash: i })
  );
}
function Ts() {
  return d.useContext(nu) != null;
}
function Jo() {
  return Ts() || $e(!1), d.useContext(nu).location;
}
function t0(e) {
  d.useContext(Jr).static || d.useLayoutEffect(e);
}
function n0() {
  let { isDataRoute: e } = d.useContext(Tr);
  return e ? uS() : X4();
}
function X4() {
  Ts() || $e(!1);
  let e = d.useContext(pp),
    { basename: t, future: n, navigator: r } = d.useContext(Jr),
    { matches: o } = d.useContext(Tr),
    { pathname: i } = Jo(),
    s = JSON.stringify(Qg(o, n.v7_relativeSplatPath)),
    l = d.useRef(!1);
  return (
    t0(() => {
      l.current = !0;
    }),
    d.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let f = qg(u, JSON.parse(s), i, c.relative === 'path');
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : vr([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, i, e],
    )
  );
}
function Q4() {
  let { matches: e } = d.useContext(Tr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function r0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = d.useContext(Jr),
    { matches: o } = d.useContext(Tr),
    { pathname: i } = Jo(),
    s = JSON.stringify(Qg(o, r.v7_relativeSplatPath));
  return d.useMemo(() => qg(e, JSON.parse(s), i, n === 'path'), [e, s, i, n]);
}
function q4(e, t) {
  return J4(e, t);
}
function J4(e, t, n, r) {
  Ts() || $e(!1);
  let { navigator: o } = d.useContext(Jr),
    { matches: i } = d.useContext(Tr),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : '/';
  s && s.route;
  let u = Jo(),
    c;
  if (t) {
    var f;
    let w = typeof t == 'string' ? qo(t) : t;
    a === '/' || ((f = w.pathname) != null && f.startsWith(a)) || $e(!1),
      (c = w);
  } else c = u;
  let m = c.pathname || '/',
    y = m;
  if (a !== '/') {
    let w = a.replace(/^\//, '').split('/');
    y = '/' + m.replace(/^\//, '').split('/').slice(w.length).join('/');
  }
  let S = k4(e, { pathname: y }),
    v = oS(
      S &&
        S.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: vr([
              a,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === '/'
                ? a
                : vr([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && v
    ? d.createElement(
        nu.Provider,
        {
          value: {
            location: ps(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              c,
            ),
            navigationType: nr.Pop,
          },
        },
        v,
      )
    : v;
}
function eS() {
  let e = aS(),
    t = K4(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return d.createElement(
    d.Fragment,
    null,
    d.createElement('h2', null, 'Unexpected Application Error!'),
    d.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? d.createElement('pre', { style: o }, n) : null,
    null,
  );
}
const tS = d.createElement(eS, null);
class nS extends d.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? d.createElement(
          Tr.Provider,
          { value: this.props.routeContext },
          d.createElement(e0.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function rS(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = d.useContext(pp);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    d.createElement(Tr.Provider, { value: t }, r)
  );
}
function oS(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let c = s.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0,
    );
    c >= 0 || $e(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: m, errors: y } = n,
          S =
            f.route.loader &&
            m[f.route.id] === void 0 &&
            (!y || y[f.route.id] === void 0);
        if (f.route.lazy || S) {
          (a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, m) => {
    let y,
      S = !1,
      v = null,
      w = null;
    n &&
      ((y = l && f.route.id ? l[f.route.id] : void 0),
      (v = f.route.errorElement || tS),
      a &&
        (u < 0 && m === 0
          ? ((S = !0), (w = null))
          : u === m &&
            ((S = !0), (w = f.route.hydrateFallbackElement || null))));
    let g = t.concat(s.slice(0, m + 1)),
      h = () => {
        let x;
        return (
          y
            ? (x = v)
            : S
              ? (x = w)
              : f.route.Component
                ? (x = d.createElement(f.route.Component, null))
                : f.route.element
                  ? (x = f.route.element)
                  : (x = c),
          d.createElement(rS, {
            match: f,
            routeContext: { outlet: c, matches: g, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? d.createElement(nS, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: y,
          children: h(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var o0 = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(o0 || {}),
  ha = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(ha || {});
function iS(e) {
  let t = d.useContext(pp);
  return t || $e(!1), t;
}
function sS(e) {
  let t = d.useContext(Z4);
  return t || $e(!1), t;
}
function lS(e) {
  let t = d.useContext(Tr);
  return t || $e(!1), t;
}
function i0(e) {
  let t = lS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || $e(!1), n.route.id;
}
function aS() {
  var e;
  let t = d.useContext(e0),
    n = sS(ha.UseRouteError),
    r = i0(ha.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function uS() {
  let { router: e } = iS(o0.UseNavigateStable),
    t = i0(ha.UseNavigateStable),
    n = d.useRef(!1);
  return (
    t0(() => {
      n.current = !0;
    }),
    d.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, ps({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function Or(e) {
  $e(!1);
}
function cS(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = nr.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e;
  Ts() && $e(!1);
  let a = t.replace(/^\/*/, '/'),
    u = d.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: s,
        future: ps({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, i, s],
    );
  typeof r == 'string' && (r = qo(r));
  let {
      pathname: c = '/',
      search: f = '',
      hash: m = '',
      state: y = null,
      key: S = 'default',
    } = r,
    v = d.useMemo(() => {
      let w = fp(c, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: m, state: y, key: S },
            navigationType: o,
          };
    }, [a, c, f, m, y, S, o]);
  return v == null
    ? null
    : d.createElement(
        Jr.Provider,
        { value: u },
        d.createElement(nu.Provider, { children: n, value: v }),
      );
}
function dS(e) {
  let { children: t, location: n } = e;
  return q4(Od(t), n);
}
new Promise(() => {});
function Od(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    d.Children.forEach(e, (r, o) => {
      if (!d.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === d.Fragment) {
        n.push.apply(n, Od(r.props.children, i));
        return;
      }
      r.type !== Or && $e(!1), !r.props.index || !r.props.children || $e(!1);
      let s = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Od(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Dd() {
  return (
    (Dd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Dd.apply(this, arguments)
  );
}
function fS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function pS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function hS(e, t) {
  return e.button === 0 && (!t || t === '_self') && !pS(e);
}
const mS = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  vS = '6';
try {
  window.__reactRouterVersion = vS;
} catch {}
const gS = 'startTransition',
  Em = Wv[gS];
function yS(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = d.useRef();
  i.current == null && (i.current = E4({ window: o, v5Compat: !0 }));
  let s = i.current,
    [l, a] = d.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = d.useCallback(
      (f) => {
        u && Em ? Em(() => a(f)) : a(f);
      },
      [a, u],
    );
  return (
    d.useLayoutEffect(() => s.listen(c), [s, c]),
    d.createElement(cS, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
const xS =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  wS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Co = d.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: l,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      m = fS(t, mS),
      { basename: y } = d.useContext(Jr),
      S,
      v = !1;
    if (typeof u == 'string' && wS.test(u) && ((S = u), xS))
      try {
        let x = new URL(window.location.href),
          E = u.startsWith('//') ? new URL(x.protocol + u) : new URL(u),
          C = fp(E.pathname, y);
        E.origin === x.origin && C != null
          ? (u = C + E.search + E.hash)
          : (v = !0);
      } catch {}
    let w = Y4(u, { relative: o }),
      g = SS(u, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: f,
      });
    function h(x) {
      r && r(x), x.defaultPrevented || g(x);
    }
    return d.createElement(
      'a',
      Dd({}, m, { href: S || w, onClick: v || i ? r : h, ref: n, target: a }),
    );
  });
var bm;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(bm || (bm = {}));
var Nm;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Nm || (Nm = {}));
function SS(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    a = n0(),
    u = Jo(),
    c = r0(e, { relative: s });
  return d.useCallback(
    (f) => {
      if (hS(f, n)) {
        f.preventDefault();
        let m = r !== void 0 ? r : pa(u) === pa(c);
        a(e, {
          replace: m,
          state: o,
          preventScrollReset: i,
          relative: s,
          unstable_viewTransition: l,
        });
      }
    },
    [u, a, c, r, o, n, e, i, s, l],
  );
}
var Ps = (e) => e.type === 'checkbox',
  Eo = (e) => e instanceof Date,
  dt = (e) => e == null;
const s0 = (e) => typeof e == 'object';
var Ue = (e) => !dt(e) && !Array.isArray(e) && s0(e) && !Eo(e),
  l0 = (e) =>
    Ue(e) && e.target ? (Ps(e.target) ? e.target.checked : e.target.value) : e,
  CS = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  a0 = (e, t) => e.has(CS(t)),
  ES = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return Ue(t) && t.hasOwnProperty('isPrototypeOf');
  },
  hp =
    typeof window < 'u' &&
    typeof window.HTMLElement < 'u' &&
    typeof document < 'u';
function Be(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(hp && (e instanceof Blob || e instanceof FileList)) &&
    (n || Ue(e))
  )
    if (((t = n ? [] : {}), !n && !ES(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = Be(e[r]));
  else return e;
  return t;
}
var _s = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Ce = (e) => e === void 0,
  $ = (e, t, n) => {
    if (!t || !Ue(e)) return n;
    const r = _s(t.split(/[,[\].]+?/)).reduce((o, i) => (dt(o) ? o : o[i]), e);
    return Ce(r) || r === e ? (Ce(e[t]) ? n : e[t]) : r;
  },
  Dt = (e) => typeof e == 'boolean',
  mp = (e) => /^\w*$/.test(e),
  u0 = (e) => _s(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
  ye = (e, t, n) => {
    let r = -1;
    const o = mp(t) ? [t] : u0(t),
      i = o.length,
      s = i - 1;
    for (; ++r < i; ) {
      const l = o[r];
      let a = n;
      if (r !== s) {
        const u = e[l];
        a = Ue(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
      }
      if (l === '__proto__') return;
      (e[l] = a), (e = e[l]);
    }
    return e;
  };
const ma = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  zt = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  En = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  c0 = I.createContext(null),
  Ms = () => I.useContext(c0),
  bS = (e) => {
    const { children: t, ...n } = e;
    return I.createElement(c0.Provider, { value: n }, t);
  };
var d0 = (e, t, n, r = !0) => {
    const o = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(o, i, {
        get: () => {
          const s = i;
          return (
            t._proxyFormState[s] !== zt.all &&
              (t._proxyFormState[s] = !r || zt.all),
            n && (n[s] = !0),
            e[s]
          );
        },
      });
    return o;
  },
  ut = (e) => Ue(e) && !Object.keys(e).length,
  f0 = (e, t, n, r) => {
    n(e);
    const { name: o, ...i } = e;
    return (
      ut(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((s) => t[s] === (!r || zt.all))
    );
  },
  gt = (e) => (Array.isArray(e) ? e : [e]),
  p0 = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    gt(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function ru(e) {
  const t = I.useRef(e);
  (t.current = e),
    I.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function NS(e) {
  const t = Ms(),
    { control: n = t.control, disabled: r, name: o, exact: i } = e || {},
    [s, l] = I.useState(n._formState),
    a = I.useRef(!0),
    u = I.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    c = I.useRef(o);
  return (
    (c.current = o),
    ru({
      disabled: r,
      next: (f) =>
        a.current &&
        p0(c.current, f.name, i) &&
        f0(f, u.current, n._updateFormState) &&
        l({ ...n._formState, ...f }),
      subject: n._subjects.state,
    }),
    I.useEffect(
      () => (
        (a.current = !0),
        u.current.isValid && n._updateValid(!0),
        () => {
          a.current = !1;
        }
      ),
      [n],
    ),
    d0(s, n, u.current, !1)
  );
}
var gn = (e) => typeof e == 'string',
  h0 = (e, t, n, r, o) =>
    gn(e)
      ? (r && t.watch.add(e), $(n, e, o))
      : Array.isArray(e)
        ? e.map((i) => (r && t.watch.add(i), $(n, i)))
        : (r && (t.watchAll = !0), n);
function kS(e) {
  const t = Ms(),
    {
      control: n = t.control,
      name: r,
      defaultValue: o,
      disabled: i,
      exact: s,
    } = e || {},
    l = I.useRef(r);
  (l.current = r),
    ru({
      disabled: i,
      subject: n._subjects.values,
      next: (c) => {
        p0(l.current, c.name, s) &&
          u(Be(h0(l.current, n._names, c.values || n._formValues, !1, o)));
      },
    });
  const [a, u] = I.useState(n._getWatch(r, o));
  return I.useEffect(() => n._removeUnmounted()), a;
}
function RS(e) {
  const t = Ms(),
    { name: n, disabled: r, control: o = t.control, shouldUnregister: i } = e,
    s = a0(o._names.array, n),
    l = kS({
      control: o,
      name: n,
      defaultValue: $(o._formValues, n, $(o._defaultValues, n, e.defaultValue)),
      exact: !0,
    }),
    a = NS({ control: o, name: n, exact: !0 }),
    u = I.useRef(
      o.register(n, {
        ...e.rules,
        value: l,
        ...(Dt(e.disabled) ? { disabled: e.disabled } : {}),
      }),
    );
  return (
    I.useEffect(() => {
      const c = o._options.shouldUnregister || i,
        f = (m, y) => {
          const S = $(o._fields, m);
          S && S._f && (S._f.mount = y);
        };
      if ((f(n, !0), c)) {
        const m = Be($(o._options.defaultValues, n));
        ye(o._defaultValues, n, m),
          Ce($(o._formValues, n)) && ye(o._formValues, n, m);
      }
      return () => {
        (s ? c && !o._state.action : c) ? o.unregister(n) : f(n, !1);
      };
    }, [n, o, s, i]),
    I.useEffect(() => {
      $(o._fields, n) &&
        o._updateDisabledField({
          disabled: r,
          fields: o._fields,
          name: n,
          value: $(o._fields, n)._f.value,
        });
    }, [r, n, o]),
    {
      field: {
        name: n,
        value: l,
        ...(Dt(r) || a.disabled ? { disabled: a.disabled || r } : {}),
        onChange: I.useCallback(
          (c) =>
            u.current.onChange({
              target: { value: l0(c), name: n },
              type: ma.CHANGE,
            }),
          [n],
        ),
        onBlur: I.useCallback(
          () =>
            u.current.onBlur({
              target: { value: $(o._formValues, n), name: n },
              type: ma.BLUR,
            }),
          [n, o],
        ),
        ref: I.useCallback(
          (c) => {
            const f = $(o._fields, n);
            f &&
              c &&
              (f._f.ref = {
                focus: () => c.focus(),
                select: () => c.select(),
                setCustomValidity: (m) => c.setCustomValidity(m),
                reportValidity: () => c.reportValidity(),
              });
          },
          [o._fields, n],
        ),
      },
      formState: a,
      fieldState: Object.defineProperties(
        {},
        {
          invalid: { enumerable: !0, get: () => !!$(a.errors, n) },
          isDirty: { enumerable: !0, get: () => !!$(a.dirtyFields, n) },
          isTouched: { enumerable: !0, get: () => !!$(a.touchedFields, n) },
          isValidating: {
            enumerable: !0,
            get: () => !!$(a.validatingFields, n),
          },
          error: { enumerable: !0, get: () => $(a.errors, n) },
        },
      ),
    }
  );
}
const TS = (e) => e.render(RS(e));
var m0 = (e, t, n, r, o) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: o || !0 },
        }
      : {},
  Wn = () => {
    const e = typeof performance > 'u' ? Date.now() : performance.now() * 1e3;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (t) => {
      const n = (Math.random() * 16 + e) % 16 | 0;
      return (t == 'x' ? n : (n & 3) | 8).toString(16);
    });
  },
  nc = (e, t, n = {}) =>
    n.shouldFocus || Ce(n.shouldFocus)
      ? n.focusName || `${e}.${Ce(n.focusIndex) ? t : n.focusIndex}.`
      : '',
  Bi = (e) => ({
    isOnSubmit: !e || e === zt.onSubmit,
    isOnBlur: e === zt.onBlur,
    isOnChange: e === zt.onChange,
    isOnAll: e === zt.all,
    isOnTouch: e === zt.onTouched,
  }),
  Id = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)),
      ));
const _o = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const i = $(e, o);
    if (i) {
      const { _f: s, ...l } = i;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], o) && !r) return !0;
        if (s.ref && t(s.ref, s.name) && !r) return !0;
        if (_o(l, t)) break;
      } else if (Ue(l) && _o(l, t)) break;
    }
  }
};
var v0 = (e, t, n) => {
    const r = gt($(e, n));
    return ye(r, 'root', t[n]), ye(e, n, r), e;
  },
  vp = (e) => e.type === 'file',
  Mn = (e) => typeof e == 'function',
  va = (e) => {
    if (!hp) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Dl = (e) => gn(e),
  gp = (e) => e.type === 'radio',
  ga = (e) => e instanceof RegExp;
const km = { value: !1, isValid: !1 },
  Rm = { value: !0, isValid: !0 };
var g0 = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Ce(e[0].attributes.value)
        ? Ce(e[0].value) || e[0].value === ''
          ? Rm
          : { value: e[0].value, isValid: !0 }
        : Rm
      : km;
  }
  return km;
};
const Tm = { isValid: !1, value: null };
var y0 = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        Tm,
      )
    : Tm;
function Pm(e, t, n = 'validate') {
  if (Dl(e) || (Array.isArray(e) && e.every(Dl)) || (Dt(e) && !e))
    return { type: n, message: Dl(e) ? e : '', ref: t };
}
var ro = (e) => (Ue(e) && !ga(e) ? e : { value: e, message: '' }),
  Ld = async (e, t, n, r, o) => {
    const {
        ref: i,
        refs: s,
        required: l,
        maxLength: a,
        minLength: u,
        min: c,
        max: f,
        pattern: m,
        validate: y,
        name: S,
        valueAsNumber: v,
        mount: w,
        disabled: g,
      } = e._f,
      h = $(t, S);
    if (!w || g) return {};
    const x = s ? s[0] : i,
      E = (A) => {
        r &&
          x.reportValidity &&
          (x.setCustomValidity(Dt(A) ? '' : A || ''), x.reportValidity());
      },
      C = {},
      b = gp(i),
      N = Ps(i),
      R = b || N,
      _ =
        ((v || vp(i)) && Ce(i.value) && Ce(h)) ||
        (va(i) && i.value === '') ||
        h === '' ||
        (Array.isArray(h) && !h.length),
      j = m0.bind(null, S, n, C),
      F = (A, D, O, Z = En.maxLength, H = En.minLength) => {
        const W = A ? D : O;
        C[S] = { type: A ? Z : H, message: W, ref: i, ...j(A ? Z : H, W) };
      };
    if (
      o
        ? !Array.isArray(h) || !h.length
        : l &&
          ((!R && (_ || dt(h))) ||
            (Dt(h) && !h) ||
            (N && !g0(s).isValid) ||
            (b && !y0(s).isValid))
    ) {
      const { value: A, message: D } = Dl(l)
        ? { value: !!l, message: l }
        : ro(l);
      if (
        A &&
        ((C[S] = {
          type: En.required,
          message: D,
          ref: x,
          ...j(En.required, D),
        }),
        !n)
      )
        return E(D), C;
    }
    if (!_ && (!dt(c) || !dt(f))) {
      let A, D;
      const O = ro(f),
        Z = ro(c);
      if (!dt(h) && !isNaN(h)) {
        const H = i.valueAsNumber || (h && +h);
        dt(O.value) || (A = H > O.value), dt(Z.value) || (D = H < Z.value);
      } else {
        const H = i.valueAsDate || new Date(h),
          W = (K) => new Date(new Date().toDateString() + ' ' + K),
          M = i.type == 'time',
          L = i.type == 'week';
        gn(O.value) &&
          h &&
          (A = M ? W(h) > W(O.value) : L ? h > O.value : H > new Date(O.value)),
          gn(Z.value) &&
            h &&
            (D = M
              ? W(h) < W(Z.value)
              : L
                ? h < Z.value
                : H < new Date(Z.value));
      }
      if ((A || D) && (F(!!A, O.message, Z.message, En.max, En.min), !n))
        return E(C[S].message), C;
    }
    if ((a || u) && !_ && (gn(h) || (o && Array.isArray(h)))) {
      const A = ro(a),
        D = ro(u),
        O = !dt(A.value) && h.length > +A.value,
        Z = !dt(D.value) && h.length < +D.value;
      if ((O || Z) && (F(O, A.message, D.message), !n))
        return E(C[S].message), C;
    }
    if (m && !_ && gn(h)) {
      const { value: A, message: D } = ro(m);
      if (
        ga(A) &&
        !h.match(A) &&
        ((C[S] = { type: En.pattern, message: D, ref: i, ...j(En.pattern, D) }),
        !n)
      )
        return E(D), C;
    }
    if (y) {
      if (Mn(y)) {
        const A = await y(h, t),
          D = Pm(A, x);
        if (D && ((C[S] = { ...D, ...j(En.validate, D.message) }), !n))
          return E(D.message), C;
      } else if (Ue(y)) {
        let A = {};
        for (const D in y) {
          if (!ut(A) && !n) break;
          const O = Pm(await y[D](h, t), x, D);
          O &&
            ((A = { ...O, ...j(D, O.message) }), E(O.message), n && (C[S] = A));
        }
        if (!ut(A) && ((C[S] = { ref: x, ...A }), !n)) return C;
      }
    }
    return E(!0), C;
  },
  rc = (e, t) => [...e, ...gt(t)],
  oc = (e) => (Array.isArray(e) ? e.map(() => {}) : void 0);
function ic(e, t, n) {
  return [...e.slice(0, t), ...gt(n), ...e.slice(t)];
}
var sc = (e, t, n) =>
    Array.isArray(e)
      ? (Ce(e[n]) && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]), e)
      : [],
  lc = (e, t) => [...gt(t), ...gt(e)];
function PS(e, t) {
  let n = 0;
  const r = [...e];
  for (const o of t) r.splice(o - n, 1), n++;
  return _s(r).length ? r : [];
}
var ac = (e, t) =>
    Ce(t)
      ? []
      : PS(
          e,
          gt(t).sort((n, r) => n - r),
        ),
  uc = (e, t, n) => {
    [e[t], e[n]] = [e[n], e[t]];
  };
function _S(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = Ce(e) ? r++ : e[t[r++]];
  return e;
}
function MS(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Ce(e[t])) return !1;
  return !0;
}
function Fe(e, t) {
  const n = Array.isArray(t) ? t : mp(t) ? [t] : u0(t),
    r = n.length === 1 ? e : _S(e, n),
    o = n.length - 1,
    i = n[o];
  return (
    r && delete r[i],
    o !== 0 &&
      ((Ue(r) && ut(r)) || (Array.isArray(r) && MS(r))) &&
      Fe(e, n.slice(0, -1)),
    e
  );
}
var _m = (e, t, n) => ((e[t] = n), e);
function jS(e) {
  const t = Ms(),
    {
      control: n = t.control,
      name: r,
      keyName: o = 'id',
      shouldUnregister: i,
    } = e,
    [s, l] = I.useState(n._getFieldArray(r)),
    a = I.useRef(n._getFieldArray(r).map(Wn)),
    u = I.useRef(s),
    c = I.useRef(r),
    f = I.useRef(!1);
  (c.current = r),
    (u.current = s),
    n._names.array.add(r),
    e.rules && n.register(r, e.rules),
    ru({
      next: ({ values: C, name: b }) => {
        if (b === c.current || !b) {
          const N = $(C, c.current);
          Array.isArray(N) && (l(N), (a.current = N.map(Wn)));
        }
      },
      subject: n._subjects.array,
    });
  const m = I.useCallback(
      (C) => {
        (f.current = !0), n._updateFieldArray(r, C);
      },
      [n, r],
    ),
    y = (C, b) => {
      const N = gt(Be(C)),
        R = rc(n._getFieldArray(r), N);
      (n._names.focus = nc(r, R.length - 1, b)),
        (a.current = rc(a.current, N.map(Wn))),
        m(R),
        l(R),
        n._updateFieldArray(r, R, rc, { argA: oc(C) });
    },
    S = (C, b) => {
      const N = gt(Be(C)),
        R = lc(n._getFieldArray(r), N);
      (n._names.focus = nc(r, 0, b)),
        (a.current = lc(a.current, N.map(Wn))),
        m(R),
        l(R),
        n._updateFieldArray(r, R, lc, { argA: oc(C) });
    },
    v = (C) => {
      const b = ac(n._getFieldArray(r), C);
      (a.current = ac(a.current, C)),
        m(b),
        l(b),
        n._updateFieldArray(r, b, ac, { argA: C });
    },
    w = (C, b, N) => {
      const R = gt(Be(b)),
        _ = ic(n._getFieldArray(r), C, R);
      (n._names.focus = nc(r, C, N)),
        (a.current = ic(a.current, C, R.map(Wn))),
        m(_),
        l(_),
        n._updateFieldArray(r, _, ic, { argA: C, argB: oc(b) });
    },
    g = (C, b) => {
      const N = n._getFieldArray(r);
      uc(N, C, b),
        uc(a.current, C, b),
        m(N),
        l(N),
        n._updateFieldArray(r, N, uc, { argA: C, argB: b }, !1);
    },
    h = (C, b) => {
      const N = n._getFieldArray(r);
      sc(N, C, b),
        sc(a.current, C, b),
        m(N),
        l(N),
        n._updateFieldArray(r, N, sc, { argA: C, argB: b }, !1);
    },
    x = (C, b) => {
      const N = Be(b),
        R = _m(n._getFieldArray(r), C, N);
      (a.current = [...R].map((_, j) => (!_ || j === C ? Wn() : a.current[j]))),
        m(R),
        l([...R]),
        n._updateFieldArray(r, R, _m, { argA: C, argB: N }, !0, !1);
    },
    E = (C) => {
      const b = gt(Be(C));
      (a.current = b.map(Wn)),
        m([...b]),
        l([...b]),
        n._updateFieldArray(r, [...b], (N) => N, {}, !0, !1);
    };
  return (
    I.useEffect(() => {
      if (
        ((n._state.action = !1),
        Id(r, n._names) && n._subjects.state.next({ ...n._formState }),
        f.current &&
          (!Bi(n._options.mode).isOnSubmit || n._formState.isSubmitted))
      )
        if (n._options.resolver)
          n._executeSchema([r]).then((C) => {
            const b = $(C.errors, r),
              N = $(n._formState.errors, r);
            (N
              ? (!b && N.type) ||
                (b && (N.type !== b.type || N.message !== b.message))
              : b && b.type) &&
              (b ? ye(n._formState.errors, r, b) : Fe(n._formState.errors, r),
              n._subjects.state.next({ errors: n._formState.errors }));
          });
        else {
          const C = $(n._fields, r);
          C &&
            C._f &&
            !(
              Bi(n._options.reValidateMode).isOnSubmit &&
              Bi(n._options.mode).isOnSubmit
            ) &&
            Ld(
              C,
              n._formValues,
              n._options.criteriaMode === zt.all,
              n._options.shouldUseNativeValidation,
              !0,
            ).then(
              (b) =>
                !ut(b) &&
                n._subjects.state.next({
                  errors: v0(n._formState.errors, b, r),
                }),
            );
        }
      n._subjects.values.next({ name: r, values: { ...n._formValues } }),
        n._names.focus &&
          _o(n._fields, (C, b) => {
            if (n._names.focus && b.startsWith(n._names.focus) && C.focus)
              return C.focus(), 1;
          }),
        (n._names.focus = ''),
        n._updateValid(),
        (f.current = !1);
    }, [s, r, n]),
    I.useEffect(
      () => (
        !$(n._formValues, r) && n._updateFieldArray(r),
        () => {
          (n._options.shouldUnregister || i) && n.unregister(r);
        }
      ),
      [r, n, o, i],
    ),
    {
      swap: I.useCallback(g, [m, r, n]),
      move: I.useCallback(h, [m, r, n]),
      prepend: I.useCallback(S, [m, r, n]),
      append: I.useCallback(y, [m, r, n]),
      remove: I.useCallback(v, [m, r, n]),
      insert: I.useCallback(w, [m, r, n]),
      update: I.useCallback(x, [m, r, n]),
      replace: I.useCallback(E, [m, r, n]),
      fields: I.useMemo(
        () => s.map((C, b) => ({ ...C, [o]: a.current[b] || Wn() })),
        [s, o],
      ),
    }
  );
}
var cc = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (o) => {
        for (const i of e) i.next && i.next(o);
      },
      subscribe: (o) => (
        e.push(o),
        {
          unsubscribe: () => {
            e = e.filter((i) => i !== o);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  ya = (e) => dt(e) || !s0(e);
function Jn(e, t) {
  if (ya(e) || ya(t)) return e === t;
  if (Eo(e) && Eo(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n) {
    const i = e[o];
    if (!r.includes(o)) return !1;
    if (o !== 'ref') {
      const s = t[o];
      if (
        (Eo(i) && Eo(s)) ||
        (Ue(i) && Ue(s)) ||
        (Array.isArray(i) && Array.isArray(s))
          ? !Jn(i, s)
          : i !== s
      )
        return !1;
    }
  }
  return !0;
}
var x0 = (e) => e.type === 'select-multiple',
  AS = (e) => gp(e) || Ps(e),
  dc = (e) => va(e) && e.isConnected,
  w0 = (e) => {
    for (const t in e) if (Mn(e[t])) return !0;
    return !1;
  };
function xa(e, t = {}) {
  const n = Array.isArray(e);
  if (Ue(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (Ue(e[r]) && !w0(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), xa(e[r], t[r]))
        : dt(e[r]) || (t[r] = !0);
  return t;
}
function S0(e, t, n) {
  const r = Array.isArray(e);
  if (Ue(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || (Ue(e[o]) && !w0(e[o]))
        ? Ce(t) || ya(n[o])
          ? (n[o] = Array.isArray(e[o]) ? xa(e[o], []) : { ...xa(e[o]) })
          : S0(e[o], dt(t) ? {} : t[o], n[o])
        : (n[o] = !Jn(e[o], t[o]));
  return n;
}
var ul = (e, t) => S0(e, t, xa(t)),
  C0 = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    Ce(e)
      ? e
      : t
        ? e === ''
          ? NaN
          : e && +e
        : n && gn(e)
          ? new Date(e)
          : r
            ? r(e)
            : e;
function fc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return vp(t)
      ? t.files
      : gp(t)
        ? y0(e.refs).value
        : x0(t)
          ? [...t.selectedOptions].map(({ value: n }) => n)
          : Ps(t)
            ? g0(e.refs).value
            : C0(Ce(t.value) ? e.ref.value : t.value, e);
}
var OS = (e, t, n, r) => {
    const o = {};
    for (const i of e) {
      const s = $(t, i);
      s && ye(o, i, s._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: r,
    };
  },
  Ei = (e) =>
    Ce(e)
      ? e
      : ga(e)
        ? e.source
        : Ue(e)
          ? ga(e.value)
            ? e.value.source
            : e.value
          : e;
const Mm = 'AsyncFunction';
var DS = (e) =>
    (!e || !e.validate) &&
    !!(
      (Mn(e.validate) && e.validate.constructor.name === Mm) ||
      (Ue(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === Mm))
    ),
  IS = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function jm(e, t, n) {
  const r = $(e, n);
  if (r || mp(n)) return { error: r, name: n };
  const o = n.split('.');
  for (; o.length; ) {
    const i = o.join('.'),
      s = $(t, i),
      l = $(e, i);
    if (s && !Array.isArray(s) && n !== i) return { name: n };
    if (l && l.type) return { name: i, error: l };
    o.pop();
  }
  return { name: n };
}
var LS = (e, t, n, r, o) =>
    o.isOnAll
      ? !1
      : !n && o.isOnTouch
        ? !(t || e)
        : (n ? r.isOnBlur : o.isOnBlur)
          ? !e
          : (n ? r.isOnChange : o.isOnChange)
            ? e
            : !0,
  FS = (e, t) => !_s($(e, t)).length && Fe(e, t);
const VS = {
  mode: zt.onSubmit,
  reValidateMode: zt.onChange,
  shouldFocusError: !0,
};
function zS(e = {}) {
  let t = { ...VS, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Mn(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    o =
      Ue(t.defaultValues) || Ue(t.values)
        ? Be(t.defaultValues || t.values) || {}
        : {},
    i = t.shouldUnregister ? {} : Be(o),
    s = { action: !1, mount: !1, watch: !1 },
    l = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    a,
    u = 0;
  const c = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    f = { values: cc(), array: cc(), state: cc() },
    m = Bi(t.mode),
    y = Bi(t.reValidateMode),
    S = t.criteriaMode === zt.all,
    v = (k) => (T) => {
      clearTimeout(u), (u = setTimeout(k, T));
    },
    w = async (k) => {
      if (c.isValid || k) {
        const T = t.resolver ? ut((await R()).errors) : await j(r, !0);
        T !== n.isValid && f.state.next({ isValid: T });
      }
    },
    g = (k, T) => {
      (c.isValidating || c.validatingFields) &&
        ((k || Array.from(l.mount)).forEach((P) => {
          P && (T ? ye(n.validatingFields, P, T) : Fe(n.validatingFields, P));
        }),
        f.state.next({
          validatingFields: n.validatingFields,
          isValidating: !ut(n.validatingFields),
        }));
    },
    h = (k, T = [], P, B, U = !0, z = !0) => {
      if (B && P) {
        if (((s.action = !0), z && Array.isArray($(r, k)))) {
          const G = P($(r, k), B.argA, B.argB);
          U && ye(r, k, G);
        }
        if (z && Array.isArray($(n.errors, k))) {
          const G = P($(n.errors, k), B.argA, B.argB);
          U && ye(n.errors, k, G), FS(n.errors, k);
        }
        if (c.touchedFields && z && Array.isArray($(n.touchedFields, k))) {
          const G = P($(n.touchedFields, k), B.argA, B.argB);
          U && ye(n.touchedFields, k, G);
        }
        c.dirtyFields && (n.dirtyFields = ul(o, i)),
          f.state.next({
            name: k,
            isDirty: A(k, T),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else ye(i, k, T);
    },
    x = (k, T) => {
      ye(n.errors, k, T), f.state.next({ errors: n.errors });
    },
    E = (k) => {
      (n.errors = k), f.state.next({ errors: n.errors, isValid: !1 });
    },
    C = (k, T, P, B) => {
      const U = $(r, k);
      if (U) {
        const z = $(i, k, Ce(P) ? $(o, k) : P);
        Ce(z) || (B && B.defaultChecked) || T
          ? ye(i, k, T ? z : fc(U._f))
          : Z(k, z),
          s.mount && w();
      }
    },
    b = (k, T, P, B, U) => {
      let z = !1,
        G = !1;
      const re = { name: k },
        _e = !!($(r, k) && $(r, k)._f && $(r, k)._f.disabled);
      if (!P || B) {
        c.isDirty &&
          ((G = n.isDirty),
          (n.isDirty = re.isDirty = A()),
          (z = G !== re.isDirty));
        const Se = _e || Jn($(o, k), T);
        (G = !!(!_e && $(n.dirtyFields, k))),
          Se || _e ? Fe(n.dirtyFields, k) : ye(n.dirtyFields, k, !0),
          (re.dirtyFields = n.dirtyFields),
          (z = z || (c.dirtyFields && G !== !Se));
      }
      if (P) {
        const Se = $(n.touchedFields, k);
        Se ||
          (ye(n.touchedFields, k, P),
          (re.touchedFields = n.touchedFields),
          (z = z || (c.touchedFields && Se !== P)));
      }
      return z && U && f.state.next(re), z ? re : {};
    },
    N = (k, T, P, B) => {
      const U = $(n.errors, k),
        z = c.isValid && Dt(T) && n.isValid !== T;
      if (
        (e.delayError && P
          ? ((a = v(() => x(k, P))), a(e.delayError))
          : (clearTimeout(u),
            (a = null),
            P ? ye(n.errors, k, P) : Fe(n.errors, k)),
        (P ? !Jn(U, P) : U) || !ut(B) || z)
      ) {
        const G = {
          ...B,
          ...(z && Dt(T) ? { isValid: T } : {}),
          errors: n.errors,
          name: k,
        };
        (n = { ...n, ...G }), f.state.next(G);
      }
    },
    R = async (k) => {
      g(k, !0);
      const T = await t.resolver(
        i,
        t.context,
        OS(k || l.mount, r, t.criteriaMode, t.shouldUseNativeValidation),
      );
      return g(k), T;
    },
    _ = async (k) => {
      const { errors: T } = await R(k);
      if (k)
        for (const P of k) {
          const B = $(T, P);
          B ? ye(n.errors, P, B) : Fe(n.errors, P);
        }
      else n.errors = T;
      return T;
    },
    j = async (k, T, P = { valid: !0 }) => {
      for (const B in k) {
        const U = k[B];
        if (U) {
          const { _f: z, ...G } = U;
          if (z) {
            const re = l.array.has(z.name),
              _e = U._f && DS(U._f);
            _e && c.validatingFields && g([B], !0);
            const Se = await Ld(U, i, S, t.shouldUseNativeValidation && !T, re);
            if (
              (_e && c.validatingFields && g([B]),
              Se[z.name] && ((P.valid = !1), T))
            )
              break;
            !T &&
              ($(Se, z.name)
                ? re
                  ? v0(n.errors, Se, z.name)
                  : ye(n.errors, z.name, Se[z.name])
                : Fe(n.errors, z.name));
          }
          !ut(G) && (await j(G, T, P));
        }
      }
      return P.valid;
    },
    F = () => {
      for (const k of l.unMount) {
        const T = $(r, k);
        T &&
          (T._f.refs ? T._f.refs.every((P) => !dc(P)) : !dc(T._f.ref)) &&
          ce(k);
      }
      l.unMount = new Set();
    },
    A = (k, T) => (k && T && ye(i, k, T), !Jn(J(), o)),
    D = (k, T, P) =>
      h0(k, l, { ...(s.mount ? i : Ce(T) ? o : gn(k) ? { [k]: T } : T) }, P, T),
    O = (k) => _s($(s.mount ? i : o, k, e.shouldUnregister ? $(o, k, []) : [])),
    Z = (k, T, P = {}) => {
      const B = $(r, k);
      let U = T;
      if (B) {
        const z = B._f;
        z &&
          (!z.disabled && ye(i, k, C0(T, z)),
          (U = va(z.ref) && dt(T) ? '' : T),
          x0(z.ref)
            ? [...z.ref.options].forEach(
                (G) => (G.selected = U.includes(G.value)),
              )
            : z.refs
              ? Ps(z.ref)
                ? z.refs.length > 1
                  ? z.refs.forEach(
                      (G) =>
                        (!G.defaultChecked || !G.disabled) &&
                        (G.checked = Array.isArray(U)
                          ? !!U.find((re) => re === G.value)
                          : U === G.value),
                    )
                  : z.refs[0] && (z.refs[0].checked = !!U)
                : z.refs.forEach((G) => (G.checked = G.value === U))
              : vp(z.ref)
                ? (z.ref.value = '')
                : ((z.ref.value = U),
                  z.ref.type || f.values.next({ name: k, values: { ...i } })));
      }
      (P.shouldDirty || P.shouldTouch) &&
        b(k, U, P.shouldTouch, P.shouldDirty, !0),
        P.shouldValidate && K(k);
    },
    H = (k, T, P) => {
      for (const B in T) {
        const U = T[B],
          z = `${k}.${B}`,
          G = $(r, z);
        (l.array.has(k) || !ya(U) || (G && !G._f)) && !Eo(U)
          ? H(z, U, P)
          : Z(z, U, P);
      }
    },
    W = (k, T, P = {}) => {
      const B = $(r, k),
        U = l.array.has(k),
        z = Be(T);
      ye(i, k, z),
        U
          ? (f.array.next({ name: k, values: { ...i } }),
            (c.isDirty || c.dirtyFields) &&
              P.shouldDirty &&
              f.state.next({
                name: k,
                dirtyFields: ul(o, i),
                isDirty: A(k, z),
              }))
          : B && !B._f && !dt(z)
            ? H(k, z, P)
            : Z(k, z, P),
        Id(k, l) && f.state.next({ ...n }),
        f.values.next({ name: s.mount ? k : void 0, values: { ...i } });
    },
    M = async (k) => {
      s.mount = !0;
      const T = k.target;
      let P = T.name,
        B = !0;
      const U = $(r, P),
        z = () => (T.type ? fc(U._f) : l0(k)),
        G = (re) => {
          B = Number.isNaN(re) || Jn(re, $(i, P, re));
        };
      if (U) {
        let re, _e;
        const Se = z(),
          Ze = k.type === ma.BLUR || k.type === ma.FOCUS_OUT,
          Mr =
            (!IS(U._f) && !t.resolver && !$(n.errors, P) && !U._f.deps) ||
            LS(Ze, $(n.touchedFields, P), n.isSubmitted, y, m),
          eo = Id(P, l, Ze);
        ye(i, P, Se),
          Ze
            ? (U._f.onBlur && U._f.onBlur(k), a && a(0))
            : U._f.onChange && U._f.onChange(k);
        const At = b(P, Se, Ze, !1),
          Us = !ut(At) || eo;
        if (
          (!Ze && f.values.next({ name: P, type: k.type, values: { ...i } }),
          Mr)
        )
          return (
            c.isValid && (e.mode === 'onBlur' ? Ze && w() : w()),
            Us && f.state.next({ name: P, ...(eo ? {} : At) })
          );
        if ((!Ze && eo && f.state.next({ ...n }), t.resolver)) {
          const { errors: Bs } = await R([P]);
          if ((G(Se), B)) {
            const Ru = jm(n.errors, r, P),
              ci = jm(Bs, r, Ru.name || P);
            (re = ci.error), (P = ci.name), (_e = ut(Bs));
          }
        } else
          g([P], !0),
            (re = (await Ld(U, i, S, t.shouldUseNativeValidation))[P]),
            g([P]),
            G(Se),
            B && (re ? (_e = !1) : c.isValid && (_e = await j(r, !0)));
        B && (U._f.deps && K(U._f.deps), N(P, _e, re, At));
      }
    },
    L = (k, T) => {
      if ($(n.errors, T) && k.focus) return k.focus(), 1;
    },
    K = async (k, T = {}) => {
      let P, B;
      const U = gt(k);
      if (t.resolver) {
        const z = await _(Ce(k) ? k : U);
        (P = ut(z)), (B = k ? !U.some((G) => $(z, G)) : P);
      } else
        k
          ? ((B = (
              await Promise.all(
                U.map(async (z) => {
                  const G = $(r, z);
                  return await j(G && G._f ? { [z]: G } : G);
                }),
              )
            ).every(Boolean)),
            !(!B && !n.isValid) && w())
          : (B = P = await j(r));
      return (
        f.state.next({
          ...(!gn(k) || (c.isValid && P !== n.isValid) ? {} : { name: k }),
          ...(t.resolver || !k ? { isValid: P } : {}),
          errors: n.errors,
        }),
        T.shouldFocus && !B && _o(r, L, k ? U : l.mount),
        B
      );
    },
    J = (k) => {
      const T = { ...(s.mount ? i : o) };
      return Ce(k) ? T : gn(k) ? $(T, k) : k.map((P) => $(T, P));
    },
    ee = (k, T) => ({
      invalid: !!$((T || n).errors, k),
      isDirty: !!$((T || n).dirtyFields, k),
      error: $((T || n).errors, k),
      isValidating: !!$(n.validatingFields, k),
      isTouched: !!$((T || n).touchedFields, k),
    }),
    me = (k) => {
      k && gt(k).forEach((T) => Fe(n.errors, T)),
        f.state.next({ errors: k ? n.errors : {} });
    },
    pe = (k, T, P) => {
      const B = ($(r, k, { _f: {} })._f || {}).ref,
        U = $(n.errors, k) || {},
        { ref: z, message: G, type: re, ..._e } = U;
      ye(n.errors, k, { ..._e, ...T, ref: B }),
        f.state.next({ name: k, errors: n.errors, isValid: !1 }),
        P && P.shouldFocus && B && B.focus && B.focus();
    },
    je = (k, T) =>
      Mn(k)
        ? f.values.subscribe({ next: (P) => k(D(void 0, T), P) })
        : D(k, T, !0),
    ce = (k, T = {}) => {
      for (const P of k ? gt(k) : l.mount)
        l.mount.delete(P),
          l.array.delete(P),
          T.keepValue || (Fe(r, P), Fe(i, P)),
          !T.keepError && Fe(n.errors, P),
          !T.keepDirty && Fe(n.dirtyFields, P),
          !T.keepTouched && Fe(n.touchedFields, P),
          !T.keepIsValidating && Fe(n.validatingFields, P),
          !t.shouldUnregister && !T.keepDefaultValue && Fe(o, P);
      f.values.next({ values: { ...i } }),
        f.state.next({ ...n, ...(T.keepDirty ? { isDirty: A() } : {}) }),
        !T.keepIsValid && w();
    },
    q = ({ disabled: k, name: T, field: P, fields: B, value: U }) => {
      if ((Dt(k) && s.mount) || k) {
        const z = k ? void 0 : Ce(U) ? fc(P ? P._f : $(B, T)._f) : U;
        ye(i, T, z), b(T, z, !1, !1, !0);
      }
    },
    ie = (k, T = {}) => {
      let P = $(r, k);
      const B = Dt(T.disabled) || Dt(e.disabled);
      return (
        ye(r, k, {
          ...(P || {}),
          _f: {
            ...(P && P._f ? P._f : { ref: { name: k } }),
            name: k,
            mount: !0,
            ...T,
          },
        }),
        l.mount.add(k),
        P
          ? q({
              field: P,
              disabled: Dt(T.disabled) ? T.disabled : e.disabled,
              name: k,
              value: T.value,
            })
          : C(k, !0, T.value),
        {
          ...(B ? { disabled: T.disabled || e.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!T.required,
                min: Ei(T.min),
                max: Ei(T.max),
                minLength: Ei(T.minLength),
                maxLength: Ei(T.maxLength),
                pattern: Ei(T.pattern),
              }
            : {}),
          name: k,
          onChange: M,
          onBlur: M,
          ref: (U) => {
            if (U) {
              ie(k, T), (P = $(r, k));
              const z =
                  (Ce(U.value) &&
                    U.querySelectorAll &&
                    U.querySelectorAll('input,select,textarea')[0]) ||
                  U,
                G = AS(z),
                re = P._f.refs || [];
              if (G ? re.find((_e) => _e === z) : z === P._f.ref) return;
              ye(r, k, {
                _f: {
                  ...P._f,
                  ...(G
                    ? {
                        refs: [
                          ...re.filter(dc),
                          z,
                          ...(Array.isArray($(o, k)) ? [{}] : []),
                        ],
                        ref: { type: z.type, name: k },
                      }
                    : { ref: z }),
                },
              }),
                C(k, !1, void 0, z);
            } else
              (P = $(r, k, {})),
                P._f && (P._f.mount = !1),
                (t.shouldUnregister || T.shouldUnregister) &&
                  !(a0(l.array, k) && s.action) &&
                  l.unMount.add(k);
          },
        }
      );
    },
    ge = () => t.shouldFocusError && _o(r, L, l.mount),
    Q = (k) => {
      Dt(k) &&
        (f.state.next({ disabled: k }),
        _o(
          r,
          (T, P) => {
            const B = $(r, P);
            B &&
              ((T.disabled = B._f.disabled || k),
              Array.isArray(B._f.refs) &&
                B._f.refs.forEach((U) => {
                  U.disabled = B._f.disabled || k;
                }));
          },
          0,
          !1,
        ));
    },
    se = (k, T) => async (P) => {
      let B;
      P && (P.preventDefault && P.preventDefault(), P.persist && P.persist());
      let U = Be(i);
      if ((f.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: z, values: G } = await R();
        (n.errors = z), (U = G);
      } else await j(r);
      if ((Fe(n.errors, 'root'), ut(n.errors))) {
        f.state.next({ errors: {} });
        try {
          await k(U, P);
        } catch (z) {
          B = z;
        }
      } else T && (await T({ ...n.errors }, P)), ge(), setTimeout(ge);
      if (
        (f.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: ut(n.errors) && !B,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        B)
      )
        throw B;
    },
    Y = (k, T = {}) => {
      $(r, k) &&
        (Ce(T.defaultValue)
          ? W(k, Be($(o, k)))
          : (W(k, T.defaultValue), ye(o, k, Be(T.defaultValue))),
        T.keepTouched || Fe(n.touchedFields, k),
        T.keepDirty ||
          (Fe(n.dirtyFields, k),
          (n.isDirty = T.defaultValue ? A(k, Be($(o, k))) : A())),
        T.keepError || (Fe(n.errors, k), c.isValid && w()),
        f.state.next({ ...n }));
    },
    te = (k, T = {}) => {
      const P = k ? Be(k) : o,
        B = Be(P),
        U = ut(k),
        z = U ? o : B;
      if ((T.keepDefaultValues || (o = P), !T.keepValues)) {
        if (T.keepDirtyValues)
          for (const G of l.mount)
            $(n.dirtyFields, G) ? ye(z, G, $(i, G)) : W(G, $(z, G));
        else {
          if (hp && Ce(k))
            for (const G of l.mount) {
              const re = $(r, G);
              if (re && re._f) {
                const _e = Array.isArray(re._f.refs)
                  ? re._f.refs[0]
                  : re._f.ref;
                if (va(_e)) {
                  const Se = _e.closest('form');
                  if (Se) {
                    Se.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (i = e.shouldUnregister ? (T.keepDefaultValues ? Be(o) : {}) : Be(z)),
          f.array.next({ values: { ...z } }),
          f.values.next({ values: { ...z } });
      }
      (l = {
        mount: T.keepDirtyValues ? l.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (s.mount = !c.isValid || !!T.keepIsValid || !!T.keepDirtyValues),
        (s.watch = !!e.shouldUnregister),
        f.state.next({
          submitCount: T.keepSubmitCount ? n.submitCount : 0,
          isDirty: U
            ? !1
            : T.keepDirty
              ? n.isDirty
              : !!(T.keepDefaultValues && !Jn(k, o)),
          isSubmitted: T.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: U
            ? {}
            : T.keepDirtyValues
              ? T.keepDefaultValues && i
                ? ul(o, i)
                : n.dirtyFields
              : T.keepDefaultValues && k
                ? ul(o, k)
                : T.keepDirty
                  ? n.dirtyFields
                  : {},
          touchedFields: T.keepTouched ? n.touchedFields : {},
          errors: T.keepErrors ? n.errors : {},
          isSubmitSuccessful: T.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    le = (k, T) => te(Mn(k) ? k(i) : k, T);
  return {
    control: {
      register: ie,
      unregister: ce,
      getFieldState: ee,
      handleSubmit: se,
      setError: pe,
      _executeSchema: R,
      _getWatch: D,
      _getDirty: A,
      _updateValid: w,
      _removeUnmounted: F,
      _updateFieldArray: h,
      _updateDisabledField: q,
      _getFieldArray: O,
      _reset: te,
      _resetDefaultValues: () =>
        Mn(t.defaultValues) &&
        t.defaultValues().then((k) => {
          le(k, t.resetOptions), f.state.next({ isLoading: !1 });
        }),
      _updateFormState: (k) => {
        n = { ...n, ...k };
      },
      _disableForm: Q,
      _subjects: f,
      _proxyFormState: c,
      _setErrors: E,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return s;
      },
      set _state(k) {
        s = k;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return l;
      },
      set _names(k) {
        l = k;
      },
      get _formState() {
        return n;
      },
      set _formState(k) {
        n = k;
      },
      get _options() {
        return t;
      },
      set _options(k) {
        t = { ...t, ...k };
      },
    },
    trigger: K,
    register: ie,
    handleSubmit: se,
    watch: je,
    setValue: W,
    getValues: J,
    reset: le,
    resetField: Y,
    clearErrors: me,
    unregister: ce,
    setError: pe,
    setFocus: (k, T = {}) => {
      const P = $(r, k),
        B = P && P._f;
      if (B) {
        const U = B.refs ? B.refs[0] : B.ref;
        U.focus && (U.focus(), T.shouldSelect && U.select());
      }
    },
    getFieldState: ee,
  };
}
function ou(e = {}) {
  const t = I.useRef(),
    n = I.useRef(),
    [r, o] = I.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Mn(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Mn(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...zS(e), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    ru({
      subject: i._subjects.state,
      next: (s) => {
        f0(s, i._proxyFormState, i._updateFormState, !0) &&
          o({ ...i._formState });
      },
    }),
    I.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    I.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const s = i._getDirty();
        s !== r.isDirty && i._subjects.state.next({ isDirty: s });
      }
    }, [i, r.isDirty]),
    I.useEffect(() => {
      e.values && !Jn(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions),
          (n.current = e.values),
          o((s) => ({ ...s })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    I.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    I.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    I.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
    }, [e.shouldUnregister, i]),
    (t.current.formState = d0(r, i)),
    t.current
  );
}
const Am = (e, t, n) => {
    if (e && 'reportValidity' in e) {
      const r = $(n, t);
      e.setCustomValidity((r && r.message) || ''), e.reportValidity();
    }
  },
  $S = (e, t) => {
    for (const n in t.fields) {
      const r = t.fields[n];
      r && r.ref && 'reportValidity' in r.ref
        ? Am(r.ref, n, e)
        : r.refs && r.refs.forEach((o) => Am(o, n, e));
    }
  },
  US = (e, t) => {
    t.shouldUseNativeValidation && $S(e, t);
    const n = {};
    for (const r in e) {
      const o = $(t.fields, r),
        i = Object.assign(e[r] || {}, { ref: o && o.ref });
      if (BS(t.names || Object.keys(e), r)) {
        const s = Object.assign({}, $(n, r));
        ye(s, 'root', i), ye(n, r, s);
      } else ye(n, r, i);
    }
    return n;
  },
  BS = (e, t) => e.some((n) => n.startsWith(t + '.'));
var WS = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu,
  bn;
function E0(e) {
  return {
    lang: (e == null ? void 0 : e.lang) ?? (bn == null ? void 0 : bn.lang),
    message: e == null ? void 0 : e.message,
    abortEarly:
      (e == null ? void 0 : e.abortEarly) ??
      (bn == null ? void 0 : bn.abortEarly),
    abortPipeEarly:
      (e == null ? void 0 : e.abortPipeEarly) ??
      (bn == null ? void 0 : bn.abortPipeEarly),
  };
}
var pc;
function HS(e) {
  return pc == null ? void 0 : pc.get(e);
}
var hc;
function KS(e) {
  return hc == null ? void 0 : hc.get(e);
}
var mc;
function GS(e, t) {
  var n;
  return (n = mc == null ? void 0 : mc.get(e)) == null ? void 0 : n.get(t);
}
function b0(e) {
  var n, r;
  const t = typeof e;
  return t === 'string'
    ? `"${e}"`
    : t === 'number' || t === 'bigint' || t === 'boolean'
      ? `${e}`
      : t === 'object' || t === 'function'
        ? ((e &&
            ((r =
              (n = Object.getPrototypeOf(e)) == null
                ? void 0
                : n.constructor) == null
              ? void 0
              : r.name)) ??
          'null')
        : t;
}
function un(e, t, n, r, o) {
  const i = o && 'input' in o ? o.input : n.value,
    s = (o == null ? void 0 : o.expected) ?? e.expects ?? null,
    l = (o == null ? void 0 : o.received) ?? b0(i),
    a = {
      kind: e.kind,
      type: e.type,
      input: i,
      expected: s,
      received: l,
      message: `Invalid ${t}: ${s ? `Expected ${s} but r` : 'R'}eceived ${l}`,
      requirement: e.requirement,
      path: o == null ? void 0 : o.path,
      issues: o == null ? void 0 : o.issues,
      lang: r.lang,
      abortEarly: r.abortEarly,
      abortPipeEarly: r.abortPipeEarly,
    },
    u = e.kind === 'schema',
    c =
      (o == null ? void 0 : o.message) ??
      e.message ??
      GS(e.reference, a.lang) ??
      (u ? KS(a.lang) : null) ??
      r.message ??
      HS(a.lang);
  c && (a.message = typeof c == 'function' ? c(a) : c),
    u && (n.typed = !1),
    n.issues ? n.issues.push(a) : (n.issues = [a]);
}
function ZS(e, t) {
  const n = [...new Set(e)];
  return n.length > 1 ? `(${n.join(` ${t} `)})` : (n[0] ?? 'never');
}
function YS(e) {
  if (e.path) {
    let t = '';
    for (const n of e.path)
      if (typeof n.key == 'string' || typeof n.key == 'number')
        t ? (t += `.${n.key}`) : (t += n.key);
      else return null;
    return t;
  }
  return null;
}
function N0(e) {
  return {
    kind: 'validation',
    type: 'email',
    reference: N0,
    expects: null,
    async: !1,
    requirement: WS,
    message: e,
    _run(t, n) {
      return (
        t.typed && !this.requirement.test(t.value) && un(this, 'email', t, n), t
      );
    },
  };
}
function Bo(e, t) {
  return {
    kind: 'validation',
    type: 'max_length',
    reference: Bo,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    _run(n, r) {
      return (
        n.typed &&
          n.value.length > this.requirement &&
          un(this, 'length', n, r, { received: `${n.value.length}` }),
        n
      );
    },
  };
}
function Wo(e, t) {
  return {
    kind: 'validation',
    type: 'min_length',
    reference: Wo,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    _run(n, r) {
      return (
        n.typed &&
          n.value.length < this.requirement &&
          un(this, 'length', n, r, { received: `${n.value.length}` }),
        n
      );
    },
  };
}
function wr(e) {
  return {
    kind: 'validation',
    type: 'non_empty',
    reference: wr,
    async: !1,
    expects: '!0',
    message: e,
    _run(t, n) {
      return (
        t.typed &&
          t.value.length === 0 &&
          un(this, 'length', t, n, { received: '0' }),
        t
      );
    },
  };
}
function XS(e, t) {
  var n;
  if (e.issues)
    for (const r of t)
      for (const o of e.issues) {
        let i = !1;
        const s = Math.min(
          r.length,
          ((n = o.path) == null ? void 0 : n.length) ?? 0,
        );
        for (let l = 0; l < s; l++)
          if (r[l] !== o.path[l].key) {
            i = !0;
            break;
          }
        if (!i) return !1;
      }
  return !0;
}
function k0(e, t, n) {
  return {
    kind: 'validation',
    type: 'partial_check',
    reference: k0,
    async: !1,
    expects: null,
    requirement: t,
    message: n,
    _run(r, o) {
      return (
        XS(r, e) && !this.requirement(r.value) && un(this, 'input', r, o), r
      );
    },
  };
}
function Mi(e, t) {
  return {
    kind: 'validation',
    type: 'regex',
    reference: Mi,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    _run(n, r) {
      return (
        n.typed && !this.requirement.test(n.value) && un(this, 'format', n, r),
        n
      );
    },
  };
}
function R0(e) {
  return {
    kind: 'validation',
    type: 'url',
    reference: R0,
    async: !1,
    expects: null,
    requirement(t) {
      try {
        return new URL(t), !0;
      } catch {
        return !1;
      }
    },
    message: e,
    _run(t, n) {
      return t.typed && !this.requirement(t.value) && un(this, 'URL', t, n), t;
    },
  };
}
function QS(e, t) {
  return {
    ...e,
    _run(n, r) {
      const o = n.issues && [...n.issues];
      if ((e._run(n, r), n.issues)) {
        for (const i of n.issues)
          if (!(o != null && o.includes(i))) {
            let s = n.value;
            for (const l of t) {
              const a = s[l],
                u = {
                  type: 'unknown',
                  origin: 'value',
                  input: s,
                  key: l,
                  value: a,
                };
              if ((i.path ? i.path.push(u) : (i.path = [u]), !a)) break;
              s = a;
            }
          }
      }
      return n;
    },
  };
}
function T0(e, t) {
  return {
    kind: 'schema',
    type: 'array',
    reference: T0,
    expects: 'Array',
    async: !1,
    item: e,
    message: t,
    _run(n, r) {
      var i;
      const o = n.value;
      if (Array.isArray(o)) {
        (n.typed = !0), (n.value = []);
        for (let s = 0; s < o.length; s++) {
          const l = o[s],
            a = this.item._run({ typed: !1, value: l }, r);
          if (a.issues) {
            const u = {
              type: 'array',
              origin: 'value',
              input: o,
              key: s,
              value: l,
            };
            for (const c of a.issues)
              c.path ? c.path.unshift(u) : (c.path = [u]),
                (i = n.issues) == null || i.push(c);
            if ((n.issues || (n.issues = a.issues), r.abortEarly)) {
              n.typed = !1;
              break;
            }
          }
          a.typed || (n.typed = !1), n.value.push(a.value);
        }
      } else un(this, 'type', n, r);
      return n;
    },
  };
}
function P0(e, t) {
  const n = Object.entries(e)
    .filter(([r]) => isNaN(+r))
    .map(([, r]) => r);
  return {
    kind: 'schema',
    type: 'enum',
    reference: P0,
    expects: ZS(n.map(b0), '|'),
    async: !1,
    enum: e,
    options: n,
    message: t,
    _run(r, o) {
      return (
        this.options.includes(r.value)
          ? (r.typed = !0)
          : un(this, 'type', r, o),
        r
      );
    },
  };
}
function ei(e, t) {
  return {
    kind: 'schema',
    type: 'object',
    reference: ei,
    expects: 'Object',
    async: !1,
    entries: e,
    message: t,
    _run(n, r) {
      var i;
      const o = n.value;
      if (o && typeof o == 'object') {
        (n.typed = !0), (n.value = {});
        for (const s in this.entries) {
          const l = o[s],
            a = this.entries[s]._run({ typed: !1, value: l }, r);
          if (a.issues) {
            const u = {
              type: 'object',
              origin: 'value',
              input: o,
              key: s,
              value: l,
            };
            for (const c of a.issues)
              c.path ? c.path.unshift(u) : (c.path = [u]),
                (i = n.issues) == null || i.push(c);
            if ((n.issues || (n.issues = a.issues), r.abortEarly)) {
              n.typed = !1;
              break;
            }
          }
          a.typed || (n.typed = !1),
            (a.value !== void 0 || s in o) && (n.value[s] = a.value);
        }
      } else un(this, 'type', n, r);
      return n;
    },
  };
}
function tn(e) {
  return {
    kind: 'schema',
    type: 'string',
    reference: tn,
    expects: 'string',
    async: !1,
    message: e,
    _run(t, n) {
      return (
        typeof t.value == 'string' ? (t.typed = !0) : un(this, 'type', t, n), t
      );
    },
  };
}
function An(...e) {
  return {
    ...e[0],
    pipe: e,
    _run(t, n) {
      for (const r of e)
        if (r.kind !== 'metadata') {
          if (
            t.issues &&
            (r.kind === 'schema' || r.kind === 'transformation')
          ) {
            t.typed = !1;
            break;
          }
          (!t.issues || (!n.abortEarly && !n.abortPipeEarly)) &&
            (t = r._run(t, n));
        }
      return t;
    },
  };
}
function qS(e, t, n) {
  const r = e._run({ typed: !1, value: t }, E0(n));
  return {
    typed: r.typed,
    success: !r.issues,
    output: r.value,
    issues: r.issues,
  };
}
async function JS(e, t, n) {
  const r = await e._run({ typed: !1, value: t }, E0(n));
  return {
    typed: r.typed,
    success: !r.issues,
    output: r.value,
    issues: r.issues,
  };
}
var iu = function (e, t, n) {
  return (
    n === void 0 && (n = {}),
    function (r, o, i) {
      try {
        var s = !i.shouldUseNativeValidation && i.criteriaMode === 'all';
        return Promise.resolve(
          JS(e, r, Object.assign({}, t, { abortPipeEarly: !s })),
        ).then(function (l) {
          if (l.issues) {
            for (var a = {}; l.issues.length; ) {
              var u = l.issues[0],
                c = YS(u);
              if (
                c &&
                (a[c] || (a[c] = { message: u.message, type: u.type }), s)
              ) {
                var f = a[c].types,
                  m = f && f[u.type];
                a[c] = m0(
                  c,
                  s,
                  a,
                  u.type,
                  m ? [].concat(m, u.message) : u.message,
                );
              }
              l.issues.shift();
            }
            return { values: {}, errors: US(a, i) };
          }
          return { values: n.raw ? r : l.output, errors: {} };
        });
      } catch (l) {
        return Promise.reject(l);
      }
    }
  );
};
function e6(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t);
}
function yp(...e) {
  return (t) => e.forEach((n) => e6(n, t));
}
function Te(...e) {
  return d.useCallback(yp(...e), e);
}
var Gr = d.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = d.Children.toArray(n),
    i = o.find(n6);
  if (i) {
    const s = i.props.children,
      l = o.map((a) =>
        a === i
          ? d.Children.count(s) > 1
            ? d.Children.only(null)
            : d.isValidElement(s)
              ? s.props.children
              : null
          : a,
      );
    return p.jsx(Fd, {
      ...r,
      ref: t,
      children: d.isValidElement(s) ? d.cloneElement(s, void 0, l) : null,
    });
  }
  return p.jsx(Fd, { ...r, ref: t, children: n });
});
Gr.displayName = 'Slot';
var Fd = d.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (d.isValidElement(n)) {
    const o = o6(n);
    return d.cloneElement(n, { ...r6(r, n.props), ref: t ? yp(t, o) : o });
  }
  return d.Children.count(n) > 1 ? d.Children.only(null) : null;
});
Fd.displayName = 'SlotClone';
var t6 = ({ children: e }) => p.jsx(p.Fragment, { children: e });
function n6(e) {
  return d.isValidElement(e) && e.type === t6;
}
function r6(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            i(...l), o(...l);
          })
        : o && (n[r] = o)
      : r === 'style'
        ? (n[r] = { ...o, ...i })
        : r === 'className' && (n[r] = [o, i].filter(Boolean).join(' '));
  }
  return { ...e, ...n };
}
function o6(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null
        ? void 0
        : r.get,
    n = t && 'isReactWarning' in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null
          ? void 0
          : o.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function _0(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = _0(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function i6() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = _0(e)) && (r && (r += ' '), (r += t));
  return r;
}
const Om = (e) => (typeof e == 'boolean' ? ''.concat(e) : e === 0 ? '0' : e),
  Dm = i6,
  su = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Dm(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          f = i == null ? void 0 : i[u];
        if (c === null) return null;
        const m = Om(c) || Om(f);
        return o[u][m];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [f, m] = c;
          return m === void 0 || (u[f] = m), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: f, className: m, ...y } = c;
              return Object.entries(y).every((S) => {
                let [v, w] = S;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...l }[v])
                  : { ...i, ...l }[v] === w;
              })
                ? [...u, f, m]
                : u;
            }, []);
    return Dm(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
function M0(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = M0(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function s6() {
  for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = M0(e)) && (r && (r += ' '), (r += t));
  return r;
}
const xp = '-',
  l6 = (e) => {
    const t = u6(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(xp);
        return l[0] === '' && l.length !== 1 && l.shift(), j0(l, t) || a6(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  j0 = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? j0(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(xp);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Im = /^\[(.+)\]$/,
  a6 = (e) => {
    if (Im.test(e)) {
      const t = Im.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(':'));
      if (n) return 'arbitrary..' + n;
    }
  },
  u6 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      d6(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Vd(s, r, i, t);
      }),
      r
    );
  },
  Vd = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == 'string') {
        const i = o === '' ? t : Lm(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == 'function') {
        if (c6(o)) {
          Vd(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Vd(s, Lm(t, i), n, r);
      });
    });
  },
  Lm = (e, t) => {
    let n = e;
    return (
      t.split(xp).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  c6 = (e) => e.isThemeGetter,
  d6 = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == 'string'
              ? t + i
              : typeof i == 'object'
                ? Object.fromEntries(
                    Object.entries(i).map(([s, l]) => [t + s, l]),
                  )
                : i,
          );
          return [n, o];
        })
      : e,
  f6 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  A0 = '!',
  p6 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          c = 0,
          f;
        for (let w = 0; w < l.length; w++) {
          let g = l[w];
          if (u === 0) {
            if (g === o && (r || l.slice(w, w + i) === t)) {
              a.push(l.slice(c, w)), (c = w + i);
              continue;
            }
            if (g === '/') {
              f = w;
              continue;
            }
          }
          g === '[' ? u++ : g === ']' && u--;
        }
        const m = a.length === 0 ? l : l.substring(c),
          y = m.startsWith(A0),
          S = y ? m.substring(1) : m,
          v = f && f > c ? f - c : void 0;
        return {
          modifiers: a,
          hasImportantModifier: y,
          baseClassName: S,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  h6 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === '[' ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  m6 = (e) => ({ cache: f6(e.cacheSize), parseClassName: p6(e), ...l6(e) }),
  v6 = /\s+/,
  g6 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(v6);
    let l = '';
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: c,
          hasImportantModifier: f,
          baseClassName: m,
          maybePostfixModifierPosition: y,
        } = n(u);
      let S = !!y,
        v = r(S ? m.substring(0, y) : m);
      if (!v) {
        if (!S) {
          l = u + (l.length > 0 ? ' ' + l : l);
          continue;
        }
        if (((v = r(m)), !v)) {
          l = u + (l.length > 0 ? ' ' + l : l);
          continue;
        }
        S = !1;
      }
      const w = h6(c).join(':'),
        g = f ? w + A0 : w,
        h = g + v;
      if (i.includes(h)) continue;
      i.push(h);
      const x = o(v, S);
      for (let E = 0; E < x.length; ++E) {
        const C = x[E];
        i.push(g + C);
      }
      l = u + (l.length > 0 ? ' ' + l : l);
    }
    return l;
  };
function y6() {
  let e = 0,
    t,
    n,
    r = '';
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = O0(t)) && (r && (r += ' '), (r += n));
  return r;
}
const O0 = (e) => {
  if (typeof e == 'string') return e;
  let t,
    n = '';
  for (let r = 0; r < e.length; r++)
    e[r] && (t = O0(e[r])) && (n && (n += ' '), (n += t));
  return n;
};
function x6(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((c, f) => f(c), e());
    return (n = m6(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const c = g6(a, n);
    return o(a, c), c;
  }
  return function () {
    return i(y6.apply(null, arguments));
  };
}
const Ne = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  D0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  w6 = /^\d+\/\d+$/,
  S6 = new Set(['px', 'full', 'screen']),
  C6 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  E6 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  b6 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  N6 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  k6 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Nn = (e) => Mo(e) || S6.has(e) || w6.test(e),
  Hn = (e) => ti(e, 'length', O6),
  Mo = (e) => !!e && !Number.isNaN(Number(e)),
  vc = (e) => ti(e, 'number', Mo),
  bi = (e) => !!e && Number.isInteger(Number(e)),
  R6 = (e) => e.endsWith('%') && Mo(e.slice(0, -1)),
  oe = (e) => D0.test(e),
  Kn = (e) => C6.test(e),
  T6 = new Set(['length', 'size', 'percentage']),
  P6 = (e) => ti(e, T6, I0),
  _6 = (e) => ti(e, 'position', I0),
  M6 = new Set(['image', 'url']),
  j6 = (e) => ti(e, M6, I6),
  A6 = (e) => ti(e, '', D6),
  Ni = () => !0,
  ti = (e, t, n) => {
    const r = D0.exec(e);
    return r
      ? r[1]
        ? typeof t == 'string'
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  O6 = (e) => E6.test(e) && !b6.test(e),
  I0 = () => !1,
  D6 = (e) => N6.test(e),
  I6 = (e) => k6.test(e),
  L6 = () => {
    const e = Ne('colors'),
      t = Ne('spacing'),
      n = Ne('blur'),
      r = Ne('brightness'),
      o = Ne('borderColor'),
      i = Ne('borderRadius'),
      s = Ne('borderSpacing'),
      l = Ne('borderWidth'),
      a = Ne('contrast'),
      u = Ne('grayscale'),
      c = Ne('hueRotate'),
      f = Ne('invert'),
      m = Ne('gap'),
      y = Ne('gradientColorStops'),
      S = Ne('gradientColorStopPositions'),
      v = Ne('inset'),
      w = Ne('margin'),
      g = Ne('opacity'),
      h = Ne('padding'),
      x = Ne('saturate'),
      E = Ne('scale'),
      C = Ne('sepia'),
      b = Ne('skew'),
      N = Ne('space'),
      R = Ne('translate'),
      _ = () => ['auto', 'contain', 'none'],
      j = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      F = () => ['auto', oe, t],
      A = () => [oe, t],
      D = () => ['', Nn, Hn],
      O = () => ['auto', Mo, oe],
      Z = () => [
        'bottom',
        'center',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top',
      ],
      H = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
      W = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      M = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
      ],
      L = () => ['', '0', oe],
      K = () => [
        'auto',
        'avoid',
        'all',
        'avoid-page',
        'page',
        'left',
        'right',
        'column',
      ],
      J = () => [Mo, oe];
    return {
      cacheSize: 500,
      separator: ':',
      theme: {
        colors: [Ni],
        spacing: [Nn, Hn],
        blur: ['none', '', Kn, oe],
        brightness: J(),
        borderColor: [e],
        borderRadius: ['none', '', 'full', Kn, oe],
        borderSpacing: A(),
        borderWidth: D(),
        contrast: J(),
        grayscale: L(),
        hueRotate: J(),
        invert: L(),
        gap: A(),
        gradientColorStops: [e],
        gradientColorStopPositions: [R6, Hn],
        inset: F(),
        margin: F(),
        opacity: J(),
        padding: A(),
        saturate: J(),
        scale: J(),
        sepia: L(),
        skew: J(),
        space: A(),
        translate: A(),
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', 'video', oe] }],
        container: ['container'],
        columns: [{ columns: [Kn] }],
        'break-after': [{ 'break-after': K() }],
        'break-before': [{ 'break-before': K() }],
        'break-inside': [
          { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
        ],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [
          { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
        ],
        'object-position': [{ object: [...Z(), oe] }],
        overflow: [{ overflow: j() }],
        'overflow-x': [{ 'overflow-x': j() }],
        'overflow-y': [{ 'overflow-y': j() }],
        overscroll: [{ overscroll: _() }],
        'overscroll-x': [{ 'overscroll-x': _() }],
        'overscroll-y': [{ 'overscroll-y': _() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: [v] }],
        'inset-x': [{ 'inset-x': [v] }],
        'inset-y': [{ 'inset-y': [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: ['auto', bi, oe] }],
        basis: [{ basis: F() }],
        'flex-direction': [
          { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
        ],
        'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
        flex: [{ flex: ['1', 'auto', 'initial', 'none', oe] }],
        grow: [{ grow: L() }],
        shrink: [{ shrink: L() }],
        order: [{ order: ['first', 'last', 'none', bi, oe] }],
        'grid-cols': [{ 'grid-cols': [Ni] }],
        'col-start-end': [{ col: ['auto', { span: ['full', bi, oe] }, oe] }],
        'col-start': [{ 'col-start': O() }],
        'col-end': [{ 'col-end': O() }],
        'grid-rows': [{ 'grid-rows': [Ni] }],
        'row-start-end': [{ row: ['auto', { span: [bi, oe] }, oe] }],
        'row-start': [{ 'row-start': O() }],
        'row-end': [{ 'row-end': O() }],
        'grid-flow': [
          { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
        ],
        'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', oe] }],
        'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', oe] }],
        gap: [{ gap: [m] }],
        'gap-x': [{ 'gap-x': [m] }],
        'gap-y': [{ 'gap-y': [m] }],
        'justify-content': [{ justify: ['normal', ...M()] }],
        'justify-items': [
          { 'justify-items': ['start', 'end', 'center', 'stretch'] },
        ],
        'justify-self': [
          { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
        ],
        'align-content': [{ content: ['normal', ...M(), 'baseline'] }],
        'align-items': [
          { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
        ],
        'align-self': [
          { self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] },
        ],
        'place-content': [{ 'place-content': [...M(), 'baseline'] }],
        'place-items': [
          { 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] },
        ],
        'place-self': [
          { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
        ],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        'space-x': [{ 'space-x': [N] }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': [N] }],
        'space-y-reverse': ['space-y-reverse'],
        w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', oe, t] }],
        'min-w': [{ 'min-w': [oe, t, 'min', 'max', 'fit'] }],
        'max-w': [
          {
            'max-w': [
              oe,
              t,
              'none',
              'full',
              'min',
              'max',
              'fit',
              'prose',
              { screen: [Kn] },
              Kn,
            ],
          },
        ],
        h: [{ h: [oe, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'min-h': [
          { 'min-h': [oe, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
        ],
        'max-h': [
          { 'max-h': [oe, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
        ],
        size: [{ size: [oe, t, 'auto', 'min', 'max', 'fit'] }],
        'font-size': [{ text: ['base', Kn, Hn] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [
          {
            font: [
              'thin',
              'extralight',
              'light',
              'normal',
              'medium',
              'semibold',
              'bold',
              'extrabold',
              'black',
              vc,
            ],
          },
        ],
        'font-family': [{ font: [Ni] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
        tracking: [
          {
            tracking: [
              'tighter',
              'tight',
              'normal',
              'wide',
              'wider',
              'widest',
              oe,
            ],
          },
        ],
        'line-clamp': [{ 'line-clamp': ['none', Mo, vc] }],
        leading: [
          {
            leading: [
              'none',
              'tight',
              'snug',
              'normal',
              'relaxed',
              'loose',
              Nn,
              oe,
            ],
          },
        ],
        'list-image': [{ 'list-image': ['none', oe] }],
        'list-style-type': [{ list: ['none', 'disc', 'decimal', oe] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'placeholder-color': [{ placeholder: [e] }],
        'placeholder-opacity': [{ 'placeholder-opacity': [g] }],
        'text-alignment': [
          { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
        ],
        'text-color': [{ text: [e] }],
        'text-opacity': [{ 'text-opacity': [g] }],
        'text-decoration': [
          'underline',
          'overline',
          'line-through',
          'no-underline',
        ],
        'text-decoration-style': [{ decoration: [...H(), 'wavy'] }],
        'text-decoration-thickness': [
          { decoration: ['auto', 'from-font', Nn, Hn] },
        ],
        'underline-offset': [{ 'underline-offset': ['auto', Nn, oe] }],
        'text-decoration-color': [{ decoration: [e] }],
        'text-transform': [
          'uppercase',
          'lowercase',
          'capitalize',
          'normal-case',
        ],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: A() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              oe,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              'normal',
              'nowrap',
              'pre',
              'pre-line',
              'pre-wrap',
              'break-spaces',
            ],
          },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', oe] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-opacity': [{ 'bg-opacity': [g] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...Z(), _6] }],
        'bg-repeat': [
          { bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] },
        ],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', P6] }],
        'bg-image': [
          {
            bg: [
              'none',
              { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
              j6,
            ],
          },
        ],
        'bg-color': [{ bg: [e] }],
        'gradient-from-pos': [{ from: [S] }],
        'gradient-via-pos': [{ via: [S] }],
        'gradient-to-pos': [{ to: [S] }],
        'gradient-from': [{ from: [y] }],
        'gradient-via': [{ via: [y] }],
        'gradient-to': [{ to: [y] }],
        rounded: [{ rounded: [i] }],
        'rounded-s': [{ 'rounded-s': [i] }],
        'rounded-e': [{ 'rounded-e': [i] }],
        'rounded-t': [{ 'rounded-t': [i] }],
        'rounded-r': [{ 'rounded-r': [i] }],
        'rounded-b': [{ 'rounded-b': [i] }],
        'rounded-l': [{ 'rounded-l': [i] }],
        'rounded-ss': [{ 'rounded-ss': [i] }],
        'rounded-se': [{ 'rounded-se': [i] }],
        'rounded-ee': [{ 'rounded-ee': [i] }],
        'rounded-es': [{ 'rounded-es': [i] }],
        'rounded-tl': [{ 'rounded-tl': [i] }],
        'rounded-tr': [{ 'rounded-tr': [i] }],
        'rounded-br': [{ 'rounded-br': [i] }],
        'rounded-bl': [{ 'rounded-bl': [i] }],
        'border-w': [{ border: [l] }],
        'border-w-x': [{ 'border-x': [l] }],
        'border-w-y': [{ 'border-y': [l] }],
        'border-w-s': [{ 'border-s': [l] }],
        'border-w-e': [{ 'border-e': [l] }],
        'border-w-t': [{ 'border-t': [l] }],
        'border-w-r': [{ 'border-r': [l] }],
        'border-w-b': [{ 'border-b': [l] }],
        'border-w-l': [{ 'border-l': [l] }],
        'border-opacity': [{ 'border-opacity': [g] }],
        'border-style': [{ border: [...H(), 'hidden'] }],
        'divide-x': [{ 'divide-x': [l] }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': [l] }],
        'divide-y-reverse': ['divide-y-reverse'],
        'divide-opacity': [{ 'divide-opacity': [g] }],
        'divide-style': [{ divide: H() }],
        'border-color': [{ border: [o] }],
        'border-color-x': [{ 'border-x': [o] }],
        'border-color-y': [{ 'border-y': [o] }],
        'border-color-s': [{ 'border-s': [o] }],
        'border-color-e': [{ 'border-e': [o] }],
        'border-color-t': [{ 'border-t': [o] }],
        'border-color-r': [{ 'border-r': [o] }],
        'border-color-b': [{ 'border-b': [o] }],
        'border-color-l': [{ 'border-l': [o] }],
        'divide-color': [{ divide: [o] }],
        'outline-style': [{ outline: ['', ...H()] }],
        'outline-offset': [{ 'outline-offset': [Nn, oe] }],
        'outline-w': [{ outline: [Nn, Hn] }],
        'outline-color': [{ outline: [e] }],
        'ring-w': [{ ring: D() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: [e] }],
        'ring-opacity': [{ 'ring-opacity': [g] }],
        'ring-offset-w': [{ 'ring-offset': [Nn, Hn] }],
        'ring-offset-color': [{ 'ring-offset': [e] }],
        shadow: [{ shadow: ['', 'inner', 'none', Kn, A6] }],
        'shadow-color': [{ shadow: [Ni] }],
        opacity: [{ opacity: [g] }],
        'mix-blend': [{ 'mix-blend': [...W(), 'plus-lighter', 'plus-darker'] }],
        'bg-blend': [{ 'bg-blend': W() }],
        filter: [{ filter: ['', 'none'] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', Kn, oe] }],
        grayscale: [{ grayscale: [u] }],
        'hue-rotate': [{ 'hue-rotate': [c] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [x] }],
        sepia: [{ sepia: [C] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
        'backdrop-blur': [{ 'backdrop-blur': [n] }],
        'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [a] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }],
        'backdrop-invert': [{ 'backdrop-invert': [f] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [g] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [x] }],
        'backdrop-sepia': [{ 'backdrop-sepia': [C] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': [s] }],
        'border-spacing-x': [{ 'border-spacing-x': [s] }],
        'border-spacing-y': [{ 'border-spacing-y': [s] }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          {
            transition: [
              'none',
              'all',
              '',
              'colors',
              'opacity',
              'shadow',
              'transform',
              oe,
            ],
          },
        ],
        duration: [{ duration: J() }],
        ease: [{ ease: ['linear', 'in', 'out', 'in-out', oe] }],
        delay: [{ delay: J() }],
        animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', oe] }],
        transform: [{ transform: ['', 'gpu', 'none'] }],
        scale: [{ scale: [E] }],
        'scale-x': [{ 'scale-x': [E] }],
        'scale-y': [{ 'scale-y': [E] }],
        rotate: [{ rotate: [bi, oe] }],
        'translate-x': [{ 'translate-x': [R] }],
        'translate-y': [{ 'translate-y': [R] }],
        'skew-x': [{ 'skew-x': [b] }],
        'skew-y': [{ 'skew-y': [b] }],
        'transform-origin': [
          {
            origin: [
              'center',
              'top',
              'top-right',
              'right',
              'bottom-right',
              'bottom',
              'bottom-left',
              'left',
              'top-left',
              oe,
            ],
          },
        ],
        accent: [{ accent: ['auto', e] }],
        appearance: [{ appearance: ['none', 'auto'] }],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              oe,
            ],
          },
        ],
        'caret-color': [{ caret: [e] }],
        'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
        resize: [{ resize: ['none', 'y', 'x', ''] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': A() }],
        'scroll-mx': [{ 'scroll-mx': A() }],
        'scroll-my': [{ 'scroll-my': A() }],
        'scroll-ms': [{ 'scroll-ms': A() }],
        'scroll-me': [{ 'scroll-me': A() }],
        'scroll-mt': [{ 'scroll-mt': A() }],
        'scroll-mr': [{ 'scroll-mr': A() }],
        'scroll-mb': [{ 'scroll-mb': A() }],
        'scroll-ml': [{ 'scroll-ml': A() }],
        'scroll-p': [{ 'scroll-p': A() }],
        'scroll-px': [{ 'scroll-px': A() }],
        'scroll-py': [{ 'scroll-py': A() }],
        'scroll-ps': [{ 'scroll-ps': A() }],
        'scroll-pe': [{ 'scroll-pe': A() }],
        'scroll-pt': [{ 'scroll-pt': A() }],
        'scroll-pr': [{ 'scroll-pr': A() }],
        'scroll-pb': [{ 'scroll-pb': A() }],
        'scroll-pl': [{ 'scroll-pl': A() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [
          { 'will-change': ['auto', 'scroll', 'contents', 'transform', oe] },
        ],
        fill: [{ fill: [e, 'none'] }],
        'stroke-w': [{ stroke: [Nn, Hn, vc] }],
        stroke: [{ stroke: [e, 'none'] }],
        sr: ['sr-only', 'not-sr-only'],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: [
          'inset-x',
          'inset-y',
          'start',
          'end',
          'top',
          'right',
          'bottom',
          'left',
        ],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
    };
  },
  F6 = x6(L6);
function fe(...e) {
  return F6(s6(e));
}
const V6 = su(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90',
          destructive:
            'bg-destructive text-destructive-foreground hover:bg-destructive/90',
          outline:
            'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          secondary:
            'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-10 px-4 py-2',
          sm: 'h-9 rounded-md px-3',
          lg: 'h-11 rounded-md px-8',
          icon: 'h-10 w-10',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    },
  ),
  wn = d.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? Gr : 'button';
      return p.jsx(s, {
        className: fe(V6({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    },
  );
wn.displayName = 'Button';
function z6() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return d.useMemo(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    t,
  );
}
const lu =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
function ni(e) {
  const t = Object.prototype.toString.call(e);
  return t === '[object Window]' || t === '[object global]';
}
function wp(e) {
  return 'nodeType' in e;
}
function St(e) {
  var t, n;
  return e
    ? ni(e)
      ? e
      : wp(e) &&
          (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null
        ? t
        : window
    : window;
}
function Sp(e) {
  const { Document: t } = St(e);
  return e instanceof t;
}
function js(e) {
  return ni(e) ? !1 : e instanceof St(e).HTMLElement;
}
function L0(e) {
  return e instanceof St(e).SVGElement;
}
function ri(e) {
  return e
    ? ni(e)
      ? e.document
      : wp(e)
        ? Sp(e)
          ? e
          : js(e) || L0(e)
            ? e.ownerDocument
            : document
        : document
    : document;
}
const on = lu ? d.useLayoutEffect : d.useEffect;
function Cp(e) {
  const t = d.useRef(e);
  return (
    on(() => {
      t.current = e;
    }),
    d.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
function $6() {
  const e = d.useRef(null),
    t = d.useCallback((r, o) => {
      e.current = setInterval(r, o);
    }, []),
    n = d.useCallback(() => {
      e.current !== null && (clearInterval(e.current), (e.current = null));
    }, []);
  return [t, n];
}
function hs(e, t) {
  t === void 0 && (t = [e]);
  const n = d.useRef(e);
  return (
    on(() => {
      n.current !== e && (n.current = e);
    }, t),
    n
  );
}
function As(e, t) {
  const n = d.useRef();
  return d.useMemo(() => {
    const r = e(n.current);
    return (n.current = r), r;
  }, [...t]);
}
function wa(e) {
  const t = Cp(e),
    n = d.useRef(null),
    r = d.useCallback((o) => {
      o !== n.current && (t == null || t(o, n.current)), (n.current = o);
    }, []);
  return [n, r];
}
function zd(e) {
  const t = d.useRef();
  return (
    d.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
let gc = {};
function Os(e, t) {
  return d.useMemo(() => {
    if (t) return t;
    const n = gc[e] == null ? 0 : gc[e] + 1;
    return (gc[e] = n), e + '-' + n;
  }, [e, t]);
}
function F0(e) {
  return function (t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    return r.reduce(
      (i, s) => {
        const l = Object.entries(s);
        for (const [a, u] of l) {
          const c = i[a];
          c != null && (i[a] = c + e * u);
        }
        return i;
      },
      { ...t },
    );
  };
}
const jo = F0(1),
  Sa = F0(-1);
function U6(e) {
  return 'clientX' in e && 'clientY' in e;
}
function Ep(e) {
  if (!e) return !1;
  const { KeyboardEvent: t } = St(e.target);
  return t && e instanceof t;
}
function B6(e) {
  if (!e) return !1;
  const { TouchEvent: t } = St(e.target);
  return t && e instanceof t;
}
function $d(e) {
  if (B6(e)) {
    if (e.touches && e.touches.length) {
      const { clientX: t, clientY: n } = e.touches[0];
      return { x: t, y: n };
    } else if (e.changedTouches && e.changedTouches.length) {
      const { clientX: t, clientY: n } = e.changedTouches[0];
      return { x: t, y: n };
    }
  }
  return U6(e) ? { x: e.clientX, y: e.clientY } : null;
}
const Ca = Object.freeze({
    Translate: {
      toString(e) {
        if (!e) return;
        const { x: t, y: n } = e;
        return (
          'translate3d(' +
          (t ? Math.round(t) : 0) +
          'px, ' +
          (n ? Math.round(n) : 0) +
          'px, 0)'
        );
      },
    },
    Scale: {
      toString(e) {
        if (!e) return;
        const { scaleX: t, scaleY: n } = e;
        return 'scaleX(' + t + ') scaleY(' + n + ')';
      },
    },
    Transform: {
      toString(e) {
        if (e)
          return [Ca.Translate.toString(e), Ca.Scale.toString(e)].join(' ');
      },
    },
    Transition: {
      toString(e) {
        let { property: t, duration: n, easing: r } = e;
        return t + ' ' + n + 'ms ' + r;
      },
    },
  }),
  Fm =
    'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
function W6(e) {
  return e.matches(Fm) ? e : e.querySelector(Fm);
}
const H6 = { display: 'none' };
function K6(e) {
  let { id: t, value: n } = e;
  return I.createElement('div', { id: t, style: H6 }, n);
}
function G6(e) {
  let { id: t, announcement: n, ariaLiveType: r = 'assertive' } = e;
  const o = {
    position: 'fixed',
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(100%)',
    whiteSpace: 'nowrap',
  };
  return I.createElement(
    'div',
    { id: t, style: o, role: 'status', 'aria-live': r, 'aria-atomic': !0 },
    n,
  );
}
function Z6() {
  const [e, t] = d.useState('');
  return {
    announce: d.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e,
  };
}
const V0 = d.createContext(null);
function Y6(e) {
  const t = d.useContext(V0);
  d.useEffect(() => {
    if (!t)
      throw new Error(
        'useDndMonitor must be used within a children of <DndContext>',
      );
    return t(e);
  }, [e, t]);
}
function X6() {
  const [e] = d.useState(() => new Set()),
    t = d.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [
    d.useCallback(
      (r) => {
        let { type: o, event: i } = r;
        e.forEach((s) => {
          var l;
          return (l = s[o]) == null ? void 0 : l.call(s, i);
        });
      },
      [e],
    ),
    t,
  ];
}
const Q6 = {
    draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
  },
  q6 = {
    onDragStart(e) {
      let { active: t } = e;
      return 'Picked up draggable item ' + t.id + '.';
    },
    onDragOver(e) {
      let { active: t, over: n } = e;
      return n
        ? 'Draggable item ' +
            t.id +
            ' was moved over droppable area ' +
            n.id +
            '.'
        : 'Draggable item ' + t.id + ' is no longer over a droppable area.';
    },
    onDragEnd(e) {
      let { active: t, over: n } = e;
      return n
        ? 'Draggable item ' + t.id + ' was dropped over droppable area ' + n.id
        : 'Draggable item ' + t.id + ' was dropped.';
    },
    onDragCancel(e) {
      let { active: t } = e;
      return 'Dragging was cancelled. Draggable item ' + t.id + ' was dropped.';
    },
  };
function J6(e) {
  let {
    announcements: t = q6,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = Q6,
  } = e;
  const { announce: i, announcement: s } = Z6(),
    l = Os('DndLiveRegion'),
    [a, u] = d.useState(!1);
  if (
    (d.useEffect(() => {
      u(!0);
    }, []),
    Y6(
      d.useMemo(
        () => ({
          onDragStart(f) {
            let { active: m } = f;
            i(t.onDragStart({ active: m }));
          },
          onDragMove(f) {
            let { active: m, over: y } = f;
            t.onDragMove && i(t.onDragMove({ active: m, over: y }));
          },
          onDragOver(f) {
            let { active: m, over: y } = f;
            i(t.onDragOver({ active: m, over: y }));
          },
          onDragEnd(f) {
            let { active: m, over: y } = f;
            i(t.onDragEnd({ active: m, over: y }));
          },
          onDragCancel(f) {
            let { active: m, over: y } = f;
            i(t.onDragCancel({ active: m, over: y }));
          },
        }),
        [i, t],
      ),
    ),
    !a)
  )
    return null;
  const c = I.createElement(
    I.Fragment,
    null,
    I.createElement(K6, { id: r, value: o.draggable }),
    I.createElement(G6, { id: l, announcement: s }),
  );
  return n ? kt.createPortal(c, n) : c;
}
var He;
(function (e) {
  (e.DragStart = 'dragStart'),
    (e.DragMove = 'dragMove'),
    (e.DragEnd = 'dragEnd'),
    (e.DragCancel = 'dragCancel'),
    (e.DragOver = 'dragOver'),
    (e.RegisterDroppable = 'registerDroppable'),
    (e.SetDroppableDisabled = 'setDroppableDisabled'),
    (e.UnregisterDroppable = 'unregisterDroppable');
})(He || (He = {}));
function Ea() {}
function e5(e, t) {
  return d.useMemo(() => ({ sensor: e, options: {} }), [e, t]);
}
function t5() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return d.useMemo(() => [...t].filter((r) => r != null), [...t]);
}
const sn = Object.freeze({ x: 0, y: 0 });
function n5(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function r5(e, t) {
  let {
      data: { value: n },
    } = e,
    {
      data: { value: r },
    } = t;
  return n - r;
}
function o5(e, t) {
  let {
      data: { value: n },
    } = e,
    {
      data: { value: r },
    } = t;
  return r - n;
}
function Vm(e) {
  let { left: t, top: n, height: r, width: o } = e;
  return [
    { x: t, y: n },
    { x: t + o, y: n },
    { x: t, y: n + r },
    { x: t + o, y: n + r },
  ];
}
function i5(e, t) {
  if (!e || e.length === 0) return null;
  const [n] = e;
  return n[t];
}
const s5 = (e) => {
  let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
  const o = Vm(t),
    i = [];
  for (const s of r) {
    const { id: l } = s,
      a = n.get(l);
    if (a) {
      const u = Vm(a),
        c = o.reduce((m, y, S) => m + n5(u[S], y), 0),
        f = Number((c / 4).toFixed(4));
      i.push({ id: l, data: { droppableContainer: s, value: f } });
    }
  }
  return i.sort(r5);
};
function l5(e, t) {
  const n = Math.max(t.top, e.top),
    r = Math.max(t.left, e.left),
    o = Math.min(t.left + t.width, e.left + e.width),
    i = Math.min(t.top + t.height, e.top + e.height),
    s = o - r,
    l = i - n;
  if (r < o && n < i) {
    const a = t.width * t.height,
      u = e.width * e.height,
      c = s * l,
      f = c / (a + u - c);
    return Number(f.toFixed(4));
  }
  return 0;
}
const a5 = (e) => {
  let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
  const o = [];
  for (const i of r) {
    const { id: s } = i,
      l = n.get(s);
    if (l) {
      const a = l5(l, t);
      a > 0 && o.push({ id: s, data: { droppableContainer: i, value: a } });
    }
  }
  return o.sort(o5);
};
function u5(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1,
  };
}
function z0(e, t) {
  return e && t ? { x: e.left - t.left, y: e.top - t.top } : sn;
}
function c5(e) {
  return function (n) {
    for (
      var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1;
      i < r;
      i++
    )
      o[i - 1] = arguments[i];
    return o.reduce(
      (s, l) => ({
        ...s,
        top: s.top + e * l.y,
        bottom: s.bottom + e * l.y,
        left: s.left + e * l.x,
        right: s.right + e * l.x,
      }),
      { ...n },
    );
  };
}
const d5 = c5(1);
function f5(e) {
  if (e.startsWith('matrix3d(')) {
    const t = e.slice(9, -1).split(/, /);
    return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
  } else if (e.startsWith('matrix(')) {
    const t = e.slice(7, -1).split(/, /);
    return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
  }
  return null;
}
function p5(e, t, n) {
  const r = f5(t);
  if (!r) return e;
  const { scaleX: o, scaleY: i, x: s, y: l } = r,
    a = e.left - s - (1 - o) * parseFloat(n),
    u = e.top - l - (1 - i) * parseFloat(n.slice(n.indexOf(' ') + 1)),
    c = o ? e.width / o : e.width,
    f = i ? e.height / i : e.height;
  return { width: c, height: f, top: u, right: a + c, bottom: u + f, left: a };
}
const h5 = { ignoreTransform: !1 };
function oi(e, t) {
  t === void 0 && (t = h5);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const { transform: u, transformOrigin: c } = St(e).getComputedStyle(e);
    u && (n = p5(n, u, c));
  }
  const { top: r, left: o, width: i, height: s, bottom: l, right: a } = n;
  return { top: r, left: o, width: i, height: s, bottom: l, right: a };
}
function zm(e) {
  return oi(e, { ignoreTransform: !0 });
}
function m5(e) {
  const t = e.innerWidth,
    n = e.innerHeight;
  return { top: 0, left: 0, right: t, bottom: n, width: t, height: n };
}
function v5(e, t) {
  return (
    t === void 0 && (t = St(e).getComputedStyle(e)), t.position === 'fixed'
  );
}
function g5(e, t) {
  t === void 0 && (t = St(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ['overflow', 'overflowX', 'overflowY'].some((o) => {
    const i = t[o];
    return typeof i == 'string' ? n.test(i) : !1;
  });
}
function bp(e, t) {
  const n = [];
  function r(o) {
    if ((t != null && n.length >= t) || !o) return n;
    if (Sp(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!js(o) || L0(o) || n.includes(o)) return n;
    const i = St(e).getComputedStyle(o);
    return o !== e && g5(o, i) && n.push(o), v5(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function $0(e) {
  const [t] = bp(e, 1);
  return t ?? null;
}
function yc(e) {
  return !lu || !e
    ? null
    : ni(e)
      ? e
      : wp(e)
        ? Sp(e) || e === ri(e).scrollingElement
          ? window
          : js(e)
            ? e
            : null
        : null;
}
function U0(e) {
  return ni(e) ? e.scrollX : e.scrollLeft;
}
function B0(e) {
  return ni(e) ? e.scrollY : e.scrollTop;
}
function Ud(e) {
  return { x: U0(e), y: B0(e) };
}
var Xe;
(function (e) {
  (e[(e.Forward = 1)] = 'Forward'), (e[(e.Backward = -1)] = 'Backward');
})(Xe || (Xe = {}));
function W0(e) {
  return !lu || !e ? !1 : e === document.scrollingElement;
}
function H0(e) {
  const t = { x: 0, y: 0 },
    n = W0(e)
      ? { height: window.innerHeight, width: window.innerWidth }
      : { height: e.clientHeight, width: e.clientWidth },
    r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height },
    o = e.scrollTop <= t.y,
    i = e.scrollLeft <= t.x,
    s = e.scrollTop >= r.y,
    l = e.scrollLeft >= r.x;
  return {
    isTop: o,
    isLeft: i,
    isBottom: s,
    isRight: l,
    maxScroll: r,
    minScroll: t,
  };
}
const y5 = { x: 0.2, y: 0.2 };
function x5(e, t, n, r, o) {
  let { top: i, left: s, right: l, bottom: a } = n;
  r === void 0 && (r = 10), o === void 0 && (o = y5);
  const { isTop: u, isBottom: c, isLeft: f, isRight: m } = H0(e),
    y = { x: 0, y: 0 },
    S = { x: 0, y: 0 },
    v = { height: t.height * o.y, width: t.width * o.x };
  return (
    !u && i <= t.top + v.height
      ? ((y.y = Xe.Backward),
        (S.y = r * Math.abs((t.top + v.height - i) / v.height)))
      : !c &&
        a >= t.bottom - v.height &&
        ((y.y = Xe.Forward),
        (S.y = r * Math.abs((t.bottom - v.height - a) / v.height))),
    !m && l >= t.right - v.width
      ? ((y.x = Xe.Forward),
        (S.x = r * Math.abs((t.right - v.width - l) / v.width)))
      : !f &&
        s <= t.left + v.width &&
        ((y.x = Xe.Backward),
        (S.x = r * Math.abs((t.left + v.width - s) / v.width))),
    { direction: y, speed: S }
  );
}
function w5(e) {
  if (e === document.scrollingElement) {
    const { innerWidth: i, innerHeight: s } = window;
    return { top: 0, left: 0, right: i, bottom: s, width: i, height: s };
  }
  const { top: t, left: n, right: r, bottom: o } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: o,
    width: e.clientWidth,
    height: e.clientHeight,
  };
}
function K0(e) {
  return e.reduce((t, n) => jo(t, Ud(n)), sn);
}
function S5(e) {
  return e.reduce((t, n) => t + U0(n), 0);
}
function C5(e) {
  return e.reduce((t, n) => t + B0(n), 0);
}
function E5(e, t) {
  if ((t === void 0 && (t = oi), !e)) return;
  const { top: n, left: r, bottom: o, right: i } = t(e);
  $0(e) &&
    (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) &&
    e.scrollIntoView({ block: 'center', inline: 'center' });
}
const b5 = [
  ['x', ['left', 'right'], S5],
  ['y', ['top', 'bottom'], C5],
];
class Np {
  constructor(t, n) {
    (this.rect = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.right = void 0),
      (this.left = void 0);
    const r = bp(n),
      o = K0(r);
    (this.rect = { ...t }), (this.width = t.width), (this.height = t.height);
    for (const [i, s, l] of b5)
      for (const a of s)
        Object.defineProperty(this, a, {
          get: () => {
            const u = l(r),
              c = o[i] - u;
            return this.rect[a] + c;
          },
          enumerable: !0,
        });
    Object.defineProperty(this, 'rect', { enumerable: !1 });
  }
}
class Wi {
  constructor(t) {
    (this.target = void 0),
      (this.listeners = []),
      (this.removeAll = () => {
        this.listeners.forEach((n) => {
          var r;
          return (r = this.target) == null
            ? void 0
            : r.removeEventListener(...n);
        });
      }),
      (this.target = t);
  }
  add(t, n, r) {
    var o;
    (o = this.target) == null || o.addEventListener(t, n, r),
      this.listeners.push([t, n, r]);
  }
}
function N5(e) {
  const { EventTarget: t } = St(e);
  return e instanceof t ? e : ri(e);
}
function xc(e, t) {
  const n = Math.abs(e.x),
    r = Math.abs(e.y);
  return typeof t == 'number'
    ? Math.sqrt(n ** 2 + r ** 2) > t
    : 'x' in t && 'y' in t
      ? n > t.x && r > t.y
      : 'x' in t
        ? n > t.x
        : 'y' in t
          ? r > t.y
          : !1;
}
var It;
(function (e) {
  (e.Click = 'click'),
    (e.DragStart = 'dragstart'),
    (e.Keydown = 'keydown'),
    (e.ContextMenu = 'contextmenu'),
    (e.Resize = 'resize'),
    (e.SelectionChange = 'selectionchange'),
    (e.VisibilityChange = 'visibilitychange');
})(It || (It = {}));
function $m(e) {
  e.preventDefault();
}
function k5(e) {
  e.stopPropagation();
}
var xe;
(function (e) {
  (e.Space = 'Space'),
    (e.Down = 'ArrowDown'),
    (e.Right = 'ArrowRight'),
    (e.Left = 'ArrowLeft'),
    (e.Up = 'ArrowUp'),
    (e.Esc = 'Escape'),
    (e.Enter = 'Enter');
})(xe || (xe = {}));
const G0 = {
    start: [xe.Space, xe.Enter],
    cancel: [xe.Esc],
    end: [xe.Space, xe.Enter],
  },
  R5 = (e, t) => {
    let { currentCoordinates: n } = t;
    switch (e.code) {
      case xe.Right:
        return { ...n, x: n.x + 25 };
      case xe.Left:
        return { ...n, x: n.x - 25 };
      case xe.Down:
        return { ...n, y: n.y + 25 };
      case xe.Up:
        return { ...n, y: n.y - 25 };
    }
  };
class Z0 {
  constructor(t) {
    (this.props = void 0),
      (this.autoScrollEnabled = !1),
      (this.referenceCoordinates = void 0),
      (this.listeners = void 0),
      (this.windowListeners = void 0),
      (this.props = t);
    const {
      event: { target: n },
    } = t;
    (this.props = t),
      (this.listeners = new Wi(ri(n))),
      (this.windowListeners = new Wi(St(n))),
      (this.handleKeyDown = this.handleKeyDown.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      this.attach();
  }
  attach() {
    this.handleStart(),
      this.windowListeners.add(It.Resize, this.handleCancel),
      this.windowListeners.add(It.VisibilityChange, this.handleCancel),
      setTimeout(() => this.listeners.add(It.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const { activeNode: t, onStart: n } = this.props,
      r = t.node.current;
    r && E5(r), n(sn);
  }
  handleKeyDown(t) {
    if (Ep(t)) {
      const { active: n, context: r, options: o } = this.props,
        {
          keyboardCodes: i = G0,
          coordinateGetter: s = R5,
          scrollBehavior: l = 'smooth',
        } = o,
        { code: a } = t;
      if (i.end.includes(a)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(a)) {
        this.handleCancel(t);
        return;
      }
      const { collisionRect: u } = r.current,
        c = u ? { x: u.left, y: u.top } : sn;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const f = s(t, { active: n, context: r.current, currentCoordinates: c });
      if (f) {
        const m = Sa(f, c),
          y = { x: 0, y: 0 },
          { scrollableAncestors: S } = r.current;
        for (const v of S) {
          const w = t.code,
            {
              isTop: g,
              isRight: h,
              isLeft: x,
              isBottom: E,
              maxScroll: C,
              minScroll: b,
            } = H0(v),
            N = w5(v),
            R = {
              x: Math.min(
                w === xe.Right ? N.right - N.width / 2 : N.right,
                Math.max(w === xe.Right ? N.left : N.left + N.width / 2, f.x),
              ),
              y: Math.min(
                w === xe.Down ? N.bottom - N.height / 2 : N.bottom,
                Math.max(w === xe.Down ? N.top : N.top + N.height / 2, f.y),
              ),
            },
            _ = (w === xe.Right && !h) || (w === xe.Left && !x),
            j = (w === xe.Down && !E) || (w === xe.Up && !g);
          if (_ && R.x !== f.x) {
            const F = v.scrollLeft + m.x,
              A = (w === xe.Right && F <= C.x) || (w === xe.Left && F >= b.x);
            if (A && !m.y) {
              v.scrollTo({ left: F, behavior: l });
              return;
            }
            A
              ? (y.x = v.scrollLeft - F)
              : (y.x =
                  w === xe.Right ? v.scrollLeft - C.x : v.scrollLeft - b.x),
              y.x && v.scrollBy({ left: -y.x, behavior: l });
            break;
          } else if (j && R.y !== f.y) {
            const F = v.scrollTop + m.y,
              A = (w === xe.Down && F <= C.y) || (w === xe.Up && F >= b.y);
            if (A && !m.x) {
              v.scrollTo({ top: F, behavior: l });
              return;
            }
            A
              ? (y.y = v.scrollTop - F)
              : (y.y = w === xe.Down ? v.scrollTop - C.y : v.scrollTop - b.y),
              y.y && v.scrollBy({ top: -y.y, behavior: l });
            break;
          }
        }
        this.handleMove(t, jo(Sa(f, this.referenceCoordinates), y));
      }
    }
  }
  handleMove(t, n) {
    const { onMove: r } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const { onEnd: n } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const { onCancel: n } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
Z0.activators = [
  {
    eventName: 'onKeyDown',
    handler: (e, t, n) => {
      let { keyboardCodes: r = G0, onActivation: o } = t,
        { active: i } = n;
      const { code: s } = e.nativeEvent;
      if (r.start.includes(s)) {
        const l = i.activatorNode.current;
        return l && e.target !== l
          ? !1
          : (e.preventDefault(), o == null || o({ event: e.nativeEvent }), !0);
      }
      return !1;
    },
  },
];
function Um(e) {
  return !!(e && 'distance' in e);
}
function Bm(e) {
  return !!(e && 'delay' in e);
}
class kp {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = N5(t.event.target)),
      (this.props = void 0),
      (this.events = void 0),
      (this.autoScrollEnabled = !0),
      (this.document = void 0),
      (this.activated = !1),
      (this.initialCoordinates = void 0),
      (this.timeoutId = null),
      (this.listeners = void 0),
      (this.documentListeners = void 0),
      (this.windowListeners = void 0),
      (this.props = t),
      (this.events = n);
    const { event: i } = t,
      { target: s } = i;
    (this.props = t),
      (this.events = n),
      (this.document = ri(s)),
      (this.documentListeners = new Wi(this.document)),
      (this.listeners = new Wi(r)),
      (this.windowListeners = new Wi(St(s))),
      (this.initialCoordinates = (o = $d(i)) != null ? o : sn),
      (this.handleStart = this.handleStart.bind(this)),
      (this.handleMove = this.handleMove.bind(this)),
      (this.handleEnd = this.handleEnd.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      (this.handleKeydown = this.handleKeydown.bind(this)),
      (this.removeTextSelection = this.removeTextSelection.bind(this)),
      this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: { activationConstraint: n, bypassActivationConstraint: r },
      },
    } = this;
    if (
      (this.listeners.add(t.move.name, this.handleMove, { passive: !1 }),
      this.listeners.add(t.end.name, this.handleEnd),
      this.windowListeners.add(It.Resize, this.handleCancel),
      this.windowListeners.add(It.DragStart, $m),
      this.windowListeners.add(It.VisibilityChange, this.handleCancel),
      this.windowListeners.add(It.ContextMenu, $m),
      this.documentListeners.add(It.Keydown, this.handleKeydown),
      n)
    ) {
      if (
        r != null &&
        r({
          event: this.props.event,
          activeNode: this.props.activeNode,
          options: this.props.options,
        })
      )
        return this.handleStart();
      if (Bm(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay);
        return;
      }
      if (Um(n)) return;
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(),
      this.windowListeners.removeAll(),
      setTimeout(this.documentListeners.removeAll, 50),
      this.timeoutId !== null &&
        (clearTimeout(this.timeoutId), (this.timeoutId = null));
  }
  handleStart() {
    const { initialCoordinates: t } = this,
      { onStart: n } = this.props;
    t &&
      ((this.activated = !0),
      this.documentListeners.add(It.Click, k5, { capture: !0 }),
      this.removeTextSelection(),
      this.documentListeners.add(It.SelectionChange, this.removeTextSelection),
      n(t));
  }
  handleMove(t) {
    var n;
    const { activated: r, initialCoordinates: o, props: i } = this,
      {
        onMove: s,
        options: { activationConstraint: l },
      } = i;
    if (!o) return;
    const a = (n = $d(t)) != null ? n : sn,
      u = Sa(o, a);
    if (!r && l) {
      if (Um(l)) {
        if (l.tolerance != null && xc(u, l.tolerance))
          return this.handleCancel();
        if (xc(u, l.distance)) return this.handleStart();
      }
      return Bm(l) && xc(u, l.tolerance) ? this.handleCancel() : void 0;
    }
    t.cancelable && t.preventDefault(), s(a);
  }
  handleEnd() {
    const { onEnd: t } = this.props;
    this.detach(), t();
  }
  handleCancel() {
    const { onCancel: t } = this.props;
    this.detach(), t();
  }
  handleKeydown(t) {
    t.code === xe.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const T5 = { move: { name: 'pointermove' }, end: { name: 'pointerup' } };
class Rp extends kp {
  constructor(t) {
    const { event: n } = t,
      r = ri(n.target);
    super(t, T5, r);
  }
}
Rp.activators = [
  {
    eventName: 'onPointerDown',
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      return !n.isPrimary || n.button !== 0
        ? !1
        : (r == null || r({ event: n }), !0);
    },
  },
];
const P5 = { move: { name: 'mousemove' }, end: { name: 'mouseup' } };
var Bd;
(function (e) {
  e[(e.RightClick = 2)] = 'RightClick';
})(Bd || (Bd = {}));
class _5 extends kp {
  constructor(t) {
    super(t, P5, ri(t.event.target));
  }
}
_5.activators = [
  {
    eventName: 'onMouseDown',
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      return n.button === Bd.RightClick
        ? !1
        : (r == null || r({ event: n }), !0);
    },
  },
];
const wc = { move: { name: 'touchmove' }, end: { name: 'touchend' } };
class M5 extends kp {
  constructor(t) {
    super(t, wc);
  }
  static setup() {
    return (
      window.addEventListener(wc.move.name, t, { capture: !1, passive: !1 }),
      function () {
        window.removeEventListener(wc.move.name, t);
      }
    );
    function t() {}
  }
}
M5.activators = [
  {
    eventName: 'onTouchStart',
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      const { touches: o } = n;
      return o.length > 1 ? !1 : (r == null || r({ event: n }), !0);
    },
  },
];
var Hi;
(function (e) {
  (e[(e.Pointer = 0)] = 'Pointer'),
    (e[(e.DraggableRect = 1)] = 'DraggableRect');
})(Hi || (Hi = {}));
var ba;
(function (e) {
  (e[(e.TreeOrder = 0)] = 'TreeOrder'),
    (e[(e.ReversedTreeOrder = 1)] = 'ReversedTreeOrder');
})(ba || (ba = {}));
function j5(e) {
  let {
    acceleration: t,
    activator: n = Hi.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: s = 5,
    order: l = ba.TreeOrder,
    pointerCoordinates: a,
    scrollableAncestors: u,
    scrollableAncestorRects: c,
    delta: f,
    threshold: m,
  } = e;
  const y = O5({ delta: f, disabled: !i }),
    [S, v] = $6(),
    w = d.useRef({ x: 0, y: 0 }),
    g = d.useRef({ x: 0, y: 0 }),
    h = d.useMemo(() => {
      switch (n) {
        case Hi.Pointer:
          return a ? { top: a.y, bottom: a.y, left: a.x, right: a.x } : null;
        case Hi.DraggableRect:
          return o;
      }
    }, [n, o, a]),
    x = d.useRef(null),
    E = d.useCallback(() => {
      const b = x.current;
      if (!b) return;
      const N = w.current.x * g.current.x,
        R = w.current.y * g.current.y;
      b.scrollBy(N, R);
    }, []),
    C = d.useMemo(() => (l === ba.TreeOrder ? [...u].reverse() : u), [l, u]);
  d.useEffect(() => {
    if (!i || !u.length || !h) {
      v();
      return;
    }
    for (const b of C) {
      if ((r == null ? void 0 : r(b)) === !1) continue;
      const N = u.indexOf(b),
        R = c[N];
      if (!R) continue;
      const { direction: _, speed: j } = x5(b, R, h, t, m);
      for (const F of ['x', 'y']) y[F][_[F]] || ((j[F] = 0), (_[F] = 0));
      if (j.x > 0 || j.y > 0) {
        v(), (x.current = b), S(E, s), (w.current = j), (g.current = _);
        return;
      }
    }
    (w.current = { x: 0, y: 0 }), (g.current = { x: 0, y: 0 }), v();
  }, [
    t,
    E,
    r,
    v,
    i,
    s,
    JSON.stringify(h),
    JSON.stringify(y),
    S,
    u,
    C,
    c,
    JSON.stringify(m),
  ]);
}
const A5 = {
  x: { [Xe.Backward]: !1, [Xe.Forward]: !1 },
  y: { [Xe.Backward]: !1, [Xe.Forward]: !1 },
};
function O5(e) {
  let { delta: t, disabled: n } = e;
  const r = zd(t);
  return As(
    (o) => {
      if (n || !r || !o) return A5;
      const i = { x: Math.sign(t.x - r.x), y: Math.sign(t.y - r.y) };
      return {
        x: {
          [Xe.Backward]: o.x[Xe.Backward] || i.x === -1,
          [Xe.Forward]: o.x[Xe.Forward] || i.x === 1,
        },
        y: {
          [Xe.Backward]: o.y[Xe.Backward] || i.y === -1,
          [Xe.Forward]: o.y[Xe.Forward] || i.y === 1,
        },
      };
    },
    [n, t, r],
  );
}
function D5(e, t) {
  const n = t !== null ? e.get(t) : void 0,
    r = n ? n.node.current : null;
  return As(
    (o) => {
      var i;
      return t === null ? null : (i = r ?? o) != null ? i : null;
    },
    [r, t],
  );
}
function I5(e, t) {
  return d.useMemo(
    () =>
      e.reduce((n, r) => {
        const { sensor: o } = r,
          i = o.activators.map((s) => ({
            eventName: s.eventName,
            handler: t(s.handler, r),
          }));
        return [...n, ...i];
      }, []),
    [e, t],
  );
}
var ms;
(function (e) {
  (e[(e.Always = 0)] = 'Always'),
    (e[(e.BeforeDragging = 1)] = 'BeforeDragging'),
    (e[(e.WhileDragging = 2)] = 'WhileDragging');
})(ms || (ms = {}));
var Wd;
(function (e) {
  e.Optimized = 'optimized';
})(Wd || (Wd = {}));
const Wm = new Map();
function L5(e, t) {
  let { dragging: n, dependencies: r, config: o } = t;
  const [i, s] = d.useState(null),
    { frequency: l, measure: a, strategy: u } = o,
    c = d.useRef(e),
    f = w(),
    m = hs(f),
    y = d.useCallback(
      function (g) {
        g === void 0 && (g = []),
          !m.current &&
            s((h) =>
              h === null ? g : h.concat(g.filter((x) => !h.includes(x))),
            );
      },
      [m],
    ),
    S = d.useRef(null),
    v = As(
      (g) => {
        if (f && !n) return Wm;
        if (!g || g === Wm || c.current !== e || i != null) {
          const h = new Map();
          for (let x of e) {
            if (!x) continue;
            if (i && i.length > 0 && !i.includes(x.id) && x.rect.current) {
              h.set(x.id, x.rect.current);
              continue;
            }
            const E = x.node.current,
              C = E ? new Np(a(E), E) : null;
            (x.rect.current = C), C && h.set(x.id, C);
          }
          return h;
        }
        return g;
      },
      [e, i, n, f, a],
    );
  return (
    d.useEffect(() => {
      c.current = e;
    }, [e]),
    d.useEffect(() => {
      f || y();
    }, [n, f]),
    d.useEffect(() => {
      i && i.length > 0 && s(null);
    }, [JSON.stringify(i)]),
    d.useEffect(() => {
      f ||
        typeof l != 'number' ||
        S.current !== null ||
        (S.current = setTimeout(() => {
          y(), (S.current = null);
        }, l));
    }, [l, f, y, ...r]),
    {
      droppableRects: v,
      measureDroppableContainers: y,
      measuringScheduled: i != null,
    }
  );
  function w() {
    switch (u) {
      case ms.Always:
        return !1;
      case ms.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Y0(e, t) {
  return As(
    (n) => (e ? n || (typeof t == 'function' ? t(e) : e) : null),
    [t, e],
  );
}
function F5(e, t) {
  return Y0(e, t);
}
function V5(e) {
  let { callback: t, disabled: n } = e;
  const r = Cp(t),
    o = d.useMemo(() => {
      if (n || typeof window > 'u' || typeof window.MutationObserver > 'u')
        return;
      const { MutationObserver: i } = window;
      return new i(r);
    }, [r, n]);
  return d.useEffect(() => () => (o == null ? void 0 : o.disconnect()), [o]), o;
}
function au(e) {
  let { callback: t, disabled: n } = e;
  const r = Cp(t),
    o = d.useMemo(() => {
      if (n || typeof window > 'u' || typeof window.ResizeObserver > 'u')
        return;
      const { ResizeObserver: i } = window;
      return new i(r);
    }, [n]);
  return d.useEffect(() => () => (o == null ? void 0 : o.disconnect()), [o]), o;
}
function z5(e) {
  return new Np(oi(e), e);
}
function Hm(e, t, n) {
  t === void 0 && (t = z5);
  const [r, o] = d.useReducer(l, null),
    i = V5({
      callback(a) {
        if (e)
          for (const u of a) {
            const { type: c, target: f } = u;
            if (
              c === 'childList' &&
              f instanceof HTMLElement &&
              f.contains(e)
            ) {
              o();
              break;
            }
          }
      },
    }),
    s = au({ callback: o });
  return (
    on(() => {
      o(),
        e
          ? (s == null || s.observe(e),
            i == null ||
              i.observe(document.body, { childList: !0, subtree: !0 }))
          : (s == null || s.disconnect(), i == null || i.disconnect());
    }, [e]),
    r
  );
  function l(a) {
    if (!e) return null;
    if (e.isConnected === !1) {
      var u;
      return (u = a ?? n) != null ? u : null;
    }
    const c = t(e);
    return JSON.stringify(a) === JSON.stringify(c) ? a : c;
  }
}
function $5(e) {
  const t = Y0(e);
  return z0(e, t);
}
const Km = [];
function U5(e) {
  const t = d.useRef(e),
    n = As(
      (r) =>
        e
          ? r &&
            r !== Km &&
            e &&
            t.current &&
            e.parentNode === t.current.parentNode
            ? r
            : bp(e)
          : Km,
      [e],
    );
  return (
    d.useEffect(() => {
      t.current = e;
    }, [e]),
    n
  );
}
function B5(e) {
  const [t, n] = d.useState(null),
    r = d.useRef(e),
    o = d.useCallback((i) => {
      const s = yc(i.target);
      s && n((l) => (l ? (l.set(s, Ud(s)), new Map(l)) : null));
    }, []);
  return (
    d.useEffect(() => {
      const i = r.current;
      if (e !== i) {
        s(i);
        const l = e
          .map((a) => {
            const u = yc(a);
            return u
              ? (u.addEventListener('scroll', o, { passive: !0 }), [u, Ud(u)])
              : null;
          })
          .filter((a) => a != null);
        n(l.length ? new Map(l) : null), (r.current = e);
      }
      return () => {
        s(e), s(i);
      };
      function s(l) {
        l.forEach((a) => {
          const u = yc(a);
          u == null || u.removeEventListener('scroll', o);
        });
      }
    }, [o, e]),
    d.useMemo(
      () =>
        e.length
          ? t
            ? Array.from(t.values()).reduce((i, s) => jo(i, s), sn)
            : K0(e)
          : sn,
      [e, t],
    )
  );
}
function Gm(e, t) {
  t === void 0 && (t = []);
  const n = d.useRef(null);
  return (
    d.useEffect(() => {
      n.current = null;
    }, t),
    d.useEffect(() => {
      const r = e !== sn;
      r && !n.current && (n.current = e), !r && n.current && (n.current = null);
    }, [e]),
    n.current ? Sa(e, n.current) : sn
  );
}
function W5(e) {
  d.useEffect(
    () => {
      if (!lu) return;
      const t = e.map((n) => {
        let { sensor: r } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t) n == null || n();
      };
    },
    e.map((t) => {
      let { sensor: n } = t;
      return n;
    }),
  );
}
function H5(e, t) {
  return d.useMemo(
    () =>
      e.reduce((n, r) => {
        let { eventName: o, handler: i } = r;
        return (
          (n[o] = (s) => {
            i(s, t);
          }),
          n
        );
      }, {}),
    [e, t],
  );
}
function X0(e) {
  return d.useMemo(() => (e ? m5(e) : null), [e]);
}
const Sc = [];
function K5(e, t) {
  t === void 0 && (t = oi);
  const [n] = e,
    r = X0(n ? St(n) : null),
    [o, i] = d.useReducer(l, Sc),
    s = au({ callback: i });
  return (
    e.length > 0 && o === Sc && i(),
    on(() => {
      e.length
        ? e.forEach((a) => (s == null ? void 0 : s.observe(a)))
        : (s == null || s.disconnect(), i());
    }, [e]),
    o
  );
  function l() {
    return e.length ? e.map((a) => (W0(a) ? r : new Np(t(a), a))) : Sc;
  }
}
function G5(e) {
  if (!e) return null;
  if (e.children.length > 1) return e;
  const t = e.children[0];
  return js(t) ? t : e;
}
function Z5(e) {
  let { measure: t } = e;
  const [n, r] = d.useState(null),
    o = d.useCallback(
      (u) => {
        for (const { target: c } of u)
          if (js(c)) {
            r((f) => {
              const m = t(c);
              return f ? { ...f, width: m.width, height: m.height } : m;
            });
            break;
          }
      },
      [t],
    ),
    i = au({ callback: o }),
    s = d.useCallback(
      (u) => {
        const c = G5(u);
        i == null || i.disconnect(),
          c && (i == null || i.observe(c)),
          r(c ? t(c) : null);
      },
      [t, i],
    ),
    [l, a] = wa(s);
  return d.useMemo(() => ({ nodeRef: l, rect: n, setRef: a }), [n, l, a]);
}
const Y5 = [
    { sensor: Rp, options: {} },
    { sensor: Z0, options: {} },
  ],
  X5 = { current: {} },
  Il = {
    draggable: { measure: zm },
    droppable: {
      measure: zm,
      strategy: ms.WhileDragging,
      frequency: Wd.Optimized,
    },
    dragOverlay: { measure: oi },
  };
class Ki extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let { disabled: n } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null
      ? n
      : void 0;
  }
}
const Q5 = {
    activatorEvent: null,
    active: null,
    activeNode: null,
    activeNodeRect: null,
    collisions: null,
    containerNodeRect: null,
    draggableNodes: new Map(),
    droppableRects: new Map(),
    droppableContainers: new Ki(),
    over: null,
    dragOverlay: { nodeRef: { current: null }, rect: null, setRef: Ea },
    scrollableAncestors: [],
    scrollableAncestorRects: [],
    measuringConfiguration: Il,
    measureDroppableContainers: Ea,
    windowRect: null,
    measuringScheduled: !1,
  },
  q5 = {
    activatorEvent: null,
    activators: [],
    active: null,
    activeNodeRect: null,
    ariaDescribedById: { draggable: '' },
    dispatch: Ea,
    draggableNodes: new Map(),
    over: null,
    measureDroppableContainers: Ea,
  },
  uu = d.createContext(q5),
  Q0 = d.createContext(Q5);
function J5() {
  return {
    draggable: {
      active: null,
      initialCoordinates: { x: 0, y: 0 },
      nodes: new Map(),
      translate: { x: 0, y: 0 },
    },
    droppable: { containers: new Ki() },
  };
}
function eC(e, t) {
  switch (t.type) {
    case He.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active,
        },
      };
    case He.DragMove:
      return e.draggable.active
        ? {
            ...e,
            draggable: {
              ...e.draggable,
              translate: {
                x: t.coordinates.x - e.draggable.initialCoordinates.x,
                y: t.coordinates.y - e.draggable.initialCoordinates.y,
              },
            },
          }
        : e;
    case He.DragEnd:
    case He.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: { x: 0, y: 0 },
          translate: { x: 0, y: 0 },
        },
      };
    case He.RegisterDroppable: {
      const { element: n } = t,
        { id: r } = n,
        o = new Ki(e.droppable.containers);
      return (
        o.set(r, n), { ...e, droppable: { ...e.droppable, containers: o } }
      );
    }
    case He.SetDroppableDisabled: {
      const { id: n, key: r, disabled: o } = t,
        i = e.droppable.containers.get(n);
      if (!i || r !== i.key) return e;
      const s = new Ki(e.droppable.containers);
      return (
        s.set(n, { ...i, disabled: o }),
        { ...e, droppable: { ...e.droppable, containers: s } }
      );
    }
    case He.UnregisterDroppable: {
      const { id: n, key: r } = t,
        o = e.droppable.containers.get(n);
      if (!o || r !== o.key) return e;
      const i = new Ki(e.droppable.containers);
      return (
        i.delete(n), { ...e, droppable: { ...e.droppable, containers: i } }
      );
    }
    default:
      return e;
  }
}
function tC(e) {
  let { disabled: t } = e;
  const { active: n, activatorEvent: r, draggableNodes: o } = d.useContext(uu),
    i = zd(r),
    s = zd(n == null ? void 0 : n.id);
  return (
    d.useEffect(() => {
      if (!t && !r && i && s != null) {
        if (!Ep(i) || document.activeElement === i.target) return;
        const l = o.get(s);
        if (!l) return;
        const { activatorNode: a, node: u } = l;
        if (!a.current && !u.current) return;
        requestAnimationFrame(() => {
          for (const c of [a.current, u.current]) {
            if (!c) continue;
            const f = W6(c);
            if (f) {
              f.focus();
              break;
            }
          }
        });
      }
    }, [r, t, o, s, i]),
    null
  );
}
function nC(e, t) {
  let { transform: n, ...r } = t;
  return e != null && e.length
    ? e.reduce((o, i) => i({ transform: o, ...r }), n)
    : n;
}
function rC(e) {
  return d.useMemo(
    () => ({
      draggable: { ...Il.draggable, ...(e == null ? void 0 : e.draggable) },
      droppable: { ...Il.droppable, ...(e == null ? void 0 : e.droppable) },
      dragOverlay: {
        ...Il.dragOverlay,
        ...(e == null ? void 0 : e.dragOverlay),
      },
    }),
    [
      e == null ? void 0 : e.draggable,
      e == null ? void 0 : e.droppable,
      e == null ? void 0 : e.dragOverlay,
    ],
  );
}
function oC(e) {
  let { activeNode: t, measure: n, initialRect: r, config: o = !0 } = e;
  const i = d.useRef(!1),
    { x: s, y: l } = typeof o == 'boolean' ? { x: o, y: o } : o;
  on(() => {
    if ((!s && !l) || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r) return;
    const u = t == null ? void 0 : t.node.current;
    if (!u || u.isConnected === !1) return;
    const c = n(u),
      f = z0(c, r);
    if (
      (s || (f.x = 0),
      l || (f.y = 0),
      (i.current = !0),
      Math.abs(f.x) > 0 || Math.abs(f.y) > 0)
    ) {
      const m = $0(u);
      m && m.scrollBy({ top: f.y, left: f.x });
    }
  }, [t, s, l, r, n]);
}
const q0 = d.createContext({ ...sn, scaleX: 1, scaleY: 1 });
var Xn;
(function (e) {
  (e[(e.Uninitialized = 0)] = 'Uninitialized'),
    (e[(e.Initializing = 1)] = 'Initializing'),
    (e[(e.Initialized = 2)] = 'Initialized');
})(Xn || (Xn = {}));
const iC = d.memo(function (t) {
    var n, r, o, i;
    let {
      id: s,
      accessibility: l,
      autoScroll: a = !0,
      children: u,
      sensors: c = Y5,
      collisionDetection: f = a5,
      measuring: m,
      modifiers: y,
      ...S
    } = t;
    const v = d.useReducer(eC, void 0, J5),
      [w, g] = v,
      [h, x] = X6(),
      [E, C] = d.useState(Xn.Uninitialized),
      b = E === Xn.Initialized,
      {
        draggable: { active: N, nodes: R, translate: _ },
        droppable: { containers: j },
      } = w,
      F = N ? R.get(N) : null,
      A = d.useRef({ initial: null, translated: null }),
      D = d.useMemo(() => {
        var Je;
        return N != null
          ? {
              id: N,
              data: (Je = F == null ? void 0 : F.data) != null ? Je : X5,
              rect: A,
            }
          : null;
      }, [N, F]),
      O = d.useRef(null),
      [Z, H] = d.useState(null),
      [W, M] = d.useState(null),
      L = hs(S, Object.values(S)),
      K = Os('DndDescribedBy', s),
      J = d.useMemo(() => j.getEnabled(), [j]),
      ee = rC(m),
      {
        droppableRects: me,
        measureDroppableContainers: pe,
        measuringScheduled: je,
      } = L5(J, {
        dragging: b,
        dependencies: [_.x, _.y],
        config: ee.droppable,
      }),
      ce = D5(R, N),
      q = d.useMemo(() => (W ? $d(W) : null), [W]),
      ie = Zx(),
      ge = F5(ce, ee.draggable.measure);
    oC({
      activeNode: N ? R.get(N) : null,
      config: ie.layoutShiftCompensation,
      initialRect: ge,
      measure: ee.draggable.measure,
    });
    const Q = Hm(ce, ee.draggable.measure, ge),
      se = Hm(ce ? ce.parentElement : null),
      Y = d.useRef({
        activatorEvent: null,
        active: null,
        activeNode: ce,
        collisionRect: null,
        collisions: null,
        droppableRects: me,
        draggableNodes: R,
        draggingNode: null,
        draggingNodeRect: null,
        droppableContainers: j,
        over: null,
        scrollableAncestors: [],
        scrollAdjustedTranslate: null,
      }),
      te = j.getNodeFor((n = Y.current.over) == null ? void 0 : n.id),
      le = Z5({ measure: ee.dragOverlay.measure }),
      de = (r = le.nodeRef.current) != null ? r : ce,
      Pe = b ? ((o = le.rect) != null ? o : Q) : null,
      rt = !!(le.nodeRef.current && le.rect),
      k = $5(rt ? null : Q),
      T = X0(de ? St(de) : null),
      P = U5(b ? (te ?? ce) : null),
      B = K5(P),
      U = nC(y, {
        transform: { x: _.x - k.x, y: _.y - k.y, scaleX: 1, scaleY: 1 },
        activatorEvent: W,
        active: D,
        activeNodeRect: Q,
        containerNodeRect: se,
        draggingNodeRect: Pe,
        over: Y.current.over,
        overlayNodeRect: le.rect,
        scrollableAncestors: P,
        scrollableAncestorRects: B,
        windowRect: T,
      }),
      z = q ? jo(q, _) : null,
      G = B5(P),
      re = Gm(G),
      _e = Gm(G, [Q]),
      Se = jo(U, re),
      Ze = Pe ? d5(Pe, U) : null,
      Mr =
        D && Ze
          ? f({
              active: D,
              collisionRect: Ze,
              droppableRects: me,
              droppableContainers: J,
              pointerCoordinates: z,
            })
          : null,
      eo = i5(Mr, 'id'),
      [At, Us] = d.useState(null),
      Bs = rt ? U : jo(U, _e),
      Ru = u5(Bs, (i = At == null ? void 0 : At.rect) != null ? i : null, Q),
      ci = d.useCallback(
        (Je, Ct) => {
          let { sensor: Et, options: Un } = Ct;
          if (O.current == null) return;
          const Ot = R.get(O.current);
          if (!Ot) return;
          const Kt = Je.nativeEvent,
            cn = new Et({
              active: O.current,
              activeNode: Ot,
              event: Kt,
              options: Un,
              context: Y,
              onStart(Gt) {
                const di = O.current;
                if (di == null) return;
                const fi = R.get(di);
                if (!fi) return;
                const { onDragStart: Ws } = L.current,
                  Hs = { active: { id: di, data: fi.data, rect: A } };
                kt.unstable_batchedUpdates(() => {
                  Ws == null || Ws(Hs),
                    C(Xn.Initializing),
                    g({
                      type: He.DragStart,
                      initialCoordinates: Gt,
                      active: di,
                    }),
                    h({ type: 'onDragStart', event: Hs });
                });
              },
              onMove(Gt) {
                g({ type: He.DragMove, coordinates: Gt });
              },
              onEnd: to(He.DragEnd),
              onCancel: to(He.DragCancel),
            });
          kt.unstable_batchedUpdates(() => {
            H(cn), M(Je.nativeEvent);
          });
          function to(Gt) {
            return async function () {
              const {
                active: fi,
                collisions: Ws,
                over: Hs,
                scrollAdjustedTranslate: lh,
              } = Y.current;
              let pi = null;
              if (fi && lh) {
                const { cancelDrop: hi } = L.current;
                (pi = {
                  activatorEvent: Kt,
                  active: fi,
                  collisions: Ws,
                  delta: lh,
                  over: Hs,
                }),
                  Gt === He.DragEnd &&
                    typeof hi == 'function' &&
                    (await Promise.resolve(hi(pi))) &&
                    (Gt = He.DragCancel);
              }
              (O.current = null),
                kt.unstable_batchedUpdates(() => {
                  g({ type: Gt }),
                    C(Xn.Uninitialized),
                    Us(null),
                    H(null),
                    M(null);
                  const hi = Gt === He.DragEnd ? 'onDragEnd' : 'onDragCancel';
                  if (pi) {
                    const Tu = L.current[hi];
                    Tu == null || Tu(pi), h({ type: hi, event: pi });
                  }
                });
            };
          }
        },
        [R],
      ),
      Hx = d.useCallback(
        (Je, Ct) => (Et, Un) => {
          const Ot = Et.nativeEvent,
            Kt = R.get(Un);
          if (O.current !== null || !Kt || Ot.dndKit || Ot.defaultPrevented)
            return;
          const cn = { active: Kt };
          Je(Et, Ct.options, cn) === !0 &&
            ((Ot.dndKit = { capturedBy: Ct.sensor }),
            (O.current = Un),
            ci(Et, Ct));
        },
        [R, ci],
      ),
      sh = I5(c, Hx);
    W5(c),
      on(() => {
        Q && E === Xn.Initializing && C(Xn.Initialized);
      }, [Q, E]),
      d.useEffect(() => {
        const { onDragMove: Je } = L.current,
          {
            active: Ct,
            activatorEvent: Et,
            collisions: Un,
            over: Ot,
          } = Y.current;
        if (!Ct || !Et) return;
        const Kt = {
          active: Ct,
          activatorEvent: Et,
          collisions: Un,
          delta: { x: Se.x, y: Se.y },
          over: Ot,
        };
        kt.unstable_batchedUpdates(() => {
          Je == null || Je(Kt), h({ type: 'onDragMove', event: Kt });
        });
      }, [Se.x, Se.y]),
      d.useEffect(() => {
        const {
          active: Je,
          activatorEvent: Ct,
          collisions: Et,
          droppableContainers: Un,
          scrollAdjustedTranslate: Ot,
        } = Y.current;
        if (!Je || O.current == null || !Ct || !Ot) return;
        const { onDragOver: Kt } = L.current,
          cn = Un.get(eo),
          to =
            cn && cn.rect.current
              ? {
                  id: cn.id,
                  rect: cn.rect.current,
                  data: cn.data,
                  disabled: cn.disabled,
                }
              : null,
          Gt = {
            active: Je,
            activatorEvent: Ct,
            collisions: Et,
            delta: { x: Ot.x, y: Ot.y },
            over: to,
          };
        kt.unstable_batchedUpdates(() => {
          Us(to), Kt == null || Kt(Gt), h({ type: 'onDragOver', event: Gt });
        });
      }, [eo]),
      on(() => {
        (Y.current = {
          activatorEvent: W,
          active: D,
          activeNode: ce,
          collisionRect: Ze,
          collisions: Mr,
          droppableRects: me,
          draggableNodes: R,
          draggingNode: de,
          draggingNodeRect: Pe,
          droppableContainers: j,
          over: At,
          scrollableAncestors: P,
          scrollAdjustedTranslate: Se,
        }),
          (A.current = { initial: Pe, translated: Ze });
      }, [D, ce, Mr, Ze, R, de, Pe, me, j, At, P, Se]),
      j5({
        ...ie,
        delta: _,
        draggingRect: Ze,
        pointerCoordinates: z,
        scrollableAncestors: P,
        scrollableAncestorRects: B,
      });
    const Kx = d.useMemo(
        () => ({
          active: D,
          activeNode: ce,
          activeNodeRect: Q,
          activatorEvent: W,
          collisions: Mr,
          containerNodeRect: se,
          dragOverlay: le,
          draggableNodes: R,
          droppableContainers: j,
          droppableRects: me,
          over: At,
          measureDroppableContainers: pe,
          scrollableAncestors: P,
          scrollableAncestorRects: B,
          measuringConfiguration: ee,
          measuringScheduled: je,
          windowRect: T,
        }),
        [D, ce, Q, W, Mr, se, le, R, j, me, At, pe, P, B, ee, je, T],
      ),
      Gx = d.useMemo(
        () => ({
          activatorEvent: W,
          activators: sh,
          active: D,
          activeNodeRect: Q,
          ariaDescribedById: { draggable: K },
          dispatch: g,
          draggableNodes: R,
          over: At,
          measureDroppableContainers: pe,
        }),
        [W, sh, D, Q, g, K, R, At, pe],
      );
    return I.createElement(
      V0.Provider,
      { value: x },
      I.createElement(
        uu.Provider,
        { value: Gx },
        I.createElement(
          Q0.Provider,
          { value: Kx },
          I.createElement(q0.Provider, { value: Ru }, u),
        ),
        I.createElement(tC, {
          disabled: (l == null ? void 0 : l.restoreFocus) === !1,
        }),
      ),
      I.createElement(J6, { ...l, hiddenTextDescribedById: K }),
    );
    function Zx() {
      const Je = (Z == null ? void 0 : Z.autoScrollEnabled) === !1,
        Ct = typeof a == 'object' ? a.enabled === !1 : a === !1,
        Et = b && !Je && !Ct;
      return typeof a == 'object' ? { ...a, enabled: Et } : { enabled: Et };
    }
  }),
  sC = d.createContext(null),
  Zm = 'button',
  lC = 'Droppable';
function aC(e) {
  let { id: t, data: n, disabled: r = !1, attributes: o } = e;
  const i = Os(lC),
    {
      activators: s,
      activatorEvent: l,
      active: a,
      activeNodeRect: u,
      ariaDescribedById: c,
      draggableNodes: f,
      over: m,
    } = d.useContext(uu),
    {
      role: y = Zm,
      roleDescription: S = 'draggable',
      tabIndex: v = 0,
    } = o ?? {},
    w = (a == null ? void 0 : a.id) === t,
    g = d.useContext(w ? q0 : sC),
    [h, x] = wa(),
    [E, C] = wa(),
    b = H5(s, t),
    N = hs(n);
  on(
    () => (
      f.set(t, { id: t, key: i, node: h, activatorNode: E, data: N }),
      () => {
        const _ = f.get(t);
        _ && _.key === i && f.delete(t);
      }
    ),
    [f, t],
  );
  const R = d.useMemo(
    () => ({
      role: y,
      tabIndex: v,
      'aria-disabled': r,
      'aria-pressed': w && y === Zm ? !0 : void 0,
      'aria-roledescription': S,
      'aria-describedby': c.draggable,
    }),
    [r, y, v, w, S, c.draggable],
  );
  return {
    active: a,
    activatorEvent: l,
    activeNodeRect: u,
    attributes: R,
    isDragging: w,
    listeners: r ? void 0 : b,
    node: h,
    over: m,
    setNodeRef: x,
    setActivatorNodeRef: C,
    transform: g,
  };
}
function uC() {
  return d.useContext(Q0);
}
const cC = 'Droppable',
  dC = { timeout: 25 };
function J0(e) {
  let { data: t, disabled: n = !1, id: r, resizeObserverConfig: o } = e;
  const i = Os(cC),
    {
      active: s,
      dispatch: l,
      over: a,
      measureDroppableContainers: u,
    } = d.useContext(uu),
    c = d.useRef({ disabled: n }),
    f = d.useRef(!1),
    m = d.useRef(null),
    y = d.useRef(null),
    { disabled: S, updateMeasurementsFor: v, timeout: w } = { ...dC, ...o },
    g = hs(v ?? r),
    h = d.useCallback(() => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current),
        (y.current = setTimeout(() => {
          u(Array.isArray(g.current) ? g.current : [g.current]),
            (y.current = null);
        }, w));
    }, [w]),
    x = au({ callback: h, disabled: S || !s }),
    E = d.useCallback(
      (R, _) => {
        x && (_ && (x.unobserve(_), (f.current = !1)), R && x.observe(R));
      },
      [x],
    ),
    [C, b] = wa(E),
    N = hs(t);
  return (
    d.useEffect(() => {
      !x ||
        !C.current ||
        (x.disconnect(), (f.current = !1), x.observe(C.current));
    }, [C, x]),
    on(
      () => (
        l({
          type: He.RegisterDroppable,
          element: { id: r, key: i, disabled: n, node: C, rect: m, data: N },
        }),
        () => l({ type: He.UnregisterDroppable, key: i, id: r })
      ),
      [r],
    ),
    d.useEffect(() => {
      n !== c.current.disabled &&
        (l({ type: He.SetDroppableDisabled, id: r, key: i, disabled: n }),
        (c.current.disabled = n));
    }, [r, i, n, l]),
    {
      active: s,
      rect: m,
      isOver: (a == null ? void 0 : a.id) === r,
      node: C,
      over: a,
      setNodeRef: b,
    }
  );
}
function Tp(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function fC(e, t) {
  return e.reduce((n, r, o) => {
    const i = t.get(r);
    return i && (n[o] = i), n;
  }, Array(e.length));
}
function cl(e) {
  return e !== null && e >= 0;
}
function pC(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function hC(e) {
  return typeof e == 'boolean' ? { draggable: e, droppable: e } : e;
}
const ey = (e) => {
    let { rects: t, activeIndex: n, overIndex: r, index: o } = e;
    const i = Tp(t, r, n),
      s = t[o],
      l = i[o];
    return !l || !s
      ? null
      : {
          x: l.left - s.left,
          y: l.top - s.top,
          scaleX: l.width / s.width,
          scaleY: l.height / s.height,
        };
  },
  dl = { scaleX: 1, scaleY: 1 },
  mC = (e) => {
    var t;
    let {
      activeIndex: n,
      activeNodeRect: r,
      index: o,
      rects: i,
      overIndex: s,
    } = e;
    const l = (t = i[n]) != null ? t : r;
    if (!l) return null;
    if (o === n) {
      const u = i[s];
      return u
        ? {
            x: 0,
            y: n < s ? u.top + u.height - (l.top + l.height) : u.top - l.top,
            ...dl,
          }
        : null;
    }
    const a = vC(i, o, n);
    return o > n && o <= s
      ? { x: 0, y: -l.height - a, ...dl }
      : o < n && o >= s
        ? { x: 0, y: l.height + a, ...dl }
        : { x: 0, y: 0, ...dl };
  };
function vC(e, t, n) {
  const r = e[t],
    o = e[t - 1],
    i = e[t + 1];
  return r
    ? n < t
      ? o
        ? r.top - (o.top + o.height)
        : i
          ? i.top - (r.top + r.height)
          : 0
      : i
        ? i.top - (r.top + r.height)
        : o
          ? r.top - (o.top + o.height)
          : 0
    : 0;
}
const ty = 'Sortable',
  ny = I.createContext({
    activeIndex: -1,
    containerId: ty,
    disableTransforms: !1,
    items: [],
    overIndex: -1,
    useDragOverlay: !1,
    sortedRects: [],
    strategy: ey,
    disabled: { draggable: !1, droppable: !1 },
  });
function gC(e) {
  let { children: t, id: n, items: r, strategy: o = ey, disabled: i = !1 } = e;
  const {
      active: s,
      dragOverlay: l,
      droppableRects: a,
      over: u,
      measureDroppableContainers: c,
    } = uC(),
    f = Os(ty, n),
    m = l.rect !== null,
    y = d.useMemo(
      () => r.map((b) => (typeof b == 'object' && 'id' in b ? b.id : b)),
      [r],
    ),
    S = s != null,
    v = s ? y.indexOf(s.id) : -1,
    w = u ? y.indexOf(u.id) : -1,
    g = d.useRef(y),
    h = !pC(y, g.current),
    x = (w !== -1 && v === -1) || h,
    E = hC(i);
  on(() => {
    h && S && c(y);
  }, [h, y, S, c]),
    d.useEffect(() => {
      g.current = y;
    }, [y]);
  const C = d.useMemo(
    () => ({
      activeIndex: v,
      containerId: f,
      disabled: E,
      disableTransforms: x,
      items: y,
      overIndex: w,
      useDragOverlay: m,
      sortedRects: fC(y, a),
      strategy: o,
    }),
    [v, f, E.draggable, E.droppable, x, y, w, a, m, o],
  );
  return I.createElement(ny.Provider, { value: C }, t);
}
const yC = (e) => {
    let { id: t, items: n, activeIndex: r, overIndex: o } = e;
    return Tp(n, r, o).indexOf(t);
  },
  xC = (e) => {
    let {
      containerId: t,
      isSorting: n,
      wasDragging: r,
      index: o,
      items: i,
      newIndex: s,
      previousItems: l,
      previousContainerId: a,
      transition: u,
    } = e;
    return !u || !r || (l !== i && o === s) ? !1 : n ? !0 : s !== o && t === a;
  },
  wC = { duration: 200, easing: 'ease' },
  ry = 'transform',
  SC = Ca.Transition.toString({ property: ry, duration: 0, easing: 'linear' }),
  CC = { roleDescription: 'sortable' };
function EC(e) {
  let { disabled: t, index: n, node: r, rect: o } = e;
  const [i, s] = d.useState(null),
    l = d.useRef(n);
  return (
    on(() => {
      if (!t && n !== l.current && r.current) {
        const a = o.current;
        if (a) {
          const u = oi(r.current, { ignoreTransform: !0 }),
            c = {
              x: a.left - u.left,
              y: a.top - u.top,
              scaleX: a.width / u.width,
              scaleY: a.height / u.height,
            };
          (c.x || c.y) && s(c);
        }
      }
      n !== l.current && (l.current = n);
    }, [t, n, r, o]),
    d.useEffect(() => {
      i && s(null);
    }, [i]),
    i
  );
}
function bC(e) {
  let {
    animateLayoutChanges: t = xC,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: i = yC,
    id: s,
    strategy: l,
    resizeObserverConfig: a,
    transition: u = wC,
  } = e;
  const {
      items: c,
      containerId: f,
      activeIndex: m,
      disabled: y,
      disableTransforms: S,
      sortedRects: v,
      overIndex: w,
      useDragOverlay: g,
      strategy: h,
    } = d.useContext(ny),
    x = NC(r, y),
    E = c.indexOf(s),
    C = d.useMemo(
      () => ({ sortable: { containerId: f, index: E, items: c }, ...o }),
      [f, o, E, c],
    ),
    b = d.useMemo(() => c.slice(c.indexOf(s)), [c, s]),
    {
      rect: N,
      node: R,
      isOver: _,
      setNodeRef: j,
    } = J0({
      id: s,
      data: C,
      disabled: x.droppable,
      resizeObserverConfig: { updateMeasurementsFor: b, ...a },
    }),
    {
      active: F,
      activatorEvent: A,
      activeNodeRect: D,
      attributes: O,
      setNodeRef: Z,
      listeners: H,
      isDragging: W,
      over: M,
      setActivatorNodeRef: L,
      transform: K,
    } = aC({
      id: s,
      data: C,
      attributes: { ...CC, ...n },
      disabled: x.draggable,
    }),
    J = z6(j, Z),
    ee = !!F,
    me = ee && !S && cl(m) && cl(w),
    pe = !g && W,
    je = pe && me ? K : null,
    q = me
      ? (je ??
        (l ?? h)({
          rects: v,
          activeNodeRect: D,
          activeIndex: m,
          overIndex: w,
          index: E,
        }))
      : null,
    ie =
      cl(m) && cl(w) ? i({ id: s, items: c, activeIndex: m, overIndex: w }) : E,
    ge = F == null ? void 0 : F.id,
    Q = d.useRef({ activeId: ge, items: c, newIndex: ie, containerId: f }),
    se = c !== Q.current.items,
    Y = t({
      active: F,
      containerId: f,
      isDragging: W,
      isSorting: ee,
      id: s,
      index: E,
      items: c,
      newIndex: Q.current.newIndex,
      previousItems: Q.current.items,
      previousContainerId: Q.current.containerId,
      transition: u,
      wasDragging: Q.current.activeId != null,
    }),
    te = EC({ disabled: !Y, index: E, node: R, rect: N });
  return (
    d.useEffect(() => {
      ee && Q.current.newIndex !== ie && (Q.current.newIndex = ie),
        f !== Q.current.containerId && (Q.current.containerId = f),
        c !== Q.current.items && (Q.current.items = c);
    }, [ee, ie, f, c]),
    d.useEffect(() => {
      if (ge === Q.current.activeId) return;
      if (ge && !Q.current.activeId) {
        Q.current.activeId = ge;
        return;
      }
      const de = setTimeout(() => {
        Q.current.activeId = ge;
      }, 50);
      return () => clearTimeout(de);
    }, [ge]),
    {
      active: F,
      activeIndex: m,
      attributes: O,
      data: C,
      rect: N,
      index: E,
      newIndex: ie,
      items: c,
      isOver: _,
      isSorting: ee,
      isDragging: W,
      listeners: H,
      node: R,
      overIndex: w,
      over: M,
      setNodeRef: J,
      setActivatorNodeRef: L,
      setDroppableNodeRef: j,
      setDraggableNodeRef: Z,
      transform: te ?? q,
      transition: le(),
    }
  );
  function le() {
    if (te || (se && Q.current.newIndex === E)) return SC;
    if (!((pe && !Ep(A)) || !u) && (ee || Y))
      return Ca.Transition.toString({ ...u, property: ry });
  }
}
function NC(e, t) {
  var n, r;
  return typeof e == 'boolean'
    ? { draggable: e, droppable: !1 }
    : {
        draggable:
          (n = e == null ? void 0 : e.draggable) != null ? n : t.draggable,
        droppable:
          (r = e == null ? void 0 : e.droppable) != null ? r : t.droppable,
      };
}
xe.Down, xe.Right, xe.Up, xe.Left;
function kC(e) {
  return ['button', 'input', 'textarea', 'select', 'option'].includes(
    e.tagName.toLowerCase(),
  );
}
class oy extends Rp {}
ah(oy, 'activators', [
  {
    eventName: 'onPointerDown',
    handler: ({ nativeEvent: t }) =>
      !(!t.isPrimary || t.button !== 0 || kC(t.target)),
  },
]);
const Na = An(
    tn(),
    Wo(12, 'Password must be at least 12 characters long'),
    Mi(/[A-Z]/, 'Password must contain at least one uppercase letter'),
    Mi(/[a-z]/, 'Password must contain at least one lowercase letter'),
    Mi(/[0-9]/, 'Password must contain at least one number'),
    Mi(
      /[@$!%*?&]/,
      'Password must contain at least one special character ex: (@$!%*?&)',
    ),
  ),
  Pp = An(
    tn(),
    wr('Please enter your email.'),
    N0('Invalid Email address'),
    Bo(40, 'email Max Length is 40'),
  );
var ka = ((e) => (
  (e.male = 'male'), (e.female = 'female'), (e.other = 'other'), e
))(ka || {});
const RC = An(
    ei({
      userEmail: Pp,
      firstName: An(
        tn(),
        wr('Please enter your FirstName.'),
        Wo(2, 'First Name Must Have Two characters or more'),
        Bo(10, 'First Name Max Length is 10'),
      ),
      lastName: An(
        tn(),
        wr('Please enter your LastName.'),
        Wo(2, 'Last Name Must Have Two characters or more'),
        Bo(10, 'Last Name Max Length is 10'),
      ),
      gender: P0(ka),
      password: Na,
      confirmPassword: tn(),
    }),
    QS(
      k0(
        [['password'], ['confirmPassword']],
        (e) => e.password === e.confirmPassword,
        'The two passwords do not match.',
      ),
      ['confirmPassword'],
    ),
  ),
  TC = ei({
    userEmail: Pp,
    firstName: An(
      tn(),
      wr('Please enter your FirstName.'),
      Wo(2, 'First Name Must Have Two characters or more'),
      Bo(10, 'First Name Max Length is 10'),
    ),
    lastName: An(
      tn(),
      wr('Please enter your LastName.'),
      Wo(2, 'Last Name Must Have Two characters or more'),
      Bo(10, 'Last Name Max Length is 10'),
    ),
    gender: tn(),
  }),
  PC = ei({ userEmail: Pp, password: Na }),
  _C = ei({
    platform: An(tn(), wr('Platform is required')),
    link: An(tn(), wr('Link is required'), R0('Please enter a valid URL')),
  }),
  MC = ei({ links: T0(_C) });
var iy = { exports: {} },
  sy = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ho = d;
function jC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var AC = typeof Object.is == 'function' ? Object.is : jC,
  OC = Ho.useState,
  DC = Ho.useEffect,
  IC = Ho.useLayoutEffect,
  LC = Ho.useDebugValue;
function FC(e, t) {
  var n = t(),
    r = OC({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    IC(
      function () {
        (o.value = n), (o.getSnapshot = t), Cc(o) && i({ inst: o });
      },
      [e, n, t],
    ),
    DC(
      function () {
        return (
          Cc(o) && i({ inst: o }),
          e(function () {
            Cc(o) && i({ inst: o });
          })
        );
      },
      [e],
    ),
    LC(n),
    n
  );
}
function Cc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !AC(e, n);
  } catch {
    return !0;
  }
}
function VC(e, t) {
  return t();
}
var zC =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? VC
    : FC;
sy.useSyncExternalStore =
  Ho.useSyncExternalStore !== void 0 ? Ho.useSyncExternalStore : zC;
iy.exports = sy;
var $C = iy.exports;
const rr = () => {},
  Qe = rr(),
  Ec = Object,
  ve = (e) => e === Qe,
  hn = (e) => typeof e == 'function',
  nn = (e, t) => ({ ...e, ...t }),
  UC = (e) => hn(e.then),
  fl = new WeakMap();
let BC = 0;
const vs = (e) => {
    const t = typeof e,
      n = e && e.constructor,
      r = n == Date;
    let o, i;
    if (Ec(e) === e && !r && n != RegExp) {
      if (((o = fl.get(e)), o)) return o;
      if (((o = ++BC + '~'), fl.set(e, o), n == Array)) {
        for (o = '@', i = 0; i < e.length; i++) o += vs(e[i]) + ',';
        fl.set(e, o);
      }
      if (n == Ec) {
        o = '#';
        const s = Ec.keys(e).sort();
        for (; !ve((i = s.pop())); )
          ve(e[i]) || (o += i + ':' + vs(e[i]) + ',');
        fl.set(e, o);
      }
    } else
      o = r
        ? e.toJSON()
        : t == 'symbol'
          ? e.toString()
          : t == 'string'
            ? JSON.stringify(e)
            : '' + e;
    return o;
  },
  Tn = new WeakMap(),
  bc = {},
  pl = {},
  _p = 'undefined',
  cu = typeof window != _p,
  Hd = typeof document != _p,
  WC = () => cu && typeof window.requestAnimationFrame != _p,
  ly = (e, t) => {
    const n = Tn.get(e);
    return [
      () => (!ve(t) && e.get(t)) || bc,
      (r) => {
        if (!ve(t)) {
          const o = e.get(t);
          t in pl || (pl[t] = o), n[5](t, nn(o, r), o || bc);
        }
      },
      n[6],
      () => (!ve(t) && t in pl ? pl[t] : (!ve(t) && e.get(t)) || bc),
    ];
  };
let Kd = !0;
const HC = () => Kd,
  [Gd, Zd] =
    cu && window.addEventListener
      ? [
          window.addEventListener.bind(window),
          window.removeEventListener.bind(window),
        ]
      : [rr, rr],
  KC = () => {
    const e = Hd && document.visibilityState;
    return ve(e) || e !== 'hidden';
  },
  GC = (e) => (
    Hd && document.addEventListener('visibilitychange', e),
    Gd('focus', e),
    () => {
      Hd && document.removeEventListener('visibilitychange', e), Zd('focus', e);
    }
  ),
  ZC = (e) => {
    const t = () => {
        (Kd = !0), e();
      },
      n = () => {
        Kd = !1;
      };
    return (
      Gd('online', t),
      Gd('offline', n),
      () => {
        Zd('online', t), Zd('offline', n);
      }
    );
  },
  YC = { isOnline: HC, isVisible: KC },
  XC = { initFocus: GC, initReconnect: ZC },
  Yd = !I.useId,
  gs = !cu || 'Deno' in window,
  QC = (e) => (WC() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
  Gi = gs ? d.useEffect : d.useLayoutEffect,
  Nc = typeof navigator < 'u' && navigator.connection,
  Ym =
    !gs && Nc && (['slow-2g', '2g'].includes(Nc.effectiveType) || Nc.saveData),
  du = (e) => {
    if (hn(e))
      try {
        e = e();
      } catch {
        e = '';
      }
    const t = e;
    return (
      (e =
        typeof e == 'string'
          ? e
          : (Array.isArray(e) ? e.length : e)
            ? vs(e)
            : ''),
      [e, t]
    );
  };
let qC = 0;
const ys = () => ++qC,
  ay = 0,
  uy = 1,
  cy = 2,
  JC = 3;
var ki = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: JC,
  FOCUS_EVENT: ay,
  MUTATE_EVENT: cy,
  RECONNECT_EVENT: uy,
};
async function dy(...e) {
  const [t, n, r, o] = e,
    i = nn(
      { populateCache: !0, throwOnError: !0 },
      typeof o == 'boolean' ? { revalidate: o } : o || {},
    );
  let s = i.populateCache;
  const l = i.rollbackOnError;
  let a = i.optimisticData;
  const u = (m) => (typeof l == 'function' ? l(m) : l !== !1),
    c = i.throwOnError;
  if (hn(n)) {
    const m = n,
      y = [],
      S = t.keys();
    for (const v of S) !/^\$(inf|sub)\$/.test(v) && m(t.get(v)._k) && y.push(v);
    return Promise.all(y.map(f));
  }
  return f(n);
  async function f(m) {
    const [y] = du(m);
    if (!y) return;
    const [S, v] = ly(t, y),
      [w, g, h, x] = Tn.get(t),
      E = () => {
        const D = w[y];
        return (hn(i.revalidate)
          ? i.revalidate(S().data, m)
          : i.revalidate !== !1) && (delete h[y], delete x[y], D && D[0])
          ? D[0](cy).then(() => S().data)
          : S().data;
      };
    if (e.length < 3) return E();
    let C = r,
      b;
    const N = ys();
    g[y] = [N, 0];
    const R = !ve(a),
      _ = S(),
      j = _.data,
      F = _._c,
      A = ve(F) ? j : F;
    if ((R && ((a = hn(a) ? a(A, j) : a), v({ data: a, _c: A })), hn(C)))
      try {
        C = C(A);
      } catch (D) {
        b = D;
      }
    if (C && UC(C))
      if (
        ((C = await C.catch((D) => {
          b = D;
        })),
        N !== g[y][0])
      ) {
        if (b) throw b;
        return C;
      } else b && R && u(b) && ((s = !0), v({ data: A, _c: Qe }));
    if (s && !b)
      if (hn(s)) {
        const D = s(C, A);
        v({ data: D, error: Qe, _c: Qe });
      } else v({ data: C, error: Qe, _c: Qe });
    if (
      ((g[y][1] = ys()),
      Promise.resolve(E()).then(() => {
        v({ _c: Qe });
      }),
      b)
    ) {
      if (c) throw b;
      return;
    }
    return C;
  }
}
const Xm = (e, t) => {
    for (const n in e) e[n][0] && e[n][0](t);
  },
  eE = (e, t) => {
    if (!Tn.has(e)) {
      const n = nn(XC, t),
        r = {},
        o = dy.bind(Qe, e);
      let i = rr;
      const s = {},
        l = (c, f) => {
          const m = s[c] || [];
          return (s[c] = m), m.push(f), () => m.splice(m.indexOf(f), 1);
        },
        a = (c, f, m) => {
          e.set(c, f);
          const y = s[c];
          if (y) for (const S of y) S(f, m);
        },
        u = () => {
          if (!Tn.has(e) && (Tn.set(e, [r, {}, {}, {}, o, a, l]), !gs)) {
            const c = n.initFocus(setTimeout.bind(Qe, Xm.bind(Qe, r, ay))),
              f = n.initReconnect(setTimeout.bind(Qe, Xm.bind(Qe, r, uy)));
            i = () => {
              c && c(), f && f(), Tn.delete(e);
            };
          }
        };
      return u(), [e, o, u, i];
    }
    return [e, Tn.get(e)[4]];
  },
  tE = (e, t, n, r, o) => {
    const i = n.errorRetryCount,
      s = o.retryCount,
      l =
        ~~((Math.random() + 0.5) * (1 << (s < 8 ? s : 8))) *
        n.errorRetryInterval;
    (!ve(i) && s > i) || setTimeout(r, l, o);
  },
  nE = (e, t) => vs(e) == vs(t),
  [fy, rE] = eE(new Map()),
  oE = nn(
    {
      onLoadingSlow: rr,
      onSuccess: rr,
      onError: rr,
      onErrorRetry: tE,
      onDiscarded: rr,
      revalidateOnFocus: !0,
      revalidateOnReconnect: !0,
      revalidateIfStale: !0,
      shouldRetryOnError: !0,
      errorRetryInterval: Ym ? 1e4 : 5e3,
      focusThrottleInterval: 5 * 1e3,
      dedupingInterval: 2 * 1e3,
      loadingTimeout: Ym ? 5e3 : 3e3,
      compare: nE,
      isPaused: () => !1,
      cache: fy,
      mutate: rE,
      fallback: {},
    },
    YC,
  ),
  iE = (e, t) => {
    const n = nn(e, t);
    if (t) {
      const { use: r, fallback: o } = e,
        { use: i, fallback: s } = t;
      r && i && (n.use = r.concat(i)), o && s && (n.fallback = nn(o, s));
    }
    return n;
  },
  sE = d.createContext({}),
  lE = '$inf$',
  py = cu && window.__SWR_DEVTOOLS_USE__,
  aE = py ? window.__SWR_DEVTOOLS_USE__ : [],
  uE = () => {
    py && (window.__SWR_DEVTOOLS_REACT__ = I);
  },
  hy = (e) =>
    hn(e[1])
      ? [e[0], e[1], e[2] || {}]
      : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}],
  my = () => nn(oE, d.useContext(sE)),
  cE = (e) => (t, n, r) =>
    e(
      t,
      n &&
        ((...i) => {
          const [s] = du(t),
            [, , , l] = Tn.get(fy);
          if (s.startsWith(lE)) return n(...i);
          const a = l[s];
          return ve(a) ? n(...i) : (delete l[s], a);
        }),
      r,
    ),
  dE = aE.concat(cE),
  fE = (e) =>
    function (...n) {
      const r = my(),
        [o, i, s] = hy(n),
        l = iE(r, s);
      let a = e;
      const { use: u } = l,
        c = (u || []).concat(dE);
      for (let f = c.length; f--; ) a = c[f](a);
      return a(o, i || l.fetcher || null, l);
    },
  pE = (e, t, n) => {
    const r = t[e] || (t[e] = []);
    return (
      r.push(n),
      () => {
        const o = r.indexOf(n);
        o >= 0 && ((r[o] = r[r.length - 1]), r.pop());
      }
    );
  },
  hE =
    (e, t) =>
    (...n) => {
      const [r, o, i] = hy(n),
        s = (i.use || []).concat(t);
      return e(r, o, { ...i, use: s });
    };
uE();
const Qm =
    I.use ||
    ((e) => {
      if (e.status === 'pending') throw e;
      if (e.status === 'fulfilled') return e.value;
      throw e.status === 'rejected'
        ? e.reason
        : ((e.status = 'pending'),
          e.then(
            (t) => {
              (e.status = 'fulfilled'), (e.value = t);
            },
            (t) => {
              (e.status = 'rejected'), (e.reason = t);
            },
          ),
          e);
    }),
  kc = { dedupe: !0 },
  mE = (e, t, n) => {
    const {
        cache: r,
        compare: o,
        suspense: i,
        fallbackData: s,
        revalidateOnMount: l,
        revalidateIfStale: a,
        refreshInterval: u,
        refreshWhenHidden: c,
        refreshWhenOffline: f,
        keepPreviousData: m,
      } = n,
      [y, S, v, w] = Tn.get(r),
      [g, h] = du(e),
      x = d.useRef(!1),
      E = d.useRef(!1),
      C = d.useRef(g),
      b = d.useRef(t),
      N = d.useRef(n),
      R = () => N.current,
      _ = () => R().isVisible() && R().isOnline(),
      [j, F, A, D] = ly(r, g),
      O = d.useRef({}).current,
      Z = ve(s) ? n.fallback[g] : s,
      H = (Y, te) => {
        for (const le in O) {
          const de = le;
          if (de === 'data') {
            if (!o(Y[de], te[de]) && (!ve(Y[de]) || !o(je, te[de]))) return !1;
          } else if (te[de] !== Y[de]) return !1;
        }
        return !0;
      },
      W = d.useMemo(() => {
        const Y =
            !g || !t
              ? !1
              : ve(l)
                ? R().isPaused() || i
                  ? !1
                  : ve(a)
                    ? !0
                    : a
                : l,
          te = (T) => {
            const P = nn(T);
            return (
              delete P._k, Y ? { isValidating: !0, isLoading: !0, ...P } : P
            );
          },
          le = j(),
          de = D(),
          Pe = te(le),
          rt = le === de ? Pe : te(de);
        let k = Pe;
        return [
          () => {
            const T = te(j());
            return H(T, k)
              ? ((k.data = T.data),
                (k.isLoading = T.isLoading),
                (k.isValidating = T.isValidating),
                (k.error = T.error),
                k)
              : ((k = T), T);
          },
          () => rt,
        ];
      }, [r, g]),
      M = $C.useSyncExternalStore(
        d.useCallback(
          (Y) =>
            A(g, (te, le) => {
              H(le, te) || Y();
            }),
          [r, g],
        ),
        W[0],
        W[1],
      ),
      L = !x.current,
      K = y[g] && y[g].length > 0,
      J = M.data,
      ee = ve(J) ? Z : J,
      me = M.error,
      pe = d.useRef(ee),
      je = m ? (ve(J) ? pe.current : J) : ee,
      ce =
        K && !ve(me)
          ? !1
          : L && !ve(l)
            ? l
            : R().isPaused()
              ? !1
              : i
                ? ve(ee)
                  ? !1
                  : a
                : ve(ee) || a,
      q = !!(g && t && L && ce),
      ie = ve(M.isValidating) ? q : M.isValidating,
      ge = ve(M.isLoading) ? q : M.isLoading,
      Q = d.useCallback(
        async (Y) => {
          const te = b.current;
          if (!g || !te || E.current || R().isPaused()) return !1;
          let le,
            de,
            Pe = !0;
          const rt = Y || {},
            k = !v[g] || !rt.dedupe,
            T = () =>
              Yd ? !E.current && g === C.current && x.current : g === C.current,
            P = { isValidating: !1, isLoading: !1 },
            B = () => {
              F(P);
            },
            U = () => {
              const G = v[g];
              G && G[1] === de && delete v[g];
            },
            z = { isValidating: !0 };
          ve(j().data) && (z.isLoading = !0);
          try {
            if (
              (k &&
                (F(z),
                n.loadingTimeout &&
                  ve(j().data) &&
                  setTimeout(() => {
                    Pe && T() && R().onLoadingSlow(g, n);
                  }, n.loadingTimeout),
                (v[g] = [te(h), ys()])),
              ([le, de] = v[g]),
              (le = await le),
              k && setTimeout(U, n.dedupingInterval),
              !v[g] || v[g][1] !== de)
            )
              return k && T() && R().onDiscarded(g), !1;
            P.error = Qe;
            const G = S[g];
            if (!ve(G) && (de <= G[0] || de <= G[1] || G[1] === 0))
              return B(), k && T() && R().onDiscarded(g), !1;
            const re = j().data;
            (P.data = o(re, le) ? re : le), k && T() && R().onSuccess(le, g, n);
          } catch (G) {
            U();
            const re = R(),
              { shouldRetryOnError: _e } = re;
            re.isPaused() ||
              ((P.error = G),
              k &&
                T() &&
                (re.onError(G, g, re),
                (_e === !0 || (hn(_e) && _e(G))) &&
                  (!R().revalidateOnFocus ||
                    !R().revalidateOnReconnect ||
                    _()) &&
                  re.onErrorRetry(
                    G,
                    g,
                    re,
                    (Se) => {
                      const Ze = y[g];
                      Ze && Ze[0] && Ze[0](ki.ERROR_REVALIDATE_EVENT, Se);
                    },
                    { retryCount: (rt.retryCount || 0) + 1, dedupe: !0 },
                  )));
          }
          return (Pe = !1), B(), !0;
        },
        [g, r],
      ),
      se = d.useCallback((...Y) => dy(r, C.current, ...Y), []);
    if (
      (Gi(() => {
        (b.current = t), (N.current = n), ve(J) || (pe.current = J);
      }),
      Gi(() => {
        if (!g) return;
        const Y = Q.bind(Qe, kc);
        let te = 0;
        const de = pE(g, y, (Pe, rt = {}) => {
          if (Pe == ki.FOCUS_EVENT) {
            const k = Date.now();
            R().revalidateOnFocus &&
              k > te &&
              _() &&
              ((te = k + R().focusThrottleInterval), Y());
          } else if (Pe == ki.RECONNECT_EVENT)
            R().revalidateOnReconnect && _() && Y();
          else {
            if (Pe == ki.MUTATE_EVENT) return Q();
            if (Pe == ki.ERROR_REVALIDATE_EVENT) return Q(rt);
          }
        });
        return (
          (E.current = !1),
          (C.current = g),
          (x.current = !0),
          F({ _k: h }),
          ce && (ve(ee) || gs ? Y() : QC(Y)),
          () => {
            (E.current = !0), de();
          }
        );
      }, [g]),
      Gi(() => {
        let Y;
        function te() {
          const de = hn(u) ? u(j().data) : u;
          de && Y !== -1 && (Y = setTimeout(le, de));
        }
        function le() {
          !j().error && (c || R().isVisible()) && (f || R().isOnline())
            ? Q(kc).then(te)
            : te();
        }
        return (
          te(),
          () => {
            Y && (clearTimeout(Y), (Y = -1));
          }
        );
      }, [u, c, f, g]),
      d.useDebugValue(je),
      i && ve(ee) && g)
    ) {
      if (!Yd && gs)
        throw new Error(
          'Fallback data is required when using suspense in SSR.',
        );
      (b.current = t), (N.current = n), (E.current = !1);
      const Y = w[g];
      if (!ve(Y)) {
        const te = se(Y);
        Qm(te);
      }
      if (ve(me)) {
        const te = Q(kc);
        ve(je) || ((te.status = 'fulfilled'), (te.value = !0)), Qm(te);
      } else throw me;
    }
    return {
      mutate: se,
      get data() {
        return (O.data = !0), je;
      },
      get error() {
        return (O.error = !0), me;
      },
      get isValidating() {
        return (O.isValidating = !0), ie;
      },
      get isLoading() {
        return (O.isLoading = !0), ge;
      },
    };
  },
  vE = fE(mE),
  qm = Yd
    ? (e) => {
        e();
      }
    : I.startTransition,
  gE = (e) => {
    const [, t] = d.useState({}),
      n = d.useRef(!1),
      r = d.useRef(e),
      o = d.useRef({ data: !1, error: !1, isValidating: !1 }),
      i = d.useCallback((s) => {
        let l = !1;
        const a = r.current;
        for (const u in s) {
          const c = u;
          a[c] !== s[c] && ((a[c] = s[c]), o.current[c] && (l = !0));
        }
        l && !n.current && t({});
      }, []);
    return (
      Gi(
        () => (
          (n.current = !1),
          () => {
            n.current = !0;
          }
        ),
      ),
      [r, o.current, i]
    );
  },
  yE =
    () =>
    (e, t, n = {}) => {
      const { mutate: r } = my(),
        o = d.useRef(e),
        i = d.useRef(t),
        s = d.useRef(n),
        l = d.useRef(0),
        [a, u, c] = gE({ data: Qe, error: Qe, isMutating: !1 }),
        f = a.current,
        m = d.useCallback(async (S, v) => {
          const [w, g] = du(o.current);
          if (!i.current)
            throw new Error('Can’t trigger the mutation: missing fetcher.');
          if (!w) throw new Error('Can’t trigger the mutation: missing key.');
          const h = nn(
              nn({ populateCache: !1, throwOnError: !0 }, s.current),
              v,
            ),
            x = ys();
          (l.current = x), c({ isMutating: !0 });
          try {
            const E = await r(
              w,
              i.current(g, { arg: S }),
              nn(h, { throwOnError: !0 }),
            );
            return (
              l.current <= x &&
                (qm(() => c({ data: E, isMutating: !1, error: void 0 })),
                h.onSuccess == null || h.onSuccess.call(h, E, w, h)),
              E
            );
          } catch (E) {
            if (
              l.current <= x &&
              (qm(() => c({ error: E, isMutating: !1 })),
              h.onError == null || h.onError.call(h, E, w, h),
              h.throwOnError)
            )
              throw E;
          }
        }, []),
        y = d.useCallback(() => {
          (l.current = ys()), c({ data: Qe, error: Qe, isMutating: !1 });
        }, []);
      return (
        Gi(() => {
          (o.current = e), (i.current = t), (s.current = n);
        }),
        {
          trigger: m,
          reset: y,
          get data() {
            return (u.data = !0), f.data;
          },
          get error() {
            return (u.error = !0), f.error;
          },
          get isMutating() {
            return (u.isMutating = !0), f.isMutating;
          },
        }
      );
    },
  Ds = hE(vE, yE),
  Zr = (e) => `http://localhost:3000/api/v1/${e}`,
  xE = 1,
  wE = 1e6;
let Rc = 0;
function SE() {
  return (Rc = (Rc + 1) % Number.MAX_SAFE_INTEGER), Rc.toString();
}
const Tc = new Map(),
  Jm = (e) => {
    if (Tc.has(e)) return;
    const t = setTimeout(() => {
      Tc.delete(e), Zi({ type: 'REMOVE_TOAST', toastId: e });
    }, wE);
    Tc.set(e, t);
  },
  CE = (e, t) => {
    switch (t.type) {
      case 'ADD_TOAST':
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, xE) };
      case 'UPDATE_TOAST':
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case 'DISMISS_TOAST': {
        const { toastId: n } = t;
        return (
          n
            ? Jm(n)
            : e.toasts.forEach((r) => {
                Jm(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case 'REMOVE_TOAST':
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Ll = [];
let Fl = { toasts: [] };
function Zi(e) {
  (Fl = CE(Fl, e)),
    Ll.forEach((t) => {
      t(Fl);
    });
}
function gr({ ...e }) {
  const t = SE(),
    n = (o) => Zi({ type: 'UPDATE_TOAST', toast: { ...o, id: t } }),
    r = () => Zi({ type: 'DISMISS_TOAST', toastId: t });
  return (
    Zi({
      type: 'ADD_TOAST',
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function vy() {
  const [e, t] = d.useState(Fl);
  return (
    d.useEffect(
      () => (
        Ll.push(t),
        () => {
          const n = Ll.indexOf(t);
          n > -1 && Ll.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: gr,
      dismiss: (n) => Zi({ type: 'DISMISS_TOAST', toastId: n }),
    }
  );
}
const Is = ({ w: e = 8, h: t = 8 }) =>
    p.jsxs('div', {
      role: 'status',
      children: [
        p.jsxs('svg', {
          'aria-hidden': 'true',
          className: `w-${e} h-${t} text-gray-200 animate-spin dark:text-gray-600 fill-blue-600`,
          viewBox: '0 0 100 101',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            p.jsx('path', {
              d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
              fill: 'currentColor',
            }),
            p.jsx('path', {
              d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
              fill: 'currentFill',
            }),
          ],
        }),
        p.jsx('span', { className: 'sr-only', children: 'Loading...' }),
      ],
    }),
  ev = (e) => {
    let t;
    const n = new Set(),
      r = (u, c) => {
        const f = typeof u == 'function' ? u(t) : u;
        if (!Object.is(f, t)) {
          const m = t;
          (t =
            (c ?? (typeof f != 'object' || f === null))
              ? f
              : Object.assign({}, t, f)),
            n.forEach((y) => y(t, m));
        }
      },
      o = () => t,
      l = {
        setState: r,
        getState: o,
        getInitialState: () => a,
        subscribe: (u) => (n.add(u), () => n.delete(u)),
      },
      a = (t = e(r, o, l));
    return l;
  },
  EE = (e) => (e ? ev(e) : ev),
  bE = (e) => e;
function NE(e, t = bE) {
  const n = I.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState()),
  );
  return I.useDebugValue(n), n;
}
const kE = (e) => {
    const t = EE(e),
      n = (r) => NE(t, r);
    return Object.assign(n, t), n;
  },
  RE = (e) => kE;
function gy(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      var i;
      const s = (a) => (a === null ? null : JSON.parse(a, void 0)),
        l = (i = n.getItem(o)) != null ? i : null;
      return l instanceof Promise ? l.then(s) : s(l);
    },
    setItem: (o, i) => n.setItem(o, JSON.stringify(i, void 0)),
    removeItem: (o) => n.removeItem(o),
  };
}
const Xd = (e) => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return Xd(r)(n);
            },
            catch(r) {
              return this;
            },
          };
    } catch (n) {
      return {
        then(r) {
          return this;
        },
        catch(r) {
          return Xd(r)(n);
        },
      };
    }
  },
  TE = (e, t) => (n, r, o) => {
    let i = {
        storage: gy(() => localStorage),
        partialize: (v) => v,
        version: 0,
        merge: (v, w) => ({ ...w, ...v }),
        ...t,
      },
      s = !1;
    const l = new Set(),
      a = new Set();
    let u = i.storage;
    if (!u)
      return e(
        (...v) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`,
          ),
            n(...v);
        },
        r,
        o,
      );
    const c = () => {
        const v = i.partialize({ ...r() });
        return u.setItem(i.name, { state: v, version: i.version });
      },
      f = o.setState;
    o.setState = (v, w) => {
      f(v, w), c();
    };
    const m = e(
      (...v) => {
        n(...v), c();
      },
      r,
      o,
    );
    o.getInitialState = () => m;
    let y;
    const S = () => {
      var v, w;
      if (!u) return;
      (s = !1),
        l.forEach((h) => {
          var x;
          return h((x = r()) != null ? x : m);
        });
      const g =
        ((w = i.onRehydrateStorage) == null
          ? void 0
          : w.call(i, (v = r()) != null ? v : m)) || void 0;
      return Xd(u.getItem.bind(u))(i.name)
        .then((h) => {
          if (h)
            if (typeof h.version == 'number' && h.version !== i.version) {
              if (i.migrate) return [!0, i.migrate(h.state, h.version)];
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided",
              );
            } else return [!1, h.state];
          return [!1, void 0];
        })
        .then((h) => {
          var x;
          const [E, C] = h;
          if (((y = i.merge(C, (x = r()) != null ? x : m)), n(y, !0), E))
            return c();
        })
        .then(() => {
          g == null || g(y, void 0),
            (y = r()),
            (s = !0),
            a.forEach((h) => h(y));
        })
        .catch((h) => {
          g == null || g(void 0, h);
        });
    };
    return (
      (o.persist = {
        setOptions: (v) => {
          (i = { ...i, ...v }), v.storage && (u = v.storage);
        },
        clearStorage: () => {
          u == null || u.removeItem(i.name);
        },
        getOptions: () => i,
        rehydrate: () => S(),
        hasHydrated: () => s,
        onHydrate: (v) => (
          l.add(v),
          () => {
            l.delete(v);
          }
        ),
        onFinishHydration: (v) => (
          a.add(v),
          () => {
            a.delete(v);
          }
        ),
      }),
      i.skipHydration || S(),
      y || m
    );
  },
  PE = TE,
  _E = (e) => ({
    user: null,
    isProfileDraft: !1,
    setProfileDraft: (t) => e((n) => ({ ...n, isProfileDraft: t })),
    setUser: (t) => e((n) => ({ ...n, user: { ...n.user, ...t } })),
    clearUser: () => e({ user: null }),
  }),
  ME = (e) => ({
    links: [],
    islinkDraft: !1,
    setlinkDraft: (t) => e((n) => ({ ...n, islinkDraft: t })),
    setLinks: (t) => e((n) => ({ ...n, links: t })),
    addLink: (t) => e((n) => ({ ...n, links: [...n.links, t] })),
    clearLinks: () => e({ links: [] }),
  }),
  at = RE()(
    PE((...e) => ({ ..._E(...e), ...ME(...e) }), {
      name: 'store-storage',
      storage: gy(() => localStorage),
    }),
  ),
  jE = () =>
    p.jsxs('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '300',
      height: '231',
      fill: 'none',
      viewBox: '0 0 250 161',
      children: [
        p.jsx('path', {
          fill: '#fff',
          d: 'M48.694 15.421C23.379 25.224 4.594 50.068.858 80.128c-3.12 25.331 4.335 53.318 48.23 61.291 85.406 15.52 173.446 17.335 193.864-24.525 20.417-41.86-7.525-108.891-50.873-113.53C157.683-.326 98.146-3.721 48.694 15.42Z',
          opacity: '.3',
        }),
        p.jsx('path', {
          fill: '#333',
          d: 'M157.022 9.567H93.044a7.266 7.266 0 0 0-7.266 7.267v120.91a7.266 7.266 0 0 0 7.266 7.266h63.978a7.266 7.266 0 0 0 7.267-7.266V16.834a7.266 7.266 0 0 0-7.267-7.267Z',
        }),
        p.jsx('path', {
          fill: '#333',
          d: 'M125.033 140.872a5.687 5.687 0 1 0 0-11.374 5.687 5.687 0 0 0 0 11.374Z',
          opacity: '.03',
        }),
        p.jsx('path', {
          fill: '#EFEBFF',
          d: 'M156.628 21.321H93.431V126.78h63.197V21.321Z',
        }),
        p.jsx('path', {
          fill: '#333',
          d: 'M117.797 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13Z',
          opacity: '.03',
        }),
        p.jsx('path', {
          fill: '#fff',
          d: 'M125.033 120.508a2.066 2.066 0 1 0 0-4.132 2.066 2.066 0 0 0 0 4.132Z',
          opacity: '.44',
        }),
        p.jsx('path', {
          fill: '#333',
          d: 'M132.269 120.508a2.066 2.066 0 1 0 0-4.132 2.066 2.066 0 0 0 0 4.132ZM148.199 32.953h-46.332v39.552h46.332V32.953ZM134.373 80.129h-32.506v3.621h32.506V80.13ZM148.199 80.129h-11.632v3.621h11.632V80.13ZM117.053 91.237h-15.186v3.622h15.186v-3.622ZM148.199 91.237H120.28v3.622h27.919v-3.622ZM136.954 102.353h-35.087v3.622h35.087v-3.622Z',
          opacity: '.03',
        }),
        p.jsx('path', {
          fill: '#EFEBFF',
          d: 'M78.656 21.321H15.459V126.78h63.197V21.321Z',
        }),
        p.jsx('path', {
          fill: '#fff',
          d: 'M39.825 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13Z',
          opacity: '.44',
        }),
        p.jsx('path', {
          fill: '#333',
          d: 'M47.061 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13ZM54.297 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13ZM70.227 32.953H23.895v39.552h46.332V32.953ZM56.4 80.129H23.895v3.621H56.4V80.13ZM70.227 80.129H58.595v3.621h11.632V80.13ZM39.08 91.237H23.896v3.622H39.08v-3.622ZM70.227 91.237h-27.92v3.622h27.92v-3.622ZM58.982 102.353H23.895v3.622h35.087v-3.622Z',
          opacity: '.03',
        }),
        p.jsx('path', {
          fill: '#EFEBFF',
          d: 'M234.6 21.321h-63.197V126.78H234.6V21.321Z',
        }),
        p.jsx('path', {
          fill: '#333',
          d: 'M195.769 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13ZM203.005 120.508a2.066 2.066 0 1 0 0-4.132 2.066 2.066 0 0 0 0 4.132Z',
          opacity: '.03',
        }),
        p.jsx('path', {
          fill: '#fff',
          d: 'M210.242 120.508a2.066 2.066 0 1 0-.001-4.131 2.066 2.066 0 0 0 .001 4.131Z',
          opacity: '.44',
        }),
        p.jsx('path', {
          fill: '#333',
          d: 'M226.171 32.953h-46.332v39.552h46.332V32.953ZM212.345 80.129h-32.506v3.621h32.506V80.13ZM226.171 80.129h-11.632v3.621h11.632V80.13ZM195.025 91.237h-15.186v3.622h15.186v-3.622ZM226.179 91.237H198.26v3.622h27.919v-3.622ZM214.926 102.353h-35.087v3.622h35.087v-3.622Z',
          opacity: '.03',
        }),
        p.jsx('path', {
          fill: '#333',
          d: 'M146.597 145.041c0-.76-1.61-31.891-.577-36.522 1.033-4.632 10.509-27.274 8.011-29.917-2.498-2.642-11.648 3.372-11.648 3.372s1.671-27.267-2.278-29.21c-3.948-1.944-5.702 5.671-5.702 5.671L132.3 88.936l-10.418 55.96 24.715.145Z',
          opacity: '.1',
        }),
        p.jsx('path', {
          fill: '#F4A28C',
          d: 'M139.559 113.295c1.328-5.316 3.325-10.502 4.601-15.87.843-3.553 6.295-18.405 7.821-22.779.47-1.344.873-2.969-.038-4.062a2.646 2.646 0 0 0-2.422-.76 4.842 4.842 0 0 0-2.339 1.223c-1.519 1.337-4.32 7.95-6.371 7.943-2.482 0-1.313-6.834-1.381-8.148-.281-5.656.136-12.908-2.073-18.223-1.64-3.948-5.71-3.417-6.667.85-.957 4.268-.919 22.15-.919 22.15s-15.884-2.727-18.595 2.118c-2.711 4.844 1.868 35.618 1.868 35.618l26.515-.06Z',
        }),
        p.jsx('path', {
          fill: '#633CFF',
          d: 'm141.495 160.5-.289-48.906-29.681-6.515L99.574 160.5h41.921Z',
        }),
        p.jsx('path', {
          fill: '#333',
          d: 'm141.495 160.5-.289-48.906-14.168-3.113-2.536 52.019h16.993Z',
          opacity: '.1',
        }),
      ],
    });
function tv(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ne(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function AE(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = d.createContext(s),
      a = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: m, children: y, ...S } = f,
        v = (m == null ? void 0 : m[e][a]) || l,
        w = d.useMemo(() => S, Object.values(S));
      return p.jsx(v.Provider, { value: w, children: y });
    }
    function c(f, m) {
      const y = (m == null ? void 0 : m[e][a]) || l,
        S = d.useContext(y);
      if (S) return S;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + 'Provider'), [u, c];
  }
  const o = () => {
    const i = n.map((s) => d.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return d.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, OE(o, ...t)];
}
function OE(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(i)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function fu(e) {
  const t = e + 'CollectionProvider',
    [n, r] = AE(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (y) => {
      const { scope: S, children: v } = y,
        w = I.useRef(null),
        g = I.useRef(new Map()).current;
      return p.jsx(o, { scope: S, itemMap: g, collectionRef: w, children: v });
    };
  s.displayName = t;
  const l = e + 'CollectionSlot',
    a = I.forwardRef((y, S) => {
      const { scope: v, children: w } = y,
        g = i(l, v),
        h = Te(S, g.collectionRef);
      return p.jsx(Gr, { ref: h, children: w });
    });
  a.displayName = l;
  const u = e + 'CollectionItemSlot',
    c = 'data-radix-collection-item',
    f = I.forwardRef((y, S) => {
      const { scope: v, children: w, ...g } = y,
        h = I.useRef(null),
        x = Te(S, h),
        E = i(u, v);
      return (
        I.useEffect(
          () => (
            E.itemMap.set(h, { ref: h, ...g }), () => void E.itemMap.delete(h)
          ),
        ),
        p.jsx(Gr, { [c]: '', ref: x, children: w })
      );
    });
  f.displayName = u;
  function m(y) {
    const S = i(e + 'CollectionConsumer', y);
    return I.useCallback(() => {
      const w = S.collectionRef.current;
      if (!w) return [];
      const g = Array.from(w.querySelectorAll(`[${c}]`));
      return Array.from(S.itemMap.values()).sort(
        (E, C) => g.indexOf(E.ref.current) - g.indexOf(C.ref.current),
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [{ Provider: s, Slot: a, ItemSlot: f }, m, r];
}
function Mp(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = d.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (f) => {
      var g;
      const { scope: m, children: y, ...S } = f,
        v = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[a]) || l,
        w = d.useMemo(() => S, Object.values(S));
      return p.jsx(v.Provider, { value: w, children: y });
    };
    u.displayName = i + 'Provider';
    function c(f, m) {
      var v;
      const y = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[a]) || l,
        S = d.useContext(y);
      if (S) return S;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => d.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return d.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, DE(o, ...t)];
}
function DE(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(i)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var IE = d.createContext(void 0);
function yy(e) {
  const t = d.useContext(IE);
  return e || t || 'ltr';
}
var LE = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  ae = LE.reduce((e, t) => {
    const n = d.forwardRef((r, o) => {
      const { asChild: i, ...s } = r,
        l = i ? Gr : t;
      return (
        typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
        p.jsx(l, { ...s, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Ra(e, t) {
  e && kt.flushSync(() => e.dispatchEvent(t));
}
function Ve(e) {
  const t = d.useRef(e);
  return (
    d.useEffect(() => {
      t.current = e;
    }),
    d.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function FE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ve(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === 'Escape' && n(o);
    };
    return (
      t.addEventListener('keydown', r, { capture: !0 }),
      () => t.removeEventListener('keydown', r, { capture: !0 })
    );
  }, [n, t]);
}
var VE = 'DismissableLayer',
  Qd = 'dismissableLayer.update',
  zE = 'dismissableLayer.pointerDownOutside',
  $E = 'dismissableLayer.focusOutside',
  nv,
  xy = d.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  pu = d.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = d.useContext(xy),
      [c, f] = d.useState(null),
      m =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, y] = d.useState({}),
      S = Te(t, (N) => f(N)),
      v = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = v.indexOf(w),
      h = c ? v.indexOf(c) : -1,
      x = u.layersWithOutsidePointerEventsDisabled.size > 0,
      E = h >= g,
      C = BE((N) => {
        const R = N.target,
          _ = [...u.branches].some((j) => j.contains(R));
        !E ||
          _ ||
          (o == null || o(N),
          s == null || s(N),
          N.defaultPrevented || l == null || l());
      }, m),
      b = WE((N) => {
        const R = N.target;
        [...u.branches].some((j) => j.contains(R)) ||
          (i == null || i(N),
          s == null || s(N),
          N.defaultPrevented || l == null || l());
      }, m);
    return (
      FE((N) => {
        h === u.layers.size - 1 &&
          (r == null || r(N),
          !N.defaultPrevented && l && (N.preventDefault(), l()));
      }, m),
      d.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((nv = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = 'none')),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            rv(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = nv);
            }
          );
      }, [c, m, n, u]),
      d.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            rv());
        },
        [c, u],
      ),
      d.useEffect(() => {
        const N = () => y({});
        return (
          document.addEventListener(Qd, N),
          () => document.removeEventListener(Qd, N)
        );
      }, []),
      p.jsx(ae.div, {
        ...a,
        ref: S,
        style: {
          pointerEvents: x ? (E ? 'auto' : 'none') : void 0,
          ...e.style,
        },
        onFocusCapture: ne(e.onFocusCapture, b.onFocusCapture),
        onBlurCapture: ne(e.onBlurCapture, b.onBlurCapture),
        onPointerDownCapture: ne(
          e.onPointerDownCapture,
          C.onPointerDownCapture,
        ),
      })
    );
  });
pu.displayName = VE;
var UE = 'DismissableLayerBranch',
  wy = d.forwardRef((e, t) => {
    const n = d.useContext(xy),
      r = d.useRef(null),
      o = Te(t, r);
    return (
      d.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      p.jsx(ae.div, { ...e, ref: o })
    );
  });
wy.displayName = UE;
function BE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ve(e),
    r = d.useRef(!1),
    o = d.useRef(() => {});
  return (
    d.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              Sy(zE, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === 'touch'
              ? (t.removeEventListener('click', o.current),
                (o.current = a),
                t.addEventListener('click', o.current, { once: !0 }))
              : a();
          } else t.removeEventListener('click', o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener('pointerdown', i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener('pointerdown', i),
          t.removeEventListener('click', o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function WE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ve(e),
    r = d.useRef(!1);
  return (
    d.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          Sy($E, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener('focusin', o),
        () => t.removeEventListener('focusin', o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function rv() {
  const e = new CustomEvent(Qd);
  document.dispatchEvent(e);
}
function Sy(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Ra(o, i) : o.dispatchEvent(i);
}
var HE = pu,
  KE = wy,
  Pc = 0;
function GE() {
  d.useEffect(() => {
    const e = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement('afterbegin', e[0] ?? ov()),
      document.body.insertAdjacentElement('beforeend', e[1] ?? ov()),
      Pc++,
      () => {
        Pc === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((t) => t.remove()),
          Pc--;
      }
    );
  }, []);
}
function ov() {
  const e = document.createElement('span');
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.outline = 'none'),
    (e.style.opacity = '0'),
    (e.style.position = 'fixed'),
    (e.style.pointerEvents = 'none'),
    e
  );
}
var _c = 'focusScope.autoFocusOnMount',
  Mc = 'focusScope.autoFocusOnUnmount',
  iv = { bubbles: !1, cancelable: !0 },
  ZE = 'FocusScope',
  Cy = d.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [l, a] = d.useState(null),
      u = Ve(o),
      c = Ve(i),
      f = d.useRef(null),
      m = Te(t, (v) => a(v)),
      y = d.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    d.useEffect(() => {
      if (r) {
        let v = function (x) {
            if (y.paused || !l) return;
            const E = x.target;
            l.contains(E) ? (f.current = E) : Gn(f.current, { select: !0 });
          },
          w = function (x) {
            if (y.paused || !l) return;
            const E = x.relatedTarget;
            E !== null && (l.contains(E) || Gn(f.current, { select: !0 }));
          },
          g = function (x) {
            if (document.activeElement === document.body)
              for (const C of x) C.removedNodes.length > 0 && Gn(l);
          };
        document.addEventListener('focusin', v),
          document.addEventListener('focusout', w);
        const h = new MutationObserver(g);
        return (
          l && h.observe(l, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener('focusin', v),
              document.removeEventListener('focusout', w),
              h.disconnect();
          }
        );
      }
    }, [r, l, y.paused]),
      d.useEffect(() => {
        if (l) {
          lv.add(y);
          const v = document.activeElement;
          if (!l.contains(v)) {
            const g = new CustomEvent(_c, iv);
            l.addEventListener(_c, u),
              l.dispatchEvent(g),
              g.defaultPrevented ||
                (YE(eb(Ey(l)), { select: !0 }),
                document.activeElement === v && Gn(l));
          }
          return () => {
            l.removeEventListener(_c, u),
              setTimeout(() => {
                const g = new CustomEvent(Mc, iv);
                l.addEventListener(Mc, c),
                  l.dispatchEvent(g),
                  g.defaultPrevented || Gn(v ?? document.body, { select: !0 }),
                  l.removeEventListener(Mc, c),
                  lv.remove(y);
              }, 0);
          };
        }
      }, [l, u, c, y]);
    const S = d.useCallback(
      (v) => {
        if ((!n && !r) || y.paused) return;
        const w = v.key === 'Tab' && !v.altKey && !v.ctrlKey && !v.metaKey,
          g = document.activeElement;
        if (w && g) {
          const h = v.currentTarget,
            [x, E] = XE(h);
          x && E
            ? !v.shiftKey && g === E
              ? (v.preventDefault(), n && Gn(x, { select: !0 }))
              : v.shiftKey &&
                g === x &&
                (v.preventDefault(), n && Gn(E, { select: !0 }))
            : g === h && v.preventDefault();
        }
      },
      [n, r, y.paused],
    );
    return p.jsx(ae.div, { tabIndex: -1, ...s, ref: m, onKeyDown: S });
  });
Cy.displayName = ZE;
function YE(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Gn(r, { select: t }), document.activeElement !== n)) return;
}
function XE(e) {
  const t = Ey(e),
    n = sv(t, e),
    r = sv(t.reverse(), e);
  return [n, r];
}
function Ey(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function sv(e, t) {
  for (const n of e) if (!QE(n, { upTo: t })) return n;
}
function QE(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === 'none') return !0;
    e = e.parentElement;
  }
  return !1;
}
function qE(e) {
  return e instanceof HTMLInputElement && 'select' in e;
}
function Gn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && qE(e) && t && e.select();
  }
}
var lv = JE();
function JE() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = av(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = av(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function av(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function eb(e) {
  return e.filter((t) => t.tagName !== 'A');
}
var Ge =
    globalThis != null && globalThis.document ? d.useLayoutEffect : () => {},
  tb = Wv.useId || (() => {}),
  nb = 0;
function Ls(e) {
  const [t, n] = d.useState(tb());
  return (
    Ge(() => {
      n((r) => r ?? String(nb++));
    }, [e]),
    t ? `radix-${t}` : ''
  );
}
const rb = ['top', 'right', 'bottom', 'left'],
  Sr = Math.min,
  Nt = Math.max,
  Ta = Math.round,
  hl = Math.floor,
  Cr = (e) => ({ x: e, y: e }),
  ob = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  ib = { start: 'end', end: 'start' };
function qd(e, t, n) {
  return Nt(e, Sr(t, n));
}
function Fn(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Vn(e) {
  return e.split('-')[0];
}
function ii(e) {
  return e.split('-')[1];
}
function jp(e) {
  return e === 'x' ? 'y' : 'x';
}
function Ap(e) {
  return e === 'y' ? 'height' : 'width';
}
function Er(e) {
  return ['top', 'bottom'].includes(Vn(e)) ? 'y' : 'x';
}
function Op(e) {
  return jp(Er(e));
}
function sb(e, t, n) {
  n === void 0 && (n = !1);
  const r = ii(e),
    o = Op(e),
    i = Ap(o);
  let s =
    o === 'x'
      ? r === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : r === 'start'
        ? 'bottom'
        : 'top';
  return t.reference[i] > t.floating[i] && (s = Pa(s)), [s, Pa(s)];
}
function lb(e) {
  const t = Pa(e);
  return [Jd(e), t, Jd(t)];
}
function Jd(e) {
  return e.replace(/start|end/g, (t) => ib[t]);
}
function ab(e, t, n) {
  const r = ['left', 'right'],
    o = ['right', 'left'],
    i = ['top', 'bottom'],
    s = ['bottom', 'top'];
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? o : r) : t ? r : o;
    case 'left':
    case 'right':
      return t ? i : s;
    default:
      return [];
  }
}
function ub(e, t, n, r) {
  const o = ii(e);
  let i = ab(Vn(e), n === 'start', r);
  return (
    o && ((i = i.map((s) => s + '-' + o)), t && (i = i.concat(i.map(Jd)))), i
  );
}
function Pa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ob[t]);
}
function cb(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function by(e) {
  return typeof e != 'number'
    ? cb(e)
    : { top: e, right: e, bottom: e, left: e };
}
function _a(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function uv(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Er(t),
    s = Op(t),
    l = Ap(s),
    a = Vn(t),
    u = i === 'y',
    c = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    m = r[l] / 2 - o[l] / 2;
  let y;
  switch (a) {
    case 'top':
      y = { x: c, y: r.y - o.height };
      break;
    case 'bottom':
      y = { x: c, y: r.y + r.height };
      break;
    case 'right':
      y = { x: r.x + r.width, y: f };
      break;
    case 'left':
      y = { x: r.x - o.width, y: f };
      break;
    default:
      y = { x: r.x, y: r.y };
  }
  switch (ii(t)) {
    case 'start':
      y[s] -= m * (n && u ? -1 : 1);
      break;
    case 'end':
      y[s] += m * (n && u ? -1 : 1);
      break;
  }
  return y;
}
const db = async (e, t, n) => {
  const {
      placement: r = 'bottom',
      strategy: o = 'absolute',
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: f } = uv(u, r, a),
    m = r,
    y = {},
    S = 0;
  for (let v = 0; v < l.length; v++) {
    const { name: w, fn: g } = l[v],
      {
        x: h,
        y: x,
        data: E,
        reset: C,
      } = await g({
        x: c,
        y: f,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: y,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (c = h ?? c),
      (f = x ?? f),
      (y = { ...y, [w]: { ...y[w], ...E } }),
      C &&
        S <= 50 &&
        (S++,
        typeof C == 'object' &&
          (C.placement && (m = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: c, y: f } = uv(u, m, a))),
        (v = -1));
  }
  return { x: c, y: f, placement: m, strategy: o, middlewareData: y };
};
async function xs(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = 'clippingAncestors',
      rootBoundary: c = 'viewport',
      elementContext: f = 'floating',
      altBoundary: m = !1,
      padding: y = 0,
    } = Fn(t, e),
    S = by(y),
    w = l[m ? (f === 'floating' ? 'reference' : 'floating') : f],
    g = _a(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: a,
      }),
    ),
    h =
      f === 'floating'
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    x = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    E = (await (i.isElement == null ? void 0 : i.isElement(x)))
      ? (await (i.getScale == null ? void 0 : i.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = _a(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: h,
            offsetParent: x,
            strategy: a,
          })
        : h,
    );
  return {
    top: (g.top - C.top + S.top) / E.y,
    bottom: (C.bottom - g.bottom + S.bottom) / E.y,
    left: (g.left - C.left + S.left) / E.x,
    right: (C.right - g.right + S.right) / E.x,
  };
}
const fb = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: c = 0 } = Fn(e, t) || {};
      if (u == null) return {};
      const f = by(c),
        m = { x: n, y: r },
        y = Op(o),
        S = Ap(y),
        v = await s.getDimensions(u),
        w = y === 'y',
        g = w ? 'top' : 'left',
        h = w ? 'bottom' : 'right',
        x = w ? 'clientHeight' : 'clientWidth',
        E = i.reference[S] + i.reference[y] - m[y] - i.floating[S],
        C = m[y] - i.reference[y],
        b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let N = b ? b[x] : 0;
      (!N || !(await (s.isElement == null ? void 0 : s.isElement(b)))) &&
        (N = l.floating[x] || i.floating[S]);
      const R = E / 2 - C / 2,
        _ = N / 2 - v[S] / 2 - 1,
        j = Sr(f[g], _),
        F = Sr(f[h], _),
        A = j,
        D = N - v[S] - F,
        O = N / 2 - v[S] / 2 + R,
        Z = qd(A, O, D),
        H =
          !a.arrow &&
          ii(o) != null &&
          O !== Z &&
          i.reference[S] / 2 - (O < A ? j : F) - v[S] / 2 < 0,
        W = H ? (O < A ? O - A : O - D) : 0;
      return {
        [y]: m[y] + W,
        data: {
          [y]: Z,
          centerOffset: O - Z - W,
          ...(H && { alignmentOffset: W }),
        },
        reset: H,
      };
    },
  }),
  pb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: f = !0,
              fallbackPlacements: m,
              fallbackStrategy: y = 'bestFit',
              fallbackAxisSideDirection: S = 'none',
              flipAlignment: v = !0,
              ...w
            } = Fn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const g = Vn(o),
            h = Er(l),
            x = Vn(l) === l,
            E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            C = m || (x || !v ? [Pa(l)] : lb(l)),
            b = S !== 'none';
          !m && b && C.push(...ub(l, v, S, E));
          const N = [l, ...C],
            R = await xs(t, w),
            _ = [];
          let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && _.push(R[g]), f)) {
            const O = sb(o, s, E);
            _.push(R[O[0]], R[O[1]]);
          }
          if (
            ((j = [...j, { placement: o, overflows: _ }]),
            !_.every((O) => O <= 0))
          ) {
            var F, A;
            const O = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1,
              Z = N[O];
            if (Z)
              return {
                data: { index: O, overflows: j },
                reset: { placement: Z },
              };
            let H =
              (A = j
                .filter((W) => W.overflows[0] <= 0)
                .sort((W, M) => W.overflows[1] - M.overflows[1])[0]) == null
                ? void 0
                : A.placement;
            if (!H)
              switch (y) {
                case 'bestFit': {
                  var D;
                  const W =
                    (D = j
                      .filter((M) => {
                        if (b) {
                          const L = Er(M.placement);
                          return L === h || L === 'y';
                        }
                        return !0;
                      })
                      .map((M) => [
                        M.placement,
                        M.overflows
                          .filter((L) => L > 0)
                          .reduce((L, K) => L + K, 0),
                      ])
                      .sort((M, L) => M[1] - L[1])[0]) == null
                      ? void 0
                      : D[0];
                  W && (H = W);
                  break;
                }
                case 'initialPlacement':
                  H = l;
                  break;
              }
            if (o !== H) return { reset: { placement: H } };
          }
          return {};
        },
      }
    );
  };
function cv(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function dv(e) {
  return rb.some((t) => e[t] >= 0);
}
const hb = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'hide',
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = 'referenceHidden', ...o } = Fn(e, t);
        switch (r) {
          case 'referenceHidden': {
            const i = await xs(t, { ...o, elementContext: 'reference' }),
              s = cv(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: dv(s) },
            };
          }
          case 'escaped': {
            const i = await xs(t, { ...o, altBoundary: !0 }),
              s = cv(i, n.floating);
            return { data: { escapedOffsets: s, escaped: dv(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function mb(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Vn(n),
    l = ii(n),
    a = Er(n) === 'y',
    u = ['left', 'top'].includes(s) ? -1 : 1,
    c = i && a ? -1 : 1,
    f = Fn(t, e);
  let {
    mainAxis: m,
    crossAxis: y,
    alignmentAxis: S,
  } = typeof f == 'number'
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    l && typeof S == 'number' && (y = l === 'end' ? S * -1 : S),
    a ? { x: y * c, y: m * u } : { x: m * u, y: y * c }
  );
}
const vb = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            a = await mb(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  gb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: g, y: h } = w;
                  return { x: g, y: h };
                },
              },
              ...a
            } = Fn(e, t),
            u = { x: n, y: r },
            c = await xs(t, a),
            f = Er(Vn(o)),
            m = jp(f);
          let y = u[m],
            S = u[f];
          if (i) {
            const w = m === 'y' ? 'top' : 'left',
              g = m === 'y' ? 'bottom' : 'right',
              h = y + c[w],
              x = y - c[g];
            y = qd(h, y, x);
          }
          if (s) {
            const w = f === 'y' ? 'top' : 'left',
              g = f === 'y' ? 'bottom' : 'right',
              h = S + c[w],
              x = S - c[g];
            S = qd(h, S, x);
          }
          const v = l.fn({ ...t, [m]: y, [f]: S });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [m]: i, [f]: s } },
          };
        },
      }
    );
  },
  yb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = Fn(e, t),
            c = { x: n, y: r },
            f = Er(o),
            m = jp(f);
          let y = c[m],
            S = c[f];
          const v = Fn(l, t),
            w =
              typeof v == 'number'
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (a) {
            const x = m === 'y' ? 'height' : 'width',
              E = i.reference[m] - i.floating[x] + w.mainAxis,
              C = i.reference[m] + i.reference[x] - w.mainAxis;
            y < E ? (y = E) : y > C && (y = C);
          }
          if (u) {
            var g, h;
            const x = m === 'y' ? 'width' : 'height',
              E = ['top', 'left'].includes(Vn(o)),
              C =
                i.reference[f] -
                i.floating[x] +
                ((E && ((g = s.offset) == null ? void 0 : g[f])) || 0) +
                (E ? 0 : w.crossAxis),
              b =
                i.reference[f] +
                i.reference[x] +
                (E ? 0 : ((h = s.offset) == null ? void 0 : h[f]) || 0) -
                (E ? w.crossAxis : 0);
            S < C ? (S = C) : S > b && (S = b);
          }
          return { [m]: y, [f]: S };
        },
      }
    );
  },
  xb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: a = () => {}, ...u } = Fn(e, t),
            c = await xs(t, u),
            f = Vn(o),
            m = ii(o),
            y = Er(o) === 'y',
            { width: S, height: v } = i.floating;
          let w, g;
          f === 'top' || f === 'bottom'
            ? ((w = f),
              (g =
                m ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((g = f), (w = m === 'end' ? 'top' : 'bottom'));
          const h = v - c.top - c.bottom,
            x = S - c.left - c.right,
            E = Sr(v - c[w], h),
            C = Sr(S - c[g], x),
            b = !t.middlewareData.shift;
          let N = E,
            R = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (R = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = h),
            b && !m)
          ) {
            const j = Nt(c.left, 0),
              F = Nt(c.right, 0),
              A = Nt(c.top, 0),
              D = Nt(c.bottom, 0);
            y
              ? (R = S - 2 * (j !== 0 || F !== 0 ? j + F : Nt(c.left, c.right)))
              : (N =
                  v - 2 * (A !== 0 || D !== 0 ? A + D : Nt(c.top, c.bottom)));
          }
          await a({ ...t, availableWidth: R, availableHeight: N });
          const _ = await s.getDimensions(l.floating);
          return S !== _.width || v !== _.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function hu() {
  return typeof window < 'u';
}
function si(e) {
  return Ny(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function Pt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Cn(e) {
  var t;
  return (t = (Ny(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Ny(e) {
  return hu() ? e instanceof Node || e instanceof Pt(e).Node : !1;
}
function ln(e) {
  return hu() ? e instanceof Element || e instanceof Pt(e).Element : !1;
}
function Sn(e) {
  return hu() ? e instanceof HTMLElement || e instanceof Pt(e).HTMLElement : !1;
}
function fv(e) {
  return !hu() || typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ShadowRoot || e instanceof Pt(e).ShadowRoot;
}
function Fs(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = an(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !['inline', 'contents'].includes(o)
  );
}
function wb(e) {
  return ['table', 'td', 'th'].includes(si(e));
}
function mu(e) {
  return [':popover-open', ':modal'].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Dp(e) {
  const t = Ip(),
    n = ln(e) ? an(e) : e;
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    ['transform', 'perspective', 'filter'].some((r) =>
      (n.willChange || '').includes(r),
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((r) =>
      (n.contain || '').includes(r),
    )
  );
}
function Sb(e) {
  let t = br(e);
  for (; Sn(t) && !Ko(t); ) {
    if (Dp(t)) return t;
    if (mu(t)) return null;
    t = br(t);
  }
  return null;
}
function Ip() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
function Ko(e) {
  return ['html', 'body', '#document'].includes(si(e));
}
function an(e) {
  return Pt(e).getComputedStyle(e);
}
function vu(e) {
  return ln(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function br(e) {
  if (si(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (fv(e) && e.host) || Cn(e);
  return fv(t) ? t.host : t;
}
function ky(e) {
  const t = br(e);
  return Ko(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Sn(t) && Fs(t)
      ? t
      : ky(t);
}
function ws(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ky(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = Pt(o);
  if (i) {
    const l = ef(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Fs(o) ? o : [],
      l && n ? ws(l) : [],
    );
  }
  return t.concat(o, ws(o, [], n));
}
function ef(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ry(e) {
  const t = an(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Sn(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = Ta(n) !== i || Ta(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function Lp(e) {
  return ln(e) ? e : e.contextElement;
}
function Ao(e) {
  const t = Lp(e);
  if (!Sn(t)) return Cr(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Ry(t);
  let s = (i ? Ta(n.width) : n.width) / r,
    l = (i ? Ta(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const Cb = Cr(0);
function Ty(e) {
  const t = Pt(e);
  return !Ip() || !t.visualViewport
    ? Cb
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Eb(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Pt(e)) ? !1 : t;
}
function Yr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Lp(e);
  let s = Cr(1);
  t && (r ? ln(r) && (s = Ao(r)) : (s = Ao(e)));
  const l = Eb(i, n, r) ? Ty(i) : Cr(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    c = o.width / s.x,
    f = o.height / s.y;
  if (i) {
    const m = Pt(i),
      y = r && ln(r) ? Pt(r) : r;
    let S = m,
      v = ef(S);
    for (; v && r && y !== S; ) {
      const w = Ao(v),
        g = v.getBoundingClientRect(),
        h = an(v),
        x = g.left + (v.clientLeft + parseFloat(h.paddingLeft)) * w.x,
        E = g.top + (v.clientTop + parseFloat(h.paddingTop)) * w.y;
      (a *= w.x),
        (u *= w.y),
        (c *= w.x),
        (f *= w.y),
        (a += x),
        (u += E),
        (S = Pt(v)),
        (v = ef(S));
    }
  }
  return _a({ width: c, height: f, x: a, y: u });
}
function bb(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === 'fixed',
    s = Cn(r),
    l = t ? mu(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Cr(1);
  const c = Cr(0),
    f = Sn(r);
  if (
    (f || (!f && !i)) &&
    ((si(r) !== 'body' || Fs(s)) && (a = vu(r)), Sn(r))
  ) {
    const m = Yr(r);
    (u = Ao(r)), (c.x = m.x + r.clientLeft), (c.y = m.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y,
  };
}
function Nb(e) {
  return Array.from(e.getClientRects());
}
function tf(e, t) {
  const n = vu(e).scrollLeft;
  return t ? t.left + n : Yr(Cn(e)).left + n;
}
function kb(e) {
  const t = Cn(e),
    n = vu(e),
    r = e.ownerDocument.body,
    o = Nt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Nt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + tf(e);
  const l = -n.scrollTop;
  return (
    an(r).direction === 'rtl' && (s += Nt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function Rb(e, t) {
  const n = Pt(e),
    r = Cn(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = Ip();
    (!u || (u && t === 'fixed')) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
function Tb(e, t) {
  const n = Yr(e, !0, t === 'fixed'),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Sn(e) ? Ao(e) : Cr(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function pv(e, t, n) {
  let r;
  if (t === 'viewport') r = Rb(e, n);
  else if (t === 'document') r = kb(Cn(e));
  else if (ln(t)) r = Tb(t, n);
  else {
    const o = Ty(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return _a(r);
}
function Py(e, t) {
  const n = br(e);
  return n === t || !ln(n) || Ko(n)
    ? !1
    : an(n).position === 'fixed' || Py(n, t);
}
function Pb(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ws(e, [], !1).filter((l) => ln(l) && si(l) !== 'body'),
    o = null;
  const i = an(e).position === 'fixed';
  let s = i ? br(e) : e;
  for (; ln(s) && !Ko(s); ) {
    const l = an(s),
      a = Dp(s);
    !a && l.position === 'fixed' && (o = null),
      (
        i
          ? !a && !o
          : (!a &&
              l.position === 'static' &&
              !!o &&
              ['absolute', 'fixed'].includes(o.position)) ||
            (Fs(s) && !a && Py(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (o = l),
      (s = br(s));
  }
  return t.set(e, r), r;
}
function _b(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === 'clippingAncestors'
        ? mu(t)
          ? []
          : Pb(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce(
      (u, c) => {
        const f = pv(t, c, o);
        return (
          (u.top = Nt(f.top, u.top)),
          (u.right = Sr(f.right, u.right)),
          (u.bottom = Sr(f.bottom, u.bottom)),
          (u.left = Nt(f.left, u.left)),
          u
        );
      },
      pv(t, l, o),
    );
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function Mb(e) {
  const { width: t, height: n } = Ry(e);
  return { width: t, height: n };
}
function jb(e, t, n) {
  const r = Sn(t),
    o = Cn(t),
    i = n === 'fixed',
    s = Yr(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Cr(0);
  if (r || (!r && !i))
    if (((si(t) !== 'body' || Fs(o)) && (l = vu(t)), r)) {
      const y = Yr(t, !0, i, t);
      (a.x = y.x + t.clientLeft), (a.y = y.y + t.clientTop);
    } else o && (a.x = tf(o));
  let u = 0,
    c = 0;
  if (o && !r && !i) {
    const y = o.getBoundingClientRect();
    (c = y.top + l.scrollTop), (u = y.left + l.scrollLeft - tf(o, y));
  }
  const f = s.left + l.scrollLeft - a.x - u,
    m = s.top + l.scrollTop - a.y - c;
  return { x: f, y: m, width: s.width, height: s.height };
}
function jc(e) {
  return an(e).position === 'static';
}
function hv(e, t) {
  if (!Sn(e) || an(e).position === 'fixed') return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Cn(e) === n && (n = n.ownerDocument.body), n;
}
function _y(e, t) {
  const n = Pt(e);
  if (mu(e)) return n;
  if (!Sn(e)) {
    let o = br(e);
    for (; o && !Ko(o); ) {
      if (ln(o) && !jc(o)) return o;
      o = br(o);
    }
    return n;
  }
  let r = hv(e, t);
  for (; r && wb(r) && jc(r); ) r = hv(r, t);
  return r && Ko(r) && jc(r) && !Dp(r) ? n : r || Sb(e) || n;
}
const Ab = async function (e) {
  const t = this.getOffsetParent || _y,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: jb(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Ob(e) {
  return an(e).direction === 'rtl';
}
const Db = {
  convertOffsetParentRelativeRectToViewportRelativeRect: bb,
  getDocumentElement: Cn,
  getClippingRect: _b,
  getOffsetParent: _y,
  getElementRects: Ab,
  getClientRects: Nb,
  getDimensions: Mb,
  getScale: Ao,
  isElement: ln,
  isRTL: Ob,
};
function Ib(e, t) {
  let n = null,
    r;
  const o = Cn(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const { left: u, top: c, width: f, height: m } = e.getBoundingClientRect();
    if ((l || t(), !f || !m)) return;
    const y = hl(c),
      S = hl(o.clientWidth - (u + f)),
      v = hl(o.clientHeight - (c + m)),
      w = hl(u),
      h = {
        rootMargin: -y + 'px ' + -S + 'px ' + -v + 'px ' + -w + 'px',
        threshold: Nt(0, Sr(1, a)) || 1,
      };
    let x = !0;
    function E(C) {
      const b = C[0].intersectionRatio;
      if (b !== a) {
        if (!x) return s();
        b
          ? s(!1, b)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(E, { ...h, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(E, h);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Lb(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == 'function',
      layoutShift: l = typeof IntersectionObserver == 'function',
      animationFrame: a = !1,
    } = r,
    u = Lp(e),
    c = o || i ? [...(u ? ws(u) : []), ...ws(t)] : [];
  c.forEach((g) => {
    o && g.addEventListener('scroll', n, { passive: !0 }),
      i && g.addEventListener('resize', n);
  });
  const f = u && l ? Ib(u, n) : null;
  let m = -1,
    y = null;
  s &&
    ((y = new ResizeObserver((g) => {
      let [h] = g;
      h &&
        h.target === u &&
        y &&
        (y.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var x;
          (x = y) == null || x.observe(t);
        }))),
        n();
    })),
    u && !a && y.observe(u),
    y.observe(t));
  let S,
    v = a ? Yr(e) : null;
  a && w();
  function w() {
    const g = Yr(e);
    v &&
      (g.x !== v.x ||
        g.y !== v.y ||
        g.width !== v.width ||
        g.height !== v.height) &&
      n(),
      (v = g),
      (S = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var g;
      c.forEach((h) => {
        o && h.removeEventListener('scroll', n),
          i && h.removeEventListener('resize', n);
      }),
        f == null || f(),
        (g = y) == null || g.disconnect(),
        (y = null),
        a && cancelAnimationFrame(S);
    }
  );
}
const Fb = vb,
  Vb = gb,
  zb = pb,
  $b = xb,
  Ub = hb,
  mv = fb,
  Bb = yb,
  Wb = (e, t, n) => {
    const r = new Map(),
      o = { platform: Db, ...n },
      i = { ...o.platform, _c: r };
    return db(e, t, { ...o, platform: i });
  };
var Vl = typeof document < 'u' ? d.useLayoutEffect : d.useEffect;
function Ma(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == 'function' && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ma(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === '_owner' && e.$$typeof) && !Ma(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function My(e) {
  return typeof window > 'u'
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vv(e, t) {
  const n = My(e);
  return Math.round(t * n) / n;
}
function Ac(e) {
  const t = d.useRef(e);
  return (
    Vl(() => {
      t.current = e;
    }),
    t
  );
}
function Hb(e) {
  e === void 0 && (e = {});
  const {
      placement: t = 'bottom',
      strategy: n = 'absolute',
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [c, f] = d.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, y] = d.useState(r);
  Ma(m, r) || y(r);
  const [S, v] = d.useState(null),
    [w, g] = d.useState(null),
    h = d.useCallback((M) => {
      M !== b.current && ((b.current = M), v(M));
    }, []),
    x = d.useCallback((M) => {
      M !== N.current && ((N.current = M), g(M));
    }, []),
    E = i || S,
    C = s || w,
    b = d.useRef(null),
    N = d.useRef(null),
    R = d.useRef(c),
    _ = a != null,
    j = Ac(a),
    F = Ac(o),
    A = Ac(u),
    D = d.useCallback(() => {
      if (!b.current || !N.current) return;
      const M = { placement: t, strategy: n, middleware: m };
      F.current && (M.platform = F.current),
        Wb(b.current, N.current, M).then((L) => {
          const K = { ...L, isPositioned: A.current !== !1 };
          O.current &&
            !Ma(R.current, K) &&
            ((R.current = K),
            kt.flushSync(() => {
              f(K);
            }));
        });
    }, [m, t, n, F, A]);
  Vl(() => {
    u === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), f((M) => ({ ...M, isPositioned: !1 })));
  }, [u]);
  const O = d.useRef(!1);
  Vl(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    [],
  ),
    Vl(() => {
      if ((E && (b.current = E), C && (N.current = C), E && C)) {
        if (j.current) return j.current(E, C, D);
        D();
      }
    }, [E, C, D, j, _]);
  const Z = d.useMemo(
      () => ({ reference: b, floating: N, setReference: h, setFloating: x }),
      [h, x],
    ),
    H = d.useMemo(() => ({ reference: E, floating: C }), [E, C]),
    W = d.useMemo(() => {
      const M = { position: n, left: 0, top: 0 };
      if (!H.floating) return M;
      const L = vv(H.floating, c.x),
        K = vv(H.floating, c.y);
      return l
        ? {
            ...M,
            transform: 'translate(' + L + 'px, ' + K + 'px)',
            ...(My(H.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: n, left: L, top: K };
    }, [n, l, H.floating, c.x, c.y]);
  return d.useMemo(
    () => ({ ...c, update: D, refs: Z, elements: H, floatingStyles: W }),
    [c, D, Z, H, W],
  );
}
const Kb = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, 'current');
    }
    return {
      name: 'arrow',
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == 'function' ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? mv({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? mv({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  Gb = (e, t) => ({ ...Fb(e), options: [e, t] }),
  Zb = (e, t) => ({ ...Vb(e), options: [e, t] }),
  Yb = (e, t) => ({ ...Bb(e), options: [e, t] }),
  Xb = (e, t) => ({ ...zb(e), options: [e, t] }),
  Qb = (e, t) => ({ ...$b(e), options: [e, t] }),
  qb = (e, t) => ({ ...Ub(e), options: [e, t] }),
  Jb = (e, t) => ({ ...Kb(e), options: [e, t] });
var e8 = 'Arrow',
  jy = d.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return p.jsx(ae.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: e.asChild ? n : p.jsx('polygon', { points: '0,0 30,0 15,10' }),
    });
  });
jy.displayName = e8;
var t8 = jy;
function n8(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = d.createContext(s),
      a = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: m, children: y, ...S } = f,
        v = (m == null ? void 0 : m[e][a]) || l,
        w = d.useMemo(() => S, Object.values(S));
      return p.jsx(v.Provider, { value: w, children: y });
    }
    function c(f, m) {
      const y = (m == null ? void 0 : m[e][a]) || l,
        S = d.useContext(y);
      if (S) return S;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + 'Provider'), [u, c];
  }
  const o = () => {
    const i = n.map((s) => d.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return d.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, r8(o, ...t)];
}
function r8(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(i)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function o8(e) {
  const [t, n] = d.useState(void 0);
  return (
    Ge(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ('borderBoxSize' in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: 'border-box' }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Fp = 'Popper',
  [Ay, Oy] = n8(Fp),
  [i8, Dy] = Ay(Fp),
  Iy = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = d.useState(null);
    return p.jsx(i8, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
Iy.displayName = Fp;
var Ly = 'PopperAnchor',
  Fy = d.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Dy(Ly, n),
      s = d.useRef(null),
      l = Te(t, s);
    return (
      d.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : p.jsx(ae.div, { ...o, ref: l })
    );
  });
Fy.displayName = Ly;
var Vp = 'PopperContent',
  [s8, l8] = Ay(Vp),
  Vy = d.forwardRef((e, t) => {
    var q, ie, ge, Q, se, Y;
    const {
        __scopePopper: n,
        side: r = 'bottom',
        sideOffset: o = 0,
        align: i = 'center',
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: f = 'partial',
        hideWhenDetached: m = !1,
        updatePositionStrategy: y = 'optimized',
        onPlaced: S,
        ...v
      } = e,
      w = Dy(Vp, n),
      [g, h] = d.useState(null),
      x = Te(t, (te) => h(te)),
      [E, C] = d.useState(null),
      b = o8(E),
      N = (b == null ? void 0 : b.width) ?? 0,
      R = (b == null ? void 0 : b.height) ?? 0,
      _ = r + (i !== 'center' ? '-' + i : ''),
      j =
        typeof c == 'number'
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      F = Array.isArray(u) ? u : [u],
      A = F.length > 0,
      D = { padding: j, boundary: F.filter(u8), altBoundary: A },
      {
        refs: O,
        floatingStyles: Z,
        placement: H,
        isPositioned: W,
        middlewareData: M,
      } = Hb({
        strategy: 'fixed',
        placement: _,
        whileElementsMounted: (...te) =>
          Lb(...te, { animationFrame: y === 'always' }),
        elements: { reference: w.anchor },
        middleware: [
          Gb({ mainAxis: o + R, alignmentAxis: s }),
          a &&
            Zb({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === 'partial' ? Yb() : void 0,
              ...D,
            }),
          a && Xb({ ...D }),
          Qb({
            ...D,
            apply: ({
              elements: te,
              rects: le,
              availableWidth: de,
              availableHeight: Pe,
            }) => {
              const { width: rt, height: k } = le.reference,
                T = te.floating.style;
              T.setProperty('--radix-popper-available-width', `${de}px`),
                T.setProperty('--radix-popper-available-height', `${Pe}px`),
                T.setProperty('--radix-popper-anchor-width', `${rt}px`),
                T.setProperty('--radix-popper-anchor-height', `${k}px`);
            },
          }),
          E && Jb({ element: E, padding: l }),
          c8({ arrowWidth: N, arrowHeight: R }),
          m && qb({ strategy: 'referenceHidden', ...D }),
        ],
      }),
      [L, K] = Uy(H),
      J = Ve(S);
    Ge(() => {
      W && (J == null || J());
    }, [W, J]);
    const ee = (q = M.arrow) == null ? void 0 : q.x,
      me = (ie = M.arrow) == null ? void 0 : ie.y,
      pe = ((ge = M.arrow) == null ? void 0 : ge.centerOffset) !== 0,
      [je, ce] = d.useState();
    return (
      Ge(() => {
        g && ce(window.getComputedStyle(g).zIndex);
      }, [g]),
      p.jsx('div', {
        ref: O.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...Z,
          transform: W ? Z.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: je,
          '--radix-popper-transform-origin': [
            (Q = M.transformOrigin) == null ? void 0 : Q.x,
            (se = M.transformOrigin) == null ? void 0 : se.y,
          ].join(' '),
          ...(((Y = M.hide) == null ? void 0 : Y.referenceHidden) && {
            visibility: 'hidden',
            pointerEvents: 'none',
          }),
        },
        dir: e.dir,
        children: p.jsx(s8, {
          scope: n,
          placedSide: L,
          onArrowChange: C,
          arrowX: ee,
          arrowY: me,
          shouldHideArrow: pe,
          children: p.jsx(ae.div, {
            'data-side': L,
            'data-align': K,
            ...v,
            ref: x,
            style: { ...v.style, animation: W ? void 0 : 'none' },
          }),
        }),
      })
    );
  });
Vy.displayName = Vp;
var zy = 'PopperArrow',
  a8 = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  $y = d.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = l8(zy, r),
      s = a8[i.placedSide];
    return p.jsx('span', {
      ref: i.onArrowChange,
      style: {
        position: 'absolute',
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: '',
          right: '0 0',
          bottom: 'center 0',
          left: '100% 0',
        }[i.placedSide],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[i.placedSide],
        visibility: i.shouldHideArrow ? 'hidden' : void 0,
      },
      children: p.jsx(t8, {
        ...o,
        ref: n,
        style: { ...o.style, display: 'block' },
      }),
    });
  });
$y.displayName = zy;
function u8(e) {
  return e !== null;
}
var c8 = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(t) {
    var w, g, h;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, c] = Uy(n),
      f = { start: '0%', center: '50%', end: '100%' }[c],
      m = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + l / 2,
      y = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2;
    let S = '',
      v = '';
    return (
      u === 'bottom'
        ? ((S = s ? f : `${m}px`), (v = `${-a}px`))
        : u === 'top'
          ? ((S = s ? f : `${m}px`), (v = `${r.floating.height + a}px`))
          : u === 'right'
            ? ((S = `${-a}px`), (v = s ? f : `${y}px`))
            : u === 'left' &&
              ((S = `${r.floating.width + a}px`), (v = s ? f : `${y}px`)),
      { data: { x: S, y: v } }
    );
  },
});
function Uy(e) {
  const [t, n = 'center'] = e.split('-');
  return [t, n];
}
var d8 = Iy,
  f8 = Fy,
  p8 = Vy,
  h8 = $y,
  m8 = 'Portal',
  zp = d.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = d.useState(!1);
    Ge(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? So.createPortal(p.jsx(ae.div, { ...r, ref: t }), s) : null;
  });
zp.displayName = m8;
function Ss({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = v8({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    l = Ve(n),
    a = d.useCallback(
      (u) => {
        if (i) {
          const f = typeof u == 'function' ? u(e) : u;
          f !== e && l(f);
        } else o(u);
      },
      [i, e, o, l],
    );
  return [s, a];
}
function v8({ defaultProp: e, onChange: t }) {
  const n = d.useState(e),
    [r] = n,
    o = d.useRef(r),
    i = Ve(t);
  return (
    d.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
function By(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var g8 = 'VisuallyHidden',
  Vs = d.forwardRef((e, t) =>
    p.jsx(ae.span, {
      ...e,
      ref: t,
      style: {
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        ...e.style,
      },
    }),
  );
Vs.displayName = g8;
var y8 = Vs,
  x8 = function (e) {
    if (typeof document > 'u') return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  oo = new WeakMap(),
  ml = new WeakMap(),
  vl = {},
  Oc = 0,
  Wy = function (e) {
    return e && (e.host || Wy(e.parentNode));
  },
  w8 = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Wy(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              'aria-hidden',
              n,
              'in not contained inside',
              e,
              '. Doing nothing',
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  S8 = function (e, t, n, r) {
    var o = w8(t, Array.isArray(e) ? e : [e]);
    vl[n] || (vl[n] = new WeakMap());
    var i = vl[n],
      s = [],
      l = new Set(),
      a = new Set(o),
      u = function (f) {
        !f || l.has(f) || (l.add(f), u(f.parentNode));
      };
    o.forEach(u);
    var c = function (f) {
      !f ||
        a.has(f) ||
        Array.prototype.forEach.call(f.children, function (m) {
          if (l.has(m)) c(m);
          else
            try {
              var y = m.getAttribute(r),
                S = y !== null && y !== 'false',
                v = (oo.get(m) || 0) + 1,
                w = (i.get(m) || 0) + 1;
              oo.set(m, v),
                i.set(m, w),
                s.push(m),
                v === 1 && S && ml.set(m, !0),
                w === 1 && m.setAttribute(n, 'true'),
                S || m.setAttribute(r, 'true');
            } catch (g) {
              console.error('aria-hidden: cannot operate on ', m, g);
            }
        });
    };
    return (
      c(t),
      l.clear(),
      Oc++,
      function () {
        s.forEach(function (f) {
          var m = oo.get(f) - 1,
            y = i.get(f) - 1;
          oo.set(f, m),
            i.set(f, y),
            m || (ml.has(f) || f.removeAttribute(r), ml.delete(f)),
            y || f.removeAttribute(n);
        }),
          Oc--,
          Oc ||
            ((oo = new WeakMap()),
            (oo = new WeakMap()),
            (ml = new WeakMap()),
            (vl = {}));
      }
    );
  },
  C8 = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden');
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = x8(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
        S8(r, o, n, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  mn = function () {
    return (
      (mn =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      mn.apply(this, arguments)
    );
  };
function Hy(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function E8(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var zl = 'right-scroll-bar-position',
  $l = 'width-before-scroll-bar',
  b8 = 'with-scroll-bars-hidden',
  N8 = '--removed-body-scroll-bar-size';
function Dc(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function k8(e, t) {
  var n = d.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var R8 = typeof window < 'u' ? d.useLayoutEffect : d.useEffect,
  gv = new WeakMap();
function T8(e, t) {
  var n = k8(null, function (r) {
    return e.forEach(function (o) {
      return Dc(o, r);
    });
  });
  return (
    R8(
      function () {
        var r = gv.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (l) {
            i.has(l) || Dc(l, null);
          }),
            i.forEach(function (l) {
              o.has(l) || Dc(l, s);
            });
        }
        gv.set(n, e);
      },
      [e],
    ),
    n
  );
}
function P8(e) {
  return e;
}
function _8(e, t) {
  t === void 0 && (t = P8);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (l) {
              return l !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (l) {
            return i(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var l = n;
          (n = []), l.forEach(i), (s = n);
        }
        var a = function () {
            var c = s;
            (s = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(a);
          };
        u(),
          (n = {
            push: function (c) {
              s.push(c), u();
            },
            filter: function (c) {
              return (s = s.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function M8(e) {
  e === void 0 && (e = {});
  var t = _8(null);
  return (t.options = mn({ async: !0, ssr: !1 }, e)), t;
}
var Ky = function (e) {
  var t = e.sideCar,
    n = Hy(e, ['sideCar']);
  if (!t)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car',
    );
  var r = t.read();
  if (!r) throw new Error('Sidecar medium not found');
  return d.createElement(r, mn({}, n));
};
Ky.isSideCarExport = !0;
function j8(e, t) {
  return e.useMedium(t), Ky;
}
var Gy = M8(),
  Ic = function () {},
  gu = d.forwardRef(function (e, t) {
    var n = d.useRef(null),
      r = d.useState({
        onScrollCapture: Ic,
        onWheelCapture: Ic,
        onTouchMoveCapture: Ic,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      l = e.children,
      a = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      f = e.shards,
      m = e.sideCar,
      y = e.noIsolation,
      S = e.inert,
      v = e.allowPinchZoom,
      w = e.as,
      g = w === void 0 ? 'div' : w,
      h = e.gapMode,
      x = Hy(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      E = m,
      C = T8([n, t]),
      b = mn(mn({}, x), o);
    return d.createElement(
      d.Fragment,
      null,
      c &&
        d.createElement(E, {
          sideCar: Gy,
          removeScrollBar: u,
          shards: f,
          noIsolation: y,
          inert: S,
          setCallbacks: i,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: h,
        }),
      s
        ? d.cloneElement(d.Children.only(l), mn(mn({}, b), { ref: C }))
        : d.createElement(g, mn({}, b, { className: a, ref: C }), l),
    );
  });
gu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
gu.classNames = { fullWidth: $l, zeroRight: zl };
var A8 = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function O8() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = A8();
  return t && e.setAttribute('nonce', t), e;
}
function D8(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function I8(e) {
  var t = document.head || document.getElementsByTagName('head')[0];
  t.appendChild(e);
}
var L8 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = O8()) && (D8(t, n), I8(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  F8 = function () {
    var e = L8();
    return function (t, n) {
      d.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  Zy = function () {
    var e = F8(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  V8 = { left: 0, top: 0, right: 0, gap: 0 },
  Lc = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  z8 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
    return [Lc(n), Lc(r), Lc(o)];
  },
  $8 = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return V8;
    var t = z8(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  U8 = Zy(),
  Oo = 'data-scroll-locked',
  B8 = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          b8,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(l, 'px ')
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          Oo,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(l, 'px ')
                .concat(
                  r,
                  `;
    `,
                ),
            n === 'padding' &&
              'padding-right: '.concat(l, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`,
        )
        .concat(
          zl,
          ` {
    right: `,
        )
        .concat(l, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          $l,
          ` {
    margin-right: `,
        )
        .concat(l, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(zl, ' .')
        .concat(
          zl,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat($l, ' .')
        .concat(
          $l,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          Oo,
          `] {
    `,
        )
        .concat(N8, ': ')
        .concat(
          l,
          `px;
  }
`,
        )
    );
  },
  yv = function () {
    var e = parseInt(document.body.getAttribute(Oo) || '0', 10);
    return isFinite(e) ? e : 0;
  },
  W8 = function () {
    d.useEffect(function () {
      return (
        document.body.setAttribute(Oo, (yv() + 1).toString()),
        function () {
          var e = yv() - 1;
          e <= 0
            ? document.body.removeAttribute(Oo)
            : document.body.setAttribute(Oo, e.toString());
        }
      );
    }, []);
  },
  H8 = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? 'margin' : r;
    W8();
    var i = d.useMemo(
      function () {
        return $8(o);
      },
      [o],
    );
    return d.createElement(U8, { styles: B8(i, !t, o, n ? '' : '!important') });
  },
  nf = !1;
if (typeof window < 'u')
  try {
    var gl = Object.defineProperty({}, 'passive', {
      get: function () {
        return (nf = !0), !0;
      },
    });
    window.addEventListener('test', gl, gl),
      window.removeEventListener('test', gl, gl);
  } catch {
    nf = !1;
  }
var io = nf ? { passive: !1 } : !1,
  K8 = function (e) {
    return e.tagName === 'TEXTAREA';
  },
  Yy = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== 'hidden' &&
      !(n.overflowY === n.overflowX && !K8(e) && n[t] === 'visible')
    );
  },
  G8 = function (e) {
    return Yy(e, 'overflowY');
  },
  Z8 = function (e) {
    return Yy(e, 'overflowX');
  },
  xv = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host);
      var o = Xy(e, r);
      if (o) {
        var i = Qy(e, r),
          s = i[1],
          l = i[2];
        if (s > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Y8 = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  X8 = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Xy = function (e, t) {
    return e === 'v' ? G8(t) : Z8(t);
  },
  Qy = function (e, t) {
    return e === 'v' ? Y8(t) : X8(t);
  },
  Q8 = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1;
  },
  q8 = function (e, t, n, r, o) {
    var i = Q8(e, window.getComputedStyle(t).direction),
      s = i * r,
      l = n.target,
      a = t.contains(l),
      u = !1,
      c = s > 0,
      f = 0,
      m = 0;
    do {
      var y = Qy(e, l),
        S = y[0],
        v = y[1],
        w = y[2],
        g = v - w - i * S;
      (S || g) && Xy(e, l) && ((f += g), (m += S)),
        l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
    } while ((!a && l !== document.body) || (a && (t.contains(l) || t === l)));
    return (
      ((c && (Math.abs(f) < 1 || !o)) || (!c && (Math.abs(m) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  yl = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  wv = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Sv = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  J8 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  e7 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  t7 = 0,
  so = [];
function n7(e) {
  var t = d.useRef([]),
    n = d.useRef([0, 0]),
    r = d.useRef(),
    o = d.useState(t7++)[0],
    i = d.useState(Zy)[0],
    s = d.useRef(e);
  d.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    d.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var v = E8([e.lockRef.current], (e.shards || []).map(Sv), !0).filter(
            Boolean,
          );
          return (
            v.forEach(function (w) {
              return w.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                v.forEach(function (w) {
                  return w.classList.remove('allow-interactivity-'.concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var l = d.useCallback(function (v, w) {
      if (
        ('touches' in v && v.touches.length === 2) ||
        (v.type === 'wheel' && v.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var g = yl(v),
        h = n.current,
        x = 'deltaX' in v ? v.deltaX : h[0] - g[0],
        E = 'deltaY' in v ? v.deltaY : h[1] - g[1],
        C,
        b = v.target,
        N = Math.abs(x) > Math.abs(E) ? 'h' : 'v';
      if ('touches' in v && N === 'h' && b.type === 'range') return !1;
      var R = xv(N, b);
      if (!R) return !0;
      if ((R ? (C = N) : ((C = N === 'v' ? 'h' : 'v'), (R = xv(N, b))), !R))
        return !1;
      if (
        (!r.current && 'changedTouches' in v && (x || E) && (r.current = C), !C)
      )
        return !0;
      var _ = r.current || C;
      return q8(_, w, v, _ === 'h' ? x : E, !0);
    }, []),
    a = d.useCallback(function (v) {
      var w = v;
      if (!(!so.length || so[so.length - 1] !== i)) {
        var g = 'deltaY' in w ? wv(w) : yl(w),
          h = t.current.filter(function (C) {
            return (
              C.name === w.type &&
              (C.target === w.target || w.target === C.shadowParent) &&
              J8(C.delta, g)
            );
          })[0];
        if (h && h.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!h) {
          var x = (s.current.shards || [])
              .map(Sv)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(w.target);
              }),
            E = x.length > 0 ? l(w, x[0]) : !s.current.noIsolation;
          E && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = d.useCallback(function (v, w, g, h) {
      var x = { name: v, delta: w, target: g, should: h, shadowParent: r7(g) };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (E) {
            return E !== x;
          });
        }, 1);
    }, []),
    c = d.useCallback(function (v) {
      (n.current = yl(v)), (r.current = void 0);
    }, []),
    f = d.useCallback(function (v) {
      u(v.type, wv(v), v.target, l(v, e.lockRef.current));
    }, []),
    m = d.useCallback(function (v) {
      u(v.type, yl(v), v.target, l(v, e.lockRef.current));
    }, []);
  d.useEffect(function () {
    return (
      so.push(i),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: m,
      }),
      document.addEventListener('wheel', a, io),
      document.addEventListener('touchmove', a, io),
      document.addEventListener('touchstart', c, io),
      function () {
        (so = so.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener('wheel', a, io),
          document.removeEventListener('touchmove', a, io),
          document.removeEventListener('touchstart', c, io);
      }
    );
  }, []);
  var y = e.removeScrollBar,
    S = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    S ? d.createElement(i, { styles: e7(o) }) : null,
    y ? d.createElement(H8, { gapMode: e.gapMode }) : null,
  );
}
function r7(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const o7 = j8(Gy, n7);
var qy = d.forwardRef(function (e, t) {
  return d.createElement(gu, mn({}, e, { ref: t, sideCar: o7 }));
});
qy.classNames = gu.classNames;
var i7 = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
  s7 = [' ', 'Enter'],
  zs = 'Select',
  [yu, xu, l7] = fu(zs),
  [li, $N] = Mp(zs, [l7, Oy]),
  wu = Oy(),
  [a7, Pr] = li(zs),
  [u7, c7] = li(zs),
  Jy = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        value: s,
        defaultValue: l,
        onValueChange: a,
        dir: u,
        name: c,
        autoComplete: f,
        disabled: m,
        required: y,
        form: S,
      } = e,
      v = wu(t),
      [w, g] = d.useState(null),
      [h, x] = d.useState(null),
      [E, C] = d.useState(!1),
      b = yy(u),
      [N = !1, R] = Ss({ prop: r, defaultProp: o, onChange: i }),
      [_, j] = Ss({ prop: s, defaultProp: l, onChange: a }),
      F = d.useRef(null),
      A = w ? S || !!w.closest('form') : !0,
      [D, O] = d.useState(new Set()),
      Z = Array.from(D)
        .map((H) => H.props.value)
        .join(';');
    return p.jsx(d8, {
      ...v,
      children: p.jsxs(a7, {
        required: y,
        scope: t,
        trigger: w,
        onTriggerChange: g,
        valueNode: h,
        onValueNodeChange: x,
        valueNodeHasChildren: E,
        onValueNodeHasChildrenChange: C,
        contentId: Ls(),
        value: _,
        onValueChange: j,
        open: N,
        onOpenChange: R,
        dir: b,
        triggerPointerDownPosRef: F,
        disabled: m,
        children: [
          p.jsx(yu.Provider, {
            scope: t,
            children: p.jsx(u7, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: d.useCallback((H) => {
                O((W) => new Set(W).add(H));
              }, []),
              onNativeOptionRemove: d.useCallback((H) => {
                O((W) => {
                  const M = new Set(W);
                  return M.delete(H), M;
                });
              }, []),
              children: n,
            }),
          }),
          A
            ? p.jsxs(
                b2,
                {
                  'aria-hidden': !0,
                  required: y,
                  tabIndex: -1,
                  name: c,
                  autoComplete: f,
                  value: _,
                  onChange: (H) => j(H.target.value),
                  disabled: m,
                  form: S,
                  children: [
                    _ === void 0 ? p.jsx('option', { value: '' }) : null,
                    Array.from(D),
                  ],
                },
                Z,
              )
            : null,
        ],
      }),
    });
  };
Jy.displayName = zs;
var e2 = 'SelectTrigger',
  t2 = d.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      i = wu(n),
      s = Pr(e2, n),
      l = s.disabled || r,
      a = Te(t, s.onTriggerChange),
      u = xu(n),
      c = d.useRef('touch'),
      [f, m, y] = N2((v) => {
        const w = u().filter((x) => !x.disabled),
          g = w.find((x) => x.value === s.value),
          h = k2(w, v, g);
        h !== void 0 && s.onValueChange(h.value);
      }),
      S = (v) => {
        l || (s.onOpenChange(!0), y()),
          v &&
            (s.triggerPointerDownPosRef.current = {
              x: Math.round(v.pageX),
              y: Math.round(v.pageY),
            });
      };
    return p.jsx(f8, {
      asChild: !0,
      ...i,
      children: p.jsx(ae.button, {
        type: 'button',
        role: 'combobox',
        'aria-controls': s.contentId,
        'aria-expanded': s.open,
        'aria-required': s.required,
        'aria-autocomplete': 'none',
        dir: s.dir,
        'data-state': s.open ? 'open' : 'closed',
        disabled: l,
        'data-disabled': l ? '' : void 0,
        'data-placeholder': E2(s.value) ? '' : void 0,
        ...o,
        ref: a,
        onClick: ne(o.onClick, (v) => {
          v.currentTarget.focus(), c.current !== 'mouse' && S(v);
        }),
        onPointerDown: ne(o.onPointerDown, (v) => {
          c.current = v.pointerType;
          const w = v.target;
          w.hasPointerCapture(v.pointerId) &&
            w.releasePointerCapture(v.pointerId),
            v.button === 0 &&
              v.ctrlKey === !1 &&
              v.pointerType === 'mouse' &&
              (S(v), v.preventDefault());
        }),
        onKeyDown: ne(o.onKeyDown, (v) => {
          const w = f.current !== '';
          !(v.ctrlKey || v.altKey || v.metaKey) &&
            v.key.length === 1 &&
            m(v.key),
            !(w && v.key === ' ') &&
              i7.includes(v.key) &&
              (S(), v.preventDefault());
        }),
      }),
    });
  });
t2.displayName = e2;
var n2 = 'SelectValue',
  r2 = d.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: i,
        placeholder: s = '',
        ...l
      } = e,
      a = Pr(n2, n),
      { onValueNodeHasChildrenChange: u } = a,
      c = i !== void 0,
      f = Te(t, a.onValueNodeChange);
    return (
      Ge(() => {
        u(c);
      }, [u, c]),
      p.jsx(ae.span, {
        ...l,
        ref: f,
        style: { pointerEvents: 'none' },
        children: E2(a.value) ? p.jsx(p.Fragment, { children: s }) : i,
      })
    );
  });
r2.displayName = n2;
var d7 = 'SelectIcon',
  o2 = d.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return p.jsx(ae.span, {
      'aria-hidden': !0,
      ...o,
      ref: t,
      children: r || '▼',
    });
  });
o2.displayName = d7;
var f7 = 'SelectPortal',
  i2 = (e) => p.jsx(zp, { asChild: !0, ...e });
i2.displayName = f7;
var Xr = 'SelectContent',
  s2 = d.forwardRef((e, t) => {
    const n = Pr(Xr, e.__scopeSelect),
      [r, o] = d.useState();
    if (
      (Ge(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const i = r;
      return i
        ? kt.createPortal(
            p.jsx(l2, {
              scope: e.__scopeSelect,
              children: p.jsx(yu.Slot, {
                scope: e.__scopeSelect,
                children: p.jsx('div', { children: e.children }),
              }),
            }),
            i,
          )
        : null;
    }
    return p.jsx(a2, { ...e, ref: t });
  });
s2.displayName = Xr;
var Yt = 10,
  [l2, _r] = li(Xr),
  p7 = 'SelectContentImpl',
  a2 = d.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = 'item-aligned',
        onCloseAutoFocus: o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        side: l,
        sideOffset: a,
        align: u,
        alignOffset: c,
        arrowPadding: f,
        collisionBoundary: m,
        collisionPadding: y,
        sticky: S,
        hideWhenDetached: v,
        avoidCollisions: w,
        ...g
      } = e,
      h = Pr(Xr, n),
      [x, E] = d.useState(null),
      [C, b] = d.useState(null),
      N = Te(t, (q) => E(q)),
      [R, _] = d.useState(null),
      [j, F] = d.useState(null),
      A = xu(n),
      [D, O] = d.useState(!1),
      Z = d.useRef(!1);
    d.useEffect(() => {
      if (x) return C8(x);
    }, [x]),
      GE();
    const H = d.useCallback(
        (q) => {
          const [ie, ...ge] = A().map((Y) => Y.ref.current),
            [Q] = ge.slice(-1),
            se = document.activeElement;
          for (const Y of q)
            if (
              Y === se ||
              (Y == null || Y.scrollIntoView({ block: 'nearest' }),
              Y === ie && C && (C.scrollTop = 0),
              Y === Q && C && (C.scrollTop = C.scrollHeight),
              Y == null || Y.focus(),
              document.activeElement !== se)
            )
              return;
        },
        [A, C],
      ),
      W = d.useCallback(() => H([R, x]), [H, R, x]);
    d.useEffect(() => {
      D && W();
    }, [D, W]);
    const { onOpenChange: M, triggerPointerDownPosRef: L } = h;
    d.useEffect(() => {
      if (x) {
        let q = { x: 0, y: 0 };
        const ie = (Q) => {
            var se, Y;
            q = {
              x: Math.abs(
                Math.round(Q.pageX) -
                  (((se = L.current) == null ? void 0 : se.x) ?? 0),
              ),
              y: Math.abs(
                Math.round(Q.pageY) -
                  (((Y = L.current) == null ? void 0 : Y.y) ?? 0),
              ),
            };
          },
          ge = (Q) => {
            q.x <= 10 && q.y <= 10
              ? Q.preventDefault()
              : x.contains(Q.target) || M(!1),
              document.removeEventListener('pointermove', ie),
              (L.current = null);
          };
        return (
          L.current !== null &&
            (document.addEventListener('pointermove', ie),
            document.addEventListener('pointerup', ge, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener('pointermove', ie),
              document.removeEventListener('pointerup', ge, { capture: !0 });
          }
        );
      }
    }, [x, M, L]),
      d.useEffect(() => {
        const q = () => M(!1);
        return (
          window.addEventListener('blur', q),
          window.addEventListener('resize', q),
          () => {
            window.removeEventListener('blur', q),
              window.removeEventListener('resize', q);
          }
        );
      }, [M]);
    const [K, J] = N2((q) => {
        const ie = A().filter((se) => !se.disabled),
          ge = ie.find((se) => se.ref.current === document.activeElement),
          Q = k2(ie, q, ge);
        Q && setTimeout(() => Q.ref.current.focus());
      }),
      ee = d.useCallback(
        (q, ie, ge) => {
          const Q = !Z.current && !ge;
          ((h.value !== void 0 && h.value === ie) || Q) &&
            (_(q), Q && (Z.current = !0));
        },
        [h.value],
      ),
      me = d.useCallback(() => (x == null ? void 0 : x.focus()), [x]),
      pe = d.useCallback(
        (q, ie, ge) => {
          const Q = !Z.current && !ge;
          ((h.value !== void 0 && h.value === ie) || Q) && F(q);
        },
        [h.value],
      ),
      je = r === 'popper' ? rf : u2,
      ce =
        je === rf
          ? {
              side: l,
              sideOffset: a,
              align: u,
              alignOffset: c,
              arrowPadding: f,
              collisionBoundary: m,
              collisionPadding: y,
              sticky: S,
              hideWhenDetached: v,
              avoidCollisions: w,
            }
          : {};
    return p.jsx(l2, {
      scope: n,
      content: x,
      viewport: C,
      onViewportChange: b,
      itemRefCallback: ee,
      selectedItem: R,
      onItemLeave: me,
      itemTextRefCallback: pe,
      focusSelectedItem: W,
      selectedItemText: j,
      position: r,
      isPositioned: D,
      searchRef: K,
      children: p.jsx(qy, {
        as: Gr,
        allowPinchZoom: !0,
        children: p.jsx(Cy, {
          asChild: !0,
          trapped: h.open,
          onMountAutoFocus: (q) => {
            q.preventDefault();
          },
          onUnmountAutoFocus: ne(o, (q) => {
            var ie;
            (ie = h.trigger) == null || ie.focus({ preventScroll: !0 }),
              q.preventDefault();
          }),
          children: p.jsx(pu, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: (q) => q.preventDefault(),
            onDismiss: () => h.onOpenChange(!1),
            children: p.jsx(je, {
              role: 'listbox',
              id: h.contentId,
              'data-state': h.open ? 'open' : 'closed',
              dir: h.dir,
              onContextMenu: (q) => q.preventDefault(),
              ...g,
              ...ce,
              onPlaced: () => O(!0),
              ref: N,
              style: {
                display: 'flex',
                flexDirection: 'column',
                outline: 'none',
                ...g.style,
              },
              onKeyDown: ne(g.onKeyDown, (q) => {
                const ie = q.ctrlKey || q.altKey || q.metaKey;
                if (
                  (q.key === 'Tab' && q.preventDefault(),
                  !ie && q.key.length === 1 && J(q.key),
                  ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(q.key))
                ) {
                  let Q = A()
                    .filter((se) => !se.disabled)
                    .map((se) => se.ref.current);
                  if (
                    (['ArrowUp', 'End'].includes(q.key) &&
                      (Q = Q.slice().reverse()),
                    ['ArrowUp', 'ArrowDown'].includes(q.key))
                  ) {
                    const se = q.target,
                      Y = Q.indexOf(se);
                    Q = Q.slice(Y + 1);
                  }
                  setTimeout(() => H(Q)), q.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
a2.displayName = p7;
var h7 = 'SelectItemAlignedPosition',
  u2 = d.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      i = Pr(Xr, n),
      s = _r(Xr, n),
      [l, a] = d.useState(null),
      [u, c] = d.useState(null),
      f = Te(t, (N) => c(N)),
      m = xu(n),
      y = d.useRef(!1),
      S = d.useRef(!0),
      {
        viewport: v,
        selectedItem: w,
        selectedItemText: g,
        focusSelectedItem: h,
      } = s,
      x = d.useCallback(() => {
        if (i.trigger && i.valueNode && l && u && v && w && g) {
          const N = i.trigger.getBoundingClientRect(),
            R = u.getBoundingClientRect(),
            _ = i.valueNode.getBoundingClientRect(),
            j = g.getBoundingClientRect();
          if (i.dir !== 'rtl') {
            const se = j.left - R.left,
              Y = _.left - se,
              te = N.left - Y,
              le = N.width + te,
              de = Math.max(le, R.width),
              Pe = window.innerWidth - Yt,
              rt = tv(Y, [Yt, Math.max(Yt, Pe - de)]);
            (l.style.minWidth = le + 'px'), (l.style.left = rt + 'px');
          } else {
            const se = R.right - j.right,
              Y = window.innerWidth - _.right - se,
              te = window.innerWidth - N.right - Y,
              le = N.width + te,
              de = Math.max(le, R.width),
              Pe = window.innerWidth - Yt,
              rt = tv(Y, [Yt, Math.max(Yt, Pe - de)]);
            (l.style.minWidth = le + 'px'), (l.style.right = rt + 'px');
          }
          const F = m(),
            A = window.innerHeight - Yt * 2,
            D = v.scrollHeight,
            O = window.getComputedStyle(u),
            Z = parseInt(O.borderTopWidth, 10),
            H = parseInt(O.paddingTop, 10),
            W = parseInt(O.borderBottomWidth, 10),
            M = parseInt(O.paddingBottom, 10),
            L = Z + H + D + M + W,
            K = Math.min(w.offsetHeight * 5, L),
            J = window.getComputedStyle(v),
            ee = parseInt(J.paddingTop, 10),
            me = parseInt(J.paddingBottom, 10),
            pe = N.top + N.height / 2 - Yt,
            je = A - pe,
            ce = w.offsetHeight / 2,
            q = w.offsetTop + ce,
            ie = Z + H + q,
            ge = L - ie;
          if (ie <= pe) {
            const se = F.length > 0 && w === F[F.length - 1].ref.current;
            l.style.bottom = '0px';
            const Y = u.clientHeight - v.offsetTop - v.offsetHeight,
              te = Math.max(je, ce + (se ? me : 0) + Y + W),
              le = ie + te;
            l.style.height = le + 'px';
          } else {
            const se = F.length > 0 && w === F[0].ref.current;
            l.style.top = '0px';
            const te = Math.max(pe, Z + v.offsetTop + (se ? ee : 0) + ce) + ge;
            (l.style.height = te + 'px'), (v.scrollTop = ie - pe + v.offsetTop);
          }
          (l.style.margin = `${Yt}px 0`),
            (l.style.minHeight = K + 'px'),
            (l.style.maxHeight = A + 'px'),
            r == null || r(),
            requestAnimationFrame(() => (y.current = !0));
        }
      }, [m, i.trigger, i.valueNode, l, u, v, w, g, i.dir, r]);
    Ge(() => x(), [x]);
    const [E, C] = d.useState();
    Ge(() => {
      u && C(window.getComputedStyle(u).zIndex);
    }, [u]);
    const b = d.useCallback(
      (N) => {
        N && S.current === !0 && (x(), h == null || h(), (S.current = !1));
      },
      [x, h],
    );
    return p.jsx(v7, {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: y,
      onScrollButtonChange: b,
      children: p.jsx('div', {
        ref: a,
        style: {
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          zIndex: E,
        },
        children: p.jsx(ae.div, {
          ...o,
          ref: f,
          style: { boxSizing: 'border-box', maxHeight: '100%', ...o.style },
        }),
      }),
    });
  });
u2.displayName = h7;
var m7 = 'SelectPopperPosition',
  rf = d.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = 'start',
        collisionPadding: o = Yt,
        ...i
      } = e,
      s = wu(n);
    return p.jsx(p8, {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: 'border-box',
        ...i.style,
        '--radix-select-content-transform-origin':
          'var(--radix-popper-transform-origin)',
        '--radix-select-content-available-width':
          'var(--radix-popper-available-width)',
        '--radix-select-content-available-height':
          'var(--radix-popper-available-height)',
        '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
        '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
      },
    });
  });
rf.displayName = m7;
var [v7, $p] = li(Xr, {}),
  of = 'SelectViewport',
  c2 = d.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      i = _r(of, n),
      s = $p(of, n),
      l = Te(t, i.onViewportChange),
      a = d.useRef(0);
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx('style', {
          dangerouslySetInnerHTML: {
            __html:
              '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
          },
          nonce: r,
        }),
        p.jsx(yu.Slot, {
          scope: n,
          children: p.jsx(ae.div, {
            'data-radix-select-viewport': '',
            role: 'presentation',
            ...o,
            ref: l,
            style: {
              position: 'relative',
              flex: 1,
              overflow: 'hidden auto',
              ...o.style,
            },
            onScroll: ne(o.onScroll, (u) => {
              const c = u.currentTarget,
                { contentWrapper: f, shouldExpandOnScrollRef: m } = s;
              if (m != null && m.current && f) {
                const y = Math.abs(a.current - c.scrollTop);
                if (y > 0) {
                  const S = window.innerHeight - Yt * 2,
                    v = parseFloat(f.style.minHeight),
                    w = parseFloat(f.style.height),
                    g = Math.max(v, w);
                  if (g < S) {
                    const h = g + y,
                      x = Math.min(S, h),
                      E = h - x;
                    (f.style.height = x + 'px'),
                      f.style.bottom === '0px' &&
                        ((c.scrollTop = E > 0 ? E : 0),
                        (f.style.justifyContent = 'flex-end'));
                  }
                }
              }
              a.current = c.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
c2.displayName = of;
var d2 = 'SelectGroup',
  [g7, y7] = li(d2),
  x7 = d.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Ls();
    return p.jsx(g7, {
      scope: n,
      id: o,
      children: p.jsx(ae.div, {
        role: 'group',
        'aria-labelledby': o,
        ...r,
        ref: t,
      }),
    });
  });
x7.displayName = d2;
var f2 = 'SelectLabel',
  p2 = d.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = y7(f2, n);
    return p.jsx(ae.div, { id: o.id, ...r, ref: t });
  });
p2.displayName = f2;
var ja = 'SelectItem',
  [w7, h2] = li(ja),
  m2 = d.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: i,
        ...s
      } = e,
      l = Pr(ja, n),
      a = _r(ja, n),
      u = l.value === r,
      [c, f] = d.useState(i ?? ''),
      [m, y] = d.useState(!1),
      S = Te(t, (h) => {
        var x;
        return (x = a.itemRefCallback) == null ? void 0 : x.call(a, h, r, o);
      }),
      v = Ls(),
      w = d.useRef('touch'),
      g = () => {
        o || (l.onValueChange(r), l.onOpenChange(!1));
      };
    if (r === '')
      throw new Error(
        'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.',
      );
    return p.jsx(w7, {
      scope: n,
      value: r,
      disabled: o,
      textId: v,
      isSelected: u,
      onItemTextChange: d.useCallback((h) => {
        f((x) => x || ((h == null ? void 0 : h.textContent) ?? '').trim());
      }, []),
      children: p.jsx(yu.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: c,
        children: p.jsx(ae.div, {
          role: 'option',
          'aria-labelledby': v,
          'data-highlighted': m ? '' : void 0,
          'aria-selected': u && m,
          'data-state': u ? 'checked' : 'unchecked',
          'aria-disabled': o || void 0,
          'data-disabled': o ? '' : void 0,
          tabIndex: o ? void 0 : -1,
          ...s,
          ref: S,
          onFocus: ne(s.onFocus, () => y(!0)),
          onBlur: ne(s.onBlur, () => y(!1)),
          onClick: ne(s.onClick, () => {
            w.current !== 'mouse' && g();
          }),
          onPointerUp: ne(s.onPointerUp, () => {
            w.current === 'mouse' && g();
          }),
          onPointerDown: ne(s.onPointerDown, (h) => {
            w.current = h.pointerType;
          }),
          onPointerMove: ne(s.onPointerMove, (h) => {
            var x;
            (w.current = h.pointerType),
              o
                ? (x = a.onItemLeave) == null || x.call(a)
                : w.current === 'mouse' &&
                  h.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: ne(s.onPointerLeave, (h) => {
            var x;
            h.currentTarget === document.activeElement &&
              ((x = a.onItemLeave) == null || x.call(a));
          }),
          onKeyDown: ne(s.onKeyDown, (h) => {
            var E;
            (((E = a.searchRef) == null ? void 0 : E.current) !== '' &&
              h.key === ' ') ||
              (s7.includes(h.key) && g(), h.key === ' ' && h.preventDefault());
          }),
        }),
      }),
    });
  });
m2.displayName = ja;
var ji = 'SelectItemText',
  v2 = d.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e,
      s = Pr(ji, n),
      l = _r(ji, n),
      a = h2(ji, n),
      u = c7(ji, n),
      [c, f] = d.useState(null),
      m = Te(
        t,
        (g) => f(g),
        a.onItemTextChange,
        (g) => {
          var h;
          return (h = l.itemTextRefCallback) == null
            ? void 0
            : h.call(l, g, a.value, a.disabled);
        },
      ),
      y = c == null ? void 0 : c.textContent,
      S = d.useMemo(
        () =>
          p.jsx(
            'option',
            { value: a.value, disabled: a.disabled, children: y },
            a.value,
          ),
        [a.disabled, a.value, y],
      ),
      { onNativeOptionAdd: v, onNativeOptionRemove: w } = u;
    return (
      Ge(() => (v(S), () => w(S)), [v, w, S]),
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(ae.span, { id: a.textId, ...i, ref: m }),
          a.isSelected && s.valueNode && !s.valueNodeHasChildren
            ? kt.createPortal(i.children, s.valueNode)
            : null,
        ],
      })
    );
  });
v2.displayName = ji;
var g2 = 'SelectItemIndicator',
  y2 = d.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return h2(g2, n).isSelected
      ? p.jsx(ae.span, { 'aria-hidden': !0, ...r, ref: t })
      : null;
  });
y2.displayName = g2;
var sf = 'SelectScrollUpButton',
  x2 = d.forwardRef((e, t) => {
    const n = _r(sf, e.__scopeSelect),
      r = $p(sf, e.__scopeSelect),
      [o, i] = d.useState(!1),
      s = Te(t, r.onScrollButtonChange);
    return (
      Ge(() => {
        if (n.viewport && n.isPositioned) {
          let l = function () {
            const u = a.scrollTop > 0;
            i(u);
          };
          const a = n.viewport;
          return (
            l(),
            a.addEventListener('scroll', l),
            () => a.removeEventListener('scroll', l)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? p.jsx(S2, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: a } = n;
              l && a && (l.scrollTop = l.scrollTop - a.offsetHeight);
            },
          })
        : null
    );
  });
x2.displayName = sf;
var lf = 'SelectScrollDownButton',
  w2 = d.forwardRef((e, t) => {
    const n = _r(lf, e.__scopeSelect),
      r = $p(lf, e.__scopeSelect),
      [o, i] = d.useState(!1),
      s = Te(t, r.onScrollButtonChange);
    return (
      Ge(() => {
        if (n.viewport && n.isPositioned) {
          let l = function () {
            const u = a.scrollHeight - a.clientHeight,
              c = Math.ceil(a.scrollTop) < u;
            i(c);
          };
          const a = n.viewport;
          return (
            l(),
            a.addEventListener('scroll', l),
            () => a.removeEventListener('scroll', l)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? p.jsx(S2, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: a } = n;
              l && a && (l.scrollTop = l.scrollTop + a.offsetHeight);
            },
          })
        : null
    );
  });
w2.displayName = lf;
var S2 = d.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      i = _r('SelectScrollButton', n),
      s = d.useRef(null),
      l = xu(n),
      a = d.useCallback(() => {
        s.current !== null &&
          (window.clearInterval(s.current), (s.current = null));
      }, []);
    return (
      d.useEffect(() => () => a(), [a]),
      Ge(() => {
        var c;
        const u = l().find((f) => f.ref.current === document.activeElement);
        (c = u == null ? void 0 : u.ref.current) == null ||
          c.scrollIntoView({ block: 'nearest' });
      }, [l]),
      p.jsx(ae.div, {
        'aria-hidden': !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: ne(o.onPointerDown, () => {
          s.current === null && (s.current = window.setInterval(r, 50));
        }),
        onPointerMove: ne(o.onPointerMove, () => {
          var u;
          (u = i.onItemLeave) == null || u.call(i),
            s.current === null && (s.current = window.setInterval(r, 50));
        }),
        onPointerLeave: ne(o.onPointerLeave, () => {
          a();
        }),
      })
    );
  }),
  S7 = 'SelectSeparator',
  C2 = d.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return p.jsx(ae.div, { 'aria-hidden': !0, ...r, ref: t });
  });
C2.displayName = S7;
var af = 'SelectArrow',
  C7 = d.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = wu(n),
      i = Pr(af, n),
      s = _r(af, n);
    return i.open && s.position === 'popper'
      ? p.jsx(h8, { ...o, ...r, ref: t })
      : null;
  });
C7.displayName = af;
function E2(e) {
  return e === '' || e === void 0;
}
var b2 = d.forwardRef((e, t) => {
  const { value: n, ...r } = e,
    o = d.useRef(null),
    i = Te(t, o),
    s = By(n);
  return (
    d.useEffect(() => {
      const l = o.current,
        a = window.HTMLSelectElement.prototype,
        c = Object.getOwnPropertyDescriptor(a, 'value').set;
      if (s !== n && c) {
        const f = new Event('change', { bubbles: !0 });
        c.call(l, n), l.dispatchEvent(f);
      }
    }, [s, n]),
    p.jsx(Vs, {
      asChild: !0,
      children: p.jsx('select', { ...r, ref: i, defaultValue: n }),
    })
  );
});
b2.displayName = 'BubbleSelect';
function N2(e) {
  const t = Ve(e),
    n = d.useRef(''),
    r = d.useRef(0),
    o = d.useCallback(
      (s) => {
        const l = n.current + s;
        t(l),
          (function a(u) {
            (n.current = u),
              window.clearTimeout(r.current),
              u !== '' && (r.current = window.setTimeout(() => a(''), 1e3));
          })(l);
      },
      [t],
    ),
    i = d.useCallback(() => {
      (n.current = ''), window.clearTimeout(r.current);
    }, []);
  return d.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function k2(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = E7(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const a = s.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase()),
  );
  return a !== n ? a : void 0;
}
function E7(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var b7 = Jy,
  R2 = t2,
  N7 = r2,
  k7 = o2,
  R7 = i2,
  T2 = s2,
  T7 = c2,
  P2 = p2,
  _2 = m2,
  P7 = v2,
  _7 = y2,
  M2 = x2,
  j2 = w2,
  A2 = C2;
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M7 = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  O2 = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(' ');
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var j7 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A7 = d.forwardRef(
  (
    {
      color: e = 'currentColor',
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = '',
      children: i,
      iconNode: s,
      ...l
    },
    a,
  ) =>
    d.createElement(
      'svg',
      {
        ref: a,
        ...j7,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: O2('lucide', o),
        ...l,
      },
      [
        ...s.map(([u, c]) => d.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Su = (e, t) => {
  const n = d.forwardRef(({ className: r, ...o }, i) =>
    d.createElement(A7, {
      ref: i,
      iconNode: t,
      className: O2(`lucide-${M7(e)}`, r),
      ...o,
    }),
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O7 = Su('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Up = Su('ChevronDown', [
  ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D7 = Su('ChevronUp', [
  ['path', { d: 'm18 15-6-6-6 6', key: '153udz' }],
]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I7 = Su('X', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]),
  Bp = b7,
  Wp = N7,
  Cu = d.forwardRef(({ className: e, children: t, ...n }, r) =>
    p.jsxs(R2, {
      ref: r,
      className: fe(
        'flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300',
        e,
      ),
      ...n,
      children: [
        t,
        p.jsx(k7, {
          asChild: !0,
          children: p.jsx(Up, { className: 'h-4 w-4 opacity-50' }),
        }),
      ],
    }),
  );
Cu.displayName = R2.displayName;
const D2 = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(M2, {
    ref: n,
    className: fe('flex cursor-default items-center justify-center py-1', e),
    ...t,
    children: p.jsx(D7, { className: 'h-4 w-4' }),
  }),
);
D2.displayName = M2.displayName;
const I2 = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(j2, {
    ref: n,
    className: fe('flex cursor-default items-center justify-center py-1', e),
    ...t,
    children: p.jsx(Up, { className: 'h-4 w-4' }),
  }),
);
I2.displayName = j2.displayName;
const Eu = d.forwardRef(
  ({ className: e, children: t, position: n = 'popper', ...r }, o) =>
    p.jsx(R7, {
      children: p.jsxs(T2, {
        ref: o,
        className: fe(
          'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
          n === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          e,
        ),
        position: n,
        ...r,
        children: [
          p.jsx(D2, {}),
          p.jsx(T7, {
            className: fe(
              'p-1',
              n === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
            ),
            children: t,
          }),
          p.jsx(I2, {}),
        ],
      }),
    }),
);
Eu.displayName = T2.displayName;
const L7 = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(P2, {
    ref: n,
    className: fe('py-1.5 pl-8 pr-2 text-sm font-semibold', e),
    ...t,
  }),
);
L7.displayName = P2.displayName;
const Do = d.forwardRef(({ className: e, children: t, ...n }, r) =>
  p.jsxs(_2, {
    ref: r,
    className: fe(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
      e,
    ),
    ...n,
    children: [
      p.jsx('span', {
        className:
          'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
        children: p.jsx(_7, { children: p.jsx(O7, { className: 'h-4 w-4' }) }),
      }),
      p.jsx(P7, { children: t }),
    ],
  }),
);
Do.displayName = _2.displayName;
const F7 = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(A2, {
    ref: n,
    className: fe('-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800', e),
    ...t,
  }),
);
F7.displayName = A2.displayName;
var V7 = 'Label',
  L2 = d.forwardRef((e, t) =>
    p.jsx(ae.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest('button, input, select, textarea') ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    }),
  );
L2.displayName = V7;
var F2 = L2;
const z7 = su(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  ),
  Aa = d.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(F2, { ref: n, className: fe(z7(), e), ...t }),
  );
Aa.displayName = F2.displayName;
const $s = d.forwardRef(({ className: e, type: t, ...n }, r) =>
  p.jsx('input', {
    type: t,
    className: fe(
      'flex h-10 w-full rounded-md border border-input  bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      e,
    ),
    ref: r,
    ...n,
  }),
);
$s.displayName = 'Input';
const $7 = ({ id: e, children: t }) => {
  const {
    attributes: n,
    listeners: r,
    setNodeRef: o,
    transform: i,
    transition: s,
  } = bC({ id: e });
  return p.jsx('div', {
    ref: o,
    ...n,
    ...r,
    style: {
      transform: `translate3d(${(i == null ? void 0 : i.x) ?? 0}px, ${(i == null ? void 0 : i.y) ?? 0}px, 0)`,
      transition: s,
      cursor: 'move',
    },
    children: t,
  });
};
var V2 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Cv = I.createContext && I.createContext(V2),
  U7 = ['attr', 'size', 'title'];
function B7(e, t) {
  if (e == null) return {};
  var n = W7(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function W7(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Oa() {
  return (
    (Oa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Oa.apply(this, arguments)
  );
}
function Ev(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ev(Object(n), !0).forEach(function (r) {
          H7(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ev(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function H7(e, t, n) {
  return (
    (t = K7(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function K7(e) {
  var t = G7(e, 'string');
  return typeof t == 'symbol' ? t : t + '';
}
function G7(e, t) {
  if (typeof e != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function z2(e) {
  return (
    e &&
    e.map((t, n) => I.createElement(t.tag, Da({ key: n }, t.attr), z2(t.child)))
  );
}
function be(e) {
  return (t) =>
    I.createElement(Z7, Oa({ attr: Da({}, e.attr) }, t), z2(e.child));
}
function Z7(e) {
  var t = (n) => {
    var { attr: r, size: o, title: i } = e,
      s = B7(e, U7),
      l = o || n.size || '1em',
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + ' ' : '') + e.className),
      I.createElement(
        'svg',
        Oa(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          s,
          {
            className: a,
            style: Da(Da({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: 'http://www.w3.org/2000/svg',
          },
        ),
        i && I.createElement('title', null, i),
        e.children,
      )
    );
  };
  return Cv !== void 0
    ? I.createElement(Cv.Consumer, null, (n) => t(n))
    : t(V2);
}
function Y7(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z',
        },
        child: [],
      },
    ],
  })(e);
}
function X7(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z',
        },
        child: [],
      },
    ],
  })(e);
}
function Q7(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z',
        },
        child: [],
      },
    ],
  })(e);
}
function q7(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 528 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z',
        },
        child: [],
      },
    ],
  })(e);
}
function J7(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z',
        },
        child: [],
      },
    ],
  })(e);
}
function e9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
        },
        child: [],
      },
    ],
  })(e);
}
function t9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
        },
        child: [],
      },
    ],
  })(e);
}
function n9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
        },
        child: [],
      },
    ],
  })(e);
}
function r9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z',
        },
        child: [],
      },
    ],
  })(e);
}
function o9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z',
        },
        child: [],
      },
    ],
  })(e);
}
function i9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z',
        },
        child: [],
      },
    ],
  })(e);
}
function s9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2-1.4 1.9-2.5 9.8-4.3 15.9-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9-17.6 0-23.7 4-37.4 13.7-14.5 10.3-28.4 19.1-49.2 18.2-21 1.6-38.6-11.2-48.5-18.2-13.8-9.7-19.8-13.7-37.4-13.7-12.5 0-20.4 3.1-25.8 3.1-5.4 0-7.5-3.3-8.3-6-1.8-6.1-2.9-14.1-4.3-16-13.8-2.1-44.8-7.5-45.5-21.4-.2-3.6 2.3-6.8 5.9-7.4 46.3-7.6 67.1-55.1 68-57.1 0-.1.1-.2.2-.3 2.5-5 3-9.2 1.6-12.5-3.4-7.9-17.9-10.7-24-13.2-15.8-6.2-18-13.4-17-18.3 1.6-8.5 14.4-13.8 21.9-10.3 5.9 2.8 11.2 4.2 15.7 4.2 3.3 0 5.5-.8 6.6-1.4-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1 34.7 0 68 17.8 84.3 54.3 8.5 19.1 5.2 53.1 3.8 77.1 1.1.6 2.9 1.3 5.7 1.4 4.3-.2 9.2-1.6 14.7-4.2 4-1.9 9.6-1.6 13.6 0 6.3 2.3 10.3 6.8 10.4 11.9.1 6.5-5.7 12.1-17.2 16.6-1.4.6-3.1 1.1-4.9 1.7-6.5 2.1-16.4 5.2-19 11.5-1.4 3.3-.8 7.5 1.6 12.5.1.1.1.2.2.3.9 2 21.7 49.5 68 57.1 4 1 7.1 5.5 4.9 10.8z',
        },
        child: [],
      },
    ],
  })(e);
}
function l9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z',
        },
        child: [],
      },
    ],
  })(e);
}
function a9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z',
        },
        child: [],
      },
    ],
  })(e);
}
function u9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z',
        },
        child: [],
      },
    ],
  })(e);
}
function c9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z',
        },
        child: [],
      },
    ],
  })(e);
}
function d9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z',
        },
        child: [],
      },
    ],
  })(e);
}
function f9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z',
        },
        child: [],
      },
    ],
  })(e);
}
function p9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z',
        },
        child: [],
      },
    ],
  })(e);
}
function h9(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z',
        },
        child: [],
      },
    ],
  })(e);
}
function $2(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z',
        },
        child: [],
      },
    ],
  })(e);
}
const Hp = [
    { platform: 'GitHub', icon: e9, color: '#333' },
    { platform: 'LinkedIn', icon: n9, color: '#0077B5' },
    { platform: 'Slack', icon: i9, color: '#4A154B' },
    { platform: 'Dropbox', icon: q7, color: '#0061FF' },
    { platform: 'Amazon', icon: X7, color: '#FF9900' },
    { platform: 'Facebook', icon: J7, color: '#3b5998' },
    { platform: 'Twitter', icon: d9, color: '#1DA1F2' },
    { platform: 'Instagram', icon: t9, color: '#E1306C' },
    { platform: 'YouTube', icon: p9, color: '#FF0000' },
    { platform: 'Pinterest', icon: r9, color: '#BD081C' },
    { platform: 'Snapchat', icon: s9, color: '#aaa700' },
    { platform: 'TikTok', icon: u9, color: '#010101' },
    { platform: 'Reddit', icon: o9, color: '#FF4500' },
    { platform: 'WhatsApp', icon: f9, color: '#25D366' },
    { platform: 'Telegram', icon: a9, color: '#0088CC' },
    { platform: 'Twitch', icon: c9, color: '#9146FF' },
    { platform: 'Dribbble', icon: Q7, color: '#EA4C89' },
    { platform: 'Spotify', icon: l9, color: '#1DB954' },
  ],
  Ia = new Map(Hp.map((e) => [e.platform, e])),
  m9 = ({ fields: e, update: t, remove: n, form: r }) =>
    p.jsx(p.Fragment, {
      children: e.map((o, i) => {
        var s, l, a, u, c, f, m, y;
        return p.jsx(
          $7,
          {
            id: o.id,
            children: p.jsxs('div', {
              className:
                'mt-6 p-4 border rounded-md text-neutral-600 bg-neutral-100',
              children: [
                p.jsxs('div', {
                  className: 'flex justify-between mb-4',
                  children: [
                    p.jsxs('div', {
                      className: 'flex items-center gap-1 text-neutral-600',
                      children: [
                        p.jsx(Y7, {}),
                        p.jsxs('h1', {
                          className: 'text-xl font-semibold',
                          children: ['Link #', i + 1],
                        }),
                      ],
                    }),
                    p.jsx('button', {
                      className:
                        'text-neutral-500 hover:text-destructive items-center',
                      onClick: () => n(i),
                      children: 'Remove',
                    }),
                  ],
                }),
                p.jsxs('div', {
                  className: 'mb-4',
                  children: [
                    p.jsx(Aa, {
                      htmlFor: `links.${i}.platform`,
                      children: 'Platform',
                    }),
                    p.jsxs(Bp, {
                      value: o.platform,
                      onValueChange: (S) => {
                        const v = r.getValues(`links.${i}`);
                        t(i, { ...v, platform: S });
                      },
                      children: [
                        p.jsx(Cu, {
                          children: p.jsx(Wp, {
                            placeholder: 'Select a platform',
                          }),
                        }),
                        p.jsx(Eu, {
                          children: Hp.map((S, v) => {
                            const w = S.icon;
                            return p.jsx(
                              Do,
                              {
                                value: S.platform,
                                children: p.jsxs('div', {
                                  className:
                                    'flex text-neutral-600 justify-start items-center gap-2',
                                  children: [
                                    p.jsx(w, {}),
                                    p.jsx('span', { children: S.platform }),
                                  ],
                                }),
                              },
                              S.platform + v,
                            );
                          }),
                        }),
                      ],
                    }),
                    ((a =
                      (l =
                        (s = r.formState.errors) == null ? void 0 : s.links) ==
                      null
                        ? void 0
                        : l[i]) == null
                      ? void 0
                      : a.platform) &&
                      p.jsx('p', {
                        className: 'text-red-600 mt-1',
                        children:
                          (u = r.formState.errors.links[i].platform) == null
                            ? void 0
                            : u.message,
                      }),
                  ],
                }),
                p.jsxs('div', {
                  children: [
                    p.jsx(Aa, { htmlFor: `links.${i}.link`, children: 'Link' }),
                    p.jsx(
                      $s,
                      {
                        id: `links.${i}.link`,
                        placeholder: 'Enter the link',
                        ...r.register(`links.${i}.link`),
                      },
                      o.id + i,
                    ),
                    ((m =
                      (f =
                        (c = r.formState.errors) == null ? void 0 : c.links) ==
                      null
                        ? void 0
                        : f[i]) == null
                      ? void 0
                      : m.link) &&
                      p.jsx('p', {
                        className: 'text-red-600 mt-1',
                        children:
                          (y = r.formState.errors.links[i].link) == null
                            ? void 0
                            : y.message,
                      }),
                  ],
                }),
              ],
            }),
          },
          o.id,
        );
      }),
    });
async function v9(e, { arg: t }) {
  var o;
  const n = (o = at.getState().user) == null ? void 0 : o.token,
    r = await fetch(e, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${n}`,
      },
      body: JSON.stringify(t),
    });
  if (!r.ok) throw new Error('Failed to sign up');
  return r.json();
}
const bv = () => {
    const { setLinks: e, setlinkDraft: t } = at((N) => N),
      { links: n, islinkDraft: r } = at((N) => N),
      o = ou({ resolver: iu(MC), mode: 'all', defaultValues: { links: n } }),
      {
        control: i,
        watch: s,
        handleSubmit: l,
        getValues: a,
        formState: u,
        setValue: c,
      } = o,
      { toast: f } = vy(),
      {
        fields: m,
        append: y,
        update: S,
        remove: v,
      } = jS({ control: i, name: 'links' }),
      { trigger: w, isMutating: g } = Ds(Zr('protected/devlinks'), v9),
      h = () => {
        y({ platform: Hp[m.length].platform, link: 'http://' });
      },
      x = async (N) => {
        try {
          await w(N),
            t(!1),
            f({
              variant: 'default',
              description: 'Links updated successfully',
            });
        } catch (R) {
          R instanceof Error &&
            f({
              variant: 'destructive',
              description: 'An error occurred, please try again later.',
            });
        }
      },
      E = t5(e5(oy)),
      C = (N) => m.findIndex((R) => R.id === N),
      b = (N) => {
        const { active: R, over: _ } = N;
        if (R.id === (_ == null ? void 0 : _.id)) return;
        t(!0);
        const j = C(R.id.toString()),
          F = C((_ == null ? void 0 : _.id.toString()) || '');
        c('links', Tp(a('links'), j, F));
      };
    return (
      d.useEffect(() => {
        Object.keys(u.dirtyFields).length > 0 && t(!0), e([...a('links')]);
      }, [s('links')]),
      p.jsxs('form', {
        onSubmit: l(x),
        className: 'p-4 overflow-hidden',
        children: [
          p.jsx('h1', {
            className: 'text-2xl font-bold mb-2',
            children: 'Customize your Links',
          }),
          p.jsx('p', {
            className: 'text-neutral-500 mb-6',
            children:
              'Add/edit/remove links below and then share all your profile with the world!',
          }),
          r &&
            p.jsx('div', {
              className: 'mb-4 p-3 bg-yellow-200 text-yellow-800 rounded-lg',
              children:
                'Your Links are in draft mode. Please save changes to make the links visible on live.',
            }),
          p.jsx(wn, {
            className:
              'w-full border border-primary-900 hover:bg-primary-100 text-primary-900',
            variant: 'outline',
            onClick: h,
            type: 'button',
            children: '+ Add New Link',
          }),
          m.length <= 0 &&
            p.jsx('div', {
              className: 'w-full flex justify-center mt-10',
              children: p.jsx(jE, {}),
            }),
          p.jsx('div', {
            className: 'mt-4 overflow-x-scroll overflow-y-hidden',
            children: p.jsx(iC, {
              sensors: E,
              collisionDetection: s5,
              onDragEnd: b,
              children: p.jsx(gC, {
                items: m,
                strategy: mC,
                children: p.jsx(m9, {
                  fields: m,
                  update: S,
                  remove: v,
                  form: o,
                }),
              }),
            }),
          }),
          p.jsx('div', {
            className: 'flex justify-end mt-4',
            children: p.jsx(wn, {
              className:
                ' bg-primary-900 hover:bg-primary-700 text-white w-full md:w-1/6',
              type: 'submit',
              children: g ? p.jsx(Is, {}) : 'Submit',
            }),
          }),
        ],
      })
    );
  },
  g9 = () => {
    var s, l;
    const e = at((a) => a.user),
      t = at((a) => a.links),
      r = Jo().pathname === '/profile',
      o = new Array(5 - t.slice(0, 5).length).fill({ platform: '', link: '' }),
      i = [...t.slice(0, 5), ...o];
    return p.jsx('div', {
      className:
        'w-full max-w-sm mx-auto bg-white border border-stone-900 rounded-[40px] p-3',
      children: p.jsxs('div', {
        className:
          'w-full max-w-sm mx-auto bg-white border border-stone-900 rounded-[40px] p-8',
        children: [
          p.jsx('div', {
            className: 'flex justify-center',
            children: p.jsx('div', {
              className:
                'w-52 h-7 bg-white border-b border-l border-r border-stone-900 rounded-t-[-44px] rounded-b-[34px] mt-[-33px]',
            }),
          }),
          r
            ? p.jsxs('div', {
                className: 'm-8',
                children: [
                  p.jsx('div', {
                    className: 'flex justify-center',
                    children: p.jsx('img', {
                      src: e == null ? void 0 : e.profilePic,
                      alt: 'User Profile',
                      className: 'w-24 h-24 rounded-full mb-2',
                    }),
                  }),
                  p.jsx('h1', {
                    className:
                      'text-xs sm:text-lg w-full h-6 font-bold text-neutral-600 text-center mb-2',
                    children: `${(s = e == null ? void 0 : e.firstName) == null ? void 0 : s.slice(0, 10)} ${(l = e == null ? void 0 : e.lastName) == null ? void 0 : l.slice(0, 10)}`,
                  }),
                  p.jsx('h1', {
                    className: 'text-neutral-500 text-center rounded-md mb-4',
                    children: e == null ? void 0 : e.userEmail,
                  }),
                ],
              })
            : p.jsxs('div', {
                className: 'm-8',
                children: [
                  p.jsx('div', {
                    className: 'flex justify-center',
                    children: p.jsx('div', {
                      className: 'w-24 h-24 bg-gray-200 rounded-full mb-4',
                    }),
                  }),
                  p.jsx('div', {
                    className: 'h-6 bg-gray-200 rounded-md mb-2',
                  }),
                  p.jsx('div', {
                    className: 'h-4 bg-gray-200 rounded-md mb-4',
                  }),
                ],
              }),
          p.jsx('div', {
            className: 'space-y-6',
            children: i.map((a, u) => {
              var c, f;
              if ('platform' in a && a.platform !== '') {
                const m =
                    (a == null ? void 0 : a.platform) &&
                    ((c = Ia.get(a.platform)) == null ? void 0 : c.icon),
                  y =
                    (a == null ? void 0 : a.platform) &&
                    ((f = Ia.get(a.platform)) == null ? void 0 : f.color);
                return p.jsxs(
                  'div',
                  {
                    style: { backgroundColor: y },
                    className:
                      'h-14 rounded-md text-white flex justify-between items-center p-4',
                    children: [
                      p.jsxs('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          m && p.jsx(m, {}),
                          ' ',
                          p.jsx('h1', { children: a.platform }),
                          ' ',
                        ],
                      }),
                      p.jsx($2, {}),
                      ' ',
                    ],
                  },
                  u,
                );
              }
              return p.jsx(
                'div',
                { className: 'h-14 bg-gray-200 rounded-md' },
                u,
              );
            }),
          }),
        ],
      }),
    });
  },
  Kp = bS,
  U2 = d.createContext({}),
  Vr = ({ ...e }) =>
    p.jsx(U2.Provider, {
      value: { name: e.name },
      children: p.jsx(TS, { ...e }),
    }),
  bu = () => {
    const e = d.useContext(U2),
      t = d.useContext(B2),
      { getFieldState: n, formState: r } = Ms(),
      o = n(e.name, r);
    if (!e) throw new Error('useFormField should be used within <FormField>');
    const { id: i } = t;
    return {
      id: i,
      name: e.name,
      formItemId: `${i}-form-item`,
      formDescriptionId: `${i}-form-item-description`,
      formMessageId: `${i}-form-item-message`,
      ...o,
    };
  },
  B2 = d.createContext({}),
  or = d.forwardRef(({ className: e, ...t }, n) => {
    const r = d.useId();
    return p.jsx(B2.Provider, {
      value: { id: r },
      children: p.jsx('div', { ref: n, className: fe('space-y-2', e), ...t }),
    });
  });
or.displayName = 'FormItem';
const ir = d.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = bu();
  return p.jsx(Aa, {
    ref: n,
    className: fe(r && 'text-destructive', e),
    htmlFor: o,
    ...t,
  });
});
ir.displayName = 'FormLabel';
const sr = d.forwardRef(({ ...e }, t) => {
  const {
    error: n,
    formItemId: r,
    formDescriptionId: o,
    formMessageId: i,
  } = bu();
  return p.jsx(Gr, {
    ref: t,
    id: r,
    'aria-describedby': n ? `${o} ${i}` : `${o}`,
    'aria-invalid': !!n,
    ...e,
  });
});
sr.displayName = 'FormControl';
const y9 = d.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = bu();
  return p.jsx('p', {
    ref: n,
    id: r,
    className: fe('text-sm text-muted-foreground', e),
    ...t,
  });
});
y9.displayName = 'FormDescription';
const lr = d.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: i } = bu(),
    s = o ? String(o == null ? void 0 : o.message) : t;
  return s
    ? p.jsx('p', {
        ref: r,
        id: i,
        className: fe('text-sm font-medium text-destructive', e),
        ...n,
        children: s,
      })
    : null;
});
lr.displayName = 'FormMessage';
const La = d.forwardRef(({ className: e, type: t, ...n }, r) => {
  const [o, i] = d.useState(!1),
    s = () => {
      i(!o);
    };
  return p.jsxs('div', {
    className: 'relative flex items-center',
    children: [
      p.jsx('input', {
        type: o ? 'text' : t,
        className: fe(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          e,
        ),
        ref: r,
        ...n,
      }),
      t === 'password' &&
        p.jsx('button', {
          type: 'button',
          onClick: s,
          className:
            'absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 focus:outline-none h-full w-5 box-border',
          children: o
            ? p.jsxs('svg', {
                width: 'auto',
                height: 'auto',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                  p.jsx('path', {
                    d: 'M2 2L22 22',
                    stroke: '#000000',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }),
                  p.jsx('path', {
                    d: 'M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335',
                    stroke: '#000000',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }),
                  p.jsx('path', {
                    d: 'M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818',
                    stroke: '#000000',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }),
                ],
              })
            : p.jsxs('svg', {
                width: 'auto',
                height: 'auto',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                  p.jsx('path', {
                    d: 'M1 12C1 12 5 4 12 4C19 4 23 12 23 12',
                    stroke: '#000000',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }),
                  p.jsx('path', {
                    d: 'M1 12C1 12 5 20 12 20C19 20 23 12 23 12',
                    stroke: '#000000',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }),
                  p.jsx('circle', {
                    cx: '12',
                    cy: '12',
                    r: '3',
                    stroke: '#000000',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }),
                ],
              }),
        }),
    ],
  });
});
La.displayName = 'PasswordInput';
async function x9(e, { arg: t }) {
  const n = await fetch(e, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(t),
  });
  if (!n.ok) throw new Error('Failed to sign in');
  return n.json();
}
const w9 = () => {
    const e = ou({
        resolver: iu(PC),
        mode: 'onChange',
        defaultValues: { userEmail: '', password: '' },
      }),
      { setUser: t, setLinks: n } = at((a) => a),
      { trigger: r, isMutating: o } = Ds(Zr('auth/signin'), x9),
      i = async (a) => {
        const u = await fetch(Zr(`previewlinks/${a}`));
        if (u.ok) {
          const c = await u.json();
          n([...c.links.links]);
        } else n([]);
      };
    async function s(a) {
      try {
        const u = await r(a);
        await i(u._id),
          t({ ...u }),
          gr({ variant: 'default', description: 'Signed in successfully' });
      } catch (u) {
        u instanceof Error &&
          gr({
            variant: 'destructive',
            description:
              u.message || 'An error occurred, please try again later.',
          });
      }
    }
    const l = (a, u) =>
      p.jsx(Vr, {
        control: e.control,
        name: a,
        render: ({ field: c }) =>
          p.jsxs(or, {
            children: [
              p.jsx(ir, { children: u }),
              p.jsx(sr, {
                children:
                  a === 'password'
                    ? p.jsx(La, { placeholder: '****', type: 'password', ...c })
                    : p.jsx($s, {
                        type: a === 'userEmail' ? 'email' : 'text',
                        placeholder:
                          a === 'userEmail' ? 'example@example.com' : u,
                        ...c,
                      }),
              }),
              p.jsx('div', {
                className: 'max-w-60 md:max-w-full',
                children: p.jsx(lr, {}),
              }),
            ],
          }),
      });
    return p.jsx(Kp, {
      ...e,
      children: p.jsx('form', {
        onSubmit: e.handleSubmit(s),
        children: p.jsxs('div', {
          className: 'flex flex-col gap-6',
          children: [
            l('userEmail', 'Email'),
            l('password', 'Password'),
            p.jsx(wn, {
              className:
                'w-full bg-primary-900 hover:bg-primary-700 text-white',
              variant: 'secondary',
              type: 'submit',
              disabled: o,
              children: o ? p.jsx(Is, {}) : 'Submit',
            }),
          ],
        }),
      }),
    });
  },
  S9 = ({ password: e }) => {
    const t = qS(Na, e),
      n = {};
    t.success ||
      t.issues.forEach((o) => {
        n[o.expected] = o.expected;
      });
    const r = (o) => !n[o];
    return p.jsx('div', {
      className: 'flex flex-col gap-1',
      children: Na.pipe.map((o, i) =>
        o.message === void 0
          ? null
          : p.jsxs(
              'p',
              {
                className: `flex flex-row items-center text-sm ${r(o.expects) ? 'text-green-600' : 'text-red-600'}`,
                children: [
                  r(o.expects)
                    ? p.jsxs('svg', {
                        width: '25px',
                        height: '25px',
                        viewBox: '0 0 117 117',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          p.jsx('path', {
                            d: 'M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z',
                            fill: '#17AB13',
                          }),
                          p.jsx('path', {
                            d: 'M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z',
                            fill: '#4A4A4A',
                          }),
                        ],
                      })
                    : p.jsx('svg', {
                        width: '25px',
                        height: '25px',
                        viewBox: '0 -0.5 25 25',
                        fill: '#FF0000',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: p.jsx('path', {
                          d: 'M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z',
                          fill: '##FF0000',
                        }),
                      }),
                  o.message,
                ],
              },
              i,
            ),
      ),
    });
  };
async function C9(e, { arg: t }) {
  const n = await fetch(e, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(t),
  });
  if (!n.ok) throw new Error('Failed to sign up');
  return n.json();
}
const E9 = () => {
  const e = ou({
      resolver: iu(RC),
      mode: 'onChange',
      defaultValues: {
        firstName: '',
        lastName: '',
        userEmail: '',
        password: '',
        confirmPassword: '',
        gender: ka.male,
      },
    }),
    { setValue: t } = e,
    n = at((a) => a.setUser),
    { trigger: r, isMutating: o } = Ds(Zr('auth/signup'), C9);
  async function i(a) {
    try {
      const u = await r(a);
      n({ ...u }),
        gr({ variant: 'default', description: 'Signed up successfully' });
    } catch (u) {
      u instanceof Error &&
        gr({
          variant: 'destructive',
          description:
            u.message || 'An error occurred, please try again later.',
        });
    }
  }
  const s = ['firstName', 'lastName', 'userEmail'],
    l = (a) =>
      p.jsx(
        Vr,
        {
          control: e.control,
          name: a,
          render: ({ field: u }) =>
            p.jsxs(or, {
              children: [
                p.jsx(ir, { children: a.charAt(0).toUpperCase() + a.slice(1) }),
                p.jsx(sr, {
                  children: p.jsx($s, { placeholder: `Enter your ${a}`, ...u }),
                }),
                p.jsx('div', {
                  className: 'max-w-60 md:max-w-full',
                  children: p.jsx(lr, {}),
                }),
              ],
            }),
        },
        a,
      );
  return p.jsx(Kp, {
    ...e,
    children: p.jsxs('form', {
      onSubmit: e.handleSubmit(i),
      children: [
        p.jsxs('div', {
          className: 'flex flex-col gap-6',
          children: [
            s.map(l),
            p.jsx(Vr, {
              control: e.control,
              name: 'gender',
              render: ({ field: a }) =>
                p.jsxs(or, {
                  children: [
                    p.jsx(ir, { children: 'Gender' }),
                    p.jsx(sr, {
                      children: p.jsxs(Bp, {
                        value: a.value,
                        onValueChange: (u) => {
                          t('gender', ka[u]);
                        },
                        children: [
                          p.jsx(Cu, {
                            className: 'w-[180px]',
                            children: p.jsx(Wp, {
                              placeholder: 'Select Gender',
                            }),
                          }),
                          p.jsxs(Eu, {
                            children: [
                              p.jsx(Do, { value: 'male', children: 'Male' }),
                              p.jsx(Do, {
                                value: 'female',
                                children: 'Female',
                              }),
                              p.jsx(Do, { value: 'other', children: 'Other' }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    p.jsx('div', {
                      className: 'max-w-60 md:max-w-full',
                      children: p.jsx(lr, {}),
                    }),
                  ],
                }),
            }),
            p.jsx(Vr, {
              control: e.control,
              name: 'password',
              render: ({ field: a }) =>
                p.jsxs(or, {
                  children: [
                    p.jsx(ir, { children: 'Password' }),
                    p.jsx(sr, {
                      children: p.jsx(La, {
                        placeholder: '****',
                        type: 'password',
                        ...a,
                      }),
                    }),
                    p.jsx('div', {
                      className: 'max-w-60 md:max-w-full',
                      children: p.jsx(lr, {}),
                    }),
                  ],
                }),
            }),
            e.watch('password') &&
              e.formState.dirtyFields.password &&
              p.jsx('div', {
                className: 'max-w-60 md:max-w-full',
                children: p.jsx(S9, { password: e.getValues('password') }),
              }),
            p.jsx(Vr, {
              control: e.control,
              name: 'confirmPassword',
              render: ({ field: a }) =>
                p.jsxs(or, {
                  children: [
                    p.jsx(ir, { children: 'Confirm Password' }),
                    p.jsx(sr, {
                      children: p.jsx(La, {
                        placeholder: '****',
                        type: 'password',
                        ...a,
                      }),
                    }),
                    p.jsx('div', {
                      className: 'max-w-60 md:max-w-full',
                      children: p.jsx(lr, {}),
                    }),
                  ],
                }),
            }),
          ],
        }),
        p.jsx(wn, {
          className:
            'w-full mt-6 bg-primary-900 hover:bg-primary-700 text-white',
          variant: 'secondary',
          type: 'submit',
          disabled: o,
          children: o ? p.jsx(Is, {}) : 'Submit',
        }),
      ],
    }),
  });
};
function uf() {
  return (
    (uf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uf.apply(null, arguments)
  );
}
function W2(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function cf(e, t) {
  return (
    (cf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    cf(e, t)
  );
}
function Gp(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    cf(e, t);
}
function b9(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
        ' ' + t + ' ',
      ) !== -1;
}
function N9(e, t) {
  e.classList
    ? e.classList.add(t)
    : b9(e, t) ||
      (typeof e.className == 'string'
        ? (e.className = e.className + ' ' + t)
        : e.setAttribute(
            'class',
            ((e.className && e.className.baseVal) || '') + ' ' + t,
          ));
}
function Nv(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
function k9(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == 'string'
      ? (e.className = Nv(e.className, t))
      : e.setAttribute(
          'class',
          Nv((e.className && e.className.baseVal) || '', t),
        );
}
const kv = { disabled: !1 },
  Zp = I.createContext(null);
var H2 = function (t) {
    return t.scrollTop;
  },
  Ai = 'unmounted',
  Dr = 'exited',
  Vt = 'entering',
  vn = 'entered',
  Cs = 'exiting',
  $n = (function (e) {
    Gp(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        l = s && !s.isMounting ? r.enter : r.appear,
        a;
      return (
        (i.appearStatus = null),
        r.in
          ? l
            ? ((a = Dr), (i.appearStatus = Vt))
            : (a = vn)
          : r.unmountOnExit || r.mountOnEnter
            ? (a = Ai)
            : (a = Dr),
        (i.state = { status: a }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === Ai ? { status: Dr } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== Vt && s !== vn && (i = Vt)
            : (s === Vt || s === vn) && (i = Cs);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          l;
        return (
          (i = s = l = o),
          o != null &&
            typeof o != 'number' &&
            ((i = o.exit),
            (s = o.enter),
            (l = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: l }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === Vt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : So.findDOMNode(this);
              s && H2(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Dr &&
            this.setState({ status: Ai });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          l = this.context ? this.context.isMounting : o,
          a = this.props.nodeRef ? [l] : [So.findDOMNode(this), l],
          u = a[0],
          c = a[1],
          f = this.getTimeouts(),
          m = l ? f.appear : f.enter;
        if ((!o && !s) || kv.disabled) {
          this.safeSetState({ status: vn }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: Vt }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(m, function () {
                i.safeSetState({ status: vn }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          l = this.props.nodeRef ? void 0 : So.findDOMNode(this);
        if (!i || kv.disabled) {
          this.safeSetState({ status: Dr }, function () {
            o.props.onExited(l);
          });
          return;
        }
        this.props.onExit(l),
          this.safeSetState({ status: Cs }, function () {
            o.props.onExiting(l),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: Dr }, function () {
                  o.props.onExited(l);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (l) {
            s && ((s = !1), (i.nextCallback = null), o(l));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : So.findDOMNode(this),
          l = o == null && !this.props.addEndListener;
        if (!s || l) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var a = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = a[0],
            c = a[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === Ai) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var l = W2(i, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return I.createElement(
          Zp.Provider,
          { value: null },
          typeof s == 'function'
            ? s(o, l)
            : I.cloneElement(I.Children.only(s), l),
        );
      }),
      t
    );
  })(I.Component);
$n.contextType = Zp;
$n.propTypes = {};
function lo() {}
$n.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: lo,
  onEntering: lo,
  onEntered: lo,
  onExit: lo,
  onExiting: lo,
  onExited: lo,
};
$n.UNMOUNTED = Ai;
$n.EXITED = Dr;
$n.ENTERING = Vt;
$n.ENTERED = vn;
$n.EXITING = Cs;
var R9 = function (t, n) {
    return (
      t &&
      n &&
      n.split(' ').forEach(function (r) {
        return N9(t, r);
      })
    );
  },
  Fc = function (t, n) {
    return (
      t &&
      n &&
      n.split(' ').forEach(function (r) {
        return k9(t, r);
      })
    );
  },
  Yp = (function (e) {
    Gp(t, e);
    function t() {
      for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
        i[s] = arguments[s];
      return (
        (r = e.call.apply(e, [this].concat(i)) || this),
        (r.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (r.onEnter = function (l, a) {
          var u = r.resolveArguments(l, a),
            c = u[0],
            f = u[1];
          r.removeClasses(c, 'exit'),
            r.addClass(c, f ? 'appear' : 'enter', 'base'),
            r.props.onEnter && r.props.onEnter(l, a);
        }),
        (r.onEntering = function (l, a) {
          var u = r.resolveArguments(l, a),
            c = u[0],
            f = u[1],
            m = f ? 'appear' : 'enter';
          r.addClass(c, m, 'active'),
            r.props.onEntering && r.props.onEntering(l, a);
        }),
        (r.onEntered = function (l, a) {
          var u = r.resolveArguments(l, a),
            c = u[0],
            f = u[1],
            m = f ? 'appear' : 'enter';
          r.removeClasses(c, m),
            r.addClass(c, m, 'done'),
            r.props.onEntered && r.props.onEntered(l, a);
        }),
        (r.onExit = function (l) {
          var a = r.resolveArguments(l),
            u = a[0];
          r.removeClasses(u, 'appear'),
            r.removeClasses(u, 'enter'),
            r.addClass(u, 'exit', 'base'),
            r.props.onExit && r.props.onExit(l);
        }),
        (r.onExiting = function (l) {
          var a = r.resolveArguments(l),
            u = a[0];
          r.addClass(u, 'exit', 'active'),
            r.props.onExiting && r.props.onExiting(l);
        }),
        (r.onExited = function (l) {
          var a = r.resolveArguments(l),
            u = a[0];
          r.removeClasses(u, 'exit'),
            r.addClass(u, 'exit', 'done'),
            r.props.onExited && r.props.onExited(l);
        }),
        (r.resolveArguments = function (l, a) {
          return r.props.nodeRef ? [r.props.nodeRef.current, l] : [l, a];
        }),
        (r.getClassNames = function (l) {
          var a = r.props.classNames,
            u = typeof a == 'string',
            c = u && a ? a + '-' : '',
            f = u ? '' + c + l : a[l],
            m = u ? f + '-active' : a[l + 'Active'],
            y = u ? f + '-done' : a[l + 'Done'];
          return { baseClassName: f, activeClassName: m, doneClassName: y };
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.addClass = function (o, i, s) {
        var l = this.getClassNames(i)[s + 'ClassName'],
          a = this.getClassNames('enter'),
          u = a.doneClassName;
        i === 'appear' && s === 'done' && u && (l += ' ' + u),
          s === 'active' && o && H2(o),
          l && ((this.appliedClasses[i][s] = l), R9(o, l));
      }),
      (n.removeClasses = function (o, i) {
        var s = this.appliedClasses[i],
          l = s.base,
          a = s.active,
          u = s.done;
        (this.appliedClasses[i] = {}),
          l && Fc(o, l),
          a && Fc(o, a),
          u && Fc(o, u);
      }),
      (n.render = function () {
        var o = this.props;
        o.classNames;
        var i = W2(o, ['classNames']);
        return I.createElement(
          $n,
          uf({}, i, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      t
    );
  })(I.Component);
Yp.defaultProps = { classNames: '' };
Yp.propTypes = {};
var xl, wl;
function T9(e, t) {
  return !(
    e === t ||
    (I.isValidElement(e) &&
      I.isValidElement(t) &&
      e.key != null &&
      e.key === t.key)
  );
}
var Go = { out: 'out-in', in: 'in-out' },
  Fa = function (t, n, r) {
    return function () {
      var o;
      t.props[n] && (o = t.props)[n].apply(o, arguments), r();
    };
  },
  P9 =
    ((xl = {}),
    (xl[Go.out] = function (e) {
      var t = e.current,
        n = e.changeState;
      return I.cloneElement(t, {
        in: !1,
        onExited: Fa(t, 'onExited', function () {
          n(Vt, null);
        }),
      });
    }),
    (xl[Go.in] = function (e) {
      var t = e.current,
        n = e.changeState,
        r = e.children;
      return [
        t,
        I.cloneElement(r, {
          in: !0,
          onEntered: Fa(r, 'onEntered', function () {
            n(Vt);
          }),
        }),
      ];
    }),
    xl),
  _9 =
    ((wl = {}),
    (wl[Go.out] = function (e) {
      var t = e.children,
        n = e.changeState;
      return I.cloneElement(t, {
        in: !0,
        onEntered: Fa(t, 'onEntered', function () {
          n(vn, I.cloneElement(t, { in: !0 }));
        }),
      });
    }),
    (wl[Go.in] = function (e) {
      var t = e.current,
        n = e.children,
        r = e.changeState;
      return [
        I.cloneElement(t, {
          in: !1,
          onExited: Fa(t, 'onExited', function () {
            r(vn, I.cloneElement(n, { in: !0 }));
          }),
        }),
        I.cloneElement(n, { in: !0 }),
      ];
    }),
    wl),
  Xp = (function (e) {
    Gp(t, e);
    function t() {
      for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
        i[s] = arguments[s];
      return (
        (r = e.call.apply(e, [this].concat(i)) || this),
        (r.state = { status: vn, current: null }),
        (r.appeared = !1),
        (r.changeState = function (l, a) {
          a === void 0 && (a = r.state.current),
            r.setState({ status: l, current: a });
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.appeared = !0;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        return o.children == null
          ? { current: null }
          : i.status === Vt && o.mode === Go.in
            ? { status: Vt }
            : i.current && T9(i.current, o.children)
              ? { status: Cs }
              : { current: I.cloneElement(o.children, { in: !0 }) };
      }),
      (n.render = function () {
        var o = this.props,
          i = o.children,
          s = o.mode,
          l = this.state,
          a = l.status,
          u = l.current,
          c = {
            children: i,
            current: u,
            changeState: this.changeState,
            status: a,
          },
          f;
        switch (a) {
          case Vt:
            f = _9[s](c);
            break;
          case Cs:
            f = P9[s](c);
            break;
          case vn:
            f = u;
        }
        return I.createElement(
          Zp.Provider,
          { value: { isMounting: !this.appeared } },
          f,
        );
      }),
      t
    );
  })(I.Component);
Xp.propTypes = {};
Xp.defaultProps = { mode: Go.out };
const K2 = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx('div', {
    ref: n,
    className: fe(
      'rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
      e,
    ),
    ...t,
  }),
);
K2.displayName = 'Card';
const M9 = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx('div', {
    ref: n,
    className: fe('flex flex-col space-y-1.5 p-6', e),
    ...t,
  }),
);
M9.displayName = 'CardHeader';
const j9 = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx('h3', {
    ref: n,
    className: fe('text-2xl font-semibold leading-none tracking-tight', e),
    ...t,
  }),
);
j9.displayName = 'CardTitle';
const A9 = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx('p', {
    ref: n,
    className: fe('text-sm text-slate-500 dark:text-slate-400', e),
    ...t,
  }),
);
A9.displayName = 'CardDescription';
const G2 = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx('div', { ref: n, className: fe('p-6 pt-0', e), ...t }),
);
G2.displayName = 'CardContent';
const O9 = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx('div', {
    ref: n,
    className: fe('flex items-center p-6 pt-0', e),
    ...t,
  }),
);
O9.displayName = 'CardFooter';
const D9 = () => {
    const [e, t] = d.useState(!0);
    return p.jsx('div', {
      className:
        'bg-white md:bg-gradient-to-br md:from-primary-500 md:to-primary-900',
      children: p.jsx('div', {
        className: 'container mx-auto flex justify-between items-center',
        children: p.jsxs('div', {
          className:
            'w-full pt-10 md:pt-0 md:h-screen flex flex-col md:flex-row items-center justify-center mx-auto',
          children: [
            p.jsx('div', {
              className: 'md:w-1/2',
              children: p.jsx('h1', {
                className:
                  'text-primary-900 mt-12 md:mt-0 md:text-white text-center text-2xl md:text-5xl font-bold',
                children: 'Welcome to DevLinks',
              }),
            }),
            p.jsxs('p', {
              className:
                'fixed top-0 left-1/2 transform -translate-x-1/2 bg-primary-500  text-white mx-auto text-center  text-sm w-full md:w-2/4 p-2 rounded-lg  m-3',
              children: [
                p.jsx('span', { className: 'block', children: 'Test Account' }),
                p.jsx('span', {
                  className: 'block',
                  children: 'Email: admin@example.com',
                }),
                p.jsx('span', {
                  className: 'block',
                  children: 'Password: Password123@',
                }),
              ],
            }),
            p.jsx(K2, {
              className:
                'md:w-1/2 p-8 bg-white shadow-none border-none md:border md:shadow-md',
              children: p.jsxs(G2, {
                className: 'w-full',
                children: [
                  p.jsxs('div', {
                    className: 'flex justify-around mb-6',
                    children: [
                      p.jsx(wn, {
                        variant: e ? 'default' : 'ghost',
                        onClick: () => t(!0),
                        className: `text-lg font-semibold pb-2 ${e ? 'text-primary-900 border-b-2 border-primary-900' : 'text-gray-400'}`,
                        children: 'Sign In',
                      }),
                      p.jsx(wn, {
                        variant: e ? 'ghost' : 'default',
                        onClick: () => t(!1),
                        className: `text-lg font-semibold pb-2 ${e ? 'text-gray-400' : 'text-primary-900 border-b-2 border-primary-900'}`,
                        children: 'Sign Up',
                      }),
                    ],
                  }),
                  p.jsx('div', {
                    className: 'h-auto md:h-[60vh] md:overflow-y-auto px-2',
                    children: p.jsx(Xp, {
                      children: p.jsx(
                        Yp,
                        {
                          timeout: 300,
                          classNames: 'fade-slide',
                          children: p.jsx('div', {
                            className: 'w-full',
                            children: e ? p.jsx(w9, {}) : p.jsx(E9, {}),
                          }),
                        },
                        e ? 'signIn' : 'signUp',
                      ),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  Vc = ({ children: e }) => {
    const t = at((n) => n.user);
    return p.jsxs('div', {
      className: 'w-full h-full flex gap-10',
      children: [
        !(t != null && t.token) &&
          p.jsx('div', {
            className: 'fixed top-0 left-0 h-full w-full z-50',
            children: p.jsx(D9, {}),
          }),
        (t == null ? void 0 : t.token) &&
          p.jsxs('div', {
            className: 'w-full h-full flex gap-10',
            children: [
              p.jsx('div', {
                className:
                  'hidden lg:block lg:w-1/2 xl:w-2/5 bg-white p-20 rounded-lg sticky top-0 h-screen overflow-y-auto',
                children: p.jsx(g9, {}),
              }),
              p.jsx('div', {
                className:
                  'w-full lg:w-1/2 xl:w-3/5 bg-white p-2 2xl:p-10 rounded-lg overflow-y-scroll',
                children: e,
              }),
            ],
          }),
      ],
    });
  };
function I9(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var ai = (e) => {
  const { present: t, children: n } = e,
    r = L9(t),
    o =
      typeof n == 'function' ? n({ present: r.isPresent }) : d.Children.only(n),
    i = Te(r.ref, F9(o));
  return typeof n == 'function' || r.isPresent
    ? d.cloneElement(o, { ref: i })
    : null;
};
ai.displayName = 'Presence';
function L9(e) {
  const [t, n] = d.useState(),
    r = d.useRef({}),
    o = d.useRef(e),
    i = d.useRef('none'),
    s = e ? 'mounted' : 'unmounted',
    [l, a] = I9(s, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    d.useEffect(() => {
      const u = Sl(r.current);
      i.current = l === 'mounted' ? u : 'none';
    }, [l]),
    Ge(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const m = i.current,
          y = Sl(u);
        e
          ? a('MOUNT')
          : y === 'none' || (u == null ? void 0 : u.display) === 'none'
            ? a('UNMOUNT')
            : a(c && m !== y ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e);
      }
    }, [e, a]),
    Ge(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          f = (y) => {
            const v = Sl(r.current).includes(y.animationName);
            if (y.target === t && v && (a('ANIMATION_END'), !o.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = 'forwards'),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === 'forwards' &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          m = (y) => {
            y.target === t && (i.current = Sl(r.current));
          };
        return (
          t.addEventListener('animationstart', m),
          t.addEventListener('animationcancel', f),
          t.addEventListener('animationend', f),
          () => {
            c.clearTimeout(u),
              t.removeEventListener('animationstart', m),
              t.removeEventListener('animationcancel', f),
              t.removeEventListener('animationend', f);
          }
        );
      } else a('ANIMATION_END');
    }, [t, a]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(l),
      ref: d.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Sl(e) {
  return (e == null ? void 0 : e.animationName) || 'none';
}
function F9(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null
        ? void 0
        : r.get,
    n = t && 'isReactWarning' in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null
          ? void 0
          : o.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var ui = 'NavigationMenu',
  [Qp, Z2, V9] = fu(ui),
  [df, z9, $9] = fu(ui),
  [qp, UN] = Mp(ui, [V9, $9]),
  [U9, Ht] = qp(ui),
  [B9, W9] = qp(ui),
  Y2 = d.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        onValueChange: o,
        defaultValue: i,
        delayDuration: s = 200,
        skipDelayDuration: l = 300,
        orientation: a = 'horizontal',
        dir: u,
        ...c
      } = e,
      [f, m] = d.useState(null),
      y = Te(t, (_) => m(_)),
      S = yy(u),
      v = d.useRef(0),
      w = d.useRef(0),
      g = d.useRef(0),
      [h, x] = d.useState(!0),
      [E = '', C] = Ss({
        prop: r,
        onChange: (_) => {
          const j = _ !== '',
            F = l > 0;
          j
            ? (window.clearTimeout(g.current), F && x(!1))
            : (window.clearTimeout(g.current),
              (g.current = window.setTimeout(() => x(!0), l))),
            o == null || o(_);
        },
        defaultProp: i,
      }),
      b = d.useCallback(() => {
        window.clearTimeout(w.current),
          (w.current = window.setTimeout(() => C(''), 150));
      }, [C]),
      N = d.useCallback(
        (_) => {
          window.clearTimeout(w.current), C(_);
        },
        [C],
      ),
      R = d.useCallback(
        (_) => {
          E === _
            ? window.clearTimeout(w.current)
            : (v.current = window.setTimeout(() => {
                window.clearTimeout(w.current), C(_);
              }, s));
        },
        [E, C, s],
      );
    return (
      d.useEffect(
        () => () => {
          window.clearTimeout(v.current),
            window.clearTimeout(w.current),
            window.clearTimeout(g.current);
        },
        [],
      ),
      p.jsx(Q2, {
        scope: n,
        isRootMenu: !0,
        value: E,
        dir: S,
        orientation: a,
        rootNavigationMenu: f,
        onTriggerEnter: (_) => {
          window.clearTimeout(v.current), h ? R(_) : N(_);
        },
        onTriggerLeave: () => {
          window.clearTimeout(v.current), b();
        },
        onContentEnter: () => window.clearTimeout(w.current),
        onContentLeave: b,
        onItemSelect: (_) => {
          C((j) => (j === _ ? '' : _));
        },
        onItemDismiss: () => C(''),
        children: p.jsx(ae.nav, {
          'aria-label': 'Main',
          'data-orientation': a,
          dir: S,
          ...c,
          ref: y,
        }),
      })
    );
  });
Y2.displayName = ui;
var X2 = 'NavigationMenuSub',
  H9 = d.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        onValueChange: o,
        defaultValue: i,
        orientation: s = 'horizontal',
        ...l
      } = e,
      a = Ht(X2, n),
      [u = '', c] = Ss({ prop: r, onChange: o, defaultProp: i });
    return p.jsx(Q2, {
      scope: n,
      isRootMenu: !1,
      value: u,
      dir: a.dir,
      orientation: s,
      rootNavigationMenu: a.rootNavigationMenu,
      onTriggerEnter: (f) => c(f),
      onItemSelect: (f) => c(f),
      onItemDismiss: () => c(''),
      children: p.jsx(ae.div, { 'data-orientation': s, ...l, ref: t }),
    });
  });
H9.displayName = X2;
var Q2 = (e) => {
    const {
        scope: t,
        isRootMenu: n,
        rootNavigationMenu: r,
        dir: o,
        orientation: i,
        children: s,
        value: l,
        onItemSelect: a,
        onItemDismiss: u,
        onTriggerEnter: c,
        onTriggerLeave: f,
        onContentEnter: m,
        onContentLeave: y,
      } = e,
      [S, v] = d.useState(null),
      [w, g] = d.useState(new Map()),
      [h, x] = d.useState(null);
    return p.jsx(U9, {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: l,
      previousValue: By(l),
      baseId: Ls(),
      dir: o,
      orientation: i,
      viewport: S,
      onViewportChange: v,
      indicatorTrack: h,
      onIndicatorTrackChange: x,
      onTriggerEnter: Ve(c),
      onTriggerLeave: Ve(f),
      onContentEnter: Ve(m),
      onContentLeave: Ve(y),
      onItemSelect: Ve(a),
      onItemDismiss: Ve(u),
      onViewportContentChange: d.useCallback((E, C) => {
        g((b) => (b.set(E, C), new Map(b)));
      }, []),
      onViewportContentRemove: d.useCallback((E) => {
        g((C) => (C.has(E) ? (C.delete(E), new Map(C)) : C));
      }, []),
      children: p.jsx(Qp.Provider, {
        scope: t,
        children: p.jsx(B9, { scope: t, items: w, children: s }),
      }),
    });
  },
  q2 = 'NavigationMenuList',
  J2 = d.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = Ht(q2, n),
      i = p.jsx(ae.ul, { 'data-orientation': o.orientation, ...r, ref: t });
    return p.jsx(ae.div, {
      style: { position: 'relative' },
      ref: o.onIndicatorTrackChange,
      children: p.jsx(Qp.Slot, {
        scope: n,
        children: o.isRootMenu ? p.jsx(ax, { asChild: !0, children: i }) : i,
      }),
    });
  });
J2.displayName = q2;
var ex = 'NavigationMenuItem',
  [K9, tx] = qp(ex),
  nx = d.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e,
      i = Ls(),
      s = r || i || 'LEGACY_REACT_AUTO_VALUE',
      l = d.useRef(null),
      a = d.useRef(null),
      u = d.useRef(null),
      c = d.useRef(() => {}),
      f = d.useRef(!1),
      m = d.useCallback((S = 'start') => {
        if (l.current) {
          c.current();
          const v = pf(l.current);
          v.length && th(S === 'start' ? v : v.reverse());
        }
      }, []),
      y = d.useCallback(() => {
        if (l.current) {
          const S = pf(l.current);
          S.length && (c.current = eN(S));
        }
      }, []);
    return p.jsx(K9, {
      scope: n,
      value: s,
      triggerRef: a,
      contentRef: l,
      focusProxyRef: u,
      wasEscapeCloseRef: f,
      onEntryKeyDown: m,
      onFocusProxyEnter: m,
      onRootContentClose: y,
      onContentFocusOutside: y,
      children: p.jsx(ae.li, { ...o, ref: t }),
    });
  });
nx.displayName = ex;
var ff = 'NavigationMenuTrigger',
  rx = d.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, disabled: r, ...o } = e,
      i = Ht(ff, e.__scopeNavigationMenu),
      s = tx(ff, e.__scopeNavigationMenu),
      l = d.useRef(null),
      a = Te(l, s.triggerRef, t),
      u = cx(i.baseId, s.value),
      c = dx(i.baseId, s.value),
      f = d.useRef(!1),
      m = d.useRef(!1),
      y = s.value === i.value;
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx(Qp.ItemSlot, {
          scope: n,
          value: s.value,
          children: p.jsx(ux, {
            asChild: !0,
            children: p.jsx(ae.button, {
              id: u,
              disabled: r,
              'data-disabled': r ? '' : void 0,
              'data-state': nh(y),
              'aria-expanded': y,
              'aria-controls': c,
              ...o,
              ref: a,
              onPointerEnter: ne(e.onPointerEnter, () => {
                (m.current = !1), (s.wasEscapeCloseRef.current = !1);
              }),
              onPointerMove: ne(
                e.onPointerMove,
                Va(() => {
                  r ||
                    m.current ||
                    s.wasEscapeCloseRef.current ||
                    f.current ||
                    (i.onTriggerEnter(s.value), (f.current = !0));
                }),
              ),
              onPointerLeave: ne(
                e.onPointerLeave,
                Va(() => {
                  r || (i.onTriggerLeave(), (f.current = !1));
                }),
              ),
              onClick: ne(e.onClick, () => {
                i.onItemSelect(s.value), (m.current = y);
              }),
              onKeyDown: ne(e.onKeyDown, (S) => {
                const w = {
                  horizontal: 'ArrowDown',
                  vertical: i.dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight',
                }[i.orientation];
                y && S.key === w && (s.onEntryKeyDown(), S.preventDefault());
              }),
            }),
          }),
        }),
        y &&
          p.jsxs(p.Fragment, {
            children: [
              p.jsx(y8, {
                'aria-hidden': !0,
                tabIndex: 0,
                ref: s.focusProxyRef,
                onFocus: (S) => {
                  const v = s.contentRef.current,
                    w = S.relatedTarget,
                    g = w === l.current,
                    h = v == null ? void 0 : v.contains(w);
                  (g || !h) && s.onFocusProxyEnter(g ? 'start' : 'end');
                },
              }),
              i.viewport && p.jsx('span', { 'aria-owns': c }),
            ],
          }),
      ],
    });
  });
rx.displayName = ff;
var G9 = 'NavigationMenuLink',
  Rv = 'navigationMenu.linkSelect',
  Z9 = d.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...i } = e;
    return p.jsx(ux, {
      asChild: !0,
      children: p.jsx(ae.a, {
        'data-active': r ? '' : void 0,
        'aria-current': r ? 'page' : void 0,
        ...i,
        ref: t,
        onClick: ne(
          e.onClick,
          (s) => {
            const l = s.target,
              a = new CustomEvent(Rv, { bubbles: !0, cancelable: !0 });
            if (
              (l.addEventListener(Rv, (u) => (o == null ? void 0 : o(u)), {
                once: !0,
              }),
              Ra(l, a),
              !a.defaultPrevented && !s.metaKey)
            ) {
              const u = new CustomEvent(Ul, { bubbles: !0, cancelable: !0 });
              Ra(l, u);
            }
          },
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
Z9.displayName = G9;
var Jp = 'NavigationMenuIndicator',
  ox = d.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Ht(Jp, e.__scopeNavigationMenu),
      i = !!o.value;
    return o.indicatorTrack
      ? So.createPortal(
          p.jsx(ai, { present: n || i, children: p.jsx(Y9, { ...r, ref: t }) }),
          o.indicatorTrack,
        )
      : null;
  });
ox.displayName = Jp;
var Y9 = d.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = Ht(Jp, n),
      i = Z2(n),
      [s, l] = d.useState(null),
      [a, u] = d.useState(null),
      c = o.orientation === 'horizontal',
      f = !!o.value;
    d.useEffect(() => {
      var v;
      const S =
        (v = i().find((w) => w.value === o.value)) == null
          ? void 0
          : v.ref.current;
      S && l(S);
    }, [i, o.value]);
    const m = () => {
      s &&
        u({
          size: c ? s.offsetWidth : s.offsetHeight,
          offset: c ? s.offsetLeft : s.offsetTop,
        });
    };
    return (
      hf(s, m),
      hf(o.indicatorTrack, m),
      a
        ? p.jsx(ae.div, {
            'aria-hidden': !0,
            'data-state': f ? 'visible' : 'hidden',
            'data-orientation': o.orientation,
            ...r,
            ref: t,
            style: {
              position: 'absolute',
              ...(c
                ? {
                    left: 0,
                    width: a.size + 'px',
                    transform: `translateX(${a.offset}px)`,
                  }
                : {
                    top: 0,
                    height: a.size + 'px',
                    transform: `translateY(${a.offset}px)`,
                  }),
              ...r.style,
            },
          })
        : null
    );
  }),
  Zo = 'NavigationMenuContent',
  ix = d.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Ht(Zo, e.__scopeNavigationMenu),
      i = tx(Zo, e.__scopeNavigationMenu),
      s = Te(i.contentRef, t),
      l = i.value === o.value,
      a = {
        value: i.value,
        triggerRef: i.triggerRef,
        focusProxyRef: i.focusProxyRef,
        wasEscapeCloseRef: i.wasEscapeCloseRef,
        onContentFocusOutside: i.onContentFocusOutside,
        onRootContentClose: i.onRootContentClose,
        ...r,
      };
    return o.viewport
      ? p.jsx(X9, { forceMount: n, ...a, ref: s })
      : p.jsx(ai, {
          present: n || l,
          children: p.jsx(sx, {
            'data-state': nh(l),
            ...a,
            ref: s,
            onPointerEnter: ne(e.onPointerEnter, o.onContentEnter),
            onPointerLeave: ne(e.onPointerLeave, Va(o.onContentLeave)),
            style: {
              pointerEvents: !l && o.isRootMenu ? 'none' : void 0,
              ...a.style,
            },
          }),
        });
  });
ix.displayName = Zo;
var X9 = d.forwardRef((e, t) => {
    const n = Ht(Zo, e.__scopeNavigationMenu),
      { onViewportContentChange: r, onViewportContentRemove: o } = n;
    return (
      Ge(() => {
        r(e.value, { ref: t, ...e });
      }, [e, t, r]),
      Ge(() => () => o(e.value), [e.value, o]),
      null
    );
  }),
  Ul = 'navigationMenu.rootContentDismiss',
  sx = d.forwardRef((e, t) => {
    const {
        __scopeNavigationMenu: n,
        value: r,
        triggerRef: o,
        focusProxyRef: i,
        wasEscapeCloseRef: s,
        onRootContentClose: l,
        onContentFocusOutside: a,
        ...u
      } = e,
      c = Ht(Zo, n),
      f = d.useRef(null),
      m = Te(f, t),
      y = cx(c.baseId, r),
      S = dx(c.baseId, r),
      v = Z2(n),
      w = d.useRef(null),
      { onItemDismiss: g } = c;
    d.useEffect(() => {
      const x = f.current;
      if (c.isRootMenu && x) {
        const E = () => {
          var C;
          g(),
            l(),
            x.contains(document.activeElement) &&
              ((C = o.current) == null || C.focus());
        };
        return x.addEventListener(Ul, E), () => x.removeEventListener(Ul, E);
      }
    }, [c.isRootMenu, e.value, o, g, l]);
    const h = d.useMemo(() => {
      const E = v().map((j) => j.value);
      c.dir === 'rtl' && E.reverse();
      const C = E.indexOf(c.value),
        b = E.indexOf(c.previousValue),
        N = r === c.value,
        R = b === E.indexOf(r);
      if (!N && !R) return w.current;
      const _ = (() => {
        if (C !== b) {
          if (N && b !== -1) return C > b ? 'from-end' : 'from-start';
          if (R && C !== -1) return C > b ? 'to-start' : 'to-end';
        }
        return null;
      })();
      return (w.current = _), _;
    }, [c.previousValue, c.value, c.dir, v, r]);
    return p.jsx(ax, {
      asChild: !0,
      children: p.jsx(pu, {
        id: S,
        'aria-labelledby': y,
        'data-motion': h,
        'data-orientation': c.orientation,
        ...u,
        ref: m,
        disableOutsidePointerEvents: !1,
        onDismiss: () => {
          var E;
          const x = new Event(Ul, { bubbles: !0, cancelable: !0 });
          (E = f.current) == null || E.dispatchEvent(x);
        },
        onFocusOutside: ne(e.onFocusOutside, (x) => {
          var C;
          a();
          const E = x.target;
          (C = c.rootNavigationMenu) != null &&
            C.contains(E) &&
            x.preventDefault();
        }),
        onPointerDownOutside: ne(e.onPointerDownOutside, (x) => {
          var N;
          const E = x.target,
            C = v().some((R) => {
              var _;
              return (_ = R.ref.current) == null ? void 0 : _.contains(E);
            }),
            b =
              c.isRootMenu &&
              ((N = c.viewport) == null ? void 0 : N.contains(E));
          (C || b || !c.isRootMenu) && x.preventDefault();
        }),
        onKeyDown: ne(e.onKeyDown, (x) => {
          var b;
          const E = x.altKey || x.ctrlKey || x.metaKey;
          if (x.key === 'Tab' && !E) {
            const N = pf(x.currentTarget),
              R = document.activeElement,
              _ = N.findIndex((A) => A === R),
              F = x.shiftKey
                ? N.slice(0, _).reverse()
                : N.slice(_ + 1, N.length);
            th(F) ? x.preventDefault() : (b = i.current) == null || b.focus();
          }
        }),
        onEscapeKeyDown: ne(e.onEscapeKeyDown, (x) => {
          s.current = !0;
        }),
      }),
    });
  }),
  eh = 'NavigationMenuViewport',
  lx = d.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      i = !!Ht(eh, e.__scopeNavigationMenu).value;
    return p.jsx(ai, {
      present: n || i,
      children: p.jsx(Q9, { ...r, ref: t }),
    });
  });
lx.displayName = eh;
var Q9 = d.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, children: r, ...o } = e,
      i = Ht(eh, n),
      s = Te(t, i.onViewportChange),
      l = W9(Zo, e.__scopeNavigationMenu),
      [a, u] = d.useState(null),
      [c, f] = d.useState(null),
      m = a ? (a == null ? void 0 : a.width) + 'px' : void 0,
      y = a ? (a == null ? void 0 : a.height) + 'px' : void 0,
      S = !!i.value,
      v = S ? i.value : i.previousValue;
    return (
      hf(c, () => {
        c && u({ width: c.offsetWidth, height: c.offsetHeight });
      }),
      p.jsx(ae.div, {
        'data-state': nh(S),
        'data-orientation': i.orientation,
        ...o,
        ref: s,
        style: {
          pointerEvents: !S && i.isRootMenu ? 'none' : void 0,
          '--radix-navigation-menu-viewport-width': m,
          '--radix-navigation-menu-viewport-height': y,
          ...o.style,
        },
        onPointerEnter: ne(e.onPointerEnter, i.onContentEnter),
        onPointerLeave: ne(e.onPointerLeave, Va(i.onContentLeave)),
        children: Array.from(l.items).map(
          ([g, { ref: h, forceMount: x, ...E }]) => {
            const C = v === g;
            return p.jsx(
              ai,
              {
                present: x || C,
                children: p.jsx(sx, {
                  ...E,
                  ref: yp(h, (b) => {
                    C && b && f(b);
                  }),
                }),
              },
              g,
            );
          },
        ),
      })
    );
  }),
  q9 = 'FocusGroup',
  ax = d.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = Ht(q9, n);
    return p.jsx(df.Provider, {
      scope: n,
      children: p.jsx(df.Slot, {
        scope: n,
        children: p.jsx(ae.div, { dir: o.dir, ...r, ref: t }),
      }),
    });
  }),
  Tv = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'],
  J9 = 'FocusGroupItem',
  ux = d.forwardRef((e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e,
      o = z9(n),
      i = Ht(J9, n);
    return p.jsx(df.ItemSlot, {
      scope: n,
      children: p.jsx(ae.button, {
        ...r,
        ref: t,
        onKeyDown: ne(e.onKeyDown, (s) => {
          if (['Home', 'End', ...Tv].includes(s.key)) {
            let a = o().map((f) => f.ref.current);
            if (
              ([
                i.dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft',
                'ArrowUp',
                'End',
              ].includes(s.key) && a.reverse(),
              Tv.includes(s.key))
            ) {
              const f = a.indexOf(s.currentTarget);
              a = a.slice(f + 1);
            }
            setTimeout(() => th(a)), s.preventDefault();
          }
        }),
      }),
    });
  });
function pf(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function th(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
function eN(e) {
  return (
    e.forEach((t) => {
      (t.dataset.tabindex = t.getAttribute('tabindex') || ''),
        t.setAttribute('tabindex', '-1');
    }),
    () => {
      e.forEach((t) => {
        const n = t.dataset.tabindex;
        t.setAttribute('tabindex', n);
      });
    }
  );
}
function hf(e, t) {
  const n = Ve(t);
  Ge(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
function nh(e) {
  return e ? 'open' : 'closed';
}
function cx(e, t) {
  return `${e}-trigger-${t}`;
}
function dx(e, t) {
  return `${e}-content-${t}`;
}
function Va(e) {
  return (t) => (t.pointerType === 'mouse' ? e(t) : void 0);
}
var fx = Y2,
  px = J2,
  tN = nx,
  hx = rx,
  mx = ox,
  vx = ix,
  gx = lx;
const yx = d.forwardRef(({ className: e, children: t, ...n }, r) =>
  p.jsxs(fx, {
    ref: r,
    className: fe(
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
      e,
    ),
    ...n,
    children: [t, p.jsx(wx, {})],
  }),
);
yx.displayName = fx.displayName;
const xx = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(px, {
    ref: n,
    className: fe(
      'group flex flex-1 list-none items-center justify-center space-x-1',
      e,
    ),
    ...t,
  }),
);
xx.displayName = px.displayName;
const Pv = tN,
  nN = su(
    'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
  ),
  rN = d.forwardRef(({ className: e, children: t, ...n }, r) =>
    p.jsxs(hx, {
      ref: r,
      className: fe(nN(), 'group', e),
      ...n,
      children: [
        t,
        ' ',
        p.jsx(Up, {
          className:
            'relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180',
          'aria-hidden': 'true',
        }),
      ],
    }),
  );
rN.displayName = hx.displayName;
const oN = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(vx, {
    ref: n,
    className: fe(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
      e,
    ),
    ...t,
  }),
);
oN.displayName = vx.displayName;
const wx = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx('div', {
    className: fe('absolute left-0 top-full flex justify-center'),
    children: p.jsx(gx, {
      className: fe(
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
        e,
      ),
      ref: n,
      ...t,
    }),
  }),
);
wx.displayName = gx.displayName;
const iN = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(mx, {
    ref: n,
    className: fe(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      e,
    ),
    ...t,
    children: p.jsx('div', {
      className:
        'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md',
    }),
  }),
);
iN.displayName = mx.displayName;
function sN(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z',
        },
        child: [],
      },
    ],
  })(e);
}
function lN(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: { id: 'Image_On' },
        child: [
          {
            tag: 'g',
            attr: {},
            child: [
              {
                tag: 'path',
                attr: {
                  d: 'M18.435,3.06H5.565a2.5,2.5,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5h12.87a2.507,2.507,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.435,3.06ZM4.065,5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5v8.66l-3.88-3.88a1.509,1.509,0,0,0-2.12,0l-4.56,4.57a.513.513,0,0,1-.71,0l-.56-.56a1.522,1.522,0,0,0-2.12,0l-1.92,1.92Zm15.87,12.88a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-.75L6.7,15.06a.5.5,0,0,1,.35-.14.524.524,0,0,1,.36.14l.55.56a1.509,1.509,0,0,0,2.12,0l4.57-4.57a.5.5,0,0,1,.71,0l4.58,4.58Z',
                },
                child: [],
              },
              {
                tag: 'path',
                attr: {
                  d: 'M8.062,10.565a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,8.062,10.565Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,8.062,6.565Z',
                },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(e);
}
function aN(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: { id: 'Link' },
        child: [
          {
            tag: 'g',
            attr: {},
            child: [
              {
                tag: 'path',
                attr: {
                  d: 'M10.9,8a4.055,4.055,0,0,1,1.352.135,2.511,2.511,0,0,1-.7,4.863.5.5,0,0,0,0,1,3.508,3.508,0,0,0,2.944-5.2A3.557,3.557,0,0,0,11.434,7H5.59A3.5,3.5,0,0,0,5.4,14c.724.041,1.458,0,2.183,0a.5.5,0,0,0,0-1h0c-1.323,0-2.915.262-3.891-.843A2.522,2.522,0,0,1,5.59,8Z',
                },
                child: [],
              },
              {
                tag: 'path',
                attr: {
                  d: 'M18.41,17a3.5,3.5,0,0,0,.192-6.994c-.724-.041-1.458,0-2.183,0a.5.5,0,0,0,0,1h0c1.323,0,2.915-.262,3.891.843A2.522,2.522,0,0,1,18.41,16H13.1a4.055,4.055,0,0,1-1.352-.135,2.511,2.511,0,0,1,.7-4.863.5.5,0,0,0,0-1,3.508,3.508,0,0,0-2.944,5.2A3.557,3.557,0,0,0,12.566,17Z',
                },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(e);
}
function uN(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'none' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z',
          fill: 'currentColor',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z',
          fill: 'currentColor',
        },
        child: [],
      },
    ],
  })(e);
}
function cN(e) {
  return be({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M3 3.25c0-.966.784-1.75 1.75-1.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.25.25 0 0 0-.25.25v17.5c0 .138.112.25.25.25h5.5a.75.75 0 0 1 0 1.5h-5.5A1.75 1.75 0 0 1 3 20.75Zm16.006 9.5H10.75a.75.75 0 0 1 0-1.5h8.256l-3.3-3.484a.75.75 0 0 1 1.088-1.032l4.5 4.75a.75.75 0 0 1 0 1.032l-4.5 4.75a.75.75 0 0 1-1.088-1.032Z',
        },
        child: [],
      },
    ],
  })(e);
}
const dN = () => {
    const {
        clearUser: e,
        clearLinks: t,
        setlinkDraft: n,
        setProfileDraft: r,
      } = at((l) => l),
      o = Jo(),
      i = o.pathname === '/profile',
      s = o.pathname === '/links' || o.pathname === '/';
    return p.jsx('nav', {
      className: 'bg-white shadow-md p-4 fixed top-0 w-full z-40',
      children: p.jsxs('div', {
        className: 'container mx-auto flex justify-between items-center',
        children: [
          p.jsx(Co, {
            to: '/links',
            children: p.jsxs('div', {
              className: 'flex items-center',
              children: [
                p.jsx(aN, {
                  className:
                    'text-3xl bg-primary-500 text-white rounded-md px-1',
                }),
                p.jsx('span', {
                  className:
                    'hidden md:block ml-2 text-lg font-bold text-black',
                  children: 'DevLinks',
                }),
              ],
            }),
          }),
          p.jsx(yx, {
            children: p.jsxs(xx, {
              className: 'flex space-x-6',
              children: [
                p.jsx(Pv, {
                  children: p.jsxs(Co, {
                    to: '/links',
                    className: `text-base flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-lg hover:text-primary-900 ${s ? 'bg-primary-100 text-primary-700' : ''} hover:bg-primary-100`,
                    children: [
                      p.jsx(sN, {}),
                      p.jsx('span', {
                        className: 'hidden md:block',
                        children: 'Links',
                      }),
                    ],
                  }),
                }),
                p.jsx(Pv, {
                  children: p.jsxs(Co, {
                    to: '/profile',
                    className: `text-base flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-lg hover:text-primary-900  ${i ? 'bg-primary-100 text-primary-700' : ''} hover:bg-primary-100`,
                    children: [
                      p.jsx(uN, {}),
                      p.jsx('span', {
                        className: 'hidden md:block',
                        children: ' ProfileDetails ',
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          p.jsxs('div', {
            className: 'flex flex-row items-center gap-2',
            children: [
              p.jsxs(wn, {
                className: 'hover:bg-red-200 text-red-800',
                onClick: () => {
                  e(), t(), n(!1), r(!1);
                },
                children: [
                  p.jsx(cN, { className: 'md:hidden' }),
                  p.jsx('span', {
                    className: 'hidden md:block',
                    children: 'SignOut',
                  }),
                ],
              }),
              p.jsxs(Co, {
                to: '/preview',
                className:
                  'text-base flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-lg border text-primary-500  hover:text-white border-primary-500 hover:bg-primary-900',
                children: [
                  p.jsx(h9, { className: 'md:hidden' }),
                  p.jsx('span', {
                    className: 'hidden md:block',
                    children: 'Preview',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  _v = ({ user: e, links: t }) => {
    var n, r;
    return p.jsxs('div', {
      className:
        'bg-white p-10 md:rounded-lg md:shadow-lg md:absolute md:top-1/4 md:left-1/2 md:transform md:-translate-x-1/2',
      children: [
        p.jsxs('div', {
          className: 'm-8',
          children: [
            p.jsx('div', {
              className: 'flex justify-center',
              children: p.jsx('img', {
                src: e == null ? void 0 : e.profilePic,
                className: 'w-24 h-24 rounded-full mb-2',
                alt: 'Profile',
              }),
            }),
            p.jsx('h1', {
              className:
                'text-xl w-full h-6 font-bold text-neutral-600 text-center mb-2',
              children: `${(n = e == null ? void 0 : e.firstName) == null ? void 0 : n.slice(0, 10)} ${(r = e == null ? void 0 : e.lastName) == null ? void 0 : r.slice(0, 10)}`,
            }),
            p.jsx('h1', {
              className: 'text-neutral-500 text-center rounded-md mb-4',
              children: e == null ? void 0 : e.userEmail,
            }),
          ],
        }),
        p.jsx('div', {
          className: 'space-y-6',
          children: t.map((o) => {
            var l, a;
            const i = (l = Ia.get(o.platform)) == null ? void 0 : l.icon,
              s = (a = Ia.get(o.platform)) == null ? void 0 : a.color;
            return p.jsxs(
              'a',
              {
                href: o.link,
                style: { backgroundColor: s },
                className:
                  'h-14 w-full md:min-w-80 hover:shadow-md hover:shadow-primary-500 rounded-md text-white flex justify-between items-center p-4',
                children: [
                  p.jsxs('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      i && p.jsx(i, {}),
                      p.jsx('h1', { children: o.platform }),
                    ],
                  }),
                  p.jsx($2, {}),
                ],
              },
              o.link,
            );
          }),
        }),
      ],
    });
  },
  fN = (e) => fetch(e).then((t) => t.json()),
  Mv = () => {
    const { user: e, isProfileDraft: t, islinkDraft: n } = at((y) => y),
      r = at((y) => y.links),
      { userId: o } = Q4(),
      i = n0(),
      {
        data: s,
        trigger: l,
        isMutating: a,
        error: u,
      } = Ds(Zr(`previewlinks/${o || (e == null ? void 0 : e._id)}`), fN),
      [c, f] = d.useState(null);
    d.useEffect(() => {
      !e && !o && i('/');
    }, [e, o, i]),
      d.useEffect(() => {
        o && l();
      }, [o, e, l]);
    const m = () => {
      const y = `${window.location.href}/${o || (e == null ? void 0 : e._id)}`;
      navigator.clipboard
        .writeText(y)
        .then(() => {
          f('Link copied to clipboard!'), setTimeout(() => f(null), 2e3);
        })
        .catch((S) => {
          console.error('Failed to copy text: ', S),
            f('Failed to copy link.'),
            setTimeout(() => f(null), 2e3);
        });
    };
    return p.jsxs('div', {
      className:
        'w-full md:h-[100vh] md:flex md:justify-center z-50 absolute top-0 left-0',
      children: [
        p.jsxs('div', {
          className: 'h-1/2 w-full md:bg-primary-900 md:rounded-b-3xl',
          children: [
            p.jsxs('div', {
              className:
                'container mx-auto flex justify-between items-center z-50 bg-white rounded-lg py-2 px-6 fixed top-4 w-full left-1/2 transform -translate-x-1/2 ',
              children: [
                p.jsx(Co, {
                  className:
                    'text-base flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-lg border font-bold border-primary-900 text-primary-900 hover:bg-primary-100',
                  to: '/links',
                  children: 'Back to Editor',
                }),
                p.jsx(wn, {
                  onClick: m,
                  className:
                    'text-base flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-lg border font-bold border-primary-900 text-white hover:bg-primary-700 bg-primary-900',
                  children: 'Share Link',
                }),
              ],
            }),
            p.jsx('div', {
              className:
                'container mx-auto flex justify-center items-center rounded-lg py-2 px-6 mt-28',
              children:
                !o &&
                !s &&
                (t || n) &&
                p.jsx('div', {
                  className:
                    'mb-4 p-3 bg-yellow-200 text-yellow-800 rounded-lg',
                  children:
                    'This is a draft mode preview. Please save changes to make the links visible on live.',
                }),
            }),
          ],
        }),
        c &&
          p.jsx('div', {
            className:
              'absolute top-20 left-1/2 transform -translate-x-1/2 bg-white text-primary-900 p-4 rounded-lg shadow-lg',
            children: c,
          }),
        a &&
          p.jsx('div', {
            className:
              'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-primary-900 p-4 rounded-lg shadow-lg',
            children: p.jsx(Is, {}),
          }),
        o &&
          u &&
          p.jsx('div', {
            className:
              'm-5 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-destructive text-white p-4 rounded-lg shadow-lg',
            children: p.jsx('h1', {
              className: 'text-6xl p-10 text-center',
              children: "404 User's Links Not Found",
            }),
          }),
        o && !a && !u && s && p.jsx(_v, { user: s.user, links: s.links.links }),
        !o && e && p.jsx(_v, { user: e, links: r }),
      ],
    });
  },
  pN = I.forwardRef(({ signal: e }, t) => {
    const [n, r] = d.useState(null),
      [o, i] = d.useState(null),
      [s, l] = d.useState(!1),
      [a, u] = d.useState(!1),
      [c, f] = d.useState(0),
      [m, y] = d.useState(!1),
      [S, v] = d.useState(!1),
      w = (b) => {
        r(b);
        const N = URL.createObjectURL(b);
        i(N);
      };
    d.useEffect(() => {
      n && e();
    }, [o]);
    const { setNodeRef: g } = J0({ id: 'dropzone' }),
      h = (b) => {
        b.preventDefault(),
          b.dataTransfer.files &&
            b.dataTransfer.files[0] &&
            (w(b.dataTransfer.files[0]),
            l(!1),
            u(!0),
            setTimeout(() => {
              u(!1);
            }, 500));
      },
      x = (b) => {
        b.preventDefault(), l(!0);
      },
      E = () => {
        l(!1);
      },
      C = async () => {
        var N;
        if (!n) return { file: { publicUrl: o } };
        y(!0), v(!1);
        const b = new FormData();
        b.append('file', n);
        try {
          const R = Zr('upload'),
            _ = new ReadableStream({
              start(D) {
                const O = n.stream().getReader(),
                  Z = () => {
                    O.read().then(({ done: H, value: W }) => {
                      if (H) {
                        D.close();
                        return;
                      }
                      D.enqueue(W);
                      const M = W.length,
                        L = (n == null ? void 0 : n.size) || 1,
                        K = Math.round((M / L) * 100);
                      f(K), Z();
                    });
                  };
                Z();
              },
            });
          console.log(_);
          const j = (N = at.getState().user) == null ? void 0 : N.token,
            F = await fetch(R, {
              method: 'POST',
              headers: { Authorization: `Bearer ${j}` },
              body: b,
            }),
            A = await F.json();
          if (F.ok) y(!1), v(!0);
          else return y(!1), null;
          return A;
        } catch (R) {
          return R && y(!1), null;
        }
      };
    return (
      d.useImperativeHandle(t, () => ({
        onUpload: () => C(),
        setPreview: (b) => i(b),
        preview: o,
      })),
      p.jsxs('form', {
        onSubmit: C,
        className: 'space-y-6 relative',
        children: [
          p.jsxs('div', {
            onClick: () => {
              var b;
              return (b = document.getElementById('fileInput')) == null
                ? void 0
                : b.click();
            },
            className: 'max-w-md mx-auto  relative cursor-pointer',
            children: [
              p.jsxs('div', {
                ref: g,
                onDrop: h,
                onDragOver: x,
                onDragLeave: E,
                className: `relative px-10 py-28 border-2 border-dashed rounded-lg text-center transition-transform duration-300 z-10
            ${s ? 'scale-105 bg-blue-100 border-blue-400' : 'border-gray-300'} 
            ${a ? 'animate-pulse' : ''}
            hover:scale-105 hover:bg-blue-50`,
                children: [
                  p.jsxs('div', {
                    className:
                      'z-20 w-full h-full flex flex-col justify-center items-center text-white',
                    children: [
                      p.jsx('input', {
                        type: 'file',
                        accept: 'image/*',
                        onChange: (b) => {
                          b.target.files &&
                            b.target.files[0] &&
                            w(b.target.files[0]);
                        },
                        style: { display: 'none' },
                        id: 'fileInput',
                      }),
                      p.jsx(lN, { className: 'text-5xl' }),
                      p.jsx('h1', {
                        className: 'text-white cursor-pointer',
                        children: '+ Change Image',
                      }),
                    ],
                  }),
                  o &&
                    p.jsxs('div', {
                      className:
                        'z-[-10] absolute inset-0 flex items-center justify-center',
                      children: [
                        p.jsx('div', {
                          className:
                            'absolute inset-0 bg-black opacity-50 z-10 rounded-lg',
                        }),
                        p.jsx('img', {
                          src: o,
                          alt: 'Preview',
                          className:
                            'w-full h-96 max-h-72 object-cover rounded-lg shadow-md z-0',
                        }),
                      ],
                    }),
                ],
              }),
              m &&
                p.jsxs('div', {
                  className: 'mt-4',
                  children: [
                    p.jsx('p', {
                      className: 'text-center text-gray-700',
                      children: 'Uploading...',
                    }),
                    p.jsx('div', {
                      className: 'w-full bg-gray-200 rounded-full h-2.5',
                      children: p.jsx('div', {
                        className:
                          'bg-blue-600 h-2.5 rounded-full transition-all duration-300',
                        style: { width: `${c}%` },
                      }),
                    }),
                  ],
                }),
              S &&
                p.jsx('div', {
                  className: 'mt-4 text-center text-green-600',
                  children: p.jsx('p', { children: 'Upload Complete!' }),
                }),
            ],
          }),
          m && 'Uploading...',
        ],
      })
    );
  });
async function hN(e, { arg: t }) {
  var o;
  const n = (o = at.getState().user) == null ? void 0 : o.token,
    r = await fetch(e, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${n}`,
      },
      body: JSON.stringify(t),
    });
  if (!r.ok) throw new Error('Failed to update profile');
  return r.json();
}
const mN = () => {
  const { user: e, isProfileDraft: t } = at((y) => y),
    { setUser: n, setProfileDraft: r } = at((y) => y),
    o = ou({
      resolver: iu(TC),
      mode: 'onChange',
      defaultValues: {
        firstName: (e == null ? void 0 : e.firstName) || '',
        lastName: (e == null ? void 0 : e.lastName) || '',
        userEmail: (e == null ? void 0 : e.userEmail) || '',
        gender: (e == null ? void 0 : e.gender) || '',
      },
    }),
    { watch: i, getValues: s, setValue: l } = o,
    a = d.useRef(null),
    u = d.useCallback(() => {
      var y;
      r(!0),
        n({ profilePic: ((y = a.current) == null ? void 0 : y.preview) || '' });
    }, []);
  d.useEffect(() => {
    var y;
    (y = a.current) == null || y.setPreview(e == null ? void 0 : e.profilePic);
  }, [e == null ? void 0 : e.profilePic]),
    d.useEffect(() => {
      const y = s(),
        S = JSON.stringify(o.formState.dirtyFields);
      Object.keys(JSON.parse(S)).length > 0 && r(!0), n({ ...y });
    }, [o.formState.isValidating, i('gender')]);
  const { trigger: c, isMutating: f } = Ds(
    Zr(`protected/user/${e == null ? void 0 : e._id}`),
    hN,
  );
  async function m(y) {
    var S;
    try {
      const v = await ((S = a.current) == null ? void 0 : S.onUpload());
      if (!v) {
        gr({
          variant: 'destructive',
          description: 'Upload failed. Please try again.',
        });
        return;
      }
      const w = await c({ ...y, profilePic: v.file.publicUrl });
      r(!1),
        n({ ...w }),
        gr({ variant: 'default', description: 'Updated successfully' });
    } catch (v) {
      v instanceof Error &&
        gr({
          variant: 'destructive',
          description: 'An error occurred, please try again later.',
        });
    }
  }
  return p.jsxs('div', {
    className: 'p-4 overflow-hidden',
    children: [
      p.jsxs('header', {
        children: [
          p.jsx('h1', {
            className: 'text-2xl font-bold mb-2',
            children: 'Profile Details',
          }),
          p.jsx('p', {
            className: 'text-neutral-500 mb-6',
            children:
              'Add your details to create a personal touch to your profile.',
          }),
        ],
      }),
      t &&
        p.jsx('div', {
          className: 'mb-4 p-3 bg-yellow-200 text-yellow-800 rounded-lg',
          children:
            'Your profile is in draft mode. Please save changes to make the links visible on live.',
        }),
      p.jsxs('div', {
        className: 'text-neutral-500',
        children: [
          p.jsxs('div', {
            className:
              'flex flex-col md:flex-row gap-2 justify-center items-start md:items-center p-4 bg-neutral-100',
            children: [
              p.jsx('h1', {
                className: 'md:w-1/5',
                children: 'Profile Picture',
              }),
              p.jsx('div', {
                className: '2xl:w-3/5 md:w-3/5 lg:w-3/6 flex-grow',
                children: p.jsx(pN, { signal: u, ref: a }),
              }),
              p.jsx('h1', {
                className: 'md:w-1/5',
                children:
                  'Image must be below 1024x1024px. Use PNG or JPG format',
              }),
            ],
          }),
          p.jsx(Kp, {
            ...o,
            children: p.jsxs('form', {
              onSubmit: o.handleSubmit(m),
              children: [
                p.jsxs('div', {
                  className: 'bg-neutral-100 p-4 mt-6',
                  children: [
                    ['firstName', 'lastName', 'userEmail'].map((y) =>
                      p.jsx(
                        Vr,
                        {
                          control: o.control,
                          name: y,
                          render: ({ field: S }) =>
                            p.jsxs(or, {
                              className:
                                'flex flex-col md:flex-row md:items-center flex-auto mb-4',
                              children: [
                                p.jsx(ir, {
                                  className: 'md:w-1/5',
                                  children: y
                                    .replace(/([A-Z])/g, ' $1')
                                    .replace(/^./, (v) => v.toUpperCase()),
                                }),
                                p.jsxs('div', {
                                  className: 'md:w-4/5',
                                  children: [
                                    p.jsx(sr, {
                                      children: p.jsx($s, {
                                        placeholder: `Ex: ${y === 'userEmail' ? 'example@example.com' : ''}`,
                                        type:
                                          y === 'userEmail' ? 'email' : 'text',
                                        ...S,
                                      }),
                                    }),
                                    p.jsx(lr, {}),
                                  ],
                                }),
                              ],
                            }),
                        },
                        y,
                      ),
                    ),
                    p.jsx(
                      Vr,
                      {
                        control: o.control,
                        name: 'gender',
                        render: ({ field: y }) =>
                          p.jsxs(or, {
                            className:
                              'flex flex-col md:flex-row md:items-center flex-auto mb-4',
                            children: [
                              p.jsx(ir, {
                                className: 'md:w-1/5',
                                children: 'Gender',
                              }),
                              p.jsxs('div', {
                                className: 'md:w-4/5',
                                children: [
                                  p.jsx(sr, {
                                    children: p.jsxs(Bp, {
                                      value: y.value,
                                      onValueChange: (S) => {
                                        r(!0), l('gender', S);
                                      },
                                      children: [
                                        p.jsx(Cu, {
                                          children: p.jsx(Wp, {
                                            placeholder: 'Select Gender',
                                          }),
                                        }),
                                        p.jsx(Eu, {
                                          children: [
                                            'male',
                                            'female',
                                            'other',
                                          ].map((S) =>
                                            p.jsx(
                                              Do,
                                              {
                                                value: S,
                                                children:
                                                  S.charAt(0).toUpperCase() +
                                                  S.slice(1),
                                              },
                                              S,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                  p.jsx(lr, {}),
                                ],
                              }),
                            ],
                          }),
                      },
                      'gender',
                    ),
                  ],
                }),
                p.jsx('div', {
                  className: 'flex justify-end mt-4',
                  children: p.jsx(wn, {
                    className:
                      'bg-primary-900 hover:bg-primary-700 text-white w-full md:w-1/6',
                    variant: 'secondary',
                    type: 'submit',
                    disabled: f,
                    children: f ? p.jsx(Is, {}) : 'Submit',
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
};
function vN() {
  return p.jsxs('div', {
    className: ' flex flex-col items-center justify-center w-full h-full py-10',
    children: [
      p.jsx('h1', {
        className: 'text-3xl font-bold text-red-500',
        children: '404 - Page Not Found',
      }),
      p.jsx('p', {
        className: 'mt-4 text-lg',
        children: "Sorry, the page you're looking for does not exist.",
      }),
      p.jsx(Co, {
        to: '/',
        className:
          'mt-6 inline-block bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-900',
        children: 'Back to Home',
      }),
    ],
  });
}
function gN() {
  const e = at((t) => {
    var n;
    return (n = t.user) == null ? void 0 : n.token;
  });
  return p.jsx('div', {
    className: 'bg-neutral-100 w-full',
    children: p.jsxs(yS, {
      children: [
        e &&
          p.jsxs(p.Fragment, {
            children: [
              p.jsx(dN, {}),
              p.jsx('div', { className: 'h-20 xl:h-32' }),
            ],
          }),
        p.jsx('div', {
          className: 'container mx-auto flex justify-between items-center',
          children: p.jsxs(dS, {
            children: [
              p.jsx(Or, {
                path: '/profile',
                element: p.jsx(Vc, { children: p.jsx(mN, {}) }),
              }),
              p.jsx(Or, {
                path: '/',
                element: p.jsx(Vc, { children: p.jsx(bv, {}) }),
              }),
              p.jsx(Or, {
                path: '/links',
                element: p.jsx(Vc, { children: p.jsx(bv, {}) }),
              }),
              p.jsx(Or, { path: '/preview/:userId', element: p.jsx(Mv, {}) }),
              p.jsx(Or, { path: '/preview', element: p.jsx(Mv, {}) }),
              p.jsx(Or, { path: '*', element: p.jsx(vN, {}) }),
              ' ',
            ],
          }),
        }),
      ],
    }),
  });
}
var rh = 'ToastProvider',
  [oh, yN, xN] = fu('Toast'),
  [Sx, BN] = Mp('Toast', [xN]),
  [wN, Nu] = Sx(rh),
  Cx = (e) => {
    const {
        __scopeToast: t,
        label: n = 'Notification',
        duration: r = 5e3,
        swipeDirection: o = 'right',
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = d.useState(null),
      [u, c] = d.useState(0),
      f = d.useRef(!1),
      m = d.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${rh}\`. Expected non-empty \`string\`.`,
        ),
      p.jsx(oh.Provider, {
        scope: t,
        children: p.jsx(wN, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: d.useCallback(() => c((y) => y + 1), []),
          onToastRemove: d.useCallback(() => c((y) => y - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: m,
          children: s,
        }),
      })
    );
  };
Cx.displayName = rh;
var Ex = 'ToastViewport',
  SN = ['F8'],
  mf = 'toast.viewportPause',
  vf = 'toast.viewportResume',
  bx = d.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = SN,
        label: o = 'Notifications ({hotkey})',
        ...i
      } = e,
      s = Nu(Ex, n),
      l = yN(n),
      a = d.useRef(null),
      u = d.useRef(null),
      c = d.useRef(null),
      f = d.useRef(null),
      m = Te(t, f, s.onViewportChange),
      y = r.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
      S = s.toastCount > 0;
    d.useEffect(() => {
      const w = (g) => {
        var x;
        r.length !== 0 &&
          r.every((E) => g[E] || g.code === E) &&
          ((x = f.current) == null || x.focus());
      };
      return (
        document.addEventListener('keydown', w),
        () => document.removeEventListener('keydown', w)
      );
    }, [r]),
      d.useEffect(() => {
        const w = a.current,
          g = f.current;
        if (S && w && g) {
          const h = () => {
              if (!s.isClosePausedRef.current) {
                const b = new CustomEvent(mf);
                g.dispatchEvent(b), (s.isClosePausedRef.current = !0);
              }
            },
            x = () => {
              if (s.isClosePausedRef.current) {
                const b = new CustomEvent(vf);
                g.dispatchEvent(b), (s.isClosePausedRef.current = !1);
              }
            },
            E = (b) => {
              !w.contains(b.relatedTarget) && x();
            },
            C = () => {
              w.contains(document.activeElement) || x();
            };
          return (
            w.addEventListener('focusin', h),
            w.addEventListener('focusout', E),
            w.addEventListener('pointermove', h),
            w.addEventListener('pointerleave', C),
            window.addEventListener('blur', h),
            window.addEventListener('focus', x),
            () => {
              w.removeEventListener('focusin', h),
                w.removeEventListener('focusout', E),
                w.removeEventListener('pointermove', h),
                w.removeEventListener('pointerleave', C),
                window.removeEventListener('blur', h),
                window.removeEventListener('focus', x);
            }
          );
        }
      }, [S, s.isClosePausedRef]);
    const v = d.useCallback(
      ({ tabbingDirection: w }) => {
        const h = l().map((x) => {
          const E = x.ref.current,
            C = [E, ...ON(E)];
          return w === 'forwards' ? C : C.reverse();
        });
        return (w === 'forwards' ? h.reverse() : h).flat();
      },
      [l],
    );
    return (
      d.useEffect(() => {
        const w = f.current;
        if (w) {
          const g = (h) => {
            var C, b, N;
            const x = h.altKey || h.ctrlKey || h.metaKey;
            if (h.key === 'Tab' && !x) {
              const R = document.activeElement,
                _ = h.shiftKey;
              if (h.target === w && _) {
                (C = u.current) == null || C.focus();
                return;
              }
              const A = v({ tabbingDirection: _ ? 'backwards' : 'forwards' }),
                D = A.findIndex((O) => O === R);
              zc(A.slice(D + 1))
                ? h.preventDefault()
                : _
                  ? (b = u.current) == null || b.focus()
                  : (N = c.current) == null || N.focus();
            }
          };
          return (
            w.addEventListener('keydown', g),
            () => w.removeEventListener('keydown', g)
          );
        }
      }, [l, v]),
      p.jsxs(KE, {
        ref: a,
        role: 'region',
        'aria-label': o.replace('{hotkey}', y),
        tabIndex: -1,
        style: { pointerEvents: S ? void 0 : 'none' },
        children: [
          S &&
            p.jsx(gf, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = v({ tabbingDirection: 'forwards' });
                zc(w);
              },
            }),
          p.jsx(oh.Slot, {
            scope: n,
            children: p.jsx(ae.ol, { tabIndex: -1, ...i, ref: m }),
          }),
          S &&
            p.jsx(gf, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const w = v({ tabbingDirection: 'backwards' });
                zc(w);
              },
            }),
        ],
      })
    );
  });
bx.displayName = Ex;
var Nx = 'ToastFocusProxy',
  gf = d.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = Nu(Nx, n);
    return p.jsx(Vs, {
      'aria-hidden': !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: 'fixed' },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
gf.displayName = Nx;
var ku = 'Toast',
  CN = 'toast.swipeStart',
  EN = 'toast.swipeMove',
  bN = 'toast.swipeCancel',
  NN = 'toast.swipeEnd',
  kx = d.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l = !0, a] = Ss({ prop: r, defaultProp: o, onChange: i });
    return p.jsx(ai, {
      present: n || l,
      children: p.jsx(TN, {
        open: l,
        ...s,
        ref: t,
        onClose: () => a(!1),
        onPause: Ve(e.onPause),
        onResume: Ve(e.onResume),
        onSwipeStart: ne(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute('data-swipe', 'start');
        }),
        onSwipeMove: ne(e.onSwipeMove, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute('data-swipe', 'move'),
            u.currentTarget.style.setProperty(
              '--radix-toast-swipe-move-x',
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              '--radix-toast-swipe-move-y',
              `${f}px`,
            );
        }),
        onSwipeCancel: ne(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute('data-swipe', 'cancel'),
            u.currentTarget.style.removeProperty('--radix-toast-swipe-move-x'),
            u.currentTarget.style.removeProperty('--radix-toast-swipe-move-y'),
            u.currentTarget.style.removeProperty('--radix-toast-swipe-end-x'),
            u.currentTarget.style.removeProperty('--radix-toast-swipe-end-y');
        }),
        onSwipeEnd: ne(e.onSwipeEnd, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute('data-swipe', 'end'),
            u.currentTarget.style.removeProperty('--radix-toast-swipe-move-x'),
            u.currentTarget.style.removeProperty('--radix-toast-swipe-move-y'),
            u.currentTarget.style.setProperty(
              '--radix-toast-swipe-end-x',
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              '--radix-toast-swipe-end-y',
              `${f}px`,
            ),
            a(!1);
        }),
      }),
    });
  });
kx.displayName = ku;
var [kN, RN] = Sx(ku, { onClose() {} }),
  TN = d.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = 'foreground',
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: f,
        onSwipeCancel: m,
        onSwipeEnd: y,
        ...S
      } = e,
      v = Nu(ku, n),
      [w, g] = d.useState(null),
      h = Te(t, (O) => g(O)),
      x = d.useRef(null),
      E = d.useRef(null),
      C = o || v.duration,
      b = d.useRef(0),
      N = d.useRef(C),
      R = d.useRef(0),
      { onToastAdd: _, onToastRemove: j } = v,
      F = Ve(() => {
        var Z;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((Z = v.viewport) == null || Z.focus()),
          s();
      }),
      A = d.useCallback(
        (O) => {
          !O ||
            O === 1 / 0 ||
            (window.clearTimeout(R.current),
            (b.current = new Date().getTime()),
            (R.current = window.setTimeout(F, O)));
        },
        [F],
      );
    d.useEffect(() => {
      const O = v.viewport;
      if (O) {
        const Z = () => {
            A(N.current), u == null || u();
          },
          H = () => {
            const W = new Date().getTime() - b.current;
            (N.current = N.current - W),
              window.clearTimeout(R.current),
              a == null || a();
          };
        return (
          O.addEventListener(mf, H),
          O.addEventListener(vf, Z),
          () => {
            O.removeEventListener(mf, H), O.removeEventListener(vf, Z);
          }
        );
      }
    }, [v.viewport, C, a, u, A]),
      d.useEffect(() => {
        i && !v.isClosePausedRef.current && A(C);
      }, [i, C, v.isClosePausedRef, A]),
      d.useEffect(() => (_(), () => j()), [_, j]);
    const D = d.useMemo(() => (w ? Ax(w) : null), [w]);
    return v.viewport
      ? p.jsxs(p.Fragment, {
          children: [
            D &&
              p.jsx(PN, {
                __scopeToast: n,
                role: 'status',
                'aria-live': r === 'foreground' ? 'assertive' : 'polite',
                'aria-atomic': !0,
                children: D,
              }),
            p.jsx(kN, {
              scope: n,
              onClose: F,
              children: kt.createPortal(
                p.jsx(oh.ItemSlot, {
                  scope: n,
                  children: p.jsx(HE, {
                    asChild: !0,
                    onEscapeKeyDown: ne(l, () => {
                      v.isFocusedToastEscapeKeyDownRef.current || F(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: p.jsx(ae.li, {
                      role: 'status',
                      'aria-live': 'off',
                      'aria-atomic': !0,
                      tabIndex: 0,
                      'data-state': i ? 'open' : 'closed',
                      'data-swipe-direction': v.swipeDirection,
                      ...S,
                      ref: h,
                      style: {
                        userSelect: 'none',
                        touchAction: 'none',
                        ...e.style,
                      },
                      onKeyDown: ne(e.onKeyDown, (O) => {
                        O.key === 'Escape' &&
                          (l == null || l(O.nativeEvent),
                          O.nativeEvent.defaultPrevented ||
                            ((v.isFocusedToastEscapeKeyDownRef.current = !0),
                            F()));
                      }),
                      onPointerDown: ne(e.onPointerDown, (O) => {
                        O.button === 0 &&
                          (x.current = { x: O.clientX, y: O.clientY });
                      }),
                      onPointerMove: ne(e.onPointerMove, (O) => {
                        if (!x.current) return;
                        const Z = O.clientX - x.current.x,
                          H = O.clientY - x.current.y,
                          W = !!E.current,
                          M = ['left', 'right'].includes(v.swipeDirection),
                          L = ['left', 'up'].includes(v.swipeDirection)
                            ? Math.min
                            : Math.max,
                          K = M ? L(0, Z) : 0,
                          J = M ? 0 : L(0, H),
                          ee = O.pointerType === 'touch' ? 10 : 2,
                          me = { x: K, y: J },
                          pe = { originalEvent: O, delta: me };
                        W
                          ? ((E.current = me), Cl(EN, f, pe, { discrete: !1 }))
                          : jv(me, v.swipeDirection, ee)
                            ? ((E.current = me),
                              Cl(CN, c, pe, { discrete: !1 }),
                              O.target.setPointerCapture(O.pointerId))
                            : (Math.abs(Z) > ee || Math.abs(H) > ee) &&
                              (x.current = null);
                      }),
                      onPointerUp: ne(e.onPointerUp, (O) => {
                        const Z = E.current,
                          H = O.target;
                        if (
                          (H.hasPointerCapture(O.pointerId) &&
                            H.releasePointerCapture(O.pointerId),
                          (E.current = null),
                          (x.current = null),
                          Z)
                        ) {
                          const W = O.currentTarget,
                            M = { originalEvent: O, delta: Z };
                          jv(Z, v.swipeDirection, v.swipeThreshold)
                            ? Cl(NN, y, M, { discrete: !0 })
                            : Cl(bN, m, M, { discrete: !0 }),
                            W.addEventListener(
                              'click',
                              (L) => L.preventDefault(),
                              { once: !0 },
                            );
                        }
                      }),
                    }),
                  }),
                }),
                v.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  PN = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Nu(ku, t),
      [i, s] = d.useState(!1),
      [l, a] = d.useState(!1);
    return (
      jN(() => s(!0)),
      d.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : p.jsx(zp, {
            asChild: !0,
            children: p.jsx(Vs, {
              ...r,
              children:
                i && p.jsxs(p.Fragment, { children: [o.label, ' ', n] }),
            }),
          })
    );
  },
  _N = 'ToastTitle',
  Rx = d.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return p.jsx(ae.div, { ...r, ref: t });
  });
Rx.displayName = _N;
var MN = 'ToastDescription',
  Tx = d.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return p.jsx(ae.div, { ...r, ref: t });
  });
Tx.displayName = MN;
var Px = 'ToastAction',
  _x = d.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? p.jsx(jx, {
          altText: n,
          asChild: !0,
          children: p.jsx(ih, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Px}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
_x.displayName = Px;
var Mx = 'ToastClose',
  ih = d.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = RN(Mx, n);
    return p.jsx(jx, {
      asChild: !0,
      children: p.jsx(ae.button, {
        type: 'button',
        ...r,
        ref: t,
        onClick: ne(e.onClick, o.onClose),
      }),
    });
  });
ih.displayName = Mx;
var jx = d.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return p.jsx(ae.div, {
    'data-radix-toast-announce-exclude': '',
    'data-radix-toast-announce-alt': r || void 0,
    ...o,
    ref: t,
  });
});
function Ax(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        AN(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === 'none',
          i = r.dataset.radixToastAnnounceExclude === '';
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...Ax(r));
      }
    }),
    t
  );
}
function Cl(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Ra(o, i) : o.dispatchEvent(i);
}
var jv = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === 'left' || t === 'right' ? i && r > n : !i && o > n;
};
function jN(e = () => {}) {
  const t = Ve(e);
  Ge(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function AN(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ON(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function zc(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var DN = Cx,
  Ox = bx,
  Dx = kx,
  Ix = Rx,
  Lx = Tx,
  Fx = _x,
  Vx = ih;
const IN = DN,
  zx = d.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(Ox, {
      ref: n,
      className: fe(
        'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        e,
      ),
      ...t,
    }),
  );
zx.displayName = Ox.displayName;
const LN = su(
    'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
    {
      variants: {
        variant: {
          default: 'border bg-primary-500 text-white text-foreground',
          destructive:
            'destructive group border-destructive bg-destructive text-destructive-foreground',
        },
      },
      defaultVariants: { variant: 'default' },
    },
  ),
  $x = d.forwardRef(({ className: e, variant: t, ...n }, r) =>
    p.jsx(Dx, { ref: r, className: fe(LN({ variant: t }), e), ...n }),
  );
$x.displayName = Dx.displayName;
const FN = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Fx, {
    ref: n,
    className: fe(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      e,
    ),
    ...t,
  }),
);
FN.displayName = Fx.displayName;
const Ux = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Vx, {
    ref: n,
    className: fe(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      e,
    ),
    'toast-close': '',
    ...t,
    children: p.jsx(I7, { className: 'h-4 w-4' }),
  }),
);
Ux.displayName = Vx.displayName;
const Bx = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Ix, { ref: n, className: fe('text-sm font-semibold', e), ...t }),
);
Bx.displayName = Ix.displayName;
const Wx = d.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Lx, {
    ref: n,
    className: fe('text-sm  text-white opacity-90', e),
    ...t,
  }),
);
Wx.displayName = Lx.displayName;
function VN() {
  const { toasts: e } = vy();
  return p.jsxs(IN, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return p.jsxs(
          $x,
          {
            ...i,
            children: [
              p.jsxs('div', {
                className: 'grid gap-1',
                children: [
                  n && p.jsx(Bx, { children: n }),
                  r && p.jsx(Wx, { children: r }),
                ],
              }),
              o,
              p.jsx(Ux, {}),
            ],
          },
          t,
        );
      }),
      p.jsx(zx, {}),
    ],
  });
}
Gg(document.getElementById('root')).render(
  p.jsxs(p.Fragment, { children: [p.jsx(gN, {}), p.jsx(VN, {})] }),
);
