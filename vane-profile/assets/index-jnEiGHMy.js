const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-MR-E6WSE.js","./catalog-Cx7KY-Rl.js","./ScenariosPage-C-q6Gvnh.js"])))=>i.map(i=>d[i]);
var kf=Object.defineProperty;var bf=(e,t,n)=>t in e?kf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Qa=(e,t,n)=>bf(e,typeof t!="symbol"?t+"":t,n);function Cf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function _f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cu={exports:{}},Ao={},_u={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=Symbol.for("react.element"),Tf=Symbol.for("react.portal"),Ef=Symbol.for("react.fragment"),jf=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),Lf=Symbol.for("react.provider"),Nf=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),Mf=Symbol.for("react.memo"),Bf=Symbol.for("react.lazy"),Ga=Symbol.iterator;function zf(e){return e===null||typeof e!="object"?null:(e=Ga&&e[Ga]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eu=Object.assign,ju={};function Tn(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Tu}Tn.prototype.isReactComponent={};Tn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ru(){}Ru.prototype=Tn.prototype;function Ti(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Tu}var Ei=Ti.prototype=new Ru;Ei.constructor=Ti;Eu(Ei,Tn.prototype);Ei.isPureReactComponent=!0;var Ka=Array.isArray,Lu=Object.prototype.hasOwnProperty,ji={current:null},Nu={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Lu.call(t,r)&&!Nu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Pr,type:e,key:l,ref:i,props:o,_owner:ji.current}}function Ff(e,t){return{$$typeof:Pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ri(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pr}function Of(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ya=/\/+/g;function qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Of(""+e.key):t.toString(36)}function Xr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Pr:case Tf:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+qo(i,0):r,Ka(o)?(n="",e!=null&&(n=e.replace(Ya,"$&/")+"/"),Xr(o,t,n,"",function(c){return c})):o!=null&&(Ri(o)&&(o=Ff(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ya,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Ka(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+qo(l,a);i+=Xr(l,t,n,s,o)}else if(s=zf(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+qo(l,a++),i+=Xr(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Rr(e,t,n){if(e==null)return e;var r=[],o=0;return Xr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function If(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Zr={transition:null},Df={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Zr,ReactCurrentOwner:ji};function Au(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Rr,forEach:function(e,t,n){Rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Rr(e,function(){t++}),t},toArray:function(e){return Rr(e,function(t){return t})||[]},only:function(e){if(!Ri(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Tn;A.Fragment=Ef;A.Profiler=Rf;A.PureComponent=Ti;A.StrictMode=jf;A.Suspense=Af;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df;A.act=Au;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Eu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=ji.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Lu.call(t,s)&&!Nu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Pr,type:e.type,key:o,ref:l,props:r,_owner:i}};A.createContext=function(e){return e={$$typeof:Nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lf,_context:e},e.Consumer=e};A.createElement=$u;A.createFactory=function(e){var t=$u.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:$f,render:e}};A.isValidElement=Ri;A.lazy=function(e){return{$$typeof:Bf,_payload:{_status:-1,_result:e},_init:If}};A.memo=function(e,t){return{$$typeof:Mf,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Zr.transition;Zr.transition={};try{e()}finally{Zr.transition=t}};A.unstable_act=Au;A.useCallback=function(e,t){return xe.current.useCallback(e,t)};A.useContext=function(e){return xe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};A.useEffect=function(e,t){return xe.current.useEffect(e,t)};A.useId=function(){return xe.current.useId()};A.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return xe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};A.useRef=function(e){return xe.current.useRef(e)};A.useState=function(e){return xe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return xe.current.useTransition()};A.version="18.3.1";_u.exports=A;var y=_u.exports;const En=_f(y),Uf=Cf({__proto__:null,default:En},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf=y,Vf=Symbol.for("react.element"),Hf=Symbol.for("react.fragment"),Qf=Object.prototype.hasOwnProperty,Gf=Wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kf={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Qf.call(t,r)&&!Kf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Vf,type:e,key:l,ref:i,props:o,_owner:Gf.current}}Ao.Fragment=Hf;Ao.jsx=Mu;Ao.jsxs=Mu;Cu.exports=Ao;var u=Cu.exports,_l={},Bu={exports:{}},Ne={},zu={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,N){var $=T.length;T.push(N);e:for(;0<$;){var Q=$-1>>>1,ee=T[Q];if(0<o(ee,N))T[Q]=N,T[$]=ee,$=Q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var N=T[0],$=T.pop();if($!==N){T[0]=$;e:for(var Q=0,ee=T.length,O=ee>>>1;Q<O;){var I=2*(Q+1)-1,ae=T[I],ge=I+1,se=T[ge];if(0>o(ae,$))ge<ee&&0>o(se,ae)?(T[Q]=se,T[ge]=$,Q=ge):(T[Q]=ae,T[I]=$,Q=I);else if(ge<ee&&0>o(se,$))T[Q]=se,T[ge]=$,Q=ge;else break e}}return N}function o(T,N){var $=T.sortIndex-N.sortIndex;return $!==0?$:T.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],p=1,d=null,g=3,v=!1,w=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=T)r(c),N.sortIndex=N.expirationTime,t(s,N);else break;N=n(c)}}function x(T){if(S=!1,h(T),!w)if(n(s)!==null)w=!0,Ie(b);else{var N=n(c);N!==null&&Ke(x,N.startTime-T)}}function b(T,N){w=!1,S&&(S=!1,m(L),L=-1),v=!0;var $=g;try{for(h(N),d=n(s);d!==null&&(!(d.expirationTime>N)||T&&!M());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,g=d.priorityLevel;var ee=Q(d.expirationTime<=N);N=e.unstable_now(),typeof ee=="function"?d.callback=ee:d===n(s)&&r(s),h(N)}else r(s);d=n(s)}if(d!==null)var O=!0;else{var I=n(c);I!==null&&Ke(x,I.startTime-N),O=!1}return O}finally{d=null,g=$,v=!1}}var E=!1,R=null,L=-1,k=5,_=-1;function M(){return!(e.unstable_now()-_<k)}function Z(){if(R!==null){var T=e.unstable_now();_=T;var N=!0;try{N=R(!0,T)}finally{N?z():(E=!1,R=null)}}else E=!1}var z;if(typeof f=="function")z=function(){f(Z)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,dt=re.port2;re.port1.onmessage=Z,z=function(){dt.postMessage(null)}}else z=function(){P(Z,0)};function Ie(T){R=T,E||(E=!0,z())}function Ke(T,N){L=P(function(){T(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Ie(b))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var N=3;break;default:N=g}var $=g;g=N;try{return T()}finally{g=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,N){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var $=g;g=T;try{return N()}finally{g=$}},e.unstable_scheduleCallback=function(T,N,$){var Q=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Q+$:Q):$=Q,T){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=$+ee,T={id:p++,callback:N,priorityLevel:T,startTime:$,expirationTime:ee,sortIndex:-1},$>Q?(T.sortIndex=$,t(c,T),n(s)===null&&T===n(c)&&(S?(m(L),L=-1):S=!0,Ke(x,$-Q))):(T.sortIndex=ee,t(s,T),w||v||(w=!0,Ie(b))),T},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(T){var N=g;return function(){var $=g;g=N;try{return T.apply(this,arguments)}finally{g=$}}}})(Fu);zu.exports=Fu;var Yf=zu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf=y,Le=Yf;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ou=new Set,rr={};function Yt(e,t){Sn(e,t),Sn(e+"Capture",t)}function Sn(e,t){for(rr[e]=t,e=0;e<t.length;e++)Ou.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tl=Object.prototype.hasOwnProperty,Zf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xa={},Za={};function Jf(e){return Tl.call(Za,e)?!0:Tl.call(Xa,e)?!1:Zf.test(e)?Za[e]=!0:(Xa[e]=!0,!1)}function qf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ep(e,t,n,r){if(t===null||typeof t>"u"||qf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Li=/[\-:]([a-z])/g;function Ni(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Li,Ni);pe[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Li,Ni);pe[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Li,Ni);pe[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function $i(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ep(t,n,o,r)&&(n=null),r||o===null?Jf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ut=Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lr=Symbol.for("react.element"),tn=Symbol.for("react.portal"),nn=Symbol.for("react.fragment"),Ai=Symbol.for("react.strict_mode"),El=Symbol.for("react.profiler"),Iu=Symbol.for("react.provider"),Du=Symbol.for("react.context"),Mi=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),Rl=Symbol.for("react.suspense_list"),Bi=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Uu=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,el;function Un(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function tp(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function Ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nn:return"Fragment";case tn:return"Portal";case El:return"Profiler";case Ai:return"StrictMode";case jl:return"Suspense";case Rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Du:return(e.displayName||"Context")+".Consumer";case Iu:return(e._context.displayName||"Context")+".Provider";case Mi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bi:return t=e.displayName||null,t!==null?t:Ll(e.type)||"Memo";case pt:t=e._payload,e=e._init;try{return Ll(e(t))}catch{}}return null}function np(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ll(t);case 8:return t===Ai?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rp(e){var t=Wu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nr(e){e._valueTracker||(e._valueTracker=rp(e))}function Vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function so(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nl(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hu(e,t){t=t.checked,t!=null&&$i(e,"checked",t,!1)}function $l(e,t){Hu(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Al(e,t.type,n):t.hasOwnProperty("defaultValue")&&Al(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function es(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Al(e,t,n){(t!=="number"||so(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wn=Array.isArray;function gn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ts(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Wn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}function Qu(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ns(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,Ku=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function or(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},op=["Webkit","ms","Moz","O"];Object.keys(Gn).forEach(function(e){op.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gn[t]=Gn[e]})});function Yu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Gn.hasOwnProperty(e)&&Gn[e]?(""+t).trim():t+"px"}function Xu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Yu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var lp=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(lp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ol=null;function zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,mn=null,hn=null;function rs(e){if(e=Cr(e)){if(typeof Il!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Oo(t),Il(e.stateNode,e.type,t))}}function Zu(e){mn?hn?hn.push(e):hn=[e]:mn=e}function Ju(){if(mn){var e=mn,t=hn;if(hn=mn=null,rs(e),t)for(e=0;e<t.length;e++)rs(t[e])}}function qu(e,t){return e(t)}function ec(){}var rl=!1;function tc(e,t,n){if(rl)return e(t,n);rl=!0;try{return qu(e,t,n)}finally{rl=!1,(mn!==null||hn!==null)&&(ec(),Ju())}}function lr(e,t){var n=e.stateNode;if(n===null)return null;var r=Oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Dl=!1;if(lt)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Dl=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Dl=!1}function ip(e,t,n,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Kn=!1,uo=null,co=!1,Ul=null,ap={onError:function(e){Kn=!0,uo=e}};function sp(e,t,n,r,o,l,i,a,s){Kn=!1,uo=null,ip.apply(ap,arguments)}function up(e,t,n,r,o,l,i,a,s){if(sp.apply(this,arguments),Kn){if(Kn){var c=uo;Kn=!1,uo=null}else throw Error(C(198));co||(co=!0,Ul=c)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function os(e){if(Xt(e)!==e)throw Error(C(188))}function cp(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return os(o),e;if(l===r)return os(o),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function rc(e){return e=cp(e),e!==null?oc(e):null}function oc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oc(e);if(t!==null)return t;e=e.sibling}return null}var lc=Le.unstable_scheduleCallback,ls=Le.unstable_cancelCallback,dp=Le.unstable_shouldYield,fp=Le.unstable_requestPaint,J=Le.unstable_now,pp=Le.unstable_getCurrentPriorityLevel,Fi=Le.unstable_ImmediatePriority,ic=Le.unstable_UserBlockingPriority,fo=Le.unstable_NormalPriority,gp=Le.unstable_LowPriority,ac=Le.unstable_IdlePriority,Mo=null,Je=null;function mp(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Mo,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:yp,hp=Math.log,vp=Math.LN2;function yp(e){return e>>>=0,e===0?32:31-(hp(e)/vp|0)|0}var Ar=64,Mr=4194304;function Vn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function po(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Vn(a):(l&=i,l!==0&&(r=Vn(l)))}else i=n&~o,i!==0?r=Vn(i):l!==0&&(r=Vn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),o=1<<n,r|=e[n],t&=~o;return r}function wp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-He(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=wp(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sc(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function xp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-He(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Oi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function uc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cc,Ii,dc,fc,pc,Vl=!1,Br=[],St=null,xt=null,Pt=null,ir=new Map,ar=new Map,mt=[],Pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function is(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(t.pointerId)}}function Bn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Cr(t),t!==null&&Ii(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function kp(e,t,n,r,o){switch(t){case"focusin":return St=Bn(St,e,t,n,r,o),!0;case"dragenter":return xt=Bn(xt,e,t,n,r,o),!0;case"mouseover":return Pt=Bn(Pt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return ir.set(l,Bn(ir.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,ar.set(l,Bn(ar.get(l)||null,e,t,n,r,o)),!0}return!1}function gc(e){var t=Ot(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=nc(n),t!==null){e.blockedOn=t,pc(e.priority,function(){dc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ol=r,n.target.dispatchEvent(r),Ol=null}else return t=Cr(n),t!==null&&Ii(t),e.blockedOn=n,!1;t.shift()}return!0}function as(e,t,n){Jr(e)&&n.delete(t)}function bp(){Vl=!1,St!==null&&Jr(St)&&(St=null),xt!==null&&Jr(xt)&&(xt=null),Pt!==null&&Jr(Pt)&&(Pt=null),ir.forEach(as),ar.forEach(as)}function zn(e,t){e.blockedOn===t&&(e.blockedOn=null,Vl||(Vl=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,bp)))}function sr(e){function t(o){return zn(o,e)}if(0<Br.length){zn(Br[0],e);for(var n=1;n<Br.length;n++){var r=Br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&zn(St,e),xt!==null&&zn(xt,e),Pt!==null&&zn(Pt,e),ir.forEach(t),ar.forEach(t),n=0;n<mt.length;n++)r=mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mt.length&&(n=mt[0],n.blockedOn===null);)gc(n),n.blockedOn===null&&mt.shift()}var vn=ut.ReactCurrentBatchConfig,go=!0;function Cp(e,t,n,r){var o=F,l=vn.transition;vn.transition=null;try{F=1,Di(e,t,n,r)}finally{F=o,vn.transition=l}}function _p(e,t,n,r){var o=F,l=vn.transition;vn.transition=null;try{F=4,Di(e,t,n,r)}finally{F=o,vn.transition=l}}function Di(e,t,n,r){if(go){var o=Hl(e,t,n,r);if(o===null)gl(e,t,r,mo,n),is(e,r);else if(kp(o,e,t,n,r))r.stopPropagation();else if(is(e,r),t&4&&-1<Pp.indexOf(e)){for(;o!==null;){var l=Cr(o);if(l!==null&&cc(l),l=Hl(e,t,n,r),l===null&&gl(e,t,r,mo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else gl(e,t,r,null,n)}}var mo=null;function Hl(e,t,n,r){if(mo=null,e=zi(r),e=Ot(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mo=e,null}function mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pp()){case Fi:return 1;case ic:return 4;case fo:case gp:return 16;case ac:return 536870912;default:return 16}default:return 16}}var vt=null,Ui=null,qr=null;function hc(){if(qr)return qr;var e,t=Ui,n=t.length,r,o="value"in vt?vt.value:vt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return qr=o.slice(e,1<r?1-r:void 0)}function eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function ss(){return!1}function $e(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?zr:ss,this.isPropagationStopped=ss,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=$e(jn),br=Y({},jn,{view:0,detail:0}),Tp=$e(br),ll,il,Fn,Bo=Y({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fn&&(Fn&&e.type==="mousemove"?(ll=e.screenX-Fn.screenX,il=e.screenY-Fn.screenY):il=ll=0,Fn=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:il}}),us=$e(Bo),Ep=Y({},Bo,{dataTransfer:0}),jp=$e(Ep),Rp=Y({},br,{relatedTarget:0}),al=$e(Rp),Lp=Y({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Np=$e(Lp),$p=Y({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ap=$e($p),Mp=Y({},jn,{data:0}),cs=$e(Mp),Bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fp[e])?!!t[e]:!1}function Vi(){return Op}var Ip=Y({},br,{key:function(e){if(e.key){var t=Bp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vi,charCode:function(e){return e.type==="keypress"?eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dp=$e(Ip),Up=Y({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ds=$e(Up),Wp=Y({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vi}),Vp=$e(Wp),Hp=Y({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qp=$e(Hp),Gp=Y({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kp=$e(Gp),Yp=[9,13,27,32],Hi=lt&&"CompositionEvent"in window,Yn=null;lt&&"documentMode"in document&&(Yn=document.documentMode);var Xp=lt&&"TextEvent"in window&&!Yn,vc=lt&&(!Hi||Yn&&8<Yn&&11>=Yn),fs=" ",ps=!1;function yc(e,t){switch(e){case"keyup":return Yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rn=!1;function Zp(e,t){switch(e){case"compositionend":return wc(t);case"keypress":return t.which!==32?null:(ps=!0,fs);case"textInput":return e=t.data,e===fs&&ps?null:e;default:return null}}function Jp(e,t){if(rn)return e==="compositionend"||!Hi&&yc(e,t)?(e=hc(),qr=Ui=vt=null,rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vc&&t.locale!=="ko"?null:t.data;default:return null}}var qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qp[e.type]:t==="textarea"}function Sc(e,t,n,r){Zu(r),t=ho(t,"onChange"),0<t.length&&(n=new Wi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,ur=null;function eg(e){Lc(e,0)}function zo(e){var t=an(e);if(Vu(t))return e}function tg(e,t){if(e==="change")return t}var xc=!1;if(lt){var sl;if(lt){var ul="oninput"in document;if(!ul){var ms=document.createElement("div");ms.setAttribute("oninput","return;"),ul=typeof ms.oninput=="function"}sl=ul}else sl=!1;xc=sl&&(!document.documentMode||9<document.documentMode)}function hs(){Xn&&(Xn.detachEvent("onpropertychange",Pc),ur=Xn=null)}function Pc(e){if(e.propertyName==="value"&&zo(ur)){var t=[];Sc(t,ur,e,zi(e)),tc(eg,t)}}function ng(e,t,n){e==="focusin"?(hs(),Xn=t,ur=n,Xn.attachEvent("onpropertychange",Pc)):e==="focusout"&&hs()}function rg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zo(ur)}function og(e,t){if(e==="click")return zo(t)}function lg(e,t){if(e==="input"||e==="change")return zo(t)}function ig(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:ig;function cr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Tl.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function vs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ys(e,t){var n=vs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vs(n)}}function kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bc(){for(var e=window,t=so();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=so(e.document)}return t}function Qi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ag(e){var t=bc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kc(n.ownerDocument.documentElement,n)){if(r!==null&&Qi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ys(n,l);var i=ys(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sg=lt&&"documentMode"in document&&11>=document.documentMode,on=null,Ql=null,Zn=null,Gl=!1;function ws(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gl||on==null||on!==so(r)||(r=on,"selectionStart"in r&&Qi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zn&&cr(Zn,r)||(Zn=r,r=ho(Ql,"onSelect"),0<r.length&&(t=new Wi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=on)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ln={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},cl={},Cc={};lt&&(Cc=document.createElement("div").style,"AnimationEvent"in window||(delete ln.animationend.animation,delete ln.animationiteration.animation,delete ln.animationstart.animation),"TransitionEvent"in window||delete ln.transitionend.transition);function Fo(e){if(cl[e])return cl[e];if(!ln[e])return e;var t=ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cc)return cl[e]=t[n];return e}var _c=Fo("animationend"),Tc=Fo("animationiteration"),Ec=Fo("animationstart"),jc=Fo("transitionend"),Rc=new Map,Ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){Rc.set(e,t),Yt(t,[e])}for(var dl=0;dl<Ss.length;dl++){var fl=Ss[dl],ug=fl.toLowerCase(),cg=fl[0].toUpperCase()+fl.slice(1);Lt(ug,"on"+cg)}Lt(_c,"onAnimationEnd");Lt(Tc,"onAnimationIteration");Lt(Ec,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(jc,"onTransitionEnd");Sn("onMouseEnter",["mouseout","mouseover"]);Sn("onMouseLeave",["mouseout","mouseover"]);Sn("onPointerEnter",["pointerout","pointerover"]);Sn("onPointerLeave",["pointerout","pointerover"]);Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));function xs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,up(r,t,void 0,e),e.currentTarget=null}function Lc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;xs(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;xs(o,a,c),l=s}}}if(co)throw e=Ul,co=!1,Ul=null,e}function W(e,t){var n=t[Jl];n===void 0&&(n=t[Jl]=new Set);var r=e+"__bubble";n.has(r)||(Nc(t,e,2,!1),n.add(r))}function pl(e,t,n){var r=0;t&&(r|=4),Nc(n,e,r,t)}var Or="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[Or]){e[Or]=!0,Ou.forEach(function(n){n!=="selectionchange"&&(dg.has(n)||pl(n,!1,e),pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Or]||(t[Or]=!0,pl("selectionchange",!1,t))}}function Nc(e,t,n,r){switch(mc(t)){case 1:var o=Cp;break;case 4:o=_p;break;default:o=Di}n=o.bind(null,t,n,e),o=void 0,!Dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function gl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Ot(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}tc(function(){var c=l,p=zi(n),d=[];e:{var g=Rc.get(e);if(g!==void 0){var v=Wi,w=e;switch(e){case"keypress":if(eo(n)===0)break e;case"keydown":case"keyup":v=Dp;break;case"focusin":w="focus",v=al;break;case"focusout":w="blur",v=al;break;case"beforeblur":case"afterblur":v=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Vp;break;case _c:case Tc:case Ec:v=Np;break;case jc:v=Qp;break;case"scroll":v=Tp;break;case"wheel":v=Kp;break;case"copy":case"cut":case"paste":v=Ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ds}var S=(t&4)!==0,P=!S&&e==="scroll",m=S?g!==null?g+"Capture":null:g;S=[];for(var f=c,h;f!==null;){h=f;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,m!==null&&(x=lr(f,m),x!=null&&S.push(fr(f,x,h)))),P)break;f=f.return}0<S.length&&(g=new v(g,w,null,n,p),d.push({event:g,listeners:S}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Ol&&(w=n.relatedTarget||n.fromElement)&&(Ot(w)||w[it]))break e;if((v||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?Ot(w):null,w!==null&&(P=Xt(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(S=us,x="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=ds,x="onPointerLeave",m="onPointerEnter",f="pointer"),P=v==null?g:an(v),h=w==null?g:an(w),g=new S(x,f+"leave",v,n,p),g.target=P,g.relatedTarget=h,x=null,Ot(p)===c&&(S=new S(m,f+"enter",w,n,p),S.target=h,S.relatedTarget=P,x=S),P=x,v&&w)t:{for(S=v,m=w,f=0,h=S;h;h=en(h))f++;for(h=0,x=m;x;x=en(x))h++;for(;0<f-h;)S=en(S),f--;for(;0<h-f;)m=en(m),h--;for(;f--;){if(S===m||m!==null&&S===m.alternate)break t;S=en(S),m=en(m)}S=null}else S=null;v!==null&&Ps(d,g,v,S,!1),w!==null&&P!==null&&Ps(d,P,w,S,!0)}}e:{if(g=c?an(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var b=tg;else if(gs(g))if(xc)b=lg;else{b=rg;var E=ng}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=og);if(b&&(b=b(e,c))){Sc(d,b,n,p);break e}E&&E(e,g,c),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Al(g,"number",g.value)}switch(E=c?an(c):window,e){case"focusin":(gs(E)||E.contentEditable==="true")&&(on=E,Ql=c,Zn=null);break;case"focusout":Zn=Ql=on=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,ws(d,n,p);break;case"selectionchange":if(sg)break;case"keydown":case"keyup":ws(d,n,p)}var R;if(Hi)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else rn?yc(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(vc&&n.locale!=="ko"&&(rn||L!=="onCompositionStart"?L==="onCompositionEnd"&&rn&&(R=hc()):(vt=p,Ui="value"in vt?vt.value:vt.textContent,rn=!0)),E=ho(c,L),0<E.length&&(L=new cs(L,e,null,n,p),d.push({event:L,listeners:E}),R?L.data=R:(R=wc(n),R!==null&&(L.data=R)))),(R=Xp?Zp(e,n):Jp(e,n))&&(c=ho(c,"onBeforeInput"),0<c.length&&(p=new cs("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:c}),p.data=R))}Lc(d,t)})}function fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=lr(e,n),l!=null&&r.unshift(fr(e,l,o)),l=lr(e,t),l!=null&&r.push(fr(e,l,o))),e=e.return}return r}function en(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ps(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=lr(n,l),s!=null&&i.unshift(fr(n,s,a))):o||(s=lr(n,l),s!=null&&i.push(fr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var fg=/\r\n?/g,pg=/\u0000|\uFFFD/g;function ks(e){return(typeof e=="string"?e:""+e).replace(fg,`
`).replace(pg,"")}function Ir(e,t,n){if(t=ks(t),ks(e)!==t&&n)throw Error(C(425))}function vo(){}var Kl=null,Yl=null;function Xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,gg=typeof clearTimeout=="function"?clearTimeout:void 0,bs=typeof Promise=="function"?Promise:void 0,mg=typeof queueMicrotask=="function"?queueMicrotask:typeof bs<"u"?function(e){return bs.resolve(null).then(e).catch(hg)}:Zl;function hg(e){setTimeout(function(){throw e})}function ml(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);sr(t)}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Rn,pr="__reactProps$"+Rn,it="__reactContainer$"+Rn,Jl="__reactEvents$"+Rn,vg="__reactListeners$"+Rn,yg="__reactHandles$"+Rn;function Ot(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[it]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cs(e);e!==null;){if(n=e[Ze])return n;e=Cs(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[Ze]||e[it],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function an(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Oo(e){return e[pr]||null}var ql=[],sn=-1;function Nt(e){return{current:e}}function V(e){0>sn||(e.current=ql[sn],ql[sn]=null,sn--)}function U(e,t){sn++,ql[sn]=e.current,e.current=t}var Rt={},ye=Nt(Rt),Ce=Nt(!1),Vt=Rt;function xn(e,t){var n=e.type.contextTypes;if(!n)return Rt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _e(e){return e=e.childContextTypes,e!=null}function yo(){V(Ce),V(ye)}function _s(e,t,n){if(ye.current!==Rt)throw Error(C(168));U(ye,t),U(Ce,n)}function $c(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,np(e)||"Unknown",o));return Y({},n,r)}function wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rt,Vt=ye.current,U(ye,e),U(Ce,Ce.current),!0}function Ts(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=$c(e,t,Vt),r.__reactInternalMemoizedMergedChildContext=e,V(Ce),V(ye),U(ye,e)):V(Ce),U(Ce,n)}var tt=null,Io=!1,hl=!1;function Ac(e){tt===null?tt=[e]:tt.push(e)}function wg(e){Io=!0,Ac(e)}function $t(){if(!hl&&tt!==null){hl=!0;var e=0,t=F;try{var n=tt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,Io=!1}catch(o){throw tt!==null&&(tt=tt.slice(e+1)),lc(Fi,$t),o}finally{F=t,hl=!1}}return null}var un=[],cn=0,So=null,xo=0,Ae=[],Me=0,Ht=null,nt=1,rt="";function zt(e,t){un[cn++]=xo,un[cn++]=So,So=e,xo=t}function Mc(e,t,n){Ae[Me++]=nt,Ae[Me++]=rt,Ae[Me++]=Ht,Ht=e;var r=nt;e=rt;var o=32-He(r)-1;r&=~(1<<o),n+=1;var l=32-He(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,nt=1<<32-He(t)+o|n<<o|r,rt=l+e}else nt=1<<l|n<<o|r,rt=e}function Gi(e){e.return!==null&&(zt(e,1),Mc(e,1,0))}function Ki(e){for(;e===So;)So=un[--cn],un[cn]=null,xo=un[--cn],un[cn]=null;for(;e===Ht;)Ht=Ae[--Me],Ae[Me]=null,rt=Ae[--Me],Ae[Me]=null,nt=Ae[--Me],Ae[Me]=null}var Re=null,je=null,H=!1,Ve=null;function Bc(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Es(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,je=kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,je=null,!0):!1;default:return!1}}function ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ti(e){if(H){var t=je;if(t){var n=t;if(!Es(e,t)){if(ei(e))throw Error(C(418));t=kt(n.nextSibling);var r=Re;t&&Es(e,t)?Bc(r,n):(e.flags=e.flags&-4097|2,H=!1,Re=e)}}else{if(ei(e))throw Error(C(418));e.flags=e.flags&-4097|2,H=!1,Re=e}}}function js(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Dr(e){if(e!==Re)return!1;if(!H)return js(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xl(e.type,e.memoizedProps)),t&&(t=je)){if(ei(e))throw zc(),Error(C(418));for(;t;)Bc(e,t),t=kt(t.nextSibling)}if(js(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Re?kt(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=je;e;)e=kt(e.nextSibling)}function Pn(){je=Re=null,H=!1}function Yi(e){Ve===null?Ve=[e]:Ve.push(e)}var Sg=ut.ReactCurrentBatchConfig;function On(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rs(e){var t=e._init;return t(e._payload)}function Fc(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function o(m,f){return m=Tt(m,f),m.index=0,m.sibling=null,m}function l(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,h,x){return f===null||f.tag!==6?(f=kl(h,m.mode,x),f.return=m,f):(f=o(f,h),f.return=m,f)}function s(m,f,h,x){var b=h.type;return b===nn?p(m,f,h.props.children,x,h.key):f!==null&&(f.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===pt&&Rs(b)===f.type)?(x=o(f,h.props),x.ref=On(m,f,h),x.return=m,x):(x=ao(h.type,h.key,h.props,null,m.mode,x),x.ref=On(m,f,h),x.return=m,x)}function c(m,f,h,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=bl(h,m.mode,x),f.return=m,f):(f=o(f,h.children||[]),f.return=m,f)}function p(m,f,h,x,b){return f===null||f.tag!==7?(f=Wt(h,m.mode,x,b),f.return=m,f):(f=o(f,h),f.return=m,f)}function d(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=kl(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Lr:return h=ao(f.type,f.key,f.props,null,m.mode,h),h.ref=On(m,null,f),h.return=m,h;case tn:return f=bl(f,m.mode,h),f.return=m,f;case pt:var x=f._init;return d(m,x(f._payload),h)}if(Wn(f)||An(f))return f=Wt(f,m.mode,h,null),f.return=m,f;Ur(m,f)}return null}function g(m,f,h,x){var b=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:a(m,f,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Lr:return h.key===b?s(m,f,h,x):null;case tn:return h.key===b?c(m,f,h,x):null;case pt:return b=h._init,g(m,f,b(h._payload),x)}if(Wn(h)||An(h))return b!==null?null:p(m,f,h,x,null);Ur(m,h)}return null}function v(m,f,h,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(h)||null,a(f,m,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Lr:return m=m.get(x.key===null?h:x.key)||null,s(f,m,x,b);case tn:return m=m.get(x.key===null?h:x.key)||null,c(f,m,x,b);case pt:var E=x._init;return v(m,f,h,E(x._payload),b)}if(Wn(x)||An(x))return m=m.get(h)||null,p(f,m,x,b,null);Ur(f,x)}return null}function w(m,f,h,x){for(var b=null,E=null,R=f,L=f=0,k=null;R!==null&&L<h.length;L++){R.index>L?(k=R,R=null):k=R.sibling;var _=g(m,R,h[L],x);if(_===null){R===null&&(R=k);break}e&&R&&_.alternate===null&&t(m,R),f=l(_,f,L),E===null?b=_:E.sibling=_,E=_,R=k}if(L===h.length)return n(m,R),H&&zt(m,L),b;if(R===null){for(;L<h.length;L++)R=d(m,h[L],x),R!==null&&(f=l(R,f,L),E===null?b=R:E.sibling=R,E=R);return H&&zt(m,L),b}for(R=r(m,R);L<h.length;L++)k=v(R,m,L,h[L],x),k!==null&&(e&&k.alternate!==null&&R.delete(k.key===null?L:k.key),f=l(k,f,L),E===null?b=k:E.sibling=k,E=k);return e&&R.forEach(function(M){return t(m,M)}),H&&zt(m,L),b}function S(m,f,h,x){var b=An(h);if(typeof b!="function")throw Error(C(150));if(h=b.call(h),h==null)throw Error(C(151));for(var E=b=null,R=f,L=f=0,k=null,_=h.next();R!==null&&!_.done;L++,_=h.next()){R.index>L?(k=R,R=null):k=R.sibling;var M=g(m,R,_.value,x);if(M===null){R===null&&(R=k);break}e&&R&&M.alternate===null&&t(m,R),f=l(M,f,L),E===null?b=M:E.sibling=M,E=M,R=k}if(_.done)return n(m,R),H&&zt(m,L),b;if(R===null){for(;!_.done;L++,_=h.next())_=d(m,_.value,x),_!==null&&(f=l(_,f,L),E===null?b=_:E.sibling=_,E=_);return H&&zt(m,L),b}for(R=r(m,R);!_.done;L++,_=h.next())_=v(R,m,L,_.value,x),_!==null&&(e&&_.alternate!==null&&R.delete(_.key===null?L:_.key),f=l(_,f,L),E===null?b=_:E.sibling=_,E=_);return e&&R.forEach(function(Z){return t(m,Z)}),H&&zt(m,L),b}function P(m,f,h,x){if(typeof h=="object"&&h!==null&&h.type===nn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Lr:e:{for(var b=h.key,E=f;E!==null;){if(E.key===b){if(b=h.type,b===nn){if(E.tag===7){n(m,E.sibling),f=o(E,h.props.children),f.return=m,m=f;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===pt&&Rs(b)===E.type){n(m,E.sibling),f=o(E,h.props),f.ref=On(m,E,h),f.return=m,m=f;break e}n(m,E);break}else t(m,E);E=E.sibling}h.type===nn?(f=Wt(h.props.children,m.mode,x,h.key),f.return=m,m=f):(x=ao(h.type,h.key,h.props,null,m.mode,x),x.ref=On(m,f,h),x.return=m,m=x)}return i(m);case tn:e:{for(E=h.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(m,f.sibling),f=o(f,h.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=bl(h,m.mode,x),f.return=m,m=f}return i(m);case pt:return E=h._init,P(m,f,E(h._payload),x)}if(Wn(h))return w(m,f,h,x);if(An(h))return S(m,f,h,x);Ur(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(m,f.sibling),f=o(f,h),f.return=m,m=f):(n(m,f),f=kl(h,m.mode,x),f.return=m,m=f),i(m)):n(m,f)}return P}var kn=Fc(!0),Oc=Fc(!1),Po=Nt(null),ko=null,dn=null,Xi=null;function Zi(){Xi=dn=ko=null}function Ji(e){var t=Po.current;V(Po),e._currentValue=t}function ni(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yn(e,t){ko=e,Xi=dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Xi!==e)if(e={context:e,memoizedValue:t,next:null},dn===null){if(ko===null)throw Error(C(308));dn=e,ko.dependencies={lanes:0,firstContext:e}}else dn=dn.next=e;return t}var It=null;function qi(e){It===null?It=[e]:It.push(e)}function Ic(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,qi(t)):(n.next=o.next,o.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,at(e,n)}return o=r.interleaved,o===null?(t.next=t,qi(r)):(t.next=o.next,o.next=t),r.interleaved=t,at(e,n)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oi(e,n)}}function Ls(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var o=e.updateQueue;gt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==i&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=s))}if(l!==null){var d=o.baseState;i=0,p=c=s=null,a=l;do{var g=a.lane,v=a.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,S=a;switch(g=t,v=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){d=w.call(v,d,g);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,g=typeof w=="function"?w.call(v,d,g):w,g==null)break e;d=Y({},d,g);break e;case 2:gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=v,s=d):p=p.next=v,i|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(p===null&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Gt|=i,e.lanes=i,e.memoizedState=d}}function Ns(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var _r={},qe=Nt(_r),gr=Nt(_r),mr=Nt(_r);function Dt(e){if(e===_r)throw Error(C(174));return e}function ta(e,t){switch(U(mr,t),U(gr,e),U(qe,_r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bl(t,e)}V(qe),U(qe,t)}function bn(){V(qe),V(gr),V(mr)}function Uc(e){Dt(mr.current);var t=Dt(qe.current),n=Bl(t,e.type);t!==n&&(U(gr,e),U(qe,n))}function na(e){gr.current===e&&(V(qe),V(gr))}var G=Nt(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function ra(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var no=ut.ReactCurrentDispatcher,yl=ut.ReactCurrentBatchConfig,Qt=0,K=null,oe=null,ue=null,_o=!1,Jn=!1,hr=0,xg=0;function me(){throw Error(C(321))}function oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function la(e,t,n,r,o,l){if(Qt=l,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=e===null||e.memoizedState===null?Cg:_g,e=n(r,o),Jn){l=0;do{if(Jn=!1,hr=0,25<=l)throw Error(C(301));l+=1,ue=oe=null,t.updateQueue=null,no.current=Tg,e=n(r,o)}while(Jn)}if(no.current=To,t=oe!==null&&oe.next!==null,Qt=0,ue=oe=K=null,_o=!1,t)throw Error(C(300));return e}function ia(){var e=hr!==0;return hr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?K.memoizedState=ue=e:ue=ue.next=e,ue}function Oe(){if(oe===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?K.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(C(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?K.memoizedState=ue=e:ue=ue.next=e}return ue}function vr(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=Oe(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=oe,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,c=l;do{var p=c.lane;if((Qt&p)===p)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=d,i=r):s=s.next=d,K.lanes|=p,Gt|=p}c=c.next}while(c!==null&&c!==l);s===null?i=r:s.next=a,Ge(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,K.lanes|=l,Gt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sl(e){var t=Oe(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ge(l,t.memoizedState)||(be=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Wc(){}function Vc(e,t){var n=K,r=Oe(),o=t(),l=!Ge(r.memoizedState,o);if(l&&(r.memoizedState=o,be=!0),r=r.queue,aa(Gc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,yr(9,Qc.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(C(349));Qt&30||Hc(n,t,o)}return o}function Hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qc(e,t,n,r){t.value=n,t.getSnapshot=r,Kc(t)&&Yc(e)}function Gc(e,t,n){return n(function(){Kc(t)&&Yc(e)})}function Kc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Yc(e){var t=at(e,1);t!==null&&Qe(t,e,1,-1)}function $s(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},t.queue=e,e=e.dispatch=bg.bind(null,K,e),[t.memoizedState,e]}function yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xc(){return Oe().memoizedState}function ro(e,t,n,r){var o=Xe();K.flags|=e,o.memoizedState=yr(1|t,n,void 0,r===void 0?null:r)}function Do(e,t,n,r){var o=Oe();r=r===void 0?null:r;var l=void 0;if(oe!==null){var i=oe.memoizedState;if(l=i.destroy,r!==null&&oa(r,i.deps)){o.memoizedState=yr(t,n,l,r);return}}K.flags|=e,o.memoizedState=yr(1|t,n,l,r)}function As(e,t){return ro(8390656,8,e,t)}function aa(e,t){return Do(2048,8,e,t)}function Zc(e,t){return Do(4,2,e,t)}function Jc(e,t){return Do(4,4,e,t)}function qc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ed(e,t,n){return n=n!=null?n.concat([e]):null,Do(4,4,qc.bind(null,t,e),n)}function sa(){}function td(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nd(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rd(e,t,n){return Qt&21?(Ge(n,t)||(n=sc(),K.lanes|=n,Gt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function Pg(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{F=n,yl.transition=r}}function od(){return Oe().memoizedState}function kg(e,t,n){var r=_t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ld(e))id(t,n);else if(n=Ic(e,t,n,r),n!==null){var o=Se();Qe(n,e,r,o),ad(n,t,r)}}function bg(e,t,n){var r=_t(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ld(e))id(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Ge(a,i)){var s=t.interleaved;s===null?(o.next=o,qi(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Ic(e,t,o,r),n!==null&&(o=Se(),Qe(n,e,r,o),ad(n,t,r))}}function ld(e){var t=e.alternate;return e===K||t!==null&&t===K}function id(e,t){Jn=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ad(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oi(e,n)}}var To={readContext:Fe,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Cg={readContext:Fe,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:As,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ro(4194308,4,qc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return ro(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kg.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:$s,useDebugValue:sa,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=$s(!1),t=e[0];return e=Pg.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,o=Xe();if(H){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ce===null)throw Error(C(349));Qt&30||Hc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,As(Gc.bind(null,r,l,e),[e]),r.flags|=2048,yr(9,Qc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Xe(),t=ce.identifierPrefix;if(H){var n=rt,r=nt;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_g={readContext:Fe,useCallback:td,useContext:Fe,useEffect:aa,useImperativeHandle:ed,useInsertionEffect:Zc,useLayoutEffect:Jc,useMemo:nd,useReducer:wl,useRef:Xc,useState:function(){return wl(vr)},useDebugValue:sa,useDeferredValue:function(e){var t=Oe();return rd(t,oe.memoizedState,e)},useTransition:function(){var e=wl(vr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Wc,useSyncExternalStore:Vc,useId:od,unstable_isNewReconciler:!1},Tg={readContext:Fe,useCallback:td,useContext:Fe,useEffect:aa,useImperativeHandle:ed,useInsertionEffect:Zc,useLayoutEffect:Jc,useMemo:nd,useReducer:Sl,useRef:Xc,useState:function(){return Sl(vr)},useDebugValue:sa,useDeferredValue:function(e){var t=Oe();return oe===null?t.memoizedState=e:rd(t,oe.memoizedState,e)},useTransition:function(){var e=Sl(vr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Wc,useSyncExternalStore:Vc,useId:od,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ri(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Uo={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),o=_t(e),l=ot(r,o);l.payload=t,n!=null&&(l.callback=n),t=bt(e,l,o),t!==null&&(Qe(t,e,o,r),to(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),o=_t(e),l=ot(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=bt(e,l,o),t!==null&&(Qe(t,e,o,r),to(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=_t(e),o=ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=bt(e,o,r),t!==null&&(Qe(t,e,r,n),to(t,e,r))}};function Ms(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!cr(n,r)||!cr(o,l):!0}function sd(e,t,n){var r=!1,o=Rt,l=t.contextType;return typeof l=="object"&&l!==null?l=Fe(l):(o=_e(t)?Vt:ye.current,r=t.contextTypes,l=(r=r!=null)?xn(e,o):Rt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Uo.enqueueReplaceState(t,t.state,null)}function oi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ea(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Fe(l):(l=_e(t)?Vt:ye.current,o.context=xn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ri(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Uo.enqueueReplaceState(o,o.state,null),bo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Cn(e,t){try{var n="",r=t;do n+=tp(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Eg=typeof WeakMap=="function"?WeakMap:Map;function ud(e,t,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){jo||(jo=!0,mi=r),li(e,t)},n}function cd(e,t,n){n=ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){li(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){li(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function zs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Eg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ug.bind(null,e,t,n),t.then(e,e))}function Fs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Os(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ot(-1,1),t.tag=2,bt(n,t,1))),n.lanes|=1),e)}var jg=ut.ReactCurrentOwner,be=!1;function we(e,t,n,r){t.child=e===null?Oc(t,null,n,r):kn(t,e.child,n,r)}function Is(e,t,n,r,o){n=n.render;var l=t.ref;return yn(t,o),r=la(e,t,n,r,l,o),n=ia(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,st(e,t,o)):(H&&n&&Gi(t),t.flags|=1,we(e,t,r,o),t.child)}function Ds(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!ha(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,dd(e,t,l,r,o)):(e=ao(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:cr,n(i,r)&&e.ref===t.ref)return st(e,t,o)}return t.flags|=1,e=Tt(l,r),e.ref=t.ref,e.return=t,t.child=e}function dd(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(cr(l,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,st(e,t,o)}return ii(e,t,n,r,o)}function fd(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(pn,Ee),Ee|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(pn,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,U(pn,Ee),Ee|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,U(pn,Ee),Ee|=r;return we(e,t,o,n),t.child}function pd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ii(e,t,n,r,o){var l=_e(n)?Vt:ye.current;return l=xn(t,l),yn(t,o),n=la(e,t,n,r,l,o),r=ia(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,st(e,t,o)):(H&&r&&Gi(t),t.flags|=1,we(e,t,n,o),t.child)}function Us(e,t,n,r,o){if(_e(n)){var l=!0;wo(t)}else l=!1;if(yn(t,o),t.stateNode===null)oo(e,t),sd(t,n,r),oi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=_e(n)?Vt:ye.current,c=xn(t,c));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Bs(t,i,r,c),gt=!1;var g=t.memoizedState;i.state=g,bo(t,r,i,o),s=t.memoizedState,a!==r||g!==s||Ce.current||gt?(typeof p=="function"&&(ri(t,n,p,r),s=t.memoizedState),(a=gt||Ms(t,n,a,r,g,s,c))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Dc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ue(t.type,a),i.props=c,d=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Fe(s):(s=_e(n)?Vt:ye.current,s=xn(t,s));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==d||g!==s)&&Bs(t,i,r,s),gt=!1,g=t.memoizedState,i.state=g,bo(t,r,i,o);var w=t.memoizedState;a!==d||g!==w||Ce.current||gt?(typeof v=="function"&&(ri(t,n,v,r),w=t.memoizedState),(c=gt||Ms(t,n,c,r,g,w,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ai(e,t,n,r,l,o)}function ai(e,t,n,r,o,l){pd(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ts(t,n,!1),st(e,t,l);r=t.stateNode,jg.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=kn(t,e.child,null,l),t.child=kn(t,null,a,l)):we(e,t,a,l),t.memoizedState=r.state,o&&Ts(t,n,!0),t.child}function gd(e){var t=e.stateNode;t.pendingContext?_s(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_s(e,t.context,!1),ta(e,t.containerInfo)}function Ws(e,t,n,r,o){return Pn(),Yi(o),t.flags|=256,we(e,t,n,r),t.child}var si={dehydrated:null,treeContext:null,retryLane:0};function ui(e){return{baseLanes:e,cachePool:null,transitions:null}}function md(e,t,n){var r=t.pendingProps,o=G.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(G,o&1),e===null)return ti(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ho(i,r,0,null),e=Wt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ui(n),t.memoizedState=si,e):ua(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Rg(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Tt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Tt(a,l):(l=Wt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ui(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=si,r}return l=e.child,e=l.sibling,r=Tt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ua(e,t){return t=Ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wr(e,t,n,r){return r!==null&&Yi(r),kn(t,e.child,null,n),e=ua(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rg(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=xl(Error(C(422))),Wr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ho({mode:"visible",children:r.children},o,0,null),l=Wt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&kn(t,e.child,null,i),t.child.memoizedState=ui(i),t.memoizedState=si,l);if(!(t.mode&1))return Wr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(C(419)),r=xl(l,r,void 0),Wr(e,t,i,r)}if(a=(i&e.childLanes)!==0,be||a){if(r=ce,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,at(e,o),Qe(r,e,o,-1))}return ma(),r=xl(Error(C(421))),Wr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Wg.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,je=kt(o.nextSibling),Re=t,H=!0,Ve=null,e!==null&&(Ae[Me++]=nt,Ae[Me++]=rt,Ae[Me++]=Ht,nt=e.id,rt=e.overflow,Ht=t),t=ua(t,r.children),t.flags|=4096,t)}function Vs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ni(e.return,t,n)}function Pl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function hd(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(we(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vs(e,n,t);else if(e.tag===19)Vs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(G,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Pl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Co(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Pl(t,!0,n,null,l);break;case"together":Pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lg(e,t,n){switch(t.tag){case 3:gd(t),Pn();break;case 5:Uc(t);break;case 1:_e(t.type)&&wo(t);break;case 4:ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(Po,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?md(e,t,n):(U(G,G.current&1),e=st(e,t,n),e!==null?e.sibling:null);U(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,fd(e,t,n)}return st(e,t,n)}var vd,ci,yd,wd;vd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ci=function(){};yd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dt(qe.current);var l=null;switch(n){case"input":o=Nl(e,o),r=Nl(e,r),l=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":o=Ml(e,o),r=Ml(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vo)}zl(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(rr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(rr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&W("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};wd=function(e,t,n,r){n!==r&&(t.flags|=4)};function In(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ng(e,t,n){var r=t.pendingProps;switch(Ki(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return _e(t.type)&&yo(),he(t),null;case 3:return r=t.stateNode,bn(),V(Ce),V(ye),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(yi(Ve),Ve=null))),ci(e,t),he(t),null;case 5:na(t);var o=Dt(mr.current);if(n=t.type,e!==null&&t.stateNode!=null)yd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return he(t),null}if(e=Dt(qe.current),Dr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ze]=t,r[pr]=l,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(o=0;o<Hn.length;o++)W(Hn[o],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":qa(r,l),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},W("invalid",r);break;case"textarea":ts(r,l),W("invalid",r)}zl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Ir(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Ir(r.textContent,a,e),o=["children",""+a]):rr.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&W("scroll",r)}switch(n){case"input":Nr(r),es(r,l,!0);break;case"textarea":Nr(r),ns(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=vo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ze]=t,e[pr]=r,vd(e,t,!1,!1),t.stateNode=e;e:{switch(i=Fl(n,r),n){case"dialog":W("cancel",e),W("close",e),o=r;break;case"iframe":case"object":case"embed":W("load",e),o=r;break;case"video":case"audio":for(o=0;o<Hn.length;o++)W(Hn[o],e);o=r;break;case"source":W("error",e),o=r;break;case"img":case"image":case"link":W("error",e),W("load",e),o=r;break;case"details":W("toggle",e),o=r;break;case"input":qa(e,r),o=Nl(e,r),W("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),W("invalid",e);break;case"textarea":ts(e,r),o=Ml(e,r),W("invalid",e);break;default:o=r}zl(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Xu(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ku(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&or(e,s):typeof s=="number"&&or(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(rr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&W("scroll",e):s!=null&&$i(e,l,s,i))}switch(n){case"input":Nr(e),es(e,r,!1);break;case"textarea":Nr(e),ns(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?gn(e,!!r.multiple,l,!1):r.defaultValue!=null&&gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)wd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Dt(mr.current),Dt(qe.current),Dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ze]=t,(l=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r}return he(t),null;case 13:if(V(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&je!==null&&t.mode&1&&!(t.flags&128))zc(),Pn(),t.flags|=98560,l=!1;else if(l=Dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[Ze]=t}else Pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),l=!1}else Ve!==null&&(yi(Ve),Ve=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?le===0&&(le=3):ma())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return bn(),ci(e,t),e===null&&dr(t.stateNode.containerInfo),he(t),null;case 10:return Ji(t.type._context),he(t),null;case 17:return _e(t.type)&&yo(),he(t),null;case 19:if(V(G),l=t.memoizedState,l===null)return he(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)In(l,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Co(e),i!==null){for(t.flags|=128,In(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(G,G.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>_n&&(t.flags|=128,r=!0,In(l,!1),t.lanes=4194304)}else{if(!r)if(e=Co(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),In(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!H)return he(t),null}else 2*J()-l.renderingStartTime>_n&&n!==1073741824&&(t.flags|=128,r=!0,In(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=G.current,U(G,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return ga(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function $g(e,t){switch(Ki(t),t.tag){case 1:return _e(t.type)&&yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),V(Ce),V(ye),ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return na(t),null;case 13:if(V(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(G),null;case 4:return bn(),null;case 10:return Ji(t.type._context),null;case 22:case 23:return ga(),null;case 24:return null;default:return null}}var Vr=!1,ve=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,j=null;function fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function di(e,t,n){try{n()}catch(r){X(e,t,r)}}var Hs=!1;function Mg(e,t){if(Kl=go,e=bc(),Qi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,p=0,d=e,g=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(a=i+o),d!==l||r!==0&&d.nodeType!==3||(s=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(v=d.firstChild)!==null;)g=d,d=v;for(;;){if(d===e)break t;if(g===n&&++c===o&&(a=i),g===l&&++p===r&&(s=i),(v=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yl={focusedElem:e,selectionRange:n},go=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,P=w.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ue(t.type,S),P);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){X(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return w=Hs,Hs=!1,w}function qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&di(t,n,l)}o=o.next}while(o!==r)}}function Wo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sd(e){var t=e.alternate;t!==null&&(e.alternate=null,Sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[pr],delete t[Jl],delete t[vg],delete t[yg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xd(e){return e.tag===5||e.tag===3||e.tag===4}function Qs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vo));else if(r!==4&&(e=e.child,e!==null))for(pi(e,t,n),e=e.sibling;e!==null;)pi(e,t,n),e=e.sibling}function gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gi(e,t,n),e=e.sibling;e!==null;)gi(e,t,n),e=e.sibling}var de=null,We=!1;function ft(e,t,n){for(n=n.child;n!==null;)Pd(e,t,n),n=n.sibling}function Pd(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Mo,n)}catch{}switch(n.tag){case 5:ve||fn(n,t);case 6:var r=de,o=We;de=null,ft(e,t,n),de=r,We=o,de!==null&&(We?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(We?(e=de,n=n.stateNode,e.nodeType===8?ml(e.parentNode,n):e.nodeType===1&&ml(e,n),sr(e)):ml(de,n.stateNode));break;case 4:r=de,o=We,de=n.stateNode.containerInfo,We=!0,ft(e,t,n),de=r,We=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&di(n,t,i),o=o.next}while(o!==r)}ft(e,t,n);break;case 1:if(!ve&&(fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}ft(e,t,n);break;case 21:ft(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,ft(e,t,n),ve=r):ft(e,t,n);break;default:ft(e,t,n)}}function Gs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ag),t.forEach(function(r){var o=Vg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,We=!1;break e;case 3:de=a.stateNode.containerInfo,We=!0;break e;case 4:de=a.stateNode.containerInfo,We=!0;break e}a=a.return}if(de===null)throw Error(C(160));Pd(l,i,o),de=null,We=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){X(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kd(t,e),t=t.sibling}function kd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Ye(e),r&4){try{qn(3,e,e.return),Wo(3,e)}catch(S){X(e,e.return,S)}try{qn(5,e,e.return)}catch(S){X(e,e.return,S)}}break;case 1:De(t,e),Ye(e),r&512&&n!==null&&fn(n,n.return);break;case 5:if(De(t,e),Ye(e),r&512&&n!==null&&fn(n,n.return),e.flags&32){var o=e.stateNode;try{or(o,"")}catch(S){X(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Hu(o,l),Fl(a,i);var c=Fl(a,l);for(i=0;i<s.length;i+=2){var p=s[i],d=s[i+1];p==="style"?Xu(o,d):p==="dangerouslySetInnerHTML"?Ku(o,d):p==="children"?or(o,d):$i(o,p,d,c)}switch(a){case"input":$l(o,l);break;case"textarea":Qu(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?gn(o,!!l.multiple,v,!1):g!==!!l.multiple&&(l.defaultValue!=null?gn(o,!!l.multiple,l.defaultValue,!0):gn(o,!!l.multiple,l.multiple?[]:"",!1))}o[pr]=l}catch(S){X(e,e.return,S)}}break;case 6:if(De(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(S){X(e,e.return,S)}}break;case 3:if(De(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sr(t.containerInfo)}catch(S){X(e,e.return,S)}break;case 4:De(t,e),Ye(e);break;case 13:De(t,e),Ye(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(fa=J())),r&4&&Gs(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(c=ve)||p,De(t,e),ve=c):De(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(j=e,p=e.child;p!==null;){for(d=j=p;j!==null;){switch(g=j,v=g.child,g.tag){case 0:case 11:case 14:case 15:qn(4,g,g.return);break;case 1:fn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){X(r,n,S)}}break;case 5:fn(g,g.return);break;case 22:if(g.memoizedState!==null){Ys(d);continue}}v!==null?(v.return=g,j=v):Ys(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=d.stateNode,s=d.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Yu("display",i))}catch(S){X(e,e.return,S)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){X(e,e.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:De(t,e),Ye(e),r&4&&Gs(e);break;case 21:break;default:De(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xd(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(or(o,""),r.flags&=-33);var l=Qs(e);gi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Qs(e);pi(e,a,i);break;default:throw Error(C(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bg(e,t,n){j=e,bd(e)}function bd(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Vr;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ve;a=Vr;var c=ve;if(Vr=i,(ve=s)&&!c)for(j=o;j!==null;)i=j,s=i.child,i.tag===22&&i.memoizedState!==null?Xs(o):s!==null?(s.return=i,j=s):Xs(o);for(;l!==null;)j=l,bd(l),l=l.sibling;j=o,Vr=a,ve=c}Ks(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,j=l):Ks(e)}}function Ks(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Wo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ns(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ns(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&sr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ve||t.flags&512&&fi(t)}catch(g){X(t,t.return,g)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Ys(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Xs(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wo(4,t)}catch(s){X(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){X(t,o,s)}}var l=t.return;try{fi(t)}catch(s){X(t,l,s)}break;case 5:var i=t.return;try{fi(t)}catch(s){X(t,i,s)}}}catch(s){X(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var zg=Math.ceil,Eo=ut.ReactCurrentDispatcher,ca=ut.ReactCurrentOwner,ze=ut.ReactCurrentBatchConfig,B=0,ce=null,te=null,fe=0,Ee=0,pn=Nt(0),le=0,wr=null,Gt=0,Vo=0,da=0,er=null,ke=null,fa=0,_n=1/0,et=null,jo=!1,mi=null,Ct=null,Hr=!1,yt=null,Ro=0,tr=0,hi=null,lo=-1,io=0;function Se(){return B&6?J():lo!==-1?lo:lo=J()}function _t(e){return e.mode&1?B&2&&fe!==0?fe&-fe:Sg.transition!==null?(io===0&&(io=sc()),io):(e=F,e!==0||(e=window.event,e=e===void 0?16:mc(e.type)),e):1}function Qe(e,t,n,r){if(50<tr)throw tr=0,hi=null,Error(C(185));kr(e,n,r),(!(B&2)||e!==ce)&&(e===ce&&(!(B&2)&&(Vo|=n),le===4&&ht(e,fe)),Te(e,r),n===1&&B===0&&!(t.mode&1)&&(_n=J()+500,Io&&$t()))}function Te(e,t){var n=e.callbackNode;Sp(e,t);var r=po(e,e===ce?fe:0);if(r===0)n!==null&&ls(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ls(n),t===1)e.tag===0?wg(Zs.bind(null,e)):Ac(Zs.bind(null,e)),mg(function(){!(B&6)&&$t()}),n=null;else{switch(uc(r)){case 1:n=Fi;break;case 4:n=ic;break;case 16:n=fo;break;case 536870912:n=ac;break;default:n=fo}n=Nd(n,Cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cd(e,t){if(lo=-1,io=0,B&6)throw Error(C(327));var n=e.callbackNode;if(wn()&&e.callbackNode!==n)return null;var r=po(e,e===ce?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Lo(e,r);else{t=r;var o=B;B|=2;var l=Td();(ce!==e||fe!==t)&&(et=null,_n=J()+500,Ut(e,t));do try{Ig();break}catch(a){_d(e,a)}while(!0);Zi(),Eo.current=l,B=o,te!==null?t=0:(ce=null,fe=0,t=le)}if(t!==0){if(t===2&&(o=Wl(e),o!==0&&(r=o,t=vi(e,o))),t===1)throw n=wr,Ut(e,0),ht(e,r),Te(e,J()),n;if(t===6)ht(e,r);else{if(o=e.current.alternate,!(r&30)&&!Fg(o)&&(t=Lo(e,r),t===2&&(l=Wl(e),l!==0&&(r=l,t=vi(e,l))),t===1))throw n=wr,Ut(e,0),ht(e,r),Te(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Ft(e,ke,et);break;case 3:if(ht(e,r),(r&130023424)===r&&(t=fa+500-J(),10<t)){if(po(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Zl(Ft.bind(null,e,ke,et),t);break}Ft(e,ke,et);break;case 4:if(ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-He(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zg(r/1960))-r,10<r){e.timeoutHandle=Zl(Ft.bind(null,e,ke,et),r);break}Ft(e,ke,et);break;case 5:Ft(e,ke,et);break;default:throw Error(C(329))}}}return Te(e,J()),e.callbackNode===n?Cd.bind(null,e):null}function vi(e,t){var n=er;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=Lo(e,t),e!==2&&(t=ke,ke=n,t!==null&&yi(t)),e}function yi(e){ke===null?ke=e:ke.push.apply(ke,e)}function Fg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ge(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ht(e,t){for(t&=~da,t&=~Vo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function Zs(e){if(B&6)throw Error(C(327));wn();var t=po(e,0);if(!(t&1))return Te(e,J()),null;var n=Lo(e,t);if(e.tag!==0&&n===2){var r=Wl(e);r!==0&&(t=r,n=vi(e,r))}if(n===1)throw n=wr,Ut(e,0),ht(e,t),Te(e,J()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,ke,et),Te(e,J()),null}function pa(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(_n=J()+500,Io&&$t())}}function Kt(e){yt!==null&&yt.tag===0&&!(B&6)&&wn();var t=B;B|=1;var n=ze.transition,r=F;try{if(ze.transition=null,F=1,e)return e()}finally{F=r,ze.transition=n,B=t,!(B&6)&&$t()}}function ga(){Ee=pn.current,V(pn)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gg(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Ki(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yo();break;case 3:bn(),V(Ce),V(ye),ra();break;case 5:na(r);break;case 4:bn();break;case 13:V(G);break;case 19:V(G);break;case 10:Ji(r.type._context);break;case 22:case 23:ga()}n=n.return}if(ce=e,te=e=Tt(e.current,null),fe=Ee=t,le=0,wr=null,da=Vo=Gt=0,ke=er=null,It!==null){for(t=0;t<It.length;t++)if(n=It[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}It=null}return e}function _d(e,t){do{var n=te;try{if(Zi(),no.current=To,_o){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}_o=!1}if(Qt=0,ue=oe=K=null,Jn=!1,hr=0,ca.current=null,n===null||n.return===null){le=1,wr=t,te=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,p=a,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Fs(i);if(v!==null){v.flags&=-257,Os(v,i,a,l,t),v.mode&1&&zs(l,c,t),t=v,s=c;var w=t.updateQueue;if(w===null){var S=new Set;S.add(s),t.updateQueue=S}else w.add(s);break e}else{if(!(t&1)){zs(l,c,t),ma();break e}s=Error(C(426))}}else if(H&&a.mode&1){var P=Fs(i);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Os(P,i,a,l,t),Yi(Cn(s,a));break e}}l=s=Cn(s,a),le!==4&&(le=2),er===null?er=[l]:er.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=ud(l,s,t);Ls(l,m);break e;case 1:a=s;var f=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ct===null||!Ct.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=cd(l,a,t);Ls(l,x);break e}}l=l.return}while(l!==null)}jd(n)}catch(b){t=b,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Td(){var e=Eo.current;return Eo.current=To,e===null?To:e}function ma(){(le===0||le===3||le===2)&&(le=4),ce===null||!(Gt&268435455)&&!(Vo&268435455)||ht(ce,fe)}function Lo(e,t){var n=B;B|=2;var r=Td();(ce!==e||fe!==t)&&(et=null,Ut(e,t));do try{Og();break}catch(o){_d(e,o)}while(!0);if(Zi(),B=n,Eo.current=r,te!==null)throw Error(C(261));return ce=null,fe=0,le}function Og(){for(;te!==null;)Ed(te)}function Ig(){for(;te!==null&&!dp();)Ed(te)}function Ed(e){var t=Ld(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?jd(e):te=t,ca.current=null}function jd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$g(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,te=null;return}}else if(n=Ng(n,t,Ee),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);le===0&&(le=5)}function Ft(e,t,n){var r=F,o=ze.transition;try{ze.transition=null,F=1,Dg(e,t,n,r)}finally{ze.transition=o,F=r}return null}function Dg(e,t,n,r){do wn();while(yt!==null);if(B&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(xp(e,l),e===ce&&(te=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hr||(Hr=!0,Nd(fo,function(){return wn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=ze.transition,ze.transition=null;var i=F;F=1;var a=B;B|=4,ca.current=null,Mg(e,n),kd(n,e),ag(Yl),go=!!Kl,Yl=Kl=null,e.current=n,Bg(n),fp(),B=a,F=i,ze.transition=l}else e.current=n;if(Hr&&(Hr=!1,yt=e,Ro=o),l=e.pendingLanes,l===0&&(Ct=null),mp(n.stateNode),Te(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(jo)throw jo=!1,e=mi,mi=null,e;return Ro&1&&e.tag!==0&&wn(),l=e.pendingLanes,l&1?e===hi?tr++:(tr=0,hi=e):tr=0,$t(),null}function wn(){if(yt!==null){var e=uc(Ro),t=ze.transition,n=F;try{if(ze.transition=null,F=16>e?16:e,yt===null)var r=!1;else{if(e=yt,yt=null,Ro=0,B&6)throw Error(C(331));var o=B;for(B|=4,j=e.current;j!==null;){var l=j,i=l.child;if(j.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(j=c;j!==null;){var p=j;switch(p.tag){case 0:case 11:case 15:qn(8,p,l)}var d=p.child;if(d!==null)d.return=p,j=d;else for(;j!==null;){p=j;var g=p.sibling,v=p.return;if(Sd(p),p===c){j=null;break}if(g!==null){g.return=v,j=g;break}j=v}}}var w=l.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}j=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,j=i;else e:for(;j!==null;){if(l=j,l.flags&2048)switch(l.tag){case 0:case 11:case 15:qn(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,j=m;break e}j=l.return}}var f=e.current;for(j=f;j!==null;){i=j;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,j=h;else e:for(i=f;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wo(9,a)}}catch(b){X(a,a.return,b)}if(a===i){j=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,j=x;break e}j=a.return}}if(B=o,$t(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Mo,e)}catch{}r=!0}return r}finally{F=n,ze.transition=t}}return!1}function Js(e,t,n){t=Cn(n,t),t=ud(e,t,1),e=bt(e,t,1),t=Se(),e!==null&&(kr(e,1,t),Te(e,t))}function X(e,t,n){if(e.tag===3)Js(e,e,n);else for(;t!==null;){if(t.tag===3){Js(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=Cn(n,e),e=cd(t,e,1),t=bt(t,e,1),e=Se(),t!==null&&(kr(t,1,e),Te(t,e));break}}t=t.return}}function Ug(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(fe&n)===n&&(le===4||le===3&&(fe&130023424)===fe&&500>J()-fa?Ut(e,0):da|=n),Te(e,t)}function Rd(e,t){t===0&&(e.mode&1?(t=Mr,Mr<<=1,!(Mr&130023424)&&(Mr=4194304)):t=1);var n=Se();e=at(e,t),e!==null&&(kr(e,t,n),Te(e,n))}function Wg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rd(e,n)}function Vg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Rd(e,n)}var Ld;Ld=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,Lg(e,t,n);be=!!(e.flags&131072)}else be=!1,H&&t.flags&1048576&&Mc(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oo(e,t),e=t.pendingProps;var o=xn(t,ye.current);yn(t,n),o=la(null,t,r,e,o,n);var l=ia();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(l=!0,wo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ea(t),o.updater=Uo,t.stateNode=o,o._reactInternals=t,oi(t,r,e,n),t=ai(null,t,r,!0,l,n)):(t.tag=0,H&&l&&Gi(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Qg(r),e=Ue(r,e),o){case 0:t=ii(null,t,r,e,n);break e;case 1:t=Us(null,t,r,e,n);break e;case 11:t=Is(null,t,r,e,n);break e;case 14:t=Ds(null,t,r,Ue(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),ii(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Us(e,t,r,o,n);case 3:e:{if(gd(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Dc(e,t),bo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Cn(Error(C(423)),t),t=Ws(e,t,r,n,o);break e}else if(r!==o){o=Cn(Error(C(424)),t),t=Ws(e,t,r,n,o);break e}else for(je=kt(t.stateNode.containerInfo.firstChild),Re=t,H=!0,Ve=null,n=Oc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pn(),r===o){t=st(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Uc(t),e===null&&ti(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Xl(r,o)?i=null:l!==null&&Xl(r,l)&&(t.flags|=32),pd(e,t),we(e,t,i,n),t.child;case 6:return e===null&&ti(t),null;case 13:return md(e,t,n);case 4:return ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Is(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,U(Po,r._currentValue),r._currentValue=i,l!==null)if(Ge(l.value,i)){if(l.children===o.children&&!Ce.current){t=st(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=ot(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ni(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(C(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ni(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,yn(t,n),o=Fe(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=Ue(r,t.pendingProps),o=Ue(r.type,o),Ds(e,t,r,o,n);case 15:return dd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),oo(e,t),t.tag=1,_e(r)?(e=!0,wo(t)):e=!1,yn(t,n),sd(t,r,o),oi(t,r,o,n),ai(null,t,r,!0,e,n);case 19:return hd(e,t,n);case 22:return fd(e,t,n)}throw Error(C(156,t.tag))};function Nd(e,t){return lc(e,t)}function Hg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new Hg(e,t,n,r)}function ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qg(e){if(typeof e=="function")return ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mi)return 11;if(e===Bi)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ao(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")ha(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case nn:return Wt(n.children,o,l,t);case Ai:i=8,o|=8;break;case El:return e=Be(12,n,t,o|2),e.elementType=El,e.lanes=l,e;case jl:return e=Be(13,n,t,o),e.elementType=jl,e.lanes=l,e;case Rl:return e=Be(19,n,t,o),e.elementType=Rl,e.lanes=l,e;case Uu:return Ho(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Iu:i=10;break e;case Du:i=9;break e;case Mi:i=11;break e;case Bi:i=14;break e;case pt:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Be(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Wt(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function Ho(e,t,n,r){return e=Be(22,e,r,t),e.elementType=Uu,e.lanes=n,e.stateNode={isHidden:!1},e}function kl(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function bl(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function va(e,t,n,r,o,l,i,a,s){return e=new Gg(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Be(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(l),e}function Kg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $d(e){if(!e)return Rt;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(_e(n))return $c(e,n,t)}return t}function Ad(e,t,n,r,o,l,i,a,s){return e=va(n,r,!0,e,o,l,i,a,s),e.context=$d(null),n=e.current,r=Se(),o=_t(n),l=ot(r,o),l.callback=t??null,bt(n,l,o),e.current.lanes=o,kr(e,o,r),Te(e,r),e}function Qo(e,t,n,r){var o=t.current,l=Se(),i=_t(o);return n=$d(n),t.context===null?t.context=n:t.pendingContext=n,t=ot(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bt(o,t,i),e!==null&&(Qe(e,o,i,l),to(e,o,i)),i}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ya(e,t){qs(e,t),(e=e.alternate)&&qs(e,t)}function Yg(){return null}var Md=typeof reportError=="function"?reportError:function(e){console.error(e)};function wa(e){this._internalRoot=e}Go.prototype.render=wa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Qo(e,t,null,null)};Go.prototype.unmount=wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){Qo(null,e,null,null)}),t[it]=null}};function Go(e){this._internalRoot=e}Go.prototype.unstable_scheduleHydration=function(e){if(e){var t=fc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mt.length&&t!==0&&t<mt[n].priority;n++);mt.splice(n,0,e),n===0&&gc(e)}};function Sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eu(){}function Xg(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=No(i);l.call(c)}}var i=Ad(t,r,e,0,null,!1,!1,"",eu);return e._reactRootContainer=i,e[it]=i.current,dr(e.nodeType===8?e.parentNode:e),Kt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=No(s);a.call(c)}}var s=va(e,0,!1,null,null,!1,!1,"",eu);return e._reactRootContainer=s,e[it]=s.current,dr(e.nodeType===8?e.parentNode:e),Kt(function(){Qo(t,s,n,r)}),s}function Yo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=No(i);a.call(s)}}Qo(t,i,e,o)}else i=Xg(n,t,e,o,r);return No(i)}cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vn(t.pendingLanes);n!==0&&(Oi(t,n|1),Te(t,J()),!(B&6)&&(_n=J()+500,$t()))}break;case 13:Kt(function(){var r=at(e,1);if(r!==null){var o=Se();Qe(r,e,1,o)}}),ya(e,1)}};Ii=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=Se();Qe(t,e,134217728,n)}ya(e,134217728)}};dc=function(e){if(e.tag===13){var t=_t(e),n=at(e,t);if(n!==null){var r=Se();Qe(n,e,t,r)}ya(e,t)}};fc=function(){return F};pc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Il=function(e,t,n){switch(t){case"input":if($l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Oo(r);if(!o)throw Error(C(90));Vu(r),$l(r,o)}}}break;case"textarea":Qu(e,n);break;case"select":t=n.value,t!=null&&gn(e,!!n.multiple,t,!1)}};qu=pa;ec=Kt;var Zg={usingClientEntryPoint:!1,Events:[Cr,an,Oo,Zu,Ju,pa]},Dn={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jg={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rc(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||Yg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Mo=Qr.inject(Jg),Je=Qr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zg;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sa(t))throw Error(C(200));return Kg(e,t,null,n)};Ne.createRoot=function(e,t){if(!Sa(e))throw Error(C(299));var n=!1,r="",o=Md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=va(e,1,!1,null,null,n,!1,r,o),e[it]=t.current,dr(e.nodeType===8?e.parentNode:e),new wa(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=rc(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Kt(e)};Ne.hydrate=function(e,t,n){if(!Ko(t))throw Error(C(200));return Yo(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Sa(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Md;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Ad(t,null,e,1,n??null,o,!1,l,i),e[it]=t.current,dr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Go(t)};Ne.render=function(e,t,n){if(!Ko(t))throw Error(C(200));return Yo(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Ko(e))throw Error(C(40));return e._reactRootContainer?(Kt(function(){Yo(null,null,e,!1,function(){e._reactRootContainer=null,e[it]=null})}),!0):!1};Ne.unstable_batchedUpdates=pa;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ko(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Yo(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Bd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bd)}catch(e){console.error(e)}}Bd(),Bu.exports=Ne;var qg=Bu.exports,tu=qg;_l.createRoot=tu.createRoot,_l.hydrateRoot=tu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sr(){return Sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sr.apply(null,arguments)}var wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wt||(wt={}));const nu="popstate";function em(e){e===void 0&&(e={});function t(o,l){let{pathname:i="/",search:a="",hash:s=""}=Zt(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),wi("",{pathname:i,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let i=o.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let s=o.location.href,c=s.indexOf("#");a=c===-1?s:s.slice(0,c)}return a+"#"+(typeof l=="string"?l:$o(l))}function r(o,l){xa(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return nm(t,n,r,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function tm(){return Math.random().toString(36).substr(2,8)}function ru(e,t){return{usr:e.state,key:e.key,idx:t}}function wi(e,t,n,r){return n===void 0&&(n=null),Sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zt(t):t,{state:n,key:t&&t.key||r||tm()})}function $o(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function nm(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=wt.Pop,s=null,c=p();c==null&&(c=0,i.replaceState(Sr({},i.state,{idx:c}),""));function p(){return(i.state||{idx:null}).idx}function d(){a=wt.Pop;let P=p(),m=P==null?null:P-c;c=P,s&&s({action:a,location:S.location,delta:m})}function g(P,m){a=wt.Push;let f=wi(S.location,P,m);n&&n(f,P),c=p()+1;let h=ru(f,c),x=S.createHref(f);try{i.pushState(h,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(x)}l&&s&&s({action:a,location:S.location,delta:1})}function v(P,m){a=wt.Replace;let f=wi(S.location,P,m);n&&n(f,P),c=p();let h=ru(f,c),x=S.createHref(f);i.replaceState(h,"",x),l&&s&&s({action:a,location:S.location,delta:0})}function w(P){let m=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof P=="string"?P:$o(P);return f=f.replace(/ $/,"%20"),q(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let S={get action(){return a},get location(){return e(o,i)},listen(P){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(nu,d),s=P,()=>{o.removeEventListener(nu,d),s=null}},createHref(P){return t(o,P)},createURL:w,encodeLocation(P){let m=w(P);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:v,go(P){return i.go(P)}};return S}var ou;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ou||(ou={}));function rm(e,t,n){return n===void 0&&(n="/"),om(e,t,n)}function om(e,t,n,r){let o=typeof t=="string"?Zt(t):t,l=Pa(o.pathname||"/",n);if(l==null)return null;let i=zd(e);lm(i);let a=null,s=vm(l);for(let c=0;a==null&&c<i.length;++c)a=gm(i[c],s);return a}function zd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Et([r,s.relativePath]),p=n.concat(s);l.children&&l.children.length>0&&(q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),zd(l.children,t,p,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:fm(c,l.index),routesMeta:p})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of Fd(l.path))o(l,i,s)}),t}function Fd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=Fd(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function lm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:pm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const im=/^:[\w-]+$/,am=3,sm=2,um=1,cm=10,dm=-2,lu=e=>e==="*";function fm(e,t){let n=e.split("/"),r=n.length;return n.some(lu)&&(r+=dm),t&&(r+=sm),n.filter(o=>!lu(o)).reduce((o,l)=>o+(im.test(l)?am:l===""?um:cm),r)}function pm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function gm(e,t,n){let{routesMeta:r}=e,o={},l="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,p=l==="/"?t:t.slice(l.length)||"/",d=mm({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},p),g=s.route;if(!d)return null;Object.assign(o,d.params),i.push({params:o,pathname:Et([l,d.pathname]),pathnameBase:Sm(Et([l,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(l=Et([l,d.pathnameBase]))}return i}function mm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=hm(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,p,d)=>{let{paramName:g,isOptional:v}=p;if(g==="*"){let S=a[d]||"";i=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const w=a[d];return v&&!w?c[g]=void 0:c[g]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:i,pattern:e}}function hm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),xa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function vm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Pa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ym(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Zt(e):e,l;return n?(n=Od(n),n.startsWith("/")?l=iu(n.substring(1),"/"):l=iu(n,t)):l=t,{pathname:l,search:xm(r),hash:Pm(o)}}function iu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Cl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ka(e,t){let n=wm(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ba(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Zt(e):(o=Sr({},e),q(!o.pathname||!o.pathname.includes("?"),Cl("?","pathname","search",o)),q(!o.pathname||!o.pathname.includes("#"),Cl("#","pathname","hash",o)),q(!o.search||!o.search.includes("#"),Cl("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let d=t.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),d-=1;o.pathname=g.join("/")}a=d>=0?t[d]:"/"}let s=ym(o,a),c=i&&i!=="/"&&i.endsWith("/"),p=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||p)&&(s.pathname+="/"),s}const Od=e=>e.replace(/\/\/+/g,"/"),Et=e=>Od(e.join("/")),Sm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function km(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Id=["post","put","patch","delete"];new Set(Id);const bm=["get",...Id];new Set(bm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xr(){return xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xr.apply(null,arguments)}const Ca=y.createContext(null),Cm=y.createContext(null),At=y.createContext(null),Xo=y.createContext(null),ct=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Dd=y.createContext(null);function _m(e,t){let{relative:n}=t===void 0?{}:t;Ln()||q(!1);let{basename:r,navigator:o}=y.useContext(At),{hash:l,pathname:i,search:a}=Vd(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:Et([r,i])),o.createHref({pathname:s,search:a,hash:l})}function Ln(){return y.useContext(Xo)!=null}function Nn(){return Ln()||q(!1),y.useContext(Xo).location}function Ud(e){y.useContext(At).static||y.useLayoutEffect(e)}function Wd(){let{isDataRoute:e}=y.useContext(ct);return e?Im():Tm()}function Tm(){Ln()||q(!1);let e=y.useContext(Ca),{basename:t,future:n,navigator:r}=y.useContext(At),{matches:o}=y.useContext(ct),{pathname:l}=Nn(),i=JSON.stringify(ka(o,n.v7_relativeSplatPath)),a=y.useRef(!1);return Ud(()=>{a.current=!0}),y.useCallback(function(c,p){if(p===void 0&&(p={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=ba(c,JSON.parse(i),l,p.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Et([t,d.pathname])),(p.replace?r.replace:r.push)(d,p.state,p)},[t,r,i,l,e])}function Em(){let{matches:e}=y.useContext(ct),t=e[e.length-1];return t?t.params:{}}function Vd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(At),{matches:o}=y.useContext(ct),{pathname:l}=Nn(),i=JSON.stringify(ka(o,r.v7_relativeSplatPath));return y.useMemo(()=>ba(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function jm(e,t){return Rm(e,t)}function Rm(e,t,n,r){Ln()||q(!1);let{navigator:o}=y.useContext(At),{matches:l}=y.useContext(ct),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let c=Nn(),p;if(t){var d;let P=typeof t=="string"?Zt(t):t;s==="/"||(d=P.pathname)!=null&&d.startsWith(s)||q(!1),p=P}else p=c;let g=p.pathname||"/",v=g;if(s!=="/"){let P=s.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let w=rm(e,{pathname:v}),S=Mm(w&&w.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:Et([s,o.encodeLocation?o.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?s:Et([s,o.encodeLocation?o.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,n,r);return t&&S?y.createElement(Xo.Provider,{value:{location:xr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:wt.Pop}},S):S}function Lm(){let e=Om(),t=km(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:o},n):null,null)}const Nm=y.createElement(Lm,null);class $m extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(ct.Provider,{value:this.props.routeContext},y.createElement(Dd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Am(e){let{routeContext:t,match:n,children:r}=e,o=y.useContext(Ca);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(ct.Provider,{value:t},r)}function Mm(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let p=i.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);p>=0||q(!1),i=i.slice(0,Math.min(i.length,p+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<i.length;p++){let d=i[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=p),d.route.id){let{loaderData:g,errors:v}=n,w=d.route.loader&&g[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||w){s=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((p,d,g)=>{let v,w=!1,S=null,P=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,S=d.route.errorElement||Nm,s&&(c<0&&g===0?(Dm("route-fallback"),w=!0,P=null):c===g&&(w=!0,P=d.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,g+1)),f=()=>{let h;return v?h=S:w?h=P:d.route.Component?h=y.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=p,y.createElement(Am,{match:d,routeContext:{outlet:p,matches:m,isDataRoute:n!=null},children:h})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?y.createElement($m,{location:n.location,revalidation:n.revalidation,component:S,error:v,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Hd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hd||{}),Qd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qd||{});function Bm(e){let t=y.useContext(Ca);return t||q(!1),t}function zm(e){let t=y.useContext(Cm);return t||q(!1),t}function Fm(e){let t=y.useContext(ct);return t||q(!1),t}function Gd(e){let t=Fm(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function Om(){var e;let t=y.useContext(Dd),n=zm(),r=Gd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Im(){let{router:e}=Bm(Hd.UseNavigateStable),t=Gd(Qd.UseNavigateStable),n=y.useRef(!1);return Ud(()=>{n.current=!0}),y.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,xr({fromRouteId:t},l)))},[e,t])}const au={};function Dm(e,t,n){au[e]||(au[e]=!0)}function Um(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Si(e){let{to:t,replace:n,state:r,relative:o}=e;Ln()||q(!1);let{future:l,static:i}=y.useContext(At),{matches:a}=y.useContext(ct),{pathname:s}=Nn(),c=Wd(),p=ba(t,ka(a,l.v7_relativeSplatPath),s,o==="path"),d=JSON.stringify(p);return y.useEffect(()=>c(JSON.parse(d),{replace:n,state:r,relative:o}),[c,d,o,n,r]),null}function Qn(e){q(!1)}function Wm(e){let{basename:t="/",children:n=null,location:r,navigationType:o=wt.Pop,navigator:l,static:i=!1,future:a}=e;Ln()&&q(!1);let s=t.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:s,navigator:l,static:i,future:xr({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=Zt(r));let{pathname:p="/",search:d="",hash:g="",state:v=null,key:w="default"}=r,S=y.useMemo(()=>{let P=Pa(p,s);return P==null?null:{location:{pathname:P,search:d,hash:g,state:v,key:w},navigationType:o}},[s,p,d,g,v,w,o]);return S==null?null:y.createElement(At.Provider,{value:c},y.createElement(Xo.Provider,{children:n,value:S}))}function Vm(e){let{children:t,location:n}=e;return jm(xi(t),n)}new Promise(()=>{});function xi(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let l=[...t,o];if(r.type===y.Fragment){n.push.apply(n,xi(r.props.children,l));return}r.type!==Qn&&q(!1),!r.props.index||!r.props.children||q(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=xi(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pi(){return Pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pi.apply(null,arguments)}function Hm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Qm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gm(e,t){return e.button===0&&(!t||t==="_self")&&!Qm(e)}const Km=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ym="6";try{window.__reactRouterVersion=Ym}catch{}const Xm="startTransition",su=Uf[Xm];function Zm(e){let{basename:t,children:n,future:r,window:o}=e,l=y.useRef();l.current==null&&(l.current=em({window:o,v5Compat:!0}));let i=l.current,[a,s]=y.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},p=y.useCallback(d=>{c&&su?su(()=>s(d)):s(d)},[s,c]);return y.useLayoutEffect(()=>i.listen(p),[i,p]),y.useEffect(()=>Um(r),[r]),y.createElement(Wm,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const Jm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ki=y.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:c,preventScrollReset:p,viewTransition:d}=t,g=Hm(t,Km),{basename:v}=y.useContext(At),w,S=!1;if(typeof c=="string"&&qm.test(c)&&(w=c,Jm))try{let h=new URL(window.location.href),x=c.startsWith("//")?new URL(h.protocol+c):new URL(c),b=Pa(x.pathname,v);x.origin===h.origin&&b!=null?c=b+x.search+x.hash:S=!0}catch{}let P=_m(c,{relative:o}),m=eh(c,{replace:i,state:a,target:s,preventScrollReset:p,relative:o,viewTransition:d});function f(h){r&&r(h),h.defaultPrevented||m(h)}return y.createElement("a",Pi({},g,{href:w||P,onClick:S||l?r:f,ref:n,target:s}))});var uu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(uu||(uu={}));var cu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(cu||(cu={}));function eh(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:a}=t===void 0?{}:t,s=Wd(),c=Nn(),p=Vd(e,{relative:i});return y.useCallback(d=>{if(Gm(d,n)){d.preventDefault();let g=r!==void 0?r:$o(c)===$o(p);s(e,{replace:g,state:o,preventScrollReset:l,relative:i,viewTransition:a})}},[c,s,p,r,o,n,e,l,i,a])}const th="https://github.com/frankvane/vane-components";class nh extends En.Component{constructor(){super(...arguments);Qa(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?u.jsxs("div",{className:"crash",role:"alert",children:[u.jsx("h3",{children:"这个页面炸了"}),u.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),u.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Kd(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function rh({demos:e,pathname:t}){var s;const{groups:n,entries:r,label:o}=e,l=(s=r.find(c=>t===`/demo/${c.meta.slug}`))==null?void 0:s.meta.group,[i,a]=y.useState(()=>{var p;const c=(p=n[0])==null?void 0:p.key;return Object.fromEntries(n.map(d=>[d.key,d.key===(l??c)]))});return y.useEffect(()=>{l&&a(c=>c[l]?c:{...c,[l]:!0})},[l]),u.jsxs("div",{className:"nav-section",children:[u.jsxs("div",{className:"nav-section-head",children:[u.jsx("span",{children:o}),u.jsxs("code",{children:[r.length," demos"]})]}),n.map(c=>{const p=r.filter(g=>g.meta.group===c.key);if(p.length===0)return null;const d=i[c.key]??!1;return u.jsxs("div",{className:"nav-group",children:[u.jsxs("button",{type:"button",className:`nav-group-head${l===c.key?" is-current":""}`,onClick:()=>a(g=>({...g,[c.key]:!d})),"aria-expanded":d,children:[u.jsx("span",{className:`nav-caret${d?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,u.jsx("code",{children:p.length})]}),d?u.jsx("div",{className:"nav-list",children:p.map(g=>u.jsxs(ki,{to:`/demo/${g.meta.slug}`,className:`nav-sub${t===`/demo/${g.meta.slug}`?" is-active":""}`,children:[u.jsx("em",{"aria-hidden":!0,children:Kd(e,g)}),g.meta.title]},g.meta.slug))}):null]},c.key)})]})}function oh({demos:e}){var a;const{slug:t}=Em(),{entries:n,detail:r}=e,o=t?n.find(s=>s.meta.slug===t):void 0,l=(a=n[0])==null?void 0:a.meta.slug;if(!o)return u.jsx(Si,{to:l?`/demo/${l}`:"/",replace:!0});const i=n.indexOf(o)+1;return u.jsx(En.Fragment,{children:r(o,i)},o.meta.slug)}function lh({config:e}){var d,g;const{pathname:t}=Nn(),[n,r]=y.useState(!1),[o,l]=y.useState(!1);y.useEffect(()=>r(!1),[t]);const i=y.useCallback(()=>l(v=>!v),[]);y.useEffect(()=>{const v=w=>{const S=w.target,P=S&&(S.tagName==="INPUT"||S.tagName==="TEXTAREA"||S.isContentEditable);w.key==="Escape"&&r(!1),!P&&(w.key==="g"||w.key==="G")&&!w.metaKey&&!w.ctrlKey&&l(m=>!m)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]);const a=e.demos,s=(d=a.entries[0])==null?void 0:d.meta.slug,c=y.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const v=t.replace(/^\/demo\/?/,""),w=a.entries.find(S=>S.meta.slug===v);return w?`demo ${Kd(a,w)} · ${w.meta.title}`:"demo · 逐项示例"},[t,e,a]),p=y.useMemo(()=>e.nav.map((v,w)=>({...v,no:String(w+1).padStart(2,"0")})),[e.nav]);return u.jsxs("div",{className:`shell${n?" is-nav-open":""}${o?" is-guides":""}`,children:[u.jsx("a",{className:"skip-link",href:"#main",onClick:v=>{v.preventDefault();const w=document.getElementById("main");w==null||w.setAttribute("tabindex","-1"),w==null||w.focus(),w==null||w.scrollIntoView({block:"start"})},children:"跳到内容"}),u.jsxs("aside",{className:"side","aria-label":"站点导航",children:[u.jsxs(ki,{to:"/",className:"brand",children:[u.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),u.jsxs("span",{children:[u.jsx("strong",{children:e.pkg}),u.jsx("em",{children:e.subtitle})]})]}),u.jsxs("nav",{children:[p.map(v=>u.jsxs(ki,{to:v.to,className:`nav-item${t===v.to?" is-active":""}`,"aria-current":t===v.to?"page":void 0,children:[u.jsx("em",{"aria-hidden":!0,children:v.no}),u.jsx("span",{children:v.label}),v.hint?u.jsx("code",{children:v.hint}):null]},v.to)),u.jsx(rh,{demos:e.demos,pathname:t})]}),u.jsxs("div",{className:"side-foot",children:[u.jsx("p",{children:e.footer[0]}),u.jsx("p",{className:"muted",children:e.footer[1]})]})]}),u.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>r(!1)}),u.jsxs("div",{className:"main",id:"main",children:[u.jsxs("header",{className:"topbar",children:[u.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>r(v=>!v),children:u.jsx("span",{"aria-hidden":!0})}),u.jsx("span",{className:"crumb",children:c}),u.jsxs("div",{className:"topbar-right",children:[(g=e.stats)==null?void 0:g.map(v=>u.jsxs("span",{className:"topbar-stat",title:v.title,children:[u.jsx("b",{children:v.value})," ",v.label]},v.label)),u.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:i,title:"显示栏位参考线（快捷键 G）",children:[u.jsx("i",{"aria-hidden":!0}),"guides"]}),u.jsx("a",{className:"topbar-link",href:e.sourceUrl??th,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),u.jsx("div",{className:"guides","aria-hidden":!0}),u.jsx(y.Suspense,{fallback:u.jsx("div",{className:"loading",children:"loading modules…"}),children:u.jsx(nh,{children:u.jsxs(Vm,{children:[e.routes.map(v=>u.jsx(Qn,{path:v.path,element:v.element},v.path)),u.jsx(Qn,{path:"/demo",element:u.jsx(Si,{to:s?`/demo/${s}`:"/",replace:!0})}),u.jsx(Qn,{path:"/demo/:slug",element:u.jsx(oh,{demos:e.demos})}),u.jsx(Qn,{path:"*",element:u.jsx(Si,{to:"/",replace:!0})})]})})})]})]})}function ih({config:e}){return u.jsx(Zm,{children:u.jsx(lh,{config:e})})}const ah="modulepreload",sh=function(e,t){return new URL(e,t).href},du={},_a=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=sh(c,r),c in du)return;du[c]=!0;const p=c.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(!!r)for(let w=i.length-1;w>=0;w--){const S=i[w];if(S.href===c&&(!p||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":ah,p||(v.as="script"),v.crossOrigin="",v.href=c,s&&v.setAttribute("nonce",s),document.head.appendChild(v),p)return new Promise((w,S)=>{v.addEventListener("load",w),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return o.then(i=>{for(const a of i||[])a.status==="rejected"&&l(a.reason);return t().catch(l)})};function uh(){const e=new Map,t=new Map;let n=0;const r=(a,s)=>{const c=e.get(a);if(c){if(n>=50){console.warn(`[PluginBus] emit depth exceeded: "${a}"`);return}n+=1;for(const p of[...c])try{p(s)}catch(d){console.warn(`[PluginBus] handler error for event "${a}"`,d)}n-=1}},o=(a,s)=>{let c=e.get(a);c||(c=new Set,e.set(a,c));const p=s;return c.add(p),()=>{c==null||c.delete(p)}},l=(a,s)=>{const c=p=>{try{s(p)}finally{i(a,c)}};return o(a,c)},i=(a,s)=>{var c;if(!s){e.delete(a);return}(c=e.get(a))==null||c.delete(s)};return{emit:r,on:o,once:l,off:i,getData:a=>t.get(a),setData:(a,s)=>{const c=t.get(a);t.set(a,s),c!==s&&r(a,s)},deleteData:a=>{const s=t.has(a);t.delete(a),s&&r(a,void 0)},hasData:a=>t.has(a),getAll:()=>{const a=Object.create(null);return t.forEach((s,c)=>{a[c]=s}),a},clear:()=>{e.clear(),t.clear()}}}function ch(e){const t=new Map(e.map(a=>[a.name,a])),n=[];for(const a of e)for(const s of a.dependencies??[])t.has(s)||n.push(`${a.name} -> ${s}`);const r=[],o=new Set,l=[...e],i=a=>(a.dependencies??[]).every(s=>o.has(s)||!t.has(s));for(;l.length>0;){const a=l.filter(i);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${l.map(c=>c.name).join(" <-> ")}`);let s=a[0];for(const c of a)(c.priority??0)>(s.priority??0)&&(s=c);r.push(s),o.add(s.name),l.splice(l.indexOf(s),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),r}function Yd(e,t){try{return ch(e)}catch(n){return t==null||t(n),e}}async function dh(e,t={}){const{timeout:n=3e3,name:r="anonymous",hook:o="unknown"}=t;if(!n||n<=0)return await e();let l;const i=new Promise((a,s)=>{l=setTimeout(()=>{s(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),i])}finally{l&&clearTimeout(l)}}const fh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function ph(e={}){const t=e.logger??console,n=e.sandbox??!0,r=e.timeout??3e3,o=[];let l=[];const i=new Map,a=new Map,s=new Set;let c=0,p=null,d=0;const g=(k,_,M)=>{o.push({plugin:k,hook:_,error:M})},v=()=>{c+=1,p=null},w=(k,_=new Set)=>k.enabled===!1?!1:_.has(k.name)?!0:(_.add(k.name),(k.dependencies??[]).every(M=>{const Z=i.get(M);return!Z||w(Z,_)})),S=()=>{if(p)return p;const k=[...i.values()].filter(_=>w(_)?!0:(g(_.name,"dependencies",new Error("依赖已停用")),!1));return p=Yd(k,_=>g("[order]","resolveDependencyOrder",_))},P=k=>{const _=l.filter(([M])=>!k||M===k).reverse();l=k?l.filter(([M])=>M!==k):[];for(const[,M]of _)try{M()}catch(Z){t.warn("[vane] cleanup failed",Z)}},m=k=>{var _;return Promise.resolve((_=k.destroy)==null?void 0:_.call(k)).catch(M=>t.warn(`[vane] destroy failed: ${k.name}`,M))},f=async(k,_,M,Z,z)=>{var Ke,T;const re=_==="onUnmount";if(_==="onMount"||re){if(s.has(k.name)!==re)return{};re?s.delete(k.name):s.add(k.name)}const dt=(Ke=k.hooks)==null?void 0:Ke[_];if(typeof dt!="function")return{};let Ie;try{const N=()=>dt(M,...Z);Ie=k.sandbox??n?await dh(N,{timeout:k.timeout??r,name:k.name,hook:_}):await N()}catch(N){return z!==c?{}:(g(k.name,_,N),t.warn(`[vane] ${_} failed: ${k.name}`,N),(T=e.onError)==null||T.call(e,k.name,_,N),{stop:_==="onError"})}return z!==c?{}:fh.has(_)&&typeof Ie=="function"?(l.push([k.name,Ie]),{}):{value:Ie}},h=async(k,_,M)=>{const Z=c;for(const z of S()){if(Z!==c)return;const re=await f(z,k,_,M,Z);if(re.stop)return;if(re.value===!1)return!1;if(re.value!==void 0&&re.value!==!0)return re.value}},x=(k,_,...M)=>h(k,_,M),b=k=>{i.get(k.name)&&a.get(k.name)!==k&&(t.warn(`[vane] duplicate plugin, destroy old: ${k.name}`),L(k.name)),i.set(k.name,{...k,enabled:k.enabled??!0}),a.set(k.name,k),s.delete(k.name),v(),k.init&&Promise.resolve(k.init()).catch(_=>{t.warn(`[vane] init failed: ${k.name}`,_)})},E=k=>k.forEach(b),R=k=>{i.delete(k),a.delete(k),s.delete(k),p=null},L=k=>{const _=i.get(k);_&&(v(),P(k),m(_),R(k))};return{register:b,registerAll:E,unregister:L,getPlugin:k=>i.get(k),getAllPlugins:()=>[...i.values()],getEnabledPlugins:()=>[...i.values()].filter(k=>k.enabled!==!1),getExecutionOrder:()=>[...S()],enable:k=>{const _=i.get(k);_&&(_.enabled=!0,p=null)},disable:k=>{const _=i.get(k);_&&(_.enabled=!1,p=null)},has:k=>i.has(k),executeHook:x,clear:()=>{v(),d+=1,P();const k=[...i.values()].map(m);return i.clear(),a.clear(),s.clear(),Promise.all(k).then(()=>{})},getErrors:()=>[...o],align:async(k,_)=>{const M=++d,Z=new Map(k.map(z=>[z.name,z]));for(const z of[...i.keys()]){if(M!==d)return;if(a.get(z)===Z.get(z))continue;const re=i.get(z);v(),await f(re,"onUnmount",_,[],c),P(z),await m(re),R(z)}for(const z of k){if(M!==d)return;a.get(z.name)!==z&&b(z)}},peekOrder:S}}var gh=Object.defineProperty,mh=(e,t,n)=>t in e?gh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hh=(e,t,n)=>mh(e,t+"",n);class Ta extends En.Component{constructor(){super(...arguments),hh(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidUpdate(t){var o,l;const n=t.resetKeys??[],r=this.props.resetKeys??[];this.state.error&&(n.length!==r.length||n.some((i,a)=>!Object.is(i,r[a])))&&((l=(o=this.props).onReset)==null||l.call(o),this.setState({error:null}))}componentDidCatch(t,n){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(o=(r=this.props).onError)==null||o.call(r,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}}let Gr=null;function vh(e=!1){if(Gr&&!e)return Gr;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",l=/iPad|Tablet/i.test(o),i=/Mobile|Android|iPhone/i.test(o),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Gr={type:l?"tablet":i?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:t,viewportHeight:n,isTouchDevice:a,isRetina:r>=2},Gr}function fu(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;const n=Object.keys(e),r=Object.keys(t);return n.length!==r.length?!1:n.every(o=>Object.is(e[o],t[o]))}function yh(e){const{plugins:t,props:n,data:r,initialState:o,containerRef:l,enableDebug:i=!1,managerOptions:a,extendContext:s}=e,c=y.useRef(null),p=l??c,d=y.useRef(null);d.current||(d.current=ph(a));const g=d.current,v=y.useRef(null);v.current||(v.current=uh());const w=v.current,S=y.useRef(new Map),[P,m]=y.useState(o??{}),[,f]=y.useState(0),h=y.useCallback(()=>f(O=>O+1),[]),x=y.useMemo(()=>vh(),[]),b=y.useRef(n);fu(b.current,n)||(b.current=n);const E=b.current,R=y.useRef(r);fu(R.current,r)||(R.current=r);const L=R.current,k=y.useRef(null),_=y.useMemo(()=>{const O={props:E,data:L,bus:w,refs:{container:p,getContainer:()=>p.current},state:P,setState:I=>m(ae=>({...ae,...I})),shared:S.current,deviceInfo:x,forceUpdate:h,getSize:()=>{const I=p.current;return I?{width:I.offsetWidth,height:I.offsetHeight}:{width:0,height:0}},logger:console};return s?s(O):O},[E,L,P,x,w,s]);y.useLayoutEffect(()=>{k.current=_},[_]);const M=y.useRef(t),Z=M.current;Z!==t&&(Z.length!==t.length||t.some((O,I)=>O!==Z[I]))&&(M.current=t);const z=M.current,re=y.useRef(0);y.useLayoutEffect(()=>{const O=++re.current,I=k.current;return g.align(z,I).then(()=>{re.current===O&&(i&&console.debug("[vane/plugin-core] plugins registered:",z.map(ae=>ae.name).join("|")),g.executeHook("onMount",I))}),()=>{re.current+=1}},[z,g,i]),y.useLayoutEffect(()=>()=>{const O=k.current;if(!g.getExecutionOrder().some(I=>{var ae;return typeof((ae=I.hooks)==null?void 0:ae.onUnmount)=="function"})){g.clear();return}g.executeHook("onUnmount",O).finally(()=>g.clear())},[g]);const dt=g.peekOrder(),Ie=y.useRef([]),Ke=y.useMemo(()=>{const O=new Map(z.map(se=>[se.name,se])),I=z.filter(se=>{var Mt;return se.enabled!==!1&&((Mt=g.getPlugin(se.name))==null?void 0:Mt.enabled)!==!1}),ae=dt.length===I.length?dt.map(se=>O.get(se.name)??se):Yd(I),ge=Ie.current;return ge.length===ae.length&&ae.every((se,Mt)=>se===ge[Mt])?ge:(Ie.current=ae,ae)},[z,g,dt]),T=y.useRef(_);T.current=_;const N=y.useCallback((O,I)=>{var se;const ae=T.current;let ge=I;for(const Mt of Ke){const Jo=(se=Mt.hooks)==null?void 0:se[O];if(typeof Jo=="function")try{ge=O==="transformData"?Jo(ae,ge):Jo(ge)}catch(Pf){(ae.logger??console).warn(`[plugin-core] ${Mt.name}.${O} 执行失败，已跳过`,Pf)}}return ge},[Ke]),$=y.useCallback(O=>N("transformProps",O),[N]),Q=y.useCallback(O=>N("transformData",O),[N]),ee=y.useCallback((O,...I)=>g.executeHook(O,k.current,...I),[g]);return{manager:g,bus:w,context:_,state:P,setState:_.setState,execute:ee,transformProps:$,transformData:Q,orderedPlugins:Ke}}y.createContext(null);function Kr(e,t,n){var o,l;if(e.enabled===!1||typeof((o=e.hooks)==null?void 0:o[t])!="function")return!1;const r=(l=e.config)==null?void 0:l.slotPosition;return n==="before"?r==="before":n==="footer"?r===void 0||r==="after"||r==="footer":r===void 0||r==="after"}function wh(e,t){var n,r;return(((n=e.config)==null?void 0:n.order)??0)-(((r=t.config)==null?void 0:r.order)??0)||(t.priority??0)-(e.priority??0)}function Yr(e,t,n){const r=new Set;return e.map(o=>{var l;if(r.has(o.name))return null;r.add(o.name);try{const i=(l=o.hooks)==null?void 0:l[n],a=i==null?void 0:i(t);return a==null?null:u.jsx(Ta,{children:a},`vane-slot-${o.name}`)}catch(i){return console.warn(`[vane/plugin-core] 插件 ${o.name} 的 ${n} 渲染失败`,i),null}})}function Sh(e,t,n){const r={headerBefore:[],overlay:[],headerAfter:[],footer:[]};for(const o of e)Kr(o,"renderHeader","before")?r.headerBefore.push(o):Kr(o,"renderHeader","after")&&r.headerAfter.push(o),Kr(o,"renderOverlay","after")&&r.overlay.push(o),Kr(o,"renderFooter","footer")&&r.footer.push(o);for(const o of Object.keys(r))r[o].sort(wh);return u.jsxs(u.Fragment,{children:[Yr(r.headerBefore,t,"renderHeader"),n,Yr(r.overlay,t,"renderOverlay"),Yr(r.headerAfter,t,"renderHeader"),Yr(r.footer,t,"renderFooter")]})}const xh=["renderBannerArea","renderBioArea","renderStatRow","renderTabBar","renderBadgeArea","renderFollowArea","renderContentArea"],Ea=y.createContext(null);function Ph(e){return e.sort((t,n)=>{var r,o;return(((r=t.config)==null?void 0:r.order)??0)-(((o=n.config)==null?void 0:o.order)??0)||(n.priority??0)-(t.priority??0)})}function kh(e){const t={};for(const n of xh)t[n]=Ph(e.filter(r=>r.enabled!==!1&&typeof r.hooks[n]=="function"));return t}function bh(e,t,n){return e.reduce((r,o)=>{try{const l=o.hooks[n](t);return l==null||r.push(u.jsx(Ta,{children:l},`profile-slot-${o.name}`)),r}catch(l){return console.warn(`[vane-profile] 插件 ${o.name} 的 ${n} 渲染失败`,l),r}},[])}function Bt(e){const t=y.useContext(Ea),n=t?t.slots[e]:null,r=t?t.context:null;return y.useMemo(()=>n&&r?bh(n,r,e):[],[n,r,e])}function Tr(){const e=y.useContext(Ea);return(e==null?void 0:e.context)??null}const ne=y.forwardRef(function(t,n){const{children:r,containerClassName:o,containerStyle:l,containerRefExternal:i}=t,a=y.useRef(null),s=i||a,[,c]=y.useState(0),p=y.useCallback(()=>c(x=>x+1),[]),d=Bt("renderBannerArea"),g=Bt("renderBioArea"),v=Bt("renderStatRow"),w=Bt("renderTabBar"),S=Bt("renderBadgeArea"),P=Bt("renderFollowArea"),m=Bt("renderContentArea"),f=Tr(),h=(f==null?void 0:f.activeTab)??null;return y.useImperativeHandle(n,()=>({getContainer:()=>s.current,forceUpdate:p,getSize:()=>{const x=s.current;return x?{width:x.offsetWidth,height:x.offsetHeight}:{width:0,height:0}},getActiveTab:()=>h}),[s,p,h]),u.jsxs("div",{ref:s,className:`vp-profile ${o||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",...l},children:[u.jsxs("div",{className:"vp-banner-area",style:{position:"relative"},children:[d,S.length>0&&u.jsx("div",{className:"vp-badge-area",style:{position:"absolute",top:8,right:8,display:"flex",alignItems:"center",gap:6},children:S})]}),g.length>0&&u.jsx("div",{className:"vp-bio-area",style:{display:"flex",flexDirection:"column",gap:10,padding:"12px 16px 0"},children:g}),(v.length>0||P.length>0)&&u.jsxs("div",{className:"vp-meta-area",style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"12px 16px"},children:[u.jsx("div",{className:"vp-stat-row",children:v}),u.jsx("div",{className:"vp-follow-area",style:{display:"flex",alignItems:"center",gap:8},children:P})]}),w.length>0&&u.jsx("div",{className:"vp-tab-bar",style:{padding:"0 16px"},children:w}),u.jsxs("div",{className:"vp-content-area",style:{padding:"16px"},children:[m,r]})]})});ne.displayName="ProfileCore";function Ch({orderedPlugins:e,context:t,children:n}){const r=y.useMemo(()=>kh(e),[e]),o=y.useMemo(()=>({orderedPlugins:e,context:t,slots:r}),[e,t,r]);return u.jsx(Ea.Provider,{value:o,children:n})}function ie(e,t){const n=Array.isArray(t)?{plugins:t}:t,{plugins:r,enableDebug:o=!1}=n,l=y.forwardRef((i,a)=>{const s=y.useRef(null),c=i.activeTab!==void 0,p=y.useCallback(b=>{var L;const E=c?i.activeTab??null:((L=b.state)==null?void 0:L.activeTab)??i.defaultActiveTab??null;return{...b,activeTab:E,setActiveTab:k=>{var _;(_=i.onActiveTabChange)==null||_.call(i,k,E),c||b.setState({activeTab:k})},stats:i.stats??[],followState:i.followState??"none",verified:i.verified??!1,badgeType:i.badgeType??"personal",banner:i.banner??null}},[c,i.activeTab,i.defaultActiveTab,i.onActiveTabChange,i.stats,i.followState,i.verified,i.badgeType,i.banner]),d=yh({plugins:r,props:i,data:i.data,containerRef:s,extendContext:p,enableDebug:o}),g=d.context,v=y.useMemo(()=>i.data===void 0?void 0:d.transformData(i.data),[i.data,d.transformData]),w=y.useMemo(()=>({...g,data:v}),[g,v]),S=y.useCallback((b,...E)=>d.execute(b,...E),[d.manager]),P=d.transformProps(i);y.useEffect(()=>{S("onMount")},[S]);const m=y.useRef(i);y.useEffect(()=>{const b=m.current;b!==i&&(m.current=i,S("onPropsChange",b,i))},[i,S]);const f=w.activeTab,h=y.useRef(f);y.useEffect(()=>{if(h.current!==f){const b=h.current;h.current=f,S("onTabChange",f,b)}},[f,S]);const x={...P,containerRefExternal:s,debug:P.debug??o,onMount:()=>{var b;(b=P.onMount)==null||b.call(P)},onUnmount:()=>{var b;(b=P.onUnmount)==null||b.call(P)},children:u.jsx(Ta,{children:Sh(d.orderedPlugins,w,P.children)})};return u.jsx(Ch,{orderedPlugins:d.orderedPlugins,context:w,children:u.jsx(e,{ref:a,...x})})});return l.displayName="WithPlugins(ProfileCore)",l}const _h=["http:","https:","mailto:","tel:"],Th=["http:","https:"];function Xd(e){return e.startsWith("//")?!1:e.startsWith("/")||e.startsWith("#")||e.startsWith("?")}function Zd(e){try{return new URL(e)}catch{return null}}function nr(e){if(typeof e!="string")return;const t=e.trim();if(!t)return;if(Xd(t))return t;const n=Zd(t);if(!n)return;const r=n.protocol.toLowerCase();if(_h.includes(r)&&!(r==="mailto:"&&!/^mailto:([A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+)$/.test(t))&&!(r==="tel:"&&!/^tel:\+?[0-9()\-\s.]{3,}$/.test(t)))return t}function Jd(e){if(typeof e!="string")return;const t=e.trim();if(!t)return;if(Xd(t))return t;const n=Zd(t);if(n)return Th.includes(n.protocol.toLowerCase())?t:void 0}function qd(e){const t=Jd(e);if(!t)return;const n=o=>`%${o.charCodeAt(0).toString(16).toUpperCase().padStart(2,"0")}`;return`url("${encodeURI(t).replace(/["'()\\\s]/g,n)}")`}function Eh({size:e}){const t=Math.round(e*.5);return u.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[u.jsx("circle",{cx:"12",cy:"7.5",r:"4.2",fill:"currentColor"}),u.jsx("path",{d:"M4.5 21c0-4.2 3.4-7 7.5-7s7.5 2.8 7.5 7",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})]})}function jh({src:e,size:t,round:n,alt:r,fallback:o}){const[l,i]=y.useState(!1),a={position:"absolute",left:16,bottom:-t/2,width:t,height:t,borderRadius:n?"50%":8,border:"3px solid #fff",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",objectFit:"cover"};return!e||l?u.jsx("div",{className:"vp-avatar-fallback",role:"img","aria-label":r,style:{...a,display:"flex",alignItems:"center",justifyContent:"center",background:"#e9ecef",color:"#6b6b6b",fontSize:Math.round(t/3),lineHeight:1},children:o??u.jsx(Eh,{size:t})}):u.jsx("img",{className:"vp-avatar",src:e,alt:r,onError:()=>i(!0),style:a})}function Rh(e={}){const{cover:t,gradient:n=["#6a11cb","#1a5fd0"],avatar:r,avatarAlt:o="头像",avatarFallback:l,avatarSize:i=64,avatarRound:a=!0,height:s=160,overlay:c}=e,p=qd(t),d=Jd(r),g=p?`${p} center/cover no-repeat`:`linear-gradient(135deg, ${n[0]}, ${n[1]})`;return{name:"BannerSlot",version:"0.1.0",description:"头图区：封面图 / 渐变背景 + 头像浮层 + 昵称标语叠加。",priority:10,enabled:!0,hooks:{renderBannerArea:v=>u.jsxs("div",{className:"vp-banner",style:{position:"relative",height:s,background:g,backgroundSize:"cover",marginBottom:d?i/2:0},children:[r!=null&&r.trim()?u.jsx(jh,{src:d,size:i,round:a,alt:o,fallback:l},d??"fallback"):null,(c??v.banner)&&u.jsx("div",{className:"vp-banner-overlay",style:{position:"absolute",left:r?16+i+12:16,bottom:16,color:"#fff",textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:c??v.banner})]})}}}const Lh="BannerSlot",Nh="头图区：封面图或渐变背景打底，左下角浮出头像（与数据行区重叠），并可叠加昵称 / 标语文案。读取 props.banner 作为默认叠加内容。",$h="0.1.0",Ah=["ui","banner","头图"],Mh=[{name:"renderBannerArea",when:"每次渲染，头图区槽位",description:"封面图、渐变背景、头像浮层位"}],Bh=[],zh="只读取 context 字段（props / state / data），不调用上下文方法",Fh=[{name:"cover",type:"string",default:'""',description:"封面图 URL；与 gradient 至少其一"},{name:"gradient",type:"[string, string]",default:'["#6a11cb", "#2575fc"]',description:"渐变起止色，无 cover 时作背景"},{name:"avatar",type:"string",default:'""',description:"头像 URL，浮于头图左下"},{name:"avatarAlt",type:"string",default:"头像",description:"头像无障碍描述"},{name:"avatarFallback",type:"ReactNode",default:"人形占位",description:"头像加载失败 / 缺失时的兜底内容"},{name:"avatarSize",type:"number",default:"64",description:"头像直径（px）"},{name:"avatarRound",type:"boolean",default:"true",description:"头像是否圆形"},{name:"height",type:"number",default:"160",description:"头图区高度（px）"},{name:"overlay",type:"ReactNode",default:"context.banner",description:"叠加文案，缺省用 props.banner"}],Oh=`// 头图 + 头像 + 昵称标语。
const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({
    cover: user.cover,
    avatar: user.avatar,
    overlay: <strong>{user.name}</strong>,
  }),
]);

<Profile banner={<span>@{user.handle}</span>} />;`,Ih=["封面图 / 渐变背景二选一","头像浮层与数据行区重叠（经典主页观感）","叠加文案支持自定义或复用 props.banner"],Dh=["社交平台个人主页头部","创作者 / 品牌主页","需要头像 + 封面组合的任意档案页"],Uh=["头像以负 bottom 浮出，父容器不要设 overflow:hidden 否则会被裁切。"],ef={name:Lh,description:Nh,since:$h,tags:Ah,events:Mh,methods:Bh,methodsNote:zh,config:Fh,example:Oh,features:Ih,useCases:Dh,notes:Uh},Jt=Object.assign(Rh,{meta:ef});function Wh(e={}){const{direction:t="row",divider:n=!0,onStatClick:r}=e;return{name:"StatRow",version:"0.1.0",description:"数据行：关注 / 粉丝 / 获赞 / 作品等指标，横排展示。",priority:10,enabled:!0,hooks:{renderStatRow:o=>{const l=e.items??o.stats??[];return l.length===0?null:u.jsx("div",{className:"vp-stat-row-inner",style:{display:"flex",flexDirection:t==="column"?"column":"row",gap:16,flex:1},children:l.map((i,a)=>{const s=u.jsxs(u.Fragment,{children:[u.jsx("span",{style:{fontSize:18,fontWeight:700},children:i.value}),u.jsx("span",{style:{fontSize:12,color:"#6b6b6b",borderRight:n&&t==="row"&&a<l.length-1?"1px solid #eee":"none",paddingRight:n&&t==="row"&&a<l.length-1?16:0},children:i.label})]}),c={display:"flex",flexDirection:"column",alignItems:t==="column"?"flex-start":"center",border:"none",background:"transparent",cursor:r?"pointer":"default",padding:0,lineHeight:1.2};return r?u.jsx("button",{type:"button",className:"vp-stat-item",onClick:()=>r(i,a),style:c,children:s},i.key??`stat-${a}`):u.jsx("span",{className:"vp-stat-item",style:c,children:s},i.key??`stat-${a}`)})})}}}}const Vh="StatRow",Hh="数据行：把关注 / 粉丝 / 获赞 / 作品等指标横排展示，每项显示「值 + 标签」。数据源为 config.items 或 props.stats。",Qh="0.1.0",Gh=["ui","stats","数据"],Kh=[{name:"renderStatRow",when:"每次渲染，数据行槽位",description:"关注 / 粉丝 / 获赞 / 作品等指标"}],Yh=[],Xh="只读取 context 字段（props / state / data），不调用上下文方法",Zh=[{name:"items",type:"StatItem[]",default:"context.stats",description:"显式指标；缺省读 props.stats"},{name:"direction",type:'"row" | "column"',default:"row",description:"排布方向"},{name:"divider",type:"boolean",default:"true",description:"row 模式下项间分隔线"},{name:"onStatClick",type:"function",default:"-",description:"点击回调，可在此 setActiveTab 联动页签"}],Jh=`// 关注 / 粉丝 / 获赞 / 作品。
const Profile = withPlugins(ProfileCore, [
  createStatRowPlugin({
    items: [
      { value: 128, label: "关注" },
      { value: 1.2, label: "粉丝" },
      { value: 48, label: "获赞" },
      { value: 9, label: "作品" },
    ],
  }),
]);`,qh=["支持 config.items 覆盖 props.stats","row / column 两种排布","可选分隔线","点击回调可联动页签"],ev=["个人主页指标展示","创作者数据概览","任意需要「值 + 标签」成组展示的场景"],tv=["divider 仅在 direction=row 时生效。"],tf={name:Vh,description:Hh,since:Qh,tags:Gh,events:Kh,methods:Yh,methodsNote:Xh,config:Zh,example:Jh,features:qh,useCases:ev,notes:tv},Er=Object.assign(Wh,{meta:tf});function nv(e){const{tabs:t,variant:n="underline",sticky:r=!1,scrollTopOnChange:o=!0,onChange:l}=e,i=Array.isArray(t)?t.filter(s=>!!s&&!!s.id):[];if(i.length===0)return{name:"TabSync",version:"0.1.0",description:"页签系统：渲染页签栏 + 切换时联动内容区重渲染（消费方子节点经 useProfileContext 订阅 activeTab）。",priority:20,enabled:!1,hooks:{}};const a=s=>n==="segmented"?{flex:1,padding:"6px 0",borderRadius:6,background:s?"#fff":"transparent",color:s?"#1a5fd0":"#555",fontWeight:s?700:400}:n==="pill"?{padding:"4px 14px",borderRadius:999,background:s?"#1a5fd0":"transparent",color:s?"#fff":"#555",border:s?"none":"1px solid #ddd"}:{padding:"8px 12px",borderBottom:s?"2px solid #1a5fd0":"2px solid transparent",color:s?"#1a5fd0":"#555",fontWeight:s?700:400};return{name:"TabSync",version:"0.1.0",description:"页签系统：渲染页签栏 + 切换时联动内容区重渲染（消费方子节点经 useProfileContext 订阅 activeTab）。",priority:20,enabled:!0,hooks:{renderTabBar:s=>{const c=s.activeTab;return u.jsx("div",{className:"vp-tab-bar-inner",role:"tablist",style:{display:"flex",gap:n==="segmented"?4:8,position:r?"sticky":"static",top:r?0:void 0,background:r?"#fff":"transparent",zIndex:r?1:void 0,...n==="segmented"?{background:"#eee",borderRadius:8,padding:4}:{}},children:i.map(p=>{const d=p.id===c;return u.jsxs("button",{type:"button",role:"tab","aria-selected":d,onClick:()=>s.setActiveTab(p.id),style:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"transparent",cursor:"pointer",fontSize:14,...a(d)},children:[p.icon,p.label]},p.id)})})},onTabChange:(s,c,p)=>{var d;if(o){const g=(d=s.refs.container)==null?void 0:d.current;g&&(g.scrollTop=0)}l==null||l(c,p)}}}}const rv="TabSync",ov="页签系统：渲染页签栏（underline / pill / segmented 三种样式），点击切换 activeTab，并联动内容区重渲染。切换时默认把容器滚到顶部。",lv="0.1.0",iv=["ui","tab","页签"],av=[{name:"onTabChange",when:"activeTab 变化后（回传 newTab / oldTab）",description:"切页副作用：懒加载、埋点、滚动复位"},{name:"renderTabBar",when:"每次渲染，页签栏槽位",description:"页签按钮；点击经 ctx.setActiveTab 驱动内容区联动"}],sv=[{name:"setActiveTab",signature:"ctx.setActiveTab(id: string | null): void",description:"切换页签并触发内容区联动（写入内核 state）"}],uv=[{name:"tabs",type:"TabItem[]",default:"-",description:"页签定义 { id, label, icon? }，至少一项"},{name:"variant",type:'"underline" | "pill" | "segmented"',default:"underline",description:"样式变体"},{name:"sticky",type:"boolean",default:"false",description:"是否吸顶"},{name:"scrollTopOnChange",type:"boolean",default:"true",description:"切换时容器滚到顶部"},{name:"onChange",type:"function",default:"-",description:"切换回调 (id, oldId)"}],cv=`// 作品 / 动态 / 关于 三个页签。
const Profile = withPlugins(ProfileCore, [
  createTabSyncPlugin({
    tabs: [
      { id: "works", label: "作品" },
      { id: "feeds", label: "动态" },
      { id: "about", label: "关于" },
    ],
  }),
]);

<Profile>
  <ProfileContent /> // 内部 useProfileContext().activeTab 决定渲染哪段
</Profile>;`,dv=["三种样式变体","点击切换 activeTab","内容区经 useProfileContext 自动联动","可选吸顶 + 切换滚动复位"],fv=["多内容区主页","作品 / 动态 / 收藏 切换","需要页签驱动的任意档案页"],pv=["内容区必须是消费 useProfileContext().activeTab 的子组件；TabSync 本身不渲染内容。"],nf={name:rv,description:ov,since:lv,tags:iv,events:av,methods:sv,config:uv,example:cv,features:dv,useCases:fv,notes:pv},jr=Object.assign(nv,{meta:nf});function gv({type:e}){const t=e==="institution"?"#ff8f00":"#1da1f2";return u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":"true",children:[u.jsx("circle",{cx:"12",cy:"12",r:"11",fill:t}),u.jsx("path",{d:"M7 12.5l3 3 7-7",fill:"none",stroke:"#fff",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"})]})}function mv(e={}){const{showLabel:t=!0}=e;return{name:"VerifyBadge",version:"0.1.0",description:"认证徽标：个人 / 机构认证对勾，浮于头图右上角。",priority:30,enabled:!0,hooks:{renderBadgeArea:n=>{const r=e.verified??n.verified,o=e.type??n.badgeType;if(!r)return null;const l=e.label??(o==="institution"?"机构认证":"认证");return u.jsxs("span",{className:"vp-badge",style:{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 8px",borderRadius:999,background:"rgba(255,255,255,0.92)",color:"#333",fontSize:12},children:[u.jsx(gv,{type:o}),t&&l]})}}}}const hv="VerifyBadge",vv="认证徽标：个人 / 机构两种认证对勾（内联 SVG，无外部资源），浮于头图右上角。verified 为 false 时不渲染。",yv="0.1.0",wv=["ui","badge","认证"],Sv=[{name:"renderBadgeArea",when:"每次渲染，认证徽标区（默认头图右上角）",description:"认证标识、等级徽章、状态角标"}],xv=[],Pv="只读取 context 字段（props / state / data），不调用上下文方法",kv=[{name:"verified",type:"boolean",default:"props.verified",description:"强制认证态，覆盖 props.verified"},{name:"type",type:'"personal" | "institution"',default:"props.badgeType",description:"认证类型，改变徽标颜色与默认文字"},{name:"label",type:"ReactNode",default:"按 type 给「认证」/「机构认证」",description:"徽标旁文字"},{name:"showLabel",type:"boolean",default:"true",description:"是否展示文字"}],bv=`// 个人认证徽标。
const Profile = withPlugins(ProfileCore, [
  createVerifyBadgePlugin({ type: "personal" }),
]);

<Profile verified badgeType="personal" />;`,Cv=["个人 / 机构两种配色","内联 SVG，零外部依赖","浮于头图右上角","verified=false 自动隐藏"],_v=["认证用户主页标识","品牌 / 机构官方账号","需要信任标识的任意档案"],Tv=["默认读取 props.verified / props.badgeType，也可经 config 强制覆盖。"],rf={name:hv,description:vv,since:yv,tags:wv,events:Sv,methods:xv,methodsNote:Pv,config:kv,example:bv,features:Cv,useCases:_v,notes:Tv},Zo=Object.assign(mv,{meta:rf}),Ev="操作失败，请重试";function jv({initial:e,labels:t,size:n,onToggle:r}){const[o,l]=y.useState(e),[i,a]=y.useState(!1),[s,c]=y.useState(null),p=o!=="none",d=n==="sm"?"4px 12px":"8px 20px",g=n==="sm"?12:14,v=async()=>{if(i)return;const w=o,S=o==="none"?"following":"none";c(null),l(S),a(!0);try{const P=await r(S);if(P&&typeof P=="object"&&P.error)throw new Error(P.error)}catch(P){l(w),c(P instanceof Error&&P.message?P.message:Ev)}finally{a(!1)}};return u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:v,disabled:i,"aria-busy":i,style:{padding:d,fontSize:g,borderRadius:999,border:p?"1px solid #ddd":"none",background:p?"#fff":"#1a5fd0",color:p?"#555":"#fff",cursor:i?"progress":"pointer",opacity:i?.7:1},children:t[o]}),s&&u.jsx("span",{className:"vp-follow-error",role:"alert",style:{fontSize:12,color:"#c62828",lineHeight:1.4},children:s})]})}const Rv={none:"关注",following:"已关注",mutual:"互相关注"};function Lv(e={}){const{labels:t,size:n="md",onFollow:r,onMutual:o}=e,l={...Rv,...t??{}};return{name:"FollowEcho",version:"0.1.0",description:"关注回显：关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。",priority:10,enabled:!0,hooks:{renderFollowArea:i=>{const a=e.state??i.followState;return u.jsx(jv,{initial:a,labels:l,size:n,onToggle:s=>r==null?void 0:r(s)},a)},onPropsChange:(i,a,s)=>{const c=a==null?void 0:a.followState,p=s==null?void 0:s.followState;c!=="mutual"&&p==="mutual"&&(o==null||o(p))}}}}const Nv="FollowEcho",$v="关注回显：关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。点击仅作乐观 UI，真相由消费方回写；关系变为 mutual 时可触发 onMutual。",Av="0.1.0",Mv=["ui","follow","关注"],Bv=[{name:"onPropsChange",when:"资料 props 变化后",description:"按新旧资料差分刷新派生状态"},{name:"renderFollowArea",when:"每次渲染，关注回显区槽位",description:"关注 / 已关注 / 互相关注的按钮与文案"}],zv=[],Fv="只读取 context 字段（props / state / data），不调用上下文方法",Ov=[{name:"state",type:'"none" | "following" | "mutual"',default:"props.followState",description:"强制关注态，覆盖 props.followState"},{name:"labels",type:"Partial<Record<FollowState, ReactNode>>",default:"{ none: 关注, following: 已关注, mutual: 互相关注 }",description:"三态文案覆盖"},{name:"size",type:'"sm" | "md"',default:"md",description:"按钮尺寸"},{name:"onFollow",type:"function => void | Promise<void | { error }>",default:"-",description:"点击切换后的回调；可返回 Promise，pending 时禁用按钮，失败（reject 或 { error }）时回滚乐观态并提示错误"},{name:"onMutual",type:"function",default:"-",description:"关系变为 mutual 时的回调"}],Iv=`// 关注按钮，受控于服务端返回的 followState。
const Profile = withPlugins(ProfileCore, [
  createFollowEchoPlugin({
    onFollow: (next) => api.toggleFollow(uid, next),
  }),
]);

<Profile followState={serverState} />;`,Dv=["三态受控按钮","点击乐观切换，真相回写 props","关系变为 mutual 触发 onMutual","点击态 / 已关注态样式区分"],Uv=["个人主页关注按钮","用户卡片关注态","需要关注关系回显的任意档案"],Wv=["按钮为受控组件，关注真相请由消费方维护并回写 props.followState。"],of={name:Nv,description:$v,since:Av,tags:Mv,events:Bv,methods:zv,methodsNote:Fv,config:Ov,example:Iv,features:Dv,useCases:Uv,notes:Wv},$n=Object.assign(Lv,{meta:of});function Vv(e={}){const{name:t,bio:n,location:r,joinDate:o,subtitle:l}=e,i=[r,o].filter(Boolean).join(" · ");return{name:"BioSlot",version:"0.1.0",description:"简介区：昵称 + 签名 + 所在地 / 加入时间。",priority:12,enabled:!0,hooks:{renderBioArea:a=>!t&&!l&&!n&&!i?null:u.jsxs("div",{className:"vp-bio",children:[t&&u.jsx("div",{className:"vp-bio-name",children:t}),l&&u.jsx("div",{className:"vp-bio-sub",children:l}),n&&u.jsx("div",{className:"vp-bio-text",children:n}),i&&u.jsx("div",{className:"vp-bio-meta",children:i})]})}}}const Hv="BioSlot",Qv="简介区：昵称 + 签名 + 所在地 / 加入时间。",Gv="0.1.0",Kv=["intro","bio","renderBioArea"],Yv=[{name:"renderBioArea",when:"每次渲染，简介区槽位（头图与数据行之间）",description:"昵称、签名、所在地、加入时间"}],Xv=[],Zv="只读取 context 字段（props / state / data），不调用上下文方法",Jv=[{name:"name",type:"ReactNode",default:"-",description:"昵称（头图已用 overlay 显示时留空，避免重复）"},{name:"subtitle",type:"ReactNode",default:"-",description:"副标题 / 职业，显示在昵称下方小字"},{name:"bio",type:"ReactNode",default:"-",description:"个性签名 / 一句话简介"},{name:"location",type:"string",default:"-",description:"所在地"},{name:"joinDate",type:"string",default:"-",description:"加入时间，如「2021 加入」"}],qv=["走 renderBioArea 领域槽，排在头图与数据行之间","name/subtitle/bio/meta 全部为空时整体不渲染（不占空间）"],ey=["个人主页的签名档","企业号的一句话简介"],ty=["与 BannerSlot 的 overlay 各自独立：overlay 浮在头图上，本插件在头像下方的简介区"],lf={name:Hv,description:Qv,since:Gv,tags:Kv,events:Yv,methods:Xv,methodsNote:Zv,config:Jv,features:qv,useCases:ey,notes:ty},ja=Object.assign(Vv,{meta:lf}),ny={weibo:{glyph:"微",label:"微博"},zhihu:{glyph:"知",label:"知乎"},github:{glyph:"GH",label:"GitHub"},email:{glyph:"@",label:"邮箱"},site:{glyph:"网",label:"官网"},youtube:{glyph:"YT",label:"YouTube"},bilibili:{glyph:"B",label:"B 站"},twitter:{glyph:"X",label:"X"},douyin:{glyph:"抖",label:"抖音"},wechat:{glyph:"微",label:"微信"}};function ry(e={links:[]}){const{links:t,showLabel:n=!0,align:r="left"}=e;return{name:"SocialLinks",version:"0.1.0",description:"社交外链行：一排可点击的平台入口（微博 / 知乎 / GitHub …）。",priority:12,enabled:!0,hooks:{renderBioArea:o=>t.length?u.jsx("div",{className:"vp-social",style:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:r==="center"?"center":r==="right"?"flex-end":"flex-start"},children:t.map((l,i)=>{const a=ny[l.platform]??{glyph:"·",label:l.platform},s=l.glyph??a.glyph,c=l.label??a.label,p=nr(l.href),d={display:"inline-flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:999,border:"1px solid rgba(125,130,140,0.35)",color:"inherit",textDecoration:"none",fontSize:13},g=u.jsxs(u.Fragment,{children:[u.jsx("span",{"aria-hidden":!0,style:{width:18,height:18,borderRadius:"50%",background:"#1a5fd0",color:"#fff",fontSize:10,display:"inline-flex",alignItems:"center",justifyContent:"center",flex:"0 0 auto"},children:s}),n?u.jsx("span",{children:c}):null]});return p?u.jsx("a",{className:"vp-social-item",href:p,target:"_blank",rel:"noreferrer noopener",style:d,children:g},i):u.jsx("span",{className:"vp-social-item",style:{...d,cursor:"default"},children:g},i)})}):null}}}const oy="SocialLinks",ly="社交外链行：一排可点击的平台入口（微博 / 知乎 / GitHub …）。",iy="0.1.0",ay=["social","links","renderBioArea"],sy=[{name:"renderBioArea",when:"每次渲染，简介区槽位（头图与数据行之间）",description:"昵称、签名、所在地、加入时间"}],uy=[],cy="只读取 context 字段（props / state / data），不调用上下文方法",dy=[{name:"links",type:"SocialLink[]",default:"[]",description:"外链列表，每项含 platform / href / 可选 label / glyph"},{name:"showLabel",type:"boolean",default:"true",description:"是否显示文案（仅图标字时为 false）"},{name:"align",type:"'left' | 'center' | 'right'",default:"'left'",description:"整组对齐方式"}],fy=["走 renderBioArea 领域槽，与 BioSlot / TagList 同区串联","图标用单/双字占位（无图片资源），链接新窗口打开并带 rel 防钓鱼","常见平台（微博/知乎/GitHub…）有默认文案与图标字"],py=["主页底部的社交入口聚合","创作者主页的外链引流"],gy=["链接一律 target=_blank + rel=noreferrer noopener，避免反向携带来源页信息"],af={name:oy,description:ly,since:iy,tags:ay,events:sy,methods:uy,methodsNote:cy,config:dy,features:fy,useCases:py,notes:gy},Ra=Object.assign(ry,{meta:af});function my(e={tags:[]}){const{tags:t,align:n="left"}=e;return{name:"TagList",version:"0.1.0",description:"兴趣 / 标签行：一排圆角小标签。",priority:12,enabled:!0,hooks:{renderBioArea:r=>t.length?u.jsx("div",{className:"vp-tags",style:{display:"flex",flexWrap:"wrap",gap:6,justifyContent:n==="center"?"center":n==="right"?"flex-end":"flex-start"},children:t.map((o,l)=>u.jsx("span",{className:"vp-tag",style:{padding:"2px 10px",borderRadius:999,fontSize:12,lineHeight:1.6,background:"rgba(125,130,140,0.16)",color:"inherit",border:"1px solid rgba(125,130,140,0.25)"},children:o},l))}):null}}}const hy="TagList",vy="兴趣 / 标签行：一排圆角小标签。",yy="0.1.0",wy=["tags","interest","renderBioArea"],Sy=[{name:"renderBioArea",when:"每次渲染，简介区槽位（头图与数据行之间）",description:"昵称、签名、所在地、加入时间"}],xy=[],Py="只读取 context 字段（props / state / data），不调用上下文方法",ky=[{name:"tags",type:"string[]",default:"[]",description:"标签文本列表"},{name:"align",type:"'left' | 'center' | 'right'",default:"'left'",description:"整组对齐方式"}],by=["走 renderBioArea 领域槽，与 BioSlot / SocialLinks 同区串联","tags 为空时整体不渲染"],Cy=["个人主页的兴趣标签墙","创作者主页的内容领域标记"],_y=["标签样式用半透明底色，跟随容器文字颜色，不引入额外主题变量"],sf={name:hy,description:vy,since:yy,tags:wy,events:Sy,methods:xy,methodsNote:Py,config:ky,features:by,useCases:Cy,notes:_y},La=Object.assign(my,{meta:sf}),pu=["#6a11cb","#1a5fd0","#11998e","#ff7e5f","#fc466b","#3a1c71"];function Ty(e={items:[]}){const{items:t,columns:n=3,gap:r=10,tab:o,title:l,empty:i="暂无作品"}=e;return{name:"WorksGrid",version:"0.1.0",description:"作品网格：随 activeTab 联动的内容区插件。",priority:15,enabled:!0,hooks:{renderContentArea:a=>{if(o&&a.activeTab!==o)return null;const s=u.jsx("div",{className:"vp-works-grid",style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gap:r},children:t.map((c,p)=>{const d=qd(c.cover),g=d??c.coverColor??pu[p%pu.length];return u.jsxs("figure",{className:"vp-work",style:{margin:0,borderRadius:10,overflow:"hidden",border:"1px solid rgba(125,130,140,0.22)",background:"#fff",color:"#222"},children:[u.jsx("div",{style:{aspectRatio:"1 / 1",background:d?`${d} center/cover no-repeat`:g}}),u.jsxs("figcaption",{style:{padding:"8px 10px"},children:[u.jsx("div",{style:{fontSize:13,fontWeight:600,lineHeight:1.4},children:c.title}),c.meta?u.jsx("div",{style:{fontSize:11,color:"#6b6b6b",marginTop:2},children:c.meta}):null]})]},c.id)})});return t.length===0?u.jsx("div",{className:"vp-works-empty",style:{padding:"24px 0",textAlign:"center",color:"#6b6b6b"},children:i}):l?u.jsxs("div",{className:"vp-works",children:[u.jsx("div",{className:"vp-works-title",style:{fontSize:14,fontWeight:600,marginBottom:10},children:l}),s]}):s}}}}const Ey="WorksGrid",jy="作品网格：随 activeTab 联动的内容区插件。",Ry="0.1.0",Ly=["content","grid","works","renderContentArea"],Ny=[{name:"renderContentArea",when:"每次渲染，内容区槽位（随 activeTab 联动）",description:"插件贡献的内容面板；有内容插件时覆盖 children"}],$y=[],Ay="只读取 context 字段（props / state / data），不调用上下文方法",My=[{name:"items",type:"WorkItem[]",default:"[]",description:"作品列表，每项含 id / title / 可选 cover / coverColor / meta"},{name:"columns",type:"number",default:"3",description:"网格列数"},{name:"gap",type:"number",default:"10",description:"卡片间距（px）"},{name:"tab",type:"string",default:"-",description:"仅在某个页签激活时显示（与 TabSync 联动）；不填则始终显示"},{name:"title",type:"ReactNode",default:"-",description:"网格上方的分组标题"},{name:"empty",type:"ReactNode",default:"暂无作品",description:"空列表占位文案"}],By=["走 renderContentArea 领域槽，Core 有内容插件时以它替代 children","config.tab 与 context.activeTab 联动：切到对应页签才出网格","封面支持图片 URL 或纯色占位，无图也能离线演示"],zy=["个人主页的作品 / 相册网格","创作者主页的笔记 / 视频墙"],Fy=["与 TabSync 文本 children 二选一：装了 WorksGrid 后内容区由它接管"],uf={name:Ey,description:jy,since:Ry,tags:Ly,events:Ny,methods:$y,methodsNote:Ay,config:My,features:By,useCases:zy,notes:Fy},Na=Object.assign(Ty,{meta:uf}),gu={1:{bg:"#c7a06a",fg:"#fff"},2:{bg:"#9aa7b5",fg:"#fff"},3:{bg:"#e0b34a",fg:"#3a2c00"}};function Oy(e={}){const{level:t=1,label:n,showLabel:r=!0}=e,o=gu[t]??gu[1];return{name:"MembershipBadge",version:"0.1.0",description:"会员 / VIP 等级角标：浮于头图右上，与认证徽标同区并排。",priority:30,enabled:!0,hooks:{renderBadgeArea:l=>u.jsxs("span",{className:"vp-membership",title:`VIP ${t}`,style:{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 8px",borderRadius:999,fontSize:12,fontWeight:600,background:o.bg,color:o.fg,lineHeight:1.6},children:[u.jsx("span",{"aria-hidden":!0,style:{fontSize:11},children:"♛"}),r?u.jsx("span",{children:n??`VIP${t}`}):null]})}}}const Iy="MembershipBadge",Dy="会员 / VIP 等级角标：浮于头图右上，与认证徽标同区并排。",Uy="0.1.0",Wy=["ui","badge","vip","renderBadgeArea"],Vy=[{name:"renderBadgeArea",when:"每次渲染，认证徽标区（默认头图右上角）",description:"认证标识、等级徽章、状态角标"}],Hy=[],Qy="只读取 context 字段（props / state / data），不调用上下文方法",Gy=[{name:"level",type:"1 | 2 | 3",default:"1",description:"会员等级，决定配色与默认文案"},{name:"label",type:"ReactNode",default:"-",description:"覆盖默认文案；缺省按 level 给 VIP{n}"},{name:"showLabel",type:"boolean",default:"true",description:"是否展示文案（仅图标时为 false）"}],Ky=`// 金色 VIP3 角标，浮于头图右上。
const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({ avatar: user.avatar }),
  createMembershipBadgePlugin({ level: 3 }),
]);`,Yy=["走 renderBadgeArea 领域槽，与 VerifyBadge / QRShare 同区横向并排","三档配色（VIP1 铜 / VIP2 银 / VIP3 金）","可覆盖文案，支持仅图标模式"],Xy=["付费会员主页标识","社区等级展示","需要身份分级的任意档案"],Zy=["浮于头图右上角；ProfileCore 已将该区设为 flex 行排，多徽标不会错位。"],cf={name:Iy,description:Dy,since:Uy,tags:Wy,events:Vy,methods:Hy,methodsNote:Qy,config:Gy,example:Ky,features:Yy,useCases:Xy,notes:Zy},$a=Object.assign(Oy,{meta:cf});function Jy(e,t=11){const n=[];let r=0;for(let o=0;o<e.length;o++)r=r*31+e.charCodeAt(o)>>>0;for(let o=0;o<t;o++){const l=[];for(let i=0;i<t;i++)r=r*1103515245+12345>>>0,l.push((r>>16)%100<48);n.push(l)}return n}const qy={idle:"复制链接",ok:"已复制",fail:"复制失败"};function e0({url:e,buttonLabel:t,size:n}){const[r,o]=y.useState(!1),[l,i]=y.useState("idle"),a=y.useRef(null),s=y.useRef(null),c=Jy(e);y.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]),y.useEffect(()=>{if(!r)return;const d=v=>{v.key==="Escape"&&o(!1)},g=v=>{const w=a.current;if(!w)return;const S=v.target;S&&!w.contains(S)&&o(!1)};return document.addEventListener("keydown",d),document.addEventListener("mousedown",g),()=>{document.removeEventListener("keydown",d),document.removeEventListener("mousedown",g)}},[r]);const p=async()=>{var g;let d;try{if(!((g=navigator.clipboard)!=null&&g.writeText))throw new Error("clipboard unavailable");await navigator.clipboard.writeText(e),d="ok"}catch{d="fail"}i(d),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>i("idle"),1500)};return u.jsxs("div",{className:"vp-qrshare",ref:a,style:{position:"relative"},children:[u.jsxs("button",{type:"button",onClick:()=>o(d=>!d),"aria-expanded":r,"aria-haspopup":"dialog",style:{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 10px",borderRadius:999,fontSize:12,border:"1px solid rgba(255,255,255,0.7)",background:"rgba(0,0,0,0.55)",color:"#fff",cursor:"pointer",lineHeight:1.6},children:[u.jsx("span",{"aria-hidden":!0,children:"⤴"}),t]}),r&&u.jsxs("div",{role:"dialog","aria-label":"分享二维码",style:{position:"absolute",top:"calc(100% + 8px)",right:0,width:n+24,padding:12,borderRadius:10,background:"#fff",color:"#222",boxShadow:"0 6px 24px rgba(0,0,0,0.22)",zIndex:5},children:[u.jsx("div",{style:{width:n,height:n,display:"grid",gridTemplateColumns:`repeat(${c.length}, 1fr)`,gap:1,margin:"0 auto 8px"},children:c.flatMap((d,g)=>d.map((v,w)=>u.jsx("span",{style:{background:v?"#222":"#fff"}},`${g}-${w}`)))}),u.jsx("div",{style:{fontSize:11,wordBreak:"break-all",marginBottom:8},children:e}),u.jsx("button",{type:"button",onClick:()=>void p(),"aria-live":"polite",style:{width:"100%",padding:"4px 0",borderRadius:6,border:"none",background:l==="fail"?"#c62828":"#1a5fd0",color:"#fff",fontSize:12,cursor:"pointer"},children:qy[l]})]})]})}function t0(e={}){const{url:t,buttonLabel:n="分享",size:r=96}=e;return{name:"QRShare",version:"0.1.0",description:"主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",priority:30,enabled:!0,hooks:{renderBadgeArea:o=>{var a;const l=(a=o.data)==null?void 0:a.homeUrl,i=nr(t??l);return i?u.jsx(e0,{url:i,buttonLabel:n,size:r}):null}}}}const n0="QRShare",r0="主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",o0="0.1.0",l0=["ui","share","qr","renderBadgeArea"],i0=[{name:"renderBadgeArea",when:"每次渲染，认证徽标区（默认头图右上角）",description:"认证标识、等级徽章、状态角标"}],a0=[],s0="只读取 context 字段（props / state / data），不调用上下文方法",u0=[{name:"url",type:"string",default:"props.data.homeUrl",description:"要分享的主页地址；缺省读 props.data.homeUrl，都没有则不渲染分享按钮"},{name:"buttonLabel",type:"ReactNode",default:"分享",description:"按钮文案"},{name:"size",type:"number",default:"96",description:"二维码占位区边长（px）"}],c0=`// 头图右上分享按钮，点击展开二维码 + 复制链接。
const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({ avatar: user.avatar }),
  createQRSharePlugin({ url: user.homeUrl }),
]);`,d0=["走 renderBadgeArea 领域槽，与 VerifyBadge / MembershipBadge 同区横向并排","点击展开分享面板（useState 控制）","面板提供「复制链接」（navigator.clipboard）","二维码为装饰性点阵占位，零外部依赖"],f0=["主页分享入口","线下物料扫码引流","需要快速传播主页链接的场景"],p0=["二维码为视觉占位（确定性点阵，非真实可扫码）；接入真实扫码请替换面板内的点阵为二维码库输出。"],df={name:n0,description:r0,since:o0,tags:l0,events:i0,methods:a0,methodsNote:s0,config:u0,example:c0,features:d0,useCases:f0,notes:p0},Aa=Object.assign(t0,{meta:df}),mu={online:{color:"#2ecc71",label:"在线"},away:{color:"#f1c40f",label:"离开"},busy:{color:"#e74c3c",label:"忙碌"},offline:{color:"#95a5a6",label:"离线"},live:{color:"#ff4757",label:"直播中"}};function g0(e={}){const{status:t="online",liveTitle:n,showLabel:r=!0}=e,o=mu[t]??mu.online;return{name:"LiveStatus",version:"0.1.0",description:"在线 / 直播状态指示：圆点 + 文案，直播态高亮。",priority:12,enabled:!0,hooks:{renderBioArea:l=>u.jsxs("div",{className:"vp-livestatus",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:13,color:"inherit"},children:[u.jsx("span",{"aria-hidden":!0,style:{width:8,height:8,borderRadius:"50%",background:o.color,boxShadow:t==="live"?`0 0 0 3px ${o.color}33`:"none",flex:"0 0 auto"}}),r?u.jsxs("span",{children:[o.label,t==="live"&&n?`：${n}`:""]}):null]})}}}const m0="LiveStatus",h0="在线 / 直播状态指示：圆点 + 文案，直播态高亮。",v0="0.1.0",y0=["status","live","renderBioArea"],w0=[{name:"renderBioArea",when:"每次渲染，简介区槽位（头图与数据行之间）",description:"昵称、签名、所在地、加入时间"}],S0=[],x0="只读取 context 字段（props / state / data），不调用上下文方法",P0=[{name:"status",type:'"online" | "away" | "busy" | "offline" | "live"',default:"online",description:"状态类型，决定圆点颜色与文案"},{name:"liveTitle",type:"string",default:"-",description:"status=live 时的直播标题"},{name:"showLabel",type:"boolean",default:"true",description:"是否展示文案（仅圆点为 false）"}],k0=`// 直播中状态，红点高亮。
const Profile = withPlugins(ProfileCore, [
  createLiveStatusPlugin({ status: "live", liveTitle: "前端架构夜聊" }),
]);`,b0=["走 renderBioArea 领域槽，与 BioSlot / SocialLinks / TagList 同区串联","5 种状态（在线/离开/忙碌/离线/直播中）配色","直播态红点带光晕，可附直播标题"],C0=["主播 / 达人主页实时状态","客服在线标识","社区用户活跃状态"],_0=["状态为展示态，真实在线与否由消费方按业务维护并回写 config。"],ff={name:m0,description:h0,since:v0,tags:y0,events:w0,methods:S0,methodsNote:x0,config:P0,example:k0,features:b0,useCases:C0,notes:_0},Ma=Object.assign(g0,{meta:ff});function T0(e={}){const{email:t,phone:n,site:r,address:o,showIcon:l=!0}=e,i=[];if(t&&i.push({glyph:"@",text:t,href:nr(`mailto:${t}`)}),n&&i.push({glyph:"☎",text:n,href:nr(`tel:${n}`)}),r){const a=nr(r);i.push({glyph:"网",text:r.replace(/^https?:\/\//,""),href:a,external:!!a})}return o&&i.push({glyph:"📍",text:o}),{name:"ContactCard",version:"0.1.0",description:"联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",priority:12,enabled:!0,hooks:{renderBioArea:a=>i.length?u.jsx("div",{className:"vp-contact",style:{display:"flex",flexWrap:"wrap",gap:"6px 16px",fontSize:13,color:"inherit"},children:i.map((s,c)=>{const p=u.jsxs(u.Fragment,{children:[l&&u.jsx("span",{"aria-hidden":!0,style:{opacity:.7,marginRight:4},children:s.glyph}),u.jsx("span",{children:s.text})]});return s.href?u.jsx("a",{href:s.href,...s.external?{target:"_blank",rel:"noreferrer noopener"}:{},style:{color:"inherit",textDecoration:"none"},children:p},c):u.jsx("span",{children:p},c)})}):null}}}const E0="ContactCard",j0="联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",R0="0.1.0",L0=["contact","info","renderBioArea"],N0=[{name:"renderBioArea",when:"每次渲染，简介区槽位（头图与数据行之间）",description:"昵称、签名、所在地、加入时间"}],$0=[],A0="只读取 context 字段（props / state / data），不调用上下文方法",M0=[{name:"email",type:"string",default:"-",description:"邮箱，渲染为 mailto: 链接"},{name:"phone",type:"string",default:"-",description:"电话，渲染为 tel: 链接"},{name:"site",type:"string",default:"-",description:"官网，外链带 rel 防钓鱼"},{name:"address",type:"string",default:"-",description:"地址，纯文本不渲染为链接"},{name:"showIcon",type:"boolean",default:"true",description:"是否显示左侧图标字"}],B0=`// 联系信息卡：邮箱 + 官网。
const Profile = withPlugins(ProfileCore, [
  createContactCardPlugin({ email: "frank@vane.dev", site: "https://vane.dev" }),
]);`,z0=["走 renderBioArea 领域槽，与 BioSlot / SocialLinks / TagList 同区串联","邮箱走 mailto:、电话走 tel:、官网走 http(s) 外链","外链一律 rel=noreferrer noopener，防反向携带来源页信息","四项全空时整体不渲染"],F0=["商家 / 机构主页联系入口","创作者商务合作方式","需要公开联系方式的任意档案"],O0=["地址为纯文本（不渲染为链接），避免误导用户点击。"],pf={name:E0,description:j0,since:R0,tags:L0,events:N0,methods:$0,methodsNote:A0,config:M0,example:B0,features:z0,useCases:F0,notes:O0},Ba=Object.assign(T0,{meta:pf});function I0(e={}){const{lastActive:t,postsThisMonth:n,totalViews:r,showIcon:o=!0}=e,l=[];return t&&l.push(`最近活跃 ${t}`),typeof n=="number"&&l.push(`本月发布 ${n} 篇`),r&&l.push(`总阅读 ${r}`),{name:"ActivitySummary",version:"0.1.0",description:"活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",priority:12,enabled:!0,hooks:{renderBioArea:i=>l.length?u.jsxs("div",{className:"vp-activity",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,opacity:.72,color:"inherit"},children:[o&&u.jsx("span",{"aria-hidden":!0,style:{opacity:.8},children:"◷"}),u.jsx("span",{children:l.join(" · ")})]}):null}}}const D0="ActivitySummary",U0="活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",W0="0.1.0",V0=["activity","meta","renderBioArea"],H0=[{name:"renderBioArea",when:"每次渲染，简介区槽位（头图与数据行之间）",description:"昵称、签名、所在地、加入时间"}],Q0=[],G0="只读取 context 字段（props / state / data），不调用上下文方法",K0=[{name:"lastActive",type:"string",default:"-",description:"最近活跃描述，如「2 小时前」"},{name:"postsThisMonth",type:"number",default:"-",description:"本月发布篇数"},{name:"totalViews",type:"string",default:"-",description:"总阅读量描述，如「120w」"},{name:"showIcon",type:"boolean",default:"true",description:"是否显示时钟图标字"}],Y0=`// 活跃度小结一行字。
const Profile = withPlugins(ProfileCore, [
  createActivitySummaryPlugin({ lastActive: "2 小时前", postsThisMonth: 12, totalViews: "120w" }),
]);`,X0=["走 renderBioArea 领域槽，与简介区其他插件同区串联","三项可任意组合，全空不渲染","浅色小字，不抢简介主体"],Z0=["创作者活跃度展示","社区用户粘性提示","需要轻量数据小结的档案"],J0=["数据由消费方计算后传入，本插件只做展示。"],gf={name:D0,description:U0,since:W0,tags:V0,events:H0,methods:Q0,methodsNote:G0,config:K0,example:Y0,features:X0,useCases:Z0,notes:J0},za=Object.assign(I0,{meta:gf});function q0(e={}){const{size:t="md",label:n="私信",onMessage:r}=e,o=t==="sm"?"3px 12px":"6px 18px",l=t==="sm"?12:14;return{name:"MessageButton",version:"0.1.0",description:"私信按钮：与关注回显同区并排，点击拉起会话。",priority:10,enabled:!0,hooks:{renderFollowArea:i=>u.jsx("button",{type:"button",onClick:()=>r==null?void 0:r(i),style:{padding:o,fontSize:l,borderRadius:999,border:"1px solid rgba(125,130,140,0.45)",background:"transparent",color:"inherit",cursor:"pointer",lineHeight:1.4},children:n})}}}const e1="MessageButton",t1="私信按钮：与关注回显同区并排，点击拉起会话。",n1="0.1.0",r1=["ui","message","私信","renderFollowArea"],o1=[{name:"renderFollowArea",when:"每次渲染，关注回显区槽位",description:"关注 / 已关注 / 互相关注的按钮与文案"}],l1=[],i1="只读取 context 字段（props / state / data），不调用上下文方法",a1=[{name:"size",type:'"sm" | "md"',default:"md",description:"按钮尺寸"},{name:"label",type:"ReactNode",default:"私信",description:"按钮文案"},{name:"onMessage",type:"function",default:"-",description:"点击回调，参数为领域上下文"}],s1=`// 私信按钮，与关注并排。
const Profile = withPlugins(ProfileCore, [
  createFollowEchoPlugin({ onFollow: toggleFollow }),
  createMessageButtonPlugin({ onMessage: () => openChat(uid) }),
]);`,u1=["走 renderFollowArea 领域槽，与 FollowEcho 横向并排","描边样式，与关注实心按钮形成主次","点击触发 onMessage（消费方拉起会话）"],c1=["主页私信入口","客服会话触发","需要一对一沟通的场景"],d1=["按钮为无状态触发器，会话逻辑由消费方在 onMessage 里实现。"],mf={name:e1,description:t1,since:n1,tags:r1,events:o1,methods:l1,methodsNote:i1,config:a1,example:s1,features:u1,useCases:c1,notes:d1},Fa=Object.assign(q0,{meta:mf});function f1(e={}){const{items:t=[],columns:n=4,gap:r=10,tab:o,title:l,empty:i="暂无成就"}=e;return{name:"AchievementWall",version:"0.1.0",description:"成就 / 勋章墙：随 activeTab 联动的内容区插件。",priority:10,enabled:!0,hooks:{renderContentArea:a=>o&&a.activeTab!==o?null:t.length?u.jsxs("div",{className:"vp-achievements",style:{padding:4},children:[l&&u.jsx("div",{style:{fontWeight:600,margin:"0 0 10px"},children:l}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gap:r},children:t.map(s=>u.jsxs("div",{title:s.desc,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:12,borderRadius:12,background:"rgba(125,130,140,0.1)",border:"1px solid rgba(125,130,140,0.18)",textAlign:"center"},children:[u.jsx("span",{"aria-hidden":!0,style:{width:40,height:40,borderRadius:"50%",background:s.color??"#1a5fd0",color:"#fff",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:700},children:s.glyph??"★"}),u.jsx("span",{style:{fontSize:13,fontWeight:600},children:s.title}),s.desc&&u.jsx("span",{style:{fontSize:11,opacity:.7},children:s.desc})]},s.id))})]}):u.jsx("div",{className:"vp-achievements-empty",style:{padding:16,color:"#6b6b6b"},children:i})}}}const p1="AchievementWall",g1="成就 / 勋章墙：随 activeTab 联动的内容区插件。",m1="0.1.0",h1=["content","achievement","renderContentArea"],v1=[{name:"renderContentArea",when:"每次渲染，内容区槽位（随 activeTab 联动）",description:"插件贡献的内容面板；有内容插件时覆盖 children"}],y1=[],w1="只读取 context 字段（props / state / data），不调用上下文方法",S1=[{name:"items",type:"AchievementItem[]",default:"[]",description:"成就列表，每项含 id / title / 可选 desc / glyph / color"},{name:"columns",type:"number",default:"4",description:"网格列数"},{name:"gap",type:"number",default:"10",description:"卡片间距（px）"},{name:"tab",type:"string",default:"-",description:"仅在某个页签激活时显示（与 TabSync 联动）；不填则始终显示"},{name:"title",type:"ReactNode",default:"-",description:"分组标题"},{name:"empty",type:"ReactNode",default:"暂无成就",description:"空列表占位文案"}],x1=`// 成就墙，挂在「关于」页签下。
const Profile = withPlugins(ProfileCore, [
  createTabSyncPlugin({ tabs: [{ id: "about", label: "关于" }] }),
  createAchievementWallPlugin({ items: user.badges, tab: "about", title: "成就" }),
]);`,P1=["走 renderContentArea 领域槽，Core 有内容插件时替代 children","config.tab 与 context.activeTab 联动：切到对应页签才出墙","图标用单/双字占位，无图也能离线演示","与 WorksGrid 同区可共存（按 priority 纵向排列）"],k1=["个人主页成就展示","创作者荣誉墙","游戏 / 社区勋章系统"],b1=["与 WorksGrid 同在内容区时，两者按 priority 纵向排列，互不覆盖。"],hf={name:p1,description:g1,since:m1,tags:h1,events:v1,methods:y1,methodsNote:w1,config:S1,example:x1,features:P1,useCases:k1,notes:b1},Oa=Object.assign(f1,{meta:hf}),C1=(e,t)=>"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect width="96" height="96" rx="48" fill="${e}"/><text x="48" y="62" font-size="44" text-anchor="middle" fill="#fff" font-family="sans-serif">${t}</text></svg>`),qt=C1("#1a5fd0","F"),D={name:"Frank Vane",handle:"frankvane",bio:"把「旁边那一堆需求」拆成可勾选的插件。",stats:[{value:1280,label:"关注"},{value:"12.4w",label:"粉丝"},{value:4823,label:"获赞"},{value:9,label:"作品"}]},_1={works:"这里是「作品」区：图文卡片、视频、长文混排。",feeds:"这里是「动态」区：时间线式的短内容流。",about:"这里是「关于」区：简介、标签、外链。"},Ia=[{platform:"weibo",href:"https://weibo.com/"},{platform:"zhihu",href:"https://www.zhihu.com/"},{platform:"github",href:"https://github.com/"},{platform:"email",href:"mailto:frank@vane.dev"},{platform:"site",href:"https://vane.dev/"}],Da=["React","TypeScript","组件库","设计系统","可视化","开源"],Ua=[{id:"w1",title:"vane-waterfall 重构笔记",coverColor:"#6a11cb",meta:"2.4w 阅读"},{id:"w2",title:"插件化架构实战",coverColor:"#1a5fd0",meta:"1.1w 点赞"},{id:"w3",title:"从 0 写一个组件库",coverColor:"#11998e",meta:"8.6k 收藏"},{id:"w4",title:"拖拽排序的 7 种实现",coverColor:"#ff7e5f",meta:"3 周前"},{id:"w5",title:"可视化排版台",coverColor:"#fc466b",meta:"团队协作"},{id:"w6",title:"暗色主题规范",coverColor:"#3a1c71",meta:"设计稿"}],vf={level:3},yf={status:"live",liveTitle:"前端架构夜聊"},Wa={email:"frank@vane.dev",phone:"138-0000-0000",site:"https://vane.dev",address:"上海 · 徐汇"},Va={lastActive:"2 小时前",postsThisMonth:12,totalViews:"120w"},Ha=[{id:"a1",title:"年度创作者",desc:"2025",glyph:"年",color:"#e0b34a"},{id:"a2",title:"万粉",desc:"粉丝破万",glyph:"万",color:"#1a5fd0"},{id:"a3",title:"开源之星",desc:"50+ repo",glyph:"星",color:"#11998e"},{id:"a4",title:"优质教程",desc:"官方推荐",glyph:"优",color:"#fc466b"},{id:"a5",title:"连续打卡",desc:"365 天",glyph:"勤",color:"#ff7e5f"},{id:"a6",title:"社区领袖",desc:"版主",glyph:"领袖",color:"#6a11cb"},{id:"a7",title:"早期用户",desc:"内测",glyph:"初",color:"#9aa7b5"},{id:"a8",title:"乐于助人",desc:"解答 1k+",glyph:"助",color:"#2ecc71"}];function T1(){const e=Tr(),t=(e==null?void 0:e.activeTab)??"works";return u.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.8,opacity:.8},children:[u.jsx("b",{children:t})," 页：Core 的 children 兜底内容。"]})}const E1={slug:"quickstart",title:"最小可用主页",group:"basic",capability:"core-assembly",intro:"Core + 最少插件（BannerSlot + StatRow + FollowEcho）装配出可用主页。",why:"先跑通最小组合，再按需叠加插件——这正是插件式主页的增量开发方式。",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: [...], avatar: user.avatar",why:"头图区"},{fn:"createStatRowPlugin",cfg:"items: user.stats",why:"数据行"},{fn:"createFollowEchoPlugin",cfg:"size: 'md'",why:"关注按钮"}],props:["stats={user.stats}","followState={serverState}"],controls:[{key:"verified",label:"加认证徽标",kind:"switch",init:!1},{key:"withTab",label:"加页签 + 内容区",kind:"switch",init:!1}],stageHeight:320};function j1({cfg:e}){const t=!!e.verified,n=!!e.withTab,r=y.useMemo(()=>ie(ne,[Jt({gradient:["#6a11cb","#1a5fd0"],avatar:qt,avatarRound:!0,height:150,overlay:u.jsx("strong",{children:D.name})}),Er({items:D.stats}),...n?[jr({tabs:[{id:"works",label:"作品"},{id:"about",label:"关于"}]})]:[],...t?[Zo({type:"personal"})]:[],$n({size:"md"})]),[t,n]);return u.jsx(r,{containerStyle:{maxWidth:420,margin:"0 auto"},stats:D.stats,verified:t,badgeType:"personal",followState:"none",banner:u.jsxs("span",{children:["@",D.handle]}),defaultActiveTab:n?"works":void 0,children:n?u.jsx(T1,{}):null})}const R1=Object.freeze(Object.defineProperty({__proto__:null,default:j1,meta:E1},Symbol.toStringTag,{value:"Module"})),hu={violet:["#6a11cb","#1a5fd0"],sunset:["#ff7e5f","#feb47b"],mint:["#11998e","#38ef7d"],ink:["#232526","#414345"]},L1={slug:"banner",title:"头图区 BannerSlot",group:"plugin",plugin:"BannerSlot",intro:"封面渐变 + 头像浮层 + 昵称标语叠加，走领域槽 renderBannerArea。",why:"主页第一眼就是头图；把它做成插件，封面/头像/文案都能独立替换，Core 永远不碰样式。",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: ['#6a11cb','#1a5fd0'], avatar: user.avatar, height: 160, overlay: <strong>{user.name}</strong>",why:"负责头图区渲染：渐变/封面背景 + 头像浮层 + 文案叠加"}],props:["banner={<span>@{user.handle}</span>}"],controls:[{key:"gradient",label:"渐变配色",kind:"select",init:"violet",options:[{label:"紫蓝 violet",value:"violet"},{label:"暖阳 sunset",value:"sunset"},{label:"薄荷 mint",value:"mint"},{label:"墨灰 ink",value:"ink"}]},{key:"avatar",label:"显示头像",kind:"switch",init:!0},{key:"round",label:"圆角头像",kind:"switch",init:!0},{key:"height",label:"头图高度",kind:"number",init:160,min:110,max:240,step:10}],stageHeight:320};function N1({cfg:e}){const t=String(e.gradient),n=hu[t]??hu.violet,r=y.useMemo(()=>ie(ne,[Jt({gradient:n,avatar:e.avatar?qt:void 0,avatarRound:!!e.round,height:Number(e.height),overlay:u.jsx("strong",{children:D.name})})]),[n,e.avatar,e.round,e.height]);return u.jsx(r,{containerStyle:{maxWidth:420,margin:"0 auto"},banner:u.jsxs("span",{children:["@",D.handle]})})}const $1=Object.freeze(Object.defineProperty({__proto__:null,default:N1,meta:L1},Symbol.toStringTag,{value:"Module"})),A1={slug:"statrow",title:"数据行 StatRow",group:"plugin",plugin:"StatRow",intro:"关注 / 粉丝 / 获赞 / 作品横排展示，每项「值 + 标签」。",why:"指标展示是主页标配；做成插件后 row/column、分隔线、点击联动都由配置决定，Core 不掺样式。",plugs:[{fn:"createStatRowPlugin",cfg:"items: user.stats, direction: 'row', divider: true",why:"负责数据行渲染，数据源来自 config.items 或 props.stats"}],props:["stats={user.stats}"],controls:[{key:"direction",label:"排布方向",kind:"select",init:"row",options:[{label:"横排 row",value:"row"},{label:"竖排 column",value:"column"}]},{key:"divider",label:"项间分隔线",kind:"switch",init:!0}],stageHeight:260};function M1({cfg:e}){const t=y.useMemo(()=>ie(ne,[Er({items:D.stats,direction:e.direction==="column"?"column":"row",divider:!!e.divider})]),[e.direction,e.divider]);return u.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"},stats:D.stats})}const B1=Object.freeze(Object.defineProperty({__proto__:null,default:M1,meta:A1},Symbol.toStringTag,{value:"Module"}));function z1(){const e=Tr(),t=(e==null?void 0:e.activeTab)??"works";return u.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.8,color:"#4a5056"},children:[u.jsx("b",{style:{color:"#1f2328"},children:t})," —— ",_1[t]??"（空）",u.jsxs("p",{style:{marginTop:12,color:"#6b6b6b",fontSize:12},children:["当前 activeTab 经 ",u.jsx("code",{children:"useProfileContext()"})," 读取：",String(t)]})]})}const F1={slug:"tabsync",title:"页签系统 TabSync",group:"plugin",plugin:"TabSync",intro:"渲染页签栏（underline / pill / segmented）+ 切换联动内容区。",why:"多内容区主页的核心交互；内容怎么渲染交给消费方子节点，TabSync 只管「切」。",plugs:[{fn:"createTabSyncPlugin",cfg:"tabs: [{id:'works',label:'作品'},{id:'feeds',label:'动态'},{id:'about',label:'关于'}], variant: 'underline'",why:"渲染页签栏 + 点击调 context.setActiveTab，内容区订阅后自动重渲染"}],props:['defaultActiveTab="works"'],controls:[{key:"variant",label:"样式变体",kind:"select",init:"underline",options:[{label:"下划线 underline",value:"underline"},{label:"胶囊 pill",value:"pill"},{label:"分段 segmented",value:"segmented"}]},{key:"sticky",label:"吸顶",kind:"switch",init:!1},{key:"scrollTop",label:"切换滚到顶部",kind:"switch",init:!0}],stageHeight:300},O1=[{id:"works",label:"作品"},{id:"feeds",label:"动态"},{id:"about",label:"关于"}];function I1({cfg:e,log:t}){const n=e.variant,r=!!e.sticky,o=!!e.scrollTop,l=y.useMemo(()=>ie(ne,[jr({tabs:O1,variant:n,sticky:r,scrollTopOnChange:o,onChange:i=>t(`切换到 ${i}`)})]),[n,r,o,t]);return u.jsx(l,{containerStyle:{maxWidth:420,margin:"0 auto"},defaultActiveTab:"works",children:u.jsx(z1,{})})}const D1=Object.freeze(Object.defineProperty({__proto__:null,default:I1,meta:F1},Symbol.toStringTag,{value:"Module"})),U1={slug:"verifybadge",title:"认证徽标 VerifyBadge",group:"plugin",plugin:"VerifyBadge",intro:"个人 / 机构认证对勾（内联 SVG），浮于头图右上角。",why:"信任标识是主页的「小但重要」需求；做成插件，认证态/类型都可配置，不污染 Core。",plugs:[{fn:"createVerifyBadgePlugin",cfg:"type: 'personal', showLabel: true",why:"负责认证徽标渲染，verified=false 时自动隐藏"}],props:["verified",'badgeType="personal"'],controls:[{key:"verified",label:"已认证",kind:"switch",init:!0},{key:"type",label:"认证类型",kind:"select",init:"personal",options:[{label:"个人 personal",value:"personal"},{label:"机构 institution",value:"institution"}]},{key:"showLabel",label:"显示文字",kind:"switch",init:!0}],stageHeight:200};function W1({cfg:e}){const t=y.useMemo(()=>ie(ne,[Zo({type:e.type,showLabel:!!e.showLabel})]),[e.type,e.showLabel]);return u.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"},verified:!!e.verified,badgeType:e.type})}const V1=Object.freeze(Object.defineProperty({__proto__:null,default:W1,meta:U1},Symbol.toStringTag,{value:"Module"})),H1={slug:"followecho",title:"关注回显 FollowEcho",group:"plugin",plugin:"FollowEcho",intro:"关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。",why:"关注关系是服务端真相；做成受控插件，点击只作乐观 UI，真相回写 props，不把状态塞进 Core。",plugs:[{fn:"createFollowEchoPlugin",cfg:"size: 'md', onFollow: (next) => api.toggleFollow(uid, next)",why:"负责关注按钮渲染 + 乐观切换；关系变 mutual 时触发 onMutual；mutual 状态下点击即取消关注（目标态 none），由宿主回写 followState"}],props:["followState={serverState}"],controls:[{key:"state",label:"初始关注态",kind:"select",init:"none",options:[{label:"未关注 none",value:"none"},{label:"已关注 following",value:"following"},{label:"互相关注 mutual",value:"mutual"}]},{key:"size",label:"按钮尺寸",kind:"select",init:"md",options:[{label:"中 md",value:"md"},{label:"小 sm",value:"sm"}]}],stageHeight:200,note:"按钮是受控展示：点击只触发 onFollow（乐观 UI），真实关系以 props.followState 为准；互相关注点一次会变为未关注。"};function Q1({cfg:e,log:t}){const n=e.size,r=y.useMemo(()=>ie(ne,[$n({size:n,onFollow:o=>t(`点击 → ${o}`),onMutual:()=>t("关系变为 mutual","info")})]),[n,t]);return u.jsx(r,{containerStyle:{maxWidth:420,margin:"0 auto"},followState:e.state})}const G1=Object.freeze(Object.defineProperty({__proto__:null,default:Q1,meta:H1},Symbol.toStringTag,{value:"Module"})),K1={slug:"bio",title:"简介区 BioSlot",group:"plugin",plugin:"BioSlot",intro:"昵称 + 签名 + 所在地 / 加入时间，走领域槽 renderBioArea。",why:"主页「我是谁」的签名档；做成插件后头图与数据行之间多了一段结构化简介，Core 永远不碰文案。",plugs:[{fn:"createBioSlotPlugin",cfg:"name: user.name, bio: user.bio, location: '上海', joinDate: '2021 加入'",why:"负责简介区渲染，排在头图与数据行之间；全部为空时不占空间"}],props:[],controls:[{key:"showName",label:"显示昵称",kind:"switch",init:!0},{key:"showBio",label:"显示签名",kind:"switch",init:!0},{key:"showMeta",label:"显示地点/时间",kind:"switch",init:!0}],stageHeight:220};function Y1({cfg:e}){const t=y.useMemo(()=>ie(ne,[ja({name:e.showName?D.name:void 0,bio:e.showBio?D.bio:void 0,location:e.showMeta?"上海":void 0,joinDate:e.showMeta?"2021 加入":void 0})]),[e.showName,e.showBio,e.showMeta]);return u.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const X1=Object.freeze(Object.defineProperty({__proto__:null,default:Y1,meta:K1},Symbol.toStringTag,{value:"Module"})),Z1={slug:"social",title:"社交外链 SocialLinks",group:"plugin",plugin:"SocialLinks",intro:"一排可点击的平台入口（微博 / 知乎 / GitHub …），走领域槽 renderBioArea。",why:"主页底部的外链聚合；做成插件后入口列表完全数据驱动，Core 不掺任何平台样式。",plugs:[{fn:"createSocialLinksPlugin",cfg:"links: [...], showLabel: true, align: 'left'",why:"负责社交外链行渲染；常见平台有默认图标字与文案"}],props:[],controls:[{key:"showLabel",label:"显示文案",kind:"switch",init:!0},{key:"align",label:"对齐",kind:"select",init:"left",options:[{label:"左 left",value:"left"},{label:"中 center",value:"center"},{label:"右 right",value:"right"}]}],stageHeight:200};function J1({cfg:e}){const t=y.useMemo(()=>ie(ne,[Ra({links:Ia,showLabel:!!e.showLabel,align:e.align})]),[e.showLabel,e.align]);return u.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const q1=Object.freeze(Object.defineProperty({__proto__:null,default:J1,meta:Z1},Symbol.toStringTag,{value:"Module"})),ew={slug:"tags",title:"兴趣标签 TagList",group:"plugin",plugin:"TagList",intro:"一排圆角小标签，走领域槽 renderBioArea。",why:"兴趣 / 内容领域标记；做成插件后标签完全数据驱动，Core 不掺样式。",plugs:[{fn:"createTagListPlugin",cfg:"tags: ['React','TypeScript','组件库', …]",why:"负责标签行渲染；tags 为空时整体不渲染"}],props:[],controls:[{key:"align",label:"对齐",kind:"select",init:"left",options:[{label:"左 left",value:"left"},{label:"中 center",value:"center"},{label:"右 right",value:"right"}]}],stageHeight:160};function tw({cfg:e}){const t=y.useMemo(()=>ie(ne,[La({tags:Da,align:e.align})]),[e.align]);return u.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const nw=Object.freeze(Object.defineProperty({__proto__:null,default:tw,meta:ew},Symbol.toStringTag,{value:"Module"}));function rw(){const e=Tr(),t=(e==null?void 0:e.activeTab)??"works";return u.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.8,opacity:.8},children:[u.jsx("b",{children:t})," 页：这里放该页签的自定义内容（children 兜底）。"]})}const ow={slug:"worksgrid",title:"作品网格 WorksGrid",group:"plugin",plugin:"WorksGrid",intro:"内容区作品网格（CSS grid），走领域槽 renderContentArea，可随页签联动。",why:"主页「内容」通常是网格；做成内容区插件后，Core 有内容插件时以它替代 children，且能与 TabSync 的 activeTab 联动。",plugs:[{fn:"createWorksGridPlugin",cfg:"items: user.works, columns: 3, tab: 'works'",why:"负责内容区网格渲染；tab 与 context.activeTab 联动，切到作品页才出网格"}],props:["（有 WorksGrid 时内容区由它接管，不再用 children）"],controls:[{key:"columns",label:"列数",kind:"number",init:3,min:2,max:4,step:1},{key:"showTitle",label:"显示分组标题",kind:"switch",init:!0},{key:"withTab",label:"随页签联动（含 TabSync）",kind:"switch",init:!0}],stageHeight:360},lw=[{id:"works",label:"作品"},{id:"about",label:"关于"}];function iw({cfg:e,log:t}){const n=Number(e.columns),r=!!e.withTab,o=!!e.showTitle,l=y.useMemo(()=>ie(ne,[...r?[jr({tabs:lw,onChange:i=>t(`切到 ${i}`)})]:[],Na({items:Ua,columns:n,title:o?"精选作品":void 0,tab:r?"works":void 0})]),[r,n,o,t]);return u.jsx(l,{containerStyle:{maxWidth:460,margin:"0 auto"},defaultActiveTab:r?"works":void 0,children:r?u.jsx(rw,{}):null})}const aw=Object.freeze(Object.defineProperty({__proto__:null,default:iw,meta:ow},Symbol.toStringTag,{value:"Module"})),sw=[{id:"works",label:"作品"},{id:"feeds",label:"动态"},{id:"about",label:"关于"}];function uw(){const e=Tr(),t=(e==null?void 0:e.activeTab)??"works";return u.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.8,opacity:.8},children:[u.jsx("b",{children:t})," 页：Core 的 children 兜底内容。"]})}const cw={slug:"full-combo",title:"全功能组合",group:"advanced",capability:"all-plugins",intro:"16 个官方插件逐个开关，实时生成对应装配代码。",why:"把分散的插件页串起来：一个主页就是「挑插件 + 写配置」，没有一行样式散落在业务里。",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: [...], avatar: user.avatar",why:"头图区"},{fn:"createBioSlotPlugin",cfg:"name, bio, location, joinDate",why:"简介区"},{fn:"createStatRowPlugin",cfg:"items: user.stats",why:"数据行"},{fn:"createSocialLinksPlugin",cfg:"links: [...]",why:"社交外链"},{fn:"createTagListPlugin",cfg:"tags: [...]",why:"兴趣标签"},{fn:"createTabSyncPlugin",cfg:"tabs: [...]",why:"页签栏 + 内容联动"},{fn:"createVerifyBadgePlugin",cfg:"type: 'personal'",why:"认证徽标"},{fn:"createFollowEchoPlugin",cfg:"size: 'md'",why:"关注按钮"},{fn:"createWorksGridPlugin",cfg:"items: user.works, tab: 'works'",why:"作品网格（内容区）"},{fn:"createMembershipBadgePlugin",cfg:"level: 3",why:"会员角标（徽标区）"},{fn:"createQRSharePlugin",cfg:"url: user.homeUrl",why:"二维码分享（徽标区）"},{fn:"createLiveStatusPlugin",cfg:"status: 'live'",why:"在线/直播状态（简介区）"},{fn:"createContactCardPlugin",cfg:"email, site, address",why:"联系信息（简介区）"},{fn:"createActivitySummaryPlugin",cfg:"lastActive, postsThisMonth",why:"活跃度小结（简介区）"},{fn:"createMessageButtonPlugin",cfg:"label: '私信'",why:"私信按钮（关注区）"},{fn:"createAchievementWallPlugin",cfg:"items: user.badges, tab: 'about'",why:"成就墙（内容区）"}],props:["verified","stats={user.stats}","followState={serverState}"],controls:[{key:"banner",label:"BannerSlot",kind:"switch",init:!0},{key:"bio",label:"BioSlot",kind:"switch",init:!0},{key:"stat",label:"StatRow",kind:"switch",init:!0},{key:"social",label:"SocialLinks",kind:"switch",init:!0},{key:"tags",label:"TagList",kind:"switch",init:!0},{key:"tab",label:"TabSync",kind:"switch",init:!0},{key:"badge",label:"VerifyBadge",kind:"switch",init:!0},{key:"follow",label:"FollowEcho",kind:"switch",init:!0},{key:"works",label:"WorksGrid",kind:"switch",init:!0},{key:"membership",label:"MembershipBadge",kind:"switch",init:!0},{key:"qrshare",label:"QRShare",kind:"switch",init:!0},{key:"live",label:"LiveStatus",kind:"switch",init:!0},{key:"contact",label:"ContactCard",kind:"switch",init:!0},{key:"activity",label:"ActivitySummary",kind:"switch",init:!0},{key:"message",label:"MessageButton",kind:"switch",init:!0},{key:"achievements",label:"AchievementWall",kind:"switch",init:!0}],stageHeight:560};function dw({cfg:e}){const t=!!e.tab,n=y.useMemo(()=>{const r=[];return e.banner&&r.push(Jt({gradient:["#6a11cb","#1a5fd0"],avatar:qt,avatarRound:!0,height:150,overlay:u.jsx("strong",{children:D.name})})),e.bio&&r.push(ja({name:D.name,subtitle:"前端工程师 · 组件库作者",bio:D.bio,location:"上海",joinDate:"2021 加入"})),e.stat&&r.push(Er({items:D.stats})),e.social&&r.push(Ra({links:Ia})),e.tags&&r.push(La({tags:Da})),t&&r.push(jr({tabs:sw})),e.badge&&r.push(Zo({type:"personal"})),e.follow&&r.push($n({size:"md"})),e.works&&r.push(Na({items:Ua,columns:3,title:"精选作品",tab:t?"works":void 0})),e.membership&&r.push($a(vf)),e.qrshare&&r.push(Aa({url:"https://vane.dev/u/frankvane"})),e.live&&r.push(Ma(yf)),e.contact&&r.push(Ba(Wa)),e.activity&&r.push(za(Va)),e.message&&r.push(Fa({label:"私信"})),e.achievements&&r.push(Oa({items:Ha,columns:4,title:"成就",tab:t?"about":void 0})),ie(ne,r)},[e.banner,e.bio,e.stat,e.social,e.tags,t,e.badge,e.follow,e.works,e.membership,e.qrshare,e.live,e.contact,e.activity,e.message,e.achievements]);return u.jsx(n,{containerStyle:{maxWidth:460,margin:"0 auto"},stats:D.stats,verified:!!e.badge,badgeType:"personal",followState:"none",banner:u.jsxs("span",{children:["@",D.handle]}),defaultActiveTab:t?"works":void 0,children:t?u.jsx(uw,{}):null})}const fw=Object.freeze(Object.defineProperty({__proto__:null,default:dw,meta:cw},Symbol.toStringTag,{value:"Module"})),pw={slug:"dynamic-control",title:"受控与事件",group:"advanced",capability:"controlled-state",intro:"followState 走 props 受控，点击关注回调 onFollow / onMutual，coreRef 读状态与强刷。",why:"真实业务里关注关系是服务端真相，UI 只是乐观回显；这页演示怎么把插件接到你自己的状态机。",plugs:[{fn:"createFollowEchoPlugin",cfg:"onFollow, onMutual",why:"受控三态按钮 + 回调"}],props:["followState={serverState}","onFollow","onMutual"],controls:[],stageHeight:300},gw=["none","following","mutual"],mw={none:"未关注",following:"已关注",mutual:"互相关注"};function hw({log:e}){const[t,n]=y.useState("none"),r=y.useRef(null),o=y.useMemo(()=>ie(ne,[Jt({gradient:["#1a5fd0","#6a11cb"],avatar:qt,avatarRound:!0,height:140,overlay:u.jsx("strong",{children:D.name})}),Er({items:D.stats}),$n({size:"md",onFollow:l=>{n(l),e(`onFollow → ${l}`,"event")},onMutual:l=>e(`onMutual → ${l}（关系变为互相关注）`,"info")})]),[e]);return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[gw.map(l=>u.jsx("button",{type:"button",onClick:()=>{n(l),e(`外部设置 followState = ${l}`)},style:{padding:"6px 12px",borderRadius:8,border:"1px solid rgba(125,130,140,0.4)",background:t===l?"#1a5fd0":"transparent",color:t===l?"#fff":"inherit",cursor:"pointer"},children:mw[l]},l)),u.jsx("button",{type:"button",onClick:()=>{var a,s;const l=(a=r.current)==null?void 0:a.getActiveTab(),i=(s=r.current)==null?void 0:s.getSize();e(`coreRef: activeTab=${l}, 容器=${i==null?void 0:i.width}×${i==null?void 0:i.height}`,"info")},style:{padding:"6px 12px",borderRadius:8,border:"1px dashed rgba(125,130,140,0.5)",background:"transparent",color:"inherit",cursor:"pointer"},children:"读 coreRef"}),u.jsx("button",{type:"button",onClick:()=>{var l;return(l=r.current)==null?void 0:l.forceUpdate()},style:{padding:"6px 12px",borderRadius:8,border:"1px dashed rgba(125,130,140,0.5)",background:"transparent",color:"inherit",cursor:"pointer"},children:"强制刷新"})]}),u.jsx(o,{ref:r,containerStyle:{maxWidth:420,margin:"0 auto"},stats:D.stats,followState:t,banner:u.jsxs("span",{children:["@",D.handle]})})]})}const vw=Object.freeze(Object.defineProperty({__proto__:null,default:hw,meta:pw},Symbol.toStringTag,{value:"Module"})),yw={slug:"membership",title:"会员角标 MembershipBadge",group:"plugin",plugin:"MembershipBadge",intro:"会员 / VIP 等级角标，浮于头图右上，与认证徽标同区并排。",why:"付费会员 / 社区等级的可视标识；做成插件后头图右上多了一块身份区，Core 不碰配色。",plugs:[{fn:"createBannerSlotPlugin",cfg:"avatar: user.avatar, overlay: user.name",why:"提供头图背景，让角标落在它应有的右上角"},{fn:"createMembershipBadgePlugin",cfg:"level: {{level}}, showLabel: true",why:"负责会员角标渲染，与 VerifyBadge / QRShare 横向并排"}],props:[],controls:[{key:"level",label:"等级",kind:"select",init:"3",options:[{label:"VIP1",value:"1"},{label:"VIP2",value:"2"},{label:"VIP3",value:"3"}]}],stageHeight:220};function ww({cfg:e}){const t=y.useMemo(()=>ie(ne,[Jt({gradient:["#6a11cb","#1a5fd0"],avatar:qt,overlay:D.name}),$a({level:Number(e.level)})]),[e.level]);return u.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const Sw=Object.freeze(Object.defineProperty({__proto__:null,default:ww,meta:yw},Symbol.toStringTag,{value:"Module"})),xw={slug:"qrshare",title:"二维码分享 QRShare",group:"plugin",plugin:"QRShare",intro:"主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",why:"主页传播入口；做成插件后头图右上多了一块交互区，弹层用内部 state 控制，不污染 Core。",plugs:[{fn:"createBannerSlotPlugin",cfg:"avatar: user.avatar, overlay: user.name",why:"提供头图背景，让分享按钮落在它应有的右上角"},{fn:"createQRSharePlugin",cfg:"url: user.homeUrl, buttonLabel: '分享'",why:"负责分享按钮与弹层，与 VerifyBadge / MembershipBadge 横向并排"}],props:[],controls:[],stageHeight:240,note:"点击右上角「分享」按钮查看二维码占位面板（装饰性点阵，非真实可扫码）。"};function Pw(){const e=y.useMemo(()=>ie(ne,[Jt({gradient:["#6a11cb","#1a5fd0"],avatar:qt,overlay:D.name}),Aa({url:"https://vane.dev/u/frankvane"})]),[]);return u.jsx(e,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const kw=Object.freeze(Object.defineProperty({__proto__:null,default:Pw,meta:xw},Symbol.toStringTag,{value:"Module"})),bw={slug:"livestatus",title:"在线状态 LiveStatus",group:"plugin",plugin:"LiveStatus",intro:"在线 / 直播状态指示：圆点 + 文案，直播态高亮。",why:"主播 / 客服 / 社区的实时状态；做成插件后简介区多了一块状态行，Core 不碰业务。",plugs:[{fn:"createLiveStatusPlugin",cfg:"status: '{{status}}', liveTitle: '前端架构夜聊'",why:"负责状态行渲染，排在简介区，与 BioSlot / SocialLinks 同区串联"}],props:[],controls:[{key:"status",label:"状态",kind:"select",init:"live",options:[{label:"在线",value:"online"},{label:"离开",value:"away"},{label:"忙碌",value:"busy"},{label:"离线",value:"offline"},{label:"直播中",value:"live"}]}],stageHeight:120};function Cw({cfg:e}){const t=y.useMemo(()=>ie(ne,[Ma({status:e.status,liveTitle:"前端架构夜聊"})]),[e.status]);return u.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const _w=Object.freeze(Object.defineProperty({__proto__:null,default:Cw,meta:bw},Symbol.toStringTag,{value:"Module"})),Tw={slug:"contact",title:"联系信息 ContactCard",group:"plugin",plugin:"ContactCard",intro:"联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",why:"商家 / 创作者公开联系方式；做成插件后简介区多了一块联系入口，外链带 rel 防钓鱼。",plugs:[{fn:"createContactCardPlugin",cfg:"email: user.email, site: user.site, address: user.address",why:"负责联系信息渲染，排在简介区，与 BioSlot / SocialLinks 同区串联"}],props:[],controls:[],stageHeight:120};function Ew(){const e=y.useMemo(()=>ie(ne,[Ba(Wa)]),[]);return u.jsx(e,{containerStyle:{maxWidth:460,margin:"0 auto"}})}const jw=Object.freeze(Object.defineProperty({__proto__:null,default:Ew,meta:Tw},Symbol.toStringTag,{value:"Module"})),Rw={slug:"activity",title:"活跃度小结 ActivitySummary",group:"plugin",plugin:"ActivitySummary",intro:"活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",why:"创作者活跃度 / 社区粘性提示；做成插件后简介区多了一块轻量数据，不抢主体。",plugs:[{fn:"createActivitySummaryPlugin",cfg:"lastActive: '2 小时前', postsThisMonth: 12, totalViews: '120w'",why:"负责活跃度小结渲染，排在简介区，与 BioSlot / SocialLinks 同区串联"}],props:[],controls:[],stageHeight:120};function Lw(){const e=y.useMemo(()=>ie(ne,[za(Va)]),[]);return u.jsx(e,{containerStyle:{maxWidth:460,margin:"0 auto"}})}const Nw=Object.freeze(Object.defineProperty({__proto__:null,default:Lw,meta:Rw},Symbol.toStringTag,{value:"Module"})),$w={slug:"message",title:"私信按钮 MessageButton",group:"plugin",plugin:"MessageButton",intro:"私信按钮：与关注回显同区并排，点击拉起会话。",why:"主页一对一沟通入口；做成插件后关注区多了一块描边按钮，与关注形成主次。",plugs:[{fn:"createFollowEchoPlugin",cfg:"size: 'md'",why:"提供关注态，让私信按钮落在它应有的并排位置"},{fn:"createMessageButtonPlugin",cfg:"label: '私信', onMessage: () => openChat(uid)",why:"负责私信按钮渲染，与 FollowEcho 横向并排"}],props:[],controls:[{key:"showMsg",label:"显示私信按钮",kind:"switch",init:!0}],stageHeight:120};function Aw({cfg:e}){const t=y.useMemo(()=>ie(ne,[$n({size:"md",state:"following"}),...e.showMsg?[Fa({label:"私信",onMessage:()=>{}})]:[]]),[e.showMsg]);return u.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const Mw=Object.freeze(Object.defineProperty({__proto__:null,default:Aw,meta:$w},Symbol.toStringTag,{value:"Module"})),Bw={slug:"achievements",title:"成就墙 AchievementWall",group:"plugin",plugin:"AchievementWall",intro:"成就 / 勋章墙：随 activeTab 联动的内容区插件。",why:"个人主页荣誉展示；做成内容区插件后，切到对应页签才出墙，与 WorksGrid 同区可共存。",plugs:[{fn:"createAchievementWallPlugin",cfg:"items: user.badges, columns: 4, title: '成就'",why:"负责成就墙渲染，走 renderContentArea，有它时接管 children"}],props:[],controls:[{key:"columns",label:"列数",kind:"number",init:4,min:2,max:8,step:1}],stageHeight:240};function zw({cfg:e}){const t=y.useMemo(()=>ie(ne,[Oa({items:Ha,columns:Number(e.columns),title:"成就"})]),[e.columns]);return u.jsx(t,{containerStyle:{maxWidth:480,margin:"0 auto"}})}const Fw=Object.freeze(Object.defineProperty({__proto__:null,default:zw,meta:Bw},Symbol.toStringTag,{value:"Module"})),Ow=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins, useProfileContext } from "vane-profile";
import {
  createBannerSlotPlugin,
  createStatRowPlugin,
  createFollowEchoPlugin,
  createVerifyBadgePlugin,
  createTabSyncPlugin,
} from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { AVATAR, SAMPLE_USER } from "../data/sample";

/** 内容区：仅在有 TabSync 时显示，演示 children 兜底 */
function ProfileContent() {
  const ctx = useProfileContext();
  const tab = ctx?.activeTab ?? "works";
  return (
    <div style={{ minHeight: 120, fontSize: 14, lineHeight: 1.8, opacity: 0.8 }}>
      <b>{tab}</b> 页：Core 的 children 兜底内容。
    </div>
  );
}

/**
 * 00 · 最小可用主页（基础功能）
 * 5 行装配出一个能用的主页：头图 + 数据行 + 关注。再叠加认证 / 页签就是另一种观感。
 */
export const meta: DemoMeta = {
  slug: "quickstart",
  title: "最小可用主页",
  group: "basic",
  capability: "core-assembly",
  intro: "Core + 最少插件（BannerSlot + StatRow + FollowEcho）装配出可用主页。",
  why: "先跑通最小组合，再按需叠加插件——这正是插件式主页的增量开发方式。",
  plugs: [
    { fn: "createBannerSlotPlugin", cfg: "gradient: [...], avatar: user.avatar", why: "头图区" },
    { fn: "createStatRowPlugin", cfg: "items: user.stats", why: "数据行" },
    { fn: "createFollowEchoPlugin", cfg: "size: 'md'", why: "关注按钮" },
  ],
  props: ["stats={user.stats}", "followState={serverState}"],
  controls: [
    { key: "verified", label: "加认证徽标", kind: "switch", init: false },
    { key: "withTab", label: "加页签 + 内容区", kind: "switch", init: false },
  ],
  stageHeight: 320,
};

export default function Stage({ cfg }: DemoStageProps) {
  const verified = Boolean(cfg.verified);
  const withTab = Boolean(cfg.withTab);

  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createBannerSlotPlugin({
          gradient: ["#6a11cb", "#1a5fd0"],
          avatar: AVATAR,
          avatarRound: true,
          height: 150,
          overlay: <strong>{SAMPLE_USER.name}</strong>,
        }),
        createStatRowPlugin({ items: SAMPLE_USER.stats }),
        ...(withTab
          ? [createTabSyncPlugin({ tabs: [{ id: "works", label: "作品" }, { id: "about", label: "关于" }] })]
          : []),
        ...(verified ? [createVerifyBadgePlugin({ type: "personal" })] : []),
        createFollowEchoPlugin({ size: "md" }),
      ]),
    [verified, withTab]
  );

  return (
    <Profile
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      stats={SAMPLE_USER.stats}
      verified={verified}
      badgeType="personal"
      followState="none"
      banner={<span>@{SAMPLE_USER.handle}</span>}
      defaultActiveTab={withTab ? "works" : undefined}
    >
      {withTab ? <ProfileContent /> : null}
    </Profile>
  );
}
`,Iw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createBannerSlotPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { AVATAR, SAMPLE_USER } from "../data/sample";

const GRADIENTS: Record<string, [string, string]> = {
  violet: ["#6a11cb", "#1a5fd0"],
  sunset: ["#ff7e5f", "#feb47b"],
  mint: ["#11998e", "#38ef7d"],
  ink: ["#232526", "#414345"],
};

/**
 * 01 · 头图区 BannerSlot
 * 单装这一个插件：只渲染头图区，演示「领域槽」如何把头图封装成可替换的视觉块。
 */
export const meta: DemoMeta = {
  slug: "banner",
  title: "头图区 BannerSlot",
  group: "plugin",
  plugin: "BannerSlot",
  intro: "封面渐变 + 头像浮层 + 昵称标语叠加，走领域槽 renderBannerArea。",
  why: "主页第一眼就是头图；把它做成插件，封面/头像/文案都能独立替换，Core 永远不碰样式。",
  plugs: [
    {
      fn: "createBannerSlotPlugin",
      cfg: "gradient: ['#6a11cb','#1a5fd0'], avatar: user.avatar, height: 160, overlay: <strong>{user.name}</strong>",
      why: "负责头图区渲染：渐变/封面背景 + 头像浮层 + 文案叠加",
    },
  ],
  props: ["banner={<span>@{user.handle}</span>}"],
  controls: [
    {
      key: "gradient",
      label: "渐变配色",
      kind: "select",
      init: "violet",
      options: [
        { label: "紫蓝 violet", value: "violet" },
        { label: "暖阳 sunset", value: "sunset" },
        { label: "薄荷 mint", value: "mint" },
        { label: "墨灰 ink", value: "ink" },
      ],
    },
    { key: "avatar", label: "显示头像", kind: "switch", init: true },
    { key: "round", label: "圆角头像", kind: "switch", init: true },
    { key: "height", label: "头图高度", kind: "number", init: 160, min: 110, max: 240, step: 10 },
  ],
  stageHeight: 320,
};

export default function Stage({ cfg }: DemoStageProps) {
  const gradientKey = String(cfg.gradient);
  const gradient = GRADIENTS[gradientKey] ?? GRADIENTS.violet;

  // 用 useMemo 固定组件类型，避免拖控件时整块重挂载
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createBannerSlotPlugin({
          gradient,
          avatar: cfg.avatar ? AVATAR : undefined,
          avatarRound: Boolean(cfg.round),
          height: Number(cfg.height),
          overlay: <strong>{SAMPLE_USER.name}</strong>,
        }),
      ]),
    [gradient, cfg.avatar, cfg.round, cfg.height]
  );

  return (
    <Profile
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      banner={<span>@{SAMPLE_USER.handle}</span>}
    />
  );
}
`,Dw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createStatRowPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_USER } from "../data/sample";

/**
 * 02 · 数据行 StatRow
 * 只装 StatRow：横排关注/粉丝/获赞/作品。演示数据从 config.items 注入。
 */
export const meta: DemoMeta = {
  slug: "statrow",
  title: "数据行 StatRow",
  group: "plugin",
  plugin: "StatRow",
  intro: "关注 / 粉丝 / 获赞 / 作品横排展示，每项「值 + 标签」。",
  why: "指标展示是主页标配；做成插件后 row/column、分隔线、点击联动都由配置决定，Core 不掺样式。",
  plugs: [
    {
      fn: "createStatRowPlugin",
      cfg: "items: user.stats, direction: 'row', divider: true",
      why: "负责数据行渲染，数据源来自 config.items 或 props.stats",
    },
  ],
  props: ["stats={user.stats}"],
  controls: [
    {
      key: "direction",
      label: "排布方向",
      kind: "select",
      init: "row",
      options: [
        { label: "横排 row", value: "row" },
        { label: "竖排 column", value: "column" },
      ],
    },
    { key: "divider", label: "项间分隔线", kind: "switch", init: true },
  ],
  stageHeight: 260,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createStatRowPlugin({
          items: SAMPLE_USER.stats,
          direction: cfg.direction === "column" ? "column" : "row",
          divider: Boolean(cfg.divider),
        }),
      ]),
    [cfg.direction, cfg.divider]
  );

  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} stats={SAMPLE_USER.stats} />;
}
`,Uw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins, useProfileContext } from "vane-profile";
import { createTabSyncPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { TAB_CONTENT } from "../data/sample";

/** 内容区：订阅 activeTab，随页签切换重渲染（TabSync 只负责切 tab，不渲染内容） */
function ProfileContent() {
  const ctx = useProfileContext();
  const tab = ctx?.activeTab ?? "works";
  return (
    <div style={{ minHeight: 120, fontSize: 14, lineHeight: 1.8, color: "#4a5056" }}>
      <b style={{ color: "#1f2328" }}>{tab}</b> —— {TAB_CONTENT[tab] ?? "（空）"}
      <p style={{ marginTop: 12, color: "#6b6b6b", fontSize: 12 }}>
        当前 activeTab 经 <code>useProfileContext()</code> 读取：{String(tab)}
      </p>
    </div>
  );
}

/**
 * 03 · 页签系统 TabSync
 * 交互中枢：点击切 tab → 内容区经 context.activeTab 自动重渲染。
 */
export const meta: DemoMeta = {
  slug: "tabsync",
  title: "页签系统 TabSync",
  group: "plugin",
  plugin: "TabSync",
  intro: "渲染页签栏（underline / pill / segmented）+ 切换联动内容区。",
  why: "多内容区主页的核心交互；内容怎么渲染交给消费方子节点，TabSync 只管「切」。",
  plugs: [
    {
      fn: "createTabSyncPlugin",
      cfg: "tabs: [{id:'works',label:'作品'},{id:'feeds',label:'动态'},{id:'about',label:'关于'}], variant: 'underline'",
      why: "渲染页签栏 + 点击调 context.setActiveTab，内容区订阅后自动重渲染",
    },
  ],
  props: ["defaultActiveTab=\\"works\\""],
  controls: [
    {
      key: "variant",
      label: "样式变体",
      kind: "select",
      init: "underline",
      options: [
        { label: "下划线 underline", value: "underline" },
        { label: "胶囊 pill", value: "pill" },
        { label: "分段 segmented", value: "segmented" },
      ],
    },
    { key: "sticky", label: "吸顶", kind: "switch", init: false },
    { key: "scrollTop", label: "切换滚到顶部", kind: "switch", init: true },
  ],
  stageHeight: 300,
};

const TABS = [
  { id: "works", label: "作品" },
  { id: "feeds", label: "动态" },
  { id: "about", label: "关于" },
];

export default function Stage({ cfg, log }: DemoStageProps) {
  // 成员提取后进依赖（依赖数组不允许成员表达式）；log 为 DemoPage 的稳定 useCallback
  const variant = cfg.variant as "underline" | "pill" | "segmented";
  const sticky = Boolean(cfg.sticky);
  const scrollTopOnChange = Boolean(cfg.scrollTop);
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createTabSyncPlugin({
          tabs: TABS,
          variant,
          sticky,
          scrollTopOnChange,
          onChange: (id) => log(\`切换到 \${id}\`),
        }),
      ]),
    [variant, sticky, scrollTopOnChange, log]
  );

  return (
    <Profile
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      defaultActiveTab="works"
    >
      <ProfileContent />
    </Profile>
  );
}
`,Ww=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createVerifyBadgePlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";

/**
 * 04 · 认证徽标 VerifyBadge
 * 只装 VerifyBadge：个人/机构两种对勾浮于头图右上角。verified=false 自动隐藏。
 */
export const meta: DemoMeta = {
  slug: "verifybadge",
  title: "认证徽标 VerifyBadge",
  group: "plugin",
  plugin: "VerifyBadge",
  intro: "个人 / 机构认证对勾（内联 SVG），浮于头图右上角。",
  why: "信任标识是主页的「小但重要」需求；做成插件，认证态/类型都可配置，不污染 Core。",
  plugs: [
    {
      fn: "createVerifyBadgePlugin",
      cfg: "type: 'personal', showLabel: true",
      why: "负责认证徽标渲染，verified=false 时自动隐藏",
    },
  ],
  props: ["verified", "badgeType=\\"personal\\""],
  controls: [
    { key: "verified", label: "已认证", kind: "switch", init: true },
    {
      key: "type",
      label: "认证类型",
      kind: "select",
      init: "personal",
      options: [
        { label: "个人 personal", value: "personal" },
        { label: "机构 institution", value: "institution" },
      ],
    },
    { key: "showLabel", label: "显示文字", kind: "switch", init: true },
  ],
  stageHeight: 200,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createVerifyBadgePlugin({
          type: cfg.type as "personal" | "institution",
          showLabel: Boolean(cfg.showLabel),
        }),
      ]),
    [cfg.type, cfg.showLabel]
  );

  return (
    <Profile
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      verified={Boolean(cfg.verified)}
      badgeType={cfg.type as "personal" | "institution"}
    />
  );
}
`,Vw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createFollowEchoPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";

/**
 * 05 · 关注回显 FollowEcho
 * 只装 FollowEcho：关注/已关注/互相关注三态按钮，受控于 props.followState。
 */
export const meta: DemoMeta = {
  slug: "followecho",
  title: "关注回显 FollowEcho",
  group: "plugin",
  plugin: "FollowEcho",
  intro: "关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。",
  why: "关注关系是服务端真相；做成受控插件，点击只作乐观 UI，真相回写 props，不把状态塞进 Core。",
  plugs: [
    {
      fn: "createFollowEchoPlugin",
      cfg: "size: 'md', onFollow: (next) => api.toggleFollow(uid, next)",
      why: "负责关注按钮渲染 + 乐观切换；关系变 mutual 时触发 onMutual；mutual 状态下点击即取消关注（目标态 none），由宿主回写 followState",
    },
  ],
  props: ["followState={serverState}"],
  controls: [
    {
      key: "state",
      label: "初始关注态",
      kind: "select",
      init: "none",
      options: [
        { label: "未关注 none", value: "none" },
        { label: "已关注 following", value: "following" },
        { label: "互相关注 mutual", value: "mutual" },
      ],
    },
    {
      key: "size",
      label: "按钮尺寸",
      kind: "select",
      init: "md",
      options: [
        { label: "中 md", value: "md" },
        { label: "小 sm", value: "sm" },
      ],
    },
  ],
  stageHeight: 200,
  note: "按钮是受控展示：点击只触发 onFollow（乐观 UI），真实关系以 props.followState 为准；互相关注点一次会变为未关注。",
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const size = cfg.size as "sm" | "md";
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createFollowEchoPlugin({
          size,
          onFollow: (next) => log(\`点击 → \${next}\`),
          onMutual: () => log("关系变为 mutual", "info"),
        }),
      ]),
    [size, log]
  );

  return (
    <Profile
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      followState={cfg.state as "none" | "following" | "mutual"}
    />
  );
}
`,Hw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createBioSlotPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_USER } from "../data/sample";

/**
 * 06 · 简介区 BioSlot
 * 单装这一个插件：只渲染头像下方的简介区（昵称 / 签名 / 地点·时间）。
 */
export const meta: DemoMeta = {
  slug: "bio",
  title: "简介区 BioSlot",
  group: "plugin",
  plugin: "BioSlot",
  intro: "昵称 + 签名 + 所在地 / 加入时间，走领域槽 renderBioArea。",
  why: "主页「我是谁」的签名档；做成插件后头图与数据行之间多了一段结构化简介，Core 永远不碰文案。",
  plugs: [
    {
      fn: "createBioSlotPlugin",
      cfg: "name: user.name, bio: user.bio, location: '上海', joinDate: '2021 加入'",
      why: "负责简介区渲染，排在头图与数据行之间；全部为空时不占空间",
    },
  ],
  props: [],
  controls: [
    { key: "showName", label: "显示昵称", kind: "switch", init: true },
    { key: "showBio", label: "显示签名", kind: "switch", init: true },
    { key: "showMeta", label: "显示地点/时间", kind: "switch", init: true },
  ],
  stageHeight: 220,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createBioSlotPlugin({
          name: cfg.showName ? SAMPLE_USER.name : undefined,
          bio: cfg.showBio ? SAMPLE_USER.bio : undefined,
          location: cfg.showMeta ? "上海" : undefined,
          joinDate: cfg.showMeta ? "2021 加入" : undefined,
        }),
      ]),
    [cfg.showName, cfg.showBio, cfg.showMeta]
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,Qw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createSocialLinksPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_LINKS } from "../data/sample";

/**
 * 07 · 社交外链 SocialLinks
 * 单装这一个插件：只渲染一排可点击的平台入口（图标字占位，无图片资源）。
 */
export const meta: DemoMeta = {
  slug: "social",
  title: "社交外链 SocialLinks",
  group: "plugin",
  plugin: "SocialLinks",
  intro: "一排可点击的平台入口（微博 / 知乎 / GitHub …），走领域槽 renderBioArea。",
  why: "主页底部的外链聚合；做成插件后入口列表完全数据驱动，Core 不掺任何平台样式。",
  plugs: [
    {
      fn: "createSocialLinksPlugin",
      cfg: "links: [...], showLabel: true, align: 'left'",
      why: "负责社交外链行渲染；常见平台有默认图标字与文案",
    },
  ],
  props: [],
  controls: [
    { key: "showLabel", label: "显示文案", kind: "switch", init: true },
    {
      key: "align",
      label: "对齐",
      kind: "select",
      init: "left",
      options: [
        { label: "左 left", value: "left" },
        { label: "中 center", value: "center" },
        { label: "右 right", value: "right" },
      ],
    },
  ],
  stageHeight: 200,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createSocialLinksPlugin({
          links: SAMPLE_LINKS,
          showLabel: Boolean(cfg.showLabel),
          align: cfg.align as "left" | "center" | "right",
        }),
      ]),
    [cfg.showLabel, cfg.align]
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,Gw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createTagListPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_TAGS } from "../data/sample";

/**
 * 08 · 兴趣标签 TagList
 * 单装这一个插件：只渲染一排圆角小标签。
 */
export const meta: DemoMeta = {
  slug: "tags",
  title: "兴趣标签 TagList",
  group: "plugin",
  plugin: "TagList",
  intro: "一排圆角小标签，走领域槽 renderBioArea。",
  why: "兴趣 / 内容领域标记；做成插件后标签完全数据驱动，Core 不掺样式。",
  plugs: [
    {
      fn: "createTagListPlugin",
      cfg: "tags: ['React','TypeScript','组件库', …]",
      why: "负责标签行渲染；tags 为空时整体不渲染",
    },
  ],
  props: [],
  controls: [
    {
      key: "align",
      label: "对齐",
      kind: "select",
      init: "left",
      options: [
        { label: "左 left", value: "left" },
        { label: "中 center", value: "center" },
        { label: "右 right", value: "right" },
      ],
    },
  ],
  stageHeight: 160,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createTagListPlugin({
          tags: SAMPLE_TAGS,
          align: cfg.align as "left" | "center" | "right",
        }),
      ]),
    [cfg.align]
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,Kw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins, useProfileContext } from "vane-profile";
import { createTabSyncPlugin, createWorksGridPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_WORKS } from "../data/sample";

/** 内容兜底：切到非作品页签时显示文本（演示「内容区由插件接管 / children 兜底」） */
function ProfileContent() {
  const ctx = useProfileContext();
  const tab = ctx?.activeTab ?? "works";
  return (
    <div style={{ minHeight: 120, fontSize: 14, lineHeight: 1.8, opacity: 0.8 }}>
      <b>{tab}</b> 页：这里放该页签的自定义内容（children 兜底）。
    </div>
  );
}

/**
 * 09 · 作品网格 WorksGrid
 * 单装这一个插件：内容区渲染作品网格，可随 activeTab 联动显示。
 */
export const meta: DemoMeta = {
  slug: "worksgrid",
  title: "作品网格 WorksGrid",
  group: "plugin",
  plugin: "WorksGrid",
  intro: "内容区作品网格（CSS grid），走领域槽 renderContentArea，可随页签联动。",
  why: "主页「内容」通常是网格；做成内容区插件后，Core 有内容插件时以它替代 children，且能与 TabSync 的 activeTab 联动。",
  plugs: [
    {
      fn: "createWorksGridPlugin",
      cfg: "items: user.works, columns: 3, tab: 'works'",
      why: "负责内容区网格渲染；tab 与 context.activeTab 联动，切到作品页才出网格",
    },
  ],
  props: ["（有 WorksGrid 时内容区由它接管，不再用 children）"],
  controls: [
    {
      key: "columns",
      label: "列数",
      kind: "number",
      init: 3,
      min: 2,
      max: 4,
      step: 1,
    },
    { key: "showTitle", label: "显示分组标题", kind: "switch", init: true },
    {
      key: "withTab",
      label: "随页签联动（含 TabSync）",
      kind: "switch",
      init: true,
    },
  ],
  stageHeight: 360,
};

const TABS = [
  { id: "works", label: "作品" },
  { id: "about", label: "关于" },
];

export default function Stage({ cfg, log }: DemoStageProps) {
  const columns = Number(cfg.columns);
  const withTab = Boolean(cfg.withTab);
  const showTitle = Boolean(cfg.showTitle);
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        ...(withTab
          ? [
              createTabSyncPlugin({
                tabs: TABS,
                onChange: (id) => log(\`切到 \${id}\`),
              }),
            ]
          : []),
        createWorksGridPlugin({
          items: SAMPLE_WORKS,
          columns,
          title: showTitle ? "精选作品" : undefined,
          // 勾选「随页签联动」时只在 works 页显示，配合 TabSync；
          // 否则始终显示（适合没有页签、以作品为主页内容的主页）
          tab: withTab ? "works" : undefined,
        }),
      ]),
    [withTab, columns, showTitle, log]
  );

  return (
    <Profile
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}
      defaultActiveTab={withTab ? "works" : undefined}
    >
      {withTab ? <ProfileContent /> : null}
    </Profile>
  );
}
`,Yw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins, useProfileContext } from "vane-profile";
import {
  createBannerSlotPlugin,
  createStatRowPlugin,
  createTabSyncPlugin,
  createVerifyBadgePlugin,
  createFollowEchoPlugin,
  createBioSlotPlugin,
  createSocialLinksPlugin,
  createTagListPlugin,
  createWorksGridPlugin,
  createMembershipBadgePlugin,
  createQRSharePlugin,
  createLiveStatusPlugin,
  createContactCardPlugin,
  createActivitySummaryPlugin,
  createMessageButtonPlugin,
  createAchievementWallPlugin,
} from "vane-profile/custom-plugins";
import type { ProfilePlugin } from "vane-profile";
import type { DemoMeta, DemoStageProps } from "./types";
import {
  AVATAR,
  SAMPLE_USER,
  SAMPLE_LINKS,
  SAMPLE_TAGS,
  SAMPLE_WORKS,
  SAMPLE_MEMBERSHIP,
  SAMPLE_LIVE,
  SAMPLE_CONTACT,
  SAMPLE_ACTIVITY,
  SAMPLE_ACHIEVEMENTS,
} from "../data/sample";

const TABS = [
  { id: "works", label: "作品" },
  { id: "feeds", label: "动态" },
  { id: "about", label: "关于" },
];

/** 内容兜底：非作品页签时显示文本（演示 children 兜底） */
function ProfileContent() {
  const ctx = useProfileContext();
  const tab = ctx?.activeTab ?? "works";
  return (
    <div style={{ minHeight: 120, fontSize: 14, lineHeight: 1.8, opacity: 0.8 }}>
      <b>{tab}</b> 页：Core 的 children 兜底内容。
    </div>
  );
}

/**
 * 10 · 全功能组合（高级功能）
 * 16 个插件全部可开关，实时看装配代码怎么写。这正是「插件式主页」的增量拼装方式。
 */
export const meta: DemoMeta = {
  slug: "full-combo",
  title: "全功能组合",
  group: "advanced",
  capability: "all-plugins",
  intro: "16 个官方插件逐个开关，实时生成对应装配代码。",
  why: "把分散的插件页串起来：一个主页就是「挑插件 + 写配置」，没有一行样式散落在业务里。",
  plugs: [
    { fn: "createBannerSlotPlugin", cfg: "gradient: [...], avatar: user.avatar", why: "头图区" },
    { fn: "createBioSlotPlugin", cfg: "name, bio, location, joinDate", why: "简介区" },
    { fn: "createStatRowPlugin", cfg: "items: user.stats", why: "数据行" },
    { fn: "createSocialLinksPlugin", cfg: "links: [...]", why: "社交外链" },
    { fn: "createTagListPlugin", cfg: "tags: [...]", why: "兴趣标签" },
    { fn: "createTabSyncPlugin", cfg: "tabs: [...]", why: "页签栏 + 内容联动" },
    { fn: "createVerifyBadgePlugin", cfg: "type: 'personal'", why: "认证徽标" },
    { fn: "createFollowEchoPlugin", cfg: "size: 'md'", why: "关注按钮" },
    { fn: "createWorksGridPlugin", cfg: "items: user.works, tab: 'works'", why: "作品网格（内容区）" },
    { fn: "createMembershipBadgePlugin", cfg: "level: 3", why: "会员角标（徽标区）" },
    { fn: "createQRSharePlugin", cfg: "url: user.homeUrl", why: "二维码分享（徽标区）" },
    { fn: "createLiveStatusPlugin", cfg: "status: 'live'", why: "在线/直播状态（简介区）" },
    { fn: "createContactCardPlugin", cfg: "email, site, address", why: "联系信息（简介区）" },
    { fn: "createActivitySummaryPlugin", cfg: "lastActive, postsThisMonth", why: "活跃度小结（简介区）" },
    { fn: "createMessageButtonPlugin", cfg: "label: '私信'", why: "私信按钮（关注区）" },
    { fn: "createAchievementWallPlugin", cfg: "items: user.badges, tab: 'about'", why: "成就墙（内容区）" },
  ],
  props: ["verified", "stats={user.stats}", "followState={serverState}"],
  controls: [
    { key: "banner", label: "BannerSlot", kind: "switch", init: true },
    { key: "bio", label: "BioSlot", kind: "switch", init: true },
    { key: "stat", label: "StatRow", kind: "switch", init: true },
    { key: "social", label: "SocialLinks", kind: "switch", init: true },
    { key: "tags", label: "TagList", kind: "switch", init: true },
    { key: "tab", label: "TabSync", kind: "switch", init: true },
    { key: "badge", label: "VerifyBadge", kind: "switch", init: true },
    { key: "follow", label: "FollowEcho", kind: "switch", init: true },
    { key: "works", label: "WorksGrid", kind: "switch", init: true },
    { key: "membership", label: "MembershipBadge", kind: "switch", init: true },
    { key: "qrshare", label: "QRShare", kind: "switch", init: true },
    { key: "live", label: "LiveStatus", kind: "switch", init: true },
    { key: "contact", label: "ContactCard", kind: "switch", init: true },
    { key: "activity", label: "ActivitySummary", kind: "switch", init: true },
    { key: "message", label: "MessageButton", kind: "switch", init: true },
    { key: "achievements", label: "AchievementWall", kind: "switch", init: true },
  ],
  stageHeight: 560,
};

export default function Stage({ cfg }: DemoStageProps) {
  const withTab = Boolean(cfg.tab);

  const Profile = useMemo(() => {
    const plugs: ProfilePlugin<unknown>[] = [];
    if (cfg.banner)
      plugs.push(
        createBannerSlotPlugin({
          gradient: ["#6a11cb", "#1a5fd0"],
          avatar: AVATAR,
          avatarRound: true,
          height: 150,
          overlay: <strong>{SAMPLE_USER.name}</strong>,
        })
      );
    if (cfg.bio)
      plugs.push(
        createBioSlotPlugin({
          name: SAMPLE_USER.name,
          subtitle: "前端工程师 · 组件库作者",
          bio: SAMPLE_USER.bio,
          location: "上海",
          joinDate: "2021 加入",
        })
      );
    if (cfg.stat) plugs.push(createStatRowPlugin({ items: SAMPLE_USER.stats }));
    if (cfg.social) plugs.push(createSocialLinksPlugin({ links: SAMPLE_LINKS }));
    if (cfg.tags) plugs.push(createTagListPlugin({ tags: SAMPLE_TAGS }));
    if (withTab) plugs.push(createTabSyncPlugin({ tabs: TABS }));
    if (cfg.badge) plugs.push(createVerifyBadgePlugin({ type: "personal" }));
    if (cfg.follow) plugs.push(createFollowEchoPlugin({ size: "md" }));
    if (cfg.works)
      plugs.push(
        createWorksGridPlugin({
          items: SAMPLE_WORKS,
          columns: 3,
          title: "精选作品",
          tab: withTab ? "works" : undefined,
        })
      );
    if (cfg.membership) plugs.push(createMembershipBadgePlugin(SAMPLE_MEMBERSHIP));
    if (cfg.qrshare) plugs.push(createQRSharePlugin({ url: "https://vane.dev/u/frankvane" }));
    if (cfg.live) plugs.push(createLiveStatusPlugin(SAMPLE_LIVE));
    if (cfg.contact) plugs.push(createContactCardPlugin(SAMPLE_CONTACT));
    if (cfg.activity) plugs.push(createActivitySummaryPlugin(SAMPLE_ACTIVITY));
    if (cfg.message) plugs.push(createMessageButtonPlugin({ label: "私信" }));
    if (cfg.achievements)
      plugs.push(
        createAchievementWallPlugin({
          items: SAMPLE_ACHIEVEMENTS,
          columns: 4,
          title: "成就",
          tab: withTab ? "about" : undefined,
        })
      );
    return withPlugins(ProfileCore, plugs);
  }, [
    cfg.banner, cfg.bio, cfg.stat, cfg.social, cfg.tags, withTab, cfg.badge,
    cfg.follow, cfg.works, cfg.membership, cfg.qrshare, cfg.live, cfg.contact,
    cfg.activity, cfg.message, cfg.achievements,
  ]);

  return (
    <Profile
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}
      stats={SAMPLE_USER.stats}
      verified={Boolean(cfg.badge)}
      badgeType="personal"
      followState="none"
      banner={<span>@{SAMPLE_USER.handle}</span>}
      defaultActiveTab={withTab ? "works" : undefined}
    >
      {withTab ? <ProfileContent /> : null}
    </Profile>
  );
}
`,Xw=`\uFEFFimport React, { useMemo, useRef, useState } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import type { ProfileCoreRef, FollowState } from "vane-profile";
import { createBannerSlotPlugin, createStatRowPlugin, createFollowEchoPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { AVATAR, SAMPLE_USER } from "../data/sample";

/**
 * 11 · 受控与事件（高级功能）
 * followState 由外部状态驱动（props 受控），点击关注触发 onFollow / onMutual；
 * 经 coreRef 可读取 activeTab、强制刷新、量取容器尺寸。
 */
export const meta: DemoMeta = {
  slug: "dynamic-control",
  title: "受控与事件",
  group: "advanced",
  capability: "controlled-state",
  intro: "followState 走 props 受控，点击关注回调 onFollow / onMutual，coreRef 读状态与强刷。",
  why: "真实业务里关注关系是服务端真相，UI 只是乐观回显；这页演示怎么把插件接到你自己的状态机。",
  plugs: [
    { fn: "createFollowEchoPlugin", cfg: "onFollow, onMutual", why: "受控三态按钮 + 回调" },
  ],
  props: ["followState={serverState}", "onFollow", "onMutual"],
  controls: [],
  stageHeight: 300,
};

const STATES: FollowState[] = ["none", "following", "mutual"];
const LABEL: Record<FollowState, string> = { none: "未关注", following: "已关注", mutual: "互相关注" };

export default function Stage({ log }: DemoStageProps) {
  const [state, setState] = useState<FollowState>("none");
  const coreRef = useRef<ProfileCoreRef>(null);

  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createBannerSlotPlugin({
          gradient: ["#1a5fd0", "#6a11cb"],
          avatar: AVATAR,
          avatarRound: true,
          height: 140,
          overlay: <strong>{SAMPLE_USER.name}</strong>,
        }),
        createStatRowPlugin({ items: SAMPLE_USER.stats }),
        createFollowEchoPlugin({
          size: "md",
          onFollow: (next) => {
            setState(next);
            log(\`onFollow → \${next}\`, "event");
          },
          onMutual: (next) => log(\`onMutual → \${next}（关系变为互相关注）\`, "info"),
        }),
      ]),
    // log 为 DemoPage 的稳定 useCallback，setState 稳定豁免
    [log]
  );

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        {STATES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setState(s);
              log(\`外部设置 followState = \${s}\`);
            }}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "1px solid rgba(125,130,140,0.4)",
              background: state === s ? "#1a5fd0" : "transparent",
              color: state === s ? "#fff" : "inherit",
              cursor: "pointer",
            }}
          >
            {LABEL[s]}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            const t = coreRef.current?.getActiveTab();
            const size = coreRef.current?.getSize();
            log(\`coreRef: activeTab=\${t}, 容器=\${size?.width}×\${size?.height}\`, "info");
          }}
          style={{
            padding: "6px 12px",
            borderRadius: 8,
            border: "1px dashed rgba(125,130,140,0.5)",
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          读 coreRef
        </button>
        <button
          type="button"
          onClick={() => coreRef.current?.forceUpdate()}
          style={{
            padding: "6px 12px",
            borderRadius: 8,
            border: "1px dashed rgba(125,130,140,0.5)",
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          强制刷新
        </button>
      </div>

      <Profile
        ref={coreRef}
        containerStyle={{ maxWidth: 420, margin: "0 auto" }}
        stats={SAMPLE_USER.stats}
        followState={state}
        banner={<span>@{SAMPLE_USER.handle}</span>}
      />
    </div>
  );
}
`,Zw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createBannerSlotPlugin, createMembershipBadgePlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { AVATAR, SAMPLE_USER } from "../data/sample";

/**
 * 12 · 会员角标 MembershipBadge
 * 单看这一个插件：浮于头图右上的 VIP 角标（与认证徽标同区并排）。
 */
export const meta: DemoMeta = {
  slug: "membership",
  title: "会员角标 MembershipBadge",
  group: "plugin",
  plugin: "MembershipBadge",
  intro: "会员 / VIP 等级角标，浮于头图右上，与认证徽标同区并排。",
  why: "付费会员 / 社区等级的可视标识；做成插件后头图右上多了一块身份区，Core 不碰配色。",
  plugs: [
    {
      fn: "createBannerSlotPlugin",
      cfg: "avatar: user.avatar, overlay: user.name",
      why: "提供头图背景，让角标落在它应有的右上角",
    },
    {
      fn: "createMembershipBadgePlugin",
      cfg: "level: {{level}}, showLabel: true",
      why: "负责会员角标渲染，与 VerifyBadge / QRShare 横向并排",
    },
  ],
  props: [],
  controls: [
    {
      key: "level",
      label: "等级",
      kind: "select",
      init: "3",
      options: [
        { label: "VIP1", value: "1" },
        { label: "VIP2", value: "2" },
        { label: "VIP3", value: "3" },
      ],
    },
  ],
  stageHeight: 220,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createBannerSlotPlugin({
          gradient: ["#6a11cb", "#1a5fd0"],
          avatar: AVATAR,
          overlay: SAMPLE_USER.name,
        }),
        createMembershipBadgePlugin({ level: Number(cfg.level) as 1 | 2 | 3 }),
      ]),
    [cfg.level]
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,Jw=`\uFEFFimport React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createBannerSlotPlugin, createQRSharePlugin } from "vane-profile/custom-plugins";
import type { DemoMeta } from "./types";
import { AVATAR, SAMPLE_USER } from "../data/sample";

/**
 * 13 · 二维码分享 QRShare
 * 单看这一个插件：头图右上的「分享」按钮，点击展开二维码 + 复制链接。
 */
export const meta: DemoMeta = {
  slug: "qrshare",
  title: "二维码分享 QRShare",
  group: "plugin",
  plugin: "QRShare",
  intro: "主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",
  why: "主页传播入口；做成插件后头图右上多了一块交互区，弹层用内部 state 控制，不污染 Core。",
  plugs: [
    {
      fn: "createBannerSlotPlugin",
      cfg: "avatar: user.avatar, overlay: user.name",
      why: "提供头图背景，让分享按钮落在它应有的右上角",
    },
    {
      fn: "createQRSharePlugin",
      cfg: "url: user.homeUrl, buttonLabel: '分享'",
      why: "负责分享按钮与弹层，与 VerifyBadge / MembershipBadge 横向并排",
    },
  ],
  props: [],
  controls: [],
  stageHeight: 240,
  note: "点击右上角「分享」按钮查看二维码占位面板（装饰性点阵，非真实可扫码）。",
};

export default function Stage() {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createBannerSlotPlugin({
          gradient: ["#6a11cb", "#1a5fd0"],
          avatar: AVATAR,
          overlay: SAMPLE_USER.name,
        }),
        createQRSharePlugin({ url: "https://vane.dev/u/frankvane" }),
      ]),
    []
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,qw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createLiveStatusPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import type { LiveStatusKind } from "vane-profile/custom-plugins/LiveStatusPlugin";

/**
 * 14 · 在线状态 LiveStatus
 * 单看这一个插件：简介区里的一行状态（在线 / 离开 / 忙碌 / 离线 / 直播中）。
 */
export const meta: DemoMeta = {
  slug: "livestatus",
  title: "在线状态 LiveStatus",
  group: "plugin",
  plugin: "LiveStatus",
  intro: "在线 / 直播状态指示：圆点 + 文案，直播态高亮。",
  why: "主播 / 客服 / 社区的实时状态；做成插件后简介区多了一块状态行，Core 不碰业务。",
  plugs: [
    {
      fn: "createLiveStatusPlugin",
      cfg: "status: '{{status}}', liveTitle: '前端架构夜聊'",
      why: "负责状态行渲染，排在简介区，与 BioSlot / SocialLinks 同区串联",
    },
  ],
  props: [],
  controls: [
    {
      key: "status",
      label: "状态",
      kind: "select",
      init: "live",
      options: [
        { label: "在线", value: "online" },
        { label: "离开", value: "away" },
        { label: "忙碌", value: "busy" },
        { label: "离线", value: "offline" },
        { label: "直播中", value: "live" },
      ],
    },
  ],
  stageHeight: 120,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createLiveStatusPlugin({
          status: cfg.status as LiveStatusKind,
          liveTitle: "前端架构夜聊",
        }),
      ]),
    [cfg.status]
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,eS=`\uFEFFimport React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createContactCardPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta } from "./types";
import { SAMPLE_CONTACT } from "../data/sample";

/**
 * 15 · 联系信息 ContactCard
 * 单看这一个插件：简介区里的联系信息行（邮箱 / 电话 / 官网 / 地址，安全链接）。
 */
export const meta: DemoMeta = {
  slug: "contact",
  title: "联系信息 ContactCard",
  group: "plugin",
  plugin: "ContactCard",
  intro: "联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",
  why: "商家 / 创作者公开联系方式；做成插件后简介区多了一块联系入口，外链带 rel 防钓鱼。",
  plugs: [
    {
      fn: "createContactCardPlugin",
      cfg: "email: user.email, site: user.site, address: user.address",
      why: "负责联系信息渲染，排在简介区，与 BioSlot / SocialLinks 同区串联",
    },
  ],
  props: [],
  controls: [],
  stageHeight: 120,
};

export default function Stage() {
  const Profile = useMemo(
    () => withPlugins(ProfileCore, [createContactCardPlugin(SAMPLE_CONTACT)]),
    []
  );
  return <Profile containerStyle={{ maxWidth: 460, margin: "0 auto" }} />;
}
`,tS=`\uFEFFimport React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createActivitySummaryPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta } from "./types";
import { SAMPLE_ACTIVITY } from "../data/sample";

/**
 * 16 · 活跃度小结 ActivitySummary
 * 单看这一个插件：简介区里的一行轻量数据（最近活跃 / 本月发布 / 总阅读）。
 */
export const meta: DemoMeta = {
  slug: "activity",
  title: "活跃度小结 ActivitySummary",
  group: "plugin",
  plugin: "ActivitySummary",
  intro: "活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",
  why: "创作者活跃度 / 社区粘性提示；做成插件后简介区多了一块轻量数据，不抢主体。",
  plugs: [
    {
      fn: "createActivitySummaryPlugin",
      cfg: "lastActive: '2 小时前', postsThisMonth: 12, totalViews: '120w'",
      why: "负责活跃度小结渲染，排在简介区，与 BioSlot / SocialLinks 同区串联",
    },
  ],
  props: [],
  controls: [],
  stageHeight: 120,
};

export default function Stage() {
  const Profile = useMemo(
    () => withPlugins(ProfileCore, [createActivitySummaryPlugin(SAMPLE_ACTIVITY)]),
    []
  );
  return <Profile containerStyle={{ maxWidth: 460, margin: "0 auto" }} />;
}
`,nS=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import {
  createFollowEchoPlugin,
  createMessageButtonPlugin,
} from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";

/**
 * 17 · 私信按钮 MessageButton
 * 单看这一个插件：关注区里与 FollowEcho 并排的「私信」按钮。
 */
export const meta: DemoMeta = {
  slug: "message",
  title: "私信按钮 MessageButton",
  group: "plugin",
  plugin: "MessageButton",
  intro: "私信按钮：与关注回显同区并排，点击拉起会话。",
  why: "主页一对一沟通入口；做成插件后关注区多了一块描边按钮，与关注形成主次。",
  plugs: [
    {
      fn: "createFollowEchoPlugin",
      cfg: "size: 'md'",
      why: "提供关注态，让私信按钮落在它应有的并排位置",
    },
    {
      fn: "createMessageButtonPlugin",
      cfg: "label: '私信', onMessage: () => openChat(uid)",
      why: "负责私信按钮渲染，与 FollowEcho 横向并排",
    },
  ],
  props: [],
  controls: [
    { key: "showMsg", label: "显示私信按钮", kind: "switch", init: true },
  ],
  stageHeight: 120,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createFollowEchoPlugin({ size: "md", state: "following" }),
        ...(cfg.showMsg
          ? [createMessageButtonPlugin({ label: "私信", onMessage: () => {} })]
          : []),
      ]),
    [cfg.showMsg]
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,rS=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createAchievementWallPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_ACHIEVEMENTS } from "../data/sample";

/**
 * 18 · 成就墙 AchievementWall
 * 单看这一个插件：内容区的成就 / 勋章网格（随 activeTab 联动）。
 */
export const meta: DemoMeta = {
  slug: "achievements",
  title: "成就墙 AchievementWall",
  group: "plugin",
  plugin: "AchievementWall",
  intro: "成就 / 勋章墙：随 activeTab 联动的内容区插件。",
  why: "个人主页荣誉展示；做成内容区插件后，切到对应页签才出墙，与 WorksGrid 同区可共存。",
  plugs: [
    {
      fn: "createAchievementWallPlugin",
      cfg: "items: user.badges, columns: 4, title: '成就'",
      why: "负责成就墙渲染，走 renderContentArea，有它时接管 children",
    },
  ],
  props: [],
  controls: [
    {
      key: "columns",
      label: "列数",
      kind: "number",
      init: 4,
      min: 2,
      max: 8,
      step: 1,
    },
  ],
  stageHeight: 240,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createAchievementWallPlugin({
          items: SAMPLE_ACHIEVEMENTS,
          columns: Number(cfg.columns),
          title: "成就",
        }),
      ]),
    [cfg.columns]
  );
  return <Profile containerStyle={{ maxWidth: 480, margin: "0 auto" }} />;
}
`,oS=Object.assign({"./00-quickstart.tsx":R1,"./01-banner.tsx":$1,"./02-statrow.tsx":B1,"./03-tabsync.tsx":D1,"./04-verifybadge.tsx":V1,"./05-followecho.tsx":G1,"./06-bio.tsx":X1,"./07-social.tsx":q1,"./08-tags.tsx":nw,"./09-worksgrid.tsx":aw,"./10-full-combo.tsx":fw,"./11-dynamic-control.tsx":vw,"./12-membership.tsx":Sw,"./13-qrshare.tsx":kw,"./14-livestatus.tsx":_w,"./15-contact.tsx":jw,"./16-activity.tsx":Nw,"./17-message.tsx":Mw,"./18-achievements.tsx":Fw}),lS=Object.assign({"./00-quickstart.tsx":Ow,"./01-banner.tsx":Iw,"./02-statrow.tsx":Dw,"./03-tabsync.tsx":Uw,"./04-verifybadge.tsx":Ww,"./05-followecho.tsx":Vw,"./06-bio.tsx":Hw,"./07-social.tsx":Qw,"./08-tags.tsx":Gw,"./09-worksgrid.tsx":Kw,"./10-full-combo.tsx":Yw,"./11-dynamic-control.tsx":Xw,"./12-membership.tsx":Zw,"./13-qrshare.tsx":Jw,"./14-livestatus.tsx":qw,"./15-contact.tsx":eS,"./16-activity.tsx":tS,"./17-message.tsx":nS,"./18-achievements.tsx":rS}),iS=e=>e.replace(/^\.\//,""),bi=Object.entries(oS).map(([e,t])=>{const n=iS(e);return{meta:t.meta,Stage:t.default,file:n,source:lS[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),aS=["basic","advanced","plugin"],ZS=Array.from(new Set(bi.map(e=>e.meta.plugin).filter(e=>!!e))).sort(),Ci={basic:{label:"基础功能",hint:"Core 自身的 props"},advanced:{label:"高级功能",hint:"ref / 事件 / 杂项配置"},plugin:{label:"插件功能",hint:"一插件一页"}};function vu(e){const t={};for(const n of e.controls??[])t[n.key]=n.init;return t}const sS="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",uS="true|false|null|undefined|this|super",cS="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",yu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${sS})\b`,String.raw`\b(${uS})\b`,String.raw`\b(${cS})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),wu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function dS(e){const t=[];let n=0;yu.lastIndex=0;let r;for(;r=yu.exec(e);){r.index>n&&t.push({text:e.slice(n,r.index),cls:null});const o=wu.findIndex((l,i)=>r[i+1]!==void 0);t.push({text:r[0],cls:o>=0?wu[o]:null}),n=r.index+r[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function Su(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function fS({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:r}){const[o,l]=y.useState("idle"),[i,a]=y.useState(!1),s=y.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=n>0&&s.length>n,p=c&&!i?s.slice(0,n).join(`
`):e,d=y.useMemo(()=>dS(p),[p]),g=y.useCallback(async()=>{var w;let v=!1;if((w=navigator.clipboard)!=null&&w.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=Su(e)}else v=Su(e);l(v?"ok":"fail"),window.setTimeout(()=>l("idle"),1600)},[e]);return u.jsxs("div",{className:"code",children:[u.jsxs("div",{className:"code-head",children:[u.jsx("span",{children:t}),u.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[u.jsxs("span",{children:[s.length," 行"]}),u.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:g,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),u.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:u.jsx("code",{children:d.map((v,w)=>v.cls?u.jsx("span",{className:v.cls,children:v.text},w):u.jsx(En.Fragment,{children:v.text},w))})}),c?u.jsx("button",{type:"button",className:"code-more",onClick:()=>a(v=>!v),children:i?"收起":`展开余下 ${s.length-n} 行`}):null]})}function wf(e){return e.props??e.config??[]}function pS({doc:e}){var o,l,i;const t=wf(e),n=e.events??[],r=e.methods??[];return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"属性 Props"}),t.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"属性"}),u.jsx("th",{children:"类型"}),u.jsx("th",{children:"默认"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:t.map(a=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:a.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:a.type})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:a.default??"-"})}),u.jsx("td",{children:a.description??"—"})]},a.name))})]}):u.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"事件 Events"}),n.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"事件"}),u.jsx("th",{children:"触发时机"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:n.map(a=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:a.name})}),u.jsx("td",{children:a.when}),u.jsx("td",{children:a.description})]},a.name))})]}):u.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"方法 Methods"}),r.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"方法"}),u.jsx("th",{children:"签名"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:r.map(a=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:a.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:a.signature})}),u.jsx("td",{children:a.description})]},a.name))})]}):u.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),u.jsxs("div",{className:"doc-cols",children:[(o=e.features)!=null&&o.length?u.jsxs("div",{children:[u.jsx("h5",{children:"能做"}),u.jsx("ul",{children:e.features.map(a=>u.jsx("li",{children:a},a))})]}):null,(l=e.useCases)!=null&&l.length?u.jsxs("div",{children:[u.jsx("h5",{children:"适合"}),u.jsx("ul",{children:e.useCases.map(a=>u.jsx("li",{children:a},a))})]}):null,(i=e.notes)!=null&&i.length?u.jsxs("div",{children:[u.jsx("h5",{children:"注意"}),u.jsx("ul",{children:e.notes.map(a=>u.jsx("li",{children:a},a))})]}):null]})]})}function gS({factory:e,priority:t,summary:n,doc:r,defaultOpen:o=!0}){var i,a;const l={props:wf(r).length,events:((i=r.events)==null?void 0:i.length)??0,methods:((a=r.methods)==null?void 0:a.length)??0};return u.jsxs("details",{className:"api-plug",open:o,children:[u.jsxs("summary",{children:[u.jsx("code",{children:e}),u.jsxs("span",{className:"tag tag-accent",children:["priority ",t]}),u.jsx("span",{className:"api-plug-desc",children:n}),u.jsxs("span",{className:"api-plug-n",children:[l.props," 属性 · ",l.events," 事件 · ",l.methods," 方法"]})]}),u.jsx("div",{className:"api-plug-body",children:u.jsx(pS,{doc:r})})]})}const mS=/create[A-Z]\w*Plugin/g;function hS(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Sf(e){return e.dir?`create${e.dir}`:hS(e.factory)}function vS(e){return new Set(e.match(mS)??[])}function yS(e,t){const n=vS(e);return t.filter(r=>n.has(Sf(r))).sort((r,o)=>r.priority-o.priority)}function wS({source:e,plugins:t,heading:n="本页用到的插件"}){const r=y.useMemo(()=>yS(e,t),[e,t]);return r.length===0?null:u.jsxs("section",{className:"api-sec",children:[u.jsxs("div",{className:"api-sec-head",children:[u.jsxs("h2",{className:"api-sec-title",children:[n," · ",r.length," 个"]}),u.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",u.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(o=>u.jsx(gS,{factory:Sf(o),priority:o.priority,summary:o.summary??o.doc.description??"",doc:o.doc},o.factory))]})}const SS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";

export interface AchievementItem {
  /** 唯一 id */
  id: string;
  /** 成就标题 */
  title: string;
  /** 成就描述 */
  desc?: string;
  /** 图标字（单/双字占位，无图片资源） */
  glyph?: string;
  /** 图标底色 */
  color?: string;
}

export interface AchievementWallConfig {
  /** 成就列表 */
  items?: AchievementItem[];
  /** 网格列数，默认 4 */
  columns?: number;
  /** 卡片间距（px），默认 10 */
  gap?: number;
  /** 仅在某个页签激活时显示（与 TabSync 联动）；不填则始终显示 */
  tab?: string;
  /** 分组标题 */
  title?: React.ReactNode;
  /** 空列表占位文案 */
  empty?: React.ReactNode;
}

/**
 * AchievementWall - 成就 / 勋章墙：随 activeTab 联动的内容区插件。
 *
 * 走领域槽 \`renderContentArea\`（Core 有内容插件时以它替代 children）。
 * config.tab 与 context.activeTab 联动：切到对应页签才出墙。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createAchievementWallPlugin<T = unknown>(
  config: AchievementWallConfig = {}
): ProfilePlugin<T> {
  const {
    items = [],
    columns = 4,
    gap = 10,
    tab,
    title,
    empty = "暂无成就",
  } = config;
  return {
    name: "AchievementWall",
    version: "0.1.0",
    description: "成就 / 勋章墙：随 activeTab 联动的内容区插件。",
    priority: 10,
    enabled: true,
    hooks: {
      renderContentArea: (context: ProfilePluginContext<T>) => {
        if (tab && context.activeTab !== tab) return null;
        if (!items.length)
          return (
            <div className="vp-achievements-empty" style={{ padding: 16, color: "#6b6b6b" }}>
              {empty}
            </div>
          );
        return (
          <div className="vp-achievements" style={{ padding: 4 }}>
            {title && (
              <div style={{ fontWeight: 600, margin: "0 0 10px" }}>{title}</div>
            )}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
                gap,
              }}
            >
              {items.map((it) => (
                <div
                  key={it.id}
                  title={it.desc}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    padding: 12,
                    borderRadius: 12,
                    background: "rgba(125,130,140,0.1)",
                    border: "1px solid rgba(125,130,140,0.18)",
                    textAlign: "center",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: it.color ?? "#1a5fd0",
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    {it.glyph ?? "★"}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{it.title}</span>
                  {it.desc && (
                    <span style={{ fontSize: 11, opacity: 0.7 }}>{it.desc}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      },
    },
  };
}
`,xS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";

export interface ActivitySummaryConfig {
  /** 最近活跃描述，如「2 小时前」 */
  lastActive?: string;
  /** 本月发布篇数 */
  postsThisMonth?: number;
  /** 总阅读量描述，如「120w」 */
  totalViews?: string;
  /** 是否显示图标字 */
  showIcon?: boolean;
}

/**
 * ActivitySummary - 活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。
 *
 * 走领域槽 \`renderBioArea\`（与 BioSlot / SocialLinks / TagList / ContactCard 同区串联）。
 * 三项全空时不渲染。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createActivitySummaryPlugin<T = unknown>(
  config: ActivitySummaryConfig = {}
): ProfilePlugin<T> {
  const { lastActive, postsThisMonth, totalViews, showIcon = true } = config;
  const parts: string[] = [];
  if (lastActive) parts.push(\`最近活跃 \${lastActive}\`);
  if (typeof postsThisMonth === "number")
    parts.push(\`本月发布 \${postsThisMonth} 篇\`);
  if (totalViews) parts.push(\`总阅读 \${totalViews}\`);

  return {
    name: "ActivitySummary",
    version: "0.1.0",
    description: "活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",
    priority: 12,
    enabled: true,
    hooks: {
      renderBioArea: (_context: ProfilePluginContext<T>) => {
        if (!parts.length) return null;
        return (
          <div
            className="vp-activity"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              opacity: 0.72,
              color: "inherit",
            }}
          >
            {showIcon && (
              <span aria-hidden style={{ opacity: 0.8 }}>
                ◷
              </span>
            )}
            <span>{parts.join(" · ")}</span>
          </div>
        );
      },
    },
  };
}
`,PS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import { cssImageUrl, safeImageUrl } from "../../components/ProfilePlugin/plugins/safe-url";
import { Avatar } from "./internal";

export interface BannerSlotConfig {
  /** 封面图 URL（与 gradient 二者至少其一；都无 / 非法则回退默认渐变） */
  cover?: string;
  /** 渐变起止色 [from, to]，无 cover 时用作背景 */
  gradient?: [string, string];
  /** 头像 URL（浮层在底部，与头图下缘重叠；非法协议视为无头像） */
  avatar?: string;
  /** 头像无障碍描述，默认「头像」 */
  avatarAlt?: string;
  /** 头像加载失败 / 未提供时的兜底内容，默认人形占位 */
  avatarFallback?: React.ReactNode;
  /** 头像直径（px），默认 64 */
  avatarSize?: number;
  /** 头像是否圆形，默认 true */
  avatarRound?: boolean;
  /** 头图区高度（px），默认 160 */
  height?: number;
  /** 叠加在头图上的自定义内容（昵称 / 标语等）；缺省时渲染 context.banner */
  overlay?: React.ReactNode;
}

/**
 * BannerSlot - 头图区：封面图 / 渐变背景 + 头像浮层 + 可选文案。
 *
 * 走领域槽 \`renderBannerArea\`（由 ProfileCore 的 \`vp-banner-area\` 消费）。
 * 头像以负 bottom 浮出头图下缘、与数据行区重叠，形成经典个人主页观感。
 * \`overlay\` 优先于 \`context.banner\`；两者皆无则不渲染叠加文案。
 * 头图 / 头像 URL 都来自用户可编辑资料，统一走协议白名单（http/https）。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createBannerSlotPlugin<T = unknown>(
  config: BannerSlotConfig = {}
): ProfilePlugin<T> {
  const {
    cover,
    gradient = ["#6a11cb", "#1a5fd0"],
    avatar,
    avatarAlt = "头像",
    avatarFallback,
    avatarSize = 64,
    avatarRound = true,
    height = 160,
    overlay,
  } = config;

  const coverUrl = cssImageUrl(cover);
  const avatarUrl = safeImageUrl(avatar);
  const background = coverUrl
    ? \`\${coverUrl} center/cover no-repeat\`
    : \`linear-gradient(135deg, \${gradient[0]}, \${gradient[1]})\`;

  return {
    name: "BannerSlot",
    version: "0.1.0",
    description:
      "头图区：封面图 / 渐变背景 + 头像浮层 + 昵称标语叠加。",
    priority: 10,
    enabled: true,
    hooks: {
      renderBannerArea: (context: ProfilePluginContext<T>) => (
        <div
          className="vp-banner"
          style={{
            position: "relative",
            height,
            background,
            backgroundSize: "cover",
            // 头像以负 bottom 浮出头图下缘，这里用等量 marginBottom 把下方数据行
            // 往下推，避免头像压住「关注/粉丝」等指标（经典主页观感但互不遮挡）。
            // 没有头像时不预留这段空白。
            marginBottom: avatarUrl ? avatarSize / 2 : 0,
          }}
        >
          {avatar?.trim() ? (
            <Avatar
              key={avatarUrl ?? "fallback"}
              src={avatarUrl}
              size={avatarSize}
              round={avatarRound}
              alt={avatarAlt}
              fallback={avatarFallback}
            />
          ) : null}
          {(overlay ?? context.banner) && (
            <div
              className="vp-banner-overlay"
              style={{
                position: "absolute",
                left: avatar ? 16 + avatarSize + 12 : 16,
                bottom: 16,
                color: "#fff",
                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              {overlay ?? context.banner}
            </div>
          )}
        </div>
      ),
    },
  };
}
`,kS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";

export interface BioSlotConfig {
  /** 昵称（头图已用 overlay 显示时留空，避免重复） */
  name?: React.ReactNode;
  /** 个性签名 / 一句话简介 */
  bio?: React.ReactNode;
  /** 所在地 */
  location?: string;
  /** 加入时间（如 "2021 加入"） */
  joinDate?: string;
  /** 副标题 / 职业（显示在昵称下方小字） */
  subtitle?: React.ReactNode;
}

/**
 * BioSlot - 简介区：昵称 + 签名 + 所在地 / 加入时间。
 *
 * 走领域槽 \`renderBioArea\`（由 ProfileCore 的 \`vp-bio-area\` 消费，排在头图与数据行之间）。
 * 内容全空时整体返回 null，不占空间。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createBioSlotPlugin<T = unknown>(
  config: BioSlotConfig = {}
): ProfilePlugin<T> {
  const { name, bio, location, joinDate, subtitle } = config;
  const metaLine = [location, joinDate].filter(Boolean).join(" · ");

  return {
    name: "BioSlot",
    version: "0.1.0",
    description: "简介区：昵称 + 签名 + 所在地 / 加入时间。",
    priority: 12,
    enabled: true,
    hooks: {
      renderBioArea: (_context: ProfilePluginContext<T>) => {
        if (!name && !subtitle && !bio && !metaLine) return null;
        return (
          <div className="vp-bio">
            {name && <div className="vp-bio-name">{name}</div>}
            {subtitle && <div className="vp-bio-sub">{subtitle}</div>}
            {bio && <div className="vp-bio-text">{bio}</div>}
            {metaLine && <div className="vp-bio-meta">{metaLine}</div>}
          </div>
        );
      },
    },
  };
}
`,bS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import { safeHref } from "../../components/ProfilePlugin/plugins/safe-url";

export interface ContactCardConfig {
  /** 邮箱（渲染为 mailto: 链接） */
  email?: string;
  /** 电话（渲染为 tel: 链接） */
  phone?: string;
  /** 官网（渲染为 http(s) 外链，带 rel 防钓鱼） */
  site?: string;
  /** 地址（纯文本，不渲染为链接） */
  address?: string;
  /** 是否显示左侧图标字 */
  showIcon?: boolean;
}

interface Row {
  glyph: string;
  text: string;
  href?: string;
  external?: boolean;
}

/**
 * ContactCard - 联系信息卡：邮箱 / 电话 / 官网 / 地址。
 *
 * 走领域槽 \`renderBioArea\`（与 BioSlot / SocialLinks / TagList 同区，按 priority 串联）。
 * 全部为空时不渲染。外链一律带 \`rel="noreferrer noopener"\`，电话 / 邮箱走 tel:/mailto:。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createContactCardPlugin<T = unknown>(
  config: ContactCardConfig = {}
): ProfilePlugin<T> {
  const { email, phone, site, address, showIcon = true } = config;
  const rows: Row[] = [];
  // href 一律过协议白名单；不合法（javascript: / data: / 裸域名等）时降级为纯文本
  if (email) rows.push({ glyph: "@", text: email, href: safeHref(\`mailto:\${email}\`) });
  if (phone) rows.push({ glyph: "☎", text: phone, href: safeHref(\`tel:\${phone}\`) });
  if (site) {
    const siteHref = safeHref(site);
    rows.push({
      glyph: "网",
      text: site.replace(/^https?:\\/\\//, ""),
      href: siteHref,
      external: !!siteHref,
    });
  }
  if (address) rows.push({ glyph: "📍", text: address });

  return {
    name: "ContactCard",
    version: "0.1.0",
    description: "联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",
    priority: 12,
    enabled: true,
    hooks: {
      renderBioArea: (_context: ProfilePluginContext<T>) => {
        if (!rows.length) return null;
        return (
          <div
            className="vp-contact"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px 16px",
              fontSize: 13,
              color: "inherit",
            }}
          >
            {rows.map((r, i) => {
              const inner = (
                <>
                  {showIcon && (
                    <span aria-hidden style={{ opacity: 0.7, marginRight: 4 }}>
                      {r.glyph}
                    </span>
                  )}
                  <span>{r.text}</span>
                </>
              );
              return r.href ? (
                <a
                  key={i}
                  href={r.href}
                  {...(r.external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {inner}
                </a>
              ) : (
                <span key={i}>{inner}</span>
              );
            })}
          </div>
        );
      },
    },
  };
}
`,CS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
  FollowState,
} from "../../components/ProfilePlugin/plugins/types";
import { FollowButton } from "./internal";
import type { FollowResult } from "./internal";

/** onFollow 的返回值：Promise 落地即视为成功；返回 { error } 或 reject 视为失败 */
export type { FollowResult } from "./internal";

export interface FollowEchoConfig {
  /** 强制关注态，覆盖 context.followState */
  state?: FollowState;
  /** 三态文案覆盖 */
  labels?: Partial<Record<FollowState, React.ReactNode>>;
  /** 尺寸，默认 md */
  size?: "sm" | "md";
  /**
   * 点击切换后的回调（返回切换后的态）。
   * 支持返回 Promise：pending 期间按钮禁用（防重复请求），reject / \`{ error }\` 时
   * 内部态回滚到点击前的值，并在按钮旁显示错误文案。
   */
  onFollow?: (next: FollowState) => Promise<FollowResult> | FollowResult;
  /** props.followState 由非 mutual 变为 mutual 时的回调 */
  onMutual?: (next: FollowState) => void;
}

const DEFAULT_LABELS: Record<FollowState, React.ReactNode> = {
  none: "关注",
  following: "已关注",
  mutual: "互相关注",
};

/**
 * FollowEcho - 关注回显：关注 / 已关注 / 互相关注三态按钮。
 *
 * 走领域槽 \`renderFollowArea\`（由 ProfileCore 的 \`vp-follow-area\` 消费）。
 * 受控于 props.followState：点击切换仅作乐观 UI，真相由消费方回写 props；
 * 回调失败必须回滚并提示，避免 UI 停在「已关注」而服务端其实没成功。
 * \`onPropsChange\` 在关系变为 mutual 时触发 onMutual 回调。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createFollowEchoPlugin<T = unknown>(
  config: FollowEchoConfig = {}
): ProfilePlugin<T> {
  const { labels, size = "md", onFollow, onMutual } = config;
  const resolved = { ...DEFAULT_LABELS, ...(labels ?? {}) };
  return {
    name: "FollowEcho",
    version: "0.1.0",
    description:
      "关注回显：关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。",
    priority: 10,
    enabled: true,
    hooks: {
      renderFollowArea: (context: ProfilePluginContext<T>) => {
        const state: FollowState = config.state ?? context.followState;
        return (
          <FollowButton
            key={state}
            initial={state}
            labels={resolved}
            size={size}
            onToggle={(next) => onFollow?.(next)}
          />
        );
      },
      onPropsChange: (_context, prev, next) => {
        const prevState = (prev as { followState?: FollowState })?.followState;
        const nextState = (next as { followState?: FollowState })?.followState;
        if (prevState !== "mutual" && nextState === "mutual") {
          onMutual?.(nextState);
        }
      },
    },
  };
}
`,_S=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";

export type LiveStatusKind = "online" | "away" | "busy" | "offline" | "live";

export interface LiveStatusConfig {
  /** 状态：在线 / 离开 / 忙碌 / 离线 / 直播中 */
  status?: LiveStatusKind;
  /** status=live 时的直播标题 */
  liveTitle?: string;
  /** 是否展示文案（仅圆点为 false） */
  showLabel?: boolean;
}

const META: Record<LiveStatusKind, { color: string; label: string }> = {
  online: { color: "#2ecc71", label: "在线" },
  away: { color: "#f1c40f", label: "离开" },
  busy: { color: "#e74c3c", label: "忙碌" },
  offline: { color: "#95a5a6", label: "离线" },
  live: { color: "#ff4757", label: "直播中" },
};

/**
 * LiveStatus - 在线 / 直播状态指示。
 *
 * 走领域槽 \`renderBioArea\`（与 BioSlot / SocialLinks / TagList 同区，按 priority 串联）。
 * status=live 时显示红点 + 「直播中：{liveTitle}」。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createLiveStatusPlugin<T = unknown>(
  config: LiveStatusConfig = {}
): ProfilePlugin<T> {
  const { status = "online", liveTitle, showLabel = true } = config;
  const m = META[status] ?? META.online;
  return {
    name: "LiveStatus",
    version: "0.1.0",
    description: "在线 / 直播状态指示：圆点 + 文案，直播态高亮。",
    priority: 12,
    enabled: true,
    hooks: {
      renderBioArea: (_context: ProfilePluginContext<T>) => (
        <div
          className="vp-livestatus"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            color: "inherit",
          }}
        >
          <span
            aria-hidden
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: m.color,
              boxShadow: status === "live" ? \`0 0 0 3px \${m.color}33\` : "none",
              flex: "0 0 auto",
            }}
          />
          {showLabel ? (
            <span>
              {m.label}
              {status === "live" && liveTitle ? \`：\${liveTitle}\` : ""}
            </span>
          ) : null}
        </div>
      ),
    },
  };
}
`,TS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";

export interface MembershipBadgeConfig {
  /** 会员等级 1-3，决定配色与默认文案（VIP1/VIP2/VIP3） */
  level?: 1 | 2 | 3;
  /** 覆盖默认展示文案；不填则按 level 给「VIP{n}」 */
  label?: React.ReactNode;
  /** 是否展示文案（仅图标时为 false） */
  showLabel?: boolean;
}

const PALETTE: Record<number, { bg: string; fg: string }> = {
  1: { bg: "#c7a06a", fg: "#fff" },
  2: { bg: "#9aa7b5", fg: "#fff" },
  3: { bg: "#e0b34a", fg: "#3a2c00" },
};

/**
 * MembershipBadge - 会员 / VIP 等级角标。
 *
 * 走领域槽 \`renderBadgeArea\`（与 VerifyBadge / QRShare 同区，浮于头图右上，
 * 按 priority 与它们横向并排）。verified=false 时不渲染（无会员不占位置）。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createMembershipBadgePlugin<T = unknown>(
  config: MembershipBadgeConfig = {}
): ProfilePlugin<T> {
  const { level = 1, label, showLabel = true } = config;
  const tone = PALETTE[level] ?? PALETTE[1];
  return {
    name: "MembershipBadge",
    version: "0.1.0",
    description: "会员 / VIP 等级角标：浮于头图右上，与认证徽标同区并排。",
    priority: 30,
    enabled: true,
    hooks: {
      renderBadgeArea: (_context: ProfilePluginContext<T>) => (
        <span
          className="vp-membership"
          title={\`VIP \${level}\`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "2px 8px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            background: tone.bg,
            color: tone.fg,
            lineHeight: 1.6,
          }}
        >
          <span aria-hidden style={{ fontSize: 11 }}>
            ♛
          </span>
          {showLabel ? <span>{label ?? \`VIP\${level}\`}</span> : null}
        </span>
      ),
    },
  };
}
`,ES=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";

export interface MessageButtonConfig {
  /** 按钮尺寸，默认 md */
  size?: "sm" | "md";
  /** 按钮文案，默认「私信」 */
  label?: React.ReactNode;
  /** 点击回调（不传则仅乐观高亮） */
  onMessage?: (ctx: ProfilePluginContext) => void;
}

/**
 * MessageButton - 私信按钮，与关注回显（FollowEcho）同区并排。
 *
 * 走领域槽 \`renderFollowArea\`。点击触发 onMessage（消费方在此拉起会话）。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createMessageButtonPlugin<T = unknown>(
  config: MessageButtonConfig = {}
): ProfilePlugin<T> {
  const { size = "md", label = "私信", onMessage } = config;
  const pad = size === "sm" ? "3px 12px" : "6px 18px";
  const fs = size === "sm" ? 12 : 14;
  return {
    name: "MessageButton",
    version: "0.1.0",
    description: "私信按钮：与关注回显同区并排，点击拉起会话。",
    priority: 10,
    enabled: true,
    hooks: {
      renderFollowArea: (context: ProfilePluginContext<T>) => (
        <button
          type="button"
          onClick={() => onMessage?.(context)}
          style={{
            padding: pad,
            fontSize: fs,
            borderRadius: 999,
            border: "1px solid rgba(125,130,140,0.45)",
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
            lineHeight: 1.4,
          }}
        >
          {label}
        </button>
      ),
    },
  };
}
`,jS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import { safeHref } from "../../components/ProfilePlugin/plugins/safe-url";
import { QRSharePanel } from "./internal";

export interface QRShareConfig {
  /** 要分享的主页地址；缺省读 props.data?.homeUrl。两者都没有时不渲染按钮 */
  url?: string;
  /** 按钮文案，默认「分享」 */
  buttonLabel?: React.ReactNode;
  /** 二维码占位区边长（px），默认 96 */
  size?: number;
}

/**
 * QRShare - 主页二维码分享：浮于头图右上的「分享」按钮，点击展开二维码占位面板。
 *
 * 走领域槽 \`renderBadgeArea\`（与 VerifyBadge / MembershipBadge 同区横向并排）。
 * 二维码为装饰性点阵占位（不引第三方库），面板提供「复制链接」。
 * 分享地址取自 config.url ?? props.data.homeUrl，二者都无则不渲染——
 * 不再回退到示例站点默认值（避免接入方忘传 url 时把用户指向 vane.dev）。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createQRSharePlugin<T = unknown>(
  config: QRShareConfig = {}
): ProfilePlugin<T> {
  const { url, buttonLabel = "分享", size = 96 } = config;
  return {
    name: "QRShare",
    version: "0.1.0",
    description: "主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",
    priority: 30,
    enabled: true,
    hooks: {
      renderBadgeArea: (context: ProfilePluginContext<T>) => {
        const homeUrl = (context.data as unknown as { homeUrl?: string } | undefined)
          ?.homeUrl;
        const resolved = safeHref(url ?? homeUrl);
        if (!resolved) return null;
        return <QRSharePanel url={resolved} buttonLabel={buttonLabel} size={size} />;
      },
    },
  };
}
`,RS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import { safeHref } from "../../components/ProfilePlugin/plugins/safe-url";

export interface SocialLink {
  /** 平台标识（决定默认文案与图标字），如 weibo / github / email / site */
  platform: string;
  /** 跳转地址 */
  href: string;
  /** 覆盖默认展示文案 */
  label?: string;
  /** 覆盖默认图标字（单字/双字，无图片资源时用作占位） */
  glyph?: string;
}

export interface SocialLinksConfig {
  /** 外链列表 */
  links: SocialLink[];
  /** 是否显示文案（仅图标字时为 false） */
  showLabel?: boolean;
  /** 整组对齐，默认左对齐 */
  align?: "left" | "center" | "right";
}

/** 常见平台的默认图标字与文案（不依赖任何图片资源，离线可用） */
const PRESET: Record<string, { glyph: string; label: string }> = {
  weibo: { glyph: "微", label: "微博" },
  zhihu: { glyph: "知", label: "知乎" },
  github: { glyph: "GH", label: "GitHub" },
  email: { glyph: "@", label: "邮箱" },
  site: { glyph: "网", label: "官网" },
  youtube: { glyph: "YT", label: "YouTube" },
  bilibili: { glyph: "B", label: "B 站" },
  twitter: { glyph: "X", label: "X" },
  douyin: { glyph: "抖", label: "抖音" },
  wechat: { glyph: "微", label: "微信" },
};

/**
 * SocialLinks - 社交外链行：一排可点击的平台入口。
 *
 * 走领域槽 \`renderBioArea\`（与 BioSlot / TagList 同区，按 priority 串联）。
 * 图标用单/双字占位（无图片资源），链接新窗口打开并带 rel 防钓鱼。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createSocialLinksPlugin<T = unknown>(
  config: SocialLinksConfig = { links: [] }
): ProfilePlugin<T> {
  const { links, showLabel = true, align = "left" } = config;
  return {
    name: "SocialLinks",
    version: "0.1.0",
    description: "社交外链行：一排可点击的平台入口（微博 / 知乎 / GitHub …）。",
    priority: 12,
    enabled: true,
    hooks: {
      renderBioArea: (_context: ProfilePluginContext<T>) => {
        if (!links.length) return null;
        return (
          <div
            className="vp-social"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              justifyContent:
                align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
            }}
          >
            {links.map((link, i) => {
              const preset = PRESET[link.platform] ?? { glyph: "·", label: link.platform };
              const glyph = link.glyph ?? preset.glyph;
              const label = link.label ?? preset.label;
              const href = safeHref(link.href);
              const style: React.CSSProperties = {
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                borderRadius: 999,
                border: "1px solid rgba(125,130,140,0.35)",
                color: "inherit",
                textDecoration: "none",
                fontSize: 13,
              };
              const inner = (
                <>
                  <span
                    aria-hidden
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "#1a5fd0",
                      color: "#fff",
                      fontSize: 10,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "0 0 auto",
                    }}
                  >
                    {glyph}
                  </span>
                  {showLabel ? <span>{label}</span> : null}
                </>
              );
              // 协议不在白名单（javascript: / data: / 自定义 scheme）时降级为纯文本，
              // 绝不把用户可编辑的字符串直接交给 href。
              return href ? (
                <a
                  key={i}
                  className="vp-social-item"
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={style}
                >
                  {inner}
                </a>
              ) : (
                <span key={i} className="vp-social-item" style={{ ...style, cursor: "default" }}>
                  {inner}
                </span>
              );
            })}
          </div>
        );
      },
    },
  };
}
`,LS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
  StatItem,
} from "../../components/ProfilePlugin/plugins/types";

export interface StatRowConfig {
  /** 显式指标（覆盖 context.stats） */
  items?: StatItem[];
  /** 排布方向，默认 row */
  direction?: "row" | "column";
  /** 项之间是否显示分隔线（仅 row 生效），默认 true */
  divider?: boolean;
  /** 点击某条指标的回调（可在内部调用 context.setActiveTab 联动页签） */
  onStatClick?: (item: StatItem, index: number) => void;
}

/**
 * StatRow - 数据行：关注 / 粉丝 / 获赞 / 作品等指标，横排展示。
 *
 * 走领域槽 \`renderStatRow\`（由 ProfileCore 的 \`vp-stat-row\` 消费）。
 * 数据源：config.items ?? context.stats ?? []。每项显示 值（大）+ 标签（小）。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createStatRowPlugin<T = unknown>(
  config: StatRowConfig = {}
): ProfilePlugin<T> {
  const { direction = "row", divider = true, onStatClick } = config;

  return {
    name: "StatRow",
    version: "0.1.0",
    description:
      "数据行：关注 / 粉丝 / 获赞 / 作品等指标，横排展示。",
    priority: 10,
    enabled: true,
    hooks: {
      renderStatRow: (context: ProfilePluginContext<T>) => {
        const items: StatItem[] = config.items ?? context.stats ?? [];
        if (items.length === 0) return null;
        return (
          <div
            className="vp-stat-row-inner"
            style={{
              display: "flex",
              flexDirection: direction === "column" ? "column" : "row",
              gap: 16,
              flex: 1,
            }}
          >
            {items.map((it, i) => {
              const content = (
                <>
                  <span style={{ fontSize: 18, fontWeight: 700 }}>{it.value}</span>
                  <span
                    style={{
                      fontSize: 12,
                      color: "#6b6b6b",
                      borderRight:
                        divider && direction === "row" && i < items.length - 1
                          ? "1px solid #eee"
                          : "none",
                      paddingRight:
                        divider && direction === "row" && i < items.length - 1 ? 16 : 0,
                    }}
                  >
                    {it.label}
                  </span>
                </>
              );
              const style: React.CSSProperties = {
                display: "flex",
                flexDirection: "column",
                alignItems: direction === "column" ? "flex-start" : "center",
                border: "none",
                background: "transparent",
                cursor: onStatClick ? "pointer" : "default",
                padding: 0,
                lineHeight: 1.2,
              };
              // 未传 onStatClick 时输出 span：避免一列「可聚焦但点了没反应」的空按钮
              return onStatClick ? (
                <button
                  key={it.key ?? \`stat-\${i}\`}
                  type="button"
                  className="vp-stat-item"
                  onClick={() => onStatClick(it, i)}
                  style={style}
                >
                  {content}
                </button>
              ) : (
                <span key={it.key ?? \`stat-\${i}\`} className="vp-stat-item" style={style}>
                  {content}
                </span>
              );
            })}
          </div>
        );
      },
    },
  };
}

`,NS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";

export interface TabItem {
  /** 页签 id（唯一） */
  id: string;
  /** 页签文案 */
  label: React.ReactNode;
  /** 可选图标 */
  icon?: React.ReactNode;
}

export interface TabSyncConfig {
  /** 页签定义（至少一个） */
  tabs: TabItem[];
  /** 样式变体，默认 underline */
  variant?: "underline" | "pill" | "segmented";
  /** 是否吸顶，默认 false */
  sticky?: boolean;
  /** 切换时是否把容器滚动到顶部，默认 true */
  scrollTopOnChange?: boolean;
  /** 切换回调（activeTab 已更新后触发） */
  onChange?: (id: string | null, oldId: string | null) => void;
}

/**
 * TabSync - 页签系统：渲染页签栏 + 切换时联动内容区重渲染。
 *
 * 这是 profile 的「交互中枢」：
 *  - \`renderTabBar\`：按 config.tabs 渲染按钮，点击调用 context.setActiveTab；
 *  - \`onTabChange\`：activeTab 变化后触发（由 withPlugins 驱动）；默认把容器
 *    滚到顶部，并调用 config.onChange。
 *
 * 内容区子节点经 \`useProfileContext().activeTab\` 订阅，实现「页签切换 → 内容区
 * 重渲染」——无需本插件关心内容怎么渲染。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createTabSyncPlugin<T = unknown>(
  config: TabSyncConfig
): ProfilePlugin<T> {
  const {
    tabs,
    variant = "underline",
    sticky = false,
    scrollTopOnChange = true,
    onChange,
  } = config;
  const items = Array.isArray(tabs) ? tabs.filter((t) => !!t && !!t.id) : [];
  if (items.length === 0) {
    // 页签通常来自异步接口，首帧常常是空数组。这里不能 throw：
    // 工厂一般在渲染期构造，抛错发生在 React 渲染之外，错误边界接不住，直接白屏。
    // 因此空 tabs 返回一个 enabled:false 的空插件，等数据到位后由宿主重建插件数组。
    return {
      name: "TabSync",
      version: "0.1.0",
      description:
        "页签系统：渲染页签栏 + 切换时联动内容区重渲染（消费方子节点经 useProfileContext 订阅 activeTab）。",
      priority: 20,
      enabled: false,
      hooks: {},
    };
  }

  const activeStyle = (active: boolean): React.CSSProperties => {
    if (variant === "segmented") {
      return {
        flex: 1,
        padding: "6px 0",
        borderRadius: 6,
        background: active ? "#fff" : "transparent",
        color: active ? "#1a5fd0" : "#555",
        fontWeight: active ? 700 : 400,
      };
    }
    if (variant === "pill") {
      return {
        padding: "4px 14px",
        borderRadius: 999,
        background: active ? "#1a5fd0" : "transparent",
        color: active ? "#fff" : "#555",
        border: active ? "none" : "1px solid #ddd",
      };
    }
    // underline
    return {
      padding: "8px 12px",
      borderBottom: active ? "2px solid #1a5fd0" : "2px solid transparent",
      color: active ? "#1a5fd0" : "#555",
      fontWeight: active ? 700 : 400,
    };
  };

  return {
    name: "TabSync",
    version: "0.1.0",
    description:
      "页签系统：渲染页签栏 + 切换时联动内容区重渲染（消费方子节点经 useProfileContext 订阅 activeTab）。",
    priority: 20,
    enabled: true,
    hooks: {
      renderTabBar: (context: ProfilePluginContext<T>) => {
        const active = context.activeTab;
        return (
          <div
            className="vp-tab-bar-inner"
            role="tablist"
            style={{
              display: "flex",
              gap: variant === "segmented" ? 4 : 8,
              position: sticky ? "sticky" : "static",
              top: sticky ? 0 : undefined,
              background: sticky ? "#fff" : "transparent",
              zIndex: sticky ? 1 : undefined,
              ...(variant === "segmented"
                ? { background: "#eee", borderRadius: 8, padding: 4 }
                : {}),
            }}
          >
            {items.map((t) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => context.setActiveTab(t.id)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    fontSize: 14,
                    ...activeStyle(isActive),
                  }}
                >
                  {t.icon}
                  {t.label}
                </button>
              );
            })}
          </div>
        );
      },
      onTabChange: (context, newTab, oldTab) => {
        if (scrollTopOnChange) {
          const el = context.refs.container?.current;
          if (el) el.scrollTop = 0;
        }
        onChange?.(newTab, oldTab);
      },
    },
  };
}

`,$S=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";

export interface TagListConfig {
  /** 标签文本列表 */
  tags: string[];
  /** 整组对齐，默认左对齐 */
  align?: "left" | "center" | "right";
}

/**
 * TagList - 兴趣 / 标签行：一排圆角小标签。
 *
 * 走领域槽 \`renderBioArea\`（与 BioSlot / SocialLinks 同区，按 priority 串联）。
 * tags 为空时整体返回 null。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createTagListPlugin<T = unknown>(
  config: TagListConfig = { tags: [] }
): ProfilePlugin<T> {
  const { tags, align = "left" } = config;
  return {
    name: "TagList",
    version: "0.1.0",
    description: "兴趣 / 标签行：一排圆角小标签。",
    priority: 12,
    enabled: true,
    hooks: {
      renderBioArea: (_context: ProfilePluginContext<T>) => {
        if (!tags.length) return null;
        return (
          <div
            className="vp-tags"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              justifyContent:
                align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
            }}
          >
            {tags.map((t, i) => (
              <span
                key={i}
                className="vp-tag"
                style={{
                  padding: "2px 10px",
                  borderRadius: 999,
                  fontSize: 12,
                  lineHeight: 1.6,
                  background: "rgba(125,130,140,0.16)",
                  color: "inherit",
                  border: "1px solid rgba(125,130,140,0.25)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        );
      },
    },
  };
}
`,AS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
  BadgeType,
} from "../../components/ProfilePlugin/plugins/types";
import { BadgeIcon } from "./internal";

export interface VerifyBadgeConfig {
  /** 强制认证态，覆盖 context.verified */
  verified?: boolean;
  /** 认证类型，覆盖 context.badgeType */
  type?: BadgeType;
  /** 徽标旁文字；缺省按 type 给「认证」/「机构认证」 */
  label?: React.ReactNode;
  /** 是否展示文字，默认 true */
  showLabel?: boolean;
}

/**
 * VerifyBadge - 认证徽标：个人 / 机构认证对勾，浮于头图右上角。
 *
 * 走领域槽 \`renderBadgeArea\`（由 ProfileCore 的 \`vp-badge-area\` 消费，绝对定位
 * 于头图右上）。\`verified\` 为 false（config 或 context）时不渲染。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createVerifyBadgePlugin<T = unknown>(
  config: VerifyBadgeConfig = {}
): ProfilePlugin<T> {
  const { showLabel = true } = config;
  return {
    name: "VerifyBadge",
    version: "0.1.0",
    description:
      "认证徽标：个人 / 机构认证对勾，浮于头图右上角。",
    priority: 30,
    enabled: true,
    hooks: {
      renderBadgeArea: (context: ProfilePluginContext<T>) => {
        const verified = config.verified ?? context.verified;
        const type = config.type ?? context.badgeType;
        if (!verified) return null;
        const labelText =
          config.label ?? (type === "institution" ? "机构认证" : "认证");
        return (
          <span
            className="vp-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: "2px 8px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.92)",
              color: "#333",
              fontSize: 12,
            }}
          >
            <BadgeIcon type={type} />
            {showLabel && labelText}
          </span>
        );
      },
    },
  };
}

`,MS=`\uFEFFimport type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import { cssImageUrl } from "../../components/ProfilePlugin/plugins/safe-url";

export interface WorkItem {
  /** 唯一 id（作 React key） */
  id: string;
  /** 标题 */
  title: string;
  /** 封面图 URL（优先于 coverColor） */
  cover?: string;
  /** 无封面图时的纯色占位（CSS 颜色） */
  coverColor?: string;
  /** 副信息（时长 / 点赞 / 日期…） */
  meta?: React.ReactNode;
}

export interface WorksGridConfig {
  /** 作品列表 */
  items: WorkItem[];
  /** 列数，默认 3 */
  columns?: number;
  /** 卡片间距，默认 10 */
  gap?: number;
  /**
   * 仅在某个页签激活时显示（与 TabSync 联动）。
   * 不填则始终显示（适合没有页签、以作品为主页内容的主页）。
   */
  tab?: string;
  /** 标题（网格上方的分组标题，可选） */
  title?: React.ReactNode;
  /** 空列表时的占位文案 */
  empty?: React.ReactNode;
}

const FALLBACK_COLORS = [
  "#6a11cb",
  "#1a5fd0",
  "#11998e",
  "#ff7e5f",
  "#fc466b",
  "#3a1c71",
];

/**
 * WorksGrid - 作品网格：随 activeTab 联动的内容区插件。
 *
 * 走领域槽 \`renderContentArea\`（由 ProfileCore 的 \`vp-content-area\` 消费）。
 * 当 \`config.tab\` 有值时，只在对应页签激活时才渲染，实现「切到作品 tab 才出网格」。
 * 没有内容插件时 Core 会回退到 children，因此本插件与 TabSync 文本区可二选一。
 */
// 泛型默认值 unknown：T 仅出现在入参位（逆变安全），不写 T 的调用方不受影响。
export function createWorksGridPlugin<T = unknown>(
  config: WorksGridConfig = { items: [] }
): ProfilePlugin<T> {
  const { items, columns = 3, gap = 10, tab, title, empty = "暂无作品" } = config;

  return {
    name: "WorksGrid",
    version: "0.1.0",
    description: "作品网格：随 activeTab 联动的内容区插件。",
    priority: 15,
    enabled: true,
    hooks: {
      renderContentArea: (context: ProfilePluginContext<T>) => {
        // tab 过滤：指定了 tab 且当前不是该 tab 时整体不渲染
        if (tab && context.activeTab !== tab) return null;

        const grid = (
          <div
            className="vp-works-grid"
            style={{
              display: "grid",
              gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
              gap,
            }}
          >
            {items.map((w, i) => {
              const coverUrl = cssImageUrl(w.cover);
              const bg =
                coverUrl ??
                w.coverColor ??
                FALLBACK_COLORS[i % FALLBACK_COLORS.length];
              return (
                <figure
                  key={w.id}
                  className="vp-work"
                  style={{
                    margin: 0,
                    borderRadius: 10,
                    overflow: "hidden",
                    border: "1px solid rgba(125,130,140,0.22)",
                    background: "#fff",
                    color: "#222",
                  }}
                >
                  <div
                    style={{
                      aspectRatio: "1 / 1",
                      background: coverUrl ? \`\${coverUrl} center/cover no-repeat\` : bg,
                    }}
                  />
                  <figcaption style={{ padding: "8px 10px" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>{w.title}</div>
                    {w.meta ? (
                      <div style={{ fontSize: 11, color: "#6b6b6b", marginTop: 2 }}>{w.meta}</div>
                    ) : null}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        );

        if (items.length === 0) {
          return (
            <div
              className="vp-works-empty"
              style={{ padding: "24px 0", textAlign: "center", color: "#6b6b6b" }}
            >
              {empty}
            </div>
          );
        }

        if (!title) return grid;
        return (
          <div className="vp-works">
            <div
              className="vp-works-title"
              style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}
            >
              {title}
            </div>
            {grid}
          </div>
        );
      },
    },
  };
}
`,JS={visual:"视觉",data:"数据",interaction:"交互与状态"},xu=["visual","data","interaction"],Pu=Object.assign({"/src/custom-plugins/AchievementWallPlugin/doc.json":hf,"/src/custom-plugins/ActivitySummaryPlugin/doc.json":gf,"/src/custom-plugins/BannerSlotPlugin/doc.json":ef,"/src/custom-plugins/BioSlotPlugin/doc.json":lf,"/src/custom-plugins/ContactCardPlugin/doc.json":pf,"/src/custom-plugins/FollowEchoPlugin/doc.json":of,"/src/custom-plugins/LiveStatusPlugin/doc.json":ff,"/src/custom-plugins/MembershipBadgePlugin/doc.json":cf,"/src/custom-plugins/MessageButtonPlugin/doc.json":mf,"/src/custom-plugins/QRSharePlugin/doc.json":df,"/src/custom-plugins/SocialLinksPlugin/doc.json":af,"/src/custom-plugins/StatRowPlugin/doc.json":tf,"/src/custom-plugins/TabSyncPlugin/doc.json":nf,"/src/custom-plugins/TagListPlugin/doc.json":sf,"/src/custom-plugins/VerifyBadgePlugin/doc.json":rf,"/src/custom-plugins/WorksGridPlugin/doc.json":uf}),ku=Object.assign({"/src/custom-plugins/AchievementWallPlugin/create.tsx":SS,"/src/custom-plugins/ActivitySummaryPlugin/create.tsx":xS,"/src/custom-plugins/BannerSlotPlugin/create.tsx":PS,"/src/custom-plugins/BioSlotPlugin/create.tsx":kS,"/src/custom-plugins/ContactCardPlugin/create.tsx":bS,"/src/custom-plugins/FollowEchoPlugin/create.tsx":CS,"/src/custom-plugins/LiveStatusPlugin/create.tsx":_S,"/src/custom-plugins/MembershipBadgePlugin/create.tsx":TS,"/src/custom-plugins/MessageButtonPlugin/create.tsx":ES,"/src/custom-plugins/QRSharePlugin/create.tsx":jS,"/src/custom-plugins/SocialLinksPlugin/create.tsx":RS,"/src/custom-plugins/StatRowPlugin/create.tsx":LS,"/src/custom-plugins/TabSyncPlugin/create.tsx":NS,"/src/custom-plugins/TagListPlugin/create.tsx":$S,"/src/custom-plugins/VerifyBadgePlugin/create.tsx":AS,"/src/custom-plugins/WorksGridPlugin/create.tsx":MS}),xf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function BS(e){const t=Object.keys(ku).find(o=>xf(o)===e),n=t?ku[t]:"",r=/priority:\s*(\d+)/.exec(n);return r?Number(r[1]):0}function zS(e){const t=Object.keys(Pu).find(n=>xf(n)===e);return t?Pu[t]:{name:e,description:"（缺少 doc.json）"}}const FS=[{id:"works",label:"作品"},{id:"feeds",label:"动态"},{id:"about",label:"关于"}],OS=[{dir:"BannerSlotPlugin",group:"visual",make:()=>Jt({gradient:["#6a11cb","#1a5fd0"],avatar:qt,avatarRound:!0,height:160,overlay:D.name})},{dir:"VerifyBadgePlugin",group:"visual",make:()=>Zo({type:"personal"})},{dir:"StatRowPlugin",group:"data",make:()=>Er({items:D.stats})},{dir:"BioSlotPlugin",group:"data",make:()=>ja({name:D.name,subtitle:"前端工程师 · 组件库作者",bio:D.bio,location:"上海",joinDate:"2021 加入"})},{dir:"TagListPlugin",group:"data",make:()=>La({tags:Da})},{dir:"TabSyncPlugin",group:"interaction",make:()=>jr({tabs:FS})},{dir:"FollowEchoPlugin",group:"interaction",make:()=>$n({size:"md"})},{dir:"SocialLinksPlugin",group:"visual",make:()=>Ra({links:Ia})},{dir:"WorksGridPlugin",group:"visual",make:()=>Na({items:Ua,tab:"works"})},{dir:"MembershipBadgePlugin",group:"visual",make:()=>$a(vf)},{dir:"QRSharePlugin",group:"visual",make:()=>Aa({url:"https://vane.dev/u/frankvane"})},{dir:"AchievementWallPlugin",group:"visual",make:()=>Oa({items:Ha,tab:"about",title:"成就"})},{dir:"LiveStatusPlugin",group:"data",make:()=>Ma(yf)},{dir:"ContactCardPlugin",group:"data",make:()=>Ba(Wa)},{dir:"ActivitySummaryPlugin",group:"data",make:()=>za(Va)},{dir:"MessageButtonPlugin",group:"interaction",make:()=>Fa({})}],_i=OS.map(e=>{const t=zS(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:BS(e.dir),summary:t.description,doc:t,make:e.make}}).sort((e,t)=>xu.indexOf(e.group)-xu.indexOf(t.group)||t.priority-e.priority),IS=/\{\{\s*([\w-]+)\s*\}\}/g;function bu(e,t){return e.replace(IS,(n,r)=>r in t?String(t[r]):n)}function DS(e,t){const n=e.plugs.map(s=>s.fn).sort(),r=n.length>3,o=n.length?r?`import {
${n.map(s=>`  ${s},`).join(`
`)}
} from "vane-profile/custom-plugins";`:`import { ${n.join(", ")} } from "vane-profile/custom-plugins";`:"// 这一页只用 Core props，不需要任何插件",l=e.plugs.map(s=>`  ${s.fn}(${s.cfg?`{ ${bu(s.cfg,t)} }`:""}),`).join(`
`),i=e.props.filter(s=>typeof s=="string"||!s.when||s.when(t)).map(s=>`      ${bu(typeof s=="string"?s:s.text,t)}`).join(`
`),a=e.plugs.length?`const Profile = withPlugins(ProfileCore, [
${l}
]);`:"const Profile = ProfileCore;";return`// ${e.title} · 最小装配（照抄即可跑）
import { ProfileCore, withPlugins } from "vane-profile";
${o}

type User = { id: string; name: string; handle: string; verified?: boolean };

${a}

export default function Demo({ user }: { user: User }) {
  return (
    <Profile
      banner={<span>@{user.handle}</span>}
${i}
    />
  );
}
`}function US({controls:e,cfg:t,onChange:n}){return u.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(t)).map(r=>{const o=t[r.key];return u.jsxs("label",{className:"ctl",title:r.hint,children:[u.jsxs("span",{className:"ctl-label",children:[r.label,u.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?u.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>n(r.key,!o),"aria-pressed":!!o,children:u.jsx("i",{})}):r.kind==="select"?u.jsx("select",{className:"ctl-select",value:String(o),onChange:l=>n(r.key,l.target.value),children:(r.options??[]).map(l=>u.jsx("option",{value:l.value,children:l.label},l.value))}):u.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:l=>n(r.key,Number(l.target.value))})]},r.key)})})}function WS({lines:e,title:t="事件日志",empty:n="还没触发 —— 试着滚动、点一张卡",right:r}){return u.jsxs("div",{className:"log",children:[u.jsxs("div",{className:"log-head",children:[u.jsx("span",{children:t}),u.jsxs("span",{className:"log-right",children:[r,u.jsx("b",{children:e.length})]})]}),e.length===0?u.jsx("p",{className:"log-empty",children:n}):u.jsx("ol",{className:"log-list",children:e.map(o=>u.jsxs("li",{className:`log-line is-${o.kind}`,children:[u.jsx("time",{children:o.at}),u.jsx("span",{children:o.text})]},o.id))})]})}function VS({entry:e,order:t}){var S;const{meta:n,Stage:r,file:o,source:l}=e,[i,a]=y.useState(()=>vu(n)),[s,c]=y.useState([]),[p,d]=y.useState("minimal"),g=y.useCallback((P,m="event")=>{const f=new Date().toLocaleTimeString("zh-CN",{hour12:!1});c(h=>[{id:h.length+1,at:f,text:P,kind:m},...h].slice(0,60))},[]),v=y.useCallback((P,m)=>{a(f=>({...f,[P]:m}))},[]),w=y.useMemo(()=>DS(n,i),[n,i]);return u.jsxs("section",{className:"demo","data-demo":n.slug,children:[u.jsxs("header",{className:"demo-head",children:[u.jsxs("div",{className:"demo-folio",children:[u.jsx("span",{className:"demo-no",children:String(t).padStart(2,"0")}),u.jsx("em",{children:"plate"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"demo-title-row",children:[u.jsx("h2",{children:n.title}),u.jsx("span",{className:"demo-group",children:Ci[n.group].label}),n.plugin?u.jsx("code",{className:"demo-plugin",children:n.plugin}):null]}),u.jsx("p",{className:"demo-intro",children:n.intro}),u.jsxs("p",{className:"demo-why",children:[u.jsx("b",{children:"什么时候用"}),n.why]})]}),u.jsxs("div",{className:"demo-meta",children:[u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"file"}),u.jsx("b",{children:o})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"group"}),u.jsx("b",{children:Ci[n.group].label})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"plugs"}),u.jsx("b",{children:n.plugs.length?`${n.plugs.length} installed`:"core only"})]})]})]}),(S=n.controls)!=null&&S.length?u.jsxs("div",{className:"demo-controls",children:[u.jsx(US,{controls:n.controls,cfg:i,onChange:v}),u.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{a(vu(n)),c([])},children:"重置"})]}):null,u.jsxs("div",{className:"demo-body",children:[u.jsxs("figure",{className:"plate",children:[u.jsxs("figcaption",{className:"plate-cap",children:[u.jsx("b",{children:"stage"}),u.jsxs("span",{children:[n.tone==="light"?"light surface":"live render",n.stageHeight?` · ${n.stageHeight}px`:""]}),u.jsx("em",{children:"live"})]}),u.jsx("div",{className:"plate-ruler","aria-hidden":!0}),u.jsx("div",{className:`plate-body demo-stage${n.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${n.stageHeight??380}px`},children:u.jsx(r,{cfg:i,log:g,setCfg:v})})]}),u.jsxs("aside",{className:"demo-side",children:[u.jsx("div",{className:"demo-plugs",children:n.plugs.length===0?u.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):n.plugs.map(P=>u.jsx("span",{className:`demo-plug${P.local?" is-local":""}`,children:P.fn.replace(/^create|Plugin$/g,"")},P.fn))}),u.jsx("ul",{className:"demo-why-list",children:n.plugs.map(P=>u.jsxs("li",{children:[u.jsx("code",{children:P.fn}),u.jsx("span",{children:P.why})]},P.fn))}),n.note?u.jsxs("p",{className:"demo-note",children:["⚠ ",n.note]}):null,u.jsx(WS,{lines:s,empty:n.plugs.length>0?"还没触发 —— 拖上面的控件，或滚动 / 点卡片":"这一页没有事件类行为，日志留白"})]})]}),u.jsxs("div",{className:"demo-code",children:[u.jsxs("div",{className:"demo-switch",role:"tablist",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":p==="minimal",className:p==="minimal"?"is-active":"",onClick:()=>d("minimal"),children:"最小装配"}),u.jsx("button",{type:"button",role:"tab","aria-selected":p==="full",className:p==="full"?"is-active":"",onClick:()=>d("full"),children:"完整源码"})]}),u.jsx(fS,{code:p==="minimal"?w:l,title:p==="minimal"?`${n.slug}.minimal.tsx`:o,collapseAfter:p==="minimal"?0:26,maxHeight:420},p)]}),u.jsx(wS,{source:l,plugins:_i})]})}const HS=y.lazy(()=>_a(()=>import("./HomePage-MR-E6WSE.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),QS=y.lazy(()=>_a(()=>import("./PluginsPage-D5BvD4ZC.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),GS=y.lazy(()=>_a(()=>import("./ScenariosPage-C-q6Gvnh.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),KS={pkg:"vane-profile",brand:"V",subtitle:"个人主页 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${_i.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"4 plates"}],routes:[{path:"/",element:u.jsx(HS,{})},{path:"/plugins",element:u.jsx(QS,{})},{path:"/scenarios",element:u.jsx(GS,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:aS.map(e=>({key:e,label:Ci[e].label})),entries:bi,detail:(e,t)=>u.jsx(VS,{entry:e,order:t})},footer:[`${_i.length} PLUGINS · 4 PLATES`,`${bi.length} DEMOS · D1-A / D2-A`]};function YS(){return u.jsx(ih,{config:KS})}_l.createRoot(document.getElementById("root")).render(u.jsx(En.StrictMode,{children:u.jsx(YS,{})}));export{qt as A,vf as B,fS as C,bi as D,Aa as E,Fa as F,xu as G,Oa as H,Ha as I,ki as L,_i as P,D as S,_1 as T,ZS as a,ja as b,Jt as c,Er as d,Ra as e,Ia as f,La as g,Da as h,jr as i,u as j,Zo as k,$n as l,Na as m,Ua as n,ne as o,JS as p,Ma as q,y as r,yf as s,Ba as t,Tr as u,Wa as v,ie as w,za as x,Va as y,$a as z};
