var wp=Object.defineProperty;var kp=(e,n,t)=>n in e?wp(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Va=(e,n,t)=>kp(e,typeof n!="symbol"?n+"":n,t);function _p(e,n){for(var t=0;t<n.length;t++){const o=n[t];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const l=Object.getOwnPropertyDescriptor(o,r);l&&Object.defineProperty(e,r,l.get?l:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();function Ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Es={exports:{}},Ur={},Ts={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),Tp=Symbol.for("react.portal"),jp=Symbol.for("react.fragment"),Rp=Symbol.for("react.strict_mode"),$p=Symbol.for("react.profiler"),Dp=Symbol.for("react.provider"),Np=Symbol.for("react.context"),Mp=Symbol.for("react.forward_ref"),Op=Symbol.for("react.suspense"),Lp=Symbol.for("react.memo"),bp=Symbol.for("react.lazy"),Ba=Symbol.iterator;function zp(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rs=Object.assign,$s={};function Et(e,n,t){this.props=e,this.context=n,this.refs=$s,this.updater=t||js}Et.prototype.isReactComponent={};Et.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Et.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ds(){}Ds.prototype=Et.prototype;function Fi(e,n,t){this.props=e,this.context=n,this.refs=$s,this.updater=t||js}var Ai=Fi.prototype=new Ds;Ai.constructor=Fi;Rs(Ai,Et.prototype);Ai.isPureReactComponent=!0;var Qa=Array.isArray,Ns=Object.prototype.hasOwnProperty,Ii={current:null},Ms={key:!0,ref:!0,__self:!0,__source:!0};function Os(e,n,t){var o,r={},l=null,i=null;if(n!=null)for(o in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)Ns.call(n,o)&&!Ms.hasOwnProperty(o)&&(r[o]=n[o]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)r[o]===void 0&&(r[o]=a[o]);return{$$typeof:wo,type:e,key:l,ref:i,props:r,_owner:Ii.current}}function Fp(e,n){return{$$typeof:wo,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ui(e){return typeof e=="object"&&e!==null&&e.$$typeof===wo}function Ap(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var qa=/\/+/g;function al(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ap(""+e.key):n.toString(36)}function tr(e,n,t,o,r){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case wo:case Tp:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+al(i,0):o,Qa(r)?(t="",e!=null&&(t=e.replace(qa,"$&/")+"/"),tr(r,n,t,"",function(s){return s})):r!=null&&(Ui(r)&&(r=Fp(r,t+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(qa,"$&/")+"/")+e)),n.push(r)),1;if(i=0,o=o===""?".":o+":",Qa(e))for(var a=0;a<e.length;a++){l=e[a];var u=o+al(l,a);i+=tr(l,n,t,u,r)}else if(u=zp(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=o+al(l,a++),i+=tr(l,n,t,u,r);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Lo(e,n,t){if(e==null)return e;var o=[],r=0;return tr(e,o,"","",function(l){return n.call(t,l,r++)}),o}function Ip(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},or={transition:null},Up={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:or,ReactCurrentOwner:Ii};function Ls(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Lo,forEach:function(e,n,t){Lo(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Lo(e,function(){n++}),n},toArray:function(e){return Lo(e,function(n){return n})||[]},only:function(e){if(!Ui(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Et;O.Fragment=jp;O.Profiler=$p;O.PureComponent=Fi;O.StrictMode=Rp;O.Suspense=Op;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Up;O.act=Ls;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Rs({},e.props),r=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=Ii.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Ns.call(n,u)&&!Ms.hasOwnProperty(u)&&(o[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)o.children=t;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];o.children=a}return{$$typeof:wo,type:e.type,key:r,ref:l,props:o,_owner:i}};O.createContext=function(e){return e={$$typeof:Np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dp,_context:e},e.Consumer=e};O.createElement=Os;O.createFactory=function(e){var n=Os.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Mp,render:e}};O.isValidElement=Ui;O.lazy=function(e){return{$$typeof:bp,_payload:{_status:-1,_result:e},_init:Ip}};O.memo=function(e,n){return{$$typeof:Lp,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=or.transition;or.transition={};try{e()}finally{or.transition=n}};O.unstable_act=Ls;O.useCallback=function(e,n){return ye.current.useCallback(e,n)};O.useContext=function(e){return ye.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};O.useEffect=function(e,n){return ye.current.useEffect(e,n)};O.useId=function(){return ye.current.useId()};O.useImperativeHandle=function(e,n,t){return ye.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return ye.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return ye.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return ye.current.useMemo(e,n)};O.useReducer=function(e,n,t){return ye.current.useReducer(e,n,t)};O.useRef=function(e){return ye.current.useRef(e)};O.useState=function(e){return ye.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return ye.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return ye.current.useTransition()};O.version="18.3.1";Ts.exports=O;var P=Ts.exports;const ko=Ep(P),Wp=_p({__proto__:null,default:ko},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp=P,Vp=Symbol.for("react.element"),Bp=Symbol.for("react.fragment"),Qp=Object.prototype.hasOwnProperty,qp=Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yp={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,n,t){var o,r={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(o in n)Qp.call(n,o)&&!Yp.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)r[o]===void 0&&(r[o]=n[o]);return{$$typeof:Vp,type:e,key:l,ref:i,props:r,_owner:qp.current}}Ur.Fragment=Bp;Ur.jsx=bs;Ur.jsxs=bs;Es.exports=Ur;var m=Es.exports,Fl={},zs={exports:{}},je={},Fs={exports:{}},As={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,N){var M=R.length;R.push(N);e:for(;0<M;){var Y=M-1>>>1,oe=R[Y];if(0<r(oe,N))R[Y]=N,R[M]=oe,M=Y;else break e}}function t(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var N=R[0],M=R.pop();if(M!==N){R[0]=M;e:for(var Y=0,oe=R.length,Mo=oe>>>1;Y<Mo;){var Ln=2*(Y+1)-1,il=R[Ln],bn=Ln+1,Oo=R[bn];if(0>r(il,M))bn<oe&&0>r(Oo,il)?(R[Y]=Oo,R[bn]=M,Y=bn):(R[Y]=il,R[Ln]=M,Y=Ln);else if(bn<oe&&0>r(Oo,M))R[Y]=Oo,R[bn]=M,Y=bn;else break e}}return N}function r(R,N){var M=R.sortIndex-N.sortIndex;return M!==0?M:R.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],s=[],d=1,c=null,f=3,v=!1,x=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var N=t(s);N!==null;){if(N.callback===null)o(s);else if(N.startTime<=R)o(s),N.sortIndex=N.expirationTime,n(u,N);else break;N=t(s)}}function y(R){if(S=!1,g(R),!x)if(t(u)!==null)x=!0,Xe(C);else{var N=t(s);N!==null&&ll(y,N.startTime-R)}}function C(R,N){x=!1,S&&(S=!1,h(T),T=-1),v=!0;var M=f;try{for(g(N),c=t(u);c!==null&&(!(c.expirationTime>N)||R&&!G());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,f=c.priorityLevel;var oe=Y(c.expirationTime<=N);N=e.unstable_now(),typeof oe=="function"?c.callback=oe:c===t(u)&&o(u),g(N)}else o(u);c=t(u)}if(c!==null)var Mo=!0;else{var Ln=t(s);Ln!==null&&ll(y,Ln.startTime-N),Mo=!1}return Mo}finally{c=null,f=M,v=!1}}var w=!1,E=null,T=-1,b=5,$=-1;function G(){return!(e.unstable_now()-$<b)}function F(){if(E!==null){var R=e.unstable_now();$=R;var N=!0;try{N=E(!0,R)}finally{N?q():(w=!1,E=null)}}else w=!1}var q;if(typeof p=="function")q=function(){p(F)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Nt=Ve.port2;Ve.port1.onmessage=F,q=function(){Nt.postMessage(null)}}else q=function(){_(F,0)};function Xe(R){E=R,w||(w=!0,q())}function ll(R,N){T=_(function(){R(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,Xe(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var M=f;f=N;try{return R()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,N){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var M=f;f=R;try{return N()}finally{f=M}},e.unstable_scheduleCallback=function(R,N,M){var Y=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Y+M:Y):M=Y,R){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=M+oe,R={id:d++,callback:N,priorityLevel:R,startTime:M,expirationTime:oe,sortIndex:-1},M>Y?(R.sortIndex=M,n(s,R),t(u)===null&&R===t(s)&&(S?(h(T),T=-1):S=!0,ll(y,M-Y))):(R.sortIndex=oe,n(u,R),x||v||(x=!0,Xe(C))),R},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(R){var N=f;return function(){var M=f;f=N;try{return R.apply(this,arguments)}finally{f=M}}}})(As);Fs.exports=As;var Kp=Fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp=P,Te=Kp;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Is=new Set,oo={};function Kn(e,n){Ct(e,n),Ct(e+"Capture",n)}function Ct(e,n){for(oo[e]=n,e=0;e<n.length;e++)Is.add(n[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=Object.prototype.hasOwnProperty,Gp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ya={},Ka={};function Jp(e){return Al.call(Ka,e)?!0:Al.call(Ya,e)?!1:Gp.test(e)?Ka[e]=!0:(Ya[e]=!0,!1)}function Zp(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ef(e,n,t,o){if(n===null||typeof n>"u"||Zp(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,o,r,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ue[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Hi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Wi,Hi);ue[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Wi,Hi);ue[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Wi,Hi);ue[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vi(e,n,t,o){var r=ue.hasOwnProperty(n)?ue[n]:null;(r!==null?r.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ef(n,t,r,o)&&(t=null),o||r===null?Jp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,o=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var an=Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),nt=Symbol.for("react.portal"),tt=Symbol.for("react.fragment"),Bi=Symbol.for("react.strict_mode"),Il=Symbol.for("react.profiler"),Us=Symbol.for("react.provider"),Ws=Symbol.for("react.context"),Qi=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),Wl=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),Hs=Symbol.for("react.offscreen"),Xa=Symbol.iterator;function Mt(e){return e===null||typeof e!="object"?null:(e=Xa&&e[Xa]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,ul;function Wt(e){if(ul===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ul=n&&n[1]||""}return`
`+ul+e}var sl=!1;function cl(e,n){if(!e||sl)return"";sl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var o=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){o=s}e.call(n.prototype)}else{try{throw Error()}catch(s){o=s}e()}}catch(s){if(s&&o&&typeof s.stack=="string"){for(var r=s.stack.split(`
`),l=o.stack.split(`
`),i=r.length-1,a=l.length-1;1<=i&&0<=a&&r[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(r[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||r[i]!==l[a]){var u=`
`+r[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{sl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Wt(e):""}function nf(e){switch(e.tag){case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 2:case 15:return e=cl(e.type,!1),e;case 11:return e=cl(e.type.render,!1),e;case 1:return e=cl(e.type,!0),e;default:return""}}function Hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tt:return"Fragment";case nt:return"Portal";case Il:return"Profiler";case Bi:return"StrictMode";case Ul:return"Suspense";case Wl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ws:return(e.displayName||"Context")+".Consumer";case Us:return(e._context.displayName||"Context")+".Provider";case Qi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return n=e.displayName||null,n!==null?n:Hl(e.type)||"Memo";case pn:n=e._payload,e=e._init;try{return Hl(e(n))}catch{}}return null}function tf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hl(n);case 8:return n===Bi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function of(e){var n=Vs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function zo(e){e._valueTracker||(e._valueTracker=of(e))}function Bs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=Vs(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vl(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ga(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=jn(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Qs(e,n){n=n.checked,n!=null&&Vi(e,"checked",n,!1)}function Bl(e,n){Qs(e,n);var t=jn(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ql(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ql(e,n.type,jn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ja(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ql(e,n,t){(n!=="number"||mr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ht=Array.isArray;function ft(e,n,t,o){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&o&&(e[t].defaultSelected=!0)}else{for(t=""+jn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function ql(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Za(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Ht(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:jn(t)}}function qs(e,n){var t=jn(n.value),o=jn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function eu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ys(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ys(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fo,Ks=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Fo=Fo||document.createElement("div"),Fo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ro(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Yt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rf=["Webkit","ms","Moz","O"];Object.keys(Yt).forEach(function(e){rf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Yt[n]=Yt[e]})});function Xs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Yt.hasOwnProperty(e)&&Yt[e]?(""+n).trim():n+"px"}function Gs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,r=Xs(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,r):e[t]=r}}var lf=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kl(e,n){if(n){if(lf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Xl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gl=null;function Yi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,mt=null,gt=null;function nu(e){if(e=To(e)){if(typeof Jl!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Qr(n),Jl(e.stateNode,e.type,n))}}function Js(e){mt?gt?gt.push(e):gt=[e]:mt=e}function Zs(){if(mt){var e=mt,n=gt;if(gt=mt=null,nu(e),n)for(e=0;e<n.length;e++)nu(n[e])}}function ec(e,n){return e(n)}function nc(){}var dl=!1;function tc(e,n,t){if(dl)return e(n,t);dl=!0;try{return ec(e,n,t)}finally{dl=!1,(mt!==null||gt!==null)&&(nc(),Zs())}}function lo(e,n){var t=e.stateNode;if(t===null)return null;var o=Qr(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Zl=!1;if(tn)try{var Ot={};Object.defineProperty(Ot,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",Ot,Ot),window.removeEventListener("test",Ot,Ot)}catch{Zl=!1}function af(e,n,t,o,r,l,i,a,u){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(d){this.onError(d)}}var Kt=!1,gr=null,hr=!1,ei=null,uf={onError:function(e){Kt=!0,gr=e}};function sf(e,n,t,o,r,l,i,a,u){Kt=!1,gr=null,af.apply(uf,arguments)}function cf(e,n,t,o,r,l,i,a,u){if(sf.apply(this,arguments),Kt){if(Kt){var s=gr;Kt=!1,gr=null}else throw Error(k(198));hr||(hr=!0,ei=s)}}function Xn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function oc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function tu(e){if(Xn(e)!==e)throw Error(k(188))}function df(e){var n=e.alternate;if(!n){if(n=Xn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,o=n;;){var r=t.return;if(r===null)break;var l=r.alternate;if(l===null){if(o=r.return,o!==null){t=o;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===t)return tu(r),e;if(l===o)return tu(r),n;l=l.sibling}throw Error(k(188))}if(t.return!==o.return)t=r,o=l;else{for(var i=!1,a=r.child;a;){if(a===t){i=!0,t=r,o=l;break}if(a===o){i=!0,o=r,t=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===t){i=!0,t=l,o=r;break}if(a===o){i=!0,o=l,t=r;break}a=a.sibling}if(!i)throw Error(k(189))}}if(t.alternate!==o)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function rc(e){return e=df(e),e!==null?lc(e):null}function lc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=lc(e);if(n!==null)return n;e=e.sibling}return null}var ic=Te.unstable_scheduleCallback,ou=Te.unstable_cancelCallback,pf=Te.unstable_shouldYield,ff=Te.unstable_requestPaint,K=Te.unstable_now,mf=Te.unstable_getCurrentPriorityLevel,Ki=Te.unstable_ImmediatePriority,ac=Te.unstable_UserBlockingPriority,yr=Te.unstable_NormalPriority,gf=Te.unstable_LowPriority,uc=Te.unstable_IdlePriority,Wr=null,Ye=null;function hf(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Wr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:Cf,yf=Math.log,vf=Math.LN2;function Cf(e){return e>>>=0,e===0?32:31-(yf(e)/vf|0)|0}var Ao=64,Io=4194304;function Vt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vr(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,r=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var a=i&~r;a!==0?o=Vt(a):(l&=i,l!==0&&(o=Vt(l)))}else i=t&~r,i!==0?o=Vt(i):l!==0&&(o=Vt(l));if(o===0)return 0;if(n!==0&&n!==o&&!(n&r)&&(r=o&-o,l=n&-n,r>=l||r===16&&(l&4194240)!==0))return n;if(o&4&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-Ie(n),r=1<<t,o|=e[t],n&=~r;return o}function xf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sf(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ie(l),a=1<<i,u=r[i];u===-1?(!(a&t)||a&o)&&(r[i]=xf(a,n)):u<=n&&(e.expiredLanes|=a),l&=~a}}function ni(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sc(){var e=Ao;return Ao<<=1,!(Ao&4194240)&&(Ao=64),e}function pl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function _o(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ie(n),e[n]=t}function Pf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Ie(t),l=1<<r;n[r]=0,o[r]=-1,e[r]=-1,t&=~l}}function Xi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-Ie(t),r=1<<o;r&n|e[o]&n&&(e[o]|=n),t&=~r}}var z=0;function cc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dc,Gi,pc,fc,mc,ti=!1,Uo=[],Cn=null,xn=null,Sn=null,io=new Map,ao=new Map,mn=[],wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ru(e,n){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(n.pointerId)}}function Lt(e,n,t,o,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:l,targetContainers:[r]},n!==null&&(n=To(n),n!==null&&Gi(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function kf(e,n,t,o,r){switch(n){case"focusin":return Cn=Lt(Cn,e,n,t,o,r),!0;case"dragenter":return xn=Lt(xn,e,n,t,o,r),!0;case"mouseover":return Sn=Lt(Sn,e,n,t,o,r),!0;case"pointerover":var l=r.pointerId;return io.set(l,Lt(io.get(l)||null,e,n,t,o,r)),!0;case"gotpointercapture":return l=r.pointerId,ao.set(l,Lt(ao.get(l)||null,e,n,t,o,r)),!0}return!1}function gc(e){var n=An(e.target);if(n!==null){var t=Xn(n);if(t!==null){if(n=t.tag,n===13){if(n=oc(t),n!==null){e.blockedOn=n,mc(e.priority,function(){pc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=oi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Gl=o,t.target.dispatchEvent(o),Gl=null}else return n=To(t),n!==null&&Gi(n),e.blockedOn=t,!1;n.shift()}return!0}function lu(e,n,t){rr(e)&&t.delete(n)}function _f(){ti=!1,Cn!==null&&rr(Cn)&&(Cn=null),xn!==null&&rr(xn)&&(xn=null),Sn!==null&&rr(Sn)&&(Sn=null),io.forEach(lu),ao.forEach(lu)}function bt(e,n){e.blockedOn===n&&(e.blockedOn=null,ti||(ti=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,_f)))}function uo(e){function n(r){return bt(r,e)}if(0<Uo.length){bt(Uo[0],e);for(var t=1;t<Uo.length;t++){var o=Uo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(Cn!==null&&bt(Cn,e),xn!==null&&bt(xn,e),Sn!==null&&bt(Sn,e),io.forEach(n),ao.forEach(n),t=0;t<mn.length;t++)o=mn[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<mn.length&&(t=mn[0],t.blockedOn===null);)gc(t),t.blockedOn===null&&mn.shift()}var ht=an.ReactCurrentBatchConfig,Cr=!0;function Ef(e,n,t,o){var r=z,l=ht.transition;ht.transition=null;try{z=1,Ji(e,n,t,o)}finally{z=r,ht.transition=l}}function Tf(e,n,t,o){var r=z,l=ht.transition;ht.transition=null;try{z=4,Ji(e,n,t,o)}finally{z=r,ht.transition=l}}function Ji(e,n,t,o){if(Cr){var r=oi(e,n,t,o);if(r===null)Pl(e,n,o,xr,t),ru(e,o);else if(kf(r,e,n,t,o))o.stopPropagation();else if(ru(e,o),n&4&&-1<wf.indexOf(e)){for(;r!==null;){var l=To(r);if(l!==null&&dc(l),l=oi(e,n,t,o),l===null&&Pl(e,n,o,xr,t),l===r)break;r=l}r!==null&&o.stopPropagation()}else Pl(e,n,o,null,t)}}var xr=null;function oi(e,n,t,o){if(xr=null,e=Yi(o),e=An(e),e!==null)if(n=Xn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=oc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return xr=e,null}function hc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mf()){case Ki:return 1;case ac:return 4;case yr:case gf:return 16;case uc:return 536870912;default:return 16}default:return 16}}var hn=null,Zi=null,lr=null;function yc(){if(lr)return lr;var e,n=Zi,t=n.length,o,r="value"in hn?hn.value:hn.textContent,l=r.length;for(e=0;e<t&&n[e]===r[e];e++);var i=t-e;for(o=1;o<=i&&n[t-o]===r[l-o];o++);return lr=r.slice(e,1<o?1-o:void 0)}function ir(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function iu(){return!1}function Re(e){function n(t,o,r,l,i){this._reactName=t,this._targetInst=r,this.type=o,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Wo:iu,this.isPropagationStopped=iu,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=Re(Tt),Eo=B({},Tt,{view:0,detail:0}),jf=Re(Eo),fl,ml,zt,Hr=B({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zt&&(zt&&e.type==="mousemove"?(fl=e.screenX-zt.screenX,ml=e.screenY-zt.screenY):ml=fl=0,zt=e),fl)},movementY:function(e){return"movementY"in e?e.movementY:ml}}),au=Re(Hr),Rf=B({},Hr,{dataTransfer:0}),$f=Re(Rf),Df=B({},Eo,{relatedTarget:0}),gl=Re(Df),Nf=B({},Tt,{animationName:0,elapsedTime:0,pseudoElement:0}),Mf=Re(Nf),Of=B({},Tt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lf=Re(Of),bf=B({},Tt,{data:0}),uu=Re(bf),zf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Af={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function If(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Af[e])?!!n[e]:!1}function na(){return If}var Uf=B({},Eo,{key:function(e){if(e.key){var n=zf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:na,charCode:function(e){return e.type==="keypress"?ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wf=Re(Uf),Hf=B({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=Re(Hf),Vf=B({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:na}),Bf=Re(Vf),Qf=B({},Tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),qf=Re(Qf),Yf=B({},Hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kf=Re(Yf),Xf=[9,13,27,32],ta=tn&&"CompositionEvent"in window,Xt=null;tn&&"documentMode"in document&&(Xt=document.documentMode);var Gf=tn&&"TextEvent"in window&&!Xt,vc=tn&&(!ta||Xt&&8<Xt&&11>=Xt),cu=" ",du=!1;function Cc(e,n){switch(e){case"keyup":return Xf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ot=!1;function Jf(e,n){switch(e){case"compositionend":return xc(n);case"keypress":return n.which!==32?null:(du=!0,cu);case"textInput":return e=n.data,e===cu&&du?null:e;default:return null}}function Zf(e,n){if(ot)return e==="compositionend"||!ta&&Cc(e,n)?(e=yc(),lr=Zi=hn=null,ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vc&&n.locale!=="ko"?null:n.data;default:return null}}var em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!em[e.type]:n==="textarea"}function Sc(e,n,t,o){Js(o),n=Sr(n,"onChange"),0<n.length&&(t=new ea("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var Gt=null,so=null;function nm(e){Nc(e,0)}function Vr(e){var n=it(e);if(Bs(n))return e}function tm(e,n){if(e==="change")return n}var Pc=!1;if(tn){var hl;if(tn){var yl="oninput"in document;if(!yl){var fu=document.createElement("div");fu.setAttribute("oninput","return;"),yl=typeof fu.oninput=="function"}hl=yl}else hl=!1;Pc=hl&&(!document.documentMode||9<document.documentMode)}function mu(){Gt&&(Gt.detachEvent("onpropertychange",wc),so=Gt=null)}function wc(e){if(e.propertyName==="value"&&Vr(so)){var n=[];Sc(n,so,e,Yi(e)),tc(nm,n)}}function om(e,n,t){e==="focusin"?(mu(),Gt=n,so=t,Gt.attachEvent("onpropertychange",wc)):e==="focusout"&&mu()}function rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vr(so)}function lm(e,n){if(e==="click")return Vr(n)}function im(e,n){if(e==="input"||e==="change")return Vr(n)}function am(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var We=typeof Object.is=="function"?Object.is:am;function co(e,n){if(We(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var r=t[o];if(!Al.call(n,r)||!We(e[r],n[r]))return!1}return!0}function gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hu(e,n){var t=gu(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=gu(t)}}function kc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _c(){for(var e=window,n=mr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=mr(e.document)}return n}function oa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function um(e){var n=_c(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&kc(t.ownerDocument.documentElement,t)){if(o!==null&&oa(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,l=Math.min(o.start,r);o=o.end===void 0?l:Math.min(o.end,r),!e.extend&&l>o&&(r=o,o=l,l=r),r=hu(t,l);var i=hu(t,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),l>o?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sm=tn&&"documentMode"in document&&11>=document.documentMode,rt=null,ri=null,Jt=null,li=!1;function yu(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;li||rt==null||rt!==mr(o)||(o=rt,"selectionStart"in o&&oa(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Jt&&co(Jt,o)||(Jt=o,o=Sr(ri,"onSelect"),0<o.length&&(n=new ea("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=rt)))}function Ho(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var lt={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},vl={},Ec={};tn&&(Ec=document.createElement("div").style,"AnimationEvent"in window||(delete lt.animationend.animation,delete lt.animationiteration.animation,delete lt.animationstart.animation),"TransitionEvent"in window||delete lt.transitionend.transition);function Br(e){if(vl[e])return vl[e];if(!lt[e])return e;var n=lt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ec)return vl[e]=n[t];return e}var Tc=Br("animationend"),jc=Br("animationiteration"),Rc=Br("animationstart"),$c=Br("transitionend"),Dc=new Map,vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,n){Dc.set(e,n),Kn(n,[e])}for(var Cl=0;Cl<vu.length;Cl++){var xl=vu[Cl],cm=xl.toLowerCase(),dm=xl[0].toUpperCase()+xl.slice(1);$n(cm,"on"+dm)}$n(Tc,"onAnimationEnd");$n(jc,"onAnimationIteration");$n(Rc,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n($c,"onTransitionEnd");Ct("onMouseEnter",["mouseout","mouseover"]);Ct("onMouseLeave",["mouseout","mouseover"]);Ct("onPointerEnter",["pointerout","pointerover"]);Ct("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bt));function Cu(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,cf(o,n,void 0,e),e.currentTarget=null}function Nc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],r=o.event;o=o.listeners;e:{var l=void 0;if(n)for(var i=o.length-1;0<=i;i--){var a=o[i],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==l&&r.isPropagationStopped())break e;Cu(r,a,s),l=u}else for(i=0;i<o.length;i++){if(a=o[i],u=a.instance,s=a.currentTarget,a=a.listener,u!==l&&r.isPropagationStopped())break e;Cu(r,a,s),l=u}}}if(hr)throw e=ei,hr=!1,ei=null,e}function I(e,n){var t=n[ci];t===void 0&&(t=n[ci]=new Set);var o=e+"__bubble";t.has(o)||(Mc(n,e,2,!1),t.add(o))}function Sl(e,n,t){var o=0;n&&(o|=4),Mc(t,e,o,n)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function po(e){if(!e[Vo]){e[Vo]=!0,Is.forEach(function(t){t!=="selectionchange"&&(pm.has(t)||Sl(t,!1,e),Sl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vo]||(n[Vo]=!0,Sl("selectionchange",!1,n))}}function Mc(e,n,t,o){switch(hc(n)){case 1:var r=Ef;break;case 4:r=Tf;break;default:r=Ji}t=r.bind(null,n,t,e),r=void 0,!Zl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Pl(e,n,t,o,r){var l=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var a=o.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;i=i.return}for(;a!==null;){if(i=An(a),i===null)return;if(u=i.tag,u===5||u===6){o=l=i;continue e}a=a.parentNode}}o=o.return}tc(function(){var s=l,d=Yi(t),c=[];e:{var f=Dc.get(e);if(f!==void 0){var v=ea,x=e;switch(e){case"keypress":if(ir(t)===0)break e;case"keydown":case"keyup":v=Wf;break;case"focusin":x="focus",v=gl;break;case"focusout":x="blur",v=gl;break;case"beforeblur":case"afterblur":v=gl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=$f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Bf;break;case Tc:case jc:case Rc:v=Mf;break;case $c:v=qf;break;case"scroll":v=jf;break;case"wheel":v=Kf;break;case"copy":case"cut":case"paste":v=Lf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=su}var S=(n&4)!==0,_=!S&&e==="scroll",h=S?f!==null?f+"Capture":null:f;S=[];for(var p=s,g;p!==null;){g=p;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,h!==null&&(y=lo(p,h),y!=null&&S.push(fo(p,y,g)))),_)break;p=p.return}0<S.length&&(f=new v(f,x,null,t,d),c.push({event:f,listeners:S}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&t!==Gl&&(x=t.relatedTarget||t.fromElement)&&(An(x)||x[on]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=t.relatedTarget||t.toElement,v=s,x=x?An(x):null,x!==null&&(_=Xn(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=s),v!==x)){if(S=au,y="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=su,y="onPointerLeave",h="onPointerEnter",p="pointer"),_=v==null?f:it(v),g=x==null?f:it(x),f=new S(y,p+"leave",v,t,d),f.target=_,f.relatedTarget=g,y=null,An(d)===s&&(S=new S(h,p+"enter",x,t,d),S.target=g,S.relatedTarget=_,y=S),_=y,v&&x)n:{for(S=v,h=x,p=0,g=S;g;g=et(g))p++;for(g=0,y=h;y;y=et(y))g++;for(;0<p-g;)S=et(S),p--;for(;0<g-p;)h=et(h),g--;for(;p--;){if(S===h||h!==null&&S===h.alternate)break n;S=et(S),h=et(h)}S=null}else S=null;v!==null&&xu(c,f,v,S,!1),x!==null&&_!==null&&xu(c,_,x,S,!0)}}e:{if(f=s?it(s):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var C=tm;else if(pu(f))if(Pc)C=im;else{C=rm;var w=om}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=lm);if(C&&(C=C(e,s))){Sc(c,C,t,d);break e}w&&w(e,f,s),e==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Ql(f,"number",f.value)}switch(w=s?it(s):window,e){case"focusin":(pu(w)||w.contentEditable==="true")&&(rt=w,ri=s,Jt=null);break;case"focusout":Jt=ri=rt=null;break;case"mousedown":li=!0;break;case"contextmenu":case"mouseup":case"dragend":li=!1,yu(c,t,d);break;case"selectionchange":if(sm)break;case"keydown":case"keyup":yu(c,t,d)}var E;if(ta)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ot?Cc(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(vc&&t.locale!=="ko"&&(ot||T!=="onCompositionStart"?T==="onCompositionEnd"&&ot&&(E=yc()):(hn=d,Zi="value"in hn?hn.value:hn.textContent,ot=!0)),w=Sr(s,T),0<w.length&&(T=new uu(T,e,null,t,d),c.push({event:T,listeners:w}),E?T.data=E:(E=xc(t),E!==null&&(T.data=E)))),(E=Gf?Jf(e,t):Zf(e,t))&&(s=Sr(s,"onBeforeInput"),0<s.length&&(d=new uu("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:s}),d.data=E))}Nc(c,n)})}function fo(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Sr(e,n){for(var t=n+"Capture",o=[];e!==null;){var r=e,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=lo(e,t),l!=null&&o.unshift(fo(e,l,r)),l=lo(e,n),l!=null&&o.push(fo(e,l,r))),e=e.return}return o}function et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xu(e,n,t,o,r){for(var l=n._reactName,i=[];t!==null&&t!==o;){var a=t,u=a.alternate,s=a.stateNode;if(u!==null&&u===o)break;a.tag===5&&s!==null&&(a=s,r?(u=lo(t,l),u!=null&&i.unshift(fo(t,u,a))):r||(u=lo(t,l),u!=null&&i.push(fo(t,u,a)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var fm=/\r\n?/g,mm=/\u0000|\uFFFD/g;function Su(e){return(typeof e=="string"?e:""+e).replace(fm,`
`).replace(mm,"")}function Bo(e,n,t){if(n=Su(n),Su(e)!==n&&t)throw Error(k(425))}function Pr(){}var ii=null,ai=null;function ui(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var si=typeof setTimeout=="function"?setTimeout:void 0,gm=typeof clearTimeout=="function"?clearTimeout:void 0,Pu=typeof Promise=="function"?Promise:void 0,hm=typeof queueMicrotask=="function"?queueMicrotask:typeof Pu<"u"?function(e){return Pu.resolve(null).then(e).catch(ym)}:si;function ym(e){setTimeout(function(){throw e})}function wl(e,n){var t=n,o=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(o===0){e.removeChild(r),uo(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=r}while(t);uo(n)}function Pn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function wu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var jt=Math.random().toString(36).slice(2),qe="__reactFiber$"+jt,mo="__reactProps$"+jt,on="__reactContainer$"+jt,ci="__reactEvents$"+jt,vm="__reactListeners$"+jt,Cm="__reactHandles$"+jt;function An(e){var n=e[qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[on]||t[qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=wu(e);e!==null;){if(t=e[qe])return t;e=wu(e)}return n}e=t,t=e.parentNode}return null}function To(e){return e=e[qe]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function it(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Qr(e){return e[mo]||null}var di=[],at=-1;function Dn(e){return{current:e}}function U(e){0>at||(e.current=di[at],di[at]=null,at--)}function A(e,n){at++,di[at]=e.current,e.current=n}var Rn={},me=Dn(Rn),Se=Dn(!1),Vn=Rn;function xt(e,n){var t=e.type.contextTypes;if(!t)return Rn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in t)r[l]=n[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Pe(e){return e=e.childContextTypes,e!=null}function wr(){U(Se),U(me)}function ku(e,n,t){if(me.current!==Rn)throw Error(k(168));A(me,n),A(Se,t)}function Oc(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var r in o)if(!(r in n))throw Error(k(108,tf(e)||"Unknown",r));return B({},t,o)}function kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Vn=me.current,A(me,e),A(Se,Se.current),!0}function _u(e,n,t){var o=e.stateNode;if(!o)throw Error(k(169));t?(e=Oc(e,n,Vn),o.__reactInternalMemoizedMergedChildContext=e,U(Se),U(me),A(me,e)):U(Se),A(Se,t)}var Je=null,qr=!1,kl=!1;function Lc(e){Je===null?Je=[e]:Je.push(e)}function xm(e){qr=!0,Lc(e)}function Nn(){if(!kl&&Je!==null){kl=!0;var e=0,n=z;try{var t=Je;for(z=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Je=null,qr=!1}catch(r){throw Je!==null&&(Je=Je.slice(e+1)),ic(Ki,Nn),r}finally{z=n,kl=!1}}return null}var ut=[],st=0,_r=null,Er=0,$e=[],De=0,Bn=null,Ze=1,en="";function zn(e,n){ut[st++]=Er,ut[st++]=_r,_r=e,Er=n}function bc(e,n,t){$e[De++]=Ze,$e[De++]=en,$e[De++]=Bn,Bn=e;var o=Ze;e=en;var r=32-Ie(o)-1;o&=~(1<<r),t+=1;var l=32-Ie(n)+r;if(30<l){var i=r-r%5;l=(o&(1<<i)-1).toString(32),o>>=i,r-=i,Ze=1<<32-Ie(n)+r|t<<r|o,en=l+e}else Ze=1<<l|t<<r|o,en=e}function ra(e){e.return!==null&&(zn(e,1),bc(e,1,0))}function la(e){for(;e===_r;)_r=ut[--st],ut[st]=null,Er=ut[--st],ut[st]=null;for(;e===Bn;)Bn=$e[--De],$e[De]=null,en=$e[--De],$e[De]=null,Ze=$e[--De],$e[De]=null}var Ee=null,_e=null,W=!1,Ae=null;function zc(e,n){var t=Ne(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Eu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ee=e,_e=Pn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ee=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Bn!==null?{id:Ze,overflow:en}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ne(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ee=e,_e=null,!0):!1;default:return!1}}function pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fi(e){if(W){var n=_e;if(n){var t=n;if(!Eu(e,n)){if(pi(e))throw Error(k(418));n=Pn(t.nextSibling);var o=Ee;n&&Eu(e,n)?zc(o,t):(e.flags=e.flags&-4097|2,W=!1,Ee=e)}}else{if(pi(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,Ee=e}}}function Tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Qo(e){if(e!==Ee)return!1;if(!W)return Tu(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ui(e.type,e.memoizedProps)),n&&(n=_e)){if(pi(e))throw Fc(),Error(k(418));for(;n;)zc(e,n),n=Pn(n.nextSibling)}if(Tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_e=Pn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=Ee?Pn(e.stateNode.nextSibling):null;return!0}function Fc(){for(var e=_e;e;)e=Pn(e.nextSibling)}function St(){_e=Ee=null,W=!1}function ia(e){Ae===null?Ae=[e]:Ae.push(e)}var Sm=an.ReactCurrentBatchConfig;function Ft(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var o=t.stateNode}if(!o)throw Error(k(147,e));var r=o,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var a=r.refs;i===null?delete a[l]:a[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function qo(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ju(e){var n=e._init;return n(e._payload)}function Ac(e){function n(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function t(h,p){if(!e)return null;for(;p!==null;)n(h,p),p=p.sibling;return null}function o(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function r(h,p){return h=En(h,p),h.index=0,h.sibling=null,h}function l(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,g,y){return p===null||p.tag!==6?(p=Dl(g,h.mode,y),p.return=h,p):(p=r(p,g),p.return=h,p)}function u(h,p,g,y){var C=g.type;return C===tt?d(h,p,g.props.children,y,g.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&ju(C)===p.type)?(y=r(p,g.props),y.ref=Ft(h,p,g),y.return=h,y):(y=fr(g.type,g.key,g.props,null,h.mode,y),y.ref=Ft(h,p,g),y.return=h,y)}function s(h,p,g,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Nl(g,h.mode,y),p.return=h,p):(p=r(p,g.children||[]),p.return=h,p)}function d(h,p,g,y,C){return p===null||p.tag!==7?(p=Hn(g,h.mode,y,C),p.return=h,p):(p=r(p,g),p.return=h,p)}function c(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Dl(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case bo:return g=fr(p.type,p.key,p.props,null,h.mode,g),g.ref=Ft(h,null,p),g.return=h,g;case nt:return p=Nl(p,h.mode,g),p.return=h,p;case pn:var y=p._init;return c(h,y(p._payload),g)}if(Ht(p)||Mt(p))return p=Hn(p,h.mode,g,null),p.return=h,p;qo(h,p)}return null}function f(h,p,g,y){var C=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(h,p,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bo:return g.key===C?u(h,p,g,y):null;case nt:return g.key===C?s(h,p,g,y):null;case pn:return C=g._init,f(h,p,C(g._payload),y)}if(Ht(g)||Mt(g))return C!==null?null:d(h,p,g,y,null);qo(h,g)}return null}function v(h,p,g,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(g)||null,a(p,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case bo:return h=h.get(y.key===null?g:y.key)||null,u(p,h,y,C);case nt:return h=h.get(y.key===null?g:y.key)||null,s(p,h,y,C);case pn:var w=y._init;return v(h,p,g,w(y._payload),C)}if(Ht(y)||Mt(y))return h=h.get(g)||null,d(p,h,y,C,null);qo(p,y)}return null}function x(h,p,g,y){for(var C=null,w=null,E=p,T=p=0,b=null;E!==null&&T<g.length;T++){E.index>T?(b=E,E=null):b=E.sibling;var $=f(h,E,g[T],y);if($===null){E===null&&(E=b);break}e&&E&&$.alternate===null&&n(h,E),p=l($,p,T),w===null?C=$:w.sibling=$,w=$,E=b}if(T===g.length)return t(h,E),W&&zn(h,T),C;if(E===null){for(;T<g.length;T++)E=c(h,g[T],y),E!==null&&(p=l(E,p,T),w===null?C=E:w.sibling=E,w=E);return W&&zn(h,T),C}for(E=o(h,E);T<g.length;T++)b=v(E,h,T,g[T],y),b!==null&&(e&&b.alternate!==null&&E.delete(b.key===null?T:b.key),p=l(b,p,T),w===null?C=b:w.sibling=b,w=b);return e&&E.forEach(function(G){return n(h,G)}),W&&zn(h,T),C}function S(h,p,g,y){var C=Mt(g);if(typeof C!="function")throw Error(k(150));if(g=C.call(g),g==null)throw Error(k(151));for(var w=C=null,E=p,T=p=0,b=null,$=g.next();E!==null&&!$.done;T++,$=g.next()){E.index>T?(b=E,E=null):b=E.sibling;var G=f(h,E,$.value,y);if(G===null){E===null&&(E=b);break}e&&E&&G.alternate===null&&n(h,E),p=l(G,p,T),w===null?C=G:w.sibling=G,w=G,E=b}if($.done)return t(h,E),W&&zn(h,T),C;if(E===null){for(;!$.done;T++,$=g.next())$=c(h,$.value,y),$!==null&&(p=l($,p,T),w===null?C=$:w.sibling=$,w=$);return W&&zn(h,T),C}for(E=o(h,E);!$.done;T++,$=g.next())$=v(E,h,T,$.value,y),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?T:$.key),p=l($,p,T),w===null?C=$:w.sibling=$,w=$);return e&&E.forEach(function(F){return n(h,F)}),W&&zn(h,T),C}function _(h,p,g,y){if(typeof g=="object"&&g!==null&&g.type===tt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bo:e:{for(var C=g.key,w=p;w!==null;){if(w.key===C){if(C=g.type,C===tt){if(w.tag===7){t(h,w.sibling),p=r(w,g.props.children),p.return=h,h=p;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&ju(C)===w.type){t(h,w.sibling),p=r(w,g.props),p.ref=Ft(h,w,g),p.return=h,h=p;break e}t(h,w);break}else n(h,w);w=w.sibling}g.type===tt?(p=Hn(g.props.children,h.mode,y,g.key),p.return=h,h=p):(y=fr(g.type,g.key,g.props,null,h.mode,y),y.ref=Ft(h,p,g),y.return=h,h=y)}return i(h);case nt:e:{for(w=g.key;p!==null;){if(p.key===w)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){t(h,p.sibling),p=r(p,g.children||[]),p.return=h,h=p;break e}else{t(h,p);break}else n(h,p);p=p.sibling}p=Nl(g,h.mode,y),p.return=h,h=p}return i(h);case pn:return w=g._init,_(h,p,w(g._payload),y)}if(Ht(g))return x(h,p,g,y);if(Mt(g))return S(h,p,g,y);qo(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(t(h,p.sibling),p=r(p,g),p.return=h,h=p):(t(h,p),p=Dl(g,h.mode,y),p.return=h,h=p),i(h)):t(h,p)}return _}var Pt=Ac(!0),Ic=Ac(!1),Tr=Dn(null),jr=null,ct=null,aa=null;function ua(){aa=ct=jr=null}function sa(e){var n=Tr.current;U(Tr),e._currentValue=n}function mi(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function yt(e,n){jr=e,aa=ct=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(xe=!0),e.firstContext=null)}function Oe(e){var n=e._currentValue;if(aa!==e)if(e={context:e,memoizedValue:n,next:null},ct===null){if(jr===null)throw Error(k(308));ct=e,jr.dependencies={lanes:0,firstContext:e}}else ct=ct.next=e;return n}var In=null;function ca(e){In===null?In=[e]:In.push(e)}function Uc(e,n,t,o){var r=n.interleaved;return r===null?(t.next=t,ca(n)):(t.next=r.next,r.next=t),n.interleaved=t,rn(e,o)}function rn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var fn=!1;function da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function wn(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,L&2){var r=o.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),o.pending=n,rn(e,t)}return r=o.interleaved,r===null?(n.next=n,ca(o)):(n.next=r.next,r.next=n),o.interleaved=n,rn(e,t)}function ar(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Xi(e,t)}}function Ru(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var r=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?r=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?r=l=n:l=l.next=n}else r=l=n;t={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Rr(e,n,t,o){var r=e.updateQueue;fn=!1;var l=r.firstBaseUpdate,i=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var u=a,s=u.next;u.next=null,i===null?l=s:i.next=s,i=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==i&&(a===null?d.firstBaseUpdate=s:a.next=s,d.lastBaseUpdate=u))}if(l!==null){var c=r.baseState;i=0,d=s=u=null,a=l;do{var f=a.lane,v=a.eventTime;if((o&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,S=a;switch(f=n,v=t,S.tag){case 1:if(x=S.payload,typeof x=="function"){c=x.call(v,c,f);break e}c=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,f=typeof x=="function"?x.call(v,c,f):x,f==null)break e;c=B({},c,f);break e;case 2:fn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(s=d=v,u=c):d=d.next=v,i|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(u=c),r.baseState=u,r.firstBaseUpdate=s,r.lastBaseUpdate=d,n=r.shared.interleaved,n!==null){r=n;do i|=r.lane,r=r.next;while(r!==n)}else l===null&&(r.shared.lanes=0);qn|=i,e.lanes=i,e.memoizedState=c}}function $u(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],r=o.callback;if(r!==null){if(o.callback=null,o=t,typeof r!="function")throw Error(k(191,r));r.call(o)}}}var jo={},Ke=Dn(jo),go=Dn(jo),ho=Dn(jo);function Un(e){if(e===jo)throw Error(k(174));return e}function pa(e,n){switch(A(ho,n),A(go,e),A(Ke,jo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Yl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Yl(n,e)}U(Ke),A(Ke,n)}function wt(){U(Ke),U(go),U(ho)}function Hc(e){Un(ho.current);var n=Un(Ke.current),t=Yl(n,e.type);n!==t&&(A(go,e),A(Ke,t))}function fa(e){go.current===e&&(U(Ke),U(go))}var H=Dn(0);function $r(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _l=[];function ma(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var ur=an.ReactCurrentDispatcher,El=an.ReactCurrentBatchConfig,Qn=0,V=null,ne=null,re=null,Dr=!1,Zt=!1,yo=0,Pm=0;function se(){throw Error(k(321))}function ga(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!We(e[t],n[t]))return!1;return!0}function ha(e,n,t,o,r,l){if(Qn=l,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ur.current=e===null||e.memoizedState===null?Em:Tm,e=t(o,r),Zt){l=0;do{if(Zt=!1,yo=0,25<=l)throw Error(k(301));l+=1,re=ne=null,n.updateQueue=null,ur.current=jm,e=t(o,r)}while(Zt)}if(ur.current=Nr,n=ne!==null&&ne.next!==null,Qn=0,re=ne=V=null,Dr=!1,n)throw Error(k(300));return e}function ya(){var e=yo!==0;return yo=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?V.memoizedState=re=e:re=re.next=e,re}function Le(){if(ne===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var n=re===null?V.memoizedState:re.next;if(n!==null)re=n,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},re===null?V.memoizedState=re=e:re=re.next=e}return re}function vo(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=Le(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var o=ne,r=o.baseQueue,l=t.pending;if(l!==null){if(r!==null){var i=r.next;r.next=l.next,l.next=i}o.baseQueue=r=l,t.pending=null}if(r!==null){l=r.next,o=o.baseState;var a=i=null,u=null,s=l;do{var d=s.lane;if((Qn&d)===d)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),o=s.hasEagerState?s.eagerState:e(o,s.action);else{var c={lane:d,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=c,i=o):u=u.next=c,V.lanes|=d,qn|=d}s=s.next}while(s!==null&&s!==l);u===null?i=o:u.next=a,We(o,n.memoizedState)||(xe=!0),n.memoizedState=o,n.baseState=i,n.baseQueue=u,t.lastRenderedState=o}if(e=t.interleaved,e!==null){r=e;do l=r.lane,V.lanes|=l,qn|=l,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function jl(e){var n=Le(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var o=t.dispatch,r=t.pending,l=n.memoizedState;if(r!==null){t.pending=null;var i=r=r.next;do l=e(l,i.action),i=i.next;while(i!==r);We(l,n.memoizedState)||(xe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,o]}function Vc(){}function Bc(e,n){var t=V,o=Le(),r=n(),l=!We(o.memoizedState,r);if(l&&(o.memoizedState=r,xe=!0),o=o.queue,va(Yc.bind(null,t,o,e),[e]),o.getSnapshot!==n||l||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,Co(9,qc.bind(null,t,o,r,n),void 0,null),le===null)throw Error(k(349));Qn&30||Qc(t,n,r)}return r}function Qc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function qc(e,n,t,o){n.value=t,n.getSnapshot=o,Kc(n)&&Xc(e)}function Yc(e,n,t){return t(function(){Kc(n)&&Xc(e)})}function Kc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!We(e,t)}catch{return!0}}function Xc(e){var n=rn(e,1);n!==null&&Ue(n,e,1,-1)}function Du(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},n.queue=e,e=e.dispatch=_m.bind(null,V,e),[n.memoizedState,e]}function Co(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function Gc(){return Le().memoizedState}function sr(e,n,t,o){var r=Qe();V.flags|=e,r.memoizedState=Co(1|n,t,void 0,o===void 0?null:o)}function Yr(e,n,t,o){var r=Le();o=o===void 0?null:o;var l=void 0;if(ne!==null){var i=ne.memoizedState;if(l=i.destroy,o!==null&&ga(o,i.deps)){r.memoizedState=Co(n,t,l,o);return}}V.flags|=e,r.memoizedState=Co(1|n,t,l,o)}function Nu(e,n){return sr(8390656,8,e,n)}function va(e,n){return Yr(2048,8,e,n)}function Jc(e,n){return Yr(4,2,e,n)}function Zc(e,n){return Yr(4,4,e,n)}function ed(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function nd(e,n,t){return t=t!=null?t.concat([e]):null,Yr(4,4,ed.bind(null,n,e),t)}function Ca(){}function td(e,n){var t=Le();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&ga(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function od(e,n){var t=Le();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&ga(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function rd(e,n,t){return Qn&21?(We(t,n)||(t=sc(),V.lanes|=t,qn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=t)}function wm(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var o=El.transition;El.transition={};try{e(!1),n()}finally{z=t,El.transition=o}}function ld(){return Le().memoizedState}function km(e,n,t){var o=_n(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},id(e))ad(n,t);else if(t=Uc(e,n,t,o),t!==null){var r=he();Ue(t,e,o,r),ud(t,n,o)}}function _m(e,n,t){var o=_n(e),r={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(id(e))ad(n,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,a=l(i,t);if(r.hasEagerState=!0,r.eagerState=a,We(a,i)){var u=n.interleaved;u===null?(r.next=r,ca(n)):(r.next=u.next,u.next=r),n.interleaved=r;return}}catch{}finally{}t=Uc(e,n,r,o),t!==null&&(r=he(),Ue(t,e,o,r),ud(t,n,o))}}function id(e){var n=e.alternate;return e===V||n!==null&&n===V}function ad(e,n){Zt=Dr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ud(e,n,t){if(t&4194240){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Xi(e,t)}}var Nr={readContext:Oe,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Em={readContext:Oe,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:Oe,useEffect:Nu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,sr(4194308,4,ed.bind(null,n,e),t)},useLayoutEffect:function(e,n){return sr(4194308,4,e,n)},useInsertionEffect:function(e,n){return sr(4,2,e,n)},useMemo:function(e,n){var t=Qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=Qe();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=km.bind(null,V,e),[o.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:Du,useDebugValue:Ca,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Du(!1),n=e[0];return e=wm.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=V,r=Qe();if(W){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),le===null)throw Error(k(349));Qn&30||Qc(o,n,t)}r.memoizedState=t;var l={value:t,getSnapshot:n};return r.queue=l,Nu(Yc.bind(null,o,l,e),[e]),o.flags|=2048,Co(9,qc.bind(null,o,l,t,n),void 0,null),t},useId:function(){var e=Qe(),n=le.identifierPrefix;if(W){var t=en,o=Ze;t=(o&~(1<<32-Ie(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=yo++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Pm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Tm={readContext:Oe,useCallback:td,useContext:Oe,useEffect:va,useImperativeHandle:nd,useInsertionEffect:Jc,useLayoutEffect:Zc,useMemo:od,useReducer:Tl,useRef:Gc,useState:function(){return Tl(vo)},useDebugValue:Ca,useDeferredValue:function(e){var n=Le();return rd(n,ne.memoizedState,e)},useTransition:function(){var e=Tl(vo)[0],n=Le().memoizedState;return[e,n]},useMutableSource:Vc,useSyncExternalStore:Bc,useId:ld,unstable_isNewReconciler:!1},jm={readContext:Oe,useCallback:td,useContext:Oe,useEffect:va,useImperativeHandle:nd,useInsertionEffect:Jc,useLayoutEffect:Zc,useMemo:od,useReducer:jl,useRef:Gc,useState:function(){return jl(vo)},useDebugValue:Ca,useDeferredValue:function(e){var n=Le();return ne===null?n.memoizedState=e:rd(n,ne.memoizedState,e)},useTransition:function(){var e=jl(vo)[0],n=Le().memoizedState;return[e,n]},useMutableSource:Vc,useSyncExternalStore:Bc,useId:ld,unstable_isNewReconciler:!1};function ze(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function gi(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Kr={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=he(),r=_n(e),l=nn(o,r);l.payload=n,t!=null&&(l.callback=t),n=wn(e,l,r),n!==null&&(Ue(n,e,r,o),ar(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=he(),r=_n(e),l=nn(o,r);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=wn(e,l,r),n!==null&&(Ue(n,e,r,o),ar(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),o=_n(e),r=nn(t,o);r.tag=2,n!=null&&(r.callback=n),n=wn(e,r,o),n!==null&&(Ue(n,e,o,t),ar(n,e,o))}};function Mu(e,n,t,o,r,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,i):n.prototype&&n.prototype.isPureReactComponent?!co(t,o)||!co(r,l):!0}function sd(e,n,t){var o=!1,r=Rn,l=n.contextType;return typeof l=="object"&&l!==null?l=Oe(l):(r=Pe(n)?Vn:me.current,o=n.contextTypes,l=(o=o!=null)?xt(e,r):Rn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Kr,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),n}function Ou(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&Kr.enqueueReplaceState(n,n.state,null)}function hi(e,n,t,o){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},da(e);var l=n.contextType;typeof l=="object"&&l!==null?r.context=Oe(l):(l=Pe(n)?Vn:me.current,r.context=xt(e,l)),r.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(gi(e,n,l,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Kr.enqueueReplaceState(r,r.state,null),Rr(e,t,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function kt(e,n){try{var t="",o=n;do t+=nf(o),o=o.return;while(o);var r=t}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:r,digest:null}}function Rl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function yi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Rm=typeof WeakMap=="function"?WeakMap:Map;function cd(e,n,t){t=nn(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){Or||(Or=!0,Ti=o),yi(e,n)},t}function dd(e,n,t){t=nn(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=n.value;t.payload=function(){return o(r)},t.callback=function(){yi(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){yi(e,n),typeof o!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Lu(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Rm;var r=new Set;o.set(n,r)}else r=o.get(n),r===void 0&&(r=new Set,o.set(n,r));r.has(t)||(r.add(t),e=Hm.bind(null,e,n,t),n.then(e,e))}function bu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function zu(e,n,t,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=nn(-1,1),n.tag=2,wn(t,n,1))),t.lanes|=1),e)}var $m=an.ReactCurrentOwner,xe=!1;function ge(e,n,t,o){n.child=e===null?Ic(n,null,t,o):Pt(n,e.child,t,o)}function Fu(e,n,t,o,r){t=t.render;var l=n.ref;return yt(n,r),o=ha(e,n,t,o,l,r),t=ya(),e!==null&&!xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,ln(e,n,r)):(W&&t&&ra(n),n.flags|=1,ge(e,n,o,r),n.child)}function Au(e,n,t,o,r){if(e===null){var l=t.type;return typeof l=="function"&&!Ta(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,pd(e,n,l,o,r)):(e=fr(t.type,null,o,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&r)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:co,t(i,o)&&e.ref===n.ref)return ln(e,n,r)}return n.flags|=1,e=En(l,o),e.ref=n.ref,e.return=n,n.child=e}function pd(e,n,t,o,r){if(e!==null){var l=e.memoizedProps;if(co(l,o)&&e.ref===n.ref)if(xe=!1,n.pendingProps=o=l,(e.lanes&r)!==0)e.flags&131072&&(xe=!0);else return n.lanes=e.lanes,ln(e,n,r)}return vi(e,n,t,o,r)}function fd(e,n,t){var o=n.pendingProps,r=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(pt,ke),ke|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,A(pt,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:t,A(pt,ke),ke|=o}else l!==null?(o=l.baseLanes|t,n.memoizedState=null):o=t,A(pt,ke),ke|=o;return ge(e,n,r,t),n.child}function md(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function vi(e,n,t,o,r){var l=Pe(t)?Vn:me.current;return l=xt(n,l),yt(n,r),t=ha(e,n,t,o,l,r),o=ya(),e!==null&&!xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,ln(e,n,r)):(W&&o&&ra(n),n.flags|=1,ge(e,n,t,r),n.child)}function Iu(e,n,t,o,r){if(Pe(t)){var l=!0;kr(n)}else l=!1;if(yt(n,r),n.stateNode===null)cr(e,n),sd(n,t,o),hi(n,t,o,r),o=!0;else if(e===null){var i=n.stateNode,a=n.memoizedProps;i.props=a;var u=i.context,s=t.contextType;typeof s=="object"&&s!==null?s=Oe(s):(s=Pe(t)?Vn:me.current,s=xt(n,s));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";c||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==o||u!==s)&&Ou(n,i,o,s),fn=!1;var f=n.memoizedState;i.state=f,Rr(n,o,i,r),u=n.memoizedState,a!==o||f!==u||Se.current||fn?(typeof d=="function"&&(gi(n,t,d,o),u=n.memoizedState),(a=fn||Mu(n,t,a,o,f,u,s))?(c||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=u),i.props=o,i.state=u,i.context=s,o=a):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{i=n.stateNode,Wc(e,n),a=n.memoizedProps,s=n.type===n.elementType?a:ze(n.type,a),i.props=s,c=n.pendingProps,f=i.context,u=t.contextType,typeof u=="object"&&u!==null?u=Oe(u):(u=Pe(t)?Vn:me.current,u=xt(n,u));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==c||f!==u)&&Ou(n,i,o,u),fn=!1,f=n.memoizedState,i.state=f,Rr(n,o,i,r);var x=n.memoizedState;a!==c||f!==x||Se.current||fn?(typeof v=="function"&&(gi(n,t,v,o),x=n.memoizedState),(s=fn||Mu(n,t,s,o,f,x,u)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,x,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,x,u)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=x),i.props=o,i.state=x,i.context=u,o=s):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),o=!1)}return Ci(e,n,t,o,l,r)}function Ci(e,n,t,o,r,l){md(e,n);var i=(n.flags&128)!==0;if(!o&&!i)return r&&_u(n,t,!1),ln(e,n,l);o=n.stateNode,$m.current=n;var a=i&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&i?(n.child=Pt(n,e.child,null,l),n.child=Pt(n,null,a,l)):ge(e,n,a,l),n.memoizedState=o.state,r&&_u(n,t,!0),n.child}function gd(e){var n=e.stateNode;n.pendingContext?ku(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ku(e,n.context,!1),pa(e,n.containerInfo)}function Uu(e,n,t,o,r){return St(),ia(r),n.flags|=256,ge(e,n,t,o),n.child}var xi={dehydrated:null,treeContext:null,retryLane:0};function Si(e){return{baseLanes:e,cachePool:null,transitions:null}}function hd(e,n,t){var o=n.pendingProps,r=H.current,l=!1,i=(n.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),A(H,r&1),e===null)return fi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=o.children,e=o.fallback,l?(o=n.mode,l=n.child,i={mode:"hidden",children:i},!(o&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Jr(i,o,0,null),e=Hn(e,o,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Si(t),n.memoizedState=xi,e):xa(n,i));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Dm(e,n,i,o,a,r,t);if(l){l=o.fallback,i=n.mode,r=e.child,a=r.sibling;var u={mode:"hidden",children:o.children};return!(i&1)&&n.child!==r?(o=n.child,o.childLanes=0,o.pendingProps=u,n.deletions=null):(o=En(r,u),o.subtreeFlags=r.subtreeFlags&14680064),a!==null?l=En(a,l):(l=Hn(l,i,t,null),l.flags|=2),l.return=n,o.return=n,o.sibling=l,n.child=o,o=l,l=n.child,i=e.child.memoizedState,i=i===null?Si(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=xi,o}return l=e.child,e=l.sibling,o=En(l,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function xa(e,n){return n=Jr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Yo(e,n,t,o){return o!==null&&ia(o),Pt(n,e.child,null,t),e=xa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Dm(e,n,t,o,r,l,i){if(t)return n.flags&256?(n.flags&=-257,o=Rl(Error(k(422))),Yo(e,n,i,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=o.fallback,r=n.mode,o=Jr({mode:"visible",children:o.children},r,0,null),l=Hn(l,r,i,null),l.flags|=2,o.return=n,l.return=n,o.sibling=l,n.child=o,n.mode&1&&Pt(n,e.child,null,i),n.child.memoizedState=Si(i),n.memoizedState=xi,l);if(!(n.mode&1))return Yo(e,n,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var a=o.dgst;return o=a,l=Error(k(419)),o=Rl(l,o,void 0),Yo(e,n,i,o)}if(a=(i&e.childLanes)!==0,xe||a){if(o=le,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,rn(e,r),Ue(o,e,r,-1))}return Ea(),o=Rl(Error(k(421))),Yo(e,n,i,o)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Vm.bind(null,e),r._reactRetry=n,null):(e=l.treeContext,_e=Pn(r.nextSibling),Ee=n,W=!0,Ae=null,e!==null&&($e[De++]=Ze,$e[De++]=en,$e[De++]=Bn,Ze=e.id,en=e.overflow,Bn=n),n=xa(n,o.children),n.flags|=4096,n)}function Wu(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),mi(e.return,n,t)}function $l(e,n,t,o,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:r}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=t,l.tailMode=r)}function yd(e,n,t){var o=n.pendingProps,r=o.revealOrder,l=o.tail;if(ge(e,n,o.children,t),o=H.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wu(e,t,n);else if(e.tag===19)Wu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(A(H,o),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&$r(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),$l(n,!1,r,t,l);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&$r(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}$l(n,!0,t,null,l);break;case"together":$l(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function cr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),qn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=En(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=En(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Nm(e,n,t){switch(n.tag){case 3:gd(n),St();break;case 5:Hc(n);break;case 1:Pe(n.type)&&kr(n);break;case 4:pa(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,r=n.memoizedProps.value;A(Tr,o._currentValue),o._currentValue=r;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(A(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?hd(e,n,t):(A(H,H.current&1),e=ln(e,n,t),e!==null?e.sibling:null);A(H,H.current&1);break;case 19:if(o=(t&n.childLanes)!==0,e.flags&128){if(o)return yd(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),A(H,H.current),o)break;return null;case 22:case 23:return n.lanes=0,fd(e,n,t)}return ln(e,n,t)}var vd,Pi,Cd,xd;vd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pi=function(){};Cd=function(e,n,t,o){var r=e.memoizedProps;if(r!==o){e=n.stateNode,Un(Ke.current);var l=null;switch(t){case"input":r=Vl(e,r),o=Vl(e,o),l=[];break;case"select":r=B({},r,{value:void 0}),o=B({},o,{value:void 0}),l=[];break;case"textarea":r=ql(e,r),o=ql(e,o),l=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Pr)}Kl(t,o);var i;t=null;for(s in r)if(!o.hasOwnProperty(s)&&r.hasOwnProperty(s)&&r[s]!=null)if(s==="style"){var a=r[s];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in o){var u=o[s];if(a=r!=null?r[s]:void 0,o.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(t||(t={}),t[i]=u[i])}else t||(l||(l=[]),l.push(s,t)),t=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(oo.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&I("scroll",e),l||a===u||(l=[])):(l=l||[]).push(s,u))}t&&(l=l||[]).push("style",t);var s=l;(n.updateQueue=s)&&(n.flags|=4)}};xd=function(e,n,t,o){t!==o&&(n.flags|=4)};function At(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function Mm(e,n,t){var o=n.pendingProps;switch(la(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(n),null;case 1:return Pe(n.type)&&wr(),ce(n),null;case 3:return o=n.stateNode,wt(),U(Se),U(me),ma(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Qo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ae!==null&&($i(Ae),Ae=null))),Pi(e,n),ce(n),null;case 5:fa(n);var r=Un(ho.current);if(t=n.type,e!==null&&n.stateNode!=null)Cd(e,n,t,o,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(k(166));return ce(n),null}if(e=Un(Ke.current),Qo(n)){o=n.stateNode,t=n.type;var l=n.memoizedProps;switch(o[qe]=n,o[mo]=l,e=(n.mode&1)!==0,t){case"dialog":I("cancel",o),I("close",o);break;case"iframe":case"object":case"embed":I("load",o);break;case"video":case"audio":for(r=0;r<Bt.length;r++)I(Bt[r],o);break;case"source":I("error",o);break;case"img":case"image":case"link":I("error",o),I("load",o);break;case"details":I("toggle",o);break;case"input":Ga(o,l),I("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},I("invalid",o);break;case"textarea":Za(o,l),I("invalid",o)}Kl(t,l),r=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?o.textContent!==a&&(l.suppressHydrationWarning!==!0&&Bo(o.textContent,a,e),r=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Bo(o.textContent,a,e),r=["children",""+a]):oo.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&I("scroll",o)}switch(t){case"input":zo(o),Ja(o,l,!0);break;case"textarea":zo(o),eu(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=Pr)}o=r,n.updateQueue=o,o!==null&&(n.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ys(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(t,{is:o.is}):(e=i.createElement(t),t==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,t),e[qe]=n,e[mo]=o,vd(e,n,!1,!1),n.stateNode=e;e:{switch(i=Xl(t,o),t){case"dialog":I("cancel",e),I("close",e),r=o;break;case"iframe":case"object":case"embed":I("load",e),r=o;break;case"video":case"audio":for(r=0;r<Bt.length;r++)I(Bt[r],e);r=o;break;case"source":I("error",e),r=o;break;case"img":case"image":case"link":I("error",e),I("load",e),r=o;break;case"details":I("toggle",e),r=o;break;case"input":Ga(e,o),r=Vl(e,o),I("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=B({},o,{value:void 0}),I("invalid",e);break;case"textarea":Za(e,o),r=ql(e,o),I("invalid",e);break;default:r=o}Kl(t,r),a=r;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?Gs(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ks(e,u)):l==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&ro(e,u):typeof u=="number"&&ro(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(oo.hasOwnProperty(l)?u!=null&&l==="onScroll"&&I("scroll",e):u!=null&&Vi(e,l,u,i))}switch(t){case"input":zo(e),Ja(e,o,!1);break;case"textarea":zo(e),eu(e);break;case"option":o.value!=null&&e.setAttribute("value",""+jn(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?ft(e,!!o.multiple,l,!1):o.defaultValue!=null&&ft(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Pr)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ce(n),null;case 6:if(e&&n.stateNode!=null)xd(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(k(166));if(t=Un(ho.current),Un(Ke.current),Qo(n)){if(o=n.stateNode,t=n.memoizedProps,o[qe]=n,(l=o.nodeValue!==t)&&(e=Ee,e!==null))switch(e.tag){case 3:Bo(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(o.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[qe]=n,n.stateNode=o}return ce(n),null;case 13:if(U(H),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&_e!==null&&n.mode&1&&!(n.flags&128))Fc(),St(),n.flags|=98560,l=!1;else if(l=Qo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[qe]=n}else St(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ce(n),l=!1}else Ae!==null&&($i(Ae),Ae=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?te===0&&(te=3):Ea())),n.updateQueue!==null&&(n.flags|=4),ce(n),null);case 4:return wt(),Pi(e,n),e===null&&po(n.stateNode.containerInfo),ce(n),null;case 10:return sa(n.type._context),ce(n),null;case 17:return Pe(n.type)&&wr(),ce(n),null;case 19:if(U(H),l=n.memoizedState,l===null)return ce(n),null;if(o=(n.flags&128)!==0,i=l.rendering,i===null)if(o)At(l,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=$r(e),i!==null){for(n.flags|=128,At(l,!1),o=i.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)l=t,e=o,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return A(H,H.current&1|2),n.child}e=e.sibling}l.tail!==null&&K()>_t&&(n.flags|=128,o=!0,At(l,!1),n.lanes=4194304)}else{if(!o)if(e=$r(i),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),At(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!W)return ce(n),null}else 2*K()-l.renderingStartTime>_t&&t!==1073741824&&(n.flags|=128,o=!0,At(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=K(),n.sibling=null,t=H.current,A(H,o?t&1|2:t&1),n):(ce(n),null);case 22:case 23:return _a(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?ke&1073741824&&(ce(n),n.subtreeFlags&6&&(n.flags|=8192)):ce(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Om(e,n){switch(la(n),n.tag){case 1:return Pe(n.type)&&wr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return wt(),U(Se),U(me),ma(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return fa(n),null;case 13:if(U(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));St()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(H),null;case 4:return wt(),null;case 10:return sa(n.type._context),null;case 22:case 23:return _a(),null;case 24:return null;default:return null}}var Ko=!1,fe=!1,Lm=typeof WeakSet=="function"?WeakSet:Set,j=null;function dt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){Q(e,n,o)}else t.current=null}function wi(e,n,t){try{t()}catch(o){Q(e,n,o)}}var Hu=!1;function bm(e,n){if(ii=Cr,e=_c(),oa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var r=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,a=-1,u=-1,s=0,d=0,c=e,f=null;n:for(;;){for(var v;c!==t||r!==0&&c.nodeType!==3||(a=i+r),c!==l||o!==0&&c.nodeType!==3||(u=i+o),c.nodeType===3&&(i+=c.nodeValue.length),(v=c.firstChild)!==null;)f=c,c=v;for(;;){if(c===e)break n;if(f===t&&++s===r&&(a=i),f===l&&++d===o&&(u=i),(v=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=v}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(ai={focusedElem:e,selectionRange:t},Cr=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,_=x.memoizedState,h=n.stateNode,p=h.getSnapshotBeforeUpdate(n.elementType===n.type?S:ze(n.type,S),_);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){Q(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return x=Hu,Hu=!1,x}function eo(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var l=r.destroy;r.destroy=void 0,l!==void 0&&wi(n,t,l)}r=r.next}while(r!==o)}}function Xr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function ki(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Sd(e){var n=e.alternate;n!==null&&(e.alternate=null,Sd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[qe],delete n[mo],delete n[ci],delete n[vm],delete n[Cm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pd(e){return e.tag===5||e.tag===3||e.tag===4}function Vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _i(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Pr));else if(o!==4&&(e=e.child,e!==null))for(_i(e,n,t),e=e.sibling;e!==null;)_i(e,n,t),e=e.sibling}function Ei(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ei(e,n,t),e=e.sibling;e!==null;)Ei(e,n,t),e=e.sibling}var ie=null,Fe=!1;function cn(e,n,t){for(t=t.child;t!==null;)wd(e,n,t),t=t.sibling}function wd(e,n,t){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Wr,t)}catch{}switch(t.tag){case 5:fe||dt(t,n);case 6:var o=ie,r=Fe;ie=null,cn(e,n,t),ie=o,Fe=r,ie!==null&&(Fe?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(Fe?(e=ie,t=t.stateNode,e.nodeType===8?wl(e.parentNode,t):e.nodeType===1&&wl(e,t),uo(e)):wl(ie,t.stateNode));break;case 4:o=ie,r=Fe,ie=t.stateNode.containerInfo,Fe=!0,cn(e,n,t),ie=o,Fe=r;break;case 0:case 11:case 14:case 15:if(!fe&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var l=r,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&wi(t,n,i),r=r.next}while(r!==o)}cn(e,n,t);break;case 1:if(!fe&&(dt(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(a){Q(t,n,a)}cn(e,n,t);break;case 21:cn(e,n,t);break;case 22:t.mode&1?(fe=(o=fe)||t.memoizedState!==null,cn(e,n,t),fe=o):cn(e,n,t);break;default:cn(e,n,t)}}function Bu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Lm),n.forEach(function(o){var r=Bm.bind(null,e,o);t.has(o)||(t.add(o),o.then(r,r))})}}function be(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var r=t[o];try{var l=e,i=n,a=i;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,Fe=!1;break e;case 3:ie=a.stateNode.containerInfo,Fe=!0;break e;case 4:ie=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(ie===null)throw Error(k(160));wd(l,i,r),ie=null,Fe=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(s){Q(r,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)kd(n,e),n=n.sibling}function kd(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(n,e),Be(e),o&4){try{eo(3,e,e.return),Xr(3,e)}catch(S){Q(e,e.return,S)}try{eo(5,e,e.return)}catch(S){Q(e,e.return,S)}}break;case 1:be(n,e),Be(e),o&512&&t!==null&&dt(t,t.return);break;case 5:if(be(n,e),Be(e),o&512&&t!==null&&dt(t,t.return),e.flags&32){var r=e.stateNode;try{ro(r,"")}catch(S){Q(e,e.return,S)}}if(o&4&&(r=e.stateNode,r!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Qs(r,l),Xl(a,i);var s=Xl(a,l);for(i=0;i<u.length;i+=2){var d=u[i],c=u[i+1];d==="style"?Gs(r,c):d==="dangerouslySetInnerHTML"?Ks(r,c):d==="children"?ro(r,c):Vi(r,d,c,s)}switch(a){case"input":Bl(r,l);break;case"textarea":qs(r,l);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?ft(r,!!l.multiple,v,!1):f!==!!l.multiple&&(l.defaultValue!=null?ft(r,!!l.multiple,l.defaultValue,!0):ft(r,!!l.multiple,l.multiple?[]:"",!1))}r[mo]=l}catch(S){Q(e,e.return,S)}}break;case 6:if(be(n,e),Be(e),o&4){if(e.stateNode===null)throw Error(k(162));r=e.stateNode,l=e.memoizedProps;try{r.nodeValue=l}catch(S){Q(e,e.return,S)}}break;case 3:if(be(n,e),Be(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{uo(n.containerInfo)}catch(S){Q(e,e.return,S)}break;case 4:be(n,e),Be(e);break;case 13:be(n,e),Be(e),r=e.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||(wa=K())),o&4&&Bu(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(s=fe)||d,be(n,e),fe=s):be(n,e),Be(e),o&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!d&&e.mode&1)for(j=e,d=e.child;d!==null;){for(c=j=d;j!==null;){switch(f=j,v=f.child,f.tag){case 0:case 11:case 14:case 15:eo(4,f,f.return);break;case 1:dt(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){o=f,t=f.return;try{n=o,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(S){Q(o,t,S)}}break;case 5:dt(f,f.return);break;case 22:if(f.memoizedState!==null){qu(c);continue}}v!==null?(v.return=f,j=v):qu(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{r=c.stateNode,s?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=c.stateNode,u=c.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Xs("display",i))}catch(S){Q(e,e.return,S)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(S){Q(e,e.return,S)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:be(n,e),Be(e),o&4&&Bu(e);break;case 21:break;default:be(n,e),Be(e)}}function Be(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Pd(t)){var o=t;break e}t=t.return}throw Error(k(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(ro(r,""),o.flags&=-33);var l=Vu(e);Ei(e,l,r);break;case 3:case 4:var i=o.stateNode.containerInfo,a=Vu(e);_i(e,a,i);break;default:throw Error(k(161))}}catch(u){Q(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zm(e,n,t){j=e,_d(e)}function _d(e,n,t){for(var o=(e.mode&1)!==0;j!==null;){var r=j,l=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||Ko;if(!i){var a=r.alternate,u=a!==null&&a.memoizedState!==null||fe;a=Ko;var s=fe;if(Ko=i,(fe=u)&&!s)for(j=r;j!==null;)i=j,u=i.child,i.tag===22&&i.memoizedState!==null?Yu(r):u!==null?(u.return=i,j=u):Yu(r);for(;l!==null;)j=l,_d(l),l=l.sibling;j=r,Ko=a,fe=s}Qu(e)}else r.subtreeFlags&8772&&l!==null?(l.return=r,j=l):Qu(e)}}function Qu(e){for(;j!==null;){var n=j;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||Xr(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!fe)if(t===null)o.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);o.componentDidUpdate(r,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&$u(n,l,o);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}$u(n,i,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var d=s.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&uo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}fe||n.flags&512&&ki(n)}catch(f){Q(n,n.return,f)}}if(n===e){j=null;break}if(t=n.sibling,t!==null){t.return=n.return,j=t;break}j=n.return}}function qu(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var t=n.sibling;if(t!==null){t.return=n.return,j=t;break}j=n.return}}function Yu(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Xr(4,n)}catch(u){Q(n,t,u)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var r=n.return;try{o.componentDidMount()}catch(u){Q(n,r,u)}}var l=n.return;try{ki(n)}catch(u){Q(n,l,u)}break;case 5:var i=n.return;try{ki(n)}catch(u){Q(n,i,u)}}}catch(u){Q(n,n.return,u)}if(n===e){j=null;break}var a=n.sibling;if(a!==null){a.return=n.return,j=a;break}j=n.return}}var Fm=Math.ceil,Mr=an.ReactCurrentDispatcher,Sa=an.ReactCurrentOwner,Me=an.ReactCurrentBatchConfig,L=0,le=null,J=null,ae=0,ke=0,pt=Dn(0),te=0,xo=null,qn=0,Gr=0,Pa=0,no=null,Ce=null,wa=0,_t=1/0,Ge=null,Or=!1,Ti=null,kn=null,Xo=!1,yn=null,Lr=0,to=0,ji=null,dr=-1,pr=0;function he(){return L&6?K():dr!==-1?dr:dr=K()}function _n(e){return e.mode&1?L&2&&ae!==0?ae&-ae:Sm.transition!==null?(pr===0&&(pr=sc()),pr):(e=z,e!==0||(e=window.event,e=e===void 0?16:hc(e.type)),e):1}function Ue(e,n,t,o){if(50<to)throw to=0,ji=null,Error(k(185));_o(e,t,o),(!(L&2)||e!==le)&&(e===le&&(!(L&2)&&(Gr|=t),te===4&&gn(e,ae)),we(e,o),t===1&&L===0&&!(n.mode&1)&&(_t=K()+500,qr&&Nn()))}function we(e,n){var t=e.callbackNode;Sf(e,n);var o=vr(e,e===le?ae:0);if(o===0)t!==null&&ou(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&ou(t),n===1)e.tag===0?xm(Ku.bind(null,e)):Lc(Ku.bind(null,e)),hm(function(){!(L&6)&&Nn()}),t=null;else{switch(cc(o)){case 1:t=Ki;break;case 4:t=ac;break;case 16:t=yr;break;case 536870912:t=uc;break;default:t=yr}t=Md(t,Ed.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ed(e,n){if(dr=-1,pr=0,L&6)throw Error(k(327));var t=e.callbackNode;if(vt()&&e.callbackNode!==t)return null;var o=vr(e,e===le?ae:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=br(e,o);else{n=o;var r=L;L|=2;var l=jd();(le!==e||ae!==n)&&(Ge=null,_t=K()+500,Wn(e,n));do try{Um();break}catch(a){Td(e,a)}while(!0);ua(),Mr.current=l,L=r,J!==null?n=0:(le=null,ae=0,n=te)}if(n!==0){if(n===2&&(r=ni(e),r!==0&&(o=r,n=Ri(e,r))),n===1)throw t=xo,Wn(e,0),gn(e,o),we(e,K()),t;if(n===6)gn(e,o);else{if(r=e.current.alternate,!(o&30)&&!Am(r)&&(n=br(e,o),n===2&&(l=ni(e),l!==0&&(o=l,n=Ri(e,l))),n===1))throw t=xo,Wn(e,0),gn(e,o),we(e,K()),t;switch(e.finishedWork=r,e.finishedLanes=o,n){case 0:case 1:throw Error(k(345));case 2:Fn(e,Ce,Ge);break;case 3:if(gn(e,o),(o&130023424)===o&&(n=wa+500-K(),10<n)){if(vr(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){he(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=si(Fn.bind(null,e,Ce,Ge),n);break}Fn(e,Ce,Ge);break;case 4:if(gn(e,o),(o&4194240)===o)break;for(n=e.eventTimes,r=-1;0<o;){var i=31-Ie(o);l=1<<i,i=n[i],i>r&&(r=i),o&=~l}if(o=r,o=K()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Fm(o/1960))-o,10<o){e.timeoutHandle=si(Fn.bind(null,e,Ce,Ge),o);break}Fn(e,Ce,Ge);break;case 5:Fn(e,Ce,Ge);break;default:throw Error(k(329))}}}return we(e,K()),e.callbackNode===t?Ed.bind(null,e):null}function Ri(e,n){var t=no;return e.current.memoizedState.isDehydrated&&(Wn(e,n).flags|=256),e=br(e,n),e!==2&&(n=Ce,Ce=t,n!==null&&$i(n)),e}function $i(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function Am(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var r=t[o],l=r.getSnapshot;r=r.value;try{if(!We(l(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gn(e,n){for(n&=~Pa,n&=~Gr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ie(n),o=1<<t;e[t]=-1,n&=~o}}function Ku(e){if(L&6)throw Error(k(327));vt();var n=vr(e,0);if(!(n&1))return we(e,K()),null;var t=br(e,n);if(e.tag!==0&&t===2){var o=ni(e);o!==0&&(n=o,t=Ri(e,o))}if(t===1)throw t=xo,Wn(e,0),gn(e,n),we(e,K()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Fn(e,Ce,Ge),we(e,K()),null}function ka(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(_t=K()+500,qr&&Nn())}}function Yn(e){yn!==null&&yn.tag===0&&!(L&6)&&vt();var n=L;L|=1;var t=Me.transition,o=z;try{if(Me.transition=null,z=1,e)return e()}finally{z=o,Me.transition=t,L=n,!(L&6)&&Nn()}}function _a(){ke=pt.current,U(pt)}function Wn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,gm(t)),J!==null)for(t=J.return;t!==null;){var o=t;switch(la(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&wr();break;case 3:wt(),U(Se),U(me),ma();break;case 5:fa(o);break;case 4:wt();break;case 13:U(H);break;case 19:U(H);break;case 10:sa(o.type._context);break;case 22:case 23:_a()}t=t.return}if(le=e,J=e=En(e.current,null),ae=ke=n,te=0,xo=null,Pa=Gr=qn=0,Ce=no=null,In!==null){for(n=0;n<In.length;n++)if(t=In[n],o=t.interleaved,o!==null){t.interleaved=null;var r=o.next,l=t.pending;if(l!==null){var i=l.next;l.next=r,o.next=i}t.pending=o}In=null}return e}function Td(e,n){do{var t=J;try{if(ua(),ur.current=Nr,Dr){for(var o=V.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Dr=!1}if(Qn=0,re=ne=V=null,Zt=!1,yo=0,Sa.current=null,t===null||t.return===null){te=1,xo=n,J=null;break}e:{var l=e,i=t.return,a=t,u=n;if(n=ae,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=bu(i);if(v!==null){v.flags&=-257,zu(v,i,a,l,n),v.mode&1&&Lu(l,s,n),n=v,u=s;var x=n.updateQueue;if(x===null){var S=new Set;S.add(u),n.updateQueue=S}else x.add(u);break e}else{if(!(n&1)){Lu(l,s,n),Ea();break e}u=Error(k(426))}}else if(W&&a.mode&1){var _=bu(i);if(_!==null){!(_.flags&65536)&&(_.flags|=256),zu(_,i,a,l,n),ia(kt(u,a));break e}}l=u=kt(u,a),te!==4&&(te=2),no===null?no=[l]:no.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var h=cd(l,u,n);Ru(l,h);break e;case 1:a=u;var p=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(kn===null||!kn.has(g)))){l.flags|=65536,n&=-n,l.lanes|=n;var y=dd(l,a,n);Ru(l,y);break e}}l=l.return}while(l!==null)}$d(t)}catch(C){n=C,J===t&&t!==null&&(J=t=t.return);continue}break}while(!0)}function jd(){var e=Mr.current;return Mr.current=Nr,e===null?Nr:e}function Ea(){(te===0||te===3||te===2)&&(te=4),le===null||!(qn&268435455)&&!(Gr&268435455)||gn(le,ae)}function br(e,n){var t=L;L|=2;var o=jd();(le!==e||ae!==n)&&(Ge=null,Wn(e,n));do try{Im();break}catch(r){Td(e,r)}while(!0);if(ua(),L=t,Mr.current=o,J!==null)throw Error(k(261));return le=null,ae=0,te}function Im(){for(;J!==null;)Rd(J)}function Um(){for(;J!==null&&!pf();)Rd(J)}function Rd(e){var n=Nd(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?$d(e):J=n,Sa.current=null}function $d(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Om(t,n),t!==null){t.flags&=32767,J=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,J=null;return}}else if(t=Mm(t,n,ke),t!==null){J=t;return}if(n=n.sibling,n!==null){J=n;return}J=n=e}while(n!==null);te===0&&(te=5)}function Fn(e,n,t){var o=z,r=Me.transition;try{Me.transition=null,z=1,Wm(e,n,t,o)}finally{Me.transition=r,z=o}return null}function Wm(e,n,t,o){do vt();while(yn!==null);if(L&6)throw Error(k(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Pf(e,l),e===le&&(J=le=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xo||(Xo=!0,Md(yr,function(){return vt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Me.transition,Me.transition=null;var i=z;z=1;var a=L;L|=4,Sa.current=null,bm(e,t),kd(t,e),um(ai),Cr=!!ii,ai=ii=null,e.current=t,zm(t),ff(),L=a,z=i,Me.transition=l}else e.current=t;if(Xo&&(Xo=!1,yn=e,Lr=r),l=e.pendingLanes,l===0&&(kn=null),hf(t.stateNode),we(e,K()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],o(r.value,{componentStack:r.stack,digest:r.digest});if(Or)throw Or=!1,e=Ti,Ti=null,e;return Lr&1&&e.tag!==0&&vt(),l=e.pendingLanes,l&1?e===ji?to++:(to=0,ji=e):to=0,Nn(),null}function vt(){if(yn!==null){var e=cc(Lr),n=Me.transition,t=z;try{if(Me.transition=null,z=16>e?16:e,yn===null)var o=!1;else{if(e=yn,yn=null,Lr=0,L&6)throw Error(k(331));var r=L;for(L|=4,j=e.current;j!==null;){var l=j,i=l.child;if(j.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(j=s;j!==null;){var d=j;switch(d.tag){case 0:case 11:case 15:eo(8,d,l)}var c=d.child;if(c!==null)c.return=d,j=c;else for(;j!==null;){d=j;var f=d.sibling,v=d.return;if(Sd(d),d===s){j=null;break}if(f!==null){f.return=v,j=f;break}j=v}}}var x=l.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var _=S.sibling;S.sibling=null,S=_}while(S!==null)}}j=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,j=i;else e:for(;j!==null;){if(l=j,l.flags&2048)switch(l.tag){case 0:case 11:case 15:eo(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,j=h;break e}j=l.return}}var p=e.current;for(j=p;j!==null;){i=j;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,j=g;else e:for(i=p;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xr(9,a)}}catch(C){Q(a,a.return,C)}if(a===i){j=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,j=y;break e}j=a.return}}if(L=r,Nn(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Wr,e)}catch{}o=!0}return o}finally{z=t,Me.transition=n}}return!1}function Xu(e,n,t){n=kt(t,n),n=cd(e,n,1),e=wn(e,n,1),n=he(),e!==null&&(_o(e,1,n),we(e,n))}function Q(e,n,t){if(e.tag===3)Xu(e,e,t);else for(;n!==null;){if(n.tag===3){Xu(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(kn===null||!kn.has(o))){e=kt(t,e),e=dd(n,e,1),n=wn(n,e,1),e=he(),n!==null&&(_o(n,1,e),we(n,e));break}}n=n.return}}function Hm(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,le===e&&(ae&t)===t&&(te===4||te===3&&(ae&130023424)===ae&&500>K()-wa?Wn(e,0):Pa|=t),we(e,n)}function Dd(e,n){n===0&&(e.mode&1?(n=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):n=1);var t=he();e=rn(e,n),e!==null&&(_o(e,n,t),we(e,t))}function Vm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Dd(e,t)}function Bm(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(k(314))}o!==null&&o.delete(n),Dd(e,t)}var Nd;Nd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)xe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return xe=!1,Nm(e,n,t);xe=!!(e.flags&131072)}else xe=!1,W&&n.flags&1048576&&bc(n,Er,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;cr(e,n),e=n.pendingProps;var r=xt(n,me.current);yt(n,t),r=ha(null,n,o,e,r,t);var l=ya();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Pe(o)?(l=!0,kr(n)):l=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,da(n),r.updater=Kr,n.stateNode=r,r._reactInternals=n,hi(n,o,e,t),n=Ci(null,n,o,!0,l,t)):(n.tag=0,W&&l&&ra(n),ge(null,n,r,t),n=n.child),n;case 16:o=n.elementType;e:{switch(cr(e,n),e=n.pendingProps,r=o._init,o=r(o._payload),n.type=o,r=n.tag=qm(o),e=ze(o,e),r){case 0:n=vi(null,n,o,e,t);break e;case 1:n=Iu(null,n,o,e,t);break e;case 11:n=Fu(null,n,o,e,t);break e;case 14:n=Au(null,n,o,ze(o.type,e),t);break e}throw Error(k(306,o,""))}return n;case 0:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:ze(o,r),vi(e,n,o,r,t);case 1:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:ze(o,r),Iu(e,n,o,r,t);case 3:e:{if(gd(n),e===null)throw Error(k(387));o=n.pendingProps,l=n.memoizedState,r=l.element,Wc(e,n),Rr(n,o,null,t);var i=n.memoizedState;if(o=i.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){r=kt(Error(k(423)),n),n=Uu(e,n,o,t,r);break e}else if(o!==r){r=kt(Error(k(424)),n),n=Uu(e,n,o,t,r);break e}else for(_e=Pn(n.stateNode.containerInfo.firstChild),Ee=n,W=!0,Ae=null,t=Ic(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(St(),o===r){n=ln(e,n,t);break e}ge(e,n,o,t)}n=n.child}return n;case 5:return Hc(n),e===null&&fi(n),o=n.type,r=n.pendingProps,l=e!==null?e.memoizedProps:null,i=r.children,ui(o,r)?i=null:l!==null&&ui(o,l)&&(n.flags|=32),md(e,n),ge(e,n,i,t),n.child;case 6:return e===null&&fi(n),null;case 13:return hd(e,n,t);case 4:return pa(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Pt(n,null,o,t):ge(e,n,o,t),n.child;case 11:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:ze(o,r),Fu(e,n,o,r,t);case 7:return ge(e,n,n.pendingProps,t),n.child;case 8:return ge(e,n,n.pendingProps.children,t),n.child;case 12:return ge(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,r=n.pendingProps,l=n.memoizedProps,i=r.value,A(Tr,o._currentValue),o._currentValue=i,l!==null)if(We(l.value,i)){if(l.children===r.children&&!Se.current){n=ln(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var u=a.firstContext;u!==null;){if(u.context===o){if(l.tag===1){u=nn(-1,t&-t),u.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var d=s.pending;d===null?u.next=u:(u.next=d.next,d.next=u),s.pending=u}}l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),mi(l.return,t,n),a.lanes|=t;break}u=u.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(k(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),mi(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ge(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,o=n.pendingProps.children,yt(n,t),r=Oe(r),o=o(r),n.flags|=1,ge(e,n,o,t),n.child;case 14:return o=n.type,r=ze(o,n.pendingProps),r=ze(o.type,r),Au(e,n,o,r,t);case 15:return pd(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:ze(o,r),cr(e,n),n.tag=1,Pe(o)?(e=!0,kr(n)):e=!1,yt(n,t),sd(n,o,r),hi(n,o,r,t),Ci(null,n,o,!0,e,t);case 19:return yd(e,n,t);case 22:return fd(e,n,t)}throw Error(k(156,n.tag))};function Md(e,n){return ic(e,n)}function Qm(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,n,t,o){return new Qm(e,n,t,o)}function Ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qm(e){if(typeof e=="function")return Ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qi)return 11;if(e===qi)return 14}return 2}function En(e,n){var t=e.alternate;return t===null?(t=Ne(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function fr(e,n,t,o,r,l){var i=2;if(o=e,typeof e=="function")Ta(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case tt:return Hn(t.children,r,l,n);case Bi:i=8,r|=8;break;case Il:return e=Ne(12,t,n,r|2),e.elementType=Il,e.lanes=l,e;case Ul:return e=Ne(13,t,n,r),e.elementType=Ul,e.lanes=l,e;case Wl:return e=Ne(19,t,n,r),e.elementType=Wl,e.lanes=l,e;case Hs:return Jr(t,r,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Us:i=10;break e;case Ws:i=9;break e;case Qi:i=11;break e;case qi:i=14;break e;case pn:i=16,o=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Ne(i,t,n,r),n.elementType=e,n.type=o,n.lanes=l,n}function Hn(e,n,t,o){return e=Ne(7,e,o,n),e.lanes=t,e}function Jr(e,n,t,o){return e=Ne(22,e,o,n),e.elementType=Hs,e.lanes=t,e.stateNode={isHidden:!1},e}function Dl(e,n,t){return e=Ne(6,e,null,n),e.lanes=t,e}function Nl(e,n,t){return n=Ne(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ym(e,n,t,o,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ja(e,n,t,o,r,l,i,a,u){return e=new Ym(e,n,t,a,u),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ne(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},da(l),e}function Km(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nt,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function Od(e){if(!e)return Rn;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Pe(t))return Oc(e,t,n)}return n}function Ld(e,n,t,o,r,l,i,a,u){return e=ja(t,o,!0,e,r,l,i,a,u),e.context=Od(null),t=e.current,o=he(),r=_n(t),l=nn(o,r),l.callback=n??null,wn(t,l,r),e.current.lanes=r,_o(e,r,o),we(e,o),e}function Zr(e,n,t,o){var r=n.current,l=he(),i=_n(r);return t=Od(t),n.context===null?n.context=t:n.pendingContext=t,n=nn(l,i),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=wn(r,n,i),e!==null&&(Ue(e,r,i,l),ar(e,r,i)),i}function zr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ra(e,n){Gu(e,n),(e=e.alternate)&&Gu(e,n)}function Xm(){return null}var bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function $a(e){this._internalRoot=e}el.prototype.render=$a.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Zr(e,n,null,null)};el.prototype.unmount=$a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yn(function(){Zr(null,e,null,null)}),n[on]=null}};function el(e){this._internalRoot=e}el.prototype.unstable_scheduleHydration=function(e){if(e){var n=fc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<mn.length&&n!==0&&n<mn[t].priority;t++);mn.splice(t,0,e),t===0&&gc(e)}};function Da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function Gm(e,n,t,o,r){if(r){if(typeof o=="function"){var l=o;o=function(){var s=zr(i);l.call(s)}}var i=Ld(n,o,e,0,null,!1,!1,"",Ju);return e._reactRootContainer=i,e[on]=i.current,po(e.nodeType===8?e.parentNode:e),Yn(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var a=o;o=function(){var s=zr(u);a.call(s)}}var u=ja(e,0,!1,null,null,!1,!1,"",Ju);return e._reactRootContainer=u,e[on]=u.current,po(e.nodeType===8?e.parentNode:e),Yn(function(){Zr(n,u,t,o)}),u}function tl(e,n,t,o,r){var l=t._reactRootContainer;if(l){var i=l;if(typeof r=="function"){var a=r;r=function(){var u=zr(i);a.call(u)}}Zr(n,i,e,r)}else i=Gm(t,n,e,r,o);return zr(i)}dc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Vt(n.pendingLanes);t!==0&&(Xi(n,t|1),we(n,K()),!(L&6)&&(_t=K()+500,Nn()))}break;case 13:Yn(function(){var o=rn(e,1);if(o!==null){var r=he();Ue(o,e,1,r)}}),Ra(e,1)}};Gi=function(e){if(e.tag===13){var n=rn(e,134217728);if(n!==null){var t=he();Ue(n,e,134217728,t)}Ra(e,134217728)}};pc=function(e){if(e.tag===13){var n=_n(e),t=rn(e,n);if(t!==null){var o=he();Ue(t,e,n,o)}Ra(e,n)}};fc=function(){return z};mc=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};Jl=function(e,n,t){switch(n){case"input":if(Bl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var r=Qr(o);if(!r)throw Error(k(90));Bs(o),Bl(o,r)}}}break;case"textarea":qs(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}};ec=ka;nc=Yn;var Jm={usingClientEntryPoint:!1,Events:[To,it,Qr,Js,Zs,ka]},It={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zm={bundleType:It.bundleType,version:It.version,rendererPackageName:It.rendererPackageName,rendererConfig:It.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rc(e),e===null?null:e.stateNode},findFiberByHostInstance:It.findFiberByHostInstance||Xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Wr=Go.inject(Zm),Ye=Go}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jm;je.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Da(n))throw Error(k(200));return Km(e,n,null,t)};je.createRoot=function(e,n){if(!Da(e))throw Error(k(299));var t=!1,o="",r=bd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=ja(e,1,!1,null,null,t,!1,o,r),e[on]=n.current,po(e.nodeType===8?e.parentNode:e),new $a(n)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=rc(n),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Yn(e)};je.hydrate=function(e,n,t){if(!nl(n))throw Error(k(200));return tl(null,e,n,!0,t)};je.hydrateRoot=function(e,n,t){if(!Da(e))throw Error(k(405));var o=t!=null&&t.hydratedSources||null,r=!1,l="",i=bd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Ld(n,null,e,1,t??null,r,!1,l,i),e[on]=n.current,po(e),o)for(e=0;e<o.length;e++)t=o[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new el(n)};je.render=function(e,n,t){if(!nl(n))throw Error(k(200));return tl(null,e,n,!1,t)};je.unmountComponentAtNode=function(e){if(!nl(e))throw Error(k(40));return e._reactRootContainer?(Yn(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1};je.unstable_batchedUpdates=ka;je.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!nl(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return tl(e,n,t,!1,o)};je.version="18.3.1-next-f1338f8080-20240426";function zd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zd)}catch(e){console.error(e)}}zd(),zs.exports=je;var ee=zs.exports,Fd,Zu=ee;Fd=Fl.createRoot=Zu.createRoot,Fl.hydrateRoot=Zu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},So.apply(null,arguments)}var vn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vn||(vn={}));const es="popstate";function eg(e){e===void 0&&(e={});function n(r,l){let{pathname:i="/",search:a="",hash:u=""}=Gn(r.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Di("",{pathname:i,search:a,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){let i=r.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let u=r.location.href,s=u.indexOf("#");a=s===-1?u:u.slice(0,s)}return a+"#"+(typeof l=="string"?l:Fr(l))}function o(r,l){Na(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return tg(n,t,o,e)}function X(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Na(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function ng(){return Math.random().toString(36).substr(2,8)}function ns(e,n){return{usr:e.state,key:e.key,idx:n}}function Di(e,n,t,o){return t===void 0&&(t=null),So({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Gn(n):n,{state:t,key:n&&n.key||o||ng()})}function Fr(e){let{pathname:n="/",search:t="",hash:o=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Gn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let o=e.indexOf("?");o>=0&&(n.search=e.substr(o),e=e.substr(0,o)),e&&(n.pathname=e)}return n}function tg(e,n,t,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:l=!1}=o,i=r.history,a=vn.Pop,u=null,s=d();s==null&&(s=0,i.replaceState(So({},i.state,{idx:s}),""));function d(){return(i.state||{idx:null}).idx}function c(){a=vn.Pop;let _=d(),h=_==null?null:_-s;s=_,u&&u({action:a,location:S.location,delta:h})}function f(_,h){a=vn.Push;let p=Di(S.location,_,h);t&&t(p,_),s=d()+1;let g=ns(p,s),y=S.createHref(p);try{i.pushState(g,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(y)}l&&u&&u({action:a,location:S.location,delta:1})}function v(_,h){a=vn.Replace;let p=Di(S.location,_,h);t&&t(p,_),s=d();let g=ns(p,s),y=S.createHref(p);i.replaceState(g,"",y),l&&u&&u({action:a,location:S.location,delta:0})}function x(_){let h=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof _=="string"?_:Fr(_);return p=p.replace(/ $/,"%20"),X(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let S={get action(){return a},get location(){return e(r,i)},listen(_){if(u)throw new Error("A history only accepts one active listener");return r.addEventListener(es,c),u=_,()=>{r.removeEventListener(es,c),u=null}},createHref(_){return n(r,_)},createURL:x,encodeLocation(_){let h=x(_);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:v,go(_){return i.go(_)}};return S}var ts;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ts||(ts={}));function og(e,n,t){return t===void 0&&(t="/"),rg(e,n,t)}function rg(e,n,t,o){let r=typeof n=="string"?Gn(n):n,l=Ma(r.pathname||"/",t);if(l==null)return null;let i=Ad(e);lg(i);let a=null,u=yg(l);for(let s=0;a==null&&s<i.length;++s)a=mg(i[s],u);return a}function Ad(e,n,t,o){n===void 0&&(n=[]),t===void 0&&(t=[]),o===void 0&&(o="");let r=(l,i,a)=>{let u={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};u.relativePath.startsWith("/")&&(X(u.relativePath.startsWith(o),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(o.length));let s=Tn([o,u.relativePath]),d=t.concat(u);l.children&&l.children.length>0&&(X(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Ad(l.children,n,d,s)),!(l.path==null&&!l.index)&&n.push({path:s,score:pg(s,l.index),routesMeta:d})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))r(l,i);else for(let u of Id(l.path))r(l,i,u)}),n}function Id(e){let n=e.split("/");if(n.length===0)return[];let[t,...o]=n,r=t.endsWith("?"),l=t.replace(/\?$/,"");if(o.length===0)return r?[l,""]:[l];let i=Id(o.join("/")),a=[];return a.push(...i.map(u=>u===""?l:[l,u].join("/"))),r&&a.push(...i),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function lg(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:fg(n.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const ig=/^:[\w-]+$/,ag=3,ug=2,sg=1,cg=10,dg=-2,os=e=>e==="*";function pg(e,n){let t=e.split("/"),o=t.length;return t.some(os)&&(o+=dg),n&&(o+=ug),t.filter(r=>!os(r)).reduce((r,l)=>r+(ig.test(l)?ag:l===""?sg:cg),o)}function fg(e,n){return e.length===n.length&&e.slice(0,-1).every((o,r)=>o===n[r])?e[e.length-1]-n[n.length-1]:0}function mg(e,n,t){let{routesMeta:o}=e,r={},l="/",i=[];for(let a=0;a<o.length;++a){let u=o[a],s=a===o.length-1,d=l==="/"?n:n.slice(l.length)||"/",c=gg({path:u.relativePath,caseSensitive:u.caseSensitive,end:s},d),f=u.route;if(!c)return null;Object.assign(r,c.params),i.push({params:r,pathname:Tn([l,c.pathname]),pathnameBase:xg(Tn([l,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(l=Tn([l,c.pathnameBase]))}return i}function gg(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,o]=hg(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let l=r[0],i=l.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:o.reduce((s,d,c)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let S=a[c]||"";i=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const x=a[c];return v&&!x?s[f]=void 0:s[f]=(x||"").replace(/%2F/g,"/"),s},{}),pathname:l,pathnameBase:i,pattern:e}}function hg(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Na(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,u)=>(o.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),o]}function yg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Na(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ma(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,o=e.charAt(t);return o&&o!=="/"?null:e.slice(t)||"/"}function vg(e,n){n===void 0&&(n="/");let{pathname:t,search:o="",hash:r=""}=typeof e=="string"?Gn(e):e,l;return t?(t=Ud(t),t.startsWith("/")?l=rs(t.substring(1),"/"):l=rs(t,n)):l=n,{pathname:l,search:Sg(o),hash:Pg(r)}}function rs(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Ml(e,n,t,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Oa(e,n){let t=Cg(e);return n?t.map((o,r)=>r===t.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function La(e,n,t,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=Gn(e):(r=So({},e),X(!r.pathname||!r.pathname.includes("?"),Ml("?","pathname","search",r)),X(!r.pathname||!r.pathname.includes("#"),Ml("#","pathname","hash",r)),X(!r.search||!r.search.includes("#"),Ml("#","search","hash",r)));let l=e===""||r.pathname==="",i=l?"/":r.pathname,a;if(i==null)a=t;else{let c=n.length-1;if(!o&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),c-=1;r.pathname=f.join("/")}a=c>=0?n[c]:"/"}let u=vg(r,a),s=i&&i!=="/"&&i.endsWith("/"),d=(l||i===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(s||d)&&(u.pathname+="/"),u}const Ud=e=>e.replace(/\/\/+/g,"/"),Tn=e=>Ud(e.join("/")),xg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wd=["post","put","patch","delete"];new Set(Wd);const kg=["get",...Wd];new Set(kg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Po.apply(null,arguments)}const ba=P.createContext(null),_g=P.createContext(null),Mn=P.createContext(null),ol=P.createContext(null),un=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Hd=P.createContext(null);function Eg(e,n){let{relative:t}=n===void 0?{}:n;Rt()||X(!1);let{basename:o,navigator:r}=P.useContext(Mn),{hash:l,pathname:i,search:a}=Qd(e,{relative:t}),u=i;return o!=="/"&&(u=i==="/"?o:Tn([o,i])),r.createHref({pathname:u,search:a,hash:l})}function Rt(){return P.useContext(ol)!=null}function $t(){return Rt()||X(!1),P.useContext(ol).location}function Vd(e){P.useContext(Mn).static||P.useLayoutEffect(e)}function Bd(){let{isDataRoute:e}=P.useContext(un);return e?Ig():Tg()}function Tg(){Rt()||X(!1);let e=P.useContext(ba),{basename:n,future:t,navigator:o}=P.useContext(Mn),{matches:r}=P.useContext(un),{pathname:l}=$t(),i=JSON.stringify(Oa(r,t.v7_relativeSplatPath)),a=P.useRef(!1);return Vd(()=>{a.current=!0}),P.useCallback(function(s,d){if(d===void 0&&(d={}),!a.current)return;if(typeof s=="number"){o.go(s);return}let c=La(s,JSON.parse(i),l,d.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Tn([n,c.pathname])),(d.replace?o.replace:o.push)(c,d.state,d)},[n,o,i,l,e])}function jg(){let{matches:e}=P.useContext(un),n=e[e.length-1];return n?n.params:{}}function Qd(e,n){let{relative:t}=n===void 0?{}:n,{future:o}=P.useContext(Mn),{matches:r}=P.useContext(un),{pathname:l}=$t(),i=JSON.stringify(Oa(r,o.v7_relativeSplatPath));return P.useMemo(()=>La(e,JSON.parse(i),l,t==="path"),[e,i,l,t])}function Rg(e,n){return $g(e,n)}function $g(e,n,t,o){Rt()||X(!1);let{navigator:r}=P.useContext(Mn),{matches:l}=P.useContext(un),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let u=i?i.pathnameBase:"/";i&&i.route;let s=$t(),d;if(n){var c;let _=typeof n=="string"?Gn(n):n;u==="/"||(c=_.pathname)!=null&&c.startsWith(u)||X(!1),d=_}else d=s;let f=d.pathname||"/",v=f;if(u!=="/"){let _=u.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(_.length).join("/")}let x=og(e,{pathname:v}),S=Lg(x&&x.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Tn([u,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?u:Tn([u,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),l,t,o);return n&&S?P.createElement(ol.Provider,{value:{location:Po({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:vn.Pop}},S):S}function Dg(){let e=Ag(),n=wg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},n),t?P.createElement("pre",{style:r},t):null,null)}const Ng=P.createElement(Dg,null);class Mg extends P.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?P.createElement(un.Provider,{value:this.props.routeContext},P.createElement(Hd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Og(e){let{routeContext:n,match:t,children:o}=e,r=P.useContext(ba);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),P.createElement(un.Provider,{value:n},o)}function Lg(e,n,t,o){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),o===void 0&&(o=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=o)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,a=(r=t)==null?void 0:r.errors;if(a!=null){let d=i.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||X(!1),i=i.slice(0,Math.min(i.length,d+1))}let u=!1,s=-1;if(t&&o&&o.v7_partialHydration)for(let d=0;d<i.length;d++){let c=i[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(s=d),c.route.id){let{loaderData:f,errors:v}=t,x=c.route.loader&&f[c.route.id]===void 0&&(!v||v[c.route.id]===void 0);if(c.route.lazy||x){u=!0,s>=0?i=i.slice(0,s+1):i=[i[0]];break}}}return i.reduceRight((d,c,f)=>{let v,x=!1,S=null,_=null;t&&(v=a&&c.route.id?a[c.route.id]:void 0,S=c.route.errorElement||Ng,u&&(s<0&&f===0?(Ug("route-fallback"),x=!0,_=null):s===f&&(x=!0,_=c.route.hydrateFallbackElement||null)));let h=n.concat(i.slice(0,f+1)),p=()=>{let g;return v?g=S:x?g=_:c.route.Component?g=P.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=d,P.createElement(Og,{match:c,routeContext:{outlet:d,matches:h,isDataRoute:t!=null},children:g})};return t&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?P.createElement(Mg,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var qd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qd||{}),Yd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yd||{});function bg(e){let n=P.useContext(ba);return n||X(!1),n}function zg(e){let n=P.useContext(_g);return n||X(!1),n}function Fg(e){let n=P.useContext(un);return n||X(!1),n}function Kd(e){let n=Fg(),t=n.matches[n.matches.length-1];return t.route.id||X(!1),t.route.id}function Ag(){var e;let n=P.useContext(Hd),t=zg(),o=Kd();return n!==void 0?n:(e=t.errors)==null?void 0:e[o]}function Ig(){let{router:e}=bg(qd.UseNavigateStable),n=Kd(Yd.UseNavigateStable),t=P.useRef(!1);return Vd(()=>{t.current=!0}),P.useCallback(function(r,l){l===void 0&&(l={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Po({fromRouteId:n},l)))},[e,n])}const ls={};function Ug(e,n,t){ls[e]||(ls[e]=!0)}function Wg(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ni(e){let{to:n,replace:t,state:o,relative:r}=e;Rt()||X(!1);let{future:l,static:i}=P.useContext(Mn),{matches:a}=P.useContext(un),{pathname:u}=$t(),s=Bd(),d=La(n,Oa(a,l.v7_relativeSplatPath),u,r==="path"),c=JSON.stringify(d);return P.useEffect(()=>s(JSON.parse(c),{replace:t,state:o,relative:r}),[s,c,r,t,o]),null}function Qt(e){X(!1)}function Hg(e){let{basename:n="/",children:t=null,location:o,navigationType:r=vn.Pop,navigator:l,static:i=!1,future:a}=e;Rt()&&X(!1);let u=n.replace(/^\/*/,"/"),s=P.useMemo(()=>({basename:u,navigator:l,static:i,future:Po({v7_relativeSplatPath:!1},a)}),[u,a,l,i]);typeof o=="string"&&(o=Gn(o));let{pathname:d="/",search:c="",hash:f="",state:v=null,key:x="default"}=o,S=P.useMemo(()=>{let _=Ma(d,u);return _==null?null:{location:{pathname:_,search:c,hash:f,state:v,key:x},navigationType:r}},[u,d,c,f,v,x,r]);return S==null?null:P.createElement(Mn.Provider,{value:s},P.createElement(ol.Provider,{children:t,value:S}))}function Vg(e){let{children:n,location:t}=e;return Rg(Mi(n),t)}new Promise(()=>{});function Mi(e,n){n===void 0&&(n=[]);let t=[];return P.Children.forEach(e,(o,r)=>{if(!P.isValidElement(o))return;let l=[...n,r];if(o.type===P.Fragment){t.push.apply(t,Mi(o.props.children,l));return}o.type!==Qt&&X(!1),!o.props.index||!o.props.children||X(!1);let i={id:o.props.id||l.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(i.children=Mi(o.props.children,l)),t.push(i)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Oi.apply(null,arguments)}function Bg(e,n){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)!==-1)continue;t[o]=e[o]}return t}function Qg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qg(e,n){return e.button===0&&(!n||n==="_self")&&!Qg(e)}const Yg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Kg="6";try{window.__reactRouterVersion=Kg}catch{}const Xg="startTransition",is=Wp[Xg];function Gg(e){let{basename:n,children:t,future:o,window:r}=e,l=P.useRef();l.current==null&&(l.current=eg({window:r,v5Compat:!0}));let i=l.current,[a,u]=P.useState({action:i.action,location:i.location}),{v7_startTransition:s}=o||{},d=P.useCallback(c=>{s&&is?is(()=>u(c)):u(c)},[u,s]);return P.useLayoutEffect(()=>i.listen(d),[i,d]),P.useEffect(()=>Wg(o),[o]),P.createElement(Hg,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:i,future:o})}const Jg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Li=P.forwardRef(function(n,t){let{onClick:o,relative:r,reloadDocument:l,replace:i,state:a,target:u,to:s,preventScrollReset:d,viewTransition:c}=n,f=Bg(n,Yg),{basename:v}=P.useContext(Mn),x,S=!1;if(typeof s=="string"&&Zg.test(s)&&(x=s,Jg))try{let g=new URL(window.location.href),y=s.startsWith("//")?new URL(g.protocol+s):new URL(s),C=Ma(y.pathname,v);y.origin===g.origin&&C!=null?s=C+y.search+y.hash:S=!0}catch{}let _=Eg(s,{relative:r}),h=eh(s,{replace:i,state:a,target:u,preventScrollReset:d,relative:r,viewTransition:c});function p(g){o&&o(g),g.defaultPrevented||h(g)}return P.createElement("a",Oi({},f,{href:x||_,onClick:S||l?o:p,ref:t,target:u}))});var as;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(as||(as={}));var us;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(us||(us={}));function eh(e,n){let{target:t,replace:o,state:r,preventScrollReset:l,relative:i,viewTransition:a}=n===void 0?{}:n,u=Bd(),s=$t(),d=Qd(e,{relative:i});return P.useCallback(c=>{if(qg(c,t)){c.preventDefault();let f=o!==void 0?o:Fr(s)===Fr(d);u(e,{replace:f,state:r,preventScrollReset:l,relative:i,viewTransition:a})}},[s,u,d,o,r,t,e,l,i,a])}const nh="https://github.com/frankvane/vane-components";class th extends ko.Component{constructor(){super(...arguments);Va(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?m.jsxs("div",{className:"crash",role:"alert",children:[m.jsx("h3",{children:"这个页面炸了"}),m.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),m.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Xd(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function oh({demos:e,pathname:n}){var u;const{groups:t,entries:o,label:r}=e,l=(u=o.find(s=>n===`/demo/${s.meta.slug}`))==null?void 0:u.meta.group,[i,a]=P.useState(()=>{var d;const s=(d=t[0])==null?void 0:d.key;return Object.fromEntries(t.map(c=>[c.key,c.key===(l??s)]))});return P.useEffect(()=>{l&&a(s=>s[l]?s:{...s,[l]:!0})},[l]),m.jsxs("div",{className:"nav-section",children:[m.jsxs("div",{className:"nav-section-head",children:[m.jsx("span",{children:r}),m.jsxs("code",{children:[o.length," demos"]})]}),t.map(s=>{const d=o.filter(f=>f.meta.group===s.key);if(d.length===0)return null;const c=i[s.key]??!1;return m.jsxs("div",{className:"nav-group",children:[m.jsxs("button",{type:"button",className:`nav-group-head${l===s.key?" is-current":""}`,onClick:()=>a(f=>({...f,[s.key]:!c})),"aria-expanded":c,children:[m.jsx("span",{className:`nav-caret${c?" is-open":""}`,"aria-hidden":!0,children:"▸"}),s.label,m.jsx("code",{children:d.length})]}),c?m.jsx("div",{className:"nav-list",children:d.map(f=>m.jsxs(Li,{to:`/demo/${f.meta.slug}`,className:`nav-sub${n===`/demo/${f.meta.slug}`?" is-active":""}`,children:[m.jsx("em",{"aria-hidden":!0,children:Xd(e,f)}),f.meta.title]},f.meta.slug))}):null]},s.key)})]})}function rh({demos:e}){const{slug:n}=jg(),{entries:t,detail:o}=e,r=n?t.find(i=>i.meta.slug===n):void 0;if(!r)return m.jsx(Ni,{to:`/demo/${t[0].meta.slug}`,replace:!0});const l=t.indexOf(r)+1;return m.jsx(ko.Fragment,{children:o(r,l)},r.meta.slug)}function lh({config:e}){var d;const{pathname:n}=$t(),[t,o]=P.useState(!1),[r,l]=P.useState(!1);P.useEffect(()=>o(!1),[n]);const i=P.useCallback(()=>l(c=>!c),[]);P.useEffect(()=>{const c=f=>{const v=f.target,x=v&&(v.tagName==="INPUT"||v.tagName==="TEXTAREA"||v.isContentEditable);f.key==="Escape"&&o(!1),!x&&(f.key==="g"||f.key==="G")&&!f.metaKey&&!f.ctrlKey&&l(S=>!S)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]);const a=e.demos,u=P.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const c=n.replace(/^\/demo\/?/,""),f=a.entries.find(v=>v.meta.slug===c);return f?`demo ${Xd(a,f)} · ${f.meta.title}`:"demo · 逐项示例"},[n,e,a]),s=P.useMemo(()=>e.nav.map((c,f)=>({...c,no:String(f+1).padStart(2,"0")})),[e.nav]);return m.jsxs("div",{className:`shell${t?" is-nav-open":""}${r?" is-guides":""}`,children:[m.jsx("a",{className:"skip-link",href:"#main",onClick:c=>{c.preventDefault();const f=document.getElementById("main");f==null||f.setAttribute("tabindex","-1"),f==null||f.focus(),f==null||f.scrollIntoView({block:"start"})},children:"跳到内容"}),m.jsxs("aside",{className:"side","aria-label":"站点导航",children:[m.jsxs(Li,{to:"/",className:"brand",children:[m.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),m.jsxs("span",{children:[m.jsx("strong",{children:e.pkg}),m.jsx("em",{children:e.subtitle})]})]}),m.jsxs("nav",{children:[s.map(c=>m.jsxs(Li,{to:c.to,className:`nav-item${n===c.to?" is-active":""}`,"aria-current":n===c.to?"page":void 0,children:[m.jsx("em",{"aria-hidden":!0,children:c.no}),m.jsx("span",{children:c.label}),c.hint?m.jsx("code",{children:c.hint}):null]},c.to)),m.jsx(oh,{demos:e.demos,pathname:n})]}),m.jsxs("div",{className:"side-foot",children:[m.jsx("p",{children:e.footer[0]}),m.jsx("p",{className:"muted",children:e.footer[1]})]})]}),m.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>o(!1)}),m.jsxs("div",{className:"main",id:"main",children:[m.jsxs("header",{className:"topbar",children:[m.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>o(c=>!c),children:m.jsx("span",{"aria-hidden":!0})}),m.jsx("span",{className:"crumb",children:u}),m.jsxs("div",{className:"topbar-right",children:[(d=e.stats)==null?void 0:d.map(c=>m.jsxs("span",{className:"topbar-stat",title:c.title,children:[m.jsx("b",{children:c.value})," ",c.label]},c.label)),m.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":r,onClick:i,title:"显示栏位参考线（快捷键 G）",children:[m.jsx("i",{"aria-hidden":!0}),"guides"]}),m.jsx("a",{className:"topbar-link",href:e.sourceUrl??nh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),m.jsx("div",{className:"guides","aria-hidden":!0}),m.jsx(P.Suspense,{fallback:m.jsx("div",{className:"loading",children:"loading modules…"}),children:m.jsx(th,{children:m.jsxs(Vg,{children:[e.routes.map(c=>m.jsx(Qt,{path:c.path,element:c.element},c.path)),m.jsx(Qt,{path:"/demo",element:m.jsx(Ni,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),m.jsx(Qt,{path:"/demo/:slug",element:m.jsx(rh,{demos:e.demos})}),m.jsx(Qt,{path:"*",element:m.jsx(Ni,{to:"/",replace:!0})})]})})})]})]})}function ih({config:e}){return m.jsx(Gg,{children:m.jsx(lh,{config:e})})}const ah="modulepreload",uh=function(e,n){return new URL(e,n).href},ss={},za=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(s=>{if(s=uh(s,o),s in ss)return;ss[s]=!0;const d=s.endsWith(".css"),c=d?'[rel="stylesheet"]':"";if(!!o)for(let x=i.length-1;x>=0;x--){const S=i[x];if(S.href===s&&(!d||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":ah,d||(v.as="script"),v.crossOrigin="",v.href=s,u&&v.setAttribute("nonce",u),document.head.appendChild(v),d)return new Promise((x,S)=>{v.addEventListener("load",x),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${s}`)))})}))}function l(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return r.then(i=>{for(const a of i||[])a.status==="rejected"&&l(a.reason);return n().catch(l)})},sh={background:"#ffffff",color:"#1f2328",border:"1px solid #e8eaed",borderRadius:12,padding:16,fontFamily:"inherit"},Ar={display:"flex",gap:6,marginBottom:8},Gd={fontSize:11,lineHeight:1.5,padding:"1px 8px",borderRadius:4,background:"#fff1f3",color:"#d03050",border:"1px solid #f3c9d2"},Jd={fontSize:11,lineHeight:1.5,padding:"1px 8px",borderRadius:4,background:"#f2f3f5",color:"#5d636a",border:"1px solid #e8eaed"},ch={display:"flex",gap:12,alignItems:"stretch"},dh={flex:"none",minWidth:104,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,textAlign:"center",padding:12,borderRadius:8,background:"#fff1f3",border:"1px solid #f3c9d2"},ph={color:"#d03050",fontWeight:700,lineHeight:1.1,whiteSpace:"nowrap"},fh={fontSize:16,marginRight:2},cs={fontSize:30},mh={fontSize:14,marginLeft:2},gh={fontSize:12,color:"#57606a"},hh={flex:1,minWidth:0,display:"flex",flexDirection:"column",justifyContent:"center",gap:4},yh={fontSize:15,fontWeight:600,lineHeight:1.4,overflowWrap:"anywhere"},Zd={flex:"none",fontSize:12,color:"#57606a"},ep={display:"flex",alignItems:"center",flexWrap:"wrap",gap:6,marginTop:10,fontSize:12,color:"#57606a"},vh={overflowWrap:"anywhere"},Fa={flex:"none",fontSize:11,lineHeight:1.6,padding:"0 6px",borderRadius:4},Ch={...Fa,background:"#fff7e6",color:"#a54a00",border:"1px solid #ffd591"},xh={...Fa,background:"#fff1f0",color:"#b32d08",border:"1px solid #ffa39e"},Sh={...Fa,background:"#f2f3f5",color:"#5d636a",border:"1px solid #e8eaed"},Ph={marginTop:10,fontSize:12},np={color:"#57606a",marginBottom:4},tp={margin:0,paddingLeft:18,display:"grid",gap:2},op={color:"#1f2328",overflowWrap:"anywhere"},rp={marginTop:6,padding:0,border:0,background:"none",fontSize:12,color:"#1a66c2",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:4,fontFamily:"inherit"},wh={fontSize:10},Aa={marginTop:12},lp={width:"100%",padding:"9px 16px",border:0,borderRadius:8,fontSize:14,fontWeight:600,fontFamily:"inherit",cursor:"pointer",background:"#d03050",color:"#ffffff"},Ia={...lp,cursor:"not-allowed",background:"#f2f3f5",color:"#5d636a",border:"1px solid #e8eaed"},Ua=P.forwardRef((e,n)=>{const{coupon:t,slots:o,phase:r,children:l,containerClassName:i,containerStyle:a,onMount:u,onUnmount:s,debug:d,containerRefExternal:c}=e,f=P.useRef(null),v=c??f,[,x]=P.useState(0),[S,_]=P.useState(!1);P.useImperativeHandle(n,()=>({getContainer:()=>v.current,forceUpdate:()=>x(g=>g+1),getSize:()=>{var g,y;return{width:((g=v.current)==null?void 0:g.offsetWidth)??0,height:((y=v.current)==null?void 0:y.offsetHeight)??0}},getPhase:()=>r}),[r]),P.useEffect(()=>(d&&console.debug("[CouponCore] mounted"),_(!0),u==null||u(),()=>s==null?void 0:s()),[]);const h=t.amountType==="discount",p=t.thresholdText??(t.threshold&&t.threshold>0?`满${t.threshold}可用`:"无门槛");return m.jsxs("div",{ref:v,className:i?`vc-coupon ${i}`:"vc-coupon","data-testid":"coupon-root","data-phase":r??"",style:{position:"relative",boxSizing:"border-box",...sh,...a},children:[o==null?void 0:o.before,m.jsxs("div",{className:"vc-coupon__body","data-testid":"coupon-body",style:ch,children:[m.jsxs("div",{className:"vc-coupon__face",style:dh,children:[m.jsx("div",{className:"vc-coupon__amount","data-testid":"coupon-amount",style:ph,children:h?m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"vc-coupon__amount-value",style:cs,children:t.amount}),m.jsx("span",{className:"vc-coupon__amount-unit",style:mh,children:"折"})]}):m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"vc-coupon__amount-currency",style:fh,children:"¥"}),m.jsx("span",{className:"vc-coupon__amount-value",style:cs,children:t.amount})]})}),m.jsx("div",{className:"vc-coupon__threshold","data-testid":"coupon-threshold",style:gh,children:p})]}),m.jsx("div",{className:"vc-coupon__info",style:hh,children:m.jsx("div",{className:"vc-coupon__title","data-testid":"coupon-title",style:yh,children:t.title})})]}),o==null?void 0:o.after,o==null?void 0:o.footer,o==null?void 0:o.overlay,l,S?m.jsx("span",{"data-testid":"coupon-mounted",hidden:!0}):null]})});Ua.displayName="CouponCore";function kh(){const e=new Map,n=new Map,t=(i,a)=>{const u=e.get(i);if(u)for(const s of[...u])try{s(a)}catch(d){console.warn(`[PluginBus] handler error for event "${i}"`,d)}},o=(i,a)=>{let u=e.get(i);return u||(u=new Set,e.set(i,u)),u.add(a),()=>{u==null||u.delete(a)}},r=(i,a)=>{const u=s=>{a(s),l(i,u)};return o(i,u)},l=(i,a)=>{var u;if(!a){e.delete(i);return}(u=e.get(i))==null||u.delete(a)};return{emit:t,on:o,once:r,off:l,getData:i=>n.get(i),setData:(i,a)=>{const u=n.get(i);n.set(i,a),u!==a&&t(i,a)},deleteData:i=>{const a=n.has(i);n.delete(i),a&&t(i,void 0)},hasData:i=>n.has(i),getAll:()=>{const i={};return n.forEach((a,u)=>{i[u]=a}),i},clear:()=>{e.clear(),n.clear()}}}function ip(e){const n=new Map(e.map(a=>[a.name,a])),t=[];for(const a of e)for(const u of a.dependencies??[])n.has(u)||t.push(`${a.name} -> ${u}`);const o=[],r=new Set,l=[...e],i=a=>(a.dependencies??[]).every(u=>r.has(u)||!n.has(u));for(;l.length>0;){const a=l.filter(i);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${l.map(s=>s.name).join(" <-> ")}`);let u=a[0];for(const s of a)(s.priority??0)>(u.priority??0)&&(u=s);o.push(u),r.add(u.name),l.splice(l.indexOf(u),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),o}async function _h(e,n={}){const{timeout:t=3e3,name:o="anonymous",hook:r="unknown"}=n;if(!t||t<=0)return await e();let l;const i=new Promise((a,u)=>{l=setTimeout(()=>{u(new Error(`[vane/plugin-core] 插件 ${o} 的钩子 ${r} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),i])}finally{l&&clearTimeout(l)}}const Eh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function Th(e={}){const n=e.logger??console,t=e.sandbox??!0,o=e.timeout??3e3,r=[],l=[],i=new Map,a=()=>ip([...i.values()].filter(s=>s.enabled!==!1)),u=s=>{i.set(s.name,{...s,enabled:s.enabled??!0}),s.init&&Promise.resolve(s.init()).catch(d=>{n.warn(`[PluginManager] init failed for ${s.name}`,d)})};return{register:u,registerAll:s=>{for(const d of s)u(d)},unregister:s=>{const d=i.get(s);d&&(d.destroy&&Promise.resolve(d.destroy()).catch(c=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,c)}),i.delete(s))},getPlugin:s=>i.get(s),getAllPlugins:()=>[...i.values()],getEnabledPlugins:()=>[...i.values()].filter(s=>s.enabled!==!1),getExecutionOrder:a,enable:s=>{const d=i.get(s);d&&(d.enabled=!0)},disable:s=>{const d=i.get(s);d&&(d.enabled=!1)},has:s=>i.has(s),executeHook:async(s,d,...c)=>{var f,v;for(const x of a()){const S=(f=x.hooks)==null?void 0:f[s];if(typeof S!="function")continue;const _=x.sandbox??t,h=x.timeout??o;let p;try{p=_?await _h(()=>S(d,...c),{timeout:h,name:x.name,hook:String(s)}):await S(d,...c)}catch(g){if(r.push({plugin:x.name,hook:String(s),error:g}),n.warn(`[PluginManager] hook ${String(s)} failed in ${x.name}`,g),(v=e.onError)==null||v.call(e,x.name,String(s),g),s==="onError")break;continue}if(Eh.has(String(s))&&typeof p=="function"){l.push(p);continue}if(p===!1)return!1;if(p!==void 0&&p!==!0)return p}},clear:()=>{const s=l.splice(0);for(const d of s.reverse())try{d()}catch(c){n.warn("[PluginManager] cleanup failed",c)}for(const d of i.values())d.destroy&&Promise.resolve(d.destroy()).catch(c=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,c)});i.clear()},getErrors:()=>[...r]}}var jh=Object.defineProperty,Rh=(e,n,t)=>n in e?jh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,$h=(e,n,t)=>Rh(e,n+"",t);class Dh extends ko.Component{constructor(){super(...arguments),$h(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var o,r;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(r=(o=this.props).onError)==null||r.call(o,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let Jo=null;function Nh(e=!1){if(Jo&&!e)return Jo;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",l=/iPad|Tablet/i.test(r),i=/Mobile|Android|iPhone/i.test(r),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Jo={type:l?"tablet":i?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:n,viewportHeight:t,isTouchDevice:a,isRetina:o>=2},Jo}function Mh(e){const{plugins:n,props:t,data:o,initialState:r,containerRef:l,enableDebug:i=!1,managerOptions:a,extendContext:u}=e,s=P.useRef(null),d=l??s,c=P.useRef(null);c.current||(c.current=Th(a));const f=c.current,v=P.useRef(null);v.current||(v.current=kh());const x=v.current,S=P.useRef(new Map),[_,h]=P.useState(r??{}),[,p]=P.useState(0),g=P.useCallback(()=>p(F=>F+1),[]),y=P.useMemo(()=>Nh(),[]),C=n.map(F=>F.name).join("|");P.useLayoutEffect(()=>{f.clear(),f.registerAll(n),i&&console.debug("[vane/plugin-core] plugins registered:",C)},[C]),P.useLayoutEffect(()=>()=>{f.executeHook("onUnmount",E.current),f.clear()},[f]);const w=P.useMemo(()=>ip(n),[C]),E=P.useRef(null),T=P.useMemo(()=>{const F={props:t,data:o,bus:x,refs:{container:d,getContainer:()=>d.current},state:_,setState:q=>h(Ve=>({...Ve,...q})),shared:S.current,deviceInfo:y,forceUpdate:g,getSize:()=>{const q=d.current;return q?{width:q.offsetWidth,height:q.offsetHeight}:{width:0,height:0}},logger:console};return u?u(F):F},[t,o,_,y,x,u]);E.current=T;const b=P.useCallback(F=>{var Ve;let q=F;for(const Nt of w){const Xe=(Ve=Nt.hooks)==null?void 0:Ve.transformProps;typeof Xe=="function"&&(q=Xe(q))}return q},[w]),$=P.useCallback(F=>{var Ve;let q=F;for(const Nt of w){const Xe=(Ve=Nt.hooks)==null?void 0:Ve.transformData;typeof Xe=="function"&&(q=Xe(E.current,q))}return q},[w]),G=P.useCallback((F,...q)=>f.executeHook(F,E.current,...q),[f]);return{manager:f,bus:x,context:T,state:_,setState:T.setState,execute:G,transformProps:b,transformData:$,orderedPlugins:w}}P.createContext(null);function Zo(e,n,t){const{hook:o,position:r="after"}=t;return e.filter(l=>l.enabled!==!1).filter(l=>{var i;return typeof((i=l.hooks)==null?void 0:i[o])=="function"}).filter(l=>{var i;return(((i=l.config)==null?void 0:i.slotPosition)??"after")===r}).sort((l,i)=>{var a,u;return(((a=l.config)==null?void 0:a.order)??0)-(((u=i.config)==null?void 0:u.order)??0)||(i.priority??0)-(l.priority??0)}).map((l,i)=>{try{const a=l.hooks[o](n);return a==null?null:m.jsx(Dh,{children:a},`vane-slot-${l.name}-${i}`)}catch(a){return console.warn(`[vane/plugin-core] 插件 ${l.name} 的 ${o} 渲染失败`,a),null}})}function Oh(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:o,enableDebug:r=!1}=t,l=P.forwardRef((i,a)=>{const u=P.useRef(null),s=P.useCallback(C=>{const w=C.state??{};return{...C,coupon:i.coupon,phase:w.phase??"available",setPhase:T=>C.setState({phase:T}),validity:w.validity??null,rulesExpanded:w.rulesExpanded??!1,toggleRules:()=>C.setState({rulesExpanded:!(w.rulesExpanded??!1)})}},[i]),d=Mh({plugins:o,props:i,data:i.data,containerRef:u,extendContext:s,enableDebug:r}),c=d.context,f=P.useCallback((C,...w)=>d.execute(C,...w),[d.manager]);P.useEffect(()=>{f("onMount")},[f]);const v=P.useRef(i);P.useEffect(()=>{const C=v.current;C!==i&&(v.current=i,f("onPropsChange",C,i))},[i,f]);const x=c.phase,S=P.useRef(void 0);P.useEffect(()=>{const C=S.current;if(C===void 0){S.current=x;return}C!==x&&(S.current=x,f("onPhaseChange",x,C),d.bus.emit("coupon:phase",{phase:x,prev:C}))},[x,f]);const _=c.validity,h=P.useRef(void 0);P.useEffect(()=>{const C=h.current;h.current=_,_&&C!==_&&(f("onValidityChange",_),d.bus.emit("coupon:validity",{validity:_}))},[_,f]);const p={before:Zo(d.orderedPlugins,c,{hook:"renderHeader",position:"before"}),after:Zo(d.orderedPlugins,c,{hook:"renderHeader",position:"after"}),footer:Zo(d.orderedPlugins,c,{hook:"renderFooter"}),overlay:Zo(d.orderedPlugins,c,{hook:"renderOverlay"})},g=d.transformProps(i),y={...g,containerRefExternal:u,debug:g.debug??r,slots:p,phase:c.phase,onMount:()=>{var C;(C=g.onMount)==null||C.call(g)},onUnmount:()=>{var C;(C=g.onUnmount)==null||C.call(g)}};return m.jsx(e,{ref:a,...y})});return l.displayName="WithPlugins(CouponCore)",l}function D(e=[]){return Oh(Ua,e)}const Ol=D([]),Lh={slug:"quickstart",title:"裸券 · 零插件",group:"basic",intro:"不装任何插件：面额区（¥ / 折）+ 门槛 + 标题，这就是核心组件本体的全部。"};function bh(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Ol,{coupon:{id:"c1",title:"新人专享券",amount:10,threshold:99}}),m.jsx(Ol,{coupon:{id:"c2",title:"服饰品类折扣券",amount:8.5,amountType:"discount",threshold:0}}),m.jsx(Ol,{coupon:{id:"c3",title:"自定义门槛文案",amount:30,thresholdText:"限下单实物商品"}})]})}const zh=Object.freeze(Object.defineProperty({__proto__:null,default:bh,meta:Lh},Symbol.toStringTag,{value:"Module"})),Fh={idle:"未开始",available:"立即领取",claiming:"领取中…",claimed:"已领取",used:"已使用",soldout:"已抢光",expired:"已过期"},ds=new Set(["used","soldout","expired"]);function Ah(e={}){const n={...Fh,...e.texts},t={slotPosition:"after",order:10,...e},o=i=>{var s;const a=i.phase;if(ds.has(a))return null;const u=((s=i.state)==null?void 0:s.validity)??null;return u!=null&&u.expired?"expired":typeof e.stock=="number"&&e.stock<=0?"soldout":null},r=(i,a)=>{var u;((u=i.state)==null?void 0:u.phase)!==a&&i.setState({phase:a})},l=i=>{var s;const a=((s=i.state)==null?void 0:s.phase)??void 0;if(a===void 0){typeof e.stock=="number"&&e.stock<=0?i.setState({phase:"soldout"}):e.initialPhase&&i.setState({phase:e.initialPhase});return}const u=o(i);u&&u!==a&&r(i,u)};return{name:"claim-state",version:"0.1.0",description:"领取状态机：7 态相位流转（未开始/可领取/领取中/已领取/已使用/已抢空/已过期），联动有效期与库存自动降级",priority:32,config:t,hooks:{onMount:i=>{l(i)},onPropsChange:i=>{l(i)},onValidityChange:(i,a)=>{a.expired&&!ds.has(i.phase)&&r(i,"expired")},renderFooter:i=>{const a=i.phase,u=n[a]??a,s=a!=="available",d=async()=>{var f,v,x;if(a!=="available")return;const c=o(i);if(c){r(i,c);return}r(i,"claiming");try{const S=await((f=e.claim)==null?void 0:f.call(e));!S||S.ok!==!1?i.setState({phase:"claimed",claimedAt:Date.now()}):(r(i,"available"),(v=e.onClaimError)==null||v.call(e,S==null?void 0:S.reason))}catch(S){r(i,"available"),(x=e.onClaimError)==null||x.call(e,String(S))}};return m.jsx("div",{className:"vc-coupon__actions",style:Aa,"data-testid":"coupon-claim-area",children:m.jsx("button",{type:"button",style:a==="available"||a==="claiming"?lp:Ia,"data-testid":"coupon-claim-btn","data-phase":a,disabled:s,"aria-disabled":s,onClick:()=>void d(),children:u})})}}}}const Ih="ClaimStatePlugin",Uh="领取状态机：7 态相位流转（未开始/可领取/领取中/已领取/已使用/已抢空/已过期），点击触发异步领取，联动有效期与库存自动降级终态。",Wh="0.1.0",Hh=["coupon","claim","state-machine","footer"],Vh=[{name:"initialPhase",type:"CouponPhase",default:"-",description:"初始相位，默认 available（可领取）"},{name:"claim",type:"() => Promise<{ ok?: boolean; reason?: string } | void>",default:"-",description:"异步领取回调；返回 ok:false 视为失败，回退 available 并触发 onClaimError"},{name:"stock",type:"number",default:"-",description:"剩余库存；≤ 0 自动降级 soldout（已抢光）"},{name:"onPhaseChange",type:"(phase, prev) => void",default:"-",description:"相位变化回调"},{name:"onClaimError",type:"(reason?: string) => void",default:"-",description:"领取失败回调"},{name:"texts",type:"Partial<Record<CouponPhase, string>>",default:"-",description:"按钮文案按相位覆盖"}],Bh=["7 态状态机：idle / available / claiming / claimed / used / soldout / expired，终态不再响应点击","读取 state.validity（ValidityPlugin 写入）自动降级 expired；stock ≤ 0 降级 soldout","claimedAt 写入内核 state，供相对有效期锚定领取时刻"],Qh=["领券中心","营销活动页","会员权益券"],qh=["渲染 footer 槽（priority 32）；事件钩子写内核 state，不在渲染期 setState。","expired 只覆盖非终态：已核销（used）的券不会被过期判定打回。"],Yh="const Coupon = createCouponCard([createClaimStatePlugin({ claim: async () => ({ ok: true }) })]);",ap={name:Ih,description:Uh,since:Wh,tags:Hh,config:Vh,features:Bh,useCases:Qh,notes:qh,example:Yh},Z=Object.assign(Ah,{meta:ap}),Kh=D([Z({claim:async()=>(await new Promise(e=>setTimeout(e,600)),{ok:!0})})]),Xh=D([Z({claim:async()=>(await new Promise(e=>setTimeout(e,600)),{ok:!1,reason:"超出限领数量"}),onClaimError:e=>console.warn("[claim 失败]",e)})]),Gh={slug:"claim-state",title:"领取状态机",group:"basic",intro:"点击领取：available → claiming → claimed。第二张卡模拟领取失败，回退 available（终态 used/soldout/expired 不再响应点击）。"};function Jh(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Kh,{coupon:{id:"cs1",title:"点击领取试试 · 成功流",amount:20,threshold:199}}),m.jsx(Xh,{coupon:{id:"cs2",title:"点击领取试试 · 失败回退流",amount:5,threshold:0}})]})}const Zh=Object.freeze(Object.defineProperty({__proto__:null,default:Jh,meta:Gh},Symbol.toStringTag,{value:"Module"})),er=24*60*60*1e3,nr=e=>{const n=new Date(e),t=o=>String(o).padStart(2,"0");return`${n.getFullYear()}.${t(n.getMonth()+1)}.${t(n.getDate())}`};function ey(e={}){const n=e.urgentDays??3,t=e.now??(()=>Date.now()),o={slotPosition:"after",order:10,...e},r=a=>{var d;const u=a.coupon,s=t();if(typeof u.validTo=="number"){const c=typeof u.validFrom=="number"?s<u.validFrom:!1,f=s>u.validTo,v=Math.max(0,u.validTo-s),x=Math.ceil(v/er),S=typeof u.validFrom=="number"?`${nr(u.validFrom)} - ${nr(u.validTo)}`:`${nr(u.validTo)} 前`;return{mode:"absolute",valid:!f&&!c,expired:f,notStarted:c,remainingMs:v,text:S,urgent:!f&&!c&&x<=n}}if(typeof u.validDays=="number"){const c=((d=a.state)==null?void 0:d.claimedAt)??void 0;if(typeof c!="number")return{mode:"relative",valid:!0,expired:!1,notStarted:!1,remainingMs:null,text:`领取后 ${u.validDays} 天内有效`,urgent:!1};const f=c+u.validDays*er,v=s>f,x=Math.max(0,f-s),S=Math.ceil(x/er);return{mode:"relative",valid:!v,expired:v,notStarted:!1,remainingMs:x,text:`${nr(c)} 领取，${u.validDays} 天内有效`,urgent:!v&&S<=n}}return null},l=(a,u)=>JSON.stringify(a)===JSON.stringify(u),i=a=>{var d;const u=r(a),s=((d=a.state)==null?void 0:d.validity)??null;u!==null&&(l(u,s)||a.setState({validity:u}))};return{name:"validity",version:"0.1.0",description:"有效期判定：绝对（validFrom/validTo）/ 相对（领取后 N 天）双模式，紧迫态强调、过期写 state 供领取状态机联动",priority:23,config:o,hooks:{onMount:a=>{i(a)},onPropsChange:a=>{i(a)},onPhaseChange:a=>{i(a)},renderHeader:a=>{const u=a.validity;if(!u||u.mode==="none")return null;const s=u.remainingMs!==null?Math.ceil(u.remainingMs/er):null;return m.jsxs("div",{style:ep,"data-testid":"coupon-validity","data-mode":u.mode,"data-expired":u.expired?"true":"false","data-urgent":u.urgent?"true":"false",children:[m.jsx("span",{style:Zd,children:"有效期"}),m.jsx("span",{style:vh,children:u.text}),u.expired?m.jsx("span",{style:xh,children:"已过期"}):u.urgent&&s!==null?m.jsxs("span",{style:Ch,children:["仅剩 ",s," 天"]}):u.notStarted?m.jsx("span",{style:Sh,children:"未开始"}):null]})}}}}const ny="ValidityPlugin",ty="有效期判定：绝对（validFrom/validTo）与相对（领取后 N 天）双模式，紧迫态（剩余 ≤ N 天）强调展示，过期结果写内核 state 供领取状态机联动。",oy="0.1.0",ry=["coupon","validity","date","after"],ly=[{name:"now",type:"() => number",default:"Date.now",description:"当前时钟，可注入固定值用于测试/演示"},{name:"urgentDays",type:"number",default:"3",description:"紧迫阈值：剩余 ≤ N 天显示「仅剩 X 天」强调角标"}],iy=["absolute：validFrom/validTo 区间展示 + 未开始/已过期判定","relative：未领取显示「领取后 N 天内有效」，已领取从 state.claimedAt 起算","产出 state.validity（changed 才写），ClaimStatePlugin 借 onValidityChange 降级 expired"],ay=["固定活动周期的券","领取后 N 天生效的券"],uy=["渲染 after 槽（priority 23 > RuleExpand 21），显示在规则区上方。","两种模式都未声明时不渲染也不写 state。"],sy="const Coupon = createCouponCard([createValidityPlugin({ urgentDays: 3 })]);",up={name:ny,description:ty,since:oy,tags:ry,config:ly,features:iy,useCases:ay,notes:uy,example:sy},sn=Object.assign(ey,{meta:up}),Ll=24*60*60*1e3,bl=Date.now(),cy=D([sn({urgentDays:3}),Z({claim:async()=>({ok:!0})})]),dy=D([sn(),Z({claim:async()=>({ok:!0})})]),py=D([sn(),Z({claim:async()=>({ok:!0})})]),fy={slug:"validity",title:"有效期判定",group:"plugin",intro:"绝对（validFrom/validTo）与相对（领取后 N 天）双模式；紧迫态强调展示；过期的券会被状态机自动压到「已过期」。"};function my(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(cy,{coupon:{id:"v1",title:"紧迫态 · 仅剩 2 天",amount:15,threshold:99,validFrom:bl-10*Ll,validTo:bl+2*Ll}}),m.jsx(dy,{coupon:{id:"v2",title:"过期联动 · 按钮自动变已过期",amount:50,threshold:299,validTo:bl-1*Ll}}),m.jsx(py,{coupon:{id:"v3",title:"相对有效期 · 领取后 7 天",amount:8,threshold:0,validDays:7}})]})}const gy=Object.freeze(Object.defineProperty({__proto__:null,default:my,meta:fy},Symbol.toStringTag,{value:"Module"}));function hy(e={}){const n=e.collapsedCount??1,t=e.expandText??"展开",o=e.collapseText??"收起",r=e.showCount??!0,l=e.title??"使用规则";return{name:"rule-expand",version:"0.1.0",description:"规则展开/收起：使用规则按条数折叠（默认 1 条），展开态写内核 state，可被宿主/其他插件复位",priority:21,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:a=>{const u=a.coupon.rules??[];if(u.length===0)return null;const s=a.rulesExpanded,d=s?u:u.slice(0,n),c=u.length-d.length;return m.jsxs("div",{style:Ph,"data-testid":"coupon-rules","data-expanded":s?"true":"false",children:[l?m.jsx("div",{style:np,children:l}):null,m.jsx("ul",{style:tp,children:d.map((f,v)=>m.jsx("li",{style:op,"data-testid":`coupon-rule-${v}`,children:f},v))}),u.length>n?m.jsxs("button",{type:"button",style:rp,"data-testid":"coupon-rules-toggle","aria-expanded":s,onClick:()=>a.toggleRules(),children:[s?o:r?`${t} (${c} 项)`:t,m.jsx("span",{"aria-hidden":"true",style:wh,children:s?"▲":"▼"})]}):null]})}}}}const yy="RuleExpandPlugin",vy="规则展开/收起：使用规则按条数折叠（默认 1 条），展开态写内核 state，可被宿主复位；不用 line-clamp 避免纵向裁切。",Cy="0.1.0",xy=["coupon","rules","expand","after"],Sy=[{name:"collapsedCount",type:"number",default:"1",description:"折叠态显示的规则条数"},{name:"expandText",type:"string",default:'"展开"',description:"展开按钮文案"},{name:"collapseText",type:"string",default:'"收起"',description:"收起按钮文案"},{name:"showCount",type:"boolean",default:"true",description:"按钮是否带剩余条数（「展开 (3 项)」）"},{name:"title",type:"string",default:'"使用规则"',description:"区域标题；传空字符串隐藏"}],Py=["折叠态显示前 collapsedCount 条 + 「展开 (N 项)」，展开后全量 + 「收起」","展开态写内核 state.rulesExpanded（toggleRules）","rules 为空渲染 null；无更多条目时不渲染切换按钮"],wy=["规则条目多的营销券","需要默认收纳的紧凑版面"],ky=["渲染 after 槽（priority 21 < Validity 23），显示在有效期下方。","按条数截断而非 line-clamp：tasks/28 几何体检证明 line-clamp 是纵向裁切重灾区。"],_y="const Coupon = createCouponCard([createRuleExpandPlugin({ collapsedCount: 2 })]);",sp={name:yy,description:vy,since:Cy,tags:xy,config:Sy,features:Py,useCases:wy,notes:ky,example:_y},On=Object.assign(hy,{meta:sp}),ps=["本券仅限平台在售自营商品使用","不与店铺优惠券叠加，可与运费券叠加","订单部分退款时，按比例退回券面金额","单笔订单最多使用 1 张，核销后不找零","如在有效期内未使用，券自动作废且不予补发"],Ey=D([On({collapsedCount:1})]),Ty=D([On({collapsedCount:2,title:""})]),jy={slug:"rules",title:"规则展开 / 收起",group:"plugin",intro:"按条数折叠（不是 line-clamp——tasks/28 证明那是纵向裁切重灾区）。点击展开/收起，展开态写内核 state。"};function Ry(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Ey,{coupon:{id:"r1",title:"默认折叠 1 条",amount:25,threshold:199,rules:ps}}),m.jsx(Ty,{coupon:{id:"r2",title:"折叠 2 条 · 无标题",amount:60,threshold:399,rules:ps}})]})}const $y=Object.freeze(Object.defineProperty({__proto__:null,default:Ry,meta:jy},Symbol.toStringTag,{value:"Module"}));function Dy(e={}){const n=e.text??"可叠加",t=e.notStackableText??"不可叠加";return{name:"stack",version:"0.1.0",description:"叠加态角标：按 coupon.stackable 渲染「可叠加/不可叠加」角标，可强制展示",priority:12,config:{slotPosition:"before",order:10,...e},hooks:{renderHeader:r=>{const l=r.coupon.stackable;return e.always||l===!0?m.jsx("div",{style:Ar,"data-testid":"coupon-badges",children:m.jsx("span",{style:Gd,"data-testid":"coupon-stack-badge","data-stackable":"true",children:n})}):e.showWhenNotStackable&&l===!1?m.jsx("div",{style:Ar,"data-testid":"coupon-badges",children:m.jsx("span",{style:Jd,"data-testid":"coupon-stack-badge","data-stackable":"false",children:t})}):null}}}}const Ny="StackPlugin",My="叠加态角标：按 coupon.stackable 渲染「可叠加」强调角标或「不可叠加」灰标，可强制展示；渲染在票面顶部角标区。",Oy="0.1.0",Ly=["coupon","stack","badge","before"],by=[{name:"text",type:"string",default:'"可叠加"',description:"可叠加角标文案"},{name:"notStackableText",type:"string",default:'"不可叠加"',description:"不可叠加角标文案"},{name:"showWhenNotStackable",type:"boolean",default:"false",description:"stackable === false 时是否渲染灰标"},{name:"always",type:"boolean",default:"false",description:"不看数据字段强制渲染可叠加角标"}],zy=["数据驱动：coupon.stackable === true → 强调角标；false + showWhenNotStackable → 灰标","always: true 强制渲染（组合示例/纯展示场景）"],Fy=["可与店铺券/运费券叠加的券","需要明示叠加限制的营销位"],Ay=['渲染 before 槽（priority 12）；config 必须显式 slotPosition: "before"，缺省会被 renderPluginSlot 落到 after。'],Iy="const Coupon = createCouponCard([createStackPlugin({ showWhenNotStackable: true })]);",cp={name:Ny,description:My,since:Oy,tags:Ly,config:by,features:zy,useCases:Fy,notes:Ay,example:Iy},He=Object.assign(Dy,{meta:cp}),Uy=D([He()]),Wy=D([He({showWhenNotStackable:!0})]),Hy=D([He({always:!0})]),Vy={slug:"stack",title:"叠加态角标",group:"plugin",intro:"数据驱动：coupon.stackable === true 渲染「可叠加」强调角标；false + showWhenNotStackable 渲染灰标；always 强制渲染。"};function By(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Uy,{coupon:{id:"s1",title:"可与运费券叠加",amount:18,threshold:128,stackable:!0}}),m.jsx(Wy,{coupon:{id:"s2",title:"独享券 · 不可叠加",amount:40,threshold:259,stackable:!1}}),m.jsx(Hy,{coupon:{id:"s3",title:"always 强制渲染（数据未声明）",amount:6,threshold:0}})]})}const Qy=Object.freeze(Object.defineProperty({__proto__:null,default:By,meta:Vy},Symbol.toStringTag,{value:"Module"})),fs=D([Z({claim:async()=>({ok:!0})}),sn({urgentDays:3}),On({collapsedCount:1}),He({showWhenNotStackable:!0})]),ms=24*60*60*1e3,gs=Date.now(),qy={slug:"combined",title:"四插件合体",group:"advanced",intro:"before 角标 / after 有效期+规则 / footer 领取按钮。priority：claim-state 32 · validity 23 · rule-expand 21 · stack 12。"};function Yy(){const e={id:"full1",title:"全插件合体 · 紧迫可领",amount:88,threshold:599,stackable:!0,validFrom:gs-12*ms,validTo:gs+2*ms,rules:["仅限「家电焕新」活动商品使用","可与运费券叠加，不与店铺券叠加","核销后部分退款按比例退回"]},n={id:"full2",title:"全插件合体 · 不可叠加",amount:12,threshold:0,stackable:!1,validDays:7,rules:["全场通用","有效期自领取日起算"]};return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(fs,{coupon:e}),m.jsx(fs,{coupon:n})]})}const Ky=Object.freeze(Object.defineProperty({__proto__:null,default:Yy,meta:qy},Symbol.toStringTag,{value:"Module"})),Xy=D([Z({stock:0}),He()]),Gy=D([Z({stock:3,claim:async()=>(await new Promise(e=>setTimeout(e,500)),{ok:!0})}),He()]),Jy={slug:"limited",title:"限量 / 抢空",group:"advanced",intro:"stock ≤ 0 挂载即「已抢光」（终态）；有限库存正常领取。过期判定同理：expired 优先级低于已核销 used。"};function Zy(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Xy,{coupon:{id:"l1",title:"已抢空的券",amount:100,threshold:999}}),m.jsx(Gy,{coupon:{id:"l2",title:"限量抢购中",amount:66,threshold:699}})]})}const ev=Object.freeze(Object.defineProperty({__proto__:null,default:Zy,meta:Jy},Symbol.toStringTag,{value:"Module"}));function nv(e={}){const n=e.urgentPct??20,t=e.showRemaining??!0;return{name:"progress",version:"0.1.0",description:"领取进度条：按 total/claimed 渲染已抢百分比进度条，剩余 ≤ N% 换紧迫色，数据轮询即刷新",priority:20,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:r=>{const l=r.coupon,i=e.total??l.total,a=e.claimed??l.claimed;if(typeof i!="number"||i<=0||typeof a!="number"||a<0)return null;const u=Math.min(100,Math.round(a/i*100)),s=Math.max(0,i-a),d=100-u<=n;let c=`已抢 ${u}%`;return s===0?c="已抢完":d&&t&&(c+=` · 仅剩 ${s} 张`),m.jsxs("div",{className:"vc-coupon__progress",style:{marginTop:10,fontSize:12,color:ep.color},"data-testid":"coupon-progress","data-percent":String(u),"data-urgent":d?"true":"false",children:[m.jsx("div",{style:{height:6,borderRadius:3,background:"#f2f3f5",overflow:"hidden"},children:m.jsx("div",{style:{width:`${u}%`,height:"100%",borderRadius:3,background:d?"#a54a00":"#d03050",transition:"width 0.3s ease"}})}),m.jsx("div",{style:{marginTop:4,color:d?"#a54a00":"#57606a"},children:c})]})}}}}const tv="ProgressPlugin",ov="领取进度条：按 total/claimed 渲染已抢百分比进度条，剩余 ≤ N% 换紧迫色，接口轮询数据刷新即更新。",rv="0.1.0",lv=["coupon","progress","stock","after"],iv=[{name:"total",type:"number",default:"coupon.total",description:"发放总量"},{name:"claimed",type:"number",default:"coupon.claimed",description:"已领取数"},{name:"urgentPct",type:"number",default:"20",description:"剩余 ≤ N% 标记紧迫"},{name:"showRemaining",type:"boolean",default:"true",description:"展示「仅剩 N 张」替代百分比"}],av=["进度条宽度随 claimed/total 变化","紧迫色 #a54a00（对比度 5.6:1）","抢完显示「已抢完」"],uv=["限量抢购券","发券预算监控"],sv="const Coupon = createCouponCard([createProgressPlugin({ urgentPct: 20 })]);",dp={name:tv,description:ov,since:rv,tags:lv,config:iv,features:av,useCases:uv,example:sv},Jn=Object.assign(nv,{meta:dp}),cv=D([Jn()]),dv=D([Jn({urgentPct:30})]),pv=D([Jn()]),fv={slug:"progress",title:"抢购进度条",group:"plugin",intro:"total/claimed 驱动进度条与「已抢 X%」；剩余占比低于 urgentPct（默认 20）转紧迫色并追加「仅剩 N 张」；抢完后显示「已抢完」。"};function mv(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(cv,{coupon:{id:"pg1",title:"常规进度 · 30/100",amount:10,threshold:0,total:100,claimed:30}}),m.jsx(dv,{coupon:{id:"pg2",title:"紧迫进度 · 85/100（urgentPct 30）",amount:50,threshold:299,total:100,claimed:85}}),m.jsx(pv,{coupon:{id:"pg3",title:"已抢完 · 100/100",amount:10,threshold:0,total:100,claimed:100}})]})}const gv=Object.freeze(Object.defineProperty({__proto__:null,default:mv,meta:fv},Symbol.toStringTag,{value:"Module"}));function hv(e={}){const n=e.purchasedCount??0,t={slotPosition:"after",order:10,...e},o=r=>{const l=e.quota??r.coupon.quota,i=typeof l=="number"?n>=l:!1;return{quota:l,reached:i}};return{name:"quota",version:"0.1.0",description:"每人限领：读 coupon.quota 与已领数渲染限领提示，超限写 state.quotaReached 供领取按钮门控",priority:19,config:t,hooks:{onMount:r=>{var a;const{quota:l,reached:i}=o(r);i&&(r.setState({quotaReached:!0}),(a=e.onExceed)==null||a.call(e,l))},onPropsChange:r=>{var a;const{quota:l,reached:i}=o(r);r.setState({quotaReached:i}),i&&((a=e.onExceed)==null||a.call(e,l))},renderHeader:r=>{const{quota:l,reached:i}=o(r);return typeof l!="number"?null:m.jsxs("div",{style:{marginTop:10,fontSize:12,padding:"4px 8px",borderRadius:4,background:i?"#fff1f0":"#f6ffed",color:i?"#b32d08":"#237a06",border:`1px solid ${i?"#ffa39e":"#b7eb8f"}`},"data-testid":"coupon-quota","data-reached":i?"true":"false",children:["每人限领 ",l," 张（已领 ",n,"）",i?" · 已达限领上限":""]})}}}}const yv="QuotaPlugin",vv="每人限领：读 coupon.quota 与已领数渲染限领提示，超限写 state.quotaReached 供宿主门控领取按钮。",Cv="0.1.0",xv=["coupon","quota","limit","after"],Sv=[{name:"quota",type:"number",default:"coupon.quota",description:"每人限领张数"},{name:"purchasedCount",type:"number",default:"0",description:"当前用户已领张数"},{name:"onExceed",type:"() => void",default:"-",description:"超限回调"}],Pv=["未声明 quota 视为不限领（渲染 null）","超限提示条红字","state.quotaReached 写内核 state"],wv=["每人限领 N 张的活动券","会员等级限领"],kv="const Coupon = createCouponCard([createQuotaPlugin({ purchasedCount: 1 })]);",pp={name:yv,description:vv,since:Cv,tags:xv,config:Sv,features:Pv,useCases:wv,example:kv},Zn=Object.assign(hv,{meta:pp}),_v=D([Zn({quota:3,purchasedCount:1,onExceed:()=>console.warn("[quota] 超限")})]),Ev=D([Zn({quota:2,purchasedCount:2,onExceed:e=>console.warn("[quota] 已达上限",e)})]),Tv={slug:"quota",title:"限领提示",group:"plugin",intro:"config.quota + purchasedCount 驱动限领提示条：未超限绿字「还可领 N 张」，超限红字「已达限领上限」并触发 onExceed；未声明 quota 时插件不渲染。"};function jv(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(_v,{coupon:{id:"qt1",title:"还可领 · 1/3",amount:15,threshold:99}}),m.jsx(Ev,{coupon:{id:"qt2",title:"已超限 · 2/2",amount:15,threshold:99}})]})}const Rv=Object.freeze(Object.defineProperty({__proto__:null,default:jv,meta:Tv},Symbol.toStringTag,{value:"Module"})),$v=e=>{const n=Math.max(0,Math.ceil(e/1e3)),t=String(Math.floor(n/3600)).padStart(2,"0"),o=String(Math.floor(n%3600/60)).padStart(2,"0"),r=String(n%60).padStart(2,"0");return`${t}:${o}:${r}`};function Dv(e){const n=e.tickMs??1e3;return{name:"countdown",version:"0.1.0",description:"开抢倒计时：startAt 未到时渲染「距开抢 HH:MM:SS」，到点可自动开抢（autoStart）并触发 onFire",priority:15,config:{slotPosition:"before",order:10,...e},hooks:{onMount:o=>{const r=()=>{var a,u;const i=e.startAt-Date.now();o.setState({countdown:Math.max(0,i)}),i>0?((a=e.onCountdown)==null||a.call(e,i),l=window.setTimeout(r,n)):((u=e.onFire)==null||u.call(e),e.autoStart&&o.setPhase("available"))};let l=window.setTimeout(r,0);return()=>window.clearTimeout(l)},renderHeader:o=>{var l;const r=(l=o.state)==null?void 0:l.countdown;return typeof r!="number"||r<=0?null:m.jsx("div",{style:Ar,"data-testid":"coupon-countdown",children:m.jsxs("span",{style:{...Gd,background:"#fff7e6",color:"#a54a00",border:"1px solid #ffd591",fontFamily:"var(--ff-mono, monospace)"},"data-testid":"coupon-countdown-value",children:["距开抢 ",$v(r)]})})}}}}const Nv="CountdownPlugin",Mv="开抢倒计时：startAt 未到时渲染「距开抢 HH:MM:SS」，到点可自动开抢（autoStart）并触发 onFire。",Ov="0.1.0",Lv=["coupon","countdown","timer","before"],bv=[{name:"startAt",type:"number",default:"-",description:"开抢时间（epoch ms），必填"},{name:"autoStart",type:"boolean",default:"false",description:"到点自动进入 available"},{name:"tickMs",type:"number",default:"1000",description:"定时精度"},{name:"onCountdown",type:"(remainingMs: number) => void",default:"-",description:"每跳回调"},{name:"onFire",type:"() => void",default:"-",description:"倒计时归零回调"}],zv=["onMount 挂 setTimeout 链（返回 cleanup，内核逆序执行）","剩余写内核 state.countdown","与 RemindPlugin 配合覆盖「未开始」全场景"],Fv=["定时开抢活动","整点发券"],Av="const Coupon = createCouponCard([createCountdownPlugin({ startAt: Date.parse('2026-11-01T10:00:00'), autoStart: true })]);",fp={name:Nv,description:Mv,since:Ov,tags:Lv,config:bv,features:zv,useCases:Fv,example:Av},Dt=Object.assign(Dv,{meta:fp}),Iv=D([Dt({startAt:Date.now()+2e4,tickMs:1e3,autoStart:!0,onFire:()=>console.log("[countdown] 开抢！")})]),Uv={slug:"countdown",title:"开抢倒计时",group:"plugin",intro:"startAt 未到时渲染「距开抢 HH:MM:SS」；到点 autoStart 自动进入 available（本页 20 秒后开抢），并触发 onFire。"};function Wv(){return m.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:m.jsx(Iv,{coupon:{id:"cd1",title:"20 秒后自动开抢",amount:30,threshold:199}})})}const Hv=Object.freeze(Object.defineProperty({__proto__:null,default:Wv,meta:Uv},Symbol.toStringTag,{value:"Module"}));function Vv(e={}){return{name:"channel",version:"0.1.0",description:"渠道限定角标：按 coupon.channels / config.channels 渲染一组渠道小标",priority:14,config:{slotPosition:"before",order:20,...e},hooks:{renderHeader:t=>{const o=e.channels??t.coupon.channels;return!o||o.length===0?null:m.jsx("div",{style:Ar,"data-testid":"coupon-channels",children:o.map(r=>m.jsx("span",{style:Jd,"data-testid":"coupon-channel-badge",children:r},r))})}}}}const Bv="ChannelPlugin",Qv="渠道限定角标：按 coupon.channels / config.channels 渲染一组渠道小标（仅 APP / 仅新客…）。",qv="0.1.0",Yv=["coupon","channel","badge","before"],Kv=[{name:"channels",type:"string[]",default:"coupon.channels",description:"渠道标签列表"}],Xv=["多渠道并列渲染","与 StackPlugin 同占 before 槽（order 20 排后）"],Gv=["仅 APP 领取","新客专享"],Jv='const Coupon = createCouponCard([createChannelPlugin({ channels: ["仅 APP"] })]);',mp={name:Bv,description:Qv,since:qv,tags:Yv,config:Kv,features:Xv,useCases:Gv,example:Jv},Ro=Object.assign(Vv,{meta:mp}),Zv=D([Ro()]),e0=D([Ro({channels:["会员专享","限领 1 次"]})]),n0={slug:"channel",title:"渠道小标",group:"plugin",intro:"渠道灰标组：coupon.channels 数据驱动与 config.channels 配置驱动双通道，config 优先；渲染在 before 槽、排在叠加标之后。"};function t0(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Zv,{coupon:{id:"ch1",title:"数据驱动渠道",amount:10,threshold:0,channels:["仅 APP","仅新客"]}}),m.jsx(e0,{coupon:{id:"ch2",title:"配置驱动渠道",amount:20,threshold:99}})]})}const o0=Object.freeze(Object.defineProperty({__proto__:null,default:t0,meta:n0},Symbol.toStringTag,{value:"Module"}));function r0(e={}){const n=e.text??"分享好友";return{name:"share",version:"0.1.0",description:"分享按钮：footer 槽渲染次按钮，分享能力由 onShare 回调提供",priority:31,config:{slotPosition:"after",order:10,...e},hooks:{renderFooter:o=>{if(!e.onShare)return null;const r=async()=>{var l;await((l=e.onShare)==null?void 0:l.call(e,o.coupon)),o.forceUpdate()};return m.jsx("div",{style:Aa,children:m.jsx("button",{type:"button",style:Ia,"data-testid":"coupon-share-btn",onClick:()=>void r(),children:n})})}}}}const l0="SharePlugin",i0="分享按钮：footer 槽渲染次按钮，分享能力由 onShare 回调提供；未配置 onShare 不渲染。",a0="0.1.0",u0=["coupon","share","footer"],s0=[{name:"text",type:"string",default:'"分享好友"',description:"按钮文案"},{name:"onShare",type:"() => void | Promise<void>",default:"-",description:"分享回调（必配才渲染）"}],c0=["muted 次按钮样式，排在领取按钮下方","onShare 后 forceUpdate 刷新闭包状态"],d0=["分享裂变领券","好友代领"],p0="const Coupon = createCouponCard([createSharePlugin({ onShare: () => tracker.share() })]);",gp={name:l0,description:i0,since:a0,tags:u0,config:s0,features:c0,useCases:d0,example:p0},rl=Object.assign(r0,{meta:gp}),f0=D([rl({onShare:e=>console.log("[share]",e.id)})]),m0={slug:"share",title:"分享按钮",group:"plugin",intro:"footer 槽次按钮：配置 onShare 才渲染，点击触发回调；未配置 onShare 时插件不渲染。"};function g0(){return m.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:m.jsx(f0,{coupon:{id:"sh1",title:"点右下角分享这张券",amount:25,threshold:99}})})}const h0=Object.freeze(Object.defineProperty({__proto__:null,default:g0,meta:m0},Symbol.toStringTag,{value:"Module"}));function y0(e={}){const n=e.text??"开抢提醒",t=e.remindedText??"已设提醒 ✓";return{name:"remind",version:"0.1.0",description:"开抢提醒：idle 相位渲染提醒开关，开关态写内核 state.reminded，可被宿主复位",priority:30,config:{slotPosition:"after",order:10,...e},hooks:{renderFooter:r=>{var a;if(r.phase!=="idle")return null;const l=((a=r.state)==null?void 0:a.reminded)===!0,i=async()=>{var u;r.setState({reminded:!l}),(u=e.onRemind)==null||u.call(e,!l)};return m.jsx("div",{style:Aa,children:m.jsx("button",{type:"button",style:Ia,"data-testid":"coupon-remind-btn","data-on":l?"true":"false","aria-pressed":l,onClick:()=>void i(),children:l?t:n})})}}}}const v0="RemindPlugin",C0="开抢提醒：idle 相位渲染提醒开关，开关态写内核 state.reminded，可被宿主复位。",x0="0.1.0",S0=["coupon","remind","footer"],P0=[{name:"text",type:"string",default:'"开抢提醒"',description:"未提醒文案"},{name:"remindedText",type:"string",default:'"已设提醒 ✓"',description:"已提醒文案"},{name:"onRemind",type:"(on: boolean) => void",default:"-",description:"提醒开关回调"}],w0=["只在 idle 相位渲染（可领取/已领取后提醒无意义）","aria-pressed 无障碍开关语义"],k0=["定时开抢前预约提醒","补货提醒"],_0="const Coupon = createCouponCard([createRemindPlugin({ onRemind: (on) => api.setReminder(on) })]);",hp={name:v0,description:C0,since:x0,tags:S0,config:P0,features:w0,useCases:k0,example:_0},Wa=Object.assign(y0,{meta:hp}),E0=D([Wa({onRemind:e=>console.log("[remind]",e?"已设提醒":"已取消提醒")}),Dt({startAt:Date.now()+36e5})]),T0={slug:"remind",title:"开抢提醒",group:"plugin",intro:"仅 idle（未开抢）相位渲染「开抢提醒」开关（aria-pressed），切换写 state.reminded 并触发 onRemind；开抢后自动消失。"};function j0(){return m.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:m.jsx(E0,{coupon:{id:"rm1",title:"1 小时后开抢 · 可设提醒",amount:40,threshold:299}})})}const R0=Object.freeze(Object.defineProperty({__proto__:null,default:j0,meta:T0},Symbol.toStringTag,{value:"Module"}));function hs(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function $0(e={}){const n=e.label??"券码";return{name:"copy-code",version:"0.1.0",description:"券码复制：claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），结果写 state.codeCopied",priority:18,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:o=>{var u;const r=o.phase;if(r!=="claimed"&&r!=="used")return null;const l=e.code??o.coupon.code;if(!l)return null;const i=((u=o.state)==null?void 0:u.codeCopied)===!0,a=async()=>{var d,c;let s=!1;if((d=navigator.clipboard)!=null&&d.writeText)try{await navigator.clipboard.writeText(l),s=!0}catch{s=hs(l)}else s=hs(l);o.setState({codeCopied:s}),s&&((c=e.onCopied)==null||c.call(e,l)),window.setTimeout(()=>o.setState({codeCopied:!1}),1600)};return m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10,fontSize:12},"data-testid":"coupon-code-area",children:[m.jsx("span",{style:Zd,children:n}),m.jsx("code",{style:{fontFamily:"var(--ff-mono, monospace)",fontSize:12,padding:"2px 8px",borderRadius:4,background:"#f2f3f5",color:"#1f2328",border:"1px solid #e8eaed"},"data-testid":"coupon-code",children:l}),m.jsx("button",{type:"button",style:{padding:"2px 10px",fontSize:11,borderRadius:4,border:"1px solid #e8eaed",background:"#fff",color:"#1a66c2",cursor:"pointer",fontFamily:"inherit"},"data-testid":"coupon-copy-btn",onClick:()=>void a(),children:i?"已复制":"复制"})]})}}}}const D0="CopyCodePlugin",N0="券码复制：claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），结果写 state.codeCopied。",M0="0.1.0",O0=["coupon","code","clipboard","after"],L0=[{name:"code",type:"string",default:"coupon.code",description:"券码"},{name:"label",type:"string",default:'"券码"',description:"标签文案"},{name:"onCopied",type:"(code: string) => void",default:"-",description:"复制成功回调"}],b0=["claimed/used 之外的相位渲染 null","http 内网环境 execCommand 兜底（对齐 CodeBlock 的复制策略）","1.6s 后自动还原按钮文案"],z0=["口令券","线下核销码"],F0="const Coupon = createCouponCard([createCopyCodePlugin({ onCopied: (code) => tracker.copy(code) })]);",yp={name:D0,description:N0,since:M0,tags:O0,config:L0,features:b0,useCases:z0,example:F0},$o=Object.assign($0,{meta:yp}),A0=D([$o({code:"SAVE-2026"}),Z({claim:async()=>(await new Promise(e=>setTimeout(e,400)),{ok:!0})})]),I0={slug:"copy-code",title:"券码复制",group:"plugin",intro:"claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），复制后 1.6 秒自动还原；available 相位不渲染。"};function U0(){return m.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:m.jsx(A0,{coupon:{id:"cc1",title:"先领取，再看券码复制",amount:20,threshold:99}})})}const W0=Object.freeze(Object.defineProperty({__proto__:null,default:U0,meta:I0},Symbol.toStringTag,{value:"Module"})),H0=e=>{const n=new Date(e),t=o=>String(o).padStart(2,"0");return`${n.getFullYear()}.${t(n.getMonth()+1)}.${t(n.getDate())}`};function V0(e={}){const n=e.max??3,t=e.format??H0;return{name:"history",version:"0.1.0",description:"领取记录：按 coupon.history / config.records 倒序渲染最近 N 条领取/使用记录",priority:17,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:r=>{const l=e.records??r.coupon.history;if(!l||l.length===0)return null;const i=[...l].sort((a,u)=>u.at-a.at).slice(0,n);return m.jsxs("div",{style:{marginTop:10,fontSize:12},"data-testid":"coupon-history",children:[m.jsx("div",{style:np,children:"领取记录"}),m.jsx("ul",{style:tp,children:i.map((a,u)=>m.jsxs("li",{style:op,"data-testid":`coupon-history-item-${u}`,children:[m.jsx("span",{style:{color:"#57606a"},children:t(a.at)})," · ",a.action]},`${a.at}-${u}`))})]})}}}}const B0="HistoryPlugin",Q0="领取记录：按 coupon.history / config.records 倒序渲染最近 N 条领取/使用记录。",q0="0.1.0",Y0=["coupon","history","after"],K0=[{name:"records",type:"{ at: number; action: string }[]",default:"coupon.history",description:"记录列表，at 为 epoch ms"},{name:"max",type:"number",default:"3",description:"最多展示条数"},{name:"format",type:"(at: number) => string",default:"YYYY.MM.DD",description:"时间格式化"}],X0=["按时间倒序","空记录渲染 null","复用规则区的列表样式"],G0=["多批次领取记录","核销流水展示"],J0="const Coupon = createCouponCard([createHistoryPlugin({ max: 5 })]);",vp={name:B0,description:Q0,since:q0,tags:Y0,config:K0,features:X0,useCases:G0,example:J0},Do=Object.assign(V0,{meta:vp}),Z0=D([Do({max:3})]),e1=D([Do()]),n1={slug:"history",title:"领取记录",group:"plugin",intro:"coupon.history（{at, action}[]）按时间倒序渲染最近 max（默认 3）条；无记录时插件不渲染。"};function t1(){const e=Date.now();return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(Z0,{coupon:{id:"hs1",title:"最近 3 条记录",amount:10,threshold:0,history:[{at:e-864e5,action:"领取成功"},{at:e-36e5,action:"已使用"},{at:e-6e4,action:"再次领取"},{at:e-1e3,action:"这条超出 max 不会显示"}]}}),m.jsx(e1,{coupon:{id:"hs2",title:"无记录 · 不渲染",amount:5,threshold:0}})]})}const o1=Object.freeze(Object.defineProperty({__proto__:null,default:t1,meta:n1},Symbol.toStringTag,{value:"Module"}));function r1(e={}){const n=(t,o,r)=>{var l;t.bus.emit(o,r),t.bus.emit("coupon:analytics",{event:o,...r}),(l=e.onEvent)==null||l.call(e,o,r)};return{name:"analytics",version:"0.1.0",description:"券埋点：coupon:mount / coupon:claim / coupon:error 三类事件，回调与总线 coupon:analytics 双通道，自身不渲染 UI",priority:90,config:{},hooks:{onMount:t=>{n(t,"coupon:mount",{couponId:t.coupon.id,phase:t.phase})},onPhaseChange:(t,o)=>{n(t,"coupon:claim",{couponId:t.coupon.id,phase:o})},onError:(t,o)=>{n(t,"coupon:error",{couponId:t.coupon.id,message:String(o)})}}}}const l1="AnalyticsPlugin",i1="券埋点：coupon:mount / coupon:claim / coupon:error 三类事件，回调与总线 coupon:analytics 双通道，自身不渲染 UI。",a1="0.1.0",u1=["coupon","analytics","event"],s1=[{name:"onEvent",type:"(event: string, payload: Record<string, unknown>) => void",default:"-",description:"埋点回调（与总线双通道）"}],c1=["priority 90 事件链最前","couponId + phase 随事件上报","对齐 vane-sku Analytics 的双通道约定"],d1=["领券转化漏斗","A/B 实验埋点"],p1="const Coupon = createCouponCard([createAnalyticsPlugin({ onEvent: (e, p) => tracker.send(e, p) })]);",Cp={name:l1,description:i1,since:a1,tags:u1,config:s1,features:c1,useCases:d1,example:p1},Ha=Object.assign(r1,{meta:Cp}),f1=D([Ha({onEvent:e=>console.log("[analytics 回调]",e)})]),m1={slug:"analytics",title:"行为埋点",group:"plugin",intro:"无 UI 插件：mount / 领取 / 异常三类事件双通道上报（onEvent 回调 + bus.emit，事件名 coupon:mount / coupon:claim / coupon:error，另有 coupon:analytics 包装通道）。打开控制台看输出。"};function g1(){return m.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:m.jsx(f1,{coupon:{id:"an1",title:"挂载即上报 coupon:mount",amount:10,threshold:0}})})}const h1=Object.freeze(Object.defineProperty({__proto__:null,default:g1,meta:m1},Symbol.toStringTag,{value:"Module"}));function y1(e={}){const n=e.text??"查看完整规则";return{name:"detail-link",version:"0.1.0",description:"完整规则链接：href 渲染 <a>、onDetail 渲染 <button>，落在规则区下方",priority:16,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:o=>{if(!e.href&&!e.onDetail)return null;const r={marginTop:6,padding:0,border:0,background:"none",fontSize:12,color:rp.color,cursor:"pointer",fontFamily:"inherit",textDecoration:"underline",textUnderlineOffset:2};return e.href?m.jsx("div",{style:{marginTop:6},children:m.jsxs("a",{href:e.href,target:"_blank",rel:"noreferrer",style:r,"data-testid":"coupon-detail-link",children:[n," ›"]})}):m.jsx("div",{style:{marginTop:6},children:m.jsxs("button",{type:"button",style:r,"data-testid":"coupon-detail-link",onClick:()=>{var l;return(l=e.onDetail)==null?void 0:l.call(e)},children:[n," ›"]})})}}}}const v1="DetailLinkPlugin",C1="完整规则链接：href 渲染 <a>、onDetail 渲染 <button>，落在规则区下方。",x1="0.1.0",S1=["coupon","link","after"],P1=[{name:"href",type:"string",default:"-",description:"详情页链接（有则渲染 <a>）"},{name:"text",type:"string",default:'"查看完整规则"',description:"链接文案"},{name:"onDetail",type:"() => void",default:"-",description:"点击回调（无 href 时渲染 <button>）"}],w1=["href 与 onDetail 都未配置渲染 null","下划线 + › 视觉与规则区衔接"],k1=["规则详情页跳转","弹层查看完整规则"],_1="const Coupon = createCouponCard([createDetailLinkPlugin({ href: '/help/coupon-rules' })]);",xp={name:v1,description:C1,since:x1,tags:S1,config:P1,features:w1,useCases:k1,example:_1},No=Object.assign(y1,{meta:xp}),E1=D([No({href:"/help/coupon-rules"})]),T1=D([No({onDetail:()=>console.log("[detail] 打开详情弹层")})]),j1={slug:"detail-link",title:"详情入口",group:"plugin",intro:'after 槽文字链：配 href 渲染 <a target="_blank">，配 onDetail 渲染 <button>，两者都没有则不渲染；色值复用规则展开开关的同款链接色。'};function R1(){return m.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[m.jsx(E1,{coupon:{id:"dl1",title:"href 跳转形态",amount:10,threshold:0}}),m.jsx(T1,{coupon:{id:"dl2",title:"onDetail 回调形态",amount:20,threshold:99}})]})}const $1=Object.freeze(Object.defineProperty({__proto__:null,default:R1,meta:j1},Symbol.toStringTag,{value:"Module"})),D1=`import React from "react";
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
`,N1=`import React from "react";
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
`,M1=`import React from "react";
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
`,O1=`import React from "react";
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
`,L1=`import React from "react";
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
`,b1=`import React from "react";
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
`,z1=`import React from "react";
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
`,F1=`import React from "react";
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
`,A1=`import React from "react";
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
`,I1=`import React from "react";
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
`,U1=`import React from "react";
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
`,W1=`import React from "react";
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
`,H1=`import React from "react";
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
`,V1=`import React from "react";
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
`,B1=`import React from "react";
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
`,Q1=`import React from "react";
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
`,q1=`import React from "react";
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
`,Y1=Object.assign({"./00-quickstart.tsx":zh,"./01-claim-state.tsx":Zh,"./02-validity.tsx":gy,"./03-rules.tsx":$y,"./04-stack.tsx":Qy,"./05-combined.tsx":Ky,"./06-limited.tsx":ev,"./07-progress.tsx":gv,"./08-quota.tsx":Rv,"./09-countdown.tsx":Hv,"./10-channel.tsx":o0,"./11-share.tsx":h0,"./12-remind.tsx":R0,"./13-copy-code.tsx":W0,"./14-history.tsx":o1,"./15-analytics.tsx":h1,"./16-detail-link.tsx":$1}),K1=Object.assign({"./00-quickstart.tsx":D1,"./01-claim-state.tsx":N1,"./02-validity.tsx":M1,"./03-rules.tsx":O1,"./04-stack.tsx":L1,"./05-combined.tsx":b1,"./06-limited.tsx":z1,"./07-progress.tsx":F1,"./08-quota.tsx":A1,"./09-countdown.tsx":I1,"./10-channel.tsx":U1,"./11-share.tsx":W1,"./12-remind.tsx":H1,"./13-copy-code.tsx":V1,"./14-history.tsx":B1,"./15-analytics.tsx":Q1,"./16-detail-link.tsx":q1}),X1=e=>e.replace(/^\.\//,""),bi=Object.entries(Y1).map(([e,n])=>{const t=X1(e);return{meta:n.meta,Stage:n.default,file:t,source:K1[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),G1=Array.from(new Set(bi.map(e=>e.meta.group))),Sp={basic:{label:"基础用法"},advanced:{label:"进阶用法"},plugin:{label:"插件示例"}},J1="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",Z1="true|false|null|undefined|this|super",eC="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",ys=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${J1})\b`,String.raw`\b(${Z1})\b`,String.raw`\b(${eC})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),vs=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function nC(e){const n=[];let t=0;ys.lastIndex=0;let o;for(;o=ys.exec(e);){o.index>t&&n.push({text:e.slice(t,o.index),cls:null});const r=vs.findIndex((l,i)=>o[i+1]!==void 0);n.push({text:o[0],cls:r>=0?vs[r]:null}),t=o.index+o[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function Cs(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function tC({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:o}){const[r,l]=P.useState("idle"),[i,a]=P.useState(!1),u=P.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),s=t>0&&u.length>t,d=s&&!i?u.slice(0,t).join(`
`):e,c=P.useMemo(()=>nC(d),[d]),f=P.useCallback(async()=>{var x;let v=!1;if((x=navigator.clipboard)!=null&&x.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=Cs(e)}else v=Cs(e);l(v?"ok":"fail"),window.setTimeout(()=>l("idle"),1600)},[e]);return m.jsxs("div",{className:"code",children:[m.jsxs("div",{className:"code-head",children:[m.jsx("span",{children:n}),m.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[m.jsxs("span",{children:[u.length," 行"]}),m.jsx("button",{type:"button",className:`code-copy${r==="ok"?" is-ok":r==="fail"?" is-fail":""}`,onClick:f,children:r==="ok"?"已复制":r==="fail"?"复制失败":"复制"})]})]}),m.jsx("pre",{style:o?{maxHeight:o}:void 0,children:m.jsx("code",{children:c.map((v,x)=>v.cls?m.jsx("span",{className:v.cls,children:v.text},x):m.jsx(ko.Fragment,{children:v.text},x))})}),s?m.jsx("button",{type:"button",className:"code-more",onClick:()=>a(v=>!v),children:i?"收起":`展开余下 ${u.length-t} 行`}):null]})}function oC({entry:e,order:n}){var a;const{meta:t,Stage:o,source:r,file:l}=e,i=String(n).padStart(2,"0");return m.jsxs("article",{children:[m.jsx("header",{className:"page-head",children:m.jsxs("div",{children:[m.jsxs("p",{className:"eyebrow",children:[i," · ",((a=Sp[t.group])==null?void 0:a.label)??t.group]}),m.jsx("h1",{className:"page-title",children:t.title})]})}),t.intro?m.jsx("p",{className:"page-sub",children:t.intro}):null,m.jsx("section",{className:"demo-stage",children:m.jsx(o,{})}),m.jsxs("section",{className:"demo-src-wrap",children:[m.jsxs("div",{className:"demo-src-head",children:[m.jsxs("span",{className:"demo-src-title",children:["源码 · ",l]}),m.jsx("span",{className:"demo-src-hint",children:"下面这份就是上面正在跑的那份"})]}),m.jsx(tC,{code:r,title:l,collapseAfter:28,maxHeight:460})]})]})}const rC=`import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";

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
`,lC=`import React from "react";
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
            {channels.map((label) => (
              <span
                key={label}
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
`,iC=`import React from "react";
import type {
  CouponPhase,
  CouponPlugin,
  CouponPluginContext,
} from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * ClaimStatePlugin — 领取状态机（footer 槽）。
 *
 * 相位枚举与转移规则见 plugins/types.ts 的 CouponPhase 注释：
 *   idle → available → claiming → claimed（半终态，可核销 used）
 *   终态 used / soldout / expired；领取失败不设独立态，回退 available 并经 onClaimError 上报。
 *
 * 联动降级只经内核 state：读取 state.validity（ValidityPlugin 写入），
 * 在 onValidityChange / onPropsChange 里把过期券压到 expired；stock ≤ 0 压到 soldout。
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
  /** 剩余库存；≤ 0 时自动降级 soldout */
  stock?: number;
  /** 相位变化回调（onPhaseChange 钩子之后触发） */
  onPhaseChange?: (phase: CouponPhase, prev: CouponPhase | undefined) => void;
  /** 领取失败回调 */
  onClaimError?: (reason?: string) => void;
  /** 按钮文案按相位覆盖 */
  texts?: Partial<Record<CouponPhase, string>>;
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
};

/** 终态：不再响应任何点击与降级 */
const TERMINAL_PHASES: ReadonlySet<CouponPhase> = new Set([
  "used",
  "soldout",
  "expired",
]);

export function createClaimStatePlugin(
  config: ClaimStateConfig = {}
): CouponPlugin {
  const texts = { ...DEFAULT_CLAIM_TEXTS, ...config.texts };
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  /**
   * 联动降级判定：返回应强制进入的相位，无需降级返回 null。
   * 终态优先级：expired / soldout 覆盖一切非终态；已终态不覆盖。
   */
  const gatePhase = (context: CouponPluginContext): CouponPhase | null => {
    const current = context.phase;
    if (TERMINAL_PHASES.has(current)) return null;
    const validity = (context.state?.validity ?? null) as
      | import("../../components/CouponPlugin/plugins/types").CouponValidity
      | null;
    if (validity?.expired) return "expired";
    if (typeof config.stock === "number" && config.stock <= 0) return "soldout";
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
      // 首次：硬门（无库存）优先，其次应用 initialPhase，都不满足则留空（extendContext 兜底 available）
      if (typeof config.stock === "number" && config.stock <= 0) {
        context.setState({ phase: "soldout" });
      } else if (config.initialPhase) {
        context.setState({ phase: config.initialPhase });
      }
      return;
    }
    const gated = gatePhase(context);
    if (gated && gated !== current) transition(context, gated);
  };

  return {
    name: "claim-state",
    version: "0.1.0",
    description:
      "领取状态机：7 态相位流转（未开始/可领取/领取中/已领取/已使用/已抢空/已过期），联动有效期与库存自动降级",
    priority: 32,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
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
      renderFooter: (context: CouponPluginContext) => {
        const phase = context.phase;
        const label = texts[phase] ?? phase;
        const disabled = phase !== "available";

        const handleClick = async () => {
          if (phase !== "available") return;
          // 渲染后的状态可能已变（过期/抢空），点击时再守一次
          const gated = gatePhase(context);
          if (gated) {
            transition(context, gated);
            return;
          }
          transition(context, "claiming");
          try {
            const result = await config.claim?.();
            const ok = !result || result.ok !== false;
            if (ok) {
              // claimedAt 供 ValidityPlugin 的相对有效期锚定
              context.setState({ phase: "claimed", claimedAt: Date.now() });
            } else {
              transition(context, "available");
              config.onClaimError?.(result?.reason);
            }
          } catch (error) {
            transition(context, "available");
            config.onClaimError?.(String(error));
          }
        };

        return (
          <div className="vc-coupon__actions" style={T.actionsStyle} data-testid="coupon-claim-area">
            <button
              type="button"
              style={
                phase === "available" || phase === "claiming"
                  ? T.claimStyle
                  : T.claimMutedStyle
              }
              data-testid="coupon-claim-btn"
              data-phase={phase}
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
`,aC=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * CopyCodePlugin — 券码复制（after 槽）。
 *
 * phase 为 claimed/used 且有券码（config.code 或 coupon.code）时展示券码 + 复制按钮。
 * 复制走两条路：navigator.clipboard（secure context）不行时退到
 * 隐藏 textarea + execCommand —— 示例站常挂在 http:// 内网 IP 上，只走
 * clipboard API 会静默失败。复制结果写内核 state.codeCopied。
 * meta 在同目录 index.ts 挂载。
 */
export interface CopyCodeConfig {
  /** 券码（默认读 coupon.code） */
  code?: string;
  /** 标签文案，默认「券码」 */
  label?: string;
  /** 复制成功回调 */
  onCopied?: (code: string) => void;
}

function fallbackCopy(text: string): boolean {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export function createCopyCodePlugin(config: CopyCodeConfig = {}): CouponPlugin {
  const label = config.label ?? "券码";
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "copy-code",
    version: "0.1.0",
    description:
      "券码复制：claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），结果写 state.codeCopied",
    priority: 18,
    config: mergedConfig,
    hooks: {
      renderHeader: (context: CouponPluginContext) => {
        const phase = context.phase;
        if (phase !== "claimed" && phase !== "used") return null;
        const code = config.code ?? context.coupon.code;
        if (!code) return null;

        const copied = context.state?.codeCopied === true;

        const copy = async () => {
          let ok = false;
          if (navigator.clipboard?.writeText) {
            try {
              await navigator.clipboard.writeText(code);
              ok = true;
            } catch {
              ok = fallbackCopy(code);
            }
          } else {
            ok = fallbackCopy(code);
          }
          context.setState({ codeCopied: ok });
          if (ok) config.onCopied?.(code);
          window.setTimeout(() => context.setState({ codeCopied: false }), 1600);
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
`,uC=`import React from "react";
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
`,sC=`import React from "react";
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
`,cC=`import React from "react";
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
`,dC=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * ProgressPlugin — 领取进度条（after 槽）。
 *
 * 读 coupon.total / claimed（可用 config 覆盖），渲染进度条 + 「已抢 X%」；
 * 剩余 ≤ urgentPct 时换紧迫色。数据来自接口轮询时，props 变化（onPropsChange）即重算。
 * meta 在同目录 index.ts 挂载。
 */
export interface ProgressConfig {
  /** 发放总量（默认读 coupon.total） */
  total?: number;
  /** 已领取数（默认读 coupon.claimed） */
  claimed?: number;
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
      "领取进度条：按 total/claimed 渲染已抢百分比进度条，剩余 ≤ N% 换紧迫色，数据轮询即刷新",
    priority: 20,
    config: mergedConfig,
    hooks: {
      renderHeader: (context: CouponPluginContext) => {
        const c = context.coupon;
        const total = config.total ?? c.total;
        const claimed = config.claimed ?? c.claimed;
        if (typeof total !== "number" || total <= 0) return null;
        if (typeof claimed !== "number" || claimed < 0) return null;

        const pct = Math.min(100, Math.round((claimed / total) * 100));
        const remaining = Math.max(0, total - claimed);
        const urgent = 100 - pct <= urgentPct;
        let text = \`已抢 \${pct}%\`;
        if (remaining === 0) {
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
`,pC=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";

/**
 * QuotaPlugin — 每人限领（after 槽）。
 *
 * 读 coupon.quota（config 可覆盖）与已领数，渲染限领提示；
 * 超限写 state.quotaReached 供宿主/其他插件读取（不直接耦合 ClaimState）。
 * 事件钩子写 state，渲染钩子纯读。
 * meta 在同目录 index.ts 挂载。
 */
export interface QuotaConfig {
  /** 每人限领张数（默认读 coupon.quota） */
  quota?: number;
  /** 当前用户已领张数，默认 0 */
  purchasedCount?: number;
  /** 超限回调（入参为生效的限领张数） */
  onExceed?: (quota: number) => void;
}

export function createQuotaPlugin(config: QuotaConfig = {}): CouponPlugin {
  const purchased = config.purchasedCount ?? 0;
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  const resolve = (context: CouponPluginContext) => {
    const quota = config.quota ?? context.coupon.quota;
    // 未声明 quota 视为不限领
    const reached = typeof quota === "number" ? purchased >= quota : false;
    return { quota, reached };
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
        const { quota, reached } = resolve(context);
        if (reached) {
          context.setState({ quotaReached: true });
          config.onExceed?.(quota as number);
        }
      },
      onPropsChange: (context: CouponPluginContext) => {
        const { quota, reached } = resolve(context);
        context.setState({ quotaReached: reached });
        if (reached) config.onExceed?.(quota as number);
      },
      renderHeader: (context: CouponPluginContext) => {
        const { quota, reached } = resolve(context);
        if (typeof quota !== "number") return null;

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
`,fC=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * RemindPlugin — 开抢提醒（footer 槽，priority 30）。
 *
 * phase 为 idle（未开始）时渲染「开抢提醒」开关；点击写内核 state.reminded
 * 并触发 onRemind。非 idle 相位渲染 null（可领取/已领取后提醒无意义）。
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
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "remind",
    version: "0.1.0",
    description:
      "开抢提醒：idle 相位渲染提醒开关，开关态写内核 state.reminded，可被宿主复位",
    priority: 30,
    config: mergedConfig,
    hooks: {
      renderFooter: (context: CouponPluginContext) => {
        if (context.phase !== "idle") return null;

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
`,mC=`import React from "react";
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
`,gC=`import React from "react";
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
`,hC=`import React from "react";
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
`,yC=`import React from "react";
import type {
  CouponPlugin,
  CouponPluginContext,
  CouponValidity,
} from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * ValidityPlugin — 有效期判定（after 槽，priority 23 > RuleExpand 的 21，渲染在规则上方）。
 *
 * 三种判定模式（按声明字段自动选择）：
 *   absolute —— validTo（可配 validFrom）存在时；未开始/已过期/剩余天数
 *   relative —— validDays：未领取显示「领取后 N 天内有效」；已领取从 state.claimedAt
 *               （ClaimStatePlugin 写入）起算
 *   none     —— 都未声明：不渲染、不写 state
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

const DAY_MS = 24 * 60 * 60 * 1000;

const fmtDate = (ts: number): string => {
  const d = new Date(ts);
  const p = (n: number) => String(n).padStart(2, "0");
  return \`\${d.getFullYear()}.\${p(d.getMonth() + 1)}.\${p(d.getDate())}\`;
};

export function createValidityPlugin(
  config: ValidityConfig = {}
): CouponPlugin {
  const urgentDays = config.urgentDays ?? 3;
  const now = config.now ?? (() => Date.now());
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  const compute = (context: CouponPluginContext): CouponValidity | null => {
    const coupon = context.coupon;
    const ts = now();

    // absolute：以 validTo 为准
    if (typeof coupon.validTo === "number") {
      const notStarted =
        typeof coupon.validFrom === "number" ? ts < coupon.validFrom : false;
      const expired = ts > coupon.validTo;
      const remainingMs = Math.max(0, coupon.validTo - ts);
      const remainingDays = Math.ceil(remainingMs / DAY_MS);
      const range =
        typeof coupon.validFrom === "number"
          ? \`\${fmtDate(coupon.validFrom)} - \${fmtDate(coupon.validTo)}\`
          : \`\${fmtDate(coupon.validTo)} 前\`;
      return {
        mode: "absolute",
        valid: !expired && !notStarted,
        expired,
        notStarted,
        remainingMs,
        text: range,
        urgent: !expired && !notStarted && remainingDays <= urgentDays,
      };
    }

    // relative：以 validDays 为准
    if (typeof coupon.validDays === "number") {
      const claimedAt = (context.state?.claimedAt ?? undefined) as
        | number
        | undefined;
      if (typeof claimedAt !== "number") {
        return {
          mode: "relative",
          valid: true,
          expired: false,
          notStarted: false,
          remainingMs: null,
          text: \`领取后 \${coupon.validDays} 天内有效\`,
          urgent: false,
        };
      }
      const end = claimedAt + coupon.validDays * DAY_MS;
      const expired = ts > end;
      const remainingMs = Math.max(0, end - ts);
      const remainingDays = Math.ceil(remainingMs / DAY_MS);
      return {
        mode: "relative",
        valid: !expired,
        expired,
        notStarted: false,
        remainingMs,
        text: \`\${fmtDate(claimedAt)} 领取，\${coupon.validDays} 天内有效\`,
        urgent: !expired && remainingDays <= urgentDays,
      };
    }

    return null;
  };

  const sameValidity = (a: any, b: any): boolean =>
    JSON.stringify(a) === JSON.stringify(b);

  /** 事件钩子共用：计算并按需写入 state */
  const evaluate = (context: CouponPluginContext): void => {
    const next = compute(context);
    const current = (context.state?.validity ?? null) as CouponValidity | null;
    if (next === null) return; // none 模式：不写 state、不渲染
    if (!sameValidity(next, current)) context.setState({ validity: next });
  };

  return {
    name: "validity",
    version: "0.1.0",
    description:
      "有效期判定：绝对（validFrom/validTo）/ 相对（领取后 N 天）双模式，紧迫态强调、过期写 state 供领取状态机联动",
    priority: 23,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        evaluate(context);
      },
      onPropsChange: (context: CouponPluginContext) => {
        evaluate(context);
      },
      onPhaseChange: (context: CouponPluginContext) => {
        // 领取动作写入 claimedAt → 相对有效期要重算（从「领取后 N 天」切到锚定 claimedAt）
        evaluate(context);
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
              <span style={T.chipExpiredStyle}>
                已过期
              </span>
            ) : validity.urgent && remainingDays !== null ? (
              <span style={T.chipUrgentStyle}>
                仅剩 {remainingDays} 天
              </span>
            ) : validity.notStarted ? (
              <span style={T.chipMutedStyle}>
                未开始
              </span>
            ) : null}
          </div>
        );
      },
    },
  };
}
`,fx={before:"票面上方 · before",info:"票面信息 · after",footer:"底部操作 · footer",behavior:"行为钩子 · 无渲染"},xs=["before","info","footer","behavior"],Ss=Object.assign({"/src/custom-plugins/AnalyticsPlugin/doc.json":Cp,"/src/custom-plugins/ChannelPlugin/doc.json":mp,"/src/custom-plugins/ClaimStatePlugin/doc.json":ap,"/src/custom-plugins/CopyCodePlugin/doc.json":yp,"/src/custom-plugins/CountdownPlugin/doc.json":fp,"/src/custom-plugins/DetailLinkPlugin/doc.json":xp,"/src/custom-plugins/HistoryPlugin/doc.json":vp,"/src/custom-plugins/ProgressPlugin/doc.json":dp,"/src/custom-plugins/QuotaPlugin/doc.json":pp,"/src/custom-plugins/RemindPlugin/doc.json":hp,"/src/custom-plugins/RuleExpandPlugin/doc.json":sp,"/src/custom-plugins/SharePlugin/doc.json":gp,"/src/custom-plugins/StackPlugin/doc.json":cp,"/src/custom-plugins/ValidityPlugin/doc.json":up}),Ps=Object.assign({"/src/custom-plugins/AnalyticsPlugin/create.tsx":rC,"/src/custom-plugins/ChannelPlugin/create.tsx":lC,"/src/custom-plugins/ClaimStatePlugin/create.tsx":iC,"/src/custom-plugins/CopyCodePlugin/create.tsx":aC,"/src/custom-plugins/CountdownPlugin/create.tsx":uC,"/src/custom-plugins/DetailLinkPlugin/create.tsx":sC,"/src/custom-plugins/HistoryPlugin/create.tsx":cC,"/src/custom-plugins/ProgressPlugin/create.tsx":dC,"/src/custom-plugins/QuotaPlugin/create.tsx":pC,"/src/custom-plugins/RemindPlugin/create.tsx":fC,"/src/custom-plugins/RuleExpandPlugin/create.tsx":mC,"/src/custom-plugins/SharePlugin/create.tsx":gC,"/src/custom-plugins/StackPlugin/create.tsx":hC,"/src/custom-plugins/ValidityPlugin/create.tsx":yC}),Pp=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function vC(e){const n=Object.keys(Ps).find(r=>Pp(r)===e),t=n?Ps[n]:"",o=/priority:\s*(\d+)/.exec(t);return o?Number(o[1]):0}function CC(e){const n=Object.keys(Ss).find(t=>Pp(t)===e);return n?Ss[n]:{name:e,description:"（缺少 doc.json）"}}const xC=[{dir:"StackPlugin",group:"before",make:()=>He()},{dir:"ChannelPlugin",group:"before",make:()=>Ro()},{dir:"CountdownPlugin",group:"before",make:()=>Dt({startAt:Date.now()+36e5})},{dir:"ValidityPlugin",group:"info",make:()=>sn()},{dir:"QuotaPlugin",group:"info",make:()=>Zn()},{dir:"ProgressPlugin",group:"info",make:()=>Jn()},{dir:"RuleExpandPlugin",group:"info",make:()=>On()},{dir:"CopyCodePlugin",group:"info",make:()=>$o()},{dir:"HistoryPlugin",group:"info",make:()=>Do()},{dir:"DetailLinkPlugin",group:"info",make:()=>No()},{dir:"ClaimStatePlugin",group:"footer",make:()=>Z()},{dir:"SharePlugin",group:"footer",make:()=>rl()},{dir:"RemindPlugin",group:"footer",make:()=>Wa()},{dir:"AnalyticsPlugin",group:"behavior",make:()=>Ha()}],ws=xC.map(e=>{const n=CC(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:vC(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>xs.indexOf(e.group)-xs.indexOf(n.group)||n.priority-e.priority),mx=["StackPlugin","CountdownPlugin","ValidityPlugin","QuotaPlugin","ProgressPlugin","ClaimStatePlugin","SharePlugin","RuleExpandPlugin","HistoryPlugin"];function gx(){const e=Date.now();return{id:"c-demo-full",title:"家电焕新专享券",amount:30,threshold:299,stackable:!0,total:1e3,claimed:720,quota:2,channels:["仅 APP"],code:"VD-2026-88XK",validFrom:e-3*864e5,validTo:e+4*864e5,rules:["全平台通用，可与店铺优惠叠加使用","下单满 299 元可用，家电类目除外","领取后 4 天内有效，过期自动作废","每单限用 1 张，不找零、不兑现"],history:[{at:e-2*864e5,action:"领取成功"},{at:e-6*36e5,action:"设置开抢提醒"}]}}const SC={id:"claim-flow",title:"领券主流程",group:"领取流程",ref:{label:"电商 App · 商品详情领券",url:"https://vane.dev/examples/coupon/claim-flow"},pain:"光有面额和标题用户不敢领：什么时候截止、能领几张、规则有没有坑，都要一眼看清。",plugs:[{fn:"createValidityPlugin",why:"有效期判定行 + 紧迫态，结果写入内核 state 驱动状态机"},{fn:"createClaimStatePlugin",cfg:"claim: async () => ({ ok: true })",why:"主 CTA：idle/可领/领取中/已领/过期 七态按钮，领取失败自动回退"},{fn:"createQuotaPlugin",why:"每人限领 2 张，超出走 onExceed 而不是静默失败"},{fn:"createRuleExpandPlugin",cfg:"collapsedCount: 2",why:"规则默认收起只露 2 条，点开展开全量，不挤占票面"}],props:["coupon={coupon}"],note:"Validity 与 ClaimState 缺一不可：只有前者券面不会过期降级，只有后者过期了还能领。"},PC=D([sn(),Z({claim:async()=>(await new Promise(e=>setTimeout(e,600)),{ok:!0})}),Zn(),On({collapsedCount:2})]);function wC(){const[e,n]=P.useState(0),t={id:"c-claim",title:"家电焕新专享券",amount:30,threshold:299,quota:2,validFrom:Date.now()-3*864e5,validTo:Date.now()+4*864e5,rules:["全平台通用，可与店铺优惠叠加使用","下单满 299 元可用，家电类目除外","领取后 4 天内有效，过期自动作废","每单限用 1 张，不找零、不兑现"]};return m.jsx(PC,{coupon:t,containerStyle:{maxWidth:420,margin:"0 auto"}},e)}const kC=Object.freeze(Object.defineProperty({__proto__:null,default:wC,meta:SC},Symbol.toStringTag,{value:"Module"})),_C={id:"limited-rush",title:"限量抢券",group:"限量抢购",ref:{label:"大促会场 · 整点抢券",url:"https://vane.dev/examples/coupon/limited-rush"},pain:"限量券要的是氛围：距开始有倒计时、剩余额度有进度，否则用户感知不到紧迫。",plugs:[{fn:"createCountdownPlugin",cfg:"startAt: Date.now() + 3600_000",why:"票面上方倒计时角标，到点 onFire 回调可接自动刷新"},{fn:"createProgressPlugin",why:"已领 720/1000 的进度条，剩 20% 进入紧迫配色"},{fn:"createQuotaPlugin",why:"每人限领 1 张，抢购场景必配防刷提示"},{fn:"createClaimStatePlugin",why:"状态机按钮：抢完自动降级「已抢光」，不再响应点击"}],props:["coupon={coupon}"],note:"Countdown 在 before 区（票面上方角标），Progress 在 after 区（票面下方信息行）。"},EC=D([Dt({startAt:Date.now()+36e5}),Jn(),Zn(),Z()]);function TC(){return m.jsx(EC,{coupon:{id:"c-rush",title:"整点神券 · 限量抢",amount:100,threshold:599,total:1e3,claimed:720,quota:1},containerStyle:{maxWidth:420,margin:"0 auto"}})}const jC=Object.freeze(Object.defineProperty({__proto__:null,default:TC,meta:_C},Symbol.toStringTag,{value:"Module"})),RC={id:"stack-promo",title:"大促叠券",group:"大促叠加",ref:{label:"大促主会场 · 券包页",url:"https://vane.dev/examples/coupon/stack-promo"},pain:"多券叠加规则复杂：能不能叠、哪些渠道领、怎么分享给好友凑单，都要在票面上说清。",plugs:[{fn:"createStackPlugin",why:"「可叠加」角标：stackable 数据源驱动，不可叠时默认不展示"},{fn:"createChannelPlugin",why:"渠道限定标签（仅 APP / 仅新客），领错渠道的客诉直接归零"},{fn:"createSharePlugin",why:"footer 分享按钮，裂变动线直接长在券上"}],props:["coupon={coupon}"],note:"三个都是纯展示/回调插件，没有任何状态机依赖，可与其他场景自由组合。"},$C=D([He(),Ro(),rl()]);function DC(){return m.jsx($C,{coupon:{id:"c-stack",title:"跨店每满减叠加券",amount:50,threshold:300,stackable:!0,channels:["仅 APP","仅新客"]},containerStyle:{maxWidth:420,margin:"0 auto"}})}const NC=Object.freeze(Object.defineProperty({__proto__:null,default:DC,meta:RC},Symbol.toStringTag,{value:"Module"})),MC={id:"post-claim",title:"领后核销",group:"领后核销",ref:{label:"会员中心 · 我的券包",url:"https://vane.dev/examples/coupon/post-claim"},pain:"领完券用户不知道码在哪、去哪用：券码、记录、跳转三件套把领后动线补全。",plugs:[{fn:"createClaimStatePlugin",cfg:'initialPhase: "claimed"',why:"直接以「已领取」半终态打开，可继续核销为 used"},{fn:"createCopyCodePlugin",why:"claimed 后展示券码一键复制，onCopied 可接埋点"},{fn:"createHistoryPlugin",why:"领取/使用记录倒序展示，最多 3 条可配"},{fn:"createDetailLinkPlugin",why:"「去使用」跳转链接，把用户送回商详"}],props:["coupon={coupon}"],note:"DetailLink 的 href 必须由业务传入（或经 onDetail 接管），这里演示用占位链接。"},OC=D([Z({initialPhase:"claimed"}),$o(),Do(),No({href:"https://vane.dev/examples/coupon/post-claim"})]);function LC(){const e=Date.now();return m.jsx(OC,{coupon:{id:"c-used",title:"家电焕新专享券",amount:30,threshold:299,code:"VD-2026-88XK",validTo:e+4*864e5,history:[{at:e-2*864e5,action:"领取成功"},{at:e-2*864e5+6e4,action:"查看使用规则"}]},containerStyle:{maxWidth:420,margin:"0 auto"}})}const bC=Object.freeze(Object.defineProperty({__proto__:null,default:LC,meta:MC},Symbol.toStringTag,{value:"Module"})),zC={id:"full-stack",title:"全功能中台",group:"全量装配",ref:{label:"券系统中台 · 全能力演示",url:"https://vane.dev/examples/coupon/full-stack"},pain:"接入方想一次看全 14 个插件的真实排布与交互，逐页翻示例太慢。",plugs:[{fn:"createCountdownPlugin",cfg:"startAt: Date.now() + 3600_000",why:"before：开抢倒计时"},{fn:"createStackPlugin",why:"before：可叠加角标"},{fn:"createChannelPlugin",why:"before：渠道限定标签"},{fn:"createValidityPlugin",why:"after：有效期行，驱动状态机降级"},{fn:"createQuotaPlugin",why:"after：限领提示"},{fn:"createProgressPlugin",why:"after：限量进度条"},{fn:"createRuleExpandPlugin",why:"after：规则折叠"},{fn:"createCopyCodePlugin",why:"after：claimed 后的券码复制"},{fn:"createHistoryPlugin",why:"after：领取/使用记录"},{fn:"createDetailLinkPlugin",cfg:'href: "https://vane.dev/examples/coupon/full-stack"',why:"after：去使用跳转"},{fn:"createClaimStatePlugin",why:"footer：领取状态机主按钮"},{fn:"createSharePlugin",why:"footer：分享裂变"},{fn:"createRemindPlugin",why:"footer：开抢提醒"},{fn:"createAnalyticsPlugin",why:"无渲染：onMount 埋点上报，不动 UI"}],props:["coupon={coupon}"],note:"全量装配是压舱石场景：任何插件排序 / 隔离回归都会在这里先炸出来。"},qt=Date.now(),FC=D([Dt({startAt:qt+36e5}),He(),Ro(),sn(),Zn(),Jn(),On(),$o(),Do(),No({href:"https://vane.dev/examples/coupon/full-stack"}),Z(),rl(),Wa(),Ha()]);function AC(){return m.jsx(FC,{coupon:{id:"c-full",title:"家电焕新专享券",amount:30,threshold:299,stackable:!0,total:1e3,claimed:720,quota:2,channels:["仅 APP"],code:"VD-2026-88XK",validFrom:qt-3*864e5,validTo:qt+4*864e5,rules:["全平台通用，可与店铺优惠叠加使用","下单满 299 元可用，家电类目除外","领取后 4 天内有效，过期自动作废","每单限用 1 张，不找零、不兑现"],history:[{at:qt-2*864e5,action:"领取成功"},{at:qt-6*36e5,action:"设置开抢提醒"}]},containerStyle:{maxWidth:420,margin:"0 auto"}})}const IC=Object.freeze(Object.defineProperty({__proto__:null,default:AC,meta:zC},Symbol.toStringTag,{value:"Module"})),UC=`import React, { useState } from "react";
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
`,WC=`import React from "react";
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
`,HC=`import React from "react";
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
`,VC=`import React from "react";
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
`,BC=`import React from "react";
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
`,QC=Object.assign({"./01-claim-flow.tsx":kC,"./02-limited-rush.tsx":jC,"./03-stack-promo.tsx":NC,"./04-post-claim.tsx":bC,"./05-full-stack.tsx":IC}),qC=Object.assign({"./01-claim-flow.tsx":UC,"./02-limited-rush.tsx":WC,"./03-stack-promo.tsx":HC,"./04-post-claim.tsx":VC,"./05-full-stack.tsx":BC}),YC=e=>e.replace(/^\.\//,""),Ir=Object.entries(QC).map(([e,n])=>{const t=YC(e);return{meta:n.meta,Component:n.default,file:t,source:qC[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),hx=Ir.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),yx=Array.from(new Set(Ir.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort(),KC=P.lazy(()=>za(()=>import("./HomePage-D07rmZY4.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),XC=P.lazy(()=>za(()=>import("./PluginsPage-DnNT2t4i.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),GC=P.lazy(()=>za(()=>import("./ScenariosPage-Cf6lKmG2.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),JC={pkg:"vane-coupon",brand:"C",subtitle:"优惠券 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${ws.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Ir.length} plates`}],routes:[{path:"/",element:m.jsx(KC,{})},{path:"/plugins",element:m.jsx(XC,{})},{path:"/scenarios",element:m.jsx(GC,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:G1.map(e=>({key:e,label:Sp[e].label})),entries:bi,detail:(e,n)=>m.jsx(oC,{entry:e,order:n})},footer:[`${ws.length} PLUGINS · ${Ir.length} PLATES`,`${bi.length} DEMOS · STATE MACHINE CORE`]};function ZC(){return m.jsx(ih,{config:JC})}const ex='[data-testid="coupon-claim-btn"], [data-testid="coupon-rules-toggle"], [data-testid="coupon-stack-badge"]';function ks(e){const n=[];if(!e)return{problems:["体检根节点不存在"],checked:0};const t=Array.from(e.querySelectorAll(ex));let o=0;const r=e.getBoundingClientRect();if(!t.some(a=>{const u=a.getBoundingClientRect();return u.width!==0||u.height!==0}))return{problems:[],checked:0};const i=t.map(a=>(o+=1,{el:a,r:a.getBoundingClientRect()}));for(const{el:a,r:u}of i){const s=a.dataset.testid??a.tagName;if(u.width===0||u.height===0){n.push(`零尺寸元素：${s}（${u.width}×${u.height}）`);continue}const d=u.left-r.left,c=u.top-r.top;(d<-1||c<-1)&&n.push(`负坐标：${s}（left=${d.toFixed(1)}, top=${c.toFixed(1)}）`),(u.right-r.right>1||u.bottom-r.bottom>1)&&n.push(`越界：${s}（右溢 ${(u.right-r.right).toFixed(1)}px，下溢 ${(u.bottom-r.bottom).toFixed(1)}px）`)}for(let a=0;a<i.length;a++)for(let u=a+1;u<i.length;u++){const s=i[a].r,d=i[u].r,c=Math.min(s.right,d.right)-Math.max(s.left,d.left),f=Math.min(s.bottom,d.bottom)-Math.max(s.top,d.top);c>1&&f>1&&n.push(`重叠：${i[a].el.dataset.testid} × ${i[u].el.dataset.testid}`)}return e.scrollHeight<r.height-2&&n.push("容器没撑开：scrollHeight 盖不住内容底边"),{problems:n,checked:o}}const Ut=24*60*60*1e3,de={id:"st",title:"自测券",amount:10,threshold:99},nx=D([]),tx=D([Z({claim:async()=>({ok:!0})})]),ox=D([Z({claim:async()=>({ok:!1,reason:"超出限领"})})]),rx=D([Z({stock:0})]),zl=D([sn({urgentDays:3}),Z({claim:async()=>({ok:!0})})]),lx=D([On()]),_s=D([He({showWhenNotStackable:!0})]),ix=D([He({showWhenNotStackable:!0}),sn({urgentDays:3}),On(),Z({claim:async()=>({ok:!0})})]),ax=D([Jn({urgentPct:30})]),ux=D([Zn({quota:2,purchasedCount:2})]),sx=D([$o({code:"ST-2026"}),Z({claim:async()=>({ok:!0})})]),zi=()=>new Promise(e=>setTimeout(e,0)),dn=async(e,n=60)=>{for(let t=0;t<n&&!e();t++)await zi()};async function pe(e){const n=document.createElement("div");n.style.cssText="position:fixed;left:0;top:0;width:420px;background:#fff",document.body.appendChild(n);const t=Fd(n);return ee.flushSync(()=>t.render(e)),await zi(),{host:n,root:t,q:o=>n.querySelector(o),qq:o=>n.querySelectorAll(o),click:async o=>{const r=n.querySelector(o);if(!r)throw new Error(`找不到元素 ${o}`);ee.flushSync(()=>r.click()),await zi()}}}async function cx(){var o,r,l,i,a,u,s,d,c,f,v,x,S,_,h,p,g;const e=[];let n=0;const t=(y,C)=>{n+=1,document.title=`SELFTEST RUNNING ${n}`,C||e.push(y)};{const y=await pe(m.jsx(nx,{coupon:de}));t("裸核心：渲染面额 ¥10",((r=(o=y.q('[data-testid="coupon-amount"]'))==null?void 0:o.textContent)==null?void 0:r.includes("10"))===!0),t("裸核心：门槛文案 满99可用",((l=y.q('[data-testid="coupon-threshold"]'))==null?void 0:l.textContent)==="满99可用"),t("裸核心：渲染标题",((i=y.q('[data-testid="coupon-title"]'))==null?void 0:i.textContent)==="自测券"),ee.flushSync(()=>y.root.unmount()),y.host.remove()}{const y=await pe(m.jsx(tx,{coupon:de})),C=()=>y.q('[data-testid="coupon-claim-btn"]');t("状态机：初始 available",((a=C())==null?void 0:a.dataset.phase)==="available"),await y.click('[data-testid="coupon-claim-btn"]'),await dn(()=>{var w;return((w=C())==null?void 0:w.dataset.phase)==="claimed"}),t("状态机：点击后 claimed（异步 claim 已 resolve）",((u=C())==null?void 0:u.dataset.phase)==="claimed"),t("状态机：终态按钮禁用",((s=C())==null?void 0:s.disabled)===!0),t("几何体检：领取卡无越界/重叠",ks(y.host).problems.length===0),ee.flushSync(()=>y.root.unmount()),y.host.remove()}{const y=await pe(m.jsx(ox,{coupon:de}));await y.click('[data-testid="coupon-claim-btn"]'),await dn(()=>{var E;return((E=y.q('[data-testid="coupon-claim-btn"]'))==null?void 0:E.dataset.phase)==="available"}),t("状态机：领取失败回退 available",((d=y.q('[data-testid="coupon-claim-btn"]'))==null?void 0:d.dataset.phase)==="available"),ee.flushSync(()=>y.root.unmount()),y.host.remove();const C=await pe(m.jsx(rx,{coupon:de})),w=C.q('[data-testid="coupon-claim-btn"]');t("状态机：stock=0 挂载即 soldout",(w==null?void 0:w.dataset.phase)==="soldout"),t("状态机：soldout 文案「已抢光」",(w==null?void 0:w.textContent)==="已抢光"),ee.flushSync(()=>C.root.unmount()),C.host.remove()}{const y=Date.now(),C=await pe(m.jsx(zl,{coupon:{...de,validFrom:y-10*Ut,validTo:y+2*Ut}})),w=C.q('[data-testid="coupon-validity"]');t("有效期：紧迫态标记 urgent",(w==null?void 0:w.dataset.urgent)==="true"),t("有效期：紧迫角标「仅剩」",((c=w==null?void 0:w.textContent)==null?void 0:c.includes("仅剩"))===!0);const E=C.q('[data-testid="coupon-claim-btn"]');t("有效期：未过期仍可领取",(E==null?void 0:E.dataset.phase)==="available"),ee.flushSync(()=>C.root.unmount()),C.host.remove();const T=await pe(m.jsx(zl,{coupon:{...de,validTo:y-Ut}})),b=T.q('[data-testid="coupon-claim-btn"]');await dn(()=>(b==null?void 0:b.dataset.phase)==="expired"),t("有效期：过期联动状态机降级 expired",(b==null?void 0:b.dataset.phase)==="expired"),t("有效期：过期角标「已过期」",((v=(f=T.q('[data-testid="coupon-validity"]'))==null?void 0:f.textContent)==null?void 0:v.includes("已过期"))===!0),ee.flushSync(()=>T.root.unmount()),T.host.remove();const $=await pe(m.jsx(zl,{coupon:{...de,validDays:7}})),G=$.q('[data-testid="coupon-validity"]');t("有效期：相对模式「领取后 7 天内有效」",((x=G==null?void 0:G.textContent)==null?void 0:x.includes("领取后 7 天内有效"))===!0),await $.click('[data-testid="coupon-claim-btn"]');const F=$.q('[data-testid="coupon-validity"]');await dn(()=>!((F==null?void 0:F.textContent)??"").includes("领取后")),t("有效期：领取后重算锚定 claimedAt",((F==null?void 0:F.textContent)??"").includes("领取后")===!1),ee.flushSync(()=>$.root.unmount()),$.host.remove()}{const y=await pe(m.jsx(lx,{coupon:{...de,rules:["一","二","三","四","五"]}}));t("规则：默认折叠 1 条",y.qq('[data-testid^="coupon-rule-"]').length===1),await y.click('[data-testid="coupon-rules-toggle"]'),t("规则：展开后 5 条",y.qq('[data-testid^="coupon-rule-"]').length===5),await y.click('[data-testid="coupon-rules-toggle"]'),t("规则：收起后 1 条",y.qq('[data-testid^="coupon-rule-"]').length===1),ee.flushSync(()=>y.root.unmount()),y.host.remove()}{const y=await pe(m.jsx(_s,{coupon:{...de,stackable:!0}}));t("叠加：stackable=true 显示可叠加",((S=y.q('[data-testid="coupon-stack-badge"]'))==null?void 0:S.textContent)==="可叠加"),ee.flushSync(()=>y.root.unmount()),y.host.remove();const C=await pe(m.jsx(_s,{coupon:{...de,stackable:!1}}));t("叠加：false 显示不可叠加灰标",((_=C.q('[data-testid="coupon-stack-badge"]'))==null?void 0:_.textContent)==="不可叠加"),ee.flushSync(()=>C.root.unmount()),C.host.remove()}{const y=Date.now(),C=await pe(m.jsx(ix,{coupon:{...de,amount:88,threshold:599,stackable:!0,validFrom:y-12*Ut,validTo:y+2*Ut,rules:["规则 A","规则 B","规则 C"]}}));t("合体：角标渲染",!!C.q('[data-testid="coupon-stack-badge"]')),t("合体：有效期渲染",!!C.q('[data-testid="coupon-validity"]')),t("合体：规则渲染",!!C.q('[data-testid="coupon-rules"]'));const w=C.q('[data-testid="coupon-validity"]'),E=C.q('[data-testid="coupon-rules"]');t("合体：槽内顺序 有效期在规则上方（priority 降序）",!!(w&&E&&w.compareDocumentPosition(E)&Node.DOCUMENT_POSITION_FOLLOWING)),t("合体：领取按钮渲染",!!C.q('[data-testid="coupon-claim-btn"]'));const T=ks(C.host);t("合体：几何体检 0 问题（happy-dom 无布局引擎时自动跳过）",T.problems.length===0&&(T.checked===0||T.checked>=2)),ee.flushSync(()=>C.root.unmount()),C.host.remove()}{const y=await pe(m.jsx(Ua,{coupon:de}));t("裸 CouponCore：直接渲染可用",!!y.q('[data-testid="coupon-title"]')),t("裸 CouponCore：挂载标记存在",!!y.q('[data-testid="coupon-mounted"]')),ee.flushSync(()=>y.root.unmount()),y.host.remove()}{const y=await pe(m.jsx(ax,{coupon:{...de,total:100,claimed:85}})),C=y.q('[data-testid="coupon-progress"]');t("进度：percent 属性 85",(C==null?void 0:C.dataset.percent)==="85"),t("进度：紧迫态 urgent=true（urgentPct 30）",(C==null?void 0:C.dataset.urgent)==="true"),t("进度：文案含 已抢 85% 与 仅剩 15 张",((C==null?void 0:C.textContent)??"").includes("已抢 85%")&&((C==null?void 0:C.textContent)??"").includes("仅剩 15 张")),ee.flushSync(()=>y.root.unmount()),y.host.remove();const w=await pe(m.jsx(ux,{coupon:de})),E=w.q('[data-testid="coupon-quota"]');t("限领：reached=true",(E==null?void 0:E.dataset.reached)==="true"),t("限领：文案「已达限领上限」",((E==null?void 0:E.textContent)??"").includes("已达限领上限")),ee.flushSync(()=>w.root.unmount()),w.host.remove();const T=await pe(m.jsx(sx,{coupon:de}));t("券码：available 相位不渲染",!T.q('[data-testid="coupon-code"]')),await T.click('[data-testid="coupon-claim-btn"]'),await dn(()=>!!T.q('[data-testid="coupon-code"]')),t("券码：领取后展示券码 ST-2026",((h=T.q('[data-testid="coupon-code"]'))==null?void 0:h.textContent)==="ST-2026"),t("券码：复制按钮存在",!!T.q('[data-testid="coupon-copy-btn"]')),ee.flushSync(()=>T.root.unmount()),T.host.remove();const b=D([Dt({startAt:Date.now()+200,tickMs:50,autoStart:!0})]),$=await pe(m.jsx(b,{coupon:de})),G=()=>$.q('[data-testid="coupon-root"]');await dn(()=>!!$.q('[data-testid="coupon-countdown-value"]'),150),t("倒计时：渲染「距开抢」",(((p=$.q('[data-testid="coupon-countdown-value"]'))==null?void 0:p.textContent)??"").includes("距开抢")),await dn(()=>{var F;return((F=G())==null?void 0:F.dataset.phase)==="available"},150),t("倒计时：到点 autoStart 进入 available",((g=G())==null?void 0:g.dataset.phase)==="available"),await dn(()=>!$.q('[data-testid="coupon-countdown-value"]'),150),t("倒计时：到点后倒计时消失",!$.q('[data-testid="coupon-countdown-value"]')),ee.flushSync(()=>$.root.unmount()),$.host.remove()}return{total:n,passed:n-e.length,failed:e}}async function dx(){document.title="SELFTEST RUNNING";try{const e=await cx();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Fl.createRoot(document.getElementById("root")).render(m.jsx(ZC,{}));typeof location<"u"&&location.search.includes("selftest=1")&&dx();export{tC as C,bi as D,xs as G,ws as P,Ir as S,yx as U,mx as a,fx as b,D as c,gx as d,hx as e,ks as f,m as j,P as r};
