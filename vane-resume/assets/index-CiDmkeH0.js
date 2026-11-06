var Bp=Object.defineProperty;var Vp=(e,t,n)=>t in e?Bp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $a=(e,t,n)=>Vp(e,typeof t!="symbol"?t+"":t,n);function Wp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var MS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uc={exports:{}},Zo={},cc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=Symbol.for("react.element"),Kp=Symbol.for("react.portal"),Qp=Symbol.for("react.fragment"),Yp=Symbol.for("react.strict_mode"),Jp=Symbol.for("react.profiler"),qp=Symbol.for("react.provider"),Gp=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),Zp=Symbol.for("react.suspense"),ef=Symbol.for("react.memo"),tf=Symbol.for("react.lazy"),za=Symbol.iterator;function nf(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pc=Object.assign,fc={};function Nn(e,t,n){this.props=e,this.context=t,this.refs=fc,this.updater=n||dc}Nn.prototype.isReactComponent={};Nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mc(){}mc.prototype=Nn.prototype;function al(e,t,n){this.props=e,this.context=t,this.refs=fc,this.updater=n||dc}var ul=al.prototype=new mc;ul.constructor=al;pc(ul,Nn.prototype);ul.isPureReactComponent=!0;var Na=Array.isArray,gc=Object.prototype.hasOwnProperty,cl={current:null},hc={key:!0,ref:!0,__self:!0,__source:!0};function yc(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)gc.call(t,r)&&!hc.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Tr,type:e,key:i,ref:s,props:o,_owner:cl.current}}function rf(e,t){return{$$typeof:Tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr}function of(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ma=/\/+/g;function bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?of(""+e.key):t.toString(36)}function mo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Tr:case Kp:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+bi(s,0):r,Na(o)?(n="",e!=null&&(n=e.replace(Ma,"$&/")+"/"),mo(o,t,n,"",function(c){return c})):o!=null&&(dl(o)&&(o=rf(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Ma,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Na(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+bi(i,l);s+=mo(i,t,n,u,o)}else if(u=nf(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+bi(i,l++),s+=mo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Kr(e,t,n){if(e==null)return e;var r=[],o=0;return mo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function sf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},go={transition:null},lf={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:go,ReactCurrentOwner:cl};function vc(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Nn;M.Fragment=Qp;M.Profiler=Jp;M.PureComponent=al;M.StrictMode=Yp;M.Suspense=Zp;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lf;M.act=vc;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pc({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=cl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)gc.call(t,u)&&!hc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Tr,type:e.type,key:o,ref:i,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:Gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qp,_context:e},e.Consumer=e};M.createElement=yc;M.createFactory=function(e){var t=yc.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Xp,render:e}};M.isValidElement=dl;M.lazy=function(e){return{$$typeof:tf,_payload:{_status:-1,_result:e},_init:sf}};M.memo=function(e,t){return{$$typeof:ef,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=go.transition;go.transition={};try{e()}finally{go.transition=t}};M.unstable_act=vc;M.useCallback=function(e,t){return Pe.current.useCallback(e,t)};M.useContext=function(e){return Pe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};M.useEffect=function(e,t){return Pe.current.useEffect(e,t)};M.useId=function(){return Pe.current.useId()};M.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Pe.current.useMemo(e,t)};M.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};M.useRef=function(e){return Pe.current.useRef(e)};M.useState=function(e){return Pe.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return Pe.current.useTransition()};M.version="18.3.1";cc.exports=M;var x=cc.exports;const Or=Hp(x),af=Wp({__proto__:null,default:Or},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf=x,cf=Symbol.for("react.element"),df=Symbol.for("react.fragment"),pf=Object.prototype.hasOwnProperty,ff=uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mf={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)pf.call(t,r)&&!mf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:cf,type:e,key:i,ref:s,props:o,_owner:ff.current}}Zo.Fragment=df;Zo.jsx=xc;Zo.jsxs=xc;uc.exports=Zo;var a=uc.exports,ss={},wc={exports:{}},Ne={},Sc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,O){var z=E.length;E.push(O);e:for(;0<z;){var H=z-1>>>1,ee=E[H];if(0<o(ee,O))E[H]=O,E[z]=ee,z=H;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var O=E[0],z=E.pop();if(z!==O){E[0]=z;e:for(var H=0,ee=E.length,F=ee>>>1;H<F;){var I=2*(H+1)-1,V=E[I],ue=I+1,re=E[ue];if(0>o(V,z))ue<ee&&0>o(re,V)?(E[H]=re,E[ue]=z,H=ue):(E[H]=V,E[I]=z,H=I);else if(ue<ee&&0>o(re,z))E[H]=re,E[ue]=z,H=ue;else break e}}return O}function o(E,O){var z=E.sortIndex-O.sortIndex;return z!==0?z:E.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,p=null,f=3,y=!1,w=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=E)r(c),O.sortIndex=O.expirationTime,t(u,O);else break;O=n(c)}}function S(E){if(v=!1,h(E),!w)if(n(u)!==null)w=!0,De(j);else{var O=n(c);O!==null&&Le(S,O.startTime-E)}}function j(E,O){w=!1,v&&(v=!1,g(T),T=-1),y=!0;var z=f;try{for(h(O),p=n(u);p!==null&&(!(p.expirationTime>O)||E&&!N());){var H=p.callback;if(typeof H=="function"){p.callback=null,f=p.priorityLevel;var ee=H(p.expirationTime<=O);O=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(u)&&r(u),h(O)}else r(u);p=n(u)}if(p!==null)var F=!0;else{var I=n(c);I!==null&&Le(S,I.startTime-O),F=!1}return F}finally{p=null,f=z,y=!1}}var R=!1,b=null,T=-1,P=5,C=-1;function N(){return!(e.unstable_now()-C<P)}function q(){if(b!==null){var E=e.unstable_now();C=E;var O=!0;try{O=b(!0,E)}finally{O?L():(R=!1,b=null)}}else R=!1}var L;if(typeof m=="function")L=function(){m(q)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,Xe=ne.port2;ne.port1.onmessage=q,L=function(){Xe.postMessage(null)}}else L=function(){k(q,0)};function De(E){b=E,R||(R=!0,L())}function Le(E,O){T=k(function(){E(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,De(j))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var z=f;f=O;try{return E()}finally{f=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,O){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var z=f;f=E;try{return O()}finally{f=z}},e.unstable_scheduleCallback=function(E,O,z){var H=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?H+z:H):z=H,E){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=z+ee,E={id:d++,callback:O,priorityLevel:E,startTime:z,expirationTime:ee,sortIndex:-1},z>H?(E.sortIndex=z,t(c,E),n(u)===null&&E===n(c)&&(v?(g(T),T=-1):v=!0,Le(S,z-H))):(E.sortIndex=ee,t(u,E),w||y||(w=!0,De(j))),E},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(E){var O=f;return function(){var z=f;f=O;try{return E.apply(this,arguments)}finally{f=z}}}})(kc);Sc.exports=kc;var gf=Sc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=x,ze=gf;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pc=new Set,cr={};function en(e,t){Rn(e,t),Rn(e+"Capture",t)}function Rn(e,t){for(cr[e]=t,e=0;e<t.length;e++)Pc.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ls=Object.prototype.hasOwnProperty,yf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,La={},Aa={};function vf(e){return ls.call(Aa,e)?!0:ls.call(La,e)?!1:yf.test(e)?Aa[e]=!0:(La[e]=!0,!1)}function xf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wf(e,t,n,r){if(t===null||typeof t>"u"||xf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var pl=/[\-:]([a-z])/g;function fl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pl,fl);he[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pl,fl);he[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pl,fl);he[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function ml(e,t,n,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wf(t,n,o,r)&&(n=null),r||o===null?vf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),un=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),gl=Symbol.for("react.strict_mode"),as=Symbol.for("react.profiler"),_c=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),hl=Symbol.for("react.forward_ref"),us=Symbol.for("react.suspense"),cs=Symbol.for("react.suspense_list"),yl=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),jc=Symbol.for("react.offscreen"),Ia=Symbol.iterator;function Un(e){return e===null||typeof e!="object"?null:(e=Ia&&e[Ia]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Ei;function qn(e){if(Ei===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ei=t&&t[1]||""}return`
`+Ei+e}var Di=!1;function Ti(e,t){if(!e||Di)return"";Di=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{Di=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qn(e):""}function Sf(e){switch(e.tag){case 5:return qn(e.type);case 16:return qn("Lazy");case 13:return qn("Suspense");case 19:return qn("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function ds(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case un:return"Portal";case as:return"Profiler";case gl:return"StrictMode";case us:return"Suspense";case cs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cc:return(e.displayName||"Context")+".Consumer";case _c:return(e._context.displayName||"Context")+".Provider";case hl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yl:return t=e.displayName||null,t!==null?t:ds(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return ds(e(t))}catch{}}return null}function kf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ds(t);case 8:return t===gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pf(e){var t=Rc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Pf(e))}function bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ps(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ec(e,t){t=t.checked,t!=null&&ml(e,"checked",t,!1)}function fs(e,t){Ec(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ms(e,t.type,n):t.hasOwnProperty("defaultValue")&&ms(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ua(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ms(e,t,n){(t!=="number"||jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gn=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function gs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ba(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Gn(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function Dc(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Va(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jr,Oc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_f=["Webkit","ms","Moz","O"];Object.keys(tr).forEach(function(e){_f.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),tr[t]=tr[e]})});function $c(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||tr.hasOwnProperty(e)&&tr[e]?(""+t).trim():t+"px"}function zc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=$c(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Cf=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ys(e,t){if(t){if(Cf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function vs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xs=null;function vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,kn=null,Pn=null;function Wa(e){if(e=Nr(e)){if(typeof ws!="function")throw Error(_(280));var t=e.stateNode;t&&(t=oi(t),ws(e.stateNode,e.type,t))}}function Nc(e){kn?Pn?Pn.push(e):Pn=[e]:kn=e}function Mc(){if(kn){var e=kn,t=Pn;if(Pn=kn=null,Wa(e),t)for(e=0;e<t.length;e++)Wa(t[e])}}function Lc(e,t){return e(t)}function Ac(){}var Oi=!1;function Ic(e,t,n){if(Oi)return e(t,n);Oi=!0;try{return Lc(e,t,n)}finally{Oi=!1,(kn!==null||Pn!==null)&&(Ac(),Mc())}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var r=oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Ss=!1;if(ct)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Ss=!1}function jf(e,t,n,r,o,i,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var nr=!1,Ro=null,bo=!1,ks=null,Rf={onError:function(e){nr=!0,Ro=e}};function bf(e,t,n,r,o,i,s,l,u){nr=!1,Ro=null,jf.apply(Rf,arguments)}function Ef(e,t,n,r,o,i,s,l,u){if(bf.apply(this,arguments),nr){if(nr){var c=Ro;nr=!1,Ro=null}else throw Error(_(198));bo||(bo=!0,ks=c)}}function tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ha(e){if(tn(e)!==e)throw Error(_(188))}function Df(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ha(o),e;if(i===r)return Ha(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Uc(e){return e=Df(e),e!==null?Bc(e):null}function Bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bc(e);if(t!==null)return t;e=e.sibling}return null}var Vc=ze.unstable_scheduleCallback,Ka=ze.unstable_cancelCallback,Tf=ze.unstable_shouldYield,Of=ze.unstable_requestPaint,oe=ze.unstable_now,$f=ze.unstable_getCurrentPriorityLevel,xl=ze.unstable_ImmediatePriority,Wc=ze.unstable_UserBlockingPriority,Eo=ze.unstable_NormalPriority,zf=ze.unstable_LowPriority,Hc=ze.unstable_IdlePriority,ei=null,rt=null;function Nf(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Af,Mf=Math.log,Lf=Math.LN2;function Af(e){return e>>>=0,e===0?32:31-(Mf(e)/Lf|0)|0}var qr=64,Gr=4194304;function Xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Do(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Xn(l):(i&=s,i!==0&&(r=Xn(i)))}else s=n&~o,s!==0?r=Xn(s):i!==0&&(r=Xn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function If(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ff(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Je(i),l=1<<s,u=o[s];u===-1?(!(l&n)||l&r)&&(o[s]=If(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function Ps(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kc(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function $i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Uf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function wl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function Qc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yc,Sl,Jc,qc,Gc,_s=!1,Xr=[],_t=null,Ct=null,jt=null,fr=new Map,mr=new Map,xt=[],Bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qa(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(t.pointerId)}}function Vn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Nr(t),t!==null&&Sl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Vf(e,t,n,r,o){switch(t){case"focusin":return _t=Vn(_t,e,t,n,r,o),!0;case"dragenter":return Ct=Vn(Ct,e,t,n,r,o),!0;case"mouseover":return jt=Vn(jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return fr.set(i,Vn(fr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,mr.set(i,Vn(mr.get(i)||null,e,t,n,r,o)),!0}return!1}function Xc(e){var t=Wt(e.target);if(t!==null){var n=tn(t);if(n!==null){if(t=n.tag,t===13){if(t=Fc(n),t!==null){e.blockedOn=t,Gc(e.priority,function(){Jc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xs=r,n.target.dispatchEvent(r),xs=null}else return t=Nr(n),t!==null&&Sl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ya(e,t,n){ho(e)&&n.delete(t)}function Wf(){_s=!1,_t!==null&&ho(_t)&&(_t=null),Ct!==null&&ho(Ct)&&(Ct=null),jt!==null&&ho(jt)&&(jt=null),fr.forEach(Ya),mr.forEach(Ya)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,_s||(_s=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Wf)))}function gr(e){function t(o){return Wn(o,e)}if(0<Xr.length){Wn(Xr[0],e);for(var n=1;n<Xr.length;n++){var r=Xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Wn(_t,e),Ct!==null&&Wn(Ct,e),jt!==null&&Wn(jt,e),fr.forEach(t),mr.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)Xc(n),n.blockedOn===null&&xt.shift()}var _n=mt.ReactCurrentBatchConfig,To=!0;function Hf(e,t,n,r){var o=U,i=_n.transition;_n.transition=null;try{U=1,kl(e,t,n,r)}finally{U=o,_n.transition=i}}function Kf(e,t,n,r){var o=U,i=_n.transition;_n.transition=null;try{U=4,kl(e,t,n,r)}finally{U=o,_n.transition=i}}function kl(e,t,n,r){if(To){var o=Cs(e,t,n,r);if(o===null)Vi(e,t,r,Oo,n),Qa(e,r);else if(Vf(o,e,t,n,r))r.stopPropagation();else if(Qa(e,r),t&4&&-1<Bf.indexOf(e)){for(;o!==null;){var i=Nr(o);if(i!==null&&Yc(i),i=Cs(e,t,n,r),i===null&&Vi(e,t,r,Oo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Vi(e,t,r,null,n)}}var Oo=null;function Cs(e,t,n,r){if(Oo=null,e=vl(r),e=Wt(e),e!==null)if(t=tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oo=e,null}function Zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($f()){case xl:return 1;case Wc:return 4;case Eo:case zf:return 16;case Hc:return 536870912;default:return 16}default:return 16}}var St=null,Pl=null,yo=null;function ed(){if(yo)return yo;var e,t=Pl,n=t.length,r,o="value"in St?St.value:St.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return yo=o.slice(e,1<r?1-r:void 0)}function vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Ja(){return!1}function Me(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zr:Ja,this.isPropagationStopped=Ja,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Me(Mn),zr=Z({},Mn,{view:0,detail:0}),Qf=Me(zr),zi,Ni,Hn,ti=Z({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hn&&(Hn&&e.type==="mousemove"?(zi=e.screenX-Hn.screenX,Ni=e.screenY-Hn.screenY):Ni=zi=0,Hn=e),zi)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),qa=Me(ti),Yf=Z({},ti,{dataTransfer:0}),Jf=Me(Yf),qf=Z({},zr,{relatedTarget:0}),Mi=Me(qf),Gf=Z({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xf=Me(Gf),Zf=Z({},Mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),em=Me(Zf),tm=Z({},Mn,{data:0}),Ga=Me(tm),nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=om[e])?!!t[e]:!1}function Cl(){return im}var sm=Z({},zr,{key:function(e){if(e.key){var t=nm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lm=Me(sm),am=Z({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xa=Me(am),um=Z({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),cm=Me(um),dm=Z({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pm=Me(dm),fm=Z({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=Me(fm),gm=[9,13,27,32],jl=ct&&"CompositionEvent"in window,rr=null;ct&&"documentMode"in document&&(rr=document.documentMode);var hm=ct&&"TextEvent"in window&&!rr,td=ct&&(!jl||rr&&8<rr&&11>=rr),Za=" ",eu=!1;function nd(e,t){switch(e){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function ym(e,t){switch(e){case"compositionend":return rd(t);case"keypress":return t.which!==32?null:(eu=!0,Za);case"textInput":return e=t.data,e===Za&&eu?null:e;default:return null}}function vm(e,t){if(dn)return e==="compositionend"||!jl&&nd(e,t)?(e=ed(),yo=Pl=St=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return td&&t.locale!=="ko"?null:t.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xm[e.type]:t==="textarea"}function od(e,t,n,r){Nc(r),t=$o(t,"onChange"),0<t.length&&(n=new _l("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,hr=null;function wm(e){gd(e,0)}function ni(e){var t=mn(e);if(bc(t))return e}function Sm(e,t){if(e==="change")return t}var id=!1;if(ct){var Li;if(ct){var Ai="oninput"in document;if(!Ai){var nu=document.createElement("div");nu.setAttribute("oninput","return;"),Ai=typeof nu.oninput=="function"}Li=Ai}else Li=!1;id=Li&&(!document.documentMode||9<document.documentMode)}function ru(){or&&(or.detachEvent("onpropertychange",sd),hr=or=null)}function sd(e){if(e.propertyName==="value"&&ni(hr)){var t=[];od(t,hr,e,vl(e)),Ic(wm,t)}}function km(e,t,n){e==="focusin"?(ru(),or=t,hr=n,or.attachEvent("onpropertychange",sd)):e==="focusout"&&ru()}function Pm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(hr)}function _m(e,t){if(e==="click")return ni(t)}function Cm(e,t){if(e==="input"||e==="change")return ni(t)}function jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:jm;function yr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ls.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,t){var n=ou(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ou(n)}}function ld(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ld(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(){for(var e=window,t=jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jo(e.document)}return t}function Rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rm(e){var t=ad(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ld(n.ownerDocument.documentElement,n)){if(r!==null&&Rl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=iu(n,i);var s=iu(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bm=ct&&"documentMode"in document&&11>=document.documentMode,pn=null,js=null,ir=null,Rs=!1;function su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rs||pn==null||pn!==jo(r)||(r=pn,"selectionStart"in r&&Rl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ir&&yr(ir,r)||(ir=r,r=$o(js,"onSelect"),0<r.length&&(t=new _l("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},Ii={},ud={};ct&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function ri(e){if(Ii[e])return Ii[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ud)return Ii[e]=t[n];return e}var cd=ri("animationend"),dd=ri("animationiteration"),pd=ri("animationstart"),fd=ri("transitionend"),md=new Map,lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){md.set(e,t),en(t,[e])}for(var Fi=0;Fi<lu.length;Fi++){var Ui=lu[Fi],Em=Ui.toLowerCase(),Dm=Ui[0].toUpperCase()+Ui.slice(1);Mt(Em,"on"+Dm)}Mt(cd,"onAnimationEnd");Mt(dd,"onAnimationIteration");Mt(pd,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(fd,"onTransitionEnd");Rn("onMouseEnter",["mouseout","mouseover"]);Rn("onMouseLeave",["mouseout","mouseover"]);Rn("onPointerEnter",["pointerout","pointerover"]);Rn("onPointerLeave",["pointerout","pointerover"]);en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));en("onBeforeInput",["compositionend","keypress","textInput","paste"]);en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));function au(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ef(r,t,void 0,e),e.currentTarget=null}function gd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&o.isPropagationStopped())break e;au(o,l,c),i=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&o.isPropagationStopped())break e;au(o,l,c),i=u}}}if(bo)throw e=ks,bo=!1,ks=null,e}function Q(e,t){var n=t[Os];n===void 0&&(n=t[Os]=new Set);var r=e+"__bubble";n.has(r)||(hd(t,e,2,!1),n.add(r))}function Bi(e,t,n){var r=0;t&&(r|=4),hd(n,e,r,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[to]){e[to]=!0,Pc.forEach(function(n){n!=="selectionchange"&&(Tm.has(n)||Bi(n,!1,e),Bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,Bi("selectionchange",!1,t))}}function hd(e,t,n,r){switch(Zc(t)){case 1:var o=Hf;break;case 4:o=Kf;break;default:o=kl}n=o.bind(null,t,n,e),o=void 0,!Ss||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Vi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;l!==null;){if(s=Wt(l),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}l=l.parentNode}}r=r.return}Ic(function(){var c=i,d=vl(n),p=[];e:{var f=md.get(e);if(f!==void 0){var y=_l,w=e;switch(e){case"keypress":if(vo(n)===0)break e;case"keydown":case"keyup":y=lm;break;case"focusin":w="focus",y=Mi;break;case"focusout":w="blur",y=Mi;break;case"beforeblur":case"afterblur":y=Mi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Jf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=cm;break;case cd:case dd:case pd:y=Xf;break;case fd:y=pm;break;case"scroll":y=Qf;break;case"wheel":y=mm;break;case"copy":case"cut":case"paste":y=em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Xa}var v=(t&4)!==0,k=!v&&e==="scroll",g=v?f!==null?f+"Capture":null:f;v=[];for(var m=c,h;m!==null;){h=m;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,g!==null&&(S=pr(m,g),S!=null&&v.push(xr(m,S,h)))),k)break;m=m.return}0<v.length&&(f=new y(f,w,null,n,d),p.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==xs&&(w=n.relatedTarget||n.fromElement)&&(Wt(w)||w[dt]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?Wt(w):null,w!==null&&(k=tn(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(v=qa,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Xa,S="onPointerLeave",g="onPointerEnter",m="pointer"),k=y==null?f:mn(y),h=w==null?f:mn(w),f=new v(S,m+"leave",y,n,d),f.target=k,f.relatedTarget=h,S=null,Wt(d)===c&&(v=new v(g,m+"enter",w,n,d),v.target=h,v.relatedTarget=k,S=v),k=S,y&&w)t:{for(v=y,g=w,m=0,h=v;h;h=ln(h))m++;for(h=0,S=g;S;S=ln(S))h++;for(;0<m-h;)v=ln(v),m--;for(;0<h-m;)g=ln(g),h--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=ln(v),g=ln(g)}v=null}else v=null;y!==null&&uu(p,f,y,v,!1),w!==null&&k!==null&&uu(p,k,w,v,!0)}}e:{if(f=c?mn(c):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var j=Sm;else if(tu(f))if(id)j=Cm;else{j=Pm;var R=km}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=_m);if(j&&(j=j(e,c))){od(p,j,n,d);break e}R&&R(e,f,c),e==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&ms(f,"number",f.value)}switch(R=c?mn(c):window,e){case"focusin":(tu(R)||R.contentEditable==="true")&&(pn=R,js=c,ir=null);break;case"focusout":ir=js=pn=null;break;case"mousedown":Rs=!0;break;case"contextmenu":case"mouseup":case"dragend":Rs=!1,su(p,n,d);break;case"selectionchange":if(bm)break;case"keydown":case"keyup":su(p,n,d)}var b;if(jl)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else dn?nd(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(td&&n.locale!=="ko"&&(dn||T!=="onCompositionStart"?T==="onCompositionEnd"&&dn&&(b=ed()):(St=d,Pl="value"in St?St.value:St.textContent,dn=!0)),R=$o(c,T),0<R.length&&(T=new Ga(T,e,null,n,d),p.push({event:T,listeners:R}),b?T.data=b:(b=rd(n),b!==null&&(T.data=b)))),(b=hm?ym(e,n):vm(e,n))&&(c=$o(c,"onBeforeInput"),0<c.length&&(d=new Ga("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=b))}gd(p,t)})}function xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $o(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=pr(e,n),i!=null&&r.unshift(xr(e,i,o)),i=pr(e,t),i!=null&&r.push(xr(e,i,o))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uu(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,o?(u=pr(n,i),u!=null&&s.unshift(xr(n,u,l))):o||(u=pr(n,i),u!=null&&s.push(xr(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Om=/\r\n?/g,$m=/\u0000|\uFFFD/g;function cu(e){return(typeof e=="string"?e:""+e).replace(Om,`
`).replace($m,"")}function no(e,t,n){if(t=cu(t),cu(e)!==t&&n)throw Error(_(425))}function zo(){}var bs=null,Es=null;function Ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ts=typeof setTimeout=="function"?setTimeout:void 0,zm=typeof clearTimeout=="function"?clearTimeout:void 0,du=typeof Promise=="function"?Promise:void 0,Nm=typeof queueMicrotask=="function"?queueMicrotask:typeof du<"u"?function(e){return du.resolve(null).then(e).catch(Mm)}:Ts;function Mm(e){setTimeout(function(){throw e})}function Wi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);gr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),nt="__reactFiber$"+Ln,wr="__reactProps$"+Ln,dt="__reactContainer$"+Ln,Os="__reactEvents$"+Ln,Lm="__reactListeners$"+Ln,Am="__reactHandles$"+Ln;function Wt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pu(e);e!==null;){if(n=e[nt])return n;e=pu(e)}return t}e=n,n=e.parentNode}return null}function Nr(e){return e=e[nt]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function oi(e){return e[wr]||null}var $s=[],gn=-1;function Lt(e){return{current:e}}function Y(e){0>gn||(e.current=$s[gn],$s[gn]=null,gn--)}function W(e,t){gn++,$s[gn]=e.current,e.current=t}var zt={},we=Lt(zt),Re=Lt(!1),Jt=zt;function bn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function be(e){return e=e.childContextTypes,e!=null}function No(){Y(Re),Y(we)}function fu(e,t,n){if(we.current!==zt)throw Error(_(168));W(we,t),W(Re,n)}function yd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,kf(e)||"Unknown",o));return Z({},n,r)}function Mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Jt=we.current,W(we,e),W(Re,Re.current),!0}function mu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=yd(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,Y(Re),Y(we),W(we,e)):Y(Re),W(Re,n)}var st=null,ii=!1,Hi=!1;function vd(e){st===null?st=[e]:st.push(e)}function Im(e){ii=!0,vd(e)}function At(){if(!Hi&&st!==null){Hi=!0;var e=0,t=U;try{var n=st;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}st=null,ii=!1}catch(o){throw st!==null&&(st=st.slice(e+1)),Vc(xl,At),o}finally{U=t,Hi=!1}}return null}var hn=[],yn=0,Lo=null,Ao=0,Ie=[],Fe=0,qt=null,lt=1,at="";function Ft(e,t){hn[yn++]=Ao,hn[yn++]=Lo,Lo=e,Ao=t}function xd(e,t,n){Ie[Fe++]=lt,Ie[Fe++]=at,Ie[Fe++]=qt,qt=e;var r=lt;e=at;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,lt=1<<32-Je(t)+o|n<<o|r,at=i+e}else lt=1<<i|n<<o|r,at=e}function bl(e){e.return!==null&&(Ft(e,1),xd(e,1,0))}function El(e){for(;e===Lo;)Lo=hn[--yn],hn[yn]=null,Ao=hn[--yn],hn[yn]=null;for(;e===qt;)qt=Ie[--Fe],Ie[Fe]=null,at=Ie[--Fe],Ie[Fe]=null,lt=Ie[--Fe],Ie[Fe]=null}var $e=null,Oe=null,J=!1,Ye=null;function wd(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Oe=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:lt,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Oe=null,!0):!1;default:return!1}}function zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ns(e){if(J){var t=Oe;if(t){var n=t;if(!gu(e,t)){if(zs(e))throw Error(_(418));t=Rt(n.nextSibling);var r=$e;t&&gu(e,t)?wd(r,n):(e.flags=e.flags&-4097|2,J=!1,$e=e)}}else{if(zs(e))throw Error(_(418));e.flags=e.flags&-4097|2,J=!1,$e=e}}}function hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function ro(e){if(e!==$e)return!1;if(!J)return hu(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ds(e.type,e.memoizedProps)),t&&(t=Oe)){if(zs(e))throw Sd(),Error(_(418));for(;t;)wd(e,t),t=Rt(t.nextSibling)}if(hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=$e?Rt(e.stateNode.nextSibling):null;return!0}function Sd(){for(var e=Oe;e;)e=Rt(e.nextSibling)}function En(){Oe=$e=null,J=!1}function Dl(e){Ye===null?Ye=[e]:Ye.push(e)}var Fm=mt.ReactCurrentBatchConfig;function Kn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function kd(e){function t(g,m){if(e){var h=g.deletions;h===null?(g.deletions=[m],g.flags|=16):h.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=Tt(g,m),g.index=0,g.sibling=null,g}function i(g,m,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<m?(g.flags|=2,m):h):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,h,S){return m===null||m.tag!==6?(m=Xi(h,g.mode,S),m.return=g,m):(m=o(m,h),m.return=g,m)}function u(g,m,h,S){var j=h.type;return j===cn?d(g,m,h.props.children,S,h.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yt&&yu(j)===m.type)?(S=o(m,h.props),S.ref=Kn(g,m,h),S.return=g,S):(S=Co(h.type,h.key,h.props,null,g.mode,S),S.ref=Kn(g,m,h),S.return=g,S)}function c(g,m,h,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=Zi(h,g.mode,S),m.return=g,m):(m=o(m,h.children||[]),m.return=g,m)}function d(g,m,h,S,j){return m===null||m.tag!==7?(m=Yt(h,g.mode,S,j),m.return=g,m):(m=o(m,h),m.return=g,m)}function p(g,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Xi(""+m,g.mode,h),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qr:return h=Co(m.type,m.key,m.props,null,g.mode,h),h.ref=Kn(g,null,m),h.return=g,h;case un:return m=Zi(m,g.mode,h),m.return=g,m;case yt:var S=m._init;return p(g,S(m._payload),h)}if(Gn(m)||Un(m))return m=Yt(m,g.mode,h,null),m.return=g,m;oo(g,m)}return null}function f(g,m,h,S){var j=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return j!==null?null:l(g,m,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qr:return h.key===j?u(g,m,h,S):null;case un:return h.key===j?c(g,m,h,S):null;case yt:return j=h._init,f(g,m,j(h._payload),S)}if(Gn(h)||Un(h))return j!==null?null:d(g,m,h,S,null);oo(g,h)}return null}function y(g,m,h,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(h)||null,l(m,g,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Qr:return g=g.get(S.key===null?h:S.key)||null,u(m,g,S,j);case un:return g=g.get(S.key===null?h:S.key)||null,c(m,g,S,j);case yt:var R=S._init;return y(g,m,h,R(S._payload),j)}if(Gn(S)||Un(S))return g=g.get(h)||null,d(m,g,S,j,null);oo(m,S)}return null}function w(g,m,h,S){for(var j=null,R=null,b=m,T=m=0,P=null;b!==null&&T<h.length;T++){b.index>T?(P=b,b=null):P=b.sibling;var C=f(g,b,h[T],S);if(C===null){b===null&&(b=P);break}e&&b&&C.alternate===null&&t(g,b),m=i(C,m,T),R===null?j=C:R.sibling=C,R=C,b=P}if(T===h.length)return n(g,b),J&&Ft(g,T),j;if(b===null){for(;T<h.length;T++)b=p(g,h[T],S),b!==null&&(m=i(b,m,T),R===null?j=b:R.sibling=b,R=b);return J&&Ft(g,T),j}for(b=r(g,b);T<h.length;T++)P=y(b,g,T,h[T],S),P!==null&&(e&&P.alternate!==null&&b.delete(P.key===null?T:P.key),m=i(P,m,T),R===null?j=P:R.sibling=P,R=P);return e&&b.forEach(function(N){return t(g,N)}),J&&Ft(g,T),j}function v(g,m,h,S){var j=Un(h);if(typeof j!="function")throw Error(_(150));if(h=j.call(h),h==null)throw Error(_(151));for(var R=j=null,b=m,T=m=0,P=null,C=h.next();b!==null&&!C.done;T++,C=h.next()){b.index>T?(P=b,b=null):P=b.sibling;var N=f(g,b,C.value,S);if(N===null){b===null&&(b=P);break}e&&b&&N.alternate===null&&t(g,b),m=i(N,m,T),R===null?j=N:R.sibling=N,R=N,b=P}if(C.done)return n(g,b),J&&Ft(g,T),j;if(b===null){for(;!C.done;T++,C=h.next())C=p(g,C.value,S),C!==null&&(m=i(C,m,T),R===null?j=C:R.sibling=C,R=C);return J&&Ft(g,T),j}for(b=r(g,b);!C.done;T++,C=h.next())C=y(b,g,T,C.value,S),C!==null&&(e&&C.alternate!==null&&b.delete(C.key===null?T:C.key),m=i(C,m,T),R===null?j=C:R.sibling=C,R=C);return e&&b.forEach(function(q){return t(g,q)}),J&&Ft(g,T),j}function k(g,m,h,S){if(typeof h=="object"&&h!==null&&h.type===cn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Qr:e:{for(var j=h.key,R=m;R!==null;){if(R.key===j){if(j=h.type,j===cn){if(R.tag===7){n(g,R.sibling),m=o(R,h.props.children),m.return=g,g=m;break e}}else if(R.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yt&&yu(j)===R.type){n(g,R.sibling),m=o(R,h.props),m.ref=Kn(g,R,h),m.return=g,g=m;break e}n(g,R);break}else t(g,R);R=R.sibling}h.type===cn?(m=Yt(h.props.children,g.mode,S,h.key),m.return=g,g=m):(S=Co(h.type,h.key,h.props,null,g.mode,S),S.ref=Kn(g,m,h),S.return=g,g=S)}return s(g);case un:e:{for(R=h.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){n(g,m.sibling),m=o(m,h.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Zi(h,g.mode,S),m.return=g,g=m}return s(g);case yt:return R=h._init,k(g,m,R(h._payload),S)}if(Gn(h))return w(g,m,h,S);if(Un(h))return v(g,m,h,S);oo(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(n(g,m.sibling),m=o(m,h),m.return=g,g=m):(n(g,m),m=Xi(h,g.mode,S),m.return=g,g=m),s(g)):n(g,m)}return k}var Dn=kd(!0),Pd=kd(!1),Io=Lt(null),Fo=null,vn=null,Tl=null;function Ol(){Tl=vn=Fo=null}function $l(e){var t=Io.current;Y(Io),e._currentValue=t}function Ms(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){Fo=e,Tl=vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(Tl!==e)if(e={context:e,memoizedValue:t,next:null},vn===null){if(Fo===null)throw Error(_(308));vn=e,Fo.dependencies={lanes:0,firstContext:e}}else vn=vn.next=e;return t}var Ht=null;function zl(e){Ht===null?Ht=[e]:Ht.push(e)}function _d(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,zl(t)):(n.next=o.next,o.next=n),t.interleaved=n,pt(e,r)}function pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function Nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,pt(e,n)}return o=r.interleaved,o===null?(t.next=t,zl(r)):(t.next=o.next,o.next=t),r.interleaved=t,pt(e,n)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wl(e,n)}}function vu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var o=e.updateQueue;vt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;s=0,d=c=u=null,l=i;do{var f=l.lane,y=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,v=l;switch(f=t,y=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){p=w.call(y,p,f);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,f=typeof w=="function"?w.call(y,p,f):w,f==null)break e;p=Z({},p,f);break e;case 2:vt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[l]:f.push(l))}else y={eventTime:y,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=y,u=p):d=d.next=y,s|=f;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;f=l,l=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(d===null&&(u=p),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xt|=s,e.lanes=s,e.memoizedState=p}}function xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Mr={},ot=Lt(Mr),Sr=Lt(Mr),kr=Lt(Mr);function Kt(e){if(e===Mr)throw Error(_(174));return e}function Ml(e,t){switch(W(kr,t),W(Sr,e),W(ot,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hs(t,e)}Y(ot),W(ot,t)}function Tn(){Y(ot),Y(Sr),Y(kr)}function jd(e){Kt(kr.current);var t=Kt(ot.current),n=hs(t,e.type);t!==n&&(W(Sr,e),W(ot,n))}function Ll(e){Sr.current===e&&(Y(ot),Y(Sr))}var G=Lt(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ki=[];function Al(){for(var e=0;e<Ki.length;e++)Ki[e]._workInProgressVersionPrimary=null;Ki.length=0}var wo=mt.ReactCurrentDispatcher,Qi=mt.ReactCurrentBatchConfig,Gt=0,X=null,ce=null,pe=null,Vo=!1,sr=!1,Pr=0,Um=0;function ye(){throw Error(_(321))}function Il(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Fl(e,t,n,r,o,i){if(Gt=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wo.current=e===null||e.memoizedState===null?Hm:Km,e=n(r,o),sr){i=0;do{if(sr=!1,Pr=0,25<=i)throw Error(_(301));i+=1,pe=ce=null,t.updateQueue=null,wo.current=Qm,e=n(r,o)}while(sr)}if(wo.current=Wo,t=ce!==null&&ce.next!==null,Gt=0,pe=ce=X=null,Vo=!1,t)throw Error(_(300));return e}function Ul(){var e=Pr!==0;return Pr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?X.memoizedState=pe=e:pe=pe.next=e,pe}function We(){if(ce===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=pe===null?X.memoizedState:pe.next;if(t!==null)pe=t,ce=e;else{if(e===null)throw Error(_(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?X.memoizedState=pe=e:pe=pe.next=e}return pe}function _r(e,t){return typeof t=="function"?t(e):t}function Yi(e){var t=We(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ce,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,u=null,c=i;do{var d=c.lane;if((Gt&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,s=r):u=u.next=p,X.lanes|=d,Xt|=d}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=l,Ge(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,X.lanes|=i,Xt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ji(e){var t=We(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Ge(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Rd(){}function bd(e,t){var n=X,r=We(),o=t(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,je=!0),r=r.queue,Bl(Td.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Cr(9,Dd.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(_(349));Gt&30||Ed(n,t,o)}return o}function Ed(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dd(e,t,n,r){t.value=n,t.getSnapshot=r,Od(t)&&$d(e)}function Td(e,t,n){return n(function(){Od(t)&&$d(e)})}function Od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function $d(e){var t=pt(e,1);t!==null&&qe(t,e,1,-1)}function wu(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:e},t.queue=e,e=e.dispatch=Wm.bind(null,X,e),[t.memoizedState,e]}function Cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zd(){return We().memoizedState}function So(e,t,n,r){var o=tt();X.flags|=e,o.memoizedState=Cr(1|t,n,void 0,r===void 0?null:r)}function si(e,t,n,r){var o=We();r=r===void 0?null:r;var i=void 0;if(ce!==null){var s=ce.memoizedState;if(i=s.destroy,r!==null&&Il(r,s.deps)){o.memoizedState=Cr(t,n,i,r);return}}X.flags|=e,o.memoizedState=Cr(1|t,n,i,r)}function Su(e,t){return So(8390656,8,e,t)}function Bl(e,t){return si(2048,8,e,t)}function Nd(e,t){return si(4,2,e,t)}function Md(e,t){return si(4,4,e,t)}function Ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ad(e,t,n){return n=n!=null?n.concat([e]):null,si(4,4,Ld.bind(null,t,e),n)}function Vl(){}function Id(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Il(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fd(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Il(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ud(e,t,n){return Gt&21?(Ge(n,t)||(n=Kc(),X.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function Bm(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Qi.transition;Qi.transition={};try{e(!1),t()}finally{U=n,Qi.transition=r}}function Bd(){return We().memoizedState}function Vm(e,t,n){var r=Dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vd(e))Wd(t,n);else if(n=_d(e,t,n,r),n!==null){var o=ke();qe(n,e,r,o),Hd(n,t,r)}}function Wm(e,t,n){var r=Dt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vd(e))Wd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,Ge(l,s)){var u=t.interleaved;u===null?(o.next=o,zl(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=_d(e,t,o,r),n!==null&&(o=ke(),qe(n,e,r,o),Hd(n,t,r))}}function Vd(e){var t=e.alternate;return e===X||t!==null&&t===X}function Wd(e,t){sr=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wl(e,n)}}var Wo={readContext:Ve,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Hm={readContext:Ve,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,So(4194308,4,Ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vm.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:wu,useDebugValue:Vl,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=wu(!1),t=e[0];return e=Bm.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=tt();if(J){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),fe===null)throw Error(_(349));Gt&30||Ed(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Su(Td.bind(null,r,i,e),[e]),r.flags|=2048,Cr(9,Dd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=fe.identifierPrefix;if(J){var n=at,r=lt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Um++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Km={readContext:Ve,useCallback:Id,useContext:Ve,useEffect:Bl,useImperativeHandle:Ad,useInsertionEffect:Nd,useLayoutEffect:Md,useMemo:Fd,useReducer:Yi,useRef:zd,useState:function(){return Yi(_r)},useDebugValue:Vl,useDeferredValue:function(e){var t=We();return Ud(t,ce.memoizedState,e)},useTransition:function(){var e=Yi(_r)[0],t=We().memoizedState;return[e,t]},useMutableSource:Rd,useSyncExternalStore:bd,useId:Bd,unstable_isNewReconciler:!1},Qm={readContext:Ve,useCallback:Id,useContext:Ve,useEffect:Bl,useImperativeHandle:Ad,useInsertionEffect:Nd,useLayoutEffect:Md,useMemo:Fd,useReducer:Ji,useRef:zd,useState:function(){return Ji(_r)},useDebugValue:Vl,useDeferredValue:function(e){var t=We();return ce===null?t.memoizedState=e:Ud(t,ce.memoizedState,e)},useTransition:function(){var e=Ji(_r)[0],t=We().memoizedState;return[e,t]},useMutableSource:Rd,useSyncExternalStore:bd,useId:Bd,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var li={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Dt(e),i=ut(r,o);i.payload=t,n!=null&&(i.callback=n),t=bt(e,i,o),t!==null&&(qe(t,e,o,r),xo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Dt(e),i=ut(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bt(e,i,o),t!==null&&(qe(t,e,o,r),xo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Dt(e),o=ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=bt(e,o,r),t!==null&&(qe(t,e,r,n),xo(t,e,r))}};function ku(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(o,i):!0}function Kd(e,t,n){var r=!1,o=zt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(o=be(t)?Jt:we.current,r=t.contextTypes,i=(r=r!=null)?bn(e,o):zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&li.enqueueReplaceState(t,t.state,null)}function As(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Nl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ve(i):(i=be(t)?Jt:we.current,o.context=bn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ls(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&li.enqueueReplaceState(o,o.state,null),Uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function On(e,t){try{var n="",r=t;do n+=Sf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Is(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ym=typeof WeakMap=="function"?WeakMap:Map;function Qd(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ko||(Ko=!0,Js=r),Is(e,t)},n}function Yd(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Is(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Is(e,t),typeof r!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function _u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ym;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ag.bind(null,e,t,n),t.then(e,e))}function Cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ju(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,bt(n,t,1))),n.lanes|=1),e)}var Jm=mt.ReactCurrentOwner,je=!1;function Se(e,t,n,r){t.child=e===null?Pd(t,null,n,r):Dn(t,e.child,n,r)}function Ru(e,t,n,r,o){n=n.render;var i=t.ref;return Cn(t,o),r=Fl(e,t,n,r,i,o),n=Ul(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(J&&n&&bl(t),t.flags|=1,Se(e,t,r,o),t.child)}function bu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Gl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Jd(e,t,i,r,o)):(e=Co(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:yr,n(s,r)&&e.ref===t.ref)return ft(e,t,o)}return t.flags|=1,e=Tt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Jd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(yr(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,ft(e,t,o)}return Fs(e,t,n,r,o)}function qd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(wn,Te),Te|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(wn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(wn,Te),Te|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(wn,Te),Te|=r;return Se(e,t,o,n),t.child}function Gd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fs(e,t,n,r,o){var i=be(n)?Jt:we.current;return i=bn(t,i),Cn(t,o),n=Fl(e,t,n,r,i,o),r=Ul(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(J&&r&&bl(t),t.flags|=1,Se(e,t,n,o),t.child)}function Eu(e,t,n,r,o){if(be(n)){var i=!0;Mo(t)}else i=!1;if(Cn(t,o),t.stateNode===null)ko(e,t),Kd(t,n,r),As(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ve(c):(c=be(n)?Jt:we.current,c=bn(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Pu(t,s,r,c),vt=!1;var f=t.memoizedState;s.state=f,Uo(t,r,s,o),u=t.memoizedState,l!==r||f!==u||Re.current||vt?(typeof d=="function"&&(Ls(t,n,d,r),u=t.memoizedState),(l=vt||ku(t,n,l,r,f,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Cd(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ke(t.type,l),s.props=c,p=t.pendingProps,f=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ve(u):(u=be(n)?Jt:we.current,u=bn(t,u));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||f!==u)&&Pu(t,s,r,u),vt=!1,f=t.memoizedState,s.state=f,Uo(t,r,s,o);var w=t.memoizedState;l!==p||f!==w||Re.current||vt?(typeof y=="function"&&(Ls(t,n,y,r),w=t.memoizedState),(c=vt||ku(t,n,c,r,f,w,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Us(e,t,n,r,i,o)}function Us(e,t,n,r,o,i){Gd(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&mu(t,n,!1),ft(e,t,i);r=t.stateNode,Jm.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Dn(t,e.child,null,i),t.child=Dn(t,null,l,i)):Se(e,t,l,i),t.memoizedState=r.state,o&&mu(t,n,!0),t.child}function Xd(e){var t=e.stateNode;t.pendingContext?fu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fu(e,t.context,!1),Ml(e,t.containerInfo)}function Du(e,t,n,r,o){return En(),Dl(o),t.flags|=256,Se(e,t,n,r),t.child}var Bs={dehydrated:null,treeContext:null,retryLane:0};function Vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zd(e,t,n){var r=t.pendingProps,o=G.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(G,o&1),e===null)return Ns(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=ci(s,r,0,null),e=Yt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Vs(n),t.memoizedState=Bs,e):Wl(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return qm(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Tt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Tt(l,i):(i=Yt(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Vs(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Bs,r}return i=e.child,e=i.sibling,r=Tt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wl(e,t){return t=ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function io(e,t,n,r){return r!==null&&Dl(r),Dn(t,e.child,null,n),e=Wl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qm(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=qi(Error(_(422))),io(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ci({mode:"visible",children:r.children},o,0,null),i=Yt(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Dn(t,e.child,null,s),t.child.memoizedState=Vs(s),t.memoizedState=Bs,i);if(!(t.mode&1))return io(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(_(419)),r=qi(i,r,void 0),io(e,t,s,r)}if(l=(s&e.childLanes)!==0,je||l){if(r=fe,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,pt(e,o),qe(r,e,o,-1))}return ql(),r=qi(Error(_(421))),io(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ug.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Oe=Rt(o.nextSibling),$e=t,J=!0,Ye=null,e!==null&&(Ie[Fe++]=lt,Ie[Fe++]=at,Ie[Fe++]=qt,lt=e.id,at=e.overflow,qt=t),t=Wl(t,r.children),t.flags|=4096,t)}function Tu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ms(e.return,t,n)}function Gi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ep(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Se(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tu(e,n,t);else if(e.tag===19)Tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(G,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Gi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Bo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Gi(t,!0,n,null,i);break;case"together":Gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gm(e,t,n){switch(t.tag){case 3:Xd(t),En();break;case 5:jd(t);break;case 1:be(t.type)&&Mo(t);break;case 4:Ml(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(Io,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Zd(e,t,n):(W(G,G.current&1),e=ft(e,t,n),e!==null?e.sibling:null);W(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ep(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,qd(e,t,n)}return ft(e,t,n)}var tp,Ws,np,rp;tp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ws=function(){};np=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Kt(ot.current);var i=null;switch(n){case"input":o=ps(e,o),r=ps(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=gs(e,o),r=gs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zo)}ys(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(cr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(cr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Q("scroll",e),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};rp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qn(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xm(e,t,n){var r=t.pendingProps;switch(El(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return be(t.type)&&No(),ve(t),null;case 3:return r=t.stateNode,Tn(),Y(Re),Y(we),Al(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Xs(Ye),Ye=null))),Ws(e,t),ve(t),null;case 5:Ll(t);var o=Kt(kr.current);if(n=t.type,e!==null&&t.stateNode!=null)np(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ve(t),null}if(e=Kt(ot.current),ro(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nt]=t,r[wr]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Zn.length;o++)Q(Zn[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Fa(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":Ba(r,i),Q("invalid",r)}ys(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&no(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&no(r.textContent,l,e),o=["children",""+l]):cr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Q("scroll",r)}switch(n){case"input":Yr(r),Ua(r,i,!0);break;case"textarea":Yr(r),Va(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=zo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nt]=t,e[wr]=r,tp(e,t,!1,!1),t.stateNode=e;e:{switch(s=vs(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Zn.length;o++)Q(Zn[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":Fa(e,r),o=ps(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Ba(e,r),o=gs(e,r),Q("invalid",e);break;default:o=r}ys(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?zc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Oc(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&dr(e,u):typeof u=="number"&&dr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(cr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Q("scroll",e):u!=null&&ml(e,i,u,s))}switch(n){case"input":Yr(e),Ua(e,r,!1);break;case"textarea":Yr(e),Va(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Sn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)rp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Kt(kr.current),Kt(ot.current),ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:no(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return ve(t),null;case 13:if(Y(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Oe!==null&&t.mode&1&&!(t.flags&128))Sd(),En(),t.flags|=98560,i=!1;else if(i=ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[nt]=t}else En(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else Ye!==null&&(Xs(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?de===0&&(de=3):ql())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Tn(),Ws(e,t),e===null&&vr(t.stateNode.containerInfo),ve(t),null;case 10:return $l(t.type._context),ve(t),null;case 17:return be(t.type)&&No(),ve(t),null;case 19:if(Y(G),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Qn(i,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Bo(e),s!==null){for(t.flags|=128,Qn(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&oe()>$n&&(t.flags|=128,r=!0,Qn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!J)return ve(t),null}else 2*oe()-i.renderingStartTime>$n&&n!==1073741824&&(t.flags|=128,r=!0,Qn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=oe(),t.sibling=null,n=G.current,W(G,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Jl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Zm(e,t){switch(El(t),t.tag){case 1:return be(t.type)&&No(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),Y(Re),Y(we),Al(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ll(t),null;case 13:if(Y(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(G),null;case 4:return Tn(),null;case 10:return $l(t.type._context),null;case 22:case 23:return Jl(),null;case 24:return null;default:return null}}var so=!1,xe=!1,eg=typeof WeakSet=="function"?WeakSet:Set,D=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Hs(e,t,n){try{n()}catch(r){te(e,t,r)}}var Ou=!1;function tg(e,t){if(bs=To,e=ad(),Rl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,p=e,f=null;t:for(;;){for(var y;p!==n||o!==0&&p.nodeType!==3||(l=s+o),p!==i||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(y=p.firstChild)!==null;)f=p,p=y;for(;;){if(p===e)break t;if(f===n&&++c===o&&(l=s),f===i&&++d===r&&(u=s),(y=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=y}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Es={focusedElem:e,selectionRange:n},To=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,k=w.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ke(t.type,v),k);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(S){te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return w=Ou,Ou=!1,w}function lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Hs(t,n,i)}o=o.next}while(o!==r)}}function ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ks(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function op(e){var t=e.alternate;t!==null&&(e.alternate=null,op(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[wr],delete t[Os],delete t[Lm],delete t[Am])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ip(e){return e.tag===5||e.tag===3||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ip(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zo));else if(r!==4&&(e=e.child,e!==null))for(Qs(e,t,n),e=e.sibling;e!==null;)Qs(e,t,n),e=e.sibling}function Ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,n),e=e.sibling;e!==null;)Ys(e,t,n),e=e.sibling}var me=null,Qe=!1;function ht(e,t,n){for(n=n.child;n!==null;)sp(e,t,n),n=n.sibling}function sp(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(ei,n)}catch{}switch(n.tag){case 5:xe||xn(n,t);case 6:var r=me,o=Qe;me=null,ht(e,t,n),me=r,Qe=o,me!==null&&(Qe?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(Qe?(e=me,n=n.stateNode,e.nodeType===8?Wi(e.parentNode,n):e.nodeType===1&&Wi(e,n),gr(e)):Wi(me,n.stateNode));break;case 4:r=me,o=Qe,me=n.stateNode.containerInfo,Qe=!0,ht(e,t,n),me=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Hs(n,t,s),o=o.next}while(o!==r)}ht(e,t,n);break;case 1:if(!xe&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,ht(e,t,n),xe=r):ht(e,t,n);break;default:ht(e,t,n)}}function zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new eg),t.forEach(function(r){var o=cg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,Qe=!1;break e;case 3:me=l.stateNode.containerInfo,Qe=!0;break e;case 4:me=l.stateNode.containerInfo,Qe=!0;break e}l=l.return}if(me===null)throw Error(_(160));sp(i,s,o),me=null,Qe=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){te(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lp(t,e),t=t.sibling}function lp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),et(e),r&4){try{lr(3,e,e.return),ai(3,e)}catch(v){te(e,e.return,v)}try{lr(5,e,e.return)}catch(v){te(e,e.return,v)}}break;case 1:He(t,e),et(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(He(t,e),et(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var o=e.stateNode;try{dr(o,"")}catch(v){te(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ec(o,i),vs(l,s);var c=vs(l,i);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];d==="style"?zc(o,p):d==="dangerouslySetInnerHTML"?Oc(o,p):d==="children"?dr(o,p):ml(o,d,p,c)}switch(l){case"input":fs(o,i);break;case"textarea":Dc(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Sn(o,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?Sn(o,!!i.multiple,i.defaultValue,!0):Sn(o,!!i.multiple,i.multiple?[]:"",!1))}o[wr]=i}catch(v){te(e,e.return,v)}}break;case 6:if(He(t,e),et(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){te(e,e.return,v)}}break;case 3:if(He(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gr(t.containerInfo)}catch(v){te(e,e.return,v)}break;case 4:He(t,e),et(e);break;case 13:He(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ql=oe())),r&4&&zu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(c=xe)||d,He(t,e),xe=c):He(t,e),et(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(p=D=d;D!==null;){switch(f=D,y=f.child,f.tag){case 0:case 11:case 14:case 15:lr(4,f,f.return);break;case 1:xn(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:xn(f,f.return);break;case 22:if(f.memoizedState!==null){Mu(p);continue}}y!==null?(y.return=f,D=y):Mu(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=$c("display",s))}catch(v){te(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(v){te(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:He(t,e),et(e),r&4&&zu(e);break;case 21:break;default:He(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ip(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(dr(o,""),r.flags&=-33);var i=$u(e);Ys(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=$u(e);Qs(e,l,s);break;default:throw Error(_(161))}}catch(u){te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ng(e,t,n){D=e,ap(e)}function ap(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||so;if(!s){var l=o.alternate,u=l!==null&&l.memoizedState!==null||xe;l=so;var c=xe;if(so=s,(xe=u)&&!c)for(D=o;D!==null;)s=D,u=s.child,s.tag===22&&s.memoizedState!==null?Lu(o):u!==null?(u.return=s,D=u):Lu(o);for(;i!==null;)D=i,ap(i),i=i.sibling;D=o,so=l,xe=c}Nu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,D=i):Nu(e)}}function Nu(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||ai(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&xu(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xu(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&gr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}xe||t.flags&512&&Ks(t)}catch(f){te(t,t.return,f)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Mu(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Lu(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ai(4,t)}catch(u){te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){te(t,o,u)}}var i=t.return;try{Ks(t)}catch(u){te(t,i,u)}break;case 5:var s=t.return;try{Ks(t)}catch(u){te(t,s,u)}}}catch(u){te(t,t.return,u)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var rg=Math.ceil,Ho=mt.ReactCurrentDispatcher,Hl=mt.ReactCurrentOwner,Be=mt.ReactCurrentBatchConfig,A=0,fe=null,le=null,ge=0,Te=0,wn=Lt(0),de=0,jr=null,Xt=0,ui=0,Kl=0,ar=null,Ce=null,Ql=0,$n=1/0,it=null,Ko=!1,Js=null,Et=null,lo=!1,kt=null,Qo=0,ur=0,qs=null,Po=-1,_o=0;function ke(){return A&6?oe():Po!==-1?Po:Po=oe()}function Dt(e){return e.mode&1?A&2&&ge!==0?ge&-ge:Fm.transition!==null?(_o===0&&(_o=Kc()),_o):(e=U,e!==0||(e=window.event,e=e===void 0?16:Zc(e.type)),e):1}function qe(e,t,n,r){if(50<ur)throw ur=0,qs=null,Error(_(185));$r(e,n,r),(!(A&2)||e!==fe)&&(e===fe&&(!(A&2)&&(ui|=n),de===4&&wt(e,ge)),Ee(e,r),n===1&&A===0&&!(t.mode&1)&&($n=oe()+500,ii&&At()))}function Ee(e,t){var n=e.callbackNode;Ff(e,t);var r=Do(e,e===fe?ge:0);if(r===0)n!==null&&Ka(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ka(n),t===1)e.tag===0?Im(Au.bind(null,e)):vd(Au.bind(null,e)),Nm(function(){!(A&6)&&At()}),n=null;else{switch(Qc(r)){case 1:n=xl;break;case 4:n=Wc;break;case 16:n=Eo;break;case 536870912:n=Hc;break;default:n=Eo}n=hp(n,up.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function up(e,t){if(Po=-1,_o=0,A&6)throw Error(_(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=Do(e,e===fe?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yo(e,r);else{t=r;var o=A;A|=2;var i=dp();(fe!==e||ge!==t)&&(it=null,$n=oe()+500,Qt(e,t));do try{sg();break}catch(l){cp(e,l)}while(!0);Ol(),Ho.current=i,A=o,le!==null?t=0:(fe=null,ge=0,t=de)}if(t!==0){if(t===2&&(o=Ps(e),o!==0&&(r=o,t=Gs(e,o))),t===1)throw n=jr,Qt(e,0),wt(e,r),Ee(e,oe()),n;if(t===6)wt(e,r);else{if(o=e.current.alternate,!(r&30)&&!og(o)&&(t=Yo(e,r),t===2&&(i=Ps(e),i!==0&&(r=i,t=Gs(e,i))),t===1))throw n=jr,Qt(e,0),wt(e,r),Ee(e,oe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Ut(e,Ce,it);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=Ql+500-oe(),10<t)){if(Do(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ts(Ut.bind(null,e,Ce,it),t);break}Ut(e,Ce,it);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Je(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rg(r/1960))-r,10<r){e.timeoutHandle=Ts(Ut.bind(null,e,Ce,it),r);break}Ut(e,Ce,it);break;case 5:Ut(e,Ce,it);break;default:throw Error(_(329))}}}return Ee(e,oe()),e.callbackNode===n?up.bind(null,e):null}function Gs(e,t){var n=ar;return e.current.memoizedState.isDehydrated&&(Qt(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Xs(t)),e}function Xs(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function og(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~Kl,t&=~ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Au(e){if(A&6)throw Error(_(327));jn();var t=Do(e,0);if(!(t&1))return Ee(e,oe()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var r=Ps(e);r!==0&&(t=r,n=Gs(e,r))}if(n===1)throw n=jr,Qt(e,0),wt(e,t),Ee(e,oe()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ut(e,Ce,it),Ee(e,oe()),null}function Yl(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&($n=oe()+500,ii&&At())}}function Zt(e){kt!==null&&kt.tag===0&&!(A&6)&&jn();var t=A;A|=1;var n=Be.transition,r=U;try{if(Be.transition=null,U=1,e)return e()}finally{U=r,Be.transition=n,A=t,!(A&6)&&At()}}function Jl(){Te=wn.current,Y(wn)}function Qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zm(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(El(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&No();break;case 3:Tn(),Y(Re),Y(we),Al();break;case 5:Ll(r);break;case 4:Tn();break;case 13:Y(G);break;case 19:Y(G);break;case 10:$l(r.type._context);break;case 22:case 23:Jl()}n=n.return}if(fe=e,le=e=Tt(e.current,null),ge=Te=t,de=0,jr=null,Kl=ui=Xt=0,Ce=ar=null,Ht!==null){for(t=0;t<Ht.length;t++)if(n=Ht[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Ht=null}return e}function cp(e,t){do{var n=le;try{if(Ol(),wo.current=Wo,Vo){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Vo=!1}if(Gt=0,pe=ce=X=null,sr=!1,Pr=0,Hl.current=null,n===null||n.return===null){de=1,jr=t,le=null;break}e:{var i=e,s=n.return,l=n,u=t;if(t=ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Cu(s);if(y!==null){y.flags&=-257,ju(y,s,l,i,t),y.mode&1&&_u(i,c,t),t=y,u=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(u),t.updateQueue=v}else w.add(u);break e}else{if(!(t&1)){_u(i,c,t),ql();break e}u=Error(_(426))}}else if(J&&l.mode&1){var k=Cu(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),ju(k,s,l,i,t),Dl(On(u,l));break e}}i=u=On(u,l),de!==4&&(de=2),ar===null?ar=[i]:ar.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Qd(i,u,t);vu(i,g);break e;case 1:l=u;var m=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Et===null||!Et.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Yd(i,l,t);vu(i,S);break e}}i=i.return}while(i!==null)}fp(n)}catch(j){t=j,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function dp(){var e=Ho.current;return Ho.current=Wo,e===null?Wo:e}function ql(){(de===0||de===3||de===2)&&(de=4),fe===null||!(Xt&268435455)&&!(ui&268435455)||wt(fe,ge)}function Yo(e,t){var n=A;A|=2;var r=dp();(fe!==e||ge!==t)&&(it=null,Qt(e,t));do try{ig();break}catch(o){cp(e,o)}while(!0);if(Ol(),A=n,Ho.current=r,le!==null)throw Error(_(261));return fe=null,ge=0,de}function ig(){for(;le!==null;)pp(le)}function sg(){for(;le!==null&&!Tf();)pp(le)}function pp(e){var t=gp(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?fp(e):le=t,Hl.current=null}function fp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zm(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,le=null;return}}else if(n=Xm(n,t,Te),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);de===0&&(de=5)}function Ut(e,t,n){var r=U,o=Be.transition;try{Be.transition=null,U=1,lg(e,t,n,r)}finally{Be.transition=o,U=r}return null}function lg(e,t,n,r){do jn();while(kt!==null);if(A&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Uf(e,i),e===fe&&(le=fe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,hp(Eo,function(){return jn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var s=U;U=1;var l=A;A|=4,Hl.current=null,tg(e,n),lp(n,e),Rm(Es),To=!!bs,Es=bs=null,e.current=n,ng(n),Of(),A=l,U=s,Be.transition=i}else e.current=n;if(lo&&(lo=!1,kt=e,Qo=o),i=e.pendingLanes,i===0&&(Et=null),Nf(n.stateNode),Ee(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ko)throw Ko=!1,e=Js,Js=null,e;return Qo&1&&e.tag!==0&&jn(),i=e.pendingLanes,i&1?e===qs?ur++:(ur=0,qs=e):ur=0,At(),null}function jn(){if(kt!==null){var e=Qc(Qo),t=Be.transition,n=U;try{if(Be.transition=null,U=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,Qo=0,A&6)throw Error(_(331));var o=A;for(A|=4,D=e.current;D!==null;){var i=D,s=i.child;if(D.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(D=c;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:lr(8,d,i)}var p=d.child;if(p!==null)p.return=d,D=p;else for(;D!==null;){d=D;var f=d.sibling,y=d.return;if(op(d),d===c){D=null;break}if(f!==null){f.return=y,D=f;break}D=y}}}var w=i.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}D=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,D=s;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:lr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,D=g;break e}D=i.return}}var m=e.current;for(D=m;D!==null;){s=D;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,D=h;else e:for(s=m;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ai(9,l)}}catch(j){te(l,l.return,j)}if(l===s){D=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,D=S;break e}D=l.return}}if(A=o,At(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(ei,e)}catch{}r=!0}return r}finally{U=n,Be.transition=t}}return!1}function Iu(e,t,n){t=On(n,t),t=Qd(e,t,1),e=bt(e,t,1),t=ke(),e!==null&&($r(e,1,t),Ee(e,t))}function te(e,t,n){if(e.tag===3)Iu(e,e,n);else for(;t!==null;){if(t.tag===3){Iu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Et===null||!Et.has(r))){e=On(n,e),e=Yd(t,e,1),t=bt(t,e,1),e=ke(),t!==null&&($r(t,1,e),Ee(t,e));break}}t=t.return}}function ag(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ge&n)===n&&(de===4||de===3&&(ge&130023424)===ge&&500>oe()-Ql?Qt(e,0):Kl|=n),Ee(e,t)}function mp(e,t){t===0&&(e.mode&1?(t=Gr,Gr<<=1,!(Gr&130023424)&&(Gr=4194304)):t=1);var n=ke();e=pt(e,t),e!==null&&($r(e,t,n),Ee(e,n))}function ug(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mp(e,n)}function cg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),mp(e,n)}var gp;gp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,Gm(e,t,n);je=!!(e.flags&131072)}else je=!1,J&&t.flags&1048576&&xd(t,Ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ko(e,t),e=t.pendingProps;var o=bn(t,we.current);Cn(t,n),o=Fl(null,t,r,e,o,n);var i=Ul();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(r)?(i=!0,Mo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Nl(t),o.updater=li,t.stateNode=o,o._reactInternals=t,As(t,r,e,n),t=Us(null,t,r,!0,i,n)):(t.tag=0,J&&i&&bl(t),Se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ko(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=pg(r),e=Ke(r,e),o){case 0:t=Fs(null,t,r,e,n);break e;case 1:t=Eu(null,t,r,e,n);break e;case 11:t=Ru(null,t,r,e,n);break e;case 14:t=bu(null,t,r,Ke(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),Fs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),Eu(e,t,r,o,n);case 3:e:{if(Xd(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Cd(e,t),Uo(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=On(Error(_(423)),t),t=Du(e,t,r,n,o);break e}else if(r!==o){o=On(Error(_(424)),t),t=Du(e,t,r,n,o);break e}else for(Oe=Rt(t.stateNode.containerInfo.firstChild),$e=t,J=!0,Ye=null,n=Pd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===o){t=ft(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return jd(t),e===null&&Ns(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Ds(r,o)?s=null:i!==null&&Ds(r,i)&&(t.flags|=32),Gd(e,t),Se(e,t,s,n),t.child;case 6:return e===null&&Ns(t),null;case 13:return Zd(e,t,n);case 4:return Ml(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),Ru(e,t,r,o,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,W(Io,r._currentValue),r._currentValue=s,i!==null)if(Ge(i.value,s)){if(i.children===o.children&&!Re.current){t=ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ut(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ms(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(_(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ms(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Cn(t,n),o=Ve(o),r=r(o),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,o=Ke(r,t.pendingProps),o=Ke(r.type,o),bu(e,t,r,o,n);case 15:return Jd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),ko(e,t),t.tag=1,be(r)?(e=!0,Mo(t)):e=!1,Cn(t,n),Kd(t,r,o),As(t,r,o,n),Us(null,t,r,!0,e,n);case 19:return ep(e,t,n);case 22:return qd(e,t,n)}throw Error(_(156,t.tag))};function hp(e,t){return Vc(e,t)}function dg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new dg(e,t,n,r)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pg(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hl)return 11;if(e===yl)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Co(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Gl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case cn:return Yt(n.children,o,i,t);case gl:s=8,o|=8;break;case as:return e=Ue(12,n,t,o|2),e.elementType=as,e.lanes=i,e;case us:return e=Ue(13,n,t,o),e.elementType=us,e.lanes=i,e;case cs:return e=Ue(19,n,t,o),e.elementType=cs,e.lanes=i,e;case jc:return ci(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _c:s=10;break e;case Cc:s=9;break e;case hl:s=11;break e;case yl:s=14;break e;case yt:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ue(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Yt(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function ci(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=jc,e.lanes=n,e.stateNode={isHidden:!1},e}function Xi(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function Zi(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$i(0),this.expirationTimes=$i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Xl(e,t,n,r,o,i,s,l,u){return e=new fg(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ue(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nl(i),e}function mg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yp(e){if(!e)return zt;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(be(n))return yd(e,n,t)}return t}function vp(e,t,n,r,o,i,s,l,u){return e=Xl(n,r,!0,e,o,i,s,l,u),e.context=yp(null),n=e.current,r=ke(),o=Dt(n),i=ut(r,o),i.callback=t??null,bt(n,i,o),e.current.lanes=o,$r(e,o,r),Ee(e,r),e}function di(e,t,n,r){var o=t.current,i=ke(),s=Dt(o);return n=yp(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bt(o,t,s),e!==null&&(qe(e,o,s,i),xo(e,o,s)),s}function Jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zl(e,t){Fu(e,t),(e=e.alternate)&&Fu(e,t)}function gg(){return null}var xp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ea(e){this._internalRoot=e}pi.prototype.render=ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));di(e,t,null,null)};pi.prototype.unmount=ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){di(null,e,null,null)}),t[dt]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=qc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&Xc(e)}};function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function hg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Jo(s);i.call(c)}}var s=vp(t,r,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=s,e[dt]=s.current,vr(e.nodeType===8?e.parentNode:e),Zt(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=Jo(u);l.call(c)}}var u=Xl(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=u,e[dt]=u.current,vr(e.nodeType===8?e.parentNode:e),Zt(function(){di(t,u,n,r)}),u}function mi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var u=Jo(s);l.call(u)}}di(t,s,e,o)}else s=hg(n,t,e,o,r);return Jo(s)}Yc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xn(t.pendingLanes);n!==0&&(wl(t,n|1),Ee(t,oe()),!(A&6)&&($n=oe()+500,At()))}break;case 13:Zt(function(){var r=pt(e,1);if(r!==null){var o=ke();qe(r,e,1,o)}}),Zl(e,1)}};Sl=function(e){if(e.tag===13){var t=pt(e,134217728);if(t!==null){var n=ke();qe(t,e,134217728,n)}Zl(e,134217728)}};Jc=function(e){if(e.tag===13){var t=Dt(e),n=pt(e,t);if(n!==null){var r=ke();qe(n,e,t,r)}Zl(e,t)}};qc=function(){return U};Gc=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ws=function(e,t,n){switch(t){case"input":if(fs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=oi(r);if(!o)throw Error(_(90));bc(r),fs(r,o)}}}break;case"textarea":Dc(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};Lc=Yl;Ac=Zt;var yg={usingClientEntryPoint:!1,Events:[Nr,mn,oi,Nc,Mc,Yl]},Yn={findFiberByHostInstance:Wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vg={bundleType:Yn.bundleType,version:Yn.version,rendererPackageName:Yn.rendererPackageName,rendererConfig:Yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uc(e),e===null?null:e.stateNode},findFiberByHostInstance:Yn.findFiberByHostInstance||gg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{ei=ao.inject(vg),rt=ao}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yg;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ta(t))throw Error(_(200));return mg(e,t,null,n)};Ne.createRoot=function(e,t){if(!ta(e))throw Error(_(299));var n=!1,r="",o=xp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Xl(e,1,!1,null,null,n,!1,r,o),e[dt]=t.current,vr(e.nodeType===8?e.parentNode:e),new ea(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Uc(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Zt(e)};Ne.hydrate=function(e,t,n){if(!fi(t))throw Error(_(200));return mi(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!ta(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=xp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=vp(t,null,e,1,n??null,o,!1,i,s),e[dt]=t.current,vr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new pi(t)};Ne.render=function(e,t,n){if(!fi(t))throw Error(_(200));return mi(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!fi(e))throw Error(_(40));return e._reactRootContainer?(Zt(function(){mi(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Ne.unstable_batchedUpdates=Yl;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fi(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return mi(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function wp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wp)}catch(e){console.error(e)}}wp(),wc.exports=Ne;var xg=wc.exports,Bu=xg;ss.createRoot=Bu.createRoot,ss.hydrateRoot=Bu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rr(){return Rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rr.apply(null,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const Vu="popstate";function wg(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:l="",hash:u=""}=nn(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Zs("",{pathname:s,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let u=o.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof i=="string"?i:qo(i))}function r(o,i){na(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return kg(t,n,r,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function na(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Sg(){return Math.random().toString(36).substr(2,8)}function Wu(e,t){return{usr:e.state,key:e.key,idx:t}}function Zs(e,t,n,r){return n===void 0&&(n=null),Rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?nn(t):t,{state:n,key:t&&t.key||r||Sg()})}function qo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function nn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function kg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=Pt.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(Rr({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function p(){l=Pt.Pop;let k=d(),g=k==null?null:k-c;c=k,u&&u({action:l,location:v.location,delta:g})}function f(k,g){l=Pt.Push;let m=Zs(v.location,k,g);n&&n(m,k),c=d()+1;let h=Wu(m,c),S=v.createHref(m);try{s.pushState(h,"",S)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(S)}i&&u&&u({action:l,location:v.location,delta:1})}function y(k,g){l=Pt.Replace;let m=Zs(v.location,k,g);n&&n(m,k),c=d();let h=Wu(m,c),S=v.createHref(m);s.replaceState(h,"",S),i&&u&&u({action:l,location:v.location,delta:0})}function w(k){let g=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof k=="string"?k:qo(k);return m=m.replace(/ $/,"%20"),se(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let v={get action(){return l},get location(){return e(o,s)},listen(k){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Vu,p),u=k,()=>{o.removeEventListener(Vu,p),u=null}},createHref(k){return t(o,k)},createURL:w,encodeLocation(k){let g=w(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:y,go(k){return s.go(k)}};return v}var Hu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hu||(Hu={}));function Pg(e,t,n){return n===void 0&&(n="/"),_g(e,t,n)}function _g(e,t,n,r){let o=typeof t=="string"?nn(t):t,i=ra(o.pathname||"/",n);if(i==null)return null;let s=Sp(e);Cg(s);let l=null,u=Lg(i);for(let c=0;l==null&&c<s.length;++c)l=zg(s[c],u);return l}function Sp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(se(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ot([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(se(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Sp(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Og(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let u of kp(i.path))o(i,s,u)}),t}function kp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=kp(r.join("/")),l=[];return l.push(...s.map(u=>u===""?i:[i,u].join("/"))),o&&l.push(...s),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function Cg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$g(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jg=/^:[\w-]+$/,Rg=3,bg=2,Eg=1,Dg=10,Tg=-2,Ku=e=>e==="*";function Og(e,t){let n=e.split("/"),r=n.length;return n.some(Ku)&&(r+=Tg),t&&(r+=bg),n.filter(o=>!Ku(o)).reduce((o,i)=>o+(jg.test(i)?Rg:i===""?Eg:Dg),r)}function $g(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function zg(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",p=Ng({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),f=u.route;if(!p)return null;Object.assign(o,p.params),s.push({params:o,pathname:Ot([i,p.pathname]),pathnameBase:Fg(Ot([i,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(i=Ot([i,p.pathnameBase]))}return s}function Ng(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Mg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:f,isOptional:y}=d;if(f==="*"){let v=l[p]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const w=l[p];return y&&!w?c[f]=void 0:c[f]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function Mg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),na(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Lg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return na(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ra(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ag(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?nn(e):e,i;return n?(n=Pp(n),n.startsWith("/")?i=Qu(n.substring(1),"/"):i=Qu(n,t)):i=t,{pathname:i,search:Ug(r),hash:Bg(o)}}function Qu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function es(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ig(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function oa(e,t){let n=Ig(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ia(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=nn(e):(o=Rr({},e),se(!o.pathname||!o.pathname.includes("?"),es("?","pathname","search",o)),se(!o.pathname||!o.pathname.includes("#"),es("#","pathname","hash",o)),se(!o.search||!o.search.includes("#"),es("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(s==null)l=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),p-=1;o.pathname=f.join("/")}l=p>=0?t[p]:"/"}let u=Ag(o,l),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Pp=e=>e.replace(/\/\/+/g,"/"),Ot=e=>Pp(e.join("/")),Fg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ug=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Vg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _p=["post","put","patch","delete"];new Set(_p);const Wg=["get",..._p];new Set(Wg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},br.apply(null,arguments)}const sa=x.createContext(null),Hg=x.createContext(null),It=x.createContext(null),gi=x.createContext(null),gt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Cp=x.createContext(null);function Kg(e,t){let{relative:n}=t===void 0?{}:t;An()||se(!1);let{basename:r,navigator:o}=x.useContext(It),{hash:i,pathname:s,search:l}=bp(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Ot([r,s])),o.createHref({pathname:u,search:l,hash:i})}function An(){return x.useContext(gi)!=null}function In(){return An()||se(!1),x.useContext(gi).location}function jp(e){x.useContext(It).static||x.useLayoutEffect(e)}function Rp(){let{isDataRoute:e}=x.useContext(gt);return e?sh():Qg()}function Qg(){An()||se(!1);let e=x.useContext(sa),{basename:t,future:n,navigator:r}=x.useContext(It),{matches:o}=x.useContext(gt),{pathname:i}=In(),s=JSON.stringify(oa(o,n.v7_relativeSplatPath)),l=x.useRef(!1);return jp(()=>{l.current=!0}),x.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=ia(c,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Ot([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,s,i,e])}function Yg(){let{matches:e}=x.useContext(gt),t=e[e.length-1];return t?t.params:{}}function bp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(It),{matches:o}=x.useContext(gt),{pathname:i}=In(),s=JSON.stringify(oa(o,r.v7_relativeSplatPath));return x.useMemo(()=>ia(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Jg(e,t){return qg(e,t)}function qg(e,t,n,r){An()||se(!1);let{navigator:o}=x.useContext(It),{matches:i}=x.useContext(gt),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=In(),d;if(t){var p;let k=typeof t=="string"?nn(t):t;u==="/"||(p=k.pathname)!=null&&p.startsWith(u)||se(!1),d=k}else d=c;let f=d.pathname||"/",y=f;if(u!=="/"){let k=u.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let w=Pg(e,{pathname:y}),v=th(w&&w.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Ot([u,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Ot([u,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&v?x.createElement(gi.Provider,{value:{location:br({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Pt.Pop}},v):v}function Gg(){let e=ih(),t=Vg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:o},n):null,null)}const Xg=x.createElement(Gg,null);class Zg extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(gt.Provider,{value:this.props.routeContext},x.createElement(Cp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eh(e){let{routeContext:t,match:n,children:r}=e,o=x.useContext(sa);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(gt.Provider,{value:t},r)}function th(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||se(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:f,errors:y}=n,w=p.route.loader&&f[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||w){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,p,f)=>{let y,w=!1,v=null,k=null;n&&(y=l&&p.route.id?l[p.route.id]:void 0,v=p.route.errorElement||Xg,u&&(c<0&&f===0?(lh("route-fallback"),w=!0,k=null):c===f&&(w=!0,k=p.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,f+1)),m=()=>{let h;return y?h=v:w?h=k:p.route.Component?h=x.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,x.createElement(eh,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?x.createElement(Zg,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Ep=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ep||{}),Dp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Dp||{});function nh(e){let t=x.useContext(sa);return t||se(!1),t}function rh(e){let t=x.useContext(Hg);return t||se(!1),t}function oh(e){let t=x.useContext(gt);return t||se(!1),t}function Tp(e){let t=oh(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function ih(){var e;let t=x.useContext(Cp),n=rh(),r=Tp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function sh(){let{router:e}=nh(Ep.UseNavigateStable),t=Tp(Dp.UseNavigateStable),n=x.useRef(!1);return jp(()=>{n.current=!0}),x.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,br({fromRouteId:t},i)))},[e,t])}const Yu={};function lh(e,t,n){Yu[e]||(Yu[e]=!0)}function ah(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function el(e){let{to:t,replace:n,state:r,relative:o}=e;An()||se(!1);let{future:i,static:s}=x.useContext(It),{matches:l}=x.useContext(gt),{pathname:u}=In(),c=Rp(),d=ia(t,oa(l,i.v7_relativeSplatPath),u,o==="path"),p=JSON.stringify(d);return x.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:o}),[c,p,o,n,r]),null}function er(e){se(!1)}function uh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Pt.Pop,navigator:i,static:s=!1,future:l}=e;An()&&se(!1);let u=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:u,navigator:i,static:s,future:br({v7_relativeSplatPath:!1},l)}),[u,l,i,s]);typeof r=="string"&&(r=nn(r));let{pathname:d="/",search:p="",hash:f="",state:y=null,key:w="default"}=r,v=x.useMemo(()=>{let k=ra(d,u);return k==null?null:{location:{pathname:k,search:p,hash:f,state:y,key:w},navigationType:o}},[u,d,p,f,y,w,o]);return v==null?null:x.createElement(It.Provider,{value:c},x.createElement(gi.Provider,{children:n,value:v}))}function ch(e){let{children:t,location:n}=e;return Jg(tl(t),n)}new Promise(()=>{});function tl(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,o)=>{if(!x.isValidElement(r))return;let i=[...t,o];if(r.type===x.Fragment){n.push.apply(n,tl(r.props.children,i));return}r.type!==er&&se(!1),!r.props.index||!r.props.children||se(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=tl(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nl.apply(null,arguments)}function dh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function ph(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fh(e,t){return e.button===0&&(!t||t==="_self")&&!ph(e)}const mh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gh="6";try{window.__reactRouterVersion=gh}catch{}const hh="startTransition",Ju=af[hh];function yh(e){let{basename:t,children:n,future:r,window:o}=e,i=x.useRef();i.current==null&&(i.current=wg({window:o,v5Compat:!0}));let s=i.current,[l,u]=x.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=x.useCallback(p=>{c&&Ju?Ju(()=>u(p)):u(p)},[u,c]);return x.useLayoutEffect(()=>s.listen(d),[s,d]),x.useEffect(()=>ah(r),[r]),x.createElement(uh,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const vh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rl=x.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=t,f=dh(t,mh),{basename:y}=x.useContext(It),w,v=!1;if(typeof c=="string"&&xh.test(c)&&(w=c,vh))try{let h=new URL(window.location.href),S=c.startsWith("//")?new URL(h.protocol+c):new URL(c),j=ra(S.pathname,y);S.origin===h.origin&&j!=null?c=j+S.search+S.hash:v=!0}catch{}let k=Kg(c,{relative:o}),g=wh(c,{replace:s,state:l,target:u,preventScrollReset:d,relative:o,viewTransition:p});function m(h){r&&r(h),h.defaultPrevented||g(h)}return x.createElement("a",nl({},f,{href:w||k,onClick:v||i?r:m,ref:n,target:u}))});var qu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(qu||(qu={}));var Gu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gu||(Gu={}));function wh(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:l}=t===void 0?{}:t,u=Rp(),c=In(),d=bp(e,{relative:s});return x.useCallback(p=>{if(fh(p,n)){p.preventDefault();let f=r!==void 0?r:qo(c)===qo(d);u(e,{replace:f,state:o,preventScrollReset:i,relative:s,viewTransition:l})}},[c,u,d,r,o,n,e,i,s,l])}const Sh="https://github.com/frankvane/vane-components";class kh extends Or.Component{constructor(){super(...arguments);$a(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?a.jsxs("div",{className:"crash",role:"alert",children:[a.jsx("h3",{children:"这个页面炸了"}),a.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),a.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Op(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function Ph({demos:e,pathname:t}){var u;const{groups:n,entries:r,label:o}=e,i=(u=r.find(c=>t===`/demo/${c.meta.slug}`))==null?void 0:u.meta.group,[s,l]=x.useState(()=>{var d;const c=(d=n[0])==null?void 0:d.key;return Object.fromEntries(n.map(p=>[p.key,p.key===(i??c)]))});return x.useEffect(()=>{i&&l(c=>c[i]?c:{...c,[i]:!0})},[i]),a.jsxs("div",{className:"nav-section",children:[a.jsxs("div",{className:"nav-section-head",children:[a.jsx("span",{children:o}),a.jsxs("code",{children:[r.length," demos"]})]}),n.map(c=>{const d=r.filter(f=>f.meta.group===c.key);if(d.length===0)return null;const p=s[c.key]??!1;return a.jsxs("div",{className:"nav-group",children:[a.jsxs("button",{type:"button",className:`nav-group-head${i===c.key?" is-current":""}`,onClick:()=>l(f=>({...f,[c.key]:!p})),"aria-expanded":p,children:[a.jsx("span",{className:`nav-caret${p?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,a.jsx("code",{children:d.length})]}),p?a.jsx("div",{className:"nav-list",children:d.map(f=>a.jsxs(rl,{to:`/demo/${f.meta.slug}`,className:`nav-sub${t===`/demo/${f.meta.slug}`?" is-active":""}`,children:[a.jsx("em",{"aria-hidden":!0,children:Op(e,f)}),f.meta.title]},f.meta.slug))}):null]},c.key)})]})}function _h({demos:e}){var l;const{slug:t}=Yg(),{entries:n,detail:r}=e,o=t?n.find(u=>u.meta.slug===t):void 0,i=(l=n[0])==null?void 0:l.meta.slug;if(!o)return a.jsx(el,{to:i?`/demo/${i}`:"/",replace:!0});const s=n.indexOf(o)+1;return a.jsx(Or.Fragment,{children:r(o,s)},o.meta.slug)}function Ch({config:e}){var p,f;const{pathname:t}=In(),[n,r]=x.useState(!1),[o,i]=x.useState(!1);x.useEffect(()=>r(!1),[t]);const s=x.useCallback(()=>i(y=>!y),[]);x.useEffect(()=>{const y=w=>{const v=w.target,k=v&&(v.tagName==="INPUT"||v.tagName==="TEXTAREA"||v.isContentEditable);w.key==="Escape"&&r(!1),!k&&(w.key==="g"||w.key==="G")&&!w.metaKey&&!w.ctrlKey&&i(g=>!g)};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]);const l=e.demos,u=(p=l.entries[0])==null?void 0:p.meta.slug,c=x.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const y=t.replace(/^\/demo\/?/,""),w=l.entries.find(v=>v.meta.slug===y);return w?`demo ${Op(l,w)} · ${w.meta.title}`:"demo · 逐项示例"},[t,e,l]),d=x.useMemo(()=>e.nav.map((y,w)=>({...y,no:String(w+1).padStart(2,"0")})),[e.nav]);return a.jsxs("div",{className:`shell${n?" is-nav-open":""}${o?" is-guides":""}`,children:[a.jsx("a",{className:"skip-link",href:"#main",onClick:y=>{y.preventDefault();const w=document.getElementById("main");w==null||w.setAttribute("tabindex","-1"),w==null||w.focus(),w==null||w.scrollIntoView({block:"start"})},children:"跳到内容"}),a.jsxs("aside",{className:"side","aria-label":"站点导航",children:[a.jsxs(rl,{to:"/",className:"brand",children:[a.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),a.jsxs("span",{children:[a.jsx("strong",{children:e.pkg}),a.jsx("em",{children:e.subtitle})]})]}),a.jsxs("nav",{children:[d.map(y=>a.jsxs(rl,{to:y.to,className:`nav-item${t===y.to?" is-active":""}`,"aria-current":t===y.to?"page":void 0,children:[a.jsx("em",{"aria-hidden":!0,children:y.no}),a.jsx("span",{children:y.label}),y.hint?a.jsx("code",{children:y.hint}):null]},y.to)),a.jsx(Ph,{demos:e.demos,pathname:t})]}),a.jsxs("div",{className:"side-foot",children:[a.jsx("p",{children:e.footer[0]}),a.jsx("p",{className:"muted",children:e.footer[1]})]})]}),a.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>r(!1)}),a.jsxs("div",{className:"main",id:"main",children:[a.jsxs("header",{className:"topbar",children:[a.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>r(y=>!y),children:a.jsx("span",{"aria-hidden":!0})}),a.jsx("span",{className:"crumb",children:c}),a.jsxs("div",{className:"topbar-right",children:[(f=e.stats)==null?void 0:f.map(y=>a.jsxs("span",{className:"topbar-stat",title:y.title,children:[a.jsx("b",{children:y.value})," ",y.label]},y.label)),a.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:s,title:"显示栏位参考线（快捷键 G）",children:[a.jsx("i",{"aria-hidden":!0}),"guides"]}),a.jsx("a",{className:"topbar-link",href:e.sourceUrl??Sh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),a.jsx("div",{className:"guides","aria-hidden":!0}),a.jsx(x.Suspense,{fallback:a.jsx("div",{className:"loading",children:"loading modules…"}),children:a.jsx(kh,{children:a.jsxs(ch,{children:[e.routes.map(y=>a.jsx(er,{path:y.path,element:y.element},y.path)),a.jsx(er,{path:"/demo",element:a.jsx(el,{to:u?`/demo/${u}`:"/",replace:!0})}),a.jsx(er,{path:"/demo/:slug",element:a.jsx(_h,{demos:e.demos})}),a.jsx(er,{path:"*",element:a.jsx(el,{to:"/",replace:!0})})]})})})]})]})}function jh({config:e}){return a.jsx(yh,{children:a.jsx(Ch,{config:e})})}const Rh="modulepreload",bh=function(e,t){return new URL(e,t).href},Xu={},zn=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=bh(c,r),c in Xu)return;Xu[c]=!0;const d=c.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!r)for(let w=s.length-1;w>=0;w--){const v=s[w];if(v.href===c&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":Rh,d||(y.as="script"),y.crossOrigin="",y.href=c,u&&y.setAttribute("nonce",u),document.head.appendChild(y),d)return new Promise((w,v)=>{y.addEventListener("load",w),y.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return o.then(s=>{for(const l of s||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},Go=Object.freeze(["basics","work","education","skills","projects","extra","attachments"]),Eh=["renderToolbar","renderBasics","renderAttachments","renderFooter"];function Dh(){const e=new Map,t=new Map;let n=0;const r=(l,u)=>{const c=e.get(l);if(c){if(n>=50){console.warn(`[PluginBus] emit depth exceeded: "${l}"`);return}n+=1;for(const d of[...c])try{d(u)}catch(p){console.warn(`[PluginBus] handler error for event "${l}"`,p)}n-=1}},o=(l,u)=>{let c=e.get(l);c||(c=new Set,e.set(l,c));const d=u;return c.add(d),()=>{c==null||c.delete(d)}},i=(l,u)=>{const c=d=>{try{u(d)}finally{s(l,c)}};return o(l,c)},s=(l,u)=>{var c;if(!u){e.delete(l);return}(c=e.get(l))==null||c.delete(u)};return{emit:r,on:o,once:i,off:s,getData:l=>t.get(l),setData:(l,u)=>{const c=t.get(l);t.set(l,u),c!==u&&r(l,u)},deleteData:l=>{const u=t.has(l);t.delete(l),u&&r(l,void 0)},hasData:l=>t.has(l),getAll:()=>{const l=Object.create(null);return t.forEach((u,c)=>{l[c]=u}),l},clear:()=>{e.clear(),t.clear()}}}function Th(e){const t=new Map(e.map(l=>[l.name,l])),n=[];for(const l of e)for(const u of l.dependencies??[])t.has(u)||n.push(`${l.name} -> ${u}`);const r=[],o=new Set,i=[...e],s=l=>(l.dependencies??[]).every(u=>o.has(u)||!t.has(u));for(;i.length>0;){const l=i.filter(s);if(l.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(c=>c.name).join(" <-> ")}`);let u=l[0];for(const c of l)(c.priority??0)>(u.priority??0)&&(u=c);r.push(u),o.add(u.name),i.splice(i.indexOf(u),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),r}function $p(e,t){try{return Th(e)}catch(n){return t==null||t(n),e}}async function Oh(e,t={}){const{timeout:n=3e3,name:r="anonymous",hook:o="unknown"}=t;if(!n||n<=0)return await e();let i;const s=new Promise((l,u)=>{i=setTimeout(()=>{u(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),s])}finally{i&&clearTimeout(i)}}const $h=new Set(["onMount","onUnmount","onPropsChange","onError"]);function zh(e={}){const t=e.logger??console,n=e.sandbox??!0,r=e.timeout??3e3,o=[];let i=[];const s=new Map,l=new Map,u=new Set;let c=0,d=null,p=0;const f=(P,C,N)=>{o.push({plugin:P,hook:C,error:N})},y=()=>{c+=1,d=null},w=(P,C=new Set)=>P.enabled===!1?!1:C.has(P.name)?!0:(C.add(P.name),(P.dependencies??[]).every(N=>{const q=s.get(N);return!q||w(q,C)})),v=()=>{if(d)return d;const P=[...s.values()].filter(C=>w(C)?!0:(f(C.name,"dependencies",new Error("依赖已停用")),!1));return d=$p(P,C=>f("[order]","resolveDependencyOrder",C))},k=P=>{const C=i.filter(([N])=>!P||N===P).reverse();i=P?i.filter(([N])=>N!==P):[];for(const[,N]of C)try{N()}catch(q){t.warn("[vane] cleanup failed",q)}},g=P=>{var C;return Promise.resolve((C=P.destroy)==null?void 0:C.call(P)).catch(N=>t.warn(`[vane] destroy failed: ${P.name}`,N))},m=async(P,C,N,q,L)=>{var Le,E;const ne=C==="onUnmount";if(C==="onMount"||ne){if(u.has(P.name)!==ne)return{};ne?u.delete(P.name):u.add(P.name)}const Xe=(Le=P.hooks)==null?void 0:Le[C];if(typeof Xe!="function")return{};let De;try{const O=()=>Xe(N,...q);De=P.sandbox??n?await Oh(O,{timeout:P.timeout??r,name:P.name,hook:C}):await O()}catch(O){return L!==c?{}:(f(P.name,C,O),t.warn(`[vane] ${C} failed: ${P.name}`,O),(E=e.onError)==null||E.call(e,P.name,C,O),{stop:C==="onError"})}return L!==c?{}:$h.has(C)&&typeof De=="function"?(i.push([P.name,De]),{}):{value:De}},h=async(P,C,N)=>{const q=c;for(const L of v()){if(q!==c)return;const ne=await m(L,P,C,N,q);if(ne.stop)return;if(ne.value===!1)return!1;if(ne.value!==void 0&&ne.value!==!0)return ne.value}},S=(P,C,...N)=>h(P,C,N),j=P=>{s.get(P.name)&&l.get(P.name)!==P&&(t.warn(`[vane] duplicate plugin, destroy old: ${P.name}`),T(P.name)),s.set(P.name,{...P,enabled:P.enabled??!0}),l.set(P.name,P),u.delete(P.name),y(),P.init&&Promise.resolve(P.init()).catch(C=>{t.warn(`[vane] init failed: ${P.name}`,C)})},R=P=>P.forEach(j),b=P=>{s.delete(P),l.delete(P),u.delete(P),d=null},T=P=>{const C=s.get(P);C&&(y(),k(P),g(C),b(P))};return{register:j,registerAll:R,unregister:T,getPlugin:P=>s.get(P),getAllPlugins:()=>[...s.values()],getEnabledPlugins:()=>[...s.values()].filter(P=>P.enabled!==!1),getExecutionOrder:()=>[...v()],enable:P=>{const C=s.get(P);C&&(C.enabled=!0,d=null)},disable:P=>{const C=s.get(P);C&&(C.enabled=!1,d=null)},has:P=>s.has(P),executeHook:S,clear:()=>{y(),p+=1,k();const P=[...s.values()].map(g);return s.clear(),l.clear(),u.clear(),Promise.all(P).then(()=>{})},getErrors:()=>[...o],align:async(P,C)=>{const N=++p,q=new Map(P.map(L=>[L.name,L]));for(const L of[...s.keys()]){if(N!==p)return;if(l.get(L)===q.get(L))continue;const ne=s.get(L);y(),await m(ne,"onUnmount",C,[],c),k(L),await g(ne),b(L)}for(const L of P){if(N!==p)return;l.get(L.name)!==L&&j(L)}},peekOrder:v}}var Nh=Object.defineProperty,Mh=(e,t,n)=>t in e?Nh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lh=(e,t,n)=>Mh(e,t+"",n);class hi extends Or.Component{constructor(){super(...arguments),Lh(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidUpdate(t){var o,i;const n=t.resetKeys??[],r=this.props.resetKeys??[];this.state.error&&(n.length!==r.length||n.some((s,l)=>!Object.is(s,r[l])))&&((i=(o=this.props).onReset)==null||i.call(o),this.setState({error:null}))}componentDidCatch(t,n){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(o=(r=this.props).onError)==null||o.call(r,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}}let uo=null;function Ah(e=!1){if(uo&&!e)return uo;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(o),s=/Mobile|Android|iPhone/i.test(o),l=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return uo={type:i?"tablet":s?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:t,viewportHeight:n,isTouchDevice:l,isRetina:r>=2},uo}function Zu(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;const n=Object.keys(e),r=Object.keys(t);return n.length!==r.length?!1:n.every(o=>Object.is(e[o],t[o]))}function Ih(e){const{plugins:t,props:n,data:r,initialState:o,containerRef:i,enableDebug:s=!1,managerOptions:l,extendContext:u}=e,c=x.useRef(null),d=i??c,p=x.useRef(null);p.current||(p.current=zh(l));const f=p.current,y=x.useRef(null);y.current||(y.current=Dh());const w=y.current,v=x.useRef(new Map),[k,g]=x.useState(o??{}),[,m]=x.useState(0),h=x.useCallback(()=>m(F=>F+1),[]),S=x.useMemo(()=>Ah(),[]),j=x.useRef(n);Zu(j.current,n)||(j.current=n);const R=j.current,b=x.useRef(r);Zu(b.current,r)||(b.current=r);const T=b.current,P=x.useRef(null),C=x.useMemo(()=>{const F={props:R,data:T,bus:w,refs:{container:d,getContainer:()=>d.current},state:k,setState:I=>g(V=>({...V,...I})),shared:v.current,deviceInfo:S,forceUpdate:h,getSize:()=>{const I=d.current;return I?{width:I.offsetWidth,height:I.offsetHeight}:{width:0,height:0}},logger:console};return u?u(F):F},[R,T,k,S,w,u]);x.useLayoutEffect(()=>{P.current=C},[C]);const N=x.useRef(t),q=N.current;q!==t&&(q.length!==t.length||t.some((F,I)=>F!==q[I]))&&(N.current=t);const L=N.current,ne=x.useRef(0);x.useLayoutEffect(()=>{const F=++ne.current,I=P.current;return f.align(L,I).then(()=>{ne.current===F&&(s&&console.debug("[vane/plugin-core] plugins registered:",L.map(V=>V.name).join("|")),f.executeHook("onMount",I))}),()=>{ne.current+=1}},[L,f,s]),x.useLayoutEffect(()=>()=>{const F=P.current;if(!f.getExecutionOrder().some(I=>{var V;return typeof((V=I.hooks)==null?void 0:V.onUnmount)=="function"})){f.clear();return}f.executeHook("onUnmount",F).finally(()=>f.clear())},[f]);const Xe=f.peekOrder(),De=x.useRef([]),Le=x.useMemo(()=>{const F=new Map(L.map(re=>[re.name,re])),I=L.filter(re=>{var Ze;return re.enabled!==!1&&((Ze=f.getPlugin(re.name))==null?void 0:Ze.enabled)!==!1}),V=Xe.length===I.length?Xe.map(re=>F.get(re.name)??re):$p(I),ue=De.current;return ue.length===V.length&&V.every((re,Ze)=>re===ue[Ze])?ue:(De.current=V,V)},[L,f,Xe]),E=x.useRef(C);E.current=C;const O=x.useCallback((F,I)=>{var re;const V=E.current;let ue=I;for(const Ze of Le){const sn=(re=Ze.hooks)==null?void 0:re[F];if(typeof sn=="function")try{ue=F==="transformData"?sn(V,ue):sn(ue)}catch(Wr){(V.logger??console).warn(`[plugin-core] ${Ze.name}.${F} 执行失败，已跳过`,Wr)}}return ue},[Le]),z=x.useCallback(F=>O("transformProps",F),[O]),H=x.useCallback(F=>O("transformData",F),[O]),ee=x.useCallback((F,...I)=>f.executeHook(F,P.current,...I),[f]);return{manager:f,bus:w,context:C,state:k,setState:C.setState,execute:ee,transformProps:z,transformData:H,orderedPlugins:Le}}x.createContext(null);function Fh(e,t,n){var o,i;if(e.enabled===!1||typeof((o=e.hooks)==null?void 0:o[t])!="function")return!1;const r=(i=e.config)==null?void 0:i.slotPosition;return n==="before"?r==="before":n==="footer"?r===void 0||r==="after"||r==="footer":r===void 0||r==="after"}function Uh(e,t){var n,r;return(((n=e.config)==null?void 0:n.order)??0)-(((r=t.config)==null?void 0:r.order)??0)||(t.priority??0)-(e.priority??0)}function Bh(e,t,n){const r=new Set;return e.map(o=>{var i;if(r.has(o.name))return null;r.add(o.name);try{const s=(i=o.hooks)==null?void 0:i[n],l=s==null?void 0:s(t);return l==null?null:a.jsx(hi,{children:l},`vane-slot-${o.name}`)}catch(s){return console.warn(`[vane/plugin-core] 插件 ${o.name} 的 ${n} 渲染失败`,s),null}})}function ts(e,t,n){const{hook:r,position:o="after"}=n,i=e.filter(s=>Fh(s,r,o)).sort(Uh);return Bh(i,t,r)}const yi=x.createContext(null);function zp(e){return[...e].sort((t,n)=>{var r,o;return(((r=t.config)==null?void 0:r.order)??0)-(((o=n.config)==null?void 0:o.order)??0)||(n.priority??0)-(t.priority??0)})}function Vh(e){const t={};for(const n of Eh)t[n]=zp(e.filter(r=>r.enabled!==!1&&typeof r.hooks[n]=="function"));return t}function Wh(e,t,n){return e.reduce((r,o)=>{try{const i=o.hooks[n](t);return i==null||r.push(a.jsx(hi,{children:i},`resume-slot-${o.name}`)),r}catch(i){return console.warn(`[vane-resume] 插件 ${o.name} 的 ${n} 渲染失败`,i),r}},[])}function Np(e){return typeof e=="function"?e():e}function Hh(e,t,n,r){const o=zp(e.filter(i=>i.enabled!==!1&&typeof i.hooks[n]=="function"));for(let i=o.length-1;i>=0;i--){const s=o[i];try{const l=s.hooks[n](t);if(l!=null)return a.jsx(hi,{children:l},`resume-content-${s.name}`)}catch(l){console.warn(`[vane-resume] 插件 ${s.name} 的 ${n} 渲染失败`,l)}}return Np(r)}function co(e){const t=x.useContext(yi),n=t?t.slots[e]:null,r=t?t.context:null;return x.useMemo(()=>n&&r?Wh(n,r,e):[],[n,r,e])}function Jn(e,t){const n=x.useContext(yi),r=n?n.orderedPlugins:null,o=n?n.context:null,i=x.useRef(t);i.current=t;const s=x.useRef(null),l=()=>{const d=i.current,p=s.current;if(p&&p.fallback===d)return p.node;const f=Np(d);return s.current={fallback:d,node:f},f},c=typeof t=="function"?null:t;return x.useMemo(()=>r&&o?Hh(r,o,e,l):l(),[r,o,e,c])}function Kh(){const e=x.useContext(yi);return(e==null?void 0:e.context)??null}const $={bg:"#ffffff",text:"#1f2328",muted:"#5d636a",faint:"#8a9099",line:"#e3e6ea",lineStrong:"#d4d8de",accent:"#2f6feb",accentInk:"#ffffff",markBg:"#fff3bf",markText:"#1f2328",chipBg:"#f2f3f5",chipText:"#1f2328"};function B(e){return{background:e?$.accent:$.chipBg,color:e?$.accentInk:$.chipText,border:`1px solid ${$.lineStrong}`,borderRadius:"var(--vr-radius, 6px)",fontSize:12,padding:"3px 9px",cursor:"pointer"}}function Er(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Qh(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const Yh=new Set(["http:","https:","mailto:","tel:"]);function Dr(e){if(typeof e!="string")return;const t=e.trim();if(t){if(t.startsWith("#")||t.startsWith("/")||t.startsWith("./")||t.startsWith("../"))return t;try{const{protocol:n}=new URL(t,"https://vr.invalid/");return Yh.has(n)?t:void 0}catch{return}}}const Jh=50,po=new Map;function qh(e){const t=e.join("");let n=po.get(t);return n||(po.size>=Jh&&po.clear(),n=new RegExp(`(${e.map(r=>Qh(r)).join("|")})`,"gi"),po.set(t,n)),n.lastIndex=0,n}function Bt(e,t){if(!e)return e;const n=(t??[]).filter(Boolean);if(n.length===0)return e;const r=qh(n),o=[];let i=0,s,l=0;for(;(s=r.exec(e))!==null;)s.index>i&&o.push(e.slice(i,s.index)),o.push(a.jsx("mark",{style:{background:$.markBg,color:$.markText,padding:"0 2px",borderRadius:2},children:s[0]},`kw-${l++}`)),i=s.index+s[0].length,s.index===r.lastIndex&&r.lastIndex++;return i<e.length&&o.push(e.slice(i)),o.length?o:e}const an={work:"工作经历",education:"教育背景",skills:"专业技能",projects:"项目经历",extra:"荣誉 / 语言 / 证书",attachments:"附件"},rn=x.forwardRef(function(t,n){var ue,re,Ze,sn,Wr,Oa;const{children:r,containerClassName:o,containerStyle:i,onMount:s,onUnmount:l,containerRefExternal:u}=t,c=x.useRef(null),d=u??c,[,p]=x.useState(0),f=Kh(),y=x.useRef(f);y.current=f;const w=x.useRef(t);w.current=t;const v=(f==null?void 0:f.data)??t.data,k=((ue=f==null?void 0:f.state)==null?void 0:ue.highlightKeywords)??[],g=((re=f==null?void 0:f.state)==null?void 0:re.collapsed)??[],m=!!((Ze=f==null?void 0:f.state)!=null&&Ze.collapseMode),h=((sn=f==null?void 0:f.state)==null?void 0:sn.templateVars)??{},S=((Wr=f==null?void 0:f.state)==null?void 0:Wr.themeVars)??{};x.useImperativeHandle(n,()=>({getContainer:()=>d.current,forceUpdate:()=>p(K=>K+1),getSize:()=>{const K=d.current;return K?{width:K.offsetWidth,height:K.offsetHeight}:{width:0,height:0}},getSectionOrder:()=>{var K,Ae;return((Ae=(K=y.current)==null?void 0:K.state)==null?void 0:Ae.sectionOrder)??w.current.defaultSectionOrder??[...Go]}}),[d]),x.useEffect(()=>(s==null||s(),()=>l==null?void 0:l()),[]);const j=K=>{if(!f)return;const Ae=new Set(g);Ae.has(K)?Ae.delete(K):Ae.add(K),f.setState({collapsed:[...Ae]})},R=((Oa=f==null?void 0:f.state)==null?void 0:Oa.sectionOrder)??t.defaultSectionOrder??Go,b=k.join(""),T=co("renderToolbar"),P=co("renderBasics"),C=co("renderAttachments"),N=x.useMemo(()=>{var K;return(K=v==null?void 0:v.attachments)!=null&&K.length?ry(v.attachments,k):null},[v==null?void 0:v.attachments,b]),q=C.length>0?C:N,L=co("renderFooter"),ne=x.useMemo(()=>()=>v?Xh(v.work??[],k):null,[v==null?void 0:v.work,b]),Xe=x.useMemo(()=>()=>v?Zh(v.education??[],k):null,[v==null?void 0:v.education,b]),De=x.useMemo(()=>()=>v?ey(v.skills??[],k):null,[v==null?void 0:v.skills,b]),Le=x.useMemo(()=>()=>{var K;return(K=v==null?void 0:v.projects)!=null&&K.length?ty(v.projects,k):null},[v==null?void 0:v.projects,b]),E=x.useMemo(()=>()=>v?ny(v,k):null,[v,b]),O=Jn("renderWork",ne),z=Jn("renderEducation",Xe),H=Jn("renderSkills",De),ee=Jn("renderProjects",Le),F=Jn("renderExtra",E),I=x.useMemo(()=>v?Gh(v,k):null,[v,b]),V=(K,Ae,Ri)=>{if(Ri==null)return null;const Hr=m&&g.includes(K);return a.jsxs("section",{"data-section-key":K,className:"vr-section",style:{padding:"var(--vr-pad, 16px) 20px",borderTop:`1px solid ${$.line}`},children:[a.jsxs("header",{className:"vr-section-head",style:{display:"flex",alignItems:"center",gap:8,marginBottom:Hr?0:10},children:[a.jsx("h2",{style:{margin:0,fontSize:"var(--vr-h2, 15px)",fontWeight:700,color:$.text,letterSpacing:.5},children:Ae}),m&&a.jsx("button",{type:"button","aria-label":Hr?"展开":"折叠",onClick:()=>j(K),style:{marginLeft:"auto",background:$.chipBg,color:$.text,border:`1px solid ${$.line}`,borderRadius:"var(--vr-radius, 6px)",fontSize:12,padding:"2px 8px",cursor:"pointer"},children:Hr?"展开":"折叠"})]}),!Hr&&a.jsx("div",{className:"vr-section-body",children:Ri})]},K)};return a.jsxs("div",{ref:d,className:`vr-root ${o||""}`,style:{position:"relative",boxSizing:"border-box",background:$.bg,color:$.text,maxWidth:820,margin:"0 auto",fontFamily:"var(--vr-font, system-ui, -apple-system, 'Segoe UI', Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif)",fontSize:14,lineHeight:1.6,...h,...S,...i},children:[T.length>0&&a.jsx("div",{className:"vr-toolbar",style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,padding:"10px 20px",borderBottom:`1px solid ${$.line}`},children:T}),R.map(K=>{var Ae;switch(K){case"basics":return!I&&P.length===0?null:V("basics","基本信息",a.jsxs(a.Fragment,{children:[I,P]}));case"work":return V("work",an.work,O);case"education":return V("education",an.education,z);case"skills":return V("skills",an.skills,H);case"projects":return(Ae=v==null?void 0:v.projects)!=null&&Ae.length?V("projects",an.projects,ee):null;case"extra":return V("extra",an.extra,F);case"attachments":return V("attachments",an.attachments,q);default:return null}}),L.length>0&&a.jsx("div",{className:"vr-footer",style:{display:"flex",flexWrap:"wrap",gap:12,padding:"14px 20px",borderTop:`1px solid ${$.line}`},children:L}),r]})});rn.displayName="ResumeCore";function ie({value:e,kw:t}){return a.jsx(a.Fragment,{children:Bt(e,t)})}function Gh(e,t){var r;const n=e.basics;return n?a.jsxs("div",{className:"vr-basics",style:{display:"flex",gap:16,flexWrap:"wrap"},children:[n.avatar&&a.jsx("img",{src:n.avatar,alt:n.name,style:{width:72,height:72,borderRadius:"50%",objectFit:"cover",border:`1px solid ${$.line}`}}),a.jsxs("div",{style:{flex:1,minWidth:220},children:[a.jsx("div",{style:{fontSize:22,fontWeight:800,color:$.text},children:n.name}),n.title&&a.jsx("div",{style:{color:"var(--vr-accent, #2f6feb)",fontWeight:600,marginTop:2},children:a.jsx(ie,{value:n.title,kw:t})}),n.summary&&a.jsx("p",{style:{margin:"8px 0 0",color:$.muted,fontSize:13},children:a.jsx(ie,{value:n.summary,kw:t})}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px 16px",marginTop:8,fontSize:13,color:$.muted},children:[n.location&&a.jsxs("span",{children:["📍 ",a.jsx(ie,{value:n.location,kw:t})]}),n.birthDate&&a.jsxs("span",{children:["🎂 ",a.jsx(ie,{value:n.birthDate,kw:t})]})]}),((r=n.contacts)==null?void 0:r.length)>0&&a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px 16px",marginTop:4,fontSize:13},children:n.contacts.map((o,i)=>{const s=Dr(o.href);return a.jsx("span",{style:{color:$.text},children:s?a.jsxs("a",{href:s,style:{color:"var(--vr-accent, #2f6feb)",textDecoration:"none"},children:[o.label,"：",a.jsx(ie,{value:o.value,kw:t})]}):a.jsxs("span",{children:[o.label,"：",a.jsx(ie,{value:o.value,kw:t})]})},i)})})]})]}):null}function la(e,t){return`${e} — ${t}`}function Xh(e,t){return e.length?a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:e.map((n,r)=>{var o;return a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx("div",{style:{width:120,flexShrink:0,color:$.faint,fontSize:12,paddingTop:2},children:la(n.start,n.end)}),a.jsxs("div",{style:{flex:1},children:[a.jsxs("div",{style:{fontWeight:700,color:$.text},children:[a.jsx(ie,{value:n.company,kw:t}),n.role&&a.jsxs("span",{style:{fontWeight:400,color:$.muted},children:[" · ",a.jsx(ie,{value:n.role,kw:t})]})]}),n.location&&a.jsx("div",{style:{color:$.faint,fontSize:12},children:n.location}),((o=n.highlights)==null?void 0:o.length)>0&&a.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:18,color:$.muted},children:n.highlights.map((i,s)=>a.jsx("li",{children:a.jsx(ie,{value:i,kw:t})},s))})]})]},n.id??r)})}):null}function Zh(e,t){return e.length?a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:e.map((n,r)=>a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx("div",{style:{width:120,flexShrink:0,color:$.faint,fontSize:12,paddingTop:2},children:la(n.start,n.end)}),a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{style:{fontWeight:700,color:$.text},children:a.jsx(ie,{value:n.school,kw:t})}),a.jsxs("div",{style:{color:$.muted},children:[a.jsx(ie,{value:n.degree,kw:t}),n.major&&a.jsxs("span",{children:[" · ",a.jsx(ie,{value:n.major,kw:t})]})]})]})]},n.id??r))}):null}function ey(e,t){return e.length?a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:e.map((n,r)=>a.jsxs("div",{style:{display:"flex",gap:10,alignItems:"flex-start"},children:[a.jsx("div",{style:{width:110,flexShrink:0,color:$.muted,fontWeight:600},children:a.jsx(ie,{value:n.category,kw:t})}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:n.items.map((o,i)=>a.jsx("span",{style:{background:$.chipBg,color:$.chipText,border:`1px solid ${$.line}`,borderRadius:"var(--vr-radius, 12px)",padding:"2px 10px",fontSize:12},children:a.jsx(ie,{value:o,kw:t})},i))})]},r))}):null}function ty(e,t){return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:e.map((n,r)=>a.jsxs("div",{children:[a.jsxs("div",{style:{fontWeight:700,color:$.text},children:[a.jsx(ie,{value:n.name,kw:t}),n.role&&a.jsxs("span",{style:{fontWeight:400,color:$.muted},children:[" · ",a.jsx(ie,{value:n.role,kw:t})]}),(n.start||n.end)&&a.jsx("span",{style:{float:"right",color:$.faint,fontSize:12,fontWeight:400},children:la(n.start??"",n.end??"")})]}),a.jsx("p",{style:{margin:"4px 0 0",color:$.muted,fontSize:13},children:a.jsx(ie,{value:n.desc,kw:t})}),n.links&&n.links.length>0&&a.jsx("div",{style:{marginTop:4},children:n.links.map((o,i)=>{const s=Dr(o);return s?a.jsxs("a",{href:s,style:{color:"var(--vr-accent, #2f6feb)",fontSize:12,marginRight:12,textDecoration:"none"},children:["链接",i+1," ↗"]},i):null})})]},n.id??r))})}function ny(e,t){var r,o,i;const n=[];return(r=e.awards)!=null&&r.length&&n.push(a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:600,color:$.text,marginBottom:4},children:"荣誉奖项"}),a.jsx("ul",{style:{margin:0,paddingLeft:18,color:$.muted},children:e.awards.map((s,l)=>a.jsxs("li",{children:[a.jsx(ie,{value:s.title,kw:t})," · ",s.issuer,s.date&&a.jsxs("span",{style:{color:$.faint},children:[" · ",s.date]})]},l))})]},"awards")),(o=e.languages)!=null&&o.length&&n.push(a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:600,color:$.text,marginBottom:4},children:"语言能力"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:e.languages.map((s,l)=>a.jsxs("span",{style:{background:$.chipBg,color:$.chipText,borderRadius:"var(--vr-radius, 12px)",padding:"2px 10px",fontSize:12},children:[a.jsx(ie,{value:s.name,kw:t})," · ",s.level]},l))})]},"langs")),(i=e.certificates)!=null&&i.length&&n.push(a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:600,color:$.text,marginBottom:4},children:"证书"}),a.jsx("ul",{style:{margin:0,paddingLeft:18,color:$.muted},children:e.certificates.map((s,l)=>a.jsxs("li",{children:[a.jsx(ie,{value:s.name,kw:t})," · ",s.issuer,s.date&&a.jsxs("span",{style:{color:$.faint},children:[" · ",s.date]})]},l))})]},"certs")),n.length?a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:n}):null}function ry(e,t){return a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10},children:e.map((n,r)=>a.jsxs("a",{href:Dr(n.url),target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:8,background:$.chipBg,color:$.text,border:`1px solid ${$.line}`,borderRadius:"var(--vr-radius, 8px)",padding:"8px 12px",textDecoration:"none",fontSize:13},children:[a.jsx("span",{style:{color:"var(--vr-accent, #2f6feb)",textTransform:"uppercase",fontSize:11,fontWeight:700},children:n.kind}),a.jsx("span",{children:a.jsx(ie,{value:n.name,kw:t})}),n.size?a.jsxs("span",{style:{color:$.faint,fontSize:11},children:[(n.size/1024).toFixed(0),"KB"]}):null]},n.id??r))})}function oy({orderedPlugins:e,context:t,children:n}){const r=x.useMemo(()=>Vh(e),[e]),o=x.useMemo(()=>({orderedPlugins:e,context:t,slots:r}),[e,t,r]);return a.jsx(yi.Provider,{value:o,children:n})}const iy=new Set(["children","containerRefExternal"]);function sy(e,t){const n=e,r=t,o=new Set([...Object.keys(n),...Object.keys(r)]);for(const i of o)if(!iy.has(i)&&!Object.is(n[i],r[i]))return!1;return!0}function Lr(e,t){const n=Array.isArray(t)?{plugins:t}:t,{plugins:r,enableDebug:o=!1}=n,i=x.forwardRef((s,l)=>{const u=x.useRef(null),c=x.useCallback(R=>R,[]),d=Ih({plugins:r,props:s,data:s.data,containerRef:u,extendContext:c,enableDebug:o}),p=d.context,[f,y]=x.useState(null);x.useEffect(()=>d.bus.on("resume:data-replace",R=>{const b=R&&typeof R=="object"&&"data"in R?R.data:R;y(b??null)}),[d.bus]);const w=x.useRef(d.context.data);x.useEffect(()=>{w.current!==d.context.data&&(w.current=d.context.data,y(null))},[d.context.data]);const v=f??s.data,k=x.useMemo(()=>v===void 0?void 0:d.transformData(v),[v,d.transformData,d.state]),g=x.useMemo(()=>({...p,data:k}),[p,k]),m=x.useCallback((R,...b)=>d.execute(R,...b),[d.manager]),h=d.transformProps(s);x.useEffect(()=>{m("onMount")},[m,d.orderedPlugins]);const S=x.useRef(null);x.useEffect(()=>{const R=S.current;S.current=s,!(!R||sy(R,s))&&m("onPropsChange",R,s)},[s,m]);const j={...h,containerRefExternal:u,debug:h.debug??o,onMount:()=>{var R;(R=h.onMount)==null||R.call(h)},onUnmount:()=>{var R;(R=h.onUnmount)==null||R.call(h)},children:a.jsxs(hi,{children:[ts(d.orderedPlugins,g,{hook:"renderHeader",position:"before"}),h.children,ts(d.orderedPlugins,g,{hook:"renderOverlay"}),ts(d.orderedPlugins,g,{hook:"renderHeader",position:"after"})]})};return a.jsx(oy,{orderedPlugins:d.orderedPlugins,context:g,children:a.jsx(e,{ref:l,...j})})});return i.displayName="WithPlugins(ResumeCore)",i}const ly=(e,t)=>"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect width="96" height="96" rx="48" fill="${e}"/><text x="48" y="62" font-size="44" text-anchor="middle" fill="#fff" font-family="sans-serif">${t}</text></svg>`),ay=ly("#2f6feb","林"),on={basics:{name:"林清扬",title:"高级前端工程师 · 组件体系负责人",avatar:ay,summary:"8 年前端经验，主导过 3 个百万级 DAU 产品的组件库与可视化体系建设；擅长把「临时的业务需求」沉淀为可勾选、可组合的插件。",location:"上海",birthDate:"1992-04",contacts:[{type:"phone",label:"手机",value:"138-0000-8866"},{type:"email",label:"邮箱",value:"qingyang.lin@example.com"},{type:"address",label:"所在地",value:"上海 · 徐汇"},{type:"social",label:"GitHub",value:"github.com/qingyang",href:"https://github.com/"}]},work:[{id:"w1",company:"云栖科技",role:"高级前端工程师 / 组件体系负责人",start:"2021-03",end:"至今",location:"上海",highlights:["从 0 搭建插件化组件库，覆盖 20+ 业务模块，复用率从 31% 提升到 78%。","主导可视化排版引擎，把简历 / 主页 / 数据看板的渲染收敛到同一套插槽契约。","推动 TypeScript 全量迁移，类型覆盖率 92%，线上类型相关事故归零。"]},{id:"w2",company:"明远网络",role:"前端工程师",start:"2018-07",end:"2021-02",location:"杭州",highlights:["负责电商中台可视化搭建平台，拖拽编排日均服务 600+ 运营同学。","优化首屏性能，关键路由 LCP 从 3.4s 降到 1.2s。"]},{id:"w3",company:"初芒工作室",role:"前端实习生",start:"2017-06",end:"2018-06",location:"南京",highlights:["参与多个 H5 营销活动页开发，独立交付 12 个活动。","写了第一版组件规范文档。"]}],education:[{id:"e1",school:"东南大学",degree:"硕士",major:"计算机科学与技术",start:"2015-09",end:"2018-06"},{id:"e2",school:"南京邮电大学",degree:"学士",major:"软件工程",start:"2011-09",end:"2015-06"}],skills:[{category:"语言",items:["TypeScript","JavaScript","HTML","CSS"]},{category:"框架",items:["React","Vue","Node.js"]},{category:"工程化",items:["Vite","Turborepo","Monorepo","Vitest"]},{category:"领域",items:["可视化","组件体系","性能优化","插件化架构"]}],projects:[{id:"p1",name:"vane 插件化组件库",role:"作者 / 维护者",start:"2022-01",end:"至今",desc:"把业务需求拆成可勾选的插件，核心只负责结构化数据与插槽；20+ 插件按需装配。",links:["https://vane.dev","https://github.com/"]},{id:"p2",name:"可视化排版引擎",role:"核心开发",desc:"统一简历 / 主页 / 看板的渲染契约，CSS 变量驱动模板切换。",links:["https://vane.dev/engine"]}],awards:[{id:"a1",title:"年度技术之星",issuer:"云栖科技",date:"2023"},{id:"a2",title:"开源贡献奖",issuer:"CNCF",date:"2022"}],languages:[{id:"l1",name:"中文",level:"母语"},{id:"l2",name:"English",level:"CET-6 / 可读写"}],certificates:[{id:"c1",name:"系统架构设计师",issuer:"工信部",date:"2021"},{id:"c2",name:"PMP",issuer:"PMI",date:"2020"}],attachments:[{id:"at1",name:"作品集.pdf",kind:"pdf",url:"https://vane.dev/portfolio.pdf",size:24e5},{id:"at2",name:"架构图.png",kind:"image",url:"https://vane.dev/arch.png"},{id:"at3",name:"在线主页",kind:"link",url:"https://vane.dev/u/qingyang"}]},uy={slug:"basic",title:"裸核心",group:"basic",intro:"ResumeCore 接收 ResumeData，按板块顺序渲染；不装任何插件时就是最朴素的纵向简历。",why:"先看底座：所有插件都是在这个结构化核心之上做增强，而不是重写它。",plugs:[],props:[]};function cy(e){return a.jsx(rn,{data:on,containerStyle:{maxWidth:560,margin:"0 auto"}})}const dy=Object.freeze(Object.defineProperty({__proto__:null,default:cy,meta:uy},Symbol.toStringTag,{value:"Module"})),py="TemplateSwitch",fy="模板切换：在经典 / 现代 / 紧凑 / 学术等版式间切换，经 CSS 变量驱动整体观感。",my="0.1.0",gy=["layout","template","renderToolbar","onMount"],hy=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"},{name:"resume:template-change",when:"切换模板时",description:"广播模板 id，触发版式重排"}],yy=[],vy="只读取 context 字段（props / state / data），不调用上下文方法",xy=[{name:"templates",type:"TemplateDef[]",default:"4 套内置",description:"模板定义（id / label / vars 为 CSS 变量覆盖）"},{name:"defaultId",type:"string",default:"classic",description:"默认模板 id"}],wy="withResumePlugins(ResumeCore, [createTemplateSwitchPlugin({ defaultId: 'modern' })])",aa={name:py,description:fy,since:my,tags:gy,events:hy,methods:yy,methodsNote:vy,config:xy,example:wy},Sy=[{id:"classic",label:"经典",vars:{"--vr-accent":"#2f6feb","--vr-pad":"16px","--vr-radius":"6px","--vr-h2":"15px","--vr-font":"system-ui, -apple-system, 'Segoe UI', Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif"}},{id:"modern",label:"现代",vars:{"--vr-accent":"#7c3aed","--vr-pad":"22px","--vr-radius":"14px","--vr-h2":"18px"}},{id:"compact",label:"紧凑",vars:{"--vr-accent":"#0ea5a4","--vr-pad":"10px","--vr-radius":"4px","--vr-h2":"14px"}},{id:"academic",label:"学术",vars:{"--vr-accent":"#1f6f54","--vr-pad":"18px","--vr-radius":"2px","--vr-h2":"16px","--vr-font":"Georgia, 'Times New Roman', serif"}}],vi=(e={})=>{var o;const t=e.templates??Sy,n=e.defaultId??((o=t[0])==null?void 0:o.id),r=i=>t.find(s=>s.id===i)??t[0];return{name:"template-switch",version:"0.1.0",description:aa.description,priority:12,config:{order:12},hooks:{onMount:i=>{if(i.state.template===void 0){const s=r(n);i.setState({template:s.id,templateVars:s.vars})}},renderToolbar:i=>{const s=i.state.template??n;return a.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[a.jsx("span",{style:{fontSize:12,color:"var(--vr-faint, #8a9099)"},children:"模板"}),t.map(l=>a.jsx("button",{type:"button",onClick:()=>{i.setState({template:l.id,templateVars:l.vars}),i.bus.emit("resume:template-change",l.id)},style:B(s===l.id),children:l.label},l.id))]},"template-switch")}}}};vi.meta=aa;const ky="ThemeCustomize",Py="主题配色定制：预设强调色 + 自定义取色器，经 CSS 变量注入容器。",_y="0.1.0",Cy=["theme","renderToolbar","onMount"],jy=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"}],Ry=[],by="只读取 context 字段（props / state / data），不调用上下文方法",Ey=[{name:"presets",type:"ThemePreset[]",default:"4 套内置",description:"主题预设（id / label / vars）"},{name:"default",type:"string",default:"blue",description:"默认主题 id"}],Dy="withResumePlugins(ResumeCore, [createThemeCustomizePlugin()])",ua={name:ky,description:Py,since:_y,tags:Cy,events:jy,methods:Ry,methodsNote:by,config:Ey,example:Dy},Ty=[{id:"blue",label:"蓝",vars:{"--vr-accent":"#2f6feb"}},{id:"orange",label:"橙",vars:{"--vr-accent":"#e8590c"}},{id:"green",label:"绿",vars:{"--vr-accent":"#1f9d55"}},{id:"mono",label:"墨",vars:{"--vr-accent":"#1f2328"}}],ns=(e,t)=>{e.setState({themeVars:t,theme:t["--vr-accent"]??e.state.theme})},Ar=(e={})=>{const t=e.presets??Ty;return{name:"theme-customize",version:"0.1.0",description:ua.description,priority:18,config:{order:18},hooks:{onMount:n=>{n.state.theme===void 0&&t[0]&&ns(n,t[0].vars)},renderToolbar:n=>a.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[a.jsx("span",{style:{fontSize:12,color:"var(--vr-faint, #8a9099)"},children:"主题"}),t.map(r=>a.jsx("button",{type:"button",onClick:()=>ns(n,r.vars),style:B(n.state.theme===r.vars["--vr-accent"]),children:r.label},r.id)),a.jsx("input",{type:"color",defaultValue:String(n.state.theme??"#2f6feb"),onChange:r=>ns(n,{"--vr-accent":r.target.value}),style:{width:28,height:24,border:"none",background:"none",cursor:"pointer"},"aria-label":"自定义强调色"})]},"theme-customize")}}};Ar.meta=ua;const Oy="MultiLang",$y="多语言：在预设语言间切换，整体翻译文本字段（缺失字段保留原文降级）。",zy="0.1.0",Ny=["i18n","transformData","renderToolbar","onMount"],My=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"transformData",when:"渲染前，对简历数据链式改写",description:"模板 / 语言切换、字段脱敏、结构调整"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"},{name:"resume:lang-change",when:"切换简历语言时",description:"广播语言 code，触发数据与文案切换"}],Ly=[],Ay="只读取 context 字段（props / state / data），不调用上下文方法",Iy=[{name:"locales",type:"{code,label}[]",default:"-",description:"语言列表"},{name:"default",type:"string",default:"首个语言",description:"默认语言 code"},{name:"detect",type:"() => string",default:"-",description:"可选的运行时语言探测"},{name:"translations",type:"Record<locale, Partial<ResumeData>>",default:"-",description:"各语言翻译（顶层字段整体覆盖）"}],Fy="withResumePlugins(ResumeCore, [createMultiLangPlugin({ locales:[{code:'zh',label:'中'},{code:'en',label:'EN'}], translations: { en: { basics:{ name:'John', title:'Engineer', contacts:[] } } } })])",ca={name:Oy,description:$y,since:zy,tags:Ny,events:My,methods:Ly,methodsNote:Ay,config:Iy,example:Fy},Fn=e=>{var i;if(!e||!Array.isArray(e.locales)||e.locales.length===0||!e.translations)throw new Error("[MultiLang] 需要非空的 locales 与 translations");const{locales:t,translations:n}=e,r=e.default??((i=e.detect)==null?void 0:i.call(e))??t[0].code,o=(s,l)=>{const u=l.basics?{...s.basics??{},...l.basics}:s.basics;return{...s,...l,basics:u}};return{name:"multi-lang",version:"0.1.0",description:ca.description,priority:14,config:{order:14},hooks:{onMount:s=>{s.state.lang===void 0&&s.setState({lang:r})},transformData:(s,l)=>{const u=s.state.lang??r,c=n[u];return c?o(l,c):l},renderToolbar:s=>{const l=s.state.lang??r;return a.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[a.jsx("span",{style:{fontSize:12,color:"var(--vr-faint, #8a9099)"},children:"语言"}),t.map(u=>a.jsx("button",{type:"button",onClick:()=>{s.setState({lang:u.code}),s.bus.emit("resume:lang-change",u.code)},style:B(l===u.code),children:u.label},u.code))]},"multi-lang")}}}};Fn.meta=ca;const Uy="AiPolish",By="AI 润色：调用可插拔服务润色摘要 / 工作描述 / 项目描述，可一键还原（不硬编码密钥）。",Vy="0.1.0",Wy=["ai","transformData","renderToolbar"],Hy=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"transformData",when:"渲染前，对简历数据链式改写",description:"模板 / 语言切换、字段脱敏、结构调整"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"}],Ky=[],Qy="只读取 context 字段（props / state / data），不调用上下文方法",Yy=[{name:"fields",type:'("summary"|"work"|"projects")[]',default:"三项全开",description:"润色字段"},{name:"tone",type:"string",default:"-",description:"语气偏好，透传给 polish"},{name:"polish",type:"(text, field) => Promise<string>",default:"-",description:"可插拔润色服务（必填，否则按钮禁用）"}],Jy="withResumePlugins(ResumeCore, [createAiPolishPlugin({ polish: async (t) => myAiRewrite(t) })])",da={name:Uy,description:By,since:Vy,tags:Wy,events:Hy,methods:Ky,methodsNote:Qy,config:Yy,example:Jy},rs="aipolish:polished",Ir=(e={})=>{const t=e.fields??["summary","work","projects"],n=e.polish,r=i=>String(i.state.lang??"default"),o=i=>i.shared.get(rs);return{name:"ai-polish",version:"0.1.0",description:da.description,priority:16,config:{order:16},dependencies:["multi-lang"],hooks:{onMount:i=>{i.state.aiPolishEnabled===void 0&&i.setState({aiPolishEnabled:!1})},transformData:(i,s)=>{if(!i.state.aiPolishEnabled)return s;const l=o(i);if(!l||l.lang!==r(i))return s;const u=Er(s);return t.includes("summary")&&l.summary&&u.basics&&(u.basics.summary=l.summary),t.includes("work")&&l.work&&(u.work??[]).forEach((c,d)=>{var f;const p=(f=l.work)==null?void 0:f[d];Array.isArray(p)&&p.length===c.highlights.length&&(c.highlights=[...p])}),t.includes("projects")&&l.projects&&(u.projects??[]).forEach((c,d)=>{var f;const p=(f=l.projects)==null?void 0:f[d];typeof p=="string"&&(c.desc=p)}),u},renderToolbar:i=>{const s=o(i),l=!!i.state.aiPolishEnabled&&(s==null?void 0:s.lang)===r(i),u=!!i.state.aiPolishing,c=async()=>{var f;if(!n){i.logger.warn("[AiPolish] 未配置 config.polish，跳过润色");return}const d=r(i),p=Er(i.data);i.setState({aiPolishing:!0});try{const y={lang:d};t.includes("summary")&&((f=p.basics)!=null&&f.summary)&&(y.summary=await n(p.basics.summary,"summary")),t.includes("work")&&(y.work=await Promise.all((p.work??[]).map(w=>Promise.all((w.highlights??[]).map(v=>n(v,"work")))))),t.includes("projects")&&(y.projects=await Promise.all((p.projects??[]).map(w=>n(w.desc,"projects")))),i.shared.set(rs,y),i.setState({aiPolishEnabled:!0})}catch(y){i.logger.error("[AiPolish] 润色失败",y)}finally{i.setState({aiPolishing:!1})}};return a.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[a.jsx("button",{type:"button",disabled:u||!n,onClick:()=>void c(),style:B(l),children:u?"润色中…":"AI 润色"}),l&&a.jsx("button",{type:"button",onClick:()=>{i.shared.delete(rs),i.setState({aiPolishEnabled:!1})},style:B(!1),children:"还原"})]},"ai-polish")}}}};Ir.meta=da;const qy="PrivacyMask",Gy="隐私模式：整页毛玻璃视觉遮挡 + 配置字段的数据级隐藏（默认 summary/contacts）。毛玻璃不防复制，敏感信息请确保位于隐藏字段或已脱敏。",Xy="0.1.0",Zy=["privacy","renderOverlay","transformData","renderToolbar"],ev=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"transformData",when:"渲染前，对简历数据链式改写",description:"模板 / 语言切换、字段脱敏、结构调整"},{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在主内容之上",description:"渲染浮层内容（角标、提示、动画、工具条），不挤占主内容布局"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"}],tv=[],nv="只读取 context 字段（props / state / data），不调用上下文方法",rv=[{name:"mode",type:'"blur" | "hide"',default:"blur",description:"毛玻璃视觉遮罩 / 仅字段级隐藏（两者都做数据级隐藏）"},{name:"fields",type:"string[]",default:'["summary","contacts"]',description:"隐私模式下隐藏的字段"}],ov="withResumePlugins(ResumeCore, [createPrivacyMaskPlugin({ mode: 'blur' })])",pa={name:qy,description:Gy,since:Xy,tags:Zy,events:ev,methods:tv,methodsNote:nv,config:rv,example:ov},Fr=(e={})=>{const t=e.mode??"blur",n=e.fields??["summary","contacts"];return{name:"privacy-mask",version:"0.1.0",description:pa.description,priority:42,config:{order:42},dependencies:["contact-desensitize"],hooks:{onMount:r=>{r.state.privacyOn===void 0&&r.setState({privacyOn:!1})},renderToolbar:r=>{const o=!!r.state.privacyOn;return a.jsx("button",{type:"button",onClick:()=>r.setState({privacyOn:!o}),style:B(o),children:o?"隐私：开":"隐私：关"},"privacy-mask")},transformData:(r,o)=>{if(!r.state.privacyOn)return o;const i=Er(o);return n.includes("summary")&&i.basics&&(i.basics.summary="*** 已隐藏 ***"),n.includes("contacts")&&i.basics&&(i.basics.contacts=[]),i},renderOverlay:r=>!r.state.privacyOn||t!=="blur"?null:a.jsx("div",{"data-vr-privacy-mask":"",style:{position:"absolute",inset:0,backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",background:"rgba(255,255,255,0.25)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50,pointerEvents:"none"},children:a.jsx("span",{style:{background:"rgba(0,0,0,0.6)",color:"#fff",padding:"4px 10px",borderRadius:8,fontSize:12},children:"隐私模式 · 内容已遮挡（敏感字段已隐藏）"})},"privacy-mask-overlay")}}};Fr.meta=pa;const iv="ContactDesensitize",sv="联系方式脱敏：对电话 / 邮箱 / 地址做可逆脱敏（138****1234），公开分享时保护隐私。",lv="0.1.0",av=["privacy","transformData","renderToolbar"],uv=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"transformData",when:"渲染前，对简历数据链式改写",description:"模板 / 语言切换、字段脱敏、结构调整"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"}],cv=[],dv="只读取 context 字段（props / state / data），不调用上下文方法",pv=[{name:"mode",type:'"mask"|"hide"|"show"',default:"mask",description:"脱敏 / 隐藏 / 明文"},{name:"fields",type:"ContactType[]",default:"全部",description:"需脱敏的联系方式类型"},{name:"masks",type:"Partial<Record<type,(v)=>string>>",default:"-",description:"按类型自定义脱敏器"}],fv="withResumePlugins(ResumeCore, [createContactDesensitizePlugin({ mode: 'mask' })])",fa={name:iv,description:sv,since:lv,tags:av,events:uv,methods:cv,methodsNote:dv,config:pv,example:fv},Vt="***",mv=(e,t,n)=>{const r=Array.from(e);return r.length<=t+n?Vt:`${r.slice(0,t).join("")}${Vt}${r.slice(-n).join("")}`},gv=(e,t)=>{switch(e){case"phone":{let n=t.replace(/\D/g,"");return n.length>11&&n.startsWith("86")&&(n=n.slice(2)),n.length<7?Vt:`${n.slice(0,3)}${Vt}${n.slice(-4)}`}case"email":{const n=t.lastIndexOf("@");if(n<=0||n===t.length-1)return Vt;const r=t.slice(0,n),o=t.slice(n+1),i=o.lastIndexOf("."),s=i>=0?o.slice(i):"";return`${r.slice(0,1)||"*"}${Vt}@${o.slice(0,1)}${Vt}${s}`}case"address":case"social":default:return mv(t,2,2)}},Ur=(e={})=>{const t=e.mode??"mask",n=e.fields??["phone","email","address","social"],r=e.masks??{},o=(i,s)=>{if(!n.includes(i.type))return i;const l=s?"***":(r[i.type]??(u=>gv(i.type,u)))(i.value);return{...i,value:l,href:void 0}};return{name:"contact-desensitize",version:"0.1.0",description:fa.description,priority:48,config:{order:48},dependencies:["ai-polish"],hooks:{onMount:i=>{i.state.contactMode===void 0&&i.setState({contactMode:t})},transformData:(i,s)=>{var c;const l=i.state.contactMode??t;if(l==="show")return s;const u=Er(s);return(c=u.basics)!=null&&c.contacts&&(u.basics.contacts=u.basics.contacts.map(d=>o(d,l==="hide"))),u},renderToolbar:i=>{const s=i.state.contactMode??t,l=()=>{const c=s==="show"?"mask":s==="mask"?"hide":"show";i.setState({contactMode:c})},u=s==="show"?"联系：明文":s==="mask"?"联系：脱敏":"联系：隐藏";return a.jsx("button",{type:"button",onClick:l,style:B(s!=="show"),children:u},"contact-desensitize")}}}};Ur.meta=fa;const hv="ExportPdf",yv="导出 PDF：打印通道（配合 PrintOptimize）或 canvas 通道（html2canvas+jsPDF 拼页，按需加载）。",vv="0.1.0",xv=["export","renderToolbar"],wv=[{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在主内容之上",description:"渲染浮层内容（角标、提示、动画、工具条），不挤占主内容布局"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"},{name:"resume:export",when:"点击导出并选定方式后",description:"广播 { method }，由外部执行打印 / 下载"}],Sv=[],kv="只读取 context 字段（props / state / data），不调用上下文方法",Pv=[{name:"method",type:'"print"|"canvas"',default:"print",description:"导出通道"},{name:"fileName",type:"string",default:"resume.pdf",description:"canvas 模式文件名"},{name:"onBeforeExport",type:"() => void",default:"-",description:"导出前回调（如先收起隐私遮罩）"}],_v="withResumePlugins(ResumeCore, [createExportPdfPlugin({ method: 'print' })])",ma={name:hv,description:yv,since:vv,tags:xv,events:wv,methods:Sv,methodsNote:kv,config:Pv,example:_v},Cv=async e=>{const t=Array.from(e.querySelectorAll("img"));await Promise.all(t.map(n=>n.complete?Promise.resolve():new Promise(r=>{const o=()=>{n.removeEventListener("load",o),n.removeEventListener("error",o),r()};n.addEventListener("load",o),n.addEventListener("error",o),setTimeout(o,1500)})))},ga=(e={})=>{const t=e.method??"print",n=e.fileName??"resume.pdf",r=async(o,i)=>{if(!i){o.setState({exportError:"未找到简历容器，无法导出"});return}if(await new Promise(l=>setTimeout(l,0)),i.querySelector("[data-vr-privacy-mask]")){o.setState({exportError:"隐私遮罩开启时无法可靠导出（html2canvas 不支持 backdrop-filter），请先关闭隐私模式"});return}const s=[];i.querySelectorAll(".vr-toolbar, [data-vr-overlay]").forEach(l=>{s.push({el:l,display:l.style.display}),l.style.display="none"});try{await Cv(i);const l=(await zn(async()=>{const{default:k}=await import("./html2canvas.esm-CBrSDip1.js");return{default:k}},[],import.meta.url)).default,{jsPDF:u}=await zn(async()=>{const{jsPDF:k}=await import("./jspdf.es.min-CVsB-JGh.js").then(g=>g.j);return{jsPDF:k}},[],import.meta.url),c=await l(i,{scale:2,backgroundColor:"#ffffff",useCORS:!0,allowTaint:!1,logging:!1,imageTimeout:1500}),d=c.toDataURL("image/png"),p=new u({orientation:"portrait",unit:"pt",format:"a4"}),f=p.internal.pageSize.getWidth(),y=p.internal.pageSize.getHeight(),w=c.height*f/c.width;p.addImage(d,"PNG",0,0,f,w);let v=w-y;for(;v>0;)p.addPage(),p.addImage(d,"PNG",0,-v,f,w),v-=y;p.save(n),o.setState({exportError:null})}catch(l){o.logger.error("[ExportPdf] canvas 导出失败",l);const u=l instanceof Error?l.message:String(l);o.setState({exportError:`导出失败：${u}。可改用“打印”通道或检查图片跨域配置。`})}finally{s.forEach(({el:l,display:u})=>{l.style.display=u})}};return{name:"export-pdf",version:"0.1.0",description:ma.description,priority:16,config:{order:16},hooks:{renderToolbar:o=>a.jsx("button",{type:"button",onClick:()=>{var i,s,l;(i=e.onBeforeExport)==null||i.call(e),o.bus.emit("resume:export",{method:t}),t==="canvas"?r(o,((l=(s=o.refs).getContainer)==null?void 0:l.call(s))??null):typeof window<"u"&&window.print()},style:B(!1),children:"导出 PDF"},"export-pdf"),renderOverlay:o=>{const i=o.state.exportError;return i?a.jsxs("div",{role:"alert",style:{position:"absolute",left:20,right:20,bottom:16,zIndex:70,background:"#fff4f2",color:"#8a1f11",border:"1px solid #f3c2b8",borderRadius:8,padding:"10px 12px",fontSize:12,display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{flex:1},children:i}),a.jsx("button",{type:"button",onClick:()=>o.setState({exportError:null}),style:B(!1),children:"关闭"})]},"export-error"):null}}}};ga.meta=ma;const jv='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';function Nt({title:e,onClose:t,children:n,width:r=360,zIndex:o=55,closeLabel:i="关闭",headerExtra:s,align:l="center"}){const u=x.useRef(null),c=x.useRef(t);return c.current=t,x.useEffect(()=>{const d=u.current;if(!d||typeof document>"u")return;const p=document.activeElement,f=()=>Array.from(d.querySelectorAll(jv)).filter(v=>!v.hasAttribute("disabled"));(f()[0]??d).focus();const w=v=>{if(v.key==="Escape"){v.stopPropagation(),c.current();return}if(v.key!=="Tab")return;const k=f();if(k.length===0){v.preventDefault(),d.focus();return}const g=k[0],m=k[k.length-1];v.shiftKey&&document.activeElement===g?(v.preventDefault(),m.focus()):!v.shiftKey&&document.activeElement===m&&(v.preventDefault(),g.focus())};return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w);try{p==null||p.focus()}catch{}}},[]),a.jsx("div",{"data-vr-overlay":"",onClick:d=>{d.target===d.currentTarget&&t()},style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:l==="end"?"flex-end":"center",justifyContent:"center",zIndex:o},children:a.jsxs("div",{ref:u,role:"dialog","aria-modal":"true","aria-label":typeof e=="string"?e:void 0,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{background:"#fff",color:$.text,borderRadius:l==="end"?"10px 10px 0 0":10,padding:18,width:r,maxWidth:"92%",maxHeight:"86%",overflow:"auto",boxShadow:"0 8px 30px rgba(0,0,0,0.25)",outline:"none"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:[a.jsx("strong",{style:{color:$.text,flex:1,minWidth:0},children:e}),s,a.jsx("button",{type:"button",onClick:t,style:B(!1),children:i})]}),n]})})}const Rv="ShareLink",bv="分享链接：默认只生成宿主地址，不把简历数据内联进 URL；需要携带数据时由 onBuildUrl 生成脱敏短链。弹窗复制并反馈结果。",Ev="0.1.0",Dv=["share","renderToolbar","renderOverlay"],Tv=[{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在主内容之上",description:"渲染浮层内容（角标、提示、动画、工具条），不挤占主内容布局"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"}],Ov=[],$v="只读取 context 字段（props / state / data），不调用上下文方法",zv=[{name:"baseUrl",type:"string",default:"-",description:"宿主基础地址（不含简历数据）"},{name:"onBuildUrl",type:"(data) => string | Promise<string>",default:"-",description:"注入宿主链接构建（推荐，可在此生成脱敏短链）"}],Nv="withResumePlugins(ResumeCore, [createShareLinkPlugin({ onBuildUrl: (d) => `https://cv.example.com/${encodeURIComponent(d.basics.name)}` })])",ha={name:Rv,description:bv,since:Ev,tags:Dv,events:Tv,methods:Ov,methodsNote:$v,config:zv,example:Nv},Mv=()=>typeof window<"u"?window.location.origin+window.location.pathname:"https://example.com/",xi=(e={})=>{const t=async n=>e.onBuildUrl?e.onBuildUrl(n):e.baseUrl??Mv();return{name:"share-link",version:"0.1.0",description:ha.description,priority:18,config:{order:18},hooks:{renderToolbar:n=>a.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":!!n.state.shareOpen,onClick:async()=>{if(n.state.shareOpen){n.setState({shareOpen:!1,shareCopied:!1});return}try{const r=await t(n.data);n.shared.set("share:url",r),n.setState({shareOpen:!0,shareCopied:!1,shareError:null})}catch(r){n.logger.error("[ShareLink] 链接生成失败",r),n.setState({shareOpen:!0,shareCopied:!1,shareError:"链接生成失败，请稍后重试"})}},style:B(!!n.state.shareOpen),children:"分享"},"share-link"),renderOverlay:n=>{if(!n.state.shareOpen)return null;const r=n.shared.get("share:url")??"",o=!!n.state.shareCopied,i=n.state.shareError,s=()=>n.setState({shareOpen:!1,shareCopied:!1}),l=async()=>{if(r)try{typeof navigator<"u"&&navigator.clipboard?(await navigator.clipboard.writeText(r),n.setState({shareCopied:!0,shareError:null})):n.setState({shareError:"当前环境不支持剪贴板，请手动复制"})}catch(u){n.logger.error("[ShareLink] 复制失败",u),n.setState({shareError:"复制失败，请手动复制"})}};return a.jsxs(Nt,{title:"分享链接",onClose:s,zIndex:60,children:[a.jsx("div",{style:{fontSize:12,color:"#5d636a",wordBreak:"break-all",background:"#f2f3f5",borderRadius:6,padding:8,maxHeight:80,overflow:"auto"},children:r||"生成中…"}),!e.onBuildUrl&&a.jsx("div",{style:{color:"#8a9099",fontSize:12,marginTop:8},children:"未配置 onBuildUrl：该链接不包含简历数据。如需携带数据，请由宿主生成脱敏短链（base64 不是加密）。"}),i&&a.jsx("div",{style:{color:"#cf4407",fontSize:12,marginTop:8},children:i}),a.jsx("div",{style:{display:"flex",gap:8,marginTop:12,justifyContent:"flex-end"},children:a.jsx("button",{type:"button",onClick:()=>void l(),style:B(!0),children:o?"已复制":"复制"})})]},"share-link-modal")}}}};xi.meta=ha;const Lv="QrCode",Av="二维码：把联系方式 / 链接编码为二维码，作角标常显或弹窗展示（qrcode 按需加载）。",Iv="0.1.0",Fv=["qr","renderOverlay","onMount","renderToolbar"],Uv=[{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在主内容之上",description:"渲染浮层内容（角标、提示、动画、工具条），不挤占主内容布局"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"}],Bv=[],Vv="只读取 context 字段（props / state / data），不调用上下文方法",Wv=[{name:"content",type:"string | () => string",default:"vCard(联系方式)",description:"二维码内容"},{name:"position",type:'"corner"|"avatar"|"modal"',default:"corner",description:"常显角标 / 弹窗"},{name:"size",type:"number",default:"96",description:"像素尺寸"}],Hv="withResumePlugins(ResumeCore, [createQrCodePlugin({ content: () => 'https://cv.example.com/me' })])",ya={name:Lv,description:Av,since:Iv,tags:Fv,events:Uv,methods:Bv,methodsNote:Vv,config:Wv,example:Hv},Kv=(e,t)=>{const n=e.basics,r=t?"":((n==null?void 0:n.contacts)??[]).map(o=>`${o.type}:${o.value}`).join(`
`);return`BEGIN:VCARD
FN:${(n==null?void 0:n.name)??""}
TITLE:${(n==null?void 0:n.title)??""}
${r}
END:VCARD`},wi=(e={})=>{const t=e.size??96,n=e.position??"corner";let r=0;const o=s=>typeof e.content=="function"?e.content():typeof e.content=="string"?e.content:Kv(s.data,!!s.state.privacyOn),i=s=>{const l=o(s),u=s.shared.get("qr:content"),c=s.shared.get("qr:pending");if(u===l||c===l)return;const d=++r;s.shared.set("qr:pending",l),s.shared.delete("qr:dataurl"),(async()=>{let p="fallback:"+l;try{const f=await zn(()=>import("./browser-BXdiCFWD.js").then(w=>w.b),[],import.meta.url);p=await(f.default??f).toDataURL(l,{width:t,margin:1})}catch{}d===r&&(s.shared.set("qr:content",l),s.shared.delete("qr:pending"),s.shared.set("qr:dataurl",p),s.forceUpdate())})()};return{name:"qr-code",version:"0.1.0",description:ya.description,priority:46,config:{order:46},hooks:{renderToolbar:s=>n!=="modal"?null:(i(s),a.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":!!s.state.qrOpen,onClick:()=>s.setState({qrOpen:!s.state.qrOpen}),style:B(!!s.state.qrOpen),children:"二维码"},"qr-code")),renderOverlay:s=>{if(n!=="modal"){i(s);const d=s.shared.get("qr:dataurl");if(!d)return null;const p=!d.startsWith("fallback:");return a.jsx("div",{style:{position:"absolute",right:12,bottom:12,zIndex:40,padding:4,background:"#fff",borderRadius:8,boxShadow:"0 2px 10px rgba(0,0,0,0.15)"},children:p?a.jsx("img",{src:d,width:t,height:t,alt:"QR"}):a.jsxs("div",{style:{width:t,height:t,fontSize:9,padding:6,wordBreak:"break-all",color:"#1f2328"},children:[d.slice(8,48),"…"]})},"qr-corner")}if(!s.state.qrOpen)return null;i(s);const l=s.shared.get("qr:dataurl"),u=!!l&&!l.startsWith("fallback:"),c=()=>s.setState({qrOpen:!1});return a.jsx(Nt,{title:"二维码",onClose:c,width:240,zIndex:59,children:a.jsxs("div",{style:{textAlign:"center"},children:[u?a.jsx("img",{src:l,width:t*2,height:t*2,alt:"QR"}):a.jsx("div",{style:{width:t*2,height:t*2,fontSize:12,padding:8,color:"#1f2328"},children:l==null?void 0:l.slice(8)}),a.jsx("div",{style:{color:"#1f2328",marginTop:8,fontSize:12},children:"扫码保存联系方式"})]})},"qr-modal")}}}};wi.meta=ya;const Qv="Versioning",Yv="版本管理：快照数据 / 模板 / 语言 / 隐私态，保存命名版本，可恢复 / 删除；localStorage 持久化（数据留在本地，请自行按用户隔离 storageKey）。",Jv="0.1.0",qv=["version","renderToolbar","renderFooter","renderOverlay"],Gv=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在主内容之上",description:"渲染浮层内容（角标、提示、动画、工具条），不挤占主内容布局"},{name:"renderFooter",when:"每次渲染，页脚槽位",description:"版权、更新时间、导出提示"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"},{name:"resume:data-replace",when:"恢复某个版本时",description:"广播被恢复的数据，整体替换当前简历"},{name:"resume:version:delete",when:"删除版本时",description:"广播版本 id"},{name:"resume:version:save",when:"保存版本快照时",description:"广播快照对象，供持久化到外部存储"}],Xv=[],Zv="只读取 context 字段（props / state / data），不调用上下文方法",ex=[{name:"storage",type:'"local"|"memory"',default:"local",description:"持久化方式；memory 仅当前页面有效"},{name:"storageKey",type:"string",default:'"vane-resume-versions"',description:"存储键，多实例 / 多用户请分别指定"},{name:"maxVersions",type:"number",default:"20",description:"最大保留版本数"},{name:"onStorageError",type:"(error) => void",default:"-",description:"写入 / 读取失败回调"},{name:"onRestore",type:"(version) => void",default:"-",description:"恢复回调，宿主可回写受控数据"}],tx="withResumePlugins(ResumeCore, [createVersioningPlugin({ storageKey: 'resume-u1', onRestore: (v) => setData(v.data) })])",va={name:Qv,description:Yv,since:Jv,tags:qv,events:Gv,methods:Xv,methodsNote:Zv,config:ex,example:tx},nx="vane-resume-versions",xa=(e={})=>{const t=e.maxVersions??20,n=e.storageKey??nx,r=e.storage??"local",o=new Map,i=()=>{var d;if(r==="memory")return o.get(n)??null;try{if(typeof localStorage<"u")return localStorage.getItem(n)}catch(p){(d=e.onStorageError)==null||d.call(e,p)}return null},s=d=>{var p;if(r==="memory")return o.set(n,d),!0;try{if(typeof localStorage<"u")return localStorage.setItem(n,d),!0}catch(f){(p=e.onStorageError)==null||p.call(e,f)}return!1},l=()=>{var p;const d=i();if(!d)return[];try{return JSON.parse(d)}catch(f){return(p=e.onStorageError)==null||p.call(e,f),[]}},u=d=>s(JSON.stringify(d)),c=d=>d?null:"本地存储写入失败，版本仅当前页面有效";return{name:"versioning",version:"0.1.0",description:va.description,priority:38,config:{order:38},hooks:{onMount:d=>{if(!d.state.versions){const p=l();d.setState({versions:p,versionView:null,versionName:""})}},renderToolbar:d=>a.jsx("button",{type:"button",onClick:()=>d.setState({versionView:"save",versionName:`版本 ${(d.state.versions||[]).length+1}`}),style:B(!1),children:"保存版本"},"versioning-save"),renderFooter:d=>{const p=d.state.versions||[],f=p.find(y=>y.id===d.state.currentVersionId);return a.jsxs("button",{type:"button",onClick:()=>d.setState({versionView:"list"}),style:{background:"transparent",border:"none",padding:0,fontSize:12,color:"var(--vr-muted, #5d636a)",cursor:"pointer",textDecoration:"underline",font:"inherit"},children:["版本：",f?f.name:"未保存","（",p.length,"）"]},"versioning-foot")},renderOverlay:d=>{const p=d.state.versionView;if(!p)return null;const f=d.state.versions||[],y=()=>d.setState({versionView:null}),w=d.state.versionPersistError?a.jsx("div",{style:{color:"#cf4407",fontSize:12,marginTop:10},children:String(d.state.versionPersistError)}):null;if(p==="save"){const g=d.state.versionName||"",m=()=>{const h={id:`v${Date.now()}`,name:g||`版本 ${f.length+1}`,time:new Date().toISOString().slice(0,19).replace("T"," "),data:JSON.parse(JSON.stringify(d.data??{})),template:d.state.template,lang:d.state.lang,privacyOn:!!d.state.privacyOn},S=[...f,h].slice(-t),j=u(S);d.shared.set("versioning:list",S),d.setState({versions:S,currentVersionId:h.id,versionView:null,versionPersistError:c(j)}),d.bus.emit("resume:version:save",h)};return a.jsxs(Nt,{title:"保存版本",onClose:y,children:[a.jsx("input",{value:g,placeholder:"版本名称",onChange:h=>d.setState({versionName:h.target.value}),style:{width:"100%",padding:8,borderRadius:6,border:"1px solid #d4d8de",marginBottom:12,boxSizing:"border-box"}}),a.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[a.jsx("button",{type:"button",onClick:m,style:B(!0),children:"保存"}),a.jsx("button",{type:"button",onClick:y,style:B(!1),children:"取消"})]}),w]},"versioning-modal")}const v=g=>{var h;const m={currentVersionId:g.id,versionView:null};g.template!==void 0&&(m.template=g.template),g.lang!==void 0&&(m.lang=g.lang),g.privacyOn!==void 0&&(m.privacyOn=g.privacyOn),d.setState(m),d.bus.emit("resume:data-replace",g),(h=e.onRestore)==null||h.call(e,g)},k=g=>{const m=f.filter(S=>S.id!==g),h=u(m);d.setState({versions:m,versionPersistError:c(h)}),d.bus.emit("resume:version:delete",g)};return a.jsxs(Nt,{title:`历史版本（${f.length}）`,onClose:y,width:380,children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxHeight:240,overflow:"auto"},children:[f.length===0&&a.jsx("div",{style:{color:"#8a9099",fontSize:12},children:"暂无版本"}),f.map(g=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{style:{fontWeight:600},children:g.name}),a.jsx("div",{style:{color:"#8a9099",fontSize:11},children:g.time})]}),a.jsx("button",{type:"button",onClick:()=>v(g),style:B(!0),children:"恢复"}),a.jsx("button",{type:"button",onClick:()=>k(g.id),style:B(!1),children:"删除"})]},g.id))]}),w]},"versioning-modal")}}}};xa.meta=va;const rx="DeliverTrack",ox="投递追踪：记录投递去向与状态（投递 / 面试 / offer / 拒绝），页脚汇总，浮层时间线。",ix="0.1.0",sx=["deliver","renderFooter","renderOverlay"],lx=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在主内容之上",description:"渲染浮层内容（角标、提示、动画、工具条），不挤占主内容布局"},{name:"renderFooter",when:"每次渲染，页脚槽位",description:"版权、更新时间、导出提示"},{name:"resume:deliver:add",when:"外部通过 bus.emit 投递一条新数据时（本插件订阅）",description:"接收外部投递的简历数据并并入当前列表"}],ax=[],ux="只读取 context 字段（props / state / data），不调用上下文方法",cx=[{name:"initial",type:"Delivery[]",default:"[]",description:"初始投递记录"},{name:"onChange",type:"(list) => void",default:"-",description:"列表变化回调"}],dx="withResumePlugins(ResumeCore, [createDeliverTrackPlugin({ initial: [{ company: '字节', status: '面试' }] })])",wa={name:rx,description:ox,since:ix,tags:sx,events:lx,methods:ax,methodsNote:ux,config:cx,example:dx},fo={投递:"#2f6feb",面试:"#e8590c",offer:"#1f9d55",拒绝:"#8a9099"},Sa=(e={})=>{const t=e.initial??[],n="deliver:list",r=i=>i.shared.get(n)??i.state.deliveries??[],o=(i,s)=>{i.shared.set(n,s),i.setState({deliveries:s})};return{name:"deliver-track",version:"0.1.0",description:wa.description,priority:36,config:{order:36},hooks:{onMount:i=>(i.state.deliveries||i.setState({deliveries:t,deliverOpen:!1,deliverCompany:"",deliverStatus:"投递"}),i.shared.set(n,r(i)),i.bus.on("resume:deliver:add",s=>{var c;const u=[...r(i),{...s,id:s.id||`d${Date.now()}`,date:s.date||new Date().toISOString().slice(0,10)}];o(i,u),(c=e.onChange)==null||c.call(e,u)})),renderFooter:i=>{const l=(i.state.deliveries||[]).reduce((u,c)=>(u[c.status]=(u[c.status]||0)+1,u),{});return a.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-expanded":!!i.state.deliverOpen,onClick:()=>i.setState({deliverOpen:!i.state.deliverOpen}),style:{display:"inline-flex",gap:6,fontSize:12,cursor:"pointer",background:"transparent",border:"none",padding:0,font:"inherit"},children:[a.jsx("span",{style:{color:"var(--vr-muted, #5d636a)"},children:"投递："}),Object.keys(fo).map(u=>a.jsxs("span",{style:{color:fo[u],fontWeight:600},children:[u," ",l[u]||0]},u))]},"deliver-foot")},renderOverlay:i=>{if(!i.state.deliverOpen)return null;const s=i.state.deliveries||[],l=i.state.deliverCompany||"",u=i.state.deliverStatus||"投递",c=()=>i.setState({deliverOpen:!1}),d=()=>{var f;if(!l.trim())return;const p=[...s,{id:`d${Date.now()}`,company:l.trim(),status:u,date:new Date().toISOString().slice(0,10)}];o(i,p),i.setState({deliverCompany:""}),(f=e.onChange)==null||f.call(e,p)};return a.jsxs(Nt,{title:"投递追踪",onClose:c,width:420,zIndex:56,align:"end",children:[a.jsxs("div",{style:{display:"flex",gap:6,marginBottom:10},children:[a.jsx("input",{value:l,placeholder:"公司 / 岗位",onChange:p=>i.setState({deliverCompany:p.target.value}),style:{flex:1,padding:6,borderRadius:6,border:"1px solid #d4d8de"}}),a.jsx("select",{value:u,onChange:p=>i.setState({deliverStatus:p.target.value}),style:{padding:6,borderRadius:6,border:"1px solid #d4d8de"},children:Object.keys(fo).map(p=>a.jsx("option",{value:p,children:p},p))}),a.jsx("button",{type:"button",onClick:d,style:B(!0),children:"添加"})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,maxHeight:180,overflow:"auto"},children:[s.length===0&&a.jsx("div",{style:{color:"#8a9099",fontSize:12},children:"暂无投递记录"}),s.map(p=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,borderBottom:"1px solid #eee",paddingBottom:6},children:[a.jsxs("span",{style:{flex:1},children:[p.company,p.role?` · ${p.role}`:""]}),a.jsx("span",{style:{color:fo[p.status],fontWeight:600},children:p.status}),a.jsx("span",{style:{color:"#8a9099",fontSize:11},children:p.date})]},p.id))]})]},"deliver-overlay")}}}};Sa.meta=wa;const px="AttachmentPreview",fx="附件预览：列出附件卡片（PDF / 图片 / 链接），点击在灯箱中预览。",mx="0.1.0",gx=["attachment","renderAttachments","renderOverlay","transformData"],hx=[{name:"transformData",when:"渲染前，对简历数据链式改写",description:"模板 / 语言切换、字段脱敏、结构调整"},{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在主内容之上",description:"渲染浮层内容（角标、提示、动画、工具条），不挤占主内容布局"},{name:"renderAttachments",when:"每次渲染，附件区槽位",description:"作品集、证书、项目链接等附件列表"}],yx=[],vx="只读取 context 字段（props / state / data），不调用上下文方法",xx=[{name:"items",type:"AttachmentItem[]",default:"[]",description:"预置附件（合并进 data.attachments）"}],wx="withResumePlugins(ResumeCore, [createAttachmentPreviewPlugin({ items: [{ name: '作品集', kind: 'pdf', url: 'https://x.com/p.pdf' }] })])",ka={name:px,description:fx,since:mx,tags:gx,events:hx,methods:yx,methodsNote:vx,config:xx,example:wx},Br=(e={})=>{const t=e.items??[];return{name:"attachment-preview",version:"0.1.0",description:ka.description,priority:30,config:{order:30},hooks:{transformData:(n,r)=>{if(!t.length)return r;const o=Er(r);return o.attachments=[...o.attachments??[],...t],o},renderAttachments:n=>{var o;const r=((o=n.data)==null?void 0:o.attachments)??[];return r.length?a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10},children:r.map((i,s)=>a.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-expanded":n.state.previewItem===(i.id??s),onClick:()=>n.setState({previewItem:i.id??s}),style:{display:"flex",alignItems:"center",gap:8,background:"#f2f3f5",color:"#1f2328",border:"1px solid #d4d8de",borderRadius:8,padding:"8px 12px",cursor:"pointer",fontSize:13,textAlign:"left"},children:[a.jsx("span",{style:{color:"var(--vr-accent, #2f6feb)",textTransform:"uppercase",fontSize:11,fontWeight:700},children:i.kind}),a.jsx("span",{children:i.name})]},i.id??s))},"attachment-grid"):null},renderOverlay:n=>{var s,l;const r=n.state.previewItem;if(r==null)return null;const o=(l=(s=n.data)==null?void 0:s.attachments)==null?void 0:l.find((u,c)=>(u.id??c)===r);if(!o)return null;const i=()=>n.setState({previewItem:null});return a.jsx(Nt,{title:o.name,onClose:i,width:560,zIndex:58,children:a.jsx("div",{style:{flex:1,overflow:"auto",minHeight:240},children:o.kind==="image"?a.jsx("img",{src:o.url,alt:o.name,style:{maxWidth:"100%",borderRadius:6}}):o.kind==="pdf"?a.jsx("iframe",{src:Dr(o.url),title:o.name,sandbox:"allow-scripts",referrerPolicy:"no-referrer",loading:"lazy",style:{width:"100%",height:360,border:"1px solid #eee",borderRadius:6}}):a.jsx("a",{href:Dr(o.url),target:"_blank",rel:"noreferrer",style:{color:"var(--vr-accent, #2f6feb)"},children:"打开链接 ↗"})})},"attachment-lightbox")}}}};Br.meta=ka;const Sx="PrintOptimize",kx="打印优化：注入 @media print 样式，分页不断行、隐藏工具条与遮罩、按 A4 出页，与 ExportPdf 协同。",Px="0.1.0",_x=["print","onMount"],Cx=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"resume:export",when:"点击导出并选定方式后",description:"广播 { method }，由外部执行打印 / 下载"}],jx=[],Rx="只读取 context 字段（props / state / data），不调用上下文方法",bx=[{name:"pageSize",type:'"A4"|"A3"|"letter"',default:"A4",description:"纸张尺寸"},{name:"margin",type:"string",default:"14mm",description:"页边距"},{name:"hideOnPrint",type:"string[]",default:"工具条等",description:"打印时隐藏的选择器"}],Ex="withResumePlugins(ResumeCore, [createPrintOptimizePlugin(), createExportPdfPlugin({ method: 'print' })])",Pa={name:Sx,description:kx,since:Px,tags:_x,events:Cx,methods:jx,methodsNote:Rx,config:bx,example:Ex},_a=(e={})=>{const t=e.pageSize??"A4",n=e.margin??"14mm",r=(e.hideOnPrint??["[data-vr-no-print]",".vr-toolbar","[data-vr-overlay]"]).join(", ");return{name:"print-optimize",version:"0.1.0",description:Pa.description,priority:22,config:{order:22},hooks:{onMount:o=>{var u,c;const i=(c=(u=o.refs).getContainer)==null?void 0:c.call(u);if(!i||typeof document>"u")return;const s=document.createElement("style");s.setAttribute("media","print"),s.dataset.vaneResumePrint="1",s.textContent=`
          ${r} { display: none !important; }
          .vr-root { box-shadow: none !important; max-width: none !important; margin: 0 !important; }
          .vr-section { page-break-inside: avoid; }
          @page { size: ${t}; margin: ${n}; }
        `,i.appendChild(s);const l=d=>{(d&&typeof d=="object"?d.method:void 0)==="print"&&typeof window<"u"&&window.print()};return o.bus.on("resume:export",l),()=>{s.remove(),o.bus.off("resume:export",l)}}}}};_a.meta=Pa;const Dx="SectionReorder",Tx="板块重排：调整基本信息 / 工作 / 教育 / 技能等板块顺序，顺序经 ctx.state.sectionOrder 驱动核心渲染。",Ox="0.1.0",$x=["layout","renderToolbar","renderOverlay"],zx=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在主内容之上",description:"渲染浮层内容（角标、提示、动画、工具条），不挤占主内容布局"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"}],Nx=[],Mx="只读取 context 字段（props / state / data），不调用上下文方法",Lx=[{name:"sections",type:"SectionKey[]",default:"全板块",description:"可重排的板块集合"}],Ax="withResumePlugins(ResumeCore, [createSectionReorderPlugin()])",Ca={name:Dx,description:Tx,since:Ox,tags:$x,events:zx,methods:Nx,methodsNote:Mx,config:Lx,example:Ax},os={basics:"基本信息",work:"工作经历",education:"教育背景",skills:"专业技能",projects:"项目经历",extra:"荣誉/语言/证书",attachments:"附件"},Si=(e={})=>{const t=e.sections??Go;return{name:"section-reorder",version:"0.1.0",description:Ca.description,priority:24,config:{order:24},hooks:{onMount:n=>{n.state.sectionOrder||n.setState({sectionOrder:[...t],reorderMode:!1})},renderToolbar:n=>a.jsx("button",{type:"button",onClick:()=>n.setState({reorderMode:!n.state.reorderMode}),style:B(!!n.state.reorderMode),children:"重排板块"},"section-reorder"),renderOverlay:n=>{if(!n.state.reorderMode)return null;const r=n.state.sectionOrder??[...t],o=(s,l)=>{const u=s+l;if(u<0||u>=r.length)return;const c=[...r];[c[s],c[u]]=[c[u],c[s]],n.setState({sectionOrder:c})},i=()=>n.setState({reorderMode:!1});return a.jsx(Nt,{title:"上移 / 下移排序板块",onClose:i,width:320,zIndex:57,children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:r.map((s,l)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,border:"1px solid #eee",borderRadius:6,padding:"4px 8px"},children:[a.jsxs("span",{style:{flex:1},children:[l+1,". ",os[s]]}),a.jsx("button",{type:"button","aria-label":`上移 ${os[s]}`,onClick:()=>o(l,-1),style:B(!1),children:"↑"}),a.jsx("button",{type:"button","aria-label":`下移 ${os[s]}`,onClick:()=>o(l,1),style:B(!1),children:"↓"})]},s))})},"reorder-panel")}}}};Si.meta=Ca;const Ix="TimelineView",Fx="时间轴可视化：把工作 / 教育经历从列表切换为竖向时间轴（圆点 + 连线 + 日期）。",Ux="0.1.0",Bx=["view","renderWork","renderEducation","renderToolbar"],Vx=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"},{name:"renderWork",when:"每次渲染，工作经历区槽位",description:"公司、职位、时间段的排版与补充字段"},{name:"renderEducation",when:"每次渲染，教育经历区槽位",description:"学校、专业、时间段的排版与补充字段"}],Wx=[],Hx="只读取 context 字段（props / state / data），不调用上下文方法",Kx=[{name:"sections",type:'("work"|"education")[]',default:"两者",description:"启用时间轴的板块"},{name:"mode",type:'"list"|"timeline"',default:"list",description:"初始视图"}],Qx="withResumePlugins(ResumeCore, [createTimelineViewPlugin()])",ja={name:Ix,description:Fx,since:Ux,tags:Bx,events:Vx,methods:Wx,methodsNote:Hx,config:Kx,example:Qx};function ec({items:e,kind:t,kw:n}){return e.length?a.jsxs("div",{style:{position:"relative",paddingLeft:20},children:[a.jsx("div",{style:{position:"absolute",left:5,top:4,bottom:4,width:2,background:"var(--vr-line, #e3e6ea)"}}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:e.map((r,o)=>{var i;return a.jsxs("div",{style:{position:"relative"},children:[a.jsx("span",{style:{position:"absolute",left:-19,top:4,width:10,height:10,borderRadius:"50%",background:"var(--vr-accent, #2f6feb)",boxShadow:"0 0 0 3px #fff"}}),a.jsx("div",{style:{fontWeight:700,color:"var(--vr-text, #1f2328)"},children:Bt(t==="work"?r.company:r.school,n)}),a.jsx("div",{style:{color:"var(--vr-muted, #5d636a)",fontSize:13},children:t==="work"?a.jsxs(a.Fragment,{children:[r.role?a.jsxs(a.Fragment,{children:[Bt(r.role,n)," "]}):null,`${r.start} — ${r.end}`]}):a.jsxs(a.Fragment,{children:[Bt(r.degree,n),r.major?a.jsxs(a.Fragment,{children:[" · ",Bt(r.major,n)]}):null,` ${r.start} — ${r.end}`]})}),t==="work"&&((i=r.highlights)==null?void 0:i.length)>0&&a.jsx("ul",{style:{margin:"4px 0 0",paddingLeft:18,color:"var(--vr-muted, #5d636a)"},children:r.highlights.map((s,l)=>a.jsx("li",{children:Bt(s,n)},l))})]},r.id??o)})})]}):null}const ki=(e={})=>{const t=e.sections??["work","education"],n=e.mode??"list";return{name:"timeline-view",version:"0.1.0",description:ja.description,priority:22,config:{order:22},hooks:{onMount:r=>{r.state.timelineMode===void 0&&r.setState({timelineMode:n})},renderToolbar:r=>{const i=(r.state.timelineMode??n)==="timeline";return a.jsx("button",{type:"button",onClick:()=>r.setState({timelineMode:i?"list":"timeline"}),style:B(i),children:"时间轴"},"timeline-view")},renderWork:r=>{var i;if(r.state.timelineMode!=="timeline"||!t.includes("work"))return null;const o=r.state.highlightKeywords??[];return a.jsx(ec,{items:((i=r.data)==null?void 0:i.work)??[],kind:"work",kw:o})},renderEducation:r=>{var i;if(r.state.timelineMode!=="timeline"||!t.includes("education"))return null;const o=r.state.highlightKeywords??[];return a.jsx(ec,{items:((i=r.data)==null?void 0:i.education)??[],kind:"edu",kw:o})}}}};ki.meta=ja;const Yx="KeywordHighlight",Jx="关键词高亮：输入 JD 关键词，核心文本中命中词以 <mark> 高亮，辅助定制与 ATS 自检。纯 state 驱动，不抢槽。",qx="0.1.0",Gx=["highlight","state","renderToolbar"],Xx=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"}],Zx=[],e0="只读取 context 字段（props / state / data），不调用上下文方法",t0=[{name:"keywords",type:"string[] | ()=>string[]",default:"[]",description:"初始高亮关键词"},{name:"color",type:"string",default:"var(--vr-accent)",description:"高亮标记 / 芯片描边色"}],n0="withResumePlugins(ResumeCore, [createKeywordHighlightPlugin({ keywords: ['React','性能优化'] })])",Ra={name:Yx,description:Jx,since:qx,tags:Gx,events:Xx,methods:Zx,methodsNote:e0,config:t0,example:n0},Vr=(e={})=>{const t=typeof e.keywords=="function"?e.keywords():e.keywords??[],n=e.color??"var(--vr-accent, #2f6feb)";return{name:"keyword-highlight",version:"0.1.0",description:Ra.description,priority:20,config:{order:20},hooks:{onMount:r=>{r.state.highlightKeywords===void 0&&r.setState({highlightKeywords:[...t],kwDraft:""})},renderToolbar:r=>{const o=r.state.highlightKeywords??[],i=r.state.kwDraft??"",s=()=>{const l=i.trim();l&&(o.includes(l)||r.setState({highlightKeywords:[...o,l]}),r.setState({kwDraft:""}))};return a.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center",flexWrap:"wrap"},children:[a.jsx("span",{style:{fontSize:12,color:"var(--vr-faint, #8a9099)"},children:"高亮"}),a.jsx("input",{value:i,placeholder:"关键词","aria-label":"高亮关键词",onChange:l=>r.setState({kwDraft:l.target.value}),onKeyDown:l=>{l.key==="Enter"&&s()},style:{width:92,padding:"3px 6px",fontSize:12,borderRadius:6,border:"1px solid #d4d8de"}}),a.jsx("button",{type:"button",onClick:s,style:B(!1),children:"添加"}),o.map(l=>a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:2,background:"var(--vr-accent-wash, #eef3fe)",color:n,border:"1px solid var(--vr-line, #e3e6ea)",borderRadius:12,padding:"1px 4px 1px 8px",fontSize:12},children:[l,a.jsx("button",{type:"button","aria-label":`移除 ${l}`,onClick:()=>r.setState({highlightKeywords:o.filter(u=>u!==l)}),style:{border:"none",background:"transparent",color:n,cursor:"pointer",fontSize:13,lineHeight:1,padding:0},children:"×"})]},l))]},"keyword-highlight")}}}};Vr.meta=Ra;const r0="AtsScore",o0="ATS 兼容性评分：扫描常见雷区（缺姓名/联系方式/量化亮点/命中 JD 关键词等），输出 0-100 评分与改进建议。纯分析不改数据。",i0="0.1.0",s0=["ats","transformData","renderFooter","renderOverlay"],l0=[{name:"transformData",when:"渲染前，对简历数据链式改写",description:"模板 / 语言切换、字段脱敏、结构调整"},{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在主内容之上",description:"渲染浮层内容（角标、提示、动画、工具条），不挤占主内容布局"},{name:"renderFooter",when:"每次渲染，页脚槽位",description:"版权、更新时间、导出提示"}],a0=[],u0="只读取 context 字段（props / state / data），不调用上下文方法",c0=[{name:"jobKeywords",type:"string[]",default:"[]",description:"JD 关键词，命中加分"},{name:"rules",type:"AtsRule[]",default:"内置 8 条",description:"可扩展评分规则"}],d0="withResumePlugins(ResumeCore, [createAtsScorePlugin({ jobKeywords: ['Go','分布式'] })])",ba={name:r0,description:o0,since:i0,tags:s0,events:l0,methods:a0,methodsNote:u0,config:c0,example:d0},p0=[{key:"name",label:"含姓名",weight:10,test:e=>{var t;return!!((t=e.basics)!=null&&t.name)}},{key:"contact",label:"含联系方式",weight:10,test:e=>{var t,n;return(((n=(t=e.basics)==null?void 0:t.contacts)==null?void 0:n.length)??0)>0}},{key:"work",label:"有工作经历",weight:15,test:e=>{var t;return(((t=e.work)==null?void 0:t.length)??0)>0}},{key:"metric",label:"工作量化亮点",weight:15,test:e=>(e.work??[]).some(t=>(t.highlights??[]).some(n=>/\d/.test(n)))},{key:"edu",label:"有教育背景",weight:10,test:e=>{var t;return(((t=e.education)==null?void 0:t.length)??0)>0}},{key:"skill",label:"有技能标签",weight:10,test:e=>(e.skills??[]).some(t=>{var n;return(((n=t.items)==null?void 0:n.length)??0)>0})},{key:"jd",label:"命中 JD 关键词",weight:20,test:(e,t)=>t.length>0&&f0(e).some(n=>t.some(r=>n.toLowerCase().includes(r.toLowerCase())))},{key:"length",label:"篇幅适中",weight:10,test:e=>(e.work??[]).reduce((n,r)=>{var o;return n+(((o=r.highlights)==null?void 0:o.length)??0)},0)+(e.projects??[]).length<=40}];function f0(e){const t=[],n=e.basics;return n&&(t.push(n.name,n.title,n.summary??""),(n.contacts??[]).forEach(r=>t.push(r.value))),(e.work??[]).forEach(r=>{t.push(r.company,r.role,...r.highlights??[])}),(e.education??[]).forEach(r=>t.push(r.school,r.degree,r.major??"")),(e.skills??[]).forEach(r=>t.push(r.category,...r.items??[])),(e.projects??[]).forEach(r=>t.push(r.name,r.desc,r.role??"")),t.filter(Boolean)}function tc(e,t){const n=p0.map(o=>({label:o.label,weight:o.weight,ok:o.test(e,t)}));return{score:n.reduce((o,i)=>o+(i.ok?i.weight:0),0),items:n}}const Pi=(e={})=>{const t=e.jobKeywords??[],n=r=>r.shared.get("ats:report")??tc(r.data,t);return{name:"ats-score",version:"0.1.0",description:ba.description,priority:38,config:{order:38},dependencies:["privacy-mask"],hooks:{transformData:(r,o)=>(r.shared.set("ats:report",tc(o,t)),o),renderFooter:r=>{const o=n(r),i=o.score>=80?"#1f9d55":o.score>=60?"#e8590c":"#cf4407",s=!!r.state.atsOpen;return a.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-expanded":s,onClick:()=>r.setState({atsOpen:!s}),style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,cursor:"pointer",color:"var(--vr-muted, #5d636a)",background:"transparent",border:"none",padding:0,font:"inherit"},children:[a.jsx("span",{children:"ATS"}),a.jsx("span",{style:{fontWeight:700,color:i},children:o.score})]},"ats-score")},renderOverlay:r=>{if(!r.state.atsOpen)return null;const o=n(r),i=()=>r.setState({atsOpen:!1});return a.jsx(Nt,{title:`ATS 兼容性评分 ${o.score}`,onClose:i,width:380,zIndex:59,children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:o.items.map(s=>a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13},children:[a.jsxs("span",{style:{color:s.ok?"#1f9d55":"#cf4407"},children:[s.ok?"✓":"✗"," ",s.label]}),a.jsxs("span",{style:{color:"#8a9099"},children:[s.weight," 分"]})]}),a.jsx("div",{style:{height:6,background:"#f2f3f5",borderRadius:3,marginTop:4,overflow:"hidden"},children:a.jsx("div",{style:{width:`${s.ok?100:0}%`,height:"100%",background:s.ok?"#1f9d55":"#cf4407"}})})]},s.label))})},"ats-overlay")}}}};Pi.meta=ba;const m0="StatSummary",g0="简历数据概览：在基本信息区追加工作段数 / 技能数 / 项目数 / 最高学历等统计徽章（装饰累积槽 renderBasics）。",h0="0.1.0",y0=["stats","renderBasics"],v0=[{name:"renderBasics",when:"每次渲染，基本信息区槽位",description:"姓名、职位、联系方式等抬头信息"}],x0=[],w0="只读取 context 字段（props / state / data），不调用上下文方法",S0=[{name:"items",type:"StatKey[]",default:"四项全开",description:"展示指标：expYears | skillCount | projectCount | eduLevel"}],k0="withResumePlugins(ResumeCore, [createStatSummaryPlugin({ items: ['expYears','skillCount'] })])",Ea={name:m0,description:g0,since:h0,tags:y0,events:v0,methods:x0,methodsNote:w0,config:S0,example:k0},P0={博士:5,硕士:4,研究生:4,本科:3,学士:3,大专:2,专科:2,高中:1};function _0(e){const t=(e.work??[]).length,n=(e.skills??[]).reduce((s,l)=>{var u;return s+(((u=l.items)==null?void 0:u.length)??0)},0),r=(e.projects??[]).length;let o="—",i=0;return(e.education??[]).forEach(s=>{const l=P0[s.degree]??0;l>i&&(i=l,o=s.degree)}),{exp:t,skills:n,projects:r,edu:o}}const _i=(e={})=>{const t=e.items??["expYears","skillCount","projectCount","eduLevel"],n={expYears:"工作",skillCount:"技能",projectCount:"项目",eduLevel:"最高学历"};return{name:"stat-summary",version:"0.1.0",description:Ea.description,priority:32,config:{order:32},hooks:{renderBasics:r=>{const o=_0(r.data),i=s=>{switch(s){case"expYears":return`${o.exp} 段`;case"skillCount":return`${o.skills} 项`;case"projectCount":return`${o.projects} 个`;case"eduLevel":return o.edu;default:return""}};return a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:10},children:t.map(s=>a.jsxs("div",{style:{background:"var(--vr-accent-wash, #eef3fe)",border:"1px solid var(--vr-line, #e3e6ea)",borderRadius:8,padding:"4px 10px",textAlign:"center"},children:[a.jsx("div",{style:{fontSize:16,fontWeight:800,color:"var(--vr-accent, #2f6feb)"},children:i(s)}),a.jsx("div",{style:{fontSize:11,color:"var(--vr-muted, #5d636a)"},children:n[s]})]},s))},"stat-summary")}}}};_i.meta=Ea;const C0="SectionCollapse",j0="板块折叠：为每个板块头部加折叠开关，折叠态隐藏正文。纯 state 驱动（collapseMode/collapsed），不抢槽，可与 TimelineView 并存。",R0="0.1.0",b0=["collapse","state","renderToolbar"],E0=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"}],D0=[],T0="只读取 context 字段（props / state / data），不调用上下文方法",O0=[{name:"defaultOn",type:"boolean",default:"false",description:"初始是否开启折叠模式"},{name:"defaultCollapsed",type:"SectionKey[]",default:"[]",description:"初始折叠的板块"}],$0="withResumePlugins(ResumeCore, [createSectionCollapsePlugin({ defaultOn: true })])",Da={name:C0,description:j0,since:R0,tags:b0,events:E0,methods:D0,methodsNote:T0,config:O0,example:$0},Ci=(e={})=>({name:"section-collapse",version:"0.1.0",description:Da.description,priority:26,config:{order:26},hooks:{onMount:t=>{t.state.collapseMode===void 0&&t.setState({collapseMode:e.defaultOn??!1,collapsed:e.defaultCollapsed??[]})},renderToolbar:t=>{const n=!!t.state.collapseMode,r=o=>{const i=t.state.sectionOrder??Go;t.setState({collapsed:o?[...i]:[]})};return a.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[a.jsx("button",{type:"button",onClick:()=>t.setState({collapseMode:!n}),style:B(n),children:n?"折叠：开":"折叠：关"}),n&&a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",onClick:()=>r(!0),style:B(!1),children:"全收"}),a.jsx("button",{type:"button",onClick:()=>r(!1),style:B(!1),children:"全展"})]})]},"section-collapse")}}});Ci.meta=Da;const z0="SignatureStamp",N0="电子落款：文末加签名（姓名/图片）+ 签署日期；可选 CSS 圆形印章（renderOverlay 角标）。",M0="0.1.0",L0=["signature","stamp","renderFooter","renderOverlay"],A0=[{name:"onMount",when:"简历组件挂载完成",description:"初始化副作用（读取本地版本、恢复状态）"},{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在主内容之上",description:"渲染浮层内容（角标、提示、动画、工具条），不挤占主内容布局"},{name:"renderFooter",when:"每次渲染，页脚槽位",description:"版权、更新时间、导出提示"},{name:"renderToolbar",when:"每次渲染，工具栏槽位",description:"模板切换、导出、语言、版本等全局操作"}],I0=[],F0="只读取 context 字段（props / state / data），不调用上下文方法",U0=[{name:"name",type:"string",default:"basics.name",description:"签名姓名"},{name:"image",type:"string",default:"-",description:"手写签名图片 URL"},{name:"date",type:"()=>string",default:"今天",description:"签署日期"},{name:"stamp",type:"'none'|'seal'",default:"none",description:"是否绘制印章"},{name:"stampText",type:"string",default:"已确认",description:"印章文字"}],B0="withResumePlugins(ResumeCore, [createSignatureStampPlugin({ name: '张三', stamp: 'seal' })])",Ta={name:z0,description:N0,since:M0,tags:L0,events:A0,methods:I0,methodsNote:F0,config:U0,example:B0},ji=(e={})=>{const t=e.name,n=e.image,r=e.stamp??"none",o=e.stampText??"已确认",i=()=>e.date?e.date():new Date().toISOString().slice(0,10);return{name:"signature-stamp",version:"0.1.0",description:Ta.description,priority:34,config:{order:34},hooks:{onMount:s=>{s.state.signatureOn===void 0&&s.setState({signatureOn:!0})},renderToolbar:s=>a.jsx("button",{type:"button",onClick:()=>s.setState({signatureOn:!s.state.signatureOn}),style:B(!!s.state.signatureOn),children:s.state.signatureOn?"落款：开":"落款：关"},"signature-stamp"),renderFooter:s=>{var d;if(!s.state.signatureOn)return null;const l=(d=s.data)==null?void 0:d.basics,u=t??(l==null?void 0:l.name)??"本人",c=i();return a.jsxs("span",{style:{display:"inline-flex",flexDirection:"column",alignItems:"flex-end",gap:2,fontSize:12,color:"var(--vr-muted, #5d636a)"},children:[n?a.jsx("img",{src:n,alt:"签名",style:{height:32,objectFit:"contain"}}):a.jsx("span",{style:{fontFamily:"'Segoe Script','Brush Script MT',cursive",fontSize:18,color:"var(--vr-text, #1f2328)"},children:u}),a.jsxs("span",{children:["签署日期：",c]})]},"signature")},renderOverlay:s=>!s.state.signatureOn||r!=="seal"?null:a.jsxs("div",{style:{position:"absolute",left:16,bottom:16,zIndex:41,pointerEvents:"none",width:88,height:88,borderRadius:"50%",border:"3px solid #cf4407",color:"#cf4407",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transform:"rotate(-12deg)"},children:[a.jsx("div",{style:{fontSize:11,borderBottom:"1px solid #cf4407",paddingBottom:2,marginBottom:2},children:"RESUME"}),a.jsx("div",{style:{fontSize:13,fontWeight:800,letterSpacing:1},children:o}),a.jsx("div",{style:{fontSize:10},children:i()})]},"stamp-seal")}}};ji.meta=Ta;const is=(e,t="")=>e===void 0?t:String(e),V0={TemplateSwitchPlugin:()=>vi({defaultId:"modern"}),ThemeCustomizePlugin:()=>Ar({presets:[{id:"green",label:"绿",vars:{"--vr-accent":"#1f9d55"}},{id:"orange",label:"橙",vars:{"--vr-accent":"#e8590c"}},{id:"blue",label:"蓝",vars:{"--vr-accent":"#2f6feb"}},{id:"mono",label:"墨",vars:{"--vr-accent":"#1f2328"}}]}),SectionReorderPlugin:()=>Si({sections:["basics","skills","work","education","projects","extra","attachments"]}),SectionCollapsePlugin:()=>Ci({}),TimelineViewPlugin:()=>ki({}),StatSummaryPlugin:()=>_i({}),MultiLangPlugin:()=>Fn({locales:[{code:"zh",label:"中"},{code:"en",label:"EN"}],translations:{en:{basics:{name:"Qingyang Lin",title:"Researcher",contacts:[],summary:"PhD candidate in Computer Science."}}}}),PrivacyMaskPlugin:()=>Fr({}),ContactDesensitizePlugin:()=>Ur({}),AtsScorePlugin:()=>Pi({jobKeywords:["React","TypeScript","Node"]}),VersioningPlugin:()=>xa({}),DeliverTrackPlugin:()=>Sa({}),KeywordHighlightPlugin:e=>{const t=is(e.kw,'["React","TypeScript"]');let n=["React","TypeScript"];try{const r=t.trim().startsWith("[")?JSON.parse(t):t.split(",").map(o=>o.trim()).filter(Boolean);Array.isArray(r)&&(n=r)}catch{}return Vr({keywords:n,color:is(e.color,"#ffd34e")})},SignatureStampPlugin:e=>ji({stamp:is(e.stamp,"seal")==="none"?void 0:"seal"}),QrCodePlugin:()=>wi({content:"https://vane.dev/r/qingyang"}),ShareLinkPlugin:()=>xi({onBuildUrl:e=>{var t;return"https://vane.dev/r/"+encodeURIComponent(((t=e.basics)==null?void 0:t.name)??"resume")}}),ExportPdfPlugin:()=>ga({}),PrintOptimizePlugin:()=>_a({}),AttachmentPreviewPlugin:()=>Br({}),AiPolishPlugin:()=>Ir({polish:async e=>{const t=(e||"").trim();if(!t)return e;const n=t.replace(/负责/g,"主导").replace(/参与/g,"牵头").replace(/开发/g,"设计开发").replace(/协助/g,"协同");return n.includes("✦")?n:`${n} ✦`}})};function ae(e){const t=V0[e];if(!t)throw new Error(`未注册的示例插件：${e}`);return function({cfg:r}){const o=x.useMemo(()=>Lr(rn,[t(r)]),[r]);return a.jsx(o,{data:on,containerStyle:{maxWidth:560,margin:"0 auto"}})}}const W0={slug:"template-switch",title:"模板切换",group:"plugin",plugin:"TemplateSwitchPlugin",intro:"在经典 / 现代 / 紧凑 / 学术等版式间切换，经 CSS 变量驱动整体观感。",why:"同一份数据要适配不同招聘渠道的审美，模板切换比改组件快得多。",plugs:[{fn:"createTemplateSwitchPlugin",cfg:'defaultId: "modern"',why:"默认落到「现代」版式（紫调、大圆角），一眼区别于裸 Core 的经典蓝。"}],props:[]},H0=ae("TemplateSwitchPlugin"),K0=Object.freeze(Object.defineProperty({__proto__:null,default:H0,meta:W0},Symbol.toStringTag,{value:"Module"})),Q0={slug:"theme-customize",title:"主题配色",group:"plugin",plugin:"ThemeCustomizePlugin",intro:"预设强调色 + 自定义取色器，经 CSS 变量注入容器。",why:"招聘站 / 个人主页有品牌色，主题定制让简历和它的承载页长得像一家人。",plugs:[{fn:"createThemeCustomizePlugin",cfg:'presets: [{ id: "green", label: "绿", vars: { "--vr-accent": "#1f9d55" } }, { id: "orange", label: "橙", vars: { "--vr-accent": "#e8590c" } }]',why:"把非蓝配色排到第一，挂载即生效（默认蓝会跟裸 Core 看着一样）。"}],props:[]},Y0=ae("ThemeCustomizePlugin"),J0=Object.freeze(Object.defineProperty({__proto__:null,default:Y0,meta:Q0},Symbol.toStringTag,{value:"Module"})),q0={slug:"section-reorder",title:"板块重排",group:"plugin",plugin:"SectionReorderPlugin",intro:"调整基本信息 / 工作 / 教育 / 技能等板块顺序，顺序经 ctx.state 驱动核心渲染。",why:"技术岗把「工作」提前、学术岗把「教育」提前，叙事顺序影响第一印象。",plugs:[{fn:"createSectionReorderPlugin",cfg:'sections: ["basics", "skills", "work", "education", "projects", "extra", "attachments"]',why:"把「技能」提到「工作」之前，默认即生效，不用点按钮也能看出板块被重排。"}],props:[]},G0=ae("SectionReorderPlugin"),X0=Object.freeze(Object.defineProperty({__proto__:null,default:G0,meta:q0},Symbol.toStringTag,{value:"Module"})),Z0={slug:"section-collapse",title:"板块折叠",group:"plugin",plugin:"SectionCollapsePlugin",intro:"为每个板块头部加折叠开关，折叠态隐藏正文；纯 state 驱动，可与时间轴并存。",why:"长简历先给面试官一个大纲，感兴趣再展开，避免一屏全是字。",plugs:[{fn:"createSectionCollapsePlugin",cfg:"{}",why:"读写的 collapseMode / collapsed 存在 ctx.state。"}],props:[]},ew=ae("SectionCollapsePlugin"),tw=Object.freeze(Object.defineProperty({__proto__:null,default:ew,meta:Z0},Symbol.toStringTag,{value:"Module"})),nw={slug:"timeline-view",title:"时间轴视图",group:"plugin",plugin:"TimelineViewPlugin",intro:"把工作 / 教育经历从列表切换为竖向时间轴（圆点 + 连线 + 日期）。",why:"经历多、跨度长时，时间轴比平铺列表更能体现成长曲线。",plugs:[{fn:"createTimelineViewPlugin",cfg:"{}",why:"覆盖 renderWork / renderEducation 为时间轴渲染。"}],props:[]},rw=ae("TimelineViewPlugin"),ow=Object.freeze(Object.defineProperty({__proto__:null,default:rw,meta:nw},Symbol.toStringTag,{value:"Module"})),iw={slug:"stat-summary",title:"数据概览",group:"plugin",plugin:"StatSummaryPlugin",intro:"在基本信息区追加工作段数 / 技能数 / 项目数 / 最高学历等统计徽章。",why:"面试官扫一眼就能抓住「几年经验、几个项目」，量化亮点前置。",plugs:[{fn:"createStatSummaryPlugin",cfg:"{}",why:"装饰累积槽 renderBasics，追加统计徽章。"}],props:[]},sw=ae("StatSummaryPlugin"),lw=Object.freeze(Object.defineProperty({__proto__:null,default:sw,meta:iw},Symbol.toStringTag,{value:"Module"})),aw={slug:"multi-lang",title:"多语言",group:"plugin",plugin:"MultiLangPlugin",intro:"在预设语言间切换，整体翻译文本字段；缺失字段保留原文降级。",why:"投外企 / 海外岗需要中英双语，逐字段手写两套成本太高。",plugs:[{fn:"createMultiLangPlugin",cfg:"{}",why:"经 transformData 注入翻译后的文本字段。"}],props:[]},uw=ae("MultiLangPlugin"),cw=Object.freeze(Object.defineProperty({__proto__:null,default:uw,meta:aw},Symbol.toStringTag,{value:"Module"})),dw={slug:"privacy-mask",title:"隐私遮罩",group:"plugin",plugin:"PrivacyMaskPlugin",intro:"一键进入隐私模式：整页毛玻璃视觉遮挡 + 敏感字段数据级隐藏（默认为概述与联系方式）。毛玻璃不防复制，敏感信息请依赖字段隐藏 / 脱敏。",why:"简历里手机号真金白银，发给陌生人前先一键打码最稳妥。",plugs:[{fn:"createPrivacyMaskPlugin",cfg:"{}",why:"遮罩经 overlay 渲染，优先级靠后确保盖在最上。"}],props:[]},pw=ae("PrivacyMaskPlugin"),fw=Object.freeze(Object.defineProperty({__proto__:null,default:pw,meta:dw},Symbol.toStringTag,{value:"Module"})),mw={slug:"contact-desensitize",title:"联系脱敏",group:"plugin",plugin:"ContactDesensitizePlugin",intro:"对电话 / 邮箱 / 地址做可逆脱敏（138****1234），公开分享时保护隐私。",why:"脱敏是可逆的：自己看完整版，发出去的是打码版，收回权限即可还原。",plugs:[{fn:"createContactDesensitizePlugin",cfg:"{}",why:"在隐私遮罩之前改写 contacts，遮蔽已脱敏内容。"}],props:[]},gw=ae("ContactDesensitizePlugin"),hw=Object.freeze(Object.defineProperty({__proto__:null,default:gw,meta:mw},Symbol.toStringTag,{value:"Module"})),yw={slug:"ats-score",title:"ATS 评分",group:"plugin",plugin:"AtsScorePlugin",intro:"扫描常见雷区（缺姓名 / 联系方式 / 量化亮点 / 命中 JD 关键词等），输出 0-100 评分与改进建议。",why:"很多公司先用 ATS 机筛，投递前自检一遍能少踩坑。",plugs:[{fn:"createAtsScorePlugin",cfg:'{ jobKeywords: ["React", "TypeScript", "Node"] }',why:"纯分析不改数据，把报告写入 ctx.shared，浮层逐条列出建议。"}],props:[],note:"ATS 评分依赖数据管道末态，故排在脱敏 / 多语言之后执行。"},vw=ae("AtsScorePlugin"),xw=Object.freeze(Object.defineProperty({__proto__:null,default:vw,meta:yw},Symbol.toStringTag,{value:"Module"})),ww={slug:"keyword-highlight",title:"关键词高亮",group:"plugin",plugin:"KeywordHighlightPlugin",intro:"输入 JD 关键词，核心文本命中的词以 <mark> 高亮，配合 ATS 自检一目了然。纯 state 驱动，不抢槽。",why:"投递前把 JD 关键词在简历里点亮，人读机读都更顺眼。",plugs:[{fn:"createKeywordHighlightPlugin",cfg:'keywords: {{kw}}, color: "{{color}}"',why:"命中词用 <mark> 包裹，颜色由 color 控制，可在工具条实时增减关键词。"}],controls:[{key:"kw",label:"关键词",kind:"select",init:'["React","TypeScript"]',options:[{label:"React, TS",value:'["React","TypeScript"]'},{label:"Node, 性能",value:'["Node","性能优化"]'},{label:"空",value:"[]"}],hint:"拖到「空」可看未命中态"},{key:"color",label:"高亮色",kind:"select",init:"#ffd34e",options:[{label:"黄",value:"#ffd34e"},{label:"青",value:"#8be0ff"},{label:"红",value:"#ff9d9d"}]}],props:[]},Sw=ae("KeywordHighlightPlugin"),kw=Object.freeze(Object.defineProperty({__proto__:null,default:Sw,meta:ww},Symbol.toStringTag,{value:"Module"})),Pw={slug:"signature-stamp",title:"电子落款",group:"plugin",plugin:"SignatureStampPlugin",intro:"文末追加签名（姓名 / 手写图）+ 签署日期；可选 CSS 圆形印章作角标（renderOverlay）。",why:"正式投递 / 确认稿需要落款与印章，手动拼容易破坏布局。",plugs:[{fn:"createSignatureStampPlugin",cfg:'name: "林清扬", stamp: "{{stamp}}"',why:"renderFooter 加签名行；stamp 为 seal 时再叠加右上角印章角标。"}],controls:[{key:"stamp",label:"印章",kind:"select",init:"seal",options:[{label:"圆形印章",value:"seal"},{label:"无印章",value:"none"}]}],props:[]},_w=ae("SignatureStampPlugin"),Cw=Object.freeze(Object.defineProperty({__proto__:null,default:_w,meta:Pw},Symbol.toStringTag,{value:"Module"})),jw={slug:"qrcode",title:"二维码",group:"plugin",plugin:"QrCodePlugin",intro:"把联系方式 / 链接编码成二维码，作常显角标或弹窗展示（qrcode 库按需加载）。",why:"线下物料、招聘海报扫一扫直达主页，比贴长链接友好。",plugs:[{fn:"createQrCodePlugin",cfg:'content: "https://vane.dev/r/qingyang"',why:"renderOverlay 在右上角常显二维码，点击放大；内容可传字符串或函数。"}],props:[]},Rw=ae("QrCodePlugin"),bw=Object.freeze(Object.defineProperty({__proto__:null,default:Rw,meta:jw},Symbol.toStringTag,{value:"Module"})),Ew={slug:"share-link",title:"分享链接",group:"plugin",plugin:"ShareLinkPlugin",intro:"生成可分享 URL（编码数据或指向宿主），弹窗复制；无宿主时提示数据安全。",why:"把简历发给 HR 时给一个干净链接，比传 PDF 附件更轻。",plugs:[{fn:"createShareLinkPlugin",cfg:'onBuildUrl: (data) => "https://vane.dev/r/" + encodeURIComponent(data.basics.name)',why:"推荐用 onBuildUrl 钩到宿主，避免把整份数据塞进 hash；renderToolbar 提供复制按钮。"}],props:[]},Dw=ae("ShareLinkPlugin"),Tw=Object.freeze(Object.defineProperty({__proto__:null,default:Dw,meta:Ew},Symbol.toStringTag,{value:"Module"})),Ow={slug:"export-pdf",title:"导出 PDF",group:"plugin",plugin:"ExportPdfPlugin",intro:"打印通道（配合 PrintOptimize）或 canvas 通道（html2canvas + jsPDF 拼页，按需加载）。",why:"终稿交给招聘系统，PDF 比网页兼容性好；打印通道零额外依赖。",plugs:[{fn:"createExportPdfPlugin",cfg:'method: "print"',why:"renderToolbar 提供导出按钮；print 通道与 PrintOptimize 协同出 A4。"}],props:[],note:"canvas 通道需 html2canvas + jsPDF，默认按需加载，演示用 print 通道即可。"},$w=ae("ExportPdfPlugin"),zw=Object.freeze(Object.defineProperty({__proto__:null,default:$w,meta:Ow},Symbol.toStringTag,{value:"Module"})),Nw={slug:"print-optimize",title:"打印优化",group:"plugin",plugin:"PrintOptimizePlugin",intro:"注入 @media print 样式：分页不断行、隐藏工具条与遮罩、按 A4 出页。与 ExportPdf 协同。",why:"Ctrl/Cmd+P 直接能打印出干净版，不用临时删按钮。",plugs:[{fn:"createPrintOptimizePlugin",cfg:'pageSize: "A4"',why:"onMount 注入打印样式；通常和 ExportPdf（print 通道）成对出现。"}],props:[],note:"本插件只改打印输出（Ctrl/Cmd+P 或导出 PDF 的打印通道），屏幕上的渲染与裸 Core 一致是预期行为 —— 按 P 预览即可看到 A4 分页与工具条隐藏。"},Mw=ae("PrintOptimizePlugin"),Lw=Object.freeze(Object.defineProperty({__proto__:null,default:Mw,meta:Nw},Symbol.toStringTag,{value:"Module"})),Aw={slug:"attachment-preview",title:"附件预览",group:"plugin",plugin:"AttachmentPreviewPlugin",intro:"列出附件卡片（PDF / 图片 / 链接），点击在灯箱中预览；items 会合并进 data.attachments。",why:"作品集、证书扫描件随简历一并提供，HR 点开即看。",plugs:[{fn:"createAttachmentPreviewPlugin",cfg:'items: [{ name: "作品集", kind: "pdf", url: "https://x.com/p.pdf" }]',why:"renderAttachments 渲染卡片网格，renderOverlay 承载灯箱。"}],props:[]},Iw=ae("AttachmentPreviewPlugin"),Fw=Object.freeze(Object.defineProperty({__proto__:null,default:Iw,meta:Aw},Symbol.toStringTag,{value:"Module"})),Uw={slug:"versioning",title:"版本管理",group:"plugin",plugin:"VersioningPlugin",intro:"快照数据 / 模板 / 语言 / 隐私态，保存命名版本，可恢复 / 删除，持久化 localStorage。",why:"同一份简历投不同公司要改好几版，存快照比复制文件省心。",plugs:[{fn:"createVersioningPlugin",cfg:"maxVersions: 20",why:"renderToolbar 存版本，renderFooter 显示当前版本，恢复即切回整份状态。"}],props:[],note:"演示站点用 localStorage 持久化，清缓存会丢失版本快照。"},Bw=ae("VersioningPlugin"),Vw=Object.freeze(Object.defineProperty({__proto__:null,default:Bw,meta:Uw},Symbol.toStringTag,{value:"Module"})),Ww={slug:"deliver-track",title:"投递追踪",group:"plugin",plugin:"DeliverTrackPlugin",intro:"记录投递去向与状态（投递 / 面试 / offer / 拒绝），页脚汇总，浮层时间线。",why:"广撒网投完容易忘，集中看一眼就知道谁进了面试。",plugs:[{fn:"createDeliverTrackPlugin",cfg:'initial: [{ company: "字节", status: "面试" }]',why:"renderFooter 汇总各状态计数，renderOverlay 展开时间线。"}],props:[]},Hw=ae("DeliverTrackPlugin"),Kw=Object.freeze(Object.defineProperty({__proto__:null,default:Hw,meta:Ww},Symbol.toStringTag,{value:"Module"})),Qw={slug:"ai-polish",title:"AI 润色",group:"plugin",plugin:"AiPolishPlugin",intro:"调用可插拔服务润色摘要 / 工作描述 / 项目描述，可一键还原（不硬编码密钥）。",why:"自己写的描述常偏口语，接一个润色服务提一档专业度。",plugs:[{fn:"createAiPolishPlugin",cfg:'fields: ["summary", "work", "projects"]',why:"transformData 改写对应字段，renderToolbar 提供「润色 / 还原」按钮；polish 由宿主注入。"}],props:[],note:"演示态的 polish 为占位实现，真实项目把服务注入 createAiPolishPlugin({ polish }) 即可。"},Yw=ae("AiPolishPlugin"),Jw=Object.freeze(Object.defineProperty({__proto__:null,default:Yw,meta:Qw},Symbol.toStringTag,{value:"Module"})),qw=`/**
 * 裸核心：不装任何插件，只渲染结构化简历数据。
 * 其它示例页都是在这之上叠加一个插件。
 */
import React from "react";
import { ResumeCore } from "vane-resume";
import { SAMPLE_RESUME } from "../data/sample";
import type { DemoMeta, DemoStageProps } from "./types";

export const meta: DemoMeta = {
  slug: "basic",
  title: "裸核心",
  group: "basic",
  intro: "ResumeCore 接收 ResumeData，按板块顺序渲染；不装任何插件时就是最朴素的纵向简历。",
  why: "先看底座：所有插件都是在这个结构化核心之上做增强，而不是重写它。",
  plugs: [],
  props: [],
};

export default function Stage(_: DemoStageProps) {
  return (
    <ResumeCore data={SAMPLE_RESUME} containerStyle={{ maxWidth: 560, margin: "0 auto" }} />
  );
}
`,Gw=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "template-switch",
  title: "模板切换",
  group: "plugin",
  plugin: "TemplateSwitchPlugin",
  intro: "在经典 / 现代 / 紧凑 / 学术等版式间切换，经 CSS 变量驱动整体观感。",
  why: "同一份数据要适配不同招聘渠道的审美，模板切换比改组件快得多。",
  plugs: [{ fn: "createTemplateSwitchPlugin", cfg: \`defaultId: "modern"\`, why: "默认落到「现代」版式（紫调、大圆角），一眼区别于裸 Core 的经典蓝。", }],
  props: [],
};

export default makeStage("TemplateSwitchPlugin");
`,Xw=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "theme-customize",
  title: "主题配色",
  group: "plugin",
  plugin: "ThemeCustomizePlugin",
  intro: "预设强调色 + 自定义取色器，经 CSS 变量注入容器。",
  why: "招聘站 / 个人主页有品牌色，主题定制让简历和它的承载页长得像一家人。",
  plugs: [
    {
      fn: "createThemeCustomizePlugin",
      cfg: \`presets: [{ id: "green", label: "绿", vars: { "--vr-accent": "#1f9d55" } }, { id: "orange", label: "橙", vars: { "--vr-accent": "#e8590c" } }]\`,
      why: "把非蓝配色排到第一，挂载即生效（默认蓝会跟裸 Core 看着一样）。",
    },
  ],
  props: [],
};

export default makeStage("ThemeCustomizePlugin");
`,Zw=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "section-reorder",
  title: "板块重排",
  group: "plugin",
  plugin: "SectionReorderPlugin",
  intro: "调整基本信息 / 工作 / 教育 / 技能等板块顺序，顺序经 ctx.state 驱动核心渲染。",
  why: "技术岗把「工作」提前、学术岗把「教育」提前，叙事顺序影响第一印象。",
  plugs: [
    {
      fn: "createSectionReorderPlugin",
      cfg: \`sections: ["basics", "skills", "work", "education", "projects", "extra", "attachments"]\`,
      why: "把「技能」提到「工作」之前，默认即生效，不用点按钮也能看出板块被重排。",
    },
  ],
  props: [],
};

export default makeStage("SectionReorderPlugin");
`,e1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "section-collapse",
  title: "板块折叠",
  group: "plugin",
  plugin: "SectionCollapsePlugin",
  intro: "为每个板块头部加折叠开关，折叠态隐藏正文；纯 state 驱动，可与时间轴并存。",
  why: "长简历先给面试官一个大纲，感兴趣再展开，避免一屏全是字。",
  plugs: [{ fn: "createSectionCollapsePlugin", cfg: "{}", why: "读写的 collapseMode / collapsed 存在 ctx.state。", }],
  props: [],
};

export default makeStage("SectionCollapsePlugin");
`,t1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "timeline-view",
  title: "时间轴视图",
  group: "plugin",
  plugin: "TimelineViewPlugin",
  intro: "把工作 / 教育经历从列表切换为竖向时间轴（圆点 + 连线 + 日期）。",
  why: "经历多、跨度长时，时间轴比平铺列表更能体现成长曲线。",
  plugs: [{ fn: "createTimelineViewPlugin", cfg: "{}", why: "覆盖 renderWork / renderEducation 为时间轴渲染。", }],
  props: [],
};

export default makeStage("TimelineViewPlugin");
`,n1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "stat-summary",
  title: "数据概览",
  group: "plugin",
  plugin: "StatSummaryPlugin",
  intro: "在基本信息区追加工作段数 / 技能数 / 项目数 / 最高学历等统计徽章。",
  why: "面试官扫一眼就能抓住「几年经验、几个项目」，量化亮点前置。",
  plugs: [{ fn: "createStatSummaryPlugin", cfg: "{}", why: "装饰累积槽 renderBasics，追加统计徽章。", }],
  props: [],
};

export default makeStage("StatSummaryPlugin");
`,r1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "multi-lang",
  title: "多语言",
  group: "plugin",
  plugin: "MultiLangPlugin",
  intro: "在预设语言间切换，整体翻译文本字段；缺失字段保留原文降级。",
  why: "投外企 / 海外岗需要中英双语，逐字段手写两套成本太高。",
  plugs: [{ fn: "createMultiLangPlugin", cfg: "{}", why: "经 transformData 注入翻译后的文本字段。", }],
  props: [],
};

export default makeStage("MultiLangPlugin");
`,o1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "privacy-mask",
  title: "隐私遮罩",
  group: "plugin",
  plugin: "PrivacyMaskPlugin",
  intro: "一键进入隐私模式：整页毛玻璃视觉遮挡 + 敏感字段数据级隐藏（默认为概述与联系方式）。毛玻璃不防复制，敏感信息请依赖字段隐藏 / 脱敏。",
  why: "简历里手机号真金白银，发给陌生人前先一键打码最稳妥。",
  plugs: [{ fn: "createPrivacyMaskPlugin", cfg: "{}", why: "遮罩经 overlay 渲染，优先级靠后确保盖在最上。", }],
  props: [],
};

export default makeStage("PrivacyMaskPlugin");
`,i1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "contact-desensitize",
  title: "联系脱敏",
  group: "plugin",
  plugin: "ContactDesensitizePlugin",
  intro: "对电话 / 邮箱 / 地址做可逆脱敏（138****1234），公开分享时保护隐私。",
  why: "脱敏是可逆的：自己看完整版，发出去的是打码版，收回权限即可还原。",
  plugs: [{ fn: "createContactDesensitizePlugin", cfg: "{}", why: "在隐私遮罩之前改写 contacts，遮蔽已脱敏内容。", }],
  props: [],
};

export default makeStage("ContactDesensitizePlugin");
`,s1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "ats-score",
  title: "ATS 评分",
  group: "plugin",
  plugin: "AtsScorePlugin",
  intro: "扫描常见雷区（缺姓名 / 联系方式 / 量化亮点 / 命中 JD 关键词等），输出 0-100 评分与改进建议。",
  why: "很多公司先用 ATS 机筛，投递前自检一遍能少踩坑。",
  plugs: [
    {
      fn: "createAtsScorePlugin",
      cfg: \`{ jobKeywords: ["React", "TypeScript", "Node"] }\`,
      why: "纯分析不改数据，把报告写入 ctx.shared，浮层逐条列出建议。",
    },
  ],
  props: [],
  note: "ATS 评分依赖数据管道末态，故排在脱敏 / 多语言之后执行。",
};

export default makeStage("AtsScorePlugin");
`,l1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "keyword-highlight",
  title: "关键词高亮",
  group: "plugin",
  plugin: "KeywordHighlightPlugin",
  intro: "输入 JD 关键词，核心文本命中的词以 <mark> 高亮，配合 ATS 自检一目了然。纯 state 驱动，不抢槽。",
  why: "投递前把 JD 关键词在简历里点亮，人读机读都更顺眼。",
  plugs: [
    {
      fn: "createKeywordHighlightPlugin",
      cfg: \`keywords: {{kw}}, color: "{{color}}"\`,
      why: "命中词用 <mark> 包裹，颜色由 color 控制，可在工具条实时增减关键词。",
    },
  ],
  controls: [
    {
      key: "kw",
      label: "关键词",
      kind: "select",
      init: '["React","TypeScript"]',
      options: [
        { label: "React, TS", value: '["React","TypeScript"]' },
        { label: "Node, 性能", value: '["Node","性能优化"]' },
        { label: "空", value: "[]" },
      ],
      hint: "拖到「空」可看未命中态",
    },
    {
      key: "color",
      label: "高亮色",
      kind: "select",
      init: "#ffd34e",
      options: [
        { label: "黄", value: "#ffd34e" },
        { label: "青", value: "#8be0ff" },
        { label: "红", value: "#ff9d9d" },
      ],
    },
  ],
  props: [],
};

export default makeStage("KeywordHighlightPlugin");
`,a1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "signature-stamp",
  title: "电子落款",
  group: "plugin",
  plugin: "SignatureStampPlugin",
  intro: "文末追加签名（姓名 / 手写图）+ 签署日期；可选 CSS 圆形印章作角标（renderOverlay）。",
  why: "正式投递 / 确认稿需要落款与印章，手动拼容易破坏布局。",
  plugs: [
    {
      fn: "createSignatureStampPlugin",
      cfg: \`name: "林清扬", stamp: "{{stamp}}"\`,
      why: "renderFooter 加签名行；stamp 为 seal 时再叠加右上角印章角标。",
    },
  ],
  controls: [
    {
      key: "stamp",
      label: "印章",
      kind: "select",
      init: "seal",
      options: [
        { label: "圆形印章", value: "seal" },
        { label: "无印章", value: "none" },
      ],
    },
  ],
  props: [],
};

export default makeStage("SignatureStampPlugin");
`,u1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "qrcode",
  title: "二维码",
  group: "plugin",
  plugin: "QrCodePlugin",
  intro: "把联系方式 / 链接编码成二维码，作常显角标或弹窗展示（qrcode 库按需加载）。",
  why: "线下物料、招聘海报扫一扫直达主页，比贴长链接友好。",
  plugs: [
    {
      fn: "createQrCodePlugin",
      cfg: \`content: "https://vane.dev/r/qingyang"\`,
      why: "renderOverlay 在右上角常显二维码，点击放大；内容可传字符串或函数。",
    },
  ],
  props: [],
};

export default makeStage("QrCodePlugin");
`,c1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "share-link",
  title: "分享链接",
  group: "plugin",
  plugin: "ShareLinkPlugin",
  intro: "生成可分享 URL（编码数据或指向宿主），弹窗复制；无宿主时提示数据安全。",
  why: "把简历发给 HR 时给一个干净链接，比传 PDF 附件更轻。",
  plugs: [
    {
      fn: "createShareLinkPlugin",
      cfg: \`onBuildUrl: (data) => "https://vane.dev/r/" + encodeURIComponent(data.basics.name)\`,
      why: "推荐用 onBuildUrl 钩到宿主，避免把整份数据塞进 hash；renderToolbar 提供复制按钮。",
    },
  ],
  props: [],
};

export default makeStage("ShareLinkPlugin");
`,d1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "export-pdf",
  title: "导出 PDF",
  group: "plugin",
  plugin: "ExportPdfPlugin",
  intro: "打印通道（配合 PrintOptimize）或 canvas 通道（html2canvas + jsPDF 拼页，按需加载）。",
  why: "终稿交给招聘系统，PDF 比网页兼容性好；打印通道零额外依赖。",
  plugs: [
    {
      fn: "createExportPdfPlugin",
      cfg: \`method: "print"\`,
      why: "renderToolbar 提供导出按钮；print 通道与 PrintOptimize 协同出 A4。",
    },
  ],
  props: [],
  note: "canvas 通道需 html2canvas + jsPDF，默认按需加载，演示用 print 通道即可。",
};

export default makeStage("ExportPdfPlugin");
`,p1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "print-optimize",
  title: "打印优化",
  group: "plugin",
  plugin: "PrintOptimizePlugin",
  intro: "注入 @media print 样式：分页不断行、隐藏工具条与遮罩、按 A4 出页。与 ExportPdf 协同。",
  why: "Ctrl/Cmd+P 直接能打印出干净版，不用临时删按钮。",
  plugs: [
    {
      fn: "createPrintOptimizePlugin",
      cfg: \`pageSize: "A4"\`,
      why: "onMount 注入打印样式；通常和 ExportPdf（print 通道）成对出现。",
    },
  ],
  props: [],
  note: "本插件只改打印输出（Ctrl/Cmd+P 或导出 PDF 的打印通道），屏幕上的渲染与裸 Core 一致是预期行为 —— 按 P 预览即可看到 A4 分页与工具条隐藏。",
};

export default makeStage("PrintOptimizePlugin");
`,f1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "attachment-preview",
  title: "附件预览",
  group: "plugin",
  plugin: "AttachmentPreviewPlugin",
  intro: "列出附件卡片（PDF / 图片 / 链接），点击在灯箱中预览；items 会合并进 data.attachments。",
  why: "作品集、证书扫描件随简历一并提供，HR 点开即看。",
  plugs: [
    {
      fn: "createAttachmentPreviewPlugin",
      cfg: \`items: [{ name: "作品集", kind: "pdf", url: "https://x.com/p.pdf" }]\`,
      why: "renderAttachments 渲染卡片网格，renderOverlay 承载灯箱。",
    },
  ],
  props: [],
};

export default makeStage("AttachmentPreviewPlugin");
`,m1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "versioning",
  title: "版本管理",
  group: "plugin",
  plugin: "VersioningPlugin",
  intro: "快照数据 / 模板 / 语言 / 隐私态，保存命名版本，可恢复 / 删除，持久化 localStorage。",
  why: "同一份简历投不同公司要改好几版，存快照比复制文件省心。",
  plugs: [
    {
      fn: "createVersioningPlugin",
      cfg: \`maxVersions: 20\`,
      why: "renderToolbar 存版本，renderFooter 显示当前版本，恢复即切回整份状态。",
    },
  ],
  props: [],
  note: "演示站点用 localStorage 持久化，清缓存会丢失版本快照。",
};

export default makeStage("VersioningPlugin");
`,g1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "deliver-track",
  title: "投递追踪",
  group: "plugin",
  plugin: "DeliverTrackPlugin",
  intro: "记录投递去向与状态（投递 / 面试 / offer / 拒绝），页脚汇总，浮层时间线。",
  why: "广撒网投完容易忘，集中看一眼就知道谁进了面试。",
  plugs: [
    {
      fn: "createDeliverTrackPlugin",
      cfg: \`initial: [{ company: "字节", status: "面试" }]\`,
      why: "renderFooter 汇总各状态计数，renderOverlay 展开时间线。",
    },
  ],
  props: [],
};

export default makeStage("DeliverTrackPlugin");
`,h1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "ai-polish",
  title: "AI 润色",
  group: "plugin",
  plugin: "AiPolishPlugin",
  intro: "调用可插拔服务润色摘要 / 工作描述 / 项目描述，可一键还原（不硬编码密钥）。",
  why: "自己写的描述常偏口语，接一个润色服务提一档专业度。",
  plugs: [
    {
      fn: "createAiPolishPlugin",
      cfg: \`fields: ["summary", "work", "projects"]\`,
      why: "transformData 改写对应字段，renderToolbar 提供「润色 / 还原」按钮；polish 由宿主注入。",
    },
  ],
  props: [],
  note: "演示态的 polish 为占位实现，真实项目把服务注入 createAiPolishPlugin({ polish }) 即可。",
};

export default makeStage("AiPolishPlugin");
`,y1=Object.assign({"./00-basic.tsx":dy,"./01-template-switch.tsx":K0,"./02-theme-customize.tsx":J0,"./03-section-reorder.tsx":X0,"./04-section-collapse.tsx":tw,"./05-timeline-view.tsx":ow,"./06-stat-summary.tsx":lw,"./07-multi-lang.tsx":cw,"./08-privacy-mask.tsx":fw,"./09-contact-desensitize.tsx":hw,"./10-ats-score.tsx":xw,"./11-keyword-highlight.tsx":kw,"./12-signature-stamp.tsx":Cw,"./13-qrcode.tsx":bw,"./14-share-link.tsx":Tw,"./15-export-pdf.tsx":zw,"./16-print-optimize.tsx":Lw,"./17-attachment-preview.tsx":Fw,"./18-versioning.tsx":Vw,"./19-deliver-track.tsx":Kw,"./20-ai-polish.tsx":Jw}),v1=Object.assign({"./00-basic.tsx":qw,"./01-template-switch.tsx":Gw,"./02-theme-customize.tsx":Xw,"./03-section-reorder.tsx":Zw,"./04-section-collapse.tsx":e1,"./05-timeline-view.tsx":t1,"./06-stat-summary.tsx":n1,"./07-multi-lang.tsx":r1,"./08-privacy-mask.tsx":o1,"./09-contact-desensitize.tsx":i1,"./10-ats-score.tsx":s1,"./11-keyword-highlight.tsx":l1,"./12-signature-stamp.tsx":a1,"./13-qrcode.tsx":u1,"./14-share-link.tsx":c1,"./15-export-pdf.tsx":d1,"./16-print-optimize.tsx":p1,"./17-attachment-preview.tsx":f1,"./18-versioning.tsx":m1,"./19-deliver-track.tsx":g1,"./20-ai-polish.tsx":h1}),x1=e=>e.replace(/^\.\//,""),ol=Object.entries(y1).map(([e,t])=>{const n=x1(e);return{meta:t.meta,Stage:t.default,file:n,source:v1[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),w1=Array.from(new Set(ol.map(e=>e.meta.group))),il={basic:{label:"基础功能",hint:"Core 自身的 props"},advanced:{label:"高级功能",hint:"ref / 事件 / 杂项配置"},plugin:{label:"插件功能",hint:"一插件一页"}};function nc(e){const t={};for(const n of e.controls??[])t[n.key]=n.init;return t}const S1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn, cloneData } from "../../components/ResumePlugin/plugins/tokens";
import doc from "./doc.json";

export interface AiPolishConfig {
  fields?: ("summary" | "work" | "projects")[];
  tone?: string;
  /** 可插拔润色服务：传入文本与字段名，返回润色后文本（不硬编码密钥） */
  polish?: (text: string, field: string) => Promise<string>;
}

/**
 * 润色缓存只存「本轮润色产出的文本片段」，并带上语言标记。
 * 不缓存整份 data：源数据可能已被脱敏 / 隐私插件改写，整份回放会把旧的掩码结果带回来。
 */
interface PolishCache {
  lang: string;
  summary?: string;
  work?: string[][];
  projects?: string[];
}

const CACHE_KEY = "aipolish:polished";

export const createAiPolishPlugin: ResumePluginCreator<AiPolishConfig> = (config = {}) => {
  const fields = config.fields ?? ["summary", "work", "projects"];
  const polish = config.polish;

  const langOf = (ctx: ResumePluginContext<ResumeData>) =>
    String(ctx.state.lang ?? "default");
  const readCache = (ctx: ResumePluginContext<ResumeData>) =>
    ctx.shared.get(CACHE_KEY) as PolishCache | undefined;

  return {
    name: "ai-polish",
    version: "0.1.0",
    description: doc.description,
    priority: 16,
    config: { order: 16 },
    // 依赖 multi-lang：确保润色在「已本地化」数据之上执行
    dependencies: ["multi-lang"],
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        if (ctx.state.aiPolishEnabled === undefined) ctx.setState({ aiPolishEnabled: false });
      },
      // 管道语义末位之一：在 MultiLang 之后润色。
      // 缓存按 lang 隔离：切换语言后不再复用上一语言的润色结果；
      // 只把润色文本片段叠加到当前数据上，联系人等字段由后续脱敏 / 隐私插件重新处理。
      transformData: (ctx, data) => {
        if (!ctx.state.aiPolishEnabled) return data;
        const cache = readCache(ctx);
        if (!cache || cache.lang !== langOf(ctx)) return data;
        const out = cloneData(data as ResumeData);
        if (fields.includes("summary") && cache.summary && out.basics) {
          out.basics.summary = cache.summary;
        }
        if (fields.includes("work") && cache.work) {
          (out.work ?? []).forEach((w, i) => {
            const highlights = cache.work?.[i];
            if (Array.isArray(highlights) && highlights.length === w.highlights.length) {
              w.highlights = [...highlights];
            }
          });
        }
        if (fields.includes("projects") && cache.projects) {
          (out.projects ?? []).forEach((p, i) => {
            const desc = cache.projects?.[i];
            if (typeof desc === "string") p.desc = desc;
          });
        }
        return out;
      },
      renderToolbar: (ctx) => {
        const cached = readCache(ctx);
        // 「已润色」必须以当前语言有缓存为准，否则切换语言后按钮仍显示激活态
        const enabled = !!ctx.state.aiPolishEnabled && cached?.lang === langOf(ctx);
        const busy = !!ctx.state.aiPolishing;
        const run = async () => {
          if (!polish) {
            ctx.logger.warn("[AiPolish] 未配置 config.polish，跳过润色");
            return;
          }
          const lang = langOf(ctx);
          const source = cloneData(ctx.data as ResumeData);
          ctx.setState({ aiPolishing: true });
          try {
            const cache: PolishCache = { lang };
            if (fields.includes("summary") && source.basics?.summary) {
              cache.summary = await polish(source.basics.summary, "summary");
            }
            if (fields.includes("work")) {
              cache.work = await Promise.all(
                (source.work ?? []).map((w) =>
                  Promise.all((w.highlights ?? []).map((h) => polish(h, "work")))
                )
              );
            }
            if (fields.includes("projects")) {
              cache.projects = await Promise.all(
                (source.projects ?? []).map((p) => polish(p.desc, "projects"))
              );
            }
            ctx.shared.set(CACHE_KEY, cache);
            ctx.setState({ aiPolishEnabled: true });
          } catch (e) {
            ctx.logger.error("[AiPolish] 润色失败", e);
          } finally {
            ctx.setState({ aiPolishing: false });
          }
        };
        return (
          <div key="ai-polish" style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <button
              type="button"
              disabled={busy || !polish}
              onClick={() => void run()}
              style={toolbarBtn(enabled)}
            >
              {busy ? "润色中…" : "AI 润色"}
            </button>
            {enabled && (
              <button
                type="button"
                onClick={() => {
                  ctx.shared.delete(CACHE_KEY);
                  ctx.setState({ aiPolishEnabled: false });
                }}
                style={toolbarBtn(false)}
              >
                还原
              </button>
            )}
          </div>
        );
      },
    },
  };
};

createAiPolishPlugin.meta = doc as PluginDoc;
`,k1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import { Overlay } from "../../components/ResumePlugin/plugins/overlay";
import doc from "./doc.json";

export interface AtsRule {
  key: string;
  label: string;
  weight: number;
  test: (d: ResumeData, jobKeywords: string[]) => boolean;
}
export interface AtsReportItem {
  label: string;
  ok: boolean;
  weight: number;
}
export interface AtsReport {
  score: number;
  items: AtsReportItem[];
}
export interface AtsScoreConfig {
  /** JD 关键词，命中加分 */
  jobKeywords?: string[];
  /** 可扩展评分规则（合并内置规则） */
  rules?: AtsRule[];
}

const DEFAULT_RULES: AtsRule[] = [
  { key: "name", label: "含姓名", weight: 10, test: (d) => !!d.basics?.name },
  { key: "contact", label: "含联系方式", weight: 10, test: (d) => (d.basics?.contacts?.length ?? 0) > 0 },
  { key: "work", label: "有工作经历", weight: 15, test: (d) => (d.work?.length ?? 0) > 0 },
  {
    key: "metric",
    label: "工作量化亮点",
    weight: 15,
    test: (d) => (d.work ?? []).some((w) => (w.highlights ?? []).some((h) => /\\d/.test(h))),
  },
  { key: "edu", label: "有教育背景", weight: 10, test: (d) => (d.education?.length ?? 0) > 0 },
  {
    key: "skill",
    label: "有技能标签",
    weight: 10,
    test: (d) => (d.skills ?? []).some((g) => (g.items?.length ?? 0) > 0),
  },
  {
    key: "jd",
    label: "命中 JD 关键词",
    weight: 20,
    test: (d, kws) =>
      kws.length > 0 &&
      collectText(d).some((t) => kws.some((k) => t.toLowerCase().includes(k.toLowerCase()))),
  },
  {
    key: "length",
    label: "篇幅适中",
    weight: 10,
    test: (d) => {
      const n =
        (d.work ?? []).reduce((s, w) => s + (w.highlights?.length ?? 0), 0) +
        (d.projects ?? []).length;
      return n <= 40;
    },
  },
];

function collectText(d: ResumeData): string[] {
  const out: string[] = [];
  const b = d.basics;
  if (b) {
    out.push(b.name, b.title, b.summary ?? "");
    (b.contacts ?? []).forEach((c) => out.push(c.value));
  }
  (d.work ?? []).forEach((w) => {
    out.push(w.company, w.role, ...(w.highlights ?? []));
  });
  (d.education ?? []).forEach((e) => out.push(e.school, e.degree, e.major ?? ""));
  (d.skills ?? []).forEach((g) => out.push(g.category, ...(g.items ?? [])));
  (d.projects ?? []).forEach((p) => out.push(p.name, p.desc, p.role ?? ""));
  return out.filter(Boolean);
}

function computeAts(d: ResumeData, jobKeywords: string[]): AtsReport {
  const items: AtsReportItem[] = DEFAULT_RULES.map((r) => ({
    label: r.label,
    weight: r.weight,
    ok: r.test(d, jobKeywords),
  }));
  const score = items.reduce((s, it) => s + (it.ok ? it.weight : 0), 0);
  return { score, items };
}

/**
 * AtsScore —— ATS 兼容性评分（纯分析，不改数据）。
 * transformData（依赖 privacy-mask，确保跑在数据管道末位）把报告写进 ctx.shared["ats:report"]；
 * renderFooter 显示评分徽章；renderOverlay 展开逐条建议。
 */
export const createAtsScorePlugin: ResumePluginCreator<AtsScoreConfig> = (config = {}) => {
  const jobKeywords = config.jobKeywords ?? [];
  const getReport = (ctx: ResumePluginContext<ResumeData>): AtsReport =>
    (ctx.shared.get("ats:report") as AtsReport | undefined) ??
    computeAts(ctx.data as ResumeData, jobKeywords);

  return {
    name: "ats-score",
    version: "0.1.0",
    description: doc.description,
    priority: 38,
    config: { order: 38 },
    dependencies: ["privacy-mask"],
    hooks: {
      transformData: (ctx, data) => {
        ctx.shared.set("ats:report", computeAts(data as ResumeData, jobKeywords));
        return data;
      },
      renderFooter: (ctx) => {
        const report = getReport(ctx);
        const tone = report.score >= 80 ? "#1f9d55" : report.score >= 60 ? "#e8590c" : "#cf4407";
        const open = !!ctx.state.atsOpen;
        return (
          <button
            key="ats-score"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => ctx.setState({ atsOpen: !open })}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              cursor: "pointer",
              color: "var(--vr-muted, #5d636a)",
              background: "transparent",
              border: "none",
              padding: 0,
              font: "inherit",
            }}
          >
            <span>ATS</span>
            <span style={{ fontWeight: 700, color: tone }}>{report.score}</span>
          </button>
        );
      },
      renderOverlay: (ctx) => {
        if (!ctx.state.atsOpen) return null;
        const report = getReport(ctx);
        const close = () => ctx.setState({ atsOpen: false });
        return (
          <Overlay
            key="ats-overlay"
            title={\`ATS 兼容性评分 \${report.score}\`}
            onClose={close}
            width={380}
            zIndex={59}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {report.items.map((it) => (
                  <div key={it.label}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                      <span style={{ color: it.ok ? "#1f9d55" : "#cf4407" }}>
                        {it.ok ? "✓" : "✗"} {it.label}
                      </span>
                      <span style={{ color: "#8a9099" }}>{it.weight} 分</span>
                    </div>
                    <div style={{ height: 6, background: "#f2f3f5", borderRadius: 3, marginTop: 4, overflow: "hidden" }}>
                      <div
                        style={{
                          width: \`\${it.ok ? 100 : 0}%\`,
                          height: "100%",
                          background: it.ok ? "#1f9d55" : "#cf4407",
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </Overlay>
        );
      },
    },
  };
};

createAtsScorePlugin.meta = doc as PluginDoc;
`,P1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, 
  ResumeData,
  AttachmentItem,
} from "../../components/ResumePlugin/plugins/types";
import { cloneData, safeHref } from "../../components/ResumePlugin/plugins/tokens";
import { Overlay } from "../../components/ResumePlugin/plugins/overlay";
import doc from "./doc.json";

export interface AttachmentPreviewConfig {
  items?: AttachmentItem[];
}

export const createAttachmentPreviewPlugin: ResumePluginCreator<AttachmentPreviewConfig> = (config = {}) => {
  const extra = config.items ?? [];
  return {
    name: "attachment-preview",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    config: { order: 30 },
    hooks: {
      // priority 30：管道末位，仅合并配置项中的附件，不改动其它字段
      transformData: (ctx, data) => {
        if (!extra.length) return data;
        const d = cloneData(data as ResumeData);
        d.attachments = [...(d.attachments ?? []), ...extra];
        return d;
      },
      renderAttachments: (ctx: ResumePluginContext<ResumeData>) => {
        const items = (ctx.data as ResumeData)?.attachments ?? [];
        if (!items.length) return null;
        return (
          <div key="attachment-grid" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {items.map((a, i) => (
              <button
                key={a.id ?? i}
                type="button"
                aria-haspopup="dialog"
                aria-expanded={ctx.state.previewItem === (a.id ?? i)}
                onClick={() => ctx.setState({ previewItem: a.id ?? i })}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#f2f3f5",
                  color: "#1f2328",
                  border: "1px solid #d4d8de",
                  borderRadius: 8,
                  padding: "8px 12px",
                  cursor: "pointer",
                  fontSize: 13,
                  textAlign: "left",
                }}
              >
                <span style={{ color: "var(--vr-accent, #2f6feb)", textTransform: "uppercase", fontSize: 11, fontWeight: 700 }}>
                  {a.kind}
                </span>
                <span>{a.name}</span>
              </button>
            ))}
          </div>
        );
      },
      renderOverlay: (ctx) => {
        const id = ctx.state.previewItem;
        if (id === undefined || id === null) return null;
        const item = (ctx.data as ResumeData)?.attachments?.find(
          (a, i) => (a.id ?? i) === id
        );
        if (!item) return null;
        const close = () => ctx.setState({ previewItem: null });
        return (
          <Overlay key="attachment-lightbox" title={item.name} onClose={close} width={560} zIndex={58}>
            <div style={{ flex: 1, overflow: "auto", minHeight: 240 }}>
              {item.kind === "image" ? (
                <img src={item.url} alt={item.name} style={{ maxWidth: "100%", borderRadius: 6 }} />
              ) : item.kind === "pdf" ? (
                <iframe
                  src={safeHref(item.url)}
                  title={item.name}
                  // 不可信 PDF / 网页：默认只允许脚本，禁同源，防弹窗与顶层导航
                  sandbox="allow-scripts"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  style={{ width: "100%", height: 360, border: "1px solid #eee", borderRadius: 6 }}
                />
              ) : (
                <a href={safeHref(item.url)} target="_blank" rel="noreferrer" style={{ color: "var(--vr-accent, #2f6feb)" }}>打开链接 ↗</a>
              )}
            </div>
          </Overlay>
        );
      },
    },
  };
};

createAttachmentPreviewPlugin.meta = doc as PluginDoc;
`,_1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, 
  ResumeData,
  ContactItem,
} from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn, cloneData } from "../../components/ResumePlugin/plugins/tokens";
import doc from "./doc.json";

export type ContactType = ContactItem["type"];
export interface ContactDesensitizeConfig {
  mode?: "mask" | "hide" | "show";
  fields?: ContactType[];
  /** 自定义脱敏器（按类型覆盖默认） */
  masks?: Partial<Record<ContactType, (v: string) => string>>;
}

const MASK = "***";

/** 头尾保留、中间全遮；短文本无法保留结构时直接全隐藏 */
const maskKeepEnds = (value: string, head: number, tail: number): string => {
  const chars = Array.from(value);
  if (chars.length <= head + tail) return MASK;
  return \`\${chars.slice(0, head).join("")}\${MASK}\${chars.slice(-tail).join("")}\`;
};

/**
 * 默认脱敏：按类型归一化处理，无法可靠保留结构时回退为全隐藏。
 * - 手机号先剔除非数字（兼容 +86 / 138-0013-8000 / 空格分隔）；
 * - 邮箱按最后一个 @ 切分，本地部分与域名都遮罩，异常值（多个 @ / 无 @）直接全隐藏；
 * - 地址 / 社交文本过短时直接全隐藏，避免正则不命中导致明文泄漏。
 */
const defaultMask = (type: ContactType, value: string): string => {
  switch (type) {
    case "phone": {
      let digits = value.replace(/\\D/g, "");
      if (digits.length > 11 && digits.startsWith("86")) digits = digits.slice(2);
      if (digits.length < 7) return MASK;
      return \`\${digits.slice(0, 3)}\${MASK}\${digits.slice(-4)}\`;
    }
    case "email": {
      const at = value.lastIndexOf("@");
      if (at <= 0 || at === value.length - 1) return MASK;
      const local = value.slice(0, at);
      const domain = value.slice(at + 1);
      const dot = domain.lastIndexOf(".");
      const tld = dot >= 0 ? domain.slice(dot) : "";
      return \`\${local.slice(0, 1) || "*"}\${MASK}@\${domain.slice(0, 1)}\${MASK}\${tld}\`;
    }
    case "address":
    case "social":
    default:
      return maskKeepEnds(value, 2, 2);
  }
};

export const createContactDesensitizePlugin: ResumePluginCreator<ContactDesensitizeConfig> = (config = {}) => {
  const mode = config.mode ?? "mask";
  const fields = config.fields ?? ["phone", "email", "address", "social"];
  const masks = config.masks ?? {};
  const maskOne = (c: ContactItem, hide: boolean): ContactItem => {
    if (!fields.includes(c.type)) return c;
    const value = hide
      ? "***"
      : (masks[c.type] ?? ((v) => defaultMask(c.type, v)))(c.value);
    // 脱敏后必须同时移除 href：mailto:/tel: 里仍带原文，否则点击链路可绕过打码
    return { ...c, value, href: undefined };
  };

  return {
    name: "contact-desensitize",
    version: "0.1.0",
    description: doc.description,
    priority: 48,
    config: { order: 48 },
    // 依赖 ai-polish：脱敏放在翻译 / 润色之后，避免脱敏文本被再次处理
    dependencies: ["ai-polish"],
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        if (ctx.state.contactMode === undefined) ctx.setState({ contactMode: mode });
      },
      // 管道末位，脱敏放在翻译 / 润色之后
      transformData: (ctx, data) => {
        const m = (ctx.state.contactMode as string) ?? mode;
        if (m === "show") return data;
        const d = cloneData(data as ResumeData);
        if (d.basics?.contacts) {
          d.basics.contacts = d.basics.contacts.map((c) => maskOne(c, m === "hide"));
        }
        return d;
      },
      renderToolbar: (ctx) => {
        const current = (ctx.state.contactMode as string) ?? mode;
        const cycle = () => {
          const next = current === "show" ? "mask" : current === "mask" ? "hide" : "show";
          ctx.setState({ contactMode: next });
        };
        const label = current === "show" ? "联系：明文" : current === "mask" ? "联系：脱敏" : "联系：隐藏";
        return (
          <button key="contact-desensitize" type="button" onClick={cycle} style={toolbarBtn(current !== "show")}>
            {label}
          </button>
        );
      },
    },
  };
};

createContactDesensitizePlugin.meta = doc as PluginDoc;
`,C1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import { Overlay } from "../../components/ResumePlugin/plugins/overlay";
import doc from "./doc.json";

export type DeliverStatus = "投递" | "面试" | "offer" | "拒绝";
export interface Delivery {
  id: string;
  company: string;
  role?: string;
  date: string;
  status: DeliverStatus;
}
export interface DeliverTrackConfig {
  initial?: Delivery[];
  onChange?: (list: Delivery[]) => void;
}

const STATUS_COLOR: Record<DeliverStatus, string> = {
  投递: "#2f6feb",
  面试: "#e8590c",
  offer: "#1f9d55",
  拒绝: "#8a9099",
};

export const createDeliverTrackPlugin: ResumePluginCreator<DeliverTrackConfig> = (config = {}) => {
  const init = config.initial ?? [];
  /** 列表真源放在 shared：bus 回调跨渲染存活，不能依赖会被替换的 ctx.state 快照 */
  const LIST_KEY = "deliver:list";
  const readList = (ctx: ResumePluginContext<ResumeData>): Delivery[] =>
    (ctx.shared.get(LIST_KEY) as Delivery[] | undefined) ??
    (ctx.state.deliveries as Delivery[] | undefined) ??
    [];
  const writeList = (ctx: ResumePluginContext<ResumeData>, next: Delivery[]) => {
    ctx.shared.set(LIST_KEY, next);
    ctx.setState({ deliveries: next });
  };

  return {
    name: "deliver-track",
    version: "0.1.0",
    description: doc.description,
    priority: 36,
    config: { order: 36 },
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        if (!ctx.state.deliveries) {
          ctx.setState({ deliveries: init, deliverOpen: false, deliverCompany: "", deliverStatus: "投递" as DeliverStatus });
        }
        ctx.shared.set(LIST_KEY, readList(ctx));
        // 返回清理函数：插件集合变化 / 卸载时由 PluginManager 逆序执行，避免监听泄漏
        return ctx.bus.on("resume:deliver:add", (item: Delivery) => {
          const list = readList(ctx);
          const next = [...list, { ...item, id: item.id || \`d\${Date.now()}\`, date: item.date || new Date().toISOString().slice(0, 10) }];
          writeList(ctx, next);
          config.onChange?.(next);
        });
      },
      renderFooter: (ctx) => {
        const list = (ctx.state.deliveries as Delivery[]) || [];
        const counts = list.reduce<Record<string, number>>((acc, d) => {
          acc[d.status] = (acc[d.status] || 0) + 1;
          return acc;
        }, {});
        return (
          <button
            key="deliver-foot"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={!!ctx.state.deliverOpen}
            onClick={() => ctx.setState({ deliverOpen: !ctx.state.deliverOpen })}
            style={{
              display: "inline-flex",
              gap: 6,
              fontSize: 12,
              cursor: "pointer",
              background: "transparent",
              border: "none",
              padding: 0,
              font: "inherit",
            }}
          >
            <span style={{ color: "var(--vr-muted, #5d636a)" }}>投递：</span>
            {(Object.keys(STATUS_COLOR) as DeliverStatus[]).map((s) => (
              <span key={s} style={{ color: STATUS_COLOR[s], fontWeight: 600 }}>
                {s} {counts[s] || 0}
              </span>
            ))}
          </button>
        );
      },
      renderOverlay: (ctx) => {
        if (!ctx.state.deliverOpen) return null;
        const list = (ctx.state.deliveries as Delivery[]) || [];
        const company = (ctx.state.deliverCompany as string) || "";
        const status = (ctx.state.deliverStatus as DeliverStatus) || "投递";
        const close = () => ctx.setState({ deliverOpen: false });
        const add = () => {
          if (!company.trim()) return;
          const next = [...list, { id: \`d\${Date.now()}\`, company: company.trim(), status, date: new Date().toISOString().slice(0, 10) }];
          writeList(ctx, next);
          ctx.setState({ deliverCompany: "" });
          config.onChange?.(next);
        };
        return (
          <Overlay key="deliver-overlay" title="投递追踪" onClose={close} width={420} zIndex={56} align="end">
              <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
                <input
                  value={company}
                  placeholder="公司 / 岗位"
                  onChange={(e) => ctx.setState({ deliverCompany: e.target.value })}
                  style={{ flex: 1, padding: 6, borderRadius: 6, border: "1px solid #d4d8de" }}
                />
                <select
                  value={status}
                  onChange={(e) => ctx.setState({ deliverStatus: e.target.value as DeliverStatus })}
                  style={{ padding: 6, borderRadius: 6, border: "1px solid #d4d8de" }}
                >
                  {(Object.keys(STATUS_COLOR) as DeliverStatus[]).map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <button type="button" onClick={add} style={toolbarBtn(true)}>添加</button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 180, overflow: "auto" }}>
                {list.length === 0 && <div style={{ color: "#8a9099", fontSize: 12 }}>暂无投递记录</div>}
                {list.map((d) => (
                  <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, borderBottom: "1px solid #eee", paddingBottom: 6 }}>
                    <span style={{ flex: 1 }}>{d.company}{d.role ? \` · \${d.role}\` : ""}</span>
                    <span style={{ color: STATUS_COLOR[d.status], fontWeight: 600 }}>{d.status}</span>
                    <span style={{ color: "#8a9099", fontSize: 11 }}>{d.date}</span>
                  </div>
                ))}
              </div>
          </Overlay>
        );
      },
    },
  };
};

createDeliverTrackPlugin.meta = doc as PluginDoc;
`,j1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import doc from "./doc.json";

export interface ExportPdfConfig {
  /** print=浏览器打印（配合 PrintOptimize）；canvas=html2canvas+jsPDF 拼页 */
  method?: "print" | "canvas";
  fileName?: string;
  onBeforeExport?: () => void;
}

/** 等所有图片加载完成（含失败兜底），避免导出时图片缺口 */
const waitForImages = async (root: HTMLElement) => {
  const images = Array.from(root.querySelectorAll<HTMLImageElement>("img"));
  await Promise.all(
    images.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise<void>((resolve) => {
        const finish = () => {
          img.removeEventListener("load", finish);
          img.removeEventListener("error", finish);
          resolve();
        };
        img.addEventListener("load", finish);
        img.addEventListener("error", finish);
        setTimeout(finish, 1500);
      });
    })
  );
};

export const createExportPdfPlugin: ResumePluginCreator<ExportPdfConfig> = (config = {}) => {
  const method = config.method ?? "print";
  const fileName = config.fileName ?? "resume.pdf";

  const exportCanvas = async (
    ctx: ResumePluginContext<ResumeData>,
    container: HTMLElement | null
  ) => {
    if (!container) {
      ctx.setState({ exportError: "未找到简历容器，无法导出" });
      return;
    }

    // 等一帧，让 onBeforeExport 里的 setState（如收起隐私遮罩）先提交到 DOM
    await new Promise((resolve) => setTimeout(resolve, 0));
    if (container.querySelector("[data-vr-privacy-mask]")) {
      ctx.setState({
        exportError: "隐私遮罩开启时无法可靠导出（html2canvas 不支持 backdrop-filter），请先关闭隐私模式",
      });
      return;
    }

    // 导出时隐藏工具栏与各类弹层，避免把操作 UI 拍进 PDF
    const hidden: Array<{ el: HTMLElement; display: string }> = [];
    container
      .querySelectorAll<HTMLElement>(".vr-toolbar, [data-vr-overlay]")
      .forEach((el) => {
        hidden.push({ el, display: el.style.display });
        el.style.display = "none";
      });

    try {
      await waitForImages(container);
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");
      const canvas = await html2canvas(container, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        allowTaint: false,
        logging: false,
        imageTimeout: 1500,
      });
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const imgH = (canvas.height * pageW) / canvas.width;
      pdf.addImage(img, "PNG", 0, 0, pageW, imgH);
      let left = imgH - pageH;
      while (left > 0) {
        pdf.addPage();
        pdf.addImage(img, "PNG", 0, -left, pageW, imgH);
        left -= pageH;
      }
      pdf.save(fileName);
      ctx.setState({ exportError: null });
    } catch (e) {
      ctx.logger.error("[ExportPdf] canvas 导出失败", e);
      const detail = e instanceof Error ? e.message : String(e);
      ctx.setState({ exportError: \`导出失败：\${detail}。可改用“打印”通道或检查图片跨域配置。\` });
    } finally {
      hidden.forEach(({ el, display }) => {
        el.style.display = display;
      });
    }
  };

  return {
    name: "export-pdf",
    version: "0.1.0",
    description: doc.description,
    priority: 16,
    config: { order: 16 },
    hooks: {
      renderToolbar: (ctx: ResumePluginContext<ResumeData>) => (
        <button
          key="export-pdf"
          type="button"
          onClick={() => {
            config.onBeforeExport?.();
            ctx.bus.emit("resume:export", { method });
            if (method === "canvas") {
              void exportCanvas(ctx, ctx.refs.getContainer?.() ?? null);
            } else if (typeof window !== "undefined") {
              window.print();
            }
          }}
          style={toolbarBtn(false)}
        >
          导出 PDF
        </button>
      ),
      renderOverlay: (ctx) => {
        const message = ctx.state.exportError as string | undefined;
        if (!message) return null;
        return (
          <div
            key="export-error"
            role="alert"
            style={{
              position: "absolute",
              left: 20,
              right: 20,
              bottom: 16,
              zIndex: 70,
              background: "#fff4f2",
              color: "#8a1f11",
              border: "1px solid #f3c2b8",
              borderRadius: 8,
              padding: "10px 12px",
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ flex: 1 }}>{message}</span>
            <button
              type="button"
              onClick={() => ctx.setState({ exportError: null })}
              style={toolbarBtn(false)}
            >
              关闭
            </button>
          </div>
        );
      },
    },
  };
};

createExportPdfPlugin.meta = doc as PluginDoc;
`,R1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import doc from "./doc.json";

export interface KeywordHighlightConfig {
  /** 初始高亮关键词（JD 关键词集合） */
  keywords?: string[] | (() => string[]);
  /** 高亮标记 / 芯片描边色（默认跟随主题强调色） */
  color?: string;
}

/**
 * KeywordHighlight —— 关键词高亮（纯 state 驱动，不抢槽）。
 * 核心文本渲染统一走 highlightText(ctx.state.highlightKeywords)，本插件只负责
 * 维护该 state：工具栏输入 / 添加 / 移除关键词。与 TimelineView / SectionCollapse
 * 等同为「state 派」，可并存。
 */
export const createKeywordHighlightPlugin: ResumePluginCreator<KeywordHighlightConfig> = (config = {}) => {
  const initial =
    typeof config.keywords === "function"
      ? config.keywords()
      : config.keywords ?? [];
  const accent = config.color ?? "var(--vr-accent, #2f6feb)";

  return {
    name: "keyword-highlight",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    config: { order: 20 },
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        if (ctx.state.highlightKeywords === undefined) {
          ctx.setState({ highlightKeywords: [...initial], kwDraft: "" });
        }
      },
      renderToolbar: (ctx) => {
        const kws = (ctx.state.highlightKeywords as string[] | undefined) ?? [];
        const draft = (ctx.state.kwDraft as string | undefined) ?? "";
        const add = () => {
          const v = draft.trim();
          if (!v) return;
          if (!kws.includes(v)) ctx.setState({ highlightKeywords: [...kws, v] });
          ctx.setState({ kwDraft: "" });
        };
        return (
          <div
            key="keyword-highlight"
            style={{ display: "flex", gap: 4, alignItems: "center", flexWrap: "wrap" }}
          >
            <span style={{ fontSize: 12, color: "var(--vr-faint, #8a9099)" }}>高亮</span>
            <input
              value={draft}
              placeholder="关键词"
              aria-label="高亮关键词"
              onChange={(e) => ctx.setState({ kwDraft: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter") add();
              }}
              style={{ width: 92, padding: "3px 6px", fontSize: 12, borderRadius: 6, border: "1px solid #d4d8de" }}
            />
            <button type="button" onClick={add} style={toolbarBtn(false)}>
              添加
            </button>
            {kws.map((k) => (
              <span
                key={k}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  background: "var(--vr-accent-wash, #eef3fe)",
                  color: accent,
                  border: "1px solid var(--vr-line, #e3e6ea)",
                  borderRadius: 12,
                  padding: "1px 4px 1px 8px",
                  fontSize: 12,
                }}
              >
                {k}
                <button
                  type="button"
                  aria-label={\`移除 \${k}\`}
                  onClick={() =>
                    ctx.setState({ highlightKeywords: kws.filter((x) => x !== k) })
                  }
                  style={{ border: "none", background: "transparent", color: accent, cursor: "pointer", fontSize: 13, lineHeight: 1, padding: 0 }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        );
      },
    },
  };
};

createKeywordHighlightPlugin.meta = doc as PluginDoc;
`,b1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import doc from "./doc.json";

export type LocaleTranslations = Record<string, Partial<ResumeData>>;
export interface MultiLangConfig {
  locales: { code: string; label: string }[];
  default?: string;
  detect?: () => string;
  translations: LocaleTranslations;
}

export const createMultiLangPlugin: ResumePluginCreator<MultiLangConfig> = (config) => {
  if (
    !config ||
    !Array.isArray(config.locales) ||
    config.locales.length === 0 ||
    !config.translations
  ) {
    throw new Error("[MultiLang] 需要非空的 locales 与 translations");
  }
  const { locales, translations } = config;
  const defaultLang = config.default ?? config.detect?.() ?? locales[0].code;

  /** 顶层替换 + basics 深合并：翻译通常只覆盖姓名/职位，联系方式等原有字段必须保留 */
  const applyLocale = (data: ResumeData, t: Partial<ResumeData>): ResumeData => {
    const mergedBasics = t.basics
      ? ({ ...(data.basics ?? {}), ...t.basics } as ResumeData["basics"])
      : data.basics;
    return { ...data, ...t, basics: mergedBasics };
  };

  return {
    name: "multi-lang",
    version: "0.1.0",
    description: doc.description,
    priority: 14,
    config: { order: 14 },
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        if (ctx.state.lang === undefined) ctx.setState({ lang: defaultLang });
      },
      // priority 52：管道首位，先产出目标语言数据，后续 AiPolish / 脱敏基于它处理
      transformData: (ctx, data) => {
        const lang = (ctx.state.lang as string) ?? defaultLang;
        const t = translations[lang];
        if (!t) return data;
        return applyLocale(data, t);
      },
      renderToolbar: (ctx) => {
        const active = (ctx.state.lang as string) ?? defaultLang;
        return (
          <div key="multi-lang" style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "var(--vr-faint, #8a9099)" }}>语言</span>
            {locales.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  ctx.setState({ lang: l.code });
                  ctx.bus.emit("resume:lang-change", l.code);
                }}
                style={toolbarBtn(active === l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
        );
      },
    },
  };
};

createMultiLangPlugin.meta = doc as PluginDoc;
`,E1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import doc from "./doc.json";

export interface PrintOptimizeConfig {
  pageSize?: "A4" | "A3" | "letter";
  margin?: string;
  hideOnPrint?: string[];
}

export const createPrintOptimizePlugin: ResumePluginCreator<PrintOptimizeConfig> = (config = {}) => {
  const pageSize = config.pageSize ?? "A4";
  const margin = config.margin ?? "14mm";
  const hide = (
    config.hideOnPrint ?? ["[data-vr-no-print]", ".vr-toolbar", "[data-vr-overlay]"]
  ).join(", ");

  return {
    name: "print-optimize",
    version: "0.1.0",
    description: doc.description,
    priority: 22,
    config: { order: 22 },
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        const el = ctx.refs.getContainer?.();
        if (!el || typeof document === "undefined") return;
        const style = document.createElement("style");
        style.setAttribute("media", "print");
        style.dataset.vaneResumePrint = "1";
        style.textContent = \`
          \${hide} { display: none !important; }
          .vr-root { box-shadow: none !important; max-width: none !important; margin: 0 !important; }
          .vr-section { page-break-inside: avoid; }
          @page { size: \${pageSize}; margin: \${margin}; }
        \`;
        el.appendChild(style);
        const onExport = (e: unknown) => {
          const method =
            e && typeof e === "object" ? (e as { method?: string }).method : undefined;
          if (method === "print" && typeof window !== "undefined") window.print();
        };
        ctx.bus.on("resume:export", onExport);
        return () => {
          style.remove();
          ctx.bus.off("resume:export", onExport);
        };
      },
    },
  };
};

createPrintOptimizePlugin.meta = doc as PluginDoc;
`,D1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn, cloneData } from "../../components/ResumePlugin/plugins/tokens";
import doc from "./doc.json";

export interface PrivacyMaskConfig {
  /** blur=整页毛玻璃视觉遮罩；hide=仅字段级隐藏 */
  mode?: "blur" | "hide";
  /** 隐私模式下隐藏的字段（两种 mode 都会做数据级隐藏） */
  fields?: string[];
}

export const createPrivacyMaskPlugin: ResumePluginCreator<PrivacyMaskConfig> = (config = {}) => {
  const mode = config.mode ?? "blur";
  const fields = config.fields ?? ["summary", "contacts"];

  return {
    name: "privacy-mask",
    version: "0.1.0",
    description: doc.description,
    priority: 42,
    config: { order: 42 },
    // 依赖 contact-desensitize：字段隐藏放在脱敏之后
    dependencies: ["contact-desensitize"],
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        if (ctx.state.privacyOn === undefined) ctx.setState({ privacyOn: false });
      },
      renderToolbar: (ctx) => {
        const on = !!ctx.state.privacyOn;
        return (
          <button
            key="privacy-mask"
            type="button"
            onClick={() => ctx.setState({ privacyOn: !on })}
            style={toolbarBtn(on)}
          >
            {on ? "隐私：开" : "隐私：关"}
          </button>
        );
      },
      // priority 46：字段隐藏放在脱敏之后，避免脱敏文本被再次处理。
      // blur 模式同样做数据级隐藏：毛玻璃只是视觉层，DOM 明文仍可被复制 / 导出，
      // 因此敏感字段必须在数据层移除，不能只依赖 backdropFilter。
      transformData: (ctx, data) => {
        if (!ctx.state.privacyOn) return data;
        const d = cloneData(data as ResumeData);
        if (fields.includes("summary") && d.basics) d.basics.summary = "*** 已隐藏 ***";
        if (fields.includes("contacts") && d.basics) d.basics.contacts = [];
        return d;
      },
      renderOverlay: (ctx) => {
        if (!ctx.state.privacyOn || mode !== "blur") return null;
        return (
          <div
            key="privacy-mask-overlay"
            data-vr-privacy-mask=""
            style={{
              position: "absolute",
              inset: 0,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 50,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: 8,
                fontSize: 12,
              }}
            >
              隐私模式 · 内容已遮挡（敏感字段已隐藏）
            </span>
          </div>
        );
      },
    },
  };
};

createPrivacyMaskPlugin.meta = doc as PluginDoc;
`,T1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, 
  ResumeData,
  ContactItem,
} from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import { Overlay } from "../../components/ResumePlugin/plugins/overlay";
import doc from "./doc.json";

export interface QrCodeConfig {
  /** 二维码内容；缺省由联系方式生成 vCard */
  content?: string | (() => string);
  position?: "corner" | "avatar" | "modal";
  size?: number;
}

const buildVCard = (d: ResumeData, hideContacts: boolean): string => {
  const b = d.basics;
  const contacts = hideContacts
    ? ""
    : (b?.contacts ?? [])
        .map((c: ContactItem) => \`\${c.type}:\${c.value}\`)
        .join("\\n");
  return \`BEGIN:VCARD\\nFN:\${b?.name ?? ""}\\nTITLE:\${b?.title ?? ""}\\n\${contacts}\\nEND:VCARD\`;
};

export const createQrCodePlugin: ResumePluginCreator<QrCodeConfig> = (config = {}) => {
  const size = config.size ?? 96;
  const position = config.position ?? "corner";

  // 竞态取消：每次重新生成递增 requestId，旧请求完成后直接丢弃
  let requestId = 0;

  const resolveContent = (ctx: ResumePluginContext<ResumeData>): string => {
    if (typeof config.content === "function") return config.content();
    if (typeof config.content === "string") return config.content;
    // 隐私模式下 vCard 不得携带明文联系方式
    return buildVCard(ctx.data as ResumeData, !!ctx.state.privacyOn);
  };

  const ensureQr = (ctx: ResumePluginContext<ResumeData>) => {
    const content = resolveContent(ctx);
    const done = ctx.shared.get("qr:content") as string | undefined;
    const pending = ctx.shared.get("qr:pending") as string | undefined;
    if (done === content || pending === content) return;

    const id = ++requestId;
    ctx.shared.set("qr:pending", content);
    // 先撤掉旧图，避免语言 / 脱敏 / 隐私切换后仍展示含旧数据的二维码
    ctx.shared.delete("qr:dataurl");

    void (async () => {
      let url = "fallback:" + content;
      try {
        const mod = await import("qrcode");
        // CJS/ESM 互操作：浏览器打包后有时挂在 .default，有时直接挂命名导出
        const QR = (mod as { default?: unknown; toDataURL?: unknown }).default ?? mod;
        url = await (QR as { toDataURL: (s: string, o?: object) => Promise<string> }).toDataURL(content, {
          width: size,
          margin: 1,
        });
      } catch {
        /* 回退为纯文本提示 */
      }
      if (id !== requestId) return;
      ctx.shared.set("qr:content", content);
      ctx.shared.delete("qr:pending");
      ctx.shared.set("qr:dataurl", url);
      ctx.forceUpdate();
    })();
  };

  return {
    name: "qr-code",
    version: "0.1.0",
    description: doc.description,
    priority: 46,
    config: { order: 46 },
    hooks: {
      renderToolbar: (ctx) => {
        if (position !== "modal") return null;
        // 弹层模式也提前生成；open 时无需等待
        ensureQr(ctx);
        return (
          <button
            key="qr-code"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={!!ctx.state.qrOpen}
            onClick={() => ctx.setState({ qrOpen: !ctx.state.qrOpen })}
            style={toolbarBtn(!!ctx.state.qrOpen)}
          >
            二维码
          </button>
        );
      },
      renderOverlay: (ctx) => {
        if (position !== "modal") {
          ensureQr(ctx);
          // 角标常显
          const url = ctx.shared.get("qr:dataurl") as string | undefined;
          if (!url) return null;
          const isImg = !url.startsWith("fallback:");
          return (
            <div
              key="qr-corner"
              style={{ position: "absolute", right: 12, bottom: 12, zIndex: 40, padding: 4, background: "#fff", borderRadius: 8, boxShadow: "0 2px 10px rgba(0,0,0,0.15)" }}
            >
              {isImg ? (
                <img src={url} width={size} height={size} alt="QR" />
              ) : (
                <div style={{ width: size, height: size, fontSize: 9, padding: 6, wordBreak: "break-all", color: "#1f2328" }}>
                  {url.slice(8, 48)}…
                </div>
              )}
            </div>
          );
        }
        if (!ctx.state.qrOpen) return null;
        ensureQr(ctx);
        const url = ctx.shared.get("qr:dataurl") as string | undefined;
        const isImg = !!url && !url.startsWith("fallback:");
        const close = () => ctx.setState({ qrOpen: false });
        return (
          <Overlay key="qr-modal" title="二维码" onClose={close} width={240} zIndex={59}>
            <div style={{ textAlign: "center" }}>
              {isImg ? (
                <img src={url} width={size * 2} height={size * 2} alt="QR" />
              ) : (
                <div style={{ width: size * 2, height: size * 2, fontSize: 12, padding: 8, color: "#1f2328" }}>{url?.slice(8)}</div>
              )}
              <div style={{ color: "#1f2328", marginTop: 8, fontSize: 12 }}>扫码保存联系方式</div>
            </div>
          </Overlay>
        );
      },
    },
  };
};

createQrCodePlugin.meta = doc as PluginDoc;
`,O1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, 
  ResumeData,
  SectionKey,
} from "../../components/ResumePlugin/plugins/types";
import { DEFAULT_SECTION_ORDER } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import doc from "./doc.json";

export interface SectionCollapseConfig {
  /** 初始是否开启折叠模式 */
  defaultOn?: boolean;
  /** 初始折叠的板块 */
  defaultCollapsed?: SectionKey[];
}

/**
 * SectionCollapse —— 板块折叠展开（纯 state 驱动）。
 * 仅维护 ctx.state.collapseMode / collapsed；核心板块头部直接读取这两个 state
 * 渲染折叠按钮与收起正文。与 KeywordHighlight / TimelineView 不抢槽，可并存。
 */
export const createSectionCollapsePlugin: ResumePluginCreator<SectionCollapseConfig> = (config = {}) => {
  return {
    name: "section-collapse",
    version: "0.1.0",
    description: doc.description,
    priority: 26,
    config: { order: 26 },
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        if (ctx.state.collapseMode === undefined) {
          ctx.setState({
            collapseMode: config.defaultOn ?? false,
            collapsed: config.defaultCollapsed ?? [],
          });
        }
      },
      renderToolbar: (ctx) => {
        const on = !!ctx.state.collapseMode;
        const toggleAll = (val: boolean) => {
          const order =
            (ctx.state.sectionOrder as SectionKey[] | undefined) ?? DEFAULT_SECTION_ORDER;
          ctx.setState({ collapsed: val ? [...order] : [] });
        };
        return (
          <div key="section-collapse" style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <button
              type="button"
              onClick={() => ctx.setState({ collapseMode: !on })}
              style={toolbarBtn(on)}
            >
              {on ? "折叠：开" : "折叠：关"}
            </button>
            {on && (
              <>
                <button type="button" onClick={() => toggleAll(true)} style={toolbarBtn(false)}>
                  全收
                </button>
                <button type="button" onClick={() => toggleAll(false)} style={toolbarBtn(false)}>
                  全展
                </button>
              </>
            )}
          </div>
        );
      },
    },
  };
};

createSectionCollapsePlugin.meta = doc as PluginDoc;
`,$1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, 
  ResumeData,
  SectionKey,
} from "../../components/ResumePlugin/plugins/types";
import { DEFAULT_SECTION_ORDER } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import { Overlay } from "../../components/ResumePlugin/plugins/overlay";
import doc from "./doc.json";

export interface SectionReorderConfig {
  sections?: SectionKey[];
}

const LABELS: Record<SectionKey, string> = {
  basics: "基本信息",
  work: "工作经历",
  education: "教育背景",
  skills: "专业技能",
  projects: "项目经历",
  extra: "荣誉/语言/证书",
  attachments: "附件",
};

export const createSectionReorderPlugin: ResumePluginCreator<SectionReorderConfig> = (config = {}) => {
  const sections = config.sections ?? DEFAULT_SECTION_ORDER;
  return {
    name: "section-reorder",
    version: "0.1.0",
    description: doc.description,
    priority: 24,
    config: { order: 24 },
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        if (!ctx.state.sectionOrder) ctx.setState({ sectionOrder: [...sections], reorderMode: false });
      },
      renderToolbar: (ctx) => (
        <button
          key="section-reorder"
          type="button"
          onClick={() => ctx.setState({ reorderMode: !ctx.state.reorderMode })}
          style={toolbarBtn(!!ctx.state.reorderMode)}
        >
          重排板块
        </button>
      ),
      renderOverlay: (ctx) => {
        if (!ctx.state.reorderMode) return null;
        const order = (ctx.state.sectionOrder as SectionKey[]) ?? [...sections];
        const move = (idx: number, dir: -1 | 1) => {
          const j = idx + dir;
          if (j < 0 || j >= order.length) return;
          const next = [...order];
          [next[idx], next[j]] = [next[j], next[idx]];
          ctx.setState({ sectionOrder: next });
        };
        const close = () => ctx.setState({ reorderMode: false });
        return (
          <Overlay key="reorder-panel" title="上移 / 下移排序板块" onClose={close} width={320} zIndex={57}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {order.map((k, i) => (
                <div key={k} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, border: "1px solid #eee", borderRadius: 6, padding: "4px 8px" }}>
                  <span style={{ flex: 1 }}>{i + 1}. {LABELS[k]}</span>
                  <button type="button" aria-label={\`上移 \${LABELS[k]}\`} onClick={() => move(i, -1)} style={toolbarBtn(false)}>↑</button>
                  <button type="button" aria-label={\`下移 \${LABELS[k]}\`} onClick={() => move(i, 1)} style={toolbarBtn(false)}>↓</button>
                </div>
              ))}
            </div>
          </Overlay>
        );
      },
    },
  };
};

createSectionReorderPlugin.meta = doc as PluginDoc;
`,z1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import { Overlay } from "../../components/ResumePlugin/plugins/overlay";
import doc from "./doc.json";

export interface ShareLinkConfig {
  /** 宿主基础地址（未配置 onBuildUrl 时的跳转目标，不含简历数据） */
  baseUrl?: string;
  /**
   * 注入宿主构建链接（推荐）。默认不在 URL 内联简历数据：
   * base64 不是加密，完整 JSON 含姓名 / 电话 / 邮箱 / 住址，会进入浏览器历史与聊天记录。
   * 确需携带数据时，请在此生成脱敏后的短链或服务端短码。
   */
  onBuildUrl?: (data: ResumeData) => string | Promise<string>;
}

const originOf = () =>
  typeof window !== "undefined"
    ? window.location.origin + window.location.pathname
    : "https://example.com/";

export const createShareLinkPlugin: ResumePluginCreator<ShareLinkConfig> = (config = {}) => {
  const build = async (data: ResumeData): Promise<string> => {
    if (config.onBuildUrl) return config.onBuildUrl(data);
    return config.baseUrl ?? originOf();
  };

  return {
    name: "share-link",
    version: "0.1.0",
    description: doc.description,
    priority: 18,
    config: { order: 18 },
    hooks: {
      renderToolbar: (ctx: ResumePluginContext<ResumeData>) => (
        <button
          key="share-link"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={!!ctx.state.shareOpen}
          onClick={async () => {
            if (ctx.state.shareOpen) {
              ctx.setState({ shareOpen: false, shareCopied: false });
              return;
            }
            try {
              const url = await build(ctx.data as ResumeData);
              ctx.shared.set("share:url", url);
              ctx.setState({ shareOpen: true, shareCopied: false, shareError: null });
            } catch (error) {
              ctx.logger.error("[ShareLink] 链接生成失败", error);
              ctx.setState({ shareOpen: true, shareCopied: false, shareError: "链接生成失败，请稍后重试" });
            }
          }}
          style={toolbarBtn(!!ctx.state.shareOpen)}
        >
          分享
        </button>
      ),
      renderOverlay: (ctx) => {
        if (!ctx.state.shareOpen) return null;
        const url = (ctx.shared.get("share:url") as string) ?? "";
        const copied = !!ctx.state.shareCopied;
        const error = ctx.state.shareError as string | undefined;
        const close = () => ctx.setState({ shareOpen: false, shareCopied: false });
        const copy = async () => {
          if (!url) return;
          try {
            if (typeof navigator !== "undefined" && navigator.clipboard) {
              await navigator.clipboard.writeText(url);
              ctx.setState({ shareCopied: true, shareError: null });
            } else {
              ctx.setState({ shareError: "当前环境不支持剪贴板，请手动复制" });
            }
          } catch (e) {
            ctx.logger.error("[ShareLink] 复制失败", e);
            ctx.setState({ shareError: "复制失败，请手动复制" });
          }
        };
        return (
          <Overlay key="share-link-modal" title="分享链接" onClose={close} zIndex={60}>
            <div
              style={{
                fontSize: 12,
                color: "#5d636a",
                wordBreak: "break-all",
                background: "#f2f3f5",
                borderRadius: 6,
                padding: 8,
                maxHeight: 80,
                overflow: "auto",
              }}
            >
              {url || "生成中…"}
            </div>
            {!config.onBuildUrl && (
              <div style={{ color: "#8a9099", fontSize: 12, marginTop: 8 }}>
                未配置 onBuildUrl：该链接不包含简历数据。如需携带数据，请由宿主生成脱敏短链（base64 不是加密）。
              </div>
            )}
            {error && <div style={{ color: "#cf4407", fontSize: 12, marginTop: 8 }}>{error}</div>}
            <div style={{ display: "flex", gap: 8, marginTop: 12, justifyContent: "flex-end" }}>
              <button type="button" onClick={() => void copy()} style={toolbarBtn(true)}>
                {copied ? "已复制" : "复制"}
              </button>
            </div>
          </Overlay>
        );
      },
    },
  };
};

createShareLinkPlugin.meta = doc as PluginDoc;
`,N1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import doc from "./doc.json";

export interface SignatureStampConfig {
  /** 签名姓名（缺省取 basics.name） */
  name?: string;
  /** 手写签名图片 URL */
  image?: string;
  /** 签署日期（缺省今天） */
  date?: () => string;
  /** 是否绘制 CSS 圆形印章 */
  stamp?: "none" | "seal";
  /** 印章文字 */
  stampText?: string;
}

/**
 * SignatureStamp —— 电子落款（装饰累积槽 renderFooter + renderOverlay）。
 * footer 渲染签名 + 签署日期；stamp="seal" 时在左下角叠加 CSS 圆形印章（overlay）。
 * 全部经 state.signatureOn 开关，与其他 footer 插件共存。
 */
export const createSignatureStampPlugin: ResumePluginCreator<SignatureStampConfig> = (config = {}) => {
  const name = config.name;
  const image = config.image;
  const stamp = config.stamp ?? "none";
  const stampText = config.stampText ?? "已确认";
  const dateStr = () => (config.date ? config.date() : new Date().toISOString().slice(0, 10));

  return {
    name: "signature-stamp",
    version: "0.1.0",
    description: doc.description,
    priority: 34,
    config: { order: 34 },
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        if (ctx.state.signatureOn === undefined) ctx.setState({ signatureOn: true });
      },
      renderToolbar: (ctx) => (
        <button
          key="signature-stamp"
          type="button"
          onClick={() => ctx.setState({ signatureOn: !ctx.state.signatureOn })}
          style={toolbarBtn(!!ctx.state.signatureOn)}
        >
          {ctx.state.signatureOn ? "落款：开" : "落款：关"}
        </button>
      ),
      renderFooter: (ctx) => {
        if (!ctx.state.signatureOn) return null;
        const b = ctx.data?.basics;
        const who = name ?? b?.name ?? "本人";
        const date = dateStr();
        return (
          <span
            key="signature"
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 2,
              fontSize: 12,
              color: "var(--vr-muted, #5d636a)",
            }}
          >
            {image ? (
              <img src={image} alt="签名" style={{ height: 32, objectFit: "contain" }} />
            ) : (
              <span
                style={{
                  fontFamily: "'Segoe Script','Brush Script MT',cursive",
                  fontSize: 18,
                  color: "var(--vr-text, #1f2328)",
                }}
              >
                {who}
              </span>
            )}
            <span>签署日期：{date}</span>
          </span>
        );
      },
      renderOverlay: (ctx) => {
        if (!ctx.state.signatureOn || stamp !== "seal") return null;
        return (
          <div
            key="stamp-seal"
            style={{
              position: "absolute",
              left: 16,
              bottom: 16,
              zIndex: 41,
              pointerEvents: "none",
              width: 88,
              height: 88,
              borderRadius: "50%",
              border: "3px solid #cf4407",
              color: "#cf4407",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(-12deg)",
            }}
          >
            <div style={{ fontSize: 11, borderBottom: "1px solid #cf4407", paddingBottom: 2, marginBottom: 2 }}>
              RESUME
            </div>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1 }}>{stampText}</div>
            <div style={{ fontSize: 10 }}>{dateStr()}</div>
          </div>
        );
      },
    },
  };
};

createSignatureStampPlugin.meta = doc as PluginDoc;
`,M1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import doc from "./doc.json";

export type StatKey = "expYears" | "skillCount" | "projectCount" | "eduLevel";
export interface StatSummaryConfig {
  /** 展示指标；缺省四项全开 */
  items?: StatKey[];
}

const EDU_RANK: Record<string, number> = {
  博士: 5,
  硕士: 4,
  研究生: 4,
  本科: 3,
  学士: 3,
  大专: 2,
  专科: 2,
  高中: 1,
};

function computeStats(d: ResumeData) {
  const exp = (d.work ?? []).length;
  const skills = (d.skills ?? []).reduce((s, g) => s + (g.items?.length ?? 0), 0);
  const projects = (d.projects ?? []).length;
  let edu = "—";
  let best = 0;
  (d.education ?? []).forEach((e) => {
    const r = EDU_RANK[e.degree] ?? 0;
    if (r > best) {
      best = r;
      edu = e.degree;
    }
  });
  return { exp, skills, projects, edu };
}

/**
 * StatSummary —— 简历数据概览徽章（装饰累积槽 renderBasics）。
 * 在基本信息区追加：工作段数 / 技能数 / 项目数 / 最高学历。纯渲染，不改数据。
 */
export const createStatSummaryPlugin: ResumePluginCreator<StatSummaryConfig> = (config = {}) => {
  const keys = config.items ?? ["expYears", "skillCount", "projectCount", "eduLevel"];
  const LABEL: Record<StatKey, string> = {
    expYears: "工作",
    skillCount: "技能",
    projectCount: "项目",
    eduLevel: "最高学历",
  };
  return {
    name: "stat-summary",
    version: "0.1.0",
    description: doc.description,
    priority: 32,
    config: { order: 32 },
    hooks: {
      renderBasics: (ctx: ResumePluginContext<ResumeData>) => {
        const s = computeStats(ctx.data as ResumeData);
        const valueOf = (k: StatKey): string => {
          switch (k) {
            case "expYears":
              return \`\${s.exp} 段\`;
            case "skillCount":
              return \`\${s.skills} 项\`;
            case "projectCount":
              return \`\${s.projects} 个\`;
            case "eduLevel":
              return s.edu;
            default:
              return "";
          }
        };
        return (
          <div
            key="stat-summary"
            style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}
          >
            {keys.map((k) => (
              <div
                key={k}
                style={{
                  background: "var(--vr-accent-wash, #eef3fe)",
                  border: "1px solid var(--vr-line, #e3e6ea)",
                  borderRadius: 8,
                  padding: "4px 10px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 800, color: "var(--vr-accent, #2f6feb)" }}>
                  {valueOf(k)}
                </div>
                <div style={{ fontSize: 11, color: "var(--vr-muted, #5d636a)" }}>{LABEL[k]}</div>
              </div>
            ))}
          </div>
        );
      },
    },
  };
};

createStatSummaryPlugin.meta = doc as PluginDoc;
`,L1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import doc from "./doc.json";

export interface TemplateDef {
  id: string;
  label: string;
  vars: Record<string, string>;
}
export interface TemplateSwitchConfig {
  templates?: TemplateDef[];
  defaultId?: string;
}

const DEFAULTS: TemplateDef[] = [
  { id: "classic", label: "经典", vars: { "--vr-accent": "#2f6feb", "--vr-pad": "16px", "--vr-radius": "6px", "--vr-h2": "15px", "--vr-font": "system-ui, -apple-system, 'Segoe UI', Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif" } },
  { id: "modern", label: "现代", vars: { "--vr-accent": "#7c3aed", "--vr-pad": "22px", "--vr-radius": "14px", "--vr-h2": "18px" } },
  { id: "compact", label: "紧凑", vars: { "--vr-accent": "#0ea5a4", "--vr-pad": "10px", "--vr-radius": "4px", "--vr-h2": "14px" } },
  { id: "academic", label: "学术", vars: { "--vr-accent": "#1f6f54", "--vr-pad": "18px", "--vr-radius": "2px", "--vr-h2": "16px", "--vr-font": "Georgia, 'Times New Roman', serif" } },
];

export const createTemplateSwitchPlugin: ResumePluginCreator<TemplateSwitchConfig> = (config = {}) => {
  const templates = config.templates ?? DEFAULTS;
  const defaultId = config.defaultId ?? templates[0]?.id;
  const findTpl = (id?: unknown) => templates.find((t) => t.id === id) ?? templates[0];

  return {
    name: "template-switch",
    version: "0.1.0",
    description: doc.description,
    priority: 12,
    config: { order: 12 },
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        if (ctx.state.template === undefined) {
          const t = findTpl(defaultId);
          ctx.setState({ template: t.id, templateVars: t.vars });
        }
      },
      renderToolbar: (ctx: ResumePluginContext<ResumeData>) => {
        const active = (ctx.state.template as string) ?? defaultId;
        return (
          <div
            key="template-switch"
            style={{ display: "flex", gap: 4, alignItems: "center" }}
          >
            <span style={{ fontSize: 12, color: "var(--vr-faint, #8a9099)" }}>模板</span>
            {templates.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  ctx.setState({ template: t.id, templateVars: t.vars });
                  ctx.bus.emit("resume:template-change", t.id);
                }}
                style={toolbarBtn(active === t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        );
      },
    },
  };
};

createTemplateSwitchPlugin.meta = doc as PluginDoc;
`,A1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import doc from "./doc.json";

export interface ThemePreset {
  id: string;
  label: string;
  vars: Record<string, string>;
}
export interface ThemeCustomizeConfig {
  presets?: ThemePreset[];
  default?: string;
}

const PRESETS: ThemePreset[] = [
  { id: "blue", label: "蓝", vars: { "--vr-accent": "#2f6feb" } },
  { id: "orange", label: "橙", vars: { "--vr-accent": "#e8590c" } },
  { id: "green", label: "绿", vars: { "--vr-accent": "#1f9d55" } },
  { id: "mono", label: "墨", vars: { "--vr-accent": "#1f2328" } },
];

const apply = (ctx: ResumePluginContext<ResumeData>, vars: Record<string, string>) => {
  ctx.setState({ themeVars: vars, theme: vars["--vr-accent"] ?? ctx.state.theme });
};

export const createThemeCustomizePlugin: ResumePluginCreator<ThemeCustomizeConfig> = (config = {}) => {
  const presets = config.presets ?? PRESETS;
  return {
    name: "theme-customize",
    version: "0.1.0",
    description: doc.description,
    priority: 18,
    config: { order: 18 },
    hooks: {
      onMount: (ctx) => {
        if (ctx.state.theme === undefined && presets[0]) apply(ctx, presets[0].vars);
      },
      renderToolbar: (ctx) => (
        <div
          key="theme-customize"
          style={{ display: "flex", gap: 4, alignItems: "center" }}
        >
          <span style={{ fontSize: 12, color: "var(--vr-faint, #8a9099)" }}>主题</span>
          {presets.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => apply(ctx, p.vars)}
              style={toolbarBtn(ctx.state.theme === p.vars["--vr-accent"])}
            >
              {p.label}
            </button>
          ))}
          <input
            type="color"
            defaultValue={String(ctx.state.theme ?? "#2f6feb")}
            onChange={(e) => apply(ctx, { "--vr-accent": e.target.value })}
            style={{ width: 28, height: 24, border: "none", background: "none", cursor: "pointer" }}
            aria-label="自定义强调色"
          />
        </div>
      ),
    },
  };
};

createThemeCustomizePlugin.meta = doc as PluginDoc;
`,I1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, 
  ResumeData,
} from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import doc from "./doc.json";
import { Timeline } from "./internal";

export interface TimelineViewConfig {
  sections?: ("work" | "education")[];
  mode?: "list" | "timeline";
}

export const createTimelineViewPlugin: ResumePluginCreator<TimelineViewConfig> = (config = {}) => {
  const sections = config.sections ?? ["work", "education"];
  const defaultMode = config.mode ?? "list";
  return {
    name: "timeline-view",
    version: "0.1.0",
    description: doc.description,
    priority: 22,
    config: { order: 22 },
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        if (ctx.state.timelineMode === undefined) ctx.setState({ timelineMode: defaultMode });
      },
      renderToolbar: (ctx) => {
        const mode = (ctx.state.timelineMode as string) ?? defaultMode;
        const on = mode === "timeline";
        return (
          <button
            key="timeline-view"
            type="button"
            onClick={() => ctx.setState({ timelineMode: on ? "list" : "timeline" })}
            style={toolbarBtn(on)}
          >
            时间轴
          </button>
        );
      },
      // 内容覆盖槽：timeline 模式下返回时间轴，否则返回 null 交核心默认列表
      renderWork: (ctx) => {
        if ((ctx.state.timelineMode as string) !== "timeline" || !sections.includes("work")) return null;
        const kw = (ctx.state.highlightKeywords as string[] | undefined) ?? [];
        return <Timeline items={(ctx.data as ResumeData)?.work ?? []} kind="work" kw={kw} />;
      },
      renderEducation: (ctx) => {
        if ((ctx.state.timelineMode as string) !== "timeline" || !sections.includes("education")) return null;
        const kw = (ctx.state.highlightKeywords as string[] | undefined) ?? [];
        return <Timeline items={(ctx.data as ResumeData)?.education ?? []} kind="edu" kw={kw} />;
      },
    },
  };
};

createTimelineViewPlugin.meta = doc as PluginDoc;
`,F1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, ResumeData } from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn } from "../../components/ResumePlugin/plugins/tokens";
import { Overlay } from "../../components/ResumePlugin/plugins/overlay";
import doc from "./doc.json";

export interface ResumeVersion {
  id: string;
  name: string;
  time: string;
  data: ResumeData;
  template?: string;
  lang?: string;
  privacyOn?: boolean;
}
export interface VersioningConfig {
  storage?: "local" | "memory";
  /** 存储键；多实例 / 多用户场景请分别指定，避免同源覆盖 */
  storageKey?: string;
  maxVersions?: number;
  /** 持久化失败回调（配额不足、隐私模式禁写等） */
  onStorageError?: (error: unknown) => void;
  /** 恢复版本回调：宿主可据此回写受控数据；未配置时由 withResumePlugins 内部接管 */
  onRestore?: (version: ResumeVersion) => void;
}

const DEFAULT_KEY = "vane-resume-versions";

export const createVersioningPlugin: ResumePluginCreator<VersioningConfig> = (config = {}) => {
  const max = config.maxVersions ?? 20;
  const storageKey = config.storageKey ?? DEFAULT_KEY;
  const storageMode = config.storage ?? "local";
  // memory 模式的实例级存储
  const memory = new Map<string, string>();

  const readRaw = (): string | null => {
    if (storageMode === "memory") return memory.get(storageKey) ?? null;
    try {
      if (typeof localStorage !== "undefined") return localStorage.getItem(storageKey);
    } catch (error) {
      config.onStorageError?.(error);
    }
    return null;
  };

  const writeRaw = (raw: string): boolean => {
    if (storageMode === "memory") {
      memory.set(storageKey, raw);
      return true;
    }
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(storageKey, raw);
        return true;
      }
    } catch (error) {
      config.onStorageError?.(error);
    }
    return false;
  };

  const load = (): ResumeVersion[] => {
    const raw = readRaw();
    if (!raw) return [];
    try {
      return JSON.parse(raw) as ResumeVersion[];
    } catch (error) {
      config.onStorageError?.(error);
      return [];
    }
  };

  const save = (list: ResumeVersion[]): boolean => writeRaw(JSON.stringify(list));

  const persistError = (ok: boolean) =>
    ok ? null : "本地存储写入失败，版本仅当前页面有效";

  return {
    name: "versioning",
    version: "0.1.0",
    description: doc.description,
    priority: 38,
    config: { order: 38 },
    hooks: {
      onMount: (ctx: ResumePluginContext<ResumeData>) => {
        if (!ctx.state.versions) {
          const versions = load();
          ctx.setState({ versions, versionView: null, versionName: "" });
        }
      },
      renderToolbar: (ctx) => (
        <button
          key="versioning-save"
          type="button"
          onClick={() => ctx.setState({ versionView: "save", versionName: \`版本 \${((ctx.state.versions as ResumeVersion[]) || []).length + 1}\` })}
          style={toolbarBtn(false)}
        >
          保存版本
        </button>
      ),
      renderFooter: (ctx) => {
        const versions = (ctx.state.versions as ResumeVersion[]) || [];
        const current = versions.find((v) => v.id === ctx.state.currentVersionId);
        return (
          <button
            key="versioning-foot"
            type="button"
            onClick={() => ctx.setState({ versionView: "list" })}
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              fontSize: 12,
              color: "var(--vr-muted, #5d636a)",
              cursor: "pointer",
              textDecoration: "underline",
              font: "inherit",
            }}
          >
            版本：{current ? current.name : "未保存"}（{versions.length}）
          </button>
        );
      },
      renderOverlay: (ctx) => {
        const view = ctx.state.versionView as string | undefined;
        if (!view) return null;
        const versions = (ctx.state.versions as ResumeVersion[]) || [];
        const close = () => ctx.setState({ versionView: null });
        const errorHint = ctx.state.versionPersistError ? (
          <div style={{ color: "#cf4407", fontSize: 12, marginTop: 10 }}>
            {String(ctx.state.versionPersistError)}
          </div>
        ) : null;

        if (view === "save") {
          const name = (ctx.state.versionName as string) || "";
          const doSave = () => {
            const snap: ResumeVersion = {
              id: \`v\${Date.now()}\`,
              name: name || \`版本 \${versions.length + 1}\`,
              time: new Date().toISOString().slice(0, 19).replace("T", " "),
              data: JSON.parse(JSON.stringify(ctx.data ?? {})) as ResumeData,
              template: ctx.state.template as string,
              lang: ctx.state.lang as string,
              privacyOn: !!ctx.state.privacyOn,
            };
            const next = [...versions, snap].slice(-max);
            const saved = save(next);
            ctx.shared.set("versioning:list", next);
            ctx.setState({
              versions: next,
              currentVersionId: snap.id,
              versionView: null,
              versionPersistError: persistError(saved),
            });
            ctx.bus.emit("resume:version:save", snap);
          };
          return (
            <Overlay key="versioning-modal" title="保存版本" onClose={close}>
              <input
                value={name}
                placeholder="版本名称"
                onChange={(e) => ctx.setState({ versionName: e.target.value })}
                style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #d4d8de", marginBottom: 12, boxSizing: "border-box" }}
              />
              <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                <button type="button" onClick={doSave} style={toolbarBtn(true)}>保存</button>
                <button type="button" onClick={close} style={toolbarBtn(false)}>取消</button>
              </div>
              {errorHint}
            </Overlay>
          );
        }

        // list
        const restore = (v: ResumeVersion) => {
          const patch: Record<string, unknown> = { currentVersionId: v.id, versionView: null };
          // 快照包含模板 / 语言 / 隐私态，恢复时一并还原
          if (v.template !== undefined) patch.template = v.template;
          if (v.lang !== undefined) patch.lang = v.lang;
          if (v.privacyOn !== undefined) patch.privacyOn = v.privacyOn;
          ctx.setState(patch);
          ctx.bus.emit("resume:data-replace", v);
          config.onRestore?.(v);
        };
        const del = (id: string) => {
          const next = versions.filter((x) => x.id !== id);
          const saved = save(next);
          ctx.setState({ versions: next, versionPersistError: persistError(saved) });
          ctx.bus.emit("resume:version:delete", id);
        };
        return (
          <Overlay key="versioning-modal" title={\`历史版本（\${versions.length}）\`} onClose={close} width={380}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 240, overflow: "auto" }}>
              {versions.length === 0 && <div style={{ color: "#8a9099", fontSize: 12 }}>暂无版本</div>}
              {versions.map((v) => (
                <div key={v.id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600 }}>{v.name}</div>
                    <div style={{ color: "#8a9099", fontSize: 11 }}>{v.time}</div>
                  </div>
                  <button type="button" onClick={() => restore(v)} style={toolbarBtn(true)}>恢复</button>
                  <button type="button" onClick={() => del(v.id)} style={toolbarBtn(false)}>删除</button>
                </div>
              ))}
            </div>
            {errorHint}
          </Overlay>
        );
      },
    },
  };
};

createVersioningPlugin.meta = doc as PluginDoc;
`,LS={layout:"版式与视觉",data:"数据与隐私",interaction:"交互与产出"},rc=["layout","data","interaction"],oc=Object.assign({"/src/custom-plugins/AiPolishPlugin/doc.json":da,"/src/custom-plugins/AtsScorePlugin/doc.json":ba,"/src/custom-plugins/AttachmentPreviewPlugin/doc.json":ka,"/src/custom-plugins/ContactDesensitizePlugin/doc.json":fa,"/src/custom-plugins/DeliverTrackPlugin/doc.json":wa,"/src/custom-plugins/ExportPdfPlugin/doc.json":ma,"/src/custom-plugins/KeywordHighlightPlugin/doc.json":Ra,"/src/custom-plugins/MultiLangPlugin/doc.json":ca,"/src/custom-plugins/PrintOptimizePlugin/doc.json":Pa,"/src/custom-plugins/PrivacyMaskPlugin/doc.json":pa,"/src/custom-plugins/QrCodePlugin/doc.json":ya,"/src/custom-plugins/SectionCollapsePlugin/doc.json":Da,"/src/custom-plugins/SectionReorderPlugin/doc.json":Ca,"/src/custom-plugins/ShareLinkPlugin/doc.json":ha,"/src/custom-plugins/SignatureStampPlugin/doc.json":Ta,"/src/custom-plugins/StatSummaryPlugin/doc.json":Ea,"/src/custom-plugins/TemplateSwitchPlugin/doc.json":aa,"/src/custom-plugins/ThemeCustomizePlugin/doc.json":ua,"/src/custom-plugins/TimelineViewPlugin/doc.json":ja,"/src/custom-plugins/VersioningPlugin/doc.json":va}),ic=Object.assign({"/src/custom-plugins/AiPolishPlugin/create.tsx":S1,"/src/custom-plugins/AtsScorePlugin/create.tsx":k1,"/src/custom-plugins/AttachmentPreviewPlugin/create.tsx":P1,"/src/custom-plugins/ContactDesensitizePlugin/create.tsx":_1,"/src/custom-plugins/DeliverTrackPlugin/create.tsx":C1,"/src/custom-plugins/ExportPdfPlugin/create.tsx":j1,"/src/custom-plugins/KeywordHighlightPlugin/create.tsx":R1,"/src/custom-plugins/MultiLangPlugin/create.tsx":b1,"/src/custom-plugins/PrintOptimizePlugin/create.tsx":E1,"/src/custom-plugins/PrivacyMaskPlugin/create.tsx":D1,"/src/custom-plugins/QrCodePlugin/create.tsx":T1,"/src/custom-plugins/SectionCollapsePlugin/create.tsx":O1,"/src/custom-plugins/SectionReorderPlugin/create.tsx":$1,"/src/custom-plugins/ShareLinkPlugin/create.tsx":z1,"/src/custom-plugins/SignatureStampPlugin/create.tsx":N1,"/src/custom-plugins/StatSummaryPlugin/create.tsx":M1,"/src/custom-plugins/TemplateSwitchPlugin/create.tsx":L1,"/src/custom-plugins/ThemeCustomizePlugin/create.tsx":A1,"/src/custom-plugins/TimelineViewPlugin/create.tsx":I1,"/src/custom-plugins/VersioningPlugin/create.tsx":F1}),Mp=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function U1(e){const t=Object.keys(ic).find(o=>Mp(o)===e),n=t?ic[t]:"",r=/priority:\s*(\d+)/.exec(n);return r?Number(r[1]):0}function B1(e){const t=Object.keys(oc).find(n=>Mp(n)===e);return t?oc[t]:{name:e,description:"（缺少 doc.json）"}}const V1=[{dir:"TemplateSwitchPlugin",group:"layout",make:()=>vi({})},{dir:"ThemeCustomizePlugin",group:"layout",make:()=>Ar({})},{dir:"SectionReorderPlugin",group:"layout",make:()=>Si({})},{dir:"SectionCollapsePlugin",group:"layout",make:()=>Ci({})},{dir:"TimelineViewPlugin",group:"layout",make:()=>ki({})},{dir:"StatSummaryPlugin",group:"data",make:()=>_i({})},{dir:"MultiLangPlugin",group:"data",make:()=>Fn({locales:[{code:"zh",label:"中"},{code:"en",label:"EN"}],translations:{en:{basics:{name:"Qingyang Lin",title:"Researcher",contacts:[],summary:"PhD candidate in Computer Science."}}}})},{dir:"PrivacyMaskPlugin",group:"data",make:()=>Fr({})},{dir:"ContactDesensitizePlugin",group:"data",make:()=>Ur({})},{dir:"AtsScorePlugin",group:"data",make:()=>Pi({jobKeywords:["React","TypeScript","Node"]})},{dir:"VersioningPlugin",group:"data",make:()=>xa({})},{dir:"DeliverTrackPlugin",group:"data",make:()=>Sa({})},{dir:"KeywordHighlightPlugin",group:"interaction",make:()=>Vr({keywords:["React","TypeScript"],color:"#ffd34e"})},{dir:"SignatureStampPlugin",group:"interaction",make:()=>ji({stamp:"seal"})},{dir:"QrCodePlugin",group:"interaction",make:()=>wi({content:"https://vane.dev/r/qingyang"})},{dir:"ShareLinkPlugin",group:"interaction",make:()=>xi({onBuildUrl:e=>{var t;return"https://vane.dev/r/"+encodeURIComponent(((t=e.basics)==null?void 0:t.name)??"resume")}})},{dir:"ExportPdfPlugin",group:"interaction",make:()=>ga({})},{dir:"PrintOptimizePlugin",group:"interaction",make:()=>_a({})},{dir:"AttachmentPreviewPlugin",group:"interaction",make:()=>Br({})},{dir:"AiPolishPlugin",group:"interaction",make:()=>Ir({})}],sl=V1.map(e=>{const t=B1(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:U1(e.dir),summary:t.description,doc:t,make:e.make}}).sort((e,t)=>rc.indexOf(e.group)-rc.indexOf(t.group)||t.priority-e.priority),W1={id:"tech-resume",title:"技术简历 · 现代版式",group:"求职",ref:{label:"对标 拉勾技术岗",url:"https://www.lagou.com/"},pain:"技术岗简历要在「一眼看懂」和「突出量化亮点」之间平衡，又得方便按 JD 调整后投递。",plugs:[{fn:"createTemplateSwitchPlugin",cfg:"{}",why:"切到现代模板，整体观感由 CSS 变量驱动。"},{fn:"createThemeCustomizePlugin",cfg:"{}",why:"预设强调色 + 取色器，适配招聘站品牌色。"},{fn:"createSectionReorderPlugin",cfg:"{}",why:"把「工作」提前到「教育」之前，贴合技术岗叙事。"},{fn:"createTimelineViewPlugin",cfg:"{}",why:"工作 / 教育经历切竖向时间轴，节点更清晰。"},{fn:"createKeywordHighlightPlugin",cfg:'{ keywords: ["React", "TypeScript"], color: "#ffd34e" }',why:"按 JD 关键词命中高亮，递投前自查覆盖度。"},{fn:"createStatSummaryPlugin",cfg:"{}",why:"基本信息区追加工作段数 / 技能数等概览徽章。"}],props:[],note:"这组插件互不抢槽：模板 / 主题 / 重排改外观与顺序，时间轴 / 高亮 / 概览只增强对应区块。"};function H1(){const e=x.useMemo(()=>Lr(rn,[vi({}),Ar({}),Si({}),ki({}),Vr({keywords:["React","TypeScript"],color:"#ffd34e"}),_i({})]),[]);return a.jsx(e,{data:on,containerStyle:{maxWidth:600,margin:"0 auto"}})}const K1=Object.freeze(Object.defineProperty({__proto__:null,default:H1,meta:W1},Symbol.toStringTag,{value:"Module"})),Q1={id:"share-ready",title:"分享前准备 · 隐私护栏",group:"分享",ref:{label:"对标 公开主页",url:"https://vane.dev/"},pain:"把简历发给猎头 / 挂在公开主页前，电话邮箱必须脱敏，整页还要能一键打码防截图。",plugs:[{fn:"createMultiLangPlugin",cfg:'{ locales: [{ code: "zh", label: "中" }, { code: "en", label: "EN" }], translations: { en: { basics: { name: "Qingyang Lin", title: "Researcher", contacts: [] }, summary: "PhD candidate in Computer Science." } } }',why:"脱敏管线的本地化前置：先定目标语言，润色 / 脱敏在其结果上进行。"},{fn:"createAiPolishPlugin",cfg:'{ polish: async (text) => text.replace(/负责/g, "主导") }',why:"contact-desensitize 依赖它（先润色再脱敏），缺失会被整条忽略。"},{fn:"createContactDesensitizePlugin",cfg:"{}",why:"电话 / 邮箱 / 地址做可逆脱敏（138****1234）。"},{fn:"createPrivacyMaskPlugin",cfg:"{}",why:"一键进入隐私模式，整页毛玻璃或字段级隐藏。"},{fn:"createQrCodePlugin",cfg:'{ content: "https://vane.dev/r/qingyang" }',why:"把主页 / 联系方式编码成二维码，角标常显。"},{fn:"createShareLinkPlugin",cfg:'{ onBuildUrl: (d) => "https://vane.dev/r/" + encodeURIComponent(d.basics.name) }',why:"生成可分享 URL，弹窗复制；无宿主时提示数据安全。"},{fn:"createAttachmentPreviewPlugin",cfg:"{}",why:"附件卡片列出，点击灯箱预览，避免直接暴露下载地址。"}],props:[],note:"完整管线是「本地化 → 润色 → 脱敏 → 遮罩」：脱敏与隐私遮罩都依赖上游顺序，确保遮蔽的是已润色、已脱敏的内容。"};function Y1(){const e=x.useMemo(()=>Lr(rn,[Fn({locales:[{code:"zh",label:"中"},{code:"en",label:"EN"}],translations:{en:{basics:{name:"Qingyang Lin",title:"Researcher",contacts:[],summary:"PhD candidate in Computer Science."}}}}),Ir({polish:async t=>(t||"").replace(/负责/g,"主导").replace(/参与/g,"牵头")}),Ur({}),Fr({}),wi({content:"https://vane.dev/r/qingyang"}),xi({onBuildUrl:t=>"https://vane.dev/r/"+encodeURIComponent(t.basics.name)}),Br({})]),[]);return a.jsx(e,{data:on,containerStyle:{maxWidth:600,margin:"0 auto"}})}const J1=Object.freeze(Object.defineProperty({__proto__:null,default:Y1,meta:Q1},Symbol.toStringTag,{value:"Module"})),q1={id:"academic-cv",title:"学术 CV · 紧凑阅读",group:"求职",ref:{label:"对标 高校求职",url:"https://www.zhipin.com/"},pain:"学术 / 科研岗简历信息密度高，需要可折叠的长段落、中英切换，以及论文 / 证书的附件归档。",plugs:[{fn:"createThemeCustomizePlugin",cfg:"{}",why:"压低强调色饱和度，偏沉稳的学术观感。"},{fn:"createSectionCollapsePlugin",cfg:"{}",why:"每个板块头部加折叠开关，长简历可分段收起。"},{fn:"createMultiLangPlugin",cfg:'{ locales: [{ code: "zh", label: "中" }, { code: "en", label: "EN" }], translations: { en: { basics: { name: "Qingyang Lin", title: "Researcher" }, summary: "PhD candidate in CS." } } }',why:"中英切换，整体翻译文本字段，缺失字段保留原文降级。"},{fn:"createAttachmentPreviewPlugin",cfg:"{}",why:"论文 PDF / 证书图片集中预览，便于归档投递。"}],props:[],tone:"light"};function G1(){const e=x.useMemo(()=>Lr(rn,[Ar({}),Ci({}),Fn({locales:[{code:"zh",label:"中"},{code:"en",label:"EN"}],translations:{en:{basics:{name:"Qingyang Lin",title:"Researcher",contacts:[],summary:"PhD candidate in Computer Science."}}}}),Br({})]),[]);return a.jsx(e,{data:on,containerStyle:{maxWidth:600,margin:"0 auto"}})}const X1=Object.freeze(Object.defineProperty({__proto__:null,default:G1,meta:q1},Symbol.toStringTag,{value:"Module"})),Z1={id:"ats-optimize",title:"ATS 优化自检",group:"求职",ref:{label:"对标 ATS 解析",url:"https://www.jobscan.co/"},pain:"很多公司用 ATS 先机筛，缺姓名 / 量化亮点 / 命中 JD 关键词会被直接刷掉，投递前需要自检。",plugs:[{fn:"createMultiLangPlugin",cfg:'{ locales: [{ code: "zh", label: "中" }, { code: "en", label: "EN" }], translations: { en: { basics: { name: "Qingyang Lin", title: "Researcher", contacts: [] }, summary: "PhD candidate in Computer Science." } } }',why:"评分管线的本地化前置：先出目标语言数据，后续润色 / 脱敏基于它处理。"},{fn:"createAiPolishPlugin",cfg:'{ polish: async (text) => text.replace(/负责/g, "主导") }',why:"评分管线的润色前置（demo 用本地 mock），确保脱敏改写的是润色后的文本。"},{fn:"createContactDesensitizePlugin",cfg:"{}",why:"评分管线的脱敏前置：电话 / 邮箱可逆脱敏，供隐私遮罩在其后处理。"},{fn:"createPrivacyMaskPlugin",cfg:"{}",why:"ats-score 直接依赖它（评分读脱敏后的数据），缺失会被整体忽略。"},{fn:"createAtsScorePlugin",cfg:'{ jobKeywords: ["React", "TypeScript", "Node"] }',why:"扫描常见雷区，输出 0-100 评分与逐条改进建议。"},{fn:"createKeywordHighlightPlugin",cfg:'{ keywords: ["React", "TypeScript"], color: "#ffd34e" }',why:"把 JD 关键词在正文里命中高亮，直观看到覆盖度。"},{fn:"createSignatureStampPlugin",cfg:'{ stamp: "seal" }',why:"文末加签名 + 圆形印章，正式投递更有仪式感。"}],props:[],note:"ATS 评分是纯分析插件，不改数据；它读的是多语言 / 润色之后的管线结果（脱敏 priority 48 在评分 38 之后执行，不影响评分）。评分只做诊断，隐私遮罩默认关闭，投递前再按需开启。"};function eS(){const e=x.useMemo(()=>Lr(rn,[Fn({locales:[{code:"zh",label:"中"},{code:"en",label:"EN"}],translations:{en:{basics:{name:"Qingyang Lin",title:"Researcher",contacts:[],summary:"PhD candidate in Computer Science."}}}}),Ir({polish:async t=>(t||"").replace(/负责/g,"主导").replace(/参与/g,"牵头")}),Ur({}),Fr({}),Pi({jobKeywords:["React","TypeScript","Node"]}),Vr({keywords:["React","TypeScript"],color:"#ffd34e"}),ji({stamp:"seal"})]),[]);return a.jsx(e,{data:on,containerStyle:{maxWidth:600,margin:"0 auto"}})}const tS=Object.freeze(Object.defineProperty({__proto__:null,default:eS,meta:Z1},Symbol.toStringTag,{value:"Module"})),nS=`/**
 * 技术简历：现代模板 + 主题 + 时间轴 + 关键词高亮 + 数据概览，一次叠满。
 */
import React, { useMemo } from "react";
import { ResumeCore, withResumePlugins } from "vane-resume";
import {
  createTemplateSwitchPlugin,
  createThemeCustomizePlugin,
  createSectionReorderPlugin,
  createTimelineViewPlugin,
  createKeywordHighlightPlugin,
  createStatSummaryPlugin,
} from "vane-resume/custom-plugins";
import { SAMPLE_RESUME } from "../data/sample";

export const meta = {
  id: "tech-resume",
  title: "技术简历 · 现代版式",
  group: "求职",
  ref: { label: "对标 拉勾技术岗", url: "https://www.lagou.com/" },
  pain: "技术岗简历要在「一眼看懂」和「突出量化亮点」之间平衡，又得方便按 JD 调整后投递。",
  plugs: [
    { fn: "createTemplateSwitchPlugin", cfg: \`{}\`, why: "切到现代模板，整体观感由 CSS 变量驱动。" },
    { fn: "createThemeCustomizePlugin", cfg: \`{}\`, why: "预设强调色 + 取色器，适配招聘站品牌色。" },
    { fn: "createSectionReorderPlugin", cfg: \`{}\`, why: "把「工作」提前到「教育」之前，贴合技术岗叙事。" },
    { fn: "createTimelineViewPlugin", cfg: \`{}\`, why: "工作 / 教育经历切竖向时间轴，节点更清晰。" },
    {
      fn: "createKeywordHighlightPlugin",
      cfg: \`{ keywords: ["React", "TypeScript"], color: "#ffd34e" }\`,
      why: "按 JD 关键词命中高亮，递投前自查覆盖度。",
    },
    { fn: "createStatSummaryPlugin", cfg: \`{}\`, why: "基本信息区追加工作段数 / 技能数等概览徽章。" },
  ],
  props: [],
  note: "这组插件互不抢槽：模板 / 主题 / 重排改外观与顺序，时间轴 / 高亮 / 概览只增强对应区块。",
};

export default function TechResume() {
  const Resume = useMemo(
    () =>
      withResumePlugins(ResumeCore, [
        createTemplateSwitchPlugin({}),
        createThemeCustomizePlugin({}),
        createSectionReorderPlugin({}),
        createTimelineViewPlugin({}),
        createKeywordHighlightPlugin({ keywords: ["React", "TypeScript"], color: "#ffd34e" }),
        createStatSummaryPlugin({}),
      ]),
    []
  );
  return <Resume data={SAMPLE_RESUME} containerStyle={{ maxWidth: 600, margin: "0 auto" }} />;
}
`,rS=`/**
 * 分享前准备：脱敏 + 隐私遮罩 + 二维码 + 分享链接，公开传播前的隐私护栏。
 */
import React, { useMemo } from "react";
import { ResumeCore, withResumePlugins } from "vane-resume";
import {
  createContactDesensitizePlugin,
  createPrivacyMaskPlugin,
  createQrCodePlugin,
  createShareLinkPlugin,
  createAttachmentPreviewPlugin,
  createMultiLangPlugin,
  createAiPolishPlugin,
} from "vane-resume/custom-plugins";
import { SAMPLE_RESUME } from "../data/sample";

export const meta = {
  id: "share-ready",
  title: "分享前准备 · 隐私护栏",
  group: "分享",
  ref: { label: "对标 公开主页", url: "https://vane.dev/" },
  pain: "把简历发给猎头 / 挂在公开主页前，电话邮箱必须脱敏，整页还要能一键打码防截图。",
  plugs: [
    {
      fn: "createMultiLangPlugin",
      cfg: \`{ locales: [{ code: "zh", label: "中" }, { code: "en", label: "EN" }], translations: { en: { basics: { name: "Qingyang Lin", title: "Researcher", contacts: [] }, summary: "PhD candidate in Computer Science." } } }\`,
      why: "脱敏管线的本地化前置：先定目标语言，润色 / 脱敏在其结果上进行。",
    },
    {
      fn: "createAiPolishPlugin",
      cfg: \`{ polish: async (text) => text.replace(/负责/g, "主导") }\`,
      why: "contact-desensitize 依赖它（先润色再脱敏），缺失会被整条忽略。",
    },
    { fn: "createContactDesensitizePlugin", cfg: \`{}\`, why: "电话 / 邮箱 / 地址做可逆脱敏（138****1234）。" },
    { fn: "createPrivacyMaskPlugin", cfg: \`{}\`, why: "一键进入隐私模式，整页毛玻璃或字段级隐藏。" },
    { fn: "createQrCodePlugin", cfg: \`{ content: "https://vane.dev/r/qingyang" }\`, why: "把主页 / 联系方式编码成二维码，角标常显。" },
    {
      fn: "createShareLinkPlugin",
      cfg: \`{ onBuildUrl: (d) => "https://vane.dev/r/" + encodeURIComponent(d.basics.name) }\`,
      why: "生成可分享 URL，弹窗复制；无宿主时提示数据安全。",
    },
    { fn: "createAttachmentPreviewPlugin", cfg: \`{}\`, why: "附件卡片列出，点击灯箱预览，避免直接暴露下载地址。" },
  ],
  props: [],
  note: "完整管线是「本地化 → 润色 → 脱敏 → 遮罩」：脱敏与隐私遮罩都依赖上游顺序，确保遮蔽的是已润色、已脱敏的内容。",
};

export default function ShareReady() {
  const Resume = useMemo(
    () =>
      withResumePlugins(ResumeCore, [
        // contact-desensitize 声明依赖 ai-polish，ai-polish 又依赖 multi-lang：
        // 缺任一环，plugin-core 会把下游插件整体忽略（脱敏按钮 / 遮罩都不出现），所以一并注册。
        createMultiLangPlugin({
          locales: [
            { code: "zh", label: "中" },
            { code: "en", label: "EN" },
          ],
          translations: {
            en: {
              basics: {
                name: "Qingyang Lin",
                title: "Researcher",
                contacts: [],
                summary: "PhD candidate in Computer Science.",
              },
            },
          },
        }),
        // demo 用本地 mock 润色（与 demos/_factory.tsx 同款替换规则），真实项目注入自己的 polish 服务
        createAiPolishPlugin({
          polish: async (text) =>
            (text || "").replace(/负责/g, "主导").replace(/参与/g, "牵头"),
        }),
        createContactDesensitizePlugin({}),
        createPrivacyMaskPlugin({}),
        createQrCodePlugin({ content: "https://vane.dev/r/qingyang" }),
        createShareLinkPlugin({
          onBuildUrl: (d) =>
            "https://vane.dev/r/" + encodeURIComponent((d as { basics: { name: string } }).basics.name),
        }),
        createAttachmentPreviewPlugin({}),
      ]),
    []
  );
  return <Resume data={SAMPLE_RESUME} containerStyle={{ maxWidth: 600, margin: "0 auto" }} />;
}
`,oS=`/**
 * 学术 CV：紧凑模板 + 折叠 + 多语言 + 附件预览，偏阅读密度与可归档。
 */
import React, { useMemo } from "react";
import { ResumeCore, withResumePlugins } from "vane-resume";
import {
  createThemeCustomizePlugin,
  createSectionCollapsePlugin,
  createMultiLangPlugin,
  createAttachmentPreviewPlugin,
} from "vane-resume/custom-plugins";
import { SAMPLE_RESUME } from "../data/sample";

export const meta = {
  id: "academic-cv",
  title: "学术 CV · 紧凑阅读",
  group: "求职",
  ref: { label: "对标 高校求职", url: "https://www.zhipin.com/" },
  pain: "学术 / 科研岗简历信息密度高，需要可折叠的长段落、中英切换，以及论文 / 证书的附件归档。",
  plugs: [
    { fn: "createThemeCustomizePlugin", cfg: \`{}\`, why: "压低强调色饱和度，偏沉稳的学术观感。" },
    { fn: "createSectionCollapsePlugin", cfg: \`{}\`, why: "每个板块头部加折叠开关，长简历可分段收起。" },
    { fn: "createMultiLangPlugin", cfg: \`{ locales: [{ code: "zh", label: "中" }, { code: "en", label: "EN" }], translations: { en: { basics: { name: "Qingyang Lin", title: "Researcher" }, summary: "PhD candidate in CS." } } }\`, why: "中英切换，整体翻译文本字段，缺失字段保留原文降级。" },
    { fn: "createAttachmentPreviewPlugin", cfg: \`{}\`, why: "论文 PDF / 证书图片集中预览，便于归档投递。" },
  ],
  props: [],
  tone: "light" as const,
};

export default function AcademicCv() {
  const Resume = useMemo(
    () =>
      withResumePlugins(ResumeCore, [
        createThemeCustomizePlugin({}),
        createSectionCollapsePlugin({}),
        createMultiLangPlugin({
          locales: [
            { code: "zh", label: "中" },
            { code: "en", label: "EN" },
          ],
          translations: {
            en: {
              basics: {
                name: "Qingyang Lin",
                title: "Researcher",
                contacts: [],
                summary: "PhD candidate in Computer Science.",
              },
            },
          },
        }),
        createAttachmentPreviewPlugin({}),
      ]),
    []
  );
  return (
    <Resume data={SAMPLE_RESUME} containerStyle={{ maxWidth: 600, margin: "0 auto" }} />
  );
}
`,iS=`/**
 * ATS 优化自检：ATS 评分 + 关键词高亮 + 电子落款，投递前的最后一道关。
 */
import React, { useMemo } from "react";
import { ResumeCore, withResumePlugins } from "vane-resume";
import {
  createAtsScorePlugin,
  createKeywordHighlightPlugin,
  createSignatureStampPlugin,
  createMultiLangPlugin,
  createAiPolishPlugin,
  createContactDesensitizePlugin,
  createPrivacyMaskPlugin,
} from "vane-resume/custom-plugins";
import { SAMPLE_RESUME } from "../data/sample";

export const meta = {
  id: "ats-optimize",
  title: "ATS 优化自检",
  group: "求职",
  ref: { label: "对标 ATS 解析", url: "https://www.jobscan.co/" },
  pain: "很多公司用 ATS 先机筛，缺姓名 / 量化亮点 / 命中 JD 关键词会被直接刷掉，投递前需要自检。",
  plugs: [
    {
      fn: "createMultiLangPlugin",
      cfg: \`{ locales: [{ code: "zh", label: "中" }, { code: "en", label: "EN" }], translations: { en: { basics: { name: "Qingyang Lin", title: "Researcher", contacts: [] }, summary: "PhD candidate in Computer Science." } } }\`,
      why: "评分管线的本地化前置：先出目标语言数据，后续润色 / 脱敏基于它处理。",
    },
    {
      fn: "createAiPolishPlugin",
      cfg: \`{ polish: async (text) => text.replace(/负责/g, "主导") }\`,
      why: "评分管线的润色前置（demo 用本地 mock），确保脱敏改写的是润色后的文本。",
    },
    {
      fn: "createContactDesensitizePlugin",
      cfg: \`{}\`,
      why: "评分管线的脱敏前置：电话 / 邮箱可逆脱敏，供隐私遮罩在其后处理。",
    },
    {
      fn: "createPrivacyMaskPlugin",
      cfg: \`{}\`,
      why: "ats-score 直接依赖它（评分读脱敏后的数据），缺失会被整体忽略。",
    },
    {
      fn: "createAtsScorePlugin",
      cfg: \`{ jobKeywords: ["React", "TypeScript", "Node"] }\`,
      why: "扫描常见雷区，输出 0-100 评分与逐条改进建议。",
    },
    {
      fn: "createKeywordHighlightPlugin",
      cfg: \`{ keywords: ["React", "TypeScript"], color: "#ffd34e" }\`,
      why: "把 JD 关键词在正文里命中高亮，直观看到覆盖度。",
    },
    { fn: "createSignatureStampPlugin", cfg: \`{ stamp: "seal" }\`, why: "文末加签名 + 圆形印章，正式投递更有仪式感。" },
  ],
  props: [],
  note: "ATS 评分是纯分析插件，不改数据；它读的是多语言 / 润色之后的管线结果（脱敏 priority 48 在评分 38 之后执行，不影响评分）。评分只做诊断，隐私遮罩默认关闭，投递前再按需开启。",
};

export default function AtsOptimize() {
  const Resume = useMemo(
    () =>
      withResumePlugins(ResumeCore, [
        // ats-score 声明依赖 privacy-mask，而 privacy-mask → contact-desensitize → ai-polish → multi-lang
        // 是一条硬依赖链：缺任一环，plugin-core 会把它整条忽略（评分 UI 直接不渲染），因此四者必须一起注册。
        // 数组顺序不代表执行顺序，真实顺序由各自 priority + 依赖拓扑决定。
        createMultiLangPlugin({
          locales: [
            { code: "zh", label: "中" },
            { code: "en", label: "EN" },
          ],
          translations: {
            en: {
              basics: {
                name: "Qingyang Lin",
                title: "Researcher",
                contacts: [],
                summary: "PhD candidate in Computer Science.",
              },
            },
          },
        }),
        // demo 用本地 mock 润色（与 demos/_factory.tsx 同款替换规则），真实项目注入自己的 polish 服务
        createAiPolishPlugin({
          polish: async (text) =>
            (text || "").replace(/负责/g, "主导").replace(/参与/g, "牵头"),
        }),
        createContactDesensitizePlugin({}),
        createPrivacyMaskPlugin({}),
        createAtsScorePlugin({ jobKeywords: ["React", "TypeScript", "Node"] }),
        createKeywordHighlightPlugin({ keywords: ["React", "TypeScript"], color: "#ffd34e" }),
        createSignatureStampPlugin({ stamp: "seal" }),
      ]),
    []
  );
  return <Resume data={SAMPLE_RESUME} containerStyle={{ maxWidth: 600, margin: "0 auto" }} />;
}
`,sS=Object.assign({"./01-tech-resume.tsx":K1,"./02-share-ready.tsx":J1,"./03-academic-cv.tsx":X1,"./04-ats-optimize.tsx":tS}),lS=Object.assign({"./01-tech-resume.tsx":nS,"./02-share-ready.tsx":rS,"./03-academic-cv.tsx":oS,"./04-ats-optimize.tsx":iS}),aS=e=>e.replace(/^\.\//,""),Xo=Object.entries(sS).map(([e,t])=>{const n=aS(e);return{meta:t.meta,Component:t.default,file:n,source:lS[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),AS=Xo.reduce((e,t)=>(e.includes(t.meta.group)||e.push(t.meta.group),e),[]),IS=Array.from(new Set(Xo.flatMap(e=>e.meta.plugs.map(t=>t.fn)))).sort(),uS="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",cS="true|false|null|undefined|this|super",dS="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",sc=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${uS})\b`,String.raw`\b(${cS})\b`,String.raw`\b(${dS})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),lc=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function pS(e){const t=[];let n=0;sc.lastIndex=0;let r;for(;r=sc.exec(e);){r.index>n&&t.push({text:e.slice(n,r.index),cls:null});const o=lc.findIndex((i,s)=>r[s+1]!==void 0);t.push({text:r[0],cls:o>=0?lc[o]:null}),n=r.index+r[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function ac(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function fS({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:r}){const[o,i]=x.useState("idle"),[s,l]=x.useState(!1),u=x.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=n>0&&u.length>n,d=c&&!s?u.slice(0,n).join(`
`):e,p=x.useMemo(()=>pS(d),[d]),f=x.useCallback(async()=>{var w;let y=!1;if((w=navigator.clipboard)!=null&&w.writeText)try{await navigator.clipboard.writeText(e),y=!0}catch{y=ac(e)}else y=ac(e);i(y?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return a.jsxs("div",{className:"code",children:[a.jsxs("div",{className:"code-head",children:[a.jsx("span",{children:t}),a.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[a.jsxs("span",{children:[u.length," 行"]}),a.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:f,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),a.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:a.jsx("code",{children:p.map((y,w)=>y.cls?a.jsx("span",{className:y.cls,children:y.text},w):a.jsx(Or.Fragment,{children:y.text},w))})}),c?a.jsx("button",{type:"button",className:"code-more",onClick:()=>l(y=>!y),children:s?"收起":`展开余下 ${u.length-n} 行`}):null]})}function Lp(e){return e.props??e.config??[]}function mS({doc:e}){var o,i,s;const t=Lp(e),n=e.events??[],r=e.methods??[];return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"doc-sec",children:[a.jsx("h5",{children:"属性 Props"}),t.length?a.jsxs("table",{className:"doc-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"属性"}),a.jsx("th",{children:"类型"}),a.jsx("th",{children:"默认"}),a.jsx("th",{children:"说明"})]})}),a.jsx("tbody",{children:t.map(l=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("code",{children:l.name})}),a.jsx("td",{children:a.jsx("code",{className:"dim",children:l.type})}),a.jsx("td",{children:a.jsx("code",{className:"dim",children:l.default??"-"})}),a.jsx("td",{children:l.description??"—"})]},l.name))})]}):a.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),a.jsxs("div",{className:"doc-sec",children:[a.jsx("h5",{children:"事件 Events"}),n.length?a.jsxs("table",{className:"doc-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"事件"}),a.jsx("th",{children:"触发时机"}),a.jsx("th",{children:"说明"})]})}),a.jsx("tbody",{children:n.map(l=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("code",{children:l.name})}),a.jsx("td",{children:l.when}),a.jsx("td",{children:l.description})]},l.name))})]}):a.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),a.jsxs("div",{className:"doc-sec",children:[a.jsx("h5",{children:"方法 Methods"}),r.length?a.jsxs("table",{className:"doc-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"方法"}),a.jsx("th",{children:"签名"}),a.jsx("th",{children:"说明"})]})}),a.jsx("tbody",{children:r.map(l=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("code",{children:l.name})}),a.jsx("td",{children:a.jsx("code",{className:"dim",children:l.signature})}),a.jsx("td",{children:l.description})]},l.name))})]}):a.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),a.jsxs("div",{className:"doc-cols",children:[(o=e.features)!=null&&o.length?a.jsxs("div",{children:[a.jsx("h5",{children:"能做"}),a.jsx("ul",{children:e.features.map(l=>a.jsx("li",{children:l},l))})]}):null,(i=e.useCases)!=null&&i.length?a.jsxs("div",{children:[a.jsx("h5",{children:"适合"}),a.jsx("ul",{children:e.useCases.map(l=>a.jsx("li",{children:l},l))})]}):null,(s=e.notes)!=null&&s.length?a.jsxs("div",{children:[a.jsx("h5",{children:"注意"}),a.jsx("ul",{children:e.notes.map(l=>a.jsx("li",{children:l},l))})]}):null]})]})}function gS({factory:e,priority:t,summary:n,doc:r,defaultOpen:o=!0}){var s,l;const i={props:Lp(r).length,events:((s=r.events)==null?void 0:s.length)??0,methods:((l=r.methods)==null?void 0:l.length)??0};return a.jsxs("details",{className:"api-plug",open:o,children:[a.jsxs("summary",{children:[a.jsx("code",{children:e}),a.jsxs("span",{className:"tag tag-accent",children:["priority ",t]}),a.jsx("span",{className:"api-plug-desc",children:n}),a.jsxs("span",{className:"api-plug-n",children:[i.props," 属性 · ",i.events," 事件 · ",i.methods," 方法"]})]}),a.jsx("div",{className:"api-plug-body",children:a.jsx(mS,{doc:r})})]})}const hS=/create[A-Z]\w*Plugin/g;function yS(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Ap(e){return e.dir?`create${e.dir}`:yS(e.factory)}function vS(e){return new Set(e.match(hS)??[])}function xS(e,t){const n=vS(e);return t.filter(r=>n.has(Ap(r))).sort((r,o)=>r.priority-o.priority)}function wS({source:e,plugins:t,heading:n="本页用到的插件"}){const r=x.useMemo(()=>xS(e,t),[e,t]);return r.length===0?null:a.jsxs("section",{className:"api-sec",children:[a.jsxs("div",{className:"api-sec-head",children:[a.jsxs("h2",{className:"api-sec-title",children:[n," · ",r.length," 个"]}),a.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",a.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(o=>a.jsx(gS,{factory:Ap(o),priority:o.priority,summary:o.summary??o.doc.description??"",doc:o.doc},o.factory))]})}const SS=/\{\{\s*([\w-]+)\s*\}\}/g;function Ip(e,t){return e.replace(SS,(n,r)=>r in t?String(t[r]):n)}function kS(e,t){if(!e)return"";let n=Ip(e,t).trim();return n.startsWith("{")&&n.endsWith("}")&&(n=n.slice(1,-1).trim()),n?`{ ${n} }`:""}function Fp(e,t){const n=e.plugs.map(r=>`  ${r.fn}(${kS(r.cfg,t)}),`).join(`
`);return e.plugs.length?`const Resume = withResumePlugins(ResumeCore, [
${n}
]);`:"const Resume = ResumeCore;"}function Up(e){const t=e.plugs.map(n=>n.fn).sort();return t.length?t.length>3?`import {
${t.map(n=>`  ${n},`).join(`
`)}
} from "vane-resume/custom-plugins";`:`import { ${t.join(", ")} } from "vane-resume/custom-plugins";`:"// 这一页只用 Core props，不需要任何插件"}function PS(e,t){const n=e.props.filter(r=>typeof r=="string"||!r.when||r.when(t)).map(r=>`      ${Ip(typeof r=="string"?r:r.text,t)}`).join(`
`);return`// ${e.title} · 最小装配（照抄即可跑）
import { ResumeCore, withResumePlugins } from "vane-resume";
import type { ResumeData } from "vane-resume";
${Up(e)}

${Fp(e,t)}

export default function Demo({ data }: { data: ResumeData }) {
  return (
    <Resume
      data={data}
${n}
    />
  );
}
`}function _S(e){return/^[A-Za-z_$][\w$]*$/.test(e)}function ll(e,t){const n="  ".repeat(t),r="  ".repeat(t+1);if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${r}${ll(i,t+1)}`).join(`,
`)},
${n}]`;if(typeof e=="object"){const o=Object.entries(e);return o.length===0?"{}":`{
${o.map(([s,l])=>`${r}${_S(s)?s:JSON.stringify(s)}: ${ll(l,t+1)}`).join(`,
`)},
${n}}`}return JSON.stringify(e)}function CS(){const e=JSON.parse(JSON.stringify(on));return e.basics&&(e.basics.avatar="https://your-avatar.example.com/a.png"),`const data: ResumeData = ${ll(e,0)};`}function jS(e,t){return`// ${e.title} · 完整示例（直接复制即可运行）
import { ResumeCore, withResumePlugins } from "vane-resume";
import type { ResumeData } from "vane-resume";
${Up(e)}

${Fp(e,t)}

${CS()}

export default function Demo() {
  return <Resume data={data} />;
}
`}function RS({controls:e,cfg:t,onChange:n}){return a.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(t)).map(r=>{const o=t[r.key];return a.jsxs("label",{className:"ctl",title:r.hint,children:[a.jsxs("span",{className:"ctl-label",children:[r.label,a.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?a.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>n(r.key,!o),"aria-pressed":!!o,children:a.jsx("i",{})}):r.kind==="select"?a.jsx("select",{className:"ctl-select",value:String(o),onChange:i=>n(r.key,i.target.value),children:(r.options??[]).map(i=>a.jsx("option",{value:i.value,children:i.label},i.value))}):a.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:i=>n(r.key,Number(i.target.value))})]},r.key)})})}function bS({lines:e,title:t="事件日志",empty:n="还没触发 —— 试着滚动、点一张卡",right:r}){return a.jsxs("div",{className:"log",children:[a.jsxs("div",{className:"log-head",children:[a.jsx("span",{children:t}),a.jsxs("span",{className:"log-right",children:[r,a.jsx("b",{children:e.length})]})]}),e.length===0?a.jsx("p",{className:"log-empty",children:n}):a.jsx("ol",{className:"log-list",children:e.map(o=>a.jsxs("li",{className:`log-line is-${o.kind}`,children:[a.jsx("time",{children:o.at}),a.jsx("span",{children:o.text})]},o.id))})]})}function ES({entry:e,order:t}){var k;const{meta:n,Stage:r,file:o,source:i}=e,[s,l]=x.useState(()=>nc(n)),[u,c]=x.useState([]),[d,p]=x.useState("minimal"),f=x.useCallback((g,m="event")=>{const h=new Date().toLocaleTimeString("zh-CN",{hour12:!1});c(S=>[{id:S.length+1,at:h,text:g,kind:m},...S].slice(0,60))},[]),y=x.useCallback((g,m)=>{l(h=>({...h,[g]:m}))},[]),w=x.useMemo(()=>PS(n,s),[n,s]),v=x.useMemo(()=>jS(n,s),[n,s]);return a.jsxs("section",{className:"demo","data-demo":n.slug,children:[a.jsxs("header",{className:"demo-head",children:[a.jsxs("div",{className:"demo-folio",children:[a.jsx("span",{className:"demo-no",children:String(t).padStart(2,"0")}),a.jsx("em",{children:"plate"})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"demo-title-row",children:[a.jsx("h2",{children:n.title}),a.jsx("span",{className:"demo-group",children:il[n.group].label}),n.plugin?a.jsx("code",{className:"demo-plugin",children:n.plugin}):null]}),a.jsx("p",{className:"demo-intro",children:n.intro}),a.jsxs("p",{className:"demo-why",children:[a.jsx("b",{children:"什么时候用"}),n.why]})]}),a.jsxs("div",{className:"demo-meta",children:[a.jsxs("div",{className:"demo-meta-row",children:[a.jsx("span",{children:"file"}),a.jsx("b",{children:o})]}),a.jsxs("div",{className:"demo-meta-row",children:[a.jsx("span",{children:"group"}),a.jsx("b",{children:il[n.group].label})]}),a.jsxs("div",{className:"demo-meta-row",children:[a.jsx("span",{children:"plugs"}),a.jsx("b",{children:n.plugs.length?`${n.plugs.length} installed`:"core only"})]})]})]}),(k=n.controls)!=null&&k.length?a.jsxs("div",{className:"demo-controls",children:[a.jsx(RS,{controls:n.controls,cfg:s,onChange:y}),a.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{l(nc(n)),c([])},children:"重置"})]}):null,a.jsxs("div",{className:"demo-body",children:[a.jsxs("figure",{className:"plate",children:[a.jsxs("figcaption",{className:"plate-cap",children:[a.jsx("b",{children:"stage"}),a.jsxs("span",{children:[n.tone==="light"?"light surface":"live render",n.stageHeight?` · ${n.stageHeight}px`:""]}),a.jsx("em",{children:"live"})]}),a.jsx("div",{className:"plate-ruler","aria-hidden":!0}),a.jsx("div",{className:`plate-body demo-stage${n.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${n.stageHeight??380}px`},children:a.jsx(r,{cfg:s,log:f,setCfg:y})})]}),a.jsxs("aside",{className:"demo-side",children:[a.jsx("div",{className:"demo-plugs",children:n.plugs.length===0?a.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):n.plugs.map(g=>a.jsx("span",{className:`demo-plug${g.local?" is-local":""}`,children:g.fn.replace(/^create|Plugin$/g,"")},g.fn))}),a.jsx("ul",{className:"demo-why-list",children:n.plugs.map(g=>a.jsxs("li",{children:[a.jsx("code",{children:g.fn}),a.jsx("span",{children:g.why})]},g.fn))}),n.note?a.jsxs("p",{className:"demo-note",children:["⚠ ",n.note]}):null,a.jsx(bS,{lines:u,empty:n.plugs.length>0?"还没触发 —— 拖上面的控件，或滚动 / 点卡片":"这一页没有事件类行为，日志留白"})]})]}),a.jsxs("div",{className:"demo-code",children:[a.jsxs("div",{className:"demo-switch",role:"tablist",children:[a.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>p("minimal"),children:"最小装配"}),a.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>p("full"),children:"完整源码"})]}),a.jsx(fS,{code:d==="minimal"?w:v,title:d==="minimal"?`${n.slug}.minimal.tsx`:o,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]}),a.jsx(wS,{source:i,plugins:sl})]})}const DS=x.lazy(()=>zn(()=>import("./HomePage-2dLCHVDd.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),TS=x.lazy(()=>zn(()=>import("./PluginsPage-DfJQ1uYc.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),OS=x.lazy(()=>zn(()=>import("./ScenariosPage-BeTOq2gk.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),$S={pkg:"vane-resume",brand:"R",subtitle:"结构化简历 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${sl.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Xo.length} scenes`}],routes:[{path:"/",element:a.jsx(DS,{})},{path:"/plugins",element:a.jsx(TS,{})},{path:"/scenarios",element:a.jsx(OS,{})}],crumb:e=>e==="/plugins"?"plugins · 插件工坊":e==="/scenarios"?"scenarios · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:w1.map(e=>({key:e,label:il[e].label})),entries:ol,detail:(e,t)=>a.jsx(ES,{entry:e,order:t})},footer:[`${sl.length} PLUGINS · ${Xo.length} SCENES`,`${ol.length} DEMOS`]};function zS(){return a.jsx(jh,{config:$S})}ss.createRoot(document.getElementById("root")).render(a.jsx(zS,{}));export{fS as C,ol as D,rc as G,rl as L,sl as P,rn as R,Xo as S,IS as U,zn as _,il as a,LS as b,on as c,AS as d,MS as e,Hp as g,a as j,x as r,Lr as w};
