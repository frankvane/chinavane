var bf=Object.defineProperty;var Df=(e,n,t)=>n in e?bf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ys=(e,n,t)=>Df(e,typeof n!="symbol"?n+"":n,t);function Nf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function Mf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ku={exports:{}},qi={},Yu={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=Symbol.for("react.element"),Of=Symbol.for("react.portal"),Lf=Symbol.for("react.fragment"),zf=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),Af=Symbol.for("react.provider"),Bf=Symbol.for("react.context"),Uf=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),Hf=Symbol.for("react.memo"),Vf=Symbol.for("react.lazy"),vs=Symbol.iterator;function Gf(e){return e===null||typeof e!="object"?null:(e=vs&&e[vs]||e["@@iterator"],typeof e=="function"?e:null)}var Xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zu=Object.assign,Ju={};function Ft(e,n,t){this.props=e,this.context=n,this.refs=Ju,this.updater=t||Xu}Ft.prototype.isReactComponent={};Ft.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ft.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qu(){}qu.prototype=Ft.prototype;function Yo(e,n,t){this.props=e,this.context=n,this.refs=Ju,this.updater=t||Xu}var Xo=Yo.prototype=new qu;Xo.constructor=Yo;Zu(Xo,Ft.prototype);Xo.isPureReactComponent=!0;var Ss=Array.isArray,ec=Object.prototype.hasOwnProperty,Zo={current:null},nc={key:!0,ref:!0,__self:!0,__source:!0};function tc(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)ec.call(n,r)&&!nc.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ur,type:e,key:l,ref:o,props:i,_owner:Zo.current}}function Qf(e,n){return{$$typeof:Ur,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Jo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function Kf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var xs=/\/+/g;function vl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Kf(""+e.key):n.toString(36)}function pi(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ur:case Of:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+vl(o,0):r,Ss(i)?(t="",e!=null&&(t=e.replace(xs,"$&/")+"/"),pi(i,n,t,"",function(u){return u})):i!=null&&(Jo(i)&&(i=Qf(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xs,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Ss(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+vl(l,a);o+=pi(l,n,t,s,i)}else if(s=Gf(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+vl(l,a++),o+=pi(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Yr(e,n,t){if(e==null)return e;var r=[],i=0;return pi(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Yf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},gi={transition:null},Xf={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:gi,ReactCurrentOwner:Zo};function rc(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:Yr,forEach:function(e,n,t){Yr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Yr(e,function(){n++}),n},toArray:function(e){return Yr(e,function(n){return n})||[]},only:function(e){if(!Jo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=Ft;N.Fragment=Lf;N.Profiler=Ff;N.PureComponent=Yo;N.StrictMode=zf;N.Suspense=Wf;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xf;N.act=rc;N.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zu({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Zo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)ec.call(n,s)&&!nc.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ur,type:e.type,key:i,ref:l,props:r,_owner:o}};N.createContext=function(e){return e={$$typeof:Bf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Af,_context:e},e.Consumer=e};N.createElement=tc;N.createFactory=function(e){var n=tc.bind(null,e);return n.type=e,n};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:Uf,render:e}};N.isValidElement=Jo;N.lazy=function(e){return{$$typeof:Vf,_payload:{_status:-1,_result:e},_init:Yf}};N.memo=function(e,n){return{$$typeof:Hf,type:e,compare:n===void 0?null:n}};N.startTransition=function(e){var n=gi.transition;gi.transition={};try{e()}finally{gi.transition=n}};N.unstable_act=rc;N.useCallback=function(e,n){return ke.current.useCallback(e,n)};N.useContext=function(e){return ke.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};N.useEffect=function(e,n){return ke.current.useEffect(e,n)};N.useId=function(){return ke.current.useId()};N.useImperativeHandle=function(e,n,t){return ke.current.useImperativeHandle(e,n,t)};N.useInsertionEffect=function(e,n){return ke.current.useInsertionEffect(e,n)};N.useLayoutEffect=function(e,n){return ke.current.useLayoutEffect(e,n)};N.useMemo=function(e,n){return ke.current.useMemo(e,n)};N.useReducer=function(e,n,t){return ke.current.useReducer(e,n,t)};N.useRef=function(e){return ke.current.useRef(e)};N.useState=function(e){return ke.current.useState(e)};N.useSyncExternalStore=function(e,n,t){return ke.current.useSyncExternalStore(e,n,t)};N.useTransition=function(){return ke.current.useTransition()};N.version="18.3.1";Yu.exports=N;var y=Yu.exports;const Wr=Mf(y),Zf=Nf({__proto__:null,default:Wr},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf=y,qf=Symbol.for("react.element"),ep=Symbol.for("react.fragment"),np=Object.prototype.hasOwnProperty,tp=Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rp={key:!0,ref:!0,__self:!0,__source:!0};function ic(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)np.call(n,r)&&!rp.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:qf,type:e,key:l,ref:o,props:i,_owner:tp.current}}qi.Fragment=ep;qi.jsx=ic;qi.jsxs=ic;Ku.exports=qi;var c=Ku.exports,Vl={},lc={exports:{}},Ne={},oc={exports:{}},ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,b){var D=R.length;R.push(b);e:for(;0<D;){var Q=D-1>>>1,re=R[Q];if(0<i(re,b))R[Q]=b,R[D]=re,D=Q;else break e}}function t(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var b=R[0],D=R.pop();if(D!==b){R[0]=D;e:for(var Q=0,re=R.length,F=re>>>1;Q<F;){var A=2*(Q+1)-1,se=R[A],me=A+1,ue=R[me];if(0>i(se,D))me<re&&0>i(ue,se)?(R[Q]=ue,R[me]=D,Q=me):(R[Q]=se,R[A]=D,Q=A);else if(me<re&&0>i(ue,D))R[Q]=ue,R[me]=D,Q=me;else break e}}return b}function i(R,b){var D=R.sortIndex-b.sortIndex;return D!==0?D:R.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],u=[],p=1,d=null,h=3,v=!1,S=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var b=t(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=R)r(u),b.sortIndex=b.expirationTime,n(s,b);else break;b=t(u)}}function w(R){if(x=!1,g(R),!S)if(t(s)!==null)S=!0,We(E);else{var b=t(u);b!==null&&Ze(w,b.startTime-R)}}function E(R,b){S=!1,x&&(x=!1,m($),$=-1),v=!0;var D=h;try{for(g(b),d=t(s);d!==null&&(!(d.expirationTime>b)||R&&!M());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,h=d.priorityLevel;var re=Q(d.expirationTime<=b);b=e.unstable_now(),typeof re=="function"?d.callback=re:d===t(s)&&r(s),g(b)}else r(s);d=t(s)}if(d!==null)var F=!0;else{var A=t(u);A!==null&&Ze(w,A.startTime-b),F=!1}return F}finally{d=null,h=D,v=!1}}var j=!1,I=null,$=-1,k=5,C=-1;function M(){return!(e.unstable_now()-C<k)}function ee(){if(I!==null){var R=e.unstable_now();C=R;var b=!0;try{b=I(!0,R)}finally{b?L():(j=!1,I=null)}}else j=!1}var L;if(typeof f=="function")L=function(){f(ee)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,hn=le.port2;le.port1.onmessage=ee,L=function(){hn.postMessage(null)}}else L=function(){P(ee,0)};function We(R){I=R,j||(j=!0,L())}function Ze(R,b){$=P(function(){R(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){S||v||(S=!0,We(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var D=h;h=b;try{return R()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,b){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var D=h;h=R;try{return b()}finally{h=D}},e.unstable_scheduleCallback=function(R,b,D){var Q=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Q+D:Q):D=Q,R){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=D+re,R={id:p++,callback:b,priorityLevel:R,startTime:D,expirationTime:re,sortIndex:-1},D>Q?(R.sortIndex=D,n(u,R),t(s)===null&&R===t(u)&&(x?(m($),$=-1):x=!0,Ze(w,D-Q))):(R.sortIndex=re,n(s,R),S||v||(S=!0,We(E))),R},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(R){var b=h;return function(){var D=h;h=b;try{return R.apply(this,arguments)}finally{h=D}}}})(ac);oc.exports=ac;var ip=oc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp=y,be=ip;function _(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sc=new Set,Pr={};function lt(e,n){bt(e,n),bt(e+"Capture",n)}function bt(e,n){for(Pr[e]=n,e=0;e<n.length;e++)sc.add(n[e])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,op=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ws={},ks={};function ap(e){return Gl.call(ks,e)?!0:Gl.call(ws,e)?!1:op.test(e)?ks[e]=!0:(ws[e]=!0,!1)}function sp(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function up(e,n,t,r){if(n===null||typeof n>"u"||sp(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Pe(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ge[n]=new Pe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var qo=/[\-:]([a-z])/g;function ea(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(qo,ea);ge[n]=new Pe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(qo,ea);ge[n]=new Pe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(qo,ea);ge[n]=new Pe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function na(e,n,t,r){var i=ge.hasOwnProperty(n)?ge[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(up(n,t,i,r)&&(t=null),r||i===null?ap(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var gn=lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xr=Symbol.for("react.element"),gt=Symbol.for("react.portal"),mt=Symbol.for("react.fragment"),ta=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),cc=Symbol.for("react.context"),ra=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),ia=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),dc=Symbol.for("react.offscreen"),Ps=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=Ps&&e[Ps]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Sl;function ur(e){if(Sl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Sl=n&&n[1]||""}return`
`+Sl+e}var xl=!1;function wl(e,n){if(!e||xl)return"";xl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{xl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ur(e):""}function cp(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=wl(e.type,!1),e;case 11:return e=wl(e.type.render,!1),e;case 1:return e=wl(e.type,!0),e;default:return""}}function Xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mt:return"Fragment";case gt:return"Portal";case Ql:return"Profiler";case ta:return"StrictMode";case Kl:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cc:return(e.displayName||"Context")+".Consumer";case uc:return(e._context.displayName||"Context")+".Provider";case ra:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ia:return n=e.displayName||null,n!==null?n:Xl(e.type)||"Memo";case vn:n=e._payload,e=e._init;try{return Xl(e(n))}catch{}}return null}function dp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(n);case 8:return n===ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fp(e){var n=fc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Zr(e){e._valueTracker||(e._valueTracker=fp(e))}function pc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=fc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,n){var t=n.checked;return X({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function _s(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Nn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function gc(e,n){n=n.checked,n!=null&&na(e,"checked",n,!1)}function Jl(e,n){gc(e,n);var t=Nn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ql(e,n.type,t):n.hasOwnProperty("defaultValue")&&ql(e,n.type,Nn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Cs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ql(e,n,t){(n!=="number"||Ci(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var cr=Array.isArray;function Et(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Nn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function eo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(_(91));return X({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Es(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(_(92));if(cr(t)){if(1<t.length)throw Error(_(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Nn(t)}}function mc(e,n){var t=Nn(n.value),r=Nn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Rs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function hc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?hc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jr,yc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function _r(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pp=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){pp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),gr[n]=gr[e]})});function vc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||gr.hasOwnProperty(e)&&gr[e]?(""+n).trim():n+"px"}function Sc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=vc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var gp=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function to(e,n){if(n){if(gp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(_(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(_(61))}if(n.style!=null&&typeof n.style!="object")throw Error(_(62))}}function ro(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var io=null;function la(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,Rt=null,Tt=null;function Ts(e){if(e=Gr(e)){if(typeof lo!="function")throw Error(_(280));var n=e.stateNode;n&&(n=il(n),lo(e.stateNode,e.type,n))}}function xc(e){Rt?Tt?Tt.push(e):Tt=[e]:Rt=e}function wc(){if(Rt){var e=Rt,n=Tt;if(Tt=Rt=null,Ts(e),n)for(e=0;e<n.length;e++)Ts(n[e])}}function kc(e,n){return e(n)}function Pc(){}var kl=!1;function _c(e,n,t){if(kl)return e(n,t);kl=!0;try{return kc(e,n,t)}finally{kl=!1,(Rt!==null||Tt!==null)&&(Pc(),wc())}}function Cr(e,n){var t=e.stateNode;if(t===null)return null;var r=il(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(_(231,n,typeof t));return t}var oo=!1;if(un)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){oo=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{oo=!1}function mp(e,n,t,r,i,l,o,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var mr=!1,Ei=null,Ri=!1,ao=null,hp={onError:function(e){mr=!0,Ei=e}};function yp(e,n,t,r,i,l,o,a,s){mr=!1,Ei=null,mp.apply(hp,arguments)}function vp(e,n,t,r,i,l,o,a,s){if(yp.apply(this,arguments),mr){if(mr){var u=Ei;mr=!1,Ei=null}else throw Error(_(198));Ri||(Ri=!0,ao=u)}}function ot(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Cc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Is(e){if(ot(e)!==e)throw Error(_(188))}function Sp(e){var n=e.alternate;if(!n){if(n=ot(e),n===null)throw Error(_(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Is(i),e;if(l===r)return Is(i),n;l=l.sibling}throw Error(_(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(t.alternate!==r)throw Error(_(190))}if(t.tag!==3)throw Error(_(188));return t.stateNode.current===t?e:n}function Ec(e){return e=Sp(e),e!==null?Rc(e):null}function Rc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Rc(e);if(n!==null)return n;e=e.sibling}return null}var Tc=be.unstable_scheduleCallback,js=be.unstable_cancelCallback,xp=be.unstable_shouldYield,wp=be.unstable_requestPaint,ne=be.unstable_now,kp=be.unstable_getCurrentPriorityLevel,oa=be.unstable_ImmediatePriority,Ic=be.unstable_UserBlockingPriority,Ti=be.unstable_NormalPriority,Pp=be.unstable_LowPriority,jc=be.unstable_IdlePriority,el=null,nn=null;function _p(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Rp,Cp=Math.log,Ep=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(Cp(e)/Ep|0)|0}var qr=64,ei=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=dr(a):(l&=o,l!==0&&(r=dr(l)))}else o=t&~i,o!==0?r=dr(o):l!==0&&(r=dr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ke(n),i=1<<t,r|=e[t],n&=~i;return r}function Tp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ip(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ke(l),a=1<<o,s=i[o];s===-1?(!(a&t)||a&r)&&(i[o]=Tp(a,n)):s<=n&&(e.expiredLanes|=a),l&=~a}}function so(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $c(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function Pl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Hr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ke(n),e[n]=t}function jp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ke(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function aa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ke(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var z=0;function bc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dc,sa,Nc,Mc,Oc,uo=!1,ni=[],Cn=null,En=null,Rn=null,Er=new Map,Rr=new Map,xn=[],$p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $s(e,n){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Er.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(n.pointerId)}}function tr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Gr(n),n!==null&&sa(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function bp(e,n,t,r,i){switch(n){case"focusin":return Cn=tr(Cn,e,n,t,r,i),!0;case"dragenter":return En=tr(En,e,n,t,r,i),!0;case"mouseover":return Rn=tr(Rn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Er.set(l,tr(Er.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Rr.set(l,tr(Rr.get(l)||null,e,n,t,r,i)),!0}return!1}function Lc(e){var n=Gn(e.target);if(n!==null){var t=ot(n);if(t!==null){if(n=t.tag,n===13){if(n=Cc(t),n!==null){e.blockedOn=n,Oc(e.priority,function(){Nc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=co(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);io=r,t.target.dispatchEvent(r),io=null}else return n=Gr(t),n!==null&&sa(n),e.blockedOn=t,!1;n.shift()}return!0}function bs(e,n,t){mi(e)&&t.delete(n)}function Dp(){uo=!1,Cn!==null&&mi(Cn)&&(Cn=null),En!==null&&mi(En)&&(En=null),Rn!==null&&mi(Rn)&&(Rn=null),Er.forEach(bs),Rr.forEach(bs)}function rr(e,n){e.blockedOn===n&&(e.blockedOn=null,uo||(uo=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Dp)))}function Tr(e){function n(i){return rr(i,e)}if(0<ni.length){rr(ni[0],e);for(var t=1;t<ni.length;t++){var r=ni[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&rr(Cn,e),En!==null&&rr(En,e),Rn!==null&&rr(Rn,e),Er.forEach(n),Rr.forEach(n),t=0;t<xn.length;t++)r=xn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<xn.length&&(t=xn[0],t.blockedOn===null);)Lc(t),t.blockedOn===null&&xn.shift()}var It=gn.ReactCurrentBatchConfig,ji=!0;function Np(e,n,t,r){var i=z,l=It.transition;It.transition=null;try{z=1,ua(e,n,t,r)}finally{z=i,It.transition=l}}function Mp(e,n,t,r){var i=z,l=It.transition;It.transition=null;try{z=4,ua(e,n,t,r)}finally{z=i,It.transition=l}}function ua(e,n,t,r){if(ji){var i=co(e,n,t,r);if(i===null)Dl(e,n,r,$i,t),$s(e,r);else if(bp(i,e,n,t,r))r.stopPropagation();else if($s(e,r),n&4&&-1<$p.indexOf(e)){for(;i!==null;){var l=Gr(i);if(l!==null&&Dc(l),l=co(e,n,t,r),l===null&&Dl(e,n,r,$i,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Dl(e,n,r,null,t)}}var $i=null;function co(e,n,t,r){if($i=null,e=la(r),e=Gn(e),e!==null)if(n=ot(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Cc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $i=e,null}function zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kp()){case oa:return 1;case Ic:return 4;case Ti:case Pp:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kn=null,ca=null,hi=null;function Fc(){if(hi)return hi;var e,n=ca,t=n.length,r,i="value"in kn?kn.value:kn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return hi=i.slice(e,1<r?1-r:void 0)}function yi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function Ds(){return!1}function Me(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ti:Ds,this.isPropagationStopped=Ds,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),n}var At={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},da=Me(At),Vr=X({},At,{view:0,detail:0}),Op=Me(Vr),_l,Cl,ir,nl=X({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(_l=e.screenX-ir.screenX,Cl=e.screenY-ir.screenY):Cl=_l=0,ir=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),Ns=Me(nl),Lp=X({},nl,{dataTransfer:0}),zp=Me(Lp),Fp=X({},Vr,{relatedTarget:0}),El=Me(Fp),Ap=X({},At,{animationName:0,elapsedTime:0,pseudoElement:0}),Bp=Me(Ap),Up=X({},At,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wp=Me(Up),Hp=X({},At,{data:0}),Ms=Me(Hp),Vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Qp[e])?!!n[e]:!1}function fa(){return Kp}var Yp=X({},Vr,{key:function(e){if(e.key){var n=Vp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xp=Me(Yp),Zp=X({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Os=Me(Zp),Jp=X({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),qp=Me(Jp),eg=X({},At,{propertyName:0,elapsedTime:0,pseudoElement:0}),ng=Me(eg),tg=X({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=Me(tg),ig=[9,13,27,32],pa=un&&"CompositionEvent"in window,hr=null;un&&"documentMode"in document&&(hr=document.documentMode);var lg=un&&"TextEvent"in window&&!hr,Ac=un&&(!pa||hr&&8<hr&&11>=hr),Ls=" ",zs=!1;function Bc(e,n){switch(e){case"keyup":return ig.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ht=!1;function og(e,n){switch(e){case"compositionend":return Uc(n);case"keypress":return n.which!==32?null:(zs=!0,Ls);case"textInput":return e=n.data,e===Ls&&zs?null:e;default:return null}}function ag(e,n){if(ht)return e==="compositionend"||!pa&&Bc(e,n)?(e=Fc(),hi=ca=kn=null,ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ac&&n.locale!=="ko"?null:n.data;default:return null}}var sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sg[e.type]:n==="textarea"}function Wc(e,n,t,r){xc(r),n=bi(n,"onChange"),0<n.length&&(t=new da("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var yr=null,Ir=null;function ug(e){ed(e,0)}function tl(e){var n=St(e);if(pc(n))return e}function cg(e,n){if(e==="change")return n}var Hc=!1;if(un){var Rl;if(un){var Tl="oninput"in document;if(!Tl){var As=document.createElement("div");As.setAttribute("oninput","return;"),Tl=typeof As.oninput=="function"}Rl=Tl}else Rl=!1;Hc=Rl&&(!document.documentMode||9<document.documentMode)}function Bs(){yr&&(yr.detachEvent("onpropertychange",Vc),Ir=yr=null)}function Vc(e){if(e.propertyName==="value"&&tl(Ir)){var n=[];Wc(n,Ir,e,la(e)),_c(ug,n)}}function dg(e,n,t){e==="focusin"?(Bs(),yr=n,Ir=t,yr.attachEvent("onpropertychange",Vc)):e==="focusout"&&Bs()}function fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Ir)}function pg(e,n){if(e==="click")return tl(n)}function gg(e,n){if(e==="input"||e==="change")return tl(n)}function mg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xe=typeof Object.is=="function"?Object.is:mg;function jr(e,n){if(Xe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Gl.call(n,i)||!Xe(e[i],n[i]))return!1}return!0}function Us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ws(e,n){var t=Us(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Us(t)}}function Gc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qc(){for(var e=window,n=Ci();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ci(e.document)}return n}function ga(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function hg(e){var n=Qc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Gc(t.ownerDocument.documentElement,t)){if(r!==null&&ga(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ws(t,l);var o=Ws(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yg=un&&"documentMode"in document&&11>=document.documentMode,yt=null,fo=null,vr=null,po=!1;function Hs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;po||yt==null||yt!==Ci(r)||(r=yt,"selectionStart"in r&&ga(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&jr(vr,r)||(vr=r,r=bi(fo,"onSelect"),0<r.length&&(n=new da("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=yt)))}function ri(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var vt={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionend:ri("Transition","TransitionEnd")},Il={},Kc={};un&&(Kc=document.createElement("div").style,"AnimationEvent"in window||(delete vt.animationend.animation,delete vt.animationiteration.animation,delete vt.animationstart.animation),"TransitionEvent"in window||delete vt.transitionend.transition);function rl(e){if(Il[e])return Il[e];if(!vt[e])return e;var n=vt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Kc)return Il[e]=n[t];return e}var Yc=rl("animationend"),Xc=rl("animationiteration"),Zc=rl("animationstart"),Jc=rl("transitionend"),qc=new Map,Vs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,n){qc.set(e,n),lt(n,[e])}for(var jl=0;jl<Vs.length;jl++){var $l=Vs[jl],vg=$l.toLowerCase(),Sg=$l[0].toUpperCase()+$l.slice(1);On(vg,"on"+Sg)}On(Yc,"onAnimationEnd");On(Xc,"onAnimationIteration");On(Zc,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(Jc,"onTransitionEnd");bt("onMouseEnter",["mouseout","mouseover"]);bt("onMouseLeave",["mouseout","mouseover"]);bt("onPointerEnter",["pointerout","pointerover"]);bt("onPointerLeave",["pointerout","pointerover"]);lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function Gs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,vp(r,n,void 0,e),e.currentTarget=null}function ed(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;Gs(i,a,u),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;Gs(i,a,u),l=s}}}if(Ri)throw e=ao,Ri=!1,ao=null,e}function U(e,n){var t=n[vo];t===void 0&&(t=n[vo]=new Set);var r=e+"__bubble";t.has(r)||(nd(n,e,2,!1),t.add(r))}function bl(e,n,t){var r=0;n&&(r|=4),nd(t,e,r,n)}var ii="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[ii]){e[ii]=!0,sc.forEach(function(t){t!=="selectionchange"&&(xg.has(t)||bl(t,!1,e),bl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ii]||(n[ii]=!0,bl("selectionchange",!1,n))}}function nd(e,n,t,r){switch(zc(n)){case 1:var i=Np;break;case 4:i=Mp;break;default:i=ua}t=i.bind(null,n,t,e),i=void 0,!oo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Dl(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gn(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}_c(function(){var u=l,p=la(t),d=[];e:{var h=qc.get(e);if(h!==void 0){var v=da,S=e;switch(e){case"keypress":if(yi(t)===0)break e;case"keydown":case"keyup":v=Xp;break;case"focusin":S="focus",v=El;break;case"focusout":S="blur",v=El;break;case"beforeblur":case"afterblur":v=El;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=qp;break;case Yc:case Xc:case Zc:v=Bp;break;case Jc:v=ng;break;case"scroll":v=Op;break;case"wheel":v=rg;break;case"copy":case"cut":case"paste":v=Wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Os}var x=(n&4)!==0,P=!x&&e==="scroll",m=x?h!==null?h+"Capture":null:h;x=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Cr(f,m),w!=null&&x.push(br(f,w,g)))),P)break;f=f.return}0<x.length&&(h=new v(h,S,null,t,p),d.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&t!==io&&(S=t.relatedTarget||t.fromElement)&&(Gn(S)||S[cn]))break e;if((v||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,v?(S=t.relatedTarget||t.toElement,v=u,S=S?Gn(S):null,S!==null&&(P=ot(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=u),v!==S)){if(x=Ns,w="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=Os,w="onPointerLeave",m="onPointerEnter",f="pointer"),P=v==null?h:St(v),g=S==null?h:St(S),h=new x(w,f+"leave",v,t,p),h.target=P,h.relatedTarget=g,w=null,Gn(p)===u&&(x=new x(m,f+"enter",S,t,p),x.target=g,x.relatedTarget=P,w=x),P=w,v&&S)n:{for(x=v,m=S,f=0,g=x;g;g=ft(g))f++;for(g=0,w=m;w;w=ft(w))g++;for(;0<f-g;)x=ft(x),f--;for(;0<g-f;)m=ft(m),g--;for(;f--;){if(x===m||m!==null&&x===m.alternate)break n;x=ft(x),m=ft(m)}x=null}else x=null;v!==null&&Qs(d,h,v,x,!1),S!==null&&P!==null&&Qs(d,P,S,x,!0)}}e:{if(h=u?St(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var E=cg;else if(Fs(h))if(Hc)E=gg;else{E=fg;var j=dg}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=pg);if(E&&(E=E(e,u))){Wc(d,E,t,p);break e}j&&j(e,h,u),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&ql(h,"number",h.value)}switch(j=u?St(u):window,e){case"focusin":(Fs(j)||j.contentEditable==="true")&&(yt=j,fo=u,vr=null);break;case"focusout":vr=fo=yt=null;break;case"mousedown":po=!0;break;case"contextmenu":case"mouseup":case"dragend":po=!1,Hs(d,t,p);break;case"selectionchange":if(yg)break;case"keydown":case"keyup":Hs(d,t,p)}var I;if(pa)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else ht?Bc(e,t)&&($="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&($="onCompositionStart");$&&(Ac&&t.locale!=="ko"&&(ht||$!=="onCompositionStart"?$==="onCompositionEnd"&&ht&&(I=Fc()):(kn=p,ca="value"in kn?kn.value:kn.textContent,ht=!0)),j=bi(u,$),0<j.length&&($=new Ms($,e,null,t,p),d.push({event:$,listeners:j}),I?$.data=I:(I=Uc(t),I!==null&&($.data=I)))),(I=lg?og(e,t):ag(e,t))&&(u=bi(u,"onBeforeInput"),0<u.length&&(p=new Ms("onBeforeInput","beforeinput",null,t,p),d.push({event:p,listeners:u}),p.data=I))}ed(d,n)})}function br(e,n,t){return{instance:e,listener:n,currentTarget:t}}function bi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Cr(e,t),l!=null&&r.unshift(br(e,l,i)),l=Cr(e,n),l!=null&&r.push(br(e,l,i))),e=e.return}return r}function ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qs(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Cr(t,l),s!=null&&o.unshift(br(t,s,a))):i||(s=Cr(t,l),s!=null&&o.push(br(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var wg=/\r\n?/g,kg=/\u0000|\uFFFD/g;function Ks(e){return(typeof e=="string"?e:""+e).replace(wg,`
`).replace(kg,"")}function li(e,n,t){if(n=Ks(n),Ks(e)!==n&&t)throw Error(_(425))}function Di(){}var go=null,mo=null;function ho(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Pg=typeof clearTimeout=="function"?clearTimeout:void 0,Ys=typeof Promise=="function"?Promise:void 0,_g=typeof queueMicrotask=="function"?queueMicrotask:typeof Ys<"u"?function(e){return Ys.resolve(null).then(e).catch(Cg)}:yo;function Cg(e){setTimeout(function(){throw e})}function Nl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Tr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Tr(n)}function Tn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Xs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Bt=Math.random().toString(36).slice(2),en="__reactFiber$"+Bt,Dr="__reactProps$"+Bt,cn="__reactContainer$"+Bt,vo="__reactEvents$"+Bt,Eg="__reactListeners$"+Bt,Rg="__reactHandles$"+Bt;function Gn(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[cn]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Xs(e);e!==null;){if(t=e[en])return t;e=Xs(e)}return n}e=t,t=e.parentNode}return null}function Gr(e){return e=e[en]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function St(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function il(e){return e[Dr]||null}var So=[],xt=-1;function Ln(e){return{current:e}}function W(e){0>xt||(e.current=So[xt],So[xt]=null,xt--)}function B(e,n){xt++,So[xt]=e.current,e.current=n}var Mn={},Se=Ln(Mn),Ee=Ln(!1),Zn=Mn;function Dt(e,n){var t=e.type.contextTypes;if(!t)return Mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function Ni(){W(Ee),W(Se)}function Zs(e,n,t){if(Se.current!==Mn)throw Error(_(168));B(Se,n),B(Ee,t)}function td(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(_(108,dp(e)||"Unknown",i));return X({},t,r)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,Zn=Se.current,B(Se,e),B(Ee,Ee.current),!0}function Js(e,n,t){var r=e.stateNode;if(!r)throw Error(_(169));t?(e=td(e,n,Zn),r.__reactInternalMemoizedMergedChildContext=e,W(Ee),W(Se),B(Se,e)):W(Ee),B(Ee,t)}var ln=null,ll=!1,Ml=!1;function rd(e){ln===null?ln=[e]:ln.push(e)}function Tg(e){ll=!0,rd(e)}function zn(){if(!Ml&&ln!==null){Ml=!0;var e=0,n=z;try{var t=ln;for(z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}ln=null,ll=!1}catch(i){throw ln!==null&&(ln=ln.slice(e+1)),Tc(oa,zn),i}finally{z=n,Ml=!1}}return null}var wt=[],kt=0,Oi=null,Li=0,Oe=[],Le=0,Jn=null,on=1,an="";function Hn(e,n){wt[kt++]=Li,wt[kt++]=Oi,Oi=e,Li=n}function id(e,n,t){Oe[Le++]=on,Oe[Le++]=an,Oe[Le++]=Jn,Jn=e;var r=on;e=an;var i=32-Ke(r)-1;r&=~(1<<i),t+=1;var l=32-Ke(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,on=1<<32-Ke(n)+i|t<<i|r,an=l+e}else on=1<<l|t<<i|r,an=e}function ma(e){e.return!==null&&(Hn(e,1),id(e,1,0))}function ha(e){for(;e===Oi;)Oi=wt[--kt],wt[kt]=null,Li=wt[--kt],wt[kt]=null;for(;e===Jn;)Jn=Oe[--Le],Oe[Le]=null,an=Oe[--Le],Oe[Le]=null,on=Oe[--Le],Oe[Le]=null}var $e=null,je=null,V=!1,Qe=null;function ld(e,n){var t=ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function qs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,$e=e,je=Tn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,$e=e,je=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Jn!==null?{id:on,overflow:an}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,$e=e,je=null,!0):!1;default:return!1}}function xo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wo(e){if(V){var n=je;if(n){var t=n;if(!qs(e,n)){if(xo(e))throw Error(_(418));n=Tn(t.nextSibling);var r=$e;n&&qs(e,n)?ld(r,t):(e.flags=e.flags&-4097|2,V=!1,$e=e)}}else{if(xo(e))throw Error(_(418));e.flags=e.flags&-4097|2,V=!1,$e=e}}}function eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function oi(e){if(e!==$e)return!1;if(!V)return eu(e),V=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ho(e.type,e.memoizedProps)),n&&(n=je)){if(xo(e))throw od(),Error(_(418));for(;n;)ld(e,n),n=Tn(n.nextSibling)}if(eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){je=Tn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}je=null}}else je=$e?Tn(e.stateNode.nextSibling):null;return!0}function od(){for(var e=je;e;)e=Tn(e.nextSibling)}function Nt(){je=$e=null,V=!1}function ya(e){Qe===null?Qe=[e]:Qe.push(e)}var Ig=gn.ReactCurrentBatchConfig;function lr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(_(309));var r=t.stateNode}if(!r)throw Error(_(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(_(284));if(!t._owner)throw Error(_(290,e))}return e}function ai(e,n){throw e=Object.prototype.toString.call(n),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nu(e){var n=e._init;return n(e._payload)}function ad(e){function n(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function t(m,f){if(!e)return null;for(;f!==null;)n(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=bn(m,f),m.index=0,m.sibling=null,m}function l(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,w){return f===null||f.tag!==6?(f=Ul(g,m.mode,w),f.return=m,f):(f=i(f,g),f.return=m,f)}function s(m,f,g,w){var E=g.type;return E===mt?p(m,f,g.props.children,w,g.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vn&&nu(E)===f.type)?(w=i(f,g.props),w.ref=lr(m,f,g),w.return=m,w):(w=_i(g.type,g.key,g.props,null,m.mode,w),w.ref=lr(m,f,g),w.return=m,w)}function u(m,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Wl(g,m.mode,w),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function p(m,f,g,w,E){return f===null||f.tag!==7?(f=Xn(g,m.mode,w,E),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ul(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xr:return g=_i(f.type,f.key,f.props,null,m.mode,g),g.ref=lr(m,null,f),g.return=m,g;case gt:return f=Wl(f,m.mode,g),f.return=m,f;case vn:var w=f._init;return d(m,w(f._payload),g)}if(cr(f)||er(f))return f=Xn(f,m.mode,g,null),f.return=m,f;ai(m,f)}return null}function h(m,f,g,w){var E=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(m,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xr:return g.key===E?s(m,f,g,w):null;case gt:return g.key===E?u(m,f,g,w):null;case vn:return E=g._init,h(m,f,E(g._payload),w)}if(cr(g)||er(g))return E!==null?null:p(m,f,g,w,null);ai(m,g)}return null}function v(m,f,g,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(f,m,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xr:return m=m.get(w.key===null?g:w.key)||null,s(f,m,w,E);case gt:return m=m.get(w.key===null?g:w.key)||null,u(f,m,w,E);case vn:var j=w._init;return v(m,f,g,j(w._payload),E)}if(cr(w)||er(w))return m=m.get(g)||null,p(f,m,w,E,null);ai(f,w)}return null}function S(m,f,g,w){for(var E=null,j=null,I=f,$=f=0,k=null;I!==null&&$<g.length;$++){I.index>$?(k=I,I=null):k=I.sibling;var C=h(m,I,g[$],w);if(C===null){I===null&&(I=k);break}e&&I&&C.alternate===null&&n(m,I),f=l(C,f,$),j===null?E=C:j.sibling=C,j=C,I=k}if($===g.length)return t(m,I),V&&Hn(m,$),E;if(I===null){for(;$<g.length;$++)I=d(m,g[$],w),I!==null&&(f=l(I,f,$),j===null?E=I:j.sibling=I,j=I);return V&&Hn(m,$),E}for(I=r(m,I);$<g.length;$++)k=v(I,m,$,g[$],w),k!==null&&(e&&k.alternate!==null&&I.delete(k.key===null?$:k.key),f=l(k,f,$),j===null?E=k:j.sibling=k,j=k);return e&&I.forEach(function(M){return n(m,M)}),V&&Hn(m,$),E}function x(m,f,g,w){var E=er(g);if(typeof E!="function")throw Error(_(150));if(g=E.call(g),g==null)throw Error(_(151));for(var j=E=null,I=f,$=f=0,k=null,C=g.next();I!==null&&!C.done;$++,C=g.next()){I.index>$?(k=I,I=null):k=I.sibling;var M=h(m,I,C.value,w);if(M===null){I===null&&(I=k);break}e&&I&&M.alternate===null&&n(m,I),f=l(M,f,$),j===null?E=M:j.sibling=M,j=M,I=k}if(C.done)return t(m,I),V&&Hn(m,$),E;if(I===null){for(;!C.done;$++,C=g.next())C=d(m,C.value,w),C!==null&&(f=l(C,f,$),j===null?E=C:j.sibling=C,j=C);return V&&Hn(m,$),E}for(I=r(m,I);!C.done;$++,C=g.next())C=v(I,m,$,C.value,w),C!==null&&(e&&C.alternate!==null&&I.delete(C.key===null?$:C.key),f=l(C,f,$),j===null?E=C:j.sibling=C,j=C);return e&&I.forEach(function(ee){return n(m,ee)}),V&&Hn(m,$),E}function P(m,f,g,w){if(typeof g=="object"&&g!==null&&g.type===mt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xr:e:{for(var E=g.key,j=f;j!==null;){if(j.key===E){if(E=g.type,E===mt){if(j.tag===7){t(m,j.sibling),f=i(j,g.props.children),f.return=m,m=f;break e}}else if(j.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vn&&nu(E)===j.type){t(m,j.sibling),f=i(j,g.props),f.ref=lr(m,j,g),f.return=m,m=f;break e}t(m,j);break}else n(m,j);j=j.sibling}g.type===mt?(f=Xn(g.props.children,m.mode,w,g.key),f.return=m,m=f):(w=_i(g.type,g.key,g.props,null,m.mode,w),w.ref=lr(m,f,g),w.return=m,m=w)}return o(m);case gt:e:{for(j=g.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{t(m,f);break}else n(m,f);f=f.sibling}f=Wl(g,m.mode,w),f.return=m,m=f}return o(m);case vn:return j=g._init,P(m,f,j(g._payload),w)}if(cr(g))return S(m,f,g,w);if(er(g))return x(m,f,g,w);ai(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(m,f.sibling),f=i(f,g),f.return=m,m=f):(t(m,f),f=Ul(g,m.mode,w),f.return=m,m=f),o(m)):t(m,f)}return P}var Mt=ad(!0),sd=ad(!1),zi=Ln(null),Fi=null,Pt=null,va=null;function Sa(){va=Pt=Fi=null}function xa(e){var n=zi.current;W(zi),e._currentValue=n}function ko(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function jt(e,n){Fi=e,va=Pt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ce=!0),e.firstContext=null)}function Be(e){var n=e._currentValue;if(va!==e)if(e={context:e,memoizedValue:n,next:null},Pt===null){if(Fi===null)throw Error(_(308));Pt=e,Fi.dependencies={lanes:0,firstContext:e}}else Pt=Pt.next=e;return n}var Qn=null;function wa(e){Qn===null?Qn=[e]:Qn.push(e)}function ud(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,wa(n)):(t.next=i.next,i.next=t),n.interleaved=t,dn(e,r)}function dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Sn=!1;function ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function In(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,dn(e,t)}return i=r.interleaved,i===null?(n.next=n,wa(r)):(n.next=i.next,i.next=n),r.interleaved=n,dn(e,t)}function vi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,aa(e,t)}}function tu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ai(e,n,t,r){var i=e.updateQueue;Sn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,o===null?l=u:o.next=u,o=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(l!==null){var d=i.baseState;o=0,p=u=s=null,a=l;do{var h=a.lane,v=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,x=a;switch(h=n,v=t,x.tag){case 1:if(S=x.payload,typeof S=="function"){d=S.call(v,d,h);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,h=typeof S=="function"?S.call(v,d,h):S,h==null)break e;d=X({},d,h);break e;case 2:Sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=v,s=d):p=p.next=v,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);et|=o,e.lanes=o,e.memoizedState=d}}function ru(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Qr={},tn=Ln(Qr),Nr=Ln(Qr),Mr=Ln(Qr);function Kn(e){if(e===Qr)throw Error(_(174));return e}function Pa(e,n){switch(B(Mr,n),B(Nr,e),B(tn,Qr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:no(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=no(n,e)}W(tn),B(tn,n)}function Ot(){W(tn),W(Nr),W(Mr)}function dd(e){Kn(Mr.current);var n=Kn(tn.current),t=no(n,e.type);n!==t&&(B(Nr,e),B(tn,t))}function _a(e){Nr.current===e&&(W(tn),W(Nr))}var K=Ln(0);function Bi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ol=[];function Ca(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var Si=gn.ReactCurrentDispatcher,Ll=gn.ReactCurrentBatchConfig,qn=0,Y=null,oe=null,ce=null,Ui=!1,Sr=!1,Or=0,jg=0;function he(){throw Error(_(321))}function Ea(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Xe(e[t],n[t]))return!1;return!0}function Ra(e,n,t,r,i,l){if(qn=l,Y=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Si.current=e===null||e.memoizedState===null?Ng:Mg,e=t(r,i),Sr){l=0;do{if(Sr=!1,Or=0,25<=l)throw Error(_(301));l+=1,ce=oe=null,n.updateQueue=null,Si.current=Og,e=t(r,i)}while(Sr)}if(Si.current=Wi,n=oe!==null&&oe.next!==null,qn=0,ce=oe=Y=null,Ui=!1,n)throw Error(_(300));return e}function Ta(){var e=Or!==0;return Or=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Y.memoizedState=ce=e:ce=ce.next=e,ce}function Ue(){if(oe===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var n=ce===null?Y.memoizedState:ce.next;if(n!==null)ce=n,oe=e;else{if(e===null)throw Error(_(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ce===null?Y.memoizedState=ce=e:ce=ce.next=e}return ce}function Lr(e,n){return typeof n=="function"?n(e):n}function zl(e){var n=Ue(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=oe,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,u=l;do{var p=u.lane;if((qn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,o=r):s=s.next=d,Y.lanes|=p,et|=p}u=u.next}while(u!==null&&u!==l);s===null?o=r:s.next=a,Xe(r,n.memoizedState)||(Ce=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,Y.lanes|=l,et|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Fl(e){var n=Ue(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Xe(l,n.memoizedState)||(Ce=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function fd(){}function pd(e,n){var t=Y,r=Ue(),i=n(),l=!Xe(r.memoizedState,i);if(l&&(r.memoizedState=i,Ce=!0),r=r.queue,Ia(hd.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||ce!==null&&ce.memoizedState.tag&1){if(t.flags|=2048,zr(9,md.bind(null,t,r,i,n),void 0,null),de===null)throw Error(_(349));qn&30||gd(t,n,i)}return i}function gd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function md(e,n,t,r){n.value=t,n.getSnapshot=r,yd(n)&&vd(e)}function hd(e,n,t){return t(function(){yd(n)&&vd(e)})}function yd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Xe(e,t)}catch{return!0}}function vd(e){var n=dn(e,1);n!==null&&Ye(n,e,1,-1)}function iu(e){var n=qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},n.queue=e,e=e.dispatch=Dg.bind(null,Y,e),[n.memoizedState,e]}function zr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Sd(){return Ue().memoizedState}function xi(e,n,t,r){var i=qe();Y.flags|=e,i.memoizedState=zr(1|n,t,void 0,r===void 0?null:r)}function ol(e,n,t,r){var i=Ue();r=r===void 0?null:r;var l=void 0;if(oe!==null){var o=oe.memoizedState;if(l=o.destroy,r!==null&&Ea(r,o.deps)){i.memoizedState=zr(n,t,l,r);return}}Y.flags|=e,i.memoizedState=zr(1|n,t,l,r)}function lu(e,n){return xi(8390656,8,e,n)}function Ia(e,n){return ol(2048,8,e,n)}function xd(e,n){return ol(4,2,e,n)}function wd(e,n){return ol(4,4,e,n)}function kd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pd(e,n,t){return t=t!=null?t.concat([e]):null,ol(4,4,kd.bind(null,n,e),t)}function ja(){}function _d(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ea(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Cd(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ea(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ed(e,n,t){return qn&21?(Xe(t,n)||(t=$c(),Y.lanes|=t,et|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=t)}function $g(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var r=Ll.transition;Ll.transition={};try{e(!1),n()}finally{z=t,Ll.transition=r}}function Rd(){return Ue().memoizedState}function bg(e,n,t){var r=$n(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Td(e))Id(n,t);else if(t=ud(e,n,t,r),t!==null){var i=we();Ye(t,e,r,i),jd(t,n,r)}}function Dg(e,n,t){var r=$n(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Td(e))Id(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,a=l(o,t);if(i.hasEagerState=!0,i.eagerState=a,Xe(a,o)){var s=n.interleaved;s===null?(i.next=i,wa(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=ud(e,n,i,r),t!==null&&(i=we(),Ye(t,e,r,i),jd(t,n,r))}}function Td(e){var n=e.alternate;return e===Y||n!==null&&n===Y}function Id(e,n){Sr=Ui=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function jd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,aa(e,t)}}var Wi={readContext:Be,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Ng={readContext:Be,useCallback:function(e,n){return qe().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:lu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,xi(4194308,4,kd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return xi(4194308,4,e,n)},useInsertionEffect:function(e,n){return xi(4,2,e,n)},useMemo:function(e,n){var t=qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=qe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=bg.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var n=qe();return e={current:e},n.memoizedState=e},useState:iu,useDebugValue:ja,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=iu(!1),n=e[0];return e=$g.bind(null,e[1]),qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Y,i=qe();if(V){if(t===void 0)throw Error(_(407));t=t()}else{if(t=n(),de===null)throw Error(_(349));qn&30||gd(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,lu(hd.bind(null,r,l,e),[e]),r.flags|=2048,zr(9,md.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=qe(),n=de.identifierPrefix;if(V){var t=an,r=on;t=(r&~(1<<32-Ke(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Or++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=jg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Mg={readContext:Be,useCallback:_d,useContext:Be,useEffect:Ia,useImperativeHandle:Pd,useInsertionEffect:xd,useLayoutEffect:wd,useMemo:Cd,useReducer:zl,useRef:Sd,useState:function(){return zl(Lr)},useDebugValue:ja,useDeferredValue:function(e){var n=Ue();return Ed(n,oe.memoizedState,e)},useTransition:function(){var e=zl(Lr)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:fd,useSyncExternalStore:pd,useId:Rd,unstable_isNewReconciler:!1},Og={readContext:Be,useCallback:_d,useContext:Be,useEffect:Ia,useImperativeHandle:Pd,useInsertionEffect:xd,useLayoutEffect:wd,useMemo:Cd,useReducer:Fl,useRef:Sd,useState:function(){return Fl(Lr)},useDebugValue:ja,useDeferredValue:function(e){var n=Ue();return oe===null?n.memoizedState=e:Ed(n,oe.memoizedState,e)},useTransition:function(){var e=Fl(Lr)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:fd,useSyncExternalStore:pd,useId:Rd,unstable_isNewReconciler:!1};function Ve(e,n){if(e&&e.defaultProps){n=X({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Po(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:X({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var al={isMounted:function(e){return(e=e._reactInternals)?ot(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=we(),i=$n(e),l=sn(r,i);l.payload=n,t!=null&&(l.callback=t),n=In(e,l,i),n!==null&&(Ye(n,e,i,r),vi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=we(),i=$n(e),l=sn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=In(e,l,i),n!==null&&(Ye(n,e,i,r),vi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=we(),r=$n(e),i=sn(t,r);i.tag=2,n!=null&&(i.callback=n),n=In(e,i,r),n!==null&&(Ye(n,e,r,t),vi(n,e,r))}};function ou(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!jr(t,r)||!jr(i,l):!0}function $d(e,n,t){var r=!1,i=Mn,l=n.contextType;return typeof l=="object"&&l!==null?l=Be(l):(i=Re(n)?Zn:Se.current,r=n.contextTypes,l=(r=r!=null)?Dt(e,i):Mn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=al,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function au(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&al.enqueueReplaceState(n,n.state,null)}function _o(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ka(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Be(l):(l=Re(n)?Zn:Se.current,i.context=Dt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Po(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&al.enqueueReplaceState(i,i.state,null),Ai(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Lt(e,n){try{var t="",r=n;do t+=cp(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Al(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Co(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Lg=typeof WeakMap=="function"?WeakMap:Map;function bd(e,n,t){t=sn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Vi||(Vi=!0,Mo=r),Co(e,n)},t}function Dd(e,n,t){t=sn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Co(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Co(e,n),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function su(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Lg;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Zg.bind(null,e,n,t),n.then(e,e))}function uu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function cu(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=sn(-1,1),n.tag=2,In(t,n,1))),t.lanes|=1),e)}var zg=gn.ReactCurrentOwner,Ce=!1;function xe(e,n,t,r){n.child=e===null?sd(n,null,t,r):Mt(n,e.child,t,r)}function du(e,n,t,r,i){t=t.render;var l=n.ref;return jt(n,i),r=Ra(e,n,t,r,l,i),t=Ta(),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,fn(e,n,i)):(V&&t&&ma(n),n.flags|=1,xe(e,n,r,i),n.child)}function fu(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!za(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Nd(e,n,l,r,i)):(e=_i(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:jr,t(o,r)&&e.ref===n.ref)return fn(e,n,i)}return n.flags|=1,e=bn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Nd(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(jr(l,r)&&e.ref===n.ref)if(Ce=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return n.lanes=e.lanes,fn(e,n,i)}return Eo(e,n,t,r,i)}function Md(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Ct,Ie),Ie|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(Ct,Ie),Ie|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,B(Ct,Ie),Ie|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,B(Ct,Ie),Ie|=r;return xe(e,n,i,t),n.child}function Od(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Eo(e,n,t,r,i){var l=Re(t)?Zn:Se.current;return l=Dt(n,l),jt(n,i),t=Ra(e,n,t,r,l,i),r=Ta(),e!==null&&!Ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,fn(e,n,i)):(V&&r&&ma(n),n.flags|=1,xe(e,n,t,i),n.child)}function pu(e,n,t,r,i){if(Re(t)){var l=!0;Mi(n)}else l=!1;if(jt(n,i),n.stateNode===null)wi(e,n),$d(n,t,r),_o(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=Re(t)?Zn:Se.current,u=Dt(n,u));var p=t.getDerivedStateFromProps,d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==u)&&au(n,o,r,u),Sn=!1;var h=n.memoizedState;o.state=h,Ai(n,r,o,i),s=n.memoizedState,a!==r||h!==s||Ee.current||Sn?(typeof p=="function"&&(Po(n,t,p,r),s=n.memoizedState),(a=Sn||ou(n,t,a,r,h,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,cd(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Ve(n.type,a),o.props=u,d=n.pendingProps,h=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Be(s):(s=Re(t)?Zn:Se.current,s=Dt(n,s));var v=t.getDerivedStateFromProps;(p=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==s)&&au(n,o,r,s),Sn=!1,h=n.memoizedState,o.state=h,Ai(n,r,o,i);var S=n.memoizedState;a!==d||h!==S||Ee.current||Sn?(typeof v=="function"&&(Po(n,t,v,r),S=n.memoizedState),(u=Sn||ou(n,t,u,r,h,S,s)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),o.props=r,o.state=S,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Ro(e,n,t,r,l,i)}function Ro(e,n,t,r,i,l){Od(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Js(n,t,!1),fn(e,n,l);r=n.stateNode,zg.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Mt(n,e.child,null,l),n.child=Mt(n,null,a,l)):xe(e,n,a,l),n.memoizedState=r.state,i&&Js(n,t,!0),n.child}function Ld(e){var n=e.stateNode;n.pendingContext?Zs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Zs(e,n.context,!1),Pa(e,n.containerInfo)}function gu(e,n,t,r,i){return Nt(),ya(i),n.flags|=256,xe(e,n,t,r),n.child}var To={dehydrated:null,treeContext:null,retryLane:0};function Io(e){return{baseLanes:e,cachePool:null,transitions:null}}function zd(e,n,t){var r=n.pendingProps,i=K.current,l=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(K,i&1),e===null)return wo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=cl(o,r,0,null),e=Xn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Io(t),n.memoizedState=To,e):$a(n,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Fg(e,n,o,r,a,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=bn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=bn(a,l):(l=Xn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?Io(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=To,r}return l=e.child,e=l.sibling,r=bn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function $a(e,n){return n=cl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function si(e,n,t,r){return r!==null&&ya(r),Mt(n,e.child,null,t),e=$a(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Fg(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=Al(Error(_(422))),si(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=cl({mode:"visible",children:r.children},i,0,null),l=Xn(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Mt(n,e.child,null,o),n.child.memoizedState=Io(o),n.memoizedState=To,l);if(!(n.mode&1))return si(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(_(419)),r=Al(l,r,void 0),si(e,n,o,r)}if(a=(o&e.childLanes)!==0,Ce||a){if(r=de,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,dn(e,i),Ye(r,e,i,-1))}return La(),r=Al(Error(_(421))),si(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Jg.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,je=Tn(i.nextSibling),$e=n,V=!0,Qe=null,e!==null&&(Oe[Le++]=on,Oe[Le++]=an,Oe[Le++]=Jn,on=e.id,an=e.overflow,Jn=n),n=$a(n,r.children),n.flags|=4096,n)}function mu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ko(e.return,n,t)}function Bl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Fd(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(xe(e,n,r.children,t),r=K.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,t,n);else if(e.tag===19)mu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(K,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Bi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Bl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Bi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Bl(n,!0,t,null,l);break;case"together":Bl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function wi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function fn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),et|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(_(153));if(n.child!==null){for(e=n.child,t=bn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=bn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ag(e,n,t){switch(n.tag){case 3:Ld(n),Nt();break;case 5:dd(n);break;case 1:Re(n.type)&&Mi(n);break;case 4:Pa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;B(zi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),n.flags|=128,null):t&n.child.childLanes?zd(e,n,t):(B(K,K.current&1),e=fn(e,n,t),e!==null?e.sibling:null);B(K,K.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Fd(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return n.lanes=0,Md(e,n,t)}return fn(e,n,t)}var Ad,jo,Bd,Ud;Ad=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};jo=function(){};Bd=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Kn(tn.current);var l=null;switch(t){case"input":i=Zl(e,i),r=Zl(e,r),l=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":i=eo(e,i),r=eo(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Di)}to(t,r);var o;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&U("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};Ud=function(e,n,t,r){t!==r&&(n.flags|=4)};function or(e,n){if(!V)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Bg(e,n,t){var r=n.pendingProps;switch(ha(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(n),null;case 1:return Re(n.type)&&Ni(),ye(n),null;case 3:return r=n.stateNode,Ot(),W(Ee),W(Se),Ca(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Qe!==null&&(zo(Qe),Qe=null))),jo(e,n),ye(n),null;case 5:_a(n);var i=Kn(Mr.current);if(t=n.type,e!==null&&n.stateNode!=null)Bd(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(_(166));return ye(n),null}if(e=Kn(tn.current),oi(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[en]=n,r[Dr]=l,e=(n.mode&1)!==0,t){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<fr.length;i++)U(fr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":_s(r,l),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},U("invalid",r);break;case"textarea":Es(r,l),U("invalid",r)}to(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&li(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&li(r.textContent,a,e),i=["children",""+a]):Pr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&U("scroll",r)}switch(t){case"input":Zr(r),Cs(r,l,!0);break;case"textarea":Zr(r),Rs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Di)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[en]=n,e[Dr]=r,Ad(e,n,!1,!1),n.stateNode=e;e:{switch(o=ro(t,r),t){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<fr.length;i++)U(fr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":_s(e,r),i=Zl(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),U("invalid",e);break;case"textarea":Es(e,r),i=eo(e,r),U("invalid",e);break;default:i=r}to(t,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Sc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&yc(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&_r(e,s):typeof s=="number"&&_r(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Pr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&U("scroll",e):s!=null&&na(e,l,s,o))}switch(t){case"input":Zr(e),Cs(e,r,!1);break;case"textarea":Zr(e),Rs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Et(e,!!r.multiple,l,!1):r.defaultValue!=null&&Et(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Di)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ye(n),null;case 6:if(e&&n.stateNode!=null)Ud(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(_(166));if(t=Kn(Mr.current),Kn(tn.current),oi(n)){if(r=n.stateNode,t=n.memoizedProps,r[en]=n,(l=r.nodeValue!==t)&&(e=$e,e!==null))switch(e.tag){case 3:li(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&li(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[en]=n,n.stateNode=r}return ye(n),null;case 13:if(W(K),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&je!==null&&n.mode&1&&!(n.flags&128))od(),Nt(),n.flags|=98560,l=!1;else if(l=oi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(_(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(_(317));l[en]=n}else Nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ye(n),l=!1}else Qe!==null&&(zo(Qe),Qe=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||K.current&1?ae===0&&(ae=3):La())),n.updateQueue!==null&&(n.flags|=4),ye(n),null);case 4:return Ot(),jo(e,n),e===null&&$r(n.stateNode.containerInfo),ye(n),null;case 10:return xa(n.type._context),ye(n),null;case 17:return Re(n.type)&&Ni(),ye(n),null;case 19:if(W(K),l=n.memoizedState,l===null)return ye(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)or(l,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Bi(e),o!==null){for(n.flags|=128,or(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B(K,K.current&1|2),n.child}e=e.sibling}l.tail!==null&&ne()>zt&&(n.flags|=128,r=!0,or(l,!1),n.lanes=4194304)}else{if(!r)if(e=Bi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),or(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!V)return ye(n),null}else 2*ne()-l.renderingStartTime>zt&&t!==1073741824&&(n.flags|=128,r=!0,or(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ne(),n.sibling=null,t=K.current,B(K,r?t&1|2:t&1),n):(ye(n),null);case 22:case 23:return Oa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ie&1073741824&&(ye(n),n.subtreeFlags&6&&(n.flags|=8192)):ye(n),null;case 24:return null;case 25:return null}throw Error(_(156,n.tag))}function Ug(e,n){switch(ha(n),n.tag){case 1:return Re(n.type)&&Ni(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ot(),W(Ee),W(Se),Ca(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return _a(n),null;case 13:if(W(K),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(_(340));Nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(K),null;case 4:return Ot(),null;case 10:return xa(n.type._context),null;case 22:case 23:return Oa(),null;case 24:return null;default:return null}}var ui=!1,ve=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,T=null;function _t(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){J(e,n,r)}else t.current=null}function $o(e,n,t){try{t()}catch(r){J(e,n,r)}}var hu=!1;function Hg(e,n){if(go=ji,e=Qc(),ga(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,u=0,p=0,d=e,h=null;n:for(;;){for(var v;d!==t||i!==0&&d.nodeType!==3||(a=o+i),d!==l||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break n;if(h===t&&++u===i&&(a=o),h===l&&++p===r&&(s=o),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(mo={focusedElem:e,selectionRange:t},ji=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,P=S.memoizedState,m=n.stateNode,f=m.getSnapshotBeforeUpdate(n.elementType===n.type?x:Ve(n.type,x),P);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){J(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return S=hu,hu=!1,S}function xr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&$o(n,t,l)}i=i.next}while(i!==r)}}function sl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function bo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wd(e){var n=e.alternate;n!==null&&(e.alternate=null,Wd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[Dr],delete n[vo],delete n[Eg],delete n[Rg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(Do(e,n,t),e=e.sibling;e!==null;)Do(e,n,t),e=e.sibling}function No(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(No(e,n,t),e=e.sibling;e!==null;)No(e,n,t),e=e.sibling}var fe=null,Ge=!1;function yn(e,n,t){for(t=t.child;t!==null;)Vd(e,n,t),t=t.sibling}function Vd(e,n,t){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(el,t)}catch{}switch(t.tag){case 5:ve||_t(t,n);case 6:var r=fe,i=Ge;fe=null,yn(e,n,t),fe=r,Ge=i,fe!==null&&(Ge?(e=fe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):fe.removeChild(t.stateNode));break;case 18:fe!==null&&(Ge?(e=fe,t=t.stateNode,e.nodeType===8?Nl(e.parentNode,t):e.nodeType===1&&Nl(e,t),Tr(e)):Nl(fe,t.stateNode));break;case 4:r=fe,i=Ge,fe=t.stateNode.containerInfo,Ge=!0,yn(e,n,t),fe=r,Ge=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&$o(t,n,o),i=i.next}while(i!==r)}yn(e,n,t);break;case 1:if(!ve&&(_t(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){J(t,n,a)}yn(e,n,t);break;case 21:yn(e,n,t);break;case 22:t.mode&1?(ve=(r=ve)||t.memoizedState!==null,yn(e,n,t),ve=r):yn(e,n,t);break;default:yn(e,n,t)}}function vu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Wg),n.forEach(function(r){var i=qg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function He(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,Ge=!1;break e;case 3:fe=a.stateNode.containerInfo,Ge=!0;break e;case 4:fe=a.stateNode.containerInfo,Ge=!0;break e}a=a.return}if(fe===null)throw Error(_(160));Vd(l,o,i),fe=null,Ge=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){J(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gd(n,e),n=n.sibling}function Gd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(n,e),Je(e),r&4){try{xr(3,e,e.return),sl(3,e)}catch(x){J(e,e.return,x)}try{xr(5,e,e.return)}catch(x){J(e,e.return,x)}}break;case 1:He(n,e),Je(e),r&512&&t!==null&&_t(t,t.return);break;case 5:if(He(n,e),Je(e),r&512&&t!==null&&_t(t,t.return),e.flags&32){var i=e.stateNode;try{_r(i,"")}catch(x){J(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&gc(i,l),ro(a,o);var u=ro(a,l);for(o=0;o<s.length;o+=2){var p=s[o],d=s[o+1];p==="style"?Sc(i,d):p==="dangerouslySetInnerHTML"?yc(i,d):p==="children"?_r(i,d):na(i,p,d,u)}switch(a){case"input":Jl(i,l);break;case"textarea":mc(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?Et(i,!!l.multiple,v,!1):h!==!!l.multiple&&(l.defaultValue!=null?Et(i,!!l.multiple,l.defaultValue,!0):Et(i,!!l.multiple,l.multiple?[]:"",!1))}i[Dr]=l}catch(x){J(e,e.return,x)}}break;case 6:if(He(n,e),Je(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){J(e,e.return,x)}}break;case 3:if(He(n,e),Je(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(x){J(e,e.return,x)}break;case 4:He(n,e),Je(e);break;case 13:He(n,e),Je(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Na=ne())),r&4&&vu(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(ve=(u=ve)||p,He(n,e),ve=u):He(n,e),Je(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(T=e,p=e.child;p!==null;){for(d=T=p;T!==null;){switch(h=T,v=h.child,h.tag){case 0:case 11:case 14:case 15:xr(4,h,h.return);break;case 1:_t(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(x){J(r,t,x)}}break;case 5:_t(h,h.return);break;case 22:if(h.memoizedState!==null){xu(d);continue}}v!==null?(v.return=h,T=v):xu(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{i=d.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=vc("display",o))}catch(x){J(e,e.return,x)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){J(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:He(n,e),Je(e),r&4&&vu(e);break;case 21:break;default:He(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Hd(t)){var r=t;break e}t=t.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_r(i,""),r.flags&=-33);var l=yu(e);No(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=yu(e);Do(e,a,o);break;default:throw Error(_(161))}}catch(s){J(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vg(e,n,t){T=e,Qd(e)}function Qd(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var i=T,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ui;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||ve;a=ui;var u=ve;if(ui=o,(ve=s)&&!u)for(T=i;T!==null;)o=T,s=o.child,o.tag===22&&o.memoizedState!==null?wu(i):s!==null?(s.return=o,T=s):wu(i);for(;l!==null;)T=l,Qd(l),l=l.sibling;T=i,ui=a,ve=u}Su(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,T=l):Su(e)}}function Su(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ve||sl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ve)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ve(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&ru(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ru(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Tr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ve||n.flags&512&&bo(n)}catch(h){J(n,n.return,h)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function xu(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function wu(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{sl(4,n)}catch(s){J(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){J(n,i,s)}}var l=n.return;try{bo(n)}catch(s){J(n,l,s)}break;case 5:var o=n.return;try{bo(n)}catch(s){J(n,o,s)}}}catch(s){J(n,n.return,s)}if(n===e){T=null;break}var a=n.sibling;if(a!==null){a.return=n.return,T=a;break}T=n.return}}var Gg=Math.ceil,Hi=gn.ReactCurrentDispatcher,ba=gn.ReactCurrentOwner,Ae=gn.ReactCurrentBatchConfig,O=0,de=null,ie=null,pe=0,Ie=0,Ct=Ln(0),ae=0,Fr=null,et=0,ul=0,Da=0,wr=null,_e=null,Na=0,zt=1/0,rn=null,Vi=!1,Mo=null,jn=null,ci=!1,Pn=null,Gi=0,kr=0,Oo=null,ki=-1,Pi=0;function we(){return O&6?ne():ki!==-1?ki:ki=ne()}function $n(e){return e.mode&1?O&2&&pe!==0?pe&-pe:Ig.transition!==null?(Pi===0&&(Pi=$c()),Pi):(e=z,e!==0||(e=window.event,e=e===void 0?16:zc(e.type)),e):1}function Ye(e,n,t,r){if(50<kr)throw kr=0,Oo=null,Error(_(185));Hr(e,t,r),(!(O&2)||e!==de)&&(e===de&&(!(O&2)&&(ul|=t),ae===4&&wn(e,pe)),Te(e,r),t===1&&O===0&&!(n.mode&1)&&(zt=ne()+500,ll&&zn()))}function Te(e,n){var t=e.callbackNode;Ip(e,n);var r=Ii(e,e===de?pe:0);if(r===0)t!==null&&js(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&js(t),n===1)e.tag===0?Tg(ku.bind(null,e)):rd(ku.bind(null,e)),_g(function(){!(O&6)&&zn()}),t=null;else{switch(bc(r)){case 1:t=oa;break;case 4:t=Ic;break;case 16:t=Ti;break;case 536870912:t=jc;break;default:t=Ti}t=nf(t,Kd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Kd(e,n){if(ki=-1,Pi=0,O&6)throw Error(_(327));var t=e.callbackNode;if($t()&&e.callbackNode!==t)return null;var r=Ii(e,e===de?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Qi(e,r);else{n=r;var i=O;O|=2;var l=Xd();(de!==e||pe!==n)&&(rn=null,zt=ne()+500,Yn(e,n));do try{Yg();break}catch(a){Yd(e,a)}while(!0);Sa(),Hi.current=l,O=i,ie!==null?n=0:(de=null,pe=0,n=ae)}if(n!==0){if(n===2&&(i=so(e),i!==0&&(r=i,n=Lo(e,i))),n===1)throw t=Fr,Yn(e,0),wn(e,r),Te(e,ne()),t;if(n===6)wn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qg(i)&&(n=Qi(e,r),n===2&&(l=so(e),l!==0&&(r=l,n=Lo(e,l))),n===1))throw t=Fr,Yn(e,0),wn(e,r),Te(e,ne()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(_(345));case 2:Vn(e,_e,rn);break;case 3:if(wn(e,r),(r&130023424)===r&&(n=Na+500-ne(),10<n)){if(Ii(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yo(Vn.bind(null,e,_e,rn),n);break}Vn(e,_e,rn);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Ke(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gg(r/1960))-r,10<r){e.timeoutHandle=yo(Vn.bind(null,e,_e,rn),r);break}Vn(e,_e,rn);break;case 5:Vn(e,_e,rn);break;default:throw Error(_(329))}}}return Te(e,ne()),e.callbackNode===t?Kd.bind(null,e):null}function Lo(e,n){var t=wr;return e.current.memoizedState.isDehydrated&&(Yn(e,n).flags|=256),e=Qi(e,n),e!==2&&(n=_e,_e=t,n!==null&&zo(n)),e}function zo(e){_e===null?_e=e:_e.push.apply(_e,e)}function Qg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Xe(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wn(e,n){for(n&=~Da,n&=~ul,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ke(n),r=1<<t;e[t]=-1,n&=~r}}function ku(e){if(O&6)throw Error(_(327));$t();var n=Ii(e,0);if(!(n&1))return Te(e,ne()),null;var t=Qi(e,n);if(e.tag!==0&&t===2){var r=so(e);r!==0&&(n=r,t=Lo(e,r))}if(t===1)throw t=Fr,Yn(e,0),wn(e,n),Te(e,ne()),t;if(t===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Vn(e,_e,rn),Te(e,ne()),null}function Ma(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(zt=ne()+500,ll&&zn())}}function nt(e){Pn!==null&&Pn.tag===0&&!(O&6)&&$t();var n=O;O|=1;var t=Ae.transition,r=z;try{if(Ae.transition=null,z=1,e)return e()}finally{z=r,Ae.transition=t,O=n,!(O&6)&&zn()}}function Oa(){Ie=Ct.current,W(Ct)}function Yn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Pg(t)),ie!==null)for(t=ie.return;t!==null;){var r=t;switch(ha(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ni();break;case 3:Ot(),W(Ee),W(Se),Ca();break;case 5:_a(r);break;case 4:Ot();break;case 13:W(K);break;case 19:W(K);break;case 10:xa(r.type._context);break;case 22:case 23:Oa()}t=t.return}if(de=e,ie=e=bn(e.current,null),pe=Ie=n,ae=0,Fr=null,Da=ul=et=0,_e=wr=null,Qn!==null){for(n=0;n<Qn.length;n++)if(t=Qn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Qn=null}return e}function Yd(e,n){do{var t=ie;try{if(Sa(),Si.current=Wi,Ui){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ui=!1}if(qn=0,ce=oe=Y=null,Sr=!1,Or=0,ba.current=null,t===null||t.return===null){ae=1,Fr=n,ie=null;break}e:{var l=e,o=t.return,a=t,s=n;if(n=pe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=uu(o);if(v!==null){v.flags&=-257,cu(v,o,a,l,n),v.mode&1&&su(l,u,n),n=v,s=u;var S=n.updateQueue;if(S===null){var x=new Set;x.add(s),n.updateQueue=x}else S.add(s);break e}else{if(!(n&1)){su(l,u,n),La();break e}s=Error(_(426))}}else if(V&&a.mode&1){var P=uu(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),cu(P,o,a,l,n),ya(Lt(s,a));break e}}l=s=Lt(s,a),ae!==4&&(ae=2),wr===null?wr=[l]:wr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var m=bd(l,s,n);tu(l,m);break e;case 1:a=s;var f=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(jn===null||!jn.has(g)))){l.flags|=65536,n&=-n,l.lanes|=n;var w=Dd(l,a,n);tu(l,w);break e}}l=l.return}while(l!==null)}Jd(t)}catch(E){n=E,ie===t&&t!==null&&(ie=t=t.return);continue}break}while(!0)}function Xd(){var e=Hi.current;return Hi.current=Wi,e===null?Wi:e}function La(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(et&268435455)&&!(ul&268435455)||wn(de,pe)}function Qi(e,n){var t=O;O|=2;var r=Xd();(de!==e||pe!==n)&&(rn=null,Yn(e,n));do try{Kg();break}catch(i){Yd(e,i)}while(!0);if(Sa(),O=t,Hi.current=r,ie!==null)throw Error(_(261));return de=null,pe=0,ae}function Kg(){for(;ie!==null;)Zd(ie)}function Yg(){for(;ie!==null&&!xp();)Zd(ie)}function Zd(e){var n=ef(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,n===null?Jd(e):ie=n,ba.current=null}function Jd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ug(t,n),t!==null){t.flags&=32767,ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ie=null;return}}else if(t=Bg(t,n,Ie),t!==null){ie=t;return}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);ae===0&&(ae=5)}function Vn(e,n,t){var r=z,i=Ae.transition;try{Ae.transition=null,z=1,Xg(e,n,t,r)}finally{Ae.transition=i,z=r}return null}function Xg(e,n,t,r){do $t();while(Pn!==null);if(O&6)throw Error(_(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(jp(e,l),e===de&&(ie=de=null,pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ci||(ci=!0,nf(Ti,function(){return $t(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ae.transition,Ae.transition=null;var o=z;z=1;var a=O;O|=4,ba.current=null,Hg(e,t),Gd(t,e),hg(mo),ji=!!go,mo=go=null,e.current=t,Vg(t),wp(),O=a,z=o,Ae.transition=l}else e.current=t;if(ci&&(ci=!1,Pn=e,Gi=i),l=e.pendingLanes,l===0&&(jn=null),_p(t.stateNode),Te(e,ne()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vi)throw Vi=!1,e=Mo,Mo=null,e;return Gi&1&&e.tag!==0&&$t(),l=e.pendingLanes,l&1?e===Oo?kr++:(kr=0,Oo=e):kr=0,zn(),null}function $t(){if(Pn!==null){var e=bc(Gi),n=Ae.transition,t=z;try{if(Ae.transition=null,z=16>e?16:e,Pn===null)var r=!1;else{if(e=Pn,Pn=null,Gi=0,O&6)throw Error(_(331));var i=O;for(O|=4,T=e.current;T!==null;){var l=T,o=l.child;if(T.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(T=u;T!==null;){var p=T;switch(p.tag){case 0:case 11:case 15:xr(8,p,l)}var d=p.child;if(d!==null)d.return=p,T=d;else for(;T!==null;){p=T;var h=p.sibling,v=p.return;if(Wd(p),p===u){T=null;break}if(h!==null){h.return=v,T=h;break}T=v}}}var S=l.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}T=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,T=o;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:xr(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,T=m;break e}T=l.return}}var f=e.current;for(T=f;T!==null;){o=T;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,T=g;else e:for(o=f;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(E){J(a,a.return,E)}if(a===o){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(O=i,zn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(el,e)}catch{}r=!0}return r}finally{z=t,Ae.transition=n}}return!1}function Pu(e,n,t){n=Lt(t,n),n=bd(e,n,1),e=In(e,n,1),n=we(),e!==null&&(Hr(e,1,n),Te(e,n))}function J(e,n,t){if(e.tag===3)Pu(e,e,t);else for(;n!==null;){if(n.tag===3){Pu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=Lt(t,e),e=Dd(n,e,1),n=In(n,e,1),e=we(),n!==null&&(Hr(n,1,e),Te(n,e));break}}n=n.return}}function Zg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=we(),e.pingedLanes|=e.suspendedLanes&t,de===e&&(pe&t)===t&&(ae===4||ae===3&&(pe&130023424)===pe&&500>ne()-Na?Yn(e,0):Da|=t),Te(e,n)}function qd(e,n){n===0&&(e.mode&1?(n=ei,ei<<=1,!(ei&130023424)&&(ei=4194304)):n=1);var t=we();e=dn(e,n),e!==null&&(Hr(e,n,t),Te(e,t))}function Jg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),qd(e,t)}function qg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(n),qd(e,t)}var ef;ef=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ee.current)Ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ce=!1,Ag(e,n,t);Ce=!!(e.flags&131072)}else Ce=!1,V&&n.flags&1048576&&id(n,Li,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;wi(e,n),e=n.pendingProps;var i=Dt(n,Se.current);jt(n,t),i=Ra(null,n,r,e,i,t);var l=Ta();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Re(r)?(l=!0,Mi(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ka(n),i.updater=al,n.stateNode=i,i._reactInternals=n,_o(n,r,e,t),n=Ro(null,n,r,!0,l,t)):(n.tag=0,V&&l&&ma(n),xe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(wi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=nm(r),e=Ve(r,e),i){case 0:n=Eo(null,n,r,e,t);break e;case 1:n=pu(null,n,r,e,t);break e;case 11:n=du(null,n,r,e,t);break e;case 14:n=fu(null,n,r,Ve(r.type,e),t);break e}throw Error(_(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ve(r,i),Eo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ve(r,i),pu(e,n,r,i,t);case 3:e:{if(Ld(n),e===null)throw Error(_(387));r=n.pendingProps,l=n.memoizedState,i=l.element,cd(e,n),Ai(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Lt(Error(_(423)),n),n=gu(e,n,r,t,i);break e}else if(r!==i){i=Lt(Error(_(424)),n),n=gu(e,n,r,t,i);break e}else for(je=Tn(n.stateNode.containerInfo.firstChild),$e=n,V=!0,Qe=null,t=sd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Nt(),r===i){n=fn(e,n,t);break e}xe(e,n,r,t)}n=n.child}return n;case 5:return dd(n),e===null&&wo(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,ho(r,i)?o=null:l!==null&&ho(r,l)&&(n.flags|=32),Od(e,n),xe(e,n,o,t),n.child;case 6:return e===null&&wo(n),null;case 13:return zd(e,n,t);case 4:return Pa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Mt(n,null,r,t):xe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ve(r,i),du(e,n,r,i,t);case 7:return xe(e,n,n.pendingProps,t),n.child;case 8:return xe(e,n,n.pendingProps.children,t),n.child;case 12:return xe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,B(zi,r._currentValue),r._currentValue=o,l!==null)if(Xe(l.value,o)){if(l.children===i.children&&!Ee.current){n=fn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=sn(-1,t&-t),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),ko(l.return,t,n),a.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(_(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),ko(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}xe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,jt(n,t),i=Be(i),r=r(i),n.flags|=1,xe(e,n,r,t),n.child;case 14:return r=n.type,i=Ve(r,n.pendingProps),i=Ve(r.type,i),fu(e,n,r,i,t);case 15:return Nd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ve(r,i),wi(e,n),n.tag=1,Re(r)?(e=!0,Mi(n)):e=!1,jt(n,t),$d(n,r,i),_o(n,r,i,t),Ro(null,n,r,!0,e,t);case 19:return Fd(e,n,t);case 22:return Md(e,n,t)}throw Error(_(156,n.tag))};function nf(e,n){return Tc(e,n)}function em(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,n,t,r){return new em(e,n,t,r)}function za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nm(e){if(typeof e=="function")return za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ra)return 11;if(e===ia)return 14}return 2}function bn(e,n){var t=e.alternate;return t===null?(t=ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _i(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")za(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case mt:return Xn(t.children,i,l,n);case ta:o=8,i|=8;break;case Ql:return e=ze(12,t,n,i|2),e.elementType=Ql,e.lanes=l,e;case Kl:return e=ze(13,t,n,i),e.elementType=Kl,e.lanes=l,e;case Yl:return e=ze(19,t,n,i),e.elementType=Yl,e.lanes=l,e;case dc:return cl(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uc:o=10;break e;case cc:o=9;break e;case ra:o=11;break e;case ia:o=14;break e;case vn:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return n=ze(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Xn(e,n,t,r){return e=ze(7,e,r,n),e.lanes=t,e}function cl(e,n,t,r){return e=ze(22,e,r,n),e.elementType=dc,e.lanes=t,e.stateNode={isHidden:!1},e}function Ul(e,n,t){return e=ze(6,e,null,n),e.lanes=t,e}function Wl(e,n,t){return n=ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function tm(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fa(e,n,t,r,i,l,o,a,s){return e=new tm(e,n,t,a,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=ze(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ka(l),e}function rm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function tf(e){if(!e)return Mn;e=e._reactInternals;e:{if(ot(e)!==e||e.tag!==1)throw Error(_(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Re(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(_(171))}if(e.tag===1){var t=e.type;if(Re(t))return td(e,t,n)}return n}function rf(e,n,t,r,i,l,o,a,s){return e=Fa(t,r,!0,e,i,l,o,a,s),e.context=tf(null),t=e.current,r=we(),i=$n(t),l=sn(r,i),l.callback=n??null,In(t,l,i),e.current.lanes=i,Hr(e,i,r),Te(e,r),e}function dl(e,n,t,r){var i=n.current,l=we(),o=$n(i);return t=tf(t),n.context===null?n.context=t:n.pendingContext=t,n=sn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=In(i,n,o),e!==null&&(Ye(e,i,o,l),vi(e,i,o)),o}function Ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Aa(e,n){_u(e,n),(e=e.alternate)&&_u(e,n)}function im(){return null}var lf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ba(e){this._internalRoot=e}fl.prototype.render=Ba.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(_(409));dl(e,n,null,null)};fl.prototype.unmount=Ba.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;nt(function(){dl(null,e,null,null)}),n[cn]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Mc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<xn.length&&n!==0&&n<xn[t].priority;t++);xn.splice(t,0,e),t===0&&Lc(e)}};function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cu(){}function lm(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=Ki(o);l.call(u)}}var o=rf(n,r,e,0,null,!1,!1,"",Cu);return e._reactRootContainer=o,e[cn]=o.current,$r(e.nodeType===8?e.parentNode:e),nt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ki(s);a.call(u)}}var s=Fa(e,0,!1,null,null,!1,!1,"",Cu);return e._reactRootContainer=s,e[cn]=s.current,$r(e.nodeType===8?e.parentNode:e),nt(function(){dl(n,s,t,r)}),s}function gl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Ki(o);a.call(s)}}dl(n,o,e,i)}else o=lm(t,n,e,i,r);return Ki(o)}Dc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=dr(n.pendingLanes);t!==0&&(aa(n,t|1),Te(n,ne()),!(O&6)&&(zt=ne()+500,zn()))}break;case 13:nt(function(){var r=dn(e,1);if(r!==null){var i=we();Ye(r,e,1,i)}}),Aa(e,1)}};sa=function(e){if(e.tag===13){var n=dn(e,134217728);if(n!==null){var t=we();Ye(n,e,134217728,t)}Aa(e,134217728)}};Nc=function(e){if(e.tag===13){var n=$n(e),t=dn(e,n);if(t!==null){var r=we();Ye(t,e,n,r)}Aa(e,n)}};Mc=function(){return z};Oc=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};lo=function(e,n,t){switch(n){case"input":if(Jl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=il(r);if(!i)throw Error(_(90));pc(r),Jl(r,i)}}}break;case"textarea":mc(e,t);break;case"select":n=t.value,n!=null&&Et(e,!!t.multiple,n,!1)}};kc=Ma;Pc=nt;var om={usingClientEntryPoint:!1,Events:[Gr,St,il,xc,wc,Ma]},ar={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},am={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ec(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||im,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!di.isDisabled&&di.supportsFiber)try{el=di.inject(am),nn=di}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=om;Ne.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ua(n))throw Error(_(200));return rm(e,n,null,t)};Ne.createRoot=function(e,n){if(!Ua(e))throw Error(_(299));var t=!1,r="",i=lf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Fa(e,1,!1,null,null,t,!1,r,i),e[cn]=n.current,$r(e.nodeType===8?e.parentNode:e),new Ba(n)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Ec(n),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return nt(e)};Ne.hydrate=function(e,n,t){if(!pl(n))throw Error(_(200));return gl(null,e,n,!0,t)};Ne.hydrateRoot=function(e,n,t){if(!Ua(e))throw Error(_(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=lf;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=rf(n,null,e,1,t??null,i,!1,l,o),e[cn]=n.current,$r(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new fl(n)};Ne.render=function(e,n,t){if(!pl(n))throw Error(_(200));return gl(null,e,n,!1,t)};Ne.unmountComponentAtNode=function(e){if(!pl(e))throw Error(_(40));return e._reactRootContainer?(nt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};Ne.unstable_batchedUpdates=Ma;Ne.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!pl(t))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return gl(e,n,t,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function of(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(of)}catch(e){console.error(e)}}of(),lc.exports=Ne;var Yi=lc.exports,af,Eu=Yi;af=Vl.createRoot=Eu.createRoot,Vl.hydrateRoot=Eu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ar(){return Ar=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ar.apply(null,arguments)}var _n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_n||(_n={}));const Ru="popstate";function sm(e){e===void 0&&(e={});function n(i,l){let{pathname:o="/",search:a="",hash:s=""}=at(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Fo("",{pathname:o,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(i,l){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof l=="string"?l:Xi(l))}function r(i,l){Wa(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return cm(n,t,r,e)}function te(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Wa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function um(){return Math.random().toString(36).substr(2,8)}function Tu(e,n){return{usr:e.state,key:e.key,idx:n}}function Fo(e,n,t,r){return t===void 0&&(t=null),Ar({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?at(n):n,{state:t,key:n&&n.key||r||um()})}function Xi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function at(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function cm(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,a=_n.Pop,s=null,u=p();u==null&&(u=0,o.replaceState(Ar({},o.state,{idx:u}),""));function p(){return(o.state||{idx:null}).idx}function d(){a=_n.Pop;let P=p(),m=P==null?null:P-u;u=P,s&&s({action:a,location:x.location,delta:m})}function h(P,m){a=_n.Push;let f=Fo(x.location,P,m);t&&t(f,P),u=p()+1;let g=Tu(f,u),w=x.createHref(f);try{o.pushState(g,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(w)}l&&s&&s({action:a,location:x.location,delta:1})}function v(P,m){a=_n.Replace;let f=Fo(x.location,P,m);t&&t(f,P),u=p();let g=Tu(f,u),w=x.createHref(f);o.replaceState(g,"",w),l&&s&&s({action:a,location:x.location,delta:0})}function S(P){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof P=="string"?P:Xi(P);return f=f.replace(/ $/,"%20"),te(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let x={get action(){return a},get location(){return e(i,o)},listen(P){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Ru,d),s=P,()=>{i.removeEventListener(Ru,d),s=null}},createHref(P){return n(i,P)},createURL:S,encodeLocation(P){let m=S(P);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(P){return o.go(P)}};return x}var Iu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Iu||(Iu={}));function dm(e,n,t){return t===void 0&&(t="/"),fm(e,n,t)}function fm(e,n,t,r){let i=typeof n=="string"?at(n):n,l=Ha(i.pathname||"/",t);if(l==null)return null;let o=sf(e);pm(o);let a=null,s=Cm(l);for(let u=0;a==null&&u<o.length;++u)a=km(o[u],s);return a}function sf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,o,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Dn([r,s.relativePath]),p=t.concat(s);l.children&&l.children.length>0&&(te(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sf(l.children,n,p,u)),!(l.path==null&&!l.index)&&n.push({path:u,score:xm(u,l.index),routesMeta:p})};return e.forEach((l,o)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,o);else for(let s of uf(l.path))i(l,o,s)}),n}function uf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=uf(r.join("/")),a=[];return a.push(...o.map(s=>s===""?l:[l,s].join("/"))),i&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function pm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:wm(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const gm=/^:[\w-]+$/,mm=3,hm=2,ym=1,vm=10,Sm=-2,ju=e=>e==="*";function xm(e,n){let t=e.split("/"),r=t.length;return t.some(ju)&&(r+=Sm),n&&(r+=hm),t.filter(i=>!ju(i)).reduce((i,l)=>i+(gm.test(l)?mm:l===""?ym:vm),r)}function wm(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function km(e,n,t){let{routesMeta:r}=e,i={},l="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,p=l==="/"?n:n.slice(l.length)||"/",d=Pm({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p),h=s.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Dn([l,d.pathname]),pathnameBase:Tm(Dn([l,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(l=Dn([l,d.pathnameBase]))}return o}function Pm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=_m(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,p,d)=>{let{paramName:h,isOptional:v}=p;if(h==="*"){let x=a[d]||"";o=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const S=a[d];return v&&!S?u[h]=void 0:u[h]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function _m(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Wa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function Cm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Wa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ha(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Em(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?at(e):e,l;return t?(t=cf(t),t.startsWith("/")?l=$u(t.substring(1),"/"):l=$u(t,n)):l=n,{pathname:l,search:Im(r),hash:jm(i)}}function $u(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Hl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Va(e,n){let t=Rm(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Ga(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=at(e):(i=Ar({},e),te(!i.pathname||!i.pathname.includes("?"),Hl("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),Hl("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),Hl("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,a;if(o==null)a=t;else{let d=n.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?n[d]:"/"}let s=Em(i,a),u=o&&o!=="/"&&o.endsWith("/"),p=(l||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}const cf=e=>e.replace(/\/\/+/g,"/"),Dn=e=>cf(e.join("/")),Tm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Im=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $m(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const df=["post","put","patch","delete"];new Set(df);const bm=["get",...df];new Set(bm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Br.apply(null,arguments)}const Qa=y.createContext(null),Dm=y.createContext(null),Fn=y.createContext(null),ml=y.createContext(null),mn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),ff=y.createContext(null);function Nm(e,n){let{relative:t}=n===void 0?{}:n;Ut()||te(!1);let{basename:r,navigator:i}=y.useContext(Fn),{hash:l,pathname:o,search:a}=mf(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:Dn([r,o])),i.createHref({pathname:s,search:a,hash:l})}function Ut(){return y.useContext(ml)!=null}function Wt(){return Ut()||te(!1),y.useContext(ml).location}function pf(e){y.useContext(Fn).static||y.useLayoutEffect(e)}function gf(){let{isDataRoute:e}=y.useContext(mn);return e?Km():Mm()}function Mm(){Ut()||te(!1);let e=y.useContext(Qa),{basename:n,future:t,navigator:r}=y.useContext(Fn),{matches:i}=y.useContext(mn),{pathname:l}=Wt(),o=JSON.stringify(Va(i,t.v7_relativeSplatPath)),a=y.useRef(!1);return pf(()=>{a.current=!0}),y.useCallback(function(u,p){if(p===void 0&&(p={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Ga(u,JSON.parse(o),l,p.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Dn([n,d.pathname])),(p.replace?r.replace:r.push)(d,p.state,p)},[n,r,o,l,e])}function Om(){let{matches:e}=y.useContext(mn),n=e[e.length-1];return n?n.params:{}}function mf(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=y.useContext(Fn),{matches:i}=y.useContext(mn),{pathname:l}=Wt(),o=JSON.stringify(Va(i,r.v7_relativeSplatPath));return y.useMemo(()=>Ga(e,JSON.parse(o),l,t==="path"),[e,o,l,t])}function Lm(e,n){return zm(e,n)}function zm(e,n,t,r){Ut()||te(!1);let{navigator:i}=y.useContext(Fn),{matches:l}=y.useContext(mn),o=l[l.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Wt(),p;if(n){var d;let P=typeof n=="string"?at(n):n;s==="/"||(d=P.pathname)!=null&&d.startsWith(s)||te(!1),p=P}else p=u;let h=p.pathname||"/",v=h;if(s!=="/"){let P=s.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(P.length).join("/")}let S=dm(e,{pathname:v}),x=Wm(S&&S.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:Dn([s,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?s:Dn([s,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,t,r);return n&&x?y.createElement(ml.Provider,{value:{location:Br({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:_n.Pop}},x):x}function Fm(){let e=Qm(),n=$m(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:i},t):null,null)}const Am=y.createElement(Fm,null);class Bm extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(mn.Provider,{value:this.props.routeContext},y.createElement(ff.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Um(e){let{routeContext:n,match:t,children:r}=e,i=y.useContext(Qa);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(mn.Provider,{value:n},r)}function Wm(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,a=(i=t)==null?void 0:i.errors;if(a!=null){let p=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);p>=0||te(!1),o=o.slice(0,Math.min(o.length,p+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let d=o[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=p),d.route.id){let{loaderData:h,errors:v}=t,S=d.route.loader&&h[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||S){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((p,d,h)=>{let v,S=!1,x=null,P=null;t&&(v=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||Am,s&&(u<0&&h===0?(Ym("route-fallback"),S=!0,P=null):u===h&&(S=!0,P=d.route.hydrateFallbackElement||null)));let m=n.concat(o.slice(0,h+1)),f=()=>{let g;return v?g=x:S?g=P:d.route.Component?g=y.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=p,y.createElement(Um,{match:d,routeContext:{outlet:p,matches:m,isDataRoute:t!=null},children:g})};return t&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?y.createElement(Bm,{location:t.location,revalidation:t.revalidation,component:x,error:v,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var hf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hf||{}),yf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(yf||{});function Hm(e){let n=y.useContext(Qa);return n||te(!1),n}function Vm(e){let n=y.useContext(Dm);return n||te(!1),n}function Gm(e){let n=y.useContext(mn);return n||te(!1),n}function vf(e){let n=Gm(),t=n.matches[n.matches.length-1];return t.route.id||te(!1),t.route.id}function Qm(){var e;let n=y.useContext(ff),t=Vm(),r=vf();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Km(){let{router:e}=Hm(hf.UseNavigateStable),n=vf(yf.UseNavigateStable),t=y.useRef(!1);return pf(()=>{t.current=!0}),y.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Br({fromRouteId:n},l)))},[e,n])}const bu={};function Ym(e,n,t){bu[e]||(bu[e]=!0)}function Xm(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ao(e){let{to:n,replace:t,state:r,relative:i}=e;Ut()||te(!1);let{future:l,static:o}=y.useContext(Fn),{matches:a}=y.useContext(mn),{pathname:s}=Wt(),u=gf(),p=Ga(n,Va(a,l.v7_relativeSplatPath),s,i==="path"),d=JSON.stringify(p);return y.useEffect(()=>u(JSON.parse(d),{replace:t,state:r,relative:i}),[u,d,i,t,r]),null}function pr(e){te(!1)}function Zm(e){let{basename:n="/",children:t=null,location:r,navigationType:i=_n.Pop,navigator:l,static:o=!1,future:a}=e;Ut()&&te(!1);let s=n.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:s,navigator:l,static:o,future:Br({v7_relativeSplatPath:!1},a)}),[s,a,l,o]);typeof r=="string"&&(r=at(r));let{pathname:p="/",search:d="",hash:h="",state:v=null,key:S="default"}=r,x=y.useMemo(()=>{let P=Ha(p,s);return P==null?null:{location:{pathname:P,search:d,hash:h,state:v,key:S},navigationType:i}},[s,p,d,h,v,S,i]);return x==null?null:y.createElement(Fn.Provider,{value:u},y.createElement(ml.Provider,{children:t,value:x}))}function Jm(e){let{children:n,location:t}=e;return Lm(Bo(n),t)}new Promise(()=>{});function Bo(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let l=[...n,i];if(r.type===y.Fragment){t.push.apply(t,Bo(r.props.children,l));return}r.type!==pr&&te(!1),!r.props.index||!r.props.children||te(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bo(r.props.children,l)),t.push(o)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Uo.apply(null,arguments)}function qm(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function eh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nh(e,n){return e.button===0&&(!n||n==="_self")&&!eh(e)}const th=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rh="6";try{window.__reactRouterVersion=rh}catch{}const ih="startTransition",Du=Zf[ih];function lh(e){let{basename:n,children:t,future:r,window:i}=e,l=y.useRef();l.current==null&&(l.current=sm({window:i,v5Compat:!0}));let o=l.current,[a,s]=y.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},p=y.useCallback(d=>{u&&Du?Du(()=>s(d)):s(d)},[s,u]);return y.useLayoutEffect(()=>o.listen(p),[o,p]),y.useEffect(()=>Xm(r),[r]),y.createElement(Zm,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:o,future:r})}const oh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wo=y.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:a,target:s,to:u,preventScrollReset:p,viewTransition:d}=n,h=qm(n,th),{basename:v}=y.useContext(Fn),S,x=!1;if(typeof u=="string"&&ah.test(u)&&(S=u,oh))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),E=Ha(w.pathname,v);w.origin===g.origin&&E!=null?u=E+w.search+w.hash:x=!0}catch{}let P=Nm(u,{relative:i}),m=sh(u,{replace:o,state:a,target:s,preventScrollReset:p,relative:i,viewTransition:d});function f(g){r&&r(g),g.defaultPrevented||m(g)}return y.createElement("a",Uo({},h,{href:S||P,onClick:x||l?r:f,ref:t,target:s}))});var Nu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nu||(Nu={}));var Mu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mu||(Mu={}));function sh(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:a}=n===void 0?{}:n,s=gf(),u=Wt(),p=mf(e,{relative:o});return y.useCallback(d=>{if(nh(d,t)){d.preventDefault();let h=r!==void 0?r:Xi(u)===Xi(p);s(e,{replace:h,state:i,preventScrollReset:l,relative:o,viewTransition:a})}},[u,s,p,r,i,t,e,l,o,a])}const uh="https://github.com/frankvane/vane-components";class ch extends Wr.Component{constructor(){super(...arguments);ys(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?c.jsxs("div",{className:"crash",role:"alert",children:[c.jsx("h3",{children:"这个页面炸了"}),c.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),c.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Sf(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function dh({demos:e,pathname:n}){var s;const{groups:t,entries:r,label:i}=e,l=(s=r.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:s.meta.group,[o,a]=y.useState(()=>{var p;const u=(p=t[0])==null?void 0:p.key;return Object.fromEntries(t.map(d=>[d.key,d.key===(l??u)]))});return y.useEffect(()=>{l&&a(u=>u[l]?u:{...u,[l]:!0})},[l]),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-head",children:[c.jsx("span",{children:i}),c.jsxs("code",{children:[r.length," demos"]})]}),t.map(u=>{const p=r.filter(h=>h.meta.group===u.key);if(p.length===0)return null;const d=o[u.key]??!1;return c.jsxs("div",{className:"nav-group",children:[c.jsxs("button",{type:"button",className:`nav-group-head${l===u.key?" is-current":""}`,onClick:()=>a(h=>({...h,[u.key]:!d})),"aria-expanded":d,children:[c.jsx("span",{className:`nav-caret${d?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,c.jsx("code",{children:p.length})]}),d?c.jsx("div",{className:"nav-list",children:p.map(h=>c.jsxs(Wo,{to:`/demo/${h.meta.slug}`,className:`nav-sub${n===`/demo/${h.meta.slug}`?" is-active":""}`,children:[c.jsx("em",{"aria-hidden":!0,children:Sf(e,h)}),h.meta.title]},h.meta.slug))}):null]},u.key)})]})}function fh({demos:e}){var a;const{slug:n}=Om(),{entries:t,detail:r}=e,i=n?t.find(s=>s.meta.slug===n):void 0,l=(a=t[0])==null?void 0:a.meta.slug;if(!i)return c.jsx(Ao,{to:l?`/demo/${l}`:"/",replace:!0});const o=t.indexOf(i)+1;return c.jsx(Wr.Fragment,{children:r(i,o)},i.meta.slug)}function ph({config:e}){var d,h;const{pathname:n}=Wt(),[t,r]=y.useState(!1),[i,l]=y.useState(!1);y.useEffect(()=>r(!1),[n]);const o=y.useCallback(()=>l(v=>!v),[]);y.useEffect(()=>{const v=S=>{const x=S.target,P=x&&(x.tagName==="INPUT"||x.tagName==="TEXTAREA"||x.isContentEditable);S.key==="Escape"&&r(!1),!P&&(S.key==="g"||S.key==="G")&&!S.metaKey&&!S.ctrlKey&&l(m=>!m)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]);const a=e.demos,s=(d=a.entries[0])==null?void 0:d.meta.slug,u=y.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const v=n.replace(/^\/demo\/?/,""),S=a.entries.find(x=>x.meta.slug===v);return S?`demo ${Sf(a,S)} · ${S.meta.title}`:"demo · 逐项示例"},[n,e,a]),p=y.useMemo(()=>e.nav.map((v,S)=>({...v,no:String(S+1).padStart(2,"0")})),[e.nav]);return c.jsxs("div",{className:`shell${t?" is-nav-open":""}${i?" is-guides":""}`,children:[c.jsx("a",{className:"skip-link",href:"#main",onClick:v=>{v.preventDefault();const S=document.getElementById("main");S==null||S.setAttribute("tabindex","-1"),S==null||S.focus(),S==null||S.scrollIntoView({block:"start"})},children:"跳到内容"}),c.jsxs("aside",{className:"side","aria-label":"站点导航",children:[c.jsxs(Wo,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),c.jsxs("span",{children:[c.jsx("strong",{children:e.pkg}),c.jsx("em",{children:e.subtitle})]})]}),c.jsxs("nav",{children:[p.map(v=>c.jsxs(Wo,{to:v.to,className:`nav-item${n===v.to?" is-active":""}`,"aria-current":n===v.to?"page":void 0,children:[c.jsx("em",{"aria-hidden":!0,children:v.no}),c.jsx("span",{children:v.label}),v.hint?c.jsx("code",{children:v.hint}):null]},v.to)),c.jsx(dh,{demos:e.demos,pathname:n})]}),c.jsxs("div",{className:"side-foot",children:[c.jsx("p",{children:e.footer[0]}),c.jsx("p",{className:"muted",children:e.footer[1]})]})]}),c.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),c.jsxs("div",{className:"main",id:"main",children:[c.jsxs("header",{className:"topbar",children:[c.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(v=>!v),children:c.jsx("span",{"aria-hidden":!0})}),c.jsx("span",{className:"crumb",children:u}),c.jsxs("div",{className:"topbar-right",children:[(h=e.stats)==null?void 0:h.map(v=>c.jsxs("span",{className:"topbar-stat",title:v.title,children:[c.jsx("b",{children:v.value})," ",v.label]},v.label)),c.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":i,onClick:o,title:"显示栏位参考线（快捷键 G）",children:[c.jsx("i",{"aria-hidden":!0}),"guides"]}),c.jsx("a",{className:"topbar-link",href:e.sourceUrl??uh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),c.jsx("div",{className:"guides","aria-hidden":!0}),c.jsx(y.Suspense,{fallback:c.jsx("div",{className:"loading",children:"loading modules…"}),children:c.jsx(ch,{children:c.jsxs(Jm,{children:[e.routes.map(v=>c.jsx(pr,{path:v.path,element:v.element},v.path)),c.jsx(pr,{path:"/demo",element:c.jsx(Ao,{to:s?`/demo/${s}`:"/",replace:!0})}),c.jsx(pr,{path:"/demo/:slug",element:c.jsx(fh,{demos:e.demos})}),c.jsx(pr,{path:"*",element:c.jsx(Ao,{to:"/",replace:!0})})]})})})]})]})}function gh({config:e}){return c.jsx(lh,{children:c.jsx(ph,{config:e})})}const mh="modulepreload",hh=function(e,n){return new URL(e,n).href},Ou={},Ka=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=hh(u,r),u in Ou)return;Ou[u]=!0;const p=u.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(!!r)for(let S=o.length-1;S>=0;S--){const x=o[S];if(x.href===u&&(!p||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":mh,p||(v.as="script"),v.crossOrigin="",v.href=u,s&&v.setAttribute("nonce",s),document.head.appendChild(v),p)return new Promise((S,x)=>{v.addEventListener("load",S),v.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&l(a.reason);return n().catch(l)})};function yh(){const e=new Map,n=new Map;let t=0;const r=(a,s)=>{const u=e.get(a);if(u){if(t>=50){console.warn(`[PluginBus] emit depth exceeded: "${a}"`);return}t+=1;for(const p of[...u])try{p(s)}catch(d){console.warn(`[PluginBus] handler error for event "${a}"`,d)}t-=1}},i=(a,s)=>{let u=e.get(a);u||(u=new Set,e.set(a,u));const p=s;return u.add(p),()=>{u==null||u.delete(p)}},l=(a,s)=>{const u=p=>{try{s(p)}finally{o(a,u)}};return i(a,u)},o=(a,s)=>{var u;if(!s){e.delete(a);return}(u=e.get(a))==null||u.delete(s)};return{emit:r,on:i,once:l,off:o,getData:a=>n.get(a),setData:(a,s)=>{const u=n.get(a);n.set(a,s),u!==s&&r(a,s)},deleteData:a=>{const s=n.has(a);n.delete(a),s&&r(a,void 0)},hasData:a=>n.has(a),getAll:()=>{const a=Object.create(null);return n.forEach((s,u)=>{a[u]=s}),a},clear:()=>{e.clear(),n.clear()}}}function vh(e){const n=new Map(e.map(a=>[a.name,a])),t=[];for(const a of e)for(const s of a.dependencies??[])n.has(s)||t.push(`${a.name} -> ${s}`);const r=[],i=new Set,l=[...e],o=a=>(a.dependencies??[]).every(s=>i.has(s)||!n.has(s));for(;l.length>0;){const a=l.filter(o);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${l.map(u=>u.name).join(" <-> ")}`);let s=a[0];for(const u of a)(u.priority??0)>(s.priority??0)&&(s=u);r.push(s),i.add(s.name),l.splice(l.indexOf(s),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}function xf(e,n){try{return vh(e)}catch(t){return n==null||n(t),e}}async function Sh(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:i="unknown"}=n;if(!t||t<=0)return await e();let l;const o=new Promise((a,s)=>{l=setTimeout(()=>{s(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${i} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),o])}finally{l&&clearTimeout(l)}}const xh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function wh(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,i=[];let l=[];const o=new Map,a=new Map,s=new Set;let u=0,p=null,d=0;const h=(k,C,M)=>{i.push({plugin:k,hook:C,error:M})},v=()=>{u+=1,p=null},S=(k,C=new Set)=>k.enabled===!1?!1:C.has(k.name)?!0:(C.add(k.name),(k.dependencies??[]).every(M=>{const ee=o.get(M);return!ee||S(ee,C)})),x=()=>{if(p)return p;const k=[...o.values()].filter(C=>S(C)?!0:(h(C.name,"dependencies",new Error("依赖已停用")),!1));return p=xf(k,C=>h("[order]","resolveDependencyOrder",C))},P=k=>{const C=l.filter(([M])=>!k||M===k).reverse();l=k?l.filter(([M])=>M!==k):[];for(const[,M]of C)try{M()}catch(ee){n.warn("[vane] cleanup failed",ee)}},m=k=>{var C;return Promise.resolve((C=k.destroy)==null?void 0:C.call(k)).catch(M=>n.warn(`[vane] destroy failed: ${k.name}`,M))},f=async(k,C,M,ee,L)=>{var Ze,R;const le=C==="onUnmount";if(C==="onMount"||le){if(s.has(k.name)!==le)return{};le?s.delete(k.name):s.add(k.name)}const hn=(Ze=k.hooks)==null?void 0:Ze[C];if(typeof hn!="function")return{};let We;try{const b=()=>hn(M,...ee);We=k.sandbox??t?await Sh(b,{timeout:k.timeout??r,name:k.name,hook:C}):await b()}catch(b){return L!==u?{}:(h(k.name,C,b),n.warn(`[vane] ${C} failed: ${k.name}`,b),(R=e.onError)==null||R.call(e,k.name,C,b),{stop:C==="onError"})}return L!==u?{}:xh.has(C)&&typeof We=="function"?(l.push([k.name,We]),{}):{value:We}},g=async(k,C,M)=>{const ee=u;for(const L of x()){if(ee!==u)return;const le=await f(L,k,C,M,ee);if(le.stop)return;if(le.value===!1)return!1;if(le.value!==void 0&&le.value!==!0)return le.value}},w=(k,C,...M)=>g(k,C,M),E=k=>{o.get(k.name)&&a.get(k.name)!==k&&(n.warn(`[vane] duplicate plugin, destroy old: ${k.name}`),$(k.name)),o.set(k.name,{...k,enabled:k.enabled??!0}),a.set(k.name,k),s.delete(k.name),v(),k.init&&Promise.resolve(k.init()).catch(C=>{n.warn(`[vane] init failed: ${k.name}`,C)})},j=k=>k.forEach(E),I=k=>{o.delete(k),a.delete(k),s.delete(k),p=null},$=k=>{const C=o.get(k);C&&(v(),P(k),m(C),I(k))};return{register:E,registerAll:j,unregister:$,getPlugin:k=>o.get(k),getAllPlugins:()=>[...o.values()],getEnabledPlugins:()=>[...o.values()].filter(k=>k.enabled!==!1),getExecutionOrder:()=>[...x()],enable:k=>{const C=o.get(k);C&&(C.enabled=!0,p=null)},disable:k=>{const C=o.get(k);C&&(C.enabled=!1,p=null)},has:k=>o.has(k),executeHook:w,clear:()=>{v(),d+=1,P();const k=[...o.values()].map(m);return o.clear(),a.clear(),s.clear(),Promise.all(k).then(()=>{})},getErrors:()=>[...i],align:async(k,C)=>{const M=++d,ee=new Map(k.map(L=>[L.name,L]));for(const L of[...o.keys()]){if(M!==d)return;if(a.get(L)===ee.get(L))continue;const le=o.get(L);v(),await f(le,"onUnmount",C,[],u),P(L),await m(le),I(L)}for(const L of k){if(M!==d)return;a.get(L.name)!==L&&E(L)}},peekOrder:x}}var kh=Object.defineProperty,Ph=(e,n,t)=>n in e?kh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,_h=(e,n,t)=>Ph(e,n+"",t);class Ya extends Wr.Component{constructor(){super(...arguments),_h(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidUpdate(n){var i,l;const t=n.resetKeys??[],r=this.props.resetKeys??[];this.state.error&&(t.length!==r.length||t.some((o,a)=>!Object.is(o,r[a])))&&((l=(i=this.props).onReset)==null||l.call(i),this.setState({error:null}))}componentDidCatch(n,t){var r,i;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(i=(r=this.props).onError)==null||i.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let fi=null;function Ch(e=!1){if(fi&&!e)return fi;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,i=typeof navigator<"u"&&navigator.userAgent||"",l=/iPad|Tablet/i.test(i),o=/Mobile|Android|iPhone/i.test(i),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return fi={type:l?"tablet":o?"mobile":"desktop",os:i,browser:i,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:a,isRetina:r>=2},fi}function Lu(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),r=Object.keys(n);return t.length!==r.length?!1:t.every(i=>Object.is(e[i],n[i]))}function Eh(e){const{plugins:n,props:t,data:r,initialState:i,containerRef:l,enableDebug:o=!1,managerOptions:a,extendContext:s}=e,u=y.useRef(null),p=l??u,d=y.useRef(null);d.current||(d.current=wh(a));const h=d.current,v=y.useRef(null);v.current||(v.current=yh());const S=v.current,x=y.useRef(new Map),[P,m]=y.useState(i??{}),[,f]=y.useState(0),g=y.useCallback(()=>f(F=>F+1),[]),w=y.useMemo(()=>Ch(),[]),E=y.useRef(t);Lu(E.current,t)||(E.current=t);const j=E.current,I=y.useRef(r);Lu(I.current,r)||(I.current=r);const $=I.current,k=y.useRef(null),C=y.useMemo(()=>{const F={props:j,data:$,bus:S,refs:{container:p,getContainer:()=>p.current},state:P,setState:A=>m(se=>({...se,...A})),shared:x.current,deviceInfo:w,forceUpdate:g,getSize:()=>{const A=p.current;return A?{width:A.offsetWidth,height:A.offsetHeight}:{width:0,height:0}},logger:console};return s?s(F):F},[j,$,P,w,S,s]);y.useLayoutEffect(()=>{k.current=C},[C]);const M=y.useRef(n),ee=M.current;ee!==n&&(ee.length!==n.length||n.some((F,A)=>F!==ee[A]))&&(M.current=n);const L=M.current,le=y.useRef(0);y.useLayoutEffect(()=>{const F=++le.current,A=k.current;return h.align(L,A).then(()=>{le.current===F&&(o&&console.debug("[vane/plugin-core] plugins registered:",L.map(se=>se.name).join("|")),h.executeHook("onMount",A))}),()=>{le.current+=1}},[L,h,o]),y.useLayoutEffect(()=>()=>{const F=k.current;if(!h.getExecutionOrder().some(A=>{var se;return typeof((se=A.hooks)==null?void 0:se.onUnmount)=="function"})){h.clear();return}h.executeHook("onUnmount",F).finally(()=>h.clear())},[h]);const hn=h.peekOrder(),We=y.useRef([]),Ze=y.useMemo(()=>{const F=new Map(L.map(ue=>[ue.name,ue])),A=L.filter(ue=>{var Wn;return ue.enabled!==!1&&((Wn=h.getPlugin(ue.name))==null?void 0:Wn.enabled)!==!1}),se=hn.length===A.length?hn.map(ue=>F.get(ue.name)??ue):xf(A),me=We.current;return me.length===se.length&&se.every((ue,Wn)=>ue===me[Wn])?me:(We.current=se,se)},[L,h,hn]),R=y.useRef(C);R.current=C;const b=y.useCallback((F,A)=>{var ue;const se=R.current;let me=A;for(const Wn of Ze){const yl=(ue=Wn.hooks)==null?void 0:ue[F];if(typeof yl=="function")try{me=F==="transformData"?yl(se,me):yl(me)}catch($f){(se.logger??console).warn(`[plugin-core] ${Wn.name}.${F} 执行失败，已跳过`,$f)}}return me},[Ze]),D=y.useCallback(F=>b("transformProps",F),[b]),Q=y.useCallback(F=>b("transformData",F),[b]),re=y.useCallback((F,...A)=>h.executeHook(F,k.current,...A),[h]);return{manager:h,bus:S,context:C,state:P,setState:C.setState,execute:re,transformProps:D,transformData:Q,orderedPlugins:Ze}}y.createContext(null);function Rh(e,n,t){var i,l;if(e.enabled===!1||typeof((i=e.hooks)==null?void 0:i[n])!="function")return!1;const r=(l=e.config)==null?void 0:l.slotPosition;return t==="before"?r==="before":t==="footer"?r===void 0||r==="after"||r==="footer":r===void 0||r==="after"}function Th(e,n){var t,r;return(((t=e.config)==null?void 0:t.order)??0)-(((r=n.config)==null?void 0:r.order)??0)||(n.priority??0)-(e.priority??0)}function Ih(e,n,t){const r=new Set;return e.map(i=>{var l;if(r.has(i.name))return null;r.add(i.name);try{const o=(l=i.hooks)==null?void 0:l[t],a=o==null?void 0:o(n);return a==null?null:c.jsx(Ya,{children:a},`vane-slot-${i.name}`)}catch(o){return console.warn(`[vane/plugin-core] 插件 ${i.name} 的 ${t} 渲染失败`,o),null}})}function jh(e,n,t){const{hook:r,position:i="after"}=t,l=e.filter(o=>Rh(o,r,i)).sort(Th);return Ih(l,n,r)}const zu=["renderHeader","renderCalendar","renderRewards","renderActions","renderFooter"],Fu=[],wf=y.createContext(null);function $h(e,n){var t,r;return(((t=e.config)==null?void 0:t.order)??0)-(((r=n.config)==null?void 0:r.order)??0)||(n.priority??0)-(e.priority??0)}function bh(e){var t;const n={renderHeader:[],renderCalendar:[],renderRewards:[],renderActions:[],renderFooter:[]};for(const r of e)if(r.enabled!==!1)for(const i of zu)typeof((t=r.hooks)==null?void 0:t[i])=="function"&&n[i].push(r);for(const r of zu)n[r].sort($h);return n}function Dh(e,n,t){return e.map(r=>{try{const i=r.hooks[t](n);return i==null?null:c.jsx(Ya,{children:i},`signin-slot-${r.name}`)}catch(i){return console.warn(`[vane-sign-in] 插件 ${r.name} 的 ${t} 渲染失败`,i),null}})}function sr(e){const n=y.useContext(wf),t=n==null?void 0:n.groups[e],r=n==null?void 0:n.context;return y.useMemo(()=>{if(!t||!r)return Fu;const i=Dh(t,r,e);return i.length?i:Fu},[t,r,e])}const kf=y.createContext(null);function Xa(){return y.useContext(kf)??Date.now()}function Nh({children:e,onResume:n,intervalMs:t=1e3}){const[r,i]=y.useState(()=>Date.now());return y.useEffect(()=>{const l=setInterval(()=>i(Date.now()),t);return()=>clearInterval(l)},[t]),y.useEffect(()=>{if(typeof document>"u"||typeof window>"u")return;const l=()=>{document.visibilityState!=="hidden"&&(i(Date.now()),n==null||n())};return document.addEventListener("visibilitychange",l),window.addEventListener("focus",l),()=>{document.removeEventListener("visibilitychange",l),window.removeEventListener("focus",l)}},[n]),c.jsx(kf.Provider,{value:r,children:e})}const H=y.forwardRef(function(n,t){var f;const{children:r,containerClassName:i,containerStyle:l,containerRefExternal:o}=n,a=y.useRef(null),s=o||a,[,u]=y.useState(0),p=y.useCallback(()=>u(g=>g+1),[]),d=(f=n.callbacks)==null?void 0:f.refresh,h=y.useCallback(()=>{if(d)try{const g=d();g&&typeof g.then=="function"&&g.catch(w=>{console.warn("[vane-sign-in] callbacks.refresh 执行失败",w)})}catch(g){console.warn("[vane-sign-in] callbacks.refresh 执行失败",g)}},[d]),v=sr("renderHeader"),S=sr("renderCalendar"),x=sr("renderRewards"),P=sr("renderActions"),m=sr("renderFooter");return y.useImperativeHandle(t,()=>({getContainer:()=>s.current,forceUpdate:p,getSize:()=>{const g=s.current;return g?{width:g.offsetWidth,height:g.offsetHeight}:{width:0,height:0}}}),[s,p]),c.jsx(Nh,{onResume:h,children:c.jsxs("div",{ref:s,"data-testid":"si-root",className:`vs-signin ${i||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",borderRadius:12,border:"1px solid #e3e5e8",boxShadow:"0 1px 3px rgba(16, 22, 26, 0.06)",overflow:"hidden",display:"flex",flexDirection:"column",width:"100%",maxWidth:460,...l},children:[v.length>0&&c.jsx("div",{className:"vs-header",style:{display:"flex",flexDirection:"column",gap:12,padding:"14px 16px 8px"},children:v}),S.length>0&&c.jsx("div",{className:"vs-calendar",style:{display:"flex",flexDirection:"column",gap:12,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:S}),x.length>0&&c.jsx("div",{className:"vs-rewards",style:{display:"flex",flexDirection:"column",gap:10,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:x}),P.length>0&&c.jsx("div",{className:"vs-actions",style:{display:"flex",flexWrap:"wrap",gap:8,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:P}),m.length>0&&c.jsx("div",{className:"vs-footer",style:{display:"flex",flexDirection:"column",gap:12,padding:"8px 16px 16px",borderTop:"1px solid #f0f2f4"},children:m}),r]})})});H.displayName="SignInCore";function Mh({orderedPlugins:e,context:n,children:t}){const r=y.useMemo(()=>bh(e),[e]),i=y.useMemo(()=>({groups:r,context:n}),[r,n]);return c.jsx(wf.Provider,{value:i,children:t})}const Pf=/^(\d{4})-(\d{2})-(\d{2})$/,Au=new Map;function pt(e,n=2){return String(e).padStart(n,"0")}function Oh(e){const n=Au.get(e);if(n)return n;const t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"});return Au.set(e,t),t}function Ho(e){const n=Pf.exec(e);if(!n)throw new RangeError(`[vane-sign-in] 非法日期键：${String(e)}`);const t=Number(n[1]),r=Number(n[2]),i=Number(n[3]),l=new Date(0);if(l.setUTCFullYear(t,r-1,i),l.setUTCHours(0,0,0,0),l.getUTCFullYear()!==t||l.getUTCMonth()!==r-1||l.getUTCDate()!==i)throw new RangeError(`[vane-sign-in] 非法日期键：${String(e)}`);return l.getTime()}function Lh(e){if(e instanceof Date)return e;const n=new Date(e);if(Number.isNaN(n.getTime()))throw new RangeError(`[vane-sign-in] 非法时间值：${String(e)}`);return n}function Za(e){if(typeof e!="string"||!Pf.test(e))return!1;try{return Ho(e),!0}catch{return!1}}function Ja(e=Date.now(),n){if(typeof e=="string"&&Za(e))return e;const t=Lh(e);if(n){const r=Oh(n).formatToParts(t);let i="",l="",o="";for(const a of r)a.type==="year"?i=a.value:a.type==="month"?l=a.value:a.type==="day"&&(o=a.value);return`${pt(Number(i),4)}-${pt(Number(l))}-${pt(Number(o))}`}return`${pt(t.getFullYear(),4)}-${pt(t.getMonth()+1)}-${pt(t.getDate())}`}function zh(e,n){return Ja(e,n)}function Bu(e,n){return Ho(e),Ho(n),e===n?0:e<n?-1:1}const Fh=["signed","today","missed","future","reward"],Ah=["points","coupon","gift","badge"];function tt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Fe(e,n=0){return typeof e=="number"&&Number.isFinite(e)&&e>=0?Math.trunc(e):n}function rt(e,n=""){return typeof e=="string"?e:n}function Bh(e){return typeof e=="string"&&Fh.includes(e)}function Uh(e){if(typeof e!="string"||!e)return!1;try{return new Intl.DateTimeFormat("en-CA",{timeZone:e}),!0}catch{return!1}}function Vo(e){const n=e.kind;return{day:Fe(e.day),kind:typeof n=="string"&&Ah.includes(n)?n:"points",value:typeof e.value=="number"&&Number.isFinite(e.value)?e.value:void 0,label:rt(e.label),claimed:e.claimed===!0}}function Wh(e){const n=tt(e)?e:{};return{date:rt(n.date),day:Fe(n.day),status:Bh(n.status)?n.status:"future",reward:tt(n.reward)?Vo(n.reward):void 0,canMakeup:n.canMakeup===!0}}function Hh(e){if(!tt(e))return;const n=typeof e.progress=="number"&&Number.isFinite(e.progress)?Math.min(1,Math.max(0,e.progress)):0;return{name:rt(e.name),current:Fe(e.current),next:Fe(e.next),progress:n}}function Vh(e){return Array.isArray(e)?e.map((n,t)=>{const r=tt(n)?n:{};return{id:rt(r.id,`record-${t}`),day:Fe(r.day),label:rt(r.label),at:typeof r.at=="number"&&Number.isFinite(r.at)?r.at:0}}):[]}function Gh(e){const n=tt(e)?e:{};return{available:Fe(n.available),used:Fe(n.used),max:Fe(n.max)}}function Qh(e){if(!tt(e))return;const n=rt(e.message);if(!n)return;const t=rt(e.code);return t?{code:t,message:n}:{message:n}}function Kh(e){const n=e??{};return{todaySigned:n.todaySigned===!0,streak:Fe(n.streak),maxStreak:Fe(n.maxStreak),totalDays:Fe(n.totalDays),points:Fe(n.points),calendar:Array.isArray(n.calendar)?n.calendar.map(Wh):[],rewards:Array.isArray(n.rewards)?n.rewards.map(t=>tt(t)?Vo(t):Vo({})):[],makeup:Gh(n.makeup),nextResetAt:typeof n.nextResetAt=="number"&&Number.isFinite(n.nextResetAt)?n.nextResetAt:void 0,businessTimeZone:Uh(n.businessTimeZone)?n.businessTimeZone:void 0,todayKey:Za(n.todayKey)?n.todayKey:void 0,lastError:Qh(n.lastError),remindEnabled:typeof n.remindEnabled=="boolean"?n.remindEnabled:void 0,level:Hh(n.level),rules:Array.isArray(n.rules)?n.rules.filter(t=>typeof t=="string"):void 0,history:Vh(n.history)}}const Yh={};function G(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:i=!1}=t,l=y.forwardRef((o,a)=>{const s=y.useRef(null),u=o.callbacks??Yh,p=y.useCallback(g=>({...g,data:o.data,callbacks:u}),[o.data,u]),d=Eh({plugins:r,props:o,data:o.data,containerRef:s,extendContext:p,enableDebug:i}),h=y.useCallback((g,...w)=>d.execute(g,...w),[d.manager]),{transformData:v}=d,S=y.useMemo(()=>Kh(v(o.data)),[o.data,v]),x=y.useMemo(()=>({...d.context,data:S,callbacks:u}),[S,u,d.bus,d.state]),P=d.transformProps(o);y.useEffect(()=>{h("onMount")},[h]);const m=y.useRef(o);y.useEffect(()=>{const g=m.current;g!==o&&(m.current=o,h("onPropsChange",g,o))},[o,h]);const f={...P,data:S,containerRefExternal:s,debug:P.debug??i,onMount:()=>{var g;(g=P.onMount)==null||g.call(P)},onUnmount:()=>{var g;(g=P.onUnmount)==null||g.call(P)},children:c.jsx(Ya,{children:c.jsxs(c.Fragment,{children:[P.children,jh(d.orderedPlugins,x,{hook:"renderOverlay"})]})})};return c.jsx(Mh,{orderedPlugins:d.orderedPlugins,context:x,children:c.jsx(e,{ref:a,...f})})});return l.displayName="WithPlugins(SignInCore)",l}const De="#cf4407",Xh="#fff1e6",_f="#b8860b",Zh="#0f8a4a",Jh="#1f2328",pn="#6b6b6b",it="#8a8a8a",qa="#f2f3f5",qh="#8a8a8a",ey="#e3e5e8",Zi={signed:{bg:"#fff1e6",fg:"#d35400",border:"#cf4407"},today:{bg:"#cf4407",fg:"#ffffff",border:"#cf4407"},missed:{bg:"#f2f3f5",fg:"#7d7d7d",border:"#e3e5e8"},future:{bg:"#fafafa",fg:"#8a8a8a",border:"#ececec"},reward:{bg:"#fff8e1",fg:"#b8860b",border:"#e0a800"}},Cf={signed:"✓",today:"今",missed:"·",future:"",reward:"★"},Ef={signed:"已签到",today:"今天",missed:"漏签",future:"未开始",reward:"奖励日"},ny="StreakStatePlugin",ty="连签状态：展示当前连签天数与历史最高连签，头部区渲染。",ry="0.1.0",iy=["streak","header","status"],ly=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],oy=[],ay="只读取 context 字段（props / state / data），不调用上下文方法",sy=[{name:"showMax",type:"boolean",default:"true",description:"是否展示历史最高连签天数"}],uy="withSignInPlugins(SignInCore, [createStreakStatePlugin()])",cy=[{name:"默认",description:"头部展示连签天数与最高连签",src:"createStreakStatePlugin()",config:{}}],es={name:ny,description:ty,since:ry,tags:iy,events:ly,methods:oy,methodsNote:ay,config:sy,example:uy,examples:cy};function An(e={}){const{showMax:n=!0}=e;return{name:"StreakState",version:"0.1.0",description:es.description,priority:10,enabled:!0,hooks:{renderHeader:t=>{const{streak:r,maxStreak:i}=t.data;return c.jsxs("div",{"data-testid":"si-streak",style:{display:"flex",alignItems:"baseline",gap:8},children:[c.jsx("span",{style:{fontSize:34,fontWeight:800,color:De,lineHeight:1,letterSpacing:"-0.5px"},children:r}),c.jsx("span",{style:{fontSize:13,color:pn,fontWeight:600},children:"天连签"}),n&&c.jsxs("span",{style:{marginLeft:"auto",fontSize:12,color:pn,background:"#faf7f4",border:`1px solid ${ey}`,borderRadius:999,padding:"3px 10px",whiteSpace:"nowrap"},children:["最高 ",i," 天"]})]})}}}}An.meta=es;const dy="CalendarStripPlugin",fy="日历条：横向滚动的逐日格，展示已签/今日/漏签/未来/奖励五态，带奖励格金点提示。",py="0.1.0",gy=["calendar","strip","status"],my=[{name:"renderCalendar",when:"每次渲染，日历区槽位",description:"日历条 / 月历网格 / 漏签标记"}],hy=[],yy="只读取 context 字段（props / state / data），不调用上下文方法",vy=[{name:"showRewardDot",type:"boolean",default:"true",description:"是否在带奖励的格右上角显示金点"}],Sy="withSignInPlugins(SignInCore, [createCalendarStripPlugin()])",xy=[{name:"默认",description:"日历条展示当月逐日签到状态",src:"createCalendarStripPlugin()",config:{}}],ns={name:dy,description:fy,since:py,tags:gy,events:my,methods:hy,methodsNote:yy,config:vy,example:Sy,examples:xy};function st(e={}){const{showRewardDot:n=!0}=e;return{name:"CalendarStrip",version:"0.1.0",description:ns.description,priority:20,enabled:!0,hooks:{renderCalendar:t=>{const r=t.data.calendar??[];return c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:r.map(i=>{const l=Zi[i.status]??Zi.future,o=!!(i.reward&&!i.reward.claimed),a=Ef[i.status]??i.status;return c.jsxs("div",{role:"img","aria-label":`${i.date} ${a}`,title:`${i.date} ${a}`,style:{flex:"0 0 auto",width:42,height:54,borderRadius:8,background:l.bg,color:l.fg,border:`1px solid ${l.border}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"},children:[c.jsxs("span",{style:{fontSize:11,color:l.fg},children:["第",i.day,"天"]}),c.jsx("span",{style:{fontSize:16,fontWeight:700,lineHeight:1.1},children:Cf[i.status]||i.day}),n&&o&&c.jsx("span",{style:{position:"absolute",top:4,right:4,width:6,height:6,borderRadius:"50%",background:_f}})]},i.date)})})}}}}st.meta=ns;const wy="RewardPreviewPlugin",ky="奖励预告：从当前连签天数起，逐日展示后续可领奖励（积分 / 券 / 礼包 / 徽章）。",Py="0.1.0",_y=["reward","preview","rewards"],Cy=[{name:"renderRewards",when:"每次渲染，奖励区槽位",description:"逐日奖励预告、领取态、里程碑奖励"}],Ey=[],Ry="只读取 context 字段（props / state / data），不调用上下文方法",Ty=[{name:"limit",type:"number",default:"5",description:"最多展示的奖励预告条数"}],Iy="withSignInPlugins(SignInCore, [createRewardPreviewPlugin()])",jy=[{name:"默认",description:"奖励区逐日预告后续奖励",src:"createRewardPreviewPlugin()",config:{}}],ts={name:wy,description:ky,since:Py,tags:_y,events:Cy,methods:Ey,methodsNote:Ry,config:Ty,example:Iy,examples:jy};function Bn(e={}){const{limit:n=5}=e;return{name:"RewardPreview",version:"0.1.0",description:ts.description,priority:30,enabled:!0,hooks:{renderRewards:t=>{const r=[...t.data.rewards??[]].filter(i=>i.day>=t.data.streak).sort((i,l)=>i.day-l.day);return r.length?c.jsx("div",{style:{background:"#fafbfc",border:"1px solid #eef0f2",borderRadius:10,padding:"10px 12px",display:"flex",flexDirection:"column",gap:8},children:r.slice(0,n).map(i=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[c.jsx("span",{style:{width:32,height:32,borderRadius:8,flex:"0 0 auto",background:"#fff8e1",color:"#9a6a00",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:i.day}),c.jsx("span",{style:{color:"#1f2328"},children:i.label}),i.claimed&&c.jsx("span",{style:{marginLeft:"auto",color:"#0f8a4a",fontSize:12},children:"已领 ✓"})]},i.day))}):null}}}}Bn.meta=ts;const $y="MakeupSlotPlugin",by="补签位：找到可补签的漏签格并提供补签入口，补签次数用尽后置灰禁用。",Dy="0.1.0",Ny=["makeup","actions","recovery"],My=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],Oy=[],Ly="只读取 context 字段（props / state / data），不调用上下文方法",zy=[{name:"buttonText",type:"string",default:"undefined",description:"自定义按钮文案（仅有可补目标且还有配额时生效）"},{name:"exhaustedText",type:"string",default:"补签次数已用完",description:"补签配额耗尽时的文案"},{name:"noTargetText",type:"string",default:"暂无可补签",description:"配额还在但没有可补目标（漏签格都在窗口外）时的文案"},{name:"errorText",type:"string",default:"补签失败，请重试",description:"回调失败时的兜底文案"}],Fy="withSignInPlugins(SignInCore, [createMakeupSlotPlugin()])",Ay=[{name:"默认",description:"操作区补签入口，禁用态置灰",src:"createMakeupSlotPlugin()",config:{}}],rs={name:$y,description:by,since:Dy,tags:Ny,events:My,methods:Oy,methodsNote:Ly,config:zy,example:Fy,examples:Ay};function Ht(e,...n){if(!e)return Promise.resolve();try{const t=e(...n);return t&&typeof t.then=="function"?Promise.resolve(t):Promise.resolve()}catch(t){return Promise.reject(t)}}function hl(e,n){if(typeof e=="string"&&e.trim())return e;if(e&&typeof e=="object"){const t=e.message;if(typeof t=="string"&&t.trim())return t}return n}function By(e,n,t,r,i){const{makeup:l,calendar:o,todayKey:a,businessTimeZone:s}=e.data,u=a??Ja(n,s),p=(o??[]).filter(x=>x.canMakeup===!0&&Za(x.date)&&Bu(x.date,u)<=0).sort((x,P)=>Bu(x.date,P.date))[0],d=l.available-l.used,h=d<=0,v=h||!p,S=h?r:p?t??`补签 · 剩${d}次`:i;return{cell:p,remaining:d,disabled:v,exhausted:h,label:S}}function Uy({ctx:e,target:n,errorText:t}){var p;const r=y.useRef(!1),[i,l]=y.useState(!1),[o,a]=y.useState(null),s=async()=>{const d=n.cell;if(!(!d||n.disabled||r.current)){r.current=!0,l(!0),a(null);try{await Ht(e.callbacks.makeup,d.date,{day:d.day})}catch(h){a(hl(h,t))}finally{r.current=!1,l(!1)}}},u=n.disabled||i;return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[c.jsx("button",{type:"button","data-testid":"si-makeup-btn","data-disabled":String(u),"data-target":(p=n.cell)==null?void 0:p.date,"data-pending":String(i),"aria-busy":i||void 0,disabled:u,onClick:()=>{s()},style:{border:u?"1px solid #d8d8d8":`1px solid ${De}`,background:u?qa:"#fff",color:u?qh:De,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:u?"not-allowed":"pointer"},children:i?"补签中…":n.label}),o&&c.jsx("div",{role:"alert","data-testid":"si-makeup-error",style:{fontSize:12,color:"#d4380d"},children:o})]})}function Wy({ctx:e,buttonText:n,exhaustedText:t,noTargetText:r,errorText:i}){const l=Xa(),o=y.useMemo(()=>By(e,l,n,t,r),[e,l,n,t,r]);return c.jsx(Uy,{ctx:e,target:o,errorText:i})}function ut(e={}){const{buttonText:n,exhaustedText:t="补签次数已用完",noTargetText:r="暂无可补签",errorText:i="补签失败，请重试"}=e;return{name:"MakeupSlot",version:"0.1.0",description:rs.description,priority:42,enabled:!0,hooks:{renderActions:l=>c.jsx(Wy,{ctx:l,buttonText:n,exhaustedText:t,noTargetText:r,errorText:i})}}}ut.meta=rs;const Hy="TodayCheckInPlugin",Vy="今日签到：主 CTA，已签置灰、未签高亮，点击经回调下发签到动作。",Gy="0.1.0",Qy=["checkin","actions","cta"],Ky=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],Yy=[],Xy="只读取 context 字段（props / state / data），不调用上下文方法",Zy=[{name:"signedText",type:"string",default:"今日已签 ✓",description:"已签到时的按钮文案"},{name:"unsignedText",type:"string",default:"立即签到",description:"未签到时的按钮文案"},{name:"pendingText",type:"string",default:"签到中…",description:"请求在途（尚未返回）时的按钮文案；期间按钮禁用，防重复签到"},{name:"errorText",type:"string",default:"签到失败，请重试",description:"回调失败时的兜底文案（错误对象自带 message 时优先显示 message）"}],Jy="withSignInPlugins(SignInCore, [createTodayCheckInPlugin()])",qy=[{name:"默认",description:"操作区主签到按钮",src:"createTodayCheckInPlugin()",config:{}}],is={name:Hy,description:Vy,since:Gy,tags:Qy,events:Ky,methods:Yy,methodsNote:Xy,config:Zy,example:Jy,examples:qy};function ev({ctx:e,signedText:n,unsignedText:t,pendingText:r,errorText:i}){const l=Xa(),{todaySigned:o,nextResetAt:a,todayKey:s,businessTimeZone:u,lastError:p}=e.data,d=y.useRef(!1),[h,v]=y.useState(!1),[S,x]=y.useState(null),P=y.useMemo(()=>o?a!==void 0&&l>=a?!0:s?Ja(l,u)!==s:!1:!1,[o,a,s,u,l]),m=o&&!P,f=S??(p==null?void 0:p.message)??null,g=async()=>{if(!(m||d.current)){d.current=!0,v(!0),x(null);try{await Ht(e.callbacks.sign)}catch(w){x(hl(w,i))}finally{d.current=!1,v(!1)}}};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[c.jsx("button",{type:"button","data-testid":"si-checkin-btn","data-signed":String(m),"data-pending":String(h),"aria-busy":h||void 0,disabled:m||h,onClick:()=>{g()},style:{border:"none",background:m?"#f2f3f5":"#cf4407",color:m?"#8a8a8a":"#ffffff",borderRadius:20,padding:"8px 20px",fontSize:14,fontWeight:700,cursor:m||h?"not-allowed":"pointer"},children:h?r:m?n:t}),f&&c.jsx("div",{role:"alert","data-testid":"si-checkin-error",style:{fontSize:12,color:"#d4380d"},children:f})]})}function Un(e={}){const{signedText:n="今日已签 ✓",unsignedText:t="立即签到",pendingText:r="签到中…",errorText:i="签到失败，请重试"}=e;return{name:"TodayCheckIn",version:"0.1.0",description:is.description,priority:40,enabled:!0,hooks:{renderActions:l=>c.jsx(ev,{ctx:l,signedText:n,unsignedText:t,pendingText:r,errorText:i})}}}Un.meta=is;const nv={slug:"basic",title:"最小可用",group:"basic",intro:"内核 + 五个核心插件跑通装配链路；加插件就是往 withPlugins 数组里加一项。"};function tv(e){const n=Array.from({length:14},(t,r)=>{const i=r+1,l=i<8?"signed":i===8&&!e?"today":i===9?"missed":"future";return{date:`2026-10-${String(i).padStart(2,"0")}`,day:i,status:l,canMakeup:i===9}});return{todaySigned:e,streak:e?8:7,maxStreak:12,totalDays:132,points:3680,calendar:n,rewards:[{day:1,kind:"points",value:10,label:"10 积分",claimed:!0},{day:3,kind:"coupon",value:5,label:"5 元券",claimed:!0},{day:7,kind:"gift",label:"7 天礼包",claimed:!0},{day:8,kind:"points",value:50,label:"50 积分"},{day:10,kind:"badge",label:"闪耀徽章"}],makeup:{available:3,used:1,max:3}}}const rv=G(H,[An(),st(),Bn(),ut(),Un()]);function iv(){const[e,n]=y.useState(!1),t=tv(e),r={sign:()=>n(!0),makeup:()=>alert("触发补签"),claim:i=>alert(`领取第 ${i} 天奖励`)};return c.jsx(rv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const lv=Object.freeze(Object.defineProperty({__proto__:null,default:iv,meta:nv},Symbol.toStringTag,{value:"Module"}));function Z(e=!1){const n=Array.from({length:14},(i,l)=>{const o=l+1,a=o<8?"signed":o===8&&!e?"today":o===9?"missed":"future";return{date:`2026-10-${String(o).padStart(2,"0")}`,day:o,status:a,canMakeup:o===9}}),t=Date.now()+36e5,r=[{id:"c1",day:7,label:"7 天礼包",at:Date.now()-864e5},{id:"c2",day:3,label:"5 元券",at:Date.now()-3*864e5},{id:"c3",day:1,label:"10 积分",at:Date.now()-7*864e5}];return{todaySigned:e,streak:e?8:7,maxStreak:12,totalDays:132,points:3680,calendar:n,rewards:[{day:1,kind:"points",value:10,label:"10 积分",claimed:!0},{day:3,kind:"coupon",value:5,label:"5 元券",claimed:!0},{day:7,kind:"gift",label:"7 天礼包",claimed:!0},{day:8,kind:"points",value:50,label:"50 积分"},{day:10,kind:"badge",label:"闪耀徽章"}],makeup:{available:3,used:1,max:3},nextResetAt:t,level:{name:"黄金会员",current:680,next:1e3,progress:.68},rules:["每日 0 点刷新签到资格，连续签到奖励递增","断签后连签天数清零，但累计天数保留","补签卡可在断签 7 日内补回当日奖励","积分可 1:100 兑换现金券，详见会员中心"],history:r}}function q(e={}){return{sign:()=>{},claim:()=>{},makeup:()=>{},share:()=>{},remind:()=>{},invite:()=>{},...e}}const ov={slug:"streak-state",title:"连签状态 StreakState",group:"plugin",intro:"头部连签天数 + 最高连签；断签清零、累计保留的领域逻辑由内核数据驱动。"},av=G(H,[An()]);function sv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(av,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const uv=Object.freeze(Object.defineProperty({__proto__:null,default:sv,meta:ov},Symbol.toStringTag,{value:"Module"})),cv={slug:"calendar-strip",title:"日历条 CalendarStrip",group:"plugin",intro:"横向日期条；已签/今日/漏签/补签/未来五态由 DayStatus 着色，各平台运营位通用。"},dv=G(H,[st()]);function fv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(dv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const pv=Object.freeze(Object.defineProperty({__proto__:null,default:fv,meta:cv},Symbol.toStringTag,{value:"Module"})),gv={slug:"reward-preview",title:"奖励预告 RewardPreview",group:"plugin",intro:"逐日奖励预览：已领取置灰打勾，未到天数半透明，临近大额奖励高亮。"},mv=G(H,[Bn()]);function hv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(mv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const yv=Object.freeze(Object.defineProperty({__proto__:null,default:hv,meta:gv},Symbol.toStringTag,{value:"Module"})),vv={slug:"makeup-slot",title:"补签位 MakeupSlot",group:"plugin",intro:"断签缺口处的高亮补签入口：剩余补签卡数 + 一键补回当日奖励，走 callbacks.makeup。"},Sv=G(H,[ut()]);function xv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Sv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const wv=Object.freeze(Object.defineProperty({__proto__:null,default:xv,meta:vv},Symbol.toStringTag,{value:"Module"})),kv={slug:"today-check-in",title:"今日签到 TodayCheckIn",group:"plugin",intro:"操作区主按钮：未签时高亮的「立即签到」，已签后变为连签天数 + 明日预告。"},Pv=G(H,[Un()]);function _v(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Pv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Cv=Object.freeze(Object.defineProperty({__proto__:null,default:_v,meta:kv},Symbol.toStringTag,{value:"Module"})),Ev="PointsBalancePlugin",Rv="累计积分：展示当前累计积分总额，头部区渲染。",Tv="0.1.0",Iv=["points","header","balance"],jv=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],$v=[],bv="只读取 context 字段（props / state / data），不调用上下文方法",Dv=[],Nv="withSignInPlugins(SignInCore, [createPointsBalancePlugin()])",Mv=[{name:"默认",description:"头部展示累计积分",src:"createPointsBalancePlugin()",config:{}}],ls={name:Ev,description:Rv,since:Tv,tags:Iv,events:jv,methods:$v,methodsNote:bv,config:Dv,example:Nv,examples:Mv};function Vt(e={}){return{name:"PointsBalance",version:"0.1.0",description:ls.description,priority:11,enabled:!0,hooks:{renderHeader:n=>{const{points:t}=n.data;return c.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[c.jsx("span",{style:{fontSize:13,color:pn},children:"积分"}),c.jsx("span",{style:{fontSize:20,fontWeight:800,color:De,lineHeight:1},children:t})]})}}}}Vt.meta=ls;const Ov={slug:"points-balance",title:"积分余额 PointsBalance",group:"plugin",intro:"头部积分余额：大字号展示当前积分 + 累计天数，承接积分商城的入口视觉。"},Lv=G(H,[Vt()]);function zv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Lv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Fv=Object.freeze(Object.defineProperty({__proto__:null,default:zv,meta:Ov},Symbol.toStringTag,{value:"Module"})),Av="StatRowPlugin",Bv="数据行：一行展示累计天数与累计积分，头部区渲染。",Uv="0.1.0",Wv=["stat","header","summary"],Hv=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],Vv=[],Gv="只读取 context 字段（props / state / data），不调用上下文方法",Qv=[],Kv="withSignInPlugins(SignInCore, [createStatRowPlugin()])",Yv=[{name:"默认",description:"头部展示累计天数与积分",src:"createStatRowPlugin()",config:{}}],os={name:Av,description:Bv,since:Uv,tags:Wv,events:Hv,methods:Vv,methodsNote:Gv,config:Qv,example:Kv,examples:Yv};function Gt(e={}){return{name:"StatRow",version:"0.1.0",description:os.description,priority:12,enabled:!0,hooks:{renderHeader:n=>{const{totalDays:t,points:r}=n.data;return c.jsxs("div",{style:{display:"flex",gap:18,fontSize:12,color:pn},children:[c.jsxs("span",{children:["累计 ",c.jsx("b",{style:{color:Jh,fontSize:14},children:t})," 天"]}),c.jsxs("span",{children:["累计 ",c.jsx("b",{style:{color:De,fontSize:14},children:r})," 分"]})]})}}}}Gt.meta=os;const Xv={slug:"stat-row",title:"统计行 StatRow",group:"plugin",intro:"头部三项指标横排：当前连签、累计天数、历史最高连签，一屏尽览进度。"},Zv=G(H,[Gt()]);function Jv(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Zv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const qv=Object.freeze(Object.defineProperty({__proto__:null,default:Jv,meta:Xv},Symbol.toStringTag,{value:"Module"})),eS="LevelBadgePlugin",nS="会员等级徽标：展示等级名与进度条，头部区渲染；无等级数据时静默跳过。",tS="0.1.0",rS=["level","header","badge"],iS=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],lS=[],oS="只读取 context 字段（props / state / data），不调用上下文方法",aS=[],sS="withSignInPlugins(SignInCore, [createLevelBadgePlugin()])",uS=[{name:"默认",description:"头部展示会员等级与进度",src:"createLevelBadgePlugin()",config:{}}],as={name:eS,description:nS,since:tS,tags:rS,events:iS,methods:lS,methodsNote:oS,config:aS,example:sS,examples:uS};function ct(e={}){return{name:"LevelBadge",version:"0.1.0",description:as.description,priority:13,enabled:!0,hooks:{renderHeader:n=>{const t=n.data.level;if(!t)return null;const r=Math.round(Math.min(1,Math.max(0,t.progress))*100);return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[c.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#ffffff",background:De,borderRadius:10,padding:"2px 8px",whiteSpace:"nowrap"},children:t.name}),c.jsx("div",{style:{flex:1,height:6,borderRadius:3,background:qa,overflow:"hidden"},children:c.jsx("div",{style:{width:`${r}%`,height:"100%",background:De}})}),c.jsxs("span",{style:{fontSize:11,color:it,whiteSpace:"nowrap"},children:[t.current,"/",t.next]})]})}}}}ct.meta=as;const cS={slug:"level-badge",title:"等级徽章 LevelBadge",group:"plugin",intro:"头部会员徽章：等级名 + 距下一级进度条，读 data.level 渲染。"},dS=G(H,[ct()]);function fS(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(dS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const pS=Object.freeze(Object.defineProperty({__proto__:null,default:fS,meta:cS},Symbol.toStringTag,{value:"Module"})),gS="CountdownPlugin",mS="次签倒计时：依据 nextResetAt 展示距下次可签到剩余时间，头部区渲染。",hS="0.1.0",yS=["countdown","header","timer"],vS=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],SS=[],xS="只读取 context 字段（props / state / data），不调用上下文方法",wS=[],kS="withSignInPlugins(SignInCore, [createCountdownPlugin()])",PS=[{name:"默认",description:"头部展示次签倒计时",src:"createCountdownPlugin()",config:{}}],ss={name:gS,description:mS,since:hS,tags:yS,events:vS,methods:SS,methodsNote:xS,config:wS,example:kS,examples:PS};function _S({nextResetAt:e,todaySigned:n}){const t=Xa(),r=e-t;if(r<=0)return c.jsx("div",{style:{fontSize:12,color:Zh},children:"现在可签到"});const i=Math.floor(r/864e5),l=Math.floor(r%864e5/36e5),o=Math.floor(r%36e5/6e4),a=i>0?`${i}天${l}小时`:`${l}小时${o}分`;return c.jsx("div",{style:{fontSize:12,color:it},children:n?`距下次可签到 ${a}`:"今日可签到"})}function Qt(e={}){return{name:"Countdown",version:"0.1.0",description:ss.description,priority:14,enabled:!0,hooks:{renderHeader:n=>{const{nextResetAt:t,todaySigned:r}=n.data;return t?c.jsx(_S,{nextResetAt:t,todaySigned:r}):null}}}}Qt.meta=ss;const CS={slug:"countdown",title:"次签倒计时 Countdown",group:"plugin",intro:"头部倒计时：读 data.nextResetAt 计算剩余小时/分钟，已过期则提示「现在可签到」。"},ES=G(H,[Qt()]);function RS(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(ES,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const TS=Object.freeze(Object.defineProperty({__proto__:null,default:RS,meta:CS},Symbol.toStringTag,{value:"Module"})),IS="CalendarGridPlugin",jS="月历网格：以 7 列网格形态呈现整轮签到进度，日历区渲染。",$S="0.1.0",bS=["calendar","grid","calendar-slot"],DS=[{name:"renderCalendar",when:"每次渲染，日历区槽位",description:"日历条 / 月历网格 / 漏签标记"}],NS=[],MS="只读取 context 字段（props / state / data），不调用上下文方法",OS=[{name:"columns",type:"number",default:"7",description:"网格每周列数"}],LS="withSignInPlugins(SignInCore, [createCalendarGridPlugin()])",zS=[{name:"默认",description:"以 7 列网格展示整轮签到",src:"createCalendarGridPlugin()",config:{}}],us={name:IS,description:jS,since:$S,tags:bS,events:DS,methods:NS,methodsNote:MS,config:OS,example:LS,examples:zS};function Kt(e={}){const{columns:n=7}=e;return{name:"CalendarGrid",version:"0.1.0",description:us.description,priority:21,enabled:!0,hooks:{renderCalendar:t=>{const r=t.data.calendar??[];return c.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gap:6},children:r.map(i=>{const l=Zi[i.status]??Zi.future,o=Ef[i.status]??i.status;return c.jsxs("div",{role:"img","aria-label":`${i.date} ${o}`,title:`${i.date} ${o}`,style:{height:44,borderRadius:8,background:l.bg,color:l.fg,border:`1px solid ${l.border}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[c.jsxs("span",{style:{fontSize:10,color:l.fg},children:[i.day,"天"]}),c.jsx("span",{style:{fontSize:14,fontWeight:700,lineHeight:1.1},children:Cf[i.status]||i.day})]},i.date)})})}}}}Kt.meta=us;const FS={slug:"calendar-grid",title:"月历网格 CalendarGrid",group:"plugin",intro:"七列月历网格：已签/今日/漏签/补签/奖励日五态着色，适合大运营位全景展示。"},AS=G(H,[Kt()]);function BS(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(AS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const US=Object.freeze(Object.defineProperty({__proto__:null,default:BS,meta:FS},Symbol.toStringTag,{value:"Module"})),WS="RewardClaimPlugin",HS="当日奖励领取：提供已达天数待领奖励的领取按钮，奖励区渲染。",VS="0.1.0",GS=["reward","claim","rewards-slot"],QS=[{name:"renderRewards",when:"每次渲染，奖励区槽位",description:"逐日奖励预告、领取态、里程碑奖励"}],KS=[],YS="只读取 context 字段（props / state / data），不调用上下文方法",XS=[{name:"pendingText",type:"string",default:"领取中…",description:"请求在途时的按钮文案；期间按钮禁用，防重复领取"},{name:"errorText",type:"string",default:"领取失败，请重试",description:"回调失败时的兜底文案"}],ZS="withSignInPlugins(SignInCore, [createRewardClaimPlugin()])",JS=[{name:"默认",description:"展示待领奖励领取按钮",src:"createRewardClaimPlugin()",config:{}}],cs={name:WS,description:HS,since:VS,tags:GS,events:QS,methods:KS,methodsNote:YS,config:XS,example:ZS,examples:JS};function qS({ctx:e,target:n,pendingText:t,errorText:r}){const i=y.useRef(!1),[l,o]=y.useState(!1),[a,s]=y.useState(null),u=async()=>{if(!i.current){i.current=!0,o(!0),s(null);try{await Ht(e.callbacks.claim,n.day)}catch(p){s(hl(p,r))}finally{i.current=!1,o(!1)}}};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[c.jsx("button",{type:"button","data-testid":"si-claim-btn","data-day":String(n.day),"data-pending":String(l),"aria-busy":l||void 0,disabled:l,onClick:()=>{u()},style:{border:"none",background:De,color:"#ffffff",borderRadius:18,padding:"6px 16px",fontSize:13,fontWeight:700,cursor:l?"not-allowed":"pointer"},children:l?t:`领取第${n.day}天奖励 · ${n.label}`}),a&&c.jsx("div",{role:"alert","data-testid":"si-claim-error",style:{fontSize:12,color:"#d4380d"},children:a})]})}function dt(e={}){const{pendingText:n="领取中…",errorText:t="领取失败，请重试"}=e;return{name:"RewardClaim",version:"0.1.0",description:cs.description,priority:31,enabled:!0,hooks:{renderRewards:r=>{const{rewards:i,streak:l}=r.data,o=[...i??[]].filter(a=>a.day<=l&&!a.claimed).sort((a,s)=>a.day-s.day)[0];return o?c.jsx(qS,{ctx:r,target:o,pendingText:n,errorText:t}):c.jsx("div",{style:{fontSize:12,color:it},children:"今日奖励已全部领取"})}}}}dt.meta=cs;const e0={slug:"reward-claim",title:"奖励领取 RewardClaim",group:"plugin",intro:"奖励区领取：扫描 rewards，对 day<=streak 且未领的奖励给出「领取」按钮，走 callbacks.claim。"},n0=G(H,[dt()]);function t0(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(n0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const r0=Object.freeze(Object.defineProperty({__proto__:null,default:t0,meta:e0},Symbol.toStringTag,{value:"Module"})),i0="MilestonePlugin",l0="里程碑进度：展示距下一未达奖励还差几天与进度条，奖励区渲染。",o0="0.1.0",a0=["milestone","rewards","progress"],s0=[{name:"renderRewards",when:"每次渲染，奖励区槽位",description:"逐日奖励预告、领取态、里程碑奖励"}],u0=[],c0="只读取 context 字段（props / state / data），不调用上下文方法",d0=[],f0="withSignInPlugins(SignInCore, [createMilestonePlugin()])",p0=[{name:"默认",description:"展示下一里程碑进度",src:"createMilestonePlugin()",config:{}}],ds={name:i0,description:l0,since:o0,tags:a0,events:s0,methods:u0,methodsNote:c0,config:d0,example:f0,examples:p0};function Yt(e={}){return{name:"Milestone",version:"0.1.0",description:ds.description,priority:32,enabled:!0,hooks:{renderRewards:n=>{const{rewards:t,streak:r}=n.data,i=(t??[]).filter(a=>a.day>r).sort((a,s)=>a.day-s.day)[0];if(!i)return c.jsx("div",{style:{fontSize:12,color:it},children:"已达成全部奖励 🎉"});const l=i.day-r,o=Math.round((i.day-l)/i.day*100);return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsxs("div",{style:{fontSize:12,color:pn},children:["再连签 ",c.jsx("b",{style:{color:De},children:l})," 天解锁 ",i.label]}),c.jsx("div",{style:{height:6,borderRadius:3,background:qa,overflow:"hidden"},children:c.jsx("div",{style:{width:`${o}%`,height:"100%",background:_f}})})]})}}}}Yt.meta=ds;const g0={slug:"milestone",title:"里程碑 Milestone",group:"plugin",intro:"奖励区里程碑：找到下一未达奖励，展示「再连签 N 天」+ 进度条；全达成显示庆祝终态。"},m0=G(H,[Yt()]);function h0(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(m0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const y0=Object.freeze(Object.defineProperty({__proto__:null,default:h0,meta:g0},Symbol.toStringTag,{value:"Module"})),v0="SharePlugin",S0="分享成就：触发分享回调的无状态按钮，操作区渲染。",x0="0.1.0",w0=["share","actions","social"],k0=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],P0=[],_0="只读取 context 字段（props / state / data），不调用上下文方法",C0=[{name:"text",type:"string",default:"分享成就",description:"按钮文案"}],E0="withSignInPlugins(SignInCore, [createSharePlugin()])",R0=[{name:"默认",description:"操作区展示分享按钮",src:"createSharePlugin()",config:{}}],fs={name:v0,description:S0,since:x0,tags:w0,events:k0,methods:P0,methodsNote:_0,config:C0,example:E0,examples:R0};function Xt(e={}){const{text:n="分享成就"}=e;return{name:"Share",version:"0.1.0",description:fs.description,priority:43,enabled:!0,hooks:{renderActions:t=>c.jsx("button",{type:"button",onClick:()=>{Ht(t.callbacks.share).catch(r=>{console.warn("[vane-sign-in] callbacks.share 执行失败",r)})},style:{border:"1px solid #d8d8d8",background:"#ffffff",color:pn,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:n})}}}Xt.meta=fs;const T0={slug:"share",title:"分享成就 Share",group:"plugin",intro:"操作区社交扩散位：点击触发 callbacks.share，海报/链接/卡片由消费方实现。"},I0=G(H,[Xt()]);function j0(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(I0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const $0=Object.freeze(Object.defineProperty({__proto__:null,default:j0,meta:T0},Symbol.toStringTag,{value:"Module"})),b0="RemindPlugin",D0="签到提醒开关：本地维护开关态并回调下发，操作区渲染。",N0="0.1.0",M0=["remind","actions","toggle"],O0=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],L0=[],z0="只读取 context 字段（props / state / data），不调用上下文方法",F0=[{name:"defaultOn",type:"boolean",default:"false",description:"初始是否开启提醒"}],A0="withSignInPlugins(SignInCore, [createRemindPlugin()])",B0=[{name:"默认",description:"操作区展示提醒开关",src:"createRemindPlugin()",config:{}}],ps={name:b0,description:D0,since:N0,tags:M0,events:O0,methods:L0,methodsNote:z0,config:F0,example:A0,examples:B0};function U0({ctx:e,initialOn:n,errorText:t}){const[r,i]=y.useState(n),[l,o]=y.useState(null),a=y.useRef(!1),s=async()=>{if(a.current)return;a.current=!0;const u=!r,p=r;i(u),o(null);try{await Ht(e.callbacks.remind,u)}catch(d){i(p),o(hl(d,t))}finally{a.current=!1}};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[c.jsx("button",{type:"button","data-testid":"si-remind-btn","data-on":String(r),"aria-pressed":r,onClick:()=>{s()},style:{border:`1px solid ${r?De:"#d8d8d8"}`,background:r?Xh:"#ffffff",color:r?De:pn,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:r?"已开启提醒":"签到提醒"}),l&&c.jsx("div",{role:"alert","data-testid":"si-remind-error",style:{fontSize:12,color:"#d4380d"},children:l})]})}function Zt(e={}){const{defaultOn:n=!1,errorText:t="提醒设置失败，请重试"}=e;return{name:"Remind",version:"0.1.0",description:ps.description,priority:44,enabled:!0,hooks:{renderActions:r=>c.jsx(U0,{ctx:r,initialOn:r.data.remindEnabled??n,errorText:t})}}}Zt.meta=ps;const W0={slug:"remind",title:"签到提醒 Remind",group:"plugin",intro:"操作区提醒开关：插件自身管理开关态，切换即经 callbacks.remind 下发给消费方持久化。"},H0=G(H,[Zt()]);function V0(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(H0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const G0=Object.freeze(Object.defineProperty({__proto__:null,default:V0,meta:W0},Symbol.toStringTag,{value:"Module"})),Q0="InvitePlugin",K0="邀请好友助力：触发邀请回调的按钮，操作区渲染，常用于拉新运营位。",Y0="0.1.0",X0=["invite","actions","growth"],Z0=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],J0=[],q0="只读取 context 字段（props / state / data），不调用上下文方法",ex=[{name:"text",type:"string",default:"邀请好友助力",description:"按钮文案"}],nx="withSignInPlugins(SignInCore, [createInvitePlugin()])",tx=[{name:"默认",description:"操作区展示邀请按钮",src:"createInvitePlugin()",config:{}}],gs={name:Q0,description:K0,since:Y0,tags:X0,events:Z0,methods:J0,methodsNote:q0,config:ex,example:nx,examples:tx};function Jt(e={}){const{text:n="邀请好友助力"}=e;return{name:"Invite",version:"0.1.0",description:gs.description,priority:45,enabled:!0,hooks:{renderActions:t=>c.jsx("button",{type:"button",onClick:()=>{Ht(t.callbacks.invite).catch(r=>{console.warn("[vane-sign-in] callbacks.invite 执行失败",r)})},style:{border:`1px solid ${De}`,background:"#ffffff",color:De,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:n})}}}Jt.meta=gs;const rx={slug:"invite",title:"邀请助力 Invite",group:"plugin",intro:"操作区邀请位：点击触发 callbacks.invite，常用于拉新/游戏运营位解锁额外奖励。"},ix=G(H,[Jt()]);function lx(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(ix,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const ox=Object.freeze(Object.defineProperty({__proto__:null,default:lx,meta:rx},Symbol.toStringTag,{value:"Module"})),ax="RuleExpandPlugin",sx="规则折叠展开：将活动规则折叠为可展开列表，底部区渲染；无规则时静默跳过。",ux="0.1.0",cx=["rule","footer","collapse"],dx=[{name:"renderFooter",when:"每次渲染，底部区槽位",description:"规则展开、领取记录入口"}],fx=[],px="只读取 context 字段（props / state / data），不调用上下文方法",gx=[{name:"defaultOpen",type:"boolean",default:"false",description:"初始是否展开"}],mx="withSignInPlugins(SignInCore, [createRuleExpandPlugin()])",hx=[{name:"默认",description:"底部展示可折叠的活动规则",src:"createRuleExpandPlugin()",config:{}}],ms={name:ax,description:sx,since:ux,tags:cx,events:dx,methods:fx,methodsNote:px,config:gx,example:mx,examples:hx};function yx({rules:e,initialOpen:n}){const[t,r]=y.useState(n),i=y.useId();return!e||!e.length?null:c.jsxs("div",{children:[c.jsx("button",{type:"button","data-testid":"si-rule-toggle","aria-expanded":t,"aria-controls":i,onClick:()=>r(l=>!l),style:{border:"none",background:"transparent",color:pn,fontSize:13,cursor:"pointer",padding:0},children:t?"收起活动规则 ▲":"活动规则 ▼"}),t&&c.jsx("ul",{id:i,style:{margin:"6px 0 0",paddingLeft:18,fontSize:12,color:it},children:e.map((l,o)=>c.jsx("li",{children:l},o))})]})}function qt(e={}){const{defaultOpen:n=!1}=e;return{name:"RuleExpand",version:"0.1.0",description:ms.description,priority:50,enabled:!0,hooks:{renderFooter:t=>c.jsx(yx,{rules:t.data.rules,initialOpen:n})}}}qt.meta=ms;const vx={slug:"rule-expand",title:"规则折叠 RuleExpand",group:"plugin",intro:"底部区规则折叠：data.rules 收进可展开列表，点击展开/收起，避免长文案常驻占用空间。"},Sx=G(H,[qt()]);function xx(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Sx,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const wx=Object.freeze(Object.defineProperty({__proto__:null,default:xx,meta:vx},Symbol.toStringTag,{value:"Module"})),kx="RewardHistoryPlugin",Px="领取记录：展示历史领取记录列表，底部区渲染；无记录时显示终态文案。",_x="0.1.0",Cx=["history","footer","record"],Ex=[{name:"renderFooter",when:"每次渲染，底部区槽位",description:"规则展开、领取记录入口"}],Rx=[],Tx="只读取 context 字段（props / state / data），不调用上下文方法",Ix=[{name:"limit",type:"number",default:"5",description:"最多展示几条记录"}],jx="withSignInPlugins(SignInCore, [createRewardHistoryPlugin()])",$x=[{name:"默认",description:"底部展示领取记录",src:"createRewardHistoryPlugin()",config:{}}],hs={name:kx,description:Px,since:_x,tags:Cx,events:Ex,methods:Rx,methodsNote:Tx,config:Ix,example:jx,examples:$x};function Kr(e={}){const{limit:n=5}=e;return{name:"RewardHistory",version:"0.1.0",description:hs.description,priority:51,enabled:!0,hooks:{renderFooter:t=>{const r=t.data.history??[],i=t.data.businessTimeZone;return r.length?c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:12,color:pn},children:"领取记录"}),r.slice(0,n).map(l=>c.jsxs("div",{style:{display:"flex",fontSize:12,color:it},children:[c.jsxs("span",{children:["第",l.day,"天 · ",l.label]}),c.jsx("span",{style:{marginLeft:"auto"},children:zh(l.at,i)})]},l.id))]}):c.jsx("div",{style:{fontSize:12,color:it},children:"暂无领取记录"})}}}}Kr.meta=hs;const bx={slug:"reward-history",title:"领取记录 RewardHistory",group:"plugin",intro:"底部区领取记录：data.history 按时间倒序展示，无记录显示终态文案。"},Dx=G(H,[Kr()]);function Nx(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Dx,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Mx=Object.freeze(Object.defineProperty({__proto__:null,default:Nx,meta:bx},Symbol.toStringTag,{value:"Module"})),Ox=`import React, { useState } from "react";\r
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
`,Fx=`import React, { useState } from "react";\r
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
`,Ax=`import React, { useState } from "react";\r
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
`,Bx=`import React, { useState } from "react";\r
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
`,Qx=`import React, { useState } from "react";\r
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
`,Kx=`import React, { useState } from "react";\r
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
`,Yx=`import React, { useState } from "react";\r
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
`,Xx=`import React, { useState } from "react";\r
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
`,ew=Object.assign({"./00-basic.tsx":lv,"./01-streak-state.tsx":uv,"./02-calendar-strip.tsx":pv,"./03-reward-preview.tsx":yv,"./04-makeup-slot.tsx":wv,"./05-today-check-in.tsx":Cv,"./06-points-balance.tsx":Fv,"./07-stat-row.tsx":qv,"./08-level-badge.tsx":pS,"./09-countdown.tsx":TS,"./10-calendar-grid.tsx":US,"./11-reward-claim.tsx":r0,"./12-milestone.tsx":y0,"./13-share.tsx":$0,"./14-remind.tsx":G0,"./15-invite.tsx":ox,"./16-rule-expand.tsx":wx,"./17-reward-history.tsx":Mx}),nw=Object.assign({"./00-basic.tsx":Ox,"./01-streak-state.tsx":Lx,"./02-calendar-strip.tsx":zx,"./03-reward-preview.tsx":Fx,"./04-makeup-slot.tsx":Ax,"./05-today-check-in.tsx":Bx,"./06-points-balance.tsx":Ux,"./07-stat-row.tsx":Wx,"./08-level-badge.tsx":Hx,"./09-countdown.tsx":Vx,"./10-calendar-grid.tsx":Gx,"./11-reward-claim.tsx":Qx,"./12-milestone.tsx":Kx,"./13-share.tsx":Yx,"./14-remind.tsx":Xx,"./15-invite.tsx":Zx,"./16-rule-expand.tsx":Jx,"./17-reward-history.tsx":qx}),tw=e=>e.replace(/^\.\//,""),Go=Object.entries(ew).map(([e,n])=>{const t=tw(e);return{meta:n.meta,Stage:n.default,file:t,source:nw[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),rw=Array.from(new Set(Go.map(e=>e.meta.group))),Rf={basic:{label:"基础用法"},advanced:{label:"进阶用法"},plugin:{label:"插件示例"}},iw="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",lw="true|false|null|undefined|this|super",ow="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",Uu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${iw})\b`,String.raw`\b(${lw})\b`,String.raw`\b(${ow})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),Wu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function aw(e){const n=[];let t=0;Uu.lastIndex=0;let r;for(;r=Uu.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const i=Wu.findIndex((l,o)=>r[o+1]!==void 0);n.push({text:r[0],cls:i>=0?Wu[i]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function Hu(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function sw({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[i,l]=y.useState("idle"),[o,a]=y.useState(!1),s=y.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&s.length>t,p=u&&!o?s.slice(0,t).join(`
`):e,d=y.useMemo(()=>aw(p),[p]),h=y.useCallback(async()=>{var S;let v=!1;if((S=navigator.clipboard)!=null&&S.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=Hu(e)}else v=Hu(e);l(v?"ok":"fail"),window.setTimeout(()=>l("idle"),1600)},[e]);return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-head",children:[c.jsx("span",{children:n}),c.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[c.jsxs("span",{children:[s.length," 行"]}),c.jsx("button",{type:"button",className:`code-copy${i==="ok"?" is-ok":i==="fail"?" is-fail":""}`,onClick:h,children:i==="ok"?"已复制":i==="fail"?"复制失败":"复制"})]})]}),c.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:c.jsx("code",{children:d.map((v,S)=>v.cls?c.jsx("span",{className:v.cls,children:v.text},S):c.jsx(Wr.Fragment,{children:v.text},S))})}),u?c.jsx("button",{type:"button",className:"code-more",onClick:()=>a(v=>!v),children:o?"收起":`展开余下 ${s.length-t} 行`}):null]})}function Tf(e){return e.props??e.config??[]}function uw({doc:e}){var i,l,o;const n=Tf(e),t=e.events??[],r=e.methods??[];return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"属性 Props"}),n.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"属性"}),c.jsx("th",{children:"类型"}),c.jsx("th",{children:"默认"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:n.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.type})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.default??"-"})}),c.jsx("td",{children:a.description??"—"})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"事件 Events"}),t.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"事件"}),c.jsx("th",{children:"触发时机"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:t.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:a.when}),c.jsx("td",{children:a.description})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"方法 Methods"}),r.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"方法"}),c.jsx("th",{children:"签名"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:r.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.signature})}),c.jsx("td",{children:a.description})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),c.jsxs("div",{className:"doc-cols",children:[(i=e.features)!=null&&i.length?c.jsxs("div",{children:[c.jsx("h5",{children:"能做"}),c.jsx("ul",{children:e.features.map(a=>c.jsx("li",{children:a},a))})]}):null,(l=e.useCases)!=null&&l.length?c.jsxs("div",{children:[c.jsx("h5",{children:"适合"}),c.jsx("ul",{children:e.useCases.map(a=>c.jsx("li",{children:a},a))})]}):null,(o=e.notes)!=null&&o.length?c.jsxs("div",{children:[c.jsx("h5",{children:"注意"}),c.jsx("ul",{children:e.notes.map(a=>c.jsx("li",{children:a},a))})]}):null]})]})}function cw({factory:e,priority:n,summary:t,doc:r,defaultOpen:i=!0}){var o,a;const l={props:Tf(r).length,events:((o=r.events)==null?void 0:o.length)??0,methods:((a=r.methods)==null?void 0:a.length)??0};return c.jsxs("details",{className:"api-plug",open:i,children:[c.jsxs("summary",{children:[c.jsx("code",{children:e}),c.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),c.jsx("span",{className:"api-plug-desc",children:t}),c.jsxs("span",{className:"api-plug-n",children:[l.props," 属性 · ",l.events," 事件 · ",l.methods," 方法"]})]}),c.jsx("div",{className:"api-plug-body",children:c.jsx(uw,{doc:r})})]})}const dw=/create[A-Z]\w*Plugin/g;function fw(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function If(e){return e.dir?`create${e.dir}`:fw(e.factory)}function pw(e){return new Set(e.match(dw)??[])}function gw(e,n){const t=pw(e);return n.filter(r=>t.has(If(r))).sort((r,i)=>r.priority-i.priority)}function mw({source:e,plugins:n,heading:t="本页用到的插件"}){const r=y.useMemo(()=>gw(e,n),[e,n]);return r.length===0?null:c.jsxs("section",{className:"api-sec",children:[c.jsxs("div",{className:"api-sec-head",children:[c.jsxs("h2",{className:"api-sec-title",children:[t," · ",r.length," 个"]}),c.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",c.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(i=>c.jsx(cw,{factory:If(i),priority:i.priority,summary:i.summary??i.doc.description??"",doc:i.doc},i.factory))]})}const hw=`\uFEFFimport type React from "react";
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
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createCalendarGridPlugin<T = unknown>(
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
`,yw=`\uFEFFimport type React from "react";
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
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createCalendarStripPlugin<T = unknown>(
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
`,vw=`\uFEFFimport type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { CountdownText } from "./internal";

export type CountdownConfig = Record<string, never>;

/**
 * CountdownPlugin - 次签倒计时（头部区）。
 * 依据 data.nextResetAt（绝对 epoch 毫秒）计算距下次可签到的剩余时间；
 * 已过期显示「现在可签到」。\`now\` 由 SignInCore 的时钟下发给消费者，每秒自动刷新。
 */
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createCountdownPlugin<T = unknown>(
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
`,Sw=`\uFEFFimport type React from "react";
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
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createInvitePlugin<T = unknown>(
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
`,xw=`\uFEFFimport type React from "react";
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
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createLevelBadgePlugin<T = unknown>(
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
`,ww=`\uFEFFimport type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { MakeupSlot } from "./internal";

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

/**
 * MakeupSlotPlugin - 补签位（操作区）。
 * 选「不晚于业务日、日期最早」的可补签格；配额耗尽 / 无可补目标分别提示，
 * 不再把两种状态混成「补签次数已用完」。
 */
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createMakeupSlotPlugin<T = unknown>(
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

createMakeupSlotPlugin.meta = doc as PluginDoc;
`,kw=`\uFEFFimport type React from "react";
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
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createMilestonePlugin<T = unknown>(
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
`,Pw=`\uFEFFimport type React from "react";
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
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createPointsBalancePlugin<T = unknown>(
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
`,_w=`\uFEFFimport type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { RemindButton } from "./internal";

export interface RemindConfig {
  /** 初始是否开启提醒（\`data.remindEnabled\` 存在时以数据为准） */
  defaultOn?: boolean;
  /** 持久化失败时的兜底文案（错误对象自带 message 时优先用 message） */
  errorText?: string;
}

/**
 * RemindPlugin - 签到提醒开关（操作区）。
 * 本地维护开关态，切换即经 ctx.callbacks.remind(enabled) 下发给消费方持久化；
 * 失败时回滚并展示错误（不再静默停在「已开启」）。
 */
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createRemindPlugin<T = unknown>(
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
`,Cw=`\uFEFFimport type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
  RewardInfo,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { TEXT_3 } from "../tokens";
import { ClaimButton } from "./internal";

export interface RewardClaimConfig {
  /** 请求在途时的按钮文案 */
  pendingText?: string;
  /** 回调失败时的兜底文案（错误对象自带 message 时优先用 message） */
  errorText?: string;
}

/**
 * RewardClaimPlugin - 当日奖励领取（奖励区）。
 * 找到「已达天数可领但尚未领取」的第一个奖励（data.rewards 中 day<=streak 且 !claimed），
 * 提供领取按钮；点按经 ctx.callbacks.claim(day) 下发。无待领时显示终态文案。
 */
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createRewardClaimPlugin<T = unknown>(
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
`,Ew=`\uFEFFimport type React from "react";
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
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createRewardHistoryPlugin<T = unknown>(
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
`,Rw=`\uFEFFimport type React from "react";
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
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createRewardPreviewPlugin<T = unknown>(
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
`,Tw=`\uFEFFimport type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { RuleBlock } from "./internal";

export interface RuleExpandConfig {
  /** 初始是否展开 */
  defaultOpen?: boolean;
}

/**
 * RuleExpandPlugin - 规则折叠展开（底部区）。
 * 将 data.rules 折叠为可展开列表，避免长规则文案常驻占用空间。
 * 无 rules 数据时静默返回 null。
 */
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createRuleExpandPlugin<T = unknown>(
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
`,Iw=`\uFEFFimport type React from "react";
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
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createSharePlugin<T = unknown>(
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
`,jw=`\uFEFFimport type React from "react";
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
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createStatRowPlugin<T = unknown>(
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
`,$w=`\uFEFFimport type React from "react";
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
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createStreakStatePlugin<T = unknown>(
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
`,bw=`\uFEFFimport type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { CheckInButton } from "./internal";

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

/**
 * TodayCheckInPlugin - 今日签到（操作区，主 CTA）。
 * todaySigned 驱动禁用态：已签 → 置灰「今日已签」，未签 → 高亮「立即签到」。
 * 点击经 ctx.callbacks.sign 下发，状态真相在消费方数据。
 */
// 泛型默认值 unknown：T 不参与类型结构（data 恒为 SignInData），默认值不影响调用方。
export function createTodayCheckInPlugin<T = unknown>(
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
`,P1={header:"头部区 · header",calendar:"日历区 · calendar",rewards:"奖励区 · rewards",actions:"操作区 · actions",footer:"底部区 · footer"},Vu=["header","calendar","rewards","actions","footer"],Gu=Object.assign({"/src/custom-plugins/CalendarGridPlugin/doc.json":us,"/src/custom-plugins/CalendarStripPlugin/doc.json":ns,"/src/custom-plugins/CountdownPlugin/doc.json":ss,"/src/custom-plugins/InvitePlugin/doc.json":gs,"/src/custom-plugins/LevelBadgePlugin/doc.json":as,"/src/custom-plugins/MakeupSlotPlugin/doc.json":rs,"/src/custom-plugins/MilestonePlugin/doc.json":ds,"/src/custom-plugins/PointsBalancePlugin/doc.json":ls,"/src/custom-plugins/RemindPlugin/doc.json":ps,"/src/custom-plugins/RewardClaimPlugin/doc.json":cs,"/src/custom-plugins/RewardHistoryPlugin/doc.json":hs,"/src/custom-plugins/RewardPreviewPlugin/doc.json":ts,"/src/custom-plugins/RuleExpandPlugin/doc.json":ms,"/src/custom-plugins/SharePlugin/doc.json":fs,"/src/custom-plugins/StatRowPlugin/doc.json":os,"/src/custom-plugins/StreakStatePlugin/doc.json":es,"/src/custom-plugins/TodayCheckInPlugin/doc.json":is}),Qu=Object.assign({"/src/custom-plugins/CalendarGridPlugin/create.tsx":hw,"/src/custom-plugins/CalendarStripPlugin/create.tsx":yw,"/src/custom-plugins/CountdownPlugin/create.tsx":vw,"/src/custom-plugins/InvitePlugin/create.tsx":Sw,"/src/custom-plugins/LevelBadgePlugin/create.tsx":xw,"/src/custom-plugins/MakeupSlotPlugin/create.tsx":ww,"/src/custom-plugins/MilestonePlugin/create.tsx":kw,"/src/custom-plugins/PointsBalancePlugin/create.tsx":Pw,"/src/custom-plugins/RemindPlugin/create.tsx":_w,"/src/custom-plugins/RewardClaimPlugin/create.tsx":Cw,"/src/custom-plugins/RewardHistoryPlugin/create.tsx":Ew,"/src/custom-plugins/RewardPreviewPlugin/create.tsx":Rw,"/src/custom-plugins/RuleExpandPlugin/create.tsx":Tw,"/src/custom-plugins/SharePlugin/create.tsx":Iw,"/src/custom-plugins/StatRowPlugin/create.tsx":jw,"/src/custom-plugins/StreakStatePlugin/create.tsx":$w,"/src/custom-plugins/TodayCheckInPlugin/create.tsx":bw}),jf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function Dw(e){const n=Object.keys(Qu).find(i=>jf(i)===e),t=n?Qu[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function Nw(e){const n=Object.keys(Gu).find(t=>jf(t)===e);return n?Gu[n]:{name:e,description:"（缺少 doc.json）"}}const Mw=[{dir:"StreakStatePlugin",group:"header",make:()=>An()},{dir:"PointsBalancePlugin",group:"header",make:()=>Vt()},{dir:"StatRowPlugin",group:"header",make:()=>Gt()},{dir:"LevelBadgePlugin",group:"header",make:()=>ct()},{dir:"CountdownPlugin",group:"header",make:()=>Qt()},{dir:"CalendarStripPlugin",group:"calendar",make:()=>st({showRewardDot:!0})},{dir:"CalendarGridPlugin",group:"calendar",make:()=>Kt()},{dir:"MakeupSlotPlugin",group:"calendar",make:()=>ut()},{dir:"RewardPreviewPlugin",group:"rewards",make:()=>Bn({limit:5})},{dir:"RewardClaimPlugin",group:"rewards",make:()=>dt()},{dir:"MilestonePlugin",group:"rewards",make:()=>Yt()},{dir:"TodayCheckInPlugin",group:"actions",make:()=>Un()},{dir:"SharePlugin",group:"actions",make:()=>Xt()},{dir:"RemindPlugin",group:"actions",make:()=>Zt()},{dir:"InvitePlugin",group:"actions",make:()=>Jt()},{dir:"RuleExpandPlugin",group:"footer",make:()=>qt({defaultOpen:!0})},{dir:"RewardHistoryPlugin",group:"footer",make:()=>Kr()}],Qo=Mw.map(e=>{const n=Nw(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:Dw(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>Vu.indexOf(e.group)-Vu.indexOf(n.group)||n.priority-e.priority),_1=["StreakStatePlugin","LevelBadgePlugin","CalendarStripPlugin","RewardPreviewPlugin","MilestonePlugin","TodayCheckInPlugin","MakeupSlotPlugin","SharePlugin","RuleExpandPlugin","RewardHistoryPlugin"];function Ow({entry:e,order:n}){var a;const{meta:t,Stage:r,source:i,file:l}=e,o=String(n).padStart(2,"0");return c.jsxs("article",{children:[c.jsx("header",{className:"page-head",children:c.jsxs("div",{children:[c.jsxs("p",{className:"eyebrow",children:[o," · ",((a=Rf[t.group])==null?void 0:a.label)??t.group]}),c.jsx("h1",{className:"page-title",children:t.title})]})}),t.intro?c.jsx("p",{className:"page-sub",children:t.intro}):null,c.jsx("section",{className:"demo-stage",children:c.jsx(r,{})}),c.jsxs("section",{className:"demo-src-wrap",children:[c.jsxs("div",{className:"demo-src-head",children:[c.jsxs("span",{className:"demo-src-title",children:["源码 · ",l]}),c.jsx("span",{className:"demo-src-hint",children:"下面这份就是上面正在跑的那份 · 已高亮"})]}),c.jsx(sw,{code:i,title:l,collapseAfter:28,maxHeight:460})]}),c.jsx(mw,{source:i,plugins:Qo})]})}const Lw={id:"ecommerce",title:"电商签到运营位",group:"运营位",ref:{label:"电商 App · 签到弹层",url:"https://vane.dev/examples/sign-in/ecommerce"},pain:"一个按钮的签到太单薄，用户不知道连签能拿什么；把碎插件拼成一张完整运营位卡。",plugs:[{fn:"createStreakStatePlugin",why:"头部连签天数 + 最高连签，给连续打卡的用户正反馈"},{fn:"createCalendarStripPlugin",cfg:"showRewardDot: true",why:"14 天连签条，今天/已签/漏签一眼看清，带奖励的格打点"},{fn:"createRewardPreviewPlugin",why:"逐日奖励预告，把『再签 1 天得 50 积分』前置"},{fn:"createTodayCheckInPlugin",why:"主 CTA：今日签到 / 已签切换"},{fn:"createMakeupSlotPlugin",why:"漏签用户给补签入口，挽回流失"}],props:["data={data}","callbacks={callbacks}"],note:"五个原子插件，组合后就是一张可直接上线的大促签到卡。"},zw=G(H,[An(),st({showRewardDot:!0}),Bn(),Un(),ut()]);function Fw(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(zw,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const Aw=Object.freeze(Object.defineProperty({__proto__:null,default:Fw,meta:Lw},Symbol.toStringTag,{value:"Module"})),Bw={id:"game-streak",title:"游戏连签激励",group:"激励",ref:{label:"游戏 · 每日任务",url:"https://vane.dev/examples/sign-in/game-streak"},pain:"游戏侧要的是成长曲线与紧迫感，单插件撑不起；用 6 个插件拼出『每日任务』面板。",plugs:[{fn:"createStreakStatePlugin",why:"连签天数 + 最高连签，冲榜动机"},{fn:"createCalendarGridPlugin",why:"月历网格，看整月进度"},{fn:"createMilestonePlugin",why:"里程碑节点（如 7/30 天）给阶段目标"},{fn:"createLevelBadgePlugin",why:"会员等级徽章，成长感"},{fn:"createRewardClaimPlugin",why:"达标奖励一键领取"},{fn:"createCountdownPlugin",why:"距下次刷新倒计时，制造紧迫"}],props:["data={data}","callbacks={callbacks}"],note:"倒计时依赖数据里的 nextResetAt，样本数据已带该字段。"},Uw=G(H,[An(),Kt(),Yt(),ct(),dt(),Qt()]);function Ww(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Uw,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const Hw=Object.freeze(Object.defineProperty({__proto__:null,default:Ww,meta:Bw},Symbol.toStringTag,{value:"Module"})),Vw={id:"membership",title:"会员积分中心",group:"账户",ref:{label:"会员中心",url:"https://vane.dev/examples/sign-in/membership"},pain:"会员中心重在资产与规则透明；碎插件组合成账户视图。",plugs:[{fn:"createPointsBalancePlugin",why:"积分余额醒目展示"},{fn:"createStatRowPlugin",why:"累计天数 / 连签 / 补签次数一横排"},{fn:"createLevelBadgePlugin",why:"当前等级与进度"},{fn:"createRewardPreviewPlugin",why:"积分可兑奖励预告"},{fn:"createRuleExpandPlugin",cfg:"defaultOpen: true",why:"积分规则可折叠展开"}],props:["data={data}","callbacks={callbacks}"],note:"sampleData 已带 level / rules 字段，等级与规则插件直接能渲染。"},Gw=G(H,[Vt(),Gt(),ct(),Bn(),qt({defaultOpen:!0})]);function Qw(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Gw,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const Kw=Object.freeze(Object.defineProperty({__proto__:null,default:Qw,meta:Vw},Symbol.toStringTag,{value:"Module"})),Yw={id:"social-viral",title:"社交分享裂变",group:"裂变",ref:{label:"社交裂变",url:"https://vane.dev/examples/sign-in/social-viral"},pain:"裂变链路是『签到→分享→邀请→提醒』，单插件无法表达流程；按顺序拼成一张裂变卡。",plugs:[{fn:"createTodayCheckInPlugin",why:"先完成今日签到这一动作"},{fn:"createSharePlugin",cfg:'text: "晒今日签到"',why:"分享得额外奖励的入口"},{fn:"createInvitePlugin",why:"邀请好友，裂变拉新"},{fn:"createRemindPlugin",why:"开启每日提醒，提升留存"},{fn:"createRewardClaimPlugin",why:"分享 / 邀请带来的奖励领取"}],props:["data={data}","callbacks={callbacks}"],note:"share / invite / remind 走各自 callbacks，组合后即一条裂变漏斗。"},Xw=G(H,[Un(),Xt({text:"晒今日签到"}),Jt(),Zt(),dt()]);function Zw(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(Xw,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const Jw=Object.freeze(Object.defineProperty({__proto__:null,default:Zw,meta:Yw},Symbol.toStringTag,{value:"Module"})),qw={id:"full-stack",title:"全功能中台 · 17 插件全量",group:"全集",ref:{label:"组件能力全集",url:"https://vane.dev/examples/sign-in/full"},pain:"想一次性看全部 17 个插件怎么共存——全量装配的压力测试。",plugs:[{fn:"createStreakStatePlugin",why:"头部连签状态"},{fn:"createPointsBalancePlugin",why:"积分余额"},{fn:"createStatRowPlugin",why:"统计横排"},{fn:"createLevelBadgePlugin",why:"等级徽章"},{fn:"createCountdownPlugin",why:"刷新倒计时"},{fn:"createCalendarStripPlugin",why:"连签条"},{fn:"createCalendarGridPlugin",why:"月历网格"},{fn:"createMakeupSlotPlugin",why:"补签入口"},{fn:"createRewardPreviewPlugin",why:"奖励预告"},{fn:"createRewardClaimPlugin",why:"奖励领取"},{fn:"createMilestonePlugin",why:"里程碑"},{fn:"createTodayCheckInPlugin",why:"今日签到 CTA"},{fn:"createSharePlugin",why:"分享"},{fn:"createRemindPlugin",why:"提醒"},{fn:"createInvitePlugin",why:"邀请"},{fn:"createRuleExpandPlugin",why:"规则展开"},{fn:"createRewardHistoryPlugin",why:"领取记录"}],props:["data={data}","callbacks={callbacks}"],note:"五个槽位（header/calendar/rewards/actions/footer）同时承载多个插件，靠 priority 决定共存顺序。"},e1=G(H,[An(),Vt(),Gt(),ct(),Qt(),st({showRewardDot:!0}),Kt(),ut(),Bn(),dt(),Yt(),Un(),Xt(),Zt(),Jt(),qt({defaultOpen:!0}),Kr()]);function n1(){const[e,n]=y.useState(!1),t=Z(e),r=q({sign:()=>n(!0)});return c.jsx(e1,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const t1=Object.freeze(Object.defineProperty({__proto__:null,default:n1,meta:qw},Symbol.toStringTag,{value:"Module"})),r1=`import React, { useState } from "react";\r
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
`,i1=`import React, { useState } from "react";\r
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
`,l1=`import React, { useState } from "react";\r
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
`,o1=`import React, { useState } from "react";\r
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
`,a1=`import React, { useState } from "react";\r
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
`,s1=Object.assign({"./01-ecommerce.tsx":Aw,"./02-game-streak.tsx":Hw,"./03-membership.tsx":Kw,"./04-social-viral.tsx":Jw,"./05-full-stack.tsx":t1}),u1=Object.assign({"./01-ecommerce.tsx":r1,"./02-game-streak.tsx":i1,"./03-membership.tsx":l1,"./04-social-viral.tsx":o1,"./05-full-stack.tsx":a1}),c1=e=>e.replace(/^\.\//,""),Ji=Object.entries(s1).map(([e,n])=>{const t=c1(e);return{meta:n.meta,Component:n.default,file:t,source:u1[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),C1=Ji.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),E1=Array.from(new Set(Ji.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort(),d1=y.lazy(()=>Ka(()=>import("./HomePage-vE8lSVON.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),f1=y.lazy(()=>Ka(()=>import("./PluginsPage-BQ16XuHc.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),p1=y.lazy(()=>Ka(()=>import("./ScenariosPage-Boqjjfpf.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),g1={pkg:"vane-sign-in",brand:"S",subtitle:"每日签到 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Qo.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Ji.length} plates`}],routes:[{path:"/",element:c.jsx(d1,{})},{path:"/plugins",element:c.jsx(f1,{})},{path:"/scenarios",element:c.jsx(p1,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:rw.map(e=>({key:e,label:Rf[e].label})),entries:Go,detail:(e,n)=>c.jsx(Ow,{entry:e,order:n})},footer:[`${Qo.length} PLUGINS · ${Ji.length} PLATES`,`${Go.length} DEMOS · 插件索引`]};function m1(){return c.jsx(gh,{config:g1})}const h1=G(H,[An(),st(),Bn(),ut(),Un(),Vt(),Gt(),ct(),Qt(),Kt(),dt(),Yt(),Xt(),Zt(),Jt(),qt(),Kr()]),Ko=()=>new Promise(e=>setTimeout(e,0)),y1=async(e,n=60)=>{for(let t=0;t<n&&!e();t++)await Ko()};async function v1(e){const n=document.createElement("div");n.style.cssText="position:fixed;left:0;top:0;width:420px;background:#fff",document.body.appendChild(n);const t=af(n);return Yi.flushSync(()=>t.render(e)),await Ko(),{host:n,root:t,q:r=>n.querySelector(r),qq:r=>n.querySelectorAll(r),click:async r=>{const i=n.querySelector(r);if(!i)throw new Error(`找不到元素 ${r}`);Yi.flushSync(()=>i.click()),await Ko()}}}function S1(e){const t=Array.from(e.querySelectorAll("*")).map(a=>({e:a,r:a.getBoundingClientRect()}));if(!t.some(a=>a.r.width>0||a.r.height>0))return{checked:0,problems:[]};const i=[];let l=0;const o=e.getBoundingClientRect();for(const{r:a}of t)l+=1,(a.width<0||a.height<0)&&i.push("negative-size"),(a.left<-1||a.top<-1)&&i.push("negative-coord"),(a.right>o.right+1||a.bottom>o.bottom+1)&&i.push("overflow"),(a.width===0||a.height===0)&&i.push("zero-size");return e.scrollHeight>e.clientHeight+1&&i.push("scroll-overflow"),{checked:l,problems:Array.from(new Set(i))}}async function x1(){const e=[];let n=0;const t=(l,o)=>{n+=1,document.title=`SELFTEST RUNNING ${n}`,o||e.push(l)},r={signed:!1,claimed:null,makeup:null};function i(){const[l,o]=y.useState(!1),a=Z(l),s={sign:()=>{r.signed=!0,o(!0)},claim:u=>{r.claimed=u},makeup:u=>{r.makeup=u},share:()=>{},remind:()=>{},invite:()=>{}};return c.jsx(h1,{data:a,callbacks:s,containerStyle:{maxWidth:480}})}{const l=await v1(c.jsx(i,{}));t("根容器渲染 si-root",!!l.q('[data-testid="si-root"]'));const o=l.q('[data-testid="si-streak"]');t("连签数渲染（未签 streak=7）",!!o&&(o.textContent??"").includes("7")&&(o.textContent??"").includes("天连签"));const a=l.q('[data-testid="si-checkin-btn"]');t("今日签到按钮：未签态存在",!!a&&a.dataset.signed==="false"),t("今日签到按钮：未签文本「立即签到」",((a==null?void 0:a.textContent)??"")==="立即签到");const s=l.q('[data-testid="si-makeup-btn"]');t("补签入口存在且未禁用",!!s&&s.dataset.disabled==="false"&&s.disabled===!1),t("补签文案含「补签」",((s==null?void 0:s.textContent)??"").includes("补签")),t("未达领奖天数时无领取按钮",!l.q('[data-testid="si-claim-btn"]')),await l.click('[data-testid="si-checkin-btn"]'),await y1(()=>{var v;return((v=l.q('[data-testid="si-checkin-btn"]'))==null?void 0:v.dataset.signed)==="true"});const u=l.q('[data-testid="si-checkin-btn"]');t("签到后：按钮态 signed=true",(u==null?void 0:u.dataset.signed)==="true"),t("签到后：按钮禁用",(u==null?void 0:u.disabled)===!0),t("签到后：文案「今日已签 ✓」",((u==null?void 0:u.textContent)??"").includes("今日已签"));const p=l.q('[data-testid="si-streak"]');t("签到后：连签数更新为 8",!!p&&(p.textContent??"").includes("8")),t("签到回调被触发",r.signed===!0);const d=l.q('[data-testid="si-claim-btn"]');t("达标后：出现领取按钮",!!d&&d.dataset.day==="8"),d&&(await l.click('[data-testid="si-claim-btn"]'),t("领取回调被触发且 day=8",r.claimed===8)),await l.click('[data-testid="si-makeup-btn"]'),t("补签回调被触发且日期=2026-10-09",r.makeup==="2026-10-09");const h=S1(l.host);t("几何体检：0 问题（happy-dom 无布局引擎时自动跳过）",h.problems.length===0&&(h.checked===0||h.checked>=2)),Yi.flushSync(()=>l.root.unmount()),l.host.remove()}return{total:n,passed:n-e.length,failed:e}}async function w1(){document.title="SELFTEST RUNNING";try{const e=await x1();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Vl.createRoot(document.getElementById("root")).render(c.jsx(m1,{}));typeof location<"u"&&location.search.includes("selftest=1")&&w1();export{sw as C,Go as D,Vu as G,Qo as P,Ji as S,E1 as U,_1 as a,P1 as b,q as c,Z as d,H as e,C1 as f,c as j,y as r,G as w};
