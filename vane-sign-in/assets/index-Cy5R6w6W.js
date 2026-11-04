var $f=Object.defineProperty;var Df=(e,n,t)=>n in e?$f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ys=(e,n,t)=>Df(e,typeof n!="symbol"?n+"":n,t);function Nf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function Mf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qu={exports:{}},qi={},Xu={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=Symbol.for("react.element"),Of=Symbol.for("react.portal"),Lf=Symbol.for("react.fragment"),zf=Symbol.for("react.strict_mode"),Af=Symbol.for("react.profiler"),Bf=Symbol.for("react.provider"),Ff=Symbol.for("react.context"),Uf=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),Hf=Symbol.for("react.memo"),Vf=Symbol.for("react.lazy"),vs=Symbol.iterator;function Gf(e){return e===null||typeof e!="object"?null:(e=vs&&e[vs]||e["@@iterator"],typeof e=="function"?e:null)}var Yu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zu=Object.assign,Ju={};function At(e,n,t){this.props=e,this.context=n,this.refs=Ju,this.updater=t||Yu}At.prototype.isReactComponent={};At.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};At.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qu(){}qu.prototype=At.prototype;function Xl(e,n,t){this.props=e,this.context=n,this.refs=Ju,this.updater=t||Yu}var Yl=Xl.prototype=new qu;Yl.constructor=Xl;Zu(Yl,At.prototype);Yl.isPureReactComponent=!0;var Ss=Array.isArray,ec=Object.prototype.hasOwnProperty,Zl={current:null},nc={key:!0,ref:!0,__self:!0,__source:!0};function tc(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)ec.call(n,r)&&!nc.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ur,type:e,key:o,ref:l,props:i,_owner:Zl.current}}function Kf(e,n){return{$$typeof:Ur,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Jl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function Qf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var xs=/\/+/g;function So(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Qf(""+e.key):n.toString(36)}function pi(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ur:case Of:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+So(l,0):r,Ss(i)?(t="",e!=null&&(t=e.replace(xs,"$&/")+"/"),pi(i,n,t,"",function(u){return u})):i!=null&&(Jl(i)&&(i=Kf(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(xs,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",Ss(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+So(o,a);l+=pi(o,n,t,s,i)}else if(s=Gf(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+So(o,a++),l+=pi(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Xr(e,n,t){if(e==null)return e;var r=[],i=0;return pi(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Xf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},gi={transition:null},Yf={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:gi,ReactCurrentOwner:Zl};function rc(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:Xr,forEach:function(e,n,t){Xr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Xr(e,function(){n++}),n},toArray:function(e){return Xr(e,function(n){return n})||[]},only:function(e){if(!Jl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=At;N.Fragment=Lf;N.Profiler=Af;N.PureComponent=Xl;N.StrictMode=zf;N.Suspense=Wf;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yf;N.act=rc;N.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zu({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Zl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)ec.call(n,s)&&!nc.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ur,type:e.type,key:i,ref:o,props:r,_owner:l}};N.createContext=function(e){return e={$$typeof:Ff,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bf,_context:e},e.Consumer=e};N.createElement=tc;N.createFactory=function(e){var n=tc.bind(null,e);return n.type=e,n};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:Uf,render:e}};N.isValidElement=Jl;N.lazy=function(e){return{$$typeof:Vf,_payload:{_status:-1,_result:e},_init:Xf}};N.memo=function(e,n){return{$$typeof:Hf,type:e,compare:n===void 0?null:n}};N.startTransition=function(e){var n=gi.transition;gi.transition={};try{e()}finally{gi.transition=n}};N.unstable_act=rc;N.useCallback=function(e,n){return ke.current.useCallback(e,n)};N.useContext=function(e){return ke.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};N.useEffect=function(e,n){return ke.current.useEffect(e,n)};N.useId=function(){return ke.current.useId()};N.useImperativeHandle=function(e,n,t){return ke.current.useImperativeHandle(e,n,t)};N.useInsertionEffect=function(e,n){return ke.current.useInsertionEffect(e,n)};N.useLayoutEffect=function(e,n){return ke.current.useLayoutEffect(e,n)};N.useMemo=function(e,n){return ke.current.useMemo(e,n)};N.useReducer=function(e,n,t){return ke.current.useReducer(e,n,t)};N.useRef=function(e){return ke.current.useRef(e)};N.useState=function(e){return ke.current.useState(e)};N.useSyncExternalStore=function(e,n,t){return ke.current.useSyncExternalStore(e,n,t)};N.useTransition=function(){return ke.current.useTransition()};N.version="18.3.1";Xu.exports=N;var y=Xu.exports;const Wr=Mf(y),Zf=Nf({__proto__:null,default:Wr},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf=y,qf=Symbol.for("react.element"),ep=Symbol.for("react.fragment"),np=Object.prototype.hasOwnProperty,tp=Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rp={key:!0,ref:!0,__self:!0,__source:!0};function ic(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)np.call(n,r)&&!rp.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:qf,type:e,key:o,ref:l,props:i,_owner:tp.current}}qi.Fragment=ep;qi.jsx=ic;qi.jsxs=ic;Qu.exports=qi;var c=Qu.exports,Go={},oc={exports:{}},Ne={},lc={exports:{}},ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,$){var D=T.length;T.push($);e:for(;0<D;){var K=D-1>>>1,re=T[K];if(0<i(re,$))T[K]=$,T[D]=re,D=K;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var $=T[0],D=T.pop();if(D!==$){T[0]=D;e:for(var K=0,re=T.length,A=re>>>1;K<A;){var B=2*(K+1)-1,se=T[B],me=B+1,ue=T[me];if(0>i(se,D))me<re&&0>i(ue,se)?(T[K]=ue,T[me]=D,K=me):(T[K]=se,T[B]=D,K=B);else if(me<re&&0>i(ue,D))T[K]=ue,T[me]=D,K=me;else break e}}return $}function i(T,$){var D=T.sortIndex-$.sortIndex;return D!==0?D:T.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,d=null,h=3,v=!1,S=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var $=t(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=T)r(u),$.sortIndex=$.expirationTime,n(s,$);else break;$=t(u)}}function w(T){if(x=!1,g(T),!S)if(t(s)!==null)S=!0,We(E);else{var $=t(u);$!==null&&Ze(w,$.startTime-T)}}function E(T,$){S=!1,x&&(x=!1,m(j),j=-1),v=!0;var D=h;try{for(g($),d=t(s);d!==null&&(!(d.expirationTime>$)||T&&!M());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var re=K(d.expirationTime<=$);$=e.unstable_now(),typeof re=="function"?d.callback=re:d===t(s)&&r(s),g($)}else r(s);d=t(s)}if(d!==null)var A=!0;else{var B=t(u);B!==null&&Ze(w,B.startTime-$),A=!1}return A}finally{d=null,h=D,v=!1}}var I=!1,b=null,j=-1,k=5,_=-1;function M(){return!(e.unstable_now()-_<k)}function ee(){if(b!==null){var T=e.unstable_now();_=T;var $=!0;try{$=b(!0,T)}finally{$?L():(I=!1,b=null)}}else I=!1}var L;if(typeof f=="function")L=function(){f(ee)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,hn=oe.port2;oe.port1.onmessage=ee,L=function(){hn.postMessage(null)}}else L=function(){P(ee,0)};function We(T){b=T,I||(I=!0,L())}function Ze(T,$){j=P(function(){T(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){S||v||(S=!0,We(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var D=h;h=$;try{return T()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,$){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=h;h=T;try{return $()}finally{h=D}},e.unstable_scheduleCallback=function(T,$,D){var K=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?K+D:K):D=K,T){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=D+re,T={id:p++,callback:$,priorityLevel:T,startTime:D,expirationTime:re,sortIndex:-1},D>K?(T.sortIndex=D,n(u,T),t(s)===null&&T===t(u)&&(x?(m(j),j=-1):x=!0,Ze(w,D-K))):(T.sortIndex=re,n(s,T),S||v||(S=!0,We(E))),T},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(T){var $=h;return function(){var D=h;h=$;try{return T.apply(this,arguments)}finally{h=D}}}})(ac);lc.exports=ac;var ip=lc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op=y,$e=ip;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sc=new Set,Pr={};function ot(e,n){$t(e,n),$t(e+"Capture",n)}function $t(e,n){for(Pr[e]=n,e=0;e<n.length;e++)sc.add(n[e])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ko=Object.prototype.hasOwnProperty,lp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ws={},ks={};function ap(e){return Ko.call(ks,e)?!0:Ko.call(ws,e)?!1:lp.test(e)?ks[e]=!0:(ws[e]=!0,!1)}function sp(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function up(e,n,t,r){if(n===null||typeof n>"u"||sp(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Pe(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ge[n]=new Pe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ql=/[\-:]([a-z])/g;function ea(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ql,ea);ge[n]=new Pe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ql,ea);ge[n]=new Pe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ql,ea);ge[n]=new Pe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function na(e,n,t,r){var i=ge.hasOwnProperty(n)?ge[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(up(n,t,i,r)&&(t=null),r||i===null?ap(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var gn=op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yr=Symbol.for("react.element"),gt=Symbol.for("react.portal"),mt=Symbol.for("react.fragment"),ta=Symbol.for("react.strict_mode"),Qo=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),cc=Symbol.for("react.context"),ra=Symbol.for("react.forward_ref"),Xo=Symbol.for("react.suspense"),Yo=Symbol.for("react.suspense_list"),ia=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),dc=Symbol.for("react.offscreen"),Ps=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=Ps&&e[Ps]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,xo;function ur(e){if(xo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xo=n&&n[1]||""}return`
`+xo+e}var wo=!1;function ko(e,n){if(!e||wo)return"";wo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{wo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ur(e):""}function cp(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=ko(e.type,!1),e;case 11:return e=ko(e.type.render,!1),e;case 1:return e=ko(e.type,!0),e;default:return""}}function Zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mt:return"Fragment";case gt:return"Portal";case Qo:return"Profiler";case ta:return"StrictMode";case Xo:return"Suspense";case Yo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cc:return(e.displayName||"Context")+".Consumer";case uc:return(e._context.displayName||"Context")+".Provider";case ra:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ia:return n=e.displayName||null,n!==null?n:Zo(e.type)||"Memo";case vn:n=e._payload,e=e._init;try{return Zo(e(n))}catch{}}return null}function dp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zo(n);case 8:return n===ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fp(e){var n=fc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Zr(e){e._valueTracker||(e._valueTracker=fp(e))}function pc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=fc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jo(e,n){var t=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Cs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Nn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function gc(e,n){n=n.checked,n!=null&&na(e,"checked",n,!1)}function qo(e,n){gc(e,n);var t=Nn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?el(e,n.type,t):n.hasOwnProperty("defaultValue")&&el(e,n.type,Nn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function _s(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function el(e,n,t){(n!=="number"||_i(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var cr=Array.isArray;function Et(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Nn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function nl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Es(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(cr(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Nn(t)}}function mc(e,n){var t=Nn(n.value),r=Nn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ts(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function hc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?hc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jr,yc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Cr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pp=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){pp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),gr[n]=gr[e]})});function vc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||gr.hasOwnProperty(e)&&gr[e]?(""+n).trim():n+"px"}function Sc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=vc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var gp=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,n){if(n){if(gp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function il(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ol=null;function oa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,Tt=null,Rt=null;function Rs(e){if(e=Gr(e)){if(typeof ll!="function")throw Error(C(280));var n=e.stateNode;n&&(n=io(n),ll(e.stateNode,e.type,n))}}function xc(e){Tt?Rt?Rt.push(e):Rt=[e]:Tt=e}function wc(){if(Tt){var e=Tt,n=Rt;if(Rt=Tt=null,Rs(e),n)for(e=0;e<n.length;e++)Rs(n[e])}}function kc(e,n){return e(n)}function Pc(){}var Po=!1;function Cc(e,n,t){if(Po)return e(n,t);Po=!0;try{return kc(e,n,t)}finally{Po=!1,(Tt!==null||Rt!==null)&&(Pc(),wc())}}function _r(e,n){var t=e.stateNode;if(t===null)return null;var r=io(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var al=!1;if(un)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){al=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{al=!1}function mp(e,n,t,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var mr=!1,Ei=null,Ti=!1,sl=null,hp={onError:function(e){mr=!0,Ei=e}};function yp(e,n,t,r,i,o,l,a,s){mr=!1,Ei=null,mp.apply(hp,arguments)}function vp(e,n,t,r,i,o,l,a,s){if(yp.apply(this,arguments),mr){if(mr){var u=Ei;mr=!1,Ei=null}else throw Error(C(198));Ti||(Ti=!0,sl=u)}}function lt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function _c(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function bs(e){if(lt(e)!==e)throw Error(C(188))}function Sp(e){var n=e.alternate;if(!n){if(n=lt(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return bs(i),e;if(o===r)return bs(i),n;o=o.sibling}throw Error(C(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function Ec(e){return e=Sp(e),e!==null?Tc(e):null}function Tc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Tc(e);if(n!==null)return n;e=e.sibling}return null}var Rc=$e.unstable_scheduleCallback,Is=$e.unstable_cancelCallback,xp=$e.unstable_shouldYield,wp=$e.unstable_requestPaint,ne=$e.unstable_now,kp=$e.unstable_getCurrentPriorityLevel,la=$e.unstable_ImmediatePriority,bc=$e.unstable_UserBlockingPriority,Ri=$e.unstable_NormalPriority,Pp=$e.unstable_LowPriority,Ic=$e.unstable_IdlePriority,eo=null,nn=null;function Cp(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Tp,_p=Math.log,Ep=Math.LN2;function Tp(e){return e>>>=0,e===0?32:31-(_p(e)/Ep|0)|0}var qr=64,ei=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~i;a!==0?r=dr(a):(o&=l,o!==0&&(r=dr(o)))}else l=t&~i,l!==0?r=dr(l):o!==0&&(r=dr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Qe(n),i=1<<t,r|=e[t],n&=~i;return r}function Rp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Qe(o),a=1<<l,s=i[l];s===-1?(!(a&t)||a&r)&&(i[l]=Rp(a,n)):s<=n&&(e.expiredLanes|=a),o&=~a}}function ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jc(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function Co(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Hr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Qe(n),e[n]=t}function Ip(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Qe(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function aa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Qe(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var z=0;function $c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dc,sa,Nc,Mc,Oc,cl=!1,ni=[],_n=null,En=null,Tn=null,Er=new Map,Tr=new Map,xn=[],jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function js(e,n){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Er.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tr.delete(n.pointerId)}}function tr(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Gr(n),n!==null&&sa(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function $p(e,n,t,r,i){switch(n){case"focusin":return _n=tr(_n,e,n,t,r,i),!0;case"dragenter":return En=tr(En,e,n,t,r,i),!0;case"mouseover":return Tn=tr(Tn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Er.set(o,tr(Er.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Tr.set(o,tr(Tr.get(o)||null,e,n,t,r,i)),!0}return!1}function Lc(e){var n=Gn(e.target);if(n!==null){var t=lt(n);if(t!==null){if(n=t.tag,n===13){if(n=_c(t),n!==null){e.blockedOn=n,Oc(e.priority,function(){Nc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=dl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ol=r,t.target.dispatchEvent(r),ol=null}else return n=Gr(t),n!==null&&sa(n),e.blockedOn=t,!1;n.shift()}return!0}function $s(e,n,t){mi(e)&&t.delete(n)}function Dp(){cl=!1,_n!==null&&mi(_n)&&(_n=null),En!==null&&mi(En)&&(En=null),Tn!==null&&mi(Tn)&&(Tn=null),Er.forEach($s),Tr.forEach($s)}function rr(e,n){e.blockedOn===n&&(e.blockedOn=null,cl||(cl=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Dp)))}function Rr(e){function n(i){return rr(i,e)}if(0<ni.length){rr(ni[0],e);for(var t=1;t<ni.length;t++){var r=ni[t];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&rr(_n,e),En!==null&&rr(En,e),Tn!==null&&rr(Tn,e),Er.forEach(n),Tr.forEach(n),t=0;t<xn.length;t++)r=xn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<xn.length&&(t=xn[0],t.blockedOn===null);)Lc(t),t.blockedOn===null&&xn.shift()}var bt=gn.ReactCurrentBatchConfig,Ii=!0;function Np(e,n,t,r){var i=z,o=bt.transition;bt.transition=null;try{z=1,ua(e,n,t,r)}finally{z=i,bt.transition=o}}function Mp(e,n,t,r){var i=z,o=bt.transition;bt.transition=null;try{z=4,ua(e,n,t,r)}finally{z=i,bt.transition=o}}function ua(e,n,t,r){if(Ii){var i=dl(e,n,t,r);if(i===null)No(e,n,r,ji,t),js(e,r);else if($p(i,e,n,t,r))r.stopPropagation();else if(js(e,r),n&4&&-1<jp.indexOf(e)){for(;i!==null;){var o=Gr(i);if(o!==null&&Dc(o),o=dl(e,n,t,r),o===null&&No(e,n,r,ji,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else No(e,n,r,null,t)}}var ji=null;function dl(e,n,t,r){if(ji=null,e=oa(r),e=Gn(e),e!==null)if(n=lt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=_c(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ji=e,null}function zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kp()){case la:return 1;case bc:return 4;case Ri:case Pp:return 16;case Ic:return 536870912;default:return 16}default:return 16}}var kn=null,ca=null,hi=null;function Ac(){if(hi)return hi;var e,n=ca,t=n.length,r,i="value"in kn?kn.value:kn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return hi=i.slice(e,1<r?1-r:void 0)}function yi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function Ds(){return!1}function Me(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ti:Ds,this.isPropagationStopped=Ds,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),n}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},da=Me(Bt),Vr=Y({},Bt,{view:0,detail:0}),Op=Me(Vr),_o,Eo,ir,no=Y({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(_o=e.screenX-ir.screenX,Eo=e.screenY-ir.screenY):Eo=_o=0,ir=e),_o)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),Ns=Me(no),Lp=Y({},no,{dataTransfer:0}),zp=Me(Lp),Ap=Y({},Vr,{relatedTarget:0}),To=Me(Ap),Bp=Y({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),Fp=Me(Bp),Up=Y({},Bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wp=Me(Up),Hp=Y({},Bt,{data:0}),Ms=Me(Hp),Vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Kp[e])?!!n[e]:!1}function fa(){return Qp}var Xp=Y({},Vr,{key:function(e){if(e.key){var n=Vp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yp=Me(Xp),Zp=Y({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Os=Me(Zp),Jp=Y({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),qp=Me(Jp),eg=Y({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ng=Me(eg),tg=Y({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=Me(tg),ig=[9,13,27,32],pa=un&&"CompositionEvent"in window,hr=null;un&&"documentMode"in document&&(hr=document.documentMode);var og=un&&"TextEvent"in window&&!hr,Bc=un&&(!pa||hr&&8<hr&&11>=hr),Ls=" ",zs=!1;function Fc(e,n){switch(e){case"keyup":return ig.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ht=!1;function lg(e,n){switch(e){case"compositionend":return Uc(n);case"keypress":return n.which!==32?null:(zs=!0,Ls);case"textInput":return e=n.data,e===Ls&&zs?null:e;default:return null}}function ag(e,n){if(ht)return e==="compositionend"||!pa&&Fc(e,n)?(e=Ac(),hi=ca=kn=null,ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bc&&n.locale!=="ko"?null:n.data;default:return null}}var sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function As(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sg[e.type]:n==="textarea"}function Wc(e,n,t,r){xc(r),n=$i(n,"onChange"),0<n.length&&(t=new da("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var yr=null,br=null;function ug(e){ed(e,0)}function to(e){var n=St(e);if(pc(n))return e}function cg(e,n){if(e==="change")return n}var Hc=!1;if(un){var Ro;if(un){var bo="oninput"in document;if(!bo){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),bo=typeof Bs.oninput=="function"}Ro=bo}else Ro=!1;Hc=Ro&&(!document.documentMode||9<document.documentMode)}function Fs(){yr&&(yr.detachEvent("onpropertychange",Vc),br=yr=null)}function Vc(e){if(e.propertyName==="value"&&to(br)){var n=[];Wc(n,br,e,oa(e)),Cc(ug,n)}}function dg(e,n,t){e==="focusin"?(Fs(),yr=n,br=t,yr.attachEvent("onpropertychange",Vc)):e==="focusout"&&Fs()}function fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return to(br)}function pg(e,n){if(e==="click")return to(n)}function gg(e,n){if(e==="input"||e==="change")return to(n)}function mg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ye=typeof Object.is=="function"?Object.is:mg;function Ir(e,n){if(Ye(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Ko.call(n,i)||!Ye(e[i],n[i]))return!1}return!0}function Us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ws(e,n){var t=Us(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Us(t)}}function Gc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kc(){for(var e=window,n=_i();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=_i(e.document)}return n}function ga(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function hg(e){var n=Kc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Gc(t.ownerDocument.documentElement,t)){if(r!==null&&ga(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ws(t,o);var l=Ws(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yg=un&&"documentMode"in document&&11>=document.documentMode,yt=null,fl=null,vr=null,pl=!1;function Hs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pl||yt==null||yt!==_i(r)||(r=yt,"selectionStart"in r&&ga(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&Ir(vr,r)||(vr=r,r=$i(fl,"onSelect"),0<r.length&&(n=new da("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=yt)))}function ri(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var vt={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionend:ri("Transition","TransitionEnd")},Io={},Qc={};un&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete vt.animationend.animation,delete vt.animationiteration.animation,delete vt.animationstart.animation),"TransitionEvent"in window||delete vt.transitionend.transition);function ro(e){if(Io[e])return Io[e];if(!vt[e])return e;var n=vt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Qc)return Io[e]=n[t];return e}var Xc=ro("animationend"),Yc=ro("animationiteration"),Zc=ro("animationstart"),Jc=ro("transitionend"),qc=new Map,Vs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,n){qc.set(e,n),ot(n,[e])}for(var jo=0;jo<Vs.length;jo++){var $o=Vs[jo],vg=$o.toLowerCase(),Sg=$o[0].toUpperCase()+$o.slice(1);On(vg,"on"+Sg)}On(Xc,"onAnimationEnd");On(Yc,"onAnimationIteration");On(Zc,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(Jc,"onTransitionEnd");$t("onMouseEnter",["mouseout","mouseover"]);$t("onMouseLeave",["mouseout","mouseover"]);$t("onPointerEnter",["pointerout","pointerover"]);$t("onPointerLeave",["pointerout","pointerover"]);ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function Gs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,vp(r,n,void 0,e),e.currentTarget=null}function ed(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Gs(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Gs(i,a,u),o=s}}}if(Ti)throw e=sl,Ti=!1,sl=null,e}function U(e,n){var t=n[vl];t===void 0&&(t=n[vl]=new Set);var r=e+"__bubble";t.has(r)||(nd(n,e,2,!1),t.add(r))}function Do(e,n,t){var r=0;n&&(r|=4),nd(t,e,r,n)}var ii="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[ii]){e[ii]=!0,sc.forEach(function(t){t!=="selectionchange"&&(xg.has(t)||Do(t,!1,e),Do(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ii]||(n[ii]=!0,Do("selectionchange",!1,n))}}function nd(e,n,t,r){switch(zc(n)){case 1:var i=Np;break;case 4:i=Mp;break;default:i=ua}t=i.bind(null,n,t,e),i=void 0,!al||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function No(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Gn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Cc(function(){var u=o,p=oa(t),d=[];e:{var h=qc.get(e);if(h!==void 0){var v=da,S=e;switch(e){case"keypress":if(yi(t)===0)break e;case"keydown":case"keyup":v=Yp;break;case"focusin":S="focus",v=To;break;case"focusout":S="blur",v=To;break;case"beforeblur":case"afterblur":v=To;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=qp;break;case Xc:case Yc:case Zc:v=Fp;break;case Jc:v=ng;break;case"scroll":v=Op;break;case"wheel":v=rg;break;case"copy":case"cut":case"paste":v=Wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Os}var x=(n&4)!==0,P=!x&&e==="scroll",m=x?h!==null?h+"Capture":null:h;x=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=_r(f,m),w!=null&&x.push($r(f,w,g)))),P)break;f=f.return}0<x.length&&(h=new v(h,S,null,t,p),d.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&t!==ol&&(S=t.relatedTarget||t.fromElement)&&(Gn(S)||S[cn]))break e;if((v||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,v?(S=t.relatedTarget||t.toElement,v=u,S=S?Gn(S):null,S!==null&&(P=lt(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=u),v!==S)){if(x=Ns,w="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=Os,w="onPointerLeave",m="onPointerEnter",f="pointer"),P=v==null?h:St(v),g=S==null?h:St(S),h=new x(w,f+"leave",v,t,p),h.target=P,h.relatedTarget=g,w=null,Gn(p)===u&&(x=new x(m,f+"enter",S,t,p),x.target=g,x.relatedTarget=P,w=x),P=w,v&&S)n:{for(x=v,m=S,f=0,g=x;g;g=ft(g))f++;for(g=0,w=m;w;w=ft(w))g++;for(;0<f-g;)x=ft(x),f--;for(;0<g-f;)m=ft(m),g--;for(;f--;){if(x===m||m!==null&&x===m.alternate)break n;x=ft(x),m=ft(m)}x=null}else x=null;v!==null&&Ks(d,h,v,x,!1),S!==null&&P!==null&&Ks(d,P,S,x,!0)}}e:{if(h=u?St(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var E=cg;else if(As(h))if(Hc)E=gg;else{E=fg;var I=dg}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=pg);if(E&&(E=E(e,u))){Wc(d,E,t,p);break e}I&&I(e,h,u),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&el(h,"number",h.value)}switch(I=u?St(u):window,e){case"focusin":(As(I)||I.contentEditable==="true")&&(yt=I,fl=u,vr=null);break;case"focusout":vr=fl=yt=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":pl=!1,Hs(d,t,p);break;case"selectionchange":if(yg)break;case"keydown":case"keyup":Hs(d,t,p)}var b;if(pa)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else ht?Fc(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(Bc&&t.locale!=="ko"&&(ht||j!=="onCompositionStart"?j==="onCompositionEnd"&&ht&&(b=Ac()):(kn=p,ca="value"in kn?kn.value:kn.textContent,ht=!0)),I=$i(u,j),0<I.length&&(j=new Ms(j,e,null,t,p),d.push({event:j,listeners:I}),b?j.data=b:(b=Uc(t),b!==null&&(j.data=b)))),(b=og?lg(e,t):ag(e,t))&&(u=$i(u,"onBeforeInput"),0<u.length&&(p=new Ms("onBeforeInput","beforeinput",null,t,p),d.push({event:p,listeners:u}),p.data=b))}ed(d,n)})}function $r(e,n,t){return{instance:e,listener:n,currentTarget:t}}function $i(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_r(e,t),o!=null&&r.unshift($r(e,o,i)),o=_r(e,n),o!=null&&r.push($r(e,o,i))),e=e.return}return r}function ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ks(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=_r(t,o),s!=null&&l.unshift($r(t,s,a))):i||(s=_r(t,o),s!=null&&l.push($r(t,s,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var wg=/\r\n?/g,kg=/\u0000|\uFFFD/g;function Qs(e){return(typeof e=="string"?e:""+e).replace(wg,`
`).replace(kg,"")}function oi(e,n,t){if(n=Qs(n),Qs(e)!==n&&t)throw Error(C(425))}function Di(){}var gl=null,ml=null;function hl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yl=typeof setTimeout=="function"?setTimeout:void 0,Pg=typeof clearTimeout=="function"?clearTimeout:void 0,Xs=typeof Promise=="function"?Promise:void 0,Cg=typeof queueMicrotask=="function"?queueMicrotask:typeof Xs<"u"?function(e){return Xs.resolve(null).then(e).catch(_g)}:yl;function _g(e){setTimeout(function(){throw e})}function Mo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Rr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Rr(n)}function Rn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ys(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ft=Math.random().toString(36).slice(2),en="__reactFiber$"+Ft,Dr="__reactProps$"+Ft,cn="__reactContainer$"+Ft,vl="__reactEvents$"+Ft,Eg="__reactListeners$"+Ft,Tg="__reactHandles$"+Ft;function Gn(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[cn]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ys(e);e!==null;){if(t=e[en])return t;e=Ys(e)}return n}e=t,t=e.parentNode}return null}function Gr(e){return e=e[en]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function St(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function io(e){return e[Dr]||null}var Sl=[],xt=-1;function Ln(e){return{current:e}}function W(e){0>xt||(e.current=Sl[xt],Sl[xt]=null,xt--)}function F(e,n){xt++,Sl[xt]=e.current,e.current=n}var Mn={},Se=Ln(Mn),Ee=Ln(!1),Zn=Mn;function Dt(e,n){var t=e.type.contextTypes;if(!t)return Mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function Ni(){W(Ee),W(Se)}function Zs(e,n,t){if(Se.current!==Mn)throw Error(C(168));F(Se,n),F(Ee,t)}function td(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(C(108,dp(e)||"Unknown",i));return Y({},t,r)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,Zn=Se.current,F(Se,e),F(Ee,Ee.current),!0}function Js(e,n,t){var r=e.stateNode;if(!r)throw Error(C(169));t?(e=td(e,n,Zn),r.__reactInternalMemoizedMergedChildContext=e,W(Ee),W(Se),F(Se,e)):W(Ee),F(Ee,t)}var on=null,oo=!1,Oo=!1;function rd(e){on===null?on=[e]:on.push(e)}function Rg(e){oo=!0,rd(e)}function zn(){if(!Oo&&on!==null){Oo=!0;var e=0,n=z;try{var t=on;for(z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}on=null,oo=!1}catch(i){throw on!==null&&(on=on.slice(e+1)),Rc(la,zn),i}finally{z=n,Oo=!1}}return null}var wt=[],kt=0,Oi=null,Li=0,Oe=[],Le=0,Jn=null,ln=1,an="";function Hn(e,n){wt[kt++]=Li,wt[kt++]=Oi,Oi=e,Li=n}function id(e,n,t){Oe[Le++]=ln,Oe[Le++]=an,Oe[Le++]=Jn,Jn=e;var r=ln;e=an;var i=32-Qe(r)-1;r&=~(1<<i),t+=1;var o=32-Qe(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ln=1<<32-Qe(n)+i|t<<i|r,an=o+e}else ln=1<<o|t<<i|r,an=e}function ma(e){e.return!==null&&(Hn(e,1),id(e,1,0))}function ha(e){for(;e===Oi;)Oi=wt[--kt],wt[kt]=null,Li=wt[--kt],wt[kt]=null;for(;e===Jn;)Jn=Oe[--Le],Oe[Le]=null,an=Oe[--Le],Oe[Le]=null,ln=Oe[--Le],Oe[Le]=null}var je=null,Ie=null,V=!1,Ke=null;function od(e,n){var t=ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function qs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,je=e,Ie=Rn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,je=e,Ie=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Jn!==null?{id:ln,overflow:an}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,je=e,Ie=null,!0):!1;default:return!1}}function xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(V){var n=Ie;if(n){var t=n;if(!qs(e,n)){if(xl(e))throw Error(C(418));n=Rn(t.nextSibling);var r=je;n&&qs(e,n)?od(r,t):(e.flags=e.flags&-4097|2,V=!1,je=e)}}else{if(xl(e))throw Error(C(418));e.flags=e.flags&-4097|2,V=!1,je=e}}}function eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function li(e){if(e!==je)return!1;if(!V)return eu(e),V=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!hl(e.type,e.memoizedProps)),n&&(n=Ie)){if(xl(e))throw ld(),Error(C(418));for(;n;)od(e,n),n=Rn(n.nextSibling)}if(eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ie=Rn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ie=null}}else Ie=je?Rn(e.stateNode.nextSibling):null;return!0}function ld(){for(var e=Ie;e;)e=Rn(e.nextSibling)}function Nt(){Ie=je=null,V=!1}function ya(e){Ke===null?Ke=[e]:Ke.push(e)}var bg=gn.ReactCurrentBatchConfig;function or(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function ai(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nu(e){var n=e._init;return n(e._payload)}function ad(e){function n(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function t(m,f){if(!e)return null;for(;f!==null;)n(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=$n(m,f),m.index=0,m.sibling=null,m}function o(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,w){return f===null||f.tag!==6?(f=Wo(g,m.mode,w),f.return=m,f):(f=i(f,g),f.return=m,f)}function s(m,f,g,w){var E=g.type;return E===mt?p(m,f,g.props.children,w,g.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vn&&nu(E)===f.type)?(w=i(f,g.props),w.ref=or(m,f,g),w.return=m,w):(w=Ci(g.type,g.key,g.props,null,m.mode,w),w.ref=or(m,f,g),w.return=m,w)}function u(m,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ho(g,m.mode,w),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function p(m,f,g,w,E){return f===null||f.tag!==7?(f=Yn(g,m.mode,w,E),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Wo(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Yr:return g=Ci(f.type,f.key,f.props,null,m.mode,g),g.ref=or(m,null,f),g.return=m,g;case gt:return f=Ho(f,m.mode,g),f.return=m,f;case vn:var w=f._init;return d(m,w(f._payload),g)}if(cr(f)||er(f))return f=Yn(f,m.mode,g,null),f.return=m,f;ai(m,f)}return null}function h(m,f,g,w){var E=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(m,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yr:return g.key===E?s(m,f,g,w):null;case gt:return g.key===E?u(m,f,g,w):null;case vn:return E=g._init,h(m,f,E(g._payload),w)}if(cr(g)||er(g))return E!==null?null:p(m,f,g,w,null);ai(m,g)}return null}function v(m,f,g,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(f,m,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yr:return m=m.get(w.key===null?g:w.key)||null,s(f,m,w,E);case gt:return m=m.get(w.key===null?g:w.key)||null,u(f,m,w,E);case vn:var I=w._init;return v(m,f,g,I(w._payload),E)}if(cr(w)||er(w))return m=m.get(g)||null,p(f,m,w,E,null);ai(f,w)}return null}function S(m,f,g,w){for(var E=null,I=null,b=f,j=f=0,k=null;b!==null&&j<g.length;j++){b.index>j?(k=b,b=null):k=b.sibling;var _=h(m,b,g[j],w);if(_===null){b===null&&(b=k);break}e&&b&&_.alternate===null&&n(m,b),f=o(_,f,j),I===null?E=_:I.sibling=_,I=_,b=k}if(j===g.length)return t(m,b),V&&Hn(m,j),E;if(b===null){for(;j<g.length;j++)b=d(m,g[j],w),b!==null&&(f=o(b,f,j),I===null?E=b:I.sibling=b,I=b);return V&&Hn(m,j),E}for(b=r(m,b);j<g.length;j++)k=v(b,m,j,g[j],w),k!==null&&(e&&k.alternate!==null&&b.delete(k.key===null?j:k.key),f=o(k,f,j),I===null?E=k:I.sibling=k,I=k);return e&&b.forEach(function(M){return n(m,M)}),V&&Hn(m,j),E}function x(m,f,g,w){var E=er(g);if(typeof E!="function")throw Error(C(150));if(g=E.call(g),g==null)throw Error(C(151));for(var I=E=null,b=f,j=f=0,k=null,_=g.next();b!==null&&!_.done;j++,_=g.next()){b.index>j?(k=b,b=null):k=b.sibling;var M=h(m,b,_.value,w);if(M===null){b===null&&(b=k);break}e&&b&&M.alternate===null&&n(m,b),f=o(M,f,j),I===null?E=M:I.sibling=M,I=M,b=k}if(_.done)return t(m,b),V&&Hn(m,j),E;if(b===null){for(;!_.done;j++,_=g.next())_=d(m,_.value,w),_!==null&&(f=o(_,f,j),I===null?E=_:I.sibling=_,I=_);return V&&Hn(m,j),E}for(b=r(m,b);!_.done;j++,_=g.next())_=v(b,m,j,_.value,w),_!==null&&(e&&_.alternate!==null&&b.delete(_.key===null?j:_.key),f=o(_,f,j),I===null?E=_:I.sibling=_,I=_);return e&&b.forEach(function(ee){return n(m,ee)}),V&&Hn(m,j),E}function P(m,f,g,w){if(typeof g=="object"&&g!==null&&g.type===mt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Yr:e:{for(var E=g.key,I=f;I!==null;){if(I.key===E){if(E=g.type,E===mt){if(I.tag===7){t(m,I.sibling),f=i(I,g.props.children),f.return=m,m=f;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vn&&nu(E)===I.type){t(m,I.sibling),f=i(I,g.props),f.ref=or(m,I,g),f.return=m,m=f;break e}t(m,I);break}else n(m,I);I=I.sibling}g.type===mt?(f=Yn(g.props.children,m.mode,w,g.key),f.return=m,m=f):(w=Ci(g.type,g.key,g.props,null,m.mode,w),w.ref=or(m,f,g),w.return=m,m=w)}return l(m);case gt:e:{for(I=g.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{t(m,f);break}else n(m,f);f=f.sibling}f=Ho(g,m.mode,w),f.return=m,m=f}return l(m);case vn:return I=g._init,P(m,f,I(g._payload),w)}if(cr(g))return S(m,f,g,w);if(er(g))return x(m,f,g,w);ai(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(m,f.sibling),f=i(f,g),f.return=m,m=f):(t(m,f),f=Wo(g,m.mode,w),f.return=m,m=f),l(m)):t(m,f)}return P}var Mt=ad(!0),sd=ad(!1),zi=Ln(null),Ai=null,Pt=null,va=null;function Sa(){va=Pt=Ai=null}function xa(e){var n=zi.current;W(zi),e._currentValue=n}function kl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function It(e,n){Ai=e,va=Pt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(_e=!0),e.firstContext=null)}function Fe(e){var n=e._currentValue;if(va!==e)if(e={context:e,memoizedValue:n,next:null},Pt===null){if(Ai===null)throw Error(C(308));Pt=e,Ai.dependencies={lanes:0,firstContext:e}}else Pt=Pt.next=e;return n}var Kn=null;function wa(e){Kn===null?Kn=[e]:Kn.push(e)}function ud(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,wa(n)):(t.next=i.next,i.next=t),n.interleaved=t,dn(e,r)}function dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Sn=!1;function ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function bn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,dn(e,t)}return i=r.interleaved,i===null?(n.next=n,wa(r)):(n.next=i.next,i.next=n),r.interleaved=n,dn(e,t)}function vi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,aa(e,t)}}function tu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Bi(e,n,t,r){var i=e.updateQueue;Sn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;l=0,p=u=s=null,a=o;do{var h=a.lane,v=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,x=a;switch(h=n,v=t,x.tag){case 1:if(S=x.payload,typeof S=="function"){d=S.call(v,d,h);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,h=typeof S=="function"?S.call(v,d,h):S,h==null)break e;d=Y({},d,h);break e;case 2:Sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=v,s=d):p=p.next=v,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);et|=l,e.lanes=l,e.memoizedState=d}}function ru(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Kr={},tn=Ln(Kr),Nr=Ln(Kr),Mr=Ln(Kr);function Qn(e){if(e===Kr)throw Error(C(174));return e}function Pa(e,n){switch(F(Mr,n),F(Nr,e),F(tn,Kr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:tl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=tl(n,e)}W(tn),F(tn,n)}function Ot(){W(tn),W(Nr),W(Mr)}function dd(e){Qn(Mr.current);var n=Qn(tn.current),t=tl(n,e.type);n!==t&&(F(Nr,e),F(tn,t))}function Ca(e){Nr.current===e&&(W(tn),W(Nr))}var Q=Ln(0);function Fi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Lo=[];function _a(){for(var e=0;e<Lo.length;e++)Lo[e]._workInProgressVersionPrimary=null;Lo.length=0}var Si=gn.ReactCurrentDispatcher,zo=gn.ReactCurrentBatchConfig,qn=0,X=null,le=null,ce=null,Ui=!1,Sr=!1,Or=0,Ig=0;function he(){throw Error(C(321))}function Ea(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ye(e[t],n[t]))return!1;return!0}function Ta(e,n,t,r,i,o){if(qn=o,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Si.current=e===null||e.memoizedState===null?Ng:Mg,e=t(r,i),Sr){o=0;do{if(Sr=!1,Or=0,25<=o)throw Error(C(301));o+=1,ce=le=null,n.updateQueue=null,Si.current=Og,e=t(r,i)}while(Sr)}if(Si.current=Wi,n=le!==null&&le.next!==null,qn=0,ce=le=X=null,Ui=!1,n)throw Error(C(300));return e}function Ra(){var e=Or!==0;return Or=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?X.memoizedState=ce=e:ce=ce.next=e,ce}function Ue(){if(le===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var n=ce===null?X.memoizedState:ce.next;if(n!==null)ce=n,le=e;else{if(e===null)throw Error(C(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ce===null?X.memoizedState=ce=e:ce=ce.next=e}return ce}function Lr(e,n){return typeof n=="function"?n(e):n}function Ao(e){var n=Ue(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=le,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var p=u.lane;if((qn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,X.lanes|=p,et|=p}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Ye(r,n.memoizedState)||(_e=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,et|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Bo(e){var n=Ue(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ye(o,n.memoizedState)||(_e=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function fd(){}function pd(e,n){var t=X,r=Ue(),i=n(),o=!Ye(r.memoizedState,i);if(o&&(r.memoizedState=i,_e=!0),r=r.queue,ba(hd.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||ce!==null&&ce.memoizedState.tag&1){if(t.flags|=2048,zr(9,md.bind(null,t,r,i,n),void 0,null),de===null)throw Error(C(349));qn&30||gd(t,n,i)}return i}function gd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function md(e,n,t,r){n.value=t,n.getSnapshot=r,yd(n)&&vd(e)}function hd(e,n,t){return t(function(){yd(n)&&vd(e)})}function yd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ye(e,t)}catch{return!0}}function vd(e){var n=dn(e,1);n!==null&&Xe(n,e,1,-1)}function iu(e){var n=qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},n.queue=e,e=e.dispatch=Dg.bind(null,X,e),[n.memoizedState,e]}function zr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Sd(){return Ue().memoizedState}function xi(e,n,t,r){var i=qe();X.flags|=e,i.memoizedState=zr(1|n,t,void 0,r===void 0?null:r)}function lo(e,n,t,r){var i=Ue();r=r===void 0?null:r;var o=void 0;if(le!==null){var l=le.memoizedState;if(o=l.destroy,r!==null&&Ea(r,l.deps)){i.memoizedState=zr(n,t,o,r);return}}X.flags|=e,i.memoizedState=zr(1|n,t,o,r)}function ou(e,n){return xi(8390656,8,e,n)}function ba(e,n){return lo(2048,8,e,n)}function xd(e,n){return lo(4,2,e,n)}function wd(e,n){return lo(4,4,e,n)}function kd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pd(e,n,t){return t=t!=null?t.concat([e]):null,lo(4,4,kd.bind(null,n,e),t)}function Ia(){}function Cd(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ea(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function _d(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ea(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ed(e,n,t){return qn&21?(Ye(t,n)||(t=jc(),X.lanes|=t,et|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=t)}function jg(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var r=zo.transition;zo.transition={};try{e(!1),n()}finally{z=t,zo.transition=r}}function Td(){return Ue().memoizedState}function $g(e,n,t){var r=jn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Rd(e))bd(n,t);else if(t=ud(e,n,t,r),t!==null){var i=we();Xe(t,e,r,i),Id(t,n,r)}}function Dg(e,n,t){var r=jn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Rd(e))bd(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(i.hasEagerState=!0,i.eagerState=a,Ye(a,l)){var s=n.interleaved;s===null?(i.next=i,wa(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=ud(e,n,i,r),t!==null&&(i=we(),Xe(t,e,r,i),Id(t,n,r))}}function Rd(e){var n=e.alternate;return e===X||n!==null&&n===X}function bd(e,n){Sr=Ui=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Id(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,aa(e,t)}}var Wi={readContext:Fe,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Ng={readContext:Fe,useCallback:function(e,n){return qe().memoizedState=[e,n===void 0?null:n],e},useContext:Fe,useEffect:ou,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,xi(4194308,4,kd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return xi(4194308,4,e,n)},useInsertionEffect:function(e,n){return xi(4,2,e,n)},useMemo:function(e,n){var t=qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=qe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=$g.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var n=qe();return e={current:e},n.memoizedState=e},useState:iu,useDebugValue:Ia,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=iu(!1),n=e[0];return e=jg.bind(null,e[1]),qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=X,i=qe();if(V){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),de===null)throw Error(C(349));qn&30||gd(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,ou(hd.bind(null,r,o,e),[e]),r.flags|=2048,zr(9,md.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=qe(),n=de.identifierPrefix;if(V){var t=an,r=ln;t=(r&~(1<<32-Qe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Or++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ig++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Mg={readContext:Fe,useCallback:Cd,useContext:Fe,useEffect:ba,useImperativeHandle:Pd,useInsertionEffect:xd,useLayoutEffect:wd,useMemo:_d,useReducer:Ao,useRef:Sd,useState:function(){return Ao(Lr)},useDebugValue:Ia,useDeferredValue:function(e){var n=Ue();return Ed(n,le.memoizedState,e)},useTransition:function(){var e=Ao(Lr)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:fd,useSyncExternalStore:pd,useId:Td,unstable_isNewReconciler:!1},Og={readContext:Fe,useCallback:Cd,useContext:Fe,useEffect:ba,useImperativeHandle:Pd,useInsertionEffect:xd,useLayoutEffect:wd,useMemo:_d,useReducer:Bo,useRef:Sd,useState:function(){return Bo(Lr)},useDebugValue:Ia,useDeferredValue:function(e){var n=Ue();return le===null?n.memoizedState=e:Ed(n,le.memoizedState,e)},useTransition:function(){var e=Bo(Lr)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:fd,useSyncExternalStore:pd,useId:Td,unstable_isNewReconciler:!1};function Ve(e,n){if(e&&e.defaultProps){n=Y({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Pl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ao={isMounted:function(e){return(e=e._reactInternals)?lt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=we(),i=jn(e),o=sn(r,i);o.payload=n,t!=null&&(o.callback=t),n=bn(e,o,i),n!==null&&(Xe(n,e,i,r),vi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=we(),i=jn(e),o=sn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=bn(e,o,i),n!==null&&(Xe(n,e,i,r),vi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=we(),r=jn(e),i=sn(t,r);i.tag=2,n!=null&&(i.callback=n),n=bn(e,i,r),n!==null&&(Xe(n,e,r,t),vi(n,e,r))}};function lu(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Ir(t,r)||!Ir(i,o):!0}function jd(e,n,t){var r=!1,i=Mn,o=n.contextType;return typeof o=="object"&&o!==null?o=Fe(o):(i=Te(n)?Zn:Se.current,r=n.contextTypes,o=(r=r!=null)?Dt(e,i):Mn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ao,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function au(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ao.enqueueReplaceState(n,n.state,null)}function Cl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ka(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Fe(o):(o=Te(n)?Zn:Se.current,i.context=Dt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Pl(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ao.enqueueReplaceState(i,i.state,null),Bi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Lt(e,n){try{var t="",r=n;do t+=cp(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Fo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function _l(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Lg=typeof WeakMap=="function"?WeakMap:Map;function $d(e,n,t){t=sn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Vi||(Vi=!0,Ml=r),_l(e,n)},t}function Dd(e,n,t){t=sn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){_l(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){_l(e,n),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function su(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Lg;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Zg.bind(null,e,n,t),n.then(e,e))}function uu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function cu(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=sn(-1,1),n.tag=2,bn(t,n,1))),t.lanes|=1),e)}var zg=gn.ReactCurrentOwner,_e=!1;function xe(e,n,t,r){n.child=e===null?sd(n,null,t,r):Mt(n,e.child,t,r)}function du(e,n,t,r,i){t=t.render;var o=n.ref;return It(n,i),r=Ta(e,n,t,r,o,i),t=Ra(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,fn(e,n,i)):(V&&t&&ma(n),n.flags|=1,xe(e,n,r,i),n.child)}function fu(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!za(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Nd(e,n,o,r,i)):(e=Ci(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ir,t(l,r)&&e.ref===n.ref)return fn(e,n,i)}return n.flags|=1,e=$n(o,r),e.ref=n.ref,e.return=n,n.child=e}function Nd(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Ir(o,r)&&e.ref===n.ref)if(_e=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(_e=!0);else return n.lanes=e.lanes,fn(e,n,i)}return El(e,n,t,r,i)}function Md(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(_t,be),be|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(_t,be),be|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,F(_t,be),be|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,F(_t,be),be|=r;return xe(e,n,i,t),n.child}function Od(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function El(e,n,t,r,i){var o=Te(t)?Zn:Se.current;return o=Dt(n,o),It(n,i),t=Ta(e,n,t,r,o,i),r=Ra(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,fn(e,n,i)):(V&&r&&ma(n),n.flags|=1,xe(e,n,t,i),n.child)}function pu(e,n,t,r,i){if(Te(t)){var o=!0;Mi(n)}else o=!1;if(It(n,i),n.stateNode===null)wi(e,n),jd(n,t,r),Cl(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var s=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=Te(t)?Zn:Se.current,u=Dt(n,u));var p=t.getDerivedStateFromProps,d=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&au(n,l,r,u),Sn=!1;var h=n.memoizedState;l.state=h,Bi(n,r,l,i),s=n.memoizedState,a!==r||h!==s||Ee.current||Sn?(typeof p=="function"&&(Pl(n,t,p,r),s=n.memoizedState),(a=Sn||lu(n,t,a,r,h,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,cd(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Ve(n.type,a),l.props=u,d=n.pendingProps,h=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=Fe(s):(s=Te(t)?Zn:Se.current,s=Dt(n,s));var v=t.getDerivedStateFromProps;(p=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||h!==s)&&au(n,l,r,s),Sn=!1,h=n.memoizedState,l.state=h,Bi(n,r,l,i);var S=n.memoizedState;a!==d||h!==S||Ee.current||Sn?(typeof v=="function"&&(Pl(n,t,v,r),S=n.memoizedState),(u=Sn||lu(n,t,u,r,h,S,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),l.props=r,l.state=S,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Tl(e,n,t,r,o,i)}function Tl(e,n,t,r,i,o){Od(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&Js(n,t,!1),fn(e,n,o);r=n.stateNode,zg.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Mt(n,e.child,null,o),n.child=Mt(n,null,a,o)):xe(e,n,a,o),n.memoizedState=r.state,i&&Js(n,t,!0),n.child}function Ld(e){var n=e.stateNode;n.pendingContext?Zs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Zs(e,n.context,!1),Pa(e,n.containerInfo)}function gu(e,n,t,r,i){return Nt(),ya(i),n.flags|=256,xe(e,n,t,r),n.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function zd(e,n,t){var r=n.pendingProps,i=Q.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(Q,i&1),e===null)return wl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=co(l,r,0,null),e=Yn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=bl(t),n.memoizedState=Rl,e):ja(n,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ag(e,n,l,r,a,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=$n(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=$n(a,o):(o=Yn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?bl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Rl,r}return o=e.child,e=o.sibling,r=$n(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ja(e,n){return n=co({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function si(e,n,t,r){return r!==null&&ya(r),Mt(n,e.child,null,t),e=ja(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ag(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=Fo(Error(C(422))),si(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=co({mode:"visible",children:r.children},i,0,null),o=Yn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Mt(n,e.child,null,l),n.child.memoizedState=bl(l),n.memoizedState=Rl,o);if(!(n.mode&1))return si(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(C(419)),r=Fo(o,r,void 0),si(e,n,l,r)}if(a=(l&e.childLanes)!==0,_e||a){if(r=de,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dn(e,i),Xe(r,e,i,-1))}return La(),r=Fo(Error(C(421))),si(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Jg.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ie=Rn(i.nextSibling),je=n,V=!0,Ke=null,e!==null&&(Oe[Le++]=ln,Oe[Le++]=an,Oe[Le++]=Jn,ln=e.id,an=e.overflow,Jn=n),n=ja(n,r.children),n.flags|=4096,n)}function mu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),kl(e.return,n,t)}function Uo(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Ad(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(xe(e,n,r.children,t),r=Q.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,t,n);else if(e.tag===19)mu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(Q,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Fi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Uo(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Fi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Uo(n,!0,t,null,o);break;case"together":Uo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function wi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function fn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),et|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=$n(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=$n(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Bg(e,n,t){switch(n.tag){case 3:Ld(n),Nt();break;case 5:dd(n);break;case 1:Te(n.type)&&Mi(n);break;case 4:Pa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;F(zi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(Q,Q.current&1),n.flags|=128,null):t&n.child.childLanes?zd(e,n,t):(F(Q,Q.current&1),e=fn(e,n,t),e!==null?e.sibling:null);F(Q,Q.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ad(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(Q,Q.current),r)break;return null;case 22:case 23:return n.lanes=0,Md(e,n,t)}return fn(e,n,t)}var Bd,Il,Fd,Ud;Bd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Il=function(){};Fd=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Qn(tn.current);var o=null;switch(t){case"input":i=Jo(e,i),r=Jo(e,r),o=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":i=nl(e,i),r=nl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Di)}rl(t,r);var l;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(o||(o=[]),o.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&U("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Ud=function(e,n,t,r){t!==r&&(n.flags|=4)};function lr(e,n){if(!V)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Fg(e,n,t){var r=n.pendingProps;switch(ha(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(n),null;case 1:return Te(n.type)&&Ni(),ye(n),null;case 3:return r=n.stateNode,Ot(),W(Ee),W(Se),_a(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(li(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ke!==null&&(zl(Ke),Ke=null))),Il(e,n),ye(n),null;case 5:Ca(n);var i=Qn(Mr.current);if(t=n.type,e!==null&&n.stateNode!=null)Fd(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(C(166));return ye(n),null}if(e=Qn(tn.current),li(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[en]=n,r[Dr]=o,e=(n.mode&1)!==0,t){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<fr.length;i++)U(fr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Cs(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":Es(r,o),U("invalid",r)}rl(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&oi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&oi(r.textContent,a,e),i=["children",""+a]):Pr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&U("scroll",r)}switch(t){case"input":Zr(r),_s(r,o,!0);break;case"textarea":Zr(r),Ts(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Di)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[en]=n,e[Dr]=r,Bd(e,n,!1,!1),n.stateNode=e;e:{switch(l=il(t,r),t){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<fr.length;i++)U(fr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":Cs(e,r),i=Jo(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),U("invalid",e);break;case"textarea":Es(e,r),i=nl(e,r),U("invalid",e);break;default:i=r}rl(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Sc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&yc(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Cr(e,s):typeof s=="number"&&Cr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Pr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&U("scroll",e):s!=null&&na(e,o,s,l))}switch(t){case"input":Zr(e),_s(e,r,!1);break;case"textarea":Zr(e),Ts(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Et(e,!!r.multiple,o,!1):r.defaultValue!=null&&Et(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Di)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ye(n),null;case 6:if(e&&n.stateNode!=null)Ud(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(C(166));if(t=Qn(Mr.current),Qn(tn.current),li(n)){if(r=n.stateNode,t=n.memoizedProps,r[en]=n,(o=r.nodeValue!==t)&&(e=je,e!==null))switch(e.tag){case 3:oi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[en]=n,n.stateNode=r}return ye(n),null;case 13:if(W(Q),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ie!==null&&n.mode&1&&!(n.flags&128))ld(),Nt(),n.flags|=98560,o=!1;else if(o=li(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[en]=n}else Nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ye(n),o=!1}else Ke!==null&&(zl(Ke),Ke=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Q.current&1?ae===0&&(ae=3):La())),n.updateQueue!==null&&(n.flags|=4),ye(n),null);case 4:return Ot(),Il(e,n),e===null&&jr(n.stateNode.containerInfo),ye(n),null;case 10:return xa(n.type._context),ye(n),null;case 17:return Te(n.type)&&Ni(),ye(n),null;case 19:if(W(Q),o=n.memoizedState,o===null)return ye(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)lr(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Fi(e),l!==null){for(n.flags|=128,lr(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(Q,Q.current&1|2),n.child}e=e.sibling}o.tail!==null&&ne()>zt&&(n.flags|=128,r=!0,lr(o,!1),n.lanes=4194304)}else{if(!r)if(e=Fi(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!V)return ye(n),null}else 2*ne()-o.renderingStartTime>zt&&t!==1073741824&&(n.flags|=128,r=!0,lr(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ne(),n.sibling=null,t=Q.current,F(Q,r?t&1|2:t&1),n):(ye(n),null);case 22:case 23:return Oa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?be&1073741824&&(ye(n),n.subtreeFlags&6&&(n.flags|=8192)):ye(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function Ug(e,n){switch(ha(n),n.tag){case 1:return Te(n.type)&&Ni(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ot(),W(Ee),W(Se),_a(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ca(n),null;case 13:if(W(Q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));Nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(Q),null;case 4:return Ot(),null;case 10:return xa(n.type._context),null;case 22:case 23:return Oa(),null;case 24:return null;default:return null}}var ui=!1,ve=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,R=null;function Ct(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){J(e,n,r)}else t.current=null}function jl(e,n,t){try{t()}catch(r){J(e,n,r)}}var hu=!1;function Hg(e,n){if(gl=Ii,e=Kc(),ga(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,s=-1,u=0,p=0,d=e,h=null;n:for(;;){for(var v;d!==t||i!==0&&d.nodeType!==3||(a=l+i),d!==o||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break n;if(h===t&&++u===i&&(a=l),h===o&&++p===r&&(s=l),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(ml={focusedElem:e,selectionRange:t},Ii=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,P=S.memoizedState,m=n.stateNode,f=m.getSnapshotBeforeUpdate(n.elementType===n.type?x:Ve(n.type,x),P);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){J(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return S=hu,hu=!1,S}function xr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&jl(n,t,o)}i=i.next}while(i!==r)}}function so(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function $l(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wd(e){var n=e.alternate;n!==null&&(e.alternate=null,Wd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[Dr],delete n[vl],delete n[Eg],delete n[Tg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(Dl(e,n,t),e=e.sibling;e!==null;)Dl(e,n,t),e=e.sibling}function Nl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nl(e,n,t),e=e.sibling;e!==null;)Nl(e,n,t),e=e.sibling}var fe=null,Ge=!1;function yn(e,n,t){for(t=t.child;t!==null;)Vd(e,n,t),t=t.sibling}function Vd(e,n,t){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(eo,t)}catch{}switch(t.tag){case 5:ve||Ct(t,n);case 6:var r=fe,i=Ge;fe=null,yn(e,n,t),fe=r,Ge=i,fe!==null&&(Ge?(e=fe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):fe.removeChild(t.stateNode));break;case 18:fe!==null&&(Ge?(e=fe,t=t.stateNode,e.nodeType===8?Mo(e.parentNode,t):e.nodeType===1&&Mo(e,t),Rr(e)):Mo(fe,t.stateNode));break;case 4:r=fe,i=Ge,fe=t.stateNode.containerInfo,Ge=!0,yn(e,n,t),fe=r,Ge=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&jl(t,n,l),i=i.next}while(i!==r)}yn(e,n,t);break;case 1:if(!ve&&(Ct(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){J(t,n,a)}yn(e,n,t);break;case 21:yn(e,n,t);break;case 22:t.mode&1?(ve=(r=ve)||t.memoizedState!==null,yn(e,n,t),ve=r):yn(e,n,t);break;default:yn(e,n,t)}}function vu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Wg),n.forEach(function(r){var i=qg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function He(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,Ge=!1;break e;case 3:fe=a.stateNode.containerInfo,Ge=!0;break e;case 4:fe=a.stateNode.containerInfo,Ge=!0;break e}a=a.return}if(fe===null)throw Error(C(160));Vd(o,l,i),fe=null,Ge=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){J(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gd(n,e),n=n.sibling}function Gd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(n,e),Je(e),r&4){try{xr(3,e,e.return),so(3,e)}catch(x){J(e,e.return,x)}try{xr(5,e,e.return)}catch(x){J(e,e.return,x)}}break;case 1:He(n,e),Je(e),r&512&&t!==null&&Ct(t,t.return);break;case 5:if(He(n,e),Je(e),r&512&&t!==null&&Ct(t,t.return),e.flags&32){var i=e.stateNode;try{Cr(i,"")}catch(x){J(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&gc(i,o),il(a,l);var u=il(a,o);for(l=0;l<s.length;l+=2){var p=s[l],d=s[l+1];p==="style"?Sc(i,d):p==="dangerouslySetInnerHTML"?yc(i,d):p==="children"?Cr(i,d):na(i,p,d,u)}switch(a){case"input":qo(i,o);break;case"textarea":mc(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Et(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?Et(i,!!o.multiple,o.defaultValue,!0):Et(i,!!o.multiple,o.multiple?[]:"",!1))}i[Dr]=o}catch(x){J(e,e.return,x)}}break;case 6:if(He(n,e),Je(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){J(e,e.return,x)}}break;case 3:if(He(n,e),Je(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Rr(n.containerInfo)}catch(x){J(e,e.return,x)}break;case 4:He(n,e),Je(e);break;case 13:He(n,e),Je(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Na=ne())),r&4&&vu(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(ve=(u=ve)||p,He(n,e),ve=u):He(n,e),Je(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(R=e,p=e.child;p!==null;){for(d=R=p;R!==null;){switch(h=R,v=h.child,h.tag){case 0:case 11:case 14:case 15:xr(4,h,h.return);break;case 1:Ct(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(x){J(r,t,x)}}break;case 5:Ct(h,h.return);break;case 22:if(h.memoizedState!==null){xu(d);continue}}v!==null?(v.return=h,R=v):xu(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=vc("display",l))}catch(x){J(e,e.return,x)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){J(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:He(n,e),Je(e),r&4&&vu(e);break;case 21:break;default:He(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Hd(t)){var r=t;break e}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cr(i,""),r.flags&=-33);var o=yu(e);Nl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=yu(e);Dl(e,a,l);break;default:throw Error(C(161))}}catch(s){J(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vg(e,n,t){R=e,Kd(e)}function Kd(e,n,t){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ui;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||ve;a=ui;var u=ve;if(ui=l,(ve=s)&&!u)for(R=i;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?wu(i):s!==null?(s.return=l,R=s):wu(i);for(;o!==null;)R=o,Kd(o),o=o.sibling;R=i,ui=a,ve=u}Su(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Su(e)}}function Su(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ve||so(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ve)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ve(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ru(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ru(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Rr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ve||n.flags&512&&$l(n)}catch(h){J(n,n.return,h)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function xu(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function wu(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{so(4,n)}catch(s){J(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){J(n,i,s)}}var o=n.return;try{$l(n)}catch(s){J(n,o,s)}break;case 5:var l=n.return;try{$l(n)}catch(s){J(n,l,s)}}}catch(s){J(n,n.return,s)}if(n===e){R=null;break}var a=n.sibling;if(a!==null){a.return=n.return,R=a;break}R=n.return}}var Gg=Math.ceil,Hi=gn.ReactCurrentDispatcher,$a=gn.ReactCurrentOwner,Be=gn.ReactCurrentBatchConfig,O=0,de=null,ie=null,pe=0,be=0,_t=Ln(0),ae=0,Ar=null,et=0,uo=0,Da=0,wr=null,Ce=null,Na=0,zt=1/0,rn=null,Vi=!1,Ml=null,In=null,ci=!1,Pn=null,Gi=0,kr=0,Ol=null,ki=-1,Pi=0;function we(){return O&6?ne():ki!==-1?ki:ki=ne()}function jn(e){return e.mode&1?O&2&&pe!==0?pe&-pe:bg.transition!==null?(Pi===0&&(Pi=jc()),Pi):(e=z,e!==0||(e=window.event,e=e===void 0?16:zc(e.type)),e):1}function Xe(e,n,t,r){if(50<kr)throw kr=0,Ol=null,Error(C(185));Hr(e,t,r),(!(O&2)||e!==de)&&(e===de&&(!(O&2)&&(uo|=t),ae===4&&wn(e,pe)),Re(e,r),t===1&&O===0&&!(n.mode&1)&&(zt=ne()+500,oo&&zn()))}function Re(e,n){var t=e.callbackNode;bp(e,n);var r=bi(e,e===de?pe:0);if(r===0)t!==null&&Is(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Is(t),n===1)e.tag===0?Rg(ku.bind(null,e)):rd(ku.bind(null,e)),Cg(function(){!(O&6)&&zn()}),t=null;else{switch($c(r)){case 1:t=la;break;case 4:t=bc;break;case 16:t=Ri;break;case 536870912:t=Ic;break;default:t=Ri}t=nf(t,Qd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Qd(e,n){if(ki=-1,Pi=0,O&6)throw Error(C(327));var t=e.callbackNode;if(jt()&&e.callbackNode!==t)return null;var r=bi(e,e===de?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ki(e,r);else{n=r;var i=O;O|=2;var o=Yd();(de!==e||pe!==n)&&(rn=null,zt=ne()+500,Xn(e,n));do try{Xg();break}catch(a){Xd(e,a)}while(!0);Sa(),Hi.current=o,O=i,ie!==null?n=0:(de=null,pe=0,n=ae)}if(n!==0){if(n===2&&(i=ul(e),i!==0&&(r=i,n=Ll(e,i))),n===1)throw t=Ar,Xn(e,0),wn(e,r),Re(e,ne()),t;if(n===6)wn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Kg(i)&&(n=Ki(e,r),n===2&&(o=ul(e),o!==0&&(r=o,n=Ll(e,o))),n===1))throw t=Ar,Xn(e,0),wn(e,r),Re(e,ne()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(C(345));case 2:Vn(e,Ce,rn);break;case 3:if(wn(e,r),(r&130023424)===r&&(n=Na+500-ne(),10<n)){if(bi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yl(Vn.bind(null,e,Ce,rn),n);break}Vn(e,Ce,rn);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-Qe(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gg(r/1960))-r,10<r){e.timeoutHandle=yl(Vn.bind(null,e,Ce,rn),r);break}Vn(e,Ce,rn);break;case 5:Vn(e,Ce,rn);break;default:throw Error(C(329))}}}return Re(e,ne()),e.callbackNode===t?Qd.bind(null,e):null}function Ll(e,n){var t=wr;return e.current.memoizedState.isDehydrated&&(Xn(e,n).flags|=256),e=Ki(e,n),e!==2&&(n=Ce,Ce=t,n!==null&&zl(n)),e}function zl(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function Kg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Ye(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wn(e,n){for(n&=~Da,n&=~uo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Qe(n),r=1<<t;e[t]=-1,n&=~r}}function ku(e){if(O&6)throw Error(C(327));jt();var n=bi(e,0);if(!(n&1))return Re(e,ne()),null;var t=Ki(e,n);if(e.tag!==0&&t===2){var r=ul(e);r!==0&&(n=r,t=Ll(e,r))}if(t===1)throw t=Ar,Xn(e,0),wn(e,n),Re(e,ne()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Vn(e,Ce,rn),Re(e,ne()),null}function Ma(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(zt=ne()+500,oo&&zn())}}function nt(e){Pn!==null&&Pn.tag===0&&!(O&6)&&jt();var n=O;O|=1;var t=Be.transition,r=z;try{if(Be.transition=null,z=1,e)return e()}finally{z=r,Be.transition=t,O=n,!(O&6)&&zn()}}function Oa(){be=_t.current,W(_t)}function Xn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Pg(t)),ie!==null)for(t=ie.return;t!==null;){var r=t;switch(ha(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ni();break;case 3:Ot(),W(Ee),W(Se),_a();break;case 5:Ca(r);break;case 4:Ot();break;case 13:W(Q);break;case 19:W(Q);break;case 10:xa(r.type._context);break;case 22:case 23:Oa()}t=t.return}if(de=e,ie=e=$n(e.current,null),pe=be=n,ae=0,Ar=null,Da=uo=et=0,Ce=wr=null,Kn!==null){for(n=0;n<Kn.length;n++)if(t=Kn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}Kn=null}return e}function Xd(e,n){do{var t=ie;try{if(Sa(),Si.current=Wi,Ui){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ui=!1}if(qn=0,ce=le=X=null,Sr=!1,Or=0,$a.current=null,t===null||t.return===null){ae=1,Ar=n,ie=null;break}e:{var o=e,l=t.return,a=t,s=n;if(n=pe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=uu(l);if(v!==null){v.flags&=-257,cu(v,l,a,o,n),v.mode&1&&su(o,u,n),n=v,s=u;var S=n.updateQueue;if(S===null){var x=new Set;x.add(s),n.updateQueue=x}else S.add(s);break e}else{if(!(n&1)){su(o,u,n),La();break e}s=Error(C(426))}}else if(V&&a.mode&1){var P=uu(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),cu(P,l,a,o,n),ya(Lt(s,a));break e}}o=s=Lt(s,a),ae!==4&&(ae=2),wr===null?wr=[o]:wr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var m=$d(o,s,n);tu(o,m);break e;case 1:a=s;var f=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(In===null||!In.has(g)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=Dd(o,a,n);tu(o,w);break e}}o=o.return}while(o!==null)}Jd(t)}catch(E){n=E,ie===t&&t!==null&&(ie=t=t.return);continue}break}while(!0)}function Yd(){var e=Hi.current;return Hi.current=Wi,e===null?Wi:e}function La(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(et&268435455)&&!(uo&268435455)||wn(de,pe)}function Ki(e,n){var t=O;O|=2;var r=Yd();(de!==e||pe!==n)&&(rn=null,Xn(e,n));do try{Qg();break}catch(i){Xd(e,i)}while(!0);if(Sa(),O=t,Hi.current=r,ie!==null)throw Error(C(261));return de=null,pe=0,ae}function Qg(){for(;ie!==null;)Zd(ie)}function Xg(){for(;ie!==null&&!xp();)Zd(ie)}function Zd(e){var n=ef(e.alternate,e,be);e.memoizedProps=e.pendingProps,n===null?Jd(e):ie=n,$a.current=null}function Jd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ug(t,n),t!==null){t.flags&=32767,ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ie=null;return}}else if(t=Fg(t,n,be),t!==null){ie=t;return}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);ae===0&&(ae=5)}function Vn(e,n,t){var r=z,i=Be.transition;try{Be.transition=null,z=1,Yg(e,n,t,r)}finally{Be.transition=i,z=r}return null}function Yg(e,n,t,r){do jt();while(Pn!==null);if(O&6)throw Error(C(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Ip(e,o),e===de&&(ie=de=null,pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ci||(ci=!0,nf(Ri,function(){return jt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Be.transition,Be.transition=null;var l=z;z=1;var a=O;O|=4,$a.current=null,Hg(e,t),Gd(t,e),hg(ml),Ii=!!gl,ml=gl=null,e.current=t,Vg(t),wp(),O=a,z=l,Be.transition=o}else e.current=t;if(ci&&(ci=!1,Pn=e,Gi=i),o=e.pendingLanes,o===0&&(In=null),Cp(t.stateNode),Re(e,ne()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vi)throw Vi=!1,e=Ml,Ml=null,e;return Gi&1&&e.tag!==0&&jt(),o=e.pendingLanes,o&1?e===Ol?kr++:(kr=0,Ol=e):kr=0,zn(),null}function jt(){if(Pn!==null){var e=$c(Gi),n=Be.transition,t=z;try{if(Be.transition=null,z=16>e?16:e,Pn===null)var r=!1;else{if(e=Pn,Pn=null,Gi=0,O&6)throw Error(C(331));var i=O;for(O|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(R=u;R!==null;){var p=R;switch(p.tag){case 0:case 11:case 15:xr(8,p,o)}var d=p.child;if(d!==null)d.return=p,R=d;else for(;R!==null;){p=R;var h=p.sibling,v=p.return;if(Wd(p),p===u){R=null;break}if(h!==null){h.return=v,R=h;break}R=v}}}var S=o.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,R=m;break e}R=o.return}}var f=e.current;for(R=f;R!==null;){l=R;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,R=g;else e:for(l=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:so(9,a)}}catch(E){J(a,a.return,E)}if(a===l){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(O=i,zn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(eo,e)}catch{}r=!0}return r}finally{z=t,Be.transition=n}}return!1}function Pu(e,n,t){n=Lt(t,n),n=$d(e,n,1),e=bn(e,n,1),n=we(),e!==null&&(Hr(e,1,n),Re(e,n))}function J(e,n,t){if(e.tag===3)Pu(e,e,t);else for(;n!==null;){if(n.tag===3){Pu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){e=Lt(t,e),e=Dd(n,e,1),n=bn(n,e,1),e=we(),n!==null&&(Hr(n,1,e),Re(n,e));break}}n=n.return}}function Zg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=we(),e.pingedLanes|=e.suspendedLanes&t,de===e&&(pe&t)===t&&(ae===4||ae===3&&(pe&130023424)===pe&&500>ne()-Na?Xn(e,0):Da|=t),Re(e,n)}function qd(e,n){n===0&&(e.mode&1?(n=ei,ei<<=1,!(ei&130023424)&&(ei=4194304)):n=1);var t=we();e=dn(e,n),e!==null&&(Hr(e,n,t),Re(e,t))}function Jg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),qd(e,t)}function qg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(n),qd(e,t)}var ef;ef=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ee.current)_e=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return _e=!1,Bg(e,n,t);_e=!!(e.flags&131072)}else _e=!1,V&&n.flags&1048576&&id(n,Li,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;wi(e,n),e=n.pendingProps;var i=Dt(n,Se.current);It(n,t),i=Ta(null,n,r,e,i,t);var o=Ra();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Te(r)?(o=!0,Mi(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ka(n),i.updater=ao,n.stateNode=i,i._reactInternals=n,Cl(n,r,e,t),n=Tl(null,n,r,!0,o,t)):(n.tag=0,V&&o&&ma(n),xe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(wi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=nm(r),e=Ve(r,e),i){case 0:n=El(null,n,r,e,t);break e;case 1:n=pu(null,n,r,e,t);break e;case 11:n=du(null,n,r,e,t);break e;case 14:n=fu(null,n,r,Ve(r.type,e),t);break e}throw Error(C(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ve(r,i),El(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ve(r,i),pu(e,n,r,i,t);case 3:e:{if(Ld(n),e===null)throw Error(C(387));r=n.pendingProps,o=n.memoizedState,i=o.element,cd(e,n),Bi(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Lt(Error(C(423)),n),n=gu(e,n,r,t,i);break e}else if(r!==i){i=Lt(Error(C(424)),n),n=gu(e,n,r,t,i);break e}else for(Ie=Rn(n.stateNode.containerInfo.firstChild),je=n,V=!0,Ke=null,t=sd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Nt(),r===i){n=fn(e,n,t);break e}xe(e,n,r,t)}n=n.child}return n;case 5:return dd(n),e===null&&wl(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,hl(r,i)?l=null:o!==null&&hl(r,o)&&(n.flags|=32),Od(e,n),xe(e,n,l,t),n.child;case 6:return e===null&&wl(n),null;case 13:return zd(e,n,t);case 4:return Pa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Mt(n,null,r,t):xe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ve(r,i),du(e,n,r,i,t);case 7:return xe(e,n,n.pendingProps,t),n.child;case 8:return xe(e,n,n.pendingProps.children,t),n.child;case 12:return xe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,F(zi,r._currentValue),r._currentValue=l,o!==null)if(Ye(o.value,l)){if(o.children===i.children&&!Ee.current){n=fn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=sn(-1,t&-t),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),kl(o.return,t,n),a.lanes|=t;break}s=s.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),kl(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}xe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,It(n,t),i=Fe(i),r=r(i),n.flags|=1,xe(e,n,r,t),n.child;case 14:return r=n.type,i=Ve(r,n.pendingProps),i=Ve(r.type,i),fu(e,n,r,i,t);case 15:return Nd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ve(r,i),wi(e,n),n.tag=1,Te(r)?(e=!0,Mi(n)):e=!1,It(n,t),jd(n,r,i),Cl(n,r,i,t),Tl(null,n,r,!0,e,t);case 19:return Ad(e,n,t);case 22:return Md(e,n,t)}throw Error(C(156,n.tag))};function nf(e,n){return Rc(e,n)}function em(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,n,t,r){return new em(e,n,t,r)}function za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nm(e){if(typeof e=="function")return za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ra)return 11;if(e===ia)return 14}return 2}function $n(e,n){var t=e.alternate;return t===null?(t=ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ci(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")za(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case mt:return Yn(t.children,i,o,n);case ta:l=8,i|=8;break;case Qo:return e=ze(12,t,n,i|2),e.elementType=Qo,e.lanes=o,e;case Xo:return e=ze(13,t,n,i),e.elementType=Xo,e.lanes=o,e;case Yo:return e=ze(19,t,n,i),e.elementType=Yo,e.lanes=o,e;case dc:return co(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uc:l=10;break e;case cc:l=9;break e;case ra:l=11;break e;case ia:l=14;break e;case vn:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=ze(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Yn(e,n,t,r){return e=ze(7,e,r,n),e.lanes=t,e}function co(e,n,t,r){return e=ze(22,e,r,n),e.elementType=dc,e.lanes=t,e.stateNode={isHidden:!1},e}function Wo(e,n,t){return e=ze(6,e,null,n),e.lanes=t,e}function Ho(e,n,t){return n=ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function tm(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Co(0),this.expirationTimes=Co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Aa(e,n,t,r,i,o,l,a,s){return e=new tm(e,n,t,a,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=ze(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ka(o),e}function rm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function tf(e){if(!e)return Mn;e=e._reactInternals;e:{if(lt(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Te(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(Te(t))return td(e,t,n)}return n}function rf(e,n,t,r,i,o,l,a,s){return e=Aa(t,r,!0,e,i,o,l,a,s),e.context=tf(null),t=e.current,r=we(),i=jn(t),o=sn(r,i),o.callback=n??null,bn(t,o,i),e.current.lanes=i,Hr(e,i,r),Re(e,r),e}function fo(e,n,t,r){var i=n.current,o=we(),l=jn(i);return t=tf(t),n.context===null?n.context=t:n.pendingContext=t,n=sn(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=bn(i,n,l),e!==null&&(Xe(e,i,l,o),vi(e,i,l)),l}function Qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ba(e,n){Cu(e,n),(e=e.alternate)&&Cu(e,n)}function im(){return null}var of=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fa(e){this._internalRoot=e}po.prototype.render=Fa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));fo(e,n,null,null)};po.prototype.unmount=Fa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;nt(function(){fo(null,e,null,null)}),n[cn]=null}};function po(e){this._internalRoot=e}po.prototype.unstable_scheduleHydration=function(e){if(e){var n=Mc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<xn.length&&n!==0&&n<xn[t].priority;t++);xn.splice(t,0,e),t===0&&Lc(e)}};function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _u(){}function om(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Qi(l);o.call(u)}}var l=rf(n,r,e,0,null,!1,!1,"",_u);return e._reactRootContainer=l,e[cn]=l.current,jr(e.nodeType===8?e.parentNode:e),nt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Qi(s);a.call(u)}}var s=Aa(e,0,!1,null,null,!1,!1,"",_u);return e._reactRootContainer=s,e[cn]=s.current,jr(e.nodeType===8?e.parentNode:e),nt(function(){fo(n,s,t,r)}),s}function mo(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Qi(l);a.call(s)}}fo(n,l,e,i)}else l=om(t,n,e,i,r);return Qi(l)}Dc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=dr(n.pendingLanes);t!==0&&(aa(n,t|1),Re(n,ne()),!(O&6)&&(zt=ne()+500,zn()))}break;case 13:nt(function(){var r=dn(e,1);if(r!==null){var i=we();Xe(r,e,1,i)}}),Ba(e,1)}};sa=function(e){if(e.tag===13){var n=dn(e,134217728);if(n!==null){var t=we();Xe(n,e,134217728,t)}Ba(e,134217728)}};Nc=function(e){if(e.tag===13){var n=jn(e),t=dn(e,n);if(t!==null){var r=we();Xe(t,e,n,r)}Ba(e,n)}};Mc=function(){return z};Oc=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};ll=function(e,n,t){switch(n){case"input":if(qo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=io(r);if(!i)throw Error(C(90));pc(r),qo(r,i)}}}break;case"textarea":mc(e,t);break;case"select":n=t.value,n!=null&&Et(e,!!t.multiple,n,!1)}};kc=Ma;Pc=nt;var lm={usingClientEntryPoint:!1,Events:[Gr,St,io,xc,wc,Ma]},ar={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},am={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ec(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||im,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!di.isDisabled&&di.supportsFiber)try{eo=di.inject(am),nn=di}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm;Ne.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ua(n))throw Error(C(200));return rm(e,n,null,t)};Ne.createRoot=function(e,n){if(!Ua(e))throw Error(C(299));var t=!1,r="",i=of;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Aa(e,1,!1,null,null,t,!1,r,i),e[cn]=n.current,jr(e.nodeType===8?e.parentNode:e),new Fa(n)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Ec(n),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return nt(e)};Ne.hydrate=function(e,n,t){if(!go(n))throw Error(C(200));return mo(null,e,n,!0,t)};Ne.hydrateRoot=function(e,n,t){if(!Ua(e))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=of;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=rf(n,null,e,1,t??null,i,!1,o,l),e[cn]=n.current,jr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new po(n)};Ne.render=function(e,n,t){if(!go(n))throw Error(C(200));return mo(null,e,n,!1,t)};Ne.unmountComponentAtNode=function(e){if(!go(e))throw Error(C(40));return e._reactRootContainer?(nt(function(){mo(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};Ne.unstable_batchedUpdates=Ma;Ne.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!go(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return mo(e,n,t,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function lf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lf)}catch(e){console.error(e)}}lf(),oc.exports=Ne;var Xi=oc.exports,af,Eu=Xi;af=Go.createRoot=Eu.createRoot,Go.hydrateRoot=Eu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Br.apply(null,arguments)}var Cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Cn||(Cn={}));const Tu="popstate";function sm(e){e===void 0&&(e={});function n(i,o){let{pathname:l="/",search:a="",hash:s=""}=at(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Al("",{pathname:l,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){let l=i.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof o=="string"?o:Yi(o))}function r(i,o){Wa(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return cm(n,t,r,e)}function te(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Wa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function um(){return Math.random().toString(36).substr(2,8)}function Ru(e,n){return{usr:e.state,key:e.key,idx:n}}function Al(e,n,t,r){return t===void 0&&(t=null),Br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?at(n):n,{state:t,key:n&&n.key||r||um()})}function Yi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function at(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function cm(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Cn.Pop,s=null,u=p();u==null&&(u=0,l.replaceState(Br({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function d(){a=Cn.Pop;let P=p(),m=P==null?null:P-u;u=P,s&&s({action:a,location:x.location,delta:m})}function h(P,m){a=Cn.Push;let f=Al(x.location,P,m);t&&t(f,P),u=p()+1;let g=Ru(f,u),w=x.createHref(f);try{l.pushState(g,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(w)}o&&s&&s({action:a,location:x.location,delta:1})}function v(P,m){a=Cn.Replace;let f=Al(x.location,P,m);t&&t(f,P),u=p();let g=Ru(f,u),w=x.createHref(f);l.replaceState(g,"",w),o&&s&&s({action:a,location:x.location,delta:0})}function S(P){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof P=="string"?P:Yi(P);return f=f.replace(/ $/,"%20"),te(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let x={get action(){return a},get location(){return e(i,l)},listen(P){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Tu,d),s=P,()=>{i.removeEventListener(Tu,d),s=null}},createHref(P){return n(i,P)},createURL:S,encodeLocation(P){let m=S(P);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(P){return l.go(P)}};return x}var bu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bu||(bu={}));function dm(e,n,t){return t===void 0&&(t="/"),fm(e,n,t)}function fm(e,n,t,r){let i=typeof n=="string"?at(n):n,o=Ha(i.pathname||"/",t);if(o==null)return null;let l=sf(e);pm(l);let a=null,s=_m(o);for(let u=0;a==null&&u<l.length;++u)a=km(l[u],s);return a}function sf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Dn([r,s.relativePath]),p=t.concat(s);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sf(o.children,n,p,u)),!(o.path==null&&!o.index)&&n.push({path:u,score:xm(u,o.index),routesMeta:p})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of uf(o.path))i(o,l,s)}),n}function uf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=uf(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function pm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:wm(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const gm=/^:[\w-]+$/,mm=3,hm=2,ym=1,vm=10,Sm=-2,Iu=e=>e==="*";function xm(e,n){let t=e.split("/"),r=t.length;return t.some(Iu)&&(r+=Sm),n&&(r+=hm),t.filter(i=>!Iu(i)).reduce((i,o)=>i+(gm.test(o)?mm:o===""?ym:vm),r)}function wm(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function km(e,n,t){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,p=o==="/"?n:n.slice(o.length)||"/",d=Pm({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p),h=s.route;if(!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:Dn([o,d.pathname]),pathnameBase:Rm(Dn([o,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(o=Dn([o,d.pathnameBase]))}return l}function Pm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Cm(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,p,d)=>{let{paramName:h,isOptional:v}=p;if(h==="*"){let x=a[d]||"";l=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const S=a[d];return v&&!S?u[h]=void 0:u[h]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Cm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Wa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function _m(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Wa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ha(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Em(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?at(e):e,o;return t?(t=cf(t),t.startsWith("/")?o=ju(t.substring(1),"/"):o=ju(t,n)):o=n,{pathname:o,search:bm(r),hash:Im(i)}}function ju(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Vo(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Va(e,n){let t=Tm(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Ga(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=at(e):(i=Br({},e),te(!i.pathname||!i.pathname.includes("?"),Vo("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),Vo("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),Vo("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=t;else{let d=n.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?n[d]:"/"}let s=Em(i,a),u=l&&l!=="/"&&l.endsWith("/"),p=(o||l===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}const cf=e=>e.replace(/\/\/+/g,"/"),Dn=e=>cf(e.join("/")),Rm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Im=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function jm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const df=["post","put","patch","delete"];new Set(df);const $m=["get",...df];new Set($m);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fr(){return Fr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Fr.apply(null,arguments)}const Ka=y.createContext(null),Dm=y.createContext(null),An=y.createContext(null),ho=y.createContext(null),mn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),ff=y.createContext(null);function Nm(e,n){let{relative:t}=n===void 0?{}:n;Ut()||te(!1);let{basename:r,navigator:i}=y.useContext(An),{hash:o,pathname:l,search:a}=mf(e,{relative:t}),s=l;return r!=="/"&&(s=l==="/"?r:Dn([r,l])),i.createHref({pathname:s,search:a,hash:o})}function Ut(){return y.useContext(ho)!=null}function Wt(){return Ut()||te(!1),y.useContext(ho).location}function pf(e){y.useContext(An).static||y.useLayoutEffect(e)}function gf(){let{isDataRoute:e}=y.useContext(mn);return e?Qm():Mm()}function Mm(){Ut()||te(!1);let e=y.useContext(Ka),{basename:n,future:t,navigator:r}=y.useContext(An),{matches:i}=y.useContext(mn),{pathname:o}=Wt(),l=JSON.stringify(Va(i,t.v7_relativeSplatPath)),a=y.useRef(!1);return pf(()=>{a.current=!0}),y.useCallback(function(u,p){if(p===void 0&&(p={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Ga(u,JSON.parse(l),o,p.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Dn([n,d.pathname])),(p.replace?r.replace:r.push)(d,p.state,p)},[n,r,l,o,e])}function Om(){let{matches:e}=y.useContext(mn),n=e[e.length-1];return n?n.params:{}}function mf(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=y.useContext(An),{matches:i}=y.useContext(mn),{pathname:o}=Wt(),l=JSON.stringify(Va(i,r.v7_relativeSplatPath));return y.useMemo(()=>Ga(e,JSON.parse(l),o,t==="path"),[e,l,o,t])}function Lm(e,n){return zm(e,n)}function zm(e,n,t,r){Ut()||te(!1);let{navigator:i}=y.useContext(An),{matches:o}=y.useContext(mn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Wt(),p;if(n){var d;let P=typeof n=="string"?at(n):n;s==="/"||(d=P.pathname)!=null&&d.startsWith(s)||te(!1),p=P}else p=u;let h=p.pathname||"/",v=h;if(s!=="/"){let P=s.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(P.length).join("/")}let S=dm(e,{pathname:v}),x=Wm(S&&S.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:Dn([s,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?s:Dn([s,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),o,t,r);return n&&x?y.createElement(ho.Provider,{value:{location:Fr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Cn.Pop}},x):x}function Am(){let e=Km(),n=jm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:i},t):null,null)}const Bm=y.createElement(Am,null);class Fm extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(mn.Provider,{value:this.props.routeContext},y.createElement(ff.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Um(e){let{routeContext:n,match:t,children:r}=e,i=y.useContext(Ka);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(mn.Provider,{value:n},r)}function Wm(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,a=(i=t)==null?void 0:i.errors;if(a!=null){let p=l.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);p>=0||te(!1),l=l.slice(0,Math.min(l.length,p+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<l.length;p++){let d=l[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=p),d.route.id){let{loaderData:h,errors:v}=t,S=d.route.loader&&h[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||S){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((p,d,h)=>{let v,S=!1,x=null,P=null;t&&(v=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||Bm,s&&(u<0&&h===0?(Xm("route-fallback"),S=!0,P=null):u===h&&(S=!0,P=d.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,h+1)),f=()=>{let g;return v?g=x:S?g=P:d.route.Component?g=y.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=p,y.createElement(Um,{match:d,routeContext:{outlet:p,matches:m,isDataRoute:t!=null},children:g})};return t&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?y.createElement(Fm,{location:t.location,revalidation:t.revalidation,component:x,error:v,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var hf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hf||{}),yf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(yf||{});function Hm(e){let n=y.useContext(Ka);return n||te(!1),n}function Vm(e){let n=y.useContext(Dm);return n||te(!1),n}function Gm(e){let n=y.useContext(mn);return n||te(!1),n}function vf(e){let n=Gm(),t=n.matches[n.matches.length-1];return t.route.id||te(!1),t.route.id}function Km(){var e;let n=y.useContext(ff),t=Vm(),r=vf();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Qm(){let{router:e}=Hm(hf.UseNavigateStable),n=vf(yf.UseNavigateStable),t=y.useRef(!1);return pf(()=>{t.current=!0}),y.useCallback(function(i,o){o===void 0&&(o={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Fr({fromRouteId:n},o)))},[e,n])}const $u={};function Xm(e,n,t){$u[e]||($u[e]=!0)}function Ym(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Bl(e){let{to:n,replace:t,state:r,relative:i}=e;Ut()||te(!1);let{future:o,static:l}=y.useContext(An),{matches:a}=y.useContext(mn),{pathname:s}=Wt(),u=gf(),p=Ga(n,Va(a,o.v7_relativeSplatPath),s,i==="path"),d=JSON.stringify(p);return y.useEffect(()=>u(JSON.parse(d),{replace:t,state:r,relative:i}),[u,d,i,t,r]),null}function pr(e){te(!1)}function Zm(e){let{basename:n="/",children:t=null,location:r,navigationType:i=Cn.Pop,navigator:o,static:l=!1,future:a}=e;Ut()&&te(!1);let s=n.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:s,navigator:o,static:l,future:Fr({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=at(r));let{pathname:p="/",search:d="",hash:h="",state:v=null,key:S="default"}=r,x=y.useMemo(()=>{let P=Ha(p,s);return P==null?null:{location:{pathname:P,search:d,hash:h,state:v,key:S},navigationType:i}},[s,p,d,h,v,S,i]);return x==null?null:y.createElement(An.Provider,{value:u},y.createElement(ho.Provider,{children:t,value:x}))}function Jm(e){let{children:n,location:t}=e;return Lm(Fl(n),t)}new Promise(()=>{});function Fl(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let o=[...n,i];if(r.type===y.Fragment){t.push.apply(t,Fl(r.props.children,o));return}r.type!==pr&&te(!1),!r.props.index||!r.props.children||te(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Fl(r.props.children,o)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ul.apply(null,arguments)}function qm(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function eh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nh(e,n){return e.button===0&&(!n||n==="_self")&&!eh(e)}const th=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rh="6";try{window.__reactRouterVersion=rh}catch{}const ih="startTransition",Du=Zf[ih];function oh(e){let{basename:n,children:t,future:r,window:i}=e,o=y.useRef();o.current==null&&(o.current=sm({window:i,v5Compat:!0}));let l=o.current,[a,s]=y.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=y.useCallback(d=>{u&&Du?Du(()=>s(d)):s(d)},[s,u]);return y.useLayoutEffect(()=>l.listen(p),[l,p]),y.useEffect(()=>Ym(r),[r]),y.createElement(Zm,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:l,future:r})}const lh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wl=y.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:p,viewTransition:d}=n,h=qm(n,th),{basename:v}=y.useContext(An),S,x=!1;if(typeof u=="string"&&ah.test(u)&&(S=u,lh))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),E=Ha(w.pathname,v);w.origin===g.origin&&E!=null?u=E+w.search+w.hash:x=!0}catch{}let P=Nm(u,{relative:i}),m=sh(u,{replace:l,state:a,target:s,preventScrollReset:p,relative:i,viewTransition:d});function f(g){r&&r(g),g.defaultPrevented||m(g)}return y.createElement("a",Ul({},h,{href:S||P,onClick:x||o?r:f,ref:t,target:s}))});var Nu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nu||(Nu={}));var Mu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mu||(Mu={}));function sh(e,n){let{target:t,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=n===void 0?{}:n,s=gf(),u=Wt(),p=mf(e,{relative:l});return y.useCallback(d=>{if(nh(d,t)){d.preventDefault();let h=r!==void 0?r:Yi(u)===Yi(p);s(e,{replace:h,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[u,s,p,r,i,t,e,o,l,a])}const uh="https://github.com/frankvane/vane-components";class ch extends Wr.Component{constructor(){super(...arguments);ys(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?c.jsxs("div",{className:"crash",role:"alert",children:[c.jsx("h3",{children:"这个页面炸了"}),c.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),c.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Sf(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function dh({demos:e,pathname:n}){var s;const{groups:t,entries:r,label:i}=e,o=(s=r.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:s.meta.group,[l,a]=y.useState(()=>{var p;const u=(p=t[0])==null?void 0:p.key;return Object.fromEntries(t.map(d=>[d.key,d.key===(o??u)]))});return y.useEffect(()=>{o&&a(u=>u[o]?u:{...u,[o]:!0})},[o]),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-head",children:[c.jsx("span",{children:i}),c.jsxs("code",{children:[r.length," demos"]})]}),t.map(u=>{const p=r.filter(h=>h.meta.group===u.key);if(p.length===0)return null;const d=l[u.key]??!1;return c.jsxs("div",{className:"nav-group",children:[c.jsxs("button",{type:"button",className:`nav-group-head${o===u.key?" is-current":""}`,onClick:()=>a(h=>({...h,[u.key]:!d})),"aria-expanded":d,children:[c.jsx("span",{className:`nav-caret${d?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,c.jsx("code",{children:p.length})]}),d?c.jsx("div",{className:"nav-list",children:p.map(h=>c.jsxs(Wl,{to:`/demo/${h.meta.slug}`,className:`nav-sub${n===`/demo/${h.meta.slug}`?" is-active":""}`,children:[c.jsx("em",{"aria-hidden":!0,children:Sf(e,h)}),h.meta.title]},h.meta.slug))}):null]},u.key)})]})}function fh({demos:e}){var a;const{slug:n}=Om(),{entries:t,detail:r}=e,i=n?t.find(s=>s.meta.slug===n):void 0,o=(a=t[0])==null?void 0:a.meta.slug;if(!i)return c.jsx(Bl,{to:o?`/demo/${o}`:"/",replace:!0});const l=t.indexOf(i)+1;return c.jsx(Wr.Fragment,{children:r(i,l)},i.meta.slug)}function ph({config:e}){var d,h;const{pathname:n}=Wt(),[t,r]=y.useState(!1),[i,o]=y.useState(!1);y.useEffect(()=>r(!1),[n]);const l=y.useCallback(()=>o(v=>!v),[]);y.useEffect(()=>{const v=S=>{const x=S.target,P=x&&(x.tagName==="INPUT"||x.tagName==="TEXTAREA"||x.isContentEditable);S.key==="Escape"&&r(!1),!P&&(S.key==="g"||S.key==="G")&&!S.metaKey&&!S.ctrlKey&&o(m=>!m)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]);const a=e.demos,s=(d=a.entries[0])==null?void 0:d.meta.slug,u=y.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const v=n.replace(/^\/demo\/?/,""),S=a.entries.find(x=>x.meta.slug===v);return S?`demo ${Sf(a,S)} · ${S.meta.title}`:"demo · 逐项示例"},[n,e,a]),p=y.useMemo(()=>e.nav.map((v,S)=>({...v,no:String(S+1).padStart(2,"0")})),[e.nav]);return c.jsxs("div",{className:`shell${t?" is-nav-open":""}${i?" is-guides":""}`,children:[c.jsx("a",{className:"skip-link",href:"#main",onClick:v=>{v.preventDefault();const S=document.getElementById("main");S==null||S.setAttribute("tabindex","-1"),S==null||S.focus(),S==null||S.scrollIntoView({block:"start"})},children:"跳到内容"}),c.jsxs("aside",{className:"side","aria-label":"站点导航",children:[c.jsxs(Wl,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),c.jsxs("span",{children:[c.jsx("strong",{children:e.pkg}),c.jsx("em",{children:e.subtitle})]})]}),c.jsxs("nav",{children:[p.map(v=>c.jsxs(Wl,{to:v.to,className:`nav-item${n===v.to?" is-active":""}`,"aria-current":n===v.to?"page":void 0,children:[c.jsx("em",{"aria-hidden":!0,children:v.no}),c.jsx("span",{children:v.label}),v.hint?c.jsx("code",{children:v.hint}):null]},v.to)),c.jsx(dh,{demos:e.demos,pathname:n})]}),c.jsxs("div",{className:"side-foot",children:[c.jsx("p",{children:e.footer[0]}),c.jsx("p",{className:"muted",children:e.footer[1]})]})]}),c.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),c.jsxs("div",{className:"main",id:"main",children:[c.jsxs("header",{className:"topbar",children:[c.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(v=>!v),children:c.jsx("span",{"aria-hidden":!0})}),c.jsx("span",{className:"crumb",children:u}),c.jsxs("div",{className:"topbar-right",children:[(h=e.stats)==null?void 0:h.map(v=>c.jsxs("span",{className:"topbar-stat",title:v.title,children:[c.jsx("b",{children:v.value})," ",v.label]},v.label)),c.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":i,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[c.jsx("i",{"aria-hidden":!0}),"guides"]}),c.jsx("a",{className:"topbar-link",href:e.sourceUrl??uh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),c.jsx("div",{className:"guides","aria-hidden":!0}),c.jsx(y.Suspense,{fallback:c.jsx("div",{className:"loading",children:"loading modules…"}),children:c.jsx(ch,{children:c.jsxs(Jm,{children:[e.routes.map(v=>c.jsx(pr,{path:v.path,element:v.element},v.path)),c.jsx(pr,{path:"/demo",element:c.jsx(Bl,{to:s?`/demo/${s}`:"/",replace:!0})}),c.jsx(pr,{path:"/demo/:slug",element:c.jsx(fh,{demos:e.demos})}),c.jsx(pr,{path:"*",element:c.jsx(Bl,{to:"/",replace:!0})})]})})})]})]})}function gh({config:e}){return c.jsx(oh,{children:c.jsx(ph,{config:e})})}const mh="modulepreload",hh=function(e,n){return new URL(e,n).href},Ou={},Qa=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=hh(u,r),u in Ou)return;Ou[u]=!0;const p=u.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(!!r)for(let S=l.length-1;S>=0;S--){const x=l[S];if(x.href===u&&(!p||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":mh,p||(v.as="script"),v.crossOrigin="",v.href=u,s&&v.setAttribute("nonce",s),document.head.appendChild(v),p)return new Promise((S,x)=>{v.addEventListener("load",S),v.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return i.then(l=>{for(const a of l||[])a.status==="rejected"&&o(a.reason);return n().catch(o)})};function yh(){const e=new Map,n=new Map;let t=0;const r=(a,s)=>{const u=e.get(a);if(u){if(t>=50){console.warn(`[PluginBus] emit depth exceeded: "${a}"`);return}t+=1;for(const p of[...u])try{p(s)}catch(d){console.warn(`[PluginBus] handler error for event "${a}"`,d)}t-=1}},i=(a,s)=>{let u=e.get(a);return u||(u=new Set,e.set(a,u)),u.add(s),()=>{u==null||u.delete(s)}},o=(a,s)=>{const u=p=>{try{s(p)}finally{l(a,u)}};return i(a,u)},l=(a,s)=>{var u;if(!s){e.delete(a);return}(u=e.get(a))==null||u.delete(s)};return{emit:r,on:i,once:o,off:l,getData:a=>n.get(a),setData:(a,s)=>{const u=n.get(a);n.set(a,s),u!==s&&r(a,s)},deleteData:a=>{const s=n.has(a);n.delete(a),s&&r(a,void 0)},hasData:a=>n.has(a),getAll:()=>{const a=Object.create(null);return n.forEach((s,u)=>{a[u]=s}),a},clear:()=>{e.clear(),n.clear()}}}function vh(e){const n=new Map(e.map(a=>[a.name,a])),t=[];for(const a of e)for(const s of a.dependencies??[])n.has(s)||t.push(`${a.name} -> ${s}`);const r=[],i=new Set,o=[...e],l=a=>(a.dependencies??[]).every(s=>i.has(s)||!n.has(s));for(;o.length>0;){const a=o.filter(l);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${o.map(u=>u.name).join(" <-> ")}`);let s=a[0];for(const u of a)(u.priority??0)>(s.priority??0)&&(s=u);r.push(s),i.add(s.name),o.splice(o.indexOf(s),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}function xf(e,n){try{return vh(e)}catch(t){return n==null||n(t),e}}async function Sh(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:i="unknown"}=n;if(!t||t<=0)return await e();let o;const l=new Promise((a,s)=>{o=setTimeout(()=>{s(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${i} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{o&&clearTimeout(o)}}const xh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function wh(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,i=[];let o=[];const l=new Map,a=new Map,s=new Set;let u=0,p=null,d=0;const h=(k,_,M)=>{i.push({plugin:k,hook:_,error:M})},v=()=>{u+=1,p=null},S=(k,_=new Set)=>k.enabled===!1?!1:_.has(k.name)?!0:(_.add(k.name),(k.dependencies??[]).every(M=>{const ee=l.get(M);return!ee||S(ee,_)})),x=()=>{if(p)return p;const k=[...l.values()].filter(_=>S(_)?!0:(h(_.name,"dependencies",new Error("依赖已停用")),!1));return p=xf(k,_=>h("[order]","resolveDependencyOrder",_))},P=k=>{const _=o.filter(([M])=>!k||M===k).reverse();o=k?o.filter(([M])=>M!==k):[];for(const[,M]of _)try{M()}catch(ee){n.warn("[vane] cleanup failed",ee)}},m=k=>{var _;return Promise.resolve((_=k.destroy)==null?void 0:_.call(k)).catch(M=>n.warn(`[vane] destroy failed: ${k.name}`,M))},f=async(k,_,M,ee,L)=>{var Ze,T;const oe=_==="onUnmount";if(_==="onMount"||oe){if(s.has(k.name)!==oe)return{};oe?s.delete(k.name):s.add(k.name)}const hn=(Ze=k.hooks)==null?void 0:Ze[_];if(typeof hn!="function")return{};let We;try{const $=()=>hn(M,...ee);We=k.sandbox??t?await Sh($,{timeout:k.timeout??r,name:k.name,hook:_}):await $()}catch($){return L!==u?{}:(h(k.name,_,$),n.warn(`[vane] ${_} failed: ${k.name}`,$),(T=e.onError)==null||T.call(e,k.name,_,$),{stop:_==="onError"})}return L!==u?{}:xh.has(_)&&typeof We=="function"?(o.push([k.name,We]),{}):{value:We}},g=async(k,_,M)=>{const ee=u;for(const L of x()){if(ee!==u)return;const oe=await f(L,k,_,M,ee);if(oe.stop)return;if(oe.value===!1)return!1;if(oe.value!==void 0&&oe.value!==!0)return oe.value}},w=(k,_,...M)=>g(k,_,M),E=k=>{l.get(k.name)&&a.get(k.name)!==k&&(n.warn(`[vane] duplicate plugin, destroy old: ${k.name}`),j(k.name)),l.set(k.name,{...k,enabled:k.enabled??!0}),a.set(k.name,k),s.delete(k.name),v(),k.init&&Promise.resolve(k.init()).catch(_=>{n.warn(`[vane] init failed: ${k.name}`,_)})},I=k=>k.forEach(E),b=k=>{l.delete(k),a.delete(k),s.delete(k),p=null},j=k=>{const _=l.get(k);_&&(v(),P(k),m(_),b(k))};return{register:E,registerAll:I,unregister:j,getPlugin:k=>l.get(k),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(k=>k.enabled!==!1),getExecutionOrder:()=>[...x()],enable:k=>{const _=l.get(k);_&&(_.enabled=!0,p=null)},disable:k=>{const _=l.get(k);_&&(_.enabled=!1,p=null)},has:k=>l.has(k),executeHook:w,clear:()=>{v(),d+=1,P();const k=[...l.values()].map(m);return l.clear(),a.clear(),s.clear(),Promise.all(k).then(()=>{})},getErrors:()=>[...i],align:async(k,_)=>{const M=++d,ee=new Map(k.map(L=>[L.name,L]));for(const L of[...l.keys()]){if(M!==d)return;if(a.get(L)===ee.get(L))continue;const oe=l.get(L);v(),await f(oe,"onUnmount",_,[],u),P(L),await m(oe),b(L)}for(const L of k){if(M!==d)return;a.get(L.name)!==L&&E(L)}},peekOrder:x}}var kh=Object.defineProperty,Ph=(e,n,t)=>n in e?kh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ch=(e,n,t)=>Ph(e,n+"",t);class Xa extends Wr.Component{constructor(){super(...arguments),Ch(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidUpdate(n){var i,o;const t=n.resetKeys??[],r=this.props.resetKeys??[];this.state.error&&(t.length!==r.length||t.some((l,a)=>!Object.is(l,r[a])))&&((o=(i=this.props).onReset)==null||o.call(i),this.setState({error:null}))}componentDidCatch(n,t){var r,i;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(i=(r=this.props).onError)==null||i.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let fi=null;function _h(e=!1){if(fi&&!e)return fi;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,i=typeof navigator<"u"&&navigator.userAgent||"",o=/iPad|Tablet/i.test(i),l=/Mobile|Android|iPhone/i.test(i),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return fi={type:o?"tablet":l?"mobile":"desktop",os:i,browser:i,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:a,isRetina:r>=2},fi}function Lu(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),r=Object.keys(n);return t.length!==r.length?!1:t.every(i=>Object.is(e[i],n[i]))}function Eh(e){const{plugins:n,props:t,data:r,initialState:i,containerRef:o,enableDebug:l=!1,managerOptions:a,extendContext:s}=e,u=y.useRef(null),p=o??u,d=y.useRef(null);d.current||(d.current=wh(a));const h=d.current,v=y.useRef(null);v.current||(v.current=yh());const S=v.current,x=y.useRef(new Map),[P,m]=y.useState(i??{}),[,f]=y.useState(0),g=y.useCallback(()=>f(A=>A+1),[]),w=y.useMemo(()=>_h(),[]),E=y.useRef(t);Lu(E.current,t)||(E.current=t);const I=E.current,b=y.useRef(r);Lu(b.current,r)||(b.current=r);const j=b.current,k=y.useRef(null),_=y.useMemo(()=>{const A={props:I,data:j,bus:S,refs:{container:p,getContainer:()=>p.current},state:P,setState:B=>m(se=>({...se,...B})),shared:x.current,deviceInfo:w,forceUpdate:g,getSize:()=>{const B=p.current;return B?{width:B.offsetWidth,height:B.offsetHeight}:{width:0,height:0}},logger:console};return s?s(A):A},[I,j,P,w,S,s]);y.useLayoutEffect(()=>{k.current=_},[_]);const M=y.useRef(n),ee=M.current;ee!==n&&(ee.length!==n.length||n.some((A,B)=>A!==ee[B]))&&(M.current=n);const L=M.current,oe=y.useRef(0);y.useLayoutEffect(()=>{const A=++oe.current,B=k.current;return h.align(L,B).then(()=>{oe.current===A&&(l&&console.debug("[vane/plugin-core] plugins registered:",L.map(se=>se.name).join("|")),h.executeHook("onMount",B))}),()=>{oe.current+=1}},[L,h,l]),y.useLayoutEffect(()=>()=>{const A=k.current;if(!h.getExecutionOrder().some(B=>{var se;return typeof((se=B.hooks)==null?void 0:se.onUnmount)=="function"})){h.clear();return}h.executeHook("onUnmount",A).finally(()=>h.clear())},[h]);const hn=h.peekOrder(),We=y.useRef([]),Ze=y.useMemo(()=>{const A=new Map(L.map(ue=>[ue.name,ue])),B=L.filter(ue=>{var Wn;return ue.enabled!==!1&&((Wn=h.getPlugin(ue.name))==null?void 0:Wn.enabled)!==!1}),se=hn.length===B.length?hn.map(ue=>A.get(ue.name)??ue):xf(B),me=We.current;return me.length===se.length&&se.every((ue,Wn)=>ue===me[Wn])?me:(We.current=se,se)},[L,h,hn]),T=y.useRef(_);T.current=_;const $=y.useCallback((A,B)=>{var ue;const se=T.current;let me=B;for(const Wn of Ze){const vo=(ue=Wn.hooks)==null?void 0:ue[A];if(typeof vo=="function")try{me=A==="transformData"?vo(se,me):vo(me)}catch(jf){(se.logger??console).warn(`[plugin-core] ${Wn.name}.${A} 执行失败，已跳过`,jf)}}return me},[Ze]),D=y.useCallback(A=>$("transformProps",A),[$]),K=y.useCallback(A=>$("transformData",A),[$]),re=y.useCallback((A,...B)=>h.executeHook(A,k.current,...B),[h]);return{manager:h,bus:S,context:_,state:P,setState:_.setState,execute:re,transformProps:D,transformData:K,orderedPlugins:Ze}}y.createContext(null);function Th(e,n,t){var i,o;if(e.enabled===!1||typeof((i=e.hooks)==null?void 0:i[n])!="function")return!1;const r=(o=e.config)==null?void 0:o.slotPosition;return t==="before"?r==="before":t==="footer"?r===void 0||r==="after"||r==="footer":r===void 0||r==="after"}function Rh(e,n){var t,r;return(((t=e.config)==null?void 0:t.order)??0)-(((r=n.config)==null?void 0:r.order)??0)||(n.priority??0)-(e.priority??0)}function bh(e,n,t){const r=new Set;return e.map(i=>{var o;if(r.has(i.name))return null;r.add(i.name);try{const l=(o=i.hooks)==null?void 0:o[t],a=l==null?void 0:l(n);return a==null?null:c.jsx(Xa,{children:a},`vane-slot-${i.name}`)}catch(l){return console.warn(`[vane/plugin-core] 插件 ${i.name} 的 ${t} 渲染失败`,l),null}})}function Ih(e,n,t){const{hook:r,position:i="after"}=t,o=e.filter(l=>Th(l,r,i)).sort(Rh);return bh(o,n,r)}const zu=["renderHeader","renderCalendar","renderRewards","renderActions","renderFooter"],Au=[];function jh(e,n){var t,r;return(((t=e.config)==null?void 0:t.order)??0)-(((r=n.config)==null?void 0:r.order)??0)||(n.priority??0)-(e.priority??0)}function $h(e){var t;const n={renderHeader:[],renderCalendar:[],renderRewards:[],renderActions:[],renderFooter:[]};for(const r of e)if(r.enabled!==!1)for(const i of zu)typeof((t=r.hooks)==null?void 0:t[i])=="function"&&n[i].push(r);for(const r of zu)n[r].sort(jh);return n}const wf=y.createContext(null);function Dh({orderedPlugins:e,context:n,children:t}){const r=y.useMemo(()=>$h(e),[e]),i=y.useMemo(()=>({groups:r,context:n}),[r,n]);return c.jsx(wf.Provider,{value:i,children:t})}function Nh(e,n,t){return e.map(r=>{try{const i=r.hooks[t](n);return i==null?null:c.jsx(Xa,{children:i},`signin-slot-${r.name}`)}catch(i){return console.warn(`[vane-sign-in] 插件 ${r.name} 的 ${t} 渲染失败`,i),null}})}function sr(e){const n=y.useContext(wf),t=n==null?void 0:n.groups[e],r=n==null?void 0:n.context;return y.useMemo(()=>{if(!t||!r)return Au;const i=Nh(t,r,e);return i.length?i:Au},[t,r,e])}const kf=y.createContext(null);function Mh({children:e,onResume:n,intervalMs:t=1e3}){const[r,i]=y.useState(()=>Date.now());return y.useEffect(()=>{const o=setInterval(()=>i(Date.now()),t);return()=>clearInterval(o)},[t]),y.useEffect(()=>{if(typeof document>"u"||typeof window>"u")return;const o=()=>{document.visibilityState!=="hidden"&&(i(Date.now()),n==null||n())};return document.addEventListener("visibilitychange",o),window.addEventListener("focus",o),()=>{document.removeEventListener("visibilitychange",o),window.removeEventListener("focus",o)}},[n]),c.jsx(kf.Provider,{value:r,children:e})}function Ya(){return y.useContext(kf)??Date.now()}const H=y.forwardRef(function(n,t){var f;const{children:r,containerClassName:i,containerStyle:o,containerRefExternal:l}=n,a=y.useRef(null),s=l||a,[,u]=y.useState(0),p=y.useCallback(()=>u(g=>g+1),[]),d=(f=n.callbacks)==null?void 0:f.refresh,h=y.useCallback(()=>{if(d)try{const g=d();g&&typeof g.then=="function"&&g.catch(w=>{console.warn("[vane-sign-in] callbacks.refresh 执行失败",w)})}catch(g){console.warn("[vane-sign-in] callbacks.refresh 执行失败",g)}},[d]),v=sr("renderHeader"),S=sr("renderCalendar"),x=sr("renderRewards"),P=sr("renderActions"),m=sr("renderFooter");return y.useImperativeHandle(t,()=>({getContainer:()=>s.current,forceUpdate:p,getSize:()=>{const g=s.current;return g?{width:g.offsetWidth,height:g.offsetHeight}:{width:0,height:0}}}),[p]),c.jsx(Mh,{onResume:h,children:c.jsxs("div",{ref:s,"data-testid":"si-root",className:`vs-signin ${i||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",borderRadius:12,border:"1px solid #e3e5e8",boxShadow:"0 1px 3px rgba(16, 22, 26, 0.06)",overflow:"hidden",display:"flex",flexDirection:"column",width:"100%",maxWidth:460,...o},children:[v.length>0&&c.jsx("div",{className:"vs-header",style:{display:"flex",flexDirection:"column",gap:12,padding:"14px 16px 8px"},children:v}),S.length>0&&c.jsx("div",{className:"vs-calendar",style:{display:"flex",flexDirection:"column",gap:12,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:S}),x.length>0&&c.jsx("div",{className:"vs-rewards",style:{display:"flex",flexDirection:"column",gap:10,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:x}),P.length>0&&c.jsx("div",{className:"vs-actions",style:{display:"flex",flexWrap:"wrap",gap:8,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:P}),m.length>0&&c.jsx("div",{className:"vs-footer",style:{display:"flex",flexDirection:"column",gap:12,padding:"8px 16px 16px",borderTop:"1px solid #f0f2f4"},children:m}),r]})})});H.displayName="SignInCore";const Pf=/^(\d{4})-(\d{2})-(\d{2})$/,Bu=new Map;function pt(e,n=2){return String(e).padStart(n,"0")}function Oh(e){const n=Bu.get(e);if(n)return n;const t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"});return Bu.set(e,t),t}function Hl(e){const n=Pf.exec(e);if(!n)throw new RangeError(`[vane-sign-in] 非法日期键：${String(e)}`);const t=Number(n[1]),r=Number(n[2]),i=Number(n[3]),o=new Date(0);if(o.setUTCFullYear(t,r-1,i),o.setUTCHours(0,0,0,0),o.getUTCFullYear()!==t||o.getUTCMonth()!==r-1||o.getUTCDate()!==i)throw new RangeError(`[vane-sign-in] 非法日期键：${String(e)}`);return o.getTime()}function Lh(e){if(e instanceof Date)return e;const n=new Date(e);if(Number.isNaN(n.getTime()))throw new RangeError(`[vane-sign-in] 非法时间值：${String(e)}`);return n}function Za(e){if(typeof e!="string"||!Pf.test(e))return!1;try{return Hl(e),!0}catch{return!1}}function Ja(e=Date.now(),n){if(typeof e=="string"&&Za(e))return e;const t=Lh(e);if(n){const r=Oh(n).formatToParts(t);let i="",o="",l="";for(const a of r)a.type==="year"?i=a.value:a.type==="month"?o=a.value:a.type==="day"&&(l=a.value);return`${pt(Number(i),4)}-${pt(Number(o))}-${pt(Number(l))}`}return`${pt(t.getFullYear(),4)}-${pt(t.getMonth()+1)}-${pt(t.getDate())}`}function zh(e,n){return Ja(e,n)}function Fu(e,n){return Hl(e),Hl(n),e===n?0:e<n?-1:1}const Ah=["signed","today","missed","future","reward"],Bh=["points","coupon","gift","badge"];function tt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Ae(e,n=0){return typeof e=="number"&&Number.isFinite(e)&&e>=0?Math.trunc(e):n}function rt(e,n=""){return typeof e=="string"?e:n}function Fh(e){return typeof e=="string"&&Ah.includes(e)}function Uh(e){if(typeof e!="string"||!e)return!1;try{return new Intl.DateTimeFormat("en-CA",{timeZone:e}),!0}catch{return!1}}function Vl(e){const n=e.kind;return{day:Ae(e.day),kind:typeof n=="string"&&Bh.includes(n)?n:"points",value:typeof e.value=="number"&&Number.isFinite(e.value)?e.value:void 0,label:rt(e.label),claimed:e.claimed===!0}}function Wh(e){const n=tt(e)?e:{};return{date:rt(n.date),day:Ae(n.day),status:Fh(n.status)?n.status:"future",reward:tt(n.reward)?Vl(n.reward):void 0,canMakeup:n.canMakeup===!0}}function Hh(e){if(!tt(e))return;const n=typeof e.progress=="number"&&Number.isFinite(e.progress)?Math.min(1,Math.max(0,e.progress)):0;return{name:rt(e.name),current:Ae(e.current),next:Ae(e.next),progress:n}}function Vh(e){return Array.isArray(e)?e.map((n,t)=>{const r=tt(n)?n:{};return{id:rt(r.id,`record-${t}`),day:Ae(r.day),label:rt(r.label),at:typeof r.at=="number"&&Number.isFinite(r.at)?r.at:0}}):[]}function Gh(e){const n=tt(e)?e:{};return{available:Ae(n.available),used:Ae(n.used),max:Ae(n.max)}}function Kh(e){if(!tt(e))return;const n=rt(e.message);if(!n)return;const t=rt(e.code);return t?{code:t,message:n}:{message:n}}function Qh(e){const n=e??{};return{todaySigned:n.todaySigned===!0,streak:Ae(n.streak),maxStreak:Ae(n.maxStreak),totalDays:Ae(n.totalDays),points:Ae(n.points),calendar:Array.isArray(n.calendar)?n.calendar.map(Wh):[],rewards:Array.isArray(n.rewards)?n.rewards.map(t=>tt(t)?Vl(t):Vl({})):[],makeup:Gh(n.makeup),nextResetAt:typeof n.nextResetAt=="number"&&Number.isFinite(n.nextResetAt)?n.nextResetAt:void 0,businessTimeZone:Uh(n.businessTimeZone)?n.businessTimeZone:void 0,todayKey:Za(n.todayKey)?n.todayKey:void 0,lastError:Kh(n.lastError),remindEnabled:typeof n.remindEnabled=="boolean"?n.remindEnabled:void 0,level:Hh(n.level),rules:Array.isArray(n.rules)?n.rules.filter(t=>typeof t=="string"):void 0,history:Vh(n.history)}}const Xh={};function G(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:i=!1}=t,o=y.forwardRef((l,a)=>{const s=y.useRef(null),u=l.callbacks??Xh,p=y.useCallback(g=>({...g,data:l.data,callbacks:u}),[l.data,u]),d=Eh({plugins:r,props:l,data:l.data,containerRef:s,extendContext:p,enableDebug:i}),h=y.useCallback((g,...w)=>d.execute(g,...w),[d.manager]),{transformData:v}=d,S=y.useMemo(()=>Qh(v(l.data)),[l.data,v]),x=y.useMemo(()=>({...d.context,data:S,callbacks:u}),[S,u,d.bus,d.state]),P=d.transformProps(l);y.useEffect(()=>{h("onMount")},[h]);const m=y.useRef(l);y.useEffect(()=>{const g=m.current;g!==l&&(m.current=l,h("onPropsChange",g,l))},[l,h]);const f={...P,data:S,containerRefExternal:s,debug:P.debug??i,onMount:()=>{var g;(g=P.onMount)==null||g.call(P)},onUnmount:()=>{var g;(g=P.onUnmount)==null||g.call(P)},children:c.jsx(Xa,{children:c.jsxs(c.Fragment,{children:[P.children,Ih(d.orderedPlugins,x,{hook:"renderOverlay"})]})})};return c.jsx(Dh,{orderedPlugins:d.orderedPlugins,context:x,children:c.jsx(e,{ref:a,...f})})});return o.displayName="WithPlugins(SignInCore)",o}const De="#cf4407",Yh="#fff1e6",Cf="#b8860b",Zh="#0f8a4a",Jh="#1f2328",pn="#6b6b6b",it="#8a8a8a",qa="#f2f3f5",qh="#8a8a8a",ey="#e3e5e8",Zi={signed:{bg:"#fff1e6",fg:"#d35400",border:"#cf4407"},today:{bg:"#cf4407",fg:"#ffffff",border:"#cf4407"},missed:{bg:"#f2f3f5",fg:"#7d7d7d",border:"#e3e5e8"},future:{bg:"#fafafa",fg:"#8a8a8a",border:"#ececec"},reward:{bg:"#fff8e1",fg:"#b8860b",border:"#e0a800"}},_f={signed:"✓",today:"今",missed:"·",future:"",reward:"★"},Ef={signed:"已签到",today:"今天",missed:"漏签",future:"未开始",reward:"奖励日"},ny="StreakStatePlugin",ty="连签状态：展示当前连签天数与历史最高连签，头部区渲染。",ry="0.1.0",iy=["streak","header","status"],oy=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],ly=[],ay="只读取 context 字段（props / state / data），不调用上下文方法",sy=[{name:"showMax",type:"boolean",default:"true",description:"是否展示历史最高连签天数"}],uy="withSignInPlugins(SignInCore, [createStreakStatePlugin()])",cy=[{name:"默认",description:"头部展示连签天数与最高连签",src:"createStreakStatePlugin()",config:{}}],es={name:ny,description:ty,since:ry,tags:iy,events:oy,methods:ly,methodsNote:ay,config:sy,example:uy,examples:cy};function Bn(e={}){const{showMax:n=!0}=e;return{name:"StreakState",version:"0.1.0",description:es.description,priority:10,enabled:!0,hooks:{renderHeader:t=>{const{streak:r,maxStreak:i}=t.data;return c.jsxs("div",{"data-testid":"si-streak",style:{display:"flex",alignItems:"baseline",gap:8},children:[c.jsx("span",{style:{fontSize:34,fontWeight:800,color:De,lineHeight:1,letterSpacing:"-0.5px"},children:r}),c.jsx("span",{style:{fontSize:13,color:pn,fontWeight:600},children:"天连签"}),n&&c.jsxs("span",{style:{marginLeft:"auto",fontSize:12,color:pn,background:"#faf7f4",border:`1px solid ${ey}`,borderRadius:999,padding:"3px 10px",whiteSpace:"nowrap"},children:["最高 ",i," 天"]})]})}}}}Bn.meta=es;const dy="CalendarStripPlugin",fy="日历条：横向滚动的逐日格，展示已签/今日/漏签/未来/奖励五态，带奖励格金点提示。",py="0.1.0",gy=["calendar","strip","status"],my=[{name:"renderCalendar",when:"每次渲染，日历区槽位",description:"日历条 / 月历网格 / 漏签标记"}],hy=[],yy="只读取 context 字段（props / state / data），不调用上下文方法",vy=[{name:"showRewardDot",type:"boolean",default:"true",description:"是否在带奖励的格右上角显示金点"}],Sy="withSignInPlugins(SignInCore, [createCalendarStripPlugin()])",xy=[{name:"默认",description:"日历条展示当月逐日签到状态",src:"createCalendarStripPlugin()",config:{}}],ns={name:dy,description:fy,since:py,tags:gy,events:my,methods:hy,methodsNote:yy,config:vy,example:Sy,examples:xy};function st(e={}){const{showRewardDot:n=!0}=e;return{name:"CalendarStrip",version:"0.1.0",description:ns.description,priority:20,enabled:!0,hooks:{renderCalendar:t=>{const r=t.data.calendar??[];return c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:r.map(i=>{const o=Zi[i.status]??Zi.future,l=!!(i.reward&&!i.reward.claimed),a=Ef[i.status]??i.status;return c.jsxs("div",{role:"img","aria-label":`${i.date} ${a}`,title:`${i.date} ${a}`,style:{flex:"0 0 auto",width:42,height:54,borderRadius:8,background:o.bg,color:o.fg,border:`1px solid ${o.border}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"},children:[c.jsxs("span",{style:{fontSize:11,color:o.fg},children:["第",i.day,"天"]}),c.jsx("span",{style:{fontSize:16,fontWeight:700,lineHeight:1.1},children:_f[i.status]||i.day}),n&&l&&c.jsx("span",{style:{position:"absolute",top:4,right:4,width:6,height:6,borderRadius:"50%",background:Cf}})]},i.date)})})}}}}st.meta=ns;const wy="RewardPreviewPlugin",ky="奖励预告：从当前连签天数起，逐日展示后续可领奖励（积分 / 券 / 礼包 / 徽章）。",Py="0.1.0",Cy=["reward","preview","rewards"],_y=[{name:"renderRewards",when:"每次渲染，奖励区槽位",description:"逐日奖励预告、领取态、里程碑奖励"}],Ey=[],Ty="只读取 context 字段（props / state / data），不调用上下文方法",Ry=[{name:"limit",type:"number",default:"5",description:"最多展示的奖励预告条数"}],by="withSignInPlugins(SignInCore, [createRewardPreviewPlugin()])",Iy=[{name:"默认",description:"奖励区逐日预告后续奖励",src:"createRewardPreviewPlugin()",config:{}}],ts={name:wy,description:ky,since:Py,tags:Cy,events:_y,methods:Ey,methodsNote:Ty,config:Ry,example:by,examples:Iy};function Fn(e={}){const{limit:n=5}=e;return{name:"RewardPreview",version:"0.1.0",description:ts.description,priority:30,enabled:!0,hooks:{renderRewards:t=>{const r=[...t.data.rewards??[]].filter(i=>i.day>=t.data.streak).sort((i,o)=>i.day-o.day);return r.length?c.jsx("div",{style:{background:"#fafbfc",border:"1px solid #eef0f2",borderRadius:10,padding:"10px 12px",display:"flex",flexDirection:"column",gap:8},children:r.slice(0,n).map(i=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[c.jsx("span",{style:{width:32,height:32,borderRadius:8,flex:"0 0 auto",background:"#fff8e1",color:"#9a6a00",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:i.day}),c.jsx("span",{style:{color:"#1f2328"},children:i.label}),i.claimed&&c.jsx("span",{style:{marginLeft:"auto",color:"#0f8a4a",fontSize:12},children:"已领 ✓"})]},i.day))}):null}}}}Fn.meta=ts;const jy="MakeupSlotPlugin",$y="补签位：找到可补签的漏签格并提供补签入口，补签次数用尽后置灰禁用。",Dy="0.1.0",Ny=["makeup","actions","recovery"],My=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],Oy=[],Ly="只读取 context 字段（props / state / data），不调用上下文方法",zy=[{name:"buttonText",type:"string",default:"undefined",description:"自定义按钮文案（仅有可补目标且还有配额时生效）"},{name:"exhaustedText",type:"string",default:"补签次数已用完",description:"补签配额耗尽时的文案"},{name:"noTargetText",type:"string",default:"暂无可补签",description:"配额还在但没有可补目标（漏签格都在窗口外）时的文案"},{name:"errorText",type:"string",default:"补签失败，请重试",description:"回调失败时的兜底文案"}],Ay="withSignInPlugins(SignInCore, [createMakeupSlotPlugin()])",By=[{name:"默认",description:"操作区补签入口，禁用态置灰",src:"createMakeupSlotPlugin()",config:{}}],rs={name:jy,description:$y,since:Dy,tags:Ny,events:My,methods:Oy,methodsNote:Ly,config:zy,example:Ay,examples:By};function Ht(e,...n){if(!e)return Promise.resolve();try{const t=e(...n);return t&&typeof t.then=="function"?Promise.resolve(t):Promise.resolve()}catch(t){return Promise.reject(t)}}function yo(e,n){if(typeof e=="string"&&e.trim())return e;if(e&&typeof e=="object"){const t=e.message;if(typeof t=="string"&&t.trim())return t}return n}function Fy(e,n,t,r,i){const{makeup:o,calendar:l,todayKey:a,businessTimeZone:s}=e.data,u=a??Ja(n,s),p=(l??[]).filter(x=>x.canMakeup===!0&&Za(x.date)&&Fu(x.date,u)<=0).sort((x,P)=>Fu(x.date,P.date))[0],d=o.available-o.used,h=d<=0,v=h||!p,S=h?r:p?t??`补签 · 剩${d}次`:i;return{cell:p,remaining:d,disabled:v,exhausted:h,label:S}}function Uy({ctx:e,target:n,errorText:t}){var p;const r=y.useRef(!1),[i,o]=y.useState(!1),[l,a]=y.useState(null),s=async()=>{const d=n.cell;if(!(!d||n.disabled||r.current)){r.current=!0,o(!0),a(null);try{await Ht(e.callbacks.makeup,d.date,{day:d.day})}catch(h){a(yo(h,t))}finally{r.current=!1,o(!1)}}},u=n.disabled||i;return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[c.jsx("button",{type:"button","data-testid":"si-makeup-btn","data-disabled":String(u),"data-target":(p=n.cell)==null?void 0:p.date,"data-pending":String(i),"aria-busy":i||void 0,disabled:u,onClick:()=>{s()},style:{border:u?"1px solid #d8d8d8":`1px solid ${De}`,background:u?qa:"#fff",color:u?qh:De,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:u?"not-allowed":"pointer"},children:i?"补签中…":n.label}),l&&c.jsx("div",{role:"alert","data-testid":"si-makeup-error",style:{fontSize:12,color:"#d4380d"},children:l})]})}function ut(e={}){const{buttonText:n,exhaustedText:t="补签次数已用完",noTargetText:r="暂无可补签",errorText:i="补签失败，请重试"}=e;return{name:"MakeupSlot",version:"0.1.0",description:rs.description,priority:42,enabled:!0,hooks:{renderActions:o=>c.jsx(Wy,{ctx:o,buttonText:n,exhaustedText:t,noTargetText:r,errorText:i})}}}function Wy({ctx:e,buttonText:n,exhaustedText:t,noTargetText:r,errorText:i}){const o=Ya(),l=y.useMemo(()=>Fy(e,o,n,t,r),[e,o,n,t,r]);return c.jsx(Uy,{ctx:e,target:l,errorText:i})}ut.meta=rs;const Hy="TodayCheckInPlugin",Vy="今日签到：主 CTA，已签置灰、未签高亮，点击经回调下发签到动作。",Gy="0.1.0",Ky=["checkin","actions","cta"],Qy=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],Xy=[],Yy="只读取 context 字段（props / state / data），不调用上下文方法",Zy=[{name:"signedText",type:"string",default:"今日已签 ✓",description:"已签到时的按钮文案"},{name:"unsignedText",type:"string",default:"立即签到",description:"未签到时的按钮文案"},{name:"pendingText",type:"string",default:"签到中…",description:"请求在途（尚未返回）时的按钮文案；期间按钮禁用，防重复签到"},{name:"errorText",type:"string",default:"签到失败，请重试",description:"回调失败时的兜底文案（错误对象自带 message 时优先显示 message）"}],Jy="withSignInPlugins(SignInCore, [createTodayCheckInPlugin()])",qy=[{name:"默认",description:"操作区主签到按钮",src:"createTodayCheckInPlugin()",config:{}}],is={name:Hy,description:Vy,since:Gy,tags:Ky,events:Qy,methods:Xy,methodsNote:Yy,config:Zy,example:Jy,examples:qy};function ev({ctx:e,signedText:n,unsignedText:t,pendingText:r,errorText:i}){const o=Ya(),{todaySigned:l,nextResetAt:a,todayKey:s,businessTimeZone:u,lastError:p}=e.data,d=y.useRef(!1),[h,v]=y.useState(!1),[S,x]=y.useState(null),P=y.useMemo(()=>l?a!==void 0&&o>=a?!0:s?Ja(o,u)!==s:!1:!1,[l,a,s,u,o]),m=l&&!P,f=S??(p==null?void 0:p.message)??null,g=async()=>{if(!(m||d.current)){d.current=!0,v(!0),x(null);try{await Ht(e.callbacks.sign)}catch(w){x(yo(w,i))}finally{d.current=!1,v(!1)}}};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[c.jsx("button",{type:"button","data-testid":"si-checkin-btn","data-signed":String(m),"data-pending":String(h),"aria-busy":h||void 0,disabled:m||h,onClick:()=>{g()},style:{border:"none",background:m?"#f2f3f5":"#cf4407",color:m?"#8a8a8a":"#ffffff",borderRadius:20,padding:"8px 20px",fontSize:14,fontWeight:700,cursor:m||h?"not-allowed":"pointer"},children:h?r:m?n:t}),f&&c.jsx("div",{role:"alert","data-testid":"si-checkin-error",style:{fontSize:12,color:"#d4380d"},children:f})]})}function Un(e={}){const{signedText:n="今日已签 ✓",unsignedText:t="立即签到",pendingText:r="签到中…",errorText:i="签到失败，请重试"}=e;return{name:"TodayCheckIn",version:"0.1.0",description:is.description,priority:40,enabled:!0,hooks:{renderActions:o=>c.jsx(ev,{ctx:o,signedText:n,unsignedText:t,pendingText:r,errorText:i})}}}Un.meta=is;const nv={slug:"basic",title:"最小可用",group:"basic",intro:"内核 + 五个核心插件跑通装配链路；加插件就是往 withPlugins 数组里加一项。"};function tv(e){const n=Array.from({length:14},(t,r)=>{const i=r+1,o=i<8?"signed":i===8&&!e?"today":i===9?"missed":"future";return{date:`2026-10-${String(i).padStart(2,"0")}`,day:i,status:o,canMakeup:i===9}});return{todaySigned:e,streak:e?8:7,maxStreak:12,totalDays:132,points:3680,calendar:n,rewards:[{day:1,kind:"points",value:10,label:"10 积分",claimed:!0},{day:3,kind:"coupon",value:5,label:"5 元券",claimed:!0},{day:7,kind:"gift",label:"7 天礼包",claimed:!0},{day:8,kind:"points",value:50,label:"50 积分"},{day:10,kind:"badge",label:"闪耀徽章"}],makeup:{available:3,used:1,max:3}}}const rv=G(H,[Bn(),st(),Fn(),ut(),Un()]);function iv(){const[e,n]=y.useState(!1),t=tv(e),r={sign:()=>n(!0),makeup:()=>alert("触发补签"),claim:i=>alert(`领取第 ${i} 天奖励`)};return c.jsx(rv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const ov=Object.freeze(Object.defineProperty({__proto__:null,default:iv,meta:nv},Symbol.toStringTag,{value:"Module"}));function Z(e=!1){const n=Array.from({length:14},(i,o)=>{const l=o+1,a=l<8?"signed":l===8&&!e?"today":l===9?"missed":"future";return{date:`2026-10-${String(l).padStart(2,"0")}`,day:l,status:a,canMakeup:l===9}}),t=Date.now()+36e5,r=[{id:"c1",day:7,label:"7 天礼包",at:Date.now()-864e5},{id:"c2",day:3,label:"5 元券",at:Date.now()-3*864e5},{id:"c3",day:1,label:"10 积分",at:Date.now()-7*864e5}];return{todaySigned:e,streak:e?8:7,maxStreak:12,totalDays:132,points:3680,calendar:n,rewards:[{day:1,kind:"points",value:10,label:"10 积分",claimed:!0},{day:3,kind:"coupon",value:5,label:"5 元券",claimed:!0},{day:7,kind:"gift",label:"7 天礼包",claimed:!0},{day:8,kind:"points",value:50,label:"50 积分"},{day:10,kind:"badge",label:"闪耀徽章"}],makeup:{available:3,used:1,max:3},nextResetAt:t,level:{name:"黄金会员",current:680,next:1e3,progress:.68},rules:["每日 0 点刷新签到资格，连续签到奖励递增","断签后连签天数清零，但累计天数保留","补签卡可在断签 7 日内补回当日奖励","积分可 1:100 兑换现金券，详见会员中心"],history:r}}function q(e={}){return{sign:()=>{},claim:()=>{},makeup:()=>{},share:()=>{},remind:()=>{},invite:()=>{},...e}}const lv={slug:"streak-state",title:"连签状态 StreakState",group:"plugin",intro:"头部连签天数 + 最高连签；断签清零、累计保留的领域逻辑由内核数据驱动。"},av=G(H,[Bn()]);function sv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(av,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const uv=Object.freeze(Object.defineProperty({__proto__:null,default:sv,meta:lv},Symbol.toStringTag,{value:"Module"})),cv={slug:"calendar-strip",title:"日历条 CalendarStrip",group:"plugin",intro:"横向日期条；已签/今日/漏签/补签/未来五态由 DayStatus 着色，各平台运营位通用。"},dv=G(H,[st()]);function fv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(dv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const pv=Object.freeze(Object.defineProperty({__proto__:null,default:fv,meta:cv},Symbol.toStringTag,{value:"Module"})),gv={slug:"reward-preview",title:"奖励预告 RewardPreview",group:"plugin",intro:"逐日奖励预览：已领取置灰打勾，未到天数半透明，临近大额奖励高亮。"},mv=G(H,[Fn()]);function hv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(mv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const yv=Object.freeze(Object.defineProperty({__proto__:null,default:hv,meta:gv},Symbol.toStringTag,{value:"Module"})),vv={slug:"makeup-slot",title:"补签位 MakeupSlot",group:"plugin",intro:"断签缺口处的高亮补签入口：剩余补签卡数 + 一键补回当日奖励，走 callbacks.makeup。"},Sv=G(H,[ut()]);function xv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Sv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const wv=Object.freeze(Object.defineProperty({__proto__:null,default:xv,meta:vv},Symbol.toStringTag,{value:"Module"})),kv={slug:"today-check-in",title:"今日签到 TodayCheckIn",group:"plugin",intro:"操作区主按钮：未签时高亮的「立即签到」，已签后变为连签天数 + 明日预告。"},Pv=G(H,[Un()]);function Cv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Pv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const _v=Object.freeze(Object.defineProperty({__proto__:null,default:Cv,meta:kv},Symbol.toStringTag,{value:"Module"})),Ev="PointsBalancePlugin",Tv="累计积分：展示当前累计积分总额，头部区渲染。",Rv="0.1.0",bv=["points","header","balance"],Iv=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],jv=[],$v="只读取 context 字段（props / state / data），不调用上下文方法",Dv=[],Nv="withSignInPlugins(SignInCore, [createPointsBalancePlugin()])",Mv=[{name:"默认",description:"头部展示累计积分",src:"createPointsBalancePlugin()",config:{}}],os={name:Ev,description:Tv,since:Rv,tags:bv,events:Iv,methods:jv,methodsNote:$v,config:Dv,example:Nv,examples:Mv};function Vt(e={}){return{name:"PointsBalance",version:"0.1.0",description:os.description,priority:11,enabled:!0,hooks:{renderHeader:n=>{const{points:t}=n.data;return c.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[c.jsx("span",{style:{fontSize:13,color:pn},children:"积分"}),c.jsx("span",{style:{fontSize:20,fontWeight:800,color:De,lineHeight:1},children:t})]})}}}}Vt.meta=os;const Ov={slug:"points-balance",title:"积分余额 PointsBalance",group:"plugin",intro:"头部积分余额：大字号展示当前积分 + 累计天数，承接积分商城的入口视觉。"},Lv=G(H,[Vt()]);function zv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Lv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Av=Object.freeze(Object.defineProperty({__proto__:null,default:zv,meta:Ov},Symbol.toStringTag,{value:"Module"})),Bv="StatRowPlugin",Fv="数据行：一行展示累计天数与累计积分，头部区渲染。",Uv="0.1.0",Wv=["stat","header","summary"],Hv=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],Vv=[],Gv="只读取 context 字段（props / state / data），不调用上下文方法",Kv=[],Qv="withSignInPlugins(SignInCore, [createStatRowPlugin()])",Xv=[{name:"默认",description:"头部展示累计天数与积分",src:"createStatRowPlugin()",config:{}}],ls={name:Bv,description:Fv,since:Uv,tags:Wv,events:Hv,methods:Vv,methodsNote:Gv,config:Kv,example:Qv,examples:Xv};function Gt(e={}){return{name:"StatRow",version:"0.1.0",description:ls.description,priority:12,enabled:!0,hooks:{renderHeader:n=>{const{totalDays:t,points:r}=n.data;return c.jsxs("div",{style:{display:"flex",gap:18,fontSize:12,color:pn},children:[c.jsxs("span",{children:["累计 ",c.jsx("b",{style:{color:Jh,fontSize:14},children:t})," 天"]}),c.jsxs("span",{children:["累计 ",c.jsx("b",{style:{color:De,fontSize:14},children:r})," 分"]})]})}}}}Gt.meta=ls;const Yv={slug:"stat-row",title:"统计行 StatRow",group:"plugin",intro:"头部三项指标横排：当前连签、累计天数、历史最高连签，一屏尽览进度。"},Zv=G(H,[Gt()]);function Jv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Zv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const qv=Object.freeze(Object.defineProperty({__proto__:null,default:Jv,meta:Yv},Symbol.toStringTag,{value:"Module"})),eS="LevelBadgePlugin",nS="会员等级徽标：展示等级名与进度条，头部区渲染；无等级数据时静默跳过。",tS="0.1.0",rS=["level","header","badge"],iS=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],oS=[],lS="只读取 context 字段（props / state / data），不调用上下文方法",aS=[],sS="withSignInPlugins(SignInCore, [createLevelBadgePlugin()])",uS=[{name:"默认",description:"头部展示会员等级与进度",src:"createLevelBadgePlugin()",config:{}}],as={name:eS,description:nS,since:tS,tags:rS,events:iS,methods:oS,methodsNote:lS,config:aS,example:sS,examples:uS};function ct(e={}){return{name:"LevelBadge",version:"0.1.0",description:as.description,priority:13,enabled:!0,hooks:{renderHeader:n=>{const t=n.data.level;if(!t)return null;const r=Math.round(Math.min(1,Math.max(0,t.progress))*100);return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[c.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#ffffff",background:De,borderRadius:10,padding:"2px 8px",whiteSpace:"nowrap"},children:t.name}),c.jsx("div",{style:{flex:1,height:6,borderRadius:3,background:qa,overflow:"hidden"},children:c.jsx("div",{style:{width:`${r}%`,height:"100%",background:De}})}),c.jsxs("span",{style:{fontSize:11,color:it,whiteSpace:"nowrap"},children:[t.current,"/",t.next]})]})}}}}ct.meta=as;const cS={slug:"level-badge",title:"等级徽章 LevelBadge",group:"plugin",intro:"头部会员徽章：等级名 + 距下一级进度条，读 data.level 渲染。"},dS=G(H,[ct()]);function fS(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(dS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const pS=Object.freeze(Object.defineProperty({__proto__:null,default:fS,meta:cS},Symbol.toStringTag,{value:"Module"})),gS="CountdownPlugin",mS="次签倒计时：依据 nextResetAt 展示距下次可签到剩余时间，头部区渲染。",hS="0.1.0",yS=["countdown","header","timer"],vS=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],SS=[],xS="只读取 context 字段（props / state / data），不调用上下文方法",wS=[],kS="withSignInPlugins(SignInCore, [createCountdownPlugin()])",PS=[{name:"默认",description:"头部展示次签倒计时",src:"createCountdownPlugin()",config:{}}],ss={name:gS,description:mS,since:hS,tags:yS,events:vS,methods:SS,methodsNote:xS,config:wS,example:kS,examples:PS};function CS({nextResetAt:e,todaySigned:n}){const t=Ya(),r=e-t;if(r<=0)return c.jsx("div",{style:{fontSize:12,color:Zh},children:"现在可签到"});const i=Math.floor(r/864e5),o=Math.floor(r%864e5/36e5),l=Math.floor(r%36e5/6e4),a=i>0?`${i}天${o}小时`:`${o}小时${l}分`;return c.jsx("div",{style:{fontSize:12,color:it},children:n?`距下次可签到 ${a}`:"今日可签到"})}function Kt(e={}){return{name:"Countdown",version:"0.1.0",description:ss.description,priority:14,enabled:!0,hooks:{renderHeader:n=>{const{nextResetAt:t,todaySigned:r}=n.data;return t?c.jsx(CS,{nextResetAt:t,todaySigned:r}):null}}}}Kt.meta=ss;const _S={slug:"countdown",title:"次签倒计时 Countdown",group:"plugin",intro:"头部倒计时：读 data.nextResetAt 计算剩余小时/分钟，已过期则提示「现在可签到」。"},ES=G(H,[Kt()]);function TS(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(ES,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const RS=Object.freeze(Object.defineProperty({__proto__:null,default:TS,meta:_S},Symbol.toStringTag,{value:"Module"})),bS="CalendarGridPlugin",IS="月历网格：以 7 列网格形态呈现整轮签到进度，日历区渲染。",jS="0.1.0",$S=["calendar","grid","calendar-slot"],DS=[{name:"renderCalendar",when:"每次渲染，日历区槽位",description:"日历条 / 月历网格 / 漏签标记"}],NS=[],MS="只读取 context 字段（props / state / data），不调用上下文方法",OS=[{name:"columns",type:"number",default:"7",description:"网格每周列数"}],LS="withSignInPlugins(SignInCore, [createCalendarGridPlugin()])",zS=[{name:"默认",description:"以 7 列网格展示整轮签到",src:"createCalendarGridPlugin()",config:{}}],us={name:bS,description:IS,since:jS,tags:$S,events:DS,methods:NS,methodsNote:MS,config:OS,example:LS,examples:zS};function Qt(e={}){const{columns:n=7}=e;return{name:"CalendarGrid",version:"0.1.0",description:us.description,priority:21,enabled:!0,hooks:{renderCalendar:t=>{const r=t.data.calendar??[];return c.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gap:6},children:r.map(i=>{const o=Zi[i.status]??Zi.future,l=Ef[i.status]??i.status;return c.jsxs("div",{role:"img","aria-label":`${i.date} ${l}`,title:`${i.date} ${l}`,style:{height:44,borderRadius:8,background:o.bg,color:o.fg,border:`1px solid ${o.border}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[c.jsxs("span",{style:{fontSize:10,color:o.fg},children:[i.day,"天"]}),c.jsx("span",{style:{fontSize:14,fontWeight:700,lineHeight:1.1},children:_f[i.status]||i.day})]},i.date)})})}}}}Qt.meta=us;const AS={slug:"calendar-grid",title:"月历网格 CalendarGrid",group:"plugin",intro:"七列月历网格：已签/今日/漏签/补签/奖励日五态着色，适合大运营位全景展示。"},BS=G(H,[Qt()]);function FS(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(BS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const US=Object.freeze(Object.defineProperty({__proto__:null,default:FS,meta:AS},Symbol.toStringTag,{value:"Module"})),WS="RewardClaimPlugin",HS="当日奖励领取：提供已达天数待领奖励的领取按钮，奖励区渲染。",VS="0.1.0",GS=["reward","claim","rewards-slot"],KS=[{name:"renderRewards",when:"每次渲染，奖励区槽位",description:"逐日奖励预告、领取态、里程碑奖励"}],QS=[],XS="只读取 context 字段（props / state / data），不调用上下文方法",YS=[{name:"pendingText",type:"string",default:"领取中…",description:"请求在途时的按钮文案；期间按钮禁用，防重复领取"},{name:"errorText",type:"string",default:"领取失败，请重试",description:"回调失败时的兜底文案"}],ZS="withSignInPlugins(SignInCore, [createRewardClaimPlugin()])",JS=[{name:"默认",description:"展示待领奖励领取按钮",src:"createRewardClaimPlugin()",config:{}}],cs={name:WS,description:HS,since:VS,tags:GS,events:KS,methods:QS,methodsNote:XS,config:YS,example:ZS,examples:JS};function qS({ctx:e,target:n,pendingText:t,errorText:r}){const i=y.useRef(!1),[o,l]=y.useState(!1),[a,s]=y.useState(null),u=async()=>{if(!i.current){i.current=!0,l(!0),s(null);try{await Ht(e.callbacks.claim,n.day)}catch(p){s(yo(p,r))}finally{i.current=!1,l(!1)}}};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[c.jsx("button",{type:"button","data-testid":"si-claim-btn","data-day":String(n.day),"data-pending":String(o),"aria-busy":o||void 0,disabled:o,onClick:()=>{u()},style:{border:"none",background:De,color:"#ffffff",borderRadius:18,padding:"6px 16px",fontSize:13,fontWeight:700,cursor:o?"not-allowed":"pointer"},children:o?t:`领取第${n.day}天奖励 · ${n.label}`}),a&&c.jsx("div",{role:"alert","data-testid":"si-claim-error",style:{fontSize:12,color:"#d4380d"},children:a})]})}function dt(e={}){const{pendingText:n="领取中…",errorText:t="领取失败，请重试"}=e;return{name:"RewardClaim",version:"0.1.0",description:cs.description,priority:31,enabled:!0,hooks:{renderRewards:r=>{const{rewards:i,streak:o}=r.data,l=[...i??[]].filter(a=>a.day<=o&&!a.claimed).sort((a,s)=>a.day-s.day)[0];return l?c.jsx(qS,{ctx:r,target:l,pendingText:n,errorText:t}):c.jsx("div",{style:{fontSize:12,color:it},children:"今日奖励已全部领取"})}}}}dt.meta=cs;const e0={slug:"reward-claim",title:"奖励领取 RewardClaim",group:"plugin",intro:"奖励区领取：扫描 rewards，对 day<=streak 且未领的奖励给出「领取」按钮，走 callbacks.claim。"},n0=G(H,[dt()]);function t0(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(n0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const r0=Object.freeze(Object.defineProperty({__proto__:null,default:t0,meta:e0},Symbol.toStringTag,{value:"Module"})),i0="MilestonePlugin",o0="里程碑进度：展示距下一未达奖励还差几天与进度条，奖励区渲染。",l0="0.1.0",a0=["milestone","rewards","progress"],s0=[{name:"renderRewards",when:"每次渲染，奖励区槽位",description:"逐日奖励预告、领取态、里程碑奖励"}],u0=[],c0="只读取 context 字段（props / state / data），不调用上下文方法",d0=[],f0="withSignInPlugins(SignInCore, [createMilestonePlugin()])",p0=[{name:"默认",description:"展示下一里程碑进度",src:"createMilestonePlugin()",config:{}}],ds={name:i0,description:o0,since:l0,tags:a0,events:s0,methods:u0,methodsNote:c0,config:d0,example:f0,examples:p0};function Xt(e={}){return{name:"Milestone",version:"0.1.0",description:ds.description,priority:32,enabled:!0,hooks:{renderRewards:n=>{const{rewards:t,streak:r}=n.data,i=(t??[]).filter(a=>a.day>r).sort((a,s)=>a.day-s.day)[0];if(!i)return c.jsx("div",{style:{fontSize:12,color:it},children:"已达成全部奖励 🎉"});const o=i.day-r,l=Math.round((i.day-o)/i.day*100);return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsxs("div",{style:{fontSize:12,color:pn},children:["再连签 ",c.jsx("b",{style:{color:De},children:o})," 天解锁 ",i.label]}),c.jsx("div",{style:{height:6,borderRadius:3,background:qa,overflow:"hidden"},children:c.jsx("div",{style:{width:`${l}%`,height:"100%",background:Cf}})})]})}}}}Xt.meta=ds;const g0={slug:"milestone",title:"里程碑 Milestone",group:"plugin",intro:"奖励区里程碑：找到下一未达奖励，展示「再连签 N 天」+ 进度条；全达成显示庆祝终态。"},m0=G(H,[Xt()]);function h0(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(m0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const y0=Object.freeze(Object.defineProperty({__proto__:null,default:h0,meta:g0},Symbol.toStringTag,{value:"Module"})),v0="SharePlugin",S0="分享成就：触发分享回调的无状态按钮，操作区渲染。",x0="0.1.0",w0=["share","actions","social"],k0=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],P0=[],C0="只读取 context 字段（props / state / data），不调用上下文方法",_0=[{name:"text",type:"string",default:"分享成就",description:"按钮文案"}],E0="withSignInPlugins(SignInCore, [createSharePlugin()])",T0=[{name:"默认",description:"操作区展示分享按钮",src:"createSharePlugin()",config:{}}],fs={name:v0,description:S0,since:x0,tags:w0,events:k0,methods:P0,methodsNote:C0,config:_0,example:E0,examples:T0};function Yt(e={}){const{text:n="分享成就"}=e;return{name:"Share",version:"0.1.0",description:fs.description,priority:43,enabled:!0,hooks:{renderActions:t=>c.jsx("button",{type:"button",onClick:()=>{Ht(t.callbacks.share).catch(r=>{console.warn("[vane-sign-in] callbacks.share 执行失败",r)})},style:{border:"1px solid #d8d8d8",background:"#ffffff",color:pn,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:n})}}}Yt.meta=fs;const R0={slug:"share",title:"分享成就 Share",group:"plugin",intro:"操作区社交扩散位：点击触发 callbacks.share，海报/链接/卡片由消费方实现。"},b0=G(H,[Yt()]);function I0(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(b0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const j0=Object.freeze(Object.defineProperty({__proto__:null,default:I0,meta:R0},Symbol.toStringTag,{value:"Module"})),$0="RemindPlugin",D0="签到提醒开关：本地维护开关态并回调下发，操作区渲染。",N0="0.1.0",M0=["remind","actions","toggle"],O0=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],L0=[],z0="只读取 context 字段（props / state / data），不调用上下文方法",A0=[{name:"defaultOn",type:"boolean",default:"false",description:"初始是否开启提醒"}],B0="withSignInPlugins(SignInCore, [createRemindPlugin()])",F0=[{name:"默认",description:"操作区展示提醒开关",src:"createRemindPlugin()",config:{}}],ps={name:$0,description:D0,since:N0,tags:M0,events:O0,methods:L0,methodsNote:z0,config:A0,example:B0,examples:F0};function U0({ctx:e,initialOn:n,errorText:t}){const[r,i]=y.useState(n),[o,l]=y.useState(null),a=y.useRef(!1),s=async()=>{if(a.current)return;a.current=!0;const u=!r,p=r;i(u),l(null);try{await Ht(e.callbacks.remind,u)}catch(d){i(p),l(yo(d,t))}finally{a.current=!1}};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[c.jsx("button",{type:"button","data-testid":"si-remind-btn","data-on":String(r),"aria-pressed":r,onClick:()=>{s()},style:{border:`1px solid ${r?De:"#d8d8d8"}`,background:r?Yh:"#ffffff",color:r?De:pn,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:r?"已开启提醒":"签到提醒"}),o&&c.jsx("div",{role:"alert","data-testid":"si-remind-error",style:{fontSize:12,color:"#d4380d"},children:o})]})}function Zt(e={}){const{defaultOn:n=!1,errorText:t="提醒设置失败，请重试"}=e;return{name:"Remind",version:"0.1.0",description:ps.description,priority:44,enabled:!0,hooks:{renderActions:r=>c.jsx(U0,{ctx:r,initialOn:r.data.remindEnabled??n,errorText:t})}}}Zt.meta=ps;const W0={slug:"remind",title:"签到提醒 Remind",group:"plugin",intro:"操作区提醒开关：插件自身管理开关态，切换即经 callbacks.remind 下发给消费方持久化。"},H0=G(H,[Zt()]);function V0(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(H0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const G0=Object.freeze(Object.defineProperty({__proto__:null,default:V0,meta:W0},Symbol.toStringTag,{value:"Module"})),K0="InvitePlugin",Q0="邀请好友助力：触发邀请回调的按钮，操作区渲染，常用于拉新运营位。",X0="0.1.0",Y0=["invite","actions","growth"],Z0=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],J0=[],q0="只读取 context 字段（props / state / data），不调用上下文方法",ex=[{name:"text",type:"string",default:"邀请好友助力",description:"按钮文案"}],nx="withSignInPlugins(SignInCore, [createInvitePlugin()])",tx=[{name:"默认",description:"操作区展示邀请按钮",src:"createInvitePlugin()",config:{}}],gs={name:K0,description:Q0,since:X0,tags:Y0,events:Z0,methods:J0,methodsNote:q0,config:ex,example:nx,examples:tx};function Jt(e={}){const{text:n="邀请好友助力"}=e;return{name:"Invite",version:"0.1.0",description:gs.description,priority:45,enabled:!0,hooks:{renderActions:t=>c.jsx("button",{type:"button",onClick:()=>{Ht(t.callbacks.invite).catch(r=>{console.warn("[vane-sign-in] callbacks.invite 执行失败",r)})},style:{border:`1px solid ${De}`,background:"#ffffff",color:De,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:n})}}}Jt.meta=gs;const rx={slug:"invite",title:"邀请助力 Invite",group:"plugin",intro:"操作区邀请位：点击触发 callbacks.invite，常用于拉新/游戏运营位解锁额外奖励。"},ix=G(H,[Jt()]);function ox(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(ix,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const lx=Object.freeze(Object.defineProperty({__proto__:null,default:ox,meta:rx},Symbol.toStringTag,{value:"Module"})),ax="RuleExpandPlugin",sx="规则折叠展开：将活动规则折叠为可展开列表，底部区渲染；无规则时静默跳过。",ux="0.1.0",cx=["rule","footer","collapse"],dx=[{name:"renderFooter",when:"每次渲染，底部区槽位",description:"规则展开、领取记录入口"}],fx=[],px="只读取 context 字段（props / state / data），不调用上下文方法",gx=[{name:"defaultOpen",type:"boolean",default:"false",description:"初始是否展开"}],mx="withSignInPlugins(SignInCore, [createRuleExpandPlugin()])",hx=[{name:"默认",description:"底部展示可折叠的活动规则",src:"createRuleExpandPlugin()",config:{}}],ms={name:ax,description:sx,since:ux,tags:cx,events:dx,methods:fx,methodsNote:px,config:gx,example:mx,examples:hx};function yx({rules:e,initialOpen:n}){const[t,r]=y.useState(n),i=y.useId();return!e||!e.length?null:c.jsxs("div",{children:[c.jsx("button",{type:"button","data-testid":"si-rule-toggle","aria-expanded":t,"aria-controls":i,onClick:()=>r(o=>!o),style:{border:"none",background:"transparent",color:pn,fontSize:13,cursor:"pointer",padding:0},children:t?"收起活动规则 ▲":"活动规则 ▼"}),t&&c.jsx("ul",{id:i,style:{margin:"6px 0 0",paddingLeft:18,fontSize:12,color:it},children:e.map((o,l)=>c.jsx("li",{children:o},l))})]})}function qt(e={}){const{defaultOpen:n=!1}=e;return{name:"RuleExpand",version:"0.1.0",description:ms.description,priority:50,enabled:!0,hooks:{renderFooter:t=>c.jsx(yx,{rules:t.data.rules,initialOpen:n})}}}qt.meta=ms;const vx={slug:"rule-expand",title:"规则折叠 RuleExpand",group:"plugin",intro:"底部区规则折叠：data.rules 收进可展开列表，点击展开/收起，避免长文案常驻占用空间。"},Sx=G(H,[qt()]);function xx(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Sx,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const wx=Object.freeze(Object.defineProperty({__proto__:null,default:xx,meta:vx},Symbol.toStringTag,{value:"Module"})),kx="RewardHistoryPlugin",Px="领取记录：展示历史领取记录列表，底部区渲染；无记录时显示终态文案。",Cx="0.1.0",_x=["history","footer","record"],Ex=[{name:"renderFooter",when:"每次渲染，底部区槽位",description:"规则展开、领取记录入口"}],Tx=[],Rx="只读取 context 字段（props / state / data），不调用上下文方法",bx=[{name:"limit",type:"number",default:"5",description:"最多展示几条记录"}],Ix="withSignInPlugins(SignInCore, [createRewardHistoryPlugin()])",jx=[{name:"默认",description:"底部展示领取记录",src:"createRewardHistoryPlugin()",config:{}}],hs={name:kx,description:Px,since:Cx,tags:_x,events:Ex,methods:Tx,methodsNote:Rx,config:bx,example:Ix,examples:jx};function Qr(e={}){const{limit:n=5}=e;return{name:"RewardHistory",version:"0.1.0",description:hs.description,priority:51,enabled:!0,hooks:{renderFooter:t=>{const r=t.data.history??[],i=t.data.businessTimeZone;return r.length?c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:12,color:pn},children:"领取记录"}),r.slice(0,n).map(o=>c.jsxs("div",{style:{display:"flex",fontSize:12,color:it},children:[c.jsxs("span",{children:["第",o.day,"天 · ",o.label]}),c.jsx("span",{style:{marginLeft:"auto"},children:zh(o.at,i)})]},o.id))]}):c.jsx("div",{style:{fontSize:12,color:it},children:"暂无领取记录"})}}}}Qr.meta=hs;const $x={slug:"reward-history",title:"领取记录 RewardHistory",group:"plugin",intro:"底部区领取记录：data.history 按时间倒序展示，无记录显示终态文案。"},Dx=G(H,[Qr()]);function Nx(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Dx,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Mx=Object.freeze(Object.defineProperty({__proto__:null,default:Nx,meta:$x},Symbol.toStringTag,{value:"Module"})),Ox=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createStreakStatePlugin } from "vane-sign-in/custom-plugins/StreakStatePlugin";\r
import { createCalendarStripPlugin } from "vane-sign-in/custom-plugins/CalendarStripPlugin";\r
import { createRewardPreviewPlugin } from "vane-sign-in/custom-plugins/RewardPreviewPlugin";\r
import { createMakeupSlotPlugin } from "vane-sign-in/custom-plugins/MakeupSlotPlugin";\r
import { createTodayCheckInPlugin } from "vane-sign-in/custom-plugins/TodayCheckInPlugin";\r
import type { SignInData, SignInCallbacks } from "vane-sign-in";\r
import type { DemoMeta } from "./types";\r
\r
/**\r
 * 00 · 最小可用\r
 *\r
 * 内核起步：用插件装配出「连签状态 + 日历条 + 奖励预告 + 补签 + 今日签到」。\r
 * import 是「消费者视角」包名（demo/vite.config.ts 的 alias 指回 src），\r
 * 页面里展示的源码可以原样复制到真实项目。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "basic",\r
  title: "最小可用",\r
  group: "basic",\r
  intro: "内核 + 五个核心插件跑通装配链路；加插件就是往 withPlugins 数组里加一项。",\r
};\r
\r
function buildData(signedToday: boolean): SignInData {\r
  const calendar = Array.from({ length: 14 }, (_, i) => {\r
    const day = i + 1;\r
    const status: SignInData["calendar"][number]["status"] = day < 8\r
      ? "signed"\r
      : day === 8 && !signedToday\r
      ? "today"\r
      : day === 9\r
      ? "missed"\r
      : "future";\r
    return {\r
      date: \`2026-10-\${String(day).padStart(2, "0")}\`,\r
      day,\r
      status,\r
      canMakeup: day === 9,\r
    };\r
  });\r
  return {\r
    todaySigned: signedToday,\r
    streak: signedToday ? 8 : 7,\r
    maxStreak: 12,\r
    totalDays: 132,\r
    points: 3680,\r
    calendar,\r
    rewards: [\r
      { day: 1, kind: "points", value: 10, label: "10 积分", claimed: true },\r
      { day: 3, kind: "coupon", value: 5, label: "5 元券", claimed: true },\r
      { day: 7, kind: "gift", label: "7 天礼包", claimed: true },\r
      { day: 8, kind: "points", value: 50, label: "50 积分" },\r
      { day: 10, kind: "badge", label: "闪耀徽章" },\r
    ],\r
    makeup: { available: 3, used: 1, max: 3 },\r
  };\r
}\r
\r
const Enhanced = withSignInPlugins(SignInCore, [\r
  createStreakStatePlugin(),\r
  createCalendarStripPlugin(),\r
  createRewardPreviewPlugin(),\r
  createMakeupSlotPlugin(),\r
  createTodayCheckInPlugin(),\r
]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildData(signed);\r
  const callbacks: SignInCallbacks = {\r
    sign: () => setSigned(true),\r
    makeup: () => alert("触发补签"),\r
    claim: (d) => alert(\`领取第 \${d} 天奖励\`),\r
  };\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Lx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createStreakStatePlugin } from "vane-sign-in/custom-plugins/StreakStatePlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 01 · 连签状态 StreakState\r
 * 单装这一个插件：只渲染头部连签信息，演示「领域槽」如何把连签数封装成可替换的视觉块。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "streak-state",\r
  title: "连签状态 StreakState",\r
  group: "plugin",\r
  intro: "头部连签天数 + 最高连签；断签清零、累计保留的领域逻辑由内核数据驱动。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createStreakStatePlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,zx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createCalendarStripPlugin } from "vane-sign-in/custom-plugins/CalendarStripPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 02 · 日历条 CalendarStrip\r
 * 单装这一个插件：只渲染日历区，横向日期条 + 今日/漏签/补签标记。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "calendar-strip",\r
  title: "日历条 CalendarStrip",\r
  group: "plugin",\r
  intro: "横向日期条；已签/今日/漏签/补签/未来五态由 DayStatus 着色，各平台运营位通用。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createCalendarStripPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Ax=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createRewardPreviewPlugin } from "vane-sign-in/custom-plugins/RewardPreviewPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 03 · 奖励预告 RewardPreview\r
 * 单装这一个插件：只渲染奖励区，预告未来逐日奖励，已领标记置灰。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "reward-preview",\r
  title: "奖励预告 RewardPreview",\r
  group: "plugin",\r
  intro: "逐日奖励预览：已领取置灰打勾，未到天数半透明，临近大额奖励高亮。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createRewardPreviewPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Bx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createMakeupSlotPlugin } from "vane-sign-in/custom-plugins/MakeupSlotPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 04 · 补签位 MakeupSlot\r
 * 单装这一个插件：只渲染操作区补签入口，展示剩余补签卡与一键补签。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "makeup-slot",\r
  title: "补签位 MakeupSlot",\r
  group: "plugin",\r
  intro: "断签缺口处的高亮补签入口：剩余补签卡数 + 一键补回当日奖励，走 callbacks.makeup。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createMakeupSlotPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Fx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createTodayCheckInPlugin } from "vane-sign-in/custom-plugins/TodayCheckInPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 05 · 今日签到 TodayCheckIn\r
 * 单装这一个插件：只渲染操作区主 CTA，点击置今日已签。\r
 * 用开关演示「未签 → 已签」两态切换（真实项目里由 callbacks.sign 落库后回灌数据）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "today-check-in",\r
  title: "今日签到 TodayCheckIn",\r
  group: "plugin",\r
  intro: "操作区主按钮：未签时高亮的「立即签到」，已签后变为连签天数 + 明日预告。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createTodayCheckInPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Ux=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createPointsBalancePlugin } from "vane-sign-in/custom-plugins/PointsBalancePlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 06 · 积分余额 PointsBalance\r
 * 单装这一个插件：头部区展示当前积分，点按可跳积分明细（演示 callbacks 之外的纯展示）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "points-balance",\r
  title: "积分余额 PointsBalance",\r
  group: "plugin",\r
  intro: "头部积分余额：大字号展示当前积分 + 累计天数，承接积分商城的入口视觉。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createPointsBalancePlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Wx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createStatRowPlugin } from "vane-sign-in/custom-plugins/StatRowPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 07 · 统计行 StatRow\r
 * 单装这一个插件：头部区横排关键指标（连签/累计/最高）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "stat-row",\r
  title: "统计行 StatRow",\r
  group: "plugin",\r
  intro: "头部三项指标横排：当前连签、累计天数、历史最高连签，一屏尽览进度。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createStatRowPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Hx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createLevelBadgePlugin } from "vane-sign-in/custom-plugins/LevelBadgePlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 08 · 等级徽章 LevelBadge\r
 * 单装这一个插件：头部区会员等级 + 升级进度条（读 data.level）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "level-badge",\r
  title: "等级徽章 LevelBadge",\r
  group: "plugin",\r
  intro: "头部会员徽章：等级名 + 距下一级进度条，读 data.level 渲染。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createLevelBadgePlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Vx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createCountdownPlugin } from "vane-sign-in/custom-plugins/CountdownPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 09 · 次签倒计时 Countdown\r
 * 单装这一个插件：头部区展示距下次可签到的剩余时间（读 data.nextResetAt）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "countdown",\r
  title: "次签倒计时 Countdown",\r
  group: "plugin",\r
  intro: "头部倒计时：读 data.nextResetAt 计算剩余小时/分钟，已过期则提示「现在可签到」。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createCountdownPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Gx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createCalendarGridPlugin } from "vane-sign-in/custom-plugins/CalendarGridPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 10 · 月历网格 CalendarGrid\r
 * 单装这一个插件：日历区 7 列网格，完整呈现当月签到全景。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "calendar-grid",\r
  title: "月历网格 CalendarGrid",\r
  group: "plugin",\r
  intro: "七列月历网格：已签/今日/漏签/补签/奖励日五态着色，适合大运营位全景展示。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createCalendarGridPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Kx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createRewardClaimPlugin } from "vane-sign-in/custom-plugins/RewardClaimPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 11 · 奖励领取 RewardClaim\r
 * 单装这一个插件：奖励区对「已达天数且未领」的奖励给出领取按钮（走 callbacks.claim）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "reward-claim",\r
  title: "奖励领取 RewardClaim",\r
  group: "plugin",\r
  intro: "奖励区领取：扫描 rewards，对 day<=streak 且未领的奖励给出「领取」按钮，走 callbacks.claim。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createRewardClaimPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Qx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createMilestonePlugin } from "vane-sign-in/custom-plugins/MilestonePlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 12 · 里程碑 Milestone\r
 * 单装这一个插件：奖励区展示距下一未达奖励的进度，与 RewardPreview 互补。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "milestone",\r
  title: "里程碑 Milestone",\r
  group: "plugin",\r
  intro: "奖励区里程碑：找到下一未达奖励，展示「再连签 N 天」+ 进度条；全达成显示庆祝终态。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createMilestonePlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Xx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createSharePlugin } from "vane-sign-in/custom-plugins/SharePlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 13 · 分享成就 Share\r
 * 单装这一个插件：操作区分享按钮，触发 callbacks.share（消费方决定分享渠道）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "share",\r
  title: "分享成就 Share",\r
  group: "plugin",\r
  intro: "操作区社交扩散位：点击触发 callbacks.share，海报/链接/卡片由消费方实现。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createSharePlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Yx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createRemindPlugin } from "vane-sign-in/custom-plugins/RemindPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 14 · 签到提醒 Remind\r
 * 单装这一个插件：操作区开关，本地维护开/关态并下发 callbacks.remind。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "remind",\r
  title: "签到提醒 Remind",\r
  group: "plugin",\r
  intro: "操作区提醒开关：插件自身管理开关态，切换即经 callbacks.remind 下发给消费方持久化。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createRemindPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Zx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createInvitePlugin } from "vane-sign-in/custom-plugins/InvitePlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 15 · 邀请助力 Invite\r
 * 单装这一个插件：操作区邀请按钮，触发 callbacks.invite（拉新/游戏运营位常用）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "invite",\r
  title: "邀请助力 Invite",\r
  group: "plugin",\r
  intro: "操作区邀请位：点击触发 callbacks.invite，常用于拉新/游戏运营位解锁额外奖励。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createInvitePlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Jx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createRuleExpandPlugin } from "vane-sign-in/custom-plugins/RuleExpandPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 16 · 规则折叠 RuleExpand\r
 * 单装这一个插件：底部区把 data.rules 折叠为可展开列表，长规则不常驻。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "rule-expand",\r
  title: "规则折叠 RuleExpand",\r
  group: "plugin",\r
  intro: "底部区规则折叠：data.rules 收进可展开列表，点击展开/收起，避免长文案常驻占用空间。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createRuleExpandPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,qx=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createRewardHistoryPlugin } from "vane-sign-in/custom-plugins/RewardHistoryPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 17 · 领取记录 RewardHistory\r
 * 单装这一个插件：底部区按时间倒序展示 data.history（读 data.history）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "reward-history",\r
  title: "领取记录 RewardHistory",\r
  group: "plugin",\r
  intro: "底部区领取记录：data.history 按时间倒序展示，无记录显示终态文案。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createRewardHistoryPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,e1=Object.assign({"./00-basic.tsx":ov,"./01-streak-state.tsx":uv,"./02-calendar-strip.tsx":pv,"./03-reward-preview.tsx":yv,"./04-makeup-slot.tsx":wv,"./05-today-check-in.tsx":_v,"./06-points-balance.tsx":Av,"./07-stat-row.tsx":qv,"./08-level-badge.tsx":pS,"./09-countdown.tsx":RS,"./10-calendar-grid.tsx":US,"./11-reward-claim.tsx":r0,"./12-milestone.tsx":y0,"./13-share.tsx":j0,"./14-remind.tsx":G0,"./15-invite.tsx":lx,"./16-rule-expand.tsx":wx,"./17-reward-history.tsx":Mx}),n1=Object.assign({"./00-basic.tsx":Ox,"./01-streak-state.tsx":Lx,"./02-calendar-strip.tsx":zx,"./03-reward-preview.tsx":Ax,"./04-makeup-slot.tsx":Bx,"./05-today-check-in.tsx":Fx,"./06-points-balance.tsx":Ux,"./07-stat-row.tsx":Wx,"./08-level-badge.tsx":Hx,"./09-countdown.tsx":Vx,"./10-calendar-grid.tsx":Gx,"./11-reward-claim.tsx":Kx,"./12-milestone.tsx":Qx,"./13-share.tsx":Xx,"./14-remind.tsx":Yx,"./15-invite.tsx":Zx,"./16-rule-expand.tsx":Jx,"./17-reward-history.tsx":qx}),t1=e=>e.replace(/^\.\//,""),Gl=Object.entries(e1).map(([e,n])=>{const t=t1(e);return{meta:n.meta,Stage:n.default,file:t,source:n1[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),r1=Array.from(new Set(Gl.map(e=>e.meta.group))),Tf={basic:{label:"基础用法"},advanced:{label:"进阶用法"},plugin:{label:"插件示例"}},i1="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",o1="true|false|null|undefined|this|super",l1="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",Uu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${i1})\b`,String.raw`\b(${o1})\b`,String.raw`\b(${l1})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),Wu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function a1(e){const n=[];let t=0;Uu.lastIndex=0;let r;for(;r=Uu.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const i=Wu.findIndex((o,l)=>r[l+1]!==void 0);n.push({text:r[0],cls:i>=0?Wu[i]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function Hu(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function s1({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[i,o]=y.useState("idle"),[l,a]=y.useState(!1),s=y.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&s.length>t,p=u&&!l?s.slice(0,t).join(`
`):e,d=y.useMemo(()=>a1(p),[p]),h=y.useCallback(async()=>{var S;let v=!1;if((S=navigator.clipboard)!=null&&S.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=Hu(e)}else v=Hu(e);o(v?"ok":"fail"),window.setTimeout(()=>o("idle"),1600)},[e]);return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-head",children:[c.jsx("span",{children:n}),c.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[c.jsxs("span",{children:[s.length," 行"]}),c.jsx("button",{type:"button",className:`code-copy${i==="ok"?" is-ok":i==="fail"?" is-fail":""}`,onClick:h,children:i==="ok"?"已复制":i==="fail"?"复制失败":"复制"})]})]}),c.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:c.jsx("code",{children:d.map((v,S)=>v.cls?c.jsx("span",{className:v.cls,children:v.text},S):c.jsx(Wr.Fragment,{children:v.text},S))})}),u?c.jsx("button",{type:"button",className:"code-more",onClick:()=>a(v=>!v),children:l?"收起":`展开余下 ${s.length-t} 行`}):null]})}function Rf(e){return e.props??e.config??[]}function u1({doc:e}){var i,o,l;const n=Rf(e),t=e.events??[],r=e.methods??[];return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"属性 Props"}),n.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"属性"}),c.jsx("th",{children:"类型"}),c.jsx("th",{children:"默认"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:n.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.type})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.default??"-"})}),c.jsx("td",{children:a.description??"—"})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"事件 Events"}),t.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"事件"}),c.jsx("th",{children:"触发时机"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:t.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:a.when}),c.jsx("td",{children:a.description})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"方法 Methods"}),r.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"方法"}),c.jsx("th",{children:"签名"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:r.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.signature})}),c.jsx("td",{children:a.description})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),c.jsxs("div",{className:"doc-cols",children:[(i=e.features)!=null&&i.length?c.jsxs("div",{children:[c.jsx("h5",{children:"能做"}),c.jsx("ul",{children:e.features.map(a=>c.jsx("li",{children:a},a))})]}):null,(o=e.useCases)!=null&&o.length?c.jsxs("div",{children:[c.jsx("h5",{children:"适合"}),c.jsx("ul",{children:e.useCases.map(a=>c.jsx("li",{children:a},a))})]}):null,(l=e.notes)!=null&&l.length?c.jsxs("div",{children:[c.jsx("h5",{children:"注意"}),c.jsx("ul",{children:e.notes.map(a=>c.jsx("li",{children:a},a))})]}):null]})]})}function c1({factory:e,priority:n,summary:t,doc:r,defaultOpen:i=!0}){var l,a;const o={props:Rf(r).length,events:((l=r.events)==null?void 0:l.length)??0,methods:((a=r.methods)==null?void 0:a.length)??0};return c.jsxs("details",{className:"api-plug",open:i,children:[c.jsxs("summary",{children:[c.jsx("code",{children:e}),c.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),c.jsx("span",{className:"api-plug-desc",children:t}),c.jsxs("span",{className:"api-plug-n",children:[o.props," 属性 · ",o.events," 事件 · ",o.methods," 方法"]})]}),c.jsx("div",{className:"api-plug-body",children:c.jsx(u1,{doc:r})})]})}const d1=/create[A-Z]\w*Plugin/g;function f1(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function bf(e){return e.dir?`create${e.dir}`:f1(e.factory)}function p1(e){return new Set(e.match(d1)??[])}function g1(e,n){const t=p1(e);return n.filter(r=>t.has(bf(r))).sort((r,i)=>r.priority-i.priority)}function m1({source:e,plugins:n,heading:t="本页用到的插件"}){const r=y.useMemo(()=>g1(e,n),[e,n]);return r.length===0?null:c.jsxs("section",{className:"api-sec",children:[c.jsxs("div",{className:"api-sec-head",children:[c.jsxs("h2",{className:"api-sec-title",children:[t," · ",r.length," 个"]}),c.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",c.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(i=>c.jsx(c1,{factory:bf(i),priority:i.priority,summary:i.summary??i.doc.description??"",doc:i.doc},i.factory))]})}const h1=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { DAY_COLORS, DAY_GLYPH, DAY_STATUS_TEXT } from "../tokens";

export interface CalendarGridConfig {
  /** 每周列数，默认 7 */
  columns?: number;
}

/**
 * CalendarGridPlugin - 月历网格（日历区）。
 * 与 CalendarStrip 同一份 calendar 数据，但用 7 列网格形态呈现，
 * 更适合展示整月/整轮签到进度。状态配色复用家族 tokens。
 */
export function createCalendarGridPlugin<T = any>(
  config: CalendarGridConfig = {}
): SignInPlugin<T> {
  const { columns = 7 } = config;
  return {
    name: "CalendarGrid",
    version: "0.1.0",
    description: doc.description,
    priority: 21,
    enabled: true,
    hooks: {
      renderCalendar: (ctx: SignInPluginContext<T>) => {
        const cells = ctx.data.calendar ?? [];
        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
              gap: 6,
            }}
          >
            {cells.map((c) => {
              const s = DAY_COLORS[c.status] ?? DAY_COLORS.future;
              const statusText = DAY_STATUS_TEXT[c.status] ?? c.status;
              return (
                <div
                  key={c.date}
                  role="img"
                  aria-label={\`\${c.date} \${statusText}\`}
                  title={\`\${c.date} \${statusText}\`}
                  style={{
                    height: 44,
                    borderRadius: 8,
                    background: s.bg,
                    color: s.fg,
                    border: \`1px solid \${s.border}\`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: 10, color: s.fg }}>{c.day}天</span>
                  <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.1 }}>
                    {DAY_GLYPH[c.status] || c.day}
                  </span>
                </div>
              );
            })}
          </div>
        );
      },
    },
  };
}

createCalendarGridPlugin.meta = doc as PluginDoc;
`,y1=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
  DayCell,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import {
  DAY_COLORS,
  DAY_GLYPH,
  DAY_STATUS_TEXT,
  GOLD,
} from "../tokens";

export interface CalendarStripConfig {
  /** 是否高亮带奖励的格 */
  showRewardDot?: boolean;
}

/**
 * CalendarStripPlugin - 日历条（日历区）。
 * 横向滚动的逐日格：已签 / 今日 / 漏签 / 未来 / 奖励五态，带奖励的格右上角金点。
 * 配色统一从 tokens 取（旧实现在本文件内自带一份色板，已与 CalendarGrid 漂移）。
 */
export function createCalendarStripPlugin<T = any>(
  config: CalendarStripConfig = {}
): SignInPlugin<T> {
  const { showRewardDot = true } = config;

  return {
    name: "CalendarStrip",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    enabled: true,
    hooks: {
      renderCalendar: (ctx: SignInPluginContext<T>) => {
        const cells: DayCell[] = ctx.data.calendar ?? [];
        return (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
            }}
          >
            {cells.map((c) => {
              const s = DAY_COLORS[c.status] ?? DAY_COLORS.future;
              const hasReward = !!(c.reward && !c.reward.claimed);
              const statusText = DAY_STATUS_TEXT[c.status] ?? c.status;
              return (
                <div
                  key={c.date}
                  role="img"
                  aria-label={\`\${c.date} \${statusText}\`}
                  title={\`\${c.date} \${statusText}\`}
                  style={{
                    flex: "0 0 auto",
                    width: 42,
                    height: 54,
                    borderRadius: 8,
                    background: s.bg,
                    color: s.fg,
                    border: \`1px solid \${s.border}\`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <span style={{ fontSize: 11, color: s.fg }}>第{c.day}天</span>
                  <span style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.1 }}>
                    {DAY_GLYPH[c.status] || c.day}
                  </span>
                  {showRewardDot && hasReward && (
                    <span
                      style={{
                        position: "absolute",
                        top: 4,
                        right: 4,
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: GOLD,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        );
      },
    },
  };
}

createCalendarStripPlugin.meta = doc as PluginDoc;
`,v1=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { GREEN, TEXT_3 } from "../tokens";
import { useSignInNow } from "../../components/SignInPlugin/plugins/clock";

export type CountdownConfig = Record<string, never>;

interface CountdownTextProps {
  nextResetAt: number;
  todaySigned: boolean;
}

/**
 * 倒计时文案（消费 Core 时钟，保证每秒 tick；旧实现只在渲染那一帧读 Date.now()）。
 * 长周期换算成「n天m小时」，不再出现「168小时0分」。
 */
function CountdownText({ nextResetAt, todaySigned }: CountdownTextProps) {
  const now = useSignInNow();
  const diff = nextResetAt - now;
  if (diff <= 0) {
    return <div style={{ fontSize: 12, color: GREEN }}>现在可签到</div>;
  }
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3.6e6);
  const minutes = Math.floor((diff % 3.6e6) / 6e4);
  const remaining = days > 0 ? \`\${days}天\${hours}小时\` : \`\${hours}小时\${minutes}分\`;
  return (
    <div style={{ fontSize: 12, color: TEXT_3 }}>
      {todaySigned ? \`距下次可签到 \${remaining}\` : "今日可签到"}
    </div>
  );
}

/**
 * CountdownPlugin - 次签倒计时（头部区）。
 * 依据 data.nextResetAt（绝对 epoch 毫秒）计算距下次可签到的剩余时间；
 * 已过期显示「现在可签到」。\`now\` 由 SignInCore 的时钟下发给消费者，每秒自动刷新。
 */
export function createCountdownPlugin<T = any>(
  _config: CountdownConfig = {}
): SignInPlugin<T> {
  return {
    name: "Countdown",
    version: "0.1.0",
    description: doc.description,
    priority: 14,
    enabled: true,
    hooks: {
      renderHeader: (ctx: SignInPluginContext<T>) => {
        const { nextResetAt, todaySigned } = ctx.data;
        if (!nextResetAt) return null;
        return (
          <CountdownText
            nextResetAt={nextResetAt}
            todaySigned={todaySigned}
          />
        );
      },
    },
  };
}

createCountdownPlugin.meta = doc as PluginDoc;
`,S1=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT } from "../tokens";
import { invokeCallback } from "../../utils/callback";

export interface InviteConfig {
  /** 自定义按钮文案 */
  text?: string;
}

/**
 * InvitePlugin - 邀请好友助力（操作区）。
 * 触发 ctx.callbacks.invite()，常用于游戏/拉新运营位，邀请好友助力解锁额外奖励。
 */
export function createInvitePlugin<T = any>(
  config: InviteConfig = {}
): SignInPlugin<T> {
  const { text = "邀请好友助力" } = config;
  return {
    name: "Invite",
    version: "0.1.0",
    description: doc.description,
    priority: 45,
    enabled: true,
    hooks: {
      renderActions: (ctx: SignInPluginContext<T>) => {
        return (
          <button
            type="button"
            onClick={() => {
              // 包内兜住同步抛错 / Promise reject，避免 unhandled rejection
              void invokeCallback(ctx.callbacks.invite).catch((error) => {
                console.warn("[vane-sign-in] callbacks.invite 执行失败", error);
              });
            }}
            style={{
              border: \`1px solid \${ACCENT}\`,
              background: "#ffffff",
              color: ACCENT,
              borderRadius: 18,
              padding: "6px 14px",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            {text}
          </button>
        );
      },
    },
  };
}

createInvitePlugin.meta = doc as PluginDoc;
`,x1=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT, DISABLED_BG, TEXT_3 } from "../tokens";

export type LevelBadgeConfig = Record<string, never>;

/**
 * LevelBadgePlugin - 会员等级徽标（头部区）。
 * 展示当前会员等级名 + 进度条 + 当前/下一阶阈值（data.level）。
 * 无等级数据时静默返回 null，不影响其它头部插件。
 */
export function createLevelBadgePlugin<T = any>(
  _config: LevelBadgeConfig = {}
): SignInPlugin<T> {
  return {
    name: "LevelBadge",
    version: "0.1.0",
    description: doc.description,
    priority: 13,
    enabled: true,
    hooks: {
      renderHeader: (ctx: SignInPluginContext<T>) => {
        const level = ctx.data.level;
        if (!level) return null;
        const pct = Math.round(
          Math.min(1, Math.max(0, level.progress)) * 100
        );
        return (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#ffffff",
                background: ACCENT,
                borderRadius: 10,
                padding: "2px 8px",
                whiteSpace: "nowrap",
              }}
            >
              {level.name}
            </span>
            <div
              style={{
                flex: 1,
                height: 6,
                borderRadius: 3,
                background: DISABLED_BG,
                overflow: "hidden",
              }}
            >
              <div
                style={{ width: \`\${pct}%\`, height: "100%", background: ACCENT }}
              />
            </div>
            <span style={{ fontSize: 11, color: TEXT_3, whiteSpace: "nowrap" }}>
              {level.current}/{level.next}
            </span>
          </div>
        );
      },
    },
  };
}

createLevelBadgePlugin.meta = doc as PluginDoc;
`,w1=`import type React from "react";
import { useMemo, useRef, useState } from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
  DayCell,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { useSignInNow } from "../../components/SignInPlugin/plugins/clock";
import { invokeCallback, resolveErrorMessage } from "../../utils/callback";
import { compareDayKeys, isDayKey, toDayKey } from "../../utils/date";
import { DISABLED_BG, DISABLED_FG, ACCENT } from "../tokens";

export interface MakeupSlotConfig {
  /** 自定义按钮文案（仅在「有目标且还有配额」时使用） */
  buttonText?: string;
  /** 配额耗尽时的文案 */
  exhaustedText?: string;
  /** 无可补签目标（配额还在）时的文案 */
  noTargetText?: string;
  /** 回调失败时的兜底文案（错误对象自带 message 时优先用 message） */
  errorText?: string;
}

interface MakeupTarget {
  cell: DayCell;
  remaining: number;
  disabled: boolean;
  exhausted: boolean;
  label: string;
}

/**
 * 选补签目标：只看「不晚于业务日的 canMakeup 格」，按日期升序取最早一天。
 * 旧实现用 \`find(canMakeup)\`，结果取决于服务端数组顺序，甚至会把未来日期补掉。
 */
function pickMakeupTarget(
  ctx: SignInPluginContext<any>,
  now: number,
  buttonText: string | undefined,
  exhaustedText: string,
  noTargetText: string
): MakeupTarget {
  const { makeup, calendar, todayKey: businessTodayKey, businessTimeZone } =
    ctx.data;
  const today = businessTodayKey ?? toDayKey(now, businessTimeZone);
  const cell = (calendar ?? [])
    .filter(
      (item) =>
        item.canMakeup === true &&
        isDayKey(item.date) &&
        compareDayKeys(item.date, today) <= 0
    )
    .sort((a, b) => compareDayKeys(a.date, b.date))[0];

  const remaining = makeup.available - makeup.used;
  const exhausted = remaining <= 0;
  const disabled = exhausted || !cell;
  const label = exhausted
    ? exhaustedText
    : cell
    ? buttonText ?? \`补签 · 剩\${remaining}次\`
    : noTargetText;

  return { cell, remaining, disabled, exhausted, label };
}

interface MakeupButtonProps {
  ctx: SignInPluginContext<any>;
  target: MakeupTarget;
  errorText: string;
}

/** 补签按钮（有内部态）：在途锁 + 失败回滚，成功以消费方数据回写为准。 */
function MakeupButton({ ctx, target, errorText }: MakeupButtonProps) {
  const pendingRef = useRef(false);
  const [pending, setPending] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleMakeup = async () => {
    const cell = target.cell;
    if (!cell || target.disabled || pendingRef.current) return;
    pendingRef.current = true;
    setPending(true);
    setLocalError(null);
    try {
      await invokeCallback(ctx.callbacks.makeup, cell.date, { day: cell.day });
    } catch (error) {
      setLocalError(resolveErrorMessage(error, errorText));
    } finally {
      pendingRef.current = false;
      setPending(false);
    }
  };

  const disabled = target.disabled || pending;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 4,
      }}
    >
      <button
        type="button"
        data-testid="si-makeup-btn"
        data-disabled={String(disabled)}
        data-target={target.cell?.date}
        data-pending={String(pending)}
        aria-busy={pending || undefined}
        disabled={disabled}
        onClick={() => {
          void handleMakeup();
        }}
        style={{
          border: disabled ? "1px solid #d8d8d8" : \`1px solid \${ACCENT}\`,
          background: disabled ? DISABLED_BG : "#fff",
          color: disabled ? DISABLED_FG : ACCENT,
          borderRadius: 18,
          padding: "6px 14px",
          fontSize: 13,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        {pending ? "补签中…" : target.label}
      </button>
      {localError && (
        <div
          role="alert"
          data-testid="si-makeup-error"
          style={{ fontSize: 12, color: "#d4380d" }}
        >
          {localError}
        </div>
      )}
    </div>
  );
}

/**
 * MakeupSlotPlugin - 补签位（操作区）。
 * 选「不晚于业务日、日期最早」的可补签格；配额耗尽 / 无可补目标分别提示，
 * 不再把两种状态混成「补签次数已用完」。
 */
export function createMakeupSlotPlugin<T = any>(
  config: MakeupSlotConfig = {}
): SignInPlugin<T> {
  const {
    buttonText,
    exhaustedText = "补签次数已用完",
    noTargetText = "暂无可补签",
    errorText = "补签失败，请重试",
  } = config;

  return {
    name: "MakeupSlot",
    version: "0.1.0",
    description: doc.description,
    priority: 42,
    enabled: true,
    hooks: {
      renderActions: (ctx: SignInPluginContext<T>) => (
        <MakeupSlot
          ctx={ctx}
          buttonText={buttonText}
          exhaustedText={exhaustedText}
          noTargetText={noTargetText}
          errorText={errorText}
        />
      ),
    },
  };
}

interface MakeupSlotProps {
  ctx: SignInPluginContext<any>;
  buttonText?: string;
  exhaustedText: string;
  noTargetText: string;
  errorText: string;
}

/** 目标筛选需要 \`now\`（业务日），放在子组件里才能拿到 Core 时钟。 */
function MakeupSlot({
  ctx,
  buttonText,
  exhaustedText,
  noTargetText,
  errorText,
}: MakeupSlotProps) {
  const now = useSignInNow();
  const target = useMemo(
    () => pickMakeupTarget(ctx, now, buttonText, exhaustedText, noTargetText),
    [ctx, now, buttonText, exhaustedText, noTargetText]
  );
  return <MakeupButton ctx={ctx} target={target} errorText={errorText} />;
}

createMakeupSlotPlugin.meta = doc as PluginDoc;
`,k1=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT, DISABLED_BG, GOLD, TEXT_2, TEXT_3 } from "../tokens";

export type MilestoneConfig = Record<string, never>;

/**
 * MilestonePlugin - 里程碑进度（奖励区）。
 * 找到「下一未达奖励」（data.rewards 中 day>streak 的最小值），展示距其还差几天 +
 * 进度条；全部达成则显示庆祝终态。与 RewardPreview 互补：一个看未来清单，一个看里程碑。
 */
export function createMilestonePlugin<T = any>(
  _config: MilestoneConfig = {}
): SignInPlugin<T> {
  return {
    name: "Milestone",
    version: "0.1.0",
    description: doc.description,
    priority: 32,
    enabled: true,
    hooks: {
      renderRewards: (ctx: SignInPluginContext<T>) => {
        const { rewards, streak } = ctx.data;
        const next = (rewards ?? [])
          .filter((r) => r.day > streak)
          .sort((a, b) => a.day - b.day)[0];
        if (!next) {
          return (
            <div style={{ fontSize: 12, color: TEXT_3 }}>已达成全部奖励 🎉</div>
          );
        }
        const left = next.day - streak;
        const pct = Math.round(((next.day - left) / next.day) * 100);
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 12, color: TEXT_2 }}>
              再连签 <b style={{ color: ACCENT }}>{left}</b> 天解锁 {next.label}
            </div>
            <div
              style={{
                height: 6,
                borderRadius: 3,
                background: DISABLED_BG,
                overflow: "hidden",
              }}
            >
              <div
                style={{ width: \`\${pct}%\`, height: "100%", background: GOLD }}
              />
            </div>
          </div>
        );
      },
    },
  };
}

createMilestonePlugin.meta = doc as PluginDoc;
`,P1=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT, TEXT_2 } from "../tokens";

export type PointsBalanceConfig = Record<string, never>;

/**
 * PointsBalancePlugin - 累计积分（头部区）。
 * 展示当前累计积分总额（data.points），与连签数并排作为头部资产概览。
 */
export function createPointsBalancePlugin<T = any>(
  _config: PointsBalanceConfig = {}
): SignInPlugin<T> {
  return {
    name: "PointsBalance",
    version: "0.1.0",
    description: doc.description,
    priority: 11,
    enabled: true,
    hooks: {
      renderHeader: (ctx: SignInPluginContext<T>) => {
        const { points } = ctx.data;
        return (
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontSize: 13, color: TEXT_2 }}>积分</span>
            <span
              style={{ fontSize: 20, fontWeight: 800, color: ACCENT, lineHeight: 1 }}
            >
              {points}
            </span>
          </div>
        );
      },
    },
  };
}

createPointsBalancePlugin.meta = doc as PluginDoc;
`,C1=`import type React from "react";
import { useRef, useState } from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT, ACCENT_SOFT, TEXT_2 } from "../tokens";
import { invokeCallback, resolveErrorMessage } from "../../utils/callback";

export interface RemindConfig {
  /** 初始是否开启提醒（\`data.remindEnabled\` 存在时以数据为准） */
  defaultOn?: boolean;
  /** 持久化失败时的兜底文案（错误对象自带 message 时优先用 message） */
  errorText?: string;
}

interface RemindButtonProps {
  ctx: SignInPluginContext<any>;
  initialOn: boolean;
  errorText: string;
}

/**
 * 提醒开关（有内部态，必须是独立组件）。
 *
 * 旧实现「先乐观切换、返回值丢弃」：持久化失败后 UI 永久停在「已开启」。
 * 这里保持乐观切换（开关手感需要即时反馈），但失败时回滚到原状态并给出可见错误。
 */
function RemindButton({ ctx, initialOn, errorText }: RemindButtonProps) {
  const [on, setOn] = useState(initialOn);
  const [error, setError] = useState<string | null>(null);
  const pendingRef = useRef(false);

  const handleToggle = async () => {
    if (pendingRef.current) return;
    pendingRef.current = true;
    const next = !on;
    const previous = on;
    setOn(next);
    setError(null);
    try {
      await invokeCallback(ctx.callbacks.remind, next);
    } catch (err) {
      setOn(previous);
      setError(resolveErrorMessage(err, errorText));
    } finally {
      pendingRef.current = false;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 4,
      }}
    >
      <button
        type="button"
        data-testid="si-remind-btn"
        data-on={String(on)}
        aria-pressed={on}
        onClick={() => {
          void handleToggle();
        }}
        style={{
          border: \`1px solid \${on ? ACCENT : "#d8d8d8"}\`,
          background: on ? ACCENT_SOFT : "#ffffff",
          color: on ? ACCENT : TEXT_2,
          borderRadius: 18,
          padding: "6px 14px",
          fontSize: 13,
          cursor: "pointer",
        }}
      >
        {on ? "已开启提醒" : "签到提醒"}
      </button>
      {error && (
        <div
          role="alert"
          data-testid="si-remind-error"
          style={{ fontSize: 12, color: "#d4380d" }}
        >
          {error}
        </div>
      )}
    </div>
  );
}

/**
 * RemindPlugin - 签到提醒开关（操作区）。
 * 本地维护开关态，切换即经 ctx.callbacks.remind(enabled) 下发给消费方持久化；
 * 失败时回滚并展示错误（不再静默停在「已开启」）。
 */
export function createRemindPlugin<T = any>(
  config: RemindConfig = {}
): SignInPlugin<T> {
  const { defaultOn = false, errorText = "提醒设置失败，请重试" } = config;
  return {
    name: "Remind",
    version: "0.1.0",
    description: doc.description,
    priority: 44,
    enabled: true,
    hooks: {
      renderActions: (ctx: SignInPluginContext<T>) => (
        <RemindButton
          ctx={ctx}
          initialOn={ctx.data.remindEnabled ?? defaultOn}
          errorText={errorText}
        />
      ),
    },
  };
}

createRemindPlugin.meta = doc as PluginDoc;
`,_1=`import type React from "react";
import { useRef, useState } from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
  RewardInfo,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT, TEXT_3 } from "../tokens";
import { invokeCallback, resolveErrorMessage } from "../../utils/callback";

export interface RewardClaimConfig {
  /** 请求在途时的按钮文案 */
  pendingText?: string;
  /** 回调失败时的兜底文案（错误对象自带 message 时优先用 message） */
  errorText?: string;
}

interface ClaimButtonProps {
  ctx: SignInPluginContext<any>;
  target: RewardInfo;
  pendingText: string;
  errorText: string;
}

/**
 * 领取按钮（有内部态，必须是独立组件）。
 * 与签到 CTA 同款在途锁：pending 期间禁用，失败回滚并展示错误，
 * 成功以消费方回写的 \`reward.claimed\` 为准（不做乐观已领）。
 */
function ClaimButton({ ctx, target, pendingText, errorText }: ClaimButtonProps) {
  const pendingRef = useRef(false);
  const [pending, setPending] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleClaim = async () => {
    if (pendingRef.current) return;
    pendingRef.current = true;
    setPending(true);
    setLocalError(null);
    try {
      await invokeCallback(ctx.callbacks.claim, target.day);
    } catch (error) {
      setLocalError(resolveErrorMessage(error, errorText));
    } finally {
      pendingRef.current = false;
      setPending(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 4,
      }}
    >
      <button
        type="button"
        data-testid="si-claim-btn"
        data-day={String(target.day)}
        data-pending={String(pending)}
        aria-busy={pending || undefined}
        disabled={pending}
        onClick={() => {
          void handleClaim();
        }}
        style={{
          border: "none",
          background: ACCENT,
          color: "#ffffff",
          borderRadius: 18,
          padding: "6px 16px",
          fontSize: 13,
          fontWeight: 700,
          cursor: pending ? "not-allowed" : "pointer",
        }}
      >
        {pending
          ? pendingText
          : \`领取第\${target.day}天奖励 · \${target.label}\`}
      </button>
      {localError && (
        <div
          role="alert"
          data-testid="si-claim-error"
          style={{ fontSize: 12, color: "#d4380d" }}
        >
          {localError}
        </div>
      )}
    </div>
  );
}

/**
 * RewardClaimPlugin - 当日奖励领取（奖励区）。
 * 找到「已达天数可领但尚未领取」的第一个奖励（data.rewards 中 day<=streak 且 !claimed），
 * 提供领取按钮；点按经 ctx.callbacks.claim(day) 下发。无待领时显示终态文案。
 */
export function createRewardClaimPlugin<T = any>(
  config: RewardClaimConfig = {}
): SignInPlugin<T> {
  const { pendingText = "领取中…", errorText = "领取失败，请重试" } = config;

  return {
    name: "RewardClaim",
    version: "0.1.0",
    description: doc.description,
    priority: 31,
    enabled: true,
    hooks: {
      renderRewards: (ctx: SignInPluginContext<T>) => {
        const { rewards, streak } = ctx.data;
        // 服务端可能乱序：按 day 升序取最靠前的一个待领奖励，避免「先领大奖」
        const target: RewardInfo | undefined = [...(rewards ?? [])]
          .filter((r) => r.day <= streak && !r.claimed)
          .sort((a, b) => a.day - b.day)[0];
        if (!target) {
          return (
            <div style={{ fontSize: 12, color: TEXT_3 }}>
              今日奖励已全部领取
            </div>
          );
        }
        return (
          <ClaimButton
            ctx={ctx}
            target={target}
            pendingText={pendingText}
            errorText={errorText}
          />
        );
      },
    },
  };
}

createRewardClaimPlugin.meta = doc as PluginDoc;
`,E1=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { TEXT_2, TEXT_3 } from "../tokens";
import { formatDayKey } from "../../utils/date";

export interface RewardHistoryConfig {
  /** 最多展示几条，默认 5 */
  limit?: number;
}

/**
 * RewardHistoryPlugin - 领取记录（底部区）。
 * 展示 data.history（领取记录），按时间倒序取前 limit 条；无记录显示终态文案。
 */
export function createRewardHistoryPlugin<T = any>(
  config: RewardHistoryConfig = {}
): SignInPlugin<T> {
  const { limit = 5 } = config;
  return {
    name: "RewardHistory",
    version: "0.1.0",
    description: doc.description,
    priority: 51,
    enabled: true,
    hooks: {
      renderFooter: (ctx: SignInPluginContext<T>) => {
        const history = ctx.data.history ?? [];
        const timeZone = ctx.data.businessTimeZone;
        if (!history.length) {
          return (
            <div style={{ fontSize: 12, color: TEXT_3 }}>暂无领取记录</div>
          );
        }
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 12, color: TEXT_2 }}>领取记录</div>
            {history.slice(0, limit).map((h) => (
              <div
                key={h.id}
                style={{
                  display: "flex",
                  fontSize: 12,
                  color: TEXT_3,
                }}
              >
                <span>
                  第{h.day}天 · {h.label}
                </span>
                <span style={{ marginLeft: "auto" }}>
                  {/* 用业务日键而非 toLocaleDateString：SSR/浏览器时区不同也不会差一天 */}
                  {formatDayKey(h.at, timeZone)}
                </span>
              </div>
            ))}
          </div>
        );
      },
    },
  };
}

createRewardHistoryPlugin.meta = doc as PluginDoc;
`,T1=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
  RewardInfo,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface RewardPreviewConfig {
  /** 最多展示几条奖励预告，默认 5 */
  limit?: number;
}

/**
 * RewardPreviewPlugin - 奖励预告（奖励区）。
 * 从当前连签天数起，逐日展示后续可领奖励（积分 / 券 / 礼包 / 徽章）。
 * 已领取的奖励标记「已领」终态，不覆盖未领取。
 */
export function createRewardPreviewPlugin<T = any>(
  config: RewardPreviewConfig = {}
): SignInPlugin<T> {
  const { limit = 5 } = config;

  return {
    name: "RewardPreview",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    enabled: true,
    hooks: {
      renderRewards: (ctx: SignInPluginContext<T>) => {
        // 服务端乱序时预告也要按 day 升序：先排序再截断，避免「第 30 天大奖」被挤出列表
        const rewards: RewardInfo[] = [...(ctx.data.rewards ?? [])]
          .filter((r) => r.day >= ctx.data.streak)
          .sort((a, b) => a.day - b.day);
        if (!rewards.length) return null;
        return (
          <div
            style={{
              background: "#fafbfc",
              border: "1px solid #eef0f2",
              borderRadius: 10,
              padding: "10px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {rewards.slice(0, limit).map((r) => (
              <div
                key={r.day}
                style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}
              >
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    flex: "0 0 auto",
                    background: "#fff8e1",
                    color: "#9a6a00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {r.day}
                </span>
                <span style={{ color: "#1f2328" }}>{r.label}</span>
                {r.claimed && (
                  <span style={{ marginLeft: "auto", color: "#0f8a4a", fontSize: 12 }}>
                    已领 ✓
                  </span>
                )}
              </div>
            ))}
          </div>
        );
      },
    },
  };
}

createRewardPreviewPlugin.meta = doc as PluginDoc;
`,R1=`import type React from "react";
import { useId, useState } from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { TEXT_2, TEXT_3 } from "../tokens";

export interface RuleExpandConfig {
  /** 初始是否展开 */
  defaultOpen?: boolean;
}

function RuleBlock({
  rules,
  initialOpen,
}: {
  rules?: string[];
  initialOpen: boolean;
}) {
  const [open, setOpen] = useState(initialOpen);
  const panelId = useId();
  if (!rules || !rules.length) return null;
  return (
    <div>
      <button
        type="button"
        data-testid="si-rule-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        style={{
          border: "none",
          background: "transparent",
          color: TEXT_2,
          fontSize: 13,
          cursor: "pointer",
          padding: 0,
        }}
      >
        {open ? "收起活动规则 ▲" : "活动规则 ▼"}
      </button>
      {open && (
        <ul
          id={panelId}
          style={{
            margin: "6px 0 0",
            paddingLeft: 18,
            fontSize: 12,
            color: TEXT_3,
          }}
        >
          {rules.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * RuleExpandPlugin - 规则折叠展开（底部区）。
 * 将 data.rules 折叠为可展开列表，避免长规则文案常驻占用空间。
 * 无 rules 数据时静默返回 null。
 */
export function createRuleExpandPlugin<T = any>(
  config: RuleExpandConfig = {}
): SignInPlugin<T> {
  const { defaultOpen = false } = config;
  return {
    name: "RuleExpand",
    version: "0.1.0",
    description: doc.description,
    priority: 50,
    enabled: true,
    hooks: {
      renderFooter: (ctx: SignInPluginContext<T>) => (
        <RuleBlock rules={ctx.data.rules} initialOpen={defaultOpen} />
      ),
    },
  };
}

createRuleExpandPlugin.meta = doc as PluginDoc;
`,b1=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { TEXT_2 } from "../tokens";
import { invokeCallback } from "../../utils/callback";

export interface ShareConfig {
  /** 自定义按钮文案 */
  text?: string;
}

/**
 * SharePlugin - 分享成就（操作区）。
 * 触发 ctx.callbacks.share()，由消费方决定分享渠道（海报 / 链接 / 卡片）。
 * 纯无状态按钮，归属各平台运营位的社交扩散位。
 */
export function createSharePlugin<T = any>(
  config: ShareConfig = {}
): SignInPlugin<T> {
  const { text = "分享成就" } = config;
  return {
    name: "Share",
    version: "0.1.0",
    description: doc.description,
    priority: 43,
    enabled: true,
    hooks: {
      renderActions: (ctx: SignInPluginContext<T>) => {
        return (
          <button
            type="button"
            onClick={() => {
              // 包内兜住同步抛错 / Promise reject，避免 unhandled rejection
              void invokeCallback(ctx.callbacks.share).catch((error) => {
                console.warn("[vane-sign-in] callbacks.share 执行失败", error);
              });
            }}
            style={{
              border: "1px solid #d8d8d8",
              background: "#ffffff",
              color: TEXT_2,
              borderRadius: 18,
              padding: "6px 14px",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            {text}
          </button>
        );
      },
    },
  };
}

createSharePlugin.meta = doc as PluginDoc;
`,I1=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT, TEXT, TEXT_2 } from "../tokens";

export type StatRowConfig = Record<string, never>;

/**
 * StatRowPlugin - 数据行（头部区）。
 * 一行展示「累计天数 / 累计积分」两项汇总指标，作为头部资产概览的补充行。
 */
export function createStatRowPlugin<T = any>(
  _config: StatRowConfig = {}
): SignInPlugin<T> {
  return {
    name: "StatRow",
    version: "0.1.0",
    description: doc.description,
    priority: 12,
    enabled: true,
    hooks: {
      renderHeader: (ctx: SignInPluginContext<T>) => {
        const { totalDays, points } = ctx.data;
        return (
          <div style={{ display: "flex", gap: 18, fontSize: 12, color: TEXT_2 }}>
            <span>
              累计 <b style={{ color: TEXT, fontSize: 14 }}>{totalDays}</b> 天
            </span>
            <span>
              累计 <b style={{ color: ACCENT, fontSize: 14 }}>{points}</b> 分
            </span>
          </div>
        );
      },
    },
  };
}

createStatRowPlugin.meta = doc as PluginDoc;
`,j1=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import { ACCENT, TEXT_2, BORDER } from "../tokens";
import doc from "./doc.json";

export interface StreakStateConfig {
  /** 是否展示历史最高连签天数 */
  showMax?: boolean;
}

/**
 * StreakStatePlugin - 连签状态（头部区）。
 * 展示当前连签天数与历史最高连签；可关掉最高天数只留当前连签。
 */
export function createStreakStatePlugin<T = any>(
  config: StreakStateConfig = {}
): SignInPlugin<T> {
  const { showMax = true } = config;

  return {
    name: "StreakState",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    enabled: true,
    hooks: {
      renderHeader: (ctx: SignInPluginContext<T>) => {
        const { streak, maxStreak } = ctx.data;
        return (
          <div
            data-testid="si-streak"
            style={{ display: "flex", alignItems: "baseline", gap: 8 }}
          >
            <span
              style={{
                fontSize: 34,
                fontWeight: 800,
                color: ACCENT,
                lineHeight: 1,
                letterSpacing: "-0.5px",
              }}
            >
              {streak}
            </span>
            <span style={{ fontSize: 13, color: TEXT_2, fontWeight: 600 }}>
              天连签
            </span>
            {showMax && (
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 12,
                  color: TEXT_2,
                  background: "#faf7f4",
                  border: \`1px solid \${BORDER}\`,
                  borderRadius: 999,
                  padding: "3px 10px",
                  whiteSpace: "nowrap",
                }}
              >
                最高 {maxStreak} 天
              </span>
            )}
          </div>
        );
      },
    },
  };
}

createStreakStatePlugin.meta = doc as PluginDoc;
`,$1=`import type React from "react";
import { useMemo, useRef, useState } from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { useSignInNow } from "../../components/SignInPlugin/plugins/clock";
import { invokeCallback, resolveErrorMessage } from "../../utils/callback";
import { toDayKey } from "../../utils/date";

export interface TodayCheckInConfig {
  /** 已签到时的按钮文案 */
  signedText?: string;
  /** 未签到时的按钮文案 */
  unsignedText?: string;
  /** 请求在途（尚未返回）时的按钮文案 */
  pendingText?: string;
  /** 回调失败时的兜底文案（错误对象自带 message 时优先用 message） */
  errorText?: string;
}

interface CheckInButtonProps {
  ctx: SignInPluginContext<any>;
  signedText: string;
  unsignedText: string;
  pendingText: string;
  errorText: string;
}

/**
 * 签到按钮（有内部态，必须是独立组件）。
 *
 * 修掉的两个真实缺陷：
 *  - P0：\`disabled={todaySigned}\` 只等宿主回写数据，网络往返窗口内可被无限次点击。
 *    这里点击后立即置 pending + 使用 ref 同帧去重，失败时回滚 pending 并展示错误；
 *    pending 期间按钮禁用，成功仍以消费方 \`data.todaySigned\` 为准（不做乐观已签）。
 *  - P1-3：页面跨夜不自动复位。用 Core 时钟的 \`now\` 与 \`nextResetAt\` / \`todayKey\`
 *    比对，跨过业务日后旧 \`todaySigned\` 视为过期，按钮自动恢复可点。
 */
function CheckInButton({
  ctx,
  signedText,
  unsignedText,
  pendingText,
  errorText,
}: CheckInButtonProps) {
  const now = useSignInNow();
  const {
    todaySigned,
    nextResetAt,
    todayKey: businessTodayKey,
    businessTimeZone,
    lastError,
  } = ctx.data;

  const pendingRef = useRef(false);
  const [pending, setPending] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const staleSigned = useMemo(() => {
    if (!todaySigned) return false;
    // nextResetAt 是绝对 epoch：跨过即视为新的一天
    if (nextResetAt !== undefined && now >= nextResetAt) return true;
    // 兜底：宿主给了业务日键时，按业务时区逐日比较（不混用 toLocaleDateString / UTC 日切线）
    if (businessTodayKey) {
      return toDayKey(now, businessTimeZone) !== businessTodayKey;
    }
    return false;
  }, [todaySigned, nextResetAt, businessTodayKey, businessTimeZone, now]);

  const signed = todaySigned && !staleSigned;
  const errorMessage = localError ?? lastError?.message ?? null;

  const handleSign = async () => {
    if (signed || pendingRef.current) return;
    pendingRef.current = true;
    setPending(true);
    setLocalError(null);
    try {
      await invokeCallback(ctx.callbacks.sign);
    } catch (error) {
      setLocalError(resolveErrorMessage(error, errorText));
    } finally {
      pendingRef.current = false;
      setPending(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 4,
      }}
    >
      <button
        type="button"
        data-testid="si-checkin-btn"
        data-signed={String(signed)}
        data-pending={String(pending)}
        aria-busy={pending || undefined}
        disabled={signed || pending}
        onClick={() => {
          void handleSign();
        }}
        style={{
          border: "none",
          background: signed ? "#f2f3f5" : "#cf4407",
          color: signed ? "#8a8a8a" : "#ffffff",
          borderRadius: 20,
          padding: "8px 20px",
          fontSize: 14,
          fontWeight: 700,
          cursor: signed || pending ? "not-allowed" : "pointer",
        }}
      >
        {pending ? pendingText : signed ? signedText : unsignedText}
      </button>
      {errorMessage && (
        <div
          role="alert"
          data-testid="si-checkin-error"
          style={{ fontSize: 12, color: "#d4380d" }}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
}

/**
 * TodayCheckInPlugin - 今日签到（操作区，主 CTA）。
 * todaySigned 驱动禁用态：已签 → 置灰「今日已签」，未签 → 高亮「立即签到」。
 * 点击经 ctx.callbacks.sign 下发，状态真相在消费方数据。
 */
export function createTodayCheckInPlugin<T = any>(
  config: TodayCheckInConfig = {}
): SignInPlugin<T> {
  const {
    signedText = "今日已签 ✓",
    unsignedText = "立即签到",
    pendingText = "签到中…",
    errorText = "签到失败，请重试",
  } = config;

  return {
    name: "TodayCheckIn",
    version: "0.1.0",
    description: doc.description,
    priority: 40,
    enabled: true,
    hooks: {
      renderActions: (ctx: SignInPluginContext<T>) => (
        <CheckInButton
          ctx={ctx}
          signedText={signedText}
          unsignedText={unsignedText}
          pendingText={pendingText}
          errorText={errorText}
        />
      ),
    },
  };
}

createTodayCheckInPlugin.meta = doc as PluginDoc;
`,Pw={header:"头部区 · header",calendar:"日历区 · calendar",rewards:"奖励区 · rewards",actions:"操作区 · actions",footer:"底部区 · footer"},Vu=["header","calendar","rewards","actions","footer"],Gu=Object.assign({"/src/custom-plugins/CalendarGridPlugin/doc.json":us,"/src/custom-plugins/CalendarStripPlugin/doc.json":ns,"/src/custom-plugins/CountdownPlugin/doc.json":ss,"/src/custom-plugins/InvitePlugin/doc.json":gs,"/src/custom-plugins/LevelBadgePlugin/doc.json":as,"/src/custom-plugins/MakeupSlotPlugin/doc.json":rs,"/src/custom-plugins/MilestonePlugin/doc.json":ds,"/src/custom-plugins/PointsBalancePlugin/doc.json":os,"/src/custom-plugins/RemindPlugin/doc.json":ps,"/src/custom-plugins/RewardClaimPlugin/doc.json":cs,"/src/custom-plugins/RewardHistoryPlugin/doc.json":hs,"/src/custom-plugins/RewardPreviewPlugin/doc.json":ts,"/src/custom-plugins/RuleExpandPlugin/doc.json":ms,"/src/custom-plugins/SharePlugin/doc.json":fs,"/src/custom-plugins/StatRowPlugin/doc.json":ls,"/src/custom-plugins/StreakStatePlugin/doc.json":es,"/src/custom-plugins/TodayCheckInPlugin/doc.json":is}),Ku=Object.assign({"/src/custom-plugins/CalendarGridPlugin/create.tsx":h1,"/src/custom-plugins/CalendarStripPlugin/create.tsx":y1,"/src/custom-plugins/CountdownPlugin/create.tsx":v1,"/src/custom-plugins/InvitePlugin/create.tsx":S1,"/src/custom-plugins/LevelBadgePlugin/create.tsx":x1,"/src/custom-plugins/MakeupSlotPlugin/create.tsx":w1,"/src/custom-plugins/MilestonePlugin/create.tsx":k1,"/src/custom-plugins/PointsBalancePlugin/create.tsx":P1,"/src/custom-plugins/RemindPlugin/create.tsx":C1,"/src/custom-plugins/RewardClaimPlugin/create.tsx":_1,"/src/custom-plugins/RewardHistoryPlugin/create.tsx":E1,"/src/custom-plugins/RewardPreviewPlugin/create.tsx":T1,"/src/custom-plugins/RuleExpandPlugin/create.tsx":R1,"/src/custom-plugins/SharePlugin/create.tsx":b1,"/src/custom-plugins/StatRowPlugin/create.tsx":I1,"/src/custom-plugins/StreakStatePlugin/create.tsx":j1,"/src/custom-plugins/TodayCheckInPlugin/create.tsx":$1}),If=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function D1(e){const n=Object.keys(Ku).find(i=>If(i)===e),t=n?Ku[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function N1(e){const n=Object.keys(Gu).find(t=>If(t)===e);return n?Gu[n]:{name:e,description:"（缺少 doc.json）"}}const M1=[{dir:"StreakStatePlugin",group:"header",make:()=>Bn()},{dir:"PointsBalancePlugin",group:"header",make:()=>Vt()},{dir:"StatRowPlugin",group:"header",make:()=>Gt()},{dir:"LevelBadgePlugin",group:"header",make:()=>ct()},{dir:"CountdownPlugin",group:"header",make:()=>Kt()},{dir:"CalendarStripPlugin",group:"calendar",make:()=>st({showRewardDot:!0})},{dir:"CalendarGridPlugin",group:"calendar",make:()=>Qt()},{dir:"MakeupSlotPlugin",group:"calendar",make:()=>ut()},{dir:"RewardPreviewPlugin",group:"rewards",make:()=>Fn({limit:5})},{dir:"RewardClaimPlugin",group:"rewards",make:()=>dt()},{dir:"MilestonePlugin",group:"rewards",make:()=>Xt()},{dir:"TodayCheckInPlugin",group:"actions",make:()=>Un()},{dir:"SharePlugin",group:"actions",make:()=>Yt()},{dir:"RemindPlugin",group:"actions",make:()=>Zt()},{dir:"InvitePlugin",group:"actions",make:()=>Jt()},{dir:"RuleExpandPlugin",group:"footer",make:()=>qt({defaultOpen:!0})},{dir:"RewardHistoryPlugin",group:"footer",make:()=>Qr()}],Kl=M1.map(e=>{const n=N1(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:D1(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>Vu.indexOf(e.group)-Vu.indexOf(n.group)||n.priority-e.priority),Cw=["StreakStatePlugin","LevelBadgePlugin","CalendarStripPlugin","RewardPreviewPlugin","MilestonePlugin","TodayCheckInPlugin","MakeupSlotPlugin","SharePlugin","RuleExpandPlugin","RewardHistoryPlugin"];function O1({entry:e,order:n}){var a;const{meta:t,Stage:r,source:i,file:o}=e,l=String(n).padStart(2,"0");return c.jsxs("article",{children:[c.jsx("header",{className:"page-head",children:c.jsxs("div",{children:[c.jsxs("p",{className:"eyebrow",children:[l," · ",((a=Tf[t.group])==null?void 0:a.label)??t.group]}),c.jsx("h1",{className:"page-title",children:t.title})]})}),t.intro?c.jsx("p",{className:"page-sub",children:t.intro}):null,c.jsx("section",{className:"demo-stage",children:c.jsx(r,{})}),c.jsxs("section",{className:"demo-src-wrap",children:[c.jsxs("div",{className:"demo-src-head",children:[c.jsxs("span",{className:"demo-src-title",children:["源码 · ",o]}),c.jsx("span",{className:"demo-src-hint",children:"下面这份就是上面正在跑的那份 · 已高亮"})]}),c.jsx(s1,{code:i,title:o,collapseAfter:28,maxHeight:460})]}),c.jsx(m1,{source:i,plugins:Kl})]})}const L1={id:"ecommerce",title:"电商签到运营位",group:"运营位",ref:{label:"电商 App · 签到弹层",url:"https://vane.dev/examples/sign-in/ecommerce"},pain:"一个按钮的签到太单薄，用户不知道连签能拿什么；把碎插件拼成一张完整运营位卡。",plugs:[{fn:"createStreakStatePlugin",why:"头部连签天数 + 最高连签，给连续打卡的用户正反馈"},{fn:"createCalendarStripPlugin",cfg:"showRewardDot: true",why:"14 天连签条，今天/已签/漏签一眼看清，带奖励的格打点"},{fn:"createRewardPreviewPlugin",why:"逐日奖励预告，把『再签 1 天得 50 积分』前置"},{fn:"createTodayCheckInPlugin",why:"主 CTA：今日签到 / 已签切换"},{fn:"createMakeupSlotPlugin",why:"漏签用户给补签入口，挽回流失"}],props:["data={data}","callbacks={callbacks}"],note:"五个原子插件，组合后就是一张可直接上线的大促签到卡。"},z1=G(H,[Bn(),st({showRewardDot:!0}),Fn(),Un(),ut()]);function A1(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(z1,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const B1=Object.freeze(Object.defineProperty({__proto__:null,default:A1,meta:L1},Symbol.toStringTag,{value:"Module"})),F1={id:"game-streak",title:"游戏连签激励",group:"激励",ref:{label:"游戏 · 每日任务",url:"https://vane.dev/examples/sign-in/game-streak"},pain:"游戏侧要的是成长曲线与紧迫感，单插件撑不起；用 6 个插件拼出『每日任务』面板。",plugs:[{fn:"createStreakStatePlugin",why:"连签天数 + 最高连签，冲榜动机"},{fn:"createCalendarGridPlugin",why:"月历网格，看整月进度"},{fn:"createMilestonePlugin",why:"里程碑节点（如 7/30 天）给阶段目标"},{fn:"createLevelBadgePlugin",why:"会员等级徽章，成长感"},{fn:"createRewardClaimPlugin",why:"达标奖励一键领取"},{fn:"createCountdownPlugin",why:"距下次刷新倒计时，制造紧迫"}],props:["data={data}","callbacks={callbacks}"],note:"倒计时依赖数据里的 nextResetAt，样本数据已带该字段。"},U1=G(H,[Bn(),Qt(),Xt(),ct(),dt(),Kt()]);function W1(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(U1,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const H1=Object.freeze(Object.defineProperty({__proto__:null,default:W1,meta:F1},Symbol.toStringTag,{value:"Module"})),V1={id:"membership",title:"会员积分中心",group:"账户",ref:{label:"会员中心",url:"https://vane.dev/examples/sign-in/membership"},pain:"会员中心重在资产与规则透明；碎插件组合成账户视图。",plugs:[{fn:"createPointsBalancePlugin",why:"积分余额醒目展示"},{fn:"createStatRowPlugin",why:"累计天数 / 连签 / 补签次数一横排"},{fn:"createLevelBadgePlugin",why:"当前等级与进度"},{fn:"createRewardPreviewPlugin",why:"积分可兑奖励预告"},{fn:"createRuleExpandPlugin",cfg:"defaultOpen: true",why:"积分规则可折叠展开"}],props:["data={data}","callbacks={callbacks}"],note:"sampleData 已带 level / rules 字段，等级与规则插件直接能渲染。"},G1=G(H,[Vt(),Gt(),ct(),Fn(),qt({defaultOpen:!0})]);function K1(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(G1,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const Q1=Object.freeze(Object.defineProperty({__proto__:null,default:K1,meta:V1},Symbol.toStringTag,{value:"Module"})),X1={id:"social-viral",title:"社交分享裂变",group:"裂变",ref:{label:"社交裂变",url:"https://vane.dev/examples/sign-in/social-viral"},pain:"裂变链路是『签到→分享→邀请→提醒』，单插件无法表达流程；按顺序拼成一张裂变卡。",plugs:[{fn:"createTodayCheckInPlugin",why:"先完成今日签到这一动作"},{fn:"createSharePlugin",cfg:'text: "晒今日签到"',why:"分享得额外奖励的入口"},{fn:"createInvitePlugin",why:"邀请好友，裂变拉新"},{fn:"createRemindPlugin",why:"开启每日提醒，提升留存"},{fn:"createRewardClaimPlugin",why:"分享 / 邀请带来的奖励领取"}],props:["data={data}","callbacks={callbacks}"],note:"share / invite / remind 走各自 callbacks，组合后即一条裂变漏斗。"},Y1=G(H,[Un(),Yt({text:"晒今日签到"}),Jt(),Zt(),dt()]);function Z1(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Y1,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const J1=Object.freeze(Object.defineProperty({__proto__:null,default:Z1,meta:X1},Symbol.toStringTag,{value:"Module"})),q1={id:"full-stack",title:"全功能中台 · 17 插件全量",group:"全集",ref:{label:"组件能力全集",url:"https://vane.dev/examples/sign-in/full"},pain:"想一次性看全部 17 个插件怎么共存——全量装配的压力测试。",plugs:[{fn:"createStreakStatePlugin",why:"头部连签状态"},{fn:"createPointsBalancePlugin",why:"积分余额"},{fn:"createStatRowPlugin",why:"统计横排"},{fn:"createLevelBadgePlugin",why:"等级徽章"},{fn:"createCountdownPlugin",why:"刷新倒计时"},{fn:"createCalendarStripPlugin",why:"连签条"},{fn:"createCalendarGridPlugin",why:"月历网格"},{fn:"createMakeupSlotPlugin",why:"补签入口"},{fn:"createRewardPreviewPlugin",why:"奖励预告"},{fn:"createRewardClaimPlugin",why:"奖励领取"},{fn:"createMilestonePlugin",why:"里程碑"},{fn:"createTodayCheckInPlugin",why:"今日签到 CTA"},{fn:"createSharePlugin",why:"分享"},{fn:"createRemindPlugin",why:"提醒"},{fn:"createInvitePlugin",why:"邀请"},{fn:"createRuleExpandPlugin",why:"规则展开"},{fn:"createRewardHistoryPlugin",why:"领取记录"}],props:["data={data}","callbacks={callbacks}"],note:"五个槽位（header/calendar/rewards/actions/footer）同时承载多个插件，靠 priority 决定共存顺序。"},ew=G(H,[Bn(),Vt(),Gt(),ct(),Kt(),st({showRewardDot:!0}),Qt(),ut(),Fn(),dt(),Xt(),Un(),Yt(),Zt(),Jt(),qt({defaultOpen:!0}),Qr()]);function nw(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(ew,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const tw=Object.freeze(Object.defineProperty({__proto__:null,default:nw,meta:q1},Symbol.toStringTag,{value:"Module"})),rw=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import {\r
  createStreakStatePlugin,\r
  createCalendarStripPlugin,\r
  createRewardPreviewPlugin,\r
  createTodayCheckInPlugin,\r
  createMakeupSlotPlugin,\r
} from "vane-sign-in/custom-plugins";\r
import type { ScenarioMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "../demos/lib/sampleData";\r
\r
/**\r
 * 01 · 电商签到运营位\r
 *\r
 * 把「连签状态 / 日历条 / 奖励预告 / 今日签到 / 补签」五个原子插件拼成一张运营位卡。\r
 * 单个插件都只解决一件事，但组合后就是电商 App 里最常见的「每日签到弹层」。\r
 */\r
export const meta: ScenarioMeta = {\r
  id: "ecommerce",\r
  title: "电商签到运营位",\r
  group: "运营位",\r
  ref: { label: "电商 App · 签到弹层", url: "https://vane.dev/examples/sign-in/ecommerce" },\r
  pain: "一个按钮的签到太单薄，用户不知道连签能拿什么；把碎插件拼成一张完整运营位卡。",\r
  plugs: [\r
    { fn: "createStreakStatePlugin", why: "头部连签天数 + 最高连签，给连续打卡的用户正反馈" },\r
    {\r
      fn: "createCalendarStripPlugin",\r
      cfg: "showRewardDot: true",\r
      why: "14 天连签条，今天/已签/漏签一眼看清，带奖励的格打点",\r
    },\r
    { fn: "createRewardPreviewPlugin", why: "逐日奖励预告，把『再签 1 天得 50 积分』前置" },\r
    { fn: "createTodayCheckInPlugin", why: "主 CTA：今日签到 / 已签切换" },\r
    { fn: "createMakeupSlotPlugin", why: "漏签用户给补签入口，挽回流失" },\r
  ],\r
  props: ["data={data}", "callbacks={callbacks}"],\r
  note: "五个原子插件，组合后就是一张可直接上线的大促签到卡。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [\r
  createStreakStatePlugin(),\r
  createCalendarStripPlugin({ showRewardDot: true }),\r
  createRewardPreviewPlugin(),\r
  createTodayCheckInPlugin(),\r
  createMakeupSlotPlugin(),\r
]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,iw=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import {\r
  createStreakStatePlugin,\r
  createCalendarGridPlugin,\r
  createMilestonePlugin,\r
  createLevelBadgePlugin,\r
  createRewardClaimPlugin,\r
  createCountdownPlugin,\r
} from "vane-sign-in/custom-plugins";\r
import type { ScenarioMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "../demos/lib/sampleData";\r
\r
/**\r
 * 02 · 游戏连签激励\r
 *\r
 * 游戏侧要的是「成长曲线 + 紧迫感」。连签天数、月历网格、里程碑、等级徽章、\r
 * 奖励领取、下次刷新倒计时六个插件拼成一张「每日任务」面板。\r
 */\r
export const meta: ScenarioMeta = {\r
  id: "game-streak",\r
  title: "游戏连签激励",\r
  group: "激励",\r
  ref: { label: "游戏 · 每日任务", url: "https://vane.dev/examples/sign-in/game-streak" },\r
  pain: "游戏侧要的是成长曲线与紧迫感，单插件撑不起；用 6 个插件拼出『每日任务』面板。",\r
  plugs: [\r
    { fn: "createStreakStatePlugin", why: "连签天数 + 最高连签，冲榜动机" },\r
    { fn: "createCalendarGridPlugin", why: "月历网格，看整月进度" },\r
    { fn: "createMilestonePlugin", why: "里程碑节点（如 7/30 天）给阶段目标" },\r
    { fn: "createLevelBadgePlugin", why: "会员等级徽章，成长感" },\r
    { fn: "createRewardClaimPlugin", why: "达标奖励一键领取" },\r
    { fn: "createCountdownPlugin", why: "距下次刷新倒计时，制造紧迫" },\r
  ],\r
  props: ["data={data}", "callbacks={callbacks}"],\r
  note: "倒计时依赖数据里的 nextResetAt，样本数据已带该字段。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [\r
  createStreakStatePlugin(),\r
  createCalendarGridPlugin(),\r
  createMilestonePlugin(),\r
  createLevelBadgePlugin(),\r
  createRewardClaimPlugin(),\r
  createCountdownPlugin(),\r
]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,ow=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import {\r
  createPointsBalancePlugin,\r
  createStatRowPlugin,\r
  createLevelBadgePlugin,\r
  createRewardPreviewPlugin,\r
  createRuleExpandPlugin,\r
} from "vane-sign-in/custom-plugins";\r
import type { ScenarioMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "../demos/lib/sampleData";\r
\r
/**\r
 * 03 · 会员积分中心\r
 *\r
 * 会员中心重在「资产 + 规则透明」。积分余额、统计横排、等级徽章、积分奖励预告、\r
 * 规则折叠五个插件组合成账户视图。\r
 */\r
export const meta: ScenarioMeta = {\r
  id: "membership",\r
  title: "会员积分中心",\r
  group: "账户",\r
  ref: { label: "会员中心", url: "https://vane.dev/examples/sign-in/membership" },\r
  pain: "会员中心重在资产与规则透明；碎插件组合成账户视图。",\r
  plugs: [\r
    { fn: "createPointsBalancePlugin", why: "积分余额醒目展示" },\r
    { fn: "createStatRowPlugin", why: "累计天数 / 连签 / 补签次数一横排" },\r
    { fn: "createLevelBadgePlugin", why: "当前等级与进度" },\r
    { fn: "createRewardPreviewPlugin", why: "积分可兑奖励预告" },\r
    { fn: "createRuleExpandPlugin", cfg: "defaultOpen: true", why: "积分规则可折叠展开" },\r
  ],\r
  props: ["data={data}", "callbacks={callbacks}"],\r
  note: "sampleData 已带 level / rules 字段，等级与规则插件直接能渲染。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [\r
  createPointsBalancePlugin(),\r
  createStatRowPlugin(),\r
  createLevelBadgePlugin(),\r
  createRewardPreviewPlugin(),\r
  createRuleExpandPlugin({ defaultOpen: true }),\r
]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,lw=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import {\r
  createTodayCheckInPlugin,\r
  createSharePlugin,\r
  createInvitePlugin,\r
  createRemindPlugin,\r
  createRewardClaimPlugin,\r
} from "vane-sign-in/custom-plugins";\r
import type { ScenarioMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "../demos/lib/sampleData";\r
\r
/**\r
 * 04 · 社交分享裂变\r
 *\r
 * 裂变链路是「签到 → 分享 → 邀请 → 提醒」。TodayCheckIn 先完成动作，Share 晒单、\r
 * Invite 拉新、Remind 留存、RewardClaim 领取裂变奖励 —— 单插件无法表达流程，\r
 * 按顺序拼成一张裂变卡。\r
 */\r
export const meta: ScenarioMeta = {\r
  id: "social-viral",\r
  title: "社交分享裂变",\r
  group: "裂变",\r
  ref: { label: "社交裂变", url: "https://vane.dev/examples/sign-in/social-viral" },\r
  pain: "裂变链路是『签到→分享→邀请→提醒』，单插件无法表达流程；按顺序拼成一张裂变卡。",\r
  plugs: [\r
    { fn: "createTodayCheckInPlugin", why: "先完成今日签到这一动作" },\r
    { fn: "createSharePlugin", cfg: 'text: "晒今日签到"', why: "分享得额外奖励的入口" },\r
    { fn: "createInvitePlugin", why: "邀请好友，裂变拉新" },\r
    { fn: "createRemindPlugin", why: "开启每日提醒，提升留存" },\r
    { fn: "createRewardClaimPlugin", why: "分享 / 邀请带来的奖励领取" },\r
  ],\r
  props: ["data={data}", "callbacks={callbacks}"],\r
  note: "share / invite / remind 走各自 callbacks，组合后即一条裂变漏斗。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [\r
  createTodayCheckInPlugin(),\r
  createSharePlugin({ text: "晒今日签到" }),\r
  createInvitePlugin(),\r
  createRemindPlugin(),\r
  createRewardClaimPlugin(),\r
]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,aw=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import {\r
  createStreakStatePlugin,\r
  createPointsBalancePlugin,\r
  createStatRowPlugin,\r
  createLevelBadgePlugin,\r
  createCountdownPlugin,\r
  createCalendarStripPlugin,\r
  createCalendarGridPlugin,\r
  createMakeupSlotPlugin,\r
  createRewardPreviewPlugin,\r
  createRewardClaimPlugin,\r
  createMilestonePlugin,\r
  createTodayCheckInPlugin,\r
  createSharePlugin,\r
  createRemindPlugin,\r
  createInvitePlugin,\r
  createRuleExpandPlugin,\r
  createRewardHistoryPlugin,\r
} from "vane-sign-in/custom-plugins";\r
import type { ScenarioMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "../demos/lib/sampleData";\r
\r
/**\r
 * 05 · 全功能中台（17 插件全量）\r
 *\r
 * 一次性把 17 个插件全量装配，展示完整能力边界，也是组合冲突 / 槽位共存的压力测试。\r
 */\r
export const meta: ScenarioMeta = {\r
  id: "full-stack",\r
  title: "全功能中台 · 17 插件全量",\r
  group: "全集",\r
  ref: { label: "组件能力全集", url: "https://vane.dev/examples/sign-in/full" },\r
  pain: "想一次性看全部 17 个插件怎么共存——全量装配的压力测试。",\r
  plugs: [\r
    { fn: "createStreakStatePlugin", why: "头部连签状态" },\r
    { fn: "createPointsBalancePlugin", why: "积分余额" },\r
    { fn: "createStatRowPlugin", why: "统计横排" },\r
    { fn: "createLevelBadgePlugin", why: "等级徽章" },\r
    { fn: "createCountdownPlugin", why: "刷新倒计时" },\r
    { fn: "createCalendarStripPlugin", why: "连签条" },\r
    { fn: "createCalendarGridPlugin", why: "月历网格" },\r
    { fn: "createMakeupSlotPlugin", why: "补签入口" },\r
    { fn: "createRewardPreviewPlugin", why: "奖励预告" },\r
    { fn: "createRewardClaimPlugin", why: "奖励领取" },\r
    { fn: "createMilestonePlugin", why: "里程碑" },\r
    { fn: "createTodayCheckInPlugin", why: "今日签到 CTA" },\r
    { fn: "createSharePlugin", why: "分享" },\r
    { fn: "createRemindPlugin", why: "提醒" },\r
    { fn: "createInvitePlugin", why: "邀请" },\r
    { fn: "createRuleExpandPlugin", why: "规则展开" },\r
    { fn: "createRewardHistoryPlugin", why: "领取记录" },\r
  ],\r
  props: ["data={data}", "callbacks={callbacks}"],\r
  note: "五个槽位（header/calendar/rewards/actions/footer）同时承载多个插件，靠 priority 决定共存顺序。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [\r
  createStreakStatePlugin(),\r
  createPointsBalancePlugin(),\r
  createStatRowPlugin(),\r
  createLevelBadgePlugin(),\r
  createCountdownPlugin(),\r
  createCalendarStripPlugin({ showRewardDot: true }),\r
  createCalendarGridPlugin(),\r
  createMakeupSlotPlugin(),\r
  createRewardPreviewPlugin(),\r
  createRewardClaimPlugin(),\r
  createMilestonePlugin(),\r
  createTodayCheckInPlugin(),\r
  createSharePlugin(),\r
  createRemindPlugin(),\r
  createInvitePlugin(),\r
  createRuleExpandPlugin({ defaultOpen: true }),\r
  createRewardHistoryPlugin(),\r
]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,sw=Object.assign({"./01-ecommerce.tsx":B1,"./02-game-streak.tsx":H1,"./03-membership.tsx":Q1,"./04-social-viral.tsx":J1,"./05-full-stack.tsx":tw}),uw=Object.assign({"./01-ecommerce.tsx":rw,"./02-game-streak.tsx":iw,"./03-membership.tsx":ow,"./04-social-viral.tsx":lw,"./05-full-stack.tsx":aw}),cw=e=>e.replace(/^\.\//,""),Ji=Object.entries(sw).map(([e,n])=>{const t=cw(e);return{meta:n.meta,Component:n.default,file:t,source:uw[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),_w=Ji.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),Ew=Array.from(new Set(Ji.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort(),dw=y.lazy(()=>Qa(()=>import("./HomePage-CJejO38z.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),fw=y.lazy(()=>Qa(()=>import("./PluginsPage-DLGAByoZ.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),pw=y.lazy(()=>Qa(()=>import("./ScenariosPage-LfYSDEaO.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),gw={pkg:"vane-sign-in",brand:"S",subtitle:"每日签到 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Kl.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Ji.length} plates`}],routes:[{path:"/",element:c.jsx(dw,{})},{path:"/plugins",element:c.jsx(fw,{})},{path:"/scenarios",element:c.jsx(pw,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:r1.map(e=>({key:e,label:Tf[e].label})),entries:Gl,detail:(e,n)=>c.jsx(O1,{entry:e,order:n})},footer:[`${Kl.length} PLUGINS · ${Ji.length} PLATES`,`${Gl.length} DEMOS · 插件索引`]};function mw(){return c.jsx(gh,{config:gw})}const hw=G(H,[Bn(),st(),Fn(),ut(),Un(),Vt(),Gt(),ct(),Kt(),Qt(),dt(),Xt(),Yt(),Zt(),Jt(),qt(),Qr()]),Ql=()=>new Promise(e=>setTimeout(e,0)),yw=async(e,n=60)=>{for(let t=0;t<n&&!e();t++)await Ql()};async function vw(e){const n=document.createElement("div");n.style.cssText="position:fixed;left:0;top:0;width:420px;background:#fff",document.body.appendChild(n);const t=af(n);return Xi.flushSync(()=>t.render(e)),await Ql(),{host:n,root:t,q:r=>n.querySelector(r),qq:r=>n.querySelectorAll(r),click:async r=>{const i=n.querySelector(r);if(!i)throw new Error(`找不到元素 ${r}`);Xi.flushSync(()=>i.click()),await Ql()}}}function Sw(e){const t=Array.from(e.querySelectorAll("*")).map(a=>({e:a,r:a.getBoundingClientRect()}));if(!t.some(a=>a.r.width>0||a.r.height>0))return{checked:0,problems:[]};const i=[];let o=0;const l=e.getBoundingClientRect();for(const{r:a}of t)o+=1,(a.width<0||a.height<0)&&i.push("negative-size"),(a.left<-1||a.top<-1)&&i.push("negative-coord"),(a.right>l.right+1||a.bottom>l.bottom+1)&&i.push("overflow"),(a.width===0||a.height===0)&&i.push("zero-size");return e.scrollHeight>e.clientHeight+1&&i.push("scroll-overflow"),{checked:o,problems:Array.from(new Set(i))}}async function xw(){const e=[];let n=0;const t=(o,l)=>{n+=1,document.title=`SELFTEST RUNNING ${n}`,l||e.push(o)},r={signed:!1,claimed:null,makeup:null};function i(){const[o,l]=y.useState(!1),a=Z(o),s={sign:()=>{r.signed=!0,l(!0)},claim:u=>{r.claimed=u},makeup:u=>{r.makeup=u},share:()=>{},remind:()=>{},invite:()=>{}};return c.jsx(hw,{data:a,callbacks:s,containerStyle:{maxWidth:480}})}{const o=await vw(c.jsx(i,{}));t("根容器渲染 si-root",!!o.q('[data-testid="si-root"]'));const l=o.q('[data-testid="si-streak"]');t("连签数渲染（未签 streak=7）",!!l&&(l.textContent??"").includes("7")&&(l.textContent??"").includes("天连签"));const a=o.q('[data-testid="si-checkin-btn"]');t("今日签到按钮：未签态存在",!!a&&a.dataset.signed==="false"),t("今日签到按钮：未签文本「立即签到」",((a==null?void 0:a.textContent)??"")==="立即签到");const s=o.q('[data-testid="si-makeup-btn"]');t("补签入口存在且未禁用",!!s&&s.dataset.disabled==="false"&&s.disabled===!1),t("补签文案含「补签」",((s==null?void 0:s.textContent)??"").includes("补签")),t("未达领奖天数时无领取按钮",!o.q('[data-testid="si-claim-btn"]')),await o.click('[data-testid="si-checkin-btn"]'),await yw(()=>{var v;return((v=o.q('[data-testid="si-checkin-btn"]'))==null?void 0:v.dataset.signed)==="true"});const u=o.q('[data-testid="si-checkin-btn"]');t("签到后：按钮态 signed=true",(u==null?void 0:u.dataset.signed)==="true"),t("签到后：按钮禁用",(u==null?void 0:u.disabled)===!0),t("签到后：文案「今日已签 ✓」",((u==null?void 0:u.textContent)??"").includes("今日已签"));const p=o.q('[data-testid="si-streak"]');t("签到后：连签数更新为 8",!!p&&(p.textContent??"").includes("8")),t("签到回调被触发",r.signed===!0);const d=o.q('[data-testid="si-claim-btn"]');t("达标后：出现领取按钮",!!d&&d.dataset.day==="8"),d&&(await o.click('[data-testid="si-claim-btn"]'),t("领取回调被触发且 day=8",r.claimed===8)),await o.click('[data-testid="si-makeup-btn"]'),t("补签回调被触发且日期=2026-10-09",r.makeup==="2026-10-09");const h=Sw(o.host);t("几何体检：0 问题（happy-dom 无布局引擎时自动跳过）",h.problems.length===0&&(h.checked===0||h.checked>=2)),Xi.flushSync(()=>o.root.unmount()),o.host.remove()}return{total:n,passed:n-e.length,failed:e}}async function ww(){document.title="SELFTEST RUNNING";try{const e=await xw();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Go.createRoot(document.getElementById("root")).render(c.jsx(mw,{}));typeof location<"u"&&location.search.includes("selftest=1")&&ww();export{s1 as C,Gl as D,Vu as G,Kl as P,Ji as S,Ew as U,Cw as a,Pw as b,q as c,Z as d,H as e,_w as f,c as j,y as r,G as w};
