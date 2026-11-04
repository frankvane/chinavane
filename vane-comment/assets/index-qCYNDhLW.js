const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-nnaPfW2A.js","./catalog-CS-X3o3B.js","./ScenariosPage-DVnLt4zs.js"])))=>i.map(i=>d[i]);
var Pm=Object.defineProperty;var km=(e,n,t)=>n in e?Pm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Vs=(e,n,t)=>km(e,typeof n!="symbol"?n+"":n,t);function _m(e,n){for(var t=0;t<n.length;t++){const o=n[t];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(o,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Rm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ru={exports:{}},Mr={},ju={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),jm=Symbol.for("react.portal"),Em=Symbol.for("react.fragment"),bm=Symbol.for("react.strict_mode"),Tm=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),$m=Symbol.for("react.context"),Mm=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),Lm=Symbol.for("react.memo"),Om=Symbol.for("react.lazy"),Qs=Symbol.iterator;function zm(e){return e===null||typeof e!="object"?null:(e=Qs&&e[Qs]||e["@@iterator"],typeof e=="function"?e:null)}var Eu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bu=Object.assign,Tu={};function $t(e,n,t){this.props=e,this.context=n,this.refs=Tu,this.updater=t||Eu}$t.prototype.isReactComponent={};$t.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};$t.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nu(){}Nu.prototype=$t.prototype;function Nl(e,n,t){this.props=e,this.context=n,this.refs=Tu,this.updater=t||Eu}var $l=Nl.prototype=new Nu;$l.constructor=Nl;bu($l,$t.prototype);$l.isPureReactComponent=!0;var Ys=Array.isArray,$u=Object.prototype.hasOwnProperty,Ml={current:null},Mu={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,n,t){var o,r={},i=null,l=null;if(n!=null)for(o in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)$u.call(n,o)&&!Mu.hasOwnProperty(o)&&(r[o]=n[o]);var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)r[o]===void 0&&(r[o]=s[o]);return{$$typeof:Ro,type:e,key:i,ref:l,props:r,_owner:Ml.current}}function Im(e,n){return{$$typeof:Ro,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ro}function Am(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ks=/\/+/g;function ti(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Am(""+e.key):n.toString(36)}function Go(e,n,t,o,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ro:case jm:l=!0}}if(l)return l=e,r=r(l),e=o===""?"."+ti(l,0):o,Ys(r)?(t="",e!=null&&(t=e.replace(Ks,"$&/")+"/"),Go(r,n,t,"",function(c){return c})):r!=null&&(Dl(r)&&(r=Im(r,t+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Ks,"$&/")+"/")+e)),n.push(r)),1;if(l=0,o=o===""?".":o+":",Ys(e))for(var s=0;s<e.length;s++){i=e[s];var a=o+ti(i,s);l+=Go(i,n,t,a,r)}else if(a=zm(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=o+ti(i,s++),l+=Go(i,n,t,a,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function No(e,n,t){if(e==null)return e;var o=[],r=0;return Go(e,o,"","",function(i){return n.call(t,i,r++)}),o}function Fm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},qo={transition:null},Um={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:qo,ReactCurrentOwner:Ml};function Lu(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:No,forEach:function(e,n,t){No(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return No(e,function(){n++}),n},toArray:function(e){return No(e,function(n){return n})||[]},only:function(e){if(!Dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=$t;z.Fragment=Em;z.Profiler=Tm;z.PureComponent=Nl;z.StrictMode=bm;z.Suspense=Dm;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;z.act=Lu;z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=bu({},e.props),r=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Ml.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)$u.call(n,a)&&!Mu.hasOwnProperty(a)&&(o[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:Ro,type:e.type,key:r,ref:i,props:o,_owner:l}};z.createContext=function(e){return e={$$typeof:$m,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nm,_context:e},e.Consumer=e};z.createElement=Du;z.createFactory=function(e){var n=Du.bind(null,e);return n.type=e,n};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Mm,render:e}};z.isValidElement=Dl;z.lazy=function(e){return{$$typeof:Om,_payload:{_status:-1,_result:e},_init:Fm}};z.memo=function(e,n){return{$$typeof:Lm,type:e,compare:n===void 0?null:n}};z.startTransition=function(e){var n=qo.transition;qo.transition={};try{e()}finally{qo.transition=n}};z.unstable_act=Lu;z.useCallback=function(e,n){return we.current.useCallback(e,n)};z.useContext=function(e){return we.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return we.current.useDeferredValue(e)};z.useEffect=function(e,n){return we.current.useEffect(e,n)};z.useId=function(){return we.current.useId()};z.useImperativeHandle=function(e,n,t){return we.current.useImperativeHandle(e,n,t)};z.useInsertionEffect=function(e,n){return we.current.useInsertionEffect(e,n)};z.useLayoutEffect=function(e,n){return we.current.useLayoutEffect(e,n)};z.useMemo=function(e,n){return we.current.useMemo(e,n)};z.useReducer=function(e,n,t){return we.current.useReducer(e,n,t)};z.useRef=function(e){return we.current.useRef(e)};z.useState=function(e){return we.current.useState(e)};z.useSyncExternalStore=function(e,n,t){return we.current.useSyncExternalStore(e,n,t)};z.useTransition=function(){return we.current.useTransition()};z.version="18.3.1";ju.exports=z;var h=ju.exports;const en=Rm(h),Bm=_m({__proto__:null,default:en},[h]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=h,Hm=Symbol.for("react.element"),Vm=Symbol.for("react.fragment"),Qm=Object.prototype.hasOwnProperty,Ym=Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Km={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,n,t){var o,r={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(o in n)Qm.call(n,o)&&!Km.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)r[o]===void 0&&(r[o]=n[o]);return{$$typeof:Hm,type:e,key:i,ref:l,props:r,_owner:Ym.current}}Mr.Fragment=Vm;Mr.jsx=Ou;Mr.jsxs=Ou;Ru.exports=Mr;var u=Ru.exports,Ni={},zu={exports:{}},Me={},Iu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(b,M){var L=b.length;b.push(M);e:for(;0<L;){var Q=L-1>>>1,te=b[Q];if(0<r(te,M))b[Q]=M,b[L]=te,L=Q;else break e}}function t(b){return b.length===0?null:b[0]}function o(b){if(b.length===0)return null;var M=b[0],L=b.pop();if(L!==M){b[0]=L;e:for(var Q=0,te=b.length,F=te>>>1;Q<F;){var U=2*(Q+1)-1,ae=b[U],ge=U+1,ue=b[ge];if(0>r(ae,L))ge<te&&0>r(ue,ae)?(b[Q]=ue,b[ge]=L,Q=ge):(b[Q]=ae,b[U]=L,Q=U);else if(ge<te&&0>r(ue,L))b[Q]=ue,b[ge]=L,Q=ge;else break e}}return M}function r(b,M){var L=b.sortIndex-M.sortIndex;return L!==0?L:b.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],d=1,m=null,f=3,v=!1,x=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(b){for(var M=t(c);M!==null;){if(M.callback===null)o(c);else if(M.startTime<=b)o(c),M.sortIndex=M.expirationTime,n(a,M);else break;M=t(c)}}function C(b){if(S=!1,y(b),!x)if(t(a)!==null)x=!0,Ue(_);else{var M=t(c);M!==null&&Xe(C,M.startTime-b)}}function _(b,M){x=!1,S&&(S=!1,g($),$=-1),v=!0;var L=f;try{for(y(M),m=t(a);m!==null&&(!(m.expirationTime>M)||b&&!E());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,f=m.priorityLevel;var te=Q(m.expirationTime<=M);M=e.unstable_now(),typeof te=="function"?m.callback=te:m===t(a)&&o(a),y(M)}else o(a);m=t(a)}if(m!==null)var F=!0;else{var U=t(c);U!==null&&Xe(C,U.startTime-M),F=!1}return F}finally{m=null,f=L,v=!1}}var j=!1,T=null,$=-1,w=5,R=-1;function E(){return!(e.unstable_now()-R<w)}function D(){if(T!==null){var b=e.unstable_now();R=b;var M=!0;try{M=T(!0,b)}finally{M?O():(j=!1,T=null)}}else j=!1}var O;if(typeof p=="function")O=function(){p(D)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,qe=ne.port2;ne.port1.onmessage=D,O=function(){qe.postMessage(null)}}else O=function(){P(D,0)};function Ue(b){T=b,j||(j=!0,O())}function Xe(b,M){$=P(function(){b(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,Ue(_))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(b){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var L=f;f=M;try{return b()}finally{f=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,M){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var L=f;f=b;try{return M()}finally{f=L}},e.unstable_scheduleCallback=function(b,M,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,b){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=L+te,b={id:d++,callback:M,priorityLevel:b,startTime:L,expirationTime:te,sortIndex:-1},L>Q?(b.sortIndex=L,n(c,b),t(a)===null&&b===t(c)&&(S?(g($),$=-1):S=!0,Xe(C,L-Q))):(b.sortIndex=te,n(a,b),x||v||(x=!0,Ue(_))),b},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(b){var M=f;return function(){var L=f;f=M;try{return b.apply(this,arguments)}finally{f=L}}}})(Au);Iu.exports=Au;var Gm=Iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm=h,$e=Gm;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fu=new Set,lo={};function nt(e,n){kt(e,n),kt(e+"Capture",n)}function kt(e,n){for(lo[e]=n,e=0;e<n.length;e++)Fu.add(n[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$i=Object.prototype.hasOwnProperty,Xm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gs={},qs={};function Jm(e){return $i.call(qs,e)?!0:$i.call(Gs,e)?!1:Xm.test(e)?qs[e]=!0:(Gs[e]=!0,!1)}function Zm(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ep(e,n,t,o){if(n===null||typeof n>"u"||Zm(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Pe(e,n,t,o,r,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];fe[n]=new Pe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ll=/[\-:]([a-z])/g;function Ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ll,Ol);fe[n]=new Pe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ll,Ol);fe[n]=new Pe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ll,Ol);fe[n]=new Pe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function zl(e,n,t,o){var r=fe.hasOwnProperty(n)?fe[n]:null;(r!==null?r.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ep(n,t,r,o)&&(t=null),o||r===null?Jm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,o=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var fn=qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$o=Symbol.for("react.element"),lt=Symbol.for("react.portal"),st=Symbol.for("react.fragment"),Il=Symbol.for("react.strict_mode"),Mi=Symbol.for("react.profiler"),Uu=Symbol.for("react.provider"),Bu=Symbol.for("react.context"),Al=Symbol.for("react.forward_ref"),Di=Symbol.for("react.suspense"),Li=Symbol.for("react.suspense_list"),Fl=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),Wu=Symbol.for("react.offscreen"),Xs=Symbol.iterator;function It(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,oi;function Qt(e){if(oi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);oi=n&&n[1]||""}return`
`+oi+e}var ri=!1;function ii(e,n){if(!e||ri)return"";ri=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var o=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){o=c}e.call(n.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=o.stack.split(`
`),l=r.length-1,s=i.length-1;1<=l&&0<=s&&r[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(r[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||r[l]!==i[s]){var a=`
`+r[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{ri=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Qt(e):""}function np(e){switch(e.tag){case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 2:case 15:return e=ii(e.type,!1),e;case 11:return e=ii(e.type.render,!1),e;case 1:return e=ii(e.type,!0),e;default:return""}}function Oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case st:return"Fragment";case lt:return"Portal";case Mi:return"Profiler";case Il:return"StrictMode";case Di:return"Suspense";case Li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bu:return(e.displayName||"Context")+".Consumer";case Uu:return(e._context.displayName||"Context")+".Provider";case Al:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fl:return n=e.displayName||null,n!==null?n:Oi(e.type)||"Memo";case vn:n=e._payload,e=e._init;try{return Oi(e(n))}catch{}}return null}function tp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oi(n);case 8:return n===Il?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function op(e){var n=Hu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mo(e){e._valueTracker||(e._valueTracker=op(e))}function Vu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=Hu(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zi(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Js(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=Dn(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Qu(e,n){n=n.checked,n!=null&&zl(e,"checked",n,!1)}function Ii(e,n){Qu(e,n);var t=Dn(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ai(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ai(e,n.type,Dn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Zs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ai(e,n,t){(n!=="number"||sr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Yt=Array.isArray;function vt(e,n,t,o){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&o&&(e[t].defaultSelected=!0)}else{for(t=""+Dn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Fi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ea(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Yt(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Dn(t)}}function Yu(e,n){var t=Dn(n.value),o=Dn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function na(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ku(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ui(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ku(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Do,Gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Do.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function so(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rp=["Webkit","ms","Moz","O"];Object.keys(Xt).forEach(function(e){rp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Xt[n]=Xt[e]})});function qu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Xt.hasOwnProperty(e)&&Xt[e]?(""+n).trim():n+"px"}function Xu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,r=qu(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,r):e[t]=r}}var ip=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bi(e,n){if(n){if(ip[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Wi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function Ul(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vi=null,xt=null,Ct=null;function ta(e){if(e=bo(e)){if(typeof Vi!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Ir(n),Vi(e.stateNode,e.type,n))}}function Ju(e){xt?Ct?Ct.push(e):Ct=[e]:xt=e}function Zu(){if(xt){var e=xt,n=Ct;if(Ct=xt=null,ta(e),n)for(e=0;e<n.length;e++)ta(n[e])}}function ec(e,n){return e(n)}function nc(){}var li=!1;function tc(e,n,t){if(li)return e(n,t);li=!0;try{return ec(e,n,t)}finally{li=!1,(xt!==null||Ct!==null)&&(nc(),Zu())}}function ao(e,n){var t=e.stateNode;if(t===null)return null;var o=Ir(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Qi=!1;if(cn)try{var At={};Object.defineProperty(At,"passive",{get:function(){Qi=!0}}),window.addEventListener("test",At,At),window.removeEventListener("test",At,At)}catch{Qi=!1}function lp(e,n,t,o,r,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(d){this.onError(d)}}var Jt=!1,ar=null,ur=!1,Yi=null,sp={onError:function(e){Jt=!0,ar=e}};function ap(e,n,t,o,r,i,l,s,a){Jt=!1,ar=null,lp.apply(sp,arguments)}function up(e,n,t,o,r,i,l,s,a){if(ap.apply(this,arguments),Jt){if(Jt){var c=ar;Jt=!1,ar=null}else throw Error(k(198));ur||(ur=!0,Yi=c)}}function tt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function oc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function oa(e){if(tt(e)!==e)throw Error(k(188))}function cp(e){var n=e.alternate;if(!n){if(n=tt(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,o=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(o=r.return,o!==null){t=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return oa(r),e;if(i===o)return oa(r),n;i=i.sibling}throw Error(k(188))}if(t.return!==o.return)t=r,o=i;else{for(var l=!1,s=r.child;s;){if(s===t){l=!0,t=r,o=i;break}if(s===o){l=!0,o=r,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,o=r;break}if(s===o){l=!0,o=i,t=r;break}s=s.sibling}if(!l)throw Error(k(189))}}if(t.alternate!==o)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function rc(e){return e=cp(e),e!==null?ic(e):null}function ic(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ic(e);if(n!==null)return n;e=e.sibling}return null}var lc=$e.unstable_scheduleCallback,ra=$e.unstable_cancelCallback,dp=$e.unstable_shouldYield,mp=$e.unstable_requestPaint,Z=$e.unstable_now,pp=$e.unstable_getCurrentPriorityLevel,Bl=$e.unstable_ImmediatePriority,sc=$e.unstable_UserBlockingPriority,cr=$e.unstable_NormalPriority,fp=$e.unstable_LowPriority,ac=$e.unstable_IdlePriority,Dr=null,tn=null;function gp(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Dr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:vp,hp=Math.log,yp=Math.LN2;function vp(e){return e>>>=0,e===0?32:31-(hp(e)/yp|0)|0}var Lo=64,Oo=4194304;function Kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dr(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,r=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~r;s!==0?o=Kt(s):(i&=l,i!==0&&(o=Kt(i)))}else l=t&~r,l!==0?o=Kt(l):i!==0&&(o=Kt(i));if(o===0)return 0;if(n!==0&&n!==o&&!(n&r)&&(r=o&-o,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(o&4&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-Ye(n),r=1<<t,o|=e[t],n&=~r;return o}function xp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cp(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ye(i),s=1<<l,a=r[l];a===-1?(!(s&t)||s&o)&&(r[l]=xp(s,n)):a<=n&&(e.expiredLanes|=s),i&=~s}}function Ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uc(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function si(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function jo(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ye(n),e[n]=t}function Sp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Ye(t),i=1<<r;n[r]=0,o[r]=-1,e[r]=-1,t&=~i}}function Wl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-Ye(t),r=1<<o;r&n|e[o]&n&&(e[o]|=n),t&=~r}}var A=0;function cc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dc,Hl,mc,pc,fc,Gi=!1,zo=[],_n=null,Rn=null,jn=null,uo=new Map,co=new Map,Cn=[],wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ia(e,n){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(n.pointerId)}}function Ft(e,n,t,o,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},n!==null&&(n=bo(n),n!==null&&Hl(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Pp(e,n,t,o,r){switch(n){case"focusin":return _n=Ft(_n,e,n,t,o,r),!0;case"dragenter":return Rn=Ft(Rn,e,n,t,o,r),!0;case"mouseover":return jn=Ft(jn,e,n,t,o,r),!0;case"pointerover":var i=r.pointerId;return uo.set(i,Ft(uo.get(i)||null,e,n,t,o,r)),!0;case"gotpointercapture":return i=r.pointerId,co.set(i,Ft(co.get(i)||null,e,n,t,o,r)),!0}return!1}function gc(e){var n=Vn(e.target);if(n!==null){var t=tt(n);if(t!==null){if(n=t.tag,n===13){if(n=oc(t),n!==null){e.blockedOn=n,fc(e.priority,function(){mc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=qi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Hi=o,t.target.dispatchEvent(o),Hi=null}else return n=bo(t),n!==null&&Hl(n),e.blockedOn=t,!1;n.shift()}return!0}function la(e,n,t){Xo(e)&&t.delete(n)}function kp(){Gi=!1,_n!==null&&Xo(_n)&&(_n=null),Rn!==null&&Xo(Rn)&&(Rn=null),jn!==null&&Xo(jn)&&(jn=null),uo.forEach(la),co.forEach(la)}function Ut(e,n){e.blockedOn===n&&(e.blockedOn=null,Gi||(Gi=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,kp)))}function mo(e){function n(r){return Ut(r,e)}if(0<zo.length){Ut(zo[0],e);for(var t=1;t<zo.length;t++){var o=zo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(_n!==null&&Ut(_n,e),Rn!==null&&Ut(Rn,e),jn!==null&&Ut(jn,e),uo.forEach(n),co.forEach(n),t=0;t<Cn.length;t++)o=Cn[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<Cn.length&&(t=Cn[0],t.blockedOn===null);)gc(t),t.blockedOn===null&&Cn.shift()}var St=fn.ReactCurrentBatchConfig,mr=!0;function _p(e,n,t,o){var r=A,i=St.transition;St.transition=null;try{A=1,Vl(e,n,t,o)}finally{A=r,St.transition=i}}function Rp(e,n,t,o){var r=A,i=St.transition;St.transition=null;try{A=4,Vl(e,n,t,o)}finally{A=r,St.transition=i}}function Vl(e,n,t,o){if(mr){var r=qi(e,n,t,o);if(r===null)yi(e,n,o,pr,t),ia(e,o);else if(Pp(r,e,n,t,o))o.stopPropagation();else if(ia(e,o),n&4&&-1<wp.indexOf(e)){for(;r!==null;){var i=bo(r);if(i!==null&&dc(i),i=qi(e,n,t,o),i===null&&yi(e,n,o,pr,t),i===r)break;r=i}r!==null&&o.stopPropagation()}else yi(e,n,o,null,t)}}var pr=null;function qi(e,n,t,o){if(pr=null,e=Ul(o),e=Vn(e),e!==null)if(n=tt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=oc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return pr=e,null}function hc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pp()){case Bl:return 1;case sc:return 4;case cr:case fp:return 16;case ac:return 536870912;default:return 16}default:return 16}}var wn=null,Ql=null,Jo=null;function yc(){if(Jo)return Jo;var e,n=Ql,t=n.length,o,r="value"in wn?wn.value:wn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var l=t-e;for(o=1;o<=l&&n[t-o]===r[i-o];o++);return Jo=r.slice(e,1<o?1-o:void 0)}function Zo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function sa(){return!1}function De(e){function n(t,o,r,i,l){this._reactName=t,this._targetInst=r,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Io:sa,this.isPropagationStopped=sa,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),n}var Mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=De(Mt),Eo=G({},Mt,{view:0,detail:0}),jp=De(Eo),ai,ui,Bt,Lr=G({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bt&&(Bt&&e.type==="mousemove"?(ai=e.screenX-Bt.screenX,ui=e.screenY-Bt.screenY):ui=ai=0,Bt=e),ai)},movementY:function(e){return"movementY"in e?e.movementY:ui}}),aa=De(Lr),Ep=G({},Lr,{dataTransfer:0}),bp=De(Ep),Tp=G({},Eo,{relatedTarget:0}),ci=De(Tp),Np=G({},Mt,{animationName:0,elapsedTime:0,pseudoElement:0}),$p=De(Np),Mp=G({},Mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dp=De(Mp),Lp=G({},Mt,{data:0}),ua=De(Lp),Op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ap(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ip[e])?!!n[e]:!1}function Kl(){return Ap}var Fp=G({},Eo,{key:function(e){if(e.key){var n=Op[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Up=De(Fp),Bp=G({},Lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ca=De(Bp),Wp=G({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Hp=De(Wp),Vp=G({},Mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qp=De(Vp),Yp=G({},Lr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kp=De(Yp),Gp=[9,13,27,32],Gl=cn&&"CompositionEvent"in window,Zt=null;cn&&"documentMode"in document&&(Zt=document.documentMode);var qp=cn&&"TextEvent"in window&&!Zt,vc=cn&&(!Gl||Zt&&8<Zt&&11>=Zt),da=" ",ma=!1;function xc(e,n){switch(e){case"keyup":return Gp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var at=!1;function Xp(e,n){switch(e){case"compositionend":return Cc(n);case"keypress":return n.which!==32?null:(ma=!0,da);case"textInput":return e=n.data,e===da&&ma?null:e;default:return null}}function Jp(e,n){if(at)return e==="compositionend"||!Gl&&xc(e,n)?(e=yc(),Jo=Ql=wn=null,at=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vc&&n.locale!=="ko"?null:n.data;default:return null}}var Zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zp[e.type]:n==="textarea"}function Sc(e,n,t,o){Ju(o),n=fr(n,"onChange"),0<n.length&&(t=new Yl("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var eo=null,po=null;function ef(e){$c(e,0)}function Or(e){var n=dt(e);if(Vu(n))return e}function nf(e,n){if(e==="change")return n}var wc=!1;if(cn){var di;if(cn){var mi="oninput"in document;if(!mi){var fa=document.createElement("div");fa.setAttribute("oninput","return;"),mi=typeof fa.oninput=="function"}di=mi}else di=!1;wc=di&&(!document.documentMode||9<document.documentMode)}function ga(){eo&&(eo.detachEvent("onpropertychange",Pc),po=eo=null)}function Pc(e){if(e.propertyName==="value"&&Or(po)){var n=[];Sc(n,po,e,Ul(e)),tc(ef,n)}}function tf(e,n,t){e==="focusin"?(ga(),eo=n,po=t,eo.attachEvent("onpropertychange",Pc)):e==="focusout"&&ga()}function of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Or(po)}function rf(e,n){if(e==="click")return Or(n)}function lf(e,n){if(e==="input"||e==="change")return Or(n)}function sf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ge=typeof Object.is=="function"?Object.is:sf;function fo(e,n){if(Ge(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var r=t[o];if(!$i.call(n,r)||!Ge(e[r],n[r]))return!1}return!0}function ha(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ya(e,n){var t=ha(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ha(t)}}function kc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _c(){for(var e=window,n=sr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=sr(e.document)}return n}function ql(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function af(e){var n=_c(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&kc(t.ownerDocument.documentElement,t)){if(o!==null&&ql(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(o.start,r);o=o.end===void 0?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=ya(t,i);var l=ya(t,o);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uf=cn&&"documentMode"in document&&11>=document.documentMode,ut=null,Xi=null,no=null,Ji=!1;function va(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ji||ut==null||ut!==sr(o)||(o=ut,"selectionStart"in o&&ql(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&fo(no,o)||(no=o,o=fr(Xi,"onSelect"),0<o.length&&(n=new Yl("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=ut)))}function Ao(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ct={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},pi={},Rc={};cn&&(Rc=document.createElement("div").style,"AnimationEvent"in window||(delete ct.animationend.animation,delete ct.animationiteration.animation,delete ct.animationstart.animation),"TransitionEvent"in window||delete ct.transitionend.transition);function zr(e){if(pi[e])return pi[e];if(!ct[e])return e;var n=ct[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Rc)return pi[e]=n[t];return e}var jc=zr("animationend"),Ec=zr("animationiteration"),bc=zr("animationstart"),Tc=zr("transitionend"),Nc=new Map,xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,n){Nc.set(e,n),nt(n,[e])}for(var fi=0;fi<xa.length;fi++){var gi=xa[fi],cf=gi.toLowerCase(),df=gi[0].toUpperCase()+gi.slice(1);On(cf,"on"+df)}On(jc,"onAnimationEnd");On(Ec,"onAnimationIteration");On(bc,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(Tc,"onTransitionEnd");kt("onMouseEnter",["mouseout","mouseover"]);kt("onMouseLeave",["mouseout","mouseover"]);kt("onPointerEnter",["pointerout","pointerover"]);kt("onPointerLeave",["pointerout","pointerover"]);nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gt));function Ca(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,up(o,n,void 0,e),e.currentTarget=null}function $c(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],r=o.event;o=o.listeners;e:{var i=void 0;if(n)for(var l=o.length-1;0<=l;l--){var s=o[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&r.isPropagationStopped())break e;Ca(r,s,c),i=a}else for(l=0;l<o.length;l++){if(s=o[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&r.isPropagationStopped())break e;Ca(r,s,c),i=a}}}if(ur)throw e=Yi,ur=!1,Yi=null,e}function W(e,n){var t=n[ol];t===void 0&&(t=n[ol]=new Set);var o=e+"__bubble";t.has(o)||(Mc(n,e,2,!1),t.add(o))}function hi(e,n,t){var o=0;n&&(o|=4),Mc(t,e,o,n)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function go(e){if(!e[Fo]){e[Fo]=!0,Fu.forEach(function(t){t!=="selectionchange"&&(mf.has(t)||hi(t,!1,e),hi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fo]||(n[Fo]=!0,hi("selectionchange",!1,n))}}function Mc(e,n,t,o){switch(hc(n)){case 1:var r=_p;break;case 4:r=Rp;break;default:r=Vl}t=r.bind(null,n,t,e),r=void 0,!Qi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function yi(e,n,t,o,r){var i=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var s=o.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(l===4)for(l=o.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;l=l.return}for(;s!==null;){if(l=Vn(s),l===null)return;if(a=l.tag,a===5||a===6){o=i=l;continue e}s=s.parentNode}}o=o.return}tc(function(){var c=i,d=Ul(t),m=[];e:{var f=Nc.get(e);if(f!==void 0){var v=Yl,x=e;switch(e){case"keypress":if(Zo(t)===0)break e;case"keydown":case"keyup":v=Up;break;case"focusin":x="focus",v=ci;break;case"focusout":x="blur",v=ci;break;case"beforeblur":case"afterblur":v=ci;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=aa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=bp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Hp;break;case jc:case Ec:case bc:v=$p;break;case Tc:v=Qp;break;case"scroll":v=jp;break;case"wheel":v=Kp;break;case"copy":case"cut":case"paste":v=Dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ca}var S=(n&4)!==0,P=!S&&e==="scroll",g=S?f!==null?f+"Capture":null:f;S=[];for(var p=c,y;p!==null;){y=p;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,g!==null&&(C=ao(p,g),C!=null&&S.push(ho(p,C,y)))),P)break;p=p.return}0<S.length&&(f=new v(f,x,null,t,d),m.push({event:f,listeners:S}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&t!==Hi&&(x=t.relatedTarget||t.fromElement)&&(Vn(x)||x[dn]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=t.relatedTarget||t.toElement,v=c,x=x?Vn(x):null,x!==null&&(P=tt(x),x!==P||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(S=aa,C="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=ca,C="onPointerLeave",g="onPointerEnter",p="pointer"),P=v==null?f:dt(v),y=x==null?f:dt(x),f=new S(C,p+"leave",v,t,d),f.target=P,f.relatedTarget=y,C=null,Vn(d)===c&&(S=new S(g,p+"enter",x,t,d),S.target=y,S.relatedTarget=P,C=S),P=C,v&&x)n:{for(S=v,g=x,p=0,y=S;y;y=rt(y))p++;for(y=0,C=g;C;C=rt(C))y++;for(;0<p-y;)S=rt(S),p--;for(;0<y-p;)g=rt(g),y--;for(;p--;){if(S===g||g!==null&&S===g.alternate)break n;S=rt(S),g=rt(g)}S=null}else S=null;v!==null&&Sa(m,f,v,S,!1),x!==null&&P!==null&&Sa(m,P,x,S,!0)}}e:{if(f=c?dt(c):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var _=nf;else if(pa(f))if(wc)_=lf;else{_=of;var j=tf}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=rf);if(_&&(_=_(e,c))){Sc(m,_,t,d);break e}j&&j(e,f,c),e==="focusout"&&(j=f._wrapperState)&&j.controlled&&f.type==="number"&&Ai(f,"number",f.value)}switch(j=c?dt(c):window,e){case"focusin":(pa(j)||j.contentEditable==="true")&&(ut=j,Xi=c,no=null);break;case"focusout":no=Xi=ut=null;break;case"mousedown":Ji=!0;break;case"contextmenu":case"mouseup":case"dragend":Ji=!1,va(m,t,d);break;case"selectionchange":if(uf)break;case"keydown":case"keyup":va(m,t,d)}var T;if(Gl)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else at?xc(e,t)&&($="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&($="onCompositionStart");$&&(vc&&t.locale!=="ko"&&(at||$!=="onCompositionStart"?$==="onCompositionEnd"&&at&&(T=yc()):(wn=d,Ql="value"in wn?wn.value:wn.textContent,at=!0)),j=fr(c,$),0<j.length&&($=new ua($,e,null,t,d),m.push({event:$,listeners:j}),T?$.data=T:(T=Cc(t),T!==null&&($.data=T)))),(T=qp?Xp(e,t):Jp(e,t))&&(c=fr(c,"onBeforeInput"),0<c.length&&(d=new ua("onBeforeInput","beforeinput",null,t,d),m.push({event:d,listeners:c}),d.data=T))}$c(m,n)})}function ho(e,n,t){return{instance:e,listener:n,currentTarget:t}}function fr(e,n){for(var t=n+"Capture",o=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=ao(e,t),i!=null&&o.unshift(ho(e,i,r)),i=ao(e,n),i!=null&&o.push(ho(e,i,r))),e=e.return}return o}function rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sa(e,n,t,o,r){for(var i=n._reactName,l=[];t!==null&&t!==o;){var s=t,a=s.alternate,c=s.stateNode;if(a!==null&&a===o)break;s.tag===5&&c!==null&&(s=c,r?(a=ao(t,i),a!=null&&l.unshift(ho(t,a,s))):r||(a=ao(t,i),a!=null&&l.push(ho(t,a,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var pf=/\r\n?/g,ff=/\u0000|\uFFFD/g;function wa(e){return(typeof e=="string"?e:""+e).replace(pf,`
`).replace(ff,"")}function Uo(e,n,t){if(n=wa(n),wa(e)!==n&&t)throw Error(k(425))}function gr(){}var Zi=null,el=null;function nl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var tl=typeof setTimeout=="function"?setTimeout:void 0,gf=typeof clearTimeout=="function"?clearTimeout:void 0,Pa=typeof Promise=="function"?Promise:void 0,hf=typeof queueMicrotask=="function"?queueMicrotask:typeof Pa<"u"?function(e){return Pa.resolve(null).then(e).catch(yf)}:tl;function yf(e){setTimeout(function(){throw e})}function vi(e,n){var t=n,o=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(o===0){e.removeChild(r),mo(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=r}while(t);mo(n)}function En(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ka(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Dt=Math.random().toString(36).slice(2),nn="__reactFiber$"+Dt,yo="__reactProps$"+Dt,dn="__reactContainer$"+Dt,ol="__reactEvents$"+Dt,vf="__reactListeners$"+Dt,xf="__reactHandles$"+Dt;function Vn(e){var n=e[nn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[dn]||t[nn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ka(e);e!==null;){if(t=e[nn])return t;e=ka(e)}return n}e=t,t=e.parentNode}return null}function bo(e){return e=e[nn]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ir(e){return e[yo]||null}var rl=[],mt=-1;function zn(e){return{current:e}}function H(e){0>mt||(e.current=rl[mt],rl[mt]=null,mt--)}function B(e,n){mt++,rl[mt]=e.current,e.current=n}var Ln={},xe=zn(Ln),Re=zn(!1),qn=Ln;function _t(e,n){var t=e.type.contextTypes;if(!t)return Ln;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function je(e){return e=e.childContextTypes,e!=null}function hr(){H(Re),H(xe)}function _a(e,n,t){if(xe.current!==Ln)throw Error(k(168));B(xe,n),B(Re,t)}function Dc(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var r in o)if(!(r in n))throw Error(k(108,tp(e)||"Unknown",r));return G({},t,o)}function yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,qn=xe.current,B(xe,e),B(Re,Re.current),!0}function Ra(e,n,t){var o=e.stateNode;if(!o)throw Error(k(169));t?(e=Dc(e,n,qn),o.__reactInternalMemoizedMergedChildContext=e,H(Re),H(xe),B(xe,e)):H(Re),B(Re,t)}var ln=null,Ar=!1,xi=!1;function Lc(e){ln===null?ln=[e]:ln.push(e)}function Cf(e){Ar=!0,Lc(e)}function In(){if(!xi&&ln!==null){xi=!0;var e=0,n=A;try{var t=ln;for(A=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}ln=null,Ar=!1}catch(r){throw ln!==null&&(ln=ln.slice(e+1)),lc(Bl,In),r}finally{A=n,xi=!1}}return null}var pt=[],ft=0,vr=null,xr=0,Le=[],Oe=0,Xn=null,sn=1,an="";function Wn(e,n){pt[ft++]=xr,pt[ft++]=vr,vr=e,xr=n}function Oc(e,n,t){Le[Oe++]=sn,Le[Oe++]=an,Le[Oe++]=Xn,Xn=e;var o=sn;e=an;var r=32-Ye(o)-1;o&=~(1<<r),t+=1;var i=32-Ye(n)+r;if(30<i){var l=r-r%5;i=(o&(1<<l)-1).toString(32),o>>=l,r-=l,sn=1<<32-Ye(n)+r|t<<r|o,an=i+e}else sn=1<<i|t<<r|o,an=e}function Xl(e){e.return!==null&&(Wn(e,1),Oc(e,1,0))}function Jl(e){for(;e===vr;)vr=pt[--ft],pt[ft]=null,xr=pt[--ft],pt[ft]=null;for(;e===Xn;)Xn=Le[--Oe],Le[Oe]=null,an=Le[--Oe],Le[Oe]=null,sn=Le[--Oe],Le[Oe]=null}var Ne=null,Te=null,V=!1,Qe=null;function zc(e,n){var t=ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ja(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ne=e,Te=En(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ne=e,Te=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Xn!==null?{id:sn,overflow:an}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ne=e,Te=null,!0):!1;default:return!1}}function il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ll(e){if(V){var n=Te;if(n){var t=n;if(!ja(e,n)){if(il(e))throw Error(k(418));n=En(t.nextSibling);var o=Ne;n&&ja(e,n)?zc(o,t):(e.flags=e.flags&-4097|2,V=!1,Ne=e)}}else{if(il(e))throw Error(k(418));e.flags=e.flags&-4097|2,V=!1,Ne=e}}}function Ea(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Bo(e){if(e!==Ne)return!1;if(!V)return Ea(e),V=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!nl(e.type,e.memoizedProps)),n&&(n=Te)){if(il(e))throw Ic(),Error(k(418));for(;n;)zc(e,n),n=En(n.nextSibling)}if(Ea(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Te=En(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Te=null}}else Te=Ne?En(e.stateNode.nextSibling):null;return!0}function Ic(){for(var e=Te;e;)e=En(e.nextSibling)}function Rt(){Te=Ne=null,V=!1}function Zl(e){Qe===null?Qe=[e]:Qe.push(e)}var Sf=fn.ReactCurrentBatchConfig;function Wt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var o=t.stateNode}if(!o)throw Error(k(147,e));var r=o,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var s=r.refs;l===null?delete s[i]:s[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Wo(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ba(e){var n=e._init;return n(e._payload)}function Ac(e){function n(g,p){if(e){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function t(g,p){if(!e)return null;for(;p!==null;)n(g,p),p=p.sibling;return null}function o(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function r(g,p){return g=$n(g,p),g.index=0,g.sibling=null,g}function i(g,p,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,y,C){return p===null||p.tag!==6?(p=Ri(y,g.mode,C),p.return=g,p):(p=r(p,y),p.return=g,p)}function a(g,p,y,C){var _=y.type;return _===st?d(g,p,y.props.children,C,y.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===vn&&ba(_)===p.type)?(C=r(p,y.props),C.ref=Wt(g,p,y),C.return=g,C):(C=lr(y.type,y.key,y.props,null,g.mode,C),C.ref=Wt(g,p,y),C.return=g,C)}function c(g,p,y,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ji(y,g.mode,C),p.return=g,p):(p=r(p,y.children||[]),p.return=g,p)}function d(g,p,y,C,_){return p===null||p.tag!==7?(p=Gn(y,g.mode,C,_),p.return=g,p):(p=r(p,y),p.return=g,p)}function m(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ri(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $o:return y=lr(p.type,p.key,p.props,null,g.mode,y),y.ref=Wt(g,null,p),y.return=g,y;case lt:return p=ji(p,g.mode,y),p.return=g,p;case vn:var C=p._init;return m(g,C(p._payload),y)}if(Yt(p)||It(p))return p=Gn(p,g.mode,y,null),p.return=g,p;Wo(g,p)}return null}function f(g,p,y,C){var _=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:s(g,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $o:return y.key===_?a(g,p,y,C):null;case lt:return y.key===_?c(g,p,y,C):null;case vn:return _=y._init,f(g,p,_(y._payload),C)}if(Yt(y)||It(y))return _!==null?null:d(g,p,y,C,null);Wo(g,y)}return null}function v(g,p,y,C,_){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(y)||null,s(p,g,""+C,_);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case $o:return g=g.get(C.key===null?y:C.key)||null,a(p,g,C,_);case lt:return g=g.get(C.key===null?y:C.key)||null,c(p,g,C,_);case vn:var j=C._init;return v(g,p,y,j(C._payload),_)}if(Yt(C)||It(C))return g=g.get(y)||null,d(p,g,C,_,null);Wo(p,C)}return null}function x(g,p,y,C){for(var _=null,j=null,T=p,$=p=0,w=null;T!==null&&$<y.length;$++){T.index>$?(w=T,T=null):w=T.sibling;var R=f(g,T,y[$],C);if(R===null){T===null&&(T=w);break}e&&T&&R.alternate===null&&n(g,T),p=i(R,p,$),j===null?_=R:j.sibling=R,j=R,T=w}if($===y.length)return t(g,T),V&&Wn(g,$),_;if(T===null){for(;$<y.length;$++)T=m(g,y[$],C),T!==null&&(p=i(T,p,$),j===null?_=T:j.sibling=T,j=T);return V&&Wn(g,$),_}for(T=o(g,T);$<y.length;$++)w=v(T,g,$,y[$],C),w!==null&&(e&&w.alternate!==null&&T.delete(w.key===null?$:w.key),p=i(w,p,$),j===null?_=w:j.sibling=w,j=w);return e&&T.forEach(function(E){return n(g,E)}),V&&Wn(g,$),_}function S(g,p,y,C){var _=It(y);if(typeof _!="function")throw Error(k(150));if(y=_.call(y),y==null)throw Error(k(151));for(var j=_=null,T=p,$=p=0,w=null,R=y.next();T!==null&&!R.done;$++,R=y.next()){T.index>$?(w=T,T=null):w=T.sibling;var E=f(g,T,R.value,C);if(E===null){T===null&&(T=w);break}e&&T&&E.alternate===null&&n(g,T),p=i(E,p,$),j===null?_=E:j.sibling=E,j=E,T=w}if(R.done)return t(g,T),V&&Wn(g,$),_;if(T===null){for(;!R.done;$++,R=y.next())R=m(g,R.value,C),R!==null&&(p=i(R,p,$),j===null?_=R:j.sibling=R,j=R);return V&&Wn(g,$),_}for(T=o(g,T);!R.done;$++,R=y.next())R=v(T,g,$,R.value,C),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?$:R.key),p=i(R,p,$),j===null?_=R:j.sibling=R,j=R);return e&&T.forEach(function(D){return n(g,D)}),V&&Wn(g,$),_}function P(g,p,y,C){if(typeof y=="object"&&y!==null&&y.type===st&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case $o:e:{for(var _=y.key,j=p;j!==null;){if(j.key===_){if(_=y.type,_===st){if(j.tag===7){t(g,j.sibling),p=r(j,y.props.children),p.return=g,g=p;break e}}else if(j.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===vn&&ba(_)===j.type){t(g,j.sibling),p=r(j,y.props),p.ref=Wt(g,j,y),p.return=g,g=p;break e}t(g,j);break}else n(g,j);j=j.sibling}y.type===st?(p=Gn(y.props.children,g.mode,C,y.key),p.return=g,g=p):(C=lr(y.type,y.key,y.props,null,g.mode,C),C.ref=Wt(g,p,y),C.return=g,g=C)}return l(g);case lt:e:{for(j=y.key;p!==null;){if(p.key===j)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){t(g,p.sibling),p=r(p,y.children||[]),p.return=g,g=p;break e}else{t(g,p);break}else n(g,p);p=p.sibling}p=ji(y,g.mode,C),p.return=g,g=p}return l(g);case vn:return j=y._init,P(g,p,j(y._payload),C)}if(Yt(y))return x(g,p,y,C);if(It(y))return S(g,p,y,C);Wo(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(t(g,p.sibling),p=r(p,y),p.return=g,g=p):(t(g,p),p=Ri(y,g.mode,C),p.return=g,g=p),l(g)):t(g,p)}return P}var jt=Ac(!0),Fc=Ac(!1),Cr=zn(null),Sr=null,gt=null,es=null;function ns(){es=gt=Sr=null}function ts(e){var n=Cr.current;H(Cr),e._currentValue=n}function sl(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function wt(e,n){Sr=e,es=gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(_e=!0),e.firstContext=null)}function Ae(e){var n=e._currentValue;if(es!==e)if(e={context:e,memoizedValue:n,next:null},gt===null){if(Sr===null)throw Error(k(308));gt=e,Sr.dependencies={lanes:0,firstContext:e}}else gt=gt.next=e;return n}var Qn=null;function os(e){Qn===null?Qn=[e]:Qn.push(e)}function Uc(e,n,t,o){var r=n.interleaved;return r===null?(t.next=t,os(n)):(t.next=r.next,r.next=t),n.interleaved=t,mn(e,o)}function mn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var xn=!1;function rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function un(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function bn(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,I&2){var r=o.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),o.pending=n,mn(e,t)}return r=o.interleaved,r===null?(n.next=n,os(o)):(n.next=r.next,r.next=n),o.interleaved=n,mn(e,t)}function er(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Wl(e,t)}}function Ta(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function wr(e,n,t,o){var r=e.updateQueue;xn=!1;var i=r.firstBaseUpdate,l=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=a))}if(i!==null){var m=r.baseState;l=0,d=c=a=null,s=i;do{var f=s.lane,v=s.eventTime;if((o&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,S=s;switch(f=n,v=t,S.tag){case 1:if(x=S.payload,typeof x=="function"){m=x.call(v,m,f);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,f=typeof x=="function"?x.call(v,m,f):x,f==null)break e;m=G({},m,f);break e;case 2:xn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[s]:f.push(s))}else v={eventTime:v,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=v,a=m):d=d.next=v,l|=f;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;f=s,s=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(a=m),r.baseState=a,r.firstBaseUpdate=c,r.lastBaseUpdate=d,n=r.shared.interleaved,n!==null){r=n;do l|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);Zn|=l,e.lanes=l,e.memoizedState=m}}function Na(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],r=o.callback;if(r!==null){if(o.callback=null,o=t,typeof r!="function")throw Error(k(191,r));r.call(o)}}}var To={},on=zn(To),vo=zn(To),xo=zn(To);function Yn(e){if(e===To)throw Error(k(174));return e}function is(e,n){switch(B(xo,n),B(vo,e),B(on,To),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ui(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ui(n,e)}H(on),B(on,n)}function Et(){H(on),H(vo),H(xo)}function Wc(e){Yn(xo.current);var n=Yn(on.current),t=Ui(n,e.type);n!==t&&(B(vo,e),B(on,t))}function ls(e){vo.current===e&&(H(on),H(vo))}var Y=zn(0);function Pr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ci=[];function ss(){for(var e=0;e<Ci.length;e++)Ci[e]._workInProgressVersionPrimary=null;Ci.length=0}var nr=fn.ReactCurrentDispatcher,Si=fn.ReactCurrentBatchConfig,Jn=0,K=null,le=null,ce=null,kr=!1,to=!1,Co=0,wf=0;function he(){throw Error(k(321))}function as(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ge(e[t],n[t]))return!1;return!0}function us(e,n,t,o,r,i){if(Jn=i,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,nr.current=e===null||e.memoizedState===null?Rf:jf,e=t(o,r),to){i=0;do{if(to=!1,Co=0,25<=i)throw Error(k(301));i+=1,ce=le=null,n.updateQueue=null,nr.current=Ef,e=t(o,r)}while(to)}if(nr.current=_r,n=le!==null&&le.next!==null,Jn=0,ce=le=K=null,kr=!1,n)throw Error(k(300));return e}function cs(){var e=Co!==0;return Co=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?K.memoizedState=ce=e:ce=ce.next=e,ce}function Fe(){if(le===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var n=ce===null?K.memoizedState:ce.next;if(n!==null)ce=n,le=e;else{if(e===null)throw Error(k(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ce===null?K.memoizedState=ce=e:ce=ce.next=e}return ce}function So(e,n){return typeof n=="function"?n(e):n}function wi(e){var n=Fe(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var o=le,r=o.baseQueue,i=t.pending;if(i!==null){if(r!==null){var l=r.next;r.next=i.next,i.next=l}o.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,o=o.baseState;var s=l=null,a=null,c=i;do{var d=c.lane;if((Jn&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,l=o):a=a.next=m,K.lanes|=d,Zn|=d}c=c.next}while(c!==null&&c!==i);a===null?l=o:a.next=s,Ge(o,n.memoizedState)||(_e=!0),n.memoizedState=o,n.baseState=l,n.baseQueue=a,t.lastRenderedState=o}if(e=t.interleaved,e!==null){r=e;do i=r.lane,K.lanes|=i,Zn|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Pi(e){var n=Fe(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var o=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var l=r=r.next;do i=e(i,l.action),l=l.next;while(l!==r);Ge(i,n.memoizedState)||(_e=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,o]}function Hc(){}function Vc(e,n){var t=K,o=Fe(),r=n(),i=!Ge(o.memoizedState,r);if(i&&(o.memoizedState=r,_e=!0),o=o.queue,ds(Kc.bind(null,t,o,e),[e]),o.getSnapshot!==n||i||ce!==null&&ce.memoizedState.tag&1){if(t.flags|=2048,wo(9,Yc.bind(null,t,o,r,n),void 0,null),de===null)throw Error(k(349));Jn&30||Qc(t,n,r)}return r}function Qc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Yc(e,n,t,o){n.value=t,n.getSnapshot=o,Gc(n)&&qc(e)}function Kc(e,n,t){return t(function(){Gc(n)&&qc(e)})}function Gc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ge(e,t)}catch{return!0}}function qc(e){var n=mn(e,1);n!==null&&Ke(n,e,1,-1)}function $a(e){var n=Ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:e},n.queue=e,e=e.dispatch=_f.bind(null,K,e),[n.memoizedState,e]}function wo(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function Xc(){return Fe().memoizedState}function tr(e,n,t,o){var r=Ze();K.flags|=e,r.memoizedState=wo(1|n,t,void 0,o===void 0?null:o)}function Fr(e,n,t,o){var r=Fe();o=o===void 0?null:o;var i=void 0;if(le!==null){var l=le.memoizedState;if(i=l.destroy,o!==null&&as(o,l.deps)){r.memoizedState=wo(n,t,i,o);return}}K.flags|=e,r.memoizedState=wo(1|n,t,i,o)}function Ma(e,n){return tr(8390656,8,e,n)}function ds(e,n){return Fr(2048,8,e,n)}function Jc(e,n){return Fr(4,2,e,n)}function Zc(e,n){return Fr(4,4,e,n)}function ed(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function nd(e,n,t){return t=t!=null?t.concat([e]):null,Fr(4,4,ed.bind(null,n,e),t)}function ms(){}function td(e,n){var t=Fe();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&as(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function od(e,n){var t=Fe();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&as(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function rd(e,n,t){return Jn&21?(Ge(t,n)||(t=uc(),K.lanes|=t,Zn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=t)}function Pf(e,n){var t=A;A=t!==0&&4>t?t:4,e(!0);var o=Si.transition;Si.transition={};try{e(!1),n()}finally{A=t,Si.transition=o}}function id(){return Fe().memoizedState}function kf(e,n,t){var o=Nn(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},ld(e))sd(n,t);else if(t=Uc(e,n,t,o),t!==null){var r=Se();Ke(t,e,o,r),ad(t,n,o)}}function _f(e,n,t){var o=Nn(e),r={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(ld(e))sd(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,s=i(l,t);if(r.hasEagerState=!0,r.eagerState=s,Ge(s,l)){var a=n.interleaved;a===null?(r.next=r,os(n)):(r.next=a.next,a.next=r),n.interleaved=r;return}}catch{}finally{}t=Uc(e,n,r,o),t!==null&&(r=Se(),Ke(t,e,o,r),ad(t,n,o))}}function ld(e){var n=e.alternate;return e===K||n!==null&&n===K}function sd(e,n){to=kr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ad(e,n,t){if(t&4194240){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Wl(e,t)}}var _r={readContext:Ae,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Rf={readContext:Ae,useCallback:function(e,n){return Ze().memoizedState=[e,n===void 0?null:n],e},useContext:Ae,useEffect:Ma,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,tr(4194308,4,ed.bind(null,n,e),t)},useLayoutEffect:function(e,n){return tr(4194308,4,e,n)},useInsertionEffect:function(e,n){return tr(4,2,e,n)},useMemo:function(e,n){var t=Ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=Ze();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=kf.bind(null,K,e),[o.memoizedState,e]},useRef:function(e){var n=Ze();return e={current:e},n.memoizedState=e},useState:$a,useDebugValue:ms,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=$a(!1),n=e[0];return e=Pf.bind(null,e[1]),Ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=K,r=Ze();if(V){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),de===null)throw Error(k(349));Jn&30||Qc(o,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,Ma(Kc.bind(null,o,i,e),[e]),o.flags|=2048,wo(9,Yc.bind(null,o,i,t,n),void 0,null),t},useId:function(){var e=Ze(),n=de.identifierPrefix;if(V){var t=an,o=sn;t=(o&~(1<<32-Ye(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=Co++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=wf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},jf={readContext:Ae,useCallback:td,useContext:Ae,useEffect:ds,useImperativeHandle:nd,useInsertionEffect:Jc,useLayoutEffect:Zc,useMemo:od,useReducer:wi,useRef:Xc,useState:function(){return wi(So)},useDebugValue:ms,useDeferredValue:function(e){var n=Fe();return rd(n,le.memoizedState,e)},useTransition:function(){var e=wi(So)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:Hc,useSyncExternalStore:Vc,useId:id,unstable_isNewReconciler:!1},Ef={readContext:Ae,useCallback:td,useContext:Ae,useEffect:ds,useImperativeHandle:nd,useInsertionEffect:Jc,useLayoutEffect:Zc,useMemo:od,useReducer:Pi,useRef:Xc,useState:function(){return Pi(So)},useDebugValue:ms,useDeferredValue:function(e){var n=Fe();return le===null?n.memoizedState=e:rd(n,le.memoizedState,e)},useTransition:function(){var e=Pi(So)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:Hc,useSyncExternalStore:Vc,useId:id,unstable_isNewReconciler:!1};function We(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function al(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ur={isMounted:function(e){return(e=e._reactInternals)?tt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=Se(),r=Nn(e),i=un(o,r);i.payload=n,t!=null&&(i.callback=t),n=bn(e,i,r),n!==null&&(Ke(n,e,r,o),er(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=Se(),r=Nn(e),i=un(o,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=bn(e,i,r),n!==null&&(Ke(n,e,r,o),er(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Se(),o=Nn(e),r=un(t,o);r.tag=2,n!=null&&(r.callback=n),n=bn(e,r,o),n!==null&&(Ke(n,e,o,t),er(n,e,o))}};function Da(e,n,t,o,r,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,l):n.prototype&&n.prototype.isPureReactComponent?!fo(t,o)||!fo(r,i):!0}function ud(e,n,t){var o=!1,r=Ln,i=n.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(r=je(n)?qn:xe.current,o=n.contextTypes,i=(o=o!=null)?_t(e,r):Ln),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ur,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function La(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&Ur.enqueueReplaceState(n,n.state,null)}function ul(e,n,t,o){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},rs(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=Ae(i):(i=je(n)?qn:xe.current,r.context=_t(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(al(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Ur.enqueueReplaceState(r,r.state,null),wr(e,t,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function bt(e,n){try{var t="",o=n;do t+=np(o),o=o.return;while(o);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function ki(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function cl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var bf=typeof WeakMap=="function"?WeakMap:Map;function cd(e,n,t){t=un(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){jr||(jr=!0,Cl=o),cl(e,n)},t}function dd(e,n,t){t=un(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=n.value;t.payload=function(){return o(r)},t.callback=function(){cl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){cl(e,n),typeof o!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Oa(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new bf;var r=new Set;o.set(n,r)}else r=o.get(n),r===void 0&&(r=new Set,o.set(n,r));r.has(t)||(r.add(t),e=Wf.bind(null,e,n,t),n.then(e,e))}function za(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ia(e,n,t,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=un(-1,1),n.tag=2,bn(t,n,1))),t.lanes|=1),e)}var Tf=fn.ReactCurrentOwner,_e=!1;function Ce(e,n,t,o){n.child=e===null?Fc(n,null,t,o):jt(n,e.child,t,o)}function Aa(e,n,t,o,r){t=t.render;var i=n.ref;return wt(n,r),o=us(e,n,t,o,i,r),t=cs(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,pn(e,n,r)):(V&&t&&Xl(n),n.flags|=1,Ce(e,n,o,r),n.child)}function Fa(e,n,t,o,r){if(e===null){var i=t.type;return typeof i=="function"&&!Cs(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,md(e,n,i,o,r)):(e=lr(t.type,null,o,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:fo,t(l,o)&&e.ref===n.ref)return pn(e,n,r)}return n.flags|=1,e=$n(i,o),e.ref=n.ref,e.return=n,n.child=e}function md(e,n,t,o,r){if(e!==null){var i=e.memoizedProps;if(fo(i,o)&&e.ref===n.ref)if(_e=!1,n.pendingProps=o=i,(e.lanes&r)!==0)e.flags&131072&&(_e=!0);else return n.lanes=e.lanes,pn(e,n,r)}return dl(e,n,t,o,r)}function pd(e,n,t){var o=n.pendingProps,r=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(yt,be),be|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(yt,be),be|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:t,B(yt,be),be|=o}else i!==null?(o=i.baseLanes|t,n.memoizedState=null):o=t,B(yt,be),be|=o;return Ce(e,n,r,t),n.child}function fd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function dl(e,n,t,o,r){var i=je(t)?qn:xe.current;return i=_t(n,i),wt(n,r),t=us(e,n,t,o,i,r),o=cs(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,pn(e,n,r)):(V&&o&&Xl(n),n.flags|=1,Ce(e,n,t,r),n.child)}function Ua(e,n,t,o,r){if(je(t)){var i=!0;yr(n)}else i=!1;if(wt(n,r),n.stateNode===null)or(e,n),ud(n,t,o),ul(n,t,o,r),o=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var a=l.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=je(t)?qn:xe.current,c=_t(n,c));var d=t.getDerivedStateFromProps,m=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==o||a!==c)&&La(n,l,o,c),xn=!1;var f=n.memoizedState;l.state=f,wr(n,o,l,r),a=n.memoizedState,s!==o||f!==a||Re.current||xn?(typeof d=="function"&&(al(n,t,d,o),a=n.memoizedState),(s=xn||Da(n,t,s,o,f,a,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=a),l.props=o,l.state=a,l.context=c,o=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{l=n.stateNode,Bc(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:We(n.type,s),l.props=c,m=n.pendingProps,f=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ae(a):(a=je(t)?qn:xe.current,a=_t(n,a));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||f!==a)&&La(n,l,o,a),xn=!1,f=n.memoizedState,l.state=f,wr(n,o,l,r);var x=n.memoizedState;s!==m||f!==x||Re.current||xn?(typeof v=="function"&&(al(n,t,v,o),x=n.memoizedState),(c=xn||Da(n,t,c,o,f,x,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,x,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=x),l.props=o,l.state=x,l.context=a,o=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),o=!1)}return ml(e,n,t,o,i,r)}function ml(e,n,t,o,r,i){fd(e,n);var l=(n.flags&128)!==0;if(!o&&!l)return r&&Ra(n,t,!1),pn(e,n,i);o=n.stateNode,Tf.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&l?(n.child=jt(n,e.child,null,i),n.child=jt(n,null,s,i)):Ce(e,n,s,i),n.memoizedState=o.state,r&&Ra(n,t,!0),n.child}function gd(e){var n=e.stateNode;n.pendingContext?_a(e,n.pendingContext,n.pendingContext!==n.context):n.context&&_a(e,n.context,!1),is(e,n.containerInfo)}function Ba(e,n,t,o,r){return Rt(),Zl(r),n.flags|=256,Ce(e,n,t,o),n.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function hd(e,n,t){var o=n.pendingProps,r=Y.current,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),B(Y,r&1),e===null)return ll(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=o.children,e=o.fallback,i?(o=n.mode,i=n.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Hr(l,o,0,null),e=Gn(e,o,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=fl(t),n.memoizedState=pl,e):ps(n,l));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return Nf(e,n,l,o,s,r,t);if(i){i=o.fallback,l=n.mode,r=e.child,s=r.sibling;var a={mode:"hidden",children:o.children};return!(l&1)&&n.child!==r?(o=n.child,o.childLanes=0,o.pendingProps=a,n.deletions=null):(o=$n(r,a),o.subtreeFlags=r.subtreeFlags&14680064),s!==null?i=$n(s,i):(i=Gn(i,l,t,null),i.flags|=2),i.return=n,o.return=n,o.sibling=i,n.child=o,o=i,i=n.child,l=e.child.memoizedState,l=l===null?fl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=pl,o}return i=e.child,e=i.sibling,o=$n(i,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function ps(e,n){return n=Hr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ho(e,n,t,o){return o!==null&&Zl(o),jt(n,e.child,null,t),e=ps(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Nf(e,n,t,o,r,i,l){if(t)return n.flags&256?(n.flags&=-257,o=ki(Error(k(422))),Ho(e,n,l,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=o.fallback,r=n.mode,o=Hr({mode:"visible",children:o.children},r,0,null),i=Gn(i,r,l,null),i.flags|=2,o.return=n,i.return=n,o.sibling=i,n.child=o,n.mode&1&&jt(n,e.child,null,l),n.child.memoizedState=fl(l),n.memoizedState=pl,i);if(!(n.mode&1))return Ho(e,n,l,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var s=o.dgst;return o=s,i=Error(k(419)),o=ki(i,o,void 0),Ho(e,n,l,o)}if(s=(l&e.childLanes)!==0,_e||s){if(o=de,o!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|l)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,mn(e,r),Ke(o,e,r,-1))}return xs(),o=ki(Error(k(421))),Ho(e,n,l,o)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Hf.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,Te=En(r.nextSibling),Ne=n,V=!0,Qe=null,e!==null&&(Le[Oe++]=sn,Le[Oe++]=an,Le[Oe++]=Xn,sn=e.id,an=e.overflow,Xn=n),n=ps(n,o.children),n.flags|=4096,n)}function Wa(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),sl(e.return,n,t)}function _i(e,n,t,o,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=t,i.tailMode=r)}function yd(e,n,t){var o=n.pendingProps,r=o.revealOrder,i=o.tail;if(Ce(e,n,o.children,t),o=Y.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wa(e,t,n);else if(e.tag===19)Wa(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(B(Y,o),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Pr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),_i(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Pr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}_i(n,!0,t,null,i);break;case"together":_i(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function or(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function pn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Zn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=$n(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=$n(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function $f(e,n,t){switch(n.tag){case 3:gd(n),Rt();break;case 5:Wc(n);break;case 1:je(n.type)&&yr(n);break;case 4:is(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,r=n.memoizedProps.value;B(Cr,o._currentValue),o._currentValue=r;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(B(Y,Y.current&1),n.flags|=128,null):t&n.child.childLanes?hd(e,n,t):(B(Y,Y.current&1),e=pn(e,n,t),e!==null?e.sibling:null);B(Y,Y.current&1);break;case 19:if(o=(t&n.childLanes)!==0,e.flags&128){if(o)return yd(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),B(Y,Y.current),o)break;return null;case 22:case 23:return n.lanes=0,pd(e,n,t)}return pn(e,n,t)}var vd,gl,xd,Cd;vd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};gl=function(){};xd=function(e,n,t,o){var r=e.memoizedProps;if(r!==o){e=n.stateNode,Yn(on.current);var i=null;switch(t){case"input":r=zi(e,r),o=zi(e,o),i=[];break;case"select":r=G({},r,{value:void 0}),o=G({},o,{value:void 0}),i=[];break;case"textarea":r=Fi(e,r),o=Fi(e,o),i=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=gr)}Bi(t,o);var l;t=null;for(c in r)if(!o.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var s=r[c];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(lo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in o){var a=o[c];if(s=r!=null?r[c]:void 0,o.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(i||(i=[]),i.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(lo.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&W("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Cd=function(e,n,t,o){t!==o&&(n.flags|=4)};function Ht(e,n){if(!V)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function Mf(e,n,t){var o=n.pendingProps;switch(Jl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(n),null;case 1:return je(n.type)&&hr(),ye(n),null;case 3:return o=n.stateNode,Et(),H(Re),H(xe),ss(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Bo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Qe!==null&&(Pl(Qe),Qe=null))),gl(e,n),ye(n),null;case 5:ls(n);var r=Yn(xo.current);if(t=n.type,e!==null&&n.stateNode!=null)xd(e,n,t,o,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(k(166));return ye(n),null}if(e=Yn(on.current),Bo(n)){o=n.stateNode,t=n.type;var i=n.memoizedProps;switch(o[nn]=n,o[yo]=i,e=(n.mode&1)!==0,t){case"dialog":W("cancel",o),W("close",o);break;case"iframe":case"object":case"embed":W("load",o);break;case"video":case"audio":for(r=0;r<Gt.length;r++)W(Gt[r],o);break;case"source":W("error",o);break;case"img":case"image":case"link":W("error",o),W("load",o);break;case"details":W("toggle",o);break;case"input":Js(o,i),W("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},W("invalid",o);break;case"textarea":ea(o,i),W("invalid",o)}Bi(t,i),r=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?o.textContent!==s&&(i.suppressHydrationWarning!==!0&&Uo(o.textContent,s,e),r=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Uo(o.textContent,s,e),r=["children",""+s]):lo.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",o)}switch(t){case"input":Mo(o),Zs(o,i,!0);break;case"textarea":Mo(o),na(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=gr)}o=r,n.updateQueue=o,o!==null&&(n.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ku(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(t,{is:o.is}):(e=l.createElement(t),t==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,t),e[nn]=n,e[yo]=o,vd(e,n,!1,!1),n.stateNode=e;e:{switch(l=Wi(t,o),t){case"dialog":W("cancel",e),W("close",e),r=o;break;case"iframe":case"object":case"embed":W("load",e),r=o;break;case"video":case"audio":for(r=0;r<Gt.length;r++)W(Gt[r],e);r=o;break;case"source":W("error",e),r=o;break;case"img":case"image":case"link":W("error",e),W("load",e),r=o;break;case"details":W("toggle",e),r=o;break;case"input":Js(e,o),r=zi(e,o),W("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=G({},o,{value:void 0}),W("invalid",e);break;case"textarea":ea(e,o),r=Fi(e,o),W("invalid",e);break;default:r=o}Bi(t,r),s=r;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Xu(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Gu(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&so(e,a):typeof a=="number"&&so(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lo.hasOwnProperty(i)?a!=null&&i==="onScroll"&&W("scroll",e):a!=null&&zl(e,i,a,l))}switch(t){case"input":Mo(e),Zs(e,o,!1);break;case"textarea":Mo(e),na(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Dn(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?vt(e,!!o.multiple,i,!1):o.defaultValue!=null&&vt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=gr)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ye(n),null;case 6:if(e&&n.stateNode!=null)Cd(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(k(166));if(t=Yn(xo.current),Yn(on.current),Bo(n)){if(o=n.stateNode,t=n.memoizedProps,o[nn]=n,(i=o.nodeValue!==t)&&(e=Ne,e!==null))switch(e.tag){case 3:Uo(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Uo(o.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[nn]=n,n.stateNode=o}return ye(n),null;case 13:if(H(Y),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Te!==null&&n.mode&1&&!(n.flags&128))Ic(),Rt(),n.flags|=98560,i=!1;else if(i=Bo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[nn]=n}else Rt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ye(n),i=!1}else Qe!==null&&(Pl(Qe),Qe=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?se===0&&(se=3):xs())),n.updateQueue!==null&&(n.flags|=4),ye(n),null);case 4:return Et(),gl(e,n),e===null&&go(n.stateNode.containerInfo),ye(n),null;case 10:return ts(n.type._context),ye(n),null;case 17:return je(n.type)&&hr(),ye(n),null;case 19:if(H(Y),i=n.memoizedState,i===null)return ye(n),null;if(o=(n.flags&128)!==0,l=i.rendering,l===null)if(o)Ht(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Pr(e),l!==null){for(n.flags|=128,Ht(i,!1),o=l.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)i=t,e=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B(Y,Y.current&1|2),n.child}e=e.sibling}i.tail!==null&&Z()>Tt&&(n.flags|=128,o=!0,Ht(i,!1),n.lanes=4194304)}else{if(!o)if(e=Pr(l),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ht(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!V)return ye(n),null}else 2*Z()-i.renderingStartTime>Tt&&t!==1073741824&&(n.flags|=128,o=!0,Ht(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Z(),n.sibling=null,t=Y.current,B(Y,o?t&1|2:t&1),n):(ye(n),null);case 22:case 23:return vs(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?be&1073741824&&(ye(n),n.subtreeFlags&6&&(n.flags|=8192)):ye(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Df(e,n){switch(Jl(n),n.tag){case 1:return je(n.type)&&hr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Et(),H(Re),H(xe),ss(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ls(n),null;case 13:if(H(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Rt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(Y),null;case 4:return Et(),null;case 10:return ts(n.type._context),null;case 22:case 23:return vs(),null;case 24:return null;default:return null}}var Vo=!1,ve=!1,Lf=typeof WeakSet=="function"?WeakSet:Set,N=null;function ht(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){X(e,n,o)}else t.current=null}function hl(e,n,t){try{t()}catch(o){X(e,n,o)}}var Ha=!1;function Of(e,n){if(Zi=mr,e=_c(),ql(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,a=-1,c=0,d=0,m=e,f=null;n:for(;;){for(var v;m!==t||r!==0&&m.nodeType!==3||(s=l+r),m!==i||o!==0&&m.nodeType!==3||(a=l+o),m.nodeType===3&&(l+=m.nodeValue.length),(v=m.firstChild)!==null;)f=m,m=v;for(;;){if(m===e)break n;if(f===t&&++c===r&&(s=l),f===i&&++d===o&&(a=l),(v=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=v}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(el={focusedElem:e,selectionRange:t},mr=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,P=x.memoizedState,g=n.stateNode,p=g.getSnapshotBeforeUpdate(n.elementType===n.type?S:We(n.type,S),P);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(C){X(n,n.return,C)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return x=Ha,Ha=!1,x}function oo(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&hl(n,t,i)}r=r.next}while(r!==o)}}function Br(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function yl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Sd(e){var n=e.alternate;n!==null&&(e.alternate=null,Sd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[nn],delete n[yo],delete n[ol],delete n[vf],delete n[xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wd(e){return e.tag===5||e.tag===3||e.tag===4}function Va(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=gr));else if(o!==4&&(e=e.child,e!==null))for(vl(e,n,t),e=e.sibling;e!==null;)vl(e,n,t),e=e.sibling}function xl(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(xl(e,n,t),e=e.sibling;e!==null;)xl(e,n,t),e=e.sibling}var me=null,Ve=!1;function hn(e,n,t){for(t=t.child;t!==null;)Pd(e,n,t),t=t.sibling}function Pd(e,n,t){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Dr,t)}catch{}switch(t.tag){case 5:ve||ht(t,n);case 6:var o=me,r=Ve;me=null,hn(e,n,t),me=o,Ve=r,me!==null&&(Ve?(e=me,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):me.removeChild(t.stateNode));break;case 18:me!==null&&(Ve?(e=me,t=t.stateNode,e.nodeType===8?vi(e.parentNode,t):e.nodeType===1&&vi(e,t),mo(e)):vi(me,t.stateNode));break;case 4:o=me,r=Ve,me=t.stateNode.containerInfo,Ve=!0,hn(e,n,t),me=o,Ve=r;break;case 0:case 11:case 14:case 15:if(!ve&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var i=r,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&hl(t,n,l),r=r.next}while(r!==o)}hn(e,n,t);break;case 1:if(!ve&&(ht(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(s){X(t,n,s)}hn(e,n,t);break;case 21:hn(e,n,t);break;case 22:t.mode&1?(ve=(o=ve)||t.memoizedState!==null,hn(e,n,t),ve=o):hn(e,n,t);break;default:hn(e,n,t)}}function Qa(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Lf),n.forEach(function(o){var r=Vf.bind(null,e,o);t.has(o)||(t.add(o),o.then(r,r))})}}function Be(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var r=t[o];try{var i=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:me=s.stateNode,Ve=!1;break e;case 3:me=s.stateNode.containerInfo,Ve=!0;break e;case 4:me=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(me===null)throw Error(k(160));Pd(i,l,r),me=null,Ve=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(c){X(r,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)kd(n,e),n=n.sibling}function kd(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(n,e),Je(e),o&4){try{oo(3,e,e.return),Br(3,e)}catch(S){X(e,e.return,S)}try{oo(5,e,e.return)}catch(S){X(e,e.return,S)}}break;case 1:Be(n,e),Je(e),o&512&&t!==null&&ht(t,t.return);break;case 5:if(Be(n,e),Je(e),o&512&&t!==null&&ht(t,t.return),e.flags&32){var r=e.stateNode;try{so(r,"")}catch(S){X(e,e.return,S)}}if(o&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Qu(r,i),Wi(s,l);var c=Wi(s,i);for(l=0;l<a.length;l+=2){var d=a[l],m=a[l+1];d==="style"?Xu(r,m):d==="dangerouslySetInnerHTML"?Gu(r,m):d==="children"?so(r,m):zl(r,d,m,c)}switch(s){case"input":Ii(r,i);break;case"textarea":Yu(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?vt(r,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?vt(r,!!i.multiple,i.defaultValue,!0):vt(r,!!i.multiple,i.multiple?[]:"",!1))}r[yo]=i}catch(S){X(e,e.return,S)}}break;case 6:if(Be(n,e),Je(e),o&4){if(e.stateNode===null)throw Error(k(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(S){X(e,e.return,S)}}break;case 3:if(Be(n,e),Je(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{mo(n.containerInfo)}catch(S){X(e,e.return,S)}break;case 4:Be(n,e),Je(e);break;case 13:Be(n,e),Je(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(hs=Z())),o&4&&Qa(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ve=(c=ve)||d,Be(n,e),ve=c):Be(n,e),Je(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(m=N=d;N!==null;){switch(f=N,v=f.child,f.tag){case 0:case 11:case 14:case 15:oo(4,f,f.return);break;case 1:ht(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){o=f,t=f.return;try{n=o,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(S){X(o,t,S)}}break;case 5:ht(f,f.return);break;case 22:if(f.memoizedState!==null){Ka(m);continue}}v!==null?(v.return=f,N=v):Ka(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{r=m.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=qu("display",l))}catch(S){X(e,e.return,S)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(S){X(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(n,e),Je(e),o&4&&Qa(e);break;case 21:break;default:Be(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(wd(t)){var o=t;break e}t=t.return}throw Error(k(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(so(r,""),o.flags&=-33);var i=Va(e);xl(e,i,r);break;case 3:case 4:var l=o.stateNode.containerInfo,s=Va(e);vl(e,s,l);break;default:throw Error(k(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zf(e,n,t){N=e,_d(e)}function _d(e,n,t){for(var o=(e.mode&1)!==0;N!==null;){var r=N,i=r.child;if(r.tag===22&&o){var l=r.memoizedState!==null||Vo;if(!l){var s=r.alternate,a=s!==null&&s.memoizedState!==null||ve;s=Vo;var c=ve;if(Vo=l,(ve=a)&&!c)for(N=r;N!==null;)l=N,a=l.child,l.tag===22&&l.memoizedState!==null?Ga(r):a!==null?(a.return=l,N=a):Ga(r);for(;i!==null;)N=i,_d(i),i=i.sibling;N=r,Vo=s,ve=c}Ya(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,N=i):Ya(e)}}function Ya(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ve||Br(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!ve)if(t===null)o.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);o.componentDidUpdate(r,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Na(n,i,o);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Na(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&mo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ve||n.flags&512&&yl(n)}catch(f){X(n,n.return,f)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function Ka(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function Ga(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Br(4,n)}catch(a){X(n,t,a)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var r=n.return;try{o.componentDidMount()}catch(a){X(n,r,a)}}var i=n.return;try{yl(n)}catch(a){X(n,i,a)}break;case 5:var l=n.return;try{yl(n)}catch(a){X(n,l,a)}}}catch(a){X(n,n.return,a)}if(n===e){N=null;break}var s=n.sibling;if(s!==null){s.return=n.return,N=s;break}N=n.return}}var If=Math.ceil,Rr=fn.ReactCurrentDispatcher,fs=fn.ReactCurrentOwner,Ie=fn.ReactCurrentBatchConfig,I=0,de=null,oe=null,pe=0,be=0,yt=zn(0),se=0,Po=null,Zn=0,Wr=0,gs=0,ro=null,ke=null,hs=0,Tt=1/0,rn=null,jr=!1,Cl=null,Tn=null,Qo=!1,Pn=null,Er=0,io=0,Sl=null,rr=-1,ir=0;function Se(){return I&6?Z():rr!==-1?rr:rr=Z()}function Nn(e){return e.mode&1?I&2&&pe!==0?pe&-pe:Sf.transition!==null?(ir===0&&(ir=uc()),ir):(e=A,e!==0||(e=window.event,e=e===void 0?16:hc(e.type)),e):1}function Ke(e,n,t,o){if(50<io)throw io=0,Sl=null,Error(k(185));jo(e,t,o),(!(I&2)||e!==de)&&(e===de&&(!(I&2)&&(Wr|=t),se===4&&Sn(e,pe)),Ee(e,o),t===1&&I===0&&!(n.mode&1)&&(Tt=Z()+500,Ar&&In()))}function Ee(e,n){var t=e.callbackNode;Cp(e,n);var o=dr(e,e===de?pe:0);if(o===0)t!==null&&ra(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&ra(t),n===1)e.tag===0?Cf(qa.bind(null,e)):Lc(qa.bind(null,e)),hf(function(){!(I&6)&&In()}),t=null;else{switch(cc(o)){case 1:t=Bl;break;case 4:t=sc;break;case 16:t=cr;break;case 536870912:t=ac;break;default:t=cr}t=Md(t,Rd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Rd(e,n){if(rr=-1,ir=0,I&6)throw Error(k(327));var t=e.callbackNode;if(Pt()&&e.callbackNode!==t)return null;var o=dr(e,e===de?pe:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=br(e,o);else{n=o;var r=I;I|=2;var i=Ed();(de!==e||pe!==n)&&(rn=null,Tt=Z()+500,Kn(e,n));do try{Uf();break}catch(s){jd(e,s)}while(!0);ns(),Rr.current=i,I=r,oe!==null?n=0:(de=null,pe=0,n=se)}if(n!==0){if(n===2&&(r=Ki(e),r!==0&&(o=r,n=wl(e,r))),n===1)throw t=Po,Kn(e,0),Sn(e,o),Ee(e,Z()),t;if(n===6)Sn(e,o);else{if(r=e.current.alternate,!(o&30)&&!Af(r)&&(n=br(e,o),n===2&&(i=Ki(e),i!==0&&(o=i,n=wl(e,i))),n===1))throw t=Po,Kn(e,0),Sn(e,o),Ee(e,Z()),t;switch(e.finishedWork=r,e.finishedLanes=o,n){case 0:case 1:throw Error(k(345));case 2:Hn(e,ke,rn);break;case 3:if(Sn(e,o),(o&130023424)===o&&(n=hs+500-Z(),10<n)){if(dr(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){Se(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=tl(Hn.bind(null,e,ke,rn),n);break}Hn(e,ke,rn);break;case 4:if(Sn(e,o),(o&4194240)===o)break;for(n=e.eventTimes,r=-1;0<o;){var l=31-Ye(o);i=1<<l,l=n[l],l>r&&(r=l),o&=~i}if(o=r,o=Z()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*If(o/1960))-o,10<o){e.timeoutHandle=tl(Hn.bind(null,e,ke,rn),o);break}Hn(e,ke,rn);break;case 5:Hn(e,ke,rn);break;default:throw Error(k(329))}}}return Ee(e,Z()),e.callbackNode===t?Rd.bind(null,e):null}function wl(e,n){var t=ro;return e.current.memoizedState.isDehydrated&&(Kn(e,n).flags|=256),e=br(e,n),e!==2&&(n=ke,ke=t,n!==null&&Pl(n)),e}function Pl(e){ke===null?ke=e:ke.push.apply(ke,e)}function Af(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var r=t[o],i=r.getSnapshot;r=r.value;try{if(!Ge(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sn(e,n){for(n&=~gs,n&=~Wr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ye(n),o=1<<t;e[t]=-1,n&=~o}}function qa(e){if(I&6)throw Error(k(327));Pt();var n=dr(e,0);if(!(n&1))return Ee(e,Z()),null;var t=br(e,n);if(e.tag!==0&&t===2){var o=Ki(e);o!==0&&(n=o,t=wl(e,o))}if(t===1)throw t=Po,Kn(e,0),Sn(e,n),Ee(e,Z()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Hn(e,ke,rn),Ee(e,Z()),null}function ys(e,n){var t=I;I|=1;try{return e(n)}finally{I=t,I===0&&(Tt=Z()+500,Ar&&In())}}function et(e){Pn!==null&&Pn.tag===0&&!(I&6)&&Pt();var n=I;I|=1;var t=Ie.transition,o=A;try{if(Ie.transition=null,A=1,e)return e()}finally{A=o,Ie.transition=t,I=n,!(I&6)&&In()}}function vs(){be=yt.current,H(yt)}function Kn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,gf(t)),oe!==null)for(t=oe.return;t!==null;){var o=t;switch(Jl(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&hr();break;case 3:Et(),H(Re),H(xe),ss();break;case 5:ls(o);break;case 4:Et();break;case 13:H(Y);break;case 19:H(Y);break;case 10:ts(o.type._context);break;case 22:case 23:vs()}t=t.return}if(de=e,oe=e=$n(e.current,null),pe=be=n,se=0,Po=null,gs=Wr=Zn=0,ke=ro=null,Qn!==null){for(n=0;n<Qn.length;n++)if(t=Qn[n],o=t.interleaved,o!==null){t.interleaved=null;var r=o.next,i=t.pending;if(i!==null){var l=i.next;i.next=r,o.next=l}t.pending=o}Qn=null}return e}function jd(e,n){do{var t=oe;try{if(ns(),nr.current=_r,kr){for(var o=K.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}kr=!1}if(Jn=0,ce=le=K=null,to=!1,Co=0,fs.current=null,t===null||t.return===null){se=1,Po=n,oe=null;break}e:{var i=e,l=t.return,s=t,a=n;if(n=pe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=s,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=za(l);if(v!==null){v.flags&=-257,Ia(v,l,s,i,n),v.mode&1&&Oa(i,c,n),n=v,a=c;var x=n.updateQueue;if(x===null){var S=new Set;S.add(a),n.updateQueue=S}else x.add(a);break e}else{if(!(n&1)){Oa(i,c,n),xs();break e}a=Error(k(426))}}else if(V&&s.mode&1){var P=za(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ia(P,l,s,i,n),Zl(bt(a,s));break e}}i=a=bt(a,s),se!==4&&(se=2),ro===null?ro=[i]:ro.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=cd(i,a,n);Ta(i,g);break e;case 1:s=a;var p=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Tn===null||!Tn.has(y)))){i.flags|=65536,n&=-n,i.lanes|=n;var C=dd(i,s,n);Ta(i,C);break e}}i=i.return}while(i!==null)}Td(t)}catch(_){n=_,oe===t&&t!==null&&(oe=t=t.return);continue}break}while(!0)}function Ed(){var e=Rr.current;return Rr.current=_r,e===null?_r:e}function xs(){(se===0||se===3||se===2)&&(se=4),de===null||!(Zn&268435455)&&!(Wr&268435455)||Sn(de,pe)}function br(e,n){var t=I;I|=2;var o=Ed();(de!==e||pe!==n)&&(rn=null,Kn(e,n));do try{Ff();break}catch(r){jd(e,r)}while(!0);if(ns(),I=t,Rr.current=o,oe!==null)throw Error(k(261));return de=null,pe=0,se}function Ff(){for(;oe!==null;)bd(oe)}function Uf(){for(;oe!==null&&!dp();)bd(oe)}function bd(e){var n=$d(e.alternate,e,be);e.memoizedProps=e.pendingProps,n===null?Td(e):oe=n,fs.current=null}function Td(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Df(t,n),t!==null){t.flags&=32767,oe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,oe=null;return}}else if(t=Mf(t,n,be),t!==null){oe=t;return}if(n=n.sibling,n!==null){oe=n;return}oe=n=e}while(n!==null);se===0&&(se=5)}function Hn(e,n,t){var o=A,r=Ie.transition;try{Ie.transition=null,A=1,Bf(e,n,t,o)}finally{Ie.transition=r,A=o}return null}function Bf(e,n,t,o){do Pt();while(Pn!==null);if(I&6)throw Error(k(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Sp(e,i),e===de&&(oe=de=null,pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Qo||(Qo=!0,Md(cr,function(){return Pt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ie.transition,Ie.transition=null;var l=A;A=1;var s=I;I|=4,fs.current=null,Of(e,t),kd(t,e),af(el),mr=!!Zi,el=Zi=null,e.current=t,zf(t),mp(),I=s,A=l,Ie.transition=i}else e.current=t;if(Qo&&(Qo=!1,Pn=e,Er=r),i=e.pendingLanes,i===0&&(Tn=null),gp(t.stateNode),Ee(e,Z()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],o(r.value,{componentStack:r.stack,digest:r.digest});if(jr)throw jr=!1,e=Cl,Cl=null,e;return Er&1&&e.tag!==0&&Pt(),i=e.pendingLanes,i&1?e===Sl?io++:(io=0,Sl=e):io=0,In(),null}function Pt(){if(Pn!==null){var e=cc(Er),n=Ie.transition,t=A;try{if(Ie.transition=null,A=16>e?16:e,Pn===null)var o=!1;else{if(e=Pn,Pn=null,Er=0,I&6)throw Error(k(331));var r=I;for(I|=4,N=e.current;N!==null;){var i=N,l=i.child;if(N.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(N=c;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:oo(8,d,i)}var m=d.child;if(m!==null)m.return=d,N=m;else for(;N!==null;){d=N;var f=d.sibling,v=d.return;if(Sd(d),d===c){N=null;break}if(f!==null){f.return=v,N=f;break}N=v}}}var x=i.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}N=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,N=l;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:oo(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,N=g;break e}N=i.return}}var p=e.current;for(N=p;N!==null;){l=N;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,N=y;else e:for(l=p;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Br(9,s)}}catch(_){X(s,s.return,_)}if(s===l){N=null;break e}var C=s.sibling;if(C!==null){C.return=s.return,N=C;break e}N=s.return}}if(I=r,In(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Dr,e)}catch{}o=!0}return o}finally{A=t,Ie.transition=n}}return!1}function Xa(e,n,t){n=bt(t,n),n=cd(e,n,1),e=bn(e,n,1),n=Se(),e!==null&&(jo(e,1,n),Ee(e,n))}function X(e,n,t){if(e.tag===3)Xa(e,e,t);else for(;n!==null;){if(n.tag===3){Xa(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Tn===null||!Tn.has(o))){e=bt(t,e),e=dd(n,e,1),n=bn(n,e,1),e=Se(),n!==null&&(jo(n,1,e),Ee(n,e));break}}n=n.return}}function Wf(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=Se(),e.pingedLanes|=e.suspendedLanes&t,de===e&&(pe&t)===t&&(se===4||se===3&&(pe&130023424)===pe&&500>Z()-hs?Kn(e,0):gs|=t),Ee(e,n)}function Nd(e,n){n===0&&(e.mode&1?(n=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):n=1);var t=Se();e=mn(e,n),e!==null&&(jo(e,n,t),Ee(e,t))}function Hf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Nd(e,t)}function Vf(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(k(314))}o!==null&&o.delete(n),Nd(e,t)}var $d;$d=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Re.current)_e=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return _e=!1,$f(e,n,t);_e=!!(e.flags&131072)}else _e=!1,V&&n.flags&1048576&&Oc(n,xr,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;or(e,n),e=n.pendingProps;var r=_t(n,xe.current);wt(n,t),r=us(null,n,o,e,r,t);var i=cs();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,je(o)?(i=!0,yr(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rs(n),r.updater=Ur,n.stateNode=r,r._reactInternals=n,ul(n,o,e,t),n=ml(null,n,o,!0,i,t)):(n.tag=0,V&&i&&Xl(n),Ce(null,n,r,t),n=n.child),n;case 16:o=n.elementType;e:{switch(or(e,n),e=n.pendingProps,r=o._init,o=r(o._payload),n.type=o,r=n.tag=Yf(o),e=We(o,e),r){case 0:n=dl(null,n,o,e,t);break e;case 1:n=Ua(null,n,o,e,t);break e;case 11:n=Aa(null,n,o,e,t);break e;case 14:n=Fa(null,n,o,We(o.type,e),t);break e}throw Error(k(306,o,""))}return n;case 0:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:We(o,r),dl(e,n,o,r,t);case 1:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:We(o,r),Ua(e,n,o,r,t);case 3:e:{if(gd(n),e===null)throw Error(k(387));o=n.pendingProps,i=n.memoizedState,r=i.element,Bc(e,n),wr(n,o,null,t);var l=n.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=bt(Error(k(423)),n),n=Ba(e,n,o,t,r);break e}else if(o!==r){r=bt(Error(k(424)),n),n=Ba(e,n,o,t,r);break e}else for(Te=En(n.stateNode.containerInfo.firstChild),Ne=n,V=!0,Qe=null,t=Fc(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Rt(),o===r){n=pn(e,n,t);break e}Ce(e,n,o,t)}n=n.child}return n;case 5:return Wc(n),e===null&&ll(n),o=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,l=r.children,nl(o,r)?l=null:i!==null&&nl(o,i)&&(n.flags|=32),fd(e,n),Ce(e,n,l,t),n.child;case 6:return e===null&&ll(n),null;case 13:return hd(e,n,t);case 4:return is(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=jt(n,null,o,t):Ce(e,n,o,t),n.child;case 11:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:We(o,r),Aa(e,n,o,r,t);case 7:return Ce(e,n,n.pendingProps,t),n.child;case 8:return Ce(e,n,n.pendingProps.children,t),n.child;case 12:return Ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,r=n.pendingProps,i=n.memoizedProps,l=r.value,B(Cr,o._currentValue),o._currentValue=l,i!==null)if(Ge(i.value,l)){if(i.children===r.children&&!Re.current){n=pn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===o){if(i.tag===1){a=un(-1,t&-t),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),sl(i.return,t,n),s.lanes|=t;break}a=a.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),sl(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ce(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,o=n.pendingProps.children,wt(n,t),r=Ae(r),o=o(r),n.flags|=1,Ce(e,n,o,t),n.child;case 14:return o=n.type,r=We(o,n.pendingProps),r=We(o.type,r),Fa(e,n,o,r,t);case 15:return md(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:We(o,r),or(e,n),n.tag=1,je(o)?(e=!0,yr(n)):e=!1,wt(n,t),ud(n,o,r),ul(n,o,r,t),ml(null,n,o,!0,e,t);case 19:return yd(e,n,t);case 22:return pd(e,n,t)}throw Error(k(156,n.tag))};function Md(e,n){return lc(e,n)}function Qf(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,n,t,o){return new Qf(e,n,t,o)}function Cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yf(e){if(typeof e=="function")return Cs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Al)return 11;if(e===Fl)return 14}return 2}function $n(e,n){var t=e.alternate;return t===null?(t=ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function lr(e,n,t,o,r,i){var l=2;if(o=e,typeof e=="function")Cs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case st:return Gn(t.children,r,i,n);case Il:l=8,r|=8;break;case Mi:return e=ze(12,t,n,r|2),e.elementType=Mi,e.lanes=i,e;case Di:return e=ze(13,t,n,r),e.elementType=Di,e.lanes=i,e;case Li:return e=ze(19,t,n,r),e.elementType=Li,e.lanes=i,e;case Wu:return Hr(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uu:l=10;break e;case Bu:l=9;break e;case Al:l=11;break e;case Fl:l=14;break e;case vn:l=16,o=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=ze(l,t,n,r),n.elementType=e,n.type=o,n.lanes=i,n}function Gn(e,n,t,o){return e=ze(7,e,o,n),e.lanes=t,e}function Hr(e,n,t,o){return e=ze(22,e,o,n),e.elementType=Wu,e.lanes=t,e.stateNode={isHidden:!1},e}function Ri(e,n,t){return e=ze(6,e,null,n),e.lanes=t,e}function ji(e,n,t){return n=ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Kf(e,n,t,o,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=si(0),this.expirationTimes=si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ss(e,n,t,o,r,i,l,s,a){return e=new Kf(e,n,t,s,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=ze(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},rs(i),e}function Gf(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lt,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function Dd(e){if(!e)return Ln;e=e._reactInternals;e:{if(tt(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(je(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(je(t))return Dc(e,t,n)}return n}function Ld(e,n,t,o,r,i,l,s,a){return e=Ss(t,o,!0,e,r,i,l,s,a),e.context=Dd(null),t=e.current,o=Se(),r=Nn(t),i=un(o,r),i.callback=n??null,bn(t,i,r),e.current.lanes=r,jo(e,r,o),Ee(e,o),e}function Vr(e,n,t,o){var r=n.current,i=Se(),l=Nn(r);return t=Dd(t),n.context===null?n.context=t:n.pendingContext=t,n=un(i,l),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=bn(r,n,l),e!==null&&(Ke(e,r,l,i),er(e,r,l)),l}function Tr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ja(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ws(e,n){Ja(e,n),(e=e.alternate)&&Ja(e,n)}function qf(){return null}var Od=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ps(e){this._internalRoot=e}Qr.prototype.render=Ps.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Vr(e,n,null,null)};Qr.prototype.unmount=Ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;et(function(){Vr(null,e,null,null)}),n[dn]=null}};function Qr(e){this._internalRoot=e}Qr.prototype.unstable_scheduleHydration=function(e){if(e){var n=pc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Cn.length&&n!==0&&n<Cn[t].priority;t++);Cn.splice(t,0,e),t===0&&gc(e)}};function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Za(){}function Xf(e,n,t,o,r){if(r){if(typeof o=="function"){var i=o;o=function(){var c=Tr(l);i.call(c)}}var l=Ld(n,o,e,0,null,!1,!1,"",Za);return e._reactRootContainer=l,e[dn]=l.current,go(e.nodeType===8?e.parentNode:e),et(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var s=o;o=function(){var c=Tr(a);s.call(c)}}var a=Ss(e,0,!1,null,null,!1,!1,"",Za);return e._reactRootContainer=a,e[dn]=a.current,go(e.nodeType===8?e.parentNode:e),et(function(){Vr(n,a,t,o)}),a}function Kr(e,n,t,o,r){var i=t._reactRootContainer;if(i){var l=i;if(typeof r=="function"){var s=r;r=function(){var a=Tr(l);s.call(a)}}Vr(n,l,e,r)}else l=Xf(t,n,e,r,o);return Tr(l)}dc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Kt(n.pendingLanes);t!==0&&(Wl(n,t|1),Ee(n,Z()),!(I&6)&&(Tt=Z()+500,In()))}break;case 13:et(function(){var o=mn(e,1);if(o!==null){var r=Se();Ke(o,e,1,r)}}),ws(e,1)}};Hl=function(e){if(e.tag===13){var n=mn(e,134217728);if(n!==null){var t=Se();Ke(n,e,134217728,t)}ws(e,134217728)}};mc=function(e){if(e.tag===13){var n=Nn(e),t=mn(e,n);if(t!==null){var o=Se();Ke(t,e,n,o)}ws(e,n)}};pc=function(){return A};fc=function(e,n){var t=A;try{return A=e,n()}finally{A=t}};Vi=function(e,n,t){switch(n){case"input":if(Ii(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var r=Ir(o);if(!r)throw Error(k(90));Vu(o),Ii(o,r)}}}break;case"textarea":Yu(e,t);break;case"select":n=t.value,n!=null&&vt(e,!!t.multiple,n,!1)}};ec=ys;nc=et;var Jf={usingClientEntryPoint:!1,Events:[bo,dt,Ir,Ju,Zu,ys]},Vt={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zf={bundleType:Vt.bundleType,version:Vt.version,rendererPackageName:Vt.rendererPackageName,rendererConfig:Vt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rc(e),e===null?null:e.stateNode},findFiberByHostInstance:Vt.findFiberByHostInstance||qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{Dr=Yo.inject(Zf),tn=Yo}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jf;Me.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(n))throw Error(k(200));return Gf(e,n,null,t)};Me.createRoot=function(e,n){if(!ks(e))throw Error(k(299));var t=!1,o="",r=Od;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Ss(e,1,!1,null,null,t,!1,o,r),e[dn]=n.current,go(e.nodeType===8?e.parentNode:e),new Ps(n)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=rc(n),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return et(e)};Me.hydrate=function(e,n,t){if(!Yr(n))throw Error(k(200));return Kr(null,e,n,!0,t)};Me.hydrateRoot=function(e,n,t){if(!ks(e))throw Error(k(405));var o=t!=null&&t.hydratedSources||null,r=!1,i="",l=Od;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Ld(n,null,e,1,t??null,r,!1,i,l),e[dn]=n.current,go(e),o)for(e=0;e<o.length;e++)t=o[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Qr(n)};Me.render=function(e,n,t){if(!Yr(n))throw Error(k(200));return Kr(null,e,n,!1,t)};Me.unmountComponentAtNode=function(e){if(!Yr(e))throw Error(k(40));return e._reactRootContainer?(et(function(){Kr(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};Me.unstable_batchedUpdates=ys;Me.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!Yr(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Kr(e,n,t,!1,o)};Me.version="18.3.1-next-f1338f8080-20240426";function zd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zd)}catch(e){console.error(e)}}zd(),zu.exports=Me;var He=zu.exports,Id,eu=He;Id=Ni.createRoot=eu.createRoot,Ni.hydrateRoot=eu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ko.apply(null,arguments)}var kn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(kn||(kn={}));const nu="popstate";function eg(e){e===void 0&&(e={});function n(r,i){let{pathname:l="/",search:s="",hash:a=""}=ot(r.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),kl("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){let l=r.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let a=r.location.href,c=a.indexOf("#");s=c===-1?a:a.slice(0,c)}return s+"#"+(typeof i=="string"?i:Nr(i))}function o(r,i){_s(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return tg(n,t,o,e)}function ee(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function _s(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function ng(){return Math.random().toString(36).substr(2,8)}function tu(e,n){return{usr:e.state,key:e.key,idx:n}}function kl(e,n,t,o){return t===void 0&&(t=null),ko({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?ot(n):n,{state:t,key:n&&n.key||o||ng()})}function Nr(e){let{pathname:n="/",search:t="",hash:o=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function ot(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let o=e.indexOf("?");o>=0&&(n.search=e.substr(o),e=e.substr(0,o)),e&&(n.pathname=e)}return n}function tg(e,n,t,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:i=!1}=o,l=r.history,s=kn.Pop,a=null,c=d();c==null&&(c=0,l.replaceState(ko({},l.state,{idx:c}),""));function d(){return(l.state||{idx:null}).idx}function m(){s=kn.Pop;let P=d(),g=P==null?null:P-c;c=P,a&&a({action:s,location:S.location,delta:g})}function f(P,g){s=kn.Push;let p=kl(S.location,P,g);t&&t(p,P),c=d()+1;let y=tu(p,c),C=S.createHref(p);try{l.pushState(y,"",C)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;r.location.assign(C)}i&&a&&a({action:s,location:S.location,delta:1})}function v(P,g){s=kn.Replace;let p=kl(S.location,P,g);t&&t(p,P),c=d();let y=tu(p,c),C=S.createHref(p);l.replaceState(y,"",C),i&&a&&a({action:s,location:S.location,delta:0})}function x(P){let g=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof P=="string"?P:Nr(P);return p=p.replace(/ $/,"%20"),ee(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let S={get action(){return s},get location(){return e(r,l)},listen(P){if(a)throw new Error("A history only accepts one active listener");return r.addEventListener(nu,m),a=P,()=>{r.removeEventListener(nu,m),a=null}},createHref(P){return n(r,P)},createURL:x,encodeLocation(P){let g=x(P);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(P){return l.go(P)}};return S}var ou;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ou||(ou={}));function og(e,n,t){return t===void 0&&(t="/"),rg(e,n,t)}function rg(e,n,t,o){let r=typeof n=="string"?ot(n):n,i=Rs(r.pathname||"/",t);if(i==null)return null;let l=Ad(e);ig(l);let s=null,a=yg(i);for(let c=0;s==null&&c<l.length;++c)s=fg(l[c],a);return s}function Ad(e,n,t,o){n===void 0&&(n=[]),t===void 0&&(t=[]),o===void 0&&(o="");let r=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(ee(a.relativePath.startsWith(o),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(o.length));let c=Mn([o,a.relativePath]),d=t.concat(a);i.children&&i.children.length>0&&(ee(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ad(i.children,n,d,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:mg(c,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))r(i,l);else for(let a of Fd(i.path))r(i,l,a)}),n}function Fd(e){let n=e.split("/");if(n.length===0)return[];let[t,...o]=n,r=t.endsWith("?"),i=t.replace(/\?$/,"");if(o.length===0)return r?[i,""]:[i];let l=Fd(o.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),r&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function ig(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:pg(n.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const lg=/^:[\w-]+$/,sg=3,ag=2,ug=1,cg=10,dg=-2,ru=e=>e==="*";function mg(e,n){let t=e.split("/"),o=t.length;return t.some(ru)&&(o+=dg),n&&(o+=ag),t.filter(r=>!ru(r)).reduce((r,i)=>r+(lg.test(i)?sg:i===""?ug:cg),o)}function pg(e,n){return e.length===n.length&&e.slice(0,-1).every((o,r)=>o===n[r])?e[e.length-1]-n[n.length-1]:0}function fg(e,n,t){let{routesMeta:o}=e,r={},i="/",l=[];for(let s=0;s<o.length;++s){let a=o[s],c=s===o.length-1,d=i==="/"?n:n.slice(i.length)||"/",m=gg({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},d),f=a.route;if(!m)return null;Object.assign(r,m.params),l.push({params:r,pathname:Mn([i,m.pathname]),pathnameBase:Cg(Mn([i,m.pathnameBase])),route:f}),m.pathnameBase!=="/"&&(i=Mn([i,m.pathnameBase]))}return l}function gg(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,o]=hg(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:o.reduce((c,d,m)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let S=s[m]||"";l=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const x=s[m];return v&&!x?c[f]=void 0:c[f]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function hg(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),_s(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(o.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),o]}function yg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return _s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Rs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,o=e.charAt(t);return o&&o!=="/"?null:e.slice(t)||"/"}function vg(e,n){n===void 0&&(n="/");let{pathname:t,search:o="",hash:r=""}=typeof e=="string"?ot(e):e,i;return t?(t=Ud(t),t.startsWith("/")?i=iu(t.substring(1),"/"):i=iu(t,n)):i=n,{pathname:i,search:Sg(o),hash:wg(r)}}function iu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Ei(e,n,t,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function js(e,n){let t=xg(e);return n?t.map((o,r)=>r===t.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function Es(e,n,t,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=ot(e):(r=ko({},e),ee(!r.pathname||!r.pathname.includes("?"),Ei("?","pathname","search",r)),ee(!r.pathname||!r.pathname.includes("#"),Ei("#","pathname","hash",r)),ee(!r.search||!r.search.includes("#"),Ei("#","search","hash",r)));let i=e===""||r.pathname==="",l=i?"/":r.pathname,s;if(l==null)s=t;else{let m=n.length-1;if(!o&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),m-=1;r.pathname=f.join("/")}s=m>=0?n[m]:"/"}let a=vg(r,s),c=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(c||d)&&(a.pathname+="/"),a}const Ud=e=>e.replace(/\/\/+/g,"/"),Mn=e=>Ud(e.join("/")),Cg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Pg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bd=["post","put","patch","delete"];new Set(Bd);const kg=["get",...Bd];new Set(kg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_o.apply(null,arguments)}const bs=h.createContext(null),_g=h.createContext(null),An=h.createContext(null),Gr=h.createContext(null),gn=h.createContext({outlet:null,matches:[],isDataRoute:!1}),Wd=h.createContext(null);function Rg(e,n){let{relative:t}=n===void 0?{}:n;Lt()||ee(!1);let{basename:o,navigator:r}=h.useContext(An),{hash:i,pathname:l,search:s}=Qd(e,{relative:t}),a=l;return o!=="/"&&(a=l==="/"?o:Mn([o,l])),r.createHref({pathname:a,search:s,hash:i})}function Lt(){return h.useContext(Gr)!=null}function Ot(){return Lt()||ee(!1),h.useContext(Gr).location}function Hd(e){h.useContext(An).static||h.useLayoutEffect(e)}function Vd(){let{isDataRoute:e}=h.useContext(gn);return e?Fg():jg()}function jg(){Lt()||ee(!1);let e=h.useContext(bs),{basename:n,future:t,navigator:o}=h.useContext(An),{matches:r}=h.useContext(gn),{pathname:i}=Ot(),l=JSON.stringify(js(r,t.v7_relativeSplatPath)),s=h.useRef(!1);return Hd(()=>{s.current=!0}),h.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){o.go(c);return}let m=Es(c,JSON.parse(l),i,d.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:Mn([n,m.pathname])),(d.replace?o.replace:o.push)(m,d.state,d)},[n,o,l,i,e])}function Eg(){let{matches:e}=h.useContext(gn),n=e[e.length-1];return n?n.params:{}}function Qd(e,n){let{relative:t}=n===void 0?{}:n,{future:o}=h.useContext(An),{matches:r}=h.useContext(gn),{pathname:i}=Ot(),l=JSON.stringify(js(r,o.v7_relativeSplatPath));return h.useMemo(()=>Es(e,JSON.parse(l),i,t==="path"),[e,l,i,t])}function bg(e,n){return Tg(e,n)}function Tg(e,n,t,o){Lt()||ee(!1);let{navigator:r}=h.useContext(An),{matches:i}=h.useContext(gn),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let c=Ot(),d;if(n){var m;let P=typeof n=="string"?ot(n):n;a==="/"||(m=P.pathname)!=null&&m.startsWith(a)||ee(!1),d=P}else d=c;let f=d.pathname||"/",v=f;if(a!=="/"){let P=a.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(P.length).join("/")}let x=og(e,{pathname:v}),S=Lg(x&&x.map(P=>Object.assign({},P,{params:Object.assign({},s,P.params),pathname:Mn([a,r.encodeLocation?r.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?a:Mn([a,r.encodeLocation?r.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),i,t,o);return n&&S?h.createElement(Gr.Provider,{value:{location:_o({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:kn.Pop}},S):S}function Ng(){let e=Ag(),n=Pg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},n),t?h.createElement("pre",{style:r},t):null,null)}const $g=h.createElement(Ng,null);class Mg extends h.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?h.createElement(gn.Provider,{value:this.props.routeContext},h.createElement(Wd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Dg(e){let{routeContext:n,match:t,children:o}=e,r=h.useContext(bs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),h.createElement(gn.Provider,{value:n},o)}function Lg(e,n,t,o){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),o===void 0&&(o=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=o)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,s=(r=t)==null?void 0:r.errors;if(s!=null){let d=l.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);d>=0||ee(!1),l=l.slice(0,Math.min(l.length,d+1))}let a=!1,c=-1;if(t&&o&&o.v7_partialHydration)for(let d=0;d<l.length;d++){let m=l[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=d),m.route.id){let{loaderData:f,errors:v}=t,x=m.route.loader&&f[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||x){a=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((d,m,f)=>{let v,x=!1,S=null,P=null;t&&(v=s&&m.route.id?s[m.route.id]:void 0,S=m.route.errorElement||$g,a&&(c<0&&f===0?(Ug("route-fallback"),x=!0,P=null):c===f&&(x=!0,P=m.route.hydrateFallbackElement||null)));let g=n.concat(l.slice(0,f+1)),p=()=>{let y;return v?y=S:x?y=P:m.route.Component?y=h.createElement(m.route.Component,null):m.route.element?y=m.route.element:y=d,h.createElement(Dg,{match:m,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:y})};return t&&(m.route.ErrorBoundary||m.route.errorElement||f===0)?h.createElement(Mg,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Yd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yd||{}),Kd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Kd||{});function Og(e){let n=h.useContext(bs);return n||ee(!1),n}function zg(e){let n=h.useContext(_g);return n||ee(!1),n}function Ig(e){let n=h.useContext(gn);return n||ee(!1),n}function Gd(e){let n=Ig(),t=n.matches[n.matches.length-1];return t.route.id||ee(!1),t.route.id}function Ag(){var e;let n=h.useContext(Wd),t=zg(),o=Gd();return n!==void 0?n:(e=t.errors)==null?void 0:e[o]}function Fg(){let{router:e}=Og(Yd.UseNavigateStable),n=Gd(Kd.UseNavigateStable),t=h.useRef(!1);return Hd(()=>{t.current=!0}),h.useCallback(function(r,i){i===void 0&&(i={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,_o({fromRouteId:n},i)))},[e,n])}const lu={};function Ug(e,n,t){lu[e]||(lu[e]=!0)}function Bg(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function _l(e){let{to:n,replace:t,state:o,relative:r}=e;Lt()||ee(!1);let{future:i,static:l}=h.useContext(An),{matches:s}=h.useContext(gn),{pathname:a}=Ot(),c=Vd(),d=Es(n,js(s,i.v7_relativeSplatPath),a,r==="path"),m=JSON.stringify(d);return h.useEffect(()=>c(JSON.parse(m),{replace:t,state:o,relative:r}),[c,m,r,t,o]),null}function qt(e){ee(!1)}function Wg(e){let{basename:n="/",children:t=null,location:o,navigationType:r=kn.Pop,navigator:i,static:l=!1,future:s}=e;Lt()&&ee(!1);let a=n.replace(/^\/*/,"/"),c=h.useMemo(()=>({basename:a,navigator:i,static:l,future:_o({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof o=="string"&&(o=ot(o));let{pathname:d="/",search:m="",hash:f="",state:v=null,key:x="default"}=o,S=h.useMemo(()=>{let P=Rs(d,a);return P==null?null:{location:{pathname:P,search:m,hash:f,state:v,key:x},navigationType:r}},[a,d,m,f,v,x,r]);return S==null?null:h.createElement(An.Provider,{value:c},h.createElement(Gr.Provider,{children:t,value:S}))}function Hg(e){let{children:n,location:t}=e;return bg(Rl(n),t)}new Promise(()=>{});function Rl(e,n){n===void 0&&(n=[]);let t=[];return h.Children.forEach(e,(o,r)=>{if(!h.isValidElement(o))return;let i=[...n,r];if(o.type===h.Fragment){t.push.apply(t,Rl(o.props.children,i));return}o.type!==qt&&ee(!1),!o.props.index||!o.props.children||ee(!1);let l={id:o.props.id||i.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(l.children=Rl(o.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},jl.apply(null,arguments)}function Vg(e,n){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)!==-1)continue;t[o]=e[o]}return t}function Qg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yg(e,n){return e.button===0&&(!n||n==="_self")&&!Qg(e)}const Kg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Gg="6";try{window.__reactRouterVersion=Gg}catch{}const qg="startTransition",su=Bm[qg];function Xg(e){let{basename:n,children:t,future:o,window:r}=e,i=h.useRef();i.current==null&&(i.current=eg({window:r,v5Compat:!0}));let l=i.current,[s,a]=h.useState({action:l.action,location:l.location}),{v7_startTransition:c}=o||{},d=h.useCallback(m=>{c&&su?su(()=>a(m)):a(m)},[a,c]);return h.useLayoutEffect(()=>l.listen(d),[l,d]),h.useEffect(()=>Bg(o),[o]),h.createElement(Wg,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:l,future:o})}const Jg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,El=h.forwardRef(function(n,t){let{onClick:o,relative:r,reloadDocument:i,replace:l,state:s,target:a,to:c,preventScrollReset:d,viewTransition:m}=n,f=Vg(n,Kg),{basename:v}=h.useContext(An),x,S=!1;if(typeof c=="string"&&Zg.test(c)&&(x=c,Jg))try{let y=new URL(window.location.href),C=c.startsWith("//")?new URL(y.protocol+c):new URL(c),_=Rs(C.pathname,v);C.origin===y.origin&&_!=null?c=_+C.search+C.hash:S=!0}catch{}let P=Rg(c,{relative:r}),g=eh(c,{replace:l,state:s,target:a,preventScrollReset:d,relative:r,viewTransition:m});function p(y){o&&o(y),y.defaultPrevented||g(y)}return h.createElement("a",jl({},f,{href:x||P,onClick:S||i?o:p,ref:t,target:a}))});var au;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(au||(au={}));var uu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(uu||(uu={}));function eh(e,n){let{target:t,replace:o,state:r,preventScrollReset:i,relative:l,viewTransition:s}=n===void 0?{}:n,a=Vd(),c=Ot(),d=Qd(e,{relative:l});return h.useCallback(m=>{if(Yg(m,t)){m.preventDefault();let f=o!==void 0?o:Nr(c)===Nr(d);a(e,{replace:f,state:r,preventScrollReset:i,relative:l,viewTransition:s})}},[c,a,d,o,r,t,e,i,l,s])}const nh="https://github.com/frankvane/vane-components";class th extends en.Component{constructor(){super(...arguments);Vs(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?u.jsxs("div",{className:"crash",role:"alert",children:[u.jsx("h3",{children:"这个页面炸了"}),u.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),u.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function qd(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function oh({demos:e,pathname:n}){var a;const{groups:t,entries:o,label:r}=e,i=(a=o.find(c=>n===`/demo/${c.meta.slug}`))==null?void 0:a.meta.group,[l,s]=h.useState(()=>{var d;const c=(d=t[0])==null?void 0:d.key;return Object.fromEntries(t.map(m=>[m.key,m.key===(i??c)]))});return h.useEffect(()=>{i&&s(c=>c[i]?c:{...c,[i]:!0})},[i]),u.jsxs("div",{className:"nav-section",children:[u.jsxs("div",{className:"nav-section-head",children:[u.jsx("span",{children:r}),u.jsxs("code",{children:[o.length," demos"]})]}),t.map(c=>{const d=o.filter(f=>f.meta.group===c.key);if(d.length===0)return null;const m=l[c.key]??!1;return u.jsxs("div",{className:"nav-group",children:[u.jsxs("button",{type:"button",className:`nav-group-head${i===c.key?" is-current":""}`,onClick:()=>s(f=>({...f,[c.key]:!m})),"aria-expanded":m,children:[u.jsx("span",{className:`nav-caret${m?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,u.jsx("code",{children:d.length})]}),m?u.jsx("div",{className:"nav-list",children:d.map(f=>u.jsxs(El,{to:`/demo/${f.meta.slug}`,className:`nav-sub${n===`/demo/${f.meta.slug}`?" is-active":""}`,children:[u.jsx("em",{"aria-hidden":!0,children:qd(e,f)}),f.meta.title]},f.meta.slug))}):null]},c.key)})]})}function rh({demos:e}){var s;const{slug:n}=Eg(),{entries:t,detail:o}=e,r=n?t.find(a=>a.meta.slug===n):void 0,i=(s=t[0])==null?void 0:s.meta.slug;if(!r)return u.jsx(_l,{to:i?`/demo/${i}`:"/",replace:!0});const l=t.indexOf(r)+1;return u.jsx(en.Fragment,{children:o(r,l)},r.meta.slug)}function ih({config:e}){var m,f;const{pathname:n}=Ot(),[t,o]=h.useState(!1),[r,i]=h.useState(!1);h.useEffect(()=>o(!1),[n]);const l=h.useCallback(()=>i(v=>!v),[]);h.useEffect(()=>{const v=x=>{const S=x.target,P=S&&(S.tagName==="INPUT"||S.tagName==="TEXTAREA"||S.isContentEditable);x.key==="Escape"&&o(!1),!P&&(x.key==="g"||x.key==="G")&&!x.metaKey&&!x.ctrlKey&&i(g=>!g)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]);const s=e.demos,a=(m=s.entries[0])==null?void 0:m.meta.slug,c=h.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const v=n.replace(/^\/demo\/?/,""),x=s.entries.find(S=>S.meta.slug===v);return x?`demo ${qd(s,x)} · ${x.meta.title}`:"demo · 逐项示例"},[n,e,s]),d=h.useMemo(()=>e.nav.map((v,x)=>({...v,no:String(x+1).padStart(2,"0")})),[e.nav]);return u.jsxs("div",{className:`shell${t?" is-nav-open":""}${r?" is-guides":""}`,children:[u.jsx("a",{className:"skip-link",href:"#main",onClick:v=>{v.preventDefault();const x=document.getElementById("main");x==null||x.setAttribute("tabindex","-1"),x==null||x.focus(),x==null||x.scrollIntoView({block:"start"})},children:"跳到内容"}),u.jsxs("aside",{className:"side","aria-label":"站点导航",children:[u.jsxs(El,{to:"/",className:"brand",children:[u.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),u.jsxs("span",{children:[u.jsx("strong",{children:e.pkg}),u.jsx("em",{children:e.subtitle})]})]}),u.jsxs("nav",{children:[d.map(v=>u.jsxs(El,{to:v.to,className:`nav-item${n===v.to?" is-active":""}`,"aria-current":n===v.to?"page":void 0,children:[u.jsx("em",{"aria-hidden":!0,children:v.no}),u.jsx("span",{children:v.label}),v.hint?u.jsx("code",{children:v.hint}):null]},v.to)),u.jsx(oh,{demos:e.demos,pathname:n})]}),u.jsxs("div",{className:"side-foot",children:[u.jsx("p",{children:e.footer[0]}),u.jsx("p",{className:"muted",children:e.footer[1]})]})]}),u.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>o(!1)}),u.jsxs("div",{className:"main",id:"main",children:[u.jsxs("header",{className:"topbar",children:[u.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>o(v=>!v),children:u.jsx("span",{"aria-hidden":!0})}),u.jsx("span",{className:"crumb",children:c}),u.jsxs("div",{className:"topbar-right",children:[(f=e.stats)==null?void 0:f.map(v=>u.jsxs("span",{className:"topbar-stat",title:v.title,children:[u.jsx("b",{children:v.value})," ",v.label]},v.label)),u.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":r,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[u.jsx("i",{"aria-hidden":!0}),"guides"]}),u.jsx("a",{className:"topbar-link",href:e.sourceUrl??nh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),u.jsx("div",{className:"guides","aria-hidden":!0}),u.jsx(h.Suspense,{fallback:u.jsx("div",{className:"loading",children:"loading modules…"}),children:u.jsx(th,{children:u.jsxs(Hg,{children:[e.routes.map(v=>u.jsx(qt,{path:v.path,element:v.element},v.path)),u.jsx(qt,{path:"/demo",element:u.jsx(_l,{to:a?`/demo/${a}`:"/",replace:!0})}),u.jsx(qt,{path:"/demo/:slug",element:u.jsx(rh,{demos:e.demos})}),u.jsx(qt,{path:"*",element:u.jsx(_l,{to:"/",replace:!0})})]})})})]})]})}function lh({config:e}){return u.jsx(Xg,{children:u.jsx(ih,{config:e})})}const sh="modulepreload",ah=function(e,n){return new URL(e,n).href},cu={},Ts=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=ah(c,o),c in cu)return;cu[c]=!0;const d=c.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(!!o)for(let x=l.length-1;x>=0;x--){const S=l[x];if(S.href===c&&(!d||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":sh,d||(v.as="script"),v.crossOrigin="",v.href=c,a&&v.setAttribute("nonce",a),document.head.appendChild(v),d)return new Promise((x,S)=>{v.addEventListener("load",x),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return r.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})};function uh(){const e=new Map,n=new Map;let t=0;const o=(s,a)=>{const c=e.get(s);if(c){if(t>=50){console.warn(`[PluginBus] emit depth exceeded: "${s}"`);return}t+=1;for(const d of[...c])try{d(a)}catch(m){console.warn(`[PluginBus] handler error for event "${s}"`,m)}t-=1}},r=(s,a)=>{let c=e.get(s);return c||(c=new Set,e.set(s,c)),c.add(a),()=>{c==null||c.delete(a)}},i=(s,a)=>{const c=d=>{try{a(d)}finally{l(s,c)}};return r(s,c)},l=(s,a)=>{var c;if(!a){e.delete(s);return}(c=e.get(s))==null||c.delete(a)};return{emit:o,on:r,once:i,off:l,getData:s=>n.get(s),setData:(s,a)=>{const c=n.get(s);n.set(s,a),c!==a&&o(s,a)},deleteData:s=>{const a=n.has(s);n.delete(s),a&&o(s,void 0)},hasData:s=>n.has(s),getAll:()=>{const s=Object.create(null);return n.forEach((a,c)=>{s[c]=a}),s},clear:()=>{e.clear(),n.clear()}}}function ch(e){const n=new Map(e.map(s=>[s.name,s])),t=[];for(const s of e)for(const a of s.dependencies??[])n.has(a)||t.push(`${s.name} -> ${a}`);const o=[],r=new Set,i=[...e],l=s=>(s.dependencies??[]).every(a=>r.has(a)||!n.has(a));for(;i.length>0;){const s=i.filter(l);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(c=>c.name).join(" <-> ")}`);let a=s[0];for(const c of s)(c.priority??0)>(a.priority??0)&&(a=c);o.push(a),r.add(a.name),i.splice(i.indexOf(a),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),o}function Xd(e,n){try{return ch(e)}catch(t){return n==null||n(t),e}}async function dh(e,n={}){const{timeout:t=3e3,name:o="anonymous",hook:r="unknown"}=n;if(!t||t<=0)return await e();let i;const l=new Promise((s,a)=>{i=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${o} 的钩子 ${r} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const mh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function ph(e={}){const n=e.logger??console,t=e.sandbox??!0,o=e.timeout??3e3,r=[];let i=[];const l=new Map,s=new Map,a=new Set;let c=0,d=null,m=0;const f=(w,R,E)=>{r.push({plugin:w,hook:R,error:E})},v=()=>{c+=1,d=null},x=(w,R=new Set)=>w.enabled===!1?!1:R.has(w.name)?!0:(R.add(w.name),(w.dependencies??[]).every(E=>{const D=l.get(E);return!D||x(D,R)})),S=()=>{if(d)return d;const w=[...l.values()].filter(R=>x(R)?!0:(f(R.name,"dependencies",new Error("依赖已停用")),!1));return d=Xd(w,R=>f("[order]","resolveDependencyOrder",R))},P=w=>{const R=i.filter(([E])=>!w||E===w).reverse();i=w?i.filter(([E])=>E!==w):[];for(const[,E]of R)try{E()}catch(D){n.warn("[vane] cleanup failed",D)}},g=w=>{var R;return Promise.resolve((R=w.destroy)==null?void 0:R.call(w)).catch(E=>n.warn(`[vane] destroy failed: ${w.name}`,E))},p=async(w,R,E,D,O)=>{var Xe,b;const ne=R==="onUnmount";if(R==="onMount"||ne){if(a.has(w.name)!==ne)return{};ne?a.delete(w.name):a.add(w.name)}const qe=(Xe=w.hooks)==null?void 0:Xe[R];if(typeof qe!="function")return{};let Ue;try{const M=()=>qe(E,...D);Ue=w.sandbox??t?await dh(M,{timeout:w.timeout??o,name:w.name,hook:R}):await M()}catch(M){return O!==c?{}:(f(w.name,R,M),n.warn(`[vane] ${R} failed: ${w.name}`,M),(b=e.onError)==null||b.call(e,w.name,R,M),{stop:R==="onError"})}return O!==c?{}:mh.has(R)&&typeof Ue=="function"?(i.push([w.name,Ue]),{}):{value:Ue}},y=async(w,R,E)=>{const D=c;for(const O of S()){if(D!==c)return;const ne=await p(O,w,R,E,D);if(ne.stop)return;if(ne.value===!1)return!1;if(ne.value!==void 0&&ne.value!==!0)return ne.value}},C=(w,R,...E)=>y(w,R,E),_=w=>{l.get(w.name)&&s.get(w.name)!==w&&(n.warn(`[vane] duplicate plugin, destroy old: ${w.name}`),$(w.name)),l.set(w.name,{...w,enabled:w.enabled??!0}),s.set(w.name,w),a.delete(w.name),v(),w.init&&Promise.resolve(w.init()).catch(R=>{n.warn(`[vane] init failed: ${w.name}`,R)})},j=w=>w.forEach(_),T=w=>{l.delete(w),s.delete(w),a.delete(w),d=null},$=w=>{const R=l.get(w);R&&(v(),P(w),g(R),T(w))};return{register:_,registerAll:j,unregister:$,getPlugin:w=>l.get(w),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(w=>w.enabled!==!1),getExecutionOrder:()=>[...S()],enable:w=>{const R=l.get(w);R&&(R.enabled=!0,d=null)},disable:w=>{const R=l.get(w);R&&(R.enabled=!1,d=null)},has:w=>l.has(w),executeHook:C,clear:()=>{v(),m+=1,P();const w=[...l.values()].map(g);return l.clear(),s.clear(),a.clear(),Promise.all(w).then(()=>{})},getErrors:()=>[...r],align:async(w,R)=>{const E=++m,D=new Map(w.map(O=>[O.name,O]));for(const O of[...l.keys()]){if(E!==m)return;if(s.get(O)===D.get(O))continue;const ne=l.get(O);v(),await p(ne,"onUnmount",R,[],c),P(O),await g(ne),T(O)}for(const O of w){if(E!==m)return;s.get(O.name)!==O&&_(O)}},peekOrder:S}}var fh=Object.defineProperty,gh=(e,n,t)=>n in e?fh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,hh=(e,n,t)=>gh(e,n+"",t);class yh extends en.Component{constructor(){super(...arguments),hh(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidUpdate(n){var r,i;const t=n.resetKeys??[],o=this.props.resetKeys??[];this.state.error&&(t.length!==o.length||t.some((l,s)=>!Object.is(l,o[s])))&&((i=(r=this.props).onReset)==null||i.call(r),this.setState({error:null}))}componentDidCatch(n,t){var o,r;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(r=(o=this.props).onError)==null||r.call(o,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let Ko=null;function vh(e=!1){if(Ko&&!e)return Ko;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(r),l=/Mobile|Android|iPhone/i.test(r),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Ko={type:i?"tablet":l?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:n,viewportHeight:t,isTouchDevice:s,isRetina:o>=2},Ko}function du(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>Object.is(e[r],n[r]))}function xh(e){const{plugins:n,props:t,data:o,initialState:r,containerRef:i,enableDebug:l=!1,managerOptions:s,extendContext:a}=e,c=h.useRef(null),d=i??c,m=h.useRef(null);m.current||(m.current=ph(s));const f=m.current,v=h.useRef(null);v.current||(v.current=uh());const x=v.current,S=h.useRef(new Map),[P,g]=h.useState(r??{}),[,p]=h.useState(0),y=h.useCallback(()=>p(F=>F+1),[]),C=h.useMemo(()=>vh(),[]),_=h.useRef(t);du(_.current,t)||(_.current=t);const j=_.current,T=h.useRef(o);du(T.current,o)||(T.current=o);const $=T.current,w=h.useRef(null),R=h.useMemo(()=>{const F={props:j,data:$,bus:x,refs:{container:d,getContainer:()=>d.current},state:P,setState:U=>g(ae=>({...ae,...U})),shared:S.current,deviceInfo:C,forceUpdate:y,getSize:()=>{const U=d.current;return U?{width:U.offsetWidth,height:U.offsetHeight}:{width:0,height:0}},logger:console};return a?a(F):F},[j,$,P,C,x,a]);h.useLayoutEffect(()=>{w.current=R},[R]);const E=h.useRef(n),D=E.current;D!==n&&(D.length!==n.length||n.some((F,U)=>F!==D[U]))&&(E.current=n);const O=E.current,ne=h.useRef(0);h.useLayoutEffect(()=>{const F=++ne.current,U=w.current;return f.align(O,U).then(()=>{ne.current===F&&(l&&console.debug("[vane/plugin-core] plugins registered:",O.map(ae=>ae.name).join("|")),f.executeHook("onMount",U))}),()=>{ne.current+=1}},[O,f,l]),h.useLayoutEffect(()=>()=>{const F=w.current;if(!f.getExecutionOrder().some(U=>{var ae;return typeof((ae=U.hooks)==null?void 0:ae.onUnmount)=="function"})){f.clear();return}f.executeHook("onUnmount",F).finally(()=>f.clear())},[f]);const qe=f.peekOrder(),Ue=h.useRef([]),Xe=h.useMemo(()=>{const F=new Map(O.map(ue=>[ue.name,ue])),U=O.filter(ue=>{var Fn;return ue.enabled!==!1&&((Fn=f.getPlugin(ue.name))==null?void 0:Fn.enabled)!==!1}),ae=qe.length===U.length?qe.map(ue=>F.get(ue.name)??ue):Xd(U),ge=Ue.current;return ge.length===ae.length&&ae.every((ue,Fn)=>ue===ge[Fn])?ge:(Ue.current=ae,ae)},[O,f,qe]),b=h.useRef(R);b.current=R;const M=h.useCallback((F,U)=>{var ue;const ae=b.current;let ge=U;for(const Fn of Xe){const ni=(ue=Fn.hooks)==null?void 0:ue[F];if(typeof ni=="function")try{ge=F==="transformData"?ni(ae,ge):ni(ge)}catch(wm){(ae.logger??console).warn(`[plugin-core] ${Fn.name}.${F} 执行失败，已跳过`,wm)}}return ge},[Xe]),L=h.useCallback(F=>M("transformProps",F),[M]),Q=h.useCallback(F=>M("transformData",F),[M]),te=h.useCallback((F,...U)=>f.executeHook(F,w.current,...U),[f]);return{manager:f,bus:x,context:R,state:P,setState:R.setState,execute:te,transformProps:L,transformData:Q,orderedPlugins:Xe}}h.createContext(null);const Jd=h.createContext(null);function Ch({orderedPlugins:e,context:n,children:t}){const o=h.useMemo(()=>({orderedPlugins:e,context:n}),[e,n]);return u.jsx(Jd.Provider,{value:o,children:t})}const mu=new WeakMap;function Sh(e,n){let t=mu.get(e);t||(t=new Map,mu.set(e,t));let o=t.get(n);return o||(o=[...e].filter(r=>typeof r.hooks[n]=="function").sort((r,i)=>{var l,s;return(((l=r.config)==null?void 0:l.order)??0)-(((s=i.config)==null?void 0:s.order)??0)||(i.priority??0)-(r.priority??0)}),t.set(n,o)),o}function wh(e,n,t,o){return Sh(e,t).map((r,i)=>{if(r.enabled===!1)return null;try{const l=r.hooks[t],s=o!==void 0?l(n,o):l(n);return s==null?null:u.jsx(yh,{children:s},`comment-slot-${r.name}-${i}`)}catch(l){return console.warn(`[vane-comment] 插件 ${r.name} 的 ${t} 渲染失败`,l),null}}).filter(Boolean)}function Nt(e,n){const t=h.useContext(Jd);return t?wh(t.orderedPlugins,t.context,e,n):[]}function Ns(e){return!e||e.length===0?null:e.map((n,t)=>{switch(n.type){case"text":return u.jsx("span",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:n.value},t);case"emoji":return u.jsx("span",{style:{fontSize:"1.1em",verticalAlign:"middle"},children:n.value},t);case"image":return u.jsx("img",{src:n.url,alt:n.alt??"",style:{maxWidth:120,maxHeight:120,borderRadius:6,margin:"2px 4px 2px 0",verticalAlign:"middle",objectFit:"cover"}},t);case"mention":return u.jsx("span",{style:{color:"#1565c0",fontWeight:500},children:`@${n.name}`},t);default:return null}})}function Zd(e,n=Date.now()){const t=Math.max(0,n-e),o=Math.floor(t/1e3);if(o<60)return"刚刚";const r=Math.floor(o/60);if(r<60)return`${r} 分钟前`;const i=Math.floor(r/60);if(i<24)return`${i} 小时前`;const l=Math.floor(i/24);if(l<30)return`${l} 天前`;const s=Math.floor(l/30);return s<12?`${s} 个月前`:`${Math.floor(s/12)} 年前`}const q=h.forwardRef(function(n,t){const{comments:o,data:r,containerClassName:i,containerStyle:l,containerRefExternal:s,emptyText:a="还没有评论，快来抢沙发~",loading:c,onLoadMore:d}=n,m=h.useRef(null),f=s||m,[,v]=h.useState(0),x=h.useCallback(()=>v(y=>y+1),[]);h.useEffect(()=>{if(typeof window>"u")return;const y=window.setInterval(()=>{typeof document<"u"&&document.visibilityState==="hidden"||x()},6e4);return()=>window.clearInterval(y)},[x]);const S=Nt("renderToolbar"),P=Nt("renderFooter"),g=o??r??[];h.useImperativeHandle(t,()=>({getContainer:()=>f.current,forceUpdate:x,getSize:()=>{const y=f.current;return y?{width:y.offsetWidth,height:y.offsetHeight}:{width:0,height:0}}}),[x]);const p=typeof d=="function"&&!c;return u.jsxs("div",{ref:f,className:`vc-comment ${i||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",fontFamily:"inherit",padding:16,...l},children:[S.length>0&&u.jsx("div",{className:"vc-toolbar",style:{marginBottom:8},children:S}),g.length===0&&!c?u.jsx("div",{className:"vc-empty",style:{padding:"24px 0",textAlign:"center",color:"#6b6b6b"},children:a}):u.jsx("div",{className:"vc-list",style:{display:"flex",flexDirection:"column",gap:14},children:g.map(y=>u.jsx(Ph,{comment:y,depth:0},y.id))}),c&&u.jsx("div",{className:"vc-loading",style:{padding:"12px 0",textAlign:"center",color:"#6b6b6b"},children:"加载中…"}),p&&u.jsx("div",{style:{padding:"12px 0",textAlign:"center"},children:u.jsx("button",{type:"button",onClick:()=>d==null?void 0:d(),style:{border:"1px solid rgba(128,128,128,0.25)",borderRadius:999,padding:"6px 18px",background:"transparent",color:"inherit",cursor:"pointer"},children:"加载更多"})}),P.length>0&&u.jsx("div",{className:"vc-footer",style:{marginTop:12},children:P})]})});q.displayName="CommentCore";function Ph({comment:e,depth:n}){var s;const t=Nt("renderCommentActions",e),o=Nt("renderNested",e),r=e.status??"normal",i=r==="deleted",l=r==="pending";return u.jsxs("div",{className:"vc-item","data-testid":"comment-item",style:{display:"flex",gap:10,paddingLeft:n>0?12:0,borderLeft:n>0?"2px solid rgba(128,128,128,0.15)":void 0},children:[u.jsx(kh,{author:e.author}),u.jsxs("div",{className:"vc-item-body",style:{flex:1,minWidth:0},children:[u.jsxs("div",{className:"vc-meta",style:{display:"flex",alignItems:"center",gap:6,fontSize:13},children:[u.jsx("span",{style:{fontWeight:600},children:e.author.name}),e.author.verified&&u.jsx("span",{title:"认证用户",style:{color:"#1565c0",fontSize:12},children:"✓"}),e.author.badge&&u.jsx("span",{style:{fontSize:11,padding:"1px 6px",borderRadius:4,background:"rgba(128,128,128,0.18)"},children:e.author.badge}),e.pinned&&u.jsx("span",{style:{fontSize:11,padding:"1px 6px",borderRadius:4,color:"#b35c00",border:"1px solid rgba(255,143,0,0.4)"},children:"置顶"}),u.jsx("span",{style:{color:"#6b6b6b",marginLeft:"auto",fontSize:12},children:Zd(e.createdAt)})]}),i?u.jsx("div",{style:{color:"#6b6b6b",fontSize:13,fontStyle:"italic",marginTop:2},children:"该评论已删除"}):l?u.jsx("div",{style:{color:"#6b6b6b",fontSize:13,fontStyle:"italic",marginTop:2},children:"评论审核中"}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"vc-content",style:{fontSize:14,marginTop:2,lineHeight:1.5},children:(s=e.content)!=null&&s.length?Ns(e.content):e.text}),e.images&&e.images.length>0&&u.jsx("div",{className:"vc-images",style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:4},children:e.images.map((a,c)=>u.jsx("img",{src:a.url,alt:a.alt??"",style:{width:88,height:88,objectFit:"cover",borderRadius:6}},c))}),t.length>0&&u.jsx("div",{className:"vc-actions",style:{display:"flex",flexWrap:"wrap",alignItems:"center",columnGap:14,rowGap:6,marginTop:6},children:t}),o.length>0&&u.jsx("div",{className:"vc-nested",style:{marginTop:10},children:o})]})]})]})}function kh({author:e}){return e.avatar?u.jsx("img",{src:e.avatar,alt:e.name,style:{width:36,height:36,borderRadius:"50%",objectFit:"cover",flexShrink:0}}):u.jsx("div",{style:{width:36,height:36,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(128,128,128,0.22)",fontWeight:600},children:e.name.slice(0,1).toUpperCase()})}function _h(e,n){if(!e||n==="custom")return e??[];const t=[...e];switch(n){case"newest":t.sort((o,r)=>r.createdAt-o.createdAt);break;case"oldest":t.sort((o,r)=>o.createdAt-r.createdAt);break;case"mostLiked":t.sort((o,r)=>r.likeCount-o.likeCount||r.createdAt-o.createdAt);break;case"hottest":t.sort((o,r)=>(r.hotScore??0)-(o.hotScore??0)||r.createdAt-o.createdAt);break}return t}const Rh={newest:"最新",oldest:"最早",hottest:"最热",mostLiked:"最赞",custom:"默认"};function J(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:o,enableDebug:r=!1}=t,i=h.forwardRef((l,s)=>{const a=h.useRef(null),c=h.useCallback(C=>{var j;const _=((j=C.state)==null?void 0:j.sortMode)??l.defaultSortMode??"custom";return{...C,sortMode:_,setSortMode:T=>C.setState({sortMode:T})}},[l]),d=xh({plugins:o,props:l,data:l.comments??l.data,containerRef:a,extendContext:c,enableDebug:r}),m=h.useRef(d.context);m.current=d.context;const f=h.useCallback((C,..._)=>d.execute(C,..._),[d.manager]),v=d.transformProps(l);h.useEffect(()=>{f("onMount")},[f]);const x=h.useRef(l);h.useEffect(()=>{const C=x.current;C!==l&&(x.current=l,f("onPropsChange",C,l))},[l,f]);const S=d.context.data,P=d.state,g=h.useMemo(()=>{const C=S??[],_=d.transformData(C)??C,j=d.context.sortMode??l.defaultSortMode??"custom";return _h(_,j)},[S,P,d.transformData,l.defaultSortMode,l.comments,l.data]),p={...v,containerRefExternal:a,debug:v.debug??r,data:g,comments:g,onMount:()=>{var C;(C=v.onMount)==null||C.call(v)},onUnmount:()=>{var C;(C=v.onUnmount)==null||C.call(v)}},y=h.useMemo(()=>({...d.context,comments:g,data:g}),[d.context,g]);return u.jsx(Ch,{orderedPlugins:d.orderedPlugins,context:y,children:u.jsx(e,{ref:s,...p})})});return i.displayName="WithPlugins(CommentCore)",i}const Un=Date.now(),Bn=60*1e3;function zt(e,n){return`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><rect width="36" height="36" rx="18" fill="${n}"/><text x="18" y="23" font-size="16" font-family="sans-serif" fill="#fff" text-anchor="middle">${e}</text></svg>`)}`}function jh(e){return`https://picsum.photos/seed/${e}/200/200`}const re=[{id:"u-rachel",name:"Rachel"},{id:"u-monica",name:"Monica"},{id:"u-phoebe",name:"Phoebe"}],Eh={id:"u-rachel",name:"Rachel",avatar:zt("R","#d4380d"),verified:!0},pu={id:"u-monica",name:"Monica",avatar:zt("M","#2b7de9")},bh={id:"u-phoebe",name:"Phoebe",avatar:zt("P","#389e0d")},Th={id:"u-chandler",name:"Chandler",avatar:zt("C","#722ed1")},Nh={id:"u-joey",name:"Joey",avatar:zt("J","#eb2f96")},$h={id:"u-ross",name:"Ross",avatar:zt("R","#fa8c16"),badge:"UP主"},Mh=[{id:"c-1",author:$h,content:[{type:"text",value:"这期视频的转场也太丝滑了吧，"},{type:"emoji",value:"🔥"},{type:"text",value:" 求个工程文件链接～"}],createdAt:Un-28*Bn,likeCount:128,liked:!1,pinned:!0,replyCount:2,replies:[{id:"c-1-r1",author:Eh,content:[{type:"text",value:"同求，蹲一个工程文件 🤝"}],createdAt:Un-20*Bn,likeCount:12,liked:!1},{id:"c-1-r2",author:pu,content:[{type:"text",value:"工程文件已放评论置顶啦 "},{type:"mention",userId:"u-ross",name:"Ross"}],createdAt:Un-12*Bn,likeCount:31,liked:!0}]},{id:"c-2",author:Th,content:[{type:"text",value:"前排！这个 BGM 叫什么名字？循环了一整天了"}],createdAt:Un-22*Bn,likeCount:64,liked:!0,images:[{url:jh("scene-a"),alt:"名场面截图"}]},{id:"c-3",author:bh,content:[{type:"text",value:"刚发完评论就有人点赞，社交平台的即时反馈真的上头 "},{type:"emoji",value:"😂"}],createdAt:Un-9*Bn,likeCount:7,liked:!1,status:"pending"},{id:"c-4",author:Nh,content:[{type:"text",value:"这条评论已经被我手滑删掉了"}],createdAt:Un-5*Bn,likeCount:0,liked:!1,status:"deleted"},{id:"c-5",author:pu,content:[{type:"text",value:"电商场景实测：这个 SKU 的评论区排序切到「最热」之后，"},{type:"text",value:"优质长评一下子就浮上来了，转化应该会好不少。"}],createdAt:Un-3*Bn,likeCount:42,liked:!1}];function ie(){return JSON.parse(JSON.stringify(Mh))}const Dh={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Lh={slug:"quickstart",title:"最小评论列表",group:"basic",capability:"core-list",intro:"5 行装配出能跑的评论列表：Core 只做数据驱动渲染，能力靠插件增量叠加。",why:"先跑通内核，再按需叠点赞 / 排序 / 楼中楼 / 富编辑——评论区的长尾需求多，全塞进内核只会越来越难改。",plugs:[],props:[],stageHeight:420};function Oh({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useCallback(i=>{t(l=>l.map(s=>s.id===i?{...s,liked:!s.liked,likeCount:(s.likeCount??0)+(s.liked?-1:1)}:s)),e(`点赞 ${i}`)},[e]),r=h.useMemo(()=>J(q,[]),[]);return u.jsxs("div",{style:Dh,children:[u.jsx(r,{comments:n,onLike:o,onReply:(i,l)=>e("回复（需叠 ThreadPlugin）"),onSubmit:i=>e("发布（需叠 RichComposerPlugin）"),onReport:i=>e(`举报 ${i}`),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"这是裸 Core：列表 / 置顶 / 删除态 / 审核态都内置，但点赞、排序、楼中楼、评论框要叠插件才有。"})]})}const zh=Object.freeze(Object.defineProperty({__proto__:null,default:Oh,meta:Lh},Symbol.toStringTag,{value:"Module"})),Ih="LikePlugin",Ah="点赞：每条评论操作行渲染点赞按钮与计数，点击回调 onLike；乐观更新由消费方完成。本地爆裂动画（不依赖全局 overlay 槽）。",Fh="0.1.0",Uh=["ui","互动","点赞"],Bh=[{name:"renderCommentActions",when:"逐条渲染评论的操作行（payload 为当前 comment）",description:"点赞、回复、复制、举报等单条操作按钮"}],Wh=[],Hh="只读取 context 字段（props / state / data），不调用上下文方法",Vh=[{name:"showCount",type:"boolean",default:"true",description:"是否展示点赞数，false 时只显示爱心图标"}],Qh=`const Comment = withCommentPlugins(CommentCore, [
  createLikePlugin(),
]);`,Yh=["爱心图标 + 数字计数","点击局部缩放爆裂动画","回调 onLike(id, nextLiked)，状态真相在消费方数据","楼中楼嵌套回复同样经同一槽获得点赞按钮"],Kh=["视频 / 社交 / 电商评论区点赞","任意需要「赞」互动的评论场景"],Gh=["点赞态不做组件内缓存，消费方更新 comments 数据回流后即时反映。"],em={name:Ih,description:Ah,since:Fh,tags:Uh,events:Bh,methods:Wh,methodsNote:Hh,config:Vh,example:Qh,features:Yh,useCases:Kh,notes:Gh};function qh({comment:e,onLike:n,showCount:t=!0}){const[o,r]=h.useState(!1),i=h.useRef(null),l=!!e.liked,s=e.likeCount;h.useEffect(()=>()=>{i.current!==null&&window.clearTimeout(i.current)},[]);const a=()=>{const c=!l;n==null||n(e.id,c),c&&(r(!0),i.current!==null&&window.clearTimeout(i.current),i.current=window.setTimeout(()=>{i.current=null,r(!1)},450))};return u.jsxs("button",{type:"button",onClick:a,"aria-pressed":l,"data-testid":"comment-like",style:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"transparent",color:l?"#c62828":"inherit",opacity:l?1:.7,cursor:"pointer",fontSize:13,padding:0,flexShrink:0},children:[u.jsx("span",{style:{display:"inline-block",transform:o?"scale(1.4)":"scale(1)",transition:"transform 0.25s ease"},children:l?"❤️":"🤍"}),t&&(s>0?s:"赞")]})}function Xh(e={}){return{name:"LikePlugin",version:"0.1.0",description:"点赞：每条评论的操作行渲染点赞按钮与计数，点击回调 onLike。",priority:40,enabled:!0,hooks:{renderCommentActions:(n,t)=>u.jsx(qh,{comment:t,showCount:e.showCount,onLike:n.props.onLike})}}}const qr=Object.assign(Xh,{meta:em}),Jh={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Zh={slug:"like",title:"点赞",group:"plugin",plugin:"LikePlugin",intro:"操作行加一个点赞按钮，本地计数 + 缩放回弹动效，事件经 onLike 回调。",why:"点赞是评论区最高频的互动；做成插件后，不要点赞的场景（如内部审核台）不装即可。",plugs:[{fn:"createLikePlugin",cfg:"showCount: {{showCount}}",why:"操作行点赞按钮；showCount 控制是否显示计数"}],props:[],controls:[{key:"showCount",label:"显示计数",kind:"switch",init:!0}],stageHeight:420};function ey({cfg:e,log:n}){const[t,o]=h.useState(()=>ie()),r=!!e.showCount,i=h.useCallback(s=>{o(a=>a.map(c=>c.id===s?{...c,liked:!c.liked,likeCount:(c.likeCount??0)+(c.liked?-1:1)}:c)),n(`点赞 ${s}`)},[n]),l=h.useMemo(()=>J(q,[qr({showCount:r})]),[r]);return u.jsxs("div",{style:Jh,children:[u.jsx(l,{comments:t,onLike:i,onReply:(s,a)=>n("回复（需叠 ThreadPlugin）"),onSubmit:s=>n("发布（需叠 RichComposerPlugin）"),onReport:s=>n(`举报 ${s}`),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有点赞被装上：试试点操作行的 ♥，计数和动效都会变，事件写进右侧日志。"})]})}const ny=Object.freeze(Object.defineProperty({__proto__:null,default:ey,meta:Zh},Symbol.toStringTag,{value:"Module"})),ty="SortPlugin",oy="排序：顶栏渲染排序栏（最新/最早/最热/最赞），切换 sortMode 经内核 state 驱动列表重排。实际重排由内核 extendContext 的 sortComments 完成。",ry="0.1.0",iy=["ui","排序","列表"],ly=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"renderToolbar",when:"每次渲染，列表级顶栏槽位",description:"排序栏、计数、筛选开关等列表级工具"}],sy=[{name:"setSortMode",signature:"ctx.setSortMode(mode: SortMode): void",description:"切换列表排序模式（写入内核 state，触发 context 重建与重排）"}],ay=[{name:"modes",type:'"newest" | "oldest" | "hottest" | "mostLiked"[]',default:'["newest","hottest","mostLiked"]',description:"排序栏展示的模式按钮"},{name:"defaultMode",type:"SortMode",default:'"newest"',description:"默认排序（仅在消费方未传 defaultSortMode 时播种）"}],uy=`const Comment = withCommentPlugins(CommentCore, [
  createSortPlugin({ modes: ["hottest","newest"] }),
]);`,cy=["最新 / 最早 / 最热 / 最赞 四种模式","点击切换即时重排（经内核 state，非本地数组）","默认模式播种（尊重消费方 defaultSortMode）","切 mode 同时回调 onSortChange"],dy=["视频评论区（默认最热）","社交评论区（全排序）","电商评论区（最新 / 最赞）"],my=["排序是纯视图变换，由内核 sortComments 幂等完成，对已排数据再排不抖动。"],nm={name:ty,description:oy,since:ry,tags:iy,events:ly,methods:sy,config:ay,example:uy,features:cy,useCases:dy,notes:my};function py({context:e,modes:n}){const t=e.sortMode;return u.jsx("div",{style:{display:"inline-flex",gap:4},children:n.map(o=>{const r=t===o;return u.jsx("button",{type:"button",onClick:()=>{var i,l;e.setSortMode(o),(l=(i=e.props).onSortChange)==null||l.call(i,o)},style:{border:"none",borderRadius:999,padding:"4px 12px",fontSize:13,cursor:"pointer",background:r?"rgba(29,161,242,0.16)":"transparent",color:r?"#1565c0":"inherit",opacity:r?1:.7},children:Rh[o]},o)})})}function fy(e={}){const n=e.modes??["newest","hottest","mostLiked"],t=e.defaultMode??"newest";return{name:"SortPlugin",version:"0.1.0",description:"排序：顶栏渲染排序栏，切换 sortMode 驱动列表重排。",priority:20,enabled:!0,hooks:{onMount:o=>{o.state.sortMode===void 0&&o.props.defaultSortMode===void 0&&o.setState({sortMode:t})},renderToolbar:o=>u.jsx(py,{context:o,modes:n})}}}const Xr=Object.assign(fy,{meta:nm}),gy={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},hy=[{label:"最新",value:"newest"},{label:"最早",value:"oldest"},{label:"最热",value:"hottest"},{label:"点赞最多",value:"mostLiked"}],yy={slug:"sort",title:"排序",group:"plugin",plugin:"SortPlugin",intro:"顶栏排序条：最新 / 最早 / 最热 / 点赞最多，切换即重排，纯函数排序不碰 DOM。",why:"视频和电商都重度依赖排序（最热优先 vs 最新优先），但内部后台只想看最新——做成插件按需装配。",plugs:[{fn:"createSortPlugin",why:"顶栏排序条；默认三种模式，可传 modes 与 defaultMode 裁剪"}],props:['defaultSortMode="newest"'],controls:[{key:"mode",label:"初始排序",kind:"select",init:"newest",options:hy}],stageHeight:420};function vy({cfg:e,log:n}){const[t,o]=h.useState(()=>ie()),r=e.mode||"newest",i=h.useCallback(s=>{o(a=>a.map(c=>c.id===s?{...c,liked:!c.liked,likeCount:(c.likeCount??0)+(c.liked?-1:1)}:c))},[]),l=h.useMemo(()=>J(q,[Xr()]),[]);return u.jsxs("div",{style:gy,children:[u.jsx(l,{comments:t,defaultSortMode:r,onLike:i,onReply:(s,a)=>n("回复（需叠 ThreadPlugin）"),onSubmit:s=>n("发布（需叠 RichComposerPlugin）"),onReport:s=>n(`举报 ${s}`),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"顶栏多了排序条：点「最热」后点赞多的评论会浮上来。初始排序由控件决定。"})]})}const xy=Object.freeze(Object.defineProperty({__proto__:null,default:vy,meta:yy},Symbol.toStringTag,{value:"Module"})),Cy="ThreadPlugin",Sy="楼中楼：顶评论的 renderNested 槽递归渲染嵌套回复，maxDepth 限深折叠 + 展开/收起；操作行的「回复」经 renderCommentActions 唤起内联回复框。嵌套回复同样走同一组槽，子回复也能点赞与继续回复。",wy="0.1.0",Py=["ui","楼中楼","回复","嵌套"],ky=[{name:"renderNested",when:"逐条渲染楼中楼嵌套区（payload 为当前 comment）",description:"展开 / 收起子回复、嵌套列表"},{name:"renderCommentActions",when:"逐条渲染评论的操作行（payload 为当前 comment）",description:"点赞、回复、复制、举报等单条操作按钮"}],_y=[],Ry="只读取 context 字段（props / state / data），不调用上下文方法",jy=[{name:"maxDepth",type:"number",default:"3",description:"最大嵌套深度，超过则不再渲染更深的楼中楼"},{name:"defaultExpanded",type:"boolean",default:"true",description:"是否默认展开楼中楼"},{name:"showReply",type:"boolean",default:"true",description:"是否在操作行渲染内联回复框触发"}],Ey=`const Comment = withCommentPlugins(CommentCore, [
  createThreadPlugin({ maxDepth: 3 }),
]);`,by=["递归楼中楼（限深折叠 + 展开/收起）","内联回复框，提交回调 onReply(parentId, content)","嵌套回复复用同一 actions/nested 槽（子回复可点赞 / 继续回复）","replyCount 与 replies 不一致时提示「展开 N 条回复」（懒加载场景）"],Ty=["社交评论区楼中楼","视频 / 电商评论区的多级互动"],Ny=["限制深度的渲染交由 ThreadView 递归完成，maxDepth 控制总层级。"],tm={name:Cy,description:Sy,since:wy,tags:Py,events:ky,methods:_y,methodsNote:Ry,config:jy,example:Ey,features:by,useCases:Ty,notes:Ny};function $y({author:e}){return e.avatar?u.jsx("img",{src:e.avatar,alt:e.name,style:{width:28,height:28,borderRadius:"50%",objectFit:"cover",flexShrink:0}}):u.jsx("div",{style:{width:28,height:28,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(128,128,128,0.22)",fontSize:12,fontWeight:600},children:e.name.slice(0,1).toUpperCase()})}const My=new Set,$s=h.createContext({level:0,path:My});function Dy({comment:e,maxDepth:n,defaultExpanded:t,showReply:o}){const r=h.useContext($s);if(r.path.has(e.id)||r.level>=n)return null;const i=new Set(r.path);return i.add(e.id),u.jsx(Oy,{comment:e,depth:r.level+1,ancestors:i,maxDepth:n,defaultExpanded:t,showReply:o})}function Ly({reply:e,maxDepth:n,showReply:t}){var a;const o=h.useContext($s),r=Nt("renderCommentActions",e),i=Nt("renderNested",e),l=o.level<n&&!o.path.has(e.id)?i:[],s=(e.status??"normal")==="deleted";return u.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},"data-testid":"comment-item",children:[u.jsx($y,{author:e.author}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsxs("div",{style:{fontSize:13},children:[u.jsx("span",{style:{fontWeight:600},children:e.author.name}),e.author.badge&&u.jsx("span",{style:{fontSize:11,opacity:.7,marginLeft:4},children:e.author.badge}),u.jsx("span",{style:{color:"#6b6b6b",marginLeft:6,fontSize:12},children:Zd(e.createdAt)})]}),u.jsx("div",{style:{fontSize:13,lineHeight:1.5,marginTop:1},children:s?u.jsx("span",{style:{color:"#6b6b6b",fontStyle:"italic"},children:"该评论已删除"}):(a=e.content)!=null&&a.length?Ns(e.content):e.text}),r.length>0&&t&&u.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",columnGap:14,rowGap:4,marginTop:4},children:r}),l.length>0&&u.jsx("div",{style:{borderLeft:"2px solid rgba(128,128,128,0.15)",paddingLeft:10},children:l})]})]})}function Oy({comment:e,depth:n,ancestors:t,maxDepth:o,defaultExpanded:r,showReply:i}){const l=e.replies??[],s=e.replyCount??l.length,[a,c]=h.useState(r&&l.length>0);return l.length===0&&s===0?null:u.jsx("div",{style:{marginTop:8},children:a?u.jsx("div",{children:l.map(d=>u.jsx($s.Provider,{value:{level:n,path:t},children:u.jsx(Ly,{reply:d,maxDepth:o,showReply:i})},d.id))}):u.jsx("button",{type:"button",onClick:()=>c(!0),style:{border:"none",background:"transparent",color:"#1565c0",cursor:"pointer",fontSize:13,padding:0},children:s>l.length?`展开 ${s} 条回复`:`展开 ${l.length} 条回复`})})}function zy({parentId:e,onSubmit:n,onCancel:t}){const[o,r]=h.useState(""),i=o.trim().length===0;return u.jsxs("div",{style:{marginTop:6,display:"flex",flexDirection:"column",gap:6},children:[u.jsx("textarea",{value:o,onChange:l=>r(l.target.value),placeholder:"回复点什么…",rows:2,style:{width:"100%",resize:"vertical",borderRadius:6,border:"1px solid rgba(128,128,128,0.25)",padding:6,fontSize:13,fontFamily:"inherit",background:"transparent",color:"inherit",boxSizing:"border-box"}}),u.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[u.jsx("button",{type:"button",onClick:t,style:fu(!1),children:"取消"}),u.jsx("button",{type:"button",disabled:i,onClick:()=>{n(e,[{type:"text",value:o.trim()}]),r("")},style:fu(!0),children:"回复"})]})]})}function fu(e){return{border:"none",borderRadius:6,padding:"4px 14px",fontSize:13,cursor:"pointer",background:e?"#1565c0":"rgba(128,128,128,0.18)",color:e?"#fff":"inherit"}}function Iy({comment:e,context:n,showReply:t}){const[o,r]=h.useState(!1);return t?u.jsxs("span",{style:{display:"inline-flex",flexDirection:"column",flexShrink:0,...o?{flexBasis:"100%",maxWidth:"100%"}:{}},children:[u.jsx("button",{type:"button",onClick:()=>r(i=>!i),style:{border:"none",background:"transparent",color:"inherit",opacity:.7,cursor:"pointer",fontSize:13,padding:0,flexShrink:0},children:"回复"}),o&&u.jsx(zy,{parentId:e.id,onCancel:()=>r(!1),onSubmit:(i,l)=>{var s,a;return(a=(s=n.props).onReply)==null?void 0:a.call(s,i,l)}})]}):null}function Ay(e={}){const n=e.maxDepth??3,t=e.defaultExpanded??!0,o=e.showReply??!0;return{name:"ThreadPlugin",version:"0.1.0",description:"楼中楼：递归渲染嵌套回复（限深折叠 + 展开），操作行内联回复。",priority:30,enabled:!0,hooks:{renderNested:(r,i)=>i.replies&&i.replies.length>0?u.jsx(Dy,{comment:i,maxDepth:n,defaultExpanded:t,showReply:o}):null,renderCommentActions:(r,i)=>u.jsx(Iy,{comment:i,context:r,showReply:o})}}}const Jr=Object.assign(Ay,{meta:tm}),Fy={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Uy={id:"u-me",name:"我",avatar:void 0},By=[{label:"1 层",value:"1"},{label:"2 层",value:"2"},{label:"3 层",value:"3"}],Wy={slug:"thread",title:"楼中楼",group:"plugin",plugin:"ThreadPlugin",intro:"操作行的「回复」唤起内联框，嵌套回复递归渲染、限深折叠；子回复同样走点赞 / 继续回复。",why:"社交与视频评论区离不开楼中楼；限深避免无限嵌套把版面撑爆。",plugs:[{fn:"createThreadPlugin",cfg:"maxDepth: {{maxDepth}}",why:"renderNested 递归渲染 replies；maxDepth 控制嵌套上限"}],props:[],controls:[{key:"maxDepth",label:"嵌套深度",kind:"select",init:"3",options:By}],stageHeight:460};function Hy({cfg:e,log:n}){const[t,o]=h.useState(()=>ie()),r=Number(e.maxDepth)||3,i=h.useCallback(a=>{o(c=>c.map(d=>d.id===a?{...d,liked:!d.liked,likeCount:(d.likeCount??0)+(d.liked?-1:1)}:d))},[]),l=h.useCallback((a,c)=>{o(d=>d.map(m=>m.id===a?{...m,replies:[{id:`${a}-r${Date.now()}`,author:Uy,content:c,createdAt:Date.now(),likeCount:0,liked:!1},...m.replies??[]],replyCount:(m.replyCount??0)+1}:m)),n(`回复 ${a}`)},[n]),s=h.useMemo(()=>J(q,[Jr({maxDepth:r})]),[r]);return u.jsxs("div",{style:Fy,children:[u.jsx(s,{comments:t,onLike:i,onReply:l,onSubmit:a=>n("发布（需叠 RichComposerPlugin）"),onReport:a=>n(`举报 ${a}`),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"点任意评论的「回复」会弹出内联框；嵌套回复点开可看，深度由控件控制。"})]})}const Vy=Object.freeze(Object.defineProperty({__proto__:null,default:Hy,meta:Wy},Symbol.toStringTag,{value:"Module"})),Qy="RichComposerPlugin",Yy="富编辑：底部评论框，支持 emoji 选择器 / 图片（DataURL）/ @提及（候选下拉），实时预览，提交时输出结构化 CommentNode[] 回调 onSubmit。各能力经 features 配置按平台开关。",Ky="0.1.0",Gy=["ui","富文本","编辑器","评论框"],qy=[{name:"renderFooter",when:"每次渲染，列表级底部槽位",description:"根评论框、加载更多、登录提示"}],Xy=[],Jy="只读取 context 字段（props / state / data），不调用上下文方法",Zy=[{name:"features",type:"{ emoji?: boolean; image?: boolean; mention?: boolean }",default:"{ emoji: true, image: true, mention: true }",description:"启用哪些富编辑能力，按平台开关"},{name:"placeholder",type:"string",default:"说点什么吧…",description:"文本框占位符"},{name:"submitText",type:"string",default:"发布",description:"提交按钮文案"}],ev=`const Comment = withCommentPlugins(CommentCore, [
  createRichComposerPlugin({ features: { emoji: true, image: true } }),
]);`,nv=["emoji 选择器（内置常用表情，零依赖）","图片（本地文件 → DataURL，离线可用）","@提及（候选下拉，输出 mention 节点）","实时富内容预览（复用核心渲染）","结构化输出 CommentNode[]"],tv=["视频评论区（emoji + 图片）","社交评论区（emoji + 图片 + @提及）","电商评论区（emoji + 图片晒单）"],ov=["组件不缓存草稿；提交后清空。@提及按候选 name 精确匹配，多个同名取首个。"],om={name:Qy,description:Yy,since:Ky,tags:Gy,events:qy,methods:Xy,methodsNote:Jy,config:Zy,example:ev,features:nv,useCases:tv,notes:ov},rv=["image/jpeg","image/png","image/gif","image/webp"],iv=["😀","😂","🤣","😍","😘","😎","🤔","😭","👍","👎","❤️","🔥","🎉","💯","✨","🌟","😅","😡","🥺","😴","🙏","💪","👏","💡"],lv={emoji:!0,image:!0,mention:!0};function sv(e,n,t){const o=[],r=/@([^\s@]{1,20})/g;let i=0,l;for(;(l=r.exec(e))!==null;){const s=l[1],a=n.find(c=>c.name===s);a&&(l.index>i&&o.push({type:"text",value:e.slice(i,l.index)}),o.push({type:"mention",userId:a.id,name:a.name}),i=r.lastIndex)}i<e.length&&o.push({type:"text",value:e.slice(i)});for(const s of t)o.push({type:"image",url:s});return o}function av({context:e,features:n,placeholder:t,submitText:o,acceptImageTypes:r,maxImageSizeMb:i,maxImages:l}){const[s,a]=h.useState(""),[c,d]=h.useState([]),[m,f]=h.useState(!1),[v,x]=h.useState(!1),[S,P]=h.useState(!1),[g,p]=h.useState(null),y=e.props.mentions??[],C=h.useRef(null),_=sv(s,y,c),j=_.some(E=>E.type==="text"&&E.value.trim().length>0||E.type==="image"||E.type==="mention"),T=async()=>{if(!j||S)return;const E=_,D=e.props.onSubmit;P(!0),p(null);try{await Promise.resolve(D==null?void 0:D(E)),a(""),d([]),f(!1),x(!1)}catch{p("发布失败，内容已保留，请重试")}finally{P(!1)}},$=E=>a(D=>D+E),w=E=>{a(D=>D+`@${E} `),x(!1)},R=E=>{if(r.length>0&&!r.includes(E.type)){p(`不支持的图片类型：${E.type||"未知"}`);return}if(E.size>i*1024*1024){p(`图片超过 ${i}MB 上限`);return}if(c.length>=l){p(`最多只能添加 ${l} 张图片`);return}p(null);const D=new FileReader;D.onload=()=>{typeof D.result=="string"&&d(O=>[...O,D.result])},D.readAsDataURL(E)};return u.jsxs("div",{style:{border:"1px solid rgba(128,128,128,0.22)",borderRadius:8,padding:10},children:[u.jsx("textarea",{value:s,onChange:E=>a(E.target.value),placeholder:t??"说点什么吧…",rows:3,style:{width:"100%",resize:"vertical",border:"none",outline:"none",background:"transparent",color:"inherit",fontSize:14,fontFamily:"inherit",boxSizing:"border-box"}}),c.length>0&&u.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",margin:"6px 0"},children:c.map((E,D)=>u.jsxs("div",{style:{position:"relative"},children:[u.jsx("img",{src:E,alt:"",style:{width:64,height:64,objectFit:"cover",borderRadius:6}}),u.jsx("button",{type:"button",onClick:()=>d(O=>O.filter((ne,qe)=>qe!==D)),style:{position:"absolute",top:-6,right:-6,width:18,height:18,borderRadius:"50%",border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",cursor:"pointer",fontSize:11,lineHeight:"18px",padding:0},children:"×"})]},D))}),m&&u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(8, 1fr)",gap:2,margin:"6px 0"},children:iv.map(E=>u.jsx("button",{type:"button",onClick:()=>$(E),style:{border:"none",background:"transparent",cursor:"pointer",fontSize:18},children:E},E))}),v&&y.length>0&&u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,margin:"6px 0"},children:y.map(E=>u.jsxs("button",{type:"button",onClick:()=>w(E.name),style:{border:"1px solid rgba(128,128,128,0.25)",borderRadius:999,padding:"2px 10px",background:"transparent",color:"#1565c0",cursor:"pointer",fontSize:12},children:["@",E.name]},E.id))}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:6},children:[n.emoji&&u.jsx("button",{type:"button",onClick:()=>f(E=>!E),style:bi,children:"😊"}),n.image&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:()=>{var E;return(E=C.current)==null?void 0:E.click()},style:bi,children:"🖼️"}),u.jsx("input",{ref:C,type:"file",accept:r.join(","),style:{display:"none"},onChange:E=>{var O;const D=(O=E.target.files)==null?void 0:O[0];D&&R(D),E.target.value=""}})]}),n.mention&&y.length>0&&u.jsx("button",{type:"button",onClick:()=>x(E=>!E),style:bi,children:"@"}),u.jsx("button",{type:"button","data-testid":"composer-submit",onClick:()=>{T()},disabled:!j||S,style:{marginLeft:"auto",border:"none",borderRadius:6,padding:"6px 18px",fontSize:13,cursor:j&&!S?"pointer":"not-allowed",background:j&&!S?"#1565c0":"rgba(128,128,128,0.2)",color:j&&!S?"#fff":"inherit"},children:S?"发布中…":o??"发布"})]}),g&&u.jsx("div",{"data-testid":"composer-error",style:{marginTop:6,fontSize:12,color:"#c62828"},children:g}),j&&u.jsx("div",{style:{marginTop:6,padding:6,borderRadius:6,background:"rgba(128,128,128,0.1)",fontSize:13,lineHeight:1.5},children:Ns(_)})]})}const bi={border:"none",background:"transparent",cursor:"pointer",fontSize:16,padding:2};function uv(e={}){const n={...lv,...e.features??{}},t=e.acceptImageTypes??rv,o=e.maxImageSizeMb??5,r=e.maxImages??9;return{name:"RichComposerPlugin",version:"0.1.0",description:"富编辑：底部评论框，支持 emoji / 图片 / @提及，输出结构化富内容回调 onSubmit。",priority:10,enabled:!0,hooks:{renderFooter:i=>u.jsx(av,{context:i,features:n,placeholder:e.placeholder,submitText:e.submitText,acceptImageTypes:t,maxImageSizeMb:o,maxImages:r})}}}const Zr=Object.assign(uv,{meta:om}),cv={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},dv={id:"u-me",name:"我",avatar:void 0},mv={slug:"rich-composer",title:"富编辑",group:"plugin",plugin:"RichComposerPlugin",intro:"底部评论框：emoji 选择器 + 图片 + @提及，输出结构化富内容，实时预览。",why:"社交平台要表情和提及，电商要晒图评价——但后台回复框只想要纯文本，做成插件按需开关。",plugs:[{fn:"createRichComposerPlugin",cfg:"features: { emoji: {{withEmoji}}, image: {{withImage}}, mention: {{withMention}} }",why:"renderFooter 评论框；features 裁剪 emoji / 图片 / @提及"}],props:[],controls:[{key:"withEmoji",label:"emoji",kind:"switch",init:!0},{key:"withImage",label:"图片",kind:"switch",init:!0},{key:"withMention",label:"@提及",kind:"switch",init:!0}],stageHeight:460};function pv({cfg:e,log:n}){const[t,o]=h.useState(()=>ie()),r=!!e.withEmoji,i=!!e.withImage,l=!!e.withMention,s=h.useCallback(d=>{o(m=>m.map(f=>f.id===d?{...f,liked:!f.liked,likeCount:(f.likeCount??0)+(f.liked?-1:1)}:f))},[]),a=h.useCallback(d=>{d.some(m=>m.type==="text"&&m.value.trim()||m.type==="image"||m.type==="mention")&&(o(m=>[{id:`c-${Date.now()}`,author:dv,content:d,createdAt:Date.now(),likeCount:0,liked:!1},...m]),n("发布评论"))},[n]),c=h.useMemo(()=>J(q,[Zr({features:{emoji:r,image:i,mention:l}})]),[r,i,l]);return u.jsxs("div",{style:cv,children:[u.jsx(c,{comments:t,onLike:s,onReply:(d,m)=>n("回复（需叠 ThreadPlugin）"),onSubmit:a,onReport:d=>n(`举报 ${d}`),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"底部评论框：点 😊 选表情、🖼️ 传图、@ 提及好友，下方实时预览，发布后新评论置顶。"})]})}const fv=Object.freeze(Object.defineProperty({__proto__:null,default:pv,meta:mv},Symbol.toStringTag,{value:"Module"})),gv={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},gu={id:"u-me",name:"我",avatar:void 0},hv={slug:"full-combo",title:"全家桶",group:"advanced",capability:"full-combo",intro:"点赞 + 排序 + 楼中楼 + 富编辑一次性装配，点赞 / 回复 / 发布都真正改状态。",why:"想看「一个通用评论区到底长什么样」，这一页就是；四个能力按 priority 串联，互不覆盖。",plugs:[{fn:"createLikePlugin",why:"操作行点赞按钮"},{fn:"createSortPlugin",why:"顶栏排序条"},{fn:"createThreadPlugin",cfg:"maxDepth: 3",why:"楼中楼嵌套回复"},{fn:"createRichComposerPlugin",cfg:"features: { emoji: true, image: true, mention: true }",why:"底部富编辑评论框"}],props:[],stageHeight:520};function yv({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useCallback(s=>{t(a=>a.map(c=>c.id===s?{...c,liked:!c.liked,likeCount:(c.likeCount??0)+(c.liked?-1:1)}:c)),e(`点赞 ${s}`)},[e]),r=h.useCallback((s,a)=>{t(c=>c.map(d=>d.id===s?{...d,replies:[{id:`${s}-r${Date.now()}`,author:gu,content:a,createdAt:Date.now(),likeCount:0,liked:!1},...d.replies??[]],replyCount:(d.replyCount??0)+1}:d)),e(`回复 ${s}`)},[e]),i=h.useCallback(s=>{s.some(a=>a.type==="text"&&a.value.trim()||a.type==="image"||a.type==="mention")&&(t(a=>[{id:`c-${Date.now()}`,author:gu,content:s,createdAt:Date.now(),likeCount:0,liked:!1},...a]),e("发布评论"))},[e]),l=h.useMemo(()=>J(q,[qr(),Xr(),Jr({maxDepth:3}),Zr({features:{emoji:!0,image:!0,mention:!0}})]),[]);return u.jsxs("div",{style:gv,children:[u.jsx(l,{comments:n,onLike:o,onReply:r,onSubmit:i,onReport:s=>e(`举报 ${s}`),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"四个能力全开：点赞、排序、楼中楼、富编辑框都在。试试点赞、回复、发图评。"})]})}const vv=Object.freeze(Object.defineProperty({__proto__:null,default:yv,meta:hv},Symbol.toStringTag,{value:"Module"})),xv="ReportPlugin",Cv="举报：每条评论操作行渲染举报按钮，弹出理由浮层，提交回调 onReport(id, reason)；理由可配置。",Sv="0.2.0",wv=["ui","治理","举报"],Pv=[{name:"renderCommentActions",when:"逐条渲染评论的操作行（payload 为当前 comment）",description:"点赞、回复、复制、举报等单条操作按钮"}],kv=[],_v="只读取 context 字段（props / state / data），不调用上下文方法",Rv=[{name:"reasons",type:"string[]",default:'["垃圾广告","辱骂攻击","色情低俗","诈骗","其他"]',description:"举报理由选项"}],jv=`const Comment = withCommentPlugins(CommentCore, [
  createReportPlugin(),
]);`,Ev=["操作行 🚩举报按钮","点击弹出理由浮层（单选）","提交回调 onReport(id, reason)"],bv=["社区 / 内容平台评论举报","任意需要内容治理的评论区"],Tv=["举报态不本地缓存，提交即回调由消费方处理。"],rm={name:xv,description:Cv,since:Sv,tags:wv,events:Pv,methods:kv,methodsNote:_v,config:Rv,example:jv,features:Ev,useCases:bv,notes:Tv},Nv=["垃圾广告","辱骂攻击","色情低俗","诈骗","其他"],$v={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function Mv({comment:e,onReport:n,reasons:t}){const[o,r]=h.useState(!1),[i,l]=h.useState(null),s=()=>{n==null||n(e.id,i??"其他"),r(!1),l(null)};return u.jsxs("span",{style:{position:"relative",display:"inline-block",flexShrink:0},children:[u.jsx("button",{type:"button","data-testid":"comment-report",onClick:()=>r(a=>!a),style:$v,children:"🚩举报"}),o&&u.jsxs("div",{style:{position:"absolute",top:"100%",left:0,zIndex:20,marginTop:4,background:"#fff",color:"#222",border:"1px solid rgba(0,0,0,0.12)",borderRadius:8,padding:8,minWidth:150,boxShadow:"0 4px 16px rgba(0,0,0,0.15)"},children:[t.map(a=>u.jsxs("label",{style:{display:"flex",gap:6,alignItems:"center",padding:"4px 0",fontSize:13,cursor:"pointer"},children:[u.jsx("input",{type:"radio",checked:i===a,onChange:()=>l(a)}),a]},a)),u.jsx("button",{type:"button",onClick:s,style:{marginTop:6,width:"100%",border:"none",borderRadius:6,padding:"6px 0",background:"#c62828",color:"#fff",cursor:"pointer"},children:"提交举报"})]})]})}function Dv(e={}){const n=e.reasons??Nv;return{name:"ReportPlugin",version:"0.1.0",description:"举报：每条评论操作行渲染举报按钮，弹出理由选择浮层，提交回调 onReport(id, reason)。",priority:22,enabled:!0,hooks:{renderCommentActions:(t,o)=>u.jsx(Mv,{comment:o,reasons:n,onReport:t.props.onReport})}}}const Ms=Object.assign(Dv,{meta:rm}),Lv={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Ov={slug:"report",title:"举报",group:"plugin",plugin:"ReportPlugin",intro:"操作行加一个举报入口，弹出理由浮层，提交经 onReport(id, reason) 回调。",why:"社区治理的底线能力；做成插件后，信任度高的内部场景可以不装，避免误伤正常互动。",plugs:[{fn:"createReportPlugin",why:"操作行举报按钮；reasons 可自定义理由列表（默认 5 项）"}],props:[{text:"onReport={(id, reason) => { /* 上报后台 */ }}"}],stageHeight:420};function zv({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useMemo(()=>J(q,[Ms()]),[]);return u.jsxs("div",{style:Lv,children:[u.jsx(o,{comments:n,onReport:(r,i)=>e(`举报 ${r} · ${i}`),onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:(r,i)=>e(`点赞 ${i?"取消":"已点"}`),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有举报被装上：点操作行的 🚩举报，选理由提交，事件写进右侧日志。"})]})}const Iv=Object.freeze(Object.defineProperty({__proto__:null,default:zv,meta:Ov},Symbol.toStringTag,{value:"Module"})),Av="SharePlugin",Fv="分享：每条评论操作行渲染分享按钮，复制本条评论锚点链接到剪贴板，给出「已复制」反馈。",Uv="0.2.0",Bv=["ui","互动","分享"],Wv=[{name:"renderCommentActions",when:"逐条渲染评论的操作行（payload 为当前 comment）",description:"点赞、回复、复制、举报等单条操作按钮"}],Hv=[],Vv="只读取 context 字段（props / state / data），不调用上下文方法",Qv=[],Yv=`const Comment = withCommentPlugins(CommentCore, [
  createSharePlugin(),
]);`,Kv=["操作行 🔗分享按钮","复制锚点链接 #comment-<id>","复制后短暂「已复制链接」反馈"],Gv=["社交 / 内容平台评论分享","任意需要分享单条评论的场景"],qv=["剪贴板不可用时静默失败，不影响其它交互。"],im={name:Av,description:Fv,since:Uv,tags:Bv,events:Wv,methods:Hv,methodsNote:Vv,config:Qv,example:Yv,features:Kv,useCases:Gv,notes:qv},Xv={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function Jv({comment:e}){const[n,t]=h.useState("idle"),o=h.useRef(null);h.useEffect(()=>()=>{o.current!==null&&window.clearTimeout(o.current)},[]);const r=l=>{t(l),o.current!==null&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{o.current=null,t("idle")},1500)},i=async()=>{const l=`${typeof location<"u"?location.origin+location.pathname:""}#comment-${e.id}`;try{const s=typeof navigator<"u"?navigator.clipboard:void 0;if(!(s!=null&&s.writeText))throw new Error("clipboard unavailable");await s.writeText(l),r("copied")}catch{r("failed")}};return u.jsx("button",{type:"button","data-testid":"comment-share",title:n==="failed"?"复制失败，请手动复制链接":void 0,onClick:()=>{i()},style:Xv,children:n==="copied"?"已复制链接":n==="failed"?"复制失败":"🔗分享"})}function Zv(){return{name:"SharePlugin",version:"0.1.0",description:"分享：每条评论操作行渲染分享按钮，复制本条评论锚点链接到剪贴板。",priority:23,enabled:!0,hooks:{renderCommentActions:(e,n)=>u.jsx(Jv,{comment:n})}}}const Ds=Object.assign(Zv,{meta:im}),e0={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},n0={slug:"share",title:"分享",group:"plugin",plugin:"SharePlugin",intro:"操作行加一个分享按钮，复制本条评论锚点链接到剪贴板，给出已复制反馈。",why:"把高价值评论（神回复、干货）分享出去是社区裂变的入口；纯前端、无后端依赖，按需装。",plugs:[{fn:"createSharePlugin",why:"操作行分享按钮；复制 #comment-<id> 锚点链接"}],props:[],stageHeight:420};function t0({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useMemo(()=>J(q,[Ds()]),[]);return u.jsxs("div",{style:e0,children:[u.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有分享被装上：点操作行的 🔗分享，链接写入剪贴板并提示「已复制链接」。"})]})}const o0=Object.freeze(Object.defineProperty({__proto__:null,default:t0,meta:n0},Symbol.toStringTag,{value:"Module"})),r0="CopyPlugin",i0="复制：每条评论操作行渲染复制按钮，把结构化富内容转纯文本后复制到剪贴板。",l0="0.2.0",s0=["ui","工具","复制"],a0=[{name:"renderCommentActions",when:"逐条渲染评论的操作行（payload 为当前 comment）",description:"点赞、回复、复制、举报等单条操作按钮"}],u0=[],c0="只读取 context 字段（props / state / data），不调用上下文方法",d0=[],m0=`const Comment = withCommentPlugins(CommentCore, [
  createCopyPlugin(),
]);`,p0=["操作行 📋复制按钮","富内容转纯文本","复制后短暂「已复制」反馈"],f0=["任意需要引用 / 转发评论原文的场景"],g0=["剪贴板不可用时静默失败。"],lm={name:r0,description:i0,since:l0,tags:s0,events:a0,methods:u0,methodsNote:c0,config:d0,example:m0,features:p0,useCases:f0,notes:g0},h0={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function y0(e){const n=[];return(e.content??[]).forEach(t=>{t.type==="text"||t.type==="emoji"?n.push(t.value):t.type==="mention"&&n.push(`@${t.name}`)}),e.text&&n.push(e.text),n.join("")}function v0({comment:e}){const[n,t]=h.useState("idle"),o=h.useRef(null);h.useEffect(()=>()=>{o.current!==null&&window.clearTimeout(o.current)},[]);const r=l=>{t(l),o.current!==null&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{o.current=null,t("idle")},1500)},i=async()=>{try{const l=typeof navigator<"u"?navigator.clipboard:void 0;if(!(l!=null&&l.writeText))throw new Error("clipboard unavailable");await l.writeText(y0(e)),r("copied")}catch{r("failed")}};return u.jsx("button",{type:"button","data-testid":"comment-copy",title:n==="failed"?"复制失败，请手动选择文本":void 0,onClick:()=>{i()},style:h0,children:n==="copied"?"已复制":n==="failed"?"复制失败":"📋复制"})}function x0(){return{name:"CopyPlugin",version:"0.1.0",description:"复制：每条评论操作行渲染复制按钮，复制评论纯文本到剪贴板。",priority:24,enabled:!0,hooks:{renderCommentActions:(e,n)=>u.jsx(v0,{comment:n})}}}const Ls=Object.assign(x0,{meta:lm}),C0={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},S0={slug:"copy",title:"复制",group:"plugin",plugin:"CopyPlugin",intro:"操作行加一个复制按钮，把评论纯文本（含 @提及）复制到剪贴板。",why:"金句/神回复一键搬运到别处；富文本转纯文本由插件内部处理，消费者零成本。",plugs:[{fn:"createCopyPlugin",why:"操作行复制按钮；富文本转纯文本"}],props:[],stageHeight:420};function w0({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useMemo(()=>J(q,[Ls()]),[]);return u.jsxs("div",{style:C0,children:[u.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有复制被装上：点操作行的 📋复制，整条评论纯文本写入剪贴板（含 @提及）。"})]})}const P0=Object.freeze(Object.defineProperty({__proto__:null,default:w0,meta:S0},Symbol.toStringTag,{value:"Module"})),k0="ReactionPlugin",_0="多表情反应：每条评论操作行渲染表情反应条（👍❤️😂🎉），点击累加计数，回调 onReact(id, emoji)。区别于 LikePlugin 的单一赞。",R0="0.2.0",j0=["ui","互动","表情"],E0=[{name:"renderCommentActions",when:"逐条渲染评论的操作行（payload 为当前 comment）",description:"点赞、回复、复制、举报等单条操作按钮"}],b0=[],T0="只读取 context 字段（props / state / data），不调用上下文方法",N0=[{name:"emojis",type:"string[]",default:'["👍","❤️","😂","🎉"]',description:"可选表情集合"}],$0=`const Comment = withCommentPlugins(CommentCore, [
  createReactionPlugin(),
]);`,M0=["操作行多表情快速反应","每条表情带计数","回调 onReact(id, emoji)"],D0=["微信 / 微博 / 小红书式评论反应","需要比「赞」更丰富表达的评论区"],L0=["反应计数显示于 comment.reactions，乐观更新由消费方完成。"],sm={name:k0,description:_0,since:R0,tags:j0,events:E0,methods:b0,methodsNote:T0,config:N0,example:$0,features:M0,useCases:D0,notes:L0},O0=["👍","❤️","😂","🎉"],z0={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function I0({comment:e,onReact:n,emojis:t}){const o=e.reactions??{};return u.jsx("span",{"data-testid":"comment-reaction",style:{display:"inline-flex",gap:6,flexShrink:0},children:t.map(r=>{const i=o[r]??0;return u.jsxs("button",{type:"button",onClick:()=>n==null?void 0:n(e.id,r),style:{...z0,color:i>0?"#1565c0":"inherit",opacity:i>0?1:.7},children:[r,i>0?` ${i}`:""]},r)})})}function A0(e={}){const n=e.emojis??O0;return{name:"ReactionPlugin",version:"0.1.0",description:"多表情反应：每条评论操作行渲染表情反应条（👍❤️😂🎉），点击累加计数，回调 onReact(id, emoji)。",priority:25,enabled:!0,hooks:{renderCommentActions:(t,o)=>u.jsx(I0,{comment:o,emojis:n,onReact:t.props.onReact})}}}const Os=Object.assign(A0,{meta:sm}),F0={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},U0={slug:"reaction",title:"多表情反应",group:"plugin",plugin:"ReactionPlugin",intro:"操作行渲染表情反应条，点击累加计数，回调 onReact(id, emoji)。",why:"比「点赞」更轻量也更丰富：用户用表情秒回，不占用评论位；emojis 可自定义。",plugs:[{fn:"createReactionPlugin",cfg:'emojis: ["👍", "❤️", "😂", "🎉"]',why:"操作行表情反应条；emojis 自定义表情集合"}],props:[{text:"onReact={(id, emoji) => { /* 累加计数 */ }}"}],stageHeight:420};function B0({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useMemo(()=>J(q,[Os()]),[]),r=h.useCallback((i,l)=>{t(s=>s.map(a=>{if(a.id!==i)return a;const c={...a.reactions??{}};return c[l]=(c[l]??0)+1,{...a,reactions:c}})),e(`反应 ${i} ${l}`)},[e]);return u.jsxs("div",{style:F0,children:[u.jsx(o,{comments:n,onReact:r,onReply:(i,l)=>e("回复（需叠 ThreadPlugin）"),onSubmit:i=>e("发布（需叠 RichComposerPlugin）"),onLike:i=>e("点赞"),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有反应被装上：点表情条里的任意表情，计数 +1 并写进右侧日志。"})]})}const W0=Object.freeze(Object.defineProperty({__proto__:null,default:B0,meta:U0},Symbol.toStringTag,{value:"Module"})),H0="FavoritePlugin",V0="收藏：每条评论操作行渲染收藏按钮，切换回调 onFavorite(id, nextFavorited)；收藏态读 comment.favorited。",Q0="0.2.0",Y0=["ui","互动","收藏"],K0=[{name:"renderCommentActions",when:"逐条渲染评论的操作行（payload 为当前 comment）",description:"点赞、回复、复制、举报等单条操作按钮"}],G0=[],q0="只读取 context 字段（props / state / data），不调用上下文方法",X0=[],J0=`const Comment = withCommentPlugins(CommentCore, [
  createFavoritePlugin(),
]);`,Z0=["操作行 ☆/★ 收藏按钮","回调 onFavorite(id, next)","读 comment.favorited 反映后端态"],ex=["内容平台评论收藏","电商 / 教程类评论区"],nx=["收藏态不本地缓存，消费方更新 comments 回流后即时反映。"],am={name:H0,description:V0,since:Q0,tags:Y0,events:K0,methods:G0,methodsNote:q0,config:X0,example:J0,features:Z0,useCases:ex,notes:nx},tx={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function ox({comment:e,onFavorite:n}){const t=!!e.favorited,o=()=>{n==null||n(e.id,!t)};return u.jsx("button",{type:"button","data-testid":"comment-favorite",onClick:o,"aria-pressed":t,style:{...tx,color:t?"#faad14":"inherit"},children:t?"★已收藏":"☆收藏"})}function rx(){return{name:"FavoritePlugin",version:"0.1.0",description:"收藏：每条评论操作行渲染收藏按钮，切换回调 onFavorite(id, nextFavorited)。",priority:26,enabled:!0,hooks:{renderCommentActions:(e,n)=>u.jsx(ox,{comment:n,onFavorite:e.props.onFavorite})}}}const zs=Object.assign(rx,{meta:am}),ix={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},lx={slug:"favorite",title:"收藏",group:"plugin",plugin:"FavoritePlugin",intro:"操作行加一个收藏按钮，点击切换 ☆/★ 高亮，回调 onFavorite(id, next)。",why:"用户把有用评论收进个人收藏夹；状态本地切换，上报交给 onFavorite。",plugs:[{fn:"createFavoritePlugin",why:"操作行收藏按钮；onFavorite(id, nextFavorited)"}],props:[{text:"onFavorite={(id, next) => { /* 写收藏夹 */ }}"}],stageHeight:420};function sx({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useMemo(()=>J(q,[zs()]),[]);return u.jsxs("div",{style:ix,children:[u.jsx(o,{comments:n,onFavorite:(r,i)=>e(`收藏 ${r} → ${i?"已收藏":"取消"}`),onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有收藏被装上：点操作行的 ☆，变 ★ 并写进右侧日志。"})]})}const ax=Object.freeze(Object.defineProperty({__proto__:null,default:sx,meta:lx},Symbol.toStringTag,{value:"Module"})),ux="PinPlugin",cx="置顶：每条评论操作行渲染置顶按钮，切换回调 onPin(id, nextPinned)；Core 读取 comment.pinned 渲染置顶标。",dx="0.2.0",mx=["ui","组织","置顶"],px=[{name:"renderCommentActions",when:"逐条渲染评论的操作行（payload 为当前 comment）",description:"点赞、回复、复制、举报等单条操作按钮"}],fx=[],gx="只读取 context 字段（props / state / data），不调用上下文方法",hx=[],yx=`const Comment = withCommentPlugins(CommentCore, [
  createPinPlugin(),
]);`,vx=["操作行 📌 置顶/取消","回调 onPin(id, next)","与 Core 置顶标联动"],xx=["楼主 / 运营置顶优质评论","热帖锚定"],Cx=["置顶态读 comment.pinned，后端排序 / 展示由消费方数据决定。"],um={name:ux,description:cx,since:dx,tags:mx,events:px,methods:fx,methodsNote:gx,config:hx,example:yx,features:vx,useCases:xx,notes:Cx},Sx={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,padding:0,flexShrink:0};function wx({comment:e,onPin:n}){const t=!!e.pinned,o=()=>{n==null||n(e.id,!t)};return u.jsx("button",{type:"button","data-testid":"comment-pin",onClick:o,"aria-pressed":t,style:{...Sx,color:t?"#b35c00":"inherit"},children:t?"📌取消置顶":"📌置顶"})}function Px(){return{name:"PinPlugin",version:"0.1.0",description:"置顶：每条评论操作行渲染置顶按钮，切换回调 onPin(id, nextPinned)；Core 读取 comment.pinned 渲染置顶标。",priority:27,enabled:!0,hooks:{renderCommentActions:(e,n)=>u.jsx(wx,{comment:n,onPin:e.props.onPin})}}}const Is=Object.assign(Px,{meta:um}),kx={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},_x={slug:"pin",title:"置顶",group:"plugin",plugin:"PinPlugin",intro:"操作行加一个置顶按钮，切换回调 onPin(id, next)；Core 读 pinned 渲染置顶标。",why:"运营把优质/公告评论钉在顶部；pinned 是数据字段，置顶标由 Core 渲染，插件只管切换。",plugs:[{fn:"createPinPlugin",why:"操作行置顶按钮；onPin(id, nextPinned)；置顶标由 Core 渲染"}],props:[{text:"onPin={(id, next) => { /* 改 pinned 字段 */ }}"}],stageHeight:420};function Rx({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useMemo(()=>J(q,[Is()]),[]);return u.jsxs("div",{style:kx,children:[u.jsx(o,{comments:n,onPin:(r,i)=>e(`置顶 ${r} → ${i?"置顶":"取消"}`),onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有置顶被装上：c-1 默认已置顶（顶部有标），点 📌可切换并写进日志。"})]})}const jx=Object.freeze(Object.defineProperty({__proto__:null,default:Rx,meta:_x},Symbol.toStringTag,{value:"Module"})),Ex="LocationPlugin",bx="地理位置：评论含 location 字段时在操作行展示 📍 标；Core 默认不渲染 location，由本插件补充。",Tx="0.2.0",Nx=["ui","信息","地理位置"],$x=[{name:"renderCommentActions",when:"逐条渲染评论的操作行（payload 为当前 comment）",description:"点赞、回复、复制、举报等单条操作按钮"}],Mx=[],Dx="只读取 context 字段（props / state / data），不调用上下文方法",Lx=[],Ox=`const Comment = withCommentPlugins(CommentCore, [
  createLocationPlugin(),
]);`,zx=["条件渲染 📍 标","无 location 时不占位"],Ix=["本地生活 / 探店 / 旅行评论区","带定位的 UGC 内容"],Ax=["位置文案来自 comment.location，由数据提供。"],cm={name:Ex,description:bx,since:Tx,tags:Nx,events:$x,methods:Mx,methodsNote:Dx,config:Lx,example:Ox,features:zx,useCases:Ix,notes:Ax};function Fx(){return{name:"LocationPlugin",version:"0.1.0",description:"地理位置：评论含 location 时在操作行展示 📍 标（Core 不渲染 location，由本插件补充展示）。",priority:28,enabled:!0,hooks:{renderCommentActions:(e,n)=>n.location?u.jsxs("span",{"data-testid":"comment-location",style:{display:"inline-flex",alignItems:"center",gap:2,fontSize:12,color:"#5b6064",flexShrink:0},children:["📍",n.location]}):null}}}const ei=Object.assign(Fx,{meta:cm}),Ux={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Bx={slug:"location",title:"地理位置",group:"plugin",plugin:"LocationPlugin",intro:"评论含 location 时，操作行补充 📍 位置标（Core 不渲染，由插件补充）。",why:"本地生活/探店场景需要把「在哪发的」亮出来；无 location 的评论自动不显示，零负担。",plugs:[{fn:"createLocationPlugin",why:"操作行展示 location；评论无 location 时不渲染"}],props:[],stageHeight:420};function Wx({log:e}){const[n,t]=h.useState(()=>ie().map((r,i)=>i===1?{...r,location:"上海·静安"}:r)),o=h.useMemo(()=>J(q,[ei()]),[]);return u.jsxs("div",{style:Ux,children:[u.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有地理位置被装上：第二条评论带了 location，操作行出现 📍上海·静安；其余不显示。"})]})}const Hx=Object.freeze(Object.defineProperty({__proto__:null,default:Wx,meta:Bx},Symbol.toStringTag,{value:"Module"})),Vx="TimestampPlugin",Qx="绝对时间：Core 默认展示相对时间，本插件在操作行补充绝对时间芯片（YYYY-MM-DD HH:mm），便于精确查看。",Yx="0.2.0",Kx=["ui","信息","时间"],Gx=[{name:"renderCommentActions",when:"逐条渲染评论的操作行（payload 为当前 comment）",description:"点赞、回复、复制、举报等单条操作按钮"}],qx=[],Xx="只读取 context 字段（props / state / data），不调用上下文方法",Jx=[],Zx=`const Comment = withCommentPlugins(CommentCore, [
  createTimestampPlugin(),
]);`,eC=["操作行绝对时间芯片","与 Core 相对时间并存"],nC=["需要精确时间的合规 / 存档场景","补充相对时间的不足"],tC=["仅展示，不修改 Core 的相对时间渲染。"],dm={name:Vx,description:Qx,since:Yx,tags:Kx,events:Gx,methods:qx,methodsNote:Xx,config:Jx,example:Zx,features:eC,useCases:nC,notes:tC};function oC(e){const n=new Date(e),t=o=>String(o).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function rC(){return{name:"TimestampPlugin",version:"0.1.0",description:"绝对时间：Core 默认展示相对时间，本插件在操作行补充「绝对时间」芯片，便于精确查看发布时刻。",priority:29,enabled:!0,hooks:{renderCommentActions:(e,n)=>u.jsx("span",{"data-testid":"comment-timestamp",style:{fontSize:12,color:"#6b6b6b",flexShrink:0,whiteSpace:"nowrap"},title:"绝对时间",children:oC(n.createdAt)})}}}const As=Object.assign(rC,{meta:dm}),iC={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},lC={slug:"timestamp",title:"绝对时间",group:"plugin",plugin:"TimestampPlugin",intro:"Core 默认相对时间，本插件补充绝对时间芯片（YYYY-MM-DD HH:mm）。",why:"取证/审核场景需要精确到分钟；相对时间继续保留，绝对时间只是补充。",plugs:[{fn:"createTimestampPlugin",why:"操作行补充绝对时间芯片"}],props:[],stageHeight:420};function sC({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useMemo(()=>J(q,[As()]),[]);return u.jsxs("div",{style:iC,children:[u.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有绝对时间被装上：每条评论操作行多出一串 YYYY-MM-DD HH:mm 精确时间。"})]})}const aC=Object.freeze(Object.defineProperty({__proto__:null,default:sC,meta:lC},Symbol.toStringTag,{value:"Module"})),uC="CountPlugin",cC="计数：顶栏展示评论总数 + 热议标，读取 context.comments.length，随 Filter/Search 实时变化。",dC="0.2.0",mC=["ui","组织","计数"],pC=[{name:"renderToolbar",when:"每次渲染，列表级顶栏槽位",description:"排序栏、计数、筛选开关等列表级工具"}],fC=[],gC="只读取 context 字段（props / state / data），不调用上下文方法",hC=[],yC=`const Comment = withCommentPlugins(CommentCore, [
  createCountPlugin(),
]);`,vC=["顶栏评论总数","非空时「热议」标","与 Filter/Search 联动计数"],xC=["任意评论区计数展示","与筛选 / 搜索组合"],CC=["计数反映当前经 transformData 后的列表长度。"],mm={name:uC,description:cC,since:dC,tags:mC,events:pC,methods:fC,methodsNote:gC,config:hC,example:yC,features:vC,useCases:xC,notes:CC};function SC(){return{name:"CountPlugin",version:"0.1.0",description:"计数：顶栏展示评论总数 + 热议标，读取 context.comments.length（随 Filter/Search 实时变化）。",priority:11,enabled:!0,hooks:{renderToolbar:e=>{var t;const n=((t=e.comments)==null?void 0:t.length)??0;return u.jsxs("span",{"data-testid":"comment-count",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:13},children:[u.jsx("strong",{children:n})," 条评论",n>0&&u.jsx("span",{style:{fontSize:11,padding:"1px 6px",borderRadius:4,color:"#b35c00",border:"1px solid rgba(255,143,0,0.4)"},children:"热议"})]})}}}}const Fs=Object.assign(SC,{meta:mm}),wC={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},PC={slug:"count",title:"计数",group:"plugin",plugin:"CountPlugin",intro:"顶栏展示评论总数 + 热议标，读取 context.comments.length（随筛选/搜索实时变化）。",why:"顶栏的「N 条评论」是评论区标配；读的是处理后的结果，叠筛选/搜索时自动同步。",plugs:[{fn:"createCountPlugin",why:"顶栏评论总数 + 热议标；读 context.comments.length"}],props:[],stageHeight:420};function kC({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useMemo(()=>J(q,[Fs()]),[]);return u.jsxs("div",{style:wC,children:[u.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有计数被装上：顶栏出现「N 条评论」+ 热议标，数字等于当前可见评论数。"})]})}const _C=Object.freeze(Object.defineProperty({__proto__:null,default:kC,meta:PC},Symbol.toStringTag,{value:"Module"})),RC="FilterPlugin",jC="筛选：顶栏「全部/有图/有回复」筛选，经 transformData 过滤评论列表（读 state.filter）。",EC="0.2.0",bC=["ui","组织","筛选"],TC=[{name:"transformData",when:"渲染前，对评论列表链式改写",description:"排序、过滤、审核隐藏、敏感词替换；下游拿到的 context.data 即可见列表"},{name:"renderToolbar",when:"每次渲染，列表级顶栏槽位",description:"排序栏、计数、筛选开关等列表级工具"}],NC=[],$C="只读取 context 字段（props / state / data），不调用上下文方法",MC=[{name:"options",type:'("all"|"image"|"replies")[]',default:'["all","image","replies"]',description:"筛选项"}],DC=`const Comment = withCommentPlugins(CommentCore, [
  createFilterPlugin(),
]);`,LC=["顶栏筛选芯片","transformData 实时过滤","与 CountPlugin 联动计数"],OC=["电商晒单筛选（有图）","热帖筛选（有回复）"],zC=["过滤发生在排序之前，不影响排序结果。"],pm={name:RC,description:jC,since:EC,tags:bC,events:TC,methods:NC,methodsNote:$C,config:MC,example:DC,features:LC,useCases:OC,notes:zC},IC={all:"全部",image:"有图",replies:"有回复"},AC=e=>({border:"none",borderRadius:999,padding:"4px 12px",fontSize:13,cursor:"pointer",background:e?"rgba(29,161,242,0.16)":"transparent",color:e?"#1565c0":"inherit",opacity:e?1:.7});function FC({context:e,options:n}){var r;const t=((r=e.state)==null?void 0:r.filter)??"all",o=i=>e.setState({filter:i});return u.jsx("div",{"data-testid":"comment-filter",style:{display:"inline-flex",gap:4},children:n.map(i=>u.jsx("button",{type:"button",onClick:()=>o(i),style:AC(t===i),children:IC[i]??i},i))})}function UC(e={}){const n=e.options??["all","image","replies"];return{name:"FilterPlugin",version:"0.1.0",description:"筛选：顶栏「全部/有图/有回复」筛选，经 transformData 过滤评论列表（读 state.filter）。",priority:12,enabled:!0,hooks:{renderToolbar:t=>u.jsx(FC,{context:t,options:n}),transformData:(t,o)=>{var l;const r=((l=t.state)==null?void 0:l.filter)??"all";if(r==="all"||!Array.isArray(o))return o;const i=o;return r==="image"?i.filter(s=>{var a;return(((a=s.images)==null?void 0:a.length)??0)>0}):r==="replies"?i.filter(s=>{var a;return(((a=s.replies)==null?void 0:a.length)??0)>0||(s.replyCount??0)>0}):o}}}}const Us=Object.assign(UC,{meta:pm}),BC={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},WC={slug:"filter",title:"筛选",group:"plugin",plugin:"FilterPlugin",intro:"顶栏筛选胶囊（全部/有图/有回复），经 transformData 过滤评论列表。",why:"信息流太长时给读者一个快速收敛的入口；过滤在数据层做，不碰渲染，和排序天然共存。",plugs:[{fn:"createFilterPlugin",cfg:'options: ["all", "image", "replies"]',why:"顶栏筛选；transformData 按 state.filter 过滤"}],props:[],stageHeight:420};function HC({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useMemo(()=>J(q,[Us()]),[]);return u.jsxs("div",{style:BC,children:[u.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有筛选被装上：点顶栏「有图」只剩带图的评论，「有回复」只剩带楼中楼的，列表实时收缩。"})]})}const VC=Object.freeze(Object.defineProperty({__proto__:null,default:HC,meta:WC},Symbol.toStringTag,{value:"Module"})),QC="SearchPlugin",YC="搜索：顶栏输入框，经 transformData 按关键词过滤评论（读 state.query，标题/正文/@提及均参与匹配）。",KC="0.2.0",GC=["ui","组织","搜索"],qC=[{name:"transformData",when:"渲染前，对评论列表链式改写",description:"排序、过滤、审核隐藏、敏感词替换；下游拿到的 context.data 即可见列表"},{name:"renderToolbar",when:"每次渲染，列表级顶栏槽位",description:"排序栏、计数、筛选开关等列表级工具"}],XC=[],JC="只读取 context 字段（props / state / data），不调用上下文方法",ZC=[],e1=`const Comment = withCommentPlugins(CommentCore, [
  createSearchPlugin(),
]);`,n1=["顶栏搜索框","transformData 实时过滤","大小写不敏感"],t1=["长评论区站内搜索","客服 / 社区内容检索"],o1=["过滤发生在排序之前。"],fm={name:QC,description:YC,since:KC,tags:GC,events:qC,methods:XC,methodsNote:JC,config:ZC,example:e1,features:n1,useCases:t1,notes:o1},r1={border:"1px solid rgba(128,128,128,0.3)",borderRadius:999,padding:"4px 12px",fontSize:13,background:"transparent",color:"inherit",outline:"none",width:140};function i1(e){const n=[];return(e.content??[]).forEach(t=>{t.type==="text"?n.push(t.value):t.type==="mention"&&n.push(t.name)}),e.text&&n.push(e.text),n.join(" ")}function l1({context:e}){var t;const n=((t=e.state)==null?void 0:t.query)??"";return u.jsx("input",{"data-testid":"comment-search",value:n,onChange:o=>e.setState({query:o.target.value}),placeholder:"搜索评论…",style:r1})}function s1(){return{name:"SearchPlugin",version:"0.1.0",description:"搜索：顶栏输入框，经 transformData 按关键词过滤评论（读 state.query）。",priority:13,enabled:!0,hooks:{renderToolbar:e=>u.jsx(l1,{context:e}),transformData:(e,n)=>{var o;const t=(((o=e.state)==null?void 0:o.query)??"").trim().toLowerCase();return!t||!Array.isArray(n)?n:n.filter(r=>i1(r).toLowerCase().includes(t))}}}}const Bs=Object.assign(s1,{meta:fm}),a1={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},u1={slug:"search",title:"搜索",group:"plugin",plugin:"SearchPlugin",intro:"顶栏搜索框，经 transformData 按评论纯文本（含 @提及）过滤。",why:"长评论区必须有检索；同样是数据级插件，和筛选/排序叠加时各自独立生效。",plugs:[{fn:"createSearchPlugin",why:"顶栏搜索框；transformData 按 state.query 过滤"}],props:[],stageHeight:420};function c1({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useMemo(()=>J(q,[Bs()]),[]);return u.jsxs("div",{style:a1,children:[u.jsx(o,{comments:n,onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有搜索被装上：在顶栏输入「工程文件」「BGM」「SKU」等，列表只留命中的评论。"})]})}const d1=Object.freeze(Object.defineProperty({__proto__:null,default:c1,meta:u1},Symbol.toStringTag,{value:"Module"})),m1="ModerationPlugin",p1="审核：经 transformData 屏蔽敏感词（替换为 **）并过滤待审 / 已删评论；属于数据级插件，不渲染 UI。",f1="0.2.0",g1=["治理","审核","安全"],h1=[{name:"transformData",when:"渲染前，对评论列表链式改写",description:"排序、过滤、审核隐藏、敏感词替换；下游拿到的 context.data 即可见列表"}],y1=[],v1="只读取 context 字段（props / state / data），不调用上下文方法",x1=[{name:"words",type:"string[]",default:'["傻逼","广告","加微信","加我"]',description:"敏感词集合，命中替换为 **"},{name:"hidePending",type:"boolean",default:"true",description:"是否过滤待审 / 已删评论"}],C1=`const Comment = withCommentPlugins(CommentCore, [
  createModerationPlugin(),
]);`,S1=["敏感词脱敏","过滤待审 / 已删","纯数据级，零 UI 体积"],w1=["内容安全合规","UGC 社区前置审核"],P1=["处理顺序在排序之前；不修改原始数据对象（返回新数组）。"],gm={name:m1,description:p1,since:f1,tags:g1,events:h1,methods:y1,methodsNote:v1,config:x1,example:C1,features:S1,useCases:w1,notes:P1},k1=["傻逼","广告","加微信","加我"];function hm(e,n){let t=e;for(const o of n)o&&t.includes(o)&&(t=t.split(o).join("**"));return t}function _1(e,n){return e.map(t=>t.type==="text"?{...t,value:hm(t.value,n)}:t)}const R1=new Set;function ym(e,n,t,o){const r={...e,content:_1(e.content??[],n)};typeof e.text=="string"&&(r.text=hm(e.text,n));const i=e.replies;if(!i||i.length===0)return r;if(o.has(e.id))return r.replies=void 0,r;const l=new Set(o);return l.add(e.id),r.replies=i.filter(s=>!t||s.status!=="pending"&&s.status!=="deleted").map(s=>ym(s,n,t,l)),r}function j1(e={}){const n=e.words??k1,t=e.hidePending??!0;return{name:"ModerationPlugin",version:"0.1.0",description:"审核：经 transformData 屏蔽敏感词（替换为 **）并过滤待审/已删评论（hidePending 默认开）。",priority:14,enabled:!0,hooks:{transformData:(o,r)=>{if(!Array.isArray(r))return r;let i=r;return t&&(i=i.filter(l=>l.status!=="pending"&&l.status!=="deleted")),i.map(l=>ym(l,n,t,R1))}}}}const Ws=Object.assign(j1,{meta:gm}),E1={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},b1={slug:"moderation",title:"审核",group:"plugin",plugin:"ModerationPlugin",intro:"数据级审核：敏感词脱敏（**）+ 过滤待审/已删；不渲染任何 UI。",why:"合规前置在数据层，一次装配全列表生效；不渲染 UI，性能零负担。",plugs:[{fn:"createModerationPlugin",cfg:"hidePending: {{hidePending}}",why:"transformData 脱敏 + 过滤；hidePending 默认 true"}],props:[],controls:[{key:"hidePending",label:"过滤待审/已删",kind:"switch",init:!0}],stageHeight:460};function T1({cfg:e,log:n}){const[t,o]=h.useState(()=>ie().map(l=>l.id==="c-1"?{...l,content:[{type:"text",value:"这期广告太多，加微信领福利的私我"}]}:l)),r=!!e.hidePending,i=h.useMemo(()=>J(q,[Ws({hidePending:r})]),[r]);return u.jsxs("div",{style:E1,children:[u.jsx(i,{comments:t,onReply:(l,s)=>n("回复（需叠 ThreadPlugin）"),onSubmit:l=>n("发布（需叠 RichComposerPlugin）"),onLike:l=>n("点赞"),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有审核被装上：第一条里的「广告」「加微信」被脱敏成 **；关掉开关后待审/已删也会显示。"})]})}const N1=Object.freeze(Object.defineProperty({__proto__:null,default:T1,meta:b1},Symbol.toStringTag,{value:"Module"})),$1="LoginPromptPlugin",M1="未登录引导：底部渲染「登录后参与评论」引导条，回调 onLogin；与 RichComposerPlugin 同槽共存。",D1="0.2.0",L1=["ui","转化","登录"],O1=[{name:"renderFooter",when:"每次渲染，列表级底部槽位",description:"根评论框、加载更多、登录提示"}],z1=[],I1="只读取 context 字段（props / state / data），不调用上下文方法",A1=[],F1=`const Comment = withCommentPlugins(CommentCore, [
  createLoginPromptPlugin(),
]);`,U1=["底部登录引导条","回调 onLogin"],B1=["未登录态促登录","评论框前置引导"],W1=["仅展示引导，是否隐藏登录态由消费方条件装配决定。"],vm={name:$1,description:M1,since:D1,tags:L1,events:O1,methods:z1,methodsNote:I1,config:A1,example:F1,features:U1,useCases:B1,notes:W1};function H1(){return{name:"LoginPromptPlugin",version:"0.1.0",description:"未登录引导：底部渲染「登录后参与评论」引导条，回调 onLogin；可与 RichComposerPlugin 同槽共存。",priority:33,enabled:!0,hooks:{renderFooter:e=>u.jsxs("div",{"data-testid":"comment-login-prompt",style:{display:"flex",alignItems:"center",gap:8,padding:"10px 0",fontSize:13},children:[u.jsx("span",{children:"登录后参与评论，发表你的看法"}),u.jsx("button",{type:"button",onClick:()=>{var n,t;return(t=(n=e.props).onLogin)==null?void 0:t.call(n)},style:{border:"1px solid rgba(29,161,242,0.5)",borderRadius:999,padding:"4px 14px",background:"transparent",color:"#1565c0",cursor:"pointer"},children:"登录"})]})}}}const Hs=Object.assign(H1,{meta:vm}),V1={background:"#fff",borderRadius:8,padding:16,color:"#1f2328",width:"100%",maxWidth:560,margin:"0 auto"},Q1={slug:"login",title:"未登录引导",group:"plugin",plugin:"LoginPromptPlugin",intro:"底部渲染登录引导条，点击登录回调 onLogin；与 RichComposer 同槽可共存。",why:"未登录态下把评论框换成轻引导，登录后切真框；同槽并联，不抢位。",plugs:[{fn:"createLoginPromptPlugin",why:"底部登录引导；onLogin 回调"}],props:[{text:"onLogin={() => { /* 跳转登录 */ }}"}],stageHeight:420};function Y1({log:e}){const[n,t]=h.useState(()=>ie()),o=h.useMemo(()=>J(q,[Hs()]),[]);return u.jsxs("div",{style:V1,children:[u.jsx(o,{comments:n,onLogin:()=>e("点击登录 → 跳转登录页"),onReply:(r,i)=>e("回复（需叠 ThreadPlugin）"),onSubmit:r=>e("发布（需叠 RichComposerPlugin）"),onLike:r=>e("点赞"),mentions:re}),u.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只有未登录引导被装上：列表底部出现「登录后参与评论」+ 登录按钮，点击写进日志。"})]})}const K1=Object.freeze(Object.defineProperty({__proto__:null,default:Y1,meta:Q1},Symbol.toStringTag,{value:"Module"})),G1=`import React, { useCallback, useMemo, useState } from "react";
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
`,q1=`import React, { useCallback, useMemo, useState } from "react";
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
`,X1=`import React, { useCallback, useMemo, useState } from "react";
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
`,J1=`import React, { useCallback, useMemo, useState } from "react";
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
`,Z1=`import React, { useCallback, useMemo, useState } from "react";
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
`,eS=`import React, { useCallback, useMemo, useState } from "react";
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
`,nS=`import React, { useMemo, useState } from "react";
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
`,tS=`import React, { useMemo, useState } from "react";
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
`,oS=`import React, { useMemo, useState } from "react";
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
`,rS=`import React, { useCallback, useMemo, useState } from "react";
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
`,iS=`import React, { useMemo, useState } from "react";
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
`,lS=`import React, { useMemo, useState } from "react";
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
`,sS=`import React, { useMemo, useState } from "react";
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
`,aS=`import React, { useMemo, useState } from "react";
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
`,uS=`import React, { useMemo, useState } from "react";
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
`,cS=`import React, { useMemo, useState } from "react";
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
`,dS=`import React, { useMemo, useState } from "react";
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
`,mS=`import React, { useMemo, useState } from "react";
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
`,pS=`import React, { useMemo, useState } from "react";
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
`,fS=Object.assign({"./00-quickstart.tsx":zh,"./01-like.tsx":ny,"./02-sort.tsx":xy,"./03-thread.tsx":Vy,"./04-rich-composer.tsx":fv,"./05-full-combo.tsx":vv,"./06-report.tsx":Iv,"./07-share.tsx":o0,"./08-copy.tsx":P0,"./09-reaction.tsx":W0,"./10-favorite.tsx":ax,"./11-pin.tsx":jx,"./12-location.tsx":Hx,"./13-timestamp.tsx":aC,"./14-count.tsx":_C,"./15-filter.tsx":VC,"./16-search.tsx":d1,"./17-moderation.tsx":N1,"./18-login.tsx":K1}),gS=Object.assign({"./00-quickstart.tsx":G1,"./01-like.tsx":q1,"./02-sort.tsx":X1,"./03-thread.tsx":J1,"./04-rich-composer.tsx":Z1,"./05-full-combo.tsx":eS,"./06-report.tsx":nS,"./07-share.tsx":tS,"./08-copy.tsx":oS,"./09-reaction.tsx":rS,"./10-favorite.tsx":iS,"./11-pin.tsx":lS,"./12-location.tsx":sS,"./13-timestamp.tsx":aS,"./14-count.tsx":uS,"./15-filter.tsx":cS,"./16-search.tsx":dS,"./17-moderation.tsx":mS,"./18-login.tsx":pS}),hS=e=>e.replace(/^\.\//,""),bl=Object.entries(fS).map(([e,n])=>{const t=hS(e);return{meta:n.meta,Stage:n.default,file:t,source:gS[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),yS=["basic","advanced","plugin"];Array.from(new Set(bl.map(e=>e.meta.plugin).filter(e=>!!e))).sort();const Tl={basic:{label:"基础功能",hint:"Core 自身的 props 与推导行为"},advanced:{label:"高级功能",hint:"全量装配 / 组合"},plugin:{label:"插件功能",hint:"一插件一页"}};function hu(e){const n={};for(const t of e.controls??[])n[t.key]=t.init;return n}const vS="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",xS="true|false|null|undefined|this|super",CS="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",yu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${vS})\b`,String.raw`\b(${xS})\b`,String.raw`\b(${CS})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),vu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function SS(e){const n=[];let t=0;yu.lastIndex=0;let o;for(;o=yu.exec(e);){o.index>t&&n.push({text:e.slice(t,o.index),cls:null});const r=vu.findIndex((i,l)=>o[l+1]!==void 0);n.push({text:o[0],cls:r>=0?vu[r]:null}),t=o.index+o[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function xu(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function wS({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:o}){const[r,i]=h.useState("idle"),[l,s]=h.useState(!1),a=h.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=t>0&&a.length>t,d=c&&!l?a.slice(0,t).join(`
`):e,m=h.useMemo(()=>SS(d),[d]),f=h.useCallback(async()=>{var x;let v=!1;if((x=navigator.clipboard)!=null&&x.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=xu(e)}else v=xu(e);i(v?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return u.jsxs("div",{className:"code",children:[u.jsxs("div",{className:"code-head",children:[u.jsx("span",{children:n}),u.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[u.jsxs("span",{children:[a.length," 行"]}),u.jsx("button",{type:"button",className:`code-copy${r==="ok"?" is-ok":r==="fail"?" is-fail":""}`,onClick:f,children:r==="ok"?"已复制":r==="fail"?"复制失败":"复制"})]})]}),u.jsx("pre",{style:o?{maxHeight:o}:{maxHeight:"none"},children:u.jsx("code",{children:m.map((v,x)=>v.cls?u.jsx("span",{className:v.cls,children:v.text},x):u.jsx(en.Fragment,{children:v.text},x))})}),c?u.jsx("button",{type:"button",className:"code-more",onClick:()=>s(v=>!v),children:l?"收起":`展开余下 ${a.length-t} 行`}):null]})}function xm(e){return e.props??e.config??[]}function PS({doc:e}){var r,i,l;const n=xm(e),t=e.events??[],o=e.methods??[];return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"属性 Props"}),n.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"属性"}),u.jsx("th",{children:"类型"}),u.jsx("th",{children:"默认"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:n.map(s=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:s.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:s.type})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:s.default??"-"})}),u.jsx("td",{children:s.description??"—"})]},s.name))})]}):u.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"事件 Events"}),t.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"事件"}),u.jsx("th",{children:"触发时机"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:t.map(s=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:s.name})}),u.jsx("td",{children:s.when}),u.jsx("td",{children:s.description})]},s.name))})]}):u.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"方法 Methods"}),o.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"方法"}),u.jsx("th",{children:"签名"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:o.map(s=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:s.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:s.signature})}),u.jsx("td",{children:s.description})]},s.name))})]}):u.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),u.jsxs("div",{className:"doc-cols",children:[(r=e.features)!=null&&r.length?u.jsxs("div",{children:[u.jsx("h5",{children:"能做"}),u.jsx("ul",{children:e.features.map(s=>u.jsx("li",{children:s},s))})]}):null,(i=e.useCases)!=null&&i.length?u.jsxs("div",{children:[u.jsx("h5",{children:"适合"}),u.jsx("ul",{children:e.useCases.map(s=>u.jsx("li",{children:s},s))})]}):null,(l=e.notes)!=null&&l.length?u.jsxs("div",{children:[u.jsx("h5",{children:"注意"}),u.jsx("ul",{children:e.notes.map(s=>u.jsx("li",{children:s},s))})]}):null]})]})}function kS({factory:e,priority:n,summary:t,doc:o,defaultOpen:r=!0}){var l,s;const i={props:xm(o).length,events:((l=o.events)==null?void 0:l.length)??0,methods:((s=o.methods)==null?void 0:s.length)??0};return u.jsxs("details",{className:"api-plug",open:r,children:[u.jsxs("summary",{children:[u.jsx("code",{children:e}),u.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),u.jsx("span",{className:"api-plug-desc",children:t}),u.jsxs("span",{className:"api-plug-n",children:[i.props," 属性 · ",i.events," 事件 · ",i.methods," 方法"]})]}),u.jsx("div",{className:"api-plug-body",children:u.jsx(PS,{doc:o})})]})}const _S=/create[A-Z]\w*Plugin/g;function RS(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Cm(e){return e.dir?`create${e.dir}`:RS(e.factory)}function jS(e){return new Set(e.match(_S)??[])}function ES(e,n){const t=jS(e);return n.filter(o=>t.has(Cm(o))).sort((o,r)=>o.priority-r.priority)}function bS({source:e,plugins:n,heading:t="本页用到的插件"}){const o=h.useMemo(()=>ES(e,n),[e,n]);return o.length===0?null:u.jsxs("section",{className:"api-sec",children:[u.jsxs("div",{className:"api-sec-head",children:[u.jsxs("h2",{className:"api-sec-title",children:[t," · ",o.length," 个"]}),u.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",u.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),o.map(r=>u.jsx(kS,{factory:Cm(r),priority:r.priority,summary:r.summary??r.doc.description??"",doc:r.doc},r.factory))]})}const TS=`import React, { useEffect, useRef, useState } from "react";
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
`,NS=`import React from "react";
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
`,$S=`import React from "react";
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
`,MS=`import React from "react";
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
`,DS=`import React, { useEffect, useRef, useState } from "react";
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
`,LS=`import React from "react";
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
`,OS=`import React from "react";
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
`,zS=`import React from "react";
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
`,IS=`import React from "react";
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
`,AS=`import React from "react";
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
`,FS=`import React, { useState } from "react";
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
`,US=`import React, { useRef, useState } from "react";
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
`,BS=`import React from "react";
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
`,WS=`import React, { useEffect, useRef, useState } from "react";
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
`,HS=`import React from "react";
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
`,VS=`import React, { createContext, useContext, useState } from "react";
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
`,QS=`import React from "react";
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
`,dw={engage:"互动",organize:"组织",compose:"编辑"},Cu=["engage","organize","compose"],Su=Object.assign({"/src/custom-plugins/CopyPlugin/doc.json":lm,"/src/custom-plugins/CountPlugin/doc.json":mm,"/src/custom-plugins/FavoritePlugin/doc.json":am,"/src/custom-plugins/FilterPlugin/doc.json":pm,"/src/custom-plugins/LikePlugin/doc.json":em,"/src/custom-plugins/LocationPlugin/doc.json":cm,"/src/custom-plugins/LoginPromptPlugin/doc.json":vm,"/src/custom-plugins/ModerationPlugin/doc.json":gm,"/src/custom-plugins/PinPlugin/doc.json":um,"/src/custom-plugins/ReactionPlugin/doc.json":sm,"/src/custom-plugins/ReportPlugin/doc.json":rm,"/src/custom-plugins/RichComposerPlugin/doc.json":om,"/src/custom-plugins/SearchPlugin/doc.json":fm,"/src/custom-plugins/SharePlugin/doc.json":im,"/src/custom-plugins/SortPlugin/doc.json":nm,"/src/custom-plugins/ThreadPlugin/doc.json":tm,"/src/custom-plugins/TimestampPlugin/doc.json":dm}),wu=Object.assign({"/src/custom-plugins/CopyPlugin/create.tsx":TS,"/src/custom-plugins/CountPlugin/create.tsx":NS,"/src/custom-plugins/FavoritePlugin/create.tsx":$S,"/src/custom-plugins/FilterPlugin/create.tsx":MS,"/src/custom-plugins/LikePlugin/create.tsx":DS,"/src/custom-plugins/LocationPlugin/create.tsx":LS,"/src/custom-plugins/LoginPromptPlugin/create.tsx":OS,"/src/custom-plugins/ModerationPlugin/create.tsx":zS,"/src/custom-plugins/PinPlugin/create.tsx":IS,"/src/custom-plugins/ReactionPlugin/create.tsx":AS,"/src/custom-plugins/ReportPlugin/create.tsx":FS,"/src/custom-plugins/RichComposerPlugin/create.tsx":US,"/src/custom-plugins/SearchPlugin/create.tsx":BS,"/src/custom-plugins/SharePlugin/create.tsx":WS,"/src/custom-plugins/SortPlugin/create.tsx":HS,"/src/custom-plugins/ThreadPlugin/create.tsx":VS,"/src/custom-plugins/TimestampPlugin/create.tsx":QS}),Sm=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function YS(e){const n=Object.keys(wu).find(r=>Sm(r)===e),t=n?wu[n]:"",o=/priority:\s*(\d+)/.exec(t);return o?Number(o[1]):0}function KS(e){const n=Object.keys(Su).find(t=>Sm(t)===e);return n?Su[n]:{name:e,description:"（缺少 doc.json）"}}const GS=[{dir:"LikePlugin",group:"engage",make:()=>qr()},{dir:"ThreadPlugin",group:"engage",make:()=>Jr({maxDepth:3})},{dir:"ReportPlugin",group:"engage",make:()=>Ms()},{dir:"SharePlugin",group:"engage",make:()=>Ds()},{dir:"CopyPlugin",group:"engage",make:()=>Ls()},{dir:"ReactionPlugin",group:"engage",make:()=>Os()},{dir:"FavoritePlugin",group:"engage",make:()=>zs()},{dir:"PinPlugin",group:"engage",make:()=>Is()},{dir:"LocationPlugin",group:"engage",make:()=>ei()},{dir:"TimestampPlugin",group:"engage",make:()=>As()},{dir:"SortPlugin",group:"organize",make:()=>Xr()},{dir:"CountPlugin",group:"organize",make:()=>Fs()},{dir:"FilterPlugin",group:"organize",make:()=>Us()},{dir:"SearchPlugin",group:"organize",make:()=>Bs()},{dir:"ModerationPlugin",group:"organize",make:()=>Ws()},{dir:"RichComposerPlugin",group:"compose",make:()=>Zr({features:{emoji:!0,image:!0,mention:!0}})},{dir:"LoginPromptPlugin",group:"compose",make:()=>Hs()}],$r=GS.map(e=>{const n=KS(e.dir);return{dir:e.dir,factory:`create${e.dir}Plugin`,group:e.group,priority:YS(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>Cu.indexOf(e.group)-Cu.indexOf(n.group)||n.priority-e.priority),mw=$r.map(e=>e.dir),qS=/\{\{\s*([\w-]+)\s*\}\}/g;function Pu(e,n){return e.replace(qS,(t,o)=>o in n?String(n[o]):t)}function XS(e){return e.replace(/^create/,"")}function JS(e,n){const o=['import { CommentCore, withCommentPlugins } from "vane-comment";',...e.plugs.map(s=>s.fn).sort().map(s=>`import { ${s} } from "vane-comment/custom-plugins/${XS(s)}";`),"",'import type { Comment } from "vane-comment";'].join(`
`),r=e.plugs.map(s=>`  ${s.fn}(${s.cfg?`{ ${Pu(s.cfg,n)} }`:""}),`).join(`
`),i=e.props.filter(s=>typeof s=="string"||!s.when||s.when(n)).map(s=>`      ${Pu(typeof s=="string"?s:s.text,n)}`).join(`
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
`}function ZS({controls:e,cfg:n,onChange:t}){return u.jsx("div",{className:"ctl-bar",children:e.filter(o=>!o.when||o.when(n)).map(o=>{const r=n[o.key];return u.jsxs("label",{className:"ctl",title:o.hint,children:[u.jsxs("span",{className:"ctl-label",children:[o.label,u.jsx("b",{className:"ctl-val",children:o.kind==="switch"?r?"开":"关":String(r)})]}),o.kind==="switch"?u.jsx("button",{type:"button",className:`ctl-switch${r?" is-on":""}`,onClick:()=>t(o.key,!r),"aria-pressed":!!r,children:u.jsx("i",{})}):o.kind==="select"?u.jsx("select",{className:"ctl-select",value:String(r),onChange:i=>t(o.key,i.target.value),children:(o.options??[]).map(i=>u.jsx("option",{value:i.value,children:i.label},i.value))}):u.jsx("input",{className:"ctl-range",type:"range",min:o.min??0,max:o.max??100,step:o.step??1,value:Number(r),onChange:i=>t(o.key,Number(i.target.value))})]},o.key)})})}function ew({lines:e,title:n="事件日志",empty:t="还没触发 —— 拖上面的控件，或点一下规格试试",right:o}){return u.jsxs("div",{className:"log",children:[u.jsxs("div",{className:"log-head",children:[u.jsx("span",{children:n}),u.jsxs("span",{className:"log-right",children:[o,u.jsx("b",{children:e.length})]})]}),e.length===0?u.jsx("p",{className:"log-empty",children:t}):u.jsx("ol",{className:"log-list",children:e.map(r=>u.jsxs("li",{className:`log-line is-${r.kind}`,children:[u.jsx("time",{children:r.at}),u.jsx("span",{children:r.text})]},r.id))})]})}function nw({entry:e,order:n}){var S;const{meta:t,Stage:o,file:r,source:i}=e,[l,s]=h.useState(()=>hu(t)),[a,c]=h.useState([]),[d,m]=h.useState("minimal"),f=h.useCallback((P,g="event")=>{const p=new Date().toLocaleTimeString("zh-CN",{hour12:!1});c(y=>[{id:y.length+1,at:p,text:P,kind:g},...y].slice(0,60))},[]),v=h.useCallback((P,g)=>{s(p=>({...p,[P]:g}))},[]),x=h.useMemo(()=>JS(t,l),[t,l]);return u.jsxs("section",{className:"demo","data-demo":t.slug,children:[u.jsxs("header",{className:"demo-head",children:[u.jsxs("div",{className:"demo-folio",children:[u.jsx("span",{className:"demo-no",children:String(n).padStart(2,"0")}),u.jsx("em",{children:"plate"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"demo-title-row",children:[u.jsx("h2",{children:t.title}),u.jsx("span",{className:"demo-group",children:Tl[t.group].label}),t.plugin?u.jsx("code",{className:"demo-plugin",children:t.plugin}):null]}),u.jsx("p",{className:"demo-intro",children:t.intro}),u.jsxs("p",{className:"demo-why",children:[u.jsx("b",{children:"什么时候用"}),t.why]})]}),u.jsxs("div",{className:"demo-meta",children:[u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"file"}),u.jsx("b",{children:r})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"group"}),u.jsx("b",{children:Tl[t.group].label})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"plugs"}),u.jsx("b",{children:t.plugs.length?`${t.plugs.length} installed`:"core only"})]})]})]}),(S=t.controls)!=null&&S.length?u.jsxs("div",{className:"demo-controls",children:[u.jsx(ZS,{controls:t.controls,cfg:l,onChange:v}),u.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{s(hu(t)),c([])},children:"重置"})]}):null,u.jsxs("div",{className:"demo-body",children:[u.jsxs("figure",{className:"plate",children:[u.jsxs("figcaption",{className:"plate-cap",children:[u.jsx("b",{children:"stage"}),u.jsxs("span",{children:[t.tone==="light"?"light surface":"live render",t.stageHeight?` · ${t.stageHeight}px`:""]}),u.jsx("em",{children:"live"})]}),u.jsx("div",{className:"plate-ruler","aria-hidden":!0}),u.jsx("div",{className:`plate-body demo-stage${t.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${t.stageHeight??380}px`},children:u.jsx(o,{cfg:l,log:f,setCfg:v})})]}),u.jsxs("aside",{className:"demo-side",children:[u.jsx("div",{className:"demo-plugs",children:t.plugs.length===0?u.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):t.plugs.map(P=>u.jsx("span",{className:`demo-plug${P.local?" is-local":""}`,children:P.fn.replace(/^create|Plugin$/g,"")},P.fn))}),u.jsx("ul",{className:"demo-why-list",children:t.plugs.map(P=>u.jsxs("li",{children:[u.jsx("code",{children:P.fn}),u.jsx("span",{children:P.why})]},P.fn))}),t.note?u.jsxs("p",{className:"demo-note",children:["⚠ ",t.note]}):null,u.jsx(ew,{lines:a,empty:t.plugs.length>0?"还没触发 —— 拖上面的控件，或点一下规格试试":"这一页没有事件类行为，日志留白"})]})]}),u.jsxs("div",{className:"demo-code",children:[u.jsxs("div",{className:"demo-switch",role:"tablist",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>m("minimal"),children:"最小装配"}),u.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>m("full"),children:"完整源码"})]}),u.jsx(wS,{code:d==="minimal"?x:i,title:d==="minimal"?`${t.slug}.minimal.tsx`:r,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]}),u.jsx(bS,{source:i,plugins:$r})]})}const tw=h.lazy(()=>Ts(()=>import("./HomePage-nnaPfW2A.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),ow=h.lazy(()=>Ts(()=>import("./PluginsPage-DsNq5a3V.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),rw=h.lazy(()=>Ts(()=>import("./ScenariosPage-DVnLt4zs.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),iw={pkg:"vane-comment",brand:"v",subtitle:"评论区 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${$r.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"4 plates"}],routes:[{path:"/",element:u.jsx(tw,{})},{path:"/plugins",element:u.jsx(ow,{})},{path:"/scenarios",element:u.jsx(rw,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:yS.map(e=>({key:e,label:Tl[e].label})),entries:bl,detail:(e,n)=>u.jsx(nw,{entry:e,order:n})},footer:[`${$r.length} PLUGINS · 4 PLATES`,`${bl.length} DEMOS · COMMENT CORE`]};function lw(){return u.jsx(lh,{config:iw})}function sw(e){const n=[];if(!e)return{problems:["体检根节点不存在"],checked:0};const t=Array.from(e.querySelectorAll('[data-testid="comment-item"]')).filter(s=>{var a;return!((a=s.parentElement)!=null&&a.closest('[data-testid="comment-item"]'))});let o=0;const r=e.getBoundingClientRect();if(!(r.width!==0||r.height!==0||t.some(s=>{const a=s.getBoundingClientRect();return a.width!==0||a.height!==0})))return{problems:[],checked:0};for(const s of t){o+=1;const a=s.getBoundingClientRect();if(a.width===0||a.height===0){n.push(`零尺寸评论项（${a.width}×${a.height}）`);continue}const c=a.left-r.left,d=a.top-r.top;(c<-.5||d<-.5)&&n.push(`负坐标评论项（left=${c.toFixed(1)}, top=${d.toFixed(1)}）`),(a.right-r.right>1||a.bottom-r.bottom>1)&&n.push(`越界评论项（超出宿主右/下边界 ${(a.right-r.right).toFixed(1)}/${(a.bottom-r.bottom).toFixed(1)}px）`)}for(let s=0;s<t.length;s+=1)for(let a=s+1;a<t.length;a+=1){const c=t[s].getBoundingClientRect(),d=t[a].getBoundingClientRect();c.left<d.right-1&&d.left<c.right-1&&c.top<d.bottom-1&&d.top<c.bottom-1&&n.push(`评论项重叠：顶层第 ${s+1} 与第 ${a+1} 项`)}const l=t.reduce((s,a)=>Math.max(s,a.getBoundingClientRect().bottom-r.top),0);return t.length&&e.scrollHeight+1<l&&n.push(`容器未撑开：scrollHeight=${e.scrollHeight} 小于内容底边 ${l.toFixed(1)}`),{problems:Array.from(new Set(n)),checked:o}}const ku={id:"u-me",name:"我",avatar:void 0};function it({sortMode:e}){const[n,t]=en.useState(()=>ie()),o=en.useCallback(s=>{t(a=>a.map(c=>c.id===s?{...c,liked:!c.liked,likeCount:(c.likeCount??0)+(c.liked?-1:1)}:c))},[]),r=en.useCallback((s,a)=>{t(c=>c.map(d=>d.id===s?{...d,replies:[{id:`${s}-r${Date.now()}`,author:ku,content:a,createdAt:Date.now(),likeCount:0,liked:!1},...d.replies??[]],replyCount:(d.replyCount??0)+1}:d))},[]),i=en.useCallback(s=>{t(a=>[{id:`c-${Date.now()}`,author:ku,content:s,createdAt:Date.now(),likeCount:0,liked:!1},...a])},[]),l=en.useMemo(()=>J(q,[qr(),Xr({modes:["newest","oldest","hottest","mostLiked"],defaultMode:"newest"}),Jr({maxDepth:3}),Zr({features:{emoji:!0,image:!0,mention:!0}}),Ms(),Ds(),Ls(),Os(),zs(),Is(),ei(),As(),Fs(),Us(),Bs(),Hs()]),[]);return u.jsx(l,{comments:n,defaultSortMode:e??"newest",onLike:o,onReply:r,onSubmit:i,onReport:()=>{},onFavorite:()=>{},onPin:()=>{},onReact:()=>{},onLogin:()=>{},mentions:re})}const _u=()=>new Promise(e=>setTimeout(e,0));async function yn(e){const n=document.createElement("div");n.style.cssText="position:fixed;left:0;top:0;width:520px;background:#fff",document.body.appendChild(n);const t=Id(n);return He.flushSync(()=>t.render(e)),await _u(),{host:n,root:t,q:o=>n.querySelector(o),qa:o=>Array.from(n.querySelectorAll(o)),click:async o=>{const r=n.querySelector(o);if(!r)throw new Error(`找不到元素 ${o}`);He.flushSync(()=>r.click()),await _u()}}}function Ti(e){return Array.from(e.querySelectorAll('[data-testid="comment-item"]')).filter(n=>{var t;return!((t=n.parentElement)!=null&&t.closest('[data-testid="comment-item"]'))}).map(n=>{var t,o;return((o=(t=n.querySelector(".vc-meta span"))==null?void 0:t.textContent)==null?void 0:o.trim())??""})}async function aw(){var o,r,i,l,s;const e=[];let n=0;const t=(a,c)=>{n+=1,document.title=`SELFTEST RUNNING ${n}`,c||e.push(a)};{const a=await yn(u.jsx(it,{sortMode:"newest"})),c=Ti(a.host);t("渲染：顶层评论项 = 5",c.length===5);const m=a.qa('[data-testid="comment-item"]').filter(f=>{var v;return!!((v=f.parentElement)!=null&&v.closest('[data-testid="comment-item"]'))});t("楼中楼：含嵌套回复（≥2）",m.length>=2),t("富编辑：渲染评论框 textarea",!!a.q("textarea")),t("几何体检：评论项无越界/负坐标/零尺寸/重叠",sw(a.host).problems.length===0),He.flushSync(()=>a.root.unmount()),a.host.remove()}{const a=await yn(u.jsx(it,{sortMode:"newest"})),c=a.q('[data-testid="comment-like"]');t("点赞：首个评论项渲染点赞按钮",!!c);const d=((o=c==null?void 0:c.textContent)==null?void 0:o.trim())??"";await a.click('[data-testid="comment-like"]');const m=((i=(r=a.q('[data-testid="comment-like"]'))==null?void 0:r.textContent)==null?void 0:i.trim())??"";t(`点赞：点击后计数变化（${d} → ${m}）`,d!==m&&m!==""),He.flushSync(()=>a.root.unmount()),a.host.remove()}{const a=await yn(u.jsx(it,{sortMode:"newest"}));t("排序 newest：首条为最新（Monica）",Ti(a.host)[0]==="Monica"),He.flushSync(()=>a.root.unmount()),a.host.remove();const c=await yn(u.jsx(it,{sortMode:"oldest"}));t("排序 oldest：首条为最早（Ross）",Ti(c.host)[0]==="Ross"),He.flushSync(()=>c.root.unmount()),c.host.remove()}{const a=await yn(u.jsx(it,{sortMode:"newest"}));t("新插件：举报按钮渲染",!!a.q('[data-testid="comment-report"]')),t("新插件：分享按钮渲染",!!a.q('[data-testid="comment-share"]')),t("新插件：复制按钮渲染",!!a.q('[data-testid="comment-copy"]')),t("新插件：多表情反应渲染",!!a.q('[data-testid="comment-reaction"]')),t("新插件：收藏按钮渲染",!!a.q('[data-testid="comment-favorite"]')),t("新插件：置顶按钮渲染",!!a.q('[data-testid="comment-pin"]')),t("新插件：绝对时间渲染",!!a.q('[data-testid="comment-timestamp"]')),t("新插件：计数条渲染（含「条评论」）",(((l=a.q('[data-testid="comment-count"]'))==null?void 0:l.textContent)??"").includes("条评论")),t("新插件：筛选栏渲染",!!a.q('[data-testid="comment-filter"]')),t("新插件：搜索框渲染",!!a.q('[data-testid="comment-search"]')),t("新插件：未登录引导渲染",!!a.q('[data-testid="comment-login-prompt"]')),He.flushSync(()=>a.root.unmount()),a.host.remove()}{const a=[{id:"m1",author:{id:"a",name:"A"},content:[{type:"text",value:"这是一段广告内容请加微信"}],createdAt:Date.now(),likeCount:0}],c=J(q,[Ws({words:["广告","加微信"]})]),d=await yn(u.jsx(c,{comments:a})),m=((s=d.q(".vc-content"))==null?void 0:s.textContent)??"";t("审核：敏感词被脱敏（广告/加微信 不再出现）",!m.includes("广告")&&!m.includes("加微信")),He.flushSync(()=>d.root.unmount()),d.host.remove();const f=[{id:"l1",author:{id:"a",name:"A"},content:[{type:"text",value:"好店推荐"}],createdAt:Date.now(),likeCount:0,location:"上海"}],v=J(q,[ei()]),x=await yn(u.jsx(v,{comments:f}));t("地理位置：含 location 时渲染 📍 标",!!x.q('[data-testid="comment-location"]')),He.flushSync(()=>x.root.unmount()),x.host.remove()}{const a=await yn(u.jsx(it,{sortMode:"newest"})),c=a.qa(".vc-actions");t("布局：存在操作行容器 .vc-actions",c.length>0),t("布局：操作行开启 flex-wrap（避免按钮挤成竖排）",c.every(f=>(f.style.flexWrap||"").toLowerCase()==="wrap"));const d=c.reduce((f,v)=>f+v.children.length,0),m=c.reduce((f,v)=>f+Array.from(v.children).filter(x=>x.style.flexShrink==="0").length,0);t("布局：操作行子项均 flex-shrink:0（不挤压）",d>0&&m===d),He.flushSync(()=>a.root.unmount()),a.host.remove()}return{total:n,passed:n-e.length,failed:e}}async function uw(){document.title="SELFTEST RUNNING";try{const e=await aw();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Ni.createRoot(document.getElementById("root")).render(u.jsx(lw,{}));typeof location<"u"&&location.search.includes("selftest=1")&&uw();export{wS as C,bl as D,Cu as G,El as L,re as M,$r as P,Xr as a,Jr as b,qr as c,Zr as d,q as e,ie as f,mw as g,dw as h,sw as i,u as j,Ms as k,Ds as l,Fs as m,Ws as n,Hs as o,Ls as p,Os as q,h as r,zs as s,Is as t,ei as u,As as v,J as w,Us as x,Bs as y};
