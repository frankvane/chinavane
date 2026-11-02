var Ip=Object.defineProperty;var Fp=(e,n,t)=>n in e?Ip(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ou=(e,n,t)=>Fp(e,typeof n!="symbol"?n+"":n,t);function Up(e,n){for(var t=0;t<n.length;t++){const o=n[t];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const l=Object.getOwnPropertyDescriptor(o,r);l&&Object.defineProperty(e,r,l.get?l:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();function Wp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fs={exports:{}},Jr={},Us={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),Vp=Symbol.for("react.portal"),Hp=Symbol.for("react.fragment"),qp=Symbol.for("react.strict_mode"),Bp=Symbol.for("react.profiler"),Qp=Symbol.for("react.provider"),Kp=Symbol.for("react.context"),Yp=Symbol.for("react.forward_ref"),Xp=Symbol.for("react.suspense"),Gp=Symbol.for("react.memo"),Jp=Symbol.for("react.lazy"),ru=Symbol.iterator;function Zp(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var Ws={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vs=Object.assign,Hs={};function Tt(e,n,t){this.props=e,this.context=n,this.refs=Hs,this.updater=t||Ws}Tt.prototype.isReactComponent={};Tt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Tt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qs(){}qs.prototype=Tt.prototype;function Yi(e,n,t){this.props=e,this.context=n,this.refs=Hs,this.updater=t||Ws}var Xi=Yi.prototype=new qs;Xi.constructor=Yi;Vs(Xi,Tt.prototype);Xi.isPureReactComponent=!0;var lu=Array.isArray,Bs=Object.prototype.hasOwnProperty,Gi={current:null},Qs={key:!0,ref:!0,__self:!0,__source:!0};function Ks(e,n,t){var o,r={},l=null,i=null;if(n!=null)for(o in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)Bs.call(n,o)&&!Qs.hasOwnProperty(o)&&(r[o]=n[o]);var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}if(e&&e.defaultProps)for(o in u=e.defaultProps,u)r[o]===void 0&&(r[o]=u[o]);return{$$typeof:No,type:e,key:l,ref:i,props:r,_owner:Gi.current}}function ef(e,n){return{$$typeof:No,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ji(e){return typeof e=="object"&&e!==null&&e.$$typeof===No}function nf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var iu=/\/+/g;function hl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?nf(""+e.key):n.toString(36)}function pr(e,n,t,o,r){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case No:case Vp:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+hl(i,0):o,lu(r)?(t="",e!=null&&(t=e.replace(iu,"$&/")+"/"),pr(r,n,t,"",function(s){return s})):r!=null&&(Ji(r)&&(r=ef(r,t+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(iu,"$&/")+"/")+e)),n.push(r)),1;if(i=0,o=o===""?".":o+":",lu(e))for(var u=0;u<e.length;u++){l=e[u];var a=o+hl(l,u);i+=pr(l,n,t,a,r)}else if(a=Zp(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=o+hl(l,u++),i+=pr(l,n,t,a,r);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Wo(e,n,t){if(e==null)return e;var o=[],r=0;return pr(e,o,"","",function(l){return n.call(t,l,r++)}),o}function tf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},fr={transition:null},of={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:fr,ReactCurrentOwner:Gi};function Ys(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Wo,forEach:function(e,n,t){Wo(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Wo(e,function(){n++}),n},toArray:function(e){return Wo(e,function(n){return n})||[]},only:function(e){if(!Ji(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Tt;L.Fragment=Hp;L.Profiler=Bp;L.PureComponent=Yi;L.StrictMode=qp;L.Suspense=Xp;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=of;L.act=Ys;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Vs({},e.props),r=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=Gi.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)Bs.call(n,a)&&!Qs.hasOwnProperty(a)&&(o[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}return{$$typeof:No,type:e.type,key:r,ref:l,props:o,_owner:i}};L.createContext=function(e){return e={$$typeof:Kp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qp,_context:e},e.Consumer=e};L.createElement=Ks;L.createFactory=function(e){var n=Ks.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Yp,render:e}};L.isValidElement=Ji;L.lazy=function(e){return{$$typeof:Jp,_payload:{_status:-1,_result:e},_init:tf}};L.memo=function(e,n){return{$$typeof:Gp,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=fr.transition;fr.transition={};try{e()}finally{fr.transition=n}};L.unstable_act=Ys;L.useCallback=function(e,n){return he.current.useCallback(e,n)};L.useContext=function(e){return he.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return he.current.useDeferredValue(e)};L.useEffect=function(e,n){return he.current.useEffect(e,n)};L.useId=function(){return he.current.useId()};L.useImperativeHandle=function(e,n,t){return he.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return he.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return he.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return he.current.useMemo(e,n)};L.useReducer=function(e,n,t){return he.current.useReducer(e,n,t)};L.useRef=function(e){return he.current.useRef(e)};L.useState=function(e){return he.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return he.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return he.current.useTransition()};L.version="18.3.1";Us.exports=L;var S=Us.exports;const Do=Wp(S),rf=Up({__proto__:null,default:Do},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf=S,af=Symbol.for("react.element"),uf=Symbol.for("react.fragment"),sf=Object.prototype.hasOwnProperty,cf=lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,df={key:!0,ref:!0,__self:!0,__source:!0};function Xs(e,n,t){var o,r={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(o in n)sf.call(n,o)&&!df.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)r[o]===void 0&&(r[o]=n[o]);return{$$typeof:af,type:e,key:l,ref:i,props:r,_owner:cf.current}}Jr.Fragment=uf;Jr.jsx=Xs;Jr.jsxs=Xs;Fs.exports=Jr;var m=Fs.exports,Kl={},Gs={exports:{}},je={},Js={exports:{}},Zs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(j,N){var D=j.length;j.push(N);e:for(;0<D;){var A=D-1>>>1,H=j[A];if(0<r(H,N))j[A]=N,j[D]=H,D=A;else break e}}function t(j){return j.length===0?null:j[0]}function o(j){if(j.length===0)return null;var N=j[0],D=j.pop();if(D!==N){j[0]=D;e:for(var A=0,H=j.length,qe=H>>>1;A<qe;){var we=2*(A+1)-1,Ln=j[we],zn=we+1,Uo=j[zn];if(0>r(Ln,D))zn<H&&0>r(Uo,Ln)?(j[A]=Uo,j[zn]=D,A=zn):(j[A]=Ln,j[we]=D,A=we);else if(zn<H&&0>r(Uo,D))j[A]=Uo,j[zn]=D,A=zn;else break e}}return N}function r(j,N){var D=j.sortIndex-N.sortIndex;return D!==0?D:j.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var a=[],s=[],d=1,c=null,f=3,v=!1,C=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(j){for(var N=t(s);N!==null;){if(N.callback===null)o(s);else if(N.startTime<=j)o(s),N.sortIndex=N.expirationTime,n(a,N);else break;N=t(s)}}function y(j){if(x=!1,h(j),!C)if(t(a)!==null)C=!0,Ot(P);else{var N=t(s);N!==null&&Lt(y,N.startTime-j)}}function P(j,N){C=!1,x&&(x=!1,g(T),T=-1),v=!0;var D=f;try{for(h(N),c=t(a);c!==null&&(!(c.expirationTime>N)||j&&!M());){var A=c.callback;if(typeof A=="function"){c.callback=null,f=c.priorityLevel;var H=A(c.expirationTime<=N);N=e.unstable_now(),typeof H=="function"?c.callback=H:c===t(a)&&o(a),h(N)}else o(a);c=t(a)}if(c!==null)var qe=!0;else{var we=t(s);we!==null&&Lt(y,we.startTime-N),qe=!1}return qe}finally{c=null,f=D,v=!1}}var k=!1,_=null,T=-1,b=5,$=-1;function M(){return!(e.unstable_now()-$<b)}function F(){if(_!==null){var j=e.unstable_now();$=j;var N=!0;try{N=_(!0,j)}finally{N?He():(k=!1,_=null)}}else k=!1}var He;if(typeof p=="function")He=function(){p(F)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,Mt=bt.port2;bt.port1.onmessage=F,He=function(){Mt.postMessage(null)}}else He=function(){w(F,0)};function Ot(j){_=j,k||(k=!0,He())}function Lt(j,N){T=w(function(){j(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){C||v||(C=!0,Ot(P))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(j){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var D=f;f=N;try{return j()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,N){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var D=f;f=j;try{return N()}finally{f=D}},e.unstable_scheduleCallback=function(j,N,D){var A=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?A+D:A):D=A,j){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=D+H,j={id:d++,callback:N,priorityLevel:j,startTime:D,expirationTime:H,sortIndex:-1},D>A?(j.sortIndex=D,n(s,j),t(a)===null&&j===t(s)&&(x?(g(T),T=-1):x=!0,Lt(y,D-A))):(j.sortIndex=H,n(a,j),C||v||(C=!0,Ot(P))),j},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(j){var N=f;return function(){var D=f;f=N;try{return j.apply(this,arguments)}finally{f=D}}}})(Zs);Js.exports=Zs;var pf=Js.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff=S,Te=pf;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ec=new Set,po={};function Xn(e,n){xt(e,n),xt(e+"Capture",n)}function xt(e,n){for(po[e]=n,e=0;e<n.length;e++)ec.add(n[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,mf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,au={},uu={};function gf(e){return Yl.call(uu,e)?!0:Yl.call(au,e)?!1:mf.test(e)?uu[e]=!0:(au[e]=!0,!1)}function hf(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yf(e,n,t,o){if(n===null||typeof n>"u"||hf(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,t,o,r,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zi=/[\-:]([a-z])/g;function ea(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Zi,ea);ae[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Zi,ea);ae[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Zi,ea);ae[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function na(e,n,t,o){var r=ae.hasOwnProperty(n)?ae[n]:null;(r!==null?r.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(yf(n,t,r,o)&&(t=null),o||r===null?gf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,o=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var un=ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),tt=Symbol.for("react.portal"),ot=Symbol.for("react.fragment"),ta=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),nc=Symbol.for("react.provider"),tc=Symbol.for("react.context"),oa=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),ra=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),oc=Symbol.for("react.offscreen"),su=Symbol.iterator;function zt(e){return e===null||typeof e!="object"?null:(e=su&&e[su]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,yl;function Kt(e){if(yl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);yl=n&&n[1]||""}return`
`+yl+e}var vl=!1;function Cl(e,n){if(!e||vl)return"";vl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var o=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){o=s}e.call(n.prototype)}else{try{throw Error()}catch(s){o=s}e()}}catch(s){if(s&&o&&typeof s.stack=="string"){for(var r=s.stack.split(`
`),l=o.stack.split(`
`),i=r.length-1,u=l.length-1;1<=i&&0<=u&&r[i]!==l[u];)u--;for(;1<=i&&0<=u;i--,u--)if(r[i]!==l[u]){if(i!==1||u!==1)do if(i--,u--,0>u||r[i]!==l[u]){var a=`
`+r[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=u);break}}}finally{vl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Kt(e):""}function vf(e){switch(e.tag){case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ot:return"Fragment";case tt:return"Portal";case Xl:return"Profiler";case ta:return"StrictMode";case Gl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tc:return(e.displayName||"Context")+".Consumer";case nc:return(e._context.displayName||"Context")+".Provider";case oa:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ra:return n=e.displayName||null,n!==null?n:Zl(e.type)||"Memo";case fn:n=e._payload,e=e._init;try{return Zl(e(n))}catch{}}return null}function Cf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(n);case 8:return n===ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xf(e){var n=rc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ho(e){e._valueTracker||(e._valueTracker=xf(e))}function lc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=rc(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ei(e,n){var t=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function cu(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=Rn(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ic(e,n){n=n.checked,n!=null&&na(e,"checked",n,!1)}function ni(e,n){ic(e,n);var t=Rn(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ti(e,n.type,t):n.hasOwnProperty("defaultValue")&&ti(e,n.type,Rn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function du(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ti(e,n,t){(n!=="number"||kr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Yt=Array.isArray;function mt(e,n,t,o){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&o&&(e[t].defaultSelected=!0)}else{for(t=""+Rn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function oi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(Yt(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Rn(t)}}function ac(e,n){var t=Rn(n.value),o=Rn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function fu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ri(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?uc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qo,sc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function fo(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sf=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(e){Sf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),eo[n]=eo[e]})});function cc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||eo.hasOwnProperty(e)&&eo[e]?(""+n).trim():n+"px"}function dc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,r=cc(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,r):e[t]=r}}var Pf=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function li(e,n){if(n){if(Pf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function ii(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function la(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,gt=null,ht=null;function mu(e){if(e=Oo(e)){if(typeof ui!="function")throw Error(E(280));var n=e.stateNode;n&&(n=ol(n),ui(e.stateNode,e.type,n))}}function pc(e){gt?ht?ht.push(e):ht=[e]:gt=e}function fc(){if(gt){var e=gt,n=ht;if(ht=gt=null,mu(e),n)for(e=0;e<n.length;e++)mu(n[e])}}function mc(e,n){return e(n)}function gc(){}var xl=!1;function hc(e,n,t){if(xl)return e(n,t);xl=!0;try{return mc(e,n,t)}finally{xl=!1,(gt!==null||ht!==null)&&(gc(),fc())}}function mo(e,n){var t=e.stateNode;if(t===null)return null;var o=ol(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var si=!1;if(on)try{var At={};Object.defineProperty(At,"passive",{get:function(){si=!0}}),window.addEventListener("test",At,At),window.removeEventListener("test",At,At)}catch{si=!1}function wf(e,n,t,o,r,l,i,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(d){this.onError(d)}}var no=!1,_r=null,Er=!1,ci=null,kf={onError:function(e){no=!0,_r=e}};function _f(e,n,t,o,r,l,i,u,a){no=!1,_r=null,wf.apply(kf,arguments)}function Ef(e,n,t,o,r,l,i,u,a){if(_f.apply(this,arguments),no){if(no){var s=_r;no=!1,_r=null}else throw Error(E(198));Er||(Er=!0,ci=s)}}function Gn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function yc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function gu(e){if(Gn(e)!==e)throw Error(E(188))}function Tf(e){var n=e.alternate;if(!n){if(n=Gn(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,o=n;;){var r=t.return;if(r===null)break;var l=r.alternate;if(l===null){if(o=r.return,o!==null){t=o;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===t)return gu(r),e;if(l===o)return gu(r),n;l=l.sibling}throw Error(E(188))}if(t.return!==o.return)t=r,o=l;else{for(var i=!1,u=r.child;u;){if(u===t){i=!0,t=r,o=l;break}if(u===o){i=!0,o=r,t=l;break}u=u.sibling}if(!i){for(u=l.child;u;){if(u===t){i=!0,t=l,o=r;break}if(u===o){i=!0,o=l,t=r;break}u=u.sibling}if(!i)throw Error(E(189))}}if(t.alternate!==o)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function vc(e){return e=Tf(e),e!==null?Cc(e):null}function Cc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Cc(e);if(n!==null)return n;e=e.sibling}return null}var xc=Te.unstable_scheduleCallback,hu=Te.unstable_cancelCallback,jf=Te.unstable_shouldYield,Rf=Te.unstable_requestPaint,X=Te.unstable_now,$f=Te.unstable_getCurrentPriorityLevel,ia=Te.unstable_ImmediatePriority,Sc=Te.unstable_UserBlockingPriority,Tr=Te.unstable_NormalPriority,Nf=Te.unstable_LowPriority,Pc=Te.unstable_IdlePriority,Zr=null,Ye=null;function Df(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Zr,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Of,bf=Math.log,Mf=Math.LN2;function Of(e){return e>>>=0,e===0?32:31-(bf(e)/Mf|0)|0}var Bo=64,Qo=4194304;function Xt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jr(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,r=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var u=i&~r;u!==0?o=Xt(u):(l&=i,l!==0&&(o=Xt(l)))}else i=t&~r,i!==0?o=Xt(i):l!==0&&(o=Xt(l));if(o===0)return 0;if(n!==0&&n!==o&&!(n&r)&&(r=o&-o,l=n&-n,r>=l||r===16&&(l&4194240)!==0))return n;if(o&4&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-Fe(n),r=1<<t,o|=e[t],n&=~r;return o}function Lf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Fe(l),u=1<<i,a=r[i];a===-1?(!(u&t)||u&o)&&(r[i]=Lf(u,n)):a<=n&&(e.expiredLanes|=u),l&=~u}}function di(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wc(){var e=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),e}function Sl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function bo(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Fe(n),e[n]=t}function Af(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Fe(t),l=1<<r;n[r]=0,o[r]=-1,e[r]=-1,t&=~l}}function aa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-Fe(t),r=1<<o;r&n|e[o]&n&&(e[o]|=n),t&=~r}}var I=0;function kc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _c,ua,Ec,Tc,jc,pi=!1,Ko=[],xn=null,Sn=null,Pn=null,go=new Map,ho=new Map,gn=[],If="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(e,n){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(n.pointerId)}}function It(e,n,t,o,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:l,targetContainers:[r]},n!==null&&(n=Oo(n),n!==null&&ua(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Ff(e,n,t,o,r){switch(n){case"focusin":return xn=It(xn,e,n,t,o,r),!0;case"dragenter":return Sn=It(Sn,e,n,t,o,r),!0;case"mouseover":return Pn=It(Pn,e,n,t,o,r),!0;case"pointerover":var l=r.pointerId;return go.set(l,It(go.get(l)||null,e,n,t,o,r)),!0;case"gotpointercapture":return l=r.pointerId,ho.set(l,It(ho.get(l)||null,e,n,t,o,r)),!0}return!1}function Rc(e){var n=Fn(e.target);if(n!==null){var t=Gn(n);if(t!==null){if(n=t.tag,n===13){if(n=yc(t),n!==null){e.blockedOn=n,jc(e.priority,function(){Ec(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=fi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);ai=o,t.target.dispatchEvent(o),ai=null}else return n=Oo(t),n!==null&&ua(n),e.blockedOn=t,!1;n.shift()}return!0}function vu(e,n,t){mr(e)&&t.delete(n)}function Uf(){pi=!1,xn!==null&&mr(xn)&&(xn=null),Sn!==null&&mr(Sn)&&(Sn=null),Pn!==null&&mr(Pn)&&(Pn=null),go.forEach(vu),ho.forEach(vu)}function Ft(e,n){e.blockedOn===n&&(e.blockedOn=null,pi||(pi=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Uf)))}function yo(e){function n(r){return Ft(r,e)}if(0<Ko.length){Ft(Ko[0],e);for(var t=1;t<Ko.length;t++){var o=Ko[t];o.blockedOn===e&&(o.blockedOn=null)}}for(xn!==null&&Ft(xn,e),Sn!==null&&Ft(Sn,e),Pn!==null&&Ft(Pn,e),go.forEach(n),ho.forEach(n),t=0;t<gn.length;t++)o=gn[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<gn.length&&(t=gn[0],t.blockedOn===null);)Rc(t),t.blockedOn===null&&gn.shift()}var yt=un.ReactCurrentBatchConfig,Rr=!0;function Wf(e,n,t,o){var r=I,l=yt.transition;yt.transition=null;try{I=1,sa(e,n,t,o)}finally{I=r,yt.transition=l}}function Vf(e,n,t,o){var r=I,l=yt.transition;yt.transition=null;try{I=4,sa(e,n,t,o)}finally{I=r,yt.transition=l}}function sa(e,n,t,o){if(Rr){var r=fi(e,n,t,o);if(r===null)Nl(e,n,o,$r,t),yu(e,o);else if(Ff(r,e,n,t,o))o.stopPropagation();else if(yu(e,o),n&4&&-1<If.indexOf(e)){for(;r!==null;){var l=Oo(r);if(l!==null&&_c(l),l=fi(e,n,t,o),l===null&&Nl(e,n,o,$r,t),l===r)break;r=l}r!==null&&o.stopPropagation()}else Nl(e,n,o,null,t)}}var $r=null;function fi(e,n,t,o){if($r=null,e=la(o),e=Fn(e),e!==null)if(n=Gn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=yc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $r=e,null}function $c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($f()){case ia:return 1;case Sc:return 4;case Tr:case Nf:return 16;case Pc:return 536870912;default:return 16}default:return 16}}var yn=null,ca=null,gr=null;function Nc(){if(gr)return gr;var e,n=ca,t=n.length,o,r="value"in yn?yn.value:yn.textContent,l=r.length;for(e=0;e<t&&n[e]===r[e];e++);var i=t-e;for(o=1;o<=i&&n[t-o]===r[l-o];o++);return gr=r.slice(e,1<o?1-o:void 0)}function hr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function Cu(){return!1}function Re(e){function n(t,o,r,l,i){this._reactName=t,this._targetInst=r,this.type=o,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Yo:Cu,this.isPropagationStopped=Cu,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},da=Re(jt),Mo=K({},jt,{view:0,detail:0}),Hf=Re(Mo),Pl,wl,Ut,el=K({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ut&&(Ut&&e.type==="mousemove"?(Pl=e.screenX-Ut.screenX,wl=e.screenY-Ut.screenY):wl=Pl=0,Ut=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),xu=Re(el),qf=K({},el,{dataTransfer:0}),Bf=Re(qf),Qf=K({},Mo,{relatedTarget:0}),kl=Re(Qf),Kf=K({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),Yf=Re(Kf),Xf=K({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gf=Re(Xf),Jf=K({},jt,{data:0}),Su=Re(Jf),Zf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=nm[e])?!!n[e]:!1}function pa(){return tm}var om=K({},Mo,{key:function(e){if(e.key){var n=Zf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?em[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pa,charCode:function(e){return e.type==="keypress"?hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rm=Re(om),lm=K({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=Re(lm),im=K({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pa}),am=Re(im),um=K({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),sm=Re(um),cm=K({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=Re(cm),pm=[9,13,27,32],fa=on&&"CompositionEvent"in window,to=null;on&&"documentMode"in document&&(to=document.documentMode);var fm=on&&"TextEvent"in window&&!to,Dc=on&&(!fa||to&&8<to&&11>=to),wu=" ",ku=!1;function bc(e,n){switch(e){case"keyup":return pm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rt=!1;function mm(e,n){switch(e){case"compositionend":return Mc(n);case"keypress":return n.which!==32?null:(ku=!0,wu);case"textInput":return e=n.data,e===wu&&ku?null:e;default:return null}}function gm(e,n){if(rt)return e==="compositionend"||!fa&&bc(e,n)?(e=Nc(),gr=ca=yn=null,rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dc&&n.locale!=="ko"?null:n.data;default:return null}}var hm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hm[e.type]:n==="textarea"}function Oc(e,n,t,o){pc(o),n=Nr(n,"onChange"),0<n.length&&(t=new da("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var oo=null,vo=null;function ym(e){Bc(e,0)}function nl(e){var n=at(e);if(lc(n))return e}function vm(e,n){if(e==="change")return n}var Lc=!1;if(on){var _l;if(on){var El="oninput"in document;if(!El){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),El=typeof Eu.oninput=="function"}_l=El}else _l=!1;Lc=_l&&(!document.documentMode||9<document.documentMode)}function Tu(){oo&&(oo.detachEvent("onpropertychange",zc),vo=oo=null)}function zc(e){if(e.propertyName==="value"&&nl(vo)){var n=[];Oc(n,vo,e,la(e)),hc(ym,n)}}function Cm(e,n,t){e==="focusin"?(Tu(),oo=n,vo=t,oo.attachEvent("onpropertychange",zc)):e==="focusout"&&Tu()}function xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(vo)}function Sm(e,n){if(e==="click")return nl(n)}function Pm(e,n){if(e==="input"||e==="change")return nl(n)}function wm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var We=typeof Object.is=="function"?Object.is:wm;function Co(e,n){if(We(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var r=t[o];if(!Yl.call(n,r)||!We(e[r],n[r]))return!1}return!0}function ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ru(e,n){var t=ju(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ju(t)}}function Ac(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ac(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ic(){for(var e=window,n=kr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=kr(e.document)}return n}function ma(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function km(e){var n=Ic(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ac(t.ownerDocument.documentElement,t)){if(o!==null&&ma(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,l=Math.min(o.start,r);o=o.end===void 0?l:Math.min(o.end,r),!e.extend&&l>o&&(r=o,o=l,l=r),r=Ru(t,l);var i=Ru(t,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),l>o?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _m=on&&"documentMode"in document&&11>=document.documentMode,lt=null,mi=null,ro=null,gi=!1;function $u(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;gi||lt==null||lt!==kr(o)||(o=lt,"selectionStart"in o&&ma(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&Co(ro,o)||(ro=o,o=Nr(mi,"onSelect"),0<o.length&&(n=new da("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=lt)))}function Xo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var it={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},Tl={},Fc={};on&&(Fc=document.createElement("div").style,"AnimationEvent"in window||(delete it.animationend.animation,delete it.animationiteration.animation,delete it.animationstart.animation),"TransitionEvent"in window||delete it.transitionend.transition);function tl(e){if(Tl[e])return Tl[e];if(!it[e])return e;var n=it[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Fc)return Tl[e]=n[t];return e}var Uc=tl("animationend"),Wc=tl("animationiteration"),Vc=tl("animationstart"),Hc=tl("transitionend"),qc=new Map,Nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,n){qc.set(e,n),Xn(n,[e])}for(var jl=0;jl<Nu.length;jl++){var Rl=Nu[jl],Em=Rl.toLowerCase(),Tm=Rl[0].toUpperCase()+Rl.slice(1);Nn(Em,"on"+Tm)}Nn(Uc,"onAnimationEnd");Nn(Wc,"onAnimationIteration");Nn(Vc,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(Hc,"onTransitionEnd");xt("onMouseEnter",["mouseout","mouseover"]);xt("onMouseLeave",["mouseout","mouseover"]);xt("onPointerEnter",["pointerout","pointerover"]);xt("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gt));function Du(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,Ef(o,n,void 0,e),e.currentTarget=null}function Bc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],r=o.event;o=o.listeners;e:{var l=void 0;if(n)for(var i=o.length-1;0<=i;i--){var u=o[i],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&r.isPropagationStopped())break e;Du(r,u,s),l=a}else for(i=0;i<o.length;i++){if(u=o[i],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&r.isPropagationStopped())break e;Du(r,u,s),l=a}}}if(Er)throw e=ci,Er=!1,ci=null,e}function W(e,n){var t=n[xi];t===void 0&&(t=n[xi]=new Set);var o=e+"__bubble";t.has(o)||(Qc(n,e,2,!1),t.add(o))}function $l(e,n,t){var o=0;n&&(o|=4),Qc(t,e,o,n)}var Go="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[Go]){e[Go]=!0,ec.forEach(function(t){t!=="selectionchange"&&(jm.has(t)||$l(t,!1,e),$l(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Go]||(n[Go]=!0,$l("selectionchange",!1,n))}}function Qc(e,n,t,o){switch($c(n)){case 1:var r=Wf;break;case 4:r=Vf;break;default:r=sa}t=r.bind(null,n,t,e),r=void 0,!si||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Nl(e,n,t,o,r){var l=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var u=o.stateNode.containerInfo;if(u===r||u.nodeType===8&&u.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;i=i.return}for(;u!==null;){if(i=Fn(u),i===null)return;if(a=i.tag,a===5||a===6){o=l=i;continue e}u=u.parentNode}}o=o.return}hc(function(){var s=l,d=la(t),c=[];e:{var f=qc.get(e);if(f!==void 0){var v=da,C=e;switch(e){case"keypress":if(hr(t)===0)break e;case"keydown":case"keyup":v=rm;break;case"focusin":C="focus",v=kl;break;case"focusout":C="blur",v=kl;break;case"beforeblur":case"afterblur":v=kl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Bf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=am;break;case Uc:case Wc:case Vc:v=Yf;break;case Hc:v=sm;break;case"scroll":v=Hf;break;case"wheel":v=dm;break;case"copy":case"cut":case"paste":v=Gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Pu}var x=(n&4)!==0,w=!x&&e==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var p=s,h;p!==null;){h=p;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,g!==null&&(y=mo(p,g),y!=null&&x.push(So(p,y,h)))),w)break;p=p.return}0<x.length&&(f=new v(f,C,null,t,d),c.push({event:f,listeners:x}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&t!==ai&&(C=t.relatedTarget||t.fromElement)&&(Fn(C)||C[rn]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(C=t.relatedTarget||t.toElement,v=s,C=C?Fn(C):null,C!==null&&(w=Gn(C),C!==w||C.tag!==5&&C.tag!==6)&&(C=null)):(v=null,C=s),v!==C)){if(x=xu,y="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Pu,y="onPointerLeave",g="onPointerEnter",p="pointer"),w=v==null?f:at(v),h=C==null?f:at(C),f=new x(y,p+"leave",v,t,d),f.target=w,f.relatedTarget=h,y=null,Fn(d)===s&&(x=new x(g,p+"enter",C,t,d),x.target=h,x.relatedTarget=w,y=x),w=y,v&&C)n:{for(x=v,g=C,p=0,h=x;h;h=nt(h))p++;for(h=0,y=g;y;y=nt(y))h++;for(;0<p-h;)x=nt(x),p--;for(;0<h-p;)g=nt(g),h--;for(;p--;){if(x===g||g!==null&&x===g.alternate)break n;x=nt(x),g=nt(g)}x=null}else x=null;v!==null&&bu(c,f,v,x,!1),C!==null&&w!==null&&bu(c,w,C,x,!0)}}e:{if(f=s?at(s):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var P=vm;else if(_u(f))if(Lc)P=Pm;else{P=xm;var k=Cm}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Sm);if(P&&(P=P(e,s))){Oc(c,P,t,d);break e}k&&k(e,f,s),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&ti(f,"number",f.value)}switch(k=s?at(s):window,e){case"focusin":(_u(k)||k.contentEditable==="true")&&(lt=k,mi=s,ro=null);break;case"focusout":ro=mi=lt=null;break;case"mousedown":gi=!0;break;case"contextmenu":case"mouseup":case"dragend":gi=!1,$u(c,t,d);break;case"selectionchange":if(_m)break;case"keydown":case"keyup":$u(c,t,d)}var _;if(fa)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else rt?bc(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(Dc&&t.locale!=="ko"&&(rt||T!=="onCompositionStart"?T==="onCompositionEnd"&&rt&&(_=Nc()):(yn=d,ca="value"in yn?yn.value:yn.textContent,rt=!0)),k=Nr(s,T),0<k.length&&(T=new Su(T,e,null,t,d),c.push({event:T,listeners:k}),_?T.data=_:(_=Mc(t),_!==null&&(T.data=_)))),(_=fm?mm(e,t):gm(e,t))&&(s=Nr(s,"onBeforeInput"),0<s.length&&(d=new Su("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:s}),d.data=_))}Bc(c,n)})}function So(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Nr(e,n){for(var t=n+"Capture",o=[];e!==null;){var r=e,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=mo(e,t),l!=null&&o.unshift(So(e,l,r)),l=mo(e,n),l!=null&&o.push(So(e,l,r))),e=e.return}return o}function nt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bu(e,n,t,o,r){for(var l=n._reactName,i=[];t!==null&&t!==o;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===o)break;u.tag===5&&s!==null&&(u=s,r?(a=mo(t,l),a!=null&&i.unshift(So(t,a,u))):r||(a=mo(t,l),a!=null&&i.push(So(t,a,u)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Rm=/\r\n?/g,$m=/\u0000|\uFFFD/g;function Mu(e){return(typeof e=="string"?e:""+e).replace(Rm,`
`).replace($m,"")}function Jo(e,n,t){if(n=Mu(n),Mu(e)!==n&&t)throw Error(E(425))}function Dr(){}var hi=null,yi=null;function vi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ci=typeof setTimeout=="function"?setTimeout:void 0,Nm=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,Dm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch(bm)}:Ci;function bm(e){setTimeout(function(){throw e})}function Dl(e,n){var t=n,o=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(o===0){e.removeChild(r),yo(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=r}while(t);yo(n)}function wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Lu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Rt=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Rt,Po="__reactProps$"+Rt,rn="__reactContainer$"+Rt,xi="__reactEvents$"+Rt,Mm="__reactListeners$"+Rt,Om="__reactHandles$"+Rt;function Fn(e){var n=e[Ke];if(n)return n;for(var t=e.parentNode;t;){if(n=t[rn]||t[Ke]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Lu(e);e!==null;){if(t=e[Ke])return t;e=Lu(e)}return n}e=t,t=e.parentNode}return null}function Oo(e){return e=e[Ke]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function at(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ol(e){return e[Po]||null}var Si=[],ut=-1;function Dn(e){return{current:e}}function V(e){0>ut||(e.current=Si[ut],Si[ut]=null,ut--)}function U(e,n){ut++,Si[ut]=e.current,e.current=n}var $n={},fe=Dn($n),xe=Dn(!1),qn=$n;function St(e,n){var t=e.type.contextTypes;if(!t)return $n;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in t)r[l]=n[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Se(e){return e=e.childContextTypes,e!=null}function br(){V(xe),V(fe)}function zu(e,n,t){if(fe.current!==$n)throw Error(E(168));U(fe,n),U(xe,t)}function Kc(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var r in o)if(!(r in n))throw Error(E(108,Cf(e)||"Unknown",r));return K({},t,o)}function Mr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,qn=fe.current,U(fe,e),U(xe,xe.current),!0}function Au(e,n,t){var o=e.stateNode;if(!o)throw Error(E(169));t?(e=Kc(e,n,qn),o.__reactInternalMemoizedMergedChildContext=e,V(xe),V(fe),U(fe,e)):V(xe),U(xe,t)}var Je=null,rl=!1,bl=!1;function Yc(e){Je===null?Je=[e]:Je.push(e)}function Lm(e){rl=!0,Yc(e)}function bn(){if(!bl&&Je!==null){bl=!0;var e=0,n=I;try{var t=Je;for(I=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Je=null,rl=!1}catch(r){throw Je!==null&&(Je=Je.slice(e+1)),xc(ia,bn),r}finally{I=n,bl=!1}}return null}var st=[],ct=0,Or=null,Lr=0,$e=[],Ne=0,Bn=null,en=1,nn="";function An(e,n){st[ct++]=Lr,st[ct++]=Or,Or=e,Lr=n}function Xc(e,n,t){$e[Ne++]=en,$e[Ne++]=nn,$e[Ne++]=Bn,Bn=e;var o=en;e=nn;var r=32-Fe(o)-1;o&=~(1<<r),t+=1;var l=32-Fe(n)+r;if(30<l){var i=r-r%5;l=(o&(1<<i)-1).toString(32),o>>=i,r-=i,en=1<<32-Fe(n)+r|t<<r|o,nn=l+e}else en=1<<l|t<<r|o,nn=e}function ga(e){e.return!==null&&(An(e,1),Xc(e,1,0))}function ha(e){for(;e===Or;)Or=st[--ct],st[ct]=null,Lr=st[--ct],st[ct]=null;for(;e===Bn;)Bn=$e[--Ne],$e[Ne]=null,nn=$e[--Ne],$e[Ne]=null,en=$e[--Ne],$e[Ne]=null}var Ee=null,_e=null,q=!1,Ie=null;function Gc(e,n){var t=De(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Iu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ee=e,_e=wn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ee=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Bn!==null?{id:en,overflow:nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=De(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ee=e,_e=null,!0):!1;default:return!1}}function Pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wi(e){if(q){var n=_e;if(n){var t=n;if(!Iu(e,n)){if(Pi(e))throw Error(E(418));n=wn(t.nextSibling);var o=Ee;n&&Iu(e,n)?Gc(o,t):(e.flags=e.flags&-4097|2,q=!1,Ee=e)}}else{if(Pi(e))throw Error(E(418));e.flags=e.flags&-4097|2,q=!1,Ee=e}}}function Fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Zo(e){if(e!==Ee)return!1;if(!q)return Fu(e),q=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!vi(e.type,e.memoizedProps)),n&&(n=_e)){if(Pi(e))throw Jc(),Error(E(418));for(;n;)Gc(e,n),n=wn(n.nextSibling)}if(Fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_e=wn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=Ee?wn(e.stateNode.nextSibling):null;return!0}function Jc(){for(var e=_e;e;)e=wn(e.nextSibling)}function Pt(){_e=Ee=null,q=!1}function ya(e){Ie===null?Ie=[e]:Ie.push(e)}var zm=un.ReactCurrentBatchConfig;function Wt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var o=t.stateNode}if(!o)throw Error(E(147,e));var r=o,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var u=r.refs;i===null?delete u[l]:u[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function er(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Uu(e){var n=e._init;return n(e._payload)}function Zc(e){function n(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function t(g,p){if(!e)return null;for(;p!==null;)n(g,p),p=p.sibling;return null}function o(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function r(g,p){return g=Tn(g,p),g.index=0,g.sibling=null,g}function l(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function u(g,p,h,y){return p===null||p.tag!==6?(p=Fl(h,g.mode,y),p.return=g,p):(p=r(p,h),p.return=g,p)}function a(g,p,h,y){var P=h.type;return P===ot?d(g,p,h.props.children,y,h.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===fn&&Uu(P)===p.type)?(y=r(p,h.props),y.ref=Wt(g,p,h),y.return=g,y):(y=wr(h.type,h.key,h.props,null,g.mode,y),y.ref=Wt(g,p,h),y.return=g,y)}function s(g,p,h,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Ul(h,g.mode,y),p.return=g,p):(p=r(p,h.children||[]),p.return=g,p)}function d(g,p,h,y,P){return p===null||p.tag!==7?(p=Hn(h,g.mode,y,P),p.return=g,p):(p=r(p,h),p.return=g,p)}function c(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Fl(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vo:return h=wr(p.type,p.key,p.props,null,g.mode,h),h.ref=Wt(g,null,p),h.return=g,h;case tt:return p=Ul(p,g.mode,h),p.return=g,p;case fn:var y=p._init;return c(g,y(p._payload),h)}if(Yt(p)||zt(p))return p=Hn(p,g.mode,h,null),p.return=g,p;er(g,p)}return null}function f(g,p,h,y){var P=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return P!==null?null:u(g,p,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vo:return h.key===P?a(g,p,h,y):null;case tt:return h.key===P?s(g,p,h,y):null;case fn:return P=h._init,f(g,p,P(h._payload),y)}if(Yt(h)||zt(h))return P!==null?null:d(g,p,h,y,null);er(g,h)}return null}function v(g,p,h,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(h)||null,u(p,g,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vo:return g=g.get(y.key===null?h:y.key)||null,a(p,g,y,P);case tt:return g=g.get(y.key===null?h:y.key)||null,s(p,g,y,P);case fn:var k=y._init;return v(g,p,h,k(y._payload),P)}if(Yt(y)||zt(y))return g=g.get(h)||null,d(p,g,y,P,null);er(p,y)}return null}function C(g,p,h,y){for(var P=null,k=null,_=p,T=p=0,b=null;_!==null&&T<h.length;T++){_.index>T?(b=_,_=null):b=_.sibling;var $=f(g,_,h[T],y);if($===null){_===null&&(_=b);break}e&&_&&$.alternate===null&&n(g,_),p=l($,p,T),k===null?P=$:k.sibling=$,k=$,_=b}if(T===h.length)return t(g,_),q&&An(g,T),P;if(_===null){for(;T<h.length;T++)_=c(g,h[T],y),_!==null&&(p=l(_,p,T),k===null?P=_:k.sibling=_,k=_);return q&&An(g,T),P}for(_=o(g,_);T<h.length;T++)b=v(_,g,T,h[T],y),b!==null&&(e&&b.alternate!==null&&_.delete(b.key===null?T:b.key),p=l(b,p,T),k===null?P=b:k.sibling=b,k=b);return e&&_.forEach(function(M){return n(g,M)}),q&&An(g,T),P}function x(g,p,h,y){var P=zt(h);if(typeof P!="function")throw Error(E(150));if(h=P.call(h),h==null)throw Error(E(151));for(var k=P=null,_=p,T=p=0,b=null,$=h.next();_!==null&&!$.done;T++,$=h.next()){_.index>T?(b=_,_=null):b=_.sibling;var M=f(g,_,$.value,y);if(M===null){_===null&&(_=b);break}e&&_&&M.alternate===null&&n(g,_),p=l(M,p,T),k===null?P=M:k.sibling=M,k=M,_=b}if($.done)return t(g,_),q&&An(g,T),P;if(_===null){for(;!$.done;T++,$=h.next())$=c(g,$.value,y),$!==null&&(p=l($,p,T),k===null?P=$:k.sibling=$,k=$);return q&&An(g,T),P}for(_=o(g,_);!$.done;T++,$=h.next())$=v(_,g,T,$.value,y),$!==null&&(e&&$.alternate!==null&&_.delete($.key===null?T:$.key),p=l($,p,T),k===null?P=$:k.sibling=$,k=$);return e&&_.forEach(function(F){return n(g,F)}),q&&An(g,T),P}function w(g,p,h,y){if(typeof h=="object"&&h!==null&&h.type===ot&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Vo:e:{for(var P=h.key,k=p;k!==null;){if(k.key===P){if(P=h.type,P===ot){if(k.tag===7){t(g,k.sibling),p=r(k,h.props.children),p.return=g,g=p;break e}}else if(k.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===fn&&Uu(P)===k.type){t(g,k.sibling),p=r(k,h.props),p.ref=Wt(g,k,h),p.return=g,g=p;break e}t(g,k);break}else n(g,k);k=k.sibling}h.type===ot?(p=Hn(h.props.children,g.mode,y,h.key),p.return=g,g=p):(y=wr(h.type,h.key,h.props,null,g.mode,y),y.ref=Wt(g,p,h),y.return=g,g=y)}return i(g);case tt:e:{for(k=h.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){t(g,p.sibling),p=r(p,h.children||[]),p.return=g,g=p;break e}else{t(g,p);break}else n(g,p);p=p.sibling}p=Ul(h,g.mode,y),p.return=g,g=p}return i(g);case fn:return k=h._init,w(g,p,k(h._payload),y)}if(Yt(h))return C(g,p,h,y);if(zt(h))return x(g,p,h,y);er(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(t(g,p.sibling),p=r(p,h),p.return=g,g=p):(t(g,p),p=Fl(h,g.mode,y),p.return=g,g=p),i(g)):t(g,p)}return w}var wt=Zc(!0),ed=Zc(!1),zr=Dn(null),Ar=null,dt=null,va=null;function Ca(){va=dt=Ar=null}function xa(e){var n=zr.current;V(zr),e._currentValue=n}function ki(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function vt(e,n){Ar=e,va=dt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ce=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(va!==e)if(e={context:e,memoizedValue:n,next:null},dt===null){if(Ar===null)throw Error(E(308));dt=e,Ar.dependencies={lanes:0,firstContext:e}}else dt=dt.next=e;return n}var Un=null;function Sa(e){Un===null?Un=[e]:Un.push(e)}function nd(e,n,t,o){var r=n.interleaved;return r===null?(t.next=t,Sa(n)):(t.next=r.next,r.next=t),n.interleaved=t,ln(e,o)}function ln(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var mn=!1;function Pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function td(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kn(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,z&2){var r=o.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),o.pending=n,ln(e,t)}return r=o.interleaved,r===null?(n.next=n,Sa(o)):(n.next=r.next,r.next=n),o.interleaved=n,ln(e,t)}function yr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,aa(e,t)}}function Wu(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var r=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?r=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?r=l=n:l=l.next=n}else r=l=n;t={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ir(e,n,t,o){var r=e.updateQueue;mn=!1;var l=r.firstBaseUpdate,i=r.lastBaseUpdate,u=r.shared.pending;if(u!==null){r.shared.pending=null;var a=u,s=a.next;a.next=null,i===null?l=s:i.next=s,i=a;var d=e.alternate;d!==null&&(d=d.updateQueue,u=d.lastBaseUpdate,u!==i&&(u===null?d.firstBaseUpdate=s:u.next=s,d.lastBaseUpdate=a))}if(l!==null){var c=r.baseState;i=0,d=s=a=null,u=l;do{var f=u.lane,v=u.eventTime;if((o&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var C=e,x=u;switch(f=n,v=t,x.tag){case 1:if(C=x.payload,typeof C=="function"){c=C.call(v,c,f);break e}c=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=x.payload,f=typeof C=="function"?C.call(v,c,f):C,f==null)break e;c=K({},c,f);break e;case 2:mn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[u]:f.push(u))}else v={eventTime:v,lane:f,tag:u.tag,payload:u.payload,callback:u.callback,next:null},d===null?(s=d=v,a=c):d=d.next=v,i|=f;if(u=u.next,u===null){if(u=r.shared.pending,u===null)break;f=u,u=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(a=c),r.baseState=a,r.firstBaseUpdate=s,r.lastBaseUpdate=d,n=r.shared.interleaved,n!==null){r=n;do i|=r.lane,r=r.next;while(r!==n)}else l===null&&(r.shared.lanes=0);Kn|=i,e.lanes=i,e.memoizedState=c}}function Vu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],r=o.callback;if(r!==null){if(o.callback=null,o=t,typeof r!="function")throw Error(E(191,r));r.call(o)}}}var Lo={},Xe=Dn(Lo),wo=Dn(Lo),ko=Dn(Lo);function Wn(e){if(e===Lo)throw Error(E(174));return e}function wa(e,n){switch(U(ko,n),U(wo,e),U(Xe,Lo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ri(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ri(n,e)}V(Xe),U(Xe,n)}function kt(){V(Xe),V(wo),V(ko)}function od(e){Wn(ko.current);var n=Wn(Xe.current),t=ri(n,e.type);n!==t&&(U(wo,e),U(Xe,t))}function ka(e){wo.current===e&&(V(Xe),V(wo))}var B=Dn(0);function Fr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ml=[];function _a(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var vr=un.ReactCurrentDispatcher,Ol=un.ReactCurrentBatchConfig,Qn=0,Q=null,ne=null,oe=null,Ur=!1,lo=!1,_o=0,Am=0;function ue(){throw Error(E(321))}function Ea(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!We(e[t],n[t]))return!1;return!0}function Ta(e,n,t,o,r,l){if(Qn=l,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,vr.current=e===null||e.memoizedState===null?Wm:Vm,e=t(o,r),lo){l=0;do{if(lo=!1,_o=0,25<=l)throw Error(E(301));l+=1,oe=ne=null,n.updateQueue=null,vr.current=Hm,e=t(o,r)}while(lo)}if(vr.current=Wr,n=ne!==null&&ne.next!==null,Qn=0,oe=ne=Q=null,Ur=!1,n)throw Error(E(300));return e}function ja(){var e=_o!==0;return _o=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Q.memoizedState=oe=e:oe=oe.next=e,oe}function Oe(){if(ne===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var n=oe===null?Q.memoizedState:oe.next;if(n!==null)oe=n,ne=e;else{if(e===null)throw Error(E(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?Q.memoizedState=oe=e:oe=oe.next=e}return oe}function Eo(e,n){return typeof n=="function"?n(e):n}function Ll(e){var n=Oe(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var o=ne,r=o.baseQueue,l=t.pending;if(l!==null){if(r!==null){var i=r.next;r.next=l.next,l.next=i}o.baseQueue=r=l,t.pending=null}if(r!==null){l=r.next,o=o.baseState;var u=i=null,a=null,s=l;do{var d=s.lane;if((Qn&d)===d)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),o=s.hasEagerState?s.eagerState:e(o,s.action);else{var c={lane:d,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=c,i=o):a=a.next=c,Q.lanes|=d,Kn|=d}s=s.next}while(s!==null&&s!==l);a===null?i=o:a.next=u,We(o,n.memoizedState)||(Ce=!0),n.memoizedState=o,n.baseState=i,n.baseQueue=a,t.lastRenderedState=o}if(e=t.interleaved,e!==null){r=e;do l=r.lane,Q.lanes|=l,Kn|=l,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function zl(e){var n=Oe(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var o=t.dispatch,r=t.pending,l=n.memoizedState;if(r!==null){t.pending=null;var i=r=r.next;do l=e(l,i.action),i=i.next;while(i!==r);We(l,n.memoizedState)||(Ce=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,o]}function rd(){}function ld(e,n){var t=Q,o=Oe(),r=n(),l=!We(o.memoizedState,r);if(l&&(o.memoizedState=r,Ce=!0),o=o.queue,Ra(ud.bind(null,t,o,e),[e]),o.getSnapshot!==n||l||oe!==null&&oe.memoizedState.tag&1){if(t.flags|=2048,To(9,ad.bind(null,t,o,r,n),void 0,null),re===null)throw Error(E(349));Qn&30||id(t,n,r)}return r}function id(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ad(e,n,t,o){n.value=t,n.getSnapshot=o,sd(n)&&cd(e)}function ud(e,n,t){return t(function(){sd(n)&&cd(e)})}function sd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!We(e,t)}catch{return!0}}function cd(e){var n=ln(e,1);n!==null&&Ue(n,e,1,-1)}function Hu(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:e},n.queue=e,e=e.dispatch=Um.bind(null,Q,e),[n.memoizedState,e]}function To(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function dd(){return Oe().memoizedState}function Cr(e,n,t,o){var r=Qe();Q.flags|=e,r.memoizedState=To(1|n,t,void 0,o===void 0?null:o)}function ll(e,n,t,o){var r=Oe();o=o===void 0?null:o;var l=void 0;if(ne!==null){var i=ne.memoizedState;if(l=i.destroy,o!==null&&Ea(o,i.deps)){r.memoizedState=To(n,t,l,o);return}}Q.flags|=e,r.memoizedState=To(1|n,t,l,o)}function qu(e,n){return Cr(8390656,8,e,n)}function Ra(e,n){return ll(2048,8,e,n)}function pd(e,n){return ll(4,2,e,n)}function fd(e,n){return ll(4,4,e,n)}function md(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function gd(e,n,t){return t=t!=null?t.concat([e]):null,ll(4,4,md.bind(null,n,e),t)}function $a(){}function hd(e,n){var t=Oe();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&Ea(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function yd(e,n){var t=Oe();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&Ea(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function vd(e,n,t){return Qn&21?(We(t,n)||(t=wc(),Q.lanes|=t,Kn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=t)}function Im(e,n){var t=I;I=t!==0&&4>t?t:4,e(!0);var o=Ol.transition;Ol.transition={};try{e(!1),n()}finally{I=t,Ol.transition=o}}function Cd(){return Oe().memoizedState}function Fm(e,n,t){var o=En(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},xd(e))Sd(n,t);else if(t=nd(e,n,t,o),t!==null){var r=ge();Ue(t,e,o,r),Pd(t,n,o)}}function Um(e,n,t){var o=En(e),r={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(xd(e))Sd(n,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,u=l(i,t);if(r.hasEagerState=!0,r.eagerState=u,We(u,i)){var a=n.interleaved;a===null?(r.next=r,Sa(n)):(r.next=a.next,a.next=r),n.interleaved=r;return}}catch{}finally{}t=nd(e,n,r,o),t!==null&&(r=ge(),Ue(t,e,o,r),Pd(t,n,o))}}function xd(e){var n=e.alternate;return e===Q||n!==null&&n===Q}function Sd(e,n){lo=Ur=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Pd(e,n,t){if(t&4194240){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,aa(e,t)}}var Wr={readContext:Me,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Wm={readContext:Me,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:qu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Cr(4194308,4,md.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Cr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Cr(4,2,e,n)},useMemo:function(e,n){var t=Qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=Qe();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=Fm.bind(null,Q,e),[o.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:Hu,useDebugValue:$a,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Hu(!1),n=e[0];return e=Im.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=Q,r=Qe();if(q){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),re===null)throw Error(E(349));Qn&30||id(o,n,t)}r.memoizedState=t;var l={value:t,getSnapshot:n};return r.queue=l,qu(ud.bind(null,o,l,e),[e]),o.flags|=2048,To(9,ad.bind(null,o,l,t,n),void 0,null),t},useId:function(){var e=Qe(),n=re.identifierPrefix;if(q){var t=nn,o=en;t=(o&~(1<<32-Fe(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=_o++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Am++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Vm={readContext:Me,useCallback:hd,useContext:Me,useEffect:Ra,useImperativeHandle:gd,useInsertionEffect:pd,useLayoutEffect:fd,useMemo:yd,useReducer:Ll,useRef:dd,useState:function(){return Ll(Eo)},useDebugValue:$a,useDeferredValue:function(e){var n=Oe();return vd(n,ne.memoizedState,e)},useTransition:function(){var e=Ll(Eo)[0],n=Oe().memoizedState;return[e,n]},useMutableSource:rd,useSyncExternalStore:ld,useId:Cd,unstable_isNewReconciler:!1},Hm={readContext:Me,useCallback:hd,useContext:Me,useEffect:Ra,useImperativeHandle:gd,useInsertionEffect:pd,useLayoutEffect:fd,useMemo:yd,useReducer:zl,useRef:dd,useState:function(){return zl(Eo)},useDebugValue:$a,useDeferredValue:function(e){var n=Oe();return ne===null?n.memoizedState=e:vd(n,ne.memoizedState,e)},useTransition:function(){var e=zl(Eo)[0],n=Oe().memoizedState;return[e,n]},useMutableSource:rd,useSyncExternalStore:ld,useId:Cd,unstable_isNewReconciler:!1};function ze(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function _i(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:K({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var il={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=ge(),r=En(e),l=tn(o,r);l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,r),n!==null&&(Ue(n,e,r,o),yr(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=ge(),r=En(e),l=tn(o,r);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,r),n!==null&&(Ue(n,e,r,o),yr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),o=En(e),r=tn(t,o);r.tag=2,n!=null&&(r.callback=n),n=kn(e,r,o),n!==null&&(Ue(n,e,o,t),yr(n,e,o))}};function Bu(e,n,t,o,r,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,i):n.prototype&&n.prototype.isPureReactComponent?!Co(t,o)||!Co(r,l):!0}function wd(e,n,t){var o=!1,r=$n,l=n.contextType;return typeof l=="object"&&l!==null?l=Me(l):(r=Se(n)?qn:fe.current,o=n.contextTypes,l=(o=o!=null)?St(e,r):$n),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=il,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),n}function Qu(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&il.enqueueReplaceState(n,n.state,null)}function Ei(e,n,t,o){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Pa(e);var l=n.contextType;typeof l=="object"&&l!==null?r.context=Me(l):(l=Se(n)?qn:fe.current,r.context=St(e,l)),r.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(_i(e,n,l,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&il.enqueueReplaceState(r,r.state,null),Ir(e,t,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function _t(e,n){try{var t="",o=n;do t+=vf(o),o=o.return;while(o);var r=t}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:r,digest:null}}function Al(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ti(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var qm=typeof WeakMap=="function"?WeakMap:Map;function kd(e,n,t){t=tn(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){Hr||(Hr=!0,zi=o),Ti(e,n)},t}function _d(e,n,t){t=tn(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=n.value;t.payload=function(){return o(r)},t.callback=function(){Ti(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Ti(e,n),typeof o!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Ku(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new qm;var r=new Set;o.set(n,r)}else r=o.get(n),r===void 0&&(r=new Set,o.set(n,r));r.has(t)||(r.add(t),e=lg.bind(null,e,n,t),n.then(e,e))}function Yu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Xu(e,n,t,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=tn(-1,1),n.tag=2,kn(t,n,1))),t.lanes|=1),e)}var Bm=un.ReactCurrentOwner,Ce=!1;function me(e,n,t,o){n.child=e===null?ed(n,null,t,o):wt(n,e.child,t,o)}function Gu(e,n,t,o,r){t=t.render;var l=n.ref;return vt(n,r),o=Ta(e,n,t,o,l,r),t=ja(),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,an(e,n,r)):(q&&t&&ga(n),n.flags|=1,me(e,n,o,r),n.child)}function Ju(e,n,t,o,r){if(e===null){var l=t.type;return typeof l=="function"&&!Aa(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Ed(e,n,l,o,r)):(e=wr(t.type,null,o,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&r)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:Co,t(i,o)&&e.ref===n.ref)return an(e,n,r)}return n.flags|=1,e=Tn(l,o),e.ref=n.ref,e.return=n,n.child=e}function Ed(e,n,t,o,r){if(e!==null){var l=e.memoizedProps;if(Co(l,o)&&e.ref===n.ref)if(Ce=!1,n.pendingProps=o=l,(e.lanes&r)!==0)e.flags&131072&&(Ce=!0);else return n.lanes=e.lanes,an(e,n,r)}return ji(e,n,t,o,r)}function Td(e,n,t){var o=n.pendingProps,r=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(ft,ke),ke|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,U(ft,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:t,U(ft,ke),ke|=o}else l!==null?(o=l.baseLanes|t,n.memoizedState=null):o=t,U(ft,ke),ke|=o;return me(e,n,r,t),n.child}function jd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ji(e,n,t,o,r){var l=Se(t)?qn:fe.current;return l=St(n,l),vt(n,r),t=Ta(e,n,t,o,l,r),o=ja(),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,an(e,n,r)):(q&&o&&ga(n),n.flags|=1,me(e,n,t,r),n.child)}function Zu(e,n,t,o,r){if(Se(t)){var l=!0;Mr(n)}else l=!1;if(vt(n,r),n.stateNode===null)xr(e,n),wd(n,t,o),Ei(n,t,o,r),o=!0;else if(e===null){var i=n.stateNode,u=n.memoizedProps;i.props=u;var a=i.context,s=t.contextType;typeof s=="object"&&s!==null?s=Me(s):(s=Se(t)?qn:fe.current,s=St(n,s));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";c||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==o||a!==s)&&Qu(n,i,o,s),mn=!1;var f=n.memoizedState;i.state=f,Ir(n,o,i,r),a=n.memoizedState,u!==o||f!==a||xe.current||mn?(typeof d=="function"&&(_i(n,t,d,o),a=n.memoizedState),(u=mn||Bu(n,t,u,o,f,a,s))?(c||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=a),i.props=o,i.state=a,i.context=s,o=u):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{i=n.stateNode,td(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:ze(n.type,u),i.props=s,c=n.pendingProps,f=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=Me(a):(a=Se(t)?qn:fe.current,a=St(n,a));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==c||f!==a)&&Qu(n,i,o,a),mn=!1,f=n.memoizedState,i.state=f,Ir(n,o,i,r);var C=n.memoizedState;u!==c||f!==C||xe.current||mn?(typeof v=="function"&&(_i(n,t,v,o),C=n.memoizedState),(s=mn||Bu(n,t,s,o,f,C,a)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,C,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,C,a)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=C),i.props=o,i.state=C,i.context=a,o=s):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),o=!1)}return Ri(e,n,t,o,l,r)}function Ri(e,n,t,o,r,l){jd(e,n);var i=(n.flags&128)!==0;if(!o&&!i)return r&&Au(n,t,!1),an(e,n,l);o=n.stateNode,Bm.current=n;var u=i&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&i?(n.child=wt(n,e.child,null,l),n.child=wt(n,null,u,l)):me(e,n,u,l),n.memoizedState=o.state,r&&Au(n,t,!0),n.child}function Rd(e){var n=e.stateNode;n.pendingContext?zu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&zu(e,n.context,!1),wa(e,n.containerInfo)}function es(e,n,t,o,r){return Pt(),ya(r),n.flags|=256,me(e,n,t,o),n.child}var $i={dehydrated:null,treeContext:null,retryLane:0};function Ni(e){return{baseLanes:e,cachePool:null,transitions:null}}function $d(e,n,t){var o=n.pendingProps,r=B.current,l=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(r&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),U(B,r&1),e===null)return wi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=o.children,e=o.fallback,l?(o=n.mode,l=n.child,i={mode:"hidden",children:i},!(o&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=sl(i,o,0,null),e=Hn(e,o,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Ni(t),n.memoizedState=$i,e):Na(n,i));if(r=e.memoizedState,r!==null&&(u=r.dehydrated,u!==null))return Qm(e,n,i,o,u,r,t);if(l){l=o.fallback,i=n.mode,r=e.child,u=r.sibling;var a={mode:"hidden",children:o.children};return!(i&1)&&n.child!==r?(o=n.child,o.childLanes=0,o.pendingProps=a,n.deletions=null):(o=Tn(r,a),o.subtreeFlags=r.subtreeFlags&14680064),u!==null?l=Tn(u,l):(l=Hn(l,i,t,null),l.flags|=2),l.return=n,o.return=n,o.sibling=l,n.child=o,o=l,l=n.child,i=e.child.memoizedState,i=i===null?Ni(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=$i,o}return l=e.child,e=l.sibling,o=Tn(l,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function Na(e,n){return n=sl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function nr(e,n,t,o){return o!==null&&ya(o),wt(n,e.child,null,t),e=Na(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qm(e,n,t,o,r,l,i){if(t)return n.flags&256?(n.flags&=-257,o=Al(Error(E(422))),nr(e,n,i,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=o.fallback,r=n.mode,o=sl({mode:"visible",children:o.children},r,0,null),l=Hn(l,r,i,null),l.flags|=2,o.return=n,l.return=n,o.sibling=l,n.child=o,n.mode&1&&wt(n,e.child,null,i),n.child.memoizedState=Ni(i),n.memoizedState=$i,l);if(!(n.mode&1))return nr(e,n,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var u=o.dgst;return o=u,l=Error(E(419)),o=Al(l,o,void 0),nr(e,n,i,o)}if(u=(i&e.childLanes)!==0,Ce||u){if(o=re,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,ln(e,r),Ue(o,e,r,-1))}return za(),o=Al(Error(E(421))),nr(e,n,i,o)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=ig.bind(null,e),r._reactRetry=n,null):(e=l.treeContext,_e=wn(r.nextSibling),Ee=n,q=!0,Ie=null,e!==null&&($e[Ne++]=en,$e[Ne++]=nn,$e[Ne++]=Bn,en=e.id,nn=e.overflow,Bn=n),n=Na(n,o.children),n.flags|=4096,n)}function ns(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ki(e.return,n,t)}function Il(e,n,t,o,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:r}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=t,l.tailMode=r)}function Nd(e,n,t){var o=n.pendingProps,r=o.revealOrder,l=o.tail;if(me(e,n,o.children,t),o=B.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ns(e,t,n);else if(e.tag===19)ns(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(U(B,o),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Fr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Il(n,!1,r,t,l);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Fr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Il(n,!0,t,null,l);break;case"together":Il(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function xr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function an(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Kn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=Tn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Tn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Km(e,n,t){switch(n.tag){case 3:Rd(n),Pt();break;case 5:od(n);break;case 1:Se(n.type)&&Mr(n);break;case 4:wa(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,r=n.memoizedProps.value;U(zr,o._currentValue),o._currentValue=r;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(U(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?$d(e,n,t):(U(B,B.current&1),e=an(e,n,t),e!==null?e.sibling:null);U(B,B.current&1);break;case 19:if(o=(t&n.childLanes)!==0,e.flags&128){if(o)return Nd(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),U(B,B.current),o)break;return null;case 22:case 23:return n.lanes=0,Td(e,n,t)}return an(e,n,t)}var Dd,Di,bd,Md;Dd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Di=function(){};bd=function(e,n,t,o){var r=e.memoizedProps;if(r!==o){e=n.stateNode,Wn(Xe.current);var l=null;switch(t){case"input":r=ei(e,r),o=ei(e,o),l=[];break;case"select":r=K({},r,{value:void 0}),o=K({},o,{value:void 0}),l=[];break;case"textarea":r=oi(e,r),o=oi(e,o),l=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Dr)}li(t,o);var i;t=null;for(s in r)if(!o.hasOwnProperty(s)&&r.hasOwnProperty(s)&&r[s]!=null)if(s==="style"){var u=r[s];for(i in u)u.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(po.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in o){var a=o[s];if(u=r!=null?r[s]:void 0,o.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(i in u)!u.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&u[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(l||(l=[]),l.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(po.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&W("scroll",e),l||u===a||(l=[])):(l=l||[]).push(s,a))}t&&(l=l||[]).push("style",t);var s=l;(n.updateQueue=s)&&(n.flags|=4)}};Md=function(e,n,t,o){t!==o&&(n.flags|=4)};function Vt(e,n){if(!q)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function Ym(e,n,t){var o=n.pendingProps;switch(ha(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return Se(n.type)&&br(),se(n),null;case 3:return o=n.stateNode,kt(),V(xe),V(fe),_a(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Zo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ie!==null&&(Fi(Ie),Ie=null))),Di(e,n),se(n),null;case 5:ka(n);var r=Wn(ko.current);if(t=n.type,e!==null&&n.stateNode!=null)bd(e,n,t,o,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(E(166));return se(n),null}if(e=Wn(Xe.current),Zo(n)){o=n.stateNode,t=n.type;var l=n.memoizedProps;switch(o[Ke]=n,o[Po]=l,e=(n.mode&1)!==0,t){case"dialog":W("cancel",o),W("close",o);break;case"iframe":case"object":case"embed":W("load",o);break;case"video":case"audio":for(r=0;r<Gt.length;r++)W(Gt[r],o);break;case"source":W("error",o);break;case"img":case"image":case"link":W("error",o),W("load",o);break;case"details":W("toggle",o);break;case"input":cu(o,l),W("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},W("invalid",o);break;case"textarea":pu(o,l),W("invalid",o)}li(t,l),r=null;for(var i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="children"?typeof u=="string"?o.textContent!==u&&(l.suppressHydrationWarning!==!0&&Jo(o.textContent,u,e),r=["children",u]):typeof u=="number"&&o.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Jo(o.textContent,u,e),r=["children",""+u]):po.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&W("scroll",o)}switch(t){case"input":Ho(o),du(o,l,!0);break;case"textarea":Ho(o),fu(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=Dr)}o=r,n.updateQueue=o,o!==null&&(n.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(t,{is:o.is}):(e=i.createElement(t),t==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,t),e[Ke]=n,e[Po]=o,Dd(e,n,!1,!1),n.stateNode=e;e:{switch(i=ii(t,o),t){case"dialog":W("cancel",e),W("close",e),r=o;break;case"iframe":case"object":case"embed":W("load",e),r=o;break;case"video":case"audio":for(r=0;r<Gt.length;r++)W(Gt[r],e);r=o;break;case"source":W("error",e),r=o;break;case"img":case"image":case"link":W("error",e),W("load",e),r=o;break;case"details":W("toggle",e),r=o;break;case"input":cu(e,o),r=ei(e,o),W("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=K({},o,{value:void 0}),W("invalid",e);break;case"textarea":pu(e,o),r=oi(e,o),W("invalid",e);break;default:r=o}li(t,r),u=r;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?dc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&sc(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&fo(e,a):typeof a=="number"&&fo(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(po.hasOwnProperty(l)?a!=null&&l==="onScroll"&&W("scroll",e):a!=null&&na(e,l,a,i))}switch(t){case"input":Ho(e),du(e,o,!1);break;case"textarea":Ho(e),fu(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Rn(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?mt(e,!!o.multiple,l,!1):o.defaultValue!=null&&mt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Dr)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Md(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(E(166));if(t=Wn(ko.current),Wn(Xe.current),Zo(n)){if(o=n.stateNode,t=n.memoizedProps,o[Ke]=n,(l=o.nodeValue!==t)&&(e=Ee,e!==null))switch(e.tag){case 3:Jo(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jo(o.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Ke]=n,n.stateNode=o}return se(n),null;case 13:if(V(B),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&_e!==null&&n.mode&1&&!(n.flags&128))Jc(),Pt(),n.flags|=98560,l=!1;else if(l=Zo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(E(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(E(317));l[Ke]=n}else Pt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),l=!1}else Ie!==null&&(Fi(Ie),Ie=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?te===0&&(te=3):za())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return kt(),Di(e,n),e===null&&xo(n.stateNode.containerInfo),se(n),null;case 10:return xa(n.type._context),se(n),null;case 17:return Se(n.type)&&br(),se(n),null;case 19:if(V(B),l=n.memoizedState,l===null)return se(n),null;if(o=(n.flags&128)!==0,i=l.rendering,i===null)if(o)Vt(l,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Fr(e),i!==null){for(n.flags|=128,Vt(l,!1),o=i.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)l=t,e=o,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return U(B,B.current&1|2),n.child}e=e.sibling}l.tail!==null&&X()>Et&&(n.flags|=128,o=!0,Vt(l,!1),n.lanes=4194304)}else{if(!o)if(e=Fr(i),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Vt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!q)return se(n),null}else 2*X()-l.renderingStartTime>Et&&t!==1073741824&&(n.flags|=128,o=!0,Vt(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=X(),n.sibling=null,t=B.current,U(B,o?t&1|2:t&1),n):(se(n),null);case 22:case 23:return La(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?ke&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function Xm(e,n){switch(ha(n),n.tag){case 1:return Se(n.type)&&br(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return kt(),V(xe),V(fe),_a(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ka(n),null;case 13:if(V(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));Pt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(B),null;case 4:return kt(),null;case 10:return xa(n.type._context),null;case 22:case 23:return La(),null;case 24:return null;default:return null}}var tr=!1,pe=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,R=null;function pt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){Y(e,n,o)}else t.current=null}function bi(e,n,t){try{t()}catch(o){Y(e,n,o)}}var ts=!1;function Jm(e,n){if(hi=Rr,e=Ic(),ma(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var r=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,u=-1,a=-1,s=0,d=0,c=e,f=null;n:for(;;){for(var v;c!==t||r!==0&&c.nodeType!==3||(u=i+r),c!==l||o!==0&&c.nodeType!==3||(a=i+o),c.nodeType===3&&(i+=c.nodeValue.length),(v=c.firstChild)!==null;)f=c,c=v;for(;;){if(c===e)break n;if(f===t&&++s===r&&(u=i),f===l&&++d===o&&(a=i),(v=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=v}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(yi={focusedElem:e,selectionRange:t},Rr=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var C=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var x=C.memoizedProps,w=C.memoizedState,g=n.stateNode,p=g.getSnapshotBeforeUpdate(n.elementType===n.type?x:ze(n.type,x),w);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){Y(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return C=ts,ts=!1,C}function io(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var l=r.destroy;r.destroy=void 0,l!==void 0&&bi(n,t,l)}r=r.next}while(r!==o)}}function al(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function Mi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Od(e){var n=e.alternate;n!==null&&(e.alternate=null,Od(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ke],delete n[Po],delete n[xi],delete n[Mm],delete n[Om])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ld(e){return e.tag===5||e.tag===3||e.tag===4}function os(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oi(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Dr));else if(o!==4&&(e=e.child,e!==null))for(Oi(e,n,t),e=e.sibling;e!==null;)Oi(e,n,t),e=e.sibling}function Li(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Li(e,n,t),e=e.sibling;e!==null;)Li(e,n,t),e=e.sibling}var le=null,Ae=!1;function dn(e,n,t){for(t=t.child;t!==null;)zd(e,n,t),t=t.sibling}function zd(e,n,t){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Zr,t)}catch{}switch(t.tag){case 5:pe||pt(t,n);case 6:var o=le,r=Ae;le=null,dn(e,n,t),le=o,Ae=r,le!==null&&(Ae?(e=le,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):le.removeChild(t.stateNode));break;case 18:le!==null&&(Ae?(e=le,t=t.stateNode,e.nodeType===8?Dl(e.parentNode,t):e.nodeType===1&&Dl(e,t),yo(e)):Dl(le,t.stateNode));break;case 4:o=le,r=Ae,le=t.stateNode.containerInfo,Ae=!0,dn(e,n,t),le=o,Ae=r;break;case 0:case 11:case 14:case 15:if(!pe&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var l=r,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&bi(t,n,i),r=r.next}while(r!==o)}dn(e,n,t);break;case 1:if(!pe&&(pt(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(u){Y(t,n,u)}dn(e,n,t);break;case 21:dn(e,n,t);break;case 22:t.mode&1?(pe=(o=pe)||t.memoizedState!==null,dn(e,n,t),pe=o):dn(e,n,t);break;default:dn(e,n,t)}}function rs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Gm),n.forEach(function(o){var r=ag.bind(null,e,o);t.has(o)||(t.add(o),o.then(r,r))})}}function Le(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var r=t[o];try{var l=e,i=n,u=i;e:for(;u!==null;){switch(u.tag){case 5:le=u.stateNode,Ae=!1;break e;case 3:le=u.stateNode.containerInfo,Ae=!0;break e;case 4:le=u.stateNode.containerInfo,Ae=!0;break e}u=u.return}if(le===null)throw Error(E(160));zd(l,i,r),le=null,Ae=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(s){Y(r,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ad(n,e),n=n.sibling}function Ad(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(n,e),Be(e),o&4){try{io(3,e,e.return),al(3,e)}catch(x){Y(e,e.return,x)}try{io(5,e,e.return)}catch(x){Y(e,e.return,x)}}break;case 1:Le(n,e),Be(e),o&512&&t!==null&&pt(t,t.return);break;case 5:if(Le(n,e),Be(e),o&512&&t!==null&&pt(t,t.return),e.flags&32){var r=e.stateNode;try{fo(r,"")}catch(x){Y(e,e.return,x)}}if(o&4&&(r=e.stateNode,r!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&ic(r,l),ii(u,i);var s=ii(u,l);for(i=0;i<a.length;i+=2){var d=a[i],c=a[i+1];d==="style"?dc(r,c):d==="dangerouslySetInnerHTML"?sc(r,c):d==="children"?fo(r,c):na(r,d,c,s)}switch(u){case"input":ni(r,l);break;case"textarea":ac(r,l);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?mt(r,!!l.multiple,v,!1):f!==!!l.multiple&&(l.defaultValue!=null?mt(r,!!l.multiple,l.defaultValue,!0):mt(r,!!l.multiple,l.multiple?[]:"",!1))}r[Po]=l}catch(x){Y(e,e.return,x)}}break;case 6:if(Le(n,e),Be(e),o&4){if(e.stateNode===null)throw Error(E(162));r=e.stateNode,l=e.memoizedProps;try{r.nodeValue=l}catch(x){Y(e,e.return,x)}}break;case 3:if(Le(n,e),Be(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{yo(n.containerInfo)}catch(x){Y(e,e.return,x)}break;case 4:Le(n,e),Be(e);break;case 13:Le(n,e),Be(e),r=e.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||(Ma=X())),o&4&&rs(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(pe=(s=pe)||d,Le(n,e),pe=s):Le(n,e),Be(e),o&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(c=R=d;R!==null;){switch(f=R,v=f.child,f.tag){case 0:case 11:case 14:case 15:io(4,f,f.return);break;case 1:pt(f,f.return);var C=f.stateNode;if(typeof C.componentWillUnmount=="function"){o=f,t=f.return;try{n=o,C.props=n.memoizedProps,C.state=n.memoizedState,C.componentWillUnmount()}catch(x){Y(o,t,x)}}break;case 5:pt(f,f.return);break;case 22:if(f.memoizedState!==null){is(c);continue}}v!==null?(v.return=f,R=v):is(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{r=c.stateNode,s?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=c.stateNode,a=c.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=cc("display",i))}catch(x){Y(e,e.return,x)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(x){Y(e,e.return,x)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Le(n,e),Be(e),o&4&&rs(e);break;case 21:break;default:Le(n,e),Be(e)}}function Be(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ld(t)){var o=t;break e}t=t.return}throw Error(E(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(fo(r,""),o.flags&=-33);var l=os(e);Li(e,l,r);break;case 3:case 4:var i=o.stateNode.containerInfo,u=os(e);Oi(e,u,i);break;default:throw Error(E(161))}}catch(a){Y(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zm(e,n,t){R=e,Id(e)}function Id(e,n,t){for(var o=(e.mode&1)!==0;R!==null;){var r=R,l=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||tr;if(!i){var u=r.alternate,a=u!==null&&u.memoizedState!==null||pe;u=tr;var s=pe;if(tr=i,(pe=a)&&!s)for(R=r;R!==null;)i=R,a=i.child,i.tag===22&&i.memoizedState!==null?as(r):a!==null?(a.return=i,R=a):as(r);for(;l!==null;)R=l,Id(l),l=l.sibling;R=r,tr=u,pe=s}ls(e)}else r.subtreeFlags&8772&&l!==null?(l.return=r,R=l):ls(e)}}function ls(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||al(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!pe)if(t===null)o.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);o.componentDidUpdate(r,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Vu(n,l,o);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Vu(n,i,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var d=s.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&yo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}pe||n.flags&512&&Mi(n)}catch(f){Y(n,n.return,f)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function is(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function as(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{al(4,n)}catch(a){Y(n,t,a)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var r=n.return;try{o.componentDidMount()}catch(a){Y(n,r,a)}}var l=n.return;try{Mi(n)}catch(a){Y(n,l,a)}break;case 5:var i=n.return;try{Mi(n)}catch(a){Y(n,i,a)}}}catch(a){Y(n,n.return,a)}if(n===e){R=null;break}var u=n.sibling;if(u!==null){u.return=n.return,R=u;break}R=n.return}}var eg=Math.ceil,Vr=un.ReactCurrentDispatcher,Da=un.ReactCurrentOwner,be=un.ReactCurrentBatchConfig,z=0,re=null,J=null,ie=0,ke=0,ft=Dn(0),te=0,jo=null,Kn=0,ul=0,ba=0,ao=null,ve=null,Ma=0,Et=1/0,Ge=null,Hr=!1,zi=null,_n=null,or=!1,vn=null,qr=0,uo=0,Ai=null,Sr=-1,Pr=0;function ge(){return z&6?X():Sr!==-1?Sr:Sr=X()}function En(e){return e.mode&1?z&2&&ie!==0?ie&-ie:zm.transition!==null?(Pr===0&&(Pr=wc()),Pr):(e=I,e!==0||(e=window.event,e=e===void 0?16:$c(e.type)),e):1}function Ue(e,n,t,o){if(50<uo)throw uo=0,Ai=null,Error(E(185));bo(e,t,o),(!(z&2)||e!==re)&&(e===re&&(!(z&2)&&(ul|=t),te===4&&hn(e,ie)),Pe(e,o),t===1&&z===0&&!(n.mode&1)&&(Et=X()+500,rl&&bn()))}function Pe(e,n){var t=e.callbackNode;zf(e,n);var o=jr(e,e===re?ie:0);if(o===0)t!==null&&hu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&hu(t),n===1)e.tag===0?Lm(us.bind(null,e)):Yc(us.bind(null,e)),Dm(function(){!(z&6)&&bn()}),t=null;else{switch(kc(o)){case 1:t=ia;break;case 4:t=Sc;break;case 16:t=Tr;break;case 536870912:t=Pc;break;default:t=Tr}t=Qd(t,Fd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Fd(e,n){if(Sr=-1,Pr=0,z&6)throw Error(E(327));var t=e.callbackNode;if(Ct()&&e.callbackNode!==t)return null;var o=jr(e,e===re?ie:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=Br(e,o);else{n=o;var r=z;z|=2;var l=Wd();(re!==e||ie!==n)&&(Ge=null,Et=X()+500,Vn(e,n));do try{og();break}catch(u){Ud(e,u)}while(!0);Ca(),Vr.current=l,z=r,J!==null?n=0:(re=null,ie=0,n=te)}if(n!==0){if(n===2&&(r=di(e),r!==0&&(o=r,n=Ii(e,r))),n===1)throw t=jo,Vn(e,0),hn(e,o),Pe(e,X()),t;if(n===6)hn(e,o);else{if(r=e.current.alternate,!(o&30)&&!ng(r)&&(n=Br(e,o),n===2&&(l=di(e),l!==0&&(o=l,n=Ii(e,l))),n===1))throw t=jo,Vn(e,0),hn(e,o),Pe(e,X()),t;switch(e.finishedWork=r,e.finishedLanes=o,n){case 0:case 1:throw Error(E(345));case 2:In(e,ve,Ge);break;case 3:if(hn(e,o),(o&130023424)===o&&(n=Ma+500-X(),10<n)){if(jr(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){ge(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ci(In.bind(null,e,ve,Ge),n);break}In(e,ve,Ge);break;case 4:if(hn(e,o),(o&4194240)===o)break;for(n=e.eventTimes,r=-1;0<o;){var i=31-Fe(o);l=1<<i,i=n[i],i>r&&(r=i),o&=~l}if(o=r,o=X()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*eg(o/1960))-o,10<o){e.timeoutHandle=Ci(In.bind(null,e,ve,Ge),o);break}In(e,ve,Ge);break;case 5:In(e,ve,Ge);break;default:throw Error(E(329))}}}return Pe(e,X()),e.callbackNode===t?Fd.bind(null,e):null}function Ii(e,n){var t=ao;return e.current.memoizedState.isDehydrated&&(Vn(e,n).flags|=256),e=Br(e,n),e!==2&&(n=ve,ve=t,n!==null&&Fi(n)),e}function Fi(e){ve===null?ve=e:ve.push.apply(ve,e)}function ng(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var r=t[o],l=r.getSnapshot;r=r.value;try{if(!We(l(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hn(e,n){for(n&=~ba,n&=~ul,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Fe(n),o=1<<t;e[t]=-1,n&=~o}}function us(e){if(z&6)throw Error(E(327));Ct();var n=jr(e,0);if(!(n&1))return Pe(e,X()),null;var t=Br(e,n);if(e.tag!==0&&t===2){var o=di(e);o!==0&&(n=o,t=Ii(e,o))}if(t===1)throw t=jo,Vn(e,0),hn(e,n),Pe(e,X()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,In(e,ve,Ge),Pe(e,X()),null}function Oa(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(Et=X()+500,rl&&bn())}}function Yn(e){vn!==null&&vn.tag===0&&!(z&6)&&Ct();var n=z;z|=1;var t=be.transition,o=I;try{if(be.transition=null,I=1,e)return e()}finally{I=o,be.transition=t,z=n,!(z&6)&&bn()}}function La(){ke=ft.current,V(ft)}function Vn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Nm(t)),J!==null)for(t=J.return;t!==null;){var o=t;switch(ha(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&br();break;case 3:kt(),V(xe),V(fe),_a();break;case 5:ka(o);break;case 4:kt();break;case 13:V(B);break;case 19:V(B);break;case 10:xa(o.type._context);break;case 22:case 23:La()}t=t.return}if(re=e,J=e=Tn(e.current,null),ie=ke=n,te=0,jo=null,ba=ul=Kn=0,ve=ao=null,Un!==null){for(n=0;n<Un.length;n++)if(t=Un[n],o=t.interleaved,o!==null){t.interleaved=null;var r=o.next,l=t.pending;if(l!==null){var i=l.next;l.next=r,o.next=i}t.pending=o}Un=null}return e}function Ud(e,n){do{var t=J;try{if(Ca(),vr.current=Wr,Ur){for(var o=Q.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Ur=!1}if(Qn=0,oe=ne=Q=null,lo=!1,_o=0,Da.current=null,t===null||t.return===null){te=1,jo=n,J=null;break}e:{var l=e,i=t.return,u=t,a=n;if(n=ie,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,d=u,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Yu(i);if(v!==null){v.flags&=-257,Xu(v,i,u,l,n),v.mode&1&&Ku(l,s,n),n=v,a=s;var C=n.updateQueue;if(C===null){var x=new Set;x.add(a),n.updateQueue=x}else C.add(a);break e}else{if(!(n&1)){Ku(l,s,n),za();break e}a=Error(E(426))}}else if(q&&u.mode&1){var w=Yu(i);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Xu(w,i,u,l,n),ya(_t(a,u));break e}}l=a=_t(a,u),te!==4&&(te=2),ao===null?ao=[l]:ao.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var g=kd(l,a,n);Wu(l,g);break e;case 1:u=a;var p=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(_n===null||!_n.has(h)))){l.flags|=65536,n&=-n,l.lanes|=n;var y=_d(l,u,n);Wu(l,y);break e}}l=l.return}while(l!==null)}Hd(t)}catch(P){n=P,J===t&&t!==null&&(J=t=t.return);continue}break}while(!0)}function Wd(){var e=Vr.current;return Vr.current=Wr,e===null?Wr:e}function za(){(te===0||te===3||te===2)&&(te=4),re===null||!(Kn&268435455)&&!(ul&268435455)||hn(re,ie)}function Br(e,n){var t=z;z|=2;var o=Wd();(re!==e||ie!==n)&&(Ge=null,Vn(e,n));do try{tg();break}catch(r){Ud(e,r)}while(!0);if(Ca(),z=t,Vr.current=o,J!==null)throw Error(E(261));return re=null,ie=0,te}function tg(){for(;J!==null;)Vd(J)}function og(){for(;J!==null&&!jf();)Vd(J)}function Vd(e){var n=Bd(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?Hd(e):J=n,Da.current=null}function Hd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Xm(t,n),t!==null){t.flags&=32767,J=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,J=null;return}}else if(t=Ym(t,n,ke),t!==null){J=t;return}if(n=n.sibling,n!==null){J=n;return}J=n=e}while(n!==null);te===0&&(te=5)}function In(e,n,t){var o=I,r=be.transition;try{be.transition=null,I=1,rg(e,n,t,o)}finally{be.transition=r,I=o}return null}function rg(e,n,t,o){do Ct();while(vn!==null);if(z&6)throw Error(E(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Af(e,l),e===re&&(J=re=null,ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||or||(or=!0,Qd(Tr,function(){return Ct(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=be.transition,be.transition=null;var i=I;I=1;var u=z;z|=4,Da.current=null,Jm(e,t),Ad(t,e),km(yi),Rr=!!hi,yi=hi=null,e.current=t,Zm(t),Rf(),z=u,I=i,be.transition=l}else e.current=t;if(or&&(or=!1,vn=e,qr=r),l=e.pendingLanes,l===0&&(_n=null),Df(t.stateNode),Pe(e,X()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],o(r.value,{componentStack:r.stack,digest:r.digest});if(Hr)throw Hr=!1,e=zi,zi=null,e;return qr&1&&e.tag!==0&&Ct(),l=e.pendingLanes,l&1?e===Ai?uo++:(uo=0,Ai=e):uo=0,bn(),null}function Ct(){if(vn!==null){var e=kc(qr),n=be.transition,t=I;try{if(be.transition=null,I=16>e?16:e,vn===null)var o=!1;else{if(e=vn,vn=null,qr=0,z&6)throw Error(E(331));var r=z;for(z|=4,R=e.current;R!==null;){var l=R,i=l.child;if(R.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(R=s;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:io(8,d,l)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var f=d.sibling,v=d.return;if(Od(d),d===s){R=null;break}if(f!==null){f.return=v,R=f;break}R=v}}}var C=l.alternate;if(C!==null){var x=C.child;if(x!==null){C.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}R=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,R=i;else e:for(;R!==null;){if(l=R,l.flags&2048)switch(l.tag){case 0:case 11:case 15:io(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,R=g;break e}R=l.return}}var p=e.current;for(R=p;R!==null;){i=R;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,R=h;else e:for(i=p;R!==null;){if(u=R,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:al(9,u)}}catch(P){Y(u,u.return,P)}if(u===i){R=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,R=y;break e}R=u.return}}if(z=r,bn(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Zr,e)}catch{}o=!0}return o}finally{I=t,be.transition=n}}return!1}function ss(e,n,t){n=_t(t,n),n=kd(e,n,1),e=kn(e,n,1),n=ge(),e!==null&&(bo(e,1,n),Pe(e,n))}function Y(e,n,t){if(e.tag===3)ss(e,e,t);else for(;n!==null;){if(n.tag===3){ss(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(_n===null||!_n.has(o))){e=_t(t,e),e=_d(n,e,1),n=kn(n,e,1),e=ge(),n!==null&&(bo(n,1,e),Pe(n,e));break}}n=n.return}}function lg(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,re===e&&(ie&t)===t&&(te===4||te===3&&(ie&130023424)===ie&&500>X()-Ma?Vn(e,0):ba|=t),Pe(e,n)}function qd(e,n){n===0&&(e.mode&1?(n=Qo,Qo<<=1,!(Qo&130023424)&&(Qo=4194304)):n=1);var t=ge();e=ln(e,n),e!==null&&(bo(e,n,t),Pe(e,t))}function ig(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),qd(e,t)}function ag(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(E(314))}o!==null&&o.delete(n),qd(e,t)}var Bd;Bd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||xe.current)Ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ce=!1,Km(e,n,t);Ce=!!(e.flags&131072)}else Ce=!1,q&&n.flags&1048576&&Xc(n,Lr,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;xr(e,n),e=n.pendingProps;var r=St(n,fe.current);vt(n,t),r=Ta(null,n,o,e,r,t);var l=ja();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Se(o)?(l=!0,Mr(n)):l=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pa(n),r.updater=il,n.stateNode=r,r._reactInternals=n,Ei(n,o,e,t),n=Ri(null,n,o,!0,l,t)):(n.tag=0,q&&l&&ga(n),me(null,n,r,t),n=n.child),n;case 16:o=n.elementType;e:{switch(xr(e,n),e=n.pendingProps,r=o._init,o=r(o._payload),n.type=o,r=n.tag=sg(o),e=ze(o,e),r){case 0:n=ji(null,n,o,e,t);break e;case 1:n=Zu(null,n,o,e,t);break e;case 11:n=Gu(null,n,o,e,t);break e;case 14:n=Ju(null,n,o,ze(o.type,e),t);break e}throw Error(E(306,o,""))}return n;case 0:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:ze(o,r),ji(e,n,o,r,t);case 1:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:ze(o,r),Zu(e,n,o,r,t);case 3:e:{if(Rd(n),e===null)throw Error(E(387));o=n.pendingProps,l=n.memoizedState,r=l.element,td(e,n),Ir(n,o,null,t);var i=n.memoizedState;if(o=i.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){r=_t(Error(E(423)),n),n=es(e,n,o,t,r);break e}else if(o!==r){r=_t(Error(E(424)),n),n=es(e,n,o,t,r);break e}else for(_e=wn(n.stateNode.containerInfo.firstChild),Ee=n,q=!0,Ie=null,t=ed(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Pt(),o===r){n=an(e,n,t);break e}me(e,n,o,t)}n=n.child}return n;case 5:return od(n),e===null&&wi(n),o=n.type,r=n.pendingProps,l=e!==null?e.memoizedProps:null,i=r.children,vi(o,r)?i=null:l!==null&&vi(o,l)&&(n.flags|=32),jd(e,n),me(e,n,i,t),n.child;case 6:return e===null&&wi(n),null;case 13:return $d(e,n,t);case 4:return wa(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=wt(n,null,o,t):me(e,n,o,t),n.child;case 11:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:ze(o,r),Gu(e,n,o,r,t);case 7:return me(e,n,n.pendingProps,t),n.child;case 8:return me(e,n,n.pendingProps.children,t),n.child;case 12:return me(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,r=n.pendingProps,l=n.memoizedProps,i=r.value,U(zr,o._currentValue),o._currentValue=i,l!==null)if(We(l.value,i)){if(l.children===r.children&&!xe.current){n=an(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){i=l.child;for(var a=u.firstContext;a!==null;){if(a.context===o){if(l.tag===1){a=tn(-1,t&-t),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var d=s.pending;d===null?a.next=a:(a.next=d.next,d.next=a),s.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),ki(l.return,t,n),u.lanes|=t;break}a=a.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(E(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),ki(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}me(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,o=n.pendingProps.children,vt(n,t),r=Me(r),o=o(r),n.flags|=1,me(e,n,o,t),n.child;case 14:return o=n.type,r=ze(o,n.pendingProps),r=ze(o.type,r),Ju(e,n,o,r,t);case 15:return Ed(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:ze(o,r),xr(e,n),n.tag=1,Se(o)?(e=!0,Mr(n)):e=!1,vt(n,t),wd(n,o,r),Ei(n,o,r,t),Ri(null,n,o,!0,e,t);case 19:return Nd(e,n,t);case 22:return Td(e,n,t)}throw Error(E(156,n.tag))};function Qd(e,n){return xc(e,n)}function ug(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,n,t,o){return new ug(e,n,t,o)}function Aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sg(e){if(typeof e=="function")return Aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oa)return 11;if(e===ra)return 14}return 2}function Tn(e,n){var t=e.alternate;return t===null?(t=De(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function wr(e,n,t,o,r,l){var i=2;if(o=e,typeof e=="function")Aa(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ot:return Hn(t.children,r,l,n);case ta:i=8,r|=8;break;case Xl:return e=De(12,t,n,r|2),e.elementType=Xl,e.lanes=l,e;case Gl:return e=De(13,t,n,r),e.elementType=Gl,e.lanes=l,e;case Jl:return e=De(19,t,n,r),e.elementType=Jl,e.lanes=l,e;case oc:return sl(t,r,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nc:i=10;break e;case tc:i=9;break e;case oa:i=11;break e;case ra:i=14;break e;case fn:i=16,o=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=De(i,t,n,r),n.elementType=e,n.type=o,n.lanes=l,n}function Hn(e,n,t,o){return e=De(7,e,o,n),e.lanes=t,e}function sl(e,n,t,o){return e=De(22,e,o,n),e.elementType=oc,e.lanes=t,e.stateNode={isHidden:!1},e}function Fl(e,n,t){return e=De(6,e,null,n),e.lanes=t,e}function Ul(e,n,t){return n=De(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function cg(e,n,t,o,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ia(e,n,t,o,r,l,i,u,a){return e=new cg(e,n,t,u,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=De(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pa(l),e}function dg(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tt,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function Kd(e){if(!e)return $n;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Se(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(Se(t))return Kc(e,t,n)}return n}function Yd(e,n,t,o,r,l,i,u,a){return e=Ia(t,o,!0,e,r,l,i,u,a),e.context=Kd(null),t=e.current,o=ge(),r=En(t),l=tn(o,r),l.callback=n??null,kn(t,l,r),e.current.lanes=r,bo(e,r,o),Pe(e,o),e}function cl(e,n,t,o){var r=n.current,l=ge(),i=En(r);return t=Kd(t),n.context===null?n.context=t:n.pendingContext=t,n=tn(l,i),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=kn(r,n,i),e!==null&&(Ue(e,r,i,l),yr(e,r,i)),i}function Qr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Fa(e,n){cs(e,n),(e=e.alternate)&&cs(e,n)}function pg(){return null}var Xd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ua(e){this._internalRoot=e}dl.prototype.render=Ua.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));cl(e,n,null,null)};dl.prototype.unmount=Ua.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yn(function(){cl(null,e,null,null)}),n[rn]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Tc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<gn.length&&n!==0&&n<gn[t].priority;t++);gn.splice(t,0,e),t===0&&Rc(e)}};function Wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ds(){}function fg(e,n,t,o,r){if(r){if(typeof o=="function"){var l=o;o=function(){var s=Qr(i);l.call(s)}}var i=Yd(n,o,e,0,null,!1,!1,"",ds);return e._reactRootContainer=i,e[rn]=i.current,xo(e.nodeType===8?e.parentNode:e),Yn(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var u=o;o=function(){var s=Qr(a);u.call(s)}}var a=Ia(e,0,!1,null,null,!1,!1,"",ds);return e._reactRootContainer=a,e[rn]=a.current,xo(e.nodeType===8?e.parentNode:e),Yn(function(){cl(n,a,t,o)}),a}function fl(e,n,t,o,r){var l=t._reactRootContainer;if(l){var i=l;if(typeof r=="function"){var u=r;r=function(){var a=Qr(i);u.call(a)}}cl(n,i,e,r)}else i=fg(t,n,e,r,o);return Qr(i)}_c=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Xt(n.pendingLanes);t!==0&&(aa(n,t|1),Pe(n,X()),!(z&6)&&(Et=X()+500,bn()))}break;case 13:Yn(function(){var o=ln(e,1);if(o!==null){var r=ge();Ue(o,e,1,r)}}),Fa(e,1)}};ua=function(e){if(e.tag===13){var n=ln(e,134217728);if(n!==null){var t=ge();Ue(n,e,134217728,t)}Fa(e,134217728)}};Ec=function(e){if(e.tag===13){var n=En(e),t=ln(e,n);if(t!==null){var o=ge();Ue(t,e,n,o)}Fa(e,n)}};Tc=function(){return I};jc=function(e,n){var t=I;try{return I=e,n()}finally{I=t}};ui=function(e,n,t){switch(n){case"input":if(ni(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var r=ol(o);if(!r)throw Error(E(90));lc(o),ni(o,r)}}}break;case"textarea":ac(e,t);break;case"select":n=t.value,n!=null&&mt(e,!!t.multiple,n,!1)}};mc=Oa;gc=Yn;var mg={usingClientEntryPoint:!1,Events:[Oo,at,ol,pc,fc,Oa]},Ht={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gg={bundleType:Ht.bundleType,version:Ht.version,rendererPackageName:Ht.rendererPackageName,rendererConfig:Ht.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ht.findFiberByHostInstance||pg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rr.isDisabled&&rr.supportsFiber)try{Zr=rr.inject(gg),Ye=rr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mg;je.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wa(n))throw Error(E(200));return dg(e,n,null,t)};je.createRoot=function(e,n){if(!Wa(e))throw Error(E(299));var t=!1,o="",r=Xd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Ia(e,1,!1,null,null,t,!1,o,r),e[rn]=n.current,xo(e.nodeType===8?e.parentNode:e),new Ua(n)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=vc(n),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Yn(e)};je.hydrate=function(e,n,t){if(!pl(n))throw Error(E(200));return fl(null,e,n,!0,t)};je.hydrateRoot=function(e,n,t){if(!Wa(e))throw Error(E(405));var o=t!=null&&t.hydratedSources||null,r=!1,l="",i=Xd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Yd(n,null,e,1,t??null,r,!1,l,i),e[rn]=n.current,xo(e),o)for(e=0;e<o.length;e++)t=o[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new dl(n)};je.render=function(e,n,t){if(!pl(n))throw Error(E(200));return fl(null,e,n,!1,t)};je.unmountComponentAtNode=function(e){if(!pl(e))throw Error(E(40));return e._reactRootContainer?(Yn(function(){fl(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};je.unstable_batchedUpdates=Oa;je.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!pl(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return fl(e,n,t,!1,o)};je.version="18.3.1-next-f1338f8080-20240426";function Gd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gd)}catch(e){console.error(e)}}Gd(),Gs.exports=je;var ee=Gs.exports,Jd,ps=ee;Jd=Kl.createRoot=ps.createRoot,Kl.hydrateRoot=ps.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ro.apply(null,arguments)}var Cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Cn||(Cn={}));const fs="popstate";function hg(e){e===void 0&&(e={});function n(r,l){let{pathname:i="/",search:u="",hash:a=""}=Jn(r.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Ui("",{pathname:i,search:u,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){let i=r.document.querySelector("base"),u="";if(i&&i.getAttribute("href")){let a=r.location.href,s=a.indexOf("#");u=s===-1?a:a.slice(0,s)}return u+"#"+(typeof l=="string"?l:Kr(l))}function o(r,l){Va(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return vg(n,t,o,e)}function G(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Va(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function yg(){return Math.random().toString(36).substr(2,8)}function ms(e,n){return{usr:e.state,key:e.key,idx:n}}function Ui(e,n,t,o){return t===void 0&&(t=null),Ro({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Jn(n):n,{state:t,key:n&&n.key||o||yg()})}function Kr(e){let{pathname:n="/",search:t="",hash:o=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Jn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let o=e.indexOf("?");o>=0&&(n.search=e.substr(o),e=e.substr(0,o)),e&&(n.pathname=e)}return n}function vg(e,n,t,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:l=!1}=o,i=r.history,u=Cn.Pop,a=null,s=d();s==null&&(s=0,i.replaceState(Ro({},i.state,{idx:s}),""));function d(){return(i.state||{idx:null}).idx}function c(){u=Cn.Pop;let w=d(),g=w==null?null:w-s;s=w,a&&a({action:u,location:x.location,delta:g})}function f(w,g){u=Cn.Push;let p=Ui(x.location,w,g);t&&t(p,w),s=d()+1;let h=ms(p,s),y=x.createHref(p);try{i.pushState(h,"",y)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(y)}l&&a&&a({action:u,location:x.location,delta:1})}function v(w,g){u=Cn.Replace;let p=Ui(x.location,w,g);t&&t(p,w),s=d();let h=ms(p,s),y=x.createHref(p);i.replaceState(h,"",y),l&&a&&a({action:u,location:x.location,delta:0})}function C(w){let g=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof w=="string"?w:Kr(w);return p=p.replace(/ $/,"%20"),G(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let x={get action(){return u},get location(){return e(r,i)},listen(w){if(a)throw new Error("A history only accepts one active listener");return r.addEventListener(fs,c),a=w,()=>{r.removeEventListener(fs,c),a=null}},createHref(w){return n(r,w)},createURL:C,encodeLocation(w){let g=C(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(w){return i.go(w)}};return x}var gs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gs||(gs={}));function Cg(e,n,t){return t===void 0&&(t="/"),xg(e,n,t)}function xg(e,n,t,o){let r=typeof n=="string"?Jn(n):n,l=Ha(r.pathname||"/",t);if(l==null)return null;let i=Zd(e);Sg(i);let u=null,a=bg(l);for(let s=0;u==null&&s<i.length;++s)u=$g(i[s],a);return u}function Zd(e,n,t,o){n===void 0&&(n=[]),t===void 0&&(t=[]),o===void 0&&(o="");let r=(l,i,u)=>{let a={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};a.relativePath.startsWith("/")&&(G(a.relativePath.startsWith(o),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(o.length));let s=jn([o,a.relativePath]),d=t.concat(a);l.children&&l.children.length>0&&(G(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Zd(l.children,n,d,s)),!(l.path==null&&!l.index)&&n.push({path:s,score:jg(s,l.index),routesMeta:d})};return e.forEach((l,i)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))r(l,i);else for(let a of ep(l.path))r(l,i,a)}),n}function ep(e){let n=e.split("/");if(n.length===0)return[];let[t,...o]=n,r=t.endsWith("?"),l=t.replace(/\?$/,"");if(o.length===0)return r?[l,""]:[l];let i=ep(o.join("/")),u=[];return u.push(...i.map(a=>a===""?l:[l,a].join("/"))),r&&u.push(...i),u.map(a=>e.startsWith("/")&&a===""?"/":a)}function Sg(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Rg(n.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const Pg=/^:[\w-]+$/,wg=3,kg=2,_g=1,Eg=10,Tg=-2,hs=e=>e==="*";function jg(e,n){let t=e.split("/"),o=t.length;return t.some(hs)&&(o+=Tg),n&&(o+=kg),t.filter(r=>!hs(r)).reduce((r,l)=>r+(Pg.test(l)?wg:l===""?_g:Eg),o)}function Rg(e,n){return e.length===n.length&&e.slice(0,-1).every((o,r)=>o===n[r])?e[e.length-1]-n[n.length-1]:0}function $g(e,n,t){let{routesMeta:o}=e,r={},l="/",i=[];for(let u=0;u<o.length;++u){let a=o[u],s=u===o.length-1,d=l==="/"?n:n.slice(l.length)||"/",c=Ng({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},d),f=a.route;if(!c)return null;Object.assign(r,c.params),i.push({params:r,pathname:jn([l,c.pathname]),pathnameBase:Lg(jn([l,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(l=jn([l,c.pathnameBase]))}return i}function Ng(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,o]=Dg(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let l=r[0],i=l.replace(/(.)\/+$/,"$1"),u=r.slice(1);return{params:o.reduce((s,d,c)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let x=u[c]||"";i=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const C=u[c];return v&&!C?s[f]=void 0:s[f]=(C||"").replace(/%2F/g,"/"),s},{}),pathname:l,pathnameBase:i,pattern:e}}function Dg(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Va(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,u,a)=>(o.push({paramName:u,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),o]}function bg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Va(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ha(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,o=e.charAt(t);return o&&o!=="/"?null:e.slice(t)||"/"}function Mg(e,n){n===void 0&&(n="/");let{pathname:t,search:o="",hash:r=""}=typeof e=="string"?Jn(e):e,l;return t?(t=np(t),t.startsWith("/")?l=ys(t.substring(1),"/"):l=ys(t,n)):l=n,{pathname:l,search:zg(o),hash:Ag(r)}}function ys(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Wl(e,n,t,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Og(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function qa(e,n){let t=Og(e);return n?t.map((o,r)=>r===t.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function Ba(e,n,t,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=Jn(e):(r=Ro({},e),G(!r.pathname||!r.pathname.includes("?"),Wl("?","pathname","search",r)),G(!r.pathname||!r.pathname.includes("#"),Wl("#","pathname","hash",r)),G(!r.search||!r.search.includes("#"),Wl("#","search","hash",r)));let l=e===""||r.pathname==="",i=l?"/":r.pathname,u;if(i==null)u=t;else{let c=n.length-1;if(!o&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),c-=1;r.pathname=f.join("/")}u=c>=0?n[c]:"/"}let a=Mg(r,u),s=i&&i!=="/"&&i.endsWith("/"),d=(l||i===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(s||d)&&(a.pathname+="/"),a}const np=e=>e.replace(/\/\/+/g,"/"),jn=e=>np(e.join("/")),Lg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ag=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ig(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const tp=["post","put","patch","delete"];new Set(tp);const Fg=["get",...tp];new Set(Fg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},$o.apply(null,arguments)}const Qa=S.createContext(null),Ug=S.createContext(null),Mn=S.createContext(null),ml=S.createContext(null),sn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),op=S.createContext(null);function Wg(e,n){let{relative:t}=n===void 0?{}:n;$t()||G(!1);let{basename:o,navigator:r}=S.useContext(Mn),{hash:l,pathname:i,search:u}=ip(e,{relative:t}),a=i;return o!=="/"&&(a=i==="/"?o:jn([o,i])),r.createHref({pathname:a,search:u,hash:l})}function $t(){return S.useContext(ml)!=null}function Nt(){return $t()||G(!1),S.useContext(ml).location}function rp(e){S.useContext(Mn).static||S.useLayoutEffect(e)}function lp(){let{isDataRoute:e}=S.useContext(sn);return e?th():Vg()}function Vg(){$t()||G(!1);let e=S.useContext(Qa),{basename:n,future:t,navigator:o}=S.useContext(Mn),{matches:r}=S.useContext(sn),{pathname:l}=Nt(),i=JSON.stringify(qa(r,t.v7_relativeSplatPath)),u=S.useRef(!1);return rp(()=>{u.current=!0}),S.useCallback(function(s,d){if(d===void 0&&(d={}),!u.current)return;if(typeof s=="number"){o.go(s);return}let c=Ba(s,JSON.parse(i),l,d.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:jn([n,c.pathname])),(d.replace?o.replace:o.push)(c,d.state,d)},[n,o,i,l,e])}function Hg(){let{matches:e}=S.useContext(sn),n=e[e.length-1];return n?n.params:{}}function ip(e,n){let{relative:t}=n===void 0?{}:n,{future:o}=S.useContext(Mn),{matches:r}=S.useContext(sn),{pathname:l}=Nt(),i=JSON.stringify(qa(r,o.v7_relativeSplatPath));return S.useMemo(()=>Ba(e,JSON.parse(i),l,t==="path"),[e,i,l,t])}function qg(e,n){return Bg(e,n)}function Bg(e,n,t,o){$t()||G(!1);let{navigator:r}=S.useContext(Mn),{matches:l}=S.useContext(sn),i=l[l.length-1],u=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let s=Nt(),d;if(n){var c;let w=typeof n=="string"?Jn(n):n;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||G(!1),d=w}else d=s;let f=d.pathname||"/",v=f;if(a!=="/"){let w=a.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let C=Cg(e,{pathname:v}),x=Gg(C&&C.map(w=>Object.assign({},w,{params:Object.assign({},u,w.params),pathname:jn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:jn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),l,t,o);return n&&x?S.createElement(ml.Provider,{value:{location:$o({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Cn.Pop}},x):x}function Qg(){let e=nh(),n=Ig(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},n),t?S.createElement("pre",{style:r},t):null,null)}const Kg=S.createElement(Qg,null);class Yg extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?S.createElement(sn.Provider,{value:this.props.routeContext},S.createElement(op.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xg(e){let{routeContext:n,match:t,children:o}=e,r=S.useContext(Qa);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(sn.Provider,{value:n},o)}function Gg(e,n,t,o){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),o===void 0&&(o=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=o)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,u=(r=t)==null?void 0:r.errors;if(u!=null){let d=i.findIndex(c=>c.route.id&&(u==null?void 0:u[c.route.id])!==void 0);d>=0||G(!1),i=i.slice(0,Math.min(i.length,d+1))}let a=!1,s=-1;if(t&&o&&o.v7_partialHydration)for(let d=0;d<i.length;d++){let c=i[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(s=d),c.route.id){let{loaderData:f,errors:v}=t,C=c.route.loader&&f[c.route.id]===void 0&&(!v||v[c.route.id]===void 0);if(c.route.lazy||C){a=!0,s>=0?i=i.slice(0,s+1):i=[i[0]];break}}}return i.reduceRight((d,c,f)=>{let v,C=!1,x=null,w=null;t&&(v=u&&c.route.id?u[c.route.id]:void 0,x=c.route.errorElement||Kg,a&&(s<0&&f===0?(oh("route-fallback"),C=!0,w=null):s===f&&(C=!0,w=c.route.hydrateFallbackElement||null)));let g=n.concat(i.slice(0,f+1)),p=()=>{let h;return v?h=x:C?h=w:c.route.Component?h=S.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=d,S.createElement(Xg,{match:c,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:h})};return t&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?S.createElement(Yg,{location:t.location,revalidation:t.revalidation,component:x,error:v,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var ap=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ap||{}),up=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(up||{});function Jg(e){let n=S.useContext(Qa);return n||G(!1),n}function Zg(e){let n=S.useContext(Ug);return n||G(!1),n}function eh(e){let n=S.useContext(sn);return n||G(!1),n}function sp(e){let n=eh(),t=n.matches[n.matches.length-1];return t.route.id||G(!1),t.route.id}function nh(){var e;let n=S.useContext(op),t=Zg(),o=sp();return n!==void 0?n:(e=t.errors)==null?void 0:e[o]}function th(){let{router:e}=Jg(ap.UseNavigateStable),n=sp(up.UseNavigateStable),t=S.useRef(!1);return rp(()=>{t.current=!0}),S.useCallback(function(r,l){l===void 0&&(l={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,$o({fromRouteId:n},l)))},[e,n])}const vs={};function oh(e,n,t){vs[e]||(vs[e]=!0)}function rh(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Wi(e){let{to:n,replace:t,state:o,relative:r}=e;$t()||G(!1);let{future:l,static:i}=S.useContext(Mn),{matches:u}=S.useContext(sn),{pathname:a}=Nt(),s=lp(),d=Ba(n,qa(u,l.v7_relativeSplatPath),a,r==="path"),c=JSON.stringify(d);return S.useEffect(()=>s(JSON.parse(c),{replace:t,state:o,relative:r}),[s,c,r,t,o]),null}function Jt(e){G(!1)}function lh(e){let{basename:n="/",children:t=null,location:o,navigationType:r=Cn.Pop,navigator:l,static:i=!1,future:u}=e;$t()&&G(!1);let a=n.replace(/^\/*/,"/"),s=S.useMemo(()=>({basename:a,navigator:l,static:i,future:$o({v7_relativeSplatPath:!1},u)}),[a,u,l,i]);typeof o=="string"&&(o=Jn(o));let{pathname:d="/",search:c="",hash:f="",state:v=null,key:C="default"}=o,x=S.useMemo(()=>{let w=Ha(d,a);return w==null?null:{location:{pathname:w,search:c,hash:f,state:v,key:C},navigationType:r}},[a,d,c,f,v,C,r]);return x==null?null:S.createElement(Mn.Provider,{value:s},S.createElement(ml.Provider,{children:t,value:x}))}function ih(e){let{children:n,location:t}=e;return qg(Vi(n),t)}new Promise(()=>{});function Vi(e,n){n===void 0&&(n=[]);let t=[];return S.Children.forEach(e,(o,r)=>{if(!S.isValidElement(o))return;let l=[...n,r];if(o.type===S.Fragment){t.push.apply(t,Vi(o.props.children,l));return}o.type!==Jt&&G(!1),!o.props.index||!o.props.children||G(!1);let i={id:o.props.id||l.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(i.children=Vi(o.props.children,l)),t.push(i)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hi(){return Hi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Hi.apply(null,arguments)}function ah(e,n){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)!==-1)continue;t[o]=e[o]}return t}function uh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function sh(e,n){return e.button===0&&(!n||n==="_self")&&!uh(e)}const ch=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dh="6";try{window.__reactRouterVersion=dh}catch{}const ph="startTransition",Cs=rf[ph];function fh(e){let{basename:n,children:t,future:o,window:r}=e,l=S.useRef();l.current==null&&(l.current=hg({window:r,v5Compat:!0}));let i=l.current,[u,a]=S.useState({action:i.action,location:i.location}),{v7_startTransition:s}=o||{},d=S.useCallback(c=>{s&&Cs?Cs(()=>a(c)):a(c)},[a,s]);return S.useLayoutEffect(()=>i.listen(d),[i,d]),S.useEffect(()=>rh(o),[o]),S.createElement(lh,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:i,future:o})}const mh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qi=S.forwardRef(function(n,t){let{onClick:o,relative:r,reloadDocument:l,replace:i,state:u,target:a,to:s,preventScrollReset:d,viewTransition:c}=n,f=ah(n,ch),{basename:v}=S.useContext(Mn),C,x=!1;if(typeof s=="string"&&gh.test(s)&&(C=s,mh))try{let h=new URL(window.location.href),y=s.startsWith("//")?new URL(h.protocol+s):new URL(s),P=Ha(y.pathname,v);y.origin===h.origin&&P!=null?s=P+y.search+y.hash:x=!0}catch{}let w=Wg(s,{relative:r}),g=hh(s,{replace:i,state:u,target:a,preventScrollReset:d,relative:r,viewTransition:c});function p(h){o&&o(h),h.defaultPrevented||g(h)}return S.createElement("a",Hi({},f,{href:C||w,onClick:x||l?o:p,ref:t,target:a}))});var xs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xs||(xs={}));var Ss;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ss||(Ss={}));function hh(e,n){let{target:t,replace:o,state:r,preventScrollReset:l,relative:i,viewTransition:u}=n===void 0?{}:n,a=lp(),s=Nt(),d=ip(e,{relative:i});return S.useCallback(c=>{if(sh(c,t)){c.preventDefault();let f=o!==void 0?o:Kr(s)===Kr(d);a(e,{replace:f,state:r,preventScrollReset:l,relative:i,viewTransition:u})}},[s,a,d,o,r,t,e,l,i,u])}const yh="https://github.com/frankvane/vane-components";class vh extends Do.Component{constructor(){super(...arguments);ou(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?m.jsxs("div",{className:"crash",role:"alert",children:[m.jsx("h3",{children:"这个页面炸了"}),m.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),m.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function cp(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function Ch({demos:e,pathname:n}){var a;const{groups:t,entries:o,label:r}=e,l=(a=o.find(s=>n===`/demo/${s.meta.slug}`))==null?void 0:a.meta.group,[i,u]=S.useState(()=>{var d;const s=(d=t[0])==null?void 0:d.key;return Object.fromEntries(t.map(c=>[c.key,c.key===(l??s)]))});return S.useEffect(()=>{l&&u(s=>s[l]?s:{...s,[l]:!0})},[l]),m.jsxs("div",{className:"nav-section",children:[m.jsxs("div",{className:"nav-section-head",children:[m.jsx("span",{children:r}),m.jsxs("code",{children:[o.length," demos"]})]}),t.map(s=>{const d=o.filter(f=>f.meta.group===s.key);if(d.length===0)return null;const c=i[s.key]??!1;return m.jsxs("div",{className:"nav-group",children:[m.jsxs("button",{type:"button",className:`nav-group-head${l===s.key?" is-current":""}`,onClick:()=>u(f=>({...f,[s.key]:!c})),"aria-expanded":c,children:[m.jsx("span",{className:`nav-caret${c?" is-open":""}`,"aria-hidden":!0,children:"▸"}),s.label,m.jsx("code",{children:d.length})]}),c?m.jsx("div",{className:"nav-list",children:d.map(f=>m.jsxs(qi,{to:`/demo/${f.meta.slug}`,className:`nav-sub${n===`/demo/${f.meta.slug}`?" is-active":""}`,children:[m.jsx("em",{"aria-hidden":!0,children:cp(e,f)}),f.meta.title]},f.meta.slug))}):null]},s.key)})]})}function xh({demos:e}){const{slug:n}=Hg(),{entries:t,detail:o}=e,r=n?t.find(i=>i.meta.slug===n):void 0;if(!r)return m.jsx(Wi,{to:`/demo/${t[0].meta.slug}`,replace:!0});const l=t.indexOf(r)+1;return m.jsx(Do.Fragment,{children:o(r,l)},r.meta.slug)}function Sh({config:e}){var d;const{pathname:n}=Nt(),[t,o]=S.useState(!1),[r,l]=S.useState(!1);S.useEffect(()=>o(!1),[n]);const i=S.useCallback(()=>l(c=>!c),[]);S.useEffect(()=>{const c=f=>{const v=f.target,C=v&&(v.tagName==="INPUT"||v.tagName==="TEXTAREA"||v.isContentEditable);f.key==="Escape"&&o(!1),!C&&(f.key==="g"||f.key==="G")&&!f.metaKey&&!f.ctrlKey&&l(x=>!x)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]);const u=e.demos,a=S.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const c=n.replace(/^\/demo\/?/,""),f=u.entries.find(v=>v.meta.slug===c);return f?`demo ${cp(u,f)} · ${f.meta.title}`:"demo · 逐项示例"},[n,e,u]),s=S.useMemo(()=>e.nav.map((c,f)=>({...c,no:String(f+1).padStart(2,"0")})),[e.nav]);return m.jsxs("div",{className:`shell${t?" is-nav-open":""}${r?" is-guides":""}`,children:[m.jsx("a",{className:"skip-link",href:"#main",onClick:c=>{c.preventDefault();const f=document.getElementById("main");f==null||f.setAttribute("tabindex","-1"),f==null||f.focus(),f==null||f.scrollIntoView({block:"start"})},children:"跳到内容"}),m.jsxs("aside",{className:"side","aria-label":"站点导航",children:[m.jsxs(qi,{to:"/",className:"brand",children:[m.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),m.jsxs("span",{children:[m.jsx("strong",{children:e.pkg}),m.jsx("em",{children:e.subtitle})]})]}),m.jsxs("nav",{children:[s.map(c=>m.jsxs(qi,{to:c.to,className:`nav-item${n===c.to?" is-active":""}`,"aria-current":n===c.to?"page":void 0,children:[m.jsx("em",{"aria-hidden":!0,children:c.no}),m.jsx("span",{children:c.label}),c.hint?m.jsx("code",{children:c.hint}):null]},c.to)),m.jsx(Ch,{demos:e.demos,pathname:n})]}),m.jsxs("div",{className:"side-foot",children:[m.jsx("p",{children:e.footer[0]}),m.jsx("p",{className:"muted",children:e.footer[1]})]})]}),m.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>o(!1)}),m.jsxs("div",{className:"main",id:"main",children:[m.jsxs("header",{className:"topbar",children:[m.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>o(c=>!c),children:m.jsx("span",{"aria-hidden":!0})}),m.jsx("span",{className:"crumb",children:a}),m.jsxs("div",{className:"topbar-right",children:[(d=e.stats)==null?void 0:d.map(c=>m.jsxs("span",{className:"topbar-stat",title:c.title,children:[m.jsx("b",{children:c.value})," ",c.label]},c.label)),m.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":r,onClick:i,title:"显示栏位参考线（快捷键 G）",children:[m.jsx("i",{"aria-hidden":!0}),"guides"]}),m.jsx("a",{className:"topbar-link",href:e.sourceUrl??yh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),m.jsx("div",{className:"guides","aria-hidden":!0}),m.jsx(S.Suspense,{fallback:m.jsx("div",{className:"loading",children:"loading modules…"}),children:m.jsx(vh,{children:m.jsxs(ih,{children:[e.routes.map(c=>m.jsx(Jt,{path:c.path,element:c.element},c.path)),m.jsx(Jt,{path:"/demo",element:m.jsx(Wi,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),m.jsx(Jt,{path:"/demo/:slug",element:m.jsx(xh,{demos:e.demos})}),m.jsx(Jt,{path:"*",element:m.jsx(Wi,{to:"/",replace:!0})})]})})})]})]})}function Ph({config:e}){return m.jsx(fh,{children:m.jsx(Sh,{config:e})})}const wh="modulepreload",kh=function(e,n){return new URL(e,n).href},Ps={},Ka=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){const i=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),a=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));r=Promise.allSettled(t.map(s=>{if(s=kh(s,o),s in Ps)return;Ps[s]=!0;const d=s.endsWith(".css"),c=d?'[rel="stylesheet"]':"";if(!!o)for(let C=i.length-1;C>=0;C--){const x=i[C];if(x.href===s&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":wh,d||(v.as="script"),v.crossOrigin="",v.href=s,a&&v.setAttribute("nonce",a),document.head.appendChild(v),d)return new Promise((C,x)=>{v.addEventListener("load",C),v.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${s}`)))})}))}function l(i){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=i,window.dispatchEvent(u),!u.defaultPrevented)throw i}return r.then(i=>{for(const u of i||[])u.status==="rejected"&&l(u.reason);return n().catch(l)})},dp="—",pp=e=>e.includes(".")?e.replace(/0+$/,"").replace(/\.$/,""):e;function _h(e,n="cash"){const t=typeof e=="number"&&Number.isFinite(e)?e:null;if(t===null)return dp;const o=t.toFixed(2);return n==="discount"?pp(o):o}function Eh(e){return e==null?{state:"none",value:null,text:"无门槛"}:typeof e!="number"||!Number.isFinite(e)?{state:"invalid",value:null,text:"门槛待确认"}:e===0?{state:"none",value:null,text:"无门槛"}:e<0?{state:"invalid",value:null,text:"门槛待确认"}:{state:"valid",value:e,text:`满${pp(e.toFixed(2))}可用`}}const Th={background:"#ffffff",color:"#1f2328",border:"1px solid #e8eaed",borderRadius:12,padding:16,fontFamily:"inherit"},Yr={display:"flex",gap:6,marginBottom:8},fp={fontSize:11,lineHeight:1.5,padding:"1px 8px",borderRadius:4,background:"#fff1f3",color:"#d03050",border:"1px solid #f3c9d2"},mp={fontSize:11,lineHeight:1.5,padding:"1px 8px",borderRadius:4,background:"#f2f3f5",color:"#5d636a",border:"1px solid #e8eaed"},jh={display:"flex",gap:12,alignItems:"stretch"},Rh={flex:"none",minWidth:104,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,textAlign:"center",padding:12,borderRadius:8,background:"#fff1f3",border:"1px solid #f3c9d2"},$h={color:"#d03050",fontWeight:700,lineHeight:1.1,whiteSpace:"nowrap"},Nh={fontSize:16,marginRight:2},ws={fontSize:30},Dh={fontSize:14,marginLeft:2},bh={fontSize:12,color:"#57606a"},Mh={flex:1,minWidth:0,display:"flex",flexDirection:"column",justifyContent:"center",gap:4},Oh={fontSize:15,fontWeight:600,lineHeight:1.4,overflowWrap:"anywhere"},gp={flex:"none",fontSize:12,color:"#57606a"},hp={display:"flex",alignItems:"center",flexWrap:"wrap",gap:6,marginTop:10,fontSize:12,color:"#57606a"},Lh={overflowWrap:"anywhere"},Ya={flex:"none",fontSize:11,lineHeight:1.6,padding:"0 6px",borderRadius:4},zh={...Ya,background:"#fff7e6",color:"#a54a00",border:"1px solid #ffd591"},Ah={...Ya,background:"#fff1f0",color:"#b32d08",border:"1px solid #ffa39e"},Ih={...Ya,background:"#f2f3f5",color:"#5d636a",border:"1px solid #e8eaed"},Fh={marginTop:10,fontSize:12},yp={color:"#57606a",marginBottom:4},vp={margin:0,paddingLeft:18,display:"grid",gap:2},Cp={color:"#1f2328",overflowWrap:"anywhere"},xp={marginTop:6,padding:0,border:0,background:"none",fontSize:12,color:"#1a66c2",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:4,fontFamily:"inherit"},Uh={fontSize:10},Xa={marginTop:12},Sp={width:"100%",padding:"9px 16px",border:0,borderRadius:8,fontSize:14,fontWeight:600,fontFamily:"inherit",cursor:"pointer",background:"#d03050",color:"#ffffff"},Ga={...Sp,cursor:"not-allowed",background:"#f2f3f5",color:"#5d636a",border:"1px solid #e8eaed"},Ja=S.forwardRef((e,n)=>{const{coupon:t,slots:o,phase:r,children:l,containerClassName:i,containerStyle:u,onMount:a,onUnmount:s,debug:d,containerRefExternal:c}=e,f=S.useRef(null),v=c??f,[,C]=S.useState(0),[x,w]=S.useState(!1);S.useImperativeHandle(n,()=>({getContainer:()=>v.current,forceUpdate:()=>C(k=>k+1),getSize:()=>{var k,_;return{width:((k=v.current)==null?void 0:k.offsetWidth)??0,height:((_=v.current)==null?void 0:_.offsetHeight)??0}},getPhase:()=>r}),[r,v]),S.useEffect(()=>(d&&console.debug("[CouponCore] mounted"),w(!0),a==null||a(),()=>s==null?void 0:s()),[]);const g=t.amountType==="discount",p=_h(t.amount,t.amountType),h=p===dp,y=Eh(t.threshold),P=t.thresholdText??y.text;return m.jsxs("div",{ref:v,className:i?`vc-coupon ${i}`:"vc-coupon","data-testid":"coupon-root","data-phase":r??"",style:{position:"relative",boxSizing:"border-box",...Th,...u},children:[o==null?void 0:o.before,m.jsxs("div",{className:"vc-coupon__body","data-testid":"coupon-body",style:jh,children:[m.jsxs("div",{className:"vc-coupon__face",style:Rh,children:[m.jsx("div",{className:"vc-coupon__amount","data-testid":"coupon-amount","data-invalid":h?"true":"false",style:$h,children:g?m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"vc-coupon__amount-value",style:ws,children:p}),m.jsx("span",{className:"vc-coupon__amount-unit",style:Dh,children:"折"})]}):m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"vc-coupon__amount-currency",style:Nh,children:"¥"}),m.jsx("span",{className:"vc-coupon__amount-value",style:ws,children:p})]})}),m.jsx("div",{className:"vc-coupon__threshold","data-testid":"coupon-threshold","data-state":y.state,style:bh,children:P})]}),m.jsx("div",{className:"vc-coupon__info",style:Mh,children:m.jsx("div",{className:"vc-coupon__title","data-testid":"coupon-title",style:Oh,children:t.title})})]}),o==null?void 0:o.after,o==null?void 0:o.footer,o==null?void 0:o.overlay,l,x?m.jsx("span",{"data-testid":"coupon-mounted",hidden:!0}):null]})});Ja.displayName="CouponCore";function Wh(){const e=new Map,n=new Map,t=(i,u)=>{const a=e.get(i);if(a)for(const s of[...a])try{s(u)}catch(d){console.warn(`[PluginBus] handler error for event "${i}"`,d)}},o=(i,u)=>{let a=e.get(i);return a||(a=new Set,e.set(i,a)),a.add(u),()=>{a==null||a.delete(u)}},r=(i,u)=>{const a=s=>{u(s),l(i,a)};return o(i,a)},l=(i,u)=>{var a;if(!u){e.delete(i);return}(a=e.get(i))==null||a.delete(u)};return{emit:t,on:o,once:r,off:l,getData:i=>n.get(i),setData:(i,u)=>{const a=n.get(i);n.set(i,u),a!==u&&t(i,u)},deleteData:i=>{const u=n.has(i);n.delete(i),u&&t(i,void 0)},hasData:i=>n.has(i),getAll:()=>{const i={};return n.forEach((u,a)=>{i[a]=u}),i},clear:()=>{e.clear(),n.clear()}}}function Pp(e){const n=new Map(e.map(u=>[u.name,u])),t=[];for(const u of e)for(const a of u.dependencies??[])n.has(a)||t.push(`${u.name} -> ${a}`);const o=[],r=new Set,l=[...e],i=u=>(u.dependencies??[]).every(a=>r.has(a)||!n.has(a));for(;l.length>0;){const u=l.filter(i);if(u.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${l.map(s=>s.name).join(" <-> ")}`);let a=u[0];for(const s of u)(s.priority??0)>(a.priority??0)&&(a=s);o.push(a),r.add(a.name),l.splice(l.indexOf(a),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),o}async function Vh(e,n={}){const{timeout:t=3e3,name:o="anonymous",hook:r="unknown"}=n;if(!t||t<=0)return await e();let l;const i=new Promise((u,a)=>{l=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${o} 的钩子 ${r} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),i])}finally{l&&clearTimeout(l)}}const Hh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function qh(e={}){const n=e.logger??console,t=e.sandbox??!0,o=e.timeout??3e3,r=[],l=[],i=new Map,u=()=>Pp([...i.values()].filter(s=>s.enabled!==!1)),a=s=>{i.set(s.name,{...s,enabled:s.enabled??!0}),s.init&&Promise.resolve(s.init()).catch(d=>{n.warn(`[PluginManager] init failed for ${s.name}`,d)})};return{register:a,registerAll:s=>{for(const d of s)a(d)},unregister:s=>{const d=i.get(s);d&&(d.destroy&&Promise.resolve(d.destroy()).catch(c=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,c)}),i.delete(s))},getPlugin:s=>i.get(s),getAllPlugins:()=>[...i.values()],getEnabledPlugins:()=>[...i.values()].filter(s=>s.enabled!==!1),getExecutionOrder:u,enable:s=>{const d=i.get(s);d&&(d.enabled=!0)},disable:s=>{const d=i.get(s);d&&(d.enabled=!1)},has:s=>i.has(s),executeHook:async(s,d,...c)=>{var f,v;for(const C of u()){const x=(f=C.hooks)==null?void 0:f[s];if(typeof x!="function")continue;const w=C.sandbox??t,g=C.timeout??o;let p;try{p=w?await Vh(()=>x(d,...c),{timeout:g,name:C.name,hook:String(s)}):await x(d,...c)}catch(h){if(r.push({plugin:C.name,hook:String(s),error:h}),n.warn(`[PluginManager] hook ${String(s)} failed in ${C.name}`,h),(v=e.onError)==null||v.call(e,C.name,String(s),h),s==="onError")break;continue}if(Hh.has(String(s))&&typeof p=="function"){l.push(p);continue}if(p===!1)return!1;if(p!==void 0&&p!==!0)return p}},clear:()=>{const s=l.splice(0);for(const d of s.reverse())try{d()}catch(c){n.warn("[PluginManager] cleanup failed",c)}for(const d of i.values())d.destroy&&Promise.resolve(d.destroy()).catch(c=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,c)});i.clear()},getErrors:()=>[...r]}}var Bh=Object.defineProperty,Qh=(e,n,t)=>n in e?Bh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Kh=(e,n,t)=>Qh(e,n+"",t);class Yh extends Do.Component{constructor(){super(...arguments),Kh(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var o,r;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(r=(o=this.props).onError)==null||r.call(o,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let lr=null;function Xh(e=!1){if(lr&&!e)return lr;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",l=/iPad|Tablet/i.test(r),i=/Mobile|Android|iPhone/i.test(r),u=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return lr={type:l?"tablet":i?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:n,viewportHeight:t,isTouchDevice:u,isRetina:o>=2},lr}function ks(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>Object.is(e[r],n[r]))}function Gh(e){const{plugins:n,props:t,data:o,initialState:r,containerRef:l,enableDebug:i=!1,managerOptions:u,extendContext:a}=e,s=S.useRef(null),d=l??s,c=S.useRef(null);c.current||(c.current=qh(u));const f=c.current,v=S.useRef(null);v.current||(v.current=Wh());const C=v.current,x=S.useRef(new Map),[w,g]=S.useState(r??{}),[,p]=S.useState(0),h=S.useCallback(()=>p(N=>N+1),[]),y=S.useMemo(()=>Xh(),[]),P=S.useRef(n),k=P.current;(k.length!==n.length||n.some((N,D)=>N!==k[D]))&&(P.current=n);const _=P.current,T=_.map(N=>N.name).join("|");S.useLayoutEffect(()=>{f.clear(),f.registerAll(_),i&&console.debug("[vane/plugin-core] plugins registered:",T)},[_]),S.useLayoutEffect(()=>()=>{f.executeHook("onUnmount",$.current),f.clear()},[f]);const b=S.useMemo(()=>Pp(_),[_]),$=S.useRef(null),M=S.useRef(t);ks(M.current,t)||(M.current=t);const F=M.current,He=S.useRef(o);ks(He.current,o)||(He.current=o);const bt=He.current,Mt=S.useMemo(()=>{const N={props:F,data:bt,bus:C,refs:{container:d,getContainer:()=>d.current},state:w,setState:D=>g(A=>({...A,...D})),shared:x.current,deviceInfo:y,forceUpdate:h,getSize:()=>{const D=d.current;return D?{width:D.offsetWidth,height:D.offsetHeight}:{width:0,height:0}},logger:console};return a?a(N):N},[F,bt,w,y,C,a]);$.current=Mt;const Ot=S.useCallback(N=>{var A,H;let D=N;for(const qe of b){const we=(A=qe.hooks)==null?void 0:A.transformProps;if(typeof we=="function")try{D=we(D)}catch(Ln){(((H=$.current)==null?void 0:H.logger)??console).warn(`[plugin-core] ${qe.name}.transformProps 执行失败，已跳过`,Ln)}}return D},[b]),Lt=S.useCallback(N=>{var A,H;let D=N;for(const qe of b){const we=(A=qe.hooks)==null?void 0:A.transformData;if(typeof we=="function")try{D=we($.current,D)}catch(Ln){(((H=$.current)==null?void 0:H.logger)??console).warn(`[plugin-core] ${qe.name}.transformData 执行失败，已跳过`,Ln)}}return D},[b]),j=S.useCallback((N,...D)=>f.executeHook(N,$.current,...D),[f]);return{manager:f,bus:C,context:Mt,state:w,setState:Mt.setState,execute:j,transformProps:Ot,transformData:Lt,orderedPlugins:b}}S.createContext(null);function ir(e,n,t){const{hook:o,position:r="after"}=t;return e.filter(l=>l.enabled!==!1).filter(l=>{var i;return typeof((i=l.hooks)==null?void 0:i[o])=="function"}).filter(l=>{var u;const i=(u=l.config)==null?void 0:u.slotPosition;return r==="before"?i==="before":r==="footer"?i===void 0||i==="after"||i==="footer":i===void 0||i==="after"}).sort((l,i)=>{var u,a;return(((u=l.config)==null?void 0:u.order)??0)-(((a=i.config)==null?void 0:a.order)??0)||(i.priority??0)-(l.priority??0)}).map(l=>{try{const i=l.hooks[o](n);return i==null?null:m.jsx(Yh,{children:i},`vane-slot-${l.name}`)}catch(i){return console.warn(`[vane/plugin-core] 插件 ${l.name} 的 ${o} 渲染失败`,i),null}})}function Jh(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:o,enableDebug:r=!1}=t,l=S.forwardRef((i,u)=>{const a=S.useRef(null),s=S.useRef({}),d=S.useRef(()=>{}),c=S.useCallback(M=>{d.current({phase:M})},[]),f=S.useCallback(()=>{d.current({rulesExpanded:!(s.current.rulesExpanded??!1)})},[]),v=i.coupon,C=i.order??null,x=S.useCallback(M=>{const F=M.state??{};return{...M,coupon:v,order:C,phase:F.phase??"available",setPhase:c,validity:F.validity??null,eligible:F.eligible??null,quotaReached:F.quotaReached===!0,rulesExpanded:F.rulesExpanded??!1,toggleRules:f}},[v,C,c,f]),w=Gh({plugins:o,props:i,data:i.data,containerRef:a,extendContext:x,enableDebug:r});s.current=w.state,d.current=w.setState;const g=w.context,p=S.useCallback((M,...F)=>w.execute(M,...F),[w.manager]);S.useEffect(()=>{p("onMount")},[p,w.orderedPlugins]);const h=S.useRef(i);S.useEffect(()=>{const M=h.current;M!==i&&(h.current=i,!(Zh(M.coupon,i.coupon)&&ey(M.order,i.order)&&M.data===i.data)&&p("onPropsChange",M,i))},[i,p]);const y=g.phase,P=S.useRef(void 0);S.useEffect(()=>{const M=P.current;if(M===void 0){P.current=y;return}M!==y&&(P.current=y,p("onPhaseChange",y,M),w.bus.emit("coupon:phase",{phase:y,prev:M}))},[y,p]);const k=g.validity,_=S.useRef(void 0);S.useEffect(()=>{const M=_.current;_.current=k,k&&M!==k&&(p("onValidityChange",k),w.bus.emit("coupon:validity",{validity:k}))},[k,p]);const T=S.useMemo(()=>({before:ir(w.orderedPlugins,g,{hook:"renderHeader",position:"before"}),after:ir(w.orderedPlugins,g,{hook:"renderHeader",position:"after"}),footer:ir(w.orderedPlugins,g,{hook:"renderFooter"}),overlay:ir(w.orderedPlugins,g,{hook:"renderOverlay"})}),[w.orderedPlugins,g.state,g.coupon,g.order,c,f]),b=w.transformProps(i),$={...b,containerRefExternal:a,debug:b.debug??r,slots:T,phase:g.phase,onMount:()=>{var M;(M=b.onMount)==null||M.call(b)},onUnmount:()=>{var M;(M=b.onUnmount)==null||M.call(b)}};return m.jsx(e,{ref:u,...$})});return l.displayName="WithPlugins(CouponCore)",l}function Zh(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>Object.is(e[r],n[r]))}function ey(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>Object.is(e[r],n[r]))}function O(e=[]){return Jh(Ja,e)}const Vl=O([]),so=24*60*60*1e3,Ze=e=>typeof e=="number"&&Number.isFinite(e),ar=e=>{const n=new Date(e),t=o=>String(o).padStart(2,"0");return`${n.getFullYear()}.${t(n.getMonth()+1)}.${t(n.getDate())}`};function ny(e,n){return Ze(e.validTo)?{start:Ze(e.validFrom)?e.validFrom:null,end:e.validTo}:Ze(e.validDays)&&e.validDays>0?Ze(n)?{start:n,end:n+e.validDays*so}:{start:null,end:null}:null}function ty(e,n,t){const o=ny(e,n);if(!o)return null;const r=[];return o.start!==null&&t<o.start&&r.push(o.start),o.end!==null&&t<=o.end&&r.push(o.end+1),r.length>0?Math.min(...r):null}function Xr(e,n={}){const t=n.now??(()=>Date.now()),o=n.urgentDays??3,r=t();if(Ze(e.validTo)){const l=Ze(e.validFrom)?r<e.validFrom:!1,i=r>e.validTo,u=Math.max(0,e.validTo-r),a=Math.ceil(u/so),s=Ze(e.validFrom)?`${ar(e.validFrom)} - ${ar(e.validTo)}`:`${ar(e.validTo)} 前`;return{mode:"absolute",valid:!i&&!l,expired:i,notStarted:l,remainingMs:u,text:s,urgent:!i&&!l&&a<=o}}if(Ze(e.validDays)){const l=Ze(n.claimedAt)?n.claimedAt:void 0;if(l===void 0)return{mode:"relative",valid:!0,expired:!1,notStarted:!1,remainingMs:null,text:`领取后 ${e.validDays} 天内有效`,urgent:!1};const i=l+e.validDays*so,u=r>i,a=Math.max(0,i-r),s=Math.ceil(a/so);return{mode:"relative",valid:!u,expired:u,notStarted:!1,remainingMs:a,text:`${ar(l)} 领取，${e.validDays} 天内有效`,urgent:!u&&s<=o}}return null}function oy(e,n){return JSON.stringify(e)===JSON.stringify(n)}const Hl=e=>typeof e=="number"&&Number.isFinite(e);function Za(e,n={}){const t=Hl(n.quota)?n.quota:Hl(e.quota)?e.quota:null,o=Hl(n.purchasedCount)&&n.purchasedCount>=0?n.purchasedCount:0;return{quota:t,purchased:o,reached:t!==null&&o>=t}}const qt=e=>typeof e=="number"&&Number.isFinite(e);function eu(e,n={}){const t=qt(n.total)?n.total:qt(e.total)?e.total:null,o=qt(n.claimed)?n.claimed:qt(e.claimed)?e.claimed:null,r=qt(n.stock)?n.stock:null,l=t!==null&&t>0&&o!==null&&o>=t,i=r!==null&&r<=0,u=t!==null&&t>0&&o!==null?Math.min(100,Math.round(Math.max(0,o)/t*100)):null,a=[];r!==null&&a.push(Math.max(0,r)),t!==null&&a.push(Math.max(0,t-Math.max(0,o??0)));const s=a.length>0?Math.min(...a):null;return{total:t,claimed:o,remaining:s,soldout:l||i,percent:u}}const co=e=>typeof e=="number"&&Number.isFinite(e),Bi=e=>Math.round(e*100),ry=e=>{if(!e||e.length===0)return null;let n=0;for(const t of e){if(!co(t==null?void 0:t.amount))continue;const o=co(t.quantity)&&t.quantity>0?t.quantity:1;n+=Bi(t.amount)*o}return n/100};function ly(e,n={}){var d,c,f,v;const t=[],o=co(n.amount)?n.amount:ry(n.items),r=e.threshold;let l=null;if(co(r)&&r>0)if(o===null)t.push("threshold");else{const C=Bi(r)-Bi(o);C>0&&(t.push("threshold"),l=C/100)}const i=Xr(e,{now:()=>co(n.now)?n.now:Date.now(),claimedAt:n.claimedAt});i!=null&&i.expired&&t.push("expired"),i!=null&&i.notStarted&&t.push("not-started");const u=e.scope;if(!!u&&((((d=u.sku)==null?void 0:d.length)??0)>0||(((c=u.category)==null?void 0:c.length)??0)>0||(((f=u.excludeSku)==null?void 0:f.length)??0)>0)){const C=n.items??[];if(C.length===0)t.push("scope");else if((v=u==null?void 0:u.excludeSku)!=null&&v.length&&C.some(x=>x.sku&&u.excludeSku.includes(x.sku)))t.push("scope");else{const x=(u==null?void 0:u.sku)??[],w=(u==null?void 0:u.category)??[];(x.length>0||w.length>0)&&(C.some(p=>!!p.sku&&x.includes(p.sku)||!!p.category&&w.includes(p.category))||t.push("scope"))}}const s=(n.applied??[]).filter(C=>C&&C.id!==e.id);return e.exclusiveGroup&&s.some(x=>x.exclusiveGroup===e.exclusiveGroup)&&t.push("exclusive"),s.length>0&&e.stackable!==!0&&t.push("stackable"),Za(e,{purchasedCount:n.purchasedCount}).reached&&t.push("quota"),eu(e).soldout&&t.push("soldout"),{eligible:t.length===0,reasons:t,thresholdGap:l,amount:o}}const iy={slug:"quickstart",title:"裸券 · 零插件",group:"basic",intro:"不装任何插件：面额区（¥ / 折）+ 门槛 + 标题，这就是核心组件本体的全部。"};function ay(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Vl,{coupon:{id:"c1",title:"新人专享券",amount:10,threshold:99}}),m.jsx(Vl,{coupon:{id:"c2",title:"服饰品类折扣券",amount:8.5,amountType:"discount",threshold:0}}),m.jsx(Vl,{coupon:{id:"c3",title:"自定义门槛文案",amount:30,thresholdText:"限下单实物商品"}})]})}const uy=Object.freeze(Object.defineProperty({__proto__:null,default:ay,meta:iy},Symbol.toStringTag,{value:"Module"})),sy={idle:"未开始",available:"立即领取",claiming:"领取中…",claimed:"已领取",used:"已使用",soldout:"已抢光",expired:"已过期","quota-limited":"已达限领上限"},_s=new Set(["used","soldout","expired"]),ur="claim:in-flight",sr="claim:mounted";function cy(e={}){const n={...sy,...e.texts},t={slotPosition:"after",order:10,...e},o=e.now??(()=>Date.now()),r=a=>{var x,w,g,p;const s=a.phase;if(_s.has(s)||s==="claimed"||s==="claiming")return null;const d=((x=a.state)==null?void 0:x.claimedAt)??void 0,c=Xr(a.coupon,{now:o,claimedAt:d}),f=(w=a.state)==null?void 0:w.validity;if(c!=null&&c.expired||f!=null&&f.expired)return"expired";if(eu(a.coupon,{stock:e.stock,total:e.total,claimed:e.claimed}).soldout)return"soldout";const C=Za(a.coupon,{quota:e.quota,purchasedCount:e.purchasedCount??((g=a.order)==null?void 0:g.purchasedCount)});return((p=a.state)==null?void 0:p.quotaReached)===!0||C.reached?"quota-limited":null},l=(a,s)=>{var d;((d=a.state)==null?void 0:d.phase)!==s&&a.setState({phase:s})},i=a=>{var c;const s=((c=a.state)==null?void 0:c.phase)??void 0;if(s===void 0){const f=r(a);f?a.setState({phase:f}):e.initialPhase&&a.setState({phase:e.initialPhase});return}const d=r(a);if(d){d!==s&&l(a,d);return}s==="quota-limited"&&l(a,"available")},u=a=>{const s=a.eligible??(a.order?ly(a.coupon,a.order):null);return(s==null?void 0:s.eligible)===!1};return{name:"claim-state",version:"0.1.0",description:"领取状态机：8 态相位流转（未开始/可领取/领取中/已领取/已使用/已抢空/已过期/已达限领上限），联动有效期、库存与限领自动降级",priority:32,config:t,hooks:{onMount:a=>{a.shared.set(sr,!0),i(a)},onPropsChange:a=>{i(a)},onValidityChange:(a,s)=>{s.expired&&!_s.has(a.phase)&&l(a,"expired")},onUnmount:a=>{a.shared.set(sr,!1),a.shared.delete(ur)},renderFooter:a=>{const s=a.phase,d=r(a),c=u(a),f=c&&!d,v=d??s,C=f?e.ineligibleText??"不可用":n[v]??v,x=v!=="available"||f,w=async()=>{var h,y,P,k;if(a.phase!=="available"||a.shared.get(ur)===!0)return;const g=u(a),p=r(a);if(p){l(a,p);return}if(!g){a.shared.set(ur,!0),l(a,"claiming");try{const _=await((h=e.claim)==null?void 0:h.call(e));if(a.shared.get(sr)!==!0)return;if(!_||_.ok!==!1){const b=Xr(a.coupon,{now:o,claimedAt:(y=a.state)==null?void 0:y.claimedAt});if(b!=null&&b.expired){l(a,"expired");return}a.setState({phase:"claimed",claimedAt:Date.now()})}else l(a,"available"),(P=e.onClaimError)==null||P.call(e,_==null?void 0:_.reason)}catch(_){if(a.shared.get(sr)!==!0)return;l(a,"available"),(k=e.onClaimError)==null||k.call(e,String(_))}finally{a.shared.delete(ur)}}};return m.jsx("div",{className:"vc-coupon__actions",style:Xa,"data-testid":"coupon-claim-area",children:m.jsx("button",{type:"button",style:s==="available"&&!x?Sp:Ga,"data-testid":"coupon-claim-btn","data-phase":s,"data-gate":d??"","data-eligible":c?"false":"true",disabled:x,"aria-disabled":x,onClick:()=>void w(),children:C})})}}}}const dy="ClaimStatePlugin",py="领取状态机：8 态相位流转（未开始/可领取/领取中/已领取/已使用/已抢空/已过期/已达限领上限），点击触发异步领取，联动有效期、库存、限领与订单可用性自动门控。",fy="0.1.0",my=["coupon","claim","state-machine","footer"],gy=[{name:"initialPhase",type:"CouponPhase",default:"-",description:"初始相位，默认 available（可领取）；硬门（过期/售罄/超限）优先"},{name:"claim",type:"() => Promise<{ ok?: boolean; reason?: string } | void>",default:"-",description:"异步领取回调；返回 ok:false 视为失败，回退 available 并触发 onClaimError"},{name:"stock",type:"number",default:"-",description:"剩余库存；≤ 0 自动降级 soldout（与 total/claimed 取并集）"},{name:"total",type:"number",default:"coupon.total",description:"发放总量覆盖；claimed ≥ total 时判售罄（与 ProgressPlugin 同口径）"},{name:"claimed",type:"number",default:"coupon.claimed",description:"已领取数覆盖（与 ProgressPlugin 同口径）"},{name:"quota",type:"number",default:"coupon.quota",description:"每人限领张数；超限进入 quota-limited"},{name:"purchasedCount",type:"number",default:"order.purchasedCount ?? 0",description:"当前用户已领张数"},{name:"now",type:"() => number",default:"Date.now",description:"判定时钟，点击时按它现算过期（不依赖可能陈旧的 state.validity）"},{name:"onPhaseChange",type:"(phase, prev) => void",default:"-",description:"相位变化回调"},{name:"onClaimError",type:"(reason?: string) => void",default:"-",description:"领取失败回调"},{name:"texts",type:"Partial<Record<CouponPhase, string>>",default:"-",description:"按钮文案按相位覆盖"},{name:"ineligibleText",type:"string",default:'"不可用"',description:"订单不可用（门槛/范围/互斥/叠加不满足）时的按钮文案"}],hy=["8 态状态机：idle / available / claiming / claimed / used / soldout / expired / quota-limited","库存并集口径：stock ≤ 0 或 claimed ≥ total 都降级 soldout（与 ProgressPlugin 共用 resolveStock）","限领超限降级 quota-limited（非终态，已领数下调后自动恢复 available）","过期判定按注入时钟现算；领取期间跨过 validTo 不落成功态","订单可用性（state.eligible 或 props.order）不满足时按钮显示「不可用」且不可点击","claimedAt 写入内核 state，供相对有效期锚定领取时刻"],yy=["领券中心","营销活动页","会员权益券"],vy=["渲染 footer 槽（priority 32）；事件钩子写内核 state，不在渲染期 setState。","expired 只覆盖非终态：已核销（used）的券不会被过期判定打回。","重入锁存于 context.shared，同一事件循环内连点只发起一次领取；卸载后异步返回不再写 state。",'当前 plugin-core 的 footer 槽按 position "after" 过滤，config.slotPosition 暂保持 after（元数据与真实槽位的统一待内核支持）。'],Cy="const Coupon = createCouponCard([createClaimStatePlugin({ claim: async () => ({ ok: true }), purchasedCount: 2, quota: 2 })]);",wp={name:dy,description:py,since:fy,tags:my,config:gy,features:hy,useCases:yy,notes:vy,example:Cy},Z=Object.assign(cy,{meta:wp}),xy=O([Z({claim:async()=>(await new Promise(e=>setTimeout(e,600)),{ok:!0})})]),Sy=O([Z({claim:async()=>(await new Promise(e=>setTimeout(e,600)),{ok:!1,reason:"超出限领数量"}),onClaimError:e=>console.warn("[claim 失败]",e)})]),Py={slug:"claim-state",title:"领取状态机",group:"basic",intro:"点击领取：available → claiming → claimed。第二张卡模拟领取失败，回退 available（终态 used/soldout/expired 不再响应点击）。"};function wy(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(xy,{coupon:{id:"cs1",title:"点击领取试试 · 成功流",amount:20,threshold:199}}),m.jsx(Sy,{coupon:{id:"cs2",title:"点击领取试试 · 失败回退流",amount:5,threshold:0}})]})}const ky=Object.freeze(Object.defineProperty({__proto__:null,default:wy,meta:Py},Symbol.toStringTag,{value:"Module"})),cr="validity:timer",_y=2147483647;function Ey(e={}){const n=e.urgentDays??3,t=e.now??(()=>Date.now()),o={slotPosition:"after",order:10,...e};function r(u){const a=u.shared.get(cr);a!==void 0&&(window.clearTimeout(a),u.shared.delete(cr))}function l(u){var c,f;const a=((c=u.state)==null?void 0:c.claimedAt)??void 0,s=Xr(u.coupon,{now:t,urgentDays:n,claimedAt:a});if(s===null){r(u);return}const d=((f=u.state)==null?void 0:f.validity)??null;oy(s,d)||u.setState({validity:s}),i(u)}function i(u){var f;r(u);const a=((f=u.state)==null?void 0:f.claimedAt)??void 0,s=ty(u.coupon,a,t());if(s===null)return;const d=Math.max(0,Math.min(s-t(),_y)),c=window.setTimeout(()=>{u.shared.delete(cr),l(u)},d);u.shared.set(cr,c)}return{name:"validity",version:"0.1.0",description:"有效期判定：绝对（validFrom/validTo）/ 相对（领取后 N 天）双模式，紧迫态强调、到期自动复查写 state 供领取状态机联动",priority:23,config:o,hooks:{onMount:u=>(l(u),()=>r(u)),onPropsChange:u=>{l(u)},onPhaseChange:u=>{l(u)},onUnmount:u=>{r(u)},renderHeader:u=>{const a=u.validity;if(!a||a.mode==="none")return null;const s=a.remainingMs!==null?Math.ceil(a.remainingMs/so):null;return m.jsxs("div",{style:hp,"data-testid":"coupon-validity","data-mode":a.mode,"data-expired":a.expired?"true":"false","data-urgent":a.urgent?"true":"false",children:[m.jsx("span",{style:gp,children:"有效期"}),m.jsx("span",{style:Lh,children:a.text}),a.expired?m.jsx("span",{style:Ah,children:"已过期"}):a.urgent&&s!==null?m.jsxs("span",{style:zh,children:["仅剩 ",s," 天"]}):a.notStarted?m.jsx("span",{style:Ih,children:"未开始"}):null]})}}}}const Ty="ValidityPlugin",jy="有效期判定：绝对（validFrom/validTo）与相对（领取后 N 天）双模式，紧迫态（剩余 ≤ N 天）强调展示，过期结果写内核 state 供领取状态机联动。",Ry="0.1.0",$y=["coupon","validity","date","after"],Ny=[{name:"now",type:"() => number",default:"Date.now",description:"当前时钟，可注入固定值用于测试/演示"},{name:"urgentDays",type:"number",default:"3",description:"紧迫阈值：剩余 ≤ N 天显示「仅剩 X 天」强调角标"}],Dy=["absolute：validFrom/validTo 区间展示 + 未开始/已过期判定","relative：未领取显示「领取后 N 天内有效」，已领取从 state.claimedAt 起算","到点自动复查：按「validFrom 或 validTo + 1ms」挂 setTimeout，页面停留跨过边界后自动收敛（P1-3）","产出 state.validity（changed 才写），ClaimStatePlugin 借 onValidityChange 降级 expired"],by=["固定活动周期的券","领取后 N 天生效的券"],My=["渲染 after 槽（priority 23 > RuleExpand 21），显示在规则区上方。","两种模式都未声明时不渲染也不写 state。","定时器存 context.shared，onMount 返回清理函数、onUnmount 兜底清理。"],Oy="const Coupon = createCouponCard([createValidityPlugin({ urgentDays: 3 })]);",kp={name:Ty,description:jy,since:Ry,tags:$y,config:Ny,features:Dy,useCases:by,notes:My,example:Oy},cn=Object.assign(Ey,{meta:kp}),ql=24*60*60*1e3,Bl=Date.now(),Ly=O([cn({urgentDays:3}),Z({claim:async()=>({ok:!0})})]),zy=O([cn(),Z({claim:async()=>({ok:!0})})]),Ay=O([cn(),Z({claim:async()=>({ok:!0})})]),Iy={slug:"validity",title:"有效期判定",group:"plugin",intro:"绝对（validFrom/validTo）与相对（领取后 N 天）双模式；紧迫态强调展示；过期的券会被状态机自动压到「已过期」。"};function Fy(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Ly,{coupon:{id:"v1",title:"紧迫态 · 仅剩 2 天",amount:15,threshold:99,validFrom:Bl-10*ql,validTo:Bl+2*ql}}),m.jsx(zy,{coupon:{id:"v2",title:"过期联动 · 按钮自动变已过期",amount:50,threshold:299,validTo:Bl-1*ql}}),m.jsx(Ay,{coupon:{id:"v3",title:"相对有效期 · 领取后 7 天",amount:8,threshold:0,validDays:7}})]})}const Uy=Object.freeze(Object.defineProperty({__proto__:null,default:Fy,meta:Iy},Symbol.toStringTag,{value:"Module"}));function Wy(e={}){const n=e.collapsedCount??1,t=e.expandText??"展开",o=e.collapseText??"收起",r=e.showCount??!0,l=e.title??"使用规则";return{name:"rule-expand",version:"0.1.0",description:"规则展开/收起：使用规则按条数折叠（默认 1 条），展开态写内核 state，可被宿主/其他插件复位",priority:21,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:u=>{const a=u.coupon.rules??[];if(a.length===0)return null;const s=u.rulesExpanded,d=s?a:a.slice(0,n),c=a.length-d.length;return m.jsxs("div",{style:Fh,"data-testid":"coupon-rules","data-expanded":s?"true":"false",children:[l?m.jsx("div",{style:yp,children:l}):null,m.jsx("ul",{style:vp,children:d.map((f,v)=>m.jsx("li",{style:Cp,"data-testid":`coupon-rule-${v}`,children:f},v))}),a.length>n?m.jsxs("button",{type:"button",style:xp,"data-testid":"coupon-rules-toggle","aria-expanded":s,onClick:()=>u.toggleRules(),children:[s?o:r?`${t} (${c} 项)`:t,m.jsx("span",{"aria-hidden":"true",style:Uh,children:s?"▲":"▼"})]}):null]})}}}}const Vy="RuleExpandPlugin",Hy="规则展开/收起：使用规则按条数折叠（默认 1 条），展开态写内核 state，可被宿主复位；不用 line-clamp 避免纵向裁切。",qy="0.1.0",By=["coupon","rules","expand","after"],Qy=[{name:"collapsedCount",type:"number",default:"1",description:"折叠态显示的规则条数"},{name:"expandText",type:"string",default:'"展开"',description:"展开按钮文案"},{name:"collapseText",type:"string",default:'"收起"',description:"收起按钮文案"},{name:"showCount",type:"boolean",default:"true",description:"按钮是否带剩余条数（「展开 (3 项)」）"},{name:"title",type:"string",default:'"使用规则"',description:"区域标题；传空字符串隐藏"}],Ky=["折叠态显示前 collapsedCount 条 + 「展开 (N 项)」，展开后全量 + 「收起」","展开态写内核 state.rulesExpanded（toggleRules）","rules 为空渲染 null；无更多条目时不渲染切换按钮"],Yy=["规则条目多的营销券","需要默认收纳的紧凑版面"],Xy=["渲染 after 槽（priority 21 < Validity 23），显示在有效期下方。","按条数截断而非 line-clamp：tasks/28 几何体检证明 line-clamp 是纵向裁切重灾区。"],Gy="const Coupon = createCouponCard([createRuleExpandPlugin({ collapsedCount: 2 })]);",_p={name:Vy,description:Hy,since:qy,tags:By,config:Qy,features:Ky,useCases:Yy,notes:Xy,example:Gy},On=Object.assign(Wy,{meta:_p}),Es=["本券仅限平台在售自营商品使用","不与店铺优惠券叠加，可与运费券叠加","订单部分退款时，按比例退回券面金额","单笔订单最多使用 1 张，核销后不找零","如在有效期内未使用，券自动作废且不予补发"],Jy=O([On({collapsedCount:1})]),Zy=O([On({collapsedCount:2,title:""})]),ev={slug:"rules",title:"规则展开 / 收起",group:"plugin",intro:"按条数折叠（不是 line-clamp——tasks/28 证明那是纵向裁切重灾区）。点击展开/收起，展开态写内核 state。"};function nv(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Jy,{coupon:{id:"r1",title:"默认折叠 1 条",amount:25,threshold:199,rules:Es}}),m.jsx(Zy,{coupon:{id:"r2",title:"折叠 2 条 · 无标题",amount:60,threshold:399,rules:Es}})]})}const tv=Object.freeze(Object.defineProperty({__proto__:null,default:nv,meta:ev},Symbol.toStringTag,{value:"Module"}));function ov(e={}){const n=e.text??"可叠加",t=e.notStackableText??"不可叠加";return{name:"stack",version:"0.1.0",description:"叠加态角标：按 coupon.stackable 渲染「可叠加/不可叠加」角标，可强制展示",priority:12,config:{slotPosition:"before",order:10,...e},hooks:{renderHeader:r=>{const l=r.coupon.stackable;return e.always||l===!0?m.jsx("div",{style:Yr,"data-testid":"coupon-badges",children:m.jsx("span",{style:fp,"data-testid":"coupon-stack-badge","data-stackable":"true",children:n})}):e.showWhenNotStackable&&l===!1?m.jsx("div",{style:Yr,"data-testid":"coupon-badges",children:m.jsx("span",{style:mp,"data-testid":"coupon-stack-badge","data-stackable":"false",children:t})}):null}}}}const rv="StackPlugin",lv="叠加态角标：按 coupon.stackable 渲染「可叠加」强调角标或「不可叠加」灰标，可强制展示；渲染在票面顶部角标区。",iv="0.1.0",av=["coupon","stack","badge","before"],uv=[{name:"text",type:"string",default:'"可叠加"',description:"可叠加角标文案"},{name:"notStackableText",type:"string",default:'"不可叠加"',description:"不可叠加角标文案"},{name:"showWhenNotStackable",type:"boolean",default:"false",description:"stackable === false 时是否渲染灰标"},{name:"always",type:"boolean",default:"false",description:"不看数据字段强制渲染可叠加角标"}],sv=["数据驱动：coupon.stackable === true → 强调角标；false + showWhenNotStackable → 灰标","always: true 强制渲染（组合示例/纯展示场景）"],cv=["可与店铺券/运费券叠加的券","需要明示叠加限制的营销位"],dv=['渲染 before 槽（priority 12）；config 必须显式 slotPosition: "before"，缺省会被 renderPluginSlot 落到 after。'],pv="const Coupon = createCouponCard([createStackPlugin({ showWhenNotStackable: true })]);",Ep={name:rv,description:lv,since:iv,tags:av,config:uv,features:sv,useCases:cv,notes:dv,example:pv},Ve=Object.assign(ov,{meta:Ep}),fv=O([Ve()]),mv=O([Ve({showWhenNotStackable:!0})]),gv=O([Ve({always:!0})]),hv={slug:"stack",title:"叠加态角标",group:"plugin",intro:"数据驱动：coupon.stackable === true 渲染「可叠加」强调角标；false + showWhenNotStackable 渲染灰标；always 强制渲染。"};function yv(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(fv,{coupon:{id:"s1",title:"可与运费券叠加",amount:18,threshold:128,stackable:!0}}),m.jsx(mv,{coupon:{id:"s2",title:"独享券 · 不可叠加",amount:40,threshold:259,stackable:!1}}),m.jsx(gv,{coupon:{id:"s3",title:"always 强制渲染（数据未声明）",amount:6,threshold:0}})]})}const vv=Object.freeze(Object.defineProperty({__proto__:null,default:yv,meta:hv},Symbol.toStringTag,{value:"Module"})),Ts=O([Z({claim:async()=>({ok:!0})}),cn({urgentDays:3}),On({collapsedCount:1}),Ve({showWhenNotStackable:!0})]),js=24*60*60*1e3,Rs=Date.now(),Cv={slug:"combined",title:"四插件合体",group:"advanced",intro:"before 角标 / after 有效期+规则 / footer 领取按钮。priority：claim-state 32 · validity 23 · rule-expand 21 · stack 12。"};function xv(){const e={id:"full1",title:"全插件合体 · 紧迫可领",amount:88,threshold:599,stackable:!0,validFrom:Rs-12*js,validTo:Rs+2*js,rules:["仅限「家电焕新」活动商品使用","可与运费券叠加，不与店铺券叠加","核销后部分退款按比例退回"]},n={id:"full2",title:"全插件合体 · 不可叠加",amount:12,threshold:0,stackable:!1,validDays:7,rules:["全场通用","有效期自领取日起算"]};return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Ts,{coupon:e}),m.jsx(Ts,{coupon:n})]})}const Sv=Object.freeze(Object.defineProperty({__proto__:null,default:xv,meta:Cv},Symbol.toStringTag,{value:"Module"})),Pv=O([Z({stock:0}),Ve()]),wv=O([Z({stock:3,claim:async()=>(await new Promise(e=>setTimeout(e,500)),{ok:!0})}),Ve()]),kv={slug:"limited",title:"限量 / 抢空",group:"advanced",intro:"stock ≤ 0 挂载即「已抢光」（终态）；有限库存正常领取。过期判定同理：expired 优先级低于已核销 used。"};function _v(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Pv,{coupon:{id:"l1",title:"已抢空的券",amount:100,threshold:999}}),m.jsx(wv,{coupon:{id:"l2",title:"限量抢购中",amount:66,threshold:699}})]})}const Ev=Object.freeze(Object.defineProperty({__proto__:null,default:_v,meta:kv},Symbol.toStringTag,{value:"Module"}));function Tv(e={}){const n=e.urgentPct??20,t=e.showRemaining??!0;return{name:"progress",version:"0.1.0",description:"领取进度条：按 total/claimed/stock 渲染已抢百分比进度条，剩余 ≤ N% 换紧迫色，数据轮询即刷新",priority:20,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:r=>{const l=eu(r.coupon,{total:e.total,claimed:e.claimed,stock:e.stock});if(l.total===null||l.total<=0||l.claimed===null||l.claimed<0)return null;const i=l.percent??0,u=l.remaining??0,a=100-i<=n;let s=`已抢 ${i}%`;return l.soldout?s="已抢完":a&&t&&(s+=` · 仅剩 ${u} 张`),m.jsxs("div",{className:"vc-coupon__progress",style:{marginTop:10,fontSize:12,color:hp.color},"data-testid":"coupon-progress","data-percent":String(i),"data-urgent":a?"true":"false","data-soldout":l.soldout?"true":"false",children:[m.jsx("div",{style:{height:6,borderRadius:3,background:"#f2f3f5",overflow:"hidden"},children:m.jsx("div",{style:{width:`${i}%`,height:"100%",borderRadius:3,background:a?"#a54a00":"#d03050",transition:"width 0.3s ease"}})}),m.jsx("div",{style:{marginTop:4,color:a?"#a54a00":"#57606a"},children:s})]})}}}}const jv="ProgressPlugin",Rv="领取进度条：按 total/claimed 渲染已抢百分比进度条，剩余 ≤ N% 换紧迫色，接口轮询数据刷新即更新。",$v="0.1.0",Nv=["coupon","progress","stock","after"],Dv=[{name:"total",type:"number",default:"coupon.total",description:"发放总量"},{name:"claimed",type:"number",default:"coupon.claimed",description:"已领取数"},{name:"stock",type:"number",default:"-",description:"剩余库存（宿主侧权威值）；≤ 0 与 claimed ≥ total 取并集判售罄"},{name:"urgentPct",type:"number",default:"20",description:"剩余 ≤ N% 标记紧迫"},{name:"showRemaining",type:"boolean",default:"true",description:"展示「仅剩 N 张」替代百分比"}],bv=["进度条宽度随 claimed/total 变化（claimed 超过 total 时封顶 100%）","紧迫色 #a54a00（对比度 5.6:1）","售罄判定与 ClaimStatePlugin 共用 resolveStock：任一条件成立即写「已抢完」并标记 data-soldout","无 total / claimed 等可判定数据时不渲染（不臆测进度）"],Mv=["限量抢购券","发券预算监控"],Ov="const Coupon = createCouponCard([createProgressPlugin({ urgentPct: 20 })]);",Tp={name:jv,description:Rv,since:$v,tags:Nv,config:Dv,features:bv,useCases:Mv,example:Ov},Zn=Object.assign(Tv,{meta:Tp}),Lv=O([Zn()]),zv=O([Zn({urgentPct:30})]),Av=O([Zn()]),Iv={slug:"progress",title:"抢购进度条",group:"plugin",intro:"total/claimed 驱动进度条与「已抢 X%」；剩余占比低于 urgentPct（默认 20）转紧迫色并追加「仅剩 N 张」；抢完后显示「已抢完」。"};function Fv(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Lv,{coupon:{id:"pg1",title:"常规进度 · 30/100",amount:10,threshold:0,total:100,claimed:30}}),m.jsx(zv,{coupon:{id:"pg2",title:"紧迫进度 · 85/100（urgentPct 30）",amount:50,threshold:299,total:100,claimed:85}}),m.jsx(Av,{coupon:{id:"pg3",title:"已抢完 · 100/100",amount:10,threshold:0,total:100,claimed:100}})]})}const Uv=Object.freeze(Object.defineProperty({__proto__:null,default:Fv,meta:Iv},Symbol.toStringTag,{value:"Module"}));function Wv(e={}){const n={slotPosition:"after",order:10,...e},t=r=>{var l;return Za(r.coupon,{quota:e.quota,purchasedCount:e.purchasedCount??((l=r.order)==null?void 0:l.purchasedCount)})},o=r=>{var a,s;const{quota:l,reached:i}=t(r);((a=r.state)==null?void 0:a.quotaReached)===!0!==i&&r.setState({quotaReached:i}),i&&l!==null&&((s=e.onExceed)==null||s.call(e,l))};return{name:"quota",version:"0.1.0",description:"每人限领：读 coupon.quota 与已领数渲染限领提示，超限写 state.quotaReached 供领取按钮门控",priority:19,config:n,hooks:{onMount:r=>{o(r)},onPropsChange:r=>{o(r)},renderHeader:r=>{const{quota:l,purchased:i,reached:u}=t(r);return l===null?null:m.jsxs("div",{style:{marginTop:10,fontSize:12,padding:"4px 8px",borderRadius:4,background:u?"#fff1f0":"#f6ffed",color:u?"#b32d08":"#237a06",border:`1px solid ${u?"#ffa39e":"#b7eb8f"}`},"data-testid":"coupon-quota","data-reached":u?"true":"false",children:["每人限领 ",l," 张（已领 ",i,"）",u?" · 已达限领上限":""]})}}}}const Vv="QuotaPlugin",Hv="每人限领：读 coupon.quota 与已领数渲染限领提示，超限写 state.quotaReached 并被领取按钮实际读取（quota-limited 门控）。",qv="0.1.0",Bv=["coupon","quota","limit","after"],Qv=[{name:"quota",type:"number",default:"coupon.quota",description:"每人限领张数"},{name:"purchasedCount",type:"number",default:"order.purchasedCount ?? 0",description:"当前用户已领张数"},{name:"onExceed",type:"(quota: number) => void",default:"-",description:"超限回调（入参为生效的限领张数）"}],Kv=["未声明 quota 视为不限领（渲染 null）","超限提示条红字","state.quotaReached 只有值变化时才写（避免父渲染空转）","ClaimStatePlugin 复用 resolveQuota 同一口径，超限时按钮进入 quota-limited（非终态，已领数下调后恢复）"],Yv=["每人限领 N 张的活动券","会员等级限领"],Xv="const Coupon = createCouponCard([createQuotaPlugin({ purchasedCount: 1 })]);",jp={name:Vv,description:Hv,since:qv,tags:Bv,config:Qv,features:Kv,useCases:Yv,example:Xv},et=Object.assign(Wv,{meta:jp}),Gv=O([et({quota:3,purchasedCount:1,onExceed:()=>console.warn("[quota] 超限")})]),Jv=O([et({quota:2,purchasedCount:2,onExceed:e=>console.warn("[quota] 已达上限",e)})]),Zv={slug:"quota",title:"限领提示",group:"plugin",intro:"config.quota + purchasedCount 驱动限领提示条：未超限绿字「还可领 N 张」，超限红字「已达限领上限」并触发 onExceed；未声明 quota 时插件不渲染。"};function e0(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Gv,{coupon:{id:"qt1",title:"还可领 · 1/3",amount:15,threshold:99}}),m.jsx(Jv,{coupon:{id:"qt2",title:"已超限 · 2/2",amount:15,threshold:99}})]})}const n0=Object.freeze(Object.defineProperty({__proto__:null,default:e0,meta:Zv},Symbol.toStringTag,{value:"Module"})),t0=e=>{const n=Math.max(0,Math.ceil(e/1e3)),t=String(Math.floor(n/3600)).padStart(2,"0"),o=String(Math.floor(n%3600/60)).padStart(2,"0"),r=String(n%60).padStart(2,"0");return`${t}:${o}:${r}`};function o0(e){const n=e.tickMs??1e3;return{name:"countdown",version:"0.1.0",description:"开抢倒计时：startAt 未到时渲染「距开抢 HH:MM:SS」，到点可自动开抢（autoStart）并触发 onFire",priority:15,config:{slotPosition:"before",order:10,...e},hooks:{onMount:o=>{const r=()=>{var u,a;const i=e.startAt-Date.now();o.setState({countdown:Math.max(0,i)}),i>0?((u=e.onCountdown)==null||u.call(e,i),l=window.setTimeout(r,n)):((a=e.onFire)==null||a.call(e),e.autoStart&&o.setPhase("available"))};let l=window.setTimeout(r,0);return()=>window.clearTimeout(l)},renderHeader:o=>{var l;const r=(l=o.state)==null?void 0:l.countdown;return typeof r!="number"||r<=0?null:m.jsx("div",{style:Yr,"data-testid":"coupon-countdown",children:m.jsxs("span",{style:{...fp,background:"#fff7e6",color:"#a54a00",border:"1px solid #ffd591",fontFamily:"var(--ff-mono, monospace)"},"data-testid":"coupon-countdown-value",children:["距开抢 ",t0(r)]})})}}}}const r0="CountdownPlugin",l0="开抢倒计时：startAt 未到时渲染「距开抢 HH:MM:SS」，到点可自动开抢（autoStart）并触发 onFire。",i0="0.1.0",a0=["coupon","countdown","timer","before"],u0=[{name:"startAt",type:"number",default:"-",description:"开抢时间（epoch ms），必填"},{name:"autoStart",type:"boolean",default:"false",description:"到点自动进入 available"},{name:"tickMs",type:"number",default:"1000",description:"定时精度"},{name:"onCountdown",type:"(remainingMs: number) => void",default:"-",description:"每跳回调"},{name:"onFire",type:"() => void",default:"-",description:"倒计时归零回调"}],s0=["onMount 挂 setTimeout 链（返回 cleanup，内核逆序执行）","剩余写内核 state.countdown","与 RemindPlugin 配合覆盖「未开始」全场景"],c0=["定时开抢活动","整点发券"],d0="const Coupon = createCouponCard([createCountdownPlugin({ startAt: Date.parse('2026-11-01T10:00:00'), autoStart: true })]);",Rp={name:r0,description:l0,since:i0,tags:a0,config:u0,features:s0,useCases:c0,example:d0},Dt=Object.assign(o0,{meta:Rp}),p0=O([Dt({startAt:Date.now()+2e4,tickMs:1e3,autoStart:!0,onFire:()=>console.log("[countdown] 开抢！")})]),f0={slug:"countdown",title:"开抢倒计时",group:"plugin",intro:"startAt 未到时渲染「距开抢 HH:MM:SS」；到点 autoStart 自动进入 available（本页 20 秒后开抢），并触发 onFire。"};function m0(){return m.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:m.jsx(p0,{coupon:{id:"cd1",title:"20 秒后自动开抢",amount:30,threshold:199}})})}const g0=Object.freeze(Object.defineProperty({__proto__:null,default:m0,meta:f0},Symbol.toStringTag,{value:"Module"}));function h0(e={}){return{name:"channel",version:"0.1.0",description:"渠道限定角标：按 coupon.channels / config.channels 渲染一组渠道小标",priority:14,config:{slotPosition:"before",order:20,...e},hooks:{renderHeader:t=>{const o=e.channels??t.coupon.channels;return!o||o.length===0?null:m.jsx("div",{style:Yr,"data-testid":"coupon-channels",children:o.map((r,l)=>m.jsx("span",{style:mp,"data-testid":"coupon-channel-badge",children:r},`${r}-${l}`))})}}}}const y0="ChannelPlugin",v0="渠道限定角标：按 coupon.channels / config.channels 渲染一组渠道小标（仅 APP / 仅新客…）。",C0="0.1.0",x0=["coupon","channel","badge","before"],S0=[{name:"channels",type:"string[]",default:"coupon.channels",description:"渠道标签列表"}],P0=["多渠道并列渲染","与 StackPlugin 同占 before 槽（order 20 排后）"],w0=["仅 APP 领取","新客专享"],k0='const Coupon = createCouponCard([createChannelPlugin({ channels: ["仅 APP"] })]);',$p={name:y0,description:v0,since:C0,tags:x0,config:S0,features:P0,useCases:w0,example:k0},zo=Object.assign(h0,{meta:$p}),_0=O([zo()]),E0=O([zo({channels:["会员专享","限领 1 次"]})]),T0={slug:"channel",title:"渠道小标",group:"plugin",intro:"渠道灰标组：coupon.channels 数据驱动与 config.channels 配置驱动双通道，config 优先；渲染在 before 槽、排在叠加标之后。"};function j0(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(_0,{coupon:{id:"ch1",title:"数据驱动渠道",amount:10,threshold:0,channels:["仅 APP","仅新客"]}}),m.jsx(E0,{coupon:{id:"ch2",title:"配置驱动渠道",amount:20,threshold:99}})]})}const R0=Object.freeze(Object.defineProperty({__proto__:null,default:j0,meta:T0},Symbol.toStringTag,{value:"Module"}));function $0(e={}){const n=e.text??"分享好友";return{name:"share",version:"0.1.0",description:"分享按钮：footer 槽渲染次按钮，分享能力由 onShare 回调提供",priority:31,config:{slotPosition:"after",order:10,...e},hooks:{renderFooter:o=>{if(!e.onShare)return null;const r=async()=>{var l;await((l=e.onShare)==null?void 0:l.call(e,o.coupon)),o.forceUpdate()};return m.jsx("div",{style:Xa,children:m.jsx("button",{type:"button",style:Ga,"data-testid":"coupon-share-btn",onClick:()=>void r(),children:n})})}}}}const N0="SharePlugin",D0="分享按钮：footer 槽渲染次按钮，分享能力由 onShare 回调提供；未配置 onShare 不渲染。",b0="0.1.0",M0=["coupon","share","footer"],O0=[{name:"text",type:"string",default:'"分享好友"',description:"按钮文案"},{name:"onShare",type:"() => void | Promise<void>",default:"-",description:"分享回调（必配才渲染）"}],L0=["muted 次按钮样式，排在领取按钮下方","onShare 后 forceUpdate 刷新闭包状态"],z0=["分享裂变领券","好友代领"],A0="const Coupon = createCouponCard([createSharePlugin({ onShare: () => tracker.share() })]);",Np={name:N0,description:D0,since:b0,tags:M0,config:O0,features:L0,useCases:z0,example:A0},gl=Object.assign($0,{meta:Np}),I0=O([gl({onShare:e=>console.log("[share]",e.id)})]),F0={slug:"share",title:"分享按钮",group:"plugin",intro:"footer 槽次按钮：配置 onShare 才渲染，点击触发回调；未配置 onShare 时插件不渲染。"};function U0(){return m.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:m.jsx(I0,{coupon:{id:"sh1",title:"点右下角分享这张券",amount:25,threshold:99}})})}const W0=Object.freeze(Object.defineProperty({__proto__:null,default:U0,meta:F0},Symbol.toStringTag,{value:"Module"}));function V0(e={}){const n=e.text??"开抢提醒",t=e.remindedText??"已设提醒 ✓";return{name:"remind",version:"0.1.0",description:"开抢提醒：未开抢（idle / 倒计时中 / validFrom 未到）渲染提醒开关，开关态写内核 state.reminded",priority:30,config:{slotPosition:"after",order:10,...e},hooks:{renderFooter:r=>{var s,d,c;const l=(s=r.state)==null?void 0:s.countdown;if(!(r.phase==="idle"||typeof l=="number"&&l>0||((d=r.validity)==null?void 0:d.notStarted)===!0))return null;const u=((c=r.state)==null?void 0:c.reminded)===!0,a=async()=>{var f;r.setState({reminded:!u}),(f=e.onRemind)==null||f.call(e,!u)};return m.jsx("div",{style:Xa,children:m.jsx("button",{type:"button",style:Ga,"data-testid":"coupon-remind-btn","data-on":u?"true":"false","aria-pressed":u,onClick:()=>void a(),children:u?t:n})})}}}}const H0="RemindPlugin",q0="开抢提醒：未开抢（idle / 倒计时中 / validFrom 未到）渲染提醒开关，开关态写内核 state.reminded，可被宿主复位。",B0="0.1.0",Q0=["coupon","remind","footer"],K0=[{name:"text",type:"string",default:'"开抢提醒"',description:"未提醒文案"},{name:"remindedText",type:"string",default:'"已设提醒 ✓"',description:"已提醒文案"},{name:"onRemind",type:"(on: boolean) => void",default:"-",description:"提醒开关回调"}],Y0=["渲染条件：phase === idle，或 CountdownPlugin 的 state.countdown > 0，或 validity.notStarted","aria-pressed 无障碍开关语义"],X0=["定时开抢前预约提醒","补货提醒"],G0=['当前 plugin-core 的 footer 槽按 position "after" 过滤，config.slotPosition 暂保持 after（元数据与真实槽位的统一待内核支持）。'],J0="const Coupon = createCouponCard([createRemindPlugin({ onRemind: (on) => api.setReminder(on) })]);",Dp={name:H0,description:q0,since:B0,tags:Q0,config:K0,features:Y0,useCases:X0,notes:G0,example:J0},nu=Object.assign(V0,{meta:Dp}),Z0=O([nu({onRemind:e=>console.log("[remind]",e?"已设提醒":"已取消提醒")}),Dt({startAt:Date.now()+36e5})]),eC={slug:"remind",title:"开抢提醒",group:"plugin",intro:"仅 idle（未开抢）相位渲染「开抢提醒」开关（aria-pressed），切换写 state.reminded 并触发 onRemind；开抢后自动消失。"};function nC(){return m.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:m.jsx(Z0,{coupon:{id:"rm1",title:"1 小时后开抢 · 可设提醒",amount:40,threshold:299}})})}const tC=Object.freeze(Object.defineProperty({__proto__:null,default:nC,meta:eC},Symbol.toStringTag,{value:"Module"})),dr="copy-code:timer",Bt="copy-code:mounted",oC=1600;function $s(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=typeof document.execCommand=="function"?document.execCommand("copy"):!1;return document.body.removeChild(n),t}catch{return!1}}function rC(e={}){const n=e.label??"券码",t={slotPosition:"after",order:10,...e},o=r=>{const l=r.shared.get(dr);l!==void 0&&(window.clearTimeout(l),r.shared.delete(dr))};return{name:"copy-code",version:"0.1.0",description:"券码复制：claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），结果写 state.codeCopied，失败经 onError 上报",priority:18,config:t,hooks:{onMount:r=>{r.shared.set(Bt,!0)},onUnmount:r=>{r.shared.set(Bt,!1),o(r),r.shared.delete(Bt)},renderHeader:r=>{var s;const l=r.phase;if(l!=="claimed"&&l!=="used")return null;const i=e.code??r.coupon.code;if(!i)return null;const u=((s=r.state)==null?void 0:s.codeCopied)===!0,a=async()=>{var v,C,x;let d=!1,c;if((v=navigator.clipboard)!=null&&v.writeText)try{await navigator.clipboard.writeText(i),d=!0}catch{d=$s(i),d||(c="clipboard-unavailable")}else d=$s(i),d||(c="clipboard-unavailable");if(r.shared.get(Bt)!==!0)return;r.setState({codeCopied:d}),d?(C=e.onCopied)==null||C.call(e,i):(x=e.onError)==null||x.call(e,c),o(r);const f=window.setTimeout(()=>{r.shared.delete(dr),r.shared.get(Bt)===!0&&r.setState({codeCopied:!1})},oC);r.shared.set(dr,f)};return m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10,fontSize:12},"data-testid":"coupon-code-area",children:[m.jsx("span",{style:gp,children:n}),m.jsx("code",{style:{fontFamily:"var(--ff-mono, monospace)",fontSize:12,padding:"2px 8px",borderRadius:4,background:"#f2f3f5",color:"#1f2328",border:"1px solid #e8eaed"},"data-testid":"coupon-code",children:i}),m.jsx("button",{type:"button",style:{padding:"2px 10px",fontSize:11,borderRadius:4,border:"1px solid #e8eaed",background:"#fff",color:"#1a66c2",cursor:"pointer",fontFamily:"inherit"},"data-testid":"coupon-copy-btn","data-copied":u?"true":"false",onClick:()=>void a(),children:u?"已复制":"复制"})]})}}}}const lC="CopyCodePlugin",iC="券码复制：claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），结果写 state.codeCopied。",aC="0.1.0",uC=["coupon","code","clipboard","after"],sC=[{name:"code",type:"string",default:"coupon.code",description:"券码"},{name:"label",type:"string",default:'"券码"',description:"标签文案"},{name:"onCopied",type:"(code: string) => void",default:"-",description:"复制成功回调"},{name:"onError",type:"(reason?: string) => void",default:"-",description:"复制失败回调（clipboard 与 execCommand 均失败时触发，reason 为 clipboard-unavailable）"}],cC=["claimed/used 之外的相位渲染 null","http 内网环境 execCommand 兜底（对齐 CodeBlock 的复制策略），两条路径都失败时经 onError 上报","1.6s 后自动还原按钮文案；连续点击先清旧定时器，卸载时统一清理"],dC=["口令券","线下核销码"],pC="const Coupon = createCouponCard([createCopyCodePlugin({ onCopied: (code) => tracker.copy(code) })]);",bp={name:lC,description:iC,since:aC,tags:uC,config:sC,features:cC,useCases:dC,example:pC},Ao=Object.assign(rC,{meta:bp}),fC=O([Ao({code:"SAVE-2026"}),Z({claim:async()=>(await new Promise(e=>setTimeout(e,400)),{ok:!0})})]),mC={slug:"copy-code",title:"券码复制",group:"plugin",intro:"claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），复制后 1.6 秒自动还原；available 相位不渲染。"};function gC(){return m.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:m.jsx(fC,{coupon:{id:"cc1",title:"先领取，再看券码复制",amount:20,threshold:99}})})}const hC=Object.freeze(Object.defineProperty({__proto__:null,default:gC,meta:mC},Symbol.toStringTag,{value:"Module"})),yC=e=>{const n=new Date(e),t=o=>String(o).padStart(2,"0");return`${n.getFullYear()}.${t(n.getMonth()+1)}.${t(n.getDate())}`};function vC(e={}){const n=e.max??3,t=e.format??yC;return{name:"history",version:"0.1.0",description:"领取记录：按 coupon.history / config.records 倒序渲染最近 N 条领取/使用记录",priority:17,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:r=>{const l=e.records??r.coupon.history;if(!l||l.length===0)return null;const i=[...l].sort((u,a)=>a.at-u.at).slice(0,n);return m.jsxs("div",{style:{marginTop:10,fontSize:12},"data-testid":"coupon-history",children:[m.jsx("div",{style:yp,children:"领取记录"}),m.jsx("ul",{style:vp,children:i.map((u,a)=>m.jsxs("li",{style:Cp,"data-testid":`coupon-history-item-${a}`,children:[m.jsx("span",{style:{color:"#57606a"},children:t(u.at)})," · ",u.action]},`${u.at}-${a}`))})]})}}}}const CC="HistoryPlugin",xC="领取记录：按 coupon.history / config.records 倒序渲染最近 N 条领取/使用记录。",SC="0.1.0",PC=["coupon","history","after"],wC=[{name:"records",type:"{ at: number; action: string }[]",default:"coupon.history",description:"记录列表，at 为 epoch ms"},{name:"max",type:"number",default:"3",description:"最多展示条数"},{name:"format",type:"(at: number) => string",default:"YYYY.MM.DD",description:"时间格式化"}],kC=["按时间倒序","空记录渲染 null","复用规则区的列表样式"],_C=["多批次领取记录","核销流水展示"],EC="const Coupon = createCouponCard([createHistoryPlugin({ max: 5 })]);",Mp={name:CC,description:xC,since:SC,tags:PC,config:wC,features:kC,useCases:_C,example:EC},Io=Object.assign(vC,{meta:Mp}),TC=O([Io({max:3})]),jC=O([Io()]),RC={slug:"history",title:"领取记录",group:"plugin",intro:"coupon.history（{at, action}[]）按时间倒序渲染最近 max（默认 3）条；无记录时插件不渲染。"};function $C(){const e=Date.now();return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(TC,{coupon:{id:"hs1",title:"最近 3 条记录",amount:10,threshold:0,history:[{at:e-864e5,action:"领取成功"},{at:e-36e5,action:"已使用"},{at:e-6e4,action:"再次领取"},{at:e-1e3,action:"这条超出 max 不会显示"}]}}),m.jsx(jC,{coupon:{id:"hs2",title:"无记录 · 不渲染",amount:5,threshold:0}})]})}const NC=Object.freeze(Object.defineProperty({__proto__:null,default:$C,meta:RC},Symbol.toStringTag,{value:"Module"}));function DC(e={}){const n=(t,o,r)=>{var l;t.bus.emit(o,r),t.bus.emit("coupon:analytics",{event:o,...r}),(l=e.onEvent)==null||l.call(e,o,r)};return{name:"analytics",version:"0.1.0",description:"券埋点：coupon:mount / coupon:claim / coupon:error 三类事件，回调与总线 coupon:analytics 双通道，自身不渲染 UI",priority:90,config:{},hooks:{onMount:t=>{n(t,"coupon:mount",{couponId:t.coupon.id,phase:t.phase})},onPhaseChange:(t,o)=>{n(t,"coupon:claim",{couponId:t.coupon.id,phase:o})},onError:(t,o)=>{n(t,"coupon:error",{couponId:t.coupon.id,message:String(o)})}}}}const bC="AnalyticsPlugin",MC="券埋点：coupon:mount / coupon:claim / coupon:error 三类事件，回调与总线 coupon:analytics 双通道，自身不渲染 UI。",OC="0.1.0",LC=["coupon","analytics","event"],zC=[{name:"onEvent",type:"(event: string, payload: Record<string, unknown>) => void",default:"-",description:"埋点回调（与总线双通道）"}],AC=["priority 90 事件链最前","couponId + phase 随事件上报","对齐 vane-sku Analytics 的双通道约定"],IC=["领券转化漏斗","A/B 实验埋点"],FC="const Coupon = createCouponCard([createAnalyticsPlugin({ onEvent: (e, p) => tracker.send(e, p) })]);",Op={name:bC,description:MC,since:OC,tags:LC,config:zC,features:AC,useCases:IC,example:FC},tu=Object.assign(DC,{meta:Op}),UC=O([tu({onEvent:e=>console.log("[analytics 回调]",e)})]),WC={slug:"analytics",title:"行为埋点",group:"plugin",intro:"无 UI 插件：mount / 领取 / 异常三类事件双通道上报（onEvent 回调 + bus.emit，事件名 coupon:mount / coupon:claim / coupon:error，另有 coupon:analytics 包装通道）。打开控制台看输出。"};function VC(){return m.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:m.jsx(UC,{coupon:{id:"an1",title:"挂载即上报 coupon:mount",amount:10,threshold:0}})})}const HC=Object.freeze(Object.defineProperty({__proto__:null,default:VC,meta:WC},Symbol.toStringTag,{value:"Module"}));function qC(e={}){const n=e.text??"查看完整规则";return{name:"detail-link",version:"0.1.0",description:"完整规则链接：href 渲染 <a>、onDetail 渲染 <button>，落在规则区下方",priority:16,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:o=>{if(!e.href&&!e.onDetail)return null;const r={marginTop:6,padding:0,border:0,background:"none",fontSize:12,color:xp.color,cursor:"pointer",fontFamily:"inherit",textDecoration:"underline",textUnderlineOffset:2};return e.href?m.jsx("div",{style:{marginTop:6},children:m.jsxs("a",{href:e.href,target:"_blank",rel:"noreferrer",style:r,"data-testid":"coupon-detail-link",children:[n," ›"]})}):m.jsx("div",{style:{marginTop:6},children:m.jsxs("button",{type:"button",style:r,"data-testid":"coupon-detail-link",onClick:()=>{var l;return(l=e.onDetail)==null?void 0:l.call(e)},children:[n," ›"]})})}}}}const BC="DetailLinkPlugin",QC="完整规则链接：href 渲染 <a>、onDetail 渲染 <button>，落在规则区下方。",KC="0.1.0",YC=["coupon","link","after"],XC=[{name:"href",type:"string",default:"-",description:"详情页链接（有则渲染 <a>）"},{name:"text",type:"string",default:'"查看完整规则"',description:"链接文案"},{name:"onDetail",type:"() => void",default:"-",description:"点击回调（无 href 时渲染 <button>）"}],GC=["href 与 onDetail 都未配置渲染 null","下划线 + › 视觉与规则区衔接"],JC=["规则详情页跳转","弹层查看完整规则"],ZC="const Coupon = createCouponCard([createDetailLinkPlugin({ href: '/help/coupon-rules' })]);",Lp={name:BC,description:QC,since:KC,tags:YC,config:XC,features:GC,useCases:JC,example:ZC},Fo=Object.assign(qC,{meta:Lp}),ex=O([Fo({href:"/help/coupon-rules"})]),nx=O([Fo({onDetail:()=>console.log("[detail] 打开详情弹层")})]),tx={slug:"detail-link",title:"详情入口",group:"plugin",intro:'after 槽文字链：配 href 渲染 <a target="_blank">，配 onDetail 渲染 <button>，两者都没有则不渲染；色值复用规则展开开关的同款链接色。'};function ox(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(ex,{coupon:{id:"dl1",title:"href 跳转形态",amount:10,threshold:0}}),m.jsx(nx,{coupon:{id:"dl2",title:"onDetail 回调形态",amount:20,threshold:99}})]})}const rx=Object.freeze(Object.defineProperty({__proto__:null,default:ox,meta:tx},Symbol.toStringTag,{value:"Module"})),lx=`import React from "react";
import { CouponCard } from "vane-coupon";

export const meta = {
  slug: "quickstart",
  title: "裸券 · 零插件",
  group: "basic" as const,
  intro: "不装任何插件：面额区（¥ / 折）+ 门槛 + 标题，这就是核心组件本体的全部。",
};

export default function QuickstartDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <CouponCard
        coupon={{ id: "c1", title: "新人专享券", amount: 10, threshold: 99 }}
      />
      <CouponCard
        coupon={{
          id: "c2",
          title: "服饰品类折扣券",
          amount: 8.5,
          amountType: "discount",
          threshold: 0,
        }}
      />
      <CouponCard
        coupon={{
          id: "c3",
          title: "自定义门槛文案",
          amount: 30,
          thresholdText: "限下单实物商品",
        }}
      />
    </div>
  );
}
`,ix=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createClaimStatePlugin } from "vane-coupon/custom-plugins/ClaimStatePlugin";

/**
 * 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。
 */
const ClaimCoupon = createCouponCard([
  createClaimStatePlugin({
    claim: async () => {
      await new Promise((r) => setTimeout(r, 600));
      return { ok: true };
    },
  }),
]);

const FailCoupon = createCouponCard([
  createClaimStatePlugin({
    claim: async () => {
      await new Promise((r) => setTimeout(r, 600));
      return { ok: false, reason: "超出限领数量" };
    },
    onClaimError: (reason) => console.warn("[claim 失败]", reason),
  }),
]);

export const meta = {
  slug: "claim-state",
  title: "领取状态机",
  group: "basic" as const,
  intro:
    "点击领取：available → claiming → claimed。第二张卡模拟领取失败，回退 available（终态 used/soldout/expired 不再响应点击）。",
};

export default function ClaimStateDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <ClaimCoupon
        coupon={{ id: "cs1", title: "点击领取试试 · 成功流", amount: 20, threshold: 199 } as CouponData}
      />
      <FailCoupon
        coupon={{ id: "cs2", title: "点击领取试试 · 失败回退流", amount: 5, threshold: 0 } as CouponData}
      />
    </div>
  );
}
`,ax=`import React from "react";
import { createCouponCard } from "vane-coupon";
import { createClaimStatePlugin } from "vane-coupon/custom-plugins/ClaimStatePlugin";
import { createValidityPlugin } from "vane-coupon/custom-plugins/ValidityPlugin";

const DAY = 24 * 60 * 60 * 1000;
const NOW = Date.now();

/** 紧迫：还剩 2 天（≤ urgentDays 3） */
const UrgentCoupon = createCouponCard([
  createValidityPlugin({ urgentDays: 3 }),
  createClaimStatePlugin({ claim: async () => ({ ok: true }) }),
]);

/** 已过期：validTo 在过去 → 有效期行打「已过期」，状态机联动降级 expired */
const ExpiredCoupon = createCouponCard([
  createValidityPlugin(),
  createClaimStatePlugin({ claim: async () => ({ ok: true }) }),
]);

/** 相对有效期：未领取时显示「领取后 N 天内有效」，领取后从 claimedAt 起算 */
const RelativeCoupon = createCouponCard([
  createValidityPlugin(),
  createClaimStatePlugin({ claim: async () => ({ ok: true }) }),
]);

export const meta = {
  slug: "validity",
  title: "有效期判定",
  group: "plugin" as const,
  intro:
    "绝对（validFrom/validTo）与相对（领取后 N 天）双模式；紧迫态强调展示；过期的券会被状态机自动压到「已过期」。",
};

export default function ValidityDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <UrgentCoupon
        coupon={{
          id: "v1",
          title: "紧迫态 · 仅剩 2 天",
          amount: 15,
          threshold: 99,
          validFrom: NOW - 10 * DAY,
          validTo: NOW + 2 * DAY,
        }}
      />
      <ExpiredCoupon
        coupon={{
          id: "v2",
          title: "过期联动 · 按钮自动变已过期",
          amount: 50,
          threshold: 299,
          validTo: NOW - 1 * DAY,
        }}
      />
      <RelativeCoupon
        coupon={{
          id: "v3",
          title: "相对有效期 · 领取后 7 天",
          amount: 8,
          threshold: 0,
          validDays: 7,
        }}
      />
    </div>
  );
}
`,ux=`import React from "react";
import { createCouponCard } from "vane-coupon";
import { createRuleExpandPlugin } from "vane-coupon/custom-plugins/RuleExpandPlugin";

const RULES = [
  "本券仅限平台在售自营商品使用",
  "不与店铺优惠券叠加，可与运费券叠加",
  "订单部分退款时，按比例退回券面金额",
  "单笔订单最多使用 1 张，核销后不找零",
  "如在有效期内未使用，券自动作废且不予补发",
];

const Fold1 = createCouponCard([createRuleExpandPlugin({ collapsedCount: 1 })]);
const Fold2 = createCouponCard([
  createRuleExpandPlugin({ collapsedCount: 2, title: "" }),
]);

export const meta = {
  slug: "rules",
  title: "规则展开 / 收起",
  group: "plugin" as const,
  intro:
    "按条数折叠（不是 line-clamp——tasks/28 证明那是纵向裁切重灾区）。点击展开/收起，展开态写内核 state。",
};

export default function RulesDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <Fold1
        coupon={{
          id: "r1",
          title: "默认折叠 1 条",
          amount: 25,
          threshold: 199,
          rules: RULES,
        }}
      />
      <Fold2
        coupon={{
          id: "r2",
          title: "折叠 2 条 · 无标题",
          amount: 60,
          threshold: 399,
          rules: RULES,
        }}
      />
    </div>
  );
}
`,sx=`import React from "react";
import { createCouponCard } from "vane-coupon";
import { createStackPlugin } from "vane-coupon/custom-plugins/StackPlugin";

const StackableCoupon = createCouponCard([createStackPlugin()]);
const NotStackableCoupon = createCouponCard([
  createStackPlugin({ showWhenNotStackable: true }),
]);
const ForcedCoupon = createCouponCard([createStackPlugin({ always: true })]);

export const meta = {
  slug: "stack",
  title: "叠加态角标",
  group: "plugin" as const,
  intro:
    "数据驱动：coupon.stackable === true 渲染「可叠加」强调角标；false + showWhenNotStackable 渲染灰标；always 强制渲染。",
};

export default function StackDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <StackableCoupon
        coupon={{
          id: "s1",
          title: "可与运费券叠加",
          amount: 18,
          threshold: 128,
          stackable: true,
        }}
      />
      <NotStackableCoupon
        coupon={{
          id: "s2",
          title: "独享券 · 不可叠加",
          amount: 40,
          threshold: 259,
          stackable: false,
        }}
      />
      <ForcedCoupon
        coupon={{
          id: "s3",
          title: "always 强制渲染（数据未声明）",
          amount: 6,
          threshold: 0,
        }}
      />
    </div>
  );
}
`,cx=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createClaimStatePlugin } from "vane-coupon/custom-plugins/ClaimStatePlugin";
import { createValidityPlugin } from "vane-coupon/custom-plugins/ValidityPlugin";
import { createRuleExpandPlugin } from "vane-coupon/custom-plugins/RuleExpandPlugin";
import { createStackPlugin } from "vane-coupon/custom-plugins/StackPlugin";

/** 全家桶装配：角标 → 有效期 → 规则 → 领取按钮，四槽各归其位 */
const FullCoupon = createCouponCard([
  createClaimStatePlugin({ claim: async () => ({ ok: true }) }),
  createValidityPlugin({ urgentDays: 3 }),
  createRuleExpandPlugin({ collapsedCount: 1 }),
  createStackPlugin({ showWhenNotStackable: true }),
]);

const DAY = 24 * 60 * 60 * 1000;
const NOW = Date.now();

export const meta = {
  slug: "combined",
  title: "四插件合体",
  group: "advanced" as const,
  intro:
    "before 角标 / after 有效期+规则 / footer 领取按钮。priority：claim-state 32 · validity 23 · rule-expand 21 · stack 12。",
};

export default function CombinedDemo() {
  const coupon = {
    id: "full1",
    title: "全插件合体 · 紧迫可领",
    amount: 88,
    threshold: 599,
    stackable: true,
    validFrom: NOW - 12 * DAY,
    validTo: NOW + 2 * DAY,
    rules: [
      "仅限「家电焕新」活动商品使用",
      "可与运费券叠加，不与店铺券叠加",
      "核销后部分退款按比例退回",
    ],
  } as CouponData;

  const coupon2 = {
    id: "full2",
    title: "全插件合体 · 不可叠加",
    amount: 12,
    threshold: 0,
    stackable: false,
    validDays: 7,
    rules: ["全场通用", "有效期自领取日起算"],
  } as CouponData;

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <FullCoupon coupon={coupon} />
      <FullCoupon coupon={coupon2} />
    </div>
  );
}
`,dx=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createClaimStatePlugin } from "vane-coupon/custom-plugins/ClaimStatePlugin";
import { createStackPlugin } from "vane-coupon/custom-plugins/StackPlugin";

/** stock ≤ 0：挂载即降级 soldout（已抢光） */
const SoldoutCoupon = createCouponCard([
  createClaimStatePlugin({ stock: 0 }),
  createStackPlugin(),
]);

/** stock 3：正常可领（真实场景里 stock 来自接口轮询，重建插件即可刷新） */
const LimitedCoupon = createCouponCard([
  createClaimStatePlugin({
    stock: 3,
    claim: async () => {
      await new Promise((r) => setTimeout(r, 500));
      return { ok: true };
    },
  }),
  createStackPlugin(),
]);

export const meta = {
  slug: "limited",
  title: "限量 / 抢空",
  group: "advanced" as const,
  intro:
    "stock ≤ 0 挂载即「已抢光」（终态）；有限库存正常领取。过期判定同理：expired 优先级低于已核销 used。",
};

export default function LimitedDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <SoldoutCoupon
        coupon={{ id: "l1", title: "已抢空的券", amount: 100, threshold: 999 } as CouponData}
      />
      <LimitedCoupon
        coupon={{ id: "l2", title: "限量抢购中", amount: 66, threshold: 699 } as CouponData}
      />
    </div>
  );
}
`,px=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createProgressPlugin } from "vane-coupon/custom-plugins/ProgressPlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const NormalCoupon = createCouponCard([createProgressPlugin()]);
const UrgentCoupon = createCouponCard([createProgressPlugin({ urgentPct: 30 })]);
const SoldoutCoupon = createCouponCard([createProgressPlugin()]);

export const meta = {
  slug: "progress",
  title: "抢购进度条",
  group: "plugin" as const,
  intro:
    "total/claimed 驱动进度条与「已抢 X%」；剩余占比低于 urgentPct（默认 20）转紧迫色并追加「仅剩 N 张」；抢完后显示「已抢完」。",
};

export default function ProgressDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <NormalCoupon
        coupon={{ id: "pg1", title: "常规进度 · 30/100", amount: 10, threshold: 0, total: 100, claimed: 30 } as CouponData}
      />
      <UrgentCoupon
        coupon={{ id: "pg2", title: "紧迫进度 · 85/100（urgentPct 30）", amount: 50, threshold: 299, total: 100, claimed: 85 } as CouponData}
      />
      <SoldoutCoupon
        coupon={{ id: "pg3", title: "已抢完 · 100/100", amount: 10, threshold: 0, total: 100, claimed: 100 } as CouponData}
      />
    </div>
  );
}
`,fx=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createQuotaPlugin } from "vane-coupon/custom-plugins/QuotaPlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const OkCoupon = createCouponCard([
  createQuotaPlugin({ quota: 3, purchasedCount: 1, onExceed: () => console.warn("[quota] 超限") }),
]);
const ExceededCoupon = createCouponCard([
  createQuotaPlugin({ quota: 2, purchasedCount: 2, onExceed: (q) => console.warn("[quota] 已达上限", q) }),
]);

export const meta = {
  slug: "quota",
  title: "限领提示",
  group: "plugin" as const,
  intro:
    "config.quota + purchasedCount 驱动限领提示条：未超限绿字「还可领 N 张」，超限红字「已达限领上限」并触发 onExceed；未声明 quota 时插件不渲染。",
};

export default function QuotaDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <OkCoupon coupon={{ id: "qt1", title: "还可领 · 1/3", amount: 15, threshold: 99 } as CouponData} />
      <ExceededCoupon coupon={{ id: "qt2", title: "已超限 · 2/2", amount: 15, threshold: 99 } as CouponData} />
    </div>
  );
}
`,mx=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createCountdownPlugin } from "vane-coupon/custom-plugins/CountdownPlugin";

/**
 * 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。
 * startAt 设在 20 秒后：等 20 秒可看到到点 autoStart 自动进入可领取。
 */
const CountdownCoupon = createCouponCard([
  createCountdownPlugin({
    startAt: Date.now() + 20_000,
    tickMs: 1000,
    autoStart: true,
    onFire: () => console.log("[countdown] 开抢！"),
  }),
]);

export const meta = {
  slug: "countdown",
  title: "开抢倒计时",
  group: "plugin" as const,
  intro:
    "startAt 未到时渲染「距开抢 HH:MM:SS」；到点 autoStart 自动进入 available（本页 20 秒后开抢），并触发 onFire。",
};

export default function CountdownDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <CountdownCoupon
        coupon={{ id: "cd1", title: "20 秒后自动开抢", amount: 30, threshold: 199 } as CouponData}
      />
    </div>
  );
}
`,gx=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createChannelPlugin } from "vane-coupon/custom-plugins/ChannelPlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const DataCoupon = createCouponCard([createChannelPlugin()]);
const ConfigCoupon = createCouponCard([createChannelPlugin({ channels: ["会员专享", "限领 1 次"] })]);

export const meta = {
  slug: "channel",
  title: "渠道小标",
  group: "plugin" as const,
  intro:
    "渠道灰标组：coupon.channels 数据驱动与 config.channels 配置驱动双通道，config 优先；渲染在 before 槽、排在叠加标之后。",
};

export default function ChannelDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <DataCoupon
        coupon={{ id: "ch1", title: "数据驱动渠道", amount: 10, threshold: 0, channels: ["仅 APP", "仅新客"] } as CouponData}
      />
      <ConfigCoupon coupon={{ id: "ch2", title: "配置驱动渠道", amount: 20, threshold: 99 } as CouponData} />
    </div>
  );
}
`,hx=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createSharePlugin } from "vane-coupon/custom-plugins/SharePlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const ShareCoupon = createCouponCard([
  createSharePlugin({ onShare: (coupon) => console.log("[share]", coupon.id) }),
]);

export const meta = {
  slug: "share",
  title: "分享按钮",
  group: "plugin" as const,
  intro:
    "footer 槽次按钮：配置 onShare 才渲染，点击触发回调；未配置 onShare 时插件不渲染。",
};

export default function ShareDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <ShareCoupon coupon={{ id: "sh1", title: "点右下角分享这张券", amount: 25, threshold: 99 } as CouponData} />
    </div>
  );
}
`,yx=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createRemindPlugin } from "vane-coupon/custom-plugins/RemindPlugin";
import { createCountdownPlugin } from "vane-coupon/custom-plugins/CountdownPlugin";

/**
 * 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。
 * 配倒计时让相位停在「未开始」，提醒开关只在 idle 相位出现。
 */
const RemindCoupon = createCouponCard([
  createRemindPlugin({ onRemind: (on) => console.log("[remind]", on ? "已设提醒" : "已取消提醒") }),
  createCountdownPlugin({ startAt: Date.now() + 3600_000 }),
]);

export const meta = {
  slug: "remind",
  title: "开抢提醒",
  group: "plugin" as const,
  intro:
    "仅 idle（未开抢）相位渲染「开抢提醒」开关（aria-pressed），切换写 state.reminded 并触发 onRemind；开抢后自动消失。",
};

export default function RemindDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <RemindCoupon
        coupon={{ id: "rm1", title: "1 小时后开抢 · 可设提醒", amount: 40, threshold: 299 } as CouponData}
      />
    </div>
  );
}
`,vx=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createCopyCodePlugin } from "vane-coupon/custom-plugins/CopyCodePlugin";
import { createClaimStatePlugin } from "vane-coupon/custom-plugins/ClaimStatePlugin";

/**
 * 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。
 * 配 ClaimState 让初始相位是 available，点击领取后券码区出现。
 */
const CopyCodeCoupon = createCouponCard([
  createCopyCodePlugin({ code: "SAVE-2026" }),
  createClaimStatePlugin({
    claim: async () => {
      await new Promise((r) => setTimeout(r, 400));
      return { ok: true };
    },
  }),
]);

export const meta = {
  slug: "copy-code",
  title: "券码复制",
  group: "plugin" as const,
  intro:
    "claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），复制后 1.6 秒自动还原；available 相位不渲染。",
};

export default function CopyCodeDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <CopyCodeCoupon
        coupon={{ id: "cc1", title: "先领取，再看券码复制", amount: 20, threshold: 99 } as CouponData}
      />
    </div>
  );
}
`,Cx=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createHistoryPlugin } from "vane-coupon/custom-plugins/HistoryPlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const HistoryCoupon = createCouponCard([createHistoryPlugin({ max: 3 })]);
const EmptyCoupon = createCouponCard([createHistoryPlugin()]);

export const meta = {
  slug: "history",
  title: "领取记录",
  group: "plugin" as const,
  intro:
    "coupon.history（{at, action}[]）按时间倒序渲染最近 max（默认 3）条；无记录时插件不渲染。",
};

export default function HistoryDemo() {
  const now = Date.now();
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <HistoryCoupon
        coupon={
          {
            id: "hs1",
            title: "最近 3 条记录",
            amount: 10,
            threshold: 0,
            history: [
              { at: now - 86400_000, action: "领取成功" },
              { at: now - 3600_000, action: "已使用" },
              { at: now - 60_000, action: "再次领取" },
              { at: now - 1000, action: "这条超出 max 不会显示" },
            ],
          } as CouponData
        }
      />
      <EmptyCoupon coupon={{ id: "hs2", title: "无记录 · 不渲染", amount: 5, threshold: 0 } as CouponData} />
    </div>
  );
}
`,xx=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createAnalyticsPlugin } from "vane-coupon/custom-plugins/AnalyticsPlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const TrackedCoupon = createCouponCard([
  createAnalyticsPlugin({
    onEvent: (e) => console.log("[analytics 回调]", e),
    // 可选：接入宿主埋点总线
    // transport: (e) => tracker.track(e.event, e.payload),
  }),
]);

export const meta = {
  slug: "analytics",
  title: "行为埋点",
  group: "plugin" as const,
  intro:
    "无 UI 插件：mount / 领取 / 异常三类事件双通道上报（onEvent 回调 + bus.emit，事件名 coupon:mount / coupon:claim / coupon:error，另有 coupon:analytics 包装通道）。打开控制台看输出。",
};

export default function AnalyticsDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <TrackedCoupon coupon={{ id: "an1", title: "挂载即上报 coupon:mount", amount: 10, threshold: 0 } as CouponData} />
    </div>
  );
}
`,Sx=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createDetailLinkPlugin } from "vane-coupon/custom-plugins/DetailLinkPlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const HrefCoupon = createCouponCard([createDetailLinkPlugin({ href: "/help/coupon-rules" })]);
const DetailCoupon = createCouponCard([
  createDetailLinkPlugin({ onDetail: () => console.log("[detail] 打开详情弹层") }),
]);

export const meta = {
  slug: "detail-link",
  title: "详情入口",
  group: "plugin" as const,
  intro:
    "after 槽文字链：配 href 渲染 <a target=\\"_blank\\">，配 onDetail 渲染 <button>，两者都没有则不渲染；色值复用规则展开开关的同款链接色。",
};

export default function DetailLinkDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <HrefCoupon coupon={{ id: "dl1", title: "href 跳转形态", amount: 10, threshold: 0 } as CouponData} />
      <DetailCoupon coupon={{ id: "dl2", title: "onDetail 回调形态", amount: 20, threshold: 99 } as CouponData} />
    </div>
  );
}
`,Px=Object.assign({"./00-quickstart.tsx":uy,"./01-claim-state.tsx":ky,"./02-validity.tsx":Uy,"./03-rules.tsx":tv,"./04-stack.tsx":vv,"./05-combined.tsx":Sv,"./06-limited.tsx":Ev,"./07-progress.tsx":Uv,"./08-quota.tsx":n0,"./09-countdown.tsx":g0,"./10-channel.tsx":R0,"./11-share.tsx":W0,"./12-remind.tsx":tC,"./13-copy-code.tsx":hC,"./14-history.tsx":NC,"./15-analytics.tsx":HC,"./16-detail-link.tsx":rx}),wx=Object.assign({"./00-quickstart.tsx":lx,"./01-claim-state.tsx":ix,"./02-validity.tsx":ax,"./03-rules.tsx":ux,"./04-stack.tsx":sx,"./05-combined.tsx":cx,"./06-limited.tsx":dx,"./07-progress.tsx":px,"./08-quota.tsx":fx,"./09-countdown.tsx":mx,"./10-channel.tsx":gx,"./11-share.tsx":hx,"./12-remind.tsx":yx,"./13-copy-code.tsx":vx,"./14-history.tsx":Cx,"./15-analytics.tsx":xx,"./16-detail-link.tsx":Sx}),kx=e=>e.replace(/^\.\//,""),Qi=Object.entries(Px).map(([e,n])=>{const t=kx(e);return{meta:n.meta,Stage:n.default,file:t,source:wx[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),_x=Array.from(new Set(Qi.map(e=>e.meta.group))),zp={basic:{label:"基础用法"},advanced:{label:"进阶用法"},plugin:{label:"插件示例"}},Ex="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",Tx="true|false|null|undefined|this|super",jx="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",Ns=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${Ex})\b`,String.raw`\b(${Tx})\b`,String.raw`\b(${jx})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),Ds=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function Rx(e){const n=[];let t=0;Ns.lastIndex=0;let o;for(;o=Ns.exec(e);){o.index>t&&n.push({text:e.slice(t,o.index),cls:null});const r=Ds.findIndex((l,i)=>o[i+1]!==void 0);n.push({text:o[0],cls:r>=0?Ds[r]:null}),t=o.index+o[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function bs(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function $x({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:o}){const[r,l]=S.useState("idle"),[i,u]=S.useState(!1),a=S.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),s=t>0&&a.length>t,d=s&&!i?a.slice(0,t).join(`
`):e,c=S.useMemo(()=>Rx(d),[d]),f=S.useCallback(async()=>{var C;let v=!1;if((C=navigator.clipboard)!=null&&C.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=bs(e)}else v=bs(e);l(v?"ok":"fail"),window.setTimeout(()=>l("idle"),1600)},[e]);return m.jsxs("div",{className:"code",children:[m.jsxs("div",{className:"code-head",children:[m.jsx("span",{children:n}),m.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[m.jsxs("span",{children:[a.length," 行"]}),m.jsx("button",{type:"button",className:`code-copy${r==="ok"?" is-ok":r==="fail"?" is-fail":""}`,onClick:f,children:r==="ok"?"已复制":r==="fail"?"复制失败":"复制"})]})]}),m.jsx("pre",{style:o?{maxHeight:o}:void 0,children:m.jsx("code",{children:c.map((v,C)=>v.cls?m.jsx("span",{className:v.cls,children:v.text},C):m.jsx(Do.Fragment,{children:v.text},C))})}),s?m.jsx("button",{type:"button",className:"code-more",onClick:()=>u(v=>!v),children:i?"收起":`展开余下 ${a.length-t} 行`}):null]})}function Nx({entry:e,order:n}){var u;const{meta:t,Stage:o,source:r,file:l}=e,i=String(n).padStart(2,"0");return m.jsxs("article",{children:[m.jsx("header",{className:"page-head",children:m.jsxs("div",{children:[m.jsxs("p",{className:"eyebrow",children:[i," · ",((u=zp[t.group])==null?void 0:u.label)??t.group]}),m.jsx("h1",{className:"page-title",children:t.title})]})}),t.intro?m.jsx("p",{className:"page-sub",children:t.intro}):null,m.jsx("section",{className:"demo-stage",children:m.jsx(o,{})}),m.jsxs("section",{className:"demo-src-wrap",children:[m.jsxs("div",{className:"demo-src-head",children:[m.jsxs("span",{className:"demo-src-title",children:["源码 · ",l]}),m.jsx("span",{className:"demo-src-hint",children:"下面这份就是上面正在跑的那份"})]}),m.jsx($x,{code:r,title:l,collapseAfter:28,maxHeight:460})]})]})}const Dx="EligibilityPlugin",bx="可用性判定：按订单上下文判定门槛 / 有效期 / 商品范围 / 互斥 / 叠加 / 限领 / 库存，结果写 state.eligible 供领取按钮与宿主复用。",Mx="0.1.0",Ox=["coupon","eligibility","order"],Lx=[{name:"order",type:"CouponOrderContext",default:"props.order",description:"订单上下文（amount / items / applied / purchasedCount / claimedAt / now）"},{name:"onEvaluate",type:"(result: CouponEligibility) => void",default:"-",description:"每次判定后回调，入参含 eligible / reasons / thresholdGap"}],zx=["门槛按「分」比较，刚好等于视为满足","商品范围支持 sku / category 白名单与 excludeSku 黑名单","互斥组冲突与不可叠加冲突判定","结果写 state.eligible，ClaimState 复用同一口径"],Ax=["结算页按当前购物车判定券是否可用","券列表标记「差 X 元可用」"],Ix="const Coupon = createCouponCard([createEligibilityPlugin(), createClaimStatePlugin()]);",Fx={name:Dx,description:bx,since:Mx,tags:Ox,config:Lx,features:zx,useCases:Ax,example:Ix},Ux=`import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";

/**
 * AnalyticsPlugin — 券埋点（无 UI，priority 90 事件链最前）。
 *
 * 对齐 vane-sku 的 Analytics 双通道：回调（onEvent）与总线（coupon:analytics）
 * 同时上报，自身不渲染任何 UI。事件三类：
 *   coupon:mount  —— 挂载
 *   coupon:claim  —— 相位变化（含目标相位）
 *   coupon:error  —— 领取失败（reason）
 * meta 在同目录 index.ts 挂载。
 */
export interface AnalyticsConfig {
  /** 埋点回调（与总线双通道） */
  onEvent?: (event: string, payload: Record<string, unknown>) => void;
}

export function createAnalyticsPlugin(
  config: AnalyticsConfig = {}
): CouponPlugin {
  const emit = (
    context: CouponPluginContext,
    event: string,
    payload: Record<string, unknown>
  ) => {
    context.bus.emit(event, payload);
    context.bus.emit("coupon:analytics", { event, ...payload });
    config.onEvent?.(event, payload);
  };

  return {
    name: "analytics",
    version: "0.1.0",
    description:
      "券埋点：coupon:mount / coupon:claim / coupon:error 三类事件，回调与总线 coupon:analytics 双通道，自身不渲染 UI",
    priority: 90,
    config: {},
    hooks: {
      onMount: (context: CouponPluginContext) => {
        emit(context, "coupon:mount", {
          couponId: context.coupon.id,
          phase: context.phase,
        });
      },
      onPhaseChange: (context: CouponPluginContext, phase) => {
        emit(context, "coupon:claim", {
          couponId: context.coupon.id,
          phase,
        });
      },
      onError: (context: CouponPluginContext, error: unknown) => {
        emit(context, "coupon:error", {
          couponId: context.coupon.id,
          message: String(error),
        });
      },
    },
  };
}
`,Wx=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * ChannelPlugin — 渠道限定角标（before 槽）。
 *
 * config.channels（默认读 coupon.channels）渲染一组渠道小标（仅 APP / 仅新客…）。
 * 与 StackPlugin 同占 before 槽：stack priority 12 在左、channel 14 紧随。
 * meta 在同目录 index.ts 挂载。
 */
export interface ChannelConfig {
  /** 渠道标签列表（默认读 coupon.channels） */
  channels?: string[];
}

export function createChannelPlugin(config: ChannelConfig = {}): CouponPlugin {
  const mergedConfig = { slotPosition: "before", order: 20, ...config } as any;

  return {
    name: "channel",
    version: "0.1.0",
    description: "渠道限定角标：按 coupon.channels / config.channels 渲染一组渠道小标",
    priority: 14,
    config: mergedConfig,
    hooks: {
      renderHeader: (context: CouponPluginContext) => {
        const channels = config.channels ?? context.coupon.channels;
        if (!channels || channels.length === 0) return null;

        return (
          <div style={T.badgesStyle} data-testid="coupon-channels">
            {channels.map((label, index) => (
              <span
                key={\`\${label}-\${index}\`}
                style={T.badgeMutedStyle}
                data-testid="coupon-channel-badge"
              >
                {label}
              </span>
            ))}
          </div>
        );
      },
    },
  };
}
`,Vx=`import React from "react";
import type {
  CouponPhase,
  CouponPlugin,
  CouponPluginContext,
} from "../../components/CouponPlugin/plugins/types";
import { evaluateEligibility } from "../../components/CouponPlugin/plugins/eligibility";
import { resolveQuota } from "../../components/CouponPlugin/plugins/quota";
import { resolveStock } from "../../components/CouponPlugin/plugins/stock";
import { computeValidity } from "../../components/CouponPlugin/plugins/validity";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * ClaimStatePlugin — 领取状态机（footer 槽）。
 *
 * 相位枚举与转移规则见 plugins/types.ts 的 CouponPhase 注释：
 *   idle → available → claiming → claimed（半终态，可核销 used）
 *   终态 used / soldout / expired；领取失败不设独立态，回退 available 并经 onClaimError 上报。
 *
 * 门控口径（展示与点击使用同一个 gatePhase，避免「显示已抢完但还能领」）：
 *   expired      —— state.validity 过期，或按注入时钟现算已过 validTo；
 *   soldout      —— state.stock ≤ 0 与 coupon.total/claimed 取并集；
 *   quota-limited—— state.quotaReached 或按 coupon.quota + 已领数现算超限。
 *
 * 事件钩子里写 state（不在渲染期 setState），写入即触发 context 重建。
 * meta 在同目录 index.ts 挂载。
 */
export interface ClaimStateConfig {
  /** 初始相位，默认 available */
  initialPhase?: CouponPhase;
  /**
   * 领取回调（异步）。返回 { ok: false, reason? } 视为失败：回退 available 并触发 onClaimError。
   * 未配置时点击直接进入 claimed（demo / 纯展示场景）。
   */
  claim?: () => Promise<{ ok?: boolean; reason?: string } | void>;
  /** 剩余库存；≤ 0 时自动降级 soldout（与 total/claimed 取并集） */
  stock?: number;
  /** 发放总量覆盖（默认 coupon.total；与 ProgressPlugin 同口径） */
  total?: number;
  /** 已领取数覆盖（默认 coupon.claimed；与 ProgressPlugin 同口径） */
  claimed?: number;
  /** 每人限领张数（默认 coupon.quota） */
  quota?: number;
  /** 当前用户已领张数，默认 0 */
  purchasedCount?: number;
  /** 判定时钟，默认 Date.now（测试/demo 可注入固定值） */
  now?: () => number;
  /** 相位变化回调（onPhaseChange 钩子之后触发） */
  onPhaseChange?: (phase: CouponPhase, prev: CouponPhase | undefined) => void;
  /** 领取失败回调 */
  onClaimError?: (reason?: string) => void;
  /** 按钮文案按相位覆盖 */
  texts?: Partial<Record<CouponPhase, string>>;
  /** 订单不可用（门槛 / 范围 / 互斥 / 叠加不满足）时的按钮文案，默认「不可用」 */
  ineligibleText?: string;
}

/** 各相位默认按钮文案 */
export const DEFAULT_CLAIM_TEXTS: Record<CouponPhase, string> = {
  idle: "未开始",
  available: "立即领取",
  claiming: "领取中…",
  claimed: "已领取",
  used: "已使用",
  soldout: "已抢光",
  expired: "已过期",
  "quota-limited": "已达限领上限",
};

/** 终态：不再响应任何点击与降级 */
const TERMINAL_PHASES: ReadonlySet<CouponPhase> = new Set([
  "used",
  "soldout",
  "expired",
]);

/** 点击重入锁（context.shared，跨渲染读取最新值） */
const CLAIM_LOCK = "claim:in-flight";
/** 挂载标记，异步返回后据此判断是否已卸载 */
const CLAIM_MOUNTED = "claim:mounted";

export function createClaimStatePlugin(
  config: ClaimStateConfig = {}
): CouponPlugin {
  const texts = { ...DEFAULT_CLAIM_TEXTS, ...config.texts };
  // 注：renderPluginSlot 的 footer 槽以 position "after" 过滤（plugin-core 现状），
  // 声明 "footer" 会被滤掉，故这里保持 "after"（P2-8 槽位元数据部分待内核支持）。
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;
  const now = config.now ?? (() => Date.now());

  /**
   * 联动降级判定：返回应强制进入的相位，无需降级返回 null。
   * 终态优先级：expired / soldout / quota-limited 覆盖可领取态；
   * 已领取 / 领取中不覆盖（避免把成功结果改写成不可领）。
   */
  const gatePhase = (context: CouponPluginContext): CouponPhase | null => {
    const current = context.phase;
    if (TERMINAL_PHASES.has(current)) return null;
    if (current === "claimed" || current === "claiming") return null;

    const claimedAt = (context.state?.claimedAt ?? undefined) as number | undefined;
    // 点击/渲染时按注入时钟现算一次，而不是只信可能陈旧的 state.validity
    const fresh = computeValidity(context.coupon, { now, claimedAt });
    const stored = context.state?.validity as
      | import("../../components/CouponPlugin/plugins/types").CouponValidity
      | null
      | undefined;
    if (fresh?.expired || stored?.expired) return "expired";

    const stock = resolveStock(context.coupon, {
      stock: config.stock,
      total: config.total,
      claimed: config.claimed,
    });
    if (stock.soldout) return "soldout";

    const quota = resolveQuota(context.coupon, {
      quota: config.quota,
      purchasedCount: config.purchasedCount ?? context.order?.purchasedCount,
    });
    if (context.state?.quotaReached === true || quota.reached) {
      return "quota-limited";
    }
    return null;
  };

  /** 写相位（值相同不写，避免无谓的 context 重建） */
  const transition = (
    context: CouponPluginContext,
    next: CouponPhase
  ): void => {
    if (context.state?.phase === next) return;
    context.setState({ phase: next });
  };

  /** 重新评估降级（onMount / onPropsChange 共用） */
  const reevaluate = (context: CouponPluginContext): void => {
    const current = (context.state?.phase ?? undefined) as CouponPhase | undefined;
    if (current === undefined) {
      // 首次：硬门（过期 / 无库存 / 超限）优先，其次应用 initialPhase
      const gated = gatePhase(context);
      if (gated) {
        context.setState({ phase: gated });
      } else if (config.initialPhase) {
        context.setState({ phase: config.initialPhase });
      }
      return;
    }
    const gated = gatePhase(context);
    if (gated) {
      if (gated !== current) transition(context, gated);
      return;
    }
    // 限领是软门：已领数下调后自动恢复可领取
    if (current === "quota-limited") transition(context, "available");
  };

  /** 订单不可用判定（门槛 / 范围 / 互斥 / 叠加）；无订单上下文返回 false */
  const blockedByEligibility = (context: CouponPluginContext): boolean => {
    const eligibility =
      context.eligible ??
      (context.order
        ? evaluateEligibility(context.coupon, context.order)
        : null);
    return eligibility?.eligible === false;
  };

  return {
    name: "claim-state",
    version: "0.1.0",
    description:
      "领取状态机：8 态相位流转（未开始/可领取/领取中/已领取/已使用/已抢空/已过期/已达限领上限），联动有效期、库存与限领自动降级",
    priority: 32,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        context.shared.set(CLAIM_MOUNTED, true);
        reevaluate(context);
      },
      onPropsChange: (context: CouponPluginContext) => {
        reevaluate(context);
      },
      onValidityChange: (context: CouponPluginContext, validity) => {
        // expired 只覆盖非终态（used 等终态不被打回）
        if (validity.expired && !TERMINAL_PHASES.has(context.phase)) {
          transition(context, "expired");
        }
      },
      onUnmount: (context: CouponPluginContext) => {
        context.shared.set(CLAIM_MOUNTED, false);
        context.shared.delete(CLAIM_LOCK);
      },
      renderFooter: (context: CouponPluginContext) => {
        const phase = context.phase;
        // 渲染期算一次门控：Quota / Progress 是其它插件写 state 或读 coupon，
        // 不保证先于本插件执行，按实时口径直接渲染才能让「提示条」与按钮一致。
        const gated = gatePhase(context);
        const ineligible = blockedByEligibility(context);
        const blocked = ineligible && !gated;
        const shownPhase = gated ?? phase;
        const label = blocked
          ? config.ineligibleText ?? "不可用"
          : texts[shownPhase] ?? shownPhase;
        const disabled = shownPhase !== "available" || blocked;

        const handleClick = async () => {
          // phase 缺省即 available（与 context.phase 同一口径）
          if (context.phase !== "available") return;
          if (context.shared.get(CLAIM_LOCK) === true) return;

          const blockedNow = blockedByEligibility(context);
          const gatedNow = gatePhase(context);
          if (gatedNow) {
            transition(context, gatedNow);
            return;
          }
          if (blockedNow) return;

          context.shared.set(CLAIM_LOCK, true);
          transition(context, "claiming");
          try {
            const result = await config.claim?.();
            // 卸载后不再写 state / 触发回调
            if (context.shared.get(CLAIM_MOUNTED) !== true) return;
            const ok = !result || result.ok !== false;
            if (ok) {
              // 领取期间跨过 validTo：不再落成功态（context.state 是点击时的快照，
              // 相位是否被改写只能按注入时钟现算）
              const freshAfter = computeValidity(context.coupon, {
                now,
                claimedAt: context.state?.claimedAt as number | undefined,
              });
              if (freshAfter?.expired) {
                transition(context, "expired");
                return;
              }
              // claimedAt 供 ValidityPlugin 的相对有效期锚定
              context.setState({ phase: "claimed", claimedAt: Date.now() });
            } else {
              transition(context, "available");
              config.onClaimError?.(result?.reason);
            }
          } catch (error) {
            if (context.shared.get(CLAIM_MOUNTED) !== true) return;
            transition(context, "available");
            config.onClaimError?.(String(error));
          } finally {
            context.shared.delete(CLAIM_LOCK);
          }
        };

        return (
          <div className="vc-coupon__actions" style={T.actionsStyle} data-testid="coupon-claim-area">
            <button
              type="button"
              style={
                phase === "available" && !disabled
                  ? T.claimStyle
                  : T.claimMutedStyle
              }
              data-testid="coupon-claim-btn"
              data-phase={phase}
              data-gate={gated ?? ""}
              data-eligible={ineligible ? "false" : "true"}
              disabled={disabled}
              aria-disabled={disabled}
              onClick={() => void handleClick()}
            >
              {label}
            </button>
          </div>
        );
      },
    },
  };
}
`,Hx=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * CopyCodePlugin — 券码复制（after 槽）。
 *
 * phase 为 claimed/used 且有券码（config.code 或 coupon.code）时展示券码 + 复制按钮。
 * 复制走两条路：navigator.clipboard（secure context）不行时退到
 * 隐藏 textarea + execCommand —— 示例站常挂在 http:// 内网 IP 上，只走
 * clipboard API 会静默失败。复制结果写内核 state.codeCopied，失败经 onError 上报。
 *
 * P2-7：定时器存在 context.shared（连续点击先清旧 timer），onUnmount 统一清理；
 * 异步返回后校验挂载标记，卸载后不再写 state。
 * meta 在同目录 index.ts 挂载。
 */
export interface CopyCodeConfig {
  /** 券码（默认读 coupon.code） */
  code?: string;
  /** 标签文案，默认「券码」 */
  label?: string;
  /** 复制成功回调 */
  onCopied?: (code: string) => void;
  /** 复制失败回调（两条路径都失败时触发，便于宿主提示「请手动复制」） */
  onError?: (reason?: string) => void;
}

/** 定时器 / 挂载标记（context.shared 跨渲染共享） */
const TIMER_KEY = "copy-code:timer";
const MOUNTED_KEY = "copy-code:mounted";
/** 「已复制」提示停留时长 */
const COPIED_RESET_MS = 1600;

function fallbackCopy(text: string): boolean {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok =
      typeof document.execCommand === "function"
        ? document.execCommand("copy")
        : false;
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export function createCopyCodePlugin(config: CopyCodeConfig = {}): CouponPlugin {
  const label = config.label ?? "券码";
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  const clearTimer = (context: CouponPluginContext): void => {
    const timer = context.shared.get(TIMER_KEY);
    if (timer !== undefined) {
      window.clearTimeout(timer as number);
      context.shared.delete(TIMER_KEY);
    }
  };

  return {
    name: "copy-code",
    version: "0.1.0",
    description:
      "券码复制：claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），结果写 state.codeCopied，失败经 onError 上报",
    priority: 18,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        context.shared.set(MOUNTED_KEY, true);
      },
      onUnmount: (context: CouponPluginContext) => {
        context.shared.set(MOUNTED_KEY, false);
        clearTimer(context);
        context.shared.delete(MOUNTED_KEY);
      },
      renderHeader: (context: CouponPluginContext) => {
        const phase = context.phase;
        if (phase !== "claimed" && phase !== "used") return null;
        const code = config.code ?? context.coupon.code;
        if (!code) return null;

        const copied = context.state?.codeCopied === true;

        const copy = async () => {
          let ok = false;
          let reason: string | undefined;
          if (navigator.clipboard?.writeText) {
            try {
              await navigator.clipboard.writeText(code);
              ok = true;
            } catch {
              ok = fallbackCopy(code);
              if (!ok) reason = "clipboard-unavailable";
            }
          } else {
            ok = fallbackCopy(code);
            if (!ok) reason = "clipboard-unavailable";
          }
          if (context.shared.get(MOUNTED_KEY) !== true) return;
          context.setState({ codeCopied: ok });
          if (ok) {
            config.onCopied?.(code);
          } else {
            config.onError?.(reason);
          }
          // 连续点击：先清旧 timer，避免「已复制」提示被前一次提前复位
          clearTimer(context);
          const timer = window.setTimeout(() => {
            context.shared.delete(TIMER_KEY);
            if (context.shared.get(MOUNTED_KEY) !== true) return;
            context.setState({ codeCopied: false });
          }, COPIED_RESET_MS);
          context.shared.set(TIMER_KEY, timer);
        };

        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 10,
              fontSize: 12,
            }}
            data-testid="coupon-code-area"
          >
            <span style={T.fieldLabelStyle}>{label}</span>
            <code
              style={{
                fontFamily: "var(--ff-mono, monospace)",
                fontSize: 12,
                padding: "2px 8px",
                borderRadius: 4,
                background: "#f2f3f5",
                color: "#1f2328",
                border: "1px solid #e8eaed",
              }}
              data-testid="coupon-code"
            >
              {code}
            </code>
            <button
              type="button"
              style={{
                padding: "2px 10px",
                fontSize: 11,
                borderRadius: 4,
                border: "1px solid #e8eaed",
                background: "#fff",
                // 内联了背景必须成对内联字色（ADR-13）
                color: "#1a66c2",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              data-testid="coupon-copy-btn"
              data-copied={copied ? "true" : "false"}
              onClick={() => void copy()}
            >
              {copied ? "已复制" : "复制"}
            </button>
          </div>
        );
      },
    },
  };
}
`,qx=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * CountdownPlugin — 开抢倒计时（before 槽）。
 *
 * config.startAt（epoch ms）未到时渲染「距开抢 HH:MM:SS」，用 onMount 挂
 * setTimeout 链（返回 cleanup，内核 manager.clear() 逆序执行）驱动剩余时间。
 * 到点：autoStart 开启时自动 setPhase("available")，并触发 onFire。
 *
 * 注意：倒计时剩余写内核 state.countdown —— 写入即触发 context 重建，
 * 渲染钩子只读。meta 在同目录 index.ts 挂载。
 */
export interface CountdownConfig {
  /** 开抢时间（epoch ms），必填；未到开始时间才有倒计时 */
  startAt: number;
  /** 到点自动进入 available，默认 false（由宿主决定何时开抢） */
  autoStart?: boolean;
  /** 定时精度，默认 1000ms */
  tickMs?: number;
  /** 每跳回调（供埋点/自定义渲染） */
  onCountdown?: (remainingMs: number) => void;
  /** 倒计时归零回调 */
  onFire?: () => void;
}

const fmt = (ms: number): string => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return \`\${h}:\${m}:\${sec}\`;
};

export function createCountdownPlugin(config: CountdownConfig): CouponPlugin {
  const tickMs = config.tickMs ?? 1000;
  const mergedConfig = { slotPosition: "before", order: 10, ...config } as any;

  return {
    name: "countdown",
    version: "0.1.0",
    description:
      "开抢倒计时：startAt 未到时渲染「距开抢 HH:MM:SS」，到点可自动开抢（autoStart）并触发 onFire",
    priority: 15,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        const tick = () => {
          const remaining = config.startAt - Date.now();
          context.setState({ countdown: Math.max(0, remaining) });
          if (remaining > 0) {
            config.onCountdown?.(remaining);
            timer = window.setTimeout(tick, tickMs);
          } else {
            config.onFire?.();
            if (config.autoStart) context.setPhase("available");
          }
        };
        let timer = window.setTimeout(tick, 0);
        // 返回清理函数：内核 manager.clear() 时执行（React 式 onMount）
        return () => window.clearTimeout(timer);
      },
      renderHeader: (context: CouponPluginContext) => {
        const remaining = context.state?.countdown as number | undefined;
        if (typeof remaining !== "number" || remaining <= 0) return null;

        return (
          <div style={T.badgesStyle} data-testid="coupon-countdown">
            <span
              style={{
                ...T.badgeStackStyle,
                background: "#fff7e6",
                color: "#a54a00",
                border: "1px solid #ffd591",
                fontFamily: "var(--ff-mono, monospace)",
              }}
              data-testid="coupon-countdown-value"
            >
              距开抢 {fmt(remaining)}
            </span>
          </div>
        );
      },
    },
  };
}
`,Bx=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * DetailLinkPlugin — 完整规则链接（after 槽，规则区下方）。
 *
 * config.href → 渲染 <a>；否则 config.onDetail → 渲染 <button>；都没有 → null。
 * meta 在同目录 index.ts 挂载。
 */
export interface DetailLinkConfig {
  /** 详情页链接（有 href 渲染 <a>） */
  href?: string;
  /** 链接文案，默认「查看完整规则」 */
  text?: string;
  /** 点击回调（无 href 时渲染 <button>） */
  onDetail?: () => void;
}

export function createDetailLinkPlugin(
  config: DetailLinkConfig = {}
): CouponPlugin {
  const text = config.text ?? "查看完整规则";
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "detail-link",
    version: "0.1.0",
    description:
      "完整规则链接：href 渲染 <a>、onDetail 渲染 <button>，落在规则区下方",
    priority: 16,
    config: mergedConfig,
    hooks: {
      renderHeader: (_context: CouponPluginContext) => {
        if (!config.href && !config.onDetail) return null;

        const style: React.CSSProperties = {
          marginTop: 6,
          padding: 0,
          border: 0,
          background: "none",
          fontSize: 12,
          color: T.rulesToggleStyle.color,
          cursor: "pointer",
          fontFamily: "inherit",
          textDecoration: "underline",
          textUnderlineOffset: 2,
        };

        if (config.href) {
          return (
            <div style={{ marginTop: 6 }}>
              <a
                href={config.href}
                target="_blank"
                rel="noreferrer"
                style={style}
                data-testid="coupon-detail-link"
              >
                {text} ›
              </a>
            </div>
          );
        }

        return (
          <div style={{ marginTop: 6 }}>
            <button
              type="button"
              style={style}
              data-testid="coupon-detail-link"
              onClick={() => config.onDetail?.()}
            >
              {text} ›
            </button>
          </div>
        );
      },
    },
  };
}
`,Qx=`import type {
  CouponEligibility,
  CouponOrderContext,
  CouponPlugin,
  CouponPluginContext,
} from "../../components/CouponPlugin/plugins/types";
import { evaluateEligibility } from "../../components/CouponPlugin/plugins/eligibility";

/**
 * EligibilityPlugin — 券可用性判定（不渲染任何 UI）。
 *
 * 把「当前订单能否用这张券」的判定结果写进内核 state.eligible：
 *   门槛 / 有效期 / 商品范围 / 互斥组 / 叠加规则 / 限领 / 库存（见 plugins/eligibility.ts）。
 * ClaimStatePlugin 渲染与点击都读同一结果（未装本插件时按 props.order 现算），
 * 宿主也可直接读 state.eligible 展示「差 X 元可用」「已购商品不适用」等提示。
 *
 * 未传 order 时不写 state（保持 null），避免用陈旧订单误锁按钮。
 * meta 在同目录 index.ts 挂载。
 */
export interface EligibilityConfig {
  /** 订单上下文（默认 props.order） */
  order?: CouponOrderContext;
  /** 每次判定后回调（供宿主展示不可用原因） */
  onEvaluate?: (result: CouponEligibility) => void;
}

export function createEligibilityPlugin(
  config: EligibilityConfig = {}
): CouponPlugin {
  const mergedConfig = { ...config } as any;

  const resolveOrder = (context: CouponPluginContext): CouponOrderContext | null =>
    config.order ?? context.order;

  const sameEligibility = (
    a: CouponEligibility | null | undefined,
    b: CouponEligibility | null
  ): boolean => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

  const evaluate = (context: CouponPluginContext): void => {
    const order = resolveOrder(context);
    const current = (context.state?.eligible ?? null) as CouponEligibility | null;
    if (!order) {
      // 没有订单上下文：清掉陈旧判定，领取按钮回到「不因订单被锁」
      if (!sameEligibility(current, null)) context.setState({ eligible: null });
      return;
    }
    const next = evaluateEligibility(context.coupon, order);
    if (!sameEligibility(current, next)) context.setState({ eligible: next });
    config.onEvaluate?.(next);
  };

  return {
    name: "eligibility",
    version: "0.1.0",
    description:
      "可用性判定：门槛 / 有效期 / 商品范围 / 互斥 / 叠加 / 限领 / 库存，结果写 state.eligible 供领取按钮与宿主复用",
    priority: 34,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        evaluate(context);
      },
      onPropsChange: (context: CouponPluginContext) => {
        evaluate(context);
      },
      onPhaseChange: (context: CouponPluginContext) => {
        // 领取后 claimedAt 落库：相对有效期的判定起点变了
        evaluate(context);
      },
    },
  };
}
`,Kx=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * HistoryPlugin — 领取记录（after 槽）。
 *
 * config.records（默认读 coupon.history）按时间倒序渲染最近 max 条记录。
 * 空记录渲染 null。meta 在同目录 index.ts 挂载。
 */
export interface HistoryConfig {
  /** 记录列表（默认读 coupon.history），at 为 epoch ms */
  records?: { at: number; action: string }[];
  /** 最多展示条数，默认 3 */
  max?: number;
  /** 时间格式化，默认「YYYY.MM.DD」 */
  format?: (at: number) => string;
}

const fmtDate = (ts: number): string => {
  const d = new Date(ts);
  const p = (n: number) => String(n).padStart(2, "0");
  return \`\${d.getFullYear()}.\${p(d.getMonth() + 1)}.\${p(d.getDate())}\`;
};

export function createHistoryPlugin(config: HistoryConfig = {}): CouponPlugin {
  const max = config.max ?? 3;
  const format = config.format ?? fmtDate;
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "history",
    version: "0.1.0",
    description:
      "领取记录：按 coupon.history / config.records 倒序渲染最近 N 条领取/使用记录",
    priority: 17,
    config: mergedConfig,
    hooks: {
      renderHeader: (context: CouponPluginContext) => {
        const records = config.records ?? context.coupon.history;
        if (!records || records.length === 0) return null;

        const shown = [...records]
          .sort((a, b) => b.at - a.at)
          .slice(0, max);

        return (
          <div style={{ marginTop: 10, fontSize: 12 }} data-testid="coupon-history">
            <div style={T.rulesTitleStyle}>领取记录</div>
            <ul style={T.rulesListStyle}>
              {shown.map((r, i) => (
                <li key={\`\${r.at}-\${i}\`} style={T.rulesItemStyle} data-testid={\`coupon-history-item-\${i}\`}>
                  <span style={{ color: "#57606a" }}>{format(r.at)}</span>
                  {" · "}
                  {r.action}
                </li>
              ))}
            </ul>
          </div>
        );
      },
    },
  };
}
`,Yx=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import { resolveStock } from "../../components/CouponPlugin/plugins/stock";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * ProgressPlugin — 领取进度条（after 槽）。
 *
 * 读 coupon.total / claimed（可用 config 覆盖），渲染进度条 + 「已抢 X%」；
 * 剩余 ≤ urgentPct 时换紧迫色。数据来自接口轮询时，props 变化（onPropsChange）即重算。
 *
 * 口径与 ClaimStatePlugin 共用 plugins/stock.ts：stock ≤ 0 与 claimed ≥ total
 * 取并集，进度条写「已抢完」时领取按钮一定被判 soldout（P1-1）。
 * meta 在同目录 index.ts 挂载。
 */
export interface ProgressConfig {
  /** 发放总量（默认读 coupon.total） */
  total?: number;
  /** 已领取数（默认读 coupon.claimed） */
  claimed?: number;
  /** 剩余库存（宿主侧权威值；与 total/claimed 取并集判售罄） */
  stock?: number;
  /** 剩余 ≤ N% 标记紧迫，默认 20 */
  urgentPct?: number;
  /** 是否展示「仅剩 N 张」替代百分比，默认 true */
  showRemaining?: boolean;
}

export function createProgressPlugin(config: ProgressConfig = {}): CouponPlugin {
  const urgentPct = config.urgentPct ?? 20;
  const showRemaining = config.showRemaining ?? true;
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "progress",
    version: "0.1.0",
    description:
      "领取进度条：按 total/claimed/stock 渲染已抢百分比进度条，剩余 ≤ N% 换紧迫色，数据轮询即刷新",
    priority: 20,
    config: mergedConfig,
    hooks: {
      renderHeader: (context: CouponPluginContext) => {
        const stock = resolveStock(context.coupon, {
          total: config.total,
          claimed: config.claimed,
          stock: config.stock,
        });
        if (stock.total === null || stock.total <= 0) return null;
        if (stock.claimed === null || stock.claimed < 0) return null;

        const pct = stock.percent ?? 0;
        const remaining = stock.remaining ?? 0;
        const urgent = 100 - pct <= urgentPct;
        let text = \`已抢 \${pct}%\`;
        if (stock.soldout) {
          text = "已抢完";
        } else if (urgent && showRemaining) {
          text += \` · 仅剩 \${remaining} 张\`;
        }

        return (
          <div
            className="vc-coupon__progress"
            style={{ marginTop: 10, fontSize: 12, color: T.validityStyle.color }}
            data-testid="coupon-progress"
            data-percent={String(pct)}
            data-urgent={urgent ? "true" : "false"}
            data-soldout={stock.soldout ? "true" : "false"}
          >
            <div
              style={{
                height: 6,
                borderRadius: 3,
                background: "#f2f3f5",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: \`\${pct}%\`,
                  height: "100%",
                  borderRadius: 3,
                  background: urgent ? "#a54a00" : "#d03050",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
            <div style={{ marginTop: 4, color: urgent ? "#a54a00" : "#57606a" }}>
              {text}
            </div>
          </div>
        );
      },
    },
  };
}
`,Xx=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import { resolveQuota } from "../../components/CouponPlugin/plugins/quota";

/**
 * QuotaPlugin — 每人限领（after 槽）。
 *
 * 读 coupon.quota（config 可覆盖）与已领数，渲染限领提示；
 * 超限写 state.quotaReached 供 ClaimStatePlugin 门控领取按钮（同口径见 plugins/quota.ts）。
 * 事件钩子写 state，渲染钩子纯读；写入前比较当前值，避免父渲染引发的空转重渲染（P2-5）。
 * meta 在同目录 index.ts 挂载。
 */
export interface QuotaConfig {
  /** 每人限领张数（默认读 coupon.quota） */
  quota?: number;
  /** 当前用户已领张数，默认 0（可传 order.purchasedCount） */
  purchasedCount?: number;
  /** 超限回调（入参为生效的限领张数） */
  onExceed?: (quota: number) => void;
}

export function createQuotaPlugin(config: QuotaConfig = {}): CouponPlugin {
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  const resolve = (context: CouponPluginContext) =>
    resolveQuota(context.coupon, {
      quota: config.quota,
      purchasedCount:
        config.purchasedCount ?? context.order?.purchasedCount,
    });

  /** 仅在判定结果变化时写 state；超限时回调 */
  const sync = (context: CouponPluginContext): void => {
    const { quota, reached } = resolve(context);
    const current = context.state?.quotaReached === true;
    if (current !== reached) context.setState({ quotaReached: reached });
    if (reached && quota !== null) config.onExceed?.(quota);
  };

  return {
    name: "quota",
    version: "0.1.0",
    description:
      "每人限领：读 coupon.quota 与已领数渲染限领提示，超限写 state.quotaReached 供领取按钮门控",
    priority: 19,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        sync(context);
      },
      onPropsChange: (context: CouponPluginContext) => {
        sync(context);
      },
      renderHeader: (context: CouponPluginContext) => {
        const { quota, purchased, reached } = resolve(context);
        if (quota === null) return null;

        return (
          <div
            style={{
              marginTop: 10,
              fontSize: 12,
              padding: "4px 8px",
              borderRadius: 4,
              background: reached ? "#fff1f0" : "#f6ffed",
              color: reached ? "#b32d08" : "#237a06",
              border: \`1px solid \${reached ? "#ffa39e" : "#b7eb8f"}\`,
            }}
            data-testid="coupon-quota"
            data-reached={reached ? "true" : "false"}
          >
            每人限领 {quota} 张（已领 {purchased}）
            {reached ? " · 已达限领上限" : ""}
          </div>
        );
      },
    },
  };
}
`,Gx=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * RemindPlugin — 开抢提醒（footer 槽，priority 30）。
 *
 * 「还没开抢」的判定不再只认 idle 相位（默认相位是 available，插件会永远不渲染，P2-2）：
 *   phase === idle                     —— 宿主显式标记未开始；
 *   state.countdown > 0                —— CountdownPlugin 倒计时进行中；
 *   validity.notStarted                —— ValidityPlugin 判出 validFrom 未到。
 * 满足任一即渲染「开抢提醒」开关；点击写内核 state.reminded 并触发 onRemind。
 * meta 在同目录 index.ts 挂载。
 */
export interface RemindConfig {
  /** 未提醒文案，默认「开抢提醒」 */
  text?: string;
  /** 已提醒文案，默认「已设提醒 ✓」 */
  remindedText?: string;
  /** 提醒开关回调 */
  onRemind?: (on: boolean) => void;
}

export function createRemindPlugin(config: RemindConfig = {}): CouponPlugin {
  const text = config.text ?? "开抢提醒";
  const remindedText = config.remindedText ?? "已设提醒 ✓";
  // 注：renderPluginSlot 的 footer 槽以 position "after" 过滤（plugin-core 现状），
  // 声明 "footer" 会被滤掉，故这里保持 "after"（P2-8 槽位元数据部分待内核支持）。
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "remind",
    version: "0.1.0",
    description:
      "开抢提醒：未开抢（idle / 倒计时中 / validFrom 未到）渲染提醒开关，开关态写内核 state.reminded",
    priority: 30,
    config: mergedConfig,
    hooks: {
      renderFooter: (context: CouponPluginContext) => {
        const countdown = context.state?.countdown as number | undefined;
        const pending =
          context.phase === "idle" ||
          (typeof countdown === "number" && countdown > 0) ||
          context.validity?.notStarted === true;
        if (!pending) return null;

        const on = context.state?.reminded === true;
        const toggle = async () => {
          context.setState({ reminded: !on });
          config.onRemind?.(!on);
        };

        return (
          <div style={T.actionsStyle}>
            <button
              type="button"
              style={T.claimMutedStyle}
              data-testid="coupon-remind-btn"
              data-on={on ? "true" : "false"}
              aria-pressed={on}
              onClick={() => void toggle()}
            >
              {on ? remindedText : text}
            </button>
          </div>
        );
      },
    },
  };
}
`,Jx=`import React from "react";
import type {
  CouponPlugin,
  CouponPluginContext,
} from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * RuleExpandPlugin — 规则展开/收起（after 槽，priority 21 < Validity 的 23，渲染在有效期下方）。
 *
 * 折叠态显示前 collapsedCount 条 + 「展开 (N 项)」；展开后全量 + 「收起」。
 * 展开态写内核 state.rulesExpanded（toggleRules 即 setState）。
 *
 * 截断按条数、不用 line-clamp —— 几何体检（tasks/28）已证明 line-clamp 是
 * 纵向裁切的重灾区，且 sticky 容器里放开即可滚。
 * rules 为空渲染 null。meta 在同目录 index.ts 挂载。
 */
export interface RuleExpandConfig {
  /** 折叠态显示的规则条数，默认 1 */
  collapsedCount?: number;
  /** 展开按钮文案前缀，默认「展开」 */
  expandText?: string;
  /** 收起按钮文案，默认「收起」 */
  collapseText?: string;
  /** 按钮是否带条数（「展开 (3 项)」），默认 true */
  showCount?: boolean;
  /** 区域标题，默认「使用规则」；传空字符串隐藏标题 */
  title?: string;
}

export function createRuleExpandPlugin(
  config: RuleExpandConfig = {}
): CouponPlugin {
  const collapsedCount = config.collapsedCount ?? 1;
  const expandText = config.expandText ?? "展开";
  const collapseText = config.collapseText ?? "收起";
  const showCount = config.showCount ?? true;
  const title = config.title ?? "使用规则";
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "rule-expand",
    version: "0.1.0",
    description:
      "规则展开/收起：使用规则按条数折叠（默认 1 条），展开态写内核 state，可被宿主/其他插件复位",
    priority: 21,
    config: mergedConfig,
    hooks: {
      renderHeader: (context: CouponPluginContext) => {
        const rules = context.coupon.rules ?? [];
        if (rules.length === 0) return null;

        const expanded = context.rulesExpanded;
        const visible = expanded ? rules : rules.slice(0, collapsedCount);
        const hiddenCount = rules.length - visible.length;

        return (
          <div
            style={T.rulesStyle}
            data-testid="coupon-rules"
            data-expanded={expanded ? "true" : "false"}
          >
            {title ? (
              <div style={T.rulesTitleStyle}>{title}</div>
            ) : null}
            <ul style={T.rulesListStyle}>
              {visible.map((rule, i) => (
                <li
                  key={i}
                  style={T.rulesItemStyle}
                  data-testid={\`coupon-rule-\${i}\`}
                >
                  {rule}
                </li>
              ))}
            </ul>
            {rules.length > collapsedCount ? (
              <button
                type="button"
                style={T.rulesToggleStyle}
                data-testid="coupon-rules-toggle"
                aria-expanded={expanded}
                onClick={() => context.toggleRules()}
              >
                {expanded
                  ? collapseText
                  : showCount
                    ? \`\${expandText} (\${hiddenCount} 项)\`
                    : expandText}
                <span aria-hidden="true" style={T.rulesCaretStyle}>
                  {expanded ? "▲" : "▼"}
                </span>
              </button>
            ) : null}
          </div>
        );
      },
    },
  };
}
`,Zx=`import React from "react";
import type { CouponData, CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * SharePlugin — 分享按钮（footer 槽，priority 31 在领取按钮下方）。
 *
 * 渲染次按钮（muted 样式），点击触发 config.onShare；未配置 onShare 时按钮隐藏
 * （分享能力完全由宿主提供，插件只负责 UI 位）。
 * meta 在同目录 index.ts 挂载。
 */
export interface ShareConfig {
  /** 按钮文案，默认「分享好友」 */
  text?: string;
  /** 分享回调（入参为当前券数据）；未配置时不渲染按钮 */
  onShare?: (coupon: CouponData) => void | Promise<void>;
}

export function createSharePlugin(config: ShareConfig = {}): CouponPlugin {
  const text = config.text ?? "分享好友";
  // 注：renderPluginSlot 的 footer 槽以 position "after" 过滤（plugin-core 现状），
  // 声明 "footer" 会被滤掉，故这里保持 "after"（P2-8 槽位元数据部分待内核支持）。
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "share",
    version: "0.1.0",
    description: "分享按钮：footer 槽渲染次按钮，分享能力由 onShare 回调提供",
    priority: 31,
    config: mergedConfig,
    hooks: {
      renderFooter: (context: CouponPluginContext) => {
        if (!config.onShare) return null;

        const handleClick = async () => {
          await config.onShare?.(context.coupon);
          // onShare 内部若改了闭包状态，需要显式刷新
          context.forceUpdate();
        };

        return (
          <div style={T.actionsStyle}>
            <button
              type="button"
              style={T.claimMutedStyle}
              data-testid="coupon-share-btn"
              onClick={() => void handleClick()}
            >
              {text}
            </button>
          </div>
        );
      },
    },
  };
}
`,e1=`import React from "react";
import type {
  CouponPlugin,
  CouponPluginContext,
} from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * StackPlugin — 叠加态角标（before 槽）。
 *
 * 数据驱动：coupon.stackable === true 渲染「可叠加」强调角标；
 * showWhenNotStackable 开启时，stackable === false 渲染「不可叠加」灰标。
 * always 可强制渲染（不依赖数据字段）。
 *
 * 注意：renderPluginSlot 对未声明 slotPosition 的插件默认落 after 槽，
 * 这里必须在 config 里显式 slotPosition: "before"，否则角标会掉进 after 段。
 * meta 在同目录 index.ts 挂载。
 */
export interface StackConfig {
  /** 可叠加角标文案，默认「可叠加」 */
  text?: string;
  /** 不可叠加角标文案，默认「不可叠加」 */
  notStackableText?: string;
  /** stackable === false 时是否渲染「不可叠加」灰标，默认 false */
  showWhenNotStackable?: boolean;
  /** 不看数据字段，强制渲染可叠加角标（组合示例/纯展示场景） */
  always?: boolean;
}

export function createStackPlugin(config: StackConfig = {}): CouponPlugin {
  const text = config.text ?? "可叠加";
  const notStackableText = config.notStackableText ?? "不可叠加";
  const mergedConfig = { slotPosition: "before", order: 10, ...config } as any;

  return {
    name: "stack",
    version: "0.1.0",
    description:
      "叠加态角标：按 coupon.stackable 渲染「可叠加/不可叠加」角标，可强制展示",
    priority: 12,
    config: mergedConfig,
    hooks: {
      renderHeader: (context: CouponPluginContext) => {
        const stackable = context.coupon.stackable;

        if (config.always || stackable === true) {
          return (
            <div style={T.badgesStyle} data-testid="coupon-badges">
              <span
                style={T.badgeStackStyle}
                data-testid="coupon-stack-badge"
                data-stackable="true"
              >
                {text}
              </span>
            </div>
          );
        }

        if (config.showWhenNotStackable && stackable === false) {
          return (
            <div style={T.badgesStyle} data-testid="coupon-badges">
              <span
                style={T.badgeMutedStyle}
                data-testid="coupon-stack-badge"
                data-stackable="false"
              >
                {notStackableText}
              </span>
            </div>
          );
        }

        return null;
      },
    },
  };
}
`,n1=`import React from "react";
import type {
  CouponPlugin,
  CouponPluginContext,
  CouponValidity,
} from "../../components/CouponPlugin/plugins/types";
import {
  computeValidity,
  nextValidityCheckAt,
  sameValidity,
  DAY_MS,
} from "../../components/CouponPlugin/plugins/validity";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * ValidityPlugin — 有效期判定（after 槽，priority 23 > RuleExpand 的 21，渲染在规则上方）。
 *
 * 三种判定模式（按声明字段自动选择，判定实现见 plugins/validity.ts）：
 *   absolute —— validTo（可配 validFrom）存在时；未开始/已过期/剩余天数
 *   relative —— validDays：未领取显示「领取后 N 天内有效」；已领取从 state.claimedAt
 *               （ClaimStatePlugin 写入）起算
 *   none     —— 都未声明：不渲染、不写 state
 *
 * P1-3：页面停留跨过 validTo 后必须自动收敛。每次判定后按「下一次边界」
 * （validFrom 或 validTo + 1ms）挂一个 setTimeout，到点重算并写 state；
 * 定时器存在 context.shared，onMount 返回清理函数、onUnmount 兜底清理。
 *
 * 产出写内核 state.validity（changed 才写），供 ClaimStatePlugin 联动降级 expired。
 * 时钟可注入（now），测试与 demo 可控。
 * meta 在同目录 index.ts 挂载。
 */
export interface ValidityConfig {
  /** 当前时钟，默认 Date.now（测试/demo 可注入固定值） */
  now?: () => number;
  /** 紧迫阈值：剩余 ≤ N 天标记 urgent（强调色「仅剩 X 天」），默认 3 */
  urgentDays?: number;
}

/** 定时器句柄存放键（跨渲染读取最新值） */
const TIMER_KEY = "validity:timer";
/** setTimeout 上限（超过会溢出成 1ms，长周期改为分段复查） */
const MAX_TIMEOUT = 2_147_483_647;

export function createValidityPlugin(
  config: ValidityConfig = {}
): CouponPlugin {
  const urgentDays = config.urgentDays ?? 3;
  const now = config.now ?? (() => Date.now());
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  function clearTimer(context: CouponPluginContext): void {
    const timer = context.shared.get(TIMER_KEY);
    if (timer !== undefined) {
      window.clearTimeout(timer as number);
      context.shared.delete(TIMER_KEY);
    }
  }

  /** 事件钩子共用：计算并按需写入 state，然后按边界重挂定时器 */
  function evaluate(context: CouponPluginContext): void {
    const claimedAt = (context.state?.claimedAt ?? undefined) as
      | number
      | undefined;
    const next = computeValidity(context.coupon, {
      now,
      urgentDays,
      claimedAt,
    });
    if (next === null) {
      // none 模式：不写 state、不渲染
      clearTimer(context);
      return;
    }
    const current = (context.state?.validity ?? null) as CouponValidity | null;
    if (!sameValidity(next, current)) context.setState({ validity: next });
    schedule(context);
  }

  /** 按「下一次需要复查的时间点」挂定时器；已过边界则不再挂 */
  function schedule(context: CouponPluginContext): void {
    clearTimer(context);
    const claimedAt = (context.state?.claimedAt ?? undefined) as
      | number
      | undefined;
    const at = nextValidityCheckAt(context.coupon, claimedAt, now());
    if (at === null) return;

    const delay = Math.max(0, Math.min(at - now(), MAX_TIMEOUT));
    const timer = window.setTimeout(() => {
      context.shared.delete(TIMER_KEY);
      evaluate(context);
    }, delay);
    context.shared.set(TIMER_KEY, timer);
  }

  return {
    name: "validity",
    version: "0.1.0",
    description:
      "有效期判定：绝对（validFrom/validTo）/ 相对（领取后 N 天）双模式，紧迫态强调、到期自动复查写 state 供领取状态机联动",
    priority: 23,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        evaluate(context);
        return () => clearTimer(context);
      },
      onPropsChange: (context: CouponPluginContext) => {
        evaluate(context);
      },
      onPhaseChange: (context: CouponPluginContext) => {
        // 领取动作写入 claimedAt → 相对有效期要重算（从「领取后 N 天」切到锚定 claimedAt）
        evaluate(context);
      },
      onUnmount: (context: CouponPluginContext) => {
        clearTimer(context);
      },
      renderHeader: (context: CouponPluginContext) => {
        const validity = context.validity;
        if (!validity || validity.mode === "none") return null;

        const remainingDays =
          validity.remainingMs !== null
            ? Math.ceil(validity.remainingMs / DAY_MS)
            : null;

        return (
          <div
            style={T.validityStyle}
            data-testid="coupon-validity"
            data-mode={validity.mode}
            data-expired={validity.expired ? "true" : "false"}
            data-urgent={validity.urgent ? "true" : "false"}
          >
            <span style={T.fieldLabelStyle}>有效期</span>
            <span style={T.validityTextStyle}>{validity.text}</span>
            {validity.expired ? (
              <span style={T.chipExpiredStyle}>已过期</span>
            ) : validity.urgent && remainingDays !== null ? (
              <span style={T.chipUrgentStyle}>仅剩 {remainingDays} 天</span>
            ) : validity.notStarted ? (
              <span style={T.chipMutedStyle}>未开始</span>
            ) : null}
          </div>
        );
      },
    },
  };
}
`,G1={before:"票面上方 · before",info:"票面信息 · after",footer:"底部操作 · footer",behavior:"行为钩子 · 无渲染"},Ms=["before","info","footer","behavior"],Os=Object.assign({"/src/custom-plugins/AnalyticsPlugin/doc.json":Op,"/src/custom-plugins/ChannelPlugin/doc.json":$p,"/src/custom-plugins/ClaimStatePlugin/doc.json":wp,"/src/custom-plugins/CopyCodePlugin/doc.json":bp,"/src/custom-plugins/CountdownPlugin/doc.json":Rp,"/src/custom-plugins/DetailLinkPlugin/doc.json":Lp,"/src/custom-plugins/EligibilityPlugin/doc.json":Fx,"/src/custom-plugins/HistoryPlugin/doc.json":Mp,"/src/custom-plugins/ProgressPlugin/doc.json":Tp,"/src/custom-plugins/QuotaPlugin/doc.json":jp,"/src/custom-plugins/RemindPlugin/doc.json":Dp,"/src/custom-plugins/RuleExpandPlugin/doc.json":_p,"/src/custom-plugins/SharePlugin/doc.json":Np,"/src/custom-plugins/StackPlugin/doc.json":Ep,"/src/custom-plugins/ValidityPlugin/doc.json":kp}),Ls=Object.assign({"/src/custom-plugins/AnalyticsPlugin/create.tsx":Ux,"/src/custom-plugins/ChannelPlugin/create.tsx":Wx,"/src/custom-plugins/ClaimStatePlugin/create.tsx":Vx,"/src/custom-plugins/CopyCodePlugin/create.tsx":Hx,"/src/custom-plugins/CountdownPlugin/create.tsx":qx,"/src/custom-plugins/DetailLinkPlugin/create.tsx":Bx,"/src/custom-plugins/EligibilityPlugin/create.tsx":Qx,"/src/custom-plugins/HistoryPlugin/create.tsx":Kx,"/src/custom-plugins/ProgressPlugin/create.tsx":Yx,"/src/custom-plugins/QuotaPlugin/create.tsx":Xx,"/src/custom-plugins/RemindPlugin/create.tsx":Gx,"/src/custom-plugins/RuleExpandPlugin/create.tsx":Jx,"/src/custom-plugins/SharePlugin/create.tsx":Zx,"/src/custom-plugins/StackPlugin/create.tsx":e1,"/src/custom-plugins/ValidityPlugin/create.tsx":n1}),Ap=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function t1(e){const n=Object.keys(Ls).find(r=>Ap(r)===e),t=n?Ls[n]:"",o=/priority:\s*(\d+)/.exec(t);return o?Number(o[1]):0}function o1(e){const n=Object.keys(Os).find(t=>Ap(t)===e);return n?Os[n]:{name:e,description:"（缺少 doc.json）"}}const r1=[{dir:"StackPlugin",group:"before",make:()=>Ve()},{dir:"ChannelPlugin",group:"before",make:()=>zo()},{dir:"CountdownPlugin",group:"before",make:()=>Dt({startAt:Date.now()+36e5})},{dir:"ValidityPlugin",group:"info",make:()=>cn()},{dir:"QuotaPlugin",group:"info",make:()=>et()},{dir:"ProgressPlugin",group:"info",make:()=>Zn()},{dir:"RuleExpandPlugin",group:"info",make:()=>On()},{dir:"CopyCodePlugin",group:"info",make:()=>Ao()},{dir:"HistoryPlugin",group:"info",make:()=>Io()},{dir:"DetailLinkPlugin",group:"info",make:()=>Fo()},{dir:"ClaimStatePlugin",group:"footer",make:()=>Z()},{dir:"SharePlugin",group:"footer",make:()=>gl()},{dir:"RemindPlugin",group:"footer",make:()=>nu()},{dir:"AnalyticsPlugin",group:"behavior",make:()=>tu()}],zs=r1.map(e=>{const n=o1(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:t1(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>Ms.indexOf(e.group)-Ms.indexOf(n.group)||n.priority-e.priority),J1=["StackPlugin","CountdownPlugin","ValidityPlugin","QuotaPlugin","ProgressPlugin","ClaimStatePlugin","SharePlugin","RuleExpandPlugin","HistoryPlugin"];function Z1(){const e=Date.now();return{id:"c-demo-full",title:"家电焕新专享券",amount:30,threshold:299,stackable:!0,total:1e3,claimed:720,quota:2,channels:["仅 APP"],code:"VD-2026-88XK",validFrom:e-3*864e5,validTo:e+4*864e5,rules:["全平台通用，可与店铺优惠叠加使用","下单满 299 元可用，家电类目除外","领取后 4 天内有效，过期自动作废","每单限用 1 张，不找零、不兑现"],history:[{at:e-2*864e5,action:"领取成功"},{at:e-6*36e5,action:"设置开抢提醒"}]}}const l1={id:"claim-flow",title:"领券主流程",group:"领取流程",ref:{label:"电商 App · 商品详情领券",url:"https://vane.dev/examples/coupon/claim-flow"},pain:"光有面额和标题用户不敢领：什么时候截止、能领几张、规则有没有坑，都要一眼看清。",plugs:[{fn:"createValidityPlugin",why:"有效期判定行 + 紧迫态，结果写入内核 state 驱动状态机"},{fn:"createClaimStatePlugin",cfg:"claim: async () => ({ ok: true })",why:"主 CTA：idle/可领/领取中/已领/过期 七态按钮，领取失败自动回退"},{fn:"createQuotaPlugin",why:"每人限领 2 张，超出走 onExceed 而不是静默失败"},{fn:"createRuleExpandPlugin",cfg:"collapsedCount: 2",why:"规则默认收起只露 2 条，点开展开全量，不挤占票面"}],props:["coupon={coupon}"],note:"Validity 与 ClaimState 缺一不可：只有前者券面不会过期降级，只有后者过期了还能领。"},i1=O([cn(),Z({claim:async()=>(await new Promise(e=>setTimeout(e,600)),{ok:!0})}),et(),On({collapsedCount:2})]);function a1(){const[e,n]=S.useState(0),t={id:"c-claim",title:"家电焕新专享券",amount:30,threshold:299,quota:2,validFrom:Date.now()-3*864e5,validTo:Date.now()+4*864e5,rules:["全平台通用，可与店铺优惠叠加使用","下单满 299 元可用，家电类目除外","领取后 4 天内有效，过期自动作废","每单限用 1 张，不找零、不兑现"]};return m.jsx(i1,{coupon:t,containerStyle:{maxWidth:420,margin:"0 auto"}},e)}const u1=Object.freeze(Object.defineProperty({__proto__:null,default:a1,meta:l1},Symbol.toStringTag,{value:"Module"})),s1={id:"limited-rush",title:"限量抢券",group:"限量抢购",ref:{label:"大促会场 · 整点抢券",url:"https://vane.dev/examples/coupon/limited-rush"},pain:"限量券要的是氛围：距开始有倒计时、剩余额度有进度，否则用户感知不到紧迫。",plugs:[{fn:"createCountdownPlugin",cfg:"startAt: Date.now() + 3600_000",why:"票面上方倒计时角标，到点 onFire 回调可接自动刷新"},{fn:"createProgressPlugin",why:"已领 720/1000 的进度条，剩 20% 进入紧迫配色"},{fn:"createQuotaPlugin",why:"每人限领 1 张，抢购场景必配防刷提示"},{fn:"createClaimStatePlugin",why:"状态机按钮：抢完自动降级「已抢光」，不再响应点击"}],props:["coupon={coupon}"],note:"Countdown 在 before 区（票面上方角标），Progress 在 after 区（票面下方信息行）。"},c1=O([Dt({startAt:Date.now()+36e5}),Zn(),et(),Z()]);function d1(){return m.jsx(c1,{coupon:{id:"c-rush",title:"整点神券 · 限量抢",amount:100,threshold:599,total:1e3,claimed:720,quota:1},containerStyle:{maxWidth:420,margin:"0 auto"}})}const p1=Object.freeze(Object.defineProperty({__proto__:null,default:d1,meta:s1},Symbol.toStringTag,{value:"Module"})),f1={id:"stack-promo",title:"大促叠券",group:"大促叠加",ref:{label:"大促主会场 · 券包页",url:"https://vane.dev/examples/coupon/stack-promo"},pain:"多券叠加规则复杂：能不能叠、哪些渠道领、怎么分享给好友凑单，都要在票面上说清。",plugs:[{fn:"createStackPlugin",why:"「可叠加」角标：stackable 数据源驱动，不可叠时默认不展示"},{fn:"createChannelPlugin",why:"渠道限定标签（仅 APP / 仅新客），领错渠道的客诉直接归零"},{fn:"createSharePlugin",why:"footer 分享按钮，裂变动线直接长在券上"}],props:["coupon={coupon}"],note:"三个都是纯展示/回调插件，没有任何状态机依赖，可与其他场景自由组合。"},m1=O([Ve(),zo(),gl()]);function g1(){return m.jsx(m1,{coupon:{id:"c-stack",title:"跨店每满减叠加券",amount:50,threshold:300,stackable:!0,channels:["仅 APP","仅新客"]},containerStyle:{maxWidth:420,margin:"0 auto"}})}const h1=Object.freeze(Object.defineProperty({__proto__:null,default:g1,meta:f1},Symbol.toStringTag,{value:"Module"})),y1={id:"post-claim",title:"领后核销",group:"领后核销",ref:{label:"会员中心 · 我的券包",url:"https://vane.dev/examples/coupon/post-claim"},pain:"领完券用户不知道码在哪、去哪用：券码、记录、跳转三件套把领后动线补全。",plugs:[{fn:"createClaimStatePlugin",cfg:'initialPhase: "claimed"',why:"直接以「已领取」半终态打开，可继续核销为 used"},{fn:"createCopyCodePlugin",why:"claimed 后展示券码一键复制，onCopied 可接埋点"},{fn:"createHistoryPlugin",why:"领取/使用记录倒序展示，最多 3 条可配"},{fn:"createDetailLinkPlugin",why:"「去使用」跳转链接，把用户送回商详"}],props:["coupon={coupon}"],note:"DetailLink 的 href 必须由业务传入（或经 onDetail 接管），这里演示用占位链接。"},v1=O([Z({initialPhase:"claimed"}),Ao(),Io(),Fo({href:"https://vane.dev/examples/coupon/post-claim"})]);function C1(){const e=Date.now();return m.jsx(v1,{coupon:{id:"c-used",title:"家电焕新专享券",amount:30,threshold:299,code:"VD-2026-88XK",validTo:e+4*864e5,history:[{at:e-2*864e5,action:"领取成功"},{at:e-2*864e5+6e4,action:"查看使用规则"}]},containerStyle:{maxWidth:420,margin:"0 auto"}})}const x1=Object.freeze(Object.defineProperty({__proto__:null,default:C1,meta:y1},Symbol.toStringTag,{value:"Module"})),S1={id:"full-stack",title:"全功能中台",group:"全量装配",ref:{label:"券系统中台 · 全能力演示",url:"https://vane.dev/examples/coupon/full-stack"},pain:"接入方想一次看全 14 个插件的真实排布与交互，逐页翻示例太慢。",plugs:[{fn:"createCountdownPlugin",cfg:"startAt: Date.now() + 3600_000",why:"before：开抢倒计时"},{fn:"createStackPlugin",why:"before：可叠加角标"},{fn:"createChannelPlugin",why:"before：渠道限定标签"},{fn:"createValidityPlugin",why:"after：有效期行，驱动状态机降级"},{fn:"createQuotaPlugin",why:"after：限领提示"},{fn:"createProgressPlugin",why:"after：限量进度条"},{fn:"createRuleExpandPlugin",why:"after：规则折叠"},{fn:"createCopyCodePlugin",why:"after：claimed 后的券码复制"},{fn:"createHistoryPlugin",why:"after：领取/使用记录"},{fn:"createDetailLinkPlugin",cfg:'href: "https://vane.dev/examples/coupon/full-stack"',why:"after：去使用跳转"},{fn:"createClaimStatePlugin",why:"footer：领取状态机主按钮"},{fn:"createSharePlugin",why:"footer：分享裂变"},{fn:"createRemindPlugin",why:"footer：开抢提醒"},{fn:"createAnalyticsPlugin",why:"无渲染：onMount 埋点上报，不动 UI"}],props:["coupon={coupon}"],note:"全量装配是压舱石场景：任何插件排序 / 隔离回归都会在这里先炸出来。"},Zt=Date.now(),P1=O([Dt({startAt:Zt+36e5}),Ve(),zo(),cn(),et(),Zn(),On(),Ao(),Io(),Fo({href:"https://vane.dev/examples/coupon/full-stack"}),Z(),gl(),nu(),tu()]);function w1(){return m.jsx(P1,{coupon:{id:"c-full",title:"家电焕新专享券",amount:30,threshold:299,stackable:!0,total:1e3,claimed:720,quota:2,channels:["仅 APP"],code:"VD-2026-88XK",validFrom:Zt-3*864e5,validTo:Zt+4*864e5,rules:["全平台通用，可与店铺优惠叠加使用","下单满 299 元可用，家电类目除外","领取后 4 天内有效，过期自动作废","每单限用 1 张，不找零、不兑现"],history:[{at:Zt-2*864e5,action:"领取成功"},{at:Zt-6*36e5,action:"设置开抢提醒"}]},containerStyle:{maxWidth:420,margin:"0 auto"}})}const k1=Object.freeze(Object.defineProperty({__proto__:null,default:w1,meta:S1},Symbol.toStringTag,{value:"Module"})),_1=`import React, { useState } from "react";
import { createCouponCard } from "vane-coupon";
import {
  createClaimStatePlugin,
  createQuotaPlugin,
  createRuleExpandPlugin,
  createValidityPlugin,
} from "vane-coupon/custom-plugins";
import type { ScenarioMeta } from "./types";

/**
 * 01 · 领券主流程
 *
 * 「有效期判定 + 领取状态机 + 限领 + 规则」四个原子插件拼成一张可领取的券。
 * Validity 与 ClaimState 只经内核 state 联动：过期券自动降级为「已过期」。
 */
export const meta: ScenarioMeta = {
  id: "claim-flow",
  title: "领券主流程",
  group: "领取流程",
  ref: { label: "电商 App · 商品详情领券", url: "https://vane.dev/examples/coupon/claim-flow" },
  pain: "光有面额和标题用户不敢领：什么时候截止、能领几张、规则有没有坑，都要一眼看清。",
  plugs: [
    { fn: "createValidityPlugin", why: "有效期判定行 + 紧迫态，结果写入内核 state 驱动状态机" },
    {
      fn: "createClaimStatePlugin",
      cfg: "claim: async () => ({ ok: true })",
      why: "主 CTA：idle/可领/领取中/已领/过期 七态按钮，领取失败自动回退",
    },
    { fn: "createQuotaPlugin", why: "每人限领 2 张，超出走 onExceed 而不是静默失败" },
    {
      fn: "createRuleExpandPlugin",
      cfg: "collapsedCount: 2",
      why: "规则默认收起只露 2 条，点开展开全量，不挤占票面",
    },
  ],
  props: ["coupon={coupon}"],
  note: "Validity 与 ClaimState 缺一不可：只有前者券面不会过期降级，只有后者过期了还能领。",
};

const Coupon = createCouponCard([
  createValidityPlugin(),
  createClaimStatePlugin({
    claim: async () => {
      await new Promise((r) => setTimeout(r, 600));
      return { ok: true };
    },
  }),
  createQuotaPlugin(),
  createRuleExpandPlugin({ collapsedCount: 2 }),
]);

export default function Stage() {
  const [claimed, setClaimed] = useState(0);
  const coupon = {
    id: "c-claim",
    title: "家电焕新专享券",
    amount: 30,
    threshold: 299,
    quota: 2,
    validFrom: Date.now() - 3 * 86_400_000,
    validTo: Date.now() + 4 * 86_400_000,
    rules: [
      "全平台通用，可与店铺优惠叠加使用",
      "下单满 299 元可用，家电类目除外",
      "领取后 4 天内有效，过期自动作废",
      "每单限用 1 张，不找零、不兑现",
    ],
  };
  return (
    <Coupon
      coupon={coupon}
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      key={claimed}
    />
  );
}
`,E1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import {
  createClaimStatePlugin,
  createCountdownPlugin,
  createProgressPlugin,
  createQuotaPlugin,
} from "vane-coupon/custom-plugins";
import type { ScenarioMeta } from "./types";

/**
 * 02 · 限量抢券
 *
 * 倒计时制造「还没开始」的蓄水期，进度条制造「快抢完」的紧迫感——
 * 都是 before/after 区的无状态氛围插件，核心状态机照常工作。
 */
export const meta: ScenarioMeta = {
  id: "limited-rush",
  title: "限量抢券",
  group: "限量抢购",
  ref: { label: "大促会场 · 整点抢券", url: "https://vane.dev/examples/coupon/limited-rush" },
  pain: "限量券要的是氛围：距开始有倒计时、剩余额度有进度，否则用户感知不到紧迫。",
  plugs: [
    {
      fn: "createCountdownPlugin",
      cfg: "startAt: Date.now() + 3600_000",
      why: "票面上方倒计时角标，到点 onFire 回调可接自动刷新",
    },
    { fn: "createProgressPlugin", why: "已领 720/1000 的进度条，剩 20% 进入紧迫配色" },
    { fn: "createQuotaPlugin", why: "每人限领 1 张，抢购场景必配防刷提示" },
    { fn: "createClaimStatePlugin", why: "状态机按钮：抢完自动降级「已抢光」，不再响应点击" },
  ],
  props: ["coupon={coupon}"],
  note: "Countdown 在 before 区（票面上方角标），Progress 在 after 区（票面下方信息行）。",
};

const Coupon = createCouponCard([
  createCountdownPlugin({ startAt: Date.now() + 3600_000 }),
  createProgressPlugin(),
  createQuotaPlugin(),
  createClaimStatePlugin(),
]);

export default function Stage() {
  return (
    <Coupon
      coupon={{
        id: "c-rush",
        title: "整点神券 · 限量抢",
        amount: 100,
        threshold: 599,
        total: 1000,
        claimed: 720,
        quota: 1,
      }}
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
    />
  );
}
`,T1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import {
  createChannelPlugin,
  createSharePlugin,
  createStackPlugin,
} from "vane-coupon/custom-plugins";
import type { ScenarioMeta } from "./types";

/**
 * 03 · 大促叠券
 *
 * 叠加规则 + 渠道限定 + 分享裂变，是大促券包页的三件套。
 * 全部是无状态氛围插件，装配多也不会互相干扰。
 */
export const meta: ScenarioMeta = {
  id: "stack-promo",
  title: "大促叠券",
  group: "大促叠加",
  ref: { label: "大促主会场 · 券包页", url: "https://vane.dev/examples/coupon/stack-promo" },
  pain: "多券叠加规则复杂：能不能叠、哪些渠道领、怎么分享给好友凑单，都要在票面上说清。",
  plugs: [
    { fn: "createStackPlugin", why: "「可叠加」角标：stackable 数据源驱动，不可叠时默认不展示" },
    { fn: "createChannelPlugin", why: "渠道限定标签（仅 APP / 仅新客），领错渠道的客诉直接归零" },
    { fn: "createSharePlugin", why: "footer 分享按钮，裂变动线直接长在券上" },
  ],
  props: ["coupon={coupon}"],
  note: "三个都是纯展示/回调插件，没有任何状态机依赖，可与其他场景自由组合。",
};

const Coupon = createCouponCard([
  createStackPlugin(),
  createChannelPlugin(),
  createSharePlugin(),
]);

export default function Stage() {
  return (
    <Coupon
      coupon={{
        id: "c-stack",
        title: "跨店每满减叠加券",
        amount: 50,
        threshold: 300,
        stackable: true,
        channels: ["仅 APP", "仅新客"],
      }}
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
    />
  );
}
`,j1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import {
  createClaimStatePlugin,
  createCopyCodePlugin,
  createDetailLinkPlugin,
  createHistoryPlugin,
} from "vane-coupon/custom-plugins";
import type { ScenarioMeta } from "./types";

/**
 * 04 · 领后核销
 *
 * 领完券的券详情页：已领取态 + 券码复制 + 领取记录 + 使用跳转。
 * CopyCode 只在 claimed 之后展示券码，History 按时间倒序。
 */
export const meta: ScenarioMeta = {
  id: "post-claim",
  title: "领后核销",
  group: "领后核销",
  ref: { label: "会员中心 · 我的券包", url: "https://vane.dev/examples/coupon/post-claim" },
  pain: "领完券用户不知道码在哪、去哪用：券码、记录、跳转三件套把领后动线补全。",
  plugs: [
    {
      fn: "createClaimStatePlugin",
      cfg: "initialPhase: \\"claimed\\"",
      why: "直接以「已领取」半终态打开，可继续核销为 used",
    },
    { fn: "createCopyCodePlugin", why: "claimed 后展示券码一键复制，onCopied 可接埋点" },
    { fn: "createHistoryPlugin", why: "领取/使用记录倒序展示，最多 3 条可配" },
    { fn: "createDetailLinkPlugin", why: "「去使用」跳转链接，把用户送回商详" },
  ],
  props: ["coupon={coupon}"],
  note: "DetailLink 的 href 必须由业务传入（或经 onDetail 接管），这里演示用占位链接。",
};

const Coupon = createCouponCard([
  createClaimStatePlugin({ initialPhase: "claimed" }),
  createCopyCodePlugin(),
  createHistoryPlugin(),
  createDetailLinkPlugin({ href: "https://vane.dev/examples/coupon/post-claim" }),
]);

export default function Stage() {
  const now = Date.now();
  return (
    <Coupon
      coupon={{
        id: "c-used",
        title: "家电焕新专享券",
        amount: 30,
        threshold: 299,
        code: "VD-2026-88XK",
        validTo: now + 4 * 86_400_000,
        history: [
          { at: now - 2 * 86_400_000, action: "领取成功" },
          { at: now - 2 * 86_400_000 + 60_000, action: "查看使用规则" },
        ],
      }}
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
    />
  );
}
`,R1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import {
  createAnalyticsPlugin,
  createChannelPlugin,
  createClaimStatePlugin,
  createCopyCodePlugin,
  createCountdownPlugin,
  createDetailLinkPlugin,
  createHistoryPlugin,
  createProgressPlugin,
  createQuotaPlugin,
  createRemindPlugin,
  createRuleExpandPlugin,
  createSharePlugin,
  createStackPlugin,
  createValidityPlugin,
} from "vane-coupon/custom-plugins";
import type { ScenarioMeta } from "./types";

/**
 * 05 · 全功能中台
 *
 * 14 个插件全部装配：四段插槽各司其职（before 角标 / after 信息 / footer 操作 / 行为钩子），
 * 验证「多插件同槽排序（order 升序 → priority 降序）+ 单插件抛错隔离」都成立。
 */
export const meta: ScenarioMeta = {
  id: "full-stack",
  title: "全功能中台",
  group: "全量装配",
  ref: { label: "券系统中台 · 全能力演示", url: "https://vane.dev/examples/coupon/full-stack" },
  pain: "接入方想一次看全 14 个插件的真实排布与交互，逐页翻示例太慢。",
  plugs: [
    { fn: "createCountdownPlugin", cfg: "startAt: Date.now() + 3600_000", why: "before：开抢倒计时" },
    { fn: "createStackPlugin", why: "before：可叠加角标" },
    { fn: "createChannelPlugin", why: "before：渠道限定标签" },
    { fn: "createValidityPlugin", why: "after：有效期行，驱动状态机降级" },
    { fn: "createQuotaPlugin", why: "after：限领提示" },
    { fn: "createProgressPlugin", why: "after：限量进度条" },
    { fn: "createRuleExpandPlugin", why: "after：规则折叠" },
    { fn: "createCopyCodePlugin", why: "after：claimed 后的券码复制" },
    { fn: "createHistoryPlugin", why: "after：领取/使用记录" },
    { fn: "createDetailLinkPlugin", cfg: "href: \\"https://vane.dev/examples/coupon/full-stack\\"", why: "after：去使用跳转" },
    { fn: "createClaimStatePlugin", why: "footer：领取状态机主按钮" },
    { fn: "createSharePlugin", why: "footer：分享裂变" },
    { fn: "createRemindPlugin", why: "footer：开抢提醒" },
    { fn: "createAnalyticsPlugin", why: "无渲染：onMount 埋点上报，不动 UI" },
  ],
  props: ["coupon={coupon}"],
  note: "全量装配是压舱石场景：任何插件排序 / 隔离回归都会在这里先炸出来。",
};

const now = Date.now();

const Coupon = createCouponCard([
  createCountdownPlugin({ startAt: now + 3600_000 }),
  createStackPlugin(),
  createChannelPlugin(),
  createValidityPlugin(),
  createQuotaPlugin(),
  createProgressPlugin(),
  createRuleExpandPlugin(),
  createCopyCodePlugin(),
  createHistoryPlugin(),
  createDetailLinkPlugin({ href: "https://vane.dev/examples/coupon/full-stack" }),
  createClaimStatePlugin(),
  createSharePlugin(),
  createRemindPlugin(),
  createAnalyticsPlugin(),
]);

export default function Stage() {
  return (
    <Coupon
      coupon={{
        id: "c-full",
        title: "家电焕新专享券",
        amount: 30,
        threshold: 299,
        stackable: true,
        total: 1000,
        claimed: 720,
        quota: 2,
        channels: ["仅 APP"],
        code: "VD-2026-88XK",
        validFrom: now - 3 * 86_400_000,
        validTo: now + 4 * 86_400_000,
        rules: [
          "全平台通用，可与店铺优惠叠加使用",
          "下单满 299 元可用，家电类目除外",
          "领取后 4 天内有效，过期自动作废",
          "每单限用 1 张，不找零、不兑现",
        ],
        history: [
          { at: now - 2 * 86_400_000, action: "领取成功" },
          { at: now - 6 * 3600_000, action: "设置开抢提醒" },
        ],
      }}
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
    />
  );
}
`,$1=Object.assign({"./01-claim-flow.tsx":u1,"./02-limited-rush.tsx":p1,"./03-stack-promo.tsx":h1,"./04-post-claim.tsx":x1,"./05-full-stack.tsx":k1}),N1=Object.assign({"./01-claim-flow.tsx":_1,"./02-limited-rush.tsx":E1,"./03-stack-promo.tsx":T1,"./04-post-claim.tsx":j1,"./05-full-stack.tsx":R1}),D1=e=>e.replace(/^\.\//,""),Gr=Object.entries($1).map(([e,n])=>{const t=D1(e);return{meta:n.meta,Component:n.default,file:t,source:N1[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),eS=Gr.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),nS=Array.from(new Set(Gr.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort(),b1=S.lazy(()=>Ka(()=>import("./HomePage-CSJGtnYA.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),M1=S.lazy(()=>Ka(()=>import("./PluginsPage-CPZbEzaS.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),O1=S.lazy(()=>Ka(()=>import("./ScenariosPage-C83Me7PI.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),L1={pkg:"vane-coupon",brand:"C",subtitle:"优惠券 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${zs.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Gr.length} plates`}],routes:[{path:"/",element:m.jsx(b1,{})},{path:"/plugins",element:m.jsx(M1,{})},{path:"/scenarios",element:m.jsx(O1,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:_x.map(e=>({key:e,label:zp[e].label})),entries:Qi,detail:(e,n)=>m.jsx(Nx,{entry:e,order:n})},footer:[`${zs.length} PLUGINS · ${Gr.length} PLATES`,`${Qi.length} DEMOS · STATE MACHINE CORE`]};function z1(){return m.jsx(Ph,{config:L1})}const A1='[data-testid="coupon-claim-btn"], [data-testid="coupon-rules-toggle"], [data-testid="coupon-stack-badge"]';function As(e){const n=[];if(!e)return{problems:["体检根节点不存在"],checked:0};const t=Array.from(e.querySelectorAll(A1));let o=0;const r=e.getBoundingClientRect();if(!t.some(u=>{const a=u.getBoundingClientRect();return a.width!==0||a.height!==0}))return{problems:[],checked:0};const i=t.map(u=>(o+=1,{el:u,r:u.getBoundingClientRect()}));for(const{el:u,r:a}of i){const s=u.dataset.testid??u.tagName;if(a.width===0||a.height===0){n.push(`零尺寸元素：${s}（${a.width}×${a.height}）`);continue}const d=a.left-r.left,c=a.top-r.top;(d<-1||c<-1)&&n.push(`负坐标：${s}（left=${d.toFixed(1)}, top=${c.toFixed(1)}）`),(a.right-r.right>1||a.bottom-r.bottom>1)&&n.push(`越界：${s}（右溢 ${(a.right-r.right).toFixed(1)}px，下溢 ${(a.bottom-r.bottom).toFixed(1)}px）`)}for(let u=0;u<i.length;u++)for(let a=u+1;a<i.length;a++){const s=i[u].r,d=i[a].r,c=Math.min(s.right,d.right)-Math.max(s.left,d.left),f=Math.min(s.bottom,d.bottom)-Math.max(s.top,d.top);c>1&&f>1&&n.push(`重叠：${i[u].el.dataset.testid} × ${i[a].el.dataset.testid}`)}return e.scrollHeight<r.height-2&&n.push("容器没撑开：scrollHeight 盖不住内容底边"),{problems:n,checked:o}}const Qt=24*60*60*1e3,ce={id:"st",title:"自测券",amount:10,threshold:99},I1=O([]),F1=O([Z({claim:async()=>({ok:!0})})]),U1=O([Z({claim:async()=>({ok:!1,reason:"超出限领"})})]),W1=O([Z({stock:0})]),Ql=O([cn({urgentDays:3}),Z({claim:async()=>({ok:!0})})]),V1=O([On()]),Is=O([Ve({showWhenNotStackable:!0})]),H1=O([Ve({showWhenNotStackable:!0}),cn({urgentDays:3}),On(),Z({claim:async()=>({ok:!0})})]),q1=O([Zn({urgentPct:30})]),B1=O([et({quota:2,purchasedCount:2})]),Q1=O([Ao({code:"ST-2026"}),Z({claim:async()=>({ok:!0})})]),Ki=()=>new Promise(e=>setTimeout(e,0)),pn=async(e,n=60)=>{for(let t=0;t<n&&!e();t++)await Ki()};async function de(e){const n=document.createElement("div");n.style.cssText="position:fixed;left:0;top:0;width:420px;background:#fff",document.body.appendChild(n);const t=Jd(n);return ee.flushSync(()=>t.render(e)),await Ki(),{host:n,root:t,q:o=>n.querySelector(o),qq:o=>n.querySelectorAll(o),click:async o=>{const r=n.querySelector(o);if(!r)throw new Error(`找不到元素 ${o}`);ee.flushSync(()=>r.click()),await Ki()}}}async function K1(){var o,r,l,i,u,a,s,d,c,f,v,C,x,w,g,p,h;const e=[];let n=0;const t=(y,P)=>{n+=1,document.title=`SELFTEST RUNNING ${n}`,P||e.push(y)};{const y=await de(m.jsx(I1,{coupon:ce}));t("裸核心：渲染面额 ¥10",((r=(o=y.q('[data-testid="coupon-amount"]'))==null?void 0:o.textContent)==null?void 0:r.includes("10"))===!0),t("裸核心：门槛文案 满99可用",((l=y.q('[data-testid="coupon-threshold"]'))==null?void 0:l.textContent)==="满99可用"),t("裸核心：渲染标题",((i=y.q('[data-testid="coupon-title"]'))==null?void 0:i.textContent)==="自测券"),ee.flushSync(()=>y.root.unmount()),y.host.remove()}{const y=await de(m.jsx(F1,{coupon:ce})),P=()=>y.q('[data-testid="coupon-claim-btn"]');t("状态机：初始 available",((u=P())==null?void 0:u.dataset.phase)==="available"),await y.click('[data-testid="coupon-claim-btn"]'),await pn(()=>{var k;return((k=P())==null?void 0:k.dataset.phase)==="claimed"}),t("状态机：点击后 claimed（异步 claim 已 resolve）",((a=P())==null?void 0:a.dataset.phase)==="claimed"),t("状态机：终态按钮禁用",((s=P())==null?void 0:s.disabled)===!0),t("几何体检：领取卡无越界/重叠",As(y.host).problems.length===0),ee.flushSync(()=>y.root.unmount()),y.host.remove()}{const y=await de(m.jsx(U1,{coupon:ce}));await y.click('[data-testid="coupon-claim-btn"]'),await pn(()=>{var _;return((_=y.q('[data-testid="coupon-claim-btn"]'))==null?void 0:_.dataset.phase)==="available"}),t("状态机：领取失败回退 available",((d=y.q('[data-testid="coupon-claim-btn"]'))==null?void 0:d.dataset.phase)==="available"),ee.flushSync(()=>y.root.unmount()),y.host.remove();const P=await de(m.jsx(W1,{coupon:ce})),k=P.q('[data-testid="coupon-claim-btn"]');t("状态机：stock=0 挂载即 soldout",(k==null?void 0:k.dataset.phase)==="soldout"),t("状态机：soldout 文案「已抢光」",(k==null?void 0:k.textContent)==="已抢光"),ee.flushSync(()=>P.root.unmount()),P.host.remove()}{const y=Date.now(),P=await de(m.jsx(Ql,{coupon:{...ce,validFrom:y-10*Qt,validTo:y+2*Qt}})),k=P.q('[data-testid="coupon-validity"]');t("有效期：紧迫态标记 urgent",(k==null?void 0:k.dataset.urgent)==="true"),t("有效期：紧迫角标「仅剩」",((c=k==null?void 0:k.textContent)==null?void 0:c.includes("仅剩"))===!0);const _=P.q('[data-testid="coupon-claim-btn"]');t("有效期：未过期仍可领取",(_==null?void 0:_.dataset.phase)==="available"),ee.flushSync(()=>P.root.unmount()),P.host.remove();const T=await de(m.jsx(Ql,{coupon:{...ce,validTo:y-Qt}})),b=T.q('[data-testid="coupon-claim-btn"]');await pn(()=>(b==null?void 0:b.dataset.phase)==="expired"),t("有效期：过期联动状态机降级 expired",(b==null?void 0:b.dataset.phase)==="expired"),t("有效期：过期角标「已过期」",((v=(f=T.q('[data-testid="coupon-validity"]'))==null?void 0:f.textContent)==null?void 0:v.includes("已过期"))===!0),ee.flushSync(()=>T.root.unmount()),T.host.remove();const $=await de(m.jsx(Ql,{coupon:{...ce,validDays:7}})),M=$.q('[data-testid="coupon-validity"]');t("有效期：相对模式「领取后 7 天内有效」",((C=M==null?void 0:M.textContent)==null?void 0:C.includes("领取后 7 天内有效"))===!0),await $.click('[data-testid="coupon-claim-btn"]');const F=$.q('[data-testid="coupon-validity"]');await pn(()=>!((F==null?void 0:F.textContent)??"").includes("领取后")),t("有效期：领取后重算锚定 claimedAt",((F==null?void 0:F.textContent)??"").includes("领取后")===!1),ee.flushSync(()=>$.root.unmount()),$.host.remove()}{const y=await de(m.jsx(V1,{coupon:{...ce,rules:["一","二","三","四","五"]}}));t("规则：默认折叠 1 条",y.qq('[data-testid^="coupon-rule-"]').length===1),await y.click('[data-testid="coupon-rules-toggle"]'),t("规则：展开后 5 条",y.qq('[data-testid^="coupon-rule-"]').length===5),await y.click('[data-testid="coupon-rules-toggle"]'),t("规则：收起后 1 条",y.qq('[data-testid^="coupon-rule-"]').length===1),ee.flushSync(()=>y.root.unmount()),y.host.remove()}{const y=await de(m.jsx(Is,{coupon:{...ce,stackable:!0}}));t("叠加：stackable=true 显示可叠加",((x=y.q('[data-testid="coupon-stack-badge"]'))==null?void 0:x.textContent)==="可叠加"),ee.flushSync(()=>y.root.unmount()),y.host.remove();const P=await de(m.jsx(Is,{coupon:{...ce,stackable:!1}}));t("叠加：false 显示不可叠加灰标",((w=P.q('[data-testid="coupon-stack-badge"]'))==null?void 0:w.textContent)==="不可叠加"),ee.flushSync(()=>P.root.unmount()),P.host.remove()}{const y=Date.now(),P=await de(m.jsx(H1,{coupon:{...ce,amount:88,threshold:599,stackable:!0,validFrom:y-12*Qt,validTo:y+2*Qt,rules:["规则 A","规则 B","规则 C"]}}));t("合体：角标渲染",!!P.q('[data-testid="coupon-stack-badge"]')),t("合体：有效期渲染",!!P.q('[data-testid="coupon-validity"]')),t("合体：规则渲染",!!P.q('[data-testid="coupon-rules"]'));const k=P.q('[data-testid="coupon-validity"]'),_=P.q('[data-testid="coupon-rules"]');t("合体：槽内顺序 有效期在规则上方（priority 降序）",!!(k&&_&&k.compareDocumentPosition(_)&Node.DOCUMENT_POSITION_FOLLOWING)),t("合体：领取按钮渲染",!!P.q('[data-testid="coupon-claim-btn"]'));const T=As(P.host);t("合体：几何体检 0 问题（happy-dom 无布局引擎时自动跳过）",T.problems.length===0&&(T.checked===0||T.checked>=2)),ee.flushSync(()=>P.root.unmount()),P.host.remove()}{const y=await de(m.jsx(Ja,{coupon:ce}));t("裸 CouponCore：直接渲染可用",!!y.q('[data-testid="coupon-title"]')),t("裸 CouponCore：挂载标记存在",!!y.q('[data-testid="coupon-mounted"]')),ee.flushSync(()=>y.root.unmount()),y.host.remove()}{const y=await de(m.jsx(q1,{coupon:{...ce,total:100,claimed:85}})),P=y.q('[data-testid="coupon-progress"]');t("进度：percent 属性 85",(P==null?void 0:P.dataset.percent)==="85"),t("进度：紧迫态 urgent=true（urgentPct 30）",(P==null?void 0:P.dataset.urgent)==="true"),t("进度：文案含 已抢 85% 与 仅剩 15 张",((P==null?void 0:P.textContent)??"").includes("已抢 85%")&&((P==null?void 0:P.textContent)??"").includes("仅剩 15 张")),ee.flushSync(()=>y.root.unmount()),y.host.remove();const k=await de(m.jsx(B1,{coupon:ce})),_=k.q('[data-testid="coupon-quota"]');t("限领：reached=true",(_==null?void 0:_.dataset.reached)==="true"),t("限领：文案「已达限领上限」",((_==null?void 0:_.textContent)??"").includes("已达限领上限")),ee.flushSync(()=>k.root.unmount()),k.host.remove();const T=await de(m.jsx(Q1,{coupon:ce}));t("券码：available 相位不渲染",!T.q('[data-testid="coupon-code"]')),await T.click('[data-testid="coupon-claim-btn"]'),await pn(()=>!!T.q('[data-testid="coupon-code"]')),t("券码：领取后展示券码 ST-2026",((g=T.q('[data-testid="coupon-code"]'))==null?void 0:g.textContent)==="ST-2026"),t("券码：复制按钮存在",!!T.q('[data-testid="coupon-copy-btn"]')),ee.flushSync(()=>T.root.unmount()),T.host.remove();const b=O([Dt({startAt:Date.now()+200,tickMs:50,autoStart:!0})]),$=await de(m.jsx(b,{coupon:ce})),M=()=>$.q('[data-testid="coupon-root"]');await pn(()=>!!$.q('[data-testid="coupon-countdown-value"]'),150),t("倒计时：渲染「距开抢」",(((p=$.q('[data-testid="coupon-countdown-value"]'))==null?void 0:p.textContent)??"").includes("距开抢")),await pn(()=>{var F;return((F=M())==null?void 0:F.dataset.phase)==="available"},150),t("倒计时：到点 autoStart 进入 available",((h=M())==null?void 0:h.dataset.phase)==="available"),await pn(()=>!$.q('[data-testid="coupon-countdown-value"]'),150),t("倒计时：到点后倒计时消失",!$.q('[data-testid="coupon-countdown-value"]')),ee.flushSync(()=>$.root.unmount()),$.host.remove()}return{total:n,passed:n-e.length,failed:e}}async function Y1(){document.title="SELFTEST RUNNING";try{const e=await K1();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Kl.createRoot(document.getElementById("root")).render(m.jsx(z1,{}));typeof location<"u"&&location.search.includes("selftest=1")&&Y1();export{$x as C,Qi as D,Ms as G,zs as P,Gr as S,nS as U,J1 as a,G1 as b,O as c,Z1 as d,eS as e,As as f,m as j,S as r};
