var at=Object.defineProperty;var St=Object.getOwnPropertyDescriptor;var a=(r,t)=>at(r,"name",{value:t,configurable:!0});var ht=(r,t,e,s)=>{for(var i=s>1?void 0:s?St(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&at(t,e,i),i};var k=globalThis,L=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),lt=new WeakMap,C=class{static{a(this,"n")}constructor(t,e,s){if(this._$cssResult$=!0,s!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(L&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&lt.set(e,t))}return t}toString(){return this.cssText}},ct=a(r=>new C(typeof r=="string"?r:r+"",void 0,B),"r"),f=a((r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new C(e,r,B)},"i"),dt=a((r,t)=>{if(L)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=k.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},"S"),V=L?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ct(e)})(r):r;var{is:wt,defineProperty:Ct,getOwnPropertyDescriptor:Pt,getOwnPropertyNames:Ut,getOwnPropertySymbols:Ot,getPrototypeOf:Rt}=Object,j=globalThis,pt=j.trustedTypes,Mt=pt?pt.emptyScript:"",Ht=j.reactiveElementPolyfillSupport,P=a((r,t)=>r,"d"),U={toAttribute(r,t){switch(t){case Boolean:r=r?Mt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},z=a((r,t)=>!wt(r,t),"f"),ut={attribute:!0,type:String,converter:U,reflect:!1,useDefault:!1,hasChanged:z};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static{a(this,"y")}static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ct(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=Pt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let l=i?.call(this);o?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ut}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;let t=Rt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){let e=this.properties,s=[...Ut(e),...Ot(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(V(i))}else t!==void 0&&e.push(V(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:U).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:U;this._$Em=i,this[i]=n.fromAttribute(e,o.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??z)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s){let{wrapped:n}=o,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[P("elementProperties")]=new Map,_[P("finalized")]=new Map,Ht?.({ReactiveElement:_}),(j.reactiveElementVersions??=[]).push("2.1.0");var Q=globalThis,q=Q.trustedTypes,mt=q?q.createPolicy("lit-html",{createHTML:a(r=>r,"createHTML")}):void 0,yt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,vt="?"+y,Tt=`<${vt}>`,x=document,R=a(()=>x.createComment(""),"l"),M=a(r=>r===null||typeof r!="object"&&typeof r!="function","c"),X=Array.isArray,Nt=a(r=>X(r)||typeof r?.[Symbol.iterator]=="function","u"),W=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,$t=/>/g,v=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,_t=/"/g,At=/^(?:script|style|textarea|title)$/i,G=a(r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),"y"),$=G(1),Ft=G(2),Jt=G(3),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),bt=new WeakMap,A=x.createTreeWalker(x,129);function xt(r,t){if(!X(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return mt!==void 0?mt.createHTML(t):t}a(xt,"P");var kt=a((r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=O;for(let l=0;l<e;l++){let h=r[l],d,m,c=-1,g=0;for(;g<h.length&&(n.lastIndex=g,m=n.exec(h),m!==null);)g=n.lastIndex,n===O?m[1]==="!--"?n=ft:m[1]!==void 0?n=$t:m[2]!==void 0?(At.test(m[2])&&(i=RegExp("</"+m[2],"g")),n=v):m[3]!==void 0&&(n=v):n===v?m[0]===">"?(n=i??O,c=-1):m[1]===void 0?c=-2:(c=n.lastIndex-m[2].length,d=m[1],n=m[3]===void 0?v:m[3]==='"'?_t:gt):n===_t||n===gt?n=v:n===ft||n===$t?n=O:(n=v,i=void 0);let b=n===v&&r[l+1].startsWith("/>")?" ":"";o+=n===O?h+Tt:c>=0?(s.push(d),h.slice(0,c)+yt+h.slice(c)+y+b):h+y+(c===-2?l:b)}return[xt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},"V"),H=class r{static{a(this,"N")}constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,l=t.length-1,h=this.parts,[d,m]=kt(t,e);if(this.el=r.createElement(d,s),A.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=A.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(yt)){let g=m[n++],b=i.getAttribute(c).split(y),N=/([.?@])?(.*)/.exec(g);h.push({type:1,index:o,name:N[2],strings:b,ctor:N[1]==="."?Z:N[1]==="?"?F:N[1]==="@"?J:w}),i.removeAttribute(c)}else c.startsWith(y)&&(h.push({type:6,index:o}),i.removeAttribute(c));if(At.test(i.tagName)){let c=i.textContent.split(y),g=c.length-1;if(g>0){i.textContent=q?q.emptyScript:"";for(let b=0;b<g;b++)i.append(c[b],R()),A.nextNode(),h.push({type:2,index:++o});i.append(c[g],R())}}}else if(i.nodeType===8)if(i.data===vt)h.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(y,c+1))!==-1;)h.push({type:7,index:o}),c+=y.length-1}o++}}static createElement(t,e){let s=x.createElement("template");return s.innerHTML=t,s}};function S(r,t,e=r,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,o=M(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=S(r,i._$AS(r,t.values),i,s)),t}a(S,"S");var K=class{static{a(this,"M")}constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??x).importNode(e,!0);A.currentNode=i;let o=A.nextNode(),n=0,l=0,h=s[0];for(;h!==void 0;){if(n===h.index){let d;h.type===2?d=new T(o,o.nextSibling,this,t):h.type===1?d=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(d=new Y(o,this,t)),this._$AV.push(d),h=s[++l]}n!==h?.index&&(o=A.nextNode(),n++)}return A.currentNode=x,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},T=class r{static{a(this,"R")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),M(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Nt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(xt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new K(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new H(t)),e}k(t){X(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.O(R()),this.O(R()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},w=class{static{a(this,"k")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=S(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{let l=t,h,d;for(t=o[0],h=0;h<o.length-1;h++)d=S(this,l[s+h],e,h),d===E&&(d=this._$AH[h]),n||=!M(d)||d!==this._$AH[h],d===p?t=p:t!==p&&(t+=(d??"")+o[h+1]),this._$AH[h]=d}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Z=class extends w{static{a(this,"H")}constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},F=class extends w{static{a(this,"I")}constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},J=class extends w{static{a(this,"L")}constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??p)===E)return;let s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Y=class{static{a(this,"z")}constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}};var Lt=Q.litHtmlPolyfillSupport;Lt?.(H,T),(Q.litHtmlVersions??=[]).push("3.3.0");var Et=a((r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let o=e?.renderBefore??null;s._$litPart$=i=new T(t.insertBefore(R(),o),o,void 0,e??{})}return i._$AI(r),i},"B");var tt=globalThis,u=class extends _{static{a(this,"i")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};u._$litElement$=!0,u.finalized=!0,tt.litElementHydrateSupport?.({LitElement:u});var jt=tt.litElementPolyfillSupport;jt?.({LitElement:u});(tt.litElementVersions??=[]).push("4.2.0");var et=class extends u{static{a(this,"App")}static{this.styles=f`

	`}render(){return $`
			<ptb-view-game></ptb-view-game>
		`}};customElements.define("ptb-app",et);var zt={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:z},qt=a((r=zt,t,e)=>{let{kind:s,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){let{name:n}=e;return{set(l){let h=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,h,r)},init(l){return l!==void 0&&this.C(n,void 0,r,l),l}}}if(s==="setter"){let{name:n}=e;return function(l){let h=this[n];t.call(this,l),this.requestUpdate(n,h,r)}}throw Error("Unsupported decorator location: "+s)},"r");function st(r){return(t,e)=>typeof e=="object"?qt(r,t,e):((s,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}a(st,"n");var I=class extends u{constructor(){super(...arguments);this.direction="upward"}static{a(this,"Button")}static{this.styles=f`
    :host {
      --button-font: var(--font);
      --button-font-size: 46px;
      
      --font-color: #2A2A2A;
      --background-color: #ffffff;
      --shadow-color: #2A2A2A;

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
        border-radius: 2vh;
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
      border-radius: 2vh;
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
  `}render(){return $`
      <div class="button-container">
        <button>
          <slot></slot>
        </button>
      </div>
    `}};ht([st()],I.prototype,"direction",2);customElements.define("ptb-button",I);var it=class extends u{static{a(this,"Field")}static{this.styles=f`
    :host {
      --background-color: rgba(255,255,255,0.1); 
      --border-color: rgba(255,255,255,0.1);
      --border-width: 5px;
    }

    .field-container {
      height: 100%;
      width: 100%;
      background-color: var(--background-color);
      border-radius: 2vh;
      border: var(--border-width) solid var(--border-color);
      box-sizing: border-box;
    }
  `}render(){return $`
      <div class="field-container">
        
      </div>
    `}};customElements.define("ptb-field",it);var rt=class extends u{static{a(this,"Logo")}static{this.styles=f`
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
        <img src="/assets/app/logo.svg">
      </div>
    `}};customElements.define("ptb-logo",rt);var ot=class extends u{static{a(this,"Layout")}static{this.styles=f`
    :host {
      --content-gap: 20px;
    }

    .layout {
      width: 100dvw;
      height: 100dvh;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-sizing: border-box;
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
      <div class="layout">
        <div class="header">
          <ptb-logo></ptb-logo>
        </div>
        
        <slot></slot>

        <div class="footer">
          Daniel Meisler
        </div>
      </div>
    `}};customElements.define("ptb-layout",ot);var nt=class extends u{static{a(this,"Game")}static{this.styles=f`
    .game {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      max-width: 500px;
      gap: 20px;
      box-sizing: border-box;
    }

    .battle-field {
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
    }

    .button-grid {
      width: 100%;
      height: 100%;
      aspect-ratio: 2 / 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  `}render(){return $`
      <ptb-layout>
        <div class="game">
          <div class="battle-field">
            <ptb-field></ptb-field>
          </div>

          <div class="button-grid">
            <ptb-button>0x</ptb-button>
            <ptb-button>¼x</ptb-button>
            <ptb-button>½x</ptb-button>
            <ptb-button>1x</ptb-button>
            <ptb-button>2x</ptb-button>
            <ptb-button>4x</ptb-button>
          </div>
        </div>
      </ptb-layout>
    `}};customElements.define("ptb-view-game",nt);
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
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
