const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-Ciac5-vU.js","./catalog-YdRpEuwF.js","./ScenariosPage-D42I9rZZ.js"])))=>i.map(i=>d[i]);
var vf=Object.defineProperty;var Sf=(e,t,n)=>t in e?vf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Hs=(e,t,n)=>Sf(e,typeof t!="symbol"?t+"":t,n);function kf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function xf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pu={exports:{}},Uo={},Cu={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rr=Symbol.for("react.element"),wf=Symbol.for("react.portal"),Pf=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),_f=Symbol.for("react.profiler"),Rf=Symbol.for("react.provider"),Ef=Symbol.for("react.context"),bf=Symbol.for("react.forward_ref"),jf=Symbol.for("react.suspense"),Nf=Symbol.for("react.memo"),$f=Symbol.for("react.lazy"),Qs=Symbol.iterator;function Tf(e){return e===null||typeof e!="object"?null:(e=Qs&&e[Qs]||e["@@iterator"],typeof e=="function"?e:null)}var _u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ru=Object.assign,Eu={};function Tn(e,t,n){this.props=e,this.context=t,this.refs=Eu,this.updater=n||_u}Tn.prototype.isReactComponent={};Tn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bu(){}bu.prototype=Tn.prototype;function Ul(e,t,n){this.props=e,this.context=t,this.refs=Eu,this.updater=n||_u}var Bl=Ul.prototype=new bu;Bl.constructor=Ul;Ru(Bl,Tn.prototype);Bl.isPureReactComponent=!0;var Ks=Array.isArray,ju=Object.prototype.hasOwnProperty,Vl={current:null},Nu={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ju.call(t,r)&&!Nu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Rr,type:e,key:i,ref:l,props:o,_owner:Vl.current}}function Of(e,t){return{$$typeof:Rr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rr}function Lf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ws=/\/+/g;function di(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lf(""+e.key):t.toString(36)}function eo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Rr:case wf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+di(l,0):r,Ks(o)?(n="",e!=null&&(n=e.replace(Ws,"$&/")+"/"),eo(o,t,n,"",function(u){return u})):o!=null&&(Fl(o)&&(o=Of(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ws,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Ks(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+di(i,s);l+=eo(i,t,n,a,o)}else if(a=Tf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+di(i,s++),l+=eo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Lr(e,t,n){if(e==null)return e;var r=[],o=0;return eo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Mf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},to={transition:null},Af={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:to,ReactCurrentOwner:Vl};function Tu(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Lr,forEach:function(e,t,n){Lr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Lr(e,function(){t++}),t},toArray:function(e){return Lr(e,function(t){return t})||[]},only:function(e){if(!Fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Tn;M.Fragment=Pf;M.Profiler=_f;M.PureComponent=Ul;M.StrictMode=Cf;M.Suspense=jf;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;M.act=Tu;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ru({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Vl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ju.call(t,a)&&!Nu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Rr,type:e.type,key:o,ref:i,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:Ef,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rf,_context:e},e.Consumer=e};M.createElement=$u;M.createFactory=function(e){var t=$u.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:bf,render:e}};M.isValidElement=Fl;M.lazy=function(e){return{$$typeof:$f,_payload:{_status:-1,_result:e},_init:Mf}};M.memo=function(e,t){return{$$typeof:Nf,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=to.transition;to.transition={};try{e()}finally{to.transition=t}};M.unstable_act=Tu;M.useCallback=function(e,t){return ye.current.useCallback(e,t)};M.useContext=function(e){return ye.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};M.useEffect=function(e,t){return ye.current.useEffect(e,t)};M.useId=function(){return ye.current.useId()};M.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ye.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};M.useRef=function(e){return ye.current.useRef(e)};M.useState=function(e){return ye.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ye.current.useTransition()};M.version="18.3.1";Cu.exports=M;var k=Cu.exports;const Er=xf(k),If=kf({__proto__:null,default:Er},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=k,zf=Symbol.for("react.element"),Uf=Symbol.for("react.fragment"),Bf=Object.prototype.hasOwnProperty,Vf=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ff={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Bf.call(t,r)&&!Ff.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:zf,type:e,key:i,ref:l,props:o,_owner:Vf.current}}Uo.Fragment=Uf;Uo.jsx=Ou;Uo.jsxs=Ou;Pu.exports=Uo;var c=Pu.exports,Ui={},Lu={exports:{}},Oe={},Mu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,T){var N=b.length;b.push(T);e:for(;0<N;){var D=N-1>>>1,B=b[D];if(0<o(B,T))b[D]=T,b[N]=B,N=D;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var T=b[0],N=b.pop();if(N!==T){b[0]=N;e:for(var D=0,B=b.length,Ee=B>>>1;D<Ee;){var L=2*(D+1)-1,A=b[L],ee=L+1,Me=b[ee];if(0>o(A,N))ee<B&&0>o(Me,A)?(b[D]=Me,b[ee]=N,D=ee):(b[D]=A,b[L]=N,D=L);else if(ee<B&&0>o(Me,N))b[D]=Me,b[ee]=N,D=ee;else break e}}return T}function o(b,T){var N=b.sortIndex-T.sortIndex;return N!==0?N:b.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,p=null,m=3,y=!1,S=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(b){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=b)r(u),T.sortIndex=T.expirationTime,t(a,T);else break;T=n(u)}}function w(b){if(v=!1,h(b),!S)if(n(a)!==null)S=!0,Ve(C);else{var T=n(u);T!==null&&pt(w,T.startTime-b)}}function C(b,T){S=!1,v&&(v=!1,g(P),P=-1),y=!0;var N=m;try{for(h(T),p=n(a);p!==null&&(!(p.expirationTime>T)||b&&!W());){var D=p.callback;if(typeof D=="function"){p.callback=null,m=p.priorityLevel;var B=D(p.expirationTime<=T);T=e.unstable_now(),typeof B=="function"?p.callback=B:p===n(a)&&r(a),h(T)}else r(a);p=n(a)}if(p!==null)var Ee=!0;else{var L=n(u);L!==null&&pt(w,L.startTime-T),Ee=!1}return Ee}finally{p=null,m=N,y=!1}}var R=!1,E=null,P=-1,O=5,$=-1;function W(){return!(e.unstable_now()-$<O)}function Se(){if(E!==null){var b=e.unstable_now();$=b;var T=!0;try{T=E(!0,b)}finally{T?U():(R=!1,E=null)}}else R=!1}var U;if(typeof f=="function")U=function(){f(Se)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Re=ke.port2;ke.port1.onmessage=Se,U=function(){Re.postMessage(null)}}else U=function(){x(Se,0)};function Ve(b){E=b,R||(R=!0,U())}function pt(b,T){P=x(function(){b(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,Ve(C))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var N=m;m=T;try{return b()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,T){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var N=m;m=b;try{return T()}finally{m=N}},e.unstable_scheduleCallback=function(b,T,N){var D=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?D+N:D):N=D,b){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=N+B,b={id:d++,callback:T,priorityLevel:b,startTime:N,expirationTime:B,sortIndex:-1},N>D?(b.sortIndex=N,t(u,b),n(a)===null&&b===n(u)&&(v?(g(P),P=-1):v=!0,pt(w,N-D))):(b.sortIndex=B,t(a,b),S||y||(S=!0,Ve(C))),b},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(b){var T=m;return function(){var N=m;m=T;try{return b.apply(this,arguments)}finally{m=N}}}})(Au);Mu.exports=Au;var Hf=Mu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf=k,Te=Hf;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iu=new Set,lr={};function Jt(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(lr[e]=t,e=0;e<t.length;e++)Iu.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bi=Object.prototype.hasOwnProperty,Kf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qs={},Gs={};function Wf(e){return Bi.call(Gs,e)?!0:Bi.call(qs,e)?!1:Kf.test(e)?Gs[e]=!0:(qs[e]=!0,!1)}function qf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gf(e,t,n,r){if(t===null||typeof t>"u"||qf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hl=/[\-:]([a-z])/g;function Ql(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hl,Ql);ce[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hl,Ql);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hl,Ql);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Kl(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gf(t,n,o,r)&&(n=null),r||o===null?Wf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mr=Symbol.for("react.element"),sn=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),Wl=Symbol.for("react.strict_mode"),Vi=Symbol.for("react.profiler"),Du=Symbol.for("react.provider"),zu=Symbol.for("react.context"),ql=Symbol.for("react.forward_ref"),Fi=Symbol.for("react.suspense"),Hi=Symbol.for("react.suspense_list"),Gl=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Uu=Symbol.for("react.offscreen"),Js=Symbol.iterator;function In(e){return e===null||typeof e!="object"?null:(e=Js&&e[Js]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,fi;function Kn(e){if(fi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fi=t&&t[1]||""}return`
`+fi+e}var pi=!1;function gi(e,t){if(!e||pi)return"";pi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{pi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Kn(e):""}function Jf(e){switch(e.tag){case 5:return Kn(e.type);case 16:return Kn("Lazy");case 13:return Kn("Suspense");case 19:return Kn("SuspenseList");case 0:case 2:case 15:return e=gi(e.type,!1),e;case 11:return e=gi(e.type.render,!1),e;case 1:return e=gi(e.type,!0),e;default:return""}}function Qi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case an:return"Fragment";case sn:return"Portal";case Vi:return"Profiler";case Wl:return"StrictMode";case Fi:return"Suspense";case Hi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zu:return(e.displayName||"Context")+".Consumer";case Du:return(e._context.displayName||"Context")+".Provider";case ql:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gl:return t=e.displayName||null,t!==null?t:Qi(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return Qi(e(t))}catch{}}return null}function Yf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qi(t);case 8:return t===Wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xf(e){var t=Bu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ar(e){e._valueTracker||(e._valueTracker=Xf(e))}function Vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ki(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ys(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fu(e,t){t=t.checked,t!=null&&Kl(e,"checked",t,!1)}function Wi(e,t){Fu(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qi(e,t.type,n):t.hasOwnProperty("defaultValue")&&qi(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qi(e,t,n){(t!=="number"||po(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wn=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Gi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Wn(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function Hu(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ea(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ji(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,Ku=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zf=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(e){Zf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yn[t]=Yn[e]})});function Wu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yn.hasOwnProperty(e)&&Yn[e]?(""+t).trim():t+"px"}function qu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Wu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ep=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yi(e,t){if(t){if(ep[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Xi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,kn=null,xn=null;function ta(e){if(e=Nr(e)){if(typeof el!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Qo(t),el(e.stateNode,e.type,t))}}function Gu(e){kn?xn?xn.push(e):xn=[e]:kn=e}function Ju(){if(kn){var e=kn,t=xn;if(xn=kn=null,ta(e),t)for(e=0;e<t.length;e++)ta(t[e])}}function Yu(e,t){return e(t)}function Xu(){}var mi=!1;function Zu(e,t,n){if(mi)return e(t,n);mi=!0;try{return Yu(e,t,n)}finally{mi=!1,(kn!==null||xn!==null)&&(Xu(),Ju())}}function ar(e,t){var n=e.stateNode;if(n===null)return null;var r=Qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var tl=!1;if(st)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){tl=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{tl=!1}function tp(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Xn=!1,go=null,mo=!1,nl=null,np={onError:function(e){Xn=!0,go=e}};function rp(e,t,n,r,o,i,l,s,a){Xn=!1,go=null,tp.apply(np,arguments)}function op(e,t,n,r,o,i,l,s,a){if(rp.apply(this,arguments),Xn){if(Xn){var u=go;Xn=!1,go=null}else throw Error(_(198));mo||(mo=!0,nl=u)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ec(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function na(e){if(Yt(e)!==e)throw Error(_(188))}function ip(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return na(o),e;if(i===r)return na(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function tc(e){return e=ip(e),e!==null?nc(e):null}function nc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nc(e);if(t!==null)return t;e=e.sibling}return null}var rc=Te.unstable_scheduleCallback,ra=Te.unstable_cancelCallback,lp=Te.unstable_shouldYield,sp=Te.unstable_requestPaint,X=Te.unstable_now,ap=Te.unstable_getCurrentPriorityLevel,Yl=Te.unstable_ImmediatePriority,oc=Te.unstable_UserBlockingPriority,ho=Te.unstable_NormalPriority,up=Te.unstable_LowPriority,ic=Te.unstable_IdlePriority,Bo=null,Ze=null;function cp(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Bo,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:pp,dp=Math.log,fp=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(dp(e)/fp|0)|0}var Dr=64,zr=4194304;function qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=qn(s):(i&=l,i!==0&&(r=qn(i)))}else l=n&~o,l!==0?r=qn(l):i!==0&&(r=qn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),o=1<<n,r|=e[n],t&=~o;return r}function gp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-We(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=gp(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lc(){var e=Dr;return Dr<<=1,!(Dr&4194240)&&(Dr=64),e}function hi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function hp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-We(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var z=0;function sc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ac,Zl,uc,cc,dc,ol=!1,Ur=[],wt=null,Pt=null,Ct=null,ur=new Map,cr=new Map,yt=[],yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oa(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(t.pointerId)}}function zn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Nr(t),t!==null&&Zl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vp(e,t,n,r,o){switch(t){case"focusin":return wt=zn(wt,e,t,n,r,o),!0;case"dragenter":return Pt=zn(Pt,e,t,n,r,o),!0;case"mouseover":return Ct=zn(Ct,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ur.set(i,zn(ur.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,cr.set(i,zn(cr.get(i)||null,e,t,n,r,o)),!0}return!1}function fc(e){var t=Ut(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=ec(n),t!==null){e.blockedOn=t,dc(e.priority,function(){uc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zi=r,n.target.dispatchEvent(r),Zi=null}else return t=Nr(n),t!==null&&Zl(t),e.blockedOn=n,!1;t.shift()}return!0}function ia(e,t,n){no(e)&&n.delete(t)}function Sp(){ol=!1,wt!==null&&no(wt)&&(wt=null),Pt!==null&&no(Pt)&&(Pt=null),Ct!==null&&no(Ct)&&(Ct=null),ur.forEach(ia),cr.forEach(ia)}function Un(e,t){e.blockedOn===t&&(e.blockedOn=null,ol||(ol=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Sp)))}function dr(e){function t(o){return Un(o,e)}if(0<Ur.length){Un(Ur[0],e);for(var n=1;n<Ur.length;n++){var r=Ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&Un(wt,e),Pt!==null&&Un(Pt,e),Ct!==null&&Un(Ct,e),ur.forEach(t),cr.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)fc(n),n.blockedOn===null&&yt.shift()}var wn=dt.ReactCurrentBatchConfig,vo=!0;function kp(e,t,n,r){var o=z,i=wn.transition;wn.transition=null;try{z=1,es(e,t,n,r)}finally{z=o,wn.transition=i}}function xp(e,t,n,r){var o=z,i=wn.transition;wn.transition=null;try{z=4,es(e,t,n,r)}finally{z=o,wn.transition=i}}function es(e,t,n,r){if(vo){var o=il(e,t,n,r);if(o===null)Ri(e,t,r,So,n),oa(e,r);else if(vp(o,e,t,n,r))r.stopPropagation();else if(oa(e,r),t&4&&-1<yp.indexOf(e)){for(;o!==null;){var i=Nr(o);if(i!==null&&ac(i),i=il(e,t,n,r),i===null&&Ri(e,t,r,So,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ri(e,t,r,null,n)}}var So=null;function il(e,t,n,r){if(So=null,e=Jl(r),e=Ut(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ec(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return So=e,null}function pc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ap()){case Yl:return 1;case oc:return 4;case ho:case up:return 16;case ic:return 536870912;default:return 16}default:return 16}}var St=null,ts=null,ro=null;function gc(){if(ro)return ro;var e,t=ts,n=t.length,r,o="value"in St?St.value:St.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ro=o.slice(e,1<r?1-r:void 0)}function oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function la(){return!1}function Le(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Br:la,this.isPropagationStopped=la,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=Le(On),jr=J({},On,{view:0,detail:0}),wp=Le(jr),yi,vi,Bn,Vo=J({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(yi=e.screenX-Bn.screenX,vi=e.screenY-Bn.screenY):vi=yi=0,Bn=e),yi)},movementY:function(e){return"movementY"in e?e.movementY:vi}}),sa=Le(Vo),Pp=J({},Vo,{dataTransfer:0}),Cp=Le(Pp),_p=J({},jr,{relatedTarget:0}),Si=Le(_p),Rp=J({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Ep=Le(Rp),bp=J({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jp=Le(bp),Np=J({},On,{data:0}),aa=Le(Np),$p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Op={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Op[e])?!!t[e]:!1}function rs(){return Lp}var Mp=J({},jr,{key:function(e){if(e.key){var t=$p[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ap=Le(Mp),Ip=J({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ua=Le(Ip),Dp=J({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),zp=Le(Dp),Up=J({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bp=Le(Up),Vp=J({},Vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fp=Le(Vp),Hp=[9,13,27,32],os=st&&"CompositionEvent"in window,Zn=null;st&&"documentMode"in document&&(Zn=document.documentMode);var Qp=st&&"TextEvent"in window&&!Zn,mc=st&&(!os||Zn&&8<Zn&&11>=Zn),ca=" ",da=!1;function hc(e,t){switch(e){case"keyup":return Hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var un=!1;function Kp(e,t){switch(e){case"compositionend":return yc(t);case"keypress":return t.which!==32?null:(da=!0,ca);case"textInput":return e=t.data,e===ca&&da?null:e;default:return null}}function Wp(e,t){if(un)return e==="compositionend"||!os&&hc(e,t)?(e=gc(),ro=ts=St=null,un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mc&&t.locale!=="ko"?null:t.data;default:return null}}var qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qp[e.type]:t==="textarea"}function vc(e,t,n,r){Gu(r),t=ko(t,"onChange"),0<t.length&&(n=new ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var er=null,fr=null;function Gp(e){jc(e,0)}function Fo(e){var t=fn(e);if(Vu(t))return e}function Jp(e,t){if(e==="change")return t}var Sc=!1;if(st){var ki;if(st){var xi="oninput"in document;if(!xi){var pa=document.createElement("div");pa.setAttribute("oninput","return;"),xi=typeof pa.oninput=="function"}ki=xi}else ki=!1;Sc=ki&&(!document.documentMode||9<document.documentMode)}function ga(){er&&(er.detachEvent("onpropertychange",kc),fr=er=null)}function kc(e){if(e.propertyName==="value"&&Fo(fr)){var t=[];vc(t,fr,e,Jl(e)),Zu(Gp,t)}}function Yp(e,t,n){e==="focusin"?(ga(),er=t,fr=n,er.attachEvent("onpropertychange",kc)):e==="focusout"&&ga()}function Xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(fr)}function Zp(e,t){if(e==="click")return Fo(t)}function eg(e,t){if(e==="input"||e==="change")return Fo(t)}function tg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:tg;function pr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Bi.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ha(e,t){var n=ma(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ma(n)}}function xc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wc(){for(var e=window,t=po();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=po(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ng(e){var t=wc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xc(n.ownerDocument.documentElement,n)){if(r!==null&&is(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ha(n,i);var l=ha(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rg=st&&"documentMode"in document&&11>=document.documentMode,cn=null,ll=null,tr=null,sl=!1;function ya(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sl||cn==null||cn!==po(r)||(r=cn,"selectionStart"in r&&is(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tr&&pr(tr,r)||(tr=r,r=ko(ll,"onSelect"),0<r.length&&(t=new ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cn)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:Vr("Animation","AnimationEnd"),animationiteration:Vr("Animation","AnimationIteration"),animationstart:Vr("Animation","AnimationStart"),transitionend:Vr("Transition","TransitionEnd")},wi={},Pc={};st&&(Pc=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Ho(e){if(wi[e])return wi[e];if(!dn[e])return e;var t=dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pc)return wi[e]=t[n];return e}var Cc=Ho("animationend"),_c=Ho("animationiteration"),Rc=Ho("animationstart"),Ec=Ho("transitionend"),bc=new Map,va="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){bc.set(e,t),Jt(t,[e])}for(var Pi=0;Pi<va.length;Pi++){var Ci=va[Pi],og=Ci.toLowerCase(),ig=Ci[0].toUpperCase()+Ci.slice(1);Ot(og,"on"+ig)}Ot(Cc,"onAnimationEnd");Ot(_c,"onAnimationIteration");Ot(Rc,"onAnimationStart");Ot("dblclick","onDoubleClick");Ot("focusin","onFocus");Ot("focusout","onBlur");Ot(Ec,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gn));function Sa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,op(r,t,void 0,e),e.currentTarget=null}function jc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Sa(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Sa(o,s,u),i=a}}}if(mo)throw e=nl,mo=!1,nl=null,e}function F(e,t){var n=t[fl];n===void 0&&(n=t[fl]=new Set);var r=e+"__bubble";n.has(r)||(Nc(t,e,2,!1),n.add(r))}function _i(e,t,n){var r=0;t&&(r|=4),Nc(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function gr(e){if(!e[Fr]){e[Fr]=!0,Iu.forEach(function(n){n!=="selectionchange"&&(lg.has(n)||_i(n,!1,e),_i(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,_i("selectionchange",!1,t))}}function Nc(e,t,n,r){switch(pc(t)){case 1:var o=kp;break;case 4:o=xp;break;default:o=es}n=o.bind(null,t,n,e),o=void 0,!tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ri(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Ut(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Zu(function(){var u=i,d=Jl(n),p=[];e:{var m=bc.get(e);if(m!==void 0){var y=ns,S=e;switch(e){case"keypress":if(oo(n)===0)break e;case"keydown":case"keyup":y=Ap;break;case"focusin":S="focus",y=Si;break;case"focusout":S="blur",y=Si;break;case"beforeblur":case"afterblur":y=Si;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=zp;break;case Cc:case _c:case Rc:y=Ep;break;case Ec:y=Bp;break;case"scroll":y=wp;break;case"wheel":y=Fp;break;case"copy":case"cut":case"paste":y=jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ua}var v=(t&4)!==0,x=!v&&e==="scroll",g=v?m!==null?m+"Capture":null:m;v=[];for(var f=u,h;f!==null;){h=f;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,g!==null&&(w=ar(f,g),w!=null&&v.push(mr(f,w,h)))),x)break;f=f.return}0<v.length&&(m=new y(m,S,null,n,d),p.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Zi&&(S=n.relatedTarget||n.fromElement)&&(Ut(S)||S[at]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=u,S=S?Ut(S):null,S!==null&&(x=Yt(S),S!==x||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=u),y!==S)){if(v=sa,w="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=ua,w="onPointerLeave",g="onPointerEnter",f="pointer"),x=y==null?m:fn(y),h=S==null?m:fn(S),m=new v(w,f+"leave",y,n,d),m.target=x,m.relatedTarget=h,w=null,Ut(d)===u&&(v=new v(g,f+"enter",S,n,d),v.target=h,v.relatedTarget=x,w=v),x=w,y&&S)t:{for(v=y,g=S,f=0,h=v;h;h=en(h))f++;for(h=0,w=g;w;w=en(w))h++;for(;0<f-h;)v=en(v),f--;for(;0<h-f;)g=en(g),h--;for(;f--;){if(v===g||g!==null&&v===g.alternate)break t;v=en(v),g=en(g)}v=null}else v=null;y!==null&&ka(p,m,y,v,!1),S!==null&&x!==null&&ka(p,x,S,v,!0)}}e:{if(m=u?fn(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var C=Jp;else if(fa(m))if(Sc)C=eg;else{C=Xp;var R=Yp}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=Zp);if(C&&(C=C(e,u))){vc(p,C,n,d);break e}R&&R(e,m,u),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&qi(m,"number",m.value)}switch(R=u?fn(u):window,e){case"focusin":(fa(R)||R.contentEditable==="true")&&(cn=R,ll=u,tr=null);break;case"focusout":tr=ll=cn=null;break;case"mousedown":sl=!0;break;case"contextmenu":case"mouseup":case"dragend":sl=!1,ya(p,n,d);break;case"selectionchange":if(rg)break;case"keydown":case"keyup":ya(p,n,d)}var E;if(os)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else un?hc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(mc&&n.locale!=="ko"&&(un||P!=="onCompositionStart"?P==="onCompositionEnd"&&un&&(E=gc()):(St=d,ts="value"in St?St.value:St.textContent,un=!0)),R=ko(u,P),0<R.length&&(P=new aa(P,e,null,n,d),p.push({event:P,listeners:R}),E?P.data=E:(E=yc(n),E!==null&&(P.data=E)))),(E=Qp?Kp(e,n):Wp(e,n))&&(u=ko(u,"onBeforeInput"),0<u.length&&(d=new aa("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=E))}jc(p,t)})}function mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ar(e,n),i!=null&&r.unshift(mr(e,i,o)),i=ar(e,t),i!=null&&r.push(mr(e,i,o))),e=e.return}return r}function en(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ka(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=ar(n,i),a!=null&&l.unshift(mr(n,a,s))):o||(a=ar(n,i),a!=null&&l.push(mr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var sg=/\r\n?/g,ag=/\u0000|\uFFFD/g;function xa(e){return(typeof e=="string"?e:""+e).replace(sg,`
`).replace(ag,"")}function Hr(e,t,n){if(t=xa(t),xa(e)!==t&&n)throw Error(_(425))}function xo(){}var al=null,ul=null;function cl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dl=typeof setTimeout=="function"?setTimeout:void 0,ug=typeof clearTimeout=="function"?clearTimeout:void 0,wa=typeof Promise=="function"?Promise:void 0,cg=typeof queueMicrotask=="function"?queueMicrotask:typeof wa<"u"?function(e){return wa.resolve(null).then(e).catch(dg)}:dl;function dg(e){setTimeout(function(){throw e})}function Ei(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);dr(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Ln,hr="__reactProps$"+Ln,at="__reactContainer$"+Ln,fl="__reactEvents$"+Ln,fg="__reactListeners$"+Ln,pg="__reactHandles$"+Ln;function Ut(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pa(e);e!==null;){if(n=e[Xe])return n;e=Pa(e)}return t}e=n,n=e.parentNode}return null}function Nr(e){return e=e[Xe]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Qo(e){return e[hr]||null}var pl=[],pn=-1;function Lt(e){return{current:e}}function H(e){0>pn||(e.current=pl[pn],pl[pn]=null,pn--)}function V(e,t){pn++,pl[pn]=e.current,e.current=t}var Tt={},ge=Lt(Tt),Pe=Lt(!1),Qt=Tt;function Rn(e,t){var n=e.type.contextTypes;if(!n)return Tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function wo(){H(Pe),H(ge)}function Ca(e,t,n){if(ge.current!==Tt)throw Error(_(168));V(ge,t),V(Pe,n)}function $c(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,Yf(e)||"Unknown",o));return J({},n,r)}function Po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Qt=ge.current,V(ge,e),V(Pe,Pe.current),!0}function _a(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=$c(e,t,Qt),r.__reactInternalMemoizedMergedChildContext=e,H(Pe),H(ge),V(ge,e)):H(Pe),V(Pe,n)}var nt=null,Ko=!1,bi=!1;function Tc(e){nt===null?nt=[e]:nt.push(e)}function gg(e){Ko=!0,Tc(e)}function Mt(){if(!bi&&nt!==null){bi=!0;var e=0,t=z;try{var n=nt;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,Ko=!1}catch(o){throw nt!==null&&(nt=nt.slice(e+1)),rc(Yl,Mt),o}finally{z=t,bi=!1}}return null}var gn=[],mn=0,Co=null,_o=0,Ae=[],Ie=0,Kt=null,ot=1,it="";function Dt(e,t){gn[mn++]=_o,gn[mn++]=Co,Co=e,_o=t}function Oc(e,t,n){Ae[Ie++]=ot,Ae[Ie++]=it,Ae[Ie++]=Kt,Kt=e;var r=ot;e=it;var o=32-We(r)-1;r&=~(1<<o),n+=1;var i=32-We(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ot=1<<32-We(t)+o|n<<o|r,it=i+e}else ot=1<<i|n<<o|r,it=e}function ls(e){e.return!==null&&(Dt(e,1),Oc(e,1,0))}function ss(e){for(;e===Co;)Co=gn[--mn],gn[mn]=null,_o=gn[--mn],gn[mn]=null;for(;e===Kt;)Kt=Ae[--Ie],Ae[Ie]=null,it=Ae[--Ie],Ae[Ie]=null,ot=Ae[--Ie],Ae[Ie]=null}var $e=null,Ne=null,Q=!1,Ke=null;function Lc(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ra(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Ne=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kt!==null?{id:ot,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Ne=null,!0):!1;default:return!1}}function gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ml(e){if(Q){var t=Ne;if(t){var n=t;if(!Ra(e,t)){if(gl(e))throw Error(_(418));t=_t(n.nextSibling);var r=$e;t&&Ra(e,t)?Lc(r,n):(e.flags=e.flags&-4097|2,Q=!1,$e=e)}}else{if(gl(e))throw Error(_(418));e.flags=e.flags&-4097|2,Q=!1,$e=e}}}function Ea(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Qr(e){if(e!==$e)return!1;if(!Q)return Ea(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cl(e.type,e.memoizedProps)),t&&(t=Ne)){if(gl(e))throw Mc(),Error(_(418));for(;t;)Lc(e,t),t=_t(t.nextSibling)}if(Ea(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=$e?_t(e.stateNode.nextSibling):null;return!0}function Mc(){for(var e=Ne;e;)e=_t(e.nextSibling)}function En(){Ne=$e=null,Q=!1}function as(e){Ke===null?Ke=[e]:Ke.push(e)}var mg=dt.ReactCurrentBatchConfig;function Vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Kr(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){var t=e._init;return t(e._payload)}function Ac(e){function t(g,f){if(e){var h=g.deletions;h===null?(g.deletions=[f],g.flags|=16):h.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=jt(g,f),g.index=0,g.sibling=null,g}function i(g,f,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<f?(g.flags|=2,f):h):(g.flags|=2,f)):(g.flags|=1048576,f)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,f,h,w){return f===null||f.tag!==6?(f=Mi(h,g.mode,w),f.return=g,f):(f=o(f,h),f.return=g,f)}function a(g,f,h,w){var C=h.type;return C===an?d(g,f,h.props.children,w,h.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===mt&&ba(C)===f.type)?(w=o(f,h.props),w.ref=Vn(g,f,h),w.return=g,w):(w=fo(h.type,h.key,h.props,null,g.mode,w),w.ref=Vn(g,f,h),w.return=g,w)}function u(g,f,h,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Ai(h,g.mode,w),f.return=g,f):(f=o(f,h.children||[]),f.return=g,f)}function d(g,f,h,w,C){return f===null||f.tag!==7?(f=Ht(h,g.mode,w,C),f.return=g,f):(f=o(f,h),f.return=g,f)}function p(g,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Mi(""+f,g.mode,h),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Mr:return h=fo(f.type,f.key,f.props,null,g.mode,h),h.ref=Vn(g,null,f),h.return=g,h;case sn:return f=Ai(f,g.mode,h),f.return=g,f;case mt:var w=f._init;return p(g,w(f._payload),h)}if(Wn(f)||In(f))return f=Ht(f,g.mode,h,null),f.return=g,f;Kr(g,f)}return null}function m(g,f,h,w){var C=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:s(g,f,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Mr:return h.key===C?a(g,f,h,w):null;case sn:return h.key===C?u(g,f,h,w):null;case mt:return C=h._init,m(g,f,C(h._payload),w)}if(Wn(h)||In(h))return C!==null?null:d(g,f,h,w,null);Kr(g,h)}return null}function y(g,f,h,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(h)||null,s(f,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Mr:return g=g.get(w.key===null?h:w.key)||null,a(f,g,w,C);case sn:return g=g.get(w.key===null?h:w.key)||null,u(f,g,w,C);case mt:var R=w._init;return y(g,f,h,R(w._payload),C)}if(Wn(w)||In(w))return g=g.get(h)||null,d(f,g,w,C,null);Kr(f,w)}return null}function S(g,f,h,w){for(var C=null,R=null,E=f,P=f=0,O=null;E!==null&&P<h.length;P++){E.index>P?(O=E,E=null):O=E.sibling;var $=m(g,E,h[P],w);if($===null){E===null&&(E=O);break}e&&E&&$.alternate===null&&t(g,E),f=i($,f,P),R===null?C=$:R.sibling=$,R=$,E=O}if(P===h.length)return n(g,E),Q&&Dt(g,P),C;if(E===null){for(;P<h.length;P++)E=p(g,h[P],w),E!==null&&(f=i(E,f,P),R===null?C=E:R.sibling=E,R=E);return Q&&Dt(g,P),C}for(E=r(g,E);P<h.length;P++)O=y(E,g,P,h[P],w),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?P:O.key),f=i(O,f,P),R===null?C=O:R.sibling=O,R=O);return e&&E.forEach(function(W){return t(g,W)}),Q&&Dt(g,P),C}function v(g,f,h,w){var C=In(h);if(typeof C!="function")throw Error(_(150));if(h=C.call(h),h==null)throw Error(_(151));for(var R=C=null,E=f,P=f=0,O=null,$=h.next();E!==null&&!$.done;P++,$=h.next()){E.index>P?(O=E,E=null):O=E.sibling;var W=m(g,E,$.value,w);if(W===null){E===null&&(E=O);break}e&&E&&W.alternate===null&&t(g,E),f=i(W,f,P),R===null?C=W:R.sibling=W,R=W,E=O}if($.done)return n(g,E),Q&&Dt(g,P),C;if(E===null){for(;!$.done;P++,$=h.next())$=p(g,$.value,w),$!==null&&(f=i($,f,P),R===null?C=$:R.sibling=$,R=$);return Q&&Dt(g,P),C}for(E=r(g,E);!$.done;P++,$=h.next())$=y(E,g,P,$.value,w),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?P:$.key),f=i($,f,P),R===null?C=$:R.sibling=$,R=$);return e&&E.forEach(function(Se){return t(g,Se)}),Q&&Dt(g,P),C}function x(g,f,h,w){if(typeof h=="object"&&h!==null&&h.type===an&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Mr:e:{for(var C=h.key,R=f;R!==null;){if(R.key===C){if(C=h.type,C===an){if(R.tag===7){n(g,R.sibling),f=o(R,h.props.children),f.return=g,g=f;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===mt&&ba(C)===R.type){n(g,R.sibling),f=o(R,h.props),f.ref=Vn(g,R,h),f.return=g,g=f;break e}n(g,R);break}else t(g,R);R=R.sibling}h.type===an?(f=Ht(h.props.children,g.mode,w,h.key),f.return=g,g=f):(w=fo(h.type,h.key,h.props,null,g.mode,w),w.ref=Vn(g,f,h),w.return=g,g=w)}return l(g);case sn:e:{for(R=h.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(g,f.sibling),f=o(f,h.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=Ai(h,g.mode,w),f.return=g,g=f}return l(g);case mt:return R=h._init,x(g,f,R(h._payload),w)}if(Wn(h))return S(g,f,h,w);if(In(h))return v(g,f,h,w);Kr(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(g,f.sibling),f=o(f,h),f.return=g,g=f):(n(g,f),f=Mi(h,g.mode,w),f.return=g,g=f),l(g)):n(g,f)}return x}var bn=Ac(!0),Ic=Ac(!1),Ro=Lt(null),Eo=null,hn=null,us=null;function cs(){us=hn=Eo=null}function ds(e){var t=Ro.current;H(Ro),e._currentValue=t}function hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){Eo=e,us=hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(us!==e)if(e={context:e,memoizedValue:t,next:null},hn===null){if(Eo===null)throw Error(_(308));hn=e,Eo.dependencies={lanes:0,firstContext:e}}else hn=hn.next=e;return t}var Bt=null;function fs(e){Bt===null?Bt=[e]:Bt.push(e)}function Dc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,fs(t)):(n.next=o.next,o.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ht=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ut(e,n)}return o=r.interleaved,o===null?(t.next=t,fs(r)):(t.next=o.next,o.next=t),r.interleaved=t,ut(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}function ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var o=e.updateQueue;ht=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(i!==null){var p=o.baseState;l=0,d=u=a=null,s=i;do{var m=s.lane,y=s.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,v=s;switch(m=t,y=n,v.tag){case 1:if(S=v.payload,typeof S=="function"){p=S.call(y,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=v.payload,m=typeof S=="function"?S.call(y,p,m):S,m==null)break e;p=J({},p,m);break e;case 2:ht=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=y,a=p):d=d.next=y,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(d===null&&(a=p),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);qt|=l,e.lanes=l,e.memoizedState=p}}function Na(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var $r={},et=Lt($r),yr=Lt($r),vr=Lt($r);function Vt(e){if(e===$r)throw Error(_(174));return e}function gs(e,t){switch(V(vr,t),V(yr,e),V(et,$r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ji(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ji(t,e)}H(et),V(et,t)}function jn(){H(et),H(yr),H(vr)}function Uc(e){Vt(vr.current);var t=Vt(et.current),n=Ji(t,e.type);t!==n&&(V(yr,e),V(et,n))}function ms(e){yr.current===e&&(H(et),H(yr))}var q=Lt(0);function jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ji=[];function hs(){for(var e=0;e<ji.length;e++)ji[e]._workInProgressVersionPrimary=null;ji.length=0}var lo=dt.ReactCurrentDispatcher,Ni=dt.ReactCurrentBatchConfig,Wt=0,G=null,ne=null,ie=null,No=!1,nr=!1,Sr=0,hg=0;function de(){throw Error(_(321))}function ys(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function vs(e,t,n,r,o,i){if(Wt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,lo.current=e===null||e.memoizedState===null?kg:xg,e=n(r,o),nr){i=0;do{if(nr=!1,Sr=0,25<=i)throw Error(_(301));i+=1,ie=ne=null,t.updateQueue=null,lo.current=wg,e=n(r,o)}while(nr)}if(lo.current=$o,t=ne!==null&&ne.next!==null,Wt=0,ie=ne=G=null,No=!1,t)throw Error(_(300));return e}function Ss(){var e=Sr!==0;return Sr=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?G.memoizedState=ie=e:ie=ie.next=e,ie}function Be(){if(ne===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?G.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(_(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?G.memoizedState=ie=e:ie=ie.next=e}return ie}function kr(e,t){return typeof t=="function"?t(e):t}function $i(e){var t=Be(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var d=u.lane;if((Wt&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=p,l=r):a=a.next=p,G.lanes|=d,qt|=d}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,Ge(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,qt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ti(e){var t=Be(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ge(i,t.memoizedState)||(we=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Bc(){}function Vc(e,t){var n=G,r=Be(),o=t(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,we=!0),r=r.queue,ks(Qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,xr(9,Hc.bind(null,n,r,o,t),void 0,null),le===null)throw Error(_(349));Wt&30||Fc(n,t,o)}return o}function Fc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hc(e,t,n,r){t.value=n,t.getSnapshot=r,Kc(t)&&Wc(e)}function Qc(e,t,n){return n(function(){Kc(t)&&Wc(e)})}function Kc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Wc(e){var t=ut(e,1);t!==null&&qe(t,e,1,-1)}function $a(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:e},t.queue=e,e=e.dispatch=Sg.bind(null,G,e),[t.memoizedState,e]}function xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qc(){return Be().memoizedState}function so(e,t,n,r){var o=Ye();G.flags|=e,o.memoizedState=xr(1|t,n,void 0,r===void 0?null:r)}function Wo(e,t,n,r){var o=Be();r=r===void 0?null:r;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,r!==null&&ys(r,l.deps)){o.memoizedState=xr(t,n,i,r);return}}G.flags|=e,o.memoizedState=xr(1|t,n,i,r)}function Ta(e,t){return so(8390656,8,e,t)}function ks(e,t){return Wo(2048,8,e,t)}function Gc(e,t){return Wo(4,2,e,t)}function Jc(e,t){return Wo(4,4,e,t)}function Yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xc(e,t,n){return n=n!=null?n.concat([e]):null,Wo(4,4,Yc.bind(null,t,e),n)}function xs(){}function Zc(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ed(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function td(e,t,n){return Wt&21?(Ge(n,t)||(n=lc(),G.lanes|=n,qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function yg(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=Ni.transition;Ni.transition={};try{e(!1),t()}finally{z=n,Ni.transition=r}}function nd(){return Be().memoizedState}function vg(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rd(e))od(t,n);else if(n=Dc(e,t,n,r),n!==null){var o=he();qe(n,e,r,o),id(n,t,r)}}function Sg(e,t,n){var r=bt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rd(e))od(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Ge(s,l)){var a=t.interleaved;a===null?(o.next=o,fs(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Dc(e,t,o,r),n!==null&&(o=he(),qe(n,e,r,o),id(n,t,r))}}function rd(e){var t=e.alternate;return e===G||t!==null&&t===G}function od(e,t){nr=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function id(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}var $o={readContext:Ue,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},kg={readContext:Ue,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Ta,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,so(4194308,4,Yc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return so(4194308,4,e,t)},useInsertionEffect:function(e,t){return so(4,2,e,t)},useMemo:function(e,t){var n=Ye();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ye();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vg.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:$a,useDebugValue:xs,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=$a(!1),t=e[0];return e=yg.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=Ye();if(Q){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),le===null)throw Error(_(349));Wt&30||Fc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ta(Qc.bind(null,r,i,e),[e]),r.flags|=2048,xr(9,Hc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ye(),t=le.identifierPrefix;if(Q){var n=it,r=ot;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xg={readContext:Ue,useCallback:Zc,useContext:Ue,useEffect:ks,useImperativeHandle:Xc,useInsertionEffect:Gc,useLayoutEffect:Jc,useMemo:ed,useReducer:$i,useRef:qc,useState:function(){return $i(kr)},useDebugValue:xs,useDeferredValue:function(e){var t=Be();return td(t,ne.memoizedState,e)},useTransition:function(){var e=$i(kr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Bc,useSyncExternalStore:Vc,useId:nd,unstable_isNewReconciler:!1},wg={readContext:Ue,useCallback:Zc,useContext:Ue,useEffect:ks,useImperativeHandle:Xc,useInsertionEffect:Gc,useLayoutEffect:Jc,useMemo:ed,useReducer:Ti,useRef:qc,useState:function(){return Ti(kr)},useDebugValue:xs,useDeferredValue:function(e){var t=Be();return ne===null?t.memoizedState=e:td(t,ne.memoizedState,e)},useTransition:function(){var e=Ti(kr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Bc,useSyncExternalStore:Vc,useId:nd,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function yl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qo={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),o=bt(e),i=lt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,o),t!==null&&(qe(t,e,o,r),io(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),o=bt(e),i=lt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,o),t!==null&&(qe(t,e,o,r),io(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=bt(e),o=lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Rt(e,o,r),t!==null&&(qe(t,e,r,n),io(t,e,r))}};function Oa(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!pr(n,r)||!pr(o,i):!0}function ld(e,t,n){var r=!1,o=Tt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ue(i):(o=Ce(t)?Qt:ge.current,r=t.contextTypes,i=(r=r!=null)?Rn(e,o):Tt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function La(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qo.enqueueReplaceState(t,t.state,null)}function vl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ps(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ue(i):(i=Ce(t)?Qt:ge.current,o.context=Rn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(yl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&qo.enqueueReplaceState(o,o.state,null),bo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t){try{var n="",r=t;do n+=Jf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Oi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pg=typeof WeakMap=="function"?WeakMap:Map;function sd(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oo||(Oo=!0,jl=r),Sl(e,t)},n}function ad(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Sl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Sl(e,t),typeof r!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ma(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ig.bind(null,e,t,n),t.then(e,e))}function Aa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ia(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var Cg=dt.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?Ic(t,null,n,r):bn(t,e.child,n,r)}function Da(e,t,n,r,o){n=n.render;var i=t.ref;return Pn(t,o),r=vs(e,t,n,r,i,o),n=Ss(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(Q&&n&&ls(t),t.flags|=1,me(e,t,r,o),t.child)}function za(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!js(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ud(e,t,i,r,o)):(e=fo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:pr,n(l,r)&&e.ref===t.ref)return ct(e,t,o)}return t.flags|=1,e=jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function ud(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(pr(i,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,ct(e,t,o)}return kl(e,t,n,r,o)}function cd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(vn,je),je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(vn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(vn,je),je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(vn,je),je|=r;return me(e,t,o,n),t.child}function dd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kl(e,t,n,r,o){var i=Ce(n)?Qt:ge.current;return i=Rn(t,i),Pn(t,o),n=vs(e,t,n,r,i,o),r=Ss(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(Q&&r&&ls(t),t.flags|=1,me(e,t,n,o),t.child)}function Ua(e,t,n,r,o){if(Ce(n)){var i=!0;Po(t)}else i=!1;if(Pn(t,o),t.stateNode===null)ao(e,t),ld(t,n,r),vl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Ce(n)?Qt:ge.current,u=Rn(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&La(t,l,r,u),ht=!1;var m=t.memoizedState;l.state=m,bo(t,r,l,o),a=t.memoizedState,s!==r||m!==a||Pe.current||ht?(typeof d=="function"&&(yl(t,n,d,r),a=t.memoizedState),(s=ht||Oa(t,n,s,r,m,a,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,zc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:He(t.type,s),l.props=u,p=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ue(a):(a=Ce(n)?Qt:ge.current,a=Rn(t,a));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==p||m!==a)&&La(t,l,r,a),ht=!1,m=t.memoizedState,l.state=m,bo(t,r,l,o);var S=t.memoizedState;s!==p||m!==S||Pe.current||ht?(typeof y=="function"&&(yl(t,n,y,r),S=t.memoizedState),(u=ht||Oa(t,n,u,r,m,S,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return xl(e,t,n,r,i,o)}function xl(e,t,n,r,o,i){dd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&_a(t,n,!1),ct(e,t,i);r=t.stateNode,Cg.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=bn(t,e.child,null,i),t.child=bn(t,null,s,i)):me(e,t,s,i),t.memoizedState=r.state,o&&_a(t,n,!0),t.child}function fd(e){var t=e.stateNode;t.pendingContext?Ca(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ca(e,t.context,!1),gs(e,t.containerInfo)}function Ba(e,t,n,r,o){return En(),as(o),t.flags|=256,me(e,t,n,r),t.child}var wl={dehydrated:null,treeContext:null,retryLane:0};function Pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function pd(e,t,n){var r=t.pendingProps,o=q.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(q,o&1),e===null)return ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Yo(l,r,0,null),e=Ht(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Pl(n),t.memoizedState=wl,e):ws(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return _g(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=jt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=jt(s,i):(i=Ht(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Pl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=wl,r}return i=e.child,e=i.sibling,r=jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ws(e,t){return t=Yo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wr(e,t,n,r){return r!==null&&as(r),bn(t,e.child,null,n),e=ws(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _g(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Oi(Error(_(422))),Wr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Yo({mode:"visible",children:r.children},o,0,null),i=Ht(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&bn(t,e.child,null,l),t.child.memoizedState=Pl(l),t.memoizedState=wl,i);if(!(t.mode&1))return Wr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=Oi(i,r,void 0),Wr(e,t,l,r)}if(s=(l&e.childLanes)!==0,we||s){if(r=le,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ut(e,o),qe(r,e,o,-1))}return bs(),r=Oi(Error(_(421))),Wr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Dg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ne=_t(o.nextSibling),$e=t,Q=!0,Ke=null,e!==null&&(Ae[Ie++]=ot,Ae[Ie++]=it,Ae[Ie++]=Kt,ot=e.id,it=e.overflow,Kt=t),t=ws(t,r.children),t.flags|=4096,t)}function Va(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hl(e.return,t,n)}function Li(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function gd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(me(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Va(e,n,t);else if(e.tag===19)Va(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&jo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Li(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&jo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Li(t,!0,n,null,i);break;case"together":Li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ao(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rg(e,t,n){switch(t.tag){case 3:fd(t),En();break;case 5:Uc(t);break;case 1:Ce(t.type)&&Po(t);break;case 4:gs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(Ro,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?pd(e,t,n):(V(q,q.current&1),e=ct(e,t,n),e!==null?e.sibling:null);V(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,cd(e,t,n)}return ct(e,t,n)}var md,Cl,hd,yd;md=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cl=function(){};hd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Vt(et.current);var i=null;switch(n){case"input":o=Ki(e,o),r=Ki(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=Gi(e,o),r=Gi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xo)}Yi(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&F("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};yd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Eg(e,t,n){var r=t.pendingProps;switch(ss(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ce(t.type)&&wo(),fe(t),null;case 3:return r=t.stateNode,jn(),H(Pe),H(ge),hs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(Tl(Ke),Ke=null))),Cl(e,t),fe(t),null;case 5:ms(t);var o=Vt(vr.current);if(n=t.type,e!==null&&t.stateNode!=null)hd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return fe(t),null}if(e=Vt(et.current),Qr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Xe]=t,r[hr]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(o=0;o<Gn.length;o++)F(Gn[o],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ys(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":Zs(r,i),F("invalid",r)}Yi(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,s,e),o=["children",""+s]):lr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&F("scroll",r)}switch(n){case"input":Ar(r),Xs(r,i,!0);break;case"textarea":Ar(r),ea(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Xe]=t,e[hr]=r,md(e,t,!1,!1),t.stateNode=e;e:{switch(l=Xi(n,r),n){case"dialog":F("cancel",e),F("close",e),o=r;break;case"iframe":case"object":case"embed":F("load",e),o=r;break;case"video":case"audio":for(o=0;o<Gn.length;o++)F(Gn[o],e);o=r;break;case"source":F("error",e),o=r;break;case"img":case"image":case"link":F("error",e),F("load",e),o=r;break;case"details":F("toggle",e),o=r;break;case"input":Ys(e,r),o=Ki(e,r),F("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),F("invalid",e);break;case"textarea":Zs(e,r),o=Gi(e,r),F("invalid",e);break;default:o=r}Yi(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?qu(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ku(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&sr(e,a):typeof a=="number"&&sr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&F("scroll",e):a!=null&&Kl(e,i,a,l))}switch(n){case"input":Ar(e),Xs(e,r,!1);break;case"textarea":Ar(e),ea(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Sn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)yd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Vt(vr.current),Vt(et.current),Qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return fe(t),null;case 13:if(H(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Ne!==null&&t.mode&1&&!(t.flags&128))Mc(),En(),t.flags|=98560,i=!1;else if(i=Qr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[Xe]=t}else En(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),i=!1}else Ke!==null&&(Tl(Ke),Ke=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?re===0&&(re=3):bs())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return jn(),Cl(e,t),e===null&&gr(t.stateNode.containerInfo),fe(t),null;case 10:return ds(t.type._context),fe(t),null;case 17:return Ce(t.type)&&wo(),fe(t),null;case 19:if(H(q),i=t.memoizedState,i===null)return fe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Fn(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=jo(e),l!==null){for(t.flags|=128,Fn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&X()>$n&&(t.flags|=128,r=!0,Fn(i,!1),t.lanes=4194304)}else{if(!r)if(e=jo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Q)return fe(t),null}else 2*X()-i.renderingStartTime>$n&&n!==1073741824&&(t.flags|=128,r=!0,Fn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=X(),t.sibling=null,n=q.current,V(q,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return Es(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function bg(e,t){switch(ss(t),t.tag){case 1:return Ce(t.type)&&wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),H(Pe),H(ge),hs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ms(t),null;case 13:if(H(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(q),null;case 4:return jn(),null;case 10:return ds(t.type._context),null;case 22:case 23:return Es(),null;case 24:return null;default:return null}}var qr=!1,pe=!1,jg=typeof WeakSet=="function"?WeakSet:Set,j=null;function yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function _l(e,t,n){try{n()}catch(r){Y(e,t,r)}}var Fa=!1;function Ng(e,t){if(al=vo,e=wc(),is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,d=0,p=e,m=null;t:for(;;){for(var y;p!==n||o!==0&&p.nodeType!==3||(s=l+o),p!==i||r!==0&&p.nodeType!==3||(a=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++u===o&&(s=l),m===i&&++d===r&&(a=l),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ul={focusedElem:e,selectionRange:n},vo=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var v=S.memoizedProps,x=S.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:He(t.type,v),x);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){Y(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return S=Fa,Fa=!1,S}function rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&_l(t,n,i)}o=o.next}while(o!==r)}}function Go(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vd(e){var t=e.alternate;t!==null&&(e.alternate=null,vd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[hr],delete t[fl],delete t[fg],delete t[pg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sd(e){return e.tag===5||e.tag===3||e.tag===4}function Ha(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function El(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xo));else if(r!==4&&(e=e.child,e!==null))for(El(e,t,n),e=e.sibling;e!==null;)El(e,t,n),e=e.sibling}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}var ae=null,Qe=!1;function gt(e,t,n){for(n=n.child;n!==null;)kd(e,t,n),n=n.sibling}function kd(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Bo,n)}catch{}switch(n.tag){case 5:pe||yn(n,t);case 6:var r=ae,o=Qe;ae=null,gt(e,t,n),ae=r,Qe=o,ae!==null&&(Qe?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Qe?(e=ae,n=n.stateNode,e.nodeType===8?Ei(e.parentNode,n):e.nodeType===1&&Ei(e,n),dr(e)):Ei(ae,n.stateNode));break;case 4:r=ae,o=Qe,ae=n.stateNode.containerInfo,Qe=!0,gt(e,t,n),ae=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&_l(n,t,l),o=o.next}while(o!==r)}gt(e,t,n);break;case 1:if(!pe&&(yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Y(n,t,s)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,gt(e,t,n),pe=r):gt(e,t,n);break;default:gt(e,t,n)}}function Qa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jg),t.forEach(function(r){var o=zg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Qe=!1;break e;case 3:ae=s.stateNode.containerInfo,Qe=!0;break e;case 4:ae=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(ae===null)throw Error(_(160));kd(i,l,o),ae=null,Qe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){Y(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xd(t,e),t=t.sibling}function xd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),Je(e),r&4){try{rr(3,e,e.return),Go(3,e)}catch(v){Y(e,e.return,v)}try{rr(5,e,e.return)}catch(v){Y(e,e.return,v)}}break;case 1:Fe(t,e),Je(e),r&512&&n!==null&&yn(n,n.return);break;case 5:if(Fe(t,e),Je(e),r&512&&n!==null&&yn(n,n.return),e.flags&32){var o=e.stateNode;try{sr(o,"")}catch(v){Y(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Fu(o,i),Xi(s,l);var u=Xi(s,i);for(l=0;l<a.length;l+=2){var d=a[l],p=a[l+1];d==="style"?qu(o,p):d==="dangerouslySetInnerHTML"?Ku(o,p):d==="children"?sr(o,p):Kl(o,d,p,u)}switch(s){case"input":Wi(o,i);break;case"textarea":Hu(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Sn(o,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?Sn(o,!!i.multiple,i.defaultValue,!0):Sn(o,!!i.multiple,i.multiple?[]:"",!1))}o[hr]=i}catch(v){Y(e,e.return,v)}}break;case 6:if(Fe(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){Y(e,e.return,v)}}break;case 3:if(Fe(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dr(t.containerInfo)}catch(v){Y(e,e.return,v)}break;case 4:Fe(t,e),Je(e);break;case 13:Fe(t,e),Je(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(_s=X())),r&4&&Qa(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||d,Fe(t,e),pe=u):Fe(t,e),Je(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(j=e,d=e.child;d!==null;){for(p=j=d;j!==null;){switch(m=j,y=m.child,m.tag){case 0:case 11:case 14:case 15:rr(4,m,m.return);break;case 1:yn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(v){Y(r,n,v)}}break;case 5:yn(m,m.return);break;case 22:if(m.memoizedState!==null){Wa(p);continue}}y!==null?(y.return=m,j=y):Wa(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,a=p.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Wu("display",l))}catch(v){Y(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){Y(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Fe(t,e),Je(e),r&4&&Qa(e);break;case 21:break;default:Fe(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sd(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(sr(o,""),r.flags&=-33);var i=Ha(e);bl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Ha(e);El(e,s,l);break;default:throw Error(_(161))}}catch(a){Y(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $g(e,t,n){j=e,wd(e)}function wd(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||qr;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||pe;s=qr;var u=pe;if(qr=l,(pe=a)&&!u)for(j=o;j!==null;)l=j,a=l.child,l.tag===22&&l.memoizedState!==null?qa(o):a!==null?(a.return=l,j=a):qa(o);for(;i!==null;)j=i,wd(i),i=i.sibling;j=o,qr=s,pe=u}Ka(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,j=i):Ka(e)}}function Ka(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Go(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Na(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Na(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&dr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}pe||t.flags&512&&Rl(t)}catch(m){Y(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Wa(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function qa(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Go(4,t)}catch(a){Y(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){Y(t,o,a)}}var i=t.return;try{Rl(t)}catch(a){Y(t,i,a)}break;case 5:var l=t.return;try{Rl(t)}catch(a){Y(t,l,a)}}}catch(a){Y(t,t.return,a)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var Tg=Math.ceil,To=dt.ReactCurrentDispatcher,Ps=dt.ReactCurrentOwner,ze=dt.ReactCurrentBatchConfig,I=0,le=null,te=null,ue=0,je=0,vn=Lt(0),re=0,wr=null,qt=0,Jo=0,Cs=0,or=null,xe=null,_s=0,$n=1/0,tt=null,Oo=!1,jl=null,Et=null,Gr=!1,kt=null,Lo=0,ir=0,Nl=null,uo=-1,co=0;function he(){return I&6?X():uo!==-1?uo:uo=X()}function bt(e){return e.mode&1?I&2&&ue!==0?ue&-ue:mg.transition!==null?(co===0&&(co=lc()),co):(e=z,e!==0||(e=window.event,e=e===void 0?16:pc(e.type)),e):1}function qe(e,t,n,r){if(50<ir)throw ir=0,Nl=null,Error(_(185));br(e,n,r),(!(I&2)||e!==le)&&(e===le&&(!(I&2)&&(Jo|=n),re===4&&vt(e,ue)),_e(e,r),n===1&&I===0&&!(t.mode&1)&&($n=X()+500,Ko&&Mt()))}function _e(e,t){var n=e.callbackNode;mp(e,t);var r=yo(e,e===le?ue:0);if(r===0)n!==null&&ra(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ra(n),t===1)e.tag===0?gg(Ga.bind(null,e)):Tc(Ga.bind(null,e)),cg(function(){!(I&6)&&Mt()}),n=null;else{switch(sc(r)){case 1:n=Yl;break;case 4:n=oc;break;case 16:n=ho;break;case 536870912:n=ic;break;default:n=ho}n=Nd(n,Pd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pd(e,t){if(uo=-1,co=0,I&6)throw Error(_(327));var n=e.callbackNode;if(Cn()&&e.callbackNode!==n)return null;var r=yo(e,e===le?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Mo(e,r);else{t=r;var o=I;I|=2;var i=_d();(le!==e||ue!==t)&&(tt=null,$n=X()+500,Ft(e,t));do try{Mg();break}catch(s){Cd(e,s)}while(!0);cs(),To.current=i,I=o,te!==null?t=0:(le=null,ue=0,t=re)}if(t!==0){if(t===2&&(o=rl(e),o!==0&&(r=o,t=$l(e,o))),t===1)throw n=wr,Ft(e,0),vt(e,r),_e(e,X()),n;if(t===6)vt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Og(o)&&(t=Mo(e,r),t===2&&(i=rl(e),i!==0&&(r=i,t=$l(e,i))),t===1))throw n=wr,Ft(e,0),vt(e,r),_e(e,X()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:zt(e,xe,tt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=_s+500-X(),10<t)){if(yo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=dl(zt.bind(null,e,xe,tt),t);break}zt(e,xe,tt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-We(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tg(r/1960))-r,10<r){e.timeoutHandle=dl(zt.bind(null,e,xe,tt),r);break}zt(e,xe,tt);break;case 5:zt(e,xe,tt);break;default:throw Error(_(329))}}}return _e(e,X()),e.callbackNode===n?Pd.bind(null,e):null}function $l(e,t){var n=or;return e.current.memoizedState.isDehydrated&&(Ft(e,t).flags|=256),e=Mo(e,t),e!==2&&(t=xe,xe=n,t!==null&&Tl(t)),e}function Tl(e){xe===null?xe=e:xe.push.apply(xe,e)}function Og(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~Cs,t&=~Jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function Ga(e){if(I&6)throw Error(_(327));Cn();var t=yo(e,0);if(!(t&1))return _e(e,X()),null;var n=Mo(e,t);if(e.tag!==0&&n===2){var r=rl(e);r!==0&&(t=r,n=$l(e,r))}if(n===1)throw n=wr,Ft(e,0),vt(e,t),_e(e,X()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,xe,tt),_e(e,X()),null}function Rs(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&($n=X()+500,Ko&&Mt())}}function Gt(e){kt!==null&&kt.tag===0&&!(I&6)&&Cn();var t=I;I|=1;var n=ze.transition,r=z;try{if(ze.transition=null,z=1,e)return e()}finally{z=r,ze.transition=n,I=t,!(I&6)&&Mt()}}function Es(){je=vn.current,H(vn)}function Ft(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ug(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(ss(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wo();break;case 3:jn(),H(Pe),H(ge),hs();break;case 5:ms(r);break;case 4:jn();break;case 13:H(q);break;case 19:H(q);break;case 10:ds(r.type._context);break;case 22:case 23:Es()}n=n.return}if(le=e,te=e=jt(e.current,null),ue=je=t,re=0,wr=null,Cs=Jo=qt=0,xe=or=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Bt=null}return e}function Cd(e,t){do{var n=te;try{if(cs(),lo.current=$o,No){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}No=!1}if(Wt=0,ie=ne=G=null,nr=!1,Sr=0,Ps.current=null,n===null||n.return===null){re=1,wr=t,te=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Aa(l);if(y!==null){y.flags&=-257,Ia(y,l,s,i,t),y.mode&1&&Ma(i,u,t),t=y,a=u;var S=t.updateQueue;if(S===null){var v=new Set;v.add(a),t.updateQueue=v}else S.add(a);break e}else{if(!(t&1)){Ma(i,u,t),bs();break e}a=Error(_(426))}}else if(Q&&s.mode&1){var x=Aa(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ia(x,l,s,i,t),as(Nn(a,s));break e}}i=a=Nn(a,s),re!==4&&(re=2),or===null?or=[i]:or.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=sd(i,a,t);ja(i,g);break e;case 1:s=a;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Et===null||!Et.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=ad(i,s,t);ja(i,w);break e}}i=i.return}while(i!==null)}Ed(n)}catch(C){t=C,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function _d(){var e=To.current;return To.current=$o,e===null?$o:e}function bs(){(re===0||re===3||re===2)&&(re=4),le===null||!(qt&268435455)&&!(Jo&268435455)||vt(le,ue)}function Mo(e,t){var n=I;I|=2;var r=_d();(le!==e||ue!==t)&&(tt=null,Ft(e,t));do try{Lg();break}catch(o){Cd(e,o)}while(!0);if(cs(),I=n,To.current=r,te!==null)throw Error(_(261));return le=null,ue=0,re}function Lg(){for(;te!==null;)Rd(te)}function Mg(){for(;te!==null&&!lp();)Rd(te)}function Rd(e){var t=jd(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Ed(e):te=t,Ps.current=null}function Ed(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bg(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Eg(n,t,je),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function zt(e,t,n){var r=z,o=ze.transition;try{ze.transition=null,z=1,Ag(e,t,n,r)}finally{ze.transition=o,z=r}return null}function Ag(e,t,n,r){do Cn();while(kt!==null);if(I&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(hp(e,i),e===le&&(te=le=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gr||(Gr=!0,Nd(ho,function(){return Cn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var l=z;z=1;var s=I;I|=4,Ps.current=null,Ng(e,n),xd(n,e),ng(ul),vo=!!al,ul=al=null,e.current=n,$g(n),sp(),I=s,z=l,ze.transition=i}else e.current=n;if(Gr&&(Gr=!1,kt=e,Lo=o),i=e.pendingLanes,i===0&&(Et=null),cp(n.stateNode),_e(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Oo)throw Oo=!1,e=jl,jl=null,e;return Lo&1&&e.tag!==0&&Cn(),i=e.pendingLanes,i&1?e===Nl?ir++:(ir=0,Nl=e):ir=0,Mt(),null}function Cn(){if(kt!==null){var e=sc(Lo),t=ze.transition,n=z;try{if(ze.transition=null,z=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,Lo=0,I&6)throw Error(_(331));var o=I;for(I|=4,j=e.current;j!==null;){var i=j,l=i.child;if(j.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(j=u;j!==null;){var d=j;switch(d.tag){case 0:case 11:case 15:rr(8,d,i)}var p=d.child;if(p!==null)p.return=d,j=p;else for(;j!==null;){d=j;var m=d.sibling,y=d.return;if(vd(d),d===u){j=null;break}if(m!==null){m.return=y,j=m;break}j=y}}}var S=i.alternate;if(S!==null){var v=S.child;if(v!==null){S.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}j=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,j=l;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:rr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,j=g;break e}j=i.return}}var f=e.current;for(j=f;j!==null;){l=j;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,j=h;else e:for(l=f;j!==null;){if(s=j,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Go(9,s)}}catch(C){Y(s,s.return,C)}if(s===l){j=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,j=w;break e}j=s.return}}if(I=o,Mt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Bo,e)}catch{}r=!0}return r}finally{z=n,ze.transition=t}}return!1}function Ja(e,t,n){t=Nn(n,t),t=sd(e,t,1),e=Rt(e,t,1),t=he(),e!==null&&(br(e,1,t),_e(e,t))}function Y(e,t,n){if(e.tag===3)Ja(e,e,n);else for(;t!==null;){if(t.tag===3){Ja(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Et===null||!Et.has(r))){e=Nn(n,e),e=ad(t,e,1),t=Rt(t,e,1),e=he(),t!==null&&(br(t,1,e),_e(t,e));break}}t=t.return}}function Ig(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>X()-_s?Ft(e,0):Cs|=n),_e(e,t)}function bd(e,t){t===0&&(e.mode&1?(t=zr,zr<<=1,!(zr&130023424)&&(zr=4194304)):t=1);var n=he();e=ut(e,t),e!==null&&(br(e,t,n),_e(e,n))}function Dg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bd(e,n)}function zg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),bd(e,n)}var jd;jd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,Rg(e,t,n);we=!!(e.flags&131072)}else we=!1,Q&&t.flags&1048576&&Oc(t,_o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ao(e,t),e=t.pendingProps;var o=Rn(t,ge.current);Pn(t,n),o=vs(null,t,r,e,o,n);var i=Ss();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(i=!0,Po(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ps(t),o.updater=qo,t.stateNode=o,o._reactInternals=t,vl(t,r,e,n),t=xl(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&ls(t),me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ao(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Bg(r),e=He(r,e),o){case 0:t=kl(null,t,r,e,n);break e;case 1:t=Ua(null,t,r,e,n);break e;case 11:t=Da(null,t,r,e,n);break e;case 14:t=za(null,t,r,He(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),kl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Ua(e,t,r,o,n);case 3:e:{if(fd(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,zc(e,t),bo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Nn(Error(_(423)),t),t=Ba(e,t,r,n,o);break e}else if(r!==o){o=Nn(Error(_(424)),t),t=Ba(e,t,r,n,o);break e}else for(Ne=_t(t.stateNode.containerInfo.firstChild),$e=t,Q=!0,Ke=null,n=Ic(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===o){t=ct(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return Uc(t),e===null&&ml(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,cl(r,o)?l=null:i!==null&&cl(r,i)&&(t.flags|=32),dd(e,t),me(e,t,l,n),t.child;case 6:return e===null&&ml(t),null;case 13:return pd(e,t,n);case 4:return gs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Da(e,t,r,o,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,V(Ro,r._currentValue),r._currentValue=l,i!==null)if(Ge(i.value,l)){if(i.children===o.children&&!Pe.current){t=ct(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=lt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),hl(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),hl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pn(t,n),o=Ue(o),r=r(o),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),za(e,t,r,o,n);case 15:return ud(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),ao(e,t),t.tag=1,Ce(r)?(e=!0,Po(t)):e=!1,Pn(t,n),ld(t,r,o),vl(t,r,o,n),xl(null,t,r,!0,e,n);case 19:return gd(e,t,n);case 22:return cd(e,t,n)}throw Error(_(156,t.tag))};function Nd(e,t){return rc(e,t)}function Ug(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Ug(e,t,n,r)}function js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bg(e){if(typeof e=="function")return js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ql)return 11;if(e===Gl)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")js(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case an:return Ht(n.children,o,i,t);case Wl:l=8,o|=8;break;case Vi:return e=De(12,n,t,o|2),e.elementType=Vi,e.lanes=i,e;case Fi:return e=De(13,n,t,o),e.elementType=Fi,e.lanes=i,e;case Hi:return e=De(19,n,t,o),e.elementType=Hi,e.lanes=i,e;case Uu:return Yo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Du:l=10;break e;case zu:l=9;break e;case ql:l=11;break e;case Gl:l=14;break e;case mt:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=De(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Ht(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Yo(e,t,n,r){return e=De(22,e,r,t),e.elementType=Uu,e.lanes=n,e.stateNode={isHidden:!1},e}function Mi(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function Ai(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hi(0),this.expirationTimes=hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ns(e,t,n,r,o,i,l,s,a){return e=new Vg(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=De(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(i),e}function Fg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $d(e){if(!e)return Tt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ce(n))return $c(e,n,t)}return t}function Td(e,t,n,r,o,i,l,s,a){return e=Ns(n,r,!0,e,o,i,l,s,a),e.context=$d(null),n=e.current,r=he(),o=bt(n),i=lt(r,o),i.callback=t??null,Rt(n,i,o),e.current.lanes=o,br(e,o,r),_e(e,r),e}function Xo(e,t,n,r){var o=t.current,i=he(),l=bt(o);return n=$d(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(o,t,l),e!==null&&(qe(e,o,l,i),io(e,o,l)),l}function Ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ya(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $s(e,t){Ya(e,t),(e=e.alternate)&&Ya(e,t)}function Hg(){return null}var Od=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ts(e){this._internalRoot=e}Zo.prototype.render=Ts.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Xo(e,t,null,null)};Zo.prototype.unmount=Ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){Xo(null,e,null,null)}),t[at]=null}};function Zo(e){this._internalRoot=e}Zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=cc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&fc(e)}};function Os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xa(){}function Qg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ao(l);i.call(u)}}var l=Td(t,r,e,0,null,!1,!1,"",Xa);return e._reactRootContainer=l,e[at]=l.current,gr(e.nodeType===8?e.parentNode:e),Gt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Ao(a);s.call(u)}}var a=Ns(e,0,!1,null,null,!1,!1,"",Xa);return e._reactRootContainer=a,e[at]=a.current,gr(e.nodeType===8?e.parentNode:e),Gt(function(){Xo(t,a,n,r)}),a}function ti(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Ao(l);s.call(a)}}Xo(t,l,e,o)}else l=Qg(n,t,e,o,r);return Ao(l)}ac=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qn(t.pendingLanes);n!==0&&(Xl(t,n|1),_e(t,X()),!(I&6)&&($n=X()+500,Mt()))}break;case 13:Gt(function(){var r=ut(e,1);if(r!==null){var o=he();qe(r,e,1,o)}}),$s(e,1)}};Zl=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=he();qe(t,e,134217728,n)}$s(e,134217728)}};uc=function(e){if(e.tag===13){var t=bt(e),n=ut(e,t);if(n!==null){var r=he();qe(n,e,t,r)}$s(e,t)}};cc=function(){return z};dc=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};el=function(e,t,n){switch(t){case"input":if(Wi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Qo(r);if(!o)throw Error(_(90));Vu(r),Wi(r,o)}}}break;case"textarea":Hu(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};Yu=Rs;Xu=Gt;var Kg={usingClientEntryPoint:!1,Events:[Nr,fn,Qo,Gu,Ju,Rs]},Hn={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wg={bundleType:Hn.bundleType,version:Hn.version,rendererPackageName:Hn.rendererPackageName,rendererConfig:Hn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tc(e),e===null?null:e.stateNode},findFiberByHostInstance:Hn.findFiberByHostInstance||Hg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jr.isDisabled&&Jr.supportsFiber)try{Bo=Jr.inject(Wg),Ze=Jr}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kg;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Os(t))throw Error(_(200));return Fg(e,t,null,n)};Oe.createRoot=function(e,t){if(!Os(e))throw Error(_(299));var n=!1,r="",o=Od;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ns(e,1,!1,null,null,n,!1,r,o),e[at]=t.current,gr(e.nodeType===8?e.parentNode:e),new Ts(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=tc(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return Gt(e)};Oe.hydrate=function(e,t,n){if(!ei(t))throw Error(_(200));return ti(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!Os(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Od;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Td(t,null,e,1,n??null,o,!1,i,l),e[at]=t.current,gr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Zo(t)};Oe.render=function(e,t,n){if(!ei(t))throw Error(_(200));return ti(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!ei(e))throw Error(_(40));return e._reactRootContainer?(Gt(function(){ti(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};Oe.unstable_batchedUpdates=Rs;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ei(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return ti(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function Ld(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ld)}catch(e){console.error(e)}}Ld(),Lu.exports=Oe;var rt=Lu.exports,Md,Za=rt;Md=Ui.createRoot=Za.createRoot,Ui.hydrateRoot=Za.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pr(){return Pr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pr.apply(null,arguments)}var xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xt||(xt={}));const eu="popstate";function qg(e){e===void 0&&(e={});function t(o,i){let{pathname:l="/",search:s="",hash:a=""}=Xt(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Ol("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let l=o.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let a=o.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:Io(i))}function r(o,i){Ls(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Jg(t,n,r,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ls(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Gg(){return Math.random().toString(36).substr(2,8)}function tu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ol(e,t,n,r){return n===void 0&&(n=null),Pr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Xt(t):t,{state:n,key:t&&t.key||r||Gg()})}function Io(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Xt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Jg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=xt.Pop,a=null,u=d();u==null&&(u=0,l.replaceState(Pr({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function p(){s=xt.Pop;let x=d(),g=x==null?null:x-u;u=x,a&&a({action:s,location:v.location,delta:g})}function m(x,g){s=xt.Push;let f=Ol(v.location,x,g);n&&n(f,x),u=d()+1;let h=tu(f,u),w=v.createHref(f);try{l.pushState(h,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(w)}i&&a&&a({action:s,location:v.location,delta:1})}function y(x,g){s=xt.Replace;let f=Ol(v.location,x,g);n&&n(f,x),u=d();let h=tu(f,u),w=v.createHref(f);l.replaceState(h,"",w),i&&a&&a({action:s,location:v.location,delta:0})}function S(x){let g=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof x=="string"?x:Io(x);return f=f.replace(/ $/,"%20"),Z(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let v={get action(){return s},get location(){return e(o,l)},listen(x){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(eu,p),a=x,()=>{o.removeEventListener(eu,p),a=null}},createHref(x){return t(o,x)},createURL:S,encodeLocation(x){let g=S(x);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:y,go(x){return l.go(x)}};return v}var nu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(nu||(nu={}));function Yg(e,t,n){return n===void 0&&(n="/"),Xg(e,t,n)}function Xg(e,t,n,r){let o=typeof t=="string"?Xt(t):t,i=Ms(o.pathname||"/",n);if(i==null)return null;let l=Ad(e);Zg(l);let s=null,a=dm(i);for(let u=0;s==null&&u<l.length;++u)s=am(l[u],a);return s}function Ad(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(Z(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Nt([r,a.relativePath]),d=n.concat(a);i.children&&i.children.length>0&&(Z(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ad(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:lm(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of Id(i.path))o(i,l,a)}),t}function Id(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Id(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Zg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const em=/^:[\w-]+$/,tm=3,nm=2,rm=1,om=10,im=-2,ru=e=>e==="*";function lm(e,t){let n=e.split("/"),r=n.length;return n.some(ru)&&(r+=im),t&&(r+=nm),n.filter(o=>!ru(o)).reduce((o,i)=>o+(em.test(i)?tm:i===""?rm:om),r)}function sm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function am(e,t,n){let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",p=um({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),m=a.route;if(!p)return null;Object.assign(o,p.params),l.push({params:o,pathname:Nt([i,p.pathname]),pathnameBase:gm(Nt([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=Nt([i,p.pathnameBase]))}return l}function um(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=cm(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let v=s[p]||"";l=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const S=s[p];return y&&!S?u[m]=void 0:u[m]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function cm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ls(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function dm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ls(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ms(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Xt(e):e,i;return n?(n=Dd(n),n.startsWith("/")?i=ou(n.substring(1),"/"):i=ou(n,t)):i=t,{pathname:i,search:mm(r),hash:hm(o)}}function ou(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ii(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function As(e,t){let n=pm(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Is(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Xt(e):(o=Pr({},e),Z(!o.pathname||!o.pathname.includes("?"),Ii("?","pathname","search",o)),Z(!o.pathname||!o.pathname.includes("#"),Ii("#","pathname","hash",o)),Z(!o.search||!o.search.includes("#"),Ii("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;o.pathname=m.join("/")}s=p>=0?t[p]:"/"}let a=fm(o,s),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Dd=e=>e.replace(/\/\/+/g,"/"),Nt=e=>Dd(e.join("/")),gm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ym(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zd=["post","put","patch","delete"];new Set(zd);const vm=["get",...zd];new Set(vm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cr(){return Cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cr.apply(null,arguments)}const Ds=k.createContext(null),Sm=k.createContext(null),At=k.createContext(null),ni=k.createContext(null),ft=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Ud=k.createContext(null);function km(e,t){let{relative:n}=t===void 0?{}:t;Mn()||Z(!1);let{basename:r,navigator:o}=k.useContext(At),{hash:i,pathname:l,search:s}=Fd(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:Nt([r,l])),o.createHref({pathname:a,search:s,hash:i})}function Mn(){return k.useContext(ni)!=null}function An(){return Mn()||Z(!1),k.useContext(ni).location}function Bd(e){k.useContext(At).static||k.useLayoutEffect(e)}function Vd(){let{isDataRoute:e}=k.useContext(ft);return e?Lm():xm()}function xm(){Mn()||Z(!1);let e=k.useContext(Ds),{basename:t,future:n,navigator:r}=k.useContext(At),{matches:o}=k.useContext(ft),{pathname:i}=An(),l=JSON.stringify(As(o,n.v7_relativeSplatPath)),s=k.useRef(!1);return Bd(()=>{s.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=Is(u,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Nt([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,l,i,e])}function wm(){let{matches:e}=k.useContext(ft),t=e[e.length-1];return t?t.params:{}}function Fd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(At),{matches:o}=k.useContext(ft),{pathname:i}=An(),l=JSON.stringify(As(o,r.v7_relativeSplatPath));return k.useMemo(()=>Is(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function Pm(e,t){return Cm(e,t)}function Cm(e,t,n,r){Mn()||Z(!1);let{navigator:o}=k.useContext(At),{matches:i}=k.useContext(ft),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=An(),d;if(t){var p;let x=typeof t=="string"?Xt(t):t;a==="/"||(p=x.pathname)!=null&&p.startsWith(a)||Z(!1),d=x}else d=u;let m=d.pathname||"/",y=m;if(a!=="/"){let x=a.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let S=Yg(e,{pathname:y}),v=jm(S&&S.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Nt([a,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:Nt([a,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n,r);return t&&v?k.createElement(ni.Provider,{value:{location:Cr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:xt.Pop}},v):v}function _m(){let e=Om(),t=ym(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,null)}const Rm=k.createElement(_m,null);class Em extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(ft.Provider,{value:this.props.routeContext},k.createElement(Ud.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bm(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(Ds);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(ft.Provider,{value:t},r)}function jm(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let d=l.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||Z(!1),l=l.slice(0,Math.min(l.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let p=l[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:y}=n,S=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||S){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,p,m)=>{let y,S=!1,v=null,x=null;n&&(y=s&&p.route.id?s[p.route.id]:void 0,v=p.route.errorElement||Rm,a&&(u<0&&m===0?(Mm("route-fallback"),S=!0,x=null):u===m&&(S=!0,x=p.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,m+1)),f=()=>{let h;return y?h=v:S?h=x:p.route.Component?h=k.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,k.createElement(bm,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?k.createElement(Em,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var Hd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hd||{}),Qd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qd||{});function Nm(e){let t=k.useContext(Ds);return t||Z(!1),t}function $m(e){let t=k.useContext(Sm);return t||Z(!1),t}function Tm(e){let t=k.useContext(ft);return t||Z(!1),t}function Kd(e){let t=Tm(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function Om(){var e;let t=k.useContext(Ud),n=$m(),r=Kd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Lm(){let{router:e}=Nm(Hd.UseNavigateStable),t=Kd(Qd.UseNavigateStable),n=k.useRef(!1);return Bd(()=>{n.current=!0}),k.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Cr({fromRouteId:t},i)))},[e,t])}const iu={};function Mm(e,t,n){iu[e]||(iu[e]=!0)}function Am(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ll(e){let{to:t,replace:n,state:r,relative:o}=e;Mn()||Z(!1);let{future:i,static:l}=k.useContext(At),{matches:s}=k.useContext(ft),{pathname:a}=An(),u=Vd(),d=Is(t,As(s,i.v7_relativeSplatPath),a,o==="path"),p=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:o}),[u,p,o,n,r]),null}function Jn(e){Z(!1)}function Im(e){let{basename:t="/",children:n=null,location:r,navigationType:o=xt.Pop,navigator:i,static:l=!1,future:s}=e;Mn()&&Z(!1);let a=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:a,navigator:i,static:l,future:Cr({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=Xt(r));let{pathname:d="/",search:p="",hash:m="",state:y=null,key:S="default"}=r,v=k.useMemo(()=>{let x=Ms(d,a);return x==null?null:{location:{pathname:x,search:p,hash:m,state:y,key:S},navigationType:o}},[a,d,p,m,y,S,o]);return v==null?null:k.createElement(At.Provider,{value:u},k.createElement(ni.Provider,{children:n,value:v}))}function Dm(e){let{children:t,location:n}=e;return Pm(Ml(t),n)}new Promise(()=>{});function Ml(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let i=[...t,o];if(r.type===k.Fragment){n.push.apply(n,Ml(r.props.children,i));return}r.type!==Jn&&Z(!1),!r.props.index||!r.props.children||Z(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ml(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Al.apply(null,arguments)}function zm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Um(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Bm(e,t){return e.button===0&&(!t||t==="_self")&&!Um(e)}const Vm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fm="6";try{window.__reactRouterVersion=Fm}catch{}const Hm="startTransition",lu=If[Hm];function Qm(e){let{basename:t,children:n,future:r,window:o}=e,i=k.useRef();i.current==null&&(i.current=qg({window:o,v5Compat:!0}));let l=i.current,[s,a]=k.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=k.useCallback(p=>{u&&lu?lu(()=>a(p)):a(p)},[a,u]);return k.useLayoutEffect(()=>l.listen(d),[l,d]),k.useEffect(()=>Am(r),[r]),k.createElement(Im,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const Km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Il=k.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:a,to:u,preventScrollReset:d,viewTransition:p}=t,m=zm(t,Vm),{basename:y}=k.useContext(At),S,v=!1;if(typeof u=="string"&&Wm.test(u)&&(S=u,Km))try{let h=new URL(window.location.href),w=u.startsWith("//")?new URL(h.protocol+u):new URL(u),C=Ms(w.pathname,y);w.origin===h.origin&&C!=null?u=C+w.search+w.hash:v=!0}catch{}let x=km(u,{relative:o}),g=qm(u,{replace:l,state:s,target:a,preventScrollReset:d,relative:o,viewTransition:p});function f(h){r&&r(h),h.defaultPrevented||g(h)}return k.createElement("a",Al({},m,{href:S||x,onClick:v||i?r:f,ref:n,target:a}))});var su;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(su||(su={}));var au;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(au||(au={}));function qm(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:s}=t===void 0?{}:t,a=Vd(),u=An(),d=Fd(e,{relative:l});return k.useCallback(p=>{if(Bm(p,n)){p.preventDefault();let m=r!==void 0?r:Io(u)===Io(d);a(e,{replace:m,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[u,a,d,r,o,n,e,i,l,s])}const Gm="https://github.com/frankvane/vane-components";class Jm extends Er.Component{constructor(){super(...arguments);Hs(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?c.jsxs("div",{className:"crash",role:"alert",children:[c.jsx("h3",{children:"这个页面炸了"}),c.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),c.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Wd(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function Ym({demos:e,pathname:t}){var a;const{groups:n,entries:r,label:o}=e,i=(a=r.find(u=>t===`/demo/${u.meta.slug}`))==null?void 0:a.meta.group,[l,s]=k.useState(()=>{var d;const u=(d=n[0])==null?void 0:d.key;return Object.fromEntries(n.map(p=>[p.key,p.key===(i??u)]))});return k.useEffect(()=>{i&&s(u=>u[i]?u:{...u,[i]:!0})},[i]),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-head",children:[c.jsx("span",{children:o}),c.jsxs("code",{children:[r.length," demos"]})]}),n.map(u=>{const d=r.filter(m=>m.meta.group===u.key);if(d.length===0)return null;const p=l[u.key]??!1;return c.jsxs("div",{className:"nav-group",children:[c.jsxs("button",{type:"button",className:`nav-group-head${i===u.key?" is-current":""}`,onClick:()=>s(m=>({...m,[u.key]:!p})),"aria-expanded":p,children:[c.jsx("span",{className:`nav-caret${p?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,c.jsx("code",{children:d.length})]}),p?c.jsx("div",{className:"nav-list",children:d.map(m=>c.jsxs(Il,{to:`/demo/${m.meta.slug}`,className:`nav-sub${t===`/demo/${m.meta.slug}`?" is-active":""}`,children:[c.jsx("em",{"aria-hidden":!0,children:Wd(e,m)}),m.meta.title]},m.meta.slug))}):null]},u.key)})]})}function Xm({demos:e}){var s;const{slug:t}=wm(),{entries:n,detail:r}=e,o=t?n.find(a=>a.meta.slug===t):void 0,i=(s=n[0])==null?void 0:s.meta.slug;if(!o)return c.jsx(Ll,{to:i?`/demo/${i}`:"/",replace:!0});const l=n.indexOf(o)+1;return c.jsx(Er.Fragment,{children:r(o,l)},o.meta.slug)}function Zm({config:e}){var p,m;const{pathname:t}=An(),[n,r]=k.useState(!1),[o,i]=k.useState(!1);k.useEffect(()=>r(!1),[t]);const l=k.useCallback(()=>i(y=>!y),[]);k.useEffect(()=>{const y=S=>{const v=S.target,x=v&&(v.tagName==="INPUT"||v.tagName==="TEXTAREA"||v.isContentEditable);S.key==="Escape"&&r(!1),!x&&(S.key==="g"||S.key==="G")&&!S.metaKey&&!S.ctrlKey&&i(g=>!g)};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]);const s=e.demos,a=(p=s.entries[0])==null?void 0:p.meta.slug,u=k.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const y=t.replace(/^\/demo\/?/,""),S=s.entries.find(v=>v.meta.slug===y);return S?`demo ${Wd(s,S)} · ${S.meta.title}`:"demo · 逐项示例"},[t,e,s]),d=k.useMemo(()=>e.nav.map((y,S)=>({...y,no:String(S+1).padStart(2,"0")})),[e.nav]);return c.jsxs("div",{className:`shell${n?" is-nav-open":""}${o?" is-guides":""}`,children:[c.jsx("a",{className:"skip-link",href:"#main",onClick:y=>{y.preventDefault();const S=document.getElementById("main");S==null||S.setAttribute("tabindex","-1"),S==null||S.focus(),S==null||S.scrollIntoView({block:"start"})},children:"跳到内容"}),c.jsxs("aside",{className:"side","aria-label":"站点导航",children:[c.jsxs(Il,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),c.jsxs("span",{children:[c.jsx("strong",{children:e.pkg}),c.jsx("em",{children:e.subtitle})]})]}),c.jsxs("nav",{children:[d.map(y=>c.jsxs(Il,{to:y.to,className:`nav-item${t===y.to?" is-active":""}`,"aria-current":t===y.to?"page":void 0,children:[c.jsx("em",{"aria-hidden":!0,children:y.no}),c.jsx("span",{children:y.label}),y.hint?c.jsx("code",{children:y.hint}):null]},y.to)),c.jsx(Ym,{demos:e.demos,pathname:t})]}),c.jsxs("div",{className:"side-foot",children:[c.jsx("p",{children:e.footer[0]}),c.jsx("p",{className:"muted",children:e.footer[1]})]})]}),c.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>r(!1)}),c.jsxs("div",{className:"main",id:"main",children:[c.jsxs("header",{className:"topbar",children:[c.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>r(y=>!y),children:c.jsx("span",{"aria-hidden":!0})}),c.jsx("span",{className:"crumb",children:u}),c.jsxs("div",{className:"topbar-right",children:[(m=e.stats)==null?void 0:m.map(y=>c.jsxs("span",{className:"topbar-stat",title:y.title,children:[c.jsx("b",{children:y.value})," ",y.label]},y.label)),c.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[c.jsx("i",{"aria-hidden":!0}),"guides"]}),c.jsx("a",{className:"topbar-link",href:e.sourceUrl??Gm,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),c.jsx("div",{className:"guides","aria-hidden":!0}),c.jsx(k.Suspense,{fallback:c.jsx("div",{className:"loading",children:"loading modules…"}),children:c.jsx(Jm,{children:c.jsxs(Dm,{children:[e.routes.map(y=>c.jsx(Jn,{path:y.path,element:y.element},y.path)),c.jsx(Jn,{path:"/demo",element:c.jsx(Ll,{to:a?`/demo/${a}`:"/",replace:!0})}),c.jsx(Jn,{path:"/demo/:slug",element:c.jsx(Xm,{demos:e.demos})}),c.jsx(Jn,{path:"*",element:c.jsx(Ll,{to:"/",replace:!0})})]})})})]})]})}function eh({config:e}){return c.jsx(Qm,{children:c.jsx(Zm,{config:e})})}const th="modulepreload",nh=function(e,t){return new URL(e,t).href},uu={},zs=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=nh(u,r),u in uu)return;uu[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!r)for(let S=l.length-1;S>=0;S--){const v=l[S];if(v.href===u&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${p}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":th,d||(y.as="script"),y.crossOrigin="",y.href=u,a&&y.setAttribute("nonce",a),document.head.appendChild(y),d)return new Promise((S,v)=>{y.addEventListener("load",S),y.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})};function qd(e,t=0){if(typeof e!="number")return 1/0;const n=Math.max(0,t);return Math.max(0,e-n)}function rh(e,t={}){if(!e)return 0;const n=typeof e.stock=="number"?e.stock:1/0,r=qd(e.quota,t.purchasedCount??0);return Math.min(n,r,t.max??1/0)}function _r(e){return typeof e!="number"||!Number.isFinite(e)?"0.00":e.toFixed(2)}const Gd=k.forwardRef((e,t)=>{const{attributes:n,selection:r={},disabledMap:o={},variant:i=null,purchasable:l=!0,onSelectOption:s,slots:a,children:u,containerClassName:d,containerStyle:p,onMount:m,onUnmount:y,debug:S,containerRefExternal:v}=e,x=k.useRef(null),g=v??x,[,f]=k.useState(0),[h,w]=k.useState(!1);k.useImperativeHandle(t,()=>({getContainer:()=>g.current,forceUpdate:()=>f(P=>P+1),getSize:()=>{var P,O;return{width:((P=g.current)==null?void 0:P.offsetWidth)??0,height:((O=g.current)==null?void 0:O.offsetHeight)??0}},getSelection:()=>r,getVariant:()=>i}),[r,i,g]),k.useEffect(()=>(S&&console.debug("[SkuSelectorCore] mounted"),w(!0),m==null||m(),()=>y==null?void 0:y()),[]);const C=k.useMemo(()=>{const P=new Map;for(const O of n){const $=new Map;for(const W of O.options??[])$.set(W.id,W.label);P.set(O.name,$)}return P},[n]),R=k.useCallback((P,O)=>{var $;return(($=C.get(P))==null?void 0:$.get(O))??O},[C]),E=n.map(P=>({attr:P,optionId:r[P.name]})).filter(P=>!!P.optionId);return c.jsxs("div",{ref:g,className:d,style:{position:"relative",color:"#1f2328",...p},children:[a==null?void 0:a.before,c.jsx("div",{"data-testid":"sku-groups",children:n.map(P=>{var Se;const O=P.options??[],$=o[P.name],W=r[P.name]??((Se=O.find(U=>!($!=null&&$.has(U.id))))==null?void 0:Se.id);return c.jsxs("div",{role:"radiogroup","aria-label":P.name,"data-testid":`sku-attr-${P.name}`,style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:8},children:[c.jsx("span",{style:{fontSize:12,color:"#4a5056",minWidth:48},children:P.name}),O.map(U=>{const ke=r[P.name]===U.id,Re=($==null?void 0:$.has(U.id))??!1,Ve=Re&&!ke;return c.jsxs("button",{type:"button",role:"radio","aria-checked":ke,tabIndex:U.id===W?0:-1,"data-testid":`sku-opt-${P.name}-${U.id}`,"data-selected":ke?"true":"false","data-disabled":Re?"true":"false",disabled:Ve,onClick:()=>s==null?void 0:s(P.name,U.id),style:{display:"inline-flex",alignItems:"center",gap:4,padding:"6px 10px",borderRadius:6,border:ke?"2px solid #2b7de9":"1px solid #d0d4da",background:Re?"#f2f3f5":ke?"#e8f0fe":"#fff",color:Re?"#6f757b":"#1f2328",cursor:Ve?"not-allowed":"pointer",fontSize:12},children:[U.image?c.jsx("img",{src:U.image,alt:"",style:{width:16,height:16,objectFit:"cover",borderRadius:3}}):null,U.label]},U.id)})]},P.name)})}),c.jsx("div",{"data-testid":"sku-summary",style:{fontSize:12,color:"#3c4147",marginTop:4},children:E.length?c.jsxs("span",{children:["已选：",E.map(P=>`${P.attr.name}:${R(P.attr.name,P.optionId)}`).join(" / "),i?c.jsxs("span",{"data-testid":"sku-summary-variant",children:["（SKU：",i.sku,typeof i.price=="number"?` · ¥${_r(i.price)}`:"",typeof i.stock=="number"?` · 库存 ${i.stock}`:"",l?"":" · 缺货","）"]}):c.jsx("span",{"data-testid":"sku-summary-novariant",children:"（无可售组合）"})]}):c.jsx("span",{children:"请选择规格"})}),a==null?void 0:a.overlay,a==null?void 0:a.after,a==null?void 0:a.footer,u,h?c.jsx("span",{"data-testid":"sku-mounted",hidden:!0}):null]})});Gd.displayName="SkuSelectorCore";function oh(){const e=new Map,t=new Map,n=(l,s)=>{const a=e.get(l);if(a)for(const u of[...a])try{u(s)}catch(d){console.warn(`[PluginBus] handler error for event "${l}"`,d)}},r=(l,s)=>{let a=e.get(l);return a||(a=new Set,e.set(l,a)),a.add(s),()=>{a==null||a.delete(s)}},o=(l,s)=>{const a=u=>{s(u),i(l,a)};return r(l,a)},i=(l,s)=>{var a;if(!s){e.delete(l);return}(a=e.get(l))==null||a.delete(s)};return{emit:n,on:r,once:o,off:i,getData:l=>t.get(l),setData:(l,s)=>{const a=t.get(l);t.set(l,s),a!==s&&n(l,s)},deleteData:l=>{const s=t.has(l);t.delete(l),s&&n(l,void 0)},hasData:l=>t.has(l),getAll:()=>{const l={};return t.forEach((s,a)=>{l[a]=s}),l},clear:()=>{e.clear(),t.clear()}}}function Jd(e){const t=new Map(e.map(s=>[s.name,s])),n=[];for(const s of e)for(const a of s.dependencies??[])t.has(a)||n.push(`${s.name} -> ${a}`);const r=[],o=new Set,i=[...e],l=s=>(s.dependencies??[]).every(a=>o.has(a)||!t.has(a));for(;i.length>0;){const s=i.filter(l);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(u=>u.name).join(" <-> ")}`);let a=s[0];for(const u of s)(u.priority??0)>(a.priority??0)&&(a=u);r.push(a),o.add(a.name),i.splice(i.indexOf(a),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),r}async function ih(e,t={}){const{timeout:n=3e3,name:r="anonymous",hook:o="unknown"}=t;if(!n||n<=0)return await e();let i;const l=new Promise((s,a)=>{i=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const lh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function sh(e={}){const t=e.logger??console,n=e.sandbox??!0,r=e.timeout??3e3,o=[],i=[],l=new Map,s=()=>Jd([...l.values()].filter(u=>u.enabled!==!1)),a=u=>{l.set(u.name,{...u,enabled:u.enabled??!0}),u.init&&Promise.resolve(u.init()).catch(d=>{t.warn(`[PluginManager] init failed for ${u.name}`,d)})};return{register:a,registerAll:u=>{for(const d of u)a(d)},unregister:u=>{const d=l.get(u);d&&(d.destroy&&Promise.resolve(d.destroy()).catch(p=>{t.warn(`[PluginManager] destroy failed for ${d.name}`,p)}),l.delete(u))},getPlugin:u=>l.get(u),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(u=>u.enabled!==!1),getExecutionOrder:s,enable:u=>{const d=l.get(u);d&&(d.enabled=!0)},disable:u=>{const d=l.get(u);d&&(d.enabled=!1)},has:u=>l.has(u),executeHook:async(u,d,...p)=>{var m,y;for(const S of s()){const v=(m=S.hooks)==null?void 0:m[u];if(typeof v!="function")continue;const x=S.sandbox??n,g=S.timeout??r;let f;try{f=x?await ih(()=>v(d,...p),{timeout:g,name:S.name,hook:String(u)}):await v(d,...p)}catch(h){if(o.push({plugin:S.name,hook:String(u),error:h}),t.warn(`[PluginManager] hook ${String(u)} failed in ${S.name}`,h),(y=e.onError)==null||y.call(e,S.name,String(u),h),u==="onError")break;continue}if(lh.has(String(u))&&typeof f=="function"){i.push(f);continue}if(f===!1)return!1;if(f!==void 0&&f!==!0)return f}},clear:()=>{const u=i.splice(0);for(const d of u.reverse())try{d()}catch(p){t.warn("[PluginManager] cleanup failed",p)}for(const d of l.values())d.destroy&&Promise.resolve(d.destroy()).catch(p=>{t.warn(`[PluginManager] destroy failed for ${d.name}`,p)});l.clear()},getErrors:()=>[...o]}}var ah=Object.defineProperty,uh=(e,t,n)=>t in e?ah(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ch=(e,t,n)=>uh(e,t+"",n);class Yd extends Er.Component{constructor(){super(...arguments),ch(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(o=(r=this.props).onError)==null||o.call(r,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}}let Yr=null;function dh(e=!1){if(Yr&&!e)return Yr;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(o),l=/Mobile|Android|iPhone/i.test(o),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Yr={type:i?"tablet":l?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:t,viewportHeight:n,isTouchDevice:s,isRetina:r>=2},Yr}function cu(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;const n=Object.keys(e),r=Object.keys(t);return n.length!==r.length?!1:n.every(o=>Object.is(e[o],t[o]))}function fh(e){const{plugins:t,props:n,data:r,initialState:o,containerRef:i,enableDebug:l=!1,managerOptions:s,extendContext:a}=e,u=k.useRef(null),d=i??u,p=k.useRef(null);p.current||(p.current=sh(s));const m=p.current,y=k.useRef(null);y.current||(y.current=oh());const S=y.current,v=k.useRef(new Map),[x,g]=k.useState(o??{}),[,f]=k.useState(0),h=k.useCallback(()=>f(T=>T+1),[]),w=k.useMemo(()=>dh(),[]),C=k.useRef(t),R=C.current;(R.length!==t.length||t.some((T,N)=>T!==R[N]))&&(C.current=t);const E=C.current,P=E.map(T=>T.name).join("|");k.useLayoutEffect(()=>{m.clear(),m.registerAll(E),l&&console.debug("[vane/plugin-core] plugins registered:",P)},[E]),k.useLayoutEffect(()=>()=>{m.executeHook("onUnmount",$.current),m.clear()},[m]);const O=k.useMemo(()=>Jd(E),[E]),$=k.useRef(null),W=k.useRef(n);cu(W.current,n)||(W.current=n);const Se=W.current,U=k.useRef(r);cu(U.current,r)||(U.current=r);const ke=U.current,Re=k.useMemo(()=>{const T={props:Se,data:ke,bus:S,refs:{container:d,getContainer:()=>d.current},state:x,setState:N=>g(D=>({...D,...N})),shared:v.current,deviceInfo:w,forceUpdate:h,getSize:()=>{const N=d.current;return N?{width:N.offsetWidth,height:N.offsetHeight}:{width:0,height:0}},logger:console};return a?a(T):T},[Se,ke,x,w,S,a]);$.current=Re;const Ve=k.useCallback(T=>{var D,B;let N=T;for(const Ee of O){const L=(D=Ee.hooks)==null?void 0:D.transformProps;if(typeof L=="function")try{N=L(N)}catch(A){(((B=$.current)==null?void 0:B.logger)??console).warn(`[plugin-core] ${Ee.name}.transformProps 执行失败，已跳过`,A)}}return N},[O]),pt=k.useCallback(T=>{var D,B;let N=T;for(const Ee of O){const L=(D=Ee.hooks)==null?void 0:D.transformData;if(typeof L=="function")try{N=L($.current,N)}catch(A){(((B=$.current)==null?void 0:B.logger)??console).warn(`[plugin-core] ${Ee.name}.transformData 执行失败，已跳过`,A)}}return N},[O]),b=k.useCallback((T,...N)=>m.executeHook(T,$.current,...N),[m]);return{manager:m,bus:S,context:Re,state:x,setState:Re.setState,execute:b,transformProps:Ve,transformData:pt,orderedPlugins:O}}k.createContext(null);function Xr(e,t,n){const{hook:r,position:o="after"}=n;return e.filter(i=>i.enabled!==!1).filter(i=>{var l;return typeof((l=i.hooks)==null?void 0:l[r])=="function"}).filter(i=>{var s;const l=(s=i.config)==null?void 0:s.slotPosition;return o==="before"?l==="before":o==="footer"?l===void 0||l==="after"||l==="footer":l===void 0||l==="after"}).sort((i,l)=>{var s,a;return(((s=i.config)==null?void 0:s.order)??0)-(((a=l.config)==null?void 0:a.order)??0)||(l.priority??0)-(i.priority??0)}).map(i=>{try{const l=i.hooks[r](t);return l==null?null:c.jsx(Yd,{children:l},`vane-slot-${i.name}`)}catch(l){return console.warn(`[vane/plugin-core] 插件 ${i.name} 的 ${r} 渲染失败`,l),null}})}function Xd(e,t){const n=e.attrValues;return n?n[t]:void 0}function Zd(e,t={}){return t.ignoreOutOfStock??!0?e.filter(r=>r.stock!==0):e}function ph(e,t={}){return!(!e||(t.ignoreOutOfStock??!0)&&e.stock===0)}function gh(e,t,n,r={}){const o=Zd(t,r),i={},l={};for(const s of e){const a=new Set,u=s.options??[];for(const d of u){const p={...n,[s.name]:d.id},m=Object.keys(p);m.length>0&&o.some(S=>m.every(v=>Xd(S,v)===p[v]))||a.add(d.id)}i[s.name]=a,l[s.name]=u.length-a.size}return{disabledMap:i,availableCount:l}}function du(e,t,n){if(!t.length)return null;for(const o of t)if(!n[o.name])return null;const r=Object.keys(n);return e.find(o=>r.every(i=>Xd(o,i)===n[i]))??null}function mh(e,t){return e.length?e.every(n=>!!t[n.name]):!1}function Zr(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)?e:null}function tn(e){return typeof e=="string"&&e.length>0}function hh(e,t){const n=[],r=[],o=new Set,i=Array.isArray(e)?e:[];for(let u=0;u<i.length;u+=1){const d=Zr(i[u]);if(!d||!tn(d.name)){n.push(`attributes[${u}] 缺少 name，已忽略`);continue}if(o.has(d.name)){n.push(`属性名「${d.name}」重复，已忽略重复项`);continue}o.add(d.name);const p=d.options;Array.isArray(p)||n.push(`属性「${d.name}」缺少 options，按空列表处理`);const m=[],y=new Set;for(const S of Array.isArray(p)?p:[]){const v=Zr(S);if(!v||!tn(v.id)){n.push(`属性「${d.name}」存在缺少 id 的选项，已忽略`);continue}if(y.has(v.id)){n.push(`属性「${d.name}」的选项 id「${v.id}」重复，已忽略重复项`);continue}y.add(v.id);const x={id:v.id,label:tn(v.label)?v.label:v.id};tn(v.image)&&(x.image=v.image),m.push(x)}r.push({name:d.name,options:m})}const l=[],s=new Set,a=Array.isArray(t)?t:[];for(let u=0;u<a.length;u+=1){const d=Zr(a[u]);if(!d||!tn(d.sku)){n.push(`variants[${u}] 缺少 sku，已忽略`);continue}if(s.has(d.sku)){n.push(`变体 sku「${d.sku}」重复，已忽略重复项`);continue}s.add(d.sku);const p={},m=Zr(d.attrValues);if(!m)n.push(`变体「${d.sku}」缺少 attrValues，按空值处理`);else for(const[y,S]of Object.entries(m))tn(S)&&(p[y]=S);l.push({...d,sku:d.sku,attrValues:p})}return{attributes:r,variants:l,issues:n}}function Qn(e,t){const n={};if(!t||typeof t!="object")return n;const r=new Map;for(const o of e)r.set(o.name,new Set((o.options??[]).map(i=>i.id)));for(const[o,i]of Object.entries(t)){if(typeof i!="string"||!i)continue;const l=r.get(o);!l||!l.has(i)||(n[o]=i)}return n}function yh(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t);return n.length!==r.length?!1:n.every(o=>e[o]===t[o])}const vh=[],Sh=[];function kh(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);return n.length!==r.length?!1:n.every(o=>e[o]===t[o])}function xh(e,t){const n=Array.isArray(t)?{plugins:t}:t,r=n.plugins,{enableDebug:o=!1}=n,i=k.forwardRef((l,s)=>{const a=k.useRef(null),u=k.useMemo(()=>hh(l.attributes??vh,l.variants??Sh),[l.attributes,l.variants]),{attributes:d,variants:p,issues:m}=u;k.useEffect(()=>{m.length&&console.warn("[vane-sku] 规格数据存在异常，已按归一化结果渲染：",m.join("；"))},[m]);const y=l.selection!==void 0,S=l.ignoreOutOfStock??!0,v=l.onSelectionChange,x=l.plugins??r,g=k.useRef(null),f=k.useCallback(L=>{const A=g.current;if(A&&A.source===L&&A.attributes===d)return A.value;const ee=Qn(d,L);return g.current={source:L,attributes:d,value:ee},ee},[d]),h=k.useRef(null),w=k.useCallback(L=>{const A=h.current;if(A&&A.attributes===d&&A.variants===p&&A.selection===L&&A.ignoreOutOfStock===S)return A.value;const ee=gh(d,p,L,{ignoreOutOfStock:S});return h.current={attributes:d,variants:p,selection:L,ignoreOutOfStock:S,value:ee},ee},[d,p,S]),C=k.useCallback(L=>{var Fs;const A=f((Fs=L.state)==null?void 0:Fs.selection),{disabledMap:ee}=w(A),Me=du(p,d,A),hf=ph(Me,{ignoreOutOfStock:S}),ci=be=>{const Zt=Qn(d,be);L.setState({selection:Zt}),y&&(v==null||v(Zt,du(p,d,Zt)))};return{...L,setState:be=>be&&"selection"in be?L.setState({...be,selection:Qn(d,be.selection)}):L.setState(be),selection:A,attributes:d,variants:p,ignoreOutOfStock:S,disabledMap:ee,variant:Me,purchasable:hf,isComplete:mh(d,A),selectOption:(be,Zt)=>{ci(A[be]===Zt?Object.fromEntries(Object.entries(A).filter(([yf])=>yf!==be)):{...A,[be]:Zt})},clearSelection:()=>ci({}),setSelection:be=>ci(be)}},[d,p,S,y,v,f,w]),R=fh({plugins:x,props:l,data:l.data,initialState:{selection:Qn(d,l.selection??l.defaultSelection??{})},containerRef:a,extendContext:C,enableDebug:o}),E=R.context,{selection:P,variant:O,purchasable:$}=E,W=R.state.selection,Se=R.setState;k.useEffect(()=>{if(!y)return;const L=Qn(d,l.selection);yh(W,L)||Se({selection:L})},[y,l.selection,d,Se,W]);const U=k.useCallback((L,...A)=>R.execute(L,...A),[R.manager]),ke=k.useRef([]),Re=k.useRef(!1);k.useEffect(()=>{const L=ke.current;ke.current=x,!(L.length===x.length&&x.every((ee,Me)=>ee===L[Me])&&Re.current)&&(Re.current=!0,U("onMount"))},[x,U]);const Ve=k.useRef(l);k.useEffect(()=>{const L=Ve.current;kh(L,l)||(Ve.current=l,U("onPropsChange",L,l))},[l,U]);const pt=k.useRef(null),b=k.useRef(void 0);k.useEffect(()=>{var ee,Me;const L=pt.current,A=b.current;pt.current=P,b.current=O,!(L===null||A===void 0)&&(L===P&&A===O||(U("onSkuChange",P,O),R.bus.emit("sku:change",{attrs:P,variant:O}),(ee=l.onChange)==null||ee.call(l,P,O),O&&$&&((Me=l.onValidSkuChange)==null||Me.call(l,O))))},[P,O,$,U]);const T=k.useMemo(()=>({before:Xr(R.orderedPlugins,E,{hook:"renderHeader",position:"before"}),overlay:Xr(R.orderedPlugins,E,{hook:"renderOverlay"}),after:Xr(R.orderedPlugins,E,{hook:"renderHeader",position:"after"}),footer:Xr(R.orderedPlugins,E,{hook:"renderFooter"})}),[R.orderedPlugins,E]),N=R.transformProps(l),D={...N,attributes:d,variants:p,containerRefExternal:a,debug:N.debug??o,slots:T,selection:P,disabledMap:E.disabledMap,variant:O,purchasable:$,onSelectOption:E.selectOption,onMount:()=>{var L;(L=N.onMount)==null||L.call(N)},onUnmount:()=>{var L;(L=N.onUnmount)==null||L.call(N)}},B=k.useRef(0),Ee=k.useRef(u);return Ee.current!==u&&(Ee.current=u,B.current+=1),c.jsx(Yd,{fallback:()=>c.jsx("div",{"data-testid":"sku-error",style:{fontSize:12,color:"#b32d08",padding:"6px 0"},children:"规格信息加载异常，请稍后重试"}),children:c.jsx(e,{ref:s,...D})},B.current)});return i.displayName="WithPlugins(SkuSelectorCore)",i}function K(e=[]){return xh(Gd,e)}K([]);function wh(e={}){return{name:"PriceRange",version:"0.1.0",description:"价格区间：未命中变体时展示可选范围的价格区间",priority:45,config:{slotPosition:"after",order:5,...e},hooks:{renderOverlay:t=>{if(t.variant&&!e.showWhenMatched)return null;const n=t.attributes??t.props.attributes??[],r=t.variants??t.props.variants??[],o=t.selection??{},l=Zd(r,{ignoreOutOfStock:t.ignoreOutOfStock??!0}).filter(p=>Object.keys(o).every(m=>{var y;return((y=p.attrValues)==null?void 0:y[m])===o[m]})).map(p=>p.price).filter(p=>typeof p=="number"&&Number.isFinite(p));if(!l.length)return null;const s=Math.min(...l),a=Math.max(...l),u=e.currency??"¥",d=e.separator??"–";return c.jsxs("div",{"data-testid":"sku-price-range",style:{display:"flex",alignItems:"baseline",gap:6,marginTop:6},children:[c.jsxs("span",{style:{fontSize:16,fontWeight:700,color:"#b32d08"},children:[u,_r(s),s!==a?`${d}${u}${_r(a)}`:""]}),n.length&&!t.isComplete?c.jsx("span",{style:{fontSize:11,color:"#5b6064"},children:"（请先选择规格）"}):null]})}}}}const Ph="PriceRange",Ch="价格区间：未选全或组合无货时，按当前选择过滤变体后取 min/max 展示价格区间（如 ¥199–¥269）；命中变体后默认退场，把价格区让给 PriceLink。",_h="0.1.0",Rh=["sku","price","range"],Eh=[{name:"renderOverlay",when:"每次渲染，覆盖在规格面板之上",description:"浮层选择器、库存提示、加载遮罩"}],bh=[],jh="只读取 context 字段（props / state / data），不调用上下文方法",Nh=[{name:"currency",type:"string",default:'"¥"',description:"货币符号"},{name:"separator",type:"string",default:'"–"',description:"区间连接符"},{name:"showWhenMatched",type:"boolean",default:"false",description:"命中变体时是否仍显示区间（默认让位给 PriceLink）"}],$h="const Sku = createSkuSelector([createPriceRangePlugin(), createPriceLinkPlugin()]);",Th=["按当前选择过滤变体，区间随选择动态收窄",'最低价=最高价时只显示一个价格，不画成 "¥199–¥199"',"与 PriceLink 互斥接力：未命中显区间、命中显单价"],Oh=["多规格商品的价格引导","未选规格时的价格预览"],Lh=["与 PriceLink 同走 renderOverlay 段，靠 config.order（PriceRange=5）排在前面。","两者可同时装载而不重影：命中变体时 PriceRange 自动返回 null。"],ef={name:Ph,description:Ch,since:_h,tags:Rh,events:Eh,methods:bh,methodsNote:jh,config:Nh,example:$h,features:Th,useCases:Oh,notes:Lh},Tr=Object.assign(wh,{meta:ef});function Mh(e={}){return{name:"PriceLink",version:"0.1.0",description:"价格联动：把命中变体的价格渲染到浮层",priority:50,config:e,hooks:{renderOverlay:t=>{const n=t.variant;if(!n||typeof n.price!="number")return null;const r=e.currency??"¥",i=(e.showOriginal??!0)&&typeof n.originalPrice=="number"&&n.originalPrice>n.price;return c.jsxs("div",{"data-testid":"sku-price",style:{display:"flex",alignItems:"baseline",gap:6,marginTop:6},children:[c.jsxs("span",{style:{fontSize:18,fontWeight:700,color:"#b32d08"},children:[r,_r(n.price)]}),i?c.jsxs("s",{"data-testid":"sku-price-original",style:{fontSize:12,color:"#6b7076"},children:[r,_r(n.originalPrice)]}):null,e.discountText?c.jsx("span",{"data-testid":"sku-price-discount",style:{fontSize:11,padding:"1px 6px",borderRadius:4,background:"#fff1f0",color:"#b32d08"},children:e.discountText}):null]})}}}}const Ah="PriceLink",Ih="价格联动：把命中变体的价格渲染到浮层（选中摘要之后），支持原价删除线与折扣文案。",Dh="0.1.0",zh=["sku","price","overlay"],Uh=[{name:"renderOverlay",when:"每次渲染，覆盖在规格面板之上",description:"浮层选择器、库存提示、加载遮罩"}],Bh=[],Vh="只读取 context 字段（props / state / data），不调用上下文方法",Fh=[{name:"currency",type:"string",default:'"¥"',description:"货币符号"},{name:"showOriginal",type:"boolean",default:"true",description:"是否展示原价（原价 > 现价时才画删除线）"},{name:"discountText",type:"string",default:"-",description:'折扣文案，如 "限时8折"'}],Hh='const Sku = createSkuSelector([createPriceLinkPlugin({ currency: "¥", discountText: "限时8折" })]);',Qh=["订阅命中变体，未命中（未选全/无货）时不渲染价格区","原价高于现价时自动画删除线","定价策略可替换：默认取 variant.price"],Kh=["多规格商品的价格联动","带折扣文案的促销价展示"],Wh=["走 renderOverlay 段，渲染位置在 core「选中摘要」之后、Quota 提示条之前。","priority 50；渲染插槽内 priority 越大越靠后。"],tf={name:Ah,description:Ih,since:Dh,tags:zh,events:Uh,methods:Bh,methodsNote:Vh,config:Fh,example:Hh,features:Qh,useCases:Kh,notes:Wh},Or=Object.assign(Mh,{meta:tf}),se=[{name:"颜色",options:[{id:"red",label:"红",image:Di("#d4380d")},{id:"blue",label:"蓝",image:Di("#2b7de9")},{id:"green",label:"绿",image:Di("#389e0d")}]},{name:"尺码",options:[{id:"s",label:"S"},{id:"m",label:"M"},{id:"l",label:"L"}]}],oe=[{sku:"TEE-RED-S",attrValues:{颜色:"red",尺码:"s"},price:199,originalPrice:299,stock:5,quota:2,image:It("red-s")},{sku:"TEE-RED-M",attrValues:{颜色:"red",尺码:"m"},price:219,originalPrice:299,stock:3,image:It("red-m")},{sku:"TEE-RED-L",attrValues:{颜色:"red",尺码:"l"},price:239,stock:4,image:It("red-l")},{sku:"TEE-BLUE-S",attrValues:{颜色:"blue",尺码:"s"},price:209,stock:8,image:It("blue-s")},{sku:"TEE-BLUE-M",attrValues:{颜色:"blue",尺码:"m"},price:229,stock:6,image:It("blue-m")},{sku:"TEE-GREEN-M",attrValues:{颜色:"green",尺码:"m"},price:249,stock:2,image:It("green-m")},{sku:"TEE-GREEN-L",attrValues:{颜色:"green",尺码:"l"},price:269,stock:0,image:It("green-l")}];function Di(e){return`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><rect width="16" height="16" rx="3" fill="${e}"/></svg>`)}`}function It(e){return`https://picsum.photos/seed/${e}/240/240`}const qh=[{label:"限时8折",value:"限时8折"},{label:"满300减60",value:"满300减60"},{label:"无（不传）",value:""}],Gh={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},Jh={slug:"quickstart",title:"最小可用选择器",group:"basic",capability:"core-assembly",intro:"5 行装配出能用的选择器：Core（按钮组 + 禁用推导 + 摘要）起步，按需叠价格插件。",why:"先跑通内核，再增量叠插件——规格选择的长尾需求多，全塞进内核只会越来越难改。",plugs:[{fn:"createPriceRangePlugin",why:"未选全时兜底显示价格区间，价格区不空窗"},{fn:"createPriceLinkPlugin",cfg:"discountText: '限时8折'",why:"命中变体后显示单价与原价删除线"}],props:["attributes={attributes}","variants={variants}"],controls:[{key:"withRange",label:"加价格区间",kind:"switch",init:!1},{key:"withLink",label:"加价格联动",kind:"switch",init:!1}],stageHeight:300};function Yh({cfg:e}){const t=!!e.withRange,n=!!e.withLink,r=k.useMemo(()=>K([...t?[Tr()]:[],...n?[Or({discountText:"限时8折"})]:[]]),[t,n]);return c.jsxs("div",{style:Gh,children:[c.jsx(r,{attributes:se,variants:oe}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"两个开关都关就是裸 Core：选「蓝」后 L 置灰，摘要告诉你命中的变体。"})]})}const Xh=Object.freeze(Object.defineProperty({__proto__:null,default:Yh,meta:Jh},Symbol.toStringTag,{value:"Module"})),Zh={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},ey={slug:"disable",title:"禁用推导（内置）",group:"basic",capability:"disable-derivation",intro:"组合矩阵在内核：选「蓝」后 L 自动置灰（缺 blue-l 变体），死路提前画出来。",why:"用户不该点了才发现没货；把「选不出结果的组合」提前置灰，是规格选择器的体验底线。",plugs:[],props:["attributes={attributes}","variants={variants}",{text:"defaultSelection={{ 颜色: '{{preset}}' }}",when:e=>e.preset!=="none"},"onChange={handleChange}"],note:"推导是纯函数 buildAvailability(attributes, variants, selection)，不依赖 React，可直接单测。",controls:[{key:"preset",label:"预选颜色",kind:"select",init:"none",options:[{label:"不预选",value:"none"},{label:"红 red",value:"red"},{label:"蓝 blue",value:"blue"}]}],stageHeight:300};function ty({cfg:e,log:t}){const n=String(e.preset),r=k.useMemo(()=>K([]),[]);return c.jsxs("div",{style:Zh,children:[c.jsx(r,{attributes:se,variants:oe,defaultSelection:n==="none"?void 0:{颜色:n},onChange:(o,i)=>t(i?`命中变体 ${i.sku} · ${JSON.stringify(o)}`:`未命中可售变体 · ${JSON.stringify(o)}`,i?"event":"warn")},n),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"点「蓝」看主角戏：L 因缺 blue-l 被置灰；defaultSelection 只在挂载时生效一次，所以预选切换靠 key 重挂载。"})]})}const ny=Object.freeze(Object.defineProperty({__proto__:null,default:ty,meta:ey},Symbol.toStringTag,{value:"Module"})),ry={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},zi=se[0],oy=se[1],fu=oe.filter(e=>e.attrValues.颜色!=="green"),iy={slug:"two-attr",title:"双属性小矩阵",group:"basic",capability:"matrix",intro:"颜色 × 尺码的小矩阵：拖开关删掉「红」，attributes 数组热更新，禁用推导随之重算。",why:"后台改规格、运营下架某选项，前端改的只是数据；矩阵怎么变是内核的事。",plugs:[],props:["attributes={attributes}","variants={variants}"],note:"buildAvailability / matchVariant / isSelectionComplete 都是纯函数，服务端下发同一份结构也能直接算。",controls:[{key:"dropRed",label:"删掉红色选项",kind:"switch",init:!1}],stageHeight:300};function ly({cfg:e,log:t}){const n=!!e.dropRed,r=k.useMemo(()=>K([]),[]),o=k.useMemo(()=>[{...zi,options:n?zi.options.filter(l=>l.id!=="red"):zi.options.slice(0,2)},oy],[n]),i=k.useMemo(()=>n?fu.filter(l=>l.attrValues.颜色!=="red"):fu,[n]);return c.jsxs("div",{style:ry,children:[c.jsx(r,{attributes:o,variants:i,onChange:(l,s)=>t(s?`命中 ${s.sku}`:`未命中 · ${JSON.stringify(l)}`,s?"event":"warn")}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"先选「蓝」再拖开关：红消失、选择保留，L 依旧置灰 —— blue-l 本就不存在，小矩阵下它成了永久死路。"})]})}const sy=Object.freeze(Object.defineProperty({__proto__:null,default:ly,meta:iy},Symbol.toStringTag,{value:"Module"})),ay={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},uy={slug:"ignore-stock",title:"缺货是否参与推导",group:"basic",capability:"ignore-out-of-stock",intro:"green-l 库存 0：默认把它当不存在（通往它的选项置灰）；关掉开关后变为可选。",why:"「缺货直接置灰」还是「可点但不让下单」是两种运营策略；两种都常见，内核不该替你拍板。",plugs:[],props:["attributes={attributes}","variants={variants}","ignoreOutOfStock={{{ignore}}}"],note:"关掉后 green-l 可选且仍会命中变体（stock=0）——加购拦截交给 Quota 或宿主，推导不管下单。",controls:[{key:"ignore",label:"缺货视为不存在",kind:"switch",init:!0}],stageHeight:300};function cy({cfg:e,log:t}){const n=!!e.ignore,r=k.useMemo(()=>K([]),[]);return c.jsxs("div",{style:ay,children:[c.jsx(r,{attributes:se,variants:oe,ignoreOutOfStock:n,onChange:(o,i)=>i?t(`命中 ${i.sku} · 库存 ${i.stock??"—"}`,"event"):t(`未命中 · ${JSON.stringify(o)}`,"warn")}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"先选「绿」：L 置灰（缺货默认视为不存在）。关掉开关后 L 可选，点它会命中 stock=0 的 TEE-GREEN-L。"})]})}const dy=Object.freeze(Object.defineProperty({__proto__:null,default:cy,meta:uy},Symbol.toStringTag,{value:"Module"}));function fy(e={}){const t=(n,r,o,i)=>{var s;if(e.onlyMatched&&!i)return;const l={name:r,selection:o,variant:i,at:Date.now()};n.bus.emit("sku:analytics",l),(s=e.onEvent)==null||s.call(e,l)};return{name:"Analytics",version:"0.1.0",description:"规格选择埋点：回调 + 总线双通道，不渲染 UI",priority:10,config:e,hooks:{onMount:n=>{t(n,"sku:mount",n.selection,n.variant)},onSkuChange:(n,r,o)=>{t(n,o?"sku:change":"sku:invalid",r,o)}}}}const py="Analytics",gy="规格选择埋点：sku:mount / sku:change / sku:invalid 三类事件，回调（onEvent）与总线（sku:analytics）双通道，自身不渲染 UI。",my="0.1.0",hy=["sku","analytics","event"],yy=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"},{name:"onSkuChange",when:"用户选择或命中变体变化后（回传 selection / variant）",description:"联动价格、库存、图片，或做埋点上报"},{name:"sku:analytics",when:"挂载 / 命中变更 / 无效组合时",description:"广播埋点事件对象，供外部 SDK 上报"}],vy=[],Sy="只读取 context 字段（props / state / data），不调用上下文方法",ky=[{name:"onEvent",type:"(event) => void",default:"-",description:"统一事件出口，推荐接自己的埋点 SDK"},{name:"onlyMatched",type:"boolean",default:"false",description:"只在命中变体时上报；关闭时未命中也上报，便于发现「选不出来」的组合"}],xy="const Sku = createSkuSelector([createAnalyticsPlugin({ onEvent: (e) => track(e.name, e) })]);",wy=["三类事件：挂载 / 命中变更 / 无效组合","未命中也上报（默认），能发现「用户点得到但选不出」的坏组合","回调与总线双通道，不绑定任何 SDK"],Py=["转化漏斗埋点","选品与库存分析"],Cy=["不占用渲染插槽，是纯事件插件。","priority 10，事件钩子按 priority 从大到小执行（会晚于 Quota 等）。"],nf={name:py,description:gy,since:my,tags:hy,events:yy,methods:vy,methodsNote:Sy,config:ky,example:xy,features:wy,useCases:Py,notes:Cy},Us=Object.assign(fy,{meta:nf});function _y(e={}){const t=n=>{var o,i;const r=(o=n.variant)==null?void 0:o.image;r&&((i=e.onImageChange)==null||i.call(e,r),n.bus.emit("sku:image",r))};return{name:"ImageLink",version:"0.1.0",description:"规格切主图：命中变体带图时抛事件，不渲染 UI",priority:30,config:e,hooks:{onMount:n=>{t(n)},onSkuChange:n=>{t(n)}}}}const Ry="ImageLink",Ey="规格切主图：命中变体带 image 时抛事件（回调 + 总线 sku:image），自身不渲染任何 UI。",by="0.1.0",jy=["sku","image","event"],Ny=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"},{name:"onSkuChange",when:"用户选择或命中变体变化后（回传 selection / variant）",description:"联动价格、库存、图片，或做埋点上报"},{name:"sku:image",when:"命中变体带图、需要切换主图时",description:"广播目标图片地址，由外部图区响应"}],$y=[],Ty="只读取 context 字段（props / state / data），不调用上下文方法",Oy=[{name:"onImageChange",type:"(image: string) => void",default:"-",description:"主图切换回调（推荐用法）"}],Ly="const Sku = createSkuSelector([createImageLinkPlugin({ onImageChange: setMainImage })]);",My=["只发事件不渲染：主图由外层 gallery / card 负责，联动与渲染解耦","同时回调与总线广播（sku:image），两种接法都支持","未命中变体或变体无图时不发事件"],Ay=["选颜色切主图","规格图与 vane-gallery 联动"],Iy=["不占用任何渲染插槽，纯粹是事件插件。","priority 30；事件钩子按 priority 从大到小执行。"],rf={name:Ry,description:Ey,since:by,tags:jy,events:Ny,methods:$y,methodsNote:Ty,config:Oy,example:Ly,features:My,useCases:Ay,notes:Iy},ri=Object.assign(_y,{meta:rf});function Dy(e={}){const t=e.preventDefault??!0;return{name:"KeyboardNav",version:"0.1.0",description:"键盘漫游：方向键移动焦点，Enter/Space 选择",priority:25,config:e,hooks:{onMount:n=>{var l,s;const r=((s=(l=n.refs).getContainer)==null?void 0:s.call(l))??null;if(!r)return;const o=a=>Array.from(a.querySelectorAll('[data-testid^="sku-opt-"]')),i=a=>{var h,w;const u=a.key==="ArrowLeft"||a.key==="ArrowRight",d=a.key==="ArrowUp"||a.key==="ArrowDown";if(!u&&!d)return;const p=(w=(h=a.target)==null?void 0:h.closest)==null?void 0:w.call(h,'[data-testid^="sku-opt-"]');if(!p)return;const m=Array.from(r.querySelectorAll('[data-testid^="sku-attr-"]')),y=m.findIndex(C=>C.contains(p));if(y<0)return;if(t&&a.preventDefault(),u){const C=o(m[y]),R=C.indexOf(p);if(R<0||!C.length)return;const E=a.key==="ArrowRight"?1:-1;for(let P=1;P<=C.length;P+=1){const O=((R+E*P)%C.length+C.length)%C.length,$=C[O];if(!$.disabled){$.focus();return}}return}const S=m[y+(a.key==="ArrowDown"?1:-1)];if(!S)return;const v=o(m[y]).indexOf(p),x=o(S);let g=null,f=1/0;for(let C=0;C<x.length;C+=1){const R=x[C];if(R.disabled)continue;const E=Math.abs(C-v);E<f&&(f=E,g=R)}g==null||g.focus()};return r.addEventListener("keydown",i),()=>r.removeEventListener("keydown",i)}}}}const zy="KeyboardNav",Uy="键盘漫游：方向键在两行规格按钮间移动焦点（←→ 同属性、↑↓ 跨属性），Enter / Space 才选中，自动跳过被禁用推导置灰的选项。",By="0.1.0",Vy=["sku","a11y","keyboard"],Fy=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"}],Hy=[],Qy="只读取 context 字段（props / state / data），不调用上下文方法",Ky=[{name:"preventDefault",type:"boolean",default:"true",description:"是否阻止方向键的默认滚动行为"}],Wy="const Sku = createSkuSelector([createKeyboardNavPlugin()]);",qy=["←→ 同属性移动焦点、↑↓ 跨属性移动焦点（按完整候选列表的列位置就近落点）","移动焦点不等于改变选择，Enter / Space 才触发选择（roving tabindex 由 core 提供）","自动跳过 disabled 选项，不会「跳到死路上」","纯 DOM 查询实现，不侵入 core 渲染"],Gy=["无障碍 / 键盘用户","电视端 / 大屏选购"],Jy=["不占用渲染插槽，是纯行为插件。","依赖 core 按钮的 data-testid 约定（sku-attr-* / sku-opt-*）。","onMount 返回清理函数，卸载时自动摘除监听。"],of={name:zy,description:Uy,since:By,tags:Vy,events:Fy,methods:Hy,methodsNote:Qy,config:Ky,example:Wy,features:qy,useCases:Gy,notes:Jy},oi=Object.assign(Dy,{meta:of});function Yy(e={}){const t=e.defaultValue??1,n=e.purchasedCount??0,r=l=>rh(l.variant,{purchasedCount:n,max:e.max}),o=l=>{var u;const s=r(l),a=typeof((u=l.state)==null?void 0:u.quantity)=="number"?l.state.quantity:t;return!Number.isFinite(s)||s<=0?t:Math.max(1,Math.min(a,s))},i=(l,s)=>{var p,m;const a=o(l),u=(p=l.state)==null?void 0:p.quantity;if(typeof u=="number"&&u===a)return;const d=typeof u=="number";l.setState({quantity:a}),d&&s&&((m=e.onChange)==null||m.call(e,a))};return{name:"Quantity",version:"0.1.0",description:"数量步进器：受库存与剩余限购双重上限约束，并写回 state",priority:35,config:{slotPosition:"after",order:20,...e},hooks:{onMount:l=>{i(l,!1)},onSkuChange:l=>{i(l,!0)},renderHeader:l=>{var y;if(!l.variant)return null;const a=r(l);if(!Number.isFinite(a)||a<=0)return null;const u=typeof((y=l.state)==null?void 0:y.quantity)=="number"?l.state.quantity:t,d=Math.max(1,Math.min(u,a)),p=S=>{var x;const v=Math.max(1,Math.min(S,a));v!==u&&(l.setState({quantity:v}),(x=e.onChange)==null||x.call(e,v))},m={width:26,height:26,border:"1px solid #d0d4da",background:"#fff",color:"#1f2328",cursor:"pointer",borderRadius:4,lineHeight:1};return c.jsxs("div",{"data-testid":"sku-quantity","data-quantity":String(d),"data-max":String(a),style:{display:"flex",alignItems:"center",gap:8,marginTop:6},children:[c.jsx("span",{style:{fontSize:12,color:"#4a5056"},children:"数量"}),c.jsx("button",{type:"button","data-testid":"sku-quantity-minus",disabled:d<=1,onClick:()=>p(d-1),style:{...m,color:d<=1?"#7d838a":"#1f2328",cursor:d<=1?"not-allowed":"pointer"},children:"−"}),c.jsx("span",{style:{minWidth:28,textAlign:"center",fontSize:13},children:d}),c.jsx("button",{type:"button","data-testid":"sku-quantity-plus",disabled:d>=a,onClick:()=>p(d+1),style:{...m,color:d>=a?"#7d838a":"#1f2328",cursor:d>=a?"not-allowed":"pointer"},children:"+"}),c.jsxs("span",{style:{fontSize:11,color:"#5b6064"},children:["上限 ",a]})]})}}}}const Xy="Quantity",Zy="数量步进器：上限取「库存」与「限购」的较小值，数量写入内核 state（key: quantity）供宿主加购按钮读取。",ev="0.1.0",tv=["sku","quantity","stepper"],nv=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"},{name:"onSkuChange",when:"用户选择或命中变体变化后（回传 selection / variant）",description:"联动价格、库存、图片，或做埋点上报"},{name:"renderHeader",when:"每次渲染，规格面板头部槽位",description:"商品图、价格、已选摘要"}],rv=[],ov="只读取 context 字段（props / state / data），不调用上下文方法",iv=[{name:"defaultValue",type:"number",default:"1",description:"初始数量"},{name:"max",type:"number",default:"-",description:"硬上限（不传则取 库存/限购 的较小值）"},{name:"onChange",type:"(quantity: number) => void",default:"-",description:"数量变化回调"}],lv="const Sku = createSkuSelector([createQuantityPlugin({ defaultValue: 1 })]);",sv=["上限 = min(库存, 限购, config.max)，到边界时按钮自动禁用","切换变体后数量自动收敛到新上限内","数量写 state，宿主读 context.state.quantity 即可"],av=["商品详情页选数量","限购商品的步进约束"],uv=["走 renderHeader 的 after 段（order 20），排在库存提示之后。","未命中变体时不渲染（数量依附于具体 SKU）。"],lf={name:Xy,description:Zy,since:ev,tags:tv,events:nv,methods:rv,methodsNote:ov,config:iv,example:lv,features:sv,useCases:av,notes:uv},ii=Object.assign(Yy,{meta:lf});function cv(e,t=0){const n=e==null?void 0:e.quota,r=qd(n,t);return{quota:n,remaining:r,canPurchase:r>0}}function dv(e={}){const t=e.purchasedCount??0,n=o=>cv(o.variant,t),r=o=>{const{remaining:i,canPurchase:l}=n(o);return o.setState({canPurchase:l,remainingQuota:i}),l};return{name:"Quota",version:"0.1.0",description:"限购校验：渲染限购提示条并暴露 canPurchase / remaining",priority:40,config:e,hooks:{onMount:o=>{r(o)},onSkuChange:o=>{var i;r(o)||(i=e.onExceed)==null||i.call(e)},renderHeader:o=>{const{quota:i,remaining:l,canPurchase:s}=n(o);return typeof i!="number"?null:c.jsxs("div",{"data-testid":"sku-quota","data-can-purchase":s?"true":"false","data-remaining":String(l),style:{marginTop:6,fontSize:12,padding:"4px 8px",borderRadius:4,background:s?"#f6ffed":"#fff1f0",color:s?"#237a06":"#b32d08",border:`1px solid ${s?"#b7eb8f":"#ffa39e"}`},children:["每人限购 ",i," 件（已购 ",t,"）",s?` · 还可购 ${l} 件`:" · 已达限购上限"]})}}}}const fv="Quota",pv="限购校验：读 variant.quota 与已购数渲染限购提示条，并把 canPurchase 写入内核 state 供宿主加购按钮门控。",gv="0.1.0",mv=["sku","quota","limit"],hv=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"},{name:"onSkuChange",when:"用户选择或命中变体变化后（回传 selection / variant）",description:"联动价格、库存、图片，或做埋点上报"},{name:"renderHeader",when:"每次渲染，规格面板头部槽位",description:"商品图、价格、已选摘要"}],yv=[],vv="只读取 context 字段（props / state / data），不调用上下文方法",Sv=[{name:"purchasedCount",type:"number",default:"0",description:"当前用户已购件数"},{name:"onExceed",type:"() => void",default:"-",description:"超出限购时回调"}],kv="const Sku = createSkuSelector([createQuotaPlugin({ purchasedCount: 1 })]);",xv=["variant.quota 声明限购件数；未声明视为不限购","canPurchase 写入内核 state（onMount / onSkuChange），宿主加购按钮可直接读","超限变体切换时触发 onExceed 回调"],wv=["限量/每人限购的商品","会员等级限购"],Pv=["走 renderHeader 的 after 段，渲染在价格浮层之后。","canPurchase 只在事件钩子写入，不在渲染期 setState，避免渲染期改状态告警。"],sf={name:fv,description:pv,since:gv,tags:mv,events:hv,methods:yv,methodsNote:vv,config:Sv,example:kv,features:xv,useCases:wv,notes:Pv},li=Object.assign(dv,{meta:sf});function Cv(e={}){return{name:"ResetBar",version:"0.1.0",description:"清空重选：一键重置全部规格选择",priority:20,config:{slotPosition:"after",order:40,...e},hooks:{renderHeader:t=>Object.keys(t.selection??{}).length>0?c.jsx("div",{style:{marginTop:8},children:c.jsx("button",{type:"button","data-testid":"sku-reset",onClick:()=>{var r;t.clearSelection(),(r=e.onReset)==null||r.call(e)},style:{padding:"4px 10px",fontSize:12,borderRadius:4,border:"1px solid #d0d4da",background:"#fff",color:"#1f2328",cursor:"pointer"},children:e.text??"清空重选"})}):null}}}const _v="ResetBar",Rv="清空重选：一键重置全部规格选择，走 context.clearSelection()。未选任何规格时不渲染。",Ev="0.1.0",bv=["sku","reset","ux"],jv=[{name:"renderHeader",when:"每次渲染，规格面板头部槽位",description:"商品图、价格、已选摘要"}],Nv=[{name:"clearSelection",signature:"ctx.clearSelection(): void",description:"清空全部已选规格，回到未选状态"}],$v=[{name:"text",type:"string",default:'"清空重选"',description:"按钮文案"},{name:"onReset",type:"() => void",default:"-",description:"清空后回调"}],Tv='const Sku = createSkuSelector([createResetBarPlugin({ text: "重新选择" })]);',Ov=["整段重置，不用逐个取消","无选择时自动隐藏，不占版面"],Lv=["选错规格后重来","移动端小屏的快速重置"],Mv=["走 renderHeader 的 after 段（order 40），排在数量之后。","依赖核心 context.clearSelection()（vane-sku 0.1.0 起提供）。"],af={name:_v,description:Rv,since:Ev,tags:bv,events:jv,methods:Nv,config:$v,example:Tv,features:Ov,useCases:Lv,notes:Mv},si=Object.assign(Cv,{meta:af});function Av(e={}){return{name:"SkuCode",version:"0.1.0",description:"货号展示：命中变体后显示 SKU 编码",priority:15,config:{slotPosition:"after",order:50,...e},hooks:{renderHeader:t=>{const n=t.variant;return n!=null&&n.sku?c.jsxs("div",{"data-testid":"sku-code",style:{marginTop:6,fontSize:11,color:"#5b6064",fontFamily:"ui-monospace, monospace"},children:[e.label??"货号","：",n.sku]}):null}}}}const Iv="SkuCode",Dv="货号展示：命中变体后显示 SKU 编码，便于客服对单、用户报修与订单核对。",zv="0.1.0",Uv=["sku","code","meta"],Bv=[{name:"renderHeader",when:"每次渲染，规格面板头部槽位",description:"商品图、价格、已选摘要"}],Vv=[],Fv="只读取 context 字段（props / state / data），不调用上下文方法",Hv=[{name:"label",type:"string",default:'"货号"',description:"前缀文案"}],Qv='const Sku = createSkuSelector([createSkuCodePlugin({ label: "SKU" })]);',Kv=["命中变体才显示，未选全时不占位","等宽字体呈现编码，便于复制核对"],Wv=["商品详情页货号展示","客服对单 / 售后核对"],qv=["走 renderHeader 的 after 段（order 50），排在最末尾。","core 的「选中摘要」里也含 SKU 编码；本插件用于需要单独突出编码的场景。"],uf={name:Iv,description:Dv,since:zv,tags:Uv,events:Bv,methods:Vv,methodsNote:Fv,config:Hv,example:Qv,features:Kv,useCases:Wv,notes:qv},ai=Object.assign(Av,{meta:uf});function pu(e){if(typeof window>"u")return null;try{return e==="session"?window.sessionStorage:window.localStorage}catch{return null}}function Gv(e={}){const t=e.key??"vane-sku:selection",n=e.scope??"local",r=e.productKey==null||e.productKey===""?t:`${t}:${e.productKey}`;return{name:"StatePersistence",version:"0.1.0",description:"选择态持久化：记住上次选的规格（localStorage / sessionStorage）",priority:26,config:e,hooks:{onMount:o=>{const i=pu(n);if(i)try{const l=i.getItem(r);if(!l)return;const s=JSON.parse(l);s&&typeof s=="object"&&Object.keys(s).length&&o.setSelection(s)}catch{}},onSkuChange:(o,i)=>{const l=pu(n);if(l)try{Object.keys(i).length?l.setItem(r,JSON.stringify(i)):l.removeItem(r)}catch{}}}}}const Jv="StatePersistence",Yv="选择态持久化：把上次选的规格存进 localStorage / sessionStorage，挂载时自动还原；清空选择时删除键。",Xv="0.1.0",Zv=["sku","persistence","storage"],eS=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"},{name:"onSkuChange",when:"用户选择或命中变体变化后（回传 selection / variant）",description:"联动价格、库存、图片，或做埋点上报"}],tS=[{name:"setSelection",signature:"ctx.setSelection(selection: SkuSelection): void",description:"写入已选规格（内核 state，触发价格 / 库存 / 图片联动）"}],nS=[{name:"key",type:"string",default:'"vane-sku:selection"',description:"存储键"},{name:"scope",type:'"local" | "session"',default:'"local"',description:"local=localStorage，session=sessionStorage"}],rS='const Sku = createSkuSelector([createStatePersistencePlugin({ scope: "session" })]);',oS=["挂载读回、变化写入，清空即删键","隐私模式 / 存储禁用 / 配额超限均静默降级，不影响主流程","脏数据（解析失败）直接忽略"],iS=["回访时保持上次规格","多步下单流程中途返回"],lS=["不占用渲染插槽，是纯行为插件。","与 UrlSync 可共存：UrlSync 负责可分享，本插件负责本机记忆。"],cf={name:Jv,description:Yv,since:Xv,tags:Zv,events:eS,methods:tS,config:nS,example:rS,features:oS,useCases:iS,notes:lS},Bs=Object.assign(Gv,{meta:cf});function sS(e={}){const t=e.lowStockThreshold??5,n=e.soldOutText??"暂时缺货",r=e.showCount??!0;return{name:"StockStatus",version:"0.1.0",description:"库存状态：现货 / 仅剩 N 件 / 缺货",priority:42,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:o=>{const i=o.variant;if(!i)return null;const l=i.stock;if(typeof l!="number")return null;const s=l===0,a=!s&&l<=t,u=s?"#b32d08":a?"#a54a00":"#237a06",d=s?"#fff1f0":a?"#fff7e6":"#f6ffed",p=s?"#ffa39e":a?"#ffd591":"#b7eb8f",m=s?n:a?r?`仅剩 ${l} 件`:"库存紧张":r?`现货 · 库存 ${l}`:"现货";return c.jsx("div",{"data-testid":"sku-stock","data-stock":String(l),"data-sold-out":s?"true":"false",style:{marginTop:6,fontSize:12,padding:"4px 8px",borderRadius:4,background:d,color:u,border:`1px solid ${p}`},children:m})}}}}const aS="StockStatus",uS="库存状态：命中变体后展示「现货 / 仅剩 N 件 / 缺货」，低库存阈值可配。",cS="0.1.0",dS=["sku","stock","inventory"],fS=[{name:"renderHeader",when:"每次渲染，规格面板头部槽位",description:"商品图、价格、已选摘要"}],pS=[],gS="只读取 context 字段（props / state / data），不调用上下文方法",mS=[{name:"lowStockThreshold",type:"number",default:"5",description:"低库存预警阈值：库存 ≤ 该值时显示「仅剩 N 件」"},{name:"soldOutText",type:"string",default:'"暂时缺货"',description:"缺货文案"},{name:"showCount",type:"boolean",default:"true",description:"是否展示具体库存数字"}],hS="const Sku = createSkuSelector([createStockStatusPlugin({ lowStockThreshold: 3 })]);",yS=["三态：现货 / 低库存（仅剩 N 件）/ 缺货","阈值可配，用来制造紧迫感","带 data-stock / data-sold-out 便于测试与自动化断言"],vS=["商品详情页库存提示","低库存紧迫感营销"],SS=["走 renderHeader 的 after 段（order 10），排在价格之后。","变体未声明 stock 时不渲染（不做无依据的库存承诺）。"],df={name:aS,description:uS,since:cS,tags:dS,events:fS,methods:pS,methodsNote:gS,config:mS,example:hS,features:yS,useCases:vS,notes:SS},ui=Object.assign(sS,{meta:df});function kS(e={}){const t=e.paramPrefix??"sku_",n=e.useReplace??!0,r=()=>{if(typeof window>"u")return{};const i=new URLSearchParams(window.location.search),l={};for(const[s,a]of i.entries())s.startsWith(t)&&a&&(l[s.slice(t.length)]=a);return l},o=i=>{if(typeof window>"u")return;const l=new URLSearchParams(window.location.search);for(const u of Array.from(l.keys()))u.startsWith(t)&&l.delete(u);for(const[u,d]of Object.entries(i))l.set(t+u,d);const s=l.toString(),a=`${window.location.pathname}${s?`?${s}`:""}${window.location.hash}`;n?window.history.replaceState(null,"",a):window.history.pushState(null,"",a)};return{name:"UrlSync",version:"0.1.0",description:"URL 同步：把规格选择写进查询串，并可从 URL 还原（含 popstate）",priority:28,config:e,hooks:{onMount:i=>{const l=r();if(Object.keys(l).length&&i.setSelection(l),typeof window>"u")return;const s=()=>{i.setSelection(r())};return window.addEventListener("popstate",s),()=>window.removeEventListener("popstate",s)},onSkuChange:(i,l)=>{o(l)}}}}const xS="UrlSync",wS="URL 同步：把规格选择写进查询串（?sku_颜色=red&sku_尺码=s），挂载时反向解析还原，刷新与分享都能保持选择。",PS="0.1.0",CS=["sku","url","share"],_S=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"},{name:"onSkuChange",when:"用户选择或命中变体变化后（回传 selection / variant）",description:"联动价格、库存、图片，或做埋点上报"}],RS=[{name:"setSelection",signature:"ctx.setSelection(selection: SkuSelection): void",description:"写入已选规格（内核 state，触发价格 / 库存 / 图片联动）"}],ES=[{name:"paramPrefix",type:"string",default:'"sku_"',description:"查询参数前缀，避免与页面其它参数冲突"},{name:"useReplace",type:"boolean",default:"true",description:"true=replaceState（不污染前进后退），false=pushState"}],bS='const Sku = createSkuSelector([createUrlSyncPlugin({ paramPrefix: "sku_" })]);',jS=["选择 → URL、URL → 选择 双向同步","前缀隔离，不覆盖页面其它查询参数","默认 replaceState，不把每次点击都塞进历史栈"],NS=["客服带规格的链接","分享已选规格的商品页","刷新后保持选择"],$S=["不占用渲染插槽，是纯行为插件。","SSR 下 window 不存在时自动降级为空操作。"],ff={name:xS,description:wS,since:PS,tags:CS,events:_S,methods:RS,config:ES,example:bS,features:jS,useCases:NS,notes:$S},Vs=Object.assign(kS,{meta:ff}),TS={"sku:mount":"挂载","sku:change":"命中","sku:invalid":"未命中"},OS={slug:"full-combo",title:"全量装配：商品规格面板",group:"advanced",capability:"full-assembly",intro:"12 个官方插件全装配成商品规格面板：价格、库存、限购、数量、主图、键盘、埋点一次到位。",why:"真实商品详情页要的能力就这么多；要哪些装哪些，不要的子路径不进包——这就是按需插件的意义。",plugs:[{fn:"createPriceRangePlugin",why:"未选全时兜底显示价格区间"},{fn:"createPriceLinkPlugin",cfg:"discountText: '限时8折'",why:"命中后显示单价与原价删除线"},{fn:"createStockStatusPlugin",cfg:"lowStockThreshold: 5",why:"库存三态：现货 / 仅剩 N 件 / 缺货"},{fn:"createQuotaPlugin",cfg:"purchasedCount: 1",why:"限购提示条 + canPurchase 门控"},{fn:"createQuantityPlugin",why:"数量步进，上限取库存与限购较小值"},{fn:"createSkuCodePlugin",why:"命中后展示货号，客服对单用"},{fn:"createResetBarPlugin",why:"一键清空重选"},{fn:"createImageLinkPlugin",cfg:"onImageChange: setMainImage",why:"规格切主图（只发事件，主图在左侧）"},{fn:"createKeyboardNavPlugin",why:"方向键漫游规格，跳过置灰项"},{fn:"createUrlSyncPlugin",why:"选择写进查询串，可分享还原"},{fn:"createAnalyticsPlugin",cfg:"onEvent: (e) => track(e)",why:"挂载 / 命中 / 未命中事件接入右栏日志"},{fn:"createStatePersistencePlugin",cfg:"key: 'vane-sku:demo:selection'",why:"本机记住上次选择"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"UrlSync 默认 replaceState 不污染历史栈；它与 StatePersistence 可共存——一个负责可分享，一个负责本机记忆。",controls:[{key:"keyboard",label:"键盘漫游",kind:"switch",init:!0},{key:"analytics",label:"埋点上报",kind:"switch",init:!0,nonLayout:!0},{key:"urlSync",label:"URL 同步",kind:"switch",init:!1}],stageHeight:520};function LS({cfg:e,log:t}){const n=!!e.keyboard,r=!!e.analytics,o=!!e.urlSync,[i,l]=k.useState(oe[0].image??""),s=k.useMemo(()=>K([Tr(),Or({discountText:"限时8折"}),ui({lowStockThreshold:5}),li({purchasedCount:1,onExceed:()=>t("触及限购上限（red-s 每人限购 2 件）","warn")}),ii({onChange:a=>t(`数量 → ${a}`)}),ai(),si({onReset:()=>t("已清空重选","info")}),ri({onImageChange:a=>{l(a),t(`主图 → ${a}`)}}),...n?[oi()]:[],...o?[Vs()]:[],...r?[Us({onEvent:a=>t(`${TS[a.name]} · ${JSON.stringify(a.selection)}${a.variant?` → ${a.variant.sku}`:""}`,a.name==="sku:invalid"?"warn":a.name==="sku:mount"?"info":"event")})]:[],Bs({key:"vane-sku:demo:full-combo"})]),[n,o,r,t,l]);return c.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",width:"100%"},children:[c.jsx("img",{src:i,alt:"主图",style:{width:92,height:92,objectFit:"cover",borderRadius:2,border:"1px solid var(--line)"}}),c.jsxs("div",{style:{background:"#fff",borderRadius:2,padding:14,color:"#1f2328",flex:1},children:[c.jsx(s,{attributes:se,variants:oe,defaultSelection:{颜色:"red",尺码:"s"}}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"预选了 red/s：价格删除线、库存提示、限购条、数量步进、货号一次全出；换「绿 M」看低库存态。"})]})]})}const MS=Object.freeze(Object.defineProperty({__proto__:null,default:LS,meta:OS},Symbol.toStringTag,{value:"Module"})),AS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},IS={slug:"price-range",title:"价格区间 PriceRange",group:"plugin",plugin:"PriceRange",intro:"未选全时按当前选择过滤变体取 min/max，显示 ¥199–¥269 这样的区间；区间随选择收窄。",why:"价格区不能空窗：PriceLink 只在命中后出单价，用户选一半时最想看的是「这东西大概多少钱」。",plugs:[{fn:"createPriceRangePlugin",cfg:"showWhenMatched: {{keep}}",why:"负责未命中时的价格区间展示"}],props:["attributes={attributes}","variants={variants}"],note:"与 PriceLink 同走 renderOverlay，靠 order（PriceRange=5）排在前；命中后自动返回 null，两者同装不重影。",controls:[{key:"keep",label:"命中后仍显区间",kind:"switch",init:!1}],stageHeight:280};function DS({cfg:e}){const t=!!e.keep,n=k.useMemo(()=>K([Tr({showWhenMatched:t})]),[t]);return c.jsxs("div",{style:AS,children:[c.jsx(n,{attributes:se,variants:oe}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"先只选「颜色」：区间立刻收窄到该色的 min–max；选全后区间退场（打开开关则保留）。"})]})}const zS=Object.freeze(Object.defineProperty({__proto__:null,default:DS,meta:IS},Symbol.toStringTag,{value:"Module"})),US={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},BS={slug:"price-link",title:"价格联动 PriceLink",group:"plugin",plugin:"PriceLink",intro:"命中变体后显示单价；原价更高时自动画删除线，折扣文案可选（预选了 red/s：¥199 + 删除线 ¥299）。",why:"选完规格看价是决策临门一脚；把「准确价格」的渲染抽成插件，促销文案改配置就行、不用改页面。",plugs:[{fn:"createPriceLinkPlugin",cfg:"discountText: '{{discount}}'",why:"把命中变体的价格渲染进 overlay 段"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"只有 originalPrice > price 才画删除线；变体没写 originalPrice 就只显示现价，不做假促销。",controls:[{key:"discount",label:"折扣文案",kind:"select",init:"限时8折",options:qh,hint:"选「无（不传）」时插件不渲染角标"}],stageHeight:280};function VS({cfg:e}){const t=String(e.discount),n=k.useMemo(()=>K([Or({discountText:t||void 0})]),[t]);return c.jsxs("div",{style:US,children:[c.jsx(n,{attributes:se,variants:oe,defaultSelection:{颜色:"red",尺码:"s"}}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"换「蓝 S」看看：blue-s 没写 originalPrice，就只有现价、没有删除线。"})]})}const FS=Object.freeze(Object.defineProperty({__proto__:null,default:VS,meta:BS},Symbol.toStringTag,{value:"Module"})),HS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},QS={slug:"stock-status",title:"库存状态 StockStatus",group:"plugin",plugin:"StockStatus",intro:"命中变体后显示三态：现货 / 仅剩 N 件 / 缺货；低库存阈值拖滑条实时生效。",why:"「仅剩 3 件」是转化利器；阈值该由运营配，而不是写死在代码里等发版。",plugs:[{fn:"createStockStatusPlugin",cfg:"lowStockThreshold: {{threshold}}",why:"渲染库存三态提示条"}],props:["attributes={attributes}","variants={variants}","ignoreOutOfStock={false}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}","onChange={handleChange}"],note:"变体没声明 stock 时不渲染——不做无依据的库存承诺；这页传 ignoreOutOfStock={false} 是为了能点到 stock=0 的 green-l 看「缺货」态。",controls:[{key:"threshold",label:"低库存阈值",kind:"number",init:5,min:1,max:10}],stageHeight:280};function KS({cfg:e,log:t}){const n=Number(e.threshold),r=k.useMemo(()=>K([ui({lowStockThreshold:n})]),[n]);return c.jsxs("div",{style:HS,children:[c.jsx(r,{attributes:se,variants:oe,ignoreOutOfStock:!1,defaultSelection:{颜色:"red",尺码:"s"},onChange:(o,i)=>i&&t(`命中 ${i.sku} · 库存 ${i.stock??"—"}`,"event")}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"red/s 库存 5：阈值 ≥5 显「仅剩 5 件」，拖到 1 变「现货」；点「绿 L」看缺货红条。"})]})}const WS=Object.freeze(Object.defineProperty({__proto__:null,default:KS,meta:QS},Symbol.toStringTag,{value:"Module"})),qS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},GS={slug:"quota",title:"限购校验 Quota",group:"plugin",plugin:"Quota",intro:"red-s 每人限购 2：拖「已购件数」到 2，提示条翻红「已达限购上限」，canPurchase 置 false。",why:"限量 / 秒杀要在点加购前就拦住；把「还能不能买」写进内核 state，加购按钮直接读、不用自己算。",plugs:[{fn:"createQuotaPlugin",cfg:"purchasedCount: {{purchased}}, onExceed: () => track('quota-exceed')",why:"渲染限购提示条并暴露 canPurchase 门控"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"canPurchase 只在 onMount / onSkuChange 事件钩子里写入，不在渲染期 setState——避免渲染期改状态的循环告警。",controls:[{key:"purchased",label:"已购件数",kind:"number",init:1,min:0,max:2}],stageHeight:280};function JS({cfg:e,log:t}){const n=Number(e.purchased),r=k.useMemo(()=>K([li({purchasedCount:n,onExceed:()=>t(`已购 ${n} ≥ 限购 2：canPurchase = false`,"warn")})]),[n,t]);return c.jsxs("div",{style:qS,children:[c.jsx(r,{attributes:se,variants:oe,defaultSelection:{颜色:"red",尺码:"s"},onChange:(o,i)=>i&&t(`命中 ${i.sku} · quota ${i.quota??"（不限购）"}`,"event")}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只读 red-s（唯一声明 quota 的变体）：换到其它变体时限购条消失——未声明 quota 视为不限购。"})]})}const YS=Object.freeze(Object.defineProperty({__proto__:null,default:JS,meta:GS},Symbol.toStringTag,{value:"Module"})),XS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},ZS={slug:"quantity",title:"数量步进 Quantity",group:"plugin",plugin:"Quantity",intro:"上限 = min(库存, 限购)：red/s 到 2 就封顶（限购 2），换 blue/s（无限购）上限变 5。",why:"别让用户选了 10 件、提交时才发现限购 2——上限在选数量那一刻就该说清楚。",plugs:[{fn:"createQuantityPlugin",cfg:"defaultValue: {{initQty}}, onChange: (q) => track(q)",why:"渲染数量步进器并把数量写进内核 state（key: quantity）"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"数量依附于具体 SKU：未命中变体时步进器不渲染；切换变体后数量自动收敛到新上限内。",controls:[{key:"initQty",label:"初始数量",kind:"number",init:1,min:1,max:3}],stageHeight:280};function ek({cfg:e,log:t}){const n=Number(e.initQty),r=k.useMemo(()=>K([ii({defaultValue:n,onChange:o=>t(`数量 → ${o}`)})]),[n,t]);return c.jsxs("div",{style:XS,children:[c.jsx(r,{attributes:se,variants:oe,defaultSelection:{颜色:"red",尺码:"s"}},n),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"点 + 到封顶，再换「蓝 S」：上限跳到库存 5，步进器跟随新变体重算。"})]})}const tk=Object.freeze(Object.defineProperty({__proto__:null,default:ek,meta:ZS},Symbol.toStringTag,{value:"Module"})),nk={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},rk={slug:"sku-code",title:"货号展示 SkuCode",group:"plugin",plugin:"SkuCode",intro:"命中变体后用等宽字体展示货号；前缀文案可换（货号 / SKU / 商品编码）。",why:"客服对单、用户报修、订单核对都靠这串编码；「一行字但每家都要」的需求就该是插件。",plugs:[{fn:"createSkuCodePlugin",cfg:"label: '{{label}}'",why:"命中后渲染货号行（等宽字体）"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"core 的「选中摘要」里本就含编码；本插件用于需要单独突出、便于复制核对编码的场景。",controls:[{key:"label",label:"前缀文案",kind:"select",init:"货号",options:[{label:"货号",value:"货号"},{label:"SKU",value:"SKU"},{label:"商品编码",value:"商品编码"}]}],stageHeight:260};function ok({cfg:e,log:t}){const n=String(e.label),r=k.useMemo(()=>K([ai({label:n})]),[n]);return c.jsxs("div",{style:nk,children:[c.jsx(r,{attributes:se,variants:oe,defaultSelection:{颜色:"red",尺码:"s"},onChange:(o,i)=>i&&t(`命中 ${i.sku}`,"event")}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"未选全时不占位——货号只在命中后出现，别让半选状态看到错误的编码。"})]})}const ik=Object.freeze(Object.defineProperty({__proto__:null,default:ok,meta:rk},Symbol.toStringTag,{value:"Module"})),lk={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},sk={slug:"reset-bar",title:"清空重选 ResetBar",group:"plugin",plugin:"ResetBar",intro:"选了一半想重来，一键清空：走 context.clearSelection()，未选任何规格时按钮自动隐藏。",why:"core 支持「再点同值取消」，但逐个取消很烦；移动端小屏上整体重置是高频操作。",plugs:[{fn:"createResetBarPlugin",cfg:"text: '{{text}}', onReset: () => track('reset')",why:"渲染清空按钮并整段重置选择"}],props:["attributes={attributes}","variants={variants}","onChange={handleChange}"],note:"依赖核心 context.clearSelection()（vane-sku 0.1.0 起提供）；onReset 在清空后触发，接埋点很顺手。",controls:[{key:"text",label:"按钮文案",kind:"select",init:"清空重选",options:[{label:"清空重选",value:"清空重选"},{label:"重新选择",value:"重新选择"},{label:"重置规格",value:"重置规格"}]}],stageHeight:280};function ak({cfg:e,log:t}){const n=String(e.text),r=k.useMemo(()=>K([si({text:n,onReset:()=>t("onReset · 选择已整段清空（按钮随空选择隐藏）","info")})]),[n,t]);return c.jsxs("div",{style:lk,children:[c.jsx(r,{attributes:se,variants:oe,onChange:(o,i)=>t(i?`命中 ${i.sku} · ${JSON.stringify(o)}`:`未命中 · ${JSON.stringify(o)}`,i?"event":"warn")}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"选两个规格 → 点「清空重选」：右栏记一次 onReset，按钮自己藏起来（没有选择可清了）。"})]})}const uk=Object.freeze(Object.defineProperty({__proto__:null,default:ak,meta:sk},Symbol.toStringTag,{value:"Module"})),ck={slug:"image-link",title:"规格切主图 ImageLink",group:"plugin",plugin:"ImageLink",intro:"命中变体带 image 时把图抛给外层（回调 + sku:image 总线双通道），自己不渲染任何 UI；左侧主图由本页外层渲染。",why:"规格图联动与「谁来渲染主图」解耦：gallery、卡片、放大镜想怎么接就怎么接，core 不碰图片。",plugs:[{fn:"createImageLinkPlugin",cfg:"onImageChange: setMainImage",why:"只发事件，主图渲染留给外层"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"挂载（onMount）也会推一次当前图，页面打开主图不空窗；未命中或变体没写 image 时不发事件。",stageHeight:300};function dk({log:e}){const[t,n]=k.useState(oe[0].image??""),r=k.useMemo(()=>K([ri({onImageChange:o=>{n(o),e(`主图 → ${o}`)}})]),[e]);return c.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",width:"100%"},children:[c.jsx("img",{src:t,alt:"主图",style:{width:92,height:92,objectFit:"cover",borderRadius:2,border:"1px solid var(--line)"}}),c.jsxs("div",{style:{background:"#fff",borderRadius:2,padding:14,color:"#1f2328",flex:1},children:[c.jsx(r,{attributes:se,variants:oe,defaultSelection:{颜色:"red",尺码:"s"}}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"换颜色 / 尺码：左图跟着变体走；这就是「发事件的插件 + 接事件的外层」。"})]})]})}const fk=Object.freeze(Object.defineProperty({__proto__:null,default:dk,meta:ck},Symbol.toStringTag,{value:"Module"}));function pk({controls:e,cfg:t,onChange:n}){return c.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(t)).map(r=>{const o=t[r.key];return c.jsxs("label",{className:"ctl",title:r.hint,children:[c.jsxs("span",{className:"ctl-label",children:[r.label,c.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?c.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>n(r.key,!o),"aria-pressed":!!o,children:c.jsx("i",{})}):r.kind==="select"?c.jsx("select",{className:"ctl-select",value:String(o),onChange:i=>n(r.key,i.target.value),children:(r.options??[]).map(i=>c.jsx("option",{value:i.value,children:i.label},i.value))}):c.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:i=>n(r.key,Number(i.target.value))})]},r.key)})})}function gk({lines:e,title:t="事件日志",empty:n="还没触发 —— 拖上面的控件，或点一下规格试试",right:r}){return c.jsxs("div",{className:"log",children:[c.jsxs("div",{className:"log-head",children:[c.jsx("span",{children:t}),c.jsxs("span",{className:"log-right",children:[r,c.jsx("b",{children:e.length})]})]}),e.length===0?c.jsx("p",{className:"log-empty",children:n}):c.jsx("ol",{className:"log-list",children:e.map(o=>c.jsxs("li",{className:`log-line is-${o.kind}`,children:[c.jsx("time",{children:o.at}),c.jsx("span",{children:o.text})]},o.id))})]})}function mk({items:e}){return c.jsx("div",{className:"keyhint",children:e.map(([t,n])=>c.jsxs("span",{children:[c.jsx("kbd",{children:t}),n]},t))})}const hk={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},yk={slug:"keyboard",title:"键盘漫游 KeyboardNav",group:"plugin",plugin:"KeyboardNav",intro:"点中任一规格按钮后，←→ 同行切换、↑↓ 跨行跳转，自动跳过置灰项（预选了「蓝」，方向键会绕开死路的 L）。",why:"键盘用户 / 电视端大屏选购的无障碍刚需；「跳过死路」让方向键永远落在有效选项上。",plugs:[{fn:"createKeyboardNavPlugin",cfg:"preventDefault: {{prevent}}",why:"挂 keydown 监听实现方向键漫游"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'blue' }}"],note:"实现走 DOM 查询（依赖 core 按钮的 data-testid 约定），不侵入渲染；onMount 返回清理函数，卸载自动摘监听。",controls:[{key:"prevent",label:"阻止方向键滚动页面",kind:"switch",init:!0}],stageHeight:320};function vk({cfg:e}){const t=!!e.prevent,n=k.useMemo(()=>K([oi({preventDefault:t})]),[t]);return c.jsxs("div",{style:hk,children:[c.jsx("p",{style:{margin:"0 0 8px",fontSize:12,color:"#4a5056"},children:"先点（或 Tab 聚焦）任一规格按钮，再用方向键走两圈："}),c.jsx(mk,{items:[["←→","同属性行内切换选项"],["↑↓","跨属性行跳转（保持列位）"]]}),c.jsx("div",{style:{marginTop:10},children:c.jsx(n,{attributes:se,variants:oe,defaultSelection:{颜色:"blue"}})}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"在尺码行按 →：S → M → 回到 S，L 因缺 blue-l 被置灰，直接被跳过。"})]})}const Sk=Object.freeze(Object.defineProperty({__proto__:null,default:vk,meta:yk},Symbol.toStringTag,{value:"Module"})),kk={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},gu="vane-sku:demo:demos-persistence",xk={slug:"persistence",title:"选择持久化 StatePersistence",group:"plugin",plugin:"StatePersistence",intro:"把上次选的规格写进 localStorage，挂载时读回；拖「重挂载」开关销毁重建，选择原样还原。",why:"用户逛一圈回来还停在上次的规格；多步下单流程中途返回，也不用从头重选。",plugs:[{fn:"createStatePersistencePlugin",cfg:"key: 'vane-sku:demo:selection'",why:"挂载读回 / 变化写入 / 清空删键"}],props:["attributes={attributes}","variants={variants}"],note:"隐私模式、存储禁用、配额超限、脏数据一律静默降级，不影响主流程；与 UrlSync 可共存。",controls:[{key:"remount",label:"重挂载（模拟刷新）",kind:"switch",init:!1,nonLayout:!0}],stageHeight:300};function wk({cfg:e,log:t}){const n=!!e.remount,r=k.useMemo(()=>K([Bs({key:gu})]),[]);return k.useEffect(()=>{const o=window.localStorage.getItem(gu);t(`挂载 · localStorage ${o?`读回 ${o}`:"为空（首次进入）"}`,"info")},[n,t]),c.jsxs("div",{style:kk,children:[c.jsx(r,{attributes:se,variants:oe,onChange:(o,i)=>t(i?`写入 localStorage：${JSON.stringify(o)}（命中 ${i.sku}）`:`写入 localStorage：${JSON.stringify(o)}`,i?"event":"warn")},String(n)),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"选好规格 → 拖「重挂载」：按钮组销毁重建，选择自动还原；把选择清空（再点同值取消）会删键。"})]})}const Pk=Object.freeze(Object.defineProperty({__proto__:null,default:wk,meta:xk},Symbol.toStringTag,{value:"Module"})),Ck={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},_k={display:"block",padding:"6px 10px",borderRadius:2,background:"#f4f5f7",border:"1px solid #e5e7eb",color:"#b45309",fontFamily:"'JetBrains Mono', ui-monospace, monospace",fontSize:11,overflowX:"auto",whiteSpace:"nowrap"},Rk={slug:"url-sync",title:"URL 同步 UrlSync",group:"plugin",plugin:"UrlSync",intro:"选择写进查询串（?sku_颜色=red&sku_尺码=s），挂载时反向还原；刷新 / 分享都能保持选择。",why:"「把这个链接发给客服，他看到的就是我选的规格」——客服带规格链接、分享商品页的刚需。",plugs:[{fn:"createUrlSyncPlugin",cfg:"useReplace: {{replace}}",why:"选择 ↔ 查询串双向同步"}],props:["attributes={attributes}","variants={variants}","onChange={handleChange}"],note:"默认 replaceState 不把每次点击塞进历史栈；查询键带 sku_ 前缀，不覆盖页面其它参数。",controls:[{key:"replace",label:"replaceState（不进历史栈）",kind:"switch",init:!0}],stageHeight:300};function Ek({cfg:e,log:t}){const n=!!e.replace,[r,o]=k.useState(()=>window.location.search||"（空）"),i=k.useMemo(()=>K([Vs({useReplace:n})]),[n]),l=k.useCallback(()=>{const s=window.location.search||"（已清空）";o(s),t(`查询串 → ${s}`)},[t]);return c.jsxs("div",{style:{...Ck,display:"grid",gap:10},children:[c.jsx(i,{attributes:se,variants:oe,onChange:l}),c.jsx("code",{style:_k,children:r}),c.jsx("p",{style:{margin:0,fontSize:11,color:"#5b6064"},children:"上方是实时查询串（只读快照）。关掉开关改用 pushState：每次选择都进历史栈，后退键能撤销选择。"})]})}const bk=Object.freeze(Object.defineProperty({__proto__:null,default:Ek,meta:Rk},Symbol.toStringTag,{value:"Module"})),jk={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},Nk={"sku:mount":"挂载","sku:change":"命中","sku:invalid":"未命中"},$k={slug:"analytics",title:"埋点上报 Analytics",group:"plugin",plugin:"Analytics",intro:"三类事件（挂载 / 命中 / 未命中）双通道出口：onEvent 回调 + sku:analytics 总线。右栏日志就是上报流水。",why:"规格选择是转化漏斗的关键一步；「哪些组合被点了、哪些根本选不出来」对选品和补库存都是硬数据。",plugs:[{fn:"createAnalyticsPlugin",cfg:"onlyMatched: {{onlyMatched}}, onEvent: (e) => track(e)",why:"只做事件出口，不渲染任何 UI；接哪家 SDK 由宿主决定"}],props:["attributes={attributes}","variants={variants}"],note:"默认未命中也上报——「用户点得到却选不出」的坏组合恰恰最该被发现。",controls:[{key:"onlyMatched",label:"只上报命中",kind:"switch",init:!1,nonLayout:!0}],stageHeight:280};function Tk({cfg:e,log:t}){const n=!!e.onlyMatched,r=k.useMemo(()=>K([Us({onlyMatched:n,onEvent:o=>t(`${Nk[o.name]} · ${JSON.stringify(o.selection)}${o.variant?` → ${o.variant.sku}`:""}`,o.name==="sku:invalid"?"warn":o.name==="sku:mount"?"info":"event")})]),[n,t]);return c.jsxs("div",{style:jk,children:[c.jsx(r,{attributes:se,variants:oe}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只选颜色（未选全）记「未命中」，选全记「命中」，进页面记「挂载」——三种事件都会进右栏。"})]})}const Ok=Object.freeze(Object.defineProperty({__proto__:null,default:Tk,meta:$k},Symbol.toStringTag,{value:"Module"})),Lk=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createPriceRangePlugin } from "vane-sku/custom-plugins/PriceRangePlugin";
import { createPriceLinkPlugin } from "vane-sku/custom-plugins/PriceLinkPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 00 · 最小可用选择器（基础功能）
 * 裸 Core 起步：只有按钮组 + 禁用推导 + 选中摘要。两个开关按需叠价格区间 / 价格联动，
 * 组件类型随开关在 useMemo 里增删插件重建 —— 5 行装配出能用的选择器。
 */
export const meta: DemoMeta = {
  slug: "quickstart",
  title: "最小可用选择器",
  group: "basic",
  capability: "core-assembly",
  intro: "5 行装配出能用的选择器：Core（按钮组 + 禁用推导 + 摘要）起步，按需叠价格插件。",
  why: "先跑通内核，再增量叠插件——规格选择的长尾需求多，全塞进内核只会越来越难改。",
  plugs: [
    { fn: "createPriceRangePlugin", why: "未选全时兜底显示价格区间，价格区不空窗" },
    { fn: "createPriceLinkPlugin", cfg: "discountText: '限时8折'", why: "命中变体后显示单价与原价删除线" },
  ],
  props: ["attributes={attributes}", "variants={variants}"],
  controls: [
    { key: "withRange", label: "加价格区间", kind: "switch", init: false },
    { key: "withLink", label: "加价格联动", kind: "switch", init: false },
  ],
  stageHeight: 300,
};

export default function Stage({ cfg }: DemoStageProps) {
  const withRange = Boolean(cfg.withRange);
  const withLink = Boolean(cfg.withLink);

  // 组件类型随开关增删插件重建：拖控件 = 换装配（选择态随之重置，符合「换配置重头选」直觉）
  const Sku = useMemo(
    () =>
      createSkuSelector([
        ...(withRange ? [createPriceRangePlugin()] : []),
        ...(withLink ? [createPriceLinkPlugin({ discountText: "限时8折" })] : []),
      ]),
    [withRange, withLink]
  );

  return (
    <div style={CARD}>
      <Sku attributes={ATTRIBUTES} variants={VARIANTS} />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        两个开关都关就是裸 Core：选「蓝」后 L 置灰，摘要告诉你命中的变体。
      </p>
    </div>
  );
}
`,Mk=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 01 · 禁用推导（基础功能）
 * 内核内置能力：候选选项临时代入选择，查不到变体即置灰。样例矩阵故意缺 blue-l，
 * 选「蓝」后 L 自动变灰 —— 用户不用点了才发现没货。
 */
export const meta: DemoMeta = {
  slug: "disable",
  title: "禁用推导（内置）",
  group: "basic",
  capability: "disable-derivation",
  intro: "组合矩阵在内核：选「蓝」后 L 自动置灰（缺 blue-l 变体），死路提前画出来。",
  why: "用户不该点了才发现没货；把「选不出结果的组合」提前置灰，是规格选择器的体验底线。",
  plugs: [],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    { text: "defaultSelection={{ 颜色: '{{preset}}' }}", when: (c) => c.preset !== "none" },
    "onChange={handleChange}",
  ],
  note: "推导是纯函数 buildAvailability(attributes, variants, selection)，不依赖 React，可直接单测。",
  controls: [
    {
      key: "preset",
      label: "预选颜色",
      kind: "select",
      init: "none",
      options: [
        { label: "不预选", value: "none" },
        { label: "红 red", value: "red" },
        { label: "蓝 blue", value: "blue" },
      ],
    },
  ],
  stageHeight: 300,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const preset = String(cfg.preset);

  // 无插件页：组件类型只建一次；预选切换用 key 重挂载（defaultSelection 是挂载期初值）
  const Sku = useMemo(() => createSkuSelector([]), []);

  return (
    <div style={CARD}>
      <Sku
        key={preset}
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        defaultSelection={preset === "none" ? undefined : { 颜色: preset }}
        onChange={(sel, v) =>
          log(
            v ? \`命中变体 \${v.sku} · \${JSON.stringify(sel)}\` : \`未命中可售变体 · \${JSON.stringify(sel)}\`,
            v ? "event" : "warn"
          )
        }
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        点「蓝」看主角戏：L 因缺 blue-l 被置灰；defaultSelection 只在挂载时生效一次，所以预选切换靠 key 重挂载。
      </p>
    </div>
  );
}
`,Ak=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import type { SkuAttribute } from "vane-sku";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

const COLOR = ATTRIBUTES[0];
const SIZE = ATTRIBUTES[1];
/** 去掉绿色系的小矩阵（学 scenarios/specs/two-attr：红/蓝 × S/M/L） */
const BASE_VARIANTS = VARIANTS.filter((v) => v.attrValues["颜色"] !== "green");

/**
 * 02 · 双属性小矩阵（基础功能）
 * attributes / variants 是受控数据：拖开关删掉「红」，数组热更新，
 * 禁用推导随 props 变化即时重算 —— 选择器组件不重建，选择也保留着。
 */
export const meta: DemoMeta = {
  slug: "two-attr",
  title: "双属性小矩阵",
  group: "basic",
  capability: "matrix",
  intro: "颜色 × 尺码的小矩阵：拖开关删掉「红」，attributes 数组热更新，禁用推导随之重算。",
  why: "后台改规格、运营下架某选项，前端改的只是数据；矩阵怎么变是内核的事。",
  plugs: [],
  props: ["attributes={attributes}", "variants={variants}"],
  note: "buildAvailability / matchVariant / isSelectionComplete 都是纯函数，服务端下发同一份结构也能直接算。",
  controls: [{ key: "dropRed", label: "删掉红色选项", kind: "switch", init: false }],
  stageHeight: 300,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const dropRed = Boolean(cfg.dropRed);

  const Sku = useMemo(() => createSkuSelector([]), []);

  // 拖开关 = 改 attributes / variants 数组；withPlugins 按新 props 重跑禁用推导（热更新）
  const attributes: SkuAttribute[] = useMemo(
    () => [
      {
        ...COLOR,
        options: dropRed ? COLOR.options.filter((o) => o.id !== "red") : COLOR.options.slice(0, 2),
      },
      SIZE,
    ],
    [dropRed]
  );
  const variants = useMemo(
    () => (dropRed ? BASE_VARIANTS.filter((v) => v.attrValues["颜色"] !== "red") : BASE_VARIANTS),
    [dropRed]
  );

  return (
    <div style={CARD}>
      <Sku
        attributes={attributes}
        variants={variants}
        onChange={(sel, v) =>
          log(v ? \`命中 \${v.sku}\` : \`未命中 · \${JSON.stringify(sel)}\`, v ? "event" : "warn")
        }
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        先选「蓝」再拖开关：红消失、选择保留，L 依旧置灰 —— blue-l 本就不存在，小矩阵下它成了永久死路。
      </p>
    </div>
  );
}
`,Ik=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 03 · 缺货是否参与推导（基础功能）
 * green-l 库存 0：默认 ignoreOutOfStock=true 把它当不存在（选「绿」后 L 置灰）；
 * 关掉开关后 green-l 变为可选 —— 置灰与否是运营策略，内核只给开关。
 */
export const meta: DemoMeta = {
  slug: "ignore-stock",
  title: "缺货是否参与推导",
  group: "basic",
  capability: "ignore-out-of-stock",
  intro: "green-l 库存 0：默认把它当不存在（通往它的选项置灰）；关掉开关后变为可选。",
  why: "「缺货直接置灰」还是「可点但不让下单」是两种运营策略；两种都常见，内核不该替你拍板。",
  plugs: [],
  props: ["attributes={attributes}", "variants={variants}", "ignoreOutOfStock={{{ignore}}}"],
  note: "关掉后 green-l 可选且仍会命中变体（stock=0）——加购拦截交给 Quota 或宿主，推导不管下单。",
  controls: [{ key: "ignore", label: "缺货视为不存在", kind: "switch", init: true }],
  stageHeight: 300,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const ignore = Boolean(cfg.ignore);

  // 无插件页：组件类型只建一次；ignoreOutOfStock 是受控 prop，切换即热更新
  const Sku = useMemo(() => createSkuSelector([]), []);

  return (
    <div style={CARD}>
      <Sku
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        ignoreOutOfStock={ignore}
        onChange={(sel, v) =>
          v
            ? log(\`命中 \${v.sku} · 库存 \${v.stock ?? "—"}\`, "event")
            : log(\`未命中 · \${JSON.stringify(sel)}\`, "warn")
        }
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        先选「绿」：L 置灰（缺货默认视为不存在）。关掉开关后 L 可选，点它会命中 stock=0 的 TEE-GREEN-L。
      </p>
    </div>
  );
}
`,Dk=`import React, { useMemo, useState } from "react";
import { createSkuSelector } from "vane-sku";
import { createAnalyticsPlugin } from "vane-sku/custom-plugins/AnalyticsPlugin";
import type { AnalyticsEvent } from "vane-sku/custom-plugins/AnalyticsPlugin";
import { createImageLinkPlugin } from "vane-sku/custom-plugins/ImageLinkPlugin";
import { createKeyboardNavPlugin } from "vane-sku/custom-plugins/KeyboardNavPlugin";
import { createPriceLinkPlugin } from "vane-sku/custom-plugins/PriceLinkPlugin";
import { createPriceRangePlugin } from "vane-sku/custom-plugins/PriceRangePlugin";
import { createQuantityPlugin } from "vane-sku/custom-plugins/QuantityPlugin";
import { createQuotaPlugin } from "vane-sku/custom-plugins/QuotaPlugin";
import { createResetBarPlugin } from "vane-sku/custom-plugins/ResetBarPlugin";
import { createSkuCodePlugin } from "vane-sku/custom-plugins/SkuCodePlugin";
import { createStatePersistencePlugin } from "vane-sku/custom-plugins/StatePersistencePlugin";
import { createStockStatusPlugin } from "vane-sku/custom-plugins/StockStatusPlugin";
import { createUrlSyncPlugin } from "vane-sku/custom-plugins/UrlSyncPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const EVENT_LABEL: Record<AnalyticsEvent["name"], string> = {
  "sku:mount": "挂载",
  "sku:change": "命中",
  "sku:invalid": "未命中",
};

/**
 * 04 · 全量装配（高级功能）
 * 12 个官方插件全装上：价格区间 / 价格联动 / 库存 / 限购 / 数量 / 货号 / 清空重选 /
 * 主图联动 / 键盘漫游 / URL 同步 / 埋点 / 本机记忆 —— 一个能直接上线的商品规格面板。
 * Analytics 的事件出口接到右栏日志，拖开关就是换装配。
 */
export const meta: DemoMeta = {
  slug: "full-combo",
  title: "全量装配：商品规格面板",
  group: "advanced",
  capability: "full-assembly",
  intro: "12 个官方插件全装配成商品规格面板：价格、库存、限购、数量、主图、键盘、埋点一次到位。",
  why: "真实商品详情页要的能力就这么多；要哪些装哪些，不要的子路径不进包——这就是按需插件的意义。",
  plugs: [
    { fn: "createPriceRangePlugin", why: "未选全时兜底显示价格区间" },
    { fn: "createPriceLinkPlugin", cfg: "discountText: '限时8折'", why: "命中后显示单价与原价删除线" },
    { fn: "createStockStatusPlugin", cfg: "lowStockThreshold: 5", why: "库存三态：现货 / 仅剩 N 件 / 缺货" },
    { fn: "createQuotaPlugin", cfg: "purchasedCount: 1", why: "限购提示条 + canPurchase 门控" },
    { fn: "createQuantityPlugin", why: "数量步进，上限取库存与限购较小值" },
    { fn: "createSkuCodePlugin", why: "命中后展示货号，客服对单用" },
    { fn: "createResetBarPlugin", why: "一键清空重选" },
    { fn: "createImageLinkPlugin", cfg: "onImageChange: setMainImage", why: "规格切主图（只发事件，主图在左侧）" },
    { fn: "createKeyboardNavPlugin", why: "方向键漫游规格，跳过置灰项" },
    { fn: "createUrlSyncPlugin", why: "选择写进查询串，可分享还原" },
    { fn: "createAnalyticsPlugin", cfg: "onEvent: (e) => track(e)", why: "挂载 / 命中 / 未命中事件接入右栏日志" },
    { fn: "createStatePersistencePlugin", cfg: "key: 'vane-sku:demo:selection'", why: "本机记住上次选择" },
  ],
  props: ["attributes={attributes}", "variants={variants}", "defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],
  note: "UrlSync 默认 replaceState 不污染历史栈；它与 StatePersistence 可共存——一个负责可分享，一个负责本机记忆。",
  controls: [
    { key: "keyboard", label: "键盘漫游", kind: "switch", init: true },
    { key: "analytics", label: "埋点上报", kind: "switch", init: true, nonLayout: true },
    { key: "urlSync", label: "URL 同步", kind: "switch", init: false },
  ],
  stageHeight: 520,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const withKeyboard = Boolean(cfg.keyboard);
  const withAnalytics = Boolean(cfg.analytics);
  const withUrlSync = Boolean(cfg.urlSync);
  const [main, setMain] = useState(VARIANTS[0].image ?? "");

  // 三个开关增删插件：组件类型随真实依赖项重建；log 来自页面层 useCallback、setState 恒稳定
  const Sku = useMemo(
    () =>
      createSkuSelector([
        createPriceRangePlugin(),
        createPriceLinkPlugin({ discountText: "限时8折" }),
        createStockStatusPlugin({ lowStockThreshold: 5 }),
        createQuotaPlugin({
          purchasedCount: 1,
          onExceed: () => log("触及限购上限（red-s 每人限购 2 件）", "warn"),
        }),
        createQuantityPlugin({ onChange: (q) => log(\`数量 → \${q}\`) }),
        createSkuCodePlugin(),
        createResetBarPlugin({ onReset: () => log("已清空重选", "info") }),
        createImageLinkPlugin({
          onImageChange: (img) => {
            setMain(img);
            log(\`主图 → \${img}\`);
          },
        }),
        ...(withKeyboard ? [createKeyboardNavPlugin()] : []),
        ...(withUrlSync ? [createUrlSyncPlugin()] : []),
        ...(withAnalytics
          ? [
              createAnalyticsPlugin({
                onEvent: (e) =>
                  log(
                    \`\${EVENT_LABEL[e.name]} · \${JSON.stringify(e.selection)}\${e.variant ? \` → \${e.variant.sku}\` : ""}\`,
                    e.name === "sku:invalid" ? "warn" : e.name === "sku:mount" ? "info" : "event"
                  ),
              }),
            ]
          : []),
        createStatePersistencePlugin({ key: "vane-sku:demo:full-combo" }),
      ]),
    [withKeyboard, withUrlSync, withAnalytics, log, setMain]
  );

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", width: "100%" }}>
      <img
        src={main}
        alt="主图"
        style={{ width: 92, height: 92, objectFit: "cover", borderRadius: 2, border: "1px solid var(--line)" }}
      />
      <div style={{ background: "#fff", borderRadius: 2, padding: 14, color: "#1f2328", flex: 1 }}>
        <Sku
          attributes={ATTRIBUTES}
          variants={VARIANTS}
          defaultSelection={{ 颜色: "red", 尺码: "s" }}
        />
        <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
          预选了 red/s：价格删除线、库存提示、限购条、数量步进、货号一次全出；换「绿 M」看低库存态。
        </p>
      </div>
    </div>
  );
}
`,zk=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createPriceRangePlugin } from "vane-sku/custom-plugins/PriceRangePlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 05 · 价格区间 PriceRange（插件功能）
 * 单装这一个：未选全（或组合无货）时按当前选择过滤变体取 min/max，
 * 显示「¥199–¥269」这样的区间，区间随选择收窄；命中变体后退场。
 */
export const meta: DemoMeta = {
  slug: "price-range",
  title: "价格区间 PriceRange",
  group: "plugin",
  plugin: "PriceRange",
  intro: "未选全时按当前选择过滤变体取 min/max，显示 ¥199–¥269 这样的区间；区间随选择收窄。",
  why: "价格区不能空窗：PriceLink 只在命中后出单价，用户选一半时最想看的是「这东西大概多少钱」。",
  plugs: [
    { fn: "createPriceRangePlugin", cfg: "showWhenMatched: {{keep}}", why: "负责未命中时的价格区间展示" },
  ],
  props: ["attributes={attributes}", "variants={variants}"],
  note: "与 PriceLink 同走 renderOverlay，靠 order（PriceRange=5）排在前；命中后自动返回 null，两者同装不重影。",
  controls: [{ key: "keep", label: "命中后仍显区间", kind: "switch", init: false }],
  stageHeight: 280,
};

export default function Stage({ cfg }: DemoStageProps) {
  const keep = Boolean(cfg.keep);

  const Sku = useMemo(
    () => createSkuSelector([createPriceRangePlugin({ showWhenMatched: keep })]),
    [keep]
  );

  return (
    <div style={CARD}>
      <Sku attributes={ATTRIBUTES} variants={VARIANTS} />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        先只选「颜色」：区间立刻收窄到该色的 min–max；选全后区间退场（打开开关则保留）。
      </p>
    </div>
  );
}
`,Uk=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createPriceLinkPlugin } from "vane-sku/custom-plugins/PriceLinkPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS, DISCOUNT_TEXTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 06 · 价格联动 PriceLink（插件功能）
 * 单装这一个：命中变体后显示单价，原价更高时自动画删除线，
 * 折扣文案（促销角标）由控件现场换——拖 select = 改配置。
 */
export const meta: DemoMeta = {
  slug: "price-link",
  title: "价格联动 PriceLink",
  group: "plugin",
  plugin: "PriceLink",
  intro: "命中变体后显示单价；原价更高时自动画删除线，折扣文案可选（预选了 red/s：¥199 + 删除线 ¥299）。",
  why: "选完规格看价是决策临门一脚；把「准确价格」的渲染抽成插件，促销文案改配置就行、不用改页面。",
  plugs: [
    { fn: "createPriceLinkPlugin", cfg: "discountText: '{{discount}}'", why: "把命中变体的价格渲染进 overlay 段" },
  ],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "defaultSelection={{ 颜色: 'red', 尺码: 's' }}",
  ],
  note: "只有 originalPrice > price 才画删除线；变体没写 originalPrice 就只显示现价，不做假促销。",
  controls: [
    {
      key: "discount",
      label: "折扣文案",
      kind: "select",
      init: "限时8折",
      options: DISCOUNT_TEXTS,
      hint: "选「无（不传）」时插件不渲染角标",
    },
  ],
  stageHeight: 280,
};

export default function Stage({ cfg }: DemoStageProps) {
  const discount = String(cfg.discount);

  const Sku = useMemo(
    () => createSkuSelector([createPriceLinkPlugin({ discountText: discount || undefined })]),
    [discount]
  );

  return (
    <div style={CARD}>
      <Sku attributes={ATTRIBUTES} variants={VARIANTS} defaultSelection={{ 颜色: "red", 尺码: "s" }} />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        换「蓝 S」看看：blue-s 没写 originalPrice，就只有现价、没有删除线。
      </p>
    </div>
  );
}
`,Bk=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createStockStatusPlugin } from "vane-sku/custom-plugins/StockStatusPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 07 · 库存状态 StockStatus（插件功能）
 * 单装这一个：命中变体后显示三态（现货 / 仅剩 N 件 / 缺货），
 * 阈值拖滑条实时变。这里故意传 ignoreOutOfStock={false}，
 * 让 stock=0 的 green-l 可点，才能看到「缺货」红条。
 */
export const meta: DemoMeta = {
  slug: "stock-status",
  title: "库存状态 StockStatus",
  group: "plugin",
  plugin: "StockStatus",
  intro: "命中变体后显示三态：现货 / 仅剩 N 件 / 缺货；低库存阈值拖滑条实时生效。",
  why: "「仅剩 3 件」是转化利器；阈值该由运营配，而不是写死在代码里等发版。",
  plugs: [
    { fn: "createStockStatusPlugin", cfg: "lowStockThreshold: {{threshold}}", why: "渲染库存三态提示条" },
  ],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "ignoreOutOfStock={false}",
    "defaultSelection={{ 颜色: 'red', 尺码: 's' }}",
    "onChange={handleChange}",
  ],
  note: "变体没声明 stock 时不渲染——不做无依据的库存承诺；这页传 ignoreOutOfStock={false} 是为了能点到 stock=0 的 green-l 看「缺货」态。",
  controls: [{ key: "threshold", label: "低库存阈值", kind: "number", init: 5, min: 1, max: 10 }],
  stageHeight: 280,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const threshold = Number(cfg.threshold);

  const Sku = useMemo(
    () => createSkuSelector([createStockStatusPlugin({ lowStockThreshold: threshold })]),
    [threshold]
  );

  return (
    <div style={CARD}>
      <Sku
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        ignoreOutOfStock={false}
        defaultSelection={{ 颜色: "red", 尺码: "s" }}
        onChange={(_sel, v) => v && log(\`命中 \${v.sku} · 库存 \${v.stock ?? "—"}\`, "event")}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        red/s 库存 5：阈值 ≥5 显「仅剩 5 件」，拖到 1 变「现货」；点「绿 L」看缺货红条。
      </p>
    </div>
  );
}
`,Vk=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createQuotaPlugin } from "vane-sku/custom-plugins/QuotaPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 08 · 限购校验 Quota（插件功能）
 * 单装这一个：red-s 声明 quota: 2。拖「已购件数」滑条：
 * 0/1 → 绿条「每人限购 2 件」；2 → 翻红「已达限购上限」，canPurchase 置 false。
 */
export const meta: DemoMeta = {
  slug: "quota",
  title: "限购校验 Quota",
  group: "plugin",
  plugin: "Quota",
  intro: "red-s 每人限购 2：拖「已购件数」到 2，提示条翻红「已达限购上限」，canPurchase 置 false。",
  why: "限量 / 秒杀要在点加购前就拦住；把「还能不能买」写进内核 state，加购按钮直接读、不用自己算。",
  plugs: [
    {
      fn: "createQuotaPlugin",
      cfg: "purchasedCount: {{purchased}}, onExceed: () => track('quota-exceed')",
      why: "渲染限购提示条并暴露 canPurchase 门控",
    },
  ],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "defaultSelection={{ 颜色: 'red', 尺码: 's' }}",
  ],
  note: "canPurchase 只在 onMount / onSkuChange 事件钩子里写入，不在渲染期 setState——避免渲染期改状态的循环告警。",
  controls: [{ key: "purchased", label: "已购件数", kind: "number", init: 1, min: 0, max: 2 }],
  stageHeight: 280,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const purchased = Number(cfg.purchased);

  const Sku = useMemo(
    () =>
      createSkuSelector([
        createQuotaPlugin({
          purchasedCount: purchased,
          onExceed: () => log(\`已购 \${purchased} ≥ 限购 2：canPurchase = false\`, "warn"),
        }),
      ]),
    [purchased, log]
  );

  return (
    <div style={CARD}>
      <Sku
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        defaultSelection={{ 颜色: "red", 尺码: "s" }}
        onChange={(_sel, v) => v && log(\`命中 \${v.sku} · quota \${v.quota ?? "（不限购）"}\`, "event")}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只读 red-s（唯一声明 quota 的变体）：换到其它变体时限购条消失——未声明 quota 视为不限购。
      </p>
    </div>
  );
}
`,Fk=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createQuantityPlugin } from "vane-sku/custom-plugins/QuantityPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 09 · 数量步进 Quantity（插件功能）
 * 单装这一个：上限 = min(库存, 限购)。red/s 库存 5 / 限购 2 → 步进到 2 封顶；
 * 换 blue/s（无限购）→ 上限 5。数量的每次变化都进右栏日志。
 */
export const meta: DemoMeta = {
  slug: "quantity",
  title: "数量步进 Quantity",
  group: "plugin",
  plugin: "Quantity",
  intro: "上限 = min(库存, 限购)：red/s 到 2 就封顶（限购 2），换 blue/s（无限购）上限变 5。",
  why: "别让用户选了 10 件、提交时才发现限购 2——上限在选数量那一刻就该说清楚。",
  plugs: [
    {
      fn: "createQuantityPlugin",
      cfg: "defaultValue: {{initQty}}, onChange: (q) => track(q)",
      why: "渲染数量步进器并把数量写进内核 state（key: quantity）",
    },
  ],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "defaultSelection={{ 颜色: 'red', 尺码: 's' }}",
  ],
  note: "数量依附于具体 SKU：未命中变体时步进器不渲染；切换变体后数量自动收敛到新上限内。",
  controls: [{ key: "initQty", label: "初始数量", kind: "number", init: 1, min: 1, max: 3 }],
  stageHeight: 280,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const initQty = Number(cfg.initQty);

  const Sku = useMemo(
    () =>
      createSkuSelector([
        createQuantityPlugin({ defaultValue: initQty, onChange: (q) => log(\`数量 → \${q}\`) }),
      ]),
    [initQty, log]
  );

  return (
    <div style={CARD}>
      <Sku
        key={initQty}
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        defaultSelection={{ 颜色: "red", 尺码: "s" }}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        点 + 到封顶，再换「蓝 S」：上限跳到库存 5，步进器跟随新变体重算。
      </p>
    </div>
  );
}
`,Hk=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createSkuCodePlugin } from "vane-sku/custom-plugins/SkuCodePlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 10 · 货号展示 SkuCode（插件功能）
 * 单装这一个：命中变体后用等宽字体展示货号，前缀文案可换。
 * 「一行字但每家都要」的长尾需求，做成插件而不是塞进 core。
 */
export const meta: DemoMeta = {
  slug: "sku-code",
  title: "货号展示 SkuCode",
  group: "plugin",
  plugin: "SkuCode",
  intro: "命中变体后用等宽字体展示货号；前缀文案可换（货号 / SKU / 商品编码）。",
  why: "客服对单、用户报修、订单核对都靠这串编码；「一行字但每家都要」的需求就该是插件。",
  plugs: [{ fn: "createSkuCodePlugin", cfg: "label: '{{label}}'", why: "命中后渲染货号行（等宽字体）" }],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "defaultSelection={{ 颜色: 'red', 尺码: 's' }}",
  ],
  note: "core 的「选中摘要」里本就含编码；本插件用于需要单独突出、便于复制核对编码的场景。",
  controls: [
    {
      key: "label",
      label: "前缀文案",
      kind: "select",
      init: "货号",
      options: [
        { label: "货号", value: "货号" },
        { label: "SKU", value: "SKU" },
        { label: "商品编码", value: "商品编码" },
      ],
    },
  ],
  stageHeight: 260,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const label = String(cfg.label);

  const Sku = useMemo(() => createSkuSelector([createSkuCodePlugin({ label })]), [label]);

  return (
    <div style={CARD}>
      <Sku
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        defaultSelection={{ 颜色: "red", 尺码: "s" }}
        onChange={(_sel, v) => v && log(\`命中 \${v.sku}\`, "event")}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        未选全时不占位——货号只在命中后出现，别让半选状态看到错误的编码。
      </p>
    </div>
  );
}
`,Qk=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createResetBarPlugin } from "vane-sku/custom-plugins/ResetBarPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 11 · 清空重选 ResetBar（插件功能）
 * 单装这一个：一键走 context.clearSelection() 整段重置，
 * 未选任何规格时按钮自动隐藏；onReset 回调接右栏日志。
 */
export const meta: DemoMeta = {
  slug: "reset-bar",
  title: "清空重选 ResetBar",
  group: "plugin",
  plugin: "ResetBar",
  intro: "选了一半想重来，一键清空：走 context.clearSelection()，未选任何规格时按钮自动隐藏。",
  why: "core 支持「再点同值取消」，但逐个取消很烦；移动端小屏上整体重置是高频操作。",
  plugs: [
    {
      fn: "createResetBarPlugin",
      cfg: "text: '{{text}}', onReset: () => track('reset')",
      why: "渲染清空按钮并整段重置选择",
    },
  ],
  props: ["attributes={attributes}", "variants={variants}", "onChange={handleChange}"],
  note: "依赖核心 context.clearSelection()（vane-sku 0.1.0 起提供）；onReset 在清空后触发，接埋点很顺手。",
  controls: [
    {
      key: "text",
      label: "按钮文案",
      kind: "select",
      init: "清空重选",
      options: [
        { label: "清空重选", value: "清空重选" },
        { label: "重新选择", value: "重新选择" },
        { label: "重置规格", value: "重置规格" },
      ],
    },
  ],
  stageHeight: 280,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const text = String(cfg.text);

  const Sku = useMemo(
    () =>
      createSkuSelector([
        createResetBarPlugin({
          text,
          onReset: () => log(\`onReset · 选择已整段清空（按钮随空选择隐藏）\`, "info"),
        }),
      ]),
    [text, log]
  );

  return (
    <div style={CARD}>
      <Sku
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        onChange={(sel, v) =>
          log(
            v ? \`命中 \${v.sku} · \${JSON.stringify(sel)}\` : \`未命中 · \${JSON.stringify(sel)}\`,
            v ? "event" : "warn"
          )
        }
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        选两个规格 → 点「清空重选」：右栏记一次 onReset，按钮自己藏起来（没有选择可清了）。
      </p>
    </div>
  );
}
`,Kk=`import React, { useMemo, useState } from "react";
import { createSkuSelector } from "vane-sku";
import { createImageLinkPlugin } from "vane-sku/custom-plugins/ImageLinkPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

/**
 * 12 · 规格切主图 ImageLink（插件功能）
 * 事件型插件：只发事件（onImageChange 回调 + sku:image 总线），不渲染任何 UI。
 * 主图由外层渲染——本页用 useState 存当前图，左边就是「外层的 gallery」。
 */
export const meta: DemoMeta = {
  slug: "image-link",
  title: "规格切主图 ImageLink",
  group: "plugin",
  plugin: "ImageLink",
  intro: "命中变体带 image 时把图抛给外层（回调 + sku:image 总线双通道），自己不渲染任何 UI；左侧主图由本页外层渲染。",
  why: "规格图联动与「谁来渲染主图」解耦：gallery、卡片、放大镜想怎么接就怎么接，core 不碰图片。",
  plugs: [
    { fn: "createImageLinkPlugin", cfg: "onImageChange: setMainImage", why: "只发事件，主图渲染留给外层" },
  ],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "defaultSelection={{ 颜色: 'red', 尺码: 's' }}",
  ],
  note: "挂载（onMount）也会推一次当前图，页面打开主图不空窗；未命中或变体没写 image 时不发事件。",
  stageHeight: 300,
};

export default function Stage({ log }: DemoStageProps) {
  const [main, setMain] = useState(VARIANTS[0].image ?? "");

  const Sku = useMemo(
    () =>
      createSkuSelector([
        createImageLinkPlugin({
          onImageChange: (img) => {
            setMain(img);
            log(\`主图 → \${img}\`);
          },
        }),
      ]),
    [log]
  );

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", width: "100%" }}>
      <img
        src={main}
        alt="主图"
        style={{ width: 92, height: 92, objectFit: "cover", borderRadius: 2, border: "1px solid var(--line)" }}
      />
      <div style={{ background: "#fff", borderRadius: 2, padding: 14, color: "#1f2328", flex: 1 }}>
        <Sku attributes={ATTRIBUTES} variants={VARIANTS} defaultSelection={{ 颜色: "red", 尺码: "s" }} />
        <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
          换颜色 / 尺码：左图跟着变体走；这就是「发事件的插件 + 接事件的外层」。
        </p>
      </div>
    </div>
  );
}
`,Wk=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createKeyboardNavPlugin } from "vane-sku/custom-plugins/KeyboardNavPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { KeyHint } from "./panels";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 13 · 键盘漫游 KeyboardNav（插件功能）
 * 行为型插件：←→ 同行切换、↑↓ 跨行跳转（保持列位），自动跳过置灰项。
 * 预选「蓝」后 L 是死路——方向键会绕开它，这正是「跳过死路」的意义。
 */
export const meta: DemoMeta = {
  slug: "keyboard",
  title: "键盘漫游 KeyboardNav",
  group: "plugin",
  plugin: "KeyboardNav",
  intro: "点中任一规格按钮后，←→ 同行切换、↑↓ 跨行跳转，自动跳过置灰项（预选了「蓝」，方向键会绕开死路的 L）。",
  why: "键盘用户 / 电视端大屏选购的无障碍刚需；「跳过死路」让方向键永远落在有效选项上。",
  plugs: [
    { fn: "createKeyboardNavPlugin", cfg: "preventDefault: {{prevent}}", why: "挂 keydown 监听实现方向键漫游" },
  ],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "defaultSelection={{ 颜色: 'blue' }}",
  ],
  note: "实现走 DOM 查询（依赖 core 按钮的 data-testid 约定），不侵入渲染；onMount 返回清理函数，卸载自动摘监听。",
  controls: [{ key: "prevent", label: "阻止方向键滚动页面", kind: "switch", init: true }],
  stageHeight: 320,
};

export default function Stage({ cfg }: DemoStageProps) {
  const prevent = Boolean(cfg.prevent);

  const Sku = useMemo(
    () => createSkuSelector([createKeyboardNavPlugin({ preventDefault: prevent })]),
    [prevent]
  );

  return (
    <div style={CARD}>
      <p style={{ margin: "0 0 8px", fontSize: 12, color: "#4a5056" }}>
        先点（或 Tab 聚焦）任一规格按钮，再用方向键走两圈：
      </p>
      <KeyHint
        items={[
          ["←→", "同属性行内切换选项"],
          ["↑↓", "跨属性行跳转（保持列位）"],
        ]}
      />
      <div style={{ marginTop: 10 }}>
        <Sku attributes={ATTRIBUTES} variants={VARIANTS} defaultSelection={{ 颜色: "blue" }} />
      </div>
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        在尺码行按 →：S → M → 回到 S，L 因缺 blue-l 被置灰，直接被跳过。
      </p>
    </div>
  );
}
`,qk=`import React, { useEffect, useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createStatePersistencePlugin } from "vane-sku/custom-plugins/StatePersistencePlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/** 独立存储键：避免和场景卡 / 全量装配页的持久化互相踩 */
const KEY = "vane-sku:demo:demos-persistence";

/**
 * 14 · 选择持久化 StatePersistence（插件功能）
 * 行为型插件：挂载读回 / 变化写入 / 清空删键。拖「重挂载」开关销毁重建组件，
 * 上次的选择从 localStorage 原样还原——还原与写入都记进右栏日志。
 */
export const meta: DemoMeta = {
  slug: "persistence",
  title: "选择持久化 StatePersistence",
  group: "plugin",
  plugin: "StatePersistence",
  intro: "把上次选的规格写进 localStorage，挂载时读回；拖「重挂载」开关销毁重建，选择原样还原。",
  why: "用户逛一圈回来还停在上次的规格；多步下单流程中途返回，也不用从头重选。",
  plugs: [
    { fn: "createStatePersistencePlugin", cfg: "key: 'vane-sku:demo:selection'", why: "挂载读回 / 变化写入 / 清空删键" },
  ],
  props: ["attributes={attributes}", "variants={variants}"],
  note: "隐私模式、存储禁用、配额超限、脏数据一律静默降级，不影响主流程；与 UrlSync 可共存。",
  controls: [
    { key: "remount", label: "重挂载（模拟刷新）", kind: "switch", init: false, nonLayout: true },
  ],
  stageHeight: 300,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  // 开关每翻转一次 = 重挂载一次（false→true 一次，true→false 又一次）
  const toggle = Boolean(cfg.remount);

  const Sku = useMemo(() => createSkuSelector([createStatePersistencePlugin({ key: KEY })]), []);

  // 重挂载后读一次存储：把「还原自 localStorage」摊进日志
  useEffect(() => {
    const raw = window.localStorage.getItem(KEY);
    log(\`挂载 · localStorage \${raw ? \`读回 \${raw}\` : "为空（首次进入）"}\`, "info");
  }, [toggle, log]);

  return (
    <div style={CARD}>
      <Sku
        key={String(toggle)}
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        onChange={(sel, v) =>
          log(
            v ? \`写入 localStorage：\${JSON.stringify(sel)}（命中 \${v.sku}）\` : \`写入 localStorage：\${JSON.stringify(sel)}\`,
            v ? "event" : "warn"
          )
        }
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        选好规格 → 拖「重挂载」：按钮组销毁重建，选择自动还原；把选择清空（再点同值取消）会删键。
      </p>
    </div>
  );
}
`,Gk=`import React, { useCallback, useMemo, useState } from "react";
import { createSkuSelector } from "vane-sku";
import { createUrlSyncPlugin } from "vane-sku/custom-plugins/UrlSyncPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

const CODE: React.CSSProperties = {
  display: "block",
  padding: "6px 10px",
  borderRadius: 2,
  background: "#f4f5f7",
  border: "1px solid #e5e7eb",
  color: "#b45309",
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  fontSize: 11,
  overflowX: "auto",
  whiteSpace: "nowrap",
};

/**
 * 15 · URL 同步 UrlSync（插件功能）
 * 行为型插件：选择写进查询串（?sku_颜色=red&sku_尺码=s），挂载时反向解析还原。
 * 下方展示当前查询串的只读快照；变化也记进右栏日志。
 */
export const meta: DemoMeta = {
  slug: "url-sync",
  title: "URL 同步 UrlSync",
  group: "plugin",
  plugin: "UrlSync",
  intro: "选择写进查询串（?sku_颜色=red&sku_尺码=s），挂载时反向还原；刷新 / 分享都能保持选择。",
  why: "「把这个链接发给客服，他看到的就是我选的规格」——客服带规格链接、分享商品页的刚需。",
  plugs: [
    { fn: "createUrlSyncPlugin", cfg: "useReplace: {{replace}}", why: "选择 ↔ 查询串双向同步" },
  ],
  props: ["attributes={attributes}", "variants={variants}", "onChange={handleChange}"],
  note: "默认 replaceState 不把每次点击塞进历史栈；查询键带 sku_ 前缀，不覆盖页面其它参数。",
  controls: [{ key: "replace", label: "replaceState（不进历史栈）", kind: "switch", init: true }],
  stageHeight: 300,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const replace = Boolean(cfg.replace);
  const [q, setQ] = useState(() => window.location.search || "（空）");

  const Sku = useMemo(() => createSkuSelector([createUrlSyncPlugin({ useReplace: replace })]), [replace]);

  const sync = useCallback(() => {
    const next = window.location.search || "（已清空）";
    setQ(next);
    log(\`查询串 → \${next}\`);
  }, [log]);

  return (
    <div style={{ ...CARD, display: "grid", gap: 10 }}>
      <Sku attributes={ATTRIBUTES} variants={VARIANTS} onChange={sync} />
      <code style={CODE}>{q}</code>
      <p style={{ margin: 0, fontSize: 11, color: "#5b6064" }}>
        上方是实时查询串（只读快照）。关掉开关改用 pushState：每次选择都进历史栈，后退键能撤销选择。
      </p>
    </div>
  );
}
`,Jk=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createAnalyticsPlugin } from "vane-sku/custom-plugins/AnalyticsPlugin";
import type { AnalyticsEvent } from "vane-sku/custom-plugins/AnalyticsPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

const EVENT_LABEL: Record<AnalyticsEvent["name"], string> = {
  "sku:mount": "挂载",
  "sku:change": "命中",
  "sku:invalid": "未命中",
};

/**
 * 16 · 埋点上报 Analytics（插件功能）
 * 事件型插件：三类事件（挂载 / 命中 / 未命中）双通道出口——
 * onEvent 回调 + sku:analytics 总线，不渲染任何 UI。这里把 onEvent
 * 接到右栏日志：右栏的每一行就是一次真实上报。
 */
export const meta: DemoMeta = {
  slug: "analytics",
  title: "埋点上报 Analytics",
  group: "plugin",
  plugin: "Analytics",
  intro: "三类事件（挂载 / 命中 / 未命中）双通道出口：onEvent 回调 + sku:analytics 总线。右栏日志就是上报流水。",
  why: "规格选择是转化漏斗的关键一步；「哪些组合被点了、哪些根本选不出来」对选品和补库存都是硬数据。",
  plugs: [
    {
      fn: "createAnalyticsPlugin",
      cfg: "onlyMatched: {{onlyMatched}}, onEvent: (e) => track(e)",
      why: "只做事件出口，不渲染任何 UI；接哪家 SDK 由宿主决定",
    },
  ],
  props: ["attributes={attributes}", "variants={variants}"],
  note: "默认未命中也上报——「用户点得到却选不出」的坏组合恰恰最该被发现。",
  controls: [{ key: "onlyMatched", label: "只上报命中", kind: "switch", init: false, nonLayout: true }],
  stageHeight: 280,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const onlyMatched = Boolean(cfg.onlyMatched);

  const Sku = useMemo(
    () =>
      createSkuSelector([
        createAnalyticsPlugin({
          onlyMatched,
          onEvent: (e) =>
            log(
              \`\${EVENT_LABEL[e.name]} · \${JSON.stringify(e.selection)}\${e.variant ? \` → \${e.variant.sku}\` : ""}\`,
              e.name === "sku:invalid" ? "warn" : e.name === "sku:mount" ? "info" : "event"
            ),
        }),
      ]),
    [onlyMatched, log]
  );

  return (
    <div style={CARD}>
      <Sku attributes={ATTRIBUTES} variants={VARIANTS} />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只选颜色（未选全）记「未命中」，选全记「命中」，进页面记「挂载」——三种事件都会进右栏。
      </p>
    </div>
  );
}
`,Yk=Object.assign({"./00-quickstart.tsx":Xh,"./01-disable.tsx":ny,"./02-two-attr.tsx":sy,"./03-ignore-stock.tsx":dy,"./04-full-combo.tsx":MS,"./05-price-range.tsx":zS,"./06-price-link.tsx":FS,"./07-stock-status.tsx":WS,"./08-quota.tsx":YS,"./09-quantity.tsx":tk,"./10-sku-code.tsx":ik,"./11-reset-bar.tsx":uk,"./12-image-link.tsx":fk,"./13-keyboard.tsx":Sk,"./14-persistence.tsx":Pk,"./15-url-sync.tsx":bk,"./16-analytics.tsx":Ok}),Xk=Object.assign({"./00-quickstart.tsx":Lk,"./01-disable.tsx":Mk,"./02-two-attr.tsx":Ak,"./03-ignore-stock.tsx":Ik,"./04-full-combo.tsx":Dk,"./05-price-range.tsx":zk,"./06-price-link.tsx":Uk,"./07-stock-status.tsx":Bk,"./08-quota.tsx":Vk,"./09-quantity.tsx":Fk,"./10-sku-code.tsx":Hk,"./11-reset-bar.tsx":Qk,"./12-image-link.tsx":Kk,"./13-keyboard.tsx":Wk,"./14-persistence.tsx":qk,"./15-url-sync.tsx":Gk,"./16-analytics.tsx":Jk}),Zk=e=>e.replace(/^\.\//,""),Dl=Object.entries(Yk).map(([e,t])=>{const n=Zk(e);return{meta:t.meta,Stage:t.default,file:n,source:Xk[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),e0=["basic","advanced","plugin"];Array.from(new Set(Dl.map(e=>e.meta.plugin).filter(e=>!!e))).sort();const zl={basic:{label:"基础功能",hint:"Core 自身的 props 与推导行为"},advanced:{label:"高级功能",hint:"全量装配 / 组合"},plugin:{label:"插件功能",hint:"一插件一页"}};function mu(e){const t={};for(const n of e.controls??[])t[n.key]=n.init;return t}const t0="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",n0="true|false|null|undefined|this|super",r0="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",hu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${t0})\b`,String.raw`\b(${n0})\b`,String.raw`\b(${r0})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),yu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function o0(e){const t=[];let n=0;hu.lastIndex=0;let r;for(;r=hu.exec(e);){r.index>n&&t.push({text:e.slice(n,r.index),cls:null});const o=yu.findIndex((i,l)=>r[l+1]!==void 0);t.push({text:r[0],cls:o>=0?yu[o]:null}),n=r.index+r[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function vu(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function i0({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:r}){const[o,i]=k.useState("idle"),[l,s]=k.useState(!1),a=k.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=n>0&&a.length>n,d=u&&!l?a.slice(0,n).join(`
`):e,p=k.useMemo(()=>o0(d),[d]),m=k.useCallback(async()=>{var S;let y=!1;if((S=navigator.clipboard)!=null&&S.writeText)try{await navigator.clipboard.writeText(e),y=!0}catch{y=vu(e)}else y=vu(e);i(y?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-head",children:[c.jsx("span",{children:t}),c.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[c.jsxs("span",{children:[a.length," 行"]}),c.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:m,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),c.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:c.jsx("code",{children:p.map((y,S)=>y.cls?c.jsx("span",{className:y.cls,children:y.text},S):c.jsx(Er.Fragment,{children:y.text},S))})}),u?c.jsx("button",{type:"button",className:"code-more",onClick:()=>s(y=>!y),children:l?"收起":`展开余下 ${a.length-n} 行`}):null]})}function pf(e){return e.props??e.config??[]}function l0({doc:e}){var o,i,l;const t=pf(e),n=e.events??[],r=e.methods??[];return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"属性 Props"}),t.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"属性"}),c.jsx("th",{children:"类型"}),c.jsx("th",{children:"默认"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:t.map(s=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:s.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:s.type})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:s.default??"-"})}),c.jsx("td",{children:s.description??"—"})]},s.name))})]}):c.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"事件 Events"}),n.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"事件"}),c.jsx("th",{children:"触发时机"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:n.map(s=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:s.name})}),c.jsx("td",{children:s.when}),c.jsx("td",{children:s.description})]},s.name))})]}):c.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"方法 Methods"}),r.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"方法"}),c.jsx("th",{children:"签名"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:r.map(s=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:s.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:s.signature})}),c.jsx("td",{children:s.description})]},s.name))})]}):c.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),c.jsxs("div",{className:"doc-cols",children:[(o=e.features)!=null&&o.length?c.jsxs("div",{children:[c.jsx("h5",{children:"能做"}),c.jsx("ul",{children:e.features.map(s=>c.jsx("li",{children:s},s))})]}):null,(i=e.useCases)!=null&&i.length?c.jsxs("div",{children:[c.jsx("h5",{children:"适合"}),c.jsx("ul",{children:e.useCases.map(s=>c.jsx("li",{children:s},s))})]}):null,(l=e.notes)!=null&&l.length?c.jsxs("div",{children:[c.jsx("h5",{children:"注意"}),c.jsx("ul",{children:e.notes.map(s=>c.jsx("li",{children:s},s))})]}):null]})]})}function s0({factory:e,priority:t,summary:n,doc:r,defaultOpen:o=!0}){var l,s;const i={props:pf(r).length,events:((l=r.events)==null?void 0:l.length)??0,methods:((s=r.methods)==null?void 0:s.length)??0};return c.jsxs("details",{className:"api-plug",open:o,children:[c.jsxs("summary",{children:[c.jsx("code",{children:e}),c.jsxs("span",{className:"tag tag-accent",children:["priority ",t]}),c.jsx("span",{className:"api-plug-desc",children:n}),c.jsxs("span",{className:"api-plug-n",children:[i.props," 属性 · ",i.events," 事件 · ",i.methods," 方法"]})]}),c.jsx("div",{className:"api-plug-body",children:c.jsx(l0,{doc:r})})]})}const a0=/create[A-Z]\w*Plugin/g;function u0(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function gf(e){return e.dir?`create${e.dir}`:u0(e.factory)}function c0(e){return new Set(e.match(a0)??[])}function d0(e,t){const n=c0(e);return t.filter(r=>n.has(gf(r))).sort((r,o)=>r.priority-o.priority)}function f0({source:e,plugins:t,heading:n="本页用到的插件"}){const r=k.useMemo(()=>d0(e,t),[e,t]);return r.length===0?null:c.jsxs("section",{className:"api-sec",children:[c.jsxs("div",{className:"api-sec-head",children:[c.jsxs("h2",{className:"api-sec-title",children:[n," · ",r.length," 个"]}),c.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",c.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(o=>c.jsx(s0,{factory:gf(o),priority:o.priority,summary:o.summary??o.doc.description??"",doc:o.doc},o.factory))]})}const p0=`import type {
  SkuPlugin,
  SkuPluginContext,
  SkuSelection,
  SkuVariant,
} from "../../components/SkuPlugin/plugins/types";

/**
 * AnalyticsPlugin — 埋点上报。
 *
 * 规格选择是转化漏斗的关键一步，「哪些组合被点了、哪些组合根本选不出来」
 * 对选品和库存都是硬需求。这里只做事件出口，不渲染任何 UI：
 * 回调（onEvent）与总线（sku:analytics）双通道，接哪家 SDK 由宿主决定。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface AnalyticsEvent {
  name: "sku:mount" | "sku:change" | "sku:invalid";
  selection: SkuSelection;
  variant: SkuVariant | null;
  at: number;
}

export interface AnalyticsConfig {
  /** 统一事件出口（推荐：接到你自己的埋点 SDK） */
  onEvent?: (event: AnalyticsEvent) => void;
  /** 只在命中变体时上报，默认 false（未命中也上报，便于发现「选不出来」的组合） */
  onlyMatched?: boolean;
}

export function createAnalyticsPlugin(config: AnalyticsConfig = {}): SkuPlugin {
  const emit = (
    context: SkuPluginContext,
    name: AnalyticsEvent["name"],
    selection: SkuSelection,
    variant: SkuVariant | null
  ) => {
    if (config.onlyMatched && !variant) return;
    const event: AnalyticsEvent = {
      name,
      selection,
      variant,
      at: Date.now(),
    };
    context.bus.emit("sku:analytics", event);
    config.onEvent?.(event);
  };

  return {
    name: "Analytics",
    version: "0.1.0",
    description: "规格选择埋点：回调 + 总线双通道，不渲染 UI",
    priority: 10,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        emit(context, "sku:mount", context.selection, context.variant);
      },
      onSkuChange: (
        context: SkuPluginContext,
        selection: SkuSelection,
        variant: SkuVariant | null
      ) => {
        emit(
          context,
          variant ? "sku:change" : "sku:invalid",
          selection,
          variant
        );
      },
    },
  };
}
`,g0=`import type {
  SkuPlugin,
  SkuPluginContext,
} from "../../components/SkuPlugin/plugins/types";

/**
 * ImageLinkPlugin — 规格切主图（B5：只发事件，不渲染 UI）。
 *
 * 命中变体带 image 时把图抛给外层（回调 + 总线），由外层 gallery / card 决定
 * 怎么切主图 —— 规格图联动与「谁来渲染主图」解耦，core 因此不碰图片渲染。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface ImageLinkConfig {
  /** 主图切换回调（推荐用法） */
  onImageChange?: (image: string) => void;
}

export function createImageLinkPlugin(
  config: ImageLinkConfig = {}
): SkuPlugin {
  const push = (context: SkuPluginContext) => {
    const image = context.variant?.image;
    if (!image) return;
    config.onImageChange?.(image);
    context.bus.emit("sku:image", image);
  };

  return {
    name: "ImageLink",
    version: "0.1.0",
    description: "规格切主图：命中变体带图时抛事件，不渲染 UI",
    priority: 30,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        push(context);
      },
      onSkuChange: (context: SkuPluginContext) => {
        push(context);
      },
    },
  };
}
`,m0=`import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * KeyboardNavPlugin — 键盘漫游（无障碍）。
 *
 * 让规格按钮支持方向键：
 *   ← → 在同一属性行内移动焦点（自动跳过被禁用推导置灰的选项）
 *   ↑ ↓ 在属性行之间移动焦点（按完整候选列表的列位置就近落点）
 * Enter / Space 由按钮原生行为触发选择 —— 移动焦点不等于改变选择，
 * 键盘用户终于可以「只浏览不选择」了。
 *
 * 实现走 DOM 查询（按钮都带 data-testid），不侵入 core 渲染；
 * 挂载时挂监听、卸载时返回清理函数（内核 onMount 的 React 式写法）。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface KeyboardNavConfig {
  /** 是否阻止方向键的默认滚动行为，默认 true */
  preventDefault?: boolean;
}

export function createKeyboardNavPlugin(
  config: KeyboardNavConfig = {}
): SkuPlugin {
  const prevent = config.preventDefault ?? true;

  return {
    name: "KeyboardNav",
    version: "0.1.0",
    description: "键盘漫游：方向键移动焦点，Enter/Space 选择",
    priority: 25,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        const root = context.refs.getContainer?.() ?? null;
        if (!root) return;

        /** 行内全部候选（含禁用项：列位置要按完整列表算，否则会漂移） */
        const allOf = (row: Element) =>
          Array.from(
            row.querySelectorAll<HTMLButtonElement>('[data-testid^="sku-opt-"]')
          );

        const handler = (e: KeyboardEvent) => {
          const isHorizontal = e.key === "ArrowLeft" || e.key === "ArrowRight";
          const isVertical = e.key === "ArrowUp" || e.key === "ArrowDown";
          // Enter / Space 交给按钮原生行为（本插件不 preventDefault，不重复触发 click）
          if (!isHorizontal && !isVertical) return;

          const btn = (e.target as HTMLElement | null)?.closest?.(
            '[data-testid^="sku-opt-"]'
          ) as HTMLButtonElement | null;
          if (!btn) return;

          const rows = Array.from(
            root.querySelectorAll<HTMLElement>('[data-testid^="sku-attr-"]')
          );
          const rowIndex = rows.findIndex((r) => r.contains(btn));
          if (rowIndex < 0) return;
          if (prevent) e.preventDefault();

          if (isHorizontal) {
            const all = allOf(rows[rowIndex]);
            const cur = all.indexOf(btn);
            if (cur < 0 || !all.length) return;
            const dir = e.key === "ArrowRight" ? 1 : -1;
            // 在完整候选列表里按方向找下一个可用项（禁用项直接跳过，可跨过它继续找）
            for (let step = 1; step <= all.length; step += 1) {
              const index = ((cur + dir * step) % all.length + all.length) % all.length;
              const candidate = all[index];
              if (candidate.disabled) continue;
              // 只移动焦点，不点击（P2-7：移动 ≠ 选择）
              candidate.focus();
              return;
            }
            return;
          }

          const targetRow = rows[rowIndex + (e.key === "ArrowDown" ? 1 : -1)];
          if (!targetRow) return;
          const curCol = allOf(rows[rowIndex]).indexOf(btn);
          // 目标行按完整列表的列位置就近取「可用」项，避免过滤后下标漂移
          const target = allOf(targetRow);
          let best: HTMLButtonElement | null = null;
          let bestDistance = Infinity;
          for (let i = 0; i < target.length; i += 1) {
            const candidate = target[i];
            if (candidate.disabled) continue;
            const distance = Math.abs(i - curCol);
            if (distance < bestDistance) {
              bestDistance = distance;
              best = candidate;
            }
          }
          best?.focus();
        };

        root.addEventListener("keydown", handler);
        // 返回清理函数：内核会在 clear() 时逆序执行
        return () => root.removeEventListener("keydown", handler);
      },
    },
  };
}
`,h0=`import React from "react";
import { formatPriceValue } from "../../components/SkuPlugin/limits";
import type {
  SkuPlugin,
  SkuPluginContext,
} from "../../components/SkuPlugin/plugins/types";

/**
 * PriceLinkPlugin — 价格联动（B2/B4 子路径插件）。
 *
 * 订阅命中变体，把价格渲染到 overlay 段（core 的「选中摘要」之后）。
 * 定价策略可替换：默认取 variant.price，也可由调用方在 variant 上自备。
 *
 * meta 在同目录 index.ts 挂载（家族约定），这里只导出裸工厂。
 */
export interface PriceLinkConfig {
  /** 货币符号，默认 "¥" */
  currency?: string;
  /** 是否展示原价（原价 > 现价时才画删除线），默认 true */
  showOriginal?: boolean;
  /** 折扣文案，如 "限时8折" */
  discountText?: string;
}

export function createPriceLinkPlugin(
  config: PriceLinkConfig = {}
): SkuPlugin {
  return {
    name: "PriceLink",
    version: "0.1.0",
    description: "价格联动：把命中变体的价格渲染到浮层",
    priority: 50,
    config,
    hooks: {
      renderOverlay: (context: SkuPluginContext) => {
        const v = context.variant;
        if (!v || typeof v.price !== "number") return null;
        const currency = config.currency ?? "¥";
        const showOriginal = config.showOriginal ?? true;
        const hasOriginal =
          showOriginal &&
          typeof v.originalPrice === "number" &&
          v.originalPrice > v.price;

        return (
          <div
            data-testid="sku-price"
            style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 6 }}
          >
            <span style={{ fontSize: 18, fontWeight: 700, color: "#b32d08" }}>
              {currency}
              {formatPriceValue(v.price)}
            </span>
            {hasOriginal ? (
              <s data-testid="sku-price-original" style={{ fontSize: 12, color: "#6b7076" }}>
                {currency}
                {formatPriceValue(v.originalPrice)}
              </s>
            ) : null}
            {config.discountText ? (
              <span
                data-testid="sku-price-discount"
                style={{
                  fontSize: 11,
                  padding: "1px 6px",
                  borderRadius: 4,
                  background: "#fff1f0",
                  color: "#b32d08",
                }}
              >
                {config.discountText}
              </span>
            ) : null}
          </div>
        );
      },
    },
  };
}
`,y0=`import React from "react";
import { effectiveVariants } from "../../components/SkuPlugin/matrix";
import { formatPriceValue } from "../../components/SkuPlugin/limits";
import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * PriceRangePlugin — 价格区间。
 *
 * 未选全（或组合无货）时，PriceLink 显示不出单价，页面价格区就空了。
 * 这里补上「¥199.00 – ¥269.00」这种区间展示：按当前选择过滤变体后取 min/max。
 * 一旦选全并命中变体就退场，把价格区让给 PriceLink 显示准确单价。
 *
 * 口径（P2-2）：区间只统计「可售」变体（复用 effectiveVariants，与禁用推导同一口径），
 * 否则会出现「¥199 – ¥229」但只有 199 有货的虚假区间；价格固定两位小数。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface PriceRangeConfig {
  /** 货币符号，默认 "¥" */
  currency?: string;
  /** 区间连接符，默认 "–" */
  separator?: string;
  /** 命中变体时是否仍显示区间（默认 false：让位给 PriceLink） */
  showWhenMatched?: boolean;
}

export function createPriceRangePlugin(config: PriceRangeConfig = {}): SkuPlugin {
  return {
    name: "PriceRange",
    version: "0.1.0",
    description: "价格区间：未命中变体时展示可选范围的价格区间",
    priority: 45,
    // 排在 PriceLink 之前：价格区上下只有一块，命中时由 PriceLink 接管
    config: { slotPosition: "after", order: 5, ...config },
    hooks: {
      renderOverlay: (context: SkuPluginContext) => {
        if (context.variant && !config.showWhenMatched) return null;

        const attributes = context.attributes ?? context.props.attributes ?? [];
        const variants = context.variants ?? context.props.variants ?? [];
        const selection = context.selection ?? {};
        // 只统计「可售」变体，且与已选属性一致
        const pool = effectiveVariants(variants, {
          ignoreOutOfStock: context.ignoreOutOfStock ?? true,
        }).filter((v) =>
          Object.keys(selection).every((k) => v.attrValues?.[k] === selection[k])
        );
        const prices = pool
          .map((v) => v.price)
          .filter((p): p is number => typeof p === "number" && Number.isFinite(p));
        if (!prices.length) return null;

        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const currency = config.currency ?? "¥";
        const separator = config.separator ?? "–";

        return (
          <div
            data-testid="sku-price-range"
            style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 6 }}
          >
            <span style={{ fontSize: 16, fontWeight: 700, color: "#b32d08" }}>
              {currency}
              {formatPriceValue(min)}
              {min !== max ? \`\${separator}\${currency}\${formatPriceValue(max)}\` : ""}
            </span>
            {attributes.length && !context.isComplete ? (
              <span style={{ fontSize: 11, color: "#5b6064" }}>（请先选择规格）</span>
            ) : null}
          </div>
        );
      },
    },
  };
}
`,v0=`import React from "react";
import { quantityUpper } from "../../components/SkuPlugin/limits";
import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * QuantityPlugin — 数量步进器。
 *
 * 选完规格紧接着就是选数量，上限取「库存」「剩余可购（限购-已购）」与 config.max 的最小值，
 * 避免用户选了 10 件却在提交时才发现限购 2 件。
 * 数量写进内核 state（key: quantity），宿主加购按钮直接读。
 *
 * 关键约束（P0-2）：上限不能只作用在渲染值上 —— 变体/库存/限购变化时
 * 必须把收敛后的数量写回 state，否则宿主读到的是旧数量（超卖）。
 * 收敛在 onMount / onSkuChange 里做（事件钩子），不在渲染期 setState，
 * 且仅在「已经是数字且与目标值不同」时才写 + 回调，避免 setState 循环。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface QuantityConfig {
  /** 初始数量，默认 1 */
  defaultValue?: number;
  /** 硬上限（不传则取 库存/剩余限购 的较小值） */
  max?: number;
  /** 当前用户已购件数，用于扣减限购额度（与 QuotaPlugin 同一口径），默认 0 */
  purchasedCount?: number;
  /** 数量变化回调（用户步进 + 库存/限购变化导致的自动收敛都会触发） */
  onChange?: (quantity: number) => void;
}

export function createQuantityPlugin(config: QuantityConfig = {}): SkuPlugin {
  const defaultValue = config.defaultValue ?? 1;
  const purchasedCount = config.purchasedCount ?? 0;

  /** 当前变体下的数量上限；变体缺失/上限非有限时返回 0 */
  const upperOf = (context: SkuPluginContext) =>
    quantityUpper(context.variant, {
      purchasedCount,
      max: config.max,
    });

  /** 收敛目标：无变体 → defaultValue；有上限 → clamp 到 [1, upper] */
  const targetOf = (context: SkuPluginContext) => {
    const upper = upperOf(context);
    const base =
      typeof context.state?.quantity === "number"
        ? (context.state.quantity as number)
        : defaultValue;
    if (!Number.isFinite(upper) || upper <= 0) return defaultValue;
    return Math.max(1, Math.min(base, upper));
  };

  /**
   * 把收敛结果写回内核 state。
   * notify=false（首次初始化）只写不回调，避免把初始化当用户操作；
   * 与目标值相同则完全跳过，保证不会出现 setState 循环。
   */
  const converge = (context: SkuPluginContext, notify: boolean) => {
    const target = targetOf(context);
    const current = context.state?.quantity;
    if (typeof current === "number" && current === target) return;
    const hadNumber = typeof current === "number";
    context.setState({ quantity: target });
    if (hadNumber && notify) config.onChange?.(target);
  };

  return {
    name: "Quantity",
    version: "0.1.0",
    description: "数量步进器：受库存与剩余限购双重上限约束，并写回 state",
    priority: 35,
    config: { slotPosition: "after", order: 20, ...config },
    hooks: {
      onMount: (context: SkuPluginContext) => {
        converge(context, false);
      },
      // 变体 / 库存 / 限购变化都会触发（withPlugins 对变体变化同样派发 onSkuChange）
      onSkuChange: (context: SkuPluginContext) => {
        converge(context, true);
      },
      renderHeader: (context: SkuPluginContext) => {
        const v = context.variant;
        if (!v) return null;

        const upper = upperOf(context);
        if (!Number.isFinite(upper) || upper <= 0) return null;

        // 展示用兜底 clamp：state 的收敛由 onSkuChange 负责，这里只防一帧闪烁
        const raw =
          typeof context.state?.quantity === "number"
            ? (context.state.quantity as number)
            : defaultValue;
        const current = Math.max(1, Math.min(raw, upper));

        const commit = (next: number) => {
          const clamped = Math.max(1, Math.min(next, upper));
          if (clamped === raw) return;
          context.setState({ quantity: clamped });
          config.onChange?.(clamped);
        };

        const btn: React.CSSProperties = {
          width: 26,
          height: 26,
          border: "1px solid #d0d4da",
          background: "#fff",
          color: "#1f2328",
          cursor: "pointer",
          borderRadius: 4,
          lineHeight: 1,
        };

        return (
          <div
            data-testid="sku-quantity"
            data-quantity={String(current)}
            data-max={String(upper)}
            style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}
          >
            <span style={{ fontSize: 12, color: "#4a5056" }}>数量</span>
            <button
              type="button"
              data-testid="sku-quantity-minus"
              disabled={current <= 1}
              onClick={() => commit(current - 1)}
              style={{ ...btn, color: current <= 1 ? "#7d838a" : "#1f2328", cursor: current <= 1 ? "not-allowed" : "pointer" }}
            >
              −
            </button>
            <span style={{ minWidth: 28, textAlign: "center", fontSize: 13 }}>{current}</span>
            <button
              type="button"
              data-testid="sku-quantity-plus"
              disabled={current >= upper}
              onClick={() => commit(current + 1)}
              style={{ ...btn, color: current >= upper ? "#7d838a" : "#1f2328", cursor: current >= upper ? "not-allowed" : "pointer" }}
            >
              +
            </button>
            <span style={{ fontSize: 11, color: "#5b6064" }}>上限 {upper}</span>
          </div>
        );
      },
    },
  };
}
`,S0=`import React from "react";
import { remainingQuota } from "../../components/SkuPlugin/limits";
import type {
  SkuPlugin,
  SkuPluginContext,
} from "../../components/SkuPlugin/plugins/types";

/**
 * QuotaPlugin — 限购校验（B2/B4 子路径插件）。
 *
 * vane-card 只有 stock（库存），没有「每人限购 N 件」；这里补齐：
 *  - 读 variant.quota 与已购数，在 after 段渲染限购提示条；
 *  - 把 canPurchase / remaining 写入内核 state，宿主加购按钮读它决定是否禁用。
 *
 * 「剩余可购 = max(0, 限购 - 已购)」与 QuantityPlugin 共用同一实现（limits.ts），
 * 避免出现「限购 2、已购 1，还能再加 2 件」的规则漏洞（P1-3）。
 *
 * canPurchase 在事件钩子（onMount / onSkuChange）里写入，不在渲染期 setState，
 * 避免渲染期修改状态导致的循环告警。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface QuotaConfig {
  /** 当前用户已购件数，默认 0 */
  purchasedCount?: number;
  /** 超出限购时回调 */
  onExceed?: () => void;
}

/** 解析限购状态（纯逻辑，便于单测与宿主复用） */
export function resolveQuota(
  variant: { quota?: number } | null | undefined,
  purchasedCount = 0
): { quota: number | undefined; remaining: number; canPurchase: boolean } {
  const quota = variant?.quota;
  const remaining = remainingQuota(quota, purchasedCount);
  return { quota, remaining, canPurchase: remaining > 0 };
}

export function createQuotaPlugin(config: QuotaConfig = {}): SkuPlugin {
  const purchased = config.purchasedCount ?? 0;

  const resolve = (context: SkuPluginContext) =>
    resolveQuota(context.variant, purchased);

  const push = (context: SkuPluginContext) => {
    const { remaining, canPurchase } = resolve(context);
    context.setState({ canPurchase, remainingQuota: remaining });
    return canPurchase;
  };

  return {
    name: "Quota",
    version: "0.1.0",
    description: "限购校验：渲染限购提示条并暴露 canPurchase / remaining",
    priority: 40,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        push(context);
      },
      onSkuChange: (context: SkuPluginContext) => {
        if (!push(context)) config.onExceed?.();
      },
      renderHeader: (context: SkuPluginContext) => {
        const { quota, remaining, canPurchase } = resolve(context);
        if (typeof quota !== "number") return null;
        return (
          <div
            data-testid="sku-quota"
            data-can-purchase={canPurchase ? "true" : "false"}
            data-remaining={String(remaining)}
            style={{
              marginTop: 6,
              fontSize: 12,
              padding: "4px 8px",
              borderRadius: 4,
              background: canPurchase ? "#f6ffed" : "#fff1f0",
              color: canPurchase ? "#237a06" : "#b32d08",
              border: \`1px solid \${canPurchase ? "#b7eb8f" : "#ffa39e"}\`,
            }}
          >
            每人限购 {quota} 件（已购 {purchased}）
            {canPurchase ? \` · 还可购 \${remaining} 件\` : " · 已达限购上限"}
          </div>
        );
      },
    },
  };
}
`,k0=`import React from "react";
import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * ResetBarPlugin — 清空重选。
 *
 * 选了一半想重来是高频操作；core 支持「再点同值取消」，但逐个取消很烦。
 * 这里给一个整体重置入口，走 context.clearSelection()。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface ResetBarConfig {
  /** 按钮文案，默认 "清空重选" */
  text?: string;
  /** 清空后回调 */
  onReset?: () => void;
}

export function createResetBarPlugin(config: ResetBarConfig = {}): SkuPlugin {
  return {
    name: "ResetBar",
    version: "0.1.0",
    description: "清空重选：一键重置全部规格选择",
    priority: 20,
    config: { slotPosition: "after", order: 40, ...config },
    hooks: {
      renderHeader: (context: SkuPluginContext) => {
        const hasSelection = Object.keys(context.selection ?? {}).length > 0;
        if (!hasSelection) return null;

        return (
          <div style={{ marginTop: 8 }}>
            <button
              type="button"
              data-testid="sku-reset"
              onClick={() => {
                context.clearSelection();
                config.onReset?.();
              }}
              style={{
                padding: "4px 10px",
                fontSize: 12,
                borderRadius: 4,
                border: "1px solid #d0d4da",
                background: "#fff",
                color: "#1f2328",
                cursor: "pointer",
              }}
            >
              {config.text ?? "清空重选"}
            </button>
          </div>
        );
      },
    },
  };
}
`,x0=`import React from "react";
import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * SkuCodePlugin — 货号 / SKU 编码展示。
 *
 * 命中变体后把 SKU 编码显示出来，方便客服对单、用户报修、订单核对。
 * 属于典型的「一行字但每家都要」的长尾需求，做成插件而不是塞进 core。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface SkuCodeConfig {
  /** 前缀文案，默认 "货号" */
  label?: string;
}

export function createSkuCodePlugin(config: SkuCodeConfig = {}): SkuPlugin {
  return {
    name: "SkuCode",
    version: "0.1.0",
    description: "货号展示：命中变体后显示 SKU 编码",
    priority: 15,
    config: { slotPosition: "after", order: 50, ...config },
    hooks: {
      renderHeader: (context: SkuPluginContext) => {
        const v = context.variant;
        if (!v?.sku) return null;
        return (
          <div
            data-testid="sku-code"
            style={{ marginTop: 6, fontSize: 11, color: "#5b6064", fontFamily: "ui-monospace, monospace" }}
          >
            {config.label ?? "货号"}：{v.sku}
          </div>
        );
      },
    },
  };
}
`,w0=`import type {
  SkuPlugin,
  SkuPluginContext,
  SkuSelection,
} from "../../components/SkuPlugin/plugins/types";

/**
 * StatePersistencePlugin — 选择态本地持久化。
 *
 * 用户逛了一圈回来，还停在上次选的规格。写 localStorage（可换 sessionStorage），
 * 挂载时读回；选择清空时把键删掉，不留垃圾。
 *
 * 存储键必须能区分商品/场景（P2-5）：同一页有两个 SKU 面板、或换商品复用时，
 * 单 key 会把 A 商品的选择还原到 B 商品上（并进而触发全灰死锁）。
 * 用 productKey 拼出 \`key:productKey\`；解出的值仍会经内核的 normalizeSelection 校验，
 * 即使残留脏数据也不会写进选择态（P0-1）。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface StatePersistenceConfig {
  /** 存储键，默认 "vane-sku:selection" */
  key?: string;
  /** "local"（默认）或 "session" */
  scope?: "local" | "session";
  /** 商品 / 场景维度（建议必传，如 skuId）：最终键为 \`key:productKey\` */
  productKey?: string | null;
}

function safeStorage(scope: "local" | "session"): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return scope === "session" ? window.sessionStorage : window.localStorage;
  } catch {
    // 隐私模式 / 禁用存储时静默降级
    return null;
  }
}

export function createStatePersistencePlugin(
  config: StatePersistenceConfig = {}
): SkuPlugin {
  const baseKey = config.key ?? "vane-sku:selection";
  const scope = config.scope ?? "local";
  const storageKey =
    config.productKey == null || config.productKey === ""
      ? baseKey
      : \`\${baseKey}:\${config.productKey}\`;

  return {
    name: "StatePersistence",
    version: "0.1.0",
    description: "选择态持久化：记住上次选的规格（localStorage / sessionStorage）",
    priority: 26,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        const store = safeStorage(scope);
        if (!store) return;
        try {
          const raw = store.getItem(storageKey);
          if (!raw) return;
          const parsed = JSON.parse(raw) as SkuSelection;
          if (parsed && typeof parsed === "object" && Object.keys(parsed).length) {
            // 走归一化入口：非法键值被丢弃，不给矩阵留脏值（P0-1）
            context.setSelection(parsed);
          }
        } catch {
          // 脏数据直接忽略，不影响主流程
        }
      },
      onSkuChange: (
        _context: SkuPluginContext,
        selection: SkuSelection
      ) => {
        const store = safeStorage(scope);
        if (!store) return;
        try {
          if (Object.keys(selection).length) store.setItem(storageKey, JSON.stringify(selection));
          else store.removeItem(storageKey);
        } catch {
          // 配额超限时静默失败
        }
      },
    },
  };
}
`,P0=`import React from "react";
import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * StockStatusPlugin — 库存状态。
 *
 * 命中变体后告诉用户「还有没有货」：现货 / 仅剩 N 件 / 缺货。
 * 低库存阈值可配，用来制造紧迫感（电商常见手法）。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface StockStatusConfig {
  /** 低库存预警阈值：库存 ≤ 该值时显示「仅剩 N 件」，默认 5 */
  lowStockThreshold?: number;
  /** 缺货文案，默认 "暂时缺货" */
  soldOutText?: string;
  /** 是否展示具体库存数字，默认 true */
  showCount?: boolean;
}

export function createStockStatusPlugin(
  config: StockStatusConfig = {}
): SkuPlugin {
  const threshold = config.lowStockThreshold ?? 5;
  const soldOutText = config.soldOutText ?? "暂时缺货";
  const showCount = config.showCount ?? true;

  return {
    name: "StockStatus",
    version: "0.1.0",
    description: "库存状态：现货 / 仅剩 N 件 / 缺货",
    priority: 42,
    config: { slotPosition: "after", order: 10, ...config },
    hooks: {
      renderHeader: (context: SkuPluginContext) => {
        const v = context.variant;
        if (!v) return null;
        const stock = v.stock;
        if (typeof stock !== "number") return null;

        const soldOut = stock === 0;
        const low = !soldOut && stock <= threshold;
        const color = soldOut ? "#b32d08" : low ? "#a54a00" : "#237a06";
        const bg = soldOut ? "#fff1f0" : low ? "#fff7e6" : "#f6ffed";
        const border = soldOut ? "#ffa39e" : low ? "#ffd591" : "#b7eb8f";

        const text = soldOut
          ? soldOutText
          : low
            ? showCount
              ? \`仅剩 \${stock} 件\`
              : "库存紧张"
            : showCount
              ? \`现货 · 库存 \${stock}\`
              : "现货";

        return (
          <div
            data-testid="sku-stock"
            data-stock={String(stock)}
            data-sold-out={soldOut ? "true" : "false"}
            style={{
              marginTop: 6,
              fontSize: 12,
              padding: "4px 8px",
              borderRadius: 4,
              background: bg,
              color,
              border: \`1px solid \${border}\`,
            }}
          >
            {text}
          </div>
        );
      },
    },
  };
}
`,C0=`import type {
  SkuPlugin,
  SkuPluginContext,
  SkuSelection,
} from "../../components/SkuPlugin/plugins/types";

/**
 * UrlSyncPlugin — 选择同步到 URL。
 *
 * 「把这个链接发给客服，他看到的就是我选的规格」——把选择写进查询串。
 * 挂载时反向解析回选择，刷新/分享都能还原；并监听 popstate，
 * 浏览器前进/后退后 UI 与 URL 保持一致。
 *
 * 查询键用前缀（默认 sku_）避免和页面其它参数打架：
 *   ?sku_颜色=red&sku_尺码=s
 *
 * URL 是外部输入：解析结果交给内核侧的 normalizeSelection 做白名单校验
 * （属性名 / optionId 不存在时丢弃），脏链接不会把矩阵拖死（P0-1 / P2-5）。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface UrlSyncConfig {
  /** 查询参数前缀，默认 "sku_" */
  paramPrefix?: string;
  /** true=replaceState（不污染前进后退），false=pushState */
  useReplace?: boolean;
}

export function createUrlSyncPlugin(config: UrlSyncConfig = {}): SkuPlugin {
  const prefix = config.paramPrefix ?? "sku_";
  const useReplace = config.useReplace ?? true;

  const readSelection = (): SkuSelection => {
    if (typeof window === "undefined") return {};
    const q = new URLSearchParams(window.location.search);
    const sel: SkuSelection = {};
    for (const [k, v] of q.entries()) {
      if (k.startsWith(prefix) && v) sel[k.slice(prefix.length)] = v;
    }
    return sel;
  };

  const writeSelection = (selection: SkuSelection) => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams(window.location.search);
    for (const k of Array.from(q.keys())) {
      if (k.startsWith(prefix)) q.delete(k);
    }
    for (const [k, v] of Object.entries(selection)) q.set(prefix + k, v);
    const search = q.toString();
    const url = \`\${window.location.pathname}\${search ? \`?\${search}\` : ""}\${window.location.hash}\`;
    if (useReplace) window.history.replaceState(null, "", url);
    else window.history.pushState(null, "", url);
  };

  return {
    name: "UrlSync",
    version: "0.1.0",
    description: "URL 同步：把规格选择写进查询串，并可从 URL 还原（含 popstate）",
    priority: 28,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        const initial = readSelection();
        if (Object.keys(initial).length) context.setSelection(initial);

        if (typeof window === "undefined") return;
        // 前进/后退后 URL 变了，组件也要跟着还原（P2-5）
        const onPopState = () => {
          context.setSelection(readSelection());
        };
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
      },
      onSkuChange: (
        _context: SkuPluginContext,
        selection: SkuSelection
      ) => {
        writeSelection(selection);
      },
    },
  };
}
`,Q0={price:"价格与库存",info:"信息与联动",interaction:"选择与交互"},Su=["price","info","interaction"],ku=Object.assign({"/src/custom-plugins/AnalyticsPlugin/doc.json":nf,"/src/custom-plugins/ImageLinkPlugin/doc.json":rf,"/src/custom-plugins/KeyboardNavPlugin/doc.json":of,"/src/custom-plugins/PriceLinkPlugin/doc.json":tf,"/src/custom-plugins/PriceRangePlugin/doc.json":ef,"/src/custom-plugins/QuantityPlugin/doc.json":lf,"/src/custom-plugins/QuotaPlugin/doc.json":sf,"/src/custom-plugins/ResetBarPlugin/doc.json":af,"/src/custom-plugins/SkuCodePlugin/doc.json":uf,"/src/custom-plugins/StatePersistencePlugin/doc.json":cf,"/src/custom-plugins/StockStatusPlugin/doc.json":df,"/src/custom-plugins/UrlSyncPlugin/doc.json":ff}),xu=Object.assign({"/src/custom-plugins/AnalyticsPlugin/create.tsx":p0,"/src/custom-plugins/ImageLinkPlugin/create.tsx":g0,"/src/custom-plugins/KeyboardNavPlugin/create.tsx":m0,"/src/custom-plugins/PriceLinkPlugin/create.tsx":h0,"/src/custom-plugins/PriceRangePlugin/create.tsx":y0,"/src/custom-plugins/QuantityPlugin/create.tsx":v0,"/src/custom-plugins/QuotaPlugin/create.tsx":S0,"/src/custom-plugins/ResetBarPlugin/create.tsx":k0,"/src/custom-plugins/SkuCodePlugin/create.tsx":x0,"/src/custom-plugins/StatePersistencePlugin/create.tsx":w0,"/src/custom-plugins/StockStatusPlugin/create.tsx":P0,"/src/custom-plugins/UrlSyncPlugin/create.tsx":C0}),mf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function _0(e){const t=Object.keys(xu).find(o=>mf(o)===e),n=t?xu[t]:"",r=/priority:\s*(\d+)/.exec(n);return r?Number(r[1]):0}function R0(e){const t=Object.keys(ku).find(n=>mf(n)===e);return t?ku[t]:{name:e,description:"（缺少 doc.json）"}}const E0=[{dir:"PriceLinkPlugin",group:"price",make:()=>Or({discountText:"限时8折"})},{dir:"PriceRangePlugin",group:"price",make:()=>Tr()},{dir:"StockStatusPlugin",group:"price",make:()=>ui({lowStockThreshold:5})},{dir:"QuotaPlugin",group:"price",make:()=>li({purchasedCount:1})},{dir:"QuantityPlugin",group:"price",make:()=>ii()},{dir:"ImageLinkPlugin",group:"info",make:()=>ri({onImageChange:e=>console.log("[sku] 主图 →",e)})},{dir:"SkuCodePlugin",group:"info",make:()=>ai()},{dir:"AnalyticsPlugin",group:"info",make:()=>Us({onEvent:e=>console.log("[sku] 埋点",e.name)})},{dir:"ResetBarPlugin",group:"interaction",make:()=>si()},{dir:"KeyboardNavPlugin",group:"interaction",make:()=>oi()},{dir:"StatePersistencePlugin",group:"interaction",make:()=>Bs({key:"vane-sku:demo"})},{dir:"UrlSyncPlugin",group:"interaction",make:()=>Vs()}],Do=E0.map(e=>{const t=R0(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:_0(e.dir),summary:t.description,doc:t,make:e.make}}).sort((e,t)=>Su.indexOf(e.group)-Su.indexOf(t.group)||t.priority-e.priority),K0=Do.map(e=>e.dir),b0=/\{\{\s*([\w-]+)\s*\}\}/g;function wu(e,t){return e.replace(b0,(n,r)=>r in t?String(t[r]):n)}function j0(e){return e.replace(/^create/,"")}function N0(e,t){const r=['import { createSkuSelector } from "vane-sku";',...e.plugs.map(s=>s.fn).sort().map(s=>`import { ${s} } from "vane-sku/custom-plugins/${j0(s)}";`),"",'import type { SkuAttribute, SkuVariant } from "vane-sku";'].join(`
`),o=e.plugs.map(s=>`  ${s.fn}(${s.cfg?`{ ${wu(s.cfg,t)} }`:""}),`).join(`
`),i=e.props.filter(s=>typeof s=="string"||!s.when||s.when(t)).map(s=>`      ${wu(typeof s=="string"?s:s.text,t)}`).join(`
`),l=e.plugs.length?`const Sku = createSkuSelector([
${o}
]);`:`// 这一页只用 Core：组合矩阵 + 禁用推导 + 选中摘要，不需要任何插件
const Sku = createSkuSelector([]);`;return`// ${e.title} · 最小装配（照抄即可跑）
${r}

${l}

export default function Demo({ attributes, variants }: { attributes: SkuAttribute[]; variants: SkuVariant[] }) {
  return (
    <Sku
      attributes={attributes}
      variants={variants}
${i}
    </Sku>
  );
}
`}function $0({entry:e,order:t}){var v;const{meta:n,Stage:r,file:o,source:i}=e,[l,s]=k.useState(()=>mu(n)),[a,u]=k.useState([]),[d,p]=k.useState("minimal"),m=k.useCallback((x,g="event")=>{const f=new Date().toLocaleTimeString("zh-CN",{hour12:!1});u(h=>[{id:h.length+1,at:f,text:x,kind:g},...h].slice(0,60))},[]),y=k.useCallback((x,g)=>{s(f=>({...f,[x]:g}))},[]),S=k.useMemo(()=>N0(n,l),[n,l]);return c.jsxs("section",{className:"demo","data-demo":n.slug,children:[c.jsxs("header",{className:"demo-head",children:[c.jsxs("div",{className:"demo-folio",children:[c.jsx("span",{className:"demo-no",children:String(t).padStart(2,"0")}),c.jsx("em",{children:"plate"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"demo-title-row",children:[c.jsx("h2",{children:n.title}),c.jsx("span",{className:"demo-group",children:zl[n.group].label}),n.plugin?c.jsx("code",{className:"demo-plugin",children:n.plugin}):null]}),c.jsx("p",{className:"demo-intro",children:n.intro}),c.jsxs("p",{className:"demo-why",children:[c.jsx("b",{children:"什么时候用"}),n.why]})]}),c.jsxs("div",{className:"demo-meta",children:[c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"file"}),c.jsx("b",{children:o})]}),c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"group"}),c.jsx("b",{children:zl[n.group].label})]}),c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"plugs"}),c.jsx("b",{children:n.plugs.length?`${n.plugs.length} installed`:"core only"})]})]})]}),(v=n.controls)!=null&&v.length?c.jsxs("div",{className:"demo-controls",children:[c.jsx(pk,{controls:n.controls,cfg:l,onChange:y}),c.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{s(mu(n)),u([])},children:"重置"})]}):null,c.jsxs("div",{className:"demo-body",children:[c.jsxs("figure",{className:"plate",children:[c.jsxs("figcaption",{className:"plate-cap",children:[c.jsx("b",{children:"stage"}),c.jsxs("span",{children:[n.tone==="light"?"light surface":"live render",n.stageHeight?` · ${n.stageHeight}px`:""]}),c.jsx("em",{children:"live"})]}),c.jsx("div",{className:"plate-ruler","aria-hidden":!0}),c.jsx("div",{className:`plate-body demo-stage${n.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${n.stageHeight??380}px`},children:c.jsx(r,{cfg:l,log:m,setCfg:y})})]}),c.jsxs("aside",{className:"demo-side",children:[c.jsx("div",{className:"demo-plugs",children:n.plugs.length===0?c.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):n.plugs.map(x=>c.jsx("span",{className:`demo-plug${x.local?" is-local":""}`,children:x.fn.replace(/^create|Plugin$/g,"")},x.fn))}),c.jsx("ul",{className:"demo-why-list",children:n.plugs.map(x=>c.jsxs("li",{children:[c.jsx("code",{children:x.fn}),c.jsx("span",{children:x.why})]},x.fn))}),n.note?c.jsxs("p",{className:"demo-note",children:["⚠ ",n.note]}):null,c.jsx(gk,{lines:a,empty:n.plugs.length>0?"还没触发 —— 拖上面的控件，或点一下规格试试":"这一页没有事件类行为，日志留白"})]})]}),c.jsxs("div",{className:"demo-code",children:[c.jsxs("div",{className:"demo-switch",role:"tablist",children:[c.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>p("minimal"),children:"最小装配"}),c.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>p("full"),children:"完整源码"})]}),c.jsx(i0,{code:d==="minimal"?S:i,title:d==="minimal"?`${n.slug}.minimal.tsx`:o,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]}),c.jsx(f0,{source:i,plugins:Do})]})}const T0=k.lazy(()=>zs(()=>import("./HomePage-Ciac5-vU.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),O0=k.lazy(()=>zs(()=>import("./PluginsPage-BGSInO2s.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),L0=k.lazy(()=>zs(()=>import("./ScenariosPage-D42I9rZZ.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),M0={pkg:"vane-sku",brand:"S",subtitle:"规格选择 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Do.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"4 plates"}],routes:[{path:"/",element:c.jsx(T0,{})},{path:"/plugins",element:c.jsx(O0,{})},{path:"/scenarios",element:c.jsx(L0,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:e0.map(e=>({key:e,label:zl[e].label})),entries:Dl,detail:(e,t)=>c.jsx($0,{entry:e,order:t})},footer:[`${Do.length} PLUGINS · 4 PLATES`,`${Dl.length} DEMOS · MATRIX CORE`]};function A0(){return c.jsx(eh,{config:M0})}function I0(e){const t=[];if(!e)return{problems:["体检根节点不存在"],checked:0};const n=Array.from(e.querySelectorAll('[data-testid^="sku-opt-"]'));let r=0;const o=e.getBoundingClientRect();if(!(o.width!==0||o.height!==0||n.some(s=>{const a=s.getBoundingClientRect();return a.width!==0||a.height!==0})))return{problems:[],checked:0};for(const s of n){r+=1;const a=s.getBoundingClientRect();if(a.width===0||a.height===0){t.push(`零尺寸元素：${s.dataset.testid}（${a.width}×${a.height}）`);continue}const u=a.left-o.left,d=a.top-o.top;(u<-.5||d<-.5)&&t.push(`负坐标：${s.dataset.testid}（left=${u.toFixed(1)}, top=${d.toFixed(1)}）`),(a.right-o.right>1||a.bottom-o.bottom>1)&&t.push(`越界：${s.dataset.testid}（超出宿主右/下边界 ${(a.right-o.right).toFixed(1)}/${(a.bottom-o.bottom).toFixed(1)}px）`)}for(let s=0;s<n.length;s+=1)for(let a=s+1;a<n.length;a+=1){const u=n[s].getBoundingClientRect(),d=n[a].getBoundingClientRect();u.left<d.right-1&&d.left<u.right-1&&u.top<d.bottom-1&&d.top<u.bottom-1&&t.push(`元素重叠：${n[s].dataset.testid} 与 ${n[a].dataset.testid}`)}const l=n.reduce((s,a)=>Math.max(s,a.getBoundingClientRect().bottom-o.top),0);return n.length&&e.scrollHeight+1<l&&t.push(`容器未撑开：scrollHeight=${e.scrollHeight} 小于内容底边 ${l.toFixed(1)}`),{problems:Array.from(new Set(t)),checked:r}}const nn={name:"颜色",options:[{id:"red",label:"红"},{id:"blue",label:"蓝"}]},rn={name:"尺码",options:[{id:"s",label:"S"},{id:"m",label:"M"},{id:"l",label:"L"}]},on=[{sku:"red-s",attrValues:{颜色:"red",尺码:"s"},price:199,originalPrice:299,stock:5,quota:2,image:"https://example.com/red-s.jpg"},{sku:"red-m",attrValues:{颜色:"red",尺码:"m"},price:219,stock:3},{sku:"blue-s",attrValues:{颜色:"blue",尺码:"s"},price:209,stock:8},{sku:"blue-m",attrValues:{颜色:"blue",尺码:"m"},price:229,stock:6}],D0=K([]),z0=K([Or({discountText:"限时8折"})]),U0=K([li({purchasedCount:2})]),zo=()=>new Promise(e=>setTimeout(e,0));async function ln(e){const t=document.createElement("div");t.style.cssText="position:fixed;left:0;top:0;width:520px;background:#fff",document.body.appendChild(t);const n=Md(t);return rt.flushSync(()=>n.render(e)),await zo(),{host:t,root:n,q:r=>t.querySelector(r),click:async r=>{const o=t.querySelector(r);if(!o)throw new Error(`找不到元素 ${r}`);rt.flushSync(()=>o.click()),await zo()}}}async function B0(){var r,o,i,l,s,a,u,d,p,m,y,S;const e=[];let t=0;const n=(v,x)=>{t+=1,document.title=`SELFTEST RUNNING ${t}`,x||e.push(v)};{const v=await ln(c.jsx(D0,{attributes:[nn,rn],variants:on})),x=v.q('[data-testid="sku-opt-尺码-l"]');n("禁用推导：无变体的尺码 L 初始即置灰",!!x&&x.disabled===!0),n("禁用推导：有变体的尺码 S 可选",((r=v.q('[data-testid="sku-opt-尺码-s"]'))==null?void 0:r.disabled)===!1),await v.click('[data-testid="sku-opt-颜色-blue"]'),n("禁用推导：选蓝后 L 仍置灰（blue-l 不存在）",((o=v.q('[data-testid="sku-opt-尺码-l"]'))==null?void 0:o.disabled)===!0),await v.click('[data-testid="sku-opt-尺码-s"]'),n("选择生效：蓝+S 命中变体 blue-s",((l=(i=v.q('[data-testid="sku-summary-variant"]'))==null?void 0:i.textContent)==null?void 0:l.includes("blue-s"))===!0),n("几何体检：无越界/负坐标/零尺寸/重叠",I0(v.host).problems.length===0),rt.flushSync(()=>v.root.unmount()),v.host.remove()}{const v=await ln(c.jsx(z0,{attributes:[nn,rn],variants:on,defaultSelection:{颜色:"red",尺码:"s"}}));n("价格联动：渲染价格区",!!v.q('[data-testid="sku-price"]')),n("价格联动：显示变体价 199",((a=(s=v.q('[data-testid="sku-price"]'))==null?void 0:s.textContent)==null?void 0:a.includes("199"))===!0),n("价格联动：原价删除线 299",((d=(u=v.q('[data-testid="sku-price-original"]'))==null?void 0:u.textContent)==null?void 0:d.includes("299"))===!0),rt.flushSync(()=>v.root.unmount()),v.host.remove()}{const v=await ln(c.jsx(U0,{attributes:[nn,rn],variants:on,defaultSelection:{颜色:"red",尺码:"s"}}));n("限购校验：渲染限购条",!!v.q('[data-testid="sku-quota"]')),n("限购校验：已购 2 / 限购 2 → canPurchase=false",((p=v.q('[data-testid="sku-quota"]'))==null?void 0:p.getAttribute("data-can-purchase"))==="false"),rt.flushSync(()=>v.root.unmount()),v.host.remove()}{let v="";const x=K([ri({onImageChange:f=>v=f})]),g=await ln(c.jsx(x,{attributes:[nn,rn],variants:on,defaultSelection:{颜色:"red",尺码:"s"}}));n("切主图：命中带图变体时回调 onImageChange",v==="https://example.com/red-s.jpg"),n("切主图：自身不渲染 UI（无价格区）",g.q('[data-testid="sku-price"]')===null),rt.flushSync(()=>g.root.unmount()),g.host.remove()}{const v=K([Tr(),ui({lowStockThreshold:5}),ii(),ai(),si()]),x=await ln(c.jsx(v,{attributes:[nn,rn],variants:on})),g=x.q('[data-testid="sku-price-range"]');n("价格区间：未选全时展示区间",!!g),n("价格区间：含最低价 199 与最高价 229",!!g&&g.textContent.includes("199")&&g.textContent.includes("229")),await x.click('[data-testid="sku-opt-颜色-red"]'),await x.click('[data-testid="sku-opt-尺码-s"]');const f=x.q('[data-testid="sku-stock"]');n("库存状态：命中变体后渲染",!!f),n("库存状态：库存 5 命中低库存阈值",(f==null?void 0:f.getAttribute("data-stock"))==="5");const h=x.q('[data-testid="sku-quantity"]');n("数量步进：上限取 min(库存5, 限购2)=2",(h==null?void 0:h.getAttribute("data-max"))==="2"),n("货号：显示命中变体编码",((y=(m=x.q('[data-testid="sku-code"]'))==null?void 0:m.textContent)==null?void 0:y.includes("red-s"))===!0),n("清空重选：有选择时出现",!!x.q('[data-testid="sku-reset"]')),await x.click('[data-testid="sku-reset"]'),n("清空重选：点击后取消该属性选择",((S=x.q('[data-testid="sku-opt-颜色-red"]'))==null?void 0:S.dataset.selected)==="false"),rt.flushSync(()=>x.root.unmount()),x.host.remove()}{const v=K([oi()]),x=await ln(c.jsx(v,{attributes:[nn,rn],variants:on}));x.q('[data-testid="sku-opt-颜色-red"]').dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowRight",bubbles:!0})),await zo();const f=x.q('[data-testid="sku-opt-颜色-blue"]');n("键盘漫游：→ 键移动焦点到同属性下一个选项",document.activeElement===f),n("键盘漫游：移动焦点不等于选中",(f==null?void 0:f.dataset.selected)==="false"),f==null||f.click(),await zo(),n("键盘漫游：点击（Enter/Space 原生行为）才选中",(f==null?void 0:f.dataset.selected)==="true"),rt.flushSync(()=>x.root.unmount()),x.host.remove()}return{total:t,passed:t-e.length,failed:e}}async function V0(){document.title="SELFTEST RUNNING";try{const e=await B0();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Ui.createRoot(document.getElementById("root")).render(c.jsx(A0,{}));typeof location<"u"&&location.search.includes("selftest=1")&&V0();export{se as A,i0 as C,Dl as D,Su as G,Il as L,Do as P,Er as R,oe as V,Tr as a,Or as b,K as c,ui as d,li as e,ii as f,ai as g,si as h,oi as i,c as j,ri as k,K0 as l,Q0 as m,I0 as n,Vs as o,Bs as p,k as r};
