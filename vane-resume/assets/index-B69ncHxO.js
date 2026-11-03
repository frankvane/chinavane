var Ff=Object.defineProperty;var Bf=(e,t,n)=>t in e?Ff(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Oa=(e,t,n)=>Bf(e,typeof t!="symbol"?t+"":t,n);function Vf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var yS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uc={exports:{}},Ko={},cc={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Er=Symbol.for("react.element"),Hf=Symbol.for("react.portal"),Kf=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),Yf=Symbol.for("react.profiler"),Jf=Symbol.for("react.provider"),qf=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),Xf=Symbol.for("react.suspense"),Zf=Symbol.for("react.memo"),ep=Symbol.for("react.lazy"),za=Symbol.iterator;function tp(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fc=Object.assign,pc={};function zn(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||dc}zn.prototype.isReactComponent={};zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mc(){}mc.prototype=zn.prototype;function rs(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||dc}var os=rs.prototype=new mc;os.constructor=rs;fc(os,zn.prototype);os.isPureReactComponent=!0;var $a=Array.isArray,gc=Object.prototype.hasOwnProperty,is={current:null},hc={key:!0,ref:!0,__self:!0,__source:!0};function yc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)gc.call(t,r)&&!hc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Er,type:e,key:i,ref:l,props:o,_owner:is.current}}function np(e,t){return{$$typeof:Er,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===Er}function rp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ma=/\/+/g;function _i(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rp(""+e.key):t.toString(36)}function lo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Er:case Hf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+_i(l,0):r,$a(o)?(n="",e!=null&&(n=e.replace(Ma,"$&/")+"/"),lo(o,t,n,"",function(c){return c})):o!=null&&(ls(o)&&(o=np(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ma,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",$a(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+_i(i,s);l+=lo(i,t,n,a,o)}else if(a=tp(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+_i(i,s++),l+=lo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ar(e,t,n){if(e==null)return e;var r=[],o=0;return lo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function op(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},so={transition:null},ip={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:so,ReactCurrentOwner:is};function vc(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Ar,forEach:function(e,t,n){Ar(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ar(e,function(){t++}),t},toArray:function(e){return Ar(e,function(t){return t})||[]},only:function(e){if(!ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=zn;$.Fragment=Kf;$.Profiler=Yf;$.PureComponent=rs;$.StrictMode=Qf;$.Suspense=Xf;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ip;$.act=vc;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=is.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)gc.call(t,a)&&!hc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Er,type:e.type,key:o,ref:i,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:qf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jf,_context:e},e.Consumer=e};$.createElement=yc;$.createFactory=function(e){var t=yc.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Gf,render:e}};$.isValidElement=ls;$.lazy=function(e){return{$$typeof:ep,_payload:{_status:-1,_result:e},_init:op}};$.memo=function(e,t){return{$$typeof:Zf,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=so.transition;so.transition={};try{e()}finally{so.transition=t}};$.unstable_act=vc;$.useCallback=function(e,t){return ye.current.useCallback(e,t)};$.useContext=function(e){return ye.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};$.useEffect=function(e,t){return ye.current.useEffect(e,t)};$.useId=function(){return ye.current.useId()};$.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return ye.current.useMemo(e,t)};$.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};$.useRef=function(e){return ye.current.useRef(e)};$.useState=function(e){return ye.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return ye.current.useTransition()};$.version="18.3.1";cc.exports=$;var v=cc.exports;const br=Wf(v),lp=Vf({__proto__:null,default:br},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp=v,ap=Symbol.for("react.element"),up=Symbol.for("react.fragment"),cp=Object.prototype.hasOwnProperty,dp=sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fp={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)cp.call(t,r)&&!fp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ap,type:e,key:i,ref:l,props:o,_owner:dp.current}}Ko.Fragment=up;Ko.jsx=xc;Ko.jsxs=xc;uc.exports=Ko;var u=uc.exports,nl={},Sc={exports:{}},Ee={},wc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,T){var D=j.length;j.push(T);e:for(;0<D;){var L=D-1>>>1,U=j[L];if(0<o(U,T))j[L]=T,j[D]=U,D=L;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var T=j[0],D=j.pop();if(D!==T){j[0]=D;e:for(var L=0,U=j.length,De=U>>>1;L<De;){var ue=2*(L+1)-1,me=j[ue],Qe=ue+1,It=j[Qe];if(0>o(me,D))Qe<U&&0>o(It,me)?(j[L]=It,j[Qe]=D,L=Qe):(j[L]=me,j[ue]=D,L=ue);else if(Qe<U&&0>o(It,D))j[L]=It,j[Qe]=D,L=Qe;else break e}}return T}function o(j,T){var D=j.sortIndex-T.sortIndex;return D!==0?D:j.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],d=1,f=null,p=3,x=!1,S=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(j){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=j)r(c),T.sortIndex=T.expirationTime,t(a,T);else break;T=n(c)}}function w(j){if(y=!1,h(j),!S)if(n(a)!==null)S=!0,Lt(C);else{var T=n(c);T!==null&&Nt(w,T.startTime-j)}}function C(j,T){S=!1,y&&(y=!1,g(b),b=-1),x=!0;var D=p;try{for(h(T),f=n(a);f!==null&&(!(f.expirationTime>T)||j&&!ie());){var L=f.callback;if(typeof L=="function"){f.callback=null,p=f.priorityLevel;var U=L(f.expirationTime<=T);T=e.unstable_now(),typeof U=="function"?f.callback=U:f===n(a)&&r(a),h(T)}else r(a);f=n(a)}if(f!==null)var De=!0;else{var ue=n(c);ue!==null&&Nt(w,ue.startTime-T),De=!1}return De}finally{f=null,p=D,x=!1}}var _=!1,R=null,b=-1,N=5,z=-1;function ie(){return!(e.unstable_now()-z<N)}function Ke(){if(R!==null){var j=e.unstable_now();z=j;var T=!0;try{T=R(!0,j)}finally{T?Te():(_=!1,R=null)}}else _=!1}var Te;if(typeof m=="function")Te=function(){m(Ke)};else if(typeof MessageChannel<"u"){var $t=new MessageChannel,Mt=$t.port2;$t.port1.onmessage=Ke,Te=function(){Mt.postMessage(null)}}else Te=function(){k(Ke,0)};function Lt(j){R=j,_||(_=!0,Te())}function Nt(j,T){b=k(function(){j(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,Lt(C))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(j){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var D=p;p=T;try{return j()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,T){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var D=p;p=j;try{return T()}finally{p=D}},e.unstable_scheduleCallback=function(j,T,D){var L=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?L+D:L):D=L,j){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=D+U,j={id:d++,callback:T,priorityLevel:j,startTime:D,expirationTime:U,sortIndex:-1},D>L?(j.sortIndex=D,t(c,j),n(a)===null&&j===n(c)&&(y?(g(b),b=-1):y=!0,Nt(w,D-L))):(j.sortIndex=U,t(a,j),S||x||(S=!0,Lt(C))),j},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(j){var T=p;return function(){var D=p;p=T;try{return j.apply(this,arguments)}finally{p=D}}}})(kc);wc.exports=kc;var pp=wc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=v,je=pp;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pc=new Set,sr={};function Zt(e,t){Cn(e,t),Cn(e+"Capture",t)}function Cn(e,t){for(sr[e]=t,e=0;e<t.length;e++)Pc.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rl=Object.prototype.hasOwnProperty,gp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,La={},Na={};function hp(e){return rl.call(Na,e)?!0:rl.call(La,e)?!1:gp.test(e)?Na[e]=!0:(La[e]=!0,!1)}function yp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vp(e,t,n,r){if(t===null||typeof t>"u"||yp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ss=/[\-:]([a-z])/g;function as(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ss,as);ae[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ss,as);ae[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ss,as);ae[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function us(e,t,n,r){var o=ae.hasOwnProperty(t)?ae[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vp(t,n,o,r)&&(n=null),r||o===null?hp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var at=mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ur=Symbol.for("react.element"),sn=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),cs=Symbol.for("react.strict_mode"),ol=Symbol.for("react.profiler"),_c=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),ds=Symbol.for("react.forward_ref"),il=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),fs=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),Rc=Symbol.for("react.offscreen"),Ia=Symbol.iterator;function In(e){return e===null||typeof e!="object"?null:(e=Ia&&e[Ia]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Ci;function Qn(e){if(Ci===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ci=t&&t[1]||""}return`
`+Ci+e}var Ri=!1;function ji(e,t){if(!e||Ri)return"";Ri=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ri=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qn(e):""}function xp(e){switch(e.tag){case 5:return Qn(e.type);case 16:return Qn("Lazy");case 13:return Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 2:case 15:return e=ji(e.type,!1),e;case 11:return e=ji(e.type.render,!1),e;case 1:return e=ji(e.type,!0),e;default:return""}}function sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case an:return"Fragment";case sn:return"Portal";case ol:return"Profiler";case cs:return"StrictMode";case il:return"Suspense";case ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cc:return(e.displayName||"Context")+".Consumer";case _c:return(e._context.displayName||"Context")+".Provider";case ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fs:return t=e.displayName||null,t!==null?t:sl(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return sl(e(t))}catch{}}return null}function Sp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sl(t);case 8:return t===cs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wp(e){var t=jc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fr(e){e._valueTracker||(e._valueTracker=wp(e))}function Ec(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=jc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function al(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bc(e,t){t=t.checked,t!=null&&us(e,"checked",t,!1)}function ul(e,t){bc(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cl(e,t.type,n):t.hasOwnProperty("defaultValue")&&cl(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ua(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cl(e,t,n){(t!=="number"||xo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yn=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Yn(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}function Tc(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ba(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Br,Oc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kp=["Webkit","ms","Moz","O"];Object.keys(Xn).forEach(function(e){kp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xn[t]=Xn[e]})});function zc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xn.hasOwnProperty(e)&&Xn[e]?(""+t).trim():t+"px"}function $c(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=zc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Pp=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pl(e,t){if(t){if(Pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,Sn=null,wn=null;function Va(e){if(e=Or(e)){if(typeof hl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Go(t),hl(e.stateNode,e.type,t))}}function Mc(e){Sn?wn?wn.push(e):wn=[e]:Sn=e}function Lc(){if(Sn){var e=Sn,t=wn;if(wn=Sn=null,Va(e),t)for(e=0;e<t.length;e++)Va(t[e])}}function Nc(e,t){return e(t)}function Ic(){}var Ei=!1;function Ac(e,t,n){if(Ei)return e(t,n);Ei=!0;try{return Nc(e,t,n)}finally{Ei=!1,(Sn!==null||wn!==null)&&(Ic(),Lc())}}function ur(e,t){var n=e.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var yl=!1;if(ot)try{var An={};Object.defineProperty(An,"passive",{get:function(){yl=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{yl=!1}function _p(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Zn=!1,So=null,wo=!1,vl=null,Cp={onError:function(e){Zn=!0,So=e}};function Rp(e,t,n,r,o,i,l,s,a){Zn=!1,So=null,_p.apply(Cp,arguments)}function jp(e,t,n,r,o,i,l,s,a){if(Rp.apply(this,arguments),Zn){if(Zn){var c=So;Zn=!1,So=null}else throw Error(P(198));wo||(wo=!0,vl=c)}}function en(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wa(e){if(en(e)!==e)throw Error(P(188))}function Ep(e){var t=e.alternate;if(!t){if(t=en(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Wa(o),e;if(i===r)return Wa(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Fc(e){return e=Ep(e),e!==null?Bc(e):null}function Bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bc(e);if(t!==null)return t;e=e.sibling}return null}var Vc=je.unstable_scheduleCallback,Ha=je.unstable_cancelCallback,bp=je.unstable_shouldYield,Tp=je.unstable_requestPaint,q=je.unstable_now,Dp=je.unstable_getCurrentPriorityLevel,ms=je.unstable_ImmediatePriority,Wc=je.unstable_UserBlockingPriority,ko=je.unstable_NormalPriority,Op=je.unstable_LowPriority,Hc=je.unstable_IdlePriority,Qo=null,Ge=null;function zp(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Qo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Lp,$p=Math.log,Mp=Math.LN2;function Lp(e){return e>>>=0,e===0?32:31-($p(e)/Mp|0)|0}var Vr=64,Wr=4194304;function Jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Po(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Jn(s):(i&=l,i!==0&&(r=Jn(i)))}else l=n&~o,l!==0?r=Jn(l):i!==0&&(r=Jn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),o=1<<n,r|=e[n],t&=~o;return r}function Np(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ip(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ve(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Np(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kc(){var e=Vr;return Vr<<=1,!(Vr&4194240)&&(Vr=64),e}function bi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Ap(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ve(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function gs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var I=0;function Qc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yc,hs,Jc,qc,Gc,Sl=!1,Hr=[],vt=null,xt=null,St=null,cr=new Map,dr=new Map,pt=[],Up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ka(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(t.pointerId)}}function Un(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Or(t),t!==null&&hs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Fp(e,t,n,r,o){switch(t){case"focusin":return vt=Un(vt,e,t,n,r,o),!0;case"dragenter":return xt=Un(xt,e,t,n,r,o),!0;case"mouseover":return St=Un(St,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return cr.set(i,Un(cr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,dr.set(i,Un(dr.get(i)||null,e,t,n,r,o)),!0}return!1}function Xc(e){var t=Vt(e.target);if(t!==null){var n=en(t);if(n!==null){if(t=n.tag,t===13){if(t=Uc(n),t!==null){e.blockedOn=t,Gc(e.priority,function(){Jc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gl=r,n.target.dispatchEvent(r),gl=null}else return t=Or(n),t!==null&&hs(t),e.blockedOn=n,!1;t.shift()}return!0}function Qa(e,t,n){ao(e)&&n.delete(t)}function Bp(){Sl=!1,vt!==null&&ao(vt)&&(vt=null),xt!==null&&ao(xt)&&(xt=null),St!==null&&ao(St)&&(St=null),cr.forEach(Qa),dr.forEach(Qa)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Bp)))}function fr(e){function t(o){return Fn(o,e)}if(0<Hr.length){Fn(Hr[0],e);for(var n=1;n<Hr.length;n++){var r=Hr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vt!==null&&Fn(vt,e),xt!==null&&Fn(xt,e),St!==null&&Fn(St,e),cr.forEach(t),dr.forEach(t),n=0;n<pt.length;n++)r=pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pt.length&&(n=pt[0],n.blockedOn===null);)Xc(n),n.blockedOn===null&&pt.shift()}var kn=at.ReactCurrentBatchConfig,_o=!0;function Vp(e,t,n,r){var o=I,i=kn.transition;kn.transition=null;try{I=1,ys(e,t,n,r)}finally{I=o,kn.transition=i}}function Wp(e,t,n,r){var o=I,i=kn.transition;kn.transition=null;try{I=4,ys(e,t,n,r)}finally{I=o,kn.transition=i}}function ys(e,t,n,r){if(_o){var o=wl(e,t,n,r);if(o===null)Ai(e,t,r,Co,n),Ka(e,r);else if(Fp(o,e,t,n,r))r.stopPropagation();else if(Ka(e,r),t&4&&-1<Up.indexOf(e)){for(;o!==null;){var i=Or(o);if(i!==null&&Yc(i),i=wl(e,t,n,r),i===null&&Ai(e,t,r,Co,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ai(e,t,r,null,n)}}var Co=null;function wl(e,t,n,r){if(Co=null,e=ps(r),e=Vt(e),e!==null)if(t=en(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Co=e,null}function Zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dp()){case ms:return 1;case Wc:return 4;case ko:case Op:return 16;case Hc:return 536870912;default:return 16}default:return 16}}var gt=null,vs=null,uo=null;function ed(){if(uo)return uo;var e,t=vs,n=t.length,r,o="value"in gt?gt.value:gt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return uo=o.slice(e,1<r?1-r:void 0)}function co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function Ya(){return!1}function be(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kr:Ya,this.isPropagationStopped=Ya,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=be($n),Dr=Y({},$n,{view:0,detail:0}),Hp=be(Dr),Ti,Di,Bn,Yo=Y({},Dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(Ti=e.screenX-Bn.screenX,Di=e.screenY-Bn.screenY):Di=Ti=0,Bn=e),Ti)},movementY:function(e){return"movementY"in e?e.movementY:Di}}),Ja=be(Yo),Kp=Y({},Yo,{dataTransfer:0}),Qp=be(Kp),Yp=Y({},Dr,{relatedTarget:0}),Oi=be(Yp),Jp=Y({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=be(Jp),Gp=Y({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xp=be(Gp),Zp=Y({},$n,{data:0}),qa=be(Zp),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nm[e])?!!t[e]:!1}function Ss(){return rm}var om=Y({},Dr,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ss,charCode:function(e){return e.type==="keypress"?co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=be(om),lm=Y({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ga=be(lm),sm=Y({},Dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ss}),am=be(sm),um=Y({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=be(um),dm=Y({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fm=be(dm),pm=[9,13,27,32],ws=ot&&"CompositionEvent"in window,er=null;ot&&"documentMode"in document&&(er=document.documentMode);var mm=ot&&"TextEvent"in window&&!er,td=ot&&(!ws||er&&8<er&&11>=er),Xa=" ",Za=!1;function nd(e,t){switch(e){case"keyup":return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var un=!1;function gm(e,t){switch(e){case"compositionend":return rd(t);case"keypress":return t.which!==32?null:(Za=!0,Xa);case"textInput":return e=t.data,e===Xa&&Za?null:e;default:return null}}function hm(e,t){if(un)return e==="compositionend"||!ws&&nd(e,t)?(e=ed(),uo=vs=gt=null,un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return td&&t.locale!=="ko"?null:t.data;default:return null}}var ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ym[e.type]:t==="textarea"}function od(e,t,n,r){Mc(r),t=Ro(t,"onChange"),0<t.length&&(n=new xs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var tr=null,pr=null;function vm(e){gd(e,0)}function Jo(e){var t=fn(e);if(Ec(t))return e}function xm(e,t){if(e==="change")return t}var id=!1;if(ot){var zi;if(ot){var $i="oninput"in document;if(!$i){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),$i=typeof tu.oninput=="function"}zi=$i}else zi=!1;id=zi&&(!document.documentMode||9<document.documentMode)}function nu(){tr&&(tr.detachEvent("onpropertychange",ld),pr=tr=null)}function ld(e){if(e.propertyName==="value"&&Jo(pr)){var t=[];od(t,pr,e,ps(e)),Ac(vm,t)}}function Sm(e,t,n){e==="focusin"?(nu(),tr=t,pr=n,tr.attachEvent("onpropertychange",ld)):e==="focusout"&&nu()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(pr)}function km(e,t){if(e==="click")return Jo(t)}function Pm(e,t){if(e==="input"||e==="change")return Jo(t)}function _m(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:_m;function mr(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!rl.call(t,o)||!He(e[o],t[o]))return!1}return!0}function ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var n=ru(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ru(n)}}function sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(){for(var e=window,t=xo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xo(e.document)}return t}function ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cm(e){var t=ad(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sd(n.ownerDocument.documentElement,n)){if(r!==null&&ks(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ou(n,i);var l=ou(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rm=ot&&"documentMode"in document&&11>=document.documentMode,cn=null,kl=null,nr=null,Pl=!1;function iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pl||cn==null||cn!==xo(r)||(r=cn,"selectionStart"in r&&ks(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&mr(nr,r)||(nr=r,r=Ro(kl,"onSelect"),0<r.length&&(t=new xs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cn)))}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionend:Qr("Transition","TransitionEnd")},Mi={},ud={};ot&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function qo(e){if(Mi[e])return Mi[e];if(!dn[e])return e;var t=dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ud)return Mi[e]=t[n];return e}var cd=qo("animationend"),dd=qo("animationiteration"),fd=qo("animationstart"),pd=qo("transitionend"),md=new Map,lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){md.set(e,t),Zt(t,[e])}for(var Li=0;Li<lu.length;Li++){var Ni=lu[Li],jm=Ni.toLowerCase(),Em=Ni[0].toUpperCase()+Ni.slice(1);Tt(jm,"on"+Em)}Tt(cd,"onAnimationEnd");Tt(dd,"onAnimationIteration");Tt(fd,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(pd,"onTransitionEnd");Cn("onMouseEnter",["mouseout","mouseover"]);Cn("onMouseLeave",["mouseout","mouseover"]);Cn("onPointerEnter",["pointerout","pointerover"]);Cn("onPointerLeave",["pointerout","pointerover"]);Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));function su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jp(r,t,void 0,e),e.currentTarget=null}function gd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;su(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;su(o,s,c),i=a}}}if(wo)throw e=vl,wo=!1,vl=null,e}function V(e,t){var n=t[El];n===void 0&&(n=t[El]=new Set);var r=e+"__bubble";n.has(r)||(hd(t,e,2,!1),n.add(r))}function Ii(e,t,n){var r=0;t&&(r|=4),hd(n,e,r,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function gr(e){if(!e[Yr]){e[Yr]=!0,Pc.forEach(function(n){n!=="selectionchange"&&(bm.has(n)||Ii(n,!1,e),Ii(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yr]||(t[Yr]=!0,Ii("selectionchange",!1,t))}}function hd(e,t,n,r){switch(Zc(t)){case 1:var o=Vp;break;case 4:o=Wp;break;default:o=ys}n=o.bind(null,t,n,e),o=void 0,!yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ai(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Vt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Ac(function(){var c=i,d=ps(n),f=[];e:{var p=md.get(e);if(p!==void 0){var x=xs,S=e;switch(e){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":x=im;break;case"focusin":S="focus",x=Oi;break;case"focusout":S="blur",x=Oi;break;case"beforeblur":case"afterblur":x=Oi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=am;break;case cd:case dd:case fd:x=qp;break;case pd:x=cm;break;case"scroll":x=Hp;break;case"wheel":x=fm;break;case"copy":case"cut":case"paste":x=Xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ga}var y=(t&4)!==0,k=!y&&e==="scroll",g=y?p!==null?p+"Capture":null:p;y=[];for(var m=c,h;m!==null;){h=m;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,g!==null&&(w=ur(m,g),w!=null&&y.push(hr(m,w,h)))),k)break;m=m.return}0<y.length&&(p=new x(p,S,null,n,d),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&n!==gl&&(S=n.relatedTarget||n.fromElement)&&(Vt(S)||S[it]))break e;if((x||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=c,S=S?Vt(S):null,S!==null&&(k=en(S),S!==k||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=c),x!==S)){if(y=Ja,w="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ga,w="onPointerLeave",g="onPointerEnter",m="pointer"),k=x==null?p:fn(x),h=S==null?p:fn(S),p=new y(w,m+"leave",x,n,d),p.target=k,p.relatedTarget=h,w=null,Vt(d)===c&&(y=new y(g,m+"enter",S,n,d),y.target=h,y.relatedTarget=k,w=y),k=w,x&&S)t:{for(y=x,g=S,m=0,h=y;h;h=on(h))m++;for(h=0,w=g;w;w=on(w))h++;for(;0<m-h;)y=on(y),m--;for(;0<h-m;)g=on(g),h--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=on(y),g=on(g)}y=null}else y=null;x!==null&&au(f,p,x,y,!1),S!==null&&k!==null&&au(f,k,S,y,!0)}}e:{if(p=c?fn(c):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var C=xm;else if(eu(p))if(id)C=Pm;else{C=wm;var _=Sm}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=km);if(C&&(C=C(e,c))){od(f,C,n,d);break e}_&&_(e,p,c),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&cl(p,"number",p.value)}switch(_=c?fn(c):window,e){case"focusin":(eu(_)||_.contentEditable==="true")&&(cn=_,kl=c,nr=null);break;case"focusout":nr=kl=cn=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,iu(f,n,d);break;case"selectionchange":if(Rm)break;case"keydown":case"keyup":iu(f,n,d)}var R;if(ws)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else un?nd(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(td&&n.locale!=="ko"&&(un||b!=="onCompositionStart"?b==="onCompositionEnd"&&un&&(R=ed()):(gt=d,vs="value"in gt?gt.value:gt.textContent,un=!0)),_=Ro(c,b),0<_.length&&(b=new qa(b,e,null,n,d),f.push({event:b,listeners:_}),R?b.data=R:(R=rd(n),R!==null&&(b.data=R)))),(R=mm?gm(e,n):hm(e,n))&&(c=Ro(c,"onBeforeInput"),0<c.length&&(d=new qa("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=R))}gd(f,t)})}function hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ur(e,n),i!=null&&r.unshift(hr(e,i,o)),i=ur(e,t),i!=null&&r.push(hr(e,i,o))),e=e.return}return r}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=ur(n,i),a!=null&&l.unshift(hr(n,a,s))):o||(a=ur(n,i),a!=null&&l.push(hr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Tm=/\r\n?/g,Dm=/\u0000|\uFFFD/g;function uu(e){return(typeof e=="string"?e:""+e).replace(Tm,`
`).replace(Dm,"")}function Jr(e,t,n){if(t=uu(t),uu(e)!==t&&n)throw Error(P(425))}function jo(){}var _l=null,Cl=null;function Rl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,Om=typeof clearTimeout=="function"?clearTimeout:void 0,cu=typeof Promise=="function"?Promise:void 0,zm=typeof queueMicrotask=="function"?queueMicrotask:typeof cu<"u"?function(e){return cu.resolve(null).then(e).catch($m)}:jl;function $m(e){setTimeout(function(){throw e})}function Ui(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);fr(t)}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function du(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Mn,yr="__reactProps$"+Mn,it="__reactContainer$"+Mn,El="__reactEvents$"+Mn,Mm="__reactListeners$"+Mn,Lm="__reactHandles$"+Mn;function Vt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[it]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=du(e);e!==null;){if(n=e[qe])return n;e=du(e)}return t}e=n,n=e.parentNode}return null}function Or(e){return e=e[qe]||e[it],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Go(e){return e[yr]||null}var bl=[],pn=-1;function Dt(e){return{current:e}}function W(e){0>pn||(e.current=bl[pn],bl[pn]=null,pn--)}function F(e,t){pn++,bl[pn]=e.current,e.current=t}var Et={},pe=Dt(Et),we=Dt(!1),Yt=Et;function Rn(e,t){var n=e.type.contextTypes;if(!n)return Et;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ke(e){return e=e.childContextTypes,e!=null}function Eo(){W(we),W(pe)}function fu(e,t,n){if(pe.current!==Et)throw Error(P(168));F(pe,t),F(we,n)}function yd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,Sp(e)||"Unknown",o));return Y({},n,r)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Et,Yt=pe.current,F(pe,e),F(we,we.current),!0}function pu(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=yd(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,W(we),W(pe),F(pe,e)):W(we),F(we,n)}var et=null,Xo=!1,Fi=!1;function vd(e){et===null?et=[e]:et.push(e)}function Nm(e){Xo=!0,vd(e)}function Ot(){if(!Fi&&et!==null){Fi=!0;var e=0,t=I;try{var n=et;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}et=null,Xo=!1}catch(o){throw et!==null&&(et=et.slice(e+1)),Vc(ms,Ot),o}finally{I=t,Fi=!1}}return null}var mn=[],gn=0,To=null,Do=0,ze=[],$e=0,Jt=null,tt=1,nt="";function At(e,t){mn[gn++]=Do,mn[gn++]=To,To=e,Do=t}function xd(e,t,n){ze[$e++]=tt,ze[$e++]=nt,ze[$e++]=Jt,Jt=e;var r=tt;e=nt;var o=32-Ve(r)-1;r&=~(1<<o),n+=1;var i=32-Ve(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,tt=1<<32-Ve(t)+o|n<<o|r,nt=i+e}else tt=1<<i|n<<o|r,nt=e}function Ps(e){e.return!==null&&(At(e,1),xd(e,1,0))}function _s(e){for(;e===To;)To=mn[--gn],mn[gn]=null,Do=mn[--gn],mn[gn]=null;for(;e===Jt;)Jt=ze[--$e],ze[$e]=null,nt=ze[--$e],ze[$e]=null,tt=ze[--$e],ze[$e]=null}var Re=null,Ce=null,H=!1,Be=null;function Sd(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Ce=wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:tt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Ce=null,!0):!1;default:return!1}}function Tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(H){var t=Ce;if(t){var n=t;if(!mu(e,t)){if(Tl(e))throw Error(P(418));t=wt(n.nextSibling);var r=Re;t&&mu(e,t)?Sd(r,n):(e.flags=e.flags&-4097|2,H=!1,Re=e)}}else{if(Tl(e))throw Error(P(418));e.flags=e.flags&-4097|2,H=!1,Re=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function qr(e){if(e!==Re)return!1;if(!H)return gu(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rl(e.type,e.memoizedProps)),t&&(t=Ce)){if(Tl(e))throw wd(),Error(P(418));for(;t;)Sd(e,t),t=wt(t.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Re?wt(e.stateNode.nextSibling):null;return!0}function wd(){for(var e=Ce;e;)e=wt(e.nextSibling)}function jn(){Ce=Re=null,H=!1}function Cs(e){Be===null?Be=[e]:Be.push(e)}var Im=at.ReactCurrentBatchConfig;function Vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Gr(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hu(e){var t=e._init;return t(e._payload)}function kd(e){function t(g,m){if(e){var h=g.deletions;h===null?(g.deletions=[m],g.flags|=16):h.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=Ct(g,m),g.index=0,g.sibling=null,g}function i(g,m,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<m?(g.flags|=2,m):h):(g.flags|=2,m)):(g.flags|=1048576,m)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,h,w){return m===null||m.tag!==6?(m=Yi(h,g.mode,w),m.return=g,m):(m=o(m,h),m.return=g,m)}function a(g,m,h,w){var C=h.type;return C===an?d(g,m,h.props.children,w,h.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dt&&hu(C)===m.type)?(w=o(m,h.props),w.ref=Vn(g,m,h),w.return=g,w):(w=vo(h.type,h.key,h.props,null,g.mode,w),w.ref=Vn(g,m,h),w.return=g,w)}function c(g,m,h,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=Ji(h,g.mode,w),m.return=g,m):(m=o(m,h.children||[]),m.return=g,m)}function d(g,m,h,w,C){return m===null||m.tag!==7?(m=Qt(h,g.mode,w,C),m.return=g,m):(m=o(m,h),m.return=g,m)}function f(g,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Yi(""+m,g.mode,h),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ur:return h=vo(m.type,m.key,m.props,null,g.mode,h),h.ref=Vn(g,null,m),h.return=g,h;case sn:return m=Ji(m,g.mode,h),m.return=g,m;case dt:var w=m._init;return f(g,w(m._payload),h)}if(Yn(m)||In(m))return m=Qt(m,g.mode,h,null),m.return=g,m;Gr(g,m)}return null}function p(g,m,h,w){var C=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:s(g,m,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ur:return h.key===C?a(g,m,h,w):null;case sn:return h.key===C?c(g,m,h,w):null;case dt:return C=h._init,p(g,m,C(h._payload),w)}if(Yn(h)||In(h))return C!==null?null:d(g,m,h,w,null);Gr(g,h)}return null}function x(g,m,h,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(h)||null,s(m,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ur:return g=g.get(w.key===null?h:w.key)||null,a(m,g,w,C);case sn:return g=g.get(w.key===null?h:w.key)||null,c(m,g,w,C);case dt:var _=w._init;return x(g,m,h,_(w._payload),C)}if(Yn(w)||In(w))return g=g.get(h)||null,d(m,g,w,C,null);Gr(m,w)}return null}function S(g,m,h,w){for(var C=null,_=null,R=m,b=m=0,N=null;R!==null&&b<h.length;b++){R.index>b?(N=R,R=null):N=R.sibling;var z=p(g,R,h[b],w);if(z===null){R===null&&(R=N);break}e&&R&&z.alternate===null&&t(g,R),m=i(z,m,b),_===null?C=z:_.sibling=z,_=z,R=N}if(b===h.length)return n(g,R),H&&At(g,b),C;if(R===null){for(;b<h.length;b++)R=f(g,h[b],w),R!==null&&(m=i(R,m,b),_===null?C=R:_.sibling=R,_=R);return H&&At(g,b),C}for(R=r(g,R);b<h.length;b++)N=x(R,g,b,h[b],w),N!==null&&(e&&N.alternate!==null&&R.delete(N.key===null?b:N.key),m=i(N,m,b),_===null?C=N:_.sibling=N,_=N);return e&&R.forEach(function(ie){return t(g,ie)}),H&&At(g,b),C}function y(g,m,h,w){var C=In(h);if(typeof C!="function")throw Error(P(150));if(h=C.call(h),h==null)throw Error(P(151));for(var _=C=null,R=m,b=m=0,N=null,z=h.next();R!==null&&!z.done;b++,z=h.next()){R.index>b?(N=R,R=null):N=R.sibling;var ie=p(g,R,z.value,w);if(ie===null){R===null&&(R=N);break}e&&R&&ie.alternate===null&&t(g,R),m=i(ie,m,b),_===null?C=ie:_.sibling=ie,_=ie,R=N}if(z.done)return n(g,R),H&&At(g,b),C;if(R===null){for(;!z.done;b++,z=h.next())z=f(g,z.value,w),z!==null&&(m=i(z,m,b),_===null?C=z:_.sibling=z,_=z);return H&&At(g,b),C}for(R=r(g,R);!z.done;b++,z=h.next())z=x(R,g,b,z.value,w),z!==null&&(e&&z.alternate!==null&&R.delete(z.key===null?b:z.key),m=i(z,m,b),_===null?C=z:_.sibling=z,_=z);return e&&R.forEach(function(Ke){return t(g,Ke)}),H&&At(g,b),C}function k(g,m,h,w){if(typeof h=="object"&&h!==null&&h.type===an&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ur:e:{for(var C=h.key,_=m;_!==null;){if(_.key===C){if(C=h.type,C===an){if(_.tag===7){n(g,_.sibling),m=o(_,h.props.children),m.return=g,g=m;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dt&&hu(C)===_.type){n(g,_.sibling),m=o(_,h.props),m.ref=Vn(g,_,h),m.return=g,g=m;break e}n(g,_);break}else t(g,_);_=_.sibling}h.type===an?(m=Qt(h.props.children,g.mode,w,h.key),m.return=g,g=m):(w=vo(h.type,h.key,h.props,null,g.mode,w),w.ref=Vn(g,m,h),w.return=g,g=w)}return l(g);case sn:e:{for(_=h.key;m!==null;){if(m.key===_)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){n(g,m.sibling),m=o(m,h.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Ji(h,g.mode,w),m.return=g,g=m}return l(g);case dt:return _=h._init,k(g,m,_(h._payload),w)}if(Yn(h))return S(g,m,h,w);if(In(h))return y(g,m,h,w);Gr(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(n(g,m.sibling),m=o(m,h),m.return=g,g=m):(n(g,m),m=Yi(h,g.mode,w),m.return=g,g=m),l(g)):n(g,m)}return k}var En=kd(!0),Pd=kd(!1),Oo=Dt(null),zo=null,hn=null,Rs=null;function js(){Rs=hn=zo=null}function Es(e){var t=Oo.current;W(Oo),e._currentValue=t}function Ol(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){zo=e,Rs=hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(Rs!==e)if(e={context:e,memoizedValue:t,next:null},hn===null){if(zo===null)throw Error(P(308));hn=e,zo.dependencies={lanes:0,firstContext:e}}else hn=hn.next=e;return t}var Wt=null;function bs(e){Wt===null?Wt=[e]:Wt.push(e)}function _d(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,bs(t)):(n.next=o.next,o.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ft=!1;function Ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,lt(e,n)}return o=r.interleaved,o===null?(t.next=t,bs(r)):(t.next=o.next,o.next=t),r.interleaved=t,lt(e,n)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gs(e,n)}}function yu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var o=e.updateQueue;ft=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=a))}if(i!==null){var f=o.baseState;l=0,d=c=a=null,s=i;do{var p=s.lane,x=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,y=s;switch(p=t,x=n,y.tag){case 1:if(S=y.payload,typeof S=="function"){f=S.call(x,f,p);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,p=typeof S=="function"?S.call(x,f,p):S,p==null)break e;f=Y({},f,p);break e;case 2:ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else x={eventTime:x,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=x,a=f):d=d.next=x,l|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(a=f),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Gt|=l,e.lanes=l,e.memoizedState=f}}function vu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var zr={},Xe=Dt(zr),vr=Dt(zr),xr=Dt(zr);function Ht(e){if(e===zr)throw Error(P(174));return e}function Ds(e,t){switch(F(xr,t),F(vr,e),F(Xe,zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fl(t,e)}W(Xe),F(Xe,t)}function bn(){W(Xe),W(vr),W(xr)}function Rd(e){Ht(xr.current);var t=Ht(Xe.current),n=fl(t,e.type);t!==n&&(F(vr,e),F(Xe,n))}function Os(e){vr.current===e&&(W(Xe),W(vr))}var K=Dt(0);function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bi=[];function zs(){for(var e=0;e<Bi.length;e++)Bi[e]._workInProgressVersionPrimary=null;Bi.length=0}var po=at.ReactCurrentDispatcher,Vi=at.ReactCurrentBatchConfig,qt=0,Q=null,te=null,re=null,Lo=!1,rr=!1,Sr=0,Am=0;function ce(){throw Error(P(321))}function $s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function Ms(e,t,n,r,o,i){if(qt=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,po.current=e===null||e.memoizedState===null?Vm:Wm,e=n(r,o),rr){i=0;do{if(rr=!1,Sr=0,25<=i)throw Error(P(301));i+=1,re=te=null,t.updateQueue=null,po.current=Hm,e=n(r,o)}while(rr)}if(po.current=No,t=te!==null&&te.next!==null,qt=0,re=te=Q=null,Lo=!1,t)throw Error(P(300));return e}function Ls(){var e=Sr!==0;return Sr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Q.memoizedState=re=e:re=re.next=e,re}function Ie(){if(te===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?Q.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(P(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?Q.memoizedState=re=e:re=re.next=e}return re}function wr(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=Ie(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var d=c.lane;if((qt&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=f,l=r):a=a.next=f,Q.lanes|=d,Gt|=d}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,He(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Q.lanes|=i,Gt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hi(e){var t=Ie(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);He(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function jd(){}function Ed(e,t){var n=Q,r=Ie(),o=t(),i=!He(r.memoizedState,o);if(i&&(r.memoizedState=o,Se=!0),r=r.queue,Ns(Dd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,kr(9,Td.bind(null,n,r,o,t),void 0,null),oe===null)throw Error(P(349));qt&30||bd(n,t,o)}return o}function bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Td(e,t,n,r){t.value=n,t.getSnapshot=r,Od(t)&&zd(e)}function Dd(e,t,n){return n(function(){Od(t)&&zd(e)})}function Od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function zd(e){var t=lt(e,1);t!==null&&We(t,e,1,-1)}function xu(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},t.queue=e,e=e.dispatch=Bm.bind(null,Q,e),[t.memoizedState,e]}function kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $d(){return Ie().memoizedState}function mo(e,t,n,r){var o=Je();Q.flags|=e,o.memoizedState=kr(1|t,n,void 0,r===void 0?null:r)}function Zo(e,t,n,r){var o=Ie();r=r===void 0?null:r;var i=void 0;if(te!==null){var l=te.memoizedState;if(i=l.destroy,r!==null&&$s(r,l.deps)){o.memoizedState=kr(t,n,i,r);return}}Q.flags|=e,o.memoizedState=kr(1|t,n,i,r)}function Su(e,t){return mo(8390656,8,e,t)}function Ns(e,t){return Zo(2048,8,e,t)}function Md(e,t){return Zo(4,2,e,t)}function Ld(e,t){return Zo(4,4,e,t)}function Nd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Id(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4,4,Nd.bind(null,t,e),n)}function Is(){}function Ad(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ud(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fd(e,t,n){return qt&21?(He(n,t)||(n=Kc(),Q.lanes|=n,Gt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Um(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Vi.transition;Vi.transition={};try{e(!1),t()}finally{I=n,Vi.transition=r}}function Bd(){return Ie().memoizedState}function Fm(e,t,n){var r=_t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vd(e))Wd(t,n);else if(n=_d(e,t,n,r),n!==null){var o=he();We(n,e,r,o),Hd(n,t,r)}}function Bm(e,t,n){var r=_t(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vd(e))Wd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,He(s,l)){var a=t.interleaved;a===null?(o.next=o,bs(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=_d(e,t,o,r),n!==null&&(o=he(),We(n,e,r,o),Hd(n,t,r))}}function Vd(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Wd(e,t){rr=Lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gs(e,n)}}var No={readContext:Ne,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Vm={readContext:Ne,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:Su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,mo(4194308,4,Nd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return mo(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fm.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:xu,useDebugValue:Is,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=xu(!1),t=e[0];return e=Um.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,o=Je();if(H){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),oe===null)throw Error(P(349));qt&30||bd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Su(Dd.bind(null,r,i,e),[e]),r.flags|=2048,kr(9,Td.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=oe.identifierPrefix;if(H){var n=nt,r=tt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Am++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wm={readContext:Ne,useCallback:Ad,useContext:Ne,useEffect:Ns,useImperativeHandle:Id,useInsertionEffect:Md,useLayoutEffect:Ld,useMemo:Ud,useReducer:Wi,useRef:$d,useState:function(){return Wi(wr)},useDebugValue:Is,useDeferredValue:function(e){var t=Ie();return Fd(t,te.memoizedState,e)},useTransition:function(){var e=Wi(wr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:jd,useSyncExternalStore:Ed,useId:Bd,unstable_isNewReconciler:!1},Hm={readContext:Ne,useCallback:Ad,useContext:Ne,useEffect:Ns,useImperativeHandle:Id,useInsertionEffect:Md,useLayoutEffect:Ld,useMemo:Ud,useReducer:Hi,useRef:$d,useState:function(){return Hi(wr)},useDebugValue:Is,useDeferredValue:function(e){var t=Ie();return te===null?t.memoizedState=e:Fd(t,te.memoizedState,e)},useTransition:function(){var e=Hi(wr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:jd,useSyncExternalStore:Ed,useId:Bd,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ei={isMounted:function(e){return(e=e._reactInternals)?en(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),o=_t(e),i=rt(r,o);i.payload=t,n!=null&&(i.callback=n),t=kt(e,i,o),t!==null&&(We(t,e,o,r),fo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),o=_t(e),i=rt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=kt(e,i,o),t!==null&&(We(t,e,o,r),fo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=_t(e),o=rt(n,r);o.tag=2,t!=null&&(o.callback=t),t=kt(e,o,r),t!==null&&(We(t,e,r,n),fo(t,e,r))}};function wu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(o,i):!0}function Kd(e,t,n){var r=!1,o=Et,i=t.contextType;return typeof i=="object"&&i!==null?i=Ne(i):(o=ke(t)?Yt:pe.current,r=t.contextTypes,i=(r=r!=null)?Rn(e,o):Et),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ei,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ei.enqueueReplaceState(t,t.state,null)}function $l(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ts(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ne(i):(i=ke(t)?Yt:pe.current,o.context=Rn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(zl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ei.enqueueReplaceState(o,o.state,null),$o(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Tn(e,t){try{var n="",r=t;do n+=xp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ml(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Km=typeof WeakMap=="function"?WeakMap:Map;function Qd(e,t,n){n=rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ao||(Ao=!0,Hl=r),Ml(e,t)},n}function Yd(e,t,n){n=rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ml(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ml(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Pu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Km;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=lg.bind(null,e,t,n),t.then(e,e))}function _u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rt(-1,1),t.tag=2,kt(n,t,1))),n.lanes|=1),e)}var Qm=at.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?Pd(t,null,n,r):En(t,e.child,n,r)}function Ru(e,t,n,r,o){n=n.render;var i=t.ref;return Pn(t,o),r=Ms(e,t,n,r,i,o),n=Ls(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,st(e,t,o)):(H&&n&&Ps(t),t.flags|=1,ge(e,t,r,o),t.child)}function ju(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ks(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Jd(e,t,i,r,o)):(e=vo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(l,r)&&e.ref===t.ref)return st(e,t,o)}return t.flags|=1,e=Ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function Jd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(mr(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,st(e,t,o)}return Ll(e,t,n,r,o)}function qd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(vn,_e),_e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(vn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(vn,_e),_e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(vn,_e),_e|=r;return ge(e,t,o,n),t.child}function Gd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ll(e,t,n,r,o){var i=ke(n)?Yt:pe.current;return i=Rn(t,i),Pn(t,o),n=Ms(e,t,n,r,i,o),r=Ls(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,st(e,t,o)):(H&&r&&Ps(t),t.flags|=1,ge(e,t,n,o),t.child)}function Eu(e,t,n,r,o){if(ke(n)){var i=!0;bo(t)}else i=!1;if(Pn(t,o),t.stateNode===null)go(e,t),Kd(t,n,r),$l(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=ke(n)?Yt:pe.current,c=Rn(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&ku(t,l,r,c),ft=!1;var p=t.memoizedState;l.state=p,$o(t,r,l,o),a=t.memoizedState,s!==r||p!==a||we.current||ft?(typeof d=="function"&&(zl(t,n,d,r),a=t.memoizedState),(s=ft||wu(t,n,s,r,p,a,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Cd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ue(t.type,s),l.props=c,f=t.pendingProps,p=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ne(a):(a=ke(n)?Yt:pe.current,a=Rn(t,a));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==f||p!==a)&&ku(t,l,r,a),ft=!1,p=t.memoizedState,l.state=p,$o(t,r,l,o);var S=t.memoizedState;s!==f||p!==S||we.current||ft?(typeof x=="function"&&(zl(t,n,x,r),S=t.memoizedState),(c=ft||wu(t,n,c,r,p,S,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,i,o)}function Nl(e,t,n,r,o,i){Gd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&pu(t,n,!1),st(e,t,i);r=t.stateNode,Qm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=En(t,e.child,null,i),t.child=En(t,null,s,i)):ge(e,t,s,i),t.memoizedState=r.state,o&&pu(t,n,!0),t.child}function Xd(e){var t=e.stateNode;t.pendingContext?fu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fu(e,t.context,!1),Ds(e,t.containerInfo)}function bu(e,t,n,r,o){return jn(),Cs(o),t.flags|=256,ge(e,t,n,r),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zd(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),F(K,o&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ri(l,r,0,null),e=Qt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Al(n),t.memoizedState=Il,e):As(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Ym(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Ct(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Ct(s,i):(i=Qt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Al(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Il,r}return i=e.child,e=i.sibling,r=Ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function As(e,t){return t=ri({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xr(e,t,n,r){return r!==null&&Cs(r),En(t,e.child,null,n),e=As(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ym(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ki(Error(P(422))),Xr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ri({mode:"visible",children:r.children},o,0,null),i=Qt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&En(t,e.child,null,l),t.child.memoizedState=Al(l),t.memoizedState=Il,i);if(!(t.mode&1))return Xr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(P(419)),r=Ki(i,r,void 0),Xr(e,t,l,r)}if(s=(l&e.childLanes)!==0,Se||s){if(r=oe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,lt(e,o),We(r,e,o,-1))}return Hs(),r=Ki(Error(P(421))),Xr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=sg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ce=wt(o.nextSibling),Re=t,H=!0,Be=null,e!==null&&(ze[$e++]=tt,ze[$e++]=nt,ze[$e++]=Jt,tt=e.id,nt=e.overflow,Jt=t),t=As(t,r.children),t.flags|=4096,t)}function Tu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ol(e.return,t,n)}function Qi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ef(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ge(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tu(e,n,t);else if(e.tag===19)Tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Mo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Qi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Mo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Qi(t,!0,n,null,i);break;case"together":Qi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function go(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jm(e,t,n){switch(t.tag){case 3:Xd(t),jn();break;case 5:Rd(t);break;case 1:ke(t.type)&&bo(t);break;case 4:Ds(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;F(Oo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Zd(e,t,n):(F(K,K.current&1),e=st(e,t,n),e!==null?e.sibling:null);F(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ef(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),F(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,qd(e,t,n)}return st(e,t,n)}var tf,Ul,nf,rf;tf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ul=function(){};nf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ht(Xe.current);var i=null;switch(n){case"input":o=al(e,o),r=al(e,r),i=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),i=[];break;case"textarea":o=dl(e,o),r=dl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jo)}pl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&V("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};rf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qm(e,t,n){var r=t.pendingProps;switch(_s(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&Eo(),de(t),null;case 3:return r=t.stateNode,bn(),W(we),W(pe),zs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(Yl(Be),Be=null))),Ul(e,t),de(t),null;case 5:Os(t);var o=Ht(xr.current);if(n=t.type,e!==null&&t.stateNode!=null)nf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return de(t),null}if(e=Ht(Xe.current),qr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[qe]=t,r[yr]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<qn.length;o++)V(qn[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Aa(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":Fa(r,i),V("invalid",r)}pl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Jr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Jr(r.textContent,s,e),o=["children",""+s]):sr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":Fr(r),Ua(r,i,!0);break;case"textarea":Fr(r),Ba(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=jo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[qe]=t,e[yr]=r,tf(e,t,!1,!1),t.stateNode=e;e:{switch(l=ml(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<qn.length;o++)V(qn[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":Aa(e,r),o=al(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),V("invalid",e);break;case"textarea":Fa(e,r),o=dl(e,r),V("invalid",e);break;default:o=r}pl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?$c(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Oc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ar(e,a):typeof a=="number"&&ar(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(sr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&V("scroll",e):a!=null&&us(e,i,a,l))}switch(n){case"input":Fr(e),Ua(e,r,!1);break;case"textarea":Fr(e),Ba(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?xn(e,!!r.multiple,i,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)rf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Ht(xr.current),Ht(Xe.current),qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return de(t),null;case 13:if(W(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Ce!==null&&t.mode&1&&!(t.flags&128))wd(),jn(),t.flags|=98560,i=!1;else if(i=qr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[qe]=t}else jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Be!==null&&(Yl(Be),Be=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):Hs())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return bn(),Ul(e,t),e===null&&gr(t.stateNode.containerInfo),de(t),null;case 10:return Es(t.type._context),de(t),null;case 17:return ke(t.type)&&Eo(),de(t),null;case 19:if(W(K),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Wn(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Mo(e),l!==null){for(t.flags|=128,Wn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>Dn&&(t.flags|=128,r=!0,Wn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Mo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!H)return de(t),null}else 2*q()-i.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,Wn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=K.current,F(K,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Ws(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Gm(e,t){switch(_s(t),t.tag){case 1:return ke(t.type)&&Eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),W(we),W(pe),zs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Os(t),null;case 13:if(W(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(K),null;case 4:return bn(),null;case 10:return Es(t.type._context),null;case 22:case 23:return Ws(),null;case 24:return null;default:return null}}var Zr=!1,fe=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,E=null;function yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Fl(e,t,n){try{n()}catch(r){J(e,t,r)}}var Du=!1;function Zm(e,t){if(_l=_o,e=ad(),ks(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var x;f!==n||o!==0&&f.nodeType!==3||(s=l+o),f!==i||r!==0&&f.nodeType!==3||(a=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(x=f.firstChild)!==null;)p=f,f=x;for(;;){if(f===e)break t;if(p===n&&++c===o&&(s=l),p===i&&++d===r&&(a=l),(x=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},_o=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var y=S.memoizedProps,k=S.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ue(t.type,y),k);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){J(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return S=Du,Du=!1,S}function or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Fl(t,n,i)}o=o.next}while(o!==r)}}function ti(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function of(e){var t=e.alternate;t!==null&&(e.alternate=null,of(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[yr],delete t[El],delete t[Mm],delete t[Lm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lf(e){return e.tag===5||e.tag===3||e.tag===4}function Ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jo));else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}var le=null,Fe=!1;function ct(e,t,n){for(n=n.child;n!==null;)sf(e,t,n),n=n.sibling}function sf(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Qo,n)}catch{}switch(n.tag){case 5:fe||yn(n,t);case 6:var r=le,o=Fe;le=null,ct(e,t,n),le=r,Fe=o,le!==null&&(Fe?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Fe?(e=le,n=n.stateNode,e.nodeType===8?Ui(e.parentNode,n):e.nodeType===1&&Ui(e,n),fr(e)):Ui(le,n.stateNode));break;case 4:r=le,o=Fe,le=n.stateNode.containerInfo,Fe=!0,ct(e,t,n),le=r,Fe=o;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Fl(n,t,l),o=o.next}while(o!==r)}ct(e,t,n);break;case 1:if(!fe&&(yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,ct(e,t,n),fe=r):ct(e,t,n);break;default:ct(e,t,n)}}function zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xm),t.forEach(function(r){var o=ag.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,Fe=!1;break e;case 3:le=s.stateNode.containerInfo,Fe=!0;break e;case 4:le=s.stateNode.containerInfo,Fe=!0;break e}s=s.return}if(le===null)throw Error(P(160));sf(i,l,o),le=null,Fe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){J(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)af(t,e),t=t.sibling}function af(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Ye(e),r&4){try{or(3,e,e.return),ti(3,e)}catch(y){J(e,e.return,y)}try{or(5,e,e.return)}catch(y){J(e,e.return,y)}}break;case 1:Ae(t,e),Ye(e),r&512&&n!==null&&yn(n,n.return);break;case 5:if(Ae(t,e),Ye(e),r&512&&n!==null&&yn(n,n.return),e.flags&32){var o=e.stateNode;try{ar(o,"")}catch(y){J(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&bc(o,i),ml(s,l);var c=ml(s,i);for(l=0;l<a.length;l+=2){var d=a[l],f=a[l+1];d==="style"?$c(o,f):d==="dangerouslySetInnerHTML"?Oc(o,f):d==="children"?ar(o,f):us(o,d,f,c)}switch(s){case"input":ul(o,i);break;case"textarea":Tc(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?xn(o,!!i.multiple,x,!1):p!==!!i.multiple&&(i.defaultValue!=null?xn(o,!!i.multiple,i.defaultValue,!0):xn(o,!!i.multiple,i.multiple?[]:"",!1))}o[yr]=i}catch(y){J(e,e.return,y)}}break;case 6:if(Ae(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){J(e,e.return,y)}}break;case 3:if(Ae(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fr(t.containerInfo)}catch(y){J(e,e.return,y)}break;case 4:Ae(t,e),Ye(e);break;case 13:Ae(t,e),Ye(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Bs=q())),r&4&&zu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(c=fe)||d,Ae(t,e),fe=c):Ae(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(f=E=d;E!==null;){switch(p=E,x=p.child,p.tag){case 0:case 11:case 14:case 15:or(4,p,p.return);break;case 1:yn(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(y){J(r,n,y)}}break;case 5:yn(p,p.return);break;case 22:if(p.memoizedState!==null){Mu(f);continue}}x!==null?(x.return=p,E=x):Mu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,a=f.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=zc("display",l))}catch(y){J(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){J(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ae(t,e),Ye(e),r&4&&zu(e);break;case 21:break;default:Ae(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lf(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ar(o,""),r.flags&=-33);var i=Ou(e);Wl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Ou(e);Vl(e,s,l);break;default:throw Error(P(161))}}catch(a){J(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eg(e,t,n){E=e,uf(e)}function uf(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var o=E,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Zr;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||fe;s=Zr;var c=fe;if(Zr=l,(fe=a)&&!c)for(E=o;E!==null;)l=E,a=l.child,l.tag===22&&l.memoizedState!==null?Lu(o):a!==null?(a.return=l,E=a):Lu(o);for(;i!==null;)E=i,uf(i),i=i.sibling;E=o,Zr=s,fe=c}$u(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,E=i):$u(e)}}function $u(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||ti(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&vu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&fr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}fe||t.flags&512&&Bl(t)}catch(p){J(t,t.return,p)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Mu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Lu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ti(4,t)}catch(a){J(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){J(t,o,a)}}var i=t.return;try{Bl(t)}catch(a){J(t,i,a)}break;case 5:var l=t.return;try{Bl(t)}catch(a){J(t,l,a)}}}catch(a){J(t,t.return,a)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var tg=Math.ceil,Io=at.ReactCurrentDispatcher,Us=at.ReactCurrentOwner,Le=at.ReactCurrentBatchConfig,M=0,oe=null,Z=null,se=0,_e=0,vn=Dt(0),ne=0,Pr=null,Gt=0,ni=0,Fs=0,ir=null,xe=null,Bs=0,Dn=1/0,Ze=null,Ao=!1,Hl=null,Pt=null,eo=!1,ht=null,Uo=0,lr=0,Kl=null,ho=-1,yo=0;function he(){return M&6?q():ho!==-1?ho:ho=q()}function _t(e){return e.mode&1?M&2&&se!==0?se&-se:Im.transition!==null?(yo===0&&(yo=Kc()),yo):(e=I,e!==0||(e=window.event,e=e===void 0?16:Zc(e.type)),e):1}function We(e,t,n,r){if(50<lr)throw lr=0,Kl=null,Error(P(185));Tr(e,n,r),(!(M&2)||e!==oe)&&(e===oe&&(!(M&2)&&(ni|=n),ne===4&&mt(e,se)),Pe(e,r),n===1&&M===0&&!(t.mode&1)&&(Dn=q()+500,Xo&&Ot()))}function Pe(e,t){var n=e.callbackNode;Ip(e,t);var r=Po(e,e===oe?se:0);if(r===0)n!==null&&Ha(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ha(n),t===1)e.tag===0?Nm(Nu.bind(null,e)):vd(Nu.bind(null,e)),zm(function(){!(M&6)&&Ot()}),n=null;else{switch(Qc(r)){case 1:n=ms;break;case 4:n=Wc;break;case 16:n=ko;break;case 536870912:n=Hc;break;default:n=ko}n=yf(n,cf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cf(e,t){if(ho=-1,yo=0,M&6)throw Error(P(327));var n=e.callbackNode;if(_n()&&e.callbackNode!==n)return null;var r=Po(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fo(e,r);else{t=r;var o=M;M|=2;var i=ff();(oe!==e||se!==t)&&(Ze=null,Dn=q()+500,Kt(e,t));do try{og();break}catch(s){df(e,s)}while(!0);js(),Io.current=i,M=o,Z!==null?t=0:(oe=null,se=0,t=ne)}if(t!==0){if(t===2&&(o=xl(e),o!==0&&(r=o,t=Ql(e,o))),t===1)throw n=Pr,Kt(e,0),mt(e,r),Pe(e,q()),n;if(t===6)mt(e,r);else{if(o=e.current.alternate,!(r&30)&&!ng(o)&&(t=Fo(e,r),t===2&&(i=xl(e),i!==0&&(r=i,t=Ql(e,i))),t===1))throw n=Pr,Kt(e,0),mt(e,r),Pe(e,q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Ut(e,xe,Ze);break;case 3:if(mt(e,r),(r&130023424)===r&&(t=Bs+500-q(),10<t)){if(Po(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=jl(Ut.bind(null,e,xe,Ze),t);break}Ut(e,xe,Ze);break;case 4:if(mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ve(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tg(r/1960))-r,10<r){e.timeoutHandle=jl(Ut.bind(null,e,xe,Ze),r);break}Ut(e,xe,Ze);break;case 5:Ut(e,xe,Ze);break;default:throw Error(P(329))}}}return Pe(e,q()),e.callbackNode===n?cf.bind(null,e):null}function Ql(e,t){var n=ir;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=Fo(e,t),e!==2&&(t=xe,xe=n,t!==null&&Yl(t)),e}function Yl(e){xe===null?xe=e:xe.push.apply(xe,e)}function ng(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!He(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(e,t){for(t&=~Fs,t&=~ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function Nu(e){if(M&6)throw Error(P(327));_n();var t=Po(e,0);if(!(t&1))return Pe(e,q()),null;var n=Fo(e,t);if(e.tag!==0&&n===2){var r=xl(e);r!==0&&(t=r,n=Ql(e,r))}if(n===1)throw n=Pr,Kt(e,0),mt(e,t),Pe(e,q()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ut(e,xe,Ze),Pe(e,q()),null}function Vs(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Dn=q()+500,Xo&&Ot())}}function Xt(e){ht!==null&&ht.tag===0&&!(M&6)&&_n();var t=M;M|=1;var n=Le.transition,r=I;try{if(Le.transition=null,I=1,e)return e()}finally{I=r,Le.transition=n,M=t,!(M&6)&&Ot()}}function Ws(){_e=vn.current,W(vn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Om(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(_s(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eo();break;case 3:bn(),W(we),W(pe),zs();break;case 5:Os(r);break;case 4:bn();break;case 13:W(K);break;case 19:W(K);break;case 10:Es(r.type._context);break;case 22:case 23:Ws()}n=n.return}if(oe=e,Z=e=Ct(e.current,null),se=_e=t,ne=0,Pr=null,Fs=ni=Gt=0,xe=ir=null,Wt!==null){for(t=0;t<Wt.length;t++)if(n=Wt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Wt=null}return e}function df(e,t){do{var n=Z;try{if(js(),po.current=No,Lo){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Lo=!1}if(qt=0,re=te=Q=null,rr=!1,Sr=0,Us.current=null,n===null||n.return===null){ne=1,Pr=t,Z=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=_u(l);if(x!==null){x.flags&=-257,Cu(x,l,s,i,t),x.mode&1&&Pu(i,c,t),t=x,a=c;var S=t.updateQueue;if(S===null){var y=new Set;y.add(a),t.updateQueue=y}else S.add(a);break e}else{if(!(t&1)){Pu(i,c,t),Hs();break e}a=Error(P(426))}}else if(H&&s.mode&1){var k=_u(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Cu(k,l,s,i,t),Cs(Tn(a,s));break e}}i=a=Tn(a,s),ne!==4&&(ne=2),ir===null?ir=[i]:ir.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Qd(i,a,t);yu(i,g);break e;case 1:s=a;var m=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Pt===null||!Pt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Yd(i,s,t);yu(i,w);break e}}i=i.return}while(i!==null)}mf(n)}catch(C){t=C,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function ff(){var e=Io.current;return Io.current=No,e===null?No:e}function Hs(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(Gt&268435455)&&!(ni&268435455)||mt(oe,se)}function Fo(e,t){var n=M;M|=2;var r=ff();(oe!==e||se!==t)&&(Ze=null,Kt(e,t));do try{rg();break}catch(o){df(e,o)}while(!0);if(js(),M=n,Io.current=r,Z!==null)throw Error(P(261));return oe=null,se=0,ne}function rg(){for(;Z!==null;)pf(Z)}function og(){for(;Z!==null&&!bp();)pf(Z)}function pf(e){var t=hf(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?mf(e):Z=t,Us.current=null}function mf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gm(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,Z=null;return}}else if(n=qm(n,t,_e),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ne===0&&(ne=5)}function Ut(e,t,n){var r=I,o=Le.transition;try{Le.transition=null,I=1,ig(e,t,n,r)}finally{Le.transition=o,I=r}return null}function ig(e,t,n,r){do _n();while(ht!==null);if(M&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ap(e,i),e===oe&&(Z=oe=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,yf(ko,function(){return _n(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Le.transition,Le.transition=null;var l=I;I=1;var s=M;M|=4,Us.current=null,Zm(e,n),af(n,e),Cm(Cl),_o=!!_l,Cl=_l=null,e.current=n,eg(n),Tp(),M=s,I=l,Le.transition=i}else e.current=n;if(eo&&(eo=!1,ht=e,Uo=o),i=e.pendingLanes,i===0&&(Pt=null),zp(n.stateNode),Pe(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ao)throw Ao=!1,e=Hl,Hl=null,e;return Uo&1&&e.tag!==0&&_n(),i=e.pendingLanes,i&1?e===Kl?lr++:(lr=0,Kl=e):lr=0,Ot(),null}function _n(){if(ht!==null){var e=Qc(Uo),t=Le.transition,n=I;try{if(Le.transition=null,I=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,Uo=0,M&6)throw Error(P(331));var o=M;for(M|=4,E=e.current;E!==null;){var i=E,l=i.child;if(E.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(E=c;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:or(8,d,i)}var f=d.child;if(f!==null)f.return=d,E=f;else for(;E!==null;){d=E;var p=d.sibling,x=d.return;if(of(d),d===c){E=null;break}if(p!==null){p.return=x,E=p;break}E=x}}}var S=i.alternate;if(S!==null){var y=S.child;if(y!==null){S.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}E=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,E=l;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:or(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,E=g;break e}E=i.return}}var m=e.current;for(E=m;E!==null;){l=E;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,E=h;else e:for(l=m;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ti(9,s)}}catch(C){J(s,s.return,C)}if(s===l){E=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,E=w;break e}E=s.return}}if(M=o,Ot(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Qo,e)}catch{}r=!0}return r}finally{I=n,Le.transition=t}}return!1}function Iu(e,t,n){t=Tn(n,t),t=Qd(e,t,1),e=kt(e,t,1),t=he(),e!==null&&(Tr(e,1,t),Pe(e,t))}function J(e,t,n){if(e.tag===3)Iu(e,e,n);else for(;t!==null;){if(t.tag===3){Iu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=Tn(n,e),e=Yd(t,e,1),t=kt(t,e,1),e=he(),t!==null&&(Tr(t,1,e),Pe(t,e));break}}t=t.return}}function lg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(se&n)===n&&(ne===4||ne===3&&(se&130023424)===se&&500>q()-Bs?Kt(e,0):Fs|=n),Pe(e,t)}function gf(e,t){t===0&&(e.mode&1?(t=Wr,Wr<<=1,!(Wr&130023424)&&(Wr=4194304)):t=1);var n=he();e=lt(e,t),e!==null&&(Tr(e,t,n),Pe(e,n))}function sg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function ag(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),gf(e,n)}var hf;hf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Jm(e,t,n);Se=!!(e.flags&131072)}else Se=!1,H&&t.flags&1048576&&xd(t,Do,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;go(e,t),e=t.pendingProps;var o=Rn(t,pe.current);Pn(t,n),o=Ms(null,t,r,e,o,n);var i=Ls();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,bo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ts(t),o.updater=ei,t.stateNode=o,o._reactInternals=t,$l(t,r,e,n),t=Nl(null,t,r,!0,i,n)):(t.tag=0,H&&i&&Ps(t),ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(go(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=cg(r),e=Ue(r,e),o){case 0:t=Ll(null,t,r,e,n);break e;case 1:t=Eu(null,t,r,e,n);break e;case 11:t=Ru(null,t,r,e,n);break e;case 14:t=ju(null,t,r,Ue(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Ll(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Eu(e,t,r,o,n);case 3:e:{if(Xd(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Cd(e,t),$o(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Tn(Error(P(423)),t),t=bu(e,t,r,n,o);break e}else if(r!==o){o=Tn(Error(P(424)),t),t=bu(e,t,r,n,o);break e}else for(Ce=wt(t.stateNode.containerInfo.firstChild),Re=t,H=!0,Be=null,n=Pd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===o){t=st(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Rd(t),e===null&&Dl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Rl(r,o)?l=null:i!==null&&Rl(r,i)&&(t.flags|=32),Gd(e,t),ge(e,t,l,n),t.child;case 6:return e===null&&Dl(t),null;case 13:return Zd(e,t,n);case 4:return Ds(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Ru(e,t,r,o,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,F(Oo,r._currentValue),r._currentValue=l,i!==null)if(He(i.value,l)){if(i.children===o.children&&!we.current){t=st(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=rt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ol(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ol(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pn(t,n),o=Ne(o),r=r(o),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,o=Ue(r,t.pendingProps),o=Ue(r.type,o),ju(e,t,r,o,n);case 15:return Jd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),go(e,t),t.tag=1,ke(r)?(e=!0,bo(t)):e=!1,Pn(t,n),Kd(t,r,o),$l(t,r,o,n),Nl(null,t,r,!0,e,n);case 19:return ef(e,t,n);case 22:return qd(e,t,n)}throw Error(P(156,t.tag))};function yf(e,t){return Vc(e,t)}function ug(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new ug(e,t,n,r)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cg(e){if(typeof e=="function")return Ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ds)return 11;if(e===fs)return 14}return 2}function Ct(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ks(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case an:return Qt(n.children,o,i,t);case cs:l=8,o|=8;break;case ol:return e=Me(12,n,t,o|2),e.elementType=ol,e.lanes=i,e;case il:return e=Me(13,n,t,o),e.elementType=il,e.lanes=i,e;case ll:return e=Me(19,n,t,o),e.elementType=ll,e.lanes=i,e;case Rc:return ri(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _c:l=10;break e;case Cc:l=9;break e;case ds:l=11;break e;case fs:l=14;break e;case dt:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Me(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Qt(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function ri(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Rc,e.lanes=n,e.stateNode={isHidden:!1},e}function Yi(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function Ji(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bi(0),this.expirationTimes=bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qs(e,t,n,r,o,i,l,s,a){return e=new dg(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Me(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ts(i),e}function fg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vf(e){if(!e)return Et;e=e._reactInternals;e:{if(en(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(ke(n))return yd(e,n,t)}return t}function xf(e,t,n,r,o,i,l,s,a){return e=Qs(n,r,!0,e,o,i,l,s,a),e.context=vf(null),n=e.current,r=he(),o=_t(n),i=rt(r,o),i.callback=t??null,kt(n,i,o),e.current.lanes=o,Tr(e,o,r),Pe(e,r),e}function oi(e,t,n,r){var o=t.current,i=he(),l=_t(o);return n=vf(n),t.context===null?t.context=n:t.pendingContext=n,t=rt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kt(o,t,l),e!==null&&(We(e,o,l,i),fo(e,o,l)),l}function Bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Au(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ys(e,t){Au(e,t),(e=e.alternate)&&Au(e,t)}function pg(){return null}var Sf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Js(e){this._internalRoot=e}ii.prototype.render=Js.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));oi(e,t,null,null)};ii.prototype.unmount=Js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xt(function(){oi(null,e,null,null)}),t[it]=null}};function ii(e){this._internalRoot=e}ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=qc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pt.length&&t!==0&&t<pt[n].priority;n++);pt.splice(n,0,e),n===0&&Xc(e)}};function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function mg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Bo(l);i.call(c)}}var l=xf(t,r,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=l,e[it]=l.current,gr(e.nodeType===8?e.parentNode:e),Xt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Bo(a);s.call(c)}}var a=Qs(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=a,e[it]=a.current,gr(e.nodeType===8?e.parentNode:e),Xt(function(){oi(t,a,n,r)}),a}function si(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Bo(l);s.call(a)}}oi(t,l,e,o)}else l=mg(n,t,e,o,r);return Bo(l)}Yc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jn(t.pendingLanes);n!==0&&(gs(t,n|1),Pe(t,q()),!(M&6)&&(Dn=q()+500,Ot()))}break;case 13:Xt(function(){var r=lt(e,1);if(r!==null){var o=he();We(r,e,1,o)}}),Ys(e,1)}};hs=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=he();We(t,e,134217728,n)}Ys(e,134217728)}};Jc=function(e){if(e.tag===13){var t=_t(e),n=lt(e,t);if(n!==null){var r=he();We(n,e,t,r)}Ys(e,t)}};qc=function(){return I};Gc=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};hl=function(e,t,n){switch(t){case"input":if(ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Go(r);if(!o)throw Error(P(90));Ec(r),ul(r,o)}}}break;case"textarea":Tc(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};Nc=Vs;Ic=Xt;var gg={usingClientEntryPoint:!1,Events:[Or,fn,Go,Mc,Lc,Vs]},Hn={findFiberByHostInstance:Vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hg={bundleType:Hn.bundleType,version:Hn.version,rendererPackageName:Hn.rendererPackageName,rendererConfig:Hn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:at.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fc(e),e===null?null:e.stateNode},findFiberByHostInstance:Hn.findFiberByHostInstance||pg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{Qo=to.inject(hg),Ge=to}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gg;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qs(t))throw Error(P(200));return fg(e,t,null,n)};Ee.createRoot=function(e,t){if(!qs(e))throw Error(P(299));var n=!1,r="",o=Sf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qs(e,1,!1,null,null,n,!1,r,o),e[it]=t.current,gr(e.nodeType===8?e.parentNode:e),new Js(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Fc(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Xt(e)};Ee.hydrate=function(e,t,n){if(!li(t))throw Error(P(200));return si(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!qs(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Sf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=xf(t,null,e,1,n??null,o,!1,i,l),e[it]=t.current,gr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ii(t)};Ee.render=function(e,t,n){if(!li(t))throw Error(P(200));return si(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!li(e))throw Error(P(40));return e._reactRootContainer?(Xt(function(){si(null,null,e,!1,function(){e._reactRootContainer=null,e[it]=null})}),!0):!1};Ee.unstable_batchedUpdates=Vs;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!li(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return si(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function wf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wf)}catch(e){console.error(e)}}wf(),Sc.exports=Ee;var yg=Sc.exports,Fu=yg;nl.createRoot=Fu.createRoot,nl.hydrateRoot=Fu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _r(){return _r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_r.apply(null,arguments)}var yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yt||(yt={}));const Bu="popstate";function vg(e){e===void 0&&(e={});function t(o,i){let{pathname:l="/",search:s="",hash:a=""}=tn(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Jl("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let l=o.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let a=o.location.href,c=a.indexOf("#");s=c===-1?a:a.slice(0,c)}return s+"#"+(typeof i=="string"?i:Vo(i))}function r(o,i){Gs(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Sg(t,n,r,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xg(){return Math.random().toString(36).substr(2,8)}function Vu(e,t){return{usr:e.state,key:e.key,idx:t}}function Jl(e,t,n,r){return n===void 0&&(n=null),_r({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tn(t):t,{state:n,key:t&&t.key||r||xg()})}function Vo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function tn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Sg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=yt.Pop,a=null,c=d();c==null&&(c=0,l.replaceState(_r({},l.state,{idx:c}),""));function d(){return(l.state||{idx:null}).idx}function f(){s=yt.Pop;let k=d(),g=k==null?null:k-c;c=k,a&&a({action:s,location:y.location,delta:g})}function p(k,g){s=yt.Push;let m=Jl(y.location,k,g);n&&n(m,k),c=d()+1;let h=Vu(m,c),w=y.createHref(m);try{l.pushState(h,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(w)}i&&a&&a({action:s,location:y.location,delta:1})}function x(k,g){s=yt.Replace;let m=Jl(y.location,k,g);n&&n(m,k),c=d();let h=Vu(m,c),w=y.createHref(m);l.replaceState(h,"",w),i&&a&&a({action:s,location:y.location,delta:0})}function S(k){let g=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof k=="string"?k:Vo(k);return m=m.replace(/ $/,"%20"),X(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let y={get action(){return s},get location(){return e(o,l)},listen(k){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Bu,f),a=k,()=>{o.removeEventListener(Bu,f),a=null}},createHref(k){return t(o,k)},createURL:S,encodeLocation(k){let g=S(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:x,go(k){return l.go(k)}};return y}var Wu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wu||(Wu={}));function wg(e,t,n){return n===void 0&&(n="/"),kg(e,t,n)}function kg(e,t,n,r){let o=typeof t=="string"?tn(t):t,i=Xs(o.pathname||"/",n);if(i==null)return null;let l=kf(e);Pg(l);let s=null,a=Mg(i);for(let c=0;s==null&&c<l.length;++c)s=Og(l[c],a);return s}function kf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(X(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=Rt([r,a.relativePath]),d=n.concat(a);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),kf(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Tg(c,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of Pf(i.path))o(i,l,a)}),t}function Pf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Pf(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Pg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Dg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _g=/^:[\w-]+$/,Cg=3,Rg=2,jg=1,Eg=10,bg=-2,Hu=e=>e==="*";function Tg(e,t){let n=e.split("/"),r=n.length;return n.some(Hu)&&(r+=bg),t&&(r+=Rg),n.filter(o=>!Hu(o)).reduce((o,i)=>o+(_g.test(i)?Cg:i===""?jg:Eg),r)}function Dg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Og(e,t,n){let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=zg({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},d),p=a.route;if(!f)return null;Object.assign(o,f.params),l.push({params:o,pathname:Rt([i,f.pathname]),pathnameBase:Ig(Rt([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=Rt([i,f.pathnameBase]))}return l}function zg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$g(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:x}=d;if(p==="*"){let y=s[f]||"";l=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const S=s[f];return x&&!S?c[p]=void 0:c[p]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function $g(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Gs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Mg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Xs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Lg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?tn(e):e,i;return n?(n=_f(n),n.startsWith("/")?i=Ku(n.substring(1),"/"):i=Ku(n,t)):i=t,{pathname:i,search:Ag(r),hash:Ug(o)}}function Ku(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function qi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ng(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Zs(e,t){let n=Ng(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ea(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=tn(e):(o=_r({},e),X(!o.pathname||!o.pathname.includes("?"),qi("?","pathname","search",o)),X(!o.pathname||!o.pathname.includes("#"),qi("#","pathname","hash",o)),X(!o.search||!o.search.includes("#"),qi("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}s=f>=0?t[f]:"/"}let a=Lg(o,s),c=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||d)&&(a.pathname+="/"),a}const _f=e=>e.replace(/\/\/+/g,"/"),Rt=e=>_f(e.join("/")),Ig=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ag=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ug=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Cf=["post","put","patch","delete"];new Set(Cf);const Bg=["get",...Cf];new Set(Bg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cr(){return Cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cr.apply(null,arguments)}const ta=v.createContext(null),Vg=v.createContext(null),zt=v.createContext(null),ai=v.createContext(null),ut=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Rf=v.createContext(null);function Wg(e,t){let{relative:n}=t===void 0?{}:t;Ln()||X(!1);let{basename:r,navigator:o}=v.useContext(zt),{hash:i,pathname:l,search:s}=bf(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:Rt([r,l])),o.createHref({pathname:a,search:s,hash:i})}function Ln(){return v.useContext(ai)!=null}function Nn(){return Ln()||X(!1),v.useContext(ai).location}function jf(e){v.useContext(zt).static||v.useLayoutEffect(e)}function Ef(){let{isDataRoute:e}=v.useContext(ut);return e?oh():Hg()}function Hg(){Ln()||X(!1);let e=v.useContext(ta),{basename:t,future:n,navigator:r}=v.useContext(zt),{matches:o}=v.useContext(ut),{pathname:i}=Nn(),l=JSON.stringify(Zs(o,n.v7_relativeSplatPath)),s=v.useRef(!1);return jf(()=>{s.current=!0}),v.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let f=ea(c,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Rt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,l,i,e])}function Kg(){let{matches:e}=v.useContext(ut),t=e[e.length-1];return t?t.params:{}}function bf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(zt),{matches:o}=v.useContext(ut),{pathname:i}=Nn(),l=JSON.stringify(Zs(o,r.v7_relativeSplatPath));return v.useMemo(()=>ea(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function Qg(e,t){return Yg(e,t)}function Yg(e,t,n,r){Ln()||X(!1);let{navigator:o}=v.useContext(zt),{matches:i}=v.useContext(ut),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let c=Nn(),d;if(t){var f;let k=typeof t=="string"?tn(t):t;a==="/"||(f=k.pathname)!=null&&f.startsWith(a)||X(!1),d=k}else d=c;let p=d.pathname||"/",x=p;if(a!=="/"){let k=a.replace(/^\//,"").split("/");x="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let S=wg(e,{pathname:x}),y=Zg(S&&S.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:Rt([a,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?a:Rt([a,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&y?v.createElement(ai.Provider,{value:{location:Cr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:yt.Pop}},y):y}function Jg(){let e=rh(),t=Fg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const qg=v.createElement(Jg,null);class Gg extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(ut.Provider,{value:this.props.routeContext},v.createElement(Rf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xg(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(ta);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(ut.Provider,{value:t},r)}function Zg(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let d=l.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||X(!1),l=l.slice(0,Math.min(l.length,d+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let f=l[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:x}=n,S=f.route.loader&&p[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||S){a=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((d,f,p)=>{let x,S=!1,y=null,k=null;n&&(x=s&&f.route.id?s[f.route.id]:void 0,y=f.route.errorElement||qg,a&&(c<0&&p===0?(ih("route-fallback"),S=!0,k=null):c===p&&(S=!0,k=f.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,p+1)),m=()=>{let h;return x?h=y:S?h=k:f.route.Component?h=v.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,v.createElement(Xg,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?v.createElement(Gg,{location:n.location,revalidation:n.revalidation,component:y,error:x,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Tf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Tf||{}),Df=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Df||{});function eh(e){let t=v.useContext(ta);return t||X(!1),t}function th(e){let t=v.useContext(Vg);return t||X(!1),t}function nh(e){let t=v.useContext(ut);return t||X(!1),t}function Of(e){let t=nh(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function rh(){var e;let t=v.useContext(Rf),n=th(),r=Of();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function oh(){let{router:e}=eh(Tf.UseNavigateStable),t=Of(Df.UseNavigateStable),n=v.useRef(!1);return jf(()=>{n.current=!0}),v.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Cr({fromRouteId:t},i)))},[e,t])}const Qu={};function ih(e,t,n){Qu[e]||(Qu[e]=!0)}function lh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ql(e){let{to:t,replace:n,state:r,relative:o}=e;Ln()||X(!1);let{future:i,static:l}=v.useContext(zt),{matches:s}=v.useContext(ut),{pathname:a}=Nn(),c=Ef(),d=ea(t,Zs(s,i.v7_relativeSplatPath),a,o==="path"),f=JSON.stringify(d);return v.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:o}),[c,f,o,n,r]),null}function Gn(e){X(!1)}function sh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=yt.Pop,navigator:i,static:l=!1,future:s}=e;Ln()&&X(!1);let a=t.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:a,navigator:i,static:l,future:Cr({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=tn(r));let{pathname:d="/",search:f="",hash:p="",state:x=null,key:S="default"}=r,y=v.useMemo(()=>{let k=Xs(d,a);return k==null?null:{location:{pathname:k,search:f,hash:p,state:x,key:S},navigationType:o}},[a,d,f,p,x,S,o]);return y==null?null:v.createElement(zt.Provider,{value:c},v.createElement(ai.Provider,{children:n,value:y}))}function ah(e){let{children:t,location:n}=e;return Qg(Gl(t),n)}new Promise(()=>{});function Gl(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let i=[...t,o];if(r.type===v.Fragment){n.push.apply(n,Gl(r.props.children,i));return}r.type!==Gn&&X(!1),!r.props.index||!r.props.children||X(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Gl(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xl.apply(null,arguments)}function uh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function ch(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dh(e,t){return e.button===0&&(!t||t==="_self")&&!ch(e)}const fh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ph="6";try{window.__reactRouterVersion=ph}catch{}const mh="startTransition",Yu=lp[mh];function gh(e){let{basename:t,children:n,future:r,window:o}=e,i=v.useRef();i.current==null&&(i.current=vg({window:o,v5Compat:!0}));let l=i.current,[s,a]=v.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},d=v.useCallback(f=>{c&&Yu?Yu(()=>a(f)):a(f)},[a,c]);return v.useLayoutEffect(()=>l.listen(d),[l,d]),v.useEffect(()=>lh(r),[r]),v.createElement(sh,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const hh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zl=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:a,to:c,preventScrollReset:d,viewTransition:f}=t,p=uh(t,fh),{basename:x}=v.useContext(zt),S,y=!1;if(typeof c=="string"&&yh.test(c)&&(S=c,hh))try{let h=new URL(window.location.href),w=c.startsWith("//")?new URL(h.protocol+c):new URL(c),C=Xs(w.pathname,x);w.origin===h.origin&&C!=null?c=C+w.search+w.hash:y=!0}catch{}let k=Wg(c,{relative:o}),g=vh(c,{replace:l,state:s,target:a,preventScrollReset:d,relative:o,viewTransition:f});function m(h){r&&r(h),h.defaultPrevented||g(h)}return v.createElement("a",Xl({},p,{href:S||k,onClick:y||i?r:m,ref:n,target:a}))});var Ju;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ju||(Ju={}));var qu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qu||(qu={}));function vh(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:s}=t===void 0?{}:t,a=Ef(),c=Nn(),d=bf(e,{relative:l});return v.useCallback(f=>{if(dh(f,n)){f.preventDefault();let p=r!==void 0?r:Vo(c)===Vo(d);a(e,{replace:p,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[c,a,d,r,o,n,e,i,l,s])}const xh="https://github.com/frankvane/vane-components";class Sh extends br.Component{constructor(){super(...arguments);Oa(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?u.jsxs("div",{className:"crash",role:"alert",children:[u.jsx("h3",{children:"这个页面炸了"}),u.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),u.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function zf(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function wh({demos:e,pathname:t}){var a;const{groups:n,entries:r,label:o}=e,i=(a=r.find(c=>t===`/demo/${c.meta.slug}`))==null?void 0:a.meta.group,[l,s]=v.useState(()=>{var d;const c=(d=n[0])==null?void 0:d.key;return Object.fromEntries(n.map(f=>[f.key,f.key===(i??c)]))});return v.useEffect(()=>{i&&s(c=>c[i]?c:{...c,[i]:!0})},[i]),u.jsxs("div",{className:"nav-section",children:[u.jsxs("div",{className:"nav-section-head",children:[u.jsx("span",{children:o}),u.jsxs("code",{children:[r.length," demos"]})]}),n.map(c=>{const d=r.filter(p=>p.meta.group===c.key);if(d.length===0)return null;const f=l[c.key]??!1;return u.jsxs("div",{className:"nav-group",children:[u.jsxs("button",{type:"button",className:`nav-group-head${i===c.key?" is-current":""}`,onClick:()=>s(p=>({...p,[c.key]:!f})),"aria-expanded":f,children:[u.jsx("span",{className:`nav-caret${f?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,u.jsx("code",{children:d.length})]}),f?u.jsx("div",{className:"nav-list",children:d.map(p=>u.jsxs(Zl,{to:`/demo/${p.meta.slug}`,className:`nav-sub${t===`/demo/${p.meta.slug}`?" is-active":""}`,children:[u.jsx("em",{"aria-hidden":!0,children:zf(e,p)}),p.meta.title]},p.meta.slug))}):null]},c.key)})]})}function kh({demos:e}){const{slug:t}=Kg(),{entries:n,detail:r}=e,o=t?n.find(l=>l.meta.slug===t):void 0;if(!o)return u.jsx(ql,{to:`/demo/${n[0].meta.slug}`,replace:!0});const i=n.indexOf(o)+1;return u.jsx(br.Fragment,{children:r(o,i)},o.meta.slug)}function Ph({config:e}){var d;const{pathname:t}=Nn(),[n,r]=v.useState(!1),[o,i]=v.useState(!1);v.useEffect(()=>r(!1),[t]);const l=v.useCallback(()=>i(f=>!f),[]);v.useEffect(()=>{const f=p=>{const x=p.target,S=x&&(x.tagName==="INPUT"||x.tagName==="TEXTAREA"||x.isContentEditable);p.key==="Escape"&&r(!1),!S&&(p.key==="g"||p.key==="G")&&!p.metaKey&&!p.ctrlKey&&i(y=>!y)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[]);const s=e.demos,a=v.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const f=t.replace(/^\/demo\/?/,""),p=s.entries.find(x=>x.meta.slug===f);return p?`demo ${zf(s,p)} · ${p.meta.title}`:"demo · 逐项示例"},[t,e,s]),c=v.useMemo(()=>e.nav.map((f,p)=>({...f,no:String(p+1).padStart(2,"0")})),[e.nav]);return u.jsxs("div",{className:`shell${n?" is-nav-open":""}${o?" is-guides":""}`,children:[u.jsx("a",{className:"skip-link",href:"#main",onClick:f=>{f.preventDefault();const p=document.getElementById("main");p==null||p.setAttribute("tabindex","-1"),p==null||p.focus(),p==null||p.scrollIntoView({block:"start"})},children:"跳到内容"}),u.jsxs("aside",{className:"side","aria-label":"站点导航",children:[u.jsxs(Zl,{to:"/",className:"brand",children:[u.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),u.jsxs("span",{children:[u.jsx("strong",{children:e.pkg}),u.jsx("em",{children:e.subtitle})]})]}),u.jsxs("nav",{children:[c.map(f=>u.jsxs(Zl,{to:f.to,className:`nav-item${t===f.to?" is-active":""}`,"aria-current":t===f.to?"page":void 0,children:[u.jsx("em",{"aria-hidden":!0,children:f.no}),u.jsx("span",{children:f.label}),f.hint?u.jsx("code",{children:f.hint}):null]},f.to)),u.jsx(wh,{demos:e.demos,pathname:t})]}),u.jsxs("div",{className:"side-foot",children:[u.jsx("p",{children:e.footer[0]}),u.jsx("p",{className:"muted",children:e.footer[1]})]})]}),u.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>r(!1)}),u.jsxs("div",{className:"main",id:"main",children:[u.jsxs("header",{className:"topbar",children:[u.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>r(f=>!f),children:u.jsx("span",{"aria-hidden":!0})}),u.jsx("span",{className:"crumb",children:a}),u.jsxs("div",{className:"topbar-right",children:[(d=e.stats)==null?void 0:d.map(f=>u.jsxs("span",{className:"topbar-stat",title:f.title,children:[u.jsx("b",{children:f.value})," ",f.label]},f.label)),u.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[u.jsx("i",{"aria-hidden":!0}),"guides"]}),u.jsx("a",{className:"topbar-link",href:e.sourceUrl??xh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),u.jsx("div",{className:"guides","aria-hidden":!0}),u.jsx(v.Suspense,{fallback:u.jsx("div",{className:"loading",children:"loading modules…"}),children:u.jsx(Sh,{children:u.jsxs(ah,{children:[e.routes.map(f=>u.jsx(Gn,{path:f.path,element:f.element},f.path)),u.jsx(Gn,{path:"/demo",element:u.jsx(ql,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),u.jsx(Gn,{path:"/demo/:slug",element:u.jsx(kh,{demos:e.demos})}),u.jsx(Gn,{path:"*",element:u.jsx(ql,{to:"/",replace:!0})})]})})})]})]})}function _h({config:e}){return u.jsx(gh,{children:u.jsx(Ph,{config:e})})}const Ch="modulepreload",Rh=function(e,t){return new URL(e,t).href},Gu={},On=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=Rh(c,r),c in Gu)return;Gu[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let S=l.length-1;S>=0;S--){const y=l[S];if(y.href===c&&(!d||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const x=document.createElement("link");if(x.rel=d?"stylesheet":Ch,d||(x.as="script"),x.crossOrigin="",x.href=c,a&&x.setAttribute("nonce",a),document.head.appendChild(x),d)return new Promise((S,y)=>{x.addEventListener("load",S),x.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},Wo=Object.freeze(["basics","work","education","skills","projects","extra","attachments"]),jh=["renderToolbar","renderBasics","renderAttachments","renderFooter"];function Eh(){const e=new Map,t=new Map,n=(l,s)=>{const a=e.get(l);if(a)for(const c of[...a])try{c(s)}catch(d){console.warn(`[PluginBus] handler error for event "${l}"`,d)}},r=(l,s)=>{let a=e.get(l);return a||(a=new Set,e.set(l,a)),a.add(s),()=>{a==null||a.delete(s)}},o=(l,s)=>{const a=c=>{s(c),i(l,a)};return r(l,a)},i=(l,s)=>{var a;if(!s){e.delete(l);return}(a=e.get(l))==null||a.delete(s)};return{emit:n,on:r,once:o,off:i,getData:l=>t.get(l),setData:(l,s)=>{const a=t.get(l);t.set(l,s),a!==s&&n(l,s)},deleteData:l=>{const s=t.has(l);t.delete(l),s&&n(l,void 0)},hasData:l=>t.has(l),getAll:()=>{const l={};return t.forEach((s,a)=>{l[a]=s}),l},clear:()=>{e.clear(),t.clear()}}}function $f(e){const t=new Map(e.map(s=>[s.name,s])),n=[];for(const s of e)for(const a of s.dependencies??[])t.has(a)||n.push(`${s.name} -> ${a}`);const r=[],o=new Set,i=[...e],l=s=>(s.dependencies??[]).every(a=>o.has(a)||!t.has(a));for(;i.length>0;){const s=i.filter(l);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(c=>c.name).join(" <-> ")}`);let a=s[0];for(const c of s)(c.priority??0)>(a.priority??0)&&(a=c);r.push(a),o.add(a.name),i.splice(i.indexOf(a),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),r}async function bh(e,t={}){const{timeout:n=3e3,name:r="anonymous",hook:o="unknown"}=t;if(!n||n<=0)return await e();let i;const l=new Promise((s,a)=>{i=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const Th=new Set(["onMount","onUnmount","onPropsChange","onError"]);function Dh(e={}){const t=e.logger??console,n=e.sandbox??!0,r=e.timeout??3e3,o=[],i=[],l=new Map,s=()=>$f([...l.values()].filter(c=>c.enabled!==!1)),a=c=>{l.set(c.name,{...c,enabled:c.enabled??!0}),c.init&&Promise.resolve(c.init()).catch(d=>{t.warn(`[PluginManager] init failed for ${c.name}`,d)})};return{register:a,registerAll:c=>{for(const d of c)a(d)},unregister:c=>{const d=l.get(c);d&&(d.destroy&&Promise.resolve(d.destroy()).catch(f=>{t.warn(`[PluginManager] destroy failed for ${d.name}`,f)}),l.delete(c))},getPlugin:c=>l.get(c),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(c=>c.enabled!==!1),getExecutionOrder:s,enable:c=>{const d=l.get(c);d&&(d.enabled=!0)},disable:c=>{const d=l.get(c);d&&(d.enabled=!1)},has:c=>l.has(c),executeHook:async(c,d,...f)=>{var p,x;for(const S of s()){const y=(p=S.hooks)==null?void 0:p[c];if(typeof y!="function")continue;const k=S.sandbox??n,g=S.timeout??r;let m;try{m=k?await bh(()=>y(d,...f),{timeout:g,name:S.name,hook:String(c)}):await y(d,...f)}catch(h){if(o.push({plugin:S.name,hook:String(c),error:h}),t.warn(`[PluginManager] hook ${String(c)} failed in ${S.name}`,h),(x=e.onError)==null||x.call(e,S.name,String(c),h),c==="onError")break;continue}if(Th.has(String(c))&&typeof m=="function"){i.push(m);continue}if(m===!1)return!1;if(m!==void 0&&m!==!0)return m}},clear:()=>{const c=i.splice(0);for(const d of c.reverse())try{d()}catch(f){t.warn("[PluginManager] cleanup failed",f)}for(const d of l.values())d.destroy&&Promise.resolve(d.destroy()).catch(f=>{t.warn(`[PluginManager] destroy failed for ${d.name}`,f)});l.clear()},getErrors:()=>[...o]}}var Oh=Object.defineProperty,zh=(e,t,n)=>t in e?Oh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$h=(e,t,n)=>zh(e,t+"",n);class ui extends br.Component{constructor(){super(...arguments),$h(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(o=(r=this.props).onError)==null||o.call(r,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}}let no=null;function Mh(e=!1){if(no&&!e)return no;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(o),l=/Mobile|Android|iPhone/i.test(o),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return no={type:i?"tablet":l?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:t,viewportHeight:n,isTouchDevice:s,isRetina:r>=2},no}function Xu(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;const n=Object.keys(e),r=Object.keys(t);return n.length!==r.length?!1:n.every(o=>Object.is(e[o],t[o]))}function Lh(e){const{plugins:t,props:n,data:r,initialState:o,containerRef:i,enableDebug:l=!1,managerOptions:s,extendContext:a}=e,c=v.useRef(null),d=i??c,f=v.useRef(null);f.current||(f.current=Dh(s));const p=f.current,x=v.useRef(null);x.current||(x.current=Eh());const S=x.current,y=v.useRef(new Map),[k,g]=v.useState(o??{}),[,m]=v.useState(0),h=v.useCallback(()=>m(T=>T+1),[]),w=v.useMemo(()=>Mh(),[]),C=v.useRef(t),_=C.current;(_.length!==t.length||t.some((T,D)=>T!==_[D]))&&(C.current=t);const R=C.current,b=R.map(T=>T.name).join("|");v.useLayoutEffect(()=>{p.clear(),p.registerAll(R),l&&console.debug("[vane/plugin-core] plugins registered:",b)},[R]),v.useLayoutEffect(()=>()=>{p.executeHook("onUnmount",z.current),p.clear()},[p]);const N=v.useMemo(()=>$f(R),[R]),z=v.useRef(null),ie=v.useRef(n);Xu(ie.current,n)||(ie.current=n);const Ke=ie.current,Te=v.useRef(r);Xu(Te.current,r)||(Te.current=r);const $t=Te.current,Mt=v.useMemo(()=>{const T={props:Ke,data:$t,bus:S,refs:{container:d,getContainer:()=>d.current},state:k,setState:D=>g(L=>({...L,...D})),shared:y.current,deviceInfo:w,forceUpdate:h,getSize:()=>{const D=d.current;return D?{width:D.offsetWidth,height:D.offsetHeight}:{width:0,height:0}},logger:console};return a?a(T):T},[Ke,$t,k,w,S,a]);z.current=Mt;const Lt=v.useCallback(T=>{var L,U;let D=T;for(const De of N){const ue=(L=De.hooks)==null?void 0:L.transformProps;if(typeof ue=="function")try{D=ue(D)}catch(me){(((U=z.current)==null?void 0:U.logger)??console).warn(`[plugin-core] ${De.name}.transformProps 执行失败，已跳过`,me)}}return D},[N]),Nt=v.useCallback(T=>{var L,U;let D=T;for(const De of N){const ue=(L=De.hooks)==null?void 0:L.transformData;if(typeof ue=="function")try{D=ue(z.current,D)}catch(me){(((U=z.current)==null?void 0:U.logger)??console).warn(`[plugin-core] ${De.name}.transformData 执行失败，已跳过`,me)}}return D},[N]),j=v.useCallback((T,...D)=>p.executeHook(T,z.current,...D),[p]);return{manager:p,bus:S,context:Mt,state:k,setState:Mt.setState,execute:j,transformProps:Lt,transformData:Nt,orderedPlugins:N}}v.createContext(null);function Gi(e,t,n){const{hook:r,position:o="after"}=n;return e.filter(i=>i.enabled!==!1).filter(i=>{var l;return typeof((l=i.hooks)==null?void 0:l[r])=="function"}).filter(i=>{var s;const l=(s=i.config)==null?void 0:s.slotPosition;return o==="before"?l==="before":o==="footer"?l===void 0||l==="after"||l==="footer":l===void 0||l==="after"}).sort((i,l)=>{var s,a;return(((s=i.config)==null?void 0:s.order)??0)-(((a=l.config)==null?void 0:a.order)??0)||(l.priority??0)-(i.priority??0)}).map(i=>{try{const l=i.hooks[r](t);return l==null?null:u.jsx(ui,{children:l},`vane-slot-${i.name}`)}catch(l){return console.warn(`[vane/plugin-core] 插件 ${i.name} 的 ${r} 渲染失败`,l),null}})}const ci=v.createContext(null);function Mf(e){return[...e].sort((t,n)=>{var r,o;return(((r=t.config)==null?void 0:r.order)??0)-(((o=n.config)==null?void 0:o.order)??0)||(n.priority??0)-(t.priority??0)})}function Nh(e){const t={};for(const n of jh)t[n]=Mf(e.filter(r=>r.enabled!==!1&&typeof r.hooks[n]=="function"));return t}function Ih({orderedPlugins:e,context:t,children:n}){const r=v.useMemo(()=>Nh(e),[e]),o=v.useMemo(()=>({orderedPlugins:e,context:t,slots:r}),[e,t,r]);return u.jsx(ci.Provider,{value:o,children:n})}function Ah(e,t,n){return e.reduce((r,o)=>{try{const i=o.hooks[n](t);return i==null||r.push(u.jsx(ui,{children:i},`resume-slot-${o.name}`)),r}catch(i){return console.warn(`[vane-resume] 插件 ${o.name} 的 ${n} 渲染失败`,i),r}},[])}function Lf(e){return typeof e=="function"?e():e}function Uh(e,t,n,r){const o=Mf(e.filter(i=>i.enabled!==!1&&typeof i.hooks[n]=="function"));for(let i=o.length-1;i>=0;i--){const l=o[i];try{const s=l.hooks[n](t);if(s!=null)return u.jsx(ui,{children:s},`resume-content-${l.name}`)}catch(s){console.warn(`[vane-resume] 插件 ${l.name} 的 ${n} 渲染失败`,s)}}return Lf(r)}function ro(e){const t=v.useContext(ci),n=t?t.slots[e]:null,r=t?t.context:null;return v.useMemo(()=>n&&r?Ah(n,r,e):[],[n,r,e])}function Kn(e,t){const n=v.useContext(ci),r=n?n.orderedPlugins:null,o=n?n.context:null,i=v.useRef(t);i.current=t;const l=v.useRef(null),s=()=>{const d=i.current,f=l.current;if(f&&f.fallback===d)return f.node;const p=Lf(d);return l.current={fallback:d,node:p},p},c=typeof t=="function"?null:t;return v.useMemo(()=>r&&o?Uh(r,o,e,s):s(),[r,o,e,c])}function Fh(){const e=v.useContext(ci);return(e==null?void 0:e.context)??null}const O={bg:"#ffffff",text:"#1f2328",muted:"#5d636a",faint:"#8a9099",line:"#e3e6ea",lineStrong:"#d4d8de",accent:"#2f6feb",accentInk:"#ffffff",markBg:"#fff3bf",markText:"#1f2328",chipBg:"#f2f3f5",chipText:"#1f2328"};function A(e){return{background:e?O.accent:O.chipBg,color:e?O.accentInk:O.chipText,border:`1px solid ${O.lineStrong}`,borderRadius:"var(--vr-radius, 6px)",fontSize:12,padding:"3px 9px",cursor:"pointer"}}function Rr(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Bh(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const Vh=new Set(["http:","https:","mailto:","tel:"]);function jr(e){if(typeof e!="string")return;const t=e.trim();if(t){if(t.startsWith("#")||t.startsWith("/")||t.startsWith("./")||t.startsWith("../"))return t;try{const{protocol:n}=new URL(t,"https://vr.invalid/");return Vh.has(n)?t:void 0}catch{return}}}const Wh=50,oo=new Map;function Hh(e){const t=e.join("");let n=oo.get(t);return n||(oo.size>=Wh&&oo.clear(),n=new RegExp(`(${e.map(r=>Bh(r)).join("|")})`,"gi"),oo.set(t,n)),n.lastIndex=0,n}function Ft(e,t){if(!e)return e;const n=(t??[]).filter(Boolean);if(n.length===0)return e;const r=Hh(n),o=[];let i=0,l,s=0;for(;(l=r.exec(e))!==null;)l.index>i&&o.push(e.slice(i,l.index)),o.push(u.jsx("mark",{style:{background:O.markBg,color:O.markText,padding:"0 2px",borderRadius:2},children:l[0]},`kw-${s++}`)),i=l.index+l[0].length,l.index===r.lastIndex&&r.lastIndex++;return i<e.length&&o.push(e.slice(i)),o.length?o:e}const ln={work:"工作经历",education:"教育背景",skills:"专业技能",projects:"项目经历",extra:"荣誉 / 语言 / 证书",attachments:"附件"},nn=v.forwardRef(function(t,n){var Qe,It,Ea,ba,Ta,Da;const{children:r,containerClassName:o,containerStyle:i,onMount:l,onUnmount:s,containerRefExternal:a}=t,c=v.useRef(null),d=a??c,[,f]=v.useState(0),p=Fh(),x=v.useRef(p);x.current=p;const S=v.useRef(t);S.current=t;const y=(p==null?void 0:p.data)??t.data,k=((Qe=p==null?void 0:p.state)==null?void 0:Qe.highlightKeywords)??[],g=((It=p==null?void 0:p.state)==null?void 0:It.collapsed)??[],m=!!((Ea=p==null?void 0:p.state)!=null&&Ea.collapseMode),h=((ba=p==null?void 0:p.state)==null?void 0:ba.templateVars)??{},w=((Ta=p==null?void 0:p.state)==null?void 0:Ta.themeVars)??{};v.useImperativeHandle(n,()=>({getContainer:()=>d.current,forceUpdate:()=>f(B=>B+1),getSize:()=>{const B=d.current;return B?{width:B.offsetWidth,height:B.offsetHeight}:{width:0,height:0}},getSectionOrder:()=>{var B,Oe;return((Oe=(B=x.current)==null?void 0:B.state)==null?void 0:Oe.sectionOrder)??S.current.defaultSectionOrder??[...Wo]}}),[d]),v.useEffect(()=>(l==null||l(),()=>s==null?void 0:s()),[]);const C=B=>{if(!p)return;const Oe=new Set(g);Oe.has(B)?Oe.delete(B):Oe.add(B),p.setState({collapsed:[...Oe]})},_=((Da=p==null?void 0:p.state)==null?void 0:Da.sectionOrder)??t.defaultSectionOrder??Wo,R=k.join(""),b=ro("renderToolbar"),N=ro("renderBasics"),z=ro("renderAttachments"),ie=v.useMemo(()=>{var B;return(B=y==null?void 0:y.attachments)!=null&&B.length?Xh(y.attachments,k):null},[y==null?void 0:y.attachments,R]),Ke=z.length>0?z:ie,Te=ro("renderFooter"),$t=v.useMemo(()=>()=>y?Qh(y.work??[],k):null,[y==null?void 0:y.work,R]),Mt=v.useMemo(()=>()=>y?Yh(y.education??[],k):null,[y==null?void 0:y.education,R]),Lt=v.useMemo(()=>()=>y?Jh(y.skills??[],k):null,[y==null?void 0:y.skills,R]),Nt=v.useMemo(()=>()=>{var B;return(B=y==null?void 0:y.projects)!=null&&B.length?qh(y.projects,k):null},[y==null?void 0:y.projects,R]),j=v.useMemo(()=>()=>y?Gh(y,k):null,[y,R]),T=Kn("renderWork",$t),D=Kn("renderEducation",Mt),L=Kn("renderSkills",Lt),U=Kn("renderProjects",Nt),De=Kn("renderExtra",j),ue=v.useMemo(()=>y?Kh(y,k):null,[y,R]),me=(B,Oe,Pi)=>{if(Pi==null)return null;const Ir=m&&g.includes(B);return u.jsxs("section",{"data-section-key":B,className:"vr-section",style:{padding:"var(--vr-pad, 16px) 20px",borderTop:`1px solid ${O.line}`},children:[u.jsxs("header",{className:"vr-section-head",style:{display:"flex",alignItems:"center",gap:8,marginBottom:Ir?0:10},children:[u.jsx("h2",{style:{margin:0,fontSize:"var(--vr-h2, 15px)",fontWeight:700,color:O.text,letterSpacing:.5},children:Oe}),m&&u.jsx("button",{type:"button","aria-label":Ir?"展开":"折叠",onClick:()=>C(B),style:{marginLeft:"auto",background:O.chipBg,color:O.text,border:`1px solid ${O.line}`,borderRadius:"var(--vr-radius, 6px)",fontSize:12,padding:"2px 8px",cursor:"pointer"},children:Ir?"展开":"折叠"})]}),!Ir&&u.jsx("div",{className:"vr-section-body",children:Pi})]},B)};return u.jsxs("div",{ref:d,className:`vr-root ${o||""}`,style:{position:"relative",boxSizing:"border-box",background:O.bg,color:O.text,maxWidth:820,margin:"0 auto",fontFamily:"var(--vr-font, system-ui, -apple-system, 'Segoe UI', Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif)",fontSize:14,lineHeight:1.6,...h,...w,...i},children:[b.length>0&&u.jsx("div",{className:"vr-toolbar",style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,padding:"10px 20px",borderBottom:`1px solid ${O.line}`},children:b}),_.map(B=>{var Oe;switch(B){case"basics":return!ue&&N.length===0?null:me("basics","基本信息",u.jsxs(u.Fragment,{children:[ue,N]}));case"work":return me("work",ln.work,T);case"education":return me("education",ln.education,D);case"skills":return me("skills",ln.skills,L);case"projects":return(Oe=y==null?void 0:y.projects)!=null&&Oe.length?me("projects",ln.projects,U):null;case"extra":return me("extra",ln.extra,De);case"attachments":return me("attachments",ln.attachments,Ke);default:return null}}),Te.length>0&&u.jsx("div",{className:"vr-footer",style:{display:"flex",flexWrap:"wrap",gap:12,padding:"14px 20px",borderTop:`1px solid ${O.line}`},children:Te}),r]})});nn.displayName="ResumeCore";function G({value:e,kw:t}){return u.jsx(u.Fragment,{children:Ft(e,t)})}function Kh(e,t){var r;const n=e.basics;return n?u.jsxs("div",{className:"vr-basics",style:{display:"flex",gap:16,flexWrap:"wrap"},children:[n.avatar&&u.jsx("img",{src:n.avatar,alt:n.name,style:{width:72,height:72,borderRadius:"50%",objectFit:"cover",border:`1px solid ${O.line}`}}),u.jsxs("div",{style:{flex:1,minWidth:220},children:[u.jsx("div",{style:{fontSize:22,fontWeight:800,color:O.text},children:n.name}),n.title&&u.jsx("div",{style:{color:"var(--vr-accent, #2f6feb)",fontWeight:600,marginTop:2},children:u.jsx(G,{value:n.title,kw:t})}),n.summary&&u.jsx("p",{style:{margin:"8px 0 0",color:O.muted,fontSize:13},children:u.jsx(G,{value:n.summary,kw:t})}),u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px 16px",marginTop:8,fontSize:13,color:O.muted},children:[n.location&&u.jsxs("span",{children:["📍 ",u.jsx(G,{value:n.location,kw:t})]}),n.birthDate&&u.jsxs("span",{children:["🎂 ",u.jsx(G,{value:n.birthDate,kw:t})]})]}),((r=n.contacts)==null?void 0:r.length)>0&&u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px 16px",marginTop:4,fontSize:13},children:n.contacts.map((o,i)=>{const l=jr(o.href);return u.jsx("span",{style:{color:O.text},children:l?u.jsxs("a",{href:l,style:{color:"var(--vr-accent, #2f6feb)",textDecoration:"none"},children:[o.label,"：",u.jsx(G,{value:o.value,kw:t})]}):u.jsxs("span",{children:[o.label,"：",u.jsx(G,{value:o.value,kw:t})]})},i)})})]})]}):null}function na(e,t){return`${e} — ${t}`}function Qh(e,t){return e.length?u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:e.map((n,r)=>{var o;return u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx("div",{style:{width:120,flexShrink:0,color:O.faint,fontSize:12,paddingTop:2},children:na(n.start,n.end)}),u.jsxs("div",{style:{flex:1},children:[u.jsxs("div",{style:{fontWeight:700,color:O.text},children:[u.jsx(G,{value:n.company,kw:t}),n.role&&u.jsxs("span",{style:{fontWeight:400,color:O.muted},children:[" · ",u.jsx(G,{value:n.role,kw:t})]})]}),n.location&&u.jsx("div",{style:{color:O.faint,fontSize:12},children:n.location}),((o=n.highlights)==null?void 0:o.length)>0&&u.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:18,color:O.muted},children:n.highlights.map((i,l)=>u.jsx("li",{children:u.jsx(G,{value:i,kw:t})},l))})]})]},n.id??r)})}):null}function Yh(e,t){return e.length?u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:e.map((n,r)=>u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx("div",{style:{width:120,flexShrink:0,color:O.faint,fontSize:12,paddingTop:2},children:na(n.start,n.end)}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:700,color:O.text},children:u.jsx(G,{value:n.school,kw:t})}),u.jsxs("div",{style:{color:O.muted},children:[u.jsx(G,{value:n.degree,kw:t}),n.major&&u.jsxs("span",{children:[" · ",u.jsx(G,{value:n.major,kw:t})]})]})]})]},n.id??r))}):null}function Jh(e,t){return e.length?u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:e.map((n,r)=>u.jsxs("div",{style:{display:"flex",gap:10,alignItems:"flex-start"},children:[u.jsx("div",{style:{width:110,flexShrink:0,color:O.muted,fontWeight:600},children:u.jsx(G,{value:n.category,kw:t})}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:n.items.map((o,i)=>u.jsx("span",{style:{background:O.chipBg,color:O.chipText,border:`1px solid ${O.line}`,borderRadius:"var(--vr-radius, 12px)",padding:"2px 10px",fontSize:12},children:u.jsx(G,{value:o,kw:t})},i))})]},r))}):null}function qh(e,t){return u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:e.map((n,r)=>u.jsxs("div",{children:[u.jsxs("div",{style:{fontWeight:700,color:O.text},children:[u.jsx(G,{value:n.name,kw:t}),n.role&&u.jsxs("span",{style:{fontWeight:400,color:O.muted},children:[" · ",u.jsx(G,{value:n.role,kw:t})]}),(n.start||n.end)&&u.jsx("span",{style:{float:"right",color:O.faint,fontSize:12,fontWeight:400},children:na(n.start??"",n.end??"")})]}),u.jsx("p",{style:{margin:"4px 0 0",color:O.muted,fontSize:13},children:u.jsx(G,{value:n.desc,kw:t})}),n.links&&n.links.length>0&&u.jsx("div",{style:{marginTop:4},children:n.links.map((o,i)=>{const l=jr(o);return l?u.jsxs("a",{href:l,style:{color:"var(--vr-accent, #2f6feb)",fontSize:12,marginRight:12,textDecoration:"none"},children:["链接",i+1," ↗"]},i):null})})]},n.id??r))})}function Gh(e,t){var r,o,i;const n=[];return(r=e.awards)!=null&&r.length&&n.push(u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:600,color:O.text,marginBottom:4},children:"荣誉奖项"}),u.jsx("ul",{style:{margin:0,paddingLeft:18,color:O.muted},children:e.awards.map((l,s)=>u.jsxs("li",{children:[u.jsx(G,{value:l.title,kw:t})," · ",l.issuer,l.date&&u.jsxs("span",{style:{color:O.faint},children:[" · ",l.date]})]},s))})]},"awards")),(o=e.languages)!=null&&o.length&&n.push(u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:600,color:O.text,marginBottom:4},children:"语言能力"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:e.languages.map((l,s)=>u.jsxs("span",{style:{background:O.chipBg,color:O.chipText,borderRadius:"var(--vr-radius, 12px)",padding:"2px 10px",fontSize:12},children:[u.jsx(G,{value:l.name,kw:t})," · ",l.level]},s))})]},"langs")),(i=e.certificates)!=null&&i.length&&n.push(u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:600,color:O.text,marginBottom:4},children:"证书"}),u.jsx("ul",{style:{margin:0,paddingLeft:18,color:O.muted},children:e.certificates.map((l,s)=>u.jsxs("li",{children:[u.jsx(G,{value:l.name,kw:t})," · ",l.issuer,l.date&&u.jsxs("span",{style:{color:O.faint},children:[" · ",l.date]})]},s))})]},"certs")),n.length?u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:n}):null}function Xh(e,t){return u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10},children:e.map((n,r)=>u.jsxs("a",{href:jr(n.url),target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:8,background:O.chipBg,color:O.text,border:`1px solid ${O.line}`,borderRadius:"var(--vr-radius, 8px)",padding:"8px 12px",textDecoration:"none",fontSize:13},children:[u.jsx("span",{style:{color:"var(--vr-accent, #2f6feb)",textTransform:"uppercase",fontSize:11,fontWeight:700},children:n.kind}),u.jsx("span",{children:u.jsx(G,{value:n.name,kw:t})}),n.size?u.jsxs("span",{style:{color:O.faint,fontSize:11},children:[(n.size/1024).toFixed(0),"KB"]}):null]},n.id??r))})}const Zh=new Set(["children","containerRefExternal"]);function ey(e,t){const n=e,r=t,o=new Set([...Object.keys(n),...Object.keys(r)]);for(const i of o)if(!Zh.has(i)&&!Object.is(n[i],r[i]))return!1;return!0}function $r(e,t){const n=Array.isArray(t)?{plugins:t}:t,{plugins:r,enableDebug:o=!1}=n,i=v.forwardRef((l,s)=>{const a=v.useRef(null),c=v.useCallback(_=>_,[]),d=Lh({plugins:r,props:l,data:l.data,containerRef:a,extendContext:c,enableDebug:o}),f=d.context,[p,x]=v.useState(null);v.useEffect(()=>d.bus.on("resume:data-replace",_=>{const R=_&&typeof _=="object"&&"data"in _?_.data:_;x(R??null)}),[d.bus]);const S=v.useRef(d.context.data);v.useEffect(()=>{S.current!==d.context.data&&(S.current=d.context.data,x(null))},[d.context.data]);const y=p??l.data,k=v.useMemo(()=>y===void 0?void 0:d.transformData(y),[y,d.transformData,d.state]),g=v.useMemo(()=>({...f,data:k}),[f,k]),m=v.useCallback((_,...R)=>d.execute(_,...R),[d.manager]),h=d.transformProps(l);v.useEffect(()=>{m("onMount")},[m,d.orderedPlugins]);const w=v.useRef(null);v.useEffect(()=>{const _=w.current;w.current=l,!(!_||ey(_,l))&&m("onPropsChange",_,l)},[l,m]);const C={...h,containerRefExternal:a,debug:h.debug??o,onMount:()=>{var _;(_=h.onMount)==null||_.call(h)},onUnmount:()=>{var _;(_=h.onUnmount)==null||_.call(h)},children:u.jsxs(ui,{children:[Gi(d.orderedPlugins,g,{hook:"renderHeader",position:"before"}),h.children,Gi(d.orderedPlugins,g,{hook:"renderOverlay"}),Gi(d.orderedPlugins,g,{hook:"renderHeader",position:"after"})]})};return u.jsx(Ih,{orderedPlugins:d.orderedPlugins,context:g,children:u.jsx(e,{ref:s,...C})})});return i.displayName="WithPlugins(ResumeCore)",i}const ty=(e,t)=>"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect width="96" height="96" rx="48" fill="${e}"/><text x="48" y="62" font-size="44" text-anchor="middle" fill="#fff" font-family="sans-serif">${t}</text></svg>`),ny=ty("#2f6feb","林"),rn={basics:{name:"林清扬",title:"高级前端工程师 · 组件体系负责人",avatar:ny,summary:"8 年前端经验，主导过 3 个百万级 DAU 产品的组件库与可视化体系建设；擅长把「临时的业务需求」沉淀为可勾选、可组合的插件。",location:"上海",birthDate:"1992-04",contacts:[{type:"phone",label:"手机",value:"138-0000-8866"},{type:"email",label:"邮箱",value:"qingyang.lin@example.com"},{type:"address",label:"所在地",value:"上海 · 徐汇"},{type:"social",label:"GitHub",value:"github.com/qingyang",href:"https://github.com/"}]},work:[{id:"w1",company:"云栖科技",role:"高级前端工程师 / 组件体系负责人",start:"2021-03",end:"至今",location:"上海",highlights:["从 0 搭建插件化组件库，覆盖 20+ 业务模块，复用率从 31% 提升到 78%。","主导可视化排版引擎，把简历 / 主页 / 数据看板的渲染收敛到同一套插槽契约。","推动 TypeScript 全量迁移，类型覆盖率 92%，线上类型相关事故归零。"]},{id:"w2",company:"明远网络",role:"前端工程师",start:"2018-07",end:"2021-02",location:"杭州",highlights:["负责电商中台可视化搭建平台，拖拽编排日均服务 600+ 运营同学。","优化首屏性能，关键路由 LCP 从 3.4s 降到 1.2s。"]},{id:"w3",company:"初芒工作室",role:"前端实习生",start:"2017-06",end:"2018-06",location:"南京",highlights:["参与多个 H5 营销活动页开发，独立交付 12 个活动。","写了第一版组件规范文档。"]}],education:[{id:"e1",school:"东南大学",degree:"硕士",major:"计算机科学与技术",start:"2015-09",end:"2018-06"},{id:"e2",school:"南京邮电大学",degree:"学士",major:"软件工程",start:"2011-09",end:"2015-06"}],skills:[{category:"语言",items:["TypeScript","JavaScript","HTML","CSS"]},{category:"框架",items:["React","Vue","Node.js"]},{category:"工程化",items:["Vite","Turborepo","Monorepo","Vitest"]},{category:"领域",items:["可视化","组件体系","性能优化","插件化架构"]}],projects:[{id:"p1",name:"vane 插件化组件库",role:"作者 / 维护者",start:"2022-01",end:"至今",desc:"把业务需求拆成可勾选的插件，核心只负责结构化数据与插槽；20+ 插件按需装配。",links:["https://vane.dev","https://github.com/"]},{id:"p2",name:"可视化排版引擎",role:"核心开发",desc:"统一简历 / 主页 / 看板的渲染契约，CSS 变量驱动模板切换。",links:["https://vane.dev/engine"]}],awards:[{id:"a1",title:"年度技术之星",issuer:"云栖科技",date:"2023"},{id:"a2",title:"开源贡献奖",issuer:"CNCF",date:"2022"}],languages:[{id:"l1",name:"中文",level:"母语"},{id:"l2",name:"English",level:"CET-6 / 可读写"}],certificates:[{id:"c1",name:"系统架构设计师",issuer:"工信部",date:"2021"},{id:"c2",name:"PMP",issuer:"PMI",date:"2020"}],attachments:[{id:"at1",name:"作品集.pdf",kind:"pdf",url:"https://vane.dev/portfolio.pdf",size:24e5},{id:"at2",name:"架构图.png",kind:"image",url:"https://vane.dev/arch.png"},{id:"at3",name:"在线主页",kind:"link",url:"https://vane.dev/u/qingyang"}]},ry={slug:"basic",title:"裸核心",group:"basic",intro:"ResumeCore 接收 ResumeData，按板块顺序渲染；不装任何插件时就是最朴素的纵向简历。",why:"先看底座：所有插件都是在这个结构化核心之上做增强，而不是重写它。",plugs:[],props:[]};function oy(e){return u.jsx(nn,{data:rn,containerStyle:{maxWidth:560,margin:"0 auto"}})}const iy=Object.freeze(Object.defineProperty({__proto__:null,default:oy,meta:ry},Symbol.toStringTag,{value:"Module"})),ly="TemplateSwitch",sy="模板切换：在经典 / 现代 / 紧凑 / 学术等版式间切换，经 CSS 变量驱动整体观感。",ay="0.1.0",uy=["layout","template","renderToolbar","onMount"],cy=[{name:"templates",type:"TemplateDef[]",default:"4 套内置",description:"模板定义（id / label / vars 为 CSS 变量覆盖）"},{name:"defaultId",type:"string",default:"classic",description:"默认模板 id"}],dy="withResumePlugins(ResumeCore, [createTemplateSwitchPlugin({ defaultId: 'modern' })])",ra={name:ly,description:sy,since:ay,tags:uy,config:cy,example:dy},fy=[{id:"classic",label:"经典",vars:{"--vr-accent":"#2f6feb","--vr-pad":"16px","--vr-radius":"6px","--vr-h2":"15px","--vr-font":"system-ui, -apple-system, 'Segoe UI', Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif"}},{id:"modern",label:"现代",vars:{"--vr-accent":"#7c3aed","--vr-pad":"22px","--vr-radius":"14px","--vr-h2":"18px"}},{id:"compact",label:"紧凑",vars:{"--vr-accent":"#0ea5a4","--vr-pad":"10px","--vr-radius":"4px","--vr-h2":"14px"}},{id:"academic",label:"学术",vars:{"--vr-accent":"#1f6f54","--vr-pad":"18px","--vr-radius":"2px","--vr-h2":"16px","--vr-font":"Georgia, 'Times New Roman', serif"}}],di=(e={})=>{var o;const t=e.templates??fy,n=e.defaultId??((o=t[0])==null?void 0:o.id),r=i=>t.find(l=>l.id===i)??t[0];return{name:"template-switch",version:"0.1.0",description:ra.description,priority:12,config:{order:12},hooks:{onMount:i=>{if(i.state.template===void 0){const l=r(n);i.setState({template:l.id,templateVars:l.vars})}},renderToolbar:i=>{const l=i.state.template??n;return u.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[u.jsx("span",{style:{fontSize:12,color:"var(--vr-faint, #8a9099)"},children:"模板"}),t.map(s=>u.jsx("button",{type:"button",onClick:()=>{i.setState({template:s.id,templateVars:s.vars}),i.bus.emit("resume:template-change",s.id)},style:A(l===s.id),children:s.label},s.id))]},"template-switch")}}}};di.meta=ra;const py="ThemeCustomize",my="主题配色定制：预设强调色 + 自定义取色器，经 CSS 变量注入容器。",gy="0.1.0",hy=["theme","renderToolbar","onMount"],yy=[{name:"presets",type:"ThemePreset[]",default:"4 套内置",description:"主题预设（id / label / vars）"},{name:"default",type:"string",default:"blue",description:"默认主题 id"}],vy="withResumePlugins(ResumeCore, [createThemeCustomizePlugin()])",oa={name:py,description:my,since:gy,tags:hy,config:yy,example:vy},xy=[{id:"blue",label:"蓝",vars:{"--vr-accent":"#2f6feb"}},{id:"orange",label:"橙",vars:{"--vr-accent":"#e8590c"}},{id:"green",label:"绿",vars:{"--vr-accent":"#1f9d55"}},{id:"mono",label:"墨",vars:{"--vr-accent":"#1f2328"}}],Xi=(e,t)=>{e.setState({themeVars:t,theme:t["--vr-accent"]??e.state.theme})},Mr=(e={})=>{const t=e.presets??xy;return{name:"theme-customize",version:"0.1.0",description:oa.description,priority:18,config:{order:18},hooks:{onMount:n=>{n.state.theme===void 0&&t[0]&&Xi(n,t[0].vars)},renderToolbar:n=>u.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[u.jsx("span",{style:{fontSize:12,color:"var(--vr-faint, #8a9099)"},children:"主题"}),t.map(r=>u.jsx("button",{type:"button",onClick:()=>Xi(n,r.vars),style:A(n.state.theme===r.vars["--vr-accent"]),children:r.label},r.id)),u.jsx("input",{type:"color",defaultValue:String(n.state.theme??"#2f6feb"),onChange:r=>Xi(n,{"--vr-accent":r.target.value}),style:{width:28,height:24,border:"none",background:"none",cursor:"pointer"},"aria-label":"自定义强调色"})]},"theme-customize")}}};Mr.meta=oa;const Sy="MultiLang",wy="多语言：在预设语言间切换，整体翻译文本字段（缺失字段保留原文降级）。",ky="0.1.0",Py=["i18n","transformData","renderToolbar","onMount"],_y=[{name:"locales",type:"{code,label}[]",default:"-",description:"语言列表"},{name:"default",type:"string",default:"首个语言",description:"默认语言 code"},{name:"detect",type:"() => string",default:"-",description:"可选的运行时语言探测"},{name:"translations",type:"Record<locale, Partial<ResumeData>>",default:"-",description:"各语言翻译（顶层字段整体覆盖）"}],Cy="withResumePlugins(ResumeCore, [createMultiLangPlugin({ locales:[{code:'zh',label:'中'},{code:'en',label:'EN'}], translations: { en: { basics:{ name:'John', title:'Engineer', contacts:[] } } } })])",ia={name:Sy,description:wy,since:ky,tags:Py,config:_y,example:Cy},fi=e=>{var i;if(!e||!Array.isArray(e.locales)||e.locales.length===0||!e.translations)throw new Error("[MultiLang] 需要非空的 locales 与 translations");const{locales:t,translations:n}=e,r=e.default??((i=e.detect)==null?void 0:i.call(e))??t[0].code,o=(l,s)=>{const a=s.basics?{...l.basics??{},...s.basics}:l.basics;return{...l,...s,basics:a}};return{name:"multi-lang",version:"0.1.0",description:ia.description,priority:14,config:{order:14},hooks:{onMount:l=>{l.state.lang===void 0&&l.setState({lang:r})},transformData:(l,s)=>{const a=l.state.lang??r,c=n[a];return c?o(s,c):s},renderToolbar:l=>{const s=l.state.lang??r;return u.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[u.jsx("span",{style:{fontSize:12,color:"var(--vr-faint, #8a9099)"},children:"语言"}),t.map(a=>u.jsx("button",{type:"button",onClick:()=>{l.setState({lang:a.code}),l.bus.emit("resume:lang-change",a.code)},style:A(s===a.code),children:a.label},a.code))]},"multi-lang")}}}};fi.meta=ia;const Ry="AiPolish",jy="AI 润色：调用可插拔服务润色摘要 / 工作描述 / 项目描述，可一键还原（不硬编码密钥）。",Ey="0.1.0",by=["ai","transformData","renderToolbar"],Ty=[{name:"fields",type:'("summary"|"work"|"projects")[]',default:"三项全开",description:"润色字段"},{name:"tone",type:"string",default:"-",description:"语气偏好，透传给 polish"},{name:"polish",type:"(text, field) => Promise<string>",default:"-",description:"可插拔润色服务（必填，否则按钮禁用）"}],Dy="withResumePlugins(ResumeCore, [createAiPolishPlugin({ polish: async (t) => myAiRewrite(t) })])",la={name:Ry,description:jy,since:Ey,tags:by,config:Ty,example:Dy},Zi="aipolish:polished",sa=(e={})=>{const t=e.fields??["summary","work","projects"],n=e.polish,r=i=>String(i.state.lang??"default"),o=i=>i.shared.get(Zi);return{name:"ai-polish",version:"0.1.0",description:la.description,priority:16,config:{order:16},dependencies:["multi-lang"],hooks:{onMount:i=>{i.state.aiPolishEnabled===void 0&&i.setState({aiPolishEnabled:!1})},transformData:(i,l)=>{if(!i.state.aiPolishEnabled)return l;const s=o(i);if(!s||s.lang!==r(i))return l;const a=Rr(l);return t.includes("summary")&&s.summary&&a.basics&&(a.basics.summary=s.summary),t.includes("work")&&s.work&&(a.work??[]).forEach((c,d)=>{var p;const f=(p=s.work)==null?void 0:p[d];Array.isArray(f)&&f.length===c.highlights.length&&(c.highlights=[...f])}),t.includes("projects")&&s.projects&&(a.projects??[]).forEach((c,d)=>{var p;const f=(p=s.projects)==null?void 0:p[d];typeof f=="string"&&(c.desc=f)}),a},renderToolbar:i=>{const l=o(i),s=!!i.state.aiPolishEnabled&&(l==null?void 0:l.lang)===r(i),a=!!i.state.aiPolishing,c=async()=>{var p;if(!n){i.logger.warn("[AiPolish] 未配置 config.polish，跳过润色");return}const d=r(i),f=Rr(i.data);i.setState({aiPolishing:!0});try{const x={lang:d};t.includes("summary")&&((p=f.basics)!=null&&p.summary)&&(x.summary=await n(f.basics.summary,"summary")),t.includes("work")&&(x.work=await Promise.all((f.work??[]).map(S=>Promise.all((S.highlights??[]).map(y=>n(y,"work")))))),t.includes("projects")&&(x.projects=await Promise.all((f.projects??[]).map(S=>n(S.desc,"projects")))),i.shared.set(Zi,x),i.setState({aiPolishEnabled:!0})}catch(x){i.logger.error("[AiPolish] 润色失败",x)}finally{i.setState({aiPolishing:!1})}};return u.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[u.jsx("button",{type:"button",disabled:a||!n,onClick:()=>void c(),style:A(s),children:a?"润色中…":"AI 润色"}),s&&u.jsx("button",{type:"button",onClick:()=>{i.shared.delete(Zi),i.setState({aiPolishEnabled:!1})},style:A(!1),children:"还原"})]},"ai-polish")}}}};sa.meta=la;const Oy="PrivacyMask",zy="隐私模式：整页毛玻璃视觉遮挡 + 配置字段的数据级隐藏（默认 summary/contacts）。毛玻璃不防复制，敏感信息请确保位于隐藏字段或已脱敏。",$y="0.1.0",My=["privacy","renderOverlay","transformData","renderToolbar"],Ly=[{name:"mode",type:'"blur" | "hide"',default:"blur",description:"毛玻璃视觉遮罩 / 仅字段级隐藏（两者都做数据级隐藏）"},{name:"fields",type:"string[]",default:'["summary","contacts"]',description:"隐私模式下隐藏的字段"}],Ny="withResumePlugins(ResumeCore, [createPrivacyMaskPlugin({ mode: 'blur' })])",aa={name:Oy,description:zy,since:$y,tags:My,config:Ly,example:Ny},pi=(e={})=>{const t=e.mode??"blur",n=e.fields??["summary","contacts"];return{name:"privacy-mask",version:"0.1.0",description:aa.description,priority:42,config:{order:42},dependencies:["contact-desensitize"],hooks:{onMount:r=>{r.state.privacyOn===void 0&&r.setState({privacyOn:!1})},renderToolbar:r=>{const o=!!r.state.privacyOn;return u.jsx("button",{type:"button",onClick:()=>r.setState({privacyOn:!o}),style:A(o),children:o?"隐私：开":"隐私：关"},"privacy-mask")},transformData:(r,o)=>{if(!r.state.privacyOn)return o;const i=Rr(o);return n.includes("summary")&&i.basics&&(i.basics.summary="*** 已隐藏 ***"),n.includes("contacts")&&i.basics&&(i.basics.contacts=[]),i},renderOverlay:r=>!r.state.privacyOn||t!=="blur"?null:u.jsx("div",{"data-vr-privacy-mask":"",style:{position:"absolute",inset:0,backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",background:"rgba(255,255,255,0.25)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50,pointerEvents:"none"},children:u.jsx("span",{style:{background:"rgba(0,0,0,0.6)",color:"#fff",padding:"4px 10px",borderRadius:8,fontSize:12},children:"隐私模式 · 内容已遮挡（敏感字段已隐藏）"})},"privacy-mask-overlay")}}};pi.meta=aa;const Iy="ContactDesensitize",Ay="联系方式脱敏：对电话 / 邮箱 / 地址做可逆脱敏（138****1234），公开分享时保护隐私。",Uy="0.1.0",Fy=["privacy","transformData","renderToolbar"],By=[{name:"mode",type:'"mask"|"hide"|"show"',default:"mask",description:"脱敏 / 隐藏 / 明文"},{name:"fields",type:"ContactType[]",default:"全部",description:"需脱敏的联系方式类型"},{name:"masks",type:"Partial<Record<type,(v)=>string>>",default:"-",description:"按类型自定义脱敏器"}],Vy="withResumePlugins(ResumeCore, [createContactDesensitizePlugin({ mode: 'mask' })])",ua={name:Iy,description:Ay,since:Uy,tags:Fy,config:By,example:Vy},Bt="***",Wy=(e,t,n)=>{const r=Array.from(e);return r.length<=t+n?Bt:`${r.slice(0,t).join("")}${Bt}${r.slice(-n).join("")}`},Hy=(e,t)=>{switch(e){case"phone":{let n=t.replace(/\D/g,"");return n.length>11&&n.startsWith("86")&&(n=n.slice(2)),n.length<7?Bt:`${n.slice(0,3)}${Bt}${n.slice(-4)}`}case"email":{const n=t.lastIndexOf("@");if(n<=0||n===t.length-1)return Bt;const r=t.slice(0,n),o=t.slice(n+1),i=o.lastIndexOf("."),l=i>=0?o.slice(i):"";return`${r.slice(0,1)||"*"}${Bt}@${o.slice(0,1)}${Bt}${l}`}case"address":case"social":default:return Wy(t,2,2)}},mi=(e={})=>{const t=e.mode??"mask",n=e.fields??["phone","email","address","social"],r=e.masks??{},o=(i,l)=>{if(!n.includes(i.type))return i;const s=l?"***":(r[i.type]??(a=>Hy(i.type,a)))(i.value);return{...i,value:s,href:void 0}};return{name:"contact-desensitize",version:"0.1.0",description:ua.description,priority:48,config:{order:48},dependencies:["ai-polish"],hooks:{onMount:i=>{i.state.contactMode===void 0&&i.setState({contactMode:t})},transformData:(i,l)=>{var c;const s=i.state.contactMode??t;if(s==="show")return l;const a=Rr(l);return(c=a.basics)!=null&&c.contacts&&(a.basics.contacts=a.basics.contacts.map(d=>o(d,s==="hide"))),a},renderToolbar:i=>{const l=i.state.contactMode??t,s=()=>{const c=l==="show"?"mask":l==="mask"?"hide":"show";i.setState({contactMode:c})},a=l==="show"?"联系：明文":l==="mask"?"联系：脱敏":"联系：隐藏";return u.jsx("button",{type:"button",onClick:s,style:A(l!=="show"),children:a},"contact-desensitize")}}}};mi.meta=ua;const Ky="ExportPdf",Qy="导出 PDF：打印通道（配合 PrintOptimize）或 canvas 通道（html2canvas+jsPDF 拼页，按需加载）。",Yy="0.1.0",Jy=["export","renderToolbar"],qy=[{name:"method",type:'"print"|"canvas"',default:"print",description:"导出通道"},{name:"fileName",type:"string",default:"resume.pdf",description:"canvas 模式文件名"},{name:"onBeforeExport",type:"() => void",default:"-",description:"导出前回调（如先收起隐私遮罩）"}],Gy="withResumePlugins(ResumeCore, [createExportPdfPlugin({ method: 'print' })])",ca={name:Ky,description:Qy,since:Yy,tags:Jy,config:qy,example:Gy},Xy=async e=>{const t=Array.from(e.querySelectorAll("img"));await Promise.all(t.map(n=>n.complete?Promise.resolve():new Promise(r=>{const o=()=>{n.removeEventListener("load",o),n.removeEventListener("error",o),r()};n.addEventListener("load",o),n.addEventListener("error",o),setTimeout(o,1500)})))},da=(e={})=>{const t=e.method??"print",n=e.fileName??"resume.pdf",r=async(o,i)=>{if(!i){o.setState({exportError:"未找到简历容器，无法导出"});return}if(await new Promise(s=>setTimeout(s,0)),i.querySelector("[data-vr-privacy-mask]")){o.setState({exportError:"隐私遮罩开启时无法可靠导出（html2canvas 不支持 backdrop-filter），请先关闭隐私模式"});return}const l=[];i.querySelectorAll(".vr-toolbar, [data-vr-overlay]").forEach(s=>{l.push({el:s,display:s.style.display}),s.style.display="none"});try{await Xy(i);const s=(await On(async()=>{const{default:k}=await import("./html2canvas.esm-CBrSDip1.js");return{default:k}},[],import.meta.url)).default,{jsPDF:a}=await On(async()=>{const{jsPDF:k}=await import("./jspdf.es.min-CVBbHZRM.js").then(g=>g.j);return{jsPDF:k}},[],import.meta.url),c=await s(i,{scale:2,backgroundColor:"#ffffff",useCORS:!0,allowTaint:!1,logging:!1,imageTimeout:1500}),d=c.toDataURL("image/png"),f=new a({orientation:"portrait",unit:"pt",format:"a4"}),p=f.internal.pageSize.getWidth(),x=f.internal.pageSize.getHeight(),S=c.height*p/c.width;f.addImage(d,"PNG",0,0,p,S);let y=S-x;for(;y>0;)f.addPage(),f.addImage(d,"PNG",0,-y,p,S),y-=x;f.save(n),o.setState({exportError:null})}catch(s){o.logger.error("[ExportPdf] canvas 导出失败",s);const a=s instanceof Error?s.message:String(s);o.setState({exportError:`导出失败：${a}。可改用“打印”通道或检查图片跨域配置。`})}finally{l.forEach(({el:s,display:a})=>{s.style.display=a})}};return{name:"export-pdf",version:"0.1.0",description:ca.description,priority:16,config:{order:16},hooks:{renderToolbar:o=>u.jsx("button",{type:"button",onClick:()=>{var i,l,s;(i=e.onBeforeExport)==null||i.call(e),o.bus.emit("resume:export",{method:t}),t==="canvas"?r(o,((s=(l=o.refs).getContainer)==null?void 0:s.call(l))??null):typeof window<"u"&&window.print()},style:A(!1),children:"导出 PDF"},"export-pdf"),renderOverlay:o=>{const i=o.state.exportError;return i?u.jsxs("div",{role:"alert",style:{position:"absolute",left:20,right:20,bottom:16,zIndex:70,background:"#fff4f2",color:"#8a1f11",border:"1px solid #f3c2b8",borderRadius:8,padding:"10px 12px",fontSize:12,display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{flex:1},children:i}),u.jsx("button",{type:"button",onClick:()=>o.setState({exportError:null}),style:A(!1),children:"关闭"})]},"export-error"):null}}}};da.meta=ca;const Zy='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';function bt({title:e,onClose:t,children:n,width:r=360,zIndex:o=55,closeLabel:i="关闭",headerExtra:l,align:s="center"}){const a=v.useRef(null),c=v.useRef(t);return c.current=t,v.useEffect(()=>{const d=a.current;if(!d||typeof document>"u")return;const f=document.activeElement,p=()=>Array.from(d.querySelectorAll(Zy)).filter(y=>!y.hasAttribute("disabled"));(p()[0]??d).focus();const S=y=>{if(y.key==="Escape"){y.stopPropagation(),c.current();return}if(y.key!=="Tab")return;const k=p();if(k.length===0){y.preventDefault(),d.focus();return}const g=k[0],m=k[k.length-1];y.shiftKey&&document.activeElement===g?(y.preventDefault(),m.focus()):!y.shiftKey&&document.activeElement===m&&(y.preventDefault(),g.focus())};return document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S);try{f==null||f.focus()}catch{}}},[]),u.jsx("div",{"data-vr-overlay":"",onClick:d=>{d.target===d.currentTarget&&t()},style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:s==="end"?"flex-end":"center",justifyContent:"center",zIndex:o},children:u.jsxs("div",{ref:a,role:"dialog","aria-modal":"true","aria-label":typeof e=="string"?e:void 0,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{background:"#fff",color:O.text,borderRadius:s==="end"?"10px 10px 0 0":10,padding:18,width:r,maxWidth:"92%",maxHeight:"86%",overflow:"auto",boxShadow:"0 8px 30px rgba(0,0,0,0.25)",outline:"none"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:[u.jsx("strong",{style:{color:O.text,flex:1,minWidth:0},children:e}),l,u.jsx("button",{type:"button",onClick:t,style:A(!1),children:i})]}),n]})})}const ev="ShareLink",tv="分享链接：默认只生成宿主地址，不把简历数据内联进 URL；需要携带数据时由 onBuildUrl 生成脱敏短链。弹窗复制并反馈结果。",nv="0.1.0",rv=["share","renderToolbar","renderOverlay"],ov=[{name:"baseUrl",type:"string",default:"-",description:"宿主基础地址（不含简历数据）"},{name:"onBuildUrl",type:"(data) => string | Promise<string>",default:"-",description:"注入宿主链接构建（推荐，可在此生成脱敏短链）"}],iv="withResumePlugins(ResumeCore, [createShareLinkPlugin({ onBuildUrl: (d) => `https://cv.example.com/${encodeURIComponent(d.basics.name)}` })])",fa={name:ev,description:tv,since:nv,tags:rv,config:ov,example:iv},lv=()=>typeof window<"u"?window.location.origin+window.location.pathname:"https://example.com/",gi=(e={})=>{const t=async n=>e.onBuildUrl?e.onBuildUrl(n):e.baseUrl??lv();return{name:"share-link",version:"0.1.0",description:fa.description,priority:18,config:{order:18},hooks:{renderToolbar:n=>u.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":!!n.state.shareOpen,onClick:async()=>{if(n.state.shareOpen){n.setState({shareOpen:!1,shareCopied:!1});return}try{const r=await t(n.data);n.shared.set("share:url",r),n.setState({shareOpen:!0,shareCopied:!1,shareError:null})}catch(r){n.logger.error("[ShareLink] 链接生成失败",r),n.setState({shareOpen:!0,shareCopied:!1,shareError:"链接生成失败，请稍后重试"})}},style:A(!!n.state.shareOpen),children:"分享"},"share-link"),renderOverlay:n=>{if(!n.state.shareOpen)return null;const r=n.shared.get("share:url")??"",o=!!n.state.shareCopied,i=n.state.shareError,l=()=>n.setState({shareOpen:!1,shareCopied:!1}),s=async()=>{if(r)try{typeof navigator<"u"&&navigator.clipboard?(await navigator.clipboard.writeText(r),n.setState({shareCopied:!0,shareError:null})):n.setState({shareError:"当前环境不支持剪贴板，请手动复制"})}catch(a){n.logger.error("[ShareLink] 复制失败",a),n.setState({shareError:"复制失败，请手动复制"})}};return u.jsxs(bt,{title:"分享链接",onClose:l,zIndex:60,children:[u.jsx("div",{style:{fontSize:12,color:"#5d636a",wordBreak:"break-all",background:"#f2f3f5",borderRadius:6,padding:8,maxHeight:80,overflow:"auto"},children:r||"生成中…"}),!e.onBuildUrl&&u.jsx("div",{style:{color:"#8a9099",fontSize:12,marginTop:8},children:"未配置 onBuildUrl：该链接不包含简历数据。如需携带数据，请由宿主生成脱敏短链（base64 不是加密）。"}),i&&u.jsx("div",{style:{color:"#cf4407",fontSize:12,marginTop:8},children:i}),u.jsx("div",{style:{display:"flex",gap:8,marginTop:12,justifyContent:"flex-end"},children:u.jsx("button",{type:"button",onClick:()=>void s(),style:A(!0),children:o?"已复制":"复制"})})]},"share-link-modal")}}}};gi.meta=fa;const sv="QrCode",av="二维码：把联系方式 / 链接编码为二维码，作角标常显或弹窗展示（qrcode 按需加载）。",uv="0.1.0",cv=["qr","renderOverlay","onMount","renderToolbar"],dv=[{name:"content",type:"string | () => string",default:"vCard(联系方式)",description:"二维码内容"},{name:"position",type:'"corner"|"avatar"|"modal"',default:"corner",description:"常显角标 / 弹窗"},{name:"size",type:"number",default:"96",description:"像素尺寸"}],fv="withResumePlugins(ResumeCore, [createQrCodePlugin({ content: () => 'https://cv.example.com/me' })])",pa={name:sv,description:av,since:uv,tags:cv,config:dv,example:fv},pv=(e,t)=>{const n=e.basics,r=t?"":((n==null?void 0:n.contacts)??[]).map(o=>`${o.type}:${o.value}`).join(`
`);return`BEGIN:VCARD
FN:${(n==null?void 0:n.name)??""}
TITLE:${(n==null?void 0:n.title)??""}
${r}
END:VCARD`},hi=(e={})=>{const t=e.size??96,n=e.position??"corner";let r=0;const o=l=>typeof e.content=="function"?e.content():typeof e.content=="string"?e.content:pv(l.data,!!l.state.privacyOn),i=l=>{const s=o(l),a=l.shared.get("qr:content"),c=l.shared.get("qr:pending");if(a===s||c===s)return;const d=++r;l.shared.set("qr:pending",s),l.shared.delete("qr:dataurl"),(async()=>{let f="fallback:"+s;try{const p=await On(()=>import("./browser-BXdiCFWD.js").then(S=>S.b),[],import.meta.url);f=await(p.default??p).toDataURL(s,{width:t,margin:1})}catch{}d===r&&(l.shared.set("qr:content",s),l.shared.delete("qr:pending"),l.shared.set("qr:dataurl",f),l.forceUpdate())})()};return{name:"qr-code",version:"0.1.0",description:pa.description,priority:46,config:{order:46},hooks:{renderToolbar:l=>n!=="modal"?null:(i(l),u.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":!!l.state.qrOpen,onClick:()=>l.setState({qrOpen:!l.state.qrOpen}),style:A(!!l.state.qrOpen),children:"二维码"},"qr-code")),renderOverlay:l=>{if(n!=="modal"){i(l);const d=l.shared.get("qr:dataurl");if(!d)return null;const f=!d.startsWith("fallback:");return u.jsx("div",{style:{position:"absolute",right:12,bottom:12,zIndex:40,padding:4,background:"#fff",borderRadius:8,boxShadow:"0 2px 10px rgba(0,0,0,0.15)"},children:f?u.jsx("img",{src:d,width:t,height:t,alt:"QR"}):u.jsxs("div",{style:{width:t,height:t,fontSize:9,padding:6,wordBreak:"break-all",color:"#1f2328"},children:[d.slice(8,48),"…"]})},"qr-corner")}if(!l.state.qrOpen)return null;i(l);const s=l.shared.get("qr:dataurl"),a=!!s&&!s.startsWith("fallback:"),c=()=>l.setState({qrOpen:!1});return u.jsx(bt,{title:"二维码",onClose:c,width:240,zIndex:59,children:u.jsxs("div",{style:{textAlign:"center"},children:[a?u.jsx("img",{src:s,width:t*2,height:t*2,alt:"QR"}):u.jsx("div",{style:{width:t*2,height:t*2,fontSize:12,padding:8,color:"#1f2328"},children:s==null?void 0:s.slice(8)}),u.jsx("div",{style:{color:"#1f2328",marginTop:8,fontSize:12},children:"扫码保存联系方式"})]})},"qr-modal")}}}};hi.meta=pa;const mv="Versioning",gv="版本管理：快照数据 / 模板 / 语言 / 隐私态，保存命名版本，可恢复 / 删除；localStorage 持久化（数据留在本地，请自行按用户隔离 storageKey）。",hv="0.1.0",yv=["version","renderToolbar","renderFooter","renderOverlay"],vv=[{name:"storage",type:'"local"|"memory"',default:"local",description:"持久化方式；memory 仅当前页面有效"},{name:"storageKey",type:"string",default:'"vane-resume-versions"',description:"存储键，多实例 / 多用户请分别指定"},{name:"maxVersions",type:"number",default:"20",description:"最大保留版本数"},{name:"onStorageError",type:"(error) => void",default:"-",description:"写入 / 读取失败回调"},{name:"onRestore",type:"(version) => void",default:"-",description:"恢复回调，宿主可回写受控数据"}],xv="withResumePlugins(ResumeCore, [createVersioningPlugin({ storageKey: 'resume-u1', onRestore: (v) => setData(v.data) })])",ma={name:mv,description:gv,since:hv,tags:yv,config:vv,example:xv},Sv="vane-resume-versions",ga=(e={})=>{const t=e.maxVersions??20,n=e.storageKey??Sv,r=e.storage??"local",o=new Map,i=()=>{var d;if(r==="memory")return o.get(n)??null;try{if(typeof localStorage<"u")return localStorage.getItem(n)}catch(f){(d=e.onStorageError)==null||d.call(e,f)}return null},l=d=>{var f;if(r==="memory")return o.set(n,d),!0;try{if(typeof localStorage<"u")return localStorage.setItem(n,d),!0}catch(p){(f=e.onStorageError)==null||f.call(e,p)}return!1},s=()=>{var f;const d=i();if(!d)return[];try{return JSON.parse(d)}catch(p){return(f=e.onStorageError)==null||f.call(e,p),[]}},a=d=>l(JSON.stringify(d)),c=d=>d?null:"本地存储写入失败，版本仅当前页面有效";return{name:"versioning",version:"0.1.0",description:ma.description,priority:38,config:{order:38},hooks:{onMount:d=>{if(!d.state.versions){const f=s();d.setState({versions:f,versionView:null,versionName:""})}},renderToolbar:d=>u.jsx("button",{type:"button",onClick:()=>d.setState({versionView:"save",versionName:`版本 ${(d.state.versions||[]).length+1}`}),style:A(!1),children:"保存版本"},"versioning-save"),renderFooter:d=>{const f=d.state.versions||[],p=f.find(x=>x.id===d.state.currentVersionId);return u.jsxs("button",{type:"button",onClick:()=>d.setState({versionView:"list"}),style:{background:"transparent",border:"none",padding:0,fontSize:12,color:"var(--vr-muted, #5d636a)",cursor:"pointer",textDecoration:"underline",font:"inherit"},children:["版本：",p?p.name:"未保存","（",f.length,"）"]},"versioning-foot")},renderOverlay:d=>{const f=d.state.versionView;if(!f)return null;const p=d.state.versions||[],x=()=>d.setState({versionView:null}),S=d.state.versionPersistError?u.jsx("div",{style:{color:"#cf4407",fontSize:12,marginTop:10},children:String(d.state.versionPersistError)}):null;if(f==="save"){const g=d.state.versionName||"",m=()=>{const h={id:`v${Date.now()}`,name:g||`版本 ${p.length+1}`,time:new Date().toISOString().slice(0,19).replace("T"," "),data:JSON.parse(JSON.stringify(d.data??{})),template:d.state.template,lang:d.state.lang,privacyOn:!!d.state.privacyOn},w=[...p,h].slice(-t),C=a(w);d.shared.set("versioning:list",w),d.setState({versions:w,currentVersionId:h.id,versionView:null,versionPersistError:c(C)}),d.bus.emit("resume:version:save",h)};return u.jsxs(bt,{title:"保存版本",onClose:x,children:[u.jsx("input",{value:g,placeholder:"版本名称",onChange:h=>d.setState({versionName:h.target.value}),style:{width:"100%",padding:8,borderRadius:6,border:"1px solid #d4d8de",marginBottom:12,boxSizing:"border-box"}}),u.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[u.jsx("button",{type:"button",onClick:m,style:A(!0),children:"保存"}),u.jsx("button",{type:"button",onClick:x,style:A(!1),children:"取消"})]}),S]},"versioning-modal")}const y=g=>{var h;const m={currentVersionId:g.id,versionView:null};g.template!==void 0&&(m.template=g.template),g.lang!==void 0&&(m.lang=g.lang),g.privacyOn!==void 0&&(m.privacyOn=g.privacyOn),d.setState(m),d.bus.emit("resume:data-replace",g),(h=e.onRestore)==null||h.call(e,g)},k=g=>{const m=p.filter(w=>w.id!==g),h=a(m);d.setState({versions:m,versionPersistError:c(h)}),d.bus.emit("resume:version:delete",g)};return u.jsxs(bt,{title:`历史版本（${p.length}）`,onClose:x,width:380,children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxHeight:240,overflow:"auto"},children:[p.length===0&&u.jsx("div",{style:{color:"#8a9099",fontSize:12},children:"暂无版本"}),p.map(g=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:600},children:g.name}),u.jsx("div",{style:{color:"#8a9099",fontSize:11},children:g.time})]}),u.jsx("button",{type:"button",onClick:()=>y(g),style:A(!0),children:"恢复"}),u.jsx("button",{type:"button",onClick:()=>k(g.id),style:A(!1),children:"删除"})]},g.id))]}),S]},"versioning-modal")}}}};ga.meta=ma;const wv="DeliverTrack",kv="投递追踪：记录投递去向与状态（投递 / 面试 / offer / 拒绝），页脚汇总，浮层时间线。",Pv="0.1.0",_v=["deliver","renderFooter","renderOverlay"],Cv=[{name:"initial",type:"Delivery[]",default:"[]",description:"初始投递记录"},{name:"onChange",type:"(list) => void",default:"-",description:"列表变化回调"}],Rv="withResumePlugins(ResumeCore, [createDeliverTrackPlugin({ initial: [{ company: '字节', status: '面试' }] })])",ha={name:wv,description:kv,since:Pv,tags:_v,config:Cv,example:Rv},io={投递:"#2f6feb",面试:"#e8590c",offer:"#1f9d55",拒绝:"#8a9099"},ya=(e={})=>{const t=e.initial??[],n="deliver:list",r=i=>i.shared.get(n)??i.state.deliveries??[],o=(i,l)=>{i.shared.set(n,l),i.setState({deliveries:l})};return{name:"deliver-track",version:"0.1.0",description:ha.description,priority:36,config:{order:36},hooks:{onMount:i=>(i.state.deliveries||i.setState({deliveries:t,deliverOpen:!1,deliverCompany:"",deliverStatus:"投递"}),i.shared.set(n,r(i)),i.bus.on("resume:deliver:add",l=>{var c;const a=[...r(i),{...l,id:l.id||`d${Date.now()}`,date:l.date||new Date().toISOString().slice(0,10)}];o(i,a),(c=e.onChange)==null||c.call(e,a)})),renderFooter:i=>{const s=(i.state.deliveries||[]).reduce((a,c)=>(a[c.status]=(a[c.status]||0)+1,a),{});return u.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-expanded":!!i.state.deliverOpen,onClick:()=>i.setState({deliverOpen:!i.state.deliverOpen}),style:{display:"inline-flex",gap:6,fontSize:12,cursor:"pointer",background:"transparent",border:"none",padding:0,font:"inherit"},children:[u.jsx("span",{style:{color:"var(--vr-muted, #5d636a)"},children:"投递："}),Object.keys(io).map(a=>u.jsxs("span",{style:{color:io[a],fontWeight:600},children:[a," ",s[a]||0]},a))]},"deliver-foot")},renderOverlay:i=>{if(!i.state.deliverOpen)return null;const l=i.state.deliveries||[],s=i.state.deliverCompany||"",a=i.state.deliverStatus||"投递",c=()=>i.setState({deliverOpen:!1}),d=()=>{var p;if(!s.trim())return;const f=[...l,{id:`d${Date.now()}`,company:s.trim(),status:a,date:new Date().toISOString().slice(0,10)}];o(i,f),i.setState({deliverCompany:""}),(p=e.onChange)==null||p.call(e,f)};return u.jsxs(bt,{title:"投递追踪",onClose:c,width:420,zIndex:56,align:"end",children:[u.jsxs("div",{style:{display:"flex",gap:6,marginBottom:10},children:[u.jsx("input",{value:s,placeholder:"公司 / 岗位",onChange:f=>i.setState({deliverCompany:f.target.value}),style:{flex:1,padding:6,borderRadius:6,border:"1px solid #d4d8de"}}),u.jsx("select",{value:a,onChange:f=>i.setState({deliverStatus:f.target.value}),style:{padding:6,borderRadius:6,border:"1px solid #d4d8de"},children:Object.keys(io).map(f=>u.jsx("option",{value:f,children:f},f))}),u.jsx("button",{type:"button",onClick:d,style:A(!0),children:"添加"})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,maxHeight:180,overflow:"auto"},children:[l.length===0&&u.jsx("div",{style:{color:"#8a9099",fontSize:12},children:"暂无投递记录"}),l.map(f=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,borderBottom:"1px solid #eee",paddingBottom:6},children:[u.jsxs("span",{style:{flex:1},children:[f.company,f.role?` · ${f.role}`:""]}),u.jsx("span",{style:{color:io[f.status],fontWeight:600},children:f.status}),u.jsx("span",{style:{color:"#8a9099",fontSize:11},children:f.date})]},f.id))]})]},"deliver-overlay")}}}};ya.meta=ha;const jv="AttachmentPreview",Ev="附件预览：列出附件卡片（PDF / 图片 / 链接），点击在灯箱中预览。",bv="0.1.0",Tv=["attachment","renderAttachments","renderOverlay","transformData"],Dv=[{name:"items",type:"AttachmentItem[]",default:"[]",description:"预置附件（合并进 data.attachments）"}],Ov="withResumePlugins(ResumeCore, [createAttachmentPreviewPlugin({ items: [{ name: '作品集', kind: 'pdf', url: 'https://x.com/p.pdf' }] })])",va={name:jv,description:Ev,since:bv,tags:Tv,config:Dv,example:Ov},Lr=(e={})=>{const t=e.items??[];return{name:"attachment-preview",version:"0.1.0",description:va.description,priority:30,config:{order:30},hooks:{transformData:(n,r)=>{if(!t.length)return r;const o=Rr(r);return o.attachments=[...o.attachments??[],...t],o},renderAttachments:n=>{var o;const r=((o=n.data)==null?void 0:o.attachments)??[];return r.length?u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10},children:r.map((i,l)=>u.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-expanded":n.state.previewItem===(i.id??l),onClick:()=>n.setState({previewItem:i.id??l}),style:{display:"flex",alignItems:"center",gap:8,background:"#f2f3f5",color:"#1f2328",border:"1px solid #d4d8de",borderRadius:8,padding:"8px 12px",cursor:"pointer",fontSize:13,textAlign:"left"},children:[u.jsx("span",{style:{color:"var(--vr-accent, #2f6feb)",textTransform:"uppercase",fontSize:11,fontWeight:700},children:i.kind}),u.jsx("span",{children:i.name})]},i.id??l))},"attachment-grid"):null},renderOverlay:n=>{var l,s;const r=n.state.previewItem;if(r==null)return null;const o=(s=(l=n.data)==null?void 0:l.attachments)==null?void 0:s.find((a,c)=>(a.id??c)===r);if(!o)return null;const i=()=>n.setState({previewItem:null});return u.jsx(bt,{title:o.name,onClose:i,width:560,zIndex:58,children:u.jsx("div",{style:{flex:1,overflow:"auto",minHeight:240},children:o.kind==="image"?u.jsx("img",{src:o.url,alt:o.name,style:{maxWidth:"100%",borderRadius:6}}):o.kind==="pdf"?u.jsx("iframe",{src:jr(o.url),title:o.name,sandbox:"allow-scripts",referrerPolicy:"no-referrer",loading:"lazy",style:{width:"100%",height:360,border:"1px solid #eee",borderRadius:6}}):u.jsx("a",{href:jr(o.url),target:"_blank",rel:"noreferrer",style:{color:"var(--vr-accent, #2f6feb)"},children:"打开链接 ↗"})})},"attachment-lightbox")}}}};Lr.meta=va;const zv="PrintOptimize",$v="打印优化：注入 @media print 样式，分页不断行、隐藏工具条与遮罩、按 A4 出页，与 ExportPdf 协同。",Mv="0.1.0",Lv=["print","onMount"],Nv=[{name:"pageSize",type:'"A4"|"A3"|"letter"',default:"A4",description:"纸张尺寸"},{name:"margin",type:"string",default:"14mm",description:"页边距"},{name:"hideOnPrint",type:"string[]",default:"工具条等",description:"打印时隐藏的选择器"}],Iv="withResumePlugins(ResumeCore, [createPrintOptimizePlugin(), createExportPdfPlugin({ method: 'print' })])",xa={name:zv,description:$v,since:Mv,tags:Lv,config:Nv,example:Iv},Sa=(e={})=>{const t=e.pageSize??"A4",n=e.margin??"14mm",r=(e.hideOnPrint??["[data-vr-no-print]",".vr-toolbar","[data-vr-overlay]"]).join(", ");return{name:"print-optimize",version:"0.1.0",description:xa.description,priority:22,config:{order:22},hooks:{onMount:o=>{var a,c;const i=(c=(a=o.refs).getContainer)==null?void 0:c.call(a);if(!i||typeof document>"u")return;const l=document.createElement("style");l.setAttribute("media","print"),l.dataset.vaneResumePrint="1",l.textContent=`
          ${r} { display: none !important; }
          .vr-root { box-shadow: none !important; max-width: none !important; margin: 0 !important; }
          .vr-section { page-break-inside: avoid; }
          @page { size: ${t}; margin: ${n}; }
        `,i.appendChild(l);const s=d=>{(d&&typeof d=="object"?d.method:void 0)==="print"&&typeof window<"u"&&window.print()};return o.bus.on("resume:export",s),()=>{l.remove(),o.bus.off("resume:export",s)}}}}};Sa.meta=xa;const Av="SectionReorder",Uv="板块重排：调整基本信息 / 工作 / 教育 / 技能等板块顺序，顺序经 ctx.state.sectionOrder 驱动核心渲染。",Fv="0.1.0",Bv=["layout","renderToolbar","renderOverlay"],Vv=[{name:"sections",type:"SectionKey[]",default:"全板块",description:"可重排的板块集合"}],Wv="withResumePlugins(ResumeCore, [createSectionReorderPlugin()])",wa={name:Av,description:Uv,since:Fv,tags:Bv,config:Vv,example:Wv},el={basics:"基本信息",work:"工作经历",education:"教育背景",skills:"专业技能",projects:"项目经历",extra:"荣誉/语言/证书",attachments:"附件"},yi=(e={})=>{const t=e.sections??Wo;return{name:"section-reorder",version:"0.1.0",description:wa.description,priority:24,config:{order:24},hooks:{onMount:n=>{n.state.sectionOrder||n.setState({sectionOrder:[...t],reorderMode:!1})},renderToolbar:n=>u.jsx("button",{type:"button",onClick:()=>n.setState({reorderMode:!n.state.reorderMode}),style:A(!!n.state.reorderMode),children:"重排板块"},"section-reorder"),renderOverlay:n=>{if(!n.state.reorderMode)return null;const r=n.state.sectionOrder??[...t],o=(l,s)=>{const a=l+s;if(a<0||a>=r.length)return;const c=[...r];[c[l],c[a]]=[c[a],c[l]],n.setState({sectionOrder:c})},i=()=>n.setState({reorderMode:!1});return u.jsx(bt,{title:"上移 / 下移排序板块",onClose:i,width:320,zIndex:57,children:u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:r.map((l,s)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,border:"1px solid #eee",borderRadius:6,padding:"4px 8px"},children:[u.jsxs("span",{style:{flex:1},children:[s+1,". ",el[l]]}),u.jsx("button",{type:"button","aria-label":`上移 ${el[l]}`,onClick:()=>o(s,-1),style:A(!1),children:"↑"}),u.jsx("button",{type:"button","aria-label":`下移 ${el[l]}`,onClick:()=>o(s,1),style:A(!1),children:"↓"})]},l))})},"reorder-panel")}}}};yi.meta=wa;const Hv="TimelineView",Kv="时间轴可视化：把工作 / 教育经历从列表切换为竖向时间轴（圆点 + 连线 + 日期）。",Qv="0.1.0",Yv=["view","renderWork","renderEducation","renderToolbar"],Jv=[{name:"sections",type:'("work"|"education")[]',default:"两者",description:"启用时间轴的板块"},{name:"mode",type:'"list"|"timeline"',default:"list",description:"初始视图"}],qv="withResumePlugins(ResumeCore, [createTimelineViewPlugin()])",ka={name:Hv,description:Kv,since:Qv,tags:Yv,config:Jv,example:qv};function Zu({items:e,kind:t,kw:n}){return e.length?u.jsxs("div",{style:{position:"relative",paddingLeft:20},children:[u.jsx("div",{style:{position:"absolute",left:5,top:4,bottom:4,width:2,background:"var(--vr-line, #e3e6ea)"}}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:e.map((r,o)=>{var i;return u.jsxs("div",{style:{position:"relative"},children:[u.jsx("span",{style:{position:"absolute",left:-19,top:4,width:10,height:10,borderRadius:"50%",background:"var(--vr-accent, #2f6feb)",boxShadow:"0 0 0 3px #fff"}}),u.jsx("div",{style:{fontWeight:700,color:"var(--vr-text, #1f2328)"},children:Ft(t==="work"?r.company:r.school,n)}),u.jsx("div",{style:{color:"var(--vr-muted, #5d636a)",fontSize:13},children:t==="work"?u.jsxs(u.Fragment,{children:[r.role?u.jsxs(u.Fragment,{children:[Ft(r.role,n)," "]}):null,`${r.start} — ${r.end}`]}):u.jsxs(u.Fragment,{children:[Ft(r.degree,n),r.major?u.jsxs(u.Fragment,{children:[" · ",Ft(r.major,n)]}):null,` ${r.start} — ${r.end}`]})}),t==="work"&&((i=r.highlights)==null?void 0:i.length)>0&&u.jsx("ul",{style:{margin:"4px 0 0",paddingLeft:18,color:"var(--vr-muted, #5d636a)"},children:r.highlights.map((l,s)=>u.jsx("li",{children:Ft(l,n)},s))})]},r.id??o)})})]}):null}const vi=(e={})=>{const t=e.sections??["work","education"],n=e.mode??"list";return{name:"timeline-view",version:"0.1.0",description:ka.description,priority:22,config:{order:22},hooks:{onMount:r=>{r.state.timelineMode===void 0&&r.setState({timelineMode:n})},renderToolbar:r=>{const i=(r.state.timelineMode??n)==="timeline";return u.jsx("button",{type:"button",onClick:()=>r.setState({timelineMode:i?"list":"timeline"}),style:A(i),children:"时间轴"},"timeline-view")},renderWork:r=>{var i;if(r.state.timelineMode!=="timeline"||!t.includes("work"))return null;const o=r.state.highlightKeywords??[];return u.jsx(Zu,{items:((i=r.data)==null?void 0:i.work)??[],kind:"work",kw:o})},renderEducation:r=>{var i;if(r.state.timelineMode!=="timeline"||!t.includes("education"))return null;const o=r.state.highlightKeywords??[];return u.jsx(Zu,{items:((i=r.data)==null?void 0:i.education)??[],kind:"edu",kw:o})}}}};vi.meta=ka;const Gv="KeywordHighlight",Xv="关键词高亮：输入 JD 关键词，核心文本中命中词以 <mark> 高亮，辅助定制与 ATS 自检。纯 state 驱动，不抢槽。",Zv="0.1.0",e0=["highlight","state","renderToolbar"],t0=[{name:"keywords",type:"string[] | ()=>string[]",default:"[]",description:"初始高亮关键词"},{name:"color",type:"string",default:"var(--vr-accent)",description:"高亮标记 / 芯片描边色"}],n0="withResumePlugins(ResumeCore, [createKeywordHighlightPlugin({ keywords: ['React','性能优化'] })])",Pa={name:Gv,description:Xv,since:Zv,tags:e0,config:t0,example:n0},Nr=(e={})=>{const t=typeof e.keywords=="function"?e.keywords():e.keywords??[],n=e.color??"var(--vr-accent, #2f6feb)";return{name:"keyword-highlight",version:"0.1.0",description:Pa.description,priority:20,config:{order:20},hooks:{onMount:r=>{r.state.highlightKeywords===void 0&&r.setState({highlightKeywords:[...t],kwDraft:""})},renderToolbar:r=>{const o=r.state.highlightKeywords??[],i=r.state.kwDraft??"",l=()=>{const s=i.trim();s&&(o.includes(s)||r.setState({highlightKeywords:[...o,s]}),r.setState({kwDraft:""}))};return u.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center",flexWrap:"wrap"},children:[u.jsx("span",{style:{fontSize:12,color:"var(--vr-faint, #8a9099)"},children:"高亮"}),u.jsx("input",{value:i,placeholder:"关键词","aria-label":"高亮关键词",onChange:s=>r.setState({kwDraft:s.target.value}),onKeyDown:s=>{s.key==="Enter"&&l()},style:{width:92,padding:"3px 6px",fontSize:12,borderRadius:6,border:"1px solid #d4d8de"}}),u.jsx("button",{type:"button",onClick:l,style:A(!1),children:"添加"}),o.map(s=>u.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:2,background:"var(--vr-accent-wash, #eef3fe)",color:n,border:"1px solid var(--vr-line, #e3e6ea)",borderRadius:12,padding:"1px 4px 1px 8px",fontSize:12},children:[s,u.jsx("button",{type:"button","aria-label":`移除 ${s}`,onClick:()=>r.setState({highlightKeywords:o.filter(a=>a!==s)}),style:{border:"none",background:"transparent",color:n,cursor:"pointer",fontSize:13,lineHeight:1,padding:0},children:"×"})]},s))]},"keyword-highlight")}}}};Nr.meta=Pa;const r0="AtsScore",o0="ATS 兼容性评分：扫描常见雷区（缺姓名/联系方式/量化亮点/命中 JD 关键词等），输出 0-100 评分与改进建议。纯分析不改数据。",i0="0.1.0",l0=["ats","transformData","renderFooter","renderOverlay"],s0=[{name:"jobKeywords",type:"string[]",default:"[]",description:"JD 关键词，命中加分"},{name:"rules",type:"AtsRule[]",default:"内置 8 条",description:"可扩展评分规则"}],a0="withResumePlugins(ResumeCore, [createAtsScorePlugin({ jobKeywords: ['Go','分布式'] })])",_a={name:r0,description:o0,since:i0,tags:l0,config:s0,example:a0},u0=[{key:"name",label:"含姓名",weight:10,test:e=>{var t;return!!((t=e.basics)!=null&&t.name)}},{key:"contact",label:"含联系方式",weight:10,test:e=>{var t,n;return(((n=(t=e.basics)==null?void 0:t.contacts)==null?void 0:n.length)??0)>0}},{key:"work",label:"有工作经历",weight:15,test:e=>{var t;return(((t=e.work)==null?void 0:t.length)??0)>0}},{key:"metric",label:"工作量化亮点",weight:15,test:e=>(e.work??[]).some(t=>(t.highlights??[]).some(n=>/\d/.test(n)))},{key:"edu",label:"有教育背景",weight:10,test:e=>{var t;return(((t=e.education)==null?void 0:t.length)??0)>0}},{key:"skill",label:"有技能标签",weight:10,test:e=>(e.skills??[]).some(t=>{var n;return(((n=t.items)==null?void 0:n.length)??0)>0})},{key:"jd",label:"命中 JD 关键词",weight:20,test:(e,t)=>t.length>0&&c0(e).some(n=>t.some(r=>n.toLowerCase().includes(r.toLowerCase())))},{key:"length",label:"篇幅适中",weight:10,test:e=>(e.work??[]).reduce((n,r)=>{var o;return n+(((o=r.highlights)==null?void 0:o.length)??0)},0)+(e.projects??[]).length<=40}];function c0(e){const t=[],n=e.basics;return n&&(t.push(n.name,n.title,n.summary??""),(n.contacts??[]).forEach(r=>t.push(r.value))),(e.work??[]).forEach(r=>{t.push(r.company,r.role,...r.highlights??[])}),(e.education??[]).forEach(r=>t.push(r.school,r.degree,r.major??"")),(e.skills??[]).forEach(r=>t.push(r.category,...r.items??[])),(e.projects??[]).forEach(r=>t.push(r.name,r.desc,r.role??"")),t.filter(Boolean)}function ec(e,t){const n=u0.map(o=>({label:o.label,weight:o.weight,ok:o.test(e,t)}));return{score:n.reduce((o,i)=>o+(i.ok?i.weight:0),0),items:n}}const xi=(e={})=>{const t=e.jobKeywords??[],n=r=>r.shared.get("ats:report")??ec(r.data,t);return{name:"ats-score",version:"0.1.0",description:_a.description,priority:38,config:{order:38},dependencies:["privacy-mask"],hooks:{transformData:(r,o)=>(r.shared.set("ats:report",ec(o,t)),o),renderFooter:r=>{const o=n(r),i=o.score>=80?"#1f9d55":o.score>=60?"#e8590c":"#cf4407",l=!!r.state.atsOpen;return u.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-expanded":l,onClick:()=>r.setState({atsOpen:!l}),style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,cursor:"pointer",color:"var(--vr-muted, #5d636a)",background:"transparent",border:"none",padding:0,font:"inherit"},children:[u.jsx("span",{children:"ATS"}),u.jsx("span",{style:{fontWeight:700,color:i},children:o.score})]},"ats-score")},renderOverlay:r=>{if(!r.state.atsOpen)return null;const o=n(r),i=()=>r.setState({atsOpen:!1});return u.jsx(bt,{title:`ATS 兼容性评分 ${o.score}`,onClose:i,width:380,zIndex:59,children:u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:o.items.map(l=>u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13},children:[u.jsxs("span",{style:{color:l.ok?"#1f9d55":"#cf4407"},children:[l.ok?"✓":"✗"," ",l.label]}),u.jsxs("span",{style:{color:"#8a9099"},children:[l.weight," 分"]})]}),u.jsx("div",{style:{height:6,background:"#f2f3f5",borderRadius:3,marginTop:4,overflow:"hidden"},children:u.jsx("div",{style:{width:`${l.ok?100:0}%`,height:"100%",background:l.ok?"#1f9d55":"#cf4407"}})})]},l.label))})},"ats-overlay")}}}};xi.meta=_a;const d0="StatSummary",f0="简历数据概览：在基本信息区追加工作段数 / 技能数 / 项目数 / 最高学历等统计徽章（装饰累积槽 renderBasics）。",p0="0.1.0",m0=["stats","renderBasics"],g0=[{name:"items",type:"StatKey[]",default:"四项全开",description:"展示指标：expYears | skillCount | projectCount | eduLevel"}],h0="withResumePlugins(ResumeCore, [createStatSummaryPlugin({ items: ['expYears','skillCount'] })])",Ca={name:d0,description:f0,since:p0,tags:m0,config:g0,example:h0},y0={博士:5,硕士:4,研究生:4,本科:3,学士:3,大专:2,专科:2,高中:1};function v0(e){const t=(e.work??[]).length,n=(e.skills??[]).reduce((l,s)=>{var a;return l+(((a=s.items)==null?void 0:a.length)??0)},0),r=(e.projects??[]).length;let o="—",i=0;return(e.education??[]).forEach(l=>{const s=y0[l.degree]??0;s>i&&(i=s,o=l.degree)}),{exp:t,skills:n,projects:r,edu:o}}const Si=(e={})=>{const t=e.items??["expYears","skillCount","projectCount","eduLevel"],n={expYears:"工作",skillCount:"技能",projectCount:"项目",eduLevel:"最高学历"};return{name:"stat-summary",version:"0.1.0",description:Ca.description,priority:32,config:{order:32},hooks:{renderBasics:r=>{const o=v0(r.data),i=l=>{switch(l){case"expYears":return`${o.exp} 段`;case"skillCount":return`${o.skills} 项`;case"projectCount":return`${o.projects} 个`;case"eduLevel":return o.edu;default:return""}};return u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:10},children:t.map(l=>u.jsxs("div",{style:{background:"var(--vr-accent-wash, #eef3fe)",border:"1px solid var(--vr-line, #e3e6ea)",borderRadius:8,padding:"4px 10px",textAlign:"center"},children:[u.jsx("div",{style:{fontSize:16,fontWeight:800,color:"var(--vr-accent, #2f6feb)"},children:i(l)}),u.jsx("div",{style:{fontSize:11,color:"var(--vr-muted, #5d636a)"},children:n[l]})]},l))},"stat-summary")}}}};Si.meta=Ca;const x0="SectionCollapse",S0="板块折叠：为每个板块头部加折叠开关，折叠态隐藏正文。纯 state 驱动（collapseMode/collapsed），不抢槽，可与 TimelineView 并存。",w0="0.1.0",k0=["collapse","state","renderToolbar"],P0=[{name:"defaultOn",type:"boolean",default:"false",description:"初始是否开启折叠模式"},{name:"defaultCollapsed",type:"SectionKey[]",default:"[]",description:"初始折叠的板块"}],_0="withResumePlugins(ResumeCore, [createSectionCollapsePlugin({ defaultOn: true })])",Ra={name:x0,description:S0,since:w0,tags:k0,config:P0,example:_0},wi=(e={})=>({name:"section-collapse",version:"0.1.0",description:Ra.description,priority:26,config:{order:26},hooks:{onMount:t=>{t.state.collapseMode===void 0&&t.setState({collapseMode:e.defaultOn??!1,collapsed:e.defaultCollapsed??[]})},renderToolbar:t=>{const n=!!t.state.collapseMode,r=o=>{const i=t.state.sectionOrder??Wo;t.setState({collapsed:o?[...i]:[]})};return u.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[u.jsx("button",{type:"button",onClick:()=>t.setState({collapseMode:!n}),style:A(n),children:n?"折叠：开":"折叠：关"}),n&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:()=>r(!0),style:A(!1),children:"全收"}),u.jsx("button",{type:"button",onClick:()=>r(!1),style:A(!1),children:"全展"})]})]},"section-collapse")}}});wi.meta=Ra;const C0="SignatureStamp",R0="电子落款：文末加签名（姓名/图片）+ 签署日期；可选 CSS 圆形印章（renderOverlay 角标）。",j0="0.1.0",E0=["signature","stamp","renderFooter","renderOverlay"],b0=[{name:"name",type:"string",default:"basics.name",description:"签名姓名"},{name:"image",type:"string",default:"-",description:"手写签名图片 URL"},{name:"date",type:"()=>string",default:"今天",description:"签署日期"},{name:"stamp",type:"'none'|'seal'",default:"none",description:"是否绘制印章"},{name:"stampText",type:"string",default:"已确认",description:"印章文字"}],T0="withResumePlugins(ResumeCore, [createSignatureStampPlugin({ name: '张三', stamp: 'seal' })])",ja={name:C0,description:R0,since:j0,tags:E0,config:b0,example:T0},ki=(e={})=>{const t=e.name,n=e.image,r=e.stamp??"none",o=e.stampText??"已确认",i=()=>e.date?e.date():new Date().toISOString().slice(0,10);return{name:"signature-stamp",version:"0.1.0",description:ja.description,priority:34,config:{order:34},hooks:{onMount:l=>{l.state.signatureOn===void 0&&l.setState({signatureOn:!0})},renderToolbar:l=>u.jsx("button",{type:"button",onClick:()=>l.setState({signatureOn:!l.state.signatureOn}),style:A(!!l.state.signatureOn),children:l.state.signatureOn?"落款：开":"落款：关"},"signature-stamp"),renderFooter:l=>{var d;if(!l.state.signatureOn)return null;const s=(d=l.data)==null?void 0:d.basics,a=t??(s==null?void 0:s.name)??"本人",c=i();return u.jsxs("span",{style:{display:"inline-flex",flexDirection:"column",alignItems:"flex-end",gap:2,fontSize:12,color:"var(--vr-muted, #5d636a)"},children:[n?u.jsx("img",{src:n,alt:"签名",style:{height:32,objectFit:"contain"}}):u.jsx("span",{style:{fontFamily:"'Segoe Script','Brush Script MT',cursive",fontSize:18,color:"var(--vr-text, #1f2328)"},children:a}),u.jsxs("span",{children:["签署日期：",c]})]},"signature")},renderOverlay:l=>!l.state.signatureOn||r!=="seal"?null:u.jsxs("div",{style:{position:"absolute",left:16,bottom:16,zIndex:41,pointerEvents:"none",width:88,height:88,borderRadius:"50%",border:"3px solid #cf4407",color:"#cf4407",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transform:"rotate(-12deg)"},children:[u.jsx("div",{style:{fontSize:11,borderBottom:"1px solid #cf4407",paddingBottom:2,marginBottom:2},children:"RESUME"}),u.jsx("div",{style:{fontSize:13,fontWeight:800,letterSpacing:1},children:o}),u.jsx("div",{style:{fontSize:10},children:i()})]},"stamp-seal")}}};ki.meta=ja;const tl=(e,t="")=>e===void 0?t:String(e),D0={TemplateSwitchPlugin:()=>di({defaultId:"modern"}),ThemeCustomizePlugin:()=>Mr({presets:[{id:"green",label:"绿",vars:{"--vr-accent":"#1f9d55"}},{id:"orange",label:"橙",vars:{"--vr-accent":"#e8590c"}},{id:"blue",label:"蓝",vars:{"--vr-accent":"#2f6feb"}},{id:"mono",label:"墨",vars:{"--vr-accent":"#1f2328"}}]}),SectionReorderPlugin:()=>yi({sections:["basics","skills","work","education","projects","extra","attachments"]}),SectionCollapsePlugin:()=>wi({}),TimelineViewPlugin:()=>vi({}),StatSummaryPlugin:()=>Si({}),MultiLangPlugin:()=>fi({locales:[{code:"zh",label:"中"},{code:"en",label:"EN"}],translations:{en:{basics:{name:"Qingyang Lin",title:"Researcher",contacts:[],summary:"PhD candidate in Computer Science."}}}}),PrivacyMaskPlugin:()=>pi({}),ContactDesensitizePlugin:()=>mi({}),AtsScorePlugin:()=>xi({jobKeywords:["React","TypeScript","Node"]}),VersioningPlugin:()=>ga({}),DeliverTrackPlugin:()=>ya({}),KeywordHighlightPlugin:e=>{const t=tl(e.kw,'["React","TypeScript"]');let n=["React","TypeScript"];try{const r=t.trim().startsWith("[")?JSON.parse(t):t.split(",").map(o=>o.trim()).filter(Boolean);Array.isArray(r)&&(n=r)}catch{}return Nr({keywords:n,color:tl(e.color,"#ffd34e")})},SignatureStampPlugin:e=>ki({stamp:tl(e.stamp,"seal")==="none"?void 0:"seal"}),QrCodePlugin:()=>hi({content:"https://vane.dev/r/qingyang"}),ShareLinkPlugin:()=>gi({onBuildUrl:e=>{var t;return"https://vane.dev/r/"+encodeURIComponent(((t=e.basics)==null?void 0:t.name)??"resume")}}),ExportPdfPlugin:()=>da({}),PrintOptimizePlugin:()=>Sa({}),AttachmentPreviewPlugin:()=>Lr({}),AiPolishPlugin:()=>sa({polish:async e=>{const t=(e||"").trim();if(!t)return e;const n=t.replace(/负责/g,"主导").replace(/参与/g,"牵头").replace(/开发/g,"设计开发").replace(/协助/g,"协同");return n.includes("✦")?n:`${n} ✦`}})};function ee(e){const t=D0[e];if(!t)throw new Error(`未注册的示例插件：${e}`);return function({cfg:r}){const o=v.useMemo(()=>$r(nn,[t(r)]),[JSON.stringify(r)]);return u.jsx(o,{data:rn,containerStyle:{maxWidth:560,margin:"0 auto"}})}}const O0={slug:"template-switch",title:"模板切换",group:"plugin",plugin:"TemplateSwitchPlugin",intro:"在经典 / 现代 / 紧凑 / 学术等版式间切换，经 CSS 变量驱动整体观感。",why:"同一份数据要适配不同招聘渠道的审美，模板切换比改组件快得多。",plugs:[{fn:"createTemplateSwitchPlugin",cfg:'defaultId: "modern"',why:"默认落到「现代」版式（紫调、大圆角），一眼区别于裸 Core 的经典蓝。"}],props:[]},z0=ee("TemplateSwitchPlugin"),$0=Object.freeze(Object.defineProperty({__proto__:null,default:z0,meta:O0},Symbol.toStringTag,{value:"Module"})),M0={slug:"theme-customize",title:"主题配色",group:"plugin",plugin:"ThemeCustomizePlugin",intro:"预设强调色 + 自定义取色器，经 CSS 变量注入容器。",why:"招聘站 / 个人主页有品牌色，主题定制让简历和它的承载页长得像一家人。",plugs:[{fn:"createThemeCustomizePlugin",cfg:'presets: [{ id: "green", label: "绿", vars: { "--vr-accent": "#1f9d55" } }, { id: "orange", label: "橙", vars: { "--vr-accent": "#e8590c" } }]',why:"把非蓝配色排到第一，挂载即生效（默认蓝会跟裸 Core 看着一样）。"}],props:[]},L0=ee("ThemeCustomizePlugin"),N0=Object.freeze(Object.defineProperty({__proto__:null,default:L0,meta:M0},Symbol.toStringTag,{value:"Module"})),I0={slug:"section-reorder",title:"板块重排",group:"plugin",plugin:"SectionReorderPlugin",intro:"调整基本信息 / 工作 / 教育 / 技能等板块顺序，顺序经 ctx.state 驱动核心渲染。",why:"技术岗把「工作」提前、学术岗把「教育」提前，叙事顺序影响第一印象。",plugs:[{fn:"createSectionReorderPlugin",cfg:'sections: ["basics", "skills", "work", "education", "projects", "extra", "attachments"]',why:"把「技能」提到「工作」之前，默认即生效，不用点按钮也能看出板块被重排。"}],props:[]},A0=ee("SectionReorderPlugin"),U0=Object.freeze(Object.defineProperty({__proto__:null,default:A0,meta:I0},Symbol.toStringTag,{value:"Module"})),F0={slug:"section-collapse",title:"板块折叠",group:"plugin",plugin:"SectionCollapsePlugin",intro:"为每个板块头部加折叠开关，折叠态隐藏正文；纯 state 驱动，可与时间轴并存。",why:"长简历先给面试官一个大纲，感兴趣再展开，避免一屏全是字。",plugs:[{fn:"createSectionCollapsePlugin",cfg:"{}",why:"读写的 collapseMode / collapsed 存在 ctx.state。"}],props:[]},B0=ee("SectionCollapsePlugin"),V0=Object.freeze(Object.defineProperty({__proto__:null,default:B0,meta:F0},Symbol.toStringTag,{value:"Module"})),W0={slug:"timeline-view",title:"时间轴视图",group:"plugin",plugin:"TimelineViewPlugin",intro:"把工作 / 教育经历从列表切换为竖向时间轴（圆点 + 连线 + 日期）。",why:"经历多、跨度长时，时间轴比平铺列表更能体现成长曲线。",plugs:[{fn:"createTimelineViewPlugin",cfg:"{}",why:"覆盖 renderWork / renderEducation 为时间轴渲染。"}],props:[]},H0=ee("TimelineViewPlugin"),K0=Object.freeze(Object.defineProperty({__proto__:null,default:H0,meta:W0},Symbol.toStringTag,{value:"Module"})),Q0={slug:"stat-summary",title:"数据概览",group:"plugin",plugin:"StatSummaryPlugin",intro:"在基本信息区追加工作段数 / 技能数 / 项目数 / 最高学历等统计徽章。",why:"面试官扫一眼就能抓住「几年经验、几个项目」，量化亮点前置。",plugs:[{fn:"createStatSummaryPlugin",cfg:"{}",why:"装饰累积槽 renderBasics，追加统计徽章。"}],props:[]},Y0=ee("StatSummaryPlugin"),J0=Object.freeze(Object.defineProperty({__proto__:null,default:Y0,meta:Q0},Symbol.toStringTag,{value:"Module"})),q0={slug:"multi-lang",title:"多语言",group:"plugin",plugin:"MultiLangPlugin",intro:"在预设语言间切换，整体翻译文本字段；缺失字段保留原文降级。",why:"投外企 / 海外岗需要中英双语，逐字段手写两套成本太高。",plugs:[{fn:"createMultiLangPlugin",cfg:"{}",why:"经 transformData 注入翻译后的文本字段。"}],props:[]},G0=ee("MultiLangPlugin"),X0=Object.freeze(Object.defineProperty({__proto__:null,default:G0,meta:q0},Symbol.toStringTag,{value:"Module"})),Z0={slug:"privacy-mask",title:"隐私遮罩",group:"plugin",plugin:"PrivacyMaskPlugin",intro:"一键进入隐私模式：整页毛玻璃视觉遮挡 + 敏感字段数据级隐藏（默认为概述与联系方式）。毛玻璃不防复制，敏感信息请依赖字段隐藏 / 脱敏。",why:"简历里手机号真金白银，发给陌生人前先一键打码最稳妥。",plugs:[{fn:"createPrivacyMaskPlugin",cfg:"{}",why:"遮罩经 overlay 渲染，优先级靠后确保盖在最上。"}],props:[]},ex=ee("PrivacyMaskPlugin"),tx=Object.freeze(Object.defineProperty({__proto__:null,default:ex,meta:Z0},Symbol.toStringTag,{value:"Module"})),nx={slug:"contact-desensitize",title:"联系脱敏",group:"plugin",plugin:"ContactDesensitizePlugin",intro:"对电话 / 邮箱 / 地址做可逆脱敏（138****1234），公开分享时保护隐私。",why:"脱敏是可逆的：自己看完整版，发出去的是打码版，收回权限即可还原。",plugs:[{fn:"createContactDesensitizePlugin",cfg:"{}",why:"在隐私遮罩之前改写 contacts，遮蔽已脱敏内容。"}],props:[]},rx=ee("ContactDesensitizePlugin"),ox=Object.freeze(Object.defineProperty({__proto__:null,default:rx,meta:nx},Symbol.toStringTag,{value:"Module"})),ix={slug:"ats-score",title:"ATS 评分",group:"plugin",plugin:"AtsScorePlugin",intro:"扫描常见雷区（缺姓名 / 联系方式 / 量化亮点 / 命中 JD 关键词等），输出 0-100 评分与改进建议。",why:"很多公司先用 ATS 机筛，投递前自检一遍能少踩坑。",plugs:[{fn:"createAtsScorePlugin",cfg:'{ jobKeywords: ["React", "TypeScript", "Node"] }',why:"纯分析不改数据，把报告写入 ctx.shared，浮层逐条列出建议。"}],props:[],note:"ATS 评分依赖数据管道末态，故排在脱敏 / 多语言之后执行。"},lx=ee("AtsScorePlugin"),sx=Object.freeze(Object.defineProperty({__proto__:null,default:lx,meta:ix},Symbol.toStringTag,{value:"Module"})),ax={slug:"keyword-highlight",title:"关键词高亮",group:"plugin",plugin:"KeywordHighlightPlugin",intro:"输入 JD 关键词，核心文本命中的词以 <mark> 高亮，配合 ATS 自检一目了然。纯 state 驱动，不抢槽。",why:"投递前把 JD 关键词在简历里点亮，人读机读都更顺眼。",plugs:[{fn:"createKeywordHighlightPlugin",cfg:'keywords: {{kw}}, color: "{{color}}"',why:"命中词用 <mark> 包裹，颜色由 color 控制，可在工具条实时增减关键词。"}],controls:[{key:"kw",label:"关键词",kind:"select",init:'["React","TypeScript"]',options:[{label:"React, TS",value:'["React","TypeScript"]'},{label:"Node, 性能",value:'["Node","性能优化"]'},{label:"空",value:"[]"}],hint:"拖到「空」可看未命中态"},{key:"color",label:"高亮色",kind:"select",init:"#ffd34e",options:[{label:"黄",value:"#ffd34e"},{label:"青",value:"#8be0ff"},{label:"红",value:"#ff9d9d"}]}],props:[]},ux=ee("KeywordHighlightPlugin"),cx=Object.freeze(Object.defineProperty({__proto__:null,default:ux,meta:ax},Symbol.toStringTag,{value:"Module"})),dx={slug:"signature-stamp",title:"电子落款",group:"plugin",plugin:"SignatureStampPlugin",intro:"文末追加签名（姓名 / 手写图）+ 签署日期；可选 CSS 圆形印章作角标（renderOverlay）。",why:"正式投递 / 确认稿需要落款与印章，手动拼容易破坏布局。",plugs:[{fn:"createSignatureStampPlugin",cfg:'name: "林清扬", stamp: "{{stamp}}"',why:"renderFooter 加签名行；stamp 为 seal 时再叠加右上角印章角标。"}],controls:[{key:"stamp",label:"印章",kind:"select",init:"seal",options:[{label:"圆形印章",value:"seal"},{label:"无印章",value:"none"}]}],props:[]},fx=ee("SignatureStampPlugin"),px=Object.freeze(Object.defineProperty({__proto__:null,default:fx,meta:dx},Symbol.toStringTag,{value:"Module"})),mx={slug:"qrcode",title:"二维码",group:"plugin",plugin:"QrCodePlugin",intro:"把联系方式 / 链接编码成二维码，作常显角标或弹窗展示（qrcode 库按需加载）。",why:"线下物料、招聘海报扫一扫直达主页，比贴长链接友好。",plugs:[{fn:"createQrCodePlugin",cfg:'content: "https://vane.dev/r/qingyang"',why:"renderOverlay 在右上角常显二维码，点击放大；内容可传字符串或函数。"}],props:[]},gx=ee("QrCodePlugin"),hx=Object.freeze(Object.defineProperty({__proto__:null,default:gx,meta:mx},Symbol.toStringTag,{value:"Module"})),yx={slug:"share-link",title:"分享链接",group:"plugin",plugin:"ShareLinkPlugin",intro:"生成可分享 URL（编码数据或指向宿主），弹窗复制；无宿主时提示数据安全。",why:"把简历发给 HR 时给一个干净链接，比传 PDF 附件更轻。",plugs:[{fn:"createShareLinkPlugin",cfg:'onBuildUrl: (data) => "https://vane.dev/r/" + encodeURIComponent(data.basics.name)',why:"推荐用 onBuildUrl 钩到宿主，避免把整份数据塞进 hash；renderToolbar 提供复制按钮。"}],props:[]},vx=ee("ShareLinkPlugin"),xx=Object.freeze(Object.defineProperty({__proto__:null,default:vx,meta:yx},Symbol.toStringTag,{value:"Module"})),Sx={slug:"export-pdf",title:"导出 PDF",group:"plugin",plugin:"ExportPdfPlugin",intro:"打印通道（配合 PrintOptimize）或 canvas 通道（html2canvas + jsPDF 拼页，按需加载）。",why:"终稿交给招聘系统，PDF 比网页兼容性好；打印通道零额外依赖。",plugs:[{fn:"createExportPdfPlugin",cfg:'method: "print"',why:"renderToolbar 提供导出按钮；print 通道与 PrintOptimize 协同出 A4。"}],props:[],note:"canvas 通道需 html2canvas + jsPDF，默认按需加载，演示用 print 通道即可。"},wx=ee("ExportPdfPlugin"),kx=Object.freeze(Object.defineProperty({__proto__:null,default:wx,meta:Sx},Symbol.toStringTag,{value:"Module"})),Px={slug:"print-optimize",title:"打印优化",group:"plugin",plugin:"PrintOptimizePlugin",intro:"注入 @media print 样式：分页不断行、隐藏工具条与遮罩、按 A4 出页。与 ExportPdf 协同。",why:"Ctrl/Cmd+P 直接能打印出干净版，不用临时删按钮。",plugs:[{fn:"createPrintOptimizePlugin",cfg:'pageSize: "A4"',why:"onMount 注入打印样式；通常和 ExportPdf（print 通道）成对出现。"}],props:[],note:"本插件只改打印输出（Ctrl/Cmd+P 或导出 PDF 的打印通道），屏幕上的渲染与裸 Core 一致是预期行为 —— 按 P 预览即可看到 A4 分页与工具条隐藏。"},_x=ee("PrintOptimizePlugin"),Cx=Object.freeze(Object.defineProperty({__proto__:null,default:_x,meta:Px},Symbol.toStringTag,{value:"Module"})),Rx={slug:"attachment-preview",title:"附件预览",group:"plugin",plugin:"AttachmentPreviewPlugin",intro:"列出附件卡片（PDF / 图片 / 链接），点击在灯箱中预览；items 会合并进 data.attachments。",why:"作品集、证书扫描件随简历一并提供，HR 点开即看。",plugs:[{fn:"createAttachmentPreviewPlugin",cfg:'items: [{ name: "作品集", kind: "pdf", url: "https://x.com/p.pdf" }]',why:"renderAttachments 渲染卡片网格，renderOverlay 承载灯箱。"}],props:[]},jx=ee("AttachmentPreviewPlugin"),Ex=Object.freeze(Object.defineProperty({__proto__:null,default:jx,meta:Rx},Symbol.toStringTag,{value:"Module"})),bx={slug:"versioning",title:"版本管理",group:"plugin",plugin:"VersioningPlugin",intro:"快照数据 / 模板 / 语言 / 隐私态，保存命名版本，可恢复 / 删除，持久化 localStorage。",why:"同一份简历投不同公司要改好几版，存快照比复制文件省心。",plugs:[{fn:"createVersioningPlugin",cfg:"maxVersions: 20",why:"renderToolbar 存版本，renderFooter 显示当前版本，恢复即切回整份状态。"}],props:[],note:"演示站点用 localStorage 持久化，清缓存会丢失版本快照。"},Tx=ee("VersioningPlugin"),Dx=Object.freeze(Object.defineProperty({__proto__:null,default:Tx,meta:bx},Symbol.toStringTag,{value:"Module"})),Ox={slug:"deliver-track",title:"投递追踪",group:"plugin",plugin:"DeliverTrackPlugin",intro:"记录投递去向与状态（投递 / 面试 / offer / 拒绝），页脚汇总，浮层时间线。",why:"广撒网投完容易忘，集中看一眼就知道谁进了面试。",plugs:[{fn:"createDeliverTrackPlugin",cfg:'initial: [{ company: "字节", status: "面试" }]',why:"renderFooter 汇总各状态计数，renderOverlay 展开时间线。"}],props:[]},zx=ee("DeliverTrackPlugin"),$x=Object.freeze(Object.defineProperty({__proto__:null,default:zx,meta:Ox},Symbol.toStringTag,{value:"Module"})),Mx={slug:"ai-polish",title:"AI 润色",group:"plugin",plugin:"AiPolishPlugin",intro:"调用可插拔服务润色摘要 / 工作描述 / 项目描述，可一键还原（不硬编码密钥）。",why:"自己写的描述常偏口语，接一个润色服务提一档专业度。",plugs:[{fn:"createAiPolishPlugin",cfg:'fields: ["summary", "work", "projects"]',why:"transformData 改写对应字段，renderToolbar 提供「润色 / 还原」按钮；polish 由宿主注入。"}],props:[],note:"演示态的 polish 为占位实现，真实项目把服务注入 createAiPolishPlugin({ polish }) 即可。"},Lx=ee("AiPolishPlugin"),Nx=Object.freeze(Object.defineProperty({__proto__:null,default:Lx,meta:Mx},Symbol.toStringTag,{value:"Module"})),Ix=`/**
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
`,Ax=`import { makeStage } from "./_factory";
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
`,Ux=`import { makeStage } from "./_factory";
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
`,Fx=`import { makeStage } from "./_factory";
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
`,Bx=`import { makeStage } from "./_factory";
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
`,Vx=`import { makeStage } from "./_factory";
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
`,Wx=`import { makeStage } from "./_factory";
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
`,Hx=`import { makeStage } from "./_factory";
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
`,Kx=`import { makeStage } from "./_factory";
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
`,Qx=`import { makeStage } from "./_factory";
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
`,Yx=`import { makeStage } from "./_factory";
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
`,Jx=`import { makeStage } from "./_factory";
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
`,qx=`import { makeStage } from "./_factory";
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
`,Gx=`import { makeStage } from "./_factory";
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
`,Xx=`import { makeStage } from "./_factory";
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
`,Zx=`import { makeStage } from "./_factory";
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
`,e1=`import { makeStage } from "./_factory";
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
`,t1=`import { makeStage } from "./_factory";
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
`,n1=`import { makeStage } from "./_factory";
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
`,r1=`import { makeStage } from "./_factory";
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
`,o1=`import { makeStage } from "./_factory";
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
`,i1=Object.assign({"./00-basic.tsx":iy,"./01-template-switch.tsx":$0,"./02-theme-customize.tsx":N0,"./03-section-reorder.tsx":U0,"./04-section-collapse.tsx":V0,"./05-timeline-view.tsx":K0,"./06-stat-summary.tsx":J0,"./07-multi-lang.tsx":X0,"./08-privacy-mask.tsx":tx,"./09-contact-desensitize.tsx":ox,"./10-ats-score.tsx":sx,"./11-keyword-highlight.tsx":cx,"./12-signature-stamp.tsx":px,"./13-qrcode.tsx":hx,"./14-share-link.tsx":xx,"./15-export-pdf.tsx":kx,"./16-print-optimize.tsx":Cx,"./17-attachment-preview.tsx":Ex,"./18-versioning.tsx":Dx,"./19-deliver-track.tsx":$x,"./20-ai-polish.tsx":Nx}),l1=Object.assign({"./00-basic.tsx":Ix,"./01-template-switch.tsx":Ax,"./02-theme-customize.tsx":Ux,"./03-section-reorder.tsx":Fx,"./04-section-collapse.tsx":Bx,"./05-timeline-view.tsx":Vx,"./06-stat-summary.tsx":Wx,"./07-multi-lang.tsx":Hx,"./08-privacy-mask.tsx":Kx,"./09-contact-desensitize.tsx":Qx,"./10-ats-score.tsx":Yx,"./11-keyword-highlight.tsx":Jx,"./12-signature-stamp.tsx":qx,"./13-qrcode.tsx":Gx,"./14-share-link.tsx":Xx,"./15-export-pdf.tsx":Zx,"./16-print-optimize.tsx":e1,"./17-attachment-preview.tsx":t1,"./18-versioning.tsx":n1,"./19-deliver-track.tsx":r1,"./20-ai-polish.tsx":o1}),s1=e=>e.replace(/^\.\//,""),es=Object.entries(i1).map(([e,t])=>{const n=s1(e);return{meta:t.meta,Stage:t.default,file:n,source:l1[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),a1=Array.from(new Set(es.map(e=>e.meta.group))),ts={basic:{label:"基础功能",hint:"Core 自身的 props"},advanced:{label:"高级功能",hint:"ref / 事件 / 杂项配置"},plugin:{label:"插件功能",hint:"一插件一页"}};function tc(e){const t={};for(const n of e.controls??[])t[n.key]=n.init;return t}const u1=`import type {
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
`,c1=`import type {
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
`,d1=`import type {
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
`,f1=`import type {
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
`,p1=`import type {
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
`,m1=`import type {
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
`,g1=`import type {
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
`,h1=`import type {
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
`,y1=`import type {
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
`,v1=`import type {
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
`,x1=`import type {
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
`,S1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, 
  ResumeCoreProps,
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
`,w1=`import type {
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
`,k1=`import type {
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
`,P1=`import type {
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
`,_1=`import type {
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
`,C1=`import type {
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
`,R1=`import type {
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
`,j1=`import type {
  PluginDoc,
} from "vane-plugin-core";
import type { ResumePluginCreator, ResumePluginContext, 
  ResumeData,
  WorkItem,
  EduItem,
} from "../../components/ResumePlugin/plugins/types";
import { toolbarBtn, highlightText } from "../../components/ResumePlugin/plugins/tokens";
import doc from "./doc.json";

export interface TimelineViewConfig {
  sections?: ("work" | "education")[];
  mode?: "list" | "timeline";
}

function Timeline({ items, kind, kw }: { items: (WorkItem | EduItem)[]; kind: "work" | "edu"; kw: string[] }) {
  if (!items.length) return null;
  return (
    <div style={{ position: "relative", paddingLeft: 20 }}>
      <div style={{ position: "absolute", left: 5, top: 4, bottom: 4, width: 2, background: "var(--vr-line, #e3e6ea)" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {items.map((it, i) => (
          <div key={(it as WorkItem).id ?? i} style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: -19,
                top: 4,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--vr-accent, #2f6feb)",
                boxShadow: "0 0 0 3px #fff",
              }}
            />
            <div style={{ fontWeight: 700, color: "var(--vr-text, #1f2328)" }}>
              {kind === "work"
                ? highlightText((it as WorkItem).company, kw)
                : highlightText((it as EduItem).school, kw)}
            </div>
            <div style={{ color: "var(--vr-muted, #5d636a)", fontSize: 13 }}>
              {kind === "work"
                ? <>
                    {(it as WorkItem).role ? <>{highlightText((it as WorkItem).role as string, kw)} </> : null}
                    {\`\${(it as WorkItem).start} — \${(it as WorkItem).end}\`}
                  </>
                : <>
                    {highlightText((it as EduItem).degree, kw)}
                    {(it as EduItem).major ? <> · {highlightText((it as EduItem).major as string, kw)}</> : null}
                    {\` \${(it as EduItem).start} — \${(it as EduItem).end}\`}
                  </>}
            </div>
            {kind === "work" && (it as WorkItem).highlights?.length > 0 && (
              <ul style={{ margin: "4px 0 0", paddingLeft: 18, color: "var(--vr-muted, #5d636a)" }}>
                {(it as WorkItem).highlights.map((h, j) => (
                  <li key={j}>{highlightText(h, kw)}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
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
`,E1=`import type {
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
`,vS={layout:"版式与视觉",data:"数据与隐私",interaction:"交互与产出"},nc=["layout","data","interaction"],rc=Object.assign({"/src/custom-plugins/AiPolishPlugin/doc.json":la,"/src/custom-plugins/AtsScorePlugin/doc.json":_a,"/src/custom-plugins/AttachmentPreviewPlugin/doc.json":va,"/src/custom-plugins/ContactDesensitizePlugin/doc.json":ua,"/src/custom-plugins/DeliverTrackPlugin/doc.json":ha,"/src/custom-plugins/ExportPdfPlugin/doc.json":ca,"/src/custom-plugins/KeywordHighlightPlugin/doc.json":Pa,"/src/custom-plugins/MultiLangPlugin/doc.json":ia,"/src/custom-plugins/PrintOptimizePlugin/doc.json":xa,"/src/custom-plugins/PrivacyMaskPlugin/doc.json":aa,"/src/custom-plugins/QrCodePlugin/doc.json":pa,"/src/custom-plugins/SectionCollapsePlugin/doc.json":Ra,"/src/custom-plugins/SectionReorderPlugin/doc.json":wa,"/src/custom-plugins/ShareLinkPlugin/doc.json":fa,"/src/custom-plugins/SignatureStampPlugin/doc.json":ja,"/src/custom-plugins/StatSummaryPlugin/doc.json":Ca,"/src/custom-plugins/TemplateSwitchPlugin/doc.json":ra,"/src/custom-plugins/ThemeCustomizePlugin/doc.json":oa,"/src/custom-plugins/TimelineViewPlugin/doc.json":ka,"/src/custom-plugins/VersioningPlugin/doc.json":ma}),oc=Object.assign({"/src/custom-plugins/AiPolishPlugin/create.tsx":u1,"/src/custom-plugins/AtsScorePlugin/create.tsx":c1,"/src/custom-plugins/AttachmentPreviewPlugin/create.tsx":d1,"/src/custom-plugins/ContactDesensitizePlugin/create.tsx":f1,"/src/custom-plugins/DeliverTrackPlugin/create.tsx":p1,"/src/custom-plugins/ExportPdfPlugin/create.tsx":m1,"/src/custom-plugins/KeywordHighlightPlugin/create.tsx":g1,"/src/custom-plugins/MultiLangPlugin/create.tsx":h1,"/src/custom-plugins/PrintOptimizePlugin/create.tsx":y1,"/src/custom-plugins/PrivacyMaskPlugin/create.tsx":v1,"/src/custom-plugins/QrCodePlugin/create.tsx":x1,"/src/custom-plugins/SectionCollapsePlugin/create.tsx":S1,"/src/custom-plugins/SectionReorderPlugin/create.tsx":w1,"/src/custom-plugins/ShareLinkPlugin/create.tsx":k1,"/src/custom-plugins/SignatureStampPlugin/create.tsx":P1,"/src/custom-plugins/StatSummaryPlugin/create.tsx":_1,"/src/custom-plugins/TemplateSwitchPlugin/create.tsx":C1,"/src/custom-plugins/ThemeCustomizePlugin/create.tsx":R1,"/src/custom-plugins/TimelineViewPlugin/create.tsx":j1,"/src/custom-plugins/VersioningPlugin/create.tsx":E1}),Nf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function b1(e){const t=Object.keys(oc).find(o=>Nf(o)===e),n=t?oc[t]:"",r=/priority:\s*(\d+)/.exec(n);return r?Number(r[1]):0}function T1(e){const t=Object.keys(rc).find(n=>Nf(n)===e);return t?rc[t]:{name:e,description:"（缺少 doc.json）"}}const D1=[{dir:"TemplateSwitchPlugin",group:"layout",make:()=>di({})},{dir:"ThemeCustomizePlugin",group:"layout",make:()=>Mr({})},{dir:"SectionReorderPlugin",group:"layout",make:()=>yi({})},{dir:"SectionCollapsePlugin",group:"layout",make:()=>wi({})},{dir:"TimelineViewPlugin",group:"layout",make:()=>vi({})},{dir:"StatSummaryPlugin",group:"data",make:()=>Si({})},{dir:"MultiLangPlugin",group:"data",make:()=>fi({locales:[{code:"zh",label:"中"},{code:"en",label:"EN"}],translations:{en:{basics:{name:"Qingyang Lin",title:"Researcher",contacts:[],summary:"PhD candidate in Computer Science."}}}})},{dir:"PrivacyMaskPlugin",group:"data",make:()=>pi({})},{dir:"ContactDesensitizePlugin",group:"data",make:()=>mi({})},{dir:"AtsScorePlugin",group:"data",make:()=>xi({jobKeywords:["React","TypeScript","Node"]})},{dir:"VersioningPlugin",group:"data",make:()=>ga({})},{dir:"DeliverTrackPlugin",group:"data",make:()=>ya({})},{dir:"KeywordHighlightPlugin",group:"interaction",make:()=>Nr({keywords:["React","TypeScript"],color:"#ffd34e"})},{dir:"SignatureStampPlugin",group:"interaction",make:()=>ki({stamp:"seal"})},{dir:"QrCodePlugin",group:"interaction",make:()=>hi({content:"https://vane.dev/r/qingyang"})},{dir:"ShareLinkPlugin",group:"interaction",make:()=>gi({onBuildUrl:e=>{var t;return"https://vane.dev/r/"+encodeURIComponent(((t=e.basics)==null?void 0:t.name)??"resume")}})},{dir:"ExportPdfPlugin",group:"interaction",make:()=>da({})},{dir:"PrintOptimizePlugin",group:"interaction",make:()=>Sa({})},{dir:"AttachmentPreviewPlugin",group:"interaction",make:()=>Lr({})},{dir:"AiPolishPlugin",group:"interaction",make:()=>sa({})}],ic=D1.map(e=>{const t=T1(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:b1(e.dir),summary:t.description,doc:t,make:e.make}}).sort((e,t)=>nc.indexOf(e.group)-nc.indexOf(t.group)||t.priority-e.priority),O1={id:"tech-resume",title:"技术简历 · 现代版式",group:"求职",ref:{label:"对标 拉勾技术岗",url:"https://www.lagou.com/"},pain:"技术岗简历要在「一眼看懂」和「突出量化亮点」之间平衡，又得方便按 JD 调整后投递。",plugs:[{fn:"createTemplateSwitchPlugin",cfg:"{}",why:"切到现代模板，整体观感由 CSS 变量驱动。"},{fn:"createThemeCustomizePlugin",cfg:"{}",why:"预设强调色 + 取色器，适配招聘站品牌色。"},{fn:"createSectionReorderPlugin",cfg:"{}",why:"把「工作」提前到「教育」之前，贴合技术岗叙事。"},{fn:"createTimelineViewPlugin",cfg:"{}",why:"工作 / 教育经历切竖向时间轴，节点更清晰。"},{fn:"createKeywordHighlightPlugin",cfg:'{ keywords: ["React", "TypeScript"], color: "#ffd34e" }',why:"按 JD 关键词命中高亮，递投前自查覆盖度。"},{fn:"createStatSummaryPlugin",cfg:"{}",why:"基本信息区追加工作段数 / 技能数等概览徽章。"}],props:[],note:"这组插件互不抢槽：模板 / 主题 / 重排改外观与顺序，时间轴 / 高亮 / 概览只增强对应区块。"};function z1(){const e=v.useMemo(()=>$r(nn,[di({}),Mr({}),yi({}),vi({}),Nr({keywords:["React","TypeScript"],color:"#ffd34e"}),Si({})]),[]);return u.jsx(e,{data:rn,containerStyle:{maxWidth:600,margin:"0 auto"}})}const $1=Object.freeze(Object.defineProperty({__proto__:null,default:z1,meta:O1},Symbol.toStringTag,{value:"Module"})),M1={id:"share-ready",title:"分享前准备 · 隐私护栏",group:"分享",ref:{label:"对标 公开主页",url:"https://vane.dev/"},pain:"把简历发给猎头 / 挂在公开主页前，电话邮箱必须脱敏，整页还要能一键打码防截图。",plugs:[{fn:"createContactDesensitizePlugin",cfg:"{}",why:"电话 / 邮箱 / 地址做可逆脱敏（138****1234）。"},{fn:"createPrivacyMaskPlugin",cfg:"{}",why:"一键进入隐私模式，整页毛玻璃或字段级隐藏。"},{fn:"createQrCodePlugin",cfg:'{ content: "https://vane.dev/r/qingyang" }',why:"把主页 / 联系方式编码成二维码，角标常显。"},{fn:"createShareLinkPlugin",cfg:'{ onBuildUrl: (d) => "https://vane.dev/r/" + encodeURIComponent(d.basics.name) }',why:"生成可分享 URL，弹窗复制；无宿主时提示数据安全。"},{fn:"createAttachmentPreviewPlugin",cfg:"{}",why:"附件卡片列出，点击灯箱预览，避免直接暴露下载地址。"}],props:[],note:"脱敏与隐私遮罩都依赖数据管道顺序：脱敏在前、遮罩在后，确保遮蔽的是已脱敏的内容。"};function L1(){const e=v.useMemo(()=>$r(nn,[mi({}),pi({}),hi({content:"https://vane.dev/r/qingyang"}),gi({onBuildUrl:t=>"https://vane.dev/r/"+encodeURIComponent(t.basics.name)}),Lr({})]),[]);return u.jsx(e,{data:rn,containerStyle:{maxWidth:600,margin:"0 auto"}})}const N1=Object.freeze(Object.defineProperty({__proto__:null,default:L1,meta:M1},Symbol.toStringTag,{value:"Module"})),I1={id:"academic-cv",title:"学术 CV · 紧凑阅读",group:"求职",ref:{label:"对标 高校求职",url:"https://www.zhipin.com/"},pain:"学术 / 科研岗简历信息密度高，需要可折叠的长段落、中英切换，以及论文 / 证书的附件归档。",plugs:[{fn:"createThemeCustomizePlugin",cfg:"{}",why:"压低强调色饱和度，偏沉稳的学术观感。"},{fn:"createSectionCollapsePlugin",cfg:"{}",why:"每个板块头部加折叠开关，长简历可分段收起。"},{fn:"createMultiLangPlugin",cfg:'{ locales: [{ code: "zh", label: "中" }, { code: "en", label: "EN" }], translations: { en: { basics: { name: "Qingyang Lin", title: "Researcher" }, summary: "PhD candidate in CS." } } }',why:"中英切换，整体翻译文本字段，缺失字段保留原文降级。"},{fn:"createAttachmentPreviewPlugin",cfg:"{}",why:"论文 PDF / 证书图片集中预览，便于归档投递。"}],props:[],tone:"light"};function A1(){const e=v.useMemo(()=>$r(nn,[Mr({}),wi({}),fi({locales:[{code:"zh",label:"中"},{code:"en",label:"EN"}],translations:{en:{basics:{name:"Qingyang Lin",title:"Researcher",contacts:[],summary:"PhD candidate in Computer Science."}}}}),Lr({})]),[]);return u.jsx(e,{data:rn,containerStyle:{maxWidth:600,margin:"0 auto"}})}const U1=Object.freeze(Object.defineProperty({__proto__:null,default:A1,meta:I1},Symbol.toStringTag,{value:"Module"})),F1={id:"ats-optimize",title:"ATS 优化自检",group:"求职",ref:{label:"对标 ATS 解析",url:"https://www.jobscan.co/"},pain:"很多公司用 ATS 先机筛，缺姓名 / 量化亮点 / 命中 JD 关键词会被直接刷掉，投递前需要自检。",plugs:[{fn:"createAtsScorePlugin",cfg:'{ jobKeywords: ["React", "TypeScript", "Node"] }',why:"扫描常见雷区，输出 0-100 评分与逐条改进建议。"},{fn:"createKeywordHighlightPlugin",cfg:'{ keywords: ["React", "TypeScript"], color: "#ffd34e" }',why:"把 JD 关键词在正文里命中高亮，直观看到覆盖度。"},{fn:"createSignatureStampPlugin",cfg:'{ stamp: "seal" }',why:"文末加签名 + 圆形印章，正式投递更有仪式感。"}],props:[],note:"ATS 评分是纯分析插件，不改数据；它读的是经过脱敏 / 多语言之后的最终数据管道结果。"};function B1(){const e=v.useMemo(()=>$r(nn,[xi({jobKeywords:["React","TypeScript","Node"]}),Nr({keywords:["React","TypeScript"],color:"#ffd34e"}),ki({stamp:"seal"})]),[]);return u.jsx(e,{data:rn,containerStyle:{maxWidth:600,margin:"0 auto"}})}const V1=Object.freeze(Object.defineProperty({__proto__:null,default:B1,meta:F1},Symbol.toStringTag,{value:"Module"})),W1=`/**
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
`,H1=`/**
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
} from "vane-resume/custom-plugins";
import { SAMPLE_RESUME } from "../data/sample";

export const meta = {
  id: "share-ready",
  title: "分享前准备 · 隐私护栏",
  group: "分享",
  ref: { label: "对标 公开主页", url: "https://vane.dev/" },
  pain: "把简历发给猎头 / 挂在公开主页前，电话邮箱必须脱敏，整页还要能一键打码防截图。",
  plugs: [
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
  note: "脱敏与隐私遮罩都依赖数据管道顺序：脱敏在前、遮罩在后，确保遮蔽的是已脱敏的内容。",
};

export default function ShareReady() {
  const Resume = useMemo(
    () =>
      withResumePlugins(ResumeCore, [
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
`,K1=`/**
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
`,Q1=`/**
 * ATS 优化自检：ATS 评分 + 关键词高亮 + 电子落款，投递前的最后一道关。
 */
import React, { useMemo } from "react";
import { ResumeCore, withResumePlugins } from "vane-resume";
import {
  createAtsScorePlugin,
  createKeywordHighlightPlugin,
  createSignatureStampPlugin,
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
  note: "ATS 评分是纯分析插件，不改数据；它读的是经过脱敏 / 多语言之后的最终数据管道结果。",
};

export default function AtsOptimize() {
  const Resume = useMemo(
    () =>
      withResumePlugins(ResumeCore, [
        createAtsScorePlugin({ jobKeywords: ["React", "TypeScript", "Node"] }),
        createKeywordHighlightPlugin({ keywords: ["React", "TypeScript"], color: "#ffd34e" }),
        createSignatureStampPlugin({ stamp: "seal" }),
      ]),
    []
  );
  return <Resume data={SAMPLE_RESUME} containerStyle={{ maxWidth: 600, margin: "0 auto" }} />;
}
`,Y1=Object.assign({"./01-tech-resume.tsx":$1,"./02-share-ready.tsx":N1,"./03-academic-cv.tsx":U1,"./04-ats-optimize.tsx":V1}),J1=Object.assign({"./01-tech-resume.tsx":W1,"./02-share-ready.tsx":H1,"./03-academic-cv.tsx":K1,"./04-ats-optimize.tsx":Q1}),q1=e=>e.replace(/^\.\//,""),Ho=Object.entries(Y1).map(([e,t])=>{const n=q1(e);return{meta:t.meta,Component:t.default,file:n,source:J1[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),xS=Ho.reduce((e,t)=>(e.includes(t.meta.group)||e.push(t.meta.group),e),[]),SS=Array.from(new Set(Ho.flatMap(e=>e.meta.plugs.map(t=>t.fn)))).sort(),G1="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",X1="true|false|null|undefined|this|super",Z1="number|string|boolean|object|any|unknown|never|React|HTMLElement|void|ResumeData",lc=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${G1})\b`,String.raw`\b(${X1})\b`,String.raw`\b(${Z1})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),sc=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function eS(e){const t=[];let n=0;lc.lastIndex=0;let r;for(;r=lc.exec(e);){r.index>n&&t.push({text:e.slice(n,r.index),cls:null});const o=sc.findIndex((i,l)=>r[l+1]!==void 0);t.push({text:r[0],cls:o>=0?sc[o]:null}),n=r.index+r[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function ac(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function tS({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:r}){const[o,i]=v.useState("idle"),[l,s]=v.useState(!1),a=v.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=n>0&&a.length>n,d=c&&!l?a.slice(0,n).join(`
`):e,f=v.useMemo(()=>eS(d),[d]),p=v.useCallback(async()=>{var S;let x=!1;if((S=navigator.clipboard)!=null&&S.writeText)try{await navigator.clipboard.writeText(e),x=!0}catch{x=ac(e)}else x=ac(e);i(x?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return u.jsxs("div",{className:"code",children:[u.jsxs("div",{className:"code-head",children:[u.jsx("span",{children:t}),u.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[u.jsxs("span",{children:[a.length," 行"]}),u.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:p,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),u.jsx("pre",{style:r?{maxHeight:r}:void 0,children:u.jsx("code",{children:f.map((x,S)=>x.cls?u.jsx("span",{className:x.cls,children:x.text},S):u.jsx(br.Fragment,{children:x.text},S))})}),c?u.jsx("button",{type:"button",className:"code-more",onClick:()=>s(x=>!x),children:l?"收起":`展开余下 ${a.length-n} 行`}):null]})}const nS=/\{\{\s*([\w-]+)\s*\}\}/g;function If(e,t){return e.replace(nS,(n,r)=>r in t?String(t[r]):n)}function rS(e,t){if(!e)return"";let n=If(e,t).trim();return n.startsWith("{")&&n.endsWith("}")&&(n=n.slice(1,-1).trim()),n?`{ ${n} }`:""}function Af(e,t){const n=e.plugs.map(r=>`  ${r.fn}(${rS(r.cfg,t)}),`).join(`
`);return e.plugs.length?`const Resume = withResumePlugins(ResumeCore, [
${n}
]);`:"const Resume = ResumeCore;"}function Uf(e){const t=e.plugs.map(n=>n.fn).sort();return t.length?t.length>3?`import {
${t.map(n=>`  ${n},`).join(`
`)}
} from "vane-resume/custom-plugins";`:`import { ${t.join(", ")} } from "vane-resume/custom-plugins";`:"// 这一页只用 Core props，不需要任何插件"}function oS(e,t){const n=e.props.filter(r=>typeof r=="string"||!r.when||r.when(t)).map(r=>`      ${If(typeof r=="string"?r:r.text,t)}`).join(`
`);return`// ${e.title} · 最小装配（照抄即可跑）
import { ResumeCore, withResumePlugins } from "vane-resume";
import type { ResumeData } from "vane-resume";
${Uf(e)}

${Af(e,t)}

export default function Demo({ data }: { data: ResumeData }) {
  return (
    <Resume
      data={data}
${n}
    />
  );
}
`}function iS(e){return/^[A-Za-z_$][\w$]*$/.test(e)}function ns(e,t){const n="  ".repeat(t),r="  ".repeat(t+1);if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${r}${ns(i,t+1)}`).join(`,
`)},
${n}]`;if(typeof e=="object"){const o=Object.entries(e);return o.length===0?"{}":`{
${o.map(([l,s])=>`${r}${iS(l)?l:JSON.stringify(l)}: ${ns(s,t+1)}`).join(`,
`)},
${n}}`}return JSON.stringify(e)}function lS(){const e=JSON.parse(JSON.stringify(rn));return e.basics&&(e.basics.avatar="https://your-avatar.example.com/a.png"),`const data: ResumeData = ${ns(e,0)};`}function sS(e,t){return`// ${e.title} · 完整示例（直接复制即可运行）
import { ResumeCore, withResumePlugins } from "vane-resume";
import type { ResumeData } from "vane-resume";
${Uf(e)}

${Af(e,t)}

${lS()}

export default function Demo() {
  return <Resume data={data} />;
}
`}function aS({controls:e,cfg:t,onChange:n}){return u.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(t)).map(r=>{const o=t[r.key];return u.jsxs("label",{className:"ctl",title:r.hint,children:[u.jsxs("span",{className:"ctl-label",children:[r.label,u.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?u.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>n(r.key,!o),"aria-pressed":!!o,children:u.jsx("i",{})}):r.kind==="select"?u.jsx("select",{className:"ctl-select",value:String(o),onChange:i=>n(r.key,i.target.value),children:(r.options??[]).map(i=>u.jsx("option",{value:i.value,children:i.label},i.value))}):u.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:i=>n(r.key,Number(i.target.value))})]},r.key)})})}function uS({lines:e,title:t="事件日志",empty:n="还没触发 —— 试着滚动、点一张卡",right:r}){return u.jsxs("div",{className:"log",children:[u.jsxs("div",{className:"log-head",children:[u.jsx("span",{children:t}),u.jsxs("span",{className:"log-right",children:[r,u.jsx("b",{children:e.length})]})]}),e.length===0?u.jsx("p",{className:"log-empty",children:n}):u.jsx("ol",{className:"log-list",children:e.map(o=>u.jsxs("li",{className:`log-line is-${o.kind}`,children:[u.jsx("time",{children:o.at}),u.jsx("span",{children:o.text})]},o.id))})]})}function cS({entry:e,order:t}){var y;const{meta:n,Stage:r,file:o}=e,[i,l]=v.useState(()=>tc(n)),[s,a]=v.useState([]),[c,d]=v.useState("minimal"),f=v.useCallback((k,g="event")=>{const m=new Date().toLocaleTimeString("zh-CN",{hour12:!1});a(h=>[{id:h.length+1,at:m,text:k,kind:g},...h].slice(0,60))},[]),p=v.useCallback((k,g)=>{l(m=>({...m,[k]:g}))},[]),x=v.useMemo(()=>oS(n,i),[n,i]),S=v.useMemo(()=>sS(n,i),[n,i]);return u.jsxs("section",{className:"demo","data-demo":n.slug,children:[u.jsxs("header",{className:"demo-head",children:[u.jsxs("div",{className:"demo-folio",children:[u.jsx("span",{className:"demo-no",children:String(t).padStart(2,"0")}),u.jsx("em",{children:"plate"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"demo-title-row",children:[u.jsx("h2",{children:n.title}),u.jsx("span",{className:"demo-group",children:ts[n.group].label}),n.plugin?u.jsx("code",{className:"demo-plugin",children:n.plugin}):null]}),u.jsx("p",{className:"demo-intro",children:n.intro}),u.jsxs("p",{className:"demo-why",children:[u.jsx("b",{children:"什么时候用"}),n.why]})]}),u.jsxs("div",{className:"demo-meta",children:[u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"file"}),u.jsx("b",{children:o})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"group"}),u.jsx("b",{children:ts[n.group].label})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"plugs"}),u.jsx("b",{children:n.plugs.length?`${n.plugs.length} installed`:"core only"})]})]})]}),(y=n.controls)!=null&&y.length?u.jsxs("div",{className:"demo-controls",children:[u.jsx(aS,{controls:n.controls,cfg:i,onChange:p}),u.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{l(tc(n)),a([])},children:"重置"})]}):null,u.jsxs("div",{className:"demo-body",children:[u.jsxs("figure",{className:"plate",children:[u.jsxs("figcaption",{className:"plate-cap",children:[u.jsx("b",{children:"stage"}),u.jsxs("span",{children:[n.tone==="light"?"light surface":"live render",n.stageHeight?` · ${n.stageHeight}px`:""]}),u.jsx("em",{children:"live"})]}),u.jsx("div",{className:"plate-ruler","aria-hidden":!0}),u.jsx("div",{className:`plate-body demo-stage${n.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${n.stageHeight??380}px`},children:u.jsx(r,{cfg:i,log:f,setCfg:p})})]}),u.jsxs("aside",{className:"demo-side",children:[u.jsx("div",{className:"demo-plugs",children:n.plugs.length===0?u.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):n.plugs.map(k=>u.jsx("span",{className:`demo-plug${k.local?" is-local":""}`,children:k.fn.replace(/^create|Plugin$/g,"")},k.fn))}),u.jsx("ul",{className:"demo-why-list",children:n.plugs.map(k=>u.jsxs("li",{children:[u.jsx("code",{children:k.fn}),u.jsx("span",{children:k.why})]},k.fn))}),n.note?u.jsxs("p",{className:"demo-note",children:["⚠ ",n.note]}):null,u.jsx(uS,{lines:s,empty:n.plugs.length>0?"还没触发 —— 拖上面的控件，或滚动 / 点卡片":"这一页没有事件类行为，日志留白"})]})]}),u.jsxs("div",{className:"demo-code",children:[u.jsxs("div",{className:"demo-switch",role:"tablist",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":c==="minimal",className:c==="minimal"?"is-active":"",onClick:()=>d("minimal"),children:"最小装配"}),u.jsx("button",{type:"button",role:"tab","aria-selected":c==="full",className:c==="full"?"is-active":"",onClick:()=>d("full"),children:"完整源码"})]}),u.jsx(tS,{code:c==="minimal"?x:S,title:c==="minimal"?`${n.slug}.minimal.tsx`:o,collapseAfter:c==="minimal"?0:26,maxHeight:420},c)]})]})}const dS=v.lazy(()=>On(()=>import("./HomePage-DE-SVS3Y.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),fS=v.lazy(()=>On(()=>import("./PluginsPage-e7Wj48tK.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),pS=v.lazy(()=>On(()=>import("./ScenariosPage-DFoNqy3i.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),mS={pkg:"vane-resume",brand:"R",subtitle:"结构化简历 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${ic.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Ho.length} scenes`}],routes:[{path:"/",element:u.jsx(dS,{})},{path:"/plugins",element:u.jsx(fS,{})},{path:"/scenarios",element:u.jsx(pS,{})}],crumb:e=>e==="/plugins"?"plugins · 插件工坊":e==="/scenarios"?"scenarios · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:a1.map(e=>({key:e,label:ts[e].label})),entries:es,detail:(e,t)=>u.jsx(cS,{entry:e,order:t})},footer:[`${ic.length} PLUGINS · ${Ho.length} SCENES`,`${es.length} DEMOS`]};function gS(){return u.jsx(_h,{config:mS})}nl.createRoot(document.getElementById("root")).render(u.jsx(gS,{}));export{tS as C,es as D,nc as G,Zl as L,ic as P,nn as R,Ho as S,SS as U,On as _,ts as a,vS as b,rn as c,xS as d,yS as e,Wf as g,u as j,v as r,$r as w};
