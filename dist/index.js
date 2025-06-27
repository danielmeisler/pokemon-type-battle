"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
      if (decorator = decorators[i5])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    static {
      __name(this, "n");
    }
    constructor(t3, e5, o6) {
      if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e5;
    }
    get styleSheet() {
      let t3 = this.o;
      const s4 = this.t;
      if (e && void 0 === t3) {
        const e5 = void 0 !== s4 && 1 === s4.length;
        e5 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && o.set(s4, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = /* @__PURE__ */ __name((t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s), "r");
  var i = /* @__PURE__ */ __name((t3, ...e5) => {
    const o6 = 1 === t3.length ? t3[0] : e5.reduce((e6, s4, o7) => e6 + ((t4) => {
      if (true === t4._$cssResult$) return t4.cssText;
      if ("number" == typeof t4) return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t3[o7 + 1], t3[0]);
    return new n(o6, t3, s);
  }, "i");
  var S = /* @__PURE__ */ __name((s4, o6) => {
    if (e) s4.adoptedStyleSheets = o6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
    else for (const e5 of o6) {
      const o7 = document.createElement("style"), n5 = t.litNonce;
      void 0 !== n5 && o7.setAttribute("nonce", n5), o7.textContent = e5.cssText, s4.appendChild(o7);
    }
  }, "S");
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e5 = "";
    for (const s4 of t4.cssRules) e5 += s4.cssText;
    return r(e5);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = /* @__PURE__ */ __name((t3, s4) => t3, "d");
  var u = { toAttribute(t3, s4) {
    switch (s4) {
      case Boolean:
        t3 = t3 ? l : null;
        break;
      case Object:
      case Array:
        t3 = null == t3 ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, s4) {
    let i5 = t3;
    switch (s4) {
      case Boolean:
        i5 = null !== t3;
        break;
      case Number:
        i5 = null === t3 ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          i5 = JSON.parse(t3);
        } catch (t4) {
          i5 = null;
        }
    }
    return i5;
  } };
  var f = /* @__PURE__ */ __name((t3, s4) => !i2(t3, s4), "f");
  var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var y = class extends HTMLElement {
    static {
      __name(this, "y");
    }
    static addInitializer(t3) {
      this._$Ei(), (this.l ??= []).push(t3);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t3, s4 = b) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
        const i5 = Symbol(), h3 = this.getPropertyDescriptor(t3, i5, s4);
        void 0 !== h3 && e2(this.prototype, t3, h3);
      }
    }
    static getPropertyDescriptor(t3, s4, i5) {
      const { get: e5, set: r6 } = h(this.prototype, t3) ?? { get() {
        return this[s4];
      }, set(t4) {
        this[s4] = t4;
      } };
      return { get: e5, set(s5) {
        const h3 = e5?.call(this);
        r6?.call(this, s5), this.requestUpdate(t3, h3, i5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t3 = n2(this);
      t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
        for (const i5 of s4) this.createProperty(i5, t4[i5]);
      }
      const t3 = this[Symbol.metadata];
      if (null !== t3) {
        const s4 = litPropertyMetadata.get(t3);
        if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t4, s4] of this.elementProperties) {
        const i5 = this._$Eu(t4, s4);
        void 0 !== i5 && this._$Eh.set(i5, t4);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i5 = [];
      if (Array.isArray(s4)) {
        const e5 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e5) i5.unshift(c(s5));
      } else void 0 !== s4 && i5.push(c(s4));
      return i5;
    }
    static _$Eu(t3, s4) {
      const i5 = s4.attribute;
      return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
    }
    addController(t3) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
    }
    removeController(t3) {
      this._$EO?.delete(t3);
    }
    _$E_() {
      const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
      t3.size > 0 && (this._$Ep = t3);
    }
    createRenderRoot() {
      const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t3, this.constructor.elementStyles), t3;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t3) => t3.hostDisconnected?.());
    }
    attributeChangedCallback(t3, s4, i5) {
      this._$AK(t3, i5);
    }
    _$ET(t3, s4) {
      const i5 = this.constructor.elementProperties.get(t3), e5 = this.constructor._$Eu(t3, i5);
      if (void 0 !== e5 && true === i5.reflect) {
        const h3 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
        this._$Em = t3, null == h3 ? this.removeAttribute(e5) : this.setAttribute(e5, h3), this._$Em = null;
      }
    }
    _$AK(t3, s4) {
      const i5 = this.constructor, e5 = i5._$Eh.get(t3);
      if (void 0 !== e5 && this._$Em !== e5) {
        const t4 = i5.getPropertyOptions(e5), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
        this._$Em = e5, this[e5] = h3.fromAttribute(s4, t4.type) ?? this._$Ej?.get(e5) ?? null, this._$Em = null;
      }
    }
    requestUpdate(t3, s4, i5) {
      if (void 0 !== t3) {
        const e5 = this.constructor, h3 = this[t3];
        if (i5 ??= e5.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h3, s4) || i5.useDefault && i5.reflect && h3 === this._$Ej?.get(t3) && !this.hasAttribute(e5._$Eu(t3, i5)))) return;
        this.C(t3, s4, i5);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t3, s4, { useDefault: i5, reflect: e5, wrapped: h3 }, r6) {
      i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r6 ?? s4 ?? this[t3]), true !== h3 || void 0 !== r6) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e5 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return null != t3 && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t5, s5] of this._$Ep) this[t5] = s5;
          this._$Ep = void 0;
        }
        const t4 = this.constructor.elementProperties;
        if (t4.size > 0) for (const [s5, i5] of t4) {
          const { wrapped: t5 } = i5, e5 = this[s5];
          true !== t5 || this._$AL.has(s5) || void 0 === e5 || this.C(s5, void 0, i5, e5);
        }
      }
      let t3 = false;
      const s4 = this._$AL;
      try {
        t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
      } catch (s5) {
        throw t3 = false, this._$EM(), s5;
      }
      t3 && this._$AE(s4);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.0");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: /* @__PURE__ */ __name((t3) => t3, "createHTML") }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = /* @__PURE__ */ __name(() => r3.createComment(""), "l");
  var c3 = /* @__PURE__ */ __name((t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3, "c");
  var a2 = Array.isArray;
  var u2 = /* @__PURE__ */ __name((t3) => a2(t3) || "function" == typeof t3?.[Symbol.iterator], "u");
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = /* @__PURE__ */ __name((t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 }), "y");
  var x = y2(1);
  var b2 = y2(2);
  var w = y2(3);
  var T = Symbol.for("lit-noChange");
  var E = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129);
  function P(t3, i5) {
    if (!a2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i5) : i5;
  }
  __name(P, "P");
  var V = /* @__PURE__ */ __name((t3, i5) => {
    const s4 = t3.length - 1, o6 = [];
    let r6, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = f2;
    for (let i6 = 0; i6 < s4; i6++) {
      const s5 = t3[i6];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), null !== u3); ) y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r6 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r6 ?? f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r6 = void 0);
      const x2 = c4 === m && t3[i6 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s5 + n3 : d3 >= 0 ? (o6.push(a3), s5.slice(0, d3) + e3 + s5.slice(d3) + h2 + x2) : s5 + h2 + (-2 === d3 ? i6 : x2);
    }
    return [P(t3, l3 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), o6];
  }, "V");
  var N = class _N {
    static {
      __name(this, "N");
    }
    constructor({ strings: t3, _$litType$: s4 }, n5) {
      let r6;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = V(t3, s4);
      if (this.el = _N.createElement(f3, n5), C.currentNode = this.el.content, 2 === s4 || 3 === s4) {
        const t4 = this.el.content.firstChild;
        t4.replaceWith(...t4.childNodes);
      }
      for (; null !== (r6 = C.nextNode()) && d3.length < u3; ) {
        if (1 === r6.nodeType) {
          if (r6.hasAttributes()) for (const t4 of r6.getAttributeNames()) if (t4.endsWith(e3)) {
            const i5 = v2[a3++], s5 = r6.getAttribute(t4).split(h2), e5 = /([.?@])?(.*)/.exec(i5);
            d3.push({ type: 1, index: c4, name: e5[2], strings: s5, ctor: "." === e5[1] ? H : "?" === e5[1] ? I : "@" === e5[1] ? L : k }), r6.removeAttribute(t4);
          } else t4.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r6.removeAttribute(t4));
          if ($.test(r6.tagName)) {
            const t4 = r6.textContent.split(h2), s5 = t4.length - 1;
            if (s5 > 0) {
              r6.textContent = i3 ? i3.emptyScript : "";
              for (let i5 = 0; i5 < s5; i5++) r6.append(t4[i5], l2()), C.nextNode(), d3.push({ type: 2, index: ++c4 });
              r6.append(t4[s5], l2());
            }
          }
        } else if (8 === r6.nodeType) if (r6.data === o3) d3.push({ type: 2, index: c4 });
        else {
          let t4 = -1;
          for (; -1 !== (t4 = r6.data.indexOf(h2, t4 + 1)); ) d3.push({ type: 7, index: c4 }), t4 += h2.length - 1;
        }
        c4++;
      }
    }
    static createElement(t3, i5) {
      const s4 = r3.createElement("template");
      return s4.innerHTML = t3, s4;
    }
  };
  function S2(t3, i5, s4 = t3, e5) {
    if (i5 === T) return i5;
    let h3 = void 0 !== e5 ? s4._$Co?.[e5] : s4._$Cl;
    const o6 = c3(i5) ? void 0 : i5._$litDirective$;
    return h3?.constructor !== o6 && (h3?._$AO?.(false), void 0 === o6 ? h3 = void 0 : (h3 = new o6(t3), h3._$AT(t3, s4, e5)), void 0 !== e5 ? (s4._$Co ??= [])[e5] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = S2(t3, h3._$AS(t3, i5.values), h3, e5)), i5;
  }
  __name(S2, "S");
  var M = class {
    static {
      __name(this, "M");
    }
    constructor(t3, i5) {
      this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t3) {
      const { el: { content: i5 }, parts: s4 } = this._$AD, e5 = (t3?.creationScope ?? r3).importNode(i5, true);
      C.currentNode = e5;
      let h3 = C.nextNode(), o6 = 0, n5 = 0, l3 = s4[0];
      for (; void 0 !== l3; ) {
        if (o6 === l3.index) {
          let i6;
          2 === l3.type ? i6 = new R(h3, h3.nextSibling, this, t3) : 1 === l3.type ? i6 = new l3.ctor(h3, l3.name, l3.strings, this, t3) : 6 === l3.type && (i6 = new z(h3, this, t3)), this._$AV.push(i6), l3 = s4[++n5];
        }
        o6 !== l3?.index && (h3 = C.nextNode(), o6++);
      }
      return C.currentNode = r3, e5;
    }
    p(t3) {
      let i5 = 0;
      for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
    }
  };
  var R = class _R {
    static {
      __name(this, "R");
    }
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t3, i5, s4, e5) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e5, this._$Cv = e5?.isConnected ?? true;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i5 = this) {
      t3 = S2(this, t3, i5), c3(t3) ? t3 === E || null == t3 || "" === t3 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t3 !== this._$AH && t3 !== T && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : u2(t3) ? this.k(t3) : this._(t3);
    }
    O(t3) {
      return this._$AA.parentNode.insertBefore(t3, this._$AB);
    }
    T(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
    }
    _(t3) {
      this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(r3.createTextNode(t3)), this._$AH = t3;
    }
    $(t3) {
      const { values: i5, _$litType$: s4 } = t3, e5 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = N.createElement(P(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e5) this._$AH.p(i5);
      else {
        const t4 = new M(e5, this), s5 = t4.u(this.options);
        t4.p(i5), this.T(s5), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i5 = A.get(t3.strings);
      return void 0 === i5 && A.set(t3.strings, i5 = new N(t3)), i5;
    }
    k(t3) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s4, e5 = 0;
      for (const h3 of t3) e5 === i5.length ? i5.push(s4 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s4 = i5[e5], s4._$AI(h3), e5++;
      e5 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e5), i5.length = e5);
    }
    _$AR(t3 = this._$AA.nextSibling, i5) {
      for (this._$AP?.(false, true, i5); t3 && t3 !== this._$AB; ) {
        const i6 = t3.nextSibling;
        t3.remove(), t3 = i6;
      }
    }
    setConnected(t3) {
      void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
    }
  };
  var k = class {
    static {
      __name(this, "k");
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t3, i5, s4, e5, h3) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e5, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = E;
    }
    _$AI(t3, i5 = this, s4, e5) {
      const h3 = this.strings;
      let o6 = false;
      if (void 0 === h3) t3 = S2(this, t3, i5, 0), o6 = !c3(t3) || t3 !== this._$AH && t3 !== T, o6 && (this._$AH = t3);
      else {
        const e6 = t3;
        let n5, r6;
        for (t3 = h3[0], n5 = 0; n5 < h3.length - 1; n5++) r6 = S2(this, e6[s4 + n5], i5, n5), r6 === T && (r6 = this._$AH[n5]), o6 ||= !c3(r6) || r6 !== this._$AH[n5], r6 === E ? t3 = E : t3 !== E && (t3 += (r6 ?? "") + h3[n5 + 1]), this._$AH[n5] = r6;
      }
      o6 && !e5 && this.j(t3);
    }
    j(t3) {
      t3 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
    }
  };
  var H = class extends k {
    static {
      __name(this, "H");
    }
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t3) {
      this.element[this.name] = t3 === E ? void 0 : t3;
    }
  };
  var I = class extends k {
    static {
      __name(this, "I");
    }
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t3) {
      this.element.toggleAttribute(this.name, !!t3 && t3 !== E);
    }
  };
  var L = class extends k {
    static {
      __name(this, "L");
    }
    constructor(t3, i5, s4, e5, h3) {
      super(t3, i5, s4, e5, h3), this.type = 5;
    }
    _$AI(t3, i5 = this) {
      if ((t3 = S2(this, t3, i5, 0) ?? E) === T) return;
      const s4 = this._$AH, e5 = t3 === E && s4 !== E || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h3 = t3 !== E && (s4 === E || e5);
      e5 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var z = class {
    static {
      __name(this, "z");
    }
    constructor(t3, i5, s4) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      S2(this, t3);
    }
  };
  var j = t2.litHtmlPolyfillSupport;
  j?.(N, R), (t2.litHtmlVersions ??= []).push("3.3.0");
  var B = /* @__PURE__ */ __name((t3, i5, s4) => {
    const e5 = s4?.renderBefore ?? i5;
    let h3 = e5._$litPart$;
    if (void 0 === h3) {
      const t4 = s4?.renderBefore ?? null;
      e5._$litPart$ = h3 = new R(i5.insertBefore(l2(), t4), t4, void 0, s4 ?? {});
    }
    return h3._$AI(t3), h3;
  }, "B");

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis;
  var i4 = class extends y {
    static {
      __name(this, "i");
    }
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t3 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t3.firstChild, t3;
    }
    update(t3) {
      const r6 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = B(r6, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return T;
    }
  };
  i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
  var o4 = s3.litElementPolyfillSupport;
  o4?.({ LitElement: i4 });
  (s3.litElementVersions ??= []).push("4.2.0");

  // src/App.ts
  var App = class extends i4 {
    static {
      __name(this, "App");
    }
    static {
      this.styles = i`

	`;
    }
    render() {
      return x`
			<ptb-view-game></ptb-view-game>
		`;
    }
  };
  customElements.define("ptb-app", App);

  // node_modules/@lit/reactive-element/decorators/property.js
  var o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r4 = /* @__PURE__ */ __name((t3 = o5, e5, r6) => {
    const { kind: n5, metadata: i5 } = r6;
    let s4 = globalThis.litPropertyMetadata.get(i5);
    if (void 0 === s4 && globalThis.litPropertyMetadata.set(i5, s4 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t3 = Object.create(t3)).wrapped = true), s4.set(r6.name, t3), "accessor" === n5) {
      const { name: o6 } = r6;
      return { set(r7) {
        const n6 = e5.get.call(this);
        e5.set.call(this, r7), this.requestUpdate(o6, n6, t3);
      }, init(e6) {
        return void 0 !== e6 && this.C(o6, void 0, t3, e6), e6;
      } };
    }
    if ("setter" === n5) {
      const { name: o6 } = r6;
      return function(r7) {
        const n6 = this[o6];
        e5.call(this, r7), this.requestUpdate(o6, n6, t3);
      };
    }
    throw Error("Unsupported decorator location: " + n5);
  }, "r");
  function n4(t3) {
    return (e5, o6) => "object" == typeof o6 ? r4(t3, e5, o6) : ((t4, e6, o7) => {
      const r6 = e6.hasOwnProperty(o7);
      return e6.constructor.createProperty(o7, t4), r6 ? Object.getOwnPropertyDescriptor(e6, o7) : void 0;
    })(t3, e5, o6);
  }
  __name(n4, "n");

  // node_modules/@lit/reactive-element/decorators/state.js
  function r5(r6) {
    return n4({ ...r6, state: true, attribute: false });
  }
  __name(r5, "r");

  // src/components/Button.ts
  var Button = class extends i4 {
    constructor() {
      super(...arguments);
      this.state = "neutral";
      this.isDisabled = false;
    }
    static {
      __name(this, "Button");
    }
    static {
      this.styles = i`
    :host {
      --button-font: var(--font);
      --button-font-size: 2cqw;
      
      --font-color: #2A2A2A;
      --background-color: #ffffff;

      --anim-time: 0.1s;
    }

    .button-container {
      width: 100%;
      height: 100%;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        background-color: var(--shadow-color);
        border-radius: var(--ptb-border-radius);
      }
    }

    button {
      width: 100%;
      height: 90%;
      position: relative;
      background-color: var(--background-color);
      cursor: pointer;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      border: 3px solid var(--shadow-color);
      border-radius: var(--ptb-border-radius);
      transform: translateY(0);
      transition: transform var(--anim-time) ease-in-out;

      &:active {
        transform: translateY(10%);
      }
    }

    slot {
      font-family: var(--button-font);
      font-size: var(--button-font-size);
      color: var(--font-color);
    }
  `;
    }
    getStateColor() {
      switch (this.state) {
        case "right":
          return "#75d26a";
        case "wrong":
          return "#b53232";
        default:
          return "#2A2A2A";
      }
    }
    render() {
      return x`
      <style>
        :host {
          --shadow-color: ${this.getStateColor()};
        }
      </style>
      <div class="button-container">
        <button ?disabled="${this.isDisabled}">
          <slot></slot>
        </button>
      </div>
    `;
    }
  };
  __decorateClass([
    n4()
  ], Button.prototype, "state", 2);
  __decorateClass([
    n4({ type: Boolean, attribute: "is-disabled" })
  ], Button.prototype, "isDisabled", 2);
  customElements.define("ptb-button", Button);

  // src/components/Field.ts
  var Field = class extends i4 {
    constructor() {
      super(...arguments);
      this.attackerColor = "";
      this.attackerIcon = "";
      this.attackerType = "";
      this.defenderColor = "";
      this.defenderIcon = "";
      this.defenderType = "";
      this.defenderColorDuo = "";
      this.defenderIconDuo = "";
      this.defenderTypeDuo = "";
      this.isAnimationActive = false;
    }
    static {
      __name(this, "Field");
    }
    static {
      this.styles = i`
    :host {
      --background-color: rgba(255,255,255,0.1); 
      --border-color: rgba(255,255,255,0.1);
      --border-width: 5px;

      --center-size: 20%;
      --fist-size: 50%;

      --type-icon-circle-size: 60%;
      --type-icon-size: 70%;
      --type-icon-padding: 20px;

      --type-name-font-size: 2em;

      --shadow-color: #2A2A2A;
    }

    .field-container {
      height: 100%;
      width: 100%;
      position: relative;
      background-color: var(--background-color);
      border-radius: var(--ptb-border-radius);
      border-width: var(--border-width);
      border-style: solid;
      border-color: var(--defender-color, --border-color) var(--border-color) var(--attacker-color, --border-color) var(--border-color);
      box-sizing: border-box;
    }

    .center {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
    }

    .attack-icon {
      height: var(--center-size);
      aspect-ratio: 1 / 1;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        position: absolute;
        height: 100%;
        width: 100%;
      }

      .arrow {
        transform: rotate(0deg);
        animation: rotate 1s ease-in-out;
      }

      .rotate {
        transform: rotate(0deg);
        animation: rotate 1s ease-in-out;
      }

      .fist {
        height: var(--fist-size);
        aspect-ratio: 1 / 1;
      }
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .defender {
      width: 100%;
      height: 50%;
      position: relative;

      .defender-type-icon {
        position: absolute;
        right: var(--type-icon-padding);
        top: var(--type-icon-padding);
        background-color: var(--defender-color);
        height: var(--type-icon-circle-size);
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;

        &::before {
          content: '';
          position: absolute;
          bottom: -10%;
          width: 100%;
          aspect-ratio: 1/1;
          background-color: var(--shadow-color);
          border-radius: 100%;
          z-index: -1;
        }

        img {
          height: var(--type-icon-size);
          aspect-ratio: 1 / 1;
        }
      }

      .defender-type-name {
        position: absolute;
        left: var(--type-icon-padding);
        top: var(--type-icon-padding);
        font-size: var(--type-name-font-size);
        text-shadow: 0 0 5px var(--shadow-color);
      }
    }

    .attacker {
      width: 100%;
      height: 50%;
      position: relative;

      .attacker-type-icon {
        position: absolute;
        left: var(--type-icon-padding);
        bottom: calc(var(--type-icon-padding) + 5%);
        background-color: var(--attacker-color);
        height: var(--type-icon-circle-size);
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;

        &::before {
          content: '';
          position: absolute;
          bottom: -10%;
          width: 100%;
          aspect-ratio: 1/1;
          background-color: var(--shadow-color);
          border-radius: 100%;
          z-index: -1;
        }

        img {
          height: var(--type-icon-size);
          aspect-ratio: 1 / 1;
        }
      }

      .attacker-type-name {
        position: absolute;
        right: var(--type-icon-padding);
        bottom: var(--type-icon-padding);
        font-size: var(--type-name-font-size);
        text-shadow: 0 0 5px var(--shadow-color);
      }
    }
  `;
    }
    render() {
      console.log(this.isAnimationActive);
      return x`
      <style>
        :host {
          --attacker-color: ${this.attackerColor};
          --defender-color: ${this.defenderColor};
          --defender-color-duo: ${this.defenderColorDuo};
        }
      </style>
      <div class="field-container">

        <div class="center">
          <div class="attack-icon">
            <img class="arrow ${this.isAnimationActive ? "rotate" : ""}" src="/assets/icons/attack-arrow.svg">
            <img class="fist" src="/assets/icons/attack-fist.svg">
          </div>
        </div>

        <div class="defender">
          <div class="defender-type-icon">
            <img class="defender-type-icon-img" src="${this.defenderIcon}">
          </div>
          <div class="defender-type-name">
            ${this.defenderType}
          </div>
        </div>

        <div class="attacker">
          <div class="attacker-type-icon">
            <img class="attacker-type-icon-img" src="${this.attackerIcon}">
          </div>
          <div class="attacker-type-name">
            ${this.attackerType}
          </div>
        </div>

      </div>
    `;
    }
  };
  __decorateClass([
    n4({ attribute: "attacker-color" })
  ], Field.prototype, "attackerColor", 2);
  __decorateClass([
    n4({ attribute: "attacker-icon" })
  ], Field.prototype, "attackerIcon", 2);
  __decorateClass([
    n4({ attribute: "attacker-type" })
  ], Field.prototype, "attackerType", 2);
  __decorateClass([
    n4({ attribute: "defender-color" })
  ], Field.prototype, "defenderColor", 2);
  __decorateClass([
    n4({ attribute: "defender-icon" })
  ], Field.prototype, "defenderIcon", 2);
  __decorateClass([
    n4({ attribute: "defender-type" })
  ], Field.prototype, "defenderType", 2);
  __decorateClass([
    n4({ attribute: "defender-color-duo" })
  ], Field.prototype, "defenderColorDuo", 2);
  __decorateClass([
    n4({ attribute: "defender-icon-duo" })
  ], Field.prototype, "defenderIconDuo", 2);
  __decorateClass([
    n4({ attribute: "defender-type-duo" })
  ], Field.prototype, "defenderTypeDuo", 2);
  __decorateClass([
    n4({ type: Boolean, attribute: "is-animation-active" })
  ], Field.prototype, "isAnimationActive", 2);
  customElements.define("ptb-field", Field);

  // src/components/Logo.ts
  var Logo = class extends i4 {
    static {
      __name(this, "Logo");
    }
    static {
      this.styles = i`
    .logo-container {
      height: 100%;
      width: 100%;
    }

    img {
      height: 100%;
      width: 100%;
    }
  `;
    }
    render() {
      return x`
      <div class="logo-container">
        <img src="/assets/app/logo.svg">
      </div>
    `;
    }
  };
  customElements.define("ptb-logo", Logo);

  // src/layout/Layout.ts
  var Layout = class extends i4 {
    static {
      __name(this, "Layout");
    }
    static {
      this.styles = i`
    :host {
      --content-gap: 20px;
      --content-max-width: 400px;
    }

    .container {
      width: 100dvw;
      height: 100dvh;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
    }

    .layout {
      height: 100%;
      width: 100%;
      max-width: var(--content-max-width);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: var(--content-gap);
    }

    .header {
      width: 100%;
      height: 100px;
      padding: 10px;
      box-sizing: border-box;
    }

    .footer {
      width: 100%;
      height: 50px;
      padding: 10px;
      box-sizing: border-box;  
    }
  `;
    }
    render() {
      return x`
    <div class="container">
      <div class="layout">
        <div class="header">
          <ptb-logo></ptb-logo>
        </div>
        
        <slot></slot>

        <div class="footer">
          Daniel Meisler
        </div>
      </div>
    </div>
    `;
    }
  };
  customElements.define("ptb-layout", Layout);

  // node_modules/@lit/localize/internal/str-tag.js
  var isStrTagged = /* @__PURE__ */ __name((val) => typeof val !== "string" && "strTag" in val, "isStrTagged");
  var joinStringsAndValues = /* @__PURE__ */ __name((strings, values, valueOrder) => {
    let concat = strings[0];
    for (let i5 = 1; i5 < strings.length; i5++) {
      concat += values[valueOrder ? valueOrder[i5 - 1] : i5 - 1];
      concat += strings[i5];
    }
    return concat;
  }, "joinStringsAndValues");

  // node_modules/@lit/localize/internal/default-msg.js
  var defaultMsg = /* @__PURE__ */ __name((template) => isStrTagged(template) ? joinStringsAndValues(template.strings, template.values) : template, "defaultMsg");

  // node_modules/@lit/localize/init/install.js
  var msg = defaultMsg;

  // node_modules/@lit/localize/internal/deferred.js
  var Deferred = class {
    static {
      __name(this, "Deferred");
    }
    constructor() {
      this.settled = false;
      this.promise = new Promise((resolve, reject) => {
        this._resolve = resolve;
        this._reject = reject;
      });
    }
    resolve(value) {
      this.settled = true;
      this._resolve(value);
    }
    reject(error) {
      this.settled = true;
      this._reject(error);
    }
  };

  // node_modules/@lit/localize/internal/fnv1a64.js
  var hl = [];
  for (let i5 = 0; i5 < 256; i5++) {
    hl[i5] = (i5 >> 4 & 15).toString(16) + (i5 & 15).toString(16);
  }

  // node_modules/@lit/localize/init/runtime.js
  var loading = new Deferred();
  loading.resolve();

  // src/data/types.ts
  var types = {
    normal: {
      type: "normal",
      label: msg("Normal"),
      color: "#919AA2",
      icon: "/assets/types/normal.svg",
      effective: [],
      ineffective: ["rock", "steel"],
      nullified: ["ghost"]
    },
    fighting: {
      type: "fighting",
      label: msg("Fighting"),
      color: "#CF3E69",
      icon: "/assets/types/fighting.svg",
      effective: ["normal", "rock", "steel", "ice", "dark"],
      ineffective: ["flying", "poison", "bug", "psychic", "fairy"],
      nullified: ["ghost"]
    },
    flying: {
      type: "flying",
      label: msg("Flying"),
      color: "#90AADE",
      icon: "/assets/types/flying.svg",
      effective: ["fighting", "bug", "grass"],
      ineffective: ["rock", "steel", "electric"],
      nullified: []
    },
    poison: {
      type: "poison",
      label: msg("Poison"),
      color: "#AC6AC9",
      icon: "/assets/types/poison.svg",
      effective: ["grass", "fairy"],
      ineffective: ["poison", "ground", "rock", "ghost"],
      nullified: ["steel"]
    },
    ground: {
      type: "ground",
      label: msg("Ground"),
      color: "#DA7844",
      icon: "/assets/types/ground.svg",
      effective: ["poison", "rock", "steel", "fire", "electric"],
      ineffective: ["bug", "grass"],
      nullified: ["flying"]
    },
    rock: {
      type: "rock",
      label: msg("Rock"),
      color: "#C8B88C",
      icon: "/assets/types/rock.svg",
      effective: ["flying", "bug", "fire", "ice"],
      ineffective: ["fighting", "ground", "steel"],
      nullified: []
    },
    bug: {
      type: "bug",
      label: msg("Bug"),
      color: "#91C228",
      icon: "/assets/types/bug.svg",
      effective: ["grass", "psychic", "dark"],
      ineffective: ["fighting", "flying", "poison", "ghost", "steel", "fire", "fairy"],
      nullified: []
    },
    ghost: {
      type: "ghost",
      label: msg("Ghost"),
      color: "#5169AE",
      icon: "/assets/types/ghost.svg",
      effective: ["ghost", "psychic"],
      ineffective: ["dark"],
      nullified: ["normal"]
    },
    steel: {
      type: "steel",
      label: msg("Steel"),
      color: "#5A8FA2",
      icon: "/assets/types/steel.svg",
      effective: ["rock", "ice", "fairy"],
      ineffective: ["steel", "fire", "water", "electric"],
      nullified: []
    },
    fire: {
      type: "fire",
      label: msg("Fire"),
      color: "#FF9D53",
      icon: "/assets/types/fire.svg",
      effective: ["bug", "steel", "grass", "ice"],
      ineffective: ["rock", "fire", "water", "dragon"],
      nullified: []
    },
    water: {
      type: "water",
      label: msg("Water"),
      color: "#4C91D6",
      icon: "/assets/types/water.svg",
      effective: ["ground", "rock", "fire"],
      ineffective: ["water", "grass", "dragon"],
      nullified: []
    },
    grass: {
      type: "grass",
      label: msg("Grass"),
      color: "#63BC5B",
      icon: "/assets/types/grass.svg",
      effective: ["ground", "rock", "water"],
      ineffective: ["flying", "poison", "bug", "steel", "fire", "grass", "dragon"],
      nullified: []
    },
    electric: {
      type: "electric",
      label: msg("Electric"),
      color: "#F3D338",
      icon: "/assets/types/electric.svg",
      effective: ["flying", "water"],
      ineffective: ["grass", "electric", "dragon"],
      nullified: ["ground"]
    },
    psychic: {
      type: "psychic",
      label: msg("Psychic"),
      color: "#F97277",
      icon: "/assets/types/psychic.svg",
      effective: ["fighting", "poison"],
      ineffective: ["steel", "psychic"],
      nullified: ["dark"]
    },
    ice: {
      type: "ice",
      label: msg("Ice"),
      color: "#75CFC1",
      icon: "/assets/types/ice.svg",
      effective: ["flying", "ground", "grass", "dragon"],
      ineffective: ["steel", "fire", "water", "ice"],
      nullified: []
    },
    dragon: {
      type: "dragon",
      label: msg("Dragon"),
      color: "#036DC5",
      icon: "/assets/types/dragon.svg",
      effective: ["dragon"],
      ineffective: ["steel"],
      nullified: ["fairy"]
    },
    dark: {
      type: "dark",
      label: msg("Dark"),
      color: "#5A5266",
      icon: "/assets/types/dark.svg",
      effective: ["ghost", "psychic"],
      ineffective: ["fighting", "dark", "fairy"],
      nullified: []
    },
    fairy: {
      type: "fairy",
      label: msg("Fairy"),
      color: "#ED90E7",
      icon: "/assets/types/fairy.svg",
      effective: ["fighting", "dragon", "dark"],
      ineffective: ["poison", "steel", "fire"],
      nullified: []
    }
  };

  // src/views/Game.ts
  var Game = class extends i4 {
    constructor() {
      super(...arguments);
      this.attackerType = types[this.randomType()];
      this.defenderType = types[this.randomType()];
      this.userEffectiveness = "neutral";
      this.correctEffectiveness = "neutral";
      this.isFieldAnimationActive = false;
      this.buttonStatesMap = {
        nullified: "neutral",
        quarter: "neutral",
        half: "neutral",
        neutral: "neutral",
        double: "neutral",
        quadruple: "neutral"
      };
      this.buttonDisabledMap = {
        nullified: false,
        quarter: false,
        half: false,
        neutral: false,
        double: false,
        quadruple: false
      };
      this.#resetTime = 1e3;
    }
    static {
      __name(this, "Game");
    }
    static {
      this.styles = i`
    .game {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      gap: 20px;
      box-sizing: border-box;
    }

    .battle-field {
      width: 100%;
      aspect-ratio: 1 / 1;
    }

    .button-grid {
      width: 100%;
      aspect-ratio: 1.5 / 1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  `;
    }
    #resetTime;
    randomType() {
      const typeKeys = Object.keys(types);
      const randomIndex = Math.floor(Math.random() * typeKeys.length);
      return typeKeys[randomIndex];
    }
    handleClick(event) {
      const target = event.currentTarget;
      const value = target.dataset.effectiveness;
      if (!value) {
        return;
      }
      this.toggleDisabledButtons(true);
      this.userEffectiveness = value;
      this.correctEffectiveness = this.getEffectiveness();
      if (this.userEffectiveness === this.correctEffectiveness) {
        this.buttonStatesMap[this.userEffectiveness] = "right";
      } else if (this.userEffectiveness !== this.correctEffectiveness) {
        this.buttonStatesMap[this.userEffectiveness] = "wrong";
        this.buttonStatesMap[this.correctEffectiveness] = "right";
      }
      setTimeout(() => {
        this.resetButtons();
        this.toggleDisabledButtons(false);
        this.getTypes();
        this.isFieldAnimationActive = false;
      }, this.#resetTime);
    }
    getTypes() {
      this.isFieldAnimationActive = true;
      console.log(this.isFieldAnimationActive);
      this.attackerType = types[this.randomType()];
      this.defenderType = types[this.randomType()];
    }
    getEffectiveness() {
      if (this.attackerType.effective.includes(this.defenderType.type)) {
        return "double";
      }
      if (this.attackerType.ineffective.includes(this.defenderType.type)) {
        return "half";
      }
      if (this.attackerType.nullified.includes(this.defenderType.type)) {
        return "nullified";
      }
      return "neutral";
    }
    resetButtons() {
      for (const key in this.buttonStatesMap) {
        this.buttonStatesMap[key] = "neutral";
      }
      this.requestUpdate();
    }
    toggleDisabledButtons(disabled) {
      for (const key in this.buttonDisabledMap) {
        this.buttonDisabledMap[key] = disabled;
      }
      this.requestUpdate();
    }
    render() {
      return x`
      <ptb-layout>
        <div class="game">
          <div class="battle-field">
            <ptb-field
              defender-color="${this.defenderType.color}"
              defender-icon="${this.defenderType.icon}"
              defender-type="${this.defenderType.label}"
              attacker-color="${this.attackerType.color}"
              attacker-icon="${this.attackerType.icon}"
              attacker-type="${this.attackerType.label}"
							?is-animation-active="${this.isFieldAnimationActive}"
            ></ptb-field>
          </div>

          <div class="button-grid">
            <ptb-button @click="${this.handleClick}" state="${this.buttonStatesMap.nullified}" ?is-disabled="${this.buttonDisabledMap.nullified}" data-effectiveness="nullified">0x</ptb-button>
            <!-- <ptb-button @click="${this.handleClick}" state="${this.buttonStatesMap.quarter}" ?is-disabled="${this.buttonDisabledMap.quarter}" data-effectiveness="quarter">¼x</ptb-button> -->
            <ptb-button @click="${this.handleClick}" state="${this.buttonStatesMap.half}" ?is-disabled="${this.buttonDisabledMap.half}" data-effectiveness="half">½x</ptb-button>
            <ptb-button @click="${this.handleClick}" state="${this.buttonStatesMap.neutral}" ?is-disabled="${this.buttonDisabledMap.neutral}" data-effectiveness="neutral">1x</ptb-button>
            <ptb-button @click="${this.handleClick}" state="${this.buttonStatesMap.double}" ?is-disabled="${this.buttonDisabledMap.double}" data-effectiveness="double">2x</ptb-button>
            <!-- <ptb-button @click="${this.handleClick}" state="${this.buttonStatesMap.quadruple}" ?is-disabled="${this.buttonDisabledMap.quadruple}" data-effectiveness="quadruple">4x</ptb-button> -->
          </div>
        </div>
      </ptb-layout>
    `;
    }
  };
  __decorateClass([
    r5()
  ], Game.prototype, "attackerType", 2);
  __decorateClass([
    r5()
  ], Game.prototype, "defenderType", 2);
  __decorateClass([
    r5()
  ], Game.prototype, "userEffectiveness", 2);
  __decorateClass([
    r5()
  ], Game.prototype, "correctEffectiveness", 2);
  __decorateClass([
    r5()
  ], Game.prototype, "isFieldAnimationActive", 2);
  __decorateClass([
    r5()
  ], Game.prototype, "buttonStatesMap", 2);
  __decorateClass([
    r5()
  ], Game.prototype, "buttonDisabledMap", 2);
  customElements.define("ptb-view-game", Game);
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
@lit/localize/internal/locale-status-event.js:
@lit/localize/internal/str-tag.js:
@lit/localize/internal/types.js:
@lit/localize/internal/default-msg.js:
@lit/localize/internal/localized-controller.js:
@lit/localize/internal/localized-decorator.js:
@lit/localize/internal/runtime-msg.js:
@lit/localize/init/runtime.js:
@lit/localize/init/transform.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/deferred.js:
@lit/localize/internal/id-generation.js:
@lit/localize/lit-localize.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/fnv1a64.js:
  (**
   * @license
   * Copyright 2014 Travis Webb
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=index.js.map
