const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ScenariosPage-BiuCdtcJ.js","./audit-candidate-d0BA5Px3.js","./selftest-CXvR7g4h.js"])))=>i.map(i=>d[i]);
var Ff=Object.defineProperty;var Uf=(e,n,t)=>n in e?Ff(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var vs=(e,n,t)=>Uf(e,typeof n!="symbol"?n+"":n,t);function Wf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Hf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rc={exports:{}},Fo={},oc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr=Symbol.for("react.element"),Vf=Symbol.for("react.portal"),Kf=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),Qf=Symbol.for("react.profiler"),Yf=Symbol.for("react.provider"),Xf=Symbol.for("react.context"),Zf=Symbol.for("react.forward_ref"),Jf=Symbol.for("react.suspense"),qf=Symbol.for("react.memo"),ep=Symbol.for("react.lazy"),xs=Symbol.iterator;function np(e){return e===null||typeof e!="object"?null:(e=xs&&e[xs]||e["@@iterator"],typeof e=="function"?e:null)}var ic={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lc=Object.assign,ac={};function Nt(e,n,t){this.props=e,this.context=n,this.refs=ac,this.updater=t||ic}Nt.prototype.isReactComponent={};Nt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Nt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sc(){}sc.prototype=Nt.prototype;function Gl(e,n,t){this.props=e,this.context=n,this.refs=ac,this.updater=t||ic}var Ql=Gl.prototype=new sc;Ql.constructor=Gl;lc(Ql,Nt.prototype);Ql.isPureReactComponent=!0;var Ss=Array.isArray,uc=Object.prototype.hasOwnProperty,Yl={current:null},cc={key:!0,ref:!0,__self:!0,__source:!0};function dc(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)uc.call(n,r)&&!cc.hasOwnProperty(r)&&(o[r]=n[r]);var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:jr,type:e,key:i,ref:l,props:o,_owner:Yl.current}}function tp(e,n){return{$$typeof:jr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===jr}function rp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ws=/\/+/g;function yi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?rp(""+e.key):n.toString(36)}function no(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case jr:case Vf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+yi(l,0):r,Ss(o)?(t="",e!=null&&(t=e.replace(ws,"$&/")+"/"),no(o,n,t,"",function(c){return c})):o!=null&&(Xl(o)&&(o=tp(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ws,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",Ss(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+yi(i,a);l+=no(i,n,t,s,o)}else if(s=np(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+yi(i,a++),l+=no(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Lr(e,n,t){if(e==null)return e;var r=[],o=0;return no(e,r,"","",function(i){return n.call(t,i,o++)}),r}function op(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},to={transition:null},ip={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:to,ReactCurrentOwner:Yl};function fc(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Lr,forEach:function(e,n,t){Lr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Lr(e,function(){n++}),n},toArray:function(e){return Lr(e,function(n){return n})||[]},only:function(e){if(!Xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Nt;M.Fragment=Kf;M.Profiler=Qf;M.PureComponent=Gl;M.StrictMode=Gf;M.Suspense=Jf;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ip;M.act=fc;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lc({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Yl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)uc.call(n,s)&&!cc.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:jr,type:e.type,key:o,ref:i,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:Xf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yf,_context:e},e.Consumer=e};M.createElement=dc;M.createFactory=function(e){var n=dc.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Zf,render:e}};M.isValidElement=Xl;M.lazy=function(e){return{$$typeof:ep,_payload:{_status:-1,_result:e},_init:op}};M.memo=function(e,n){return{$$typeof:qf,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=to.transition;to.transition={};try{e()}finally{to.transition=n}};M.unstable_act=fc;M.useCallback=function(e,n){return ke.current.useCallback(e,n)};M.useContext=function(e){return ke.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};M.useEffect=function(e,n){return ke.current.useEffect(e,n)};M.useId=function(){return ke.current.useId()};M.useImperativeHandle=function(e,n,t){return ke.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return ke.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return ke.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return ke.current.useMemo(e,n)};M.useReducer=function(e,n,t){return ke.current.useReducer(e,n,t)};M.useRef=function(e){return ke.current.useRef(e)};M.useState=function(e){return ke.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return ke.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return ke.current.useTransition()};M.version="18.3.1";oc.exports=M;var y=oc.exports;const Dn=Hf(y),lp=Wf({__proto__:null,default:Dn},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=y,sp=Symbol.for("react.element"),up=Symbol.for("react.fragment"),cp=Object.prototype.hasOwnProperty,dp=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fp={key:!0,ref:!0,__self:!0,__source:!0};function pc(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)cp.call(n,r)&&!fp.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:sp,type:e,key:i,ref:l,props:o,_owner:dp.current}}Fo.Fragment=up;Fo.jsx=pc;Fo.jsxs=pc;rc.exports=Fo;var u=rc.exports,Ki={},gc={exports:{}},Re={},mc={exports:{}},hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,R){var z=N.length;N.push(R);e:for(;0<z;){var Q=z-1>>>1,te=N[Q];if(0<o(te,R))N[Q]=R,N[z]=te,z=Q;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var R=N[0],z=N.pop();if(z!==R){N[0]=z;e:for(var Q=0,te=N.length,U=te>>>1;Q<U;){var W=2*(Q+1)-1,le=N[W],ge=W+1,ae=N[ge];if(0>o(le,z))ge<te&&0>o(ae,le)?(N[Q]=ae,N[ge]=z,Q=ge):(N[Q]=le,N[W]=z,Q=W);else if(ge<te&&0>o(ae,z))N[Q]=ae,N[ge]=z,Q=ge;else break e}}return R}function o(N,R){var z=N.sortIndex-R.sortIndex;return z!==0?z:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],d=1,f=null,h=3,v=!1,x=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var R=t(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=N)r(c),R.sortIndex=R.expirationTime,n(s,R);else break;R=t(c)}}function k(N){if(w=!1,m(N),!x)if(t(s)!==null)x=!0,xe(E);else{var R=t(c);R!==null&&Xe(k,R.startTime-N)}}function E(N,R){x=!1,w&&(w=!1,g($),$=-1),v=!0;var z=h;try{for(m(R),f=t(s);f!==null&&(!(f.expirationTime>R)||N&&!D());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,h=f.priorityLevel;var te=Q(f.expirationTime<=R);R=e.unstable_now(),typeof te=="function"?f.callback=te:f===t(s)&&r(s),m(R)}else r(s);f=t(s)}if(f!==null)var U=!0;else{var W=t(c);W!==null&&Xe(k,W.startTime-R),U=!1}return U}finally{f=null,h=z,v=!1}}var P=!1,T=null,$=-1,S=5,C=-1;function D(){return!(e.unstable_now()-C<S)}function A(){if(T!==null){var N=e.unstable_now();C=N;var R=!0;try{R=T(!0,N)}finally{R?L():(P=!1,T=null)}}else P=!1}var L;if(typeof p=="function")L=function(){p(A)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,Le=B.port2;B.port1.onmessage=A,L=function(){Le.postMessage(null)}}else L=function(){j(A,0)};function xe(N){T=N,P||(P=!0,L())}function Xe(N,R){$=j(function(){N(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,xe(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var z=h;h=R;try{return N()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=h;h=N;try{return R()}finally{h=z}},e.unstable_scheduleCallback=function(N,R,z){var Q=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Q+z:Q):z=Q,N){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=z+te,N={id:d++,callback:R,priorityLevel:N,startTime:z,expirationTime:te,sortIndex:-1},z>Q?(N.sortIndex=z,n(c,N),t(s)===null&&N===t(c)&&(w?(g($),$=-1):w=!0,Xe(k,z-Q))):(N.sortIndex=te,n(s,N),x||v||(x=!0,xe(E))),N},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(N){var R=h;return function(){var z=h;h=R;try{return N.apply(this,arguments)}finally{h=z}}}})(hc);mc.exports=hc;var pp=mc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp=y,Oe=pp;function b(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yc=new Set,sr={};function nt(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(sr[e]=n,e=0;e<n.length;e++)yc.add(n[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gi=Object.prototype.hasOwnProperty,mp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ks={},Cs={};function hp(e){return Gi.call(Cs,e)?!0:Gi.call(ks,e)?!1:mp.test(e)?Cs[e]=!0:(ks[e]=!0,!1)}function yp(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vp(e,n,t,r){if(n===null||typeof n>"u"||yp(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ce(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];fe[n]=new Ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zl=/[\-:]([a-z])/g;function Jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Zl,Jl);fe[n]=new Ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Zl,Jl);fe[n]=new Ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Zl,Jl);fe[n]=new Ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function ql(e,n,t,r){var o=fe.hasOwnProperty(n)?fe[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(vp(n,t,o,r)&&(t=null),r||o===null?hp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var fn=gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zr=Symbol.for("react.element"),lt=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),ea=Symbol.for("react.strict_mode"),Qi=Symbol.for("react.profiler"),vc=Symbol.for("react.provider"),xc=Symbol.for("react.context"),na=Symbol.for("react.forward_ref"),Yi=Symbol.for("react.suspense"),Xi=Symbol.for("react.suspense_list"),ta=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),Sc=Symbol.for("react.offscreen"),Ps=Symbol.iterator;function At(e){return e===null||typeof e!="object"?null:(e=Ps&&e[Ps]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,vi;function Qt(e){if(vi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);vi=n&&n[1]||""}return`
`+vi+e}var xi=!1;function Si(e,n){if(!e||xi)return"";xi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{xi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Qt(e):""}function xp(e){switch(e.tag){case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 2:case 15:return e=Si(e.type,!1),e;case 11:return e=Si(e.type.render,!1),e;case 1:return e=Si(e.type,!0),e;default:return""}}function Zi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case at:return"Fragment";case lt:return"Portal";case Qi:return"Profiler";case ea:return"StrictMode";case Yi:return"Suspense";case Xi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xc:return(e.displayName||"Context")+".Consumer";case vc:return(e._context.displayName||"Context")+".Provider";case na:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ta:return n=e.displayName||null,n!==null?n:Zi(e.type)||"Memo";case mn:n=e._payload,e=e._init;try{return Zi(e(n))}catch{}}return null}function Sp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zi(n);case 8:return n===ea?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wp(e){var n=wc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mr(e){e._valueTracker||(e._valueTracker=wp(e))}function kc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=wc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ji(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function _s(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=On(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Cc(e,n){n=n.checked,n!=null&&ql(e,"checked",n,!1)}function qi(e,n){Cc(e,n);var t=On(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?el(e,n.type,t):n.hasOwnProperty("defaultValue")&&el(e,n.type,On(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function bs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function el(e,n,t){(n!=="number"||go(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Yt=Array.isArray;function vt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+On(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function nl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(b(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function js(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(b(92));if(Yt(t)){if(1<t.length)throw Error(b(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:On(t)}}function Pc(e,n){var t=On(n.value),r=On(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Es(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function _c(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?_c(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ur(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kp=["Webkit","ms","Moz","O"];Object.keys(qt).forEach(function(e){kp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),qt[n]=qt[e]})});function jc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||qt.hasOwnProperty(e)&&qt[e]?(""+n).trim():n+"px"}function Ec(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=jc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Cp=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,n){if(n){if(Cp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(b(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(b(61))}if(n.style!=null&&typeof n.style!="object")throw Error(b(62))}}function ol(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,xt=null,St=null;function Ts(e){if(e=$r(e)){if(typeof ll!="function")throw Error(b(280));var n=e.stateNode;n&&(n=Ko(n),ll(e.stateNode,e.type,n))}}function Tc(e){xt?St?St.push(e):St=[e]:xt=e}function $c(){if(xt){var e=xt,n=St;if(St=xt=null,Ts(e),n)for(e=0;e<n.length;e++)Ts(n[e])}}function Nc(e,n){return e(n)}function Oc(){}var wi=!1;function Rc(e,n,t){if(wi)return e(n,t);wi=!0;try{return Nc(e,n,t)}finally{wi=!1,(xt!==null||St!==null)&&(Oc(),$c())}}function cr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ko(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(b(231,n,typeof t));return t}var al=!1;if(sn)try{var Bt={};Object.defineProperty(Bt,"passive",{get:function(){al=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch{al=!1}function Pp(e,n,t,r,o,i,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(d){this.onError(d)}}var er=!1,mo=null,ho=!1,sl=null,_p={onError:function(e){er=!0,mo=e}};function bp(e,n,t,r,o,i,l,a,s){er=!1,mo=null,Pp.apply(_p,arguments)}function jp(e,n,t,r,o,i,l,a,s){if(bp.apply(this,arguments),er){if(er){var c=mo;er=!1,mo=null}else throw Error(b(198));ho||(ho=!0,sl=c)}}function tt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Dc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function $s(e){if(tt(e)!==e)throw Error(b(188))}function Ep(e){var n=e.alternate;if(!n){if(n=tt(e),n===null)throw Error(b(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return $s(o),e;if(i===r)return $s(o),n;i=i.sibling}throw Error(b(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l)throw Error(b(189))}}if(t.alternate!==r)throw Error(b(190))}if(t.tag!==3)throw Error(b(188));return t.stateNode.current===t?e:n}function Lc(e){return e=Ep(e),e!==null?zc(e):null}function zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=zc(e);if(n!==null)return n;e=e.sibling}return null}var Mc=Oe.unstable_scheduleCallback,Ns=Oe.unstable_cancelCallback,Tp=Oe.unstable_shouldYield,$p=Oe.unstable_requestPaint,ee=Oe.unstable_now,Np=Oe.unstable_getCurrentPriorityLevel,oa=Oe.unstable_ImmediatePriority,Ic=Oe.unstable_UserBlockingPriority,yo=Oe.unstable_NormalPriority,Op=Oe.unstable_LowPriority,Ac=Oe.unstable_IdlePriority,Uo=null,en=null;function Rp(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Uo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:zp,Dp=Math.log,Lp=Math.LN2;function zp(e){return e>>>=0,e===0?32:31-(Dp(e)/Lp|0)|0}var Ar=64,Br=4194304;function Xt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~o;a!==0?r=Xt(a):(i&=l,i!==0&&(r=Xt(i)))}else l=t&~o,l!==0?r=Xt(l):i!==0&&(r=Xt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ke(n),o=1<<t,r|=e[t],n&=~o;return r}function Mp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ip(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ke(i),a=1<<l,s=o[l];s===-1?(!(a&t)||a&r)&&(o[l]=Mp(a,n)):s<=n&&(e.expiredLanes|=a),i&=~a}}function ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bc(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),e}function ki(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Er(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ke(n),e[n]=t}function Ap(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Ke(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function ia(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ke(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var F=0;function Fc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uc,la,Wc,Hc,Vc,cl=!1,Fr=[],Cn=null,Pn=null,_n=null,dr=new Map,fr=new Map,yn=[],Bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Os(e,n){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":dr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(n.pointerId)}}function Ft(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=$r(n),n!==null&&la(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Fp(e,n,t,r,o){switch(n){case"focusin":return Cn=Ft(Cn,e,n,t,r,o),!0;case"dragenter":return Pn=Ft(Pn,e,n,t,r,o),!0;case"mouseover":return _n=Ft(_n,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return dr.set(i,Ft(dr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,fr.set(i,Ft(fr.get(i)||null,e,n,t,r,o)),!0}return!1}function Kc(e){var n=Vn(e.target);if(n!==null){var t=tt(n);if(t!==null){if(n=t.tag,n===13){if(n=Dc(t),n!==null){e.blockedOn=n,Vc(e.priority,function(){Wc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ro(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=dl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);il=r,t.target.dispatchEvent(r),il=null}else return n=$r(t),n!==null&&la(n),e.blockedOn=t,!1;n.shift()}return!0}function Rs(e,n,t){ro(e)&&t.delete(n)}function Up(){cl=!1,Cn!==null&&ro(Cn)&&(Cn=null),Pn!==null&&ro(Pn)&&(Pn=null),_n!==null&&ro(_n)&&(_n=null),dr.forEach(Rs),fr.forEach(Rs)}function Ut(e,n){e.blockedOn===n&&(e.blockedOn=null,cl||(cl=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Up)))}function pr(e){function n(o){return Ut(o,e)}if(0<Fr.length){Ut(Fr[0],e);for(var t=1;t<Fr.length;t++){var r=Fr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&Ut(Cn,e),Pn!==null&&Ut(Pn,e),_n!==null&&Ut(_n,e),dr.forEach(n),fr.forEach(n),t=0;t<yn.length;t++)r=yn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(t=yn[0],t.blockedOn===null);)Kc(t),t.blockedOn===null&&yn.shift()}var wt=fn.ReactCurrentBatchConfig,xo=!0;function Wp(e,n,t,r){var o=F,i=wt.transition;wt.transition=null;try{F=1,aa(e,n,t,r)}finally{F=o,wt.transition=i}}function Hp(e,n,t,r){var o=F,i=wt.transition;wt.transition=null;try{F=4,aa(e,n,t,r)}finally{F=o,wt.transition=i}}function aa(e,n,t,r){if(xo){var o=dl(e,n,t,r);if(o===null)Oi(e,n,r,So,t),Os(e,r);else if(Fp(o,e,n,t,r))r.stopPropagation();else if(Os(e,r),n&4&&-1<Bp.indexOf(e)){for(;o!==null;){var i=$r(o);if(i!==null&&Uc(i),i=dl(e,n,t,r),i===null&&Oi(e,n,r,So,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Oi(e,n,r,null,t)}}var So=null;function dl(e,n,t,r){if(So=null,e=ra(r),e=Vn(e),e!==null)if(n=tt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Dc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return So=e,null}function Gc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Np()){case oa:return 1;case Ic:return 4;case yo:case Op:return 16;case Ac:return 536870912;default:return 16}default:return 16}}var xn=null,sa=null,oo=null;function Qc(){if(oo)return oo;var e,n=sa,t=n.length,r,o="value"in xn?xn.value:xn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return oo=o.slice(e,1<r?1-r:void 0)}function io(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ur(){return!0}function Ds(){return!1}function De(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ur:Ds,this.isPropagationStopped=Ds,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ur)},persist:function(){},isPersistent:Ur}),n}var Ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=De(Ot),Tr=J({},Ot,{view:0,detail:0}),Vp=De(Tr),Ci,Pi,Wt,Wo=J({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wt&&(Wt&&e.type==="mousemove"?(Ci=e.screenX-Wt.screenX,Pi=e.screenY-Wt.screenY):Pi=Ci=0,Wt=e),Ci)},movementY:function(e){return"movementY"in e?e.movementY:Pi}}),Ls=De(Wo),Kp=J({},Wo,{dataTransfer:0}),Gp=De(Kp),Qp=J({},Tr,{relatedTarget:0}),_i=De(Qp),Yp=J({},Ot,{animationName:0,elapsedTime:0,pseudoElement:0}),Xp=De(Yp),Zp=J({},Ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jp=De(Zp),qp=J({},Ot,{data:0}),zs=De(qp),eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tg[e])?!!n[e]:!1}function ca(){return rg}var og=J({},Tr,{key:function(e){if(e.key){var n=eg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ng[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ca,charCode:function(e){return e.type==="keypress"?io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ig=De(og),lg=J({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ms=De(lg),ag=J({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ca}),sg=De(ag),ug=J({},Ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),cg=De(ug),dg=J({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fg=De(dg),pg=[9,13,27,32],da=sn&&"CompositionEvent"in window,nr=null;sn&&"documentMode"in document&&(nr=document.documentMode);var gg=sn&&"TextEvent"in window&&!nr,Yc=sn&&(!da||nr&&8<nr&&11>=nr),Is=" ",As=!1;function Xc(e,n){switch(e){case"keyup":return pg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var st=!1;function mg(e,n){switch(e){case"compositionend":return Zc(n);case"keypress":return n.which!==32?null:(As=!0,Is);case"textInput":return e=n.data,e===Is&&As?null:e;default:return null}}function hg(e,n){if(st)return e==="compositionend"||!da&&Xc(e,n)?(e=Qc(),oo=sa=xn=null,st=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yc&&n.locale!=="ko"?null:n.data;default:return null}}var yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yg[e.type]:n==="textarea"}function Jc(e,n,t,r){Tc(r),n=wo(n,"onChange"),0<n.length&&(t=new ua("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var tr=null,gr=null;function vg(e){ud(e,0)}function Ho(e){var n=dt(e);if(kc(n))return e}function xg(e,n){if(e==="change")return n}var qc=!1;if(sn){var bi;if(sn){var ji="oninput"in document;if(!ji){var Fs=document.createElement("div");Fs.setAttribute("oninput","return;"),ji=typeof Fs.oninput=="function"}bi=ji}else bi=!1;qc=bi&&(!document.documentMode||9<document.documentMode)}function Us(){tr&&(tr.detachEvent("onpropertychange",ed),gr=tr=null)}function ed(e){if(e.propertyName==="value"&&Ho(gr)){var n=[];Jc(n,gr,e,ra(e)),Rc(vg,n)}}function Sg(e,n,t){e==="focusin"?(Us(),tr=n,gr=t,tr.attachEvent("onpropertychange",ed)):e==="focusout"&&Us()}function wg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ho(gr)}function kg(e,n){if(e==="click")return Ho(n)}function Cg(e,n){if(e==="input"||e==="change")return Ho(n)}function Pg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ye=typeof Object.is=="function"?Object.is:Pg;function mr(e,n){if(Ye(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Gi.call(n,o)||!Ye(e[o],n[o]))return!1}return!0}function Ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hs(e,n){var t=Ws(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ws(t)}}function nd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?nd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function td(){for(var e=window,n=go();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=go(e.document)}return n}function fa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function _g(e){var n=td(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&nd(t.ownerDocument.documentElement,t)){if(r!==null&&fa(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Hs(t,i);var l=Hs(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bg=sn&&"documentMode"in document&&11>=document.documentMode,ut=null,fl=null,rr=null,pl=!1;function Vs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pl||ut==null||ut!==go(r)||(r=ut,"selectionStart"in r&&fa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rr&&mr(rr,r)||(rr=r,r=wo(fl,"onSelect"),0<r.length&&(n=new ua("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ut)))}function Wr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ct={animationend:Wr("Animation","AnimationEnd"),animationiteration:Wr("Animation","AnimationIteration"),animationstart:Wr("Animation","AnimationStart"),transitionend:Wr("Transition","TransitionEnd")},Ei={},rd={};sn&&(rd=document.createElement("div").style,"AnimationEvent"in window||(delete ct.animationend.animation,delete ct.animationiteration.animation,delete ct.animationstart.animation),"TransitionEvent"in window||delete ct.transitionend.transition);function Vo(e){if(Ei[e])return Ei[e];if(!ct[e])return e;var n=ct[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in rd)return Ei[e]=n[t];return e}var od=Vo("animationend"),id=Vo("animationiteration"),ld=Vo("animationstart"),ad=Vo("transitionend"),sd=new Map,Ks="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,n){sd.set(e,n),nt(n,[e])}for(var Ti=0;Ti<Ks.length;Ti++){var $i=Ks[Ti],jg=$i.toLowerCase(),Eg=$i[0].toUpperCase()+$i.slice(1);Ln(jg,"on"+Eg)}Ln(od,"onAnimationEnd");Ln(id,"onAnimationIteration");Ln(ld,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(ad,"onTransitionEnd");Pt("onMouseEnter",["mouseout","mouseover"]);Pt("onMouseLeave",["mouseout","mouseover"]);Pt("onPointerEnter",["pointerout","pointerover"]);Pt("onPointerLeave",["pointerout","pointerover"]);nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zt));function Gs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,jp(r,n,void 0,e),e.currentTarget=null}function ud(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Gs(o,a,c),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Gs(o,a,c),i=s}}}if(ho)throw e=sl,ho=!1,sl=null,e}function V(e,n){var t=n[vl];t===void 0&&(t=n[vl]=new Set);var r=e+"__bubble";t.has(r)||(cd(n,e,2,!1),t.add(r))}function Ni(e,n,t){var r=0;n&&(r|=4),cd(t,e,r,n)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function hr(e){if(!e[Hr]){e[Hr]=!0,yc.forEach(function(t){t!=="selectionchange"&&(Tg.has(t)||Ni(t,!1,e),Ni(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Hr]||(n[Hr]=!0,Ni("selectionchange",!1,n))}}function cd(e,n,t,r){switch(Gc(n)){case 1:var o=Wp;break;case 4:o=Hp;break;default:o=aa}t=o.bind(null,n,t,e),o=void 0,!al||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Oi(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Vn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Rc(function(){var c=i,d=ra(t),f=[];e:{var h=sd.get(e);if(h!==void 0){var v=ua,x=e;switch(e){case"keypress":if(io(t)===0)break e;case"keydown":case"keyup":v=ig;break;case"focusin":x="focus",v=_i;break;case"focusout":x="blur",v=_i;break;case"beforeblur":case"afterblur":v=_i;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=sg;break;case od:case id:case ld:v=Xp;break;case ad:v=cg;break;case"scroll":v=Vp;break;case"wheel":v=fg;break;case"copy":case"cut":case"paste":v=Jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ms}var w=(n&4)!==0,j=!w&&e==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var p=c,m;p!==null;){m=p;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,g!==null&&(k=cr(p,g),k!=null&&w.push(yr(p,k,m)))),j)break;p=p.return}0<w.length&&(h=new v(h,x,null,t,d),f.push({event:h,listeners:w}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&t!==il&&(x=t.relatedTarget||t.fromElement)&&(Vn(x)||x[un]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(x=t.relatedTarget||t.toElement,v=c,x=x?Vn(x):null,x!==null&&(j=tt(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(w=Ls,k="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ms,k="onPointerLeave",g="onPointerEnter",p="pointer"),j=v==null?h:dt(v),m=x==null?h:dt(x),h=new w(k,p+"leave",v,t,d),h.target=j,h.relatedTarget=m,k=null,Vn(d)===c&&(w=new w(g,p+"enter",x,t,d),w.target=m,w.relatedTarget=j,k=w),j=k,v&&x)n:{for(w=v,g=x,p=0,m=w;m;m=it(m))p++;for(m=0,k=g;k;k=it(k))m++;for(;0<p-m;)w=it(w),p--;for(;0<m-p;)g=it(g),m--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break n;w=it(w),g=it(g)}w=null}else w=null;v!==null&&Qs(f,h,v,w,!1),x!==null&&j!==null&&Qs(f,j,x,w,!0)}}e:{if(h=c?dt(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var E=xg;else if(Bs(h))if(qc)E=Cg;else{E=wg;var P=Sg}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=kg);if(E&&(E=E(e,c))){Jc(f,E,t,d);break e}P&&P(e,h,c),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&el(h,"number",h.value)}switch(P=c?dt(c):window,e){case"focusin":(Bs(P)||P.contentEditable==="true")&&(ut=P,fl=c,rr=null);break;case"focusout":rr=fl=ut=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":pl=!1,Vs(f,t,d);break;case"selectionchange":if(bg)break;case"keydown":case"keyup":Vs(f,t,d)}var T;if(da)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else st?Xc(e,t)&&($="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&($="onCompositionStart");$&&(Yc&&t.locale!=="ko"&&(st||$!=="onCompositionStart"?$==="onCompositionEnd"&&st&&(T=Qc()):(xn=d,sa="value"in xn?xn.value:xn.textContent,st=!0)),P=wo(c,$),0<P.length&&($=new zs($,e,null,t,d),f.push({event:$,listeners:P}),T?$.data=T:(T=Zc(t),T!==null&&($.data=T)))),(T=gg?mg(e,t):hg(e,t))&&(c=wo(c,"onBeforeInput"),0<c.length&&(d=new zs("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:c}),d.data=T))}ud(f,n)})}function yr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function wo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=cr(e,t),i!=null&&r.unshift(yr(e,i,o)),i=cr(e,n),i!=null&&r.push(yr(e,i,o))),e=e.return}return r}function it(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qs(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=cr(t,i),s!=null&&l.unshift(yr(t,s,a))):o||(s=cr(t,i),s!=null&&l.push(yr(t,s,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var $g=/\r\n?/g,Ng=/\u0000|\uFFFD/g;function Ys(e){return(typeof e=="string"?e:""+e).replace($g,`
`).replace(Ng,"")}function Vr(e,n,t){if(n=Ys(n),Ys(e)!==n&&t)throw Error(b(425))}function ko(){}var gl=null,ml=null;function hl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yl=typeof setTimeout=="function"?setTimeout:void 0,Og=typeof clearTimeout=="function"?clearTimeout:void 0,Xs=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof Xs<"u"?function(e){return Xs.resolve(null).then(e).catch(Dg)}:yl;function Dg(e){setTimeout(function(){throw e})}function Ri(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),pr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);pr(n)}function bn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Zs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Rt=Math.random().toString(36).slice(2),qe="__reactFiber$"+Rt,vr="__reactProps$"+Rt,un="__reactContainer$"+Rt,vl="__reactEvents$"+Rt,Lg="__reactListeners$"+Rt,zg="__reactHandles$"+Rt;function Vn(e){var n=e[qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[un]||t[qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Zs(e);e!==null;){if(t=e[qe])return t;e=Zs(e)}return n}e=t,t=e.parentNode}return null}function $r(e){return e=e[qe]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Ko(e){return e[vr]||null}var xl=[],ft=-1;function zn(e){return{current:e}}function K(e){0>ft||(e.current=xl[ft],xl[ft]=null,ft--)}function H(e,n){ft++,xl[ft]=e.current,e.current=n}var Rn={},ve=zn(Rn),be=zn(!1),Xn=Rn;function _t(e,n){var t=e.type.contextTypes;if(!t)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function je(e){return e=e.childContextTypes,e!=null}function Co(){K(be),K(ve)}function Js(e,n,t){if(ve.current!==Rn)throw Error(b(168));H(ve,n),H(be,t)}function dd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(b(108,Sp(e)||"Unknown",o));return J({},t,r)}function Po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Xn=ve.current,H(ve,e),H(be,be.current),!0}function qs(e,n,t){var r=e.stateNode;if(!r)throw Error(b(169));t?(e=dd(e,n,Xn),r.__reactInternalMemoizedMergedChildContext=e,K(be),K(ve),H(ve,e)):K(be),H(be,t)}var rn=null,Go=!1,Di=!1;function fd(e){rn===null?rn=[e]:rn.push(e)}function Mg(e){Go=!0,fd(e)}function Mn(){if(!Di&&rn!==null){Di=!0;var e=0,n=F;try{var t=rn;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}rn=null,Go=!1}catch(o){throw rn!==null&&(rn=rn.slice(e+1)),Mc(oa,Mn),o}finally{F=n,Di=!1}}return null}var pt=[],gt=0,_o=null,bo=0,ze=[],Me=0,Zn=null,on=1,ln="";function Wn(e,n){pt[gt++]=bo,pt[gt++]=_o,_o=e,bo=n}function pd(e,n,t){ze[Me++]=on,ze[Me++]=ln,ze[Me++]=Zn,Zn=e;var r=on;e=ln;var o=32-Ke(r)-1;r&=~(1<<o),t+=1;var i=32-Ke(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,on=1<<32-Ke(n)+o|t<<o|r,ln=i+e}else on=1<<i|t<<o|r,ln=e}function pa(e){e.return!==null&&(Wn(e,1),pd(e,1,0))}function ga(e){for(;e===_o;)_o=pt[--gt],pt[gt]=null,bo=pt[--gt],pt[gt]=null;for(;e===Zn;)Zn=ze[--Me],ze[Me]=null,ln=ze[--Me],ze[Me]=null,on=ze[--Me],ze[Me]=null}var Ne=null,$e=null,G=!1,Ve=null;function gd(e,n){var t=Ie(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function eu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ne=e,$e=bn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ne=e,$e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Zn!==null?{id:on,overflow:ln}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ie(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ne=e,$e=null,!0):!1;default:return!1}}function Sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(G){var n=$e;if(n){var t=n;if(!eu(e,n)){if(Sl(e))throw Error(b(418));n=bn(t.nextSibling);var r=Ne;n&&eu(e,n)?gd(r,t):(e.flags=e.flags&-4097|2,G=!1,Ne=e)}}else{if(Sl(e))throw Error(b(418));e.flags=e.flags&-4097|2,G=!1,Ne=e}}}function nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Kr(e){if(e!==Ne)return!1;if(!G)return nu(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!hl(e.type,e.memoizedProps)),n&&(n=$e)){if(Sl(e))throw md(),Error(b(418));for(;n;)gd(e,n),n=bn(n.nextSibling)}if(nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){$e=bn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}$e=null}}else $e=Ne?bn(e.stateNode.nextSibling):null;return!0}function md(){for(var e=$e;e;)e=bn(e.nextSibling)}function bt(){$e=Ne=null,G=!1}function ma(e){Ve===null?Ve=[e]:Ve.push(e)}var Ig=fn.ReactCurrentBatchConfig;function Ht(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(b(309));var r=t.stateNode}if(!r)throw Error(b(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(b(284));if(!t._owner)throw Error(b(290,e))}return e}function Gr(e,n){throw e=Object.prototype.toString.call(n),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function tu(e){var n=e._init;return n(e._payload)}function hd(e){function n(g,p){if(e){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function t(g,p){if(!e)return null;for(;p!==null;)n(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=$n(g,p),g.index=0,g.sibling=null,g}function i(g,p,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,p,m,k){return p===null||p.tag!==6?(p=Fi(m,g.mode,k),p.return=g,p):(p=o(p,m),p.return=g,p)}function s(g,p,m,k){var E=m.type;return E===at?d(g,p,m.props.children,k,m.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mn&&tu(E)===p.type)?(k=o(p,m.props),k.ref=Ht(g,p,m),k.return=g,k):(k=po(m.type,m.key,m.props,null,g.mode,k),k.ref=Ht(g,p,m),k.return=g,k)}function c(g,p,m,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ui(m,g.mode,k),p.return=g,p):(p=o(p,m.children||[]),p.return=g,p)}function d(g,p,m,k,E){return p===null||p.tag!==7?(p=Yn(m,g.mode,k,E),p.return=g,p):(p=o(p,m),p.return=g,p)}function f(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Fi(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zr:return m=po(p.type,p.key,p.props,null,g.mode,m),m.ref=Ht(g,null,p),m.return=g,m;case lt:return p=Ui(p,g.mode,m),p.return=g,p;case mn:var k=p._init;return f(g,k(p._payload),m)}if(Yt(p)||At(p))return p=Yn(p,g.mode,m,null),p.return=g,p;Gr(g,p)}return null}function h(g,p,m,k){var E=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(g,p,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zr:return m.key===E?s(g,p,m,k):null;case lt:return m.key===E?c(g,p,m,k):null;case mn:return E=m._init,h(g,p,E(m._payload),k)}if(Yt(m)||At(m))return E!==null?null:d(g,p,m,k,null);Gr(g,m)}return null}function v(g,p,m,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(m)||null,a(p,g,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case zr:return g=g.get(k.key===null?m:k.key)||null,s(p,g,k,E);case lt:return g=g.get(k.key===null?m:k.key)||null,c(p,g,k,E);case mn:var P=k._init;return v(g,p,m,P(k._payload),E)}if(Yt(k)||At(k))return g=g.get(m)||null,d(p,g,k,E,null);Gr(p,k)}return null}function x(g,p,m,k){for(var E=null,P=null,T=p,$=p=0,S=null;T!==null&&$<m.length;$++){T.index>$?(S=T,T=null):S=T.sibling;var C=h(g,T,m[$],k);if(C===null){T===null&&(T=S);break}e&&T&&C.alternate===null&&n(g,T),p=i(C,p,$),P===null?E=C:P.sibling=C,P=C,T=S}if($===m.length)return t(g,T),G&&Wn(g,$),E;if(T===null){for(;$<m.length;$++)T=f(g,m[$],k),T!==null&&(p=i(T,p,$),P===null?E=T:P.sibling=T,P=T);return G&&Wn(g,$),E}for(T=r(g,T);$<m.length;$++)S=v(T,g,$,m[$],k),S!==null&&(e&&S.alternate!==null&&T.delete(S.key===null?$:S.key),p=i(S,p,$),P===null?E=S:P.sibling=S,P=S);return e&&T.forEach(function(D){return n(g,D)}),G&&Wn(g,$),E}function w(g,p,m,k){var E=At(m);if(typeof E!="function")throw Error(b(150));if(m=E.call(m),m==null)throw Error(b(151));for(var P=E=null,T=p,$=p=0,S=null,C=m.next();T!==null&&!C.done;$++,C=m.next()){T.index>$?(S=T,T=null):S=T.sibling;var D=h(g,T,C.value,k);if(D===null){T===null&&(T=S);break}e&&T&&D.alternate===null&&n(g,T),p=i(D,p,$),P===null?E=D:P.sibling=D,P=D,T=S}if(C.done)return t(g,T),G&&Wn(g,$),E;if(T===null){for(;!C.done;$++,C=m.next())C=f(g,C.value,k),C!==null&&(p=i(C,p,$),P===null?E=C:P.sibling=C,P=C);return G&&Wn(g,$),E}for(T=r(g,T);!C.done;$++,C=m.next())C=v(T,g,$,C.value,k),C!==null&&(e&&C.alternate!==null&&T.delete(C.key===null?$:C.key),p=i(C,p,$),P===null?E=C:P.sibling=C,P=C);return e&&T.forEach(function(A){return n(g,A)}),G&&Wn(g,$),E}function j(g,p,m,k){if(typeof m=="object"&&m!==null&&m.type===at&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case zr:e:{for(var E=m.key,P=p;P!==null;){if(P.key===E){if(E=m.type,E===at){if(P.tag===7){t(g,P.sibling),p=o(P,m.props.children),p.return=g,g=p;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mn&&tu(E)===P.type){t(g,P.sibling),p=o(P,m.props),p.ref=Ht(g,P,m),p.return=g,g=p;break e}t(g,P);break}else n(g,P);P=P.sibling}m.type===at?(p=Yn(m.props.children,g.mode,k,m.key),p.return=g,g=p):(k=po(m.type,m.key,m.props,null,g.mode,k),k.ref=Ht(g,p,m),k.return=g,g=k)}return l(g);case lt:e:{for(P=m.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){t(g,p.sibling),p=o(p,m.children||[]),p.return=g,g=p;break e}else{t(g,p);break}else n(g,p);p=p.sibling}p=Ui(m,g.mode,k),p.return=g,g=p}return l(g);case mn:return P=m._init,j(g,p,P(m._payload),k)}if(Yt(m))return x(g,p,m,k);if(At(m))return w(g,p,m,k);Gr(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(t(g,p.sibling),p=o(p,m),p.return=g,g=p):(t(g,p),p=Fi(m,g.mode,k),p.return=g,g=p),l(g)):t(g,p)}return j}var jt=hd(!0),yd=hd(!1),jo=zn(null),Eo=null,mt=null,ha=null;function ya(){ha=mt=Eo=null}function va(e){var n=jo.current;K(jo),e._currentValue=n}function kl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function kt(e,n){Eo=e,ha=mt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(_e=!0),e.firstContext=null)}function Be(e){var n=e._currentValue;if(ha!==e)if(e={context:e,memoizedValue:n,next:null},mt===null){if(Eo===null)throw Error(b(308));mt=e,Eo.dependencies={lanes:0,firstContext:e}}else mt=mt.next=e;return n}var Kn=null;function xa(e){Kn===null?Kn=[e]:Kn.push(e)}function vd(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,xa(n)):(t.next=o.next,o.next=t),n.interleaved=t,cn(e,r)}function cn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var hn=!1;function Sa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function jn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,cn(e,t)}return o=r.interleaved,o===null?(n.next=n,xa(r)):(n.next=o.next,o.next=n),r.interleaved=n,cn(e,t)}function lo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ia(e,t)}}function ru(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function To(e,n,t,r){var o=e.updateQueue;hn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;l=0,d=c=s=null,a=i;do{var h=a.lane,v=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(h=n,v=t,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(v,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(v,f,h):x,h==null)break e;f=J({},f,h);break e;case 2:hn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,s=f):d=d.next=v,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=d,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);qn|=l,e.lanes=l,e.memoizedState=f}}function ou(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(b(191,o));o.call(r)}}}var Nr={},nn=zn(Nr),xr=zn(Nr),Sr=zn(Nr);function Gn(e){if(e===Nr)throw Error(b(174));return e}function wa(e,n){switch(H(Sr,n),H(xr,e),H(nn,Nr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:tl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=tl(n,e)}K(nn),H(nn,n)}function Et(){K(nn),K(xr),K(Sr)}function Sd(e){Gn(Sr.current);var n=Gn(nn.current),t=tl(n,e.type);n!==t&&(H(xr,e),H(nn,t))}function ka(e){xr.current===e&&(K(nn),K(xr))}var Y=zn(0);function $o(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Li=[];function Ca(){for(var e=0;e<Li.length;e++)Li[e]._workInProgressVersionPrimary=null;Li.length=0}var ao=fn.ReactCurrentDispatcher,zi=fn.ReactCurrentBatchConfig,Jn=0,Z=null,oe=null,se=null,No=!1,or=!1,wr=0,Ag=0;function me(){throw Error(b(321))}function Pa(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ye(e[t],n[t]))return!1;return!0}function _a(e,n,t,r,o,i){if(Jn=i,Z=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ao.current=e===null||e.memoizedState===null?Wg:Hg,e=t(r,o),or){i=0;do{if(or=!1,wr=0,25<=i)throw Error(b(301));i+=1,se=oe=null,n.updateQueue=null,ao.current=Vg,e=t(r,o)}while(or)}if(ao.current=Oo,n=oe!==null&&oe.next!==null,Jn=0,se=oe=Z=null,No=!1,n)throw Error(b(300));return e}function ba(){var e=wr!==0;return wr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?Z.memoizedState=se=e:se=se.next=e,se}function Fe(){if(oe===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var n=se===null?Z.memoizedState:se.next;if(n!==null)se=n,oe=e;else{if(e===null)throw Error(b(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},se===null?Z.memoizedState=se=e:se=se.next=e}return se}function kr(e,n){return typeof n=="function"?n(e):n}function Mi(e){var n=Fe(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var r=oe,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,c=i;do{var d=c.lane;if((Jn&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,Z.lanes|=d,qn|=d}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=a,Ye(r,n.memoizedState)||(_e=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,Z.lanes|=i,qn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ii(e){var n=Fe(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ye(i,n.memoizedState)||(_e=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function wd(){}function kd(e,n){var t=Z,r=Fe(),o=n(),i=!Ye(r.memoizedState,o);if(i&&(r.memoizedState=o,_e=!0),r=r.queue,ja(_d.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||se!==null&&se.memoizedState.tag&1){if(t.flags|=2048,Cr(9,Pd.bind(null,t,r,o,n),void 0,null),ue===null)throw Error(b(349));Jn&30||Cd(t,n,o)}return o}function Cd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Pd(e,n,t,r){n.value=t,n.getSnapshot=r,bd(n)&&jd(e)}function _d(e,n,t){return t(function(){bd(n)&&jd(e)})}function bd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ye(e,t)}catch{return!0}}function jd(e){var n=cn(e,1);n!==null&&Ge(n,e,1,-1)}function iu(e){var n=Je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:e},n.queue=e,e=e.dispatch=Ug.bind(null,Z,e),[n.memoizedState,e]}function Cr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ed(){return Fe().memoizedState}function so(e,n,t,r){var o=Je();Z.flags|=e,o.memoizedState=Cr(1|n,t,void 0,r===void 0?null:r)}function Qo(e,n,t,r){var o=Fe();r=r===void 0?null:r;var i=void 0;if(oe!==null){var l=oe.memoizedState;if(i=l.destroy,r!==null&&Pa(r,l.deps)){o.memoizedState=Cr(n,t,i,r);return}}Z.flags|=e,o.memoizedState=Cr(1|n,t,i,r)}function lu(e,n){return so(8390656,8,e,n)}function ja(e,n){return Qo(2048,8,e,n)}function Td(e,n){return Qo(4,2,e,n)}function $d(e,n){return Qo(4,4,e,n)}function Nd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Od(e,n,t){return t=t!=null?t.concat([e]):null,Qo(4,4,Nd.bind(null,n,e),t)}function Ea(){}function Rd(e,n){var t=Fe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Pa(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Dd(e,n){var t=Fe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Pa(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ld(e,n,t){return Jn&21?(Ye(t,n)||(t=Bc(),Z.lanes|=t,qn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=t)}function Bg(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=zi.transition;zi.transition={};try{e(!1),n()}finally{F=t,zi.transition=r}}function zd(){return Fe().memoizedState}function Fg(e,n,t){var r=Tn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Md(e))Id(n,t);else if(t=vd(e,n,t,r),t!==null){var o=we();Ge(t,e,r,o),Ad(t,n,r)}}function Ug(e,n,t){var r=Tn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Md(e))Id(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,a=i(l,t);if(o.hasEagerState=!0,o.eagerState=a,Ye(a,l)){var s=n.interleaved;s===null?(o.next=o,xa(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=vd(e,n,o,r),t!==null&&(o=we(),Ge(t,e,r,o),Ad(t,n,r))}}function Md(e){var n=e.alternate;return e===Z||n!==null&&n===Z}function Id(e,n){or=No=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ad(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ia(e,t)}}var Oo={readContext:Be,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Wg={readContext:Be,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:lu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,so(4194308,4,Nd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return so(4194308,4,e,n)},useInsertionEffect:function(e,n){return so(4,2,e,n)},useMemo:function(e,n){var t=Je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Je();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Fg.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:iu,useDebugValue:Ea,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=iu(!1),n=e[0];return e=Bg.bind(null,e[1]),Je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Z,o=Je();if(G){if(t===void 0)throw Error(b(407));t=t()}else{if(t=n(),ue===null)throw Error(b(349));Jn&30||Cd(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,lu(_d.bind(null,r,i,e),[e]),r.flags|=2048,Cr(9,Pd.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Je(),n=ue.identifierPrefix;if(G){var t=ln,r=on;t=(r&~(1<<32-Ke(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=wr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ag++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Hg={readContext:Be,useCallback:Rd,useContext:Be,useEffect:ja,useImperativeHandle:Od,useInsertionEffect:Td,useLayoutEffect:$d,useMemo:Dd,useReducer:Mi,useRef:Ed,useState:function(){return Mi(kr)},useDebugValue:Ea,useDeferredValue:function(e){var n=Fe();return Ld(n,oe.memoizedState,e)},useTransition:function(){var e=Mi(kr)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:wd,useSyncExternalStore:kd,useId:zd,unstable_isNewReconciler:!1},Vg={readContext:Be,useCallback:Rd,useContext:Be,useEffect:ja,useImperativeHandle:Od,useInsertionEffect:Td,useLayoutEffect:$d,useMemo:Dd,useReducer:Ii,useRef:Ed,useState:function(){return Ii(kr)},useDebugValue:Ea,useDeferredValue:function(e){var n=Fe();return oe===null?n.memoizedState=e:Ld(n,oe.memoizedState,e)},useTransition:function(){var e=Ii(kr)[0],n=Fe().memoizedState;return[e,n]},useMutableSource:wd,useSyncExternalStore:kd,useId:zd,unstable_isNewReconciler:!1};function We(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Cl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Yo={isMounted:function(e){return(e=e._reactInternals)?tt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=we(),o=Tn(e),i=an(r,o);i.payload=n,t!=null&&(i.callback=t),n=jn(e,i,o),n!==null&&(Ge(n,e,o,r),lo(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=we(),o=Tn(e),i=an(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=jn(e,i,o),n!==null&&(Ge(n,e,o,r),lo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=we(),r=Tn(e),o=an(t,r);o.tag=2,n!=null&&(o.callback=n),n=jn(e,o,r),n!==null&&(Ge(n,e,r,t),lo(n,e,r))}};function au(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!mr(t,r)||!mr(o,i):!0}function Bd(e,n,t){var r=!1,o=Rn,i=n.contextType;return typeof i=="object"&&i!==null?i=Be(i):(o=je(n)?Xn:ve.current,r=n.contextTypes,i=(r=r!=null)?_t(e,o):Rn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Yo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function su(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Yo.enqueueReplaceState(n,n.state,null)}function Pl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Sa(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Be(i):(i=je(n)?Xn:ve.current,o.context=_t(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Cl(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Yo.enqueueReplaceState(o,o.state,null),To(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Tt(e,n){try{var t="",r=n;do t+=xp(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Ai(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function _l(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Kg=typeof WeakMap=="function"?WeakMap:Map;function Fd(e,n,t){t=an(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Do||(Do=!0,Ll=r),_l(e,n)},t}function Ud(e,n,t){t=an(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){_l(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){_l(e,n),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function uu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Kg;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=lm.bind(null,e,n,t),n.then(e,e))}function cu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function du(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=an(-1,1),n.tag=2,jn(t,n,1))),t.lanes|=1),e)}var Gg=fn.ReactCurrentOwner,_e=!1;function Se(e,n,t,r){n.child=e===null?yd(n,null,t,r):jt(n,e.child,t,r)}function fu(e,n,t,r,o){t=t.render;var i=n.ref;return kt(n,o),r=_a(e,n,t,r,i,o),t=ba(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,dn(e,n,o)):(G&&t&&pa(n),n.flags|=1,Se(e,n,r,o),n.child)}function pu(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!za(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Wd(e,n,i,r,o)):(e=po(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:mr,t(l,r)&&e.ref===n.ref)return dn(e,n,o)}return n.flags|=1,e=$n(i,r),e.ref=n.ref,e.return=n,n.child=e}function Wd(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(mr(i,r)&&e.ref===n.ref)if(_e=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(_e=!0);else return n.lanes=e.lanes,dn(e,n,o)}return bl(e,n,t,r,o)}function Hd(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(yt,Te),Te|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,H(yt,Te),Te|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,H(yt,Te),Te|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,H(yt,Te),Te|=r;return Se(e,n,o,t),n.child}function Vd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function bl(e,n,t,r,o){var i=je(t)?Xn:ve.current;return i=_t(n,i),kt(n,o),t=_a(e,n,t,r,i,o),r=ba(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,dn(e,n,o)):(G&&r&&pa(n),n.flags|=1,Se(e,n,t,o),n.child)}function gu(e,n,t,r,o){if(je(t)){var i=!0;Po(n)}else i=!1;if(kt(n,o),n.stateNode===null)uo(e,n),Bd(n,t,r),Pl(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var s=l.context,c=t.contextType;typeof c=="object"&&c!==null?c=Be(c):(c=je(t)?Xn:ve.current,c=_t(n,c));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&su(n,l,r,c),hn=!1;var h=n.memoizedState;l.state=h,To(n,r,l,o),s=n.memoizedState,a!==r||h!==s||be.current||hn?(typeof d=="function"&&(Cl(n,t,d,r),s=n.memoizedState),(a=hn||au(n,t,a,r,h,s,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,xd(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:We(n.type,a),l.props=c,f=n.pendingProps,h=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=Be(s):(s=je(t)?Xn:ve.current,s=_t(n,s));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||h!==s)&&su(n,l,r,s),hn=!1,h=n.memoizedState,l.state=h,To(n,r,l,o);var x=n.memoizedState;a!==f||h!==x||be.current||hn?(typeof v=="function"&&(Cl(n,t,v,r),x=n.memoizedState),(c=hn||au(n,t,c,r,h,x,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),l.props=r,l.state=x,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return jl(e,n,t,r,i,o)}function jl(e,n,t,r,o,i){Vd(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&qs(n,t,!1),dn(e,n,i);r=n.stateNode,Gg.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=jt(n,e.child,null,i),n.child=jt(n,null,a,i)):Se(e,n,a,i),n.memoizedState=r.state,o&&qs(n,t,!0),n.child}function Kd(e){var n=e.stateNode;n.pendingContext?Js(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Js(e,n.context,!1),wa(e,n.containerInfo)}function mu(e,n,t,r,o){return bt(),ma(o),n.flags|=256,Se(e,n,t,r),n.child}var El={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gd(e,n,t){var r=n.pendingProps,o=Y.current,i=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(Y,o&1),e===null)return wl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Jo(l,r,0,null),e=Yn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Tl(t),n.memoizedState=El,e):Ta(n,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Qg(e,n,l,r,a,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=$n(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=$n(a,i):(i=Yn(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?Tl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=El,r}return i=e.child,e=i.sibling,r=$n(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ta(e,n){return n=Jo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Qr(e,n,t,r){return r!==null&&ma(r),jt(n,e.child,null,t),e=Ta(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qg(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=Ai(Error(b(422))),Qr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Jo({mode:"visible",children:r.children},o,0,null),i=Yn(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&jt(n,e.child,null,l),n.child.memoizedState=Tl(l),n.memoizedState=El,i);if(!(n.mode&1))return Qr(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(b(419)),r=Ai(i,r,void 0),Qr(e,n,l,r)}if(a=(l&e.childLanes)!==0,_e||a){if(r=ue,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,cn(e,o),Ge(r,e,o,-1))}return La(),r=Ai(Error(b(421))),Qr(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=am.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,$e=bn(o.nextSibling),Ne=n,G=!0,Ve=null,e!==null&&(ze[Me++]=on,ze[Me++]=ln,ze[Me++]=Zn,on=e.id,ln=e.overflow,Zn=n),n=Ta(n,r.children),n.flags|=4096,n)}function hu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),kl(e.return,n,t)}function Bi(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Qd(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(Se(e,n,r.children,t),r=Y.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hu(e,t,n);else if(e.tag===19)hu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Y,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&$o(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Bi(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&$o(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Bi(n,!0,t,null,i);break;case"together":Bi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function uo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function dn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),qn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(b(153));if(n.child!==null){for(e=n.child,t=$n(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=$n(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Yg(e,n,t){switch(n.tag){case 3:Kd(n),bt();break;case 5:Sd(n);break;case 1:je(n.type)&&Po(n);break;case 4:wa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;H(jo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(H(Y,Y.current&1),n.flags|=128,null):t&n.child.childLanes?Gd(e,n,t):(H(Y,Y.current&1),e=dn(e,n,t),e!==null?e.sibling:null);H(Y,Y.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Qd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(Y,Y.current),r)break;return null;case 22:case 23:return n.lanes=0,Hd(e,n,t)}return dn(e,n,t)}var Yd,$l,Xd,Zd;Yd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};$l=function(){};Xd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Gn(nn.current);var i=null;switch(t){case"input":o=Ji(e,o),r=Ji(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=nl(e,o),r=nl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ko)}rl(t,r);var l;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&V("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Zd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Vt(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Xg(e,n,t){var r=n.pendingProps;switch(ga(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(n),null;case 1:return je(n.type)&&Co(),he(n),null;case 3:return r=n.stateNode,Et(),K(be),K(ve),Ca(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Kr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ve!==null&&(Il(Ve),Ve=null))),$l(e,n),he(n),null;case 5:ka(n);var o=Gn(Sr.current);if(t=n.type,e!==null&&n.stateNode!=null)Xd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(b(166));return he(n),null}if(e=Gn(nn.current),Kr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[qe]=n,r[vr]=i,e=(n.mode&1)!==0,t){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<Zt.length;o++)V(Zt[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":_s(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":js(r,i),V("invalid",r)}rl(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Vr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Vr(r.textContent,a,e),o=["children",""+a]):sr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&V("scroll",r)}switch(t){case"input":Mr(r),bs(r,i,!0);break;case"textarea":Mr(r),Es(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ko)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_c(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[qe]=n,e[vr]=r,Yd(e,n,!1,!1),n.stateNode=e;e:{switch(l=ol(t,r),t){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<Zt.length;o++)V(Zt[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":_s(e,r),o=Ji(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),V("invalid",e);break;case"textarea":js(e,r),o=nl(e,r),V("invalid",e);break;default:o=r}rl(t,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Ec(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&bc(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&ur(e,s):typeof s=="number"&&ur(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(sr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&V("scroll",e):s!=null&&ql(e,i,s,l))}switch(t){case"input":Mr(e),bs(e,r,!1);break;case"textarea":Mr(e),Es(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?vt(e,!!r.multiple,i,!1):r.defaultValue!=null&&vt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ko)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return he(n),null;case 6:if(e&&n.stateNode!=null)Zd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(b(166));if(t=Gn(Sr.current),Gn(nn.current),Kr(n)){if(r=n.stateNode,t=n.memoizedProps,r[qe]=n,(i=r.nodeValue!==t)&&(e=Ne,e!==null))switch(e.tag){case 3:Vr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[qe]=n,n.stateNode=r}return he(n),null;case 13:if(K(Y),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&$e!==null&&n.mode&1&&!(n.flags&128))md(),bt(),n.flags|=98560,i=!1;else if(i=Kr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(b(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[qe]=n}else bt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;he(n),i=!1}else Ve!==null&&(Il(Ve),Ve=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?ie===0&&(ie=3):La())),n.updateQueue!==null&&(n.flags|=4),he(n),null);case 4:return Et(),$l(e,n),e===null&&hr(n.stateNode.containerInfo),he(n),null;case 10:return va(n.type._context),he(n),null;case 17:return je(n.type)&&Co(),he(n),null;case 19:if(K(Y),i=n.memoizedState,i===null)return he(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)Vt(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=$o(e),l!==null){for(n.flags|=128,Vt(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return H(Y,Y.current&1|2),n.child}e=e.sibling}i.tail!==null&&ee()>$t&&(n.flags|=128,r=!0,Vt(i,!1),n.lanes=4194304)}else{if(!r)if(e=$o(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Vt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!G)return he(n),null}else 2*ee()-i.renderingStartTime>$t&&t!==1073741824&&(n.flags|=128,r=!0,Vt(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ee(),n.sibling=null,t=Y.current,H(Y,r?t&1|2:t&1),n):(he(n),null);case 22:case 23:return Da(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Te&1073741824&&(he(n),n.subtreeFlags&6&&(n.flags|=8192)):he(n),null;case 24:return null;case 25:return null}throw Error(b(156,n.tag))}function Zg(e,n){switch(ga(n),n.tag){case 1:return je(n.type)&&Co(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Et(),K(be),K(ve),Ca(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ka(n),null;case 13:if(K(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(b(340));bt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(Y),null;case 4:return Et(),null;case 10:return va(n.type._context),null;case 22:case 23:return Da(),null;case 24:return null;default:return null}}var Yr=!1,ye=!1,Jg=typeof WeakSet=="function"?WeakSet:Set,O=null;function ht(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){q(e,n,r)}else t.current=null}function Nl(e,n,t){try{t()}catch(r){q(e,n,r)}}var yu=!1;function qg(e,n){if(gl=xo,e=td(),fa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,a=-1,s=-1,c=0,d=0,f=e,h=null;n:for(;;){for(var v;f!==t||o!==0&&f.nodeType!==3||(a=l+o),f!==i||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break n;if(h===t&&++c===o&&(a=l),h===i&&++d===r&&(s=l),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(ml={focusedElem:e,selectionRange:t},xo=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,j=x.memoizedState,g=n.stateNode,p=g.getSnapshotBeforeUpdate(n.elementType===n.type?w:We(n.type,w),j);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(k){q(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return x=yu,yu=!1,x}function ir(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Nl(n,t,i)}o=o.next}while(o!==r)}}function Xo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ol(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Jd(e){var n=e.alternate;n!==null&&(e.alternate=null,Jd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[qe],delete n[vr],delete n[vl],delete n[Lg],delete n[zg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qd(e){return e.tag===5||e.tag===3||e.tag===4}function vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ko));else if(r!==4&&(e=e.child,e!==null))for(Rl(e,n,t),e=e.sibling;e!==null;)Rl(e,n,t),e=e.sibling}function Dl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Dl(e,n,t),e=e.sibling;e!==null;)Dl(e,n,t),e=e.sibling}var ce=null,He=!1;function gn(e,n,t){for(t=t.child;t!==null;)ef(e,n,t),t=t.sibling}function ef(e,n,t){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Uo,t)}catch{}switch(t.tag){case 5:ye||ht(t,n);case 6:var r=ce,o=He;ce=null,gn(e,n,t),ce=r,He=o,ce!==null&&(He?(e=ce,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ce.removeChild(t.stateNode));break;case 18:ce!==null&&(He?(e=ce,t=t.stateNode,e.nodeType===8?Ri(e.parentNode,t):e.nodeType===1&&Ri(e,t),pr(e)):Ri(ce,t.stateNode));break;case 4:r=ce,o=He,ce=t.stateNode.containerInfo,He=!0,gn(e,n,t),ce=r,He=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Nl(t,n,l),o=o.next}while(o!==r)}gn(e,n,t);break;case 1:if(!ye&&(ht(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){q(t,n,a)}gn(e,n,t);break;case 21:gn(e,n,t);break;case 22:t.mode&1?(ye=(r=ye)||t.memoizedState!==null,gn(e,n,t),ye=r):gn(e,n,t);break;default:gn(e,n,t)}}function xu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Jg),n.forEach(function(r){var o=sm.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Ue(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,He=!1;break e;case 3:ce=a.stateNode.containerInfo,He=!0;break e;case 4:ce=a.stateNode.containerInfo,He=!0;break e}a=a.return}if(ce===null)throw Error(b(160));ef(i,l,o),ce=null,He=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){q(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)nf(n,e),n=n.sibling}function nf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(n,e),Ze(e),r&4){try{ir(3,e,e.return),Xo(3,e)}catch(w){q(e,e.return,w)}try{ir(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:Ue(n,e),Ze(e),r&512&&t!==null&&ht(t,t.return);break;case 5:if(Ue(n,e),Ze(e),r&512&&t!==null&&ht(t,t.return),e.flags&32){var o=e.stateNode;try{ur(o,"")}catch(w){q(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Cc(o,i),ol(a,l);var c=ol(a,i);for(l=0;l<s.length;l+=2){var d=s[l],f=s[l+1];d==="style"?Ec(o,f):d==="dangerouslySetInnerHTML"?bc(o,f):d==="children"?ur(o,f):ql(o,d,f,c)}switch(a){case"input":qi(o,i);break;case"textarea":Pc(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?vt(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?vt(o,!!i.multiple,i.defaultValue,!0):vt(o,!!i.multiple,i.multiple?[]:"",!1))}o[vr]=i}catch(w){q(e,e.return,w)}}break;case 6:if(Ue(n,e),Ze(e),r&4){if(e.stateNode===null)throw Error(b(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){q(e,e.return,w)}}break;case 3:if(Ue(n,e),Ze(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:Ue(n,e),Ze(e);break;case 13:Ue(n,e),Ze(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Oa=ee())),r&4&&xu(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ye=(c=ye)||d,Ue(n,e),ye=c):Ue(n,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(f=O=d;O!==null;){switch(h=O,v=h.child,h.tag){case 0:case 11:case 14:case 15:ir(4,h,h.return);break;case 1:ht(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(w){q(r,t,w)}}break;case 5:ht(h,h.return);break;case 22:if(h.memoizedState!==null){wu(f);continue}}v!==null?(v.return=h,O=v):wu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=jc("display",l))}catch(w){q(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){q(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ue(n,e),Ze(e),r&4&&xu(e);break;case 21:break;default:Ue(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(qd(t)){var r=t;break e}t=t.return}throw Error(b(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ur(o,""),r.flags&=-33);var i=vu(e);Dl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=vu(e);Rl(e,a,l);break;default:throw Error(b(161))}}catch(s){q(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function em(e,n,t){O=e,tf(e)}function tf(e,n,t){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Yr;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ye;a=Yr;var c=ye;if(Yr=l,(ye=s)&&!c)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?ku(o):s!==null?(s.return=l,O=s):ku(o);for(;i!==null;)O=i,tf(i),i=i.sibling;O=o,Yr=a,ye=c}Su(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):Su(e)}}function Su(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ye||Xo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ye)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ou(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ou(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&pr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ye||n.flags&512&&Ol(n)}catch(h){q(n,n.return,h)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function wu(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function ku(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Xo(4,n)}catch(s){q(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){q(n,o,s)}}var i=n.return;try{Ol(n)}catch(s){q(n,i,s)}break;case 5:var l=n.return;try{Ol(n)}catch(s){q(n,l,s)}}}catch(s){q(n,n.return,s)}if(n===e){O=null;break}var a=n.sibling;if(a!==null){a.return=n.return,O=a;break}O=n.return}}var nm=Math.ceil,Ro=fn.ReactCurrentDispatcher,$a=fn.ReactCurrentOwner,Ae=fn.ReactCurrentBatchConfig,I=0,ue=null,re=null,de=0,Te=0,yt=zn(0),ie=0,Pr=null,qn=0,Zo=0,Na=0,lr=null,Pe=null,Oa=0,$t=1/0,tn=null,Do=!1,Ll=null,En=null,Xr=!1,Sn=null,Lo=0,ar=0,zl=null,co=-1,fo=0;function we(){return I&6?ee():co!==-1?co:co=ee()}function Tn(e){return e.mode&1?I&2&&de!==0?de&-de:Ig.transition!==null?(fo===0&&(fo=Bc()),fo):(e=F,e!==0||(e=window.event,e=e===void 0?16:Gc(e.type)),e):1}function Ge(e,n,t,r){if(50<ar)throw ar=0,zl=null,Error(b(185));Er(e,t,r),(!(I&2)||e!==ue)&&(e===ue&&(!(I&2)&&(Zo|=t),ie===4&&vn(e,de)),Ee(e,r),t===1&&I===0&&!(n.mode&1)&&($t=ee()+500,Go&&Mn()))}function Ee(e,n){var t=e.callbackNode;Ip(e,n);var r=vo(e,e===ue?de:0);if(r===0)t!==null&&Ns(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ns(t),n===1)e.tag===0?Mg(Cu.bind(null,e)):fd(Cu.bind(null,e)),Rg(function(){!(I&6)&&Mn()}),t=null;else{switch(Fc(r)){case 1:t=oa;break;case 4:t=Ic;break;case 16:t=yo;break;case 536870912:t=Ac;break;default:t=yo}t=df(t,rf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function rf(e,n){if(co=-1,fo=0,I&6)throw Error(b(327));var t=e.callbackNode;if(Ct()&&e.callbackNode!==t)return null;var r=vo(e,e===ue?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=zo(e,r);else{n=r;var o=I;I|=2;var i=lf();(ue!==e||de!==n)&&(tn=null,$t=ee()+500,Qn(e,n));do try{om();break}catch(a){of(e,a)}while(!0);ya(),Ro.current=i,I=o,re!==null?n=0:(ue=null,de=0,n=ie)}if(n!==0){if(n===2&&(o=ul(e),o!==0&&(r=o,n=Ml(e,o))),n===1)throw t=Pr,Qn(e,0),vn(e,r),Ee(e,ee()),t;if(n===6)vn(e,r);else{if(o=e.current.alternate,!(r&30)&&!tm(o)&&(n=zo(e,r),n===2&&(i=ul(e),i!==0&&(r=i,n=Ml(e,i))),n===1))throw t=Pr,Qn(e,0),vn(e,r),Ee(e,ee()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(b(345));case 2:Hn(e,Pe,tn);break;case 3:if(vn(e,r),(r&130023424)===r&&(n=Oa+500-ee(),10<n)){if(vo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=yl(Hn.bind(null,e,Pe,tn),n);break}Hn(e,Pe,tn);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-Ke(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nm(r/1960))-r,10<r){e.timeoutHandle=yl(Hn.bind(null,e,Pe,tn),r);break}Hn(e,Pe,tn);break;case 5:Hn(e,Pe,tn);break;default:throw Error(b(329))}}}return Ee(e,ee()),e.callbackNode===t?rf.bind(null,e):null}function Ml(e,n){var t=lr;return e.current.memoizedState.isDehydrated&&(Qn(e,n).flags|=256),e=zo(e,n),e!==2&&(n=Pe,Pe=t,n!==null&&Il(n)),e}function Il(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function tm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Ye(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vn(e,n){for(n&=~Na,n&=~Zo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ke(n),r=1<<t;e[t]=-1,n&=~r}}function Cu(e){if(I&6)throw Error(b(327));Ct();var n=vo(e,0);if(!(n&1))return Ee(e,ee()),null;var t=zo(e,n);if(e.tag!==0&&t===2){var r=ul(e);r!==0&&(n=r,t=Ml(e,r))}if(t===1)throw t=Pr,Qn(e,0),vn(e,n),Ee(e,ee()),t;if(t===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Hn(e,Pe,tn),Ee(e,ee()),null}function Ra(e,n){var t=I;I|=1;try{return e(n)}finally{I=t,I===0&&($t=ee()+500,Go&&Mn())}}function et(e){Sn!==null&&Sn.tag===0&&!(I&6)&&Ct();var n=I;I|=1;var t=Ae.transition,r=F;try{if(Ae.transition=null,F=1,e)return e()}finally{F=r,Ae.transition=t,I=n,!(I&6)&&Mn()}}function Da(){Te=yt.current,K(yt)}function Qn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Og(t)),re!==null)for(t=re.return;t!==null;){var r=t;switch(ga(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Co();break;case 3:Et(),K(be),K(ve),Ca();break;case 5:ka(r);break;case 4:Et();break;case 13:K(Y);break;case 19:K(Y);break;case 10:va(r.type._context);break;case 22:case 23:Da()}t=t.return}if(ue=e,re=e=$n(e.current,null),de=Te=n,ie=0,Pr=null,Na=Zo=qn=0,Pe=lr=null,Kn!==null){for(n=0;n<Kn.length;n++)if(t=Kn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}Kn=null}return e}function of(e,n){do{var t=re;try{if(ya(),ao.current=Oo,No){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}No=!1}if(Jn=0,se=oe=Z=null,or=!1,wr=0,$a.current=null,t===null||t.return===null){ie=1,Pr=n,re=null;break}e:{var i=e,l=t.return,a=t,s=n;if(n=de,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=cu(l);if(v!==null){v.flags&=-257,du(v,l,a,i,n),v.mode&1&&uu(i,c,n),n=v,s=c;var x=n.updateQueue;if(x===null){var w=new Set;w.add(s),n.updateQueue=w}else x.add(s);break e}else{if(!(n&1)){uu(i,c,n),La();break e}s=Error(b(426))}}else if(G&&a.mode&1){var j=cu(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),du(j,l,a,i,n),ma(Tt(s,a));break e}}i=s=Tt(s,a),ie!==4&&(ie=2),lr===null?lr=[i]:lr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=Fd(i,s,n);ru(i,g);break e;case 1:a=s;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(En===null||!En.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var k=Ud(i,a,n);ru(i,k);break e}}i=i.return}while(i!==null)}sf(t)}catch(E){n=E,re===t&&t!==null&&(re=t=t.return);continue}break}while(!0)}function lf(){var e=Ro.current;return Ro.current=Oo,e===null?Oo:e}function La(){(ie===0||ie===3||ie===2)&&(ie=4),ue===null||!(qn&268435455)&&!(Zo&268435455)||vn(ue,de)}function zo(e,n){var t=I;I|=2;var r=lf();(ue!==e||de!==n)&&(tn=null,Qn(e,n));do try{rm();break}catch(o){of(e,o)}while(!0);if(ya(),I=t,Ro.current=r,re!==null)throw Error(b(261));return ue=null,de=0,ie}function rm(){for(;re!==null;)af(re)}function om(){for(;re!==null&&!Tp();)af(re)}function af(e){var n=cf(e.alternate,e,Te);e.memoizedProps=e.pendingProps,n===null?sf(e):re=n,$a.current=null}function sf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Zg(t,n),t!==null){t.flags&=32767,re=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,re=null;return}}else if(t=Xg(t,n,Te),t!==null){re=t;return}if(n=n.sibling,n!==null){re=n;return}re=n=e}while(n!==null);ie===0&&(ie=5)}function Hn(e,n,t){var r=F,o=Ae.transition;try{Ae.transition=null,F=1,im(e,n,t,r)}finally{Ae.transition=o,F=r}return null}function im(e,n,t,r){do Ct();while(Sn!==null);if(I&6)throw Error(b(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Ap(e,i),e===ue&&(re=ue=null,de=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xr||(Xr=!0,df(yo,function(){return Ct(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var l=F;F=1;var a=I;I|=4,$a.current=null,qg(e,t),nf(t,e),_g(ml),xo=!!gl,ml=gl=null,e.current=t,em(t),$p(),I=a,F=l,Ae.transition=i}else e.current=t;if(Xr&&(Xr=!1,Sn=e,Lo=o),i=e.pendingLanes,i===0&&(En=null),Rp(t.stateNode),Ee(e,ee()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Do)throw Do=!1,e=Ll,Ll=null,e;return Lo&1&&e.tag!==0&&Ct(),i=e.pendingLanes,i&1?e===zl?ar++:(ar=0,zl=e):ar=0,Mn(),null}function Ct(){if(Sn!==null){var e=Fc(Lo),n=Ae.transition,t=F;try{if(Ae.transition=null,F=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,Lo=0,I&6)throw Error(b(331));var o=I;for(I|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(O=c;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:ir(8,d,i)}var f=d.child;if(f!==null)f.return=d,O=f;else for(;O!==null;){d=O;var h=d.sibling,v=d.return;if(Jd(d),d===c){O=null;break}if(h!==null){h.return=v,O=h;break}O=v}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ir(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,O=g;break e}O=i.return}}var p=e.current;for(O=p;O!==null;){l=O;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,O=m;else e:for(l=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xo(9,a)}}catch(E){q(a,a.return,E)}if(a===l){O=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,O=k;break e}O=a.return}}if(I=o,Mn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Uo,e)}catch{}r=!0}return r}finally{F=t,Ae.transition=n}}return!1}function Pu(e,n,t){n=Tt(t,n),n=Fd(e,n,1),e=jn(e,n,1),n=we(),e!==null&&(Er(e,1,n),Ee(e,n))}function q(e,n,t){if(e.tag===3)Pu(e,e,t);else for(;n!==null;){if(n.tag===3){Pu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){e=Tt(t,e),e=Ud(n,e,1),n=jn(n,e,1),e=we(),n!==null&&(Er(n,1,e),Ee(n,e));break}}n=n.return}}function lm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=we(),e.pingedLanes|=e.suspendedLanes&t,ue===e&&(de&t)===t&&(ie===4||ie===3&&(de&130023424)===de&&500>ee()-Oa?Qn(e,0):Na|=t),Ee(e,n)}function uf(e,n){n===0&&(e.mode&1?(n=Br,Br<<=1,!(Br&130023424)&&(Br=4194304)):n=1);var t=we();e=cn(e,n),e!==null&&(Er(e,n,t),Ee(e,t))}function am(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),uf(e,t)}function sm(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(n),uf(e,t)}var cf;cf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||be.current)_e=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return _e=!1,Yg(e,n,t);_e=!!(e.flags&131072)}else _e=!1,G&&n.flags&1048576&&pd(n,bo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;uo(e,n),e=n.pendingProps;var o=_t(n,ve.current);kt(n,t),o=_a(null,n,r,e,o,t);var i=ba();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,je(r)?(i=!0,Po(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Sa(n),o.updater=Yo,n.stateNode=o,o._reactInternals=n,Pl(n,r,e,t),n=jl(null,n,r,!0,i,t)):(n.tag=0,G&&i&&pa(n),Se(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(uo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=cm(r),e=We(r,e),o){case 0:n=bl(null,n,r,e,t);break e;case 1:n=gu(null,n,r,e,t);break e;case 11:n=fu(null,n,r,e,t);break e;case 14:n=pu(null,n,r,We(r.type,e),t);break e}throw Error(b(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:We(r,o),bl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:We(r,o),gu(e,n,r,o,t);case 3:e:{if(Kd(n),e===null)throw Error(b(387));r=n.pendingProps,i=n.memoizedState,o=i.element,xd(e,n),To(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Tt(Error(b(423)),n),n=mu(e,n,r,t,o);break e}else if(r!==o){o=Tt(Error(b(424)),n),n=mu(e,n,r,t,o);break e}else for($e=bn(n.stateNode.containerInfo.firstChild),Ne=n,G=!0,Ve=null,t=yd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(bt(),r===o){n=dn(e,n,t);break e}Se(e,n,r,t)}n=n.child}return n;case 5:return Sd(n),e===null&&wl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,hl(r,o)?l=null:i!==null&&hl(r,i)&&(n.flags|=32),Vd(e,n),Se(e,n,l,t),n.child;case 6:return e===null&&wl(n),null;case 13:return Gd(e,n,t);case 4:return wa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=jt(n,null,r,t):Se(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:We(r,o),fu(e,n,r,o,t);case 7:return Se(e,n,n.pendingProps,t),n.child;case 8:return Se(e,n,n.pendingProps.children,t),n.child;case 12:return Se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,H(jo,r._currentValue),r._currentValue=l,i!==null)if(Ye(i.value,l)){if(i.children===o.children&&!be.current){n=dn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=an(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),kl(i.return,t,n),a.lanes|=t;break}s=s.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(b(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),kl(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Se(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,kt(n,t),o=Be(o),r=r(o),n.flags|=1,Se(e,n,r,t),n.child;case 14:return r=n.type,o=We(r,n.pendingProps),o=We(r.type,o),pu(e,n,r,o,t);case 15:return Wd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:We(r,o),uo(e,n),n.tag=1,je(r)?(e=!0,Po(n)):e=!1,kt(n,t),Bd(n,r,o),Pl(n,r,o,t),jl(null,n,r,!0,e,t);case 19:return Qd(e,n,t);case 22:return Hd(e,n,t)}throw Error(b(156,n.tag))};function df(e,n){return Mc(e,n)}function um(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,n,t,r){return new um(e,n,t,r)}function za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cm(e){if(typeof e=="function")return za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===na)return 11;if(e===ta)return 14}return 2}function $n(e,n){var t=e.alternate;return t===null?(t=Ie(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function po(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")za(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case at:return Yn(t.children,o,i,n);case ea:l=8,o|=8;break;case Qi:return e=Ie(12,t,n,o|2),e.elementType=Qi,e.lanes=i,e;case Yi:return e=Ie(13,t,n,o),e.elementType=Yi,e.lanes=i,e;case Xi:return e=Ie(19,t,n,o),e.elementType=Xi,e.lanes=i,e;case Sc:return Jo(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vc:l=10;break e;case xc:l=9;break e;case na:l=11;break e;case ta:l=14;break e;case mn:l=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return n=Ie(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Yn(e,n,t,r){return e=Ie(7,e,r,n),e.lanes=t,e}function Jo(e,n,t,r){return e=Ie(22,e,r,n),e.elementType=Sc,e.lanes=t,e.stateNode={isHidden:!1},e}function Fi(e,n,t){return e=Ie(6,e,null,n),e.lanes=t,e}function Ui(e,n,t){return n=Ie(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function dm(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ki(0),this.expirationTimes=ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ma(e,n,t,r,o,i,l,a,s){return e=new dm(e,n,t,a,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ie(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sa(i),e}function fm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ff(e){if(!e)return Rn;e=e._reactInternals;e:{if(tt(e)!==e||e.tag!==1)throw Error(b(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(je(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(b(171))}if(e.tag===1){var t=e.type;if(je(t))return dd(e,t,n)}return n}function pf(e,n,t,r,o,i,l,a,s){return e=Ma(t,r,!0,e,o,i,l,a,s),e.context=ff(null),t=e.current,r=we(),o=Tn(t),i=an(r,o),i.callback=n??null,jn(t,i,o),e.current.lanes=o,Er(e,o,r),Ee(e,r),e}function qo(e,n,t,r){var o=n.current,i=we(),l=Tn(o);return t=ff(t),n.context===null?n.context=t:n.pendingContext=t,n=an(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=jn(o,n,l),e!==null&&(Ge(e,o,l,i),lo(e,o,l)),l}function Mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ia(e,n){_u(e,n),(e=e.alternate)&&_u(e,n)}function pm(){return null}var gf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Aa(e){this._internalRoot=e}ei.prototype.render=Aa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(b(409));qo(e,n,null,null)};ei.prototype.unmount=Aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;et(function(){qo(null,e,null,null)}),n[un]=null}};function ei(e){this._internalRoot=e}ei.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<yn.length&&n!==0&&n<yn[t].priority;t++);yn.splice(t,0,e),t===0&&Kc(e)}};function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ni(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bu(){}function gm(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Mo(l);i.call(c)}}var l=pf(n,r,e,0,null,!1,!1,"",bu);return e._reactRootContainer=l,e[un]=l.current,hr(e.nodeType===8?e.parentNode:e),et(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Mo(s);a.call(c)}}var s=Ma(e,0,!1,null,null,!1,!1,"",bu);return e._reactRootContainer=s,e[un]=s.current,hr(e.nodeType===8?e.parentNode:e),et(function(){qo(n,s,t,r)}),s}function ti(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Mo(l);a.call(s)}}qo(n,l,e,o)}else l=gm(t,n,e,o,r);return Mo(l)}Uc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Xt(n.pendingLanes);t!==0&&(ia(n,t|1),Ee(n,ee()),!(I&6)&&($t=ee()+500,Mn()))}break;case 13:et(function(){var r=cn(e,1);if(r!==null){var o=we();Ge(r,e,1,o)}}),Ia(e,1)}};la=function(e){if(e.tag===13){var n=cn(e,134217728);if(n!==null){var t=we();Ge(n,e,134217728,t)}Ia(e,134217728)}};Wc=function(e){if(e.tag===13){var n=Tn(e),t=cn(e,n);if(t!==null){var r=we();Ge(t,e,n,r)}Ia(e,n)}};Hc=function(){return F};Vc=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};ll=function(e,n,t){switch(n){case"input":if(qi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Ko(r);if(!o)throw Error(b(90));kc(r),qi(r,o)}}}break;case"textarea":Pc(e,t);break;case"select":n=t.value,n!=null&&vt(e,!!t.multiple,n,!1)}};Nc=Ra;Oc=et;var mm={usingClientEntryPoint:!1,Events:[$r,dt,Ko,Tc,$c,Ra]},Kt={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hm={bundleType:Kt.bundleType,version:Kt.version,rendererPackageName:Kt.rendererPackageName,rendererConfig:Kt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lc(e),e===null?null:e.stateNode},findFiberByHostInstance:Kt.findFiberByHostInstance||pm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{Uo=Zr.inject(hm),en=Zr}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;Re.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ba(n))throw Error(b(200));return fm(e,n,null,t)};Re.createRoot=function(e,n){if(!Ba(e))throw Error(b(299));var t=!1,r="",o=gf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Ma(e,1,!1,null,null,t,!1,r,o),e[un]=n.current,hr(e.nodeType===8?e.parentNode:e),new Aa(n)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Lc(n),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return et(e)};Re.hydrate=function(e,n,t){if(!ni(n))throw Error(b(200));return ti(null,e,n,!0,t)};Re.hydrateRoot=function(e,n,t){if(!Ba(e))throw Error(b(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=gf;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=pf(n,null,e,1,t??null,o,!1,i,l),e[un]=n.current,hr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new ei(n)};Re.render=function(e,n,t){if(!ni(n))throw Error(b(200));return ti(null,e,n,!1,t)};Re.unmountComponentAtNode=function(e){if(!ni(e))throw Error(b(40));return e._reactRootContainer?(et(function(){ti(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};Re.unstable_batchedUpdates=Ra;Re.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ni(t))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return ti(e,n,t,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf)}catch(e){console.error(e)}}mf(),gc.exports=Re;var ym=gc.exports,vm,ju=ym;vm=Ki.createRoot=ju.createRoot,Ki.hydrateRoot=ju.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _r(){return _r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_r.apply(null,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));const Eu="popstate";function xm(e){e===void 0&&(e={});function n(o,i){let{pathname:l="/",search:a="",hash:s=""}=rt(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Al("",{pathname:l,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){let l=o.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=o.location.href,c=s.indexOf("#");a=c===-1?s:s.slice(0,c)}return a+"#"+(typeof i=="string"?i:Io(i))}function r(o,i){Fa(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return wm(n,t,r,e)}function ne(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Fa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Sm(){return Math.random().toString(36).substr(2,8)}function Tu(e,n){return{usr:e.state,key:e.key,idx:n}}function Al(e,n,t,r){return t===void 0&&(t=null),_r({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?rt(n):n,{state:t,key:n&&n.key||r||Sm()})}function Io(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function rt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function wm(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=wn.Pop,s=null,c=d();c==null&&(c=0,l.replaceState(_r({},l.state,{idx:c}),""));function d(){return(l.state||{idx:null}).idx}function f(){a=wn.Pop;let j=d(),g=j==null?null:j-c;c=j,s&&s({action:a,location:w.location,delta:g})}function h(j,g){a=wn.Push;let p=Al(w.location,j,g);t&&t(p,j),c=d()+1;let m=Tu(p,c),k=w.createHref(p);try{l.pushState(m,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(k)}i&&s&&s({action:a,location:w.location,delta:1})}function v(j,g){a=wn.Replace;let p=Al(w.location,j,g);t&&t(p,j),c=d();let m=Tu(p,c),k=w.createHref(p);l.replaceState(m,"",k),i&&s&&s({action:a,location:w.location,delta:0})}function x(j){let g=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof j=="string"?j:Io(j);return p=p.replace(/ $/,"%20"),ne(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return a},get location(){return e(o,l)},listen(j){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Eu,f),s=j,()=>{o.removeEventListener(Eu,f),s=null}},createHref(j){return n(o,j)},createURL:x,encodeLocation(j){let g=x(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:v,go(j){return l.go(j)}};return w}var $u;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($u||($u={}));function km(e,n,t){return t===void 0&&(t="/"),Cm(e,n,t)}function Cm(e,n,t,r){let o=typeof n=="string"?rt(n):n,i=Ua(o.pathname||"/",t);if(i==null)return null;let l=hf(e);Pm(l);let a=null,s=zm(i);for(let c=0;a==null&&c<l.length;++c)a=Rm(l[c],s);return a}function hf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(ne(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Nn([r,s.relativePath]),d=t.concat(s);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),hf(i.children,n,d,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:Nm(c,i.index),routesMeta:d})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of yf(i.path))o(i,l,s)}),n}function yf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=yf(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Pm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Om(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const _m=/^:[\w-]+$/,bm=3,jm=2,Em=1,Tm=10,$m=-2,Nu=e=>e==="*";function Nm(e,n){let t=e.split("/"),r=t.length;return t.some(Nu)&&(r+=$m),n&&(r+=jm),t.filter(o=>!Nu(o)).reduce((o,i)=>o+(_m.test(i)?bm:i===""?Em:Tm),r)}function Om(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function Rm(e,n,t){let{routesMeta:r}=e,o={},i="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,d=i==="/"?n:n.slice(i.length)||"/",f=Dm({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d),h=s.route;if(!f)return null;Object.assign(o,f.params),l.push({params:o,pathname:Nn([i,f.pathname]),pathnameBase:Am(Nn([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Nn([i,f.pathnameBase]))}return l}function Dm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Lm(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let w=a[f]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=a[f];return v&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function Lm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Fa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function zm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Fa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ua(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Mm(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?rt(e):e,i;return t?(t=vf(t),t.startsWith("/")?i=Ou(t.substring(1),"/"):i=Ou(t,n)):i=n,{pathname:i,search:Bm(r),hash:Fm(o)}}function Ou(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Wi(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Im(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Wa(e,n){let t=Im(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Ha(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=rt(e):(o=_r({},e),ne(!o.pathname||!o.pathname.includes("?"),Wi("?","pathname","search",o)),ne(!o.pathname||!o.pathname.includes("#"),Wi("#","pathname","hash",o)),ne(!o.search||!o.search.includes("#"),Wi("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=t;else{let f=n.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}a=f>=0?n[f]:"/"}let s=Mm(o,a),c=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const vf=e=>e.replace(/\/\/+/g,"/"),Nn=e=>vf(e.join("/")),Am=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Bm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Fm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Um(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const xf=["post","put","patch","delete"];new Set(xf);const Wm=["get",...xf];new Set(Wm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},br.apply(null,arguments)}const Va=y.createContext(null),Hm=y.createContext(null),In=y.createContext(null),ri=y.createContext(null),pn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Sf=y.createContext(null);function Vm(e,n){let{relative:t}=n===void 0?{}:n;Dt()||ne(!1);let{basename:r,navigator:o}=y.useContext(In),{hash:i,pathname:l,search:a}=Cf(e,{relative:t}),s=l;return r!=="/"&&(s=l==="/"?r:Nn([r,l])),o.createHref({pathname:s,search:a,hash:i})}function Dt(){return y.useContext(ri)!=null}function Lt(){return Dt()||ne(!1),y.useContext(ri).location}function wf(e){y.useContext(In).static||y.useLayoutEffect(e)}function kf(){let{isDataRoute:e}=y.useContext(pn);return e?ih():Km()}function Km(){Dt()||ne(!1);let e=y.useContext(Va),{basename:n,future:t,navigator:r}=y.useContext(In),{matches:o}=y.useContext(pn),{pathname:i}=Lt(),l=JSON.stringify(Wa(o,t.v7_relativeSplatPath)),a=y.useRef(!1);return wf(()=>{a.current=!0}),y.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Ha(c,JSON.parse(l),i,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:Nn([n,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[n,r,l,i,e])}function Gm(){let{matches:e}=y.useContext(pn),n=e[e.length-1];return n?n.params:{}}function Cf(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=y.useContext(In),{matches:o}=y.useContext(pn),{pathname:i}=Lt(),l=JSON.stringify(Wa(o,r.v7_relativeSplatPath));return y.useMemo(()=>Ha(e,JSON.parse(l),i,t==="path"),[e,l,i,t])}function Qm(e,n){return Ym(e,n)}function Ym(e,n,t,r){Dt()||ne(!1);let{navigator:o}=y.useContext(In),{matches:i}=y.useContext(pn),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let c=Lt(),d;if(n){var f;let j=typeof n=="string"?rt(n):n;s==="/"||(f=j.pathname)!=null&&f.startsWith(s)||ne(!1),d=j}else d=c;let h=d.pathname||"/",v=h;if(s!=="/"){let j=s.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(j.length).join("/")}let x=km(e,{pathname:v}),w=eh(x&&x.map(j=>Object.assign({},j,{params:Object.assign({},a,j.params),pathname:Nn([s,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?s:Nn([s,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,t,r);return n&&w?y.createElement(ri.Provider,{value:{location:br({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:wn.Pop}},w):w}function Xm(){let e=oh(),n=Um(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:o},t):null,null)}const Zm=y.createElement(Xm,null);class Jm extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(pn.Provider,{value:this.props.routeContext},y.createElement(Sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qm(e){let{routeContext:n,match:t,children:r}=e,o=y.useContext(Va);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(pn.Provider,{value:n},r)}function eh(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,a=(o=t)==null?void 0:o.errors;if(a!=null){let d=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||ne(!1),l=l.slice(0,Math.min(l.length,d+1))}let s=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let f=l[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:v}=t,x=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||x){s=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((d,f,h)=>{let v,x=!1,w=null,j=null;t&&(v=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||Zm,s&&(c<0&&h===0?(lh("route-fallback"),x=!0,j=null):c===h&&(x=!0,j=f.route.hydrateFallbackElement||null)));let g=n.concat(l.slice(0,h+1)),p=()=>{let m;return v?m=w:x?m=j:f.route.Component?m=y.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=d,y.createElement(qm,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:m})};return t&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?y.createElement(Jm,{location:t.location,revalidation:t.revalidation,component:w,error:v,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Pf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pf||{}),_f=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_f||{});function nh(e){let n=y.useContext(Va);return n||ne(!1),n}function th(e){let n=y.useContext(Hm);return n||ne(!1),n}function rh(e){let n=y.useContext(pn);return n||ne(!1),n}function bf(e){let n=rh(),t=n.matches[n.matches.length-1];return t.route.id||ne(!1),t.route.id}function oh(){var e;let n=y.useContext(Sf),t=th(),r=bf();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function ih(){let{router:e}=nh(Pf.UseNavigateStable),n=bf(_f.UseNavigateStable),t=y.useRef(!1);return wf(()=>{t.current=!0}),y.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,br({fromRouteId:n},i)))},[e,n])}const Ru={};function lh(e,n,t){Ru[e]||(Ru[e]=!0)}function ah(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Bl(e){let{to:n,replace:t,state:r,relative:o}=e;Dt()||ne(!1);let{future:i,static:l}=y.useContext(In),{matches:a}=y.useContext(pn),{pathname:s}=Lt(),c=kf(),d=Ha(n,Wa(a,i.v7_relativeSplatPath),s,o==="path"),f=JSON.stringify(d);return y.useEffect(()=>c(JSON.parse(f),{replace:t,state:r,relative:o}),[c,f,o,t,r]),null}function Jt(e){ne(!1)}function sh(e){let{basename:n="/",children:t=null,location:r,navigationType:o=wn.Pop,navigator:i,static:l=!1,future:a}=e;Dt()&&ne(!1);let s=n.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:s,navigator:i,static:l,future:br({v7_relativeSplatPath:!1},a)}),[s,a,i,l]);typeof r=="string"&&(r=rt(r));let{pathname:d="/",search:f="",hash:h="",state:v=null,key:x="default"}=r,w=y.useMemo(()=>{let j=Ua(d,s);return j==null?null:{location:{pathname:j,search:f,hash:h,state:v,key:x},navigationType:o}},[s,d,f,h,v,x,o]);return w==null?null:y.createElement(In.Provider,{value:c},y.createElement(ri.Provider,{children:t,value:w}))}function uh(e){let{children:n,location:t}=e;return Qm(Fl(n),t)}new Promise(()=>{});function Fl(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let i=[...n,o];if(r.type===y.Fragment){t.push.apply(t,Fl(r.props.children,i));return}r.type!==Jt&&ne(!1),!r.props.index||!r.props.children||ne(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Fl(r.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ul.apply(null,arguments)}function ch(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function dh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fh(e,n){return e.button===0&&(!n||n==="_self")&&!dh(e)}const ph=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gh="6";try{window.__reactRouterVersion=gh}catch{}const mh="startTransition",Du=lp[mh];function hh(e){let{basename:n,children:t,future:r,window:o}=e,i=y.useRef();i.current==null&&(i.current=xm({window:o,v5Compat:!0}));let l=i.current,[a,s]=y.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},d=y.useCallback(f=>{c&&Du?Du(()=>s(f)):s(f)},[s,c]);return y.useLayoutEffect(()=>l.listen(d),[l,d]),y.useEffect(()=>ah(r),[r]),y.createElement(sh,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:l,future:r})}const yh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wl=y.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:c,preventScrollReset:d,viewTransition:f}=n,h=ch(n,ph),{basename:v}=y.useContext(In),x,w=!1;if(typeof c=="string"&&vh.test(c)&&(x=c,yh))try{let m=new URL(window.location.href),k=c.startsWith("//")?new URL(m.protocol+c):new URL(c),E=Ua(k.pathname,v);k.origin===m.origin&&E!=null?c=E+k.search+k.hash:w=!0}catch{}let j=Vm(c,{relative:o}),g=xh(c,{replace:l,state:a,target:s,preventScrollReset:d,relative:o,viewTransition:f});function p(m){r&&r(m),m.defaultPrevented||g(m)}return y.createElement("a",Ul({},h,{href:x||j,onClick:w||i?r:p,ref:t,target:s}))});var Lu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Lu||(Lu={}));var zu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zu||(zu={}));function xh(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:a}=n===void 0?{}:n,s=kf(),c=Lt(),d=Cf(e,{relative:l});return y.useCallback(f=>{if(fh(f,t)){f.preventDefault();let h=r!==void 0?r:Io(c)===Io(d);s(e,{replace:h,state:o,preventScrollReset:i,relative:l,viewTransition:a})}},[c,s,d,r,o,t,e,i,l,a])}const Sh="https://github.com/frankvane/vane-components";class wh extends Dn.Component{constructor(){super(...arguments);vs(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?u.jsxs("div",{className:"crash",role:"alert",children:[u.jsx("h3",{children:"这个页面炸了"}),u.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),u.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function jf(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function kh({demos:e,pathname:n}){var s;const{groups:t,entries:r,label:o}=e,i=(s=r.find(c=>n===`/demo/${c.meta.slug}`))==null?void 0:s.meta.group,[l,a]=y.useState(()=>{var d;const c=(d=t[0])==null?void 0:d.key;return Object.fromEntries(t.map(f=>[f.key,f.key===(i??c)]))});return y.useEffect(()=>{i&&a(c=>c[i]?c:{...c,[i]:!0})},[i]),u.jsxs("div",{className:"nav-section",children:[u.jsxs("div",{className:"nav-section-head",children:[u.jsx("span",{children:o}),u.jsxs("code",{children:[r.length," demos"]})]}),t.map(c=>{const d=r.filter(h=>h.meta.group===c.key);if(d.length===0)return null;const f=l[c.key]??!1;return u.jsxs("div",{className:"nav-group",children:[u.jsxs("button",{type:"button",className:`nav-group-head${i===c.key?" is-current":""}`,onClick:()=>a(h=>({...h,[c.key]:!f})),"aria-expanded":f,children:[u.jsx("span",{className:`nav-caret${f?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,u.jsx("code",{children:d.length})]}),f?u.jsx("div",{className:"nav-list",children:d.map(h=>u.jsxs(Wl,{to:`/demo/${h.meta.slug}`,className:`nav-sub${n===`/demo/${h.meta.slug}`?" is-active":""}`,children:[u.jsx("em",{"aria-hidden":!0,children:jf(e,h)}),h.meta.title]},h.meta.slug))}):null]},c.key)})]})}function Ch({demos:e}){var a;const{slug:n}=Gm(),{entries:t,detail:r}=e,o=n?t.find(s=>s.meta.slug===n):void 0,i=(a=t[0])==null?void 0:a.meta.slug;if(!o)return u.jsx(Bl,{to:i?`/demo/${i}`:"/",replace:!0});const l=t.indexOf(o)+1;return u.jsx(Dn.Fragment,{children:r(o,l)},o.meta.slug)}function Ph({config:e}){var f,h;const{pathname:n}=Lt(),[t,r]=y.useState(!1),[o,i]=y.useState(!1);y.useEffect(()=>r(!1),[n]);const l=y.useCallback(()=>i(v=>!v),[]);y.useEffect(()=>{const v=x=>{const w=x.target,j=w&&(w.tagName==="INPUT"||w.tagName==="TEXTAREA"||w.isContentEditable);x.key==="Escape"&&r(!1),!j&&(x.key==="g"||x.key==="G")&&!x.metaKey&&!x.ctrlKey&&i(g=>!g)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]);const a=e.demos,s=(f=a.entries[0])==null?void 0:f.meta.slug,c=y.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const v=n.replace(/^\/demo\/?/,""),x=a.entries.find(w=>w.meta.slug===v);return x?`demo ${jf(a,x)} · ${x.meta.title}`:"demo · 逐项示例"},[n,e,a]),d=y.useMemo(()=>e.nav.map((v,x)=>({...v,no:String(x+1).padStart(2,"0")})),[e.nav]);return u.jsxs("div",{className:`shell${t?" is-nav-open":""}${o?" is-guides":""}`,children:[u.jsx("a",{className:"skip-link",href:"#main",onClick:v=>{v.preventDefault();const x=document.getElementById("main");x==null||x.setAttribute("tabindex","-1"),x==null||x.focus(),x==null||x.scrollIntoView({block:"start"})},children:"跳到内容"}),u.jsxs("aside",{className:"side","aria-label":"站点导航",children:[u.jsxs(Wl,{to:"/",className:"brand",children:[u.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),u.jsxs("span",{children:[u.jsx("strong",{children:e.pkg}),u.jsx("em",{children:e.subtitle})]})]}),u.jsxs("nav",{children:[d.map(v=>u.jsxs(Wl,{to:v.to,className:`nav-item${n===v.to?" is-active":""}`,"aria-current":n===v.to?"page":void 0,children:[u.jsx("em",{"aria-hidden":!0,children:v.no}),u.jsx("span",{children:v.label}),v.hint?u.jsx("code",{children:v.hint}):null]},v.to)),u.jsx(kh,{demos:e.demos,pathname:n})]}),u.jsxs("div",{className:"side-foot",children:[u.jsx("p",{children:e.footer[0]}),u.jsx("p",{className:"muted",children:e.footer[1]})]})]}),u.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),u.jsxs("div",{className:"main",id:"main",children:[u.jsxs("header",{className:"topbar",children:[u.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(v=>!v),children:u.jsx("span",{"aria-hidden":!0})}),u.jsx("span",{className:"crumb",children:c}),u.jsxs("div",{className:"topbar-right",children:[(h=e.stats)==null?void 0:h.map(v=>u.jsxs("span",{className:"topbar-stat",title:v.title,children:[u.jsx("b",{children:v.value})," ",v.label]},v.label)),u.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[u.jsx("i",{"aria-hidden":!0}),"guides"]}),u.jsx("a",{className:"topbar-link",href:e.sourceUrl??Sh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),u.jsx("div",{className:"guides","aria-hidden":!0}),u.jsx(y.Suspense,{fallback:u.jsx("div",{className:"loading",children:"loading modules…"}),children:u.jsx(wh,{children:u.jsxs(uh,{children:[e.routes.map(v=>u.jsx(Jt,{path:v.path,element:v.element},v.path)),u.jsx(Jt,{path:"/demo",element:u.jsx(Bl,{to:s?`/demo/${s}`:"/",replace:!0})}),u.jsx(Jt,{path:"/demo/:slug",element:u.jsx(Ch,{demos:e.demos})}),u.jsx(Jt,{path:"*",element:u.jsx(Bl,{to:"/",replace:!0})})]})})})]})]})}function _h({config:e}){return u.jsx(hh,{children:u.jsx(Ph,{config:e})})}const bh="modulepreload",jh=function(e,n){return new URL(e,n).href},Mu={},oi=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(c=>{if(c=jh(c,r),c in Mu)return;Mu[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let x=l.length-1;x>=0;x--){const w=l[x];if(w.href===c&&(!d||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":bh,d||(v.as="script"),v.crossOrigin="",v.href=c,s&&v.setAttribute("nonce",s),document.head.appendChild(v),d)return new Promise((x,w)=>{v.addEventListener("load",x),v.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return n().catch(i)})},Qe=Object.freeze([{key:"applied",label:"已投递",tone:"neutral"},{key:"screening",label:"筛选中",tone:"info"},{key:"interview",label:"面试中",tone:"warn"},{key:"offer",label:"Offer",tone:"good"},{key:"hired",label:"已入职",tone:"good"},{key:"rejected",label:"已婉拒",tone:"bad"}]),Eh=["renderToolbar","renderFooter","renderCardBadges","renderCardActions","renderColumnHeader"];function Th(){const e=new Map,n=new Map;let t=0;const r=(a,s)=>{const c=e.get(a);if(c){if(t>=50){console.warn(`[PluginBus] emit depth exceeded: "${a}"`);return}t+=1;for(const d of[...c])try{d(s)}catch(f){console.warn(`[PluginBus] handler error for event "${a}"`,f)}t-=1}},o=(a,s)=>{let c=e.get(a);c||(c=new Set,e.set(a,c));const d=s;return c.add(d),()=>{c==null||c.delete(d)}},i=(a,s)=>{const c=d=>{try{s(d)}finally{l(a,c)}};return o(a,c)},l=(a,s)=>{var c;if(!s){e.delete(a);return}(c=e.get(a))==null||c.delete(s)};return{emit:r,on:o,once:i,off:l,getData:a=>n.get(a),setData:(a,s)=>{const c=n.get(a);n.set(a,s),c!==s&&r(a,s)},deleteData:a=>{const s=n.has(a);n.delete(a),s&&r(a,void 0)},hasData:a=>n.has(a),getAll:()=>{const a=Object.create(null);return n.forEach((s,c)=>{a[c]=s}),a},clear:()=>{e.clear(),n.clear()}}}function $h(e){const n=new Map(e.map(a=>[a.name,a])),t=[];for(const a of e)for(const s of a.dependencies??[])n.has(s)||t.push(`${a.name} -> ${s}`);const r=[],o=new Set,i=[...e],l=a=>(a.dependencies??[]).every(s=>o.has(s)||!n.has(s));for(;i.length>0;){const a=i.filter(l);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(c=>c.name).join(" <-> ")}`);let s=a[0];for(const c of a)(c.priority??0)>(s.priority??0)&&(s=c);r.push(s),o.add(s.name),i.splice(i.indexOf(s),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}function Ef(e,n){try{return $h(e)}catch(t){return n==null||n(t),e}}async function Nh(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:o="unknown"}=n;if(!t||t<=0)return await e();let i;const l=new Promise((a,s)=>{i=setTimeout(()=>{s(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const Oh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function Rh(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,o=[];let i=[];const l=new Map,a=new Map,s=new Set;let c=0,d=null,f=0;const h=(S,C,D)=>{o.push({plugin:S,hook:C,error:D})},v=()=>{c+=1,d=null},x=(S,C=new Set)=>S.enabled===!1?!1:C.has(S.name)?!0:(C.add(S.name),(S.dependencies??[]).every(D=>{const A=l.get(D);return!A||x(A,C)})),w=()=>{if(d)return d;const S=[...l.values()].filter(C=>x(C)?!0:(h(C.name,"dependencies",new Error("依赖已停用")),!1));return d=Ef(S,C=>h("[order]","resolveDependencyOrder",C))},j=S=>{const C=i.filter(([D])=>!S||D===S).reverse();i=S?i.filter(([D])=>D!==S):[];for(const[,D]of C)try{D()}catch(A){n.warn("[vane] cleanup failed",A)}},g=S=>{var C;return Promise.resolve((C=S.destroy)==null?void 0:C.call(S)).catch(D=>n.warn(`[vane] destroy failed: ${S.name}`,D))},p=async(S,C,D,A,L)=>{var Xe,N;const B=C==="onUnmount";if(C==="onMount"||B){if(s.has(S.name)!==B)return{};B?s.delete(S.name):s.add(S.name)}const Le=(Xe=S.hooks)==null?void 0:Xe[C];if(typeof Le!="function")return{};let xe;try{const R=()=>Le(D,...A);xe=S.sandbox??t?await Nh(R,{timeout:S.timeout??r,name:S.name,hook:C}):await R()}catch(R){return L!==c?{}:(h(S.name,C,R),n.warn(`[vane] ${C} failed: ${S.name}`,R),(N=e.onError)==null||N.call(e,S.name,C,R),{stop:C==="onError"})}return L!==c?{}:Oh.has(C)&&typeof xe=="function"?(i.push([S.name,xe]),{}):{value:xe}},m=async(S,C,D)=>{const A=c;for(const L of w()){if(A!==c)return;const B=await p(L,S,C,D,A);if(B.stop)return;if(B.value===!1)return!1;if(B.value!==void 0&&B.value!==!0)return B.value}},k=(S,C,...D)=>m(S,C,D),E=S=>{l.get(S.name)&&a.get(S.name)!==S&&(n.warn(`[vane] duplicate plugin, destroy old: ${S.name}`),$(S.name)),l.set(S.name,{...S,enabled:S.enabled??!0}),a.set(S.name,S),s.delete(S.name),v(),S.init&&Promise.resolve(S.init()).catch(C=>{n.warn(`[vane] init failed: ${S.name}`,C)})},P=S=>S.forEach(E),T=S=>{l.delete(S),a.delete(S),s.delete(S),d=null},$=S=>{const C=l.get(S);C&&(v(),j(S),g(C),T(S))};return{register:E,registerAll:P,unregister:$,getPlugin:S=>l.get(S),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(S=>S.enabled!==!1),getExecutionOrder:()=>[...w()],enable:S=>{const C=l.get(S);C&&(C.enabled=!0,d=null)},disable:S=>{const C=l.get(S);C&&(C.enabled=!1,d=null)},has:S=>l.has(S),executeHook:k,clear:()=>{v(),f+=1,j();const S=[...l.values()].map(g);return l.clear(),a.clear(),s.clear(),Promise.all(S).then(()=>{})},getErrors:()=>[...o],align:async(S,C)=>{const D=++f,A=new Map(S.map(L=>[L.name,L]));for(const L of[...l.keys()]){if(D!==f)return;if(a.get(L)===A.get(L))continue;const B=l.get(L);v(),await p(B,"onUnmount",C,[],c),j(L),await g(B),T(L)}for(const L of S){if(D!==f)return;a.get(L.name)!==L&&E(L)}},peekOrder:w}}var Dh=Object.defineProperty,Lh=(e,n,t)=>n in e?Dh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,zh=(e,n,t)=>Lh(e,n+"",t);class ii extends Dn.Component{constructor(){super(...arguments),zh(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidUpdate(n){var o,i;const t=n.resetKeys??[],r=this.props.resetKeys??[];this.state.error&&(t.length!==r.length||t.some((l,a)=>!Object.is(l,r[a])))&&((i=(o=this.props).onReset)==null||i.call(o),this.setState({error:null}))}componentDidCatch(n,t){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(o=(r=this.props).onError)==null||o.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let Jr=null;function Mh(e=!1){if(Jr&&!e)return Jr;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(o),l=/Mobile|Android|iPhone/i.test(o),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Jr={type:i?"tablet":l?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:a,isRetina:r>=2},Jr}function Iu(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),r=Object.keys(n);return t.length!==r.length?!1:t.every(o=>Object.is(e[o],n[o]))}function Ih(e){const{plugins:n,props:t,data:r,initialState:o,containerRef:i,enableDebug:l=!1,managerOptions:a,extendContext:s}=e,c=y.useRef(null),d=i??c,f=y.useRef(null);f.current||(f.current=Rh(a));const h=f.current,v=y.useRef(null);v.current||(v.current=Th());const x=v.current,w=y.useRef(new Map),[j,g]=y.useState(o??{}),[,p]=y.useState(0),m=y.useCallback(()=>p(U=>U+1),[]),k=y.useMemo(()=>Mh(),[]),E=y.useRef(t);Iu(E.current,t)||(E.current=t);const P=E.current,T=y.useRef(r);Iu(T.current,r)||(T.current=r);const $=T.current,S=y.useRef(null),C=y.useMemo(()=>{const U={props:P,data:$,bus:x,refs:{container:d,getContainer:()=>d.current},state:j,setState:W=>g(le=>({...le,...W})),shared:w.current,deviceInfo:k,forceUpdate:m,getSize:()=>{const W=d.current;return W?{width:W.offsetWidth,height:W.offsetHeight}:{width:0,height:0}},logger:console};return s?s(U):U},[P,$,j,k,x,s]);y.useLayoutEffect(()=>{S.current=C},[C]);const D=y.useRef(n),A=D.current;A!==n&&(A.length!==n.length||n.some((U,W)=>U!==A[W]))&&(D.current=n);const L=D.current,B=y.useRef(0);y.useLayoutEffect(()=>{const U=++B.current,W=S.current;return h.align(L,W).then(()=>{B.current===U&&(l&&console.debug("[vane/plugin-core] plugins registered:",L.map(le=>le.name).join("|")),h.executeHook("onMount",W))}),()=>{B.current+=1}},[L,h,l]),y.useLayoutEffect(()=>()=>{const U=S.current;if(!h.getExecutionOrder().some(W=>{var le;return typeof((le=W.hooks)==null?void 0:le.onUnmount)=="function"})){h.clear();return}h.executeHook("onUnmount",U).finally(()=>h.clear())},[h]);const Le=h.peekOrder(),xe=y.useRef([]),Xe=y.useMemo(()=>{const U=new Map(L.map(ae=>[ae.name,ae])),W=L.filter(ae=>{var Un;return ae.enabled!==!1&&((Un=h.getPlugin(ae.name))==null?void 0:Un.enabled)!==!1}),le=Le.length===W.length?Le.map(ae=>U.get(ae.name)??ae):Ef(W),ge=xe.current;return ge.length===le.length&&le.every((ae,Un)=>ae===ge[Un])?ge:(xe.current=le,le)},[L,h,Le]),N=y.useRef(C);N.current=C;const R=y.useCallback((U,W)=>{var ae;const le=N.current;let ge=W;for(const Un of Xe){const hi=(ae=Un.hooks)==null?void 0:ae[U];if(typeof hi=="function")try{ge=U==="transformData"?hi(le,ge):hi(ge)}catch(Bf){(le.logger??console).warn(`[plugin-core] ${Un.name}.${U} 执行失败，已跳过`,Bf)}}return ge},[Xe]),z=y.useCallback(U=>R("transformProps",U),[R]),Q=y.useCallback(U=>R("transformData",U),[R]),te=y.useCallback((U,...W)=>h.executeHook(U,S.current,...W),[h]);return{manager:h,bus:x,context:C,state:j,setState:C.setState,execute:te,transformProps:z,transformData:Q,orderedPlugins:Xe}}y.createContext(null);function Ah(e,n,t){var o,i;if(e.enabled===!1||typeof((o=e.hooks)==null?void 0:o[n])!="function")return!1;const r=(i=e.config)==null?void 0:i.slotPosition;return t==="before"?r==="before":t==="footer"?r===void 0||r==="after"||r==="footer":r===void 0||r==="after"}function Bh(e,n){var t,r;return(((t=e.config)==null?void 0:t.order)??0)-(((r=n.config)==null?void 0:r.order)??0)||(n.priority??0)-(e.priority??0)}function Fh(e,n,t){const r=new Set;return e.map(o=>{var i;if(r.has(o.name))return null;r.add(o.name);try{const l=(i=o.hooks)==null?void 0:i[t],a=l==null?void 0:l(n);return a==null?null:u.jsx(ii,{children:a},`vane-slot-${o.name}`)}catch(l){return console.warn(`[vane/plugin-core] 插件 ${o.name} 的 ${t} 渲染失败`,l),null}})}function Uh(e,n,t){const{hook:r,position:o="after"}=t,i=e.filter(l=>Ah(l,r,o)).sort(Bh);return Fh(i,n,r)}const zt=y.createContext(null);function Tf(e){return[...e].sort((n,t)=>{var r,o;return(((r=n.config)==null?void 0:r.order)??0)-(((o=t.config)==null?void 0:o.order)??0)||(t.priority??0)-(n.priority??0)})}function Wh(e){const n={};for(const t of Eh)n[t]=Tf(e.filter(r=>r.enabled!==!1&&typeof r.hooks[t]=="function"));return n}function Ka(e,n,t,...r){return e.reduce((o,i)=>{try{const l=i.hooks[t](n,...r);return l==null||o.push(u.jsx(ii,{children:l},`vcd-slot-${i.name}`)),o}catch(l){return console.warn(`[vane-candidate] 插件 ${i.name} 的 ${t} 渲染失败`,l),o}},[])}function $f(e,n){return typeof e=="function"?e(...n):e}function Hh(e,n,t,r,...o){const i=Tf(e.filter(l=>l.enabled!==!1&&typeof l.hooks[t]=="function"));for(let l=i.length-1;l>=0;l--){const a=i[l];try{const s=a.hooks[t](n,...o);if(s!=null)return u.jsx(ii,{children:s},`vcd-content-${a.name}`)}catch(s){console.warn(`[vane-candidate] 插件 ${a.name} 的 ${t} 渲染失败`,s)}}return $f(r,o)}function Au(e){const n=y.useContext(zt),t=n?n.slots[e]:null,r=n?n.context:null;return y.useMemo(()=>t&&r?Ka(t,r,e):[],[t,r,e])}function Bu(e,n){const t=y.useContext(zt),r=t?t.slots[e]:null,o=t?t.context:null;return y.useMemo(()=>r&&o?Ka(r,o,e,n):[],[r,o,e,n])}function Vh(e,n,t){const r=y.useContext(zt),o=r?r.slots[e]:null,i=r?r.context:null;return y.useMemo(()=>o&&i?Ka(o,i,e,n,t):[],[o,i,e,n,t])}function Nf(e,n,...t){const r=y.useContext(zt),o=r?r.orderedPlugins:null,i=r?r.context:null;return y.useMemo(()=>o&&i?Hh(o,i,e,n,...t):$f(n,t),[o,i,e,...t])}function Kh(){const e=y.useContext(zt);return(e==null?void 0:e.context)??null}const _={bg:"#ffffff",text:"#1f2328",muted:"#5d636a",faint:"#767d87",line:"#e3e6ea",lineStrong:"#d4d8de",accent:"#2563eb",accentInk:"#ffffff",accentWash:"#eef3fe",chipBg:"#f2f3f5",chipText:"#1f2328",good:"#1f7a3f",warn:"#b45309",bad:"#b42318"},kn={neutral:{fg:"#5d636a",bg:"#f2f3f5"},info:{fg:"#1c6ea8",bg:"#e7f1fa"},warn:{fg:"#8a4a06",bg:"#fdf1e2"},good:{fg:"#1f7a3f",bg:"#e8f5ec"},bad:{fg:"#b42318",bg:"#fdeceb"}};function X(e){return{background:e?_.accent:_.chipBg,color:e?_.accentInk:_.chipText,border:`1px solid ${_.lineStrong}`,borderRadius:"var(--vcd-radius, 6px)",fontSize:12,padding:"3px 9px",cursor:"pointer"}}const An=y.forwardRef(function(n,t){const{children:r,containerClassName:o,containerStyle:i,onMount:l,onUnmount:a,containerRefExternal:s}=n,c=y.useRef(null),d=s??c,[,f]=y.useState(0),h=Kh(),v=y.useRef(h);v.current=h;const x=y.useRef(n);x.current=n;const w=n.stages??Qe,g=(h==null?void 0:h.data)??n.data??Of;y.useImperativeHandle(t,()=>({getContainer:()=>d.current,forceUpdate:()=>f(E=>E+1),getSize:()=>{const E=d.current;return E?{width:E.offsetWidth,height:E.offsetHeight}:{width:0,height:0}},getStageKeys:()=>(x.current.stages??Qe).map(E=>E.key)}),[d]),y.useEffect(()=>(l==null||l(),()=>a==null?void 0:a()),[]);const p=Au("renderToolbar"),m=Au("renderFooter"),k=Nf("renderCards",()=>Qh(w,g),{stages:w,candidates:g});return u.jsxs("div",{ref:d,className:`vcd-root ${o||""}`,style:{position:"relative",boxSizing:"border-box",background:_.bg,color:_.text,fontFamily:"var(--vcd-font, system-ui, -apple-system, 'Segoe UI', Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif)",fontSize:14,lineHeight:1.6,...i},children:[p.length>0&&u.jsx("div",{className:"vcd-toolbar",style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,padding:"10px 16px",borderBottom:`1px solid ${_.line}`},children:p}),u.jsx("div",{className:"vcd-board",style:{padding:"12px 16px 4px"},children:k}),m.length>0&&u.jsx("div",{className:"vcd-footer",style:{display:"flex",flexWrap:"wrap",gap:12,padding:"12px 16px 14px",borderTop:`1px solid ${_.line}`,alignItems:"center"},children:m}),r]})});An.displayName="CandidateCore";const Of=[];function Gh(e){return/^(https?:\/\/|\/|data:image\/)/i.test(e)}function Qh(e,n){const t=new Map;for(const r of n){const o=t.get(r.stage);o?o.push(r):t.set(r.stage,[r])}return u.jsxs("div",{className:"vcd-kanban",style:{display:"flex",gap:12,alignItems:"flex-start",overflowX:"auto",paddingBottom:8},children:[e.map(r=>u.jsx(Yh,{stage:r,list:t.get(r.key)??Of},r.key)),n.length===0&&u.jsx("div",{style:{color:_.muted,fontSize:13,padding:"8px 2px"},children:"暂无候选人"})]})}const Yh=Dn.memo(function({stage:n,list:t}){const r=Vh("renderColumnHeader",n,t.length),o=kn[n.tone??"neutral"]??kn.neutral;return u.jsxs("section",{"data-stage-key":n.key,className:"vcd-column",style:{flex:"1 0 220px",minWidth:220,background:_.chipBg,borderRadius:"var(--vcd-radius, 8px)",padding:8},children:[u.jsxs("header",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:[u.jsx("span",{style:{fontSize:12,fontWeight:700,color:o.fg,background:o.bg,padding:"1px 8px",borderRadius:999},children:n.label}),u.jsx("span",{style:{fontSize:12,color:_.muted},children:t.length}),u.jsx("span",{style:{marginLeft:"auto",display:"inline-flex",gap:6},children:r})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:t.map(i=>u.jsx(Xh,{candidate:i},i.id))})]})}),Xh=Dn.memo(function({candidate:n}){return u.jsx("article",{"data-candidate-id":n.id,className:"vcd-card",style:{background:_.bg,color:_.text,border:`1px solid ${_.line}`,borderRadius:"var(--vcd-radius, 8px)",padding:"10px 12px",boxSizing:"border-box"},children:u.jsx(Zh,{candidate:n})})});function Zh({candidate:e}){const n=Bu("renderCardBadges",e),t=Bu("renderCardActions",e),r=Nf("renderCardBody",()=>Jh(e),e);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.avatar&&Gh(e.avatar)?u.jsx("img",{src:e.avatar,alt:"",width:32,height:32,style:{borderRadius:"50%",objectFit:"cover",border:`1px solid ${_.line}`}}):u.jsx("span",{"aria-hidden":"true",style:{width:32,height:32,borderRadius:"50%",background:_.accentWash,color:_.accent,display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:13,flexShrink:0},children:e.name.slice(0,1)}),u.jsxs("div",{style:{minWidth:0,flex:1},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[u.jsx("strong",{style:{fontSize:14,color:_.text},children:e.name}),n.length>0&&u.jsx("span",{style:{display:"inline-flex",gap:4,flexWrap:"wrap"},children:n})]}),u.jsx("div",{style:{fontSize:12,color:_.muted},children:e.role})]})]}),r,t.length>0&&u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:8,paddingTop:8,borderTop:`1px solid ${_.line}`},children:t})]})}function Jh(e){return u.jsxs(u.Fragment,{children:[e.summary&&u.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:_.muted,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:e.summary}),u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"2px 12px",marginTop:6,fontSize:12,color:_.muted},children:[e.source&&u.jsxs("span",{children:["来源：",e.source]}),e.appliedAt&&u.jsxs("span",{children:["投递：",e.appliedAt]}),e.email&&u.jsx("span",{children:e.email}),e.phone&&u.jsx("span",{children:e.phone})]})]})}function Rf(e,n){return e.findIndex(t=>t.key===n)}function qh(e,n,t){const r=Rf(e,n);if(r<0)return n;const o=Math.min(Math.max(r+t,0),e.length-1);return e[o].key}function Fu(e,n,t){const r={at:new Date().toISOString(),action:n,...t?{detail:t}:{}};return{...e,history:[r,...(e.history??[]).slice(0,49)]}}function qr(e,n,t){return e.map(r=>r.id===n?{...r,...t}:r)}function Uu(e){return Object.keys(e).length>0}function Wu(e){if(typeof e=="number"&&Number.isFinite(e))return`"${e}"`;const n=e==null?"":String(e);return`"${(/^[=+\-@\t\r]/.test(n)?`'${n}`:n).replace(/"/g,'""')}"`}function ey(e){if(!e)return e;const n=e.replace(/\D/g,"");return n.length<7?"*".repeat(Math.max(n.length,4)):`${n.slice(0,3)}****${n.slice(-4)}`}function ny(e){if(!e||!e.includes("@"))return e;const n=e.lastIndexOf("@"),t=e.slice(0,n),r=e.slice(n+1);return t?t.length<=2?`${t[0]}***@${r}`:`${t[0]}***${t[t.length-1]}@${r}`:e}function ty({orderedPlugins:e,context:n,children:t}){const r=y.useMemo(()=>Wh(e),[e]),o=y.useMemo(()=>({orderedPlugins:e,context:n,slots:r}),[e,n,r]);return u.jsx(zt.Provider,{value:o,children:t})}const ry=new Set(["children","containerRefExternal"]);function oy(e,n){const t=e,r=n,o=new Set([...Object.keys(t),...Object.keys(r)]);for(const i of o)if(!ry.has(i)&&!Object.is(t[i],r[i]))return!1;return!0}function ot(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:o=!1}=t,i=y.forwardRef((l,a)=>{const s=y.useRef(null),[c,d]=y.useState(l.data),f=y.useRef(l.data??[]),h=y.useRef(()=>{});h.current=P=>{var T;f.current=P,d(P),x.bus.emit("candidate:change",{data:P}),(T=l.onDataChange)==null||T.call(l,P)};const v=y.useCallback(P=>{var $;const T=(($=P.props)==null?void 0:$.stages)??Qe;return{...P,updateCandidate:(S,C)=>{P.bus.emit("candidate:update",{id:S,patch:C})},updateCandidates:S=>{P.bus.emit("candidate:batch-update",{updates:S})},moveCandidate:(S,C)=>{P.bus.emit("candidate:move",{id:S,delta:C,stages:T})},moveCandidateTo:(S,C)=>{P.bus.emit("candidate:move",{id:S,targetStage:C,stages:T})},moveCandidatesTo:(S,C)=>{P.bus.emit("candidate:batch-move",{ids:S,targetStage:C,stages:T})}}},[]),x=Ih({plugins:r,props:l,data:c,containerRef:s,extendContext:v,enableDebug:o});y.useEffect(()=>{l.data!==void 0&&(f.current=l.data,d(l.data))},[l.data]),y.useEffect(()=>x.bus.on("candidate:update",P=>{const{id:T,patch:$}=P??{};if(!T||!$||!Uu($))return;const S=f.current;if(!S.some(D=>D.id===T))return;const C=qr(S,T,$);h.current(C)}),[x.bus]),y.useEffect(()=>x.bus.on("candidate:batch-update",P=>{const{updates:T}=P??{};if(!Array.isArray(T)||T.length===0)return;let $=f.current,S=!1;for(const{id:C,patch:D}of T)!C||!D||!Uu(D)||$.some(A=>A.id===C)&&($=qr($,C,D),S=!0);S&&h.current($)}),[x.bus]),y.useEffect(()=>x.bus.on("candidate:move",P=>{const{id:T,delta:$,targetStage:S,stages:C}=P??{};if(!T)return;const D=C??Qe,A=f.current,L=A.find(xe=>xe.id===T);if(!L)return;let B;if(S!==void 0){if(!D.some(xe=>xe.key===S))return;B=S}else{if(!$)return;B=qh(D,L.stage,$)}if(B===L.stage)return;const Le=qr(A,T,Fu({...L,stage:B},"阶段流转",B));h.current(Le)}),[x.bus]),y.useEffect(()=>x.bus.on("candidate:batch-move",P=>{const{ids:T,targetStage:$,stages:S}=P??{};if(!Array.isArray(T)||T.length===0||!$||!(S??Qe).some(L=>L.key===$))return;let D=f.current,A=!1;for(const L of T){const B=D.find(Le=>Le.id===L);!B||B.stage===$||(D=qr(D,L,Fu({...B,stage:$},"阶段流转",$)),A=!0)}A&&h.current(D)}),[x.bus]);const w=x.context,j=y.useMemo(()=>c===void 0?void 0:x.transformData(c),[c,x.transformData,x.state]),g=y.useMemo(()=>({...w,data:j,rawData:c}),[w,j,c]),p=y.useCallback((P,...T)=>x.execute(P,...T),[x.manager]),m=x.transformProps(l);y.useEffect(()=>{p("onMount")},[p,x.orderedPlugins]);const k=y.useRef(null);y.useEffect(()=>{const P=k.current;k.current=l,!(!P||oy(P,l))&&p("onPropsChange",P,l)},[l,p]);const E={...m,containerRefExternal:s,debug:m.debug??o,onMount:()=>{var P;(P=m.onMount)==null||P.call(m)},onUnmount:()=>{var P;(P=m.onUnmount)==null||P.call(m)},children:u.jsxs(ii,{children:[Uh(x.orderedPlugins,g,{hook:"renderOverlay"}),m.children]})};return u.jsx(ty,{orderedPlugins:x.orderedPlugins,context:g,children:u.jsx(e,{ref:a,...E})})});return i.displayName="WithPlugins(CandidateCore)",i}const iy="Score",ly="岗位匹配分徽章：候选人卡片右上角展示 0-100 匹配分胶囊，按阈值着色（优秀绿 / 待定橙 / 偏低红）。纯展示，不改数据。",ay="0.1.0",sy=["score","renderCardBadges"],uy=[{name:"renderCardBadges",when:"每次渲染，每张候选人卡片",description:"渲染匹配分徽章（阈值着色）"}],cy=[],dy="只读取 candidate.score，不调用上下文方法",fy=[{name:"goodThreshold",type:"number",default:"80",description:"≥该值显示绿色"},{name:"warnThreshold",type:"number",default:"60",description:"≥该值显示橙色，否则红色"}],py="withCandidatePlugins(CandidateCore, [createScorePlugin({ goodThreshold: 85 })])",Ga={name:iy,description:ly,since:ay,tags:sy,events:uy,methods:cy,methodsNote:dy,config:fy,example:py};function gy(e,n,t){return e>=n?_.good:e>=t?_.warn:_.bad}const Or=(e={})=>{const n=e.goodThreshold??80,t=e.warnThreshold??60;return{name:"score",version:"0.1.0",description:Ga.description,priority:10,config:{order:10},hooks:{renderCardBadges:(r,o)=>{if(typeof o.score!="number")return null;const i=gy(o.score,n,t);return u.jsxs("span",{title:`匹配分 ${o.score}`,"aria-label":`匹配分 ${o.score}`,style:{fontSize:11,fontWeight:700,color:i,border:`1px solid ${i}`,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:[o.score,"分"]},"score")}}}};Or.meta=Ga;const my="StageFlow",hy="阶段流转：卡片操作区「◀ 推进 ▶」按钮，按阶段定义推进/退回候选人（自动追加流转历史，越界自动禁用）。流转核心动作插件。",yy="0.1.0",vy=["stage-flow","renderCardActions"],xy=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"渲染推进/退回按钮，边界禁用"}],Sy=["moveCandidate(id, delta)"],wy=[{name:"step",type:"number",default:"1",description:"每次流转的步长"},{name:"allowBackward",type:"boolean",default:"true",description:"是否允许回退"}],ky="withCandidatePlugins(CandidateCore, [createStageFlowPlugin({ allowBackward: false })])",Qa={name:my,description:hy,since:yy,tags:vy,events:xy,methods:Sy,config:wy,example:ky},Mt=(e={})=>{const n=e.step??1,t=e.allowBackward??!0;return{name:"stage-flow",version:"0.1.0",description:Qa.description,priority:20,config:{order:20},hooks:{renderCardActions:(r,o)=>{var d;const i=((d=r.props)==null?void 0:d.stages)??Qe,l=Rf(i,o.stage),a=l<=0,s=l<0||l>=i.length-1,c=f=>({...Cy,...f?{color:_.faint,cursor:"not-allowed"}:{}});return u.jsxs("span",{style:{display:"inline-flex",gap:2},children:[t&&u.jsx("button",{type:"button",disabled:a,"aria-label":`将 ${o.name} 退回上一阶段`,onClick:()=>r.moveCandidate(o.id,-n),style:c(a),children:"◀"}),u.jsx("button",{type:"button",disabled:s,"aria-label":`将 ${o.name} 推进到下一阶段`,onClick:()=>r.moveCandidate(o.id,n),style:c(s),children:"▶"})]},"stage-flow")}}}},Cy={border:`1px solid ${_.lineStrong}`,background:_.chipBg,color:_.chipText,borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer",lineHeight:"18px"};Mt.meta=Qa;const Bn=[{key:"applied",label:"已投递",tone:"neutral"},{key:"screening",label:"筛选中",tone:"info"},{key:"interview",label:"面试中",tone:"warn"},{key:"offer",label:"Offer",tone:"good"},{key:"hired",label:"已入职",tone:"good"},{key:"rejected",label:"已婉拒",tone:"bad"}],Fn=[{id:"c-001",name:"陈知远",role:"高级前端工程师",stage:"interview",score:92,tags:["重点","内推"],source:"内推",appliedAt:"2026-10-28",email:"zhiyuan.chen@example.com",phone:"13812345678",summary:"8 年前端经验，主导过千万级 DAU 项目的性能优化与组件库建设，React / TypeScript 深度使用者。",starred:!0,interview:{date:"周二 14:00",interviewer:"王工",mode:"onsite"},notes:[{id:"n-1",author:"张HR",at:"2026-10-30T10:20:00.000Z",text:"一面通过，系统设计扎实，二面约下周二。"}],history:[{at:"2026-10-30T02:00:00.000Z",action:"阶段流转",detail:"interview"}]},{id:"c-002",name:"林小满",role:"前端工程师",stage:"offer",score:88,tags:["急招"],source:"BOSS 直聘",appliedAt:"2026-10-25",email:"xiaoman.lin@example.com",phone:"13987654321",summary:"4 年经验，熟悉 React 生态与工程化，有跨端（小程序 / H5）交付经验。",offer:{salary:"28K · 15薪",status:"sent"},history:[{at:"2026-11-01T08:00:00.000Z",action:"Offer 已发出"}]},{id:"c-003",name:"赵启明",role:"前端负责人",stage:"screening",score:85,tags:["重点"],source:"猎头",appliedAt:"2026-11-01",email:"qiming.zhao@example.com",phone:"13655556666",summary:"10 年经验，带过 15 人前端团队，擅长中大型 B 端系统架构与团队管理。"},{id:"c-004",name:"王雨桐",role:"初级前端工程师",stage:"applied",score:64,source:"官网投递",appliedAt:"2026-11-02",email:"yutong.wang@example.com",phone:"15811112222",summary:"应届毕业生，两段大厂实习经历，熟悉 React 与 Node 基础。"},{id:"c-005",name:"刘一鸣",role:"高级前端工程师",stage:"interview",score:78,source:"内推",appliedAt:"2026-10-27",email:"yiming.liu@example.com",phone:"13733334444",summary:"6 年经验，可视化方向，Canvas / WebGL 项目经验丰富。",interview:{date:"周四 16:00",interviewer:"李总监",mode:"video"}},{id:"c-006",name:"孙婉清",role:"全栈工程师",stage:"screening",score:74,tags:["备选"],source:"拉勾",appliedAt:"2026-10-30",email:"wanqing.sun@example.com",phone:"15966667777",summary:"5 年经验，React + NestJS 全栈，独立负责过 SaaS 产品从 0 到 1。"},{id:"c-007",name:"周北辰",role:"前端工程师",stage:"hired",score:90,tags:["重点"],source:"内推",appliedAt:"2026-10-08",email:"beichen.zhou@example.com",phone:"18677778888",summary:"5 年经验，已确认入职，负责核心交易链路前端。",offer:{salary:"32K · 16薪",status:"accepted"}},{id:"c-008",name:"吴悠悠",role:"前端工程师",stage:"rejected",score:45,source:"官网投递",appliedAt:"2026-10-20",email:"youyou.wu@example.com",phone:"17788889999",summary:"3 年经验，方向以移动端 Hybrid 为主，与岗位匹配度一般。",history:[{at:"2026-10-26T06:00:00.000Z",action:"阶段流转",detail:"rejected"}]},{id:"c-009",name:"郑星野",role:"资深前端工程师",stage:"applied",score:81,tags:["内推"],source:"内推",appliedAt:"2026-11-02",email:"xingye.zheng@example.com",phone:"15099990000",summary:"7 年经验，开源组件库维护者，关注工程化与研发效能。"},{id:"c-010",name:"陈知远",role:"前端工程师",stage:"applied",score:58,source:"BOSS 直聘",appliedAt:"2026-11-01",email:"zhiyuan.chen@example.com",phone:"13812345678",summary:"同名候选人，疑似重复投递（DupCheck 演示用）。"},{id:"c-011",name:"何静姝",role:"技术专家",stage:"screening",score:83,archived:!0,source:"猎头",appliedAt:"2026-09-15",email:"jingshu.he@example.com",phone:"13122223333",summary:"暂无匹配岗位，归档至人才库（ArchivePool 演示用）。"}],Py={slug:"basic",title:"最小可用",group:"basic",intro:"内核 + 匹配分/阶段流转两个插件跑通装配链路；加插件就是往 withPlugins 数组里加一项。",why:"第一次接入时的起点：两个插件就能看出「徽章槽 + 操作槽 + 数据流转」的完整回路。",plugs:[{fn:"createScorePlugin",cfg:"{}",why:"卡片右上角渲染匹配分胶囊，最简单的装饰槽插件。"},{fn:"createStageFlowPlugin",cfg:"{}",why:"卡片操作区 ◀/▶，经 ctx.moveCandidate 流转并自动留 history。"}],props:[],note:"withPlugins 是 withCandidatePlugins 的别名；数据流转在装配层内部态完成，宿主可用 onDataChange 同步。"},_y=ot(An,[Or(),Mt()]);function by(e){return u.jsx(_y,{data:Fn.slice(0,6),stages:Bn,containerStyle:{maxWidth:1120}})}const jy=Object.freeze(Object.defineProperty({__proto__:null,default:by,meta:Py},Symbol.toStringTag,{value:"Module"})),Ey="DupCheck",Ty="重复候选人检测：按姓名/邮箱/手机号扫描列表，命中者在卡片上显示「疑似重复」警示徽章，辅助 HR 及时发现重复投递。",$y="0.1.0",Ny=["dup-check","renderCardBadges"],Oy=[{name:"renderCardBadges",when:"每次渲染，每张候选人卡片",description:"命中重复时渲染警示徽章"}],Ry=[],Dy="只读取 ctx.data 与 candidate 字段，不调用上下文方法",Ly=[{name:"fields",type:"('name'|'email'|'phone')[]",default:"['name','email','phone']",description:"参与判重的字段"}],zy="withCandidatePlugins(CandidateCore, [createDupCheckPlugin({ fields: ['email', 'phone'] })])",Ya={name:Ey,description:Ty,since:$y,tags:Ny,events:Oy,methods:Ry,methodsNote:Dy,config:Ly,example:zy};function Df(e,n){var r;const t=[];for(const o of n){const i=(r=e[o])==null?void 0:r.trim().toLowerCase();i&&t.push(`${o}:${i}`)}return t}const Hu=new WeakMap;function My(e,n){const t=Hu.get(e);if(t)return t;const r=new Map;for(const o of e)for(const i of Df(o,n)){const l=r.get(i);l?l.push(o.id):r.set(i,[o.id])}return Hu.set(e,r),r}const Xa=(e={})=>{const n=e.fields??["name","email","phone"];return{name:"dup-check",version:"0.1.0",description:Ya.description,priority:20,config:{order:20},hooks:{renderCardBadges:(t,r)=>{const o=t.rawData??t.data??[],i=Df(r,n);if(i.length===0)return null;const l=My(o,n),a=new Set;for(const s of i)for(const c of l.get(s)??[])c!==r.id&&a.add(c);return a.size===0?null:u.jsx("span",{title:`与另外 ${a.size} 位候选人疑似重复`,"aria-label":`疑似重复：另有 ${a.size} 位`,style:{fontSize:11,fontWeight:700,color:"#8a4a06",background:"#fdf1e2",border:"1px solid #ecd3ae",borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:"疑似重复"},"dup-check")}}}};Xa.meta=Ya;const Iy='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',Gt=[];let Ay=0;function It({title:e,onClose:n,children:t,width:r=360,zIndex:o=55,closeLabel:i="关闭",headerExtra:l,align:a="center"}){const s=y.useRef(null),c=y.useRef(n);return c.current=n,y.useEffect(()=>{const d=s.current;if(!d||typeof document>"u")return;const f=++Ay;Gt.push(f);const h=()=>Gt[Gt.length-1]===f,v=document.activeElement,x=()=>Array.from(d.querySelectorAll(Iy)).filter(g=>!g.hasAttribute("disabled"));(x()[0]??d).focus();const j=g=>{if(!h())return;if(g.key==="Escape"){g.stopPropagation(),c.current();return}if(g.key!=="Tab")return;const p=x();if(p.length===0){g.preventDefault(),d.focus();return}const m=p[0],k=p[p.length-1];g.shiftKey&&document.activeElement===m?(g.preventDefault(),k.focus()):!g.shiftKey&&document.activeElement===k&&(g.preventDefault(),m.focus())};return document.addEventListener("keydown",j),()=>{document.removeEventListener("keydown",j);const g=Gt.indexOf(f);g>=0&&Gt.splice(g,1);try{v==null||v.focus()}catch{}}},[]),u.jsx("div",{"data-vcd-overlay":"",onClick:d=>{d.target===d.currentTarget&&n()},style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:a==="end"?"flex-end":"center",justifyContent:"center",zIndex:o},children:u.jsxs("div",{ref:s,role:"dialog","aria-modal":"true","aria-label":typeof e=="string"?e:void 0,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{background:"#fff",color:_.text,borderRadius:a==="end"?"10px 10px 0 0":10,padding:18,width:r,maxWidth:"92%",maxHeight:"86%",overflow:"auto",boxShadow:"0 8px 30px rgba(0,0,0,0.25)",outline:"none"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:[u.jsx("strong",{style:{color:_.text,flex:1,minWidth:0},children:e}),l,u.jsx("button",{type:"button",onClick:n,style:X(!1),children:i})]}),t]})})}const By="Tag",Fy="候选人标签：卡片徽章区展示标签 chips，浮层内可添加/删除标签（支持快捷建议标签），写回 candidate.tags。",Uy="0.1.0",Wy=["tags","renderCardBadges","renderOverlay"],Hy=[{name:"renderCardBadges",when:"每次渲染，每张候选人卡片",description:"展示标签 chips 与管理入口"},{name:"renderOverlay",when:"state.tagEditingId 非空时",description:"标签管理浮层（添加/删除/快捷建议）"}],Vy=["updateCandidate(id, { tags })"],Ky=[{name:"suggestTags",type:"string[]",default:"['重点','备选','急招','内推']",description:"快捷标签建议"},{name:"maxTags",type:"number",default:"8",description:"每位候选人最多标签数"}],Gy="withCandidatePlugins(CandidateCore, [createTagPlugin({ suggestTags: ['重点','银牌'] })])",Za={name:By,description:Fy,since:Uy,tags:Wy,events:Hy,methods:Vy,config:Ky,example:Gy},li=(e={})=>{const n=e.suggestTags??["重点","备选","急招","内推"],t=e.maxTags??8;return{name:"tags",version:"0.1.0",description:Za.description,priority:30,config:{order:30},hooks:{renderCardBadges:(r,o)=>{const i=o.tags??[],l=r.state.tagEditingId===o.id;return u.jsxs(Dn.Fragment,{children:[i.slice(0,3).map(a=>u.jsx("span",{style:{fontSize:11,color:_.chipText,background:_.chipBg,border:`1px solid ${_.line}`,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:a},a)),i.length>3&&u.jsxs("span",{title:i.join("、"),"aria-label":`共 ${i.length} 个标签`,style:{fontSize:11,color:_.faint,lineHeight:"18px"},children:["+",i.length-3]}),u.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":l,"aria-label":`${o.name} 的标签管理`,onClick:()=>r.setState({tagEditingId:l?null:o.id}),style:{...X(!1),fontSize:11,padding:"0 6px",lineHeight:"16px"},children:"标签"})]},"tags")},renderOverlay:r=>{const o=r.state.tagEditingId;if(!o)return null;const i=(r.data??[]).find(d=>d.id===o);if(!i)return null;const l=i.tags??[],a=()=>r.setState({tagEditingId:null}),s=d=>{const f=d.trim();!f||l.includes(f)||l.length>=t||r.updateCandidate(o,{tags:[...l,f]})},c=d=>r.updateCandidate(o,{tags:l.filter(f=>f!==d)});return u.jsxs(It,{title:`标签管理 · ${i.name}`,onClose:a,width:340,zIndex:56,children:[u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10},children:[l.length===0&&u.jsx("span",{style:{color:_.muted,fontSize:13},children:"暂无标签"}),l.map(d=>u.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,color:_.chipText,background:_.chipBg,border:`1px solid ${_.line}`,borderRadius:999,padding:"2px 6px 2px 10px"},children:[d,u.jsx("button",{type:"button","aria-label":`删除标签 ${d}`,onClick:()=>c(d),style:{border:"none",background:"transparent",color:_.bad,cursor:"pointer",fontSize:12,padding:0,lineHeight:1},children:"×"})]},d))]}),u.jsxs("form",{onSubmit:d=>{d.preventDefault();const f=d.currentTarget.elements.namedItem("tag");f!=null&&f.value&&(s(f.value),f.value="")},style:{display:"flex",gap:6,marginBottom:10},children:[u.jsx("input",{name:"tag","aria-label":"新标签名称",placeholder:"输入标签后回车",maxLength:12,style:{flex:1,border:`1px solid ${_.lineStrong}`,borderRadius:6,padding:"5px 8px",fontSize:13,color:_.text,background:"#fff"}}),u.jsx("button",{type:"submit",style:X(!0),children:"添加"})]}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:12,color:_.muted,marginBottom:4},children:"快捷标签"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:n.map(d=>u.jsx("button",{type:"button",onClick:()=>s(d),style:X(l.includes(d)),children:d},d))})]})]},"tags-overlay")}}}};li.meta=Za;const Qy="Offer",Yy="Offer 状态徽章：候选人带 offer 字段时展示状态胶囊（审批中灰 / 已发出蓝 / 已接受绿 / 已婉拒红），可自定义文案。纯展示。",Xy="0.1.0",Zy=["offer","renderCardBadges"],Jy=[{name:"renderCardBadges",when:"每次渲染，每张候选人卡片",description:"candidate.offer 存在时渲染状态徽章"}],qy=[],ev="只读取 candidate.offer，不调用上下文方法",nv=[{name:"labels",type:"Partial<Record<status, string>>",default:"内置中文文案",description:"各状态自定义文案"}],tv="withCandidatePlugins(CandidateCore, [createOfferPlugin({ labels: { sent: '已发 Offer' } })])",Ja={name:Qy,description:Yy,since:Xy,tags:Zy,events:Jy,methods:qy,methodsNote:ev,config:nv,example:tv},rv={draft:"Offer 审批中",sent:"Offer 已发出",accepted:"已接受 Offer",declined:"已婉拒 Offer"},ov={draft:{fg:"#5d636a",bg:"#f2f3f5"},sent:{fg:"#1c6ea8",bg:"#e7f1fa"},accepted:{fg:"#1f7a3f",bg:"#e8f5ec"},declined:{fg:"#b42318",bg:"#fdeceb"}},qa=(e={})=>{const n={...rv,...e.labels??{}};return{name:"offer",version:"0.1.0",description:Ja.description,priority:40,config:{order:40},hooks:{renderCardBadges:(t,r)=>{const o=r.offer;if(!o)return null;const i=ov[o.status];return u.jsx("span",{title:o.salary?`${n[o.status]} · ${o.salary}`:n[o.status],"aria-label":n[o.status],style:{fontSize:11,fontWeight:700,color:i.fg,background:i.bg,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:n[o.status]},"offer")}}}};qa.meta=Ja;const iv="Star",lv="星标收藏：卡片操作区 ☆/★ 一键切换星标，可选把星标候选人置顶到各自阶段列最前（transformData）。",av="0.1.0",sv=["star","renderCardActions","transformData"],uv=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"星标切换按钮（aria-pressed）"},{name:"transformData",when:"pinTop 开启时，渲染前",description:"星标候选人置顶排序"}],cv=["updateCandidate(id, { starred })"],dv=[{name:"pinTop",type:"boolean",default:"true",description:"星标候选人在列内置顶"}],fv="withCandidatePlugins(CandidateCore, [createStarPlugin({ pinTop: false })])",es={name:iv,description:lv,since:av,tags:sv,events:uv,methods:cv,config:dv,example:fv},ai=(e={})=>{const n=e.pinTop??!0;return{name:"star",version:"0.1.0",description:es.description,priority:10,config:{order:10},hooks:{...n?{transformData:(t,r)=>{const o=r??[],i=o.filter(a=>a.starred),l=o.filter(a=>!a.starred);return[...i,...l]}}:{},renderCardActions:(t,r)=>{const o=!!r.starred;return u.jsx("button",{type:"button","aria-pressed":o,"aria-label":o?`取消星标 ${r.name}`:`星标 ${r.name}`,title:o?"取消星标":"星标",onClick:()=>t.updateCandidate(r.id,{starred:!o}),style:{border:"none",background:"transparent",cursor:"pointer",fontSize:14,padding:"2px 4px",color:o?"#c2410c":_.muted,lineHeight:1},children:o?"★":"☆"},"star")}}}};ai.meta=es;const pv="Note",gv="招聘备注：卡片操作区备注按钮（带条数角标），浮层内查看/新增/删除备注，写回 candidate.notes。面试沟通、背调结论都记在这里。",mv="0.1.0",hv=["note","renderCardActions","renderOverlay"],yv=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"备注入口按钮"},{name:"renderOverlay",when:"state.noteEditingId 非空时",description:"备注管理浮层"}],vv=["updateCandidate(id, { notes })"],xv=[{name:"authorName",type:"string",default:"'我'",description:"备注作者署名"},{name:"maxNotes",type:"number",default:"50",description:"每位候选人最多保留备注条数"}],Sv="withCandidatePlugins(CandidateCore, [createNotePlugin({ authorName: '张HR' })])",ns={name:pv,description:gv,since:mv,tags:hv,events:yv,methods:vv,config:xv,example:Sv},si=(e={})=>{const n=e.authorName??"我",t=e.maxNotes??50;return{name:"note",version:"0.1.0",description:ns.description,priority:30,config:{order:30},hooks:{renderCardActions:(r,o)=>{var l;const i=((l=o.notes)==null?void 0:l.length)??0;return u.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-label":`${o.name} 的备注（${i} 条）`,onClick:()=>r.setState({noteEditingId:r.state.noteEditingId===o.id?null:o.id}),style:wv,children:["备注",i>0?` (${i})`:""]},"note")},renderOverlay:r=>{const o=r.state.noteEditingId;if(!o)return null;const i=(r.data??[]).find(s=>s.id===o);if(!i)return null;const l=i.notes??[],a=()=>r.setState({noteEditingId:null});return u.jsxs(It,{title:`备注 · ${i.name}`,onClose:a,width:380,zIndex:56,children:[u.jsxs("form",{onSubmit:s=>{s.preventDefault();const c=s.currentTarget.elements.namedItem("text"),d=c==null?void 0:c.value.trim();d&&(r.updateCandidate(o,{notes:[...l,{id:`n-${Date.now()}`,author:n,at:new Date().toISOString(),text:d}].slice(-t)}),c&&(c.value=""))},style:{display:"flex",gap:6,marginBottom:12},children:[u.jsx("input",{name:"text","aria-label":"备注内容",placeholder:"记录沟通要点…",style:{flex:1,border:`1px solid ${_.lineStrong}`,borderRadius:6,padding:"5px 8px",fontSize:13,color:_.text,background:"#fff"}}),u.jsx("button",{type:"submit",style:X(!0),children:"添加"})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.length===0&&u.jsx("span",{style:{color:_.muted,fontSize:13},children:"暂无备注"}),l.slice().reverse().map(s=>u.jsxs("div",{style:{border:`1px solid ${_.line}`,borderRadius:8,padding:"8px 10px",fontSize:13},children:[u.jsxs("div",{style:{display:"flex",gap:8,marginBottom:2},children:[u.jsx("strong",{style:{color:_.text},children:s.author}),u.jsx("span",{style:{color:_.faint,fontSize:12},children:s.at.slice(0,16).replace("T"," ")}),u.jsx("button",{type:"button","aria-label":`删除备注 ${s.text.slice(0,8)}`,onClick:()=>r.updateCandidate(o,{notes:l.filter(c=>c.id!==s.id)}),style:{marginLeft:"auto",border:"none",background:"transparent",color:_.bad,cursor:"pointer",fontSize:12},children:"删除"})]}),u.jsx("div",{style:{color:_.text},children:s.text})]},s.id))]})]},"note-overlay")}}}},wv={border:`1px solid ${_.lineStrong}`,background:_.chipBg,color:_.chipText,borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer"};si.meta=ns;function Hi({label:e,children:n}){return u.jsxs("div",{style:{marginBottom:10},children:[u.jsx("div",{style:{fontSize:12,color:_.muted,marginBottom:4},children:e}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:n})]})}const kv="InterviewSlot",Cv="面试安排：卡片操作区「安排面试」入口，浮层内从时间槽/面试官/形式中点选保存到 candidate.interview，卡片正文显示面试信息条。",Pv="0.1.0",_v=["interview-slot","renderCardActions","renderCardBody","renderOverlay"],bv=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"安排/改期面试入口"},{name:"renderCardBody",when:"candidate.interview 存在时",description:"面试信息条（时间/形式/面试官）"},{name:"renderOverlay",when:"state.interviewEditingId 非空时",description:"面试安排浮层"}],jv=["updateCandidate(id, { interview })"],Ev=[{name:"slots",type:"string[]",default:"['周二 14:00','周三 10:00','周四 16:00','周五 15:00']",description:"可选时间槽"},{name:"interviewers",type:"string[]",default:"['王工','李总监']",description:"可选面试官"},{name:"modes",type:"('onsite'|'video'|'phone')[]",default:"['onsite','video']",description:"面试形式"}],Tv="withCandidatePlugins(CandidateCore, [createInterviewSlotPlugin({ slots: ['周一 10:00', '周三 14:00'] })])",ts={name:kv,description:Cv,since:Pv,tags:_v,events:bv,methods:jv,config:Ev,example:Tv},Vu={onsite:"现场",video:"视频",phone:"电话"},rs=(e={})=>{const n=e.slots??["周二 14:00","周三 10:00","周四 16:00","周五 15:00"],t=e.interviewers??["王工","李总监"],r=e.modes??["onsite","video"];return{name:"interview-slot",version:"0.1.0",description:ts.description,priority:40,config:{order:40},hooks:{renderCardActions:(o,i)=>{const l=o.state.interviewEditingId===i.id;return u.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":l,"aria-label":`安排 ${i.name} 的面试`,onClick:()=>o.setState({interviewEditingId:l?null:i.id}),style:$v,children:i.interview?"改期":"安排面试"},"interview")},renderCardBody:(o,i)=>{const l=i.interview;return l?u.jsxs("div",{style:{marginTop:6,fontSize:12,color:"#8a4a06",background:"#fdf1e2",borderRadius:6,padding:"4px 8px"},children:["📅 面试：",l.date,l.mode&&` · ${Vu[l.mode]??l.mode}`,l.interviewer&&` · ${l.interviewer}`]}):null},renderOverlay:o=>{const i=o.state.interviewEditingId;if(!i)return null;const l=(o.data??[]).find(c=>c.id===i);if(!l)return null;const a=()=>o.setState({interviewEditingId:null}),s=c=>{const d=l.interview??{date:n[0]};o.updateCandidate(i,{interview:{...d,...c}})};return u.jsxs(It,{title:`安排面试 · ${l.name}`,onClose:a,width:360,zIndex:56,children:[u.jsx(Hi,{label:"时间槽",children:n.map(c=>{var d,f;return u.jsx("button",{type:"button","aria-pressed":((d=l.interview)==null?void 0:d.date)===c,onClick:()=>s({date:c}),style:X(((f=l.interview)==null?void 0:f.date)===c),children:c},c)})}),u.jsx(Hi,{label:"面试官",children:t.map(c=>{var d,f;return u.jsx("button",{type:"button","aria-pressed":((d=l.interview)==null?void 0:d.interviewer)===c,onClick:()=>s({interviewer:c}),style:X(((f=l.interview)==null?void 0:f.interviewer)===c),children:c},c)})}),u.jsx(Hi,{label:"形式",children:r.map(c=>{var d,f;return u.jsx("button",{type:"button","aria-pressed":((d=l.interview)==null?void 0:d.mode)===c,onClick:()=>s({mode:c}),style:X(((f=l.interview)==null?void 0:f.mode)===c),children:Vu[c]??c},c)})}),l.interview&&u.jsx("button",{type:"button",onClick:()=>o.updateCandidate(i,{interview:void 0}),style:{...X(!1),marginTop:12},children:"取消面试安排"})]},"interview-overlay")}}}},$v={border:`1px solid ${_.lineStrong}`,background:_.chipBg,color:_.chipText,borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer"};rs.meta=ts;const Nv="RejectTpl",Ov="婉拒模板：卡片操作区「婉拒」入口，浮层内选择模板（可预览编辑），确认后候选人流转到婉拒阶段并保留流转历史。",Rv="0.1.0",Dv=["reject-tpl","renderCardActions","renderOverlay"],Lv=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"婉拒入口按钮"},{name:"renderOverlay",when:"state.rejectEditingId 非空时",description:"模板选择与编辑浮层"}],zv=["updateCandidate(id, { stage })"],Mv=[{name:"templates",type:"RejectTemplate[]",default:"内置 2 套",description:"婉拒信模板（id/title/body）"},{name:"targetStage",type:"string",default:"'rejected'",description:"流转目标阶段 key"}],Iv="withCandidatePlugins(CandidateCore, [createRejectTplPlugin({ targetStage: 'rejected' })])",os={name:Nv,description:Ov,since:Rv,tags:Dv,events:Lv,methods:zv,config:Mv,example:Iv},Av=[{id:"polite",title:"礼貌婉拒",body:"感谢您对本职位的关注。经过综合评估，我们认为您与当前岗位的匹配度仍有差距，但您的经历给我们留下了深刻印象。我们会将您纳入人才库，如有更合适的机会将第一时间与您联系。祝求职顺利！"},{id:"skill-gap",title:"技能方向不符",body:"感谢您抽出时间参与面试。该岗位更侧重 {{gap}} 方向的经验，与您当前的技术栈存在一定差异，故本次未能推进。期待未来在更匹配的岗位合作。"}],ui=(e={})=>{const n=e.templates??Av,t=e.targetStage??"rejected";return{name:"reject-tpl",version:"0.1.0",description:os.description,priority:50,config:{order:50},hooks:{renderCardActions:(r,o)=>{const i=r.state.rejectEditingId===o.id;return u.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":i,"aria-label":`婉拒 ${o.name}`,onClick:()=>r.setState({rejectEditingId:i?null:o.id}),style:Bv,children:"婉拒"},"reject")},renderOverlay:r=>{const o=r.state.rejectEditingId;if(!o)return null;const i=(r.data??[]).find(c=>c.id===o);if(!i)return null;const l=r.state.rejectTplId??n[0].id,a=n.find(c=>c.id===l)??n[0],s=()=>r.setState({rejectEditingId:null,rejectTplId:null});return u.jsxs(It,{title:`婉拒 · ${i.name}`,onClose:s,width:400,zIndex:57,children:[u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10},children:n.map(c=>u.jsx("button",{type:"button","aria-pressed":c.id===a.id,onClick:()=>r.setState({rejectTplId:c.id}),style:X(c.id===a.id),children:c.title},c.id))}),u.jsx("textarea",{"aria-label":"婉拒信内容",defaultValue:a.body,rows:6,style:{width:"100%",boxSizing:"border-box",border:`1px solid ${_.lineStrong}`,borderRadius:6,padding:"8px 10px",fontSize:13,color:_.text,background:"#fff",resize:"vertical",marginBottom:12}},a.id),u.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[u.jsx("button",{type:"button",onClick:s,style:X(!1),children:"取消"}),u.jsx("button",{type:"button",onClick:()=>{r.updateCandidate(o,{stage:t}),s()},style:X(!0),children:"确认婉拒"})]})]},"reject-overlay")}}}},Bv={border:`1px solid ${_.lineStrong}`,background:_.chipBg,color:"#b42318",borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer"};ui.meta=os;const Fv="Filter",Uv="阶段/标签筛选：工具栏阶段与标签下拉（标签选项可配置或自动从数据收集），transformData 按所选条件过滤看板。",Wv="0.1.0",Hv=["filter","renderToolbar","transformData"],Vv=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"阶段/标签筛选控件与清除按钮"},{name:"transformData",when:"渲染前，筛选条件变化时重跑",description:"按 filterStage / filterTag 过滤"}],Kv=[],Gv="通过 ctx.setState({ filterStage, filterTag }) 驱动",Qv=[{name:"tagOptions",type:"string[]",default:"自动从数据收集",description:"可选的标签筛选项"}],Yv="withCandidatePlugins(CandidateCore, [createFilterPlugin({ tagOptions: ['重点', '内推'] })])",is={name:Fv,description:Uv,since:Wv,tags:Hv,events:Vv,methods:Kv,methodsNote:Gv,config:Qv,example:Yv},ci=(e={})=>({name:"filter",version:"0.1.0",description:is.description,priority:50,config:{order:50},hooks:{transformData:(n,t)=>{const r=n.state.filterStage,o=n.state.filterTag;return!r&&!o?t:(t??[]).filter(l=>(!r||l.stage===r)&&(!o||(l.tags??[]).includes(o)))},renderToolbar:n=>{var a;const t=((a=n.props)==null?void 0:a.stages)??Qe,r=n.state.filterStage??"",o=n.state.filterTag??"",i=e.tagOptions??Array.from(new Set((n.rawData??n.data??[]).flatMap(s=>s.tags??[]))),l=!!(r||o);return u.jsxs("span",{style:{display:"inline-flex",gap:6,alignItems:"center"},children:[u.jsxs("select",{"aria-label":"按阶段筛选",value:r,onChange:s=>n.setState({filterStage:s.target.value||void 0}),style:Ku,children:[u.jsx("option",{value:"",children:"全部阶段"}),t.map(s=>u.jsx("option",{value:s.key,children:s.label},s.key))]}),i.length>0&&u.jsxs("select",{"aria-label":"按标签筛选",value:o,onChange:s=>n.setState({filterTag:s.target.value||void 0}),style:Ku,children:[u.jsx("option",{value:"",children:"全部标签"}),i.map(s=>u.jsx("option",{value:s,children:s},s))]}),l&&u.jsx("button",{type:"button",onClick:()=>n.setState({filterStage:void 0,filterTag:void 0}),style:X(!1),children:"清除筛选"})]},"filter")}}}),Ku={border:`1px solid ${_.lineStrong}`,borderRadius:6,fontSize:12,padding:"3px 6px",background:"#fff",color:_.text};ci.meta=is;const Xv="Search",Zv="关键词搜索：工具栏搜索框（姓名/岗位/摘要/标签/来源），transformData 实时过滤看板，空关键词不过滤。",Jv="0.1.0",qv=["search","renderToolbar","transformData"],e0=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"搜索输入框"},{name:"transformData",when:"渲染前，关键词变化时重跑",description:"按 searchKeyword 匹配过滤"}],n0=[],t0="通过 ctx.setState({ searchKeyword }) 驱动",r0=[{name:"fields",type:"('name'|'role'|'summary'|'tags'|'source')[]",default:"全部字段",description:"参与搜索的字段"}],o0="withCandidatePlugins(CandidateCore, [createSearchPlugin({ fields: ['name', 'role'] })])",ls={name:Xv,description:Zv,since:Jv,tags:qv,events:e0,methods:n0,methodsNote:t0,config:r0,example:o0};function Gu(e,n,t){const r=n.toLowerCase();for(const o of t){const i=e[o];if(typeof i=="string"&&i.toLowerCase().includes(r)||Array.isArray(i)&&i.some(l=>l.toLowerCase().includes(r)))return!0}return!1}const di=(e={})=>{const n=e.fields??["name","role","summary","tags","source"],t=e.debounceMs??0;let r,o;return{name:"search",version:"0.1.0",description:ls.description,priority:40,config:{order:40},hooks:{transformData:(i,l)=>{var c;const a=(c=i.state.searchKeyword)==null?void 0:c.trim();if(!t||a===r)return r=a,o&&(clearTimeout(o),o=void 0),a?(l??[]).filter(d=>Gu(d,a,n)):l;o&&clearTimeout(o),o=setTimeout(()=>{o=void 0,r=a,i.forceUpdate()},t);const s=r;return s?(l??[]).filter(d=>Gu(d,s,n)):l},renderToolbar:i=>{const l=i.state.searchKeyword??"";return u.jsx("span",{style:{display:"inline-flex",alignItems:"center"},children:u.jsx("input",{type:"search","aria-label":"搜索候选人",placeholder:"搜索姓名 / 岗位 / 标签…",value:l,onChange:a=>i.setState({searchKeyword:a.target.value||void 0}),style:{border:`1px solid ${_.lineStrong}`,borderRadius:6,fontSize:12,padding:"4px 8px",width:180,color:_.text,background:"#fff"}})},"search")}}}};di.meta=ls;const i0="BatchOp",l0="批量操作：工具栏「批量」进入选择模式，卡片出现复选框，支持全选/清空/批量流转到指定阶段/批量归档。写操作逐条走 updateCandidate / moveCandidate。",a0="0.1.0",s0=["batch-op","renderToolbar","renderCardActions"],u0=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"批量开关与批量操作按钮组"},{name:"renderCardActions",when:"批量模式开启时",description:"卡片复选框"}],c0=["moveCandidate(id, delta)","updateCandidate(id, { stage | archived })"],d0=[{name:"targetStages",type:"StageConfig[]",default:"跟随核心阶段定义",description:"批量流转目标阶段"}],f0="withCandidatePlugins(CandidateCore, [createBatchOpPlugin()])",as={name:i0,description:l0,since:a0,tags:s0,events:u0,methods:c0,config:d0,example:f0},fi=(e={})=>({name:"batch-op",version:"0.1.0",description:as.description,priority:30,config:{order:30},hooks:{renderToolbar:n=>{var l;const t=!!n.state.batchMode,r=n.state.batchSelected??[],o=e.targetStages??((l=n.props)==null?void 0:l.stages)??Qe,i=(n.data??[]).filter(a=>!a.archived);return u.jsxs("span",{style:{display:"inline-flex",gap:6,alignItems:"center"},children:[u.jsx("button",{type:"button","aria-pressed":t,onClick:()=>n.setState({batchMode:!t,batchSelected:[]}),style:X(t),children:"批量"}),t&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button","aria-label":"全选当前候选人",onClick:()=>n.setState({batchSelected:i.map(a=>a.id)}),style:X(!1),children:"全选"}),u.jsx("button",{type:"button","aria-label":"清空选择",onClick:()=>n.setState({batchSelected:[]}),style:X(!1),children:"清空"}),u.jsxs("select",{"aria-label":"批量流转到阶段",value:"",disabled:r.length===0,onChange:a=>{const s=a.target.value;s&&(n.moveCandidatesTo(r,s),n.setState({batchSelected:[]}))},style:{...p0,...r.length===0?{color:_.faint}:{}},children:[u.jsxs("option",{value:"",children:["流转到…",r.length>0?`（已选 ${r.length}）`:""]}),o.map(a=>u.jsx("option",{value:a.key,children:a.label},a.key))]}),u.jsx("button",{type:"button",disabled:r.length===0,"aria-label":`归档已选 ${r.length} 位候选人`,onClick:()=>{n.updateCandidates(r.map(a=>({id:a,patch:{archived:!0}}))),n.setState({batchSelected:[]})},style:{...X(!1),...r.length===0?{color:_.faint,cursor:"not-allowed"}:{}},children:"归档"})]})]},"batch-op")},renderCardActions:(n,t)=>{if(!n.state.batchMode)return null;const r=n.state.batchSelected??[],o=r.includes(t.id);return u.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,color:_.muted},children:[u.jsx("input",{type:"checkbox",checked:o,"aria-label":`选择 ${t.name}`,onChange:()=>n.setState({batchSelected:o?r.filter(i=>i!==t.id):[...r,t.id]})}),"选择"]},"batch-check")}}}),p0={border:`1px solid ${_.lineStrong}`,borderRadius:6,fontSize:12,padding:"3px 6px",background:"#fff",color:_.text};fi.meta=as;const g0="ViewSwitch",m0="看板/列表视图切换：工具栏互斥按钮切换 state.view，list 模式经 renderCards 内容覆盖槽渲染紧凑表格视图，kanban 模式回落核心默认看板。",h0="0.1.0",y0=["view-switch","renderToolbar","renderCards"],v0=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"看板/列表切换按钮组"},{name:"renderCards",when:"state.view 为 list 时",description:"渲染列表视图（覆盖默认看板）"}],x0=[],S0="通过 ctx.setState({ view }) 驱动",w0=[{name:"pageSize",type:"number",default:"0",description:"列表视图条数上限（0 = 不分页）"}],k0="withCandidatePlugins(CandidateCore, [createViewSwitchPlugin({ pageSize: 20 })])",ss={name:g0,description:m0,since:h0,tags:y0,events:v0,methods:x0,methodsNote:S0,config:w0,example:k0},us=(e={})=>{const n=e.pageSize??0;return{name:"view-switch",version:"0.1.0",description:ss.description,priority:70,config:{order:70},hooks:{renderToolbar:t=>{const r=t.state.view??"kanban";return u.jsxs("span",{style:{display:"inline-flex",gap:0},children:[u.jsx("button",{type:"button","aria-pressed":r==="kanban",onClick:()=>t.setState({view:"kanban"}),style:{...X(r==="kanban"),borderRadius:"6px 0 0 6px"},children:"看板"}),u.jsx("button",{type:"button","aria-pressed":r==="list",onClick:()=>t.setState({view:"list"}),style:{...X(r==="list"),borderRadius:"0 6px 6px 0",marginLeft:-1},children:"列表"})]},"view-switch")},renderCards:(t,r)=>{if((t.state.view??"kanban")!=="list")return null;const o=r.stages??Qe,i=a=>{var s;return((s=o.find(c=>c.key===a))==null?void 0:s.label)??a};let l=r.candidates;return n>0&&(l=l.slice(0,n)),u.jsxs("div",{role:"table","aria-label":"候选人列表视图",style:{border:`1px solid ${_.line}`,borderRadius:"var(--vcd-radius, 8px)",overflow:"hidden"},children:[u.jsxs("div",{role:"row",style:{display:"grid",gridTemplateColumns:"2fr 1.4fr 1fr 1fr",background:_.chipBg,fontSize:12,fontWeight:700,color:_.muted,padding:"6px 12px",gap:8},children:[u.jsx("span",{role:"columnheader",children:"候选人"}),u.jsx("span",{role:"columnheader",children:"阶段"}),u.jsx("span",{role:"columnheader",children:"来源"}),u.jsx("span",{role:"columnheader",children:"投递时间"})]}),l.map((a,s)=>{var d;const c=kn[((d=o.find(f=>f.key===a.stage))==null?void 0:d.tone)??"neutral"]??kn.neutral;return u.jsxs("div",{role:"row","data-candidate-id":a.id,style:{display:"grid",gridTemplateColumns:"2fr 1.4fr 1fr 1fr",padding:"8px 12px",gap:8,fontSize:13,borderTop:s===0?"none":`1px solid ${_.line}`,alignItems:"center"},children:[u.jsxs("span",{role:"cell",style:{color:_.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[u.jsx("strong",{children:a.name}),u.jsxs("span",{style:{color:_.muted},children:[" · ",a.role]})]}),u.jsx("span",{role:"cell",children:u.jsx("span",{style:{fontSize:11,fontWeight:700,color:c.fg,background:c.bg,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:i(a.stage)})}),u.jsx("span",{role:"cell",style:{color:_.muted,fontSize:12},children:a.source??"—"}),u.jsx("span",{role:"cell",style:{color:_.muted,fontSize:12},children:a.appliedAt??"—"})]},a.id)}),l.length===0&&u.jsx("div",{style:{padding:"12px",color:_.muted,fontSize:13},children:"暂无候选人"})]},"list-view")}}}};us.meta=ss;const C0="ArchivePool",P0="人才库归档池：transformData 把已归档候选人从主看板滤除，工具栏「人才库」浮层支持一键恢复，卡片操作区提供归档入口。",_0="0.1.0",b0=["archive-pool","transformData","renderToolbar","renderOverlay","renderCardActions"],j0=[{name:"transformData",when:"渲染前",description:"滤除 archived 候选人"},{name:"renderToolbar",when:"每次渲染，工具栏",description:"人才库入口（带归档计数）"},{name:"renderOverlay",when:"state.archivePoolOpen 时",description:"人才库浮层（恢复/查看）"},{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"归档按钮"}],E0=["updateCandidate(id, { archived })"],T0=[{name:"poolPageSize",type:"number",default:"0",description:"人才库浮层条数上限（0 = 不限制）"}],$0="withCandidatePlugins(CandidateCore, [createArchivePoolPlugin({ poolPageSize: 50 })])",cs={name:C0,description:P0,since:_0,tags:b0,events:j0,methods:E0,config:T0,example:$0},Rr=(e={})=>{const n=e.poolPageSize??0;return{name:"archive-pool",version:"0.1.0",description:cs.description,priority:50,config:{order:50},hooks:{transformData:(t,r)=>(r??[]).filter(o=>!o.archived),renderToolbar:t=>{var l;const o=(t.rawData??((l=t.props)==null?void 0:l.data)??[]).filter(a=>a.archived).length,i=!!t.state.archivePoolOpen;return u.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-expanded":i,onClick:()=>t.setState({archivePoolOpen:!i}),style:X(i),children:["人才库（",o,"）"]},"archive-pool")},renderOverlay:t=>{var a;if(!t.state.archivePoolOpen)return null;const o=(t.rawData??((a=t.props)==null?void 0:a.data)??[]).filter(s=>s.archived),i=n>0?o.slice(0,n):o,l=()=>t.setState({archivePoolOpen:!1});return u.jsx(It,{title:`人才库（${o.length}）`,onClose:l,width:420,zIndex:56,children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[i.length===0&&u.jsx("span",{style:{color:_.muted,fontSize:13},children:"人才库为空：在卡片或批量操作里归档候选人后会出现在这里。"}),i.map(s=>u.jsxs("div",{"data-candidate-id":s.id,style:{display:"flex",alignItems:"center",gap:8,border:`1px solid ${_.line}`,borderRadius:8,padding:"8px 10px",fontSize:13},children:[u.jsxs("span",{style:{color:_.text,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[u.jsx("strong",{children:s.name}),u.jsxs("span",{style:{color:_.muted},children:[" · ",s.role]})]}),u.jsx("button",{type:"button","aria-label":`恢复 ${s.name} 到看板`,onClick:()=>t.updateCandidate(s.id,{archived:!1}),style:X(!0),children:"恢复"})]},s.id))]})},"archive-pool-overlay")},renderCardActions:(t,r)=>u.jsx("button",{type:"button","aria-label":`归档 ${r.name} 到人才库`,onClick:()=>t.updateCandidate(r.id,{archived:!0}),style:N0,children:"归档"},"archive")}}},N0={border:`1px solid ${_.lineStrong}`,background:_.chipBg,color:_.chipText,borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer"};Rr.meta=cs;const O0="Export",R0="CSV 导出：工具栏按钮把当前看板数据（经筛选/排序管道后）导出为带 BOM 的 UTF-8 CSV，内置公式注入防护与阶段名翻译，列可扩展。",D0="0.1.0",L0=["export","renderToolbar"],z0=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"导出 CSV 按钮（点击触发 Blob 下载）"}],M0=[],I0="只读取 ctx.data，不调用上下文方法",A0=[{name:"filename",type:"string",default:"'candidates'",description:"导出文件名（自动带日期后缀）"},{name:"columns",type:"{header, get}[]",default:"内置 8 列",description:"额外导出列"}],B0="withCandidatePlugins(CandidateCore, [createExportPlugin({ filename: '候选人清单' })])",ds={name:O0,description:R0,since:D0,tags:L0,events:z0,methods:M0,methodsNote:I0,config:A0,example:B0},F0=[{header:"姓名",get:e=>e.name},{header:"岗位",get:e=>e.role},{header:"阶段",get:e=>e.stage},{header:"匹配分",get:e=>e.score},{header:"邮箱",get:e=>e.email},{header:"手机号",get:e=>e.phone},{header:"来源",get:e=>e.source},{header:"投递时间",get:e=>e.appliedAt}];function U0(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=e,o.click(),URL.revokeObjectURL(r)}const pi=(e={})=>{const n=e.filename??"candidates";return{name:"export",version:"0.1.0",description:ds.description,priority:60,config:{order:60},hooks:{renderToolbar:t=>{var o;const r=((o=t.props)==null?void 0:o.stages)??Qe;return u.jsx("button",{type:"button","aria-label":"导出候选人列表为 CSV",onClick:()=>{const i=t.data??[],l=[...F0,...e.columns??[]],a=c=>{var d;return((d=r.find(f=>f.key===c))==null?void 0:d.label)??c},s=[l.map(c=>Wu(c.header)).join(","),...i.map(c=>l.map(d=>Wu(d.header==="阶段"?a(c.stage):d.get(c))).join(","))];U0(`${n}-${new Date().toISOString().slice(0,10)}.csv`,s.join(`\r
`))},style:X(!1),children:"导出 CSV"},"export")}}}};pi.meta=ds;const W0="Stats",H0="漏斗统计：页脚渲染各阶段人数占比条（tone 着色，aria 可读），列头显示计数徽章（可关）。纯统计，不改数据。",V0="0.1.0",K0=["stats","renderFooter","renderColumnHeader"],G0=[{name:"renderFooter",when:"每次渲染，页脚",description:"漏斗条形统计"},{name:"renderColumnHeader",when:"每次渲染，每列头部",description:"列内人数徽章"}],Q0=[],Y0="只读取 ctx.data 与 props.stages，不调用上下文方法",X0=[{name:"columnCount",type:"boolean",default:"true",description:"是否在列头显示计数徽章"}],Z0="withCandidatePlugins(CandidateCore, [createStatsPlugin({ columnCount: false })])",fs={name:W0,description:H0,since:V0,tags:K0,events:G0,methods:Q0,methodsNote:Y0,config:X0,example:Z0},gi=(e={})=>{const n=e.columnCount??!0;return{name:"stats",version:"0.1.0",description:fs.description,priority:10,config:{order:10},hooks:{renderColumnHeader:n?(t,r,o)=>u.jsx("span",{"aria-label":`${r.label} ${o} 人`,style:{fontSize:11,fontWeight:700,color:(kn[r.tone??"neutral"]??kn.neutral).fg,background:_.bg,border:`1px solid ${_.line}`,borderRadius:999,padding:"0 6px",lineHeight:"16px"},children:o},"col-count"):void 0,renderFooter:t=>{var l;const r=((l=t.props)==null?void 0:l.stages)??Qe,o=t.data??[],i=o.length;return i===0?null:u.jsxs("span",{role:"img","aria-label":`漏斗统计：共 ${i} 人，`+r.map(a=>`${a.label} ${o.filter(s=>s.stage===a.key).length} 人`).join("，"),style:{display:"inline-flex",alignItems:"center",gap:4,flexWrap:"wrap"},children:[u.jsx("span",{style:{fontSize:12,color:_.muted},children:"漏斗"}),r.map(a=>{const s=o.filter(d=>d.stage===a.key).length,c=kn[a.tone??"neutral"]??kn.neutral;return u.jsxs("span",{title:`${a.label}: ${s} 人`,style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700,color:c.fg,background:c.bg,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:[a.label,u.jsx("span",{style:{display:"inline-block",width:Math.max(s*4,2),height:8,borderRadius:4,background:c.fg},"aria-hidden":"true"}),s]},a.key)})]},"stats-funnel")}}}};gi.meta=fs;const J0="ActivityLog",q0="操作日志：汇总所有候选人的 history 动作（流转/备注等，写操作链路自动记录），按时间倒序在浮层展示，页脚提供入口（带总数）。",ex="0.1.0",nx=["activity-log","renderFooter","renderOverlay"],tx=[{name:"renderFooter",when:"每次渲染，页脚",description:"日志入口按钮（带总数）"},{name:"renderOverlay",when:"state.activityLogOpen 时",description:"日志时间线浮层"}],rx=[],ox="只读取 ctx.data 中各候选人的 history，不调用上下文方法",ix=[{name:"maxEntries",type:"number",default:"100",description:"浮层最多展示条数"}],lx="withCandidatePlugins(CandidateCore, [createActivityLogPlugin({ maxEntries: 50 })])",ps={name:J0,description:q0,since:ex,tags:nx,events:tx,methods:rx,methodsNote:ox,config:ix,example:lx},gs=(e={})=>{const n=e.maxEntries??100;return{name:"activity-log",version:"0.1.0",description:ps.description,priority:20,config:{order:20},hooks:{renderFooter:t=>{const r=Qu(t.data);return u.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-expanded":!!t.state.activityLogOpen,onClick:()=>t.setState({activityLogOpen:!t.state.activityLogOpen}),style:X(!!t.state.activityLogOpen),children:["操作日志（",r.length,"）"]},"activity-log")},renderOverlay:t=>{if(!t.state.activityLogOpen)return null;const r=Qu(t.data).slice(0,n),o=()=>t.setState({activityLogOpen:!1});return u.jsx(It,{title:"操作日志",onClose:o,width:400,zIndex:56,children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.length===0&&u.jsx("span",{style:{color:_.muted,fontSize:13},children:"暂无日志：流转、备注等操作会自动记录到候选人 history。"}),r.map((i,l)=>u.jsxs("div",{style:{display:"flex",gap:8,fontSize:13,alignItems:"baseline"},children:[u.jsx("span",{style:{color:_.faint,fontSize:12,flexShrink:0},children:i.at.slice(5,16).replace("T"," ")}),u.jsxs("span",{style:{color:_.text},children:[u.jsx("strong",{children:i.candidateName})," · ",i.action,i.detail?` → ${i.detail}`:""]})]},`${i.at}-${l}`))]})},"activity-log-overlay")}}}};function Qu(e){const n=[];for(const t of e??[])for(const r of t.history??[])n.push({...r,candidateName:t.name});return n.sort((t,r)=>t.at<r.at?1:-1)}gs.meta=ps;const ax="RecommendSort",sx="智能推荐排序：transformData 对候选人列表按匹配分（默认，同分按投递时间新在前）或投递时间排序，仅重排不增删。",ux="0.1.0",cx=["recommend-sort","transformData"],dx=[{name:"transformData",when:"渲染前，对列表排序",description:"score / fresh 两种排序模式，可升降序"}],fx=[],px="只读取 candidate.score / appliedAt，不调用上下文方法",gx=[{name:"by",type:"'score' | 'fresh'",default:"'score'",description:"排序依据"},{name:"desc",type:"boolean",default:"true",description:"是否降序"}],mx="withCandidatePlugins(CandidateCore, [createRecommendSortPlugin({ by: 'fresh' })])",ms={name:ax,description:sx,since:ux,tags:cx,events:dx,methods:fx,methodsNote:px,config:gx,example:mx};function eo(e){if(!e)return 0;const n=Date.parse(e);return Number.isNaN(n)?0:n}const Dr=(e={})=>{const n=e.by??"score",t=e.desc??!0;return{name:"recommend-sort",version:"0.1.0",description:ms.description,priority:30,config:{order:30},hooks:{transformData:(r,o)=>{const i=[...o??[]],l=t?-1:1;return i.sort((a,s)=>{if(n==="score"){const c=a.score??-1,d=s.score??-1;return c!==d?(c-d)*l:(eo(a.appliedAt)-eo(s.appliedAt))*l}return(eo(a.appliedAt)-eo(s.appliedAt))*l}),i}}}};Dr.meta=ms;const hx="ContactMask",yx="联系方式脱敏：transformData 把邮箱/手机号替换为掩码（138****5678 / a***c@example.com），指定阶段可豁免（招聘后期需完整联系方式）。数据管道末位执行，不影响排序。",vx="0.1.0",xx=["contact-mask","transformData"],Sx=[{name:"transformData",when:"渲染前，对联系方式脱敏",description:"email / phone 掩码化，visibleStages 豁免"}],wx=[],kx="只读取 candidate.email / phone / stage，不调用上下文方法",Cx=[{name:"maskEmail",type:"boolean",default:"true",description:"是否脱敏邮箱"},{name:"maskPhone",type:"boolean",default:"true",description:"是否脱敏手机号"},{name:"visibleStages",type:"string[]",default:"[]",description:"免脱敏阶段 key 列表"}],Px="withCandidatePlugins(CandidateCore, [createContactMaskPlugin({ visibleStages: ['offer'] })])",hs={name:hx,description:yx,since:vx,tags:xx,events:Sx,methods:wx,methodsNote:kx,config:Cx,example:Px},mi=(e={})=>{const n=e.maskEmail??!0,t=e.maskPhone??!0,r=e.visibleStages??[];return{name:"contact-mask",version:"0.1.0",description:hs.description,priority:10,config:{order:10},hooks:{transformData:(o,i)=>(i??[]).map(a=>{if(r.includes(a.stage))return a;const s={...a};return n&&(s.email=ny(a.email)),t&&(s.phone=ey(a.phone)),s})}}};mi.meta=hs;const Vi=(e,n="")=>e===void 0?n:String(e),_x={ScorePlugin:e=>Or({goodThreshold:Number(e.goodThreshold??80),warnThreshold:Number(e.warnThreshold??60)}),DupCheckPlugin:()=>Xa({fields:["name","email","phone"]}),TagPlugin:e=>li({suggestTags:["重点","备选","急招","内推"],maxTags:Number(e.maxTags??8)}),OfferPlugin:()=>qa(),StarPlugin:e=>ai({pinTop:e.pinTop!==!1}),StageFlowPlugin:e=>Mt({step:Number(e.step??1),allowBackward:e.allowBackward!==!1}),NotePlugin:e=>si({authorName:Vi(e.author,"演示 HR")}),InterviewSlotPlugin:()=>rs({slots:["周二 14:00","周三 10:00","周四 16:00"],interviewers:["王工","李总监"],modes:["onsite","video"]}),RejectTplPlugin:()=>ui({targetStage:"rejected"}),FilterPlugin:()=>ci(),SearchPlugin:()=>di(),BatchOpPlugin:()=>fi(),ViewSwitchPlugin:e=>us({pageSize:Number(e.pageSize??0)}),ArchivePoolPlugin:()=>Rr(),ExportPlugin:e=>pi({filename:Vi(e.filename,"vane-candidates")}),StatsPlugin:e=>gi({columnCount:e.columnCount!==!1}),ActivityLogPlugin:e=>gs({maxEntries:Number(e.maxEntries??20)}),RecommendSortPlugin:e=>Dr({by:Vi(e.by,"score")==="fresh"?"fresh":"score",desc:e.desc!==!1}),ContactMaskPlugin:e=>mi({maskEmail:e.maskEmail!==!1,maskPhone:e.maskPhone!==!1})};function pe(e){const n=_x[e];if(!n)throw new Error(`未注册的示例插件：${e}`);return function({cfg:r}){const o=y.useMemo(()=>ot(An,[n(r)]),[JSON.stringify(r)]);return u.jsx(o,{data:Fn,stages:Bn,containerStyle:{maxWidth:1120}})}}const bx={slug:"score",title:"匹配分徽章",group:"badge",plugin:"ScorePlugin",intro:"候选人卡片右上角的 0-100 匹配分胶囊，按阈值着色（优秀绿 / 待定橙 / 偏低红）。",why:"刷简历时第一眼先看匹配度，分数颜色把「优先看谁」编码进视觉层。",plugs:[{fn:"createScorePlugin",cfg:"{ goodThreshold: {{goodThreshold}}, warnThreshold: 60 }",why:"纯展示不改数据：只读 candidate.score，按阈值着色。"}],props:[],controls:[{key:"goodThreshold",label:"优秀阈值",kind:"number",init:80,min:50,max:95,step:5}],note:"score 缺省的候选人不渲染徽章；阈值只影响颜色分界，不改排序。"},jx=pe("ScorePlugin"),Ex=Object.freeze(Object.defineProperty({__proto__:null,default:jx,meta:bx},Symbol.toStringTag,{value:"Module"})),Tx={slug:"dup-check",title:"重复候选人检测",group:"badge",plugin:"DupCheckPlugin",intro:"扫描同名 / 同邮箱 / 同手机号的投递，命中者在卡片徽章区挂「疑似重复」警示。",why:"候选人重复投递很常见（内推 + 海投同时进行），合并档案前先标记出来。",plugs:[{fn:"createDupCheckPlugin",cfg:'{ fields: ["name", "email", "phone"] }',why:"用 signature map 两两比对，任何字段命中即双方都挂警示。"}],props:[],note:"样例里 c-001 与 c-010 同名同邮箱同手机号 —— 两张卡都会出现「疑似重复」。"},$x=pe("DupCheckPlugin"),Nx=Object.freeze(Object.defineProperty({__proto__:null,default:$x,meta:Tx},Symbol.toStringTag,{value:"Module"})),Ox={slug:"tags",title:"候选人标签",group:"badge",plugin:"TagPlugin",intro:"标签 chips 展示 + 管理浮层：点卡片上的「标签」按钮即可添加 / 删除，写回 candidate.tags。",why:"「重点 / 备选 / 急招」这类人工标记是筛选插件的数据源，先给卡片打上标签。",plugs:[{fn:"createTagPlugin",cfg:'{ suggestTags: ["重点", "备选", "急招", "内推"], maxTags: {{maxTags}} }',why:"快捷标签一键添加；超过 3 个折叠成 +N，点管理浮层看全量。"}],props:[],controls:[{key:"maxTags",label:"最多标签数",kind:"number",init:8,min:3,max:12,step:1}],note:"写操作走 ctx.updateCandidate，装配层自动落内部态并追加 history。"},Rx=pe("TagPlugin"),Dx=Object.freeze(Object.defineProperty({__proto__:null,default:Rx,meta:Ox},Symbol.toStringTag,{value:"Module"})),Lx={slug:"offer",title:"Offer 状态徽章",group:"badge",plugin:"OfferPlugin",intro:"candidate.offer 存在时显示状态胶囊：审批中灰 / 已发出蓝 / 已接受绿 / 已婉拒红。",why:"Offer 阶段的候选人需要和普通候选人区分开，薪资信息藏在悬停提示里不占版面。",plugs:[{fn:"createOfferPlugin",cfg:"{}",why:"纯展示插件：四态配色内置，labels 可整体替换文案。"}],props:[],note:"样例里 c-002（已发出）与 c-007（已接受）会挂徽章；没有 offer 字段的卡片不受影响。"},zx=pe("OfferPlugin"),Mx=Object.freeze(Object.defineProperty({__proto__:null,default:zx,meta:Lx},Symbol.toStringTag,{value:"Module"})),Ix={slug:"star",title:"星标收藏",group:"action",plugin:"StarPlugin",intro:"卡片操作区 ☆/★ 一键切换，pinTop 开启时星标候选人置顶到各自阶段列最前。",why:"挑出「今晚要再聊一轮」的人：星标是最轻量的关注动作。",plugs:[{fn:"createStarPlugin",cfg:"{ pinTop: {{pinTop}} }",why:"置顶经 transformData 实现，只影响展示顺序，不动数据。"}],props:[],controls:[{key:"pinTop",label:"星标置顶",kind:"switch",init:!0}],note:"关掉置顶后星标只改颜色不重排 —— 适合「保留顺序感」的团队习惯。"},Ax=pe("StarPlugin"),Bx=Object.freeze(Object.defineProperty({__proto__:null,default:Ax,meta:Ix},Symbol.toStringTag,{value:"Module"})),Fx={slug:"stage-flow",title:"阶段流转",group:"action",plugin:"StageFlowPlugin",intro:"卡片操作区「◀ 推进 ▶」，候选人沿阶段列流转；边界阶段自动禁用对应方向。",why:"ATS 最核心的动作：把「筛过 → 约面 → 发 offer」变成一次点击。",plugs:[{fn:"createStageFlowPlugin",cfg:"{ step: {{step}}, allowBackward: {{allowBackward}} }",why:"经 ctx.moveCandidate 流转，装配层自动追加 history 并广播 candidate:change。"}],props:[],controls:[{key:"step",label:"步长",kind:"number",init:1,min:1,max:2,step:1},{key:"allowBackward",label:"允许回退",kind:"switch",init:!0}],note:"流转只改 stage 字段；history 由装配层统一写，ActivityLog 插件读它做时间线。"},Yu=Fn.slice(0,5);function Ux({cfg:e,log:n}){const t=Number(e.step??1),r=e.allowBackward!==!1,o=y.useMemo(()=>ot(An,[Mt({step:t,allowBackward:r})]),[t,r]),i=y.useRef(new Map(Yu.map(a=>[a.id,a.stage]))),l=y.useCallback(a=>{for(const s of a){const c=i.current.get(s.id);c&&c!==s.stage&&n(`${s.name}：${c} → ${s.stage}`),i.current.set(s.id,s.stage)}},[n]);return u.jsx(o,{data:Yu,stages:Bn,containerStyle:{maxWidth:1120},onDataChange:l})}const Wx=Object.freeze(Object.defineProperty({__proto__:null,default:Ux,meta:Fx},Symbol.toStringTag,{value:"Module"})),Hx={slug:"note",title:"招聘备注",group:"action",plugin:"NotePlugin",intro:"卡片操作区「备注 (n)」按钮打开浮层：查看 / 新增 / 删除沟通记录，写回 candidate.notes。",why:"电话沟通后的结论必须留在候选人身上，否则下一个面试官要重新踩坑。",plugs:[{fn:"createNotePlugin",cfg:'{ authorName: "{{author}}" }',why:"新增备注自动署名 + 记时间；maxNotes 控制每人最多保留条数。"}],props:[],controls:[{key:"author",label:"备注署名",kind:"select",init:"演示 HR",options:[{label:"演示 HR",value:"演示 HR"},{label:"张HR",value:"张HR"},{label:"面试官",value:"面试官"}]}],note:"样例里陈知远已有一条备注；所有插件写入的备注 author 相同即可删（演示语义）。"},Vx=pe("NotePlugin"),Kx=Object.freeze(Object.defineProperty({__proto__:null,default:Vx,meta:Hx},Symbol.toStringTag,{value:"Module"})),Gx={slug:"interview-slot",title:"面试安排",group:"action",plugin:"InterviewSlotPlugin",intro:"「安排面试」入口打开浮层：从时间槽 / 面试官 / 形式中点选保存到 candidate.interview。",why:"约面是高频且琐碎的动作：可选项收敛成按钮，点两下完成，不用手填表单。",plugs:[{fn:"createInterviewSlotPlugin",cfg:'{ slots: ["周二 14:00", "周三 10:00", "周四 16:00"], interviewers: ["王工", "李总监"], modes: ["onsite", "video"] }',why:"已安排的卡片正文出现 📅 面试信息条；再次点按钮是「改期」。"}],props:[],note:"保存经 ctx.updateCandidate；「取消面试安排」把 interview 字段清回 undefined。"},Qx=pe("InterviewSlotPlugin"),Yx=Object.freeze(Object.defineProperty({__proto__:null,default:Qx,meta:Gx},Symbol.toStringTag,{value:"Module"})),Xx={slug:"reject-tpl",title:"婉拒模板",group:"action",plugin:"RejectTplPlugin",intro:"「婉拒」入口打开浮层：选模板 → 预览编辑 → 确认后候选人流转到 rejected。",why:"婉拒信一天要发几十封：模板 + 一处编辑框比邮件客户端快得多。",plugs:[{fn:"createRejectTplPlugin",cfg:'{ targetStage: "rejected" }',why:"确认婉拒直接把 stage 写到目标阶段（自动留 history），不依赖相邻阶段。"}],props:[],note:"templates 可整体替换内置模板；文案里支持 {{gap}} 这类占位（模板自身的约定）。"},Zx=pe("RejectTplPlugin"),Jx=Object.freeze(Object.defineProperty({__proto__:null,default:Zx,meta:Xx},Symbol.toStringTag,{value:"Module"})),qx={slug:"filter",title:"阶段 / 标签筛选",group:"toolbar",plugin:"FilterPlugin",intro:"工具栏两个下拉：按阶段、按标签过滤看板；有筛选时出现「清除筛选」。",why:"候选人一多，先按阶段或标签缩小范围再逐张看，是每天的第一次点击。",plugs:[{fn:"createFilterPlugin",cfg:"{}",why:"筛选状态写 ctx.state，transformData 按状态过滤 —— 只过滤展示，不删数据。"}],props:[],note:"标签选项默认从当前数据收集，也可用 tagOptions 配置固定集合。"},e1=pe("FilterPlugin"),n1=Object.freeze(Object.defineProperty({__proto__:null,default:e1,meta:qx},Symbol.toStringTag,{value:"Module"})),t1={slug:"search",title:"关键词搜索",group:"toolbar",plugin:"SearchPlugin",intro:"工具栏搜索框：姓名 / 岗位 / 摘要 / 标签 / 来源任一字段命中即保留。",why:"「上次那个做过可视化的叫什么来着」—— 搜索比翻列快。",plugs:[{fn:"createSearchPlugin",cfg:"{}",why:"非受控输入 + onChange 写 ctx.state.searchKeyword，transformData 立即过滤。"}],props:[],note:"fields 可收窄参与搜索的字段（比如只搜姓名，避免摘要噪音）。"},r1=pe("SearchPlugin"),o1=Object.freeze(Object.defineProperty({__proto__:null,default:r1,meta:t1},Symbol.toStringTag,{value:"Module"})),i1={slug:"batch-op",title:"批量操作",group:"toolbar",plugin:"BatchOpPlugin",intro:"工具栏「批量」开关进入选择模式：卡片出现复选框，支持全选 / 清空 / 批量流转 / 批量归档。",why:"一个批次 30 份简历都过了初筛，逐张点推进会把人点废。",plugs:[{fn:"createBatchOpPlugin",cfg:"{}",why:"选择集放 ctx.state.batchSelected；批量流转按阶段序号差值调 ctx.moveCandidate。"}],props:[],note:"批量归档只写 archived 标记 —— 看板上消失需要配合 ArchivePool 插件（见场景页）。"},l1=pe("BatchOpPlugin"),a1=Object.freeze(Object.defineProperty({__proto__:null,default:l1,meta:i1},Symbol.toStringTag,{value:"Module"})),s1={slug:"view-switch",title:"看板 / 列表切换",group:"toolbar",plugin:"ViewSwitchPlugin",intro:"工具栏互斥按钮切换视图：列表模式由 renderCards 内容覆盖槽整体接管渲染。",why:"看板适合「看分布」，列表适合「快速过一遍」—— 同一份数据两种密度。",plugs:[{fn:"createViewSwitchPlugin",cfg:"{ pageSize: {{pageSize}} }",why:"kanban 模式返回 null 回落核心默认看板；list 模式渲染紧凑表格，pageSize 可截断。"}],props:[],controls:[{key:"pageSize",label:"每页条数",kind:"number",init:0,min:0,max:12,step:1,hint:"0 = 不分页"}],note:"内容覆盖槽是「单值槽」：多个插件都实现 renderCards 时最高 priority 胜出。"},u1=pe("ViewSwitchPlugin"),c1=Object.freeze(Object.defineProperty({__proto__:null,default:u1,meta:s1},Symbol.toStringTag,{value:"Module"})),d1={slug:"archive-pool",title:"人才库归档池",group:"toolbar",plugin:"ArchivePoolPlugin",intro:"归档的候选人从主看板消失，进「人才库」浮层；可一键恢复回看板。",why:"暂无匹配岗位的好候选人不能丢 —— 归档是「冷藏」不是「删除」。",plugs:[{fn:"createArchivePoolPlugin",cfg:"{}",why:"transformData 把 archived 候选人滤出主看板；工具栏入口带实时计数。"}],props:[],note:"本页是受控模式：onDataChange 把新列表回写宿主，人才库计数才能实时反映刚归档的人。"};function f1({log:e}){const[n,t]=y.useState(Fn),r=y.useMemo(()=>ot(An,[Rr()]),[]),o=y.useCallback(i=>{t(i);const l=i.filter(s=>!s.archived).length,a=i.filter(s=>s.archived).length;e(`看板 ${l} 人 · 人才库 ${a} 人`)},[e]);return u.jsx(r,{data:n,stages:Bn,containerStyle:{maxWidth:1120},onDataChange:o})}const p1=Object.freeze(Object.defineProperty({__proto__:null,default:f1,meta:d1},Symbol.toStringTag,{value:"Module"})),g1={slug:"export",title:"CSV 导出",group:"toolbar",plugin:"ExportPlugin",intro:"工具栏「导出 CSV」：把当前看板数据（经筛选 / 排序管道后）按列导出，带 BOM。",why:"周报要附件、老板要表格：导出的是管道末态，所见即所得。",plugs:[{fn:"createExportPlugin",cfg:'{ filename: "{{filename}}" }',why:"内置 8 列（姓名 / 岗位 / 阶段 / 匹配分 / 邮箱 / 手机号 / 来源 / 投递时间），columns 可追加。"}],props:[],controls:[{key:"filename",label:"文件名",kind:"select",init:"vane-candidates",options:[{label:"vane-candidates",value:"vane-candidates"},{label:"interview-week",value:"interview-week"}]}],note:"csvCell 做了公式注入防护（= + - @ 开头会被前置单引号）；日期后缀自动拼接。"},m1=pe("ExportPlugin"),h1=Object.freeze(Object.defineProperty({__proto__:null,default:m1,meta:g1},Symbol.toStringTag,{value:"Module"})),y1={slug:"stats",title:"漏斗统计",group:"pipeline",plugin:"StatsPlugin",intro:"页脚各阶段人数占比条形图 + 列头计数徽章，转化漏斗一眼可读。",why:"每周复盘「卡在哪个阶段」：漏斗形态比数字表直觉得多。",plugs:[{fn:"createStatsPlugin",cfg:"{ columnCount: {{columnCount}} }",why:"renderFooter 画漏斗（纯只读）；renderColumnHeader 在每列头部挂人数徽章。"}],props:[],controls:[{key:"columnCount",label:"列头计数",kind:"switch",init:!0}],note:"统计基于 ctx.data（管道末态）—— 配合筛选插件时，漏斗反映的是筛选后的世界。"},v1=pe("StatsPlugin"),x1=Object.freeze(Object.defineProperty({__proto__:null,default:v1,meta:y1},Symbol.toStringTag,{value:"Module"})),S1={slug:"activity-log",title:"操作日志",group:"pipeline",plugin:"ActivityLogPlugin",intro:"汇总所有候选人的 history（流转 / 备注等），按时间倒序在浮层展示，页脚提供入口。",why:"「这简历上周谁推进的？」—— 审计与交接时，时间线比记忆可靠。",plugs:[{fn:"createActivityLogPlugin",cfg:"{ maxEntries: {{maxEntries}} }",why:"只读插件：日志由写操作插件经 updateCandidate / moveCandidate 链路自动记录。"}],props:[],controls:[{key:"maxEntries",label:"展示条数",kind:"number",init:20,min:5,max:50,step:5}],note:"样例里 c-001 / c-008 / c-002 自带 history；先去推一张卡再打开日志，能看到新记录。"},w1=pe("ActivityLogPlugin"),k1=Object.freeze(Object.defineProperty({__proto__:null,default:w1,meta:S1},Symbol.toStringTag,{value:"Module"})),C1={slug:"recommend-sort",title:"智能推荐排序",group:"pipeline",plugin:"RecommendSortPlugin",intro:"transformData 对列表排序：score 模式按匹配分（同分按投递时间新在前），fresh 模式按投递时间。",why:"先看分高的、再看新投的 —— 排序插件把「先看谁」这个决定交给数据。",plugs:[{fn:"createRecommendSortPlugin",cfg:'{ by: "{{by}}", desc: {{desc}} }',why:"只重排顺序不改数据；归档过滤交给 ArchivePool，本插件不关心。"}],props:[],controls:[{key:"by",label:"排序依据",kind:"select",init:"score",options:[{label:"匹配分",value:"score"},{label:"投递时间",value:"fresh"}]},{key:"desc",label:"降序",kind:"switch",init:!0}],note:"切换「投递时间」后，applied 列首卡从 81 分的郑星野换成 11-02 投递的同分选手。"},P1=pe("RecommendSortPlugin"),_1=Object.freeze(Object.defineProperty({__proto__:null,default:P1,meta:C1},Symbol.toStringTag,{value:"Module"})),b1={slug:"contact-mask",title:"联系方式脱敏",group:"pipeline",plugin:"ContactMaskPlugin",intro:"把邮箱 / 手机号替换为掩码（138****5678 / a***c@example.com），指定阶段可豁免。",why:"简历池一旦外流，联系方式就是核心资产 —— 默认脱敏是合规底线。",plugs:[{fn:"createContactMaskPlugin",cfg:"{ maskEmail: {{maskEmail}}, maskPhone: {{maskPhone}} }",why:"transformData 管道末位执行（priority 10），保证排序仍用原始数据。"}],props:[],controls:[{key:"maskEmail",label:"脱敏邮箱",kind:"switch",init:!0},{key:"maskPhone",label:"脱敏手机",kind:"switch",init:!0}],note:"visibleStages 可豁免后期阶段（如 offer / hired 需要完整联系方式去约人）。"},j1=pe("ContactMaskPlugin"),E1=Object.freeze(Object.defineProperty({__proto__:null,default:j1,meta:b1},Symbol.toStringTag,{value:"Module"})),T1=`import React from "react";
import { CandidateCore, withPlugins } from "vane-candidate";
import { createScorePlugin } from "vane-candidate/custom-plugins/ScorePlugin";
import { createStageFlowPlugin } from "vane-candidate/custom-plugins/StageFlowPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_CANDIDATES, SAMPLE_STAGES } from "../data/sample";

/**
 * 00 · 最小可用
 *
 * 内核起步，只叠两个最核心的插件（匹配分 + 阶段流转）——
 * 先把「装配 → 渲染」这条链跑通，再按需往 withPlugins 数组里加插件。
 *
 * 注意 import 是「消费者视角」包名（demo/vite.config.ts 的 alias 指回 src），
 * 页面里展示的源码可以原样复制到真实项目。
 */
export const meta: DemoMeta = {
  slug: "basic",
  title: "最小可用",
  group: "basic",
  intro: "内核 + 匹配分/阶段流转两个插件跑通装配链路；加插件就是往 withPlugins 数组里加一项。",
  why: "第一次接入时的起点：两个插件就能看出「徽章槽 + 操作槽 + 数据流转」的完整回路。",
  plugs: [
    { fn: "createScorePlugin", cfg: \`{}\`, why: "卡片右上角渲染匹配分胶囊，最简单的装饰槽插件。" },
    { fn: "createStageFlowPlugin", cfg: \`{}\`, why: "卡片操作区 ◀/▶，经 ctx.moveCandidate 流转并自动留 history。" },
  ],
  props: [],
  note: "withPlugins 是 withCandidatePlugins 的别名；数据流转在装配层内部态完成，宿主可用 onDataChange 同步。",
};

const Enhanced = withPlugins(CandidateCore, [
  createScorePlugin(),
  createStageFlowPlugin(),
]);

export default function Stage(_: DemoStageProps) {
  return (
    <Enhanced
      data={SAMPLE_CANDIDATES.slice(0, 6)}
      stages={SAMPLE_STAGES}
      containerStyle={{ maxWidth: 1120 }}
    />
  );
}
`,$1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "score",
  title: "匹配分徽章",
  group: "badge",
  plugin: "ScorePlugin",
  intro: "候选人卡片右上角的 0-100 匹配分胶囊，按阈值着色（优秀绿 / 待定橙 / 偏低红）。",
  why: "刷简历时第一眼先看匹配度，分数颜色把「优先看谁」编码进视觉层。",
  plugs: [
    {
      fn: "createScorePlugin",
      cfg: \`{ goodThreshold: {{goodThreshold}}, warnThreshold: 60 }\`,
      why: "纯展示不改数据：只读 candidate.score，按阈值着色。",
    },
  ],
  props: [],
  controls: [
    { key: "goodThreshold", label: "优秀阈值", kind: "number", init: 80, min: 50, max: 95, step: 5 },
  ],
  note: "score 缺省的候选人不渲染徽章；阈值只影响颜色分界，不改排序。",
};

export default makeStage("ScorePlugin");
`,N1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "dup-check",
  title: "重复候选人检测",
  group: "badge",
  plugin: "DupCheckPlugin",
  intro: "扫描同名 / 同邮箱 / 同手机号的投递，命中者在卡片徽章区挂「疑似重复」警示。",
  why: "候选人重复投递很常见（内推 + 海投同时进行），合并档案前先标记出来。",
  plugs: [
    {
      fn: "createDupCheckPlugin",
      cfg: \`{ fields: ["name", "email", "phone"] }\`,
      why: "用 signature map 两两比对，任何字段命中即双方都挂警示。",
    },
  ],
  props: [],
  note: "样例里 c-001 与 c-010 同名同邮箱同手机号 —— 两张卡都会出现「疑似重复」。",
};

export default makeStage("DupCheckPlugin");
`,O1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "tags",
  title: "候选人标签",
  group: "badge",
  plugin: "TagPlugin",
  intro: "标签 chips 展示 + 管理浮层：点卡片上的「标签」按钮即可添加 / 删除，写回 candidate.tags。",
  why: "「重点 / 备选 / 急招」这类人工标记是筛选插件的数据源，先给卡片打上标签。",
  plugs: [
    {
      fn: "createTagPlugin",
      cfg: \`{ suggestTags: ["重点", "备选", "急招", "内推"], maxTags: {{maxTags}} }\`,
      why: "快捷标签一键添加；超过 3 个折叠成 +N，点管理浮层看全量。",
    },
  ],
  props: [],
  controls: [{ key: "maxTags", label: "最多标签数", kind: "number", init: 8, min: 3, max: 12, step: 1 }],
  note: "写操作走 ctx.updateCandidate，装配层自动落内部态并追加 history。",
};

export default makeStage("TagPlugin");
`,R1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "offer",
  title: "Offer 状态徽章",
  group: "badge",
  plugin: "OfferPlugin",
  intro: "candidate.offer 存在时显示状态胶囊：审批中灰 / 已发出蓝 / 已接受绿 / 已婉拒红。",
  why: "Offer 阶段的候选人需要和普通候选人区分开，薪资信息藏在悬停提示里不占版面。",
  plugs: [
    {
      fn: "createOfferPlugin",
      cfg: \`{}\`,
      why: "纯展示插件：四态配色内置，labels 可整体替换文案。",
    },
  ],
  props: [],
  note: "样例里 c-002（已发出）与 c-007（已接受）会挂徽章；没有 offer 字段的卡片不受影响。",
};

export default makeStage("OfferPlugin");
`,D1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "star",
  title: "星标收藏",
  group: "action",
  plugin: "StarPlugin",
  intro: "卡片操作区 ☆/★ 一键切换，pinTop 开启时星标候选人置顶到各自阶段列最前。",
  why: "挑出「今晚要再聊一轮」的人：星标是最轻量的关注动作。",
  plugs: [
    {
      fn: "createStarPlugin",
      cfg: \`{ pinTop: {{pinTop}} }\`,
      why: "置顶经 transformData 实现，只影响展示顺序，不动数据。",
    },
  ],
  props: [],
  controls: [{ key: "pinTop", label: "星标置顶", kind: "switch", init: true }],
  note: "关掉置顶后星标只改颜色不重排 —— 适合「保留顺序感」的团队习惯。",
};

export default makeStage("StarPlugin");
`,L1=`import React, { useCallback, useMemo, useRef } from "react";
import { CandidateCore, withPlugins } from "vane-candidate";
import type { Candidate } from "vane-candidate";
import { createStageFlowPlugin } from "vane-candidate/custom-plugins/StageFlowPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_CANDIDATES, SAMPLE_STAGES } from "../data/sample";

export const meta: DemoMeta = {
  slug: "stage-flow",
  title: "阶段流转",
  group: "action",
  plugin: "StageFlowPlugin",
  intro: "卡片操作区「◀ 推进 ▶」，候选人沿阶段列流转；边界阶段自动禁用对应方向。",
  why: "ATS 最核心的动作：把「筛过 → 约面 → 发 offer」变成一次点击。",
  plugs: [
    {
      fn: "createStageFlowPlugin",
      cfg: \`{ step: {{step}}, allowBackward: {{allowBackward}} }\`,
      why: "经 ctx.moveCandidate 流转，装配层自动追加 history 并广播 candidate:change。",
    },
  ],
  props: [],
  controls: [
    { key: "step", label: "步长", kind: "number", init: 1, min: 1, max: 2, step: 1 },
    { key: "allowBackward", label: "允许回退", kind: "switch", init: true },
  ],
  note: "流转只改 stage 字段；history 由装配层统一写，ActivityLog 插件读它做时间线。",
};

const INITIAL = SAMPLE_CANDIDATES.slice(0, 5);

export default function Stage({ cfg, log }: DemoStageProps) {
  const step = Number(cfg.step ?? 1);
  const allowBackward = cfg.allowBackward !== false;

  const Board = useMemo(
    () => withPlugins(CandidateCore, [createStageFlowPlugin({ step, allowBackward })]),
    [step, allowBackward]
  );

  // 记录上一轮各候选人的阶段，onDataChange 时对比出「谁从哪挪到了哪」
  const prevStageRef = useRef<Map<string, string>>(
    new Map(INITIAL.map((c) => [c.id, c.stage]))
  );
  const handleChange = useCallback(
    (list: Candidate[]) => {
      for (const c of list) {
        const prev = prevStageRef.current.get(c.id);
        if (prev && prev !== c.stage) log(\`\${c.name}：\${prev} → \${c.stage}\`);
        prevStageRef.current.set(c.id, c.stage);
      }
    },
    [log]
  );

  return (
    <Board
      data={INITIAL}
      stages={SAMPLE_STAGES}
      containerStyle={{ maxWidth: 1120 }}
      onDataChange={handleChange}
    />
  );
}
`,z1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "note",
  title: "招聘备注",
  group: "action",
  plugin: "NotePlugin",
  intro: "卡片操作区「备注 (n)」按钮打开浮层：查看 / 新增 / 删除沟通记录，写回 candidate.notes。",
  why: "电话沟通后的结论必须留在候选人身上，否则下一个面试官要重新踩坑。",
  plugs: [
    {
      fn: "createNotePlugin",
      cfg: \`{ authorName: "{{author}}" }\`,
      why: "新增备注自动署名 + 记时间；maxNotes 控制每人最多保留条数。",
    },
  ],
  props: [],
  controls: [
    {
      key: "author",
      label: "备注署名",
      kind: "select",
      init: "演示 HR",
      options: [
        { label: "演示 HR", value: "演示 HR" },
        { label: "张HR", value: "张HR" },
        { label: "面试官", value: "面试官" },
      ],
    },
  ],
  note: "样例里陈知远已有一条备注；所有插件写入的备注 author 相同即可删（演示语义）。",
};

export default makeStage("NotePlugin");
`,M1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "interview-slot",
  title: "面试安排",
  group: "action",
  plugin: "InterviewSlotPlugin",
  intro: "「安排面试」入口打开浮层：从时间槽 / 面试官 / 形式中点选保存到 candidate.interview。",
  why: "约面是高频且琐碎的动作：可选项收敛成按钮，点两下完成，不用手填表单。",
  plugs: [
    {
      fn: "createInterviewSlotPlugin",
      cfg: \`{ slots: ["周二 14:00", "周三 10:00", "周四 16:00"], interviewers: ["王工", "李总监"], modes: ["onsite", "video"] }\`,
      why: "已安排的卡片正文出现 📅 面试信息条；再次点按钮是「改期」。",
    },
  ],
  props: [],
  note: "保存经 ctx.updateCandidate；「取消面试安排」把 interview 字段清回 undefined。",
};

export default makeStage("InterviewSlotPlugin");
`,I1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "reject-tpl",
  title: "婉拒模板",
  group: "action",
  plugin: "RejectTplPlugin",
  intro: "「婉拒」入口打开浮层：选模板 → 预览编辑 → 确认后候选人流转到 rejected。",
  why: "婉拒信一天要发几十封：模板 + 一处编辑框比邮件客户端快得多。",
  plugs: [
    {
      fn: "createRejectTplPlugin",
      cfg: \`{ targetStage: "rejected" }\`,
      why: "确认婉拒直接把 stage 写到目标阶段（自动留 history），不依赖相邻阶段。",
    },
  ],
  props: [],
  note: "templates 可整体替换内置模板；文案里支持 {{gap}} 这类占位（模板自身的约定）。",
};

export default makeStage("RejectTplPlugin");
`,A1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "filter",
  title: "阶段 / 标签筛选",
  group: "toolbar",
  plugin: "FilterPlugin",
  intro: "工具栏两个下拉：按阶段、按标签过滤看板；有筛选时出现「清除筛选」。",
  why: "候选人一多，先按阶段或标签缩小范围再逐张看，是每天的第一次点击。",
  plugs: [
    {
      fn: "createFilterPlugin",
      cfg: \`{}\`,
      why: "筛选状态写 ctx.state，transformData 按状态过滤 —— 只过滤展示，不删数据。",
    },
  ],
  props: [],
  note: "标签选项默认从当前数据收集，也可用 tagOptions 配置固定集合。",
};

export default makeStage("FilterPlugin");
`,B1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "search",
  title: "关键词搜索",
  group: "toolbar",
  plugin: "SearchPlugin",
  intro: "工具栏搜索框：姓名 / 岗位 / 摘要 / 标签 / 来源任一字段命中即保留。",
  why: "「上次那个做过可视化的叫什么来着」—— 搜索比翻列快。",
  plugs: [
    {
      fn: "createSearchPlugin",
      cfg: \`{}\`,
      why: "非受控输入 + onChange 写 ctx.state.searchKeyword，transformData 立即过滤。",
    },
  ],
  props: [],
  note: "fields 可收窄参与搜索的字段（比如只搜姓名，避免摘要噪音）。",
};

export default makeStage("SearchPlugin");
`,F1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "batch-op",
  title: "批量操作",
  group: "toolbar",
  plugin: "BatchOpPlugin",
  intro: "工具栏「批量」开关进入选择模式：卡片出现复选框，支持全选 / 清空 / 批量流转 / 批量归档。",
  why: "一个批次 30 份简历都过了初筛，逐张点推进会把人点废。",
  plugs: [
    {
      fn: "createBatchOpPlugin",
      cfg: \`{}\`,
      why: "选择集放 ctx.state.batchSelected；批量流转按阶段序号差值调 ctx.moveCandidate。",
    },
  ],
  props: [],
  note: "批量归档只写 archived 标记 —— 看板上消失需要配合 ArchivePool 插件（见场景页）。",
};

export default makeStage("BatchOpPlugin");
`,U1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "view-switch",
  title: "看板 / 列表切换",
  group: "toolbar",
  plugin: "ViewSwitchPlugin",
  intro: "工具栏互斥按钮切换视图：列表模式由 renderCards 内容覆盖槽整体接管渲染。",
  why: "看板适合「看分布」，列表适合「快速过一遍」—— 同一份数据两种密度。",
  plugs: [
    {
      fn: "createViewSwitchPlugin",
      cfg: \`{ pageSize: {{pageSize}} }\`,
      why: "kanban 模式返回 null 回落核心默认看板；list 模式渲染紧凑表格，pageSize 可截断。",
    },
  ],
  props: [],
  controls: [
    { key: "pageSize", label: "每页条数", kind: "number", init: 0, min: 0, max: 12, step: 1, hint: "0 = 不分页" },
  ],
  note: "内容覆盖槽是「单值槽」：多个插件都实现 renderCards 时最高 priority 胜出。",
};

export default makeStage("ViewSwitchPlugin");
`,W1=`import React, { useCallback, useMemo, useState } from "react";
import { CandidateCore, withPlugins } from "vane-candidate";
import type { Candidate } from "vane-candidate";
import { createArchivePoolPlugin } from "vane-candidate/custom-plugins/ArchivePoolPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_CANDIDATES, SAMPLE_STAGES } from "../data/sample";

export const meta: DemoMeta = {
  slug: "archive-pool",
  title: "人才库归档池",
  group: "toolbar",
  plugin: "ArchivePoolPlugin",
  intro: "归档的候选人从主看板消失，进「人才库」浮层；可一键恢复回看板。",
  why: "暂无匹配岗位的好候选人不能丢 —— 归档是「冷藏」不是「删除」。",
  plugs: [
    {
      fn: "createArchivePoolPlugin",
      cfg: \`{}\`,
      why: "transformData 把 archived 候选人滤出主看板；工具栏入口带实时计数。",
    },
  ],
  props: [],
  note: "本页是受控模式：onDataChange 把新列表回写宿主，人才库计数才能实时反映刚归档的人。",
};

export default function Stage({ log }: DemoStageProps) {
  const [data, setData] = useState<Candidate[]>(SAMPLE_CANDIDATES);

  const Board = useMemo(() => withPlugins(CandidateCore, [createArchivePoolPlugin()]), []);

  const handleChange = useCallback(
    (next: Candidate[]) => {
      setData(next);
      const onBoard = next.filter((c) => !c.archived).length;
      const pooled = next.filter((c) => c.archived).length;
      log(\`看板 \${onBoard} 人 · 人才库 \${pooled} 人\`);
    },
    [log]
  );

  return (
    <Board
      data={data}
      stages={SAMPLE_STAGES}
      containerStyle={{ maxWidth: 1120 }}
      onDataChange={handleChange}
    />
  );
}
`,H1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "export",
  title: "CSV 导出",
  group: "toolbar",
  plugin: "ExportPlugin",
  intro: "工具栏「导出 CSV」：把当前看板数据（经筛选 / 排序管道后）按列导出，带 BOM。",
  why: "周报要附件、老板要表格：导出的是管道末态，所见即所得。",
  plugs: [
    {
      fn: "createExportPlugin",
      cfg: \`{ filename: "{{filename}}" }\`,
      why: "内置 8 列（姓名 / 岗位 / 阶段 / 匹配分 / 邮箱 / 手机号 / 来源 / 投递时间），columns 可追加。",
    },
  ],
  props: [],
  controls: [
    {
      key: "filename",
      label: "文件名",
      kind: "select",
      init: "vane-candidates",
      options: [
        { label: "vane-candidates", value: "vane-candidates" },
        { label: "interview-week", value: "interview-week" },
      ],
    },
  ],
  note: "csvCell 做了公式注入防护（= + - @ 开头会被前置单引号）；日期后缀自动拼接。",
};

export default makeStage("ExportPlugin");
`,V1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "stats",
  title: "漏斗统计",
  group: "pipeline",
  plugin: "StatsPlugin",
  intro: "页脚各阶段人数占比条形图 + 列头计数徽章，转化漏斗一眼可读。",
  why: "每周复盘「卡在哪个阶段」：漏斗形态比数字表直觉得多。",
  plugs: [
    {
      fn: "createStatsPlugin",
      cfg: \`{ columnCount: {{columnCount}} }\`,
      why: "renderFooter 画漏斗（纯只读）；renderColumnHeader 在每列头部挂人数徽章。",
    },
  ],
  props: [],
  controls: [{ key: "columnCount", label: "列头计数", kind: "switch", init: true }],
  note: "统计基于 ctx.data（管道末态）—— 配合筛选插件时，漏斗反映的是筛选后的世界。",
};

export default makeStage("StatsPlugin");
`,K1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "activity-log",
  title: "操作日志",
  group: "pipeline",
  plugin: "ActivityLogPlugin",
  intro: "汇总所有候选人的 history（流转 / 备注等），按时间倒序在浮层展示，页脚提供入口。",
  why: "「这简历上周谁推进的？」—— 审计与交接时，时间线比记忆可靠。",
  plugs: [
    {
      fn: "createActivityLogPlugin",
      cfg: \`{ maxEntries: {{maxEntries}} }\`,
      why: "只读插件：日志由写操作插件经 updateCandidate / moveCandidate 链路自动记录。",
    },
  ],
  props: [],
  controls: [{ key: "maxEntries", label: "展示条数", kind: "number", init: 20, min: 5, max: 50, step: 5 }],
  note: "样例里 c-001 / c-008 / c-002 自带 history；先去推一张卡再打开日志，能看到新记录。",
};

export default makeStage("ActivityLogPlugin");
`,G1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "recommend-sort",
  title: "智能推荐排序",
  group: "pipeline",
  plugin: "RecommendSortPlugin",
  intro: "transformData 对列表排序：score 模式按匹配分（同分按投递时间新在前），fresh 模式按投递时间。",
  why: "先看分高的、再看新投的 —— 排序插件把「先看谁」这个决定交给数据。",
  plugs: [
    {
      fn: "createRecommendSortPlugin",
      cfg: \`{ by: "{{by}}", desc: {{desc}} }\`,
      why: "只重排顺序不改数据；归档过滤交给 ArchivePool，本插件不关心。",
    },
  ],
  props: [],
  controls: [
    {
      key: "by",
      label: "排序依据",
      kind: "select",
      init: "score",
      options: [
        { label: "匹配分", value: "score" },
        { label: "投递时间", value: "fresh" },
      ],
    },
    { key: "desc", label: "降序", kind: "switch", init: true },
  ],
  note: "切换「投递时间」后，applied 列首卡从 81 分的郑星野换成 11-02 投递的同分选手。",
};

export default makeStage("RecommendSortPlugin");
`,Q1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "contact-mask",
  title: "联系方式脱敏",
  group: "pipeline",
  plugin: "ContactMaskPlugin",
  intro: "把邮箱 / 手机号替换为掩码（138****5678 / a***c@example.com），指定阶段可豁免。",
  why: "简历池一旦外流，联系方式就是核心资产 —— 默认脱敏是合规底线。",
  plugs: [
    {
      fn: "createContactMaskPlugin",
      cfg: \`{ maskEmail: {{maskEmail}}, maskPhone: {{maskPhone}} }\`,
      why: "transformData 管道末位执行（priority 10），保证排序仍用原始数据。",
    },
  ],
  props: [],
  controls: [
    { key: "maskEmail", label: "脱敏邮箱", kind: "switch", init: true },
    { key: "maskPhone", label: "脱敏手机", kind: "switch", init: true },
  ],
  note: "visibleStages 可豁免后期阶段（如 offer / hired 需要完整联系方式去约人）。",
};

export default makeStage("ContactMaskPlugin");
`,Y1=Object.assign({"./00-basic.tsx":jy,"./01-score.tsx":Ex,"./02-dup-check.tsx":Nx,"./03-tags.tsx":Dx,"./04-offer.tsx":Mx,"./05-star.tsx":Bx,"./06-stage-flow.tsx":Wx,"./07-note.tsx":Kx,"./08-interview-slot.tsx":Yx,"./09-reject-tpl.tsx":Jx,"./10-filter.tsx":n1,"./11-search.tsx":o1,"./12-batch-op.tsx":a1,"./13-view-switch.tsx":c1,"./14-archive-pool.tsx":p1,"./15-export.tsx":h1,"./16-stats.tsx":x1,"./17-activity-log.tsx":k1,"./18-recommend-sort.tsx":_1,"./19-contact-mask.tsx":E1}),X1=Object.assign({"./00-basic.tsx":T1,"./01-score.tsx":$1,"./02-dup-check.tsx":N1,"./03-tags.tsx":O1,"./04-offer.tsx":R1,"./05-star.tsx":D1,"./06-stage-flow.tsx":L1,"./07-note.tsx":z1,"./08-interview-slot.tsx":M1,"./09-reject-tpl.tsx":I1,"./10-filter.tsx":A1,"./11-search.tsx":B1,"./12-batch-op.tsx":F1,"./13-view-switch.tsx":U1,"./14-archive-pool.tsx":W1,"./15-export.tsx":H1,"./16-stats.tsx":V1,"./17-activity-log.tsx":K1,"./18-recommend-sort.tsx":G1,"./19-contact-mask.tsx":Q1}),Z1=e=>e.replace(/^\.\//,""),Hl=Object.entries(Y1).map(([e,n])=>{const t=Z1(e);return{meta:n.meta,Stage:n.default,file:t,source:X1[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),J1=Array.from(new Set(Hl.map(e=>e.meta.group))),Vl={basic:{label:"基础装配",hint:"内核 + 最小插件链"},badge:{label:"徽章与标记",hint:"卡片上的信息密度"},action:{label:"动作与浮层",hint:"卡片操作区与弹层"},toolbar:{label:"工具栏与视图",hint:"筛 / 搜 / 批量 / 视图 / 导出"},pipeline:{label:"管道与统计",hint:"transformData 与只读面板"}};function Xu(e){const n={};for(const t of e.controls??[])n[t.key]=t.init;return n}const q1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { Overlay } from "../../components/CandidatePlugin/plugins/overlay";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface ActivityLogConfig {
  /** 日志最多展示条数 */
  maxEntries?: number;
}

interface LogRow {
  at: string;
  action: string;
  detail?: string;
  candidateName: string;
}

/**
 * ActivityLog —— 操作日志。
 * 汇总所有候选人的 history（流转 / 备注等动作，由 updateCandidate /
 * moveCandidate 链路自动追加），按时间倒序在浮层展示；页脚提供入口按钮
 * （带日志总数）。日志写回由装配层与写操作插件负责，本插件只读。
 */
export const createActivityLogPlugin: CandidatePluginCreator<ActivityLogConfig> = (
  config = {}
) => {
  const maxEntries = config.maxEntries ?? 100;
  return {
    name: "activity-log",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    config: { order: 20 },
    hooks: {
      renderFooter: (ctx) => {
        const rows = collectRows(ctx.data as Candidate[] | undefined);
        return (
          <button
            key="activity-log"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={!!ctx.state.activityLogOpen}
            onClick={() => ctx.setState({ activityLogOpen: !ctx.state.activityLogOpen })}
            style={toolbarBtn(!!ctx.state.activityLogOpen)}
          >
            操作日志（{rows.length}）
          </button>
        );
      },
      renderOverlay: (ctx) => {
        if (!ctx.state.activityLogOpen) return null;
        const rows = collectRows(ctx.data as Candidate[] | undefined).slice(0, maxEntries);
        const close = () => ctx.setState({ activityLogOpen: false });
        return (
          <Overlay key="activity-log-overlay" title="操作日志" onClose={close} width={400} zIndex={56}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {rows.length === 0 && (
                <span style={{ color: tokens.muted, fontSize: 13 }}>
                  暂无日志：流转、备注等操作会自动记录到候选人 history。
                </span>
              )}
              {rows.map((r, i) => (
                <div
                  key={\`\${r.at}-\${i}\`}
                  style={{ display: "flex", gap: 8, fontSize: 13, alignItems: "baseline" }}
                >
                  <span style={{ color: tokens.faint, fontSize: 12, flexShrink: 0 }}>
                    {r.at.slice(5, 16).replace("T", " ")}
                  </span>
                  <span style={{ color: tokens.text }}>
                    <strong>{r.candidateName}</strong> · {r.action}
                    {r.detail ? \` → \${r.detail}\` : ""}
                  </span>
                </div>
              ))}
            </div>
          </Overlay>
        );
      },
    },
  };
};

function collectRows(data: Candidate[] | undefined): LogRow[] {
  const rows: LogRow[] = [];
  for (const c of data ?? []) {
    for (const h of c.history ?? []) {
      rows.push({ ...h, candidateName: c.name });
    }
  }
  return rows.sort((a, b) => (a.at < b.at ? 1 : -1));
}

createActivityLogPlugin.meta = doc as PluginDoc;
`,eS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { Overlay } from "../../components/CandidatePlugin/plugins/overlay";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface ArchivePoolConfig {
  /** 人才库浮层每页条数上限 */
  poolPageSize?: number;
}

/**
 * ArchivePool —— 人才库归档池。
 * transformData 把 archived 候选人从主看板滤除；工具栏「人才库」按钮（带计数）
 * 打开浮层，支持恢复（archived:false）与彻底流转查看。归档入口在批量操作与
 * 卡片右键场景之外，这里额外提供卡片操作区「归档」按钮。
 */
export const createArchivePoolPlugin: CandidatePluginCreator<ArchivePoolConfig> = (
  config = {}
) => {
  const poolPageSize = config.poolPageSize ?? 0;
  return {
    name: "archive-pool",
    version: "0.1.0",
    description: doc.description,
    priority: 50,
    config: { order: 50 },
    hooks: {
      transformData: (_ctx, data) => {
        return (((data as Candidate[]) ?? []).filter((c) => !c.archived)) as typeof data;
      },
      renderToolbar: (ctx) => {
        // 人才库统计必须用全量内部数据 ctx.rawData（transformData 管道之前、
        // 含 archived），不能用 ctx.data（管道后、archived 已滤除），也不能用
        // ctx.props.data（非受控模式下是宿主初始引用，归档后不更新）。
        const raw = ((ctx.rawData as Candidate[] | undefined) ??
          (ctx.props?.data as Candidate[] | undefined)) ?? [];
        const archivedCount = raw.filter((c) => c.archived).length;
        const open = !!ctx.state.archivePoolOpen;
        return (
          <button
            key="archive-pool"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => ctx.setState({ archivePoolOpen: !open })}
            style={toolbarBtn(open)}
          >
            人才库（{archivedCount}）
          </button>
        );
      },
      renderOverlay: (ctx) => {
        if (!ctx.state.archivePoolOpen) return null;
        const raw = ((ctx.rawData as Candidate[] | undefined) ??
          (ctx.props?.data as Candidate[] | undefined)) ?? [];
        const archived = raw.filter((c) => c.archived);
        const list = poolPageSize > 0 ? archived.slice(0, poolPageSize) : archived;
        const close = () => ctx.setState({ archivePoolOpen: false });
        return (
          <Overlay key="archive-pool-overlay" title={\`人才库（\${archived.length}）\`} onClose={close} width={420} zIndex={56}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {list.length === 0 && (
                <span style={{ color: tokens.muted, fontSize: 13 }}>人才库为空：在卡片或批量操作里归档候选人后会出现在这里。</span>
              )}
              {list.map((c) => (
                <div
                  key={c.id}
                  data-candidate-id={c.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    border: \`1px solid \${tokens.line}\`,
                    borderRadius: 8,
                    padding: "8px 10px",
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: tokens.text, flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    <strong>{c.name}</strong>
                    <span style={{ color: tokens.muted }}> · {c.role}</span>
                  </span>
                  <button
                    type="button"
                    aria-label={\`恢复 \${c.name} 到看板\`}
                    onClick={() => ctx.updateCandidate(c.id, { archived: false })}
                    style={toolbarBtn(true)}
                  >
                    恢复
                  </button>
                </div>
              ))}
            </div>
          </Overlay>
        );
      },
      renderCardActions: (ctx, candidate) => (
        <button
          key="archive"
          type="button"
          aria-label={\`归档 \${candidate.name} 到人才库\`}
          onClick={() => ctx.updateCandidate(candidate.id, { archived: true })}
          style={poolBtn}
        >
          归档
        </button>
      ),
    },
  };
};

const poolBtn = {
  border: \`1px solid \${tokens.lineStrong}\`,
  background: tokens.chipBg,
  color: tokens.chipText,
  borderRadius: 6,
  fontSize: 12,
  padding: "2px 8px",
  cursor: "pointer",
};

createArchivePoolPlugin.meta = doc as PluginDoc;
`,nS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
  StageConfig,
} from "../../components/CandidatePlugin/plugins/types";
import { DEFAULT_STAGES } from "../../components/CandidatePlugin/plugins/types";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface BatchOpConfig {
  /** 批量操作目标阶段（默认全部阶段） */
  targetStages?: StageConfig[];
}

/**
 * BatchOp —— 批量操作。
 * 工具栏「批量」开关进入选择模式；卡片操作区出现复选框（state.batchSelected）；
 * 工具栏随后展示全选/清空/批量流转到…/批量归档。所有写操作走
 * ctx.updateCandidate / ctx.moveCandidate，逐条落内部态。
 */
export const createBatchOpPlugin: CandidatePluginCreator<BatchOpConfig> = (
  config = {}
) => {
  return {
    name: "batch-op",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    config: { order: 30 },
    hooks: {
      renderToolbar: (ctx) => {
        const batchMode = !!ctx.state.batchMode;
        const selected = (ctx.state.batchSelected as string[] | undefined) ?? [];
        const stages =
          config.targetStages ??
          (ctx.props?.stages ?? (DEFAULT_STAGES as StageConfig[])) as StageConfig[];
        const candidates = ((ctx.data as Candidate[]) ?? []).filter((c) => !c.archived);
        return (
          <span key="batch-op" style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
            <button
              type="button"
              aria-pressed={batchMode}
              onClick={() =>
                ctx.setState({ batchMode: !batchMode, batchSelected: [] })
              }
              style={toolbarBtn(batchMode)}
            >
              批量
            </button>
            {batchMode && (
              <>
                <button
                  type="button"
                  aria-label="全选当前候选人"
                  onClick={() =>
                    ctx.setState({ batchSelected: candidates.map((c) => c.id) })
                  }
                  style={toolbarBtn(false)}
                >
                  全选
                </button>
                <button
                  type="button"
                  aria-label="清空选择"
                  onClick={() => ctx.setState({ batchSelected: [] })}
                  style={toolbarBtn(false)}
                >
                  清空
                </button>
                <select
                  aria-label="批量流转到阶段"
                  value=""
                  disabled={selected.length === 0}
                  onChange={(e) => {
                    const target = e.target.value;
                    if (!target) return;
                    // 目标阶段直给 + 单次聚合落态（不走 delta 换算，杜绝阶段表错位；
                    // 只广播一次 candidate:change / 触发一次 onDataChange）
                    ctx.moveCandidatesTo(selected, target);
                    ctx.setState({ batchSelected: [] });
                  }}
                  style={{
                    ...selectStyle,
                    ...(selected.length === 0 ? { color: tokens.faint } : {}),
                  }}
                >
                  <option value="">
                    流转到…{selected.length > 0 ? \`（已选 \${selected.length}）\` : ""}
                  </option>
                  {stages.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  disabled={selected.length === 0}
                  aria-label={\`归档已选 \${selected.length} 位候选人\`}
                  onClick={() => {
                    // 批量聚合更新：单次落态 + 单次回调，避免逐条 emit
                    ctx.updateCandidates(
                      selected.map((id) => ({ id, patch: { archived: true } }))
                    );
                    ctx.setState({ batchSelected: [] });
                  }}
                  style={{
                    ...toolbarBtn(false),
                    ...(selected.length === 0 ? { color: tokens.faint, cursor: "not-allowed" } : {}),
                  }}
                >
                  归档
                </button>
              </>
            )}
          </span>
        );
      },
      renderCardActions: (ctx, candidate) => {
        if (!ctx.state.batchMode) return null;
        const selected = ((ctx.state.batchSelected as string[] | undefined) ?? []);
        const checked = selected.includes(candidate.id);
        return (
          <label
            key="batch-check"
            style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: tokens.muted }}
          >
            <input
              type="checkbox"
              checked={checked}
              aria-label={\`选择 \${candidate.name}\`}
              onChange={() =>
                ctx.setState({
                  batchSelected: checked
                    ? selected.filter((id) => id !== candidate.id)
                    : [...selected, candidate.id],
                })
              }
            />
            选择
          </label>
        );
      },
    },
  };
};

const selectStyle = {
  border: \`1px solid \${tokens.lineStrong}\`,
  borderRadius: 6,
  fontSize: 12,
  padding: "3px 6px",
  background: "#fff",
  color: tokens.text,
} as const;

createBatchOpPlugin.meta = doc as PluginDoc;
`,tS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { maskEmail, maskPhone } from "../../components/CandidatePlugin/domain";
import doc from "./doc.json";

export interface ContactMaskConfig {
  /** 是否脱敏邮箱 */
  maskEmail?: boolean;
  /** 是否脱敏手机号 */
  maskPhone?: boolean;
  /** 免脱敏阶段（如 offer/hired 阶段可见完整联系方式） */
  visibleStages?: string[];
}

/**
 * ContactMask —— 联系方式脱敏。
 * transformData 把邮箱 / 手机号替换为掩码（138****5678 / a***c@example.com），
 * visibleStages 内的阶段豁免（招聘后期需要完整联系方式联系候选人）。
 * 数据管道末位执行（priority 低于排序/筛选），保证排序仍用原始数据。
 */
export const createContactMaskPlugin: CandidatePluginCreator<ContactMaskConfig> = (
  config = {}
) => {
  const maskEmailOn = config.maskEmail ?? true;
  const maskPhoneOn = config.maskPhone ?? true;
  const visibleStages = config.visibleStages ?? [];
  return {
    name: "contact-mask",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    config: { order: 10 },
    hooks: {
      transformData: (_ctx, data) => {
        const list = (data as Candidate[]) ?? [];
        return list.map((c) => {
          if (visibleStages.includes(c.stage)) return c;
          const next = { ...c };
          if (maskEmailOn) next.email = maskEmail(c.email);
          if (maskPhoneOn) next.phone = maskPhone(c.phone);
          return next;
        }) as typeof data;
      },
    },
  };
};

createContactMaskPlugin.meta = doc as PluginDoc;
`,rS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import doc from "./doc.json";

export interface DupCheckConfig {
  /** 参与判重的字段（候选人为空的字段跳过） */
  fields?: Array<"name" | "email" | "phone">;
}

/** 计算候选人 key：按所选字段拼接（缺失字段跳过；全空返回 [] 不判重） */
function dupKeys(c: Candidate, fields: Array<"name" | "email" | "phone">): string[] {
  const keys: string[] = [];
  for (const f of fields) {
    const v = (c[f] as string | undefined)?.trim().toLowerCase();
    if (v) keys.push(\`\${f}:\${v}\`);
  }
  return keys;
}

/**
 * key → 命中候选人 id 列表的倒排索引（按列表引用 WeakMap 缓存）。
 * 一次 O(N) 构建，逐卡 O(1) 查询，替代每卡全表扫描的 O(N²)。
 */
const dupIndexCache = new WeakMap<Candidate[], Map<string, string[]>>();

function getDupIndex(list: Candidate[], fields: Array<"name" | "email" | "phone">) {
  const cached = dupIndexCache.get(list);
  if (cached) return cached;
  const index = new Map<string, string[]>();
  for (const c of list) {
    for (const k of dupKeys(c, fields)) {
      const ids = index.get(k);
      if (ids) ids.push(c.id);
      else index.set(k, [c.id]);
    }
  }
  dupIndexCache.set(list, index);
  return index;
}

/**
 * DupCheck —— 重复候选人检测。
 * 用 signature map 扫描列表中同名 / 同邮箱 / 同手机号的候选人，
 * 命中者在卡片徽章区显示「疑似重复」警示（黄色底，防误导为错误）。
 */
export const createDupCheckPlugin: CandidatePluginCreator<DupCheckConfig> = (
  config = {}
) => {
  const fields = config.fields ?? ["name", "email", "phone"];
  return {
    name: "dup-check",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    config: { order: 20 },
    hooks: {
      renderCardBadges: (ctx, candidate) => {
        // 判重必须用管道前的原始数据 ctx.rawData：ctx.data 是 ContactMask 等
        // transform 之后的结果，不同号码掩码碰撞（138****5678）会误报重复。
        const list = ((ctx.rawData as Candidate[] | undefined) ??
          (ctx.data as Candidate[]) ??
          []);
        const myKeys = dupKeys(candidate, fields);
        if (myKeys.length === 0) return null;
        const index = getDupIndex(list, fields);
        const dupIds = new Set<string>();
        for (const k of myKeys) {
          for (const otherId of index.get(k) ?? []) {
            if (otherId !== candidate.id) dupIds.add(otherId);
          }
        }
        if (dupIds.size === 0) return null;
        return (
          <span
            key="dup-check"
            title={\`与另外 \${dupIds.size} 位候选人疑似重复\`}
            aria-label={\`疑似重复：另有 \${dupIds.size} 位\`}
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#8a4a06",
              background: "#fdf1e2",
              border: "1px solid #ecd3ae",
              borderRadius: 999,
              padding: "0 8px",
              lineHeight: "18px",
            }}
          >
            疑似重复
          </span>
        );
      },
    },
  };
};

createDupCheckPlugin.meta = doc as PluginDoc;
`,oS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
  StageConfig,
} from "../../components/CandidatePlugin/plugins/types";
import { DEFAULT_STAGES } from "../../components/CandidatePlugin/plugins/types";
import { csvCell } from "../../components/CandidatePlugin/domain";
import { toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface ExportConfig {
  /** 导出文件名（不含扩展名） */
  filename?: string;
  /** 额外列（header + 取值函数） */
  columns?: Array<{ header: string; get: (c: Candidate) => string | number | undefined }>;
}

const BUILTIN_COLUMNS: Array<{ header: string; get: (c: Candidate) => string | number | undefined }> = [
  { header: "姓名", get: (c) => c.name },
  { header: "岗位", get: (c) => c.role },
  { header: "阶段", get: (c) => c.stage },
  { header: "匹配分", get: (c) => c.score },
  { header: "邮箱", get: (c) => c.email },
  { header: "手机号", get: (c) => c.phone },
  { header: "来源", get: (c) => c.source },
  { header: "投递时间", get: (c) => c.appliedAt },
];

function download(filename: string, content: string) {
  // \\ufeff BOM：保证 Excel 打开 UTF-8 CSV 不乱码
  const blob = new Blob(["\\ufeff" + content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Export —— CSV 导出。
 * 工具栏「导出 CSV」按钮：把当前看板数据（经筛选/排序管道之后）按列导出为
 * CSV（带 BOM，公式注入防护）。列可扩展。
 */
export const createExportPlugin: CandidatePluginCreator<ExportConfig> = (
  config = {}
) => {
  const filename = config.filename ?? "candidates";
  return {
    name: "export",
    version: "0.1.0",
    description: doc.description,
    priority: 60,
    config: { order: 60 },
    hooks: {
      renderToolbar: (ctx) => {
        const stages = (ctx.props?.stages ??
          (DEFAULT_STAGES as StageConfig[])) as StageConfig[];
        return (
          <button
            key="export"
            type="button"
            aria-label="导出候选人列表为 CSV"
            onClick={() => {
              const candidates = (ctx.data as Candidate[]) ?? [];
              const columns = [...BUILTIN_COLUMNS, ...(config.columns ?? [])];
              const stageLabel = (key: string) =>
                stages.find((s) => s.key === key)?.label ?? key;
              const rows = [
                columns.map((col) => csvCell(col.header)).join(","),
                ...candidates.map((c) =>
                  columns
                    .map((col) =>
                      // 阶段列以 header 识别（身份比较对 BUILTIN_COLUMNS 的引用
                      // 顺序脆弱），导出人类可读的阶段标签而非原始 key
                      csvCell(col.header === "阶段" ? stageLabel(c.stage) : col.get(c))
                    )
                    .join(",")
                ),
              ];
              download(\`\${filename}-\${new Date().toISOString().slice(0, 10)}.csv\`, rows.join("\\r\\n"));
            }}
            style={toolbarBtn(false)}
          >
            导出 CSV
          </button>
        );
      },
    },
  };
};

createExportPlugin.meta = doc as PluginDoc;
`,iS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
  StageConfig,
} from "../../components/CandidatePlugin/plugins/types";
import { DEFAULT_STAGES } from "../../components/CandidatePlugin/plugins/types";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface FilterConfig {
  /** 可选的标签筛选项（默认从数据里收集） */
  tagOptions?: string[];
}

/**
 * Filter —— 阶段 / 标签筛选。
 * renderToolbar：阶段下拉 + 标签下拉 + 清除按钮（状态写 ctx.state.filterStage /
 * filterTag）；transformData 按 state 过滤候选人列表。
 */
export const createFilterPlugin: CandidatePluginCreator<FilterConfig> = (
  config = {}
) => {
  return {
    name: "filter",
    version: "0.1.0",
    description: doc.description,
    priority: 50,
    config: { order: 50 },
    hooks: {
      transformData: (ctx, data) => {
        const stage = ctx.state.filterStage as string | undefined;
        const tag = ctx.state.filterTag as string | undefined;
        if (!stage && !tag) return data;
        const list = (data as Candidate[]) ?? [];
        return list.filter(
          (c) =>
            (!stage || c.stage === stage) && (!tag || (c.tags ?? []).includes(tag))
        ) as typeof data;
      },
      renderToolbar: (ctx) => {
        const stages = (ctx.props?.stages ??
          (DEFAULT_STAGES as StageConfig[])) as StageConfig[];
        const stage = (ctx.state.filterStage as string | undefined) ?? "";
        const tag = (ctx.state.filterTag as string | undefined) ?? "";
        // 标签选项：优先配置；否则从全量原始数据收集（ctx.data 会随筛选收窄选项）
        const tagOptions =
          config.tagOptions ??
          Array.from(
            new Set(
              (((ctx.rawData as Candidate[] | undefined) ??
                (ctx.data as Candidate[] | undefined)) ?? []
              ).flatMap((c) => c.tags ?? [])
            )
          );
        const hasFilter = !!(stage || tag);
        return (
          <span key="filter" style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
            <select
              aria-label="按阶段筛选"
              value={stage}
              onChange={(e) => ctx.setState({ filterStage: e.target.value || undefined })}
              style={selectStyle}
            >
              <option value="">全部阶段</option>
              {stages.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
            {tagOptions.length > 0 && (
              <select
                aria-label="按标签筛选"
                value={tag}
                onChange={(e) => ctx.setState({ filterTag: e.target.value || undefined })}
                style={selectStyle}
              >
                <option value="">全部标签</option>
                {tagOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            )}
            {hasFilter && (
              <button
                type="button"
                onClick={() => ctx.setState({ filterStage: undefined, filterTag: undefined })}
                style={toolbarBtn(false)}
              >
                清除筛选
              </button>
            )}
          </span>
        );
      },
    },
  };
};

const selectStyle = {
  border: \`1px solid \${tokens.lineStrong}\`,
  borderRadius: 6,
  fontSize: 12,
  padding: "3px 6px",
  background: "#fff",
  color: tokens.text,
} as const;

createFilterPlugin.meta = doc as PluginDoc;
`,lS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { Overlay } from "../../components/CandidatePlugin/plugins/overlay";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import { FieldGroup } from "./FieldGroup";
import doc from "./doc.json";

export interface InterviewSlotConfig {
  /** 可选面试时间槽（展示文本） */
  slots?: string[];
  /** 可选面试官 */
  interviewers?: string[];
  /** 面试形式 */
  modes?: Array<"onsite" | "video" | "phone">;
}

const MODE_LABEL: Record<string, string> = {
  onsite: "现场",
  video: "视频",
  phone: "电话",
};

/**
 * InterviewSlot —— 面试安排。
 * 卡片操作区「安排面试」入口；浮层内从时间槽 / 面试官 / 形式中选择并保存到
 * candidate.interview。已安排时徽章区（经卡片正文 meta）显示面试信息。
 */
export const createInterviewSlotPlugin: CandidatePluginCreator<InterviewSlotConfig> = (
  config = {}
) => {
  const slots = config.slots ?? ["周二 14:00", "周三 10:00", "周四 16:00", "周五 15:00"];
  const interviewers = config.interviewers ?? ["王工", "李总监"];
  const modes = config.modes ?? ["onsite", "video"];
  return {
    name: "interview-slot",
    version: "0.1.0",
    description: doc.description,
    priority: 40,
    config: { order: 40 },
    hooks: {
      renderCardActions: (ctx, candidate) => {
        const editing = ctx.state.interviewEditingId === candidate.id;
        return (
          <button
            key="interview"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={editing}
            aria-label={\`安排 \${candidate.name} 的面试\`}
            onClick={() =>
              ctx.setState({
                interviewEditingId: editing ? null : candidate.id,
              })
            }
            style={slotBtn}
          >
            {candidate.interview ? "改期" : "安排面试"}
          </button>
        );
      },
      renderCardBody: (_ctx, candidate) => {
        const itv = candidate.interview;
        if (!itv) return null;
        return (
          <div
            style={{
              marginTop: 6,
              fontSize: 12,
              color: "#8a4a06",
              background: "#fdf1e2",
              borderRadius: 6,
              padding: "4px 8px",
            }}
          >
            📅 面试：{itv.date}
            {itv.mode && \` · \${MODE_LABEL[itv.mode] ?? itv.mode}\`}
            {itv.interviewer && \` · \${itv.interviewer}\`}
          </div>
        );
      },
      renderOverlay: (ctx) => {
        const id = ctx.state.interviewEditingId as string | null;
        if (!id) return null;
        const candidate = ((ctx.data as Candidate[]) ?? []).find((c) => c.id === id);
        if (!candidate) return null;
        const close = () => ctx.setState({ interviewEditingId: null });
        const save = (patch: Partial<NonNullable<Candidate["interview"]>>) => {
          const base = candidate.interview ?? { date: slots[0] };
          ctx.updateCandidate(id, {
            interview: { ...base, ...patch } as Candidate["interview"],
          });
        };
        return (
          <Overlay
            key="interview-overlay"
            title={\`安排面试 · \${candidate.name}\`}
            onClose={close}
            width={360}
            zIndex={56}
          >
            <FieldGroup label="时间槽">
              {slots.map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={candidate.interview?.date === s}
                  onClick={() => save({ date: s })}
                  style={toolbarBtn(candidate.interview?.date === s)}
                >
                  {s}
                </button>
              ))}
            </FieldGroup>
            <FieldGroup label="面试官">
              {interviewers.map((p) => (
                <button
                  key={p}
                  type="button"
                  aria-pressed={candidate.interview?.interviewer === p}
                  onClick={() => save({ interviewer: p })}
                  style={toolbarBtn(candidate.interview?.interviewer === p)}
                >
                  {p}
                </button>
              ))}
            </FieldGroup>
            <FieldGroup label="形式">
              {modes.map((m) => (
                <button
                  key={m}
                  type="button"
                  aria-pressed={candidate.interview?.mode === m}
                  onClick={() => save({ mode: m })}
                  style={toolbarBtn(candidate.interview?.mode === m)}
                >
                  {MODE_LABEL[m] ?? m}
                </button>
              ))}
            </FieldGroup>
            {candidate.interview && (
              <button
                type="button"
                onClick={() => ctx.updateCandidate(id, { interview: undefined })}
                style={{ ...toolbarBtn(false), marginTop: 12 }}
              >
                取消面试安排
              </button>
            )}
          </Overlay>
        );
      },
    },
  };
};

const slotBtn = {
  border: \`1px solid \${tokens.lineStrong}\`,
  background: tokens.chipBg,
  color: tokens.chipText,
  borderRadius: 6,
  fontSize: 12,
  padding: "2px 8px",
  cursor: "pointer",
};

createInterviewSlotPlugin.meta = doc as PluginDoc;
`,aS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { Overlay } from "../../components/CandidatePlugin/plugins/overlay";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface NoteConfig {
  /** 备注作者署名（无宿主登录态时的默认作者） */
  authorName?: string;
  /** 每位候选人最多保留备注条数 */
  maxNotes?: number;
}

/**
 * Note —— 招聘备注。
 * 卡片操作区备注按钮（带条数角标）；浮层内查看/新增/删除备注，
 * 写回 candidate.notes（ctx.updateCandidate）。删除仅限自己刚加的（演示语义：
 * 所有插件写入的备注 author 相同即可删）。
 */
export const createNotePlugin: CandidatePluginCreator<NoteConfig> = (
  config = {}
) => {
  const authorName = config.authorName ?? "我";
  const maxNotes = config.maxNotes ?? 50;
  return {
    name: "note",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    config: { order: 30 },
    hooks: {
      renderCardActions: (ctx, candidate) => {
        const count = candidate.notes?.length ?? 0;
        return (
          <button
            key="note"
            type="button"
            aria-haspopup="dialog"
            aria-label={\`\${candidate.name} 的备注（\${count} 条）\`}
            onClick={() =>
              ctx.setState({
                noteEditingId: ctx.state.noteEditingId === candidate.id ? null : candidate.id,
              })
            }
            style={noteBtn}
          >
            备注{count > 0 ? \` (\${count})\` : ""}
          </button>
        );
      },
      renderOverlay: (ctx) => {
        const id = ctx.state.noteEditingId as string | null;
        if (!id) return null;
        const candidate = ((ctx.data as Candidate[]) ?? []).find((c) => c.id === id);
        if (!candidate) return null;
        const notes = candidate.notes ?? [];
        const close = () => ctx.setState({ noteEditingId: null });
        return (
          <Overlay key="note-overlay" title={\`备注 · \${candidate.name}\`} onClose={close} width={380} zIndex={56}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem("text") as HTMLInputElement | null;
                const text = input?.value.trim();
                if (!text) return;
                ctx.updateCandidate(id, {
                  notes: [
                    ...notes,
                    { id: \`n-\${Date.now()}\`, author: authorName, at: new Date().toISOString(), text },
                  ].slice(-maxNotes),
                });
                if (input) input.value = "";
              }}
              style={{ display: "flex", gap: 6, marginBottom: 12 }}
            >
              <input
                name="text"
                aria-label="备注内容"
                placeholder="记录沟通要点…"
                style={{
                  flex: 1,
                  border: \`1px solid \${tokens.lineStrong}\`,
                  borderRadius: 6,
                  padding: "5px 8px",
                  fontSize: 13,
                  color: tokens.text,
                  background: "#fff",
                }}
              />
              <button type="submit" style={toolbarBtn(true)}>添加</button>
            </form>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {notes.length === 0 && (
                <span style={{ color: tokens.muted, fontSize: 13 }}>暂无备注</span>
              )}
              {notes
                .slice()
                .reverse()
                .map((n) => (
                  <div
                    key={n.id}
                    style={{
                      border: \`1px solid \${tokens.line}\`,
                      borderRadius: 8,
                      padding: "8px 10px",
                      fontSize: 13,
                    }}
                  >
                    <div style={{ display: "flex", gap: 8, marginBottom: 2 }}>
                      <strong style={{ color: tokens.text }}>{n.author}</strong>
                      <span style={{ color: tokens.faint, fontSize: 12 }}>
                        {n.at.slice(0, 16).replace("T", " ")}
                      </span>
                      <button
                        type="button"
                        aria-label={\`删除备注 \${n.text.slice(0, 8)}\`}
                        onClick={() =>
                          ctx.updateCandidate(id, {
                            notes: notes.filter((x) => x.id !== n.id),
                          })
                        }
                        style={{
                          marginLeft: "auto",
                          border: "none",
                          background: "transparent",
                          color: tokens.bad,
                          cursor: "pointer",
                          fontSize: 12,
                        }}
                      >
                        删除
                      </button>
                    </div>
                    <div style={{ color: tokens.text }}>{n.text}</div>
                  </div>
                ))}
            </div>
          </Overlay>
        );
      },
    },
  };
};

const noteBtn = {
  border: \`1px solid \${tokens.lineStrong}\`,
  background: tokens.chipBg,
  color: tokens.chipText,
  borderRadius: 6,
  fontSize: 12,
  padding: "2px 8px",
  cursor: "pointer",
};

createNotePlugin.meta = doc as PluginDoc;
`,sS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import doc from "./doc.json";

export interface OfferConfig {
  /** 各状态文案（缺省用内置中文） */
  labels?: Partial<Record<"draft" | "sent" | "accepted" | "declined", string>>;
}

const DEFAULT_LABELS: Record<"draft" | "sent" | "accepted" | "declined", string> = {
  draft: "Offer 审批中",
  sent: "Offer 已发出",
  accepted: "已接受 Offer",
  declined: "已婉拒 Offer",
};

const STATUS_COLOR: Record<"draft" | "sent" | "accepted" | "declined", { fg: string; bg: string }> = {
  draft: { fg: "#5d636a", bg: "#f2f3f5" },
  sent: { fg: "#1c6ea8", bg: "#e7f1fa" },
  accepted: { fg: "#1f7a3f", bg: "#e8f5ec" },
  declined: { fg: "#b42318", bg: "#fdeceb" },
};

/**
 * Offer —— Offer 状态徽章。
 * candidate.offer 存在时在卡片徽章区显示状态胶囊（审批中灰 / 已发出蓝 /
 * 已接受绿 / 已婉拒红）。纯展示，不改数据。
 */
export const createOfferPlugin: CandidatePluginCreator<OfferConfig> = (
  config = {}
) => {
  const labels = { ...DEFAULT_LABELS, ...(config.labels ?? {}) };
  return {
    name: "offer",
    version: "0.1.0",
    description: doc.description,
    priority: 40,
    config: { order: 40 },
    hooks: {
      renderCardBadges: (_ctx, candidate) => {
        const offer = candidate.offer;
        if (!offer) return null;
        const color = STATUS_COLOR[offer.status];
        return (
          <span
            key="offer"
            title={offer.salary ? \`\${labels[offer.status]} · \${offer.salary}\` : labels[offer.status]}
            aria-label={labels[offer.status]}
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: color.fg,
              background: color.bg,
              borderRadius: 999,
              padding: "0 8px",
              lineHeight: "18px",
            }}
          >
            {labels[offer.status]}
          </span>
        );
      },
    },
  };
};

createOfferPlugin.meta = doc as PluginDoc;
`,uS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import doc from "./doc.json";

export interface RecommendSortConfig {
  /** 排序依据：score 匹配分优先 / fresh 投递时间优先 */
  by?: "score" | "fresh";
  /** 是否降序（默认 true：分高 / 新投递在前） */
  desc?: boolean;
}

function parseTime(v?: string): number {
  if (!v) return 0;
  const t = Date.parse(v);
  return Number.isNaN(t) ? 0 : t;
}

/**
 * RecommendSort —— 智能推荐排序。
 * transformData 对候选人列表排序：score 模式按匹配分（分数相同按投递时间新
 * 在前）；fresh 模式按投递时间。已归档候选人交给 ArchivePool 过滤，本插件
 * 不关心。仅重排顺序，不增删数据。
 */
export const createRecommendSortPlugin: CandidatePluginCreator<RecommendSortConfig> = (
  config = {}
) => {
  const by = config.by ?? "score";
  const desc = config.desc ?? true;
  return {
    name: "recommend-sort",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    config: { order: 30 },
    hooks: {
      transformData: (_ctx, data) => {
        const list = [...((data as Candidate[]) ?? [])];
        const dir = desc ? -1 : 1;
        list.sort((a, b) => {
          if (by === "score") {
            const sa = a.score ?? -1;
            const sb = b.score ?? -1;
            if (sa !== sb) return (sa - sb) * dir;
            // 分数并列：与主排序同向（desc 时新投递在前）
            return (parseTime(a.appliedAt) - parseTime(b.appliedAt)) * dir;
          }
          return (parseTime(a.appliedAt) - parseTime(b.appliedAt)) * dir;
        });
        return list as typeof data;
      },
    },
  };
};

createRecommendSortPlugin.meta = doc as PluginDoc;
`,cS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { Overlay } from "../../components/CandidatePlugin/plugins/overlay";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface RejectTemplate {
  id: string;
  title: string;
  body: string;
}

export interface RejectTplConfig {
  /** 婉拒信模板（替换内置模板） */
  templates?: RejectTemplate[];
  /** 流转到目标阶段 key（默认 rejected） */
  targetStage?: string;
}

const BUILTIN_TEMPLATES: RejectTemplate[] = [
  {
    id: "polite",
    title: "礼貌婉拒",
    body:
      "感谢您对本职位的关注。经过综合评估，我们认为您与当前岗位的匹配度仍有差距，但您的经历给我们留下了深刻印象。我们会将您纳入人才库，如有更合适的机会将第一时间与您联系。祝求职顺利！",
  },
  {
    id: "skill-gap",
    title: "技能方向不符",
    body:
      "感谢您抽出时间参与面试。该岗位更侧重 {{gap}} 方向的经验，与您当前的技术栈存在一定差异，故本次未能推进。期待未来在更匹配的岗位合作。",
  },
];

/**
 * RejectTpl —— 婉拒模板。
 * 卡片操作区「婉拒」入口；浮层内选择模板、可预览编辑，确认后把候选人
 * 流转到 targetStage（默认 rejected，自动留 history）。
 */
export const createRejectTplPlugin: CandidatePluginCreator<RejectTplConfig> = (
  config = {}
) => {
  const templates = config.templates ?? BUILTIN_TEMPLATES;
  const targetStage = config.targetStage ?? "rejected";
  return {
    name: "reject-tpl",
    version: "0.1.0",
    description: doc.description,
    priority: 50,
    config: { order: 50 },
    hooks: {
      renderCardActions: (ctx, candidate) => {
        const editing = ctx.state.rejectEditingId === candidate.id;
        return (
          <button
            key="reject"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={editing}
            aria-label={\`婉拒 \${candidate.name}\`}
            onClick={() =>
              ctx.setState({ rejectEditingId: editing ? null : candidate.id })
            }
            style={rejectBtn}
          >
            婉拒
          </button>
        );
      },
      renderOverlay: (ctx) => {
        const id = ctx.state.rejectEditingId as string | null;
        if (!id) return null;
        const candidate = ((ctx.data as Candidate[]) ?? []).find((c) => c.id === id);
        if (!candidate) return null;
        const tplId = (ctx.state.rejectTplId as string | null) ?? templates[0].id;
        const tpl = templates.find((t) => t.id === tplId) ?? templates[0];
        const close = () => ctx.setState({ rejectEditingId: null, rejectTplId: null });
        return (
          <Overlay key="reject-overlay" title={\`婉拒 · \${candidate.name}\`} onClose={close} width={400} zIndex={57}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
              {templates.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={t.id === tpl.id}
                  onClick={() => ctx.setState({ rejectTplId: t.id })}
                  style={toolbarBtn(t.id === tpl.id)}
                >
                  {t.title}
                </button>
              ))}
            </div>
            <textarea
              key={tpl.id}
              aria-label="婉拒信内容"
              defaultValue={tpl.body}
              rows={6}
              style={{
                width: "100%",
                boxSizing: "border-box",
                border: \`1px solid \${tokens.lineStrong}\`,
                borderRadius: 6,
                padding: "8px 10px",
                fontSize: 13,
                color: tokens.text,
                background: "#fff",
                resize: "vertical",
                marginBottom: 12,
              }}
            />
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <button type="button" onClick={close} style={toolbarBtn(false)}>
                取消
              </button>
              <button
                type="button"
                onClick={() => {
                  ctx.updateCandidate(id, { stage: targetStage });
                  close();
                }}
                style={toolbarBtn(true)}
              >
                确认婉拒
              </button>
            </div>
          </Overlay>
        );
      },
    },
  };
};

const rejectBtn = {
  border: \`1px solid \${tokens.lineStrong}\`,
  background: tokens.chipBg,
  color: "#b42318",
  borderRadius: 6,
  fontSize: 12,
  padding: "2px 8px",
  cursor: "pointer",
};

createRejectTplPlugin.meta = doc as PluginDoc;
`,dS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { tokens } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface ScoreConfig {
  /** >= 该值显示为绿色（优秀） */
  goodThreshold?: number;
  /** >= 该值显示为橙色（待定），否则红色（偏低） */
  warnThreshold?: number;
}

/** 匹配分 → 语义色（实色，满足对比度） */
export function scoreTone(score: number, good: number, warn: number): string {
  return score >= good ? tokens.good : score >= warn ? tokens.warn : tokens.bad;
}

/**
 * Score —— 候选人岗位匹配分徽章。
 * renderCardBadges：按阈值着色的分数胶囊（80+ 绿 / 60+ 橙 / 其余红）。
 */
export const createScorePlugin: CandidatePluginCreator<ScoreConfig> = (
  config = {}
) => {
  const good = config.goodThreshold ?? 80;
  const warn = config.warnThreshold ?? 60;
  return {
    name: "score",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    config: { order: 10 },
    hooks: {
      renderCardBadges: (_ctx, candidate) => {
        if (typeof candidate.score !== "number") return null;
        const color = scoreTone(candidate.score, good, warn);
        return (
          <span
            key="score"
            title={\`匹配分 \${candidate.score}\`}
            aria-label={\`匹配分 \${candidate.score}\`}
            style={{
              fontSize: 11,
              fontWeight: 700,
              color,
              border: \`1px solid \${color}\`,
              borderRadius: 999,
              padding: "0 8px",
              lineHeight: "18px",
            }}
          >
            {candidate.score}分
          </span>
        );
      },
    },
  };
};

createScorePlugin.meta = doc as PluginDoc;
`,fS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { tokens } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface SearchConfig {
  /** 参与搜索的字段 */
  fields?: Array<"name" | "role" | "summary" | "tags" | "source">;
  /** 防抖毫秒（受控输入场景建议 200+） */
  debounceMs?: number;
}

function matchText(c: Candidate, kw: string, fields: Array<"name" | "role" | "summary" | "tags" | "source">): boolean {
  const lower = kw.toLowerCase();
  for (const f of fields) {
    const v = c[f];
    if (typeof v === "string" && v.toLowerCase().includes(lower)) return true;
    if (Array.isArray(v) && v.some((t) => t.toLowerCase().includes(lower))) return true;
  }
  return false;
}

/**
 * Search —— 关键词搜索。
 * renderToolbar：搜索输入框（受控，写 ctx.state.searchKeyword，输入即时响应）；
 * transformData 按 姓名/岗位/摘要/标签/来源 匹配过滤，关键词经 debounceMs 防抖
 * 后才生效（输入频繁时用上一次已生效关键词过滤，避免每 keystroke 全量重跑管线）。
 * 空关键词不过滤。
 */
export const createSearchPlugin: CandidatePluginCreator<SearchConfig> = (
  config = {}
) => {
  const fields = config.fields ?? ["name", "role", "summary", "tags", "source"];
  const debounceMs = config.debounceMs ?? 0;
  // 防抖状态：appliedKw = 当前已生效关键词（闭包内，每插件实例一份）
  let appliedKw: string | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  return {
    name: "search",
    version: "0.1.0",
    description: doc.description,
    priority: 40,
    config: { order: 40 },
    hooks: {
      transformData: (ctx, data) => {
        const kw = (ctx.state.searchKeyword as string | undefined)?.trim();
        if (!debounceMs || kw === appliedKw) {
          appliedKw = kw;
          if (timer) {
            clearTimeout(timer);
            timer = undefined;
          }
          if (!kw) return data;
          return (((data as Candidate[]) ?? []).filter((c) =>
            matchText(c, kw, fields)
          )) as typeof data;
        }
        // 关键词变化中：重置防抖计时，本帧继续用上一次已生效的关键词
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          timer = undefined;
          appliedKw = kw;
          ctx.forceUpdate();
        }, debounceMs);
        const active = appliedKw;
        if (!active) return data;
        return (((data as Candidate[]) ?? []).filter((c) =>
          matchText(c, active, fields)
        )) as typeof data;
      },
      renderToolbar: (ctx) => {
        const kw = (ctx.state.searchKeyword as string | undefined) ?? "";
        return (
          <span key="search" style={{ display: "inline-flex", alignItems: "center" }}>
            <input
              type="search"
              aria-label="搜索候选人"
              placeholder="搜索姓名 / 岗位 / 标签…"
              // 受控：外部重置 searchKeyword（如批量操作联动清空）时输入框 UI 同步
              value={kw}
              onChange={(e) =>
                ctx.setState({ searchKeyword: e.target.value || undefined })
              }
              style={{
                border: \`1px solid \${tokens.lineStrong}\`,
                borderRadius: 6,
                fontSize: 12,
                padding: "4px 8px",
                width: 180,
                color: tokens.text,
                background: "#fff",
              }}
            />
          </span>
        );
      },
    },
  };
};

createSearchPlugin.meta = doc as PluginDoc;
`,pS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  CandidatePluginCreator,
  StageConfig,
} from "../../components/CandidatePlugin/plugins/types";
import { DEFAULT_STAGES } from "../../components/CandidatePlugin/plugins/types";
import { stageIndexOf } from "../../components/CandidatePlugin/domain";
import { tokens } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface StageFlowConfig {
  /** 每次流转的步长（默认 ±1） */
  step?: number;
  /** 是否允许回退（默认允许） */
  allowBackward?: boolean;
}

/**
 * StageFlow —— 阶段流转按钮。
 * 卡片操作区「◀ 推进 ▶」，经 ctx.moveCandidate 流转（装配层落内部态并自动
 * 追加 history）；边界阶段禁用对应方向。step / allowBackward 可配。
 */
export const createStageFlowPlugin: CandidatePluginCreator<StageFlowConfig> = (
  config = {}
) => {
  const step = config.step ?? 1;
  const allowBackward = config.allowBackward ?? true;
  return {
    name: "stage-flow",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    config: { order: 20 },
    hooks: {
      renderCardActions: (ctx, candidate) => {
        const stages = (ctx.props?.stages ??
          (DEFAULT_STAGES as StageConfig[])) as StageConfig[];
        const idx = stageIndexOf(stages, candidate.stage);
        const atFirst = idx <= 0;
        const atLast = idx < 0 || idx >= stages.length - 1;
        const btnStyle = (disabled: boolean) => ({
          ...{ ...flowBtn },
          ...(disabled ? { color: tokens.faint, cursor: "not-allowed" } : {}),
        });
        return (
          <span key="stage-flow" style={{ display: "inline-flex", gap: 2 }}>
            {allowBackward && (
              <button
                type="button"
                disabled={atFirst}
                aria-label={\`将 \${candidate.name} 退回上一阶段\`}
                onClick={() => ctx.moveCandidate(candidate.id, -step)}
                style={btnStyle(atFirst)}
              >
                ◀
              </button>
            )}
            <button
              type="button"
              disabled={atLast}
              aria-label={\`将 \${candidate.name} 推进到下一阶段\`}
              onClick={() => ctx.moveCandidate(candidate.id, step)}
              style={btnStyle(atLast)}
            >
              ▶
            </button>
          </span>
        );
      },
    },
  };
};

const flowBtn = {
  border: \`1px solid \${tokens.lineStrong}\`,
  background: tokens.chipBg,
  color: tokens.chipText,
  borderRadius: 6,
  fontSize: 12,
  padding: "2px 8px",
  cursor: "pointer",
  lineHeight: "18px",
};

createStageFlowPlugin.meta = doc as PluginDoc;
`,gS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { tokens } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface StarConfig {
  /** 星标候选人是否在列表中优先展示（经 transformData 置顶） */
  pinTop?: boolean;
}

/**
 * Star —— 星标收藏。
 * 卡片操作区 ☆/★ 切换（写 candidate.starred）；pinTop 开启时星标候选人
 * 经 transformData 置顶到各自阶段列最前。
 */
export const createStarPlugin: CandidatePluginCreator<StarConfig> = (
  config = {}
) => {
  const pinTop = config.pinTop ?? true;
  return {
    name: "star",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    config: { order: 10 },
    hooks: {
      ...(pinTop
        ? {
            transformData: (_ctx, data) => {
              const list = (data as Candidate[]) ?? [];
              const starred = list.filter((c) => c.starred);
              const rest = list.filter((c) => !c.starred);
              return [...starred, ...rest] as typeof data;
            },
          }
        : {}),
      renderCardActions: (ctx, candidate) => {
        const on = !!candidate.starred;
        return (
          <button
            key="star"
            type="button"
            aria-pressed={on}
            aria-label={on ? \`取消星标 \${candidate.name}\` : \`星标 \${candidate.name}\`}
            title={on ? "取消星标" : "星标"}
            onClick={() => ctx.updateCandidate(candidate.id, { starred: !on })}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: 14,
              padding: "2px 4px",
              color: on ? "#c2410c" : tokens.muted,
              lineHeight: 1,
            }}
          >
            {on ? "★" : "☆"}
          </button>
        );
      },
    },
  };
};

createStarPlugin.meta = doc as PluginDoc;
`,mS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
  StageConfig,
} from "../../components/CandidatePlugin/plugins/types";
import { DEFAULT_STAGES } from "../../components/CandidatePlugin/plugins/types";
import { TONE_COLOR, tokens } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface StatsConfig {
  /** 是否在列头显示计数徽章（renderColumnHeader） */
  columnCount?: boolean;
}

/**
 * Stats —— 漏斗统计。
 * renderFooter：各阶段人数占比条形图（点击阶段可联动 Filter 的
 * filterStage，若无 Filter 插件则仅展示）；renderColumnHeader：列头计数徽章。
 */
export const createStatsPlugin: CandidatePluginCreator<StatsConfig> = (
  config = {}
) => {
  const columnCount = config.columnCount ?? true;
  return {
    name: "stats",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    config: { order: 10 },
    hooks: {
      renderColumnHeader: columnCount
        ? (_ctx, stage, count) => (
            <span
              key="col-count"
              aria-label={\`\${stage.label} \${count} 人\`}
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: (TONE_COLOR[stage.tone ?? "neutral"] ?? TONE_COLOR.neutral).fg,
                background: tokens.bg,
                border: \`1px solid \${tokens.line}\`,
                borderRadius: 999,
                padding: "0 6px",
                lineHeight: "16px",
              }}
            >
              {count}
            </span>
          )
        : undefined,
      renderFooter: (ctx) => {
        const stages = (ctx.props?.stages ??
          (DEFAULT_STAGES as StageConfig[])) as StageConfig[];
        const candidates = (ctx.data as Candidate[]) ?? [];
        const total = candidates.length;
        if (total === 0) return null;
        return (
          <span
            key="stats-funnel"
            role="img"
            aria-label={\`漏斗统计：共 \${total} 人，\` + stages
              .map((s) => \`\${s.label} \${candidates.filter((c) => c.stage === s.key).length} 人\`)
              .join("，")}
            style={{ display: "inline-flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}
          >
            <span style={{ fontSize: 12, color: tokens.muted }}>漏斗</span>
            {stages.map((s) => {
              const count = candidates.filter((c) => c.stage === s.key).length;
              const tone = TONE_COLOR[s.tone ?? "neutral"] ?? TONE_COLOR.neutral;
              return (
                <span
                  key={s.key}
                  title={\`\${s.label}: \${count} 人\`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 11,
                    fontWeight: 700,
                    color: tone.fg,
                    background: tone.bg,
                    borderRadius: 999,
                    padding: "0 8px",
                    lineHeight: "18px",
                  }}
                >
                  {s.label}
                  <span
                    style={{
                      display: "inline-block",
                      width: Math.max(count * 4, 2),
                      height: 8,
                      borderRadius: 4,
                      background: tone.fg,
                    }}
                    aria-hidden="true"
                  />
                  {count}
                </span>
              );
            })}
          </span>
        );
      },
    },
  };
};

createStatsPlugin.meta = doc as PluginDoc;
`,hS=`import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { Overlay } from "../../components/CandidatePlugin/plugins/overlay";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface TagConfig {
  /** 快捷标签建议（编辑面板里一键添加） */
  suggestTags?: string[];
  /** 每位候选人最多标签数 */
  maxTags?: number;
}

/**
 * Tag —— 候选人标签。
 * renderCardBadges：展示标签 chips；点击「管理」打开浮层，可添加/删除标签，
 * 写回 candidate.tags（ctx.updateCandidate）。
 */
export const createTagPlugin: CandidatePluginCreator<TagConfig> = (config = {}) => {
  const suggests = config.suggestTags ?? ["重点", "备选", "急招", "内推"];
  const maxTags = config.maxTags ?? 8;
  return {
    name: "tags",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    config: { order: 30 },
    hooks: {
      renderCardBadges: (ctx, candidate) => {
        const tags = candidate.tags ?? [];
        const editing = ctx.state.tagEditingId === candidate.id;
        return (
          <React.Fragment key="tags">
            {tags.slice(0, 3).map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 11,
                  color: tokens.chipText,
                  background: tokens.chipBg,
                  border: \`1px solid \${tokens.line}\`,
                  borderRadius: 999,
                  padding: "0 8px",
                  lineHeight: "18px",
                }}
              >
                {t}
              </span>
            ))}
            {tags.length > 3 && (
              <span
                title={tags.join("、")}
                aria-label={\`共 \${tags.length} 个标签\`}
                style={{ fontSize: 11, color: tokens.faint, lineHeight: "18px" }}
              >
                +{tags.length - 3}
              </span>
            )}
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded={editing}
              aria-label={\`\${candidate.name} 的标签管理\`}
              onClick={() =>
                ctx.setState({
                  tagEditingId: editing ? null : candidate.id,
                })
              }
              style={{
                ...toolbarBtn(false),
                fontSize: 11,
                padding: "0 6px",
                lineHeight: "16px",
              }}
            >
              标签
            </button>
          </React.Fragment>
        );
      },
      renderOverlay: (ctx) => {
        const id = ctx.state.tagEditingId as string | null;
        if (!id) return null;
        const candidate = ((ctx.data as Candidate[]) ?? []).find((c) => c.id === id);
        if (!candidate) return null;
        const tags = candidate.tags ?? [];
        const close = () => ctx.setState({ tagEditingId: null });
        const add = (t: string) => {
          const value = t.trim();
          if (!value || tags.includes(value) || tags.length >= maxTags) return;
          ctx.updateCandidate(id, { tags: [...tags, value] });
        };
        const remove = (t: string) =>
          ctx.updateCandidate(id, { tags: tags.filter((x) => x !== t) });
        return (
          <Overlay key="tags-overlay" title={\`标签管理 · \${candidate.name}\`} onClose={close} width={340} zIndex={56}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
              {tags.length === 0 && <span style={{ color: tokens.muted, fontSize: 13 }}>暂无标签</span>}
              {tags.map((t) => (
                <span
                  key={t}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 12,
                    color: tokens.chipText,
                    background: tokens.chipBg,
                    border: \`1px solid \${tokens.line}\`,
                    borderRadius: 999,
                    padding: "2px 6px 2px 10px",
                  }}
                >
                  {t}
                  <button
                    type="button"
                    aria-label={\`删除标签 \${t}\`}
                    onClick={() => remove(t)}
                    style={{ border: "none", background: "transparent", color: tokens.bad, cursor: "pointer", fontSize: 12, padding: 0, lineHeight: 1 }}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = (e.currentTarget.elements.namedItem("tag") as HTMLInputElement | null);
                if (input?.value) {
                  add(input.value);
                  input.value = "";
                }
              }}
              style={{ display: "flex", gap: 6, marginBottom: 10 }}
            >
              <input
                name="tag"
                aria-label="新标签名称"
                placeholder="输入标签后回车"
                maxLength={12}
                style={{
                  flex: 1,
                  border: \`1px solid \${tokens.lineStrong}\`,
                  borderRadius: 6,
                  padding: "5px 8px",
                  fontSize: 13,
                  color: tokens.text,
                  background: "#fff",
                }}
              />
              <button type="submit" style={toolbarBtn(true)}>添加</button>
            </form>
            <div>
              <div style={{ fontSize: 12, color: tokens.muted, marginBottom: 4 }}>快捷标签</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {suggests.map((t) => (
                  <button key={t} type="button" onClick={() => add(t)} style={toolbarBtn(tags.includes(t))}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </Overlay>
        );
      },
    },
  };
};

createTagPlugin.meta = doc as PluginDoc;
`,yS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  CandidatePluginCreator,
  StageConfig,
} from "../../components/CandidatePlugin/plugins/types";
import { DEFAULT_STAGES } from "../../components/CandidatePlugin/plugins/types";
import { TONE_COLOR, tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface ViewSwitchConfig {
  /** 列表视图每页条数上限（0 = 不分页） */
  pageSize?: number;
}

/**
 * ViewSwitch —— 看板 / 列表视图切换。
 * 工具栏两个互斥按钮写 state.view；renderCards 内容覆盖槽在 list 模式下
 * 渲染紧凑表格视图，kanban 模式返回 null 回落核心默认看板。
 */
export const createViewSwitchPlugin: CandidatePluginCreator<ViewSwitchConfig> = (
  config = {}
) => {
  const pageSize = config.pageSize ?? 0;
  return {
    name: "view-switch",
    version: "0.1.0",
    description: doc.description,
    priority: 70,
    config: { order: 70 },
    hooks: {
      renderToolbar: (ctx) => {
        const view = (ctx.state.view as string | undefined) ?? "kanban";
        return (
          <span key="view-switch" style={{ display: "inline-flex", gap: 0 }}>
            <button
              type="button"
              aria-pressed={view === "kanban"}
              onClick={() => ctx.setState({ view: "kanban" })}
              style={{ ...toolbarBtn(view === "kanban"), borderRadius: "6px 0 0 6px" }}
            >
              看板
            </button>
            <button
              type="button"
              aria-pressed={view === "list"}
              onClick={() => ctx.setState({ view: "list" })}
              style={{ ...toolbarBtn(view === "list"), borderRadius: "0 6px 6px 0", marginLeft: -1 }}
            >
              列表
            </button>
          </span>
        );
      },
      renderCards: (ctx, payload) => {
        if (((ctx.state.view as string | undefined) ?? "kanban") !== "list") return null;
        const stages = (payload.stages ??
          (DEFAULT_STAGES as StageConfig[])) as StageConfig[];
        const stageLabel = (key: string) => stages.find((s) => s.key === key)?.label ?? key;
        let candidates = payload.candidates;
        if (pageSize > 0) candidates = candidates.slice(0, pageSize);
        return (
          <div
            key="list-view"
            role="table"
            aria-label="候选人列表视图"
            style={{
              border: \`1px solid \${tokens.line}\`,
              borderRadius: "var(--vcd-radius, 8px)",
              overflow: "hidden",
            }}
          >
            <div
              role="row"
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1.4fr 1fr 1fr",
                background: tokens.chipBg,
                fontSize: 12,
                fontWeight: 700,
                color: tokens.muted,
                padding: "6px 12px",
                gap: 8,
              }}
            >
              <span role="columnheader">候选人</span>
              <span role="columnheader">阶段</span>
              <span role="columnheader">来源</span>
              <span role="columnheader">投递时间</span>
            </div>
            {candidates.map((c, i) => {
              const tone = TONE_COLOR[
                stages.find((s) => s.key === c.stage)?.tone ?? "neutral"
              ] ?? TONE_COLOR.neutral;
              return (
                <div
                  key={c.id}
                  role="row"
                  data-candidate-id={c.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1.4fr 1fr 1fr",
                    padding: "8px 12px",
                    gap: 8,
                    fontSize: 13,
                    borderTop: i === 0 ? "none" : \`1px solid \${tokens.line}\`,
                    alignItems: "center",
                  }}
                >
                  <span role="cell" style={{ color: tokens.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    <strong>{c.name}</strong>
                    <span style={{ color: tokens.muted }}> · {c.role}</span>
                  </span>
                  <span role="cell">
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: tone.fg,
                        background: tone.bg,
                        borderRadius: 999,
                        padding: "0 8px",
                        lineHeight: "18px",
                      }}
                    >
                      {stageLabel(c.stage)}
                    </span>
                  </span>
                  <span role="cell" style={{ color: tokens.muted, fontSize: 12 }}>{c.source ?? "—"}</span>
                  <span role="cell" style={{ color: tokens.muted, fontSize: 12 }}>{c.appliedAt ?? "—"}</span>
                </div>
              );
            })}
            {candidates.length === 0 && (
              <div style={{ padding: "12px", color: tokens.muted, fontSize: 13 }}>暂无候选人</div>
            )}
          </div>
        );
      },
    },
  };
};

createViewSwitchPlugin.meta = doc as PluginDoc;
`,uw={badge:"徽章与标记",action:"动作与浮层",toolbar:"工具栏与视图",pipeline:"管道与统计"},Zu=["badge","action","toolbar","pipeline"],Ju=Object.assign({"/src/custom-plugins/ActivityLogPlugin/doc.json":ps,"/src/custom-plugins/ArchivePoolPlugin/doc.json":cs,"/src/custom-plugins/BatchOpPlugin/doc.json":as,"/src/custom-plugins/ContactMaskPlugin/doc.json":hs,"/src/custom-plugins/DupCheckPlugin/doc.json":Ya,"/src/custom-plugins/ExportPlugin/doc.json":ds,"/src/custom-plugins/FilterPlugin/doc.json":is,"/src/custom-plugins/InterviewSlotPlugin/doc.json":ts,"/src/custom-plugins/NotePlugin/doc.json":ns,"/src/custom-plugins/OfferPlugin/doc.json":Ja,"/src/custom-plugins/RecommendSortPlugin/doc.json":ms,"/src/custom-plugins/RejectTplPlugin/doc.json":os,"/src/custom-plugins/ScorePlugin/doc.json":Ga,"/src/custom-plugins/SearchPlugin/doc.json":ls,"/src/custom-plugins/StageFlowPlugin/doc.json":Qa,"/src/custom-plugins/StarPlugin/doc.json":es,"/src/custom-plugins/StatsPlugin/doc.json":fs,"/src/custom-plugins/TagPlugin/doc.json":Za,"/src/custom-plugins/ViewSwitchPlugin/doc.json":ss}),qu=Object.assign({"/src/custom-plugins/ActivityLogPlugin/create.tsx":q1,"/src/custom-plugins/ArchivePoolPlugin/create.tsx":eS,"/src/custom-plugins/BatchOpPlugin/create.tsx":nS,"/src/custom-plugins/ContactMaskPlugin/create.tsx":tS,"/src/custom-plugins/DupCheckPlugin/create.tsx":rS,"/src/custom-plugins/ExportPlugin/create.tsx":oS,"/src/custom-plugins/FilterPlugin/create.tsx":iS,"/src/custom-plugins/InterviewSlotPlugin/create.tsx":lS,"/src/custom-plugins/NotePlugin/create.tsx":aS,"/src/custom-plugins/OfferPlugin/create.tsx":sS,"/src/custom-plugins/RecommendSortPlugin/create.tsx":uS,"/src/custom-plugins/RejectTplPlugin/create.tsx":cS,"/src/custom-plugins/ScorePlugin/create.tsx":dS,"/src/custom-plugins/SearchPlugin/create.tsx":fS,"/src/custom-plugins/StageFlowPlugin/create.tsx":pS,"/src/custom-plugins/StarPlugin/create.tsx":gS,"/src/custom-plugins/StatsPlugin/create.tsx":mS,"/src/custom-plugins/TagPlugin/create.tsx":hS,"/src/custom-plugins/ViewSwitchPlugin/create.tsx":yS}),Lf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function vS(e){const n=Object.keys(qu).find(o=>Lf(o)===e),t=n?qu[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function xS(e){const n=Object.keys(Ju).find(t=>Lf(t)===e);return n?Ju[n]:{name:e,description:"（缺少 doc.json）"}}const SS=[{dir:"ScorePlugin",group:"badge",make:()=>Or({goodThreshold:80})},{dir:"DupCheckPlugin",group:"badge",make:()=>Xa({})},{dir:"TagPlugin",group:"badge",make:()=>li({suggestTags:["重点","备选","急招","内推"]})},{dir:"OfferPlugin",group:"badge",make:()=>qa()},{dir:"StarPlugin",group:"action",make:()=>ai({pinTop:!0})},{dir:"StageFlowPlugin",group:"action",make:()=>Mt({step:1})},{dir:"NotePlugin",group:"action",make:()=>si({authorName:"演示 HR"})},{dir:"InterviewSlotPlugin",group:"action",make:()=>rs({slots:["周二 14:00","周三 10:00","周四 16:00"],interviewers:["王工","李总监"],modes:["onsite","video"]})},{dir:"RejectTplPlugin",group:"action",make:()=>ui({})},{dir:"FilterPlugin",group:"toolbar",make:()=>ci()},{dir:"SearchPlugin",group:"toolbar",make:()=>di()},{dir:"BatchOpPlugin",group:"toolbar",make:()=>fi()},{dir:"ViewSwitchPlugin",group:"toolbar",make:()=>us({pageSize:0})},{dir:"ArchivePoolPlugin",group:"toolbar",make:()=>Rr()},{dir:"ExportPlugin",group:"toolbar",make:()=>pi({filename:"vane-candidates"})},{dir:"StatsPlugin",group:"pipeline",make:()=>gi({columnCount:!0})},{dir:"ActivityLogPlugin",group:"pipeline",make:()=>gs({maxEntries:50})},{dir:"RecommendSortPlugin",group:"pipeline",make:()=>Dr({by:"score",desc:!0})},{dir:"ContactMaskPlugin",group:"pipeline",make:()=>mi({maskEmail:!0,maskPhone:!0})}],Kl=SS.map(e=>{const n=xS(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:vS(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>Zu.indexOf(e.group)-Zu.indexOf(n.group)||n.priority-e.priority),wS={id:"daily-review",title:"日常刷简历",group:"日常运营",ref:{label:"对标 内推日常盘点",url:"https://developer.mozilla.org/"},pain:"每天早上要过一遍新投递：先看谁分高，看完写两笔备注，顺手把能推进的推进 —— 四个动作要一气呵成。",plugs:[{fn:"createRecommendSortPlugin",cfg:'{ by: "score", desc: true }',why:"匹配分高的排在各列最前，打开看板就知道先聊谁。"},{fn:"createScorePlugin",cfg:"{}",why:"分数胶囊按阈值着色，红橙绿把优先级编码进视觉。"},{fn:"createStageFlowPlugin",cfg:"{}",why:"看完直接点 ▶ 推进到下一阶段，history 自动记录。"},{fn:"createNotePlugin",cfg:'{ authorName: "张HR" }',why:"电话沟通结论落到候选人身上，浮层两步完成。"}],props:[],note:"排序经 transformData 只影响列内顺序；推进 / 备注由装配层落内部态，宿主可用 onDataChange 持久化。"};function kS(){const e=y.useMemo(()=>ot(An,[Dr({by:"score",desc:!0}),Or(),Mt(),si({authorName:"张HR"})]),[]);return u.jsx(e,{data:Fn,stages:Bn,containerStyle:{minWidth:1180}})}const CS=Object.freeze(Object.defineProperty({__proto__:null,default:kS,meta:wS},Symbol.toStringTag,{value:"Module"})),PS={id:"screening-day",title:"HR 筛选日",group:"筛选冲刺",ref:{label:"对标 集中筛简历场景",url:"https://developer.mozilla.org/"},pain:"周末要清完 100+ 投递：先搜关键词、再按阶段过滤，过线的批量推进，不合适的套模板婉拒。",plugs:[{fn:"createSearchPlugin",cfg:"{}",why:"关键词同时匹配姓名 / 岗位 / 标签 / 来源，先缩小战场。"},{fn:"createFilterPlugin",cfg:"{}",why:"阶段 / 标签下拉精确过滤，只看「已投递」这一层。"},{fn:"createBatchOpPlugin",cfg:"{}",why:"批量模式全选后一键流转到「筛选中」，免去逐张点击。"},{fn:"createRejectTplPlugin",cfg:"{}",why:"不合适的套内置模板婉拒，确认后直接流转到 rejected。"},{fn:"createRecommendSortPlugin",cfg:'{ by: "fresh", desc: true }',why:"按投递时间降序，先处理新鲜的、过期的放后面。"}],props:[],note:"批量归档只写 archived 标记；要让看板上消失需配合 ArchivePool —— 见「人才库复盘」场景。"};function _S(){const e=y.useMemo(()=>ot(An,[Dr({by:"fresh",desc:!0}),di(),ci(),fi(),ui()]),[]);return u.jsx(e,{data:Fn,stages:Bn,containerStyle:{minWidth:1180}})}const bS=Object.freeze(Object.defineProperty({__proto__:null,default:_S,meta:PS},Symbol.toStringTag,{value:"Module"})),jS={id:"talent-pool",title:"人才库复盘",group:"季度复盘",ref:{label:"对标 人才库季度盘点",url:"https://developer.mozilla.org/"},pain:"季度末盘点人才库：把好苗子星标 + 打标签，联系方式默认脱敏，最后导出一份给老板、看一眼漏斗。",plugs:[{fn:"createArchivePoolPlugin",cfg:"{}",why:"归档的候选人收进人才库浮层，可恢复；主看板只留活跃流水线。"},{fn:"createStarPlugin",cfg:"{ pinTop: true }",why:"好苗子星标置顶，复盘时优先过目。"},{fn:"createTagPlugin",cfg:'{ suggestTags: ["重点", "备选", "人才库"] }',why:"给人才库候选人打上业务标签，下次开岗直接筛。"},{fn:"createContactMaskPlugin",cfg:"{ maskEmail: true, maskPhone: true }",why:"复盘会上投影大屏，联系方式默认脱敏。"},{fn:"createExportPlugin",cfg:'{ filename: "talent-review" }',why:"导出当前管道末态 CSV，直接贴进季度汇报。"},{fn:"createStatsPlugin",cfg:"{}",why:"页脚漏斗 + 列头计数，各阶段存量一眼可读。"}],props:[],note:"本场景是受控模式：onDataChange 回写宿主再喂回 Board，人才库计数 / 漏斗都反映最新数据。"};function ES(){const[e,n]=y.useState(Fn),t=y.useMemo(()=>ot(An,[Rr(),ai({pinTop:!0}),li({suggestTags:["重点","备选","人才库"]}),mi({maskEmail:!0,maskPhone:!0}),pi({filename:"talent-review"}),gi()]),[]),r=y.useCallback(o=>n(o),[]);return u.jsx(t,{data:e,stages:Bn,containerStyle:{minWidth:1180},onDataChange:r})}const TS=Object.freeze(Object.defineProperty({__proto__:null,default:ES,meta:jS},Symbol.toStringTag,{value:"Module"})),$S=`/**
 * 日常刷简历：分数着色 + 推荐排序先看分高的，随手备注、随手推进。
 */
import React, { useMemo } from "react";
import { CandidateCore, withPlugins } from "vane-candidate";
import { createScorePlugin } from "vane-candidate/custom-plugins/ScorePlugin";
import { createStageFlowPlugin } from "vane-candidate/custom-plugins/StageFlowPlugin";
import { createNotePlugin } from "vane-candidate/custom-plugins/NotePlugin";
import { createRecommendSortPlugin } from "vane-candidate/custom-plugins/RecommendSortPlugin";
import { SAMPLE_CANDIDATES, SAMPLE_STAGES } from "../data/sample";

export const meta = {
  id: "daily-review",
  title: "日常刷简历",
  group: "日常运营",
  ref: { label: "对标 内推日常盘点", url: "https://developer.mozilla.org/" },
  pain: "每天早上要过一遍新投递：先看谁分高，看完写两笔备注，顺手把能推进的推进 —— 四个动作要一气呵成。",
  plugs: [
    { fn: "createRecommendSortPlugin", cfg: \`{ by: "score", desc: true }\`, why: "匹配分高的排在各列最前，打开看板就知道先聊谁。" },
    { fn: "createScorePlugin", cfg: \`{}\`, why: "分数胶囊按阈值着色，红橙绿把优先级编码进视觉。" },
    { fn: "createStageFlowPlugin", cfg: \`{}\`, why: "看完直接点 ▶ 推进到下一阶段，history 自动记录。" },
    { fn: "createNotePlugin", cfg: \`{ authorName: "张HR" }\`, why: "电话沟通结论落到候选人身上，浮层两步完成。" },
  ],
  props: [],
  note: "排序经 transformData 只影响列内顺序；推进 / 备注由装配层落内部态，宿主可用 onDataChange 持久化。",
};

export default function DailyReview() {
  const Board = useMemo(
    () =>
      withPlugins(CandidateCore, [
        createRecommendSortPlugin({ by: "score", desc: true }),
        createScorePlugin(),
        createStageFlowPlugin(),
        createNotePlugin({ authorName: "张HR" }),
      ]),
    []
  );
  return <Board data={SAMPLE_CANDIDATES} stages={SAMPLE_STAGES} containerStyle={{ minWidth: 1180 }} />;
}
`,NS=`/**
 * HR 筛选日：搜索定位 → 阶段过滤 → 批量推进 → 模板婉拒，一条流水线打完。
 */
import React, { useMemo } from "react";
import { CandidateCore, withPlugins } from "vane-candidate";
import { createFilterPlugin } from "vane-candidate/custom-plugins/FilterPlugin";
import { createSearchPlugin } from "vane-candidate/custom-plugins/SearchPlugin";
import { createBatchOpPlugin } from "vane-candidate/custom-plugins/BatchOpPlugin";
import { createRejectTplPlugin } from "vane-candidate/custom-plugins/RejectTplPlugin";
import { createRecommendSortPlugin } from "vane-candidate/custom-plugins/RecommendSortPlugin";
import { SAMPLE_CANDIDATES, SAMPLE_STAGES } from "../data/sample";

export const meta = {
  id: "screening-day",
  title: "HR 筛选日",
  group: "筛选冲刺",
  ref: { label: "对标 集中筛简历场景", url: "https://developer.mozilla.org/" },
  pain: "周末要清完 100+ 投递：先搜关键词、再按阶段过滤，过线的批量推进，不合适的套模板婉拒。",
  plugs: [
    { fn: "createSearchPlugin", cfg: \`{}\`, why: "关键词同时匹配姓名 / 岗位 / 标签 / 来源，先缩小战场。" },
    { fn: "createFilterPlugin", cfg: \`{}\`, why: "阶段 / 标签下拉精确过滤，只看「已投递」这一层。" },
    { fn: "createBatchOpPlugin", cfg: \`{}\`, why: "批量模式全选后一键流转到「筛选中」，免去逐张点击。" },
    { fn: "createRejectTplPlugin", cfg: \`{}\`, why: "不合适的套内置模板婉拒，确认后直接流转到 rejected。" },
    { fn: "createRecommendSortPlugin", cfg: \`{ by: "fresh", desc: true }\`, why: "按投递时间降序，先处理新鲜的、过期的放后面。" },
  ],
  props: [],
  note: "批量归档只写 archived 标记；要让看板上消失需配合 ArchivePool —— 见「人才库复盘」场景。",
};

export default function ScreeningDay() {
  const Board = useMemo(
    () =>
      withPlugins(CandidateCore, [
        createRecommendSortPlugin({ by: "fresh", desc: true }),
        createSearchPlugin(),
        createFilterPlugin(),
        createBatchOpPlugin(),
        createRejectTplPlugin(),
      ]),
    []
  );
  return <Board data={SAMPLE_CANDIDATES} stages={SAMPLE_STAGES} containerStyle={{ minWidth: 1180 }} />;
}
`,OS=`/**
 * 人才库复盘：归档池 + 星标 + 标签整理人才库，脱敏展示，导出与漏斗收尾。
 * 受控模式：onDataChange 把新列表回写宿主，归档 / 恢复的人才库计数才实时。
 */
import React, { useCallback, useMemo, useState } from "react";
import { CandidateCore, withPlugins } from "vane-candidate";
import type { Candidate } from "vane-candidate";
import { createArchivePoolPlugin } from "vane-candidate/custom-plugins/ArchivePoolPlugin";
import { createStarPlugin } from "vane-candidate/custom-plugins/StarPlugin";
import { createTagPlugin } from "vane-candidate/custom-plugins/TagPlugin";
import { createContactMaskPlugin } from "vane-candidate/custom-plugins/ContactMaskPlugin";
import { createExportPlugin } from "vane-candidate/custom-plugins/ExportPlugin";
import { createStatsPlugin } from "vane-candidate/custom-plugins/StatsPlugin";
import { SAMPLE_CANDIDATES, SAMPLE_STAGES } from "../data/sample";

export const meta = {
  id: "talent-pool",
  title: "人才库复盘",
  group: "季度复盘",
  ref: { label: "对标 人才库季度盘点", url: "https://developer.mozilla.org/" },
  pain: "季度末盘点人才库：把好苗子星标 + 打标签，联系方式默认脱敏，最后导出一份给老板、看一眼漏斗。",
  plugs: [
    { fn: "createArchivePoolPlugin", cfg: \`{}\`, why: "归档的候选人收进人才库浮层，可恢复；主看板只留活跃流水线。" },
    { fn: "createStarPlugin", cfg: \`{ pinTop: true }\`, why: "好苗子星标置顶，复盘时优先过目。" },
    { fn: "createTagPlugin", cfg: \`{ suggestTags: ["重点", "备选", "人才库"] }\`, why: "给人才库候选人打上业务标签，下次开岗直接筛。" },
    { fn: "createContactMaskPlugin", cfg: \`{ maskEmail: true, maskPhone: true }\`, why: "复盘会上投影大屏，联系方式默认脱敏。" },
    { fn: "createExportPlugin", cfg: \`{ filename: "talent-review" }\`, why: "导出当前管道末态 CSV，直接贴进季度汇报。" },
    { fn: "createStatsPlugin", cfg: \`{}\`, why: "页脚漏斗 + 列头计数，各阶段存量一眼可读。" },
  ],
  props: [],
  note: "本场景是受控模式：onDataChange 回写宿主再喂回 Board，人才库计数 / 漏斗都反映最新数据。",
};

export default function TalentPool() {
  const [data, setData] = useState<Candidate[]>(SAMPLE_CANDIDATES);

  const Board = useMemo(
    () =>
      withPlugins(CandidateCore, [
        createArchivePoolPlugin(),
        createStarPlugin({ pinTop: true }),
        createTagPlugin({ suggestTags: ["重点", "备选", "人才库"] }),
        createContactMaskPlugin({ maskEmail: true, maskPhone: true }),
        createExportPlugin({ filename: "talent-review" }),
        createStatsPlugin(),
      ]),
    []
  );

  const handleChange = useCallback((next: Candidate[]) => setData(next), []);

  return <Board data={data} stages={SAMPLE_STAGES} containerStyle={{ minWidth: 1180 }} onDataChange={handleChange} />;
}
`,RS=Object.assign({"./01-daily-review.tsx":CS,"./02-screening-day.tsx":bS,"./03-talent-pool.tsx":TS}),DS=Object.assign({"./01-daily-review.tsx":$S,"./02-screening-day.tsx":NS,"./03-talent-pool.tsx":OS}),LS=e=>e.replace(/^\.\//,""),Ao=Object.entries(RS).map(([e,n])=>{const t=LS(e);return{meta:n.meta,Component:n.default,file:t,source:DS[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),cw=Ao.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),dw=Array.from(new Set(Ao.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort(),zS="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",MS="true|false|null|undefined|this|super",IS="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",ec=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${zS})\b`,String.raw`\b(${MS})\b`,String.raw`\b(${IS})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),nc=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function AS(e){const n=[];let t=0;ec.lastIndex=0;let r;for(;r=ec.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const o=nc.findIndex((i,l)=>r[l+1]!==void 0);n.push({text:r[0],cls:o>=0?nc[o]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function tc(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function BS({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[o,i]=y.useState("idle"),[l,a]=y.useState(!1),s=y.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=t>0&&s.length>t,d=c&&!l?s.slice(0,t).join(`
`):e,f=y.useMemo(()=>AS(d),[d]),h=y.useCallback(async()=>{var x;let v=!1;if((x=navigator.clipboard)!=null&&x.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=tc(e)}else v=tc(e);i(v?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return u.jsxs("div",{className:"code",children:[u.jsxs("div",{className:"code-head",children:[u.jsx("span",{children:n}),u.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[u.jsxs("span",{children:[s.length," 行"]}),u.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:h,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),u.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:u.jsx("code",{children:f.map((v,x)=>v.cls?u.jsx("span",{className:v.cls,children:v.text},x):u.jsx(Dn.Fragment,{children:v.text},x))})}),c?u.jsx("button",{type:"button",className:"code-more",onClick:()=>a(v=>!v),children:l?"收起":`展开余下 ${s.length-t} 行`}):null]})}function zf(e){return e.props??e.config??[]}function FS({doc:e}){var o,i,l;const n=zf(e),t=e.events??[],r=e.methods??[];return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"属性 Props"}),n.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"属性"}),u.jsx("th",{children:"类型"}),u.jsx("th",{children:"默认"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:n.map(a=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:a.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:a.type})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:a.default??"-"})}),u.jsx("td",{children:a.description??"—"})]},a.name))})]}):u.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"事件 Events"}),t.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"事件"}),u.jsx("th",{children:"触发时机"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:t.map(a=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:a.name})}),u.jsx("td",{children:a.when}),u.jsx("td",{children:a.description})]},a.name))})]}):u.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"方法 Methods"}),r.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"方法"}),u.jsx("th",{children:"签名"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:r.map(a=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:a.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:a.signature})}),u.jsx("td",{children:a.description})]},a.name))})]}):u.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),u.jsxs("div",{className:"doc-cols",children:[(o=e.features)!=null&&o.length?u.jsxs("div",{children:[u.jsx("h5",{children:"能做"}),u.jsx("ul",{children:e.features.map(a=>u.jsx("li",{children:a},a))})]}):null,(i=e.useCases)!=null&&i.length?u.jsxs("div",{children:[u.jsx("h5",{children:"适合"}),u.jsx("ul",{children:e.useCases.map(a=>u.jsx("li",{children:a},a))})]}):null,(l=e.notes)!=null&&l.length?u.jsxs("div",{children:[u.jsx("h5",{children:"注意"}),u.jsx("ul",{children:e.notes.map(a=>u.jsx("li",{children:a},a))})]}):null]})]})}function US({factory:e,priority:n,summary:t,doc:r,defaultOpen:o=!0}){var l,a;const i={props:zf(r).length,events:((l=r.events)==null?void 0:l.length)??0,methods:((a=r.methods)==null?void 0:a.length)??0};return u.jsxs("details",{className:"api-plug",open:o,children:[u.jsxs("summary",{children:[u.jsx("code",{children:e}),u.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),u.jsx("span",{className:"api-plug-desc",children:t}),u.jsxs("span",{className:"api-plug-n",children:[i.props," 属性 · ",i.events," 事件 · ",i.methods," 方法"]})]}),u.jsx("div",{className:"api-plug-body",children:u.jsx(FS,{doc:r})})]})}const WS=/create[A-Z]\w*Plugin/g;function HS(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Mf(e){return e.dir?`create${e.dir}`:HS(e.factory)}function VS(e){return new Set(e.match(WS)??[])}function KS(e,n){const t=VS(e);return n.filter(r=>t.has(Mf(r))).sort((r,o)=>r.priority-o.priority)}function GS({source:e,plugins:n,heading:t="本页用到的插件"}){const r=y.useMemo(()=>KS(e,n),[e,n]);return r.length===0?null:u.jsxs("section",{className:"api-sec",children:[u.jsxs("div",{className:"api-sec-head",children:[u.jsxs("h2",{className:"api-sec-title",children:[t," · ",r.length," 个"]}),u.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",u.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(o=>u.jsx(US,{factory:Mf(o),priority:o.priority,summary:o.summary??o.doc.description??"",doc:o.doc},o.factory))]})}const QS=/\{\{\s*([\w-]+)\s*\}\}/g;function ys(e,n){return e.replace(QS,(t,r)=>r in n?String(n[r]):t)}function YS(e,n){if(!e)return"";let t=ys(e,n).trim();return t.startsWith("{")&&t.endsWith("}")&&(t=t.slice(1,-1).trim()),t?`{ ${t} }`:""}function If(e,n){const t=e.plugs.map(r=>`  ${r.fn}(${YS(r.cfg,n)}),`).join(`
`);return e.plugs.length?`const Board = withPlugins(CandidateCore, [
${t}
]);`:"const Board = CandidateCore;"}function Af(e){const n=e.plugs.map(t=>t.fn).sort();return n.length?n.map(t=>{const r=`${t.replace(/^create/,"").replace(/Plugin$/,"")}Plugin`;return`import { ${t} } from "vane-candidate/custom-plugins/${r}";`}).join(`
`):"// 这一页只用 Core props，不需要任何插件"}function XS(e,n){const t=e.props.filter(r=>typeof r=="string"||!r.when||r.when(n)).map(r=>`      ${ys(typeof r=="string"?r:r.text,n)}`).join(`
`);return`// ${e.title} · 最小装配（照抄即可跑）
import { CandidateCore, withPlugins } from "vane-candidate";
import type { Candidate } from "vane-candidate";
${Af(e)}

${If(e,n)}

export default function Demo({ data }: { data: Candidate[] }) {
  return (
    <Board
      data={data}
${t}
    />
  );
}
`}function ZS(e){return/^[A-Za-z_$][\w$]*$/.test(e)}function Bo(e,n){const t="  ".repeat(n),r="  ".repeat(n+1);if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${r}${Bo(i,n+1)}`).join(`,
`)},
${t}]`;if(typeof e=="object"){const o=Object.entries(e);return o.length===0?"{}":`{
${o.map(([l,a])=>`${r}${ZS(l)?l:JSON.stringify(l)}: ${Bo(a,n+1)}`).join(`,
`)},
${t}}`}return JSON.stringify(e)}function JS(){const n=JSON.parse(JSON.stringify(Fn)).map(t=>t.avatar?{...t,avatar:"https://your-avatar.example.com/a.png"}:t);return`const SAMPLE_STAGES: StageConfig[] = ${Bo(Bn,0)};

const data: Candidate[] = ${Bo(n,0)};`}function qS(e,n){const t=e.props.filter(r=>typeof r=="string"||!r.when||r.when(n)).map(r=>`      ${ys(typeof r=="string"?r:r.text,n)}`).join(`
`);return`// ${e.title} · 完整示例（直接复制即可运行）
import { CandidateCore, withPlugins } from "vane-candidate";
import type { Candidate, StageConfig } from "vane-candidate";
${Af(e)}

${If(e,n)}

${JS()}

export default function Demo() {
  return (
    <Board
      data={data}
      stages={SAMPLE_STAGES}
${t}
    />
  );
}
`}function ew({controls:e,cfg:n,onChange:t}){return u.jsx("div",{className:"ctl-bar",children:e.map(r=>{const o=n[r.key];return u.jsxs("label",{className:"ctl",title:r.hint,children:[u.jsxs("span",{className:"ctl-label",children:[r.label,u.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?u.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>t(r.key,!o),"aria-pressed":!!o,children:u.jsx("i",{})}):r.kind==="select"?u.jsx("select",{className:"ctl-select",value:String(o),onChange:i=>t(r.key,i.target.value),children:(r.options??[]).map(i=>u.jsx("option",{value:i.value,children:i.label},i.value))}):u.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:i=>t(r.key,Number(i.target.value))})]},r.key)})})}function nw({lines:e,title:n="事件日志",empty:t="还没触发 —— 点卡片操作区的按钮，或拖上面的控件",right:r}){return u.jsxs("div",{className:"log",children:[u.jsxs("div",{className:"log-head",children:[u.jsx("span",{children:n}),u.jsxs("span",{className:"log-right",children:[r,u.jsx("b",{children:e.length})]})]}),e.length===0?u.jsx("p",{className:"log-empty",children:t}):u.jsx("ol",{className:"log-list",children:e.map(o=>u.jsxs("li",{className:`log-line is-${o.kind}`,children:[u.jsx("time",{children:o.at}),u.jsx("span",{children:o.text})]},o.id))})]})}function tw({entry:e,order:n}){var j;const{meta:t,Stage:r,file:o,source:i}=e,[l,a]=y.useState(()=>Xu(t)),[s,c]=y.useState([]),[d,f]=y.useState("minimal"),h=y.useCallback((g,p="event")=>{const m=new Date().toLocaleTimeString("zh-CN",{hour12:!1});c(k=>[{id:k.length+1,at:m,text:g,kind:p},...k].slice(0,60))},[]),v=y.useCallback((g,p)=>{a(m=>({...m,[g]:p}))},[]),x=y.useMemo(()=>XS(t,l),[t,l]),w=y.useMemo(()=>qS(t,l),[t,l]);return u.jsxs("section",{className:"demo","data-demo":t.slug,children:[u.jsxs("header",{className:"demo-head",children:[u.jsxs("div",{className:"demo-folio",children:[u.jsx("span",{className:"demo-no",children:String(n).padStart(2,"0")}),u.jsx("em",{children:"plate"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"demo-title-row",children:[u.jsx("h2",{children:t.title}),u.jsx("span",{className:"demo-group",children:Vl[t.group].label}),t.plugin?u.jsx("code",{className:"demo-plugin",children:t.plugin}):null]}),u.jsx("p",{className:"demo-intro",children:t.intro}),u.jsxs("p",{className:"demo-why",children:[u.jsx("b",{children:"什么时候用"}),t.why]})]}),u.jsxs("div",{className:"demo-meta",children:[u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"file"}),u.jsx("b",{children:o})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"group"}),u.jsx("b",{children:Vl[t.group].label})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"plugs"}),u.jsx("b",{children:t.plugs.length?`${t.plugs.length} installed`:"core only"})]})]})]}),(j=t.controls)!=null&&j.length?u.jsxs("div",{className:"demo-controls",children:[u.jsx(ew,{controls:t.controls,cfg:l,onChange:v}),u.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{a(Xu(t)),c([])},children:"重置"})]}):null,u.jsxs("div",{className:"demo-body",children:[u.jsxs("figure",{className:"plate",children:[u.jsxs("figcaption",{className:"plate-cap",children:[u.jsx("b",{children:"stage"}),u.jsxs("span",{children:[t.tone==="light"?"light surface":"live render",t.stageHeight?` · ${t.stageHeight}px`:""]}),u.jsx("em",{children:"live"})]}),u.jsx("div",{className:"plate-ruler","aria-hidden":!0}),u.jsx("div",{className:`plate-body demo-stage${t.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${t.stageHeight??380}px`},children:u.jsx(r,{cfg:l,log:h,setCfg:v})})]}),u.jsxs("aside",{className:"demo-side",children:[u.jsx("div",{className:"demo-plugs",children:t.plugs.length===0?u.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):t.plugs.map(g=>u.jsx("span",{className:"demo-plug",children:g.fn.replace(/^create|Plugin$/g,"")},g.fn))}),u.jsx("ul",{className:"demo-why-list",children:t.plugs.map(g=>u.jsxs("li",{children:[u.jsx("code",{children:g.fn}),u.jsx("span",{children:g.why})]},g.fn))}),t.note?u.jsxs("p",{className:"demo-note",children:["⚠ ",t.note]}):null,u.jsx(nw,{lines:s,empty:t.plugs.length>0?"还没触发 —— 点卡片操作区的按钮，或拖上面的控件":"这一页没有事件类行为，日志留白"})]})]}),u.jsxs("div",{className:"demo-code",children:[u.jsxs("div",{className:"demo-switch",role:"tablist",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>f("minimal"),children:"最小装配"}),u.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>f("full"),children:"完整源码"})]}),u.jsx(BS,{code:d==="minimal"?x:w,title:d==="minimal"?`${t.slug}.minimal.tsx`:o,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]}),u.jsx(GS,{source:i,plugins:Kl})]})}const rw=y.lazy(()=>oi(()=>import("./HomePage-zlsXF1YX.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),ow=y.lazy(()=>oi(()=>import("./PluginsPage-BlPKfTtB.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),iw=y.lazy(()=>oi(()=>import("./ScenariosPage-BiuCdtcJ.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),lw={pkg:"vane-candidate",brand:"C",subtitle:"候选人流水线 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Kl.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Ao.length} scenes`}],routes:[{path:"/",element:u.jsx(rw,{})},{path:"/plugins",element:u.jsx(ow,{})},{path:"/scenarios",element:u.jsx(iw,{})}],crumb:e=>e==="/plugins"?"plugins · 插件工坊":e==="/scenarios"?"scenarios · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:J1.map(e=>({key:e,label:Vl[e].label})),entries:Hl,detail:(e,n)=>u.jsx(tw,{entry:e,order:n})},footer:[`${Kl.length} PLUGINS · ${Ao.length} SCENES`,`${Hl.length} DEMOS`]};typeof location<"u"&&location.search.includes("selftest=1")&&oi(()=>import("./selftest-CXvR7g4h.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>e.runSelfTestToTitle());function aw(){return u.jsx(_h,{config:lw})}Ki.createRoot(document.getElementById("root")).render(u.jsx(aw,{}));export{gs as A,Dr as B,BS as C,Hl as D,mi as E,vm as F,Zu as G,Wl as L,Kl as P,Ao as S,dw as U,Vl as a,uw as b,Bn as c,Fn as d,An as e,cw as f,ym as g,Or as h,Xa as i,u as j,li as k,qa as l,ai as m,Mt as n,si as o,rs as p,ui as q,y as r,ci as s,di as t,fi as u,us as v,ot as w,Rr as x,pi as y,gi as z};
