const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-CdNxIFWf.js","./catalog-DyIH32NL.js","./ScenariosPage-BJyqo9Qq.js"])))=>i.map(i=>d[i]);
var pm=Object.defineProperty;var fm=(e,n,t)=>n in e?pm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Bs=(e,n,t)=>fm(e,typeof n!="symbol"?n+"":n,t);function gm(e,n){for(var t=0;t<n.length;t++){const o=n[t];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(o,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function hm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Su={exports:{}},br={},ku={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),ym=Symbol.for("react.portal"),vm=Symbol.for("react.fragment"),Cm=Symbol.for("react.strict_mode"),xm=Symbol.for("react.profiler"),Sm=Symbol.for("react.provider"),km=Symbol.for("react.context"),Pm=Symbol.for("react.forward_ref"),wm=Symbol.for("react.suspense"),_m=Symbol.for("react.memo"),Rm=Symbol.for("react.lazy"),Ws=Symbol.iterator;function jm(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var Pu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wu=Object.assign,_u={};function Rt(e,n,t){this.props=e,this.context=n,this.refs=_u,this.updater=t||Pu}Rt.prototype.isReactComponent={};Rt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Rt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ru(){}Ru.prototype=Rt.prototype;function bl(e,n,t){this.props=e,this.context=n,this.refs=_u,this.updater=t||Pu}var Tl=bl.prototype=new Ru;Tl.constructor=bl;wu(Tl,Rt.prototype);Tl.isPureReactComponent=!0;var Hs=Array.isArray,ju=Object.prototype.hasOwnProperty,Nl={current:null},Eu={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,n,t){var o,r={},i=null,l=null;if(n!=null)for(o in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)ju.call(n,o)&&!Eu.hasOwnProperty(o)&&(r[o]=n[o]);var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)r[o]===void 0&&(r[o]=s[o]);return{$$typeof:So,type:e,key:i,ref:l,props:r,_owner:Nl.current}}function Em(e,n){return{$$typeof:So,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function $l(e){return typeof e=="object"&&e!==null&&e.$$typeof===So}function bm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Vs=/\/+/g;function Zr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?bm(""+e.key):n.toString(36)}function Qo(e,n,t,o,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case So:case ym:l=!0}}if(l)return l=e,r=r(l),e=o===""?"."+Zr(l,0):o,Hs(r)?(t="",e!=null&&(t=e.replace(Vs,"$&/")+"/"),Qo(r,n,t,"",function(u){return u})):r!=null&&($l(r)&&(r=Em(r,t+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Vs,"$&/")+"/")+e)),n.push(r)),1;if(l=0,o=o===""?".":o+":",Hs(e))for(var s=0;s<e.length;s++){i=e[s];var a=o+Zr(i,s);l+=Qo(i,n,t,a,r)}else if(a=jm(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=o+Zr(i,s++),l+=Qo(i,n,t,a,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Eo(e,n,t){if(e==null)return e;var o=[],r=0;return Qo(e,o,"","",function(i){return n.call(t,i,r++)}),o}function Tm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Yo={transition:null},Nm={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:Nl};function Tu(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Eo,forEach:function(e,n,t){Eo(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Eo(e,function(){n++}),n},toArray:function(e){return Eo(e,function(n){return n})||[]},only:function(e){if(!$l(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Rt;M.Fragment=vm;M.Profiler=xm;M.PureComponent=bl;M.StrictMode=Cm;M.Suspense=wm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nm;M.act=Tu;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=wu({},e.props),r=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Nl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)ju.call(n,a)&&!Eu.hasOwnProperty(a)&&(o[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:So,type:e.type,key:r,ref:i,props:o,_owner:l}};M.createContext=function(e){return e={$$typeof:km,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sm,_context:e},e.Consumer=e};M.createElement=bu;M.createFactory=function(e){var n=bu.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Pm,render:e}};M.isValidElement=$l;M.lazy=function(e){return{$$typeof:Rm,_payload:{_status:-1,_result:e},_init:Tm}};M.memo=function(e,n){return{$$typeof:_m,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=Yo.transition;Yo.transition={};try{e()}finally{Yo.transition=n}};M.unstable_act=Tu;M.useCallback=function(e,n){return ge.current.useCallback(e,n)};M.useContext=function(e){return ge.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};M.useEffect=function(e,n){return ge.current.useEffect(e,n)};M.useId=function(){return ge.current.useId()};M.useImperativeHandle=function(e,n,t){return ge.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return ge.current.useMemo(e,n)};M.useReducer=function(e,n,t){return ge.current.useReducer(e,n,t)};M.useRef=function(e){return ge.current.useRef(e)};M.useState=function(e){return ge.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return ge.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return ge.current.useTransition()};M.version="18.3.1";ku.exports=M;var y=ku.exports;const Qe=hm(y),$m=gm({__proto__:null,default:Qe},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm=y,Lm=Symbol.for("react.element"),Dm=Symbol.for("react.fragment"),Om=Object.prototype.hasOwnProperty,zm=Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Im={key:!0,ref:!0,__self:!0,__source:!0};function Nu(e,n,t){var o,r={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(o in n)Om.call(n,o)&&!Im.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)r[o]===void 0&&(r[o]=n[o]);return{$$typeof:Lm,type:e,key:i,ref:l,props:r,_owner:zm.current}}br.Fragment=Dm;br.jsx=Nu;br.jsxs=Nu;Su.exports=br;var c=Su.exports,Ei={},$u={exports:{}},je={},Mu={exports:{}},Lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,T){var N=E.length;E.push(T);e:for(;0<N;){var K=N-1>>>1,oe=E[K];if(0<r(oe,T))E[K]=T,E[N]=oe,N=K;else break e}}function t(E){return E.length===0?null:E[0]}function o(E){if(E.length===0)return null;var T=E[0],N=E.pop();if(N!==T){E[0]=N;e:for(var K=0,oe=E.length,Ro=oe>>>1;K<Ro;){var Mn=2*(K+1)-1,Jr=E[Mn],Ln=Mn+1,jo=E[Ln];if(0>r(Jr,N))Ln<oe&&0>r(jo,Jr)?(E[K]=jo,E[Ln]=N,K=Ln):(E[K]=Jr,E[Mn]=N,K=Mn);else if(Ln<oe&&0>r(jo,N))E[K]=jo,E[Ln]=N,K=Ln;else break e}}return T}function r(E,T){var N=E.sortIndex-T.sortIndex;return N!==0?N:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,m=null,f=3,v=!1,x=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var T=t(u);T!==null;){if(T.callback===null)o(u);else if(T.startTime<=E)o(u),T.sortIndex=T.expirationTime,n(a,T);else break;T=t(u)}}function C(E){if(S=!1,h(E),!x)if(t(a)!==null)x=!0,qe(k);else{var T=t(u);T!==null&&Xr(C,T.startTime-E)}}function k(E,T){x=!1,S&&(S=!1,g(b),b=-1),v=!0;var N=f;try{for(h(T),m=t(a);m!==null&&(!(m.expirationTime>T)||E&&!ke());){var K=m.callback;if(typeof K=="function"){m.callback=null,f=m.priorityLevel;var oe=K(m.expirationTime<=T);T=e.unstable_now(),typeof oe=="function"?m.callback=oe:m===t(a)&&o(a),h(T)}else o(a);m=t(a)}if(m!==null)var Ro=!0;else{var Mn=t(u);Mn!==null&&Xr(C,Mn.startTime-T),Ro=!1}return Ro}finally{m=null,f=N,v=!1}}var _=!1,R=null,b=-1,A=5,$=-1;function ke(){return!(e.unstable_now()-$<A)}function te(){if(R!==null){var E=e.unstable_now();$=E;var T=!0;try{T=R(!0,E)}finally{T?Y():(_=!1,R=null)}}else _=!1}var Y;if(typeof p=="function")Y=function(){p(te)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,$t=We.port2;We.port1.onmessage=te,Y=function(){$t.postMessage(null)}}else Y=function(){P(te,0)};function qe(E){R=E,_||(_=!0,Y())}function Xr(E,T){b=P(function(){E(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,qe(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(E){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var N=f;f=T;try{return E()}finally{f=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var N=f;f=E;try{return T()}finally{f=N}},e.unstable_scheduleCallback=function(E,T,N){var K=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?K+N:K):N=K,E){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=N+oe,E={id:d++,callback:T,priorityLevel:E,startTime:N,expirationTime:oe,sortIndex:-1},N>K?(E.sortIndex=N,n(u,E),t(a)===null&&E===t(u)&&(S?(g(b),b=-1):S=!0,Xr(C,N-K))):(E.sortIndex=oe,n(a,E),x||v||(x=!0,qe(k))),E},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(E){var T=f;return function(){var N=f;f=T;try{return E.apply(this,arguments)}finally{f=N}}}})(Lu);Mu.exports=Lu;var Fm=Mu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am=y,Re=Fm;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Du=new Set,no={};function Gn(e,n){vt(e,n),vt(e+"Capture",n)}function vt(e,n){for(no[e]=n,e=0;e<n.length;e++)Du.add(n[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bi=Object.prototype.hasOwnProperty,Um=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qs={},Ys={};function Bm(e){return bi.call(Ys,e)?!0:bi.call(Qs,e)?!1:Um.test(e)?Ys[e]=!0:(Qs[e]=!0,!1)}function Wm(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hm(e,n,t,o){if(n===null||typeof n>"u"||Wm(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function he(e,n,t,o,r,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new he(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ml=/[\-:]([a-z])/g;function Ll(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ml,Ll);ae[n]=new he(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ml,Ll);ae[n]=new he(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ml,Ll);ae[n]=new he(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dl(e,n,t,o){var r=ae.hasOwnProperty(n)?ae[n]:null;(r!==null?r.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Hm(n,t,r,o)&&(t=null),o||r===null?Bm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,o=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var sn=Am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),et=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),Ol=Symbol.for("react.strict_mode"),Ti=Symbol.for("react.profiler"),Ou=Symbol.for("react.provider"),zu=Symbol.for("react.context"),zl=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),$i=Symbol.for("react.suspense_list"),Il=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),Iu=Symbol.for("react.offscreen"),Ks=Symbol.iterator;function Mt(e){return e===null||typeof e!="object"?null:(e=Ks&&e[Ks]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,ei;function Ut(e){if(ei===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ei=n&&n[1]||""}return`
`+ei+e}var ni=!1;function ti(e,n){if(!e||ni)return"";ni=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var o=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){o=u}e.call(n.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),i=o.stack.split(`
`),l=r.length-1,s=i.length-1;1<=l&&0<=s&&r[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(r[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||r[l]!==i[s]){var a=`
`+r[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{ni=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ut(e):""}function Vm(e){switch(e.tag){case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 2:case 15:return e=ti(e.type,!1),e;case 11:return e=ti(e.type.render,!1),e;case 1:return e=ti(e.type,!0),e;default:return""}}function Mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nt:return"Fragment";case et:return"Portal";case Ti:return"Profiler";case Ol:return"StrictMode";case Ni:return"Suspense";case $i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zu:return(e.displayName||"Context")+".Consumer";case Ou:return(e._context.displayName||"Context")+".Provider";case zl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Il:return n=e.displayName||null,n!==null?n:Mi(e.type)||"Memo";case dn:n=e._payload,e=e._init;try{return Mi(e(n))}catch{}}return null}function Qm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mi(n);case 8:return n===Ol?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ym(e){var n=Fu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function To(e){e._valueTracker||(e._valueTracker=Ym(e))}function Au(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=Fu(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Li(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Gs(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=jn(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Uu(e,n){n=n.checked,n!=null&&Dl(e,"checked",n,!1)}function Di(e,n){Uu(e,n);var t=jn(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Oi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Oi(e,n.type,jn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function qs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Oi(e,n,t){(n!=="number"||rr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Bt=Array.isArray;function mt(e,n,t,o){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&o&&(e[t].defaultSelected=!0)}else{for(t=""+jn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function zi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(w(92));if(Bt(t)){if(1<t.length)throw Error(w(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:jn(t)}}function Bu(e,n){var t=jn(n.value),o=jn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function Js(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Wu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ii(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Wu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var No,Hu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=No.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function to(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Km=["Webkit","ms","Moz","O"];Object.keys(Qt).forEach(function(e){Km.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Qt[n]=Qt[e]})});function Vu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Qt.hasOwnProperty(e)&&Qt[e]?(""+n).trim():n+"px"}function Qu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,r=Vu(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,r):e[t]=r}}var Gm=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fi(e,n){if(n){if(Gm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function Ai(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,pt=null,ft=null;function Zs(e){if(e=wo(e)){if(typeof Bi!="function")throw Error(w(280));var n=e.stateNode;n&&(n=Lr(n),Bi(e.stateNode,e.type,n))}}function Yu(e){pt?ft?ft.push(e):ft=[e]:pt=e}function Ku(){if(pt){var e=pt,n=ft;if(ft=pt=null,Zs(e),n)for(e=0;e<n.length;e++)Zs(n[e])}}function Gu(e,n){return e(n)}function qu(){}var oi=!1;function Xu(e,n,t){if(oi)return e(n,t);oi=!0;try{return Gu(e,n,t)}finally{oi=!1,(pt!==null||ft!==null)&&(qu(),Ku())}}function oo(e,n){var t=e.stateNode;if(t===null)return null;var o=Lr(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,n,typeof t));return t}var Wi=!1;if(tn)try{var Lt={};Object.defineProperty(Lt,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",Lt,Lt),window.removeEventListener("test",Lt,Lt)}catch{Wi=!1}function qm(e,n,t,o,r,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var Yt=!1,ir=null,lr=!1,Hi=null,Xm={onError:function(e){Yt=!0,ir=e}};function Jm(e,n,t,o,r,i,l,s,a){Yt=!1,ir=null,qm.apply(Xm,arguments)}function Zm(e,n,t,o,r,i,l,s,a){if(Jm.apply(this,arguments),Yt){if(Yt){var u=ir;Yt=!1,ir=null}else throw Error(w(198));lr||(lr=!0,Hi=u)}}function qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ju(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ea(e){if(qn(e)!==e)throw Error(w(188))}function ep(e){var n=e.alternate;if(!n){if(n=qn(e),n===null)throw Error(w(188));return n!==e?null:e}for(var t=e,o=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(o=r.return,o!==null){t=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return ea(r),e;if(i===o)return ea(r),n;i=i.sibling}throw Error(w(188))}if(t.return!==o.return)t=r,o=i;else{for(var l=!1,s=r.child;s;){if(s===t){l=!0,t=r,o=i;break}if(s===o){l=!0,o=r,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,o=r;break}if(s===o){l=!0,o=i,t=r;break}s=s.sibling}if(!l)throw Error(w(189))}}if(t.alternate!==o)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:n}function Zu(e){return e=ep(e),e!==null?ec(e):null}function ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ec(e);if(n!==null)return n;e=e.sibling}return null}var nc=Re.unstable_scheduleCallback,na=Re.unstable_cancelCallback,np=Re.unstable_shouldYield,tp=Re.unstable_requestPaint,G=Re.unstable_now,op=Re.unstable_getCurrentPriorityLevel,Al=Re.unstable_ImmediatePriority,tc=Re.unstable_UserBlockingPriority,sr=Re.unstable_NormalPriority,rp=Re.unstable_LowPriority,oc=Re.unstable_IdlePriority,Tr=null,Ke=null;function ip(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Tr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:ap,lp=Math.log,sp=Math.LN2;function ap(e){return e>>>=0,e===0?32:31-(lp(e)/sp|0)|0}var $o=64,Mo=4194304;function Wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ar(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,r=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~r;s!==0?o=Wt(s):(i&=l,i!==0&&(o=Wt(i)))}else l=t&~r,l!==0?o=Wt(l):i!==0&&(o=Wt(i));if(o===0)return 0;if(n!==0&&n!==o&&!(n&r)&&(r=o&-o,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(o&4&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-Ae(n),r=1<<t,o|=e[t],n&=~r;return o}function up(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cp(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ae(i),s=1<<l,a=r[l];a===-1?(!(s&t)||s&o)&&(r[l]=up(s,n)):a<=n&&(e.expiredLanes|=s),i&=~s}}function Vi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rc(){var e=$o;return $o<<=1,!($o&4194240)&&($o=64),e}function ri(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ko(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ae(n),e[n]=t}function dp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Ae(t),i=1<<r;n[r]=0,o[r]=-1,e[r]=-1,t&=~i}}function Ul(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-Ae(t),r=1<<o;r&n|e[o]&n&&(e[o]|=n),t&=~r}}var D=0;function ic(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lc,Bl,sc,ac,uc,Qi=!1,Lo=[],vn=null,Cn=null,xn=null,ro=new Map,io=new Map,pn=[],mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ta(e,n){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(n.pointerId)}}function Dt(e,n,t,o,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},n!==null&&(n=wo(n),n!==null&&Bl(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function pp(e,n,t,o,r){switch(n){case"focusin":return vn=Dt(vn,e,n,t,o,r),!0;case"dragenter":return Cn=Dt(Cn,e,n,t,o,r),!0;case"mouseover":return xn=Dt(xn,e,n,t,o,r),!0;case"pointerover":var i=r.pointerId;return ro.set(i,Dt(ro.get(i)||null,e,n,t,o,r)),!0;case"gotpointercapture":return i=r.pointerId,io.set(i,Dt(io.get(i)||null,e,n,t,o,r)),!0}return!1}function cc(e){var n=Fn(e.target);if(n!==null){var t=qn(n);if(t!==null){if(n=t.tag,n===13){if(n=Ju(t),n!==null){e.blockedOn=n,uc(e.priority,function(){sc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Yi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Ui=o,t.target.dispatchEvent(o),Ui=null}else return n=wo(t),n!==null&&Bl(n),e.blockedOn=t,!1;n.shift()}return!0}function oa(e,n,t){Ko(e)&&t.delete(n)}function fp(){Qi=!1,vn!==null&&Ko(vn)&&(vn=null),Cn!==null&&Ko(Cn)&&(Cn=null),xn!==null&&Ko(xn)&&(xn=null),ro.forEach(oa),io.forEach(oa)}function Ot(e,n){e.blockedOn===n&&(e.blockedOn=null,Qi||(Qi=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,fp)))}function lo(e){function n(r){return Ot(r,e)}if(0<Lo.length){Ot(Lo[0],e);for(var t=1;t<Lo.length;t++){var o=Lo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(vn!==null&&Ot(vn,e),Cn!==null&&Ot(Cn,e),xn!==null&&Ot(xn,e),ro.forEach(n),io.forEach(n),t=0;t<pn.length;t++)o=pn[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<pn.length&&(t=pn[0],t.blockedOn===null);)cc(t),t.blockedOn===null&&pn.shift()}var gt=sn.ReactCurrentBatchConfig,ur=!0;function gp(e,n,t,o){var r=D,i=gt.transition;gt.transition=null;try{D=1,Wl(e,n,t,o)}finally{D=r,gt.transition=i}}function hp(e,n,t,o){var r=D,i=gt.transition;gt.transition=null;try{D=4,Wl(e,n,t,o)}finally{D=r,gt.transition=i}}function Wl(e,n,t,o){if(ur){var r=Yi(e,n,t,o);if(r===null)fi(e,n,o,cr,t),ta(e,o);else if(pp(r,e,n,t,o))o.stopPropagation();else if(ta(e,o),n&4&&-1<mp.indexOf(e)){for(;r!==null;){var i=wo(r);if(i!==null&&lc(i),i=Yi(e,n,t,o),i===null&&fi(e,n,o,cr,t),i===r)break;r=i}r!==null&&o.stopPropagation()}else fi(e,n,o,null,t)}}var cr=null;function Yi(e,n,t,o){if(cr=null,e=Fl(o),e=Fn(e),e!==null)if(n=qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ju(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return cr=e,null}function dc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(op()){case Al:return 1;case tc:return 4;case sr:case rp:return 16;case oc:return 536870912;default:return 16}default:return 16}}var gn=null,Hl=null,Go=null;function mc(){if(Go)return Go;var e,n=Hl,t=n.length,o,r="value"in gn?gn.value:gn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var l=t-e;for(o=1;o<=l&&n[t-o]===r[i-o];o++);return Go=r.slice(e,1<o?1-o:void 0)}function qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Do(){return!0}function ra(){return!1}function Ee(e){function n(t,o,r,i,l){this._reactName=t,this._targetInst=r,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Do:ra,this.isPropagationStopped=ra,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),n}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Ee(jt),Po=W({},jt,{view:0,detail:0}),yp=Ee(Po),ii,li,zt,Nr=W({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zt&&(zt&&e.type==="mousemove"?(ii=e.screenX-zt.screenX,li=e.screenY-zt.screenY):li=ii=0,zt=e),ii)},movementY:function(e){return"movementY"in e?e.movementY:li}}),ia=Ee(Nr),vp=W({},Nr,{dataTransfer:0}),Cp=Ee(vp),xp=W({},Po,{relatedTarget:0}),si=Ee(xp),Sp=W({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),kp=Ee(Sp),Pp=W({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wp=Ee(Pp),_p=W({},jt,{data:0}),la=Ee(_p),Rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ep={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ep[e])?!!n[e]:!1}function Ql(){return bp}var Tp=W({},Po,{key:function(e){if(e.key){var n=Rp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Np=Ee(Tp),$p=W({},Nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sa=Ee($p),Mp=W({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),Lp=Ee(Mp),Dp=W({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Op=Ee(Dp),zp=W({},Nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ip=Ee(zp),Fp=[9,13,27,32],Yl=tn&&"CompositionEvent"in window,Kt=null;tn&&"documentMode"in document&&(Kt=document.documentMode);var Ap=tn&&"TextEvent"in window&&!Kt,pc=tn&&(!Yl||Kt&&8<Kt&&11>=Kt),aa=" ",ua=!1;function fc(e,n){switch(e){case"keyup":return Fp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tt=!1;function Up(e,n){switch(e){case"compositionend":return gc(n);case"keypress":return n.which!==32?null:(ua=!0,aa);case"textInput":return e=n.data,e===aa&&ua?null:e;default:return null}}function Bp(e,n){if(tt)return e==="compositionend"||!Yl&&fc(e,n)?(e=mc(),Go=Hl=gn=null,tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pc&&n.locale!=="ko"?null:n.data;default:return null}}var Wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ca(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Wp[e.type]:n==="textarea"}function hc(e,n,t,o){Yu(o),n=dr(n,"onChange"),0<n.length&&(t=new Vl("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var Gt=null,so=null;function Hp(e){jc(e,0)}function $r(e){var n=it(e);if(Au(n))return e}function Vp(e,n){if(e==="change")return n}var yc=!1;if(tn){var ai;if(tn){var ui="oninput"in document;if(!ui){var da=document.createElement("div");da.setAttribute("oninput","return;"),ui=typeof da.oninput=="function"}ai=ui}else ai=!1;yc=ai&&(!document.documentMode||9<document.documentMode)}function ma(){Gt&&(Gt.detachEvent("onpropertychange",vc),so=Gt=null)}function vc(e){if(e.propertyName==="value"&&$r(so)){var n=[];hc(n,so,e,Fl(e)),Xu(Hp,n)}}function Qp(e,n,t){e==="focusin"?(ma(),Gt=n,so=t,Gt.attachEvent("onpropertychange",vc)):e==="focusout"&&ma()}function Yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $r(so)}function Kp(e,n){if(e==="click")return $r(n)}function Gp(e,n){if(e==="input"||e==="change")return $r(n)}function qp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Be=typeof Object.is=="function"?Object.is:qp;function ao(e,n){if(Be(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var r=t[o];if(!bi.call(n,r)||!Be(e[r],n[r]))return!1}return!0}function pa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fa(e,n){var t=pa(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=pa(t)}}function Cc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Cc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xc(){for(var e=window,n=rr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=rr(e.document)}return n}function Kl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Xp(e){var n=xc(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Cc(t.ownerDocument.documentElement,t)){if(o!==null&&Kl(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(o.start,r);o=o.end===void 0?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=fa(t,i);var l=fa(t,o);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jp=tn&&"documentMode"in document&&11>=document.documentMode,ot=null,Ki=null,qt=null,Gi=!1;function ga(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Gi||ot==null||ot!==rr(o)||(o=ot,"selectionStart"in o&&Kl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qt&&ao(qt,o)||(qt=o,o=dr(Ki,"onSelect"),0<o.length&&(n=new Vl("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=ot)))}function Oo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var rt={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},ci={},Sc={};tn&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete rt.animationend.animation,delete rt.animationiteration.animation,delete rt.animationstart.animation),"TransitionEvent"in window||delete rt.transitionend.transition);function Mr(e){if(ci[e])return ci[e];if(!rt[e])return e;var n=rt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Sc)return ci[e]=n[t];return e}var kc=Mr("animationend"),Pc=Mr("animationiteration"),wc=Mr("animationstart"),_c=Mr("transitionend"),Rc=new Map,ha="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,n){Rc.set(e,n),Gn(n,[e])}for(var di=0;di<ha.length;di++){var mi=ha[di],Zp=mi.toLowerCase(),ef=mi[0].toUpperCase()+mi.slice(1);bn(Zp,"on"+ef)}bn(kc,"onAnimationEnd");bn(Pc,"onAnimationIteration");bn(wc,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(_c,"onTransitionEnd");vt("onMouseEnter",["mouseout","mouseover"]);vt("onMouseLeave",["mouseout","mouseover"]);vt("onPointerEnter",["pointerout","pointerover"]);vt("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ht="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ht));function ya(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,Zm(o,n,void 0,e),e.currentTarget=null}function jc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],r=o.event;o=o.listeners;e:{var i=void 0;if(n)for(var l=o.length-1;0<=l;l--){var s=o[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&r.isPropagationStopped())break e;ya(r,s,u),i=a}else for(l=0;l<o.length;l++){if(s=o[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&r.isPropagationStopped())break e;ya(r,s,u),i=a}}}if(lr)throw e=Hi,lr=!1,Hi=null,e}function z(e,n){var t=n[el];t===void 0&&(t=n[el]=new Set);var o=e+"__bubble";t.has(o)||(Ec(n,e,2,!1),t.add(o))}function pi(e,n,t){var o=0;n&&(o|=4),Ec(t,e,o,n)}var zo="_reactListening"+Math.random().toString(36).slice(2);function uo(e){if(!e[zo]){e[zo]=!0,Du.forEach(function(t){t!=="selectionchange"&&(nf.has(t)||pi(t,!1,e),pi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[zo]||(n[zo]=!0,pi("selectionchange",!1,n))}}function Ec(e,n,t,o){switch(dc(n)){case 1:var r=gp;break;case 4:r=hp;break;default:r=Wl}t=r.bind(null,n,t,e),r=void 0,!Wi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function fi(e,n,t,o,r){var i=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var s=o.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(l===4)for(l=o.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;l=l.return}for(;s!==null;){if(l=Fn(s),l===null)return;if(a=l.tag,a===5||a===6){o=i=l;continue e}s=s.parentNode}}o=o.return}Xu(function(){var u=i,d=Fl(t),m=[];e:{var f=Rc.get(e);if(f!==void 0){var v=Vl,x=e;switch(e){case"keypress":if(qo(t)===0)break e;case"keydown":case"keyup":v=Np;break;case"focusin":x="focus",v=si;break;case"focusout":x="blur",v=si;break;case"beforeblur":case"afterblur":v=si;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Lp;break;case kc:case Pc:case wc:v=kp;break;case _c:v=Op;break;case"scroll":v=yp;break;case"wheel":v=Ip;break;case"copy":case"cut":case"paste":v=wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=sa}var S=(n&4)!==0,P=!S&&e==="scroll",g=S?f!==null?f+"Capture":null:f;S=[];for(var p=u,h;p!==null;){h=p;var C=h.stateNode;if(h.tag===5&&C!==null&&(h=C,g!==null&&(C=oo(p,g),C!=null&&S.push(co(p,C,h)))),P)break;p=p.return}0<S.length&&(f=new v(f,x,null,t,d),m.push({event:f,listeners:S}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&t!==Ui&&(x=t.relatedTarget||t.fromElement)&&(Fn(x)||x[on]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=t.relatedTarget||t.toElement,v=u,x=x?Fn(x):null,x!==null&&(P=qn(x),x!==P||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(S=ia,C="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=sa,C="onPointerLeave",g="onPointerEnter",p="pointer"),P=v==null?f:it(v),h=x==null?f:it(x),f=new S(C,p+"leave",v,t,d),f.target=P,f.relatedTarget=h,C=null,Fn(d)===u&&(S=new S(g,p+"enter",x,t,d),S.target=h,S.relatedTarget=P,C=S),P=C,v&&x)n:{for(S=v,g=x,p=0,h=S;h;h=Jn(h))p++;for(h=0,C=g;C;C=Jn(C))h++;for(;0<p-h;)S=Jn(S),p--;for(;0<h-p;)g=Jn(g),h--;for(;p--;){if(S===g||g!==null&&S===g.alternate)break n;S=Jn(S),g=Jn(g)}S=null}else S=null;v!==null&&va(m,f,v,S,!1),x!==null&&P!==null&&va(m,P,x,S,!0)}}e:{if(f=u?it(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var k=Vp;else if(ca(f))if(yc)k=Gp;else{k=Yp;var _=Qp}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Kp);if(k&&(k=k(e,u))){hc(m,k,t,d);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Oi(f,"number",f.value)}switch(_=u?it(u):window,e){case"focusin":(ca(_)||_.contentEditable==="true")&&(ot=_,Ki=u,qt=null);break;case"focusout":qt=Ki=ot=null;break;case"mousedown":Gi=!0;break;case"contextmenu":case"mouseup":case"dragend":Gi=!1,ga(m,t,d);break;case"selectionchange":if(Jp)break;case"keydown":case"keyup":ga(m,t,d)}var R;if(Yl)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else tt?fc(e,t)&&(b="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(pc&&t.locale!=="ko"&&(tt||b!=="onCompositionStart"?b==="onCompositionEnd"&&tt&&(R=mc()):(gn=d,Hl="value"in gn?gn.value:gn.textContent,tt=!0)),_=dr(u,b),0<_.length&&(b=new la(b,e,null,t,d),m.push({event:b,listeners:_}),R?b.data=R:(R=gc(t),R!==null&&(b.data=R)))),(R=Ap?Up(e,t):Bp(e,t))&&(u=dr(u,"onBeforeInput"),0<u.length&&(d=new la("onBeforeInput","beforeinput",null,t,d),m.push({event:d,listeners:u}),d.data=R))}jc(m,n)})}function co(e,n,t){return{instance:e,listener:n,currentTarget:t}}function dr(e,n){for(var t=n+"Capture",o=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=oo(e,t),i!=null&&o.unshift(co(e,i,r)),i=oo(e,n),i!=null&&o.push(co(e,i,r))),e=e.return}return o}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function va(e,n,t,o,r){for(var i=n._reactName,l=[];t!==null&&t!==o;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===o)break;s.tag===5&&u!==null&&(s=u,r?(a=oo(t,i),a!=null&&l.unshift(co(t,a,s))):r||(a=oo(t,i),a!=null&&l.push(co(t,a,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var tf=/\r\n?/g,of=/\u0000|\uFFFD/g;function Ca(e){return(typeof e=="string"?e:""+e).replace(tf,`
`).replace(of,"")}function Io(e,n,t){if(n=Ca(n),Ca(e)!==n&&t)throw Error(w(425))}function mr(){}var qi=null,Xi=null;function Ji(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zi=typeof setTimeout=="function"?setTimeout:void 0,rf=typeof clearTimeout=="function"?clearTimeout:void 0,xa=typeof Promise=="function"?Promise:void 0,lf=typeof queueMicrotask=="function"?queueMicrotask:typeof xa<"u"?function(e){return xa.resolve(null).then(e).catch(sf)}:Zi;function sf(e){setTimeout(function(){throw e})}function gi(e,n){var t=n,o=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(o===0){e.removeChild(r),lo(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=r}while(t);lo(n)}function Sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Sa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Et=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Et,mo="__reactProps$"+Et,on="__reactContainer$"+Et,el="__reactEvents$"+Et,af="__reactListeners$"+Et,uf="__reactHandles$"+Et;function Fn(e){var n=e[Ye];if(n)return n;for(var t=e.parentNode;t;){if(n=t[on]||t[Ye]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Sa(e);e!==null;){if(t=e[Ye])return t;e=Sa(e)}return n}e=t,t=e.parentNode}return null}function wo(e){return e=e[Ye]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function it(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Lr(e){return e[mo]||null}var nl=[],lt=-1;function Tn(e){return{current:e}}function I(e){0>lt||(e.current=nl[lt],nl[lt]=null,lt--)}function O(e,n){lt++,nl[lt]=e.current,e.current=n}var En={},me=Tn(En),Ce=Tn(!1),Hn=En;function Ct(e,n){var t=e.type.contextTypes;if(!t)return En;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function xe(e){return e=e.childContextTypes,e!=null}function pr(){I(Ce),I(me)}function ka(e,n,t){if(me.current!==En)throw Error(w(168));O(me,n),O(Ce,t)}function bc(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var r in o)if(!(r in n))throw Error(w(108,Qm(e)||"Unknown",r));return W({},t,o)}function fr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Hn=me.current,O(me,e),O(Ce,Ce.current),!0}function Pa(e,n,t){var o=e.stateNode;if(!o)throw Error(w(169));t?(e=bc(e,n,Hn),o.__reactInternalMemoizedMergedChildContext=e,I(Ce),I(me),O(me,e)):I(Ce),O(Ce,t)}var Je=null,Dr=!1,hi=!1;function Tc(e){Je===null?Je=[e]:Je.push(e)}function cf(e){Dr=!0,Tc(e)}function Nn(){if(!hi&&Je!==null){hi=!0;var e=0,n=D;try{var t=Je;for(D=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Je=null,Dr=!1}catch(r){throw Je!==null&&(Je=Je.slice(e+1)),nc(Al,Nn),r}finally{D=n,hi=!1}}return null}var st=[],at=0,gr=null,hr=0,be=[],Te=0,Vn=null,Ze=1,en="";function zn(e,n){st[at++]=hr,st[at++]=gr,gr=e,hr=n}function Nc(e,n,t){be[Te++]=Ze,be[Te++]=en,be[Te++]=Vn,Vn=e;var o=Ze;e=en;var r=32-Ae(o)-1;o&=~(1<<r),t+=1;var i=32-Ae(n)+r;if(30<i){var l=r-r%5;i=(o&(1<<l)-1).toString(32),o>>=l,r-=l,Ze=1<<32-Ae(n)+r|t<<r|o,en=i+e}else Ze=1<<i|t<<r|o,en=e}function Gl(e){e.return!==null&&(zn(e,1),Nc(e,1,0))}function ql(e){for(;e===gr;)gr=st[--at],st[at]=null,hr=st[--at],st[at]=null;for(;e===Vn;)Vn=be[--Te],be[Te]=null,en=be[--Te],be[Te]=null,Ze=be[--Te],be[Te]=null}var _e=null,we=null,F=!1,Fe=null;function $c(e,n){var t=Ne(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function wa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,_e=e,we=Sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,_e=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Vn!==null?{id:Ze,overflow:en}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ne(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,_e=e,we=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ol(e){if(F){var n=we;if(n){var t=n;if(!wa(e,n)){if(tl(e))throw Error(w(418));n=Sn(t.nextSibling);var o=_e;n&&wa(e,n)?$c(o,t):(e.flags=e.flags&-4097|2,F=!1,_e=e)}}else{if(tl(e))throw Error(w(418));e.flags=e.flags&-4097|2,F=!1,_e=e}}}function _a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function Fo(e){if(e!==_e)return!1;if(!F)return _a(e),F=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ji(e.type,e.memoizedProps)),n&&(n=we)){if(tl(e))throw Mc(),Error(w(418));for(;n;)$c(e,n),n=Sn(n.nextSibling)}if(_a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=Sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=_e?Sn(e.stateNode.nextSibling):null;return!0}function Mc(){for(var e=we;e;)e=Sn(e.nextSibling)}function xt(){we=_e=null,F=!1}function Xl(e){Fe===null?Fe=[e]:Fe.push(e)}var df=sn.ReactCurrentBatchConfig;function It(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var o=t.stateNode}if(!o)throw Error(w(147,e));var r=o,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var s=r.refs;l===null?delete s[i]:s[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function Ao(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ra(e){var n=e._init;return n(e._payload)}function Lc(e){function n(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function t(g,p){if(!e)return null;for(;p!==null;)n(g,p),p=p.sibling;return null}function o(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function r(g,p){return g=_n(g,p),g.index=0,g.sibling=null,g}function i(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,h,C){return p===null||p.tag!==6?(p=Pi(h,g.mode,C),p.return=g,p):(p=r(p,h),p.return=g,p)}function a(g,p,h,C){var k=h.type;return k===nt?d(g,p,h.props.children,C,h.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===dn&&Ra(k)===p.type)?(C=r(p,h.props),C.ref=It(g,p,h),C.return=g,C):(C=or(h.type,h.key,h.props,null,g.mode,C),C.ref=It(g,p,h),C.return=g,C)}function u(g,p,h,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=wi(h,g.mode,C),p.return=g,p):(p=r(p,h.children||[]),p.return=g,p)}function d(g,p,h,C,k){return p===null||p.tag!==7?(p=Wn(h,g.mode,C,k),p.return=g,p):(p=r(p,h),p.return=g,p)}function m(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Pi(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case bo:return h=or(p.type,p.key,p.props,null,g.mode,h),h.ref=It(g,null,p),h.return=g,h;case et:return p=wi(p,g.mode,h),p.return=g,p;case dn:var C=p._init;return m(g,C(p._payload),h)}if(Bt(p)||Mt(p))return p=Wn(p,g.mode,h,null),p.return=g,p;Ao(g,p)}return null}function f(g,p,h,C){var k=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:s(g,p,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case bo:return h.key===k?a(g,p,h,C):null;case et:return h.key===k?u(g,p,h,C):null;case dn:return k=h._init,f(g,p,k(h._payload),C)}if(Bt(h)||Mt(h))return k!==null?null:d(g,p,h,C,null);Ao(g,h)}return null}function v(g,p,h,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(h)||null,s(p,g,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case bo:return g=g.get(C.key===null?h:C.key)||null,a(p,g,C,k);case et:return g=g.get(C.key===null?h:C.key)||null,u(p,g,C,k);case dn:var _=C._init;return v(g,p,h,_(C._payload),k)}if(Bt(C)||Mt(C))return g=g.get(h)||null,d(p,g,C,k,null);Ao(p,C)}return null}function x(g,p,h,C){for(var k=null,_=null,R=p,b=p=0,A=null;R!==null&&b<h.length;b++){R.index>b?(A=R,R=null):A=R.sibling;var $=f(g,R,h[b],C);if($===null){R===null&&(R=A);break}e&&R&&$.alternate===null&&n(g,R),p=i($,p,b),_===null?k=$:_.sibling=$,_=$,R=A}if(b===h.length)return t(g,R),F&&zn(g,b),k;if(R===null){for(;b<h.length;b++)R=m(g,h[b],C),R!==null&&(p=i(R,p,b),_===null?k=R:_.sibling=R,_=R);return F&&zn(g,b),k}for(R=o(g,R);b<h.length;b++)A=v(R,g,b,h[b],C),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?b:A.key),p=i(A,p,b),_===null?k=A:_.sibling=A,_=A);return e&&R.forEach(function(ke){return n(g,ke)}),F&&zn(g,b),k}function S(g,p,h,C){var k=Mt(h);if(typeof k!="function")throw Error(w(150));if(h=k.call(h),h==null)throw Error(w(151));for(var _=k=null,R=p,b=p=0,A=null,$=h.next();R!==null&&!$.done;b++,$=h.next()){R.index>b?(A=R,R=null):A=R.sibling;var ke=f(g,R,$.value,C);if(ke===null){R===null&&(R=A);break}e&&R&&ke.alternate===null&&n(g,R),p=i(ke,p,b),_===null?k=ke:_.sibling=ke,_=ke,R=A}if($.done)return t(g,R),F&&zn(g,b),k;if(R===null){for(;!$.done;b++,$=h.next())$=m(g,$.value,C),$!==null&&(p=i($,p,b),_===null?k=$:_.sibling=$,_=$);return F&&zn(g,b),k}for(R=o(g,R);!$.done;b++,$=h.next())$=v(R,g,b,$.value,C),$!==null&&(e&&$.alternate!==null&&R.delete($.key===null?b:$.key),p=i($,p,b),_===null?k=$:_.sibling=$,_=$);return e&&R.forEach(function(te){return n(g,te)}),F&&zn(g,b),k}function P(g,p,h,C){if(typeof h=="object"&&h!==null&&h.type===nt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case bo:e:{for(var k=h.key,_=p;_!==null;){if(_.key===k){if(k=h.type,k===nt){if(_.tag===7){t(g,_.sibling),p=r(_,h.props.children),p.return=g,g=p;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===dn&&Ra(k)===_.type){t(g,_.sibling),p=r(_,h.props),p.ref=It(g,_,h),p.return=g,g=p;break e}t(g,_);break}else n(g,_);_=_.sibling}h.type===nt?(p=Wn(h.props.children,g.mode,C,h.key),p.return=g,g=p):(C=or(h.type,h.key,h.props,null,g.mode,C),C.ref=It(g,p,h),C.return=g,g=C)}return l(g);case et:e:{for(_=h.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){t(g,p.sibling),p=r(p,h.children||[]),p.return=g,g=p;break e}else{t(g,p);break}else n(g,p);p=p.sibling}p=wi(h,g.mode,C),p.return=g,g=p}return l(g);case dn:return _=h._init,P(g,p,_(h._payload),C)}if(Bt(h))return x(g,p,h,C);if(Mt(h))return S(g,p,h,C);Ao(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(t(g,p.sibling),p=r(p,h),p.return=g,g=p):(t(g,p),p=Pi(h,g.mode,C),p.return=g,g=p),l(g)):t(g,p)}return P}var St=Lc(!0),Dc=Lc(!1),yr=Tn(null),vr=null,ut=null,Jl=null;function Zl(){Jl=ut=vr=null}function es(e){var n=yr.current;I(yr),e._currentValue=n}function rl(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function ht(e,n){vr=e,Jl=ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ve=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(Jl!==e)if(e={context:e,memoizedValue:n,next:null},ut===null){if(vr===null)throw Error(w(308));ut=e,vr.dependencies={lanes:0,firstContext:e}}else ut=ut.next=e;return n}var An=null;function ns(e){An===null?An=[e]:An.push(e)}function Oc(e,n,t,o){var r=n.interleaved;return r===null?(t.next=t,ns(n)):(t.next=r.next,r.next=t),n.interleaved=t,rn(e,o)}function rn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var mn=!1;function ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kn(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,L&2){var r=o.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),o.pending=n,rn(e,t)}return r=o.interleaved,r===null?(n.next=n,ns(o)):(n.next=r.next,r.next=n),o.interleaved=n,rn(e,t)}function Xo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Ul(e,t)}}function ja(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Cr(e,n,t,o){var r=e.updateQueue;mn=!1;var i=r.firstBaseUpdate,l=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(i!==null){var m=r.baseState;l=0,d=u=a=null,s=i;do{var f=s.lane,v=s.eventTime;if((o&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,S=s;switch(f=n,v=t,S.tag){case 1:if(x=S.payload,typeof x=="function"){m=x.call(v,m,f);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,f=typeof x=="function"?x.call(v,m,f):x,f==null)break e;m=W({},m,f);break e;case 2:mn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[s]:f.push(s))}else v={eventTime:v,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=v,a=m):d=d.next=v,l|=f;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;f=s,s=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(a=m),r.baseState=a,r.firstBaseUpdate=u,r.lastBaseUpdate=d,n=r.shared.interleaved,n!==null){r=n;do l|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);Yn|=l,e.lanes=l,e.memoizedState=m}}function Ea(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],r=o.callback;if(r!==null){if(o.callback=null,o=t,typeof r!="function")throw Error(w(191,r));r.call(o)}}}var _o={},Ge=Tn(_o),po=Tn(_o),fo=Tn(_o);function Un(e){if(e===_o)throw Error(w(174));return e}function os(e,n){switch(O(fo,n),O(po,e),O(Ge,_o),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ii(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ii(n,e)}I(Ge),O(Ge,n)}function kt(){I(Ge),I(po),I(fo)}function Ic(e){Un(fo.current);var n=Un(Ge.current),t=Ii(n,e.type);n!==t&&(O(po,e),O(Ge,t))}function rs(e){po.current===e&&(I(Ge),I(po))}var U=Tn(0);function xr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var yi=[];function is(){for(var e=0;e<yi.length;e++)yi[e]._workInProgressVersionPrimary=null;yi.length=0}var Jo=sn.ReactCurrentDispatcher,vi=sn.ReactCurrentBatchConfig,Qn=0,B=null,ee=null,re=null,Sr=!1,Xt=!1,go=0,mf=0;function ue(){throw Error(w(321))}function ls(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Be(e[t],n[t]))return!1;return!0}function ss(e,n,t,o,r,i){if(Qn=i,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Jo.current=e===null||e.memoizedState===null?hf:yf,e=t(o,r),Xt){i=0;do{if(Xt=!1,go=0,25<=i)throw Error(w(301));i+=1,re=ee=null,n.updateQueue=null,Jo.current=vf,e=t(o,r)}while(Xt)}if(Jo.current=kr,n=ee!==null&&ee.next!==null,Qn=0,re=ee=B=null,Sr=!1,n)throw Error(w(300));return e}function as(){var e=go!==0;return go=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?B.memoizedState=re=e:re=re.next=e,re}function Le(){if(ee===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=re===null?B.memoizedState:re.next;if(n!==null)re=n,ee=e;else{if(e===null)throw Error(w(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?B.memoizedState=re=e:re=re.next=e}return re}function ho(e,n){return typeof n=="function"?n(e):n}function Ci(e){var n=Le(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var o=ee,r=o.baseQueue,i=t.pending;if(i!==null){if(r!==null){var l=r.next;r.next=i.next,i.next=l}o.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,o=o.baseState;var s=l=null,a=null,u=i;do{var d=u.lane;if((Qn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=m,l=o):a=a.next=m,B.lanes|=d,Yn|=d}u=u.next}while(u!==null&&u!==i);a===null?l=o:a.next=s,Be(o,n.memoizedState)||(ve=!0),n.memoizedState=o,n.baseState=l,n.baseQueue=a,t.lastRenderedState=o}if(e=t.interleaved,e!==null){r=e;do i=r.lane,B.lanes|=i,Yn|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function xi(e){var n=Le(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var o=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var l=r=r.next;do i=e(i,l.action),l=l.next;while(l!==r);Be(i,n.memoizedState)||(ve=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,o]}function Fc(){}function Ac(e,n){var t=B,o=Le(),r=n(),i=!Be(o.memoizedState,r);if(i&&(o.memoizedState=r,ve=!0),o=o.queue,us(Wc.bind(null,t,o,e),[e]),o.getSnapshot!==n||i||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,yo(9,Bc.bind(null,t,o,r,n),void 0,null),ie===null)throw Error(w(349));Qn&30||Uc(t,n,r)}return r}function Uc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Bc(e,n,t,o){n.value=t,n.getSnapshot=o,Hc(n)&&Vc(e)}function Wc(e,n,t){return t(function(){Hc(n)&&Vc(e)})}function Hc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Be(e,t)}catch{return!0}}function Vc(e){var n=rn(e,1);n!==null&&Ue(n,e,1,-1)}function ba(e){var n=Ve();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:e},n.queue=e,e=e.dispatch=gf.bind(null,B,e),[n.memoizedState,e]}function yo(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function Qc(){return Le().memoizedState}function Zo(e,n,t,o){var r=Ve();B.flags|=e,r.memoizedState=yo(1|n,t,void 0,o===void 0?null:o)}function Or(e,n,t,o){var r=Le();o=o===void 0?null:o;var i=void 0;if(ee!==null){var l=ee.memoizedState;if(i=l.destroy,o!==null&&ls(o,l.deps)){r.memoizedState=yo(n,t,i,o);return}}B.flags|=e,r.memoizedState=yo(1|n,t,i,o)}function Ta(e,n){return Zo(8390656,8,e,n)}function us(e,n){return Or(2048,8,e,n)}function Yc(e,n){return Or(4,2,e,n)}function Kc(e,n){return Or(4,4,e,n)}function Gc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qc(e,n,t){return t=t!=null?t.concat([e]):null,Or(4,4,Gc.bind(null,n,e),t)}function cs(){}function Xc(e,n){var t=Le();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&ls(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function Jc(e,n){var t=Le();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&ls(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function Zc(e,n,t){return Qn&21?(Be(t,n)||(t=rc(),B.lanes|=t,Yn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=t)}function pf(e,n){var t=D;D=t!==0&&4>t?t:4,e(!0);var o=vi.transition;vi.transition={};try{e(!1),n()}finally{D=t,vi.transition=o}}function ed(){return Le().memoizedState}function ff(e,n,t){var o=wn(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},nd(e))td(n,t);else if(t=Oc(e,n,t,o),t!==null){var r=fe();Ue(t,e,o,r),od(t,n,o)}}function gf(e,n,t){var o=wn(e),r={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(nd(e))td(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,s=i(l,t);if(r.hasEagerState=!0,r.eagerState=s,Be(s,l)){var a=n.interleaved;a===null?(r.next=r,ns(n)):(r.next=a.next,a.next=r),n.interleaved=r;return}}catch{}finally{}t=Oc(e,n,r,o),t!==null&&(r=fe(),Ue(t,e,o,r),od(t,n,o))}}function nd(e){var n=e.alternate;return e===B||n!==null&&n===B}function td(e,n){Xt=Sr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function od(e,n,t){if(t&4194240){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Ul(e,t)}}var kr={readContext:Me,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},hf={readContext:Me,useCallback:function(e,n){return Ve().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:Ta,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Zo(4194308,4,Gc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Zo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Zo(4,2,e,n)},useMemo:function(e,n){var t=Ve();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=Ve();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=ff.bind(null,B,e),[o.memoizedState,e]},useRef:function(e){var n=Ve();return e={current:e},n.memoizedState=e},useState:ba,useDebugValue:cs,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=ba(!1),n=e[0];return e=pf.bind(null,e[1]),Ve().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=B,r=Ve();if(F){if(t===void 0)throw Error(w(407));t=t()}else{if(t=n(),ie===null)throw Error(w(349));Qn&30||Uc(o,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,Ta(Wc.bind(null,o,i,e),[e]),o.flags|=2048,yo(9,Bc.bind(null,o,i,t,n),void 0,null),t},useId:function(){var e=Ve(),n=ie.identifierPrefix;if(F){var t=en,o=Ze;t=(o&~(1<<32-Ae(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=go++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=mf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},yf={readContext:Me,useCallback:Xc,useContext:Me,useEffect:us,useImperativeHandle:qc,useInsertionEffect:Yc,useLayoutEffect:Kc,useMemo:Jc,useReducer:Ci,useRef:Qc,useState:function(){return Ci(ho)},useDebugValue:cs,useDeferredValue:function(e){var n=Le();return Zc(n,ee.memoizedState,e)},useTransition:function(){var e=Ci(ho)[0],n=Le().memoizedState;return[e,n]},useMutableSource:Fc,useSyncExternalStore:Ac,useId:ed,unstable_isNewReconciler:!1},vf={readContext:Me,useCallback:Xc,useContext:Me,useEffect:us,useImperativeHandle:qc,useInsertionEffect:Yc,useLayoutEffect:Kc,useMemo:Jc,useReducer:xi,useRef:Qc,useState:function(){return xi(ho)},useDebugValue:cs,useDeferredValue:function(e){var n=Le();return ee===null?n.memoizedState=e:Zc(n,ee.memoizedState,e)},useTransition:function(){var e=xi(ho)[0],n=Le().memoizedState;return[e,n]},useMutableSource:Fc,useSyncExternalStore:Ac,useId:ed,unstable_isNewReconciler:!1};function Oe(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function il(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var zr={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=fe(),r=wn(e),i=nn(o,r);i.payload=n,t!=null&&(i.callback=t),n=kn(e,i,r),n!==null&&(Ue(n,e,r,o),Xo(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=fe(),r=wn(e),i=nn(o,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=kn(e,i,r),n!==null&&(Ue(n,e,r,o),Xo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=fe(),o=wn(e),r=nn(t,o);r.tag=2,n!=null&&(r.callback=n),n=kn(e,r,o),n!==null&&(Ue(n,e,o,t),Xo(n,e,o))}};function Na(e,n,t,o,r,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,l):n.prototype&&n.prototype.isPureReactComponent?!ao(t,o)||!ao(r,i):!0}function rd(e,n,t){var o=!1,r=En,i=n.contextType;return typeof i=="object"&&i!==null?i=Me(i):(r=xe(n)?Hn:me.current,o=n.contextTypes,i=(o=o!=null)?Ct(e,r):En),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=zr,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function $a(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&zr.enqueueReplaceState(n,n.state,null)}function ll(e,n,t,o){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},ts(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=Me(i):(i=xe(n)?Hn:me.current,r.context=Ct(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(il(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&zr.enqueueReplaceState(r,r.state,null),Cr(e,t,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Pt(e,n){try{var t="",o=n;do t+=Vm(o),o=o.return;while(o);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function Si(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function sl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Cf=typeof WeakMap=="function"?WeakMap:Map;function id(e,n,t){t=nn(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){wr||(wr=!0,yl=o),sl(e,n)},t}function ld(e,n,t){t=nn(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=n.value;t.payload=function(){return o(r)},t.callback=function(){sl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){sl(e,n),typeof o!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Ma(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Cf;var r=new Set;o.set(n,r)}else r=o.get(n),r===void 0&&(r=new Set,o.set(n,r));r.has(t)||(r.add(t),e=Mf.bind(null,e,n,t),n.then(e,e))}function La(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Da(e,n,t,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=nn(-1,1),n.tag=2,kn(t,n,1))),t.lanes|=1),e)}var xf=sn.ReactCurrentOwner,ve=!1;function pe(e,n,t,o){n.child=e===null?Dc(n,null,t,o):St(n,e.child,t,o)}function Oa(e,n,t,o,r){t=t.render;var i=n.ref;return ht(n,r),o=ss(e,n,t,o,i,r),t=as(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,ln(e,n,r)):(F&&t&&Gl(n),n.flags|=1,pe(e,n,o,r),n.child)}function za(e,n,t,o,r){if(e===null){var i=t.type;return typeof i=="function"&&!vs(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,sd(e,n,i,o,r)):(e=or(t.type,null,o,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:ao,t(l,o)&&e.ref===n.ref)return ln(e,n,r)}return n.flags|=1,e=_n(i,o),e.ref=n.ref,e.return=n,n.child=e}function sd(e,n,t,o,r){if(e!==null){var i=e.memoizedProps;if(ao(i,o)&&e.ref===n.ref)if(ve=!1,n.pendingProps=o=i,(e.lanes&r)!==0)e.flags&131072&&(ve=!0);else return n.lanes=e.lanes,ln(e,n,r)}return al(e,n,t,o,r)}function ad(e,n,t){var o=n.pendingProps,r=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(dt,Pe),Pe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(dt,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:t,O(dt,Pe),Pe|=o}else i!==null?(o=i.baseLanes|t,n.memoizedState=null):o=t,O(dt,Pe),Pe|=o;return pe(e,n,r,t),n.child}function ud(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function al(e,n,t,o,r){var i=xe(t)?Hn:me.current;return i=Ct(n,i),ht(n,r),t=ss(e,n,t,o,i,r),o=as(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,ln(e,n,r)):(F&&o&&Gl(n),n.flags|=1,pe(e,n,t,r),n.child)}function Ia(e,n,t,o,r){if(xe(t)){var i=!0;fr(n)}else i=!1;if(ht(n,r),n.stateNode===null)er(e,n),rd(n,t,o),ll(n,t,o,r),o=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var a=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=xe(t)?Hn:me.current,u=Ct(n,u));var d=t.getDerivedStateFromProps,m=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==o||a!==u)&&$a(n,l,o,u),mn=!1;var f=n.memoizedState;l.state=f,Cr(n,o,l,r),a=n.memoizedState,s!==o||f!==a||Ce.current||mn?(typeof d=="function"&&(il(n,t,d,o),a=n.memoizedState),(s=mn||Na(n,t,s,o,f,a,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=a),l.props=o,l.state=a,l.context=u,o=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{l=n.stateNode,zc(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:Oe(n.type,s),l.props=u,m=n.pendingProps,f=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=Me(a):(a=xe(t)?Hn:me.current,a=Ct(n,a));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||f!==a)&&$a(n,l,o,a),mn=!1,f=n.memoizedState,l.state=f,Cr(n,o,l,r);var x=n.memoizedState;s!==m||f!==x||Ce.current||mn?(typeof v=="function"&&(il(n,t,v,o),x=n.memoizedState),(u=mn||Na(n,t,u,o,f,x,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,x,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=x),l.props=o,l.state=x,l.context=a,o=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),o=!1)}return ul(e,n,t,o,i,r)}function ul(e,n,t,o,r,i){ud(e,n);var l=(n.flags&128)!==0;if(!o&&!l)return r&&Pa(n,t,!1),ln(e,n,i);o=n.stateNode,xf.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&l?(n.child=St(n,e.child,null,i),n.child=St(n,null,s,i)):pe(e,n,s,i),n.memoizedState=o.state,r&&Pa(n,t,!0),n.child}function cd(e){var n=e.stateNode;n.pendingContext?ka(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ka(e,n.context,!1),os(e,n.containerInfo)}function Fa(e,n,t,o,r){return xt(),Xl(r),n.flags|=256,pe(e,n,t,o),n.child}var cl={dehydrated:null,treeContext:null,retryLane:0};function dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function dd(e,n,t){var o=n.pendingProps,r=U.current,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),O(U,r&1),e===null)return ol(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=o.children,e=o.fallback,i?(o=n.mode,i=n.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ar(l,o,0,null),e=Wn(e,o,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=dl(t),n.memoizedState=cl,e):ds(n,l));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return Sf(e,n,l,o,s,r,t);if(i){i=o.fallback,l=n.mode,r=e.child,s=r.sibling;var a={mode:"hidden",children:o.children};return!(l&1)&&n.child!==r?(o=n.child,o.childLanes=0,o.pendingProps=a,n.deletions=null):(o=_n(r,a),o.subtreeFlags=r.subtreeFlags&14680064),s!==null?i=_n(s,i):(i=Wn(i,l,t,null),i.flags|=2),i.return=n,o.return=n,o.sibling=i,n.child=o,o=i,i=n.child,l=e.child.memoizedState,l=l===null?dl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=cl,o}return i=e.child,e=i.sibling,o=_n(i,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function ds(e,n){return n=Ar({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Uo(e,n,t,o){return o!==null&&Xl(o),St(n,e.child,null,t),e=ds(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sf(e,n,t,o,r,i,l){if(t)return n.flags&256?(n.flags&=-257,o=Si(Error(w(422))),Uo(e,n,l,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=o.fallback,r=n.mode,o=Ar({mode:"visible",children:o.children},r,0,null),i=Wn(i,r,l,null),i.flags|=2,o.return=n,i.return=n,o.sibling=i,n.child=o,n.mode&1&&St(n,e.child,null,l),n.child.memoizedState=dl(l),n.memoizedState=cl,i);if(!(n.mode&1))return Uo(e,n,l,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var s=o.dgst;return o=s,i=Error(w(419)),o=Si(i,o,void 0),Uo(e,n,l,o)}if(s=(l&e.childLanes)!==0,ve||s){if(o=ie,o!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|l)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,rn(e,r),Ue(o,e,r,-1))}return ys(),o=Si(Error(w(421))),Uo(e,n,l,o)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Lf.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,we=Sn(r.nextSibling),_e=n,F=!0,Fe=null,e!==null&&(be[Te++]=Ze,be[Te++]=en,be[Te++]=Vn,Ze=e.id,en=e.overflow,Vn=n),n=ds(n,o.children),n.flags|=4096,n)}function Aa(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),rl(e.return,n,t)}function ki(e,n,t,o,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=t,i.tailMode=r)}function md(e,n,t){var o=n.pendingProps,r=o.revealOrder,i=o.tail;if(pe(e,n,o.children,t),o=U.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Aa(e,t,n);else if(e.tag===19)Aa(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(O(U,o),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&xr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),ki(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&xr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}ki(n,!0,t,null,i);break;case"together":ki(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function er(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Yn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,t=_n(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=_n(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function kf(e,n,t){switch(n.tag){case 3:cd(n),xt();break;case 5:Ic(n);break;case 1:xe(n.type)&&fr(n);break;case 4:os(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,r=n.memoizedProps.value;O(yr,o._currentValue),o._currentValue=r;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(O(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?dd(e,n,t):(O(U,U.current&1),e=ln(e,n,t),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(o=(t&n.childLanes)!==0,e.flags&128){if(o)return md(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),O(U,U.current),o)break;return null;case 22:case 23:return n.lanes=0,ad(e,n,t)}return ln(e,n,t)}var pd,ml,fd,gd;pd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ml=function(){};fd=function(e,n,t,o){var r=e.memoizedProps;if(r!==o){e=n.stateNode,Un(Ge.current);var i=null;switch(t){case"input":r=Li(e,r),o=Li(e,o),i=[];break;case"select":r=W({},r,{value:void 0}),o=W({},o,{value:void 0}),i=[];break;case"textarea":r=zi(e,r),o=zi(e,o),i=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=mr)}Fi(t,o);var l;t=null;for(u in r)if(!o.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in o){var a=o[u];if(s=r!=null?r[u]:void 0,o.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(i||(i=[]),i.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&z("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};gd=function(e,n,t,o){t!==o&&(n.flags|=4)};function Ft(e,n){if(!F)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function Pf(e,n,t){var o=n.pendingProps;switch(ql(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(n),null;case 1:return xe(n.type)&&pr(),ce(n),null;case 3:return o=n.stateNode,kt(),I(Ce),I(me),is(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Fo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Fe!==null&&(xl(Fe),Fe=null))),ml(e,n),ce(n),null;case 5:rs(n);var r=Un(fo.current);if(t=n.type,e!==null&&n.stateNode!=null)fd(e,n,t,o,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(w(166));return ce(n),null}if(e=Un(Ge.current),Fo(n)){o=n.stateNode,t=n.type;var i=n.memoizedProps;switch(o[Ye]=n,o[mo]=i,e=(n.mode&1)!==0,t){case"dialog":z("cancel",o),z("close",o);break;case"iframe":case"object":case"embed":z("load",o);break;case"video":case"audio":for(r=0;r<Ht.length;r++)z(Ht[r],o);break;case"source":z("error",o);break;case"img":case"image":case"link":z("error",o),z("load",o);break;case"details":z("toggle",o);break;case"input":Gs(o,i),z("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},z("invalid",o);break;case"textarea":Xs(o,i),z("invalid",o)}Fi(t,i),r=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?o.textContent!==s&&(i.suppressHydrationWarning!==!0&&Io(o.textContent,s,e),r=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Io(o.textContent,s,e),r=["children",""+s]):no.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&z("scroll",o)}switch(t){case"input":To(o),qs(o,i,!0);break;case"textarea":To(o),Js(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=mr)}o=r,n.updateQueue=o,o!==null&&(n.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(t,{is:o.is}):(e=l.createElement(t),t==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,t),e[Ye]=n,e[mo]=o,pd(e,n,!1,!1),n.stateNode=e;e:{switch(l=Ai(t,o),t){case"dialog":z("cancel",e),z("close",e),r=o;break;case"iframe":case"object":case"embed":z("load",e),r=o;break;case"video":case"audio":for(r=0;r<Ht.length;r++)z(Ht[r],e);r=o;break;case"source":z("error",e),r=o;break;case"img":case"image":case"link":z("error",e),z("load",e),r=o;break;case"details":z("toggle",e),r=o;break;case"input":Gs(e,o),r=Li(e,o),z("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=W({},o,{value:void 0}),z("invalid",e);break;case"textarea":Xs(e,o),r=zi(e,o),z("invalid",e);break;default:r=o}Fi(t,r),s=r;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Qu(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Hu(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&to(e,a):typeof a=="number"&&to(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(no.hasOwnProperty(i)?a!=null&&i==="onScroll"&&z("scroll",e):a!=null&&Dl(e,i,a,l))}switch(t){case"input":To(e),qs(e,o,!1);break;case"textarea":To(e),Js(e);break;case"option":o.value!=null&&e.setAttribute("value",""+jn(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?mt(e,!!o.multiple,i,!1):o.defaultValue!=null&&mt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=mr)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ce(n),null;case 6:if(e&&n.stateNode!=null)gd(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(w(166));if(t=Un(fo.current),Un(Ge.current),Fo(n)){if(o=n.stateNode,t=n.memoizedProps,o[Ye]=n,(i=o.nodeValue!==t)&&(e=_e,e!==null))switch(e.tag){case 3:Io(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Io(o.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Ye]=n,n.stateNode=o}return ce(n),null;case 13:if(I(U),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&we!==null&&n.mode&1&&!(n.flags&128))Mc(),xt(),n.flags|=98560,i=!1;else if(i=Fo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Ye]=n}else xt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ce(n),i=!1}else Fe!==null&&(xl(Fe),Fe=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?ne===0&&(ne=3):ys())),n.updateQueue!==null&&(n.flags|=4),ce(n),null);case 4:return kt(),ml(e,n),e===null&&uo(n.stateNode.containerInfo),ce(n),null;case 10:return es(n.type._context),ce(n),null;case 17:return xe(n.type)&&pr(),ce(n),null;case 19:if(I(U),i=n.memoizedState,i===null)return ce(n),null;if(o=(n.flags&128)!==0,l=i.rendering,l===null)if(o)Ft(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=xr(e),l!==null){for(n.flags|=128,Ft(i,!1),o=l.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)i=t,e=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(U,U.current&1|2),n.child}e=e.sibling}i.tail!==null&&G()>wt&&(n.flags|=128,o=!0,Ft(i,!1),n.lanes=4194304)}else{if(!o)if(e=xr(l),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ft(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!F)return ce(n),null}else 2*G()-i.renderingStartTime>wt&&t!==1073741824&&(n.flags|=128,o=!0,Ft(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=G(),n.sibling=null,t=U.current,O(U,o?t&1|2:t&1),n):(ce(n),null);case 22:case 23:return hs(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?Pe&1073741824&&(ce(n),n.subtreeFlags&6&&(n.flags|=8192)):ce(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function wf(e,n){switch(ql(n),n.tag){case 1:return xe(n.type)&&pr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return kt(),I(Ce),I(me),is(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return rs(n),null;case 13:if(I(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));xt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I(U),null;case 4:return kt(),null;case 10:return es(n.type._context),null;case 22:case 23:return hs(),null;case 24:return null;default:return null}}var Bo=!1,de=!1,_f=typeof WeakSet=="function"?WeakSet:Set,j=null;function ct(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){V(e,n,o)}else t.current=null}function pl(e,n,t){try{t()}catch(o){V(e,n,o)}}var Ua=!1;function Rf(e,n){if(qi=ur,e=xc(),Kl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,a=-1,u=0,d=0,m=e,f=null;n:for(;;){for(var v;m!==t||r!==0&&m.nodeType!==3||(s=l+r),m!==i||o!==0&&m.nodeType!==3||(a=l+o),m.nodeType===3&&(l+=m.nodeValue.length),(v=m.firstChild)!==null;)f=m,m=v;for(;;){if(m===e)break n;if(f===t&&++u===r&&(s=l),f===i&&++d===o&&(a=l),(v=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=v}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Xi={focusedElem:e,selectionRange:t},ur=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,P=x.memoizedState,g=n.stateNode,p=g.getSnapshotBeforeUpdate(n.elementType===n.type?S:Oe(n.type,S),P);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(C){V(n,n.return,C)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return x=Ua,Ua=!1,x}function Jt(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&pl(n,t,i)}r=r.next}while(r!==o)}}function Ir(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function fl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function hd(e){var n=e.alternate;n!==null&&(e.alternate=null,hd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ye],delete n[mo],delete n[el],delete n[af],delete n[uf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yd(e){return e.tag===5||e.tag===3||e.tag===4}function Ba(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gl(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=mr));else if(o!==4&&(e=e.child,e!==null))for(gl(e,n,t),e=e.sibling;e!==null;)gl(e,n,t),e=e.sibling}function hl(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(hl(e,n,t),e=e.sibling;e!==null;)hl(e,n,t),e=e.sibling}var le=null,Ie=!1;function un(e,n,t){for(t=t.child;t!==null;)vd(e,n,t),t=t.sibling}function vd(e,n,t){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Tr,t)}catch{}switch(t.tag){case 5:de||ct(t,n);case 6:var o=le,r=Ie;le=null,un(e,n,t),le=o,Ie=r,le!==null&&(Ie?(e=le,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):le.removeChild(t.stateNode));break;case 18:le!==null&&(Ie?(e=le,t=t.stateNode,e.nodeType===8?gi(e.parentNode,t):e.nodeType===1&&gi(e,t),lo(e)):gi(le,t.stateNode));break;case 4:o=le,r=Ie,le=t.stateNode.containerInfo,Ie=!0,un(e,n,t),le=o,Ie=r;break;case 0:case 11:case 14:case 15:if(!de&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var i=r,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&pl(t,n,l),r=r.next}while(r!==o)}un(e,n,t);break;case 1:if(!de&&(ct(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(s){V(t,n,s)}un(e,n,t);break;case 21:un(e,n,t);break;case 22:t.mode&1?(de=(o=de)||t.memoizedState!==null,un(e,n,t),de=o):un(e,n,t);break;default:un(e,n,t)}}function Wa(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new _f),n.forEach(function(o){var r=Df.bind(null,e,o);t.has(o)||(t.add(o),o.then(r,r))})}}function De(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var r=t[o];try{var i=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,Ie=!1;break e;case 3:le=s.stateNode.containerInfo,Ie=!0;break e;case 4:le=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(le===null)throw Error(w(160));vd(i,l,r),le=null,Ie=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(u){V(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Cd(n,e),n=n.sibling}function Cd(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(n,e),He(e),o&4){try{Jt(3,e,e.return),Ir(3,e)}catch(S){V(e,e.return,S)}try{Jt(5,e,e.return)}catch(S){V(e,e.return,S)}}break;case 1:De(n,e),He(e),o&512&&t!==null&&ct(t,t.return);break;case 5:if(De(n,e),He(e),o&512&&t!==null&&ct(t,t.return),e.flags&32){var r=e.stateNode;try{to(r,"")}catch(S){V(e,e.return,S)}}if(o&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Uu(r,i),Ai(s,l);var u=Ai(s,i);for(l=0;l<a.length;l+=2){var d=a[l],m=a[l+1];d==="style"?Qu(r,m):d==="dangerouslySetInnerHTML"?Hu(r,m):d==="children"?to(r,m):Dl(r,d,m,u)}switch(s){case"input":Di(r,i);break;case"textarea":Bu(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?mt(r,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?mt(r,!!i.multiple,i.defaultValue,!0):mt(r,!!i.multiple,i.multiple?[]:"",!1))}r[mo]=i}catch(S){V(e,e.return,S)}}break;case 6:if(De(n,e),He(e),o&4){if(e.stateNode===null)throw Error(w(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(S){V(e,e.return,S)}}break;case 3:if(De(n,e),He(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{lo(n.containerInfo)}catch(S){V(e,e.return,S)}break;case 4:De(n,e),He(e);break;case 13:De(n,e),He(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(fs=G())),o&4&&Wa(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(de=(u=de)||d,De(n,e),de=u):De(n,e),He(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(j=e,d=e.child;d!==null;){for(m=j=d;j!==null;){switch(f=j,v=f.child,f.tag){case 0:case 11:case 14:case 15:Jt(4,f,f.return);break;case 1:ct(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){o=f,t=f.return;try{n=o,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(S){V(o,t,S)}}break;case 5:ct(f,f.return);break;case 22:if(f.memoizedState!==null){Va(m);continue}}v!==null?(v.return=f,j=v):Va(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{r=m.stateNode,u?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Vu("display",l))}catch(S){V(e,e.return,S)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(S){V(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:De(n,e),He(e),o&4&&Wa(e);break;case 21:break;default:De(n,e),He(e)}}function He(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(yd(t)){var o=t;break e}t=t.return}throw Error(w(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(to(r,""),o.flags&=-33);var i=Ba(e);hl(e,i,r);break;case 3:case 4:var l=o.stateNode.containerInfo,s=Ba(e);gl(e,s,l);break;default:throw Error(w(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function jf(e,n,t){j=e,xd(e)}function xd(e,n,t){for(var o=(e.mode&1)!==0;j!==null;){var r=j,i=r.child;if(r.tag===22&&o){var l=r.memoizedState!==null||Bo;if(!l){var s=r.alternate,a=s!==null&&s.memoizedState!==null||de;s=Bo;var u=de;if(Bo=l,(de=a)&&!u)for(j=r;j!==null;)l=j,a=l.child,l.tag===22&&l.memoizedState!==null?Qa(r):a!==null?(a.return=l,j=a):Qa(r);for(;i!==null;)j=i,xd(i),i=i.sibling;j=r,Bo=s,de=u}Ha(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,j=i):Ha(e)}}function Ha(e){for(;j!==null;){var n=j;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:de||Ir(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!de)if(t===null)o.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Oe(n.type,t.memoizedProps);o.componentDidUpdate(r,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Ea(n,i,o);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ea(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&lo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}de||n.flags&512&&fl(n)}catch(f){V(n,n.return,f)}}if(n===e){j=null;break}if(t=n.sibling,t!==null){t.return=n.return,j=t;break}j=n.return}}function Va(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var t=n.sibling;if(t!==null){t.return=n.return,j=t;break}j=n.return}}function Qa(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ir(4,n)}catch(a){V(n,t,a)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var r=n.return;try{o.componentDidMount()}catch(a){V(n,r,a)}}var i=n.return;try{fl(n)}catch(a){V(n,i,a)}break;case 5:var l=n.return;try{fl(n)}catch(a){V(n,l,a)}}}catch(a){V(n,n.return,a)}if(n===e){j=null;break}var s=n.sibling;if(s!==null){s.return=n.return,j=s;break}j=n.return}}var Ef=Math.ceil,Pr=sn.ReactCurrentDispatcher,ms=sn.ReactCurrentOwner,$e=sn.ReactCurrentBatchConfig,L=0,ie=null,X=null,se=0,Pe=0,dt=Tn(0),ne=0,vo=null,Yn=0,Fr=0,ps=0,Zt=null,ye=null,fs=0,wt=1/0,Xe=null,wr=!1,yl=null,Pn=null,Wo=!1,hn=null,_r=0,eo=0,vl=null,nr=-1,tr=0;function fe(){return L&6?G():nr!==-1?nr:nr=G()}function wn(e){return e.mode&1?L&2&&se!==0?se&-se:df.transition!==null?(tr===0&&(tr=rc()),tr):(e=D,e!==0||(e=window.event,e=e===void 0?16:dc(e.type)),e):1}function Ue(e,n,t,o){if(50<eo)throw eo=0,vl=null,Error(w(185));ko(e,t,o),(!(L&2)||e!==ie)&&(e===ie&&(!(L&2)&&(Fr|=t),ne===4&&fn(e,se)),Se(e,o),t===1&&L===0&&!(n.mode&1)&&(wt=G()+500,Dr&&Nn()))}function Se(e,n){var t=e.callbackNode;cp(e,n);var o=ar(e,e===ie?se:0);if(o===0)t!==null&&na(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&na(t),n===1)e.tag===0?cf(Ya.bind(null,e)):Tc(Ya.bind(null,e)),lf(function(){!(L&6)&&Nn()}),t=null;else{switch(ic(o)){case 1:t=Al;break;case 4:t=tc;break;case 16:t=sr;break;case 536870912:t=oc;break;default:t=sr}t=Ed(t,Sd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Sd(e,n){if(nr=-1,tr=0,L&6)throw Error(w(327));var t=e.callbackNode;if(yt()&&e.callbackNode!==t)return null;var o=ar(e,e===ie?se:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=Rr(e,o);else{n=o;var r=L;L|=2;var i=Pd();(ie!==e||se!==n)&&(Xe=null,wt=G()+500,Bn(e,n));do try{Nf();break}catch(s){kd(e,s)}while(!0);Zl(),Pr.current=i,L=r,X!==null?n=0:(ie=null,se=0,n=ne)}if(n!==0){if(n===2&&(r=Vi(e),r!==0&&(o=r,n=Cl(e,r))),n===1)throw t=vo,Bn(e,0),fn(e,o),Se(e,G()),t;if(n===6)fn(e,o);else{if(r=e.current.alternate,!(o&30)&&!bf(r)&&(n=Rr(e,o),n===2&&(i=Vi(e),i!==0&&(o=i,n=Cl(e,i))),n===1))throw t=vo,Bn(e,0),fn(e,o),Se(e,G()),t;switch(e.finishedWork=r,e.finishedLanes=o,n){case 0:case 1:throw Error(w(345));case 2:In(e,ye,Xe);break;case 3:if(fn(e,o),(o&130023424)===o&&(n=fs+500-G(),10<n)){if(ar(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){fe(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Zi(In.bind(null,e,ye,Xe),n);break}In(e,ye,Xe);break;case 4:if(fn(e,o),(o&4194240)===o)break;for(n=e.eventTimes,r=-1;0<o;){var l=31-Ae(o);i=1<<l,l=n[l],l>r&&(r=l),o&=~i}if(o=r,o=G()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Ef(o/1960))-o,10<o){e.timeoutHandle=Zi(In.bind(null,e,ye,Xe),o);break}In(e,ye,Xe);break;case 5:In(e,ye,Xe);break;default:throw Error(w(329))}}}return Se(e,G()),e.callbackNode===t?Sd.bind(null,e):null}function Cl(e,n){var t=Zt;return e.current.memoizedState.isDehydrated&&(Bn(e,n).flags|=256),e=Rr(e,n),e!==2&&(n=ye,ye=t,n!==null&&xl(n)),e}function xl(e){ye===null?ye=e:ye.push.apply(ye,e)}function bf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var r=t[o],i=r.getSnapshot;r=r.value;try{if(!Be(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fn(e,n){for(n&=~ps,n&=~Fr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ae(n),o=1<<t;e[t]=-1,n&=~o}}function Ya(e){if(L&6)throw Error(w(327));yt();var n=ar(e,0);if(!(n&1))return Se(e,G()),null;var t=Rr(e,n);if(e.tag!==0&&t===2){var o=Vi(e);o!==0&&(n=o,t=Cl(e,o))}if(t===1)throw t=vo,Bn(e,0),fn(e,n),Se(e,G()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,In(e,ye,Xe),Se(e,G()),null}function gs(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(wt=G()+500,Dr&&Nn())}}function Kn(e){hn!==null&&hn.tag===0&&!(L&6)&&yt();var n=L;L|=1;var t=$e.transition,o=D;try{if($e.transition=null,D=1,e)return e()}finally{D=o,$e.transition=t,L=n,!(L&6)&&Nn()}}function hs(){Pe=dt.current,I(dt)}function Bn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,rf(t)),X!==null)for(t=X.return;t!==null;){var o=t;switch(ql(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&pr();break;case 3:kt(),I(Ce),I(me),is();break;case 5:rs(o);break;case 4:kt();break;case 13:I(U);break;case 19:I(U);break;case 10:es(o.type._context);break;case 22:case 23:hs()}t=t.return}if(ie=e,X=e=_n(e.current,null),se=Pe=n,ne=0,vo=null,ps=Fr=Yn=0,ye=Zt=null,An!==null){for(n=0;n<An.length;n++)if(t=An[n],o=t.interleaved,o!==null){t.interleaved=null;var r=o.next,i=t.pending;if(i!==null){var l=i.next;i.next=r,o.next=l}t.pending=o}An=null}return e}function kd(e,n){do{var t=X;try{if(Zl(),Jo.current=kr,Sr){for(var o=B.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Sr=!1}if(Qn=0,re=ee=B=null,Xt=!1,go=0,ms.current=null,t===null||t.return===null){ne=1,vo=n,X=null;break}e:{var i=e,l=t.return,s=t,a=n;if(n=se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=La(l);if(v!==null){v.flags&=-257,Da(v,l,s,i,n),v.mode&1&&Ma(i,u,n),n=v,a=u;var x=n.updateQueue;if(x===null){var S=new Set;S.add(a),n.updateQueue=S}else x.add(a);break e}else{if(!(n&1)){Ma(i,u,n),ys();break e}a=Error(w(426))}}else if(F&&s.mode&1){var P=La(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Da(P,l,s,i,n),Xl(Pt(a,s));break e}}i=a=Pt(a,s),ne!==4&&(ne=2),Zt===null?Zt=[i]:Zt.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=id(i,a,n);ja(i,g);break e;case 1:s=a;var p=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Pn===null||!Pn.has(h)))){i.flags|=65536,n&=-n,i.lanes|=n;var C=ld(i,s,n);ja(i,C);break e}}i=i.return}while(i!==null)}_d(t)}catch(k){n=k,X===t&&t!==null&&(X=t=t.return);continue}break}while(!0)}function Pd(){var e=Pr.current;return Pr.current=kr,e===null?kr:e}function ys(){(ne===0||ne===3||ne===2)&&(ne=4),ie===null||!(Yn&268435455)&&!(Fr&268435455)||fn(ie,se)}function Rr(e,n){var t=L;L|=2;var o=Pd();(ie!==e||se!==n)&&(Xe=null,Bn(e,n));do try{Tf();break}catch(r){kd(e,r)}while(!0);if(Zl(),L=t,Pr.current=o,X!==null)throw Error(w(261));return ie=null,se=0,ne}function Tf(){for(;X!==null;)wd(X)}function Nf(){for(;X!==null&&!np();)wd(X)}function wd(e){var n=jd(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?_d(e):X=n,ms.current=null}function _d(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=wf(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,X=null;return}}else if(t=Pf(t,n,Pe),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);ne===0&&(ne=5)}function In(e,n,t){var o=D,r=$e.transition;try{$e.transition=null,D=1,$f(e,n,t,o)}finally{$e.transition=r,D=o}return null}function $f(e,n,t,o){do yt();while(hn!==null);if(L&6)throw Error(w(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(dp(e,i),e===ie&&(X=ie=null,se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Wo||(Wo=!0,Ed(sr,function(){return yt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=$e.transition,$e.transition=null;var l=D;D=1;var s=L;L|=4,ms.current=null,Rf(e,t),Cd(t,e),Xp(Xi),ur=!!qi,Xi=qi=null,e.current=t,jf(t),tp(),L=s,D=l,$e.transition=i}else e.current=t;if(Wo&&(Wo=!1,hn=e,_r=r),i=e.pendingLanes,i===0&&(Pn=null),ip(t.stateNode),Se(e,G()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],o(r.value,{componentStack:r.stack,digest:r.digest});if(wr)throw wr=!1,e=yl,yl=null,e;return _r&1&&e.tag!==0&&yt(),i=e.pendingLanes,i&1?e===vl?eo++:(eo=0,vl=e):eo=0,Nn(),null}function yt(){if(hn!==null){var e=ic(_r),n=$e.transition,t=D;try{if($e.transition=null,D=16>e?16:e,hn===null)var o=!1;else{if(e=hn,hn=null,_r=0,L&6)throw Error(w(331));var r=L;for(L|=4,j=e.current;j!==null;){var i=j,l=i.child;if(j.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(j=u;j!==null;){var d=j;switch(d.tag){case 0:case 11:case 15:Jt(8,d,i)}var m=d.child;if(m!==null)m.return=d,j=m;else for(;j!==null;){d=j;var f=d.sibling,v=d.return;if(hd(d),d===u){j=null;break}if(f!==null){f.return=v,j=f;break}j=v}}}var x=i.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}j=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,j=l;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Jt(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,j=g;break e}j=i.return}}var p=e.current;for(j=p;j!==null;){l=j;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,j=h;else e:for(l=p;j!==null;){if(s=j,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ir(9,s)}}catch(k){V(s,s.return,k)}if(s===l){j=null;break e}var C=s.sibling;if(C!==null){C.return=s.return,j=C;break e}j=s.return}}if(L=r,Nn(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Tr,e)}catch{}o=!0}return o}finally{D=t,$e.transition=n}}return!1}function Ka(e,n,t){n=Pt(t,n),n=id(e,n,1),e=kn(e,n,1),n=fe(),e!==null&&(ko(e,1,n),Se(e,n))}function V(e,n,t){if(e.tag===3)Ka(e,e,t);else for(;n!==null;){if(n.tag===3){Ka(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pn===null||!Pn.has(o))){e=Pt(t,e),e=ld(n,e,1),n=kn(n,e,1),e=fe(),n!==null&&(ko(n,1,e),Se(n,e));break}}n=n.return}}function Mf(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=fe(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(se&t)===t&&(ne===4||ne===3&&(se&130023424)===se&&500>G()-fs?Bn(e,0):ps|=t),Se(e,n)}function Rd(e,n){n===0&&(e.mode&1?(n=Mo,Mo<<=1,!(Mo&130023424)&&(Mo=4194304)):n=1);var t=fe();e=rn(e,n),e!==null&&(ko(e,n,t),Se(e,t))}function Lf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Rd(e,t)}function Df(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(w(314))}o!==null&&o.delete(n),Rd(e,t)}var jd;jd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ce.current)ve=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ve=!1,kf(e,n,t);ve=!!(e.flags&131072)}else ve=!1,F&&n.flags&1048576&&Nc(n,hr,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;er(e,n),e=n.pendingProps;var r=Ct(n,me.current);ht(n,t),r=ss(null,n,o,e,r,t);var i=as();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,xe(o)?(i=!0,fr(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ts(n),r.updater=zr,n.stateNode=r,r._reactInternals=n,ll(n,o,e,t),n=ul(null,n,o,!0,i,t)):(n.tag=0,F&&i&&Gl(n),pe(null,n,r,t),n=n.child),n;case 16:o=n.elementType;e:{switch(er(e,n),e=n.pendingProps,r=o._init,o=r(o._payload),n.type=o,r=n.tag=zf(o),e=Oe(o,e),r){case 0:n=al(null,n,o,e,t);break e;case 1:n=Ia(null,n,o,e,t);break e;case 11:n=Oa(null,n,o,e,t);break e;case 14:n=za(null,n,o,Oe(o.type,e),t);break e}throw Error(w(306,o,""))}return n;case 0:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Oe(o,r),al(e,n,o,r,t);case 1:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Oe(o,r),Ia(e,n,o,r,t);case 3:e:{if(cd(n),e===null)throw Error(w(387));o=n.pendingProps,i=n.memoizedState,r=i.element,zc(e,n),Cr(n,o,null,t);var l=n.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=Pt(Error(w(423)),n),n=Fa(e,n,o,t,r);break e}else if(o!==r){r=Pt(Error(w(424)),n),n=Fa(e,n,o,t,r);break e}else for(we=Sn(n.stateNode.containerInfo.firstChild),_e=n,F=!0,Fe=null,t=Dc(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(xt(),o===r){n=ln(e,n,t);break e}pe(e,n,o,t)}n=n.child}return n;case 5:return Ic(n),e===null&&ol(n),o=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,l=r.children,Ji(o,r)?l=null:i!==null&&Ji(o,i)&&(n.flags|=32),ud(e,n),pe(e,n,l,t),n.child;case 6:return e===null&&ol(n),null;case 13:return dd(e,n,t);case 4:return os(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=St(n,null,o,t):pe(e,n,o,t),n.child;case 11:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Oe(o,r),Oa(e,n,o,r,t);case 7:return pe(e,n,n.pendingProps,t),n.child;case 8:return pe(e,n,n.pendingProps.children,t),n.child;case 12:return pe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,r=n.pendingProps,i=n.memoizedProps,l=r.value,O(yr,o._currentValue),o._currentValue=l,i!==null)if(Be(i.value,l)){if(i.children===r.children&&!Ce.current){n=ln(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===o){if(i.tag===1){a=nn(-1,t&-t),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),rl(i.return,t,n),s.lanes|=t;break}a=a.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(w(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),rl(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}pe(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,o=n.pendingProps.children,ht(n,t),r=Me(r),o=o(r),n.flags|=1,pe(e,n,o,t),n.child;case 14:return o=n.type,r=Oe(o,n.pendingProps),r=Oe(o.type,r),za(e,n,o,r,t);case 15:return sd(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Oe(o,r),er(e,n),n.tag=1,xe(o)?(e=!0,fr(n)):e=!1,ht(n,t),rd(n,o,r),ll(n,o,r,t),ul(null,n,o,!0,e,t);case 19:return md(e,n,t);case 22:return ad(e,n,t)}throw Error(w(156,n.tag))};function Ed(e,n){return nc(e,n)}function Of(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,n,t,o){return new Of(e,n,t,o)}function vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zf(e){if(typeof e=="function")return vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zl)return 11;if(e===Il)return 14}return 2}function _n(e,n){var t=e.alternate;return t===null?(t=Ne(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function or(e,n,t,o,r,i){var l=2;if(o=e,typeof e=="function")vs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case nt:return Wn(t.children,r,i,n);case Ol:l=8,r|=8;break;case Ti:return e=Ne(12,t,n,r|2),e.elementType=Ti,e.lanes=i,e;case Ni:return e=Ne(13,t,n,r),e.elementType=Ni,e.lanes=i,e;case $i:return e=Ne(19,t,n,r),e.elementType=$i,e.lanes=i,e;case Iu:return Ar(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ou:l=10;break e;case zu:l=9;break e;case zl:l=11;break e;case Il:l=14;break e;case dn:l=16,o=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=Ne(l,t,n,r),n.elementType=e,n.type=o,n.lanes=i,n}function Wn(e,n,t,o){return e=Ne(7,e,o,n),e.lanes=t,e}function Ar(e,n,t,o){return e=Ne(22,e,o,n),e.elementType=Iu,e.lanes=t,e.stateNode={isHidden:!1},e}function Pi(e,n,t){return e=Ne(6,e,null,n),e.lanes=t,e}function wi(e,n,t){return n=Ne(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function If(e,n,t,o,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cs(e,n,t,o,r,i,l,s,a){return e=new If(e,n,t,s,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ne(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ts(i),e}function Ff(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:et,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function bd(e){if(!e)return En;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(xe(t))return bc(e,t,n)}return n}function Td(e,n,t,o,r,i,l,s,a){return e=Cs(t,o,!0,e,r,i,l,s,a),e.context=bd(null),t=e.current,o=fe(),r=wn(t),i=nn(o,r),i.callback=n??null,kn(t,i,r),e.current.lanes=r,ko(e,r,o),Se(e,o),e}function Ur(e,n,t,o){var r=n.current,i=fe(),l=wn(r);return t=bd(t),n.context===null?n.context=t:n.pendingContext=t,n=nn(i,l),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=kn(r,n,l),e!==null&&(Ue(e,r,l,i),Xo(e,r,l)),l}function jr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ga(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function xs(e,n){Ga(e,n),(e=e.alternate)&&Ga(e,n)}function Af(){return null}var Nd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ss(e){this._internalRoot=e}Br.prototype.render=Ss.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));Ur(e,n,null,null)};Br.prototype.unmount=Ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Kn(function(){Ur(null,e,null,null)}),n[on]=null}};function Br(e){this._internalRoot=e}Br.prototype.unstable_scheduleHydration=function(e){if(e){var n=ac();e={blockedOn:null,target:e,priority:n};for(var t=0;t<pn.length&&n!==0&&n<pn[t].priority;t++);pn.splice(t,0,e),t===0&&cc(e)}};function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qa(){}function Uf(e,n,t,o,r){if(r){if(typeof o=="function"){var i=o;o=function(){var u=jr(l);i.call(u)}}var l=Td(n,o,e,0,null,!1,!1,"",qa);return e._reactRootContainer=l,e[on]=l.current,uo(e.nodeType===8?e.parentNode:e),Kn(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var s=o;o=function(){var u=jr(a);s.call(u)}}var a=Cs(e,0,!1,null,null,!1,!1,"",qa);return e._reactRootContainer=a,e[on]=a.current,uo(e.nodeType===8?e.parentNode:e),Kn(function(){Ur(n,a,t,o)}),a}function Hr(e,n,t,o,r){var i=t._reactRootContainer;if(i){var l=i;if(typeof r=="function"){var s=r;r=function(){var a=jr(l);s.call(a)}}Ur(n,l,e,r)}else l=Uf(t,n,e,r,o);return jr(l)}lc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Wt(n.pendingLanes);t!==0&&(Ul(n,t|1),Se(n,G()),!(L&6)&&(wt=G()+500,Nn()))}break;case 13:Kn(function(){var o=rn(e,1);if(o!==null){var r=fe();Ue(o,e,1,r)}}),xs(e,1)}};Bl=function(e){if(e.tag===13){var n=rn(e,134217728);if(n!==null){var t=fe();Ue(n,e,134217728,t)}xs(e,134217728)}};sc=function(e){if(e.tag===13){var n=wn(e),t=rn(e,n);if(t!==null){var o=fe();Ue(t,e,n,o)}xs(e,n)}};ac=function(){return D};uc=function(e,n){var t=D;try{return D=e,n()}finally{D=t}};Bi=function(e,n,t){switch(n){case"input":if(Di(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var r=Lr(o);if(!r)throw Error(w(90));Au(o),Di(o,r)}}}break;case"textarea":Bu(e,t);break;case"select":n=t.value,n!=null&&mt(e,!!t.multiple,n,!1)}};Gu=gs;qu=Kn;var Bf={usingClientEntryPoint:!1,Events:[wo,it,Lr,Yu,Ku,gs]},At={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wf={bundleType:At.bundleType,version:At.version,rendererPackageName:At.rendererPackageName,rendererConfig:At.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zu(e),e===null?null:e.stateNode},findFiberByHostInstance:At.findFiberByHostInstance||Af,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{Tr=Ho.inject(Wf),Ke=Ho}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bf;je.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(n))throw Error(w(200));return Ff(e,n,null,t)};je.createRoot=function(e,n){if(!ks(e))throw Error(w(299));var t=!1,o="",r=Nd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Cs(e,1,!1,null,null,t,!1,o,r),e[on]=n.current,uo(e.nodeType===8?e.parentNode:e),new Ss(n)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Zu(n),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Kn(e)};je.hydrate=function(e,n,t){if(!Wr(n))throw Error(w(200));return Hr(null,e,n,!0,t)};je.hydrateRoot=function(e,n,t){if(!ks(e))throw Error(w(405));var o=t!=null&&t.hydratedSources||null,r=!1,i="",l=Nd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Td(n,null,e,1,t??null,r,!1,i,l),e[on]=n.current,uo(e),o)for(e=0;e<o.length;e++)t=o[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Br(n)};je.render=function(e,n,t){if(!Wr(n))throw Error(w(200));return Hr(null,e,n,!1,t)};je.unmountComponentAtNode=function(e){if(!Wr(e))throw Error(w(40));return e._reactRootContainer?(Kn(function(){Hr(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1};je.unstable_batchedUpdates=gs;je.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!Wr(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Hr(e,n,t,!1,o)};je.version="18.3.1-next-f1338f8080-20240426";function $d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($d)}catch(e){console.error(e)}}$d(),$u.exports=je;var ze=$u.exports,Md,Xa=ze;Md=Ei.createRoot=Xa.createRoot,Ei.hydrateRoot=Xa.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Co.apply(null,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Ja="popstate";function Hf(e){e===void 0&&(e={});function n(r,i){let{pathname:l="/",search:s="",hash:a=""}=Xn(r.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Sl("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){let l=r.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let a=r.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:Er(i))}function o(r,i){Ps(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Qf(n,t,o,e)}function q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ps(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Vf(){return Math.random().toString(36).substr(2,8)}function Za(e,n){return{usr:e.state,key:e.key,idx:n}}function Sl(e,n,t,o){return t===void 0&&(t=null),Co({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Xn(n):n,{state:t,key:n&&n.key||o||Vf()})}function Er(e){let{pathname:n="/",search:t="",hash:o=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Xn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let o=e.indexOf("?");o>=0&&(n.search=e.substr(o),e=e.substr(0,o)),e&&(n.pathname=e)}return n}function Qf(e,n,t,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:i=!1}=o,l=r.history,s=yn.Pop,a=null,u=d();u==null&&(u=0,l.replaceState(Co({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function m(){s=yn.Pop;let P=d(),g=P==null?null:P-u;u=P,a&&a({action:s,location:S.location,delta:g})}function f(P,g){s=yn.Push;let p=Sl(S.location,P,g);t&&t(p,P),u=d()+1;let h=Za(p,u),C=S.createHref(p);try{l.pushState(h,"",C)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;r.location.assign(C)}i&&a&&a({action:s,location:S.location,delta:1})}function v(P,g){s=yn.Replace;let p=Sl(S.location,P,g);t&&t(p,P),u=d();let h=Za(p,u),C=S.createHref(p);l.replaceState(h,"",C),i&&a&&a({action:s,location:S.location,delta:0})}function x(P){let g=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof P=="string"?P:Er(P);return p=p.replace(/ $/,"%20"),q(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let S={get action(){return s},get location(){return e(r,l)},listen(P){if(a)throw new Error("A history only accepts one active listener");return r.addEventListener(Ja,m),a=P,()=>{r.removeEventListener(Ja,m),a=null}},createHref(P){return n(r,P)},createURL:x,encodeLocation(P){let g=x(P);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(P){return l.go(P)}};return S}var eu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(eu||(eu={}));function Yf(e,n,t){return t===void 0&&(t="/"),Kf(e,n,t)}function Kf(e,n,t,o){let r=typeof n=="string"?Xn(n):n,i=ws(r.pathname||"/",t);if(i==null)return null;let l=Ld(e);Gf(l);let s=null,a=sg(i);for(let u=0;s==null&&u<l.length;++u)s=rg(l[u],a);return s}function Ld(e,n,t,o){n===void 0&&(n=[]),t===void 0&&(t=[]),o===void 0&&(o="");let r=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(q(a.relativePath.startsWith(o),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(o.length));let u=Rn([o,a.relativePath]),d=t.concat(a);i.children&&i.children.length>0&&(q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ld(i.children,n,d,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:tg(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))r(i,l);else for(let a of Dd(i.path))r(i,l,a)}),n}function Dd(e){let n=e.split("/");if(n.length===0)return[];let[t,...o]=n,r=t.endsWith("?"),i=t.replace(/\?$/,"");if(o.length===0)return r?[i,""]:[i];let l=Dd(o.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),r&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Gf(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:og(n.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const qf=/^:[\w-]+$/,Xf=3,Jf=2,Zf=1,eg=10,ng=-2,nu=e=>e==="*";function tg(e,n){let t=e.split("/"),o=t.length;return t.some(nu)&&(o+=ng),n&&(o+=Jf),t.filter(r=>!nu(r)).reduce((r,i)=>r+(qf.test(i)?Xf:i===""?Zf:eg),o)}function og(e,n){return e.length===n.length&&e.slice(0,-1).every((o,r)=>o===n[r])?e[e.length-1]-n[n.length-1]:0}function rg(e,n,t){let{routesMeta:o}=e,r={},i="/",l=[];for(let s=0;s<o.length;++s){let a=o[s],u=s===o.length-1,d=i==="/"?n:n.slice(i.length)||"/",m=ig({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),f=a.route;if(!m)return null;Object.assign(r,m.params),l.push({params:r,pathname:Rn([i,m.pathname]),pathnameBase:cg(Rn([i,m.pathnameBase])),route:f}),m.pathnameBase!=="/"&&(i=Rn([i,m.pathnameBase]))}return l}function ig(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,o]=lg(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:o.reduce((u,d,m)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let S=s[m]||"";l=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const x=s[m];return v&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function lg(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ps(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(o.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),o]}function sg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ps(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ws(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,o=e.charAt(t);return o&&o!=="/"?null:e.slice(t)||"/"}function ag(e,n){n===void 0&&(n="/");let{pathname:t,search:o="",hash:r=""}=typeof e=="string"?Xn(e):e,i;return t?(t=Od(t),t.startsWith("/")?i=tu(t.substring(1),"/"):i=tu(t,n)):i=n,{pathname:i,search:dg(o),hash:mg(r)}}function tu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function _i(e,n,t,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ug(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function _s(e,n){let t=ug(e);return n?t.map((o,r)=>r===t.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function Rs(e,n,t,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=Xn(e):(r=Co({},e),q(!r.pathname||!r.pathname.includes("?"),_i("?","pathname","search",r)),q(!r.pathname||!r.pathname.includes("#"),_i("#","pathname","hash",r)),q(!r.search||!r.search.includes("#"),_i("#","search","hash",r)));let i=e===""||r.pathname==="",l=i?"/":r.pathname,s;if(l==null)s=t;else{let m=n.length-1;if(!o&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),m-=1;r.pathname=f.join("/")}s=m>=0?n[m]:"/"}let a=ag(r,s),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Od=e=>e.replace(/\/\/+/g,"/"),Rn=e=>Od(e.join("/")),cg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function pg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zd=["post","put","patch","delete"];new Set(zd);const fg=["get",...zd];new Set(fg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},xo.apply(null,arguments)}const js=y.createContext(null),gg=y.createContext(null),$n=y.createContext(null),Vr=y.createContext(null),an=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Id=y.createContext(null);function hg(e,n){let{relative:t}=n===void 0?{}:n;bt()||q(!1);let{basename:o,navigator:r}=y.useContext($n),{hash:i,pathname:l,search:s}=Ud(e,{relative:t}),a=l;return o!=="/"&&(a=l==="/"?o:Rn([o,l])),r.createHref({pathname:a,search:s,hash:i})}function bt(){return y.useContext(Vr)!=null}function Tt(){return bt()||q(!1),y.useContext(Vr).location}function Fd(e){y.useContext($n).static||y.useLayoutEffect(e)}function Ad(){let{isDataRoute:e}=y.useContext(an);return e?Tg():yg()}function yg(){bt()||q(!1);let e=y.useContext(js),{basename:n,future:t,navigator:o}=y.useContext($n),{matches:r}=y.useContext(an),{pathname:i}=Tt(),l=JSON.stringify(_s(r,t.v7_relativeSplatPath)),s=y.useRef(!1);return Fd(()=>{s.current=!0}),y.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){o.go(u);return}let m=Rs(u,JSON.parse(l),i,d.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:Rn([n,m.pathname])),(d.replace?o.replace:o.push)(m,d.state,d)},[n,o,l,i,e])}function vg(){let{matches:e}=y.useContext(an),n=e[e.length-1];return n?n.params:{}}function Ud(e,n){let{relative:t}=n===void 0?{}:n,{future:o}=y.useContext($n),{matches:r}=y.useContext(an),{pathname:i}=Tt(),l=JSON.stringify(_s(r,o.v7_relativeSplatPath));return y.useMemo(()=>Rs(e,JSON.parse(l),i,t==="path"),[e,l,i,t])}function Cg(e,n){return xg(e,n)}function xg(e,n,t,o){bt()||q(!1);let{navigator:r}=y.useContext($n),{matches:i}=y.useContext(an),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=Tt(),d;if(n){var m;let P=typeof n=="string"?Xn(n):n;a==="/"||(m=P.pathname)!=null&&m.startsWith(a)||q(!1),d=P}else d=u;let f=d.pathname||"/",v=f;if(a!=="/"){let P=a.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(P.length).join("/")}let x=Yf(e,{pathname:v}),S=_g(x&&x.map(P=>Object.assign({},P,{params:Object.assign({},s,P.params),pathname:Rn([a,r.encodeLocation?r.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?a:Rn([a,r.encodeLocation?r.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),i,t,o);return n&&S?y.createElement(Vr.Provider,{value:{location:xo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:yn.Pop}},S):S}function Sg(){let e=bg(),n=pg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:r},t):null,null)}const kg=y.createElement(Sg,null);class Pg extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(an.Provider,{value:this.props.routeContext},y.createElement(Id.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wg(e){let{routeContext:n,match:t,children:o}=e,r=y.useContext(js);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(an.Provider,{value:n},o)}function _g(e,n,t,o){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),o===void 0&&(o=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=o)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,s=(r=t)==null?void 0:r.errors;if(s!=null){let d=l.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);d>=0||q(!1),l=l.slice(0,Math.min(l.length,d+1))}let a=!1,u=-1;if(t&&o&&o.v7_partialHydration)for(let d=0;d<l.length;d++){let m=l[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=d),m.route.id){let{loaderData:f,errors:v}=t,x=m.route.loader&&f[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||x){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,m,f)=>{let v,x=!1,S=null,P=null;t&&(v=s&&m.route.id?s[m.route.id]:void 0,S=m.route.errorElement||kg,a&&(u<0&&f===0?(Ng("route-fallback"),x=!0,P=null):u===f&&(x=!0,P=m.route.hydrateFallbackElement||null)));let g=n.concat(l.slice(0,f+1)),p=()=>{let h;return v?h=S:x?h=P:m.route.Component?h=y.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=d,y.createElement(wg,{match:m,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:h})};return t&&(m.route.ErrorBoundary||m.route.errorElement||f===0)?y.createElement(Pg,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Bd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bd||{}),Wd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Wd||{});function Rg(e){let n=y.useContext(js);return n||q(!1),n}function jg(e){let n=y.useContext(gg);return n||q(!1),n}function Eg(e){let n=y.useContext(an);return n||q(!1),n}function Hd(e){let n=Eg(),t=n.matches[n.matches.length-1];return t.route.id||q(!1),t.route.id}function bg(){var e;let n=y.useContext(Id),t=jg(),o=Hd();return n!==void 0?n:(e=t.errors)==null?void 0:e[o]}function Tg(){let{router:e}=Rg(Bd.UseNavigateStable),n=Hd(Wd.UseNavigateStable),t=y.useRef(!1);return Fd(()=>{t.current=!0}),y.useCallback(function(r,i){i===void 0&&(i={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,xo({fromRouteId:n},i)))},[e,n])}const ou={};function Ng(e,n,t){ou[e]||(ou[e]=!0)}function $g(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function kl(e){let{to:n,replace:t,state:o,relative:r}=e;bt()||q(!1);let{future:i,static:l}=y.useContext($n),{matches:s}=y.useContext(an),{pathname:a}=Tt(),u=Ad(),d=Rs(n,_s(s,i.v7_relativeSplatPath),a,r==="path"),m=JSON.stringify(d);return y.useEffect(()=>u(JSON.parse(m),{replace:t,state:o,relative:r}),[u,m,r,t,o]),null}function Vt(e){q(!1)}function Mg(e){let{basename:n="/",children:t=null,location:o,navigationType:r=yn.Pop,navigator:i,static:l=!1,future:s}=e;bt()&&q(!1);let a=n.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:a,navigator:i,static:l,future:xo({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof o=="string"&&(o=Xn(o));let{pathname:d="/",search:m="",hash:f="",state:v=null,key:x="default"}=o,S=y.useMemo(()=>{let P=ws(d,a);return P==null?null:{location:{pathname:P,search:m,hash:f,state:v,key:x},navigationType:r}},[a,d,m,f,v,x,r]);return S==null?null:y.createElement($n.Provider,{value:u},y.createElement(Vr.Provider,{children:t,value:S}))}function Lg(e){let{children:n,location:t}=e;return Cg(Pl(n),t)}new Promise(()=>{});function Pl(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(o,r)=>{if(!y.isValidElement(o))return;let i=[...n,r];if(o.type===y.Fragment){t.push.apply(t,Pl(o.props.children,i));return}o.type!==Vt&&q(!1),!o.props.index||!o.props.children||q(!1);let l={id:o.props.id||i.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(l.children=Pl(o.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},wl.apply(null,arguments)}function Dg(e,n){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)!==-1)continue;t[o]=e[o]}return t}function Og(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zg(e,n){return e.button===0&&(!n||n==="_self")&&!Og(e)}const Ig=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fg="6";try{window.__reactRouterVersion=Fg}catch{}const Ag="startTransition",ru=$m[Ag];function Ug(e){let{basename:n,children:t,future:o,window:r}=e,i=y.useRef();i.current==null&&(i.current=Hf({window:r,v5Compat:!0}));let l=i.current,[s,a]=y.useState({action:l.action,location:l.location}),{v7_startTransition:u}=o||{},d=y.useCallback(m=>{u&&ru?ru(()=>a(m)):a(m)},[a,u]);return y.useLayoutEffect(()=>l.listen(d),[l,d]),y.useEffect(()=>$g(o),[o]),y.createElement(Mg,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:l,future:o})}const Bg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_l=y.forwardRef(function(n,t){let{onClick:o,relative:r,reloadDocument:i,replace:l,state:s,target:a,to:u,preventScrollReset:d,viewTransition:m}=n,f=Dg(n,Ig),{basename:v}=y.useContext($n),x,S=!1;if(typeof u=="string"&&Wg.test(u)&&(x=u,Bg))try{let h=new URL(window.location.href),C=u.startsWith("//")?new URL(h.protocol+u):new URL(u),k=ws(C.pathname,v);C.origin===h.origin&&k!=null?u=k+C.search+C.hash:S=!0}catch{}let P=hg(u,{relative:r}),g=Hg(u,{replace:l,state:s,target:a,preventScrollReset:d,relative:r,viewTransition:m});function p(h){o&&o(h),h.defaultPrevented||g(h)}return y.createElement("a",wl({},f,{href:x||P,onClick:S||i?o:p,ref:t,target:a}))});var iu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(iu||(iu={}));var lu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lu||(lu={}));function Hg(e,n){let{target:t,replace:o,state:r,preventScrollReset:i,relative:l,viewTransition:s}=n===void 0?{}:n,a=Ad(),u=Tt(),d=Ud(e,{relative:l});return y.useCallback(m=>{if(zg(m,t)){m.preventDefault();let f=o!==void 0?o:Er(u)===Er(d);a(e,{replace:f,state:r,preventScrollReset:i,relative:l,viewTransition:s})}},[u,a,d,o,r,t,e,i,l,s])}const Vg="https://github.com/frankvane/vane-components";class Qg extends Qe.Component{constructor(){super(...arguments);Bs(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?c.jsxs("div",{className:"crash",role:"alert",children:[c.jsx("h3",{children:"这个页面炸了"}),c.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),c.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Vd(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function Yg({demos:e,pathname:n}){var a;const{groups:t,entries:o,label:r}=e,i=(a=o.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:a.meta.group,[l,s]=y.useState(()=>{var d;const u=(d=t[0])==null?void 0:d.key;return Object.fromEntries(t.map(m=>[m.key,m.key===(i??u)]))});return y.useEffect(()=>{i&&s(u=>u[i]?u:{...u,[i]:!0})},[i]),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-head",children:[c.jsx("span",{children:r}),c.jsxs("code",{children:[o.length," demos"]})]}),t.map(u=>{const d=o.filter(f=>f.meta.group===u.key);if(d.length===0)return null;const m=l[u.key]??!1;return c.jsxs("div",{className:"nav-group",children:[c.jsxs("button",{type:"button",className:`nav-group-head${i===u.key?" is-current":""}`,onClick:()=>s(f=>({...f,[u.key]:!m})),"aria-expanded":m,children:[c.jsx("span",{className:`nav-caret${m?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,c.jsx("code",{children:d.length})]}),m?c.jsx("div",{className:"nav-list",children:d.map(f=>c.jsxs(_l,{to:`/demo/${f.meta.slug}`,className:`nav-sub${n===`/demo/${f.meta.slug}`?" is-active":""}`,children:[c.jsx("em",{"aria-hidden":!0,children:Vd(e,f)}),f.meta.title]},f.meta.slug))}):null]},u.key)})]})}function Kg({demos:e}){const{slug:n}=vg(),{entries:t,detail:o}=e,r=n?t.find(l=>l.meta.slug===n):void 0;if(!r)return c.jsx(kl,{to:`/demo/${t[0].meta.slug}`,replace:!0});const i=t.indexOf(r)+1;return c.jsx(Qe.Fragment,{children:o(r,i)},r.meta.slug)}function Gg({config:e}){var d;const{pathname:n}=Tt(),[t,o]=y.useState(!1),[r,i]=y.useState(!1);y.useEffect(()=>o(!1),[n]);const l=y.useCallback(()=>i(m=>!m),[]);y.useEffect(()=>{const m=f=>{const v=f.target,x=v&&(v.tagName==="INPUT"||v.tagName==="TEXTAREA"||v.isContentEditable);f.key==="Escape"&&o(!1),!x&&(f.key==="g"||f.key==="G")&&!f.metaKey&&!f.ctrlKey&&i(S=>!S)};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]);const s=e.demos,a=y.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const m=n.replace(/^\/demo\/?/,""),f=s.entries.find(v=>v.meta.slug===m);return f?`demo ${Vd(s,f)} · ${f.meta.title}`:"demo · 逐项示例"},[n,e,s]),u=y.useMemo(()=>e.nav.map((m,f)=>({...m,no:String(f+1).padStart(2,"0")})),[e.nav]);return c.jsxs("div",{className:`shell${t?" is-nav-open":""}${r?" is-guides":""}`,children:[c.jsx("a",{className:"skip-link",href:"#main",onClick:m=>{m.preventDefault();const f=document.getElementById("main");f==null||f.setAttribute("tabindex","-1"),f==null||f.focus(),f==null||f.scrollIntoView({block:"start"})},children:"跳到内容"}),c.jsxs("aside",{className:"side","aria-label":"站点导航",children:[c.jsxs(_l,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),c.jsxs("span",{children:[c.jsx("strong",{children:e.pkg}),c.jsx("em",{children:e.subtitle})]})]}),c.jsxs("nav",{children:[u.map(m=>c.jsxs(_l,{to:m.to,className:`nav-item${n===m.to?" is-active":""}`,"aria-current":n===m.to?"page":void 0,children:[c.jsx("em",{"aria-hidden":!0,children:m.no}),c.jsx("span",{children:m.label}),m.hint?c.jsx("code",{children:m.hint}):null]},m.to)),c.jsx(Yg,{demos:e.demos,pathname:n})]}),c.jsxs("div",{className:"side-foot",children:[c.jsx("p",{children:e.footer[0]}),c.jsx("p",{className:"muted",children:e.footer[1]})]})]}),c.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>o(!1)}),c.jsxs("div",{className:"main",id:"main",children:[c.jsxs("header",{className:"topbar",children:[c.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>o(m=>!m),children:c.jsx("span",{"aria-hidden":!0})}),c.jsx("span",{className:"crumb",children:a}),c.jsxs("div",{className:"topbar-right",children:[(d=e.stats)==null?void 0:d.map(m=>c.jsxs("span",{className:"topbar-stat",title:m.title,children:[c.jsx("b",{children:m.value})," ",m.label]},m.label)),c.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":r,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[c.jsx("i",{"aria-hidden":!0}),"guides"]}),c.jsx("a",{className:"topbar-link",href:e.sourceUrl??Vg,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),c.jsx("div",{className:"guides","aria-hidden":!0}),c.jsx(y.Suspense,{fallback:c.jsx("div",{className:"loading",children:"loading modules…"}),children:c.jsx(Qg,{children:c.jsxs(Lg,{children:[e.routes.map(m=>c.jsx(Vt,{path:m.path,element:m.element},m.path)),c.jsx(Vt,{path:"/demo",element:c.jsx(kl,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),c.jsx(Vt,{path:"/demo/:slug",element:c.jsx(Kg,{demos:e.demos})}),c.jsx(Vt,{path:"*",element:c.jsx(kl,{to:"/",replace:!0})})]})})})]})]})}function qg({config:e}){return c.jsx(Ug,{children:c.jsx(Gg,{config:e})})}const Xg="modulepreload",Jg=function(e,n){return new URL(e,n).href},su={},Es=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(t.map(u=>{if(u=Jg(u,o),u in su)return;su[u]=!0;const d=u.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(!!o)for(let x=l.length-1;x>=0;x--){const S=l[x];if(S.href===u&&(!d||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${m}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":Xg,d||(v.as="script"),v.crossOrigin="",v.href=u,a&&v.setAttribute("nonce",a),document.head.appendChild(v),d)return new Promise((x,S)=>{v.addEventListener("load",x),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return r.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})};function Zg(){const e=new Map,n=new Map,t=(l,s)=>{const a=e.get(l);if(a)for(const u of[...a])try{u(s)}catch(d){console.warn(`[PluginBus] handler error for event "${l}"`,d)}},o=(l,s)=>{let a=e.get(l);return a||(a=new Set,e.set(l,a)),a.add(s),()=>{a==null||a.delete(s)}},r=(l,s)=>{const a=u=>{s(u),i(l,a)};return o(l,a)},i=(l,s)=>{var a;if(!s){e.delete(l);return}(a=e.get(l))==null||a.delete(s)};return{emit:t,on:o,once:r,off:i,getData:l=>n.get(l),setData:(l,s)=>{const a=n.get(l);n.set(l,s),a!==s&&t(l,s)},deleteData:l=>{const s=n.has(l);n.delete(l),s&&t(l,void 0)},hasData:l=>n.has(l),getAll:()=>{const l={};return n.forEach((s,a)=>{l[a]=s}),l},clear:()=>{e.clear(),n.clear()}}}function Qd(e){const n=new Map(e.map(s=>[s.name,s])),t=[];for(const s of e)for(const a of s.dependencies??[])n.has(a)||t.push(`${s.name} -> ${a}`);const o=[],r=new Set,i=[...e],l=s=>(s.dependencies??[]).every(a=>r.has(a)||!n.has(a));for(;i.length>0;){const s=i.filter(l);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(u=>u.name).join(" <-> ")}`);let a=s[0];for(const u of s)(u.priority??0)>(a.priority??0)&&(a=u);o.push(a),r.add(a.name),i.splice(i.indexOf(a),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),o}async function eh(e,n={}){const{timeout:t=3e3,name:o="anonymous",hook:r="unknown"}=n;if(!t||t<=0)return await e();let i;const l=new Promise((s,a)=>{i=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${o} 的钩子 ${r} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const nh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function th(e={}){const n=e.logger??console,t=e.sandbox??!0,o=e.timeout??3e3,r=[],i=[],l=new Map,s=()=>Qd([...l.values()].filter(u=>u.enabled!==!1)),a=u=>{l.set(u.name,{...u,enabled:u.enabled??!0}),u.init&&Promise.resolve(u.init()).catch(d=>{n.warn(`[PluginManager] init failed for ${u.name}`,d)})};return{register:a,registerAll:u=>{for(const d of u)a(d)},unregister:u=>{const d=l.get(u);d&&(d.destroy&&Promise.resolve(d.destroy()).catch(m=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,m)}),l.delete(u))},getPlugin:u=>l.get(u),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(u=>u.enabled!==!1),getExecutionOrder:s,enable:u=>{const d=l.get(u);d&&(d.enabled=!0)},disable:u=>{const d=l.get(u);d&&(d.enabled=!1)},has:u=>l.has(u),executeHook:async(u,d,...m)=>{var f,v;for(const x of s()){const S=(f=x.hooks)==null?void 0:f[u];if(typeof S!="function")continue;const P=x.sandbox??t,g=x.timeout??o;let p;try{p=P?await eh(()=>S(d,...m),{timeout:g,name:x.name,hook:String(u)}):await S(d,...m)}catch(h){if(r.push({plugin:x.name,hook:String(u),error:h}),n.warn(`[PluginManager] hook ${String(u)} failed in ${x.name}`,h),(v=e.onError)==null||v.call(e,x.name,String(u),h),u==="onError")break;continue}if(nh.has(String(u))&&typeof p=="function"){i.push(p);continue}if(p===!1)return!1;if(p!==void 0&&p!==!0)return p}},clear:()=>{const u=i.splice(0);for(const d of u.reverse())try{d()}catch(m){n.warn("[PluginManager] cleanup failed",m)}for(const d of l.values())d.destroy&&Promise.resolve(d.destroy()).catch(m=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,m)});l.clear()},getErrors:()=>[...r]}}var oh=Object.defineProperty,rh=(e,n,t)=>n in e?oh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ih=(e,n,t)=>rh(e,n+"",t);class lh extends Qe.Component{constructor(){super(...arguments),ih(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var o,r;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(r=(o=this.props).onError)==null||r.call(o,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let Vo=null;function sh(e=!1){if(Vo&&!e)return Vo;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(r),l=/Mobile|Android|iPhone/i.test(r),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Vo={type:i?"tablet":l?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:n,viewportHeight:t,isTouchDevice:s,isRetina:o>=2},Vo}function ah(e){const{plugins:n,props:t,data:o,initialState:r,containerRef:i,enableDebug:l=!1,managerOptions:s,extendContext:a}=e,u=y.useRef(null),d=i??u,m=y.useRef(null);m.current||(m.current=th(s));const f=m.current,v=y.useRef(null);v.current||(v.current=Zg());const x=v.current,S=y.useRef(new Map),[P,g]=y.useState(r??{}),[,p]=y.useState(0),h=y.useCallback(()=>p(te=>te+1),[]),C=y.useMemo(()=>sh(),[]),k=n.map(te=>te.name).join("|");y.useLayoutEffect(()=>{f.clear(),f.registerAll(n),l&&console.debug("[vane/plugin-core] plugins registered:",k)},[k]),y.useLayoutEffect(()=>()=>{f.executeHook("onUnmount",R.current),f.clear()},[f]);const _=y.useMemo(()=>Qd(n),[k]),R=y.useRef(null),b=y.useMemo(()=>{const te={props:t,data:o,bus:x,refs:{container:d,getContainer:()=>d.current},state:P,setState:Y=>g(We=>({...We,...Y})),shared:S.current,deviceInfo:C,forceUpdate:h,getSize:()=>{const Y=d.current;return Y?{width:Y.offsetWidth,height:Y.offsetHeight}:{width:0,height:0}},logger:console};return a?a(te):te},[t,o,P,C,x,a]);R.current=b;const A=y.useCallback(te=>{var We;let Y=te;for(const $t of _){const qe=(We=$t.hooks)==null?void 0:We.transformProps;typeof qe=="function"&&(Y=qe(Y))}return Y},[_]),$=y.useCallback(te=>{var We;let Y=te;for(const $t of _){const qe=(We=$t.hooks)==null?void 0:We.transformData;typeof qe=="function"&&(Y=qe(R.current,Y))}return Y},[_]),ke=y.useCallback((te,...Y)=>f.executeHook(te,R.current,...Y),[f]);return{manager:f,bus:x,context:b,state:P,setState:b.setState,execute:ke,transformProps:A,transformData:$,orderedPlugins:_}}y.createContext(null);const Yd=y.createContext(null);function uh({orderedPlugins:e,context:n,children:t}){const o=y.useMemo(()=>({orderedPlugins:e,context:n}),[e,n]);return c.jsx(Yd.Provider,{value:o,children:t})}function ch(e,n,t,o){return[...e].filter(r=>r.enabled!==!1&&typeof r.hooks[t]=="function").sort((r,i)=>{var l,s;return(((l=r.config)==null?void 0:l.order)??0)-(((s=i.config)==null?void 0:s.order)??0)||(i.priority??0)-(r.priority??0)}).map((r,i)=>{try{const l=r.hooks[t],s=o!==void 0?l(n,o):l(n);return s==null?null:c.jsx(lh,{children:s},`comment-slot-${r.name}-${i}`)}catch(l){return console.warn(`[vane-comment] 插件 ${r.name} 的 ${t} 渲染失败`,l),null}}).filter(Boolean)}function _t(e,n){const t=y.useContext(Yd);return t?ch(t.orderedPlugins,t.context,e,n):[]}function bs(e){return!e||e.length===0?null:e.map((n,t)=>{switch(n.type){case"text":return c.jsx("span",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:n.value},t);case"emoji":return c.jsx("span",{style:{fontSize:"1.1em",verticalAlign:"middle"},children:n.value},t);case"image":return c.jsx("img",{src:n.url,alt:n.alt??"",style:{maxWidth:120,maxHeight:120,borderRadius:6,margin:"2px 4px 2px 0",verticalAlign:"middle",objectFit:"cover"}},t);case"mention":return c.jsx("span",{style:{color:"#1565c0",fontWeight:500},children:`@${n.name}`},t);default:return null}})}function Kd(e,n=Date.now()){const t=Math.max(0,n-e),o=Math.floor(t/1e3);if(o<60)return"刚刚";const r=Math.floor(o/60);if(r<60)return`${r} 分钟前`;const i=Math.floor(r/60);if(i<24)return`${i} 小时前`;const l=Math.floor(i/24);if(l<30)return`${l} 天前`;const s=Math.floor(l/30);return s<12?`${s} 个月前`:`${Math.floor(s/12)} 年前`}const H=y.forwardRef(function(n,t){const{comments:o,data:r,containerClassName:i,containerStyle:l,containerRefExternal:s,emptyText:a="还没有评论，快来抢沙发~",loading:u,onLoadMore:d}=n,m=y.useRef(null),f=s||m,[,v]=y.useState(0),x=y.useCallback(()=>v(h=>h+1),[]),S=_t("renderToolbar"),P=_t("renderFooter"),g=o??r??[];y.useImperativeHandle(t,()=>({getContainer:()=>f.current,forceUpdate:x,getSize:()=>{const h=f.current;return h?{width:h.offsetWidth,height:h.offsetHeight}:{width:0,height:0}}}),[x]);const p=typeof d=="function"&&!u;return c.jsxs("div",{ref:f,className:`vc-comment ${i||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",fontFamily:"inherit",padding:16,...l},children:[S.length>0&&c.jsx("div",{className:"vc-toolbar",style:{marginBottom:8},children:S}),g.length===0&&!u?c.jsx("div",{className:"vc-empty",style:{padding:"24px 0",textAlign:"center",color:"#6b6b6b"},children:a}):c.jsx("div",{className:"vc-list",style:{display:"flex",flexDirection:"column",gap:14},children:g.map(h=>c.jsx(dh,{comment:h,depth:0},h.id))}),u&&c.jsx("div",{className:"vc-loading",style:{padding:"12px 0",textAlign:"center",color:"#6b6b6b"},children:"加载中…"}),p&&c.jsx("div",{style:{padding:"12px 0",textAlign:"center"},children:c.jsx("button",{type:"button",onClick:()=>d==null?void 0:d(),style:{border:"1px solid rgba(128,128,128,0.25)",borderRadius:999,padding:"6px 18px",background:"transparent",color:"inherit",cursor:"pointer"},children:"加载更多"})}),P.length>0&&c.jsx("div",{className:"vc-footer",style:{marginTop:12},children:P})]})});H.displayName="CommentCore";function dh({comment:e,depth:n}){var s;const t=_t("renderCommentActions",e),o=_t("renderNested",e),r=e.status??"normal",i=r==="deleted",l=r==="pending";return c.jsxs("div",{className:"vc-item","data-testid":"comment-item",style:{display:"flex",gap:10,paddingLeft:n>0?12:0,borderLeft:n>0?"2px solid rgba(128,128,128,0.15)":void 0},children:[c.jsx(mh,{author:e.author}),c.jsxs("div",{className:"vc-item-body",style:{flex:1,minWidth:0},children:[c.jsxs("div",{className:"vc-meta",style:{display:"flex",alignItems:"center",gap:6,fontSize:13},children:[c.jsx("span",{style:{fontWeight:600},children:e.author.name}),e.author.verified&&c.jsx("span",{title:"认证用户",style:{color:"#1565c0",fontSize:12},children:"✓"}),e.author.badge&&c.jsx("span",{style:{fontSize:11,padding:"1px 6px",borderRadius:4,background:"rgba(128,128,128,0.18)"},children:e.author.badge}),e.pinned&&c.jsx("span",{style:{fontSize:11,padding:"1px 6px",borderRadius:4,color:"#b35c00",border:"1px solid rgba(255,143,0,0.4)"},children:"置顶"}),c.jsx("span",{style:{color:"#6b6b6b",marginLeft:"auto",fontSize:12},children:Kd(e.createdAt)})]}),i?c.jsx("div",{style:{color:"#6b6b6b",fontSize:13,fontStyle:"italic",marginTop:2},children:"该评论已删除"}):l?c.jsx("div",{style:{color:"#6b6b6b",fontSize:13,fontStyle:"italic",marginTop:2},children:"评论审核中"}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"vc-content",style:{fontSize:14,marginTop:2,lineHeight:1.5},children:(s=e.content)!=null&&s.length?bs(e.content):e.text}),e.images&&e.images.length>0&&c.jsx("div",{className:"vc-images",style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:4},children:e.images.map((a,u)=>c.jsx("img",{src:a.url,alt:a.alt??"",style:{width:88,height:88,objectFit:"cover",borderRadius:6}},u))}),t.length>0&&c.jsx("div",{className:"vc-actions",style:{display:"flex",flexWrap:"wrap",alignItems:"center",columnGap:14,rowGap:6,marginTop:6},children:t}),o.length>0&&c.jsx("div",{className:"vc-nested",style:{marginTop:10},children:o})]})]})]})}function mh({author:e}){return e.avatar?c.jsx("img",{src:e.avatar,alt:e.name,style:{width:36,height:36,borderRadius:"50%",objectFit:"cover",flexShrink:0}}):c.jsx("div",{style:{width:36,height:36,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(128,128,128,0.22)",fontWeight:600},children:e.name.slice(0,1).toUpperCase()})}function ph(e,n){if(!e||n==="custom")return e??[];const t=[...e];switch(n){case"newest":t.sort((o,r)=>r.createdAt-o.createdAt);break;case"oldest":t.sort((o,r)=>o.createdAt-r.createdAt);break;case"mostLiked":t.sort((o,r)=>r.likeCount-o.likeCount||r.createdAt-o.createdAt);break;case"hottest":t.sort((o,r)=>(r.hotScore??0)-(o.hotScore??0)||r.createdAt-o.createdAt);break}return t}const fh={newest:"最新",oldest:"最早",hottest:"最热",mostLiked:"最赞",custom:"默认"};function Q(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:o,enableDebug:r=!1}=t,i=y.forwardRef((l,s)=>{const a=y.useRef(null),u=y.useCallback(k=>{var R;const _=((R=k.state)==null?void 0:R.sortMode)??l.defaultSortMode??"custom";return{...k,sortMode:_,setSortMode:b=>k.setState({sortMode:b})}},[l]),d=ah({plugins:o,props:l,data:l.comments??l.data,containerRef:a,extendContext:u,enableDebug:r}),m=y.useRef(d.context);m.current=d.context;const f=y.useCallback((k,..._)=>d.execute(k,..._),[d.manager]),v=d.transformProps(l);y.useEffect(()=>{f("onMount")},[f]);const x=y.useRef(l);y.useEffect(()=>{const k=x.current;k!==l&&(x.current=l,f("onPropsChange",k,l))},[l,f]);const S=d.context.data??[],P=d.transformData(S)??S,g=d.context.sortMode??l.defaultSortMode??"custom",p=ph(P,g),h={...v,containerRefExternal:a,debug:v.debug??r,data:p,comments:p,onMount:()=>{var k;(k=v.onMount)==null||k.call(v)},onUnmount:()=>{var k;(k=v.onUnmount)==null||k.call(v)}},C={...d.context,comments:p};return c.jsx(uh,{orderedPlugins:d.orderedPlugins,context:C,children:c.jsx(e,{ref:s,...h})})});return i.displayName="WithPlugins(CommentCore)",i}const Dn=Date.now(),On=60*1e3;function Nt(e,n){return`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><rect width="36" height="36" rx="18" fill="${n}"/><text x="18" y="23" font-size="16" font-family="sans-serif" fill="#fff" text-anchor="middle">${e}</text></svg>`)}`}function gh(e){return`https://picsum.photos/seed/${e}/200/200`}const J=[{id:"u-rachel",name:"Rachel"},{id:"u-monica",name:"Monica"},{id:"u-phoebe",name:"Phoebe"}],hh={id:"u-rachel",name:"Rachel",avatar:Nt("R","#d4380d"),verified:!0},au={id:"u-monica",name:"Monica",avatar:Nt("M","#2b7de9")},yh={id:"u-phoebe",name:"Phoebe",avatar:Nt("P","#389e0d")},vh={id:"u-chandler",name:"Chandler",avatar:Nt("C","#722ed1")},Ch={id:"u-joey",name:"Joey",avatar:Nt("J","#eb2f96")},xh={id:"u-ross",name:"Ross",avatar:Nt("R","#fa8c16"),badge:"UP主"},Sh=[{id:"c-1",author:xh,content:[{type:"text",value:"这期视频的转场也太丝滑了吧，"},{type:"emoji",value:"🔥"},{type:"text",value:" 求个工程文件链接～"}],createdAt:Dn-28*On,likeCount:128,liked:!1,pinned:!0,replyCount:2,replies:[{id:"c-1-r1",author:hh,content:[{type:"text",value:"同求，蹲一个工程文件 🤝"}],createdAt:Dn-20*On,likeCount:12,liked:!1},{id:"c-1-r2",author:au,content:[{type:"text",value:"工程文件已放评论置顶啦 "},{type:"mention",userId:"u-ross",name:"Ross"}],createdAt:Dn-12*On,likeCount:31,liked:!0}]},{id:"c-2",author:vh,content:[{type:"text",value:"前排！这个 BGM 叫什么名字？循环了一整天了"}],createdAt:Dn-22*On,likeCount:64,liked:!0,images:[{url:gh("scene-a"),alt:"名场面截图"}]},{id:"c-3",author:yh,content:[{type:"text",value:"刚发完评论就有人点赞，社交平台的即时反馈真的上头 "},{type:"emoji",value:"😂"}],createdAt:Dn-9*On,likeCount:7,liked:!1,status:"pending"},{id:"c-4",author:Ch,content:[{type:"text",value:"这条评论已经被我手滑删掉了"}],createdAt:Dn-5*On,likeCount:0,liked:!1,status:"deleted"},{id:"c-5",author:au,content:[{type:"text",value:"电商场景实测：这个 SKU 的评论区排序切到「最热」之后，"},{type:"text",value:"优质长评一下子就浮上来了，转化应该会好不少。"}],createdAt:Dn-3*On,likeCount:42,liked:!1}];function Z(){return JSON.parse(JSON.stringify(Sh))}const kh={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Ph={slug:"quickstart",title:"最小评论列表",group:"basic",capability:"core-list",intro:"5 行装配出能跑的评论列表：Core 只做数据驱动渲染，能力靠插件增量叠加。",why:"先跑通内核，再按需叠点赞 / 排序 / 楼中楼 / 富编辑——评论区的长尾需求多，全塞进内核只会越来越难改。",plugs:[],props:[],stageHeight:420};function wh({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useCallback(i=>{t(l=>l.map(s=>s.id===i?{...s,liked:!s.liked,likeCount:(s.likeCount??0)+(s.liked?-1:1)}:s)),e(`点赞 ${i}`)},[e]),r=y.useMemo(()=>Q(H,[]),[]);return c.jsxs("div",{style:kh,children:[c.jsx(r,{comments:n,onLike:o,onReply:(i,l)=>e("回复（需叠 ThreadPlugin）"),onSubmit:i=>e("发布（需叠 RichComposerPlugin）"),onReport:i=>e(`举报 ${i}`),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"这是裸 Core：列表 / 置顶 / 删除态 / 审核态都内置，但点赞、排序、楼中楼、评论框要叠插件才有。"})]})}const _h=Object.freeze(Object.defineProperty({__proto__:null,default:wh,meta:Ph},Symbol.toStringTag,{value:"Module"})),Rh="LikePlugin",jh="点赞：每条评论操作行渲染点赞按钮与计数，点击回调 onLike；乐观更新由消费方完成。本地爆裂动画（不依赖全局 overlay 槽）。",Eh="0.1.0",bh=["ui","互动","点赞"],Th=[{name:"showCount",type:"boolean",default:"true",description:"是否展示点赞数，false 时只显示爱心图标"}],Nh=`const Comment = withCommentPlugins(CommentCore, [
  createLikePlugin(),
]);`,$h=["爱心图标 + 数字计数","点击局部缩放爆裂动画","回调 onLike(id, nextLiked)，状态真相在消费方数据","楼中楼嵌套回复同样经同一槽获得点赞按钮"],Mh=["视频 / 社交 / 电商评论区点赞","任意需要「赞」互动的评论场景"],Lh=["点赞态不做组件内缓存，消费方更新 comments 数据回流后即时反映。"],Gd={name:Rh,description:jh,since:Eh,tags:bh,config:Th,example:Nh,features:$h,useCases:Mh,notes:Lh};function Dh({comment:e,onLike:n,showCount:t=!0}){const[o,r]=y.useState(!1),i=!!e.liked,l=e.likeCount,s=()=>{const a=!i;n==null||n(e.id,a),a&&(r(!0),window.setTimeout(()=>r(!1),450))};return c.jsxs("button",{type:"button",onClick:s,"aria-pressed":i,"data-testid":"comment-like",style:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"transparent",color:i?"#c62828":"inherit",opacity:i?1:.7,cursor:"pointer",fontSize:13,padding:0,flexShrink:0},children:[c.jsx("span",{style:{display:"inline-block",transform:o?"scale(1.4)":"scale(1)",transition:"transform 0.25s ease"},children:i?"❤️":"🤍"}),t&&(l>0?l:"赞")]})}function Oh(e={}){return{name:"LikePlugin",version:"0.1.0",description:"点赞：每条评论的操作行渲染点赞按钮与计数，点击回调 onLike。",priority:40,enabled:!0,hooks:{renderCommentActions:(n,t)=>c.jsx(Dh,{comment:t,showCount:e.showCount,onLike:n.props.onLike})}}}const Qr=Object.assign(Oh,{meta:Gd}),zh={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Ih={slug:"like",title:"点赞",group:"plugin",plugin:"LikePlugin",intro:"操作行加一个点赞按钮，本地计数 + 缩放回弹动效，事件经 onLike 回调。",why:"点赞是评论区最高频的互动；做成插件后，不要点赞的场景（如内部审核台）不装即可。",plugs:[{fn:"createLikePlugin",cfg:"showCount: {{showCount}}",why:"操作行点赞按钮；showCount 控制是否显示计数"}],props:[],controls:[{key:"showCount",label:"显示计数",kind:"switch",init:!0}],stageHeight:420};function Fh({cfg:e,log:n}){const[t,o]=y.useState(()=>Z()),r=!!e.showCount,i=y.useCallback(s=>{o(a=>a.map(u=>u.id===s?{...u,liked:!u.liked,likeCount:(u.likeCount??0)+(u.liked?-1:1)}:u)),n(`点赞 ${s}`)},[n]),l=y.useMemo(()=>Q(H,[Qr({showCount:r})]),[r]);return c.jsxs("div",{style:zh,children:[c.jsx(l,{comments:t,onLike:i,onReply:(s,a)=>n("回复（需叠 ThreadPlugin）"),onSubmit:s=>n("发布（需叠 RichComposerPlugin）"),onReport:s=>n(`举报 ${s}`),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有点赞被装上：试试点操作行的 ♥，计数和动效都会变，事件写进右侧日志。"})]})}const Ah=Object.freeze(Object.defineProperty({__proto__:null,default:Fh,meta:Ih},Symbol.toStringTag,{value:"Module"})),Uh="SortPlugin",Bh="排序：顶栏渲染排序栏（最新/最早/最热/最赞），切换 sortMode 经内核 state 驱动列表重排。实际重排由内核 extendContext 的 sortComments 完成。",Wh="0.1.0",Hh=["ui","排序","列表"],Vh=[{name:"modes",type:'"newest" | "oldest" | "hottest" | "mostLiked"[]',default:'["newest","hottest","mostLiked"]',description:"排序栏展示的模式按钮"},{name:"defaultMode",type:"SortMode",default:'"newest"',description:"默认排序（仅在消费方未传 defaultSortMode 时播种）"}],Qh=`const Comment = withCommentPlugins(CommentCore, [
  createSortPlugin({ modes: ["hottest","newest"] }),
]);`,Yh=["最新 / 最早 / 最热 / 最赞 四种模式","点击切换即时重排（经内核 state，非本地数组）","默认模式播种（尊重消费方 defaultSortMode）","切 mode 同时回调 onSortChange"],Kh=["视频评论区（默认最热）","社交评论区（全排序）","电商评论区（最新 / 最赞）"],Gh=["排序是纯视图变换，由内核 sortComments 幂等完成，对已排数据再排不抖动。"],qd={name:Uh,description:Bh,since:Wh,tags:Hh,config:Vh,example:Qh,features:Yh,useCases:Kh,notes:Gh};function qh({context:e,modes:n}){const t=e.sortMode;return c.jsx("div",{style:{display:"inline-flex",gap:4},children:n.map(o=>{const r=t===o;return c.jsx("button",{type:"button",onClick:()=>{var i,l;e.setSortMode(o),(l=(i=e.props).onSortChange)==null||l.call(i,o)},style:{border:"none",borderRadius:999,padding:"4px 12px",fontSize:13,cursor:"pointer",background:r?"rgba(29,161,242,0.16)":"transparent",color:r?"#1565c0":"inherit",opacity:r?1:.7},children:fh[o]},o)})})}function Xh(e={}){const n=e.modes??["newest","hottest","mostLiked"],t=e.defaultMode??"newest";return{name:"SortPlugin",version:"0.1.0",description:"排序：顶栏渲染排序栏，切换 sortMode 驱动列表重排。",priority:20,enabled:!0,hooks:{onMount:o=>{o.state.sortMode===void 0&&o.props.defaultSortMode===void 0&&o.setState({sortMode:t})},renderToolbar:o=>c.jsx(qh,{context:o,modes:n})}}}const Yr=Object.assign(Xh,{meta:qd}),Jh={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Zh=[{label:"最新",value:"newest"},{label:"最早",value:"oldest"},{label:"最热",value:"hottest"},{label:"点赞最多",value:"mostLiked"}],ey={slug:"sort",title:"排序",group:"plugin",plugin:"SortPlugin",intro:"顶栏排序条：最新 / 最早 / 最热 / 点赞最多，切换即重排，纯函数排序不碰 DOM。",why:"视频和电商都重度依赖排序（最热优先 vs 最新优先），但内部后台只想看最新——做成插件按需装配。",plugs:[{fn:"createSortPlugin",why:"顶栏排序条；默认三种模式，可传 modes 与 defaultMode 裁剪"}],props:['defaultSortMode="newest"'],controls:[{key:"mode",label:"初始排序",kind:"select",init:"newest",options:Zh}],stageHeight:420};function ny({cfg:e,log:n}){const[t,o]=y.useState(()=>Z()),r=e.mode||"newest",i=y.useCallback(s=>{o(a=>a.map(u=>u.id===s?{...u,liked:!u.liked,likeCount:(u.likeCount??0)+(u.liked?-1:1)}:u))},[]),l=y.useMemo(()=>Q(H,[Yr()]),[]);return c.jsxs("div",{style:Jh,children:[c.jsx(l,{comments:t,defaultSortMode:r,onLike:i,onReply:(s,a)=>n("回复（需叠 ThreadPlugin）"),onSubmit:s=>n("发布（需叠 RichComposerPlugin）"),onReport:s=>n(`举报 ${s}`),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"顶栏多了排序条：点「最热」后点赞多的评论会浮上来。初始排序由控件决定。"})]})}const ty=Object.freeze(Object.defineProperty({__proto__:null,default:ny,meta:ey},Symbol.toStringTag,{value:"Module"})),oy="ThreadPlugin",ry="楼中楼：顶评论的 renderNested 槽递归渲染嵌套回复，maxDepth 限深折叠 + 展开/收起；操作行的「回复」经 renderCommentActions 唤起内联回复框。嵌套回复同样走同一组槽，子回复也能点赞与继续回复。",iy="0.1.0",ly=["ui","楼中楼","回复","嵌套"],sy=[{name:"maxDepth",type:"number",default:"3",description:"最大嵌套深度，超过则不再渲染更深的楼中楼"},{name:"defaultExpanded",type:"boolean",default:"true",description:"是否默认展开楼中楼"},{name:"showReply",type:"boolean",default:"true",description:"是否在操作行渲染内联回复框触发"}],ay=`const Comment = withCommentPlugins(CommentCore, [
  createThreadPlugin({ maxDepth: 3 }),
]);`,uy=["递归楼中楼（限深折叠 + 展开/收起）","内联回复框，提交回调 onReply(parentId, content)","嵌套回复复用同一 actions/nested 槽（子回复可点赞 / 继续回复）","replyCount 与 replies 不一致时提示「展开 N 条回复」（懒加载场景）"],cy=["社交评论区楼中楼","视频 / 电商评论区的多级互动"],dy=["限制深度的渲染交由 ThreadView 递归完成，maxDepth 控制总层级。"],Xd={name:oy,description:ry,since:iy,tags:ly,config:sy,example:ay,features:uy,useCases:cy,notes:dy};function my({author:e}){return e.avatar?c.jsx("img",{src:e.avatar,alt:e.name,style:{width:28,height:28,borderRadius:"50%",objectFit:"cover",flexShrink:0}}):c.jsx("div",{style:{width:28,height:28,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(128,128,128,0.22)",fontSize:12,fontWeight:600},children:e.name.slice(0,1).toUpperCase()})}function py({reply:e,depth:n,maxDepth:t,showReply:o}){var a;const r=_t("renderCommentActions",e),i=_t("renderNested",e),l=n<t?i:[],s=(e.status??"normal")==="deleted";return c.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},"data-testid":"comment-item",children:[c.jsx(my,{author:e.author}),c.jsxs("div",{style:{flex:1,minWidth:0},children:[c.jsxs("div",{style:{fontSize:13},children:[c.jsx("span",{style:{fontWeight:600},children:e.author.name}),e.author.badge&&c.jsx("span",{style:{fontSize:11,opacity:.7,marginLeft:4},children:e.author.badge}),c.jsx("span",{style:{color:"#6b6b6b",marginLeft:6,fontSize:12},children:Kd(e.createdAt)})]}),c.jsx("div",{style:{fontSize:13,lineHeight:1.5,marginTop:1},children:s?c.jsx("span",{style:{color:"#6b6b6b",fontStyle:"italic"},children:"该评论已删除"}):(a=e.content)!=null&&a.length?bs(e.content):e.text}),r.length>0&&o&&c.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",columnGap:14,rowGap:4,marginTop:4},children:r}),l.length>0&&c.jsx("div",{style:{borderLeft:"2px solid rgba(128,128,128,0.15)",paddingLeft:10},children:l})]})]})}function fy({comment:e,depth:n,maxDepth:t,defaultExpanded:o,showReply:r}){const i=e.replies??[],l=e.replyCount??i.length,[s,a]=y.useState(o&&i.length>0);return i.length===0&&l===0?null:c.jsx("div",{style:{marginTop:8},children:s?c.jsx("div",{children:i.map(u=>c.jsx(py,{reply:u,depth:n,maxDepth:t,showReply:r},u.id))}):c.jsx("button",{type:"button",onClick:()=>a(!0),style:{border:"none",background:"transparent",color:"#1565c0",cursor:"pointer",fontSize:13,padding:0},children:l>i.length?`展开 ${l} 条回复`:`展开 ${i.length} 条回复`})})}function gy({parentId:e,onSubmit:n,onCancel:t}){const[o,r]=y.useState(""),i=o.trim().length===0;return c.jsxs("div",{style:{marginTop:6,display:"flex",flexDirection:"column",gap:6},children:[c.jsx("textarea",{value:o,onChange:l=>r(l.target.value),placeholder:"回复点什么…",rows:2,style:{width:"100%",resize:"vertical",borderRadius:6,border:"1px solid rgba(128,128,128,0.25)",padding:6,fontSize:13,fontFamily:"inherit",background:"transparent",color:"inherit",boxSizing:"border-box"}}),c.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[c.jsx("button",{type:"button",onClick:t,style:uu(!1),children:"取消"}),c.jsx("button",{type:"button",disabled:i,onClick:()=>{n(e,[{type:"text",value:o.trim()}]),r("")},style:uu(!0),children:"回复"})]})]})}function uu(e){return{border:"none",borderRadius:6,padding:"4px 14px",fontSize:13,cursor:"pointer",background:e?"#1565c0":"rgba(128,128,128,0.18)",color:e?"#fff":"inherit"}}function hy({comment:e,context:n,showReply:t}){const[o,r]=y.useState(!1);return t?c.jsxs("span",{style:{display:"inline-flex",flexDirection:"column",flexShrink:0,...o?{flexBasis:"100%",maxWidth:"100%"}:{}},children:[c.jsx("button",{type:"button",onClick:()=>r(i=>!i),style:{border:"none",background:"transparent",color:"inherit",opacity:.7,cursor:"pointer",fontSize:13,padding:0,flexShrink:0},children:"回复"}),o&&c.jsx(gy,{parentId:e.id,onCancel:()=>r(!1),onSubmit:(i,l)=>{var s,a;return(a=(s=n.props).onReply)==null?void 0:a.call(s,i,l)}})]}):null}function yy(e={}){const n=e.maxDepth??3,t=e.defaultExpanded??!0,o=e.showReply??!0;return{name:"ThreadPlugin",version:"0.1.0",description:"楼中楼：递归渲染嵌套回复（限深折叠 + 展开），操作行内联回复。",priority:30,enabled:!0,hooks:{renderNested:(r,i)=>i.replies&&i.replies.length>0?c.jsx(fy,{comment:i,depth:1,maxDepth:n,defaultExpanded:t,showReply:o}):null,renderCommentActions:(r,i)=>c.jsx(hy,{comment:i,context:r,showReply:o})}}}const Kr=Object.assign(yy,{meta:Xd}),vy={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Cy={id:"u-me",name:"我",avatar:void 0},xy=[{label:"1 层",value:"1"},{label:"2 层",value:"2"},{label:"3 层",value:"3"}],Sy={slug:"thread",title:"楼中楼",group:"plugin",plugin:"ThreadPlugin",intro:"操作行的「回复」唤起内联框，嵌套回复递归渲染、限深折叠；子回复同样走点赞 / 继续回复。",why:"社交与视频评论区离不开楼中楼；限深避免无限嵌套把版面撑爆。",plugs:[{fn:"createThreadPlugin",cfg:"maxDepth: {{maxDepth}}",why:"renderNested 递归渲染 replies；maxDepth 控制嵌套上限"}],props:[],controls:[{key:"maxDepth",label:"嵌套深度",kind:"select",init:"3",options:xy}],stageHeight:460};function ky({cfg:e,log:n}){const[t,o]=y.useState(()=>Z()),r=Number(e.maxDepth)||3,i=y.useCallback(a=>{o(u=>u.map(d=>d.id===a?{...d,liked:!d.liked,likeCount:(d.likeCount??0)+(d.liked?-1:1)}:d))},[]),l=y.useCallback((a,u)=>{o(d=>d.map(m=>m.id===a?{...m,replies:[{id:`${a}-r${Date.now()}`,author:Cy,content:u,createdAt:Date.now(),likeCount:0,liked:!1},...m.replies??[]],replyCount:(m.replyCount??0)+1}:m)),n(`回复 ${a}`)},[n]),s=y.useMemo(()=>Q(H,[Kr({maxDepth:r})]),[r]);return c.jsxs("div",{style:vy,children:[c.jsx(s,{comments:t,onLike:i,onReply:l,onSubmit:a=>n("发布（需叠 RichComposerPlugin）"),onReport:a=>n(`举报 ${a}`),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"点任意评论的「回复」会弹出内联框；嵌套回复点开可看，深度由控件控制。"})]})}const Py=Object.freeze(Object.defineProperty({__proto__:null,default:ky,meta:Sy},Symbol.toStringTag,{value:"Module"})),wy="RichComposerPlugin",_y="富编辑：底部评论框，支持 emoji 选择器 / 图片（DataURL）/ @提及（候选下拉），实时预览，提交时输出结构化 CommentNode[] 回调 onSubmit。各能力经 features 配置按平台开关。",Ry="0.1.0",jy=["ui","富文本","编辑器","评论框"],Ey=[{name:"features",type:"{ emoji?: boolean; image?: boolean; mention?: boolean }",default:"{ emoji: true, image: true, mention: true }",description:"启用哪些富编辑能力，按平台开关"},{name:"placeholder",type:"string",default:"说点什么吧…",description:"文本框占位符"},{name:"submitText",type:"string",default:"发布",description:"提交按钮文案"}],by=`const Comment = withCommentPlugins(CommentCore, [
  createRichComposerPlugin({ features: { emoji: true, image: true } }),
]);`,Ty=["emoji 选择器（内置常用表情，零依赖）","图片（本地文件 → DataURL，离线可用）","@提及（候选下拉，输出 mention 节点）","实时富内容预览（复用核心渲染）","结构化输出 CommentNode[]"],Ny=["视频评论区（emoji + 图片）","社交评论区（emoji + 图片 + @提及）","电商评论区（emoji + 图片晒单）"],$y=["组件不缓存草稿；提交后清空。@提及按候选 name 精确匹配，多个同名取首个。"],Jd={name:wy,description:_y,since:Ry,tags:jy,config:Ey,example:by,features:Ty,useCases:Ny,notes:$y},My=["😀","😂","🤣","😍","😘","😎","🤔","😭","👍","👎","❤️","🔥","🎉","💯","✨","🌟","😅","😡","🥺","😴","🙏","💪","👏","💡"],Ly={emoji:!0,image:!0,mention:!0};function Dy(e,n,t){const o=[],r=/@([^\s@]{1,20})/g;let i=0,l;for(;(l=r.exec(e))!==null;){const s=l[1],a=n.find(u=>u.name===s);a&&(l.index>i&&o.push({type:"text",value:e.slice(i,l.index)}),o.push({type:"mention",userId:a.id,name:a.name}),i=r.lastIndex)}i<e.length&&o.push({type:"text",value:e.slice(i)});for(const s of t)o.push({type:"image",url:s});return o}function Oy({context:e,features:n,placeholder:t,submitText:o}){const[r,i]=y.useState(""),[l,s]=y.useState([]),[a,u]=y.useState(!1),[d,m]=y.useState(!1),f=e.props.mentions??[],v=y.useRef(null),x=Dy(r,f,l),S=x.some(C=>C.type==="text"&&C.value.trim().length>0||C.type==="image"||C.type==="mention"),P=()=>{var C,k;S&&((k=(C=e.props).onSubmit)==null||k.call(C,x),i(""),s([]),u(!1),m(!1))},g=C=>i(k=>k+C),p=C=>{i(k=>k+`@${C} `),m(!1)},h=C=>{const k=new FileReader;k.onload=()=>{typeof k.result=="string"&&s(_=>[..._,k.result])},k.readAsDataURL(C)};return c.jsxs("div",{style:{border:"1px solid rgba(128,128,128,0.22)",borderRadius:8,padding:10},children:[c.jsx("textarea",{value:r,onChange:C=>i(C.target.value),placeholder:t??"说点什么吧…",rows:3,style:{width:"100%",resize:"vertical",border:"none",outline:"none",background:"transparent",color:"inherit",fontSize:14,fontFamily:"inherit",boxSizing:"border-box"}}),l.length>0&&c.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",margin:"6px 0"},children:l.map((C,k)=>c.jsxs("div",{style:{position:"relative"},children:[c.jsx("img",{src:C,alt:"",style:{width:64,height:64,objectFit:"cover",borderRadius:6}}),c.jsx("button",{type:"button",onClick:()=>s(_=>_.filter((R,b)=>b!==k)),style:{position:"absolute",top:-6,right:-6,width:18,height:18,borderRadius:"50%",border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",cursor:"pointer",fontSize:11,lineHeight:"18px",padding:0},children:"×"})]},k))}),a&&c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(8, 1fr)",gap:2,margin:"6px 0"},children:My.map(C=>c.jsx("button",{type:"button",onClick:()=>g(C),style:{border:"none",background:"transparent",cursor:"pointer",fontSize:18},children:C},C))}),d&&f.length>0&&c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,margin:"6px 0"},children:f.map(C=>c.jsxs("button",{type:"button",onClick:()=>p(C.name),style:{border:"1px solid rgba(128,128,128,0.25)",borderRadius:999,padding:"2px 10px",background:"transparent",color:"#1565c0",cursor:"pointer",fontSize:12},children:["@",C.name]},C.id))}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:6},children:[n.emoji&&c.jsx("button",{type:"button",onClick:()=>u(C=>!C),style:Ri,children:"😊"}),n.image&&c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",onClick:()=>{var C;return(C=v.current)==null?void 0:C.click()},style:Ri,children:"🖼️"}),c.jsx("input",{ref:v,type:"file",accept:"image/*",style:{display:"none"},onChange:C=>{var _;const k=(_=C.target.files)==null?void 0:_[0];k&&h(k),C.target.value=""}})]}),n.mention&&f.length>0&&c.jsx("button",{type:"button",onClick:()=>m(C=>!C),style:Ri,children:"@"}),c.jsx("button",{type:"button",onClick:P,disabled:!S,style:{marginLeft:"auto",border:"none",borderRadius:6,padding:"6px 18px",fontSize:13,cursor:S?"pointer":"not-allowed",background:S?"#1565c0":"rgba(128,128,128,0.2)",color:S?"#fff":"inherit"},children:o??"发布"})]}),S&&c.jsx("div",{style:{marginTop:6,padding:6,borderRadius:6,background:"rgba(128,128,128,0.1)",fontSize:13,lineHeight:1.5},children:bs(x)})]})}const Ri={border:"none",background:"transparent",cursor:"pointer",fontSize:16,padding:2};function zy(e={}){const n={...Ly,...e.features??{}};return{name:"RichComposerPlugin",version:"0.1.0",description:"富编辑：底部评论框，支持 emoji / 图片 / @提及，输出结构化富内容回调 onSubmit。",priority:10,enabled:!0,hooks:{renderFooter:t=>c.jsx(Oy,{context:t,features:n,placeholder:e.placeholder,submitText:e.submitText})}}}const Gr=Object.assign(zy,{meta:Jd}),Iy={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Fy={id:"u-me",name:"我",avatar:void 0},Ay={slug:"rich-composer",title:"富编辑",group:"plugin",plugin:"RichComposerPlugin",intro:"底部评论框：emoji 选择器 + 图片 + @提及，输出结构化富内容，实时预览。",why:"社交平台要表情和提及，电商要晒图评价——但后台回复框只想要纯文本，做成插件按需开关。",plugs:[{fn:"createRichComposerPlugin",cfg:"features: { emoji: {{withEmoji}}, image: {{withImage}}, mention: {{withMention}} }",why:"renderFooter 评论框；features 裁剪 emoji / 图片 / @提及"}],props:[],controls:[{key:"withEmoji",label:"emoji",kind:"switch",init:!0},{key:"withImage",label:"图片",kind:"switch",init:!0},{key:"withMention",label:"@提及",kind:"switch",init:!0}],stageHeight:460};function Uy({cfg:e,log:n}){const[t,o]=y.useState(()=>Z()),r=!!e.withEmoji,i=!!e.withImage,l=!!e.withMention,s=y.useCallback(d=>{o(m=>m.map(f=>f.id===d?{...f,liked:!f.liked,likeCount:(f.likeCount??0)+(f.liked?-1:1)}:f))},[]),a=y.useCallback(d=>{d.some(m=>m.type==="text"&&m.value.trim()||m.type==="image"||m.type==="mention")&&(o(m=>[{id:`c-${Date.now()}`,author:Fy,content:d,createdAt:Date.now(),likeCount:0,liked:!1},...m]),n("发布评论"))},[n]),u=y.useMemo(()=>Q(H,[Gr({features:{emoji:r,image:i,mention:l}})]),[r,i,l]);return c.jsxs("div",{style:Iy,children:[c.jsx(u,{comments:t,onLike:s,onReply:(d,m)=>n("回复（需叠 ThreadPlugin）"),onSubmit:a,onReport:d=>n(`举报 ${d}`),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"底部评论框：点 😊 选表情、🖼️ 传图、@ 提及好友，下方实时预览，发布后新评论置顶。"})]})}const By=Object.freeze(Object.defineProperty({__proto__:null,default:Uy,meta:Ay},Symbol.toStringTag,{value:"Module"})),Wy={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},cu={id:"u-me",name:"我",avatar:void 0},Hy={slug:"full-combo",title:"全家桶",group:"advanced",capability:"full-combo",intro:"点赞 + 排序 + 楼中楼 + 富编辑一次性装配，点赞 / 回复 / 发布都真正改状态。",why:"想看「一个通用评论区到底长什么样」，这一页就是；四个能力按 priority 串联，互不覆盖。",plugs:[{fn:"createLikePlugin",why:"操作行点赞按钮"},{fn:"createSortPlugin",why:"顶栏排序条"},{fn:"createThreadPlugin",cfg:"maxDepth: 3",why:"楼中楼嵌套回复"},{fn:"createRichComposerPlugin",cfg:"features: { emoji: true, image: true, mention: true }",why:"底部富编辑评论框"}],props:[],stageHeight:520};function Vy({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useCallback(s=>{t(a=>a.map(u=>u.id===s?{...u,liked:!u.liked,likeCount:(u.likeCount??0)+(u.liked?-1:1)}:u)),e(`点赞 ${s}`)},[e]),r=y.useCallback((s,a)=>{t(u=>u.map(d=>d.id===s?{...d,replies:[{id:`${s}-r${Date.now()}`,author:cu,content:a,createdAt:Date.now(),likeCount:0,liked:!1},...d.replies??[]],replyCount:(d.replyCount??0)+1}:d)),e(`回复 ${s}`)},[e]),i=y.useCallback(s=>{s.some(a=>a.type==="text"&&a.value.trim()||a.type==="image"||a.type==="mention")&&(t(a=>[{id:`c-${Date.now()}`,author:cu,content:s,createdAt:Date.now(),likeCount:0,liked:!1},...a]),e("发布评论"))},[e]),l=y.useMemo(()=>Q(H,[Qr(),Yr(),Kr({maxDepth:3}),Gr({features:{emoji:!0,image:!0,mention:!0}})]),[]);return c.jsxs("div",{style:Wy,children:[c.jsx(l,{comments:n,onLike:o,onReply:r,onSubmit:i,onReport:s=>e(`举报 ${s}`),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"四个能力全开：点赞、排序、楼中楼、富编辑框都在。试试点赞、回复、发图评。"})]})}const Qy=Object.freeze(Object.defineProperty({__proto__:null,default:Vy,meta:Hy},Symbol.toStringTag,{value:"Module"})),Yy="ReportPlugin",Ky="举报：每条评论操作行渲染举报按钮，弹出理由浮层，提交回调 onReport(id, reason)；理由可配置。",Gy="0.2.0",qy=["ui","治理","举报"],Xy=[{name:"reasons",type:"string[]",default:'["垃圾广告","辱骂攻击","色情低俗","诈骗","其他"]',description:"举报理由选项"}],Jy=`const Comment = withCommentPlugins(CommentCore, [
  createReportPlugin(),
]);`,Zy=["操作行 🚩举报按钮","点击弹出理由浮层（单选）","提交回调 onReport(id, reason)"],ev=["社区 / 内容平台评论举报","任意需要内容治理的评论区"],nv=["举报态不本地缓存，提交即回调由消费方处理。"],Zd={name:Yy,description:Ky,since:Gy,tags:qy,config:Xy,example:Jy,features:Zy,useCases:ev,notes:nv},tv=["垃圾广告","辱骂攻击","色情低俗","诈骗","其他"],ov={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function rv({comment:e,onReport:n,reasons:t}){const[o,r]=y.useState(!1),[i,l]=y.useState(null),s=()=>{n==null||n(e.id,i??"其他"),r(!1),l(null)};return c.jsxs("span",{style:{position:"relative",display:"inline-block",flexShrink:0},children:[c.jsx("button",{type:"button","data-testid":"comment-report",onClick:()=>r(a=>!a),style:ov,children:"🚩举报"}),o&&c.jsxs("div",{style:{position:"absolute",top:"100%",left:0,zIndex:20,marginTop:4,background:"#fff",color:"#222",border:"1px solid rgba(0,0,0,0.12)",borderRadius:8,padding:8,minWidth:150,boxShadow:"0 4px 16px rgba(0,0,0,0.15)"},children:[t.map(a=>c.jsxs("label",{style:{display:"flex",gap:6,alignItems:"center",padding:"4px 0",fontSize:13,cursor:"pointer"},children:[c.jsx("input",{type:"radio",checked:i===a,onChange:()=>l(a)}),a]},a)),c.jsx("button",{type:"button",onClick:s,style:{marginTop:6,width:"100%",border:"none",borderRadius:6,padding:"6px 0",background:"#c62828",color:"#fff",cursor:"pointer"},children:"提交举报"})]})]})}function iv(e={}){const n=e.reasons??tv;return{name:"ReportPlugin",version:"0.1.0",description:"举报：每条评论操作行渲染举报按钮，弹出理由选择浮层，提交回调 onReport(id, reason)。",priority:22,enabled:!0,hooks:{renderCommentActions:(t,o)=>c.jsx(rv,{comment:o,reasons:n,onReport:t.props.onReport})}}}const Ts=Object.assign(iv,{meta:Zd}),lv={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},sv={slug:"report",title:"举报",group:"plugin",plugin:"ReportPlugin",intro:"操作行加一个举报入口，弹出理由浮层，提交经 onReport(id, reason) 回调。",why:"社区治理的底线能力；做成插件后，信任度高的内部场景可以不装，避免误伤正常互动。",plugs:[{fn:"createReportPlugin",why:"操作行举报按钮；reasons 可自定义理由列表（默认 5 项）"}],props:[{text:"onReport={(id, reason) => { /* 上报后台 */ }}"}],stageHeight:420};function av({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useMemo(()=>Q(H,[Ts()]),[]);return c.jsxs("div",{style:lv,children:[c.jsx(o,{comments:n,onReport:(r,i)=>e(`举报 ${r} · ${i}`),onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:(r,i)=>e(`点赞 ${i?"取消":"已点"}`),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有举报被装上：点操作行的 🚩举报，选理由提交，事件写进右侧日志。"})]})}const uv=Object.freeze(Object.defineProperty({__proto__:null,default:av,meta:sv},Symbol.toStringTag,{value:"Module"})),cv="SharePlugin",dv="分享：每条评论操作行渲染分享按钮，复制本条评论锚点链接到剪贴板，给出「已复制」反馈。",mv="0.2.0",pv=["ui","互动","分享"],fv=[],gv=`const Comment = withCommentPlugins(CommentCore, [
  createSharePlugin(),
]);`,hv=["操作行 🔗分享按钮","复制锚点链接 #comment-<id>","复制后短暂「已复制链接」反馈"],yv=["社交 / 内容平台评论分享","任意需要分享单条评论的场景"],vv=["剪贴板不可用时静默失败，不影响其它交互。"],em={name:cv,description:dv,since:mv,tags:pv,config:fv,example:gv,features:hv,useCases:yv,notes:vv},Cv={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function xv({comment:e}){const[n,t]=y.useState(!1),o=async()=>{var i;const r=`${typeof location<"u"?location.origin+location.pathname:""}#comment-${e.id}`;try{await((i=navigator.clipboard)==null?void 0:i.writeText(r))}catch{}t(!0),window.setTimeout(()=>t(!1),1500)};return c.jsx("button",{type:"button","data-testid":"comment-share",onClick:o,style:Cv,children:n?"已复制链接":"🔗分享"})}function Sv(){return{name:"SharePlugin",version:"0.1.0",description:"分享：每条评论操作行渲染分享按钮，复制本条评论锚点链接到剪贴板。",priority:23,enabled:!0,hooks:{renderCommentActions:(e,n)=>c.jsx(xv,{comment:n})}}}const Ns=Object.assign(Sv,{meta:em}),kv={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Pv={slug:"share",title:"分享",group:"plugin",plugin:"SharePlugin",intro:"操作行加一个分享按钮，复制本条评论锚点链接到剪贴板，给出已复制反馈。",why:"把高价值评论（神回复、干货）分享出去是社区裂变的入口；纯前端、无后端依赖，按需装。",plugs:[{fn:"createSharePlugin",why:"操作行分享按钮；复制 #comment-<id> 锚点链接"}],props:[],stageHeight:420};function wv({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useMemo(()=>Q(H,[Ns()]),[]);return c.jsxs("div",{style:kv,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有分享被装上：点操作行的 🔗分享，链接写入剪贴板并提示「已复制链接」。"})]})}const _v=Object.freeze(Object.defineProperty({__proto__:null,default:wv,meta:Pv},Symbol.toStringTag,{value:"Module"})),Rv="CopyPlugin",jv="复制：每条评论操作行渲染复制按钮，把结构化富内容转纯文本后复制到剪贴板。",Ev="0.2.0",bv=["ui","工具","复制"],Tv=[],Nv=`const Comment = withCommentPlugins(CommentCore, [
  createCopyPlugin(),
]);`,$v=["操作行 📋复制按钮","富内容转纯文本","复制后短暂「已复制」反馈"],Mv=["任意需要引用 / 转发评论原文的场景"],Lv=["剪贴板不可用时静默失败。"],nm={name:Rv,description:jv,since:Ev,tags:bv,config:Tv,example:Nv,features:$v,useCases:Mv,notes:Lv},Dv={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function Ov(e){const n=[];return(e.content??[]).forEach(t=>{t.type==="text"||t.type==="emoji"?n.push(t.value):t.type==="mention"&&n.push(`@${t.name}`)}),e.text&&n.push(e.text),n.join("")}function zv({comment:e}){const[n,t]=y.useState(!1),o=async()=>{var r;try{await((r=navigator.clipboard)==null?void 0:r.writeText(Ov(e)))}catch{}t(!0),window.setTimeout(()=>t(!1),1500)};return c.jsx("button",{type:"button","data-testid":"comment-copy",onClick:o,style:Dv,children:n?"已复制":"📋复制"})}function Iv(){return{name:"CopyPlugin",version:"0.1.0",description:"复制：每条评论操作行渲染复制按钮，复制评论纯文本到剪贴板。",priority:24,enabled:!0,hooks:{renderCommentActions:(e,n)=>c.jsx(zv,{comment:n})}}}const $s=Object.assign(Iv,{meta:nm}),Fv={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Av={slug:"copy",title:"复制",group:"plugin",plugin:"CopyPlugin",intro:"操作行加一个复制按钮，把评论纯文本（含 @提及）复制到剪贴板。",why:"金句/神回复一键搬运到别处；富文本转纯文本由插件内部处理，消费者零成本。",plugs:[{fn:"createCopyPlugin",why:"操作行复制按钮；富文本转纯文本"}],props:[],stageHeight:420};function Uv({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useMemo(()=>Q(H,[$s()]),[]);return c.jsxs("div",{style:Fv,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有复制被装上：点操作行的 📋复制，整条评论纯文本写入剪贴板（含 @提及）。"})]})}const Bv=Object.freeze(Object.defineProperty({__proto__:null,default:Uv,meta:Av},Symbol.toStringTag,{value:"Module"})),Wv="ReactionPlugin",Hv="多表情反应：每条评论操作行渲染表情反应条（👍❤️😂🎉），点击累加计数，回调 onReact(id, emoji)。区别于 LikePlugin 的单一赞。",Vv="0.2.0",Qv=["ui","互动","表情"],Yv=[{name:"emojis",type:"string[]",default:'["👍","❤️","😂","🎉"]',description:"可选表情集合"}],Kv=`const Comment = withCommentPlugins(CommentCore, [
  createReactionPlugin(),
]);`,Gv=["操作行多表情快速反应","每条表情带计数","回调 onReact(id, emoji)"],qv=["微信 / 微博 / 小红书式评论反应","需要比「赞」更丰富表达的评论区"],Xv=["反应计数显示于 comment.reactions，乐观更新由消费方完成。"],tm={name:Wv,description:Hv,since:Vv,tags:Qv,config:Yv,example:Kv,features:Gv,useCases:qv,notes:Xv},Jv=["👍","❤️","😂","🎉"],Zv={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function e0({comment:e,onReact:n,emojis:t}){const o=e.reactions??{};return c.jsx("span",{"data-testid":"comment-reaction",style:{display:"inline-flex",gap:6,flexShrink:0},children:t.map(r=>{const i=o[r]??0;return c.jsxs("button",{type:"button",onClick:()=>n==null?void 0:n(e.id,r),style:{...Zv,color:i>0?"#1565c0":"inherit",opacity:i>0?1:.7},children:[r,i>0?` ${i}`:""]},r)})})}function n0(e={}){const n=e.emojis??Jv;return{name:"ReactionPlugin",version:"0.1.0",description:"多表情反应：每条评论操作行渲染表情反应条（👍❤️😂🎉），点击累加计数，回调 onReact(id, emoji)。",priority:25,enabled:!0,hooks:{renderCommentActions:(t,o)=>c.jsx(e0,{comment:o,emojis:n,onReact:t.props.onReact})}}}const Ms=Object.assign(n0,{meta:tm}),t0={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},o0={slug:"reaction",title:"多表情反应",group:"plugin",plugin:"ReactionPlugin",intro:"操作行渲染表情反应条，点击累加计数，回调 onReact(id, emoji)。",why:"比「点赞」更轻量也更丰富：用户用表情秒回，不占用评论位；emojis 可自定义。",plugs:[{fn:"createReactionPlugin",cfg:'emojis: ["👍", "❤️", "😂", "🎉"]',why:"操作行表情反应条；emojis 自定义表情集合"}],props:[{text:"onReact={(id, emoji) => { /* 累加计数 */ }}"}],stageHeight:420};function r0({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useMemo(()=>Q(H,[Ms()]),[]),r=y.useCallback((i,l)=>{t(s=>s.map(a=>{if(a.id!==i)return a;const u={...a.reactions??{}};return u[l]=(u[l]??0)+1,{...a,reactions:u}})),e(`反应 ${i} ${l}`)},[e]);return c.jsxs("div",{style:t0,children:[c.jsx(o,{comments:n,onReact:r,onReply:(i,l)=>e("回复（需叠 ThreadPlugin）"),onSubmit:i=>e("发布（需叠 RichComposerPlugin）"),onLike:i=>e("点赞"),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有反应被装上：点表情条里的任意表情，计数 +1 并写进右侧日志。"})]})}const i0=Object.freeze(Object.defineProperty({__proto__:null,default:r0,meta:o0},Symbol.toStringTag,{value:"Module"})),l0="FavoritePlugin",s0="收藏：每条评论操作行渲染收藏按钮，切换回调 onFavorite(id, nextFavorited)；收藏态读 comment.favorited。",a0="0.2.0",u0=["ui","互动","收藏"],c0=[],d0=`const Comment = withCommentPlugins(CommentCore, [
  createFavoritePlugin(),
]);`,m0=["操作行 ☆/★ 收藏按钮","回调 onFavorite(id, next)","读 comment.favorited 反映后端态"],p0=["内容平台评论收藏","电商 / 教程类评论区"],f0=["收藏态不本地缓存，消费方更新 comments 回流后即时反映。"],om={name:l0,description:s0,since:a0,tags:u0,config:c0,example:d0,features:m0,useCases:p0,notes:f0},g0={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function h0({comment:e,onFavorite:n}){const[t,o]=y.useState(!!e.favorited),r=()=>{const i=!t;o(i),n==null||n(e.id,i)};return c.jsx("button",{type:"button","data-testid":"comment-favorite",onClick:r,"aria-pressed":t,style:{...g0,color:t?"#faad14":"inherit"},children:t?"★已收藏":"☆收藏"})}function y0(){return{name:"FavoritePlugin",version:"0.1.0",description:"收藏：每条评论操作行渲染收藏按钮，切换回调 onFavorite(id, nextFavorited)。",priority:26,enabled:!0,hooks:{renderCommentActions:(e,n)=>c.jsx(h0,{comment:n,onFavorite:e.props.onFavorite})}}}const Ls=Object.assign(y0,{meta:om}),v0={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},C0={slug:"favorite",title:"收藏",group:"plugin",plugin:"FavoritePlugin",intro:"操作行加一个收藏按钮，点击切换 ☆/★ 高亮，回调 onFavorite(id, next)。",why:"用户把有用评论收进个人收藏夹；状态本地切换，上报交给 onFavorite。",plugs:[{fn:"createFavoritePlugin",why:"操作行收藏按钮；onFavorite(id, nextFavorited)"}],props:[{text:"onFavorite={(id, next) => { /* 写收藏夹 */ }}"}],stageHeight:420};function x0({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useMemo(()=>Q(H,[Ls()]),[]);return c.jsxs("div",{style:v0,children:[c.jsx(o,{comments:n,onFavorite:(r,i)=>e(`收藏 ${r} → ${i?"已收藏":"取消"}`),onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有收藏被装上：点操作行的 ☆，变 ★ 并写进右侧日志。"})]})}const S0=Object.freeze(Object.defineProperty({__proto__:null,default:x0,meta:C0},Symbol.toStringTag,{value:"Module"})),k0="PinPlugin",P0="置顶：每条评论操作行渲染置顶按钮，切换回调 onPin(id, nextPinned)；Core 读取 comment.pinned 渲染置顶标。",w0="0.2.0",_0=["ui","组织","置顶"],R0=[],j0=`const Comment = withCommentPlugins(CommentCore, [
  createPinPlugin(),
]);`,E0=["操作行 📌 置顶/取消","回调 onPin(id, next)","与 Core 置顶标联动"],b0=["楼主 / 运营置顶优质评论","热帖锚定"],T0=["置顶态读 comment.pinned，后端排序 / 展示由消费方数据决定。"],rm={name:k0,description:P0,since:w0,tags:_0,config:R0,example:j0,features:E0,useCases:b0,notes:T0},N0={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function $0({comment:e,onPin:n}){const[t,o]=y.useState(!!e.pinned),r=()=>{const i=!t;o(i),n==null||n(e.id,i)};return c.jsx("button",{type:"button","data-testid":"comment-pin",onClick:r,"aria-pressed":t,style:{...N0,color:t?"#b35c00":"inherit"},children:t?"📌取消置顶":"📌置顶"})}function M0(){return{name:"PinPlugin",version:"0.1.0",description:"置顶：每条评论操作行渲染置顶按钮，切换回调 onPin(id, nextPinned)；Core 读取 comment.pinned 渲染置顶标。",priority:27,enabled:!0,hooks:{renderCommentActions:(e,n)=>c.jsx($0,{comment:n,onPin:e.props.onPin})}}}const Ds=Object.assign(M0,{meta:rm}),L0={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},D0={slug:"pin",title:"置顶",group:"plugin",plugin:"PinPlugin",intro:"操作行加一个置顶按钮，切换回调 onPin(id, next)；Core 读 pinned 渲染置顶标。",why:"运营把优质/公告评论钉在顶部；pinned 是数据字段，置顶标由 Core 渲染，插件只管切换。",plugs:[{fn:"createPinPlugin",why:"操作行置顶按钮；onPin(id, nextPinned)；置顶标由 Core 渲染"}],props:[{text:"onPin={(id, next) => { /* 改 pinned 字段 */ }}"}],stageHeight:420};function O0({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useMemo(()=>Q(H,[Ds()]),[]);return c.jsxs("div",{style:L0,children:[c.jsx(o,{comments:n,onPin:(r,i)=>e(`置顶 ${r} → ${i?"置顶":"取消"}`),onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有置顶被装上：c-1 默认已置顶（顶部有标），点 📌可切换并写进日志。"})]})}const z0=Object.freeze(Object.defineProperty({__proto__:null,default:O0,meta:D0},Symbol.toStringTag,{value:"Module"})),I0="LocationPlugin",F0="地理位置：评论含 location 字段时在操作行展示 📍 标；Core 默认不渲染 location，由本插件补充。",A0="0.2.0",U0=["ui","信息","地理位置"],B0=[],W0=`const Comment = withCommentPlugins(CommentCore, [
  createLocationPlugin(),
]);`,H0=["条件渲染 📍 标","无 location 时不占位"],V0=["本地生活 / 探店 / 旅行评论区","带定位的 UGC 内容"],Q0=["位置文案来自 comment.location，由数据提供。"],im={name:I0,description:F0,since:A0,tags:U0,config:B0,example:W0,features:H0,useCases:V0,notes:Q0};function Y0(){return{name:"LocationPlugin",version:"0.1.0",description:"地理位置：评论含 location 时在操作行展示 📍 标（Core 不渲染 location，由本插件补充展示）。",priority:28,enabled:!0,hooks:{renderCommentActions:(e,n)=>n.location?c.jsxs("span",{"data-testid":"comment-location",style:{display:"inline-flex",alignItems:"center",gap:2,fontSize:12,color:"#5b6064",flexShrink:0},children:["📍",n.location]}):null}}}const qr=Object.assign(Y0,{meta:im}),K0={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},G0={slug:"location",title:"地理位置",group:"plugin",plugin:"LocationPlugin",intro:"评论含 location 时，操作行补充 📍 位置标（Core 不渲染，由插件补充）。",why:"本地生活/探店场景需要把「在哪发的」亮出来；无 location 的评论自动不显示，零负担。",plugs:[{fn:"createLocationPlugin",why:"操作行展示 location；评论无 location 时不渲染"}],props:[],stageHeight:420};function q0({log:e}){const[n,t]=y.useState(()=>Z().map((r,i)=>i===1?{...r,location:"上海·静安"}:r)),o=y.useMemo(()=>Q(H,[qr()]),[]);return c.jsxs("div",{style:K0,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有地理位置被装上：第二条评论带了 location，操作行出现 📍上海·静安；其余不显示。"})]})}const X0=Object.freeze(Object.defineProperty({__proto__:null,default:q0,meta:G0},Symbol.toStringTag,{value:"Module"})),J0="TimestampPlugin",Z0="绝对时间：Core 默认展示相对时间，本插件在操作行补充绝对时间芯片（YYYY-MM-DD HH:mm），便于精确查看。",e1="0.2.0",n1=["ui","信息","时间"],t1=[],o1=`const Comment = withCommentPlugins(CommentCore, [
  createTimestampPlugin(),
]);`,r1=["操作行绝对时间芯片","与 Core 相对时间并存"],i1=["需要精确时间的合规 / 存档场景","补充相对时间的不足"],l1=["仅展示，不修改 Core 的相对时间渲染。"],lm={name:J0,description:Z0,since:e1,tags:n1,config:t1,example:o1,features:r1,useCases:i1,notes:l1};function s1(e){const n=new Date(e),t=o=>String(o).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function a1(){return{name:"TimestampPlugin",version:"0.1.0",description:"绝对时间：Core 默认展示相对时间，本插件在操作行补充「绝对时间」芯片，便于精确查看发布时刻。",priority:29,enabled:!0,hooks:{renderCommentActions:(e,n)=>c.jsx("span",{"data-testid":"comment-timestamp",style:{fontSize:12,color:"#6b6b6b",flexShrink:0,whiteSpace:"nowrap"},title:"绝对时间",children:s1(n.createdAt)})}}}const Os=Object.assign(a1,{meta:lm}),u1={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},c1={slug:"timestamp",title:"绝对时间",group:"plugin",plugin:"TimestampPlugin",intro:"Core 默认相对时间，本插件补充绝对时间芯片（YYYY-MM-DD HH:mm）。",why:"取证/审核场景需要精确到分钟；相对时间继续保留，绝对时间只是补充。",plugs:[{fn:"createTimestampPlugin",why:"操作行补充绝对时间芯片"}],props:[],stageHeight:420};function d1({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useMemo(()=>Q(H,[Os()]),[]);return c.jsxs("div",{style:u1,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有绝对时间被装上：每条评论操作行多出一串 YYYY-MM-DD HH:mm 精确时间。"})]})}const m1=Object.freeze(Object.defineProperty({__proto__:null,default:d1,meta:c1},Symbol.toStringTag,{value:"Module"})),p1="CountPlugin",f1="计数：顶栏展示评论总数 + 热议标，读取 context.comments.length，随 Filter/Search 实时变化。",g1="0.2.0",h1=["ui","组织","计数"],y1=[],v1=`const Comment = withCommentPlugins(CommentCore, [
  createCountPlugin(),
]);`,C1=["顶栏评论总数","非空时「热议」标","与 Filter/Search 联动计数"],x1=["任意评论区计数展示","与筛选 / 搜索组合"],S1=["计数反映当前经 transformData 后的列表长度。"],sm={name:p1,description:f1,since:g1,tags:h1,config:y1,example:v1,features:C1,useCases:x1,notes:S1};function k1(){return{name:"CountPlugin",version:"0.1.0",description:"计数：顶栏展示评论总数 + 热议标，读取 context.comments.length（随 Filter/Search 实时变化）。",priority:11,enabled:!0,hooks:{renderToolbar:e=>{var t;const n=((t=e.comments)==null?void 0:t.length)??0;return c.jsxs("span",{"data-testid":"comment-count",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:13},children:[c.jsx("strong",{children:n})," 条评论",n>0&&c.jsx("span",{style:{fontSize:11,padding:"1px 6px",borderRadius:4,color:"#b35c00",border:"1px solid rgba(255,143,0,0.4)"},children:"热议"})]})}}}}const zs=Object.assign(k1,{meta:sm}),P1={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},w1={slug:"count",title:"计数",group:"plugin",plugin:"CountPlugin",intro:"顶栏展示评论总数 + 热议标，读取 context.comments.length（随筛选/搜索实时变化）。",why:"顶栏的「N 条评论」是评论区标配；读的是处理后的结果，叠筛选/搜索时自动同步。",plugs:[{fn:"createCountPlugin",why:"顶栏评论总数 + 热议标；读 context.comments.length"}],props:[],stageHeight:420};function _1({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useMemo(()=>Q(H,[zs()]),[]);return c.jsxs("div",{style:P1,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有计数被装上：顶栏出现「N 条评论」+ 热议标，数字等于当前可见评论数。"})]})}const R1=Object.freeze(Object.defineProperty({__proto__:null,default:_1,meta:w1},Symbol.toStringTag,{value:"Module"})),j1="FilterPlugin",E1="筛选：顶栏「全部/有图/有回复」筛选，经 transformData 过滤评论列表（读 state.filter）。",b1="0.2.0",T1=["ui","组织","筛选"],N1=[{name:"options",type:'("all"|"image"|"replies")[]',default:'["all","image","replies"]',description:"筛选项"}],$1=`const Comment = withCommentPlugins(CommentCore, [
  createFilterPlugin(),
]);`,M1=["顶栏筛选芯片","transformData 实时过滤","与 CountPlugin 联动计数"],L1=["电商晒单筛选（有图）","热帖筛选（有回复）"],D1=["过滤发生在排序之前，不影响排序结果。"],am={name:j1,description:E1,since:b1,tags:T1,config:N1,example:$1,features:M1,useCases:L1,notes:D1},O1={all:"全部",image:"有图",replies:"有回复"},z1=e=>({border:"none",borderRadius:999,padding:"4px 12px",fontSize:13,cursor:"pointer",background:e?"rgba(29,161,242,0.16)":"transparent",color:e?"#1565c0":"inherit",opacity:e?1:.7});function I1({context:e,options:n}){var r;const t=((r=e.state)==null?void 0:r.filter)??"all",o=i=>e.setState({filter:i});return c.jsx("div",{"data-testid":"comment-filter",style:{display:"inline-flex",gap:4},children:n.map(i=>c.jsx("button",{type:"button",onClick:()=>o(i),style:z1(t===i),children:O1[i]??i},i))})}function F1(e={}){const n=e.options??["all","image","replies"];return{name:"FilterPlugin",version:"0.1.0",description:"筛选：顶栏「全部/有图/有回复」筛选，经 transformData 过滤评论列表（读 state.filter）。",priority:12,enabled:!0,hooks:{renderToolbar:t=>c.jsx(I1,{context:t,options:n}),transformData:(t,o)=>{var l;const r=((l=t.state)==null?void 0:l.filter)??"all";if(r==="all"||!Array.isArray(o))return o;const i=o;return r==="image"?i.filter(s=>{var a;return(((a=s.images)==null?void 0:a.length)??0)>0}):r==="replies"?i.filter(s=>{var a;return(((a=s.replies)==null?void 0:a.length)??0)>0||(s.replyCount??0)>0}):o}}}}const Is=Object.assign(F1,{meta:am}),A1={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},U1={slug:"filter",title:"筛选",group:"plugin",plugin:"FilterPlugin",intro:"顶栏筛选胶囊（全部/有图/有回复），经 transformData 过滤评论列表。",why:"信息流太长时给读者一个快速收敛的入口；过滤在数据层做，不碰渲染，和排序天然共存。",plugs:[{fn:"createFilterPlugin",cfg:'options: ["all", "image", "replies"]',why:"顶栏筛选；transformData 按 state.filter 过滤"}],props:[],stageHeight:420};function B1({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useMemo(()=>Q(H,[Is()]),[]);return c.jsxs("div",{style:A1,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有筛选被装上：点顶栏「有图」只剩带图的评论，「有回复」只剩带楼中楼的，列表实时收缩。"})]})}const W1=Object.freeze(Object.defineProperty({__proto__:null,default:B1,meta:U1},Symbol.toStringTag,{value:"Module"})),H1="SearchPlugin",V1="搜索：顶栏输入框，经 transformData 按关键词过滤评论（读 state.query，标题/正文/@提及均参与匹配）。",Q1="0.2.0",Y1=["ui","组织","搜索"],K1=[],G1=`const Comment = withCommentPlugins(CommentCore, [
  createSearchPlugin(),
]);`,q1=["顶栏搜索框","transformData 实时过滤","大小写不敏感"],X1=["长评论区站内搜索","客服 / 社区内容检索"],J1=["过滤发生在排序之前。"],um={name:H1,description:V1,since:Q1,tags:Y1,config:K1,example:G1,features:q1,useCases:X1,notes:J1},Z1={border:"1px solid rgba(128,128,128,0.3)",borderRadius:999,padding:"4px 12px",fontSize:13,background:"transparent",color:"inherit",outline:"none",width:140};function eC(e){const n=[];return(e.content??[]).forEach(t=>{t.type==="text"?n.push(t.value):t.type==="mention"&&n.push(t.name)}),e.text&&n.push(e.text),n.join(" ")}function nC({context:e}){var t;const n=((t=e.state)==null?void 0:t.query)??"";return c.jsx("input",{"data-testid":"comment-search",value:n,onChange:o=>e.setState({query:o.target.value}),placeholder:"搜索评论…",style:Z1})}function tC(){return{name:"SearchPlugin",version:"0.1.0",description:"搜索：顶栏输入框，经 transformData 按关键词过滤评论（读 state.query）。",priority:13,enabled:!0,hooks:{renderToolbar:e=>c.jsx(nC,{context:e}),transformData:(e,n)=>{var o;const t=(((o=e.state)==null?void 0:o.query)??"").trim().toLowerCase();return!t||!Array.isArray(n)?n:n.filter(r=>eC(r).toLowerCase().includes(t))}}}}const Fs=Object.assign(tC,{meta:um}),oC={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},rC={slug:"search",title:"搜索",group:"plugin",plugin:"SearchPlugin",intro:"顶栏搜索框，经 transformData 按评论纯文本（含 @提及）过滤。",why:"长评论区必须有检索；同样是数据级插件，和筛选/排序叠加时各自独立生效。",plugs:[{fn:"createSearchPlugin",why:"顶栏搜索框；transformData 按 state.query 过滤"}],props:[],stageHeight:420};function iC({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useMemo(()=>Q(H,[Fs()]),[]);return c.jsxs("div",{style:oC,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有搜索被装上：在顶栏输入「工程文件」「BGM」「SKU」等，列表只留命中的评论。"})]})}const lC=Object.freeze(Object.defineProperty({__proto__:null,default:iC,meta:rC},Symbol.toStringTag,{value:"Module"})),sC="ModerationPlugin",aC="审核：经 transformData 屏蔽敏感词（替换为 **）并过滤待审 / 已删评论；属于数据级插件，不渲染 UI。",uC="0.2.0",cC=["治理","审核","安全"],dC=[{name:"words",type:"string[]",default:'["傻逼","广告","加微信","加我"]',description:"敏感词集合，命中替换为 **"},{name:"hidePending",type:"boolean",default:"true",description:"是否过滤待审 / 已删评论"}],mC=`const Comment = withCommentPlugins(CommentCore, [
  createModerationPlugin(),
]);`,pC=["敏感词脱敏","过滤待审 / 已删","纯数据级，零 UI 体积"],fC=["内容安全合规","UGC 社区前置审核"],gC=["处理顺序在排序之前；不修改原始数据对象（返回新数组）。"],cm={name:sC,description:aC,since:uC,tags:cC,config:dC,example:mC,features:pC,useCases:fC,notes:gC},hC=["傻逼","广告","加微信","加我"];function yC(e,n){return e.map(t=>{if(t.type==="text"){let o=t.value;return n.forEach(r=>{o.includes(r)&&(o=o.split(r).join("**"))}),{...t,value:o}}return t})}function vC(e={}){const n=e.words??hC,t=e.hidePending??!0;return{name:"ModerationPlugin",version:"0.1.0",description:"审核：经 transformData 屏蔽敏感词（替换为 **）并过滤待审/已删评论（hidePending 默认开）。",priority:14,enabled:!0,hooks:{transformData:(o,r)=>{if(!Array.isArray(r))return r;let i=r;return t&&(i=i.filter(l=>l.status!=="pending"&&l.status!=="deleted")),i.map(l=>({...l,content:yC(l.content??[],n)}))}}}}const As=Object.assign(vC,{meta:cm}),CC={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},xC={slug:"moderation",title:"审核",group:"plugin",plugin:"ModerationPlugin",intro:"数据级审核：敏感词脱敏（**）+ 过滤待审/已删；不渲染任何 UI。",why:"合规前置在数据层，一次装配全列表生效；不渲染 UI，性能零负担。",plugs:[{fn:"createModerationPlugin",cfg:"hidePending: {{hidePending}}",why:"transformData 脱敏 + 过滤；hidePending 默认 true"}],props:[],controls:[{key:"hidePending",label:"过滤待审/已删",kind:"switch",init:!0}],stageHeight:460};function SC({cfg:e,log:n}){const[t,o]=y.useState(()=>Z().map(l=>l.id==="c-1"?{...l,content:[{type:"text",value:"这期广告太多，加微信领福利的私我"}]}:l)),r=!!e.hidePending,i=y.useMemo(()=>Q(H,[As({hidePending:r})]),[r]);return c.jsxs("div",{style:CC,children:[c.jsx(i,{comments:t,onReply:(l,s)=>n("回复（需叠 ThreadPlugin）"),onSubmit:l=>n("发布（需叠 RichComposerPlugin）"),onLike:l=>n("点赞"),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有审核被装上：第一条里的「广告」「加微信」被脱敏成 **；关掉开关后待审/已删也会显示。"})]})}const kC=Object.freeze(Object.defineProperty({__proto__:null,default:SC,meta:xC},Symbol.toStringTag,{value:"Module"})),PC="LoginPromptPlugin",wC="未登录引导：底部渲染「登录后参与评论」引导条，回调 onLogin；与 RichComposerPlugin 同槽共存。",_C="0.2.0",RC=["ui","转化","登录"],jC=[],EC=`const Comment = withCommentPlugins(CommentCore, [
  createLoginPromptPlugin(),
]);`,bC=["底部登录引导条","回调 onLogin"],TC=["未登录态促登录","评论框前置引导"],NC=["仅展示引导，是否隐藏登录态由消费方条件装配决定。"],dm={name:PC,description:wC,since:_C,tags:RC,config:jC,example:EC,features:bC,useCases:TC,notes:NC};function $C(){return{name:"LoginPromptPlugin",version:"0.1.0",description:"未登录引导：底部渲染「登录后参与评论」引导条，回调 onLogin；可与 RichComposerPlugin 同槽共存。",priority:33,enabled:!0,hooks:{renderFooter:e=>c.jsxs("div",{"data-testid":"comment-login-prompt",style:{display:"flex",alignItems:"center",gap:8,padding:"10px 0",fontSize:13},children:[c.jsx("span",{children:"登录后参与评论，发表你的看法"}),c.jsx("button",{type:"button",onClick:()=>{var n,t;return(t=(n=e.props).onLogin)==null?void 0:t.call(n)},style:{border:"1px solid rgba(29,161,242,0.5)",borderRadius:999,padding:"4px 14px",background:"transparent",color:"#1565c0",cursor:"pointer"},children:"登录"})]})}}}const Us=Object.assign($C,{meta:dm}),MC={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},LC={slug:"login",title:"未登录引导",group:"plugin",plugin:"LoginPromptPlugin",intro:"底部渲染登录引导条，点击登录回调 onLogin；与 RichComposer 同槽可共存。",why:"未登录态下把评论框换成轻引导，登录后切真框；同槽并联，不抢位。",plugs:[{fn:"createLoginPromptPlugin",why:"底部登录引导；onLogin 回调"}],props:[{text:"onLogin={() => { /* 跳转登录 */ }}"}],stageHeight:420};function DC({log:e}){const[n,t]=y.useState(()=>Z()),o=y.useMemo(()=>Q(H,[Us()]),[]);return c.jsxs("div",{style:MC,children:[c.jsx(o,{comments:n,onLogin:()=>e("点击登录 → 跳转登录页"),onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:J}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有未登录引导被装上：列表底部出现「登录后参与评论」+ 登录按钮，点击写进日志。"})]})}const OC=Object.freeze(Object.defineProperty({__proto__:null,default:DC,meta:LC},Symbol.toStringTag,{value:"Module"})),zC=`import React, { useCallback, useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { COMMENTS, MENTIONS, freshComments } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 00 · 最小评论列表（基础功能）
 * 裸 Core 起步：列表壳 + 排序 + 操作行占位，一个插件都不装。
 * 这是后续每个能力页的起点——能力全靠插件往上叠。
 */
export const meta: DemoMeta = {
  slug: "quickstart",
  title: "最小评论列表",
  group: "basic",
  capability: "core-list",
  intro: "5 行装配出能跑的评论列表：Core 只做数据驱动渲染，能力靠插件增量叠加。",
  why: "先跑通内核，再按需叠点赞 / 排序 / 楼中楼 / 富编辑——评论区的长尾需求多，全塞进内核只会越来越难改。",
  plugs: [],
  props: [],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());

  const onLike = useCallback(
    (id: string) => {
      setComments((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, liked: !c.liked, likeCount: (c.likeCount ?? 0) + (c.liked ? -1 : 1) }
            : c
        )
      );
      log(\`点赞 \${id}\`);
    },
    [log]
  );

  // 裸 Core 没有点赞/回复 UI，但把回调接上，叠了插件就能直接用
  const Comment = useMemo(() => withCommentPlugins(CommentCore, []), []);

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onLike={onLike}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onReport={(id) => log(\`举报 \${id}\`)}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        这是裸 Core：列表 / 置顶 / 删除态 / 审核态都内置，但点赞、排序、楼中楼、评论框要叠插件才有。
      </p>
    </div>
  );
}
`,IC=`import React, { useCallback, useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createLikePlugin } from "vane-comment/custom-plugins/LikePlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { COMMENTS, MENTIONS, freshComments } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 01 · 点赞（插件功能）
 * 只装 LikePlugin：操作行出现点赞按钮，点一下本地计数 +1 并触发缩放动效，
 * 回调 onLike 把「真的点了」摊到事件日志。用 showCount 开关演示配置项。
 */
export const meta: DemoMeta = {
  slug: "like",
  title: "点赞",
  group: "plugin",
  plugin: "LikePlugin",
  intro: "操作行加一个点赞按钮，本地计数 + 缩放回弹动效，事件经 onLike 回调。",
  why: "点赞是评论区最高频的互动；做成插件后，不要点赞的场景（如内部审核台）不装即可。",
  plugs: [
    { fn: "createLikePlugin", cfg: "showCount: {{showCount}}", why: "操作行点赞按钮；showCount 控制是否显示计数" },
  ],
  props: [],
  controls: [
    { key: "showCount", label: "显示计数", kind: "switch", init: true },
  ],
  stageHeight: 420,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const showCount = Boolean(cfg.showCount);

  const onLike = useCallback(
    (id: string) => {
      setComments((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, liked: !c.liked, likeCount: (c.likeCount ?? 0) + (c.liked ? -1 : 1) }
            : c
        )
      );
      log(\`点赞 \${id}\`);
    },
    [log]
  );

  // 组件类型随开关重建（改配置 = 重装配）
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createLikePlugin({ showCount })]),
    [showCount]
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onLike={onLike}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onReport={(id) => log(\`举报 \${id}\`)}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有点赞被装上：试试点操作行的 ♥，计数和动效都会变，事件写进右侧日志。
      </p>
    </div>
  );
}
`,FC=`import React, { useCallback, useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createSortPlugin } from "vane-comment/custom-plugins/SortPlugin";
import type { Comment, CommentNode, SortMode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { COMMENTS, MENTIONS, freshComments } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

const MODE_OPTIONS = [
  { label: "最新", value: "newest" },
  { label: "最早", value: "oldest" },
  { label: "最热", value: "hottest" },
  { label: "点赞最多", value: "mostLiked" },
];

/**
 * 02 · 排序（插件功能）
 * 只装 SortPlugin：顶栏出现排序条（最新/最早/最热/点赞最多），切换后列表实时重排。
 * 用 defaultSortMode 开关演示初始排序。
 */
export const meta: DemoMeta = {
  slug: "sort",
  title: "排序",
  group: "plugin",
  plugin: "SortPlugin",
  intro: "顶栏排序条：最新 / 最早 / 最热 / 点赞最多，切换即重排，纯函数排序不碰 DOM。",
  why: "视频和电商都重度依赖排序（最热优先 vs 最新优先），但内部后台只想看最新——做成插件按需装配。",
  plugs: [
    { fn: "createSortPlugin", why: "顶栏排序条；默认三种模式，可传 modes 与 defaultMode 裁剪" },
  ],
  props: ['defaultSortMode="newest"'],
  controls: [
    { key: "mode", label: "初始排序", kind: "select", init: "newest", options: MODE_OPTIONS },
  ],
  stageHeight: 420,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const mode = (cfg.mode as SortMode) || "newest";

  const onLike = useCallback(
    (id: string) => {
      setComments((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, liked: !c.liked, likeCount: (c.likeCount ?? 0) + (c.liked ? -1 : 1) }
            : c
        )
      );
    },
    []
  );

  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createSortPlugin()]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        defaultSortMode={mode}
        onLike={onLike}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onReport={(id) => log(\`举报 \${id}\`)}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        顶栏多了排序条：点「最热」后点赞多的评论会浮上来。初始排序由控件决定。
      </p>
    </div>
  );
}
`,AC=`import React, { useCallback, useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createThreadPlugin } from "vane-comment/custom-plugins/ThreadPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { COMMENTS, MENTIONS, freshComments } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

const ME = { id: "u-me", name: "我", avatar: undefined };

const DEPTH_OPTIONS = [
  { label: "1 层", value: "1" },
  { label: "2 层", value: "2" },
  { label: "3 层", value: "3" },
];

/**
 * 03 · 楼中楼（插件功能）
 * 只装 ThreadPlugin：顶评论的「回复」唤起内联回复框，嵌套回复递归渲染并限深折叠。
 * 用 maxDepth 开关演示嵌套深度。嵌套回复复用同一组槽——子回复也能点赞 / 继续回复。
 */
export const meta: DemoMeta = {
  slug: "thread",
  title: "楼中楼",
  group: "plugin",
  plugin: "ThreadPlugin",
  intro: "操作行的「回复」唤起内联框，嵌套回复递归渲染、限深折叠；子回复同样走点赞 / 继续回复。",
  why: "社交与视频评论区离不开楼中楼；限深避免无限嵌套把版面撑爆。",
  plugs: [
    { fn: "createThreadPlugin", cfg: "maxDepth: {{maxDepth}}", why: "renderNested 递归渲染 replies；maxDepth 控制嵌套上限" },
  ],
  props: [],
  controls: [
    { key: "maxDepth", label: "嵌套深度", kind: "select", init: "3", options: DEPTH_OPTIONS },
  ],
  stageHeight: 460,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const maxDepth = Number(cfg.maxDepth) || 3;

  const onLike = useCallback(
    (id: string) => {
      setComments((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, liked: !c.liked, likeCount: (c.likeCount ?? 0) + (c.liked ? -1 : 1) }
            : c
        )
      );
    },
    []
  );

  const onReply = useCallback((parentId: string, content: CommentNode[]) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === parentId
          ? {
              ...c,
              replies: [
                {
                  id: \`\${parentId}-r\${Date.now()}\`,
                  author: ME,
                  content,
                  createdAt: Date.now(),
                  likeCount: 0,
                  liked: false,
                },
                ...(c.replies ?? []),
              ],
              replyCount: (c.replyCount ?? 0) + 1,
            }
          : c
      )
    );
    log(\`回复 \${parentId}\`);
  }, [log]);

  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createThreadPlugin({ maxDepth })]),
    [maxDepth]
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onLike={onLike}
        onReply={onReply}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onReport={(id) => log(\`举报 \${id}\`)}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        点任意评论的「回复」会弹出内联框；嵌套回复点开可看，深度由控件控制。
      </p>
    </div>
  );
}
`,UC=`import React, { useCallback, useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createRichComposerPlugin } from "vane-comment/custom-plugins/RichComposerPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { COMMENTS, MENTIONS, freshComments } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

const ME = { id: "u-me", name: "我", avatar: undefined };

/**
 * 04 · 富编辑（插件功能）
 * 只装 RichComposerPlugin：底部出现评论框，支持 emoji 选择器 / 图片（DataURL）/ @提及，
 * 输出结构化 CommentNode[] 回调 onSubmit。用三个开关裁剪能力。
 */
export const meta: DemoMeta = {
  slug: "rich-composer",
  title: "富编辑",
  group: "plugin",
  plugin: "RichComposerPlugin",
  intro: "底部评论框：emoji 选择器 + 图片 + @提及，输出结构化富内容，实时预览。",
  why: "社交平台要表情和提及，电商要晒图评价——但后台回复框只想要纯文本，做成插件按需开关。",
  plugs: [
    {
      fn: "createRichComposerPlugin",
      cfg: "features: { emoji: {{withEmoji}}, image: {{withImage}}, mention: {{withMention}} }",
      why: "renderFooter 评论框；features 裁剪 emoji / 图片 / @提及",
    },
  ],
  props: [],
  controls: [
    { key: "withEmoji", label: "emoji", kind: "switch", init: true },
    { key: "withImage", label: "图片", kind: "switch", init: true },
    { key: "withMention", label: "@提及", kind: "switch", init: true },
  ],
  stageHeight: 460,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const withEmoji = Boolean(cfg.withEmoji);
  const withImage = Boolean(cfg.withImage);
  const withMention = Boolean(cfg.withMention);

  const onLike = useCallback(
    (id: string) => {
      setComments((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, liked: !c.liked, likeCount: (c.likeCount ?? 0) + (c.liked ? -1 : 1) }
            : c
        )
      );
    },
    []
  );

  const onSubmit = useCallback(
    (content: CommentNode[]) => {
      if (!content.some((n) => (n.type === "text" && n.value.trim()) || n.type === "image" || n.type === "mention")) {
        return;
      }
      setComments((prev) => [
        { id: \`c-\${Date.now()}\`, author: ME, content, createdAt: Date.now(), likeCount: 0, liked: false },
        ...prev,
      ]);
      log("发布评论");
    },
    [log]
  );

  const Comment = useMemo(
    () =>
      withCommentPlugins(CommentCore, [
        createRichComposerPlugin({
          features: { emoji: withEmoji, image: withImage, mention: withMention },
        }),
      ]),
    [withEmoji, withImage, withMention]
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onLike={onLike}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={onSubmit}
        onReport={(id) => log(\`举报 \${id}\`)}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        底部评论框：点 😊 选表情、🖼️ 传图、@ 提及好友，下方实时预览，发布后新评论置顶。
      </p>
    </div>
  );
}
`,BC=`import React, { useCallback, useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createLikePlugin } from "vane-comment/custom-plugins/LikePlugin";
import { createSortPlugin } from "vane-comment/custom-plugins/SortPlugin";
import { createThreadPlugin } from "vane-comment/custom-plugins/ThreadPlugin";
import { createRichComposerPlugin } from "vane-comment/custom-plugins/RichComposerPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { COMMENTS, MENTIONS, freshComments } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

const ME = { id: "u-me", name: "我", avatar: undefined };

/**
 * 05 · 全家桶（高级功能）
 * 四个能力一次性装配：点赞 + 排序 + 楼中楼 + 富编辑。点赞 / 回复 / 发布都真正改状态。
 * 这就是一个能用的通用评论区——视频 / 社交 / 电商只是换预设里的开关组合。
 */
export const meta: DemoMeta = {
  slug: "full-combo",
  title: "全家桶",
  group: "advanced",
  capability: "full-combo",
  intro: "点赞 + 排序 + 楼中楼 + 富编辑一次性装配，点赞 / 回复 / 发布都真正改状态。",
  why: "想看「一个通用评论区到底长什么样」，这一页就是；四个能力按 priority 串联，互不覆盖。",
  plugs: [
    { fn: "createLikePlugin", why: "操作行点赞按钮" },
    { fn: "createSortPlugin", why: "顶栏排序条" },
    { fn: "createThreadPlugin", cfg: "maxDepth: 3", why: "楼中楼嵌套回复" },
    { fn: "createRichComposerPlugin", cfg: "features: { emoji: true, image: true, mention: true }", why: "底部富编辑评论框" },
  ],
  props: [],
  stageHeight: 520,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());

  const onLike = useCallback(
    (id: string) => {
      setComments((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, liked: !c.liked, likeCount: (c.likeCount ?? 0) + (c.liked ? -1 : 1) }
            : c
        )
      );
      log(\`点赞 \${id}\`);
    },
    [log]
  );

  const onReply = useCallback((parentId: string, content: CommentNode[]) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === parentId
          ? {
              ...c,
              replies: [
                { id: \`\${parentId}-r\${Date.now()}\`, author: ME, content, createdAt: Date.now(), likeCount: 0, liked: false },
                ...(c.replies ?? []),
              ],
              replyCount: (c.replyCount ?? 0) + 1,
            }
          : c
      )
    );
    log(\`回复 \${parentId}\`);
  }, [log]);

  const onSubmit = useCallback(
    (content: CommentNode[]) => {
      if (!content.some((n) => (n.type === "text" && n.value.trim()) || n.type === "image" || n.type === "mention")) {
        return;
      }
      setComments((prev) => [
        { id: \`c-\${Date.now()}\`, author: ME, content, createdAt: Date.now(), likeCount: 0, liked: false },
        ...prev,
      ]);
      log("发布评论");
    },
    [log]
  );

  const Comment = useMemo(
    () =>
      withCommentPlugins(CommentCore, [
        createLikePlugin(),
        createSortPlugin(),
        createThreadPlugin({ maxDepth: 3 }),
        createRichComposerPlugin({ features: { emoji: true, image: true, mention: true } }),
      ]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onLike={onLike}
        onReply={onReply}
        onSubmit={onSubmit}
        onReport={(id) => log(\`举报 \${id}\`)}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        四个能力全开：点赞、排序、楼中楼、富编辑框都在。试试点赞、回复、发图评。
      </p>
    </div>
  );
}
`,WC=`import React, { useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createReportPlugin } from "vane-comment/custom-plugins/ReportPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 06 · 举报（插件功能）
 * 只装 ReportPlugin：操作行出现「🚩举报」，点开弹出理由浮层，选理由后提交，
 * 回调 onReport(id, reason) 把「谁举报了什么」摊到日志。
 */
export const meta: DemoMeta = {
  slug: "report",
  title: "举报",
  group: "plugin",
  plugin: "ReportPlugin",
  intro: "操作行加一个举报入口，弹出理由浮层，提交经 onReport(id, reason) 回调。",
  why: "社区治理的底线能力；做成插件后，信任度高的内部场景可以不装，避免误伤正常互动。",
  plugs: [
    { fn: "createReportPlugin", why: "操作行举报按钮；reasons 可自定义理由列表（默认 5 项）" },
  ],
  props: [{ text: "onReport={(id, reason) => { /* 上报后台 */ }}" }],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createReportPlugin()]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onReport={(id, reason) => log(\`举报 \${id} · \${reason}\`)}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id, n) => log(\`点赞 \${n ? "取消" : "已点"}\`)}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有举报被装上：点操作行的 🚩举报，选理由提交，事件写进右侧日志。
      </p>
    </div>
  );
}
`,HC=`import React, { useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createSharePlugin } from "vane-comment/custom-plugins/SharePlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 07 · 分享（插件功能）
 * 只装 SharePlugin：操作行出现「🔗分享」，点击把本条评论的锚点链接复制到剪贴板，
 * 给出「已复制链接」反馈。无需任何回调，纯前端能力。
 */
export const meta: DemoMeta = {
  slug: "share",
  title: "分享",
  group: "plugin",
  plugin: "SharePlugin",
  intro: "操作行加一个分享按钮，复制本条评论锚点链接到剪贴板，给出已复制反馈。",
  why: "把高价值评论（神回复、干货）分享出去是社区裂变的入口；纯前端、无后端依赖，按需装。",
  plugs: [{ fn: "createSharePlugin", why: "操作行分享按钮；复制 #comment-<id> 锚点链接" }],
  props: [],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createSharePlugin()]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id) => log("点赞")}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有分享被装上：点操作行的 🔗分享，链接写入剪贴板并提示「已复制链接」。
      </p>
    </div>
  );
}
`,VC=`import React, { useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createCopyPlugin } from "vane-comment/custom-plugins/CopyPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 08 · 复制（插件功能）
 * 只装 CopyPlugin：操作行出现「📋复制」，点击把评论的纯文本（含 @提及）复制到剪贴板。
 * 无需任何回调，纯前端能力。
 */
export const meta: DemoMeta = {
  slug: "copy",
  title: "复制",
  group: "plugin",
  plugin: "CopyPlugin",
  intro: "操作行加一个复制按钮，把评论纯文本（含 @提及）复制到剪贴板。",
  why: "金句/神回复一键搬运到别处；富文本转纯文本由插件内部处理，消费者零成本。",
  plugs: [{ fn: "createCopyPlugin", why: "操作行复制按钮；富文本转纯文本" }],
  props: [],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createCopyPlugin()]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id) => log("点赞")}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有复制被装上：点操作行的 📋复制，整条评论纯文本写入剪贴板（含 @提及）。
      </p>
    </div>
  );
}
`,QC=`import React, { useCallback, useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createReactionPlugin } from "vane-comment/custom-plugins/ReactionPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 09 · 多表情反应（插件功能）
 * 只装 ReactionPlugin：操作行出现表情反应条（👍❤️😂🎉），点击累加对应计数，
 * 回调 onReact(id, emoji)。这里把计数写回 comments，让反应真正 +1。
 */
export const meta: DemoMeta = {
  slug: "reaction",
  title: "多表情反应",
  group: "plugin",
  plugin: "ReactionPlugin",
  intro: "操作行渲染表情反应条，点击累加计数，回调 onReact(id, emoji)。",
  why: "比「点赞」更轻量也更丰富：用户用表情秒回，不占用评论位；emojis 可自定义。",
  plugs: [
    {
      fn: "createReactionPlugin",
      cfg: 'emojis: ["👍", "❤️", "😂", "🎉"]',
      why: "操作行表情反应条；emojis 自定义表情集合",
    },
  ],
  props: [{ text: "onReact={(id, emoji) => { /* 累加计数 */ }}" }],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createReactionPlugin()]),
    []
  );

  const onReact = useCallback(
    (id: string, emoji: string) => {
      setComments((prev) =>
        prev.map((c) => {
          if (c.id !== id) return c;
          const r = { ...(c.reactions ?? {}) };
          r[emoji] = (r[emoji] ?? 0) + 1;
          return { ...c, reactions: r };
        })
      );
      log(\`反应 \${id} \${emoji}\`);
    },
    [log]
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onReact={onReact}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id) => log("点赞")}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有反应被装上：点表情条里的任意表情，计数 +1 并写进右侧日志。
      </p>
    </div>
  );
}
`,YC=`import React, { useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createFavoritePlugin } from "vane-comment/custom-plugins/FavoritePlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 10 · 收藏（插件功能）
 * 只装 FavoritePlugin：操作行出现「☆收藏 / ★已收藏」，点击切换高亮，
 * 回调 onFavorite(id, next)。高亮状态由插件本地维护。
 */
export const meta: DemoMeta = {
  slug: "favorite",
  title: "收藏",
  group: "plugin",
  plugin: "FavoritePlugin",
  intro: "操作行加一个收藏按钮，点击切换 ☆/★ 高亮，回调 onFavorite(id, next)。",
  why: "用户把有用评论收进个人收藏夹；状态本地切换，上报交给 onFavorite。",
  plugs: [{ fn: "createFavoritePlugin", why: "操作行收藏按钮；onFavorite(id, nextFavorited)" }],
  props: [{ text: "onFavorite={(id, next) => { /* 写收藏夹 */ }}" }],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createFavoritePlugin()]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onFavorite={(id, next) => log(\`收藏 \${id} → \${next ? "已收藏" : "取消"}\`)}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id) => log("点赞")}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有收藏被装上：点操作行的 ☆，变 ★ 并写进右侧日志。
      </p>
    </div>
  );
}
`,KC=`import React, { useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createPinPlugin } from "vane-comment/custom-plugins/PinPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 11 · 置顶（插件功能）
 * 只装 PinPlugin：操作行出现「📌置顶 / 📌取消置顶」，点击切换，回调 onPin(id, next)；
 * Core 读取 comment.pinned 在顶部渲染置顶标。样例里 c-1 默认已置顶。
 */
export const meta: DemoMeta = {
  slug: "pin",
  title: "置顶",
  group: "plugin",
  plugin: "PinPlugin",
  intro: "操作行加一个置顶按钮，切换回调 onPin(id, next)；Core 读 pinned 渲染置顶标。",
  why: "运营把优质/公告评论钉在顶部；pinned 是数据字段，置顶标由 Core 渲染，插件只管切换。",
  plugs: [{ fn: "createPinPlugin", why: "操作行置顶按钮；onPin(id, nextPinned)；置顶标由 Core 渲染" }],
  props: [{ text: "onPin={(id, next) => { /* 改 pinned 字段 */ }}" }],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createPinPlugin()]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onPin={(id, next) => log(\`置顶 \${id} → \${next ? "置顶" : "取消"}\`)}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id) => log("点赞")}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有置顶被装上：c-1 默认已置顶（顶部有标），点 📌可切换并写进日志。
      </p>
    </div>
  );
}
`,GC=`import React, { useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createLocationPlugin } from "vane-comment/custom-plugins/LocationPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 12 · 地理位置（插件功能）
 * 只装 LocationPlugin：评论含 location 时，操作行补充 📍 标。这里给第二条评论注入 location。
 * Core 本身不渲染 location，由本插件补充展示。
 */
export const meta: DemoMeta = {
  slug: "location",
  title: "地理位置",
  group: "plugin",
  plugin: "LocationPlugin",
  intro: "评论含 location 时，操作行补充 📍 位置标（Core 不渲染，由插件补充）。",
  why: "本地生活/探店场景需要把「在哪发的」亮出来；无 location 的评论自动不显示，零负担。",
  plugs: [{ fn: "createLocationPlugin", why: "操作行展示 location；评论无 location 时不渲染" }],
  props: [],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() =>
    freshComments().map((c, i) => (i === 1 ? { ...c, location: "上海·静安" } : c))
  );
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createLocationPlugin()]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id) => log("点赞")}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有地理位置被装上：第二条评论带了 location，操作行出现 📍上海·静安；其余不显示。
      </p>
    </div>
  );
}
`,qC=`import React, { useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createTimestampPlugin } from "vane-comment/custom-plugins/TimestampPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 13 · 绝对时间（插件功能）
 * 只装 TimestampPlugin：Core 默认展示相对时间，本插件在操作行补充「绝对时间」芯片，
 * 便于精确查看发布时刻。无回调。
 */
export const meta: DemoMeta = {
  slug: "timestamp",
  title: "绝对时间",
  group: "plugin",
  plugin: "TimestampPlugin",
  intro: "Core 默认相对时间，本插件补充绝对时间芯片（YYYY-MM-DD HH:mm）。",
  why: "取证/审核场景需要精确到分钟；相对时间继续保留，绝对时间只是补充。",
  plugs: [{ fn: "createTimestampPlugin", why: "操作行补充绝对时间芯片" }],
  props: [],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createTimestampPlugin()]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id) => log("点赞")}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有绝对时间被装上：每条评论操作行多出一串 YYYY-MM-DD HH:mm 精确时间。
      </p>
    </div>
  );
}
`,XC=`import React, { useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createCountPlugin } from "vane-comment/custom-plugins/CountPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 14 · 计数（插件功能）
 * 只装 CountPlugin：顶栏展示评论总数 + 热议标，读取 context.comments.length。
 * 注意它读的是经 Filter/Search 处理后的结果，叠这两插件时会跟着变。
 */
export const meta: DemoMeta = {
  slug: "count",
  title: "计数",
  group: "plugin",
  plugin: "CountPlugin",
  intro: "顶栏展示评论总数 + 热议标，读取 context.comments.length（随筛选/搜索实时变化）。",
  why: "顶栏的「N 条评论」是评论区标配；读的是处理后的结果，叠筛选/搜索时自动同步。",
  plugs: [{ fn: "createCountPlugin", why: "顶栏评论总数 + 热议标；读 context.comments.length" }],
  props: [],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createCountPlugin()]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id) => log("点赞")}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有计数被装上：顶栏出现「N 条评论」+ 热议标，数字等于当前可见评论数。
      </p>
    </div>
  );
}
`,JC=`import React, { useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createFilterPlugin } from "vane-comment/custom-plugins/FilterPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 15 · 筛选（插件功能）
 * 只装 FilterPlugin：顶栏出现「全部 / 有图 / 有回复」胶囊，点击经 transformData 过滤列表。
 * 这是数据级插件：它不渲染评论，只改传给 Core 的数据。
 */
export const meta: DemoMeta = {
  slug: "filter",
  title: "筛选",
  group: "plugin",
  plugin: "FilterPlugin",
  intro: "顶栏筛选胶囊（全部/有图/有回复），经 transformData 过滤评论列表。",
  why: "信息流太长时给读者一个快速收敛的入口；过滤在数据层做，不碰渲染，和排序天然共存。",
  plugs: [
    {
      fn: "createFilterPlugin",
      cfg: 'options: ["all", "image", "replies"]',
      why: "顶栏筛选；transformData 按 state.filter 过滤",
    },
  ],
  props: [],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createFilterPlugin()]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id) => log("点赞")}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有筛选被装上：点顶栏「有图」只剩带图的评论，「有回复」只剩带楼中楼的，列表实时收缩。
      </p>
    </div>
  );
}
`,ZC=`import React, { useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createSearchPlugin } from "vane-comment/custom-plugins/SearchPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 16 · 搜索（插件功能）
 * 只装 SearchPlugin：顶栏出现搜索框，输入关键词经 transformData 按评论纯文本过滤。
 * 数据级插件：不改渲染，只改传给 Core 的数据。
 */
export const meta: DemoMeta = {
  slug: "search",
  title: "搜索",
  group: "plugin",
  plugin: "SearchPlugin",
  intro: "顶栏搜索框，经 transformData 按评论纯文本（含 @提及）过滤。",
  why: "长评论区必须有检索；同样是数据级插件，和筛选/排序叠加时各自独立生效。",
  plugs: [{ fn: "createSearchPlugin", why: "顶栏搜索框；transformData 按 state.query 过滤" }],
  props: [],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createSearchPlugin()]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id) => log("点赞")}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有搜索被装上：在顶栏输入「工程文件」「BGM」「SKU」等，列表只留命中的评论。
      </p>
    </div>
  );
}
`,ex=`import React, { useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createModerationPlugin } from "vane-comment/custom-plugins/ModerationPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 17 · 审核（插件功能）
 * 只装 ModerationPlugin：数据级插件，经 transformData 把敏感词（广告/加微信…）替换为 **，
 * 并默认过滤待审/已删评论。这里把第一条评论改成含敏感词，直观看到脱敏效果。
 * 开关「过滤待审/已删」会重建插件：关掉后 c-3（待审）、c-4（已删）也会显示出来。
 */
export const meta: DemoMeta = {
  slug: "moderation",
  title: "审核",
  group: "plugin",
  plugin: "ModerationPlugin",
  intro: "数据级审核：敏感词脱敏（**）+ 过滤待审/已删；不渲染任何 UI。",
  why: "合规前置在数据层，一次装配全列表生效；不渲染 UI，性能零负担。",
  plugs: [
    {
      fn: "createModerationPlugin",
      cfg: "hidePending: {{hidePending}}",
      why: "transformData 脱敏 + 过滤；hidePending 默认 true",
    },
  ],
  props: [],
  controls: [
    { key: "hidePending", label: "过滤待审/已删", kind: "switch", init: true },
  ],
  stageHeight: 460,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() =>
    freshComments().map((c) =>
      c.id === "c-1"
        ? { ...c, content: [{ type: "text", value: "这期广告太多，加微信领福利的私我" }] }
        : c
    )
  );
  const hidePending = Boolean(cfg.hidePending);

  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createModerationPlugin({ hidePending })]),
    [hidePending]
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id) => log("点赞")}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有审核被装上：第一条里的「广告」「加微信」被脱敏成 **；关掉开关后待审/已删也会显示。
      </p>
    </div>
  );
}
`,nx=`import React, { useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createLoginPromptPlugin } from "vane-comment/custom-plugins/LoginPromptPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { DemoMeta, DemoStageProps } from "./types";
import { freshComments, MENTIONS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  padding: 16,
  color: "#1f2328",
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
};

/**
 * 18 · 未登录引导（插件功能）
 * 只装 LoginPromptPlugin：底部渲染「登录后参与评论」引导条，点击登录回调 onLogin。
 * 与 RichComposerPlugin 同属 renderFooter 槽，可共存（一个引导、一个发评论）。
 */
export const meta: DemoMeta = {
  slug: "login",
  title: "未登录引导",
  group: "plugin",
  plugin: "LoginPromptPlugin",
  intro: "底部渲染登录引导条，点击登录回调 onLogin；与 RichComposer 同槽可共存。",
  why: "未登录态下把评论框换成轻引导，登录后切真框；同槽并联，不抢位。",
  plugs: [{ fn: "createLoginPromptPlugin", why: "底部登录引导；onLogin 回调" }],
  props: [{ text: "onLogin={() => { /* 跳转登录 */ }}" }],
  stageHeight: 420,
};

export default function Stage({ log }: DemoStageProps) {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const Comment = useMemo(
    () => withCommentPlugins(CommentCore, [createLoginPromptPlugin()]),
    []
  );

  return (
    <div style={CARD}>
      <Comment
        comments={comments}
        onLogin={() => log("点击登录 → 跳转登录页")}
        onReply={(_id, _c: CommentNode[]) => log("回复（需叠 ThreadPlugin）")}
        onSubmit={(_c: CommentNode[]) => log("发布（需叠 RichComposerPlugin）")}
        onLike={(_id) => log("点赞")}
        mentions={MENTIONS}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只有未登录引导被装上：列表底部出现「登录后参与评论」+ 登录按钮，点击写进日志。
      </p>
    </div>
  );
}
`,tx=Object.assign({"./00-quickstart.tsx":_h,"./01-like.tsx":Ah,"./02-sort.tsx":ty,"./03-thread.tsx":Py,"./04-rich-composer.tsx":By,"./05-full-combo.tsx":Qy,"./06-report.tsx":uv,"./07-share.tsx":_v,"./08-copy.tsx":Bv,"./09-reaction.tsx":i0,"./10-favorite.tsx":S0,"./11-pin.tsx":z0,"./12-location.tsx":X0,"./13-timestamp.tsx":m1,"./14-count.tsx":R1,"./15-filter.tsx":W1,"./16-search.tsx":lC,"./17-moderation.tsx":kC,"./18-login.tsx":OC}),ox=Object.assign({"./00-quickstart.tsx":zC,"./01-like.tsx":IC,"./02-sort.tsx":FC,"./03-thread.tsx":AC,"./04-rich-composer.tsx":UC,"./05-full-combo.tsx":BC,"./06-report.tsx":WC,"./07-share.tsx":HC,"./08-copy.tsx":VC,"./09-reaction.tsx":QC,"./10-favorite.tsx":YC,"./11-pin.tsx":KC,"./12-location.tsx":GC,"./13-timestamp.tsx":qC,"./14-count.tsx":XC,"./15-filter.tsx":JC,"./16-search.tsx":ZC,"./17-moderation.tsx":ex,"./18-login.tsx":nx}),rx=e=>e.replace(/^\.\//,""),Rl=Object.entries(tx).map(([e,n])=>{const t=rx(e);return{meta:n.meta,Stage:n.default,file:t,source:ox[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),ix=["basic","advanced","plugin"];Array.from(new Set(Rl.map(e=>e.meta.plugin).filter(e=>!!e))).sort();const jl={basic:{label:"基础功能",hint:"Core 自身的 props 与推导行为"},advanced:{label:"高级功能",hint:"全量装配 / 组合"},plugin:{label:"插件功能",hint:"一插件一页"}};function du(e){const n={};for(const t of e.controls??[])n[t.key]=t.init;return n}const lx="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",sx="true|false|null|undefined|this|super",ax="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",mu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${lx})\b`,String.raw`\b(${sx})\b`,String.raw`\b(${ax})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),pu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function ux(e){const n=[];let t=0;mu.lastIndex=0;let o;for(;o=mu.exec(e);){o.index>t&&n.push({text:e.slice(t,o.index),cls:null});const r=pu.findIndex((i,l)=>o[l+1]!==void 0);n.push({text:o[0],cls:r>=0?pu[r]:null}),t=o.index+o[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function fu(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function cx({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:o}){const[r,i]=y.useState("idle"),[l,s]=y.useState(!1),a=y.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&a.length>t,d=u&&!l?a.slice(0,t).join(`
`):e,m=y.useMemo(()=>ux(d),[d]),f=y.useCallback(async()=>{var x;let v=!1;if((x=navigator.clipboard)!=null&&x.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=fu(e)}else v=fu(e);i(v?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-head",children:[c.jsx("span",{children:n}),c.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[c.jsxs("span",{children:[a.length," 行"]}),c.jsx("button",{type:"button",className:`code-copy${r==="ok"?" is-ok":r==="fail"?" is-fail":""}`,onClick:f,children:r==="ok"?"已复制":r==="fail"?"复制失败":"复制"})]})]}),c.jsx("pre",{style:o?{maxHeight:o}:void 0,children:c.jsx("code",{children:m.map((v,x)=>v.cls?c.jsx("span",{className:v.cls,children:v.text},x):c.jsx(Qe.Fragment,{children:v.text},x))})}),u?c.jsx("button",{type:"button",className:"code-more",onClick:()=>s(v=>!v),children:l?"收起":`展开余下 ${a.length-t} 行`}):null]})}const dx=/\{\{\s*([\w-]+)\s*\}\}/g;function gu(e,n){return e.replace(dx,(t,o)=>o in n?String(n[o]):t)}function mx(e){return e.replace(/^create/,"")}function px(e,n){const o=['import { CommentCore, withCommentPlugins } from "vane-comment";',...e.plugs.map(s=>s.fn).sort().map(s=>`import { ${s} } from "vane-comment/custom-plugins/${mx(s)}";`),"",'import type { Comment } from "vane-comment";'].join(`
`),r=e.plugs.map(s=>`  ${s.fn}(${s.cfg?`{ ${gu(s.cfg,n)} }`:""}),`).join(`
`),i=e.props.filter(s=>typeof s=="string"||!s.when||s.when(n)).map(s=>`      ${gu(typeof s=="string"?s:s.text,n)}`).join(`
`),l=e.plugs.length?`const Comment = withCommentPlugins(CommentCore, [
${r}
]);`:`// 这一页只用 Core：列表壳 + 排序 + 操作行，不需要任何插件
const Comment = withCommentPlugins(CommentCore, []);`;return`// ${e.title} · 最小装配（照抄即可跑）
${o}

${l}

export default function Demo({ comments }: { comments: Comment[] }) {
  return (
    <Comment
      comments={comments}
${i}
    />
  );
}
`}function fx({controls:e,cfg:n,onChange:t}){return c.jsx("div",{className:"ctl-bar",children:e.filter(o=>!o.when||o.when(n)).map(o=>{const r=n[o.key];return c.jsxs("label",{className:"ctl",title:o.hint,children:[c.jsxs("span",{className:"ctl-label",children:[o.label,c.jsx("b",{className:"ctl-val",children:o.kind==="switch"?r?"开":"关":String(r)})]}),o.kind==="switch"?c.jsx("button",{type:"button",className:`ctl-switch${r?" is-on":""}`,onClick:()=>t(o.key,!r),"aria-pressed":!!r,children:c.jsx("i",{})}):o.kind==="select"?c.jsx("select",{className:"ctl-select",value:String(r),onChange:i=>t(o.key,i.target.value),children:(o.options??[]).map(i=>c.jsx("option",{value:i.value,children:i.label},i.value))}):c.jsx("input",{className:"ctl-range",type:"range",min:o.min??0,max:o.max??100,step:o.step??1,value:Number(r),onChange:i=>t(o.key,Number(i.target.value))})]},o.key)})})}function gx({lines:e,title:n="事件日志",empty:t="还没触发 —— 拖上面的控件，或点一下规格试试",right:o}){return c.jsxs("div",{className:"log",children:[c.jsxs("div",{className:"log-head",children:[c.jsx("span",{children:n}),c.jsxs("span",{className:"log-right",children:[o,c.jsx("b",{children:e.length})]})]}),e.length===0?c.jsx("p",{className:"log-empty",children:t}):c.jsx("ol",{className:"log-list",children:e.map(r=>c.jsxs("li",{className:`log-line is-${r.kind}`,children:[c.jsx("time",{children:r.at}),c.jsx("span",{children:r.text})]},r.id))})]})}function hx({entry:e,order:n}){var S;const{meta:t,Stage:o,file:r,source:i}=e,[l,s]=y.useState(()=>du(t)),[a,u]=y.useState([]),[d,m]=y.useState("minimal"),f=y.useCallback((P,g="event")=>{const p=new Date().toLocaleTimeString("zh-CN",{hour12:!1});u(h=>[{id:h.length+1,at:p,text:P,kind:g},...h].slice(0,60))},[]),v=y.useCallback((P,g)=>{s(p=>({...p,[P]:g}))},[]),x=y.useMemo(()=>px(t,l),[t,l]);return c.jsxs("section",{className:"demo","data-demo":t.slug,children:[c.jsxs("header",{className:"demo-head",children:[c.jsxs("div",{className:"demo-folio",children:[c.jsx("span",{className:"demo-no",children:String(n).padStart(2,"0")}),c.jsx("em",{children:"plate"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"demo-title-row",children:[c.jsx("h2",{children:t.title}),c.jsx("span",{className:"demo-group",children:jl[t.group].label}),t.plugin?c.jsx("code",{className:"demo-plugin",children:t.plugin}):null]}),c.jsx("p",{className:"demo-intro",children:t.intro}),c.jsxs("p",{className:"demo-why",children:[c.jsx("b",{children:"什么时候用"}),t.why]})]}),c.jsxs("div",{className:"demo-meta",children:[c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"file"}),c.jsx("b",{children:r})]}),c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"group"}),c.jsx("b",{children:jl[t.group].label})]}),c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"plugs"}),c.jsx("b",{children:t.plugs.length?`${t.plugs.length} installed`:"core only"})]})]})]}),(S=t.controls)!=null&&S.length?c.jsxs("div",{className:"demo-controls",children:[c.jsx(fx,{controls:t.controls,cfg:l,onChange:v}),c.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{s(du(t)),u([])},children:"重置"})]}):null,c.jsxs("div",{className:"demo-body",children:[c.jsxs("figure",{className:"plate",children:[c.jsxs("figcaption",{className:"plate-cap",children:[c.jsx("b",{children:"stage"}),c.jsxs("span",{children:[t.tone==="light"?"light surface":"live render",t.stageHeight?` · ${t.stageHeight}px`:""]}),c.jsx("em",{children:"live"})]}),c.jsx("div",{className:"plate-ruler","aria-hidden":!0}),c.jsx("div",{className:`plate-body demo-stage${t.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${t.stageHeight??380}px`},children:c.jsx(o,{cfg:l,log:f,setCfg:v})})]}),c.jsxs("aside",{className:"demo-side",children:[c.jsx("div",{className:"demo-plugs",children:t.plugs.length===0?c.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):t.plugs.map(P=>c.jsx("span",{className:`demo-plug${P.local?" is-local":""}`,children:P.fn.replace(/^create|Plugin$/g,"")},P.fn))}),c.jsx("ul",{className:"demo-why-list",children:t.plugs.map(P=>c.jsxs("li",{children:[c.jsx("code",{children:P.fn}),c.jsx("span",{children:P.why})]},P.fn))}),t.note?c.jsxs("p",{className:"demo-note",children:["⚠ ",t.note]}):null,c.jsx(gx,{lines:a,empty:t.plugs.length>0?"还没触发 —— 拖上面的控件，或点一下规格试试":"这一页没有事件类行为，日志留白"})]})]}),c.jsxs("div",{className:"demo-code",children:[c.jsxs("div",{className:"demo-switch",role:"tablist",children:[c.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>m("minimal"),children:"最小装配"}),c.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>m("full"),children:"完整源码"})]}),c.jsx(cx,{code:d==="minimal"?x:i,title:d==="minimal"?`${t.slug}.minimal.tsx`:r,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]})]})}const yx=`import React, { useState } from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

const actionBtn: React.CSSProperties = {
  border: "none",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  fontSize: 13,
  padding: 0,
  flexShrink: 0,
};

/** 把结构化富内容转纯文本（供复制） */
function plainText(comment: Comment): string {
  const parts: string[] = [];
  (comment.content ?? []).forEach((n) => {
    if (n.type === "text") parts.push(n.value);
    else if (n.type === "emoji") parts.push(n.value);
    else if (n.type === "mention") parts.push(\`@\${n.name}\`);
  });
  if (comment.text) parts.push(comment.text);
  return parts.join("");
}

/** 复制按钮：复制评论纯文本到剪贴板 */
function CopyButton({ comment }: { comment: Comment }) {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    try {
      await navigator.clipboard?.writeText(plainText(comment));
    } catch {
      /* 剪贴板不可用时静默 */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      type="button"
      data-testid="comment-copy"
      onClick={handle}
      style={actionBtn}
    >
      {copied ? "已复制" : "📋复制"}
    </button>
  );
}

/**
 * CopyPlugin - 复制：每条评论操作行渲染复制按钮，复制评论纯文本。
 */
export function createCopyPlugin<T = any>(): CommentPlugin<T> {
  return {
    name: "CopyPlugin",
    version: "0.1.0",
    description: "复制：每条评论操作行渲染复制按钮，复制评论纯文本到剪贴板。",
    priority: 24,
    enabled: true,
    hooks: {
      renderCommentActions: (
        context: CommentPluginContext<T>,
        comment: Comment
      ) => <CopyButton comment={comment} />,
    },
  };
}

export { doc };
`,vx=`import React from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

/**
 * CountPlugin - 计数：顶栏展示评论总数 + 热议标，读 context.comments.length（含 Filter/Search 结果）。
 */
export function createCountPlugin<T = any>(): CommentPlugin<T> {
  return {
    name: "CountPlugin",
    version: "0.1.0",
    description:
      "计数：顶栏展示评论总数 + 热议标，读取 context.comments.length（随 Filter/Search 实时变化）。",
    priority: 11,
    enabled: true,
    hooks: {
      renderToolbar: (context: CommentPluginContext<T>) => {
        const total = context.comments?.length ?? 0;
        return (
          <span
            data-testid="comment-count"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
            }}
          >
            <strong>{total}</strong> 条评论
            {total > 0 && (
              <span
                style={{
                  fontSize: 11,
                  padding: "1px 6px",
                  borderRadius: 4,
                  color: "#b35c00",
                  border: "1px solid rgba(255,143,0,0.4)",
                }}
              >
                热议
              </span>
            )}
          </span>
        );
      },
    },
  };
}

export { doc };
`,Cx=`import React, { useState } from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

const actionBtn: React.CSSProperties = {
  border: "none",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  fontSize: 13,
  padding: 0,
  flexShrink: 0,
};

/** 收藏按钮：本地高亮 + 回调 onFavorite(id, next) */
function FavoriteButton({
  comment,
  onFavorite,
}: {
  comment: Comment;
  onFavorite?: (id: string, next: boolean) => void;
}) {
  const [fav, setFav] = useState(!!comment.favorited);
  const handle = () => {
    const next = !fav;
    setFav(next);
    onFavorite?.(comment.id, next);
  };
  return (
    <button
      type="button"
      data-testid="comment-favorite"
      onClick={handle}
      aria-pressed={fav}
      style={{ ...actionBtn, color: fav ? "#faad14" : "inherit" }}
    >
      {fav ? "★已收藏" : "☆收藏"}
    </button>
  );
}

/**
 * FavoritePlugin - 收藏：每条评论操作行渲染收藏按钮，切换回调 onFavorite。
 */
export function createFavoritePlugin<T = any>(): CommentPlugin<T> {
  return {
    name: "FavoritePlugin",
    version: "0.1.0",
    description: "收藏：每条评论操作行渲染收藏按钮，切换回调 onFavorite(id, nextFavorited)。",
    priority: 26,
    enabled: true,
    hooks: {
      renderCommentActions: (
        context: CommentPluginContext<T>,
        comment: Comment
      ) => (
        <FavoriteButton
          comment={comment}
          onFavorite={
            context.props.onFavorite as (id: string, next: boolean) => void
          }
        />
      ),
    },
  };
}

export { doc };
`,xx=`import React from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

export interface FilterPluginConfig {
  /** 筛选项（影响顶栏按钮与 transformData 过滤逻辑），默认 ["all","image","replies"] */
  options?: Array<"all" | "image" | "replies">;
}

const LABELS: Record<string, string> = {
  all: "全部",
  image: "有图",
  replies: "有回复",
};

const chip = (active: boolean): React.CSSProperties => ({
  border: "none",
  borderRadius: 999,
  padding: "4px 12px",
  fontSize: 13,
  cursor: "pointer",
  background: active ? "rgba(29,161,242,0.16)" : "transparent",
  color: active ? "#1565c0" : "inherit",
  opacity: active ? 1 : 0.7,
});

/** 筛选栏：点击切换 state.filter，由 transformData 过滤列表 */
function FilterBar({
  context,
  options,
}: {
  context: CommentPluginContext<any>;
  options: string[];
}) {
  const active = (context.state as any)?.filter ?? "all";
  const set = (key: string) => context.setState({ filter: key });
  return (
    <div data-testid="comment-filter" style={{ display: "inline-flex", gap: 4 }}>
      {options.map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => set(key)}
          style={chip(active === key)}
        >
          {LABELS[key] ?? key}
        </button>
      ))}
    </div>
  );
}

/**
 * FilterPlugin - 筛选：顶栏「全部/有图/有回复」筛选，经 transformData 过滤评论列表。
 */
export function createFilterPlugin<T = any>(
  config: FilterPluginConfig = {}
): CommentPlugin<T> {
  const options = config.options ?? ["all", "image", "replies"];
  return {
    name: "FilterPlugin",
    version: "0.1.0",
    description:
      "筛选：顶栏「全部/有图/有回复」筛选，经 transformData 过滤评论列表（读 state.filter）。",
    priority: 12,
    enabled: true,
    hooks: {
      renderToolbar: (context: CommentPluginContext<T>) => (
        <FilterBar context={context as CommentPluginContext<any>} options={options} />
      ),
      transformData: (context: CommentPluginContext<T>, data: T): T => {
        const filter = (context.state as any)?.filter ?? "all";
        if (filter === "all" || !Array.isArray(data)) return data;
        const arr = data as Comment[];
        if (filter === "image")
          return arr.filter((c) => (c.images?.length ?? 0) > 0) as unknown as T;
        if (filter === "replies")
          return arr.filter(
            (c) => (c.replies?.length ?? 0) > 0 || (c.replyCount ?? 0) > 0
          ) as unknown as T;
        return data;
      },
    },
  };
}

export { doc };
`,Sx=`import React, { useState } from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

export interface LikePluginConfig {
  /** 是否展示点赞数，默认 true */
  showCount?: boolean;
}

/** 点赞按钮：本地爆裂动画（component 内 CSS transition，规避 overlay 全局槽定位问题） */
function LikeButton({
  comment,
  onLike,
  showCount = true,
}: {
  comment: Comment;
  onLike?: (id: string, next: boolean) => void;
  showCount?: boolean;
}) {
  const [burst, setBurst] = useState(false);
  const liked = !!comment.liked;
  const count = comment.likeCount;

  const handle = () => {
    const next = !liked;
    onLike?.(comment.id, next);
    if (next) {
      setBurst(true);
      window.setTimeout(() => setBurst(false), 450);
    }
  };

  return (
    <button
      type="button"
      onClick={handle}
      aria-pressed={liked}
      data-testid="comment-like"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        border: "none",
        background: "transparent",
        color: liked ? "#c62828" : "inherit",
        opacity: liked ? 1 : 0.7,
        cursor: "pointer",
        fontSize: 13,
        padding: 0,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          display: "inline-block",
          transform: burst ? "scale(1.4)" : "scale(1)",
          transition: "transform 0.25s ease",
        }}
      >
        {liked ? "❤️" : "🤍"}
      </span>
      {showCount && (count > 0 ? count : "赞")}
    </button>
  );
}

/**
 * LikePlugin - 点赞：渲染于每条评论的 \`renderCommentActions\` 槽。
 * 读取 comment.liked / likeCount，点击回调 context.props.onLike（乐观更新由 consumer 完成）。
 */
export function createLikePlugin<T = any>(
  config: LikePluginConfig = {}
): CommentPlugin<T> {
  return {
    name: "LikePlugin",
    version: "0.1.0",
    description: "点赞：每条评论的操作行渲染点赞按钮与计数，点击回调 onLike。",
    priority: 40,
    enabled: true,
    hooks: {
      renderCommentActions: (
        context: CommentPluginContext<T>,
        comment: Comment
      ) => (
        <LikeButton
          comment={comment}
          showCount={config.showCount}
          onLike={context.props.onLike as (id: string, next: boolean) => void}
        />
      ),
    },
  };
}

export { doc };
`,kx=`import React from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

/**
 * LocationPlugin - 地理位置：评论含 location 时在操作行展示 📍 标（Core 不渲染 location，由本插件补充）。
 */
export function createLocationPlugin<T = any>(): CommentPlugin<T> {
  return {
    name: "LocationPlugin",
    version: "0.1.0",
    description:
      "地理位置：评论含 location 时在操作行展示 📍 标（Core 不渲染 location，由本插件补充展示）。",
    priority: 28,
    enabled: true,
    hooks: {
      renderCommentActions: (
        context: CommentPluginContext<T>,
        comment: Comment
      ) =>
        comment.location ? (
          <span
            data-testid="comment-location"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 2,
              fontSize: 12,
              color: "#5b6064",
              flexShrink: 0,
            }}
          >
            📍{comment.location}
          </span>
        ) : null,
    },
  };
}

export { doc };
`,Px=`import React from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

/**
 * LoginPromptPlugin - 未登录引导：底部渲染登录引导条，回调 onLogin。
 */
export function createLoginPromptPlugin<T = any>(): CommentPlugin<T> {
  return {
    name: "LoginPromptPlugin",
    version: "0.1.0",
    description:
      "未登录引导：底部渲染「登录后参与评论」引导条，回调 onLogin；可与 RichComposerPlugin 同槽共存。",
    priority: 33,
    enabled: true,
    hooks: {
      renderFooter: (context: CommentPluginContext<T>) => (
        <div
          data-testid="comment-login-prompt"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 0",
            fontSize: 13,
          }}
        >
          <span>登录后参与评论，发表你的看法</span>
          <button
            type="button"
            onClick={() =>
              (context.props.onLogin as (() => void) | undefined)?.()
            }
            style={{
              border: "1px solid rgba(29,161,242,0.5)",
              borderRadius: 999,
              padding: "4px 14px",
              background: "transparent",
              color: "#1565c0",
              cursor: "pointer",
            }}
          >
            登录
          </button>
        </div>
      ),
    },
  };
}

export { doc };
`,wx=`import React from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
  CommentNode,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

export interface ModerationPluginConfig {
  /** 敏感词集合，命中替换为 **，默认 ["傻逼","广告","加微信","加我"] */
  words?: string[];
  /** 是否过滤待审 / 已删评论（默认 true） */
  hidePending?: boolean;
}

const DEFAULT_WORDS = ["傻逼", "广告", "加微信", "加我"];

/** 把文本节点中的敏感词替换为 ** */
function maskNodes(nodes: CommentNode[], words: string[]): CommentNode[] {
  return nodes.map((n) => {
    if (n.type === "text") {
      let v = n.value;
      words.forEach((w) => {
        if (v.includes(w)) v = v.split(w).join("**");
      });
      return { ...n, value: v };
    }
    return n;
  });
}

/**
 * ModerationPlugin - 审核：经 transformData 屏蔽敏感词（替换为 **）并过滤待审/已删评论。
 */
export function createModerationPlugin<T = any>(
  config: ModerationPluginConfig = {}
): CommentPlugin<T> {
  const words = config.words ?? DEFAULT_WORDS;
  const hidePending = config.hidePending ?? true;
  return {
    name: "ModerationPlugin",
    version: "0.1.0",
    description:
      "审核：经 transformData 屏蔽敏感词（替换为 **）并过滤待审/已删评论（hidePending 默认开）。",
    priority: 14,
    enabled: true,
    hooks: {
      transformData: (context: CommentPluginContext<T>, data: T): T => {
        if (!Array.isArray(data)) return data;
        let arr = data as Comment[];
        if (hidePending)
          arr = arr.filter(
            (c) => c.status !== "pending" && c.status !== "deleted"
          );
        return arr.map((c) => ({
          ...c,
          content: maskNodes(c.content ?? [], words),
        })) as unknown as T;
      },
    },
  };
}

export { doc };
`,_x=`import React, { useState } from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

const actionBtn: React.CSSProperties = {
  border: "none",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  fontSize: 13,
  padding: 0,
  flexShrink: 0,
};

/** 置顶按钮：本地高亮 + 回调 onPin(id, next)；Core 已读 comment.pinned 渲染置顶标 */
function PinButton({
  comment,
  onPin,
}: {
  comment: Comment;
  onPin?: (id: string, next: boolean) => void;
}) {
  const [pinned, setPinned] = useState(!!comment.pinned);
  const handle = () => {
    const next = !pinned;
    setPinned(next);
    onPin?.(comment.id, next);
  };
  return (
    <button
      type="button"
      data-testid="comment-pin"
      onClick={handle}
      aria-pressed={pinned}
      style={{ ...actionBtn, color: pinned ? "#b35c00" : "inherit" }}
    >
      {pinned ? "📌取消置顶" : "📌置顶"}
    </button>
  );
}

/**
 * PinPlugin - 置顶：每条评论操作行渲染置顶按钮，切换回调 onPin；Core 读取 comment.pinned 渲染置顶标。
 */
export function createPinPlugin<T = any>(): CommentPlugin<T> {
  return {
    name: "PinPlugin",
    version: "0.1.0",
    description:
      "置顶：每条评论操作行渲染置顶按钮，切换回调 onPin(id, nextPinned)；Core 读取 comment.pinned 渲染置顶标。",
    priority: 27,
    enabled: true,
    hooks: {
      renderCommentActions: (
        context: CommentPluginContext<T>,
        comment: Comment
      ) => (
        <PinButton
          comment={comment}
          onPin={context.props.onPin as (id: string, next: boolean) => void}
        />
      ),
    },
  };
}

export { doc };
`,Rx=`import React from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

export interface ReactionPluginConfig {
  /** 可选表情集合，默认 ["👍","❤️","😂","🎉"] */
  emojis?: string[];
}

const DEFAULT_EMOJIS = ["👍", "❤️", "😂", "🎉"];

const actionBtn: React.CSSProperties = {
  border: "none",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  fontSize: 13,
  padding: 0,
  flexShrink: 0,
};

/** 多表情反应条：点击累加对应表情计数，回调 onReact(id, emoji) */
function ReactionBar({
  comment,
  onReact,
  emojis,
}: {
  comment: Comment;
  onReact?: (id: string, emoji: string) => void;
  emojis: string[];
}) {
  const reactions = comment.reactions ?? {};
  return (
    <span data-testid="comment-reaction" style={{ display: "inline-flex", gap: 6, flexShrink: 0 }}>
      {emojis.map((e) => {
        const n = reactions[e] ?? 0;
        return (
          <button
            key={e}
            type="button"
            onClick={() => onReact?.(comment.id, e)}
            style={{
              ...actionBtn,
              color: n > 0 ? "#1565c0" : "inherit",
              opacity: n > 0 ? 1 : 0.7,
            }}
          >
            {e}
            {n > 0 ? \` \${n}\` : ""}
          </button>
        );
      })}
    </span>
  );
}

/**
 * ReactionPlugin - 多表情反应：每条评论操作行渲染快速表情反应条，带计数。
 */
export function createReactionPlugin<T = any>(
  config: ReactionPluginConfig = {}
): CommentPlugin<T> {
  const emojis = config.emojis ?? DEFAULT_EMOJIS;
  return {
    name: "ReactionPlugin",
    version: "0.1.0",
    description:
      "多表情反应：每条评论操作行渲染表情反应条（👍❤️😂🎉），点击累加计数，回调 onReact(id, emoji)。",
    priority: 25,
    enabled: true,
    hooks: {
      renderCommentActions: (
        context: CommentPluginContext<T>,
        comment: Comment
      ) => (
        <ReactionBar
          comment={comment}
          emojis={emojis}
          onReact={context.props.onReact as (id: string, emoji: string) => void}
        />
      ),
    },
  };
}

export { doc };
`,jx=`import React, { useState } from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

export interface ReportPluginConfig {
  /** 举报理由选项，默认 ["垃圾广告","辱骂攻击","色情低俗","诈骗","其他"] */
  reasons?: string[];
}

const DEFAULT_REASONS = ["垃圾广告", "辱骂攻击", "色情低俗", "诈骗", "其他"];

const actionBtn: React.CSSProperties = {
  border: "none",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  fontSize: 13,
  padding: 0,
  flexShrink: 0,
};

/** 举报按钮：点击弹出理由浮层，提交回调 onReport(id, reason) */
function ReportButton({
  comment,
  onReport,
  reasons,
}: {
  comment: Comment;
  onReport?: (id: string, reason: string) => void;
  reasons: string[];
}) {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);

  const submit = () => {
    onReport?.(comment.id, picked ?? "其他");
    setOpen(false);
    setPicked(null);
  };

  return (
    <span style={{ position: "relative", display: "inline-block", flexShrink: 0 }}>
      <button
        type="button"
        data-testid="comment-report"
        onClick={() => setOpen((o) => !o)}
        style={actionBtn}
      >
        🚩举报
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 20,
            marginTop: 4,
            background: "#fff",
            color: "#222",
            border: "1px solid rgba(0,0,0,0.12)",
            borderRadius: 8,
            padding: 8,
            minWidth: 150,
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          {reasons.map((r) => (
            <label
              key={r}
              style={{
                display: "flex",
                gap: 6,
                alignItems: "center",
                padding: "4px 0",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              <input
                type="radio"
                checked={picked === r}
                onChange={() => setPicked(r)}
              />
              {r}
            </label>
          ))}
          <button
            type="button"
            onClick={submit}
            style={{
              marginTop: 6,
              width: "100%",
              border: "none",
              borderRadius: 6,
              padding: "6px 0",
              background: "#c62828",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            提交举报
          </button>
        </div>
      )}
    </span>
  );
}

/**
 * ReportPlugin - 举报：每条评论操作行渲染举报按钮，弹出理由浮层，提交回调 onReport。
 */
export function createReportPlugin<T = any>(
  config: ReportPluginConfig = {}
): CommentPlugin<T> {
  const reasons = config.reasons ?? DEFAULT_REASONS;
  return {
    name: "ReportPlugin",
    version: "0.1.0",
    description:
      "举报：每条评论操作行渲染举报按钮，弹出理由选择浮层，提交回调 onReport(id, reason)。",
    priority: 22,
    enabled: true,
    hooks: {
      renderCommentActions: (
        context: CommentPluginContext<T>,
        comment: Comment
      ) => (
        <ReportButton
          comment={comment}
          reasons={reasons}
          onReport={
            context.props.onReport as (id: string, reason: string) => void
          }
        />
      ),
    },
  };
}

export { doc };
`,Ex=`import React, { useRef, useState } from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  CommentNode,
} from "../../components/CommentPlugin/plugins/types";
import { renderCommentContent } from "../../components/CommentPlugin/content";
import doc from "./doc.json";

export interface RichComposerConfig {
  /** 启用哪些富编辑能力，默认全部启用 */
  features?: {
    emoji?: boolean;
    image?: boolean;
    mention?: boolean;
  };
  /** 文本框占位符 */
  placeholder?: string;
  /** 提交按钮文案，默认「发布」 */
  submitText?: string;
}

const EMOJIS = [
  "😀", "😂", "🤣", "😍", "😘", "😎", "🤔", "😭",
  "👍", "👎", "❤️", "🔥", "🎉", "💯", "✨", "🌟",
  "😅", "😡", "🥺", "😴", "🙏", "💪", "👏", "💡",
];

const DEFAULT_FEATURES = { emoji: true, image: true, mention: true };

/** 把文本 + 图片解析为结构化富内容节点（@提及按候选名匹配） */
function buildContent(
  text: string,
  mentions: { id: string; name: string }[],
  images: string[]
): CommentNode[] {
  const nodes: CommentNode[] = [];
  const regex = /@([^\\s@]{1,20})/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text)) !== null) {
    const name = m[1];
    const found = mentions.find((x) => x.name === name);
    if (found) {
      if (m.index > lastIndex) {
        nodes.push({ type: "text", value: text.slice(lastIndex, m.index) });
      }
      nodes.push({ type: "mention", userId: found.id, name: found.name });
      lastIndex = regex.lastIndex;
    }
  }
  if (lastIndex < text.length) {
    nodes.push({ type: "text", value: text.slice(lastIndex) });
  }
  for (const url of images) nodes.push({ type: "image", url });
  return nodes;
}

/** 根评论框：textarea + 工具条（emoji / 图片 / @提及）→ 结构化内容 */
function Composer({
  context,
  features,
  placeholder,
  submitText,
}: {
  context: CommentPluginContext<any>;
  features: { emoji: boolean; image: boolean; mention: boolean };
  placeholder?: string;
  submitText?: string;
}) {
  const [text, setText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [mentionOpen, setMentionOpen] = useState(false);
  const mentions = (context.props.mentions as { id: string; name: string; avatar?: string }[]) ?? [];
  const fileRef = useRef<HTMLInputElement | null>(null);

  const preview = buildContent(text, mentions, images);
  const canSubmit = preview.some(
    (n) =>
      (n.type === "text" && n.value.trim().length > 0) ||
      n.type === "image" ||
      n.type === "mention"
  );

  const submit = () => {
    if (!canSubmit) return;
    (
      context.props.onSubmit as ((c: CommentNode[]) => void) | undefined
    )?.(preview);
    setText("");
    setImages([]);
    setShowEmoji(false);
    setMentionOpen(false);
  };

  const insertEmoji = (e: string) => setText((t) => t + e);
  const insertMention = (name: string) => {
    setText((t) => t + \`@\${name} \`);
    setMentionOpen(false);
  };

  const onFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImages((arr) => [...arr, reader.result as string]);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      style={{
        border: "1px solid rgba(128,128,128,0.22)",
        borderRadius: 8,
        padding: 10,
      }}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder ?? "说点什么吧…"}
        rows={3}
        style={{
          width: "100%",
          resize: "vertical",
          border: "none",
          outline: "none",
          background: "transparent",
          color: "inherit",
          fontSize: 14,
          fontFamily: "inherit",
          boxSizing: "border-box",
        }}
      />

      {images.length > 0 && (
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "6px 0" }}>
          {images.map((src, i) => (
            <div key={i} style={{ position: "relative" }}>
              <img
                src={src}
                alt=""
                style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 6 }}
              />
              <button
                type="button"
                onClick={() => setImages((arr) => arr.filter((_, j) => j !== i))}
                style={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: "none",
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 11,
                  lineHeight: "18px",
                  padding: 0,
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {showEmoji && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            gap: 2,
            margin: "6px 0",
          }}
        >
          {EMOJIS.map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => insertEmoji(e)}
              style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 18 }}
            >
              {e}
            </button>
          ))}
        </div>
      )}

      {mentionOpen && mentions.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "6px 0" }}>
          {mentions.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => insertMention(m.name)}
              style={{
                border: "1px solid rgba(128,128,128,0.25)",
                borderRadius: 999,
                padding: "2px 10px",
                background: "transparent",
                color: "#1565c0",
                cursor: "pointer",
                fontSize: 12,
              }}
            >
              @{m.name}
            </button>
          ))}
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
        {features.emoji && (
          <button type="button" onClick={() => setShowEmoji((v) => !v)} style={toolBtn}>
            😊
          </button>
        )}
        {features.image && (
          <>
            <button type="button" onClick={() => fileRef.current?.click()} style={toolBtn}>
              🖼️
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) onFile(f);
                e.target.value = "";
              }}
            />
          </>
        )}
        {features.mention && mentions.length > 0 && (
          <button type="button" onClick={() => setMentionOpen((v) => !v)} style={toolBtn}>
            @
          </button>
        )}
        <button
          type="button"
          onClick={submit}
          disabled={!canSubmit}
          style={{
            marginLeft: "auto",
            border: "none",
            borderRadius: 6,
            padding: "6px 18px",
            fontSize: 13,
            cursor: canSubmit ? "pointer" : "not-allowed",
            background: canSubmit ? "#1565c0" : "rgba(128,128,128,0.2)",
            color: canSubmit ? "#fff" : "inherit",
          }}
        >
          {submitText ?? "发布"}
        </button>
      </div>

      {canSubmit && (
        <div
          style={{
            marginTop: 6,
            padding: 6,
            borderRadius: 6,
            background: "rgba(128,128,128,0.1)",
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          {renderCommentContent(preview)}
        </div>
      )}
    </div>
  );
}

const toolBtn: React.CSSProperties = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: 16,
  padding: 2,
};

/**
 * RichComposerPlugin - 富编辑：底部 \`renderFooter\` 渲染根评论框。
 * 支持 emoji / 图片（DataURL）/ @提及，输出结构化 CommentNode[] 回调 onSubmit。
 */
export function createRichComposerPlugin<T = any>(
  config: RichComposerConfig = {}
): CommentPlugin<T> {
  const features = { ...DEFAULT_FEATURES, ...(config.features ?? {}) };
  return {
    name: "RichComposerPlugin",
    version: "0.1.0",
    description: "富编辑：底部评论框，支持 emoji / 图片 / @提及，输出结构化富内容回调 onSubmit。",
    priority: 10,
    enabled: true,
    hooks: {
      renderFooter: (context: CommentPluginContext<T>) => (
        <Composer
          context={context}
          features={features}
          placeholder={config.placeholder}
          submitText={config.submitText}
        />
      ),
    },
  };
}

export { doc };
`,bx=`import React from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

const inputStyle: React.CSSProperties = {
  border: "1px solid rgba(128,128,128,0.3)",
  borderRadius: 999,
  padding: "4px 12px",
  fontSize: 13,
  background: "transparent",
  color: "inherit",
  outline: "none",
  width: 140,
};

/** 评论纯文本抽取（用于搜索匹配） */
function toText(comment: Comment): string {
  const parts: string[] = [];
  (comment.content ?? []).forEach((n) => {
    if (n.type === "text") parts.push(n.value);
    else if (n.type === "mention") parts.push(n.name);
  });
  if (comment.text) parts.push(comment.text);
  return parts.join(" ");
}

/** 搜索框：输入写 state.query，transformData 按关键词过滤 */
function SearchBox({ context }: { context: CommentPluginContext<any> }) {
  const query = (context.state as any)?.query ?? "";
  return (
    <input
      data-testid="comment-search"
      value={query}
      onChange={(e) => context.setState({ query: e.target.value })}
      placeholder="搜索评论…"
      style={inputStyle}
    />
  );
}

/**
 * SearchPlugin - 搜索：顶栏输入框，经 transformData 按关键词过滤评论。
 */
export function createSearchPlugin<T = any>(): CommentPlugin<T> {
  return {
    name: "SearchPlugin",
    version: "0.1.0",
    description: "搜索：顶栏输入框，经 transformData 按关键词过滤评论（读 state.query）。",
    priority: 13,
    enabled: true,
    hooks: {
      renderToolbar: (context: CommentPluginContext<T>) => (
        <SearchBox context={context as CommentPluginContext<any>} />
      ),
      transformData: (context: CommentPluginContext<T>, data: T): T => {
        const q = ((context.state as any)?.query ?? "").trim().toLowerCase();
        if (!q || !Array.isArray(data)) return data;
        return (data as Comment[]).filter((c) =>
          toText(c).toLowerCase().includes(q)
        ) as unknown as T;
      },
    },
  };
}

export { doc };
`,Tx=`import React, { useState } from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

const actionBtn: React.CSSProperties = {
  border: "none",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  fontSize: 13,
  padding: 0,
  flexShrink: 0,
};

/** 分享按钮：复制本条评论的锚点链接到剪贴板，给出「已复制」反馈 */
function ShareButton({ comment }: { comment: Comment }) {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    const link = \`\${typeof location !== "undefined" ? location.origin + location.pathname : ""}#comment-\${comment.id}\`;
    try {
      await navigator.clipboard?.writeText(link);
    } catch {
      /* 剪贴板不可用时静默 */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      type="button"
      data-testid="comment-share"
      onClick={handle}
      style={actionBtn}
    >
      {copied ? "已复制链接" : "🔗分享"}
    </button>
  );
}

/**
 * SharePlugin - 分享：每条评论操作行渲染分享按钮，复制锚点链接。
 */
export function createSharePlugin<T = any>(): CommentPlugin<T> {
  return {
    name: "SharePlugin",
    version: "0.1.0",
    description: "分享：每条评论操作行渲染分享按钮，复制本条评论锚点链接到剪贴板。",
    priority: 23,
    enabled: true,
    hooks: {
      renderCommentActions: (
        context: CommentPluginContext<T>,
        comment: Comment
      ) => <ShareButton comment={comment} />,
    },
  };
}

export { doc };
`,Nx=`import React from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  SortMode,
} from "../../components/CommentPlugin/plugins/types";
import { SORT_LABELS } from "../../components/CommentPlugin/sort";
import doc from "./doc.json";

export interface SortPluginConfig {
  /** 排序栏展示的模式，默认 ["newest","hottest","mostLiked"] */
  modes?: SortMode[];
  /** 默认排序模式（仅在消费方未传 defaultSortMode 时播种），默认 "newest" */
  defaultMode?: SortMode;
}

/** 排序栏：渲染模式按钮，点击切换 sortMode（写内核 state → 列表重排） */
function SortBar({
  context,
  modes,
}: {
  context: CommentPluginContext<any>;
  modes: SortMode[];
}) {
  const active = context.sortMode;
  return (
    <div style={{ display: "inline-flex", gap: 4 }}>
      {modes.map((mode) => {
        const isActive = active === mode;
        return (
          <button
            key={mode}
            type="button"
            onClick={() => {
              context.setSortMode(mode);
              (context.props.onSortChange as ((m: SortMode) => void) | undefined)?.(
                mode
              );
            }}
            style={{
              border: "none",
              borderRadius: 999,
              padding: "4px 12px",
              fontSize: 13,
              cursor: "pointer",
              background: isActive ? "rgba(29,161,242,0.16)" : "transparent",
              color: isActive ? "#1565c0" : "inherit",
              opacity: isActive ? 1 : 0.7,
            }}
          >
            {SORT_LABELS[mode]}
          </button>
        );
      })}
    </div>
  );
}

/**
 * SortPlugin - 排序：顶栏渲染排序栏，切换经内核 state 驱动 CommentCore 列表重排。
 * 实际重排由 withCommentPlugins 的 extendContext（sortComments）完成，本插件仅提供控制面。
 */
export function createSortPlugin<T = any>(
  config: SortPluginConfig = {}
): CommentPlugin<T> {
  const modes = config.modes ?? ["newest", "hottest", "mostLiked"];
  const defaultMode = config.defaultMode ?? "newest";
  return {
    name: "SortPlugin",
    version: "0.1.0",
    description: "排序：顶栏渲染排序栏，切换 sortMode 驱动列表重排。",
    priority: 20,
    enabled: true,
    hooks: {
      // 仅在消费方未指定 defaultSortMode 时播种默认排序模式
      onMount: (context: CommentPluginContext<T>) => {
        if (
          context.state.sortMode === undefined &&
          (context.props as { defaultSortMode?: SortMode }).defaultSortMode ===
            undefined
        ) {
          context.setState({ sortMode: defaultMode });
        }
      },
      renderToolbar: (context: CommentPluginContext<T>) => (
        <SortBar context={context} modes={modes} />
      ),
    },
  };
}

export { doc };
`,$x=`import React, { useState } from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
  CommentNode,
} from "../../components/CommentPlugin/plugins/types";
import {
  formatRelativeTime,
  renderCommentContent,
} from "../../components/CommentPlugin/content";
import { useCommentSlot } from "../../components/CommentPlugin/plugins/slots";
import doc from "./doc.json";

export interface ThreadPluginConfig {
  /** 最大嵌套深度（超过则不再渲染更深的楼中楼），默认 3 */
  maxDepth?: number;
  /** 默认是否展开楼中楼，默认 true */
  defaultExpanded?: boolean;
  /** 是否渲染内联回复框，默认 true */
  showReply?: boolean;
}

/** 紧凑头像（嵌套用） */
function MiniAvatar({ author }: { author: Comment["author"] }) {
  if (author.avatar) {
    return (
      <img
        src={author.avatar}
        alt={author.name}
        style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
      />
    );
  }
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(128,128,128,0.22)",
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {author.name.slice(0, 1).toUpperCase()}
    </div>
  );
}

/** 单条回复（复用同一 renderCommentActions / renderNested 槽 → 嵌套回复也能点赞/继续回复） */
function ReplyNode({
  reply,
  depth,
  maxDepth,
  showReply,
}: {
  reply: Comment;
  depth: number;
  maxDepth: number;
  showReply: boolean;
}) {
  const actions = useCommentSlot("renderCommentActions", reply);
  const nestedSlot = useCommentSlot("renderNested", reply);
  const deeper = depth < maxDepth ? nestedSlot : [];
  const deleted = (reply.status ?? "normal") === "deleted";

  return (
    <div style={{ display: "flex", gap: 8, marginTop: 10 }} data-testid="comment-item">
      <MiniAvatar author={reply.author} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13 }}>
          <span style={{ fontWeight: 600 }}>{reply.author.name}</span>
          {reply.author.badge && (
            <span style={{ fontSize: 11, opacity: 0.7, marginLeft: 4 }}>
              {reply.author.badge}
            </span>
          )}
          <span style={{ color: "#6b6b6b", marginLeft: 6, fontSize: 12 }}>
            {formatRelativeTime(reply.createdAt)}
          </span>
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.5, marginTop: 1 }}>
          {deleted ? (
            <span style={{ color: "#6b6b6b", fontStyle: "italic" }}>该评论已删除</span>
          ) : reply.content?.length ? (
            renderCommentContent(reply.content)
          ) : (
            reply.text
          )}
        </div>
        {actions.length > 0 && showReply && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              columnGap: 14,
              rowGap: 4,
              marginTop: 4,
            }}
          >
            {actions}
          </div>
        )}
        {deeper.length > 0 && (
          <div style={{ borderLeft: "2px solid rgba(128,128,128,0.15)", paddingLeft: 10 }}>
            {deeper}
          </div>
        )}
      </div>
    </div>
  );
}

/** 楼中楼容器：展开/收起 + 递归渲染 replies */
function ThreadView({
  comment,
  depth,
  maxDepth,
  defaultExpanded,
  showReply,
}: {
  comment: Comment;
  depth: number;
  maxDepth: number;
  defaultExpanded: boolean;
  showReply: boolean;
}) {
  const replies = comment.replies ?? [];
  const replyCount = comment.replyCount ?? replies.length;
  const [expanded, setExpanded] = useState(defaultExpanded && replies.length > 0);

  if (replies.length === 0 && replyCount === 0) return null;

  return (
    <div style={{ marginTop: 8 }}>
      {!expanded ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          style={{
            border: "none",
            background: "transparent",
            color: "#1565c0",
            cursor: "pointer",
            fontSize: 13,
            padding: 0,
          }}
        >
          {replyCount > replies.length
            ? \`展开 \${replyCount} 条回复\`
            : \`展开 \${replies.length} 条回复\`}
        </button>
      ) : (
        <div>
          {replies.map((reply) => (
            <ReplyNode
              key={reply.id}
              reply={reply}
              depth={depth}
              maxDepth={maxDepth}
              showReply={showReply}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/** 内联回复框（点"回复"触发） */
function ReplyBox({
  parentId,
  onSubmit,
  onCancel,
}: {
  parentId: string;
  onSubmit: (parentId: string, content: CommentNode[]) => void;
  onCancel: () => void;
}) {
  const [text, setText] = useState("");
  const disabled = text.trim().length === 0;
  return (
    <div style={{ marginTop: 6, display: "flex", flexDirection: "column", gap: 6 }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="回复点什么…"
        rows={2}
        style={{
          width: "100%",
          resize: "vertical",
          borderRadius: 6,
          border: "1px solid rgba(128,128,128,0.25)",
          padding: 6,
          fontSize: 13,
          fontFamily: "inherit",
          background: "transparent",
          color: "inherit",
          boxSizing: "border-box",
        }}
      />
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <button
          type="button"
          onClick={onCancel}
          style={btnStyle(false)}
        >
          取消
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={() => {
            onSubmit(parentId, [{ type: "text", value: text.trim() }]);
            setText("");
          }}
          style={btnStyle(true)}
        >
          回复
        </button>
      </div>
    </div>
  );
}

function btnStyle(primary: boolean): React.CSSProperties {
  return {
    border: "none",
    borderRadius: 6,
    padding: "4px 14px",
    fontSize: 13,
    cursor: "pointer",
    background: primary ? "#1565c0" : "rgba(128,128,128,0.18)",
    color: primary ? "#fff" : "inherit",
  };
}

/** "回复"触发器：切换内联回复框 */
function ReplyTrigger({
  comment,
  context,
  showReply,
}: {
  comment: Comment;
  context: CommentPluginContext<any>;
  showReply: boolean;
}) {
  const [open, setOpen] = useState(false);
  if (!showReply) return null;
  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        flexShrink: 0,
        ...(open ? { flexBasis: "100%", maxWidth: "100%" } : {}),
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          border: "none",
          background: "transparent",
          color: "inherit",
          opacity: 0.7,
          cursor: "pointer",
          fontSize: 13,
          padding: 0,
          flexShrink: 0,
        }}
      >
        回复
      </button>
      {open && (
        <ReplyBox
          parentId={comment.id}
          onCancel={() => setOpen(false)}
          onSubmit={(parentId, content) =>
            (
              context.props.onReply as
                | ((id: string, c: CommentNode[]) => void)
                | undefined
            )?.(parentId, content)
          }
        />
      )}
    </span>
  );
}

/**
 * ThreadPlugin - 楼中楼：顶评论的 \`renderNested\` 槽递归渲染 replies；
 * 操作行的"回复"经 \`renderCommentActions\` 唤起内联回复框。
 * 嵌套回复同样走同一组槽 → 子回复也能点赞 / 继续回复。
 */
export function createThreadPlugin<T = any>(
  config: ThreadPluginConfig = {}
): CommentPlugin<T> {
  const maxDepth = config.maxDepth ?? 3;
  const defaultExpanded = config.defaultExpanded ?? true;
  const showReply = config.showReply ?? true;
  return {
    name: "ThreadPlugin",
    version: "0.1.0",
    description: "楼中楼：递归渲染嵌套回复（限深折叠 + 展开），操作行内联回复。",
    priority: 30,
    enabled: true,
    hooks: {
      renderNested: (context: CommentPluginContext<T>, comment: Comment) =>
        comment.replies && comment.replies.length > 0 ? (
          <ThreadView
            comment={comment}
            depth={1}
            maxDepth={maxDepth}
            defaultExpanded={defaultExpanded}
            showReply={showReply}
          />
        ) : null,
      renderCommentActions: (
        context: CommentPluginContext<T>,
        comment: Comment
      ) => (
        <ReplyTrigger
          comment={comment}
          context={context}
          showReply={showReply}
        />
      ),
    },
  };
}

export { doc };
`,Mx=`import React from "react";
import type {
  CommentPlugin,
  CommentPluginContext,
  Comment,
} from "../../components/CommentPlugin/plugins/types";
import doc from "./doc.json";

/** 绝对时间格式化 YYYY-MM-DD HH:mm */
function formatAbs(ts: number): string {
  const d = new Date(ts);
  const p = (n: number) => String(n).padStart(2, "0");
  return \`\${d.getFullYear()}-\${p(d.getMonth() + 1)}-\${p(d.getDate())} \${p(d.getHours())}:\${p(d.getMinutes())}\`;
}

/**
 * TimestampPlugin - 绝对时间：Core 默认展示相对时间，本插件在操作行补充「绝对时间」芯片，便于精确查看。
 */
export function createTimestampPlugin<T = any>(): CommentPlugin<T> {
  return {
    name: "TimestampPlugin",
    version: "0.1.0",
    description:
      "绝对时间：Core 默认展示相对时间，本插件在操作行补充「绝对时间」芯片，便于精确查看发布时刻。",
    priority: 29,
    enabled: true,
    hooks: {
      renderCommentActions: (
        context: CommentPluginContext<T>,
        comment: Comment
      ) => (
        <span
          data-testid="comment-timestamp"
          style={{ fontSize: 12, color: "#6b6b6b", flexShrink: 0, whiteSpace: "nowrap" }}
          title="绝对时间"
        >
          {formatAbs(comment.createdAt)}
        </span>
      ),
    },
  };
}

export { doc };
`,Qx={engage:"互动",organize:"组织",compose:"编辑"},hu=["engage","organize","compose"],yu=Object.assign({"/src/custom-plugins/CopyPlugin/doc.json":nm,"/src/custom-plugins/CountPlugin/doc.json":sm,"/src/custom-plugins/FavoritePlugin/doc.json":om,"/src/custom-plugins/FilterPlugin/doc.json":am,"/src/custom-plugins/LikePlugin/doc.json":Gd,"/src/custom-plugins/LocationPlugin/doc.json":im,"/src/custom-plugins/LoginPromptPlugin/doc.json":dm,"/src/custom-plugins/ModerationPlugin/doc.json":cm,"/src/custom-plugins/PinPlugin/doc.json":rm,"/src/custom-plugins/ReactionPlugin/doc.json":tm,"/src/custom-plugins/ReportPlugin/doc.json":Zd,"/src/custom-plugins/RichComposerPlugin/doc.json":Jd,"/src/custom-plugins/SearchPlugin/doc.json":um,"/src/custom-plugins/SharePlugin/doc.json":em,"/src/custom-plugins/SortPlugin/doc.json":qd,"/src/custom-plugins/ThreadPlugin/doc.json":Xd,"/src/custom-plugins/TimestampPlugin/doc.json":lm}),vu=Object.assign({"/src/custom-plugins/CopyPlugin/create.tsx":yx,"/src/custom-plugins/CountPlugin/create.tsx":vx,"/src/custom-plugins/FavoritePlugin/create.tsx":Cx,"/src/custom-plugins/FilterPlugin/create.tsx":xx,"/src/custom-plugins/LikePlugin/create.tsx":Sx,"/src/custom-plugins/LocationPlugin/create.tsx":kx,"/src/custom-plugins/LoginPromptPlugin/create.tsx":Px,"/src/custom-plugins/ModerationPlugin/create.tsx":wx,"/src/custom-plugins/PinPlugin/create.tsx":_x,"/src/custom-plugins/ReactionPlugin/create.tsx":Rx,"/src/custom-plugins/ReportPlugin/create.tsx":jx,"/src/custom-plugins/RichComposerPlugin/create.tsx":Ex,"/src/custom-plugins/SearchPlugin/create.tsx":bx,"/src/custom-plugins/SharePlugin/create.tsx":Tx,"/src/custom-plugins/SortPlugin/create.tsx":Nx,"/src/custom-plugins/ThreadPlugin/create.tsx":$x,"/src/custom-plugins/TimestampPlugin/create.tsx":Mx}),mm=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function Lx(e){const n=Object.keys(vu).find(r=>mm(r)===e),t=n?vu[n]:"",o=/priority:\s*(\d+)/.exec(t);return o?Number(o[1]):0}function Dx(e){const n=Object.keys(yu).find(t=>mm(t)===e);return n?yu[n]:{name:e,description:"（缺少 doc.json）"}}const Ox=[{dir:"LikePlugin",group:"engage",make:()=>Qr()},{dir:"ThreadPlugin",group:"engage",make:()=>Kr({maxDepth:3})},{dir:"ReportPlugin",group:"engage",make:()=>Ts()},{dir:"SharePlugin",group:"engage",make:()=>Ns()},{dir:"CopyPlugin",group:"engage",make:()=>$s()},{dir:"ReactionPlugin",group:"engage",make:()=>Ms()},{dir:"FavoritePlugin",group:"engage",make:()=>Ls()},{dir:"PinPlugin",group:"engage",make:()=>Ds()},{dir:"LocationPlugin",group:"engage",make:()=>qr()},{dir:"TimestampPlugin",group:"engage",make:()=>Os()},{dir:"SortPlugin",group:"organize",make:()=>Yr()},{dir:"CountPlugin",group:"organize",make:()=>zs()},{dir:"FilterPlugin",group:"organize",make:()=>Is()},{dir:"SearchPlugin",group:"organize",make:()=>Fs()},{dir:"ModerationPlugin",group:"organize",make:()=>As()},{dir:"RichComposerPlugin",group:"compose",make:()=>Gr({features:{emoji:!0,image:!0,mention:!0}})},{dir:"LoginPromptPlugin",group:"compose",make:()=>Us()}],El=Ox.map(e=>{const n=Dx(e.dir);return{dir:e.dir,factory:`create${e.dir}Plugin`,group:e.group,priority:Lx(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>hu.indexOf(e.group)-hu.indexOf(n.group)||n.priority-e.priority),Yx=El.map(e=>e.dir),zx=y.lazy(()=>Es(()=>import("./HomePage-CdNxIFWf.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),Ix=y.lazy(()=>Es(()=>import("./PluginsPage-YjpImJHV.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),Fx=y.lazy(()=>Es(()=>import("./ScenariosPage-BJyqo9Qq.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),Ax={pkg:"vane-comment",brand:"v",subtitle:"评论区 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${El.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"4 plates"}],routes:[{path:"/",element:c.jsx(zx,{})},{path:"/plugins",element:c.jsx(Ix,{})},{path:"/scenarios",element:c.jsx(Fx,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:ix.map(e=>({key:e,label:jl[e].label})),entries:Rl,detail:(e,n)=>c.jsx(hx,{entry:e,order:n})},footer:[`${El.length} PLUGINS · 4 PLATES`,`${Rl.length} DEMOS · COMMENT CORE`]};function Ux(){return c.jsx(qg,{config:Ax})}function Bx(e){const n=[];if(!e)return{problems:["体检根节点不存在"],checked:0};const t=Array.from(e.querySelectorAll('[data-testid="comment-item"]')).filter(s=>{var a;return!((a=s.parentElement)!=null&&a.closest('[data-testid="comment-item"]'))});let o=0;const r=e.getBoundingClientRect();if(!(r.width!==0||r.height!==0||t.some(s=>{const a=s.getBoundingClientRect();return a.width!==0||a.height!==0})))return{problems:[],checked:0};for(const s of t){o+=1;const a=s.getBoundingClientRect();if(a.width===0||a.height===0){n.push(`零尺寸评论项（${a.width}×${a.height}）`);continue}const u=a.left-r.left,d=a.top-r.top;(u<-.5||d<-.5)&&n.push(`负坐标评论项（left=${u.toFixed(1)}, top=${d.toFixed(1)}）`),(a.right-r.right>1||a.bottom-r.bottom>1)&&n.push(`越界评论项（超出宿主右/下边界 ${(a.right-r.right).toFixed(1)}/${(a.bottom-r.bottom).toFixed(1)}px）`)}for(let s=0;s<t.length;s+=1)for(let a=s+1;a<t.length;a+=1){const u=t[s].getBoundingClientRect(),d=t[a].getBoundingClientRect();u.left<d.right-1&&d.left<u.right-1&&u.top<d.bottom-1&&d.top<u.bottom-1&&n.push(`评论项重叠：顶层第 ${s+1} 与第 ${a+1} 项`)}const l=t.reduce((s,a)=>Math.max(s,a.getBoundingClientRect().bottom-r.top),0);return t.length&&e.scrollHeight+1<l&&n.push(`容器未撑开：scrollHeight=${e.scrollHeight} 小于内容底边 ${l.toFixed(1)}`),{problems:Array.from(new Set(n)),checked:o}}const Cu={id:"u-me",name:"我",avatar:void 0};function Zn({sortMode:e}){const[n,t]=Qe.useState(()=>Z()),o=Qe.useCallback(s=>{t(a=>a.map(u=>u.id===s?{...u,liked:!u.liked,likeCount:(u.likeCount??0)+(u.liked?-1:1)}:u))},[]),r=Qe.useCallback((s,a)=>{t(u=>u.map(d=>d.id===s?{...d,replies:[{id:`${s}-r${Date.now()}`,author:Cu,content:a,createdAt:Date.now(),likeCount:0,liked:!1},...d.replies??[]],replyCount:(d.replyCount??0)+1}:d))},[]),i=Qe.useCallback(s=>{t(a=>[{id:`c-${Date.now()}`,author:Cu,content:s,createdAt:Date.now(),likeCount:0,liked:!1},...a])},[]),l=Qe.useMemo(()=>Q(H,[Qr(),Yr({modes:["newest","oldest","hottest","mostLiked"],defaultMode:"newest"}),Kr({maxDepth:3}),Gr({features:{emoji:!0,image:!0,mention:!0}}),Ts(),Ns(),$s(),Ms(),Ls(),Ds(),qr(),Os(),zs(),Is(),Fs(),Us()]),[]);return c.jsx(l,{comments:n,defaultSortMode:e??"newest",onLike:o,onReply:r,onSubmit:i,onReport:()=>{},onFavorite:()=>{},onPin:()=>{},onReact:()=>{},onLogin:()=>{},mentions:J})}const xu=()=>new Promise(e=>setTimeout(e,0));async function cn(e){const n=document.createElement("div");n.style.cssText="position:fixed;left:0;top:0;width:520px;background:#fff",document.body.appendChild(n);const t=Md(n);return ze.flushSync(()=>t.render(e)),await xu(),{host:n,root:t,q:o=>n.querySelector(o),qa:o=>Array.from(n.querySelectorAll(o)),click:async o=>{const r=n.querySelector(o);if(!r)throw new Error(`找不到元素 ${o}`);ze.flushSync(()=>r.click()),await xu()}}}function ji(e){return Array.from(e.querySelectorAll('[data-testid="comment-item"]')).filter(n=>{var t;return!((t=n.parentElement)!=null&&t.closest('[data-testid="comment-item"]'))}).map(n=>{var t,o;return((o=(t=n.querySelector(".vc-meta span"))==null?void 0:t.textContent)==null?void 0:o.trim())??""})}async function Wx(){var o,r,i,l,s;const e=[];let n=0;const t=(a,u)=>{n+=1,document.title=`SELFTEST RUNNING ${n}`,u||e.push(a)};{const a=await cn(c.jsx(Zn,{sortMode:"newest"})),u=ji(a.host);t("渲染：顶层评论项 = 5",u.length===5);const m=a.qa('[data-testid="comment-item"]').filter(f=>{var v;return!!((v=f.parentElement)!=null&&v.closest('[data-testid="comment-item"]'))});t("楼中楼：含嵌套回复（≥2）",m.length>=2),t("富编辑：渲染评论框 textarea",!!a.q("textarea")),t("几何体检：评论项无越界/负坐标/零尺寸/重叠",Bx(a.host).problems.length===0),ze.flushSync(()=>a.root.unmount()),a.host.remove()}{const a=await cn(c.jsx(Zn,{sortMode:"newest"})),u=a.q('[data-testid="comment-like"]');t("点赞：首个评论项渲染点赞按钮",!!u);const d=((o=u==null?void 0:u.textContent)==null?void 0:o.trim())??"";await a.click('[data-testid="comment-like"]');const m=((i=(r=a.q('[data-testid="comment-like"]'))==null?void 0:r.textContent)==null?void 0:i.trim())??"";t(`点赞：点击后计数变化（${d} → ${m}）`,d!==m&&m!==""),ze.flushSync(()=>a.root.unmount()),a.host.remove()}{const a=await cn(c.jsx(Zn,{sortMode:"newest"}));t("排序 newest：首条为最新（Monica）",ji(a.host)[0]==="Monica"),ze.flushSync(()=>a.root.unmount()),a.host.remove();const u=await cn(c.jsx(Zn,{sortMode:"oldest"}));t("排序 oldest：首条为最早（Ross）",ji(u.host)[0]==="Ross"),ze.flushSync(()=>u.root.unmount()),u.host.remove()}{const a=await cn(c.jsx(Zn,{sortMode:"newest"}));t("新插件：举报按钮渲染",!!a.q('[data-testid="comment-report"]')),t("新插件：分享按钮渲染",!!a.q('[data-testid="comment-share"]')),t("新插件：复制按钮渲染",!!a.q('[data-testid="comment-copy"]')),t("新插件：多表情反应渲染",!!a.q('[data-testid="comment-reaction"]')),t("新插件：收藏按钮渲染",!!a.q('[data-testid="comment-favorite"]')),t("新插件：置顶按钮渲染",!!a.q('[data-testid="comment-pin"]')),t("新插件：绝对时间渲染",!!a.q('[data-testid="comment-timestamp"]')),t("新插件：计数条渲染（含「条评论」）",(((l=a.q('[data-testid="comment-count"]'))==null?void 0:l.textContent)??"").includes("条评论")),t("新插件：筛选栏渲染",!!a.q('[data-testid="comment-filter"]')),t("新插件：搜索框渲染",!!a.q('[data-testid="comment-search"]')),t("新插件：未登录引导渲染",!!a.q('[data-testid="comment-login-prompt"]')),ze.flushSync(()=>a.root.unmount()),a.host.remove()}{const a=[{id:"m1",author:{id:"a",name:"A"},content:[{type:"text",value:"这是一段广告内容请加微信"}],createdAt:Date.now(),likeCount:0}],u=Q(H,[As({words:["广告","加微信"]})]),d=await cn(c.jsx(u,{comments:a})),m=((s=d.q(".vc-content"))==null?void 0:s.textContent)??"";t("审核：敏感词被脱敏（广告/加微信 不再出现）",!m.includes("广告")&&!m.includes("加微信")),ze.flushSync(()=>d.root.unmount()),d.host.remove();const f=[{id:"l1",author:{id:"a",name:"A"},content:[{type:"text",value:"好店推荐"}],createdAt:Date.now(),likeCount:0,location:"上海"}],v=Q(H,[qr()]),x=await cn(c.jsx(v,{comments:f}));t("地理位置：含 location 时渲染 📍 标",!!x.q('[data-testid="comment-location"]')),ze.flushSync(()=>x.root.unmount()),x.host.remove()}{const a=await cn(c.jsx(Zn,{sortMode:"newest"})),u=a.qa(".vc-actions");t("布局：存在操作行容器 .vc-actions",u.length>0),t("布局：操作行开启 flex-wrap（避免按钮挤成竖排）",u.every(f=>(f.style.flexWrap||"").toLowerCase()==="wrap"));const d=u.reduce((f,v)=>f+v.children.length,0),m=u.reduce((f,v)=>f+Array.from(v.children).filter(x=>x.style.flexShrink==="0").length,0);t("布局：操作行子项均 flex-shrink:0（不挤压）",d>0&&m===d),ze.flushSync(()=>a.root.unmount()),a.host.remove()}return{total:n,passed:n-e.length,failed:e}}async function Hx(){document.title="SELFTEST RUNNING";try{const e=await Wx();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Ei.createRoot(document.getElementById("root")).render(c.jsx(Ux,{}));typeof location<"u"&&location.search.includes("selftest=1")&&Hx();export{cx as C,Rl as D,hu as G,_l as L,J as M,El as P,Yr as a,Kr as b,Qr as c,Gr as d,H as e,Z as f,Yx as g,Qx as h,Bx as i,c as j,Ts as k,Ns as l,zs as m,As as n,Us as o,$s as p,Ms as q,y as r,Ls as s,Ds as t,qr as u,Os as v,Q as w,Is as x,Fs as y};
