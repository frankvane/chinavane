const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-BZTc8N-4.js","./catalog-CYHoiGKO.js","./ScenariosPage-BdmVARta.js"])))=>i.map(i=>d[i]);
var vm=Object.defineProperty;var Cm=(e,n,t)=>n in e?vm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Ws=(e,n,t)=>Cm(e,typeof n!="symbol"?n+"":n,t);function xm(e,n){for(var t=0;t<n.length;t++){const o=n[t];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(o,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Sm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ku={exports:{}},Nr={},_u={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),wm=Symbol.for("react.portal"),Pm=Symbol.for("react.fragment"),km=Symbol.for("react.strict_mode"),_m=Symbol.for("react.profiler"),Rm=Symbol.for("react.provider"),jm=Symbol.for("react.context"),Em=Symbol.for("react.forward_ref"),bm=Symbol.for("react.suspense"),Tm=Symbol.for("react.memo"),Nm=Symbol.for("react.lazy"),Hs=Symbol.iterator;function $m(e){return e===null||typeof e!="object"?null:(e=Hs&&e[Hs]||e["@@iterator"],typeof e=="function"?e:null)}var Ru={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ju=Object.assign,Eu={};function Et(e,n,t){this.props=e,this.context=n,this.refs=Eu,this.updater=t||Ru}Et.prototype.isReactComponent={};Et.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Et.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bu(){}bu.prototype=Et.prototype;function bl(e,n,t){this.props=e,this.context=n,this.refs=Eu,this.updater=t||Ru}var Tl=bl.prototype=new bu;Tl.constructor=bl;ju(Tl,Et.prototype);Tl.isPureReactComponent=!0;var Vs=Array.isArray,Tu=Object.prototype.hasOwnProperty,Nl={current:null},Nu={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,n,t){var o,r={},i=null,l=null;if(n!=null)for(o in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)Tu.call(n,o)&&!Nu.hasOwnProperty(o)&&(r[o]=n[o]);var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)r[o]===void 0&&(r[o]=s[o]);return{$$typeof:ko,type:e,key:i,ref:l,props:r,_owner:Nl.current}}function Mm(e,n){return{$$typeof:ko,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function $l(e){return typeof e=="object"&&e!==null&&e.$$typeof===ko}function Dm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Qs=/\/+/g;function Zr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Dm(""+e.key):n.toString(36)}function Ko(e,n,t,o,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ko:case wm:l=!0}}if(l)return l=e,r=r(l),e=o===""?"."+Zr(l,0):o,Vs(r)?(t="",e!=null&&(t=e.replace(Qs,"$&/")+"/"),Ko(r,n,t,"",function(u){return u})):r!=null&&($l(r)&&(r=Mm(r,t+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Qs,"$&/")+"/")+e)),n.push(r)),1;if(l=0,o=o===""?".":o+":",Vs(e))for(var s=0;s<e.length;s++){i=e[s];var a=o+Zr(i,s);l+=Ko(i,n,t,a,r)}else if(a=$m(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=o+Zr(i,s++),l+=Ko(i,n,t,a,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function To(e,n,t){if(e==null)return e;var o=[],r=0;return Ko(e,o,"","",function(i){return n.call(t,i,r++)}),o}function Lm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Go={transition:null},zm={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Go,ReactCurrentOwner:Nl};function Mu(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:To,forEach:function(e,n,t){To(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return To(e,function(){n++}),n},toArray:function(e){return To(e,function(n){return n})||[]},only:function(e){if(!$l(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Et;D.Fragment=Pm;D.Profiler=_m;D.PureComponent=bl;D.StrictMode=km;D.Suspense=bm;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zm;D.act=Mu;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=ju({},e.props),r=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Nl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Tu.call(n,a)&&!Nu.hasOwnProperty(a)&&(o[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:ko,type:e.type,key:r,ref:i,props:o,_owner:l}};D.createContext=function(e){return e={$$typeof:jm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rm,_context:e},e.Consumer=e};D.createElement=$u;D.createFactory=function(e){var n=$u.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Em,render:e}};D.isValidElement=$l;D.lazy=function(e){return{$$typeof:Nm,_payload:{_status:-1,_result:e},_init:Lm}};D.memo=function(e,n){return{$$typeof:Tm,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=Go.transition;Go.transition={};try{e()}finally{Go.transition=n}};D.unstable_act=Mu;D.useCallback=function(e,n){return he.current.useCallback(e,n)};D.useContext=function(e){return he.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return he.current.useDeferredValue(e)};D.useEffect=function(e,n){return he.current.useEffect(e,n)};D.useId=function(){return he.current.useId()};D.useImperativeHandle=function(e,n,t){return he.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return he.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return he.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return he.current.useMemo(e,n)};D.useReducer=function(e,n,t){return he.current.useReducer(e,n,t)};D.useRef=function(e){return he.current.useRef(e)};D.useState=function(e){return he.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return he.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return he.current.useTransition()};D.version="18.3.1";_u.exports=D;var y=_u.exports;const Ye=Sm(y),Om=xm({__proto__:null,default:Ye},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im=y,Am=Symbol.for("react.element"),Fm=Symbol.for("react.fragment"),Um=Object.prototype.hasOwnProperty,Bm=Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wm={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,n,t){var o,r={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(o in n)Um.call(n,o)&&!Wm.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)r[o]===void 0&&(r[o]=n[o]);return{$$typeof:Am,type:e,key:i,ref:l,props:r,_owner:Bm.current}}Nr.Fragment=Fm;Nr.jsx=Du;Nr.jsxs=Du;ku.exports=Nr;var c=ku.exports,Ei={},Lu={exports:{}},Ee={},zu={exports:{}},Ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(j,T){var N=j.length;j.push(T);e:for(;0<N;){var O=N-1>>>1,W=j[O];if(0<r(W,T))j[O]=T,j[N]=W,N=O;else break e}}function t(j){return j.length===0?null:j[0]}function o(j){if(j.length===0)return null;var T=j[0],N=j.pop();if(N!==T){j[0]=N;e:for(var O=0,W=j.length,He=W>>>1;O<He;){var Pe=2*(O+1)-1,Dn=j[Pe],Ln=Pe+1,bo=j[Ln];if(0>r(Dn,N))Ln<W&&0>r(bo,Dn)?(j[O]=bo,j[Ln]=N,O=Ln):(j[O]=Dn,j[Pe]=N,O=Pe);else if(Ln<W&&0>r(bo,N))j[O]=bo,j[Ln]=N,O=Ln;else break e}}return T}function r(j,T){var N=j.sortIndex-T.sortIndex;return N!==0?N:j.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,m=null,f=3,v=!1,C=!1,S=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(j){for(var T=t(u);T!==null;){if(T.callback===null)o(u);else if(T.startTime<=j)o(u),T.sortIndex=T.expirationTime,n(a,T);else break;T=t(u)}}function x(j){if(S=!1,h(j),!C)if(t(a)!==null)C=!0,Dt(k);else{var T=t(u);T!==null&&Lt(x,T.startTime-j)}}function k(j,T){C=!1,S&&(S=!1,g(b),b=-1),v=!0;var N=f;try{for(h(T),m=t(a);m!==null&&(!(m.expirationTime>T)||j&&!$());){var O=m.callback;if(typeof O=="function"){m.callback=null,f=m.priorityLevel;var W=O(m.expirationTime<=T);T=e.unstable_now(),typeof W=="function"?m.callback=W:m===t(a)&&o(a),h(T)}else o(a);m=t(a)}if(m!==null)var He=!0;else{var Pe=t(u);Pe!==null&&Lt(x,Pe.startTime-T),He=!1}return He}finally{m=null,f=N,v=!1}}var _=!1,R=null,b=-1,z=5,M=-1;function $(){return!(e.unstable_now()-M<z)}function A(){if(R!==null){var j=e.unstable_now();M=j;var T=!0;try{T=R(!0,j)}finally{T?ue():(_=!1,R=null)}}else _=!1}var ue;if(typeof p=="function")ue=function(){p(A)};else if(typeof MessageChannel<"u"){var Zn=new MessageChannel,Mn=Zn.port2;Zn.port1.onmessage=A,ue=function(){Mn.postMessage(null)}}else ue=function(){w(A,0)};function Dt(j){R=j,_||(_=!0,ue())}function Lt(j,T){b=w(function(){j(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){C||v||(C=!0,Dt(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(j){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var N=f;f=T;try{return j()}finally{f=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,T){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var N=f;f=j;try{return T()}finally{f=N}},e.unstable_scheduleCallback=function(j,T,N){var O=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?O+N:O):N=O,j){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=N+W,j={id:d++,callback:T,priorityLevel:j,startTime:N,expirationTime:W,sortIndex:-1},N>O?(j.sortIndex=N,n(u,j),t(a)===null&&j===t(u)&&(S?(g(b),b=-1):S=!0,Lt(x,N-O))):(j.sortIndex=W,n(a,j),C||v||(C=!0,Dt(k))),j},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(j){var T=f;return function(){var N=f;f=T;try{return j.apply(this,arguments)}finally{f=N}}}})(Ou);zu.exports=Ou;var Hm=zu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm=y,je=Hm;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iu=new Set,ro={};function qn(e,n){xt(e,n),xt(e+"Capture",n)}function xt(e,n){for(ro[e]=n,e=0;e<n.length;e++)Iu.add(n[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bi=Object.prototype.hasOwnProperty,Qm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ys={},Ks={};function Ym(e){return bi.call(Ks,e)?!0:bi.call(Ys,e)?!1:Qm.test(e)?Ks[e]=!0:(Ys[e]=!0,!1)}function Km(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gm(e,n,t,o){if(n===null||typeof n>"u"||Km(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,t,o,r,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ml=/[\-:]([a-z])/g;function Dl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ml,Dl);ae[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ml,Dl);ae[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ml,Dl);ae[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ll(e,n,t,o){var r=ae.hasOwnProperty(n)?ae[n]:null;(r!==null?r.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Gm(n,t,r,o)&&(t=null),o||r===null?Ym(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,o=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var sn=Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,No=Symbol.for("react.element"),tt=Symbol.for("react.portal"),ot=Symbol.for("react.fragment"),zl=Symbol.for("react.strict_mode"),Ti=Symbol.for("react.profiler"),Au=Symbol.for("react.provider"),Fu=Symbol.for("react.context"),Ol=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),$i=Symbol.for("react.suspense_list"),Il=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),Uu=Symbol.for("react.offscreen"),Gs=Symbol.iterator;function zt(e){return e===null||typeof e!="object"?null:(e=Gs&&e[Gs]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,ei;function Ht(e){if(ei===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ei=n&&n[1]||""}return`
`+ei+e}var ni=!1;function ti(e,n){if(!e||ni)return"";ni=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var o=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){o=u}e.call(n.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),i=o.stack.split(`
`),l=r.length-1,s=i.length-1;1<=l&&0<=s&&r[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(r[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||r[l]!==i[s]){var a=`
`+r[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{ni=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ht(e):""}function qm(e){switch(e.tag){case 5:return Ht(e.type);case 16:return Ht("Lazy");case 13:return Ht("Suspense");case 19:return Ht("SuspenseList");case 0:case 2:case 15:return e=ti(e.type,!1),e;case 11:return e=ti(e.type.render,!1),e;case 1:return e=ti(e.type,!0),e;default:return""}}function Mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ot:return"Fragment";case tt:return"Portal";case Ti:return"Profiler";case zl:return"StrictMode";case Ni:return"Suspense";case $i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fu:return(e.displayName||"Context")+".Consumer";case Au:return(e._context.displayName||"Context")+".Provider";case Ol:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Il:return n=e.displayName||null,n!==null?n:Mi(e.type)||"Memo";case dn:n=e._payload,e=e._init;try{return Mi(e(n))}catch{}}return null}function Xm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mi(n);case 8:return n===zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jm(e){var n=Bu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $o(e){e._valueTracker||(e._valueTracker=Jm(e))}function Wu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=Bu(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Di(e,n){var t=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function qs(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=jn(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Hu(e,n){n=n.checked,n!=null&&Ll(e,"checked",n,!1)}function Li(e,n){Hu(e,n);var t=jn(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?zi(e,n.type,t):n.hasOwnProperty("defaultValue")&&zi(e,n.type,jn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Xs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function zi(e,n,t){(n!=="number"||lr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Vt=Array.isArray;function ft(e,n,t,o){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&o&&(e[t].defaultSelected=!0)}else{for(t=""+jn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Oi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Js(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(Vt(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:jn(t)}}function Vu(e,n){var t=jn(n.value),o=jn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function Zs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ii(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Qu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mo,Yu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function io(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Gt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zm=["Webkit","ms","Moz","O"];Object.keys(Gt).forEach(function(e){Zm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Gt[n]=Gt[e]})});function Ku(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Gt.hasOwnProperty(e)&&Gt[e]?(""+n).trim():n+"px"}function Gu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,r=Ku(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,r):e[t]=r}}var ep=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ai(e,n){if(n){if(ep[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function Fi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function Al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,gt=null,ht=null;function ea(e){if(e=jo(e)){if(typeof Bi!="function")throw Error(P(280));var n=e.stateNode;n&&(n=zr(n),Bi(e.stateNode,e.type,n))}}function qu(e){gt?ht?ht.push(e):ht=[e]:gt=e}function Xu(){if(gt){var e=gt,n=ht;if(ht=gt=null,ea(e),n)for(e=0;e<n.length;e++)ea(n[e])}}function Ju(e,n){return e(n)}function Zu(){}var oi=!1;function ec(e,n,t){if(oi)return e(n,t);oi=!0;try{return Ju(e,n,t)}finally{oi=!1,(gt!==null||ht!==null)&&(Zu(),Xu())}}function lo(e,n){var t=e.stateNode;if(t===null)return null;var o=zr(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Wi=!1;if(tn)try{var Ot={};Object.defineProperty(Ot,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",Ot,Ot),window.removeEventListener("test",Ot,Ot)}catch{Wi=!1}function np(e,n,t,o,r,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var qt=!1,sr=null,ar=!1,Hi=null,tp={onError:function(e){qt=!0,sr=e}};function op(e,n,t,o,r,i,l,s,a){qt=!1,sr=null,np.apply(tp,arguments)}function rp(e,n,t,o,r,i,l,s,a){if(op.apply(this,arguments),qt){if(qt){var u=sr;qt=!1,sr=null}else throw Error(P(198));ar||(ar=!0,Hi=u)}}function Xn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function nc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function na(e){if(Xn(e)!==e)throw Error(P(188))}function ip(e){var n=e.alternate;if(!n){if(n=Xn(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,o=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(o=r.return,o!==null){t=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return na(r),e;if(i===o)return na(r),n;i=i.sibling}throw Error(P(188))}if(t.return!==o.return)t=r,o=i;else{for(var l=!1,s=r.child;s;){if(s===t){l=!0,t=r,o=i;break}if(s===o){l=!0,o=r,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,o=r;break}if(s===o){l=!0,o=i,t=r;break}s=s.sibling}if(!l)throw Error(P(189))}}if(t.alternate!==o)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function tc(e){return e=ip(e),e!==null?oc(e):null}function oc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=oc(e);if(n!==null)return n;e=e.sibling}return null}var rc=je.unstable_scheduleCallback,ta=je.unstable_cancelCallback,lp=je.unstable_shouldYield,sp=je.unstable_requestPaint,X=je.unstable_now,ap=je.unstable_getCurrentPriorityLevel,Fl=je.unstable_ImmediatePriority,ic=je.unstable_UserBlockingPriority,ur=je.unstable_NormalPriority,up=je.unstable_LowPriority,lc=je.unstable_IdlePriority,$r=null,Ge=null;function cp(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot($r,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:pp,dp=Math.log,mp=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(dp(e)/mp|0)|0}var Do=64,Lo=4194304;function Qt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cr(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,r=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~r;s!==0?o=Qt(s):(i&=l,i!==0&&(o=Qt(i)))}else l=t&~r,l!==0?o=Qt(l):i!==0&&(o=Qt(i));if(o===0)return 0;if(n!==0&&n!==o&&!(n&r)&&(r=o&-o,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(o&4&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-Ue(n),r=1<<t,o|=e[t],n&=~r;return o}function fp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gp(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ue(i),s=1<<l,a=r[l];a===-1?(!(s&t)||s&o)&&(r[l]=fp(s,n)):a<=n&&(e.expiredLanes|=s),i&=~s}}function Vi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sc(){var e=Do;return Do<<=1,!(Do&4194240)&&(Do=64),e}function ri(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function _o(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ue(n),e[n]=t}function hp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Ue(t),i=1<<r;n[r]=0,o[r]=-1,e[r]=-1,t&=~i}}function Ul(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-Ue(t),r=1<<o;r&n|e[o]&n&&(e[o]|=n),t&=~r}}var I=0;function ac(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uc,Bl,cc,dc,mc,Qi=!1,zo=[],vn=null,Cn=null,xn=null,so=new Map,ao=new Map,pn=[],yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oa(e,n){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":so.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(n.pointerId)}}function It(e,n,t,o,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},n!==null&&(n=jo(n),n!==null&&Bl(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function vp(e,n,t,o,r){switch(n){case"focusin":return vn=It(vn,e,n,t,o,r),!0;case"dragenter":return Cn=It(Cn,e,n,t,o,r),!0;case"mouseover":return xn=It(xn,e,n,t,o,r),!0;case"pointerover":var i=r.pointerId;return so.set(i,It(so.get(i)||null,e,n,t,o,r)),!0;case"gotpointercapture":return i=r.pointerId,ao.set(i,It(ao.get(i)||null,e,n,t,o,r)),!0}return!1}function pc(e){var n=Fn(e.target);if(n!==null){var t=Xn(n);if(t!==null){if(n=t.tag,n===13){if(n=nc(t),n!==null){e.blockedOn=n,mc(e.priority,function(){cc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Yi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Ui=o,t.target.dispatchEvent(o),Ui=null}else return n=jo(t),n!==null&&Bl(n),e.blockedOn=t,!1;n.shift()}return!0}function ra(e,n,t){qo(e)&&t.delete(n)}function Cp(){Qi=!1,vn!==null&&qo(vn)&&(vn=null),Cn!==null&&qo(Cn)&&(Cn=null),xn!==null&&qo(xn)&&(xn=null),so.forEach(ra),ao.forEach(ra)}function At(e,n){e.blockedOn===n&&(e.blockedOn=null,Qi||(Qi=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Cp)))}function uo(e){function n(r){return At(r,e)}if(0<zo.length){At(zo[0],e);for(var t=1;t<zo.length;t++){var o=zo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(vn!==null&&At(vn,e),Cn!==null&&At(Cn,e),xn!==null&&At(xn,e),so.forEach(n),ao.forEach(n),t=0;t<pn.length;t++)o=pn[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<pn.length&&(t=pn[0],t.blockedOn===null);)pc(t),t.blockedOn===null&&pn.shift()}var yt=sn.ReactCurrentBatchConfig,dr=!0;function xp(e,n,t,o){var r=I,i=yt.transition;yt.transition=null;try{I=1,Wl(e,n,t,o)}finally{I=r,yt.transition=i}}function Sp(e,n,t,o){var r=I,i=yt.transition;yt.transition=null;try{I=4,Wl(e,n,t,o)}finally{I=r,yt.transition=i}}function Wl(e,n,t,o){if(dr){var r=Yi(e,n,t,o);if(r===null)fi(e,n,o,mr,t),oa(e,o);else if(vp(r,e,n,t,o))o.stopPropagation();else if(oa(e,o),n&4&&-1<yp.indexOf(e)){for(;r!==null;){var i=jo(r);if(i!==null&&uc(i),i=Yi(e,n,t,o),i===null&&fi(e,n,o,mr,t),i===r)break;r=i}r!==null&&o.stopPropagation()}else fi(e,n,o,null,t)}}var mr=null;function Yi(e,n,t,o){if(mr=null,e=Al(o),e=Fn(e),e!==null)if(n=Xn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=nc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return mr=e,null}function fc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ap()){case Fl:return 1;case ic:return 4;case ur:case up:return 16;case lc:return 536870912;default:return 16}default:return 16}}var gn=null,Hl=null,Xo=null;function gc(){if(Xo)return Xo;var e,n=Hl,t=n.length,o,r="value"in gn?gn.value:gn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var l=t-e;for(o=1;o<=l&&n[t-o]===r[i-o];o++);return Xo=r.slice(e,1<o?1-o:void 0)}function Jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function ia(){return!1}function be(e){function n(t,o,r,i,l){this._reactName=t,this._targetInst=r,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Oo:ia,this.isPropagationStopped=ia,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),n}var bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=be(bt),Ro=Y({},bt,{view:0,detail:0}),wp=be(Ro),ii,li,Ft,Mr=Y({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ft&&(Ft&&e.type==="mousemove"?(ii=e.screenX-Ft.screenX,li=e.screenY-Ft.screenY):li=ii=0,Ft=e),ii)},movementY:function(e){return"movementY"in e?e.movementY:li}}),la=be(Mr),Pp=Y({},Mr,{dataTransfer:0}),kp=be(Pp),_p=Y({},Ro,{relatedTarget:0}),si=be(_p),Rp=Y({},bt,{animationName:0,elapsedTime:0,pseudoElement:0}),jp=be(Rp),Ep=Y({},bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bp=be(Ep),Tp=Y({},bt,{data:0}),sa=be(Tp),Np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Mp[e])?!!n[e]:!1}function Ql(){return Dp}var Lp=Y({},Ro,{key:function(e){if(e.key){var n=Np[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zp=be(Lp),Op=Y({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),aa=be(Op),Ip=Y({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),Ap=be(Ip),Fp=Y({},bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Up=be(Fp),Bp=Y({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wp=be(Bp),Hp=[9,13,27,32],Yl=tn&&"CompositionEvent"in window,Xt=null;tn&&"documentMode"in document&&(Xt=document.documentMode);var Vp=tn&&"TextEvent"in window&&!Xt,hc=tn&&(!Yl||Xt&&8<Xt&&11>=Xt),ua=" ",ca=!1;function yc(e,n){switch(e){case"keyup":return Hp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rt=!1;function Qp(e,n){switch(e){case"compositionend":return vc(n);case"keypress":return n.which!==32?null:(ca=!0,ua);case"textInput":return e=n.data,e===ua&&ca?null:e;default:return null}}function Yp(e,n){if(rt)return e==="compositionend"||!Yl&&yc(e,n)?(e=gc(),Xo=Hl=gn=null,rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hc&&n.locale!=="ko"?null:n.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function da(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kp[e.type]:n==="textarea"}function Cc(e,n,t,o){qu(o),n=pr(n,"onChange"),0<n.length&&(t=new Vl("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var Jt=null,co=null;function Gp(e){Tc(e,0)}function Dr(e){var n=st(e);if(Wu(n))return e}function qp(e,n){if(e==="change")return n}var xc=!1;if(tn){var ai;if(tn){var ui="oninput"in document;if(!ui){var ma=document.createElement("div");ma.setAttribute("oninput","return;"),ui=typeof ma.oninput=="function"}ai=ui}else ai=!1;xc=ai&&(!document.documentMode||9<document.documentMode)}function pa(){Jt&&(Jt.detachEvent("onpropertychange",Sc),co=Jt=null)}function Sc(e){if(e.propertyName==="value"&&Dr(co)){var n=[];Cc(n,co,e,Al(e)),ec(Gp,n)}}function Xp(e,n,t){e==="focusin"?(pa(),Jt=n,co=t,Jt.attachEvent("onpropertychange",Sc)):e==="focusout"&&pa()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dr(co)}function Zp(e,n){if(e==="click")return Dr(n)}function ef(e,n){if(e==="input"||e==="change")return Dr(n)}function nf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var We=typeof Object.is=="function"?Object.is:nf;function mo(e,n){if(We(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var r=t[o];if(!bi.call(n,r)||!We(e[r],n[r]))return!1}return!0}function fa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ga(e,n){var t=fa(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fa(t)}}function wc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pc(){for(var e=window,n=lr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=lr(e.document)}return n}function Kl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function tf(e){var n=Pc(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&wc(t.ownerDocument.documentElement,t)){if(o!==null&&Kl(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(o.start,r);o=o.end===void 0?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=ga(t,i);var l=ga(t,o);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var of=tn&&"documentMode"in document&&11>=document.documentMode,it=null,Ki=null,Zt=null,Gi=!1;function ha(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Gi||it==null||it!==lr(o)||(o=it,"selectionStart"in o&&Kl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zt&&mo(Zt,o)||(Zt=o,o=pr(Ki,"onSelect"),0<o.length&&(n=new Vl("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=it)))}function Io(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var lt={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},ci={},kc={};tn&&(kc=document.createElement("div").style,"AnimationEvent"in window||(delete lt.animationend.animation,delete lt.animationiteration.animation,delete lt.animationstart.animation),"TransitionEvent"in window||delete lt.transitionend.transition);function Lr(e){if(ci[e])return ci[e];if(!lt[e])return e;var n=lt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in kc)return ci[e]=n[t];return e}var _c=Lr("animationend"),Rc=Lr("animationiteration"),jc=Lr("animationstart"),Ec=Lr("transitionend"),bc=new Map,ya="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,n){bc.set(e,n),qn(n,[e])}for(var di=0;di<ya.length;di++){var mi=ya[di],rf=mi.toLowerCase(),lf=mi[0].toUpperCase()+mi.slice(1);bn(rf,"on"+lf)}bn(_c,"onAnimationEnd");bn(Rc,"onAnimationIteration");bn(jc,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(Ec,"onTransitionEnd");xt("onMouseEnter",["mouseout","mouseover"]);xt("onMouseLeave",["mouseout","mouseover"]);xt("onPointerEnter",["pointerout","pointerover"]);xt("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yt));function va(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,rp(o,n,void 0,e),e.currentTarget=null}function Tc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],r=o.event;o=o.listeners;e:{var i=void 0;if(n)for(var l=o.length-1;0<=l;l--){var s=o[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&r.isPropagationStopped())break e;va(r,s,u),i=a}else for(l=0;l<o.length;l++){if(s=o[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&r.isPropagationStopped())break e;va(r,s,u),i=a}}}if(ar)throw e=Hi,ar=!1,Hi=null,e}function U(e,n){var t=n[el];t===void 0&&(t=n[el]=new Set);var o=e+"__bubble";t.has(o)||(Nc(n,e,2,!1),t.add(o))}function pi(e,n,t){var o=0;n&&(o|=4),Nc(t,e,o,n)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function po(e){if(!e[Ao]){e[Ao]=!0,Iu.forEach(function(t){t!=="selectionchange"&&(sf.has(t)||pi(t,!1,e),pi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ao]||(n[Ao]=!0,pi("selectionchange",!1,n))}}function Nc(e,n,t,o){switch(fc(n)){case 1:var r=xp;break;case 4:r=Sp;break;default:r=Wl}t=r.bind(null,n,t,e),r=void 0,!Wi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function fi(e,n,t,o,r){var i=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var s=o.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(l===4)for(l=o.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;l=l.return}for(;s!==null;){if(l=Fn(s),l===null)return;if(a=l.tag,a===5||a===6){o=i=l;continue e}s=s.parentNode}}o=o.return}ec(function(){var u=i,d=Al(t),m=[];e:{var f=bc.get(e);if(f!==void 0){var v=Vl,C=e;switch(e){case"keypress":if(Jo(t)===0)break e;case"keydown":case"keyup":v=zp;break;case"focusin":C="focus",v=si;break;case"focusout":C="blur",v=si;break;case"beforeblur":case"afterblur":v=si;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=la;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ap;break;case _c:case Rc:case jc:v=jp;break;case Ec:v=Up;break;case"scroll":v=wp;break;case"wheel":v=Wp;break;case"copy":case"cut":case"paste":v=bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=aa}var S=(n&4)!==0,w=!S&&e==="scroll",g=S?f!==null?f+"Capture":null:f;S=[];for(var p=u,h;p!==null;){h=p;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,g!==null&&(x=lo(p,g),x!=null&&S.push(fo(p,x,h)))),w)break;p=p.return}0<S.length&&(f=new v(f,C,null,t,d),m.push({event:f,listeners:S}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&t!==Ui&&(C=t.relatedTarget||t.fromElement)&&(Fn(C)||C[on]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(C=t.relatedTarget||t.toElement,v=u,C=C?Fn(C):null,C!==null&&(w=Xn(C),C!==w||C.tag!==5&&C.tag!==6)&&(C=null)):(v=null,C=u),v!==C)){if(S=la,x="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=aa,x="onPointerLeave",g="onPointerEnter",p="pointer"),w=v==null?f:st(v),h=C==null?f:st(C),f=new S(x,p+"leave",v,t,d),f.target=w,f.relatedTarget=h,x=null,Fn(d)===u&&(S=new S(g,p+"enter",C,t,d),S.target=h,S.relatedTarget=w,x=S),w=x,v&&C)n:{for(S=v,g=C,p=0,h=S;h;h=et(h))p++;for(h=0,x=g;x;x=et(x))h++;for(;0<p-h;)S=et(S),p--;for(;0<h-p;)g=et(g),h--;for(;p--;){if(S===g||g!==null&&S===g.alternate)break n;S=et(S),g=et(g)}S=null}else S=null;v!==null&&Ca(m,f,v,S,!1),C!==null&&w!==null&&Ca(m,w,C,S,!0)}}e:{if(f=u?st(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var k=qp;else if(da(f))if(xc)k=ef;else{k=Jp;var _=Xp}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Zp);if(k&&(k=k(e,u))){Cc(m,k,t,d);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&zi(f,"number",f.value)}switch(_=u?st(u):window,e){case"focusin":(da(_)||_.contentEditable==="true")&&(it=_,Ki=u,Zt=null);break;case"focusout":Zt=Ki=it=null;break;case"mousedown":Gi=!0;break;case"contextmenu":case"mouseup":case"dragend":Gi=!1,ha(m,t,d);break;case"selectionchange":if(of)break;case"keydown":case"keyup":ha(m,t,d)}var R;if(Yl)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else rt?yc(e,t)&&(b="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(hc&&t.locale!=="ko"&&(rt||b!=="onCompositionStart"?b==="onCompositionEnd"&&rt&&(R=gc()):(gn=d,Hl="value"in gn?gn.value:gn.textContent,rt=!0)),_=pr(u,b),0<_.length&&(b=new sa(b,e,null,t,d),m.push({event:b,listeners:_}),R?b.data=R:(R=vc(t),R!==null&&(b.data=R)))),(R=Vp?Qp(e,t):Yp(e,t))&&(u=pr(u,"onBeforeInput"),0<u.length&&(d=new sa("onBeforeInput","beforeinput",null,t,d),m.push({event:d,listeners:u}),d.data=R))}Tc(m,n)})}function fo(e,n,t){return{instance:e,listener:n,currentTarget:t}}function pr(e,n){for(var t=n+"Capture",o=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=lo(e,t),i!=null&&o.unshift(fo(e,i,r)),i=lo(e,n),i!=null&&o.push(fo(e,i,r))),e=e.return}return o}function et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ca(e,n,t,o,r){for(var i=n._reactName,l=[];t!==null&&t!==o;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===o)break;s.tag===5&&u!==null&&(s=u,r?(a=lo(t,i),a!=null&&l.unshift(fo(t,a,s))):r||(a=lo(t,i),a!=null&&l.push(fo(t,a,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var af=/\r\n?/g,uf=/\u0000|\uFFFD/g;function xa(e){return(typeof e=="string"?e:""+e).replace(af,`
`).replace(uf,"")}function Fo(e,n,t){if(n=xa(n),xa(e)!==n&&t)throw Error(P(425))}function fr(){}var qi=null,Xi=null;function Ji(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zi=typeof setTimeout=="function"?setTimeout:void 0,cf=typeof clearTimeout=="function"?clearTimeout:void 0,Sa=typeof Promise=="function"?Promise:void 0,df=typeof queueMicrotask=="function"?queueMicrotask:typeof Sa<"u"?function(e){return Sa.resolve(null).then(e).catch(mf)}:Zi;function mf(e){setTimeout(function(){throw e})}function gi(e,n){var t=n,o=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(o===0){e.removeChild(r),uo(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=r}while(t);uo(n)}function Sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function wa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Tt=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Tt,go="__reactProps$"+Tt,on="__reactContainer$"+Tt,el="__reactEvents$"+Tt,pf="__reactListeners$"+Tt,ff="__reactHandles$"+Tt;function Fn(e){var n=e[Ke];if(n)return n;for(var t=e.parentNode;t;){if(n=t[on]||t[Ke]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=wa(e);e!==null;){if(t=e[Ke])return t;e=wa(e)}return n}e=t,t=e.parentNode}return null}function jo(e){return e=e[Ke]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function st(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function zr(e){return e[go]||null}var nl=[],at=-1;function Tn(e){return{current:e}}function B(e){0>at||(e.current=nl[at],nl[at]=null,at--)}function F(e,n){at++,nl[at]=e.current,e.current=n}var En={},pe=Tn(En),xe=Tn(!1),Vn=En;function St(e,n){var t=e.type.contextTypes;if(!t)return En;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Se(e){return e=e.childContextTypes,e!=null}function gr(){B(xe),B(pe)}function Pa(e,n,t){if(pe.current!==En)throw Error(P(168));F(pe,n),F(xe,t)}function $c(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var r in o)if(!(r in n))throw Error(P(108,Xm(e)||"Unknown",r));return Y({},t,o)}function hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Vn=pe.current,F(pe,e),F(xe,xe.current),!0}function ka(e,n,t){var o=e.stateNode;if(!o)throw Error(P(169));t?(e=$c(e,n,Vn),o.__reactInternalMemoizedMergedChildContext=e,B(xe),B(pe),F(pe,e)):B(xe),F(xe,t)}var Je=null,Or=!1,hi=!1;function Mc(e){Je===null?Je=[e]:Je.push(e)}function gf(e){Or=!0,Mc(e)}function Nn(){if(!hi&&Je!==null){hi=!0;var e=0,n=I;try{var t=Je;for(I=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Je=null,Or=!1}catch(r){throw Je!==null&&(Je=Je.slice(e+1)),rc(Fl,Nn),r}finally{I=n,hi=!1}}return null}var ut=[],ct=0,yr=null,vr=0,Te=[],Ne=0,Qn=null,Ze=1,en="";function In(e,n){ut[ct++]=vr,ut[ct++]=yr,yr=e,vr=n}function Dc(e,n,t){Te[Ne++]=Ze,Te[Ne++]=en,Te[Ne++]=Qn,Qn=e;var o=Ze;e=en;var r=32-Ue(o)-1;o&=~(1<<r),t+=1;var i=32-Ue(n)+r;if(30<i){var l=r-r%5;i=(o&(1<<l)-1).toString(32),o>>=l,r-=l,Ze=1<<32-Ue(n)+r|t<<r|o,en=i+e}else Ze=1<<i|t<<r|o,en=e}function Gl(e){e.return!==null&&(In(e,1),Dc(e,1,0))}function ql(e){for(;e===yr;)yr=ut[--ct],ut[ct]=null,vr=ut[--ct],ut[ct]=null;for(;e===Qn;)Qn=Te[--Ne],Te[Ne]=null,en=Te[--Ne],Te[Ne]=null,Ze=Te[--Ne],Te[Ne]=null}var Re=null,_e=null,H=!1,Fe=null;function Lc(e,n){var t=$e(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function _a(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Re=e,_e=Sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Re=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Qn!==null?{id:Ze,overflow:en}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=$e(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Re=e,_e=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ol(e){if(H){var n=_e;if(n){var t=n;if(!_a(e,n)){if(tl(e))throw Error(P(418));n=Sn(t.nextSibling);var o=Re;n&&_a(e,n)?Lc(o,t):(e.flags=e.flags&-4097|2,H=!1,Re=e)}}else{if(tl(e))throw Error(P(418));e.flags=e.flags&-4097|2,H=!1,Re=e}}}function Ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Uo(e){if(e!==Re)return!1;if(!H)return Ra(e),H=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ji(e.type,e.memoizedProps)),n&&(n=_e)){if(tl(e))throw zc(),Error(P(418));for(;n;)Lc(e,n),n=Sn(n.nextSibling)}if(Ra(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_e=Sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=Re?Sn(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=_e;e;)e=Sn(e.nextSibling)}function wt(){_e=Re=null,H=!1}function Xl(e){Fe===null?Fe=[e]:Fe.push(e)}var hf=sn.ReactCurrentBatchConfig;function Ut(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var o=t.stateNode}if(!o)throw Error(P(147,e));var r=o,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var s=r.refs;l===null?delete s[i]:s[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function Bo(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ja(e){var n=e._init;return n(e._payload)}function Oc(e){function n(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function t(g,p){if(!e)return null;for(;p!==null;)n(g,p),p=p.sibling;return null}function o(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function r(g,p){return g=_n(g,p),g.index=0,g.sibling=null,g}function i(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,h,x){return p===null||p.tag!==6?(p=Pi(h,g.mode,x),p.return=g,p):(p=r(p,h),p.return=g,p)}function a(g,p,h,x){var k=h.type;return k===ot?d(g,p,h.props.children,x,h.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===dn&&ja(k)===p.type)?(x=r(p,h.props),x.ref=Ut(g,p,h),x.return=g,x):(x=ir(h.type,h.key,h.props,null,g.mode,x),x.ref=Ut(g,p,h),x.return=g,x)}function u(g,p,h,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=ki(h,g.mode,x),p.return=g,p):(p=r(p,h.children||[]),p.return=g,p)}function d(g,p,h,x,k){return p===null||p.tag!==7?(p=Hn(h,g.mode,x,k),p.return=g,p):(p=r(p,h),p.return=g,p)}function m(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Pi(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case No:return h=ir(p.type,p.key,p.props,null,g.mode,h),h.ref=Ut(g,null,p),h.return=g,h;case tt:return p=ki(p,g.mode,h),p.return=g,p;case dn:var x=p._init;return m(g,x(p._payload),h)}if(Vt(p)||zt(p))return p=Hn(p,g.mode,h,null),p.return=g,p;Bo(g,p)}return null}function f(g,p,h,x){var k=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:s(g,p,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case No:return h.key===k?a(g,p,h,x):null;case tt:return h.key===k?u(g,p,h,x):null;case dn:return k=h._init,f(g,p,k(h._payload),x)}if(Vt(h)||zt(h))return k!==null?null:d(g,p,h,x,null);Bo(g,h)}return null}function v(g,p,h,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(h)||null,s(p,g,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case No:return g=g.get(x.key===null?h:x.key)||null,a(p,g,x,k);case tt:return g=g.get(x.key===null?h:x.key)||null,u(p,g,x,k);case dn:var _=x._init;return v(g,p,h,_(x._payload),k)}if(Vt(x)||zt(x))return g=g.get(h)||null,d(p,g,x,k,null);Bo(p,x)}return null}function C(g,p,h,x){for(var k=null,_=null,R=p,b=p=0,z=null;R!==null&&b<h.length;b++){R.index>b?(z=R,R=null):z=R.sibling;var M=f(g,R,h[b],x);if(M===null){R===null&&(R=z);break}e&&R&&M.alternate===null&&n(g,R),p=i(M,p,b),_===null?k=M:_.sibling=M,_=M,R=z}if(b===h.length)return t(g,R),H&&In(g,b),k;if(R===null){for(;b<h.length;b++)R=m(g,h[b],x),R!==null&&(p=i(R,p,b),_===null?k=R:_.sibling=R,_=R);return H&&In(g,b),k}for(R=o(g,R);b<h.length;b++)z=v(R,g,b,h[b],x),z!==null&&(e&&z.alternate!==null&&R.delete(z.key===null?b:z.key),p=i(z,p,b),_===null?k=z:_.sibling=z,_=z);return e&&R.forEach(function($){return n(g,$)}),H&&In(g,b),k}function S(g,p,h,x){var k=zt(h);if(typeof k!="function")throw Error(P(150));if(h=k.call(h),h==null)throw Error(P(151));for(var _=k=null,R=p,b=p=0,z=null,M=h.next();R!==null&&!M.done;b++,M=h.next()){R.index>b?(z=R,R=null):z=R.sibling;var $=f(g,R,M.value,x);if($===null){R===null&&(R=z);break}e&&R&&$.alternate===null&&n(g,R),p=i($,p,b),_===null?k=$:_.sibling=$,_=$,R=z}if(M.done)return t(g,R),H&&In(g,b),k;if(R===null){for(;!M.done;b++,M=h.next())M=m(g,M.value,x),M!==null&&(p=i(M,p,b),_===null?k=M:_.sibling=M,_=M);return H&&In(g,b),k}for(R=o(g,R);!M.done;b++,M=h.next())M=v(R,g,b,M.value,x),M!==null&&(e&&M.alternate!==null&&R.delete(M.key===null?b:M.key),p=i(M,p,b),_===null?k=M:_.sibling=M,_=M);return e&&R.forEach(function(A){return n(g,A)}),H&&In(g,b),k}function w(g,p,h,x){if(typeof h=="object"&&h!==null&&h.type===ot&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case No:e:{for(var k=h.key,_=p;_!==null;){if(_.key===k){if(k=h.type,k===ot){if(_.tag===7){t(g,_.sibling),p=r(_,h.props.children),p.return=g,g=p;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===dn&&ja(k)===_.type){t(g,_.sibling),p=r(_,h.props),p.ref=Ut(g,_,h),p.return=g,g=p;break e}t(g,_);break}else n(g,_);_=_.sibling}h.type===ot?(p=Hn(h.props.children,g.mode,x,h.key),p.return=g,g=p):(x=ir(h.type,h.key,h.props,null,g.mode,x),x.ref=Ut(g,p,h),x.return=g,g=x)}return l(g);case tt:e:{for(_=h.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){t(g,p.sibling),p=r(p,h.children||[]),p.return=g,g=p;break e}else{t(g,p);break}else n(g,p);p=p.sibling}p=ki(h,g.mode,x),p.return=g,g=p}return l(g);case dn:return _=h._init,w(g,p,_(h._payload),x)}if(Vt(h))return C(g,p,h,x);if(zt(h))return S(g,p,h,x);Bo(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(t(g,p.sibling),p=r(p,h),p.return=g,g=p):(t(g,p),p=Pi(h,g.mode,x),p.return=g,g=p),l(g)):t(g,p)}return w}var Pt=Oc(!0),Ic=Oc(!1),Cr=Tn(null),xr=null,dt=null,Jl=null;function Zl(){Jl=dt=xr=null}function es(e){var n=Cr.current;B(Cr),e._currentValue=n}function rl(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function vt(e,n){xr=e,Jl=dt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ce=!0),e.firstContext=null)}function De(e){var n=e._currentValue;if(Jl!==e)if(e={context:e,memoizedValue:n,next:null},dt===null){if(xr===null)throw Error(P(308));dt=e,xr.dependencies={lanes:0,firstContext:e}}else dt=dt.next=e;return n}var Un=null;function ns(e){Un===null?Un=[e]:Un.push(e)}function Ac(e,n,t,o){var r=n.interleaved;return r===null?(t.next=t,ns(n)):(t.next=r.next,r.next=t),n.interleaved=t,rn(e,o)}function rn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var mn=!1;function ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function wn(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,L&2){var r=o.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),o.pending=n,rn(e,t)}return r=o.interleaved,r===null?(n.next=n,ns(o)):(n.next=r.next,r.next=n),o.interleaved=n,rn(e,t)}function Zo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Ul(e,t)}}function Ea(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Sr(e,n,t,o){var r=e.updateQueue;mn=!1;var i=r.firstBaseUpdate,l=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(i!==null){var m=r.baseState;l=0,d=u=a=null,s=i;do{var f=s.lane,v=s.eventTime;if((o&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,S=s;switch(f=n,v=t,S.tag){case 1:if(C=S.payload,typeof C=="function"){m=C.call(v,m,f);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=S.payload,f=typeof C=="function"?C.call(v,m,f):C,f==null)break e;m=Y({},m,f);break e;case 2:mn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[s]:f.push(s))}else v={eventTime:v,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=v,a=m):d=d.next=v,l|=f;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;f=s,s=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(a=m),r.baseState=a,r.firstBaseUpdate=u,r.lastBaseUpdate=d,n=r.shared.interleaved,n!==null){r=n;do l|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);Kn|=l,e.lanes=l,e.memoizedState=m}}function ba(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],r=o.callback;if(r!==null){if(o.callback=null,o=t,typeof r!="function")throw Error(P(191,r));r.call(o)}}}var Eo={},qe=Tn(Eo),ho=Tn(Eo),yo=Tn(Eo);function Bn(e){if(e===Eo)throw Error(P(174));return e}function os(e,n){switch(F(yo,n),F(ho,e),F(qe,Eo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ii(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ii(n,e)}B(qe),F(qe,n)}function kt(){B(qe),B(ho),B(yo)}function Uc(e){Bn(yo.current);var n=Bn(qe.current),t=Ii(n,e.type);n!==t&&(F(ho,e),F(qe,t))}function rs(e){ho.current===e&&(B(qe),B(ho))}var V=Tn(0);function wr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var yi=[];function is(){for(var e=0;e<yi.length;e++)yi[e]._workInProgressVersionPrimary=null;yi.length=0}var er=sn.ReactCurrentDispatcher,vi=sn.ReactCurrentBatchConfig,Yn=0,Q=null,te=null,re=null,Pr=!1,eo=!1,vo=0,yf=0;function ce(){throw Error(P(321))}function ls(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!We(e[t],n[t]))return!1;return!0}function ss(e,n,t,o,r,i){if(Yn=i,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,er.current=e===null||e.memoizedState===null?Sf:wf,e=t(o,r),eo){i=0;do{if(eo=!1,vo=0,25<=i)throw Error(P(301));i+=1,re=te=null,n.updateQueue=null,er.current=Pf,e=t(o,r)}while(eo)}if(er.current=kr,n=te!==null&&te.next!==null,Yn=0,re=te=Q=null,Pr=!1,n)throw Error(P(300));return e}function as(){var e=vo!==0;return vo=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Q.memoizedState=re=e:re=re.next=e,re}function Le(){if(te===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=re===null?Q.memoizedState:re.next;if(n!==null)re=n,te=e;else{if(e===null)throw Error(P(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?Q.memoizedState=re=e:re=re.next=e}return re}function Co(e,n){return typeof n=="function"?n(e):n}function Ci(e){var n=Le(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var o=te,r=o.baseQueue,i=t.pending;if(i!==null){if(r!==null){var l=r.next;r.next=i.next,i.next=l}o.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,o=o.baseState;var s=l=null,a=null,u=i;do{var d=u.lane;if((Yn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=m,l=o):a=a.next=m,Q.lanes|=d,Kn|=d}u=u.next}while(u!==null&&u!==i);a===null?l=o:a.next=s,We(o,n.memoizedState)||(Ce=!0),n.memoizedState=o,n.baseState=l,n.baseQueue=a,t.lastRenderedState=o}if(e=t.interleaved,e!==null){r=e;do i=r.lane,Q.lanes|=i,Kn|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function xi(e){var n=Le(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var o=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var l=r=r.next;do i=e(i,l.action),l=l.next;while(l!==r);We(i,n.memoizedState)||(Ce=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,o]}function Bc(){}function Wc(e,n){var t=Q,o=Le(),r=n(),i=!We(o.memoizedState,r);if(i&&(o.memoizedState=r,Ce=!0),o=o.queue,us(Qc.bind(null,t,o,e),[e]),o.getSnapshot!==n||i||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,xo(9,Vc.bind(null,t,o,r,n),void 0,null),ie===null)throw Error(P(349));Yn&30||Hc(t,n,r)}return r}function Hc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Vc(e,n,t,o){n.value=t,n.getSnapshot=o,Yc(n)&&Kc(e)}function Qc(e,n,t){return t(function(){Yc(n)&&Kc(e)})}function Yc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!We(e,t)}catch{return!0}}function Kc(e){var n=rn(e,1);n!==null&&Be(n,e,1,-1)}function Ta(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:e},n.queue=e,e=e.dispatch=xf.bind(null,Q,e),[n.memoizedState,e]}function xo(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function Gc(){return Le().memoizedState}function nr(e,n,t,o){var r=Qe();Q.flags|=e,r.memoizedState=xo(1|n,t,void 0,o===void 0?null:o)}function Ir(e,n,t,o){var r=Le();o=o===void 0?null:o;var i=void 0;if(te!==null){var l=te.memoizedState;if(i=l.destroy,o!==null&&ls(o,l.deps)){r.memoizedState=xo(n,t,i,o);return}}Q.flags|=e,r.memoizedState=xo(1|n,t,i,o)}function Na(e,n){return nr(8390656,8,e,n)}function us(e,n){return Ir(2048,8,e,n)}function qc(e,n){return Ir(4,2,e,n)}function Xc(e,n){return Ir(4,4,e,n)}function Jc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zc(e,n,t){return t=t!=null?t.concat([e]):null,Ir(4,4,Jc.bind(null,n,e),t)}function cs(){}function ed(e,n){var t=Le();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&ls(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function nd(e,n){var t=Le();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&ls(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function td(e,n,t){return Yn&21?(We(t,n)||(t=sc(),Q.lanes|=t,Kn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=t)}function vf(e,n){var t=I;I=t!==0&&4>t?t:4,e(!0);var o=vi.transition;vi.transition={};try{e(!1),n()}finally{I=t,vi.transition=o}}function od(){return Le().memoizedState}function Cf(e,n,t){var o=kn(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},rd(e))id(n,t);else if(t=Ac(e,n,t,o),t!==null){var r=ge();Be(t,e,o,r),ld(t,n,o)}}function xf(e,n,t){var o=kn(e),r={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(rd(e))id(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,s=i(l,t);if(r.hasEagerState=!0,r.eagerState=s,We(s,l)){var a=n.interleaved;a===null?(r.next=r,ns(n)):(r.next=a.next,a.next=r),n.interleaved=r;return}}catch{}finally{}t=Ac(e,n,r,o),t!==null&&(r=ge(),Be(t,e,o,r),ld(t,n,o))}}function rd(e){var n=e.alternate;return e===Q||n!==null&&n===Q}function id(e,n){eo=Pr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ld(e,n,t){if(t&4194240){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Ul(e,t)}}var kr={readContext:De,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Sf={readContext:De,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:De,useEffect:Na,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,nr(4194308,4,Jc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return nr(4194308,4,e,n)},useInsertionEffect:function(e,n){return nr(4,2,e,n)},useMemo:function(e,n){var t=Qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=Qe();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=Cf.bind(null,Q,e),[o.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:Ta,useDebugValue:cs,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Ta(!1),n=e[0];return e=vf.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=Q,r=Qe();if(H){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),ie===null)throw Error(P(349));Yn&30||Hc(o,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,Na(Qc.bind(null,o,i,e),[e]),o.flags|=2048,xo(9,Vc.bind(null,o,i,t,n),void 0,null),t},useId:function(){var e=Qe(),n=ie.identifierPrefix;if(H){var t=en,o=Ze;t=(o&~(1<<32-Ue(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=vo++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=yf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},wf={readContext:De,useCallback:ed,useContext:De,useEffect:us,useImperativeHandle:Zc,useInsertionEffect:qc,useLayoutEffect:Xc,useMemo:nd,useReducer:Ci,useRef:Gc,useState:function(){return Ci(Co)},useDebugValue:cs,useDeferredValue:function(e){var n=Le();return td(n,te.memoizedState,e)},useTransition:function(){var e=Ci(Co)[0],n=Le().memoizedState;return[e,n]},useMutableSource:Bc,useSyncExternalStore:Wc,useId:od,unstable_isNewReconciler:!1},Pf={readContext:De,useCallback:ed,useContext:De,useEffect:us,useImperativeHandle:Zc,useInsertionEffect:qc,useLayoutEffect:Xc,useMemo:nd,useReducer:xi,useRef:Gc,useState:function(){return xi(Co)},useDebugValue:cs,useDeferredValue:function(e){var n=Le();return te===null?n.memoizedState=e:td(n,te.memoizedState,e)},useTransition:function(){var e=xi(Co)[0],n=Le().memoizedState;return[e,n]},useMutableSource:Bc,useSyncExternalStore:Wc,useId:od,unstable_isNewReconciler:!1};function Oe(e,n){if(e&&e.defaultProps){n=Y({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function il(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:Y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ar={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=ge(),r=kn(e),i=nn(o,r);i.payload=n,t!=null&&(i.callback=t),n=wn(e,i,r),n!==null&&(Be(n,e,r,o),Zo(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=ge(),r=kn(e),i=nn(o,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=wn(e,i,r),n!==null&&(Be(n,e,r,o),Zo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),o=kn(e),r=nn(t,o);r.tag=2,n!=null&&(r.callback=n),n=wn(e,r,o),n!==null&&(Be(n,e,o,t),Zo(n,e,o))}};function $a(e,n,t,o,r,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,l):n.prototype&&n.prototype.isPureReactComponent?!mo(t,o)||!mo(r,i):!0}function sd(e,n,t){var o=!1,r=En,i=n.contextType;return typeof i=="object"&&i!==null?i=De(i):(r=Se(n)?Vn:pe.current,o=n.contextTypes,i=(o=o!=null)?St(e,r):En),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ar,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function Ma(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&Ar.enqueueReplaceState(n,n.state,null)}function ll(e,n,t,o){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},ts(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=De(i):(i=Se(n)?Vn:pe.current,r.context=St(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(il(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Ar.enqueueReplaceState(r,r.state,null),Sr(e,t,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function _t(e,n){try{var t="",o=n;do t+=qm(o),o=o.return;while(o);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function Si(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function sl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var kf=typeof WeakMap=="function"?WeakMap:Map;function ad(e,n,t){t=nn(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){Rr||(Rr=!0,yl=o),sl(e,n)},t}function ud(e,n,t){t=nn(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=n.value;t.payload=function(){return o(r)},t.callback=function(){sl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){sl(e,n),typeof o!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Da(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new kf;var r=new Set;o.set(n,r)}else r=o.get(n),r===void 0&&(r=new Set,o.set(n,r));r.has(t)||(r.add(t),e=If.bind(null,e,n,t),n.then(e,e))}function La(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function za(e,n,t,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=nn(-1,1),n.tag=2,wn(t,n,1))),t.lanes|=1),e)}var _f=sn.ReactCurrentOwner,Ce=!1;function fe(e,n,t,o){n.child=e===null?Ic(n,null,t,o):Pt(n,e.child,t,o)}function Oa(e,n,t,o,r){t=t.render;var i=n.ref;return vt(n,r),o=ss(e,n,t,o,i,r),t=as(),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,ln(e,n,r)):(H&&t&&Gl(n),n.flags|=1,fe(e,n,o,r),n.child)}function Ia(e,n,t,o,r){if(e===null){var i=t.type;return typeof i=="function"&&!vs(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,cd(e,n,i,o,r)):(e=ir(t.type,null,o,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:mo,t(l,o)&&e.ref===n.ref)return ln(e,n,r)}return n.flags|=1,e=_n(i,o),e.ref=n.ref,e.return=n,n.child=e}function cd(e,n,t,o,r){if(e!==null){var i=e.memoizedProps;if(mo(i,o)&&e.ref===n.ref)if(Ce=!1,n.pendingProps=o=i,(e.lanes&r)!==0)e.flags&131072&&(Ce=!0);else return n.lanes=e.lanes,ln(e,n,r)}return al(e,n,t,o,r)}function dd(e,n,t){var o=n.pendingProps,r=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(pt,ke),ke|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(pt,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:t,F(pt,ke),ke|=o}else i!==null?(o=i.baseLanes|t,n.memoizedState=null):o=t,F(pt,ke),ke|=o;return fe(e,n,r,t),n.child}function md(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function al(e,n,t,o,r){var i=Se(t)?Vn:pe.current;return i=St(n,i),vt(n,r),t=ss(e,n,t,o,i,r),o=as(),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,ln(e,n,r)):(H&&o&&Gl(n),n.flags|=1,fe(e,n,t,r),n.child)}function Aa(e,n,t,o,r){if(Se(t)){var i=!0;hr(n)}else i=!1;if(vt(n,r),n.stateNode===null)tr(e,n),sd(n,t,o),ll(n,t,o,r),o=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var a=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=De(u):(u=Se(t)?Vn:pe.current,u=St(n,u));var d=t.getDerivedStateFromProps,m=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==o||a!==u)&&Ma(n,l,o,u),mn=!1;var f=n.memoizedState;l.state=f,Sr(n,o,l,r),a=n.memoizedState,s!==o||f!==a||xe.current||mn?(typeof d=="function"&&(il(n,t,d,o),a=n.memoizedState),(s=mn||$a(n,t,s,o,f,a,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=a),l.props=o,l.state=a,l.context=u,o=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{l=n.stateNode,Fc(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:Oe(n.type,s),l.props=u,m=n.pendingProps,f=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=De(a):(a=Se(t)?Vn:pe.current,a=St(n,a));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||f!==a)&&Ma(n,l,o,a),mn=!1,f=n.memoizedState,l.state=f,Sr(n,o,l,r);var C=n.memoizedState;s!==m||f!==C||xe.current||mn?(typeof v=="function"&&(il(n,t,v,o),C=n.memoizedState),(u=mn||$a(n,t,u,o,f,C,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,C,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,C,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=C),l.props=o,l.state=C,l.context=a,o=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),o=!1)}return ul(e,n,t,o,i,r)}function ul(e,n,t,o,r,i){md(e,n);var l=(n.flags&128)!==0;if(!o&&!l)return r&&ka(n,t,!1),ln(e,n,i);o=n.stateNode,_f.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&l?(n.child=Pt(n,e.child,null,i),n.child=Pt(n,null,s,i)):fe(e,n,s,i),n.memoizedState=o.state,r&&ka(n,t,!0),n.child}function pd(e){var n=e.stateNode;n.pendingContext?Pa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Pa(e,n.context,!1),os(e,n.containerInfo)}function Fa(e,n,t,o,r){return wt(),Xl(r),n.flags|=256,fe(e,n,t,o),n.child}var cl={dehydrated:null,treeContext:null,retryLane:0};function dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function fd(e,n,t){var o=n.pendingProps,r=V.current,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),F(V,r&1),e===null)return ol(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=o.children,e=o.fallback,i?(o=n.mode,i=n.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Br(l,o,0,null),e=Hn(e,o,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=dl(t),n.memoizedState=cl,e):ds(n,l));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return Rf(e,n,l,o,s,r,t);if(i){i=o.fallback,l=n.mode,r=e.child,s=r.sibling;var a={mode:"hidden",children:o.children};return!(l&1)&&n.child!==r?(o=n.child,o.childLanes=0,o.pendingProps=a,n.deletions=null):(o=_n(r,a),o.subtreeFlags=r.subtreeFlags&14680064),s!==null?i=_n(s,i):(i=Hn(i,l,t,null),i.flags|=2),i.return=n,o.return=n,o.sibling=i,n.child=o,o=i,i=n.child,l=e.child.memoizedState,l=l===null?dl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=cl,o}return i=e.child,e=i.sibling,o=_n(i,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function ds(e,n){return n=Br({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Wo(e,n,t,o){return o!==null&&Xl(o),Pt(n,e.child,null,t),e=ds(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Rf(e,n,t,o,r,i,l){if(t)return n.flags&256?(n.flags&=-257,o=Si(Error(P(422))),Wo(e,n,l,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=o.fallback,r=n.mode,o=Br({mode:"visible",children:o.children},r,0,null),i=Hn(i,r,l,null),i.flags|=2,o.return=n,i.return=n,o.sibling=i,n.child=o,n.mode&1&&Pt(n,e.child,null,l),n.child.memoizedState=dl(l),n.memoizedState=cl,i);if(!(n.mode&1))return Wo(e,n,l,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var s=o.dgst;return o=s,i=Error(P(419)),o=Si(i,o,void 0),Wo(e,n,l,o)}if(s=(l&e.childLanes)!==0,Ce||s){if(o=ie,o!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|l)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,rn(e,r),Be(o,e,r,-1))}return ys(),o=Si(Error(P(421))),Wo(e,n,l,o)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Af.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,_e=Sn(r.nextSibling),Re=n,H=!0,Fe=null,e!==null&&(Te[Ne++]=Ze,Te[Ne++]=en,Te[Ne++]=Qn,Ze=e.id,en=e.overflow,Qn=n),n=ds(n,o.children),n.flags|=4096,n)}function Ua(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),rl(e.return,n,t)}function wi(e,n,t,o,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=t,i.tailMode=r)}function gd(e,n,t){var o=n.pendingProps,r=o.revealOrder,i=o.tail;if(fe(e,n,o.children,t),o=V.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ua(e,t,n);else if(e.tag===19)Ua(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(F(V,o),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&wr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),wi(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&wr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}wi(n,!0,t,null,i);break;case"together":wi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function tr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Kn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=_n(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=_n(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function jf(e,n,t){switch(n.tag){case 3:pd(n),wt();break;case 5:Uc(n);break;case 1:Se(n.type)&&hr(n);break;case 4:os(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,r=n.memoizedProps.value;F(Cr,o._currentValue),o._currentValue=r;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(F(V,V.current&1),n.flags|=128,null):t&n.child.childLanes?fd(e,n,t):(F(V,V.current&1),e=ln(e,n,t),e!==null?e.sibling:null);F(V,V.current&1);break;case 19:if(o=(t&n.childLanes)!==0,e.flags&128){if(o)return gd(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),F(V,V.current),o)break;return null;case 22:case 23:return n.lanes=0,dd(e,n,t)}return ln(e,n,t)}var hd,ml,yd,vd;hd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ml=function(){};yd=function(e,n,t,o){var r=e.memoizedProps;if(r!==o){e=n.stateNode,Bn(qe.current);var i=null;switch(t){case"input":r=Di(e,r),o=Di(e,o),i=[];break;case"select":r=Y({},r,{value:void 0}),o=Y({},o,{value:void 0}),i=[];break;case"textarea":r=Oi(e,r),o=Oi(e,o),i=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=fr)}Ai(t,o);var l;t=null;for(u in r)if(!o.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ro.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in o){var a=o[u];if(s=r!=null?r[u]:void 0,o.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(i||(i=[]),i.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ro.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&U("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};vd=function(e,n,t,o){t!==o&&(n.flags|=4)};function Bt(e,n){if(!H)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function Ef(e,n,t){var o=n.pendingProps;switch(ql(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return Se(n.type)&&gr(),de(n),null;case 3:return o=n.stateNode,kt(),B(xe),B(pe),is(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Uo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Fe!==null&&(xl(Fe),Fe=null))),ml(e,n),de(n),null;case 5:rs(n);var r=Bn(yo.current);if(t=n.type,e!==null&&n.stateNode!=null)yd(e,n,t,o,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(P(166));return de(n),null}if(e=Bn(qe.current),Uo(n)){o=n.stateNode,t=n.type;var i=n.memoizedProps;switch(o[Ke]=n,o[go]=i,e=(n.mode&1)!==0,t){case"dialog":U("cancel",o),U("close",o);break;case"iframe":case"object":case"embed":U("load",o);break;case"video":case"audio":for(r=0;r<Yt.length;r++)U(Yt[r],o);break;case"source":U("error",o);break;case"img":case"image":case"link":U("error",o),U("load",o);break;case"details":U("toggle",o);break;case"input":qs(o,i),U("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},U("invalid",o);break;case"textarea":Js(o,i),U("invalid",o)}Ai(t,i),r=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?o.textContent!==s&&(i.suppressHydrationWarning!==!0&&Fo(o.textContent,s,e),r=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Fo(o.textContent,s,e),r=["children",""+s]):ro.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&U("scroll",o)}switch(t){case"input":$o(o),Xs(o,i,!0);break;case"textarea":$o(o),Zs(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=fr)}o=r,n.updateQueue=o,o!==null&&(n.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(t,{is:o.is}):(e=l.createElement(t),t==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,t),e[Ke]=n,e[go]=o,hd(e,n,!1,!1),n.stateNode=e;e:{switch(l=Fi(t,o),t){case"dialog":U("cancel",e),U("close",e),r=o;break;case"iframe":case"object":case"embed":U("load",e),r=o;break;case"video":case"audio":for(r=0;r<Yt.length;r++)U(Yt[r],e);r=o;break;case"source":U("error",e),r=o;break;case"img":case"image":case"link":U("error",e),U("load",e),r=o;break;case"details":U("toggle",e),r=o;break;case"input":qs(e,o),r=Di(e,o),U("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=Y({},o,{value:void 0}),U("invalid",e);break;case"textarea":Js(e,o),r=Oi(e,o),U("invalid",e);break;default:r=o}Ai(t,r),s=r;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Gu(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Yu(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&io(e,a):typeof a=="number"&&io(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ro.hasOwnProperty(i)?a!=null&&i==="onScroll"&&U("scroll",e):a!=null&&Ll(e,i,a,l))}switch(t){case"input":$o(e),Xs(e,o,!1);break;case"textarea":$o(e),Zs(e);break;case"option":o.value!=null&&e.setAttribute("value",""+jn(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?ft(e,!!o.multiple,i,!1):o.defaultValue!=null&&ft(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=fr)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)vd(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(P(166));if(t=Bn(yo.current),Bn(qe.current),Uo(n)){if(o=n.stateNode,t=n.memoizedProps,o[Ke]=n,(i=o.nodeValue!==t)&&(e=Re,e!==null))switch(e.tag){case 3:Fo(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fo(o.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Ke]=n,n.stateNode=o}return de(n),null;case 13:if(B(V),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&_e!==null&&n.mode&1&&!(n.flags&128))zc(),wt(),n.flags|=98560,i=!1;else if(i=Uo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[Ke]=n}else wt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),i=!1}else Fe!==null&&(xl(Fe),Fe=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||V.current&1?oe===0&&(oe=3):ys())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return kt(),ml(e,n),e===null&&po(n.stateNode.containerInfo),de(n),null;case 10:return es(n.type._context),de(n),null;case 17:return Se(n.type)&&gr(),de(n),null;case 19:if(B(V),i=n.memoizedState,i===null)return de(n),null;if(o=(n.flags&128)!==0,l=i.rendering,l===null)if(o)Bt(i,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=wr(e),l!==null){for(n.flags|=128,Bt(i,!1),o=l.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)i=t,e=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(V,V.current&1|2),n.child}e=e.sibling}i.tail!==null&&X()>Rt&&(n.flags|=128,o=!0,Bt(i,!1),n.lanes=4194304)}else{if(!o)if(e=wr(l),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Bt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!H)return de(n),null}else 2*X()-i.renderingStartTime>Rt&&t!==1073741824&&(n.flags|=128,o=!0,Bt(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=X(),n.sibling=null,t=V.current,F(V,o?t&1|2:t&1),n):(de(n),null);case 22:case 23:return hs(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?ke&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function bf(e,n){switch(ql(n),n.tag){case 1:return Se(n.type)&&gr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return kt(),B(xe),B(pe),is(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return rs(n),null;case 13:if(B(V),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));wt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(V),null;case 4:return kt(),null;case 10:return es(n.type._context),null;case 22:case 23:return hs(),null;case 24:return null;default:return null}}var Ho=!1,me=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,E=null;function mt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){G(e,n,o)}else t.current=null}function pl(e,n,t){try{t()}catch(o){G(e,n,o)}}var Ba=!1;function Nf(e,n){if(qi=dr,e=Pc(),Kl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,a=-1,u=0,d=0,m=e,f=null;n:for(;;){for(var v;m!==t||r!==0&&m.nodeType!==3||(s=l+r),m!==i||o!==0&&m.nodeType!==3||(a=l+o),m.nodeType===3&&(l+=m.nodeValue.length),(v=m.firstChild)!==null;)f=m,m=v;for(;;){if(m===e)break n;if(f===t&&++u===r&&(s=l),f===i&&++d===o&&(a=l),(v=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=v}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Xi={focusedElem:e,selectionRange:t},dr=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var C=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var S=C.memoizedProps,w=C.memoizedState,g=n.stateNode,p=g.getSnapshotBeforeUpdate(n.elementType===n.type?S:Oe(n.type,S),w);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){G(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return C=Ba,Ba=!1,C}function no(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&pl(n,t,i)}r=r.next}while(r!==o)}}function Fr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function fl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Cd(e){var n=e.alternate;n!==null&&(e.alternate=null,Cd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ke],delete n[go],delete n[el],delete n[pf],delete n[ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xd(e){return e.tag===5||e.tag===3||e.tag===4}function Wa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gl(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=fr));else if(o!==4&&(e=e.child,e!==null))for(gl(e,n,t),e=e.sibling;e!==null;)gl(e,n,t),e=e.sibling}function hl(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(hl(e,n,t),e=e.sibling;e!==null;)hl(e,n,t),e=e.sibling}var le=null,Ae=!1;function un(e,n,t){for(t=t.child;t!==null;)Sd(e,n,t),t=t.sibling}function Sd(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount($r,t)}catch{}switch(t.tag){case 5:me||mt(t,n);case 6:var o=le,r=Ae;le=null,un(e,n,t),le=o,Ae=r,le!==null&&(Ae?(e=le,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):le.removeChild(t.stateNode));break;case 18:le!==null&&(Ae?(e=le,t=t.stateNode,e.nodeType===8?gi(e.parentNode,t):e.nodeType===1&&gi(e,t),uo(e)):gi(le,t.stateNode));break;case 4:o=le,r=Ae,le=t.stateNode.containerInfo,Ae=!0,un(e,n,t),le=o,Ae=r;break;case 0:case 11:case 14:case 15:if(!me&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var i=r,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&pl(t,n,l),r=r.next}while(r!==o)}un(e,n,t);break;case 1:if(!me&&(mt(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(s){G(t,n,s)}un(e,n,t);break;case 21:un(e,n,t);break;case 22:t.mode&1?(me=(o=me)||t.memoizedState!==null,un(e,n,t),me=o):un(e,n,t);break;default:un(e,n,t)}}function Ha(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Tf),n.forEach(function(o){var r=Ff.bind(null,e,o);t.has(o)||(t.add(o),o.then(r,r))})}}function ze(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var r=t[o];try{var i=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,Ae=!1;break e;case 3:le=s.stateNode.containerInfo,Ae=!0;break e;case 4:le=s.stateNode.containerInfo,Ae=!0;break e}s=s.return}if(le===null)throw Error(P(160));Sd(i,l,r),le=null,Ae=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(u){G(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)wd(n,e),n=n.sibling}function wd(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(n,e),Ve(e),o&4){try{no(3,e,e.return),Fr(3,e)}catch(S){G(e,e.return,S)}try{no(5,e,e.return)}catch(S){G(e,e.return,S)}}break;case 1:ze(n,e),Ve(e),o&512&&t!==null&&mt(t,t.return);break;case 5:if(ze(n,e),Ve(e),o&512&&t!==null&&mt(t,t.return),e.flags&32){var r=e.stateNode;try{io(r,"")}catch(S){G(e,e.return,S)}}if(o&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Hu(r,i),Fi(s,l);var u=Fi(s,i);for(l=0;l<a.length;l+=2){var d=a[l],m=a[l+1];d==="style"?Gu(r,m):d==="dangerouslySetInnerHTML"?Yu(r,m):d==="children"?io(r,m):Ll(r,d,m,u)}switch(s){case"input":Li(r,i);break;case"textarea":Vu(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?ft(r,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?ft(r,!!i.multiple,i.defaultValue,!0):ft(r,!!i.multiple,i.multiple?[]:"",!1))}r[go]=i}catch(S){G(e,e.return,S)}}break;case 6:if(ze(n,e),Ve(e),o&4){if(e.stateNode===null)throw Error(P(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(S){G(e,e.return,S)}}break;case 3:if(ze(n,e),Ve(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{uo(n.containerInfo)}catch(S){G(e,e.return,S)}break;case 4:ze(n,e),Ve(e);break;case 13:ze(n,e),Ve(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(fs=X())),o&4&&Ha(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(me=(u=me)||d,ze(n,e),me=u):ze(n,e),Ve(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(m=E=d;E!==null;){switch(f=E,v=f.child,f.tag){case 0:case 11:case 14:case 15:no(4,f,f.return);break;case 1:mt(f,f.return);var C=f.stateNode;if(typeof C.componentWillUnmount=="function"){o=f,t=f.return;try{n=o,C.props=n.memoizedProps,C.state=n.memoizedState,C.componentWillUnmount()}catch(S){G(o,t,S)}}break;case 5:mt(f,f.return);break;case 22:if(f.memoizedState!==null){Qa(m);continue}}v!==null?(v.return=f,E=v):Qa(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{r=m.stateNode,u?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ku("display",l))}catch(S){G(e,e.return,S)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(S){G(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ze(n,e),Ve(e),o&4&&Ha(e);break;case 21:break;default:ze(n,e),Ve(e)}}function Ve(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(xd(t)){var o=t;break e}t=t.return}throw Error(P(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(io(r,""),o.flags&=-33);var i=Wa(e);hl(e,i,r);break;case 3:case 4:var l=o.stateNode.containerInfo,s=Wa(e);gl(e,s,l);break;default:throw Error(P(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $f(e,n,t){E=e,Pd(e)}function Pd(e,n,t){for(var o=(e.mode&1)!==0;E!==null;){var r=E,i=r.child;if(r.tag===22&&o){var l=r.memoizedState!==null||Ho;if(!l){var s=r.alternate,a=s!==null&&s.memoizedState!==null||me;s=Ho;var u=me;if(Ho=l,(me=a)&&!u)for(E=r;E!==null;)l=E,a=l.child,l.tag===22&&l.memoizedState!==null?Ya(r):a!==null?(a.return=l,E=a):Ya(r);for(;i!==null;)E=i,Pd(i),i=i.sibling;E=r,Ho=s,me=u}Va(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,E=i):Va(e)}}function Va(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:me||Fr(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!me)if(t===null)o.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Oe(n.type,t.memoizedProps);o.componentDidUpdate(r,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ba(n,i,o);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ba(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&uo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}me||n.flags&512&&fl(n)}catch(f){G(n,n.return,f)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function Qa(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function Ya(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Fr(4,n)}catch(a){G(n,t,a)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var r=n.return;try{o.componentDidMount()}catch(a){G(n,r,a)}}var i=n.return;try{fl(n)}catch(a){G(n,i,a)}break;case 5:var l=n.return;try{fl(n)}catch(a){G(n,l,a)}}}catch(a){G(n,n.return,a)}if(n===e){E=null;break}var s=n.sibling;if(s!==null){s.return=n.return,E=s;break}E=n.return}}var Mf=Math.ceil,_r=sn.ReactCurrentDispatcher,ms=sn.ReactCurrentOwner,Me=sn.ReactCurrentBatchConfig,L=0,ie=null,Z=null,se=0,ke=0,pt=Tn(0),oe=0,So=null,Kn=0,Ur=0,ps=0,to=null,ve=null,fs=0,Rt=1/0,Xe=null,Rr=!1,yl=null,Pn=null,Vo=!1,hn=null,jr=0,oo=0,vl=null,or=-1,rr=0;function ge(){return L&6?X():or!==-1?or:or=X()}function kn(e){return e.mode&1?L&2&&se!==0?se&-se:hf.transition!==null?(rr===0&&(rr=sc()),rr):(e=I,e!==0||(e=window.event,e=e===void 0?16:fc(e.type)),e):1}function Be(e,n,t,o){if(50<oo)throw oo=0,vl=null,Error(P(185));_o(e,t,o),(!(L&2)||e!==ie)&&(e===ie&&(!(L&2)&&(Ur|=t),oe===4&&fn(e,se)),we(e,o),t===1&&L===0&&!(n.mode&1)&&(Rt=X()+500,Or&&Nn()))}function we(e,n){var t=e.callbackNode;gp(e,n);var o=cr(e,e===ie?se:0);if(o===0)t!==null&&ta(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&ta(t),n===1)e.tag===0?gf(Ka.bind(null,e)):Mc(Ka.bind(null,e)),df(function(){!(L&6)&&Nn()}),t=null;else{switch(ac(o)){case 1:t=Fl;break;case 4:t=ic;break;case 16:t=ur;break;case 536870912:t=lc;break;default:t=ur}t=Nd(t,kd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function kd(e,n){if(or=-1,rr=0,L&6)throw Error(P(327));var t=e.callbackNode;if(Ct()&&e.callbackNode!==t)return null;var o=cr(e,e===ie?se:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=Er(e,o);else{n=o;var r=L;L|=2;var i=Rd();(ie!==e||se!==n)&&(Xe=null,Rt=X()+500,Wn(e,n));do try{zf();break}catch(s){_d(e,s)}while(!0);Zl(),_r.current=i,L=r,Z!==null?n=0:(ie=null,se=0,n=oe)}if(n!==0){if(n===2&&(r=Vi(e),r!==0&&(o=r,n=Cl(e,r))),n===1)throw t=So,Wn(e,0),fn(e,o),we(e,X()),t;if(n===6)fn(e,o);else{if(r=e.current.alternate,!(o&30)&&!Df(r)&&(n=Er(e,o),n===2&&(i=Vi(e),i!==0&&(o=i,n=Cl(e,i))),n===1))throw t=So,Wn(e,0),fn(e,o),we(e,X()),t;switch(e.finishedWork=r,e.finishedLanes=o,n){case 0:case 1:throw Error(P(345));case 2:An(e,ve,Xe);break;case 3:if(fn(e,o),(o&130023424)===o&&(n=fs+500-X(),10<n)){if(cr(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){ge(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Zi(An.bind(null,e,ve,Xe),n);break}An(e,ve,Xe);break;case 4:if(fn(e,o),(o&4194240)===o)break;for(n=e.eventTimes,r=-1;0<o;){var l=31-Ue(o);i=1<<l,l=n[l],l>r&&(r=l),o&=~i}if(o=r,o=X()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Mf(o/1960))-o,10<o){e.timeoutHandle=Zi(An.bind(null,e,ve,Xe),o);break}An(e,ve,Xe);break;case 5:An(e,ve,Xe);break;default:throw Error(P(329))}}}return we(e,X()),e.callbackNode===t?kd.bind(null,e):null}function Cl(e,n){var t=to;return e.current.memoizedState.isDehydrated&&(Wn(e,n).flags|=256),e=Er(e,n),e!==2&&(n=ve,ve=t,n!==null&&xl(n)),e}function xl(e){ve===null?ve=e:ve.push.apply(ve,e)}function Df(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var r=t[o],i=r.getSnapshot;r=r.value;try{if(!We(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fn(e,n){for(n&=~ps,n&=~Ur,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ue(n),o=1<<t;e[t]=-1,n&=~o}}function Ka(e){if(L&6)throw Error(P(327));Ct();var n=cr(e,0);if(!(n&1))return we(e,X()),null;var t=Er(e,n);if(e.tag!==0&&t===2){var o=Vi(e);o!==0&&(n=o,t=Cl(e,o))}if(t===1)throw t=So,Wn(e,0),fn(e,n),we(e,X()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,An(e,ve,Xe),we(e,X()),null}function gs(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(Rt=X()+500,Or&&Nn())}}function Gn(e){hn!==null&&hn.tag===0&&!(L&6)&&Ct();var n=L;L|=1;var t=Me.transition,o=I;try{if(Me.transition=null,I=1,e)return e()}finally{I=o,Me.transition=t,L=n,!(L&6)&&Nn()}}function hs(){ke=pt.current,B(pt)}function Wn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,cf(t)),Z!==null)for(t=Z.return;t!==null;){var o=t;switch(ql(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&gr();break;case 3:kt(),B(xe),B(pe),is();break;case 5:rs(o);break;case 4:kt();break;case 13:B(V);break;case 19:B(V);break;case 10:es(o.type._context);break;case 22:case 23:hs()}t=t.return}if(ie=e,Z=e=_n(e.current,null),se=ke=n,oe=0,So=null,ps=Ur=Kn=0,ve=to=null,Un!==null){for(n=0;n<Un.length;n++)if(t=Un[n],o=t.interleaved,o!==null){t.interleaved=null;var r=o.next,i=t.pending;if(i!==null){var l=i.next;i.next=r,o.next=l}t.pending=o}Un=null}return e}function _d(e,n){do{var t=Z;try{if(Zl(),er.current=kr,Pr){for(var o=Q.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Pr=!1}if(Yn=0,re=te=Q=null,eo=!1,vo=0,ms.current=null,t===null||t.return===null){oe=1,So=n,Z=null;break}e:{var i=e,l=t.return,s=t,a=n;if(n=se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=La(l);if(v!==null){v.flags&=-257,za(v,l,s,i,n),v.mode&1&&Da(i,u,n),n=v,a=u;var C=n.updateQueue;if(C===null){var S=new Set;S.add(a),n.updateQueue=S}else C.add(a);break e}else{if(!(n&1)){Da(i,u,n),ys();break e}a=Error(P(426))}}else if(H&&s.mode&1){var w=La(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),za(w,l,s,i,n),Xl(_t(a,s));break e}}i=a=_t(a,s),oe!==4&&(oe=2),to===null?to=[i]:to.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=ad(i,a,n);Ea(i,g);break e;case 1:s=a;var p=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Pn===null||!Pn.has(h)))){i.flags|=65536,n&=-n,i.lanes|=n;var x=ud(i,s,n);Ea(i,x);break e}}i=i.return}while(i!==null)}Ed(t)}catch(k){n=k,Z===t&&t!==null&&(Z=t=t.return);continue}break}while(!0)}function Rd(){var e=_r.current;return _r.current=kr,e===null?kr:e}function ys(){(oe===0||oe===3||oe===2)&&(oe=4),ie===null||!(Kn&268435455)&&!(Ur&268435455)||fn(ie,se)}function Er(e,n){var t=L;L|=2;var o=Rd();(ie!==e||se!==n)&&(Xe=null,Wn(e,n));do try{Lf();break}catch(r){_d(e,r)}while(!0);if(Zl(),L=t,_r.current=o,Z!==null)throw Error(P(261));return ie=null,se=0,oe}function Lf(){for(;Z!==null;)jd(Z)}function zf(){for(;Z!==null&&!lp();)jd(Z)}function jd(e){var n=Td(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?Ed(e):Z=n,ms.current=null}function Ed(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=bf(t,n),t!==null){t.flags&=32767,Z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,Z=null;return}}else if(t=Ef(t,n,ke),t!==null){Z=t;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);oe===0&&(oe=5)}function An(e,n,t){var o=I,r=Me.transition;try{Me.transition=null,I=1,Of(e,n,t,o)}finally{Me.transition=r,I=o}return null}function Of(e,n,t,o){do Ct();while(hn!==null);if(L&6)throw Error(P(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(hp(e,i),e===ie&&(Z=ie=null,se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Vo||(Vo=!0,Nd(ur,function(){return Ct(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Me.transition,Me.transition=null;var l=I;I=1;var s=L;L|=4,ms.current=null,Nf(e,t),wd(t,e),tf(Xi),dr=!!qi,Xi=qi=null,e.current=t,$f(t),sp(),L=s,I=l,Me.transition=i}else e.current=t;if(Vo&&(Vo=!1,hn=e,jr=r),i=e.pendingLanes,i===0&&(Pn=null),cp(t.stateNode),we(e,X()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],o(r.value,{componentStack:r.stack,digest:r.digest});if(Rr)throw Rr=!1,e=yl,yl=null,e;return jr&1&&e.tag!==0&&Ct(),i=e.pendingLanes,i&1?e===vl?oo++:(oo=0,vl=e):oo=0,Nn(),null}function Ct(){if(hn!==null){var e=ac(jr),n=Me.transition,t=I;try{if(Me.transition=null,I=16>e?16:e,hn===null)var o=!1;else{if(e=hn,hn=null,jr=0,L&6)throw Error(P(331));var r=L;for(L|=4,E=e.current;E!==null;){var i=E,l=i.child;if(E.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:no(8,d,i)}var m=d.child;if(m!==null)m.return=d,E=m;else for(;E!==null;){d=E;var f=d.sibling,v=d.return;if(Cd(d),d===u){E=null;break}if(f!==null){f.return=v,E=f;break}E=v}}}var C=i.alternate;if(C!==null){var S=C.child;if(S!==null){C.child=null;do{var w=S.sibling;S.sibling=null,S=w}while(S!==null)}}E=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,E=l;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:no(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,E=g;break e}E=i.return}}var p=e.current;for(E=p;E!==null;){l=E;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,E=h;else e:for(l=p;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Fr(9,s)}}catch(k){G(s,s.return,k)}if(s===l){E=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,E=x;break e}E=s.return}}if(L=r,Nn(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot($r,e)}catch{}o=!0}return o}finally{I=t,Me.transition=n}}return!1}function Ga(e,n,t){n=_t(t,n),n=ad(e,n,1),e=wn(e,n,1),n=ge(),e!==null&&(_o(e,1,n),we(e,n))}function G(e,n,t){if(e.tag===3)Ga(e,e,t);else for(;n!==null;){if(n.tag===3){Ga(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pn===null||!Pn.has(o))){e=_t(t,e),e=ud(n,e,1),n=wn(n,e,1),e=ge(),n!==null&&(_o(n,1,e),we(n,e));break}}n=n.return}}function If(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(se&t)===t&&(oe===4||oe===3&&(se&130023424)===se&&500>X()-fs?Wn(e,0):ps|=t),we(e,n)}function bd(e,n){n===0&&(e.mode&1?(n=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):n=1);var t=ge();e=rn(e,n),e!==null&&(_o(e,n,t),we(e,t))}function Af(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),bd(e,t)}function Ff(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(P(314))}o!==null&&o.delete(n),bd(e,t)}var Td;Td=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||xe.current)Ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ce=!1,jf(e,n,t);Ce=!!(e.flags&131072)}else Ce=!1,H&&n.flags&1048576&&Dc(n,vr,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;tr(e,n),e=n.pendingProps;var r=St(n,pe.current);vt(n,t),r=ss(null,n,o,e,r,t);var i=as();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Se(o)?(i=!0,hr(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ts(n),r.updater=Ar,n.stateNode=r,r._reactInternals=n,ll(n,o,e,t),n=ul(null,n,o,!0,i,t)):(n.tag=0,H&&i&&Gl(n),fe(null,n,r,t),n=n.child),n;case 16:o=n.elementType;e:{switch(tr(e,n),e=n.pendingProps,r=o._init,o=r(o._payload),n.type=o,r=n.tag=Bf(o),e=Oe(o,e),r){case 0:n=al(null,n,o,e,t);break e;case 1:n=Aa(null,n,o,e,t);break e;case 11:n=Oa(null,n,o,e,t);break e;case 14:n=Ia(null,n,o,Oe(o.type,e),t);break e}throw Error(P(306,o,""))}return n;case 0:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Oe(o,r),al(e,n,o,r,t);case 1:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Oe(o,r),Aa(e,n,o,r,t);case 3:e:{if(pd(n),e===null)throw Error(P(387));o=n.pendingProps,i=n.memoizedState,r=i.element,Fc(e,n),Sr(n,o,null,t);var l=n.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=_t(Error(P(423)),n),n=Fa(e,n,o,t,r);break e}else if(o!==r){r=_t(Error(P(424)),n),n=Fa(e,n,o,t,r);break e}else for(_e=Sn(n.stateNode.containerInfo.firstChild),Re=n,H=!0,Fe=null,t=Ic(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(wt(),o===r){n=ln(e,n,t);break e}fe(e,n,o,t)}n=n.child}return n;case 5:return Uc(n),e===null&&ol(n),o=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,l=r.children,Ji(o,r)?l=null:i!==null&&Ji(o,i)&&(n.flags|=32),md(e,n),fe(e,n,l,t),n.child;case 6:return e===null&&ol(n),null;case 13:return fd(e,n,t);case 4:return os(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Pt(n,null,o,t):fe(e,n,o,t),n.child;case 11:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Oe(o,r),Oa(e,n,o,r,t);case 7:return fe(e,n,n.pendingProps,t),n.child;case 8:return fe(e,n,n.pendingProps.children,t),n.child;case 12:return fe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,r=n.pendingProps,i=n.memoizedProps,l=r.value,F(Cr,o._currentValue),o._currentValue=l,i!==null)if(We(i.value,l)){if(i.children===r.children&&!xe.current){n=ln(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===o){if(i.tag===1){a=nn(-1,t&-t),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),rl(i.return,t,n),s.lanes|=t;break}a=a.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),rl(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}fe(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,o=n.pendingProps.children,vt(n,t),r=De(r),o=o(r),n.flags|=1,fe(e,n,o,t),n.child;case 14:return o=n.type,r=Oe(o,n.pendingProps),r=Oe(o.type,r),Ia(e,n,o,r,t);case 15:return cd(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Oe(o,r),tr(e,n),n.tag=1,Se(o)?(e=!0,hr(n)):e=!1,vt(n,t),sd(n,o,r),ll(n,o,r,t),ul(null,n,o,!0,e,t);case 19:return gd(e,n,t);case 22:return dd(e,n,t)}throw Error(P(156,n.tag))};function Nd(e,n){return rc(e,n)}function Uf(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,n,t,o){return new Uf(e,n,t,o)}function vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bf(e){if(typeof e=="function")return vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ol)return 11;if(e===Il)return 14}return 2}function _n(e,n){var t=e.alternate;return t===null?(t=$e(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ir(e,n,t,o,r,i){var l=2;if(o=e,typeof e=="function")vs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ot:return Hn(t.children,r,i,n);case zl:l=8,r|=8;break;case Ti:return e=$e(12,t,n,r|2),e.elementType=Ti,e.lanes=i,e;case Ni:return e=$e(13,t,n,r),e.elementType=Ni,e.lanes=i,e;case $i:return e=$e(19,t,n,r),e.elementType=$i,e.lanes=i,e;case Uu:return Br(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Au:l=10;break e;case Fu:l=9;break e;case Ol:l=11;break e;case Il:l=14;break e;case dn:l=16,o=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=$e(l,t,n,r),n.elementType=e,n.type=o,n.lanes=i,n}function Hn(e,n,t,o){return e=$e(7,e,o,n),e.lanes=t,e}function Br(e,n,t,o){return e=$e(22,e,o,n),e.elementType=Uu,e.lanes=t,e.stateNode={isHidden:!1},e}function Pi(e,n,t){return e=$e(6,e,null,n),e.lanes=t,e}function ki(e,n,t){return n=$e(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Wf(e,n,t,o,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cs(e,n,t,o,r,i,l,s,a){return e=new Wf(e,n,t,s,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=$e(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ts(i),e}function Hf(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tt,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function $d(e){if(!e)return En;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Se(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(Se(t))return $c(e,t,n)}return n}function Md(e,n,t,o,r,i,l,s,a){return e=Cs(t,o,!0,e,r,i,l,s,a),e.context=$d(null),t=e.current,o=ge(),r=kn(t),i=nn(o,r),i.callback=n??null,wn(t,i,r),e.current.lanes=r,_o(e,r,o),we(e,o),e}function Wr(e,n,t,o){var r=n.current,i=ge(),l=kn(r);return t=$d(t),n.context===null?n.context=t:n.pendingContext=t,n=nn(i,l),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=wn(r,n,l),e!==null&&(Be(e,r,l,i),Zo(e,r,l)),l}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qa(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function xs(e,n){qa(e,n),(e=e.alternate)&&qa(e,n)}function Vf(){return null}var Dd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ss(e){this._internalRoot=e}Hr.prototype.render=Ss.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));Wr(e,n,null,null)};Hr.prototype.unmount=Ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Gn(function(){Wr(null,e,null,null)}),n[on]=null}};function Hr(e){this._internalRoot=e}Hr.prototype.unstable_scheduleHydration=function(e){if(e){var n=dc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<pn.length&&n!==0&&n<pn[t].priority;t++);pn.splice(t,0,e),t===0&&pc(e)}};function ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xa(){}function Qf(e,n,t,o,r){if(r){if(typeof o=="function"){var i=o;o=function(){var u=br(l);i.call(u)}}var l=Md(n,o,e,0,null,!1,!1,"",Xa);return e._reactRootContainer=l,e[on]=l.current,po(e.nodeType===8?e.parentNode:e),Gn(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var s=o;o=function(){var u=br(a);s.call(u)}}var a=Cs(e,0,!1,null,null,!1,!1,"",Xa);return e._reactRootContainer=a,e[on]=a.current,po(e.nodeType===8?e.parentNode:e),Gn(function(){Wr(n,a,t,o)}),a}function Qr(e,n,t,o,r){var i=t._reactRootContainer;if(i){var l=i;if(typeof r=="function"){var s=r;r=function(){var a=br(l);s.call(a)}}Wr(n,l,e,r)}else l=Qf(t,n,e,r,o);return br(l)}uc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Qt(n.pendingLanes);t!==0&&(Ul(n,t|1),we(n,X()),!(L&6)&&(Rt=X()+500,Nn()))}break;case 13:Gn(function(){var o=rn(e,1);if(o!==null){var r=ge();Be(o,e,1,r)}}),xs(e,1)}};Bl=function(e){if(e.tag===13){var n=rn(e,134217728);if(n!==null){var t=ge();Be(n,e,134217728,t)}xs(e,134217728)}};cc=function(e){if(e.tag===13){var n=kn(e),t=rn(e,n);if(t!==null){var o=ge();Be(t,e,n,o)}xs(e,n)}};dc=function(){return I};mc=function(e,n){var t=I;try{return I=e,n()}finally{I=t}};Bi=function(e,n,t){switch(n){case"input":if(Li(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var r=zr(o);if(!r)throw Error(P(90));Wu(o),Li(o,r)}}}break;case"textarea":Vu(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}};Ju=gs;Zu=Gn;var Yf={usingClientEntryPoint:!1,Events:[jo,st,zr,qu,Xu,gs]},Wt={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kf={bundleType:Wt.bundleType,version:Wt.version,rendererPackageName:Wt.rendererPackageName,rendererConfig:Wt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tc(e),e===null?null:e.stateNode},findFiberByHostInstance:Wt.findFiberByHostInstance||Vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{$r=Qo.inject(Kf),Ge=Qo}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yf;Ee.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ws(n))throw Error(P(200));return Hf(e,n,null,t)};Ee.createRoot=function(e,n){if(!ws(e))throw Error(P(299));var t=!1,o="",r=Dd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Cs(e,1,!1,null,null,t,!1,o,r),e[on]=n.current,po(e.nodeType===8?e.parentNode:e),new Ss(n)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=tc(n),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Gn(e)};Ee.hydrate=function(e,n,t){if(!Vr(n))throw Error(P(200));return Qr(null,e,n,!0,t)};Ee.hydrateRoot=function(e,n,t){if(!ws(e))throw Error(P(405));var o=t!=null&&t.hydratedSources||null,r=!1,i="",l=Dd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Md(n,null,e,1,t??null,r,!1,i,l),e[on]=n.current,po(e),o)for(e=0;e<o.length;e++)t=o[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Hr(n)};Ee.render=function(e,n,t){if(!Vr(n))throw Error(P(200));return Qr(null,e,n,!1,t)};Ee.unmountComponentAtNode=function(e){if(!Vr(e))throw Error(P(40));return e._reactRootContainer?(Gn(function(){Qr(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1};Ee.unstable_batchedUpdates=gs;Ee.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!Vr(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Qr(e,n,t,!1,o)};Ee.version="18.3.1-next-f1338f8080-20240426";function Ld(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ld)}catch(e){console.error(e)}}Ld(),Lu.exports=Ee;var Ie=Lu.exports,zd,Ja=Ie;zd=Ei.createRoot=Ja.createRoot,Ei.hydrateRoot=Ja.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},wo.apply(null,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Za="popstate";function Gf(e){e===void 0&&(e={});function n(r,i){let{pathname:l="/",search:s="",hash:a=""}=Jn(r.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Sl("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){let l=r.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let a=r.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:Tr(i))}function o(r,i){Ps(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Xf(n,t,o,e)}function J(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ps(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function qf(){return Math.random().toString(36).substr(2,8)}function eu(e,n){return{usr:e.state,key:e.key,idx:n}}function Sl(e,n,t,o){return t===void 0&&(t=null),wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Jn(n):n,{state:t,key:n&&n.key||o||qf()})}function Tr(e){let{pathname:n="/",search:t="",hash:o=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Jn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let o=e.indexOf("?");o>=0&&(n.search=e.substr(o),e=e.substr(0,o)),e&&(n.pathname=e)}return n}function Xf(e,n,t,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:i=!1}=o,l=r.history,s=yn.Pop,a=null,u=d();u==null&&(u=0,l.replaceState(wo({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function m(){s=yn.Pop;let w=d(),g=w==null?null:w-u;u=w,a&&a({action:s,location:S.location,delta:g})}function f(w,g){s=yn.Push;let p=Sl(S.location,w,g);t&&t(p,w),u=d()+1;let h=eu(p,u),x=S.createHref(p);try{l.pushState(h,"",x)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;r.location.assign(x)}i&&a&&a({action:s,location:S.location,delta:1})}function v(w,g){s=yn.Replace;let p=Sl(S.location,w,g);t&&t(p,w),u=d();let h=eu(p,u),x=S.createHref(p);l.replaceState(h,"",x),i&&a&&a({action:s,location:S.location,delta:0})}function C(w){let g=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof w=="string"?w:Tr(w);return p=p.replace(/ $/,"%20"),J(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let S={get action(){return s},get location(){return e(r,l)},listen(w){if(a)throw new Error("A history only accepts one active listener");return r.addEventListener(Za,m),a=w,()=>{r.removeEventListener(Za,m),a=null}},createHref(w){return n(r,w)},createURL:C,encodeLocation(w){let g=C(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(w){return l.go(w)}};return S}var nu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(nu||(nu={}));function Jf(e,n,t){return t===void 0&&(t="/"),Zf(e,n,t)}function Zf(e,n,t,o){let r=typeof n=="string"?Jn(n):n,i=ks(r.pathname||"/",t);if(i==null)return null;let l=Od(e);eg(l);let s=null,a=mg(i);for(let u=0;s==null&&u<l.length;++u)s=ug(l[u],a);return s}function Od(e,n,t,o){n===void 0&&(n=[]),t===void 0&&(t=[]),o===void 0&&(o="");let r=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(J(a.relativePath.startsWith(o),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(o.length));let u=Rn([o,a.relativePath]),d=t.concat(a);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Od(i.children,n,d,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:sg(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))r(i,l);else for(let a of Id(i.path))r(i,l,a)}),n}function Id(e){let n=e.split("/");if(n.length===0)return[];let[t,...o]=n,r=t.endsWith("?"),i=t.replace(/\?$/,"");if(o.length===0)return r?[i,""]:[i];let l=Id(o.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),r&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function eg(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:ag(n.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const ng=/^:[\w-]+$/,tg=3,og=2,rg=1,ig=10,lg=-2,tu=e=>e==="*";function sg(e,n){let t=e.split("/"),o=t.length;return t.some(tu)&&(o+=lg),n&&(o+=og),t.filter(r=>!tu(r)).reduce((r,i)=>r+(ng.test(i)?tg:i===""?rg:ig),o)}function ag(e,n){return e.length===n.length&&e.slice(0,-1).every((o,r)=>o===n[r])?e[e.length-1]-n[n.length-1]:0}function ug(e,n,t){let{routesMeta:o}=e,r={},i="/",l=[];for(let s=0;s<o.length;++s){let a=o[s],u=s===o.length-1,d=i==="/"?n:n.slice(i.length)||"/",m=cg({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),f=a.route;if(!m)return null;Object.assign(r,m.params),l.push({params:r,pathname:Rn([i,m.pathname]),pathnameBase:gg(Rn([i,m.pathnameBase])),route:f}),m.pathnameBase!=="/"&&(i=Rn([i,m.pathnameBase]))}return l}function cg(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,o]=dg(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:o.reduce((u,d,m)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let S=s[m]||"";l=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const C=s[m];return v&&!C?u[f]=void 0:u[f]=(C||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function dg(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ps(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(o.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),o]}function mg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ps(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ks(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,o=e.charAt(t);return o&&o!=="/"?null:e.slice(t)||"/"}function pg(e,n){n===void 0&&(n="/");let{pathname:t,search:o="",hash:r=""}=typeof e=="string"?Jn(e):e,i;return t?(t=Ad(t),t.startsWith("/")?i=ou(t.substring(1),"/"):i=ou(t,n)):i=n,{pathname:i,search:hg(o),hash:yg(r)}}function ou(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function _i(e,n,t,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function _s(e,n){let t=fg(e);return n?t.map((o,r)=>r===t.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function Rs(e,n,t,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=Jn(e):(r=wo({},e),J(!r.pathname||!r.pathname.includes("?"),_i("?","pathname","search",r)),J(!r.pathname||!r.pathname.includes("#"),_i("#","pathname","hash",r)),J(!r.search||!r.search.includes("#"),_i("#","search","hash",r)));let i=e===""||r.pathname==="",l=i?"/":r.pathname,s;if(l==null)s=t;else{let m=n.length-1;if(!o&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),m-=1;r.pathname=f.join("/")}s=m>=0?n[m]:"/"}let a=pg(r,s),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Ad=e=>e.replace(/\/\/+/g,"/"),Rn=e=>Ad(e.join("/")),gg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fd=["post","put","patch","delete"];new Set(Fd);const Cg=["get",...Fd];new Set(Cg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Po.apply(null,arguments)}const js=y.createContext(null),xg=y.createContext(null),$n=y.createContext(null),Yr=y.createContext(null),an=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Ud=y.createContext(null);function Sg(e,n){let{relative:t}=n===void 0?{}:n;Nt()||J(!1);let{basename:o,navigator:r}=y.useContext($n),{hash:i,pathname:l,search:s}=Hd(e,{relative:t}),a=l;return o!=="/"&&(a=l==="/"?o:Rn([o,l])),r.createHref({pathname:a,search:s,hash:i})}function Nt(){return y.useContext(Yr)!=null}function $t(){return Nt()||J(!1),y.useContext(Yr).location}function Bd(e){y.useContext($n).static||y.useLayoutEffect(e)}function Wd(){let{isDataRoute:e}=y.useContext(an);return e?Lg():wg()}function wg(){Nt()||J(!1);let e=y.useContext(js),{basename:n,future:t,navigator:o}=y.useContext($n),{matches:r}=y.useContext(an),{pathname:i}=$t(),l=JSON.stringify(_s(r,t.v7_relativeSplatPath)),s=y.useRef(!1);return Bd(()=>{s.current=!0}),y.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){o.go(u);return}let m=Rs(u,JSON.parse(l),i,d.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:Rn([n,m.pathname])),(d.replace?o.replace:o.push)(m,d.state,d)},[n,o,l,i,e])}function Pg(){let{matches:e}=y.useContext(an),n=e[e.length-1];return n?n.params:{}}function Hd(e,n){let{relative:t}=n===void 0?{}:n,{future:o}=y.useContext($n),{matches:r}=y.useContext(an),{pathname:i}=$t(),l=JSON.stringify(_s(r,o.v7_relativeSplatPath));return y.useMemo(()=>Rs(e,JSON.parse(l),i,t==="path"),[e,l,i,t])}function kg(e,n){return _g(e,n)}function _g(e,n,t,o){Nt()||J(!1);let{navigator:r}=y.useContext($n),{matches:i}=y.useContext(an),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=$t(),d;if(n){var m;let w=typeof n=="string"?Jn(n):n;a==="/"||(m=w.pathname)!=null&&m.startsWith(a)||J(!1),d=w}else d=u;let f=d.pathname||"/",v=f;if(a!=="/"){let w=a.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let C=Jf(e,{pathname:v}),S=Tg(C&&C.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:Rn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Rn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,t,o);return n&&S?y.createElement(Yr.Provider,{value:{location:Po({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:yn.Pop}},S):S}function Rg(){let e=Dg(),n=vg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:r},t):null,null)}const jg=y.createElement(Rg,null);class Eg extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(an.Provider,{value:this.props.routeContext},y.createElement(Ud.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bg(e){let{routeContext:n,match:t,children:o}=e,r=y.useContext(js);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(an.Provider,{value:n},o)}function Tg(e,n,t,o){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),o===void 0&&(o=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=o)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,s=(r=t)==null?void 0:r.errors;if(s!=null){let d=l.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);d>=0||J(!1),l=l.slice(0,Math.min(l.length,d+1))}let a=!1,u=-1;if(t&&o&&o.v7_partialHydration)for(let d=0;d<l.length;d++){let m=l[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=d),m.route.id){let{loaderData:f,errors:v}=t,C=m.route.loader&&f[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||C){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,m,f)=>{let v,C=!1,S=null,w=null;t&&(v=s&&m.route.id?s[m.route.id]:void 0,S=m.route.errorElement||jg,a&&(u<0&&f===0?(zg("route-fallback"),C=!0,w=null):u===f&&(C=!0,w=m.route.hydrateFallbackElement||null)));let g=n.concat(l.slice(0,f+1)),p=()=>{let h;return v?h=S:C?h=w:m.route.Component?h=y.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=d,y.createElement(bg,{match:m,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:h})};return t&&(m.route.ErrorBoundary||m.route.errorElement||f===0)?y.createElement(Eg,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Vd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vd||{}),Qd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qd||{});function Ng(e){let n=y.useContext(js);return n||J(!1),n}function $g(e){let n=y.useContext(xg);return n||J(!1),n}function Mg(e){let n=y.useContext(an);return n||J(!1),n}function Yd(e){let n=Mg(),t=n.matches[n.matches.length-1];return t.route.id||J(!1),t.route.id}function Dg(){var e;let n=y.useContext(Ud),t=$g(),o=Yd();return n!==void 0?n:(e=t.errors)==null?void 0:e[o]}function Lg(){let{router:e}=Ng(Vd.UseNavigateStable),n=Yd(Qd.UseNavigateStable),t=y.useRef(!1);return Bd(()=>{t.current=!0}),y.useCallback(function(r,i){i===void 0&&(i={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Po({fromRouteId:n},i)))},[e,n])}const ru={};function zg(e,n,t){ru[e]||(ru[e]=!0)}function Og(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function wl(e){let{to:n,replace:t,state:o,relative:r}=e;Nt()||J(!1);let{future:i,static:l}=y.useContext($n),{matches:s}=y.useContext(an),{pathname:a}=$t(),u=Wd(),d=Rs(n,_s(s,i.v7_relativeSplatPath),a,r==="path"),m=JSON.stringify(d);return y.useEffect(()=>u(JSON.parse(m),{replace:t,state:o,relative:r}),[u,m,r,t,o]),null}function Kt(e){J(!1)}function Ig(e){let{basename:n="/",children:t=null,location:o,navigationType:r=yn.Pop,navigator:i,static:l=!1,future:s}=e;Nt()&&J(!1);let a=n.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:a,navigator:i,static:l,future:Po({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof o=="string"&&(o=Jn(o));let{pathname:d="/",search:m="",hash:f="",state:v=null,key:C="default"}=o,S=y.useMemo(()=>{let w=ks(d,a);return w==null?null:{location:{pathname:w,search:m,hash:f,state:v,key:C},navigationType:r}},[a,d,m,f,v,C,r]);return S==null?null:y.createElement($n.Provider,{value:u},y.createElement(Yr.Provider,{children:t,value:S}))}function Ag(e){let{children:n,location:t}=e;return kg(Pl(n),t)}new Promise(()=>{});function Pl(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(o,r)=>{if(!y.isValidElement(o))return;let i=[...n,r];if(o.type===y.Fragment){t.push.apply(t,Pl(o.props.children,i));return}o.type!==Kt&&J(!1),!o.props.index||!o.props.children||J(!1);let l={id:o.props.id||i.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(l.children=Pl(o.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},kl.apply(null,arguments)}function Fg(e,n){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)!==-1)continue;t[o]=e[o]}return t}function Ug(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Bg(e,n){return e.button===0&&(!n||n==="_self")&&!Ug(e)}const Wg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Hg="6";try{window.__reactRouterVersion=Hg}catch{}const Vg="startTransition",iu=Om[Vg];function Qg(e){let{basename:n,children:t,future:o,window:r}=e,i=y.useRef();i.current==null&&(i.current=Gf({window:r,v5Compat:!0}));let l=i.current,[s,a]=y.useState({action:l.action,location:l.location}),{v7_startTransition:u}=o||{},d=y.useCallback(m=>{u&&iu?iu(()=>a(m)):a(m)},[a,u]);return y.useLayoutEffect(()=>l.listen(d),[l,d]),y.useEffect(()=>Og(o),[o]),y.createElement(Ig,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:l,future:o})}const Yg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_l=y.forwardRef(function(n,t){let{onClick:o,relative:r,reloadDocument:i,replace:l,state:s,target:a,to:u,preventScrollReset:d,viewTransition:m}=n,f=Fg(n,Wg),{basename:v}=y.useContext($n),C,S=!1;if(typeof u=="string"&&Kg.test(u)&&(C=u,Yg))try{let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),k=ks(x.pathname,v);x.origin===h.origin&&k!=null?u=k+x.search+x.hash:S=!0}catch{}let w=Sg(u,{relative:r}),g=Gg(u,{replace:l,state:s,target:a,preventScrollReset:d,relative:r,viewTransition:m});function p(h){o&&o(h),h.defaultPrevented||g(h)}return y.createElement("a",kl({},f,{href:C||w,onClick:S||i?o:p,ref:t,target:a}))});var lu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(lu||(lu={}));var su;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(su||(su={}));function Gg(e,n){let{target:t,replace:o,state:r,preventScrollReset:i,relative:l,viewTransition:s}=n===void 0?{}:n,a=Wd(),u=$t(),d=Hd(e,{relative:l});return y.useCallback(m=>{if(Bg(m,t)){m.preventDefault();let f=o!==void 0?o:Tr(u)===Tr(d);a(e,{replace:f,state:r,preventScrollReset:i,relative:l,viewTransition:s})}},[u,a,d,o,r,t,e,i,l,s])}const qg="https://github.com/frankvane/vane-components";class Xg extends Ye.Component{constructor(){super(...arguments);Ws(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?c.jsxs("div",{className:"crash",role:"alert",children:[c.jsx("h3",{children:"这个页面炸了"}),c.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),c.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Kd(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function Jg({demos:e,pathname:n}){var a;const{groups:t,entries:o,label:r}=e,i=(a=o.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:a.meta.group,[l,s]=y.useState(()=>{var d;const u=(d=t[0])==null?void 0:d.key;return Object.fromEntries(t.map(m=>[m.key,m.key===(i??u)]))});return y.useEffect(()=>{i&&s(u=>u[i]?u:{...u,[i]:!0})},[i]),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-head",children:[c.jsx("span",{children:r}),c.jsxs("code",{children:[o.length," demos"]})]}),t.map(u=>{const d=o.filter(f=>f.meta.group===u.key);if(d.length===0)return null;const m=l[u.key]??!1;return c.jsxs("div",{className:"nav-group",children:[c.jsxs("button",{type:"button",className:`nav-group-head${i===u.key?" is-current":""}`,onClick:()=>s(f=>({...f,[u.key]:!m})),"aria-expanded":m,children:[c.jsx("span",{className:`nav-caret${m?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,c.jsx("code",{children:d.length})]}),m?c.jsx("div",{className:"nav-list",children:d.map(f=>c.jsxs(_l,{to:`/demo/${f.meta.slug}`,className:`nav-sub${n===`/demo/${f.meta.slug}`?" is-active":""}`,children:[c.jsx("em",{"aria-hidden":!0,children:Kd(e,f)}),f.meta.title]},f.meta.slug))}):null]},u.key)})]})}function Zg({demos:e}){const{slug:n}=Pg(),{entries:t,detail:o}=e,r=n?t.find(l=>l.meta.slug===n):void 0;if(!r)return c.jsx(wl,{to:`/demo/${t[0].meta.slug}`,replace:!0});const i=t.indexOf(r)+1;return c.jsx(Ye.Fragment,{children:o(r,i)},r.meta.slug)}function eh({config:e}){var d;const{pathname:n}=$t(),[t,o]=y.useState(!1),[r,i]=y.useState(!1);y.useEffect(()=>o(!1),[n]);const l=y.useCallback(()=>i(m=>!m),[]);y.useEffect(()=>{const m=f=>{const v=f.target,C=v&&(v.tagName==="INPUT"||v.tagName==="TEXTAREA"||v.isContentEditable);f.key==="Escape"&&o(!1),!C&&(f.key==="g"||f.key==="G")&&!f.metaKey&&!f.ctrlKey&&i(S=>!S)};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]);const s=e.demos,a=y.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const m=n.replace(/^\/demo\/?/,""),f=s.entries.find(v=>v.meta.slug===m);return f?`demo ${Kd(s,f)} · ${f.meta.title}`:"demo · 逐项示例"},[n,e,s]),u=y.useMemo(()=>e.nav.map((m,f)=>({...m,no:String(f+1).padStart(2,"0")})),[e.nav]);return c.jsxs("div",{className:`shell${t?" is-nav-open":""}${r?" is-guides":""}`,children:[c.jsx("a",{className:"skip-link",href:"#main",onClick:m=>{m.preventDefault();const f=document.getElementById("main");f==null||f.setAttribute("tabindex","-1"),f==null||f.focus(),f==null||f.scrollIntoView({block:"start"})},children:"跳到内容"}),c.jsxs("aside",{className:"side","aria-label":"站点导航",children:[c.jsxs(_l,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),c.jsxs("span",{children:[c.jsx("strong",{children:e.pkg}),c.jsx("em",{children:e.subtitle})]})]}),c.jsxs("nav",{children:[u.map(m=>c.jsxs(_l,{to:m.to,className:`nav-item${n===m.to?" is-active":""}`,"aria-current":n===m.to?"page":void 0,children:[c.jsx("em",{"aria-hidden":!0,children:m.no}),c.jsx("span",{children:m.label}),m.hint?c.jsx("code",{children:m.hint}):null]},m.to)),c.jsx(Jg,{demos:e.demos,pathname:n})]}),c.jsxs("div",{className:"side-foot",children:[c.jsx("p",{children:e.footer[0]}),c.jsx("p",{className:"muted",children:e.footer[1]})]})]}),c.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>o(!1)}),c.jsxs("div",{className:"main",id:"main",children:[c.jsxs("header",{className:"topbar",children:[c.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>o(m=>!m),children:c.jsx("span",{"aria-hidden":!0})}),c.jsx("span",{className:"crumb",children:a}),c.jsxs("div",{className:"topbar-right",children:[(d=e.stats)==null?void 0:d.map(m=>c.jsxs("span",{className:"topbar-stat",title:m.title,children:[c.jsx("b",{children:m.value})," ",m.label]},m.label)),c.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":r,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[c.jsx("i",{"aria-hidden":!0}),"guides"]}),c.jsx("a",{className:"topbar-link",href:e.sourceUrl??qg,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),c.jsx("div",{className:"guides","aria-hidden":!0}),c.jsx(y.Suspense,{fallback:c.jsx("div",{className:"loading",children:"loading modules…"}),children:c.jsx(Xg,{children:c.jsxs(Ag,{children:[e.routes.map(m=>c.jsx(Kt,{path:m.path,element:m.element},m.path)),c.jsx(Kt,{path:"/demo",element:c.jsx(wl,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),c.jsx(Kt,{path:"/demo/:slug",element:c.jsx(Zg,{demos:e.demos})}),c.jsx(Kt,{path:"*",element:c.jsx(wl,{to:"/",replace:!0})})]})})})]})]})}function nh({config:e}){return c.jsx(Qg,{children:c.jsx(eh,{config:e})})}const th="modulepreload",oh=function(e,n){return new URL(e,n).href},au={},Es=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(t.map(u=>{if(u=oh(u,o),u in au)return;au[u]=!0;const d=u.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(!!o)for(let C=l.length-1;C>=0;C--){const S=l[C];if(S.href===u&&(!d||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${m}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":th,d||(v.as="script"),v.crossOrigin="",v.href=u,a&&v.setAttribute("nonce",a),document.head.appendChild(v),d)return new Promise((C,S)=>{v.addEventListener("load",C),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return r.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})};function rh(){const e=new Map,n=new Map,t=(l,s)=>{const a=e.get(l);if(a)for(const u of[...a])try{u(s)}catch(d){console.warn(`[PluginBus] handler error for event "${l}"`,d)}},o=(l,s)=>{let a=e.get(l);return a||(a=new Set,e.set(l,a)),a.add(s),()=>{a==null||a.delete(s)}},r=(l,s)=>{const a=u=>{s(u),i(l,a)};return o(l,a)},i=(l,s)=>{var a;if(!s){e.delete(l);return}(a=e.get(l))==null||a.delete(s)};return{emit:t,on:o,once:r,off:i,getData:l=>n.get(l),setData:(l,s)=>{const a=n.get(l);n.set(l,s),a!==s&&t(l,s)},deleteData:l=>{const s=n.has(l);n.delete(l),s&&t(l,void 0)},hasData:l=>n.has(l),getAll:()=>{const l={};return n.forEach((s,a)=>{l[a]=s}),l},clear:()=>{e.clear(),n.clear()}}}function Gd(e){const n=new Map(e.map(s=>[s.name,s])),t=[];for(const s of e)for(const a of s.dependencies??[])n.has(a)||t.push(`${s.name} -> ${a}`);const o=[],r=new Set,i=[...e],l=s=>(s.dependencies??[]).every(a=>r.has(a)||!n.has(a));for(;i.length>0;){const s=i.filter(l);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(u=>u.name).join(" <-> ")}`);let a=s[0];for(const u of s)(u.priority??0)>(a.priority??0)&&(a=u);o.push(a),r.add(a.name),i.splice(i.indexOf(a),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),o}async function ih(e,n={}){const{timeout:t=3e3,name:o="anonymous",hook:r="unknown"}=n;if(!t||t<=0)return await e();let i;const l=new Promise((s,a)=>{i=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${o} 的钩子 ${r} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const lh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function sh(e={}){const n=e.logger??console,t=e.sandbox??!0,o=e.timeout??3e3,r=[],i=[],l=new Map,s=()=>Gd([...l.values()].filter(u=>u.enabled!==!1)),a=u=>{l.set(u.name,{...u,enabled:u.enabled??!0}),u.init&&Promise.resolve(u.init()).catch(d=>{n.warn(`[PluginManager] init failed for ${u.name}`,d)})};return{register:a,registerAll:u=>{for(const d of u)a(d)},unregister:u=>{const d=l.get(u);d&&(d.destroy&&Promise.resolve(d.destroy()).catch(m=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,m)}),l.delete(u))},getPlugin:u=>l.get(u),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(u=>u.enabled!==!1),getExecutionOrder:s,enable:u=>{const d=l.get(u);d&&(d.enabled=!0)},disable:u=>{const d=l.get(u);d&&(d.enabled=!1)},has:u=>l.has(u),executeHook:async(u,d,...m)=>{var f,v;for(const C of s()){const S=(f=C.hooks)==null?void 0:f[u];if(typeof S!="function")continue;const w=C.sandbox??t,g=C.timeout??o;let p;try{p=w?await ih(()=>S(d,...m),{timeout:g,name:C.name,hook:String(u)}):await S(d,...m)}catch(h){if(r.push({plugin:C.name,hook:String(u),error:h}),n.warn(`[PluginManager] hook ${String(u)} failed in ${C.name}`,h),(v=e.onError)==null||v.call(e,C.name,String(u),h),u==="onError")break;continue}if(lh.has(String(u))&&typeof p=="function"){i.push(p);continue}if(p===!1)return!1;if(p!==void 0&&p!==!0)return p}},clear:()=>{const u=i.splice(0);for(const d of u.reverse())try{d()}catch(m){n.warn("[PluginManager] cleanup failed",m)}for(const d of l.values())d.destroy&&Promise.resolve(d.destroy()).catch(m=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,m)});l.clear()},getErrors:()=>[...r]}}var ah=Object.defineProperty,uh=(e,n,t)=>n in e?ah(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ch=(e,n,t)=>uh(e,n+"",t);class dh extends Ye.Component{constructor(){super(...arguments),ch(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var o,r;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(r=(o=this.props).onError)==null||r.call(o,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let Yo=null;function mh(e=!1){if(Yo&&!e)return Yo;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(r),l=/Mobile|Android|iPhone/i.test(r),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Yo={type:i?"tablet":l?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:n,viewportHeight:t,isTouchDevice:s,isRetina:o>=2},Yo}function uu(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>Object.is(e[r],n[r]))}function ph(e){const{plugins:n,props:t,data:o,initialState:r,containerRef:i,enableDebug:l=!1,managerOptions:s,extendContext:a}=e,u=y.useRef(null),d=i??u,m=y.useRef(null);m.current||(m.current=sh(s));const f=m.current,v=y.useRef(null);v.current||(v.current=rh());const C=v.current,S=y.useRef(new Map),[w,g]=y.useState(r??{}),[,p]=y.useState(0),h=y.useCallback(()=>p(T=>T+1),[]),x=y.useMemo(()=>mh(),[]),k=y.useRef(n),_=k.current;(_.length!==n.length||n.some((T,N)=>T!==_[N]))&&(k.current=n);const R=k.current,b=R.map(T=>T.name).join("|");y.useLayoutEffect(()=>{f.clear(),f.registerAll(R),l&&console.debug("[vane/plugin-core] plugins registered:",b)},[R]),y.useLayoutEffect(()=>()=>{f.executeHook("onUnmount",M.current),f.clear()},[f]);const z=y.useMemo(()=>Gd(R),[R]),M=y.useRef(null),$=y.useRef(t);uu($.current,t)||($.current=t);const A=$.current,ue=y.useRef(o);uu(ue.current,o)||(ue.current=o);const Zn=ue.current,Mn=y.useMemo(()=>{const T={props:A,data:Zn,bus:C,refs:{container:d,getContainer:()=>d.current},state:w,setState:N=>g(O=>({...O,...N})),shared:S.current,deviceInfo:x,forceUpdate:h,getSize:()=>{const N=d.current;return N?{width:N.offsetWidth,height:N.offsetHeight}:{width:0,height:0}},logger:console};return a?a(T):T},[A,Zn,w,x,C,a]);M.current=Mn;const Dt=y.useCallback(T=>{var O,W;let N=T;for(const He of z){const Pe=(O=He.hooks)==null?void 0:O.transformProps;if(typeof Pe=="function")try{N=Pe(N)}catch(Dn){(((W=M.current)==null?void 0:W.logger)??console).warn(`[plugin-core] ${He.name}.transformProps 执行失败，已跳过`,Dn)}}return N},[z]),Lt=y.useCallback(T=>{var O,W;let N=T;for(const He of z){const Pe=(O=He.hooks)==null?void 0:O.transformData;if(typeof Pe=="function")try{N=Pe(M.current,N)}catch(Dn){(((W=M.current)==null?void 0:W.logger)??console).warn(`[plugin-core] ${He.name}.transformData 执行失败，已跳过`,Dn)}}return N},[z]),j=y.useCallback((T,...N)=>f.executeHook(T,M.current,...N),[f]);return{manager:f,bus:C,context:Mn,state:w,setState:Mn.setState,execute:j,transformProps:Dt,transformData:Lt,orderedPlugins:z}}y.createContext(null);const qd=y.createContext(null);function fh({orderedPlugins:e,context:n,children:t}){const o=y.useMemo(()=>({orderedPlugins:e,context:n}),[e,n]);return c.jsx(qd.Provider,{value:o,children:t})}const cu=new WeakMap;function gh(e,n){let t=cu.get(e);t||(t=new Map,cu.set(e,t));let o=t.get(n);return o||(o=[...e].filter(r=>typeof r.hooks[n]=="function").sort((r,i)=>{var l,s;return(((l=r.config)==null?void 0:l.order)??0)-(((s=i.config)==null?void 0:s.order)??0)||(i.priority??0)-(r.priority??0)}),t.set(n,o)),o}function hh(e,n,t,o){return gh(e,t).map((r,i)=>{if(r.enabled===!1)return null;try{const l=r.hooks[t],s=o!==void 0?l(n,o):l(n);return s==null?null:c.jsx(dh,{children:s},`comment-slot-${r.name}-${i}`)}catch(l){return console.warn(`[vane-comment] 插件 ${r.name} 的 ${t} 渲染失败`,l),null}}).filter(Boolean)}function jt(e,n){const t=y.useContext(qd);return t?hh(t.orderedPlugins,t.context,e,n):[]}function bs(e){return!e||e.length===0?null:e.map((n,t)=>{switch(n.type){case"text":return c.jsx("span",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:n.value},t);case"emoji":return c.jsx("span",{style:{fontSize:"1.1em",verticalAlign:"middle"},children:n.value},t);case"image":return c.jsx("img",{src:n.url,alt:n.alt??"",style:{maxWidth:120,maxHeight:120,borderRadius:6,margin:"2px 4px 2px 0",verticalAlign:"middle",objectFit:"cover"}},t);case"mention":return c.jsx("span",{style:{color:"#1565c0",fontWeight:500},children:`@${n.name}`},t);default:return null}})}function Xd(e,n=Date.now()){const t=Math.max(0,n-e),o=Math.floor(t/1e3);if(o<60)return"刚刚";const r=Math.floor(o/60);if(r<60)return`${r} 分钟前`;const i=Math.floor(r/60);if(i<24)return`${i} 小时前`;const l=Math.floor(i/24);if(l<30)return`${l} 天前`;const s=Math.floor(l/30);return s<12?`${s} 个月前`:`${Math.floor(s/12)} 年前`}const K=y.forwardRef(function(n,t){const{comments:o,data:r,containerClassName:i,containerStyle:l,containerRefExternal:s,emptyText:a="还没有评论，快来抢沙发~",loading:u,onLoadMore:d}=n,m=y.useRef(null),f=s||m,[,v]=y.useState(0),C=y.useCallback(()=>v(h=>h+1),[]);y.useEffect(()=>{if(typeof window>"u")return;const h=window.setInterval(()=>{typeof document<"u"&&document.visibilityState==="hidden"||C()},6e4);return()=>window.clearInterval(h)},[C]);const S=jt("renderToolbar"),w=jt("renderFooter"),g=o??r??[];y.useImperativeHandle(t,()=>({getContainer:()=>f.current,forceUpdate:C,getSize:()=>{const h=f.current;return h?{width:h.offsetWidth,height:h.offsetHeight}:{width:0,height:0}}}),[C]);const p=typeof d=="function"&&!u;return c.jsxs("div",{ref:f,className:`vc-comment ${i||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",fontFamily:"inherit",padding:16,...l},children:[S.length>0&&c.jsx("div",{className:"vc-toolbar",style:{marginBottom:8},children:S}),g.length===0&&!u?c.jsx("div",{className:"vc-empty",style:{padding:"24px 0",textAlign:"center",color:"#6b6b6b"},children:a}):c.jsx("div",{className:"vc-list",style:{display:"flex",flexDirection:"column",gap:14},children:g.map(h=>c.jsx(yh,{comment:h,depth:0},h.id))}),u&&c.jsx("div",{className:"vc-loading",style:{padding:"12px 0",textAlign:"center",color:"#6b6b6b"},children:"加载中…"}),p&&c.jsx("div",{style:{padding:"12px 0",textAlign:"center"},children:c.jsx("button",{type:"button",onClick:()=>d==null?void 0:d(),style:{border:"1px solid rgba(128,128,128,0.25)",borderRadius:999,padding:"6px 18px",background:"transparent",color:"inherit",cursor:"pointer"},children:"加载更多"})}),w.length>0&&c.jsx("div",{className:"vc-footer",style:{marginTop:12},children:w})]})});K.displayName="CommentCore";function yh({comment:e,depth:n}){var s;const t=jt("renderCommentActions",e),o=jt("renderNested",e),r=e.status??"normal",i=r==="deleted",l=r==="pending";return c.jsxs("div",{className:"vc-item","data-testid":"comment-item",style:{display:"flex",gap:10,paddingLeft:n>0?12:0,borderLeft:n>0?"2px solid rgba(128,128,128,0.15)":void 0},children:[c.jsx(vh,{author:e.author}),c.jsxs("div",{className:"vc-item-body",style:{flex:1,minWidth:0},children:[c.jsxs("div",{className:"vc-meta",style:{display:"flex",alignItems:"center",gap:6,fontSize:13},children:[c.jsx("span",{style:{fontWeight:600},children:e.author.name}),e.author.verified&&c.jsx("span",{title:"认证用户",style:{color:"#1565c0",fontSize:12},children:"✓"}),e.author.badge&&c.jsx("span",{style:{fontSize:11,padding:"1px 6px",borderRadius:4,background:"rgba(128,128,128,0.18)"},children:e.author.badge}),e.pinned&&c.jsx("span",{style:{fontSize:11,padding:"1px 6px",borderRadius:4,color:"#b35c00",border:"1px solid rgba(255,143,0,0.4)"},children:"置顶"}),c.jsx("span",{style:{color:"#6b6b6b",marginLeft:"auto",fontSize:12},children:Xd(e.createdAt)})]}),i?c.jsx("div",{style:{color:"#6b6b6b",fontSize:13,fontStyle:"italic",marginTop:2},children:"该评论已删除"}):l?c.jsx("div",{style:{color:"#6b6b6b",fontSize:13,fontStyle:"italic",marginTop:2},children:"评论审核中"}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"vc-content",style:{fontSize:14,marginTop:2,lineHeight:1.5},children:(s=e.content)!=null&&s.length?bs(e.content):e.text}),e.images&&e.images.length>0&&c.jsx("div",{className:"vc-images",style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:4},children:e.images.map((a,u)=>c.jsx("img",{src:a.url,alt:a.alt??"",style:{width:88,height:88,objectFit:"cover",borderRadius:6}},u))}),t.length>0&&c.jsx("div",{className:"vc-actions",style:{display:"flex",flexWrap:"wrap",alignItems:"center",columnGap:14,rowGap:6,marginTop:6},children:t}),o.length>0&&c.jsx("div",{className:"vc-nested",style:{marginTop:10},children:o})]})]})]})}function vh({author:e}){return e.avatar?c.jsx("img",{src:e.avatar,alt:e.name,style:{width:36,height:36,borderRadius:"50%",objectFit:"cover",flexShrink:0}}):c.jsx("div",{style:{width:36,height:36,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(128,128,128,0.22)",fontWeight:600},children:e.name.slice(0,1).toUpperCase()})}function Ch(e,n){if(!e||n==="custom")return e??[];const t=[...e];switch(n){case"newest":t.sort((o,r)=>r.createdAt-o.createdAt);break;case"oldest":t.sort((o,r)=>o.createdAt-r.createdAt);break;case"mostLiked":t.sort((o,r)=>r.likeCount-o.likeCount||r.createdAt-o.createdAt);break;case"hottest":t.sort((o,r)=>(r.hotScore??0)-(o.hotScore??0)||r.createdAt-o.createdAt);break}return t}const xh={newest:"最新",oldest:"最早",hottest:"最热",mostLiked:"最赞",custom:"默认"};function q(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:o,enableDebug:r=!1}=t,i=y.forwardRef((l,s)=>{const a=y.useRef(null),u=y.useCallback(x=>{var _;const k=((_=x.state)==null?void 0:_.sortMode)??l.defaultSortMode??"custom";return{...x,sortMode:k,setSortMode:R=>x.setState({sortMode:R})}},[l]),d=ph({plugins:o,props:l,data:l.comments??l.data,containerRef:a,extendContext:u,enableDebug:r}),m=y.useRef(d.context);m.current=d.context;const f=y.useCallback((x,...k)=>d.execute(x,...k),[d.manager]),v=d.transformProps(l);y.useEffect(()=>{f("onMount")},[f]);const C=y.useRef(l);y.useEffect(()=>{const x=C.current;x!==l&&(C.current=l,f("onPropsChange",x,l))},[l,f]);const S=d.context.data,w=d.state,g=y.useMemo(()=>{const x=S??[],k=d.transformData(x)??x,_=d.context.sortMode??l.defaultSortMode??"custom";return Ch(k,_)},[S,w,d.transformData,l.defaultSortMode,l.comments,l.data]),p={...v,containerRefExternal:a,debug:v.debug??r,data:g,comments:g,onMount:()=>{var x;(x=v.onMount)==null||x.call(v)},onUnmount:()=>{var x;(x=v.onUnmount)==null||x.call(v)}},h=y.useMemo(()=>({...d.context,comments:g,data:g}),[d.context,g]);return c.jsx(fh,{orderedPlugins:d.orderedPlugins,context:h,children:c.jsx(e,{ref:s,...p})})});return i.displayName="WithPlugins(CommentCore)",i}const zn=Date.now(),On=60*1e3;function Mt(e,n){return`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><rect width="36" height="36" rx="18" fill="${n}"/><text x="18" y="23" font-size="16" font-family="sans-serif" fill="#fff" text-anchor="middle">${e}</text></svg>`)}`}function Sh(e){return`https://picsum.photos/seed/${e}/200/200`}const ee=[{id:"u-rachel",name:"Rachel"},{id:"u-monica",name:"Monica"},{id:"u-phoebe",name:"Phoebe"}],wh={id:"u-rachel",name:"Rachel",avatar:Mt("R","#d4380d"),verified:!0},du={id:"u-monica",name:"Monica",avatar:Mt("M","#2b7de9")},Ph={id:"u-phoebe",name:"Phoebe",avatar:Mt("P","#389e0d")},kh={id:"u-chandler",name:"Chandler",avatar:Mt("C","#722ed1")},_h={id:"u-joey",name:"Joey",avatar:Mt("J","#eb2f96")},Rh={id:"u-ross",name:"Ross",avatar:Mt("R","#fa8c16"),badge:"UP主"},jh=[{id:"c-1",author:Rh,content:[{type:"text",value:"这期视频的转场也太丝滑了吧，"},{type:"emoji",value:"🔥"},{type:"text",value:" 求个工程文件链接～"}],createdAt:zn-28*On,likeCount:128,liked:!1,pinned:!0,replyCount:2,replies:[{id:"c-1-r1",author:wh,content:[{type:"text",value:"同求，蹲一个工程文件 🤝"}],createdAt:zn-20*On,likeCount:12,liked:!1},{id:"c-1-r2",author:du,content:[{type:"text",value:"工程文件已放评论置顶啦 "},{type:"mention",userId:"u-ross",name:"Ross"}],createdAt:zn-12*On,likeCount:31,liked:!0}]},{id:"c-2",author:kh,content:[{type:"text",value:"前排！这个 BGM 叫什么名字？循环了一整天了"}],createdAt:zn-22*On,likeCount:64,liked:!0,images:[{url:Sh("scene-a"),alt:"名场面截图"}]},{id:"c-3",author:Ph,content:[{type:"text",value:"刚发完评论就有人点赞，社交平台的即时反馈真的上头 "},{type:"emoji",value:"😂"}],createdAt:zn-9*On,likeCount:7,liked:!1,status:"pending"},{id:"c-4",author:_h,content:[{type:"text",value:"这条评论已经被我手滑删掉了"}],createdAt:zn-5*On,likeCount:0,liked:!1,status:"deleted"},{id:"c-5",author:du,content:[{type:"text",value:"电商场景实测：这个 SKU 的评论区排序切到「最热」之后，"},{type:"text",value:"优质长评一下子就浮上来了，转化应该会好不少。"}],createdAt:zn-3*On,likeCount:42,liked:!1}];function ne(){return JSON.parse(JSON.stringify(jh))}const Eh={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},bh={slug:"quickstart",title:"最小评论列表",group:"basic",capability:"core-list",intro:"5 行装配出能跑的评论列表：Core 只做数据驱动渲染，能力靠插件增量叠加。",why:"先跑通内核，再按需叠点赞 / 排序 / 楼中楼 / 富编辑——评论区的长尾需求多，全塞进内核只会越来越难改。",plugs:[],props:[],stageHeight:420};function Th({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useCallback(i=>{t(l=>l.map(s=>s.id===i?{...s,liked:!s.liked,likeCount:(s.likeCount??0)+(s.liked?-1:1)}:s)),e(`点赞 ${i}`)},[e]),r=y.useMemo(()=>q(K,[]),[]);return c.jsxs("div",{style:Eh,children:[c.jsx(r,{comments:n,onLike:o,onReply:(i,l)=>e("回复（需叠 ThreadPlugin）"),onSubmit:i=>e("发布（需叠 RichComposerPlugin）"),onReport:i=>e(`举报 ${i}`),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"这是裸 Core：列表 / 置顶 / 删除态 / 审核态都内置，但点赞、排序、楼中楼、评论框要叠插件才有。"})]})}const Nh=Object.freeze(Object.defineProperty({__proto__:null,default:Th,meta:bh},Symbol.toStringTag,{value:"Module"})),$h="LikePlugin",Mh="点赞：每条评论操作行渲染点赞按钮与计数，点击回调 onLike；乐观更新由消费方完成。本地爆裂动画（不依赖全局 overlay 槽）。",Dh="0.1.0",Lh=["ui","互动","点赞"],zh=[{name:"showCount",type:"boolean",default:"true",description:"是否展示点赞数，false 时只显示爱心图标"}],Oh=`const Comment = withCommentPlugins(CommentCore, [
  createLikePlugin(),
]);`,Ih=["爱心图标 + 数字计数","点击局部缩放爆裂动画","回调 onLike(id, nextLiked)，状态真相在消费方数据","楼中楼嵌套回复同样经同一槽获得点赞按钮"],Ah=["视频 / 社交 / 电商评论区点赞","任意需要「赞」互动的评论场景"],Fh=["点赞态不做组件内缓存，消费方更新 comments 数据回流后即时反映。"],Jd={name:$h,description:Mh,since:Dh,tags:Lh,config:zh,example:Oh,features:Ih,useCases:Ah,notes:Fh};function Uh({comment:e,onLike:n,showCount:t=!0}){const[o,r]=y.useState(!1),i=y.useRef(null),l=!!e.liked,s=e.likeCount;y.useEffect(()=>()=>{i.current!==null&&window.clearTimeout(i.current)},[]);const a=()=>{const u=!l;n==null||n(e.id,u),u&&(r(!0),i.current!==null&&window.clearTimeout(i.current),i.current=window.setTimeout(()=>{i.current=null,r(!1)},450))};return c.jsxs("button",{type:"button",onClick:a,"aria-pressed":l,"data-testid":"comment-like",style:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"transparent",color:l?"#c62828":"inherit",opacity:l?1:.7,cursor:"pointer",fontSize:13,padding:0,flexShrink:0},children:[c.jsx("span",{style:{display:"inline-block",transform:o?"scale(1.4)":"scale(1)",transition:"transform 0.25s ease"},children:l?"❤️":"🤍"}),t&&(s>0?s:"赞")]})}function Bh(e={}){return{name:"LikePlugin",version:"0.1.0",description:"点赞：每条评论的操作行渲染点赞按钮与计数，点击回调 onLike。",priority:40,enabled:!0,hooks:{renderCommentActions:(n,t)=>c.jsx(Uh,{comment:t,showCount:e.showCount,onLike:n.props.onLike})}}}const Kr=Object.assign(Bh,{meta:Jd}),Wh={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Hh={slug:"like",title:"点赞",group:"plugin",plugin:"LikePlugin",intro:"操作行加一个点赞按钮，本地计数 + 缩放回弹动效，事件经 onLike 回调。",why:"点赞是评论区最高频的互动；做成插件后，不要点赞的场景（如内部审核台）不装即可。",plugs:[{fn:"createLikePlugin",cfg:"showCount: {{showCount}}",why:"操作行点赞按钮；showCount 控制是否显示计数"}],props:[],controls:[{key:"showCount",label:"显示计数",kind:"switch",init:!0}],stageHeight:420};function Vh({cfg:e,log:n}){const[t,o]=y.useState(()=>ne()),r=!!e.showCount,i=y.useCallback(s=>{o(a=>a.map(u=>u.id===s?{...u,liked:!u.liked,likeCount:(u.likeCount??0)+(u.liked?-1:1)}:u)),n(`点赞 ${s}`)},[n]),l=y.useMemo(()=>q(K,[Kr({showCount:r})]),[r]);return c.jsxs("div",{style:Wh,children:[c.jsx(l,{comments:t,onLike:i,onReply:(s,a)=>n("回复（需叠 ThreadPlugin）"),onSubmit:s=>n("发布（需叠 RichComposerPlugin）"),onReport:s=>n(`举报 ${s}`),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有点赞被装上：试试点操作行的 ♥，计数和动效都会变，事件写进右侧日志。"})]})}const Qh=Object.freeze(Object.defineProperty({__proto__:null,default:Vh,meta:Hh},Symbol.toStringTag,{value:"Module"})),Yh="SortPlugin",Kh="排序：顶栏渲染排序栏（最新/最早/最热/最赞），切换 sortMode 经内核 state 驱动列表重排。实际重排由内核 extendContext 的 sortComments 完成。",Gh="0.1.0",qh=["ui","排序","列表"],Xh=[{name:"modes",type:'"newest" | "oldest" | "hottest" | "mostLiked"[]',default:'["newest","hottest","mostLiked"]',description:"排序栏展示的模式按钮"},{name:"defaultMode",type:"SortMode",default:'"newest"',description:"默认排序（仅在消费方未传 defaultSortMode 时播种）"}],Jh=`const Comment = withCommentPlugins(CommentCore, [
  createSortPlugin({ modes: ["hottest","newest"] }),
]);`,Zh=["最新 / 最早 / 最热 / 最赞 四种模式","点击切换即时重排（经内核 state，非本地数组）","默认模式播种（尊重消费方 defaultSortMode）","切 mode 同时回调 onSortChange"],ey=["视频评论区（默认最热）","社交评论区（全排序）","电商评论区（最新 / 最赞）"],ny=["排序是纯视图变换，由内核 sortComments 幂等完成，对已排数据再排不抖动。"],Zd={name:Yh,description:Kh,since:Gh,tags:qh,config:Xh,example:Jh,features:Zh,useCases:ey,notes:ny};function ty({context:e,modes:n}){const t=e.sortMode;return c.jsx("div",{style:{display:"inline-flex",gap:4},children:n.map(o=>{const r=t===o;return c.jsx("button",{type:"button",onClick:()=>{var i,l;e.setSortMode(o),(l=(i=e.props).onSortChange)==null||l.call(i,o)},style:{border:"none",borderRadius:999,padding:"4px 12px",fontSize:13,cursor:"pointer",background:r?"rgba(29,161,242,0.16)":"transparent",color:r?"#1565c0":"inherit",opacity:r?1:.7},children:xh[o]},o)})})}function oy(e={}){const n=e.modes??["newest","hottest","mostLiked"],t=e.defaultMode??"newest";return{name:"SortPlugin",version:"0.1.0",description:"排序：顶栏渲染排序栏，切换 sortMode 驱动列表重排。",priority:20,enabled:!0,hooks:{onMount:o=>{o.state.sortMode===void 0&&o.props.defaultSortMode===void 0&&o.setState({sortMode:t})},renderToolbar:o=>c.jsx(ty,{context:o,modes:n})}}}const Gr=Object.assign(oy,{meta:Zd}),ry={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},iy=[{label:"最新",value:"newest"},{label:"最早",value:"oldest"},{label:"最热",value:"hottest"},{label:"点赞最多",value:"mostLiked"}],ly={slug:"sort",title:"排序",group:"plugin",plugin:"SortPlugin",intro:"顶栏排序条：最新 / 最早 / 最热 / 点赞最多，切换即重排，纯函数排序不碰 DOM。",why:"视频和电商都重度依赖排序（最热优先 vs 最新优先），但内部后台只想看最新——做成插件按需装配。",plugs:[{fn:"createSortPlugin",why:"顶栏排序条；默认三种模式，可传 modes 与 defaultMode 裁剪"}],props:['defaultSortMode="newest"'],controls:[{key:"mode",label:"初始排序",kind:"select",init:"newest",options:iy}],stageHeight:420};function sy({cfg:e,log:n}){const[t,o]=y.useState(()=>ne()),r=e.mode||"newest",i=y.useCallback(s=>{o(a=>a.map(u=>u.id===s?{...u,liked:!u.liked,likeCount:(u.likeCount??0)+(u.liked?-1:1)}:u))},[]),l=y.useMemo(()=>q(K,[Gr()]),[]);return c.jsxs("div",{style:ry,children:[c.jsx(l,{comments:t,defaultSortMode:r,onLike:i,onReply:(s,a)=>n("回复（需叠 ThreadPlugin）"),onSubmit:s=>n("发布（需叠 RichComposerPlugin）"),onReport:s=>n(`举报 ${s}`),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"顶栏多了排序条：点「最热」后点赞多的评论会浮上来。初始排序由控件决定。"})]})}const ay=Object.freeze(Object.defineProperty({__proto__:null,default:sy,meta:ly},Symbol.toStringTag,{value:"Module"})),uy="ThreadPlugin",cy="楼中楼：顶评论的 renderNested 槽递归渲染嵌套回复，maxDepth 限深折叠 + 展开/收起；操作行的「回复」经 renderCommentActions 唤起内联回复框。嵌套回复同样走同一组槽，子回复也能点赞与继续回复。",dy="0.1.0",my=["ui","楼中楼","回复","嵌套"],py=[{name:"maxDepth",type:"number",default:"3",description:"最大嵌套深度，超过则不再渲染更深的楼中楼"},{name:"defaultExpanded",type:"boolean",default:"true",description:"是否默认展开楼中楼"},{name:"showReply",type:"boolean",default:"true",description:"是否在操作行渲染内联回复框触发"}],fy=`const Comment = withCommentPlugins(CommentCore, [
  createThreadPlugin({ maxDepth: 3 }),
]);`,gy=["递归楼中楼（限深折叠 + 展开/收起）","内联回复框，提交回调 onReply(parentId, content)","嵌套回复复用同一 actions/nested 槽（子回复可点赞 / 继续回复）","replyCount 与 replies 不一致时提示「展开 N 条回复」（懒加载场景）"],hy=["社交评论区楼中楼","视频 / 电商评论区的多级互动"],yy=["限制深度的渲染交由 ThreadView 递归完成，maxDepth 控制总层级。"],em={name:uy,description:cy,since:dy,tags:my,config:py,example:fy,features:gy,useCases:hy,notes:yy};function vy({author:e}){return e.avatar?c.jsx("img",{src:e.avatar,alt:e.name,style:{width:28,height:28,borderRadius:"50%",objectFit:"cover",flexShrink:0}}):c.jsx("div",{style:{width:28,height:28,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(128,128,128,0.22)",fontSize:12,fontWeight:600},children:e.name.slice(0,1).toUpperCase()})}const Cy=new Set,Ts=y.createContext({level:0,path:Cy});function xy({comment:e,maxDepth:n,defaultExpanded:t,showReply:o}){const r=y.useContext(Ts);if(r.path.has(e.id)||r.level>=n)return null;const i=new Set(r.path);return i.add(e.id),c.jsx(wy,{comment:e,depth:r.level+1,ancestors:i,maxDepth:n,defaultExpanded:t,showReply:o})}function Sy({reply:e,maxDepth:n,showReply:t}){var a;const o=y.useContext(Ts),r=jt("renderCommentActions",e),i=jt("renderNested",e),l=o.level<n&&!o.path.has(e.id)?i:[],s=(e.status??"normal")==="deleted";return c.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},"data-testid":"comment-item",children:[c.jsx(vy,{author:e.author}),c.jsxs("div",{style:{flex:1,minWidth:0},children:[c.jsxs("div",{style:{fontSize:13},children:[c.jsx("span",{style:{fontWeight:600},children:e.author.name}),e.author.badge&&c.jsx("span",{style:{fontSize:11,opacity:.7,marginLeft:4},children:e.author.badge}),c.jsx("span",{style:{color:"#6b6b6b",marginLeft:6,fontSize:12},children:Xd(e.createdAt)})]}),c.jsx("div",{style:{fontSize:13,lineHeight:1.5,marginTop:1},children:s?c.jsx("span",{style:{color:"#6b6b6b",fontStyle:"italic"},children:"该评论已删除"}):(a=e.content)!=null&&a.length?bs(e.content):e.text}),r.length>0&&t&&c.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",columnGap:14,rowGap:4,marginTop:4},children:r}),l.length>0&&c.jsx("div",{style:{borderLeft:"2px solid rgba(128,128,128,0.15)",paddingLeft:10},children:l})]})]})}function wy({comment:e,depth:n,ancestors:t,maxDepth:o,defaultExpanded:r,showReply:i}){const l=e.replies??[],s=e.replyCount??l.length,[a,u]=y.useState(r&&l.length>0);return l.length===0&&s===0?null:c.jsx("div",{style:{marginTop:8},children:a?c.jsx("div",{children:l.map(d=>c.jsx(Ts.Provider,{value:{level:n,path:t},children:c.jsx(Sy,{reply:d,maxDepth:o,showReply:i})},d.id))}):c.jsx("button",{type:"button",onClick:()=>u(!0),style:{border:"none",background:"transparent",color:"#1565c0",cursor:"pointer",fontSize:13,padding:0},children:s>l.length?`展开 ${s} 条回复`:`展开 ${l.length} 条回复`})})}function Py({parentId:e,onSubmit:n,onCancel:t}){const[o,r]=y.useState(""),i=o.trim().length===0;return c.jsxs("div",{style:{marginTop:6,display:"flex",flexDirection:"column",gap:6},children:[c.jsx("textarea",{value:o,onChange:l=>r(l.target.value),placeholder:"回复点什么…",rows:2,style:{width:"100%",resize:"vertical",borderRadius:6,border:"1px solid rgba(128,128,128,0.25)",padding:6,fontSize:13,fontFamily:"inherit",background:"transparent",color:"inherit",boxSizing:"border-box"}}),c.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[c.jsx("button",{type:"button",onClick:t,style:mu(!1),children:"取消"}),c.jsx("button",{type:"button",disabled:i,onClick:()=>{n(e,[{type:"text",value:o.trim()}]),r("")},style:mu(!0),children:"回复"})]})]})}function mu(e){return{border:"none",borderRadius:6,padding:"4px 14px",fontSize:13,cursor:"pointer",background:e?"#1565c0":"rgba(128,128,128,0.18)",color:e?"#fff":"inherit"}}function ky({comment:e,context:n,showReply:t}){const[o,r]=y.useState(!1);return t?c.jsxs("span",{style:{display:"inline-flex",flexDirection:"column",flexShrink:0,...o?{flexBasis:"100%",maxWidth:"100%"}:{}},children:[c.jsx("button",{type:"button",onClick:()=>r(i=>!i),style:{border:"none",background:"transparent",color:"inherit",opacity:.7,cursor:"pointer",fontSize:13,padding:0,flexShrink:0},children:"回复"}),o&&c.jsx(Py,{parentId:e.id,onCancel:()=>r(!1),onSubmit:(i,l)=>{var s,a;return(a=(s=n.props).onReply)==null?void 0:a.call(s,i,l)}})]}):null}function _y(e={}){const n=e.maxDepth??3,t=e.defaultExpanded??!0,o=e.showReply??!0;return{name:"ThreadPlugin",version:"0.1.0",description:"楼中楼：递归渲染嵌套回复（限深折叠 + 展开），操作行内联回复。",priority:30,enabled:!0,hooks:{renderNested:(r,i)=>i.replies&&i.replies.length>0?c.jsx(xy,{comment:i,maxDepth:n,defaultExpanded:t,showReply:o}):null,renderCommentActions:(r,i)=>c.jsx(ky,{comment:i,context:r,showReply:o})}}}const qr=Object.assign(_y,{meta:em}),Ry={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},jy={id:"u-me",name:"我",avatar:void 0},Ey=[{label:"1 层",value:"1"},{label:"2 层",value:"2"},{label:"3 层",value:"3"}],by={slug:"thread",title:"楼中楼",group:"plugin",plugin:"ThreadPlugin",intro:"操作行的「回复」唤起内联框，嵌套回复递归渲染、限深折叠；子回复同样走点赞 / 继续回复。",why:"社交与视频评论区离不开楼中楼；限深避免无限嵌套把版面撑爆。",plugs:[{fn:"createThreadPlugin",cfg:"maxDepth: {{maxDepth}}",why:"renderNested 递归渲染 replies；maxDepth 控制嵌套上限"}],props:[],controls:[{key:"maxDepth",label:"嵌套深度",kind:"select",init:"3",options:Ey}],stageHeight:460};function Ty({cfg:e,log:n}){const[t,o]=y.useState(()=>ne()),r=Number(e.maxDepth)||3,i=y.useCallback(a=>{o(u=>u.map(d=>d.id===a?{...d,liked:!d.liked,likeCount:(d.likeCount??0)+(d.liked?-1:1)}:d))},[]),l=y.useCallback((a,u)=>{o(d=>d.map(m=>m.id===a?{...m,replies:[{id:`${a}-r${Date.now()}`,author:jy,content:u,createdAt:Date.now(),likeCount:0,liked:!1},...m.replies??[]],replyCount:(m.replyCount??0)+1}:m)),n(`回复 ${a}`)},[n]),s=y.useMemo(()=>q(K,[qr({maxDepth:r})]),[r]);return c.jsxs("div",{style:Ry,children:[c.jsx(s,{comments:t,onLike:i,onReply:l,onSubmit:a=>n("发布（需叠 RichComposerPlugin）"),onReport:a=>n(`举报 ${a}`),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"点任意评论的「回复」会弹出内联框；嵌套回复点开可看，深度由控件控制。"})]})}const Ny=Object.freeze(Object.defineProperty({__proto__:null,default:Ty,meta:by},Symbol.toStringTag,{value:"Module"})),$y="RichComposerPlugin",My="富编辑：底部评论框，支持 emoji 选择器 / 图片（DataURL）/ @提及（候选下拉），实时预览，提交时输出结构化 CommentNode[] 回调 onSubmit。各能力经 features 配置按平台开关。",Dy="0.1.0",Ly=["ui","富文本","编辑器","评论框"],zy=[{name:"features",type:"{ emoji?: boolean; image?: boolean; mention?: boolean }",default:"{ emoji: true, image: true, mention: true }",description:"启用哪些富编辑能力，按平台开关"},{name:"placeholder",type:"string",default:"说点什么吧…",description:"文本框占位符"},{name:"submitText",type:"string",default:"发布",description:"提交按钮文案"}],Oy=`const Comment = withCommentPlugins(CommentCore, [
  createRichComposerPlugin({ features: { emoji: true, image: true } }),
]);`,Iy=["emoji 选择器（内置常用表情，零依赖）","图片（本地文件 → DataURL，离线可用）","@提及（候选下拉，输出 mention 节点）","实时富内容预览（复用核心渲染）","结构化输出 CommentNode[]"],Ay=["视频评论区（emoji + 图片）","社交评论区（emoji + 图片 + @提及）","电商评论区（emoji + 图片晒单）"],Fy=["组件不缓存草稿；提交后清空。@提及按候选 name 精确匹配，多个同名取首个。"],nm={name:$y,description:My,since:Dy,tags:Ly,config:zy,example:Oy,features:Iy,useCases:Ay,notes:Fy},Uy=["image/jpeg","image/png","image/gif","image/webp"],By=["😀","😂","🤣","😍","😘","😎","🤔","😭","👍","👎","❤️","🔥","🎉","💯","✨","🌟","😅","😡","🥺","😴","🙏","💪","👏","💡"],Wy={emoji:!0,image:!0,mention:!0};function Hy(e,n,t){const o=[],r=/@([^\s@]{1,20})/g;let i=0,l;for(;(l=r.exec(e))!==null;){const s=l[1],a=n.find(u=>u.name===s);a&&(l.index>i&&o.push({type:"text",value:e.slice(i,l.index)}),o.push({type:"mention",userId:a.id,name:a.name}),i=r.lastIndex)}i<e.length&&o.push({type:"text",value:e.slice(i)});for(const s of t)o.push({type:"image",url:s});return o}function Vy({context:e,features:n,placeholder:t,submitText:o,acceptImageTypes:r,maxImageSizeMb:i,maxImages:l}){const[s,a]=y.useState(""),[u,d]=y.useState([]),[m,f]=y.useState(!1),[v,C]=y.useState(!1),[S,w]=y.useState(!1),[g,p]=y.useState(null),h=e.props.mentions??[],x=y.useRef(null),k=Hy(s,h,u),_=k.some($=>$.type==="text"&&$.value.trim().length>0||$.type==="image"||$.type==="mention"),R=async()=>{if(!_||S)return;const $=k,A=e.props.onSubmit;w(!0),p(null);try{await Promise.resolve(A==null?void 0:A($)),a(""),d([]),f(!1),C(!1)}catch{p("发布失败，内容已保留，请重试")}finally{w(!1)}},b=$=>a(A=>A+$),z=$=>{a(A=>A+`@${$} `),C(!1)},M=$=>{if(r.length>0&&!r.includes($.type)){p(`不支持的图片类型：${$.type||"未知"}`);return}if($.size>i*1024*1024){p(`图片超过 ${i}MB 上限`);return}if(u.length>=l){p(`最多只能添加 ${l} 张图片`);return}p(null);const A=new FileReader;A.onload=()=>{typeof A.result=="string"&&d(ue=>[...ue,A.result])},A.readAsDataURL($)};return c.jsxs("div",{style:{border:"1px solid rgba(128,128,128,0.22)",borderRadius:8,padding:10},children:[c.jsx("textarea",{value:s,onChange:$=>a($.target.value),placeholder:t??"说点什么吧…",rows:3,style:{width:"100%",resize:"vertical",border:"none",outline:"none",background:"transparent",color:"inherit",fontSize:14,fontFamily:"inherit",boxSizing:"border-box"}}),u.length>0&&c.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",margin:"6px 0"},children:u.map(($,A)=>c.jsxs("div",{style:{position:"relative"},children:[c.jsx("img",{src:$,alt:"",style:{width:64,height:64,objectFit:"cover",borderRadius:6}}),c.jsx("button",{type:"button",onClick:()=>d(ue=>ue.filter((Zn,Mn)=>Mn!==A)),style:{position:"absolute",top:-6,right:-6,width:18,height:18,borderRadius:"50%",border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",cursor:"pointer",fontSize:11,lineHeight:"18px",padding:0},children:"×"})]},A))}),m&&c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(8, 1fr)",gap:2,margin:"6px 0"},children:By.map($=>c.jsx("button",{type:"button",onClick:()=>b($),style:{border:"none",background:"transparent",cursor:"pointer",fontSize:18},children:$},$))}),v&&h.length>0&&c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,margin:"6px 0"},children:h.map($=>c.jsxs("button",{type:"button",onClick:()=>z($.name),style:{border:"1px solid rgba(128,128,128,0.25)",borderRadius:999,padding:"2px 10px",background:"transparent",color:"#1565c0",cursor:"pointer",fontSize:12},children:["@",$.name]},$.id))}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:6},children:[n.emoji&&c.jsx("button",{type:"button",onClick:()=>f($=>!$),style:Ri,children:"😊"}),n.image&&c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",onClick:()=>{var $;return($=x.current)==null?void 0:$.click()},style:Ri,children:"🖼️"}),c.jsx("input",{ref:x,type:"file",accept:r.join(","),style:{display:"none"},onChange:$=>{var ue;const A=(ue=$.target.files)==null?void 0:ue[0];A&&M(A),$.target.value=""}})]}),n.mention&&h.length>0&&c.jsx("button",{type:"button",onClick:()=>C($=>!$),style:Ri,children:"@"}),c.jsx("button",{type:"button","data-testid":"composer-submit",onClick:()=>{R()},disabled:!_||S,style:{marginLeft:"auto",border:"none",borderRadius:6,padding:"6px 18px",fontSize:13,cursor:_&&!S?"pointer":"not-allowed",background:_&&!S?"#1565c0":"rgba(128,128,128,0.2)",color:_&&!S?"#fff":"inherit"},children:S?"发布中…":o??"发布"})]}),g&&c.jsx("div",{"data-testid":"composer-error",style:{marginTop:6,fontSize:12,color:"#c62828"},children:g}),_&&c.jsx("div",{style:{marginTop:6,padding:6,borderRadius:6,background:"rgba(128,128,128,0.1)",fontSize:13,lineHeight:1.5},children:bs(k)})]})}const Ri={border:"none",background:"transparent",cursor:"pointer",fontSize:16,padding:2};function Qy(e={}){const n={...Wy,...e.features??{}},t=e.acceptImageTypes??Uy,o=e.maxImageSizeMb??5,r=e.maxImages??9;return{name:"RichComposerPlugin",version:"0.1.0",description:"富编辑：底部评论框，支持 emoji / 图片 / @提及，输出结构化富内容回调 onSubmit。",priority:10,enabled:!0,hooks:{renderFooter:i=>c.jsx(Vy,{context:i,features:n,placeholder:e.placeholder,submitText:e.submitText,acceptImageTypes:t,maxImageSizeMb:o,maxImages:r})}}}const Xr=Object.assign(Qy,{meta:nm}),Yy={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Ky={id:"u-me",name:"我",avatar:void 0},Gy={slug:"rich-composer",title:"富编辑",group:"plugin",plugin:"RichComposerPlugin",intro:"底部评论框：emoji 选择器 + 图片 + @提及，输出结构化富内容，实时预览。",why:"社交平台要表情和提及，电商要晒图评价——但后台回复框只想要纯文本，做成插件按需开关。",plugs:[{fn:"createRichComposerPlugin",cfg:"features: { emoji: {{withEmoji}}, image: {{withImage}}, mention: {{withMention}} }",why:"renderFooter 评论框；features 裁剪 emoji / 图片 / @提及"}],props:[],controls:[{key:"withEmoji",label:"emoji",kind:"switch",init:!0},{key:"withImage",label:"图片",kind:"switch",init:!0},{key:"withMention",label:"@提及",kind:"switch",init:!0}],stageHeight:460};function qy({cfg:e,log:n}){const[t,o]=y.useState(()=>ne()),r=!!e.withEmoji,i=!!e.withImage,l=!!e.withMention,s=y.useCallback(d=>{o(m=>m.map(f=>f.id===d?{...f,liked:!f.liked,likeCount:(f.likeCount??0)+(f.liked?-1:1)}:f))},[]),a=y.useCallback(d=>{d.some(m=>m.type==="text"&&m.value.trim()||m.type==="image"||m.type==="mention")&&(o(m=>[{id:`c-${Date.now()}`,author:Ky,content:d,createdAt:Date.now(),likeCount:0,liked:!1},...m]),n("发布评论"))},[n]),u=y.useMemo(()=>q(K,[Xr({features:{emoji:r,image:i,mention:l}})]),[r,i,l]);return c.jsxs("div",{style:Yy,children:[c.jsx(u,{comments:t,onLike:s,onReply:(d,m)=>n("回复（需叠 ThreadPlugin）"),onSubmit:a,onReport:d=>n(`举报 ${d}`),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"底部评论框：点 😊 选表情、🖼️ 传图、@ 提及好友，下方实时预览，发布后新评论置顶。"})]})}const Xy=Object.freeze(Object.defineProperty({__proto__:null,default:qy,meta:Gy},Symbol.toStringTag,{value:"Module"})),Jy={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},pu={id:"u-me",name:"我",avatar:void 0},Zy={slug:"full-combo",title:"全家桶",group:"advanced",capability:"full-combo",intro:"点赞 + 排序 + 楼中楼 + 富编辑一次性装配，点赞 / 回复 / 发布都真正改状态。",why:"想看「一个通用评论区到底长什么样」，这一页就是；四个能力按 priority 串联，互不覆盖。",plugs:[{fn:"createLikePlugin",why:"操作行点赞按钮"},{fn:"createSortPlugin",why:"顶栏排序条"},{fn:"createThreadPlugin",cfg:"maxDepth: 3",why:"楼中楼嵌套回复"},{fn:"createRichComposerPlugin",cfg:"features: { emoji: true, image: true, mention: true }",why:"底部富编辑评论框"}],props:[],stageHeight:520};function ev({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useCallback(s=>{t(a=>a.map(u=>u.id===s?{...u,liked:!u.liked,likeCount:(u.likeCount??0)+(u.liked?-1:1)}:u)),e(`点赞 ${s}`)},[e]),r=y.useCallback((s,a)=>{t(u=>u.map(d=>d.id===s?{...d,replies:[{id:`${s}-r${Date.now()}`,author:pu,content:a,createdAt:Date.now(),likeCount:0,liked:!1},...d.replies??[]],replyCount:(d.replyCount??0)+1}:d)),e(`回复 ${s}`)},[e]),i=y.useCallback(s=>{s.some(a=>a.type==="text"&&a.value.trim()||a.type==="image"||a.type==="mention")&&(t(a=>[{id:`c-${Date.now()}`,author:pu,content:s,createdAt:Date.now(),likeCount:0,liked:!1},...a]),e("发布评论"))},[e]),l=y.useMemo(()=>q(K,[Kr(),Gr(),qr({maxDepth:3}),Xr({features:{emoji:!0,image:!0,mention:!0}})]),[]);return c.jsxs("div",{style:Jy,children:[c.jsx(l,{comments:n,onLike:o,onReply:r,onSubmit:i,onReport:s=>e(`举报 ${s}`),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"四个能力全开：点赞、排序、楼中楼、富编辑框都在。试试点赞、回复、发图评。"})]})}const nv=Object.freeze(Object.defineProperty({__proto__:null,default:ev,meta:Zy},Symbol.toStringTag,{value:"Module"})),tv="ReportPlugin",ov="举报：每条评论操作行渲染举报按钮，弹出理由浮层，提交回调 onReport(id, reason)；理由可配置。",rv="0.2.0",iv=["ui","治理","举报"],lv=[{name:"reasons",type:"string[]",default:'["垃圾广告","辱骂攻击","色情低俗","诈骗","其他"]',description:"举报理由选项"}],sv=`const Comment = withCommentPlugins(CommentCore, [
  createReportPlugin(),
]);`,av=["操作行 🚩举报按钮","点击弹出理由浮层（单选）","提交回调 onReport(id, reason)"],uv=["社区 / 内容平台评论举报","任意需要内容治理的评论区"],cv=["举报态不本地缓存，提交即回调由消费方处理。"],tm={name:tv,description:ov,since:rv,tags:iv,config:lv,example:sv,features:av,useCases:uv,notes:cv},dv=["垃圾广告","辱骂攻击","色情低俗","诈骗","其他"],mv={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function pv({comment:e,onReport:n,reasons:t}){const[o,r]=y.useState(!1),[i,l]=y.useState(null),s=()=>{n==null||n(e.id,i??"其他"),r(!1),l(null)};return c.jsxs("span",{style:{position:"relative",display:"inline-block",flexShrink:0},children:[c.jsx("button",{type:"button","data-testid":"comment-report",onClick:()=>r(a=>!a),style:mv,children:"🚩举报"}),o&&c.jsxs("div",{style:{position:"absolute",top:"100%",left:0,zIndex:20,marginTop:4,background:"#fff",color:"#222",border:"1px solid rgba(0,0,0,0.12)",borderRadius:8,padding:8,minWidth:150,boxShadow:"0 4px 16px rgba(0,0,0,0.15)"},children:[t.map(a=>c.jsxs("label",{style:{display:"flex",gap:6,alignItems:"center",padding:"4px 0",fontSize:13,cursor:"pointer"},children:[c.jsx("input",{type:"radio",checked:i===a,onChange:()=>l(a)}),a]},a)),c.jsx("button",{type:"button",onClick:s,style:{marginTop:6,width:"100%",border:"none",borderRadius:6,padding:"6px 0",background:"#c62828",color:"#fff",cursor:"pointer"},children:"提交举报"})]})]})}function fv(e={}){const n=e.reasons??dv;return{name:"ReportPlugin",version:"0.1.0",description:"举报：每条评论操作行渲染举报按钮，弹出理由选择浮层，提交回调 onReport(id, reason)。",priority:22,enabled:!0,hooks:{renderCommentActions:(t,o)=>c.jsx(pv,{comment:o,reasons:n,onReport:t.props.onReport})}}}const Ns=Object.assign(fv,{meta:tm}),gv={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},hv={slug:"report",title:"举报",group:"plugin",plugin:"ReportPlugin",intro:"操作行加一个举报入口，弹出理由浮层，提交经 onReport(id, reason) 回调。",why:"社区治理的底线能力；做成插件后，信任度高的内部场景可以不装，避免误伤正常互动。",plugs:[{fn:"createReportPlugin",why:"操作行举报按钮；reasons 可自定义理由列表（默认 5 项）"}],props:[{text:"onReport={(id, reason) => { /* 上报后台 */ }}"}],stageHeight:420};function yv({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useMemo(()=>q(K,[Ns()]),[]);return c.jsxs("div",{style:gv,children:[c.jsx(o,{comments:n,onReport:(r,i)=>e(`举报 ${r} · ${i}`),onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:(r,i)=>e(`点赞 ${i?"取消":"已点"}`),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有举报被装上：点操作行的 🚩举报，选理由提交，事件写进右侧日志。"})]})}const vv=Object.freeze(Object.defineProperty({__proto__:null,default:yv,meta:hv},Symbol.toStringTag,{value:"Module"})),Cv="SharePlugin",xv="分享：每条评论操作行渲染分享按钮，复制本条评论锚点链接到剪贴板，给出「已复制」反馈。",Sv="0.2.0",wv=["ui","互动","分享"],Pv=[],kv=`const Comment = withCommentPlugins(CommentCore, [
  createSharePlugin(),
]);`,_v=["操作行 🔗分享按钮","复制锚点链接 #comment-<id>","复制后短暂「已复制链接」反馈"],Rv=["社交 / 内容平台评论分享","任意需要分享单条评论的场景"],jv=["剪贴板不可用时静默失败，不影响其它交互。"],om={name:Cv,description:xv,since:Sv,tags:wv,config:Pv,example:kv,features:_v,useCases:Rv,notes:jv},Ev={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function bv({comment:e}){const[n,t]=y.useState("idle"),o=y.useRef(null);y.useEffect(()=>()=>{o.current!==null&&window.clearTimeout(o.current)},[]);const r=l=>{t(l),o.current!==null&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{o.current=null,t("idle")},1500)},i=async()=>{const l=`${typeof location<"u"?location.origin+location.pathname:""}#comment-${e.id}`;try{const s=typeof navigator<"u"?navigator.clipboard:void 0;if(!(s!=null&&s.writeText))throw new Error("clipboard unavailable");await s.writeText(l),r("copied")}catch{r("failed")}};return c.jsx("button",{type:"button","data-testid":"comment-share",title:n==="failed"?"复制失败，请手动复制链接":void 0,onClick:()=>{i()},style:Ev,children:n==="copied"?"已复制链接":n==="failed"?"复制失败":"🔗分享"})}function Tv(){return{name:"SharePlugin",version:"0.1.0",description:"分享：每条评论操作行渲染分享按钮，复制本条评论锚点链接到剪贴板。",priority:23,enabled:!0,hooks:{renderCommentActions:(e,n)=>c.jsx(bv,{comment:n})}}}const $s=Object.assign(Tv,{meta:om}),Nv={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},$v={slug:"share",title:"分享",group:"plugin",plugin:"SharePlugin",intro:"操作行加一个分享按钮，复制本条评论锚点链接到剪贴板，给出已复制反馈。",why:"把高价值评论（神回复、干货）分享出去是社区裂变的入口；纯前端、无后端依赖，按需装。",plugs:[{fn:"createSharePlugin",why:"操作行分享按钮；复制 #comment-<id> 锚点链接"}],props:[],stageHeight:420};function Mv({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useMemo(()=>q(K,[$s()]),[]);return c.jsxs("div",{style:Nv,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有分享被装上：点操作行的 🔗分享，链接写入剪贴板并提示「已复制链接」。"})]})}const Dv=Object.freeze(Object.defineProperty({__proto__:null,default:Mv,meta:$v},Symbol.toStringTag,{value:"Module"})),Lv="CopyPlugin",zv="复制：每条评论操作行渲染复制按钮，把结构化富内容转纯文本后复制到剪贴板。",Ov="0.2.0",Iv=["ui","工具","复制"],Av=[],Fv=`const Comment = withCommentPlugins(CommentCore, [
  createCopyPlugin(),
]);`,Uv=["操作行 📋复制按钮","富内容转纯文本","复制后短暂「已复制」反馈"],Bv=["任意需要引用 / 转发评论原文的场景"],Wv=["剪贴板不可用时静默失败。"],rm={name:Lv,description:zv,since:Ov,tags:Iv,config:Av,example:Fv,features:Uv,useCases:Bv,notes:Wv},Hv={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function Vv(e){const n=[];return(e.content??[]).forEach(t=>{t.type==="text"||t.type==="emoji"?n.push(t.value):t.type==="mention"&&n.push(`@${t.name}`)}),e.text&&n.push(e.text),n.join("")}function Qv({comment:e}){const[n,t]=y.useState("idle"),o=y.useRef(null);y.useEffect(()=>()=>{o.current!==null&&window.clearTimeout(o.current)},[]);const r=l=>{t(l),o.current!==null&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{o.current=null,t("idle")},1500)},i=async()=>{try{const l=typeof navigator<"u"?navigator.clipboard:void 0;if(!(l!=null&&l.writeText))throw new Error("clipboard unavailable");await l.writeText(Vv(e)),r("copied")}catch{r("failed")}};return c.jsx("button",{type:"button","data-testid":"comment-copy",title:n==="failed"?"复制失败，请手动选择文本":void 0,onClick:()=>{i()},style:Hv,children:n==="copied"?"已复制":n==="failed"?"复制失败":"📋复制"})}function Yv(){return{name:"CopyPlugin",version:"0.1.0",description:"复制：每条评论操作行渲染复制按钮，复制评论纯文本到剪贴板。",priority:24,enabled:!0,hooks:{renderCommentActions:(e,n)=>c.jsx(Qv,{comment:n})}}}const Ms=Object.assign(Yv,{meta:rm}),Kv={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Gv={slug:"copy",title:"复制",group:"plugin",plugin:"CopyPlugin",intro:"操作行加一个复制按钮，把评论纯文本（含 @提及）复制到剪贴板。",why:"金句/神回复一键搬运到别处；富文本转纯文本由插件内部处理，消费者零成本。",plugs:[{fn:"createCopyPlugin",why:"操作行复制按钮；富文本转纯文本"}],props:[],stageHeight:420};function qv({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useMemo(()=>q(K,[Ms()]),[]);return c.jsxs("div",{style:Kv,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有复制被装上：点操作行的 📋复制，整条评论纯文本写入剪贴板（含 @提及）。"})]})}const Xv=Object.freeze(Object.defineProperty({__proto__:null,default:qv,meta:Gv},Symbol.toStringTag,{value:"Module"})),Jv="ReactionPlugin",Zv="多表情反应：每条评论操作行渲染表情反应条（👍❤️😂🎉），点击累加计数，回调 onReact(id, emoji)。区别于 LikePlugin 的单一赞。",e0="0.2.0",n0=["ui","互动","表情"],t0=[{name:"emojis",type:"string[]",default:'["👍","❤️","😂","🎉"]',description:"可选表情集合"}],o0=`const Comment = withCommentPlugins(CommentCore, [
  createReactionPlugin(),
]);`,r0=["操作行多表情快速反应","每条表情带计数","回调 onReact(id, emoji)"],i0=["微信 / 微博 / 小红书式评论反应","需要比「赞」更丰富表达的评论区"],l0=["反应计数显示于 comment.reactions，乐观更新由消费方完成。"],im={name:Jv,description:Zv,since:e0,tags:n0,config:t0,example:o0,features:r0,useCases:i0,notes:l0},s0=["👍","❤️","😂","🎉"],a0={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function u0({comment:e,onReact:n,emojis:t}){const o=e.reactions??{};return c.jsx("span",{"data-testid":"comment-reaction",style:{display:"inline-flex",gap:6,flexShrink:0},children:t.map(r=>{const i=o[r]??0;return c.jsxs("button",{type:"button",onClick:()=>n==null?void 0:n(e.id,r),style:{...a0,color:i>0?"#1565c0":"inherit",opacity:i>0?1:.7},children:[r,i>0?` ${i}`:""]},r)})})}function c0(e={}){const n=e.emojis??s0;return{name:"ReactionPlugin",version:"0.1.0",description:"多表情反应：每条评论操作行渲染表情反应条（👍❤️😂🎉），点击累加计数，回调 onReact(id, emoji)。",priority:25,enabled:!0,hooks:{renderCommentActions:(t,o)=>c.jsx(u0,{comment:o,emojis:n,onReact:t.props.onReact})}}}const Ds=Object.assign(c0,{meta:im}),d0={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},m0={slug:"reaction",title:"多表情反应",group:"plugin",plugin:"ReactionPlugin",intro:"操作行渲染表情反应条，点击累加计数，回调 onReact(id, emoji)。",why:"比「点赞」更轻量也更丰富：用户用表情秒回，不占用评论位；emojis 可自定义。",plugs:[{fn:"createReactionPlugin",cfg:'emojis: ["👍", "❤️", "😂", "🎉"]',why:"操作行表情反应条；emojis 自定义表情集合"}],props:[{text:"onReact={(id, emoji) => { /* 累加计数 */ }}"}],stageHeight:420};function p0({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useMemo(()=>q(K,[Ds()]),[]),r=y.useCallback((i,l)=>{t(s=>s.map(a=>{if(a.id!==i)return a;const u={...a.reactions??{}};return u[l]=(u[l]??0)+1,{...a,reactions:u}})),e(`反应 ${i} ${l}`)},[e]);return c.jsxs("div",{style:d0,children:[c.jsx(o,{comments:n,onReact:r,onReply:(i,l)=>e("回复（需叠 ThreadPlugin）"),onSubmit:i=>e("发布（需叠 RichComposerPlugin）"),onLike:i=>e("点赞"),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有反应被装上：点表情条里的任意表情，计数 +1 并写进右侧日志。"})]})}const f0=Object.freeze(Object.defineProperty({__proto__:null,default:p0,meta:m0},Symbol.toStringTag,{value:"Module"})),g0="FavoritePlugin",h0="收藏：每条评论操作行渲染收藏按钮，切换回调 onFavorite(id, nextFavorited)；收藏态读 comment.favorited。",y0="0.2.0",v0=["ui","互动","收藏"],C0=[],x0=`const Comment = withCommentPlugins(CommentCore, [
  createFavoritePlugin(),
]);`,S0=["操作行 ☆/★ 收藏按钮","回调 onFavorite(id, next)","读 comment.favorited 反映后端态"],w0=["内容平台评论收藏","电商 / 教程类评论区"],P0=["收藏态不本地缓存，消费方更新 comments 回流后即时反映。"],lm={name:g0,description:h0,since:y0,tags:v0,config:C0,example:x0,features:S0,useCases:w0,notes:P0},k0={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function _0({comment:e,onFavorite:n}){const t=!!e.favorited,o=()=>{n==null||n(e.id,!t)};return c.jsx("button",{type:"button","data-testid":"comment-favorite",onClick:o,"aria-pressed":t,style:{...k0,color:t?"#faad14":"inherit"},children:t?"★已收藏":"☆收藏"})}function R0(){return{name:"FavoritePlugin",version:"0.1.0",description:"收藏：每条评论操作行渲染收藏按钮，切换回调 onFavorite(id, nextFavorited)。",priority:26,enabled:!0,hooks:{renderCommentActions:(e,n)=>c.jsx(_0,{comment:n,onFavorite:e.props.onFavorite})}}}const Ls=Object.assign(R0,{meta:lm}),j0={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},E0={slug:"favorite",title:"收藏",group:"plugin",plugin:"FavoritePlugin",intro:"操作行加一个收藏按钮，点击切换 ☆/★ 高亮，回调 onFavorite(id, next)。",why:"用户把有用评论收进个人收藏夹；状态本地切换，上报交给 onFavorite。",plugs:[{fn:"createFavoritePlugin",why:"操作行收藏按钮；onFavorite(id, nextFavorited)"}],props:[{text:"onFavorite={(id, next) => { /* 写收藏夹 */ }}"}],stageHeight:420};function b0({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useMemo(()=>q(K,[Ls()]),[]);return c.jsxs("div",{style:j0,children:[c.jsx(o,{comments:n,onFavorite:(r,i)=>e(`收藏 ${r} → ${i?"已收藏":"取消"}`),onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有收藏被装上：点操作行的 ☆，变 ★ 并写进右侧日志。"})]})}const T0=Object.freeze(Object.defineProperty({__proto__:null,default:b0,meta:E0},Symbol.toStringTag,{value:"Module"})),N0="PinPlugin",$0="置顶：每条评论操作行渲染置顶按钮，切换回调 onPin(id, nextPinned)；Core 读取 comment.pinned 渲染置顶标。",M0="0.2.0",D0=["ui","组织","置顶"],L0=[],z0=`const Comment = withCommentPlugins(CommentCore, [
  createPinPlugin(),
]);`,O0=["操作行 📌 置顶/取消","回调 onPin(id, next)","与 Core 置顶标联动"],I0=["楼主 / 运营置顶优质评论","热帖锚定"],A0=["置顶态读 comment.pinned，后端排序 / 展示由消费方数据决定。"],sm={name:N0,description:$0,since:M0,tags:D0,config:L0,example:z0,features:O0,useCases:I0,notes:A0},F0={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function U0({comment:e,onPin:n}){const t=!!e.pinned,o=()=>{n==null||n(e.id,!t)};return c.jsx("button",{type:"button","data-testid":"comment-pin",onClick:o,"aria-pressed":t,style:{...F0,color:t?"#b35c00":"inherit"},children:t?"📌取消置顶":"📌置顶"})}function B0(){return{name:"PinPlugin",version:"0.1.0",description:"置顶：每条评论操作行渲染置顶按钮，切换回调 onPin(id, nextPinned)；Core 读取 comment.pinned 渲染置顶标。",priority:27,enabled:!0,hooks:{renderCommentActions:(e,n)=>c.jsx(U0,{comment:n,onPin:e.props.onPin})}}}const zs=Object.assign(B0,{meta:sm}),W0={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},H0={slug:"pin",title:"置顶",group:"plugin",plugin:"PinPlugin",intro:"操作行加一个置顶按钮，切换回调 onPin(id, next)；Core 读 pinned 渲染置顶标。",why:"运营把优质/公告评论钉在顶部；pinned 是数据字段，置顶标由 Core 渲染，插件只管切换。",plugs:[{fn:"createPinPlugin",why:"操作行置顶按钮；onPin(id, nextPinned)；置顶标由 Core 渲染"}],props:[{text:"onPin={(id, next) => { /* 改 pinned 字段 */ }}"}],stageHeight:420};function V0({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useMemo(()=>q(K,[zs()]),[]);return c.jsxs("div",{style:W0,children:[c.jsx(o,{comments:n,onPin:(r,i)=>e(`置顶 ${r} → ${i?"置顶":"取消"}`),onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有置顶被装上：c-1 默认已置顶（顶部有标），点 📌可切换并写进日志。"})]})}const Q0=Object.freeze(Object.defineProperty({__proto__:null,default:V0,meta:H0},Symbol.toStringTag,{value:"Module"})),Y0="LocationPlugin",K0="地理位置：评论含 location 字段时在操作行展示 📍 标；Core 默认不渲染 location，由本插件补充。",G0="0.2.0",q0=["ui","信息","地理位置"],X0=[],J0=`const Comment = withCommentPlugins(CommentCore, [
  createLocationPlugin(),
]);`,Z0=["条件渲染 📍 标","无 location 时不占位"],e1=["本地生活 / 探店 / 旅行评论区","带定位的 UGC 内容"],n1=["位置文案来自 comment.location，由数据提供。"],am={name:Y0,description:K0,since:G0,tags:q0,config:X0,example:J0,features:Z0,useCases:e1,notes:n1};function t1(){return{name:"LocationPlugin",version:"0.1.0",description:"地理位置：评论含 location 时在操作行展示 📍 标（Core 不渲染 location，由本插件补充展示）。",priority:28,enabled:!0,hooks:{renderCommentActions:(e,n)=>n.location?c.jsxs("span",{"data-testid":"comment-location",style:{display:"inline-flex",alignItems:"center",gap:2,fontSize:12,color:"#5b6064",flexShrink:0},children:["📍",n.location]}):null}}}const Jr=Object.assign(t1,{meta:am}),o1={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},r1={slug:"location",title:"地理位置",group:"plugin",plugin:"LocationPlugin",intro:"评论含 location 时，操作行补充 📍 位置标（Core 不渲染，由插件补充）。",why:"本地生活/探店场景需要把「在哪发的」亮出来；无 location 的评论自动不显示，零负担。",plugs:[{fn:"createLocationPlugin",why:"操作行展示 location；评论无 location 时不渲染"}],props:[],stageHeight:420};function i1({log:e}){const[n,t]=y.useState(()=>ne().map((r,i)=>i===1?{...r,location:"上海·静安"}:r)),o=y.useMemo(()=>q(K,[Jr()]),[]);return c.jsxs("div",{style:o1,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有地理位置被装上：第二条评论带了 location，操作行出现 📍上海·静安；其余不显示。"})]})}const l1=Object.freeze(Object.defineProperty({__proto__:null,default:i1,meta:r1},Symbol.toStringTag,{value:"Module"})),s1="TimestampPlugin",a1="绝对时间：Core 默认展示相对时间，本插件在操作行补充绝对时间芯片（YYYY-MM-DD HH:mm），便于精确查看。",u1="0.2.0",c1=["ui","信息","时间"],d1=[],m1=`const Comment = withCommentPlugins(CommentCore, [
  createTimestampPlugin(),
]);`,p1=["操作行绝对时间芯片","与 Core 相对时间并存"],f1=["需要精确时间的合规 / 存档场景","补充相对时间的不足"],g1=["仅展示，不修改 Core 的相对时间渲染。"],um={name:s1,description:a1,since:u1,tags:c1,config:d1,example:m1,features:p1,useCases:f1,notes:g1};function h1(e){const n=new Date(e),t=o=>String(o).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function y1(){return{name:"TimestampPlugin",version:"0.1.0",description:"绝对时间：Core 默认展示相对时间，本插件在操作行补充「绝对时间」芯片，便于精确查看发布时刻。",priority:29,enabled:!0,hooks:{renderCommentActions:(e,n)=>c.jsx("span",{"data-testid":"comment-timestamp",style:{fontSize:12,color:"#6b6b6b",flexShrink:0,whiteSpace:"nowrap"},title:"绝对时间",children:h1(n.createdAt)})}}}const Os=Object.assign(y1,{meta:um}),v1={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},C1={slug:"timestamp",title:"绝对时间",group:"plugin",plugin:"TimestampPlugin",intro:"Core 默认相对时间，本插件补充绝对时间芯片（YYYY-MM-DD HH:mm）。",why:"取证/审核场景需要精确到分钟；相对时间继续保留，绝对时间只是补充。",plugs:[{fn:"createTimestampPlugin",why:"操作行补充绝对时间芯片"}],props:[],stageHeight:420};function x1({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useMemo(()=>q(K,[Os()]),[]);return c.jsxs("div",{style:v1,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有绝对时间被装上：每条评论操作行多出一串 YYYY-MM-DD HH:mm 精确时间。"})]})}const S1=Object.freeze(Object.defineProperty({__proto__:null,default:x1,meta:C1},Symbol.toStringTag,{value:"Module"})),w1="CountPlugin",P1="计数：顶栏展示评论总数 + 热议标，读取 context.comments.length，随 Filter/Search 实时变化。",k1="0.2.0",_1=["ui","组织","计数"],R1=[],j1=`const Comment = withCommentPlugins(CommentCore, [
  createCountPlugin(),
]);`,E1=["顶栏评论总数","非空时「热议」标","与 Filter/Search 联动计数"],b1=["任意评论区计数展示","与筛选 / 搜索组合"],T1=["计数反映当前经 transformData 后的列表长度。"],cm={name:w1,description:P1,since:k1,tags:_1,config:R1,example:j1,features:E1,useCases:b1,notes:T1};function N1(){return{name:"CountPlugin",version:"0.1.0",description:"计数：顶栏展示评论总数 + 热议标，读取 context.comments.length（随 Filter/Search 实时变化）。",priority:11,enabled:!0,hooks:{renderToolbar:e=>{var t;const n=((t=e.comments)==null?void 0:t.length)??0;return c.jsxs("span",{"data-testid":"comment-count",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:13},children:[c.jsx("strong",{children:n})," 条评论",n>0&&c.jsx("span",{style:{fontSize:11,padding:"1px 6px",borderRadius:4,color:"#b35c00",border:"1px solid rgba(255,143,0,0.4)"},children:"热议"})]})}}}}const Is=Object.assign(N1,{meta:cm}),$1={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},M1={slug:"count",title:"计数",group:"plugin",plugin:"CountPlugin",intro:"顶栏展示评论总数 + 热议标，读取 context.comments.length（随筛选/搜索实时变化）。",why:"顶栏的「N 条评论」是评论区标配；读的是处理后的结果，叠筛选/搜索时自动同步。",plugs:[{fn:"createCountPlugin",why:"顶栏评论总数 + 热议标；读 context.comments.length"}],props:[],stageHeight:420};function D1({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useMemo(()=>q(K,[Is()]),[]);return c.jsxs("div",{style:$1,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有计数被装上：顶栏出现「N 条评论」+ 热议标，数字等于当前可见评论数。"})]})}const L1=Object.freeze(Object.defineProperty({__proto__:null,default:D1,meta:M1},Symbol.toStringTag,{value:"Module"})),z1="FilterPlugin",O1="筛选：顶栏「全部/有图/有回复」筛选，经 transformData 过滤评论列表（读 state.filter）。",I1="0.2.0",A1=["ui","组织","筛选"],F1=[{name:"options",type:'("all"|"image"|"replies")[]',default:'["all","image","replies"]',description:"筛选项"}],U1=`const Comment = withCommentPlugins(CommentCore, [
  createFilterPlugin(),
]);`,B1=["顶栏筛选芯片","transformData 实时过滤","与 CountPlugin 联动计数"],W1=["电商晒单筛选（有图）","热帖筛选（有回复）"],H1=["过滤发生在排序之前，不影响排序结果。"],dm={name:z1,description:O1,since:I1,tags:A1,config:F1,example:U1,features:B1,useCases:W1,notes:H1},V1={all:"全部",image:"有图",replies:"有回复"},Q1=e=>({border:"none",borderRadius:999,padding:"4px 12px",fontSize:13,cursor:"pointer",background:e?"rgba(29,161,242,0.16)":"transparent",color:e?"#1565c0":"inherit",opacity:e?1:.7});function Y1({context:e,options:n}){var r;const t=((r=e.state)==null?void 0:r.filter)??"all",o=i=>e.setState({filter:i});return c.jsx("div",{"data-testid":"comment-filter",style:{display:"inline-flex",gap:4},children:n.map(i=>c.jsx("button",{type:"button",onClick:()=>o(i),style:Q1(t===i),children:V1[i]??i},i))})}function K1(e={}){const n=e.options??["all","image","replies"];return{name:"FilterPlugin",version:"0.1.0",description:"筛选：顶栏「全部/有图/有回复」筛选，经 transformData 过滤评论列表（读 state.filter）。",priority:12,enabled:!0,hooks:{renderToolbar:t=>c.jsx(Y1,{context:t,options:n}),transformData:(t,o)=>{var l;const r=((l=t.state)==null?void 0:l.filter)??"all";if(r==="all"||!Array.isArray(o))return o;const i=o;return r==="image"?i.filter(s=>{var a;return(((a=s.images)==null?void 0:a.length)??0)>0}):r==="replies"?i.filter(s=>{var a;return(((a=s.replies)==null?void 0:a.length)??0)>0||(s.replyCount??0)>0}):o}}}}const As=Object.assign(K1,{meta:dm}),G1={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},q1={slug:"filter",title:"筛选",group:"plugin",plugin:"FilterPlugin",intro:"顶栏筛选胶囊（全部/有图/有回复），经 transformData 过滤评论列表。",why:"信息流太长时给读者一个快速收敛的入口；过滤在数据层做，不碰渲染，和排序天然共存。",plugs:[{fn:"createFilterPlugin",cfg:'options: ["all", "image", "replies"]',why:"顶栏筛选；transformData 按 state.filter 过滤"}],props:[],stageHeight:420};function X1({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useMemo(()=>q(K,[As()]),[]);return c.jsxs("div",{style:G1,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有筛选被装上：点顶栏「有图」只剩带图的评论，「有回复」只剩带楼中楼的，列表实时收缩。"})]})}const J1=Object.freeze(Object.defineProperty({__proto__:null,default:X1,meta:q1},Symbol.toStringTag,{value:"Module"})),Z1="SearchPlugin",eC="搜索：顶栏输入框，经 transformData 按关键词过滤评论（读 state.query，标题/正文/@提及均参与匹配）。",nC="0.2.0",tC=["ui","组织","搜索"],oC=[],rC=`const Comment = withCommentPlugins(CommentCore, [
  createSearchPlugin(),
]);`,iC=["顶栏搜索框","transformData 实时过滤","大小写不敏感"],lC=["长评论区站内搜索","客服 / 社区内容检索"],sC=["过滤发生在排序之前。"],mm={name:Z1,description:eC,since:nC,tags:tC,config:oC,example:rC,features:iC,useCases:lC,notes:sC},aC={border:"1px solid rgba(128,128,128,0.3)",borderRadius:999,padding:"4px 12px",fontSize:13,background:"transparent",color:"inherit",outline:"none",width:140};function uC(e){const n=[];return(e.content??[]).forEach(t=>{t.type==="text"?n.push(t.value):t.type==="mention"&&n.push(t.name)}),e.text&&n.push(e.text),n.join(" ")}function cC({context:e}){var t;const n=((t=e.state)==null?void 0:t.query)??"";return c.jsx("input",{"data-testid":"comment-search",value:n,onChange:o=>e.setState({query:o.target.value}),placeholder:"搜索评论…",style:aC})}function dC(){return{name:"SearchPlugin",version:"0.1.0",description:"搜索：顶栏输入框，经 transformData 按关键词过滤评论（读 state.query）。",priority:13,enabled:!0,hooks:{renderToolbar:e=>c.jsx(cC,{context:e}),transformData:(e,n)=>{var o;const t=(((o=e.state)==null?void 0:o.query)??"").trim().toLowerCase();return!t||!Array.isArray(n)?n:n.filter(r=>uC(r).toLowerCase().includes(t))}}}}const Fs=Object.assign(dC,{meta:mm}),mC={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},pC={slug:"search",title:"搜索",group:"plugin",plugin:"SearchPlugin",intro:"顶栏搜索框，经 transformData 按评论纯文本（含 @提及）过滤。",why:"长评论区必须有检索；同样是数据级插件，和筛选/排序叠加时各自独立生效。",plugs:[{fn:"createSearchPlugin",why:"顶栏搜索框；transformData 按 state.query 过滤"}],props:[],stageHeight:420};function fC({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useMemo(()=>q(K,[Fs()]),[]);return c.jsxs("div",{style:mC,children:[c.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有搜索被装上：在顶栏输入「工程文件」「BGM」「SKU」等，列表只留命中的评论。"})]})}const gC=Object.freeze(Object.defineProperty({__proto__:null,default:fC,meta:pC},Symbol.toStringTag,{value:"Module"})),hC="ModerationPlugin",yC="审核：经 transformData 屏蔽敏感词（替换为 **）并过滤待审 / 已删评论；属于数据级插件，不渲染 UI。",vC="0.2.0",CC=["治理","审核","安全"],xC=[{name:"words",type:"string[]",default:'["傻逼","广告","加微信","加我"]',description:"敏感词集合，命中替换为 **"},{name:"hidePending",type:"boolean",default:"true",description:"是否过滤待审 / 已删评论"}],SC=`const Comment = withCommentPlugins(CommentCore, [
  createModerationPlugin(),
]);`,wC=["敏感词脱敏","过滤待审 / 已删","纯数据级，零 UI 体积"],PC=["内容安全合规","UGC 社区前置审核"],kC=["处理顺序在排序之前；不修改原始数据对象（返回新数组）。"],pm={name:hC,description:yC,since:vC,tags:CC,config:xC,example:SC,features:wC,useCases:PC,notes:kC},_C=["傻逼","广告","加微信","加我"];function fm(e,n){let t=e;for(const o of n)o&&t.includes(o)&&(t=t.split(o).join("**"));return t}function RC(e,n){return e.map(t=>t.type==="text"?{...t,value:fm(t.value,n)}:t)}const jC=new Set;function gm(e,n,t,o){const r={...e,content:RC(e.content??[],n)};typeof e.text=="string"&&(r.text=fm(e.text,n));const i=e.replies;if(!i||i.length===0)return r;if(o.has(e.id))return r.replies=void 0,r;const l=new Set(o);return l.add(e.id),r.replies=i.filter(s=>!t||s.status!=="pending"&&s.status!=="deleted").map(s=>gm(s,n,t,l)),r}function EC(e={}){const n=e.words??_C,t=e.hidePending??!0;return{name:"ModerationPlugin",version:"0.1.0",description:"审核：经 transformData 屏蔽敏感词（替换为 **）并过滤待审/已删评论（hidePending 默认开）。",priority:14,enabled:!0,hooks:{transformData:(o,r)=>{if(!Array.isArray(r))return r;let i=r;return t&&(i=i.filter(l=>l.status!=="pending"&&l.status!=="deleted")),i.map(l=>gm(l,n,t,jC))}}}}const Us=Object.assign(EC,{meta:pm}),bC={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},TC={slug:"moderation",title:"审核",group:"plugin",plugin:"ModerationPlugin",intro:"数据级审核：敏感词脱敏（**）+ 过滤待审/已删；不渲染任何 UI。",why:"合规前置在数据层，一次装配全列表生效；不渲染 UI，性能零负担。",plugs:[{fn:"createModerationPlugin",cfg:"hidePending: {{hidePending}}",why:"transformData 脱敏 + 过滤；hidePending 默认 true"}],props:[],controls:[{key:"hidePending",label:"过滤待审/已删",kind:"switch",init:!0}],stageHeight:460};function NC({cfg:e,log:n}){const[t,o]=y.useState(()=>ne().map(l=>l.id==="c-1"?{...l,content:[{type:"text",value:"这期广告太多，加微信领福利的私我"}]}:l)),r=!!e.hidePending,i=y.useMemo(()=>q(K,[Us({hidePending:r})]),[r]);return c.jsxs("div",{style:bC,children:[c.jsx(i,{comments:t,onReply:(l,s)=>n("回复（需叠 ThreadPlugin）"),onSubmit:l=>n("发布（需叠 RichComposerPlugin）"),onLike:l=>n("点赞"),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有审核被装上：第一条里的「广告」「加微信」被脱敏成 **；关掉开关后待审/已删也会显示。"})]})}const $C=Object.freeze(Object.defineProperty({__proto__:null,default:NC,meta:TC},Symbol.toStringTag,{value:"Module"})),MC="LoginPromptPlugin",DC="未登录引导：底部渲染「登录后参与评论」引导条，回调 onLogin；与 RichComposerPlugin 同槽共存。",LC="0.2.0",zC=["ui","转化","登录"],OC=[],IC=`const Comment = withCommentPlugins(CommentCore, [
  createLoginPromptPlugin(),
]);`,AC=["底部登录引导条","回调 onLogin"],FC=["未登录态促登录","评论框前置引导"],UC=["仅展示引导，是否隐藏登录态由消费方条件装配决定。"],hm={name:MC,description:DC,since:LC,tags:zC,config:OC,example:IC,features:AC,useCases:FC,notes:UC};function BC(){return{name:"LoginPromptPlugin",version:"0.1.0",description:"未登录引导：底部渲染「登录后参与评论」引导条，回调 onLogin；可与 RichComposerPlugin 同槽共存。",priority:33,enabled:!0,hooks:{renderFooter:e=>c.jsxs("div",{"data-testid":"comment-login-prompt",style:{display:"flex",alignItems:"center",gap:8,padding:"10px 0",fontSize:13},children:[c.jsx("span",{children:"登录后参与评论，发表你的看法"}),c.jsx("button",{type:"button",onClick:()=>{var n,t;return(t=(n=e.props).onLogin)==null?void 0:t.call(n)},style:{border:"1px solid rgba(29,161,242,0.5)",borderRadius:999,padding:"4px 14px",background:"transparent",color:"#1565c0",cursor:"pointer"},children:"登录"})]})}}}const Bs=Object.assign(BC,{meta:hm}),WC={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},HC={slug:"login",title:"未登录引导",group:"plugin",plugin:"LoginPromptPlugin",intro:"底部渲染登录引导条，点击登录回调 onLogin；与 RichComposer 同槽可共存。",why:"未登录态下把评论框换成轻引导，登录后切真框；同槽并联，不抢位。",plugs:[{fn:"createLoginPromptPlugin",why:"底部登录引导；onLogin 回调"}],props:[{text:"onLogin={() => { /* 跳转登录 */ }}"}],stageHeight:420};function VC({log:e}){const[n,t]=y.useState(()=>ne()),o=y.useMemo(()=>q(K,[Bs()]),[]);return c.jsxs("div",{style:WC,children:[c.jsx(o,{comments:n,onLogin:()=>e("点击登录 → 跳转登录页"),onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:ee}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有未登录引导被装上：列表底部出现「登录后参与评论」+ 登录按钮，点击写进日志。"})]})}const QC=Object.freeze(Object.defineProperty({__proto__:null,default:VC,meta:HC},Symbol.toStringTag,{value:"Module"})),YC=`import React, { useCallback, useMemo, useState } from "react";
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
`,KC=`import React, { useCallback, useMemo, useState } from "react";
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
`,GC=`import React, { useCallback, useMemo, useState } from "react";
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
`,qC=`import React, { useCallback, useMemo, useState } from "react";
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
`,XC=`import React, { useCallback, useMemo, useState } from "react";
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
`,JC=`import React, { useCallback, useMemo, useState } from "react";
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
`,ZC=`import React, { useMemo, useState } from "react";
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
`,ex=`import React, { useMemo, useState } from "react";
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
`,nx=`import React, { useMemo, useState } from "react";
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
`,tx=`import React, { useCallback, useMemo, useState } from "react";
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
`,ox=`import React, { useMemo, useState } from "react";
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
`,rx=`import React, { useMemo, useState } from "react";
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
`,ix=`import React, { useMemo, useState } from "react";
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
`,lx=`import React, { useMemo, useState } from "react";
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
`,sx=`import React, { useMemo, useState } from "react";
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
`,ax=`import React, { useMemo, useState } from "react";
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
`,ux=`import React, { useMemo, useState } from "react";
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
`,cx=`import React, { useMemo, useState } from "react";
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
`,dx=`import React, { useMemo, useState } from "react";
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
`,mx=Object.assign({"./00-quickstart.tsx":Nh,"./01-like.tsx":Qh,"./02-sort.tsx":ay,"./03-thread.tsx":Ny,"./04-rich-composer.tsx":Xy,"./05-full-combo.tsx":nv,"./06-report.tsx":vv,"./07-share.tsx":Dv,"./08-copy.tsx":Xv,"./09-reaction.tsx":f0,"./10-favorite.tsx":T0,"./11-pin.tsx":Q0,"./12-location.tsx":l1,"./13-timestamp.tsx":S1,"./14-count.tsx":L1,"./15-filter.tsx":J1,"./16-search.tsx":gC,"./17-moderation.tsx":$C,"./18-login.tsx":QC}),px=Object.assign({"./00-quickstart.tsx":YC,"./01-like.tsx":KC,"./02-sort.tsx":GC,"./03-thread.tsx":qC,"./04-rich-composer.tsx":XC,"./05-full-combo.tsx":JC,"./06-report.tsx":ZC,"./07-share.tsx":ex,"./08-copy.tsx":nx,"./09-reaction.tsx":tx,"./10-favorite.tsx":ox,"./11-pin.tsx":rx,"./12-location.tsx":ix,"./13-timestamp.tsx":lx,"./14-count.tsx":sx,"./15-filter.tsx":ax,"./16-search.tsx":ux,"./17-moderation.tsx":cx,"./18-login.tsx":dx}),fx=e=>e.replace(/^\.\//,""),Rl=Object.entries(mx).map(([e,n])=>{const t=fx(e);return{meta:n.meta,Stage:n.default,file:t,source:px[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),gx=["basic","advanced","plugin"];Array.from(new Set(Rl.map(e=>e.meta.plugin).filter(e=>!!e))).sort();const jl={basic:{label:"基础功能",hint:"Core 自身的 props 与推导行为"},advanced:{label:"高级功能",hint:"全量装配 / 组合"},plugin:{label:"插件功能",hint:"一插件一页"}};function fu(e){const n={};for(const t of e.controls??[])n[t.key]=t.init;return n}const hx="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",yx="true|false|null|undefined|this|super",vx="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",gu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${hx})\b`,String.raw`\b(${yx})\b`,String.raw`\b(${vx})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),hu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function Cx(e){const n=[];let t=0;gu.lastIndex=0;let o;for(;o=gu.exec(e);){o.index>t&&n.push({text:e.slice(t,o.index),cls:null});const r=hu.findIndex((i,l)=>o[l+1]!==void 0);n.push({text:o[0],cls:r>=0?hu[r]:null}),t=o.index+o[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function yu(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function xx({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:o}){const[r,i]=y.useState("idle"),[l,s]=y.useState(!1),a=y.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&a.length>t,d=u&&!l?a.slice(0,t).join(`
`):e,m=y.useMemo(()=>Cx(d),[d]),f=y.useCallback(async()=>{var C;let v=!1;if((C=navigator.clipboard)!=null&&C.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=yu(e)}else v=yu(e);i(v?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-head",children:[c.jsx("span",{children:n}),c.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[c.jsxs("span",{children:[a.length," 行"]}),c.jsx("button",{type:"button",className:`code-copy${r==="ok"?" is-ok":r==="fail"?" is-fail":""}`,onClick:f,children:r==="ok"?"已复制":r==="fail"?"复制失败":"复制"})]})]}),c.jsx("pre",{style:o?{maxHeight:o}:void 0,children:c.jsx("code",{children:m.map((v,C)=>v.cls?c.jsx("span",{className:v.cls,children:v.text},C):c.jsx(Ye.Fragment,{children:v.text},C))})}),u?c.jsx("button",{type:"button",className:"code-more",onClick:()=>s(v=>!v),children:l?"收起":`展开余下 ${a.length-t} 行`}):null]})}const Sx=/\{\{\s*([\w-]+)\s*\}\}/g;function vu(e,n){return e.replace(Sx,(t,o)=>o in n?String(n[o]):t)}function wx(e){return e.replace(/^create/,"")}function Px(e,n){const o=['import { CommentCore, withCommentPlugins } from "vane-comment";',...e.plugs.map(s=>s.fn).sort().map(s=>`import { ${s} } from "vane-comment/custom-plugins/${wx(s)}";`),"",'import type { Comment } from "vane-comment";'].join(`
`),r=e.plugs.map(s=>`  ${s.fn}(${s.cfg?`{ ${vu(s.cfg,n)} }`:""}),`).join(`
`),i=e.props.filter(s=>typeof s=="string"||!s.when||s.when(n)).map(s=>`      ${vu(typeof s=="string"?s:s.text,n)}`).join(`
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
`}function kx({controls:e,cfg:n,onChange:t}){return c.jsx("div",{className:"ctl-bar",children:e.filter(o=>!o.when||o.when(n)).map(o=>{const r=n[o.key];return c.jsxs("label",{className:"ctl",title:o.hint,children:[c.jsxs("span",{className:"ctl-label",children:[o.label,c.jsx("b",{className:"ctl-val",children:o.kind==="switch"?r?"开":"关":String(r)})]}),o.kind==="switch"?c.jsx("button",{type:"button",className:`ctl-switch${r?" is-on":""}`,onClick:()=>t(o.key,!r),"aria-pressed":!!r,children:c.jsx("i",{})}):o.kind==="select"?c.jsx("select",{className:"ctl-select",value:String(r),onChange:i=>t(o.key,i.target.value),children:(o.options??[]).map(i=>c.jsx("option",{value:i.value,children:i.label},i.value))}):c.jsx("input",{className:"ctl-range",type:"range",min:o.min??0,max:o.max??100,step:o.step??1,value:Number(r),onChange:i=>t(o.key,Number(i.target.value))})]},o.key)})})}function _x({lines:e,title:n="事件日志",empty:t="还没触发 —— 拖上面的控件，或点一下规格试试",right:o}){return c.jsxs("div",{className:"log",children:[c.jsxs("div",{className:"log-head",children:[c.jsx("span",{children:n}),c.jsxs("span",{className:"log-right",children:[o,c.jsx("b",{children:e.length})]})]}),e.length===0?c.jsx("p",{className:"log-empty",children:t}):c.jsx("ol",{className:"log-list",children:e.map(r=>c.jsxs("li",{className:`log-line is-${r.kind}`,children:[c.jsx("time",{children:r.at}),c.jsx("span",{children:r.text})]},r.id))})]})}function Rx({entry:e,order:n}){var S;const{meta:t,Stage:o,file:r,source:i}=e,[l,s]=y.useState(()=>fu(t)),[a,u]=y.useState([]),[d,m]=y.useState("minimal"),f=y.useCallback((w,g="event")=>{const p=new Date().toLocaleTimeString("zh-CN",{hour12:!1});u(h=>[{id:h.length+1,at:p,text:w,kind:g},...h].slice(0,60))},[]),v=y.useCallback((w,g)=>{s(p=>({...p,[w]:g}))},[]),C=y.useMemo(()=>Px(t,l),[t,l]);return c.jsxs("section",{className:"demo","data-demo":t.slug,children:[c.jsxs("header",{className:"demo-head",children:[c.jsxs("div",{className:"demo-folio",children:[c.jsx("span",{className:"demo-no",children:String(n).padStart(2,"0")}),c.jsx("em",{children:"plate"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"demo-title-row",children:[c.jsx("h2",{children:t.title}),c.jsx("span",{className:"demo-group",children:jl[t.group].label}),t.plugin?c.jsx("code",{className:"demo-plugin",children:t.plugin}):null]}),c.jsx("p",{className:"demo-intro",children:t.intro}),c.jsxs("p",{className:"demo-why",children:[c.jsx("b",{children:"什么时候用"}),t.why]})]}),c.jsxs("div",{className:"demo-meta",children:[c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"file"}),c.jsx("b",{children:r})]}),c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"group"}),c.jsx("b",{children:jl[t.group].label})]}),c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"plugs"}),c.jsx("b",{children:t.plugs.length?`${t.plugs.length} installed`:"core only"})]})]})]}),(S=t.controls)!=null&&S.length?c.jsxs("div",{className:"demo-controls",children:[c.jsx(kx,{controls:t.controls,cfg:l,onChange:v}),c.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{s(fu(t)),u([])},children:"重置"})]}):null,c.jsxs("div",{className:"demo-body",children:[c.jsxs("figure",{className:"plate",children:[c.jsxs("figcaption",{className:"plate-cap",children:[c.jsx("b",{children:"stage"}),c.jsxs("span",{children:[t.tone==="light"?"light surface":"live render",t.stageHeight?` · ${t.stageHeight}px`:""]}),c.jsx("em",{children:"live"})]}),c.jsx("div",{className:"plate-ruler","aria-hidden":!0}),c.jsx("div",{className:`plate-body demo-stage${t.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${t.stageHeight??380}px`},children:c.jsx(o,{cfg:l,log:f,setCfg:v})})]}),c.jsxs("aside",{className:"demo-side",children:[c.jsx("div",{className:"demo-plugs",children:t.plugs.length===0?c.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):t.plugs.map(w=>c.jsx("span",{className:`demo-plug${w.local?" is-local":""}`,children:w.fn.replace(/^create|Plugin$/g,"")},w.fn))}),c.jsx("ul",{className:"demo-why-list",children:t.plugs.map(w=>c.jsxs("li",{children:[c.jsx("code",{children:w.fn}),c.jsx("span",{children:w.why})]},w.fn))}),t.note?c.jsxs("p",{className:"demo-note",children:["⚠ ",t.note]}):null,c.jsx(_x,{lines:a,empty:t.plugs.length>0?"还没触发 —— 拖上面的控件，或点一下规格试试":"这一页没有事件类行为，日志留白"})]})]}),c.jsxs("div",{className:"demo-code",children:[c.jsxs("div",{className:"demo-switch",role:"tablist",children:[c.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>m("minimal"),children:"最小装配"}),c.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>m("full"),children:"完整源码"})]}),c.jsx(xx,{code:d==="minimal"?C:i,title:d==="minimal"?`${t.slug}.minimal.tsx`:r,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]})]})}const jx=`import React, { useEffect, useRef, useState } from "react";
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

type FlashState = "idle" | "copied" | "failed";

/**
 * 复制按钮：复制评论纯文本到剪贴板。
 * 只有真正写成功才提示「已复制」——http 非 localhost / 浏览器拒绝写剪贴板时
 * \`navigator.clipboard\` 是 undefined，旧写法会静默跳过却仍报成功。
 * 复位定时器在卸载时清理，避免对已卸载组件 setState。
 */
function CopyButton({ comment }: { comment: Comment }) {
  const [state, setState] = useState<FlashState>("idle");
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    []
  );

  const flash = (next: FlashState) => {
    setState(next);
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      setState("idle");
    }, 1500);
  };

  const handle = async () => {
    try {
      const clipboard =
        typeof navigator !== "undefined" ? navigator.clipboard : undefined;
      if (!clipboard?.writeText) throw new Error("clipboard unavailable");
      await clipboard.writeText(plainText(comment));
      flash("copied");
    } catch {
      flash("failed");
    }
  };
  return (
    <button
      type="button"
      data-testid="comment-copy"
      title={state === "failed" ? "复制失败，请手动选择文本" : undefined}
      onClick={() => {
        void handle();
      }}
      style={actionBtn}
    >
      {state === "copied" ? "已复制" : state === "failed" ? "复制失败" : "📋复制"}
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
`,Ex=`import React from "react";
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
`,bx=`import React from "react";
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

/**
 * 收藏按钮：完全受控（状态只来自 comment.favorited），点击只回调 onFavorite(id, next)。
 * 与 LikePlugin 一致：本地 state 会在服务端拒绝 / 列表刷新后与 props 分叉。
 */
function FavoriteButton({
  comment,
  onFavorite,
}: {
  comment: Comment;
  onFavorite?: (id: string, next: boolean) => void;
}) {
  const fav = !!comment.favorited;
  const handle = () => {
    onFavorite?.(comment.id, !fav);
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
`,Tx=`import React from "react";
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
`,Nx=`import React, { useEffect, useRef, useState } from "react";
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

/**
 * 点赞按钮：受控（liked / likeCount 全部来自 props），本地只保留爆裂动画。
 * 契约：消费方必须实现 onLike 并在数据里回写 liked / likeCount，否则按钮不会有任何变化。
 * 动画定时器随卸载清理。
 */
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
  const burstTimer = useRef<number | null>(null);
  const liked = !!comment.liked;
  const count = comment.likeCount;

  useEffect(
    () => () => {
      if (burstTimer.current !== null) window.clearTimeout(burstTimer.current);
    },
    []
  );

  const handle = () => {
    const next = !liked;
    onLike?.(comment.id, next);
    if (next) {
      setBurst(true);
      if (burstTimer.current !== null) window.clearTimeout(burstTimer.current);
      burstTimer.current = window.setTimeout(() => {
        burstTimer.current = null;
        setBurst(false);
      }, 450);
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
`,$x=`import React from "react";
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
`,Mx=`import React from "react";
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
`,Dx=`import React from "react";
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

/** 文本脱敏：命中敏感词替换为 ** */
function maskText(value: string, words: string[]): string {
  let v = value;
  for (const w of words) {
    if (w && v.includes(w)) v = v.split(w).join("**");
  }
  return v;
}

/** 把文本节点中的敏感词替换为 ** */
function maskNodes(nodes: CommentNode[], words: string[]): CommentNode[] {
  return nodes.map((n) => {
    if (n.type === "text") {
      return { ...n, value: maskText(n.value, words) };
    }
    return n;
  });
}

const EMPTY_SEEN: ReadonlySet<string> = new Set();

/**
 * 递归脱敏单条评论：content（结构化富内容）+ text（纯文本回退）+ replies（楼中楼）。
 * 回退路径也必须脱敏——CommentCore / ThreadPlugin 在 content 为空时直接渲染 text，
 * 只处理 content 等于给历史数据与简化接入留了一道审核旁路。
 * \`seen\` 为祖先 id 集合：循环 replies 时断开子树，避免 transformData 自身无限递归。
 */
function maskComment(
  comment: Comment,
  words: string[],
  hidePending: boolean,
  seen: ReadonlySet<string>
): Comment {
  const next: Comment = {
    ...comment,
    content: maskNodes(comment.content ?? [], words),
  };
  if (typeof comment.text === "string") {
    next.text = maskText(comment.text, words);
  }
  const replies = comment.replies;
  if (!replies || replies.length === 0) return next;
  if (seen.has(comment.id)) {
    // 环检测：同一 id 已在祖先链里出现过，断开引用防止无限递归
    next.replies = undefined;
    return next;
  }
  const path = new Set(seen);
  path.add(comment.id);
  next.replies = replies
    .filter(
      (r) => !hidePending || (r.status !== "pending" && r.status !== "deleted")
    )
    .map((r) => maskComment(r, words, hidePending, path));
  return next;
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
        return arr.map((c) =>
          maskComment(c, words, hidePending, EMPTY_SEEN)
        ) as unknown as T;
      },
    },
  };
}

export { doc };
`,Lx=`import React from "react";
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

/**
 * 置顶按钮：完全受控（状态只来自 comment.pinned），点击只回调 onPin(id, next)。
 * 不用本地 state：置顶被服务端拒绝 / 列表刷新时，props 才是唯一事实来源；
 * 本地态会让按钮与 Core 的「置顶」标显示相反结论（且刷新后仍不回正）。
 */
function PinButton({
  comment,
  onPin,
}: {
  comment: Comment;
  onPin?: (id: string, next: boolean) => void;
}) {
  const pinned = !!comment.pinned;
  const handle = () => {
    onPin?.(comment.id, !pinned);
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
`,zx=`import React from "react";
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
`,Ox=`import React, { useState } from "react";
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
`,Ix=`import React, { useRef, useState } from "react";
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
  /** 图片 MIME 白名单（拖拽 / 改扩展名也拦得住），默认 jpeg/png/gif/webp */
  acceptImageTypes?: string[];
  /** 单张图片体积上限（MB），默认 5 */
  maxImageSizeMb?: number;
  /** 最多可选图片张数，默认 9 */
  maxImages?: number;
}

const DEFAULT_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

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
  acceptImageTypes,
  maxImageSizeMb,
  maxImages,
}: {
  context: CommentPluginContext<any>;
  features: { emoji: boolean; image: boolean; mention: boolean };
  placeholder?: string;
  submitText?: string;
  acceptImageTypes: string[];
  maxImageSizeMb: number;
  maxImages: number;
}) {
  const [text, setText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [mentionOpen, setMentionOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mentions = (context.props.mentions as { id: string; name: string; avatar?: string }[]) ?? [];
  const fileRef = useRef<HTMLInputElement | null>(null);

  const preview = buildContent(text, mentions, images);
  const canSubmit = preview.some(
    (n) =>
      (n.type === "text" && n.value.trim().length > 0) ||
      n.type === "image" ||
      n.type === "mention"
  );

  /**
   * 发布：等 onSubmit 落地（同步回调或 Promise）后再清草稿。
   * 失败保留草稿并提示；提交期间按钮 disabled，避免快速双击重复提交。
   */
  const submit = async () => {
    if (!canSubmit || submitting) return;
    const payload = preview;
    const onSubmit = context.props.onSubmit as
      | ((c: CommentNode[]) => void | Promise<void>)
      | undefined;
    setSubmitting(true);
    setError(null);
    try {
      await Promise.resolve(onSubmit?.(payload));
      setText("");
      setImages([]);
      setShowEmoji(false);
      setMentionOpen(false);
    } catch {
      setError("发布失败，内容已保留，请重试");
    } finally {
      setSubmitting(false);
    }
  };

  const insertEmoji = (e: string) => setText((t) => t + e);
  const insertMention = (name: string) => {
    setText((t) => t + \`@\${name} \`);
    setMentionOpen(false);
  };

  /** 选图：先做类型 / 体积 / 张数三层校验，再读成 DataURL（避免把任意大文件塞进内存） */
  const onFile = (file: File) => {
    if (acceptImageTypes.length > 0 && !acceptImageTypes.includes(file.type)) {
      setError(\`不支持的图片类型：\${file.type || "未知"}\`);
      return;
    }
    if (file.size > maxImageSizeMb * 1024 * 1024) {
      setError(\`图片超过 \${maxImageSizeMb}MB 上限\`);
      return;
    }
    if (images.length >= maxImages) {
      setError(\`最多只能添加 \${maxImages} 张图片\`);
      return;
    }
    setError(null);
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
              accept={acceptImageTypes.join(",")}
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
          data-testid="composer-submit"
          onClick={() => {
            void submit();
          }}
          disabled={!canSubmit || submitting}
          style={{
            marginLeft: "auto",
            border: "none",
            borderRadius: 6,
            padding: "6px 18px",
            fontSize: 13,
            cursor: canSubmit && !submitting ? "pointer" : "not-allowed",
            background:
              canSubmit && !submitting ? "#1565c0" : "rgba(128,128,128,0.2)",
            color: canSubmit && !submitting ? "#fff" : "inherit",
          }}
        >
          {submitting ? "发布中…" : submitText ?? "发布"}
        </button>
      </div>

      {error && (
        <div
          data-testid="composer-error"
          style={{ marginTop: 6, fontSize: 12, color: "#c62828" }}
        >
          {error}
        </div>
      )}

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
  const acceptImageTypes = config.acceptImageTypes ?? DEFAULT_IMAGE_TYPES;
  const maxImageSizeMb = config.maxImageSizeMb ?? 5;
  const maxImages = config.maxImages ?? 9;
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
          acceptImageTypes={acceptImageTypes}
          maxImageSizeMb={maxImageSizeMb}
          maxImages={maxImages}
        />
      ),
    },
  };
}

export { doc };
`,Ax=`import React from "react";
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
`,Fx=`import React, { useEffect, useRef, useState } from "react";
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

type FlashState = "idle" | "copied" | "failed";

/**
 * 分享按钮：复制本条评论的锚点链接到剪贴板。
 * 与 CopyPlugin 同一套语义：写成功才提示成功，失败给「复制失败」；定时器随卸载清理。
 */
function ShareButton({ comment }: { comment: Comment }) {
  const [state, setState] = useState<FlashState>("idle");
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    []
  );

  const flash = (next: FlashState) => {
    setState(next);
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      setState("idle");
    }, 1500);
  };

  const handle = async () => {
    const link = \`\${typeof location !== "undefined" ? location.origin + location.pathname : ""}#comment-\${comment.id}\`;
    try {
      const clipboard =
        typeof navigator !== "undefined" ? navigator.clipboard : undefined;
      if (!clipboard?.writeText) throw new Error("clipboard unavailable");
      await clipboard.writeText(link);
      flash("copied");
    } catch {
      flash("failed");
    }
  };
  return (
    <button
      type="button"
      data-testid="comment-share"
      title={state === "failed" ? "复制失败，请手动复制链接" : undefined}
      onClick={() => {
        void handle();
      }}
      style={actionBtn}
    >
      {state === "copied"
        ? "已复制链接"
        : state === "failed"
          ? "复制失败"
          : "🔗分享"}
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
`,Ux=`import React from "react";
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
`,Bx=`import React, { createContext, useContext, useState } from "react";
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

/**
 * 楼中楼层级上下文。
 *
 * \`level\`：当前评论自身的层级（顶层评论为 0），子回复为 level + 1。
 * \`path\`：当前评论的祖先 id 集合，用于环检测（自引用 / A→B→A 这类循环 replies）。
 *
 * 为什么用 React context 而不是把 depth 塞进插槽 payload：
 * \`renderNested\` 的 payload 是 \`Comment\`（公开契约，第三方插件也按此实现），
 * 改 payload 形状会破坏兼容；层级只是「当前渲染位置」的信息，放上下文里最自然。
 */
interface NestInfo {
  level: number;
  path: ReadonlySet<string>;
}

const EMPTY_PATH: ReadonlySet<string> = new Set();
const NestContext = createContext<NestInfo>({ level: 0, path: EMPTY_PATH });

/**
 * 楼中楼入口（由 \`renderNested\` 槽渲染）。
 * 读环境层级 → 环检测（祖先里已出现过同一 id 就停止递归）→ 限深（level >= maxDepth 不再展开）
 * → 用 level + 1 渲染子级 ThreadView。
 */
function NestedSection({
  comment,
  maxDepth,
  defaultExpanded,
  showReply,
}: {
  comment: Comment;
  maxDepth: number;
  defaultExpanded: boolean;
  showReply: boolean;
}) {
  const nest = useContext(NestContext);
  // 环检测：循环 replies 不再递归（否则会一路渲染到 RangeError 栈溢出）
  if (nest.path.has(comment.id)) return null;
  // 限深：当前评论已到 maxDepth，不再展开它自己的回复
  if (nest.level >= maxDepth) return null;
  const path = new Set(nest.path);
  path.add(comment.id);
  return (
    <ThreadView
      comment={comment}
      depth={nest.level + 1}
      ancestors={path}
      maxDepth={maxDepth}
      defaultExpanded={defaultExpanded}
      showReply={showReply}
    />
  );
}

/** 单条回复（复用同一 renderCommentActions / renderNested 槽 → 嵌套回复也能点赞/继续回复） */
function ReplyNode({
  reply,
  maxDepth,
  showReply,
}: {
  reply: Comment;
  maxDepth: number;
  showReply: boolean;
}) {
  const nest = useContext(NestContext);
  const actions = useCommentSlot("renderCommentActions", reply);
  const nestedSlot = useCommentSlot("renderNested", reply);
  // 与 NestedSection 的双保险：到限深或命中环时连子回复槽都不展开
  const deeper =
    nest.level < maxDepth && !nest.path.has(reply.id) ? nestedSlot : [];
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
  ancestors,
  maxDepth,
  defaultExpanded,
  showReply,
}: {
  comment: Comment;
  /** 本次渲染的 replies 所在层级（顶层评论的回复为 1） */
  depth: number;
  /** 当前评论的祖先 id 集合（含自身 id），供下一层环检测 */
  ancestors: ReadonlySet<string>;
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
            // 子回复的层级信息：level = depth，path = 祖先集合（含本评论 id）
            <NestContext.Provider
              key={reply.id}
              value={{ level: depth, path: ancestors }}
            >
              <ReplyNode reply={reply} maxDepth={maxDepth} showReply={showReply} />
            </NestContext.Provider>
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
          // 深度由 NestContext 沿层级递增（顶层 0 → 子级 1 → 孙级 2 …），不再写死 1
          <NestedSection
            comment={comment}
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
`,Wx=`import React from "react";
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
`,tS={engage:"互动",organize:"组织",compose:"编辑"},Cu=["engage","organize","compose"],xu=Object.assign({"/src/custom-plugins/CopyPlugin/doc.json":rm,"/src/custom-plugins/CountPlugin/doc.json":cm,"/src/custom-plugins/FavoritePlugin/doc.json":lm,"/src/custom-plugins/FilterPlugin/doc.json":dm,"/src/custom-plugins/LikePlugin/doc.json":Jd,"/src/custom-plugins/LocationPlugin/doc.json":am,"/src/custom-plugins/LoginPromptPlugin/doc.json":hm,"/src/custom-plugins/ModerationPlugin/doc.json":pm,"/src/custom-plugins/PinPlugin/doc.json":sm,"/src/custom-plugins/ReactionPlugin/doc.json":im,"/src/custom-plugins/ReportPlugin/doc.json":tm,"/src/custom-plugins/RichComposerPlugin/doc.json":nm,"/src/custom-plugins/SearchPlugin/doc.json":mm,"/src/custom-plugins/SharePlugin/doc.json":om,"/src/custom-plugins/SortPlugin/doc.json":Zd,"/src/custom-plugins/ThreadPlugin/doc.json":em,"/src/custom-plugins/TimestampPlugin/doc.json":um}),Su=Object.assign({"/src/custom-plugins/CopyPlugin/create.tsx":jx,"/src/custom-plugins/CountPlugin/create.tsx":Ex,"/src/custom-plugins/FavoritePlugin/create.tsx":bx,"/src/custom-plugins/FilterPlugin/create.tsx":Tx,"/src/custom-plugins/LikePlugin/create.tsx":Nx,"/src/custom-plugins/LocationPlugin/create.tsx":$x,"/src/custom-plugins/LoginPromptPlugin/create.tsx":Mx,"/src/custom-plugins/ModerationPlugin/create.tsx":Dx,"/src/custom-plugins/PinPlugin/create.tsx":Lx,"/src/custom-plugins/ReactionPlugin/create.tsx":zx,"/src/custom-plugins/ReportPlugin/create.tsx":Ox,"/src/custom-plugins/RichComposerPlugin/create.tsx":Ix,"/src/custom-plugins/SearchPlugin/create.tsx":Ax,"/src/custom-plugins/SharePlugin/create.tsx":Fx,"/src/custom-plugins/SortPlugin/create.tsx":Ux,"/src/custom-plugins/ThreadPlugin/create.tsx":Bx,"/src/custom-plugins/TimestampPlugin/create.tsx":Wx}),ym=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function Hx(e){const n=Object.keys(Su).find(r=>ym(r)===e),t=n?Su[n]:"",o=/priority:\s*(\d+)/.exec(t);return o?Number(o[1]):0}function Vx(e){const n=Object.keys(xu).find(t=>ym(t)===e);return n?xu[n]:{name:e,description:"（缺少 doc.json）"}}const Qx=[{dir:"LikePlugin",group:"engage",make:()=>Kr()},{dir:"ThreadPlugin",group:"engage",make:()=>qr({maxDepth:3})},{dir:"ReportPlugin",group:"engage",make:()=>Ns()},{dir:"SharePlugin",group:"engage",make:()=>$s()},{dir:"CopyPlugin",group:"engage",make:()=>Ms()},{dir:"ReactionPlugin",group:"engage",make:()=>Ds()},{dir:"FavoritePlugin",group:"engage",make:()=>Ls()},{dir:"PinPlugin",group:"engage",make:()=>zs()},{dir:"LocationPlugin",group:"engage",make:()=>Jr()},{dir:"TimestampPlugin",group:"engage",make:()=>Os()},{dir:"SortPlugin",group:"organize",make:()=>Gr()},{dir:"CountPlugin",group:"organize",make:()=>Is()},{dir:"FilterPlugin",group:"organize",make:()=>As()},{dir:"SearchPlugin",group:"organize",make:()=>Fs()},{dir:"ModerationPlugin",group:"organize",make:()=>Us()},{dir:"RichComposerPlugin",group:"compose",make:()=>Xr({features:{emoji:!0,image:!0,mention:!0}})},{dir:"LoginPromptPlugin",group:"compose",make:()=>Bs()}],El=Qx.map(e=>{const n=Vx(e.dir);return{dir:e.dir,factory:`create${e.dir}Plugin`,group:e.group,priority:Hx(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>Cu.indexOf(e.group)-Cu.indexOf(n.group)||n.priority-e.priority),oS=El.map(e=>e.dir),Yx=y.lazy(()=>Es(()=>import("./HomePage-BZTc8N-4.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),Kx=y.lazy(()=>Es(()=>import("./PluginsPage-DojxXbSB.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),Gx=y.lazy(()=>Es(()=>import("./ScenariosPage-BdmVARta.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),qx={pkg:"vane-comment",brand:"v",subtitle:"评论区 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${El.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"4 plates"}],routes:[{path:"/",element:c.jsx(Yx,{})},{path:"/plugins",element:c.jsx(Kx,{})},{path:"/scenarios",element:c.jsx(Gx,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:gx.map(e=>({key:e,label:jl[e].label})),entries:Rl,detail:(e,n)=>c.jsx(Rx,{entry:e,order:n})},footer:[`${El.length} PLUGINS · 4 PLATES`,`${Rl.length} DEMOS · COMMENT CORE`]};function Xx(){return c.jsx(nh,{config:qx})}function Jx(e){const n=[];if(!e)return{problems:["体检根节点不存在"],checked:0};const t=Array.from(e.querySelectorAll('[data-testid="comment-item"]')).filter(s=>{var a;return!((a=s.parentElement)!=null&&a.closest('[data-testid="comment-item"]'))});let o=0;const r=e.getBoundingClientRect();if(!(r.width!==0||r.height!==0||t.some(s=>{const a=s.getBoundingClientRect();return a.width!==0||a.height!==0})))return{problems:[],checked:0};for(const s of t){o+=1;const a=s.getBoundingClientRect();if(a.width===0||a.height===0){n.push(`零尺寸评论项（${a.width}×${a.height}）`);continue}const u=a.left-r.left,d=a.top-r.top;(u<-.5||d<-.5)&&n.push(`负坐标评论项（left=${u.toFixed(1)}, top=${d.toFixed(1)}）`),(a.right-r.right>1||a.bottom-r.bottom>1)&&n.push(`越界评论项（超出宿主右/下边界 ${(a.right-r.right).toFixed(1)}/${(a.bottom-r.bottom).toFixed(1)}px）`)}for(let s=0;s<t.length;s+=1)for(let a=s+1;a<t.length;a+=1){const u=t[s].getBoundingClientRect(),d=t[a].getBoundingClientRect();u.left<d.right-1&&d.left<u.right-1&&u.top<d.bottom-1&&d.top<u.bottom-1&&n.push(`评论项重叠：顶层第 ${s+1} 与第 ${a+1} 项`)}const l=t.reduce((s,a)=>Math.max(s,a.getBoundingClientRect().bottom-r.top),0);return t.length&&e.scrollHeight+1<l&&n.push(`容器未撑开：scrollHeight=${e.scrollHeight} 小于内容底边 ${l.toFixed(1)}`),{problems:Array.from(new Set(n)),checked:o}}const wu={id:"u-me",name:"我",avatar:void 0};function nt({sortMode:e}){const[n,t]=Ye.useState(()=>ne()),o=Ye.useCallback(s=>{t(a=>a.map(u=>u.id===s?{...u,liked:!u.liked,likeCount:(u.likeCount??0)+(u.liked?-1:1)}:u))},[]),r=Ye.useCallback((s,a)=>{t(u=>u.map(d=>d.id===s?{...d,replies:[{id:`${s}-r${Date.now()}`,author:wu,content:a,createdAt:Date.now(),likeCount:0,liked:!1},...d.replies??[]],replyCount:(d.replyCount??0)+1}:d))},[]),i=Ye.useCallback(s=>{t(a=>[{id:`c-${Date.now()}`,author:wu,content:s,createdAt:Date.now(),likeCount:0,liked:!1},...a])},[]),l=Ye.useMemo(()=>q(K,[Kr(),Gr({modes:["newest","oldest","hottest","mostLiked"],defaultMode:"newest"}),qr({maxDepth:3}),Xr({features:{emoji:!0,image:!0,mention:!0}}),Ns(),$s(),Ms(),Ds(),Ls(),zs(),Jr(),Os(),Is(),As(),Fs(),Bs()]),[]);return c.jsx(l,{comments:n,defaultSortMode:e??"newest",onLike:o,onReply:r,onSubmit:i,onReport:()=>{},onFavorite:()=>{},onPin:()=>{},onReact:()=>{},onLogin:()=>{},mentions:ee})}const Pu=()=>new Promise(e=>setTimeout(e,0));async function cn(e){const n=document.createElement("div");n.style.cssText="position:fixed;left:0;top:0;width:520px;background:#fff",document.body.appendChild(n);const t=zd(n);return Ie.flushSync(()=>t.render(e)),await Pu(),{host:n,root:t,q:o=>n.querySelector(o),qa:o=>Array.from(n.querySelectorAll(o)),click:async o=>{const r=n.querySelector(o);if(!r)throw new Error(`找不到元素 ${o}`);Ie.flushSync(()=>r.click()),await Pu()}}}function ji(e){return Array.from(e.querySelectorAll('[data-testid="comment-item"]')).filter(n=>{var t;return!((t=n.parentElement)!=null&&t.closest('[data-testid="comment-item"]'))}).map(n=>{var t,o;return((o=(t=n.querySelector(".vc-meta span"))==null?void 0:t.textContent)==null?void 0:o.trim())??""})}async function Zx(){var o,r,i,l,s;const e=[];let n=0;const t=(a,u)=>{n+=1,document.title=`SELFTEST RUNNING ${n}`,u||e.push(a)};{const a=await cn(c.jsx(nt,{sortMode:"newest"})),u=ji(a.host);t("渲染：顶层评论项 = 5",u.length===5);const m=a.qa('[data-testid="comment-item"]').filter(f=>{var v;return!!((v=f.parentElement)!=null&&v.closest('[data-testid="comment-item"]'))});t("楼中楼：含嵌套回复（≥2）",m.length>=2),t("富编辑：渲染评论框 textarea",!!a.q("textarea")),t("几何体检：评论项无越界/负坐标/零尺寸/重叠",Jx(a.host).problems.length===0),Ie.flushSync(()=>a.root.unmount()),a.host.remove()}{const a=await cn(c.jsx(nt,{sortMode:"newest"})),u=a.q('[data-testid="comment-like"]');t("点赞：首个评论项渲染点赞按钮",!!u);const d=((o=u==null?void 0:u.textContent)==null?void 0:o.trim())??"";await a.click('[data-testid="comment-like"]');const m=((i=(r=a.q('[data-testid="comment-like"]'))==null?void 0:r.textContent)==null?void 0:i.trim())??"";t(`点赞：点击后计数变化（${d} → ${m}）`,d!==m&&m!==""),Ie.flushSync(()=>a.root.unmount()),a.host.remove()}{const a=await cn(c.jsx(nt,{sortMode:"newest"}));t("排序 newest：首条为最新（Monica）",ji(a.host)[0]==="Monica"),Ie.flushSync(()=>a.root.unmount()),a.host.remove();const u=await cn(c.jsx(nt,{sortMode:"oldest"}));t("排序 oldest：首条为最早（Ross）",ji(u.host)[0]==="Ross"),Ie.flushSync(()=>u.root.unmount()),u.host.remove()}{const a=await cn(c.jsx(nt,{sortMode:"newest"}));t("新插件：举报按钮渲染",!!a.q('[data-testid="comment-report"]')),t("新插件：分享按钮渲染",!!a.q('[data-testid="comment-share"]')),t("新插件：复制按钮渲染",!!a.q('[data-testid="comment-copy"]')),t("新插件：多表情反应渲染",!!a.q('[data-testid="comment-reaction"]')),t("新插件：收藏按钮渲染",!!a.q('[data-testid="comment-favorite"]')),t("新插件：置顶按钮渲染",!!a.q('[data-testid="comment-pin"]')),t("新插件：绝对时间渲染",!!a.q('[data-testid="comment-timestamp"]')),t("新插件：计数条渲染（含「条评论」）",(((l=a.q('[data-testid="comment-count"]'))==null?void 0:l.textContent)??"").includes("条评论")),t("新插件：筛选栏渲染",!!a.q('[data-testid="comment-filter"]')),t("新插件：搜索框渲染",!!a.q('[data-testid="comment-search"]')),t("新插件：未登录引导渲染",!!a.q('[data-testid="comment-login-prompt"]')),Ie.flushSync(()=>a.root.unmount()),a.host.remove()}{const a=[{id:"m1",author:{id:"a",name:"A"},content:[{type:"text",value:"这是一段广告内容请加微信"}],createdAt:Date.now(),likeCount:0}],u=q(K,[Us({words:["广告","加微信"]})]),d=await cn(c.jsx(u,{comments:a})),m=((s=d.q(".vc-content"))==null?void 0:s.textContent)??"";t("审核：敏感词被脱敏（广告/加微信 不再出现）",!m.includes("广告")&&!m.includes("加微信")),Ie.flushSync(()=>d.root.unmount()),d.host.remove();const f=[{id:"l1",author:{id:"a",name:"A"},content:[{type:"text",value:"好店推荐"}],createdAt:Date.now(),likeCount:0,location:"上海"}],v=q(K,[Jr()]),C=await cn(c.jsx(v,{comments:f}));t("地理位置：含 location 时渲染 📍 标",!!C.q('[data-testid="comment-location"]')),Ie.flushSync(()=>C.root.unmount()),C.host.remove()}{const a=await cn(c.jsx(nt,{sortMode:"newest"})),u=a.qa(".vc-actions");t("布局：存在操作行容器 .vc-actions",u.length>0),t("布局：操作行开启 flex-wrap（避免按钮挤成竖排）",u.every(f=>(f.style.flexWrap||"").toLowerCase()==="wrap"));const d=u.reduce((f,v)=>f+v.children.length,0),m=u.reduce((f,v)=>f+Array.from(v.children).filter(C=>C.style.flexShrink==="0").length,0);t("布局：操作行子项均 flex-shrink:0（不挤压）",d>0&&m===d),Ie.flushSync(()=>a.root.unmount()),a.host.remove()}return{total:n,passed:n-e.length,failed:e}}async function eS(){document.title="SELFTEST RUNNING";try{const e=await Zx();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Ei.createRoot(document.getElementById("root")).render(c.jsx(Xx,{}));typeof location<"u"&&location.search.includes("selftest=1")&&eS();export{xx as C,Rl as D,Cu as G,_l as L,ee as M,El as P,Gr as a,qr as b,Kr as c,Xr as d,K as e,ne as f,oS as g,tS as h,Jx as i,c as j,Ns as k,$s as l,Is as m,Us as n,Bs as o,Ms as p,Ds as q,y as r,Ls as s,zs as t,Jr as u,Os as v,q as w,As as x,Fs as y};
