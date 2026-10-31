const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-BPJJ8WV1.js","./catalog-QnHIYlYc.js","./ScenariosPage-DR_6nCCM.js"])))=>i.map(i=>d[i]);
var If=Object.defineProperty;var Nf=(e,n,t)=>n in e?If(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ga=(e,n,t)=>Nf(e,typeof n!="symbol"?n+"":n,t);function jf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Lf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ju={exports:{}},al={},Zu={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=Symbol.for("react.element"),Of=Symbol.for("react.portal"),zf=Symbol.for("react.fragment"),Df=Symbol.for("react.strict_mode"),Af=Symbol.for("react.profiler"),Hf=Symbol.for("react.provider"),Wf=Symbol.for("react.context"),Ff=Symbol.for("react.forward_ref"),Bf=Symbol.for("react.suspense"),Uf=Symbol.for("react.memo"),Gf=Symbol.for("react.lazy"),ha=Symbol.iterator;function Vf(e){return e===null||typeof e!="object"?null:(e=ha&&e[ha]||e["@@iterator"],typeof e=="function"?e:null)}var ec={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nc=Object.assign,tc={};function Kt(e,n,t){this.props=e,this.context=n,this.refs=tc,this.updater=t||ec}Kt.prototype.isReactComponent={};Kt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Kt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rc(){}rc.prototype=Kt.prototype;function is(e,n,t){this.props=e,this.context=n,this.refs=tc,this.updater=t||ec}var ss=is.prototype=new rc;ss.constructor=is;nc(ss,Kt.prototype);ss.isPureReactComponent=!0;var ya=Array.isArray,oc=Object.prototype.hasOwnProperty,as={current:null},lc={key:!0,ref:!0,__self:!0,__source:!0};function ic(e,n,t){var r,o={},l=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)oc.call(n,r)&&!lc.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Vr,type:e,key:l,ref:i,props:o,_owner:as.current}}function Qf(e,n){return{$$typeof:Vr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function us(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr}function Kf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var va=/\/+/g;function El(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Kf(""+e.key):n.toString(36)}function ko(e,n,t,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Vr:case Of:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+El(i,0):r,ya(o)?(t="",e!=null&&(t=e.replace(va,"$&/")+"/"),ko(o,n,t,"",function(u){return u})):o!=null&&(us(o)&&(o=Qf(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(va,"$&/")+"/")+e)),n.push(o)),1;if(i=0,r=r===""?".":r+":",ya(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+El(l,s);i+=ko(l,n,t,a,o)}else if(a=Vf(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+El(l,s++),i+=ko(l,n,t,a,o);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function to(e,n,t){if(e==null)return e;var r=[],o=0;return ko(e,r,"","",function(l){return n.call(t,l,o++)}),r}function Yf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Co={transition:null},qf={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Co,ReactCurrentOwner:as};function sc(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:to,forEach:function(e,n,t){to(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return to(e,function(){n++}),n},toArray:function(e){return to(e,function(n){return n})||[]},only:function(e){if(!us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Kt;V.Fragment=zf;V.Profiler=Af;V.PureComponent=is;V.StrictMode=Df;V.Suspense=Bf;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qf;V.act=sc;V.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nc({},e.props),o=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=as.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)oc.call(n,a)&&!lc.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Vr,type:e.type,key:o,ref:l,props:r,_owner:i}};V.createContext=function(e){return e={$$typeof:Wf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hf,_context:e},e.Consumer=e};V.createElement=ic;V.createFactory=function(e){var n=ic.bind(null,e);return n.type=e,n};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Ff,render:e}};V.isValidElement=us;V.lazy=function(e){return{$$typeof:Gf,_payload:{_status:-1,_result:e},_init:Yf}};V.memo=function(e,n){return{$$typeof:Uf,type:e,compare:n===void 0?null:n}};V.startTransition=function(e){var n=Co.transition;Co.transition={};try{e()}finally{Co.transition=n}};V.unstable_act=sc;V.useCallback=function(e,n){return Le.current.useCallback(e,n)};V.useContext=function(e){return Le.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};V.useEffect=function(e,n){return Le.current.useEffect(e,n)};V.useId=function(){return Le.current.useId()};V.useImperativeHandle=function(e,n,t){return Le.current.useImperativeHandle(e,n,t)};V.useInsertionEffect=function(e,n){return Le.current.useInsertionEffect(e,n)};V.useLayoutEffect=function(e,n){return Le.current.useLayoutEffect(e,n)};V.useMemo=function(e,n){return Le.current.useMemo(e,n)};V.useReducer=function(e,n,t){return Le.current.useReducer(e,n,t)};V.useRef=function(e){return Le.current.useRef(e)};V.useState=function(e){return Le.current.useState(e)};V.useSyncExternalStore=function(e,n,t){return Le.current.useSyncExternalStore(e,n,t)};V.useTransition=function(){return Le.current.useTransition()};V.version="18.3.1";Zu.exports=V;var y=Zu.exports;const Yt=Lf(y),Xf=jf({__proto__:null,default:Yt},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf=y,Zf=Symbol.for("react.element"),em=Symbol.for("react.fragment"),nm=Object.prototype.hasOwnProperty,tm=Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rm={key:!0,ref:!0,__self:!0,__source:!0};function ac(e,n,t){var r,o={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)nm.call(n,r)&&!rm.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Zf,type:e,key:l,ref:i,props:o,_owner:tm.current}}al.Fragment=em;al.jsx=ac;al.jsxs=ac;Ju.exports=al;var d=Ju.exports,uc={exports:{}},Ye={},cc={exports:{}},dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,W){var B=_.length;_.push(W);e:for(;0<B;){var re=B-1>>>1,ee=_[re];if(0<o(ee,W))_[re]=W,_[B]=ee,B=re;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var W=_[0],B=_.pop();if(B!==W){_[0]=B;e:for(var re=0,ee=_.length,$n=ee>>>1;re<$n;){var oe=2*(re+1)-1,T=_[oe],N=oe+1,D=_[N];if(0>o(T,B))N<ee&&0>o(D,T)?(_[re]=D,_[N]=B,re=N):(_[re]=T,_[oe]=B,re=oe);else if(N<ee&&0>o(D,B))_[re]=D,_[N]=B,re=N;else break e}}return W}function o(_,W){var B=_.sortIndex-W.sortIndex;return B!==0?B:_.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],u=[],p=1,c=null,f=3,v=!1,x=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var W=t(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=_)r(u),W.sortIndex=W.expirationTime,n(a,W);else break;W=t(u)}}function S(_){if(w=!1,h(_),!x)if(t(a)!==null)x=!0,ne(P);else{var W=t(u);W!==null&&E(S,W.startTime-_)}}function P(_,W){x=!1,w&&(w=!1,g($),$=-1),v=!0;var B=f;try{for(h(W),c=t(a);c!==null&&(!(c.expirationTime>W)||_&&!F());){var re=c.callback;if(typeof re=="function"){c.callback=null,f=c.priorityLevel;var ee=re(c.expirationTime<=W);W=e.unstable_now(),typeof ee=="function"?c.callback=ee:c===t(a)&&r(a),h(W)}else r(a);c=t(a)}if(c!==null)var $n=!0;else{var oe=t(u);oe!==null&&E(S,oe.startTime-W),$n=!1}return $n}finally{c=null,f=B,v=!1}}var C=!1,R=null,$=-1,A=5,j=-1;function F(){return!(e.unstable_now()-j<A)}function K(){if(R!==null){var _=e.unstable_now();j=_;var W=!0;try{W=R(!0,_)}finally{W?O():(C=!1,R=null)}}else C=!1}var O;if(typeof m=="function")O=function(){m(K)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,Z=z.port2;z.port1.onmessage=K,O=function(){Z.postMessage(null)}}else O=function(){b(K,0)};function ne(_){R=_,C||(C=!0,O())}function E(_,W){$=b(function(){_(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,ne(P))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(_){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var B=f;f=W;try{return _()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,W){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var B=f;f=_;try{return W()}finally{f=B}},e.unstable_scheduleCallback=function(_,W,B){var re=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?re+B:re):B=re,_){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=B+ee,_={id:p++,callback:W,priorityLevel:_,startTime:B,expirationTime:ee,sortIndex:-1},B>re?(_.sortIndex=B,n(u,_),t(a)===null&&_===t(u)&&(w?(g($),$=-1):w=!0,E(S,B-re))):(_.sortIndex=ee,n(a,_),x||v||(x=!0,ne(P))),_},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(_){var W=f;return function(){var B=f;f=W;try{return _.apply(this,arguments)}finally{f=B}}}})(dc);cc.exports=dc;var om=cc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=y,Ke=om;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pc=new Set,Tr={};function yt(e,n){Wt(e,n),Wt(e+"Capture",n)}function Wt(e,n){for(Tr[e]=n,e=0;e<n.length;e++)pc.add(n[e])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=Object.prototype.hasOwnProperty,im=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xa={},wa={};function sm(e){return si.call(wa,e)?!0:si.call(xa,e)?!1:im.test(e)?wa[e]=!0:(xa[e]=!0,!1)}function am(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function um(e,n,t,r){if(n===null||typeof n>"u"||am(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Oe(e,n,t,r,o,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Te[n]=new Oe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var cs=/[\-:]([a-z])/g;function ds(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(cs,ds);Te[n]=new Oe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(cs,ds);Te[n]=new Oe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(cs,ds);Te[n]=new Oe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ps(e,n,t,r){var o=Te.hasOwnProperty(n)?Te[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(um(n,t,o,r)&&(t=null),r||o===null?sm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Rn=lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),Pt=Symbol.for("react.portal"),kt=Symbol.for("react.fragment"),fs=Symbol.for("react.strict_mode"),ai=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),mc=Symbol.for("react.context"),ms=Symbol.for("react.forward_ref"),ui=Symbol.for("react.suspense"),ci=Symbol.for("react.suspense_list"),gs=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),gc=Symbol.for("react.offscreen"),Sa=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=Sa&&e[Sa]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Il;function pr(e){if(Il===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Il=n&&n[1]||""}return`
`+Il+e}var Nl=!1;function jl(e,n){if(!e||Nl)return"";Nl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Nl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?pr(e):""}function cm(e){switch(e.tag){case 5:return pr(e.type);case 16:return pr("Lazy");case 13:return pr("Suspense");case 19:return pr("SuspenseList");case 0:case 2:case 15:return e=jl(e.type,!1),e;case 11:return e=jl(e.type.render,!1),e;case 1:return e=jl(e.type,!0),e;default:return""}}function di(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kt:return"Fragment";case Pt:return"Portal";case ai:return"Profiler";case fs:return"StrictMode";case ui:return"Suspense";case ci:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mc:return(e.displayName||"Context")+".Consumer";case fc:return(e._context.displayName||"Context")+".Provider";case ms:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gs:return n=e.displayName||null,n!==null?n:di(e.type)||"Memo";case jn:n=e._payload,e=e._init;try{return di(e(n))}catch{}}return null}function dm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return di(n);case 8:return n===fs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pm(e){var n=hc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function oo(e){e._valueTracker||(e._valueTracker=pm(e))}function yc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=hc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pi(e,n){var t=n.checked;return de({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ba(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=qn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function vc(e,n){n=n.checked,n!=null&&ps(e,"checked",n,!1)}function fi(e,n){vc(e,n);var t=qn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?mi(e,n.type,t):n.hasOwnProperty("defaultValue")&&mi(e,n.type,qn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Pa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function mi(e,n,t){(n!=="number"||zo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var fr=Array.isArray;function Lt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+qn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function gi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return de({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ka(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(fr(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:qn(t)}}function xc(e,n){var t=qn(n.value),r=qn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ca(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?wc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lo,Sc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Rr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fm=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){fm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),vr[n]=vr[e]})});function bc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||vr.hasOwnProperty(e)&&vr[e]?(""+n).trim():n+"px"}function Pc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=bc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var mm=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yi(e,n){if(n){if(mm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function vi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xi=null;function hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wi=null,Ot=null,zt=null;function _a(e){if(e=Yr(e)){if(typeof wi!="function")throw Error(k(280));var n=e.stateNode;n&&(n=fl(n),wi(e.stateNode,e.type,n))}}function kc(e){Ot?zt?zt.push(e):zt=[e]:Ot=e}function Cc(){if(Ot){var e=Ot,n=zt;if(zt=Ot=null,_a(e),n)for(e=0;e<n.length;e++)_a(n[e])}}function _c(e,n){return e(n)}function Tc(){}var Ll=!1;function Rc(e,n,t){if(Ll)return e(n,t);Ll=!0;try{return _c(e,n,t)}finally{Ll=!1,(Ot!==null||zt!==null)&&(Tc(),Cc())}}function Mr(e,n){var t=e.stateNode;if(t===null)return null;var r=fl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Si=!1;if(kn)try{var or={};Object.defineProperty(or,"passive",{get:function(){Si=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{Si=!1}function gm(e,n,t,r,o,l,i,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var xr=!1,Do=null,Ao=!1,bi=null,hm={onError:function(e){xr=!0,Do=e}};function ym(e,n,t,r,o,l,i,s,a){xr=!1,Do=null,gm.apply(hm,arguments)}function vm(e,n,t,r,o,l,i,s,a){if(ym.apply(this,arguments),xr){if(xr){var u=Do;xr=!1,Do=null}else throw Error(k(198));Ao||(Ao=!0,bi=u)}}function vt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Mc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ta(e){if(vt(e)!==e)throw Error(k(188))}function xm(e){var n=e.alternate;if(!n){if(n=vt(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return Ta(o),e;if(l===r)return Ta(o),n;l=l.sibling}throw Error(k(188))}if(t.return!==r.return)t=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===t){i=!0,t=o,r=l;break}if(s===r){i=!0,r=o,t=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===t){i=!0,t=l,r=o;break}if(s===r){i=!0,r=l,t=o;break}s=s.sibling}if(!i)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function $c(e){return e=xm(e),e!==null?Ec(e):null}function Ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ec(e);if(n!==null)return n;e=e.sibling}return null}var Ic=Ke.unstable_scheduleCallback,Ra=Ke.unstable_cancelCallback,wm=Ke.unstable_shouldYield,Sm=Ke.unstable_requestPaint,me=Ke.unstable_now,bm=Ke.unstable_getCurrentPriorityLevel,ys=Ke.unstable_ImmediatePriority,Nc=Ke.unstable_UserBlockingPriority,Ho=Ke.unstable_NormalPriority,Pm=Ke.unstable_LowPriority,jc=Ke.unstable_IdlePriority,ul=null,yn=null;function km(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(ul,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:Tm,Cm=Math.log,_m=Math.LN2;function Tm(e){return e>>>=0,e===0?32:31-(Cm(e)/_m|0)|0}var io=64,so=4194304;function mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~o;s!==0?r=mr(s):(l&=i,l!==0&&(r=mr(l)))}else i=t&~o,i!==0?r=mr(i):l!==0&&(r=mr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,l=n&-n,o>=l||o===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-dn(n),o=1<<t,r|=e[t],n&=~o;return r}function Rm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mm(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-dn(l),s=1<<i,a=o[i];a===-1?(!(s&t)||s&r)&&(o[i]=Rm(s,n)):a<=n&&(e.expiredLanes|=s),l&=~s}}function Pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lc(){var e=io;return io<<=1,!(io&4194240)&&(io=64),e}function Ol(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Qr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-dn(n),e[n]=t}function $m(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-dn(t),l=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~l}}function vs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-dn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var X=0;function Oc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zc,xs,Dc,Ac,Hc,ki=!1,ao=[],Wn=null,Fn=null,Bn=null,$r=new Map,Er=new Map,On=[],Em="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ma(e,n){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":$r.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(n.pointerId)}}function lr(e,n,t,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},n!==null&&(n=Yr(n),n!==null&&xs(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Im(e,n,t,r,o){switch(n){case"focusin":return Wn=lr(Wn,e,n,t,r,o),!0;case"dragenter":return Fn=lr(Fn,e,n,t,r,o),!0;case"mouseover":return Bn=lr(Bn,e,n,t,r,o),!0;case"pointerover":var l=o.pointerId;return $r.set(l,lr($r.get(l)||null,e,n,t,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Er.set(l,lr(Er.get(l)||null,e,n,t,r,o)),!0}return!1}function Wc(e){var n=st(e.target);if(n!==null){var t=vt(n);if(t!==null){if(n=t.tag,n===13){if(n=Mc(t),n!==null){e.blockedOn=n,Hc(e.priority,function(){Dc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ci(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);xi=r,t.target.dispatchEvent(r),xi=null}else return n=Yr(t),n!==null&&xs(n),e.blockedOn=t,!1;n.shift()}return!0}function $a(e,n,t){_o(e)&&t.delete(n)}function Nm(){ki=!1,Wn!==null&&_o(Wn)&&(Wn=null),Fn!==null&&_o(Fn)&&(Fn=null),Bn!==null&&_o(Bn)&&(Bn=null),$r.forEach($a),Er.forEach($a)}function ir(e,n){e.blockedOn===n&&(e.blockedOn=null,ki||(ki=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Nm)))}function Ir(e){function n(o){return ir(o,e)}if(0<ao.length){ir(ao[0],e);for(var t=1;t<ao.length;t++){var r=ao[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Wn!==null&&ir(Wn,e),Fn!==null&&ir(Fn,e),Bn!==null&&ir(Bn,e),$r.forEach(n),Er.forEach(n),t=0;t<On.length;t++)r=On[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(t=On[0],t.blockedOn===null);)Wc(t),t.blockedOn===null&&On.shift()}var Dt=Rn.ReactCurrentBatchConfig,Fo=!0;function jm(e,n,t,r){var o=X,l=Dt.transition;Dt.transition=null;try{X=1,ws(e,n,t,r)}finally{X=o,Dt.transition=l}}function Lm(e,n,t,r){var o=X,l=Dt.transition;Dt.transition=null;try{X=4,ws(e,n,t,r)}finally{X=o,Dt.transition=l}}function ws(e,n,t,r){if(Fo){var o=Ci(e,n,t,r);if(o===null)Vl(e,n,r,Bo,t),Ma(e,r);else if(Im(o,e,n,t,r))r.stopPropagation();else if(Ma(e,r),n&4&&-1<Em.indexOf(e)){for(;o!==null;){var l=Yr(o);if(l!==null&&zc(l),l=Ci(e,n,t,r),l===null&&Vl(e,n,r,Bo,t),l===o)break;o=l}o!==null&&r.stopPropagation()}else Vl(e,n,r,null,t)}}var Bo=null;function Ci(e,n,t,r){if(Bo=null,e=hs(r),e=st(e),e!==null)if(n=vt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Mc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Bo=e,null}function Fc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bm()){case ys:return 1;case Nc:return 4;case Ho:case Pm:return 16;case jc:return 536870912;default:return 16}default:return 16}}var Dn=null,Ss=null,To=null;function Bc(){if(To)return To;var e,n=Ss,t=n.length,r,o="value"in Dn?Dn.value:Dn.textContent,l=o.length;for(e=0;e<t&&n[e]===o[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===o[l-r];r++);return To=o.slice(e,1<r?1-r:void 0)}function Ro(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function uo(){return!0}function Ea(){return!1}function qe(e){function n(t,r,o,l,i){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?uo:Ea,this.isPropagationStopped=Ea,this}return de(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),n}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=qe(qt),Kr=de({},qt,{view:0,detail:0}),Om=qe(Kr),zl,Dl,sr,cl=de({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(zl=e.screenX-sr.screenX,Dl=e.screenY-sr.screenY):Dl=zl=0,sr=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),Ia=qe(cl),zm=de({},cl,{dataTransfer:0}),Dm=qe(zm),Am=de({},Kr,{relatedTarget:0}),Al=qe(Am),Hm=de({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),Wm=qe(Hm),Fm=de({},qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bm=qe(Fm),Um=de({},qt,{data:0}),Na=qe(Um),Gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Km(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Qm[e])?!!n[e]:!1}function Ps(){return Km}var Ym=de({},Kr,{key:function(e){if(e.key){var n=Gm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qm=qe(Ym),Xm=de({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ja=qe(Xm),Jm=de({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),Zm=qe(Jm),eg=de({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ng=qe(eg),tg=de({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=qe(tg),og=[9,13,27,32],ks=kn&&"CompositionEvent"in window,wr=null;kn&&"documentMode"in document&&(wr=document.documentMode);var lg=kn&&"TextEvent"in window&&!wr,Uc=kn&&(!ks||wr&&8<wr&&11>=wr),La=" ",Oa=!1;function Gc(e,n){switch(e){case"keyup":return og.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ct=!1;function ig(e,n){switch(e){case"compositionend":return Vc(n);case"keypress":return n.which!==32?null:(Oa=!0,La);case"textInput":return e=n.data,e===La&&Oa?null:e;default:return null}}function sg(e,n){if(Ct)return e==="compositionend"||!ks&&Gc(e,n)?(e=Bc(),To=Ss=Dn=null,Ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Uc&&n.locale!=="ko"?null:n.data;default:return null}}var ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function za(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ag[e.type]:n==="textarea"}function Qc(e,n,t,r){kc(r),n=Uo(n,"onChange"),0<n.length&&(t=new bs("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Sr=null,Nr=null;function ug(e){od(e,0)}function dl(e){var n=Rt(e);if(yc(n))return e}function cg(e,n){if(e==="change")return n}var Kc=!1;if(kn){var Hl;if(kn){var Wl="oninput"in document;if(!Wl){var Da=document.createElement("div");Da.setAttribute("oninput","return;"),Wl=typeof Da.oninput=="function"}Hl=Wl}else Hl=!1;Kc=Hl&&(!document.documentMode||9<document.documentMode)}function Aa(){Sr&&(Sr.detachEvent("onpropertychange",Yc),Nr=Sr=null)}function Yc(e){if(e.propertyName==="value"&&dl(Nr)){var n=[];Qc(n,Nr,e,hs(e)),Rc(ug,n)}}function dg(e,n,t){e==="focusin"?(Aa(),Sr=n,Nr=t,Sr.attachEvent("onpropertychange",Yc)):e==="focusout"&&Aa()}function pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(Nr)}function fg(e,n){if(e==="click")return dl(n)}function mg(e,n){if(e==="input"||e==="change")return dl(n)}function gg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fn=typeof Object.is=="function"?Object.is:gg;function jr(e,n){if(fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!si.call(n,o)||!fn(e[o],n[o]))return!1}return!0}function Ha(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wa(e,n){var t=Ha(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ha(t)}}function qc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xc(){for(var e=window,n=zo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=zo(e.document)}return n}function Cs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function hg(e){var n=Xc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&qc(t.ownerDocument.documentElement,t)){if(r!==null&&Cs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Wa(t,l);var i=Wa(t,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yg=kn&&"documentMode"in document&&11>=document.documentMode,_t=null,_i=null,br=null,Ti=!1;function Fa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ti||_t==null||_t!==zo(r)||(r=_t,"selectionStart"in r&&Cs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&jr(br,r)||(br=r,r=Uo(_i,"onSelect"),0<r.length&&(n=new bs("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=_t)))}function co(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Tt={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Fl={},Jc={};kn&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete Tt.animationend.animation,delete Tt.animationiteration.animation,delete Tt.animationstart.animation),"TransitionEvent"in window||delete Tt.transitionend.transition);function pl(e){if(Fl[e])return Fl[e];if(!Tt[e])return e;var n=Tt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Jc)return Fl[e]=n[t];return e}var Zc=pl("animationend"),ed=pl("animationiteration"),nd=pl("animationstart"),td=pl("transitionend"),rd=new Map,Ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,n){rd.set(e,n),yt(n,[e])}for(var Bl=0;Bl<Ba.length;Bl++){var Ul=Ba[Bl],vg=Ul.toLowerCase(),xg=Ul[0].toUpperCase()+Ul.slice(1);Jn(vg,"on"+xg)}Jn(Zc,"onAnimationEnd");Jn(ed,"onAnimationIteration");Jn(nd,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(td,"onTransitionEnd");Wt("onMouseEnter",["mouseout","mouseover"]);Wt("onMouseLeave",["mouseout","mouseover"]);Wt("onPointerEnter",["pointerout","pointerover"]);Wt("onPointerLeave",["pointerout","pointerover"]);yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function Ua(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,vm(r,n,void 0,e),e.currentTarget=null}function od(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;Ua(o,s,u),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,u=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;Ua(o,s,u),l=a}}}if(Ao)throw e=bi,Ao=!1,bi=null,e}function ie(e,n){var t=n[Ii];t===void 0&&(t=n[Ii]=new Set);var r=e+"__bubble";t.has(r)||(ld(n,e,2,!1),t.add(r))}function Gl(e,n,t){var r=0;n&&(r|=4),ld(t,e,r,n)}var po="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[po]){e[po]=!0,pc.forEach(function(t){t!=="selectionchange"&&(wg.has(t)||Gl(t,!1,e),Gl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[po]||(n[po]=!0,Gl("selectionchange",!1,n))}}function ld(e,n,t,r){switch(Fc(n)){case 1:var o=jm;break;case 4:o=Lm;break;default:o=ws}t=o.bind(null,n,t,e),o=void 0,!Si||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Vl(e,n,t,r,o){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=st(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}Rc(function(){var u=l,p=hs(t),c=[];e:{var f=rd.get(e);if(f!==void 0){var v=bs,x=e;switch(e){case"keypress":if(Ro(t)===0)break e;case"keydown":case"keyup":v=qm;break;case"focusin":x="focus",v=Al;break;case"focusout":x="blur",v=Al;break;case"beforeblur":case"afterblur":v=Al;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Zm;break;case Zc:case ed:case nd:v=Wm;break;case td:v=ng;break;case"scroll":v=Om;break;case"wheel":v=rg;break;case"copy":case"cut":case"paste":v=Bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ja}var w=(n&4)!==0,b=!w&&e==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var m=u,h;m!==null;){h=m;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,g!==null&&(S=Mr(m,g),S!=null&&w.push(Or(m,S,h)))),b)break;m=m.return}0<w.length&&(f=new v(f,x,null,t,p),c.push({event:f,listeners:w}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&t!==xi&&(x=t.relatedTarget||t.fromElement)&&(st(x)||x[Cn]))break e;if((v||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=t.relatedTarget||t.toElement,v=u,x=x?st(x):null,x!==null&&(b=vt(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(w=Ia,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=ja,S="onPointerLeave",g="onPointerEnter",m="pointer"),b=v==null?f:Rt(v),h=x==null?f:Rt(x),f=new w(S,m+"leave",v,t,p),f.target=b,f.relatedTarget=h,S=null,st(p)===u&&(w=new w(g,m+"enter",x,t,p),w.target=h,w.relatedTarget=b,S=w),b=S,v&&x)n:{for(w=v,g=x,m=0,h=w;h;h=bt(h))m++;for(h=0,S=g;S;S=bt(S))h++;for(;0<m-h;)w=bt(w),m--;for(;0<h-m;)g=bt(g),h--;for(;m--;){if(w===g||g!==null&&w===g.alternate)break n;w=bt(w),g=bt(g)}w=null}else w=null;v!==null&&Ga(c,f,v,w,!1),x!==null&&b!==null&&Ga(c,b,x,w,!0)}}e:{if(f=u?Rt(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var P=cg;else if(za(f))if(Kc)P=mg;else{P=pg;var C=dg}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=fg);if(P&&(P=P(e,u))){Qc(c,P,t,p);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&mi(f,"number",f.value)}switch(C=u?Rt(u):window,e){case"focusin":(za(C)||C.contentEditable==="true")&&(_t=C,_i=u,br=null);break;case"focusout":br=_i=_t=null;break;case"mousedown":Ti=!0;break;case"contextmenu":case"mouseup":case"dragend":Ti=!1,Fa(c,t,p);break;case"selectionchange":if(yg)break;case"keydown":case"keyup":Fa(c,t,p)}var R;if(ks)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Ct?Gc(e,t)&&($="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&($="onCompositionStart");$&&(Uc&&t.locale!=="ko"&&(Ct||$!=="onCompositionStart"?$==="onCompositionEnd"&&Ct&&(R=Bc()):(Dn=p,Ss="value"in Dn?Dn.value:Dn.textContent,Ct=!0)),C=Uo(u,$),0<C.length&&($=new Na($,e,null,t,p),c.push({event:$,listeners:C}),R?$.data=R:(R=Vc(t),R!==null&&($.data=R)))),(R=lg?ig(e,t):sg(e,t))&&(u=Uo(u,"onBeforeInput"),0<u.length&&(p=new Na("onBeforeInput","beforeinput",null,t,p),c.push({event:p,listeners:u}),p.data=R))}od(c,n)})}function Or(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Uo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Mr(e,t),l!=null&&r.unshift(Or(e,l,o)),l=Mr(e,n),l!=null&&r.push(Or(e,l,o))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ga(e,n,t,r,o){for(var l=n._reactName,i=[];t!==null&&t!==r;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Mr(t,l),a!=null&&i.unshift(Or(t,a,s))):o||(a=Mr(t,l),a!=null&&i.push(Or(t,a,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Sg=/\r\n?/g,bg=/\u0000|\uFFFD/g;function Va(e){return(typeof e=="string"?e:""+e).replace(Sg,`
`).replace(bg,"")}function fo(e,n,t){if(n=Va(n),Va(e)!==n&&t)throw Error(k(425))}function Go(){}var Ri=null,Mi=null;function $i(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ei=typeof setTimeout=="function"?setTimeout:void 0,Pg=typeof clearTimeout=="function"?clearTimeout:void 0,Qa=typeof Promise=="function"?Promise:void 0,kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Qa<"u"?function(e){return Qa.resolve(null).then(e).catch(Cg)}:Ei;function Cg(e){setTimeout(function(){throw e})}function Ql(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Ir(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Ir(n)}function Un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ka(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Xt=Math.random().toString(36).slice(2),hn="__reactFiber$"+Xt,zr="__reactProps$"+Xt,Cn="__reactContainer$"+Xt,Ii="__reactEvents$"+Xt,_g="__reactListeners$"+Xt,Tg="__reactHandles$"+Xt;function st(e){var n=e[hn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Cn]||t[hn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ka(e);e!==null;){if(t=e[hn])return t;e=Ka(e)}return n}e=t,t=e.parentNode}return null}function Yr(e){return e=e[hn]||e[Cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function fl(e){return e[zr]||null}var Ni=[],Mt=-1;function Zn(e){return{current:e}}function se(e){0>Mt||(e.current=Ni[Mt],Ni[Mt]=null,Mt--)}function te(e,n){Mt++,Ni[Mt]=e.current,e.current=n}var Xn={},Ie=Zn(Xn),We=Zn(!1),pt=Xn;function Ft(e,n){var t=e.type.contextTypes;if(!t)return Xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in t)o[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function Vo(){se(We),se(Ie)}function Ya(e,n,t){if(Ie.current!==Xn)throw Error(k(168));te(Ie,n),te(We,t)}function id(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(k(108,dm(e)||"Unknown",o));return de({},t,r)}function Qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xn,pt=Ie.current,te(Ie,e),te(We,We.current),!0}function qa(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=id(e,n,pt),r.__reactInternalMemoizedMergedChildContext=e,se(We),se(Ie),te(Ie,e)):se(We),te(We,t)}var wn=null,ml=!1,Kl=!1;function sd(e){wn===null?wn=[e]:wn.push(e)}function Rg(e){ml=!0,sd(e)}function et(){if(!Kl&&wn!==null){Kl=!0;var e=0,n=X;try{var t=wn;for(X=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}wn=null,ml=!1}catch(o){throw wn!==null&&(wn=wn.slice(e+1)),Ic(ys,et),o}finally{X=n,Kl=!1}}return null}var $t=[],Et=0,Ko=null,Yo=0,Ze=[],en=0,ft=null,Sn=1,bn="";function lt(e,n){$t[Et++]=Yo,$t[Et++]=Ko,Ko=e,Yo=n}function ad(e,n,t){Ze[en++]=Sn,Ze[en++]=bn,Ze[en++]=ft,ft=e;var r=Sn;e=bn;var o=32-dn(r)-1;r&=~(1<<o),t+=1;var l=32-dn(n)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Sn=1<<32-dn(n)+o|t<<o|r,bn=l+e}else Sn=1<<l|t<<o|r,bn=e}function _s(e){e.return!==null&&(lt(e,1),ad(e,1,0))}function Ts(e){for(;e===Ko;)Ko=$t[--Et],$t[Et]=null,Yo=$t[--Et],$t[Et]=null;for(;e===ft;)ft=Ze[--en],Ze[en]=null,bn=Ze[--en],Ze[en]=null,Sn=Ze[--en],Ze[en]=null}var Qe=null,Ve=null,ae=!1,cn=null;function ud(e,n){var t=nn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Qe=e,Ve=Un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Qe=e,Ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ft!==null?{id:Sn,overflow:bn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=nn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Qe=e,Ve=null,!0):!1;default:return!1}}function ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Li(e){if(ae){var n=Ve;if(n){var t=n;if(!Xa(e,n)){if(ji(e))throw Error(k(418));n=Un(t.nextSibling);var r=Qe;n&&Xa(e,n)?ud(r,t):(e.flags=e.flags&-4097|2,ae=!1,Qe=e)}}else{if(ji(e))throw Error(k(418));e.flags=e.flags&-4097|2,ae=!1,Qe=e}}}function Ja(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function mo(e){if(e!==Qe)return!1;if(!ae)return Ja(e),ae=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!$i(e.type,e.memoizedProps)),n&&(n=Ve)){if(ji(e))throw cd(),Error(k(418));for(;n;)ud(e,n),n=Un(n.nextSibling)}if(Ja(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ve=Un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ve=null}}else Ve=Qe?Un(e.stateNode.nextSibling):null;return!0}function cd(){for(var e=Ve;e;)e=Un(e.nextSibling)}function Bt(){Ve=Qe=null,ae=!1}function Rs(e){cn===null?cn=[e]:cn.push(e)}var Mg=Rn.ReactCurrentBatchConfig;function ar(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var o=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function go(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Za(e){var n=e._init;return n(e._payload)}function dd(e){function n(g,m){if(e){var h=g.deletions;h===null?(g.deletions=[m],g.flags|=16):h.push(m)}}function t(g,m){if(!e)return null;for(;m!==null;)n(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=Kn(g,m),g.index=0,g.sibling=null,g}function l(g,m,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<m?(g.flags|=2,m):h):(g.flags|=2,m)):(g.flags|=1048576,m)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,h,S){return m===null||m.tag!==6?(m=ni(h,g.mode,S),m.return=g,m):(m=o(m,h),m.return=g,m)}function a(g,m,h,S){var P=h.type;return P===kt?p(g,m,h.props.children,S,h.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===jn&&Za(P)===m.type)?(S=o(m,h.props),S.ref=ar(g,m,h),S.return=g,S):(S=Lo(h.type,h.key,h.props,null,g.mode,S),S.ref=ar(g,m,h),S.return=g,S)}function u(g,m,h,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=ti(h,g.mode,S),m.return=g,m):(m=o(m,h.children||[]),m.return=g,m)}function p(g,m,h,S,P){return m===null||m.tag!==7?(m=dt(h,g.mode,S,P),m.return=g,m):(m=o(m,h),m.return=g,m)}function c(g,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ni(""+m,g.mode,h),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ro:return h=Lo(m.type,m.key,m.props,null,g.mode,h),h.ref=ar(g,null,m),h.return=g,h;case Pt:return m=ti(m,g.mode,h),m.return=g,m;case jn:var S=m._init;return c(g,S(m._payload),h)}if(fr(m)||rr(m))return m=dt(m,g.mode,h,null),m.return=g,m;go(g,m)}return null}function f(g,m,h,S){var P=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return P!==null?null:s(g,m,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ro:return h.key===P?a(g,m,h,S):null;case Pt:return h.key===P?u(g,m,h,S):null;case jn:return P=h._init,f(g,m,P(h._payload),S)}if(fr(h)||rr(h))return P!==null?null:p(g,m,h,S,null);go(g,h)}return null}function v(g,m,h,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(h)||null,s(m,g,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ro:return g=g.get(S.key===null?h:S.key)||null,a(m,g,S,P);case Pt:return g=g.get(S.key===null?h:S.key)||null,u(m,g,S,P);case jn:var C=S._init;return v(g,m,h,C(S._payload),P)}if(fr(S)||rr(S))return g=g.get(h)||null,p(m,g,S,P,null);go(m,S)}return null}function x(g,m,h,S){for(var P=null,C=null,R=m,$=m=0,A=null;R!==null&&$<h.length;$++){R.index>$?(A=R,R=null):A=R.sibling;var j=f(g,R,h[$],S);if(j===null){R===null&&(R=A);break}e&&R&&j.alternate===null&&n(g,R),m=l(j,m,$),C===null?P=j:C.sibling=j,C=j,R=A}if($===h.length)return t(g,R),ae&&lt(g,$),P;if(R===null){for(;$<h.length;$++)R=c(g,h[$],S),R!==null&&(m=l(R,m,$),C===null?P=R:C.sibling=R,C=R);return ae&&lt(g,$),P}for(R=r(g,R);$<h.length;$++)A=v(R,g,$,h[$],S),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?$:A.key),m=l(A,m,$),C===null?P=A:C.sibling=A,C=A);return e&&R.forEach(function(F){return n(g,F)}),ae&&lt(g,$),P}function w(g,m,h,S){var P=rr(h);if(typeof P!="function")throw Error(k(150));if(h=P.call(h),h==null)throw Error(k(151));for(var C=P=null,R=m,$=m=0,A=null,j=h.next();R!==null&&!j.done;$++,j=h.next()){R.index>$?(A=R,R=null):A=R.sibling;var F=f(g,R,j.value,S);if(F===null){R===null&&(R=A);break}e&&R&&F.alternate===null&&n(g,R),m=l(F,m,$),C===null?P=F:C.sibling=F,C=F,R=A}if(j.done)return t(g,R),ae&&lt(g,$),P;if(R===null){for(;!j.done;$++,j=h.next())j=c(g,j.value,S),j!==null&&(m=l(j,m,$),C===null?P=j:C.sibling=j,C=j);return ae&&lt(g,$),P}for(R=r(g,R);!j.done;$++,j=h.next())j=v(R,g,$,j.value,S),j!==null&&(e&&j.alternate!==null&&R.delete(j.key===null?$:j.key),m=l(j,m,$),C===null?P=j:C.sibling=j,C=j);return e&&R.forEach(function(K){return n(g,K)}),ae&&lt(g,$),P}function b(g,m,h,S){if(typeof h=="object"&&h!==null&&h.type===kt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ro:e:{for(var P=h.key,C=m;C!==null;){if(C.key===P){if(P=h.type,P===kt){if(C.tag===7){t(g,C.sibling),m=o(C,h.props.children),m.return=g,g=m;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===jn&&Za(P)===C.type){t(g,C.sibling),m=o(C,h.props),m.ref=ar(g,C,h),m.return=g,g=m;break e}t(g,C);break}else n(g,C);C=C.sibling}h.type===kt?(m=dt(h.props.children,g.mode,S,h.key),m.return=g,g=m):(S=Lo(h.type,h.key,h.props,null,g.mode,S),S.ref=ar(g,m,h),S.return=g,g=S)}return i(g);case Pt:e:{for(C=h.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){t(g,m.sibling),m=o(m,h.children||[]),m.return=g,g=m;break e}else{t(g,m);break}else n(g,m);m=m.sibling}m=ti(h,g.mode,S),m.return=g,g=m}return i(g);case jn:return C=h._init,b(g,m,C(h._payload),S)}if(fr(h))return x(g,m,h,S);if(rr(h))return w(g,m,h,S);go(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(t(g,m.sibling),m=o(m,h),m.return=g,g=m):(t(g,m),m=ni(h,g.mode,S),m.return=g,g=m),i(g)):t(g,m)}return b}var Ut=dd(!0),pd=dd(!1),qo=Zn(null),Xo=null,It=null,Ms=null;function $s(){Ms=It=Xo=null}function Es(e){var n=qo.current;se(qo),e._currentValue=n}function Oi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function At(e,n){Xo=e,Ms=It=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(He=!0),e.firstContext=null)}function rn(e){var n=e._currentValue;if(Ms!==e)if(e={context:e,memoizedValue:n,next:null},It===null){if(Xo===null)throw Error(k(308));It=e,Xo.dependencies={lanes:0,firstContext:e}}else It=It.next=e;return n}var at=null;function Is(e){at===null?at=[e]:at.push(e)}function fd(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Is(n)):(t.next=o.next,o.next=t),n.interleaved=t,_n(e,r)}function _n(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ln=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function md(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Gn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,_n(e,t)}return o=r.interleaved,o===null?(n.next=n,Is(r)):(n.next=o.next,o.next=n),r.interleaved=n,_n(e,t)}function Mo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vs(e,t)}}function eu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?o=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?o=l=n:l=l.next=n}else o=l=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Jo(e,n,t,r){var o=e.updateQueue;Ln=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,i===null?l=u:i.next=u,i=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==i&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(l!==null){var c=o.baseState;i=0,p=u=a=null,s=l;do{var f=s.lane,v=s.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(f=n,v=t,w.tag){case 1:if(x=w.payload,typeof x=="function"){c=x.call(v,c,f);break e}c=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,f=typeof x=="function"?x.call(v,c,f):x,f==null)break e;c=de({},c,f);break e;case 2:Ln=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else v={eventTime:v,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=v,a=c):p=p.next=v,i|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(p===null&&(a=c),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,n=o.shared.interleaved,n!==null){o=n;do i|=o.lane,o=o.next;while(o!==n)}else l===null&&(o.shared.lanes=0);gt|=i,e.lanes=i,e.memoizedState=c}}function nu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var qr={},vn=Zn(qr),Dr=Zn(qr),Ar=Zn(qr);function ut(e){if(e===qr)throw Error(k(174));return e}function js(e,n){switch(te(Ar,n),te(Dr,e),te(vn,qr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:hi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=hi(n,e)}se(vn),te(vn,n)}function Gt(){se(vn),se(Dr),se(Ar)}function gd(e){ut(Ar.current);var n=ut(vn.current),t=hi(n,e.type);n!==t&&(te(Dr,e),te(vn,t))}function Ls(e){Dr.current===e&&(se(vn),se(Dr))}var ue=Zn(0);function Zo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yl=[];function Os(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var $o=Rn.ReactCurrentDispatcher,ql=Rn.ReactCurrentBatchConfig,mt=0,ce=null,xe=null,be=null,el=!1,Pr=!1,Hr=0,$g=0;function Me(){throw Error(k(321))}function zs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!fn(e[t],n[t]))return!1;return!0}function Ds(e,n,t,r,o,l){if(mt=l,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,$o.current=e===null||e.memoizedState===null?jg:Lg,e=t(r,o),Pr){l=0;do{if(Pr=!1,Hr=0,25<=l)throw Error(k(301));l+=1,be=xe=null,n.updateQueue=null,$o.current=Og,e=t(r,o)}while(Pr)}if($o.current=nl,n=xe!==null&&xe.next!==null,mt=0,be=xe=ce=null,el=!1,n)throw Error(k(300));return e}function As(){var e=Hr!==0;return Hr=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ce.memoizedState=be=e:be=be.next=e,be}function on(){if(xe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var n=be===null?ce.memoizedState:be.next;if(n!==null)be=n,xe=e;else{if(e===null)throw Error(k(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},be===null?ce.memoizedState=be=e:be=be.next=e}return be}function Wr(e,n){return typeof n=="function"?n(e):n}function Xl(e){var n=on(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=xe,o=r.baseQueue,l=t.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,t.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,u=l;do{var p=u.lane;if((mt&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=c,i=r):a=a.next=c,ce.lanes|=p,gt|=p}u=u.next}while(u!==null&&u!==l);a===null?i=r:a.next=s,fn(r,n.memoizedState)||(He=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do l=o.lane,ce.lanes|=l,gt|=l,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Jl(e){var n=on(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,l=n.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);fn(l,n.memoizedState)||(He=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function hd(){}function yd(e,n){var t=ce,r=on(),o=n(),l=!fn(r.memoizedState,o);if(l&&(r.memoizedState=o,He=!0),r=r.queue,Hs(wd.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||be!==null&&be.memoizedState.tag&1){if(t.flags|=2048,Fr(9,xd.bind(null,t,r,o,n),void 0,null),Pe===null)throw Error(k(349));mt&30||vd(t,n,o)}return o}function vd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function xd(e,n,t,r){n.value=t,n.getSnapshot=r,Sd(n)&&bd(e)}function wd(e,n,t){return t(function(){Sd(n)&&bd(e)})}function Sd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!fn(e,t)}catch{return!0}}function bd(e){var n=_n(e,1);n!==null&&pn(n,e,1,-1)}function tu(e){var n=gn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},n.queue=e,e=e.dispatch=Ng.bind(null,ce,e),[n.memoizedState,e]}function Fr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Pd(){return on().memoizedState}function Eo(e,n,t,r){var o=gn();ce.flags|=e,o.memoizedState=Fr(1|n,t,void 0,r===void 0?null:r)}function gl(e,n,t,r){var o=on();r=r===void 0?null:r;var l=void 0;if(xe!==null){var i=xe.memoizedState;if(l=i.destroy,r!==null&&zs(r,i.deps)){o.memoizedState=Fr(n,t,l,r);return}}ce.flags|=e,o.memoizedState=Fr(1|n,t,l,r)}function ru(e,n){return Eo(8390656,8,e,n)}function Hs(e,n){return gl(2048,8,e,n)}function kd(e,n){return gl(4,2,e,n)}function Cd(e,n){return gl(4,4,e,n)}function _d(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Td(e,n,t){return t=t!=null?t.concat([e]):null,gl(4,4,_d.bind(null,n,e),t)}function Ws(){}function Rd(e,n){var t=on();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&zs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Md(e,n){var t=on();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&zs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function $d(e,n,t){return mt&21?(fn(t,n)||(t=Lc(),ce.lanes|=t,gt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=t)}function Eg(e,n){var t=X;X=t!==0&&4>t?t:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),n()}finally{X=t,ql.transition=r}}function Ed(){return on().memoizedState}function Ig(e,n,t){var r=Qn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Id(e))Nd(n,t);else if(t=fd(e,n,t,r),t!==null){var o=je();pn(t,e,r,o),jd(t,n,r)}}function Ng(e,n,t){var r=Qn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Id(e))Nd(n,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,s=l(i,t);if(o.hasEagerState=!0,o.eagerState=s,fn(s,i)){var a=n.interleaved;a===null?(o.next=o,Is(n)):(o.next=a.next,a.next=o),n.interleaved=o;return}}catch{}finally{}t=fd(e,n,o,r),t!==null&&(o=je(),pn(t,e,r,o),jd(t,n,r))}}function Id(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Nd(e,n){Pr=el=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function jd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vs(e,t)}}var nl={readContext:rn,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},jg={readContext:rn,useCallback:function(e,n){return gn().memoizedState=[e,n===void 0?null:n],e},useContext:rn,useEffect:ru,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Eo(4194308,4,_d.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Eo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Eo(4,2,e,n)},useMemo:function(e,n){var t=gn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=gn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Ig.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var n=gn();return e={current:e},n.memoizedState=e},useState:tu,useDebugValue:Ws,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=tu(!1),n=e[0];return e=Eg.bind(null,e[1]),gn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ce,o=gn();if(ae){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),Pe===null)throw Error(k(349));mt&30||vd(r,n,t)}o.memoizedState=t;var l={value:t,getSnapshot:n};return o.queue=l,ru(wd.bind(null,r,l,e),[e]),r.flags|=2048,Fr(9,xd.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=gn(),n=Pe.identifierPrefix;if(ae){var t=bn,r=Sn;t=(r&~(1<<32-dn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Hr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=$g++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Lg={readContext:rn,useCallback:Rd,useContext:rn,useEffect:Hs,useImperativeHandle:Td,useInsertionEffect:kd,useLayoutEffect:Cd,useMemo:Md,useReducer:Xl,useRef:Pd,useState:function(){return Xl(Wr)},useDebugValue:Ws,useDeferredValue:function(e){var n=on();return $d(n,xe.memoizedState,e)},useTransition:function(){var e=Xl(Wr)[0],n=on().memoizedState;return[e,n]},useMutableSource:hd,useSyncExternalStore:yd,useId:Ed,unstable_isNewReconciler:!1},Og={readContext:rn,useCallback:Rd,useContext:rn,useEffect:Hs,useImperativeHandle:Td,useInsertionEffect:kd,useLayoutEffect:Cd,useMemo:Md,useReducer:Jl,useRef:Pd,useState:function(){return Jl(Wr)},useDebugValue:Ws,useDeferredValue:function(e){var n=on();return xe===null?n.memoizedState=e:$d(n,xe.memoizedState,e)},useTransition:function(){var e=Jl(Wr)[0],n=on().memoizedState;return[e,n]},useMutableSource:hd,useSyncExternalStore:yd,useId:Ed,unstable_isNewReconciler:!1};function an(e,n){if(e&&e.defaultProps){n=de({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function zi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:de({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var hl={isMounted:function(e){return(e=e._reactInternals)?vt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=je(),o=Qn(e),l=Pn(r,o);l.payload=n,t!=null&&(l.callback=t),n=Gn(e,l,o),n!==null&&(pn(n,e,o,r),Mo(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=je(),o=Qn(e),l=Pn(r,o);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Gn(e,l,o),n!==null&&(pn(n,e,o,r),Mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=je(),r=Qn(e),o=Pn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Gn(e,o,r),n!==null&&(pn(n,e,r,t),Mo(n,e,r))}};function ou(e,n,t,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):n.prototype&&n.prototype.isPureReactComponent?!jr(t,r)||!jr(o,l):!0}function Ld(e,n,t){var r=!1,o=Xn,l=n.contextType;return typeof l=="object"&&l!==null?l=rn(l):(o=Fe(n)?pt:Ie.current,r=n.contextTypes,l=(r=r!=null)?Ft(e,o):Xn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=hl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),n}function lu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&hl.enqueueReplaceState(n,n.state,null)}function Di(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Ns(e);var l=n.contextType;typeof l=="object"&&l!==null?o.context=rn(l):(l=Fe(n)?pt:Ie.current,o.context=Ft(e,l)),o.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(zi(e,n,l,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&hl.enqueueReplaceState(o,o.state,null),Jo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Vt(e,n){try{var t="",r=n;do t+=cm(r),r=r.return;while(r);var o=t}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:o,digest:null}}function Zl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ai(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var zg=typeof WeakMap=="function"?WeakMap:Map;function Od(e,n,t){t=Pn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){rl||(rl=!0,Yi=r),Ai(e,n)},t}function zd(e,n,t){t=Pn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Ai(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Ai(e,n),typeof r!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function iu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new zg;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Xg.bind(null,e,n,t),n.then(e,e))}function su(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function au(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Pn(-1,1),n.tag=2,Gn(t,n,1))),t.lanes|=1),e)}var Dg=Rn.ReactCurrentOwner,He=!1;function Ne(e,n,t,r){n.child=e===null?pd(n,null,t,r):Ut(n,e.child,t,r)}function uu(e,n,t,r,o){t=t.render;var l=n.ref;return At(n,o),r=Ds(e,n,t,r,l,o),t=As(),e!==null&&!He?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Tn(e,n,o)):(ae&&t&&_s(n),n.flags|=1,Ne(e,n,r,o),n.child)}function cu(e,n,t,r,o){if(e===null){var l=t.type;return typeof l=="function"&&!Ys(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Dd(e,n,l,r,o)):(e=Lo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:jr,t(i,r)&&e.ref===n.ref)return Tn(e,n,o)}return n.flags|=1,e=Kn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Dd(e,n,t,r,o){if(e!==null){var l=e.memoizedProps;if(jr(l,r)&&e.ref===n.ref)if(He=!1,n.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(He=!0);else return n.lanes=e.lanes,Tn(e,n,o)}return Hi(e,n,t,r,o)}function Ad(e,n,t){var r=n.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(jt,Ge),Ge|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,te(jt,Ge),Ge|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,te(jt,Ge),Ge|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,te(jt,Ge),Ge|=r;return Ne(e,n,o,t),n.child}function Hd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Hi(e,n,t,r,o){var l=Fe(t)?pt:Ie.current;return l=Ft(n,l),At(n,o),t=Ds(e,n,t,r,l,o),r=As(),e!==null&&!He?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Tn(e,n,o)):(ae&&r&&_s(n),n.flags|=1,Ne(e,n,t,o),n.child)}function du(e,n,t,r,o){if(Fe(t)){var l=!0;Qo(n)}else l=!1;if(At(n,o),n.stateNode===null)Io(e,n),Ld(n,t,r),Di(n,t,r,o),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var a=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=Fe(t)?pt:Ie.current,u=Ft(n,u));var p=t.getDerivedStateFromProps,c=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";c||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==u)&&lu(n,i,r,u),Ln=!1;var f=n.memoizedState;i.state=f,Jo(n,r,i,o),a=n.memoizedState,s!==r||f!==a||We.current||Ln?(typeof p=="function"&&(zi(n,t,p,r),a=n.memoizedState),(s=Ln||ou(n,t,s,r,f,a,u))?(c||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),i.props=r,i.state=a,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,md(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:an(n.type,s),i.props=u,c=n.pendingProps,f=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=rn(a):(a=Fe(t)?pt:Ie.current,a=Ft(n,a));var v=t.getDerivedStateFromProps;(p=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==c||f!==a)&&lu(n,i,r,a),Ln=!1,f=n.memoizedState,i.state=f,Jo(n,r,i,o);var x=n.memoizedState;s!==c||f!==x||We.current||Ln?(typeof v=="function"&&(zi(n,t,v,r),x=n.memoizedState),(u=Ln||ou(n,t,u,r,f,x,a)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,a)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),i.props=r,i.state=x,i.context=a,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return Wi(e,n,t,r,l,o)}function Wi(e,n,t,r,o,l){Hd(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return o&&qa(n,t,!1),Tn(e,n,l);r=n.stateNode,Dg.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Ut(n,e.child,null,l),n.child=Ut(n,null,s,l)):Ne(e,n,s,l),n.memoizedState=r.state,o&&qa(n,t,!0),n.child}function Wd(e){var n=e.stateNode;n.pendingContext?Ya(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ya(e,n.context,!1),js(e,n.containerInfo)}function pu(e,n,t,r,o){return Bt(),Rs(o),n.flags|=256,Ne(e,n,t,r),n.child}var Fi={dehydrated:null,treeContext:null,retryLane:0};function Bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fd(e,n,t){var r=n.pendingProps,o=ue.current,l=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(ue,o&1),e===null)return Li(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,l?(r=n.mode,l=n.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=xl(i,r,0,null),e=dt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Bi(t),n.memoizedState=Fi,e):Fs(n,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Ag(e,n,i,r,s,o,t);if(l){l=r.fallback,i=n.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Kn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=Kn(s,l):(l=dt(l,i,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,i=e.child.memoizedState,i=i===null?Bi(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=Fi,r}return l=e.child,e=l.sibling,r=Kn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Fs(e,n){return n=xl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ho(e,n,t,r){return r!==null&&Rs(r),Ut(n,e.child,null,t),e=Fs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ag(e,n,t,r,o,l,i){if(t)return n.flags&256?(n.flags&=-257,r=Zl(Error(k(422))),ho(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,o=n.mode,r=xl({mode:"visible",children:r.children},o,0,null),l=dt(l,o,i,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Ut(n,e.child,null,i),n.child.memoizedState=Bi(i),n.memoizedState=Fi,l);if(!(n.mode&1))return ho(e,n,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(k(419)),r=Zl(l,r,void 0),ho(e,n,i,r)}if(s=(i&e.childLanes)!==0,He||s){if(r=Pe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,_n(e,o),pn(r,e,o,-1))}return Ks(),r=Zl(Error(k(421))),ho(e,n,i,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Jg.bind(null,e),o._reactRetry=n,null):(e=l.treeContext,Ve=Un(o.nextSibling),Qe=n,ae=!0,cn=null,e!==null&&(Ze[en++]=Sn,Ze[en++]=bn,Ze[en++]=ft,Sn=e.id,bn=e.overflow,ft=n),n=Fs(n,r.children),n.flags|=4096,n)}function fu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Oi(e.return,n,t)}function ei(e,n,t,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=o)}function Bd(e,n,t){var r=n.pendingProps,o=r.revealOrder,l=r.tail;if(Ne(e,n,r.children,t),r=ue.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fu(e,t,n);else if(e.tag===19)fu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ue,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Zo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ei(n,!1,o,t,l);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Zo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ei(n,!0,t,null,l);break;case"together":ei(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Io(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),gt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Hg(e,n,t){switch(n.tag){case 3:Wd(n),Bt();break;case 5:gd(n);break;case 1:Fe(n.type)&&Qo(n);break;case 4:js(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;te(qo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(te(ue,ue.current&1),n.flags|=128,null):t&n.child.childLanes?Fd(e,n,t):(te(ue,ue.current&1),e=Tn(e,n,t),e!==null?e.sibling:null);te(ue,ue.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Bd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(ue,ue.current),r)break;return null;case 22:case 23:return n.lanes=0,Ad(e,n,t)}return Tn(e,n,t)}var Ud,Ui,Gd,Vd;Ud=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ui=function(){};Gd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,ut(vn.current);var l=null;switch(t){case"input":o=pi(e,o),r=pi(e,r),l=[];break;case"select":o=de({},o,{value:void 0}),r=de({},r,{value:void 0}),l=[];break;case"textarea":o=gi(e,o),r=gi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}yi(t,r);var i;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(l||(l=[]),l.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ie("scroll",e),l||s===a||(l=[])):(l=l||[]).push(u,a))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};Vd=function(e,n,t,r){t!==r&&(n.flags|=4)};function ur(e,n){if(!ae)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Wg(e,n,t){var r=n.pendingProps;switch(Ts(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return Fe(n.type)&&Vo(),$e(n),null;case 3:return r=n.stateNode,Gt(),se(We),se(Ie),Os(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,cn!==null&&(Ji(cn),cn=null))),Ui(e,n),$e(n),null;case 5:Ls(n);var o=ut(Ar.current);if(t=n.type,e!==null&&n.stateNode!=null)Gd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return $e(n),null}if(e=ut(vn.current),mo(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[hn]=n,r[zr]=l,e=(n.mode&1)!==0,t){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(o=0;o<gr.length;o++)ie(gr[o],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":ba(r,l),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ie("invalid",r);break;case"textarea":ka(r,l),ie("invalid",r)}yi(t,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&fo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&fo(r.textContent,s,e),o=["children",""+s]):Tr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&ie("scroll",r)}switch(t){case"input":oo(r),Pa(r,l,!0);break;case"textarea":oo(r),Ca(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Go)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[hn]=n,e[zr]=r,Ud(e,n,!1,!1),n.stateNode=e;e:{switch(i=vi(t,r),t){case"dialog":ie("cancel",e),ie("close",e),o=r;break;case"iframe":case"object":case"embed":ie("load",e),o=r;break;case"video":case"audio":for(o=0;o<gr.length;o++)ie(gr[o],e);o=r;break;case"source":ie("error",e),o=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),o=r;break;case"details":ie("toggle",e),o=r;break;case"input":ba(e,r),o=pi(e,r),ie("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=de({},r,{value:void 0}),ie("invalid",e);break;case"textarea":ka(e,r),o=gi(e,r),ie("invalid",e);break;default:o=r}yi(t,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Pc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Sc(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Rr(e,a):typeof a=="number"&&Rr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Tr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&ie("scroll",e):a!=null&&ps(e,l,a,i))}switch(t){case"input":oo(e),Pa(e,r,!1);break;case"textarea":oo(e),Ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Lt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Lt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Go)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return $e(n),null;case 6:if(e&&n.stateNode!=null)Vd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=ut(Ar.current),ut(vn.current),mo(n)){if(r=n.stateNode,t=n.memoizedProps,r[hn]=n,(l=r.nodeValue!==t)&&(e=Qe,e!==null))switch(e.tag){case 3:fo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[hn]=n,n.stateNode=r}return $e(n),null;case 13:if(se(ue),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ve!==null&&n.mode&1&&!(n.flags&128))cd(),Bt(),n.flags|=98560,l=!1;else if(l=mo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[hn]=n}else Bt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;$e(n),l=!1}else cn!==null&&(Ji(cn),cn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ue.current&1?we===0&&(we=3):Ks())),n.updateQueue!==null&&(n.flags|=4),$e(n),null);case 4:return Gt(),Ui(e,n),e===null&&Lr(n.stateNode.containerInfo),$e(n),null;case 10:return Es(n.type._context),$e(n),null;case 17:return Fe(n.type)&&Vo(),$e(n),null;case 19:if(se(ue),l=n.memoizedState,l===null)return $e(n),null;if(r=(n.flags&128)!==0,i=l.rendering,i===null)if(r)ur(l,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Zo(e),i!==null){for(n.flags|=128,ur(l,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return te(ue,ue.current&1|2),n.child}e=e.sibling}l.tail!==null&&me()>Qt&&(n.flags|=128,r=!0,ur(l,!1),n.lanes=4194304)}else{if(!r)if(e=Zo(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ur(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ae)return $e(n),null}else 2*me()-l.renderingStartTime>Qt&&t!==1073741824&&(n.flags|=128,r=!0,ur(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=me(),n.sibling=null,t=ue.current,te(ue,r?t&1|2:t&1),n):($e(n),null);case 22:case 23:return Qs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ge&1073741824&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Fg(e,n){switch(Ts(n),n.tag){case 1:return Fe(n.type)&&Vo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gt(),se(We),se(Ie),Os(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ls(n),null;case 13:if(se(ue),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Bt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return se(ue),null;case 4:return Gt(),null;case 10:return Es(n.type._context),null;case 22:case 23:return Qs(),null;case 24:return null;default:return null}}var yo=!1,Ee=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,I=null;function Nt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){pe(e,n,r)}else t.current=null}function Gi(e,n,t){try{t()}catch(r){pe(e,n,r)}}var mu=!1;function Ug(e,n){if(Ri=Fo,e=Xc(),Cs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,s=-1,a=-1,u=0,p=0,c=e,f=null;n:for(;;){for(var v;c!==t||o!==0&&c.nodeType!==3||(s=i+o),c!==l||r!==0&&c.nodeType!==3||(a=i+r),c.nodeType===3&&(i+=c.nodeValue.length),(v=c.firstChild)!==null;)f=c,c=v;for(;;){if(c===e)break n;if(f===t&&++u===o&&(s=i),f===l&&++p===r&&(a=i),(v=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=v}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Mi={focusedElem:e,selectionRange:t},Fo=!1,I=n;I!==null;)if(n=I,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,I=e;else for(;I!==null;){n=I;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,b=x.memoizedState,g=n.stateNode,m=g.getSnapshotBeforeUpdate(n.elementType===n.type?w:an(n.type,w),b);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(S){pe(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,I=e;break}I=n.return}return x=mu,mu=!1,x}function kr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Gi(n,t,l)}o=o.next}while(o!==r)}}function yl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Vi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Qd(e){var n=e.alternate;n!==null&&(e.alternate=null,Qd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[hn],delete n[zr],delete n[Ii],delete n[_g],delete n[Tg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kd(e){return e.tag===5||e.tag===3||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(Qi(e,n,t),e=e.sibling;e!==null;)Qi(e,n,t),e=e.sibling}function Ki(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ki(e,n,t),e=e.sibling;e!==null;)Ki(e,n,t),e=e.sibling}var Ce=null,un=!1;function Nn(e,n,t){for(t=t.child;t!==null;)Yd(e,n,t),t=t.sibling}function Yd(e,n,t){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(ul,t)}catch{}switch(t.tag){case 5:Ee||Nt(t,n);case 6:var r=Ce,o=un;Ce=null,Nn(e,n,t),Ce=r,un=o,Ce!==null&&(un?(e=Ce,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ce.removeChild(t.stateNode));break;case 18:Ce!==null&&(un?(e=Ce,t=t.stateNode,e.nodeType===8?Ql(e.parentNode,t):e.nodeType===1&&Ql(e,t),Ir(e)):Ql(Ce,t.stateNode));break;case 4:r=Ce,o=un,Ce=t.stateNode.containerInfo,un=!0,Nn(e,n,t),Ce=r,un=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Gi(t,n,i),o=o.next}while(o!==r)}Nn(e,n,t);break;case 1:if(!Ee&&(Nt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){pe(t,n,s)}Nn(e,n,t);break;case 21:Nn(e,n,t);break;case 22:t.mode&1?(Ee=(r=Ee)||t.memoizedState!==null,Nn(e,n,t),Ee=r):Nn(e,n,t);break;default:Nn(e,n,t)}}function hu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Bg),n.forEach(function(r){var o=Zg.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function sn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var l=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ce=s.stateNode,un=!1;break e;case 3:Ce=s.stateNode.containerInfo,un=!0;break e;case 4:Ce=s.stateNode.containerInfo,un=!0;break e}s=s.return}if(Ce===null)throw Error(k(160));Yd(l,i,o),Ce=null,un=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){pe(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)qd(n,e),n=n.sibling}function qd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sn(n,e),mn(e),r&4){try{kr(3,e,e.return),yl(3,e)}catch(w){pe(e,e.return,w)}try{kr(5,e,e.return)}catch(w){pe(e,e.return,w)}}break;case 1:sn(n,e),mn(e),r&512&&t!==null&&Nt(t,t.return);break;case 5:if(sn(n,e),mn(e),r&512&&t!==null&&Nt(t,t.return),e.flags&32){var o=e.stateNode;try{Rr(o,"")}catch(w){pe(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&vc(o,l),vi(s,i);var u=vi(s,l);for(i=0;i<a.length;i+=2){var p=a[i],c=a[i+1];p==="style"?Pc(o,c):p==="dangerouslySetInnerHTML"?Sc(o,c):p==="children"?Rr(o,c):ps(o,p,c,u)}switch(s){case"input":fi(o,l);break;case"textarea":xc(o,l);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?Lt(o,!!l.multiple,v,!1):f!==!!l.multiple&&(l.defaultValue!=null?Lt(o,!!l.multiple,l.defaultValue,!0):Lt(o,!!l.multiple,l.multiple?[]:"",!1))}o[zr]=l}catch(w){pe(e,e.return,w)}}break;case 6:if(sn(n,e),mn(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(w){pe(e,e.return,w)}}break;case 3:if(sn(n,e),mn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ir(n.containerInfo)}catch(w){pe(e,e.return,w)}break;case 4:sn(n,e),mn(e);break;case 13:sn(n,e),mn(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Gs=me())),r&4&&hu(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||p,sn(n,e),Ee=u):sn(n,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(I=e,p=e.child;p!==null;){for(c=I=p;I!==null;){switch(f=I,v=f.child,f.tag){case 0:case 11:case 14:case 15:kr(4,f,f.return);break;case 1:Nt(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(w){pe(r,t,w)}}break;case 5:Nt(f,f.return);break;case 22:if(f.memoizedState!==null){vu(c);continue}}v!==null?(v.return=f,I=v):vu(c)}p=p.sibling}e:for(p=null,c=e;;){if(c.tag===5){if(p===null){p=c;try{o=c.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=c.stateNode,a=c.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=bc("display",i))}catch(w){pe(e,e.return,w)}}}else if(c.tag===6){if(p===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){pe(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;p===c&&(p=null),c=c.return}p===c&&(p=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:sn(n,e),mn(e),r&4&&hu(e);break;case 21:break;default:sn(n,e),mn(e)}}function mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Kd(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Rr(o,""),r.flags&=-33);var l=gu(e);Ki(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=gu(e);Qi(e,s,i);break;default:throw Error(k(161))}}catch(a){pe(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gg(e,n,t){I=e,Xd(e)}function Xd(e,n,t){for(var r=(e.mode&1)!==0;I!==null;){var o=I,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||yo;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Ee;s=yo;var u=Ee;if(yo=i,(Ee=a)&&!u)for(I=o;I!==null;)i=I,a=i.child,i.tag===22&&i.memoizedState!==null?xu(o):a!==null?(a.return=i,I=a):xu(o);for(;l!==null;)I=l,Xd(l),l=l.sibling;I=o,yo=s,Ee=u}yu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,I=l):yu(e)}}function yu(e){for(;I!==null;){var n=I;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ee||yl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ee)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:an(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&nu(n,l,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}nu(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var c=p.dehydrated;c!==null&&Ir(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ee||n.flags&512&&Vi(n)}catch(f){pe(n,n.return,f)}}if(n===e){I=null;break}if(t=n.sibling,t!==null){t.return=n.return,I=t;break}I=n.return}}function vu(e){for(;I!==null;){var n=I;if(n===e){I=null;break}var t=n.sibling;if(t!==null){t.return=n.return,I=t;break}I=n.return}}function xu(e){for(;I!==null;){var n=I;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{yl(4,n)}catch(a){pe(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(a){pe(n,o,a)}}var l=n.return;try{Vi(n)}catch(a){pe(n,l,a)}break;case 5:var i=n.return;try{Vi(n)}catch(a){pe(n,i,a)}}}catch(a){pe(n,n.return,a)}if(n===e){I=null;break}var s=n.sibling;if(s!==null){s.return=n.return,I=s;break}I=n.return}}var Vg=Math.ceil,tl=Rn.ReactCurrentDispatcher,Bs=Rn.ReactCurrentOwner,tn=Rn.ReactCurrentBatchConfig,Y=0,Pe=null,ye=null,_e=0,Ge=0,jt=Zn(0),we=0,Br=null,gt=0,vl=0,Us=0,Cr=null,Ae=null,Gs=0,Qt=1/0,xn=null,rl=!1,Yi=null,Vn=null,vo=!1,An=null,ol=0,_r=0,qi=null,No=-1,jo=0;function je(){return Y&6?me():No!==-1?No:No=me()}function Qn(e){return e.mode&1?Y&2&&_e!==0?_e&-_e:Mg.transition!==null?(jo===0&&(jo=Lc()),jo):(e=X,e!==0||(e=window.event,e=e===void 0?16:Fc(e.type)),e):1}function pn(e,n,t,r){if(50<_r)throw _r=0,qi=null,Error(k(185));Qr(e,t,r),(!(Y&2)||e!==Pe)&&(e===Pe&&(!(Y&2)&&(vl|=t),we===4&&zn(e,_e)),Be(e,r),t===1&&Y===0&&!(n.mode&1)&&(Qt=me()+500,ml&&et()))}function Be(e,n){var t=e.callbackNode;Mm(e,n);var r=Wo(e,e===Pe?_e:0);if(r===0)t!==null&&Ra(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ra(t),n===1)e.tag===0?Rg(wu.bind(null,e)):sd(wu.bind(null,e)),kg(function(){!(Y&6)&&et()}),t=null;else{switch(Oc(r)){case 1:t=ys;break;case 4:t=Nc;break;case 16:t=Ho;break;case 536870912:t=jc;break;default:t=Ho}t=lp(t,Jd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Jd(e,n){if(No=-1,jo=0,Y&6)throw Error(k(327));var t=e.callbackNode;if(Ht()&&e.callbackNode!==t)return null;var r=Wo(e,e===Pe?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ll(e,r);else{n=r;var o=Y;Y|=2;var l=ep();(Pe!==e||_e!==n)&&(xn=null,Qt=me()+500,ct(e,n));do try{Yg();break}catch(s){Zd(e,s)}while(!0);$s(),tl.current=l,Y=o,ye!==null?n=0:(Pe=null,_e=0,n=we)}if(n!==0){if(n===2&&(o=Pi(e),o!==0&&(r=o,n=Xi(e,o))),n===1)throw t=Br,ct(e,0),zn(e,r),Be(e,me()),t;if(n===6)zn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Qg(o)&&(n=ll(e,r),n===2&&(l=Pi(e),l!==0&&(r=l,n=Xi(e,l))),n===1))throw t=Br,ct(e,0),zn(e,r),Be(e,me()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:it(e,Ae,xn);break;case 3:if(zn(e,r),(r&130023424)===r&&(n=Gs+500-me(),10<n)){if(Wo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ei(it.bind(null,e,Ae,xn),n);break}it(e,Ae,xn);break;case 4:if(zn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var i=31-dn(r);l=1<<i,i=n[i],i>o&&(o=i),r&=~l}if(r=o,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vg(r/1960))-r,10<r){e.timeoutHandle=Ei(it.bind(null,e,Ae,xn),r);break}it(e,Ae,xn);break;case 5:it(e,Ae,xn);break;default:throw Error(k(329))}}}return Be(e,me()),e.callbackNode===t?Jd.bind(null,e):null}function Xi(e,n){var t=Cr;return e.current.memoizedState.isDehydrated&&(ct(e,n).flags|=256),e=ll(e,n),e!==2&&(n=Ae,Ae=t,n!==null&&Ji(n)),e}function Ji(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Qg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],l=o.getSnapshot;o=o.value;try{if(!fn(l(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function zn(e,n){for(n&=~Us,n&=~vl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-dn(n),r=1<<t;e[t]=-1,n&=~r}}function wu(e){if(Y&6)throw Error(k(327));Ht();var n=Wo(e,0);if(!(n&1))return Be(e,me()),null;var t=ll(e,n);if(e.tag!==0&&t===2){var r=Pi(e);r!==0&&(n=r,t=Xi(e,r))}if(t===1)throw t=Br,ct(e,0),zn(e,n),Be(e,me()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,it(e,Ae,xn),Be(e,me()),null}function Vs(e,n){var t=Y;Y|=1;try{return e(n)}finally{Y=t,Y===0&&(Qt=me()+500,ml&&et())}}function ht(e){An!==null&&An.tag===0&&!(Y&6)&&Ht();var n=Y;Y|=1;var t=tn.transition,r=X;try{if(tn.transition=null,X=1,e)return e()}finally{X=r,tn.transition=t,Y=n,!(Y&6)&&et()}}function Qs(){Ge=jt.current,se(jt)}function ct(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Pg(t)),ye!==null)for(t=ye.return;t!==null;){var r=t;switch(Ts(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vo();break;case 3:Gt(),se(We),se(Ie),Os();break;case 5:Ls(r);break;case 4:Gt();break;case 13:se(ue);break;case 19:se(ue);break;case 10:Es(r.type._context);break;case 22:case 23:Qs()}t=t.return}if(Pe=e,ye=e=Kn(e.current,null),_e=Ge=n,we=0,Br=null,Us=vl=gt=0,Ae=Cr=null,at!==null){for(n=0;n<at.length;n++)if(t=at[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,l=t.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}t.pending=r}at=null}return e}function Zd(e,n){do{var t=ye;try{if($s(),$o.current=nl,el){for(var r=ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}el=!1}if(mt=0,be=xe=ce=null,Pr=!1,Hr=0,Bs.current=null,t===null||t.return===null){we=1,Br=n,ye=null;break}e:{var l=e,i=t.return,s=t,a=n;if(n=_e,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,c=p.tag;if(!(p.mode&1)&&(c===0||c===11||c===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=su(i);if(v!==null){v.flags&=-257,au(v,i,s,l,n),v.mode&1&&iu(l,u,n),n=v,a=u;var x=n.updateQueue;if(x===null){var w=new Set;w.add(a),n.updateQueue=w}else x.add(a);break e}else{if(!(n&1)){iu(l,u,n),Ks();break e}a=Error(k(426))}}else if(ae&&s.mode&1){var b=su(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),au(b,i,s,l,n),Rs(Vt(a,s));break e}}l=a=Vt(a,s),we!==4&&(we=2),Cr===null?Cr=[l]:Cr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var g=Od(l,a,n);eu(l,g);break e;case 1:s=a;var m=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Vn===null||!Vn.has(h)))){l.flags|=65536,n&=-n,l.lanes|=n;var S=zd(l,s,n);eu(l,S);break e}}l=l.return}while(l!==null)}tp(t)}catch(P){n=P,ye===t&&t!==null&&(ye=t=t.return);continue}break}while(!0)}function ep(){var e=tl.current;return tl.current=nl,e===null?nl:e}function Ks(){(we===0||we===3||we===2)&&(we=4),Pe===null||!(gt&268435455)&&!(vl&268435455)||zn(Pe,_e)}function ll(e,n){var t=Y;Y|=2;var r=ep();(Pe!==e||_e!==n)&&(xn=null,ct(e,n));do try{Kg();break}catch(o){Zd(e,o)}while(!0);if($s(),Y=t,tl.current=r,ye!==null)throw Error(k(261));return Pe=null,_e=0,we}function Kg(){for(;ye!==null;)np(ye)}function Yg(){for(;ye!==null&&!wm();)np(ye)}function np(e){var n=op(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,n===null?tp(e):ye=n,Bs.current=null}function tp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Fg(t,n),t!==null){t.flags&=32767,ye=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ye=null;return}}else if(t=Wg(t,n,Ge),t!==null){ye=t;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);we===0&&(we=5)}function it(e,n,t){var r=X,o=tn.transition;try{tn.transition=null,X=1,qg(e,n,t,r)}finally{tn.transition=o,X=r}return null}function qg(e,n,t,r){do Ht();while(An!==null);if(Y&6)throw Error(k(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if($m(e,l),e===Pe&&(ye=Pe=null,_e=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||vo||(vo=!0,lp(Ho,function(){return Ht(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=tn.transition,tn.transition=null;var i=X;X=1;var s=Y;Y|=4,Bs.current=null,Ug(e,t),qd(t,e),hg(Mi),Fo=!!Ri,Mi=Ri=null,e.current=t,Gg(t),Sm(),Y=s,X=i,tn.transition=l}else e.current=t;if(vo&&(vo=!1,An=e,ol=o),l=e.pendingLanes,l===0&&(Vn=null),km(t.stateNode),Be(e,me()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(rl)throw rl=!1,e=Yi,Yi=null,e;return ol&1&&e.tag!==0&&Ht(),l=e.pendingLanes,l&1?e===qi?_r++:(_r=0,qi=e):_r=0,et(),null}function Ht(){if(An!==null){var e=Oc(ol),n=tn.transition,t=X;try{if(tn.transition=null,X=16>e?16:e,An===null)var r=!1;else{if(e=An,An=null,ol=0,Y&6)throw Error(k(331));var o=Y;for(Y|=4,I=e.current;I!==null;){var l=I,i=l.child;if(I.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(I=u;I!==null;){var p=I;switch(p.tag){case 0:case 11:case 15:kr(8,p,l)}var c=p.child;if(c!==null)c.return=p,I=c;else for(;I!==null;){p=I;var f=p.sibling,v=p.return;if(Qd(p),p===u){I=null;break}if(f!==null){f.return=v,I=f;break}I=v}}}var x=l.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}I=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,I=i;else e:for(;I!==null;){if(l=I,l.flags&2048)switch(l.tag){case 0:case 11:case 15:kr(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,I=g;break e}I=l.return}}var m=e.current;for(I=m;I!==null;){i=I;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,I=h;else e:for(i=m;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:yl(9,s)}}catch(P){pe(s,s.return,P)}if(s===i){I=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,I=S;break e}I=s.return}}if(Y=o,et(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(ul,e)}catch{}r=!0}return r}finally{X=t,tn.transition=n}}return!1}function Su(e,n,t){n=Vt(t,n),n=Od(e,n,1),e=Gn(e,n,1),n=je(),e!==null&&(Qr(e,1,n),Be(e,n))}function pe(e,n,t){if(e.tag===3)Su(e,e,t);else for(;n!==null;){if(n.tag===3){Su(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))){e=Vt(t,e),e=zd(n,e,1),n=Gn(n,e,1),e=je(),n!==null&&(Qr(n,1,e),Be(n,e));break}}n=n.return}}function Xg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=je(),e.pingedLanes|=e.suspendedLanes&t,Pe===e&&(_e&t)===t&&(we===4||we===3&&(_e&130023424)===_e&&500>me()-Gs?ct(e,0):Us|=t),Be(e,n)}function rp(e,n){n===0&&(e.mode&1?(n=so,so<<=1,!(so&130023424)&&(so=4194304)):n=1);var t=je();e=_n(e,n),e!==null&&(Qr(e,n,t),Be(e,t))}function Jg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),rp(e,t)}function Zg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),rp(e,t)}var op;op=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||We.current)He=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return He=!1,Hg(e,n,t);He=!!(e.flags&131072)}else He=!1,ae&&n.flags&1048576&&ad(n,Yo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Io(e,n),e=n.pendingProps;var o=Ft(n,Ie.current);At(n,t),o=Ds(null,n,r,e,o,t);var l=As();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Fe(r)?(l=!0,Qo(n)):l=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ns(n),o.updater=hl,n.stateNode=o,o._reactInternals=n,Di(n,r,e,t),n=Wi(null,n,r,!0,l,t)):(n.tag=0,ae&&l&&_s(n),Ne(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Io(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=nh(r),e=an(r,e),o){case 0:n=Hi(null,n,r,e,t);break e;case 1:n=du(null,n,r,e,t);break e;case 11:n=uu(null,n,r,e,t);break e;case 14:n=cu(null,n,r,an(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:an(r,o),Hi(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:an(r,o),du(e,n,r,o,t);case 3:e:{if(Wd(n),e===null)throw Error(k(387));r=n.pendingProps,l=n.memoizedState,o=l.element,md(e,n),Jo(n,r,null,t);var i=n.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){o=Vt(Error(k(423)),n),n=pu(e,n,r,t,o);break e}else if(r!==o){o=Vt(Error(k(424)),n),n=pu(e,n,r,t,o);break e}else for(Ve=Un(n.stateNode.containerInfo.firstChild),Qe=n,ae=!0,cn=null,t=pd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Bt(),r===o){n=Tn(e,n,t);break e}Ne(e,n,r,t)}n=n.child}return n;case 5:return gd(n),e===null&&Li(n),r=n.type,o=n.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,$i(r,o)?i=null:l!==null&&$i(r,l)&&(n.flags|=32),Hd(e,n),Ne(e,n,i,t),n.child;case 6:return e===null&&Li(n),null;case 13:return Fd(e,n,t);case 4:return js(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ut(n,null,r,t):Ne(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:an(r,o),uu(e,n,r,o,t);case 7:return Ne(e,n,n.pendingProps,t),n.child;case 8:return Ne(e,n,n.pendingProps.children,t),n.child;case 12:return Ne(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,l=n.memoizedProps,i=o.value,te(qo,r._currentValue),r._currentValue=i,l!==null)if(fn(l.value,i)){if(l.children===o.children&&!We.current){n=Tn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Pn(-1,t&-t),a.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Oi(l.return,t,n),s.lanes|=t;break}a=a.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(k(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Oi(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Ne(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,At(n,t),o=rn(o),r=r(o),n.flags|=1,Ne(e,n,r,t),n.child;case 14:return r=n.type,o=an(r,n.pendingProps),o=an(r.type,o),cu(e,n,r,o,t);case 15:return Dd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:an(r,o),Io(e,n),n.tag=1,Fe(r)?(e=!0,Qo(n)):e=!1,At(n,t),Ld(n,r,o),Di(n,r,o,t),Wi(null,n,r,!0,e,t);case 19:return Bd(e,n,t);case 22:return Ad(e,n,t)}throw Error(k(156,n.tag))};function lp(e,n){return Ic(e,n)}function eh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(e,n,t,r){return new eh(e,n,t,r)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nh(e){if(typeof e=="function")return Ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ms)return 11;if(e===gs)return 14}return 2}function Kn(e,n){var t=e.alternate;return t===null?(t=nn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Lo(e,n,t,r,o,l){var i=2;if(r=e,typeof e=="function")Ys(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case kt:return dt(t.children,o,l,n);case fs:i=8,o|=8;break;case ai:return e=nn(12,t,n,o|2),e.elementType=ai,e.lanes=l,e;case ui:return e=nn(13,t,n,o),e.elementType=ui,e.lanes=l,e;case ci:return e=nn(19,t,n,o),e.elementType=ci,e.lanes=l,e;case gc:return xl(t,o,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fc:i=10;break e;case mc:i=9;break e;case ms:i=11;break e;case gs:i=14;break e;case jn:i=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=nn(i,t,n,o),n.elementType=e,n.type=r,n.lanes=l,n}function dt(e,n,t,r){return e=nn(7,e,r,n),e.lanes=t,e}function xl(e,n,t,r){return e=nn(22,e,r,n),e.elementType=gc,e.lanes=t,e.stateNode={isHidden:!1},e}function ni(e,n,t){return e=nn(6,e,null,n),e.lanes=t,e}function ti(e,n,t){return n=nn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function th(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ol(0),this.expirationTimes=Ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ol(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qs(e,n,t,r,o,l,i,s,a){return e=new th(e,n,t,s,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=nn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ns(l),e}function rh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ip(e){if(!e)return Xn;e=e._reactInternals;e:{if(vt(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Fe(t))return id(e,t,n)}return n}function sp(e,n,t,r,o,l,i,s,a){return e=qs(t,r,!0,e,o,l,i,s,a),e.context=ip(null),t=e.current,r=je(),o=Qn(t),l=Pn(r,o),l.callback=n??null,Gn(t,l,o),e.current.lanes=o,Qr(e,o,r),Be(e,r),e}function wl(e,n,t,r){var o=n.current,l=je(),i=Qn(o);return t=ip(t),n.context===null?n.context=t:n.pendingContext=t,n=Pn(l,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Gn(o,n,i),e!==null&&(pn(e,o,i,l),Mo(e,o,i)),i}function il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Xs(e,n){bu(e,n),(e=e.alternate)&&bu(e,n)}function oh(){return null}var ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function Js(e){this._internalRoot=e}Sl.prototype.render=Js.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));wl(e,n,null,null)};Sl.prototype.unmount=Js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ht(function(){wl(null,e,null,null)}),n[Cn]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ac();e={blockedOn:null,target:e,priority:n};for(var t=0;t<On.length&&n!==0&&n<On[t].priority;t++);On.splice(t,0,e),t===0&&Wc(e)}};function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pu(){}function lh(e,n,t,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=il(i);l.call(u)}}var i=sp(n,r,e,0,null,!1,!1,"",Pu);return e._reactRootContainer=i,e[Cn]=i.current,Lr(e.nodeType===8?e.parentNode:e),ht(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=il(a);s.call(u)}}var a=qs(e,0,!1,null,null,!1,!1,"",Pu);return e._reactRootContainer=a,e[Cn]=a.current,Lr(e.nodeType===8?e.parentNode:e),ht(function(){wl(n,a,t,r)}),a}function Pl(e,n,t,r,o){var l=t._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=il(i);s.call(a)}}wl(n,i,e,o)}else i=lh(t,n,e,o,r);return il(i)}zc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=mr(n.pendingLanes);t!==0&&(vs(n,t|1),Be(n,me()),!(Y&6)&&(Qt=me()+500,et()))}break;case 13:ht(function(){var r=_n(e,1);if(r!==null){var o=je();pn(r,e,1,o)}}),Xs(e,1)}};xs=function(e){if(e.tag===13){var n=_n(e,134217728);if(n!==null){var t=je();pn(n,e,134217728,t)}Xs(e,134217728)}};Dc=function(e){if(e.tag===13){var n=Qn(e),t=_n(e,n);if(t!==null){var r=je();pn(t,e,n,r)}Xs(e,n)}};Ac=function(){return X};Hc=function(e,n){var t=X;try{return X=e,n()}finally{X=t}};wi=function(e,n,t){switch(n){case"input":if(fi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=fl(r);if(!o)throw Error(k(90));yc(r),fi(r,o)}}}break;case"textarea":xc(e,t);break;case"select":n=t.value,n!=null&&Lt(e,!!t.multiple,n,!1)}};_c=Vs;Tc=ht;var ih={usingClientEntryPoint:!1,Events:[Yr,Rt,fl,kc,Cc,Vs]},cr={findFiberByHostInstance:st,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sh={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$c(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||oh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{ul=xo.inject(sh),yn=xo}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ih;Ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zs(n))throw Error(k(200));return rh(e,n,null,t)};Ye.createRoot=function(e,n){if(!Zs(e))throw Error(k(299));var t=!1,r="",o=ap;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=qs(e,1,!1,null,null,t,!1,r,o),e[Cn]=n.current,Lr(e.nodeType===8?e.parentNode:e),new Js(n)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=$c(n),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return ht(e)};Ye.hydrate=function(e,n,t){if(!bl(n))throw Error(k(200));return Pl(null,e,n,!0,t)};Ye.hydrateRoot=function(e,n,t){if(!Zs(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,o=!1,l="",i=ap;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=sp(n,null,e,1,t??null,o,!1,l,i),e[Cn]=n.current,Lr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Sl(n)};Ye.render=function(e,n,t){if(!bl(n))throw Error(k(200));return Pl(null,e,n,!1,t)};Ye.unmountComponentAtNode=function(e){if(!bl(e))throw Error(k(40));return e._reactRootContainer?(ht(function(){Pl(null,null,e,!1,function(){e._reactRootContainer=null,e[Cn]=null})}),!0):!1};Ye.unstable_batchedUpdates=Vs;Ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!bl(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Pl(e,n,t,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function up(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(up)}catch(e){console.error(e)}}up(),uc.exports=Ye;var ah=uc.exports,cp,ku=ah;cp=ku.createRoot,ku.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ur(){return Ur=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ur.apply(null,arguments)}var Hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Hn||(Hn={}));const Cu="popstate";function uh(e){e===void 0&&(e={});function n(o,l){let{pathname:i="/",search:s="",hash:a=""}=xt(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Zi("",{pathname:i,search:s,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let i=o.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let a=o.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof l=="string"?l:sl(l))}function r(o,l){ea(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return dh(n,t,r,e)}function ge(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ea(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function ch(){return Math.random().toString(36).substr(2,8)}function _u(e,n){return{usr:e.state,key:e.key,idx:n}}function Zi(e,n,t,r){return t===void 0&&(t=null),Ur({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?xt(n):n,{state:t,key:n&&n.key||r||ch()})}function sl(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function xt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function dh(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,s=Hn.Pop,a=null,u=p();u==null&&(u=0,i.replaceState(Ur({},i.state,{idx:u}),""));function p(){return(i.state||{idx:null}).idx}function c(){s=Hn.Pop;let b=p(),g=b==null?null:b-u;u=b,a&&a({action:s,location:w.location,delta:g})}function f(b,g){s=Hn.Push;let m=Zi(w.location,b,g);t&&t(m,b),u=p()+1;let h=_u(m,u),S=w.createHref(m);try{i.pushState(h,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(S)}l&&a&&a({action:s,location:w.location,delta:1})}function v(b,g){s=Hn.Replace;let m=Zi(w.location,b,g);t&&t(m,b),u=p();let h=_u(m,u),S=w.createHref(m);i.replaceState(h,"",S),l&&a&&a({action:s,location:w.location,delta:0})}function x(b){let g=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof b=="string"?b:sl(b);return m=m.replace(/ $/,"%20"),ge(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let w={get action(){return s},get location(){return e(o,i)},listen(b){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Cu,c),a=b,()=>{o.removeEventListener(Cu,c),a=null}},createHref(b){return n(o,b)},createURL:x,encodeLocation(b){let g=x(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(b){return i.go(b)}};return w}var Tu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Tu||(Tu={}));function ph(e,n,t){return t===void 0&&(t="/"),fh(e,n,t)}function fh(e,n,t,r){let o=typeof n=="string"?xt(n):n,l=na(o.pathname||"/",t);if(l==null)return null;let i=dp(e);mh(i);let s=null,a=_h(l);for(let u=0;s==null&&u<i.length;++u)s=Ph(i[u],a);return s}function dp(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(l,i,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};a.relativePath.startsWith("/")&&(ge(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Yn([r,a.relativePath]),p=t.concat(a);l.children&&l.children.length>0&&(ge(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dp(l.children,n,p,u)),!(l.path==null&&!l.index)&&n.push({path:u,score:Sh(u,l.index),routesMeta:p})};return e.forEach((l,i)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))o(l,i);else for(let a of pp(l.path))o(l,i,a)}),n}function pp(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=pp(r.join("/")),s=[];return s.push(...i.map(a=>a===""?l:[l,a].join("/"))),o&&s.push(...i),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function mh(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:bh(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const gh=/^:[\w-]+$/,hh=3,yh=2,vh=1,xh=10,wh=-2,Ru=e=>e==="*";function Sh(e,n){let t=e.split("/"),r=t.length;return t.some(Ru)&&(r+=wh),n&&(r+=yh),t.filter(o=>!Ru(o)).reduce((o,l)=>o+(gh.test(l)?hh:l===""?vh:xh),r)}function bh(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function Ph(e,n,t){let{routesMeta:r}=e,o={},l="/",i=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,p=l==="/"?n:n.slice(l.length)||"/",c=kh({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},p),f=a.route;if(!c)return null;Object.assign(o,c.params),i.push({params:o,pathname:Yn([l,c.pathname]),pathnameBase:Mh(Yn([l,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(l=Yn([l,c.pathnameBase]))}return i}function kh(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Ch(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,p,c)=>{let{paramName:f,isOptional:v}=p;if(f==="*"){let w=s[c]||"";i=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[c];return v&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function Ch(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ea(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function _h(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ea(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function na(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Th(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?xt(e):e,l;return t?(t=fp(t),t.startsWith("/")?l=Mu(t.substring(1),"/"):l=Mu(t,n)):l=n,{pathname:l,search:$h(r),hash:Eh(o)}}function Mu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ri(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rh(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ta(e,n){let t=Rh(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ra(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=xt(e):(o=Ur({},e),ge(!o.pathname||!o.pathname.includes("?"),ri("?","pathname","search",o)),ge(!o.pathname||!o.pathname.includes("#"),ri("#","pathname","hash",o)),ge(!o.search||!o.search.includes("#"),ri("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,s;if(i==null)s=t;else{let c=n.length-1;if(!r&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),c-=1;o.pathname=f.join("/")}s=c>=0?n[c]:"/"}let a=Th(o,s),u=i&&i!=="/"&&i.endsWith("/"),p=(l||i===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(u||p)&&(a.pathname+="/"),a}const fp=e=>e.replace(/\/\/+/g,"/"),Yn=e=>fp(e.join("/")),Mh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$h=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Eh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ih(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const mp=["post","put","patch","delete"];new Set(mp);const Nh=["get",...mp];new Set(Nh);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Gr.apply(null,arguments)}const oa=y.createContext(null),jh=y.createContext(null),nt=y.createContext(null),kl=y.createContext(null),Mn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),gp=y.createContext(null);function Lh(e,n){let{relative:t}=n===void 0?{}:n;Jt()||ge(!1);let{basename:r,navigator:o}=y.useContext(nt),{hash:l,pathname:i,search:s}=vp(e,{relative:t}),a=i;return r!=="/"&&(a=i==="/"?r:Yn([r,i])),o.createHref({pathname:a,search:s,hash:l})}function Jt(){return y.useContext(kl)!=null}function Zt(){return Jt()||ge(!1),y.useContext(kl).location}function hp(e){y.useContext(nt).static||y.useLayoutEffect(e)}function yp(){let{isDataRoute:e}=y.useContext(Mn);return e?Yh():Oh()}function Oh(){Jt()||ge(!1);let e=y.useContext(oa),{basename:n,future:t,navigator:r}=y.useContext(nt),{matches:o}=y.useContext(Mn),{pathname:l}=Zt(),i=JSON.stringify(ta(o,t.v7_relativeSplatPath)),s=y.useRef(!1);return hp(()=>{s.current=!0}),y.useCallback(function(u,p){if(p===void 0&&(p={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=ra(u,JSON.parse(i),l,p.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Yn([n,c.pathname])),(p.replace?r.replace:r.push)(c,p.state,p)},[n,r,i,l,e])}function zh(){let{matches:e}=y.useContext(Mn),n=e[e.length-1];return n?n.params:{}}function vp(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=y.useContext(nt),{matches:o}=y.useContext(Mn),{pathname:l}=Zt(),i=JSON.stringify(ta(o,r.v7_relativeSplatPath));return y.useMemo(()=>ra(e,JSON.parse(i),l,t==="path"),[e,i,l,t])}function Dh(e,n){return Ah(e,n)}function Ah(e,n,t,r){Jt()||ge(!1);let{navigator:o}=y.useContext(nt),{matches:l}=y.useContext(Mn),i=l[l.length-1],s=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let u=Zt(),p;if(n){var c;let b=typeof n=="string"?xt(n):n;a==="/"||(c=b.pathname)!=null&&c.startsWith(a)||ge(!1),p=b}else p=u;let f=p.pathname||"/",v=f;if(a!=="/"){let b=a.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=ph(e,{pathname:v}),w=Uh(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:Yn([a,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?a:Yn([a,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,t,r);return n&&w?y.createElement(kl.Provider,{value:{location:Gr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Hn.Pop}},w):w}function Hh(){let e=Kh(),n=Ih(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:o},t):null,null)}const Wh=y.createElement(Hh,null);class Fh extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(Mn.Provider,{value:this.props.routeContext},y.createElement(gp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bh(e){let{routeContext:n,match:t,children:r}=e,o=y.useContext(oa);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(Mn.Provider,{value:n},r)}function Uh(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,s=(o=t)==null?void 0:o.errors;if(s!=null){let p=i.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);p>=0||ge(!1),i=i.slice(0,Math.min(i.length,p+1))}let a=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<i.length;p++){let c=i[p];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=p),c.route.id){let{loaderData:f,errors:v}=t,x=c.route.loader&&f[c.route.id]===void 0&&(!v||v[c.route.id]===void 0);if(c.route.lazy||x){a=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((p,c,f)=>{let v,x=!1,w=null,b=null;t&&(v=s&&c.route.id?s[c.route.id]:void 0,w=c.route.errorElement||Wh,a&&(u<0&&f===0?(qh("route-fallback"),x=!0,b=null):u===f&&(x=!0,b=c.route.hydrateFallbackElement||null)));let g=n.concat(i.slice(0,f+1)),m=()=>{let h;return v?h=w:x?h=b:c.route.Component?h=y.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=p,y.createElement(Bh,{match:c,routeContext:{outlet:p,matches:g,isDataRoute:t!=null},children:h})};return t&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?y.createElement(Fh,{location:t.location,revalidation:t.revalidation,component:w,error:v,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var xp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xp||{}),wp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wp||{});function Gh(e){let n=y.useContext(oa);return n||ge(!1),n}function Vh(e){let n=y.useContext(jh);return n||ge(!1),n}function Qh(e){let n=y.useContext(Mn);return n||ge(!1),n}function Sp(e){let n=Qh(),t=n.matches[n.matches.length-1];return t.route.id||ge(!1),t.route.id}function Kh(){var e;let n=y.useContext(gp),t=Vh(),r=Sp();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Yh(){let{router:e}=Gh(xp.UseNavigateStable),n=Sp(wp.UseNavigateStable),t=y.useRef(!1);return hp(()=>{t.current=!0}),y.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Gr({fromRouteId:n},l)))},[e,n])}const $u={};function qh(e,n,t){$u[e]||($u[e]=!0)}function Xh(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function es(e){let{to:n,replace:t,state:r,relative:o}=e;Jt()||ge(!1);let{future:l,static:i}=y.useContext(nt),{matches:s}=y.useContext(Mn),{pathname:a}=Zt(),u=yp(),p=ra(n,ta(s,l.v7_relativeSplatPath),a,o==="path"),c=JSON.stringify(p);return y.useEffect(()=>u(JSON.parse(c),{replace:t,state:r,relative:o}),[u,c,o,t,r]),null}function hr(e){ge(!1)}function Jh(e){let{basename:n="/",children:t=null,location:r,navigationType:o=Hn.Pop,navigator:l,static:i=!1,future:s}=e;Jt()&&ge(!1);let a=n.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:a,navigator:l,static:i,future:Gr({v7_relativeSplatPath:!1},s)}),[a,s,l,i]);typeof r=="string"&&(r=xt(r));let{pathname:p="/",search:c="",hash:f="",state:v=null,key:x="default"}=r,w=y.useMemo(()=>{let b=na(p,a);return b==null?null:{location:{pathname:b,search:c,hash:f,state:v,key:x},navigationType:o}},[a,p,c,f,v,x,o]);return w==null?null:y.createElement(nt.Provider,{value:u},y.createElement(kl.Provider,{children:t,value:w}))}function Zh(e){let{children:n,location:t}=e;return Dh(ns(n),t)}new Promise(()=>{});function ns(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let l=[...n,o];if(r.type===y.Fragment){t.push.apply(t,ns(r.props.children,l));return}r.type!==hr&&ge(!1),!r.props.index||!r.props.children||ge(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=ns(r.props.children,l)),t.push(i)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ts.apply(null,arguments)}function ey(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function ny(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ty(e,n){return e.button===0&&(!n||n==="_self")&&!ny(e)}const ry=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],oy="6";try{window.__reactRouterVersion=oy}catch{}const ly="startTransition",Eu=Xf[ly];function iy(e){let{basename:n,children:t,future:r,window:o}=e,l=y.useRef();l.current==null&&(l.current=uh({window:o,v5Compat:!0}));let i=l.current,[s,a]=y.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},p=y.useCallback(c=>{u&&Eu?Eu(()=>a(c)):a(c)},[a,u]);return y.useLayoutEffect(()=>i.listen(p),[i,p]),y.useEffect(()=>Xh(r),[r]),y.createElement(Jh,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:i,future:r})}const sy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ay=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rs=y.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:s,target:a,to:u,preventScrollReset:p,viewTransition:c}=n,f=ey(n,ry),{basename:v}=y.useContext(nt),x,w=!1;if(typeof u=="string"&&ay.test(u)&&(x=u,sy))try{let h=new URL(window.location.href),S=u.startsWith("//")?new URL(h.protocol+u):new URL(u),P=na(S.pathname,v);S.origin===h.origin&&P!=null?u=P+S.search+S.hash:w=!0}catch{}let b=Lh(u,{relative:o}),g=uy(u,{replace:i,state:s,target:a,preventScrollReset:p,relative:o,viewTransition:c});function m(h){r&&r(h),h.defaultPrevented||g(h)}return y.createElement("a",ts({},f,{href:x||b,onClick:w||l?r:m,ref:t,target:a}))});var Iu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Iu||(Iu={}));var Nu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nu||(Nu={}));function uy(e,n){let{target:t,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:s}=n===void 0?{}:n,a=yp(),u=Zt(),p=vp(e,{relative:i});return y.useCallback(c=>{if(ty(c,t)){c.preventDefault();let f=r!==void 0?r:sl(u)===sl(p);a(e,{replace:f,state:o,preventScrollReset:l,relative:i,viewTransition:s})}},[u,a,p,r,o,t,e,l,i,s])}const cy="https://github.com/frankvane/vane-components";class dy extends Yt.Component{constructor(){super(...arguments);ga(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?d.jsxs("div",{className:"crash",role:"alert",children:[d.jsx("h3",{children:"这个页面炸了"}),d.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),d.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function bp(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function py({demos:e,pathname:n}){var a;const{groups:t,entries:r,label:o}=e,l=(a=r.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:a.meta.group,[i,s]=y.useState(()=>{var p;const u=(p=t[0])==null?void 0:p.key;return Object.fromEntries(t.map(c=>[c.key,c.key===(l??u)]))});return y.useEffect(()=>{l&&s(u=>u[l]?u:{...u,[l]:!0})},[l]),d.jsxs("div",{className:"nav-section",children:[d.jsxs("div",{className:"nav-section-head",children:[d.jsx("span",{children:o}),d.jsxs("code",{children:[r.length," demos"]})]}),t.map(u=>{const p=r.filter(f=>f.meta.group===u.key);if(p.length===0)return null;const c=i[u.key]??!1;return d.jsxs("div",{className:"nav-group",children:[d.jsxs("button",{type:"button",className:`nav-group-head${l===u.key?" is-current":""}`,onClick:()=>s(f=>({...f,[u.key]:!c})),"aria-expanded":c,children:[d.jsx("span",{className:`nav-caret${c?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,d.jsx("code",{children:p.length})]}),c?d.jsx("div",{className:"nav-list",children:p.map(f=>d.jsxs(rs,{to:`/demo/${f.meta.slug}`,className:`nav-sub${n===`/demo/${f.meta.slug}`?" is-active":""}`,children:[d.jsx("em",{"aria-hidden":!0,children:bp(e,f)}),f.meta.title]},f.meta.slug))}):null]},u.key)})]})}function fy({demos:e}){const{slug:n}=zh(),{entries:t,detail:r}=e,o=n?t.find(i=>i.meta.slug===n):void 0;if(!o)return d.jsx(es,{to:`/demo/${t[0].meta.slug}`,replace:!0});const l=t.indexOf(o)+1;return d.jsx(Yt.Fragment,{children:r(o,l)},o.meta.slug)}function my({config:e}){var p;const{pathname:n}=Zt(),[t,r]=y.useState(!1),[o,l]=y.useState(!1);y.useEffect(()=>r(!1),[n]);const i=y.useCallback(()=>l(c=>!c),[]);y.useEffect(()=>{const c=f=>{const v=f.target,x=v&&(v.tagName==="INPUT"||v.tagName==="TEXTAREA"||v.isContentEditable);f.key==="Escape"&&r(!1),!x&&(f.key==="g"||f.key==="G")&&!f.metaKey&&!f.ctrlKey&&l(w=>!w)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]);const s=e.demos,a=y.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const c=n.replace(/^\/demo\/?/,""),f=s.entries.find(v=>v.meta.slug===c);return f?`demo ${bp(s,f)} · ${f.meta.title}`:"demo · 逐项示例"},[n,e,s]),u=y.useMemo(()=>e.nav.map((c,f)=>({...c,no:String(f+1).padStart(2,"0")})),[e.nav]);return d.jsxs("div",{className:`shell${t?" is-nav-open":""}${o?" is-guides":""}`,children:[d.jsx("a",{className:"skip-link",href:"#main",onClick:c=>{c.preventDefault();const f=document.getElementById("main");f==null||f.setAttribute("tabindex","-1"),f==null||f.focus(),f==null||f.scrollIntoView({block:"start"})},children:"跳到内容"}),d.jsxs("aside",{className:"side","aria-label":"站点导航",children:[d.jsxs(rs,{to:"/",className:"brand",children:[d.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),d.jsxs("span",{children:[d.jsx("strong",{children:e.pkg}),d.jsx("em",{children:e.subtitle})]})]}),d.jsxs("nav",{children:[u.map(c=>d.jsxs(rs,{to:c.to,className:`nav-item${n===c.to?" is-active":""}`,"aria-current":n===c.to?"page":void 0,children:[d.jsx("em",{"aria-hidden":!0,children:c.no}),d.jsx("span",{children:c.label}),c.hint?d.jsx("code",{children:c.hint}):null]},c.to)),d.jsx(py,{demos:e.demos,pathname:n})]}),d.jsxs("div",{className:"side-foot",children:[d.jsx("p",{children:e.footer[0]}),d.jsx("p",{className:"muted",children:e.footer[1]})]})]}),d.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),d.jsxs("div",{className:"main",id:"main",children:[d.jsxs("header",{className:"topbar",children:[d.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(c=>!c),children:d.jsx("span",{"aria-hidden":!0})}),d.jsx("span",{className:"crumb",children:a}),d.jsxs("div",{className:"topbar-right",children:[(p=e.stats)==null?void 0:p.map(c=>d.jsxs("span",{className:"topbar-stat",title:c.title,children:[d.jsx("b",{children:c.value})," ",c.label]},c.label)),d.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:i,title:"显示栏位参考线（快捷键 G）",children:[d.jsx("i",{"aria-hidden":!0}),"guides"]}),d.jsx("a",{className:"topbar-link",href:e.sourceUrl??cy,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),d.jsx("div",{className:"guides","aria-hidden":!0}),d.jsx(y.Suspense,{fallback:d.jsx("div",{className:"loading",children:"loading modules…"}),children:d.jsx(dy,{children:d.jsxs(Zh,{children:[e.routes.map(c=>d.jsx(hr,{path:c.path,element:c.element},c.path)),d.jsx(hr,{path:"/demo",element:d.jsx(es,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),d.jsx(hr,{path:"/demo/:slug",element:d.jsx(fy,{demos:e.demos})}),d.jsx(hr,{path:"*",element:d.jsx(es,{to:"/",replace:!0})})]})})})]})]})}function gy({config:e}){return d.jsx(iy,{children:d.jsx(my,{config:e})})}const hy="modulepreload",yy=function(e,n){return new URL(e,n).href},ju={},la=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){const i=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(t.map(u=>{if(u=yy(u,r),u in ju)return;ju[u]=!0;const p=u.endsWith(".css"),c=p?'[rel="stylesheet"]':"";if(!!r)for(let x=i.length-1;x>=0;x--){const w=i[x];if(w.href===u&&(!p||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":hy,p||(v.as="script"),v.crossOrigin="",v.href=u,a&&v.setAttribute("nonce",a),document.head.appendChild(v),p)return new Promise((x,w)=>{v.addEventListener("load",x),v.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&l(s.reason);return n().catch(l)})};function Pp(e=0){return typeof e=="number"?{top:e,right:e,bottom:e,left:e}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function vy(e,n){return typeof e=="number"&&Number.isFinite(e)&&e>0?e:n&&n>0?n:0}function xy(e){var h,S,P;const{heights:n,columnGap:t,rowGap:r,alignmentMode:o="shortest",estimateHeight:l,hooks:i}=e,s=Pp(e.padding),a=e.containerWidth,u=(h=i==null?void 0:i.calculateColumns)==null?void 0:h.call(i,e.columns),p=Math.max(1,Math.round(typeof u=="number"&&Number.isFinite(u)?u:e.columns)),f=(a-s.left-s.right-t*(p-1))/p,v=(S=i==null?void 0:i.calculateColumnWidth)==null?void 0:S.call(i,f,p,a),x=typeof v=="number"&&Number.isFinite(v)?v:f,w=Array(p).fill(s.top),b=Array(p).fill(0),g=new Map;let m=0;if(n.length===0)return{columns:p,columnWidth:x,padding:s,columnHeights:w,totalHeight:s.top+s.bottom,positions:g,estimatedCount:0};for(let C=0;C<n.length;C++){const R=n[C],$=vy(R,l);if($===0)continue;typeof R=="number"&&R>0||(m+=1);let A=0;if(o==="sequential")A=C%p;else if(o==="balanced"){let O=b[0];for(let z=1;z<p;z++)b[z]<O&&(O=b[z],A=z)}else{let O=w[0];for(let z=1;z<w.length;z++)w[z]<O&&(O=w[z],A=z)}let j={x:s.left+A*(x+t),y:w[A],width:x,height:$,column:A,row:Math.floor(C/p)};const F=(P=i==null?void 0:i.calculateItemPosition)==null?void 0:P.call(i,C,$,j);if(F){const O={...j,...F};F.column!==void 0&&F.x===void 0&&(O.x=s.left+Math.min(Math.max(0,O.column),p-1)*(x+t)),j=O}g.set(C,j);const K=Math.min(Math.max(0,j.column),w.length-1);w[K]=j.y+j.height+r,b[K]+=1}return{columns:p,columnWidth:x,padding:s,columnHeights:w,totalHeight:Math.max(...w)+s.bottom,positions:g,estimatedCount:m}}function wy(e,n,t="start",r=0){let o=e.y+r;return t==="center"?o-=n/2-e.height/2:t==="end"&&(o-=n-e.height),Math.max(0,o)}const Sy=8;function by(e,n,t=.5){const r=[];for(const i of e)Number.isFinite(i)&&i>0&&r.push(i);if(r.length<Sy)return n;r.sort((i,s)=>i-s);const o=Math.min(1,Math.max(0,t)),l=Math.min(r.length-1,Math.round(o*(r.length-1)));return Math.max(1,Math.ceil(r[l]))}function Py(e,n,t,r,o=1){if(n<=0)return{start:0,end:-1,hiddenCount:0};if(e.size===0){const c=Math.max(1,Math.ceil(r/240)+2);return{start:0,end:Math.min(n-1,c-1),hiddenCount:0}}const l=Math.max(0,r*o),i=t-l,s=t+Math.max(r,1)+l;let a=Number.POSITIVE_INFINITY,u=-1;if(e.forEach((c,f)=>{const v=c.y;c.y+c.height>i&&v<s&&(f<a&&(a=f),f>u&&(u=f))}),u<0){let c=0,f=Number.POSITIVE_INFINITY;e.forEach((x,w)=>{const b=Math.abs(x.y-t);b<f&&(f=b,c=w)});const v=Math.max(1,Math.ceil(r/240)+2);a=Math.max(0,c-v),u=Math.min(n-1,c+v)}a=Math.max(0,a),u=Math.min(n-1,u),u<a&&(u=a);const p=u-a+1;return{start:a,end:u,hiddenCount:Math.max(0,n-p)}}function ky(e){return e?e===!0?{overscan:1,estimateHeight:240,dynamicHeights:!0,adaptiveEstimate:!0,estimateQuantile:.5}:{overscan:e.overscan??1,estimateHeight:e.estimateHeight??240,dynamicHeights:e.dynamicHeights??!0,adaptiveEstimate:e.adaptiveEstimate??!0,estimateQuantile:e.estimateQuantile??.5}:null}function Lu(e,n,t,r){const o=n.y,l=n.y+n.height,i=t+r,s=Math.max(0,Math.min(i,l)-Math.max(t,o));return{index:e,isVisible:s>0,visibleRatio:n.height>0?Math.min(1,s/n.height):0,isAboveViewport:l<=t,isBelowViewport:o>=i}}const Ou=y.forwardRef(function(n,t){const{items:r=[],renderItem:o,keyExtractor:l=(M,L)=>L,columns:i=3,gap:s=16,rowGap:a,columnGap:u,alignmentMode:p="shortest",padding:c=0,containerStyle:f,containerClassName:v,itemStyle:x,itemClassName:w,useTransform:b=!0,throttleDelay:g=16,debounceDelay:m=150,reachBottomOffset:h=100,virtualize:S,layoutHooks:P,onMount:C,onUnmount:R,onBeforeLayout:$,onLayout:A,onLayoutComplete:j,onItemMount:F,onItemUnmount:K,onItemEnterViewport:O,onItemLeaveViewport:z,onScroll:Z,onResize:ne,onReachBottom:E,onItemClick:_,children:W,containerRefExternal:B,itemRefsExternal:re,debug:ee=!1}=n,$n=y.useRef(null),oe=B??$n,T=y.useRef(new Map),N=re??T,D=y.useRef(new Map),J=y.useRef(new Map),U=y.useRef(null),le=y.useRef(),ke=y.useRef(),Se=y.useRef(null),ve=y.useRef(0),ln=y.useRef(!1),Xe=y.useRef(0),q=y.useRef(!1),Ue=y.useRef(""),er=y.useRef(void 0),Xr=y.useRef(async()=>{}),nr=y.useRef(!1),tr=y.useRef(!1),Cl=y.useRef(new Set),_l=y.useRef(r);_l.current=r;const En=y.useRef(new Map),Jr=a??s,wt=u??s,tt=y.useMemo(()=>Pp(c),[c]),ua=JSON.stringify(S??null),G=y.useMemo(()=>ky(JSON.parse(ua)??void 0),[ua]),[rt,Cf]=y.useState(()=>({columns:i,columnWidth:0,gap:wt,columnHeights:Array(i).fill(0),totalHeight:0,containerWidth:0,containerHeight:0})),[Zr,_f]=y.useState(()=>new Map),[In,ca]=y.useState({scrollTop:0,scrollLeft:0,scrollHeight:0,scrollWidth:0,clientHeight:0,clientWidth:0,isScrolling:!1,direction:null}),[,Tf]=y.useState({});En.current=Zr;const Tl=y.useRef(rt),St=y.useCallback(async()=>{const M=oe.current;if(!M)return;const L=`${i}|${wt}|${Jr}|${tt.top},${tt.right},${tt.bottom},${tt.left}|${p}|${(G==null?void 0:G.estimateHeight)??""}|${(G==null?void 0:G.adaptiveEstimate)??""}|${(G==null?void 0:G.estimateQuantile)??""}`;if(ln.current){(L!==Ue.current||P!==er.current)&&(q.current=!0);return}if(ln.current=!0,Ue.current=L,er.current=P,tr.current=!1,await($==null?void 0:$())===!1){ln.current=!1;return}ee&&console.time("[WaterfallCore] layout"),A==null||A();const fe=M.clientWidth,Je=_l.current.map((De,no)=>{const Ml=N.current.get(no),$l=(Ml==null?void 0:Ml.offsetHeight)??0;return $l>0?(D.current.set(no,$l),$l):D.current.get(no)??0});let he;if(G)if(G.adaptiveEstimate===!1)he=G.estimateHeight;else{const De=by(D.current.values(),G.estimateHeight??240,G.estimateQuantile);Math.abs(De-Xe.current)>8&&(Xe.current=De),he=Xe.current||De}const Re=xy({heights:Je,columns:i,containerWidth:fe,columnGap:wt,rowGap:Jr,padding:tt,alignmentMode:p,estimateHeight:he,hooks:P}),ze={columns:Re.columns,columnWidth:Re.columnWidth,gap:wt,columnHeights:Re.columnHeights,totalHeight:Re.totalHeight,containerWidth:fe,containerHeight:M.clientHeight};Tl.current=ze,En.current=Re.positions,Cf(ze),_f(Re.positions),nr.current=!0,ee&&(console.timeEnd("[WaterfallCore] layout"),Re.estimatedCount>0&&console.debug(`[WaterfallCore] ${Re.estimatedCount} 项按估值占位（estimateHeight=${he}）`)),j==null||j(),ln.current=!1,q.current&&(q.current=!1,Xr.current())},[i,wt,Jr,tt,p,G==null?void 0:G.estimateHeight,P,$,A,j,ee,oe,N]);Xr.current=St;const eo=y.useCallback(()=>{ke.current&&window.clearTimeout(ke.current),ke.current=window.setTimeout(()=>{Xr.current()},m)},[m]),da=y.useCallback(()=>{Se.current==null&&(Se.current=requestAnimationFrame(()=>{Se.current=null,Xr.current()}))},[]),pa=y.useCallback(M=>{const L=oe.current;L&&ca(H=>{const fe=L.scrollTop,Je=L.scrollLeft,he=fe>H.scrollTop?"down":fe<H.scrollTop?"up":Je>H.scrollLeft?"right":Je<H.scrollLeft?"left":H.direction;return{scrollTop:fe,scrollLeft:Je,scrollHeight:L.scrollHeight,scrollWidth:L.scrollWidth,clientHeight:L.clientHeight,clientWidth:L.clientWidth,isScrolling:M,direction:he}})},[oe]),Rf=y.useCallback(()=>{const M=oe.current;if(!M)return;const L=Date.now();pa(!0);const H=M.scrollTop,{clientHeight:fe,scrollHeight:Je}=M;if(Z==null||Z(H,M.scrollLeft),L-ve.current>=g){if(ve.current=L,E){const he=Je-(H+fe);he<h&&E(he)}if(O||z){const he=En.current,Re=new Set;he.forEach((ze,De)=>{Math.max(0,Math.min(H+fe,ze.y+ze.height)-Math.max(H,ze.y))>0&&(Re.add(De),Cl.current.has(De)||O==null||O(De,Lu(De,ze,H,fe)))}),Cl.current.forEach(ze=>{if(Re.has(ze))return;const De=he.get(ze);De&&(z==null||z(ze,Lu(ze,De,H,fe)))}),Cl.current=Re}}le.current&&window.clearTimeout(le.current),le.current=window.setTimeout(()=>{ca(he=>({...he,isScrolling:!1}))},m)},[pa,Z,E,O,z,g,m,h]),Mf=y.useCallback(()=>{const M=oe.current;M&&(ne==null||ne(M.clientWidth,M.clientHeight),eo())},[ne,eo,oe]);y.useEffect(()=>{C==null||C(),nr.current||St();const M=oe.current;return M&&typeof ResizeObserver<"u"&&(U.current=new ResizeObserver(Mf),U.current.observe(M)),()=>{var L;R==null||R(),(L=U.current)==null||L.disconnect(),U.current=null,J.current.forEach(H=>{try{H.disconnect()}catch{}}),J.current.clear(),le.current&&window.clearTimeout(le.current),ke.current&&window.clearTimeout(ke.current),Se.current!=null&&(cancelAnimationFrame(Se.current),Se.current=null)}},[]);const Rl=y.useRef(new Map);y.useEffect(()=>{nr.current=!1,tr.current=!1,Rl.current.clear(),eo()},[r,eo]),y.useEffect(()=>{nr.current=!1,tr.current=!1,St()},[i,wt,Jr,tt,p,G==null?void 0:G.estimateHeight,G==null?void 0:G.adaptiveEstimate,G==null?void 0:G.estimateQuantile,P]);const fa=y.useRef(()=>{});fa.current=(M,L)=>{if(L){N.current.set(M,L);const H=L.offsetHeight;if(H>0&&D.current.set(M,H),(G?G.dynamicHeights!==!1:!0)&&!J.current.has(M)&&typeof ResizeObserver<"u"){const Je=new ResizeObserver(()=>{const he=L.offsetHeight;if(he<=0)return;D.current.set(M,he);const Re=En.current.get(M),ze=Re?Math.abs(Re.height-he)>.5:!1,De=Rl.current.get(M)===he;Re?ze&&!De&&(Rl.current.set(M,he),da()):da()});try{Je.observe(L),J.current.set(M,Je)}catch{}}F==null||F(M,L),nr.current&&!En.current.has(M)&&!ln.current&&!tr.current&&(tr.current=!0,requestAnimationFrame(()=>void St()))}else{N.current.delete(M);const H=J.current.get(M);if(H){try{H.disconnect()}catch{}J.current.delete(M)}K==null||K(M)}};const ma=y.useRef(new Map),$f=M=>{let L=ma.current.get(M);return L||(L=H=>fa.current(M,H),ma.current.set(M,L)),L},ot=y.useMemo(()=>G?Py(Zr,r.length,In.scrollTop,In.clientHeight||rt.containerHeight||600,G.overscan):{start:0,end:Math.max(0,r.length-1),hiddenCount:0},[G,Zr,r.length,In.scrollTop,In.clientHeight,rt.containerHeight]);y.useImperativeHandle(t,()=>({relayout:()=>{D.current.clear(),_l.current.forEach((M,L)=>{const H=N.current.get(L);H&&D.current.set(L,H.offsetHeight)}),St()},scrollToItem:(M,L={})=>{const H=oe.current,fe=En.current.get(M);!H||!fe||H.scrollTo({top:wy(fe,H.clientHeight,L.block??"start",L.offset??0),behavior:L.behavior??"auto"})},scrollToTop:(M={})=>{var L;(L=oe.current)==null||L.scrollTo({top:M.offset??0,behavior:M.behavior??"auto"})},scrollToBottom:(M={})=>{const L=oe.current;L&&L.scrollTo({top:L.scrollHeight-L.clientHeight+(M.offset??0),behavior:M.behavior??"auto"})},getItemPosition:M=>En.current.get(M)??null,getAllItemPositions:()=>En.current,getColumnHeights:()=>Tl.current.columnHeights,getLayoutInfo:()=>Tl.current,getViewportInfo:()=>{const M=oe.current;return M?{scrollTop:M.scrollTop,scrollLeft:M.scrollLeft,scrollHeight:M.scrollHeight,scrollWidth:M.scrollWidth,clientHeight:M.clientHeight,clientWidth:M.clientWidth,isScrolling:In.isScrolling,direction:In.direction}:In},getVisibleRange:()=>({start:ot.start,end:ot.end}),forceUpdate:()=>Tf({}),getContainer:()=>oe.current,getItemElement:M=>N.current.get(M)??null,measureItem:async M=>{const L=N.current.get(M);if(L){const fe={width:L.offsetWidth,height:L.offsetHeight};return fe.height>0&&D.current.set(M,fe.height),fe}const H=D.current.get(M);return H?{width:rt.columnWidth,height:H}:{width:rt.columnWidth,height:(G==null?void 0:G.estimateHeight)??0}}}),[St,rt,In,ot,oe,N,G==null?void 0:G.estimateHeight]);const Ef=y.useMemo(()=>{if(!G)return r.map((L,H)=>H);const M=[];for(let L=ot.start;L<=ot.end;L++)M.push(L);return M},[G,r,ot.start,ot.end]);return d.jsxs("div",{ref:oe,style:{position:"relative",overflowX:"hidden",overflowY:"auto",...f},className:v,onScroll:Rf,"data-vane-waterfall":"",children:[W,d.jsx("div",{style:{position:"relative",width:"100%",height:rt.totalHeight,minWidth:0},children:Ef.map(M=>{const L=r[M];if(L===void 0)return null;const H=Zr.get(M),fe=H?b?{position:"absolute",transform:`translate(${H.x}px, ${H.y}px)`,width:H.width,boxSizing:"border-box"}:{position:"absolute",left:H.x,top:H.y,width:H.width,boxSizing:"border-box"}:{position:"absolute",opacity:0,pointerEvents:"none"};return d.jsx("div",{ref:$f(M),style:{...fe,...x},className:w,onClick:Je=>_==null?void 0:_(M,L,Je),"data-index":M,"data-column":H==null?void 0:H.column,children:o(L,M)},l(L,M))})})]})});function Cy(){const e=new Map,n=new Map,t=(i,s)=>{const a=e.get(i);if(a)for(const u of[...a])try{u(s)}catch(p){console.warn(`[PluginBus] handler error for event "${i}"`,p)}},r=(i,s)=>{let a=e.get(i);return a||(a=new Set,e.set(i,a)),a.add(s),()=>{a==null||a.delete(s)}},o=(i,s)=>{const a=u=>{s(u),l(i,a)};return r(i,a)},l=(i,s)=>{var a;if(!s){e.delete(i);return}(a=e.get(i))==null||a.delete(s)};return{emit:t,on:r,once:o,off:l,getData:i=>n.get(i),setData:(i,s)=>{const a=n.get(i);n.set(i,s),a!==s&&t(i,s)},deleteData:i=>{const s=n.has(i);n.delete(i),s&&t(i,void 0)},hasData:i=>n.has(i),getAll:()=>{const i={};return n.forEach((s,a)=>{i[a]=s}),i},clear:()=>{e.clear(),n.clear()}}}function kp(e){const n=new Map(e.map(s=>[s.name,s])),t=[];for(const s of e)for(const a of s.dependencies??[])n.has(a)||t.push(`${s.name} -> ${a}`);const r=[],o=new Set,l=[...e],i=s=>(s.dependencies??[]).every(a=>o.has(a)||!n.has(a));for(;l.length>0;){const s=l.filter(i);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${l.map(u=>u.name).join(" <-> ")}`);let a=s[0];for(const u of s)(u.priority??0)>(a.priority??0)&&(a=u);r.push(a),o.add(a.name),l.splice(l.indexOf(a),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}async function _y(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:o="unknown"}=n;if(!t||t<=0)return await e();let l;const i=new Promise((s,a)=>{l=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),i])}finally{l&&clearTimeout(l)}}const Ty=new Set(["onMount","onUnmount","onPropsChange","onError"]);function Ry(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,o=[],l=[],i=new Map,s=()=>kp([...i.values()].filter(u=>u.enabled!==!1)),a=u=>{i.set(u.name,{...u,enabled:u.enabled??!0}),u.init&&Promise.resolve(u.init()).catch(p=>{n.warn(`[PluginManager] init failed for ${u.name}`,p)})};return{register:a,registerAll:u=>{for(const p of u)a(p)},unregister:u=>{const p=i.get(u);p&&(p.destroy&&Promise.resolve(p.destroy()).catch(c=>{n.warn(`[PluginManager] destroy failed for ${p.name}`,c)}),i.delete(u))},getPlugin:u=>i.get(u),getAllPlugins:()=>[...i.values()],getEnabledPlugins:()=>[...i.values()].filter(u=>u.enabled!==!1),getExecutionOrder:s,enable:u=>{const p=i.get(u);p&&(p.enabled=!0)},disable:u=>{const p=i.get(u);p&&(p.enabled=!1)},has:u=>i.has(u),executeHook:async(u,p,...c)=>{var f,v;for(const x of s()){const w=(f=x.hooks)==null?void 0:f[u];if(typeof w!="function")continue;const b=x.sandbox??t,g=x.timeout??r;let m;try{m=b?await _y(()=>w(p,...c),{timeout:g,name:x.name,hook:String(u)}):await w(p,...c)}catch(h){if(o.push({plugin:x.name,hook:String(u),error:h}),n.warn(`[PluginManager] hook ${String(u)} failed in ${x.name}`,h),(v=e.onError)==null||v.call(e,x.name,String(u),h),u==="onError")break;continue}if(Ty.has(String(u))&&typeof m=="function"){l.push(m);continue}if(m===!1)return!1;if(m!==void 0&&m!==!0)return m}},clear:()=>{const u=l.splice(0);for(const p of u.reverse())try{p()}catch(c){n.warn("[PluginManager] cleanup failed",c)}for(const p of i.values())p.destroy&&Promise.resolve(p.destroy()).catch(c=>{n.warn(`[PluginManager] destroy failed for ${p.name}`,c)});i.clear()},getErrors:()=>[...o]}}var My=Object.defineProperty,$y=(e,n,t)=>n in e?My(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ey=(e,n,t)=>$y(e,n+"",t);class Cp extends Yt.Component{constructor(){super(...arguments),Ey(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(o=(r=this.props).onError)==null||o.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let wo=null;function Iy(e=!1){if(wo&&!e)return wo;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",l=/iPad|Tablet/i.test(o),i=/Mobile|Android|iPhone/i.test(o),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return wo={type:l?"tablet":i?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:s,isRetina:r>=2},wo}function Ny(e){const{plugins:n,props:t,data:r,initialState:o,containerRef:l,enableDebug:i=!1,managerOptions:s,extendContext:a}=e,u=y.useRef(null),p=l??u,c=y.useRef(null);c.current||(c.current=Ry(s));const f=c.current,v=y.useRef(null);v.current||(v.current=Cy());const x=v.current,w=y.useRef(new Map),[b,g]=y.useState(o??{}),[,m]=y.useState(0),h=y.useCallback(()=>m(K=>K+1),[]),S=y.useMemo(()=>Iy(),[]),P=n.map(K=>K.name).join("|");y.useLayoutEffect(()=>{f.clear(),f.registerAll(n),i&&console.debug("[vane/plugin-core] plugins registered:",P)},[P]),y.useLayoutEffect(()=>()=>{f.executeHook("onUnmount",R.current),f.clear()},[f]);const C=y.useMemo(()=>kp(n),[P]),R=y.useRef(null),$=y.useMemo(()=>{const K={props:t,data:r,bus:x,refs:{container:p,getContainer:()=>p.current},state:b,setState:O=>g(z=>({...z,...O})),shared:w.current,deviceInfo:S,forceUpdate:h,getSize:()=>{const O=p.current;return O?{width:O.offsetWidth,height:O.offsetHeight}:{width:0,height:0}},logger:console};return a?a(K):K},[t,r,b,S,x,a]);R.current=$;const A=y.useCallback(K=>{var z;let O=K;for(const Z of C){const ne=(z=Z.hooks)==null?void 0:z.transformProps;typeof ne=="function"&&(O=ne(O))}return O},[C]),j=y.useCallback(K=>{var z;let O=K;for(const Z of C){const ne=(z=Z.hooks)==null?void 0:z.transformData;typeof ne=="function"&&(O=ne(R.current,O))}return O},[C]),F=y.useCallback((K,...O)=>f.executeHook(K,R.current,...O),[f]);return{manager:f,bus:x,context:$,state:b,setState:$.setState,execute:F,transformProps:A,transformData:j,orderedPlugins:C}}y.createContext(null);function So(e,n,t){const{hook:r,position:o="after"}=t;return e.filter(l=>l.enabled!==!1).filter(l=>{var i;return typeof((i=l.hooks)==null?void 0:i[r])=="function"}).filter(l=>{var i;return(((i=l.config)==null?void 0:i.slotPosition)??"after")===o}).sort((l,i)=>{var s,a;return(((s=l.config)==null?void 0:s.order)??0)-(((a=i.config)==null?void 0:a.order)??0)||(i.priority??0)-(l.priority??0)}).map((l,i)=>{try{const s=l.hooks[r](n);return s==null?null:d.jsx(Cp,{children:s},`vane-slot-${l.name}-${i}`)}catch(s){return console.warn(`[vane/plugin-core] 插件 ${l.name} 的 ${r} 渲染失败`,s),null}})}function jy(e,n,t){return d.jsxs(d.Fragment,{children:[So(e,n,{hook:"renderHeader",position:"before"}),t,So(e,n,{hook:"renderOverlay"}),So(e,n,{hook:"renderHeader",position:"after"}),So(e,n,{hook:"renderFooter"})]})}const Ly={columns:0,columnWidth:0,gap:0,columnHeights:[],totalHeight:0,containerWidth:0,containerHeight:0},Oy={scrollTop:0,scrollLeft:0,scrollHeight:0,scrollWidth:0,clientHeight:0,clientWidth:0,isScrolling:!1,direction:null};function zy(){const e=typeof navigator<"u"?navigator:void 0,n=(e==null?void 0:e.connection)||(e==null?void 0:e.mozConnection)||(e==null?void 0:e.webkitConnection);if(n)return{effectiveType:n.effectiveType||"4g",downlink:Number(n.downlink||10),rtt:Number(n.rtt||50),saveData:!!n.saveData,online:(e==null?void 0:e.onLine)!==!1}}function zu(e,n,t){let r=Number.POSITIVE_INFINITY,o=-1;return e.forEach((l,i)=>{Math.max(0,Math.min(n+t,l.y+l.height)-Math.max(n,l.y))>0&&(i<r&&(r=i),i>o&&(o=i))}),o<0?{start:0,end:0}:{start:r,end:o}}function Dy(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:o=!1}=t,l=y.forwardRef((i,s)=>{const a=y.useRef(null),u=y.useRef(new Map),p=y.useRef(null),c=y.useMemo(()=>zy(),[]),f=y.useRef(null),[v,x]=y.useState(Ly),[w,b]=y.useState(()=>new Map),[g,m]=y.useState(Oy),[h,S]=y.useState(!1),[P,C]=y.useState(i.items??[]),R=y.useCallback(T=>{var le,ke,Se,ve,ln,Xe;const N=()=>{var q;return((q=p.current)==null?void 0:q.getLayoutInfo())??v},D=()=>{var q;return((q=p.current)==null?void 0:q.getAllItemPositions())??w},J=()=>{var q;return((q=p.current)==null?void 0:q.getViewportInfo())??g},U={...T,items:P,itemCount:P.length,containerRef:a,itemRefs:u.current,getItemRef:q=>u.current.get(q)??null,layout:N(),itemPositions:D(),getItemPosition:q=>D().get(q)??null,viewport:J(),visibleItems:new Set,visibleRange:zu(D(),J().scrollTop,J().clientHeight),isLayouting:h,isScrolling:g.isScrolling,isDragging:!!((ke=(le=T.state)==null?void 0:le.dragInfo)!=null&&ke.isDragging),isLoading:!!(((Se=T.state)==null?void 0:Se.isLoading)??!1),hasMore:!!(((ve=T.state)==null?void 0:ve.hasMore)??!0),error:((ln=T.state)==null?void 0:ln.error)??null,sharedData:T.shared,networkInfo:c,dragInfo:(Xe=T.state)==null?void 0:Xe.dragInfo,relayout:()=>{var q;return(q=p.current)==null?void 0:q.relayout()},scrollToItem:(q,Ue)=>{var er;return(er=p.current)==null?void 0:er.scrollToItem(q,Ue)},scrollToTop:q=>{var Ue;return(Ue=p.current)==null?void 0:Ue.scrollToTop(q)},scrollToBottom:q=>{var Ue;return(Ue=p.current)==null?void 0:Ue.scrollToBottom(q)},measureItem:q=>{var Ue;return((Ue=p.current)==null?void 0:Ue.measureItem(q))??Promise.resolve({width:0,height:0})}};return Object.defineProperties(U,{layout:{get:N,enumerable:!0,configurable:!0},itemPositions:{get:D,enumerable:!0,configurable:!0},viewport:{get:J,enumerable:!0,configurable:!0},props:{get:()=>f.current??T.props,enumerable:!0,configurable:!0},visibleRange:{get:()=>{const q=J();return zu(D(),q.scrollTop,q.clientHeight)},enumerable:!0,configurable:!0}}),U},[P,v,w,g,h,c]),A=Ny({plugins:r,props:i,enableDebug:o,containerRef:a,extendContext:R}),j=y.useRef(A.context);j.current=A.context;const F=y.useCallback((T,...N)=>A.execute(T,...N),[A.manager]),K=A.orderedPlugins,O=r.map(T=>T.name).join("|"),z=y.useMemo(()=>{const T=K.filter(U=>{var le;return typeof((le=U.hooks)==null?void 0:le.calculateColumns)=="function"}),N=K.filter(U=>{var le;return typeof((le=U.hooks)==null?void 0:le.calculateColumnWidth)=="function"}),D=K.filter(U=>{var le;return typeof((le=U.hooks)==null?void 0:le.calculateItemPosition)=="function"});if(!T.length&&!N.length&&!D.length)return;const J=(U,le,ke)=>console.warn(`[vane-waterfall] ${U} 的 ${le} 执行失败`,ke);return{calculateColumns:T.length?U=>{var ke,Se,ve;const le=((ve=(Se=(ke=j.current)==null?void 0:ke.containerRef)==null?void 0:Se.current)==null?void 0:ve.clientWidth)??0;for(const ln of T)try{const Xe=ln.hooks.calculateColumns(j.current,le);if(typeof Xe=="number"&&Number.isFinite(Xe))return Xe}catch(Xe){J(ln.name,"calculateColumns",Xe)}}:void 0,calculateColumnWidth:N.length?(U,le,ke)=>{for(const Se of N)try{const ve=Se.hooks.calculateColumnWidth(j.current,ke,le);if(typeof ve=="number"&&Number.isFinite(ve))return ve}catch(ve){J(Se.name,"calculateColumnWidth",ve)}}:void 0,calculateItemPosition:D.length?(U,le,ke)=>{for(const Se of D)try{const ve=Se.hooks.calculateItemPosition(j.current,U,le,ke);if(ve)return ve}catch(ve){J(Se.name,"calculateItemPosition",ve)}}:void 0}},[O]),Z=y.useCallback(()=>{const T=p.current;if(!T)return;const N=T.getLayoutInfo(),D=T.getAllItemPositions(),J=T.getViewportInfo();x(U=>U.totalHeight===N.totalHeight&&U.columns===N.columns&&U.columnWidth===N.columnWidth&&U.containerWidth===N.containerWidth?U:N),b(U=>U.size===D.size?U:D),m(U=>U.scrollTop===J.scrollTop&&U.clientHeight===J.clientHeight&&U.scrollHeight===J.scrollHeight&&U.isScrolling===J.isScrolling?U:J)},[]);y.useEffect(()=>{C(i.items??[])},[i.items]),y.useEffect(()=>{F("onMount")},[F]);const ne=y.useRef(i);y.useEffect(()=>{const T=ne.current;T!==i&&(ne.current=i,F("onPropsChange",T,i))},[i,F]);const E=A.transformProps(i);f.current=E;const _=y.useCallback(async()=>(S(!0),await F("onBeforeLayout")===!1?(S(!1),!1):!0),[F]),W=y.useCallback(()=>{F("onLayout")},[F]),B=y.useCallback(()=>{S(!1),F("onLayoutComplete"),Promise.resolve().then(Z)},[F,Z]),re=K.filter(T=>{var N;return typeof((N=T.hooks)==null?void 0:N.renderItemWrapper)=="function"}),ee=E.renderItem,$n=y.useCallback((T,N)=>{let D=(ee==null?void 0:ee(T,N))??null;for(const J of re)try{const U=J.hooks.renderItemWrapper(j.current,D,N);U!=null&&(D=U)}catch(U){console.warn(`[vane-waterfall] ${J.name} 的 renderItemWrapper 失败`,U)}return D},[ee,O]),oe={...E,containerRefExternal:a,itemRefsExternal:u,debug:E.debug??o,layoutHooks:z??E.layoutHooks,renderItem:$n,children:d.jsx(Cp,{children:jy(A.orderedPlugins,A.context,E.children)}),onMount:()=>{var T;(T=E.onMount)==null||T.call(E)},onUnmount:()=>{var T;(T=E.onUnmount)==null||T.call(E)},onBeforeLayout:async()=>{var N;return await _()===!1?!1:((N=E.onBeforeLayout)==null?void 0:N.call(E))??!0},onLayout:()=>{var T;(T=E.onLayout)==null||T.call(E),W()},onLayoutComplete:()=>{var T;(T=E.onLayoutComplete)==null||T.call(E),B()},onItemMount:(T,N)=>{var D;(D=E.onItemMount)==null||D.call(E,T,N),F("onItemMount",T,N)},onItemUnmount:T=>{var N;(N=E.onItemUnmount)==null||N.call(E,T),F("onItemUnmount",T)},onItemEnterViewport:(T,N)=>{var D;(D=E.onItemEnterViewport)==null||D.call(E,T,N),F("onItemEnterViewport",T,N)},onItemLeaveViewport:(T,N)=>{var D;(D=E.onItemLeaveViewport)==null||D.call(E,T,N),F("onItemLeaveViewport",T,N)},onScroll:(T,N)=>{var D;(D=E.onScroll)==null||D.call(E,T,N),F("onScroll",T,N),Z()},onResize:(T,N)=>{var D;(D=E.onResize)==null||D.call(E,T,N),F("onResize",T,N)},onReachBottom:async T=>{var N;await((N=E.onReachBottom)==null?void 0:N.call(E,T)),await F("onReachBottom",T)},onItemClick:(T,N,D)=>{var J;(J=E.onItemClick)==null||J.call(E,T,N,D),F("onItemClick",T,N,D)}};return d.jsx(e,{ref:T=>{p.current=T,typeof s=="function"?s(T):s&&(s.current=T)},...oe})});return l.displayName="WithPlugins(WaterfallCore)",l}function Ay(e){let n=e%2147483647;return n<=0&&(n+=2147483646),()=>(n=n*16807%2147483647,(n-1)/2147483646)}const oi=["林一白","苏见月","陈默","阿岚","周知夏","陆青野","许星河","沈迟","顾亦","南野","唐小满","白露"],bo=["阴天里的海边公路","手冲咖啡的第 30 天","把阳台改成了书房","城市夜行的三小时","一碗面的做法","老相机与新胶卷","周三的菜市场","窗台上的第四盆绿植","独居第五年的厨房","关于晨跑的碎念","旧书店的午后","这条街的雨"],Po=["摄影","家居","美食","穿搭","旅行","手作","阅读","数码"];function _p(e={}){const{count:n=40,seed:t=20261026,heightRange:r=[140,300],commerce:o=!1}=e,l=Ay(t),[i,s]=r;return Array.from({length:n},(a,u)=>{const p=l(),c=l(),f=l(),v=`c${t}-${u}`;return{id:v,title:bo[u%bo.length]+(u>=bo.length?` · ${Math.floor(u/bo.length)+1}`:""),author:oi[Math.floor(p*oi.length)]??oi[0],height:Math.round((i+c*(s-i))/8)*8,hue:Math.floor(f*360),image:`https://picsum.photos/seed/${v}/400/500`,tag:Po[Math.floor(p*Po.length)%Po.length]??Po[0],price:o?Math.round((29+c*870)/10)*10:0,likes:Math.floor(20+f*9800),minutesAgo:Math.floor(p*60*24*14)}})}function Du(e){return e<60?`${Math.max(1,e)} 分钟前`:e<60*24?`${Math.floor(e/60)} 小时前`:`${Math.floor(e/60/24)} 天前`}function Hy({height:e,hue:n,src:t,badge:r,glyph:o,radius:l=0,deep:i}){const s=(n+42)%360;return d.jsxs("div",{className:`thumb${t?" has-img":""}`,style:{height:e,borderRadius:l,backgroundImage:[`radial-gradient(132% 92% at 16% 6%, hsl(${n} 21% ${i?36:64}%) 0%, hsl(${s} 17% ${i?15:33}%) 100%)`].join(",")},children:[t?d.jsx("img",{className:"thumb-img",src:t,alt:"",loading:"lazy",decoding:"async",draggable:!1,onError:a=>{a.currentTarget.style.display="none"}}):null,o?d.jsx("span",{className:"thumb-glyph",children:o}):null,r?d.jsx("span",{className:"thumb-badge",children:r}):null]})}const Wy=d.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":!0,children:d.jsx("path",{d:"M8 5v14l11-7z"})});function Fy({card:e,variant:n="photo",fixed:t,pinned:r,corner:o}){const l=d.jsx(Hy,{height:t?"100%":e.height,hue:e.hue,src:e.image,radius:0,deep:n==="video",badge:n==="video"?d.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:[Wy,Math.floor(e.minutesAgo/60),":",String(e.minutesAgo%60).padStart(2,"0")]}):n==="product"?`¥${e.price}`:r?"置顶":void 0,glyph:n==="doc"?d.jsx("span",{style:{fontSize:11,letterSpacing:.5},children:e.tag}):void 0});return t?d.jsxs("div",{className:"wf-card is-fixed",style:{height:e.height},children:[d.jsx("div",{className:"wf-card-fill",children:l}),d.jsxs("div",{className:"wf-card-cap",children:[d.jsx("p",{className:"wf-item-title",children:e.title}),d.jsxs("p",{className:"wf-item-meta",children:[e.author," · ",Du(e.minutesAgo)]})]}),o?d.jsx("span",{className:"wf-card-corner",children:o}):null]}):d.jsxs("div",{className:`wf-card is-${n}`,children:[l,d.jsxs("div",{className:"wf-card-cap",children:[d.jsx("p",{className:"wf-item-title",children:e.title}),d.jsx("p",{className:"wf-item-meta",children:n==="product"?d.jsxs(d.Fragment,{children:[d.jsxs("b",{className:"wf-price",children:["¥",e.price]}),d.jsx("span",{className:"wf-sep","aria-hidden":!0,children:"·"}),e.likes," 人收藏"]}):d.jsxs(d.Fragment,{children:[e.author,d.jsx("span",{className:"wf-sep","aria-hidden":!0,children:"·"}),Du(e.minutesAgo)]})})]}),o?d.jsx("span",{className:"wf-card-corner",children:o}):null]})}function By({controls:e,cfg:n,onChange:t}){return d.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(n)).map(r=>{const o=n[r.key];return d.jsxs("label",{className:"ctl",title:r.hint,children:[d.jsxs("span",{className:"ctl-label",children:[r.label,d.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?d.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>t(r.key,!o),"aria-pressed":!!o,children:d.jsx("i",{})}):r.kind==="select"?d.jsx("select",{className:"ctl-select",value:String(o),onChange:l=>t(r.key,l.target.value),children:(r.options??[]).map(l=>d.jsx("option",{value:l.value,children:l.label},l.value))}):d.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:l=>t(r.key,Number(l.target.value))})]},r.key)})})}function Tp({lines:e,title:n="事件日志",empty:t="还没触发 —— 试着滚动、点一张卡",right:r}){return d.jsxs("div",{className:"log",children:[d.jsxs("div",{className:"log-head",children:[d.jsx("span",{children:n}),d.jsxs("span",{className:"log-right",children:[r,d.jsx("b",{children:e.length})]})]}),e.length===0?d.jsx("p",{className:"log-empty",children:t}):d.jsx("ol",{className:"log-list",children:e.map(o=>d.jsxs("li",{className:`log-line is-${o.kind}`,children:[d.jsx("time",{children:o.at}),d.jsx("span",{children:o.text})]},o.id))})]})}const Uy={total:0,rendered:0,totalHeight:0,layoutMs:0,scrolls:0,columns:0};function Gy({items:e}){return d.jsx("div",{className:"keyhint",children:e.map(([n,t])=>d.jsxs("span",{children:[d.jsx("kbd",{children:n}),t]},n))})}function Q(e){const{count:n=48,seed:t=9101,heightRange:r,commerce:o,variant:l="photo",fixed:i,containerStyle:s,pluginKeys:a,instrument:u}=e;return function({cfg:c,log:f,setCfg:v}){var K;const[x,w]=y.useState(()=>_p({count:n,seed:t,heightRange:r,commerce:o})),b=y.useRef(null),[g,m]=y.useState(Uy),h=y.useRef(0),S=y.useRef(0),P=y.useRef(null);P.current={cfg:c,items:x,setItems:w,setCfg:v,log:f,ref:b,meter:g};const C=y.useMemo(()=>{const O=a??Object.keys(c);return JSON.stringify(O.map(z=>[z,c[z]]))},[c]),R=y.useMemo(()=>{var z;const O=((z=e.plugins)==null?void 0:z.call(e,P.current))??[];return O.length?Dy(Ou,O):Ou},[C]),$=y.useCallback(O=>{const z=b.current;if(!z)return;const Z=z.getLayoutInfo(),ne=z.getVisibleRange(),E={total:O,rendered:Math.max(0,ne.end-ne.start+1),totalHeight:Z.totalHeight,layoutMs:performance.now()-S.current,scrolls:h.current,columns:Z.columns};m(_=>_.total===E.total&&_.rendered===E.rendered&&_.columns===E.columns&&Math.abs(_.totalHeight-E.totalHeight)<.5&&_.scrolls===E.scrolls&&Math.abs(_.layoutMs-E.layoutMs)<.05?_:E)},[]),A=y.useCallback(O=>{if(h.current+=1,u&&h.current%4===0){const z=b.current;if(z){const Z=z.getVisibleRange(),ne=Math.max(0,Z.end-Z.start+1);m(E=>E.rendered===ne&&E.scrolls===h.current?E:{...E,rendered:ne,scrolls:h.current})}}},[]),j=y.useMemo(()=>{var z;return{...((z=e.coreProps)==null?void 0:z.call(e,P.current))??{},...u?{onLayout:()=>{S.current=performance.now()},onLayoutComplete:()=>$(x.length),onScroll:A}:null}},[c,x,$,A]);y.useEffect(()=>{var z;const O=(z=e.effect)==null?void 0:z.call(e,P.current);return typeof O=="function"?O:void 0},[]);const F=y.useCallback((O,z)=>{var ne;const Z=(ne=e.decorate)==null?void 0:ne.call(e,P.current,O,z);return d.jsx(Fy,{card:O,variant:l,fixed:i,pinned:Z==null?void 0:Z.pinned,corner:Z==null?void 0:Z.corner})},[]);return d.jsxs("div",{className:"stage",children:[(K=e.chrome)==null?void 0:K.call(e,P.current),d.jsx("div",{className:"stage-scroll",children:d.jsx(R,{ref:b,items:x,keyExtractor:O=>O.id,renderItem:F,containerStyle:{height:"var(--stage-h, 380px)",...s},...j})})]})}}const Vy={slug:"basic",title:"基础示例",group:"basic",intro:"最省事的用法：一批高度不等的卡片，交给 Core 排。",why:"刚接入时先用这一页确认两件事 —— 容器给了高度、卡片真的按 item.height 渲染。这两条不对，后面装什么插件都白搭。",plugs:[],props:["columns={{{columns}}}","gap={{{gap}}}","containerStyle={{ height: 420 }}"],note:"containerStyle 必须给高度。不给高度 = 没有滚动上下文，Core 量不出视口，卡片会全部堆在顶部。",controls:[{key:"columns",label:"列数",kind:"number",init:3,min:1,max:6,hint:"props.columns"},{key:"gap",label:"间距",kind:"number",init:16,min:0,max:32,hint:"props.gap，行/列通用"}]},Qy=Q({count:40,seed:1201,plugins:()=>[],instrument:!0,coreProps:e=>({columns:Number(e.cfg.columns),gap:Number(e.cfg.gap)})}),Ky=Object.freeze(Object.defineProperty({__proto__:null,default:Qy,meta:Vy},Symbol.toStringTag,{value:"Module"})),Yy={slug:"columns",title:"自定义列数",group:"basic",intro:"写死列数，列宽自己算 —— 拖到 6 列看列宽怎么缩。",why:"后台表格、看板、固定版式的商品墙通常就是固定列数，不需要按容器自适应。",plugs:[],props:["columns={{{columns}}}","gap={{{gap}}}","containerStyle={{ height: 420 }}"],note:"写了 columns 又被 AutoColumnPlugin / ResponsiveColumnsPlugin 覆盖是常见困惑：那两个插件在 calculateColumns 钩子里返回列数，优先级高于 props。",controls:[{key:"columns",label:"列数",kind:"number",init:4,min:1,max:6},{key:"gap",label:"间距",kind:"number",init:12,min:0,max:32}]},qy=Q({count:36,seed:1401,plugins:()=>[],instrument:!0,coreProps:e=>({columns:Number(e.cfg.columns),gap:Number(e.cfg.gap)}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["列宽 = (容器宽 − 间距×",Number(e.cfg.columns)-1,") ÷ ",Number(e.cfg.columns)," · 当前 ",d.jsx("b",{children:e.meter.columns})," 列 / 总高 ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px"]})}),Xy=Object.freeze(Object.defineProperty({__proto__:null,default:qy,meta:Yy},Symbol.toStringTag,{value:"Module"})),Jy={slug:"gap",title:"自定义间距",group:"basic",intro:"gap 是简写，rowGap / columnGap 分别覆盖它 —— 用开关切一次就记住了。",why:"图片流要更紧的列间距、更松的行间距，就得拆开写；只想整体松紧就用 gap。",plugs:[],props:["columns={3}",{text:"gap={{{gap}}}",when:e=>!e.split},{text:"rowGap={{{rowGap}}}",when:e=>!!e.split},{text:"columnGap={{{columnGap}}}",when:e=>!!e.split},"containerStyle={{ height: 420 }}"],note:"间距参与布局计算：改 gap 会改变列宽与每列落点，不是 CSS margin。三个同时给的时候 gap 只是「没被覆盖的那部分」的兜底。想让间距随窗口换档用 GapPlugin（下一页）。",controls:[{key:"split",label:"拆开行/列间距",kind:"switch",init:!0,hint:"关掉 → 只留 gap，它立刻生效"},{key:"gap",label:"gap（简写）",kind:"number",init:8,min:0,max:32,when:e=>!e.split},{key:"rowGap",label:"rowGap",kind:"number",init:24,min:0,max:40,when:e=>!!e.split},{key:"columnGap",label:"columnGap",kind:"number",init:8,min:0,max:40,when:e=>!!e.split}]},Zy=Q({count:30,seed:1501,plugins:()=>[],coreProps:e=>({columns:3,...e.cfg.split?{rowGap:Number(e.cfg.rowGap),columnGap:Number(e.cfg.columnGap)}:{gap:Number(e.cfg.gap)}}),chrome:e=>d.jsx("p",{className:"stage-tip",children:e.cfg.split?d.jsxs(d.Fragment,{children:["rowGap ",d.jsx("b",{children:Number(e.cfg.rowGap)})," · columnGap ",d.jsx("b",{children:Number(e.cfg.columnGap)})," ——",d.jsx("b",{children:" gap 被覆盖，此刻是空转的"})]}):d.jsxs(d.Fragment,{children:["gap ",d.jsx("b",{children:Number(e.cfg.gap)})," —— 行列同值，因为没给 rowGap / columnGap"]})})}),ev=Object.freeze(Object.defineProperty({__proto__:null,default:Zy,meta:Jy},Symbol.toStringTag,{value:"Module"})),nv={slug:"ref",title:"Ref 方法调用",group:"advanced",intro:"13 个 ref 方法逐个点一遍，返回值直接写进日志。",why:"图片加载完要重排、点导航要跳到某条、滚动位置要复位 —— 这些都不该改数据，而是调 ref。",plugs:[],props:["ref={ref}","columns={3}","containerStyle={{ height: 420 }}","onItemClick={(i) => ref.current?.scrollToItem(i)}"],note:"getAllItemPositions 返回的是实时 Map，不是渲染快照；虚拟化开启后，未挂载项仍保留测量值（getItemElement 会返回 null）。"},tv=[{key:"relayout",label:"relayout()",run:e=>{var n;return(n=e.ref.current)==null||n.relayout(),"清空高度缓存并重排"}},{key:"top",label:"scrollToTop()",run:e=>{var n;return(n=e.ref.current)==null||n.scrollToTop({behavior:"smooth"}),"回顶"}},{key:"bottom",label:"scrollToBottom()",run:e=>{var n;return(n=e.ref.current)==null||n.scrollToBottom({behavior:"smooth"}),"到底"}},{key:"item",label:"scrollToItem(i)",needsIndex:!0,run:()=>"见下方输入框"},{key:"pos",label:"getItemPosition(i)",needsIndex:!0,run:()=>"见下方输入框"},{key:"allpos",label:"getAllItemPositions()",run:e=>{var r;const n=(r=e.ref.current)==null?void 0:r.getAllItemPositions();if(!n)return"ref 还没就绪";const t=n.get(0);return`共 ${n.size} 项；#0 = { x: ${(t==null?void 0:t.x)??"-"}, y: ${(t==null?void 0:t.y)??"-"} }`}},{key:"colh",label:"getColumnHeights()",run:e=>{var t;return`[${(((t=e.ref.current)==null?void 0:t.getColumnHeights())??[]).map(r=>Math.round(r)).join(", ")}]`}},{key:"layout",label:"getLayoutInfo()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getLayoutInfo();return n?`${n.columns} 列 · 列宽 ${Math.round(n.columnWidth)} · 总高 ${Math.round(n.totalHeight)}`:"ref 还没就绪"}},{key:"viewport",label:"getViewportInfo()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getViewportInfo();return n?`scrollTop ${Math.round(n.scrollTop)} · 视口 ${n.clientHeight} · 内容 ${Math.round(n.scrollHeight)}`:"ref 还没就绪"}},{key:"range",label:"getVisibleRange()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getVisibleRange();return n?`渲染区间 ${n.start} … ${n.end}`:"ref 还没就绪"}},{key:"force",label:"forceUpdate()",run:e=>{var n;return(n=e.ref.current)==null||n.forceUpdate(),"强制重渲染"}},{key:"el",label:"getItemElement(0)",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getItemElement(0);return n?`<div data-index="0"> ${n.offsetWidth}×${n.offsetHeight}`:"取不到（可能未挂载）"}},{key:"measure",label:"measureItem(0)",run:async e=>{var t;const n=await((t=e.ref.current)==null?void 0:t.measureItem(0));return n?`{ width: ${Math.round(n.width)}, height: ${Math.round(n.height)} }`:"量不到"}},{key:"container",label:"getContainer()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getContainer();return n?`容器 ${n.clientWidth}×${n.clientHeight}，scrollHeight ${n.scrollHeight}`:"ref 还没就绪"}}];function rv({api:e}){const[n,t]=y.useState([]),[r,o]=y.useState(5),l=y.useCallback((s,a="event")=>{const u=new Date().toLocaleTimeString("zh-CN",{hour12:!1});t(p=>[{id:p.length+1,at:u,text:s,kind:a},...p].slice(0,30))},[]),i=y.useCallback(async s=>{const a=e.ref.current;if(!a){l("ref.current 为空 —— 舞台还没挂载","warn");return}if(s.needsIndex){if(s.key==="item")a.scrollToItem(r,{behavior:"smooth",block:"start"}),l(`scrollToItem(${r}, { block: "start" })`);else{const u=a.getItemPosition(r);l(u?`getItemPosition(${r}) = { x: ${Math.round(u.x)}, y: ${Math.round(u.y)}, w: ${Math.round(u.width)}, h: ${Math.round(u.height)} }`:`getItemPosition(${r}) = null`)}return}l(`${s.label} → ${await s.run(e)}`)},[e,r,l]);return d.jsxs("div",{className:"console",children:[d.jsxs("div",{className:"console-head",children:[d.jsx("span",{children:"Ref 控制台"}),d.jsxs("label",{className:"console-idx",children:["index",d.jsx("input",{type:"number",min:0,max:e.items.length-1,value:r,onChange:s=>o(Number(s.target.value))})]})]}),d.jsx("div",{className:"console-grid",children:tv.map(s=>d.jsx("button",{type:"button",className:"console-btn",onClick:()=>void i(s),children:s.label},s.key))}),d.jsx(Tp,{lines:n,title:"调用记录",empty:"点上面任意一个方法"})]})}const ov=Q({count:36,seed:1701,instrument:!0,plugins:()=>[],coreProps:e=>({columns:3,onItemClick:n=>e.log(`onItemClick #${n}（Core 的项点击回调）`)}),chrome:e=>d.jsx(rv,{api:e})}),lv=Object.freeze(Object.defineProperty({__proto__:null,default:ov,meta:nv},Symbol.toStringTag,{value:"Module"})),iv={slug:"lifecycle",title:"生命周期和事件",group:"advanced",intro:"13 个回调接满，滚一下就能看见谁在什么时候触发。",why:"要在「布局完成」后做点什么（补曝光统计、量真实高度、写埋点），就得知道 onLayout 与 onLayoutComplete 的差别：后者里读 layout 才是新的。",plugs:[],props:["onMount={() => log('onMount')}","onLayoutComplete={() => log('布局完成')}","onScroll={(t) => log('scroll ' + t)}","onItemEnterViewport={(i) => log('enter #' + i)}","onReachBottom={() => log('到底了')}"],note:"onUnmount 只在组件卸载时触发（换页时能在浏览器控制台看到）。视口事件按「可见比例」算，部分可见也会触发一次 enter。"},sv=Q({count:40,seed:1901,instrument:!0,plugins:()=>[],coreProps:e=>{const{log:n}=e;let t=0,r=0;return{columns:3,onMount:()=>n("onMount · 容器挂载"),onBeforeLayout:()=>(n("onBeforeLayout · 返回 false 会中断本次布局","info"),!0),onLayout:()=>n("onLayout · 开始算位置","info"),onLayoutComplete:()=>n("onLayoutComplete · 位置已写入，现在读 layout 是新的"),onItemMount:o=>{o<3&&n(`onItemMount #${o}`,"info")},onItemUnmount:o=>{o<3&&n(`onItemUnmount #${o}`,"info")},onItemEnterViewport:(o,l)=>{r+=1,r<40&&n(`onItemEnterViewport #${o} 可见 ${l.visibleRatio*100|0}%`)},onItemLeaveViewport:o=>{r<40&&n(`onItemLeaveViewport #${o}`,"info")},onScroll:o=>{const l=performance.now();l-t<400||(t=l,n(`onScroll ${Math.round(o)}`,"info"))},onResize:(o,l)=>n(`onResize ${o}×${l}`),onReachBottom:o=>n(`onReachBottom 距底 ${Math.round(o)}px`),onItemClick:o=>n(`onItemClick #${o}（点卡片试试）`)}},chrome:()=>d.jsx("p",{className:"stage-tip",children:"滚动、点卡片、拖窗口宽度 —— 三种行为分别触发滚动、点击、尺寸三类事件"})}),av=Object.freeze(Object.defineProperty({__proto__:null,default:sv,meta:iv},Symbol.toStringTag,{value:"Module"})),uv={slug:"advanced",title:"高级配置",group:"advanced",intro:"padding、useTransform、alignmentMode、节流防抖、debug —— 一页调完。",why:"嵌在带内边距的容器里（padding 要参与布局，不能靠外层 margin）、要给每一项套自定义样式（itemClassName）、或怀疑布局算错要看耗时（debug）时用。",plugs:[],props:["columns={3}","padding={{{padding}}}",'alignmentMode="{{{mode}}}"',"useTransform={{{useTransform}}}","throttleDelay={{{throttle}}}","debounceDelay={{{debounce}}}","debug={{{debug}}}","containerStyle={{ height: 420 }}"],note:"padding 是参与布局计算的（可用宽度 = 容器宽 − 左右 padding），所以它不能当成外层 margin 用。useTransform=false 时项改用 top/left 定位，打印和读 offsetLeft 更直观。",controls:[{key:"padding",label:"padding",kind:"number",init:12,min:0,max:40},{key:"mode",label:"alignmentMode",kind:"select",init:"shortest",options:[{label:"shortest 最矮列",value:"shortest"},{label:"balanced 最少项",value:"balanced"},{label:"sequential 轮转",value:"sequential"}],hint:"balanced 列高会不齐，但每列张数接近"},{key:"useTransform",label:"useTransform",kind:"switch",init:!0},{key:"throttle",label:"throttleDelay",kind:"number",init:16,min:0,max:120,step:8,nonLayout:!0},{key:"debounce",label:"debounceDelay",kind:"number",init:150,min:0,max:600,step:10,nonLayout:!0},{key:"debug",label:"debug",kind:"switch",init:!1,hint:"控制台打印布局耗时"}]},cv=Q({count:34,seed:2101,plugins:()=>[],instrument:!0,coreProps:e=>({columns:3,padding:Number(e.cfg.padding),alignmentMode:String(e.cfg.mode),useTransform:!!e.cfg.useTransform,throttleDelay:Number(e.cfg.throttle),debounceDelay:Number(e.cfg.debounce),debug:!!e.cfg.debug}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["定位方式：",d.jsx("b",{children:e.cfg.useTransform?"transform":"top / left"})," · 内边距"," ",d.jsx("b",{children:Number(e.cfg.padding)})," · 列数 ",d.jsx("b",{children:e.meter.columns})," · 总高"," ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px"]})}),dv=Object.freeze(Object.defineProperty({__proto__:null,default:cv,meta:uv},Symbol.toStringTag,{value:"Module"}));function pv(e){return{name:"AlignmentPlugin",priority:60,enabled:!0,hooks:{transformProps:n=>({...n,alignmentMode:e.mode}),onResize:n=>{var t;(t=n.relayout)==null||t.call(n)}}}}const fv="AlignmentPlugin",mv="设置瀑布流的列分配策略。shortest 让每列尽量等高（视觉最自然），balanced 让每列项数接近，sequential 按 index 轮转（可预测位置，适合需要与外部索引对齐的场景）。",gv="2.0.0",hv=["layout","布局"],yv=[{name:"mode",type:'"shortest" | "balanced" | "sequential"',default:"shortest",description:"列分配策略"}],vv=`// 指定列分配策略：最矮列优先（shortest）/ 项数均衡（balanced）/ 顺序轮转（sequential）。
const Waterfall = withPlugins(WaterfallCore, [
  createAlignmentPlugin({
    mode: "shortest",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,xv=["三种列分配策略","只改 props.alignmentMode，不影响其他配置","与 ResponsiveColumns / AutoColumn 正交"],wv=["内容流：默认 shortest","等长卡片：balanced 更整齐","需要与后端顺序对齐：sequential"],Sv=["balanced 与 shortest 在列高相同时都取最左列，视觉上左偏是预期行为。"],Rp={name:fv,description:mv,since:gv,tags:hv,config:yv,example:vv,features:xv,useCases:wv,notes:Sv},Mp=Object.assign(pv,{meta:Rp});function bv(e){if(!(e.minColumnWidth>0))throw new Error("[vane-waterfall] AutoColumnPlugin 需要正数的 minColumnWidth");return{name:"AutoColumnPlugin",priority:55,enabled:!0,hooks:{calculateColumns:(n,t)=>{const r=n.props,o=r.columnGap??r.gap??0,l=r.padding,i=typeof l=="number"?l*2:((l==null?void 0:l.left)??0)+((l==null?void 0:l.right)??0),s=Math.max(0,t-i);if(!s)return r.columns??1;const a=Math.max(1,Math.floor((s+o)/(e.minColumnWidth+o))),u=Math.max(1,e.minColumns??1),p=e.maxColumns??Number.POSITIVE_INFINITY;return Math.min(Math.max(a,u),p)}}}}const Pv="AutoColumnPlugin",kv="按「容器可用宽度 ÷ 最小列宽」自动决定列数，取代写死 3 列。走 D1-A 布局钩子（calculateColumns），拿到的是真实容器宽度，不是 window.innerWidth。",Cv="2.0.0",_v=["layout","layout-hook","响应式"],Tv=[{name:"minColumnWidth",type:"number",default:"—",description:"每列最小宽度 px（必填）"},{name:"maxColumns",type:"number",default:"Infinity",description:"列数上限"},{name:"minColumns",type:"number",default:"1",description:"列数下限"}],Rv=`// 按容器宽与最小列宽自动算列数，窄屏自动降列。
const Waterfall = withPlugins(WaterfallCore, [
  createAutoColumnPlugin({
    maxColumns: "Infinity",
    minColumns: 1,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Mv=["ResponsiveColumnsPlugin"],$v=["按容器宽度（不是视口宽度）算列数","列数上下限可夹","与 Gap / Padding 一起算，留白不吞列宽"],Ev=["响应式信息流","侧边栏宽度可拖动的后台看板","移动端 → 桌面端同一套代码"],Iv=["与 ResponsiveColumnsPlugin 同时装会互相覆盖列数，只选一个。"],$p={name:Pv,description:kv,since:Cv,tags:_v,config:Tv,example:Rv,conflicts:Mv,features:$v,useCases:Ev,notes:Iv},Ep=Object.assign(bv,{meta:$p});function Nv(e){const n=Object.values(e.breakpoints).sort((t,r)=>t.width-r.width);return{name:"ResponsiveColumnsPlugin",priority:55,enabled:!0,hooks:{calculateColumns:(t,r)=>{const o=e.fallbackColumns??t.props.columns??3;if(!r)return o;let l=o;for(const i of n)r>=i.width&&(l=i.columns);return l}}}}const jv="ResponsiveColumnsPlugin",Lv="用一张断点表控制列数，命中哪档用哪档。走 D1-A 布局钩子（calculateColumns），按容器宽度匹配断点。",Ov="2.0.0",zv=["layout","layout-hook","响应式"],Dv=[{name:"breakpoints",type:"Record<string, { width: number; columns: number }>",default:"—",description:"断点表，按 width 升序匹配"}],Av=`// 按断点表决定列数（如 640 → 2 列、1024 → 3 列、1440 → 4 列）。
const Waterfall = withPlugins(WaterfallCore, [
  createResponsiveColumnsPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Hv=["AutoColumnPlugin"],Wv=["断点表驱动，设计稿几档就写几档","按容器宽度而非视口宽度匹配","未命中任何断点时回退到 props.columns"],Fv=["严格对齐设计断点的站点","同一个组件嵌在不同宽度的容器里"],Bv=["与 AutoColumnPlugin 互斥。"],Ip={name:jv,description:Lv,since:Ov,tags:zv,config:Dv,example:Av,conflicts:Hv,features:Wv,useCases:Fv,notes:Bv},Np=Object.assign(Nv,{meta:Ip});function Uv(e){const n=typeof window<"u"?window.innerWidth:1024,t=e.responsive||{};return n>=1200&&t.xl?t.xl:n>=992&&t.lg?t.lg:n>=768&&t.md?t.md:n<768&&t.sm?t.sm:{}}function Gv(e){return{name:"GapPlugin",priority:50,enabled:!0,hooks:{transformProps:n=>{const t={columnGap:e.columnGap,rowGap:e.rowGap},r=Uv(e),o={columnGap:r.columnGap??t.columnGap??n.columnGap,rowGap:r.rowGap??t.rowGap??n.rowGap};return{...n,...o}},onResize:n=>{var t;(t=n.relayout)==null||t.call(n)}}}}const Vv="GapPlugin",Qv="把 rowGap / columnGap 收敛到一处配置，并支持按窗口宽度切换间距（窄屏 8px、宽屏 16px 这类）。",Kv="2.0.0",Yv=["layout","间距"],qv=[{name:"columnGap",type:"number",default:"props.columnGap",description:"列间距 px"},{name:"rowGap",type:"number",default:"props.rowGap",description:"行间距 px"},{name:"responsive",type:"{ sm?, md?, lg?, xl? }",default:"—",description:"断点覆盖（按 window 宽度）"}],Xv=`// 统一控制行/列间距，支持按断点给不同间距。
const Waterfall = withPlugins(WaterfallCore, [
  createGapPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Jv=["行列间距一处配置","断点覆盖（sm/md/lg/xl）","不填则回退到 props"],Zv=["设计规范里间距随断点变化","同一组件在不同页面用不同密度"],e0=["断点判断用的是 window.innerWidth（间距通常跟视口走，与列数按容器算不一样）。","断点是「命中即覆盖」：桌面窗口 ≥1200 又配了 responsive.lg，那就一直是 lg 的值，config.columnGap/rowGap 在这档不起作用；想让手写值生效就别给该档位配 responsive。","sm 只在小屏（<768）生效，不会被当成兜底档套到桌面端。"],jp={name:Vv,description:Qv,since:Kv,tags:Yv,config:qv,example:Xv,features:Jv,useCases:Zv,notes:e0},Lp=Object.assign(Gv,{meta:jp});function n0(e){return{name:"FixedHeightPlugin",priority:45,enabled:!0,hooks:{transformProps:n=>{const{itemHeight:t}=e,r=(n.items||[]).map(o=>typeof o=="object"&&o!==null&&"height"in o?{...o,height:t}:o);return{...n,items:r}},onResize:n=>{var t;(t=n.relayout)==null||t.call(n)}}}}const t0="FixedHeightPlugin",r0="把数据里带 height 字段的项统一改写为固定高度，瀑布流变成等高网格。适合「图少字多」的卡片流——等高反而更好扫读。",o0="2.0.0",l0=["layout","网格"],i0=[{name:"itemHeight",type:"number",default:"—",description:"统一项高 px（必填）"}],s0=`// 把项高度统一成固定值，瀑布流退化为等高网格。
const Waterfall = withPlugins(WaterfallCore, [
  createFixedHeightPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,a0=["等高网格（严格对齐）","只改数据里已有的 height 字段","与 Pagination / Filter 组合仍然成立"],u0=["商品列表（图固定比例）","后台看板卡片","需要严格栅格对齐的页面"],c0=["数据里没有 height 字段时不会生效——高度由 renderItem 自己的内容决定。"],Op={name:t0,description:r0,since:o0,tags:l0,config:i0,example:s0,features:a0,useCases:u0,notes:c0},zp=Object.assign(n0,{meta:Op});function d0(e){const n=new Set(e.pinnedIndices),t=Math.max(0,e.column??0),r=new Map;return{name:"PinItemPlugin",priority:100,enabled:!0,hooks:{onBeforeLayout:()=>(r.clear(),!0),calculateItemPosition:(o,l,i,s)=>{const a=o.props.rowGap??o.props.gap??0;if(!n.has(l)){const p=r.get(s.column);return p!==void 0&&s.y<p?{y:p}:void 0}const u=r.get(t)??0;return r.set(t,u+i+a),{column:t,y:u,width:s.width,height:i,row:0}}}}}const p0="PinItemPlugin",f0="把若干索引的项钉在顶部指定列，其余项从它们下方继续排。走 D1-A 布局钩子（calculateItemPosition），是旧版宣称但从未生效的能力。",m0="2.0.0",g0=["layout","layout-hook","置顶"],h0=[{name:"pinnedIndices",type:"number[]",default:"[]",description:"要钉住的项索引"},{name:"column",type:"number",default:"0",description:"钉到第几列"}],y0=`// 把指定索引的项钉在顶部同一列，不参与常规列高推进（广告位 / 公告卡）。
const Waterfall = withPlugins(WaterfallCore, [
  createPinItemPlugin({
    pinnedIndices: [],
    column: 0,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,v0=["置顶项不占常规列高：后续项从置顶块下方开始","支持多列分别置顶（column 可不同）","每次布局前重置偏移，items 变化后不会累加错位"],x0=["信息流首位的推广卡","公告 / 置顶帖","需要固定在左上角的活动位"],w0=["置顶项之间按 pinnedIndices 顺序纵向堆叠，同一列多条会依次往下排。","置顶会挤掉该列的正常网格位置，pinnedIndices 建议控制在 1~2 条。","换列后的 x 由布局引擎按本轮列宽补齐，插件只返回 column 即可 —— 自己用「列宽 + 间距」反推 x 会在间距由其它插件（GapPlugin）注入时算错。"],Dp={name:p0,description:f0,since:m0,tags:g0,config:h0,example:y0,features:v0,useCases:x0,notes:w0},Ap=Object.assign(d0,{meta:Dp});function S0(e){return{name:"ThrottlePlugin",priority:80,enabled:!0,hooks:{transformProps:n=>({...n,throttleDelay:e.scroll,debounceDelay:e.resize??n.debounceDelay})}}}const b0="ThrottlePlugin",P0="接管 Core 的 throttleDelay（滚动回调节流）与 debounceDelay（尺寸变化后多久重排）。默认 16ms / 150ms，长列表滚动卡顿时可以放宽到 32 / 300。",k0="2.0.0",C0=["perf","性能"],_0=[{name:"scroll",type:"number",default:"—",description:"滚动节流 ms（必填）"},{name:"resize",type:"number",default:"props.debounceDelay",description:"布局防抖 ms"}],T0=`// 调整滚动节流与尺寸防抖，弱网/低端机可放宽。
const Waterfall = withPlugins(WaterfallCore, [
  createThrottlePlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,R0=["滚动节流与布局防抖分开调","只改 props，不改算法","与 DebounceLayoutPlugin 叠加时后者优先"],M0=["低端安卓机长列表","滚动时 CPU 占用过高","拖拽侧栏时减少重排"],$0=["scroll 低于 16ms 没有意义（浏览器帧率上限）。"],Hp={name:b0,description:P0,since:k0,tags:C0,config:_0,example:T0,features:R0,useCases:M0,notes:$0},Wp=Object.assign(S0,{meta:Hp});function E0(e){return{name:"DebounceLayoutPlugin",priority:75,enabled:!0,hooks:{transformProps:n=>({...n,debounceDelay:e.delay})}}}const I0="DebounceLayoutPlugin",N0="只调 debounceDelay：容器宽度连续变化（抽屉展开、分栏拖拽）时，等变化停下来再算一次布局，避免每帧重排。",j0="2.0.0",L0=["perf","性能"],O0=[{name:"delay",type:"number",default:"—",description:"布局防抖 ms（必填）"}],z0=`// 单独放大布局防抖，容器频繁变宽时（抽屉/侧栏动画）不抖。
const Waterfall = withPlugins(WaterfallCore, [
  createDebounceLayoutPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,D0=["只影响布局时机，不影响渲染","可被 ThrottlePlugin 覆盖","对移动端软键盘弹出也有效"],A0=["可折叠侧栏","分栏宽度拖拽","横竖屏切换"],H0=["delay 过大会让「展开后布局」明显滞后，建议 120–250ms。"],Fp={name:I0,description:N0,since:j0,tags:L0,config:O0,example:z0,features:D0,useCases:A0,notes:H0},Bp=Object.assign(E0,{meta:Fp}),W0="(prefers-reduced-motion: reduce)";function F0(e={}){var p;const n=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia(W0):null;let t=(n==null?void 0:n.matches)??!1;const r=e.disableTransform??!0,o=e.removeTransitions??!0,l=new Map,i=new Map,s=c=>{if(!(!c||!o))if(t){const f=c.style.transitionDuration;f&&f!=="0s"?i.set(c,f):i.has(c)||i.set(c,f),c.style.setProperty("transition-duration","0s")}else{const f=i.get(c);if(f===void 0)return;f?c.style.setProperty("transition-duration",f):c.style.removeProperty("transition-duration"),i.delete(c)}},a=()=>l.forEach(c=>s(c)),u=c=>{c.matches!==t&&(t=c.matches,a())};return(p=n==null?void 0:n.addEventListener)==null||p.call(n,"change",u),{name:"ReducedMotionPlugin",priority:70,enabled:!0,hooks:{transformProps:c=>{if(!t)return c;const f={...c};return r&&(f.useTransform=!1),o&&(f.itemStyle={...c.itemStyle??{},transitionDuration:"0s"}),f},onItemMount:(c,f,v)=>{l.set(f,v),s(v)},onItemUnmount:(c,f)=>{l.delete(f)},onLayoutComplete:c=>{c.itemRefs.forEach((f,v)=>{f&&l.set(v,f),s(f)})},onUnmount:()=>{var c;(c=n==null?void 0:n.removeEventListener)==null||c.call(n,"change",u),l.clear(),i.clear()}}}}const B0="ReducedMotionPlugin",U0="检测 `prefers-reduced-motion: reduce`，命中后把 useTransform 关掉并清掉项上的 transition。前庭功能敏感用户不会因为滚动时的位置微动而不适。",G0="2.0.0",V0=["perf","a11y"],Q0=[{name:"disableTransform",type:"boolean",default:"true",description:"命中偏好时改用 left/top 定位"},{name:"removeTransitions",type:"boolean",default:"true",description:"命中偏好时清掉项过渡"}],K0=`// 尊重系统「减少动画」偏好：关掉 transform 定位与项过渡。
const Waterfall = withPlugins(WaterfallCore, [
  createReducedMotionPlugin({
    disableTransform: true,
    removeTransitions: true,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Y0=["系统偏好驱动，零配置生效","两项能力可分别关闭","与 TransitionPlugin 同装时优先生效"],q0=["政务 / 医疗类站点","无障碍合规要求","低性能设备"],X0=["偏好由 matchMedia 驱动，并监听 change：运行中改系统设置即时生效（定位方式要等下一次重渲染才切过来）。","只压 `transition-duration`，不写 `transition: none` —— 写简写会把 TransitionPlugin 的过渡整条覆盖，撤销偏好后无从还原。","与 TransitionPlugin 同装不是冲突：ReducedMotion 优先级更高，会先执行并压住过渡。"],Up={name:B0,description:U0,since:G0,tags:V0,config:Q0,example:K0,features:Y0,useCases:q0,notes:X0},Gp=Object.assign(F0,{meta:Up});function J0(e={}){const n=e.duration??300,t=e.easing??"ease";return{name:"TransitionPlugin",priority:65,enabled:!0,hooks:{onItemMount:(r,o,l)=>{l.style.transition=`transform ${n}ms ${t}, opacity ${n}ms ${t}`},onLayout:r=>{r.itemRefs.forEach(o=>{o&&(o.style.transition=`transform ${n}ms ${t}, opacity ${n}ms ${t}`)})}}}}const Z0="TransitionPlugin",e1="给每个项挂上 transform + opacity 的 CSS 过渡，布局重排、分页切换、筛选后重新排列时位置变化是滑过去的，不是瞬移。",n1="2.0.0",t1=["perf","动效"],r1=[{name:"duration",type:"number",default:"300",description:"过渡时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数"}],o1=`// 布局变化时给项加 transform/opacity 过渡，插入新数据不「闪现」。
const Waterfall = withPlugins(WaterfallCore, [
  createTransitionPlugin({
    duration: 300,
    easing: "ease",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,l1=["ReducedMotionPlugin"],i1=["项位置变化平滑过渡","挂载时即生效（onItemMount）","与 ReducedMotionPlugin 互斥"],s1=["筛选 / 排序后重排","分页切换","动态插入卡片"],a1=["首屏大量项同时过渡会有一次「整体滑入」，想要更克制可以把 duration 降到 150ms。"],Vp={name:Z0,description:e1,since:n1,tags:t1,config:r1,example:o1,conflicts:l1,features:i1,useCases:s1,notes:a1},ia=Object.assign(J0,{meta:Vp});function u1(e={}){return{name:"FilterPlugin",priority:40,enabled:!0,hooks:{transformProps:n=>{const t=Array.isArray(n.items)?n.items:[],r=n.filterFn||e.predicate;if(typeof r!="function")return n;const o=t.filter((l,i)=>{try{return!!r(l,i)}catch{return!0}});return{...n,items:o}},onPropsChange:(n,t,r)=>{var a;const o=t==null?void 0:t.filterFn,l=r==null?void 0:r.filterFn;if(((typeof(r==null?void 0:r.scrollToTopOnFilterChange)=="boolean"?r.scrollToTopOnFilterChange:void 0)??!!e.scrollToTop)&&o!==l){const u=(r==null?void 0:r.scrollToTopBehavior)??e.scrollBehavior??"auto";(a=n.scrollToTop)==null||a.call(n,{behavior:u})}}}}}const c1="FilterPlugin",d1="用谓词函数过滤数据，优先读 `props.filterFn`，没有就用工厂里传入的 predicate。过滤条件变了可以自动滚回顶部（默认不开）。",p1="2.0.0",f1=["data","数据管线"],m1=[{name:"predicate",type:"(item, index) => boolean",default:"—",description:"默认谓词，可被 props.filterFn 覆盖"},{name:"scrollToTop",type:"boolean",default:"false",description:"条件变化后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],g1=`// 按谓词过滤 items，参数变化可自动回顶。
const Waterfall = withPlugins(WaterfallCore, [
  createFilterPlugin({
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,h1=["谓词抛错时按「保留」处理，不会整表消失","props.filterFn 优先，便于页面动态换过滤条件","可与 Sort / Search / Pagination 串联"],y1=["分类 Tab 切换","只看有货 / 只看促销","价格区间筛选"],v1=["数据管线的执行顺序由 priority 决定：Filter(40) → Sort(30) → Search(20) → Pagination(10)。","先过滤再分页，页码总数才是过滤后的总数——顺序反了会出现「第 2 页空」。"],Qp={name:c1,description:d1,since:p1,tags:f1,config:m1,example:g1,features:h1,useCases:y1,notes:v1},Kp=Object.assign(u1,{meta:Qp});function x1(e={}){return{name:"SortPlugin",priority:30,enabled:!0,hooks:{transformProps:n=>{const t=Array.isArray(n.items)?n.items:[],r=n.sortComparator||e.comparator;if(typeof r!="function")return n;const o=[...t].sort((l,i)=>{try{return r(l,i)}catch{return 0}});return{...n,items:o}},onPropsChange:(n,t,r)=>{var a;const o=t==null?void 0:t.sortComparator,l=r==null?void 0:r.sortComparator;if(((typeof(r==null?void 0:r.scrollToTopOnSortChange)=="boolean"?r.scrollToTopOnSortChange:void 0)??!!e.scrollToTop)&&o!==l){const u=(r==null?void 0:r.scrollToTopBehavior)??e.scrollBehavior??"auto";(a=n.scrollToTop)==null||a.call(n,{behavior:u})}}}}}const w1="SortPlugin",S1="用比较函数排序，优先读 `props.sortComparator`。排序总是在过滤之后、分页之前执行，保证「第 N 页」是排序后的第 N 页。",b1="2.0.0",P1=["data","数据管线"],k1=[{name:"comparator",type:"(a, b) => number",default:"—",description:"默认比较函数，可被 props.sortComparator 覆盖"},{name:"scrollToTop",type:"boolean",default:"false",description:"排序变化后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],C1=`// 按比较函数排序 items，比较函数变化可自动回顶。
const Waterfall = withPlugins(WaterfallCore, [
  createSortPlugin({
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,_1=["稳定排序（不改原数组）","比较函数抛错按相等处理","与 Filter / Search 顺序固定"],T1=["价格 / 时间排序","热度排序","手动置顶项优先"],R1=["排序会复制数组（`[...items].sort`），不会改调用方传入的 items。"],Yp={name:w1,description:S1,since:b1,tags:P1,config:k1,example:C1,features:_1,useCases:T1,notes:R1},qp=Object.assign(x1,{meta:Yp});function M1(e={}){const n=e.fields??[];return{name:"SearchPlugin",priority:20,enabled:!0,hooks:{transformProps:t=>{const r=String(t.searchQuery??"").trim(),o=Array.isArray(t.items)?t.items:[];if(!r)return t;const l=r.toLowerCase(),i=o.filter(s=>{if(typeof s!="object"||s===null)return!1;const a=n.length>0?n:Object.keys(s);for(const u of a){const p=s[u];if(p!=null&&String(p).toLowerCase().includes(l))return!0}return!1});return{...t,items:i}},onPropsChange:(t,r,o)=>{var u;const l=String((r==null?void 0:r.searchQuery)??""),i=String((o==null?void 0:o.searchQuery)??"");if(((typeof(o==null?void 0:o.scrollToTopOnSearchChange)=="boolean"?o.scrollToTopOnSearchChange:void 0)??!!e.scrollToTop)&&l!==i){const p=(o==null?void 0:o.scrollToTopBehavior)??e.scrollBehavior??"auto";(u=t.scrollToTop)==null||u.call(t,{behavior:p})}}}}}const $1="SearchPlugin",E1="读取 `props.searchQuery`，在指定字段上做大小写不敏感的 `includes` 匹配。没指定字段就对对象的全部自有字段匹配。",I1="2.0.0",N1=["data","数据管线","搜索"],j1=[{name:"fields",type:"(keyof T)[]",default:"[]",description:"参与匹配的字段；空则匹配全部自有字段"},{name:"scrollToTop",type:"boolean",default:"false",description:"关键词变化后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],L1=`// 按 props.searchQuery 做大小写不敏感的多字段包含匹配。
const Waterfall = withPlugins(WaterfallCore, [
  createSearchPlugin({
    fields: [],
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,O1=["大小写不敏感","多字段 OR 匹配","空关键词直接放行（不触发过滤）"],z1=["站内搜索结果页","后台列表即时搜索","商品名 / 店铺名联合搜索"],D1=["纯前端 `includes`，不排序也不做拼音；要相关性排序请在 Search 之后接 SortPlugin。"],Xp={name:$1,description:E1,since:I1,tags:N1,config:j1,example:L1,features:O1,useCases:z1,notes:D1},sa=Object.assign(M1,{meta:Xp});function A1(e={}){return{name:"PaginationPlugin",priority:10,enabled:!0,hooks:{transformProps:n=>{const t=Math.max(1,Number(n.pageIndex??1)),r=Math.max(1,Number(n.pageSize??e.pageSize??20)),o=Array.isArray(n.items)?n.items:[],l=(t-1)*r,i=l+r,s=o.slice(l,i);return{...n,items:s}},onPropsChange:(n,t,r)=>{var a;const o=Math.max(1,Number((t==null?void 0:t.pageIndex)??1)),l=Math.max(1,Number((r==null?void 0:r.pageIndex)??1));if(((typeof(r==null?void 0:r.scrollToTopOnPageChange)=="boolean"?r.scrollToTopOnPageChange:void 0)??!!e.scrollToTop)&&o!==l){const u=(r==null?void 0:r.scrollToTopBehavior)??e.scrollBehavior??"auto";(a=n.scrollToTop)==null||a.call(n,{behavior:u})}}}}}const H1="PaginationPlugin",W1="读 `props.pageIndex`（1 基）与 `props.pageSize` 切片。放在数据管线最末端，保证切的是「过滤 + 排序 + 搜索」之后的结果。",F1="2.0.0",B1=["data","数据管线","分页"],U1=[{name:"pageSize",type:"number",default:"props.pageSize ?? 20",description:"每页条数"},{name:"scrollToTop",type:"boolean",default:"false",description:"翻页后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],G1=`// 按 props.pageIndex / pageSize 切片，页码从 1 开始。
const Waterfall = withPlugins(WaterfallCore, [
  createPaginationPlugin({
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,V1=["InfiniteScrollPlugin"],Q1=["1 基页码（与 UI 分页器一致）","pageIndex 非法值自动夹到 1","翻页自动回顶可选"],K1=["后台列表分页","搜索结果分页","与 URLSyncPlugin 配合做可分享链接"],Y1=["pageSize 优先级：props.pageSize > 工厂 config.pageSize > 20。"],Jp={name:H1,description:W1,since:F1,tags:B1,config:U1,example:G1,conflicts:V1,features:Q1,useCases:K1,notes:Y1},Zp=Object.assign(A1,{meta:Jp});function q1(e={}){const n=Math.max(1,e.threshold??300);let t=!1;return{name:"InfiniteScrollPlugin",priority:35,enabled:!0,hooks:{transformProps:r=>({...r,reachBottomOffset:n}),onReachBottom:async(r,o)=>{if(t||r.hasMore===!1||o>n)return;const l=e.onLoadMore??r.props.onLoadMore;if(typeof l=="function"){t=!0;try{await Promise.resolve(l())}finally{t=!1}}},onUnmount:()=>{t=!1}}}}const X1="InfiniteScrollPlugin",J1="监听 Core 的 onReachBottom，在距底部 `threshold` 像素内触发 onLoadMore。自带并发锁：上一次还没结束不会重复触发。",Z1="2.0.0",ex=["data","加载更多"],nx=[{name:"threshold",type:"number",default:"300",description:"触发距离 px"},{name:"onLoadMore",type:"() => void | Promise<void>",default:"props.onLoadMore",description:"加载回调"}],tx=`// 滚动到距底部阈值内触发加载更多，带并发锁防重复请求。
const Waterfall = withPlugins(WaterfallCore, [
  createInfiniteScrollPlugin({
    threshold: 300,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,rx=["PaginationPlugin"],ox=["距底 300px 预加载，滚到底时数据已就位","并发锁：加载中不重复触发","context.hasMore 为 false 时自动停"],lx=["信息流无限滚动","画廊继续加载","搜索结果瀑布流"],ix=["阈值不要小于一屏（约 600px），否则用户滚到底会看到空白等待。","翻页类场景请用 PaginationPlugin，两者不要同装。"],ef={name:X1,description:J1,since:Z1,tags:ex,config:nx,example:tx,conflicts:rx,features:ox,useCases:lx,notes:ix},nf=Object.assign(q1,{meta:ef});function sx(e={}){const{log:n=!1,showOverlay:t=!1}=e,r=new Map,o=()=>Array.from(r.values()).reduce((l,i)=>l+i,0);return{name:"ClickAnalyticsPlugin",enabled:!0,getStats:()=>({total:o(),byIndex:Array.from(r.entries()).map(([l,i])=>({index:l,clicks:i})).sort((l,i)=>l.index-i.index)}),hooks:{onMount:l=>{var i;(i=l.sharedData)==null||i.set("click-count",o())},onItemClick:(l,i,s,a)=>{var c,f,v;const u=(r.get(i)??0)+1;r.set(i,u);const p=o();(c=l.sharedData)==null||c.set("click-count",p),(f=l.bus)==null||f.emit("analytics:click",{index:i,item:s,event:a,total:p}),(v=l.forceUpdate)==null||v.call(l),n&&console.log(`[ClickAnalytics] item=${i} total=${p}`)},renderOverlay:l=>{var s;if(!t)return null;const i=((s=l.sharedData)==null?void 0:s.get("click-count"))||0;return d.jsxs("div",{style:{position:"absolute",top:12,right:12,padding:"10px 12px",background:"#222",color:"#fff",borderRadius:8,fontSize:14,fontWeight:600,boxShadow:"0 4px 12px rgba(0,0,0,0.25)",border:"1px solid rgba(255,255,255,0.15)",pointerEvents:"none",zIndex:99},children:["点击次数：",i,d.jsx("div",{style:{fontSize:12,fontWeight:400,opacity:.85,marginTop:4},children:"提示：点击任意卡片观察计数变化"})]})}}}}const ax="ClickAnalyticsPlugin",ux="统计每次项点击并累计总数，向 bus 发 `analytics:click`（带 index / item / total），`getStats()` 可随时取出按 index 的计数。默认只上报不显示角标，接入真实版式时不会被调试面板盖住内容。",cx="2.0.0",dx=["interaction","埋点"],px=[{name:"log",type:"boolean",default:"false",description:"是否在控制台打印每次点击"},{name:"showOverlay",type:"boolean",default:"false",description:"是否显示右上角计数角标"}],fx=`// 统计项点击次数，发 \`analytics:click\` 事件，可选角标与日志。
const Waterfall = withPlugins(WaterfallCore, [
  createClickAnalyticsPlugin({
    log: false,
    showOverlay: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,mx=["点击总量 + 按 index 明细（getStats）","bus 事件可被外部订阅上报","角标默认关闭"],gx=["内容流点击率统计","AB 实验埋点","调试点击行为"],hx=["生产环境请把数据从 bus 事件或 getStats() 接到自己的埋点 SDK，不要让插件直接打日志。","计数只在内存里，刷新即清零 —— 想持久化要自己定时取 getStats() 上报。"],tf={name:ax,description:ux,since:cx,tags:dx,config:px,example:fx,features:mx,useCases:gx,notes:hx},rf=Object.assign(sx,{meta:tf});function yx(e={}){const n=e.showOverlay??e.showOverlaySummary??!1,t=new Map,r=new Map;let o=!1;const l=i=>Array.from(i.values()).reduce((s,a)=>s+a,0);return{name:"HeatmapAnalyticsPlugin",enabled:!0,getStats:()=>{const i=new Set([...t.keys(),...r.keys()]);return{totalViews:l(t),totalClicks:l(r),items:Array.from(i).sort((s,a)=>s-a).map(s=>({index:s,views:t.get(s)??0,clicks:r.get(s)??0}))}},hooks:{onLayoutComplete:i=>{if(o)return;const{start:s,end:a}=i.visibleRange;for(let u=s;u<=a;u++)t.set(u,(t.get(u)||0)+1);o=!0},onItemEnterViewport:(i,s)=>{t.set(s,(t.get(s)||0)+1)},onItemClick:(i,s)=>{var a;r.set(s,(r.get(s)||0)+1),(a=i.forceUpdate)==null||a.call(i)},renderOverlay:()=>{if(!n)return null;const i=Array.from(t.values()).reduce((a,u)=>a+u,0),s=Array.from(r.values()).reduce((a,u)=>a+u,0);return d.jsxs("div",{style:{position:"sticky",top:0,zIndex:100,display:"flex",gap:12,alignItems:"center",padding:"6px 10px",background:"rgba(0,0,0,0.6)",color:"white",borderRadius:8,fontSize:12,marginBottom:8},children:[d.jsxs("span",{children:["曝光总计: ",i]}),d.jsxs("span",{children:["点击总计: ",s]})]})}}}}const vx="HeatmapAnalyticsPlugin",xx="统计每项进入视口次数与点击次数，可选顶部汇总条，`getStats()` 取出每项明细。曝光是瀑布流里最容易统计错的东西（滚动时反复进出视口），交给插件比自己写 IntersectionObserver 少踩坑。",wx="2.0.0",Sx=["interaction","埋点","曝光"],bx=[{name:"showOverlay",type:"boolean",default:"false",description:"是否显示顶部汇总条"},{name:"showOverlaySummary",type:"boolean",default:"—",description:"showOverlay 的旧别名"}],Px=`// 统计每项曝光次数与点击次数，可显示汇总条。
const Waterfall = withPlugins(WaterfallCore, [
  createHeatmapAnalyticsPlugin({
    showOverlay: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,kx=["按项的曝光 / 点击双计数","首屏曝光在 onLayoutComplete 补一次","getStats() 输出可上报的扁平结构"],Cx=["信息流曝光分析","广告位可见性验证","调试曝光策略"],_x=["首屏曝光靠 onLayoutComplete 补一次，否则第一帧显示 0。","真实上报要自己做去重与批次（插件只负责计数，不区分「同一项第几次进入」）。","计数只在内存里，刷新即清零 —— 定时取 getStats() 上报。"],of={name:vx,description:xx,since:wx,tags:Sx,config:bx,example:Px,features:kx,useCases:Cx,notes:_x},lf=Object.assign(yx,{meta:of}),dr="data-drag-over";function Au(e,n){var l;if(typeof document>"u")return null;const t=document.elementFromPoint(e,n),r=(l=t==null?void 0:t.closest)==null?void 0:l.call(t,"[data-index]");if(!r)return null;const o=Number(r.getAttribute("data-index"));return Number.isFinite(o)?o:null}function Tx(e={}){const n=e.enabled??!0,t=e.showHandle??!1,r=e.touchHoldMs??180,o=(a,u,p)=>{var v;const c=Number(p);if(!Number.isFinite(c)||c===u)return;a.sharedData.set("drag-from",c),a.sharedData.set("drag-to",u),a.bus.emit("drag:reorder",{from:c,to:u});const f=a.props.items;(v=e.onReorder)==null||v.call(e,c,u,f==null?void 0:f[c])},l=()=>{document.querySelectorAll(`[${dr}]`).forEach(a=>a.removeAttribute(dr))},i=()=>{typeof document>"u"||(l(),document.body.style.userSelect="",document.body.style.cursor="")},s=(a,u,p)=>{if(a.pointerType==="mouse")return;const c=a.clientX,f=a.clientY,v=Date.now();let x=!1,w=null;const b=m=>{if(!x){const S=Date.now()-v>=r,P=Math.hypot(m.clientX-c,m.clientY-f)>=6;if(!S||!P)return;x=!0,document.body.style.userSelect="none",document.body.style.cursor="grabbing"}m.preventDefault();const h=Au(m.clientX,m.clientY);if(h!==w&&(l(),w=h,h!=null)){const S=document.querySelector(`[data-index="${h}"]`);S==null||S.setAttribute(dr,"")}},g=m=>{if(window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),i(),!x)return;const h=Au(m.clientX,m.clientY);h!=null&&o(p,h,String(u))};window.addEventListener("pointermove",b,{passive:!1}),window.addEventListener("pointerup",g),window.addEventListener("pointercancel",g)};return{name:"DragReorderPlugin",enabled:n,hooks:{renderItemWrapper:(a,u,p)=>n?d.jsx("div",{draggable:!0,onDragStart:c=>{var f;(f=c.dataTransfer)==null||f.setData("text/plain",String(p)),a.sharedData.set("drag-from",p)},onDragOver:c=>{c.preventDefault()},onDragEnter:()=>{const c=document.querySelector(`[data-index="${p}"]`);c==null||c.setAttribute(dr,"")},onDragLeave:()=>{const c=document.querySelector(`[data-index="${p}"]`);c==null||c.removeAttribute(dr)},onDrop:c=>{var f;c.preventDefault(),i(),o(a,p,((f=c.dataTransfer)==null?void 0:f.getData("text/plain"))??"")},onDragEnd:i,onPointerDown:c=>s(c,p,a),style:{cursor:"grab",...t?{border:"1px dashed #bdbdbd",borderRadius:6}:null},children:u}):u}}}const Rx="DragReorderPlugin",Mx="给每个项加拖拽能力，松手时回调 `onReorder(from, to)`，同时向 bus 发 `drag:reorder`。鼠标走原生 HTML5 拖拽，触屏走「长按 + pointer」——触摸设备上 `draggable` 根本不触发，旧版因此在手机上完全失效。",$x="2.0.0",Ex=["interaction","拖拽"],Ix=[{name:"enabled",type:"boolean",default:"true",description:"是否启用拖拽"},{name:"onReorder",type:"(from, to, item) => void",default:"—",description:"重排回调"},{name:"showHandle",type:"boolean",default:"false",description:"是否显示虚线边框提示可拖"},{name:"touchHoldMs",type:"number",default:"180",description:"触屏长按多久进入拖拽（ms），0 表示不需要长按"}],Nx=`// 鼠标走 HTML5 draggable，触屏走长按 + pointer，松手时回调 onReorder(from, to)。
const Waterfall = withPlugins(WaterfallCore, [
  createDragReorderPlugin({
    enabled: true,
    showHandle: false,
    touchHoldMs: 180,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,jx=["鼠标：原生 HTML5 拖拽，无额外依赖","触屏：长按 180ms 后 pointer 拖拽（可配 touchHoldMs）","onReorder 回调真正可用，bus 发 `drag:reorder`"],Lx=["后台卡片排序","收藏夹手动排序","仪表盘组件排列"],Ox=["插件只负责「拖」和「告诉你从哪到哪」，数组重排由调用方在 onReorder 里做。","触屏用长按区分「想滚」和「想拖」：不这样做，手指一滑就变成拖拽，页面滚不动。"],sf={name:Rx,description:Mx,since:$x,tags:Ex,config:Ix,example:Nx,features:jx,useCases:Lx,notes:Ox},af=Object.assign(Tx,{meta:sf});function zx(e={}){const n=e.getAnchorId||(r=>r==null?void 0:r.id);let t;return{name:"ScrollAnchorPlugin",enabled:!0,hooks:{onMount:r=>{var o;t=(o=r.bus)==null?void 0:o.on("anchor:scrollToId",l=>{var a,u;const s=(((a=r.props)==null?void 0:a.items)||[]).findIndex((p,c)=>n(p,c)===l.id);s>=0&&((u=r.scrollToItem)==null||u.call(r,s,{behavior:"smooth",block:"start"}))})},onUnmount:()=>t==null?void 0:t()}}}const Dx="ScrollAnchorPlugin",Ax='不需要自己算索引：外部只管 `bus.emit("anchor:scrollToId", { id })`，插件用 getAnchorId 找到对应项并滚过去。适合「从消息跳到某条内容」。',Hx="2.0.0",Wx=["interaction","滚动"],Fx=[{name:"getAnchorId",type:"(item, index) => string | number | undefined",default:"item.id",description:"从项里取锚点 id"}],Bx=`// 监听 \`anchor:scrollToId\` 事件，按业务 id 滚动到对应项。
const Waterfall = withPlugins(WaterfallCore, [
  createScrollAnchorPlugin({
    getAnchorId: "item.id",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Ux=["按业务 id 定位，不用算下标","onMount 订阅 / onUnmount 退订（不泄漏）","平滑滚动"],Gx=["从通知跳转到具体卡片","目录点击定位","外链深链定位"],Vx=["目标项必须已在 items 里；分页场景请先切到对应页再发事件。"],uf={name:Dx,description:Ax,since:Hx,tags:Wx,config:Fx,example:Bx,features:Ux,useCases:Gx,notes:Vx},cf=Object.assign(zx,{meta:uf});function Qx(e){const n=new Set,t=()=>{if(n.size<=e.poolSize)return;const r=n.values().next().value;typeof r=="number"&&n.delete(r)};return{name:"RecyclePlugin",enabled:!0,hooks:{onItemEnterViewport:(r,o)=>{const l=r.getItemRef(o);l&&(l.style.visibility="visible"),n.add(o),t()},onItemLeaveViewport:(r,o)=>{const l=r.getItemRef(o);l&&(l.style.visibility="hidden"),n.delete(o)},onItemUnmount:(r,o)=>{n.delete(o)},onUnmount:()=>{n.clear()}}}}const Kx="RecyclePlugin",Yx="纯绘制层优化：项离开视口就 `visibility: hidden`，回来再显示。DOM 节点不销毁，滚动位置与已加载的图片都保留，适合「项里有视频/Canvas，重建代价高」的场景。",qx="2.0.0",Xx=["interaction","性能"],Jx=[{name:"poolSize",type:"number",default:"—",description:"同时保持可见的项数上限（超出则回收最早的）"}],Zx=`// 视口外的项设 \`visibility: hidden\`，降低长列表的绘制压力。
const Waterfall = withPlugins(WaterfallCore, [
  createRecyclePlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,ew=["不销毁 DOM，只隐藏","项内媒体不重新加载","与虚拟化正交（一个省绘制、一个省节点）"],nw=["项内含视频 / canvas","长列表滚动发虚","低端设备省电"],tw=["与 Core 的 `virtualize` 同开会让项被卸载又隐藏，收益互相抵消，建议只选一个。","只改 visibility 不改布局，所以不会引起重排。"],df={name:Kx,description:Yx,since:qx,tags:Xx,config:Jx,example:Zx,features:ew,useCases:nw,notes:tw},pf=Object.assign(Qx,{meta:df});function rw(e={}){const n=e.containerRole??"list",t=e.itemRole??"listitem",r=e.enableTabIndex??!0,o=e.containerLabel??"Waterfall list",l=i=>{const s=i.containerRef.current;s&&(s.setAttribute("role",n),s.setAttribute("aria-label",o),s.setAttribute("aria-busy",i.isLayouting?"true":"false"))};return{name:"A11yPlugin",enabled:!0,hooks:{onMount:i=>{l(i)},onLayoutComplete:i=>{l(i)},renderItemWrapper:(i,s,a)=>d.jsx("div",{role:t,"aria-posinset":a+1,"aria-setsize":i.itemCount,tabIndex:r?0:void 0,style:{outline:"none"},children:s})}}}const ow="A11yPlugin",lw="把瀑布流补成读屏可理解的列表：容器 `role=list` + `aria-label`，每项 `role=listitem` + `aria-posinset` / `aria-setsize`，并可选加 `tabIndex` 让键盘能逐项聚焦。",iw="2.0.0",sw=["ui","a11y"],aw=[{name:"containerRole",type:"string",default:'"list"',description:"容器 role"},{name:"itemRole",type:"string",default:'"listitem"',description:"项 role"},{name:"enableTabIndex",type:"boolean",default:"true",description:"项是否可 Tab 聚焦"},{name:"containerLabel",type:"string",default:'"Waterfall list"',description:"容器 aria-label"}],uw=`// 给容器与项补 ARIA role / label / posinset，支持键盘 Tab 遍历。
const Waterfall = withPlugins(WaterfallCore, [
  createA11yPlugin({
    containerRole: "list",
    itemRole: "listitem",
    enableTabIndex: true,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,cw=["容器 / 项 role 成对补齐","aria-posinset + aria-setsize 正确标注序号","键盘可逐项聚焦"],dw=["政务 / 金融等合规站点","读屏用户可用的信息流","键盘操作优先的桌面端"],pw=["项数很多时 `tabIndex=0` 会让 Tab 变长，建议配合「跳转主内容」链接使用。"],ff={name:ow,description:lw,since:iw,tags:sw,config:aw,example:uw,features:cw,useCases:dw,notes:pw},mf=Object.assign(rw,{meta:ff}),Hu="GROUPS";function fw(e={}){const n=e.groupBy??(o=>(o==null?void 0:o.category)??"default"),t=e.showOverlay??!1,r=o=>{const l=new Map;return(o.props.items??[]).forEach((i,s)=>{const a=n(i,s);l.has(a)||l.set(a,[]),l.get(a).push(s)}),o.sharedData.set(Hu,l),l.size>0&&o.bus.emit("grouping:change",{groups:l}),l};return{name:"GroupingPlugin",enabled:!0,hooks:{onMount:o=>{r(o)},onLayoutComplete:o=>{r(o)},onPropsChange:o=>{r(o)},renderOverlay:o=>{if(!t)return null;const l=o.sharedData.get(Hu)??new Map;if(l.size===0)return null;const i=Array.from(l.entries()).slice(0,3);return d.jsxs("div",{style:{position:"absolute",top:12,left:12,zIndex:99,background:"#111827",color:"#fff",padding:"10px 12px",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.25)",border:"1px solid rgba(255,255,255,0.15)",minWidth:150,fontSize:12,pointerEvents:"none"},children:[d.jsxs("div",{style:{opacity:.85,marginBottom:6},children:["分组：",l.size," 组"]}),i.map(([s,a])=>d.jsxs("div",{children:[String(s)," · ",a.length," 项"]},String(s)))]})}}}}const mw="GroupingPlugin",gw="用 groupBy 把项按业务字段分组，结果放进 sharedData 的 `GROUPS`（Map<组键, 索引数组>），供 StickyHeaderPlugin、分组统计条等消费。挂载即算一次，之后 props 变化重算。",hw="2.0.0",yw=["ui","分组"],vw=[{name:"groupBy",type:"(item, index) => string | number",default:'item.category ?? "default"',description:"分组函数"},{name:"showOverlay",type:"boolean",default:"false",description:"是否显示分组统计角标"}],xw=`// 按字段把项分组，结果写进 sharedData(GROUPS) 供吸顶条 / 统计用。
const Waterfall = withPlugins(WaterfallCore, [
  createGroupingPlugin({
    groupBy: "item.category ?? \\"default\\"",
    showOverlay: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,ww=["挂载即计算（旧版只在 props 变化时算，首屏永远拿不到分组）","结果写 sharedData，跨插件可读","统计角标默认关闭"],Sw=["按分类分组的信息流","按日期分组的时间线","吸顶条显示当前分组"],bw=["分组只产出索引映射，不改变渲染顺序；要视觉分组请自己按分组建行。"],gf={name:mw,description:gw,since:hw,tags:yw,config:vw,example:xw,features:ww,useCases:Sw,notes:bw},aa=Object.assign(fw,{meta:gf});function Pw(e={}){const n=e.title||"分组标题",t=e.showHint??!1;return{name:"StickyHeaderPlugin",enabled:!0,hooks:{renderOverlay:r=>{var i;const o=((i=r.sharedData)==null?void 0:i.get("GROUPS"))||new Map,l=o.size>0?Array.from(o.keys())[0]:void 0;return d.jsxs("div",{style:{position:"sticky",top:0,zIndex:20,background:"#111827",color:"#fff",borderBottom:"1px solid rgba(255,255,255,0.15)",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",padding:"10px 14px",fontSize:15,fontWeight:600},children:[n," ",l!==void 0?`：${String(l)}`:"",t?d.jsx("span",{style:{marginLeft:8,fontSize:12,opacity:.8},children:"向下滚动观察吸顶"}):null]})}}}}const kw="StickyHeaderPlugin",Cw="在滚动容器内渲染一条 `position: sticky` 的标题条，始终贴住容器顶部。装了 GroupingPlugin 时自动显示第一个分组名，也可用 title 写死。",_w="2.0.0",Tw=["ui","吸顶"],Rw=[{name:"title",type:"string",default:'"分组标题"',description:"标题文案"},{name:"showHint",type:"boolean",default:"false",description:"是否显示「向下滚动观察」提示"}],Mw=`// 滚动容器内的吸顶标题条，可与分组联动显示当前组。
const Waterfall = withPlugins(WaterfallCore, [
  createStickyHeaderPlugin({
    title: "分组标题",
    showHint: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,$w=["sticky 吸顶，不依赖额外容器","与 Grouping 联动显示当前组","提示文案默认关闭"],Ew=["分组信息流","按日期分组的时间线","长列表的上下文提示"],Iw=["sticky 生效要求它作为滚动容器的直接子元素——由 composeSlots 保证，单测已锁。"],hf={name:kw,description:Cw,since:_w,tags:Tw,config:Rw,example:Mw,features:$w,useCases:Ew,notes:Iw},yf=Object.assign(Pw,{meta:hf});function Nw(e={}){const n=e.storageKey||"waterfall-bookmark",t=e.scrollBehavior||"smooth",r=o=>{var a;const l=o;if(!l)return!1;const i=(a=l.tagName)==null?void 0:a.toLowerCase(),s=(l.getAttribute&&l.getAttribute("contenteditable"))==="true";return i==="input"||i==="textarea"||s};return{name:"BookmarkPlugin",enabled:!0,hooks:{onMount:o=>{const l=i=>{var u,p;if(r(i.target))return;const s=(i.key||"").toLowerCase(),a=i.code||"";if(s==="b"||a==="KeyB"){const c=((u=o.containerRef)==null?void 0:u.current)||null;let f=0;c&&c.scrollHeight>c.clientHeight?f=c.scrollTop:f=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;try{localStorage.setItem(n,String(Math.max(0,f)))}catch{}}else if(s==="r"||a==="KeyR"){let c=0;try{const v=localStorage.getItem(n)||"0";c=Math.max(0,Number(v)||0)}catch{}const f=((p=o.containerRef)==null?void 0:p.current)||null;f&&f.scrollHeight>f.clientHeight?f.scrollTo({top:c,behavior:t}):window.scrollTo({top:c,behavior:t})}};return window.addEventListener("keydown",l,{capture:!0}),document.addEventListener("keydown",l,{capture:!0}),()=>{window.removeEventListener("keydown",l,{capture:!0}),document.removeEventListener("keydown",l,{capture:!0})}}}}}const jw="BookmarkPlugin",Lw="长列表读到一半要跳走时按 **B** 存位置，回来按 **R** 复原。焦点在输入框/可编辑区域时不拦截按键。",Ow="2.0.0",zw=["ui","滚动","快捷键"],Dw=[{name:"storageKey",type:"string",default:'"waterfall-bookmark"',description:"localStorage 键名"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"smooth"',description:"恢复时的滚动行为"}],Aw=`// 按 B 记录滚动位置、按 R 跳回（localStorage），忽略输入框按键。
const Waterfall = withPlugins(WaterfallCore, [
  createBookmarkPlugin({
    storageKey: "waterfall-bookmark",
    scrollBehavior: "smooth",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Hw=["B 存 / R 取，零 UI 侵入","自动区分容器滚动与页面滚动","输入框内不误触"],Ww=["长文列表阅读","后台大表格浏览","演示时快速复位"],Fw=["键名全局共用，一个页面里多处瀑布流请各自传不同的 storageKey。"],vf={name:jw,description:Lw,since:Ow,tags:zw,config:Dw,example:Aw,features:Hw,useCases:Ww,notes:Fw},xf=Object.assign(Nw,{meta:vf});function Bw(e={}){const n=e.storageKey||"waterfall-state",t=e.persistScroll??!0,r=e.persistKeys||["pageIndex","pageSize","searchQuery"];let o=!1;function l(){try{const s=localStorage.getItem(n);return s?JSON.parse(s):null}catch{return null}}function i(s){try{localStorage.setItem(n,JSON.stringify(s))}catch{}}return{name:"StatePersistencePlugin",enabled:!0,hooks:{transformProps:s=>{if(o)return s;const a=l();if(!a)return s;const u={...s};let p=!1;return r.forEach(c=>{a[c]!==void 0&&(u[c]=a[c],p=!0)}),p&&(o=!0),u},onMount:s=>{var p,c;const a=l();if(!a)return;if(t){const f=Number(a.scrollTop??0),v=s.containerRef.current;v?v.scrollTo({top:f,behavior:"auto"}):(p=s.scrollToTop)==null||p.call(s,{behavior:"auto"})}const u={};if(r.forEach(f=>{a[f]!==void 0&&(u[f]=a[f])}),Object.keys(u).length>0&&((c=s.bus)==null||c.emit("state:restored",u),typeof window<"u"))try{window.dispatchEvent(new CustomEvent("waterfall:state-restored",{detail:u}))}catch{}},onPropsChange:(s,a,u)=>{const c={...l()||{}},f=u??{};r.forEach(v=>{const x=f[v];x!==void 0&&(c[v]=x)}),i(c)},onUnmount:s=>{var p;const a={};t&&(a.scrollTop=((p=s.containerRef.current)==null?void 0:p.scrollTop)||0);const u=s.props??{};r.forEach(c=>{const f=u[c];f!==void 0&&(a[c]=f)}),i(a)}}}}const Uw="StatePersistencePlugin",Gw="三个时机各做一件事：首次渲染把快照里的 pageIndex / searchQuery 注入 props；挂载后恢复 scrollTop；props 变化与卸载时写回快照。刷新页面不丢进度。",Vw="2.0.0",Qw=["ui","持久化"],Kw=[{name:"storageKey",type:"string",default:'"waterfall-state"',description:"localStorage 键名"},{name:"persistScroll",type:"boolean",default:"true",description:"是否持久化滚动位置"},{name:"persistKeys",type:"string[]",default:'["pageIndex","pageSize","searchQuery"]',description:"要持久化的 props 键"}],Yw=`// 把滚动位置与分页/查询状态存 localStorage，回来时恢复。
const Waterfall = withPlugins(WaterfallCore, [
  createStatePersistencePlugin({
    storageKey: "waterfall-state",
    persistScroll: true,
    persistKeys: ["pageIndex","pageSize","searchQuery"],
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,qw=["滚动位置 + 分页/查询一起存","首帧注入只做一次，不会覆盖用户操作","SSR / 隐私模式下降级为不持久化"],Xw=["后台列表刷新不丢页","搜索结果返回定位","移动端来回切换页面"],Jw=["只能恢复「值」，不能替你把它写回 React state——页面应订阅 `state:restored` 事件或读 bus。","localStorage 不可用（隐私模式/配额满）时静默跳过，不会抛错。"],wf={name:Uw,description:Gw,since:Vw,tags:Qw,config:Kw,example:Yw,features:qw,useCases:Xw,notes:Jw},Sf=Object.assign(Bw,{meta:wf});function Zw(e={}){const n=e.mode||"hash",t=e.keys||["pageIndex","pageSize","searchQuery"];function r(){try{if(n==="hash"){const l=window.location.hash||"",i=l.indexOf("?"),s=i>=0?l.slice(i+1):l.replace(/^#/,""),a=new URLSearchParams(s),u={};return t.forEach(p=>{const c=a.get(p);c!==null&&(u[p]=c)}),u}else{const l=new URLSearchParams(window.location.search),i={};return t.forEach(s=>{const a=l.get(s);a!==null&&(i[s]=a)}),i}}catch{return{}}}function o(l){try{const i=new URLSearchParams;t.forEach(a=>{const u=l[a];u!=null&&String(u).length>0&&i.set(a,String(u))});const s=i.toString();if(n==="hash"){const a=window.location.hash||"",c=`#${a.replace(/^#/,"").split("?")[0]||""}${s?`?${s}`:""}`;a!==c&&history.replaceState(null,"",`${window.location.pathname}${window.location.search}${c}`)}else{const u=window.location.pathname+(s?`?${s}`:"")+(window.location.hash||"");history.replaceState(null,"",u)}}catch{}}return{name:"URLSyncPlugin",enabled:!0,hooks:{onMount:l=>{var s;const i=r();(s=l.bus)==null||s.emit("urlsync:init",i)},onPropsChange:(l,i,s)=>{const a={},u=s??{};t.forEach(p=>{const c=u[p];c!==void 0&&(a[p]=c)}),o(a)}}}}const eS="URLSyncPlugin",nS="props 变化时把指定键写进 URL（hash 或 search），挂载时读出来广播 `urlsync:init`。刷新与分享都能还原筛选状态。",tS="2.0.0",rS=["ui","URL","可分享"],oS=[{name:"mode",type:'"hash" | "search"',default:'"hash"',description:"写 hash 还是 search"},{name:"keys",type:"string[]",default:'["pageIndex","pageSize","searchQuery"]',description:"要同步的 props 键"}],lS=`// 把分页/搜索/排序同步进 URL（hash 或 search），链接可分享。
const Waterfall = withPlugins(WaterfallCore, [
  createURLSyncPlugin({
    mode: "hash",
    keys: ["pageIndex","pageSize","searchQuery"],
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,iS=["hash 模式会保留已有路由路径","用 replaceState，不污染后退栈","SSR 安全：无 window 时直接跳过"],sS=["搜索结果可分享","后台筛选状态可刷新","带参数的深链"],aS=["只做单向同步（props → URL）与初始读取；URL 前进后退的监听请页面自己做。"],bf={name:eS,description:nS,since:tS,tags:rS,config:oS,example:lS,features:iS,useCases:sS,notes:aS},Pf=Object.assign(Zw,{meta:bf}),uS={sm:{width:0,columns:2},md:{width:560,columns:3},lg:{width:800,columns:4}},cS={slug:"responsive-columns",title:"响应式列数",group:"plugin",plugin:"ResponsiveColumnsPlugin",intro:"按断点表切列数：< 560 两列，560 起三列，800 起四列。",why:"设计稿给了明确的「平板 3 列 / 桌面 4 列」规范时用断点表；只想要「每列至少多宽」就用 AutoColumn（下一页）。",plugs:[{fn:"createResponsiveColumnsPlugin",cfg:"breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 560, columns: 3 }, lg: { width: 800, columns: 4 } }",why:"按容器宽度命中最近一档，读的是容器宽不是 window.innerWidth"}],props:["columns={2}","gap={12}","containerStyle={{ height: 420 }}"],note:"与 AutoColumnPlugin 互斥：两个都实现 calculateColumns，同开会交替覆盖，列数看起来会「闪」。",controls:[{key:"simWidth",label:"模拟容器宽",kind:"number",init:760,min:360,max:1100,step:20}]},dS=Q({count:28,seed:2301,plugins:()=>[Np({breakpoints:uS})],instrument:!0,coreProps:e=>({gap:12,containerStyle:{height:"var(--stage-h, 380px)",width:Number(e.cfg.simWidth)}}),chrome:e=>{const n=Number(e.cfg.simWidth),t=n>=800?"lg → 4 列":n>=560?"md → 3 列":"sm → 2 列";return d.jsxs("p",{className:"stage-tip",children:["容器宽 ",d.jsx("b",{children:n})," · 命中 ",d.jsx("b",{children:t})," · 实际 ",d.jsx("b",{children:e.meter.columns})," 列"]})}}),pS=Object.freeze(Object.defineProperty({__proto__:null,default:dS,meta:cS},Symbol.toStringTag,{value:"Module"})),fS={slug:"auto-column",title:"自动列数",group:"plugin",plugin:"AutoColumnPlugin",intro:"给一个最小列宽，列数自己算：floor((可用宽 + gap) / (最小列宽 + gap))。",why:"版式没有硬性列数要求、只要求「图片别小于 200px」时用它，比写一堆断点省事。",plugs:[{fn:"createAutoColumnPlugin",cfg:"minColumnWidth: {{minColumnWidth}}, maxColumns: {{maxColumns}}",why:"按最小列宽算列数，容器变宽自动加列、变窄自动减列"}],props:["gap={12}","containerStyle={{ height: 420 }}"],note:"算的是容器宽（padding 已扣除）。列数上限用 maxColumns 卡住，否则超宽屏会排出 8 列小图。",controls:[{key:"minColumnWidth",label:"minColumnWidth",kind:"number",init:200,min:120,max:320,step:10},{key:"maxColumns",label:"maxColumns",kind:"number",init:4,min:2,max:6},{key:"simWidth",label:"模拟容器宽",kind:"number",init:900,min:360,max:1100,step:20}]},mS=Q({count:30,seed:2401,instrument:!0,plugins:e=>[Ep({minColumnWidth:Number(e.cfg.minColumnWidth),maxColumns:Number(e.cfg.maxColumns)})],coreProps:e=>({gap:12,containerStyle:{height:"var(--stage-h, 380px)",width:Number(e.cfg.simWidth)}}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["最小列宽 ",d.jsx("b",{children:Number(e.cfg.minColumnWidth)})," · 容器宽"," ",d.jsx("b",{children:Number(e.cfg.simWidth)})," · 算出 ",d.jsx("b",{children:e.meter.columns})," 列（上限"," ",Number(e.cfg.maxColumns),"）"]})}),gS=Object.freeze(Object.defineProperty({__proto__:null,default:mS,meta:fS},Symbol.toStringTag,{value:"Module"})),hS={slug:"alignment",title:"对齐策略",group:"plugin",plugin:"AlignmentPlugin",intro:"shortest / balanced / sequential，切一下就能看出列高差在哪。",why:"卡片高差大又想让底部别太参差用 shortest（默认）；想每列张数一样用 balanced；位置可预测用 sequential。",plugs:[{fn:"createAlignmentPlugin",cfg:'mode: "{{mode}}"',why:"改写 alignmentMode，等价于 Core 的 props.alignmentMode，但可以按环境动态决定"}],props:["gap={12}","containerStyle={{ height: 420 }}"],note:"列高相同时三者都取最小索引列（左优先）—— 这是刻意保留的旧行为，别指望 balanced 会把第一张放到「看起来更空」的那列。",controls:[{key:"mode",label:"mode",kind:"select",init:"shortest",options:[{label:"shortest 最矮列（默认）",value:"shortest"},{label:"balanced 项数最少",value:"balanced"},{label:"sequential 按序轮转",value:"sequential"}]}]},yS=Q({count:14,seed:2501,heightRange:[120,360],instrument:!0,plugins:e=>[Mp({mode:String(e.cfg.mode)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["当前策略 ",d.jsx("b",{children:String(e.cfg.mode)})," · ",e.items.length," 张卡 → 看三列底部是否齐"]})}),vS=Object.freeze(Object.defineProperty({__proto__:null,default:yS,meta:hS},Symbol.toStringTag,{value:"Module"})),xS={slug:"fixed-height",title:"固定高度",group:"plugin",plugin:"FixedHeightPlugin",intro:"统一每项高度，从错落流变成规整网格。",why:"视频封面墙、图库缩略网格这类要求「整行齐平」的版式，靠这个插件而不是给每张图写死 CSS。",plugs:[{fn:"createFixedHeightPlugin",cfg:"itemHeight: {{itemHeight}}",why:"改写 item.height，缩略图与文案一起放进固定高度的盒子里"}],props:["columns={3}","gap={12}","containerStyle={{ height: 420 }}"],note:"插件只改数据字段，不碰 DOM。卡片组件必须把 item.height 用上（示例里的 FeedCard 传 fixed 就是干这个），否则看起来「插件没生效」。",controls:[{key:"itemHeight",label:"itemHeight",kind:"number",init:176,min:100,max:260,step:4}]},wS=Q({count:18,seed:2601,fixed:!0,variant:"video",instrument:!0,plugins:e=>[zp({itemHeight:Number(e.cfg.itemHeight)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["统一高度 ",d.jsx("b",{children:Number(e.cfg.itemHeight)}),"px · 行高应完全一致（总高"," ",Math.round(e.meter.totalHeight),"px）"]})}),SS=Object.freeze(Object.defineProperty({__proto__:null,default:wS,meta:xS},Symbol.toStringTag,{value:"Module"})),bS={slug:"gap-plugin",title:"间距插件",group:"plugin",plugin:"GapPlugin",intro:"把行/列间距收到一处，还能按窗口宽度换档。",why:"多个页面要统一间距规范（或手机端要更紧）时，用插件的 responsive 比在每个页面写 CSS 断点稳。",plugs:[{fn:"createGapPlugin",cfg:"columnGap: {{columnGap}}, rowGap: {{rowGap}}, responsive: { sm: { columnGap: 8, rowGap: 8 } }",why:"间距集中配置，并按 sm/md/lg/xl 自动换档（阈值 768/992/1200）"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"responsive 是「命中即覆盖」：桌面端如果也配了 lg，上面两个滑杆就会被 lg 顶掉（看着像没接上）。这页只给 sm，所以桌面端用手写值、窄于 768px 才切 8px。档位看的是 window 宽度，不是容器宽。",controls:[{key:"columnGap",label:"columnGap",kind:"number",init:16,min:0,max:40},{key:"rowGap",label:"rowGap",kind:"number",init:16,min:0,max:40}]},PS=Q({count:26,seed:2701,instrument:!0,plugins:e=>[Lp({columnGap:Number(e.cfg.columnGap),rowGap:Number(e.cfg.rowGap),responsive:{sm:{columnGap:8,rowGap:8}}})],coreProps:()=>({columns:3}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["配置 ",d.jsx("b",{children:Number(e.cfg.columnGap)})," / ",d.jsx("b",{children:Number(e.cfg.rowGap)})," · 把窗口拉窄会切到 sm 档（8px）"]})}),kS=Object.freeze(Object.defineProperty({__proto__:null,default:PS,meta:bS},Symbol.toStringTag,{value:"Module"})),CS={slug:"virtual",title:"虚拟瀑布流",group:"plugin",capability:"virtualize",intro:"1000 项只渲染几十个 DOM —— 看「数据项 / 实际渲染」两个读数。",why:"上千项、项高可估（图片卡、商品卡）时开。几百项以内不必上虚拟化，Recycle 更省事（不卸载、图片不用重载）。",plugs:[],props:["items={thousandItems}",{text:"virtualize={{ overscan: {{overscan}}, adaptiveEstimate: true, estimateQuantile: {{estimateQuantile}} }}",when:e=>!!e.adaptive},{text:"virtualize={{ overscan: {{overscan}}, adaptiveEstimate: false, estimateHeight: {{estimateHeight}} }}",when:e=>!e.adaptive},"columns={3}","containerStyle={{ height: 420 }}"],note:"estimateHeight 只是「冷启动还没有任何实测样本」时的兜底。样本够 8 个之后，自适应改用实测高度的中位数（P50）——中位数让总高误差最小。注意重叠不靠「把估值抬高」解决：抬高只是把误差从「重叠」换成「滚动条虚长」，而后者更持久。真正压住重叠的是「量到真高就立刻重排」——误差只存在一帧，且通常落在视口外。关掉自适应则严格用 estimateHeight，可以自己体会「240 面对 190~350 的项高」会怎样。",controls:[{key:"overscan",label:"overscan（屏）",kind:"number",init:1,min:0,max:4},{key:"adaptive",label:"自适应估值",kind:"switch",init:!0,hint:"关掉后严格用 estimateHeight 排未测量项"},{key:"estimateQuantile",label:"分位",kind:"select",init:"0.5",options:[{label:"P50 中位数（默认，总高最准）",value:"0.5"},{label:"P75",value:"0.75"},{label:"P90（更保守，宁可留空）",value:"0.9"},{label:"P100（绝不重叠）",value:"1"}],when:e=>!!e.adaptive},{key:"estimateHeight",label:"estimateHeight",kind:"number",init:240,min:120,max:360,step:20,when:e=>!e.adaptive}]},_S=Q({count:1e3,seed:2801,instrument:!0,plugins:()=>[],coreProps:e=>({columns:3,gap:12,virtualize:{overscan:Number(e.cfg.overscan),adaptiveEstimate:!!e.cfg.adaptive,estimateQuantile:Number(e.cfg.estimateQuantile??.5),estimateHeight:Number(e.cfg.estimateHeight)}}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:[e.items.length," 项数据 → 实际渲染 ",d.jsx("b",{children:e.meter.rendered})," 个 · 总高"," ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px（按全量算，滚动中会随实测样本收敛）"]})}),TS=Object.freeze(Object.defineProperty({__proto__:null,default:_S,meta:CS},Symbol.toStringTag,{value:"Module"})),RS={slug:"virtual-dynamic",title:"虚拟瀑布流（动态高度）",group:"plugin",capability:"virtualize · dynamicHeights",intro:"900ms 后所有卡片高度 ×1.5 —— 看虚拟化怎么把估值换成实测值。",why:"图片类瀑布流必然「先估后测」。要保证滚动条不跳、总高最终准确，就得理解 estimateHeight 与 dynamicHeights 各自管什么。",plugs:[],props:["virtualize={{ overscan: 1, adaptiveEstimate: {{adaptive}}, dynamicHeights: {{{dynamicHeights}}} }}",{text:"  // adaptiveEstimate 关掉时才需要自己给 estimateHeight",when:e=>!e.adaptive},"columns={3}","containerStyle={{ height: 420 }}"],note:"dynamicHeights 关闭后，项高度变化不会触发重排 —— 需要自己调 ref.relayout()。虚拟化下项可能已卸载，measureItem 会返回缓存值而不是实时量。自适应估值（默认开）会跟着实测样本走，所以上面这一下 ×1.5 之后，未测量项的估值也会自动抬上去。",controls:[{key:"adaptive",label:"自适应估值",kind:"switch",init:!0,hint:"关掉后严格用 estimateHeight 排未测量项"},{key:"estimateHeight",label:"estimateHeight",kind:"number",init:240,min:120,max:360,step:20,when:e=>!e.adaptive},{key:"dynamicHeights",label:"dynamicHeights",kind:"switch",init:!0,hint:"关掉后高度变化不自动重排"}]},MS=Q({count:400,seed:2901,instrument:!0,plugins:()=>[],coreProps:e=>({columns:3,gap:12,virtualize:{overscan:1,adaptiveEstimate:!!e.cfg.adaptive,estimateHeight:Number(e.cfg.estimateHeight),dynamicHeights:!!e.cfg.dynamicHeights}}),effect:e=>{const n=window.setTimeout(()=>{e.setItems(t=>t.map(r=>({...r,height:Math.round(r.height*1.5/8)*8}))),e.log("模拟图片加载完成：全部项高度 ×1.5，Core 重新测量并修正位置")},900);return()=>window.clearTimeout(n)},chrome:e=>d.jsxs("p",{className:"stage-tip",children:[e.items.length," 项 · 渲染 ",d.jsx("b",{children:e.meter.rendered})," · 总高"," ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px · 自适应"," ",d.jsx("b",{children:e.cfg.adaptive?"开":"关"})," · dynamicHeights"," ",d.jsx("b",{children:e.cfg.dynamicHeights?"开":"关"})]})}),$S=Object.freeze(Object.defineProperty({__proto__:null,default:MS,meta:RS},Symbol.toStringTag,{value:"Module"})),ES={slug:"throttle",title:"Throttle 插件",group:"plugin",plugin:"ThrottlePlugin",intro:"滚动回调 120ms 一次还是每帧一次，看读数差别。",why:"埋点、懒加载判断、侧边指示器这类「滚动时要做点事」的逻辑，不节流会直接把主线程拖住。",plugs:[{fn:"createThrottlePlugin",cfg:"scroll: {{scroll}}, resize: {{resize}}",why:"统一收口滚动/尺寸回调频率，比每个页面各写一个 throttle 稳"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"节流的是回调，不是布局。想让「连续改尺寸时的重排」慢下来用 DebounceLayout（下一页）。",controls:[{key:"scroll",label:"scroll（ms）",kind:"number",init:16,min:0,max:200,step:8,nonLayout:!0},{key:"resize",label:"resize（ms）",kind:"number",init:120,min:0,max:400,step:20,nonLayout:!0}]},IS=Q({count:120,seed:3001,instrument:!0,plugins:e=>[Wp({scroll:Number(e.cfg.scroll),resize:Number(e.cfg.resize)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["滚动回调 ",d.jsx("b",{children:e.meter.scrolls})," 次（阈值 ",Number(e.cfg.scroll),"ms）· 布局耗时"," ",d.jsx("b",{children:e.meter.layoutMs.toFixed(1)}),"ms —— 快速滚一遍再对比"]})}),NS=Object.freeze(Object.defineProperty({__proto__:null,default:IS,meta:ES},Symbol.toStringTag,{value:"Module"})),jS={slug:"debounce-layout",title:"DebounceLayout 插件",group:"plugin",plugin:"DebounceLayoutPlugin",intro:"连续拖宽度时只在停下后重排一次。",why:"容器尺寸会被连续改变的场景（拖拽分栏、展开收起、缩放预览）不做防抖，每帧都会全量重排。",plugs:[{fn:"createDebounceLayoutPlugin",cfg:"delay: {{delay}}",why:"把 debounceDelay 拉长到 300ms，连续 resize 只算最后一次"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"防抖太大会有「松手后卡片才归位」的观感，200–300ms 是比较稳的区间。和 ThrottlePlugin 分工不同：那个管回调、这个管重排。",controls:[{key:"delay",label:"delay（ms）",kind:"number",init:300,min:0,max:600,step:20,nonLayout:!0},{key:"simWidth",label:"容器宽",kind:"number",init:780,min:380,max:1080,step:10}]},LS=Q({count:36,seed:3101,instrument:!0,plugins:e=>[Bp({delay:Number(e.cfg.delay)})],coreProps:e=>({columns:3,gap:12,containerStyle:{height:"var(--stage-h, 380px)",width:Number(e.cfg.simWidth)}}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["防抖 ",d.jsx("b",{children:Number(e.cfg.delay)}),"ms · 最近布局"," ",d.jsx("b",{children:e.meter.layoutMs.toFixed(1)}),"ms · 拖滑杆时观察它多久变一次"]})}),OS=Object.freeze(Object.defineProperty({__proto__:null,default:LS,meta:jS},Symbol.toStringTag,{value:"Module"})),zS={slug:"recycle",title:"Recycle 插件",group:"plugin",plugin:"RecyclePlugin",intro:"离屏项隐藏而不卸载 —— 图片不用重载，DOM 数量不变。打开「改用 virtualize」可以当场对照。",why:"几百项的长列表：卸载会丢图片缓存（滚回来又要下载），不处理又会一直重绘。Recycle 是中间那档。",plugs:[{fn:"createRecyclePlugin",cfg:"poolSize: {{poolSize}}",why:"视口外超出池子的项设 visibility:hidden，减少绘制但保留 DOM"}],props:["columns={3}","containerStyle={{ height: 420 }}",{text:"virtualize={{ overscan: 1 }}",when:e=>!!e.virtual}],note:"与 virtualize 互斥：一个隐藏 DOM、一个卸载 DOM，同开会互相打架（可见项被另一套逻辑当成离屏）。所以上面的开关一打开，Recycle 插件就不装了 —— 两种策略二选一。挑法：几百项、图片重、要保住图片缓存 → Recycle；上千项、要控 DOM 数 → virtualize。",controls:[{key:"poolSize",label:"poolSize",kind:"number",init:24,min:4,max:80,step:2,nonLayout:!0},{key:"virtual",label:"改用 virtualize",kind:"switch",init:!1,hint:"对照：卸载离屏 DOM（Recycle 是隐藏不卸载）"}]},DS=Q({count:300,seed:3201,instrument:!0,plugins:e=>e.cfg.virtual?[]:[pf({poolSize:Number(e.cfg.poolSize)})],coreProps:e=>({columns:3,gap:12,...e.cfg.virtual?{virtualize:{overscan:1}}:null}),chrome:e=>d.jsx("div",{className:"stage-stats",children:d.jsxs("p",{className:"stage-tip",children:[e.items.length," 项 · DOM ",d.jsx("b",{children:e.meter.rendered})," 个 · 总高"," ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px · 布局"," ",d.jsx("b",{children:e.meter.layoutMs.toFixed(1)}),"ms ·"," ",e.cfg.virtual?"virtualize（卸载离屏，DOM 只剩几十个）":`Recycle（DOM 全留 300 个，只隐藏绘制，池子 ${Number(e.cfg.poolSize)}）`]})})}),AS=Object.freeze(Object.defineProperty({__proto__:null,default:DS,meta:zS},Symbol.toStringTag,{value:"Module"})),li=240,HS={slug:"infinite-scroll",title:"InfiniteScroll 插件",group:"plugin",plugin:"InfiniteScrollPlugin",intro:"滚到底自动追加，加载完停在 240 项不再请求。",why:"信息流、图片流的标准做法。threshold 要在「用户快到底但还没到底」时触发，太小会看到空白等待。",plugs:[{fn:"createInfiniteScrollPlugin",cfg:"threshold: {{threshold}}",why:"把 props.reachBottomOffset 写成 threshold，并在 onReachBottom 里加并发锁与 hasMore 判断"}],props:["onLoadMore={loadMore}","columns={3}","containerStyle={{ height: 420 }}"],note:"与 PaginationPlugin 互斥：一个追加、一个切片，同开会「翻到第 2 页又看到第 1 页」。到上限时让插件 setState({ hasMore: false }) 或像这里在 onLoadMore 里短路。",controls:[{key:"threshold",label:"threshold（px）",kind:"number",init:400,min:100,max:900,step:50,nonLayout:!0}]},WS=Q({count:24,seed:3301,instrument:!0,plugins:e=>[nf({threshold:Number(e.cfg.threshold)})],coreProps:e=>({columns:3,gap:12,onLoadMore:()=>{e.setItems(n=>n.length>=li?n:[...n,..._p({count:12,seed:3301+n.length*7})])}}),chrome:e=>{const n=e.items.length;return d.jsxs("p",{className:"stage-tip",children:["已加载 ",d.jsx("b",{children:n})," / ",li," 项 ·"," ",n>=li?"已到上限，不会再请求":`距底 ${Number(e.cfg.threshold)}px 时追加 12 项`]})}}),FS=Object.freeze(Object.defineProperty({__proto__:null,default:WS,meta:HS},Symbol.toStringTag,{value:"Module"})),BS={slug:"pagination",title:"Pagination 插件",group:"plugin",plugin:"PaginationPlugin",intro:"pageIndex / pageSize 交给插件切片，翻页自动回顶。",why:"后台列表、搜索结果页：需要「第几页 / 共几页」这种确定性导航时用分页，不要用无限滚动。",plugs:[{fn:"createPaginationPlugin",cfg:"pageSize: {{pageSize}}, scrollToTop: true",why:"读 props.pageIndex（1 基）与 props.pageSize，对 items 切片"}],props:["pageIndex={{{pageIndex}}}","pageSize={{{pageSize}}}","scrollToTopOnPageChange","columns={4}","containerStyle={{ height: 420 }}"],note:"它排在 Filter/Sort/Search 之后（priority 10），所以页数是过滤后的总数。顺序反了会出现「第 2 页是空的」。",controls:[{key:"pageSize",label:"pageSize",kind:"number",init:12,min:4,max:36,step:2},{key:"pageIndex",label:"pageIndex",kind:"number",init:1,min:1,max:12}]},US=Q({count:48,seed:3401,instrument:!0,plugins:e=>[Zp({pageSize:Number(e.cfg.pageSize),scrollToTop:!0})],coreProps:e=>{const n=Math.max(1,Math.ceil(48/Number(e.cfg.pageSize)));return{columns:4,gap:12,pageIndex:Math.min(Number(e.cfg.pageIndex),n),pageSize:Number(e.cfg.pageSize),scrollToTopOnPageChange:!0}},chrome:e=>{const n=Number(e.cfg.pageSize),t=Number(e.cfg.pageIndex),r=Math.max(1,Math.ceil(e.items.length/n)),o=Math.min(t,r);return d.jsxs("div",{className:"stage-pager",children:[d.jsx("button",{type:"button",disabled:o<=1,onClick:()=>e.setCfg("pageIndex",Math.max(1,o-1)),children:"上一页"}),d.jsxs("span",{children:["第 ",d.jsx("b",{children:o})," / ",r," 页 · 每页 ",n," · 共 ",e.items.length," 项",t>r?"（滑杆已越界，钳到最后一页）":""]}),d.jsx("button",{type:"button",disabled:o>=r,onClick:()=>e.setCfg("pageIndex",Math.min(r,o+1)),children:"下一页"})]})}}),GS=Object.freeze(Object.defineProperty({__proto__:null,default:US,meta:BS},Symbol.toStringTag,{value:"Module"})),VS={slug:"filter",title:"Filter 插件",group:"plugin",plugin:"FilterPlugin",intro:"价格上限拖到哪，列表就剩到哪 —— 页数/总数跟着变。",why:"价格区间、库存、标签筛选：过滤必须发生在排序与分页之前，否则「第 2 页」会突然空掉。",plugs:[{fn:"createFilterPlugin",cfg:"predicate: (item) => item.price <= 500, scrollToTop: false",why:"在 transformProps 链的第一环删掉不匹配项（priority 40，排在排序/分页之前）"}],props:["filterFn={(item) => item.price <= {{maxPrice}}}","columns={4}","containerStyle={{ height: 420 }}"],note:"谓词抛错时按「保留」处理，不会让整表消失。条件变化后要不要回顶由 scrollToTop 决定。",controls:[{key:"maxPrice",label:"价格上限",kind:"number",init:500,min:50,max:900,step:50}]},QS=Q({count:40,seed:3501,commerce:!0,variant:"product",instrument:!0,pluginKeys:[],plugins:()=>[Kp({predicate:e=>e.price<=500})],coreProps:e=>({columns:4,gap:12,filterFn:n=>n.price<=Number(e.cfg.maxPrice)}),chrome:e=>{const n=Number(e.cfg.maxPrice),t=e.items.filter(r=>r.price<=n).length;return d.jsxs("p",{className:"stage-tip",children:["¥ ≤ ",n," · 命中 ",d.jsx("b",{children:t})," / ",e.items.length," 项"]})}}),KS=Object.freeze(Object.defineProperty({__proto__:null,default:QS,meta:VS},Symbol.toStringTag,{value:"Module"})),ii={likes:(e,n)=>n.likes-e.likes,price:(e,n)=>e.price-n.price,fresh:(e,n)=>e.minutesAgo-n.minutesAgo,tall:(e,n)=>n.height-e.height},yr={likes:"点赞数 高→低",price:"价格 低→高",fresh:"发布时间 新→旧",tall:"高度 高→低"},YS={slug:"sort",title:"Sort 插件",group:"plugin",plugin:"SortPlugin",intro:"四种排序切换，卡片整体重排 —— 顺序变了而不是重新请求。",why:"「按热度 / 价格 / 最新」这类前端可解的排序，交给插件比让后端多个接口省事；但数据量大时还是应该由后端排。",plugs:[{fn:"createSortPlugin",cfg:"comparator: (a, b) => b.likes - a.likes",why:"在过滤之后、分页之前重排 items（priority 30）"}],props:["sortComparator={comparator}","columns={4}","containerStyle={{ height: 420 }}"],note:"优先读 props.sortComparator：所以页面切换排序方式时不用重建组件。comparator 必须是纯函数，且不能依赖 items 顺序（否则排序结果不稳定）。",controls:[{key:"sortBy",label:"排序方式",kind:"select",init:"likes",options:[{label:yr.likes,value:"likes"},{label:yr.price,value:"price"},{label:yr.fresh,value:"fresh"},{label:yr.tall,value:"tall"}]}]},qS=Q({count:32,seed:3601,commerce:!0,variant:"product",instrument:!0,pluginKeys:[],plugins:()=>[qp({comparator:ii.likes})],coreProps:e=>({columns:4,gap:12,sortComparator:ii[String(e.cfg.sortBy)]??ii.likes,scrollToTopOnSortChange:!1}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["当前 ",d.jsx("b",{children:yr[String(e.cfg.sortBy)]})," · 首项应是「",String(e.cfg.sortBy)," 最靠前」的那张"]})}),XS=Object.freeze(Object.defineProperty({__proto__:null,default:qS,meta:YS},Symbol.toStringTag,{value:"Module"})),JS={slug:"search",title:"Search 插件",group:"plugin",plugin:"SearchPlugin",intro:"边打字边过滤，输入框不失焦、滚动不乱跳。",why:"字段有限的本地搜索（标题、作者、标签）用插件就够；需要模糊匹配、拼音、分词时应该后端做。",plugs:[{fn:"createSearchPlugin",cfg:'fields: ["title", "author"]',why:"只扫指定字段，避免把 undefined 也扫一遍（priority 20，在排序之后、分页之前）"}],props:["searchQuery={query}","columns={3}","containerStyle={{ height: 420 }}"],note:"fields 不给会扫全部可枚举字段，容易误命中。scrollToTop 默认关，搜索后保留滚动位置反而更自然时别打开。"},ZS=Q({count:36,seed:3701,instrument:!0,pluginKeys:[],plugins:()=>[sa({fields:["title","author"]})],coreProps:e=>({columns:3,gap:12,searchQuery:String(e.cfg.query??""),scrollToTopOnSearchChange:!1}),chrome:e=>{const n=String(e.cfg.query??"").trim().toLowerCase(),t=n?e.items.filter(r=>r.title.toLowerCase().includes(n)||r.author.toLowerCase().includes(n)).length:e.items.length;return d.jsxs("div",{className:"stage-search",children:[d.jsx("input",{type:"search",placeholder:"搜标题或作者，如「咖啡」「林一白」",value:String(e.cfg.query??""),onChange:r=>e.setCfg("query",r.target.value)}),d.jsxs("span",{children:["命中 ",d.jsx("b",{children:t})," / ",e.items.length," 项",n?`（query="${n}"）`:""]})]})}}),eb=Object.freeze(Object.defineProperty({__proto__:null,default:ZS,meta:JS},Symbol.toStringTag,{value:"Module"})),Wu=rf({showOverlay:!0}),nb={slug:"click-analytics",title:"ClickAnalytics 插件",group:"plugin",plugin:"ClickAnalyticsPlugin",intro:"点卡片，角上的计数 +1，日志同时记一条；「导出 JSON」把内存计数吐出来。",why:"「哪几张最常被点」这类轻量埋点，用插件比在 renderItem 里到处加 onClick 干净，也不会漏掉没渲染的路径。",plugs:[{fn:"createClickAnalyticsPlugin",cfg:"showOverlay: true, log: false",why:"订阅 onItemClick 累加计数并广播事件，角标只是可视化的开关"}],props:["columns={3}","containerStyle={{ height: 420 }}","onItemClick={(i, item) => track(item.id)}"],note:"showOverlay 生产环境应关掉（默认就是 false）。真实上报在 bus 上订阅 analytics:click —— 页面侧拿不到 bus 时，可以用 onItemClick 走自己的埋点函数，或者像右上角那样定时取 getStats() 批量上报（计数只在内存里，刷新即清零）。"},tb=Q({count:20,seed:3801,instrument:!0,plugins:()=>[Wu],coreProps:e=>({columns:3,gap:12,onItemClick:(n,t)=>e.log(`点击 #${n} · ${t.title}（bus 上同时广播 analytics:click）`)}),chrome:e=>d.jsxs("div",{className:"stage-stats",children:[d.jsx("p",{className:"stage-tip",children:"点几张卡：右上角数字是插件自己的计数"}),d.jsx("button",{type:"button",onClick:()=>{var t;const n=Wu.getStats();e.log(`getStats() → ${JSON.stringify(n)}`),(t=navigator.clipboard)==null||t.writeText(JSON.stringify(n,null,2)).catch(()=>{})},children:"导出 JSON"})]})}),rb=Object.freeze(Object.defineProperty({__proto__:null,default:tb,meta:nb},Symbol.toStringTag,{value:"Module"})),ob={slug:"bookmark",title:"Bookmark 插件",group:"plugin",plugin:"BookmarkPlugin",intro:"滚到中间按 b，再滚别处按 r —— 回到刚才那一屏。",why:"长信息流里「刚才那条不错，等下回来看」，比让用户翻历史记录便宜得多。",plugs:[{fn:"createBookmarkPlugin",cfg:'storageKey: "demo-bookmark", scrollBehavior: "smooth"',why:"键盘监听 + localStorage，页面不用为「记位置」写任何逻辑"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"记的是 scrollTop 绝对值，不是某一项：数据顺序变了书签就偏了。要「记住这条内容」请按 id 记（用 ScrollAnchor 那套）。"},lb=Q({count:60,seed:3901,instrument:!0,plugins:()=>[xf({storageKey:"demo-bookmark",scrollBehavior:"smooth"})],coreProps:()=>({columns:3,gap:12}),chrome:()=>d.jsxs(d.Fragment,{children:[d.jsx(Gy,{items:[["b","记住当前位置"],["r","跳回书签位置"]]}),d.jsx("p",{className:"stage-tip",children:"先滚到中间，按 b；再滚到别处，按 r"})]})}),ib=Object.freeze(Object.defineProperty({__proto__:null,default:lb,meta:ob},Symbol.toStringTag,{value:"Module"})),sb={slug:"url-sync",title:"URLSync 插件",group:"plugin",plugin:"URLSyncPlugin",intro:"条件写进 URL，刷新 / 分享都能复现同一屏。",why:"带筛选的后台列表、搜索结果页：一旦用户按了 F5 或把链接发给别人，条件不该丢。",plugs:[{fn:"createURLSyncPlugin",cfg:'mode: "search", keys: ["searchQuery"]',why:"把 props 上的 searchQuery 写进 URL，并在挂载时广播 URL 里的值"},{fn:"createSearchPlugin",cfg:'fields: ["title", "author"]',why:"URLSync 只负责搬运条件，真正过滤要靠搜索插件"}],props:["searchQuery={query}","columns={3}","containerStyle={{ height: 420 }}"],note:"keys 里必须是内核 props 上真实存在的键（searchQuery），写成 query 就永远写不进 URL。刷新页面后控件值会从 URL 回填，相当于「分享出去的那一屏」。"},ab=Q({count:24,seed:4001,instrument:!0,pluginKeys:[],plugins:()=>[Pf({mode:"search",keys:["searchQuery"]}),sa({fields:["title","author"]})],coreProps:e=>({columns:3,gap:12,searchQuery:String(e.cfg.query??""),scrollToTopOnSearchChange:!1}),effect:e=>{const n=new URLSearchParams(window.location.search).get("searchQuery");n&&(e.setCfg("query",n),e.log(`从 URL 回填 searchQuery="${n}"`))},chrome:e=>d.jsxs("div",{className:"stage-search",children:[d.jsx("input",{type:"search",placeholder:"输入关键词，地址栏会跟着变",value:String(e.cfg.query??""),onChange:n=>e.setCfg("query",n.target.value)}),d.jsx("code",{className:"stage-url",children:window.location.search||"（地址栏还没有参数）"})]})}),ub=Object.freeze(Object.defineProperty({__proto__:null,default:ab,meta:sb},Symbol.toStringTag,{value:"Module"})),Oo="demo-waterfall-state",cb={slug:"state-persistence",title:"StatePersistence 插件",group:"plugin",plugin:"StatePersistencePlugin",intro:"滚到哪、第几页，都记在本地；再打开接着看。",why:"详情页返回列表、刷新后回到原位置 —— 这类「像原生 App」的体验，靠它一行装配。",plugs:[{fn:"createStatePersistencePlugin",cfg:'storageKey: "demo-waterfall-state", persistScroll: true, persistKeys: ["pageIndex"]',why:"只注入一次（不是每次渲染都覆盖），避免和用户当前操作打架"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"只在挂载时注入一次：所以它不会把用户后来的滚动「拽回去」。跨标签页同步不在它职责内（要自己听 storage 事件）。"};function db(){const[e,n]=y.useState(()=>localStorage.getItem(Oo)??""),t=y.useCallback(()=>n(localStorage.getItem(Oo)??""),[]),r=y.useCallback(()=>{localStorage.removeItem(Oo),n("")},[]);return d.jsxs("div",{className:"stage-storage",children:[d.jsx("code",{children:e||"（还没有存档 —— 先滚一下列表）"}),d.jsxs("span",{children:[d.jsx("button",{type:"button",onClick:t,children:"刷新读数"}),d.jsx("button",{type:"button",onClick:r,children:"清除存档"})]})]})}const pb=Q({count:50,seed:4101,instrument:!0,plugins:()=>[Sf({storageKey:Oo,persistScroll:!0,persistKeys:["pageIndex"]})],coreProps:()=>({columns:3,gap:12}),chrome:()=>d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"stage-tip",children:"滚到中间 → 切到「总览」再切回来，位置会被记住"}),d.jsx(db,{})]})}),fb=Object.freeze(Object.defineProperty({__proto__:null,default:pb,meta:cb},Symbol.toStringTag,{value:"Module"})),mb={slug:"grouping",title:"Grouping 插件",group:"plugin",plugin:"GroupingPlugin",intro:"按标签分组，右下角浮层列出每组项数。",why:"壁纸墙、书签墙要「按分类看」，或要配合吸顶标题（下一页）—— 分组结果本身不是视觉，是给别的插件用的数据。",plugs:[{fn:"createGroupingPlugin",cfg:"groupBy: (item) => item.tag, showOverlay: true",why:"把 GROUPS（Map<组键, 索引数组>）写进 sharedData，供吸顶标题等插件消费"}],props:["columns={4}","containerStyle={{ height: 420 }}"],note:"分组只算索引，不改变排列顺序 —— 想「同组连在一起」得自己按组重排数据再传进来（或用 SortPlugin）。",controls:[{key:"overlay",label:"显示分组浮层",kind:"switch",init:!0}]},gb=Q({count:32,seed:4201,instrument:!0,plugins:e=>[aa({groupBy:n=>n.tag,showOverlay:!!e.cfg.overlay})],coreProps:()=>({columns:4,gap:10}),chrome:e=>{const n=new Map;return e.items.forEach(t=>n.set(t.tag,(n.get(t.tag)??0)+1)),d.jsxs("p",{className:"stage-tip",children:[n.size," 组：",[...n.entries()].sort((t,r)=>r[1]-t[1]).map(([t,r])=>`${t} ${r}`).join(" · ")]})}}),hb=Object.freeze(Object.defineProperty({__proto__:null,default:gb,meta:mb},Symbol.toStringTag,{value:"Module"})),yb={slug:"sticky-header",title:"StickyHeader 插件",group:"plugin",plugin:"StickyHeaderPlugin",intro:"滚动时顶部浮着当前分组标题。",why:"分类壁纸墙、按频道分的视频列表：滚着滚着忘了自己在哪个分类里。",plugs:[{fn:"createStickyHeaderPlugin",cfg:'title: "当前分组", showHint: true',why:"在滚动容器内渲染 sticky 标题条，靠 renderOverlay 而不是改版式"},{fn:"createGroupingPlugin",cfg:"groupBy: (item) => item.tag",why:"标题条要读 GROUPS 的首组名，没有分组插件它只能显示兜底文案"}],props:["columns={4}","containerStyle={{ height: 420 }}"],note:"只跟首组。真要做「跟随当前组」，插件需要订阅 grouping:change，并在 onScroll 里用 visibleRange 反查当前组 —— 这一页故意不藏这个限制。"},vb=Q({count:40,seed:4301,instrument:!0,plugins:()=>[yf({title:"当前分组",showHint:!0}),aa({groupBy:e=>e.tag})],coreProps:()=>({columns:4,gap:10}),chrome:()=>d.jsx("p",{className:"stage-tip",children:"向下滚：标题条会贴在瀑布流容器顶部"})}),xb=Object.freeze(Object.defineProperty({__proto__:null,default:vb,meta:yb},Symbol.toStringTag,{value:"Module"})),wb={slug:"scroll-anchor",title:"ScrollAnchor 插件",group:"plugin",plugin:"ScrollAnchorPlugin",intro:"点标签跳到对应那篇 —— 走 bus 事件，不是直接调 ref。",why:"目录、锚点导航、站内搜索定位：跳转逻辑应该在插件里，页面只负责「发一个 id 出去」。",plugs:[{fn:"createScrollAnchorPlugin",cfg:"getAnchorId: (item) => item.id",why:"按 id 反查索引并调 context.scrollToItem，落点由插件算"},{fn:"createAnchorBridgePlugin",why:"本页内联的自定义插件：window 上的 wf:anchor 事件 → bus.emit('anchor:scrollToId')",local:!0}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"1.x 里这类插件会「自己造一个 bus 挂在 window 上」，其实是同一个问题的不同解法。桥接插件顺带示范了 onMount 返回清理函数 —— 旧版 withPlugins 从不执行它，监听会泄漏。"};function Sb(){return{name:"AnchorBridgePlugin",enabled:!0,hooks:{onMount:e=>{const n=t=>{var o;const r=(o=t.detail)==null?void 0:o.id;r&&e.bus.emit("anchor:scrollToId",{id:r})};return window.addEventListener("wf:anchor",n),()=>window.removeEventListener("wf:anchor",n)}}}}const bb=Q({count:30,seed:4401,instrument:!0,plugins:()=>[cf({getAnchorId:e=>e.id}),Sb()],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("div",{className:"stage-anchors",children:[d.jsx("span",{children:"跳到第"}),[0,6,12,18,24].map(n=>d.jsxs("button",{type:"button",onClick:()=>{const t=e.items[n];t&&(window.dispatchEvent(new CustomEvent("wf:anchor",{detail:{id:t.id}})),e.log(`dispatch wf:anchor { id: "${t.id}" } → 插件转成 bus → scrollToItem(${n})`))},children:["#",n," 项"]},n)),d.jsx("span",{className:"muted",children:"（走 window 事件 → bus → 插件）"})]})}),Pb=Object.freeze(Object.defineProperty({__proto__:null,default:bb,meta:wb},Symbol.toStringTag,{value:"Module"}));function kb(e,n,t){const r=e.slice(),[o]=r.splice(n,1);return r.splice(t,0,o),r}const Cb={slug:"drag-reorder",title:"DragReorder 插件",group:"plugin",plugin:"DragReorderPlugin",intro:"拖一张卡到别的位置，松手后数组真的变了。",why:"书签墙、看板、排序自定义：用户直接拖比「上移/下移」按钮直观得多。",plugs:[{fn:"createDragReorderPlugin",cfg:"showHandle: true, onReorder: (from, to) => setItems((prev) => move(prev, from, to))",why:"鼠标走 HTML5 draggable、触屏走长按 + pointer，把起止索引交回来；数据变更完全由页面掌控"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"showHandle 只是「虚线手柄」，接真实版式时关掉。插件不写 localStorage 也不调接口 —— 落库要自己在 onReorder 里做。鼠标走原生 HTML5 拖拽；触屏上 `draggable` 根本不触发，所以另有 pointer 路径（长按 180ms 进入拖拽，可用 touchHoldMs 调）。"},_b=Q({count:18,seed:4501,instrument:!0,plugins:e=>[af({showHandle:!0,onReorder:(n,t,r)=>{e.setItems(o=>kb(o,n,t)),e.log(`拖拽 #${n} → #${t}（${(r==null?void 0:r.title)??"未知项"}），数组已重排`)}})],coreProps:()=>({columns:3,gap:12}),chrome:()=>d.jsx("p",{className:"stage-tip",children:"鼠标：拖卡片右上角手柄 · 触屏：长按卡片 180ms 后拖动 —— 松手后看位置与顺序变化"})}),Tb=Object.freeze(Object.defineProperty({__proto__:null,default:_b,meta:Cb},Symbol.toStringTag,{value:"Module"})),Rb={slug:"a11y",title:"A11y 插件",group:"plugin",plugin:"A11yPlugin",intro:"容器 role=list、项 role=listitem，一键读出来验证。",why:"瀑布流本质是列表，但 div 堆出来的结构对读屏软件等于不存在。这个插件把语义补齐，成本极低。",plugs:[{fn:"createA11yPlugin",cfg:'containerRole: "list", itemRole: "listitem", containerLabel: "示例卡片列表", enableTabIndex: false',why:"在 onMount / onLayoutComplete 里写语义属性（不是渲染期副作用），项用 renderItemWrapper 包一层"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"enableTabIndex 打开后每张卡都能 Tab 到，键盘可达但 Tab 会很累 —— 除非卡片真的可操作，否则保持关闭，用 roving tabindex 更好。"},Mb=Q({count:16,seed:4601,instrument:!0,plugins:()=>[mf({containerRole:"list",itemRole:"listitem",containerLabel:"示例卡片列表",enableTabIndex:!1})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("div",{className:"stage-a11y",children:[d.jsx("button",{type:"button",onClick:()=>{var r;const n=(r=e.ref.current)==null?void 0:r.getContainer();if(!n){e.log("容器还没挂载","warn");return}const t=n.querySelector("[data-index]");e.log(`容器 role="${n.getAttribute("role")??"无"}" aria-label="${n.getAttribute("aria-label")??"无"}"`),e.log(`首项 role="${(t==null?void 0:t.getAttribute("role"))??"无"}" tabIndex="${(t==null?void 0:t.getAttribute("tabindex"))??"无"}"`)},children:"检查 DOM 属性"}),d.jsx("span",{className:"muted",children:"结果写到右栏日志"})]})}),$b=Object.freeze(Object.defineProperty({__proto__:null,default:Mb,meta:Rb},Symbol.toStringTag,{value:"Module"}));function Eb(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ib(){const[,e]=Yt.useState(0),n=Eb();return d.jsxs("div",{className:"stage-stats",children:[d.jsxs("p",{className:"stage-tip",children:["系统偏好 reduce motion：",d.jsx("b",{children:n?"是 → 过渡已清掉":"否 → 过渡生效（240ms）"})]}),d.jsx("button",{type:"button",onClick:()=>e(t=>t+1),children:"重新检测"})]})}const Nb={slug:"reduced-motion",title:"ReducedMotion 插件",group:"plugin",plugin:"ReducedMotionPlugin",intro:"系统开了「减少动态效果」，过渡与 transform 自动关掉。",why:"前庭功能障碍用户会被大幅位移的动画伤到。这不是可选项 —— 尊重系统偏好是基本无障碍要求。",plugs:[{fn:"createReducedMotionPlugin",cfg:"disableTransform: true, removeTransitions: true",why:"读 matchMedia，命中后关掉过渡与 transform 定位"},{fn:"createTransitionPlugin",cfg:"duration: 240",why:"装在这里是为了被 ReduceMotion 关掉 —— 用来验证它真的生效"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"两个插件同开不是冲突：ReducedMotion 的 priority(65) 更高，会先执行并清掉过渡。验证方法：改系统设置，或在 DevTools 里模拟 prefers-reduced-motion；运行中切换会即时生效（插件监听 matchMedia 的 change），但定位方式要等下一次重渲染才切过来。"},jb=Q({count:26,seed:4701,instrument:!0,plugins:()=>[Gp({disableTransform:!0,removeTransitions:!0}),ia({duration:240})],coreProps:()=>({columns:3,gap:12}),chrome:()=>d.jsx(Ib,{})}),Lb=Object.freeze(Object.defineProperty({__proto__:null,default:jb,meta:Nb},Symbol.toStringTag,{value:"Module"})),Ob={slug:"transition",title:"Transition 插件",group:"plugin",plugin:"TransitionPlugin",intro:"打乱顺序，看卡片是滑过去还是瞬移。",why:"筛选、排序、拖拽后布局会大幅变化，没有过渡会显得「闪一下」；加上 200–300ms 就顺了。",plugs:[{fn:"createTransitionPlugin",cfg:'duration: {{duration}}, easing: "cubic-bezier(.22,.61,.36,1)"',why:"只加 CSS 过渡（transform / opacity），不参与布局计算"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"把 duration 拖到 0 就等于关掉。过渡期间 item 的 transform 是中间值，用 transform 读位置的工具会读到中间态。",controls:[{key:"duration",label:"duration（ms）",kind:"number",init:260,min:0,max:800,step:20}]},zb=Q({count:24,seed:4801,instrument:!0,plugins:e=>[ia({duration:Number(e.cfg.duration)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("div",{className:"stage-anchors",children:[d.jsx("button",{type:"button",onClick:()=>{e.setItems(n=>{const t=n.slice();for(let r=t.length-1;r>0;r--){const o=Math.floor(Math.random()*(r+1));[t[r],t[o]]=[t[o],t[r]]}return t}),e.log(`打乱顺序（过渡 ${Number(e.cfg.duration)}ms）`)},children:"打乱顺序"}),d.jsx("span",{className:"muted",children:"duraton 拖到 0 再点一次，就是瞬移"})]})}),Db=Object.freeze(Object.defineProperty({__proto__:null,default:zb,meta:Ob},Symbol.toStringTag,{value:"Module"})),Ab={slug:"pin-item",title:"PinItem 插件",group:"plugin",plugin:"PinItemPlugin",intro:"第 0、1 项钉在第 1 列顶部，普通项自动让位。",why:"「置顶公告 + 信息流」「推荐位固定在第一列」这类需求，用插件比把置顶内容塞进数据里干净。",plugs:[{fn:"createPinItemPlugin",cfg:"pinnedIndices: [0, 1], column: {{column}}",why:"在 calculateItemPosition 里把置顶项固定到指定列顶部，并下推同列普通项"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"置顶项索引要小（0..n）：如果置顶的索引大于该列已排好的项，只会把后续项往下推、已布局的不回退，视觉上会重叠。同一列多条置顶按数组顺序纵向下堆。",controls:[{key:"column",label:"钉到第几列（0 基）",kind:"number",init:0,min:0,max:2}]},Hb=Q({count:22,seed:4901,instrument:!0,plugins:e=>[Ap({pinnedIndices:[0,1],column:Number(e.cfg.column)})],coreProps:()=>({columns:3,gap:12}),decorate:(e,n,t)=>({pinned:[0,1].includes(t)&&Number(e.cfg.column)>=0}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["置顶项：",d.jsx("b",{children:"#0 #1"})," · 钉在第 ",d.jsx("b",{children:Number(e.cfg.column)+1})," 列（角标写着「置顶」）"]})}),Wb=Object.freeze(Object.defineProperty({__proto__:null,default:Hb,meta:Ab},Symbol.toStringTag,{value:"Module"})),Fu=lf({showOverlay:!0}),Fb={slug:"heatmap-analytics",title:"HeatmapAnalytics 插件",group:"plugin",plugin:"HeatmapAnalyticsPlugin",intro:"滚一遍，顶部汇总条告诉你曝光了多少次、点了多少下。",why:"内容分发要看「哪些真的被看到了」，不是「哪些被加载了」。曝光埋点交给插件，业务侧只消费汇总。",plugs:[{fn:"createHeatmapAnalyticsPlugin",cfg:"showOverlay: true",why:"在项进入视口时累加曝光、点击时累加点击，并在 onLayoutComplete 补一次首屏统计"}],props:["columns={4}","containerStyle={{ height: 420 }}"],note:"首屏曝光靠 onLayoutComplete 补一次，否则第一帧显示 0。真实上报要自己做去重与批次（插件只负责计数）——「导出 JSON」拿到的就是 `getStats()` 的形状：总曝光、总点击、每项明细。"},Bb=Q({count:36,seed:5001,instrument:!0,plugins:()=>[Fu],coreProps:e=>{let n=0;return{columns:4,gap:10,onItemEnterViewport:t=>{n+=1,n<=8&&e.log(`曝光 #${t}（Core 的可见事件，插件也在数）`,"info")}}},chrome:e=>d.jsxs("div",{className:"stage-stats",children:[d.jsx("p",{className:"stage-tip",children:"滚一遍：顶部条是开关，卡片角上是单卡曝光/点击次数"}),d.jsx("button",{type:"button",onClick:()=>{var t;const n=Fu.getStats();e.log(`getStats() → 曝光 ${n.totalViews} / 点击 ${n.totalClicks} / 有数据项 ${n.items.length}`),(t=navigator.clipboard)==null||t.writeText(JSON.stringify(n,null,2)).catch(()=>{})},children:"导出 JSON"})]})}),Ub=Object.freeze(Object.defineProperty({__proto__:null,default:Bb,meta:Fb},Symbol.toStringTag,{value:"Module"})),Gb=`/**
 * 01 · 基础示例
 *
 * 不装任何插件：只给 items / renderItem / containerStyle，看 Core 自己能做到什么。
 * 拖列数与间距，下面「最小装配」的代码会跟着变 —— 这就是这一页唯一要做的事。
 */
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "basic",
  title: "基础示例",
  group: "basic",
  intro: "最省事的用法：一批高度不等的卡片，交给 Core 排。",
  why: "刚接入时先用这一页确认两件事 —— 容器给了高度、卡片真的按 item.height 渲染。这两条不对，后面装什么插件都白搭。",
  plugs: [],
  props: ["columns={{{columns}}}", "gap={{{gap}}}", "containerStyle={{ height: 420 }}"],
  note: "containerStyle 必须给高度。不给高度 = 没有滚动上下文，Core 量不出视口，卡片会全部堆在顶部。",
  controls: [
    { key: "columns", label: "列数", kind: "number", init: 3, min: 1, max: 6, hint: "props.columns" },
    { key: "gap", label: "间距", kind: "number", init: 16, min: 0, max: 32, hint: "props.gap，行/列通用" },
  ],
};

export default createFeedStage({
  count: 40,
  seed: 1201,
  plugins: () => [],
  instrument: true,
  coreProps: (api) => ({
    columns: Number(api.cfg.columns),
    gap: Number(api.cfg.gap),
  }),
});
`,Vb=`/**
 * 02 · 自定义列数
 *
 * 固定列数靠 \`props.columns\`，列宽由 Core 反算：\`(容器宽 − gap×(n−1)) / n\`。
 * 舞台上直接把当前列宽读出来，比任何文字解释都直观。
 */
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "columns",
  title: "自定义列数",
  group: "basic",
  intro: "写死列数，列宽自己算 —— 拖到 6 列看列宽怎么缩。",
  why: "后台表格、看板、固定版式的商品墙通常就是固定列数，不需要按容器自适应。",
  plugs: [],
  props: ["columns={{{columns}}}", "gap={{{gap}}}", "containerStyle={{ height: 420 }}"],
  note: "写了 columns 又被 AutoColumnPlugin / ResponsiveColumnsPlugin 覆盖是常见困惑：那两个插件在 calculateColumns 钩子里返回列数，优先级高于 props。",
  controls: [
    { key: "columns", label: "列数", kind: "number", init: 4, min: 1, max: 6 },
    { key: "gap", label: "间距", kind: "number", init: 12, min: 0, max: 32 },
  ],
};

export default createFeedStage({
  count: 36,
  seed: 1401,
  plugins: () => [],
  instrument: true,
  coreProps: (api) => ({
    columns: Number(api.cfg.columns),
    gap: Number(api.cfg.gap),
  }),
  chrome: (api) => (
    <p className="stage-tip">
      列宽 = (容器宽 − 间距×{Number(api.cfg.columns) - 1}) ÷ {Number(api.cfg.columns)} ·
      当前 <b>{api.meter.columns}</b> 列 / 总高 <b>{Math.round(api.meter.totalHeight)}</b>px
    </p>
  ),
});
`,Qb=`/**
 * 03 · 自定义间距
 *
 * \`gap\` 是简写，\`rowGap\` / \`columnGap\` 各自覆盖它。
 * 这一页把「覆盖」做成可操作的一步：关掉「拆开行/列间距」，gap 立刻接管；
 * 打开后 gap 就废了 —— 同时在的 rowGap / columnGap 说了算。下面的装配代码也跟着换行。
 */
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "gap",
  title: "自定义间距",
  group: "basic",
  intro: "gap 是简写，rowGap / columnGap 分别覆盖它 —— 用开关切一次就记住了。",
  why: "图片流要更紧的列间距、更松的行间距，就得拆开写；只想整体松紧就用 gap。",
  plugs: [],
  props: [
    "columns={3}",
    { text: "gap={{{gap}}}", when: (c) => !c.split },
    { text: "rowGap={{{rowGap}}}", when: (c) => Boolean(c.split) },
    { text: "columnGap={{{columnGap}}}", when: (c) => Boolean(c.split) },
    "containerStyle={{ height: 420 }}",
  ],
  note: "间距参与布局计算：改 gap 会改变列宽与每列落点，不是 CSS margin。三个同时给的时候 gap 只是「没被覆盖的那部分」的兜底。想让间距随窗口换档用 GapPlugin（下一页）。",
  controls: [
    { key: "split", label: "拆开行/列间距", kind: "switch", init: true, hint: "关掉 → 只留 gap，它立刻生效" },
    { key: "gap", label: "gap（简写）", kind: "number", init: 8, min: 0, max: 32, when: (c) => !c.split },
    { key: "rowGap", label: "rowGap", kind: "number", init: 24, min: 0, max: 40, when: (c) => Boolean(c.split) },
    { key: "columnGap", label: "columnGap", kind: "number", init: 8, min: 0, max: 40, when: (c) => Boolean(c.split) },
  ],
};

export default createFeedStage({
  count: 30,
  seed: 1501,
  plugins: () => [],
  coreProps: (api) => ({
    columns: 3,
    ...(api.cfg.split
      ? { rowGap: Number(api.cfg.rowGap), columnGap: Number(api.cfg.columnGap) }
      : { gap: Number(api.cfg.gap) }),
  }),
  chrome: (api) => (
    <p className="stage-tip">
      {api.cfg.split ? (
        <>
          rowGap <b>{Number(api.cfg.rowGap)}</b> · columnGap <b>{Number(api.cfg.columnGap)}</b> ——
          <b> gap 被覆盖，此刻是空转的</b>
        </>
      ) : (
        <>
          gap <b>{Number(api.cfg.gap)}</b> —— 行列同值，因为没给 rowGap / columnGap
        </>
      )}
    </p>
  ),
});
`,Kb=`/**
 * 04 · Ref 方法调用
 *
 * ref 直接指向 Core（插件上下文不通过 ref 暴露），所以这 13 个方法就是「页面能对瀑布流
 * 做的全部操作」。点一遍比读一遍 API 表快，日志里会留下每次调用的返回值。
 */
import React, { useCallback, useState } from "react";
import { createFeedStage, type StageApi } from "./stages/feed";
import { EventLog, type LogLine } from "./panels";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "ref",
  title: "Ref 方法调用",
  group: "advanced",
  intro: "13 个 ref 方法逐个点一遍，返回值直接写进日志。",
  why: "图片加载完要重排、点导航要跳到某条、滚动位置要复位 —— 这些都不该改数据，而是调 ref。",
  plugs: [],
  props: [
    "ref={ref}",
    "columns={3}",
    "containerStyle={{ height: 420 }}",
    "onItemClick={(i) => ref.current?.scrollToItem(i)}",
  ],
  note: "getAllItemPositions 返回的是实时 Map，不是渲染快照；虚拟化开启后，未挂载项仍保留测量值（getItemElement 会返回 null）。",
};

type Cmd = {
  key: string;
  label: string;
  run: (api: StageApi) => string | Promise<string>;
  needsIndex?: boolean;
};

const COMMANDS: Cmd[] = [
  { key: "relayout", label: "relayout()", run: (a) => (a.ref.current?.relayout(), "清空高度缓存并重排") },
  { key: "top", label: "scrollToTop()", run: (a) => (a.ref.current?.scrollToTop({ behavior: "smooth" }), "回顶") },
  { key: "bottom", label: "scrollToBottom()", run: (a) => (a.ref.current?.scrollToBottom({ behavior: "smooth" }), "到底") },
  {
    key: "item",
    label: "scrollToItem(i)",
    needsIndex: true,
    run: () => "见下方输入框",
  },
  {
    key: "pos",
    label: "getItemPosition(i)",
    needsIndex: true,
    run: () => "见下方输入框",
  },
  {
    key: "allpos",
    label: "getAllItemPositions()",
    run: (a) => {
      const map = a.ref.current?.getAllItemPositions();
      if (!map) return "ref 还没就绪";
      const first = map.get(0);
      return \`共 \${map.size} 项；#0 = { x: \${first?.x ?? "-"}, y: \${first?.y ?? "-"} }\`;
    },
  },
  {
    key: "colh",
    label: "getColumnHeights()",
    run: (a) => {
      const h = a.ref.current?.getColumnHeights() ?? [];
      return \`[\${h.map((n) => Math.round(n)).join(", ")}]\`;
    },
  },
  {
    key: "layout",
    label: "getLayoutInfo()",
    run: (a) => {
      const i = a.ref.current?.getLayoutInfo();
      return i ? \`\${i.columns} 列 · 列宽 \${Math.round(i.columnWidth)} · 总高 \${Math.round(i.totalHeight)}\` : "ref 还没就绪";
    },
  },
  {
    key: "viewport",
    label: "getViewportInfo()",
    run: (a) => {
      const v = a.ref.current?.getViewportInfo();
      return v ? \`scrollTop \${Math.round(v.scrollTop)} · 视口 \${v.clientHeight} · 内容 \${Math.round(v.scrollHeight)}\` : "ref 还没就绪";
    },
  },
  {
    key: "range",
    label: "getVisibleRange()",
    run: (a) => {
      const r = a.ref.current?.getVisibleRange();
      return r ? \`渲染区间 \${r.start} … \${r.end}\` : "ref 还没就绪";
    },
  },
  { key: "force", label: "forceUpdate()", run: (a) => (a.ref.current?.forceUpdate(), "强制重渲染") },
  {
    key: "el",
    label: "getItemElement(0)",
    run: (a) => {
      const el = a.ref.current?.getItemElement(0);
      return el ? \`<div data-index="0"> \${el.offsetWidth}×\${el.offsetHeight}\` : "取不到（可能未挂载）";
    },
  },
  {
    key: "measure",
    label: "measureItem(0)",
    run: async (a) => {
      const r = await a.ref.current?.measureItem(0);
      return r ? \`{ width: \${Math.round(r.width)}, height: \${Math.round(r.height)} }\` : "量不到";
    },
  },
  {
    key: "container",
    label: "getContainer()",
    run: (a) => {
      const el = a.ref.current?.getContainer();
      return el ? \`容器 \${el.clientWidth}×\${el.clientHeight}，scrollHeight \${el.scrollHeight}\` : "ref 还没就绪";
    },
  },
];

function RefConsole({ api }: { api: StageApi }) {
  const [lines, setLines] = useState<LogLine[]>([]);
  const [index, setIndex] = useState(5);

  const push = useCallback((text: string, kind: LogLine["kind"] = "event") => {
    const at = new Date().toLocaleTimeString("zh-CN", { hour12: false });
    setLines((prev) => [{ id: prev.length + 1, at, text, kind }, ...prev].slice(0, 30));
  }, []);

  const run = useCallback(
    async (cmd: Cmd) => {
      const r = api.ref.current;
      if (!r) {
        push("ref.current 为空 —— 舞台还没挂载", "warn");
        return;
      }
      if (cmd.needsIndex) {
        if (cmd.key === "item") {
          r.scrollToItem(index, { behavior: "smooth", block: "start" });
          push(\`scrollToItem(\${index}, { block: "start" })\`);
        } else {
          const p = r.getItemPosition(index);
          push(
            p
              ? \`getItemPosition(\${index}) = { x: \${Math.round(p.x)}, y: \${Math.round(p.y)}, w: \${Math.round(p.width)}, h: \${Math.round(p.height)} }\`
              : \`getItemPosition(\${index}) = null\`
          );
        }
        return;
      }
      push(\`\${cmd.label} → \${await cmd.run(api)}\`);
    },
    [api, index, push]
  );

  return (
    <div className="console">
      <div className="console-head">
        <span>Ref 控制台</span>
        <label className="console-idx">
          index
          <input
            type="number"
            min={0}
            max={api.items.length - 1}
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="console-grid">
        {COMMANDS.map((c) => (
          <button key={c.key} type="button" className="console-btn" onClick={() => void run(c)}>
            {c.label}
          </button>
        ))}
      </div>
      <EventLog lines={lines} title="调用记录" empty="点上面任意一个方法" />
    </div>
  );
}

export default createFeedStage({
  count: 36,
  seed: 1701,
  instrument: true,
  plugins: () => [],
  coreProps: (api) => ({
    columns: 3,
    onItemClick: (i) => api.log(\`onItemClick #\${i}（Core 的项点击回调）\`),
  }),
  chrome: (api) => <RefConsole api={api} />,
});
`,Yb=`/**\r
 * 05 · 生命周期和事件\r
 *\r
 * 13 个回调全部接上，打到右栏日志里 —— 用来回答「这个钩子到底什么时候触发、参数是什么」。\r
 * 不装插件也能收到这些事件：props 回调先跑，插件钩子链后跑。\r
 *\r
 * 两个必须节流的地方：onScroll 每帧都来、onItemEnterViewport 一次滚动能来几十条。\r
 * 不节流的话日志区会把真正重要的 onLayoutComplete 冲掉。\r
 */\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
\r
export const meta: DemoMeta = {\r
  slug: "lifecycle",\r
  title: "生命周期和事件",\r
  group: "advanced",\r
  intro: "13 个回调接满，滚一下就能看见谁在什么时候触发。",\r
  why: "要在「布局完成」后做点什么（补曝光统计、量真实高度、写埋点），就得知道 onLayout 与 onLayoutComplete 的差别：后者里读 layout 才是新的。",\r
  plugs: [],\r
  props: [\r
    "onMount={() => log('onMount')}",\r
    "onLayoutComplete={() => log('布局完成')}",\r
    "onScroll={(t) => log('scroll ' + t)}",\r
    "onItemEnterViewport={(i) => log('enter #' + i)}",\r
    "onReachBottom={() => log('到底了')}",\r
  ],\r
  note: "onUnmount 只在组件卸载时触发（换页时能在浏览器控制台看到）。视口事件按「可见比例」算，部分可见也会触发一次 enter。",\r
};\r
\r
export default createFeedStage({\r
  count: 40,\r
  seed: 1901,\r
  instrument: true,\r
  plugins: () => [],\r
  coreProps: (api) => {\r
    const { log } = api;\r
    // 滚动与视口回调做本地节流：日志是给人看的，不是给机器记的\r
    let lastScroll = 0;\r
    let enterCount = 0;\r
    return {\r
      columns: 3,\r
      onMount: () => log("onMount · 容器挂载"),\r
      onBeforeLayout: () => {\r
        log("onBeforeLayout · 返回 false 会中断本次布局", "info");\r
        return true;\r
      },\r
      onLayout: () => log("onLayout · 开始算位置", "info"),\r
      onLayoutComplete: () => log("onLayoutComplete · 位置已写入，现在读 layout 是新的"),\r
      onItemMount: (i) => {\r
        if (i < 3) log(\`onItemMount #\${i}\`, "info");\r
      },\r
      onItemUnmount: (i) => {\r
        if (i < 3) log(\`onItemUnmount #\${i}\`, "info");\r
      },\r
      onItemEnterViewport: (i, v) => {\r
        enterCount += 1;\r
        if (enterCount < 40) log(\`onItemEnterViewport #\${i} 可见 \${(v.visibleRatio * 100) | 0}%\`);\r
      },\r
      onItemLeaveViewport: (i) => {\r
        if (enterCount < 40) log(\`onItemLeaveViewport #\${i}\`, "info");\r
      },\r
      onScroll: (top) => {\r
        const now = performance.now();\r
        if (now - lastScroll < 400) return;\r
        lastScroll = now;\r
        log(\`onScroll \${Math.round(top)}\`, "info");\r
      },\r
      onResize: (w, h) => log(\`onResize \${w}×\${h}\`),\r
      onReachBottom: (d) => log(\`onReachBottom 距底 \${Math.round(d)}px\`),\r
      onItemClick: (i) => log(\`onItemClick #\${i}（点卡片试试）\`),\r
    };\r
  },\r
  chrome: () => (\r
    <p className="stage-tip">\r
      滚动、点卡片、拖窗口宽度 —— 三种行为分别触发滚动、点击、尺寸三类事件\r
    </p>\r
  ),\r
});\r
`,qb=`/**
 * 06 · 高级配置
 *
 * 那些「文档里有、但不常用」的 props 放一页演示：padding / useTransform / alignmentMode /
 * throttleDelay / debounceDelay / debug。
 *
 * 其中 useTransform 最值得亲手切一次：关掉后改用 top/left 定位，
 * 肉眼几乎没差别，但块级重排的开销和「能不能直接读 offsetLeft」完全不同。
 */
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "advanced",
  title: "高级配置",
  group: "advanced",
  intro: "padding、useTransform、alignmentMode、节流防抖、debug —— 一页调完。",
  why: "嵌在带内边距的容器里（padding 要参与布局，不能靠外层 margin）、要给每一项套自定义样式（itemClassName）、或怀疑布局算错要看耗时（debug）时用。",
  plugs: [],
  props: [
    "columns={3}",
    "padding={{{padding}}}",
    "alignmentMode=\\"{{{mode}}}\\"",
    "useTransform={{{useTransform}}}",
    "throttleDelay={{{throttle}}}",
    "debounceDelay={{{debounce}}}",
    "debug={{{debug}}}",
    "containerStyle={{ height: 420 }}",
  ],
  note: "padding 是参与布局计算的（可用宽度 = 容器宽 − 左右 padding），所以它不能当成外层 margin 用。useTransform=false 时项改用 top/left 定位，打印和读 offsetLeft 更直观。",
  controls: [
    { key: "padding", label: "padding", kind: "number", init: 12, min: 0, max: 40 },
    {
      key: "mode",
      label: "alignmentMode",
      kind: "select",
      init: "shortest",
      options: [
        { label: "shortest 最矮列", value: "shortest" },
        { label: "balanced 最少项", value: "balanced" },
        { label: "sequential 轮转", value: "sequential" },
      ],
      hint: "balanced 列高会不齐，但每列张数接近",
    },
    { key: "useTransform", label: "useTransform", kind: "switch", init: true },
    { key: "throttle", label: "throttleDelay", kind: "number", init: 16, min: 0, max: 120, step: 8, nonLayout: true },
    { key: "debounce", label: "debounceDelay", kind: "number", init: 150, min: 0, max: 600, step: 10, nonLayout: true },
    { key: "debug", label: "debug", kind: "switch", init: false, hint: "控制台打印布局耗时" },
  ],
};

export default createFeedStage({
  count: 34,
  seed: 2101,
  plugins: () => [],
  instrument: true,
  coreProps: (api) => ({
    columns: 3,
    padding: Number(api.cfg.padding),
    alignmentMode: String(api.cfg.mode) as "shortest" | "balanced" | "sequential",
    useTransform: Boolean(api.cfg.useTransform),
    throttleDelay: Number(api.cfg.throttle),
    debounceDelay: Number(api.cfg.debounce),
    debug: Boolean(api.cfg.debug),
  }),
  chrome: (api) => (
    <p className="stage-tip">
      定位方式：<b>{api.cfg.useTransform ? "transform" : "top / left"}</b> · 内边距{" "}
      <b>{Number(api.cfg.padding)}</b> · 列数 <b>{api.meter.columns}</b> · 总高{" "}
      <b>{Math.round(api.meter.totalHeight)}</b>px
    </p>
  ),
});
`,Xb=`/**
 * 07 · 响应式列数插件
 *
 * 断点表决定列数：命中哪档用哪档，与容器宽有关、与 window 无关。
 * 拖「模拟容器宽」看列数跳档 —— 这就是嵌在侧栏里也能算对的原因。
 */
import { createResponsiveColumnsPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

const BREAKPOINTS = {
  sm: { width: 0, columns: 2 },
  md: { width: 560, columns: 3 },
  lg: { width: 800, columns: 4 },
};

export const meta: DemoMeta = {
  slug: "responsive-columns",
  title: "响应式列数",
  group: "plugin",
  plugin: "ResponsiveColumnsPlugin",
  intro: "按断点表切列数：< 560 两列，560 起三列，800 起四列。",
  why: "设计稿给了明确的「平板 3 列 / 桌面 4 列」规范时用断点表；只想要「每列至少多宽」就用 AutoColumn（下一页）。",
  plugs: [
    {
      fn: "createResponsiveColumnsPlugin",
      cfg: "breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 560, columns: 3 }, lg: { width: 800, columns: 4 } }",
      why: "按容器宽度命中最近一档，读的是容器宽不是 window.innerWidth",
    },
  ],
  props: ["columns={2}", "gap={12}", "containerStyle={{ height: 420 }}"],
  note: "与 AutoColumnPlugin 互斥：两个都实现 calculateColumns，同开会交替覆盖，列数看起来会「闪」。",
  controls: [
    { key: "simWidth", label: "模拟容器宽", kind: "number", init: 760, min: 360, max: 1100, step: 20 },
  ],
};

export default createFeedStage({
  count: 28,
  seed: 2301,
  plugins: () => [createResponsiveColumnsPlugin({ breakpoints: BREAKPOINTS })],
  instrument: true,
  coreProps: (api) => ({
    gap: 12,
    containerStyle: { height: "var(--stage-h, 380px)", width: Number(api.cfg.simWidth) },
  }),
  chrome: (api) => {
    const w = Number(api.cfg.simWidth);
    const hit = w >= 800 ? "lg → 4 列" : w >= 560 ? "md → 3 列" : "sm → 2 列";
    return (
      <p className="stage-tip">
        容器宽 <b>{w}</b> · 命中 <b>{hit}</b> · 实际 <b>{api.meter.columns}</b> 列
      </p>
    );
  },
});
`,Jb=`/**
 * 08 · 自动列数插件
 *
 * 只给一条规则：「每列至少 minColumnWidth」，列数由 Core 反算。
 * 想验证它跟 window 无关，把模拟宽度拖小 —— 列数会跟着掉，跟浏览器窗口宽度没关系。
 */
import { createAutoColumnPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "auto-column",
  title: "自动列数",
  group: "plugin",
  plugin: "AutoColumnPlugin",
  intro: "给一个最小列宽，列数自己算：floor((可用宽 + gap) / (最小列宽 + gap))。",
  why: "版式没有硬性列数要求、只要求「图片别小于 200px」时用它，比写一堆断点省事。",
  plugs: [
    {
      fn: "createAutoColumnPlugin",
      cfg: "minColumnWidth: {{minColumnWidth}}, maxColumns: {{maxColumns}}",
      why: "按最小列宽算列数，容器变宽自动加列、变窄自动减列",
    },
  ],
  props: ["gap={12}", "containerStyle={{ height: 420 }}"],
  note: "算的是容器宽（padding 已扣除）。列数上限用 maxColumns 卡住，否则超宽屏会排出 8 列小图。",
  controls: [
    { key: "minColumnWidth", label: "minColumnWidth", kind: "number", init: 200, min: 120, max: 320, step: 10 },
    { key: "maxColumns", label: "maxColumns", kind: "number", init: 4, min: 2, max: 6 },
    { key: "simWidth", label: "模拟容器宽", kind: "number", init: 900, min: 360, max: 1100, step: 20 },
  ],
};

export default createFeedStage({
  count: 30,
  seed: 2401,
  instrument: true,
  plugins: (api) => [
    createAutoColumnPlugin({
      minColumnWidth: Number(api.cfg.minColumnWidth),
      maxColumns: Number(api.cfg.maxColumns),
    }),
  ],
  coreProps: (api) => ({
    gap: 12,
    containerStyle: { height: "var(--stage-h, 380px)", width: Number(api.cfg.simWidth) },
  }),
  chrome: (api) => (
    <p className="stage-tip">
      最小列宽 <b>{Number(api.cfg.minColumnWidth)}</b> · 容器宽{" "}
      <b>{Number(api.cfg.simWidth)}</b> · 算出 <b>{api.meter.columns}</b> 列（上限{" "}
      {Number(api.cfg.maxColumns)}）
    </p>
  ),
});
`,Zb=`/**
 * 09 · 对齐策略插件
 *
 * 三种列分配策略的差别只在高差明显时才看得出来，所以这页故意把卡片高度拉到 120–360。
 * 切到 sequential 就是「按 index 轮转」，位置可预测 —— 看板、泳道类版式要的正是这个。
 */
import { createAlignmentPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "alignment",
  title: "对齐策略",
  group: "plugin",
  plugin: "AlignmentPlugin",
  intro: "shortest / balanced / sequential，切一下就能看出列高差在哪。",
  why: "卡片高差大又想让底部别太参差用 shortest（默认）；想每列张数一样用 balanced；位置可预测用 sequential。",
  plugs: [
    {
      fn: "createAlignmentPlugin",
      cfg: 'mode: "{{mode}}"',
      why: "改写 alignmentMode，等价于 Core 的 props.alignmentMode，但可以按环境动态决定",
    },
  ],
  props: ["gap={12}", "containerStyle={{ height: 420 }}"],
  note: "列高相同时三者都取最小索引列（左优先）—— 这是刻意保留的旧行为，别指望 balanced 会把第一张放到「看起来更空」的那列。",
  controls: [
    {
      key: "mode",
      label: "mode",
      kind: "select",
      init: "shortest",
      options: [
        { label: "shortest 最矮列（默认）", value: "shortest" },
        { label: "balanced 项数最少", value: "balanced" },
        { label: "sequential 按序轮转", value: "sequential" },
      ],
    },
  ],
};

export default createFeedStage({
  count: 14,
  seed: 2501,
  heightRange: [120, 360],
  instrument: true,
  plugins: (api) => [
    createAlignmentPlugin({ mode: String(api.cfg.mode) as "shortest" | "balanced" | "sequential" }),
  ],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: (api) => (
    <p className="stage-tip">
      当前策略 <b>{String(api.cfg.mode)}</b> · {api.items.length} 张卡 → 看三列底部是否齐
    </p>
  ),
});
`,eP=`/**
 * 10 · 固定高度插件
 *
 * 把每项高度统一成固定值 —— 视频封面墙、商品网格要的就是等高。
 *
 * 这一页也是「坑位现场」：插件改的是 \`item.height\` 字段，Core 量的是 DOM 的 offsetHeight。
 * 卡片必须真的按 height 渲染（这里的 FeedCard 传了 fixed），否则插件等于没开。
 */
import { createFixedHeightPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "fixed-height",
  title: "固定高度",
  group: "plugin",
  plugin: "FixedHeightPlugin",
  intro: "统一每项高度，从错落流变成规整网格。",
  why: "视频封面墙、图库缩略网格这类要求「整行齐平」的版式，靠这个插件而不是给每张图写死 CSS。",
  plugs: [
    {
      fn: "createFixedHeightPlugin",
      cfg: "itemHeight: {{itemHeight}}",
      why: "改写 item.height，缩略图与文案一起放进固定高度的盒子里",
    },
  ],
  props: ["columns={3}", "gap={12}", "containerStyle={{ height: 420 }}"],
  note: "插件只改数据字段，不碰 DOM。卡片组件必须把 item.height 用上（示例里的 FeedCard 传 fixed 就是干这个），否则看起来「插件没生效」。",
  controls: [
    { key: "itemHeight", label: "itemHeight", kind: "number", init: 176, min: 100, max: 260, step: 4 },
  ],
};

export default createFeedStage({
  count: 18,
  seed: 2601,
  fixed: true,
  variant: "video",
  instrument: true,
  plugins: (api) => [createFixedHeightPlugin({ itemHeight: Number(api.cfg.itemHeight) })],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: (api) => (
    <p className="stage-tip">
      统一高度 <b>{Number(api.cfg.itemHeight)}</b>px · 行高应完全一致（总高{" "}
      {Math.round(api.meter.totalHeight)}px）
    </p>
  ),
});
`,nP=`/**
 * 11 · 间距插件
 *
 * 和 03（Core 的 gap props）的区别：插件带 \`responsive\`，能按窗口宽度自动换档。
 * 把浏览器窗口拉窄，间距会变成 sm 档的 8px —— props 做不到这件事。
 */
import { createGapPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "gap-plugin",
  title: "间距插件",
  group: "plugin",
  plugin: "GapPlugin",
  intro: "把行/列间距收到一处，还能按窗口宽度换档。",
  why: "多个页面要统一间距规范（或手机端要更紧）时，用插件的 responsive 比在每个页面写 CSS 断点稳。",
  plugs: [
    {
      fn: "createGapPlugin",
      cfg: "columnGap: {{columnGap}}, rowGap: {{rowGap}}, responsive: { sm: { columnGap: 8, rowGap: 8 } }",
      why: "间距集中配置，并按 sm/md/lg/xl 自动换档（阈值 768/992/1200）",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "responsive 是「命中即覆盖」：桌面端如果也配了 lg，上面两个滑杆就会被 lg 顶掉（看着像没接上）。这页只给 sm，所以桌面端用手写值、窄于 768px 才切 8px。档位看的是 window 宽度，不是容器宽。",
  controls: [
    { key: "columnGap", label: "columnGap", kind: "number", init: 16, min: 0, max: 40 },
    { key: "rowGap", label: "rowGap", kind: "number", init: 16, min: 0, max: 40 },
  ],
};

export default createFeedStage({
  count: 26,
  seed: 2701,
  instrument: true,
  plugins: (api) => [
    createGapPlugin({
      columnGap: Number(api.cfg.columnGap),
      rowGap: Number(api.cfg.rowGap),
      // 只配 sm：桌面端要能拖滑杆看到手写值生效；断点一旦配了同档位就会顶掉手写值
      responsive: {
        sm: { columnGap: 8, rowGap: 8 },
      },
    }),
  ],
  coreProps: () => ({ columns: 3 }),
  chrome: (api) => (
    <p className="stage-tip">
      配置 <b>{Number(api.cfg.columnGap)}</b> / <b>{Number(api.cfg.rowGap)}</b> · 把窗口拉窄会切到 sm 档（8px）
    </p>
  ),
});
`,tP=`/**\r
 * 12 · 虚拟瀑布流\r
 *\r
 * 1000 项，只渲染视口附近。关键读数在下面：数据项 1000，实际渲染通常只有几十。\r
 *\r
 * 注意它「只裁渲染不裁测量」：总高与滚动位置仍按全量算，所以滚动条长度是对的，\r
 * 自定义插件读 itemPositions 也不会因为虚拟化缺项。\r
 *\r
 * 页面的重点其实是「未测量项该估多高」——这是虚拟化唯一没法算准的地方：\r
 * 估低了，同一列后面的项会压上来（滚动时的重叠）；估高了，滚动条虚长。\r
 * 所以把 \`adaptiveEstimate\`（跟实测样本走）和分位做成了控件，可以直接对比。\r
 */\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
\r
export const meta: DemoMeta = {\r
  slug: "virtual",\r
  title: "虚拟瀑布流",\r
  group: "plugin",\r
  capability: "virtualize",\r
  intro: "1000 项只渲染几十个 DOM —— 看「数据项 / 实际渲染」两个读数。",\r
  why: "上千项、项高可估（图片卡、商品卡）时开。几百项以内不必上虚拟化，Recycle 更省事（不卸载、图片不用重载）。",\r
  plugs: [],\r
  props: [\r
    "items={thousandItems}",\r
    {\r
      text: "virtualize={{ overscan: {{overscan}}, adaptiveEstimate: true, estimateQuantile: {{estimateQuantile}} }}",\r
      when: (c) => Boolean(c.adaptive),\r
    },\r
    {\r
      text: "virtualize={{ overscan: {{overscan}}, adaptiveEstimate: false, estimateHeight: {{estimateHeight}} }}",\r
      when: (c) => !c.adaptive,\r
    },\r
    "columns={3}",\r
    "containerStyle={{ height: 420 }}",\r
  ],\r
  note: "estimateHeight 只是「冷启动还没有任何实测样本」时的兜底。样本够 8 个之后，自适应改用实测高度的中位数（P50）——中位数让总高误差最小。注意重叠不靠「把估值抬高」解决：抬高只是把误差从「重叠」换成「滚动条虚长」，而后者更持久。真正压住重叠的是「量到真高就立刻重排」——误差只存在一帧，且通常落在视口外。关掉自适应则严格用 estimateHeight，可以自己体会「240 面对 190~350 的项高」会怎样。",\r
  controls: [\r
    { key: "overscan", label: "overscan（屏）", kind: "number", init: 1, min: 0, max: 4 },\r
    {\r
      key: "adaptive",\r
      label: "自适应估值",\r
      kind: "switch",\r
      init: true,\r
      hint: "关掉后严格用 estimateHeight 排未测量项",\r
    },\r
    {\r
      key: "estimateQuantile",\r
      label: "分位",\r
      kind: "select",\r
      init: "0.5",\r
      options: [\r
        { label: "P50 中位数（默认，总高最准）", value: "0.5" },\r
        { label: "P75", value: "0.75" },\r
        { label: "P90（更保守，宁可留空）", value: "0.9" },\r
        { label: "P100（绝不重叠）", value: "1" },\r
      ],\r
      when: (c) => Boolean(c.adaptive),\r
    },\r
    {\r
      key: "estimateHeight",\r
      label: "estimateHeight",\r
      kind: "number",\r
      init: 240,\r
      min: 120,\r
      max: 360,\r
      step: 20,\r
      when: (c) => !c.adaptive,\r
    },\r
  ],\r
};\r
\r
export default createFeedStage({\r
  count: 1000,\r
  seed: 2801,\r
  instrument: true,\r
  plugins: () => [],\r
  coreProps: (api) => ({\r
    columns: 3,\r
    gap: 12,\r
    virtualize: {\r
      overscan: Number(api.cfg.overscan),\r
      adaptiveEstimate: Boolean(api.cfg.adaptive),\r
      estimateQuantile: Number(api.cfg.estimateQuantile ?? 0.5),\r
      estimateHeight: Number(api.cfg.estimateHeight),\r
    },\r
  }),\r
  chrome: (api) => (\r
    <p className="stage-tip">\r
      {api.items.length} 项数据 → 实际渲染 <b>{api.meter.rendered}</b> 个 · 总高{" "}\r
      <b>{Math.round(api.meter.totalHeight)}</b>px（按全量算，滚动中会随实测样本收敛）\r
    </p>\r
  ),\r
});\r
`,rP=`/**\r
 * 13 · 虚拟瀑布流（动态高度）\r
 *\r
 * 虚拟化最容易翻车的地方：项还没测量就先按估值占位，等真测出来再修正。\r
 * 这页挂了 900ms 后把所有项高度 ×1.5，模拟「图片加载完成」—— 看总高与滚动条的变化。\r
 *\r
 * 关掉 dynamicHeights 就能看到反例：项高度变了但不会自动重排（省了每项一个 ResizeObserver\r
 * 的开销，代价是数据变了要自己 relayout）。\r
 */\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
\r
export const meta: DemoMeta = {\r
  slug: "virtual-dynamic",\r
  title: "虚拟瀑布流（动态高度）",\r
  group: "plugin",\r
  capability: "virtualize · dynamicHeights",\r
  intro: "900ms 后所有卡片高度 ×1.5 —— 看虚拟化怎么把估值换成实测值。",\r
  why: "图片类瀑布流必然「先估后测」。要保证滚动条不跳、总高最终准确，就得理解 estimateHeight 与 dynamicHeights 各自管什么。",\r
  plugs: [],\r
  props: [\r
    "virtualize={{ overscan: 1, adaptiveEstimate: {{adaptive}}, dynamicHeights: {{{dynamicHeights}}} }}",\r
    {\r
      text: "  // adaptiveEstimate 关掉时才需要自己给 estimateHeight",\r
      when: (c) => !c.adaptive,\r
    },\r
    "columns={3}",\r
    "containerStyle={{ height: 420 }}",\r
  ],\r
  note: "dynamicHeights 关闭后，项高度变化不会触发重排 —— 需要自己调 ref.relayout()。虚拟化下项可能已卸载，measureItem 会返回缓存值而不是实时量。自适应估值（默认开）会跟着实测样本走，所以上面这一下 ×1.5 之后，未测量项的估值也会自动抬上去。",\r
  controls: [\r
    {\r
      key: "adaptive",\r
      label: "自适应估值",\r
      kind: "switch",\r
      init: true,\r
      hint: "关掉后严格用 estimateHeight 排未测量项",\r
    },\r
    {\r
      key: "estimateHeight",\r
      label: "estimateHeight",\r
      kind: "number",\r
      init: 240,\r
      min: 120,\r
      max: 360,\r
      step: 20,\r
      when: (c) => !c.adaptive,\r
    },\r
    { key: "dynamicHeights", label: "dynamicHeights", kind: "switch", init: true, hint: "关掉后高度变化不自动重排" },\r
  ],\r
};\r
\r
export default createFeedStage({\r
  count: 400,\r
  seed: 2901,\r
  instrument: true,\r
  plugins: () => [],\r
  coreProps: (api) => ({\r
    columns: 3,\r
    gap: 12,\r
    virtualize: {\r
      overscan: 1,\r
      adaptiveEstimate: Boolean(api.cfg.adaptive),\r
      estimateHeight: Number(api.cfg.estimateHeight),\r
      dynamicHeights: Boolean(api.cfg.dynamicHeights),\r
    },\r
  }),\r
  effect: (api) => {\r
    const timer = window.setTimeout(() => {\r
      api.setItems((prev) =>\r
        prev.map((c) => ({ ...c, height: Math.round((c.height * 1.5) / 8) * 8 }))\r
      );\r
      api.log("模拟图片加载完成：全部项高度 ×1.5，Core 重新测量并修正位置");\r
    }, 900);\r
    return () => window.clearTimeout(timer);\r
  },\r
  chrome: (api) => (\r
    <p className="stage-tip">\r
      {api.items.length} 项 · 渲染 <b>{api.meter.rendered}</b> · 总高{" "}\r
      <b>{Math.round(api.meter.totalHeight)}</b>px · 自适应{" "}\r
      <b>{api.cfg.adaptive ? "开" : "关"}</b> · dynamicHeights{" "}\r
      <b>{api.cfg.dynamicHeights ? "开" : "关"}</b>\r
    </p>\r
  ),\r
});\r
`,oP=`/**
 * 14 · Throttle 插件
 *
 * 改的是 Core 的 \`throttleDelay\` / \`debounceDelay\` —— 滚动回调多久跑一次、重排多久防抖。
 * 快速滚一遍，看「滚动回调」这个读数：把 scroll 调到 120ms，回调次数会明显变少。
 *
 * 注意这里节流的是**回调**，不是布局：布局该什么时候算还是什么时候算，
 * 所以不会出现「节流开了、卡片位置变慢」的现象。
 */
import { createThrottlePlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "throttle",
  title: "Throttle 插件",
  group: "plugin",
  plugin: "ThrottlePlugin",
  intro: "滚动回调 120ms 一次还是每帧一次，看读数差别。",
  why: "埋点、懒加载判断、侧边指示器这类「滚动时要做点事」的逻辑，不节流会直接把主线程拖住。",
  plugs: [
    {
      fn: "createThrottlePlugin",
      cfg: "scroll: {{scroll}}, resize: {{resize}}",
      why: "统一收口滚动/尺寸回调频率，比每个页面各写一个 throttle 稳",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "节流的是回调，不是布局。想让「连续改尺寸时的重排」慢下来用 DebounceLayout（下一页）。",
  controls: [
    { key: "scroll", label: "scroll（ms）", kind: "number", init: 16, min: 0, max: 200, step: 8, nonLayout: true },
    { key: "resize", label: "resize（ms）", kind: "number", init: 120, min: 0, max: 400, step: 20, nonLayout: true },
  ],
};

export default createFeedStage({
  count: 120,
  seed: 3001,
  instrument: true,
  plugins: (api) => [
    createThrottlePlugin({ scroll: Number(api.cfg.scroll), resize: Number(api.cfg.resize) }),
  ],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: (api) => (
    <p className="stage-tip">
      滚动回调 <b>{api.meter.scrolls}</b> 次（阈值 {Number(api.cfg.scroll)}ms）· 布局耗时{" "}
      <b>{api.meter.layoutMs.toFixed(1)}</b>ms —— 快速滚一遍再对比
    </p>
  ),
});
`,lP=`/**
 * 15 · DebounceLayout 插件
 *
 * 只做一件事：把「重排」的防抖拉长。拖下面的宽度滑杆 —— 每一帧宽度都在变，
 * 但只有停下来之后才真正重排一次。看「最近布局」耗时的变化频率。
 *
 * 真实场景：可拖拽分栏、可展开的侧边栏、响应式预览缩放。
 */
import { createDebounceLayoutPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "debounce-layout",
  title: "DebounceLayout 插件",
  group: "plugin",
  plugin: "DebounceLayoutPlugin",
  intro: "连续拖宽度时只在停下后重排一次。",
  why: "容器尺寸会被连续改变的场景（拖拽分栏、展开收起、缩放预览）不做防抖，每帧都会全量重排。",
  plugs: [
    {
      fn: "createDebounceLayoutPlugin",
      cfg: "delay: {{delay}}",
      why: "把 debounceDelay 拉长到 300ms，连续 resize 只算最后一次",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "防抖太大会有「松手后卡片才归位」的观感，200–300ms 是比较稳的区间。和 ThrottlePlugin 分工不同：那个管回调、这个管重排。",
  controls: [
    { key: "delay", label: "delay（ms）", kind: "number", init: 300, min: 0, max: 600, step: 20, nonLayout: true },
    { key: "simWidth", label: "容器宽", kind: "number", init: 780, min: 380, max: 1080, step: 10 },
  ],
};

export default createFeedStage({
  count: 36,
  seed: 3101,
  instrument: true,
  plugins: (api) => [createDebounceLayoutPlugin({ delay: Number(api.cfg.delay) })],
  coreProps: (api) => ({
    columns: 3,
    gap: 12,
    containerStyle: { height: "var(--stage-h, 380px)", width: Number(api.cfg.simWidth) },
  }),
  chrome: (api) => (
    <p className="stage-tip">
      防抖 <b>{Number(api.cfg.delay)}</b>ms · 最近布局{" "}
      <b>{api.meter.layoutMs.toFixed(1)}</b>ms · 拖滑杆时观察它多久变一次
    </p>
  ),
});
`,iP=`/**
 * 16 · Recycle 插件
 *
 * 离屏项设 \`visibility: hidden\`：DOM 还在、图片不用重新下载，只是不参与绘制。
 * 这是「几百项」场景最划算的一档 —— 比虚拟化省事，比不处理省电。
 *
 * 页面上那个「改用 virtualize」开关是**对照实验**：同一份 300 项数据，
 * 一边保留 300 个 DOM 只隐藏绘制，一边只挂几十个 DOM。选型纠结时点一下就有体感。
 */
import { createRecyclePlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "recycle",
  title: "Recycle 插件",
  group: "plugin",
  plugin: "RecyclePlugin",
  intro: "离屏项隐藏而不卸载 —— 图片不用重载，DOM 数量不变。打开「改用 virtualize」可以当场对照。",
  why: "几百项的长列表：卸载会丢图片缓存（滚回来又要下载），不处理又会一直重绘。Recycle 是中间那档。",
  plugs: [
    {
      fn: "createRecyclePlugin",
      cfg: "poolSize: {{poolSize}}",
      why: "视口外超出池子的项设 visibility:hidden，减少绘制但保留 DOM",
    },
  ],
  props: [
    "columns={3}",
    "containerStyle={{ height: 420 }}",
    { text: "virtualize={{ overscan: 1 }}", when: (c) => Boolean(c.virtual) },
  ],
  note: "与 virtualize 互斥：一个隐藏 DOM、一个卸载 DOM，同开会互相打架（可见项被另一套逻辑当成离屏）。所以上面的开关一打开，Recycle 插件就不装了 —— 两种策略二选一。挑法：几百项、图片重、要保住图片缓存 → Recycle；上千项、要控 DOM 数 → virtualize。",
  controls: [
    { key: "poolSize", label: "poolSize", kind: "number", init: 24, min: 4, max: 80, step: 2, nonLayout: true },
    {
      key: "virtual",
      label: "改用 virtualize",
      kind: "switch",
      init: false,
      hint: "对照：卸载离屏 DOM（Recycle 是隐藏不卸载）",
    },
  ],
};

export default createFeedStage({
  count: 300,
  seed: 3201,
  instrument: true,
  plugins: (api) =>
    api.cfg.virtual ? [] : [createRecyclePlugin({ poolSize: Number(api.cfg.poolSize) })],
  coreProps: (api) => ({
    columns: 3,
    gap: 12,
    ...(api.cfg.virtual ? { virtualize: { overscan: 1 } } : null),
  }),
  chrome: (api) => (
    <div className="stage-stats">
      <p className="stage-tip">
        {api.items.length} 项 · DOM <b>{api.meter.rendered}</b> 个 · 总高{" "}
        <b>{Math.round(api.meter.totalHeight)}</b>px · 布局{" "}
        <b>{api.meter.layoutMs.toFixed(1)}</b>ms ·{" "}
        {api.cfg.virtual
          ? "virtualize（卸载离屏，DOM 只剩几十个）"
          : \`Recycle（DOM 全留 300 个，只隐藏绘制，池子 \${Number(api.cfg.poolSize)}）\`}
      </p>
    </div>
  ),
});
`,sP=`/**
 * 17 · InfiniteScroll 插件
 *
 * 距底 \`threshold\` 像素时触发 onLoadMore，追加数据。插件内带并发锁，
 * 快速滚到底也只发一次请求 —— 数据量读数会一档一档往上走，不会跳。
 */
import { createInfiniteScrollPlugin } from "vane-waterfall/custom-plugins";
import { makeCards } from "../data/seed";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

const MAX = 240;

export const meta: DemoMeta = {
  slug: "infinite-scroll",
  title: "InfiniteScroll 插件",
  group: "plugin",
  plugin: "InfiniteScrollPlugin",
  intro: "滚到底自动追加，加载完停在 240 项不再请求。",
  why: "信息流、图片流的标准做法。threshold 要在「用户快到底但还没到底」时触发，太小会看到空白等待。",
  plugs: [
    {
      fn: "createInfiniteScrollPlugin",
      cfg: "threshold: {{threshold}}",
      why: "把 props.reachBottomOffset 写成 threshold，并在 onReachBottom 里加并发锁与 hasMore 判断",
    },
  ],
  props: ["onLoadMore={loadMore}", "columns={3}", "containerStyle={{ height: 420 }}"],
  note: "与 PaginationPlugin 互斥：一个追加、一个切片，同开会「翻到第 2 页又看到第 1 页」。到上限时让插件 setState({ hasMore: false }) 或像这里在 onLoadMore 里短路。",
  controls: [
    { key: "threshold", label: "threshold（px）", kind: "number", init: 400, min: 100, max: 900, step: 50, nonLayout: true },
  ],
};

export default createFeedStage({
  count: 24,
  seed: 3301,
  instrument: true,
  plugins: (api) => [createInfiniteScrollPlugin({ threshold: Number(api.cfg.threshold) })],
  coreProps: (api) => ({
    columns: 3,
    gap: 12,
    onLoadMore: () => {
      api.setItems((prev) =>
        prev.length >= MAX
          ? prev
          : [...prev, ...makeCards({ count: 12, seed: 3301 + prev.length * 7 })]
      );
    },
  }),
  chrome: (api) => {
    const loaded = api.items.length;
    return (
      <p className="stage-tip">
        已加载 <b>{loaded}</b> / {MAX} 项 ·{" "}
        {loaded >= MAX ? "已到上限，不会再请求" : \`距底 \${Number(api.cfg.threshold)}px 时追加 12 项\`}
      </p>
    );
  },
});
`,aP=`/**
 * 18 · Pagination 插件
 *
 * 切片发生在整条数据管线的最后一环（Filter → Sort → Search → Pagination），
 * 所以「页数」永远是筛选后的页数。这页只有分页，但读数会写明这一点。
 */
import { createPaginationPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "pagination",
  title: "Pagination 插件",
  group: "plugin",
  plugin: "PaginationPlugin",
  intro: "pageIndex / pageSize 交给插件切片，翻页自动回顶。",
  why: "后台列表、搜索结果页：需要「第几页 / 共几页」这种确定性导航时用分页，不要用无限滚动。",
  plugs: [
    {
      fn: "createPaginationPlugin",
      cfg: "pageSize: {{pageSize}}, scrollToTop: true",
      why: "读 props.pageIndex（1 基）与 props.pageSize，对 items 切片",
    },
  ],
  props: [
    "pageIndex={{{pageIndex}}}",
    "pageSize={{{pageSize}}}",
    "scrollToTopOnPageChange",
    "columns={4}",
    "containerStyle={{ height: 420 }}",
  ],
  note: "它排在 Filter/Sort/Search 之后（priority 10），所以页数是过滤后的总数。顺序反了会出现「第 2 页是空的」。",
  controls: [
    { key: "pageSize", label: "pageSize", kind: "number", init: 12, min: 4, max: 36, step: 2 },
    { key: "pageIndex", label: "pageIndex", kind: "number", init: 1, min: 1, max: 12 },
  ],
};

export default createFeedStage({
  count: 48,
  seed: 3401,
  instrument: true,
  plugins: (api) => [
    createPaginationPlugin({ pageSize: Number(api.cfg.pageSize), scrollToTop: true }),
  ],
  coreProps: (api) => {
    // 页数由 pageSize 决定，pageIndex 的滑杆上限是死的 → 超出就钳到最后一页，
    // 否则拖到头会得到一个「第 12 / 2 页」的空舞台
    const pages = Math.max(1, Math.ceil(48 / Number(api.cfg.pageSize)));
    return {
      columns: 4,
      gap: 12,
      pageIndex: Math.min(Number(api.cfg.pageIndex), pages),
      pageSize: Number(api.cfg.pageSize),
      scrollToTopOnPageChange: true,
    };
  },
  chrome: (api) => {
    const size = Number(api.cfg.pageSize);
    const asked = Number(api.cfg.pageIndex);
    const pages = Math.max(1, Math.ceil(api.items.length / size));
    const page = Math.min(asked, pages);
    return (
      <div className="stage-pager">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => api.setCfg("pageIndex", Math.max(1, page - 1))}
        >
          上一页
        </button>
        <span>
          第 <b>{page}</b> / {pages} 页 · 每页 {size} · 共 {api.items.length} 项
          {asked > pages ? "（滑杆已越界，钳到最后一页）" : ""}
        </span>
        <button
          type="button"
          disabled={page >= pages}
          onClick={() => api.setCfg("pageIndex", Math.min(pages, page + 1))}
        >
          下一页
        </button>
      </div>
    );
  },
});
`,uP=`/**
 * 19 · Filter 插件
 *
 * 拖价格上限看结果数——这里是**实时**生效的，因为插件优先读 \`props.filterFn\`：
 * 插件提供兜底谓词，页面通过 props 换条件，不用重建组件。
 *
 * 这也是推荐接法：条件放 state，透传给 filterFn，插件那一层只负责「在管线里正确执行」。
 */
import { createFilterPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "filter",
  title: "Filter 插件",
  group: "plugin",
  plugin: "FilterPlugin",
  intro: "价格上限拖到哪，列表就剩到哪 —— 页数/总数跟着变。",
  why: "价格区间、库存、标签筛选：过滤必须发生在排序与分页之前，否则「第 2 页」会突然空掉。",
  plugs: [
    {
      fn: "createFilterPlugin",
      cfg: "predicate: (item) => item.price <= 500, scrollToTop: false",
      why: "在 transformProps 链的第一环删掉不匹配项（priority 40，排在排序/分页之前）",
    },
  ],
  props: ["filterFn={(item) => item.price <= {{maxPrice}}}", "columns={4}", "containerStyle={{ height: 420 }}"],
  note: "谓词抛错时按「保留」处理，不会让整表消失。条件变化后要不要回顶由 scrollToTop 决定。",
  controls: [
    { key: "maxPrice", label: "价格上限", kind: "number", init: 500, min: 50, max: 900, step: 50 },
  ],
};

export default createFeedStage({
  count: 40,
  seed: 3501,
  commerce: true,
  variant: "product",
  instrument: true,
  pluginKeys: [],
  plugins: () => [createFilterPlugin({ predicate: (item) => item.price <= 500 })],
  coreProps: (api) => ({
    columns: 4,
    gap: 12,
    filterFn: (item: { price: number }) => item.price <= Number(api.cfg.maxPrice),
  }),
  chrome: (api) => {
    const max = Number(api.cfg.maxPrice);
    const passed = api.items.filter((i) => i.price <= max).length;
    return (
      <p className="stage-tip">
        ¥ ≤ {max} · 命中 <b>{passed}</b> / {api.items.length} 项
      </p>
    );
  },
});
`,cP=`/**\r
 * 20 · Sort 插件\r
 *\r
 * 排序作用在**已过滤**的全量集合上，然后才分页 —— 这个顺序决定了「第 2 页」是不是真的第二页。\r
 * 换排序方式时会发现卡片位置整体跳动，那正是 transformProps 重新排了 items。\r
 */\r
import { createSortPlugin } from "vane-waterfall/custom-plugins";\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
import type { SeedCard } from "../data/seed";\r
\r
const COMPARATORS: Record<string, (a: SeedCard, b: SeedCard) => number> = {\r
  likes: (a, b) => b.likes - a.likes,\r
  price: (a, b) => a.price - b.price,\r
  fresh: (a, b) => a.minutesAgo - b.minutesAgo,\r
  tall: (a, b) => b.height - a.height,\r
};\r
\r
const LABEL: Record<string, string> = {\r
  likes: "点赞数 高→低",\r
  price: "价格 低→高",\r
  fresh: "发布时间 新→旧",\r
  tall: "高度 高→低",\r
};\r
\r
export const meta: DemoMeta = {\r
  slug: "sort",\r
  title: "Sort 插件",\r
  group: "plugin",\r
  plugin: "SortPlugin",\r
  intro: "四种排序切换，卡片整体重排 —— 顺序变了而不是重新请求。",\r
  why: "「按热度 / 价格 / 最新」这类前端可解的排序，交给插件比让后端多个接口省事；但数据量大时还是应该由后端排。",\r
  plugs: [\r
    {\r
      fn: "createSortPlugin",\r
      cfg: "comparator: (a, b) => b.likes - a.likes",\r
      why: "在过滤之后、分页之前重排 items（priority 30）",\r
    },\r
  ],\r
  props: ["sortComparator={comparator}", "columns={4}", "containerStyle={{ height: 420 }}"],\r
  note: "优先读 props.sortComparator：所以页面切换排序方式时不用重建组件。comparator 必须是纯函数，且不能依赖 items 顺序（否则排序结果不稳定）。",\r
  controls: [\r
    {\r
      key: "sortBy",\r
      label: "排序方式",\r
      kind: "select",\r
      init: "likes",\r
      options: [\r
        { label: LABEL.likes, value: "likes" },\r
        { label: LABEL.price, value: "price" },\r
        { label: LABEL.fresh, value: "fresh" },\r
        { label: LABEL.tall, value: "tall" },\r
      ],\r
    },\r
  ],\r
};\r
\r
export default createFeedStage({\r
  count: 32,\r
  seed: 3601,\r
  commerce: true,\r
  variant: "product",\r
  instrument: true,\r
  pluginKeys: [],\r
  plugins: () => [createSortPlugin<SeedCard>({ comparator: COMPARATORS.likes })],\r
  coreProps: (api) => ({\r
    columns: 4,\r
    gap: 12,\r
    sortComparator: COMPARATORS[String(api.cfg.sortBy)] ?? COMPARATORS.likes,\r
    scrollToTopOnSortChange: false,\r
  }),\r
  chrome: (api) => (\r
    <p className="stage-tip">\r
      当前 <b>{LABEL[String(api.cfg.sortBy)]}</b> · 首项应是「{String(api.cfg.sortBy)} 最靠前」的那张\r
    </p>\r
  ),\r
});\r
`,dP=`/**\r
 * 21 · Search 插件\r
 *\r
 * 输入框的值写进 \`props.searchQuery\`，插件在管线里做大小写不敏感的包含匹配。\r
 *\r
 * 这里把 searchQuery 从「重建组件的 key」里排除了 —— 否则每敲一个字整块瀑布流都会重挂载，\r
 * 输入框失焦、滚动归零。这是示例页很容易做错的地方，也是真实项目里最常见的性能坑。\r
 */\r
import { createSearchPlugin } from "vane-waterfall/custom-plugins";\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
\r
export const meta: DemoMeta = {\r
  slug: "search",\r
  title: "Search 插件",\r
  group: "plugin",\r
  plugin: "SearchPlugin",\r
  intro: "边打字边过滤，输入框不失焦、滚动不乱跳。",\r
  why: "字段有限的本地搜索（标题、作者、标签）用插件就够；需要模糊匹配、拼音、分词时应该后端做。",\r
  plugs: [\r
    {\r
      fn: "createSearchPlugin",\r
      cfg: 'fields: ["title", "author"]',\r
      why: "只扫指定字段，避免把 undefined 也扫一遍（priority 20，在排序之后、分页之前）",\r
    },\r
  ],\r
  props: ["searchQuery={query}", "columns={3}", "containerStyle={{ height: 420 }}"],\r
  note: "fields 不给会扫全部可枚举字段，容易误命中。scrollToTop 默认关，搜索后保留滚动位置反而更自然时别打开。",\r
};\r
\r
export default createFeedStage({\r
  count: 36,\r
  seed: 3701,\r
  instrument: true,\r
  pluginKeys: [],\r
  plugins: () => [createSearchPlugin({ fields: ["title", "author"] })],\r
  coreProps: (api) => ({\r
    columns: 3,\r
    gap: 12,\r
    searchQuery: String(api.cfg.query ?? ""),\r
    scrollToTopOnSearchChange: false,\r
  }),\r
  chrome: (api) => {\r
    const q = String(api.cfg.query ?? "").trim().toLowerCase();\r
    // 与插件同款匹配规则（fields: title + author，大小写不敏感），只为把命中数显示出来\r
    const hit = q\r
      ? api.items.filter(\r
          (i) => i.title.toLowerCase().includes(q) || i.author.toLowerCase().includes(q)\r
        ).length\r
      : api.items.length;\r
    return (\r
      <div className="stage-search">\r
        <input\r
          type="search"\r
          placeholder="搜标题或作者，如「咖啡」「林一白」"\r
          value={String(api.cfg.query ?? "")}\r
          onChange={(e) => api.setCfg("query", e.target.value)}\r
        />\r
        <span>\r
          命中 <b>{hit}</b> / {api.items.length} 项{q ? \`（query="\${q}"）\` : ""}\r
        </span>\r
      </div>\r
    );\r
  },\r
});\r
`,pP=`/**
 * 22 · ClickAnalytics 插件
 *
 * 插件统计每项点击次数并 \`bus.emit("analytics:click", …)\`，\`showOverlay\` 打开时直接在卡片角上显示次数。
 * 页面拿不到 bus，但有 \`onItemClick\` —— 两条路都演示在这里：角标看插件内部计数，日志看 Core 回调。
 *
 * 「导出 JSON」按钮演示的是接入姿势：插件的计数原本只在内存里，刷新即清零，
 * 真接自己的埋点通道时就是从 \`getStats()\` 取这份数据往上报。
 */
import { createClickAnalyticsPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { SeedCard } from "../data/seed";
import type { DemoMeta } from "./types";

// 提到模块级：chrome 里的「导出」按钮要读同一份统计
const clickPlugin = createClickAnalyticsPlugin<SeedCard>({ showOverlay: true });

export const meta: DemoMeta = {
  slug: "click-analytics",
  title: "ClickAnalytics 插件",
  group: "plugin",
  plugin: "ClickAnalyticsPlugin",
  intro: "点卡片，角上的计数 +1，日志同时记一条；「导出 JSON」把内存计数吐出来。",
  why: "「哪几张最常被点」这类轻量埋点，用插件比在 renderItem 里到处加 onClick 干净，也不会漏掉没渲染的路径。",
  plugs: [
    {
      fn: "createClickAnalyticsPlugin",
      cfg: "showOverlay: true, log: false",
      why: "订阅 onItemClick 累加计数并广播事件，角标只是可视化的开关",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}", "onItemClick={(i, item) => track(item.id)}"],
  note: "showOverlay 生产环境应关掉（默认就是 false）。真实上报在 bus 上订阅 analytics:click —— 页面侧拿不到 bus 时，可以用 onItemClick 走自己的埋点函数，或者像右上角那样定时取 getStats() 批量上报（计数只在内存里，刷新即清零）。",
};

export default createFeedStage({
  count: 20,
  seed: 3801,
  instrument: true,
  plugins: () => [clickPlugin],
  coreProps: (api) => ({
    columns: 3,
    gap: 12,
    onItemClick: (i, item: { title: string }) =>
      api.log(\`点击 #\${i} · \${item.title}（bus 上同时广播 analytics:click）\`),
  }),
  chrome: (api) => (
    <div className="stage-stats">
      <p className="stage-tip">点几张卡：右上角数字是插件自己的计数</p>
      <button
        type="button"
        onClick={() => {
          const stats = clickPlugin.getStats();
          api.log(\`getStats() → \${JSON.stringify(stats)}\`);
          void navigator.clipboard?.writeText(JSON.stringify(stats, null, 2)).catch(() => {});
        }}
      >
        导出 JSON
      </button>
    </div>
  ),
});
`,fP=`/**
 * 23 · Bookmark 插件
 *
 * 键盘位置书签：滚到某处按 \`b\` 记下，再滚走按 \`r\` 跳回来。记的是 scrollTop，存在 localStorage。
 * 输入框里按 b/r 不会触发 —— 插件自己判定了焦点。
 */
import { createBookmarkPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import { KeyHint } from "./panels";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "bookmark",
  title: "Bookmark 插件",
  group: "plugin",
  plugin: "BookmarkPlugin",
  intro: "滚到中间按 b，再滚别处按 r —— 回到刚才那一屏。",
  why: "长信息流里「刚才那条不错，等下回来看」，比让用户翻历史记录便宜得多。",
  plugs: [
    {
      fn: "createBookmarkPlugin",
      cfg: 'storageKey: "demo-bookmark", scrollBehavior: "smooth"',
      why: "键盘监听 + localStorage，页面不用为「记位置」写任何逻辑",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "记的是 scrollTop 绝对值，不是某一项：数据顺序变了书签就偏了。要「记住这条内容」请按 id 记（用 ScrollAnchor 那套）。",
};

export default createFeedStage({
  count: 60,
  seed: 3901,
  instrument: true,
  plugins: () => [createBookmarkPlugin({ storageKey: "demo-bookmark", scrollBehavior: "smooth" })],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: () => (
    <>
      <KeyHint
        items={[
          ["b", "记住当前位置"],
          ["r", "跳回书签位置"],
        ]}
      />
      <p className="stage-tip">先滚到中间，按 b；再滚到别处，按 r</p>
    </>
  ),
});
`,mP=`/**
 * 24 · URLSync 插件
 *
 * 把筛选条件写进 URL：复制地址发给同事，打开就是同一屏。
 * 这页用的是 \`mode: "search"\`（写 ?searchQuery=…），因为站点本身是 hash 路由 —— 两者不冲突。
 *
 * 三个容易做错的点，这页都按「能跑通」的写法给了：
 *  1. \`keys\` 里写的必须是**内核 props 上真实存在的键**（这里是 \`searchQuery\`）——
 *     插件是从 props 取值写 URL 的，写成别的名字就永远写不进去；
 *  2. 真正的过滤要由 Search/Filter 插件执行，Core 不消费 \`filterFn\`；
 *  3. 插件挂载时会在 bus 上广播 \`urlsync:init\`，页面得自己消费（这里直接读一次
 *     location.search 回填控件，等价于「订阅 bus」）。
 */
import { createSearchPlugin, createURLSyncPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "url-sync",
  title: "URLSync 插件",
  group: "plugin",
  plugin: "URLSyncPlugin",
  intro: "条件写进 URL，刷新 / 分享都能复现同一屏。",
  why: "带筛选的后台列表、搜索结果页：一旦用户按了 F5 或把链接发给别人，条件不该丢。",
  plugs: [
    {
      fn: "createURLSyncPlugin",
      cfg: 'mode: "search", keys: ["searchQuery"]',
      why: "把 props 上的 searchQuery 写进 URL，并在挂载时广播 URL 里的值",
    },
    {
      fn: "createSearchPlugin",
      cfg: 'fields: ["title", "author"]',
      why: "URLSync 只负责搬运条件，真正过滤要靠搜索插件",
    },
  ],
  props: ["searchQuery={query}", "columns={3}", "containerStyle={{ height: 420 }}"],
  note: 'keys 里必须是内核 props 上真实存在的键（searchQuery），写成 query 就永远写不进 URL。刷新页面后控件值会从 URL 回填，相当于「分享出去的那一屏」。',
};

export default createFeedStage({
  count: 24,
  seed: 4001,
  instrument: true,
  pluginKeys: [],
  plugins: () => [
    createURLSyncPlugin({ mode: "search", keys: ["searchQuery"] }),
    createSearchPlugin({ fields: ["title", "author"] }),
  ],
  coreProps: (api) => ({
    columns: 3,
    gap: 12,
    searchQuery: String(api.cfg.query ?? ""),
    scrollToTopOnSearchChange: false,
  }),
  effect: (api) => {
    // 挂载时把 URL 上的条件回填控件：刷新一次就能看到「分享出去的那一屏」
    const q = new URLSearchParams(window.location.search).get("searchQuery");
    if (q) {
      api.setCfg("query", q);
      api.log(\`从 URL 回填 searchQuery="\${q}"\`);
    }
  },
  chrome: (api) => (
    <div className="stage-search">
      <input
        type="search"
        placeholder="输入关键词，地址栏会跟着变"
        value={String(api.cfg.query ?? "")}
        onChange={(e) => api.setCfg("query", e.target.value)}
      />
      <code className="stage-url">{window.location.search || "（地址栏还没有参数）"}</code>
    </div>
  ),
});
`,gP=`/**
 * 25 · StatePersistence 插件
 *
 * 卸载时把 scrollTop 与指定 props 写入 localStorage，挂载时只注入一次。
 * 验证方式：滚到中间 → 切到「总览」再切回来（或直接刷新页面）→ 位置还在。
 */
import React, { useCallback, useState } from "react";
import { createStatePersistencePlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

const KEY = "demo-waterfall-state";

export const meta: DemoMeta = {
  slug: "state-persistence",
  title: "StatePersistence 插件",
  group: "plugin",
  plugin: "StatePersistencePlugin",
  intro: "滚到哪、第几页，都记在本地；再打开接着看。",
  why: "详情页返回列表、刷新后回到原位置 —— 这类「像原生 App」的体验，靠它一行装配。",
  plugs: [
    {
      fn: "createStatePersistencePlugin",
      cfg: 'storageKey: "demo-waterfall-state", persistScroll: true, persistKeys: ["pageIndex"]',
      why: "只注入一次（不是每次渲染都覆盖），避免和用户当前操作打架",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "只在挂载时注入一次：所以它不会把用户后来的滚动「拽回去」。跨标签页同步不在它职责内（要自己听 storage 事件）。",
};

function StorageView() {
  const [snap, setSnap] = useState<string>(() => localStorage.getItem(KEY) ?? "");
  const refresh = useCallback(() => setSnap(localStorage.getItem(KEY) ?? ""), []);
  const clear = useCallback(() => {
    localStorage.removeItem(KEY);
    setSnap("");
  }, []);
  return (
    <div className="stage-storage">
      <code>{snap || "（还没有存档 —— 先滚一下列表）"}</code>
      <span>
        <button type="button" onClick={refresh}>
          刷新读数
        </button>
        <button type="button" onClick={clear}>
          清除存档
        </button>
      </span>
    </div>
  );
}

export default createFeedStage({
  count: 50,
  seed: 4101,
  instrument: true,
  plugins: () => [
    createStatePersistencePlugin({
      storageKey: KEY,
      persistScroll: true,
      persistKeys: ["pageIndex"],
    }),
  ],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: () => (
    <>
      <p className="stage-tip">滚到中间 → 切到「总览」再切回来，位置会被记住</p>
      <StorageView />
    </>
  ),
});
`,hP=`/**\r
 * 26 · Grouping 插件\r
 *\r
 * 按 tag 分组，结果写进 \`sharedData.get("GROUPS")\` 并广播 \`grouping:change\`。\r
 * 打开 showOverlay 能直接看到分组结果 —— 否则这插件「只有别的插件看得见」。\r
 *\r
 * 1.x 的坑：只在 onPropsChange 里算，首屏永远是空的。这里挂载即算 + 布局完成后重算。\r
 */\r
import { createGroupingPlugin } from "vane-waterfall/custom-plugins";\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
import type { SeedCard } from "../data/seed";\r
\r
export const meta: DemoMeta = {\r
  slug: "grouping",\r
  title: "Grouping 插件",\r
  group: "plugin",\r
  plugin: "GroupingPlugin",\r
  intro: "按标签分组，右下角浮层列出每组项数。",\r
  why: "壁纸墙、书签墙要「按分类看」，或要配合吸顶标题（下一页）—— 分组结果本身不是视觉，是给别的插件用的数据。",\r
  plugs: [\r
    {\r
      fn: "createGroupingPlugin",\r
      cfg: "groupBy: (item) => item.tag, showOverlay: true",\r
      why: "把 GROUPS（Map<组键, 索引数组>）写进 sharedData，供吸顶标题等插件消费",\r
    },\r
  ],\r
  props: ["columns={4}", "containerStyle={{ height: 420 }}"],\r
  note: "分组只算索引，不改变排列顺序 —— 想「同组连在一起」得自己按组重排数据再传进来（或用 SortPlugin）。",\r
  controls: [{ key: "overlay", label: "显示分组浮层", kind: "switch", init: true }],\r
};\r
\r
export default createFeedStage({\r
  count: 32,\r
  seed: 4201,\r
  instrument: true,\r
  plugins: (api) => [\r
    createGroupingPlugin<SeedCard>({ groupBy: (item) => item.tag, showOverlay: Boolean(api.cfg.overlay) }),\r
  ],\r
  coreProps: () => ({ columns: 4, gap: 10 }),\r
  chrome: (api) => {\r
    const counts = new Map<string, number>();\r
    api.items.forEach((i) => counts.set(i.tag, (counts.get(i.tag) ?? 0) + 1));\r
    return (\r
      <p className="stage-tip">\r
        {counts.size} 组：\r
        {[...counts.entries()]\r
          .sort((a, b) => b[1] - a[1])\r
          .map(([k, v]) => \`\${k} \${v}\`)\r
          .join(" · ")}\r
      </p>\r
    );\r
  },\r
});\r
`,yP=`/**\r
 * 27 · StickyHeader 插件\r
 *\r
 * 读 GROUPS 的首组名，渲染一条 \`position: sticky\` 的标题条 —— 它渲染在滚动容器**内部**\r
 * （renderOverlay），所以吸顶是相对瀑布流自己，不是相对页面。\r
 *\r
 * 实验版：只显示首组，不随滚动切换。要「跟随当前可见组」得订阅 grouping:change + visibleRange 自己写。\r
 */\r
import { createGroupingPlugin, createStickyHeaderPlugin } from "vane-waterfall/custom-plugins";\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
import type { SeedCard } from "../data/seed";\r
\r
export const meta: DemoMeta = {\r
  slug: "sticky-header",\r
  title: "StickyHeader 插件",\r
  group: "plugin",\r
  plugin: "StickyHeaderPlugin",\r
  intro: "滚动时顶部浮着当前分组标题。",\r
  why: "分类壁纸墙、按频道分的视频列表：滚着滚着忘了自己在哪个分类里。",\r
  plugs: [\r
    {\r
      fn: "createStickyHeaderPlugin",\r
      cfg: 'title: "当前分组", showHint: true',\r
      why: "在滚动容器内渲染 sticky 标题条，靠 renderOverlay 而不是改版式",\r
    },\r
    {\r
      fn: "createGroupingPlugin",\r
      cfg: "groupBy: (item) => item.tag",\r
      why: "标题条要读 GROUPS 的首组名，没有分组插件它只能显示兜底文案",\r
    },\r
  ],\r
  props: ["columns={4}", "containerStyle={{ height: 420 }}"],\r
  note: "只跟首组。真要做「跟随当前组」，插件需要订阅 grouping:change，并在 onScroll 里用 visibleRange 反查当前组 —— 这一页故意不藏这个限制。",\r
};\r
\r
export default createFeedStage({\r
  count: 40,\r
  seed: 4301,\r
  instrument: true,\r
  plugins: () => [\r
    createStickyHeaderPlugin({ title: "当前分组", showHint: true }),\r
    createGroupingPlugin<SeedCard>({ groupBy: (item) => item.tag }),\r
  ],\r
  coreProps: () => ({ columns: 4, gap: 10 }),\r
  chrome: () => <p className="stage-tip">向下滚：标题条会贴在瀑布流容器顶部</p>,\r
});\r
`,vP=`/**\r
 * 28 · ScrollAnchor 插件\r
 *\r
 * 插件只做一件事：监听 bus 上的 \`anchor:scrollToId\`，按 id 找到索引后 scrollToItem。\r
 * 页面拿不到 bus（ref 只透传 Core），所以这里补一个极小的桥接插件，把 DOM 事件转成 bus 事件\r
 * —— 这页同时演示「自己的插件怎么写」，注意 onMount 返回的函数就是清理函数。\r
 */\r
import { createScrollAnchorPlugin } from "vane-waterfall/custom-plugins";\r
import type { WaterfallPlugin } from "vane-waterfall";\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
import type { SeedCard } from "../data/seed";\r
\r
export const meta: DemoMeta = {\r
  slug: "scroll-anchor",\r
  title: "ScrollAnchor 插件",\r
  group: "plugin",\r
  plugin: "ScrollAnchorPlugin",\r
  intro: "点标签跳到对应那篇 —— 走 bus 事件，不是直接调 ref。",\r
  why: "目录、锚点导航、站内搜索定位：跳转逻辑应该在插件里，页面只负责「发一个 id 出去」。",\r
  plugs: [\r
    {\r
      fn: "createScrollAnchorPlugin",\r
      cfg: "getAnchorId: (item) => item.id",\r
      why: "按 id 反查索引并调 context.scrollToItem，落点由插件算",\r
    },\r
    {\r
      fn: "createAnchorBridgePlugin",\r
      why: "本页内联的自定义插件：window 上的 wf:anchor 事件 → bus.emit('anchor:scrollToId')",\r
      local: true,\r
    },\r
  ],\r
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],\r
  note: "1.x 里这类插件会「自己造一个 bus 挂在 window 上」，其实是同一个问题的不同解法。桥接插件顺带示范了 onMount 返回清理函数 —— 旧版 withPlugins 从不执行它，监听会泄漏。",\r
};\r
\r
/** 自定义插件：DOM 事件 → bus 事件 */\r
function createAnchorBridgePlugin<T = unknown>(): WaterfallPlugin<T> {\r
  return {\r
    name: "AnchorBridgePlugin",\r
    enabled: true,\r
    hooks: {\r
      onMount: (context) => {\r
        const handler = (event: Event) => {\r
          const id = (event as CustomEvent<{ id?: string }>).detail?.id;\r
          if (!id) return;\r
          context.bus.emit("anchor:scrollToId", { id });\r
        };\r
        window.addEventListener("wf:anchor", handler);\r
        return () => window.removeEventListener("wf:anchor", handler);\r
      },\r
    },\r
  };\r
}\r
\r
export default createFeedStage({\r
  count: 30,\r
  seed: 4401,\r
  instrument: true,\r
  plugins: () => [\r
    createScrollAnchorPlugin<SeedCard>({ getAnchorId: (item) => item.id }),\r
    createAnchorBridgePlugin<SeedCard>(),\r
  ],\r
  coreProps: () => ({ columns: 3, gap: 12 }),\r
  chrome: (api) => (\r
    <div className="stage-anchors">\r
      <span>跳到第</span>\r
      {[0, 6, 12, 18, 24].map((i) => (\r
        <button\r
          key={i}\r
          type="button"\r
          onClick={() => {\r
            const item = api.items[i];\r
            if (!item) return;\r
            window.dispatchEvent(new CustomEvent("wf:anchor", { detail: { id: item.id } }));\r
            api.log(\`dispatch wf:anchor { id: "\${item.id}" } → 插件转成 bus → scrollToItem(\${i})\`);\r
          }}\r
        >\r
          #{i} 项\r
        </button>\r
      ))}\r
      <span className="muted">（走 window 事件 → bus → 插件）</span>\r
    </div>\r
  ),\r
});\r
`,xP=`/**\r
 * 29 · DragReorder 插件\r
 *\r
 * HTML5 原生拖拽：松手时把 from/to 交给页面，**数组怎么改由页面决定**，插件不碰数据。\r
 *\r
 * 装配要点：onReorder 要改组件 state，所以 withPlugins 必须在 useMemo 里（不能放模块顶层）——\r
 * 这里的 createFeedStage 内部就是 useMemo，等价写法。\r
 */\r
import { createDragReorderPlugin } from "vane-waterfall/custom-plugins";\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
import type { SeedCard } from "../data/seed";\r
\r
function move<T>(list: T[], from: number, to: number): T[] {\r
  const next = list.slice();\r
  const [picked] = next.splice(from, 1);\r
  next.splice(to, 0, picked);\r
  return next;\r
}\r
\r
export const meta: DemoMeta = {\r
  slug: "drag-reorder",\r
  title: "DragReorder 插件",\r
  group: "plugin",\r
  plugin: "DragReorderPlugin",\r
  intro: "拖一张卡到别的位置，松手后数组真的变了。",\r
  why: "书签墙、看板、排序自定义：用户直接拖比「上移/下移」按钮直观得多。",\r
  plugs: [\r
    {\r
      fn: "createDragReorderPlugin",\r
      cfg: "showHandle: true, onReorder: (from, to) => setItems((prev) => move(prev, from, to))",\r
      why: "鼠标走 HTML5 draggable、触屏走长按 + pointer，把起止索引交回来；数据变更完全由页面掌控",\r
    },\r
  ],\r
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],\r
  note: "showHandle 只是「虚线手柄」，接真实版式时关掉。插件不写 localStorage 也不调接口 —— 落库要自己在 onReorder 里做。鼠标走原生 HTML5 拖拽；触屏上 \`draggable\` 根本不触发，所以另有 pointer 路径（长按 180ms 进入拖拽，可用 touchHoldMs 调）。",\r
};\r
\r
export default createFeedStage({\r
  count: 18,\r
  seed: 4501,\r
  instrument: true,\r
  plugins: (api) => [\r
    createDragReorderPlugin<SeedCard>({\r
      showHandle: true,\r
      onReorder: (from, to, item) => {\r
        api.setItems((prev) => move(prev, from, to));\r
        api.log(\`拖拽 #\${from} → #\${to}（\${item?.title ?? "未知项"}），数组已重排\`);\r
      },\r
    }),\r
  ],\r
  coreProps: () => ({ columns: 3, gap: 12 }),\r
  chrome: () => (\r
    <p className="stage-tip">\r
      鼠标：拖卡片右上角手柄 · 触屏：长按卡片 180ms 后拖动 —— 松手后看位置与顺序变化\r
    </p>\r
  ),\r
});\r
`,wP=`/**
 * 30 · A11y 插件
 *
 * 给容器补 role / aria-label，给项补 role / tabIndex。开「检查 DOM 属性」直接读真实节点，
 * 比文档里写「会加 role=list」有说服力。
 */
import { createA11yPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "a11y",
  title: "A11y 插件",
  group: "plugin",
  plugin: "A11yPlugin",
  intro: "容器 role=list、项 role=listitem，一键读出来验证。",
  why: "瀑布流本质是列表，但 div 堆出来的结构对读屏软件等于不存在。这个插件把语义补齐，成本极低。",
  plugs: [
    {
      fn: "createA11yPlugin",
      cfg: 'containerRole: "list", itemRole: "listitem", containerLabel: "示例卡片列表", enableTabIndex: false',
      why: "在 onMount / onLayoutComplete 里写语义属性（不是渲染期副作用），项用 renderItemWrapper 包一层",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "enableTabIndex 打开后每张卡都能 Tab 到，键盘可达但 Tab 会很累 —— 除非卡片真的可操作，否则保持关闭，用 roving tabindex 更好。",
};

export default createFeedStage({
  count: 16,
  seed: 4601,
  instrument: true,
  plugins: () => [
    createA11yPlugin({
      containerRole: "list",
      itemRole: "listitem",
      containerLabel: "示例卡片列表",
      enableTabIndex: false,
    }),
  ],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: (api) => (
    <div className="stage-a11y">
      <button
        type="button"
        onClick={() => {
          const box = api.ref.current?.getContainer();
          if (!box) {
            api.log("容器还没挂载", "warn");
            return;
          }
          const first = box.querySelector<HTMLElement>("[data-index]");
          api.log(\`容器 role="\${box.getAttribute("role") ?? "无"}" aria-label="\${box.getAttribute("aria-label") ?? "无"}"\`);
          api.log(
            \`首项 role="\${first?.getAttribute("role") ?? "无"}" tabIndex="\${first?.getAttribute("tabindex") ?? "无"}"\`
          );
        }}
      >
        检查 DOM 属性
      </button>
      <span className="muted">结果写到右栏日志</span>
    </div>
  ),
});
`,SP=`/**
 * 31 · ReducedMotion 插件
 *
 * 检测 \`prefers-reduced-motion: reduce\`，命中后关掉 transform 定位与 CSS 过渡。
 * 这页把 TransitionPlugin 一起装上，然后显示两件事：系统的偏好是什么、当前过渡有没有被清掉。
 *
 * 不是「冲突」，是预期行为 —— 但很多人会以为动效坏了。
 *
 * 插件会监听 \`matchMedia\` 的 \`change\`：用户在系统设置里改完偏好，过渡效果立刻生效，
 * 不用刷新页面。定位方式（useTransform）是 props 层的，要等下一次重渲染才切过来。
 */
import React from "react";
import { createReducedMotionPlugin, createTransitionPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

function prefersReduce(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * 偏好读数 + 复检。
 *
 * 单独抽成组件是因为它要 useState：\`chrome\` 是纯渲染函数，没有 hook 可用，
 * 而「系统偏好变了」不会让页面重渲染 —— 只能靠按钮或自己订阅 change 来刷新读数。
 * （项上的过渡是插件自己管的，这里刷新的只是这行文字。）
 */
function ReduceProbe() {
  const [, setTick] = React.useState(0);
  const reduce = prefersReduce();
  return (
    <div className="stage-stats">
      <p className="stage-tip">
        系统偏好 reduce motion：<b>{reduce ? "是 → 过渡已清掉" : "否 → 过渡生效（240ms）"}</b>
      </p>
      <button type="button" onClick={() => setTick((n) => n + 1)}>
        重新检测
      </button>
    </div>
  );
}

export const meta: DemoMeta = {
  slug: "reduced-motion",
  title: "ReducedMotion 插件",
  group: "plugin",
  plugin: "ReducedMotionPlugin",
  intro: "系统开了「减少动态效果」，过渡与 transform 自动关掉。",
  why: "前庭功能障碍用户会被大幅位移的动画伤到。这不是可选项 —— 尊重系统偏好是基本无障碍要求。",
  plugs: [
    {
      fn: "createReducedMotionPlugin",
      cfg: "disableTransform: true, removeTransitions: true",
      why: "读 matchMedia，命中后关掉过渡与 transform 定位",
    },
    {
      fn: "createTransitionPlugin",
      cfg: "duration: 240",
      why: "装在这里是为了被 ReduceMotion 关掉 —— 用来验证它真的生效",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "两个插件同开不是冲突：ReducedMotion 的 priority(65) 更高，会先执行并清掉过渡。验证方法：改系统设置，或在 DevTools 里模拟 prefers-reduced-motion；运行中切换会即时生效（插件监听 matchMedia 的 change），但定位方式要等下一次重渲染才切过来。",
};

export default createFeedStage({
  count: 26,
  seed: 4701,
  instrument: true,
  plugins: () => [
    createReducedMotionPlugin({ disableTransform: true, removeTransitions: true }),
    createTransitionPlugin({ duration: 240 }),
  ],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: () => <ReduceProbe />,
});
`,bP=`/**
 * 32 · Transition 插件
 *
 * 给每项加 transform / opacity 过渡，重排时位置不瞬移。
 * 点「打乱顺序」把数据随机重排 —— 有过渡时卡片是滑过去的，没有时是瞬移。
 *
 * 顺带提醒：自动化量几何（比如场景库的体检）要么等过渡结束再量，要么把它关掉，
 * 否则会量到中间态。
 */
import { createTransitionPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "transition",
  title: "Transition 插件",
  group: "plugin",
  plugin: "TransitionPlugin",
  intro: "打乱顺序，看卡片是滑过去还是瞬移。",
  why: "筛选、排序、拖拽后布局会大幅变化，没有过渡会显得「闪一下」；加上 200–300ms 就顺了。",
  plugs: [
    {
      fn: "createTransitionPlugin",
      cfg: 'duration: {{duration}}, easing: "cubic-bezier(.22,.61,.36,1)"',
      why: "只加 CSS 过渡（transform / opacity），不参与布局计算",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "把 duration 拖到 0 就等于关掉。过渡期间 item 的 transform 是中间值，用 transform 读位置的工具会读到中间态。",
  controls: [
    { key: "duration", label: "duration（ms）", kind: "number", init: 260, min: 0, max: 800, step: 20 },
  ],
};

export default createFeedStage({
  count: 24,
  seed: 4801,
  instrument: true,
  plugins: (api) => [createTransitionPlugin({ duration: Number(api.cfg.duration) })],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: (api) => (
    <div className="stage-anchors">
      <button
        type="button"
        onClick={() => {
          api.setItems((prev) => {
            const next = prev.slice();
            for (let i = next.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [next[i], next[j]] = [next[j], next[i]];
            }
            return next;
          });
          api.log(\`打乱顺序（过渡 \${Number(api.cfg.duration)}ms）\`);
        }}
      >
        打乱顺序
      </button>
      <span className="muted">duraton 拖到 0 再点一次，就是瞬移</span>
    </div>
  ),
});
`,PP=`/**
 * 33 · PinItem 插件
 *
 * 把指定项钉在某一列顶部，普通项落到该列且低于置顶块时自动下推。
 * 1.x 里这个插件是彻底空转的（逻辑全压在 calculateItemPosition 上，而旧 Core 没有执行点），
 * 所以这页也顺带是「旧 bug 已修」的现场证据。
 */
import { createPinItemPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "pin-item",
  title: "PinItem 插件",
  group: "plugin",
  plugin: "PinItemPlugin",
  intro: "第 0、1 项钉在第 1 列顶部，普通项自动让位。",
  why: "「置顶公告 + 信息流」「推荐位固定在第一列」这类需求，用插件比把置顶内容塞进数据里干净。",
  plugs: [
    {
      fn: "createPinItemPlugin",
      cfg: "pinnedIndices: [0, 1], column: {{column}}",
      why: "在 calculateItemPosition 里把置顶项固定到指定列顶部，并下推同列普通项",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "置顶项索引要小（0..n）：如果置顶的索引大于该列已排好的项，只会把后续项往下推、已布局的不回退，视觉上会重叠。同一列多条置顶按数组顺序纵向下堆。",
  controls: [{ key: "column", label: "钉到第几列（0 基）", kind: "number", init: 0, min: 0, max: 2 }],
};

export default createFeedStage({
  count: 22,
  seed: 4901,
  instrument: true,
  plugins: (api) => [
    createPinItemPlugin({ pinnedIndices: [0, 1], column: Number(api.cfg.column) }),
  ],
  coreProps: () => ({ columns: 3, gap: 12 }),
  decorate: (api, _item, index) => ({ pinned: [0, 1].includes(index) && Number(api.cfg.column) >= 0 }),
  chrome: (api) => (
    <p className="stage-tip">
      置顶项：<b>#0 #1</b> · 钉在第 <b>{Number(api.cfg.column) + 1}</b> 列（角标写着「置顶」）
    </p>
  ),
});
`,kP=`/**\r
 * 34 · HeatmapAnalytics 插件\r
 *\r
 * 统计每项曝光次数与点击次数，可选顶部汇总条。这里同时接了 Core 的 onItemEnterViewport，\r
 * 用来对照「插件统计到的曝光」和「Core 报的可见事件」是不是同一批。\r
 *\r
 * 曝光是瀑布流里最容易统计错的东西：一屏几十项、滚动时反复进出视口，\r
 * 直接在每个卡片里写 IntersectionObserver 会重复上报 —— 这就是这个插件存在的理由。\r
 */\r
import { createHeatmapAnalyticsPlugin } from "vane-waterfall/custom-plugins";\r
import { createFeedStage } from "./stages/feed";\r
import { FeedCard } from "../components/FeedCard";\r
import type { SeedCard } from "../data/seed";\r
import type { DemoMeta } from "./types";\r
\r
// 提到模块级：chrome 里的「导出」按钮要读同一份统计\r
const heatPlugin = createHeatmapAnalyticsPlugin<SeedCard>({ showOverlay: true });\r
\r
export const meta: DemoMeta = {\r
  slug: "heatmap-analytics",\r
  title: "HeatmapAnalytics 插件",\r
  group: "plugin",\r
  plugin: "HeatmapAnalyticsPlugin",\r
  intro: "滚一遍，顶部汇总条告诉你曝光了多少次、点了多少下。",\r
  why: "内容分发要看「哪些真的被看到了」，不是「哪些被加载了」。曝光埋点交给插件，业务侧只消费汇总。",\r
  plugs: [\r
    {\r
      fn: "createHeatmapAnalyticsPlugin",\r
      cfg: "showOverlay: true",\r
      why: "在项进入视口时累加曝光、点击时累加点击，并在 onLayoutComplete 补一次首屏统计",\r
    },\r
  ],\r
  props: ["columns={4}", "containerStyle={{ height: 420 }}"],\r
  note: "首屏曝光靠 onLayoutComplete 补一次，否则第一帧显示 0。真实上报要自己做去重与批次（插件只负责计数）——「导出 JSON」拿到的就是 \`getStats()\` 的形状：总曝光、总点击、每项明细。",\r
};\r
\r
export default createFeedStage({\r
  count: 36,\r
  seed: 5001,\r
  instrument: true,\r
  plugins: () => [heatPlugin],\r
  coreProps: (api) => {\r
    let seen = 0;\r
    return {\r
      columns: 4,\r
      gap: 10,\r
      onItemEnterViewport: (i: number) => {\r
        seen += 1;\r
        // 只记前 8 条，避免日志被曝光事件刷满\r
        if (seen <= 8) api.log(\`曝光 #\${i}（Core 的可见事件，插件也在数）\`, "info");\r
      },\r
    };\r
  },\r
  chrome: (api) => (\r
    <div className="stage-stats">\r
      <p className="stage-tip">滚一遍：顶部条是开关，卡片角上是单卡曝光/点击次数</p>\r
      <button\r
        type="button"\r
        onClick={() => {\r
          const stats = heatPlugin.getStats();\r
          api.log(\r
            \`getStats() → 曝光 \${stats.totalViews} / 点击 \${stats.totalClicks} / 有数据项 \${stats.items.length}\`,\r
          );\r
          void navigator.clipboard?.writeText(JSON.stringify(stats, null, 2)).catch(() => {});\r
        }}\r
      >\r
        导出 JSON\r
      </button>\r
    </div>\r
  ),\r
});\r
`,CP=Object.assign({"./01-basic.tsx":Ky,"./02-columns.tsx":Xy,"./03-gap.tsx":ev,"./04-ref.tsx":lv,"./05-lifecycle.tsx":av,"./06-advanced.tsx":dv,"./07-responsive-columns.tsx":pS,"./08-auto-column.tsx":gS,"./09-alignment.tsx":vS,"./10-fixed-height.tsx":SS,"./11-gap-plugin.tsx":kS,"./12-virtual.tsx":TS,"./13-virtual-dynamic.tsx":$S,"./14-throttle.tsx":NS,"./15-debounce-layout.tsx":OS,"./16-recycle.tsx":AS,"./17-infinite-scroll.tsx":FS,"./18-pagination.tsx":GS,"./19-filter.tsx":KS,"./20-sort.tsx":XS,"./21-search.tsx":eb,"./22-click-analytics.tsx":rb,"./23-bookmark.tsx":ib,"./24-url-sync.tsx":ub,"./25-state-persistence.tsx":fb,"./26-grouping.tsx":hb,"./27-sticky-header.tsx":xb,"./28-scroll-anchor.tsx":Pb,"./29-drag-reorder.tsx":Tb,"./30-a11y.tsx":$b,"./31-reduced-motion.tsx":Lb,"./32-transition.tsx":Db,"./33-pin-item.tsx":Wb,"./34-heatmap-analytics.tsx":Ub}),_P=Object.assign({"./01-basic.tsx":Gb,"./02-columns.tsx":Vb,"./03-gap.tsx":Qb,"./04-ref.tsx":Kb,"./05-lifecycle.tsx":Yb,"./06-advanced.tsx":qb,"./07-responsive-columns.tsx":Xb,"./08-auto-column.tsx":Jb,"./09-alignment.tsx":Zb,"./10-fixed-height.tsx":eP,"./11-gap-plugin.tsx":nP,"./12-virtual.tsx":tP,"./13-virtual-dynamic.tsx":rP,"./14-throttle.tsx":oP,"./15-debounce-layout.tsx":lP,"./16-recycle.tsx":iP,"./17-infinite-scroll.tsx":sP,"./18-pagination.tsx":aP,"./19-filter.tsx":uP,"./20-sort.tsx":cP,"./21-search.tsx":dP,"./22-click-analytics.tsx":pP,"./23-bookmark.tsx":fP,"./24-url-sync.tsx":mP,"./25-state-persistence.tsx":gP,"./26-grouping.tsx":hP,"./27-sticky-header.tsx":yP,"./28-scroll-anchor.tsx":vP,"./29-drag-reorder.tsx":xP,"./30-a11y.tsx":wP,"./31-reduced-motion.tsx":SP,"./32-transition.tsx":bP,"./33-pin-item.tsx":PP,"./34-heatmap-analytics.tsx":kP}),TP=e=>e.replace(/^\.\//,""),os=Object.entries(CP).map(([e,n])=>{const t=TP(e);return{meta:n.meta,Stage:n.default,file:t,source:_P[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),RP=["basic","advanced","plugin"],wk=Array.from(new Set(os.map(e=>e.meta.plugin).filter(e=>!!e))).sort(),ls={basic:{label:"基础功能",hint:"Core 自身的 props"},advanced:{label:"高级功能",hint:"ref / 事件 / 杂项配置"},plugin:{label:"插件功能",hint:"一插件一页"}};function Bu(e){const n={};for(const t of e.controls??[])n[t.key]=t.init;return n}const MP="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",$P="true|false|null|undefined|this|super",EP="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",Uu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${MP})\b`,String.raw`\b(${$P})\b`,String.raw`\b(${EP})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),Gu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function IP(e){const n=[];let t=0;Uu.lastIndex=0;let r;for(;r=Uu.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const o=Gu.findIndex((l,i)=>r[i+1]!==void 0);n.push({text:r[0],cls:o>=0?Gu[o]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function Vu(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function NP({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[o,l]=y.useState("idle"),[i,s]=y.useState(!1),a=y.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&a.length>t,p=u&&!i?a.slice(0,t).join(`
`):e,c=y.useMemo(()=>IP(p),[p]),f=y.useCallback(async()=>{var x;let v=!1;if((x=navigator.clipboard)!=null&&x.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=Vu(e)}else v=Vu(e);l(v?"ok":"fail"),window.setTimeout(()=>l("idle"),1600)},[e]);return d.jsxs("div",{className:"code",children:[d.jsxs("div",{className:"code-head",children:[d.jsx("span",{children:n}),d.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[d.jsxs("span",{children:[a.length," 行"]}),d.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:f,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),d.jsx("pre",{style:r?{maxHeight:r}:void 0,children:d.jsx("code",{children:c.map((v,x)=>v.cls?d.jsx("span",{className:v.cls,children:v.text},x):d.jsx(Yt.Fragment,{children:v.text},x))})}),u?d.jsx("button",{type:"button",className:"code-more",onClick:()=>s(v=>!v),children:i?"收起":`展开余下 ${a.length-t} 行`}):null]})}const jP=/\{\{\s*([\w-]+)\s*\}\}/g;function Qu(e,n){return e.replace(jP,(t,r)=>r in n?String(n[r]):t)}function LP(e,n){const t=e.plugs.map(a=>a.fn).sort(),r=t.length>3,o=t.length?r?`import {
${t.map(a=>`  ${a},`).join(`
`)}
} from "vane-waterfall/custom-plugins";`:`import { ${t.join(", ")} } from "vane-waterfall/custom-plugins";`:"// 这一页只用 Core props，不需要任何插件",l=e.plugs.map(a=>`  ${a.fn}(${a.cfg?`{ ${Qu(a.cfg,n)} }`:""}),`).join(`
`),i=e.props.filter(a=>typeof a=="string"||!a.when||a.when(n)).map(a=>`      ${Qu(typeof a=="string"?a:a.text,n)}`).join(`
`),s=e.plugs.length?`const Waterfall = withPlugins(WaterfallCore, [
${l}
]);`:"const Waterfall = WaterfallCore;";return`// ${e.title} · 最小装配（照抄即可跑）
import { WaterfallCore, withPlugins } from "vane-waterfall";
${o}

type Item = { id: string; title: string; height: number };

${s}

export default function Demo({ items }: { items: Item[] }) {
  return (
    <Waterfall
      items={items}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <Card item={item} />}
${i}
    />
  );
}
`}function OP({entry:e,order:n}){var w;const{meta:t,Stage:r,file:o,source:l}=e,[i,s]=y.useState(()=>Bu(t)),[a,u]=y.useState([]),[p,c]=y.useState("minimal"),f=y.useCallback((b,g="event")=>{const m=new Date().toLocaleTimeString("zh-CN",{hour12:!1});u(h=>[{id:h.length+1,at:m,text:b,kind:g},...h].slice(0,60))},[]),v=y.useCallback((b,g)=>{s(m=>({...m,[b]:g}))},[]),x=y.useMemo(()=>LP(t,i),[t,i]);return d.jsxs("section",{className:"demo","data-demo":t.slug,children:[d.jsxs("header",{className:"demo-head",children:[d.jsxs("div",{className:"demo-folio",children:[d.jsx("span",{className:"demo-no",children:String(n).padStart(2,"0")}),d.jsx("em",{children:"plate"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"demo-title-row",children:[d.jsx("h2",{children:t.title}),d.jsx("span",{className:"demo-group",children:ls[t.group].label}),t.plugin?d.jsx("code",{className:"demo-plugin",children:t.plugin}):null]}),d.jsx("p",{className:"demo-intro",children:t.intro}),d.jsxs("p",{className:"demo-why",children:[d.jsx("b",{children:"什么时候用"}),t.why]})]}),d.jsxs("div",{className:"demo-meta",children:[d.jsxs("div",{className:"demo-meta-row",children:[d.jsx("span",{children:"file"}),d.jsx("b",{children:o})]}),d.jsxs("div",{className:"demo-meta-row",children:[d.jsx("span",{children:"group"}),d.jsx("b",{children:ls[t.group].label})]}),d.jsxs("div",{className:"demo-meta-row",children:[d.jsx("span",{children:"plugs"}),d.jsx("b",{children:t.plugs.length?`${t.plugs.length} installed`:"core only"})]})]})]}),(w=t.controls)!=null&&w.length?d.jsxs("div",{className:"demo-controls",children:[d.jsx(By,{controls:t.controls,cfg:i,onChange:v}),d.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{s(Bu(t)),u([])},children:"重置"})]}):null,d.jsxs("div",{className:"demo-body",children:[d.jsxs("figure",{className:"plate",children:[d.jsxs("figcaption",{className:"plate-cap",children:[d.jsx("b",{children:"stage"}),d.jsxs("span",{children:[t.tone==="light"?"light surface":"live render",t.stageHeight?` · ${t.stageHeight}px`:""]}),d.jsx("em",{children:"live"})]}),d.jsx("div",{className:"plate-ruler","aria-hidden":!0}),d.jsx("div",{className:`plate-body demo-stage${t.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${t.stageHeight??380}px`},children:d.jsx(r,{cfg:i,log:f,setCfg:v})})]}),d.jsxs("aside",{className:"demo-side",children:[d.jsx("div",{className:"demo-plugs",children:t.plugs.length===0?d.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):t.plugs.map(b=>d.jsx("span",{className:`demo-plug${b.local?" is-local":""}`,children:b.fn.replace(/^create|Plugin$/g,"")},b.fn))}),d.jsx("ul",{className:"demo-why-list",children:t.plugs.map(b=>d.jsxs("li",{children:[d.jsx("code",{children:b.fn}),d.jsx("span",{children:b.why})]},b.fn))}),t.note?d.jsxs("p",{className:"demo-note",children:["⚠ ",t.note]}):null,d.jsx(Tp,{lines:a,empty:t.plugs.length>0?"还没触发 —— 拖上面的控件，或滚动 / 点卡片":"这一页没有事件类行为，日志留白"})]})]}),d.jsxs("div",{className:"demo-code",children:[d.jsxs("div",{className:"demo-switch",role:"tablist",children:[d.jsx("button",{type:"button",role:"tab","aria-selected":p==="minimal",className:p==="minimal"?"is-active":"",onClick:()=>c("minimal"),children:"最小装配"}),d.jsx("button",{type:"button",role:"tab","aria-selected":p==="full",className:p==="full"?"is-active":"",onClick:()=>c("full"),children:"完整源码"})]}),d.jsx(NP,{code:p==="minimal"?x:l,title:p==="minimal"?`${t.slug}.minimal.tsx`:o,collapseAfter:p==="minimal"?0:26,maxHeight:420},p)]})]})}const zP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type AlignmentMode = "shortest" | "balanced" | "sequential";

export type AlignmentConfig = {
  /** 列分配策略 */
  mode: AlignmentMode;
};

/**
 * AlignmentPlugin - 控制瀑布流列分配策略
 * 通过设置 props.alignmentMode 来影响核心布局算法的列选择逻辑
 */
export function createAlignmentPlugin<T = any>(config: AlignmentConfig): WaterfallPlugin<T> {
  return {
    name: "AlignmentPlugin",
    priority: 60,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        return { ...props, alignmentMode: config.mode } as any;
      },
      onResize: (context) => {
        context.relayout?.();
      },
    },
  };
}
`,DP=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type AutoColumnConfig = {
  /** 每列最小宽度（含内容区，不含列间距） */
  minColumnWidth: number;
  /** 最大列数（可选） */
  maxColumns?: number;
  /** 最小列数（可选，默认 1） */
  minColumns?: number;
};

/**
 * AutoColumnPlugin - 按「容器可用宽度 ÷ 最小列宽」自动决定列数。
 *
 * 走 D1-A 布局钩子 \`calculateColumns\`：容器宽度与 padding / columnGap 都由 Core
 * 现算好传进来，不用再拿 window.innerWidth 近似（旧版那样在窄容器里会多排一列）。
 * 公式：columns = floor((available + columnGap) / (minColumnWidth + columnGap))
 */
export function createAutoColumnPlugin<T = any>(
  config: AutoColumnConfig
): WaterfallPlugin<T> {
  if (!(config.minColumnWidth > 0)) {
    throw new Error("[vane-waterfall] AutoColumnPlugin 需要正数的 minColumnWidth");
  }

  return {
    name: "AutoColumnPlugin",
    priority: 55,
    enabled: true,
    hooks: {
      calculateColumns: (context: WaterfallPluginContext<T>, containerWidth: number) => {
        const props = context.props;
        const columnGap = props.columnGap ?? props.gap ?? 0;
        const padding = props.padding;
        const horizontalPadding =
          typeof padding === "number"
            ? padding * 2
            : (padding?.left ?? 0) + (padding?.right ?? 0);

        const available = Math.max(0, containerWidth - horizontalPadding);
        if (!available) return props.columns ?? 1;

        const base = Math.max(
          1,
          Math.floor((available + columnGap) / (config.minColumnWidth + columnGap))
        );
        const minCols = Math.max(1, config.minColumns ?? 1);
        const maxCols = config.maxColumns ?? Number.POSITIVE_INFINITY;
        return Math.min(Math.max(base, minCols), maxCols);
      },
    },
  };
}
`,AP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type DebounceConfig = {
  /** 布局防抖延迟（ms） */
  delay: number;
};

/**
 * DebounceLayoutPlugin - 调整核心布局的防抖延迟
 */
export function createDebounceLayoutPlugin<T = any>(config: DebounceConfig): WaterfallPlugin<T> {
  return {
    name: "DebounceLayoutPlugin",
    priority: 75,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        return { ...props, debounceDelay: config.delay } as any;
      },
    },
  };
}
`,HP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type FilterConfig<T = any> = {
  /** 初始筛选函数，可被 props.filterFn 覆盖 */
  predicate?: (item: T, index: number) => boolean;
  /** 条件变化后自动滚动到顶部 */
  scrollToTop?: boolean;
  /** 滚动行为（auto/smooth），仅在启用 scrollToTop 时生效 */
  scrollBehavior?: "auto" | "smooth";
};

/**
 * FilterPlugin - 基于筛选函数过滤 items
 * 优先使用 props.filterFn，其次使用创建插件时传入的 predicate
 */
export function createFilterPlugin<T = any>(config: FilterConfig<T> = {}): WaterfallPlugin<T> {
  return {
    name: "FilterPlugin",
    priority: 40,
    enabled: true,
    hooks: {
      transformProps: (props: any) => {
        const items: T[] = Array.isArray(props.items) ? props.items : [];
        const fn: ((item: T, index: number) => boolean) | undefined = props.filterFn || config.predicate;
        if (typeof fn !== "function") return props;
        const filtered = items.filter((it: T, idx: number) => {
          try {
            return !!fn(it, idx);
          } catch {
            return true;
          }
        });
        return { ...props, items: filtered } as any;
      },
      onPropsChange: (context, prevProps: any, nextProps: any) => {
        const prevFn = prevProps?.filterFn;
        const nextFn = nextProps?.filterFn;
        const enabledFromProps = typeof nextProps?.scrollToTopOnFilterChange === "boolean"
          ? nextProps.scrollToTopOnFilterChange
          : undefined;
        const shouldScroll = (enabledFromProps ?? Boolean(config.scrollToTop)) && prevFn !== nextFn;
        if (shouldScroll) {
          const behavior: "auto" | "smooth" = (nextProps?.scrollToTopBehavior as any) ?? config.scrollBehavior ?? "auto";
          context.scrollToTop?.({ behavior });
        }
      },
    },
  };
}
`,WP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type FixedHeightConfig = {
  /** 固定项高度（像素） */
  itemHeight: number;
};

/**
 * FixedHeightPlugin - 将所有项的高度统一为固定值（Grid风格）
 * 通过 transformProps 生成新的 items，使得 renderItem 使用统一高度
 */
export function createFixedHeightPlugin<T = any>(config: FixedHeightConfig): WaterfallPlugin<T> {
  return {
    name: "FixedHeightPlugin",
    priority: 45,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        const { itemHeight } = config;
        const newItems = (props.items || []).map((item: any) => {
          // 仅在存在 height 字段时覆盖；否则保持原样
          if (typeof item === "object" && item !== null && "height" in item) {
            return { ...item, height: itemHeight };
          }
          return item;
        });
        return { ...props, items: newItems };
      },
      onResize: (context) => {
        context.relayout?.();
      },
    },
  };
}
`,FP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type GapConfig = {
  /** 列间距（像素） */
  columnGap?: number;
  /** 行间距（像素） */
  rowGap?: number;
  /** 响应式：根据窗口宽度覆盖间距 */
  responsive?: {
    sm?: { columnGap?: number; rowGap?: number };
    md?: { columnGap?: number; rowGap?: number };
    lg?: { columnGap?: number; rowGap?: number };
    xl?: { columnGap?: number; rowGap?: number };
  };
};

function pickResponsive(config: GapConfig): { columnGap?: number; rowGap?: number } {
  const w = typeof window !== "undefined" ? window.innerWidth : 1024;
  const r = config.responsive || {};
  if (w >= 1200 && r.xl) return r.xl;
  if (w >= 992 && r.lg) return r.lg;
  if (w >= 768 && r.md) return r.md;
  // sm 是「小屏档」，不是「兜底档」：早先这里无条件返回 sm，导致只配了 sm 时
  // 桌面端也被窄屏间距覆盖 —— 显式传进来的 columnGap / rowGap 永远不生效，
  // 调参时看着像插件没接上。
  if (w < 768 && r.sm) return r.sm;
  return {};
}

/**
 * GapPlugin - 控制瀑布流的列间距和行间距，支持响应式
 */
export function createGapPlugin<T = any>(config: GapConfig): WaterfallPlugin<T> {
  return {
    name: "GapPlugin",
    priority: 50,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        const base = { columnGap: config.columnGap, rowGap: config.rowGap };
        const override = pickResponsive(config);
        const next = {
          columnGap: override.columnGap ?? base.columnGap ?? props.columnGap,
          rowGap: override.rowGap ?? base.rowGap ?? props.rowGap,
        };
        return { ...props, ...next };
      },
      onResize: (context) => {
        context.relayout?.();
      },
    },
  };
}
`,BP=`import type {
  WaterfallCoreProps,
} from "../../components/WaterfallPlugin/WaterfallCore";
import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type InfiniteScrollConfig = {
  /** 距底部多少像素开始预加载，默认 300（≈ 半屏，滚到底时数据已就位） */
  threshold?: number;
  /** 加载回调；不给则读 \`props.onLoadMore\` */
  onLoadMore?: () => Promise<void> | void;
};

/**
 * InfiniteScrollPlugin - 滚动到距底阈值内触发加载更多。
 *
 * 与旧版的三处差别：
 *  1. 触发条件由 Core 的 \`reachBottomOffset\` 控制（旧版写死 100px，插件配 300 也不会提前触发）；
 *  2. 自带并发锁：上一次 onLoadMore 没 resolve 前不会重复触发（旧版每次滚动事件都会调）；
 *  3. \`context.hasMore === false\` 时直接停（配合页面 setState({ hasMore: false })）。
 */
export function createInfiniteScrollPlugin<T = any>(
  config: InfiniteScrollConfig = {}
): WaterfallPlugin<T> {
  const threshold = Math.max(1, config.threshold ?? 300);
  let loading = false;

  return {
    name: "InfiniteScrollPlugin",
    priority: 35,
    enabled: true,
    hooks: {
      transformProps: (props: WaterfallCoreProps<T>) => ({
        ...props,
        reachBottomOffset: threshold,
      }),

      onReachBottom: async (context: WaterfallPluginContext<T>, distance: number) => {
        if (loading) return;
        if (context.hasMore === false) return;
        if (distance > threshold) return;

        const onLoadMore = config.onLoadMore ?? context.props.onLoadMore;
        if (typeof onLoadMore !== "function") return;

        loading = true;
        try {
          await Promise.resolve(onLoadMore());
        } finally {
          loading = false;
        }
      },

      onUnmount: () => {
        loading = false;
      },
    },
  };
}
`,UP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type PaginationConfig = {
  /** 每页数量 */
  pageSize?: number;
  /** 翻页后自动滚动到顶部 */
  scrollToTop?: boolean;
  /** 滚动行为（auto/smooth），仅在启用 scrollToTop 时生效 */
  scrollBehavior?: "auto" | "smooth";
};

/**
 * PaginationPlugin - 基于 props 中的 pageIndex/pageSize 对 items 进行分页切片
 * 支持通过 config.pageSize 设定默认每页数量
 */
export function createPaginationPlugin<T = any>(config: PaginationConfig = {}): WaterfallPlugin<T> {
  return {
    name: "PaginationPlugin",
    priority: 10,
    enabled: true,
    hooks: {
      transformProps: (props: any) => {
        // 统一采用 1 基页码：展示页码从 1 开始
        const pageIndex1: number = Math.max(1, Number(props.pageIndex ?? 1));
        const pageSize: number = Math.max(1, Number(props.pageSize ?? config.pageSize ?? 20));
        const items: T[] = Array.isArray(props.items) ? props.items : [];
        const start = (pageIndex1 - 1) * pageSize;
        const end = start + pageSize;
        const sliced = items.slice(start, end);
        return { ...props, items: sliced } as any;
      },
      onPropsChange: (context, prevProps: any, nextProps: any) => {
        // 仅在页码变化时触发“滚动到顶部”逻辑
        const prevIndex = Math.max(1, Number(prevProps?.pageIndex ?? 1));
        const nextIndex = Math.max(1, Number(nextProps?.pageIndex ?? 1));
        const enabledFromProps = typeof nextProps?.scrollToTopOnPageChange === "boolean"
          ? nextProps.scrollToTopOnPageChange
          : undefined;
        const shouldScroll = (enabledFromProps ?? Boolean(config.scrollToTop)) && prevIndex !== nextIndex;
        if (shouldScroll) {
          const behavior: "auto" | "smooth" = (nextProps?.scrollToTopBehavior as any) ?? config.scrollBehavior ?? "auto";
          context.scrollToTop?.({ behavior });
        }
      },
    },
  };
}
`,GP=`import type {
  ItemPosition,
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type PinItemConfig = {
  /** 要钉在顶部的项索引（建议用 0 起的小索引） */
  pinnedIndices: number[];
  /** 钉到第几列，默认 0（最左列） */
  column?: number;
};

/**
 * PinItemPlugin - 把指定项钉在顶部指定列，其余项从置顶块下方继续排。
 *
 * 旧版这里是个空转插件：全部逻辑压在 \`calculateItemPosition\` 上，而 Core 里
 * **没有任何地方执行这个钩子**（tasks/07 · 4.5 的死钩子清单），\`renderOverlay\`
 * 又返回 null —— 上线至今什么都没做。D1-A 把钩子接上后这里才是真的实现。
 *
 * 语义与限制（写在这里，避免变成"看起来能用"的坑）：
 *  - 置顶项在**同列普通项之前**被布局时最干净（通常 pinnedIndices 是 0..n）。
 *    若置顶项的索引大于该列已排好的项，它会按 floor 规则把后续项往下推，
 *    但已布局的项不会回退，视觉上会重叠。
 *  - 置顶项不参与列轮转，永远落在 \`config.column\`。
 *  - 同一列多条置顶按 pinnedIndices 顺序纵向堆叠。
 */
export function createPinItemPlugin<T = any>(config: PinItemConfig): WaterfallPlugin<T> {
  const pinned = new Set(config.pinnedIndices);
  const targetColumn = Math.max(0, config.column ?? 0);
  /** column → 置顶块底部（含 rowGap）；每次布局前清空 */
  const floorByColumn = new Map<number, number>();

  return {
    name: "PinItemPlugin",
    priority: 100,
    enabled: true,
    hooks: {
      onBeforeLayout: () => {
        floorByColumn.clear();
        return true;
      },

      calculateItemPosition: (
        context: WaterfallPluginContext<T>,
        index: number,
        itemHeight: number,
        base: ItemPosition
      ): Partial<ItemPosition> | void => {
        const rowGap = context.props.rowGap ?? context.props.gap ?? 0;

        if (!pinned.has(index)) {
          // 普通项：落在被置顶的那一列、且高于置顶块底部 → 推下去
          const floor = floorByColumn.get(base.column);
          if (floor !== undefined && base.y < floor) {
            return { y: floor };
          }
          return undefined;
        }

        const y = floorByColumn.get(targetColumn) ?? 0;
        floorByColumn.set(targetColumn, y + itemHeight + rowGap);

        // 只改 column、不自己算 x：换列后的 x 由 \`computeLayout\` 按**本轮**列宽补齐。
        // 早先这里用 \`base.width + columnGap\` 反推，而 columnGap 若由 GapPlugin 经
        // transformProps 注入，插件读到的是 undefined → x 整整少一个 columnGap。
        return {
          column: targetColumn,
          y,
          width: base.width,
          height: itemHeight,
          row: 0,
        };
      },
    },
  };
}
`,VP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type RecycleConfig = {
  /** 视口外隐藏项以降低渲染压力（最大可见项数，近似控制） */
  poolSize: number;
};

/**
 * RecyclePlugin - 简化版 DOM 回收：
 * - 当项离开视口时，设置其元素为 \`visibility:hidden\`，减少绘制压力
 * - 当项进入视口时，恢复为 \`visibility:visible\`
 */
export function createRecyclePlugin<T = any>(config: RecycleConfig): WaterfallPlugin<T> {
  const visibleSet = new Set<number>();

  const ensurePoolLimit = () => {
    if (visibleSet.size <= config.poolSize) return;
    // 朴素策略：移除最早加入的项
    const first = visibleSet.values().next().value as number | undefined;
    if (typeof first === "number") {
      visibleSet.delete(first);
    }
  };

  return {
    name: "RecyclePlugin",
    enabled: true,
    hooks: {
      onItemEnterViewport: (context, index) => {
        const el = context.getItemRef(index);
        if (el) el.style.visibility = "visible";
        visibleSet.add(index);
        ensurePoolLimit();
      },
      onItemLeaveViewport: (context, index) => {
        const el = context.getItemRef(index);
        if (el) el.style.visibility = "hidden";
        visibleSet.delete(index);
      },
      onItemUnmount: (_ctx, index) => {
        visibleSet.delete(index);
      },
      onUnmount: () => {
        visibleSet.clear();
      },
    },
  };
}
`,QP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";\r
\r
export type ReducedMotionConfig = {\r
  /** 当用户偏好减少动画时，是否禁用 transform 定位 */\r
  disableTransform?: boolean;\r
  /** 当用户偏好减少动画时，是否移除项过渡效果 */\r
  removeTransitions?: boolean;\r
};\r
\r
const QUERY = "(prefers-reduced-motion: reduce)";\r
\r
/**\r
 * ReducedMotionPlugin - 尊重系统的减少动画偏好\r
 *\r
 * 两条「为什么」值得记下来：\r
 *\r
 * 1. **只改 \`itemStyle\` 不够**：TransitionPlugin 这类插件会在 \`onItemMount\` / \`onLayout\`\r
 *    里直接写元素的 \`style.transition\`，内联样式晚于 \`itemStyle\` 生效。\`onLayoutComplete\`\r
 *    在全部 \`onLayout\` 之后执行，必须在这里再清一次才真的「没有过渡」。\r
 *\r
 * 2. **偏好要能运行时切换**：以前在工厂创建时把 \`mq.matches\` 求值存成常量，用户中途改\r
 *    系统设置必须刷新页面。现在监听 \`change\`，并且自己维护一份已挂载元素表 ——\r
 *    偏好变了并不会触发布局，插件没有别的入口能遍历到那些元素。\r
 *\r
 * 定位方式（\`useTransform\`）是 props 层的，运行时切换要等下一次重渲染才生效；\r
 * 过渡效果则是即时生效的。\r
 */\r
export function createReducedMotionPlugin<T = any>(\r
  config: ReducedMotionConfig = {}\r
): WaterfallPlugin<T> {\r
  const mq =\r
    typeof window !== "undefined" && typeof window.matchMedia === "function"\r
      ? window.matchMedia(QUERY)\r
      : null;\r
\r
  let prefersReduce = mq?.matches ?? false;\r
  const disableTransform = config.disableTransform ?? true;\r
  const removeTransitions = config.removeTransitions ?? true;\r
\r
  /** 已挂载的元素：系统偏好变化时没有布局发生，只能靠自己记着它们 */\r
  const mounted = new Map<number, HTMLElement>();\r
  /**\r
   * 被我们压过时长的元素 → 它原本的 \`transition-duration\`。\r
   *\r
   * 为什么要记原值：Chrome 会把 \`transition: transform 240ms ease\` 拆成\r
   * \`transition-property/timing-function/delay/duration\` 四条长属性存在 style 上，\r
   * 只 \`removeProperty("transition-duration")\` 会留下 \`transform, opacity\` 的其余部分，\r
   * 时长变回默认 0s —— 看着像「恢复失败」。\r
   */\r
  const savedDuration = new Map<HTMLElement, string>();\r
\r
  /**\r
   * 只压 \`transition-duration\`，不写 \`transition: none\`。\r
   *\r
   * 写简写会把 TransitionPlugin 的 \`transform 240ms ease, opacity 240ms ease\` 整条覆盖掉，\r
   * 等偏好撤销时就无从还原（删掉简写等于没有过渡）。压时长只覆盖「时长」这一项，\r
   * 撤销时把原值写回去即可。\r
   */\r
  const syncOne = (el: HTMLElement | null | undefined) => {\r
    if (!el || !removeTransitions) return;\r
    if (prefersReduce) {\r
      const current = el.style.transitionDuration;\r
      // 记「被压之前」的那个值：可能是空（没有过渡），也可能是 240ms\r
      if (current && current !== "0s") savedDuration.set(el, current);\r
      else if (!savedDuration.has(el)) savedDuration.set(el, current);\r
      el.style.setProperty("transition-duration", "0s");\r
    } else {\r
      const prev = savedDuration.get(el);\r
      if (prev === undefined) return;\r
      if (prev) el.style.setProperty("transition-duration", prev);\r
      else el.style.removeProperty("transition-duration");\r
      savedDuration.delete(el);\r
    }\r
  };\r
  const syncAll = () => mounted.forEach((el) => syncOne(el));\r
\r
  const onChange = (event: MediaQueryListEvent) => {\r
    if (event.matches === prefersReduce) return;\r
    prefersReduce = event.matches;\r
    syncAll();\r
  };\r
  mq?.addEventListener?.("change", onChange);\r
\r
  return {\r
    name: "ReducedMotionPlugin",\r
    priority: 70,\r
    enabled: true,\r
    hooks: {\r
      transformProps: (props) => {\r
        if (!prefersReduce) return props as any;\r
\r
        const next: any = { ...props };\r
        if (disableTransform) {\r
          next.useTransform = false;\r
        }\r
        if (removeTransitions) {\r
          // 同样只压时长：写 transition:none 会在偏好撤销后把别人的过渡一起弄丢\r
          next.itemStyle = { ...(props.itemStyle ?? {}), transitionDuration: "0s" };\r
        }\r
        return next;\r
      },\r
      onItemMount: (_context, index, element) => {\r
        mounted.set(index, element);\r
        syncOne(element);\r
      },\r
      onItemUnmount: (_context, index) => {\r
        mounted.delete(index);\r
      },\r
      onLayoutComplete: (context) => {\r
        // 在全部 onLayout 之后执行：把 TransitionPlugin 刚写上的内联过渡再清一次\r
        context.itemRefs.forEach((el, index) => {\r
          if (el) mounted.set(index, el);\r
          syncOne(el);\r
        });\r
      },\r
      onUnmount: () => {\r
        mq?.removeEventListener?.("change", onChange);\r
        mounted.clear();\r
        savedDuration.clear();\r
      },\r
    },\r
  };\r
}\r
`,KP=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

type Breakpoint = { width: number; columns: number };
type Breakpoints = Record<string, Breakpoint>;

type ResponsiveColumnsConfig = {
  /** 断点表：键名随意，按 width 升序匹配，命中哪档用哪档 */
  breakpoints: Breakpoints;
  /** 未命中任何断点时回退到几列（默认取 props.columns ?? 3） */
  fallbackColumns?: number;
};

/**
 * ResponsiveColumnsPlugin - 按断点表决定列数。
 *
 * 走 D1-A 布局钩子 \`calculateColumns\`：拿到的是**容器**宽度（不是 window.innerWidth），
 * 所以同一个组件嵌在侧边栏或全宽区域里都能算对。旧版走 transformProps + window 宽度，
 * 在「窄容器 + 宽视口」的组合下会给出偏大的列数。
 */
export function createResponsiveColumnsPlugin<T = any>(
  config: ResponsiveColumnsConfig
): WaterfallPlugin<T> {
  const list = Object.values(config.breakpoints).sort((a, b) => a.width - b.width);

  return {
    name: "ResponsiveColumnsPlugin",
    priority: 55,
    enabled: true,
    hooks: {
      calculateColumns: (context: WaterfallPluginContext<T>, containerWidth: number) => {
        const fallback = config.fallbackColumns ?? context.props.columns ?? 3;
        if (!containerWidth) return fallback;
        let columns = fallback;
        for (const bp of list) {
          if (containerWidth >= bp.width) columns = bp.columns;
        }
        return columns;
      },
    },
  };
}
`,YP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type SearchConfig<T = any> = {
  /** 要搜索的字段名列表（仅用于对象项） */
  fields?: (keyof T)[];
  /** 条件变化后自动滚动到顶部 */
  scrollToTop?: boolean;
  /** 滚动行为（auto/smooth），仅在启用 scrollToTop 时生效 */
  scrollBehavior?: "auto" | "smooth";
};

/**
 * SearchPlugin - 基于 props.searchQuery 对 items 执行包含匹配过滤
 * 仅在对象项中按指定字段进行大小写不敏感的包含匹配
 */
export function createSearchPlugin<T = any>(config: SearchConfig<T> = {}): WaterfallPlugin<T> {
  const fields = config.fields ?? [];
  return {
    name: "SearchPlugin",
    priority: 20,
    enabled: true,
    hooks: {
      transformProps: (props: any) => {
        const query: string = String(props.searchQuery ?? "").trim();
        const items: T[] = Array.isArray(props.items) ? props.items : [];
        if (!query) return props;
        const q = query.toLowerCase();
        const filtered = items.filter((item) => {
          if (typeof item !== "object" || item === null) return false;
          const keys = fields.length > 0 ? fields : (Object.keys(item) as (keyof T)[]);
          for (const k of keys) {
            const v = (item as any)[k];
            if (v != null && String(v).toLowerCase().includes(q)) return true;
          }
          return false;
        });
        return { ...props, items: filtered } as any;
      },
      onPropsChange: (context, prevProps: any, nextProps: any) => {
        const prevQuery = String(prevProps?.searchQuery ?? "");
        const nextQuery = String(nextProps?.searchQuery ?? "");
        const enabledFromProps = typeof nextProps?.scrollToTopOnSearchChange === "boolean"
          ? nextProps.scrollToTopOnSearchChange
          : undefined;
        const shouldScroll = (enabledFromProps ?? Boolean(config.scrollToTop)) && prevQuery !== nextQuery;
        if (shouldScroll) {
          const behavior: "auto" | "smooth" = (nextProps?.scrollToTopBehavior as any) ?? config.scrollBehavior ?? "auto";
          context.scrollToTop?.({ behavior });
        }
      },
    },
  };
}
`,qP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type SortConfig<T = any> = {
  /** 初始比较函数，可被 props.sortComparator 覆盖 */
  comparator?: (a: T, b: T) => number;
  /** 条件变化后自动滚动到顶部 */
  scrollToTop?: boolean;
  /** 滚动行为（auto/smooth），仅在启用 scrollToTop 时生效 */
  scrollBehavior?: "auto" | "smooth";
};

/**
 * SortPlugin - 基于比较函数对 items 排序
 * 优先使用 props.sortComparator，其次使用创建插件时传入的 comparator
 */
export function createSortPlugin<T = any>(config: SortConfig<T> = {}): WaterfallPlugin<T> {
  return {
    name: "SortPlugin",
    priority: 30,
    enabled: true,
    hooks: {
      transformProps: (props: any) => {
        const items: T[] = Array.isArray(props.items) ? props.items : [];
        const cmp: ((a: T, b: T) => number) | undefined = props.sortComparator || config.comparator;
        if (typeof cmp !== "function") return props;
        const sorted = [...items].sort((a, b) => {
          try {
            return cmp(a, b);
          } catch {
            return 0;
          }
        });
        return { ...props, items: sorted } as any;
      },
      onPropsChange: (context, prevProps: any, nextProps: any) => {
        const prevCmp = prevProps?.sortComparator;
        const nextCmp = nextProps?.sortComparator;
        const enabledFromProps = typeof nextProps?.scrollToTopOnSortChange === "boolean"
          ? nextProps.scrollToTopOnSortChange
          : undefined;
        const shouldScroll = (enabledFromProps ?? Boolean(config.scrollToTop)) && prevCmp !== nextCmp;
        if (shouldScroll) {
          const behavior: "auto" | "smooth" = (nextProps?.scrollToTopBehavior as any) ?? config.scrollBehavior ?? "auto";
          context.scrollToTop?.({ behavior });
        }
      },
    },
  };
}
`,XP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";\r
\r
export type StatePersistenceConfig = {\r
  /** 存储键（localStorage） */\r
  storageKey?: string;\r
  /** 是否持久化滚动位置 */\r
  persistScroll?: boolean;\r
  /** 是否持久化分页与查询（从 props 读取） */\r
  persistKeys?: string[]; // e.g. ["pageIndex", "pageSize", "searchQuery"]\r
};\r
\r
/**\r
 * StatePersistencePlugin - 状态快照与恢复（基础版）\r
 * - 挂载时尝试恢复快照；卸载时写入快照\r
 * - 快照包含：scrollTop（可选）与部分 props 键\r
 */\r
export function createStatePersistencePlugin<T = any>(config: StatePersistenceConfig = {}): WaterfallPlugin<T> {\r
  const key = config.storageKey || "waterfall-state";\r
  const persistScroll = config.persistScroll ?? true;\r
  const persistKeys = config.persistKeys || ["pageIndex", "pageSize", "searchQuery"];\r
  // 一次性注入标记：避免 transformProps 重复覆盖\r
  let initialInjected = false;\r
\r
  function read(): Record<string, any> | null {\r
    try {\r
      const raw = localStorage.getItem(key);\r
      return raw ? JSON.parse(raw) : null;\r
    } catch {\r
      return null;\r
    }\r
  }\r
\r
  function write(data: Record<string, any>) {\r
    try {\r
      localStorage.setItem(key, JSON.stringify(data));\r
    } catch {}\r
  }\r
\r
  return {\r
    name: "StatePersistencePlugin",\r
    enabled: true,\r
    hooks: {\r
      // 首次渲染时，尽量将本地快照中的分页/查询键注入到 props，便于核心按恢复后的状态渲染\r
      transformProps: (props) => {\r
        if (initialInjected) return props;\r
        const snap = read();\r
        if (!snap) return props;\r
        const next: Record<string, any> = { ...props };\r
        let changed = false;\r
        persistKeys.forEach((k) => {\r
          if (snap[k] !== undefined) {\r
            next[k] = snap[k];\r
            changed = true;\r
          }\r
        });\r
        if (changed) initialInjected = true;\r
        return next as typeof props;\r
      },\r
      onMount: (context) => {\r
        const snap = read();\r
        if (!snap) return;\r
        // 恢复滚动\r
        if (persistScroll) {\r
          const top = Number(snap.scrollTop ?? 0);\r
          const el = context.containerRef.current;\r
          if (el) {\r
            el.scrollTo({ top, behavior: "auto" });\r
          } else {\r
            context.scrollToTop?.({ behavior: "auto" });\r
          }\r
        }\r
        // 广播持久化的键，便于页面采用\r
        const restored: Record<string, any> = {};\r
        persistKeys.forEach((k) => {\r
          if (snap[k] !== undefined) restored[k] = snap[k];\r
        });\r
        if (Object.keys(restored).length > 0) {\r
          context.bus?.emit("state:restored", restored);\r
          // 同步广播到全局，方便页面级状态订阅恢复事件（不需页面直接读取 localStorage）\r
          if (typeof window !== "undefined") {\r
            try {\r
              window.dispatchEvent(new CustomEvent("waterfall:state-restored", { detail: restored }));\r
            } catch {}\r
          }\r
        }\r
      },\r
      // props 变化时，增量更新快照（立即持久化分页/查询键）\r
      onPropsChange: (_context, _prev, nextProps) => {\r
        const snap = read() || {};\r
        const data: Record<string, any> = { ...snap };\r
        // 按字符串键取值：persistKeys 是运行时数组，无法在类型层收窄到 keyof props\r
        const source = (nextProps ?? {}) as unknown as Record<string, unknown>;\r
        persistKeys.forEach((k) => {\r
          const v = source[k];\r
          if (v !== undefined) data[k] = v;\r
        });\r
        // 保留已有的 scrollTop，不在此处覆盖\r
        write(data);\r
      },\r
      onUnmount: (context) => {\r
        const data: Record<string, any> = {};\r
        if (persistScroll) {\r
          data.scrollTop = context.containerRef.current?.scrollTop || 0;\r
        }\r
        const source = (context.props ?? {}) as unknown as Record<string, unknown>;\r
        persistKeys.forEach((k) => {\r
          const v = source[k];\r
          if (v !== undefined) data[k] = v;\r
        });\r
        write(data);\r
      },\r
    },\r
  };\r
}\r
`,JP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type ThrottleConfig = {
  /** 滚动节流（ms） */
  scroll: number;
  /** 尺寸变化防抖（ms），用于容器 Resize 相关 */
  resize?: number;
};

/**
 * ThrottlePlugin - 通过 transformProps 调整核心的滚动节流与尺寸变化防抖
 */
export function createThrottlePlugin<T = any>(config: ThrottleConfig): WaterfallPlugin<T> {
  return {
    name: "ThrottlePlugin",
    priority: 80,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        return {
          ...props,
          throttleDelay: config.scroll,
          debounceDelay: config.resize ?? props.debounceDelay,
        } as any;
      },
    },
  };
}
`,ZP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type TransitionConfig = {
  /** 过渡时长（ms） */
  duration?: number;
  /** 过渡缓动 */
  easing?: string;
};

/**
 * TransitionPlugin - 布局变化过渡
 * - 为项元素应用 transform/opacity 的过渡，提升布局更新的视觉平滑度
 */
export function createTransitionPlugin<T = any>(
  config: TransitionConfig = {}
): WaterfallPlugin<T> {
  const duration = config.duration ?? 300;
  const easing = config.easing ?? "ease";

  return {
    name: "TransitionPlugin",
    priority: 65,
    enabled: true,
    hooks: {
      onItemMount: (context, _index, element) => {
        element.style.transition = \`transform \${duration}ms \${easing}, opacity \${duration}ms \${easing}\`;
      },
      onLayout: (context) => {
        // 为现有项补充过渡样式
        context.itemRefs.forEach((el) => {
          if (el) {
            el.style.transition = \`transform \${duration}ms \${easing}, opacity \${duration}ms \${easing}\`;
          }
        });
      },
    },
  };
}
`,ek=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";\r
\r
export type URLSyncConfig = {\r
  /** URL 同步使用 hash 还是 search（默认 hash） */\r
  mode?: "hash" | "search";\r
  /** 需要同步的键列表（从 props 读取） */\r
  keys?: string[]; // e.g. ["pageIndex", "pageSize", "searchQuery", "sortKey", "filterValue"]\r
};\r
\r
/**\r
 * URLSyncPlugin - 将部分状态同步到 URL（基础版）\r
 * - 监听 props 变化，更新 URL\r
 * - 初次挂载时读取 URL 并向 bus 广播（页面可据此设置状态）\r
 */\r
export function createURLSyncPlugin<T = any>(config: URLSyncConfig = {}): WaterfallPlugin<T> {\r
  const mode = config.mode || "hash";\r
  const keys = config.keys || ["pageIndex", "pageSize", "searchQuery"];\r
\r
  function readFromURL() {\r
    try {\r
      if (mode === "hash") {\r
        const hash = window.location.hash || "";\r
        const idx = hash.indexOf("?");\r
        const paramStr = idx >= 0 ? hash.slice(idx + 1) : hash.replace(/^#/, "");\r
        const params = new URLSearchParams(paramStr);\r
        const state: Record<string, any> = {};\r
        keys.forEach((k) => {\r
          const v = params.get(k);\r
          if (v !== null) state[k] = v;\r
        });\r
        return state;\r
      } else {\r
        const params = new URLSearchParams(window.location.search);\r
        const state: Record<string, any> = {};\r
        keys.forEach((k) => {\r
          const v = params.get(k);\r
          if (v !== null) state[k] = v;\r
        });\r
        return state;\r
      }\r
    } catch {\r
      return {};\r
    }\r
  }\r
\r
  function writeToURL(next: Record<string, any>) {\r
    try {\r
      const params = new URLSearchParams();\r
      keys.forEach((k) => {\r
        const v = next[k];\r
        if (v !== undefined && v !== null && String(v).length > 0) {\r
          params.set(k, String(v));\r
        }\r
      });\r
      const str = params.toString();\r
      if (mode === "hash") {\r
        const rawHash = window.location.hash || "";\r
        const withoutSharp = rawHash.replace(/^#/, "");\r
        const pathPart = withoutSharp.split("?")[0] || ""; // 保留现有路由路径\r
        const newHash = \`#\${pathPart}\${str ? \`?\${str}\` : ""}\`;\r
        if (rawHash !== newHash) {\r
          history.replaceState(\r
            null,\r
            "",\r
            \`\${window.location.pathname}\${window.location.search}\${newHash}\`\r
          );\r
        }\r
      } else {\r
        const base = window.location.pathname + (str ? \`?\${str}\` : "");\r
        const full = base + (window.location.hash || "");\r
        history.replaceState(null, "", full);\r
      }\r
    } catch {}\r
  }\r
\r
  return {\r
    name: "URLSyncPlugin",\r
    enabled: true,\r
    hooks: {\r
      onMount: (context) => {\r
        const initial = readFromURL();\r
        context.bus?.emit("urlsync:init", initial);\r
      },\r
      onPropsChange: (context, _prev, nextProps) => {\r
        const next: Record<string, any> = {};\r
        // 按字符串键取值：keys 是运行时数组，只读基本可序列化的值\r
        const source = (nextProps ?? {}) as unknown as Record<string, unknown>;\r
        keys.forEach((k) => {\r
          const v = source[k];\r
          if (v !== undefined) next[k] = v;\r
        });\r
        writeToURL(next);\r
      },\r
    },\r
  };\r
}\r
`,nk=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type A11yConfig = {
  /** 为容器设置 ARIA role（默认 list） */
  containerRole?: string;
  /** 为项设置 ARIA role（默认 listitem） */
  itemRole?: string;
  /** 是否给项添加 tabindex 便于键盘焦点（默认 true） */
  enableTabIndex?: boolean;
  /** 容器 aria-label（默认 "Waterfall list"） */
  containerLabel?: string;
};

/**
 * A11yPlugin - 可访问性增强：容器 / 项的 ARIA 语义 + 键盘聚焦。
 *
 * 与旧版的两处差别：
 *  1. 容器属性改在 \`onMount\` / \`onLayoutComplete\` 里写。旧版写在 \`renderOverlay\`
 *     里——那是渲染期副作用，React 并发渲染下可能被丢弃或执行多次；
 *  2. \`renderItemWrapper\` 的签名统一成 \`(context, node, index)\`。旧版写的是
 *     \`(context, content, index)\`，而 DragReorder 写的是 \`(context, index, item, children)\`，
 *     同一个钩子两套参数顺序，靠"谁先装"决定传入什么，属于隐蔽的错位 bug。
 */
export function createA11yPlugin<T = any>(config: A11yConfig = {}): WaterfallPlugin<T> {
  const containerRole = config.containerRole ?? "list";
  const itemRole = config.itemRole ?? "listitem";
  const enableTabIndex = config.enableTabIndex ?? true;
  const containerLabel = config.containerLabel ?? "Waterfall list";

  const decorateContainer = (context: WaterfallPluginContext<T>) => {
    const container = context.containerRef.current;
    if (!container) return;
    container.setAttribute("role", containerRole);
    container.setAttribute("aria-label", containerLabel);
    container.setAttribute("aria-busy", context.isLayouting ? "true" : "false");
  };

  return {
    name: "A11yPlugin",
    enabled: true,
    hooks: {
      onMount: (context) => {
        decorateContainer(context);
      },
      onLayoutComplete: (context) => {
        decorateContainer(context);
      },
      renderItemWrapper: (context, node, index) => (
        <div
          role={itemRole}
          aria-posinset={index + 1}
          aria-setsize={context.itemCount}
          tabIndex={enableTabIndex ? 0 : undefined}
          style={{ outline: "none" }}
        >
          {node}
        </div>
      ),
    },
  };
}
`,tk=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type BookmarkConfig = {
  /** localStorage 键名 */
  storageKey?: string;
  /** 滚动行为 */
  scrollBehavior?: "auto" | "smooth";
};

/**
 * BookmarkPlugin - 位置书签（键盘快捷键）
 * - 按下 'b' 保存当前滚动位置到 localStorage
 * - 按下 'r' 恢复到保存位置
 * - 忽略输入框/可编辑元素中的按键
 */
export function createBookmarkPlugin<T = any>(config: BookmarkConfig = {}): WaterfallPlugin<T> {
  const storageKey = config.storageKey || "waterfall-bookmark";
  const behavior: "auto" | "smooth" = config.scrollBehavior || "smooth";

  const isEditableTarget = (el: EventTarget | null): boolean => {
    const target = el as HTMLElement | null;
    if (!target) return false;
    const tag = target.tagName?.toLowerCase();
    const editable = (target.getAttribute && target.getAttribute("contenteditable")) === "true";
    return tag === "input" || tag === "textarea" || editable;
  };

  return {
    name: "BookmarkPlugin",
    enabled: true,
    hooks: {
      onMount: (context) => {
        const handler = (e: KeyboardEvent) => {
          if (isEditableTarget(e.target)) return;
          const key = (e.key || "").toLowerCase();
          const code = e.code || "";
          if (key === "b" || code === "KeyB") {
            // 优先使用容器滚动位置；否则退回页面滚动位置
            const container = context.containerRef?.current || null;
            let top = 0;
            if (container && container.scrollHeight > container.clientHeight) {
              top = container.scrollTop;
            } else {
              top = window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
            }
            try {
              localStorage.setItem(storageKey, String(Math.max(0, top)));
            } catch {}
          } else if (key === "r" || code === "KeyR") {
            let saved = 0;
            try {
              const raw = localStorage.getItem(storageKey) || "0";
              saved = Math.max(0, Number(raw) || 0);
            } catch {}
            const container = context.containerRef?.current || null;
            if (container && container.scrollHeight > container.clientHeight) {
              container.scrollTo({ top: saved, behavior });
            } else {
              window.scrollTo({ top: saved, behavior });
            }
          }
        };

        // 捕获阶段监听，尽量避免被其他组件拦截
        window.addEventListener("keydown", handler, { capture: true });
        document.addEventListener("keydown", handler, { capture: true });

        return () => {
          window.removeEventListener("keydown", handler, { capture: true } as any);
          document.removeEventListener("keydown", handler, { capture: true } as any);
        };
      },
    },
  };
}
`,rk=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type ClickAnalyticsConfig = {
  /** 是否在控制台打印每次点击（默认 false） */
  log?: boolean;
  /** 是否显示右上角计数角标（默认 false，生产版式应关闭） */
  showOverlay?: boolean;
};

/** \`getStats()\` 的返回形状：够平，直接 \`JSON.stringify\` 就能上报 */
export type ClickAnalyticsStats = {
  total: number;
  byIndex: Array<{ index: number; clicks: number }>;
};

/**
 * ClickAnalyticsPlugin - 点击分析（基础版）
 * - 统计点击次数，向 bus 发送事件：analytics:click
 * - 可选控制台输出日志
 * - \`getStats()\` 把内存里的计数吐出来，方便接到自己的上报通道
 */
export function createClickAnalyticsPlugin<T = any>(
  config: ClickAnalyticsConfig = {}
): WaterfallPlugin<T> & { getStats: () => ClickAnalyticsStats } {
  const { log = false, showOverlay = false } = config;
  /** 按 index 计数：总数从它求和得到，避免两处状态不同步 */
  const clicks = new Map<number, number>();
  const total = () => Array.from(clicks.values()).reduce((a, b) => a + b, 0);

  return {
    name: "ClickAnalyticsPlugin",
    enabled: true,
    getStats: () => ({
      total: total(),
      byIndex: Array.from(clicks.entries())
        .map(([index, count]) => ({ index, clicks: count }))
        .sort((a, b) => a.index - b.index),
    }),
    hooks: {
      onMount: (context) => {
        context.sharedData?.set("click-count", total());
      },
      onItemClick: (context, index, item, event) => {
        const next = (clicks.get(index) ?? 0) + 1;
        clicks.set(index, next);
        const sum = total();
        context.sharedData?.set("click-count", sum);
        context.bus?.emit("analytics:click", { index, item, event, total: sum });
        // 计数只存在闭包 Map 里，宿主不会因为「点了一下」重渲染；
        // 不主动请求一次，\`renderOverlay\` 要等到下次布局 / 滚动才重算，
        // 表现就是「点了数字不动，一滚动才跳变」。
        context.forceUpdate?.();
        if (log) {
          // 基本日志输出，避免过多信息
          console.log(\`[ClickAnalytics] item=\${index} total=\${sum}\`);
        }
      },
      renderOverlay: (context) => {
        if (!showOverlay) return null;
        const total = context.sharedData?.get("click-count") || 0;
        return (
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              padding: "10px 12px",
              background: "#222",
              color: "#fff",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              border: "1px solid rgba(255,255,255,0.15)",
              pointerEvents: "none",
              zIndex:99
            }}
          >
            点击次数：{total}
            <div style={{ fontSize: 12, fontWeight: 400, opacity: 0.85, marginTop: 4 }}>
              提示：点击任意卡片观察计数变化
            </div>
          </div>
        );
      },
    },
  };
}
`,ok=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type DragReorderConfig<T = any> = {
  /** 是否启用（默认 true） */
  enabled?: boolean;
  /**
   * 松手时的重排回调。插件只负责"拖"与"从哪到哪"，
   * 数组怎么改由调用方决定（就地 splice / 走接口 / 写回 store）。
   */
  onReorder?: (from: number, to: number, item: T | undefined) => void;
  /** 是否显示虚线边框提示可拖（默认 false，接入真实版式时基本都要关） */
  showHandle?: boolean;
  /**
   * 触屏长按多久进入拖拽（ms，默认 180）。
   *
   * 触摸设备上 \`draggable\` 不生效，必须走 pointer 事件；但 pointer 一动就是滚动，
   * 所以用「长按」区分「想滚」和「想拖」。设 0 则不需要长按。
   */
  touchHoldMs?: number;
};

/** 拖动中的目标项高亮用的属性名（CSS 侧 \`[data-drag-over]\`） */
const OVER_ATTR = "data-drag-over";

/** 从坐标反查落在哪个 item 上（核心容器的项带 data-index） */
function indexAtPoint(x: number, y: number): number | null {
  if (typeof document === "undefined") return null;
  const hit = document.elementFromPoint(x, y) as HTMLElement | null;
  const host = hit?.closest?.("[data-index]") as HTMLElement | null;
  if (!host) return null;
  const index = Number(host.getAttribute("data-index"));
  return Number.isFinite(index) ? index : null;
}

/**
 * DragReorderPlugin - 拖拽重排。
 *
 * 两条输入路径，各管一半设备：
 *  - **鼠标**：原生 HTML5 \`dragstart/dragover/drop\`。别改它，改成 pointer 反而会
 *    和 Core 的滚动、文本选择打架；
 *  - **触屏 / 触控笔**：\`pointerdown\` + 长按（默认 180ms）进入拖拽，移动时用
 *    \`elementFromPoint\` 找落点。触摸设备上 \`draggable\` 根本不触发，旧版因此在手机上完全失效。
 *
 * 旧版还有个大坑：只把 from/to 写进 sharedData 就结束了，\`onReorder\` 不存在，
 * 页面拿不到任何回调（注释里写着"占位：仅记录"）。这里补上真回调。
 */
export function createDragReorderPlugin<T = any>(
  config: DragReorderConfig<T> = {}
): WaterfallPlugin<T> {
  const enabled = config.enabled ?? true;
  const showHandle = config.showHandle ?? false;
  const touchHoldMs = config.touchHoldMs ?? 180;

  const handleDrop = (context: WaterfallPluginContext<T>, to: number, raw: string) => {
    const from = Number(raw);
    if (!Number.isFinite(from) || from === to) return;
    context.sharedData.set("drag-from", from);
    context.sharedData.set("drag-to", to);
    context.bus.emit("drag:reorder", { from, to });
    const items = context.props.items as T[] | undefined;
    config.onReorder?.(from, to, items?.[from]);
  };

  /** 清掉拖拽高亮 */
  const clearOver = () => {
    document.querySelectorAll(\`[\${OVER_ATTR}]\`).forEach((el) => el.removeAttribute(OVER_ATTR));
  };

  /** 清掉高亮与拖拽期间的样式副作用 */
  const clearVisual = () => {
    if (typeof document === "undefined") return;
    clearOver();
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  };

  const beginPointerDrag = (
    event: React.PointerEvent,
    index: number,
    context: WaterfallPluginContext<T>
  ) => {
    // 鼠标交给上面的 HTML5 路径：两条都开会在拖拽开始时互相打断
    if (event.pointerType === "mouse") return;

    const startX = event.clientX;
    const startY = event.clientY;
    const startedAt = Date.now();
    let active = false;
    let lastOver: number | null = null;

    const onMove = (e: PointerEvent) => {
      if (!active) {
        // 触摸必须先满足「长按」：否则一滑就变成拖拽，页面滚不动
        const held = Date.now() - startedAt >= touchHoldMs;
        const moved = Math.hypot(e.clientX - startX, e.clientY - startY) >= 6;
        if (!held || !moved) return;
        active = true;
        document.body.style.userSelect = "none";
        document.body.style.cursor = "grabbing";
      }
      e.preventDefault();
      const over = indexAtPoint(e.clientX, e.clientY);
      if (over === lastOver) return;
      clearOver();
      lastOver = over;
      if (over != null) {
        const host = document.querySelector(\`[data-index="\${over}"]\`);
        host?.setAttribute(OVER_ATTR, "");
      }
    };

    const onUp = (e: PointerEvent) => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      clearVisual();
      if (!active) return;
      const over = indexAtPoint(e.clientX, e.clientY);
      if (over != null) handleDrop(context, over, String(index));
    };

    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  return {
    name: "DragReorderPlugin",
    enabled,
    hooks: {
      renderItemWrapper: (context, node, index) => {
        if (!enabled) return node;
        return (
          <div
            draggable
            onDragStart={(event: React.DragEvent) => {
              event.dataTransfer?.setData("text/plain", String(index));
              context.sharedData.set("drag-from", index);
            }}
            onDragOver={(event: React.DragEvent) => {
              // 不 preventDefault 就不会触发 drop
              event.preventDefault();
            }}
            onDragEnter={() => {
              const host = document.querySelector(\`[data-index="\${index}"]\`);
              host?.setAttribute(OVER_ATTR, "");
            }}
            onDragLeave={() => {
              const host = document.querySelector(\`[data-index="\${index}"]\`);
              host?.removeAttribute(OVER_ATTR);
            }}
            onDrop={(event: React.DragEvent) => {
              event.preventDefault();
              clearVisual();
              handleDrop(context, index, event.dataTransfer?.getData("text/plain") ?? "");
            }}
            onDragEnd={clearVisual}
            // 触屏路径：移动端 HTML5 拖拽不触发，只能自己实现
            onPointerDown={(event: React.PointerEvent) => beginPointerDrag(event, index, context)}
            style={{
              cursor: "grab",
              ...(showHandle ? { border: "1px dashed #bdbdbd", borderRadius: 6 } : null),
            }}
          >
            {node}
          </div>
        );
      },
    },
  };
}
`,lk=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type GroupingConfig<T = any> = {
  /** 分组函数，返回组键（默认取 item.category） */
  groupBy?: (item: T, index: number) => string | number;
  /** 是否显示分组统计角标（默认 false） */
  showOverlay?: boolean;
};

const KEY = "GROUPS";

/**
 * GroupingPlugin - 按字段把项分组，结果写进 \`sharedData.get("GROUPS")\`。
 *
 * 旧版只在 \`onPropsChange\` 里算，而挂载时不会触发 props 变化 → **首屏永远拿不到分组**，
 * 吸顶条只能显示写死的标题。这里改成挂载即算，并在 items 变化与布局完成时重算，
 * 同时把结果 emit 出去（\`grouping:change\`），页面不用轮询 sharedData。
 */
export function createGroupingPlugin<T = any>(
  config: GroupingConfig<T> = {}
): WaterfallPlugin<T> {
  const groupBy =
    config.groupBy ?? ((item: any) => item?.category ?? "default");
  const showOverlay = config.showOverlay ?? false;

  const compute = (context: WaterfallPluginContext<T>) => {
    const groups = new Map<string | number, number[]>();
    (context.props.items ?? []).forEach((item, index) => {
      const key = groupBy(item as T, index);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(index);
    });
    context.sharedData.set(KEY, groups);
    if (groups.size > 0) context.bus.emit("grouping:change", { groups });
    return groups;
  };

  return {
    name: "GroupingPlugin",
    enabled: true,
    hooks: {
      onMount: (context) => {
        compute(context);
      },
      onLayoutComplete: (context) => {
        compute(context);
      },
      onPropsChange: (context) => {
        compute(context);
      },
      renderOverlay: (context) => {
        if (!showOverlay) return null;
        const groups: Map<string | number, number[]> =
          context.sharedData.get(KEY) ?? new Map();
        if (groups.size === 0) return null;
        const entries = Array.from(groups.entries()).slice(0, 3);
        return (
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              zIndex: 99,
              background: "#111827",
              color: "#fff",
              padding: "10px 12px",
              borderRadius: 8,
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              border: "1px solid rgba(255,255,255,0.15)",
              minWidth: 150,
              fontSize: 12,
              pointerEvents: "none",
            }}
          >
            <div style={{ opacity: 0.85, marginBottom: 6 }}>分组：{groups.size} 组</div>
            {entries.map(([key, list]) => (
              <div key={String(key)}>
                {String(key)} · {list.length} 项
              </div>
            ))}
          </div>
        );
      },
    },
  };
}
`,ik=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type HeatmapAnalyticsConfig = {
  /** 是否显示顶部统计汇总条（默认 false） */
  showOverlay?: boolean;
  /** 别名：示例页使用的 showOverlaySummary */
  showOverlaySummary?: boolean;
};

/**
 * \`getStats()\` 的返回形状：每项的曝光 / 点击次数。
 *
 * 只列「有数据」的项 —— 上千项时把全零项也吐出来没有意义。
 */
export type HeatmapAnalyticsStats = {
  totalViews: number;
  totalClicks: number;
  items: Array<{ index: number; views: number; clicks: number }>;
};

/**
 * HeatmapAnalyticsPlugin - 点击/曝光热力分析（基础版）
 * - 统计每项进入视口次数与点击次数
 * - 可选在顶部显示统计摘要叠层
 * - \`getStats()\` 把内存里的统计吐出来，方便接到自己的上报通道
 */
export function createHeatmapAnalyticsPlugin<T = any>(
  config: HeatmapAnalyticsConfig = {}
): WaterfallPlugin<T> & { getStats: () => HeatmapAnalyticsStats } {
  const showOverlay = (config.showOverlay ?? config.showOverlaySummary) ?? false;

  const views = new Map<number, number>();
  const clicks = new Map<number, number>();
  let initialCountDone = false;

  const sum = (m: Map<number, number>) =>
    Array.from(m.values()).reduce((a, b) => a + b, 0);

  return {
    name: "HeatmapAnalyticsPlugin",
    enabled: true,
    getStats: () => {
      const indexes = new Set([...views.keys(), ...clicks.keys()]);
      return {
        totalViews: sum(views),
        totalClicks: sum(clicks),
        items: Array.from(indexes)
          .sort((a, b) => a - b)
          .map((index) => ({
            index,
            views: views.get(index) ?? 0,
            clicks: clicks.get(index) ?? 0,
          })),
      };
    },
    hooks: {
      onLayoutComplete: (context) => {
        // 首次布局完成后，统计当前可见范围的曝光，避免首次渲染为 0
        if (initialCountDone) return;
        const { start, end } = context.visibleRange;
        for (let i = start; i <= end; i++) {
          views.set(i, (views.get(i) || 0) + 1);
        }
        initialCountDone = true;
      },
      onItemEnterViewport: (_context, index) => {
        views.set(index, (views.get(index) || 0) + 1);
      },
      onItemClick: (context, index) => {
        clicks.set(index, (clicks.get(index) || 0) + 1);
        // 同 ClickAnalytics：统计只在闭包里，不请求重渲染的话顶部汇总条
        // 要等到下次布局 / 滚动才更新
        context.forceUpdate?.();
      },
      renderOverlay: () => {
        if (!showOverlay) return null;
        const totalViews = Array.from(views.values()).reduce((a, b) => a + b, 0);
        const totalClicks = Array.from(clicks.values()).reduce((a, b) => a + b, 0);

        return (
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 100,
              display: "flex",
              gap: 12,
              alignItems: "center",
              padding: "6px 10px",
              background: "rgba(0,0,0,0.6)",
              color: "white",
              borderRadius: 8,
              fontSize: 12,
              marginBottom: 8,
            }}
          >
            <span>曝光总计: {totalViews}</span>
            <span>点击总计: {totalClicks}</span>
          </div>
        );
      },
    },
  };
}
`,sk=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type ScrollAnchorConfig<T = any> = {
  /** 通过此函数提取锚点 id（默认使用 item.id） */
  getAnchorId?: (item: T, index: number) => string | number | undefined;
};

/**
 * ScrollAnchorPlugin - 滚动锚点（实验版）
 * - 渲染一个简单的锚点跳转控件
 * - 支持通过 bus 事件 anchor:scrollToId 跳转
 */
export function createScrollAnchorPlugin<T = any>(config: ScrollAnchorConfig<T> = {}): WaterfallPlugin<T> {
  const getAnchorId = config.getAnchorId || ((item: any) => item?.id);
  let unsubscribe: (() => void) | undefined;
  return {
    name: "ScrollAnchorPlugin",
    enabled: true,
    hooks: {
      onMount: (context) => {
        unsubscribe = context.bus?.on("anchor:scrollToId", (payload: { id: string | number }) => {
          const items = context.props?.items || [];
          const targetIndex = items.findIndex((it, idx) => getAnchorId(it, idx) === payload.id);
          if (targetIndex >= 0) {
            context.scrollToItem?.(targetIndex, { behavior: "smooth", block: "start" });
          }
        });
      },
      onUnmount: () => unsubscribe?.(),
    },
  };
}
`,ak=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type StickyHeaderConfig = {
  /** 标题文案（默认 "分组标题"） */
  title?: string;
  /** 是否显示「向下滚动观察」提示（默认 false） */
  showHint?: boolean;
};

/**
 * StickyHeaderPlugin - 吸顶标题（实验版）
 * - 简化实现：始终显示一个吸顶条，可与 GroupingPlugin 联动
 */
export function createStickyHeaderPlugin<T = any>(config: StickyHeaderConfig = {}): WaterfallPlugin<T> {
  const title = config.title || "分组标题";
  const showHint = config.showHint ?? false;
  return {
    name: "StickyHeaderPlugin",
    enabled: true,
    hooks: {
      renderOverlay: (context) => {
  const groups: Map<string | number, number[]> = context.sharedData?.get("GROUPS") || new Map();
        const firstKey = groups.size > 0 ? Array.from(groups.keys())[0] : undefined;
        return (
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 20,
              background: "#111827",
              color: "#fff",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              padding: "10px 14px",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            {title} {firstKey !== undefined ? \`：\${String(firstKey)}\` : ""}
            {showHint ? (
              <span style={{ marginLeft: 8, fontSize: 12, opacity: 0.8 }}>
                向下滚动观察吸顶
              </span>
            ) : null}
          </div>
        );
      },
    },
  };
}
`,Sk={layout:"布局",perf:"性能与动效",data:"数据管线",interaction:"交互与埋点",ui:"语义与状态"},Ku=["layout","perf","data","interaction","ui"],Yu=Object.assign({"/src/custom-plugins/A11yPlugin/doc.json":ff,"/src/custom-plugins/AlignmentPlugin/doc.json":Rp,"/src/custom-plugins/AutoColumnPlugin/doc.json":$p,"/src/custom-plugins/BookmarkPlugin/doc.json":vf,"/src/custom-plugins/ClickAnalyticsPlugin/doc.json":tf,"/src/custom-plugins/DebounceLayoutPlugin/doc.json":Fp,"/src/custom-plugins/DragReorderPlugin/doc.json":sf,"/src/custom-plugins/FilterPlugin/doc.json":Qp,"/src/custom-plugins/FixedHeightPlugin/doc.json":Op,"/src/custom-plugins/GapPlugin/doc.json":jp,"/src/custom-plugins/GroupingPlugin/doc.json":gf,"/src/custom-plugins/HeatmapAnalyticsPlugin/doc.json":of,"/src/custom-plugins/InfiniteScrollPlugin/doc.json":ef,"/src/custom-plugins/PaginationPlugin/doc.json":Jp,"/src/custom-plugins/PinItemPlugin/doc.json":Dp,"/src/custom-plugins/RecyclePlugin/doc.json":df,"/src/custom-plugins/ReducedMotionPlugin/doc.json":Up,"/src/custom-plugins/ResponsiveColumnsPlugin/doc.json":Ip,"/src/custom-plugins/ScrollAnchorPlugin/doc.json":uf,"/src/custom-plugins/SearchPlugin/doc.json":Xp,"/src/custom-plugins/SortPlugin/doc.json":Yp,"/src/custom-plugins/StatePersistencePlugin/doc.json":wf,"/src/custom-plugins/StickyHeaderPlugin/doc.json":hf,"/src/custom-plugins/ThrottlePlugin/doc.json":Hp,"/src/custom-plugins/TransitionPlugin/doc.json":Vp,"/src/custom-plugins/URLSyncPlugin/doc.json":bf}),uk=Object.assign({"/src/custom-plugins/AlignmentPlugin/create.ts":zP,"/src/custom-plugins/AutoColumnPlugin/create.ts":DP,"/src/custom-plugins/DebounceLayoutPlugin/create.ts":AP,"/src/custom-plugins/FilterPlugin/create.ts":HP,"/src/custom-plugins/FixedHeightPlugin/create.ts":WP,"/src/custom-plugins/GapPlugin/create.ts":FP,"/src/custom-plugins/InfiniteScrollPlugin/create.ts":BP,"/src/custom-plugins/PaginationPlugin/create.ts":UP,"/src/custom-plugins/PinItemPlugin/create.ts":GP,"/src/custom-plugins/RecyclePlugin/create.ts":VP,"/src/custom-plugins/ReducedMotionPlugin/create.ts":QP,"/src/custom-plugins/ResponsiveColumnsPlugin/create.ts":KP,"/src/custom-plugins/SearchPlugin/create.ts":YP,"/src/custom-plugins/SortPlugin/create.ts":qP,"/src/custom-plugins/StatePersistencePlugin/create.ts":XP,"/src/custom-plugins/ThrottlePlugin/create.ts":JP,"/src/custom-plugins/TransitionPlugin/create.ts":ZP,"/src/custom-plugins/URLSyncPlugin/create.ts":ek}),ck=Object.assign({"/src/custom-plugins/A11yPlugin/create.tsx":nk,"/src/custom-plugins/BookmarkPlugin/create.tsx":tk,"/src/custom-plugins/ClickAnalyticsPlugin/create.tsx":rk,"/src/custom-plugins/DragReorderPlugin/create.tsx":ok,"/src/custom-plugins/GroupingPlugin/create.tsx":lk,"/src/custom-plugins/HeatmapAnalyticsPlugin/create.tsx":ik,"/src/custom-plugins/ScrollAnchorPlugin/create.tsx":sk,"/src/custom-plugins/StickyHeaderPlugin/create.tsx":ak}),qu={...uk,...ck},kf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function dk(e){const n=Object.keys(qu).find(o=>kf(o)===e),t=n?qu[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function pk(e){const n=Object.keys(Yu).find(t=>kf(t)===e);return n?Yu[n]:{name:e,description:"（缺少 doc.json）"}}const fk=[{dir:"AutoColumnPlugin",group:"layout",make:()=>Ep({minColumnWidth:200,maxColumns:4})},{dir:"ResponsiveColumnsPlugin",group:"layout",make:()=>Np({breakpoints:{sm:{width:0,columns:2},md:{width:700,columns:3},lg:{width:1020,columns:4}}})},{dir:"AlignmentPlugin",group:"layout",make:()=>Mp({mode:"shortest"})},{dir:"GapPlugin",group:"layout",make:()=>Lp({columnGap:14,rowGap:14})},{dir:"FixedHeightPlugin",group:"layout",make:()=>zp({itemHeight:180})},{dir:"PinItemPlugin",group:"layout",make:()=>Ap({pinnedIndices:[0],column:0})},{dir:"ThrottlePlugin",group:"perf",make:()=>Wp({scroll:16,resize:120})},{dir:"DebounceLayoutPlugin",group:"perf",make:()=>Bp({delay:160})},{dir:"TransitionPlugin",group:"perf",make:()=>ia({duration:240})},{dir:"ReducedMotionPlugin",group:"perf",make:()=>Gp()},{dir:"FilterPlugin",group:"data",make:()=>Kp({predicate:e=>e.price<=500})},{dir:"SortPlugin",group:"data",make:()=>qp({comparator:(e,n)=>n.likes-e.likes})},{dir:"SearchPlugin",group:"data",make:()=>sa({fields:["title","author"]})},{dir:"PaginationPlugin",group:"data",make:()=>Zp({pageSize:18})},{dir:"InfiniteScrollPlugin",group:"data",make:()=>nf({threshold:400})},{dir:"ClickAnalyticsPlugin",group:"interaction",make:()=>rf({showOverlay:!0})},{dir:"HeatmapAnalyticsPlugin",group:"interaction",make:()=>lf({showOverlay:!0})},{dir:"DragReorderPlugin",group:"interaction",make:()=>af({showHandle:!0})},{dir:"ScrollAnchorPlugin",group:"interaction",make:()=>cf({})},{dir:"RecyclePlugin",group:"interaction",make:()=>pf({poolSize:24})},{dir:"A11yPlugin",group:"ui",make:()=>mf({enableTabIndex:!1})},{dir:"GroupingPlugin",group:"ui",make:()=>aa({groupBy:e=>e.tag})},{dir:"StickyHeaderPlugin",group:"ui",make:()=>yf({title:"工坊预览"})},{dir:"BookmarkPlugin",group:"ui",make:()=>xf({storageKey:"demo-workshop-bookmark"})},{dir:"StatePersistencePlugin",group:"ui",make:()=>Sf({storageKey:"demo-workshop-state",persistScroll:!0})},{dir:"URLSyncPlugin",group:"ui",make:()=>Pf({mode:"search",keys:["searchQuery"]})}],Xu=fk.map(e=>{const n=pk(e.dir);return{dir:e.dir,factory:`create${e.dir}`,group:e.group,priority:dk(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>Ku.indexOf(e.group)-Ku.indexOf(n.group)||n.priority-e.priority),bk=[{a:"AutoColumnPlugin",b:"ResponsiveColumnsPlugin",why:"两者都改列数，AutoColumn 按最小列宽算、Responsive 按断点表算，同时开会交替覆盖"},{a:"TransitionPlugin",b:"ReducedMotionPlugin",why:"ReducedMotion 会去掉过渡，同开等于把 Transition 关掉（不是错误，但别指望有动效）"},{a:"InfiniteScrollPlugin",b:"PaginationPlugin",why:"一个追加、一个切片，叠在一起会出现「翻到第 2 页又看到第 1 页」"},{a:"RecyclePlugin",b:"virtualize",why:"Recycle 改 visibility、virtualize 直接卸载 DOM，同开互相打架"}],Pk=["AutoColumnPlugin","GapPlugin","TransitionPlugin","A11yPlugin"],mk=y.lazy(()=>la(()=>import("./HomePage-BPJJ8WV1.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),gk=y.lazy(()=>la(()=>import("./PluginsPage-mKxof7dU.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),hk=y.lazy(()=>la(()=>import("./ScenariosPage-DR_6nCCM.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),yk={pkg:"vane-waterfall",brand:"V",subtitle:"排版台 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Xu.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"13 plates"}],routes:[{path:"/",element:d.jsx(mk,{})},{path:"/plugins",element:d.jsx(gk,{})},{path:"/scenarios",element:d.jsx(hk,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:RP.map(e=>({key:e,label:ls[e].label})),entries:os,detail:(e,n)=>d.jsx(OP,{entry:e,order:n})},footer:[`${Xu.length} PLUGINS · 13 PLATES`,`${os.length} DEMOS · D1-A / D2-A`]};function vk(){return d.jsx(gy,{config:yk})}cp(document.getElementById("root")).render(d.jsx(vk,{}));export{Pf as A,Wp as B,NP as C,os as D,aa as E,Fy as F,Ku as G,yf as H,cf as I,Du as J,pf as K,rs as L,Bp as M,lf as N,Xu as P,Hy as T,Ou as W,wk as a,Lp as b,Ep as c,ia as d,Pk as e,bk as f,Sk as g,Gp as h,nf as i,d as j,mf as k,Ap as l,_p as m,rf as n,Kp as o,qp as p,Zp as q,y as r,Np as s,xf as t,zp as u,Mp as v,Dy as w,Sf as x,af as y,sa as z};
