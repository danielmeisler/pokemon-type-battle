var ut=Object.defineProperty;var Ut=Object.getOwnPropertyDescriptor;var n=(o,t)=>ut(o,"name",{value:t,configurable:!0});var h=(o,t,e,s)=>{for(var i=s>1?void 0:s?Ut(t,e):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&ut(t,e,i),i};var V=globalThis,W=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),gt=new WeakMap,D=class{static{n(this,"n")}constructor(t,e,s){if(this._$cssResult$=!0,s!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(W&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=gt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&gt.set(e,t))}return t}toString(){return this.cssText}},mt=n(o=>new D(typeof o=="string"?o:o+"",void 0,Q),"r"),v=n((o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new D(e,o,Q)},"i"),yt=n((o,t)=>{if(W)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=V.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},"S"),G=W?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return mt(e)})(o):o;var{is:Lt,defineProperty:Dt,getOwnPropertyDescriptor:Rt,getOwnPropertyNames:Ot,getOwnPropertySymbols:zt,getPrototypeOf:Ht}=Object,F=globalThis,vt=F.trustedTypes,Nt=vt?vt.emptyScript:"",qt=F.reactiveElementPolyfillSupport,R=n((o,t)=>o,"d"),O={toAttribute(o,t){switch(t){case Boolean:o=o?Nt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},K=n((o,t)=>!Lt(o,t),"f"),bt={attribute:!0,type:String,converter:O,reflect:!1,useDefault:!1,hasChanged:K};Symbol.metadata??=Symbol("metadata"),F.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static{n(this,"y")}static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=bt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Dt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=Rt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:i,set(a){let c=i?.call(this);r?.call(this,a),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??bt}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;let t=Ht(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){let e=this.properties,s=[...Ot(e),...zt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(G(i))}else t!==void 0&&e.push(G(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:O).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:O;this._$Em=i,this[i]=a.fromAttribute(e,r.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??K)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),r!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:a}=r,c=this[i];a!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,r,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[R("elementProperties")]=new Map,E[R("finalized")]=new Map,qt?.({ReactiveElement:E}),(F.reactiveElementVersions??=[]).push("2.1.0");var nt=globalThis,Z=nt.trustedTypes,$t=Z?Z.createPolicy("lit-html",{createHTML:n(o=>o,"createHTML")}):void 0,wt="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,kt="?"+S,jt=`<${kt}>`,T=document,H=n(()=>T.createComment(""),"l"),N=n(o=>o===null||typeof o!="object"&&typeof o!="function","c"),at=Array.isArray,It=n(o=>at(o)||typeof o?.[Symbol.iterator]=="function","u"),tt=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,At=/>/g,k=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Et=/'/g,xt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,lt=n(o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),"y"),$=lt(1),re=lt(2),ne=lt(3),M=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),St=new WeakMap,C=T.createTreeWalker(T,129);function Tt(o,t){if(!at(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return $t!==void 0?$t.createHTML(t):t}n(Tt,"P");var Bt=n((o,t)=>{let e=o.length-1,s=[],i,r=t===2?"<svg>":t===3?"<math>":"",a=z;for(let c=0;c<e;c++){let l=o[c],f,m,d=-1,A=0;for(;A<l.length&&(a.lastIndex=A,m=a.exec(l),m!==null);)A=a.lastIndex,a===z?m[1]==="!--"?a=_t:m[1]!==void 0?a=At:m[2]!==void 0?(Ct.test(m[2])&&(i=RegExp("</"+m[2],"g")),a=k):m[3]!==void 0&&(a=k):a===k?m[0]===">"?(a=i??z,d=-1):m[1]===void 0?d=-2:(d=a.lastIndex-m[2].length,f=m[1],a=m[3]===void 0?k:m[3]==='"'?xt:Et):a===xt||a===Et?a=k:a===_t||a===At?a=z:(a=k,i=void 0);let x=a===k&&o[c+1].startsWith("/>")?" ":"";r+=a===z?l+jt:d>=0?(s.push(f),l.slice(0,d)+wt+l.slice(d)+S+x):l+S+(d===-2?c:x)}return[Tt(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},"V"),q=class o{static{n(this,"N")}constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,a=0,c=t.length-1,l=this.parts,[f,m]=Bt(t,e);if(this.el=o.createElement(f,s),C.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=C.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(wt)){let A=m[a++],x=i.getAttribute(d).split(S),B=/([.?@])?(.*)/.exec(A);l.push({type:1,index:r,name:B[2],strings:x,ctor:B[1]==="."?st:B[1]==="?"?it:B[1]==="@"?ot:U}),i.removeAttribute(d)}else d.startsWith(S)&&(l.push({type:6,index:r}),i.removeAttribute(d));if(Ct.test(i.tagName)){let d=i.textContent.split(S),A=d.length-1;if(A>0){i.textContent=Z?Z.emptyScript:"";for(let x=0;x<A;x++)i.append(d[x],H()),C.nextNode(),l.push({type:2,index:++r});i.append(d[A],H())}}}else if(i.nodeType===8)if(i.data===kt)l.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(S,d+1))!==-1;)l.push({type:7,index:r}),d+=S.length-1}r++}}static createElement(t,e){let s=T.createElement("template");return s.innerHTML=t,s}};function P(o,t,e=o,s){if(t===M)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,r=N(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=P(o,i._$AS(o,t.values),i,s)),t}n(P,"S");var et=class{static{n(this,"M")}constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);C.currentNode=i;let r=C.nextNode(),a=0,c=0,l=s[0];for(;l!==void 0;){if(a===l.index){let f;l.type===2?f=new j(r,r.nextSibling,this,t):l.type===1?f=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(f=new rt(r,this,t)),this._$AV.push(f),l=s[++c]}a!==l?.index&&(r=C.nextNode(),a++)}return C.currentNode=T,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},j=class o{static{n(this,"R")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),N(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):It(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=q.createElement(Tt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new et(i,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new q(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new o(this.O(H()),this.O(H()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},U=class{static{n(this,"k")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,i){let r=this.strings,a=!1;if(r===void 0)t=P(this,t,e,0),a=!N(t)||t!==this._$AH&&t!==M,a&&(this._$AH=t);else{let c=t,l,f;for(t=r[0],l=0;l<r.length-1;l++)f=P(this,c[s+l],e,l),f===M&&(f=this._$AH[l]),a||=!N(f)||f!==this._$AH[l],f===u?t=u:t!==u&&(t+=(f??"")+r[l+1]),this._$AH[l]=f}a&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},st=class extends U{static{n(this,"H")}constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},it=class extends U{static{n(this,"I")}constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},ot=class extends U{static{n(this,"L")}constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??u)===M)return;let s=this._$AH,i=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},rt=class{static{n(this,"z")}constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}};var Vt=nt.litHtmlPolyfillSupport;Vt?.(q,j),(nt.litHtmlVersions??=[]).push("3.3.0");var Mt=n((o,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let r=e?.renderBefore??null;s._$litPart$=i=new j(t.insertBefore(H(),r),r,void 0,e??{})}return i._$AI(o),i},"B");var ct=globalThis,g=class extends E{static{n(this,"i")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}};g._$litElement$=!0,g.finalized=!0,ct.litElementHydrateSupport?.({LitElement:g});var Wt=ct.litElementPolyfillSupport;Wt?.({LitElement:g});(ct.litElementVersions??=[]).push("4.2.0");var dt=class extends g{static{n(this,"App")}static{this.styles=v`

	`}render(){return $`
			<ptb-view-game></ptb-view-game>
		`}};customElements.define("ptb-app",dt);var Ft={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:K},Kt=n((o=Ft,t,e)=>{let{kind:s,metadata:i}=e,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),r.set(e.name,o),s==="accessor"){let{name:a}=e;return{set(c){let l=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,l,o)},init(c){return c!==void 0&&this.C(a,void 0,o,c),c}}}if(s==="setter"){let{name:a}=e;return function(c){let l=this[a];t.call(this,c),this.requestUpdate(a,l,o)}}throw Error("Unsupported decorator location: "+s)},"r");function y(o){return(t,e)=>typeof e=="object"?Kt(o,t,e):((s,i,r)=>{let a=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),a?Object.getOwnPropertyDescriptor(i,r):void 0})(o,t,e)}n(y,"n");function w(o){return y({...o,state:!0,attribute:!1})}n(w,"r");var I=class extends g{constructor(){super(...arguments);this.state="neutral";this.isDisabled=!1}static{n(this,"Button")}static{this.styles=v`
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
  `}getStateColor(){switch(this.state){case"right":return"#75d26a";case"wrong":return"#b53232";default:return"#2A2A2A"}}render(){return $`
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
    `}};h([y()],I.prototype,"state",2),h([y({type:Boolean,attribute:"is-disabled"})],I.prototype,"isDisabled",2);customElements.define("ptb-button",I);var b=class extends g{constructor(){super(...arguments);this.attackerColor="";this.attackerIcon="";this.attackerType="";this.defenderColor="";this.defenderIcon="";this.defenderType="";this.defenderColorDuo="";this.defenderIconDuo="";this.defenderTypeDuo="";this.isAnimationActive=!1}static{n(this,"Field")}static{this.styles=v`
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
  `}render(){return console.log(this.isAnimationActive),$`
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
            <img class="arrow ${this.isAnimationActive?"rotate":""}" src="./assets/icons/attack-arrow.svg">
            <img class="fist" src="./assets/icons/attack-fist.svg">
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
    `}};h([y({attribute:"attacker-color"})],b.prototype,"attackerColor",2),h([y({attribute:"attacker-icon"})],b.prototype,"attackerIcon",2),h([y({attribute:"attacker-type"})],b.prototype,"attackerType",2),h([y({attribute:"defender-color"})],b.prototype,"defenderColor",2),h([y({attribute:"defender-icon"})],b.prototype,"defenderIcon",2),h([y({attribute:"defender-type"})],b.prototype,"defenderType",2),h([y({attribute:"defender-color-duo"})],b.prototype,"defenderColorDuo",2),h([y({attribute:"defender-icon-duo"})],b.prototype,"defenderIconDuo",2),h([y({attribute:"defender-type-duo"})],b.prototype,"defenderTypeDuo",2),h([y({type:Boolean,attribute:"is-animation-active"})],b.prototype,"isAnimationActive",2);customElements.define("ptb-field",b);var ht=class extends g{static{n(this,"Logo")}static{this.styles=v`
    .logo-container {
      height: 100%;
      width: 100%;
    }

    img {
      height: 100%;
      width: 100%;
    }
  `}render(){return $`
      <div class="logo-container">
        <img src="./assets/app/logo.svg">
      </div>
    `}};customElements.define("ptb-logo",ht);var pt=class extends g{static{n(this,"Layout")}static{this.styles=v`
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
  `}render(){return $`
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
    `}};customElements.define("ptb-layout",pt);var Pt=n(o=>typeof o!="string"&&"strTag"in o,"isStrTagged"),ft=n((o,t,e)=>{let s=o[0];for(let i=1;i<o.length;i++)s+=t[e?e[i-1]:i-1],s+=o[i];return s},"joinStringsAndValues");var X=n(o=>Pt(o)?ft(o.strings,o.values):o,"defaultMsg");var p=X;var Y=class{static{n(this,"Deferred")}constructor(){this.settled=!1,this.promise=new Promise((t,e)=>{this._resolve=t,this._reject=e})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}};var Jt=[];for(let o=0;o<256;o++)Jt[o]=(o>>4&15).toString(16)+(o&15).toString(16);var Yt=new Y;Yt.resolve();var L={normal:{type:"normal",label:p("Normal"),color:"#919AA2",icon:"./assets/types/normal.svg",effective:[],ineffective:["rock","steel"],nullified:["ghost"]},fighting:{type:"fighting",label:p("Fighting"),color:"#CF3E69",icon:"./assets/types/fighting.svg",effective:["normal","rock","steel","ice","dark"],ineffective:["flying","poison","bug","psychic","fairy"],nullified:["ghost"]},flying:{type:"flying",label:p("Flying"),color:"#90AADE",icon:"./assets/types/flying.svg",effective:["fighting","bug","grass"],ineffective:["rock","steel","electric"],nullified:[]},poison:{type:"poison",label:p("Poison"),color:"#AC6AC9",icon:"./assets/types/poison.svg",effective:["grass","fairy"],ineffective:["poison","ground","rock","ghost"],nullified:["steel"]},ground:{type:"ground",label:p("Ground"),color:"#DA7844",icon:"./assets/types/ground.svg",effective:["poison","rock","steel","fire","electric"],ineffective:["bug","grass"],nullified:["flying"]},rock:{type:"rock",label:p("Rock"),color:"#C8B88C",icon:"./assets/types/rock.svg",effective:["flying","bug","fire","ice"],ineffective:["fighting","ground","steel"],nullified:[]},bug:{type:"bug",label:p("Bug"),color:"#91C228",icon:"./assets/types/bug.svg",effective:["grass","psychic","dark"],ineffective:["fighting","flying","poison","ghost","steel","fire","fairy"],nullified:[]},ghost:{type:"ghost",label:p("Ghost"),color:"#5169AE",icon:"./assets/types/ghost.svg",effective:["ghost","psychic"],ineffective:["dark"],nullified:["normal"]},steel:{type:"steel",label:p("Steel"),color:"#5A8FA2",icon:"./assets/types/steel.svg",effective:["rock","ice","fairy"],ineffective:["steel","fire","water","electric"],nullified:[]},fire:{type:"fire",label:p("Fire"),color:"#FF9D53",icon:"./assets/types/fire.svg",effective:["bug","steel","grass","ice"],ineffective:["rock","fire","water","dragon"],nullified:[]},water:{type:"water",label:p("Water"),color:"#4C91D6",icon:"./assets/types/water.svg",effective:["ground","rock","fire"],ineffective:["water","grass","dragon"],nullified:[]},grass:{type:"grass",label:p("Grass"),color:"#63BC5B",icon:"./assets/types/grass.svg",effective:["ground","rock","water"],ineffective:["flying","poison","bug","steel","fire","grass","dragon"],nullified:[]},electric:{type:"electric",label:p("Electric"),color:"#F3D338",icon:"./assets/types/electric.svg",effective:["flying","water"],ineffective:["grass","electric","dragon"],nullified:["ground"]},psychic:{type:"psychic",label:p("Psychic"),color:"#F97277",icon:"./assets/types/psychic.svg",effective:["fighting","poison"],ineffective:["steel","psychic"],nullified:["dark"]},ice:{type:"ice",label:p("Ice"),color:"#75CFC1",icon:"./assets/types/ice.svg",effective:["flying","ground","grass","dragon"],ineffective:["steel","fire","water","ice"],nullified:[]},dragon:{type:"dragon",label:p("Dragon"),color:"#036DC5",icon:"./assets/types/dragon.svg",effective:["dragon"],ineffective:["steel"],nullified:["fairy"]},dark:{type:"dark",label:p("Dark"),color:"#5A5266",icon:"./assets/types/dark.svg",effective:["ghost","psychic"],ineffective:["fighting","dark","fairy"],nullified:[]},fairy:{type:"fairy",label:p("Fairy"),color:"#ED90E7",icon:"./assets/types/fairy.svg",effective:["fighting","dragon","dark"],ineffective:["poison","steel","fire"],nullified:[]}};var _=class extends g{constructor(){super(...arguments);this.attackerType=L[this.randomType()];this.defenderType=L[this.randomType()];this.userEffectiveness="neutral";this.correctEffectiveness="neutral";this.isFieldAnimationActive=!1;this.buttonStatesMap={nullified:"neutral",quarter:"neutral",half:"neutral",neutral:"neutral",double:"neutral",quadruple:"neutral"};this.buttonDisabledMap={nullified:!1,quarter:!1,half:!1,neutral:!1,double:!1,quadruple:!1};this.#t=1e3}static{n(this,"Game")}static{this.styles=v`
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
  `}#t;randomType(){let e=Object.keys(L),s=Math.floor(Math.random()*e.length);return e[s]}handleClick(e){let i=e.currentTarget.dataset.effectiveness;i&&(this.toggleDisabledButtons(!0),this.userEffectiveness=i,this.correctEffectiveness=this.getEffectiveness(),this.userEffectiveness===this.correctEffectiveness?this.buttonStatesMap[this.userEffectiveness]="right":this.userEffectiveness!==this.correctEffectiveness&&(this.buttonStatesMap[this.userEffectiveness]="wrong",this.buttonStatesMap[this.correctEffectiveness]="right"),setTimeout(()=>{this.resetButtons(),this.toggleDisabledButtons(!1),this.getTypes(),this.isFieldAnimationActive=!1},this.#t))}getTypes(){this.isFieldAnimationActive=!0,console.log(this.isFieldAnimationActive),this.attackerType=L[this.randomType()],this.defenderType=L[this.randomType()]}getEffectiveness(){return this.attackerType.effective.includes(this.defenderType.type)?"double":this.attackerType.ineffective.includes(this.defenderType.type)?"half":this.attackerType.nullified.includes(this.defenderType.type)?"nullified":"neutral"}resetButtons(){for(let e in this.buttonStatesMap)this.buttonStatesMap[e]="neutral";this.requestUpdate()}toggleDisabledButtons(e){for(let s in this.buttonDisabledMap)this.buttonDisabledMap[s]=e;this.requestUpdate()}render(){return $`
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
    `}};h([w()],_.prototype,"attackerType",2),h([w()],_.prototype,"defenderType",2),h([w()],_.prototype,"userEffectiveness",2),h([w()],_.prototype,"correctEffectiveness",2),h([w()],_.prototype,"isFieldAnimationActive",2),h([w()],_.prototype,"buttonStatesMap",2),h([w()],_.prototype,"buttonDisabledMap",2);customElements.define("ptb-view-game",_);
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
