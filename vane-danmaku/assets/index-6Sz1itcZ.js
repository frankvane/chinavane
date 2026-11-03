var Zf=Object.defineProperty;var Yf=(e,n,t)=>n in e?Zf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Ie=(e,n,t)=>Yf(e,typeof n!="symbol"?n+"":n,t);function Xf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function qf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gc={exports:{}},mi={},hc={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr=Symbol.for("react.element"),Jf=Symbol.for("react.portal"),em=Symbol.for("react.fragment"),nm=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),om=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),lm=Symbol.for("react.suspense"),am=Symbol.for("react.memo"),sm=Symbol.for("react.lazy"),Fs=Symbol.iterator;function um(e){return e===null||typeof e!="object"?null:(e=Fs&&e[Fs]||e["@@iterator"],typeof e=="function"?e:null)}var vc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yc=Object.assign,Pc={};function Ot(e,n,t){this.props=e,this.context=n,this.refs=Pc,this.updater=t||vc}Ot.prototype.isReactComponent={};Ot.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ot.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xc(){}xc.prototype=Ot.prototype;function ma(e,n,t){this.props=e,this.context=n,this.refs=Pc,this.updater=t||vc}var pa=ma.prototype=new xc;pa.constructor=ma;yc(pa,Ot.prototype);pa.isPureReactComponent=!0;var zs=Array.isArray,kc=Object.prototype.hasOwnProperty,ga={current:null},Sc={key:!0,ref:!0,__self:!0,__source:!0};function wc(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)kc.call(n,r)&&!Sc.hasOwnProperty(r)&&(o[r]=n[r]);var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Wr,type:e,key:i,ref:l,props:o,_owner:ga.current}}function cm(e,n){return{$$typeof:Wr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ha(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wr}function dm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Us=/\/+/g;function ji(e,n){return typeof e=="object"&&e!==null&&e.key!=null?dm(""+e.key):n.toString(36)}function Do(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Wr:case Jf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ji(l,0):r,zs(o)?(t="",e!=null&&(t=e.replace(Us,"$&/")+"/"),Do(o,n,t,"",function(u){return u})):o!=null&&(ha(o)&&(o=cm(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Us,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",zs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+ji(i,a);l+=Do(i,n,t,s,o)}else if(s=um(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+ji(i,a++),l+=Do(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function ao(e,n,t){if(e==null)return e;var r=[],o=0;return Do(e,r,"","",function(i){return n.call(t,i,o++)}),r}function fm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Ro={transition:null},mm={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:ga};function _c(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:ao,forEach:function(e,n,t){ao(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ao(e,function(){n++}),n},toArray:function(e){return ao(e,function(n){return n})||[]},only:function(e){if(!ha(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Ot;A.Fragment=em;A.Profiler=tm;A.PureComponent=ma;A.StrictMode=nm;A.Suspense=lm;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;A.act=_c;A.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=yc({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=ga.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)kc.call(n,s)&&!Sc.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Wr,type:e.type,key:o,ref:i,props:r,_owner:l}};A.createContext=function(e){return e={$$typeof:om,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rm,_context:e},e.Consumer=e};A.createElement=wc;A.createFactory=function(e){var n=wc.bind(null,e);return n.type=e,n};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:im,render:e}};A.isValidElement=ha;A.lazy=function(e){return{$$typeof:sm,_payload:{_status:-1,_result:e},_init:fm}};A.memo=function(e,n){return{$$typeof:am,type:e,compare:n===void 0?null:n}};A.startTransition=function(e){var n=Ro.transition;Ro.transition={};try{e()}finally{Ro.transition=n}};A.unstable_act=_c;A.useCallback=function(e,n){return we.current.useCallback(e,n)};A.useContext=function(e){return we.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return we.current.useDeferredValue(e)};A.useEffect=function(e,n){return we.current.useEffect(e,n)};A.useId=function(){return we.current.useId()};A.useImperativeHandle=function(e,n,t){return we.current.useImperativeHandle(e,n,t)};A.useInsertionEffect=function(e,n){return we.current.useInsertionEffect(e,n)};A.useLayoutEffect=function(e,n){return we.current.useLayoutEffect(e,n)};A.useMemo=function(e,n){return we.current.useMemo(e,n)};A.useReducer=function(e,n,t){return we.current.useReducer(e,n,t)};A.useRef=function(e){return we.current.useRef(e)};A.useState=function(e){return we.current.useState(e)};A.useSyncExternalStore=function(e,n,t){return we.current.useSyncExternalStore(e,n,t)};A.useTransition=function(){return we.current.useTransition()};A.version="18.3.1";hc.exports=A;var x=hc.exports;const Gr=qf(x),pm=Xf({__proto__:null,default:Gr},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm=x,hm=Symbol.for("react.element"),vm=Symbol.for("react.fragment"),ym=Object.prototype.hasOwnProperty,Pm=gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xm={key:!0,ref:!0,__self:!0,__source:!0};function Cc(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)ym.call(n,r)&&!xm.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:hm,type:e,key:i,ref:l,props:o,_owner:Pm.current}}mi.Fragment=vm;mi.jsx=Cc;mi.jsxs=Cc;gc.exports=mi;var c=gc.exports,cl={},Ec={exports:{}},Te={},bc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(w,_){var E=w.length;w.push(_);e:for(;0<E;){var T=E-1>>>1,M=w[T];if(0<o(M,_))w[T]=_,w[E]=M,E=T;else break e}}function t(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var _=w[0],E=w.pop();if(E!==_){w[0]=E;e:for(var T=0,M=w.length,I=M>>>1;T<I;){var z=2*(T+1)-1,Z=w[z],K=z+1,ge=w[K];if(0>o(Z,E))K<M&&0>o(ge,Z)?(w[T]=ge,w[K]=E,T=K):(w[T]=Z,w[z]=E,T=z);else if(K<M&&0>o(ge,E))w[T]=ge,w[K]=E,T=K;else break e}}return _}function o(w,_){var E=w.sortIndex-_.sortIndex;return E!==0?E:w.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,f=null,p=3,v=!1,y=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(w){for(var _=t(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=w)r(u),_.sortIndex=_.expirationTime,n(s,_);else break;_=t(u)}}function S(w){if(P=!1,h(w),!y)if(t(s)!==null)y=!0,He(b);else{var _=t(u);_!==null&&D(S,_.startTime-w)}}function b(w,_){y=!1,P&&(P=!1,g(R),R=-1),v=!0;var E=p;try{for(h(_),f=t(s);f!==null&&(!(f.expirationTime>_)||w&&!F());){var T=f.callback;if(typeof T=="function"){f.callback=null,p=f.priorityLevel;var M=T(f.expirationTime<=_);_=e.unstable_now(),typeof M=="function"?f.callback=M:f===t(s)&&r(s),h(_)}else r(s);f=t(s)}if(f!==null)var I=!0;else{var z=t(u);z!==null&&D(S,z.startTime-_),I=!1}return I}finally{f=null,p=E,v=!1}}var j=!1,L=null,R=-1,O=5,$=-1;function F(){return!(e.unstable_now()-$<O)}function oe(){if(L!==null){var w=e.unstable_now();$=w;var _=!0;try{_=L(!0,w)}finally{_?ae():(j=!1,L=null)}}else j=!1}var ae;if(typeof m=="function")ae=function(){m(oe)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Xe=H.port2;H.port1.onmessage=oe,ae=function(){Xe.postMessage(null)}}else ae=function(){k(oe,0)};function He(w){L=w,j||(j=!0,ae())}function D(w,_){R=k(function(){w(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,He(b))},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<w?Math.floor(1e3/w):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(w){switch(p){case 1:case 2:case 3:var _=3;break;default:_=p}var E=p;p=_;try{return w()}finally{p=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(w,_){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var E=p;p=w;try{return _()}finally{p=E}},e.unstable_scheduleCallback=function(w,_,E){var T=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?T+E:T):E=T,w){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=E+M,w={id:d++,callback:_,priorityLevel:w,startTime:E,expirationTime:M,sortIndex:-1},E>T?(w.sortIndex=E,n(u,w),t(s)===null&&w===t(u)&&(P?(g(R),R=-1):P=!0,D(S,E-T))):(w.sortIndex=M,n(s,w),y||v||(y=!0,He(b))),w},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(w){var _=p;return function(){var E=p;p=_;try{return w.apply(this,arguments)}finally{p=E}}}})(Dc);bc.exports=Dc;var km=bc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=x,$e=km;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rc=new Set,Cr={};function et(e,n){Lt(e,n),Lt(e+"Capture",n)}function Lt(e,n){for(Cr[e]=n,e=0;e<n.length;e++)Rc.add(n[e])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dl=Object.prototype.hasOwnProperty,wm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bs={},Hs={};function _m(e){return dl.call(Hs,e)?!0:dl.call(Bs,e)?!1:wm.test(e)?Hs[e]=!0:(Bs[e]=!0,!1)}function Cm(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Em(e,n,t,r){if(n===null||typeof n>"u"||Cm(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _e(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];pe[n]=new _e(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var va=/[\-:]([a-z])/g;function ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(va,ya);pe[n]=new _e(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(va,ya);pe[n]=new _e(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(va,ya);pe[n]=new _e(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pa(e,n,t,r){var o=pe.hasOwnProperty(n)?pe[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Em(n,t,o,r)&&(t=null),r||o===null?_m(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var mn=Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),ft=Symbol.for("react.portal"),mt=Symbol.for("react.fragment"),xa=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),Lc=Symbol.for("react.provider"),jc=Symbol.for("react.context"),ka=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Nc=Symbol.for("react.offscreen"),Ws=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ni;function dr(e){if(Ni===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ni=n&&n[1]||""}return`
`+Ni+e}var $i=!1;function Ti(e,n){if(!e||$i)return"";$i=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{$i=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?dr(e):""}function bm(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mt:return"Fragment";case ft:return"Portal";case fl:return"Profiler";case xa:return"StrictMode";case ml:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jc:return(e.displayName||"Context")+".Consumer";case Lc:return(e._context.displayName||"Context")+".Provider";case ka:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sa:return n=e.displayName||null,n!==null?n:gl(e.type)||"Memo";case Pn:n=e._payload,e=e._init;try{return gl(e(n))}catch{}}return null}function Dm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gl(n);case 8:return n===xa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $c(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rm(e){var n=$c(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function uo(e){e._valueTracker||(e._valueTracker=Rm(e))}function Tc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=$c(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hl(e,n){var t=n.checked;return q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Gs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Mn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Mc(e,n){n=n.checked,n!=null&&Pa(e,"checked",n,!1)}function vl(e,n){Mc(e,n);var t=Mn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?yl(e,n.type,t):n.hasOwnProperty("defaultValue")&&yl(e,n.type,Mn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Vs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function yl(e,n,t){(n!=="number"||zo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var fr=Array.isArray;function _t(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Mn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Pl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ks(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(fr(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Mn(t)}}function Ic(e,n){var t=Mn(n.value),r=Mn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Qs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Oc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Oc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var co,Ac=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Er(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lm=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){Lm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),hr[n]=hr[e]})});function Fc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||hr.hasOwnProperty(e)&&hr[e]?(""+n).trim():n+"px"}function zc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Fc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var jm=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,n){if(n){if(jm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function Sl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wl=null;function wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,Ct=null,Et=null;function Zs(e){if(e=Qr(e)){if(typeof _l!="function")throw Error(C(280));var n=e.stateNode;n&&(n=yi(n),_l(e.stateNode,e.type,n))}}function Uc(e){Ct?Et?Et.push(e):Et=[e]:Ct=e}function Bc(){if(Ct){var e=Ct,n=Et;if(Et=Ct=null,Zs(e),n)for(e=0;e<n.length;e++)Zs(n[e])}}function Hc(e,n){return e(n)}function Wc(){}var Mi=!1;function Gc(e,n,t){if(Mi)return e(n,t);Mi=!0;try{return Hc(e,n,t)}finally{Mi=!1,(Ct!==null||Et!==null)&&(Wc(),Bc())}}function br(e,n){var t=e.stateNode;if(t===null)return null;var r=yi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var Cl=!1;if(un)try{var or={};Object.defineProperty(or,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{Cl=!1}function Nm(e,n,t,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var vr=!1,Uo=null,Bo=!1,El=null,$m={onError:function(e){vr=!0,Uo=e}};function Tm(e,n,t,r,o,i,l,a,s){vr=!1,Uo=null,Nm.apply($m,arguments)}function Mm(e,n,t,r,o,i,l,a,s){if(Tm.apply(this,arguments),vr){if(vr){var u=Uo;vr=!1,Uo=null}else throw Error(C(198));Bo||(Bo=!0,El=u)}}function nt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Vc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ys(e){if(nt(e)!==e)throw Error(C(188))}function Im(e){var n=e.alternate;if(!n){if(n=nt(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Ys(o),e;if(i===r)return Ys(o),n;i=i.sibling}throw Error(C(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function Kc(e){return e=Im(e),e!==null?Qc(e):null}function Qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Qc(e);if(n!==null)return n;e=e.sibling}return null}var Zc=$e.unstable_scheduleCallback,Xs=$e.unstable_cancelCallback,Om=$e.unstable_shouldYield,Am=$e.unstable_requestPaint,ne=$e.unstable_now,Fm=$e.unstable_getCurrentPriorityLevel,_a=$e.unstable_ImmediatePriority,Yc=$e.unstable_UserBlockingPriority,Ho=$e.unstable_NormalPriority,zm=$e.unstable_LowPriority,Xc=$e.unstable_IdlePriority,pi=null,nn=null;function Um(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Wm,Bm=Math.log,Hm=Math.LN2;function Wm(e){return e>>>=0,e===0?32:31-(Bm(e)/Hm|0)|0}var fo=64,mo=4194304;function mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~o;a!==0?r=mr(a):(i&=l,i!==0&&(r=mr(i)))}else l=t&~o,l!==0?r=mr(l):i!==0&&(r=mr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Qe(n),o=1<<t,r|=e[t],n&=~o;return r}function Gm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vm(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Qe(i),a=1<<l,s=o[l];s===-1?(!(a&t)||a&r)&&(o[l]=Gm(a,n)):s<=n&&(e.expiredLanes|=a),i&=~a}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qc(){var e=fo;return fo<<=1,!(fo&4194240)&&(fo=64),e}function Ii(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Vr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Qe(n),e[n]=t}function Km(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Qe(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Ca(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Qe(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var B=0;function Jc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ed,Ea,nd,td,rd,Dl=!1,po=[],En=null,bn=null,Dn=null,Dr=new Map,Rr=new Map,kn=[],Qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,n){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Dr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(n.pointerId)}}function ir(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=Qr(n),n!==null&&Ea(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Zm(e,n,t,r,o){switch(n){case"focusin":return En=ir(En,e,n,t,r,o),!0;case"dragenter":return bn=ir(bn,e,n,t,r,o),!0;case"mouseover":return Dn=ir(Dn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Dr.set(i,ir(Dr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Rr.set(i,ir(Rr.get(i)||null,e,n,t,r,o)),!0}return!1}function od(e){var n=Wn(e.target);if(n!==null){var t=nt(n);if(t!==null){if(n=t.tag,n===13){if(n=Vc(t),n!==null){e.blockedOn=n,rd(e.priority,function(){nd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Rl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);wl=r,t.target.dispatchEvent(r),wl=null}else return n=Qr(t),n!==null&&Ea(n),e.blockedOn=t,!1;n.shift()}return!0}function Js(e,n,t){Lo(e)&&t.delete(n)}function Ym(){Dl=!1,En!==null&&Lo(En)&&(En=null),bn!==null&&Lo(bn)&&(bn=null),Dn!==null&&Lo(Dn)&&(Dn=null),Dr.forEach(Js),Rr.forEach(Js)}function lr(e,n){e.blockedOn===n&&(e.blockedOn=null,Dl||(Dl=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Ym)))}function Lr(e){function n(o){return lr(o,e)}if(0<po.length){lr(po[0],e);for(var t=1;t<po.length;t++){var r=po[t];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&lr(En,e),bn!==null&&lr(bn,e),Dn!==null&&lr(Dn,e),Dr.forEach(n),Rr.forEach(n),t=0;t<kn.length;t++)r=kn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(t=kn[0],t.blockedOn===null);)od(t),t.blockedOn===null&&kn.shift()}var bt=mn.ReactCurrentBatchConfig,Go=!0;function Xm(e,n,t,r){var o=B,i=bt.transition;bt.transition=null;try{B=1,ba(e,n,t,r)}finally{B=o,bt.transition=i}}function qm(e,n,t,r){var o=B,i=bt.transition;bt.transition=null;try{B=4,ba(e,n,t,r)}finally{B=o,bt.transition=i}}function ba(e,n,t,r){if(Go){var o=Rl(e,n,t,r);if(o===null)Vi(e,n,r,Vo,t),qs(e,r);else if(Zm(o,e,n,t,r))r.stopPropagation();else if(qs(e,r),n&4&&-1<Qm.indexOf(e)){for(;o!==null;){var i=Qr(o);if(i!==null&&ed(i),i=Rl(e,n,t,r),i===null&&Vi(e,n,r,Vo,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Vi(e,n,r,null,t)}}var Vo=null;function Rl(e,n,t,r){if(Vo=null,e=wa(r),e=Wn(e),e!==null)if(n=nt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Vc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Vo=e,null}function id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fm()){case _a:return 1;case Yc:return 4;case Ho:case zm:return 16;case Xc:return 536870912;default:return 16}default:return 16}}var wn=null,Da=null,jo=null;function ld(){if(jo)return jo;var e,n=Da,t=n.length,r,o="value"in wn?wn.value:wn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return jo=o.slice(e,1<r?1-r:void 0)}function No(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function eu(){return!1}function Me(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?go:eu,this.isPropagationStopped=eu,this}return q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),n}var At={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ra=Me(At),Kr=q({},At,{view:0,detail:0}),Jm=Me(Kr),Oi,Ai,ar,gi=q({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:La,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(Oi=e.screenX-ar.screenX,Ai=e.screenY-ar.screenY):Ai=Oi=0,ar=e),Oi)},movementY:function(e){return"movementY"in e?e.movementY:Ai}}),nu=Me(gi),ep=q({},gi,{dataTransfer:0}),np=Me(ep),tp=q({},Kr,{relatedTarget:0}),Fi=Me(tp),rp=q({},At,{animationName:0,elapsedTime:0,pseudoElement:0}),op=Me(rp),ip=q({},At,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lp=Me(ip),ap=q({},At,{data:0}),tu=Me(ap),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=cp[e])?!!n[e]:!1}function La(){return dp}var fp=q({},Kr,{key:function(e){if(e.key){var n=sp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:La,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mp=Me(fp),pp=q({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=Me(pp),gp=q({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:La}),hp=Me(gp),vp=q({},At,{propertyName:0,elapsedTime:0,pseudoElement:0}),yp=Me(vp),Pp=q({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xp=Me(Pp),kp=[9,13,27,32],ja=un&&"CompositionEvent"in window,yr=null;un&&"documentMode"in document&&(yr=document.documentMode);var Sp=un&&"TextEvent"in window&&!yr,ad=un&&(!ja||yr&&8<yr&&11>=yr),ou=" ",iu=!1;function sd(e,n){switch(e){case"keyup":return kp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pt=!1;function wp(e,n){switch(e){case"compositionend":return ud(n);case"keypress":return n.which!==32?null:(iu=!0,ou);case"textInput":return e=n.data,e===ou&&iu?null:e;default:return null}}function _p(e,n){if(pt)return e==="compositionend"||!ja&&sd(e,n)?(e=ld(),jo=Da=wn=null,pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ad&&n.locale!=="ko"?null:n.data;default:return null}}var Cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cp[e.type]:n==="textarea"}function cd(e,n,t,r){Uc(r),n=Ko(n,"onChange"),0<n.length&&(t=new Ra("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Pr=null,jr=null;function Ep(e){kd(e,0)}function hi(e){var n=vt(e);if(Tc(n))return e}function bp(e,n){if(e==="change")return n}var dd=!1;if(un){var zi;if(un){var Ui="oninput"in document;if(!Ui){var au=document.createElement("div");au.setAttribute("oninput","return;"),Ui=typeof au.oninput=="function"}zi=Ui}else zi=!1;dd=zi&&(!document.documentMode||9<document.documentMode)}function su(){Pr&&(Pr.detachEvent("onpropertychange",fd),jr=Pr=null)}function fd(e){if(e.propertyName==="value"&&hi(jr)){var n=[];cd(n,jr,e,wa(e)),Gc(Ep,n)}}function Dp(e,n,t){e==="focusin"?(su(),Pr=n,jr=t,Pr.attachEvent("onpropertychange",fd)):e==="focusout"&&su()}function Rp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(jr)}function Lp(e,n){if(e==="click")return hi(n)}function jp(e,n){if(e==="input"||e==="change")return hi(n)}function Np(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ye=typeof Object.is=="function"?Object.is:Np;function Nr(e,n){if(Ye(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!dl.call(n,o)||!Ye(e[o],n[o]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cu(e,n){var t=uu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=uu(t)}}function md(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?md(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function pd(){for(var e=window,n=zo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=zo(e.document)}return n}function Na(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function $p(e){var n=pd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&md(t.ownerDocument.documentElement,t)){if(r!==null&&Na(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=cu(t,i);var l=cu(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tp=un&&"documentMode"in document&&11>=document.documentMode,gt=null,Ll=null,xr=null,jl=!1;function du(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;jl||gt==null||gt!==zo(r)||(r=gt,"selectionStart"in r&&Na(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Nr(xr,r)||(xr=r,r=Ko(Ll,"onSelect"),0<r.length&&(n=new Ra("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=gt)))}function ho(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ht={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Bi={},gd={};un&&(gd=document.createElement("div").style,"AnimationEvent"in window||(delete ht.animationend.animation,delete ht.animationiteration.animation,delete ht.animationstart.animation),"TransitionEvent"in window||delete ht.transitionend.transition);function vi(e){if(Bi[e])return Bi[e];if(!ht[e])return e;var n=ht[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in gd)return Bi[e]=n[t];return e}var hd=vi("animationend"),vd=vi("animationiteration"),yd=vi("animationstart"),Pd=vi("transitionend"),xd=new Map,fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,n){xd.set(e,n),et(n,[e])}for(var Hi=0;Hi<fu.length;Hi++){var Wi=fu[Hi],Mp=Wi.toLowerCase(),Ip=Wi[0].toUpperCase()+Wi.slice(1);On(Mp,"on"+Ip)}On(hd,"onAnimationEnd");On(vd,"onAnimationIteration");On(yd,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(Pd,"onTransitionEnd");Lt("onMouseEnter",["mouseout","mouseover"]);Lt("onMouseLeave",["mouseout","mouseover"]);Lt("onPointerEnter",["pointerout","pointerover"]);Lt("onPointerLeave",["pointerout","pointerover"]);et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));et("onBeforeInput",["compositionend","keypress","textInput","paste"]);et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Op=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function mu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Mm(r,n,void 0,e),e.currentTarget=null}function kd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;mu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;mu(o,a,u),i=s}}}if(Bo)throw e=El,Bo=!1,El=null,e}function G(e,n){var t=n[Il];t===void 0&&(t=n[Il]=new Set);var r=e+"__bubble";t.has(r)||(Sd(n,e,2,!1),t.add(r))}function Gi(e,n,t){var r=0;n&&(r|=4),Sd(t,e,r,n)}var vo="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[vo]){e[vo]=!0,Rc.forEach(function(t){t!=="selectionchange"&&(Op.has(t)||Gi(t,!1,e),Gi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[vo]||(n[vo]=!0,Gi("selectionchange",!1,n))}}function Sd(e,n,t,r){switch(id(n)){case 1:var o=Xm;break;case 4:o=qm;break;default:o=ba}t=o.bind(null,n,t,e),o=void 0,!Cl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Vi(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Wn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Gc(function(){var u=i,d=wa(t),f=[];e:{var p=xd.get(e);if(p!==void 0){var v=Ra,y=e;switch(e){case"keypress":if(No(t)===0)break e;case"keydown":case"keyup":v=mp;break;case"focusin":y="focus",v=Fi;break;case"focusout":y="blur",v=Fi;break;case"beforeblur":case"afterblur":v=Fi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=hp;break;case hd:case vd:case yd:v=op;break;case Pd:v=yp;break;case"scroll":v=Jm;break;case"wheel":v=xp;break;case"copy":case"cut":case"paste":v=lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ru}var P=(n&4)!==0,k=!P&&e==="scroll",g=P?p!==null?p+"Capture":null:p;P=[];for(var m=u,h;m!==null;){h=m;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,g!==null&&(S=br(m,g),S!=null&&P.push(Tr(m,S,h)))),k)break;m=m.return}0<P.length&&(p=new v(p,y,null,t,d),f.push({event:p,listeners:P}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&t!==wl&&(y=t.relatedTarget||t.fromElement)&&(Wn(y)||y[cn]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=t.relatedTarget||t.toElement,v=u,y=y?Wn(y):null,y!==null&&(k=nt(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(P=nu,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(P=ru,S="onPointerLeave",g="onPointerEnter",m="pointer"),k=v==null?p:vt(v),h=y==null?p:vt(y),p=new P(S,m+"leave",v,t,d),p.target=k,p.relatedTarget=h,S=null,Wn(d)===u&&(P=new P(g,m+"enter",y,t,d),P.target=h,P.relatedTarget=k,S=P),k=S,v&&y)n:{for(P=v,g=y,m=0,h=P;h;h=dt(h))m++;for(h=0,S=g;S;S=dt(S))h++;for(;0<m-h;)P=dt(P),m--;for(;0<h-m;)g=dt(g),h--;for(;m--;){if(P===g||g!==null&&P===g.alternate)break n;P=dt(P),g=dt(g)}P=null}else P=null;v!==null&&pu(f,p,v,P,!1),y!==null&&k!==null&&pu(f,k,y,P,!0)}}e:{if(p=u?vt(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var b=bp;else if(lu(p))if(dd)b=jp;else{b=Rp;var j=Dp}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=Lp);if(b&&(b=b(e,u))){cd(f,b,t,d);break e}j&&j(e,p,u),e==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&yl(p,"number",p.value)}switch(j=u?vt(u):window,e){case"focusin":(lu(j)||j.contentEditable==="true")&&(gt=j,Ll=u,xr=null);break;case"focusout":xr=Ll=gt=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,du(f,t,d);break;case"selectionchange":if(Tp)break;case"keydown":case"keyup":du(f,t,d)}var L;if(ja)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else pt?sd(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(ad&&t.locale!=="ko"&&(pt||R!=="onCompositionStart"?R==="onCompositionEnd"&&pt&&(L=ld()):(wn=d,Da="value"in wn?wn.value:wn.textContent,pt=!0)),j=Ko(u,R),0<j.length&&(R=new tu(R,e,null,t,d),f.push({event:R,listeners:j}),L?R.data=L:(L=ud(t),L!==null&&(R.data=L)))),(L=Sp?wp(e,t):_p(e,t))&&(u=Ko(u,"onBeforeInput"),0<u.length&&(d=new tu("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:u}),d.data=L))}kd(f,n)})}function Tr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ko(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=br(e,t),i!=null&&r.unshift(Tr(e,i,o)),i=br(e,n),i!=null&&r.push(Tr(e,i,o))),e=e.return}return r}function dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pu(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=br(t,i),s!=null&&l.unshift(Tr(t,s,a))):o||(s=br(t,i),s!=null&&l.push(Tr(t,s,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Ap=/\r\n?/g,Fp=/\u0000|\uFFFD/g;function gu(e){return(typeof e=="string"?e:""+e).replace(Ap,`
`).replace(Fp,"")}function yo(e,n,t){if(n=gu(n),gu(e)!==n&&t)throw Error(C(425))}function Qo(){}var Nl=null,$l=null;function Tl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ml=typeof setTimeout=="function"?setTimeout:void 0,zp=typeof clearTimeout=="function"?clearTimeout:void 0,hu=typeof Promise=="function"?Promise:void 0,Up=typeof queueMicrotask=="function"?queueMicrotask:typeof hu<"u"?function(e){return hu.resolve(null).then(e).catch(Bp)}:Ml;function Bp(e){setTimeout(function(){throw e})}function Ki(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Lr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Lr(n)}function Rn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function vu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ft=Math.random().toString(36).slice(2),en="__reactFiber$"+Ft,Mr="__reactProps$"+Ft,cn="__reactContainer$"+Ft,Il="__reactEvents$"+Ft,Hp="__reactListeners$"+Ft,Wp="__reactHandles$"+Ft;function Wn(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[cn]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=vu(e);e!==null;){if(t=e[en])return t;e=vu(e)}return n}e=t,t=e.parentNode}return null}function Qr(e){return e=e[en]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function yi(e){return e[Mr]||null}var Ol=[],yt=-1;function An(e){return{current:e}}function V(e){0>yt||(e.current=Ol[yt],Ol[yt]=null,yt--)}function W(e,n){yt++,Ol[yt]=e.current,e.current=n}var In={},Pe=An(In),be=An(!1),Zn=In;function jt(e,n){var t=e.type.contextTypes;if(!t)return In;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function De(e){return e=e.childContextTypes,e!=null}function Zo(){V(be),V(Pe)}function yu(e,n,t){if(Pe.current!==In)throw Error(C(168));W(Pe,n),W(be,t)}function wd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(C(108,Dm(e)||"Unknown",o));return q({},t,r)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Zn=Pe.current,W(Pe,e),W(be,be.current),!0}function Pu(e,n,t){var r=e.stateNode;if(!r)throw Error(C(169));t?(e=wd(e,n,Zn),r.__reactInternalMemoizedMergedChildContext=e,V(be),V(Pe),W(Pe,e)):V(be),W(be,t)}var on=null,Pi=!1,Qi=!1;function _d(e){on===null?on=[e]:on.push(e)}function Gp(e){Pi=!0,_d(e)}function Fn(){if(!Qi&&on!==null){Qi=!0;var e=0,n=B;try{var t=on;for(B=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}on=null,Pi=!1}catch(o){throw on!==null&&(on=on.slice(e+1)),Zc(_a,Fn),o}finally{B=n,Qi=!1}}return null}var Pt=[],xt=0,Xo=null,qo=0,Oe=[],Ae=0,Yn=null,ln=1,an="";function Bn(e,n){Pt[xt++]=qo,Pt[xt++]=Xo,Xo=e,qo=n}function Cd(e,n,t){Oe[Ae++]=ln,Oe[Ae++]=an,Oe[Ae++]=Yn,Yn=e;var r=ln;e=an;var o=32-Qe(r)-1;r&=~(1<<o),t+=1;var i=32-Qe(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ln=1<<32-Qe(n)+o|t<<o|r,an=i+e}else ln=1<<i|t<<o|r,an=e}function $a(e){e.return!==null&&(Bn(e,1),Cd(e,1,0))}function Ta(e){for(;e===Xo;)Xo=Pt[--xt],Pt[xt]=null,qo=Pt[--xt],Pt[xt]=null;for(;e===Yn;)Yn=Oe[--Ae],Oe[Ae]=null,an=Oe[--Ae],Oe[Ae]=null,ln=Oe[--Ae],Oe[Ae]=null}var Ne=null,je=null,Q=!1,Ke=null;function Ed(e,n){var t=Fe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function xu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ne=e,je=Rn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ne=e,je=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Yn!==null?{id:ln,overflow:an}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Fe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ne=e,je=null,!0):!1;default:return!1}}function Al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fl(e){if(Q){var n=je;if(n){var t=n;if(!xu(e,n)){if(Al(e))throw Error(C(418));n=Rn(t.nextSibling);var r=Ne;n&&xu(e,n)?Ed(r,t):(e.flags=e.flags&-4097|2,Q=!1,Ne=e)}}else{if(Al(e))throw Error(C(418));e.flags=e.flags&-4097|2,Q=!1,Ne=e}}}function ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Po(e){if(e!==Ne)return!1;if(!Q)return ku(e),Q=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Tl(e.type,e.memoizedProps)),n&&(n=je)){if(Al(e))throw bd(),Error(C(418));for(;n;)Ed(e,n),n=Rn(n.nextSibling)}if(ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){je=Rn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}je=null}}else je=Ne?Rn(e.stateNode.nextSibling):null;return!0}function bd(){for(var e=je;e;)e=Rn(e.nextSibling)}function Nt(){je=Ne=null,Q=!1}function Ma(e){Ke===null?Ke=[e]:Ke.push(e)}var Vp=mn.ReactCurrentBatchConfig;function sr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function xo(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Su(e){var n=e._init;return n(e._payload)}function Dd(e){function n(g,m){if(e){var h=g.deletions;h===null?(g.deletions=[m],g.flags|=16):h.push(m)}}function t(g,m){if(!e)return null;for(;m!==null;)n(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=$n(g,m),g.index=0,g.sibling=null,g}function i(g,m,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<m?(g.flags|=2,m):h):(g.flags|=2,m)):(g.flags|=1048576,m)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,m,h,S){return m===null||m.tag!==6?(m=nl(h,g.mode,S),m.return=g,m):(m=o(m,h),m.return=g,m)}function s(g,m,h,S){var b=h.type;return b===mt?d(g,m,h.props.children,S,h.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Pn&&Su(b)===m.type)?(S=o(m,h.props),S.ref=sr(g,m,h),S.return=g,S):(S=Fo(h.type,h.key,h.props,null,g.mode,S),S.ref=sr(g,m,h),S.return=g,S)}function u(g,m,h,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=tl(h,g.mode,S),m.return=g,m):(m=o(m,h.children||[]),m.return=g,m)}function d(g,m,h,S,b){return m===null||m.tag!==7?(m=Qn(h,g.mode,S,b),m.return=g,m):(m=o(m,h),m.return=g,m)}function f(g,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=nl(""+m,g.mode,h),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case so:return h=Fo(m.type,m.key,m.props,null,g.mode,h),h.ref=sr(g,null,m),h.return=g,h;case ft:return m=tl(m,g.mode,h),m.return=g,m;case Pn:var S=m._init;return f(g,S(m._payload),h)}if(fr(m)||rr(m))return m=Qn(m,g.mode,h,null),m.return=g,m;xo(g,m)}return null}function p(g,m,h,S){var b=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:a(g,m,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case so:return h.key===b?s(g,m,h,S):null;case ft:return h.key===b?u(g,m,h,S):null;case Pn:return b=h._init,p(g,m,b(h._payload),S)}if(fr(h)||rr(h))return b!==null?null:d(g,m,h,S,null);xo(g,h)}return null}function v(g,m,h,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(h)||null,a(m,g,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case so:return g=g.get(S.key===null?h:S.key)||null,s(m,g,S,b);case ft:return g=g.get(S.key===null?h:S.key)||null,u(m,g,S,b);case Pn:var j=S._init;return v(g,m,h,j(S._payload),b)}if(fr(S)||rr(S))return g=g.get(h)||null,d(m,g,S,b,null);xo(m,S)}return null}function y(g,m,h,S){for(var b=null,j=null,L=m,R=m=0,O=null;L!==null&&R<h.length;R++){L.index>R?(O=L,L=null):O=L.sibling;var $=p(g,L,h[R],S);if($===null){L===null&&(L=O);break}e&&L&&$.alternate===null&&n(g,L),m=i($,m,R),j===null?b=$:j.sibling=$,j=$,L=O}if(R===h.length)return t(g,L),Q&&Bn(g,R),b;if(L===null){for(;R<h.length;R++)L=f(g,h[R],S),L!==null&&(m=i(L,m,R),j===null?b=L:j.sibling=L,j=L);return Q&&Bn(g,R),b}for(L=r(g,L);R<h.length;R++)O=v(L,g,R,h[R],S),O!==null&&(e&&O.alternate!==null&&L.delete(O.key===null?R:O.key),m=i(O,m,R),j===null?b=O:j.sibling=O,j=O);return e&&L.forEach(function(F){return n(g,F)}),Q&&Bn(g,R),b}function P(g,m,h,S){var b=rr(h);if(typeof b!="function")throw Error(C(150));if(h=b.call(h),h==null)throw Error(C(151));for(var j=b=null,L=m,R=m=0,O=null,$=h.next();L!==null&&!$.done;R++,$=h.next()){L.index>R?(O=L,L=null):O=L.sibling;var F=p(g,L,$.value,S);if(F===null){L===null&&(L=O);break}e&&L&&F.alternate===null&&n(g,L),m=i(F,m,R),j===null?b=F:j.sibling=F,j=F,L=O}if($.done)return t(g,L),Q&&Bn(g,R),b;if(L===null){for(;!$.done;R++,$=h.next())$=f(g,$.value,S),$!==null&&(m=i($,m,R),j===null?b=$:j.sibling=$,j=$);return Q&&Bn(g,R),b}for(L=r(g,L);!$.done;R++,$=h.next())$=v(L,g,R,$.value,S),$!==null&&(e&&$.alternate!==null&&L.delete($.key===null?R:$.key),m=i($,m,R),j===null?b=$:j.sibling=$,j=$);return e&&L.forEach(function(oe){return n(g,oe)}),Q&&Bn(g,R),b}function k(g,m,h,S){if(typeof h=="object"&&h!==null&&h.type===mt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case so:e:{for(var b=h.key,j=m;j!==null;){if(j.key===b){if(b=h.type,b===mt){if(j.tag===7){t(g,j.sibling),m=o(j,h.props.children),m.return=g,g=m;break e}}else if(j.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Pn&&Su(b)===j.type){t(g,j.sibling),m=o(j,h.props),m.ref=sr(g,j,h),m.return=g,g=m;break e}t(g,j);break}else n(g,j);j=j.sibling}h.type===mt?(m=Qn(h.props.children,g.mode,S,h.key),m.return=g,g=m):(S=Fo(h.type,h.key,h.props,null,g.mode,S),S.ref=sr(g,m,h),S.return=g,g=S)}return l(g);case ft:e:{for(j=h.key;m!==null;){if(m.key===j)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){t(g,m.sibling),m=o(m,h.children||[]),m.return=g,g=m;break e}else{t(g,m);break}else n(g,m);m=m.sibling}m=tl(h,g.mode,S),m.return=g,g=m}return l(g);case Pn:return j=h._init,k(g,m,j(h._payload),S)}if(fr(h))return y(g,m,h,S);if(rr(h))return P(g,m,h,S);xo(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(t(g,m.sibling),m=o(m,h),m.return=g,g=m):(t(g,m),m=nl(h,g.mode,S),m.return=g,g=m),l(g)):t(g,m)}return k}var $t=Dd(!0),Rd=Dd(!1),Jo=An(null),ei=null,kt=null,Ia=null;function Oa(){Ia=kt=ei=null}function Aa(e){var n=Jo.current;V(Jo),e._currentValue=n}function zl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Dt(e,n){ei=e,Ia=kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ee=!0),e.firstContext=null)}function Ue(e){var n=e._currentValue;if(Ia!==e)if(e={context:e,memoizedValue:n,next:null},kt===null){if(ei===null)throw Error(C(308));kt=e,ei.dependencies={lanes:0,firstContext:e}}else kt=kt.next=e;return n}var Gn=null;function Fa(e){Gn===null?Gn=[e]:Gn.push(e)}function Ld(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Fa(n)):(t.next=o.next,o.next=t),n.interleaved=t,dn(e,r)}function dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var xn=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ln(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,dn(e,t)}return o=r.interleaved,o===null?(n.next=n,Fa(r)):(n.next=o.next,o.next=n),r.interleaved=n,dn(e,t)}function $o(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ca(e,t)}}function wu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ni(e,n,t,r){var o=e.updateQueue;xn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;l=0,d=u=s=null,a=i;do{var p=a.lane,v=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,P=a;switch(p=n,v=t,P.tag){case 1:if(y=P.payload,typeof y=="function"){f=y.call(v,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=P.payload,p=typeof y=="function"?y.call(v,f,p):y,p==null)break e;f=q({},f,p);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,s=f):d=d.next=v,l|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);qn|=l,e.lanes=l,e.memoizedState=f}}function _u(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Zr={},tn=An(Zr),Ir=An(Zr),Or=An(Zr);function Vn(e){if(e===Zr)throw Error(C(174));return e}function Ua(e,n){switch(W(Or,n),W(Ir,e),W(tn,Zr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:xl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=xl(n,e)}V(tn),W(tn,n)}function Tt(){V(tn),V(Ir),V(Or)}function Nd(e){Vn(Or.current);var n=Vn(tn.current),t=xl(n,e.type);n!==t&&(W(Ir,e),W(tn,t))}function Ba(e){Ir.current===e&&(V(tn),V(Ir))}var Y=An(0);function ti(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=[];function Ha(){for(var e=0;e<Zi.length;e++)Zi[e]._workInProgressVersionPrimary=null;Zi.length=0}var To=mn.ReactCurrentDispatcher,Yi=mn.ReactCurrentBatchConfig,Xn=0,X=null,ie=null,ue=null,ri=!1,kr=!1,Ar=0,Kp=0;function he(){throw Error(C(321))}function Wa(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ye(e[t],n[t]))return!1;return!0}function Ga(e,n,t,r,o,i){if(Xn=i,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,To.current=e===null||e.memoizedState===null?Xp:qp,e=t(r,o),kr){i=0;do{if(kr=!1,Ar=0,25<=i)throw Error(C(301));i+=1,ue=ie=null,n.updateQueue=null,To.current=Jp,e=t(r,o)}while(kr)}if(To.current=oi,n=ie!==null&&ie.next!==null,Xn=0,ue=ie=X=null,ri=!1,n)throw Error(C(300));return e}function Va(){var e=Ar!==0;return Ar=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?X.memoizedState=ue=e:ue=ue.next=e,ue}function Be(){if(ie===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var n=ue===null?X.memoizedState:ue.next;if(n!==null)ue=n,ie=e;else{if(e===null)throw Error(C(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ue===null?X.memoizedState=ue=e:ue=ue.next=e}return ue}function Fr(e,n){return typeof n=="function"?n(e):n}function Xi(e){var n=Be(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var d=u.lane;if((Xn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,X.lanes|=d,qn|=d}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Ye(r,n.memoizedState)||(Ee=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,X.lanes|=i,qn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function qi(e){var n=Be(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ye(i,n.memoizedState)||(Ee=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function $d(){}function Td(e,n){var t=X,r=Be(),o=n(),i=!Ye(r.memoizedState,o);if(i&&(r.memoizedState=o,Ee=!0),r=r.queue,Ka(Od.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ue!==null&&ue.memoizedState.tag&1){if(t.flags|=2048,zr(9,Id.bind(null,t,r,o,n),void 0,null),ce===null)throw Error(C(349));Xn&30||Md(t,n,o)}return o}function Md(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Id(e,n,t,r){n.value=t,n.getSnapshot=r,Ad(n)&&Fd(e)}function Od(e,n,t){return t(function(){Ad(n)&&Fd(e)})}function Ad(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ye(e,t)}catch{return!0}}function Fd(e){var n=dn(e,1);n!==null&&Ze(n,e,1,-1)}function Cu(e){var n=Je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},n.queue=e,e=e.dispatch=Yp.bind(null,X,e),[n.memoizedState,e]}function zr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function zd(){return Be().memoizedState}function Mo(e,n,t,r){var o=Je();X.flags|=e,o.memoizedState=zr(1|n,t,void 0,r===void 0?null:r)}function xi(e,n,t,r){var o=Be();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&Wa(r,l.deps)){o.memoizedState=zr(n,t,i,r);return}}X.flags|=e,o.memoizedState=zr(1|n,t,i,r)}function Eu(e,n){return Mo(8390656,8,e,n)}function Ka(e,n){return xi(2048,8,e,n)}function Ud(e,n){return xi(4,2,e,n)}function Bd(e,n){return xi(4,4,e,n)}function Hd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wd(e,n,t){return t=t!=null?t.concat([e]):null,xi(4,4,Hd.bind(null,n,e),t)}function Qa(){}function Gd(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Wa(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Vd(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Wa(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Kd(e,n,t){return Xn&21?(Ye(t,n)||(t=qc(),X.lanes|=t,qn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=t)}function Qp(e,n){var t=B;B=t!==0&&4>t?t:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),n()}finally{B=t,Yi.transition=r}}function Qd(){return Be().memoizedState}function Zp(e,n,t){var r=Nn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Zd(e))Yd(n,t);else if(t=Ld(e,n,t,r),t!==null){var o=Se();Ze(t,e,r,o),Xd(t,n,r)}}function Yp(e,n,t){var r=Nn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Zd(e))Yd(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,a=i(l,t);if(o.hasEagerState=!0,o.eagerState=a,Ye(a,l)){var s=n.interleaved;s===null?(o.next=o,Fa(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=Ld(e,n,o,r),t!==null&&(o=Se(),Ze(t,e,r,o),Xd(t,n,r))}}function Zd(e){var n=e.alternate;return e===X||n!==null&&n===X}function Yd(e,n){kr=ri=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Xd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ca(e,t)}}var oi={readContext:Ue,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Xp={readContext:Ue,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:Ue,useEffect:Eu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Mo(4194308,4,Hd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Mo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Mo(4,2,e,n)},useMemo:function(e,n){var t=Je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Je();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Zp.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:Cu,useDebugValue:Qa,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Cu(!1),n=e[0];return e=Qp.bind(null,e[1]),Je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=X,o=Je();if(Q){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),ce===null)throw Error(C(349));Xn&30||Md(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,Eu(Od.bind(null,r,i,e),[e]),r.flags|=2048,zr(9,Id.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Je(),n=ce.identifierPrefix;if(Q){var t=an,r=ln;t=(r&~(1<<32-Qe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ar++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Kp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},qp={readContext:Ue,useCallback:Gd,useContext:Ue,useEffect:Ka,useImperativeHandle:Wd,useInsertionEffect:Ud,useLayoutEffect:Bd,useMemo:Vd,useReducer:Xi,useRef:zd,useState:function(){return Xi(Fr)},useDebugValue:Qa,useDeferredValue:function(e){var n=Be();return Kd(n,ie.memoizedState,e)},useTransition:function(){var e=Xi(Fr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:$d,useSyncExternalStore:Td,useId:Qd,unstable_isNewReconciler:!1},Jp={readContext:Ue,useCallback:Gd,useContext:Ue,useEffect:Ka,useImperativeHandle:Wd,useInsertionEffect:Ud,useLayoutEffect:Bd,useMemo:Vd,useReducer:qi,useRef:zd,useState:function(){return qi(Fr)},useDebugValue:Qa,useDeferredValue:function(e){var n=Be();return ie===null?n.memoizedState=e:Kd(n,ie.memoizedState,e)},useTransition:function(){var e=qi(Fr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:$d,useSyncExternalStore:Td,useId:Qd,unstable_isNewReconciler:!1};function Ge(e,n){if(e&&e.defaultProps){n=q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ul(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ki={isMounted:function(e){return(e=e._reactInternals)?nt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Se(),o=Nn(e),i=sn(r,o);i.payload=n,t!=null&&(i.callback=t),n=Ln(e,i,o),n!==null&&(Ze(n,e,o,r),$o(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Se(),o=Nn(e),i=sn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Ln(e,i,o),n!==null&&(Ze(n,e,o,r),$o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Se(),r=Nn(e),o=sn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Ln(e,o,r),n!==null&&(Ze(n,e,r,t),$o(n,e,r))}};function bu(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!Nr(t,r)||!Nr(o,i):!0}function qd(e,n,t){var r=!1,o=In,i=n.contextType;return typeof i=="object"&&i!==null?i=Ue(i):(o=De(n)?Zn:Pe.current,r=n.contextTypes,i=(r=r!=null)?jt(e,o):In),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ki,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Du(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ki.enqueueReplaceState(n,n.state,null)}function Bl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},za(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Ue(i):(i=De(n)?Zn:Pe.current,o.context=jt(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ul(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&ki.enqueueReplaceState(o,o.state,null),ni(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Mt(e,n){try{var t="",r=n;do t+=bm(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Ji(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Hl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var eg=typeof WeakMap=="function"?WeakMap:Map;function Jd(e,n,t){t=sn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){li||(li=!0,Jl=r),Hl(e,n)},t}function ef(e,n,t){t=sn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Hl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Hl(e,n),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Ru(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new eg;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=pg.bind(null,e,n,t),n.then(e,e))}function Lu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ju(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=sn(-1,1),n.tag=2,Ln(t,n,1))),t.lanes|=1),e)}var ng=mn.ReactCurrentOwner,Ee=!1;function ke(e,n,t,r){n.child=e===null?Rd(n,null,t,r):$t(n,e.child,t,r)}function Nu(e,n,t,r,o){t=t.render;var i=n.ref;return Dt(n,o),r=Ga(e,n,t,r,i,o),t=Va(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,fn(e,n,o)):(Q&&t&&$a(n),n.flags|=1,ke(e,n,r,o),n.child)}function $u(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!ts(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,nf(e,n,i,r,o)):(e=Fo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Nr,t(l,r)&&e.ref===n.ref)return fn(e,n,o)}return n.flags|=1,e=$n(i,r),e.ref=n.ref,e.return=n,n.child=e}function nf(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Nr(i,r)&&e.ref===n.ref)if(Ee=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ee=!0);else return n.lanes=e.lanes,fn(e,n,o)}return Wl(e,n,t,r,o)}function tf(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(wt,Le),Le|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(wt,Le),Le|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,W(wt,Le),Le|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,W(wt,Le),Le|=r;return ke(e,n,o,t),n.child}function rf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Wl(e,n,t,r,o){var i=De(t)?Zn:Pe.current;return i=jt(n,i),Dt(n,o),t=Ga(e,n,t,r,i,o),r=Va(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,fn(e,n,o)):(Q&&r&&$a(n),n.flags|=1,ke(e,n,t,o),n.child)}function Tu(e,n,t,r,o){if(De(t)){var i=!0;Yo(n)}else i=!1;if(Dt(n,o),n.stateNode===null)Io(e,n),qd(n,t,r),Bl(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var s=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=De(t)?Zn:Pe.current,u=jt(n,u));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Du(n,l,r,u),xn=!1;var p=n.memoizedState;l.state=p,ni(n,r,l,o),s=n.memoizedState,a!==r||p!==s||be.current||xn?(typeof d=="function"&&(Ul(n,t,d,r),s=n.memoizedState),(a=xn||bu(n,t,a,r,p,s,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,jd(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Ge(n.type,a),l.props=u,f=n.pendingProps,p=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ue(s):(s=De(t)?Zn:Pe.current,s=jt(n,s));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||p!==s)&&Du(n,l,r,s),xn=!1,p=n.memoizedState,l.state=p,ni(n,r,l,o);var y=n.memoizedState;a!==f||p!==y||be.current||xn?(typeof v=="function"&&(Ul(n,t,v,r),y=n.memoizedState),(u=xn||bu(n,t,u,r,p,y,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),l.props=r,l.state=y,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Gl(e,n,t,r,i,o)}function Gl(e,n,t,r,o,i){rf(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&Pu(n,t,!1),fn(e,n,i);r=n.stateNode,ng.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=$t(n,e.child,null,i),n.child=$t(n,null,a,i)):ke(e,n,a,i),n.memoizedState=r.state,o&&Pu(n,t,!0),n.child}function of(e){var n=e.stateNode;n.pendingContext?yu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&yu(e,n.context,!1),Ua(e,n.containerInfo)}function Mu(e,n,t,r,o){return Nt(),Ma(o),n.flags|=256,ke(e,n,t,r),n.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function lf(e,n,t){var r=n.pendingProps,o=Y.current,i=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Y,o&1),e===null)return Fl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=_i(l,r,0,null),e=Qn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Kl(t),n.memoizedState=Vl,e):Za(n,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return tg(e,n,l,r,a,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=$n(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=$n(a,i):(i=Qn(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?Kl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=Vl,r}return i=e.child,e=i.sibling,r=$n(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Za(e,n){return n=_i({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ko(e,n,t,r){return r!==null&&Ma(r),$t(n,e.child,null,t),e=Za(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function tg(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=Ji(Error(C(422))),ko(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=_i({mode:"visible",children:r.children},o,0,null),i=Qn(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&$t(n,e.child,null,l),n.child.memoizedState=Kl(l),n.memoizedState=Vl,i);if(!(n.mode&1))return ko(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(C(419)),r=Ji(i,r,void 0),ko(e,n,l,r)}if(a=(l&e.childLanes)!==0,Ee||a){if(r=ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,dn(e,o),Ze(r,e,o,-1))}return ns(),r=Ji(Error(C(421))),ko(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=gg.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,je=Rn(o.nextSibling),Ne=n,Q=!0,Ke=null,e!==null&&(Oe[Ae++]=ln,Oe[Ae++]=an,Oe[Ae++]=Yn,ln=e.id,an=e.overflow,Yn=n),n=Za(n,r.children),n.flags|=4096,n)}function Iu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),zl(e.return,n,t)}function el(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function af(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,n,r.children,t),r=Y.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iu(e,t,n);else if(e.tag===19)Iu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&ti(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),el(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&ti(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}el(n,!0,t,null,i);break;case"together":el(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Io(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function fn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),qn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=$n(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=$n(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function rg(e,n,t){switch(n.tag){case 3:of(n),Nt();break;case 5:Nd(n);break;case 1:De(n.type)&&Yo(n);break;case 4:Ua(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;W(Jo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),n.flags|=128,null):t&n.child.childLanes?lf(e,n,t):(W(Y,Y.current&1),e=fn(e,n,t),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return af(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return n.lanes=0,tf(e,n,t)}return fn(e,n,t)}var sf,Ql,uf,cf;sf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ql=function(){};uf=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Vn(tn.current);var i=null;switch(t){case"input":o=hl(e,o),r=hl(e,r),i=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":o=Pl(e,o),r=Pl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}kl(t,r);var l;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(i||(i=[]),i.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&G("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};cf=function(e,n,t,r){t!==r&&(n.flags|=4)};function ur(e,n){if(!Q)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function og(e,n,t){var r=n.pendingProps;switch(Ta(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(n),null;case 1:return De(n.type)&&Zo(),ve(n),null;case 3:return r=n.stateNode,Tt(),V(be),V(Pe),Ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ke!==null&&(ta(Ke),Ke=null))),Ql(e,n),ve(n),null;case 5:Ba(n);var o=Vn(Or.current);if(t=n.type,e!==null&&n.stateNode!=null)uf(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(C(166));return ve(n),null}if(e=Vn(tn.current),Po(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[en]=n,r[Mr]=i,e=(n.mode&1)!==0,t){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<pr.length;o++)G(pr[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Gs(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":Ks(r,i),G("invalid",r)}kl(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&yo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&yo(r.textContent,a,e),o=["children",""+a]):Cr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&G("scroll",r)}switch(t){case"input":uo(r),Vs(r,i,!0);break;case"textarea":uo(r),Qs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Qo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Oc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[en]=n,e[Mr]=r,sf(e,n,!1,!1),n.stateNode=e;e:{switch(l=Sl(t,r),t){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<pr.length;o++)G(pr[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":Gs(e,r),o=hl(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),G("invalid",e);break;case"textarea":Ks(e,r),o=Pl(e,r),G("invalid",e);break;default:o=r}kl(t,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?zc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ac(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Er(e,s):typeof s=="number"&&Er(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Cr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&G("scroll",e):s!=null&&Pa(e,i,s,l))}switch(t){case"input":uo(e),Vs(e,r,!1);break;case"textarea":uo(e),Qs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?_t(e,!!r.multiple,i,!1):r.defaultValue!=null&&_t(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ve(n),null;case 6:if(e&&n.stateNode!=null)cf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(C(166));if(t=Vn(Or.current),Vn(tn.current),Po(n)){if(r=n.stateNode,t=n.memoizedProps,r[en]=n,(i=r.nodeValue!==t)&&(e=Ne,e!==null))switch(e.tag){case 3:yo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yo(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[en]=n,n.stateNode=r}return ve(n),null;case 13:if(V(Y),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&je!==null&&n.mode&1&&!(n.flags&128))bd(),Nt(),n.flags|=98560,i=!1;else if(i=Po(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[en]=n}else Nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ve(n),i=!1}else Ke!==null&&(ta(Ke),Ke=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?le===0&&(le=3):ns())),n.updateQueue!==null&&(n.flags|=4),ve(n),null);case 4:return Tt(),Ql(e,n),e===null&&$r(n.stateNode.containerInfo),ve(n),null;case 10:return Aa(n.type._context),ve(n),null;case 17:return De(n.type)&&Zo(),ve(n),null;case 19:if(V(Y),i=n.memoizedState,i===null)return ve(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)ur(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ti(e),l!==null){for(n.flags|=128,ur(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(Y,Y.current&1|2),n.child}e=e.sibling}i.tail!==null&&ne()>It&&(n.flags|=128,r=!0,ur(i,!1),n.lanes=4194304)}else{if(!r)if(e=ti(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ur(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Q)return ve(n),null}else 2*ne()-i.renderingStartTime>It&&t!==1073741824&&(n.flags|=128,r=!0,ur(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ne(),n.sibling=null,t=Y.current,W(Y,r?t&1|2:t&1),n):(ve(n),null);case 22:case 23:return es(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Le&1073741824&&(ve(n),n.subtreeFlags&6&&(n.flags|=8192)):ve(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function ig(e,n){switch(Ta(n),n.tag){case 1:return De(n.type)&&Zo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Tt(),V(be),V(Pe),Ha(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ba(n),null;case 13:if(V(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));Nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(Y),null;case 4:return Tt(),null;case 10:return Aa(n.type._context),null;case 22:case 23:return es(),null;case 24:return null;default:return null}}var So=!1,ye=!1,lg=typeof WeakSet=="function"?WeakSet:Set,N=null;function St(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ee(e,n,r)}else t.current=null}function Zl(e,n,t){try{t()}catch(r){ee(e,n,r)}}var Ou=!1;function ag(e,n){if(Nl=Go,e=pd(),Na(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,a=-1,s=-1,u=0,d=0,f=e,p=null;n:for(;;){for(var v;f!==t||o!==0&&f.nodeType!==3||(a=l+o),f!==i||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break n;if(p===t&&++u===o&&(a=l),p===i&&++d===r&&(s=l),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for($l={focusedElem:e,selectionRange:t},Go=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var P=y.memoizedProps,k=y.memoizedState,g=n.stateNode,m=g.getSnapshotBeforeUpdate(n.elementType===n.type?P:Ge(n.type,P),k);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){ee(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return y=Ou,Ou=!1,y}function Sr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Zl(n,t,i)}o=o.next}while(o!==r)}}function Si(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Yl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function df(e){var n=e.alternate;n!==null&&(e.alternate=null,df(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[Mr],delete n[Il],delete n[Hp],delete n[Wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ff(e){return e.tag===5||e.tag===3||e.tag===4}function Au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(Xl(e,n,t),e=e.sibling;e!==null;)Xl(e,n,t),e=e.sibling}function ql(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ql(e,n,t),e=e.sibling;e!==null;)ql(e,n,t),e=e.sibling}var fe=null,Ve=!1;function vn(e,n,t){for(t=t.child;t!==null;)mf(e,n,t),t=t.sibling}function mf(e,n,t){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(pi,t)}catch{}switch(t.tag){case 5:ye||St(t,n);case 6:var r=fe,o=Ve;fe=null,vn(e,n,t),fe=r,Ve=o,fe!==null&&(Ve?(e=fe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):fe.removeChild(t.stateNode));break;case 18:fe!==null&&(Ve?(e=fe,t=t.stateNode,e.nodeType===8?Ki(e.parentNode,t):e.nodeType===1&&Ki(e,t),Lr(e)):Ki(fe,t.stateNode));break;case 4:r=fe,o=Ve,fe=t.stateNode.containerInfo,Ve=!0,vn(e,n,t),fe=r,Ve=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Zl(t,n,l),o=o.next}while(o!==r)}vn(e,n,t);break;case 1:if(!ye&&(St(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){ee(t,n,a)}vn(e,n,t);break;case 21:vn(e,n,t);break;case 22:t.mode&1?(ye=(r=ye)||t.memoizedState!==null,vn(e,n,t),ye=r):vn(e,n,t);break;default:vn(e,n,t)}}function Fu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new lg),n.forEach(function(r){var o=hg.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function We(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,Ve=!1;break e;case 3:fe=a.stateNode.containerInfo,Ve=!0;break e;case 4:fe=a.stateNode.containerInfo,Ve=!0;break e}a=a.return}if(fe===null)throw Error(C(160));mf(i,l,o),fe=null,Ve=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ee(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)pf(n,e),n=n.sibling}function pf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(n,e),qe(e),r&4){try{Sr(3,e,e.return),Si(3,e)}catch(P){ee(e,e.return,P)}try{Sr(5,e,e.return)}catch(P){ee(e,e.return,P)}}break;case 1:We(n,e),qe(e),r&512&&t!==null&&St(t,t.return);break;case 5:if(We(n,e),qe(e),r&512&&t!==null&&St(t,t.return),e.flags&32){var o=e.stateNode;try{Er(o,"")}catch(P){ee(e,e.return,P)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Mc(o,i),Sl(a,l);var u=Sl(a,i);for(l=0;l<s.length;l+=2){var d=s[l],f=s[l+1];d==="style"?zc(o,f):d==="dangerouslySetInnerHTML"?Ac(o,f):d==="children"?Er(o,f):Pa(o,d,f,u)}switch(a){case"input":vl(o,i);break;case"textarea":Ic(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?_t(o,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?_t(o,!!i.multiple,i.defaultValue,!0):_t(o,!!i.multiple,i.multiple?[]:"",!1))}o[Mr]=i}catch(P){ee(e,e.return,P)}}break;case 6:if(We(n,e),qe(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(P){ee(e,e.return,P)}}break;case 3:if(We(n,e),qe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Lr(n.containerInfo)}catch(P){ee(e,e.return,P)}break;case 4:We(n,e),qe(e);break;case 13:We(n,e),qe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(qa=ne())),r&4&&Fu(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ye=(u=ye)||d,We(n,e),ye=u):We(n,e),qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(f=N=d;N!==null;){switch(p=N,v=p.child,p.tag){case 0:case 11:case 14:case 15:Sr(4,p,p.return);break;case 1:St(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(P){ee(r,t,P)}}break;case 5:St(p,p.return);break;case 22:if(p.memoizedState!==null){Uu(f);continue}}v!==null?(v.return=p,N=v):Uu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Fc("display",l))}catch(P){ee(e,e.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(P){ee(e,e.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:We(n,e),qe(e),r&4&&Fu(e);break;case 21:break;default:We(n,e),qe(e)}}function qe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ff(t)){var r=t;break e}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Er(o,""),r.flags&=-33);var i=Au(e);ql(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Au(e);Xl(e,a,l);break;default:throw Error(C(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sg(e,n,t){N=e,gf(e)}function gf(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||So;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ye;a=So;var u=ye;if(So=l,(ye=s)&&!u)for(N=o;N!==null;)l=N,s=l.child,l.tag===22&&l.memoizedState!==null?Bu(o):s!==null?(s.return=l,N=s):Bu(o);for(;i!==null;)N=i,gf(i),i=i.sibling;N=o,So=a,ye=u}zu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):zu(e)}}function zu(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ye||Si(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ye)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Ge(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&_u(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}_u(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Lr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ye||n.flags&512&&Yl(n)}catch(p){ee(n,n.return,p)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function Uu(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function Bu(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Si(4,n)}catch(s){ee(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){ee(n,o,s)}}var i=n.return;try{Yl(n)}catch(s){ee(n,i,s)}break;case 5:var l=n.return;try{Yl(n)}catch(s){ee(n,l,s)}}}catch(s){ee(n,n.return,s)}if(n===e){N=null;break}var a=n.sibling;if(a!==null){a.return=n.return,N=a;break}N=n.return}}var ug=Math.ceil,ii=mn.ReactCurrentDispatcher,Ya=mn.ReactCurrentOwner,ze=mn.ReactCurrentBatchConfig,U=0,ce=null,re=null,me=0,Le=0,wt=An(0),le=0,Ur=null,qn=0,wi=0,Xa=0,wr=null,Ce=null,qa=0,It=1/0,rn=null,li=!1,Jl=null,jn=null,wo=!1,_n=null,ai=0,_r=0,ea=null,Oo=-1,Ao=0;function Se(){return U&6?ne():Oo!==-1?Oo:Oo=ne()}function Nn(e){return e.mode&1?U&2&&me!==0?me&-me:Vp.transition!==null?(Ao===0&&(Ao=qc()),Ao):(e=B,e!==0||(e=window.event,e=e===void 0?16:id(e.type)),e):1}function Ze(e,n,t,r){if(50<_r)throw _r=0,ea=null,Error(C(185));Vr(e,t,r),(!(U&2)||e!==ce)&&(e===ce&&(!(U&2)&&(wi|=t),le===4&&Sn(e,me)),Re(e,r),t===1&&U===0&&!(n.mode&1)&&(It=ne()+500,Pi&&Fn()))}function Re(e,n){var t=e.callbackNode;Vm(e,n);var r=Wo(e,e===ce?me:0);if(r===0)t!==null&&Xs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Xs(t),n===1)e.tag===0?Gp(Hu.bind(null,e)):_d(Hu.bind(null,e)),Up(function(){!(U&6)&&Fn()}),t=null;else{switch(Jc(r)){case 1:t=_a;break;case 4:t=Yc;break;case 16:t=Ho;break;case 536870912:t=Xc;break;default:t=Ho}t=wf(t,hf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function hf(e,n){if(Oo=-1,Ao=0,U&6)throw Error(C(327));var t=e.callbackNode;if(Rt()&&e.callbackNode!==t)return null;var r=Wo(e,e===ce?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=si(e,r);else{n=r;var o=U;U|=2;var i=yf();(ce!==e||me!==n)&&(rn=null,It=ne()+500,Kn(e,n));do try{fg();break}catch(a){vf(e,a)}while(!0);Oa(),ii.current=i,U=o,re!==null?n=0:(ce=null,me=0,n=le)}if(n!==0){if(n===2&&(o=bl(e),o!==0&&(r=o,n=na(e,o))),n===1)throw t=Ur,Kn(e,0),Sn(e,r),Re(e,ne()),t;if(n===6)Sn(e,r);else{if(o=e.current.alternate,!(r&30)&&!cg(o)&&(n=si(e,r),n===2&&(i=bl(e),i!==0&&(r=i,n=na(e,i))),n===1))throw t=Ur,Kn(e,0),Sn(e,r),Re(e,ne()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(C(345));case 2:Hn(e,Ce,rn);break;case 3:if(Sn(e,r),(r&130023424)===r&&(n=qa+500-ne(),10<n)){if(Wo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ml(Hn.bind(null,e,Ce,rn),n);break}Hn(e,Ce,rn);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-Qe(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ug(r/1960))-r,10<r){e.timeoutHandle=Ml(Hn.bind(null,e,Ce,rn),r);break}Hn(e,Ce,rn);break;case 5:Hn(e,Ce,rn);break;default:throw Error(C(329))}}}return Re(e,ne()),e.callbackNode===t?hf.bind(null,e):null}function na(e,n){var t=wr;return e.current.memoizedState.isDehydrated&&(Kn(e,n).flags|=256),e=si(e,n),e!==2&&(n=Ce,Ce=t,n!==null&&ta(n)),e}function ta(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function cg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Ye(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sn(e,n){for(n&=~Xa,n&=~wi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Qe(n),r=1<<t;e[t]=-1,n&=~r}}function Hu(e){if(U&6)throw Error(C(327));Rt();var n=Wo(e,0);if(!(n&1))return Re(e,ne()),null;var t=si(e,n);if(e.tag!==0&&t===2){var r=bl(e);r!==0&&(n=r,t=na(e,r))}if(t===1)throw t=Ur,Kn(e,0),Sn(e,n),Re(e,ne()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Hn(e,Ce,rn),Re(e,ne()),null}function Ja(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(It=ne()+500,Pi&&Fn())}}function Jn(e){_n!==null&&_n.tag===0&&!(U&6)&&Rt();var n=U;U|=1;var t=ze.transition,r=B;try{if(ze.transition=null,B=1,e)return e()}finally{B=r,ze.transition=t,U=n,!(U&6)&&Fn()}}function es(){Le=wt.current,V(wt)}function Kn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,zp(t)),re!==null)for(t=re.return;t!==null;){var r=t;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zo();break;case 3:Tt(),V(be),V(Pe),Ha();break;case 5:Ba(r);break;case 4:Tt();break;case 13:V(Y);break;case 19:V(Y);break;case 10:Aa(r.type._context);break;case 22:case 23:es()}t=t.return}if(ce=e,re=e=$n(e.current,null),me=Le=n,le=0,Ur=null,Xa=wi=qn=0,Ce=wr=null,Gn!==null){for(n=0;n<Gn.length;n++)if(t=Gn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}Gn=null}return e}function vf(e,n){do{var t=re;try{if(Oa(),To.current=oi,ri){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ri=!1}if(Xn=0,ue=ie=X=null,kr=!1,Ar=0,Ya.current=null,t===null||t.return===null){le=1,Ur=n,re=null;break}e:{var i=e,l=t.return,a=t,s=n;if(n=me,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Lu(l);if(v!==null){v.flags&=-257,ju(v,l,a,i,n),v.mode&1&&Ru(i,u,n),n=v,s=u;var y=n.updateQueue;if(y===null){var P=new Set;P.add(s),n.updateQueue=P}else y.add(s);break e}else{if(!(n&1)){Ru(i,u,n),ns();break e}s=Error(C(426))}}else if(Q&&a.mode&1){var k=Lu(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),ju(k,l,a,i,n),Ma(Mt(s,a));break e}}i=s=Mt(s,a),le!==4&&(le=2),wr===null?wr=[i]:wr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=Jd(i,s,n);wu(i,g);break e;case 1:a=s;var m=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(jn===null||!jn.has(h)))){i.flags|=65536,n&=-n,i.lanes|=n;var S=ef(i,a,n);wu(i,S);break e}}i=i.return}while(i!==null)}xf(t)}catch(b){n=b,re===t&&t!==null&&(re=t=t.return);continue}break}while(!0)}function yf(){var e=ii.current;return ii.current=oi,e===null?oi:e}function ns(){(le===0||le===3||le===2)&&(le=4),ce===null||!(qn&268435455)&&!(wi&268435455)||Sn(ce,me)}function si(e,n){var t=U;U|=2;var r=yf();(ce!==e||me!==n)&&(rn=null,Kn(e,n));do try{dg();break}catch(o){vf(e,o)}while(!0);if(Oa(),U=t,ii.current=r,re!==null)throw Error(C(261));return ce=null,me=0,le}function dg(){for(;re!==null;)Pf(re)}function fg(){for(;re!==null&&!Om();)Pf(re)}function Pf(e){var n=Sf(e.alternate,e,Le);e.memoizedProps=e.pendingProps,n===null?xf(e):re=n,Ya.current=null}function xf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=ig(t,n),t!==null){t.flags&=32767,re=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,re=null;return}}else if(t=og(t,n,Le),t!==null){re=t;return}if(n=n.sibling,n!==null){re=n;return}re=n=e}while(n!==null);le===0&&(le=5)}function Hn(e,n,t){var r=B,o=ze.transition;try{ze.transition=null,B=1,mg(e,n,t,r)}finally{ze.transition=o,B=r}return null}function mg(e,n,t,r){do Rt();while(_n!==null);if(U&6)throw Error(C(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Km(e,i),e===ce&&(re=ce=null,me=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wo||(wo=!0,wf(Ho,function(){return Rt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var l=B;B=1;var a=U;U|=4,Ya.current=null,ag(e,t),pf(t,e),$p($l),Go=!!Nl,$l=Nl=null,e.current=t,sg(t),Am(),U=a,B=l,ze.transition=i}else e.current=t;if(wo&&(wo=!1,_n=e,ai=o),i=e.pendingLanes,i===0&&(jn=null),Um(t.stateNode),Re(e,ne()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(li)throw li=!1,e=Jl,Jl=null,e;return ai&1&&e.tag!==0&&Rt(),i=e.pendingLanes,i&1?e===ea?_r++:(_r=0,ea=e):_r=0,Fn(),null}function Rt(){if(_n!==null){var e=Jc(ai),n=ze.transition,t=B;try{if(ze.transition=null,B=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,ai=0,U&6)throw Error(C(331));var o=U;for(U|=4,N=e.current;N!==null;){var i=N,l=i.child;if(N.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Sr(8,d,i)}var f=d.child;if(f!==null)f.return=d,N=f;else for(;N!==null;){d=N;var p=d.sibling,v=d.return;if(df(d),d===u){N=null;break}if(p!==null){p.return=v,N=p;break}N=v}}}var y=i.alternate;if(y!==null){var P=y.child;if(P!==null){y.child=null;do{var k=P.sibling;P.sibling=null,P=k}while(P!==null)}}N=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,N=l;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Sr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,N=g;break e}N=i.return}}var m=e.current;for(N=m;N!==null;){l=N;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,N=h;else e:for(l=m;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Si(9,a)}}catch(b){ee(a,a.return,b)}if(a===l){N=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,N=S;break e}N=a.return}}if(U=o,Fn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(pi,e)}catch{}r=!0}return r}finally{B=t,ze.transition=n}}return!1}function Wu(e,n,t){n=Mt(t,n),n=Jd(e,n,1),e=Ln(e,n,1),n=Se(),e!==null&&(Vr(e,1,n),Re(e,n))}function ee(e,n,t){if(e.tag===3)Wu(e,e,t);else for(;n!==null;){if(n.tag===3){Wu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=Mt(t,e),e=ef(n,e,1),n=Ln(n,e,1),e=Se(),n!==null&&(Vr(n,1,e),Re(n,e));break}}n=n.return}}function pg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Se(),e.pingedLanes|=e.suspendedLanes&t,ce===e&&(me&t)===t&&(le===4||le===3&&(me&130023424)===me&&500>ne()-qa?Kn(e,0):Xa|=t),Re(e,n)}function kf(e,n){n===0&&(e.mode&1?(n=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):n=1);var t=Se();e=dn(e,n),e!==null&&(Vr(e,n,t),Re(e,t))}function gg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),kf(e,t)}function hg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(n),kf(e,t)}var Sf;Sf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||be.current)Ee=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ee=!1,rg(e,n,t);Ee=!!(e.flags&131072)}else Ee=!1,Q&&n.flags&1048576&&Cd(n,qo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Io(e,n),e=n.pendingProps;var o=jt(n,Pe.current);Dt(n,t),o=Ga(null,n,r,e,o,t);var i=Va();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,De(r)?(i=!0,Yo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,za(n),o.updater=ki,n.stateNode=o,o._reactInternals=n,Bl(n,r,e,t),n=Gl(null,n,r,!0,i,t)):(n.tag=0,Q&&i&&$a(n),ke(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Io(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=yg(r),e=Ge(r,e),o){case 0:n=Wl(null,n,r,e,t);break e;case 1:n=Tu(null,n,r,e,t);break e;case 11:n=Nu(null,n,r,e,t);break e;case 14:n=$u(null,n,r,Ge(r.type,e),t);break e}throw Error(C(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ge(r,o),Wl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ge(r,o),Tu(e,n,r,o,t);case 3:e:{if(of(n),e===null)throw Error(C(387));r=n.pendingProps,i=n.memoizedState,o=i.element,jd(e,n),ni(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Mt(Error(C(423)),n),n=Mu(e,n,r,t,o);break e}else if(r!==o){o=Mt(Error(C(424)),n),n=Mu(e,n,r,t,o);break e}else for(je=Rn(n.stateNode.containerInfo.firstChild),Ne=n,Q=!0,Ke=null,t=Rd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Nt(),r===o){n=fn(e,n,t);break e}ke(e,n,r,t)}n=n.child}return n;case 5:return Nd(n),e===null&&Fl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Tl(r,o)?l=null:i!==null&&Tl(r,i)&&(n.flags|=32),rf(e,n),ke(e,n,l,t),n.child;case 6:return e===null&&Fl(n),null;case 13:return lf(e,n,t);case 4:return Ua(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=$t(n,null,r,t):ke(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ge(r,o),Nu(e,n,r,o,t);case 7:return ke(e,n,n.pendingProps,t),n.child;case 8:return ke(e,n,n.pendingProps.children,t),n.child;case 12:return ke(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,W(Jo,r._currentValue),r._currentValue=l,i!==null)if(Ye(i.value,l)){if(i.children===o.children&&!be.current){n=fn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=sn(-1,t&-t),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),zl(i.return,t,n),a.lanes|=t;break}s=s.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),zl(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ke(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Dt(n,t),o=Ue(o),r=r(o),n.flags|=1,ke(e,n,r,t),n.child;case 14:return r=n.type,o=Ge(r,n.pendingProps),o=Ge(r.type,o),$u(e,n,r,o,t);case 15:return nf(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ge(r,o),Io(e,n),n.tag=1,De(r)?(e=!0,Yo(n)):e=!1,Dt(n,t),qd(n,r,o),Bl(n,r,o,t),Gl(null,n,r,!0,e,t);case 19:return af(e,n,t);case 22:return tf(e,n,t)}throw Error(C(156,n.tag))};function wf(e,n){return Zc(e,n)}function vg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,n,t,r){return new vg(e,n,t,r)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yg(e){if(typeof e=="function")return ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ka)return 11;if(e===Sa)return 14}return 2}function $n(e,n){var t=e.alternate;return t===null?(t=Fe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Fo(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")ts(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case mt:return Qn(t.children,o,i,n);case xa:l=8,o|=8;break;case fl:return e=Fe(12,t,n,o|2),e.elementType=fl,e.lanes=i,e;case ml:return e=Fe(13,t,n,o),e.elementType=ml,e.lanes=i,e;case pl:return e=Fe(19,t,n,o),e.elementType=pl,e.lanes=i,e;case Nc:return _i(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lc:l=10;break e;case jc:l=9;break e;case ka:l=11;break e;case Sa:l=14;break e;case Pn:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=Fe(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Qn(e,n,t,r){return e=Fe(7,e,r,n),e.lanes=t,e}function _i(e,n,t,r){return e=Fe(22,e,r,n),e.elementType=Nc,e.lanes=t,e.stateNode={isHidden:!1},e}function nl(e,n,t){return e=Fe(6,e,null,n),e.lanes=t,e}function tl(e,n,t){return n=Fe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Pg(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function rs(e,n,t,r,o,i,l,a,s){return e=new Pg(e,n,t,a,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Fe(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(i),e}function xg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ft,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function _f(e){if(!e)return In;e=e._reactInternals;e:{if(nt(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(De(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(De(t))return wd(e,t,n)}return n}function Cf(e,n,t,r,o,i,l,a,s){return e=rs(t,r,!0,e,o,i,l,a,s),e.context=_f(null),t=e.current,r=Se(),o=Nn(t),i=sn(r,o),i.callback=n??null,Ln(t,i,o),e.current.lanes=o,Vr(e,o,r),Re(e,r),e}function Ci(e,n,t,r){var o=n.current,i=Se(),l=Nn(o);return t=_f(t),n.context===null?n.context=t:n.pendingContext=t,n=sn(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Ln(o,n,l),e!==null&&(Ze(e,o,l,i),$o(e,o,l)),l}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function os(e,n){Gu(e,n),(e=e.alternate)&&Gu(e,n)}function kg(){return null}var Ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function is(e){this._internalRoot=e}Ei.prototype.render=is.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));Ci(e,n,null,null)};Ei.prototype.unmount=is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jn(function(){Ci(null,e,null,null)}),n[cn]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var n=td();e={blockedOn:null,target:e,priority:n};for(var t=0;t<kn.length&&n!==0&&n<kn[t].priority;t++);kn.splice(t,0,e),t===0&&od(e)}};function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Sg(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ui(l);i.call(u)}}var l=Cf(n,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=l,e[cn]=l.current,$r(e.nodeType===8?e.parentNode:e),Jn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=ui(s);a.call(u)}}var s=rs(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=s,e[cn]=s.current,$r(e.nodeType===8?e.parentNode:e),Jn(function(){Ci(n,s,t,r)}),s}function Di(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=ui(l);a.call(s)}}Ci(n,l,e,o)}else l=Sg(t,n,e,o,r);return ui(l)}ed=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=mr(n.pendingLanes);t!==0&&(Ca(n,t|1),Re(n,ne()),!(U&6)&&(It=ne()+500,Fn()))}break;case 13:Jn(function(){var r=dn(e,1);if(r!==null){var o=Se();Ze(r,e,1,o)}}),os(e,1)}};Ea=function(e){if(e.tag===13){var n=dn(e,134217728);if(n!==null){var t=Se();Ze(n,e,134217728,t)}os(e,134217728)}};nd=function(e){if(e.tag===13){var n=Nn(e),t=dn(e,n);if(t!==null){var r=Se();Ze(t,e,n,r)}os(e,n)}};td=function(){return B};rd=function(e,n){var t=B;try{return B=e,n()}finally{B=t}};_l=function(e,n,t){switch(n){case"input":if(vl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=yi(r);if(!o)throw Error(C(90));Tc(r),vl(r,o)}}}break;case"textarea":Ic(e,t);break;case"select":n=t.value,n!=null&&_t(e,!!t.multiple,n,!1)}};Hc=Ja;Wc=Jn;var wg={usingClientEntryPoint:!1,Events:[Qr,vt,yi,Uc,Bc,Ja]},cr={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_g={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kc(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{pi=_o.inject(_g),nn=_o}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wg;Te.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ls(n))throw Error(C(200));return xg(e,n,null,t)};Te.createRoot=function(e,n){if(!ls(e))throw Error(C(299));var t=!1,r="",o=Ef;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=rs(e,1,!1,null,null,t,!1,r,o),e[cn]=n.current,$r(e.nodeType===8?e.parentNode:e),new is(n)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Kc(n),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Jn(e)};Te.hydrate=function(e,n,t){if(!bi(n))throw Error(C(200));return Di(null,e,n,!0,t)};Te.hydrateRoot=function(e,n,t){if(!ls(e))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=Ef;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Cf(n,null,e,1,t??null,o,!1,i,l),e[cn]=n.current,$r(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Ei(n)};Te.render=function(e,n,t){if(!bi(n))throw Error(C(200));return Di(null,e,n,!1,t)};Te.unmountComponentAtNode=function(e){if(!bi(e))throw Error(C(40));return e._reactRootContainer?(Jn(function(){Di(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};Te.unstable_batchedUpdates=Ja;Te.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!bi(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Di(e,n,t,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function bf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bf)}catch(e){console.error(e)}}bf(),Ec.exports=Te;var Cg=Ec.exports,Ku=Cg;cl.createRoot=Ku.createRoot,cl.hydrateRoot=Ku.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Br.apply(null,arguments)}var Cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Cn||(Cn={}));const Qu="popstate";function Eg(e){e===void 0&&(e={});function n(o,i){let{pathname:l="/",search:a="",hash:s=""}=tt(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),ra("",{pathname:l,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){let l=o.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof i=="string"?i:ci(i))}function r(o,i){as(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Dg(n,t,r,e)}function te(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function as(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function bg(){return Math.random().toString(36).substr(2,8)}function Zu(e,n){return{usr:e.state,key:e.key,idx:n}}function ra(e,n,t,r){return t===void 0&&(t=null),Br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?tt(n):n,{state:t,key:n&&n.key||r||bg()})}function ci(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function tt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Dg(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=Cn.Pop,s=null,u=d();u==null&&(u=0,l.replaceState(Br({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function f(){a=Cn.Pop;let k=d(),g=k==null?null:k-u;u=k,s&&s({action:a,location:P.location,delta:g})}function p(k,g){a=Cn.Push;let m=ra(P.location,k,g);t&&t(m,k),u=d()+1;let h=Zu(m,u),S=P.createHref(m);try{l.pushState(h,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(S)}i&&s&&s({action:a,location:P.location,delta:1})}function v(k,g){a=Cn.Replace;let m=ra(P.location,k,g);t&&t(m,k),u=d();let h=Zu(m,u),S=P.createHref(m);l.replaceState(h,"",S),i&&s&&s({action:a,location:P.location,delta:0})}function y(k){let g=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof k=="string"?k:ci(k);return m=m.replace(/ $/,"%20"),te(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let P={get action(){return a},get location(){return e(o,l)},listen(k){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Qu,f),s=k,()=>{o.removeEventListener(Qu,f),s=null}},createHref(k){return n(o,k)},createURL:y,encodeLocation(k){let g=y(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:v,go(k){return l.go(k)}};return P}var Yu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yu||(Yu={}));function Rg(e,n,t){return t===void 0&&(t="/"),Lg(e,n,t)}function Lg(e,n,t,r){let o=typeof n=="string"?tt(n):n,i=ss(o.pathname||"/",t);if(i==null)return null;let l=Df(e);jg(l);let a=null,s=Hg(i);for(let u=0;a==null&&u<l.length;++u)a=zg(l[u],s);return a}function Df(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Tn([r,s.relativePath]),d=t.concat(s);i.children&&i.children.length>0&&(te(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Df(i.children,n,d,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:Ag(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of Rf(i.path))o(i,l,s)}),n}function Rf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Rf(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function jg(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Fg(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Ng=/^:[\w-]+$/,$g=3,Tg=2,Mg=1,Ig=10,Og=-2,Xu=e=>e==="*";function Ag(e,n){let t=e.split("/"),r=t.length;return t.some(Xu)&&(r+=Og),n&&(r+=Tg),t.filter(o=>!Xu(o)).reduce((o,i)=>o+(Ng.test(i)?$g:i===""?Mg:Ig),r)}function Fg(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function zg(e,n,t){let{routesMeta:r}=e,o={},i="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,d=i==="/"?n:n.slice(i.length)||"/",f=Ug({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),p=s.route;if(!f)return null;Object.assign(o,f.params),l.push({params:o,pathname:Tn([i,f.pathname]),pathnameBase:Vg(Tn([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=Tn([i,f.pathnameBase]))}return l}function Ug(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Bg(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:v}=d;if(p==="*"){let P=a[f]||"";l=i.slice(0,i.length-P.length).replace(/(.)\/+$/,"$1")}const y=a[f];return v&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function Bg(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),as(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function Hg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return as(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ss(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Wg(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?tt(e):e,i;return t?(t=Lf(t),t.startsWith("/")?i=qu(t.substring(1),"/"):i=qu(t,n)):i=n,{pathname:i,search:Kg(r),hash:Qg(o)}}function qu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function rl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function us(e,n){let t=Gg(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function cs(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=tt(e):(o=Br({},e),te(!o.pathname||!o.pathname.includes("?"),rl("?","pathname","search",o)),te(!o.pathname||!o.pathname.includes("#"),rl("#","pathname","hash",o)),te(!o.search||!o.search.includes("#"),rl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=t;else{let f=n.length-1;if(!r&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}a=f>=0?n[f]:"/"}let s=Wg(o,a),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const Lf=e=>e.replace(/\/\/+/g,"/"),Tn=e=>Lf(e.join("/")),Vg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Zg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jf=["post","put","patch","delete"];new Set(jf);const Yg=["get",...jf];new Set(Yg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Hr.apply(null,arguments)}const ds=x.createContext(null),Xg=x.createContext(null),zn=x.createContext(null),Ri=x.createContext(null),pn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Nf=x.createContext(null);function qg(e,n){let{relative:t}=n===void 0?{}:n;zt()||te(!1);let{basename:r,navigator:o}=x.useContext(zn),{hash:i,pathname:l,search:a}=Mf(e,{relative:t}),s=l;return r!=="/"&&(s=l==="/"?r:Tn([r,l])),o.createHref({pathname:s,search:a,hash:i})}function zt(){return x.useContext(Ri)!=null}function Ut(){return zt()||te(!1),x.useContext(Ri).location}function $f(e){x.useContext(zn).static||x.useLayoutEffect(e)}function Tf(){let{isDataRoute:e}=x.useContext(pn);return e?fh():Jg()}function Jg(){zt()||te(!1);let e=x.useContext(ds),{basename:n,future:t,navigator:r}=x.useContext(zn),{matches:o}=x.useContext(pn),{pathname:i}=Ut(),l=JSON.stringify(us(o,t.v7_relativeSplatPath)),a=x.useRef(!1);return $f(()=>{a.current=!0}),x.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=cs(u,JSON.parse(l),i,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:Tn([n,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[n,r,l,i,e])}function eh(){let{matches:e}=x.useContext(pn),n=e[e.length-1];return n?n.params:{}}function Mf(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=x.useContext(zn),{matches:o}=x.useContext(pn),{pathname:i}=Ut(),l=JSON.stringify(us(o,r.v7_relativeSplatPath));return x.useMemo(()=>cs(e,JSON.parse(l),i,t==="path"),[e,l,i,t])}function nh(e,n){return th(e,n)}function th(e,n,t,r){zt()||te(!1);let{navigator:o}=x.useContext(zn),{matches:i}=x.useContext(pn),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Ut(),d;if(n){var f;let k=typeof n=="string"?tt(n):n;s==="/"||(f=k.pathname)!=null&&f.startsWith(s)||te(!1),d=k}else d=u;let p=d.pathname||"/",v=p;if(s!=="/"){let k=s.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=Rg(e,{pathname:v}),P=ah(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Tn([s,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:Tn([s,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,t,r);return n&&P?x.createElement(Ri.Provider,{value:{location:Hr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Cn.Pop}},P):P}function rh(){let e=dh(),n=Zg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},n),t?x.createElement("pre",{style:o},t):null,null)}const oh=x.createElement(rh,null);class ih extends x.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?x.createElement(pn.Provider,{value:this.props.routeContext},x.createElement(Nf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lh(e){let{routeContext:n,match:t,children:r}=e,o=x.useContext(ds);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(pn.Provider,{value:n},r)}function ah(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,a=(o=t)==null?void 0:o.errors;if(a!=null){let d=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||te(!1),l=l.slice(0,Math.min(l.length,d+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let f=l[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:v}=t,y=f.route.loader&&p[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,f,p)=>{let v,y=!1,P=null,k=null;t&&(v=a&&f.route.id?a[f.route.id]:void 0,P=f.route.errorElement||oh,s&&(u<0&&p===0?(mh("route-fallback"),y=!0,k=null):u===p&&(y=!0,k=f.route.hydrateFallbackElement||null)));let g=n.concat(l.slice(0,p+1)),m=()=>{let h;return v?h=P:y?h=k:f.route.Component?h=x.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,x.createElement(lh,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:h})};return t&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?x.createElement(ih,{location:t.location,revalidation:t.revalidation,component:P,error:v,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var If=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(If||{}),Of=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Of||{});function sh(e){let n=x.useContext(ds);return n||te(!1),n}function uh(e){let n=x.useContext(Xg);return n||te(!1),n}function ch(e){let n=x.useContext(pn);return n||te(!1),n}function Af(e){let n=ch(),t=n.matches[n.matches.length-1];return t.route.id||te(!1),t.route.id}function dh(){var e;let n=x.useContext(Nf),t=uh(),r=Af();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function fh(){let{router:e}=sh(If.UseNavigateStable),n=Af(Of.UseNavigateStable),t=x.useRef(!1);return $f(()=>{t.current=!0}),x.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Hr({fromRouteId:n},i)))},[e,n])}const Ju={};function mh(e,n,t){Ju[e]||(Ju[e]=!0)}function ph(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function oa(e){let{to:n,replace:t,state:r,relative:o}=e;zt()||te(!1);let{future:i,static:l}=x.useContext(zn),{matches:a}=x.useContext(pn),{pathname:s}=Ut(),u=Tf(),d=cs(n,us(a,i.v7_relativeSplatPath),s,o==="path"),f=JSON.stringify(d);return x.useEffect(()=>u(JSON.parse(f),{replace:t,state:r,relative:o}),[u,f,o,t,r]),null}function gr(e){te(!1)}function gh(e){let{basename:n="/",children:t=null,location:r,navigationType:o=Cn.Pop,navigator:i,static:l=!1,future:a}=e;zt()&&te(!1);let s=n.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:s,navigator:i,static:l,future:Hr({v7_relativeSplatPath:!1},a)}),[s,a,i,l]);typeof r=="string"&&(r=tt(r));let{pathname:d="/",search:f="",hash:p="",state:v=null,key:y="default"}=r,P=x.useMemo(()=>{let k=ss(d,s);return k==null?null:{location:{pathname:k,search:f,hash:p,state:v,key:y},navigationType:o}},[s,d,f,p,v,y,o]);return P==null?null:x.createElement(zn.Provider,{value:u},x.createElement(Ri.Provider,{children:t,value:P}))}function hh(e){let{children:n,location:t}=e;return nh(ia(n),t)}new Promise(()=>{});function ia(e,n){n===void 0&&(n=[]);let t=[];return x.Children.forEach(e,(r,o)=>{if(!x.isValidElement(r))return;let i=[...n,o];if(r.type===x.Fragment){t.push.apply(t,ia(r.props.children,i));return}r.type!==gr&&te(!1),!r.props.index||!r.props.children||te(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ia(r.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function la(){return la=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},la.apply(null,arguments)}function vh(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function yh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ph(e,n){return e.button===0&&(!n||n==="_self")&&!yh(e)}const xh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],kh="6";try{window.__reactRouterVersion=kh}catch{}const Sh="startTransition",ec=pm[Sh];function wh(e){let{basename:n,children:t,future:r,window:o}=e,i=x.useRef();i.current==null&&(i.current=Eg({window:o,v5Compat:!0}));let l=i.current,[a,s]=x.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=x.useCallback(f=>{u&&ec?ec(()=>s(f)):s(f)},[s,u]);return x.useLayoutEffect(()=>l.listen(d),[l,d]),x.useEffect(()=>ph(r),[r]),x.createElement(gh,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:l,future:r})}const _h=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aa=x.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:u,preventScrollReset:d,viewTransition:f}=n,p=vh(n,xh),{basename:v}=x.useContext(zn),y,P=!1;if(typeof u=="string"&&Ch.test(u)&&(y=u,_h))try{let h=new URL(window.location.href),S=u.startsWith("//")?new URL(h.protocol+u):new URL(u),b=ss(S.pathname,v);S.origin===h.origin&&b!=null?u=b+S.search+S.hash:P=!0}catch{}let k=qg(u,{relative:o}),g=Eh(u,{replace:l,state:a,target:s,preventScrollReset:d,relative:o,viewTransition:f});function m(h){r&&r(h),h.defaultPrevented||g(h)}return x.createElement("a",la({},p,{href:y||k,onClick:P||i?r:m,ref:t,target:s}))});var nc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(nc||(nc={}));var tc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tc||(tc={}));function Eh(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:a}=n===void 0?{}:n,s=Tf(),u=Ut(),d=Mf(e,{relative:l});return x.useCallback(f=>{if(Ph(f,t)){f.preventDefault();let p=r!==void 0?r:ci(u)===ci(d);s(e,{replace:p,state:o,preventScrollReset:i,relative:l,viewTransition:a})}},[u,s,d,r,o,t,e,i,l,a])}const bh="https://github.com/frankvane/vane-components";class Dh extends Gr.Component{constructor(){super(...arguments);Ie(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?c.jsxs("div",{className:"crash",role:"alert",children:[c.jsx("h3",{children:"这个页面炸了"}),c.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),c.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Ff(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function Rh({demos:e,pathname:n}){var s;const{groups:t,entries:r,label:o}=e,i=(s=r.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:s.meta.group,[l,a]=x.useState(()=>{var d;const u=(d=t[0])==null?void 0:d.key;return Object.fromEntries(t.map(f=>[f.key,f.key===(i??u)]))});return x.useEffect(()=>{i&&a(u=>u[i]?u:{...u,[i]:!0})},[i]),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-head",children:[c.jsx("span",{children:o}),c.jsxs("code",{children:[r.length," demos"]})]}),t.map(u=>{const d=r.filter(p=>p.meta.group===u.key);if(d.length===0)return null;const f=l[u.key]??!1;return c.jsxs("div",{className:"nav-group",children:[c.jsxs("button",{type:"button",className:`nav-group-head${i===u.key?" is-current":""}`,onClick:()=>a(p=>({...p,[u.key]:!f})),"aria-expanded":f,children:[c.jsx("span",{className:`nav-caret${f?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,c.jsx("code",{children:d.length})]}),f?c.jsx("div",{className:"nav-list",children:d.map(p=>c.jsxs(aa,{to:`/demo/${p.meta.slug}`,className:`nav-sub${n===`/demo/${p.meta.slug}`?" is-active":""}`,children:[c.jsx("em",{"aria-hidden":!0,children:Ff(e,p)}),p.meta.title]},p.meta.slug))}):null]},u.key)})]})}function Lh({demos:e}){var a;const{slug:n}=eh(),{entries:t,detail:r}=e,o=n?t.find(s=>s.meta.slug===n):void 0,i=(a=t[0])==null?void 0:a.meta.slug;if(!o)return c.jsx(oa,{to:i?`/demo/${i}`:"/",replace:!0});const l=t.indexOf(o)+1;return c.jsx(Gr.Fragment,{children:r(o,l)},o.meta.slug)}function jh({config:e}){var f,p;const{pathname:n}=Ut(),[t,r]=x.useState(!1),[o,i]=x.useState(!1);x.useEffect(()=>r(!1),[n]);const l=x.useCallback(()=>i(v=>!v),[]);x.useEffect(()=>{const v=y=>{const P=y.target,k=P&&(P.tagName==="INPUT"||P.tagName==="TEXTAREA"||P.isContentEditable);y.key==="Escape"&&r(!1),!k&&(y.key==="g"||y.key==="G")&&!y.metaKey&&!y.ctrlKey&&i(g=>!g)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]);const a=e.demos,s=(f=a.entries[0])==null?void 0:f.meta.slug,u=x.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const v=n.replace(/^\/demo\/?/,""),y=a.entries.find(P=>P.meta.slug===v);return y?`demo ${Ff(a,y)} · ${y.meta.title}`:"demo · 逐项示例"},[n,e,a]),d=x.useMemo(()=>e.nav.map((v,y)=>({...v,no:String(y+1).padStart(2,"0")})),[e.nav]);return c.jsxs("div",{className:`shell${t?" is-nav-open":""}${o?" is-guides":""}`,children:[c.jsx("a",{className:"skip-link",href:"#main",onClick:v=>{v.preventDefault();const y=document.getElementById("main");y==null||y.setAttribute("tabindex","-1"),y==null||y.focus(),y==null||y.scrollIntoView({block:"start"})},children:"跳到内容"}),c.jsxs("aside",{className:"side","aria-label":"站点导航",children:[c.jsxs(aa,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),c.jsxs("span",{children:[c.jsx("strong",{children:e.pkg}),c.jsx("em",{children:e.subtitle})]})]}),c.jsxs("nav",{children:[d.map(v=>c.jsxs(aa,{to:v.to,className:`nav-item${n===v.to?" is-active":""}`,"aria-current":n===v.to?"page":void 0,children:[c.jsx("em",{"aria-hidden":!0,children:v.no}),c.jsx("span",{children:v.label}),v.hint?c.jsx("code",{children:v.hint}):null]},v.to)),c.jsx(Rh,{demos:e.demos,pathname:n})]}),c.jsxs("div",{className:"side-foot",children:[c.jsx("p",{children:e.footer[0]}),c.jsx("p",{className:"muted",children:e.footer[1]})]})]}),c.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),c.jsxs("div",{className:"main",id:"main",children:[c.jsxs("header",{className:"topbar",children:[c.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(v=>!v),children:c.jsx("span",{"aria-hidden":!0})}),c.jsx("span",{className:"crumb",children:u}),c.jsxs("div",{className:"topbar-right",children:[(p=e.stats)==null?void 0:p.map(v=>c.jsxs("span",{className:"topbar-stat",title:v.title,children:[c.jsx("b",{children:v.value})," ",v.label]},v.label)),c.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[c.jsx("i",{"aria-hidden":!0}),"guides"]}),c.jsx("a",{className:"topbar-link",href:e.sourceUrl??bh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),c.jsx("div",{className:"guides","aria-hidden":!0}),c.jsx(x.Suspense,{fallback:c.jsx("div",{className:"loading",children:"loading modules…"}),children:c.jsx(Dh,{children:c.jsxs(hh,{children:[e.routes.map(v=>c.jsx(gr,{path:v.path,element:v.element},v.path)),c.jsx(gr,{path:"/demo",element:c.jsx(oa,{to:s?`/demo/${s}`:"/",replace:!0})}),c.jsx(gr,{path:"/demo/:slug",element:c.jsx(Lh,{demos:e.demos})}),c.jsx(gr,{path:"*",element:c.jsx(oa,{to:"/",replace:!0})})]})})})]})]})}function Nh({config:e}){return c.jsx(wh,{children:c.jsx(jh,{config:e})})}const $h="modulepreload",Th=function(e,n){return new URL(e,n).href},rc={},fs=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(u=>{if(u=Th(u,r),u in rc)return;rc[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let y=l.length-1;y>=0;y--){const P=l[y];if(P.href===u&&(!d||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":$h,d||(v.as="script"),v.crossOrigin="",v.href=u,s&&v.setAttribute("nonce",s),document.head.appendChild(v),d)return new Promise((y,P)=>{v.addEventListener("load",y),v.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return n().catch(i)})};function Mh(){const e=new Map,n=new Map,t=(l,a)=>{const s=e.get(l);if(s)for(const u of[...s])try{u(a)}catch(d){console.warn(`[PluginBus] handler error for event "${l}"`,d)}},r=(l,a)=>{let s=e.get(l);return s||(s=new Set,e.set(l,s)),s.add(a),()=>{s==null||s.delete(a)}},o=(l,a)=>{const s=u=>{a(u),i(l,s)};return r(l,s)},i=(l,a)=>{var s;if(!a){e.delete(l);return}(s=e.get(l))==null||s.delete(a)};return{emit:t,on:r,once:o,off:i,getData:l=>n.get(l),setData:(l,a)=>{const s=n.get(l);n.set(l,a),s!==a&&t(l,a)},deleteData:l=>{const a=n.has(l);n.delete(l),a&&t(l,void 0)},hasData:l=>n.has(l),getAll:()=>{const l={};return n.forEach((a,s)=>{l[s]=a}),l},clear:()=>{e.clear(),n.clear()}}}function zf(e){const n=new Map(e.map(a=>[a.name,a])),t=[];for(const a of e)for(const s of a.dependencies??[])n.has(s)||t.push(`${a.name} -> ${s}`);const r=[],o=new Set,i=[...e],l=a=>(a.dependencies??[]).every(s=>o.has(s)||!n.has(s));for(;i.length>0;){const a=i.filter(l);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(u=>u.name).join(" <-> ")}`);let s=a[0];for(const u of a)(u.priority??0)>(s.priority??0)&&(s=u);r.push(s),o.add(s.name),i.splice(i.indexOf(s),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}async function Ih(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:o="unknown"}=n;if(!t||t<=0)return await e();let i;const l=new Promise((a,s)=>{i=setTimeout(()=>{s(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const Oh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function Ah(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,o=[],i=[],l=new Map,a=()=>zf([...l.values()].filter(u=>u.enabled!==!1)),s=u=>{l.set(u.name,{...u,enabled:u.enabled??!0}),u.init&&Promise.resolve(u.init()).catch(d=>{n.warn(`[PluginManager] init failed for ${u.name}`,d)})};return{register:s,registerAll:u=>{for(const d of u)s(d)},unregister:u=>{const d=l.get(u);d&&(d.destroy&&Promise.resolve(d.destroy()).catch(f=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,f)}),l.delete(u))},getPlugin:u=>l.get(u),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(u=>u.enabled!==!1),getExecutionOrder:a,enable:u=>{const d=l.get(u);d&&(d.enabled=!0)},disable:u=>{const d=l.get(u);d&&(d.enabled=!1)},has:u=>l.has(u),executeHook:async(u,d,...f)=>{var p,v;for(const y of a()){const P=(p=y.hooks)==null?void 0:p[u];if(typeof P!="function")continue;const k=y.sandbox??t,g=y.timeout??r;let m;try{m=k?await Ih(()=>P(d,...f),{timeout:g,name:y.name,hook:String(u)}):await P(d,...f)}catch(h){if(o.push({plugin:y.name,hook:String(u),error:h}),n.warn(`[PluginManager] hook ${String(u)} failed in ${y.name}`,h),(v=e.onError)==null||v.call(e,y.name,String(u),h),u==="onError")break;continue}if(Oh.has(String(u))&&typeof m=="function"){i.push(m);continue}if(m===!1)return!1;if(m!==void 0&&m!==!0)return m}},clear:()=>{const u=i.splice(0);for(const d of u.reverse())try{d()}catch(f){n.warn("[PluginManager] cleanup failed",f)}for(const d of l.values())d.destroy&&Promise.resolve(d.destroy()).catch(f=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,f)});l.clear()},getErrors:()=>[...o]}}var Fh=Object.defineProperty,zh=(e,n,t)=>n in e?Fh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Uh=(e,n,t)=>zh(e,n+"",t);class Bh extends Gr.Component{constructor(){super(...arguments),Uh(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(o=(r=this.props).onError)==null||o.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let Co=null;function Hh(e=!1){if(Co&&!e)return Co;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(o),l=/Mobile|Android|iPhone/i.test(o),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Co={type:i?"tablet":l?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:a,isRetina:r>=2},Co}function oc(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),r=Object.keys(n);return t.length!==r.length?!1:t.every(o=>Object.is(e[o],n[o]))}function Wh(e){const{plugins:n,props:t,data:r,initialState:o,containerRef:i,enableDebug:l=!1,managerOptions:a,extendContext:s}=e,u=x.useRef(null),d=i??u,f=x.useRef(null);f.current||(f.current=Ah(a));const p=f.current,v=x.useRef(null);v.current||(v.current=Mh());const y=v.current,P=x.useRef(new Map),[k,g]=x.useState(o??{}),[,m]=x.useState(0),h=x.useCallback(()=>m(_=>_+1),[]),S=x.useMemo(()=>Hh(),[]),b=x.useRef(n),j=b.current;(j.length!==n.length||n.some((_,E)=>_!==j[E]))&&(b.current=n);const L=b.current,R=L.map(_=>_.name).join("|");x.useLayoutEffect(()=>{p.clear(),p.registerAll(L),l&&console.debug("[vane/plugin-core] plugins registered:",R)},[L]),x.useLayoutEffect(()=>()=>{p.executeHook("onUnmount",$.current),p.clear()},[p]);const O=x.useMemo(()=>zf(L),[L]),$=x.useRef(null),F=x.useRef(t);oc(F.current,t)||(F.current=t);const oe=F.current,ae=x.useRef(r);oc(ae.current,r)||(ae.current=r);const H=ae.current,Xe=x.useMemo(()=>{const _={props:oe,data:H,bus:y,refs:{container:d,getContainer:()=>d.current},state:k,setState:E=>g(T=>({...T,...E})),shared:P.current,deviceInfo:S,forceUpdate:h,getSize:()=>{const E=d.current;return E?{width:E.offsetWidth,height:E.offsetHeight}:{width:0,height:0}},logger:console};return s?s(_):_},[oe,H,k,S,y,s]);$.current=Xe;const He=x.useCallback(_=>{var T,M;let E=_;for(const I of O){const z=(T=I.hooks)==null?void 0:T.transformProps;if(typeof z=="function")try{E=z(E)}catch(Z){(((M=$.current)==null?void 0:M.logger)??console).warn(`[plugin-core] ${I.name}.transformProps 执行失败，已跳过`,Z)}}return E},[O]),D=x.useCallback(_=>{var T,M;let E=_;for(const I of O){const z=(T=I.hooks)==null?void 0:T.transformData;if(typeof z=="function")try{E=z($.current,E)}catch(Z){(((M=$.current)==null?void 0:M.logger)??console).warn(`[plugin-core] ${I.name}.transformData 执行失败，已跳过`,Z)}}return E},[O]),w=x.useCallback((_,...E)=>p.executeHook(_,$.current,...E),[p]);return{manager:p,bus:y,context:Xe,state:k,setState:Xe.setState,execute:w,transformProps:He,transformData:D,orderedPlugins:O}}x.createContext(null);const Uf=x.createContext(null);function Gh({orderedPlugins:e,context:n,children:t}){const r=x.useMemo(()=>({orderedPlugins:e,context:n}),[e,n]);return c.jsx(Uf.Provider,{value:r,children:t})}function Vh(e,n,t){return[...e].filter(r=>r.enabled!==!1&&typeof r.hooks[t]=="function").sort((r,o)=>{var i,l;return(((i=r.config)==null?void 0:i.order)??0)-(((l=o.config)==null?void 0:l.order)??0)||(o.priority??0)-(r.priority??0)}).map(r=>{try{const o=r.hooks[t](n);return o==null?null:c.jsx(Bh,{children:o},`danmaku-slot-${r.name}`)}catch(o){return console.warn(`[vane-danmaku] 插件 ${r.name} 的 ${t} 渲染失败`,o),null}}).filter(Boolean)}function ol(e){const n=x.useContext(Uf);return n?Vh(n.orderedPlugins,n.context,e):[]}const sa=6,Bf=6;function Hf(e,n,t){var l;const r=e.meta.fontSize??t.baseFontSize;n.font=ua(r,e,t);let o;const i=(l=e.renderHint)==null?void 0:l.rich;if(i&&i.length>0?o=i.reduce((a,s)=>a+n.measureText(s.text).width,0):o=n.measureText(e.text).width,e.meta.fanBadge){const a=n.measureText(` ${e.meta.fanBadge.name} Lv${e.meta.fanBadge.level} `).width;o+=a+sa*2+Bf}return e.meta.combo&&e.meta.combo>1&&(o+=n.measureText(` x${e.meta.combo}`).width),{width:o,height:r}}function Kh(e,n){var r;let t=0;for(const o of e.text)t+=/[㐀-鿿぀-ヿ가-킯＀-￯]/.test(o)?n:n*.55;return e.meta.fanBadge&&(t+=n*4+18),e.meta.combo&&e.meta.combo>1&&(t+=n*2),(r=e.meta.emoji)!=null&&r.length&&(t+=e.meta.emoji.length*n),Math.max(40,t)}function ua(e,n,t){const r=n.meta.fontFamily??t.fontFamily;return`${n.meta.fontWeight??400} ${e}px ${r}`}function Qh(e,n,t){const r=e*n,o=r+n;for(const i of t)if(r<i.y+i.h&&o>i.y)return!0;return!1}function Zh(e,n,t){const r=e*n,o=r+n;let i=0;for(const l of t)r<l.y+l.h&&o>l.y&&(i+=l.w);return i}const fi=class fi{constructor(){Ie(this,"active",new Map);Ie(this,"fired",new Set);Ie(this,"waiting",new Map);Ie(this,"dropped",0);Ie(this,"lastTime",0);Ie(this,"pauseOffset",0);Ie(this,"pausedAt",null);Ie(this,"itemsCache",null);Ie(this,"itemsSorted",!0)}get activeCount(){return this.active.size}get droppedCount(){return this.dropped}effectiveTime(n,t){t?this.pausedAt!==null&&(this.pauseOffset+=Math.max(0,n-this.pausedAt),this.pausedAt=null):this.pausedAt===null&&(this.pausedAt=n);const r=this.pausedAt===null?0:n-this.pausedAt;return n-this.pauseOffset-r}tick(n,t,r,o,i,l){var v;r<this.lastTime-.5&&(this.active.clear(),this.fired.clear(),this.waiting.clear(),this.dropped=0,this.pauseOffset=0,this.pausedAt=null),this.lastTime=r;const a=this.effectiveTime(r,o);if(this.itemsCache!==n){this.itemsCache=n,this.itemsSorted=!0;for(let y=1;y<n.length;y++)if(n[y].time<n[y-1].time){this.itemsSorted=!1;break}}const s=Math.max(i.trackHeight,t.height-i.topInset-i.bottomInset),u=Math.max(1,Math.floor(s/i.trackHeight));let d=0;const f=48;for(const y of n){if(y.time>a){if(this.itemsSorted)break;continue}if(this.fired.has(y.id)||y._cmd)continue;const P=this.waiting.get(y.id);if(P!=null&&a-P>fi.WAIT_MAX){this.fired.add(y.id),this.waiting.delete(y.id),this.dropped++;continue}if(d>=f)continue;d++;const k=y.mode==="top"||y.mode==="bottom"||((v=y.renderHint)==null?void 0:v.pinned)===!0,g=i.measureWidth?Math.max(1,i.measureWidth(y)):0,m={item:y,width:g||Kh(y,i.baseFontSize),duration:y.duration??i.defaultDuration,dir:k?0:y.mode==="reverse"?1:-1},h=this.assignTrack(m,a,t,u,i,l);if(h==null){P==null&&this.waiting.set(y.id,a);continue}this.waiting.delete(y.id),this.fired.add(y.id);const S=m.dir===-1?t.width:m.dir===1?-m.width:(t.width-m.width)/2;this.active.set(y.id,{item:y,track:h,mode:y.mode,dir:m.dir,enterAt:a,duration:m.duration,width:m.width,measured:g>0,x:S,y:0,alpha:1})}const p=[];for(const[y,P]of this.active){const k=Yh(P,a,t,i);if(k.done){this.active.delete(y);continue}P.x=k.x,P.y=k.y;let g=1;{const m=a-P.enterAt,h=Math.max(.001,i.fadeMs/1e3);m<h&&(g=Math.max(0,m/h));const S=P.duration-m;S<h&&(g=Math.min(g,Math.max(0,S/h))),g=Math.min(1,Math.max(0,g))}P.alpha=g,p.push(P)}return p}assignTrack(n,t,r,o,i,l){var k,g;const a=n.item,s=a.mode==="top"||((k=a.renderHint)==null?void 0:k.pinned)===!0,u=a.mode==="bottom",d=Math.max(1,Math.floor(o*.25)),f=Math.floor(o*.75);let p,v;s?(p=0,v=d):u?(p=f,v=o):(p=d,v=f);const y=(g=a.renderHint)==null?void 0:g.track;if(y!=null&&y>=0&&y<o&&this.trackFree(y,n,t,r,i))return y;let P=this.findFree(p,v,n,t,r,i,l);return P>=0||(P=this.findFree(0,o,n,t,r,i,l),P>=0)||(P=this.findLeastBlocked(p,v,n,t,r,i,l),P>=0)||(P=this.findLeastBlocked(0,o,n,t,r,i,l),P>=0)?P:null}trackFree(n,t,r,o,i){const l=t.dir,a=(o.width+t.width)/Math.max(.001,t.duration);for(const s of this.active.values()){if(s.track!==n)continue;if(s.dir===0){if(r-s.enterAt<s.duration)return!1;continue}if(l===0){if(r-s.enterAt<s.duration)return!1;continue}if(s.dir!==l)return!1;const u=(o.width+s.width)/Math.max(.001,s.duration);if(l===-1){const d=s.x+s.width;if(d>o.width-i.gap||a>u&&a*d>u*o.width)return!1}else if(s.x<i.gap||a>u&&a*(o.width-s.x)>u*o.width)return!1}return!0}findFree(n,t,r,o,i,l,a){for(let s=n;s<t;s++)if(!(a.length&&Qh(s,l.trackHeight,a))&&this.trackFree(s,r,o,i,l))return s;return-1}findLeastBlocked(n,t,r,o,i,l,a){let s=-1,u=1/0;for(let d=n;d<t;d++){if(!this.trackFree(d,r,o,i,l))continue;const f=Zh(d,l.trackHeight,a);if(f<u&&(u=f,s=d,f===0))break}return s}clear(){this.active.clear(),this.waiting.clear()}};Ie(fi,"WAIT_MAX",1.2);let ca=fi;function Yh(e,n,t,r){const o=r.trackHeight,i=r.topInset+e.track*o+o*.5,l=n-e.enterAt;if(e.mode==="scroll"){const u=(t.width+e.width)/e.duration,d=t.width-u*l;return{x:d,y:i,done:d+e.width<0}}if(e.mode==="reverse"){const u=(t.width+e.width)/e.duration,d=-e.width+u*l;return{x:d,y:i,done:d>t.width}}return{x:(t.width-e.width)/2,y:i,done:l>e.duration}}function il(e,n,t,r,o,i){if(typeof e.roundRect=="function"){e.roundRect(n,t,r,o,i);return}const l=Math.max(0,Math.min(i,r/2,o/2));e.moveTo(n+l,t),e.lineTo(n+r-l,t),e.quadraticCurveTo(n+r,t,n+r,t+l),e.lineTo(n+r,t+o-l),e.quadraticCurveTo(n+r,t+o,n+r-l,t+o),e.lineTo(n+l,t+o),e.quadraticCurveTo(n,t+o,n,t+o-l),e.lineTo(n,t+l),e.quadraticCurveTo(n,t,n+l,t),e.closePath()}function Xh(e,n,t){var s,u,d;const r=e.item.meta.fontSize??t.baseFontSize;n.font=ua(r,e.item,t),n.textBaseline="middle",n.textAlign="left",n.save(),n.globalAlpha=e.alpha*t.opacity;let o=e.x;const i=e.y;e.measured||(e.width=Hf(e.item,n,t).width,e.measured=!0);const l=e.width;if((s=e.item.renderHint)!=null&&s.highlight&&(n.save(),n.globalAlpha*=.22,n.fillStyle=e.item.renderHint.highlight,n.beginPath(),il(n,e.x-6,i-r/2-5,l+12,r+10,8),n.fill(),n.restore()),(u=e.item.renderHint)!=null&&u.ring&&(n.save(),n.strokeStyle=t.accent,n.lineWidth=2,n.beginPath(),il(n,e.x-6,i-r/2-6,l+6*2,r+6*2,8),n.stroke(),n.restore()),e.item.meta.fanBadge){const f=e.item.meta.fanBadge,p=`${f.name} Lv${f.level}`,v=n.measureText(p).width+sa*2;n.save(),n.fillStyle=f.color,n.beginPath(),il(n,o,i-r/2,v,r,4),n.fill(),n.fillStyle="#fff",n.fillText(p,o+sa,i),n.restore(),o+=v+Bf}n.lineWidth=Math.max(2,r/12),n.strokeStyle=t.stroke;const a=(d=e.item.renderHint)==null?void 0:d.rich;if(a&&a.length>0)for(const f of a)n.fillStyle=f.color??e.item.meta.color??"#fff",n.strokeText(f.text,o,i),n.fillText(f.text,o,i),o+=n.measureText(f.text).width;else n.fillStyle=e.item.meta.color??"#fff",n.strokeText(e.item.text,o,i),n.fillText(e.item.text,o,i),o+=n.measureText(e.item.text).width;if(e.item.meta.combo&&e.item.meta.combo>1){const f=` x${e.item.meta.combo}`;n.save(),n.font=`${ua(r,e.item,t)}`,n.fillStyle=t.accent,n.strokeStyle=t.stroke,n.lineWidth=Math.max(2,r/12),n.strokeText(f,o,i),n.fillText(f,o,i),n.restore()}n.restore()}const yn={trackHeight:28,fontFamily:'system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',baseFontSize:22,opacity:1,defaultDuration:8,gap:24,fadeMs:450,accent:"#ff7a29",topInset:0,bottomInset:0};function qh(e){const n=Array.from(new Set(e.flatMap(r=>[r.x,r.x+r.w])).values()).sort((r,o)=>r-o);let t=0;for(let r=0;r<n.length-1;r++){const o=n[r],i=n[r+1],l=i-o;if(l<=0)continue;const a=(o+i)/2,s=e.filter(p=>p.x<=a&&p.x+p.w>=a).map(p=>[p.y,p.y+p.h]).sort((p,v)=>p[0]-v[0]);let u=0,d=-1/0,f=-1/0;for(const[p,v]of s)v<=f||(p>f?(f>d&&(u+=f-d),d=p,f=v):f=Math.max(f,v));f>d&&(u+=f-d),t+=l*u}return t}function Jh(e,n,t){const r=[];for(const o of e){const i=Math.max(0,o.x),l=Math.max(0,o.y),a=Math.min(n,o.x+o.w)-i,s=Math.min(t,o.y+o.h)-l;a<=1||s<=1||r.push({x:i,y:l,w:a,h:s})}return!r.length||qh(r)>n*t*.85?null:r}const Yr=x.forwardRef(function(n,t){const{items:r,currentTime:o=0,playing:i=!0,trackHeight:l=yn.trackHeight,baseFontSize:a=yn.baseFontSize,opacity:s=yn.opacity,fadeMs:u=yn.fadeMs,gap:d=yn.gap,defaultDuration:f=yn.defaultDuration,accent:p=yn.accent,containerClassName:v,containerStyle:y,onMount:P,onUnmount:k,debug:g,containerRefExternal:m,avoidZoneProvider:h,children:S,topInset:b=0,bottomInset:j=0}=n,L=ol("renderHeader"),R=ol("renderOverlay"),O=ol("renderFooter"),$=x.useRef(null),F=m??$,oe=x.useRef(null),ae=x.useRef(null);ae.current||(ae.current=new ca);const H=ae.current,[,Xe]=x.useState(0),He=x.useRef({width:0,height:0,dpr:1}),D=x.useRef({items:r,currentTime:o,playing:i,trackHeight:l,baseFontSize:a,opacity:s,fadeMs:u,gap:d,defaultDuration:f,accent:p,avoidZoneProvider:h,topInset:b,bottomInset:j});return x.useLayoutEffect(()=>{D.current={items:r,currentTime:o,playing:i,trackHeight:l,baseFontSize:a,opacity:s,fadeMs:u,gap:d,defaultDuration:f,accent:p,avoidZoneProvider:h,topInset:b,bottomInset:j}}),x.useImperativeHandle(t,()=>({getContainer:()=>F.current,forceUpdate:()=>Xe(w=>w+1),getSize:()=>{var w,_;return{width:((w=F.current)==null?void 0:w.offsetWidth)??0,height:((_=F.current)==null?void 0:_.offsetHeight)??0}},getCanvas:()=>oe.current,clearScreen:()=>H.clear(),getStats:()=>({active:H.activeCount,dropped:H.droppedCount})}),[F,H]),x.useEffect(()=>{const w=F.current;if(!w)return;const _=()=>{const T=w.getBoundingClientRect(),M=Math.min(window.devicePixelRatio||1,2);He.current={width:T.width,height:T.height,dpr:M};const I=oe.current;I&&(I.width=Math.max(1,Math.round(T.width*M)),I.height=Math.max(1,Math.round(T.height*M)),I.style.width=`${T.width}px`,I.style.height=`${T.height}px`)};_();const E=new ResizeObserver(_);return E.observe(w),()=>E.disconnect()},[F]),x.useEffect(()=>{const w=oe.current,_=F.current;if(!w||!_)return;const E=w.getContext("2d");if(!E)return;let T=0,M=!1;const I=()=>{if(T=requestAnimationFrame(I),!document.hidden)try{z()}catch(Z){M||(M=!0,console.error("[DanmakuCore] 渲染帧异常，已跳过该帧",Z))}},z=()=>{const{width:Z,height:K,dpr:ge}=He.current,se=D.current,ct={...yn,trackHeight:se.trackHeight,baseFontSize:se.baseFontSize,opacity:se.opacity,fadeMs:se.fadeMs,gap:se.gap,defaultDuration:se.defaultDuration,accent:se.accent,stroke:"rgba(0,0,0,0.85)",topInset:se.topInset,bottomInset:se.bottomInset};ct.measureWidth=xe=>Hf(xe,E,ct).width,E.setTransform(ge,0,0,ge,0,0),E.clearRect(0,0,Z,K);const hn=se.avoidZoneProvider?se.avoidZoneProvider():[],qt=H.tick(se.items,{width:Z,height:K},se.currentTime,se.playing,ct,hn),Un=hn.length?Jh(hn,Z,K):null;if(Un){E.save(),E.beginPath(),E.rect(0,0,Z,K);for(const xe of Un)E.rect(xe.x,xe.y,xe.w,xe.h);E.clip("evenodd")}E.globalAlpha=ct.opacity;for(const xe of qt)xe.x>Z||xe.x+xe.width<0||xe.alpha<=.01||Xh(xe,E,ct);E.globalAlpha=1,Un&&E.restore()};return T=requestAnimationFrame(I),()=>cancelAnimationFrame(T)},[F,H]),x.useEffect(()=>(g&&console.debug("[DanmakuCore] mounted"),P==null||P(),()=>k==null?void 0:k()),[]),c.jsxs("div",{ref:F,className:v,style:{position:"relative",overflow:"hidden",...y},children:[c.jsx("canvas",{ref:oe,role:"img","aria-label":"弹幕画布",style:{position:"absolute",inset:0,pointerEvents:"none"}}),L.length>0&&c.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,display:"flex",flexWrap:"wrap",gap:8,padding:8,pointerEvents:"none",zIndex:2},children:L}),R.length>0&&c.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:3},children:R}),O.length>0&&c.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,display:"flex",gap:8,padding:8,pointerEvents:"none",zIndex:2},children:O}),S]})});Yr.displayName="DanmakuCore";function ms(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:o=!1}=t,i=x.forwardRef((l,a)=>{const s=x.useRef(null),u=Wh({plugins:r,props:l,data:{items:l.items,now:l.currentTime},containerRef:s,enableDebug:o}),d=x.useCallback((k,...g)=>u.execute(k,...g),[u.manager]),f=x.useMemo(()=>{const k={items:l.items,now:l.currentTime};return u.transformData(k)??k},[l.items,l.currentTime,u.transformData,u.state]);x.useEffect(()=>{d("onMount")},[d]);const p=x.useCallback(()=>{const k=u.context.shared,g=k.get("avoidZoneProvider");return g?g():k.get("avoidZones")??[]},[u.context.shared]),v=u.transformProps(l),y={...v,items:f.items,currentTime:l.currentTime,playing:l.playing,trackHeight:v.trackHeight,baseFontSize:v.baseFontSize,opacity:v.opacity,containerRefExternal:s,avoidZoneProvider:p,debug:v.debug??o,onMount:()=>{var k;return(k=v.onMount)==null?void 0:k.call(v)},onUnmount:()=>{var k;return(k=v.onUnmount)==null?void 0:k.call(v)}},P={...u.context,data:f};return c.jsx(Gh,{orderedPlugins:u.orderedPlugins,context:P,children:c.jsx(e,{ref:a,...y})})});return i.displayName="WithPlugins(DanmakuCore)",i}const ev="SensitiveFilterPlugin",nv="敏感词过滤：命中词按 mode 打码或删除；打码条保留并标记 masked，避免弹幕流闪烁。",tv="0.1.0",rv=["filter","safety","data"],ov=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],iv=[],lv="只读取 context 字段（props / state / data），不调用上下文方法",av=[{name:"words",type:"string[]",default:"[]",description:"敏感词列表（子串匹配）"},{name:"mask",type:"string",default:'"*"',description:"打码字符"},{name:"mode",type:'"mask"|"hide"',default:'"mask"',description:"mask=打码保留整条；hide=直接删除整条"}],sv='withDanmakuPlugins(DanmakuCore, [createSensitiveFilterPlugin({ words: ["敏感词A", "敏感词B"], mode: "mask" })])',ps={name:ev,description:nv,since:tv,tags:rv,events:ov,methods:iv,methodsNote:lv,config:av,example:sv};function uv(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function rt(e={}){const n=e.words??[],t=e.mask??"*",r=e.mode??"mask",o=n.length>0?new RegExp(`(${n.map(uv).join("|")})`,"g"):null;return{name:"sensitive-filter",version:"0.1.0",description:ps.description,priority:10,enabled:!0,hooks:{transformData:(i,l)=>{if(!o)return l;const a=[];for(const s of l.items){if(r==="hide"&&o.test(s.text)){o.lastIndex=0;continue}const u=s.text.replace(o,f=>t.repeat(f.length));o.lastIndex=0;const d=u!==s.text;a.push(d?{...s,text:u,renderHint:{...s.renderHint,masked:!0}}:s)}return{...l,items:a}}}}}rt.meta=ps;const cv="FanBadgePlugin",dv="粉丝牌：按 userId 富化 meta.fanBadge，canvas 内核据此绘制牌底块 + 白字。插件只写数据，绝不直绘。",fv="0.1.0",mv=["badge","enrich","data"],pv=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],gv=[],hv="只读取 context 字段（props / state / data），不调用上下文方法",vv=[{name:"badges",type:"Record<string, FanBadge>",default:"{}",description:"userId -> 粉丝牌（name/level/color）"},{name:"defaultColor",type:"string",default:'"#ff7a29"',description:"lookup 未提供 color 时的缺省牌底色"}],yv='withDanmakuPlugins(DanmakuCore, [createFanBadgePlugin({ badges: { u1: { name: "粉丝", level: 5, color: "#ff7a29" } } })])',gs={name:cv,description:dv,since:fv,tags:mv,events:pv,methods:gv,methodsNote:hv,config:vv,example:yv};function ot(e={}){const n=e.badges??{},t=e.defaultColor??"#ff7a29";return{name:"fan-badge",version:"0.1.0",description:gs.description,priority:11,enabled:!0,hooks:{transformData:(r,o)=>{const i=o.items.map(l=>{if(l.meta.fanBadge||!l.meta.userId)return l;const a=n[l.meta.userId];return a?{...l,meta:{...l.meta,fanBadge:{...a,color:a.color??t}}}:l});return{...o,items:i}}}}}ot.meta=gs;const Pv="PinnedTopPlugin",xv="高赞置顶：高等级弹幕标记 pinned + ring，内核钉在顶部带、居中停留并加高赞环高亮，不随风滚动。",kv="0.1.0",Sv=["pin","highlight","data"],wv=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],_v=[],Cv="只读取 context 字段（props / state / data），不调用上下文方法",Ev=[{name:"minLevel",type:"number",default:"18",description:"高赞阈值：meta.level >= 该值即置顶 + 高赞环"}],bv="withDanmakuPlugins(DanmakuCore, [createPinnedTopPlugin({ minLevel: 18 })])",hs={name:Pv,description:xv,since:kv,tags:Sv,events:wv,methods:_v,methodsNote:Cv,config:Ev,example:bv};function it(e={}){const n=e.minLevel??18;return{name:"pinned-top",version:"0.1.0",description:hs.description,priority:12,enabled:!0,hooks:{transformData:(t,r)=>{const o=r.items.map(i=>{var l;return(i.meta.level??0)>=n&&!((l=i.renderHint)!=null&&l.pinned)?{...i,renderHint:{...i.renderHint,pinned:!0,ring:!0}}:i});return{...r,items:o}}}}}it.meta=hs;const Dv="KeywordHighlightPlugin",Rv="关键词高亮：命中词写入 renderHint.rich 带色分段，内核按段着色，其余保持原色。",Lv="0.1.0",jv=["highlight","keyword","data"],Nv=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],$v=[],Tv="只读取 context 字段（props / state / data），不调用上下文方法",Mv=[{name:"keywords",type:"string[]",default:"[]",description:"要高亮的词"},{name:"color",type:"string",default:'"#ff7a29"',description:"高亮色"}],Iv='withDanmakuPlugins(DanmakuCore, [createKeywordHighlightPlugin({ keywords: ["福利", "抽奖"] })])',vs={name:Dv,description:Rv,since:Lv,tags:jv,events:Nv,methods:$v,methodsNote:Tv,config:Mv,example:Iv};function Ov(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Av(e,n,t){n.lastIndex=0;const r=[];let o=0,i=!1;for(const l of e.matchAll(n)){const a=l.index??0;a>o&&r.push({text:e.slice(o,a)}),r.push({text:l[0],color:t}),o=a+l[0].length,i=!0}return i?(o<e.length&&r.push({text:e.slice(o)}),{rich:r}):{}}function Bt(e={}){const n=e.keywords??[],t=e.color??"#ff7a29",r=n.length>0?new RegExp(`(${n.map(Ov).join("|")})`,"gi"):null;return{name:"keyword-highlight",version:"0.1.0",description:vs.description,priority:16,enabled:!0,hooks:{transformData:(o,i)=>{if(!r)return i;const l=i.items.map(a=>{var u;if((u=a.renderHint)!=null&&u.rich)return a;const s=Av(a.text,r,t);return s.rich?{...a,renderHint:{...a.renderHint,...s}}:a});return{...i,items:l}}}}}Bt.meta=vs;const Fv="KeywordBlockPlugin",zv="关键词硬屏蔽：命中词直接从弹幕流删除（区别于 SensitiveFilter 打码保留），用于违禁/竞品词。",Uv="0.1.0",Bv=["block","filter","data"],Hv=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],Wv=[],Gv="只读取 context 字段（props / state / data），不调用上下文方法",Vv=[{name:"words",type:"string[]",default:"[]",description:"硬屏蔽词"},{name:"mode",type:'"contains"|"equals"',default:'"contains"',description:"contains=包含即删；equals=整句相等才删"}],Kv='withDanmakuPlugins(DanmakuCore, [createKeywordBlockPlugin({ words: ["违禁词"] })])',ys={name:Fv,description:zv,since:Uv,tags:Bv,events:Hv,methods:Wv,methodsNote:Gv,config:Vv,example:Kv};function Ht(e={}){const n=e.words??[],t=e.mode??"contains";return{name:"keyword-block",version:"0.1.0",description:ys.description,priority:17,enabled:!0,hooks:{transformData:(r,o)=>{if(n.length===0)return o;const i=o.items.filter(l=>t==="equals"?!n.some(a=>l.text.trim()===a):!n.some(a=>l.text.includes(a)));return{...o,items:i}}}}}Ht.meta=ys;const Qv="UserMutePlugin",Zv="用户静音：users 中的用户弹幕被删除；allowAdmins 时管理员豁免，避免误伤房管。",Yv="0.1.0",Xv=["mute","user","data"],qv=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],Jv=[],e0="只读取 context 字段（props / state / data），不调用上下文方法",n0=[{name:"users",type:"string[]",default:"[]",description:"被静音的用户 id"},{name:"allowAdmins",type:"boolean",default:"true",description:"管理员豁免静音"}],t0='withDanmakuPlugins(DanmakuCore, [createUserMutePlugin({ users: ["spammer-1"] })])',Ps={name:Qv,description:Zv,since:Yv,tags:Xv,events:qv,methods:Jv,methodsNote:e0,config:n0,example:t0};function Wt(e={}){const n=new Set(e.users??[]),t=e.allowAdmins??!0;return{name:"user-mute",version:"0.1.0",description:Ps.description,priority:18,enabled:!0,hooks:{transformData:(r,o)=>{if(n.size===0)return o;const i=o.items.filter(l=>{const a=l.meta.userId;return!!(!a||!n.has(a)||t&&l.meta.isAdmin)});return{...o,items:i}}}}}Wt.meta=Ps;const r0="EmojiRenderPlugin",o0="表情短码转义：把 :shortcode:（如 :rocket:）替换为 unicode 表情，内核按普通文字绘制。",i0="0.1.0",l0=["emoji","text","data"],a0=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],s0=[],u0="只读取 context 字段（props / state / data），不调用上下文方法",c0=[{name:"map",type:"Record<string,string>",default:"{...内置常用表}",description:"短码->表情映射，可覆盖/扩充内置表"}],d0="withDanmakuPlugins(DanmakuCore, [createEmojiRenderPlugin()])",xs={name:r0,description:o0,since:i0,tags:l0,events:a0,methods:s0,methodsNote:u0,config:c0,example:d0},f0={smile:"😄",heart:"❤️",fire:"🔥",rocket:"🚀",star:"⭐",clap:"👏",cry:"😭",laugh:"😂",gift:"🎁",thumbsup:"👍"};function lt(e={}){const n={...f0,...e.map??{}},t=Object.keys(n),r=t.length>0?new RegExp(`:(${t.join("|")}):`,"g"):null;return{name:"emoji-render",version:"0.1.0",description:xs.description,priority:19,enabled:!0,hooks:{transformData:(o,i)=>{if(!r)return i;const l=i.items.map(a=>{if(!r.test(a.text))return r.lastIndex=0,a;r.lastIndex=0;const s=a.text.replace(r,(u,d)=>n[d]??`:${d}:`);return r.lastIndex=0,{...a,text:s}});return{...i,items:l}}}}}lt.meta=xs;const m0="AtMentionPlugin",p0="@提及高亮：识别 @用户名 写入 renderHint.rich 带色分段，与 KeywordHighlight 共用分段机制。",g0="0.1.0",h0=["mention","highlight","data"],v0=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],y0=[],P0="只读取 context 字段（props / state / data），不调用上下文方法",x0=[{name:"color",type:"string",default:'"#4ea1ff"',description:"@提及着色"},{name:"pattern",type:"string",default:"@[\\w\\u4e00-\\u9fa5]+",description:"自定义提及正则"}],k0="withDanmakuPlugins(DanmakuCore, [createAtMentionPlugin()])",ks={name:m0,description:p0,since:g0,tags:h0,events:v0,methods:y0,methodsNote:P0,config:x0,example:k0},S0="@[\\w\\u4e00-\\u9fa5]+";function w0(e,n,t){const r=[];let o=0,i=!1;for(const l of e.matchAll(n)){const a=l.index??0;a>o&&r.push({text:e.slice(o,a)}),r.push({text:l[0],color:t}),o=a+l[0].length,i=!0}return i?(o<e.length&&r.push({text:e.slice(o)}),{rich:r}):{}}function at(e={}){const n=e.color??"#4ea1ff",t=new RegExp(`(${e.pattern??S0})`,"g");return{name:"at-mention",version:"0.1.0",description:ks.description,priority:20,enabled:!0,hooks:{transformData:(r,o)=>{const i=o.items.map(l=>{var s;if((s=l.renderHint)!=null&&s.rich)return l;const a=w0(l.text,t,n);return a.rich?{...l,renderHint:{...l.renderHint,...a}}:l});return{...o,items:i}}}}}at.meta=ks;const _0="GiftComboPlugin",C0="礼物连击聚合：同用户相同「基础词 xN」紧邻出现合并为一条并累加连击数，内核末尾绘制 xN 角标。",E0="0.1.0",b0=["gift","combo","data"],D0=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],R0=[],L0="只读取 context 字段（props / state / data），不调用上下文方法",j0=[{name:"pattern",type:"string",default:"^(.*?)\\s*x(\\d+)$",description:"连击识别正则（需捕获 基础词 与 次数）"}],N0="withDanmakuPlugins(DanmakuCore, [createGiftComboPlugin()])",Ss={name:_0,description:C0,since:E0,tags:b0,events:D0,methods:R0,methodsNote:L0,config:j0,example:N0},$0=/^(.*?)\s*x(\d+)$/;function st(e={}){const n=e.pattern?new RegExp(e.pattern):$0;return{name:"gift-combo",version:"0.1.0",description:Ss.description,priority:21,enabled:!0,hooks:{transformData:(t,r)=>{const o=[];let i=null;for(const l of r.items){const a=l.text.match(n);if(a&&l.meta.userId){const s=a[1],u=parseInt(a[2],10);if(i&&i.uid===l.meta.userId&&i.base===s){i.count+=u,i.item.text=`${s} x${i.count}`,i.item.meta={...i.item.meta,combo:i.count};continue}const d={...l,text:`${s} x${u}`,meta:{...l.meta,combo:u}};i={uid:l.meta.userId,base:s,count:u,item:d},o.push(d);continue}i=null,o.push(l)}return{...r,items:o}}}}}st.meta=Ss;const T0="LangFilterPlugin",M0="语种过滤：弹幕须至少命中 allow 中一种字符体系才保留；blockUnknown 时纯符号刷屏直接丢弃。",I0="0.1.0",O0=["lang","filter","data"],A0=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],F0=[],z0="只读取 context 字段（props / state / data），不调用上下文方法",U0=[{name:"allow",type:'("cjk"|"latin"|"symbol")[]',default:'["cjk","latin"]',description:"允许的字符体系"},{name:"blockUnknown",type:"boolean",default:"true",description:"无命中体系（纯符号）直接丢弃"}],B0='withDanmakuPlugins(DanmakuCore, [createLangFilterPlugin({ allow: ["cjk"] })])',ws={name:T0,description:M0,since:I0,tags:O0,events:A0,methods:F0,methodsNote:z0,config:U0,example:B0};function H0(e){const n=new Set;return/[一-鿿]/.test(e)&&n.add("cjk"),/[a-zA-Z]/.test(e)&&n.add("latin"),/[^一-鿿a-zA-Z0-9\s]/.test(e)&&n.add("symbol"),n}function Gt(e={}){const n=e.allow??["cjk","latin"],t=e.blockUnknown??!0;return{name:"lang-filter",version:"0.1.0",description:ws.description,priority:22,enabled:!0,hooks:{transformData:(r,o)=>{const i=o.items.filter(l=>{const a=H0(l.text);return n.some(u=>a.has(u))?!0:!t});return{...o,items:i}}}}}Gt.meta=ws;const W0="ColorPolicyPlugin",G0="角色配色策略：未显式指定 color 时按角色着色——管理员红、高等级金，普通保持白。放在流水线靠后避免覆盖业务配色。",V0="0.1.0",K0=["color","policy","data"],Q0=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],Z0=[],Y0="只读取 context 字段（props / state / data），不调用上下文方法",X0=[{name:"adminColor",type:"string",default:'"#ff4d4f"',description:"管理员弹幕色"},{name:"vipColor",type:"string",default:'"#ffd54a"',description:"高等级弹幕色"},{name:"vipLevel",type:"number",default:"18",description:"触发 vip 着色的等级阈值"}],q0="withDanmakuPlugins(DanmakuCore, [createColorPolicyPlugin()])",_s={name:W0,description:G0,since:V0,tags:K0,events:Q0,methods:Z0,methodsNote:Y0,config:X0,example:q0};function Vt(e={}){const n=e.adminColor??"#ff4d4f",t=e.vipColor??"#ffd54a",r=e.vipLevel??18;return{name:"color-policy",version:"0.1.0",description:_s.description,priority:27,enabled:!0,hooks:{transformData:(o,i)=>{const l=i.items.map(a=>{if(a.meta.color)return a;let s;return a.meta.isAdmin?s=n:(a.meta.level??0)>=r&&(s=t),s?{...a,meta:{...a.meta,color:s}}:a});return{...i,items:l}}}}}Vt.meta=_s;const J0="StylePresetPlugin",ey="统一样式预设：为未指定样式的弹幕补齐 fontFamily/fontWeight/fontSize 默认，整场风格统一。",ny="0.1.0",ty=["style","preset","data"],ry=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],oy=[],iy="只读取 context 字段（props / state / data），不调用上下文方法",ly=[{name:"fontFamily",type:"string",default:"system-ui, sans-serif",description:"字体族"},{name:"fontWeight",type:"number",default:"400",description:"字重"},{name:"fontSize",type:"number",default:"22",description:"基础字号（仅当单条未指定时生效）"}],ay="withDanmakuPlugins(DanmakuCore, [createStylePresetPlugin({ fontWeight: 600 })])",Cs={name:J0,description:ey,since:ny,tags:ty,events:ry,methods:oy,methodsNote:iy,config:ly,example:ay};function Xr(e={}){const n=e.fontFamily??'system-ui, -apple-system, "PingFang SC", sans-serif',t=e.fontWeight??400,r=e.fontSize??22;return{name:"style-preset",version:"0.1.0",description:Cs.description,priority:24,enabled:!0,hooks:{transformData:(o,i)=>{const l=i.items.map(a=>{const s={...a.meta};return s.fontFamily||(s.fontFamily=n),s.fontWeight||(s.fontWeight=t),s.fontSize||(s.fontSize=r),{...a,meta:s}});return{...i,items:l}}}}}Xr.meta=Cs;const sy="DedupPlugin",uy="弹幕去重：同一用户+相同文案在 window 秒内重复出现只保留首条，缓解刷屏。",cy="0.1.0",dy=["dedup","cleanup","data"],fy=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],my=[],py="只读取 context 字段（props / state / data），不调用上下文方法",gy=[{name:"window",type:"number",default:"5",description:"去重时间窗（秒）"}],hy="withDanmakuPlugins(DanmakuCore, [createDedupPlugin({ window: 5 })])",Es={name:sy,description:uy,since:cy,tags:dy,events:fy,methods:my,methodsNote:py,config:gy,example:hy};function Kt(e={}){const n=e.window??5;return{name:"dedup",version:"0.1.0",description:Es.description,priority:14,enabled:!0,hooks:{transformData:(t,r)=>{const o=new Map,i=[];for(const l of r.items){const a=`${l.meta.userId??""} ${l.text}`,s=o.get(a);s!=null&&l.time-s<=n||(o.set(a,l.time),i.push(l))}return{...r,items:i}}}}}Kt.meta=Es;const vy="CmdParsePlugin",yy="互动指令：/clear、#lottery 等弹幕在 transformData 阶段被识别、从渲染流移除，并经 bus 事件触发业务动作。",Py="0.1.0",xy=["command","interaction","data"],ky=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"},{name:"danmaku:command",when:"命中指令语法（如 /clear）时",description:"广播 { type, payload, item } 给业务层执行动作"}],Sy=[],wy="只读取 context 字段（props / state / data），不调用上下文方法",_y=[{name:"prefixes",type:"string[]",default:'["/", "#"]',description:"指令前缀"},{name:"commands",type:"Record<string, string>",default:"{ clear, lottery }",description:"指令名 -> bus 事件 type"}],Cy="withDanmakuPlugins(DanmakuCore, [createCmdParsePlugin()])",bs={name:vy,description:yy,since:Py,tags:xy,events:ky,methods:Sy,methodsNote:wy,config:_y,example:Cy};function ut(e={}){const n=e.prefixes??["/","#"],t=e.commands??{clear:"clear",lottery:"lottery"},r=new Set;return{name:"cmd-parse",version:"0.1.0",description:bs.description,priority:13,enabled:!0,hooks:{transformData:(o,i)=>{var a;const l=[];for(const s of i.items){const u=s.text.trim(),d=n.find(P=>u.startsWith(P));if(!d){l.push(s);continue}const f=u.slice(d.length),p=f.split(/\s+/)[0].toLowerCase(),v=t[p];if(!v){l.push(s);continue}const y=f.slice(p.length).trim();r.has(s.id)||(r.add(s.id),o.bus.emit("danmaku:command",{type:v,payload:y,item:s}),(a=e.onCommand)==null||a.call(e,v,y,s))}return{...i,items:l}}}}}ut.meta=bs;const Ey="SpeedControlPlugin",by="速度控制：飞行时长按 factor 缩放并夹在 [min,max]；未指定 duration 用 defaultDuration 作基准。",Dy="0.1.0",Ry=["speed","duration","data"],Ly=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],jy=[],Ny="只读取 context 字段（props / state / data），不调用上下文方法",$y=[{name:"factor",type:"number",default:"1",description:"飞行时长系数（>1 更慢）"},{name:"minDuration",type:"number",default:"4",description:"时长下限（秒）"},{name:"maxDuration",type:"number",default:"16",description:"时长上限（秒）"},{name:"defaultDuration",type:"number",default:"8",description:"缺省飞行时长（秒）"}],Ty="withDanmakuPlugins(DanmakuCore, [createSpeedControlPlugin({ factor: 1.4 })])",Ds={name:Ey,description:by,since:Dy,tags:Ry,events:Ly,methods:jy,methodsNote:Ny,config:$y,example:Ty};function qr(e={}){const n=e.factor??1,t=e.minDuration??4,r=e.maxDuration??16,o=e.defaultDuration??8,i=l=>Math.min(r,Math.max(t,l));return{name:"speed-control",version:"0.1.0",description:Ds.description,priority:26,enabled:!0,hooks:{transformData:(l,a)=>{const s=a.items.map(u=>{const d=u.duration??o;return{...u,duration:i(d*n)}});return{...a,items:s}}}}}qr.meta=Ds;const My="SafeZonePlugin",Iy="防遮挡：把避让区来源写入运行时 shared。内核双管齐下 —— 轨道调度优先避开避让区，绘制期再对避让区做 evenodd 裁剪，人物矩形内不会出现任何弹幕像素（视觉上弹幕从人身后穿过）。默认静态安全区（顶/底条带），可选接 MediaPipe（消费方注入 provider）。发布包不捆绑 ML。",Oy="0.1.0",Ay=["occlusion","track","strategy"],Fy=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"}],zy=[],Uy="只读取 context 字段（props / state / data），不调用上下文方法",By=[{name:"provider",type:"() => Rect[]",default:"undefined",description:"消费方注入的实时避让区（如 MediaPipe Selfie Seg 掩膜→矩形 / Pose 点→凸包）"},{name:"reservedBands",type:"{ top?, bottom? }",default:"{ top: 0.18, bottom: 0.12 }",description:"静态安全区比例，中间留空防遮挡"}],Hy="withDanmakuPlugins(DanmakuCore, [createSafeZonePlugin({ reservedBands: { top: 0.2, bottom: 0.15 } })])",Rs={name:My,description:Iy,since:Oy,tags:Ay,events:Fy,methods:zy,methodsNote:Uy,config:By,example:Hy};function gn(e={}){const n=e.reservedBands??{top:.18,bottom:.12};return{name:"safe-zone",version:"0.1.0",description:Rs.description,priority:34,enabled:!0,hooks:{onMount:t=>{const r=t.shared;if(e.provider){r.set("avoidZoneProvider",e.provider);return}r.set("avoidZoneProvider",()=>{const{width:o,height:i}=t.getSize(),l=[];return n.top&&l.push({x:0,y:0,w:o,h:i*n.top}),n.bottom&&l.push({x:0,y:i*(1-n.bottom),w:o,h:i*n.bottom}),l})}}}}gn.meta=Rs;const Wy="SettingsPanelPlugin",Gy="弹幕设置面板（UI 面）：不透明度/速度/轨道高度滑块，变更经 bus 广播 danmaku:settings，由消费方更新 props。",Vy="0.1.0",Ky=["ui","settings","overlay"],Qy=[{name:"renderOverlay",when:"每次渲染，覆盖在播放器画面之上",description:"渲染在飞弹幕、特效层、命中区域"},{name:"danmaku:settings",when:"设置面板任一配置变更时",description:"广播完整配置快照，供持久化"}],Zy=[],Yy="只读取 context 字段（props / state / data），不调用上下文方法",Xy=[{name:"opacity",type:"number",default:"1",description:"初始不透明度"},{name:"speed",type:"number",default:"1",description:"初始速度系数"},{name:"trackHeight",type:"number",default:"28",description:"初始轨道高度（px）"}],qy="withDanmakuPlugins(DanmakuCore, [createSettingsPanelPlugin()])",Ls={name:Wy,description:Gy,since:Vy,tags:Ky,events:Qy,methods:Zy,methodsNote:Yy,config:Xy,example:qy},ic={position:"absolute",top:8,right:8,pointerEvents:"auto",background:"rgba(20,20,24,0.82)",color:"#fff",borderRadius:10,padding:"10px 12px",font:"12px/1.5 system-ui, sans-serif",width:200,boxShadow:"0 6px 20px rgba(0,0,0,0.35)"},ll={marginBottom:8,display:"flex",flexDirection:"column",gap:2},al={opacity:.8,display:"flex",justifyContent:"space-between"};function Jy({context:e,opacity:n=1,speed:t=1,trackHeight:r=28,onChange:o}){const[i,l]=x.useState(!1),[a,s]=x.useState(n),[u,d]=x.useState(t),[f,p]=x.useState(r),v=y=>{const P={opacity:a,speed:u,trackHeight:f,...y};s(P.opacity),d(P.speed),p(P.trackHeight),e.bus.emit("danmaku:settings",P),o==null||o(P)};return i?c.jsxs("div",{style:ic,children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[c.jsx("strong",{children:"弹幕设置"}),c.jsx("button",{type:"button",onClick:()=>l(!1),style:eP,children:"✕"})]}),c.jsxs("label",{style:ll,children:[c.jsxs("span",{style:al,children:["不透明度 ",c.jsx("b",{children:a.toFixed(2)})]}),c.jsx("input",{type:"range",min:.2,max:1,step:.05,value:a,onChange:y=>v({opacity:Number(y.target.value)})})]}),c.jsxs("label",{style:ll,children:[c.jsxs("span",{style:al,children:["速度 ",c.jsxs("b",{children:[u.toFixed(2),"×"]})]}),c.jsx("input",{type:"range",min:.5,max:2,step:.1,value:u,onChange:y=>v({speed:Number(y.target.value)})})]}),c.jsxs("label",{style:ll,children:[c.jsxs("span",{style:al,children:["轨道高度 ",c.jsxs("b",{children:[f,"px"]})]}),c.jsx("input",{type:"range",min:20,max:48,step:2,value:f,onChange:y=>v({trackHeight:Number(y.target.value)})})]})]}):c.jsx("button",{type:"button",onClick:()=>l(!0),style:{...ic,width:"auto",pointerEvents:"auto",cursor:"pointer"},children:"设置 ⚙"})}const eP={pointerEvents:"auto",background:"transparent",border:"none",color:"#fff",cursor:"pointer",fontSize:12};function Qt(e={}){return{name:"settings-panel",version:"0.1.0",description:Ls.description,priority:30,enabled:!0,hooks:{renderOverlay:n=>c.jsx(Jy,{context:n,opacity:e.opacity,speed:e.speed,trackHeight:e.trackHeight,onChange:e.onChange})}}}Qt.meta=Ls;const nP="FilterTogglePlugin",tP="过滤开关条（UI 面）：一排过滤项 chip，点击经 bus 广播 danmaku:filter {key,enabled}，由消费方重建对应数据面插件。",rP="0.1.0",oP=["ui","filter","toolbar"],iP=[{name:"renderHeader",when:"每次渲染，播放器顶部槽位",description:"弹幕开关、密度设置、工具栏"},{name:"danmaku:filter",when:"过滤开关切换时",description:"广播 { key, enabled }，同步过滤策略"}],lP=[],aP="只读取 context 字段（props / state / data），不调用上下文方法",sP=[{name:"defaults",type:"string[]",default:"全部开启",description:"默认开启的过滤项 key"}],uP="withDanmakuPlugins(DanmakuCore, [createFilterTogglePlugin()])",js={name:nP,description:tP,since:rP,tags:oP,events:iP,methods:lP,methodsNote:aP,config:sP,example:uP},sl=[{key:"sensitive",label:"敏感词"},{key:"mute",label:"静音用户"},{key:"keyword",label:"关键词屏"},{key:"lang",label:"语种"},{key:"dedup",label:"去重"}],cP={display:"flex",flexWrap:"wrap",gap:6,pointerEvents:"auto"},dP=e=>({pointerEvents:"auto",cursor:"pointer",border:"1px solid rgba(255,255,255,0.25)",borderRadius:999,padding:"3px 10px",font:"12px system-ui, sans-serif",color:"#fff",background:e?"rgba(255,122,41,0.9)":"rgba(255,255,255,0.12)",userSelect:"none"});function fP({context:e,defaults:n,onToggle:t}){const[r,o]=x.useState(()=>{const l=new Set(n??sl.map(a=>a.key));return Object.fromEntries(sl.map(a=>[a.key,l.has(a.key)]))}),i=l=>{o(a=>{const s={...a,[l]:!a[l]};return e.bus.emit("danmaku:filter",{key:l,enabled:s[l]}),t==null||t(l,s[l]),s})};return c.jsx("div",{style:cP,children:sl.map(l=>c.jsx("button",{type:"button","aria-pressed":!!r[l.key],style:dP(r[l.key]),onClick:()=>i(l.key),children:l.label},l.key))})}function Zt(e={}){return{name:"filter-toggle",version:"0.1.0",description:js.description,priority:31,enabled:!0,hooks:{renderHeader:n=>c.jsx(fP,{context:n,defaults:e.defaults,onToggle:e.onToggle})}}}Zt.meta=js;const mP="CommandInputPlugin",pP="弹幕/指令输入框（UI 面）：提交经 bus 广播 danmaku:send {text}，由消费方追加弹幕或交给 CmdParse 解析指令。",gP="0.1.0",hP=["ui","input","command"],vP=[{name:"renderFooter",when:"每次渲染，播放器底部槽位",description:"弹幕输入框、发送按钮、快捷指令入口"},{name:"danmaku:send",when:"输入框提交发送时",description:"广播待发送文本 { text }，由外部决定是否入列"}],yP=[],PP="只读取 context 字段（props / state / data），不调用上下文方法",xP=[{name:"placeholder",type:"string",default:"发条弹幕 / 指令（/clear）",description:"输入框占位符"}],kP="withDanmakuPlugins(DanmakuCore, [createCommandInputPlugin()])",Ns={name:mP,description:pP,since:gP,tags:hP,events:vP,methods:yP,methodsNote:PP,config:xP,example:kP},SP={display:"flex",gap:6,width:"100%",pointerEvents:"auto"},wP={flex:1,pointerEvents:"auto",background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.25)",borderRadius:8,color:"#fff",padding:"6px 10px",font:"13px system-ui, sans-serif",outline:"none"},_P={pointerEvents:"auto",cursor:"pointer",border:"none",borderRadius:8,padding:"6px 14px",font:"13px system-ui, sans-serif",color:"#fff",background:"rgba(255,122,41,0.95)"},CP="发条弹幕 / 指令（/clear）";function EP({context:e,onSend:n,placeholder:t=CP}){const[r,o]=x.useState(""),i=()=>{const l=r.trim();l&&(e.bus.emit("danmaku:send",{text:l}),n==null||n(l),o(""))};return c.jsxs("div",{style:SP,children:[c.jsx("input",{style:wP,value:r,"aria-label":"发送弹幕或指令",placeholder:t,onChange:l=>o(l.target.value),onKeyDown:l=>{l.key==="Enter"&&i()}}),c.jsx("button",{type:"button",style:_P,onClick:i,children:"发送"})]})}function Yt(e={}){return{name:"command-input",version:"0.1.0",description:Ns.description,priority:32,enabled:!0,hooks:{renderFooter:n=>c.jsx(EP,{context:n,onSend:e.onSend,placeholder:e.placeholder})}}}Yt.meta=Ns;const bP="StatsBarPlugin",DP="弹幕统计条（UI 面）：读取领域 data 展示弹幕总数/置顶数/各模式计数，纯展示不修改弹幕流。",RP="0.1.0",LP=["ui","stats","toolbar"],jP=[{name:"renderHeader",when:"每次渲染，播放器顶部槽位",description:"弹幕开关、密度设置、工具栏"}],NP=[],$P="只读取 context 字段（props / state / data），不调用上下文方法",TP=[{name:"showModes",type:"boolean",default:"true",description:"是否显示各模式计数"}],MP="withDanmakuPlugins(DanmakuCore, [createStatsBarPlugin()])",$s={name:bP,description:DP,since:RP,tags:LP,events:jP,methods:NP,methodsNote:$P,config:TP,example:MP},IP={display:"flex",flexWrap:"wrap",gap:10,pointerEvents:"auto",background:"rgba(20,20,24,0.55)",borderRadius:8,padding:"4px 10px",font:"12px/1.4 system-ui, sans-serif",color:"#fff"},ul={whiteSpace:"nowrap"};function OP({context:e,showModes:n}){var l;const t=e.data.items,r=t.length,o={};let i=0;for(const a of t)o[a.mode]=(o[a.mode]??0)+1,(l=a.renderHint)!=null&&l.pinned&&i++;return c.jsxs("div",{style:IP,children:[c.jsxs("span",{style:ul,children:["弹幕总数 ",c.jsx("b",{children:r})]}),c.jsxs("span",{style:ul,children:["置顶 ",c.jsx("b",{children:i})]}),n&&Object.entries(o).map(([a,s])=>c.jsxs("span",{style:ul,children:[a," ",c.jsx("b",{children:s})]},a))]})}function Xt(e={}){const n=e.showModes??!0;return{name:"stats-bar",version:"0.1.0",description:$s.description,priority:33,enabled:!0,hooks:{renderHeader:t=>c.jsx(OP,{context:t,showModes:n})}}}Xt.meta=$s;const AP={slug:"basic",title:"综合演示",group:"basic",intro:"canvas 内核 + 23 个业务语义插件：敏感词/粉丝牌/高赞置顶/关键词高亮/屏蔽/静音/表情/@提及/礼物连击/语种/配色/样式/去重/限速/指令/防遮挡，外加 4 个 UI 控制插件。"},FP=[{id:"1",text:"前排围观！",mode:"scroll",time:.2,meta:{}},{id:"2",text:"这波操作太秀了 :fire:",mode:"scroll",time:.9,meta:{}},{id:"3",text:"广告 加微信领福利",mode:"scroll",time:1.6,meta:{}},{id:"4",text:"老粉来啦",mode:"scroll",time:2.3,meta:{userId:"u1"}},{id:"5",text:"代刷 等级秒到",mode:"scroll",time:3,meta:{}},{id:"6",text:"主播 @主播 今天状态在线",mode:"scroll",time:3.7,meta:{}},{id:"7",text:"欢迎 福利 抽奖进行中",mode:"scroll",time:4.2,meta:{}},{id:"8",text:"管理员的置顶公告",mode:"top",time:4.6,meta:{isAdmin:!0,level:30}},{id:"9",text:"高赞大佬发言",mode:"scroll",time:5,meta:{level:25}},{id:"10",text:"火箭 x1",mode:"scroll",time:5.6,meta:{userId:"u2"}},{id:"11",text:"火箭 x1",mode:"scroll",time:5.9,meta:{userId:"u2"}},{id:"12",text:"弹幕护体",mode:"scroll",time:6.5,meta:{}},{id:"13",text:"spam-bot 刷屏刷屏",mode:"scroll",time:7,meta:{userId:"spam-bot"}},{id:"14",text:"这画质绝了",mode:"scroll",time:7.6,meta:{}},{id:"15",text:"底部弹幕测试",mode:"bottom",time:8.1,meta:{}},{id:"16",text:"反向弹幕",mode:"reverse",time:8.6,meta:{}},{id:"17",text:"全程高能",mode:"scroll",time:9.4,meta:{}}],zP=12;function UP(){const[e,n]=x.useState(0),[t,r]=x.useState(FP),[o,i]=x.useState(new Set),[l,a]=x.useState({opacity:1,speed:1,trackHeight:28}),s=x.useRef(performance.now()),u=x.useRef(0);x.useEffect(()=>{let P=0;const k=g=>{const h=(g-s.current)/1e3%zP;u.current=h,n(h),P=requestAnimationFrame(k)};return P=requestAnimationFrame(k),()=>cancelAnimationFrame(P)},[]);const d=x.useCallback(P=>a(P),[]),f=x.useCallback((P,k)=>{i(g=>{const m=new Set(g);return k?m.delete(P):m.add(P),m})},[]),p=x.useCallback(P=>{r(k=>[...k,{id:`me-${Date.now()}`,text:P,mode:"scroll",time:u.current,meta:{userId:"me",level:5}}])},[]),v=x.useCallback(()=>r([]),[]),y=x.useMemo(()=>{const P=[];return o.has("sensitive")||P.push(rt({words:["广告","代刷"],mode:"mask"})),P.push(ot({badges:{u1:{name:"老粉",level:6,color:"#ff7a29"}}})),P.push(it({minLevel:20})),P.push(Bt({keywords:["福利","抽奖","高能"]})),o.has("keyword")||P.push(Ht({words:["竞品","违规"]})),o.has("mute")||P.push(Wt({users:["spam-bot"]})),P.push(lt()),P.push(at()),P.push(st()),o.has("lang")||P.push(Gt({allow:["cjk","latin"]})),P.push(Vt()),P.push(Xr()),o.has("dedup")||P.push(Kt({window:5})),P.push(ut({onCommand:k=>{k==="clear"&&v()}})),P.push(qr({factor:l.speed})),P.push(gn({reservedBands:{top:.2,bottom:.14}})),P.push(Qt({onChange:d})),P.push(Zt({onToggle:f})),P.push(Yt({onSend:p})),P.push(Xt()),ms(Yr,P)},[o,l.speed]);return c.jsx("div",{style:{width:"100%",maxWidth:760,height:420,position:"relative",borderRadius:8,overflow:"hidden",background:"linear-gradient(135deg, #1b2a4a 0%, #0d1424 60%, #2a1730 100%)",boxShadow:"inset 0 0 80px rgba(0,0,0,0.45)"},children:c.jsx(y,{items:t,currentTime:e,playing:!0,opacity:l.opacity,trackHeight:l.trackHeight,containerStyle:{width:"100%",height:"100%"}})})}const BP=Object.freeze(Object.defineProperty({__proto__:null,default:UP,meta:AP},Symbol.toStringTag,{value:"Module"})),de=[{id:"1",text:"前排围观！",mode:"scroll",time:.2,meta:{}},{id:"2",text:"这波操作太秀了 :fire:",mode:"scroll",time:.9,meta:{}},{id:"3",text:"广告 加微信领福利",mode:"scroll",time:1.6,meta:{}},{id:"4",text:"老粉来啦",mode:"scroll",time:2.3,meta:{userId:"u1"}},{id:"5",text:"代刷 等级秒到",mode:"scroll",time:3,meta:{}},{id:"6",text:"主播 @主播 今天状态在线",mode:"scroll",time:3.7,meta:{}},{id:"7",text:"欢迎 福利 抽奖进行中",mode:"scroll",time:4.2,meta:{}},{id:"8",text:"管理员的置顶公告",mode:"top",time:4.6,meta:{isAdmin:!0,level:30}},{id:"9",text:"高赞大佬发言",mode:"scroll",time:5,meta:{level:25}},{id:"10",text:"火箭 x1",mode:"scroll",time:5.6,meta:{userId:"u2"}},{id:"11",text:"火箭 x1",mode:"scroll",time:5.9,meta:{userId:"u2"}},{id:"12",text:"弹幕护体",mode:"scroll",time:6.5,meta:{}},{id:"13",text:"spam-bot 刷屏刷屏",mode:"scroll",time:7,meta:{userId:"spam-bot"}},{id:"14",text:"这画质绝了",mode:"scroll",time:7.6,meta:{}},{id:"15",text:"底部弹幕测试",mode:"bottom",time:8.1,meta:{}},{id:"16",text:"反向弹幕",mode:"reverse",time:8.6,meta:{}},{id:"17",text:"全程高能",mode:"scroll",time:9.4,meta:{}}],HP=[{id:"c1",text:"火箭",mode:"scroll",time:.3,meta:{userId:"u2"}},{id:"c2",text:"火箭",mode:"scroll",time:.7,meta:{userId:"u2"}},{id:"c3",text:"火箭",mode:"scroll",time:1.1,meta:{userId:"u2"}},{id:"c4",text:"火箭",mode:"scroll",time:1.5,meta:{userId:"u2"}},{id:"c5",text:"超管来了",mode:"top",time:2.2,meta:{isAdmin:!0,level:40}},{id:"c6",text:"普通弹幕一条",mode:"scroll",time:3,meta:{}}],WP=[{id:"m1",text:"大家晚上好",mode:"scroll",time:.3,meta:{}},{id:"m2",text:"/clear",mode:"scroll",time:1.2,meta:{}},{id:"m3",text:"清屏后再来一条",mode:"scroll",time:2,meta:{}},{id:"m4",text:"#lottery 抽奖开奖",mode:"scroll",time:2.8,meta:{}},{id:"m5",text:"晚安主播",mode:"scroll",time:3.6,meta:{}}],GP=[{id:"l1",text:"主播加油，这把稳了",mode:"scroll",time:.3,meta:{}},{id:"l2",text:"hello from overseas",mode:"scroll",time:.9,meta:{}},{id:"l3",text:"Привет всем",mode:"scroll",time:1.5,meta:{}},{id:"l4",text:"가나다라마바",mode:"scroll",time:2.1,meta:{}},{id:"l5",text:"これはテストです",mode:"scroll",time:2.7,meta:{}},{id:"l6",text:"继续支持！",mode:"scroll",time:3.3,meta:{}}],Jr=[{id:"d1",text:"正常弹幕一条",mode:"scroll",time:.3,meta:{}},{id:"d2",text:"广告 加微信领福利",mode:"scroll",time:.8,meta:{}},{id:"d3",text:"竞品 别看这家",mode:"scroll",time:1.3,meta:{}},{id:"d4",text:"代刷 等级秒到",mode:"scroll",time:1.8,meta:{}},{id:"d5",text:"spam 刷屏刷屏刷屏",mode:"scroll",time:2.3,meta:{userId:"bot"}},{id:"d6",text:"spam 又来刷了",mode:"scroll",time:2.6,meta:{userId:"bot"}},{id:"d7",text:"正常观众发言",mode:"scroll",time:3.2,meta:{}},{id:"d8",text:"违规 政治敏感",mode:"scroll",time:3.8,meta:{}}],Wf=[{id:"i1",text:"老粉报到！",mode:"scroll",time:.3,meta:{userId:"u1"}},{id:"i2",text:"@主播 求连麦",mode:"scroll",time:.9,meta:{}},{id:"i3",text:"火箭",mode:"scroll",time:1.4,meta:{userId:"u2"}},{id:"i4",text:"火箭",mode:"scroll",time:1.7,meta:{userId:"u2"}},{id:"i5",text:"#lottery 我要抽奖",mode:"scroll",time:2.3,meta:{}},{id:"i6",text:"新粉来咯",mode:"scroll",time:3,meta:{userId:"u9"}}];function eo({plugins:e,items:n,loop:t=12,height:r=320,background:o,avoidZoneProvider:i,opacity:l=1,trackHeight:a=30,showGrid:s,topInset:u=0,bottomInset:d=0}){const[f,p]=x.useState(0),v=x.useRef(performance.now());x.useEffect(()=>{let P=0;const k=g=>{const m=(g-v.current)/1e3;p(m%t),P=requestAnimationFrame(k)};return P=requestAnimationFrame(k),()=>cancelAnimationFrame(P)},[t]);const y=x.useMemo(()=>ms(Yr,e),[e]);return c.jsxs("div",{"data-danmaku-root":!0,style:{position:"relative",width:"100%",height:r,borderRadius:8,overflow:"hidden",background:o??"linear-gradient(135deg, #1b2a4a 0%, #0d1424 60%, #2a1730 100%)",boxShadow:"inset 0 0 80px rgba(0,0,0,0.45)"},children:[s?c.jsxs("div",{"aria-hidden":!0,style:{position:"absolute",inset:0,pointerEvents:"none"},children:[c.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:`repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0 1px, transparent 1px ${a}px)`}}),c.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:Math.max(1,Math.floor(r/a*.25))*a,background:"rgba(255,122,41,0.10)",borderBottom:"1px solid rgba(255,122,41,0.35)"}}),c.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:r-Math.floor(r/a*.75)*a,background:"rgba(127,208,192,0.10)",borderTop:"1px solid rgba(127,208,192,0.35)"}})]}):null,c.jsx(y,{items:n,currentTime:f,playing:!0,opacity:l,trackHeight:a,avoidZoneProvider:i,topInset:u,bottomInset:d,containerStyle:{width:"100%",height:"100%"}})]})}function J({plugins:e,items:n,loop:t=12,height:r=300,background:o,opacity:i=1,trackHeight:l=30,showGrid:a}){return c.jsx(eo,{plugins:e,items:n,loop:t,height:r,background:o,opacity:i,trackHeight:l,showGrid:a})}const VP=[rt({words:["广告","代刷","违规"],mode:"mask"})],KP={slug:"sensitive-filter",title:"敏感词过滤",group:"content",intro:"命中词按 mode 打码或删除；打码条保留并标记 masked，弹幕流不闪烁。"};function QP(){return c.jsx(J,{plugins:VP,items:de,height:300})}const ZP=Object.freeze(Object.defineProperty({__proto__:null,default:QP,meta:KP},Symbol.toStringTag,{value:"Module"})),YP=[Ht({words:["竞品","违规"]})],XP={slug:"keyword-block",title:"关键词硬屏蔽",group:"content",intro:"黑名单词直接删除整条（与打码不同：连位置都不留）。"};function qP(){return c.jsx(J,{plugins:YP,items:Jr,height:300})}const JP=Object.freeze(Object.defineProperty({__proto__:null,default:qP,meta:XP},Symbol.toStringTag,{value:"Module"})),e1=[Gt({allow:["cjk","latin"]})],n1={slug:"lang-filter",title:"语种过滤",group:"content",intro:"按 Unicode 脚本放行 / 过滤，比如只留 CJK + 拉丁，挡掉西里尔等。"};function t1(){return c.jsx(J,{plugins:e1,items:GP,height:300})}const r1=Object.freeze(Object.defineProperty({__proto__:null,default:t1,meta:n1},Symbol.toStringTag,{value:"Module"})),o1=[lt()],i1={slug:"emoji-render",title:"表情短码",group:"content",intro:"把 :rocket: 这类短码转成 unicode 表情，canvas 原生绘制。"};function l1(){return c.jsx(J,{plugins:o1,items:de,height:300})}const a1=Object.freeze(Object.defineProperty({__proto__:null,default:l1,meta:i1},Symbol.toStringTag,{value:"Module"})),s1=[at()],u1={slug:"at-mention",title:"@提及高亮",group:"content",intro:"识别 @用户名，把提及段染成强调色，醒目又不影响其余弹幕。"};function c1(){return c.jsx(J,{plugins:s1,items:de,height:300})}const d1=Object.freeze(Object.defineProperty({__proto__:null,default:c1,meta:u1},Symbol.toStringTag,{value:"Module"})),f1=[Wt({users:["bot"]})],m1={slug:"user-mute",title:"用户禁言",group:"content",intro:"把指定用户的全部弹幕从流里剔除（如刷屏机器人）。"};function p1(){return c.jsx(J,{plugins:f1,items:Jr,height:300})}const g1=Object.freeze(Object.defineProperty({__proto__:null,default:p1,meta:m1},Symbol.toStringTag,{value:"Module"})),h1=[Kt({window:5})],v1={slug:"dedup",title:"去重",group:"content",intro:"短时间内重复文本只保留一条，挡住复制粘贴刷屏。"};function y1(){return c.jsx(J,{plugins:h1,items:Jr,height:300})}const P1=Object.freeze(Object.defineProperty({__proto__:null,default:y1,meta:v1},Symbol.toStringTag,{value:"Module"})),x1="RateLimitPlugin",k1="单用户限流：window 秒内超过 max 条的同用户弹幕被丢弃，防刷屏压垮轨道。",S1="0.1.0",w1=["ratelimit","flood","data"],_1=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],C1=[],E1="只读取 context 字段（props / state / data），不调用上下文方法",b1=[{name:"max",type:"number",default:"3",description:"窗口内单用户最多保留条数"},{name:"window",type:"number",default:"10",description:"统计窗口（秒）"}],D1="withDanmakuPlugins(DanmakuCore, [createRateLimitPlugin({ max: 3, window: 10 })])",Ts={name:x1,description:k1,since:S1,tags:w1,events:_1,methods:C1,methodsNote:E1,config:b1,example:D1};function no(e={}){const n=e.max??3,t=e.window??10;return{name:"rate-limit",version:"0.1.0",description:Ts.description,priority:15,enabled:!0,hooks:{transformData:(r,o)=>{const i=new Map,l=[];for(const a of o.items){const s=a.meta.userId??"",d=(i.get(s)??[]).filter(f=>a.time-f<=t);d.length>=n||(d.push(a.time),i.set(s,d),l.push(a))}return{...o,items:l}}}}}no.meta=Ts;const R1=[no({max:3,window:6})],L1={slug:"rate-limit",title:"单用户限速",group:"content",intro:"限制单用户单位时间内的弹幕条数，防单点刷屏。"};function j1(){return c.jsx(J,{plugins:R1,items:Jr,height:300})}const N1=Object.freeze(Object.defineProperty({__proto__:null,default:j1,meta:L1},Symbol.toStringTag,{value:"Module"})),$1="AuditLogPlugin",T1="弹幕审计：不增删弹幕，对每条触发 onLog 回调（审核/风控/落库），可选经 bus 广播 danmaku:audit。",M1="0.1.0",I1=["audit","log","data"],O1=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"},{name:"danmaku:audit",when:"每条弹幕进入审核队列时",description:"携带 { item } 供外部审核系统接管"}],A1=[],F1="只读取 context 字段（props / state / data），不调用上下文方法",z1=[{name:"onLog",type:"(item, context) => void",default:"undefined",description:"每条弹幕的审计回调"},{name:"emit",type:"boolean",default:"false",description:"是否经 bus 广播 danmaku:audit"}],U1="withDanmakuPlugins(DanmakuCore, [createAuditLogPlugin({ onLog: (it) => console.log(it.id) })])",Ms={name:$1,description:T1,since:M1,tags:I1,events:O1,methods:A1,methodsNote:F1,config:z1,example:U1};function to(e={}){const n=e.onLog,t=e.emit??!1,r=new Set;return{name:"audit-log",version:"0.1.0",description:Ms.description,priority:23,enabled:!0,hooks:{transformData:(o,i)=>{for(const l of i.items)r.has(l.id)||(r.add(l.id),n==null||n(l,o),t&&o.bus.emit("danmaku:audit",{item:l}));return i}}}}to.meta=Ms;const B1=[to()],H1={slug:"audit-log",title:"审计旁路",group:"content",intro:"旁路记录被拦截/命中的弹幕，不改流，只做统计与风控留痕。"};function W1(){return c.jsx(J,{plugins:B1,items:de,height:300})}const G1=Object.freeze(Object.defineProperty({__proto__:null,default:W1,meta:H1},Symbol.toStringTag,{value:"Module"})),V1=[it({minLevel:20})],K1={slug:"pinned-top",title:"高赞置顶",group:"emphasis",intro:"高等级 / 高赞发言固定停在顶部轨道，不参与水平滚动。"};function Q1(){return c.jsx(J,{plugins:V1,items:de,height:300})}const Z1=Object.freeze(Object.defineProperty({__proto__:null,default:Q1,meta:K1},Symbol.toStringTag,{value:"Module"})),Y1=[Bt({keywords:["福利","抽奖","高能"]})],X1={slug:"keyword-highlight",title:"关键词高亮",group:"emphasis",intro:"福利 / 抽奖 / 高能 等关键词染成强调色并加高亮底。"};function q1(){return c.jsx(J,{plugins:Y1,items:de,height:300})}const J1=Object.freeze(Object.defineProperty({__proto__:null,default:q1,meta:X1},Symbol.toStringTag,{value:"Module"})),ex=[st()],nx={slug:"gift-combo",title:"礼物连击",group:"emphasis",intro:"同一用户连续送同类礼物合并成 xN 连击角标。"};function tx(){return c.jsx(J,{plugins:ex,items:HP,height:300})}const rx=Object.freeze(Object.defineProperty({__proto__:null,default:tx,meta:nx},Symbol.toStringTag,{value:"Module"})),ox=[Vt()],ix={slug:"color-policy",title:"角色配色",group:"emphasis",intro:"按用户角色（普通 / 粉丝 / 超管）给弹幕上色，一眼区分。"};function lx(){return c.jsx(J,{plugins:ox,items:de,height:300})}const ax=Object.freeze(Object.defineProperty({__proto__:null,default:lx,meta:ix},Symbol.toStringTag,{value:"Module"})),sx=[Xr()],ux={slug:"style-preset",title:"样式预设",group:"emphasis",intro:"一键套用字号 / 字体 / 阴影等视觉预设。"};function cx(){return c.jsx(J,{plugins:sx,items:de,height:300})}const dx=Object.freeze(Object.defineProperty({__proto__:null,default:cx,meta:ux},Symbol.toStringTag,{value:"Module"})),fx=[ut()],mx={slug:"cmd-parse",title:"互动指令",group:"interaction",intro:"识别 /clear、#lottery 等指令前缀，从渲染流移除并广播事件。"};function px(){return c.jsx(J,{plugins:fx,items:WP,height:300})}const gx=Object.freeze(Object.defineProperty({__proto__:null,default:px,meta:mx},Symbol.toStringTag,{value:"Module"})),hx=[ot({badges:{u1:{name:"老粉",level:6,color:"#ff7a29"},u2:{name:"舰长",level:12,color:"#5fd3c8"}}})],vx={slug:"fan-badge",title:"粉丝牌",group:"interaction",intro:"给指定用户挂粉丝牌（牌底主色 + 等级），由内核绘制。"};function yx(){return c.jsx(J,{plugins:hx,items:Wf,height:300})}const Px=Object.freeze(Object.defineProperty({__proto__:null,default:yx,meta:vx},Symbol.toStringTag,{value:"Module"})),xx="TrackStrategyPlugin",kx="轨道分配策略：vipTop 把管理员/高等级滚动弹幕建议钉到顶部轨道；spread 让其余分散起始轨道。仅产出建议，是否采用由调度器裁决。",Sx="0.1.0",wx=["track","strategy","data"],_x=[{name:"transformData",when:"渲染前，对弹幕列表链式改写",description:"过滤、去重、着色、限流；下游看到的是改写后的待渲染列表"}],Cx=[],Ex="只读取 context 字段（props / state / data），不调用上下文方法",bx=[{name:"vipTop",type:"boolean",default:"true",description:"管理员/高等级钉顶部轨道"},{name:"vipLevel",type:"number",default:"18",description:"触发 vipTop 的等级阈值"},{name:"spread",type:"boolean",default:"false",description:"其余滚动弹幕分散起始轨道"}],Dx="withDanmakuPlugins(DanmakuCore, [createTrackStrategyPlugin({ vipTop: true })])",Is={name:xx,description:kx,since:Sx,tags:wx,events:_x,methods:Cx,methodsNote:Ex,config:bx,example:Dx};function Li(e={}){const n=e.vipTop??!0,t=e.vipLevel??18,r=e.spread??!1;return{name:"track-strategy",version:"0.1.0",description:Is.description,priority:25,enabled:!0,hooks:{transformData:(o,i)=>{const l=i.items.map((a,s)=>{var u;return((u=a.renderHint)==null?void 0:u.track)!=null?a:n&&a.mode==="scroll"&&(a.meta.isAdmin||(a.meta.level??0)>=t)?{...a,renderHint:{...a.renderHint,track:0}}:r&&a.mode==="scroll"?{...a,renderHint:{...a.renderHint,track:s%3}}:a});return{...i,items:l}}}}}Li.meta=Is;const Rx=[Li()],Lx={slug:"track-strategy",title:"轨道策略",group:"layout",intro:"重写弹幕的优先轨道分配（如把高优先级弹幕固定到中上区）。"};function jx(){return c.jsx(J,{plugins:Rx,items:de,height:300})}const Nx=Object.freeze(Object.defineProperty({__proto__:null,default:jx,meta:Lx},Symbol.toStringTag,{value:"Module"})),$x=[qr({factor:1})],Tx={slug:"speed-control",title:"速度控制",group:"layout",intro:"整体加快 / 放慢弹幕飞行速度，适配不同视频节奏。"};function Mx(){return c.jsx(J,{plugins:$x,items:de,height:300})}const Ix=Object.freeze(Object.defineProperty({__proto__:null,default:Mx,meta:Tx},Symbol.toStringTag,{value:"Module"})),Ox=[gn({reservedBands:{top:.2,bottom:.14}})],Ax={slug:"safe-zone",title:"防遮挡安全区",group:"control",intro:"默认静态安全区（顶/底条带）；也可注入 MediaPipe 实时避让区（见场景 02）。"};function Fx(){return c.jsx(J,{plugins:Ox,items:de,height:300})}const zx=Object.freeze(Object.defineProperty({__proto__:null,default:Fx,meta:Ax},Symbol.toStringTag,{value:"Module"})),Ux=[Qt()],Bx={slug:"settings-panel",title:"设置面板",group:"control",intro:"浮层控制面板：观众调透明度 / 速度 / 轨道高度（经 bus 广播）。"};function Hx(){return c.jsx(J,{plugins:Ux,items:de,height:300})}const Wx=Object.freeze(Object.defineProperty({__proto__:null,default:Hx,meta:Bx},Symbol.toStringTag,{value:"Module"})),Gx=[Zt()],Vx={slug:"filter-toggle",title:"过滤开关",group:"control",intro:"工具条过滤开关：增删对应数据面插件（经 bus 广播）。"};function Kx(){return c.jsx(J,{plugins:Gx,items:de,height:300})}const Qx=Object.freeze(Object.defineProperty({__proto__:null,default:Kx,meta:Vx},Symbol.toStringTag,{value:"Module"})),Zx=[Yt()],Yx={slug:"command-input",title:"指令输入框",group:"control",intro:"底部输入框：观众发弹幕或发 /clear 等指令（经 bus 广播）。"};function Xx(){return c.jsx(J,{plugins:Zx,items:de,height:300})}const qx=Object.freeze(Object.defineProperty({__proto__:null,default:Xx,meta:Yx},Symbol.toStringTag,{value:"Module"})),Jx=[Xt()],ek={slug:"stats-bar",title:"统计条",group:"control",intro:"工具条统计条：展示实时弹幕数等指标（经 bus 广播）。"};function nk(){return c.jsx(J,{plugins:Jx,items:de,height:300})}const tk=Object.freeze(Object.defineProperty({__proto__:null,default:nk,meta:ek},Symbol.toStringTag,{value:"Module"})),rk=`import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DanmakuCore, withDanmakuPlugins } from "vane-danmaku";
import type { DanmakuItem } from "vane-danmaku";
import { createSensitiveFilterPlugin } from "vane-danmaku/custom-plugins/SensitiveFilterPlugin";
import { createFanBadgePlugin } from "vane-danmaku/custom-plugins/FanBadgePlugin";
import { createPinnedTopPlugin } from "vane-danmaku/custom-plugins/PinnedTopPlugin";
import { createKeywordHighlightPlugin } from "vane-danmaku/custom-plugins/KeywordHighlightPlugin";
import { createKeywordBlockPlugin } from "vane-danmaku/custom-plugins/KeywordBlockPlugin";
import { createUserMutePlugin } from "vane-danmaku/custom-plugins/UserMutePlugin";
import { createEmojiRenderPlugin } from "vane-danmaku/custom-plugins/EmojiRenderPlugin";
import { createAtMentionPlugin } from "vane-danmaku/custom-plugins/AtMentionPlugin";
import { createGiftComboPlugin } from "vane-danmaku/custom-plugins/GiftComboPlugin";
import { createLangFilterPlugin } from "vane-danmaku/custom-plugins/LangFilterPlugin";
import { createColorPolicyPlugin } from "vane-danmaku/custom-plugins/ColorPolicyPlugin";
import { createStylePresetPlugin } from "vane-danmaku/custom-plugins/StylePresetPlugin";
import { createDedupPlugin } from "vane-danmaku/custom-plugins/DedupPlugin";
import { createCmdParsePlugin } from "vane-danmaku/custom-plugins/CmdParsePlugin";
import { createSpeedControlPlugin } from "vane-danmaku/custom-plugins/SpeedControlPlugin";
import { createSafeZonePlugin } from "vane-danmaku/custom-plugins/SafeZonePlugin";
import { createSettingsPanelPlugin } from "vane-danmaku/custom-plugins/SettingsPanelPlugin";
import { createFilterTogglePlugin } from "vane-danmaku/custom-plugins/FilterTogglePlugin";
import { createCommandInputPlugin } from "vane-danmaku/custom-plugins/CommandInputPlugin";
import { createStatsBarPlugin } from "vane-danmaku/custom-plugins/StatsBarPlugin";
import type { DemoMeta } from "./types";

/**
 * 00 · 综合演示（23 插件全家桶 + 可交互控制层）
 *
 * 数据面插件在 transformData 阶段改写弹幕流，UI 面插件经 DOM 槽渲染控制层并经
 * 回调 / bus 广播与消费方联动：设置面板调不透明度/速度/轨道高度，过滤开关增删对应
 * 数据面插件，指令输入框发送弹幕或触发 /clear，统计条展示实时数据。
 */
export const meta: DemoMeta = {
  slug: "basic",
  title: "综合演示",
  group: "basic",
  intro:
    "canvas 内核 + 23 个业务语义插件：敏感词/粉丝牌/高赞置顶/关键词高亮/屏蔽/静音/表情/@提及/礼物连击/语种/配色/样式/去重/限速/指令/防遮挡，外加 4 个 UI 控制插件。",
};

const SAMPLE: DanmakuItem[] = [
  { id: "1", text: "前排围观！", mode: "scroll", time: 0.2, meta: {} },
  { id: "2", text: "这波操作太秀了 :fire:", mode: "scroll", time: 0.9, meta: {} },
  { id: "3", text: "广告 加微信领福利", mode: "scroll", time: 1.6, meta: {} },
  { id: "4", text: "老粉来啦", mode: "scroll", time: 2.3, meta: { userId: "u1" } },
  { id: "5", text: "代刷 等级秒到", mode: "scroll", time: 3.0, meta: {} },
  { id: "6", text: "主播 @主播 今天状态在线", mode: "scroll", time: 3.7, meta: {} },
  { id: "7", text: "欢迎 福利 抽奖进行中", mode: "scroll", time: 4.2, meta: {} },
  { id: "8", text: "管理员的置顶公告", mode: "top", time: 4.6, meta: { isAdmin: true, level: 30 } },
  { id: "9", text: "高赞大佬发言", mode: "scroll", time: 5.0, meta: { level: 25 } },
  { id: "10", text: "火箭 x1", mode: "scroll", time: 5.6, meta: { userId: "u2" } },
  { id: "11", text: "火箭 x1", mode: "scroll", time: 5.9, meta: { userId: "u2" } },
  { id: "12", text: "弹幕护体", mode: "scroll", time: 6.5, meta: {} },
  { id: "13", text: "spam-bot 刷屏刷屏", mode: "scroll", time: 7.0, meta: { userId: "spam-bot" } },
  { id: "14", text: "这画质绝了", mode: "scroll", time: 7.6, meta: {} },
  { id: "15", text: "底部弹幕测试", mode: "bottom", time: 8.1, meta: {} },
  { id: "16", text: "反向弹幕", mode: "reverse", time: 8.6, meta: {} },
  { id: "17", text: "全程高能", mode: "scroll", time: 9.4, meta: {} },
];

const LOOP = 12;

type Settings = { opacity: number; speed: number; trackHeight: number };

export default function Stage() {
  const [currentTime, setCurrentTime] = useState(0);
  const [items, setItems] = useState<DanmakuItem[]>(SAMPLE);
  const [disabled, setDisabled] = useState<Set<string>>(new Set());
  const [settings, setSettings] = useState<Settings>({
    opacity: 1,
    speed: 1,
    trackHeight: 28,
  });
  const startRef = useRef(performance.now());
  const timeRef = useRef(0);

  useEffect(() => {
    let raf = 0;
    const loop = (t: number) => {
      const elapsed = (t - startRef.current) / 1000;
      const ct = elapsed % LOOP;
      timeRef.current = ct;
      setCurrentTime(ct);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onSettings = useCallback((s: Settings) => setSettings(s), []);
  const onFilter = useCallback((key: string, enabled: boolean) => {
    setDisabled((prev) => {
      const next = new Set(prev);
      if (enabled) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);
  const onSend = useCallback((text: string) => {
    setItems((prev) => [
      ...prev,
      {
        id: \`me-\${Date.now()}\`,
        text,
        mode: "scroll",
        time: timeRef.current,
        meta: { userId: "me", level: 5 },
      },
    ]);
  }, []);
  const onClear = useCallback(() => setItems([]), []);

  const Enhanced = useMemo(() => {
    const list = [];
    if (!disabled.has("sensitive"))
      list.push(createSensitiveFilterPlugin({ words: ["广告", "代刷"], mode: "mask" }));
    list.push(
      createFanBadgePlugin({
        badges: { u1: { name: "老粉", level: 6, color: "#ff7a29" } },
      })
    );
    list.push(createPinnedTopPlugin({ minLevel: 20 }));
    list.push(createKeywordHighlightPlugin({ keywords: ["福利", "抽奖", "高能"] }));
    if (!disabled.has("keyword"))
      list.push(createKeywordBlockPlugin({ words: ["竞品", "违规"] }));
    if (!disabled.has("mute"))
      list.push(createUserMutePlugin({ users: ["spam-bot"] }));
    list.push(createEmojiRenderPlugin());
    list.push(createAtMentionPlugin());
    list.push(createGiftComboPlugin());
    if (!disabled.has("lang"))
      list.push(createLangFilterPlugin({ allow: ["cjk", "latin"] }));
    list.push(createColorPolicyPlugin());
    list.push(createStylePresetPlugin());
    if (!disabled.has("dedup")) list.push(createDedupPlugin({ window: 5 }));
    list.push(
      createCmdParsePlugin({
        onCommand: (type) => {
          if (type === "clear") onClear();
        },
      })
    );
    list.push(createSpeedControlPlugin({ factor: settings.speed }));
    list.push(createSafeZonePlugin({ reservedBands: { top: 0.2, bottom: 0.14 } }));
    // UI 控制层
    list.push(createSettingsPanelPlugin({ onChange: onSettings }));
    list.push(createFilterTogglePlugin({ onToggle: onFilter }));
    list.push(createCommandInputPlugin({ onSend }));
    list.push(createStatsBarPlugin());
    return withDanmakuPlugins(DanmakuCore, list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, settings.speed]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 760,
        height: 420,
        position: "relative",
        borderRadius: 8,
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #1b2a4a 0%, #0d1424 60%, #2a1730 100%)",
        boxShadow: "inset 0 0 80px rgba(0,0,0,0.45)",
      }}
    >
      <Enhanced
        items={items}
        currentTime={currentTime}
        playing
        opacity={settings.opacity}
        trackHeight={settings.trackHeight}
        containerStyle={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
`,ok=`/**
 * 逐项示例 · 敏感词过滤
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createSensitiveFilterPlugin } from "vane-danmaku/custom-plugins/SensitiveFilterPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createSensitiveFilterPlugin({ words: ["广告", "代刷", "违规"], mode: "mask" })];

export const meta = {
  slug: "sensitive-filter",
  title: "敏感词过滤",
  group: "content",
  intro: "命中词按 mode 打码或删除；打码条保留并标记 masked，弹幕流不闪烁。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,ik=`/**
 * 逐项示例 · 关键词硬屏蔽
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createKeywordBlockPlugin } from "vane-danmaku/custom-plugins/KeywordBlockPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_MODERATION } from "./lib/LiveDanmaku";

const PLUGINS = [createKeywordBlockPlugin({ words: ["竞品", "违规"] })];

export const meta = {
  slug: "keyword-block",
  title: "关键词硬屏蔽",
  group: "content",
  intro: "黑名单词直接删除整条（与打码不同：连位置都不留）。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_MODERATION} height={300} />;
}
`,lk=`/**
 * 逐项示例 · 语种过滤
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createLangFilterPlugin } from "vane-danmaku/custom-plugins/LangFilterPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_LANG } from "./lib/LiveDanmaku";

const PLUGINS = [createLangFilterPlugin({ allow: ["cjk", "latin"] })];

export const meta = {
  slug: "lang-filter",
  title: "语种过滤",
  group: "content",
  intro: "按 Unicode 脚本放行 / 过滤，比如只留 CJK + 拉丁，挡掉西里尔等。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_LANG} height={300} />;
}
`,ak=`/**
 * 逐项示例 · 表情短码
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createEmojiRenderPlugin } from "vane-danmaku/custom-plugins/EmojiRenderPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createEmojiRenderPlugin()];

export const meta = {
  slug: "emoji-render",
  title: "表情短码",
  group: "content",
  intro: "把 :rocket: 这类短码转成 unicode 表情，canvas 原生绘制。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,sk=`/**
 * 逐项示例 · @提及高亮
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createAtMentionPlugin } from "vane-danmaku/custom-plugins/AtMentionPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createAtMentionPlugin()];

export const meta = {
  slug: "at-mention",
  title: "@提及高亮",
  group: "content",
  intro: "识别 @用户名，把提及段染成强调色，醒目又不影响其余弹幕。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,uk=`/**
 * 逐项示例 · 用户禁言
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createUserMutePlugin } from "vane-danmaku/custom-plugins/UserMutePlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_MODERATION } from "./lib/LiveDanmaku";

const PLUGINS = [createUserMutePlugin({ users: ["bot"] })];

export const meta = {
  slug: "user-mute",
  title: "用户禁言",
  group: "content",
  intro: "把指定用户的全部弹幕从流里剔除（如刷屏机器人）。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_MODERATION} height={300} />;
}
`,ck=`/**
 * 逐项示例 · 去重
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createDedupPlugin } from "vane-danmaku/custom-plugins/DedupPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_MODERATION } from "./lib/LiveDanmaku";

const PLUGINS = [createDedupPlugin({ window: 5 })];

export const meta = {
  slug: "dedup",
  title: "去重",
  group: "content",
  intro: "短时间内重复文本只保留一条，挡住复制粘贴刷屏。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_MODERATION} height={300} />;
}
`,dk=`/**
 * 逐项示例 · 单用户限速
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createRateLimitPlugin } from "vane-danmaku/custom-plugins/RateLimitPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_MODERATION } from "./lib/LiveDanmaku";

const PLUGINS = [createRateLimitPlugin({ max: 3, window: 6 })];

export const meta = {
  slug: "rate-limit",
  title: "单用户限速",
  group: "content",
  intro: "限制单用户单位时间内的弹幕条数，防单点刷屏。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_MODERATION} height={300} />;
}
`,fk=`/**
 * 逐项示例 · 审计旁路
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createAuditLogPlugin } from "vane-danmaku/custom-plugins/AuditLogPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createAuditLogPlugin()];

export const meta = {
  slug: "audit-log",
  title: "审计旁路",
  group: "content",
  intro: "旁路记录被拦截/命中的弹幕，不改流，只做统计与风控留痕。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,mk=`/**
 * 逐项示例 · 高赞置顶
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createPinnedTopPlugin } from "vane-danmaku/custom-plugins/PinnedTopPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createPinnedTopPlugin({ minLevel: 20 })];

export const meta = {
  slug: "pinned-top",
  title: "高赞置顶",
  group: "emphasis",
  intro: "高等级 / 高赞发言固定停在顶部轨道，不参与水平滚动。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,pk=`/**
 * 逐项示例 · 关键词高亮
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createKeywordHighlightPlugin } from "vane-danmaku/custom-plugins/KeywordHighlightPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createKeywordHighlightPlugin({ keywords: ["福利", "抽奖", "高能"] })];

export const meta = {
  slug: "keyword-highlight",
  title: "关键词高亮",
  group: "emphasis",
  intro: "福利 / 抽奖 / 高能 等关键词染成强调色并加高亮底。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,gk=`/**
 * 逐项示例 · 礼物连击
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createGiftComboPlugin } from "vane-danmaku/custom-plugins/GiftComboPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_COMBO } from "./lib/LiveDanmaku";

const PLUGINS = [createGiftComboPlugin()];

export const meta = {
  slug: "gift-combo",
  title: "礼物连击",
  group: "emphasis",
  intro: "同一用户连续送同类礼物合并成 xN 连击角标。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_COMBO} height={300} />;
}
`,hk=`/**
 * 逐项示例 · 角色配色
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createColorPolicyPlugin } from "vane-danmaku/custom-plugins/ColorPolicyPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createColorPolicyPlugin()];

export const meta = {
  slug: "color-policy",
  title: "角色配色",
  group: "emphasis",
  intro: "按用户角色（普通 / 粉丝 / 超管）给弹幕上色，一眼区分。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,vk=`/**
 * 逐项示例 · 样式预设
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createStylePresetPlugin } from "vane-danmaku/custom-plugins/StylePresetPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createStylePresetPlugin()];

export const meta = {
  slug: "style-preset",
  title: "样式预设",
  group: "emphasis",
  intro: "一键套用字号 / 字体 / 阴影等视觉预设。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,yk=`/**
 * 逐项示例 · 互动指令
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createCmdParsePlugin } from "vane-danmaku/custom-plugins/CmdParsePlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_CMDS } from "./lib/LiveDanmaku";

const PLUGINS = [createCmdParsePlugin()];

export const meta = {
  slug: "cmd-parse",
  title: "互动指令",
  group: "interaction",
  intro: "识别 /clear、#lottery 等指令前缀，从渲染流移除并广播事件。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_CMDS} height={300} />;
}
`,Pk=`/**
 * 逐项示例 · 粉丝牌
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createFanBadgePlugin } from "vane-danmaku/custom-plugins/FanBadgePlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_INTERACTION } from "./lib/LiveDanmaku";

const PLUGINS = [createFanBadgePlugin({ badges: { u1: { name: "老粉", level: 6, color: "#ff7a29" }, u2: { name: "舰长", level: 12, color: "#5fd3c8" } } })];

export const meta = {
  slug: "fan-badge",
  title: "粉丝牌",
  group: "interaction",
  intro: "给指定用户挂粉丝牌（牌底主色 + 等级），由内核绘制。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_INTERACTION} height={300} />;
}
`,xk=`/**
 * 逐项示例 · 轨道策略
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createTrackStrategyPlugin } from "vane-danmaku/custom-plugins/TrackStrategyPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createTrackStrategyPlugin()];

export const meta = {
  slug: "track-strategy",
  title: "轨道策略",
  group: "layout",
  intro: "重写弹幕的优先轨道分配（如把高优先级弹幕固定到中上区）。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,kk=`/**
 * 逐项示例 · 速度控制
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createSpeedControlPlugin } from "vane-danmaku/custom-plugins/SpeedControlPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createSpeedControlPlugin({ factor: 1 })];

export const meta = {
  slug: "speed-control",
  title: "速度控制",
  group: "layout",
  intro: "整体加快 / 放慢弹幕飞行速度，适配不同视频节奏。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,Sk=`/**
 * 逐项示例 · 防遮挡安全区
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createSafeZonePlugin } from "vane-danmaku/custom-plugins/SafeZonePlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createSafeZonePlugin({ reservedBands: { top: 0.2, bottom: 0.14 } })];

export const meta = {
  slug: "safe-zone",
  title: "防遮挡安全区",
  group: "control",
  intro: "默认静态安全区（顶/底条带）；也可注入 MediaPipe 实时避让区（见场景 02）。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,wk=`/**
 * 逐项示例 · 设置面板
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createSettingsPanelPlugin } from "vane-danmaku/custom-plugins/SettingsPanelPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createSettingsPanelPlugin()];

export const meta = {
  slug: "settings-panel",
  title: "设置面板",
  group: "control",
  intro: "浮层控制面板：观众调透明度 / 速度 / 轨道高度（经 bus 广播）。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,_k=`/**
 * 逐项示例 · 过滤开关
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createFilterTogglePlugin } from "vane-danmaku/custom-plugins/FilterTogglePlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createFilterTogglePlugin()];

export const meta = {
  slug: "filter-toggle",
  title: "过滤开关",
  group: "control",
  intro: "工具条过滤开关：增删对应数据面插件（经 bus 广播）。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,Ck=`/**
 * 逐项示例 · 指令输入框
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createCommandInputPlugin } from "vane-danmaku/custom-plugins/CommandInputPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createCommandInputPlugin()];

export const meta = {
  slug: "command-input",
  title: "指令输入框",
  group: "control",
  intro: "底部输入框：观众发弹幕或发 /clear 等指令（经 bus 广播）。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,Ek=`/**
 * 逐项示例 · 统计条
 * 只装一个插件看它的独立行为。源码即正在运行的那份。
 */
import React from "react";
import { createStatsBarPlugin } from "vane-danmaku/custom-plugins/StatsBarPlugin";
import { PluginStage } from "./lib/PluginStage";
import { SAMPLE_BASIC } from "./lib/LiveDanmaku";

const PLUGINS = [createStatsBarPlugin()];

export const meta = {
  slug: "stats-bar",
  title: "统计条",
  group: "control",
  intro: "工具条统计条：展示实时弹幕数等指标（经 bus 广播）。",
};

export default function Stage() {
  return <PluginStage plugins={PLUGINS} items={SAMPLE_BASIC} height={300} />;
}
`,bk=Object.assign({"./00-basic.tsx":BP,"./10-sensitive-filter.tsx":ZP,"./11-keyword-block.tsx":JP,"./12-lang-filter.tsx":r1,"./13-emoji-render.tsx":a1,"./14-at-mention.tsx":d1,"./15-user-mute.tsx":g1,"./16-dedup.tsx":P1,"./17-rate-limit.tsx":N1,"./18-audit-log.tsx":G1,"./19-pinned-top.tsx":Z1,"./20-keyword-highlight.tsx":J1,"./21-gift-combo.tsx":rx,"./22-color-policy.tsx":ax,"./23-style-preset.tsx":dx,"./24-cmd-parse.tsx":gx,"./25-fan-badge.tsx":Px,"./26-track-strategy.tsx":Nx,"./27-speed-control.tsx":Ix,"./28-safe-zone.tsx":zx,"./29-settings-panel.tsx":Wx,"./30-filter-toggle.tsx":Qx,"./31-command-input.tsx":qx,"./32-stats-bar.tsx":tk}),Dk=Object.assign({"./00-basic.tsx":rk,"./10-sensitive-filter.tsx":ok,"./11-keyword-block.tsx":ik,"./12-lang-filter.tsx":lk,"./13-emoji-render.tsx":ak,"./14-at-mention.tsx":sk,"./15-user-mute.tsx":uk,"./16-dedup.tsx":ck,"./17-rate-limit.tsx":dk,"./18-audit-log.tsx":fk,"./19-pinned-top.tsx":mk,"./20-keyword-highlight.tsx":pk,"./21-gift-combo.tsx":gk,"./22-color-policy.tsx":hk,"./23-style-preset.tsx":vk,"./24-cmd-parse.tsx":yk,"./25-fan-badge.tsx":Pk,"./26-track-strategy.tsx":xk,"./27-speed-control.tsx":kk,"./28-safe-zone.tsx":Sk,"./29-settings-panel.tsx":wk,"./30-filter-toggle.tsx":_k,"./31-command-input.tsx":Ck,"./32-stats-bar.tsx":Ek}),Rk=e=>e.replace(/^\.\//,""),da=Object.entries(bk).map(([e,n])=>{const t=Rk(e);return{meta:n.meta,Stage:n.default,file:t,source:Dk[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),Lk=Array.from(new Set(da.map(e=>e.meta.group))),Gf={basic:{label:"基础用法"},content:{label:"内容治理"},emphasis:{label:"视觉强调"},interaction:{label:"互动指令"},layout:{label:"轨道策略"},control:{label:"控制层"}},jk="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",Nk="true|false|null|undefined|this|super",$k="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",lc=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${jk})\b`,String.raw`\b(${Nk})\b`,String.raw`\b(${$k})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),ac=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function Tk(e){const n=[];let t=0;lc.lastIndex=0;let r;for(;r=lc.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const o=ac.findIndex((i,l)=>r[l+1]!==void 0);n.push({text:r[0],cls:o>=0?ac[o]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function sc(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function Mk({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[o,i]=x.useState("idle"),[l,a]=x.useState(!1),s=x.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&s.length>t,d=u&&!l?s.slice(0,t).join(`
`):e,f=x.useMemo(()=>Tk(d),[d]),p=x.useCallback(async()=>{var y;let v=!1;if((y=navigator.clipboard)!=null&&y.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=sc(e)}else v=sc(e);i(v?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-head",children:[c.jsx("span",{children:n}),c.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[c.jsxs("span",{children:[s.length," 行"]}),c.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:p,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),c.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:c.jsx("code",{children:f.map((v,y)=>v.cls?c.jsx("span",{className:v.cls,children:v.text},y):c.jsx(Gr.Fragment,{children:v.text},y))})}),u?c.jsx("button",{type:"button",className:"code-more",onClick:()=>a(v=>!v),children:l?"收起":`展开余下 ${s.length-t} 行`}):null]})}function Vf(e){return e.props??e.config??[]}function Ik({doc:e}){var o,i,l;const n=Vf(e),t=e.events??[],r=e.methods??[];return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"属性 Props"}),n.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"属性"}),c.jsx("th",{children:"类型"}),c.jsx("th",{children:"默认"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:n.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.type})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.default??"-"})}),c.jsx("td",{children:a.description??"—"})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"事件 Events"}),t.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"事件"}),c.jsx("th",{children:"触发时机"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:t.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:a.when}),c.jsx("td",{children:a.description})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"方法 Methods"}),r.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"方法"}),c.jsx("th",{children:"签名"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:r.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.signature})}),c.jsx("td",{children:a.description})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),c.jsxs("div",{className:"doc-cols",children:[(o=e.features)!=null&&o.length?c.jsxs("div",{children:[c.jsx("h5",{children:"能做"}),c.jsx("ul",{children:e.features.map(a=>c.jsx("li",{children:a},a))})]}):null,(i=e.useCases)!=null&&i.length?c.jsxs("div",{children:[c.jsx("h5",{children:"适合"}),c.jsx("ul",{children:e.useCases.map(a=>c.jsx("li",{children:a},a))})]}):null,(l=e.notes)!=null&&l.length?c.jsxs("div",{children:[c.jsx("h5",{children:"注意"}),c.jsx("ul",{children:e.notes.map(a=>c.jsx("li",{children:a},a))})]}):null]})]})}function Ok({factory:e,priority:n,summary:t,doc:r,defaultOpen:o=!0}){var l,a;const i={props:Vf(r).length,events:((l=r.events)==null?void 0:l.length)??0,methods:((a=r.methods)==null?void 0:a.length)??0};return c.jsxs("details",{className:"api-plug",open:o,children:[c.jsxs("summary",{children:[c.jsx("code",{children:e}),c.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),c.jsx("span",{className:"api-plug-desc",children:t}),c.jsxs("span",{className:"api-plug-n",children:[i.props," 属性 · ",i.events," 事件 · ",i.methods," 方法"]})]}),c.jsx("div",{className:"api-plug-body",children:c.jsx(Ik,{doc:r})})]})}const Ak=/create[A-Z]\w*Plugin/g;function Fk(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Kf(e){return e.dir?`create${e.dir}`:Fk(e.factory)}function zk(e){return new Set(e.match(Ak)??[])}function Uk(e,n){const t=zk(e);return n.filter(r=>t.has(Kf(r))).sort((r,o)=>r.priority-o.priority)}function Bk({source:e,plugins:n,heading:t="本页用到的插件"}){const r=x.useMemo(()=>Uk(e,n),[e,n]);return r.length===0?null:c.jsxs("section",{className:"api-sec",children:[c.jsxs("div",{className:"api-sec-head",children:[c.jsxs("h2",{className:"api-sec-title",children:[t," · ",r.length," 个"]}),c.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",c.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(o=>c.jsx(Ok,{factory:Kf(o),priority:o.priority,summary:o.summary??o.doc.description??"",doc:o.doc},o.factory))]})}const Hk=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
  DanmakuRenderHint,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface AtMentionConfig {
  /** @提及的着色，默认 "#4ea1ff" */
  color?: string;
  /** 自定义提及正则（需捕获整段被提及文本），默认匹配 @ + 中文/英文/数字 */
  pattern?: string;
}

const DEFAULT_PATTERN = "@[\\\\w\\\\u4e00-\\\\u9fa5]+";

/** 把 @提及 段着色（其余段沿用整条配色） */
function buildRich(
  text: string,
  re: RegExp,
  color: string
): DanmakuRenderHint {
  const segments: { text: string; color?: string }[] = [];
  let last = 0;
  let matched = false;
  for (const m of text.matchAll(re)) {
    const start = m.index ?? 0;
    if (start > last) segments.push({ text: text.slice(last, start) });
    segments.push({ text: m[0], color });
    last = start + m[0].length;
    matched = true;
  }
  if (!matched) return {};
  if (last < text.length) segments.push({ text: text.slice(last) });
  return { rich: segments };
}

/**
 * AtMentionPlugin —— @提及高亮（数据面）。
 * 识别 \`@用户名\` 写入 renderHint.rich（带 color），内核按段着色；
 * 与 KeywordHighlight 共用分段着色机制，互不覆盖。
 */
export function createAtMentionPlugin(
  config: AtMentionConfig = {}
): DanmakuPlugin {
  const color = config.color ?? "#4ea1ff";
  const re = new RegExp(\`(\${config.pattern ?? DEFAULT_PATTERN})\`, "g");

  return {
    name: "at-mention",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        const items = data.items.map((it) => {
          if (it.renderHint?.rich) return it;
          const hint = buildRich(it.text, re, color);
          return hint.rich ? { ...it, renderHint: { ...it.renderHint, ...hint } } : it;
        });
        return { ...data, items };
      },
    },
  };
}

createAtMentionPlugin.meta = doc as PluginDoc;
`,Wk=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface AuditLogConfig {
  /** 每条弹幕的审计回调（审核/落库/风控用）；不修改弹幕流 */
  onLog?: (item: DanmakuData["items"][number], context: DanmakuPluginContext) => void;
  /** 是否同时经 bus 广播 "danmaku:audit"，默认 false */
  emit?: boolean;
}

/**
 * AuditLogPlugin —— 弹幕审计（数据面旁路）。
 * 不增删弹幕：对每条弹幕触发 onLog（审核/风控/落库）回调，可选经 bus 广播
 * "danmaku:audit" 事件。纯旁路，放在流水线末尾（priority 最低的数据面）最合适。
 */
export function createAuditLogPlugin(
  config: AuditLogConfig = {}
): DanmakuPlugin {
  const onLog = config.onLog;
  const emit = config.emit ?? false;
  // transformData 随播放时钟多次执行：按 id 去重，避免同一条弹幕被重复审计/落库
  const seen = new Set<string>();

  return {
    name: "audit-log",
    version: "0.1.0",
    description: doc.description,
    priority: 23,
    enabled: true,
    hooks: {
      transformData: (
        context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        for (const it of data.items) {
          if (seen.has(it.id)) continue;
          seen.add(it.id);
          onLog?.(it, context);
          if (emit) context.bus.emit("danmaku:audit", { item: it });
        }
        return data;
      },
    },
  };
}

createAuditLogPlugin.meta = doc as PluginDoc;
`,Gk=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface CmdParseConfig {
  /** 指令前缀，默认 ["/", "#"] */
  prefixes?: string[];
  /** 已知指令名 -> bus 事件 type（命中后从渲染流移除并发事件） */
  commands?: Record<string, string>;
  /** 命中指令回调（type, payload, item）；与 bus 广播并存，消费方可据此清屏/抽奖等 */
  onCommand?: (type: string, payload: string, item: DanmakuData["items"][number]) => void;
}

/**
 * CmdParsePlugin —— 互动指令解析（数据面拦截）。
 * 形如 \`/clear\`、\`#lottery\` 的弹幕在 transformData 阶段被识别：从渲染流移除，
 * 经 ctx.bus.emit("danmaku:command", { type, payload, item }) 触发业务动作
 * （消费方监听清空屏幕 / 抽奖弹层等）。非已知指令则当普通弹幕保留。
 */
export function createCmdParsePlugin(
  config: CmdParseConfig = {}
): DanmakuPlugin {
  const prefixes = config.prefixes ?? ["/", "#"];
  const commands = config.commands ?? { clear: "clear", lottery: "lottery" };
  // transformData 会随播放时钟推进多次执行；指令是「一次性副作用」，
  // 必须按 id 去重，否则同一句 /clear 会被广播多次、抽奖被重复触发。
  const handled = new Set<string>();

  return {
    name: "cmd-parse",
    version: "0.1.0",
    description: doc.description,
    priority: 13,
    enabled: true,
    hooks: {
      transformData: (
        context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        const kept = [];
        for (const it of data.items) {
          const head = it.text.trim();
          const prefix = prefixes.find((p) => head.startsWith(p));
          if (!prefix) {
            kept.push(it);
            continue;
          }
          const rest = head.slice(prefix.length);
          const name = rest.split(/\\s+/)[0].toLowerCase();
          const type = commands[name];
          if (!type) {
            kept.push(it);
            continue;
          }
          const payload = rest.slice(name.length).trim();
          if (handled.has(it.id)) continue; // 已触发过：保持不渲染，但不再重复发事件
          handled.add(it.id);
          context.bus.emit("danmaku:command", { type, payload, item: it });
          config.onCommand?.(type, payload, it);
          // 命中指令：不 push → 不渲染
        }
        return { ...data, items: kept };
      },
    },
  };
}

createCmdParsePlugin.meta = doc as PluginDoc;
`,Vk=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface ColorPolicyConfig {
  /** 管理员弹幕色，默认 "#ff4d4f"（红） */
  adminColor?: string;
  /** 高等级（>=vipLevel）弹幕色，默认 "#ffd54a"（金） */
  vipColor?: string;
  /** 触发 vip 着色的等级阈值，默认 18 */
  vipLevel?: number;
}

/**
 * ColorPolicyPlugin —— 角色配色策略（数据面，写 meta.color）。
 * 仅当单条未显式指定 color 时按角色着色：管理员红、高等级金，普通弹幕保持白。
 * 放在流水线靠后，避免覆盖业务插件的显式配色意图。
 */
export function createColorPolicyPlugin(
  config: ColorPolicyConfig = {}
): DanmakuPlugin {
  const adminColor = config.adminColor ?? "#ff4d4f";
  const vipColor = config.vipColor ?? "#ffd54a";
  const vipLevel = config.vipLevel ?? 18;

  return {
    name: "color-policy",
    version: "0.1.0",
    description: doc.description,
    priority: 27,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        const items = data.items.map((it) => {
          if (it.meta.color) return it;
          let color: string | undefined;
          if (it.meta.isAdmin) color = adminColor;
          else if ((it.meta.level ?? 0) >= vipLevel) color = vipColor;
          if (!color) return it;
          return { ...it, meta: { ...it.meta, color } };
        });
        return { ...data, items };
      },
    },
  };
}

createColorPolicyPlugin.meta = doc as PluginDoc;
`,Kk=`import { useState } from "react";
import type {
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface CommandInputConfig {
  /** 占位符，默认 "发条弹幕 / 指令（/clear）" */
  placeholder?: string;
  /** 发送回调（消费方可据此向弹幕流追加一条弹幕）；与 bus 广播并存 */
  onSend?: (text: string) => void;
}

const WRAP: React.CSSProperties = {
  display: "flex",
  gap: 6,
  width: "100%",
  pointerEvents: "auto",
};
const INPUT: React.CSSProperties = {
  flex: 1,
  pointerEvents: "auto",
  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: 8,
  color: "#fff",
  padding: "6px 10px",
  font: "13px system-ui, sans-serif",
  outline: "none",
};
const SEND: React.CSSProperties = {
  pointerEvents: "auto",
  cursor: "pointer",
  border: "none",
  borderRadius: 8,
  padding: "6px 14px",
  font: "13px system-ui, sans-serif",
  color: "#fff",
  background: "rgba(255,122,41,0.95)",
};

const DEFAULT_PLACEHOLDER = "发条弹幕 / 指令（/clear）";

function CommandInput({
  context,
  onSend,
  placeholder = DEFAULT_PLACEHOLDER,
}: {
  context: DanmakuPluginContext;
  onSend?: CommandInputConfig["onSend"];
  placeholder?: string;
}) {
  const [text, setText] = useState("");

  const send = () => {
    const t = text.trim();
    if (!t) return;
    context.bus.emit("danmaku:send", { text: t });
    onSend?.(t);
    setText("");
  };

  return (
    <div style={WRAP}>
      <input
        style={INPUT}
        value={text}
        aria-label="发送弹幕或指令"
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") send();
        }}
      />
      <button type="button" style={SEND} onClick={send}>
        发送
      </button>
    </div>
  );
}

/**
 * CommandInputPlugin —— 弹幕/指令输入框（UI 面，renderFooter）。
 * 输入框提交经 bus 广播 "danmaku:send" {text}；消费方（demo）据此向弹幕流
 * 追加一条滚动弹幕，或交给 CmdParsePlugin 解析为指令（如 /clear）。
 */
export function createCommandInputPlugin(
  config: CommandInputConfig = {}
): DanmakuPlugin {
  return {
    name: "command-input",
    version: "0.1.0",
    description: doc.description,
    priority: 32,
    enabled: true,
    hooks: {
      renderFooter: (context: DanmakuPluginContext) => (
        <CommandInput
          context={context}
          onSend={config.onSend}
          placeholder={config.placeholder}
        />
      ),
    },
  };
}

createCommandInputPlugin.meta = doc as PluginDoc;
`,Qk=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface DedupConfig {
  /** 同一用户+相同文案在多少秒内再次出现则去重，默认 5 */
  window?: number;
}

/**
 * DedupPlugin —— 弹幕去重（数据面）。
 * 同一用户、相同文案在 window 秒内重复出现时只保留首条，避免刷屏。
 * 纯函数：基于 item.time 顺序判断，transformData 多次调用结果稳定。
 */
export function createDedupPlugin(config: DedupConfig = {}): DanmakuPlugin {
  const win = config.window ?? 5;

  return {
    name: "dedup",
    version: "0.1.0",
    description: doc.description,
    priority: 14,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        const seen = new Map<string, number>();
        const items = [];
        for (const it of data.items) {
          const key = \`\${it.meta.userId ?? ""} \${it.text}\`;
          const last = seen.get(key);
          if (last != null && it.time - last <= win) continue;
          seen.set(key, it.time);
          items.push(it);
        }
        return { ...data, items };
      },
    },
  };
}

createDedupPlugin.meta = doc as PluginDoc;
`,Zk=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface EmojiRenderConfig {
  /** 短码 -> unicode 表情的映射；缺省用内置常用表 */
  map?: Record<string, string>;
}

const BUILTIN: Record<string, string> = {
  smile: "😄",
  heart: "❤️",
  fire: "🔥",
  rocket: "🚀",
  star: "⭐",
  clap: "👏",
  cry: "😭",
  laugh: "😂",
  gift: "🎁",
  thumbsup: "👍",
};

/**
 * EmojiRenderPlugin —— 表情短码转义（数据面）。
 * 把文本中的 \`:shortcode:\` 形式（如 \`:rocket:\`）替换为 unicode 表情，
 * 由内核按普通文字绘制（canvas 原生支持 emoji）。不改写已无短码的文本。
 */
export function createEmojiRenderPlugin(
  config: EmojiRenderConfig = {}
): DanmakuPlugin {
  const map = { ...BUILTIN, ...(config.map ?? {}) };
  const names = Object.keys(map);
  const re = names.length > 0 ? new RegExp(\`:(\${names.join("|")}):\`, "g") : null;

  return {
    name: "emoji-render",
    version: "0.1.0",
    description: doc.description,
    priority: 19,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        if (!re) return data;
        const items = data.items.map((it) => {
          if (!re.test(it.text)) {
            re.lastIndex = 0;
            return it;
          }
          re.lastIndex = 0;
          const text = it.text.replace(re, (_m, k) => map[k] ?? \`:\${k}:\`);
          re.lastIndex = 0;
          return { ...it, text };
        });
        return { ...data, items };
      },
    },
  };
}

createEmojiRenderPlugin.meta = doc as PluginDoc;
`,Yk=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
  FanBadge,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface FanBadgeConfig {
  /** userId -> 粉丝牌（FanBadgePlugin 据此富化弹幕 meta.fanBadge） */
  badges?: Record<string, FanBadge>;
  /** 缺省牌底色（lookup 未提供 color 时） */
  defaultColor?: string;
}

/**
 * FanBadgePlugin —— 粉丝牌（数据面）。
 * 按 userId 把粉丝牌富化进 meta.fanBadge；渲染由 canvas 内核读 meta 绘制牌底块 + 白字。
 * 插件绝不直绘 canvas，只写数据。
 */
export function createFanBadgePlugin(
  config: FanBadgeConfig = {}
): DanmakuPlugin {
  const badges = config.badges ?? {};
  const defaultColor = config.defaultColor ?? "#ff7a29";

  return {
    name: "fan-badge",
    version: "0.1.0",
    description: doc.description,
    priority: 11,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        const items = data.items.map((it) => {
          if (it.meta.fanBadge || !it.meta.userId) return it;
          const b = badges[it.meta.userId];
          if (!b) return it;
          return {
            ...it,
            meta: {
              ...it.meta,
              fanBadge: { ...b, color: b.color ?? defaultColor },
            },
          };
        });
        return { ...data, items };
      },
    },
  };
}

createFanBadgePlugin.meta = doc as PluginDoc;
`,Xk=`import { useState } from "react";
import type {
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface FilterToggleConfig {
  /** 默认开启的过滤项 key（其余默认关） */
  defaults?: string[];
  /** 切换回调（消费方可据此重建对应数据面插件）；与 bus 广播并存 */
  onToggle?: (key: string, enabled: boolean) => void;
}

const FILTERS: { key: string; label: string }[] = [
  { key: "sensitive", label: "敏感词" },
  { key: "mute", label: "静音用户" },
  { key: "keyword", label: "关键词屏" },
  { key: "lang", label: "语种" },
  { key: "dedup", label: "去重" },
];

const WRAP: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
  pointerEvents: "auto",
};
const CHIP = (on: boolean): React.CSSProperties => ({
  pointerEvents: "auto",
  cursor: "pointer",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: 999,
  padding: "3px 10px",
  font: "12px system-ui, sans-serif",
  color: "#fff",
  background: on ? "rgba(255,122,41,0.9)" : "rgba(255,255,255,0.12)",
  userSelect: "none",
});

function FilterToggle({
  context,
  defaults,
  onToggle,
}: {
  context: DanmakuPluginContext;
  defaults?: string[];
  onToggle?: FilterToggleConfig["onToggle"];
}) {
  const [on, setOn] = useState<Record<string, boolean>>(() => {
    const enabled = new Set(defaults ?? FILTERS.map((f) => f.key));
    return Object.fromEntries(FILTERS.map((f) => [f.key, enabled.has(f.key)]));
  });

  const toggle = (key: string) => {
    setOn((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      context.bus.emit("danmaku:filter", { key, enabled: next[key] });
      onToggle?.(key, next[key]);
      return next;
    });
  };

  return (
    <div style={WRAP}>
      {FILTERS.map((f) => (
        <button
          key={f.key}
          type="button"
          aria-pressed={!!on[f.key]}
          style={CHIP(on[f.key])}
          onClick={() => toggle(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

/**
 * FilterTogglePlugin —— 过滤开关条（UI 面，renderHeader）。
 * 渲染一排过滤项 chip，点击经 bus 广播 "danmaku:filter" {key,enabled}，
 * 由消费方（demo）据此重建对应数据面插件（传 enabled）。纯控制层，不碰弹幕流。
 */
export function createFilterTogglePlugin(
  config: FilterToggleConfig = {}
): DanmakuPlugin {
  return {
    name: "filter-toggle",
    version: "0.1.0",
    description: doc.description,
    priority: 31,
    enabled: true,
    hooks: {
      renderHeader: (context: DanmakuPluginContext) => (
        <FilterToggle
          context={context}
          defaults={config.defaults}
          onToggle={config.onToggle}
        />
      ),
    },
  };
}

createFilterTogglePlugin.meta = doc as PluginDoc;
`,qk=`import type {
  DanmakuData,
  DanmakuItem,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface GiftComboConfig {
  /** 连击识别：文案以 \`基础词 xN\` 结尾（N 为整数），默认 /^(.*?)\\s*x(\\d+)$/ */
  pattern?: string;
}

const DEFAULT_PATTERN = /^(.*?)\\s*x(\\d+)$/;

/**
 * GiftComboPlugin —— 礼物连击聚合（数据面）。
 * 同用户、相同「基础词」且紧邻出现（按数组顺序）的 \`xN\` 弹幕合并为一条，
 * 累加连击数写入 meta.combo；内核末尾绘制 \`xN\` 角标。非连击文案原样保留。
 */
export function createGiftComboPlugin(
  config: GiftComboConfig = {}
): DanmakuPlugin {
  const re = config.pattern ? new RegExp(config.pattern) : DEFAULT_PATTERN;

  return {
    name: "gift-combo",
    version: "0.1.0",
    description: doc.description,
    priority: 21,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        const out = [];
        let last: { uid: string; base: string; count: number; item: any } | null =
          null;
        for (const it of data.items) {
          const m = it.text.match(re);
          if (m && it.meta.userId) {
            const base = m[1];
            const n = parseInt(m[2], 10);
            if (last && last.uid === it.meta.userId && last.base === base) {
              last.count += n;
              // 就地更新 last.item（它即 out 中已 push 的同一引用），避免重新赋值丢失输出
              last.item.text = \`\${base} x\${last.count}\`;
              last.item.meta = { ...last.item.meta, combo: last.count };
              continue;
            }
            const merged: DanmakuItem = {
              ...it,
              text: \`\${base} x\${n}\`,
              meta: { ...it.meta, combo: n },
            };
            last = { uid: it.meta.userId, base, count: n, item: merged };
            out.push(merged);
            continue;
          }
          last = null;
          out.push(it);
        }
        return { ...data, items: out };
      },
    },
  };
}

createGiftComboPlugin.meta = doc as PluginDoc;
`,Jk=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface KeywordBlockConfig {
  /** 硬屏蔽词：命中即从渲染流删除（区别于 SensitiveFilter 的打码保留） */
  words?: string[];
  /** contains=包含即删；equals=整句相等才删，默认 "contains" */
  mode?: "contains" | "equals";
}

/**
 * KeywordBlockPlugin —— 关键词硬屏蔽（数据面）。
 * 与 SensitiveFilter 的「打码保留」不同，这里直接从弹幕流删除命中词，
 * 用于完全不想展示的违禁词 / 竞品词。命中判定：contains=子串，equals=整句。
 */
export function createKeywordBlockPlugin(
  config: KeywordBlockConfig = {}
): DanmakuPlugin {
  const words = config.words ?? [];
  const mode = config.mode ?? "contains";

  return {
    name: "keyword-block",
    version: "0.1.0",
    description: doc.description,
    priority: 17,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        if (words.length === 0) return data;
        const items = data.items.filter((it) => {
          if (mode === "equals") {
            return !words.some((w) => it.text.trim() === w);
          }
          return !words.some((w) => it.text.includes(w));
        });
        return { ...data, items };
      },
    },
  };
}

createKeywordBlockPlugin.meta = doc as PluginDoc;
`,eS=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
  DanmakuRenderHint,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface KeywordHighlightConfig {
  /** 要高亮的词（命中处用 color 着色，其余保持原色） */
  keywords?: string[];
  /** 高亮色，默认 "#ff7a29" */
  color?: string;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^\${}()|[\\]\\\\]/g, "\\\\$&");
}

/** 把命中词拆成彩色分段（其余段无 color，沿用整条配色） */
function buildRich(text: string, re: RegExp, color: string): DanmakuRenderHint {
  re.lastIndex = 0; // g 标志有状态，复用前必须归零
  const segments: { text: string; color?: string }[] = [];
  let last = 0;
  let matched = false;
  for (const m of text.matchAll(re)) {
    const start = m.index ?? 0;
    if (start > last) segments.push({ text: text.slice(last, start) });
    segments.push({ text: m[0], color });
    last = start + m[0].length;
    matched = true;
  }
  if (!matched) return {};
  if (last < text.length) segments.push({ text: text.slice(last) });
  return { rich: segments };
}

/**
 * KeywordHighlightPlugin —— 关键词高亮（数据面）。
 * 命中 keywords 的片段写入 renderHint.rich（带 color），由内核按段着色；
 * 未命中的弹幕不改写。数据面只写数据，绝不直绘 canvas。
 */
export function createKeywordHighlightPlugin(
  config: KeywordHighlightConfig = {}
): DanmakuPlugin {
  const keywords = config.keywords ?? [];
  const color = config.color ?? "#ff7a29";
  // 关键词固定，正则只编译一次（原来每条弹幕每帧都 new RegExp，是流水线里最贵的一处）
  const re =
    keywords.length > 0
      ? new RegExp(\`(\${keywords.map(escapeRegExp).join("|")})\`, "gi")
      : null;

  return {
    name: "keyword-highlight",
    version: "0.1.0",
    description: doc.description,
    priority: 16,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        if (!re) return data;
        const items = data.items.map((it) => {
          if (it.renderHint?.rich) return it;
          const hint = buildRich(it.text, re, color);
          return hint.rich ? { ...it, renderHint: { ...it.renderHint, ...hint } } : it;
        });
        return { ...data, items };
      },
    },
  };
}

createKeywordHighlightPlugin.meta = doc as PluginDoc;
`,nS=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export type ScriptKind = "cjk" | "latin" | "symbol";

export interface LangFilterConfig {
  /** 允许的字符体系；弹幕须至少命中其一才保留，默认 ["cjk","latin"] */
  allow?: ScriptKind[];
  /** 纯符号/无字母数字（无命中任何 allow）是否直接丢弃，默认 true */
  blockUnknown?: boolean;
}

function detect(text: string): Set<ScriptKind> {
  const found = new Set<ScriptKind>();
  if (/[一-鿿]/.test(text)) found.add("cjk");
  if (/[a-zA-Z]/.test(text)) found.add("latin");
  if (/[^一-鿿a-zA-Z0-9\\s]/.test(text)) found.add("symbol");
  return found;
}

/**
 * LangFilterPlugin —— 语种过滤（数据面）。
 * 按字符体系放行：弹幕须至少命中 allow 中的一种才保留；
 * blockUnknown=true 时无任何 allow 命中的纯符号刷屏直接丢弃。
 */
export function createLangFilterPlugin(
  config: LangFilterConfig = {}
): DanmakuPlugin {
  const allow = config.allow ?? ["cjk", "latin"];
  const blockUnknown = config.blockUnknown ?? true;

  return {
    name: "lang-filter",
    version: "0.1.0",
    description: doc.description,
    priority: 22,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        const items = data.items.filter((it) => {
          const found = detect(it.text);
          const ok = allow.some((s) => found.has(s));
          if (ok) return true;
          return !blockUnknown;
        });
        return { ...data, items };
      },
    },
  };
}

createLangFilterPlugin.meta = doc as PluginDoc;
`,tS=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface PinnedTopConfig {
  /** 高赞阈值：meta.level >= 该值即置顶 + 高赞环，默认 18 */
  minLevel?: number;
}

/**
 * PinnedTopPlugin —— 高赞置顶（数据面）。
 * 高等级用户的弹幕标记 renderHint.pinned + ring：内核把它们钉在顶部带、居中停留、
 * 加高赞环高亮（不随风滚动）。阈值用 meta.level 作为「高赞」代理（模型无独立点赞字段）。
 */
export function createPinnedTopPlugin(
  config: PinnedTopConfig = {}
): DanmakuPlugin {
  const minLevel = config.minLevel ?? 18;

  return {
    name: "pinned-top",
    version: "0.1.0",
    description: doc.description,
    priority: 12,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        const items = data.items.map((it) => {
          if ((it.meta.level ?? 0) >= minLevel && !it.renderHint?.pinned) {
            return {
              ...it,
              renderHint: { ...it.renderHint, pinned: true, ring: true },
            };
          }
          return it;
        });
        return { ...data, items };
      },
    },
  };
}

createPinnedTopPlugin.meta = doc as PluginDoc;
`,rS=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface RateLimitConfig {
  /** 单用户在 window 秒内最多保留的弹幕数，默认 3 */
  max?: number;
  /** 统计窗口（秒），默认 10 */
  window?: number;
}

/**
 * RateLimitPlugin —— 单用户限流（数据面）。
 * 单用户在 window 秒内超过 max 条的弹幕被丢弃，防止单一用户刷屏压垮轨道。
 * 纯函数：按 item.time 顺序累计同用户窗口内计数。
 */
export function createRateLimitPlugin(
  config: RateLimitConfig = {}
): DanmakuPlugin {
  const max = config.max ?? 3;
  const win = config.window ?? 10;

  return {
    name: "rate-limit",
    version: "0.1.0",
    description: doc.description,
    priority: 15,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        const timesByUser = new Map<string, number[]>();
        const items = [];
        for (const it of data.items) {
          const uid = it.meta.userId ?? "";
          const arr = timesByUser.get(uid) ?? [];
          const within = arr.filter((t) => it.time - t <= win);
          if (within.length >= max) continue;
          within.push(it.time);
          timesByUser.set(uid, within);
          items.push(it);
        }
        return { ...data, items };
      },
    },
  };
}

createRateLimitPlugin.meta = doc as PluginDoc;
`,oS=`import type {
  DanmakuPlugin,
  DanmakuPluginContext,
  Rect,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface SafeZoneConfig {
  /**
   * 消费方注入的避让区 provider（如接 MediaPipe 时返回实时人物矩形）。
   * 内核每帧调用，绝不阻塞 60fps 渲染；返回最新已知避让区即可。
   */
  provider?: () => Rect[];
  /** 静态安全区：保留顶部/底部条带（比例 0..1），中间留空防遮挡（默认 {top:0.18,bottom:0.12}） */
  reservedBands?: { top?: number; bottom?: number };
}

/**
 * SafeZonePlugin —— 防遮挡（轨道分配策略，数据面契约）。
 * 不依赖任何 ML：只把「避让区来源」写入运行时 shared（avoidZoneProvider），
 * 内核每帧读取并让轨道调度避开这些区域。默认静态安全区（顶/底条带）即零 ML 防遮挡；
 * 消费方接 MediaPipe（Selfie Seg 掩膜→矩形 / Pose 点→凸包）时把 provider 传进来即可。
 *
 * 关键解耦：发布包不捆绑 MediaPipe，体积预算不受影响；ML 跑在消费方 Worker / 独立管线，
 * 低频产出避让区，内核同步消费上一帧已知区（人不会瞬移，几帧延迟可接受）。
 */
export function createSafeZonePlugin(
  config: SafeZoneConfig = {}
): DanmakuPlugin {
  const bands = config.reservedBands ?? { top: 0.18, bottom: 0.12 };

  return {
    name: "safe-zone",
    version: "0.1.0",
    description: doc.description,
    priority: 34,
    enabled: true,
    hooks: {
      onMount: (context: DanmakuPluginContext) => {
        const shared = context.shared;
        if (config.provider) {
          shared.set("avoidZoneProvider", config.provider);
          return;
        }
        shared.set("avoidZoneProvider", () => {
          const { width, height } = context.getSize();
          const zones: Rect[] = [];
          if (bands.top) {
            zones.push({ x: 0, y: 0, w: width, h: height * bands.top });
          }
          if (bands.bottom) {
            zones.push({
              x: 0,
              y: height * (1 - bands.bottom),
              w: width,
              h: height * bands.bottom,
            });
          }
          return zones;
        });
      },
    },
  };
}

createSafeZonePlugin.meta = doc as PluginDoc;
`,iS=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
  DanmakuItem,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface SensitiveFilterConfig {
  /** 敏感词列表（子串匹配） */
  words?: string[];
  /** 打码字符，默认 "*" */
  mask?: string;
  /** mask=打码保留该条；hide=直接删除整条 */
  mode?: "mask" | "hide";
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^\${}()|[\\]\\\\]/g, "\\\\$&");
}

/**
 * SensitiveFilterPlugin —— 敏感词过滤（数据面）。
 * transformData 阶段处理：命中词按 mode 打码或删除；打码条标记 renderHint.masked，
 * 由 canvas 内核照常绘制（保留弹幕流连续性，避免闪烁）。
 */
export function createSensitiveFilterPlugin(
  config: SensitiveFilterConfig = {}
): DanmakuPlugin {
  const words = config.words ?? [];
  const mask = config.mask ?? "*";
  const mode = config.mode ?? "mask";
  const regex =
    words.length > 0
      ? new RegExp(\`(\${words.map(escapeRegExp).join("|")})\`, "g")
      : null;

  return {
    name: "sensitive-filter",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        if (!regex) return data;
        const items: DanmakuItem[] = [];
        for (const it of data.items) {
          if (mode === "hide" && regex.test(it.text)) {
            regex.lastIndex = 0;
            continue;
          }
          const newText = it.text.replace(regex, (m) => mask.repeat(m.length));
          regex.lastIndex = 0;
          const masked = newText !== it.text;
          items.push(
            masked
              ? {
                  ...it,
                  text: newText,
                  renderHint: { ...it.renderHint, masked: true },
                }
              : it
          );
        }
        return { ...data, items };
      },
    },
  };
}

createSensitiveFilterPlugin.meta = doc as PluginDoc;
`,lS=`import { useState } from "react";
import type {
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface SettingsPanelConfig {
  /** 初始不透明度，默认 1 */
  opacity?: number;
  /** 初始速度系数，默认 1 */
  speed?: number;
  /** 初始轨道高度（px），默认 28 */
  trackHeight?: number;
  /** 变更回调（消费方可据此更新 DanmakuCore props）；与 bus 广播并存 */
  onChange?: (s: { opacity: number; speed: number; trackHeight: number }) => void;
}

const PANEL: React.CSSProperties = {
  position: "absolute",
  top: 8,
  right: 8,
  pointerEvents: "auto",
  background: "rgba(20,20,24,0.82)",
  color: "#fff",
  borderRadius: 10,
  padding: "10px 12px",
  font: "12px/1.5 system-ui, sans-serif",
  width: 200,
  boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
};
const ROW: React.CSSProperties = { marginBottom: 8, display: "flex", flexDirection: "column", gap: 2 };
const LABEL: React.CSSProperties = { opacity: 0.8, display: "flex", justifyContent: "space-between" };

function SettingsPanel({
  context,
  opacity: initialOpacity = 1,
  speed: initialSpeed = 1,
  trackHeight: initialTrackHeight = 28,
  onChange,
}: {
  context: DanmakuPluginContext;
  opacity?: number;
  speed?: number;
  trackHeight?: number;
  onChange?: SettingsPanelConfig["onChange"];
}) {
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState(initialOpacity);
  const [speed, setSpeed] = useState(initialSpeed);
  const [trackHeight, setTrackHeight] = useState(initialTrackHeight);

  const apply = (patch: Partial<{ opacity: number; speed: number; trackHeight: number }>) => {
    const next = { opacity, speed, trackHeight, ...patch };
    setOpacity(next.opacity);
    setSpeed(next.speed);
    setTrackHeight(next.trackHeight);
    context.bus.emit("danmaku:settings", next);
    onChange?.(next);
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{ ...PANEL, width: "auto", pointerEvents: "auto", cursor: "pointer" }}
      >
        设置 ⚙
      </button>
    );
  }

  return (
    <div style={PANEL}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <strong>弹幕设置</strong>
        <button type="button" onClick={() => setOpen(false)} style={btnStyle}>
          ✕
        </button>
      </div>
      <label style={ROW}>
        <span style={LABEL}>不透明度 <b>{opacity.toFixed(2)}</b></span>
        <input
          type="range" min={0.2} max={1} step={0.05} value={opacity}
          onChange={(e) => apply({ opacity: Number(e.target.value) })}
        />
      </label>
      <label style={ROW}>
        <span style={LABEL}>速度 <b>{speed.toFixed(2)}×</b></span>
        <input
          type="range" min={0.5} max={2} step={0.1} value={speed}
          onChange={(e) => apply({ speed: Number(e.target.value) })}
        />
      </label>
      <label style={ROW}>
        <span style={LABEL}>轨道高度 <b>{trackHeight}px</b></span>
        <input
          type="range" min={20} max={48} step={2} value={trackHeight}
          onChange={(e) => apply({ trackHeight: Number(e.target.value) })}
        />
      </label>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  pointerEvents: "auto",
  background: "transparent",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  fontSize: 12,
};

/**
 * SettingsPanelPlugin —— 弹幕设置面板（UI 面，renderOverlay）。
 * 浮层提供不透明度/速度/轨道高度滑块，变更经 bus 广播 "danmaku:settings"，
 * 由消费方（demo）监听并更新 DanmakuCore 的 props。面板本身不参与 canvas 渲染。
 */
export function createSettingsPanelPlugin(
  config: SettingsPanelConfig = {}
): DanmakuPlugin {
  return {
    name: "settings-panel",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    enabled: true,
    hooks: {
      renderOverlay: (context: DanmakuPluginContext) => (
        <SettingsPanel
          context={context}
          opacity={config.opacity}
          speed={config.speed}
          trackHeight={config.trackHeight}
          onChange={config.onChange}
        />
      ),
    },
  };
}

createSettingsPanelPlugin.meta = doc as PluginDoc;
`,aS=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface SpeedControlConfig {
  /** 飞行时长系数：>1 更慢（更易读），<1 更快，默认 1 */
  factor?: number;
  /** 飞行时长下限（秒），默认 4 */
  minDuration?: number;
  /** 飞行时长上限（秒），默认 16 */
  maxDuration?: number;
  /** 缺省飞行时长（item 未指定 duration 时使用），默认 8 */
  defaultDuration?: number;
}

/**
 * SpeedControlPlugin —— 速度控制（数据面，写 duration）。
 * 把每条弹幕的飞行时长按 factor 缩放并夹在 [min,max]；未指定 duration 时
 * 用 defaultDuration 作为基准。影响滚动/逆向弹幕速度，top/bottom 影响停留时长。
 */
export function createSpeedControlPlugin(
  config: SpeedControlConfig = {}
): DanmakuPlugin {
  const factor = config.factor ?? 1;
  const minDuration = config.minDuration ?? 4;
  const maxDuration = config.maxDuration ?? 16;
  const defaultDuration = config.defaultDuration ?? 8;

  const clamp = (v: number) => Math.min(maxDuration, Math.max(minDuration, v));

  return {
    name: "speed-control",
    version: "0.1.0",
    description: doc.description,
    priority: 26,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        const items = data.items.map((it) => {
          const base = it.duration ?? defaultDuration;
          return { ...it, duration: clamp(base * factor) };
        });
        return { ...data, items };
      },
    },
  };
}

createSpeedControlPlugin.meta = doc as PluginDoc;
`,sS=`import type {
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface StatsBarConfig {
  /** 是否显示各模式计数，默认 true */
  showModes?: boolean;
}

const WRAP: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  pointerEvents: "auto",
  background: "rgba(20,20,24,0.55)",
  borderRadius: 8,
  padding: "4px 10px",
  font: "12px/1.4 system-ui, sans-serif",
  color: "#fff",
};
const ITEM: React.CSSProperties = { whiteSpace: "nowrap" };

function StatsBar({
  context,
  showModes,
}: {
  context: DanmakuPluginContext;
  showModes: boolean;
}) {
  const items = context.data.items;
  const total = items.length;
  const byMode: Record<string, number> = {};
  let pinned = 0;
  for (const it of items) {
    byMode[it.mode] = (byMode[it.mode] ?? 0) + 1;
    if (it.renderHint?.pinned) pinned++;
  }

  return (
    <div style={WRAP}>
      <span style={ITEM}>弹幕总数 <b>{total}</b></span>
      <span style={ITEM}>置顶 <b>{pinned}</b></span>
      {showModes &&
        Object.entries(byMode).map(([m, n]) => (
          <span key={m} style={ITEM}>
            {m} <b>{n}</b>
          </span>
        ))}
    </div>
  );
}

/**
 * StatsBarPlugin —— 弹幕统计条（UI 面，renderHeader）。
 * 读取领域上下文的 data 展示弹幕总数 / 置顶数 / 各模式计数（来自 transformData 后的数据集）。
 * 纯展示，不修改弹幕流；实时性取决于消费方传入的 items 更新频率。
 */
export function createStatsBarPlugin(
  config: StatsBarConfig = {}
): DanmakuPlugin {
  const showModes = config.showModes ?? true;
  return {
    name: "stats-bar",
    version: "0.1.0",
    description: doc.description,
    priority: 33,
    enabled: true,
    hooks: {
      renderHeader: (context: DanmakuPluginContext) => (
        <StatsBar context={context} showModes={showModes} />
      ),
    },
  };
}

createStatsBarPlugin.meta = doc as PluginDoc;
`,uS=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface StylePresetConfig {
  /** 字体族（覆盖，渲染器优先采用），默认 "system-ui, sans-serif" */
  fontFamily?: string;
  /** 字重，默认 400 */
  fontWeight?: number;
  /** 基础字号（仅当单条未指定时生效），默认 22 */
  fontSize?: number;
}

/**
 * StylePresetPlugin —— 统一样式预设（数据面）。
 * 为未显式指定样式的弹幕补齐 fontFamily / fontWeight / fontSize 默认，
 * 让整场弹幕风格统一；已带 meta 样式的弹幕不被覆盖。
 */
export function createStylePresetPlugin(
  config: StylePresetConfig = {}
): DanmakuPlugin {
  const fontFamily =
    config.fontFamily ?? 'system-ui, -apple-system, "PingFang SC", sans-serif';
  const fontWeight = config.fontWeight ?? 400;
  const fontSize = config.fontSize ?? 22;

  return {
    name: "style-preset",
    version: "0.1.0",
    description: doc.description,
    priority: 24,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        const items = data.items.map((it) => {
          const meta = { ...it.meta };
          if (!meta.fontFamily) meta.fontFamily = fontFamily;
          if (!meta.fontWeight) meta.fontWeight = fontWeight;
          if (!meta.fontSize) meta.fontSize = fontSize;
          return { ...it, meta };
        });
        return { ...data, items };
      },
    },
  };
}

createStylePresetPlugin.meta = doc as PluginDoc;
`,cS=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface TrackStrategyConfig {
  /** 管理员/高等级用户钉到顶部轨道（track=0），默认 true */
  vipTop?: boolean;
  /** 触发 vipTop 的等级阈值，默认 18 */
  vipLevel?: number;
  /** 其余滚动弹幕强制分散起始轨道（避免全挤顶部），默认 false */
  spread?: boolean;
}

/**
 * TrackStrategyPlugin —— 轨道分配策略（数据面，写 renderHint.track）。
 * vipTop：管理员/高等级用户的滚动弹幕建议钉到顶部轨道（track=0），
 * 由调度器在空闲且不落避让区时采用（见 render.ts assignTrack 的 forced 分支）。
 * 该插件只产出「建议轨道」，是否采用由内核调度器最终裁决，避免硬冲突。
 */
export function createTrackStrategyPlugin(
  config: TrackStrategyConfig = {}
): DanmakuPlugin {
  const vipTop = config.vipTop ?? true;
  const vipLevel = config.vipLevel ?? 18;
  const spread = config.spread ?? false;

  return {
    name: "track-strategy",
    version: "0.1.0",
    description: doc.description,
    priority: 25,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        const items = data.items.map((it, i) => {
          if (it.renderHint?.track != null) return it;
          if (
            vipTop &&
            it.mode === "scroll" &&
            (it.meta.isAdmin || (it.meta.level ?? 0) >= vipLevel)
          ) {
            return { ...it, renderHint: { ...it.renderHint, track: 0 } };
          }
          if (spread && it.mode === "scroll") {
            return { ...it, renderHint: { ...it.renderHint, track: i % 3 } };
          }
          return it;
        });
        return { ...data, items };
      },
    },
  };
}

createTrackStrategyPlugin.meta = doc as PluginDoc;
`,dS=`import type {
  DanmakuData,
  DanmakuPlugin,
  DanmakuPluginContext,
} from "../../components/DanmakuPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface UserMuteConfig {
  /** 被禁言（静音）的用户 id 列表 */
  users?: string[];
  /** 管理员即便在列表中也不静音，默认 true */
  allowAdmins?: boolean;
}

/**
 * UserMutePlugin —— 用户静音（数据面）。
 * users 中的用户弹幕被删除（其粉丝牌 / 高赞置顶等后续插件也不再处理）。
 * allowAdmins=true 时管理员豁免，避免误伤房管。
 */
export function createUserMutePlugin(
  config: UserMuteConfig = {}
): DanmakuPlugin {
  const set = new Set(config.users ?? []);
  const allowAdmins = config.allowAdmins ?? true;

  return {
    name: "user-mute",
    version: "0.1.0",
    description: doc.description,
    priority: 18,
    enabled: true,
    hooks: {
      transformData: (
        _context: DanmakuPluginContext,
        data: DanmakuData
      ): DanmakuData => {
        if (set.size === 0) return data;
        const items = data.items.filter((it) => {
          const uid = it.meta.userId;
          if (!uid || !set.has(uid)) return true;
          if (allowAdmins && it.meta.isAdmin) return true;
          return false;
        });
        return { ...data, items };
      },
    },
  };
}

createUserMutePlugin.meta = doc as PluginDoc;
`,dw={content:"内容治理 · content",emphasis:"视觉强调 · emphasis",interaction:"互动指令 · interaction",layout:"轨道策略 · layout",control:"控制层 · control"},uc=["content","emphasis","interaction","layout","control"],cc=Object.assign({"/src/custom-plugins/AtMentionPlugin/doc.json":ks,"/src/custom-plugins/AuditLogPlugin/doc.json":Ms,"/src/custom-plugins/CmdParsePlugin/doc.json":bs,"/src/custom-plugins/ColorPolicyPlugin/doc.json":_s,"/src/custom-plugins/CommandInputPlugin/doc.json":Ns,"/src/custom-plugins/DedupPlugin/doc.json":Es,"/src/custom-plugins/EmojiRenderPlugin/doc.json":xs,"/src/custom-plugins/FanBadgePlugin/doc.json":gs,"/src/custom-plugins/FilterTogglePlugin/doc.json":js,"/src/custom-plugins/GiftComboPlugin/doc.json":Ss,"/src/custom-plugins/KeywordBlockPlugin/doc.json":ys,"/src/custom-plugins/KeywordHighlightPlugin/doc.json":vs,"/src/custom-plugins/LangFilterPlugin/doc.json":ws,"/src/custom-plugins/PinnedTopPlugin/doc.json":hs,"/src/custom-plugins/RateLimitPlugin/doc.json":Ts,"/src/custom-plugins/SafeZonePlugin/doc.json":Rs,"/src/custom-plugins/SensitiveFilterPlugin/doc.json":ps,"/src/custom-plugins/SettingsPanelPlugin/doc.json":Ls,"/src/custom-plugins/SpeedControlPlugin/doc.json":Ds,"/src/custom-plugins/StatsBarPlugin/doc.json":$s,"/src/custom-plugins/StylePresetPlugin/doc.json":Cs,"/src/custom-plugins/TrackStrategyPlugin/doc.json":Is,"/src/custom-plugins/UserMutePlugin/doc.json":Ps}),dc=Object.assign({"/src/custom-plugins/AtMentionPlugin/create.tsx":Hk,"/src/custom-plugins/AuditLogPlugin/create.tsx":Wk,"/src/custom-plugins/CmdParsePlugin/create.tsx":Gk,"/src/custom-plugins/ColorPolicyPlugin/create.tsx":Vk,"/src/custom-plugins/CommandInputPlugin/create.tsx":Kk,"/src/custom-plugins/DedupPlugin/create.tsx":Qk,"/src/custom-plugins/EmojiRenderPlugin/create.tsx":Zk,"/src/custom-plugins/FanBadgePlugin/create.tsx":Yk,"/src/custom-plugins/FilterTogglePlugin/create.tsx":Xk,"/src/custom-plugins/GiftComboPlugin/create.tsx":qk,"/src/custom-plugins/KeywordBlockPlugin/create.tsx":Jk,"/src/custom-plugins/KeywordHighlightPlugin/create.tsx":eS,"/src/custom-plugins/LangFilterPlugin/create.tsx":nS,"/src/custom-plugins/PinnedTopPlugin/create.tsx":tS,"/src/custom-plugins/RateLimitPlugin/create.tsx":rS,"/src/custom-plugins/SafeZonePlugin/create.tsx":oS,"/src/custom-plugins/SensitiveFilterPlugin/create.tsx":iS,"/src/custom-plugins/SettingsPanelPlugin/create.tsx":lS,"/src/custom-plugins/SpeedControlPlugin/create.tsx":aS,"/src/custom-plugins/StatsBarPlugin/create.tsx":sS,"/src/custom-plugins/StylePresetPlugin/create.tsx":uS,"/src/custom-plugins/TrackStrategyPlugin/create.tsx":cS,"/src/custom-plugins/UserMutePlugin/create.tsx":dS}),Qf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function fS(e){const n=Object.keys(dc).find(o=>Qf(o)===e),t=n?dc[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function mS(e){const n=Object.keys(cc).find(t=>Qf(t)===e);return n?cc[n]:{name:e,description:"（缺少 doc.json）"}}const pS=[{dir:"SensitiveFilterPlugin",group:"content",make:()=>rt({words:["广告","代刷","违规","政治敏感"],mode:"mask"})},{dir:"KeywordBlockPlugin",group:"content",make:()=>Ht({words:["竞品","违规"]})},{dir:"LangFilterPlugin",group:"content",make:()=>Gt({allow:["cjk","latin"]})},{dir:"EmojiRenderPlugin",group:"content",make:()=>lt()},{dir:"AtMentionPlugin",group:"content",make:()=>at()},{dir:"UserMutePlugin",group:"content",make:()=>Wt({users:["bot"]})},{dir:"DedupPlugin",group:"content",make:()=>Kt({window:5})},{dir:"RateLimitPlugin",group:"content",make:()=>no({max:3,window:6})},{dir:"AuditLogPlugin",group:"content",make:()=>to()},{dir:"PinnedTopPlugin",group:"emphasis",make:()=>it({minLevel:20})},{dir:"KeywordHighlightPlugin",group:"emphasis",make:()=>Bt({keywords:["福利","抽奖","高能"]})},{dir:"GiftComboPlugin",group:"emphasis",make:()=>st()},{dir:"ColorPolicyPlugin",group:"emphasis",make:()=>Vt()},{dir:"StylePresetPlugin",group:"emphasis",make:()=>Xr()},{dir:"CmdParsePlugin",group:"interaction",make:()=>ut()},{dir:"FanBadgePlugin",group:"interaction",make:()=>ot({badges:{u1:{name:"老粉",level:6,color:"#ff7a29"},u2:{name:"舰长",level:12,color:"#5fd3c8"}}})},{dir:"TrackStrategyPlugin",group:"layout",make:()=>Li()},{dir:"SpeedControlPlugin",group:"layout",make:()=>qr({factor:1})},{dir:"SafeZonePlugin",group:"control",make:()=>gn({reservedBands:{top:.18,bottom:.12}})},{dir:"SettingsPanelPlugin",group:"control",make:()=>Qt()},{dir:"FilterTogglePlugin",group:"control",make:()=>Zt()},{dir:"CommandInputPlugin",group:"control",make:()=>Yt()},{dir:"StatsBarPlugin",group:"control",make:()=>Xt()}],fa=pS.map(e=>{const n=mS(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:fS(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>uc.indexOf(e.group)-uc.indexOf(n.group)||n.priority-e.priority),fw=["SensitiveFilterPlugin","KeywordHighlightPlugin","PinnedTopPlugin","FanBadgePlugin","EmojiRenderPlugin","AtMentionPlugin","GiftComboPlugin","ColorPolicyPlugin","CmdParsePlugin","SafeZonePlugin","SettingsPanelPlugin","FilterTogglePlugin","CommandInputPlugin","StatsBarPlugin"];function gS({entry:e,order:n}){var a;const{meta:t,Stage:r,source:o,file:i}=e,l=String(n).padStart(2,"0");return c.jsxs("article",{children:[c.jsx("header",{className:"page-head",children:c.jsxs("div",{children:[c.jsxs("p",{className:"eyebrow",children:[l," · ",((a=Gf[t.group])==null?void 0:a.label)??t.group]}),c.jsx("h1",{className:"page-title",children:t.title})]})}),t.intro?c.jsx("p",{className:"page-sub",children:t.intro}):null,c.jsx("section",{className:"demo-stage",children:c.jsx(r,{})}),c.jsxs("section",{className:"demo-src-wrap",children:[c.jsxs("div",{className:"demo-src-head",children:[c.jsxs("span",{className:"demo-src-title",children:["源码 · ",i]}),c.jsx("span",{className:"demo-src-hint",children:"下面这份就是上面正在跑的那份"})]}),c.jsx(Mk,{code:o,title:i,collapseAfter:28,maxHeight:460})]}),c.jsx(Bk,{source:o,plugins:fa})]})}const hS=[rt({words:["广告","代刷","违规"],mode:"mask"}),ot({badges:{u1:{name:"老粉",level:6,color:"#ff7a29"},u2:{name:"舰长",level:12,color:"#5fd3c8"}}}),it({minLevel:20}),Bt({keywords:["福利","抽奖","高能"]}),lt(),at(),st(),Vt(),ut(),gn({reservedBands:{top:.18,bottom:.12}}),Qt(),Zt(),Yt(),Xt()],vS={id:"live-streaming",title:"直播弹幕",group:"直播",ref:{label:"B站 / 抖音直播",url:"https://live.bilibili.com"},pain:"直播弹幕既要热闹又不能乱：敏感词、刷屏、广告、人物遮挡全得管。",plugs:[{fn:"createSensitiveFilterPlugin",cfg:'words: ["广告","代刷"], mode: "mask"',why:"命中敏感词打码，保留整条不闪烁"},{fn:"createFanBadgePlugin",why:"给老粉 / 舰长挂粉丝牌"},{fn:"createPinnedTopPlugin",cfg:"minLevel: 20",why:"高等级发言置顶固定"},{fn:"createKeywordHighlightPlugin",why:"福利/抽奖/高能 高亮"},{fn:"createGiftComboPlugin",why:"同一用户连送礼物合并成 xN"},{fn:"createSafeZonePlugin",why:"顶/底静态安全区，防主播被遮"},{fn:"createSettingsPanelPlugin",why:"观众调透明度/速度/轨道"},{fn:"createCommandInputPlugin",why:"观众发弹幕或 /clear 指令"}],props:["items={SAMPLE_BASIC}","currentTime={t}","playing"],tone:"dark"};function yS(){return c.jsx(eo,{plugins:hS,items:de,height:360,topInset:48,bottomInset:56})}const PS=Object.freeze(Object.defineProperty({__proto__:null,default:yS,meta:vS},Symbol.toStringTag,{value:"Module"})),xS="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",kS="https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",SS="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14",fc=[{label:"示例 · 人物镜头 A",url:"./samples/sample-a.mp4"},{label:"示例 · 人物镜头 B",url:"./samples/sample-b.mp4"}],Eo=480,wS=[0,11,12,23,24,25,26],_S=.3,mc="contain",CS=[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[15,17],[15,19],[15,21],[16,18],[16,20],[16,22],[23,25],[25,27],[27,29],[27,31],[24,26],[26,28],[28,30],[28,32]],ES=[{id:"b1",text:"这段卡点太准了",mode:"scroll",time:.5,meta:{}},{id:"b2",text:"导演加个鸡腿",mode:"scroll",time:1.4,meta:{}},{id:"b3",text:"镜头感绝了",mode:"scroll",time:2.7,meta:{}},{id:"b4",text:"背景音乐叫啥",mode:"scroll",time:3.4,meta:{}},{id:"b5",text:"慢动作好评",mode:"scroll",time:4.8,meta:{}},{id:"b6",text:"这走位有点东西",mode:"scroll",time:6.1,meta:{}},{id:"b7",text:"刚进来就赶上了",mode:"scroll",time:7.3,meta:{}},{id:"b8",text:"已三连",mode:"scroll",time:9.1,meta:{}},{id:"b9",text:"回放看起来",mode:"scroll",time:10.4,meta:{}}],bS=[...de,...ES];function DS(){var He;const e=x.useRef(null),n=x.useRef(null),t=x.useRef(null),r=x.useRef(null),o=x.useRef([]),i=x.useRef(null),l=x.useRef(null);x.useRef(0);const a=x.useRef(performance.now()),s=x.useRef(null),u=x.useRef(0),[d,f]=x.useState("upload"),[p,v]=x.useState(((He=fc[0])==null?void 0:He.url)??null),[y,P]=x.useState("自动播放示例视频 · 弹幕穿透叠在视频上；PoseLandmarker 就绪后骨骼识别并绕开人物"),[k,g]=x.useState(!1),[m,h]=x.useState(0),[S,b]=x.useState(!1),[j,L]=x.useState(0);x.useEffect(()=>{let D=0;const w=_=>{L((_-a.current)/1e3%12),D=requestAnimationFrame(w)};return D=requestAnimationFrame(w),()=>cancelAnimationFrame(D)},[]);const R=x.useMemo(()=>()=>o.current,[]),O=x.useMemo(()=>ms(Yr,[gn({provider:R})]),[R]),$=x.useMemo(()=>D=>{const w=t.current,_=e.current;if(!w||!_)return;const E=Math.min(window.devicePixelRatio||1,2),T=_.clientWidth,M=_.clientHeight;w.width!==Math.round(T*E)&&(w.width=Math.round(T*E),w.height=Math.round(M*E));const I=w.getContext("2d");if(I){I.setTransform(E,0,0,E,0,0),I.clearRect(0,0,T,M);for(const z of o.current)I.fillStyle="rgba(95,211,200,0.10)",I.fillRect(z.x,z.y,z.w,z.h),I.strokeStyle="rgba(95,211,200,0.95)",I.lineWidth=2,I.strokeRect(z.x,z.y,z.w,z.h);if(D.length){I.strokeStyle="rgba(255,122,41,0.85)",I.lineWidth=2;for(const[z,Z]of CS){const K=D[z],ge=D[Z];K&&ge&&(I.beginPath(),I.moveTo(K.x,K.y),I.lineTo(ge.x,ge.y),I.stroke())}I.fillStyle="#ff7a29";for(const z of D)I.beginPath(),I.arc(z.x,z.y,3,0,Math.PI*2),I.fill()}}},[]),F=x.useMemo(()=>async()=>{if(i.current)return i.current;const w=await import(SS),_=await w.FilesetResolver.forVisionTasks(xS),E=await w.PoseLandmarker.createFromOptions(_,{baseOptions:{modelAssetPath:kS,delegate:"GPU"},runningMode:"VIDEO",numPoses:1});return i.current=w,l.current=E,w},[]);x.useEffect(()=>{if(d!=="camera")return;let D=null,w=!1;return(async()=>{try{if(P("正在请求摄像头权限…"),D=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}),w){D.getTracks().forEach(E=>E.stop());return}const _=n.current;if(!_||(_.srcObject=D,await _.play(),P("加载 MediaPipe PoseLandmarker…"),await F(),w))return;g(!0),P("已连接 · 实时骨骼识别 → 人物避让区，弹幕自动绕开人物")}catch{if(w)return;P("摄像头不可用（无设备 / 未授权 / 非安全上下文）。已自动切回「模拟人物」。"),f("synthetic")}})(),()=>{w=!0,D==null||D.getTracks().forEach(E=>E.stop());const _=n.current;_&&(_.srcObject=null)}},[d,F]),x.useEffect(()=>{if(d!=="camera"&&d!=="upload")return;let D=!1,w=0;s.current||(s.current=document.createElement("canvas"));const _=s.current,E=_.getContext("2d",{willReadFrequently:!0});return(async()=>{try{if(await F(),D)return;g(!0);const T=()=>{var Z;if(D)return;const M=n.current,I=e.current,z=l.current;if(M&&I&&z&&M.readyState>=2&&M.videoWidth>0&&E){const K=M.videoWidth,ge=M.videoHeight,se=Math.round(ge*Eo/K);(_.width!==Eo||_.height!==se)&&(_.width=Eo,_.height=se),E.drawImage(M,0,0,Eo,se);const hn=(Z=z.detectForVideo(_,performance.now()).landmarks)==null?void 0:Z[0];if(hn&&hn.length){const qt=I.clientWidth,Un=I.clientHeight,xe=mc==="cover"?Math.max(qt/K,Un/ge):Math.min(qt/K,Un/ge),ro=K*xe,oo=ge*xe,Os=(qt-ro)/2,As=(Un-oo)/2;let Jt=1,er=1,io=0,lo=0;for(const nr of wS){const tr=hn[nr];tr&&(Jt=Math.min(Jt,tr.x),io=Math.max(io,tr.x),er=Math.min(er,tr.y),lo=Math.max(lo,tr.y))}io>Jt&&lo>er?o.current=[{x:Os+Jt*ro-14,y:As+er*oo-14,w:(io-Jt)*ro+14*2,h:(lo-er)*oo+14*2}]:o.current=[],$(hn.map(nr=>({x:Os+nr.x*ro,y:As+nr.y*oo}))),u.current=performance.now()/1e3}else performance.now()/1e3-u.current>_S&&(o.current=[],$([]))}w=requestAnimationFrame(T)};w=requestAnimationFrame(T)}catch{if(D)return;g(!1),P("视频播放中 · 弹幕穿透（MediaPipe 模型未加载，暂不做骨骼绕人）")}})(),()=>{D=!0,cancelAnimationFrame(w)}},[d,F,$]),x.useEffect(()=>{if(d!=="upload"||!p)return;const D=n.current;D&&(D.srcObject=null,D.loop=!0,D.muted=!0,D.getAttribute("src")!==p&&(D.setAttribute("src",p),D.load()),D.play().catch(()=>{}))},[d,p]);const oe=D=>{var _;const w=(_=D.target.files)==null?void 0:_[0];w&&(p&&URL.revokeObjectURL(p),v(URL.createObjectURL(w)),f("upload"))},ae=D=>{const w=D.target.value;w&&(p&&p.startsWith("blob:")&&URL.revokeObjectURL(p),v(w),f("upload"))};x.useEffect(()=>{if(d!=="synthetic")return;let D=0;const w=()=>{const _=e.current;if(_){const E=_.clientWidth,T=_.clientHeight,M=performance.now()/1e3,I=E*(.5+.3*Math.sin(M*.6)),z=T*(.52+.12*Math.sin(M*.9)),Z=Math.min(E,T)*.2,K=Math.min(E,T)*.55;o.current=[{x:I-Z/2,y:z-K/2,w:Z,h:K}],$([])}D=requestAnimationFrame(w)};return D=requestAnimationFrame(w),()=>cancelAnimationFrame(D)},[d,$]),x.useEffect(()=>{if(d==="idle"){o.current=[];const D=t.current,w=D==null?void 0:D.getContext("2d");w&&D&&w.clearRect(0,0,D.width,D.height)}},[d]);const H=d==="camera"||d==="upload",Xe=H&&k;return c.jsxs("div",{ref:e,"data-danmaku-root":!0,onClick:()=>{const D=n.current;D&&D.paused&&(d==="upload"||d==="camera")&&D.play().catch(()=>{})},style:{position:"relative",width:"100%",height:420,borderRadius:8,overflow:"hidden",background:"linear-gradient(135deg, #0d1424, #1b2a4a 60%, #2a1730)",boxShadow:"inset 0 0 80px rgba(0,0,0,0.5)"},children:[c.jsx("video",{ref:n,autoPlay:!0,muted:!0,playsInline:!0,loop:!0,preload:"auto",src:d==="upload"?p??void 0:void 0,onTimeUpdate:D=>h(D.currentTarget.currentTime),onPlay:()=>b(!0),onPause:()=>b(!1),onError:D=>{var _;const w=(_=D.currentTarget.error)==null?void 0:_.code;b(!1),P(`视频无法播放（MediaError ${w??"?"}）· 已切「模拟人物」，弹幕穿透与绕人逻辑照跑`),f("synthetic")},style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:mc,opacity:H?1:0,transition:"opacity .3s",zIndex:0}}),c.jsx(O,{items:bS,currentTime:j,playing:!0,topInset:44,bottomInset:88,containerStyle:{position:"absolute",inset:0,width:"100%",height:"100%"}}),c.jsx("canvas",{ref:t,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:5}}),H&&!S?c.jsx("button",{type:"button","aria-label":"播放视频",onClick:()=>{var D;return(D=n.current)==null?void 0:D.play().catch(()=>{})},style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:7,width:64,height:64,borderRadius:32,border:"1px solid rgba(255,255,255,0.28)",background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:24,lineHeight:1,cursor:"pointer",backdropFilter:"blur(2px)"},children:"▶"}):null,c.jsxs("div",{style:{position:"absolute",top:10,left:10,right:10,zIndex:6,display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",pointerEvents:"none"},children:[c.jsx("span",{style:{fontSize:12,color:Xe?"#5fd3c8":H?"#f5c24b":"#9aa3b2",background:"rgba(0,0,0,0.45)",padding:"4px 8px",borderRadius:6},children:Xe?"● 骨骼识别中 · 弹幕绕开人物":d==="synthetic"?"● 模拟人物 · 防遮挡演练":H?"● 视频播放中 · 弹幕穿透叠加":"○ 未启动"}),H?c.jsx("span",{style:{fontSize:12,color:m>0?"#7fd08c":"#9aa3b2",background:"rgba(0,0,0,0.45)",padding:"4px 8px",borderRadius:6},children:m>0?`▶ 播放中 ${m.toFixed(1)}s`:"⏸ 未播放（点舞台起播）"}):null]}),c.jsxs("div",{style:{position:"absolute",left:10,bottom:10,right:10,zIndex:6,display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[c.jsx("button",{type:"button",className:"mp-btn",onClick:()=>f("camera"),children:"启动摄像头"}),c.jsxs("select",{className:"mp-btn",defaultValue:"",onChange:ae,children:[c.jsx("option",{value:"",disabled:!0,children:"示例视频"}),fc.map(D=>c.jsx("option",{value:D.url,children:D.label},D.url))]}),c.jsx("button",{type:"button",className:"mp-btn",onClick:()=>{var D;return(D=r.current)==null?void 0:D.click()},children:"上传视频"}),c.jsx("button",{type:"button",className:"mp-btn",onClick:()=>f("synthetic"),children:"模拟人物"}),c.jsx("input",{ref:r,type:"file",accept:"video/*",style:{display:"none"},onChange:oe}),c.jsx("span",{className:"mp-status",children:y})]})]})}const RS={id:"media-occlusion",title:"MediaPipe 实时防遮挡",group:"防遮挡",ref:{label:"MediaPipe Pose",url:"https://github.com/google-ai-edge/mediapipe"},pain:"视频里的人物被弹幕糊住是硬伤：怎么让弹幕自动绕开人？答案不是纯骨骼点，而是用骨骼点算避让区。",plugs:[{fn:"createSafeZonePlugin",cfg:"provider /* MediaPipe → Rect[] */",why:"把消费方算出的避让区注入内核，轨道调度自动避开人物"}],props:["items={STREAM}","currentTime={t}","playing","avoidZoneProvider"],video:!0,note:"发布包不捆绑 MediaPipe（体积预算不受影响）。这里在 demo 里用 PoseLandmarker 取 33 个骨骼点，只用鼻/双肩/双髋这几个主体点算外接矩形当避让区（全骨架外接会随举手踢腿膨胀成整屏，弹幕就没地方走了）；内核每帧同步消费，几帧延迟对人无感。四种输入：示例视频（离线人物镜头）/ 上传视频（离线最稳）/ 摄像头（真实人物）/ 模拟人物（无设备回退）。4K 视频检测前降采样到 480px 宽，开销降一量级。弹幕穿透 = canvas 叠在视频之上、绕开人物框。",tone:"dark"};function LS(){return c.jsx(DS,{})}const jS=Object.freeze(Object.defineProperty({__proto__:null,default:LS,meta:RS},Symbol.toStringTag,{value:"Module"})),NS=[ot({badges:{u1:{name:"老粉",level:6,color:"#ff7a29"},u2:{name:"舰长",level:12,color:"#5fd3c8"}}}),at(),st(),ut(),lt(),it({minLevel:20}),gn({reservedBands:{top:.16,bottom:.1}})],$S={id:"interaction",title:"互动玩法",group:"互动",ref:{label:"礼物 / 粉丝牌 / 指令",url:"https://live.bilibili.com"},pain:"观众互动是直播的灵魂：识别粉丝、聚合礼物、解析指令、高亮提及，缺一个都不完整。",plugs:[{fn:"createFanBadgePlugin",why:"老粉 / 舰长身份牌"},{fn:"createAtMentionPlugin",why:"@主播 等提及高亮"},{fn:"createGiftComboPlugin",why:"连送礼物合并 xN"},{fn:"createCmdParsePlugin",why:"解析 /clear、#lottery 等指令"},{fn:"createEmojiRenderPlugin",why:":rocket: 这类短码转表情"}],props:["items={SAMPLE_INTERACTION}","currentTime={t}","playing"],tone:"dark"};function TS(){return c.jsx(eo,{plugins:NS,items:Wf,height:340})}const MS=Object.freeze(Object.defineProperty({__proto__:null,default:TS,meta:$S},Symbol.toStringTag,{value:"Module"})),IS=[rt({words:["广告","代刷","违规","政治敏感"],mode:"mask"}),Ht({words:["竞品","违规"]}),Gt({allow:["cjk","latin"]}),Wt({users:["bot"]}),Kt({window:5}),no({max:3,window:6}),to(),gn({reservedBands:{top:.16,bottom:.1}})],OS={id:"content-moderation",title:"内容审核",group:"治理",ref:{label:"弹幕风控",url:"https://www.bilibili.com"},pain:"广告、代刷、刷屏机器人、违规语种——不拦就在公屏里炸开，必须进渲染前清干净。",plugs:[{fn:"createSensitiveFilterPlugin",cfg:'words: ["广告","代刷"], mode: "mask"',why:"命中打码保留整条"},{fn:"createKeywordBlockPlugin",cfg:'words: ["竞品"]',why:"硬屏蔽词直接删除"},{fn:"createLangFilterPlugin",cfg:'allow: ["cjk","latin"]',why:"按语种放行 / 过滤"},{fn:"createUserMutePlugin",cfg:'users: ["bot"]',why:"禁言指定用户"},{fn:"createDedupPlugin",why:"短时间重复弹幕去重"},{fn:"createRateLimitPlugin",why:"单用户限速防刷屏"},{fn:"createAuditLogPlugin",why:"旁路审计，不改流"}],props:["items={SAMPLE_MODERATION}","currentTime={t}","playing"],tone:"dark"};function AS(){return c.jsx(eo,{plugins:IS,items:Jr,height:340})}const FS=Object.freeze(Object.defineProperty({__proto__:null,default:AS,meta:OS},Symbol.toStringTag,{value:"Module"})),zS=[rt({words:["广告","代刷","违规"],mode:"mask"}),Ht({words:["竞品"]}),Gt({allow:["cjk","latin"]}),lt(),at(),Wt({users:["bot"]}),Kt({window:5}),no({max:3,window:6}),to(),it({minLevel:20}),Bt({keywords:["福利","抽奖","高能"]}),st(),Vt(),Xr(),ut(),ot({badges:{u1:{name:"老粉",level:6,color:"#ff7a29"},u2:{name:"舰长",level:12,color:"#5fd3c8"}}}),Li(),qr({factor:1}),gn({reservedBands:{top:.16,bottom:.1}}),Qt(),Zt(),Yt(),Xt()],US={id:"full-stack",title:"全功能中台",group:"综合",ref:{label:"23 插件全集",url:"https://github.com/frankvane/vane-components"},pain:"一个内核能不能承载全部业务语义？这里把 23 个插件一次开满，看组合的边界。",plugs:[{fn:"createSensitiveFilterPlugin",why:"内容治理起点：敏感词打码"},{fn:"createKeywordBlockPlugin",why:"硬屏蔽词删除"},{fn:"createLangFilterPlugin",why:"语种过滤"},{fn:"createDedupPlugin",why:"去重"},{fn:"createRateLimitPlugin",why:"限速"},{fn:"createPinnedTopPlugin",why:"高赞置顶"},{fn:"createKeywordHighlightPlugin",why:"关键词高亮"},{fn:"createGiftComboPlugin",why:"礼物连击"},{fn:"createFanBadgePlugin",why:"粉丝牌"},{fn:"createCmdParsePlugin",why:"互动指令"},{fn:"createSafeZonePlugin",why:"防遮挡（静态 + 可注入 MediaPipe）"},{fn:"createSettingsPanelPlugin",why:"控制层：设置面板"},{fn:"createFilterTogglePlugin",why:"控制层：过滤开关"},{fn:"createCommandInputPlugin",why:"控制层：指令输入"},{fn:"createStatsBarPlugin",why:"控制层：统计条"}],props:["items={SAMPLE_BASIC}","currentTime={t}","playing"],tone:"dark"};function BS(){return c.jsx(eo,{plugins:zS,items:de,height:380,topInset:48,bottomInset:56})}const HS=Object.freeze(Object.defineProperty({__proto__:null,default:BS,meta:US},Symbol.toStringTag,{value:"Module"})),bo=40,WS=4,GS=16,pc=["哈哈哈","666","主播牛","这波稳","前方高能","泪目","yyds","绝了","冲鸭","awsl","名场面","压力测试中","帧率还好吗","弹幕护体","海量刷屏"];function VS(e,n){return Array.from({length:e},(t,r)=>({id:`p${r}`,text:`${pc[r%pc.length]} ${r}`,mode:r%17===0?"top":r%23===0?"reverse":"scroll",time:r/e*n,duration:WS,meta:r%29===0?{level:30}:{}}))}function KS(){const[e,n]=x.useState([]),[t,r]=x.useState(0),[o,i]=x.useState(bo),[l,a]=x.useState(0),[s,u]=x.useState(0),[d,f]=x.useState(0),[p,v]=x.useState(0),y=x.useRef(performance.now()),P=x.useRef(0),k=x.useRef(performance.now()),g=x.useRef(bo),m=x.useRef(null);x.useEffect(()=>{let R=0;const O=$=>{var ae;const F=g.current;a(($-y.current)/1e3%F),P.current++;const oe=performance.now();if(oe-k.current>=500){u(Math.round(P.current*1e3/(oe-k.current))),P.current=0,k.current=oe;const H=(ae=m.current)==null?void 0:ae.getStats();f((H==null?void 0:H.active)??0),v((H==null?void 0:H.dropped)??0)}R=requestAnimationFrame(O)};return R=requestAnimationFrame(O),()=>cancelAnimationFrame(R)},[]);const h=(R,O=bo)=>{const $=VS(R,O);g.current=O,n($),r(R),i(O),y.current=performance.now(),k.current=performance.now(),P.current=0};x.useEffect(()=>{const R=new URLSearchParams(window.location.search),O=Number(R.get("n"));if(Number.isFinite(O)&&O>0){const $=Number(R.get("t")),F=Number.isFinite($)&&$>=4?$:bo;h(Math.min(2e4,Math.floor(O)),F)}},[]);const S=()=>{n([]),r(0),f(0),v(0)},b=s>=50?"#7fd08c":s>=30?"#f5c24b":"#f2685e",j=s>=50?"流畅":s>=30?"可用":"过载",L=x.useMemo(()=>({position:"relative",height:460,borderRadius:8,overflow:"hidden"}),[]);return c.jsxs("div",{children:[c.jsxs("div",{className:"perf-bar",children:[c.jsx("b",{className:"perf-title",children:"海量弹幕压测"}),c.jsx("button",{type:"button",className:"mp-btn",onClick:()=>h(1e3),children:"1000 条"}),c.jsx("button",{type:"button",className:"mp-btn",onClick:()=>h(2e3),children:"2000 条"}),c.jsx("button",{type:"button",className:"mp-btn",onClick:()=>h(3e3),children:"3000 条"}),c.jsx("button",{type:"button",className:"mp-btn mp-btn-danger",onClick:()=>h(3e3,GS),children:"极限 · 3000 条 / 16s"}),c.jsx("button",{type:"button",className:"mp-btn",onClick:S,children:"清空"}),c.jsxs("span",{className:"perf-stat",children:["总数 ",c.jsx("b",{children:t})," · 铺开 ",c.jsx("b",{children:t===0?"—":`${o}s`})," · 在飞"," ",c.jsx("b",{children:d})," · 丢弃"," ",c.jsx("b",{style:{color:p>0?"#f2685e":"var(--dim)"},children:p})," · FPS"," ",c.jsxs("b",{style:{color:t===0?"var(--dim)":b},children:[s,t>0?`（${j}）`:""]})]})]}),c.jsxs("div",{"data-danmaku-root":!0,style:{...L,background:"linear-gradient(135deg, #1b2a4a 0%, #0d1424 60%, #2a1730 100%)",boxShadow:"inset 0 0 80px rgba(0,0,0,0.45)"},children:[c.jsx(Yr,{ref:m,items:e,currentTime:l,playing:!0,trackHeight:22,baseFontSize:16,containerStyle:{width:"100%",height:"100%"}}),t===0?c.jsxs("div",{className:"perf-empty",children:[c.jsx("span",{children:"点上方「1000 / 2000 / 3000 条」开始压测"}),c.jsx("span",{className:"perf-tip",children:"（也可用 ?n=3000 深链打开即满载）"})]}):null]})]})}const QS={id:"performance",title:"海量弹幕压测",group:"压测",ref:{label:"性能基准",url:"https://github.com/frankvane/vane-components"},pain:"大促峰值几万条弹幕涌入：Canvas 内核能不能扛住？这里一键灌 1000/2000/3000 条，实时看 FPS 与在飞条数。",plugs:[],props:["items={items}","currentTime={t}","playing"],note:"纯内核压测：不装任何业务插件，直接测 DanmakuCore 的轨道调度 + 逐帧绘制上限。三个读数必须分清 —— 总量 / 在飞 / 丢弃，在飞与丢弃直接读内核 getStats()，不是按时间区间估的理论值。画布画出界的弹幕会立刻从活跃表里回收、绘制前再跳过完全出画的条目，所以「看不见的弹幕」不产生渲染开销；真正的上限是「同时在飞多少条 + 每轨多久能复用一次」。本机演示尺寸（高 460、轨高 22、字号 16）下，在飞 70~80 条、约 20 条/秒进场就顶到容量，继续加量只会让「丢弃」上涨而 FPS 不涨 —— 丢弃开始上涨的那一档就是这块画布的饱和点。饱和时内核先排队等空轨，等 1.2 秒仍无位才丢弃并计数，绝不把弹幕叠进同一轨（叠字既看不清，也是最贵的光栅化）。切到顶部「压测」分类只看这一张，FPS 读数最准；也可用 `?n=3000&t=16` 深链打开即满载。",tone:"dark"},ZS=Object.freeze(Object.defineProperty({__proto__:null,default:KS,meta:QS},Symbol.toStringTag,{value:"Module"})),YS=`/**
 * 场景 01 · 直播弹幕
 *
 * 直播场景下「好看 + 可控」的最小组合：敏感词打码、粉丝牌、高赞置顶、关键词高亮、
 * 表情/提及/礼物连击、配色策略、防遮挡，外加四个控制层插件（设置/过滤/指令/统计）。
 */
import React from "react";
import {
  createSensitiveFilterPlugin,
  createFanBadgePlugin,
  createPinnedTopPlugin,
  createKeywordHighlightPlugin,
  createEmojiRenderPlugin,
  createAtMentionPlugin,
  createGiftComboPlugin,
  createColorPolicyPlugin,
  createCmdParsePlugin,
  createSafeZonePlugin,
  createSettingsPanelPlugin,
  createFilterTogglePlugin,
  createCommandInputPlugin,
  createStatsBarPlugin,
} from "vane-danmaku/custom-plugins";
import { LiveDanmaku, SAMPLE_BASIC } from "../demos/lib/LiveDanmaku";

const PLUGINS = [
  createSensitiveFilterPlugin({ words: ["广告", "代刷", "违规"], mode: "mask" }),
  createFanBadgePlugin({
    badges: {
      u1: { name: "老粉", level: 6, color: "#ff7a29" },
      u2: { name: "舰长", level: 12, color: "#5fd3c8" },
    },
  }),
  createPinnedTopPlugin({ minLevel: 20 }),
  createKeywordHighlightPlugin({ keywords: ["福利", "抽奖", "高能"] }),
  createEmojiRenderPlugin(),
  createAtMentionPlugin(),
  createGiftComboPlugin(),
  createColorPolicyPlugin(),
  createCmdParsePlugin(),
  createSafeZonePlugin({ reservedBands: { top: 0.18, bottom: 0.12 } }),
  createSettingsPanelPlugin(),
  createFilterTogglePlugin(),
  createCommandInputPlugin(),
  createStatsBarPlugin(),
];

export const meta = {
  id: "live-streaming",
  title: "直播弹幕",
  group: "直播",
  ref: { label: "B站 / 抖音直播", url: "https://live.bilibili.com" },
  pain: "直播弹幕既要热闹又不能乱：敏感词、刷屏、广告、人物遮挡全得管。",
  plugs: [
    { fn: "createSensitiveFilterPlugin", cfg: \`words: ["广告","代刷"], mode: "mask"\`, why: "命中敏感词打码，保留整条不闪烁" },
    { fn: "createFanBadgePlugin", why: "给老粉 / 舰长挂粉丝牌" },
    { fn: "createPinnedTopPlugin", cfg: "minLevel: 20", why: "高等级发言置顶固定" },
    { fn: "createKeywordHighlightPlugin", why: "福利/抽奖/高能 高亮" },
    { fn: "createGiftComboPlugin", why: "同一用户连送礼物合并成 xN" },
    { fn: "createSafeZonePlugin", why: "顶/底静态安全区，防主播被遮" },
    { fn: "createSettingsPanelPlugin", why: "观众调透明度/速度/轨道" },
    { fn: "createCommandInputPlugin", why: "观众发弹幕或 /clear 指令" },
  ],
  props: ["items={SAMPLE_BASIC}", "currentTime={t}", "playing"],
  tone: "dark",
};

export default function Scenario() {
  return (
    <LiveDanmaku
      plugins={PLUGINS}
      items={SAMPLE_BASIC}
      height={360}
      topInset={48}
      bottomInset={56}
    />
  );
}
`,XS=`/**
 * 场景 02 · MediaPipe 实时防遮挡（视频 + 人物 + 骨骼识别 + 弹幕穿透）
 *
 * 核心思路（纠正「纯骨骼点」的误区）：
 *   1. 用 MediaPipe PoseLandmarker 取人物 33 个骨骼点（normalized 0..1）。
 *   2. 由这些点算出人物外接矩形 → 转成容器 CSS 像素的避让区 Rect[]。
 *   3. 把避让区通过 SafeZonePlugin 的 \`provider\` 注入运行时 shared，内核每帧读取、
 *      让轨道调度避开人物，绝不阻塞 60fps 渲染。
 *
 * 四种输入，保证「视频中有人物」一定能演示：
 *   · 示例视频：仓库 demo/public/samples 下的两段人物镜头（离线，无需摄像头/外网）。
 *   · 上传视频：选一段本地有人物的视频，离线即可跑骨骼识别（最稳）。
 *   · 启动摄像头：真实人物实时骨骼识别（需授权 + 安全上下文 + 外网拉模型）。
 *   · 模拟人物：无摄像头 / 无外网时合成一个来回移动的避让区，跑同一套防遮挡逻辑。
 *
 * 弹幕穿透：弹幕层绝对定位于视频之上（GPU canvas 叠加），人物框区域被内核调度绕开，
 * 既不挡人、也不被视频裁切 —— 这是「弹幕穿透视频」的正确范式。
 *
 * 性能：4K 视频直接喂 PoseLandmarker 太重，检测前先降采样画到 480px 宽的离屏 canvas，
 * normalized 坐标不变，cover 映射逻辑照旧，检测开销降一个量级。
 *
 * 发布包不捆绑 MediaPipe（体积预算不受影响）；ML 跑在消费方独立循环，低频产出避让区。
 */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { DanmakuCore, withDanmakuPlugins } from "vane-danmaku";
import type { DanmakuItem, Rect } from "vane-danmaku";
import { createSafeZonePlugin } from "vane-danmaku/custom-plugins";
import { SAMPLE_BASIC } from "../demos/lib/LiveDanmaku";

const POSE_WASM =
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm";
const POSE_MODEL =
  "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task";
// 动态 import 必须用变量承载 URL，否则 tsc 会试图解析 CDN 远程模块而 TS2307
const VISION_URL =
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";

// 离线示例视频（demo/public/samples，构建后由 build-demos 平铺到产物根）
// 用 720p / 12s 轻量转码版（原 4K 太大、加载慢），MediaPipe 检测本就降采样到 480px。
const SAMPLE_VIDEOS: { label: string; url: string }[] = [
  { label: "示例 · 人物镜头 A", url: "./samples/sample-a.mp4" },
  { label: "示例 · 人物镜头 B", url: "./samples/sample-b.mp4" },
];

const DETECT_W = 480; // 检测降采样宽度（保纵横比）

/**
 * 避让区用「主体骨架」：鼻 + 双肩 + 双髋 + 双膝。
 * 不取全 33 点 —— 举手/踢腿/张开手臂时腕踝会把框撑到几乎整屏；也不只取躯干 ——
 * 大腿以下会漏，弹幕会压着腿走。取到膝盖是「覆盖人、但仍然贴着人」的折中。
 */
const CORE_POINTS = [0, 11, 12, 23, 24, 25, 26];

/** 连续这么久检测不到人（人出画 / 侧身）就撤掉避让区，别让旧框一直压着画面 */
const ZONE_TTL = 0.3;

/**
 * 视频缩放模式 —— 必须和下面的坐标映射保持一致，否则避让区会整体错位。
 *
 * 用 contain 而不是 cover：示例片源是竖屏（9:16）近景，塞进 16:9 舞台用 cover 会把画面
 * 裁到只剩腰部，人物横向占掉半个屏 → 避让区巨大，弹幕全被裁掉，看起来像「没弹幕」。
 * contain 让整帧可见，人物只占窄窄一条，弹幕才有地方走、也才看得出「从人身后穿过」。
 */
const FIT: "contain" | "cover" = "contain";

// 标准人体骨骼连线（PoseLandmarker 33 关键点：头面 / 躯干 / 四肢）
const POSE_CONNECTIONS: ReadonlyArray<readonly [number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10],
  [11, 12], [11, 13], [13, 15], [12, 14], [14, 16],
  [11, 23], [12, 24], [23, 24],
  [15, 17], [15, 19], [15, 21], [16, 18], [16, 20], [16, 22],
  [23, 25], [25, 27], [27, 29], [27, 31], [24, 26], [26, 28], [28, 30], [28, 32],
];

type Mode = "idle" | "camera" | "upload" | "synthetic";

// 加密的弹幕流：主样本 + 第二波（只补 scroll，且是不同的句子）。
// 注意别把 top/bottom 也复制一遍 —— 屏幕上会出现两条一模一样的置顶公告，看着像 bug。
const WAVE2: DanmakuItem[] = [
  { id: "b1", text: "这段卡点太准了", mode: "scroll", time: 0.5, meta: {} },
  { id: "b2", text: "导演加个鸡腿", mode: "scroll", time: 1.4, meta: {} },
  { id: "b3", text: "镜头感绝了", mode: "scroll", time: 2.7, meta: {} },
  { id: "b4", text: "背景音乐叫啥", mode: "scroll", time: 3.4, meta: {} },
  { id: "b5", text: "慢动作好评", mode: "scroll", time: 4.8, meta: {} },
  { id: "b6", text: "这走位有点东西", mode: "scroll", time: 6.1, meta: {} },
  { id: "b7", text: "刚进来就赶上了", mode: "scroll", time: 7.3, meta: {} },
  { id: "b8", text: "已三连", mode: "scroll", time: 9.1, meta: {} },
  { id: "b9", text: "回放看起来", mode: "scroll", time: 10.4, meta: {} },
];

const STREAM: DanmakuItem[] = [...SAMPLE_BASIC, ...WAVE2];

function MediaPipeOcclusion() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayRef = useRef<HTMLCanvasElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const zonesRef = useRef<Rect[]>([]);
  const visionRef = useRef<any>(null);
  const landmarkerRef = useRef<any>(null);
  const rafRef = useRef<number>(0);
  const startRef = useRef(performance.now());
  const detCanvasRef = useRef<HTMLCanvasElement | null>(null);
  /** 最近一次检测到人的时间（秒），用于避让区过期 */
  const lastSeenRef = useRef(0);

  // 默认直接播放第一段示例视频：打开场景即看到「视频 + 弹幕穿透」，无需手动点选
  const [mode, setMode] = useState<Mode>("upload");
  const [videoSrc, setVideoSrc] = useState<string | null>(
    SAMPLE_VIDEOS[0]?.url ?? null
  );
  const [status, setStatus] = useState<string>(
    "自动播放示例视频 · 弹幕穿透叠在视频上；PoseLandmarker 就绪后骨骼识别并绕开人物"
  );
  // ML 是否就绪（模型加载成功才做骨骼识别）；失败也不影响视频与弹幕穿透
  const [mlReady, setMlReady] = useState(false);
  // 视频真实播放进度（0 = 没在播），用于状态显示与自检
  const [videoClock, setVideoClock] = useState(0);
  // 视频是否真的在播（onPlay/onPause 同步）；没播时给一个显眼的起播按钮，
  // 避免 autoplay 被拦后用户只看到一张静止的渐变底，以为「视频演示坏了」。
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // 时钟：把 currentTime 推进并取模，弹幕循环播放
  useEffect(() => {
    let raf = 0;
    const tick = (t: number) => {
      setCurrentTime(((t - startRef.current) / 1000) % 12);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // 实时避让区 provider：内核每帧调用，返回最新已知避让区（不阻塞渲染）
  const provider = useMemo(() => () => zonesRef.current, []);
  const Player = useMemo(
    () => withDanmakuPlugins(DanmakuCore, [createSafeZonePlugin({ provider })]),
    [provider]
  );

  // 画人物框 + 骨架（内核只消费 zones 做调度，这里纯可视化）
  const drawOverlay = useMemo(
    () => (pts: { x: number; y: number }[]) => {
      const cv = overlayRef.current;
      const el = containerRef.current;
      if (!cv || !el) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (cv.width !== Math.round(w * dpr)) {
        cv.width = Math.round(w * dpr);
        cv.height = Math.round(h * dpr);
      }
      const ctx = cv.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      for (const z of zonesRef.current) {
        ctx.fillStyle = "rgba(95,211,200,0.10)";
        ctx.fillRect(z.x, z.y, z.w, z.h);
        ctx.strokeStyle = "rgba(95,211,200,0.95)";
        ctx.lineWidth = 2;
        ctx.strokeRect(z.x, z.y, z.w, z.h);
      }
      if (pts.length) {
        ctx.strokeStyle = "rgba(255,122,41,0.85)";
        ctx.lineWidth = 2;
        for (const [a, b] of POSE_CONNECTIONS) {
          const pa = pts[a];
          const pb = pts[b];
          if (pa && pb) {
            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "#ff7a29";
        for (const p of pts) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    },
    []
  );

  // 懒加载 MediaPipe（缓存，camera/upload 共用同一份 landmarker）
  const loadVision = useMemo(
    () => async () => {
      if (visionRef.current) return visionRef.current;
      const url = VISION_URL;
      const vision: any = await import(/* @vite-ignore */ url);
      const fileset = await vision.FilesetResolver.forVisionTasks(POSE_WASM);
      const landmarker = await vision.PoseLandmarker.createFromOptions(fileset, {
        baseOptions: { modelAssetPath: POSE_MODEL, delegate: "GPU" },
        runningMode: "VIDEO",
        numPoses: 1,
      });
      visionRef.current = vision;
      landmarkerRef.current = landmarker;
      return vision;
    },
    []
  );

  // 摄像头：取真实人物视频流
  useEffect(() => {
    if (mode !== "camera") return;
    let stream: MediaStream | null = null;
    let cancelled = false;
    (async () => {
      try {
        setStatus("正在请求摄像头权限…");
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false,
        });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        const v = videoRef.current;
        if (!v) return;
        v.srcObject = stream;
        await v.play();
        setStatus("加载 MediaPipe PoseLandmarker…");
        await loadVision();
        if (cancelled) return;
        setMlReady(true);
        setStatus("已连接 · 实时骨骼识别 → 人物避让区，弹幕自动绕开人物");
      } catch {
        if (cancelled) return;
        setStatus("摄像头不可用（无设备 / 未授权 / 非安全上下文）。已自动切回「模拟人物」。");
        setMode("synthetic");
      }
    })();
    return () => {
      cancelled = true;
      stream?.getTracks().forEach((t) => t.stop());
      const v = videoRef.current;
      if (v) v.srcObject = null;
    };
  }, [mode, loadVision]);

  // 检测循环：摄像头 / 上传视频 / 示例视频 共用，取骨骼点 → 外接矩形 → 避让区 + 骨架
  // 4K 视频先降采样到 DETECT_W 宽再检测，normalized 坐标不变，开销降一个量级。
  useEffect(() => {
    if (mode !== "camera" && mode !== "upload") return;
    let cancelled = false;
    let raf = 0;
    if (!detCanvasRef.current) detCanvasRef.current = document.createElement("canvas");
    const det = detCanvasRef.current;
    const detCtx = det.getContext("2d", { willReadFrequently: true });
    (async () => {
      try {
        await loadVision();
        if (cancelled) return;
        setMlReady(true);
        const loop = () => {
          if (cancelled) return;
          const vv = videoRef.current;
          const el = containerRef.current;
          const lm = landmarkerRef.current;
          if (vv && el && lm && vv.readyState >= 2 && vv.videoWidth > 0 && detCtx) {
            const vw = vv.videoWidth;
            const vh = vv.videoHeight;
            const dh = Math.round((vh * DETECT_W) / vw);
            if (det.width !== DETECT_W || det.height !== dh) {
              det.width = DETECT_W;
              det.height = dh;
            }
            detCtx.drawImage(vv, 0, 0, DETECT_W, dh);
            const res = lm.detectForVideo(det, performance.now());
            const lms = res.landmarks?.[0];
            if (lms && lms.length) {
              const cw = el.clientWidth;
              const ch = el.clientHeight;
              // 与 <video object-fit> 一致的缩放映射（用原始帧尺寸算，不能用降采样后的）
              const scale =
                FIT === "cover" ? Math.max(cw / vw, ch / vh) : Math.min(cw / vw, ch / vh);
              const dispW = vw * scale;
              const dispH = vh * scale;
              const offX = (cw - dispW) / 2;
              const offY = (ch - dispH) / 2;
              let minX = 1, minY = 1, maxX = 0, maxY = 0;
              for (const i of CORE_POINTS) {
                const p = lms[i];
                if (!p) continue;
                minX = Math.min(minX, p.x);
                maxX = Math.max(maxX, p.x);
                minY = Math.min(minY, p.y);
                maxY = Math.max(maxY, p.y);
              }
              // 检测不到主体点时（人出画/侧身）就不产生避让区，别拿 0,0 当框
              if (maxX > minX && maxY > minY) {
                const pad = 14;
                zonesRef.current = [
                  {
                    x: offX + minX * dispW - pad,
                    y: offY + minY * dispH - pad,
                    w: (maxX - minX) * dispW + pad * 2,
                    h: (maxY - minY) * dispH + pad * 2,
                  },
                ];
              } else {
                zonesRef.current = [];
              }
              drawOverlay(
                lms.map((p: { x: number; y: number }) => ({
                  x: offX + p.x * dispW,
                  y: offY + p.y * dispH,
                }))
              );
              lastSeenRef.current = performance.now() / 1000;
            } else if (performance.now() / 1000 - lastSeenRef.current > ZONE_TTL) {
              // 人出画 / 侧身检测不到：撤掉避让区与骨架，否则旧框会一直压在画面上
              // （内核拿到的避让区是「最新已知」，我们不更新它就不会过期）
              zonesRef.current = [];
              drawOverlay([]);
            }
          }
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      } catch {
        if (cancelled) return;
        // 模型加载失败（多半无外网）：**保留视频与弹幕穿透**，只是不做骨骼识别/绕人，
        // 不要切走视频（旧逻辑切 synthetic 会把视频也关掉，与「视频穿透演示」冲突）
        setMlReady(false);
        setStatus("视频播放中 · 弹幕穿透（MediaPipe 模型未加载，暂不做骨骼绕人）");
      }
    })();
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [mode, loadVision, drawOverlay]);

  // 上传视频 / 示例视频：设置 src 并播放（离线即可跑骨骼识别）
  useEffect(() => {
    if (mode !== "upload" || !videoSrc) return;
    const v = videoRef.current;
    if (!v) return;
    v.srcObject = null;
    v.loop = true;
    v.muted = true;
    // 显式 setAttribute + load，避免 React 的 src 未触发加载（preload 只拿元数据时首帧不绘制）
    if (v.getAttribute("src") !== videoSrc) {
      v.setAttribute("src", videoSrc);
      v.load();
    }
    v.play().catch(() => {});
  }, [mode, videoSrc]);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (videoSrc) URL.revokeObjectURL(videoSrc);
    setVideoSrc(URL.createObjectURL(f));
    setMode("upload");
  };

  const onSample = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = e.target.value;
    if (!url) return;
    if (videoSrc && videoSrc.startsWith("blob:")) URL.revokeObjectURL(videoSrc);
    setVideoSrc(url);
    setMode("upload");
  };

  // 模拟人物：合成一个来回移动的避让区（无需摄像头 / 外网）
  useEffect(() => {
    if (mode !== "synthetic") return;
    let raf = 0;
    const loop = () => {
      const el = containerRef.current;
      if (el) {
        const w = el.clientWidth;
        const h = el.clientHeight;
        const t = performance.now() / 1000;
        const cx = w * (0.5 + 0.3 * Math.sin(t * 0.6));
        const cy = h * (0.52 + 0.12 * Math.sin(t * 0.9));
        const bw = Math.min(w, h) * 0.2;
        const bh = Math.min(w, h) * 0.55;
        zonesRef.current = [{ x: cx - bw / 2, y: cy - bh / 2, w: bw, h: bh }];
        drawOverlay([]); // 模拟态不画骨架，只画人物框
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [mode, drawOverlay]);

  // 离开各模式时清场
  useEffect(() => {
    if (mode === "idle") {
      zonesRef.current = [];
      const cv = overlayRef.current;
      const ctx = cv?.getContext("2d");
      if (ctx && cv) ctx.clearRect(0, 0, cv.width, cv.height);
    }
  }, [mode]);

  const showVideo = mode === "camera" || mode === "upload";
  // 骨骼识别真正在跑 = 视频模式 + 模型就绪
  const tracking = showVideo && mlReady;

  return (
    <div
      ref={containerRef}
      data-danmaku-root
      onClick={() => {
        // 兜底：某些浏览器/策略下 muted autoplay 仍被拦，点一下舞台即可起播
        const v = videoRef.current;
        if (v && v.paused && (mode === "upload" || mode === "camera")) {
          v.play().catch(() => {});
        }
      }}
      style={{
        position: "relative",
        width: "100%",
        height: 420,
        borderRadius: 8,
        overflow: "hidden",
        background: "linear-gradient(135deg, #0d1424, #1b2a4a 60%, #2a1730)",
        boxShadow: "inset 0 0 80px rgba(0,0,0,0.5)",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        src={mode === "upload" ? videoSrc ?? undefined : undefined}
        onTimeUpdate={(e) => setVideoClock(e.currentTarget.currentTime)}
        onPlay={() => setVideoPlaying(true)}
        onPause={() => setVideoPlaying(false)}
        onError={(e) => {
          // 浏览器/环境无法解码时别静默卡住：退回「模拟人物」照样演示防遮挡，
          // 同时把错误码写进状态条（供排查是资源问题还是媒体管线问题）
          const code = e.currentTarget.error?.code;
          setVideoPlaying(false);
          setStatus(
            \`视频无法播放（MediaError \${code ?? "?"}）· 已切「模拟人物」，弹幕穿透与绕人逻辑照跑\`
          );
          setMode("synthetic");
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: FIT,
          opacity: showVideo ? 1 : 0,
          transition: "opacity .3s",
          zIndex: 0,
        }}
      />
      {/* 弹幕穿透：绝对定位覆盖在视频之上，内核每帧绕开人物框 */}
      <Player
        items={STREAM as DanmakuItem[]}
        currentTime={currentTime}
        playing
        topInset={44}
        bottomInset={88}
        containerStyle={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
      <canvas
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />

      {/* autoplay 被浏览器策略拦下时的显式起播口（静音播放一般不会被拦，这里是兜底） */}
      {showVideo && !videoPlaying ? (
        <button
          type="button"
          aria-label="播放视频"
          onClick={() => videoRef.current?.play().catch(() => {})}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 7,
            width: 64,
            height: 64,
            borderRadius: 32,
            border: "1px solid rgba(255,255,255,0.28)",
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            fontSize: 24,
            lineHeight: 1,
            cursor: "pointer",
            backdropFilter: "blur(2px)",
          }}
        >
          ▶
        </button>
      ) : null}

      {/* 顶部状态条 */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          right: 10,
          zIndex: 6,
          display: "flex",
          gap: 8,
          alignItems: "center",
          flexWrap: "wrap",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: tracking ? "#5fd3c8" : showVideo ? "#f5c24b" : "#9aa3b2",
            background: "rgba(0,0,0,0.45)",
            padding: "4px 8px",
            borderRadius: 6,
          }}
        >
          {tracking
            ? "● 骨骼识别中 · 弹幕绕开人物"
            : mode === "synthetic"
            ? "● 模拟人物 · 防遮挡演练"
            : showVideo
            ? "● 视频播放中 · 弹幕穿透叠加"
            : "○ 未启动"}
        </span>
        {showVideo ? (
          <span
            style={{
              fontSize: 12,
              color: videoClock > 0 ? "#7fd08c" : "#9aa3b2",
              background: "rgba(0,0,0,0.45)",
              padding: "4px 8px",
              borderRadius: 6,
            }}
          >
            {videoClock > 0 ? \`▶ 播放中 \${videoClock.toFixed(1)}s\` : "⏸ 未播放（点舞台起播）"}
          </span>
        ) : null}
      </div>

      {/* 底部控件 */}
      <div
        style={{
          position: "absolute",
          left: 10,
          bottom: 10,
          right: 10,
          zIndex: 6,
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <button type="button" className="mp-btn" onClick={() => setMode("camera")}>
          启动摄像头
        </button>
        <select className="mp-btn" defaultValue="" onChange={onSample}>
          <option value="" disabled>
            示例视频
          </option>
          {SAMPLE_VIDEOS.map((s) => (
            <option key={s.url} value={s.url}>
              {s.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="mp-btn"
          onClick={() => fileRef.current?.click()}
        >
          上传视频
        </button>
        <button type="button" className="mp-btn" onClick={() => setMode("synthetic")}>
          模拟人物
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="video/*"
          style={{ display: "none" }}
          onChange={onFile}
        />
        <span className="mp-status">{status}</span>
      </div>
    </div>
  );
}

export const meta = {
  id: "media-occlusion",
  title: "MediaPipe 实时防遮挡",
  group: "防遮挡",
  ref: { label: "MediaPipe Pose", url: "https://github.com/google-ai-edge/mediapipe" },
  pain: "视频里的人物被弹幕糊住是硬伤：怎么让弹幕自动绕开人？答案不是纯骨骼点，而是用骨骼点算避让区。",
  plugs: [
    {
      fn: "createSafeZonePlugin",
      cfg: "provider /* MediaPipe → Rect[] */",
      why: "把消费方算出的避让区注入内核，轨道调度自动避开人物",
    },
  ],
  props: ["items={STREAM}", "currentTime={t}", "playing", "avoidZoneProvider"],
  video: true,
  note:
    "发布包不捆绑 MediaPipe（体积预算不受影响）。这里在 demo 里用 PoseLandmarker 取 33 个骨骼点，只用鼻/双肩/双髋这几个主体点算外接矩形当避让区（全骨架外接会随举手踢腿膨胀成整屏，弹幕就没地方走了）；内核每帧同步消费，几帧延迟对人无感。四种输入：示例视频（离线人物镜头）/ 上传视频（离线最稳）/ 摄像头（真实人物）/ 模拟人物（无设备回退）。4K 视频检测前降采样到 480px 宽，开销降一量级。弹幕穿透 = canvas 叠在视频之上、绕开人物框。",
  tone: "dark",
};

export default function Scenario() {
  return <MediaPipeOcclusion />;
}
`,qS=`/**
 * 场景 03 · 互动玩法
 *
 * 直播互动的「人味」组合：粉丝牌、@提及高亮、礼物连击、互动指令（/clear、#lottery）、表情。
 */
import React from "react";
import {
  createFanBadgePlugin,
  createAtMentionPlugin,
  createGiftComboPlugin,
  createCmdParsePlugin,
  createEmojiRenderPlugin,
  createPinnedTopPlugin,
  createSafeZonePlugin,
} from "vane-danmaku/custom-plugins";
import { LiveDanmaku, SAMPLE_INTERACTION } from "../demos/lib/LiveDanmaku";

const PLUGINS = [
  createFanBadgePlugin({
    badges: {
      u1: { name: "老粉", level: 6, color: "#ff7a29" },
      u2: { name: "舰长", level: 12, color: "#5fd3c8" },
    },
  }),
  createAtMentionPlugin(),
  createGiftComboPlugin(),
  createCmdParsePlugin(),
  createEmojiRenderPlugin(),
  createPinnedTopPlugin({ minLevel: 20 }),
  createSafeZonePlugin({ reservedBands: { top: 0.16, bottom: 0.1 } }),
];

export const meta = {
  id: "interaction",
  title: "互动玩法",
  group: "互动",
  ref: { label: "礼物 / 粉丝牌 / 指令", url: "https://live.bilibili.com" },
  pain: "观众互动是直播的灵魂：识别粉丝、聚合礼物、解析指令、高亮提及，缺一个都不完整。",
  plugs: [
    { fn: "createFanBadgePlugin", why: "老粉 / 舰长身份牌" },
    { fn: "createAtMentionPlugin", why: "@主播 等提及高亮" },
    { fn: "createGiftComboPlugin", why: "连送礼物合并 xN" },
    { fn: "createCmdParsePlugin", why: "解析 /clear、#lottery 等指令" },
    { fn: "createEmojiRenderPlugin", why: ":rocket: 这类短码转表情" },
  ],
  props: ["items={SAMPLE_INTERACTION}", "currentTime={t}", "playing"],
  tone: "dark",
};

export default function Scenario() {
  return <LiveDanmaku plugins={PLUGINS} items={SAMPLE_INTERACTION} height={340} />;
}
`,JS=`/**
 * 场景 04 · 内容审核
 *
 * 平台治理组合：敏感词打码、硬屏蔽词删除、语种过滤、用户禁言、去重、限速、审计旁路。
 * 这一组把「脏弹幕」在进渲染前全部清掉，内核只看到干净流。
 */
import React from "react";
import {
  createSensitiveFilterPlugin,
  createKeywordBlockPlugin,
  createLangFilterPlugin,
  createUserMutePlugin,
  createDedupPlugin,
  createRateLimitPlugin,
  createAuditLogPlugin,
  createSafeZonePlugin,
} from "vane-danmaku/custom-plugins";
import { LiveDanmaku, SAMPLE_MODERATION } from "../demos/lib/LiveDanmaku";

const PLUGINS = [
  createSensitiveFilterPlugin({ words: ["广告", "代刷", "违规", "政治敏感"], mode: "mask" }),
  createKeywordBlockPlugin({ words: ["竞品", "违规"] }),
  createLangFilterPlugin({ allow: ["cjk", "latin"] }),
  createUserMutePlugin({ users: ["bot"] }),
  createDedupPlugin({ window: 5 }),
  createRateLimitPlugin({ max: 3, window: 6 }),
  createAuditLogPlugin(),
  createSafeZonePlugin({ reservedBands: { top: 0.16, bottom: 0.1 } }),
];

export const meta = {
  id: "content-moderation",
  title: "内容审核",
  group: "治理",
  ref: { label: "弹幕风控", url: "https://www.bilibili.com" },
  pain: "广告、代刷、刷屏机器人、违规语种——不拦就在公屏里炸开，必须进渲染前清干净。",
  plugs: [
    { fn: "createSensitiveFilterPlugin", cfg: \`words: ["广告","代刷"], mode: "mask"\`, why: "命中打码保留整条" },
    { fn: "createKeywordBlockPlugin", cfg: \`words: ["竞品"]\`, why: "硬屏蔽词直接删除" },
    { fn: "createLangFilterPlugin", cfg: \`allow: ["cjk","latin"]\`, why: "按语种放行 / 过滤" },
    { fn: "createUserMutePlugin", cfg: \`users: ["bot"]\`, why: "禁言指定用户" },
    { fn: "createDedupPlugin", why: "短时间重复弹幕去重" },
    { fn: "createRateLimitPlugin", why: "单用户限速防刷屏" },
    { fn: "createAuditLogPlugin", why: "旁路审计，不改流" },
  ],
  props: ["items={SAMPLE_MODERATION}", "currentTime={t}", "playing"],
  tone: "dark",
};

export default function Scenario() {
  return <LiveDanmaku plugins={PLUGINS} items={SAMPLE_MODERATION} height={340} />;
}
`,ew=`/**
 * 场景 05 · 全功能中台
 *
 * 23 个插件全部装配：内容治理、视觉强调、互动指令、轨道策略、控制层 + 防遮挡。
 * 真实业务中你不会一次开满，这里用来展示「一个内核能承载多少业务语义」。
 */
import React from "react";
import {
  createSensitiveFilterPlugin,
  createKeywordBlockPlugin,
  createLangFilterPlugin,
  createEmojiRenderPlugin,
  createAtMentionPlugin,
  createUserMutePlugin,
  createDedupPlugin,
  createRateLimitPlugin,
  createAuditLogPlugin,
  createPinnedTopPlugin,
  createKeywordHighlightPlugin,
  createGiftComboPlugin,
  createColorPolicyPlugin,
  createStylePresetPlugin,
  createCmdParsePlugin,
  createFanBadgePlugin,
  createTrackStrategyPlugin,
  createSpeedControlPlugin,
  createSafeZonePlugin,
  createSettingsPanelPlugin,
  createFilterTogglePlugin,
  createCommandInputPlugin,
  createStatsBarPlugin,
} from "vane-danmaku/custom-plugins";
import { LiveDanmaku, SAMPLE_BASIC } from "../demos/lib/LiveDanmaku";

const PLUGINS = [
  createSensitiveFilterPlugin({ words: ["广告", "代刷", "违规"], mode: "mask" }),
  createKeywordBlockPlugin({ words: ["竞品"] }),
  createLangFilterPlugin({ allow: ["cjk", "latin"] }),
  createEmojiRenderPlugin(),
  createAtMentionPlugin(),
  createUserMutePlugin({ users: ["bot"] }),
  createDedupPlugin({ window: 5 }),
  createRateLimitPlugin({ max: 3, window: 6 }),
  createAuditLogPlugin(),
  createPinnedTopPlugin({ minLevel: 20 }),
  createKeywordHighlightPlugin({ keywords: ["福利", "抽奖", "高能"] }),
  createGiftComboPlugin(),
  createColorPolicyPlugin(),
  createStylePresetPlugin(),
  createCmdParsePlugin(),
  createFanBadgePlugin({
    badges: {
      u1: { name: "老粉", level: 6, color: "#ff7a29" },
      u2: { name: "舰长", level: 12, color: "#5fd3c8" },
    },
  }),
  createTrackStrategyPlugin(),
  createSpeedControlPlugin({ factor: 1 }),
  createSafeZonePlugin({ reservedBands: { top: 0.16, bottom: 0.1 } }),
  createSettingsPanelPlugin(),
  createFilterTogglePlugin(),
  createCommandInputPlugin(),
  createStatsBarPlugin(),
];

export const meta = {
  id: "full-stack",
  title: "全功能中台",
  group: "综合",
  ref: { label: "23 插件全集", url: "https://github.com/frankvane/vane-components" },
  pain: "一个内核能不能承载全部业务语义？这里把 23 个插件一次开满，看组合的边界。",
  plugs: [
    { fn: "createSensitiveFilterPlugin", why: "内容治理起点：敏感词打码" },
    { fn: "createKeywordBlockPlugin", why: "硬屏蔽词删除" },
    { fn: "createLangFilterPlugin", why: "语种过滤" },
    { fn: "createDedupPlugin", why: "去重" },
    { fn: "createRateLimitPlugin", why: "限速" },
    { fn: "createPinnedTopPlugin", why: "高赞置顶" },
    { fn: "createKeywordHighlightPlugin", why: "关键词高亮" },
    { fn: "createGiftComboPlugin", why: "礼物连击" },
    { fn: "createFanBadgePlugin", why: "粉丝牌" },
    { fn: "createCmdParsePlugin", why: "互动指令" },
    { fn: "createSafeZonePlugin", why: "防遮挡（静态 + 可注入 MediaPipe）" },
    { fn: "createSettingsPanelPlugin", why: "控制层：设置面板" },
    { fn: "createFilterTogglePlugin", why: "控制层：过滤开关" },
    { fn: "createCommandInputPlugin", why: "控制层：指令输入" },
    { fn: "createStatsBarPlugin", why: "控制层：统计条" },
  ],
  props: ["items={SAMPLE_BASIC}", "currentTime={t}", "playing"],
  tone: "dark",
};

export default function Scenario() {
  return (
    <LiveDanmaku
      plugins={PLUGINS}
      items={SAMPLE_BASIC}
      height={380}
      topInset={48}
      bottomInset={56}
    />
  );
}
`,nw=`/**
 * 场景 06 · 海量弹幕压测
 *
 * 直播大促峰值几万条弹幕涌入，Canvas 内核到底能不能扛？这里不装任何业务插件，
 * 直接测 DanmakuCore 的轨道调度 + 逐帧绘制上限，实时显示 FPS 与「在飞条数」。
 *
 * 两种口径分开测（这是性能测试最容易糊掉的地方）：
 *   · 「总量」= 这一轮要流过的弹幕条数（1000 / 2000 / 3000）。
 *   · 「在飞」= 同一时刻真正在屏幕上的条数（读内核 getStats()，不含未到时间与已离场的）。
 *   · 「丢弃」= 画布饱和（找不到任何空闲轨）且排队超过 1.2s 被丢掉的条数。
 * 一块画布的入场容量是物理上限（轨数 × 每轨复用速度）：本机 460 高、22px 轨高的演示尺寸下，
 * 在飞 70~80 条、约 20 条/秒就顶到容量，再往上加只会变成「丢弃」上涨而 FPS 不涨。
 * 真实直播峰值的在飞量约 100~300 条，需要更宽的画布 / 更小的字号，或分屏渲染。
 *
 * 说明：切到顶部「压测」分类只看这一张卡，其它场景卡的 rAF 不会干扰 FPS 读数。
 * 深链：\`?n=3000\` 打开即满载（默认按 40 秒铺开），便于分享 / 录制 / 回归比对。
 */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { DanmakuCore } from "vane-danmaku";
import type { DanmakuCoreRef, DanmakuItem } from "vane-danmaku";

/** 循环时长（秒）：3000 条铺在 40s，约 75 条/秒进流，峰值在飞 ~300 条 */
const LOOP = 40;
/** 单条飞行时长（秒）——决定同一时刻的在飞条数 */
const DURATION = 4;
/** 过载档：同样条数压进 16s，在飞量 ≈ 4.7 倍，用来找性能拐点 */
const LOOP_OVERLOAD = 16;

const WORDS = [
  "哈哈哈",
  "666",
  "主播牛",
  "这波稳",
  "前方高能",
  "泪目",
  "yyds",
  "绝了",
  "冲鸭",
  "awsl",
  "名场面",
  "压力测试中",
  "帧率还好吗",
  "弹幕护体",
  "海量刷屏",
];

/** 生成 n 条弹幕，时间均匀铺在 loop 内；少量 top / reverse 制造混排 */
function makeItems(n: number, loop: number): DanmakuItem[] {
  return Array.from({ length: n }, (_, i) => ({
    id: \`p\${i}\`,
    text: \`\${WORDS[i % WORDS.length]} \${i}\`,
    mode: i % 17 === 0 ? "top" : i % 23 === 0 ? "reverse" : "scroll",
    time: (i / n) * loop,
    duration: DURATION,
    meta: i % 29 === 0 ? { level: 30 } : {},
  }));
}

export default function Scenario() {
  const [items, setItems] = useState<DanmakuItem[]>([]);
  const [count, setCount] = useState(0);
  const [loop, setLoop] = useState(LOOP);
  const [currentTime, setCurrentTime] = useState(0);
  const [fps, setFps] = useState(0);
  const [active, setActive] = useState(0);
  const [dropped, setDropped] = useState(0);

  const startRef = useRef(performance.now());
  const framesRef = useRef(0);
  const markRef = useRef(performance.now());
  const loopRef = useRef(LOOP);
  const coreRef = useRef<DanmakuCoreRef | null>(null);

  // 时钟：推进 currentTime + 每 500ms 结算一次 FPS / 在飞 / 丢弃
  // 在飞与丢弃直接读内核 getStats()，不再自己按 time 区间估算 —— 估出来的数是「理论值」，
  // 调度器真正绘制多少（出画即回收、饱和即丢弃）只有它自己知道。
  useEffect(() => {
    let raf = 0;
    const tick = (t: number) => {
      const L = loopRef.current;
      setCurrentTime(((t - startRef.current) / 1000) % L);
      framesRef.current++;
      const now = performance.now();
      if (now - markRef.current >= 500) {
        setFps(Math.round((framesRef.current * 1000) / (now - markRef.current)));
        framesRef.current = 0;
        markRef.current = now;
        const s = coreRef.current?.getStats();
        setActive(s?.active ?? 0);
        setDropped(s?.dropped ?? 0);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const spawn = (n: number, loopSec: number = LOOP) => {
    const arr = makeItems(n, loopSec);
    loopRef.current = loopSec;
    setItems(arr);
    setCount(n);
    setLoop(loopSec);
    startRef.current = performance.now();
    markRef.current = performance.now();
    framesRef.current = 0;
  };

  // 深链：\`?n=3000\` 打开即满载（默认按 40 秒铺开），\`&t=16\` 可直接进过载档。
  // 上限 20000 条，防止误传超大值把标签页打死。
  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const n = Number(qs.get("n"));
    if (Number.isFinite(n) && n > 0) {
      const t = Number(qs.get("t"));
      const loopSec = Number.isFinite(t) && t >= 4 ? t : LOOP;
      spawn(Math.min(20000, Math.floor(n)), loopSec);
    }
    // 只在挂载时读一次 URL，之后由按钮控制
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clear = () => {
    setItems([]);
    setCount(0);
    setActive(0);
    setDropped(0);
  };

  // fps 着色：≥50 绿、≥30 琥珀、<30 红
  const fpsColor = fps >= 50 ? "#7fd08c" : fps >= 30 ? "#f5c24b" : "#f2685e";
  const fpsState = fps >= 50 ? "流畅" : fps >= 30 ? "可用" : "过载";

  const stage = useMemo(
    () => ({ position: "relative" as const, height: 460, borderRadius: 8, overflow: "hidden" as const }),
    []
  );

  return (
    <div>
      <div className="perf-bar">
        <b className="perf-title">海量弹幕压测</b>
        <button type="button" className="mp-btn" onClick={() => spawn(1000)}>
          1000 条
        </button>
        <button type="button" className="mp-btn" onClick={() => spawn(2000)}>
          2000 条
        </button>
        <button type="button" className="mp-btn" onClick={() => spawn(3000)}>
          3000 条
        </button>
        <button
          type="button"
          className="mp-btn mp-btn-danger"
          onClick={() => spawn(3000, LOOP_OVERLOAD)}
        >
          极限 · 3000 条 / 16s
        </button>
        <button type="button" className="mp-btn" onClick={clear}>
          清空
        </button>
        <span className="perf-stat">
          总数 <b>{count}</b> · 铺开 <b>{count === 0 ? "—" : \`\${loop}s\`}</b> · 在飞{" "}
          <b>{active}</b> · 丢弃{" "}
          <b style={{ color: dropped > 0 ? "#f2685e" : "var(--dim)" }}>{dropped}</b> · FPS{" "}
          {/* 空载也显示 FPS：它就是这台机器的刷新基线，能对照看出「掉帧是弹幕多还是环境本身限帧」 */}
          <b style={{ color: count === 0 ? "var(--dim)" : fpsColor }}>
            {fps}
            {count > 0 ? \`（\${fpsState}）\` : ""}
          </b>
        </span>
      </div>

      <div
        data-danmaku-root
        style={{
          ...stage,
          background:
            "linear-gradient(135deg, #1b2a4a 0%, #0d1424 60%, #2a1730 100%)",
          boxShadow: "inset 0 0 80px rgba(0,0,0,0.45)",
        }}
      >
        <DanmakuCore
          ref={coreRef}
          items={items}
          currentTime={currentTime}
          playing
          trackHeight={22}
          baseFontSize={16}
          containerStyle={{ width: "100%", height: "100%" }}
        />
        {count === 0 ? (
          <div className="perf-empty">
            <span>点上方「1000 / 2000 / 3000 条」开始压测</span>
            <span className="perf-tip">（也可用 ?n=3000 深链打开即满载）</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export const meta = {
  id: "performance",
  title: "海量弹幕压测",
  group: "压测",
  ref: { label: "性能基准", url: "https://github.com/frankvane/vane-components" },
  pain: "大促峰值几万条弹幕涌入：Canvas 内核能不能扛住？这里一键灌 1000/2000/3000 条，实时看 FPS 与在飞条数。",
  plugs: [],
  props: ["items={items}", "currentTime={t}", "playing"],
  note:
    "纯内核压测：不装任何业务插件，直接测 DanmakuCore 的轨道调度 + 逐帧绘制上限。三个读数必须分清 —— 总量 / 在飞 / 丢弃，在飞与丢弃直接读内核 getStats()，不是按时间区间估的理论值。画布画出界的弹幕会立刻从活跃表里回收、绘制前再跳过完全出画的条目，所以「看不见的弹幕」不产生渲染开销；真正的上限是「同时在飞多少条 + 每轨多久能复用一次」。本机演示尺寸（高 460、轨高 22、字号 16）下，在飞 70~80 条、约 20 条/秒进场就顶到容量，继续加量只会让「丢弃」上涨而 FPS 不涨 —— 丢弃开始上涨的那一档就是这块画布的饱和点。饱和时内核先排队等空轨，等 1.2 秒仍无位才丢弃并计数，绝不把弹幕叠进同一轨（叠字既看不清，也是最贵的光栅化）。切到顶部「压测」分类只看这一张，FPS 读数最准；也可用 \`?n=3000&t=16\` 深链打开即满载。",
  tone: "dark",
};
`,tw=Object.assign({"./01-live-streaming.tsx":PS,"./02-media-occlusion.tsx":jS,"./03-interaction.tsx":MS,"./04-content-moderation.tsx":FS,"./05-full-stack.tsx":HS,"./06-performance.tsx":ZS}),rw=Object.assign({"./01-live-streaming.tsx":YS,"./02-media-occlusion.tsx":XS,"./03-interaction.tsx":qS,"./04-content-moderation.tsx":JS,"./05-full-stack.tsx":ew,"./06-performance.tsx":nw}),ow=e=>e.replace(/^\.\//,""),di=Object.entries(tw).map(([e,n])=>{const t=ow(e);return{meta:n.meta,Component:n.default,file:t,source:rw[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),mw=di.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),pw=Array.from(new Set(di.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort(),iw=x.lazy(()=>fs(()=>import("./HomePage-5r-9nj2K.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),lw=x.lazy(()=>fs(()=>import("./PluginsPage-Cd6h81d5.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),aw=x.lazy(()=>fs(()=>import("./ScenariosPage-BTVJuiCX.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),sw={pkg:"vane-danmaku",brand:"D",subtitle:"弹幕 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${fa.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${di.length} plates`}],routes:[{path:"/",element:c.jsx(iw,{})},{path:"/plugins",element:c.jsx(lw,{})},{path:"/scenarios",element:c.jsx(aw,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:Lk.map(e=>({key:e,label:Gf[e].label})),entries:da,detail:(e,n)=>c.jsx(gS,{entry:e,order:n})},footer:[`${fa.length} PLUGINS · ${di.length} PLATES`,`${da.length} DEMOS · 插件索引`]};function uw(){return c.jsx(Nh,{config:sw})}cl.createRoot(document.getElementById("root")).render(c.jsx(uw,{}));export{Mk as C,da as D,uc as G,eo as L,fa as P,di as S,pw as U,fw as a,dw as b,de as c,mw as d,c as j,x as r};
