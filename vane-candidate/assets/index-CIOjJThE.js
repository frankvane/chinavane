const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ScenariosPage-kU1MAo7n.js","./audit-candidate-d0BA5Px3.js","./selftest-BCFTukUH.js"])))=>i.map(i=>d[i]);
var If=Object.defineProperty;var Af=(e,n,t)=>n in e?If(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var hs=(e,n,t)=>Af(e,typeof n!="symbol"?n+"":n,t);function Bf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Ff(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nc={exports:{}},Bo={},tc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r=Symbol.for("react.element"),Uf=Symbol.for("react.portal"),Wf=Symbol.for("react.fragment"),Hf=Symbol.for("react.strict_mode"),Vf=Symbol.for("react.profiler"),Kf=Symbol.for("react.provider"),Gf=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),Yf=Symbol.for("react.suspense"),Xf=Symbol.for("react.memo"),Jf=Symbol.for("react.lazy"),ys=Symbol.iterator;function Zf(e){return e===null||typeof e!="object"?null:(e=ys&&e[ys]||e["@@iterator"],typeof e=="function"?e:null)}var rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oc=Object.assign,ic={};function Et(e,n,t){this.props=e,this.context=n,this.refs=ic,this.updater=t||rc}Et.prototype.isReactComponent={};Et.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Et.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lc(){}lc.prototype=Et.prototype;function Vl(e,n,t){this.props=e,this.context=n,this.refs=ic,this.updater=t||rc}var Kl=Vl.prototype=new lc;Kl.constructor=Vl;oc(Kl,Et.prototype);Kl.isPureReactComponent=!0;var vs=Array.isArray,ac=Object.prototype.hasOwnProperty,Gl={current:null},sc={key:!0,ref:!0,__self:!0,__source:!0};function uc(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)ac.call(n,r)&&!sc.hasOwnProperty(r)&&(o[r]=n[r]);var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:_r,type:e,key:i,ref:l,props:o,_owner:Gl.current}}function qf(e,n){return{$$typeof:_r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===_r}function ep(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var xs=/\/+/g;function mi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ep(""+e.key):n.toString(36)}function eo(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case _r:case Uf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+mi(l,0):r,vs(o)?(t="",e!=null&&(t=e.replace(xs,"$&/")+"/"),eo(o,n,t,"",function(c){return c})):o!=null&&(Ql(o)&&(o=qf(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(xs,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",vs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+mi(i,a);l+=eo(i,n,t,s,o)}else if(s=Zf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+mi(i,a++),l+=eo(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Dr(e,n,t){if(e==null)return e;var r=[],o=0;return eo(e,r,"","",function(i){return n.call(t,i,o++)}),r}function np(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},no={transition:null},tp={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:no,ReactCurrentOwner:Gl};function cc(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Dr,forEach:function(e,n,t){Dr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Dr(e,function(){n++}),n},toArray:function(e){return Dr(e,function(n){return n})||[]},only:function(e){if(!Ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Et;L.Fragment=Wf;L.Profiler=Vf;L.PureComponent=Vl;L.StrictMode=Hf;L.Suspense=Yf;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tp;L.act=cc;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=oc({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Gl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)ac.call(n,s)&&!sc.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:_r,type:e.type,key:o,ref:i,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:Gf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kf,_context:e},e.Consumer=e};L.createElement=uc;L.createFactory=function(e){var n=uc.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Qf,render:e}};L.isValidElement=Ql;L.lazy=function(e){return{$$typeof:Jf,_payload:{_status:-1,_result:e},_init:np}};L.memo=function(e,n){return{$$typeof:Xf,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=no.transition;no.transition={};try{e()}finally{no.transition=n}};L.unstable_act=cc;L.useCallback=function(e,n){return he.current.useCallback(e,n)};L.useContext=function(e){return he.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return he.current.useDeferredValue(e)};L.useEffect=function(e,n){return he.current.useEffect(e,n)};L.useId=function(){return he.current.useId()};L.useImperativeHandle=function(e,n,t){return he.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return he.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return he.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return he.current.useMemo(e,n)};L.useReducer=function(e,n,t){return he.current.useReducer(e,n,t)};L.useRef=function(e){return he.current.useRef(e)};L.useState=function(e){return he.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return he.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return he.current.useTransition()};L.version="18.3.1";tc.exports=L;var v=tc.exports;const $n=Ff(v),rp=Bf({__proto__:null,default:$n},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op=v,ip=Symbol.for("react.element"),lp=Symbol.for("react.fragment"),ap=Object.prototype.hasOwnProperty,sp=op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,up={key:!0,ref:!0,__self:!0,__source:!0};function dc(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)ap.call(n,r)&&!up.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:ip,type:e,key:i,ref:l,props:o,_owner:sp.current}}Bo.Fragment=lp;Bo.jsx=dc;Bo.jsxs=dc;nc.exports=Bo;var u=nc.exports,Hi={},fc={exports:{}},Ee={},pc={exports:{}},gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,O){var R=T.length;T.push(O);e:for(;0<R;){var I=R-1>>>1,W=T[I];if(0<o(W,O))T[I]=O,T[R]=W,R=I;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],R=T.pop();if(R!==O){T[0]=R;e:for(var I=0,W=T.length,He=W>>>1;I<He;){var Ce=2*(I+1)-1,In=T[Ce],An=Ce+1,Rr=T[An];if(0>o(In,R))An<W&&0>o(Rr,In)?(T[I]=Rr,T[An]=R,I=An):(T[I]=In,T[Ce]=R,I=Ce);else if(An<W&&0>o(Rr,R))T[I]=Rr,T[An]=R,I=An;else break e}}return O}function o(T,O){var R=T.sortIndex-O.sortIndex;return R!==0?R:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],d=1,f=null,h=3,x=!1,y=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var O=t(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=T)r(c),O.sortIndex=O.expirationTime,n(s,O);else break;O=t(c)}}function w(T){if(S=!1,m(T),!y)if(t(s)!==null)y=!0,Je(j);else{var O=t(c);O!==null&&zt(w,O.startTime-T)}}function j(T,O){y=!1,S&&(S=!1,g(E),E=-1),x=!0;var R=h;try{for(m(O),f=t(s);f!==null&&(!(f.expirationTime>O)||T&&!M());){var I=f.callback;if(typeof I=="function"){f.callback=null,h=f.priorityLevel;var W=I(f.expirationTime<=O);O=e.unstable_now(),typeof W=="function"?f.callback=W:f===t(s)&&r(s),m(O)}else r(s);f=t(s)}if(f!==null)var He=!0;else{var Ce=t(c);Ce!==null&&zt(w,Ce.startTime-O),He=!1}return He}finally{f=null,h=R,x=!1}}var C=!1,_=null,E=-1,D=5,N=-1;function M(){return!(e.unstable_now()-N<D)}function se(){if(_!==null){var T=e.unstable_now();N=T;var O=!0;try{O=_(!0,T)}finally{O?q():(C=!1,_=null)}}else C=!1}var q;if(typeof p=="function")q=function(){p(se)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Xe=pe.port2;pe.port1.onmessage=se,q=function(){Xe.postMessage(null)}}else q=function(){b(se,0)};function Je(T){_=T,C||(C=!0,q())}function zt(T,O){E=b(function(){T(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Je(j))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var R=h;h=O;try{return T()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=h;h=T;try{return O()}finally{h=R}},e.unstable_scheduleCallback=function(T,O,R){var I=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?I+R:I):R=I,T){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=R+W,T={id:d++,callback:O,priorityLevel:T,startTime:R,expirationTime:W,sortIndex:-1},R>I?(T.sortIndex=R,n(c,T),t(s)===null&&T===t(c)&&(S?(g(E),E=-1):S=!0,zt(w,R-I))):(T.sortIndex=W,n(s,T),y||x||(y=!0,Je(j))),T},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(T){var O=h;return function(){var R=h;h=O;try{return T.apply(this,arguments)}finally{h=R}}}})(gc);pc.exports=gc;var cp=pc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp=v,je=cp;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mc=new Set,lr={};function Zn(e,n){wt(e,n),wt(e+"Capture",n)}function wt(e,n){for(lr[e]=n,e=0;e<n.length;e++)mc.add(n[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vi=Object.prototype.hasOwnProperty,fp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ss={},ws={};function pp(e){return Vi.call(ws,e)?!0:Vi.call(Ss,e)?!1:fp.test(e)?ws[e]=!0:(Ss[e]=!0,!1)}function gp(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mp(e,n,t,r){if(n===null||typeof n>"u"||gp(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];le[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yl=/[\-:]([a-z])/g;function Xl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Yl,Xl);le[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Yl,Xl);le[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Yl,Xl);le[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jl(e,n,t,r){var o=le.hasOwnProperty(n)?le[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(mp(n,t,o,r)&&(t=null),r||o===null?pp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var sn=dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lr=Symbol.for("react.element"),rt=Symbol.for("react.portal"),ot=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),Ki=Symbol.for("react.profiler"),hc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),ql=Symbol.for("react.forward_ref"),Gi=Symbol.for("react.suspense"),Qi=Symbol.for("react.suspense_list"),ea=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),vc=Symbol.for("react.offscreen"),ks=Symbol.iterator;function Mt(e){return e===null||typeof e!="object"?null:(e=ks&&e[ks]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,hi;function Kt(e){if(hi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);hi=n&&n[1]||""}return`
`+hi+e}var yi=!1;function vi(e,n){if(!e||yi)return"";yi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{yi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Kt(e):""}function hp(e){switch(e.tag){case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 2:case 15:return e=vi(e.type,!1),e;case 11:return e=vi(e.type.render,!1),e;case 1:return e=vi(e.type,!0),e;default:return""}}function Yi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ot:return"Fragment";case rt:return"Portal";case Ki:return"Profiler";case Zl:return"StrictMode";case Gi:return"Suspense";case Qi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yc:return(e.displayName||"Context")+".Consumer";case hc:return(e._context.displayName||"Context")+".Provider";case ql:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ea:return n=e.displayName||null,n!==null?n:Yi(e.type)||"Memo";case dn:n=e._payload,e=e._init;try{return Yi(e(n))}catch{}}return null}function yp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yi(n);case 8:return n===Zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vp(e){var n=xc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function zr(e){e._valueTracker||(e._valueTracker=vp(e))}function Sc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=xc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xi(e,n){var t=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Cs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=En(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function wc(e,n){n=n.checked,n!=null&&Jl(e,"checked",n,!1)}function Ji(e,n){wc(e,n);var t=En(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Zi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Zi(e,n.type,En(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ps(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Zi(e,n,t){(n!=="number"||po(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Gt=Array.isArray;function mt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+En(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function qi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _s(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(Gt(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:En(t)}}function kc(e,n){var t=En(n.value),r=En(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function bs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function el(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Cc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mr,Pc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ar(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xp=["Webkit","ms","Moz","O"];Object.keys(Jt).forEach(function(e){xp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Jt[n]=Jt[e]})});function _c(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Jt.hasOwnProperty(e)&&Jt[e]?(""+n).trim():n+"px"}function bc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=_c(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Sp=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(e,n){if(n){if(Sp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function tl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,ht=null,yt=null;function js(e){if(e=Er(e)){if(typeof ol!="function")throw Error(P(280));var n=e.stateNode;n&&(n=Vo(n),ol(e.stateNode,e.type,n))}}function jc(e){ht?yt?yt.push(e):yt=[e]:ht=e}function Ec(){if(ht){var e=ht,n=yt;if(yt=ht=null,js(e),n)for(e=0;e<n.length;e++)js(n[e])}}function Tc(e,n){return e(n)}function $c(){}var xi=!1;function Nc(e,n,t){if(xi)return e(n,t);xi=!0;try{return Tc(e,n,t)}finally{xi=!1,(ht!==null||yt!==null)&&($c(),Ec())}}function sr(e,n){var t=e.stateNode;if(t===null)return null;var r=Vo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var il=!1;if(rn)try{var It={};Object.defineProperty(It,"passive",{get:function(){il=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{il=!1}function wp(e,n,t,r,o,i,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(d){this.onError(d)}}var Zt=!1,go=null,mo=!1,ll=null,kp={onError:function(e){Zt=!0,go=e}};function Cp(e,n,t,r,o,i,l,a,s){Zt=!1,go=null,wp.apply(kp,arguments)}function Pp(e,n,t,r,o,i,l,a,s){if(Cp.apply(this,arguments),Zt){if(Zt){var c=go;Zt=!1,go=null}else throw Error(P(198));mo||(mo=!0,ll=c)}}function qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Oc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Es(e){if(qn(e)!==e)throw Error(P(188))}function _p(e){var n=e.alternate;if(!n){if(n=qn(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Es(o),e;if(i===r)return Es(o),n;i=i.sibling}throw Error(P(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function Rc(e){return e=_p(e),e!==null?Dc(e):null}function Dc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Dc(e);if(n!==null)return n;e=e.sibling}return null}var Lc=je.unstable_scheduleCallback,Ts=je.unstable_cancelCallback,bp=je.unstable_shouldYield,jp=je.unstable_requestPaint,X=je.unstable_now,Ep=je.unstable_getCurrentPriorityLevel,ta=je.unstable_ImmediatePriority,zc=je.unstable_UserBlockingPriority,ho=je.unstable_NormalPriority,Tp=je.unstable_LowPriority,Mc=je.unstable_IdlePriority,Fo=null,Qe=null;function $p(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Fo,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:Rp,Np=Math.log,Op=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(Np(e)/Op|0)|0}var Ir=64,Ar=4194304;function Qt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~o;a!==0?r=Qt(a):(i&=l,i!==0&&(r=Qt(i)))}else l=t&~o,l!==0?r=Qt(l):i!==0&&(r=Qt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Be(n),o=1<<t,r|=e[t],n&=~o;return r}function Dp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Be(i),a=1<<l,s=o[l];s===-1?(!(a&t)||a&r)&&(o[l]=Dp(a,n)):s<=n&&(e.expiredLanes|=a),i&=~a}}function al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ic(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function Si(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function br(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Be(n),e[n]=t}function zp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Be(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function ra(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Be(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var A=0;function Ac(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bc,oa,Fc,Uc,Wc,sl=!1,Br=[],xn=null,Sn=null,wn=null,ur=new Map,cr=new Map,pn=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $s(e,n){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":ur.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(n.pointerId)}}function At(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=Er(n),n!==null&&oa(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Ip(e,n,t,r,o){switch(n){case"focusin":return xn=At(xn,e,n,t,r,o),!0;case"dragenter":return Sn=At(Sn,e,n,t,r,o),!0;case"mouseover":return wn=At(wn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return ur.set(i,At(ur.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,cr.set(i,At(cr.get(i)||null,e,n,t,r,o)),!0}return!1}function Hc(e){var n=Un(e.target);if(n!==null){var t=qn(n);if(t!==null){if(n=t.tag,n===13){if(n=Oc(t),n!==null){e.blockedOn=n,Wc(e.priority,function(){Fc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ul(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);rl=r,t.target.dispatchEvent(r),rl=null}else return n=Er(t),n!==null&&oa(n),e.blockedOn=t,!1;n.shift()}return!0}function Ns(e,n,t){to(e)&&t.delete(n)}function Ap(){sl=!1,xn!==null&&to(xn)&&(xn=null),Sn!==null&&to(Sn)&&(Sn=null),wn!==null&&to(wn)&&(wn=null),ur.forEach(Ns),cr.forEach(Ns)}function Bt(e,n){e.blockedOn===n&&(e.blockedOn=null,sl||(sl=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Ap)))}function dr(e){function n(o){return Bt(o,e)}if(0<Br.length){Bt(Br[0],e);for(var t=1;t<Br.length;t++){var r=Br[t];r.blockedOn===e&&(r.blockedOn=null)}}for(xn!==null&&Bt(xn,e),Sn!==null&&Bt(Sn,e),wn!==null&&Bt(wn,e),ur.forEach(n),cr.forEach(n),t=0;t<pn.length;t++)r=pn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(t=pn[0],t.blockedOn===null);)Hc(t),t.blockedOn===null&&pn.shift()}var vt=sn.ReactCurrentBatchConfig,vo=!0;function Bp(e,n,t,r){var o=A,i=vt.transition;vt.transition=null;try{A=1,ia(e,n,t,r)}finally{A=o,vt.transition=i}}function Fp(e,n,t,r){var o=A,i=vt.transition;vt.transition=null;try{A=4,ia(e,n,t,r)}finally{A=o,vt.transition=i}}function ia(e,n,t,r){if(vo){var o=ul(e,n,t,r);if(o===null)$i(e,n,r,xo,t),$s(e,r);else if(Ip(o,e,n,t,r))r.stopPropagation();else if($s(e,r),n&4&&-1<Mp.indexOf(e)){for(;o!==null;){var i=Er(o);if(i!==null&&Bc(i),i=ul(e,n,t,r),i===null&&$i(e,n,r,xo,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else $i(e,n,r,null,t)}}var xo=null;function ul(e,n,t,r){if(xo=null,e=na(r),e=Un(e),e!==null)if(n=qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Oc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return xo=e,null}function Vc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ep()){case ta:return 1;case zc:return 4;case ho:case Tp:return 16;case Mc:return 536870912;default:return 16}default:return 16}}var mn=null,la=null,ro=null;function Kc(){if(ro)return ro;var e,n=la,t=n.length,r,o="value"in mn?mn.value:mn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return ro=o.slice(e,1<r?1-r:void 0)}function oo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function Os(){return!1}function Te(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fr:Os,this.isPropagationStopped=Os,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),n}var Tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=Te(Tt),jr=Q({},Tt,{view:0,detail:0}),Up=Te(jr),wi,ki,Ft,Uo=Q({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ft&&(Ft&&e.type==="mousemove"?(wi=e.screenX-Ft.screenX,ki=e.screenY-Ft.screenY):ki=wi=0,Ft=e),wi)},movementY:function(e){return"movementY"in e?e.movementY:ki}}),Rs=Te(Uo),Wp=Q({},Uo,{dataTransfer:0}),Hp=Te(Wp),Vp=Q({},jr,{relatedTarget:0}),Ci=Te(Vp),Kp=Q({},Tt,{animationName:0,elapsedTime:0,pseudoElement:0}),Gp=Te(Kp),Qp=Q({},Tt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yp=Te(Qp),Xp=Q({},Tt,{data:0}),Ds=Te(Xp),Jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=qp[e])?!!n[e]:!1}function sa(){return eg}var ng=Q({},jr,{key:function(e){if(e.key){var n=Jp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sa,charCode:function(e){return e.type==="keypress"?oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tg=Te(ng),rg=Q({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=Te(rg),og=Q({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sa}),ig=Te(og),lg=Q({},Tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ag=Te(lg),sg=Q({},Uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ug=Te(sg),cg=[9,13,27,32],ua=rn&&"CompositionEvent"in window,qt=null;rn&&"documentMode"in document&&(qt=document.documentMode);var dg=rn&&"TextEvent"in window&&!qt,Gc=rn&&(!ua||qt&&8<qt&&11>=qt),zs=" ",Ms=!1;function Qc(e,n){switch(e){case"keyup":return cg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var it=!1;function fg(e,n){switch(e){case"compositionend":return Yc(n);case"keypress":return n.which!==32?null:(Ms=!0,zs);case"textInput":return e=n.data,e===zs&&Ms?null:e;default:return null}}function pg(e,n){if(it)return e==="compositionend"||!ua&&Qc(e,n)?(e=Kc(),ro=la=mn=null,it=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gc&&n.locale!=="ko"?null:n.data;default:return null}}var gg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gg[e.type]:n==="textarea"}function Xc(e,n,t,r){jc(r),n=So(n,"onChange"),0<n.length&&(t=new aa("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var er=null,fr=null;function mg(e){ad(e,0)}function Wo(e){var n=st(e);if(Sc(n))return e}function hg(e,n){if(e==="change")return n}var Jc=!1;if(rn){var Pi;if(rn){var _i="oninput"in document;if(!_i){var As=document.createElement("div");As.setAttribute("oninput","return;"),_i=typeof As.oninput=="function"}Pi=_i}else Pi=!1;Jc=Pi&&(!document.documentMode||9<document.documentMode)}function Bs(){er&&(er.detachEvent("onpropertychange",Zc),fr=er=null)}function Zc(e){if(e.propertyName==="value"&&Wo(fr)){var n=[];Xc(n,fr,e,na(e)),Nc(mg,n)}}function yg(e,n,t){e==="focusin"?(Bs(),er=n,fr=t,er.attachEvent("onpropertychange",Zc)):e==="focusout"&&Bs()}function vg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wo(fr)}function xg(e,n){if(e==="click")return Wo(n)}function Sg(e,n){if(e==="input"||e==="change")return Wo(n)}function wg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var We=typeof Object.is=="function"?Object.is:wg;function pr(e,n){if(We(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Vi.call(n,o)||!We(e[o],n[o]))return!1}return!0}function Fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Us(e,n){var t=Fs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fs(t)}}function qc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ed(){for(var e=window,n=po();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=po(e.document)}return n}function ca(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function kg(e){var n=ed(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&qc(t.ownerDocument.documentElement,t)){if(r!==null&&ca(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Us(t,i);var l=Us(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cg=rn&&"documentMode"in document&&11>=document.documentMode,lt=null,cl=null,nr=null,dl=!1;function Ws(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;dl||lt==null||lt!==po(r)||(r=lt,"selectionStart"in r&&ca(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&pr(nr,r)||(nr=r,r=So(cl,"onSelect"),0<r.length&&(n=new aa("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=lt)))}function Ur(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var at={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},bi={},nd={};rn&&(nd=document.createElement("div").style,"AnimationEvent"in window||(delete at.animationend.animation,delete at.animationiteration.animation,delete at.animationstart.animation),"TransitionEvent"in window||delete at.transitionend.transition);function Ho(e){if(bi[e])return bi[e];if(!at[e])return e;var n=at[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in nd)return bi[e]=n[t];return e}var td=Ho("animationend"),rd=Ho("animationiteration"),od=Ho("animationstart"),id=Ho("transitionend"),ld=new Map,Hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,n){ld.set(e,n),Zn(n,[e])}for(var ji=0;ji<Hs.length;ji++){var Ei=Hs[ji],Pg=Ei.toLowerCase(),_g=Ei[0].toUpperCase()+Ei.slice(1);Nn(Pg,"on"+_g)}Nn(td,"onAnimationEnd");Nn(rd,"onAnimationIteration");Nn(od,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(id,"onTransitionEnd");wt("onMouseEnter",["mouseout","mouseover"]);wt("onMouseLeave",["mouseout","mouseover"]);wt("onPointerEnter",["pointerout","pointerover"]);wt("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yt));function Vs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Pp(r,n,void 0,e),e.currentTarget=null}function ad(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Vs(o,a,c),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Vs(o,a,c),i=s}}}if(mo)throw e=ll,mo=!1,ll=null,e}function F(e,n){var t=n[hl];t===void 0&&(t=n[hl]=new Set);var r=e+"__bubble";t.has(r)||(sd(n,e,2,!1),t.add(r))}function Ti(e,n,t){var r=0;n&&(r|=4),sd(t,e,r,n)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function gr(e){if(!e[Wr]){e[Wr]=!0,mc.forEach(function(t){t!=="selectionchange"&&(bg.has(t)||Ti(t,!1,e),Ti(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wr]||(n[Wr]=!0,Ti("selectionchange",!1,n))}}function sd(e,n,t,r){switch(Vc(n)){case 1:var o=Bp;break;case 4:o=Fp;break;default:o=ia}t=o.bind(null,n,t,e),o=void 0,!il||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function $i(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Un(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Nc(function(){var c=i,d=na(t),f=[];e:{var h=ld.get(e);if(h!==void 0){var x=aa,y=e;switch(e){case"keypress":if(oo(t)===0)break e;case"keydown":case"keyup":x=tg;break;case"focusin":y="focus",x=Ci;break;case"focusout":y="blur",x=Ci;break;case"beforeblur":case"afterblur":x=Ci;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=ig;break;case td:case rd:case od:x=Gp;break;case id:x=ag;break;case"scroll":x=Up;break;case"wheel":x=ug;break;case"copy":case"cut":case"paste":x=Yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ls}var S=(n&4)!==0,b=!S&&e==="scroll",g=S?h!==null?h+"Capture":null:h;S=[];for(var p=c,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=sr(p,g),w!=null&&S.push(mr(p,w,m)))),b)break;p=p.return}0<S.length&&(h=new x(h,y,null,t,d),f.push({event:h,listeners:S}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&t!==rl&&(y=t.relatedTarget||t.fromElement)&&(Un(y)||y[on]))break e;if((x||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,x?(y=t.relatedTarget||t.toElement,x=c,y=y?Un(y):null,y!==null&&(b=qn(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(S=Rs,w="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ls,w="onPointerLeave",g="onPointerEnter",p="pointer"),b=x==null?h:st(x),m=y==null?h:st(y),h=new S(w,p+"leave",x,t,d),h.target=b,h.relatedTarget=m,w=null,Un(d)===c&&(S=new S(g,p+"enter",y,t,d),S.target=m,S.relatedTarget=b,w=S),b=w,x&&y)n:{for(S=x,g=y,p=0,m=S;m;m=tt(m))p++;for(m=0,w=g;w;w=tt(w))m++;for(;0<p-m;)S=tt(S),p--;for(;0<m-p;)g=tt(g),m--;for(;p--;){if(S===g||g!==null&&S===g.alternate)break n;S=tt(S),g=tt(g)}S=null}else S=null;x!==null&&Ks(f,h,x,S,!1),y!==null&&b!==null&&Ks(f,b,y,S,!0)}}e:{if(h=c?st(c):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var j=hg;else if(Is(h))if(Jc)j=Sg;else{j=vg;var C=yg}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=xg);if(j&&(j=j(e,c))){Xc(f,j,t,d);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Zi(h,"number",h.value)}switch(C=c?st(c):window,e){case"focusin":(Is(C)||C.contentEditable==="true")&&(lt=C,cl=c,nr=null);break;case"focusout":nr=cl=lt=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,Ws(f,t,d);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":Ws(f,t,d)}var _;if(ua)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else it?Qc(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Gc&&t.locale!=="ko"&&(it||E!=="onCompositionStart"?E==="onCompositionEnd"&&it&&(_=Kc()):(mn=d,la="value"in mn?mn.value:mn.textContent,it=!0)),C=So(c,E),0<C.length&&(E=new Ds(E,e,null,t,d),f.push({event:E,listeners:C}),_?E.data=_:(_=Yc(t),_!==null&&(E.data=_)))),(_=dg?fg(e,t):pg(e,t))&&(c=So(c,"onBeforeInput"),0<c.length&&(d=new Ds("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:c}),d.data=_))}ad(f,n)})}function mr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function So(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=sr(e,t),i!=null&&r.unshift(mr(e,i,o)),i=sr(e,n),i!=null&&r.push(mr(e,i,o))),e=e.return}return r}function tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ks(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=sr(t,i),s!=null&&l.unshift(mr(t,s,a))):o||(s=sr(t,i),s!=null&&l.push(mr(t,s,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var jg=/\r\n?/g,Eg=/\u0000|\uFFFD/g;function Gs(e){return(typeof e=="string"?e:""+e).replace(jg,`
`).replace(Eg,"")}function Hr(e,n,t){if(n=Gs(n),Gs(e)!==n&&t)throw Error(P(425))}function wo(){}var fl=null,pl=null;function gl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ml=typeof setTimeout=="function"?setTimeout:void 0,Tg=typeof clearTimeout=="function"?clearTimeout:void 0,Qs=typeof Promise=="function"?Promise:void 0,$g=typeof queueMicrotask=="function"?queueMicrotask:typeof Qs<"u"?function(e){return Qs.resolve(null).then(e).catch(Ng)}:ml;function Ng(e){setTimeout(function(){throw e})}function Ni(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),dr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);dr(n)}function kn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ys(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var $t=Math.random().toString(36).slice(2),Ge="__reactFiber$"+$t,hr="__reactProps$"+$t,on="__reactContainer$"+$t,hl="__reactEvents$"+$t,Og="__reactListeners$"+$t,Rg="__reactHandles$"+$t;function Un(e){var n=e[Ge];if(n)return n;for(var t=e.parentNode;t;){if(n=t[on]||t[Ge]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ys(e);e!==null;){if(t=e[Ge])return t;e=Ys(e)}return n}e=t,t=e.parentNode}return null}function Er(e){return e=e[Ge]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function st(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Vo(e){return e[hr]||null}var yl=[],ut=-1;function On(e){return{current:e}}function U(e){0>ut||(e.current=yl[ut],yl[ut]=null,ut--)}function B(e,n){ut++,yl[ut]=e.current,e.current=n}var Tn={},fe=On(Tn),Se=On(!1),Gn=Tn;function kt(e,n){var t=e.type.contextTypes;if(!t)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function we(e){return e=e.childContextTypes,e!=null}function ko(){U(Se),U(fe)}function Xs(e,n,t){if(fe.current!==Tn)throw Error(P(168));B(fe,n),B(Se,t)}function ud(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(P(108,yp(e)||"Unknown",o));return Q({},t,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,Gn=fe.current,B(fe,e),B(Se,Se.current),!0}function Js(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=ud(e,n,Gn),r.__reactInternalMemoizedMergedChildContext=e,U(Se),U(fe),B(fe,e)):U(Se),B(Se,t)}var qe=null,Ko=!1,Oi=!1;function cd(e){qe===null?qe=[e]:qe.push(e)}function Dg(e){Ko=!0,cd(e)}function Rn(){if(!Oi&&qe!==null){Oi=!0;var e=0,n=A;try{var t=qe;for(A=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}qe=null,Ko=!1}catch(o){throw qe!==null&&(qe=qe.slice(e+1)),Lc(ta,Rn),o}finally{A=n,Oi=!1}}return null}var ct=[],dt=0,Po=null,_o=0,$e=[],Ne=0,Qn=null,en=1,nn="";function Bn(e,n){ct[dt++]=_o,ct[dt++]=Po,Po=e,_o=n}function dd(e,n,t){$e[Ne++]=en,$e[Ne++]=nn,$e[Ne++]=Qn,Qn=e;var r=en;e=nn;var o=32-Be(r)-1;r&=~(1<<o),t+=1;var i=32-Be(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,en=1<<32-Be(n)+o|t<<o|r,nn=i+e}else en=1<<i|t<<o|r,nn=e}function da(e){e.return!==null&&(Bn(e,1),dd(e,1,0))}function fa(e){for(;e===Po;)Po=ct[--dt],ct[dt]=null,_o=ct[--dt],ct[dt]=null;for(;e===Qn;)Qn=$e[--Ne],$e[Ne]=null,nn=$e[--Ne],$e[Ne]=null,en=$e[--Ne],$e[Ne]=null}var be=null,_e=null,H=!1,Ae=null;function fd(e,n){var t=Oe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Zs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,be=e,_e=kn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,be=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Qn!==null?{id:en,overflow:nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Oe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,be=e,_e=null,!0):!1;default:return!1}}function vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xl(e){if(H){var n=_e;if(n){var t=n;if(!Zs(e,n)){if(vl(e))throw Error(P(418));n=kn(t.nextSibling);var r=be;n&&Zs(e,n)?fd(r,t):(e.flags=e.flags&-4097|2,H=!1,be=e)}}else{if(vl(e))throw Error(P(418));e.flags=e.flags&-4097|2,H=!1,be=e}}}function qs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Vr(e){if(e!==be)return!1;if(!H)return qs(e),H=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gl(e.type,e.memoizedProps)),n&&(n=_e)){if(vl(e))throw pd(),Error(P(418));for(;n;)fd(e,n),n=kn(n.nextSibling)}if(qs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_e=kn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=be?kn(e.stateNode.nextSibling):null;return!0}function pd(){for(var e=_e;e;)e=kn(e.nextSibling)}function Ct(){_e=be=null,H=!1}function pa(e){Ae===null?Ae=[e]:Ae.push(e)}var Lg=sn.ReactCurrentBatchConfig;function Ut(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function Kr(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function eu(e){var n=e._init;return n(e._payload)}function gd(e){function n(g,p){if(e){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function t(g,p){if(!e)return null;for(;p!==null;)n(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=bn(g,p),g.index=0,g.sibling=null,g}function i(g,p,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,p,m,w){return p===null||p.tag!==6?(p=Ai(m,g.mode,w),p.return=g,p):(p=o(p,m),p.return=g,p)}function s(g,p,m,w){var j=m.type;return j===ot?d(g,p,m.props.children,w,m.key):p!==null&&(p.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dn&&eu(j)===p.type)?(w=o(p,m.props),w.ref=Ut(g,p,m),w.return=g,w):(w=fo(m.type,m.key,m.props,null,g.mode,w),w.ref=Ut(g,p,m),w.return=g,w)}function c(g,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Bi(m,g.mode,w),p.return=g,p):(p=o(p,m.children||[]),p.return=g,p)}function d(g,p,m,w,j){return p===null||p.tag!==7?(p=Kn(m,g.mode,w,j),p.return=g,p):(p=o(p,m),p.return=g,p)}function f(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ai(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Lr:return m=fo(p.type,p.key,p.props,null,g.mode,m),m.ref=Ut(g,null,p),m.return=g,m;case rt:return p=Bi(p,g.mode,m),p.return=g,p;case dn:var w=p._init;return f(g,w(p._payload),m)}if(Gt(p)||Mt(p))return p=Kn(p,g.mode,m,null),p.return=g,p;Kr(g,p)}return null}function h(g,p,m,w){var j=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:a(g,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Lr:return m.key===j?s(g,p,m,w):null;case rt:return m.key===j?c(g,p,m,w):null;case dn:return j=m._init,h(g,p,j(m._payload),w)}if(Gt(m)||Mt(m))return j!==null?null:d(g,p,m,w,null);Kr(g,m)}return null}function x(g,p,m,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,a(p,g,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Lr:return g=g.get(w.key===null?m:w.key)||null,s(p,g,w,j);case rt:return g=g.get(w.key===null?m:w.key)||null,c(p,g,w,j);case dn:var C=w._init;return x(g,p,m,C(w._payload),j)}if(Gt(w)||Mt(w))return g=g.get(m)||null,d(p,g,w,j,null);Kr(p,w)}return null}function y(g,p,m,w){for(var j=null,C=null,_=p,E=p=0,D=null;_!==null&&E<m.length;E++){_.index>E?(D=_,_=null):D=_.sibling;var N=h(g,_,m[E],w);if(N===null){_===null&&(_=D);break}e&&_&&N.alternate===null&&n(g,_),p=i(N,p,E),C===null?j=N:C.sibling=N,C=N,_=D}if(E===m.length)return t(g,_),H&&Bn(g,E),j;if(_===null){for(;E<m.length;E++)_=f(g,m[E],w),_!==null&&(p=i(_,p,E),C===null?j=_:C.sibling=_,C=_);return H&&Bn(g,E),j}for(_=r(g,_);E<m.length;E++)D=x(_,g,E,m[E],w),D!==null&&(e&&D.alternate!==null&&_.delete(D.key===null?E:D.key),p=i(D,p,E),C===null?j=D:C.sibling=D,C=D);return e&&_.forEach(function(M){return n(g,M)}),H&&Bn(g,E),j}function S(g,p,m,w){var j=Mt(m);if(typeof j!="function")throw Error(P(150));if(m=j.call(m),m==null)throw Error(P(151));for(var C=j=null,_=p,E=p=0,D=null,N=m.next();_!==null&&!N.done;E++,N=m.next()){_.index>E?(D=_,_=null):D=_.sibling;var M=h(g,_,N.value,w);if(M===null){_===null&&(_=D);break}e&&_&&M.alternate===null&&n(g,_),p=i(M,p,E),C===null?j=M:C.sibling=M,C=M,_=D}if(N.done)return t(g,_),H&&Bn(g,E),j;if(_===null){for(;!N.done;E++,N=m.next())N=f(g,N.value,w),N!==null&&(p=i(N,p,E),C===null?j=N:C.sibling=N,C=N);return H&&Bn(g,E),j}for(_=r(g,_);!N.done;E++,N=m.next())N=x(_,g,E,N.value,w),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?E:N.key),p=i(N,p,E),C===null?j=N:C.sibling=N,C=N);return e&&_.forEach(function(se){return n(g,se)}),H&&Bn(g,E),j}function b(g,p,m,w){if(typeof m=="object"&&m!==null&&m.type===ot&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Lr:e:{for(var j=m.key,C=p;C!==null;){if(C.key===j){if(j=m.type,j===ot){if(C.tag===7){t(g,C.sibling),p=o(C,m.props.children),p.return=g,g=p;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dn&&eu(j)===C.type){t(g,C.sibling),p=o(C,m.props),p.ref=Ut(g,C,m),p.return=g,g=p;break e}t(g,C);break}else n(g,C);C=C.sibling}m.type===ot?(p=Kn(m.props.children,g.mode,w,m.key),p.return=g,g=p):(w=fo(m.type,m.key,m.props,null,g.mode,w),w.ref=Ut(g,p,m),w.return=g,g=w)}return l(g);case rt:e:{for(C=m.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){t(g,p.sibling),p=o(p,m.children||[]),p.return=g,g=p;break e}else{t(g,p);break}else n(g,p);p=p.sibling}p=Bi(m,g.mode,w),p.return=g,g=p}return l(g);case dn:return C=m._init,b(g,p,C(m._payload),w)}if(Gt(m))return y(g,p,m,w);if(Mt(m))return S(g,p,m,w);Kr(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(t(g,p.sibling),p=o(p,m),p.return=g,g=p):(t(g,p),p=Ai(m,g.mode,w),p.return=g,g=p),l(g)):t(g,p)}return b}var Pt=gd(!0),md=gd(!1),bo=On(null),jo=null,ft=null,ga=null;function ma(){ga=ft=jo=null}function ha(e){var n=bo.current;U(bo),e._currentValue=n}function Sl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function xt(e,n){jo=e,ga=ft=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(xe=!0),e.firstContext=null)}function De(e){var n=e._currentValue;if(ga!==e)if(e={context:e,memoizedValue:n,next:null},ft===null){if(jo===null)throw Error(P(308));ft=e,jo.dependencies={lanes:0,firstContext:e}}else ft=ft.next=e;return n}var Wn=null;function ya(e){Wn===null?Wn=[e]:Wn.push(e)}function hd(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,ya(n)):(t.next=o.next,o.next=t),n.interleaved=t,ln(e,r)}function ln(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var fn=!1;function va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Cn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,ln(e,t)}return o=r.interleaved,o===null?(n.next=n,ya(r)):(n.next=o.next,o.next=n),r.interleaved=n,ln(e,t)}function io(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ra(e,t)}}function nu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Eo(e,n,t,r){var o=e.updateQueue;fn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;l=0,d=c=s=null,a=i;do{var h=a.lane,x=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,S=a;switch(h=n,x=t,S.tag){case 1:if(y=S.payload,typeof y=="function"){f=y.call(x,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,h=typeof y=="function"?y.call(x,f,h):y,h==null)break e;f=Q({},f,h);break e;case 2:fn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else x={eventTime:x,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=x,s=f):d=d.next=x,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=d,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Xn|=l,e.lanes=l,e.memoizedState=f}}function tu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Tr={},Ye=On(Tr),yr=On(Tr),vr=On(Tr);function Hn(e){if(e===Tr)throw Error(P(174));return e}function xa(e,n){switch(B(vr,n),B(yr,e),B(Ye,Tr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:el(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=el(n,e)}U(Ye),B(Ye,n)}function _t(){U(Ye),U(yr),U(vr)}function vd(e){Hn(vr.current);var n=Hn(Ye.current),t=el(n,e.type);n!==t&&(B(yr,e),B(Ye,t))}function Sa(e){yr.current===e&&(U(Ye),U(yr))}var V=On(0);function To(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ri=[];function wa(){for(var e=0;e<Ri.length;e++)Ri[e]._workInProgressVersionPrimary=null;Ri.length=0}var lo=sn.ReactCurrentDispatcher,Di=sn.ReactCurrentBatchConfig,Yn=0,G=null,ee=null,te=null,$o=!1,tr=!1,xr=0,zg=0;function ue(){throw Error(P(321))}function ka(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!We(e[t],n[t]))return!1;return!0}function Ca(e,n,t,r,o,i){if(Yn=i,G=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,lo.current=e===null||e.memoizedState===null?Bg:Fg,e=t(r,o),tr){i=0;do{if(tr=!1,xr=0,25<=i)throw Error(P(301));i+=1,te=ee=null,n.updateQueue=null,lo.current=Ug,e=t(r,o)}while(tr)}if(lo.current=No,n=ee!==null&&ee.next!==null,Yn=0,te=ee=G=null,$o=!1,n)throw Error(P(300));return e}function Pa(){var e=xr!==0;return xr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?G.memoizedState=te=e:te=te.next=e,te}function Le(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=te===null?G.memoizedState:te.next;if(n!==null)te=n,ee=e;else{if(e===null)throw Error(P(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},te===null?G.memoizedState=te=e:te=te.next=e}return te}function Sr(e,n){return typeof n=="function"?n(e):n}function Li(e){var n=Le(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=ee,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,c=i;do{var d=c.lane;if((Yn&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,G.lanes|=d,Xn|=d}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=a,We(r,n.memoizedState)||(xe=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,Xn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function zi(e){var n=Le(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);We(i,n.memoizedState)||(xe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function xd(){}function Sd(e,n){var t=G,r=Le(),o=n(),i=!We(r.memoizedState,o);if(i&&(r.memoizedState=o,xe=!0),r=r.queue,_a(Cd.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||te!==null&&te.memoizedState.tag&1){if(t.flags|=2048,wr(9,kd.bind(null,t,r,o,n),void 0,null),re===null)throw Error(P(349));Yn&30||wd(t,n,o)}return o}function wd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function kd(e,n,t,r){n.value=t,n.getSnapshot=r,Pd(n)&&_d(e)}function Cd(e,n,t){return t(function(){Pd(n)&&_d(e)})}function Pd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!We(e,t)}catch{return!0}}function _d(e){var n=ln(e,1);n!==null&&Fe(n,e,1,-1)}function ru(e){var n=Ke();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},n.queue=e,e=e.dispatch=Ag.bind(null,G,e),[n.memoizedState,e]}function wr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function bd(){return Le().memoizedState}function ao(e,n,t,r){var o=Ke();G.flags|=e,o.memoizedState=wr(1|n,t,void 0,r===void 0?null:r)}function Go(e,n,t,r){var o=Le();r=r===void 0?null:r;var i=void 0;if(ee!==null){var l=ee.memoizedState;if(i=l.destroy,r!==null&&ka(r,l.deps)){o.memoizedState=wr(n,t,i,r);return}}G.flags|=e,o.memoizedState=wr(1|n,t,i,r)}function ou(e,n){return ao(8390656,8,e,n)}function _a(e,n){return Go(2048,8,e,n)}function jd(e,n){return Go(4,2,e,n)}function Ed(e,n){return Go(4,4,e,n)}function Td(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $d(e,n,t){return t=t!=null?t.concat([e]):null,Go(4,4,Td.bind(null,n,e),t)}function ba(){}function Nd(e,n){var t=Le();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ka(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Od(e,n){var t=Le();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ka(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Rd(e,n,t){return Yn&21?(We(t,n)||(t=Ic(),G.lanes|=t,Xn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=t)}function Mg(e,n){var t=A;A=t!==0&&4>t?t:4,e(!0);var r=Di.transition;Di.transition={};try{e(!1),n()}finally{A=t,Di.transition=r}}function Dd(){return Le().memoizedState}function Ig(e,n,t){var r=_n(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ld(e))zd(n,t);else if(t=hd(e,n,t,r),t!==null){var o=me();Fe(t,e,r,o),Md(t,n,r)}}function Ag(e,n,t){var r=_n(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ld(e))zd(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,a=i(l,t);if(o.hasEagerState=!0,o.eagerState=a,We(a,l)){var s=n.interleaved;s===null?(o.next=o,ya(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=hd(e,n,o,r),t!==null&&(o=me(),Fe(t,e,r,o),Md(t,n,r))}}function Ld(e){var n=e.alternate;return e===G||n!==null&&n===G}function zd(e,n){tr=$o=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Md(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ra(e,t)}}var No={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Bg={readContext:De,useCallback:function(e,n){return Ke().memoizedState=[e,n===void 0?null:n],e},useContext:De,useEffect:ou,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ao(4194308,4,Td.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ao(4194308,4,e,n)},useInsertionEffect:function(e,n){return ao(4,2,e,n)},useMemo:function(e,n){var t=Ke();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ke();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Ig.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var n=Ke();return e={current:e},n.memoizedState=e},useState:ru,useDebugValue:ba,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=ru(!1),n=e[0];return e=Mg.bind(null,e[1]),Ke().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=G,o=Ke();if(H){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),re===null)throw Error(P(349));Yn&30||wd(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,ou(Cd.bind(null,r,i,e),[e]),r.flags|=2048,wr(9,kd.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ke(),n=re.identifierPrefix;if(H){var t=nn,r=en;t=(r&~(1<<32-Be(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=xr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=zg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Fg={readContext:De,useCallback:Nd,useContext:De,useEffect:_a,useImperativeHandle:$d,useInsertionEffect:jd,useLayoutEffect:Ed,useMemo:Od,useReducer:Li,useRef:bd,useState:function(){return Li(Sr)},useDebugValue:ba,useDeferredValue:function(e){var n=Le();return Rd(n,ee.memoizedState,e)},useTransition:function(){var e=Li(Sr)[0],n=Le().memoizedState;return[e,n]},useMutableSource:xd,useSyncExternalStore:Sd,useId:Dd,unstable_isNewReconciler:!1},Ug={readContext:De,useCallback:Nd,useContext:De,useEffect:_a,useImperativeHandle:$d,useInsertionEffect:jd,useLayoutEffect:Ed,useMemo:Od,useReducer:zi,useRef:bd,useState:function(){return zi(Sr)},useDebugValue:ba,useDeferredValue:function(e){var n=Le();return ee===null?n.memoizedState=e:Rd(n,ee.memoizedState,e)},useTransition:function(){var e=zi(Sr)[0],n=Le().memoizedState;return[e,n]},useMutableSource:xd,useSyncExternalStore:Sd,useId:Dd,unstable_isNewReconciler:!1};function Me(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function wl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Qo={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=me(),o=_n(e),i=tn(r,o);i.payload=n,t!=null&&(i.callback=t),n=Cn(e,i,o),n!==null&&(Fe(n,e,o,r),io(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=me(),o=_n(e),i=tn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Cn(e,i,o),n!==null&&(Fe(n,e,o,r),io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=me(),r=_n(e),o=tn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Cn(e,o,r),n!==null&&(Fe(n,e,r,t),io(n,e,r))}};function iu(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!pr(t,r)||!pr(o,i):!0}function Id(e,n,t){var r=!1,o=Tn,i=n.contextType;return typeof i=="object"&&i!==null?i=De(i):(o=we(n)?Gn:fe.current,r=n.contextTypes,i=(r=r!=null)?kt(e,o):Tn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Qo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function lu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Qo.enqueueReplaceState(n,n.state,null)}function kl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},va(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=De(i):(i=we(n)?Gn:fe.current,o.context=kt(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(wl(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Qo.enqueueReplaceState(o,o.state,null),Eo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function bt(e,n){try{var t="",r=n;do t+=hp(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Mi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Cl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Wg=typeof WeakMap=="function"?WeakMap:Map;function Ad(e,n,t){t=tn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ro||(Ro=!0,Rl=r),Cl(e,n)},t}function Bd(e,n,t){t=tn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Cl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Cl(e,n),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function au(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Wg;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=rm.bind(null,e,n,t),n.then(e,e))}function su(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function uu(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=tn(-1,1),n.tag=2,Cn(t,n,1))),t.lanes|=1),e)}var Hg=sn.ReactCurrentOwner,xe=!1;function ge(e,n,t,r){n.child=e===null?md(n,null,t,r):Pt(n,e.child,t,r)}function cu(e,n,t,r,o){t=t.render;var i=n.ref;return xt(n,o),r=Ca(e,n,t,r,i,o),t=Pa(),e!==null&&!xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,an(e,n,o)):(H&&t&&da(n),n.flags|=1,ge(e,n,r,o),n.child)}function du(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!Da(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Fd(e,n,i,r,o)):(e=fo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:pr,t(l,r)&&e.ref===n.ref)return an(e,n,o)}return n.flags|=1,e=bn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Fd(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(pr(i,r)&&e.ref===n.ref)if(xe=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(xe=!0);else return n.lanes=e.lanes,an(e,n,o)}return Pl(e,n,t,r,o)}function Ud(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(gt,Pe),Pe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(gt,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,B(gt,Pe),Pe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,B(gt,Pe),Pe|=r;return ge(e,n,o,t),n.child}function Wd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Pl(e,n,t,r,o){var i=we(t)?Gn:fe.current;return i=kt(n,i),xt(n,o),t=Ca(e,n,t,r,i,o),r=Pa(),e!==null&&!xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,an(e,n,o)):(H&&r&&da(n),n.flags|=1,ge(e,n,t,o),n.child)}function fu(e,n,t,r,o){if(we(t)){var i=!0;Co(n)}else i=!1;if(xt(n,o),n.stateNode===null)so(e,n),Id(n,t,r),kl(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var s=l.context,c=t.contextType;typeof c=="object"&&c!==null?c=De(c):(c=we(t)?Gn:fe.current,c=kt(n,c));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&lu(n,l,r,c),fn=!1;var h=n.memoizedState;l.state=h,Eo(n,r,l,o),s=n.memoizedState,a!==r||h!==s||Se.current||fn?(typeof d=="function"&&(wl(n,t,d,r),s=n.memoizedState),(a=fn||iu(n,t,a,r,h,s,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,yd(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Me(n.type,a),l.props=c,f=n.pendingProps,h=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=De(s):(s=we(t)?Gn:fe.current,s=kt(n,s));var x=t.getDerivedStateFromProps;(d=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||h!==s)&&lu(n,l,r,s),fn=!1,h=n.memoizedState,l.state=h,Eo(n,r,l,o);var y=n.memoizedState;a!==f||h!==y||Se.current||fn?(typeof x=="function"&&(wl(n,t,x,r),y=n.memoizedState),(c=fn||iu(n,t,c,r,h,y,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),l.props=r,l.state=y,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return _l(e,n,t,r,i,o)}function _l(e,n,t,r,o,i){Wd(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&Js(n,t,!1),an(e,n,i);r=n.stateNode,Hg.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Pt(n,e.child,null,i),n.child=Pt(n,null,a,i)):ge(e,n,a,i),n.memoizedState=r.state,o&&Js(n,t,!0),n.child}function Hd(e){var n=e.stateNode;n.pendingContext?Xs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Xs(e,n.context,!1),xa(e,n.containerInfo)}function pu(e,n,t,r,o){return Ct(),pa(o),n.flags|=256,ge(e,n,t,r),n.child}var bl={dehydrated:null,treeContext:null,retryLane:0};function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vd(e,n,t){var r=n.pendingProps,o=V.current,i=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(V,o&1),e===null)return xl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Jo(l,r,0,null),e=Kn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=jl(t),n.memoizedState=bl,e):ja(n,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Vg(e,n,l,r,a,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=bn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=bn(a,i):(i=Kn(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?jl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=bl,r}return i=e.child,e=i.sibling,r=bn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ja(e,n){return n=Jo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Gr(e,n,t,r){return r!==null&&pa(r),Pt(n,e.child,null,t),e=ja(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Vg(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=Mi(Error(P(422))),Gr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Jo({mode:"visible",children:r.children},o,0,null),i=Kn(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Pt(n,e.child,null,l),n.child.memoizedState=jl(l),n.memoizedState=bl,i);if(!(n.mode&1))return Gr(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(P(419)),r=Mi(i,r,void 0),Gr(e,n,l,r)}if(a=(l&e.childLanes)!==0,xe||a){if(r=re,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ln(e,o),Fe(r,e,o,-1))}return Ra(),r=Mi(Error(P(421))),Gr(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=om.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,_e=kn(o.nextSibling),be=n,H=!0,Ae=null,e!==null&&($e[Ne++]=en,$e[Ne++]=nn,$e[Ne++]=Qn,en=e.id,nn=e.overflow,Qn=n),n=ja(n,r.children),n.flags|=4096,n)}function gu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Sl(e.return,n,t)}function Ii(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Kd(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(ge(e,n,r.children,t),r=V.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gu(e,t,n);else if(e.tag===19)gu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(V,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&To(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Ii(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&To(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Ii(n,!0,t,null,i);break;case"together":Ii(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function so(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function an(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Xn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=bn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=bn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Kg(e,n,t){switch(n.tag){case 3:Hd(n),Ct();break;case 5:vd(n);break;case 1:we(n.type)&&Co(n);break;case 4:xa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;B(bo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(B(V,V.current&1),n.flags|=128,null):t&n.child.childLanes?Vd(e,n,t):(B(V,V.current&1),e=an(e,n,t),e!==null?e.sibling:null);B(V,V.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Kd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(V,V.current),r)break;return null;case 22:case 23:return n.lanes=0,Ud(e,n,t)}return an(e,n,t)}var Gd,El,Qd,Yd;Gd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};El=function(){};Qd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Hn(Ye.current);var i=null;switch(t){case"input":o=Xi(e,o),r=Xi(e,r),i=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":o=qi(e,o),r=qi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wo)}nl(t,r);var l;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(lr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(lr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&F("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Yd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Wt(e,n){if(!H)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Gg(e,n,t){var r=n.pendingProps;switch(fa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(n),null;case 1:return we(n.type)&&ko(),ce(n),null;case 3:return r=n.stateNode,_t(),U(Se),U(fe),wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ae!==null&&(zl(Ae),Ae=null))),El(e,n),ce(n),null;case 5:Sa(n);var o=Hn(vr.current);if(t=n.type,e!==null&&n.stateNode!=null)Qd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return ce(n),null}if(e=Hn(Ye.current),Vr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ge]=n,r[hr]=i,e=(n.mode&1)!==0,t){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(o=0;o<Yt.length;o++)F(Yt[o],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Cs(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":_s(r,i),F("invalid",r)}nl(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),o=["children",""+a]):lr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&F("scroll",r)}switch(t){case"input":zr(r),Ps(r,i,!0);break;case"textarea":zr(r),bs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=wo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ge]=n,e[hr]=r,Gd(e,n,!1,!1),n.stateNode=e;e:{switch(l=tl(t,r),t){case"dialog":F("cancel",e),F("close",e),o=r;break;case"iframe":case"object":case"embed":F("load",e),o=r;break;case"video":case"audio":for(o=0;o<Yt.length;o++)F(Yt[o],e);o=r;break;case"source":F("error",e),o=r;break;case"img":case"image":case"link":F("error",e),F("load",e),o=r;break;case"details":F("toggle",e),o=r;break;case"input":Cs(e,r),o=Xi(e,r),F("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),F("invalid",e);break;case"textarea":_s(e,r),o=qi(e,r),F("invalid",e);break;default:o=r}nl(t,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?bc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Pc(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&ar(e,s):typeof s=="number"&&ar(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&F("scroll",e):s!=null&&Jl(e,i,s,l))}switch(t){case"input":zr(e),Ps(e,r,!1);break;case"textarea":zr(e),bs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?mt(e,!!r.multiple,i,!1):r.defaultValue!=null&&mt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ce(n),null;case 6:if(e&&n.stateNode!=null)Yd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=Hn(vr.current),Hn(Ye.current),Vr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ge]=n,(i=r.nodeValue!==t)&&(e=be,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ge]=n,n.stateNode=r}return ce(n),null;case 13:if(U(V),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&_e!==null&&n.mode&1&&!(n.flags&128))pd(),Ct(),n.flags|=98560,i=!1;else if(i=Vr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[Ge]=n}else Ct(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ce(n),i=!1}else Ae!==null&&(zl(Ae),Ae=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||V.current&1?ne===0&&(ne=3):Ra())),n.updateQueue!==null&&(n.flags|=4),ce(n),null);case 4:return _t(),El(e,n),e===null&&gr(n.stateNode.containerInfo),ce(n),null;case 10:return ha(n.type._context),ce(n),null;case 17:return we(n.type)&&ko(),ce(n),null;case 19:if(U(V),i=n.memoizedState,i===null)return ce(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)Wt(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=To(e),l!==null){for(n.flags|=128,Wt(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B(V,V.current&1|2),n.child}e=e.sibling}i.tail!==null&&X()>jt&&(n.flags|=128,r=!0,Wt(i,!1),n.lanes=4194304)}else{if(!r)if(e=To(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Wt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!H)return ce(n),null}else 2*X()-i.renderingStartTime>jt&&t!==1073741824&&(n.flags|=128,r=!0,Wt(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=X(),n.sibling=null,t=V.current,B(V,r?t&1|2:t&1),n):(ce(n),null);case 22:case 23:return Oa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Pe&1073741824&&(ce(n),n.subtreeFlags&6&&(n.flags|=8192)):ce(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function Qg(e,n){switch(fa(n),n.tag){case 1:return we(n.type)&&ko(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _t(),U(Se),U(fe),wa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Sa(n),null;case 13:if(U(V),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));Ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(V),null;case 4:return _t(),null;case 10:return ha(n.type._context),null;case 22:case 23:return Oa(),null;case 24:return null;default:return null}}var Qr=!1,de=!1,Yg=typeof WeakSet=="function"?WeakSet:Set,$=null;function pt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Y(e,n,r)}else t.current=null}function Tl(e,n,t){try{t()}catch(r){Y(e,n,r)}}var mu=!1;function Xg(e,n){if(fl=vo,e=ed(),ca(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,a=-1,s=-1,c=0,d=0,f=e,h=null;n:for(;;){for(var x;f!==t||o!==0&&f.nodeType!==3||(a=l+o),f!==i||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(x=f.firstChild)!==null;)h=f,f=x;for(;;){if(f===e)break n;if(h===t&&++c===o&&(a=l),h===i&&++d===r&&(s=l),(x=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=x}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(pl={focusedElem:e,selectionRange:t},vo=!1,$=n;$!==null;)if(n=$,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,$=e;else for(;$!==null;){n=$;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,b=y.memoizedState,g=n.stateNode,p=g.getSnapshotBeforeUpdate(n.elementType===n.type?S:Me(n.type,S),b);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){Y(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,$=e;break}$=n.return}return y=mu,mu=!1,y}function rr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Tl(n,t,i)}o=o.next}while(o!==r)}}function Yo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function $l(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Xd(e){var n=e.alternate;n!==null&&(e.alternate=null,Xd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ge],delete n[hr],delete n[hl],delete n[Og],delete n[Rg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jd(e){return e.tag===5||e.tag===3||e.tag===4}function hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=wo));else if(r!==4&&(e=e.child,e!==null))for(Nl(e,n,t),e=e.sibling;e!==null;)Nl(e,n,t),e=e.sibling}function Ol(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ol(e,n,t),e=e.sibling;e!==null;)Ol(e,n,t),e=e.sibling}var oe=null,Ie=!1;function cn(e,n,t){for(t=t.child;t!==null;)Zd(e,n,t),t=t.sibling}function Zd(e,n,t){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Fo,t)}catch{}switch(t.tag){case 5:de||pt(t,n);case 6:var r=oe,o=Ie;oe=null,cn(e,n,t),oe=r,Ie=o,oe!==null&&(Ie?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(Ie?(e=oe,t=t.stateNode,e.nodeType===8?Ni(e.parentNode,t):e.nodeType===1&&Ni(e,t),dr(e)):Ni(oe,t.stateNode));break;case 4:r=oe,o=Ie,oe=t.stateNode.containerInfo,Ie=!0,cn(e,n,t),oe=r,Ie=o;break;case 0:case 11:case 14:case 15:if(!de&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Tl(t,n,l),o=o.next}while(o!==r)}cn(e,n,t);break;case 1:if(!de&&(pt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Y(t,n,a)}cn(e,n,t);break;case 21:cn(e,n,t);break;case 22:t.mode&1?(de=(r=de)||t.memoizedState!==null,cn(e,n,t),de=r):cn(e,n,t);break;default:cn(e,n,t)}}function yu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Yg),n.forEach(function(r){var o=im.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function ze(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,Ie=!1;break e;case 3:oe=a.stateNode.containerInfo,Ie=!0;break e;case 4:oe=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(oe===null)throw Error(P(160));Zd(i,l,o),oe=null,Ie=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){Y(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)qd(n,e),n=n.sibling}function qd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(n,e),Ve(e),r&4){try{rr(3,e,e.return),Yo(3,e)}catch(S){Y(e,e.return,S)}try{rr(5,e,e.return)}catch(S){Y(e,e.return,S)}}break;case 1:ze(n,e),Ve(e),r&512&&t!==null&&pt(t,t.return);break;case 5:if(ze(n,e),Ve(e),r&512&&t!==null&&pt(t,t.return),e.flags&32){var o=e.stateNode;try{ar(o,"")}catch(S){Y(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&wc(o,i),tl(a,l);var c=tl(a,i);for(l=0;l<s.length;l+=2){var d=s[l],f=s[l+1];d==="style"?bc(o,f):d==="dangerouslySetInnerHTML"?Pc(o,f):d==="children"?ar(o,f):Jl(o,d,f,c)}switch(a){case"input":Ji(o,i);break;case"textarea":kc(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?mt(o,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?mt(o,!!i.multiple,i.defaultValue,!0):mt(o,!!i.multiple,i.multiple?[]:"",!1))}o[hr]=i}catch(S){Y(e,e.return,S)}}break;case 6:if(ze(n,e),Ve(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){Y(e,e.return,S)}}break;case 3:if(ze(n,e),Ve(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{dr(n.containerInfo)}catch(S){Y(e,e.return,S)}break;case 4:ze(n,e),Ve(e);break;case 13:ze(n,e),Ve(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||($a=X())),r&4&&yu(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(de=(c=de)||d,ze(n,e),de=c):ze(n,e),Ve(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for($=e,d=e.child;d!==null;){for(f=$=d;$!==null;){switch(h=$,x=h.child,h.tag){case 0:case 11:case 14:case 15:rr(4,h,h.return);break;case 1:pt(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(S){Y(r,t,S)}}break;case 5:pt(h,h.return);break;case 22:if(h.memoizedState!==null){xu(f);continue}}x!==null?(x.return=h,$=x):xu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=_c("display",l))}catch(S){Y(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Y(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ze(n,e),Ve(e),r&4&&yu(e);break;case 21:break;default:ze(n,e),Ve(e)}}function Ve(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Jd(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ar(o,""),r.flags&=-33);var i=hu(e);Ol(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=hu(e);Nl(e,a,l);break;default:throw Error(P(161))}}catch(s){Y(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Jg(e,n,t){$=e,ef(e)}function ef(e,n,t){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Qr;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||de;a=Qr;var c=de;if(Qr=l,(de=s)&&!c)for($=o;$!==null;)l=$,s=l.child,l.tag===22&&l.memoizedState!==null?Su(o):s!==null?(s.return=l,$=s):Su(o);for(;i!==null;)$=i,ef(i),i=i.sibling;$=o,Qr=a,de=c}vu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):vu(e)}}function vu(e){for(;$!==null;){var n=$;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:de||Yo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!de)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Me(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&tu(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}tu(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&dr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}de||n.flags&512&&$l(n)}catch(h){Y(n,n.return,h)}}if(n===e){$=null;break}if(t=n.sibling,t!==null){t.return=n.return,$=t;break}$=n.return}}function xu(e){for(;$!==null;){var n=$;if(n===e){$=null;break}var t=n.sibling;if(t!==null){t.return=n.return,$=t;break}$=n.return}}function Su(e){for(;$!==null;){var n=$;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Yo(4,n)}catch(s){Y(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){Y(n,o,s)}}var i=n.return;try{$l(n)}catch(s){Y(n,i,s)}break;case 5:var l=n.return;try{$l(n)}catch(s){Y(n,l,s)}}}catch(s){Y(n,n.return,s)}if(n===e){$=null;break}var a=n.sibling;if(a!==null){a.return=n.return,$=a;break}$=n.return}}var Zg=Math.ceil,Oo=sn.ReactCurrentDispatcher,Ea=sn.ReactCurrentOwner,Re=sn.ReactCurrentBatchConfig,z=0,re=null,Z=null,ie=0,Pe=0,gt=On(0),ne=0,kr=null,Xn=0,Xo=0,Ta=0,or=null,ve=null,$a=0,jt=1/0,Ze=null,Ro=!1,Rl=null,Pn=null,Yr=!1,hn=null,Do=0,ir=0,Dl=null,uo=-1,co=0;function me(){return z&6?X():uo!==-1?uo:uo=X()}function _n(e){return e.mode&1?z&2&&ie!==0?ie&-ie:Lg.transition!==null?(co===0&&(co=Ic()),co):(e=A,e!==0||(e=window.event,e=e===void 0?16:Vc(e.type)),e):1}function Fe(e,n,t,r){if(50<ir)throw ir=0,Dl=null,Error(P(185));br(e,t,r),(!(z&2)||e!==re)&&(e===re&&(!(z&2)&&(Xo|=t),ne===4&&gn(e,ie)),ke(e,r),t===1&&z===0&&!(n.mode&1)&&(jt=X()+500,Ko&&Rn()))}function ke(e,n){var t=e.callbackNode;Lp(e,n);var r=yo(e,e===re?ie:0);if(r===0)t!==null&&Ts(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ts(t),n===1)e.tag===0?Dg(wu.bind(null,e)):cd(wu.bind(null,e)),$g(function(){!(z&6)&&Rn()}),t=null;else{switch(Ac(r)){case 1:t=ta;break;case 4:t=zc;break;case 16:t=ho;break;case 536870912:t=Mc;break;default:t=ho}t=uf(t,nf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function nf(e,n){if(uo=-1,co=0,z&6)throw Error(P(327));var t=e.callbackNode;if(St()&&e.callbackNode!==t)return null;var r=yo(e,e===re?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Lo(e,r);else{n=r;var o=z;z|=2;var i=rf();(re!==e||ie!==n)&&(Ze=null,jt=X()+500,Vn(e,n));do try{nm();break}catch(a){tf(e,a)}while(!0);ma(),Oo.current=i,z=o,Z!==null?n=0:(re=null,ie=0,n=ne)}if(n!==0){if(n===2&&(o=al(e),o!==0&&(r=o,n=Ll(e,o))),n===1)throw t=kr,Vn(e,0),gn(e,r),ke(e,X()),t;if(n===6)gn(e,r);else{if(o=e.current.alternate,!(r&30)&&!qg(o)&&(n=Lo(e,r),n===2&&(i=al(e),i!==0&&(r=i,n=Ll(e,i))),n===1))throw t=kr,Vn(e,0),gn(e,r),ke(e,X()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:Fn(e,ve,Ze);break;case 3:if(gn(e,r),(r&130023424)===r&&(n=$a+500-X(),10<n)){if(yo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ml(Fn.bind(null,e,ve,Ze),n);break}Fn(e,ve,Ze);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-Be(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zg(r/1960))-r,10<r){e.timeoutHandle=ml(Fn.bind(null,e,ve,Ze),r);break}Fn(e,ve,Ze);break;case 5:Fn(e,ve,Ze);break;default:throw Error(P(329))}}}return ke(e,X()),e.callbackNode===t?nf.bind(null,e):null}function Ll(e,n){var t=or;return e.current.memoizedState.isDehydrated&&(Vn(e,n).flags|=256),e=Lo(e,n),e!==2&&(n=ve,ve=t,n!==null&&zl(n)),e}function zl(e){ve===null?ve=e:ve.push.apply(ve,e)}function qg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!We(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gn(e,n){for(n&=~Ta,n&=~Xo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Be(n),r=1<<t;e[t]=-1,n&=~r}}function wu(e){if(z&6)throw Error(P(327));St();var n=yo(e,0);if(!(n&1))return ke(e,X()),null;var t=Lo(e,n);if(e.tag!==0&&t===2){var r=al(e);r!==0&&(n=r,t=Ll(e,r))}if(t===1)throw t=kr,Vn(e,0),gn(e,n),ke(e,X()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Fn(e,ve,Ze),ke(e,X()),null}function Na(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(jt=X()+500,Ko&&Rn())}}function Jn(e){hn!==null&&hn.tag===0&&!(z&6)&&St();var n=z;z|=1;var t=Re.transition,r=A;try{if(Re.transition=null,A=1,e)return e()}finally{A=r,Re.transition=t,z=n,!(z&6)&&Rn()}}function Oa(){Pe=gt.current,U(gt)}function Vn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Tg(t)),Z!==null)for(t=Z.return;t!==null;){var r=t;switch(fa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:_t(),U(Se),U(fe),wa();break;case 5:Sa(r);break;case 4:_t();break;case 13:U(V);break;case 19:U(V);break;case 10:ha(r.type._context);break;case 22:case 23:Oa()}t=t.return}if(re=e,Z=e=bn(e.current,null),ie=Pe=n,ne=0,kr=null,Ta=Xo=Xn=0,ve=or=null,Wn!==null){for(n=0;n<Wn.length;n++)if(t=Wn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}Wn=null}return e}function tf(e,n){do{var t=Z;try{if(ma(),lo.current=No,$o){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}$o=!1}if(Yn=0,te=ee=G=null,tr=!1,xr=0,Ea.current=null,t===null||t.return===null){ne=1,kr=n,Z=null;break}e:{var i=e,l=t.return,a=t,s=n;if(n=ie,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=su(l);if(x!==null){x.flags&=-257,uu(x,l,a,i,n),x.mode&1&&au(i,c,n),n=x,s=c;var y=n.updateQueue;if(y===null){var S=new Set;S.add(s),n.updateQueue=S}else y.add(s);break e}else{if(!(n&1)){au(i,c,n),Ra();break e}s=Error(P(426))}}else if(H&&a.mode&1){var b=su(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),uu(b,l,a,i,n),pa(bt(s,a));break e}}i=s=bt(s,a),ne!==4&&(ne=2),or===null?or=[i]:or.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=Ad(i,s,n);nu(i,g);break e;case 1:a=s;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Pn===null||!Pn.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=Bd(i,a,n);nu(i,w);break e}}i=i.return}while(i!==null)}lf(t)}catch(j){n=j,Z===t&&t!==null&&(Z=t=t.return);continue}break}while(!0)}function rf(){var e=Oo.current;return Oo.current=No,e===null?No:e}function Ra(){(ne===0||ne===3||ne===2)&&(ne=4),re===null||!(Xn&268435455)&&!(Xo&268435455)||gn(re,ie)}function Lo(e,n){var t=z;z|=2;var r=rf();(re!==e||ie!==n)&&(Ze=null,Vn(e,n));do try{em();break}catch(o){tf(e,o)}while(!0);if(ma(),z=t,Oo.current=r,Z!==null)throw Error(P(261));return re=null,ie=0,ne}function em(){for(;Z!==null;)of(Z)}function nm(){for(;Z!==null&&!bp();)of(Z)}function of(e){var n=sf(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?lf(e):Z=n,Ea.current=null}function lf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Qg(t,n),t!==null){t.flags&=32767,Z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,Z=null;return}}else if(t=Gg(t,n,Pe),t!==null){Z=t;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);ne===0&&(ne=5)}function Fn(e,n,t){var r=A,o=Re.transition;try{Re.transition=null,A=1,tm(e,n,t,r)}finally{Re.transition=o,A=r}return null}function tm(e,n,t,r){do St();while(hn!==null);if(z&6)throw Error(P(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(zp(e,i),e===re&&(Z=re=null,ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Yr||(Yr=!0,uf(ho,function(){return St(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Re.transition,Re.transition=null;var l=A;A=1;var a=z;z|=4,Ea.current=null,Xg(e,t),qd(t,e),kg(pl),vo=!!fl,pl=fl=null,e.current=t,Jg(t),jp(),z=a,A=l,Re.transition=i}else e.current=t;if(Yr&&(Yr=!1,hn=e,Do=o),i=e.pendingLanes,i===0&&(Pn=null),$p(t.stateNode),ke(e,X()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ro)throw Ro=!1,e=Rl,Rl=null,e;return Do&1&&e.tag!==0&&St(),i=e.pendingLanes,i&1?e===Dl?ir++:(ir=0,Dl=e):ir=0,Rn(),null}function St(){if(hn!==null){var e=Ac(Do),n=Re.transition,t=A;try{if(Re.transition=null,A=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,Do=0,z&6)throw Error(P(331));var o=z;for(z|=4,$=e.current;$!==null;){var i=$,l=i.child;if($.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:rr(8,d,i)}var f=d.child;if(f!==null)f.return=d,$=f;else for(;$!==null;){d=$;var h=d.sibling,x=d.return;if(Xd(d),d===c){$=null;break}if(h!==null){h.return=x,$=h;break}$=x}}}var y=i.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var b=S.sibling;S.sibling=null,S=b}while(S!==null)}}$=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,$=l;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:rr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,$=g;break e}$=i.return}}var p=e.current;for($=p;$!==null;){l=$;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,$=m;else e:for(l=p;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yo(9,a)}}catch(j){Y(a,a.return,j)}if(a===l){$=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,$=w;break e}$=a.return}}if(z=o,Rn(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Fo,e)}catch{}r=!0}return r}finally{A=t,Re.transition=n}}return!1}function ku(e,n,t){n=bt(t,n),n=Ad(e,n,1),e=Cn(e,n,1),n=me(),e!==null&&(br(e,1,n),ke(e,n))}function Y(e,n,t){if(e.tag===3)ku(e,e,t);else for(;n!==null;){if(n.tag===3){ku(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=bt(t,e),e=Bd(n,e,1),n=Cn(n,e,1),e=me(),n!==null&&(br(n,1,e),ke(n,e));break}}n=n.return}}function rm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=me(),e.pingedLanes|=e.suspendedLanes&t,re===e&&(ie&t)===t&&(ne===4||ne===3&&(ie&130023424)===ie&&500>X()-$a?Vn(e,0):Ta|=t),ke(e,n)}function af(e,n){n===0&&(e.mode&1?(n=Ar,Ar<<=1,!(Ar&130023424)&&(Ar=4194304)):n=1);var t=me();e=ln(e,n),e!==null&&(br(e,n,t),ke(e,t))}function om(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),af(e,t)}function im(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),af(e,t)}var sf;sf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)xe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return xe=!1,Kg(e,n,t);xe=!!(e.flags&131072)}else xe=!1,H&&n.flags&1048576&&dd(n,_o,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;so(e,n),e=n.pendingProps;var o=kt(n,fe.current);xt(n,t),o=Ca(null,n,r,e,o,t);var i=Pa();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,we(r)?(i=!0,Co(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,va(n),o.updater=Qo,n.stateNode=o,o._reactInternals=n,kl(n,r,e,t),n=_l(null,n,r,!0,i,t)):(n.tag=0,H&&i&&da(n),ge(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(so(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=am(r),e=Me(r,e),o){case 0:n=Pl(null,n,r,e,t);break e;case 1:n=fu(null,n,r,e,t);break e;case 11:n=cu(null,n,r,e,t);break e;case 14:n=du(null,n,r,Me(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Me(r,o),Pl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Me(r,o),fu(e,n,r,o,t);case 3:e:{if(Hd(n),e===null)throw Error(P(387));r=n.pendingProps,i=n.memoizedState,o=i.element,yd(e,n),Eo(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=bt(Error(P(423)),n),n=pu(e,n,r,t,o);break e}else if(r!==o){o=bt(Error(P(424)),n),n=pu(e,n,r,t,o);break e}else for(_e=kn(n.stateNode.containerInfo.firstChild),be=n,H=!0,Ae=null,t=md(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ct(),r===o){n=an(e,n,t);break e}ge(e,n,r,t)}n=n.child}return n;case 5:return vd(n),e===null&&xl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,gl(r,o)?l=null:i!==null&&gl(r,i)&&(n.flags|=32),Wd(e,n),ge(e,n,l,t),n.child;case 6:return e===null&&xl(n),null;case 13:return Vd(e,n,t);case 4:return xa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Pt(n,null,r,t):ge(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Me(r,o),cu(e,n,r,o,t);case 7:return ge(e,n,n.pendingProps,t),n.child;case 8:return ge(e,n,n.pendingProps.children,t),n.child;case 12:return ge(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,B(bo,r._currentValue),r._currentValue=l,i!==null)if(We(i.value,l)){if(i.children===o.children&&!Se.current){n=an(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=tn(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Sl(i.return,t,n),a.lanes|=t;break}s=s.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Sl(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ge(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,xt(n,t),o=De(o),r=r(o),n.flags|=1,ge(e,n,r,t),n.child;case 14:return r=n.type,o=Me(r,n.pendingProps),o=Me(r.type,o),du(e,n,r,o,t);case 15:return Fd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Me(r,o),so(e,n),n.tag=1,we(r)?(e=!0,Co(n)):e=!1,xt(n,t),Id(n,r,o),kl(n,r,o,t),_l(null,n,r,!0,e,t);case 19:return Kd(e,n,t);case 22:return Ud(e,n,t)}throw Error(P(156,n.tag))};function uf(e,n){return Lc(e,n)}function lm(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,n,t,r){return new lm(e,n,t,r)}function Da(e){return e=e.prototype,!(!e||!e.isReactComponent)}function am(e){if(typeof e=="function")return Da(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ql)return 11;if(e===ea)return 14}return 2}function bn(e,n){var t=e.alternate;return t===null?(t=Oe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function fo(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")Da(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ot:return Kn(t.children,o,i,n);case Zl:l=8,o|=8;break;case Ki:return e=Oe(12,t,n,o|2),e.elementType=Ki,e.lanes=i,e;case Gi:return e=Oe(13,t,n,o),e.elementType=Gi,e.lanes=i,e;case Qi:return e=Oe(19,t,n,o),e.elementType=Qi,e.lanes=i,e;case vc:return Jo(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hc:l=10;break e;case yc:l=9;break e;case ql:l=11;break e;case ea:l=14;break e;case dn:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=Oe(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Kn(e,n,t,r){return e=Oe(7,e,r,n),e.lanes=t,e}function Jo(e,n,t,r){return e=Oe(22,e,r,n),e.elementType=vc,e.lanes=t,e.stateNode={isHidden:!1},e}function Ai(e,n,t){return e=Oe(6,e,null,n),e.lanes=t,e}function Bi(e,n,t){return n=Oe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function sm(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Si(0),this.expirationTimes=Si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function La(e,n,t,r,o,i,l,a,s){return e=new sm(e,n,t,a,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Oe(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},va(i),e}function um(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function cf(e){if(!e)return Tn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(we(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(we(t))return ud(e,t,n)}return n}function df(e,n,t,r,o,i,l,a,s){return e=La(t,r,!0,e,o,i,l,a,s),e.context=cf(null),t=e.current,r=me(),o=_n(t),i=tn(r,o),i.callback=n??null,Cn(t,i,o),e.current.lanes=o,br(e,o,r),ke(e,r),e}function Zo(e,n,t,r){var o=n.current,i=me(),l=_n(o);return t=cf(t),n.context===null?n.context=t:n.pendingContext=t,n=tn(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Cn(o,n,l),e!==null&&(Fe(e,o,l,i),io(e,o,l)),l}function zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function za(e,n){Cu(e,n),(e=e.alternate)&&Cu(e,n)}function cm(){return null}var ff=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ma(e){this._internalRoot=e}qo.prototype.render=Ma.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));Zo(e,n,null,null)};qo.prototype.unmount=Ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jn(function(){Zo(null,e,null,null)}),n[on]=null}};function qo(e){this._internalRoot=e}qo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Uc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<pn.length&&n!==0&&n<pn[t].priority;t++);pn.splice(t,0,e),t===0&&Hc(e)}};function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pu(){}function dm(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=zo(l);i.call(c)}}var l=df(n,r,e,0,null,!1,!1,"",Pu);return e._reactRootContainer=l,e[on]=l.current,gr(e.nodeType===8?e.parentNode:e),Jn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=zo(s);a.call(c)}}var s=La(e,0,!1,null,null,!1,!1,"",Pu);return e._reactRootContainer=s,e[on]=s.current,gr(e.nodeType===8?e.parentNode:e),Jn(function(){Zo(n,s,t,r)}),s}function ni(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=zo(l);a.call(s)}}Zo(n,l,e,o)}else l=dm(t,n,e,o,r);return zo(l)}Bc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Qt(n.pendingLanes);t!==0&&(ra(n,t|1),ke(n,X()),!(z&6)&&(jt=X()+500,Rn()))}break;case 13:Jn(function(){var r=ln(e,1);if(r!==null){var o=me();Fe(r,e,1,o)}}),za(e,1)}};oa=function(e){if(e.tag===13){var n=ln(e,134217728);if(n!==null){var t=me();Fe(n,e,134217728,t)}za(e,134217728)}};Fc=function(e){if(e.tag===13){var n=_n(e),t=ln(e,n);if(t!==null){var r=me();Fe(t,e,n,r)}za(e,n)}};Uc=function(){return A};Wc=function(e,n){var t=A;try{return A=e,n()}finally{A=t}};ol=function(e,n,t){switch(n){case"input":if(Ji(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Vo(r);if(!o)throw Error(P(90));Sc(r),Ji(r,o)}}}break;case"textarea":kc(e,t);break;case"select":n=t.value,n!=null&&mt(e,!!t.multiple,n,!1)}};Tc=Na;$c=Jn;var fm={usingClientEntryPoint:!1,Events:[Er,st,Vo,jc,Ec,Na]},Ht={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pm={bundleType:Ht.bundleType,version:Ht.version,rendererPackageName:Ht.rendererPackageName,rendererConfig:Ht.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ht.findFiberByHostInstance||cm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{Fo=Xr.inject(pm),Qe=Xr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fm;Ee.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ia(n))throw Error(P(200));return um(e,n,null,t)};Ee.createRoot=function(e,n){if(!Ia(e))throw Error(P(299));var t=!1,r="",o=ff;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=La(e,1,!1,null,null,t,!1,r,o),e[on]=n.current,gr(e.nodeType===8?e.parentNode:e),new Ma(n)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Rc(n),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Jn(e)};Ee.hydrate=function(e,n,t){if(!ei(n))throw Error(P(200));return ni(null,e,n,!0,t)};Ee.hydrateRoot=function(e,n,t){if(!Ia(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=ff;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=df(n,null,e,1,t??null,o,!1,i,l),e[on]=n.current,gr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new qo(n)};Ee.render=function(e,n,t){if(!ei(n))throw Error(P(200));return ni(null,e,n,!1,t)};Ee.unmountComponentAtNode=function(e){if(!ei(e))throw Error(P(40));return e._reactRootContainer?(Jn(function(){ni(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1};Ee.unstable_batchedUpdates=Na;Ee.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ei(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ni(e,n,t,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function pf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pf)}catch(e){console.error(e)}}pf(),fc.exports=Ee;var gm=fc.exports,mm,_u=gm;mm=Hi.createRoot=_u.createRoot,Hi.hydrateRoot=_u.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cr(){return Cr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Cr.apply(null,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const bu="popstate";function hm(e){e===void 0&&(e={});function n(o,i){let{pathname:l="/",search:a="",hash:s=""}=et(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Ml("",{pathname:l,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){let l=o.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=o.location.href,c=s.indexOf("#");a=c===-1?s:s.slice(0,c)}return a+"#"+(typeof i=="string"?i:Mo(i))}function r(o,i){Aa(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return vm(n,t,r,e)}function J(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Aa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function ym(){return Math.random().toString(36).substr(2,8)}function ju(e,n){return{usr:e.state,key:e.key,idx:n}}function Ml(e,n,t,r){return t===void 0&&(t=null),Cr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?et(n):n,{state:t,key:n&&n.key||r||ym()})}function Mo(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function et(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function vm(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=yn.Pop,s=null,c=d();c==null&&(c=0,l.replaceState(Cr({},l.state,{idx:c}),""));function d(){return(l.state||{idx:null}).idx}function f(){a=yn.Pop;let b=d(),g=b==null?null:b-c;c=b,s&&s({action:a,location:S.location,delta:g})}function h(b,g){a=yn.Push;let p=Ml(S.location,b,g);t&&t(p,b),c=d()+1;let m=ju(p,c),w=S.createHref(p);try{l.pushState(m,"",w)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(w)}i&&s&&s({action:a,location:S.location,delta:1})}function x(b,g){a=yn.Replace;let p=Ml(S.location,b,g);t&&t(p,b),c=d();let m=ju(p,c),w=S.createHref(p);l.replaceState(m,"",w),i&&s&&s({action:a,location:S.location,delta:0})}function y(b){let g=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof b=="string"?b:Mo(b);return p=p.replace(/ $/,"%20"),J(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let S={get action(){return a},get location(){return e(o,l)},listen(b){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(bu,f),s=b,()=>{o.removeEventListener(bu,f),s=null}},createHref(b){return n(o,b)},createURL:y,encodeLocation(b){let g=y(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:x,go(b){return l.go(b)}};return S}var Eu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Eu||(Eu={}));function xm(e,n,t){return t===void 0&&(t="/"),Sm(e,n,t)}function Sm(e,n,t,r){let o=typeof n=="string"?et(n):n,i=Ba(o.pathname||"/",t);if(i==null)return null;let l=gf(e);wm(l);let a=null,s=Rm(i);for(let c=0;a==null&&c<l.length;++c)a=$m(l[c],s);return a}function gf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(J(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=jn([r,s.relativePath]),d=t.concat(s);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),gf(i.children,n,d,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:Em(c,i.index),routesMeta:d})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of mf(i.path))o(i,l,s)}),n}function mf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=mf(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function wm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Tm(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const km=/^:[\w-]+$/,Cm=3,Pm=2,_m=1,bm=10,jm=-2,Tu=e=>e==="*";function Em(e,n){let t=e.split("/"),r=t.length;return t.some(Tu)&&(r+=jm),n&&(r+=Pm),t.filter(o=>!Tu(o)).reduce((o,i)=>o+(km.test(i)?Cm:i===""?_m:bm),r)}function Tm(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function $m(e,n,t){let{routesMeta:r}=e,o={},i="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,d=i==="/"?n:n.slice(i.length)||"/",f=Nm({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d),h=s.route;if(!f)return null;Object.assign(o,f.params),l.push({params:o,pathname:jn([i,f.pathname]),pathnameBase:zm(jn([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=jn([i,f.pathnameBase]))}return l}function Nm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Om(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:h,isOptional:x}=d;if(h==="*"){let S=a[f]||"";l=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const y=a[f];return x&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function Om(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Aa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function Rm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Aa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ba(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Dm(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?et(e):e,i;return t?(t=hf(t),t.startsWith("/")?i=$u(t.substring(1),"/"):i=$u(t,n)):i=n,{pathname:i,search:Mm(r),hash:Im(o)}}function $u(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Fi(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Fa(e,n){let t=Lm(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Ua(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=et(e):(o=Cr({},e),J(!o.pathname||!o.pathname.includes("?"),Fi("?","pathname","search",o)),J(!o.pathname||!o.pathname.includes("#"),Fi("#","pathname","hash",o)),J(!o.search||!o.search.includes("#"),Fi("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=t;else{let f=n.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}a=f>=0?n[f]:"/"}let s=Dm(o,a),c=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const hf=e=>e.replace(/\/\/+/g,"/"),jn=e=>hf(e.join("/")),zm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Mm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Im=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Am(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const yf=["post","put","patch","delete"];new Set(yf);const Bm=["get",...yf];new Set(Bm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pr(){return Pr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Pr.apply(null,arguments)}const Wa=v.createContext(null),Fm=v.createContext(null),Dn=v.createContext(null),ti=v.createContext(null),un=v.createContext({outlet:null,matches:[],isDataRoute:!1}),vf=v.createContext(null);function Um(e,n){let{relative:t}=n===void 0?{}:n;Nt()||J(!1);let{basename:r,navigator:o}=v.useContext(Dn),{hash:i,pathname:l,search:a}=wf(e,{relative:t}),s=l;return r!=="/"&&(s=l==="/"?r:jn([r,l])),o.createHref({pathname:s,search:a,hash:i})}function Nt(){return v.useContext(ti)!=null}function Ot(){return Nt()||J(!1),v.useContext(ti).location}function xf(e){v.useContext(Dn).static||v.useLayoutEffect(e)}function Sf(){let{isDataRoute:e}=v.useContext(un);return e?th():Wm()}function Wm(){Nt()||J(!1);let e=v.useContext(Wa),{basename:n,future:t,navigator:r}=v.useContext(Dn),{matches:o}=v.useContext(un),{pathname:i}=Ot(),l=JSON.stringify(Fa(o,t.v7_relativeSplatPath)),a=v.useRef(!1);return xf(()=>{a.current=!0}),v.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Ua(c,JSON.parse(l),i,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:jn([n,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[n,r,l,i,e])}function Hm(){let{matches:e}=v.useContext(un),n=e[e.length-1];return n?n.params:{}}function wf(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=v.useContext(Dn),{matches:o}=v.useContext(un),{pathname:i}=Ot(),l=JSON.stringify(Fa(o,r.v7_relativeSplatPath));return v.useMemo(()=>Ua(e,JSON.parse(l),i,t==="path"),[e,l,i,t])}function Vm(e,n){return Km(e,n)}function Km(e,n,t,r){Nt()||J(!1);let{navigator:o}=v.useContext(Dn),{matches:i}=v.useContext(un),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let c=Ot(),d;if(n){var f;let b=typeof n=="string"?et(n):n;s==="/"||(f=b.pathname)!=null&&f.startsWith(s)||J(!1),d=b}else d=c;let h=d.pathname||"/",x=h;if(s!=="/"){let b=s.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(b.length).join("/")}let y=xm(e,{pathname:x}),S=Jm(y&&y.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:jn([s,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?s:jn([s,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,t,r);return n&&S?v.createElement(ti.Provider,{value:{location:Pr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:yn.Pop}},S):S}function Gm(){let e=nh(),n=Am(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},n),t?v.createElement("pre",{style:o},t):null,null)}const Qm=v.createElement(Gm,null);class Ym extends v.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?v.createElement(un.Provider,{value:this.props.routeContext},v.createElement(vf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xm(e){let{routeContext:n,match:t,children:r}=e,o=v.useContext(Wa);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(un.Provider,{value:n},r)}function Jm(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,a=(o=t)==null?void 0:o.errors;if(a!=null){let d=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||J(!1),l=l.slice(0,Math.min(l.length,d+1))}let s=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let f=l[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:x}=t,y=f.route.loader&&h[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||y){s=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((d,f,h)=>{let x,y=!1,S=null,b=null;t&&(x=a&&f.route.id?a[f.route.id]:void 0,S=f.route.errorElement||Qm,s&&(c<0&&h===0?(rh("route-fallback"),y=!0,b=null):c===h&&(y=!0,b=f.route.hydrateFallbackElement||null)));let g=n.concat(l.slice(0,h+1)),p=()=>{let m;return x?m=S:y?m=b:f.route.Component?m=v.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=d,v.createElement(Xm,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:m})};return t&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?v.createElement(Ym,{location:t.location,revalidation:t.revalidation,component:S,error:x,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var kf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(kf||{}),Cf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Cf||{});function Zm(e){let n=v.useContext(Wa);return n||J(!1),n}function qm(e){let n=v.useContext(Fm);return n||J(!1),n}function eh(e){let n=v.useContext(un);return n||J(!1),n}function Pf(e){let n=eh(),t=n.matches[n.matches.length-1];return t.route.id||J(!1),t.route.id}function nh(){var e;let n=v.useContext(vf),t=qm(),r=Pf();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function th(){let{router:e}=Zm(kf.UseNavigateStable),n=Pf(Cf.UseNavigateStable),t=v.useRef(!1);return xf(()=>{t.current=!0}),v.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Pr({fromRouteId:n},i)))},[e,n])}const Nu={};function rh(e,n,t){Nu[e]||(Nu[e]=!0)}function oh(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Il(e){let{to:n,replace:t,state:r,relative:o}=e;Nt()||J(!1);let{future:i,static:l}=v.useContext(Dn),{matches:a}=v.useContext(un),{pathname:s}=Ot(),c=Sf(),d=Ua(n,Fa(a,i.v7_relativeSplatPath),s,o==="path"),f=JSON.stringify(d);return v.useEffect(()=>c(JSON.parse(f),{replace:t,state:r,relative:o}),[c,f,o,t,r]),null}function Xt(e){J(!1)}function ih(e){let{basename:n="/",children:t=null,location:r,navigationType:o=yn.Pop,navigator:i,static:l=!1,future:a}=e;Nt()&&J(!1);let s=n.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:s,navigator:i,static:l,future:Pr({v7_relativeSplatPath:!1},a)}),[s,a,i,l]);typeof r=="string"&&(r=et(r));let{pathname:d="/",search:f="",hash:h="",state:x=null,key:y="default"}=r,S=v.useMemo(()=>{let b=Ba(d,s);return b==null?null:{location:{pathname:b,search:f,hash:h,state:x,key:y},navigationType:o}},[s,d,f,h,x,y,o]);return S==null?null:v.createElement(Dn.Provider,{value:c},v.createElement(ti.Provider,{children:t,value:S}))}function lh(e){let{children:n,location:t}=e;return Vm(Al(n),t)}new Promise(()=>{});function Al(e,n){n===void 0&&(n=[]);let t=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let i=[...n,o];if(r.type===v.Fragment){t.push.apply(t,Al(r.props.children,i));return}r.type!==Xt&&J(!1),!r.props.index||!r.props.children||J(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Al(r.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Bl.apply(null,arguments)}function ah(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function sh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function uh(e,n){return e.button===0&&(!n||n==="_self")&&!sh(e)}const ch=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dh="6";try{window.__reactRouterVersion=dh}catch{}const fh="startTransition",Ou=rp[fh];function ph(e){let{basename:n,children:t,future:r,window:o}=e,i=v.useRef();i.current==null&&(i.current=hm({window:o,v5Compat:!0}));let l=i.current,[a,s]=v.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},d=v.useCallback(f=>{c&&Ou?Ou(()=>s(f)):s(f)},[s,c]);return v.useLayoutEffect(()=>l.listen(d),[l,d]),v.useEffect(()=>oh(r),[r]),v.createElement(ih,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:l,future:r})}const gh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fl=v.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:c,preventScrollReset:d,viewTransition:f}=n,h=ah(n,ch),{basename:x}=v.useContext(Dn),y,S=!1;if(typeof c=="string"&&mh.test(c)&&(y=c,gh))try{let m=new URL(window.location.href),w=c.startsWith("//")?new URL(m.protocol+c):new URL(c),j=Ba(w.pathname,x);w.origin===m.origin&&j!=null?c=j+w.search+w.hash:S=!0}catch{}let b=Um(c,{relative:o}),g=hh(c,{replace:l,state:a,target:s,preventScrollReset:d,relative:o,viewTransition:f});function p(m){r&&r(m),m.defaultPrevented||g(m)}return v.createElement("a",Bl({},h,{href:y||b,onClick:S||i?r:p,ref:t,target:s}))});var Ru;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ru||(Ru={}));var Du;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Du||(Du={}));function hh(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:a}=n===void 0?{}:n,s=Sf(),c=Ot(),d=wf(e,{relative:l});return v.useCallback(f=>{if(uh(f,t)){f.preventDefault();let h=r!==void 0?r:Mo(c)===Mo(d);s(e,{replace:h,state:o,preventScrollReset:i,relative:l,viewTransition:a})}},[c,s,d,r,o,t,e,i,l,a])}const yh="https://github.com/frankvane/vane-components";class vh extends $n.Component{constructor(){super(...arguments);hs(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?u.jsxs("div",{className:"crash",role:"alert",children:[u.jsx("h3",{children:"这个页面炸了"}),u.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),u.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function _f(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function xh({demos:e,pathname:n}){var s;const{groups:t,entries:r,label:o}=e,i=(s=r.find(c=>n===`/demo/${c.meta.slug}`))==null?void 0:s.meta.group,[l,a]=v.useState(()=>{var d;const c=(d=t[0])==null?void 0:d.key;return Object.fromEntries(t.map(f=>[f.key,f.key===(i??c)]))});return v.useEffect(()=>{i&&a(c=>c[i]?c:{...c,[i]:!0})},[i]),u.jsxs("div",{className:"nav-section",children:[u.jsxs("div",{className:"nav-section-head",children:[u.jsx("span",{children:o}),u.jsxs("code",{children:[r.length," demos"]})]}),t.map(c=>{const d=r.filter(h=>h.meta.group===c.key);if(d.length===0)return null;const f=l[c.key]??!1;return u.jsxs("div",{className:"nav-group",children:[u.jsxs("button",{type:"button",className:`nav-group-head${i===c.key?" is-current":""}`,onClick:()=>a(h=>({...h,[c.key]:!f})),"aria-expanded":f,children:[u.jsx("span",{className:`nav-caret${f?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,u.jsx("code",{children:d.length})]}),f?u.jsx("div",{className:"nav-list",children:d.map(h=>u.jsxs(Fl,{to:`/demo/${h.meta.slug}`,className:`nav-sub${n===`/demo/${h.meta.slug}`?" is-active":""}`,children:[u.jsx("em",{"aria-hidden":!0,children:_f(e,h)}),h.meta.title]},h.meta.slug))}):null]},c.key)})]})}function Sh({demos:e}){var a;const{slug:n}=Hm(),{entries:t,detail:r}=e,o=n?t.find(s=>s.meta.slug===n):void 0,i=(a=t[0])==null?void 0:a.meta.slug;if(!o)return u.jsx(Il,{to:i?`/demo/${i}`:"/",replace:!0});const l=t.indexOf(o)+1;return u.jsx($n.Fragment,{children:r(o,l)},o.meta.slug)}function wh({config:e}){var f,h;const{pathname:n}=Ot(),[t,r]=v.useState(!1),[o,i]=v.useState(!1);v.useEffect(()=>r(!1),[n]);const l=v.useCallback(()=>i(x=>!x),[]);v.useEffect(()=>{const x=y=>{const S=y.target,b=S&&(S.tagName==="INPUT"||S.tagName==="TEXTAREA"||S.isContentEditable);y.key==="Escape"&&r(!1),!b&&(y.key==="g"||y.key==="G")&&!y.metaKey&&!y.ctrlKey&&i(g=>!g)};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[]);const a=e.demos,s=(f=a.entries[0])==null?void 0:f.meta.slug,c=v.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const x=n.replace(/^\/demo\/?/,""),y=a.entries.find(S=>S.meta.slug===x);return y?`demo ${_f(a,y)} · ${y.meta.title}`:"demo · 逐项示例"},[n,e,a]),d=v.useMemo(()=>e.nav.map((x,y)=>({...x,no:String(y+1).padStart(2,"0")})),[e.nav]);return u.jsxs("div",{className:`shell${t?" is-nav-open":""}${o?" is-guides":""}`,children:[u.jsx("a",{className:"skip-link",href:"#main",onClick:x=>{x.preventDefault();const y=document.getElementById("main");y==null||y.setAttribute("tabindex","-1"),y==null||y.focus(),y==null||y.scrollIntoView({block:"start"})},children:"跳到内容"}),u.jsxs("aside",{className:"side","aria-label":"站点导航",children:[u.jsxs(Fl,{to:"/",className:"brand",children:[u.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),u.jsxs("span",{children:[u.jsx("strong",{children:e.pkg}),u.jsx("em",{children:e.subtitle})]})]}),u.jsxs("nav",{children:[d.map(x=>u.jsxs(Fl,{to:x.to,className:`nav-item${n===x.to?" is-active":""}`,"aria-current":n===x.to?"page":void 0,children:[u.jsx("em",{"aria-hidden":!0,children:x.no}),u.jsx("span",{children:x.label}),x.hint?u.jsx("code",{children:x.hint}):null]},x.to)),u.jsx(xh,{demos:e.demos,pathname:n})]}),u.jsxs("div",{className:"side-foot",children:[u.jsx("p",{children:e.footer[0]}),u.jsx("p",{className:"muted",children:e.footer[1]})]})]}),u.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),u.jsxs("div",{className:"main",id:"main",children:[u.jsxs("header",{className:"topbar",children:[u.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(x=>!x),children:u.jsx("span",{"aria-hidden":!0})}),u.jsx("span",{className:"crumb",children:c}),u.jsxs("div",{className:"topbar-right",children:[(h=e.stats)==null?void 0:h.map(x=>u.jsxs("span",{className:"topbar-stat",title:x.title,children:[u.jsx("b",{children:x.value})," ",x.label]},x.label)),u.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[u.jsx("i",{"aria-hidden":!0}),"guides"]}),u.jsx("a",{className:"topbar-link",href:e.sourceUrl??yh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),u.jsx("div",{className:"guides","aria-hidden":!0}),u.jsx(v.Suspense,{fallback:u.jsx("div",{className:"loading",children:"loading modules…"}),children:u.jsx(vh,{children:u.jsxs(lh,{children:[e.routes.map(x=>u.jsx(Xt,{path:x.path,element:x.element},x.path)),u.jsx(Xt,{path:"/demo",element:u.jsx(Il,{to:s?`/demo/${s}`:"/",replace:!0})}),u.jsx(Xt,{path:"/demo/:slug",element:u.jsx(Sh,{demos:e.demos})}),u.jsx(Xt,{path:"*",element:u.jsx(Il,{to:"/",replace:!0})})]})})})]})]})}function kh({config:e}){return u.jsx(ph,{children:u.jsx(wh,{config:e})})}const Ch="modulepreload",Ph=function(e,n){return new URL(e,n).href},Lu={},ri=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(c=>{if(c=Ph(c,r),c in Lu)return;Lu[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let y=l.length-1;y>=0;y--){const S=l[y];if(S.href===c&&(!d||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const x=document.createElement("link");if(x.rel=d?"stylesheet":Ch,d||(x.as="script"),x.crossOrigin="",x.href=c,s&&x.setAttribute("nonce",s),document.head.appendChild(x),d)return new Promise((y,S)=>{x.addEventListener("load",y),x.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return n().catch(i)})},Ue=Object.freeze([{key:"applied",label:"已投递",tone:"neutral"},{key:"screening",label:"筛选中",tone:"info"},{key:"interview",label:"面试中",tone:"warn"},{key:"offer",label:"Offer",tone:"good"},{key:"hired",label:"已入职",tone:"good"},{key:"rejected",label:"已婉拒",tone:"bad"}]),_h=["renderToolbar","renderFooter","renderCardBadges","renderCardActions","renderColumnHeader"];function bh(){const e=new Map,n=new Map,t=(l,a)=>{const s=e.get(l);if(s)for(const c of[...s])try{c(a)}catch(d){console.warn(`[PluginBus] handler error for event "${l}"`,d)}},r=(l,a)=>{let s=e.get(l);return s||(s=new Set,e.set(l,s)),s.add(a),()=>{s==null||s.delete(a)}},o=(l,a)=>{const s=c=>{a(c),i(l,s)};return r(l,s)},i=(l,a)=>{var s;if(!a){e.delete(l);return}(s=e.get(l))==null||s.delete(a)};return{emit:t,on:r,once:o,off:i,getData:l=>n.get(l),setData:(l,a)=>{const s=n.get(l);n.set(l,a),s!==a&&t(l,a)},deleteData:l=>{const a=n.has(l);n.delete(l),a&&t(l,void 0)},hasData:l=>n.has(l),getAll:()=>{const l={};return n.forEach((a,s)=>{l[s]=a}),l},clear:()=>{e.clear(),n.clear()}}}function bf(e){const n=new Map(e.map(a=>[a.name,a])),t=[];for(const a of e)for(const s of a.dependencies??[])n.has(s)||t.push(`${a.name} -> ${s}`);const r=[],o=new Set,i=[...e],l=a=>(a.dependencies??[]).every(s=>o.has(s)||!n.has(s));for(;i.length>0;){const a=i.filter(l);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(c=>c.name).join(" <-> ")}`);let s=a[0];for(const c of a)(c.priority??0)>(s.priority??0)&&(s=c);r.push(s),o.add(s.name),i.splice(i.indexOf(s),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}async function jh(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:o="unknown"}=n;if(!t||t<=0)return await e();let i;const l=new Promise((a,s)=>{i=setTimeout(()=>{s(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const Eh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function Th(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,o=[],i=[],l=new Map,a=()=>bf([...l.values()].filter(c=>c.enabled!==!1)),s=c=>{l.set(c.name,{...c,enabled:c.enabled??!0}),c.init&&Promise.resolve(c.init()).catch(d=>{n.warn(`[PluginManager] init failed for ${c.name}`,d)})};return{register:s,registerAll:c=>{for(const d of c)s(d)},unregister:c=>{const d=l.get(c);d&&(d.destroy&&Promise.resolve(d.destroy()).catch(f=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,f)}),l.delete(c))},getPlugin:c=>l.get(c),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(c=>c.enabled!==!1),getExecutionOrder:a,enable:c=>{const d=l.get(c);d&&(d.enabled=!0)},disable:c=>{const d=l.get(c);d&&(d.enabled=!1)},has:c=>l.has(c),executeHook:async(c,d,...f)=>{var h,x;for(const y of a()){const S=(h=y.hooks)==null?void 0:h[c];if(typeof S!="function")continue;const b=y.sandbox??t,g=y.timeout??r;let p;try{p=b?await jh(()=>S(d,...f),{timeout:g,name:y.name,hook:String(c)}):await S(d,...f)}catch(m){if(o.push({plugin:y.name,hook:String(c),error:m}),n.warn(`[PluginManager] hook ${String(c)} failed in ${y.name}`,m),(x=e.onError)==null||x.call(e,y.name,String(c),m),c==="onError")break;continue}if(Eh.has(String(c))&&typeof p=="function"){i.push(p);continue}if(p===!1)return!1;if(p!==void 0&&p!==!0)return p}},clear:()=>{const c=i.splice(0);for(const d of c.reverse())try{d()}catch(f){n.warn("[PluginManager] cleanup failed",f)}for(const d of l.values())d.destroy&&Promise.resolve(d.destroy()).catch(f=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,f)});l.clear()},getErrors:()=>[...o]}}var $h=Object.defineProperty,Nh=(e,n,t)=>n in e?$h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Oh=(e,n,t)=>Nh(e,n+"",t);class oi extends $n.Component{constructor(){super(...arguments),Oh(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(o=(r=this.props).onError)==null||o.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let Jr=null;function Rh(e=!1){if(Jr&&!e)return Jr;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(o),l=/Mobile|Android|iPhone/i.test(o),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Jr={type:i?"tablet":l?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:a,isRetina:r>=2},Jr}function zu(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),r=Object.keys(n);return t.length!==r.length?!1:t.every(o=>Object.is(e[o],n[o]))}function Dh(e){const{plugins:n,props:t,data:r,initialState:o,containerRef:i,enableDebug:l=!1,managerOptions:a,extendContext:s}=e,c=v.useRef(null),d=i??c,f=v.useRef(null);f.current||(f.current=Th(a));const h=f.current,x=v.useRef(null);x.current||(x.current=bh());const y=x.current,S=v.useRef(new Map),[b,g]=v.useState(o??{}),[,p]=v.useState(0),m=v.useCallback(()=>p(O=>O+1),[]),w=v.useMemo(()=>Rh(),[]),j=v.useRef(n),C=j.current;(C.length!==n.length||n.some((O,R)=>O!==C[R]))&&(j.current=n);const _=j.current,E=_.map(O=>O.name).join("|");v.useLayoutEffect(()=>{h.clear(),h.registerAll(_),l&&console.debug("[vane/plugin-core] plugins registered:",E)},[_]),v.useLayoutEffect(()=>()=>{h.executeHook("onUnmount",N.current),h.clear()},[h]);const D=v.useMemo(()=>bf(_),[_]),N=v.useRef(null),M=v.useRef(t);zu(M.current,t)||(M.current=t);const se=M.current,q=v.useRef(r);zu(q.current,r)||(q.current=r);const pe=q.current,Xe=v.useMemo(()=>{const O={props:se,data:pe,bus:y,refs:{container:d,getContainer:()=>d.current},state:b,setState:R=>g(I=>({...I,...R})),shared:S.current,deviceInfo:w,forceUpdate:m,getSize:()=>{const R=d.current;return R?{width:R.offsetWidth,height:R.offsetHeight}:{width:0,height:0}},logger:console};return s?s(O):O},[se,pe,b,w,y,s]);N.current=Xe;const Je=v.useCallback(O=>{var I,W;let R=O;for(const He of D){const Ce=(I=He.hooks)==null?void 0:I.transformProps;if(typeof Ce=="function")try{R=Ce(R)}catch(In){(((W=N.current)==null?void 0:W.logger)??console).warn(`[plugin-core] ${He.name}.transformProps 执行失败，已跳过`,In)}}return R},[D]),zt=v.useCallback(O=>{var I,W;let R=O;for(const He of D){const Ce=(I=He.hooks)==null?void 0:I.transformData;if(typeof Ce=="function")try{R=Ce(N.current,R)}catch(In){(((W=N.current)==null?void 0:W.logger)??console).warn(`[plugin-core] ${He.name}.transformData 执行失败，已跳过`,In)}}return R},[D]),T=v.useCallback((O,...R)=>h.executeHook(O,N.current,...R),[h]);return{manager:h,bus:y,context:Xe,state:b,setState:Xe.setState,execute:T,transformProps:Je,transformData:zt,orderedPlugins:D}}v.createContext(null);function Lh(e,n,t){const{hook:r,position:o="after"}=t;return e.filter(i=>i.enabled!==!1).filter(i=>{var l;return typeof((l=i.hooks)==null?void 0:l[r])=="function"}).filter(i=>{var a;const l=(a=i.config)==null?void 0:a.slotPosition;return o==="before"?l==="before":o==="footer"?l===void 0||l==="after"||l==="footer":l===void 0||l==="after"}).sort((i,l)=>{var a,s;return(((a=i.config)==null?void 0:a.order)??0)-(((s=l.config)==null?void 0:s.order)??0)||(l.priority??0)-(i.priority??0)}).map(i=>{try{const l=i.hooks[r](n);return l==null?null:u.jsx(oi,{children:l},`vane-slot-${i.name}`)}catch(l){return console.warn(`[vane/plugin-core] 插件 ${i.name} 的 ${r} 渲染失败`,l),null}})}const Rt=v.createContext(null);function jf(e){return[...e].sort((n,t)=>{var r,o;return(((r=n.config)==null?void 0:r.order)??0)-(((o=t.config)==null?void 0:o.order)??0)||(t.priority??0)-(n.priority??0)})}function zh(e){const n={};for(const t of _h)n[t]=jf(e.filter(r=>r.enabled!==!1&&typeof r.hooks[t]=="function"));return n}function Mh({orderedPlugins:e,context:n,children:t}){const r=v.useMemo(()=>zh(e),[e]),o=v.useMemo(()=>({orderedPlugins:e,context:n,slots:r}),[e,n,r]);return u.jsx(Rt.Provider,{value:o,children:t})}function Ha(e,n,t,...r){return e.reduce((o,i)=>{try{const l=i.hooks[t](n,...r);return l==null||o.push(u.jsx(oi,{children:l},`vcd-slot-${i.name}`)),o}catch(l){return console.warn(`[vane-candidate] 插件 ${i.name} 的 ${t} 渲染失败`,l),o}},[])}function Ef(e,n){return typeof e=="function"?e(...n):e}function Ih(e,n,t,r,...o){const i=jf(e.filter(l=>l.enabled!==!1&&typeof l.hooks[t]=="function"));for(let l=i.length-1;l>=0;l--){const a=i[l];try{const s=a.hooks[t](n,...o);if(s!=null)return u.jsx(oi,{children:s},`vcd-content-${a.name}`)}catch(s){console.warn(`[vane-candidate] 插件 ${a.name} 的 ${t} 渲染失败`,s)}}return Ef(r,o)}function Mu(e){const n=v.useContext(Rt),t=n?n.slots[e]:null,r=n?n.context:null;return v.useMemo(()=>t&&r?Ha(t,r,e):[],[t,r,e])}function Iu(e,n){const t=v.useContext(Rt),r=t?t.slots[e]:null,o=t?t.context:null;return v.useMemo(()=>r&&o?Ha(r,o,e,n):[],[r,o,e,n])}function Ah(e,n,t){const r=v.useContext(Rt),o=r?r.slots[e]:null,i=r?r.context:null;return v.useMemo(()=>o&&i?Ha(o,i,e,n,t):[],[o,i,e,n,t])}function Tf(e,n,...t){const r=v.useContext(Rt),o=r?r.orderedPlugins:null,i=r?r.context:null;return v.useMemo(()=>o&&i?Ih(o,i,e,n,...t):Ef(n,t),[o,i,e,...t])}function Bh(){const e=v.useContext(Rt);return(e==null?void 0:e.context)??null}const k={bg:"#ffffff",text:"#1f2328",muted:"#5d636a",faint:"#767d87",line:"#e3e6ea",lineStrong:"#d4d8de",accent:"#2563eb",accentInk:"#ffffff",accentWash:"#eef3fe",chipBg:"#f2f3f5",chipText:"#1f2328",good:"#1f7a3f",warn:"#b45309",bad:"#b42318"},vn={neutral:{fg:"#5d636a",bg:"#f2f3f5"},info:{fg:"#1c6ea8",bg:"#e7f1fa"},warn:{fg:"#8a4a06",bg:"#fdf1e2"},good:{fg:"#1f7a3f",bg:"#e8f5ec"},bad:{fg:"#b42318",bg:"#fdeceb"}};function K(e){return{background:e?k.accent:k.chipBg,color:e?k.accentInk:k.chipText,border:`1px solid ${k.lineStrong}`,borderRadius:"var(--vcd-radius, 6px)",fontSize:12,padding:"3px 9px",cursor:"pointer"}}const Ln=v.forwardRef(function(n,t){const{children:r,containerClassName:o,containerStyle:i,onMount:l,onUnmount:a,containerRefExternal:s}=n,c=v.useRef(null),d=s??c,[,f]=v.useState(0),h=Bh(),x=v.useRef(h);x.current=h;const y=v.useRef(n);y.current=n;const S=n.stages??Ue,g=(h==null?void 0:h.data)??n.data??$f;v.useImperativeHandle(t,()=>({getContainer:()=>d.current,forceUpdate:()=>f(j=>j+1),getSize:()=>{const j=d.current;return j?{width:j.offsetWidth,height:j.offsetHeight}:{width:0,height:0}},getStageKeys:()=>(y.current.stages??Ue).map(j=>j.key)}),[d]),v.useEffect(()=>(l==null||l(),()=>a==null?void 0:a()),[]);const p=Mu("renderToolbar"),m=Mu("renderFooter"),w=Tf("renderCards",()=>Uh(S,g),{stages:S,candidates:g});return u.jsxs("div",{ref:d,className:`vcd-root ${o||""}`,style:{position:"relative",boxSizing:"border-box",background:k.bg,color:k.text,fontFamily:"var(--vcd-font, system-ui, -apple-system, 'Segoe UI', Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif)",fontSize:14,lineHeight:1.6,...i},children:[p.length>0&&u.jsx("div",{className:"vcd-toolbar",style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,padding:"10px 16px",borderBottom:`1px solid ${k.line}`},children:p}),u.jsx("div",{className:"vcd-board",style:{padding:"12px 16px 4px"},children:w}),m.length>0&&u.jsx("div",{className:"vcd-footer",style:{display:"flex",flexWrap:"wrap",gap:12,padding:"12px 16px 14px",borderTop:`1px solid ${k.line}`,alignItems:"center"},children:m}),r]})});Ln.displayName="CandidateCore";const $f=[];function Fh(e){return/^(https?:\/\/|\/|data:image\/)/i.test(e)}function Uh(e,n){const t=new Map;for(const r of n){const o=t.get(r.stage);o?o.push(r):t.set(r.stage,[r])}return u.jsxs("div",{className:"vcd-kanban",style:{display:"flex",gap:12,alignItems:"flex-start",overflowX:"auto",paddingBottom:8},children:[e.map(r=>u.jsx(Wh,{stage:r,list:t.get(r.key)??$f},r.key)),n.length===0&&u.jsx("div",{style:{color:k.muted,fontSize:13,padding:"8px 2px"},children:"暂无候选人"})]})}const Wh=$n.memo(function({stage:n,list:t}){const r=Ah("renderColumnHeader",n,t.length),o=vn[n.tone??"neutral"]??vn.neutral;return u.jsxs("section",{"data-stage-key":n.key,className:"vcd-column",style:{flex:"1 0 220px",minWidth:220,background:k.chipBg,borderRadius:"var(--vcd-radius, 8px)",padding:8},children:[u.jsxs("header",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:[u.jsx("span",{style:{fontSize:12,fontWeight:700,color:o.fg,background:o.bg,padding:"1px 8px",borderRadius:999},children:n.label}),u.jsx("span",{style:{fontSize:12,color:k.muted},children:t.length}),u.jsx("span",{style:{marginLeft:"auto",display:"inline-flex",gap:6},children:r})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:t.map(i=>u.jsx(Hh,{candidate:i},i.id))})]})}),Hh=$n.memo(function({candidate:n}){return u.jsx("article",{"data-candidate-id":n.id,className:"vcd-card",style:{background:k.bg,color:k.text,border:`1px solid ${k.line}`,borderRadius:"var(--vcd-radius, 8px)",padding:"10px 12px",boxSizing:"border-box"},children:u.jsx(Vh,{candidate:n})})});function Vh({candidate:e}){const n=Iu("renderCardBadges",e),t=Iu("renderCardActions",e),r=Tf("renderCardBody",()=>Kh(e),e);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.avatar&&Fh(e.avatar)?u.jsx("img",{src:e.avatar,alt:"",width:32,height:32,style:{borderRadius:"50%",objectFit:"cover",border:`1px solid ${k.line}`}}):u.jsx("span",{"aria-hidden":"true",style:{width:32,height:32,borderRadius:"50%",background:k.accentWash,color:k.accent,display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:13,flexShrink:0},children:e.name.slice(0,1)}),u.jsxs("div",{style:{minWidth:0,flex:1},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[u.jsx("strong",{style:{fontSize:14,color:k.text},children:e.name}),n.length>0&&u.jsx("span",{style:{display:"inline-flex",gap:4,flexWrap:"wrap"},children:n})]}),u.jsx("div",{style:{fontSize:12,color:k.muted},children:e.role})]})]}),r,t.length>0&&u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:8,paddingTop:8,borderTop:`1px solid ${k.line}`},children:t})]})}function Kh(e){return u.jsxs(u.Fragment,{children:[e.summary&&u.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:k.muted,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:e.summary}),u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"2px 12px",marginTop:6,fontSize:12,color:k.muted},children:[e.source&&u.jsxs("span",{children:["来源：",e.source]}),e.appliedAt&&u.jsxs("span",{children:["投递：",e.appliedAt]}),e.email&&u.jsx("span",{children:e.email}),e.phone&&u.jsx("span",{children:e.phone})]})]})}function Nf(e,n){return e.findIndex(t=>t.key===n)}function Gh(e,n,t){const r=Nf(e,n);if(r<0)return n;const o=Math.min(Math.max(r+t,0),e.length-1);return e[o].key}function Au(e,n,t){const r={at:new Date().toISOString(),action:n,...t?{detail:t}:{}};return{...e,history:[r,...(e.history??[]).slice(0,49)]}}function Zr(e,n,t){return e.map(r=>r.id===n?{...r,...t}:r)}function Bu(e){return Object.keys(e).length>0}function Fu(e){if(typeof e=="number"&&Number.isFinite(e))return`"${e}"`;const n=e==null?"":String(e);return`"${(/^[=+\-@\t\r]/.test(n)?`'${n}`:n).replace(/"/g,'""')}"`}function Qh(e){if(!e)return e;const n=e.replace(/\D/g,"");return n.length<7?"*".repeat(Math.max(n.length,4)):`${n.slice(0,3)}****${n.slice(-4)}`}function Yh(e){if(!e||!e.includes("@"))return e;const n=e.lastIndexOf("@"),t=e.slice(0,n),r=e.slice(n+1);return t?t.length<=2?`${t[0]}***@${r}`:`${t[0]}***${t[t.length-1]}@${r}`:e}const Xh=new Set(["children","containerRefExternal"]);function Jh(e,n){const t=e,r=n,o=new Set([...Object.keys(t),...Object.keys(r)]);for(const i of o)if(!Xh.has(i)&&!Object.is(t[i],r[i]))return!1;return!0}function nt(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:o=!1}=t,i=v.forwardRef((l,a)=>{const s=v.useRef(null),[c,d]=v.useState(l.data),f=v.useRef(l.data??[]),h=v.useRef(()=>{});h.current=C=>{var _;f.current=C,d(C),y.bus.emit("candidate:change",{data:C}),(_=l.onDataChange)==null||_.call(l,C)};const x=v.useCallback(C=>{var E;const _=((E=C.props)==null?void 0:E.stages)??Ue;return{...C,updateCandidate:(D,N)=>{C.bus.emit("candidate:update",{id:D,patch:N})},updateCandidates:D=>{C.bus.emit("candidate:batch-update",{updates:D})},moveCandidate:(D,N)=>{C.bus.emit("candidate:move",{id:D,delta:N,stages:_})},moveCandidateTo:(D,N)=>{C.bus.emit("candidate:move",{id:D,targetStage:N,stages:_})},moveCandidatesTo:(D,N)=>{C.bus.emit("candidate:batch-move",{ids:D,targetStage:N,stages:_})}}},[]),y=Dh({plugins:r,props:l,data:c,containerRef:s,extendContext:x,enableDebug:o});v.useEffect(()=>{l.data!==void 0&&(f.current=l.data,d(l.data))},[l.data]),v.useEffect(()=>y.bus.on("candidate:update",C=>{const{id:_,patch:E}=C??{};if(!_||!E||!Bu(E))return;const D=f.current;if(!D.some(M=>M.id===_))return;const N=Zr(D,_,E);h.current(N)}),[y.bus]),v.useEffect(()=>y.bus.on("candidate:batch-update",C=>{const{updates:_}=C??{};if(!Array.isArray(_)||_.length===0)return;let E=f.current,D=!1;for(const{id:N,patch:M}of _)!N||!M||!Bu(M)||E.some(se=>se.id===N)&&(E=Zr(E,N,M),D=!0);D&&h.current(E)}),[y.bus]),v.useEffect(()=>y.bus.on("candidate:move",C=>{const{id:_,delta:E,targetStage:D,stages:N}=C??{};if(!_)return;const M=N??Ue,se=f.current,q=se.find(Je=>Je.id===_);if(!q)return;let pe;if(D!==void 0){if(!M.some(Je=>Je.key===D))return;pe=D}else{if(!E)return;pe=Gh(M,q.stage,E)}if(pe===q.stage)return;const Xe=Zr(se,_,Au({...q,stage:pe},"阶段流转",pe));h.current(Xe)}),[y.bus]),v.useEffect(()=>y.bus.on("candidate:batch-move",C=>{const{ids:_,targetStage:E,stages:D}=C??{};if(!Array.isArray(_)||_.length===0||!E||!(D??Ue).some(q=>q.key===E))return;let M=f.current,se=!1;for(const q of _){const pe=M.find(Xe=>Xe.id===q);!pe||pe.stage===E||(M=Zr(M,q,Au({...pe,stage:E},"阶段流转",E)),se=!0)}se&&h.current(M)}),[y.bus]);const S=y.context,b=v.useMemo(()=>c===void 0?void 0:y.transformData(c),[c,y.transformData,y.state]),g=v.useMemo(()=>({...S,data:b,rawData:c}),[S,b,c]),p=v.useCallback((C,..._)=>y.execute(C,..._),[y.manager]),m=y.transformProps(l);v.useEffect(()=>{p("onMount")},[p,y.orderedPlugins]);const w=v.useRef(null);v.useEffect(()=>{const C=w.current;w.current=l,!(!C||Jh(C,l))&&p("onPropsChange",C,l)},[l,p]);const j={...m,containerRefExternal:s,debug:m.debug??o,onMount:()=>{var C;(C=m.onMount)==null||C.call(m)},onUnmount:()=>{var C;(C=m.onUnmount)==null||C.call(m)},children:u.jsxs(oi,{children:[Lh(y.orderedPlugins,g,{hook:"renderOverlay"}),m.children]})};return u.jsx(Mh,{orderedPlugins:y.orderedPlugins,context:g,children:u.jsx(e,{ref:a,...j})})});return i.displayName="WithPlugins(CandidateCore)",i}const Zh="Score",qh="岗位匹配分徽章：候选人卡片右上角展示 0-100 匹配分胶囊，按阈值着色（优秀绿 / 待定橙 / 偏低红）。纯展示，不改数据。",ey="0.1.0",ny=["score","renderCardBadges"],ty=[{name:"renderCardBadges",when:"每次渲染，每张候选人卡片",description:"渲染匹配分徽章（阈值着色）"}],ry=[],oy="只读取 candidate.score，不调用上下文方法",iy=[{name:"goodThreshold",type:"number",default:"80",description:"≥该值显示绿色"},{name:"warnThreshold",type:"number",default:"60",description:"≥该值显示橙色，否则红色"}],ly="withCandidatePlugins(CandidateCore, [createScorePlugin({ goodThreshold: 85 })])",Va={name:Zh,description:qh,since:ey,tags:ny,events:ty,methods:ry,methodsNote:oy,config:iy,example:ly};function ay(e,n,t){return e>=n?k.good:e>=t?k.warn:k.bad}const $r=(e={})=>{const n=e.goodThreshold??80,t=e.warnThreshold??60;return{name:"score",version:"0.1.0",description:Va.description,priority:10,config:{order:10},hooks:{renderCardBadges:(r,o)=>{if(typeof o.score!="number")return null;const i=ay(o.score,n,t);return u.jsxs("span",{title:`匹配分 ${o.score}`,"aria-label":`匹配分 ${o.score}`,style:{fontSize:11,fontWeight:700,color:i,border:`1px solid ${i}`,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:[o.score,"分"]},"score")}}}};$r.meta=Va;const sy="StageFlow",uy="阶段流转：卡片操作区「◀ 推进 ▶」按钮，按阶段定义推进/退回候选人（自动追加流转历史，越界自动禁用）。流转核心动作插件。",cy="0.1.0",dy=["stage-flow","renderCardActions"],fy=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"渲染推进/退回按钮，边界禁用"}],py=["moveCandidate(id, delta)"],gy=[{name:"step",type:"number",default:"1",description:"每次流转的步长"},{name:"allowBackward",type:"boolean",default:"true",description:"是否允许回退"}],my="withCandidatePlugins(CandidateCore, [createStageFlowPlugin({ allowBackward: false })])",Ka={name:sy,description:uy,since:cy,tags:dy,events:fy,methods:py,config:gy,example:my},Dt=(e={})=>{const n=e.step??1,t=e.allowBackward??!0;return{name:"stage-flow",version:"0.1.0",description:Ka.description,priority:20,config:{order:20},hooks:{renderCardActions:(r,o)=>{var d;const i=((d=r.props)==null?void 0:d.stages)??Ue,l=Nf(i,o.stage),a=l<=0,s=l<0||l>=i.length-1,c=f=>({...hy,...f?{color:k.faint,cursor:"not-allowed"}:{}});return u.jsxs("span",{style:{display:"inline-flex",gap:2},children:[t&&u.jsx("button",{type:"button",disabled:a,"aria-label":`将 ${o.name} 退回上一阶段`,onClick:()=>r.moveCandidate(o.id,-n),style:c(a),children:"◀"}),u.jsx("button",{type:"button",disabled:s,"aria-label":`将 ${o.name} 推进到下一阶段`,onClick:()=>r.moveCandidate(o.id,n),style:c(s),children:"▶"})]},"stage-flow")}}}},hy={border:`1px solid ${k.lineStrong}`,background:k.chipBg,color:k.chipText,borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer",lineHeight:"18px"};Dt.meta=Ka;const zn=[{key:"applied",label:"已投递",tone:"neutral"},{key:"screening",label:"筛选中",tone:"info"},{key:"interview",label:"面试中",tone:"warn"},{key:"offer",label:"Offer",tone:"good"},{key:"hired",label:"已入职",tone:"good"},{key:"rejected",label:"已婉拒",tone:"bad"}],Mn=[{id:"c-001",name:"陈知远",role:"高级前端工程师",stage:"interview",score:92,tags:["重点","内推"],source:"内推",appliedAt:"2026-10-28",email:"zhiyuan.chen@example.com",phone:"13812345678",summary:"8 年前端经验，主导过千万级 DAU 项目的性能优化与组件库建设，React / TypeScript 深度使用者。",starred:!0,interview:{date:"周二 14:00",interviewer:"王工",mode:"onsite"},notes:[{id:"n-1",author:"张HR",at:"2026-10-30T10:20:00.000Z",text:"一面通过，系统设计扎实，二面约下周二。"}],history:[{at:"2026-10-30T02:00:00.000Z",action:"阶段流转",detail:"interview"}]},{id:"c-002",name:"林小满",role:"前端工程师",stage:"offer",score:88,tags:["急招"],source:"BOSS 直聘",appliedAt:"2026-10-25",email:"xiaoman.lin@example.com",phone:"13987654321",summary:"4 年经验，熟悉 React 生态与工程化，有跨端（小程序 / H5）交付经验。",offer:{salary:"28K · 15薪",status:"sent"},history:[{at:"2026-11-01T08:00:00.000Z",action:"Offer 已发出"}]},{id:"c-003",name:"赵启明",role:"前端负责人",stage:"screening",score:85,tags:["重点"],source:"猎头",appliedAt:"2026-11-01",email:"qiming.zhao@example.com",phone:"13655556666",summary:"10 年经验，带过 15 人前端团队，擅长中大型 B 端系统架构与团队管理。"},{id:"c-004",name:"王雨桐",role:"初级前端工程师",stage:"applied",score:64,source:"官网投递",appliedAt:"2026-11-02",email:"yutong.wang@example.com",phone:"15811112222",summary:"应届毕业生，两段大厂实习经历，熟悉 React 与 Node 基础。"},{id:"c-005",name:"刘一鸣",role:"高级前端工程师",stage:"interview",score:78,source:"内推",appliedAt:"2026-10-27",email:"yiming.liu@example.com",phone:"13733334444",summary:"6 年经验，可视化方向，Canvas / WebGL 项目经验丰富。",interview:{date:"周四 16:00",interviewer:"李总监",mode:"video"}},{id:"c-006",name:"孙婉清",role:"全栈工程师",stage:"screening",score:74,tags:["备选"],source:"拉勾",appliedAt:"2026-10-30",email:"wanqing.sun@example.com",phone:"15966667777",summary:"5 年经验，React + NestJS 全栈，独立负责过 SaaS 产品从 0 到 1。"},{id:"c-007",name:"周北辰",role:"前端工程师",stage:"hired",score:90,tags:["重点"],source:"内推",appliedAt:"2026-10-08",email:"beichen.zhou@example.com",phone:"18677778888",summary:"5 年经验，已确认入职，负责核心交易链路前端。",offer:{salary:"32K · 16薪",status:"accepted"}},{id:"c-008",name:"吴悠悠",role:"前端工程师",stage:"rejected",score:45,source:"官网投递",appliedAt:"2026-10-20",email:"youyou.wu@example.com",phone:"17788889999",summary:"3 年经验，方向以移动端 Hybrid 为主，与岗位匹配度一般。",history:[{at:"2026-10-26T06:00:00.000Z",action:"阶段流转",detail:"rejected"}]},{id:"c-009",name:"郑星野",role:"资深前端工程师",stage:"applied",score:81,tags:["内推"],source:"内推",appliedAt:"2026-11-02",email:"xingye.zheng@example.com",phone:"15099990000",summary:"7 年经验，开源组件库维护者，关注工程化与研发效能。"},{id:"c-010",name:"陈知远",role:"前端工程师",stage:"applied",score:58,source:"BOSS 直聘",appliedAt:"2026-11-01",email:"zhiyuan.chen@example.com",phone:"13812345678",summary:"同名候选人，疑似重复投递（DupCheck 演示用）。"},{id:"c-011",name:"何静姝",role:"技术专家",stage:"screening",score:83,archived:!0,source:"猎头",appliedAt:"2026-09-15",email:"jingshu.he@example.com",phone:"13122223333",summary:"暂无匹配岗位，归档至人才库（ArchivePool 演示用）。"}],yy={slug:"basic",title:"最小可用",group:"basic",intro:"内核 + 匹配分/阶段流转两个插件跑通装配链路；加插件就是往 withPlugins 数组里加一项。",why:"第一次接入时的起点：两个插件就能看出「徽章槽 + 操作槽 + 数据流转」的完整回路。",plugs:[{fn:"createScorePlugin",cfg:"{}",why:"卡片右上角渲染匹配分胶囊，最简单的装饰槽插件。"},{fn:"createStageFlowPlugin",cfg:"{}",why:"卡片操作区 ◀/▶，经 ctx.moveCandidate 流转并自动留 history。"}],props:[],note:"withPlugins 是 withCandidatePlugins 的别名；数据流转在装配层内部态完成，宿主可用 onDataChange 同步。"},vy=nt(Ln,[$r(),Dt()]);function xy(e){return u.jsx(vy,{data:Mn.slice(0,6),stages:zn,containerStyle:{maxWidth:1120}})}const Sy=Object.freeze(Object.defineProperty({__proto__:null,default:xy,meta:yy},Symbol.toStringTag,{value:"Module"})),wy="DupCheck",ky="重复候选人检测：按姓名/邮箱/手机号扫描列表，命中者在卡片上显示「疑似重复」警示徽章，辅助 HR 及时发现重复投递。",Cy="0.1.0",Py=["dup-check","renderCardBadges"],_y=[{name:"renderCardBadges",when:"每次渲染，每张候选人卡片",description:"命中重复时渲染警示徽章"}],by=[],jy="只读取 ctx.data 与 candidate 字段，不调用上下文方法",Ey=[{name:"fields",type:"('name'|'email'|'phone')[]",default:"['name','email','phone']",description:"参与判重的字段"}],Ty="withCandidatePlugins(CandidateCore, [createDupCheckPlugin({ fields: ['email', 'phone'] })])",Ga={name:wy,description:ky,since:Cy,tags:Py,events:_y,methods:by,methodsNote:jy,config:Ey,example:Ty};function Of(e,n){var r;const t=[];for(const o of n){const i=(r=e[o])==null?void 0:r.trim().toLowerCase();i&&t.push(`${o}:${i}`)}return t}const Uu=new WeakMap;function $y(e,n){const t=Uu.get(e);if(t)return t;const r=new Map;for(const o of e)for(const i of Of(o,n)){const l=r.get(i);l?l.push(o.id):r.set(i,[o.id])}return Uu.set(e,r),r}const Qa=(e={})=>{const n=e.fields??["name","email","phone"];return{name:"dup-check",version:"0.1.0",description:Ga.description,priority:20,config:{order:20},hooks:{renderCardBadges:(t,r)=>{const o=t.rawData??t.data??[],i=Of(r,n);if(i.length===0)return null;const l=$y(o,n),a=new Set;for(const s of i)for(const c of l.get(s)??[])c!==r.id&&a.add(c);return a.size===0?null:u.jsx("span",{title:`与另外 ${a.size} 位候选人疑似重复`,"aria-label":`疑似重复：另有 ${a.size} 位`,style:{fontSize:11,fontWeight:700,color:"#8a4a06",background:"#fdf1e2",border:"1px solid #ecd3ae",borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:"疑似重复"},"dup-check")}}}};Qa.meta=Ga;const Ny='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',Vt=[];let Oy=0;function Lt({title:e,onClose:n,children:t,width:r=360,zIndex:o=55,closeLabel:i="关闭",headerExtra:l,align:a="center"}){const s=v.useRef(null),c=v.useRef(n);return c.current=n,v.useEffect(()=>{const d=s.current;if(!d||typeof document>"u")return;const f=++Oy;Vt.push(f);const h=()=>Vt[Vt.length-1]===f,x=document.activeElement,y=()=>Array.from(d.querySelectorAll(Ny)).filter(g=>!g.hasAttribute("disabled"));(y()[0]??d).focus();const b=g=>{if(!h())return;if(g.key==="Escape"){g.stopPropagation(),c.current();return}if(g.key!=="Tab")return;const p=y();if(p.length===0){g.preventDefault(),d.focus();return}const m=p[0],w=p[p.length-1];g.shiftKey&&document.activeElement===m?(g.preventDefault(),w.focus()):!g.shiftKey&&document.activeElement===w&&(g.preventDefault(),m.focus())};return document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b);const g=Vt.indexOf(f);g>=0&&Vt.splice(g,1);try{x==null||x.focus()}catch{}}},[]),u.jsx("div",{"data-vcd-overlay":"",onClick:d=>{d.target===d.currentTarget&&n()},style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:a==="end"?"flex-end":"center",justifyContent:"center",zIndex:o},children:u.jsxs("div",{ref:s,role:"dialog","aria-modal":"true","aria-label":typeof e=="string"?e:void 0,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{background:"#fff",color:k.text,borderRadius:a==="end"?"10px 10px 0 0":10,padding:18,width:r,maxWidth:"92%",maxHeight:"86%",overflow:"auto",boxShadow:"0 8px 30px rgba(0,0,0,0.25)",outline:"none"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:[u.jsx("strong",{style:{color:k.text,flex:1,minWidth:0},children:e}),l,u.jsx("button",{type:"button",onClick:n,style:K(!1),children:i})]}),t]})})}const Ry="Tag",Dy="候选人标签：卡片徽章区展示标签 chips，浮层内可添加/删除标签（支持快捷建议标签），写回 candidate.tags。",Ly="0.1.0",zy=["tags","renderCardBadges","renderOverlay"],My=[{name:"renderCardBadges",when:"每次渲染，每张候选人卡片",description:"展示标签 chips 与管理入口"},{name:"renderOverlay",when:"state.tagEditingId 非空时",description:"标签管理浮层（添加/删除/快捷建议）"}],Iy=["updateCandidate(id, { tags })"],Ay=[{name:"suggestTags",type:"string[]",default:"['重点','备选','急招','内推']",description:"快捷标签建议"},{name:"maxTags",type:"number",default:"8",description:"每位候选人最多标签数"}],By="withCandidatePlugins(CandidateCore, [createTagPlugin({ suggestTags: ['重点','银牌'] })])",Ya={name:Ry,description:Dy,since:Ly,tags:zy,events:My,methods:Iy,config:Ay,example:By},ii=(e={})=>{const n=e.suggestTags??["重点","备选","急招","内推"],t=e.maxTags??8;return{name:"tags",version:"0.1.0",description:Ya.description,priority:30,config:{order:30},hooks:{renderCardBadges:(r,o)=>{const i=o.tags??[],l=r.state.tagEditingId===o.id;return u.jsxs($n.Fragment,{children:[i.slice(0,3).map(a=>u.jsx("span",{style:{fontSize:11,color:k.chipText,background:k.chipBg,border:`1px solid ${k.line}`,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:a},a)),i.length>3&&u.jsxs("span",{title:i.join("、"),"aria-label":`共 ${i.length} 个标签`,style:{fontSize:11,color:k.faint,lineHeight:"18px"},children:["+",i.length-3]}),u.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":l,"aria-label":`${o.name} 的标签管理`,onClick:()=>r.setState({tagEditingId:l?null:o.id}),style:{...K(!1),fontSize:11,padding:"0 6px",lineHeight:"16px"},children:"标签"})]},"tags")},renderOverlay:r=>{const o=r.state.tagEditingId;if(!o)return null;const i=(r.data??[]).find(d=>d.id===o);if(!i)return null;const l=i.tags??[],a=()=>r.setState({tagEditingId:null}),s=d=>{const f=d.trim();!f||l.includes(f)||l.length>=t||r.updateCandidate(o,{tags:[...l,f]})},c=d=>r.updateCandidate(o,{tags:l.filter(f=>f!==d)});return u.jsxs(Lt,{title:`标签管理 · ${i.name}`,onClose:a,width:340,zIndex:56,children:[u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10},children:[l.length===0&&u.jsx("span",{style:{color:k.muted,fontSize:13},children:"暂无标签"}),l.map(d=>u.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,color:k.chipText,background:k.chipBg,border:`1px solid ${k.line}`,borderRadius:999,padding:"2px 6px 2px 10px"},children:[d,u.jsx("button",{type:"button","aria-label":`删除标签 ${d}`,onClick:()=>c(d),style:{border:"none",background:"transparent",color:k.bad,cursor:"pointer",fontSize:12,padding:0,lineHeight:1},children:"×"})]},d))]}),u.jsxs("form",{onSubmit:d=>{d.preventDefault();const f=d.currentTarget.elements.namedItem("tag");f!=null&&f.value&&(s(f.value),f.value="")},style:{display:"flex",gap:6,marginBottom:10},children:[u.jsx("input",{name:"tag","aria-label":"新标签名称",placeholder:"输入标签后回车",maxLength:12,style:{flex:1,border:`1px solid ${k.lineStrong}`,borderRadius:6,padding:"5px 8px",fontSize:13,color:k.text,background:"#fff"}}),u.jsx("button",{type:"submit",style:K(!0),children:"添加"})]}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:12,color:k.muted,marginBottom:4},children:"快捷标签"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:n.map(d=>u.jsx("button",{type:"button",onClick:()=>s(d),style:K(l.includes(d)),children:d},d))})]})]},"tags-overlay")}}}};ii.meta=Ya;const Fy="Offer",Uy="Offer 状态徽章：候选人带 offer 字段时展示状态胶囊（审批中灰 / 已发出蓝 / 已接受绿 / 已婉拒红），可自定义文案。纯展示。",Wy="0.1.0",Hy=["offer","renderCardBadges"],Vy=[{name:"renderCardBadges",when:"每次渲染，每张候选人卡片",description:"candidate.offer 存在时渲染状态徽章"}],Ky=[],Gy="只读取 candidate.offer，不调用上下文方法",Qy=[{name:"labels",type:"Partial<Record<status, string>>",default:"内置中文文案",description:"各状态自定义文案"}],Yy="withCandidatePlugins(CandidateCore, [createOfferPlugin({ labels: { sent: '已发 Offer' } })])",Xa={name:Fy,description:Uy,since:Wy,tags:Hy,events:Vy,methods:Ky,methodsNote:Gy,config:Qy,example:Yy},Xy={draft:"Offer 审批中",sent:"Offer 已发出",accepted:"已接受 Offer",declined:"已婉拒 Offer"},Jy={draft:{fg:"#5d636a",bg:"#f2f3f5"},sent:{fg:"#1c6ea8",bg:"#e7f1fa"},accepted:{fg:"#1f7a3f",bg:"#e8f5ec"},declined:{fg:"#b42318",bg:"#fdeceb"}},Ja=(e={})=>{const n={...Xy,...e.labels??{}};return{name:"offer",version:"0.1.0",description:Xa.description,priority:40,config:{order:40},hooks:{renderCardBadges:(t,r)=>{const o=r.offer;if(!o)return null;const i=Jy[o.status];return u.jsx("span",{title:o.salary?`${n[o.status]} · ${o.salary}`:n[o.status],"aria-label":n[o.status],style:{fontSize:11,fontWeight:700,color:i.fg,background:i.bg,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:n[o.status]},"offer")}}}};Ja.meta=Xa;const Zy="Star",qy="星标收藏：卡片操作区 ☆/★ 一键切换星标，可选把星标候选人置顶到各自阶段列最前（transformData）。",ev="0.1.0",nv=["star","renderCardActions","transformData"],tv=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"星标切换按钮（aria-pressed）"},{name:"transformData",when:"pinTop 开启时，渲染前",description:"星标候选人置顶排序"}],rv=["updateCandidate(id, { starred })"],ov=[{name:"pinTop",type:"boolean",default:"true",description:"星标候选人在列内置顶"}],iv="withCandidatePlugins(CandidateCore, [createStarPlugin({ pinTop: false })])",Za={name:Zy,description:qy,since:ev,tags:nv,events:tv,methods:rv,config:ov,example:iv},li=(e={})=>{const n=e.pinTop??!0;return{name:"star",version:"0.1.0",description:Za.description,priority:10,config:{order:10},hooks:{...n?{transformData:(t,r)=>{const o=r??[],i=o.filter(a=>a.starred),l=o.filter(a=>!a.starred);return[...i,...l]}}:{},renderCardActions:(t,r)=>{const o=!!r.starred;return u.jsx("button",{type:"button","aria-pressed":o,"aria-label":o?`取消星标 ${r.name}`:`星标 ${r.name}`,title:o?"取消星标":"星标",onClick:()=>t.updateCandidate(r.id,{starred:!o}),style:{border:"none",background:"transparent",cursor:"pointer",fontSize:14,padding:"2px 4px",color:o?"#c2410c":k.muted,lineHeight:1},children:o?"★":"☆"},"star")}}}};li.meta=Za;const lv="Note",av="招聘备注：卡片操作区备注按钮（带条数角标），浮层内查看/新增/删除备注，写回 candidate.notes。面试沟通、背调结论都记在这里。",sv="0.1.0",uv=["note","renderCardActions","renderOverlay"],cv=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"备注入口按钮"},{name:"renderOverlay",when:"state.noteEditingId 非空时",description:"备注管理浮层"}],dv=["updateCandidate(id, { notes })"],fv=[{name:"authorName",type:"string",default:"'我'",description:"备注作者署名"},{name:"maxNotes",type:"number",default:"50",description:"每位候选人最多保留备注条数"}],pv="withCandidatePlugins(CandidateCore, [createNotePlugin({ authorName: '张HR' })])",qa={name:lv,description:av,since:sv,tags:uv,events:cv,methods:dv,config:fv,example:pv},ai=(e={})=>{const n=e.authorName??"我",t=e.maxNotes??50;return{name:"note",version:"0.1.0",description:qa.description,priority:30,config:{order:30},hooks:{renderCardActions:(r,o)=>{var l;const i=((l=o.notes)==null?void 0:l.length)??0;return u.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-label":`${o.name} 的备注（${i} 条）`,onClick:()=>r.setState({noteEditingId:r.state.noteEditingId===o.id?null:o.id}),style:gv,children:["备注",i>0?` (${i})`:""]},"note")},renderOverlay:r=>{const o=r.state.noteEditingId;if(!o)return null;const i=(r.data??[]).find(s=>s.id===o);if(!i)return null;const l=i.notes??[],a=()=>r.setState({noteEditingId:null});return u.jsxs(Lt,{title:`备注 · ${i.name}`,onClose:a,width:380,zIndex:56,children:[u.jsxs("form",{onSubmit:s=>{s.preventDefault();const c=s.currentTarget.elements.namedItem("text"),d=c==null?void 0:c.value.trim();d&&(r.updateCandidate(o,{notes:[...l,{id:`n-${Date.now()}`,author:n,at:new Date().toISOString(),text:d}].slice(-t)}),c&&(c.value=""))},style:{display:"flex",gap:6,marginBottom:12},children:[u.jsx("input",{name:"text","aria-label":"备注内容",placeholder:"记录沟通要点…",style:{flex:1,border:`1px solid ${k.lineStrong}`,borderRadius:6,padding:"5px 8px",fontSize:13,color:k.text,background:"#fff"}}),u.jsx("button",{type:"submit",style:K(!0),children:"添加"})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.length===0&&u.jsx("span",{style:{color:k.muted,fontSize:13},children:"暂无备注"}),l.slice().reverse().map(s=>u.jsxs("div",{style:{border:`1px solid ${k.line}`,borderRadius:8,padding:"8px 10px",fontSize:13},children:[u.jsxs("div",{style:{display:"flex",gap:8,marginBottom:2},children:[u.jsx("strong",{style:{color:k.text},children:s.author}),u.jsx("span",{style:{color:k.faint,fontSize:12},children:s.at.slice(0,16).replace("T"," ")}),u.jsx("button",{type:"button","aria-label":`删除备注 ${s.text.slice(0,8)}`,onClick:()=>r.updateCandidate(o,{notes:l.filter(c=>c.id!==s.id)}),style:{marginLeft:"auto",border:"none",background:"transparent",color:k.bad,cursor:"pointer",fontSize:12},children:"删除"})]}),u.jsx("div",{style:{color:k.text},children:s.text})]},s.id))]})]},"note-overlay")}}}},gv={border:`1px solid ${k.lineStrong}`,background:k.chipBg,color:k.chipText,borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer"};ai.meta=qa;function Ui({label:e,children:n}){return u.jsxs("div",{style:{marginBottom:10},children:[u.jsx("div",{style:{fontSize:12,color:k.muted,marginBottom:4},children:e}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:n})]})}const mv="InterviewSlot",hv="面试安排：卡片操作区「安排面试」入口，浮层内从时间槽/面试官/形式中点选保存到 candidate.interview，卡片正文显示面试信息条。",yv="0.1.0",vv=["interview-slot","renderCardActions","renderCardBody","renderOverlay"],xv=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"安排/改期面试入口"},{name:"renderCardBody",when:"candidate.interview 存在时",description:"面试信息条（时间/形式/面试官）"},{name:"renderOverlay",when:"state.interviewEditingId 非空时",description:"面试安排浮层"}],Sv=["updateCandidate(id, { interview })"],wv=[{name:"slots",type:"string[]",default:"['周二 14:00','周三 10:00','周四 16:00','周五 15:00']",description:"可选时间槽"},{name:"interviewers",type:"string[]",default:"['王工','李总监']",description:"可选面试官"},{name:"modes",type:"('onsite'|'video'|'phone')[]",default:"['onsite','video']",description:"面试形式"}],kv="withCandidatePlugins(CandidateCore, [createInterviewSlotPlugin({ slots: ['周一 10:00', '周三 14:00'] })])",es={name:mv,description:hv,since:yv,tags:vv,events:xv,methods:Sv,config:wv,example:kv},Wu={onsite:"现场",video:"视频",phone:"电话"},ns=(e={})=>{const n=e.slots??["周二 14:00","周三 10:00","周四 16:00","周五 15:00"],t=e.interviewers??["王工","李总监"],r=e.modes??["onsite","video"];return{name:"interview-slot",version:"0.1.0",description:es.description,priority:40,config:{order:40},hooks:{renderCardActions:(o,i)=>{const l=o.state.interviewEditingId===i.id;return u.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":l,"aria-label":`安排 ${i.name} 的面试`,onClick:()=>o.setState({interviewEditingId:l?null:i.id}),style:Cv,children:i.interview?"改期":"安排面试"},"interview")},renderCardBody:(o,i)=>{const l=i.interview;return l?u.jsxs("div",{style:{marginTop:6,fontSize:12,color:"#8a4a06",background:"#fdf1e2",borderRadius:6,padding:"4px 8px"},children:["📅 面试：",l.date,l.mode&&` · ${Wu[l.mode]??l.mode}`,l.interviewer&&` · ${l.interviewer}`]}):null},renderOverlay:o=>{const i=o.state.interviewEditingId;if(!i)return null;const l=(o.data??[]).find(c=>c.id===i);if(!l)return null;const a=()=>o.setState({interviewEditingId:null}),s=c=>{const d=l.interview??{date:n[0]};o.updateCandidate(i,{interview:{...d,...c}})};return u.jsxs(Lt,{title:`安排面试 · ${l.name}`,onClose:a,width:360,zIndex:56,children:[u.jsx(Ui,{label:"时间槽",children:n.map(c=>{var d,f;return u.jsx("button",{type:"button","aria-pressed":((d=l.interview)==null?void 0:d.date)===c,onClick:()=>s({date:c}),style:K(((f=l.interview)==null?void 0:f.date)===c),children:c},c)})}),u.jsx(Ui,{label:"面试官",children:t.map(c=>{var d,f;return u.jsx("button",{type:"button","aria-pressed":((d=l.interview)==null?void 0:d.interviewer)===c,onClick:()=>s({interviewer:c}),style:K(((f=l.interview)==null?void 0:f.interviewer)===c),children:c},c)})}),u.jsx(Ui,{label:"形式",children:r.map(c=>{var d,f;return u.jsx("button",{type:"button","aria-pressed":((d=l.interview)==null?void 0:d.mode)===c,onClick:()=>s({mode:c}),style:K(((f=l.interview)==null?void 0:f.mode)===c),children:Wu[c]??c},c)})}),l.interview&&u.jsx("button",{type:"button",onClick:()=>o.updateCandidate(i,{interview:void 0}),style:{...K(!1),marginTop:12},children:"取消面试安排"})]},"interview-overlay")}}}},Cv={border:`1px solid ${k.lineStrong}`,background:k.chipBg,color:k.chipText,borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer"};ns.meta=es;const Pv="RejectTpl",_v="婉拒模板：卡片操作区「婉拒」入口，浮层内选择模板（可预览编辑），确认后候选人流转到婉拒阶段并保留流转历史。",bv="0.1.0",jv=["reject-tpl","renderCardActions","renderOverlay"],Ev=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"婉拒入口按钮"},{name:"renderOverlay",when:"state.rejectEditingId 非空时",description:"模板选择与编辑浮层"}],Tv=["updateCandidate(id, { stage })"],$v=[{name:"templates",type:"RejectTemplate[]",default:"内置 2 套",description:"婉拒信模板（id/title/body）"},{name:"targetStage",type:"string",default:"'rejected'",description:"流转目标阶段 key"}],Nv="withCandidatePlugins(CandidateCore, [createRejectTplPlugin({ targetStage: 'rejected' })])",ts={name:Pv,description:_v,since:bv,tags:jv,events:Ev,methods:Tv,config:$v,example:Nv},Ov=[{id:"polite",title:"礼貌婉拒",body:"感谢您对本职位的关注。经过综合评估，我们认为您与当前岗位的匹配度仍有差距，但您的经历给我们留下了深刻印象。我们会将您纳入人才库，如有更合适的机会将第一时间与您联系。祝求职顺利！"},{id:"skill-gap",title:"技能方向不符",body:"感谢您抽出时间参与面试。该岗位更侧重 {{gap}} 方向的经验，与您当前的技术栈存在一定差异，故本次未能推进。期待未来在更匹配的岗位合作。"}],si=(e={})=>{const n=e.templates??Ov,t=e.targetStage??"rejected";return{name:"reject-tpl",version:"0.1.0",description:ts.description,priority:50,config:{order:50},hooks:{renderCardActions:(r,o)=>{const i=r.state.rejectEditingId===o.id;return u.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":i,"aria-label":`婉拒 ${o.name}`,onClick:()=>r.setState({rejectEditingId:i?null:o.id}),style:Rv,children:"婉拒"},"reject")},renderOverlay:r=>{const o=r.state.rejectEditingId;if(!o)return null;const i=(r.data??[]).find(c=>c.id===o);if(!i)return null;const l=r.state.rejectTplId??n[0].id,a=n.find(c=>c.id===l)??n[0],s=()=>r.setState({rejectEditingId:null,rejectTplId:null});return u.jsxs(Lt,{title:`婉拒 · ${i.name}`,onClose:s,width:400,zIndex:57,children:[u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10},children:n.map(c=>u.jsx("button",{type:"button","aria-pressed":c.id===a.id,onClick:()=>r.setState({rejectTplId:c.id}),style:K(c.id===a.id),children:c.title},c.id))}),u.jsx("textarea",{"aria-label":"婉拒信内容",defaultValue:a.body,rows:6,style:{width:"100%",boxSizing:"border-box",border:`1px solid ${k.lineStrong}`,borderRadius:6,padding:"8px 10px",fontSize:13,color:k.text,background:"#fff",resize:"vertical",marginBottom:12}},a.id),u.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[u.jsx("button",{type:"button",onClick:s,style:K(!1),children:"取消"}),u.jsx("button",{type:"button",onClick:()=>{r.updateCandidate(o,{stage:t}),s()},style:K(!0),children:"确认婉拒"})]})]},"reject-overlay")}}}},Rv={border:`1px solid ${k.lineStrong}`,background:k.chipBg,color:"#b42318",borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer"};si.meta=ts;const Dv="Filter",Lv="阶段/标签筛选：工具栏阶段与标签下拉（标签选项可配置或自动从数据收集），transformData 按所选条件过滤看板。",zv="0.1.0",Mv=["filter","renderToolbar","transformData"],Iv=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"阶段/标签筛选控件与清除按钮"},{name:"transformData",when:"渲染前，筛选条件变化时重跑",description:"按 filterStage / filterTag 过滤"}],Av=[],Bv="通过 ctx.setState({ filterStage, filterTag }) 驱动",Fv=[{name:"tagOptions",type:"string[]",default:"自动从数据收集",description:"可选的标签筛选项"}],Uv="withCandidatePlugins(CandidateCore, [createFilterPlugin({ tagOptions: ['重点', '内推'] })])",rs={name:Dv,description:Lv,since:zv,tags:Mv,events:Iv,methods:Av,methodsNote:Bv,config:Fv,example:Uv},ui=(e={})=>({name:"filter",version:"0.1.0",description:rs.description,priority:50,config:{order:50},hooks:{transformData:(n,t)=>{const r=n.state.filterStage,o=n.state.filterTag;return!r&&!o?t:(t??[]).filter(l=>(!r||l.stage===r)&&(!o||(l.tags??[]).includes(o)))},renderToolbar:n=>{var a;const t=((a=n.props)==null?void 0:a.stages)??Ue,r=n.state.filterStage??"",o=n.state.filterTag??"",i=e.tagOptions??Array.from(new Set((n.rawData??n.data??[]).flatMap(s=>s.tags??[]))),l=!!(r||o);return u.jsxs("span",{style:{display:"inline-flex",gap:6,alignItems:"center"},children:[u.jsxs("select",{"aria-label":"按阶段筛选",value:r,onChange:s=>n.setState({filterStage:s.target.value||void 0}),style:Hu,children:[u.jsx("option",{value:"",children:"全部阶段"}),t.map(s=>u.jsx("option",{value:s.key,children:s.label},s.key))]}),i.length>0&&u.jsxs("select",{"aria-label":"按标签筛选",value:o,onChange:s=>n.setState({filterTag:s.target.value||void 0}),style:Hu,children:[u.jsx("option",{value:"",children:"全部标签"}),i.map(s=>u.jsx("option",{value:s,children:s},s))]}),l&&u.jsx("button",{type:"button",onClick:()=>n.setState({filterStage:void 0,filterTag:void 0}),style:K(!1),children:"清除筛选"})]},"filter")}}}),Hu={border:`1px solid ${k.lineStrong}`,borderRadius:6,fontSize:12,padding:"3px 6px",background:"#fff",color:k.text};ui.meta=rs;const Wv="Search",Hv="关键词搜索：工具栏搜索框（姓名/岗位/摘要/标签/来源），transformData 实时过滤看板，空关键词不过滤。",Vv="0.1.0",Kv=["search","renderToolbar","transformData"],Gv=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"搜索输入框"},{name:"transformData",when:"渲染前，关键词变化时重跑",description:"按 searchKeyword 匹配过滤"}],Qv=[],Yv="通过 ctx.setState({ searchKeyword }) 驱动",Xv=[{name:"fields",type:"('name'|'role'|'summary'|'tags'|'source')[]",default:"全部字段",description:"参与搜索的字段"}],Jv="withCandidatePlugins(CandidateCore, [createSearchPlugin({ fields: ['name', 'role'] })])",os={name:Wv,description:Hv,since:Vv,tags:Kv,events:Gv,methods:Qv,methodsNote:Yv,config:Xv,example:Jv};function Vu(e,n,t){const r=n.toLowerCase();for(const o of t){const i=e[o];if(typeof i=="string"&&i.toLowerCase().includes(r)||Array.isArray(i)&&i.some(l=>l.toLowerCase().includes(r)))return!0}return!1}const ci=(e={})=>{const n=e.fields??["name","role","summary","tags","source"],t=e.debounceMs??0;let r,o;return{name:"search",version:"0.1.0",description:os.description,priority:40,config:{order:40},hooks:{transformData:(i,l)=>{var c;const a=(c=i.state.searchKeyword)==null?void 0:c.trim();if(!t||a===r)return r=a,o&&(clearTimeout(o),o=void 0),a?(l??[]).filter(d=>Vu(d,a,n)):l;o&&clearTimeout(o),o=setTimeout(()=>{o=void 0,r=a,i.forceUpdate()},t);const s=r;return s?(l??[]).filter(d=>Vu(d,s,n)):l},renderToolbar:i=>{const l=i.state.searchKeyword??"";return u.jsx("span",{style:{display:"inline-flex",alignItems:"center"},children:u.jsx("input",{type:"search","aria-label":"搜索候选人",placeholder:"搜索姓名 / 岗位 / 标签…",value:l,onChange:a=>i.setState({searchKeyword:a.target.value||void 0}),style:{border:`1px solid ${k.lineStrong}`,borderRadius:6,fontSize:12,padding:"4px 8px",width:180,color:k.text,background:"#fff"}})},"search")}}}};ci.meta=os;const Zv="BatchOp",qv="批量操作：工具栏「批量」进入选择模式，卡片出现复选框，支持全选/清空/批量流转到指定阶段/批量归档。写操作逐条走 updateCandidate / moveCandidate。",e0="0.1.0",n0=["batch-op","renderToolbar","renderCardActions"],t0=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"批量开关与批量操作按钮组"},{name:"renderCardActions",when:"批量模式开启时",description:"卡片复选框"}],r0=["moveCandidate(id, delta)","updateCandidate(id, { stage | archived })"],o0=[{name:"targetStages",type:"StageConfig[]",default:"跟随核心阶段定义",description:"批量流转目标阶段"}],i0="withCandidatePlugins(CandidateCore, [createBatchOpPlugin()])",is={name:Zv,description:qv,since:e0,tags:n0,events:t0,methods:r0,config:o0,example:i0},di=(e={})=>({name:"batch-op",version:"0.1.0",description:is.description,priority:30,config:{order:30},hooks:{renderToolbar:n=>{var l;const t=!!n.state.batchMode,r=n.state.batchSelected??[],o=e.targetStages??((l=n.props)==null?void 0:l.stages)??Ue,i=(n.data??[]).filter(a=>!a.archived);return u.jsxs("span",{style:{display:"inline-flex",gap:6,alignItems:"center"},children:[u.jsx("button",{type:"button","aria-pressed":t,onClick:()=>n.setState({batchMode:!t,batchSelected:[]}),style:K(t),children:"批量"}),t&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button","aria-label":"全选当前候选人",onClick:()=>n.setState({batchSelected:i.map(a=>a.id)}),style:K(!1),children:"全选"}),u.jsx("button",{type:"button","aria-label":"清空选择",onClick:()=>n.setState({batchSelected:[]}),style:K(!1),children:"清空"}),u.jsxs("select",{"aria-label":"批量流转到阶段",value:"",disabled:r.length===0,onChange:a=>{const s=a.target.value;s&&(n.moveCandidatesTo(r,s),n.setState({batchSelected:[]}))},style:{...l0,...r.length===0?{color:k.faint}:{}},children:[u.jsxs("option",{value:"",children:["流转到…",r.length>0?`（已选 ${r.length}）`:""]}),o.map(a=>u.jsx("option",{value:a.key,children:a.label},a.key))]}),u.jsx("button",{type:"button",disabled:r.length===0,"aria-label":`归档已选 ${r.length} 位候选人`,onClick:()=>{n.updateCandidates(r.map(a=>({id:a,patch:{archived:!0}}))),n.setState({batchSelected:[]})},style:{...K(!1),...r.length===0?{color:k.faint,cursor:"not-allowed"}:{}},children:"归档"})]})]},"batch-op")},renderCardActions:(n,t)=>{if(!n.state.batchMode)return null;const r=n.state.batchSelected??[],o=r.includes(t.id);return u.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,color:k.muted},children:[u.jsx("input",{type:"checkbox",checked:o,"aria-label":`选择 ${t.name}`,onChange:()=>n.setState({batchSelected:o?r.filter(i=>i!==t.id):[...r,t.id]})}),"选择"]},"batch-check")}}}),l0={border:`1px solid ${k.lineStrong}`,borderRadius:6,fontSize:12,padding:"3px 6px",background:"#fff",color:k.text};di.meta=is;const a0="ViewSwitch",s0="看板/列表视图切换：工具栏互斥按钮切换 state.view，list 模式经 renderCards 内容覆盖槽渲染紧凑表格视图，kanban 模式回落核心默认看板。",u0="0.1.0",c0=["view-switch","renderToolbar","renderCards"],d0=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"看板/列表切换按钮组"},{name:"renderCards",when:"state.view 为 list 时",description:"渲染列表视图（覆盖默认看板）"}],f0=[],p0="通过 ctx.setState({ view }) 驱动",g0=[{name:"pageSize",type:"number",default:"0",description:"列表视图条数上限（0 = 不分页）"}],m0="withCandidatePlugins(CandidateCore, [createViewSwitchPlugin({ pageSize: 20 })])",ls={name:a0,description:s0,since:u0,tags:c0,events:d0,methods:f0,methodsNote:p0,config:g0,example:m0},as=(e={})=>{const n=e.pageSize??0;return{name:"view-switch",version:"0.1.0",description:ls.description,priority:70,config:{order:70},hooks:{renderToolbar:t=>{const r=t.state.view??"kanban";return u.jsxs("span",{style:{display:"inline-flex",gap:0},children:[u.jsx("button",{type:"button","aria-pressed":r==="kanban",onClick:()=>t.setState({view:"kanban"}),style:{...K(r==="kanban"),borderRadius:"6px 0 0 6px"},children:"看板"}),u.jsx("button",{type:"button","aria-pressed":r==="list",onClick:()=>t.setState({view:"list"}),style:{...K(r==="list"),borderRadius:"0 6px 6px 0",marginLeft:-1},children:"列表"})]},"view-switch")},renderCards:(t,r)=>{if((t.state.view??"kanban")!=="list")return null;const o=r.stages??Ue,i=a=>{var s;return((s=o.find(c=>c.key===a))==null?void 0:s.label)??a};let l=r.candidates;return n>0&&(l=l.slice(0,n)),u.jsxs("div",{role:"table","aria-label":"候选人列表视图",style:{border:`1px solid ${k.line}`,borderRadius:"var(--vcd-radius, 8px)",overflow:"hidden"},children:[u.jsxs("div",{role:"row",style:{display:"grid",gridTemplateColumns:"2fr 1.4fr 1fr 1fr",background:k.chipBg,fontSize:12,fontWeight:700,color:k.muted,padding:"6px 12px",gap:8},children:[u.jsx("span",{role:"columnheader",children:"候选人"}),u.jsx("span",{role:"columnheader",children:"阶段"}),u.jsx("span",{role:"columnheader",children:"来源"}),u.jsx("span",{role:"columnheader",children:"投递时间"})]}),l.map((a,s)=>{var d;const c=vn[((d=o.find(f=>f.key===a.stage))==null?void 0:d.tone)??"neutral"]??vn.neutral;return u.jsxs("div",{role:"row","data-candidate-id":a.id,style:{display:"grid",gridTemplateColumns:"2fr 1.4fr 1fr 1fr",padding:"8px 12px",gap:8,fontSize:13,borderTop:s===0?"none":`1px solid ${k.line}`,alignItems:"center"},children:[u.jsxs("span",{role:"cell",style:{color:k.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[u.jsx("strong",{children:a.name}),u.jsxs("span",{style:{color:k.muted},children:[" · ",a.role]})]}),u.jsx("span",{role:"cell",children:u.jsx("span",{style:{fontSize:11,fontWeight:700,color:c.fg,background:c.bg,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:i(a.stage)})}),u.jsx("span",{role:"cell",style:{color:k.muted,fontSize:12},children:a.source??"—"}),u.jsx("span",{role:"cell",style:{color:k.muted,fontSize:12},children:a.appliedAt??"—"})]},a.id)}),l.length===0&&u.jsx("div",{style:{padding:"12px",color:k.muted,fontSize:13},children:"暂无候选人"})]},"list-view")}}}};as.meta=ls;const h0="ArchivePool",y0="人才库归档池：transformData 把已归档候选人从主看板滤除，工具栏「人才库」浮层支持一键恢复，卡片操作区提供归档入口。",v0="0.1.0",x0=["archive-pool","transformData","renderToolbar","renderOverlay","renderCardActions"],S0=[{name:"transformData",when:"渲染前",description:"滤除 archived 候选人"},{name:"renderToolbar",when:"每次渲染，工具栏",description:"人才库入口（带归档计数）"},{name:"renderOverlay",when:"state.archivePoolOpen 时",description:"人才库浮层（恢复/查看）"},{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"归档按钮"}],w0=["updateCandidate(id, { archived })"],k0=[{name:"poolPageSize",type:"number",default:"0",description:"人才库浮层条数上限（0 = 不限制）"}],C0="withCandidatePlugins(CandidateCore, [createArchivePoolPlugin({ poolPageSize: 50 })])",ss={name:h0,description:y0,since:v0,tags:x0,events:S0,methods:w0,config:k0,example:C0},Nr=(e={})=>{const n=e.poolPageSize??0;return{name:"archive-pool",version:"0.1.0",description:ss.description,priority:50,config:{order:50},hooks:{transformData:(t,r)=>(r??[]).filter(o=>!o.archived),renderToolbar:t=>{var l;const o=(t.rawData??((l=t.props)==null?void 0:l.data)??[]).filter(a=>a.archived).length,i=!!t.state.archivePoolOpen;return u.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-expanded":i,onClick:()=>t.setState({archivePoolOpen:!i}),style:K(i),children:["人才库（",o,"）"]},"archive-pool")},renderOverlay:t=>{var a;if(!t.state.archivePoolOpen)return null;const o=(t.rawData??((a=t.props)==null?void 0:a.data)??[]).filter(s=>s.archived),i=n>0?o.slice(0,n):o,l=()=>t.setState({archivePoolOpen:!1});return u.jsx(Lt,{title:`人才库（${o.length}）`,onClose:l,width:420,zIndex:56,children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[i.length===0&&u.jsx("span",{style:{color:k.muted,fontSize:13},children:"人才库为空：在卡片或批量操作里归档候选人后会出现在这里。"}),i.map(s=>u.jsxs("div",{"data-candidate-id":s.id,style:{display:"flex",alignItems:"center",gap:8,border:`1px solid ${k.line}`,borderRadius:8,padding:"8px 10px",fontSize:13},children:[u.jsxs("span",{style:{color:k.text,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[u.jsx("strong",{children:s.name}),u.jsxs("span",{style:{color:k.muted},children:[" · ",s.role]})]}),u.jsx("button",{type:"button","aria-label":`恢复 ${s.name} 到看板`,onClick:()=>t.updateCandidate(s.id,{archived:!1}),style:K(!0),children:"恢复"})]},s.id))]})},"archive-pool-overlay")},renderCardActions:(t,r)=>u.jsx("button",{type:"button","aria-label":`归档 ${r.name} 到人才库`,onClick:()=>t.updateCandidate(r.id,{archived:!0}),style:P0,children:"归档"},"archive")}}},P0={border:`1px solid ${k.lineStrong}`,background:k.chipBg,color:k.chipText,borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer"};Nr.meta=ss;const _0="Export",b0="CSV 导出：工具栏按钮把当前看板数据（经筛选/排序管道后）导出为带 BOM 的 UTF-8 CSV，内置公式注入防护与阶段名翻译，列可扩展。",j0="0.1.0",E0=["export","renderToolbar"],T0=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"导出 CSV 按钮（点击触发 Blob 下载）"}],$0=[],N0="只读取 ctx.data，不调用上下文方法",O0=[{name:"filename",type:"string",default:"'candidates'",description:"导出文件名（自动带日期后缀）"},{name:"columns",type:"{header, get}[]",default:"内置 8 列",description:"额外导出列"}],R0="withCandidatePlugins(CandidateCore, [createExportPlugin({ filename: '候选人清单' })])",us={name:_0,description:b0,since:j0,tags:E0,events:T0,methods:$0,methodsNote:N0,config:O0,example:R0},D0=[{header:"姓名",get:e=>e.name},{header:"岗位",get:e=>e.role},{header:"阶段",get:e=>e.stage},{header:"匹配分",get:e=>e.score},{header:"邮箱",get:e=>e.email},{header:"手机号",get:e=>e.phone},{header:"来源",get:e=>e.source},{header:"投递时间",get:e=>e.appliedAt}];function L0(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=e,o.click(),URL.revokeObjectURL(r)}const fi=(e={})=>{const n=e.filename??"candidates";return{name:"export",version:"0.1.0",description:us.description,priority:60,config:{order:60},hooks:{renderToolbar:t=>{var o;const r=((o=t.props)==null?void 0:o.stages)??Ue;return u.jsx("button",{type:"button","aria-label":"导出候选人列表为 CSV",onClick:()=>{const i=t.data??[],l=[...D0,...e.columns??[]],a=c=>{var d;return((d=r.find(f=>f.key===c))==null?void 0:d.label)??c},s=[l.map(c=>Fu(c.header)).join(","),...i.map(c=>l.map(d=>Fu(d.header==="阶段"?a(c.stage):d.get(c))).join(","))];L0(`${n}-${new Date().toISOString().slice(0,10)}.csv`,s.join(`\r
`))},style:K(!1),children:"导出 CSV"},"export")}}}};fi.meta=us;const z0="Stats",M0="漏斗统计：页脚渲染各阶段人数占比条（tone 着色，aria 可读），列头显示计数徽章（可关）。纯统计，不改数据。",I0="0.1.0",A0=["stats","renderFooter","renderColumnHeader"],B0=[{name:"renderFooter",when:"每次渲染，页脚",description:"漏斗条形统计"},{name:"renderColumnHeader",when:"每次渲染，每列头部",description:"列内人数徽章"}],F0=[],U0="只读取 ctx.data 与 props.stages，不调用上下文方法",W0=[{name:"columnCount",type:"boolean",default:"true",description:"是否在列头显示计数徽章"}],H0="withCandidatePlugins(CandidateCore, [createStatsPlugin({ columnCount: false })])",cs={name:z0,description:M0,since:I0,tags:A0,events:B0,methods:F0,methodsNote:U0,config:W0,example:H0},pi=(e={})=>{const n=e.columnCount??!0;return{name:"stats",version:"0.1.0",description:cs.description,priority:10,config:{order:10},hooks:{renderColumnHeader:n?(t,r,o)=>u.jsx("span",{"aria-label":`${r.label} ${o} 人`,style:{fontSize:11,fontWeight:700,color:(vn[r.tone??"neutral"]??vn.neutral).fg,background:k.bg,border:`1px solid ${k.line}`,borderRadius:999,padding:"0 6px",lineHeight:"16px"},children:o},"col-count"):void 0,renderFooter:t=>{var l;const r=((l=t.props)==null?void 0:l.stages)??Ue,o=t.data??[],i=o.length;return i===0?null:u.jsxs("span",{role:"img","aria-label":`漏斗统计：共 ${i} 人，`+r.map(a=>`${a.label} ${o.filter(s=>s.stage===a.key).length} 人`).join("，"),style:{display:"inline-flex",alignItems:"center",gap:4,flexWrap:"wrap"},children:[u.jsx("span",{style:{fontSize:12,color:k.muted},children:"漏斗"}),r.map(a=>{const s=o.filter(d=>d.stage===a.key).length,c=vn[a.tone??"neutral"]??vn.neutral;return u.jsxs("span",{title:`${a.label}: ${s} 人`,style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700,color:c.fg,background:c.bg,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:[a.label,u.jsx("span",{style:{display:"inline-block",width:Math.max(s*4,2),height:8,borderRadius:4,background:c.fg},"aria-hidden":"true"}),s]},a.key)})]},"stats-funnel")}}}};pi.meta=cs;const V0="ActivityLog",K0="操作日志：汇总所有候选人的 history 动作（流转/备注等，写操作链路自动记录），按时间倒序在浮层展示，页脚提供入口（带总数）。",G0="0.1.0",Q0=["activity-log","renderFooter","renderOverlay"],Y0=[{name:"renderFooter",when:"每次渲染，页脚",description:"日志入口按钮（带总数）"},{name:"renderOverlay",when:"state.activityLogOpen 时",description:"日志时间线浮层"}],X0=[],J0="只读取 ctx.data 中各候选人的 history，不调用上下文方法",Z0=[{name:"maxEntries",type:"number",default:"100",description:"浮层最多展示条数"}],q0="withCandidatePlugins(CandidateCore, [createActivityLogPlugin({ maxEntries: 50 })])",ds={name:V0,description:K0,since:G0,tags:Q0,events:Y0,methods:X0,methodsNote:J0,config:Z0,example:q0},fs=(e={})=>{const n=e.maxEntries??100;return{name:"activity-log",version:"0.1.0",description:ds.description,priority:20,config:{order:20},hooks:{renderFooter:t=>{const r=Ku(t.data);return u.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-expanded":!!t.state.activityLogOpen,onClick:()=>t.setState({activityLogOpen:!t.state.activityLogOpen}),style:K(!!t.state.activityLogOpen),children:["操作日志（",r.length,"）"]},"activity-log")},renderOverlay:t=>{if(!t.state.activityLogOpen)return null;const r=Ku(t.data).slice(0,n),o=()=>t.setState({activityLogOpen:!1});return u.jsx(Lt,{title:"操作日志",onClose:o,width:400,zIndex:56,children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.length===0&&u.jsx("span",{style:{color:k.muted,fontSize:13},children:"暂无日志：流转、备注等操作会自动记录到候选人 history。"}),r.map((i,l)=>u.jsxs("div",{style:{display:"flex",gap:8,fontSize:13,alignItems:"baseline"},children:[u.jsx("span",{style:{color:k.faint,fontSize:12,flexShrink:0},children:i.at.slice(5,16).replace("T"," ")}),u.jsxs("span",{style:{color:k.text},children:[u.jsx("strong",{children:i.candidateName})," · ",i.action,i.detail?` → ${i.detail}`:""]})]},`${i.at}-${l}`))]})},"activity-log-overlay")}}}};function Ku(e){const n=[];for(const t of e??[])for(const r of t.history??[])n.push({...r,candidateName:t.name});return n.sort((t,r)=>t.at<r.at?1:-1)}fs.meta=ds;const ex="RecommendSort",nx="智能推荐排序：transformData 对候选人列表按匹配分（默认，同分按投递时间新在前）或投递时间排序，仅重排不增删。",tx="0.1.0",rx=["recommend-sort","transformData"],ox=[{name:"transformData",when:"渲染前，对列表排序",description:"score / fresh 两种排序模式，可升降序"}],ix=[],lx="只读取 candidate.score / appliedAt，不调用上下文方法",ax=[{name:"by",type:"'score' | 'fresh'",default:"'score'",description:"排序依据"},{name:"desc",type:"boolean",default:"true",description:"是否降序"}],sx="withCandidatePlugins(CandidateCore, [createRecommendSortPlugin({ by: 'fresh' })])",ps={name:ex,description:nx,since:tx,tags:rx,events:ox,methods:ix,methodsNote:lx,config:ax,example:sx};function qr(e){if(!e)return 0;const n=Date.parse(e);return Number.isNaN(n)?0:n}const Or=(e={})=>{const n=e.by??"score",t=e.desc??!0;return{name:"recommend-sort",version:"0.1.0",description:ps.description,priority:30,config:{order:30},hooks:{transformData:(r,o)=>{const i=[...o??[]],l=t?-1:1;return i.sort((a,s)=>{if(n==="score"){const c=a.score??-1,d=s.score??-1;return c!==d?(c-d)*l:(qr(a.appliedAt)-qr(s.appliedAt))*l}return(qr(a.appliedAt)-qr(s.appliedAt))*l}),i}}}};Or.meta=ps;const ux="ContactMask",cx="联系方式脱敏：transformData 把邮箱/手机号替换为掩码（138****5678 / a***c@example.com），指定阶段可豁免（招聘后期需完整联系方式）。数据管道末位执行，不影响排序。",dx="0.1.0",fx=["contact-mask","transformData"],px=[{name:"transformData",when:"渲染前，对联系方式脱敏",description:"email / phone 掩码化，visibleStages 豁免"}],gx=[],mx="只读取 candidate.email / phone / stage，不调用上下文方法",hx=[{name:"maskEmail",type:"boolean",default:"true",description:"是否脱敏邮箱"},{name:"maskPhone",type:"boolean",default:"true",description:"是否脱敏手机号"},{name:"visibleStages",type:"string[]",default:"[]",description:"免脱敏阶段 key 列表"}],yx="withCandidatePlugins(CandidateCore, [createContactMaskPlugin({ visibleStages: ['offer'] })])",gs={name:ux,description:cx,since:dx,tags:fx,events:px,methods:gx,methodsNote:mx,config:hx,example:yx},gi=(e={})=>{const n=e.maskEmail??!0,t=e.maskPhone??!0,r=e.visibleStages??[];return{name:"contact-mask",version:"0.1.0",description:gs.description,priority:10,config:{order:10},hooks:{transformData:(o,i)=>(i??[]).map(a=>{if(r.includes(a.stage))return a;const s={...a};return n&&(s.email=Yh(a.email)),t&&(s.phone=Qh(a.phone)),s})}}};gi.meta=gs;const Wi=(e,n="")=>e===void 0?n:String(e),vx={ScorePlugin:e=>$r({goodThreshold:Number(e.goodThreshold??80),warnThreshold:Number(e.warnThreshold??60)}),DupCheckPlugin:()=>Qa({fields:["name","email","phone"]}),TagPlugin:e=>ii({suggestTags:["重点","备选","急招","内推"],maxTags:Number(e.maxTags??8)}),OfferPlugin:()=>Ja(),StarPlugin:e=>li({pinTop:e.pinTop!==!1}),StageFlowPlugin:e=>Dt({step:Number(e.step??1),allowBackward:e.allowBackward!==!1}),NotePlugin:e=>ai({authorName:Wi(e.author,"演示 HR")}),InterviewSlotPlugin:()=>ns({slots:["周二 14:00","周三 10:00","周四 16:00"],interviewers:["王工","李总监"],modes:["onsite","video"]}),RejectTplPlugin:()=>si({targetStage:"rejected"}),FilterPlugin:()=>ui(),SearchPlugin:()=>ci(),BatchOpPlugin:()=>di(),ViewSwitchPlugin:e=>as({pageSize:Number(e.pageSize??0)}),ArchivePoolPlugin:()=>Nr(),ExportPlugin:e=>fi({filename:Wi(e.filename,"vane-candidates")}),StatsPlugin:e=>pi({columnCount:e.columnCount!==!1}),ActivityLogPlugin:e=>fs({maxEntries:Number(e.maxEntries??20)}),RecommendSortPlugin:e=>Or({by:Wi(e.by,"score")==="fresh"?"fresh":"score",desc:e.desc!==!1}),ContactMaskPlugin:e=>gi({maskEmail:e.maskEmail!==!1,maskPhone:e.maskPhone!==!1})};function ae(e){const n=vx[e];if(!n)throw new Error(`未注册的示例插件：${e}`);return function({cfg:r}){const o=v.useMemo(()=>nt(Ln,[n(r)]),[JSON.stringify(r)]);return u.jsx(o,{data:Mn,stages:zn,containerStyle:{maxWidth:1120}})}}const xx={slug:"score",title:"匹配分徽章",group:"badge",plugin:"ScorePlugin",intro:"候选人卡片右上角的 0-100 匹配分胶囊，按阈值着色（优秀绿 / 待定橙 / 偏低红）。",why:"刷简历时第一眼先看匹配度，分数颜色把「优先看谁」编码进视觉层。",plugs:[{fn:"createScorePlugin",cfg:"{ goodThreshold: {{goodThreshold}}, warnThreshold: 60 }",why:"纯展示不改数据：只读 candidate.score，按阈值着色。"}],props:[],controls:[{key:"goodThreshold",label:"优秀阈值",kind:"number",init:80,min:50,max:95,step:5}],note:"score 缺省的候选人不渲染徽章；阈值只影响颜色分界，不改排序。"},Sx=ae("ScorePlugin"),wx=Object.freeze(Object.defineProperty({__proto__:null,default:Sx,meta:xx},Symbol.toStringTag,{value:"Module"})),kx={slug:"dup-check",title:"重复候选人检测",group:"badge",plugin:"DupCheckPlugin",intro:"扫描同名 / 同邮箱 / 同手机号的投递，命中者在卡片徽章区挂「疑似重复」警示。",why:"候选人重复投递很常见（内推 + 海投同时进行），合并档案前先标记出来。",plugs:[{fn:"createDupCheckPlugin",cfg:'{ fields: ["name", "email", "phone"] }',why:"用 signature map 两两比对，任何字段命中即双方都挂警示。"}],props:[],note:"样例里 c-001 与 c-010 同名同邮箱同手机号 —— 两张卡都会出现「疑似重复」。"},Cx=ae("DupCheckPlugin"),Px=Object.freeze(Object.defineProperty({__proto__:null,default:Cx,meta:kx},Symbol.toStringTag,{value:"Module"})),_x={slug:"tags",title:"候选人标签",group:"badge",plugin:"TagPlugin",intro:"标签 chips 展示 + 管理浮层：点卡片上的「标签」按钮即可添加 / 删除，写回 candidate.tags。",why:"「重点 / 备选 / 急招」这类人工标记是筛选插件的数据源，先给卡片打上标签。",plugs:[{fn:"createTagPlugin",cfg:'{ suggestTags: ["重点", "备选", "急招", "内推"], maxTags: {{maxTags}} }',why:"快捷标签一键添加；超过 3 个折叠成 +N，点管理浮层看全量。"}],props:[],controls:[{key:"maxTags",label:"最多标签数",kind:"number",init:8,min:3,max:12,step:1}],note:"写操作走 ctx.updateCandidate，装配层自动落内部态并追加 history。"},bx=ae("TagPlugin"),jx=Object.freeze(Object.defineProperty({__proto__:null,default:bx,meta:_x},Symbol.toStringTag,{value:"Module"})),Ex={slug:"offer",title:"Offer 状态徽章",group:"badge",plugin:"OfferPlugin",intro:"candidate.offer 存在时显示状态胶囊：审批中灰 / 已发出蓝 / 已接受绿 / 已婉拒红。",why:"Offer 阶段的候选人需要和普通候选人区分开，薪资信息藏在悬停提示里不占版面。",plugs:[{fn:"createOfferPlugin",cfg:"{}",why:"纯展示插件：四态配色内置，labels 可整体替换文案。"}],props:[],note:"样例里 c-002（已发出）与 c-007（已接受）会挂徽章；没有 offer 字段的卡片不受影响。"},Tx=ae("OfferPlugin"),$x=Object.freeze(Object.defineProperty({__proto__:null,default:Tx,meta:Ex},Symbol.toStringTag,{value:"Module"})),Nx={slug:"star",title:"星标收藏",group:"action",plugin:"StarPlugin",intro:"卡片操作区 ☆/★ 一键切换，pinTop 开启时星标候选人置顶到各自阶段列最前。",why:"挑出「今晚要再聊一轮」的人：星标是最轻量的关注动作。",plugs:[{fn:"createStarPlugin",cfg:"{ pinTop: {{pinTop}} }",why:"置顶经 transformData 实现，只影响展示顺序，不动数据。"}],props:[],controls:[{key:"pinTop",label:"星标置顶",kind:"switch",init:!0}],note:"关掉置顶后星标只改颜色不重排 —— 适合「保留顺序感」的团队习惯。"},Ox=ae("StarPlugin"),Rx=Object.freeze(Object.defineProperty({__proto__:null,default:Ox,meta:Nx},Symbol.toStringTag,{value:"Module"})),Dx={slug:"stage-flow",title:"阶段流转",group:"action",plugin:"StageFlowPlugin",intro:"卡片操作区「◀ 推进 ▶」，候选人沿阶段列流转；边界阶段自动禁用对应方向。",why:"ATS 最核心的动作：把「筛过 → 约面 → 发 offer」变成一次点击。",plugs:[{fn:"createStageFlowPlugin",cfg:"{ step: {{step}}, allowBackward: {{allowBackward}} }",why:"经 ctx.moveCandidate 流转，装配层自动追加 history 并广播 candidate:change。"}],props:[],controls:[{key:"step",label:"步长",kind:"number",init:1,min:1,max:2,step:1},{key:"allowBackward",label:"允许回退",kind:"switch",init:!0}],note:"流转只改 stage 字段；history 由装配层统一写，ActivityLog 插件读它做时间线。"},Gu=Mn.slice(0,5);function Lx({cfg:e,log:n}){const t=Number(e.step??1),r=e.allowBackward!==!1,o=v.useMemo(()=>nt(Ln,[Dt({step:t,allowBackward:r})]),[t,r]),i=v.useRef(new Map(Gu.map(a=>[a.id,a.stage]))),l=v.useCallback(a=>{for(const s of a){const c=i.current.get(s.id);c&&c!==s.stage&&n(`${s.name}：${c} → ${s.stage}`),i.current.set(s.id,s.stage)}},[n]);return u.jsx(o,{data:Gu,stages:zn,containerStyle:{maxWidth:1120},onDataChange:l})}const zx=Object.freeze(Object.defineProperty({__proto__:null,default:Lx,meta:Dx},Symbol.toStringTag,{value:"Module"})),Mx={slug:"note",title:"招聘备注",group:"action",plugin:"NotePlugin",intro:"卡片操作区「备注 (n)」按钮打开浮层：查看 / 新增 / 删除沟通记录，写回 candidate.notes。",why:"电话沟通后的结论必须留在候选人身上，否则下一个面试官要重新踩坑。",plugs:[{fn:"createNotePlugin",cfg:'{ authorName: "{{author}}" }',why:"新增备注自动署名 + 记时间；maxNotes 控制每人最多保留条数。"}],props:[],controls:[{key:"author",label:"备注署名",kind:"select",init:"演示 HR",options:[{label:"演示 HR",value:"演示 HR"},{label:"张HR",value:"张HR"},{label:"面试官",value:"面试官"}]}],note:"样例里陈知远已有一条备注；所有插件写入的备注 author 相同即可删（演示语义）。"},Ix=ae("NotePlugin"),Ax=Object.freeze(Object.defineProperty({__proto__:null,default:Ix,meta:Mx},Symbol.toStringTag,{value:"Module"})),Bx={slug:"interview-slot",title:"面试安排",group:"action",plugin:"InterviewSlotPlugin",intro:"「安排面试」入口打开浮层：从时间槽 / 面试官 / 形式中点选保存到 candidate.interview。",why:"约面是高频且琐碎的动作：可选项收敛成按钮，点两下完成，不用手填表单。",plugs:[{fn:"createInterviewSlotPlugin",cfg:'{ slots: ["周二 14:00", "周三 10:00", "周四 16:00"], interviewers: ["王工", "李总监"], modes: ["onsite", "video"] }',why:"已安排的卡片正文出现 📅 面试信息条；再次点按钮是「改期」。"}],props:[],note:"保存经 ctx.updateCandidate；「取消面试安排」把 interview 字段清回 undefined。"},Fx=ae("InterviewSlotPlugin"),Ux=Object.freeze(Object.defineProperty({__proto__:null,default:Fx,meta:Bx},Symbol.toStringTag,{value:"Module"})),Wx={slug:"reject-tpl",title:"婉拒模板",group:"action",plugin:"RejectTplPlugin",intro:"「婉拒」入口打开浮层：选模板 → 预览编辑 → 确认后候选人流转到 rejected。",why:"婉拒信一天要发几十封：模板 + 一处编辑框比邮件客户端快得多。",plugs:[{fn:"createRejectTplPlugin",cfg:'{ targetStage: "rejected" }',why:"确认婉拒直接把 stage 写到目标阶段（自动留 history），不依赖相邻阶段。"}],props:[],note:"templates 可整体替换内置模板；文案里支持 {{gap}} 这类占位（模板自身的约定）。"},Hx=ae("RejectTplPlugin"),Vx=Object.freeze(Object.defineProperty({__proto__:null,default:Hx,meta:Wx},Symbol.toStringTag,{value:"Module"})),Kx={slug:"filter",title:"阶段 / 标签筛选",group:"toolbar",plugin:"FilterPlugin",intro:"工具栏两个下拉：按阶段、按标签过滤看板；有筛选时出现「清除筛选」。",why:"候选人一多，先按阶段或标签缩小范围再逐张看，是每天的第一次点击。",plugs:[{fn:"createFilterPlugin",cfg:"{}",why:"筛选状态写 ctx.state，transformData 按状态过滤 —— 只过滤展示，不删数据。"}],props:[],note:"标签选项默认从当前数据收集，也可用 tagOptions 配置固定集合。"},Gx=ae("FilterPlugin"),Qx=Object.freeze(Object.defineProperty({__proto__:null,default:Gx,meta:Kx},Symbol.toStringTag,{value:"Module"})),Yx={slug:"search",title:"关键词搜索",group:"toolbar",plugin:"SearchPlugin",intro:"工具栏搜索框：姓名 / 岗位 / 摘要 / 标签 / 来源任一字段命中即保留。",why:"「上次那个做过可视化的叫什么来着」—— 搜索比翻列快。",plugs:[{fn:"createSearchPlugin",cfg:"{}",why:"非受控输入 + onChange 写 ctx.state.searchKeyword，transformData 立即过滤。"}],props:[],note:"fields 可收窄参与搜索的字段（比如只搜姓名，避免摘要噪音）。"},Xx=ae("SearchPlugin"),Jx=Object.freeze(Object.defineProperty({__proto__:null,default:Xx,meta:Yx},Symbol.toStringTag,{value:"Module"})),Zx={slug:"batch-op",title:"批量操作",group:"toolbar",plugin:"BatchOpPlugin",intro:"工具栏「批量」开关进入选择模式：卡片出现复选框，支持全选 / 清空 / 批量流转 / 批量归档。",why:"一个批次 30 份简历都过了初筛，逐张点推进会把人点废。",plugs:[{fn:"createBatchOpPlugin",cfg:"{}",why:"选择集放 ctx.state.batchSelected；批量流转按阶段序号差值调 ctx.moveCandidate。"}],props:[],note:"批量归档只写 archived 标记 —— 看板上消失需要配合 ArchivePool 插件（见场景页）。"},qx=ae("BatchOpPlugin"),e1=Object.freeze(Object.defineProperty({__proto__:null,default:qx,meta:Zx},Symbol.toStringTag,{value:"Module"})),n1={slug:"view-switch",title:"看板 / 列表切换",group:"toolbar",plugin:"ViewSwitchPlugin",intro:"工具栏互斥按钮切换视图：列表模式由 renderCards 内容覆盖槽整体接管渲染。",why:"看板适合「看分布」，列表适合「快速过一遍」—— 同一份数据两种密度。",plugs:[{fn:"createViewSwitchPlugin",cfg:"{ pageSize: {{pageSize}} }",why:"kanban 模式返回 null 回落核心默认看板；list 模式渲染紧凑表格，pageSize 可截断。"}],props:[],controls:[{key:"pageSize",label:"每页条数",kind:"number",init:0,min:0,max:12,step:1,hint:"0 = 不分页"}],note:"内容覆盖槽是「单值槽」：多个插件都实现 renderCards 时最高 priority 胜出。"},t1=ae("ViewSwitchPlugin"),r1=Object.freeze(Object.defineProperty({__proto__:null,default:t1,meta:n1},Symbol.toStringTag,{value:"Module"})),o1={slug:"archive-pool",title:"人才库归档池",group:"toolbar",plugin:"ArchivePoolPlugin",intro:"归档的候选人从主看板消失，进「人才库」浮层；可一键恢复回看板。",why:"暂无匹配岗位的好候选人不能丢 —— 归档是「冷藏」不是「删除」。",plugs:[{fn:"createArchivePoolPlugin",cfg:"{}",why:"transformData 把 archived 候选人滤出主看板；工具栏入口带实时计数。"}],props:[],note:"本页是受控模式：onDataChange 把新列表回写宿主，人才库计数才能实时反映刚归档的人。"};function i1({log:e}){const[n,t]=v.useState(Mn),r=v.useMemo(()=>nt(Ln,[Nr()]),[]),o=v.useCallback(i=>{t(i);const l=i.filter(s=>!s.archived).length,a=i.filter(s=>s.archived).length;e(`看板 ${l} 人 · 人才库 ${a} 人`)},[e]);return u.jsx(r,{data:n,stages:zn,containerStyle:{maxWidth:1120},onDataChange:o})}const l1=Object.freeze(Object.defineProperty({__proto__:null,default:i1,meta:o1},Symbol.toStringTag,{value:"Module"})),a1={slug:"export",title:"CSV 导出",group:"toolbar",plugin:"ExportPlugin",intro:"工具栏「导出 CSV」：把当前看板数据（经筛选 / 排序管道后）按列导出，带 BOM。",why:"周报要附件、老板要表格：导出的是管道末态，所见即所得。",plugs:[{fn:"createExportPlugin",cfg:'{ filename: "{{filename}}" }',why:"内置 8 列（姓名 / 岗位 / 阶段 / 匹配分 / 邮箱 / 手机号 / 来源 / 投递时间），columns 可追加。"}],props:[],controls:[{key:"filename",label:"文件名",kind:"select",init:"vane-candidates",options:[{label:"vane-candidates",value:"vane-candidates"},{label:"interview-week",value:"interview-week"}]}],note:"csvCell 做了公式注入防护（= + - @ 开头会被前置单引号）；日期后缀自动拼接。"},s1=ae("ExportPlugin"),u1=Object.freeze(Object.defineProperty({__proto__:null,default:s1,meta:a1},Symbol.toStringTag,{value:"Module"})),c1={slug:"stats",title:"漏斗统计",group:"pipeline",plugin:"StatsPlugin",intro:"页脚各阶段人数占比条形图 + 列头计数徽章，转化漏斗一眼可读。",why:"每周复盘「卡在哪个阶段」：漏斗形态比数字表直觉得多。",plugs:[{fn:"createStatsPlugin",cfg:"{ columnCount: {{columnCount}} }",why:"renderFooter 画漏斗（纯只读）；renderColumnHeader 在每列头部挂人数徽章。"}],props:[],controls:[{key:"columnCount",label:"列头计数",kind:"switch",init:!0}],note:"统计基于 ctx.data（管道末态）—— 配合筛选插件时，漏斗反映的是筛选后的世界。"},d1=ae("StatsPlugin"),f1=Object.freeze(Object.defineProperty({__proto__:null,default:d1,meta:c1},Symbol.toStringTag,{value:"Module"})),p1={slug:"activity-log",title:"操作日志",group:"pipeline",plugin:"ActivityLogPlugin",intro:"汇总所有候选人的 history（流转 / 备注等），按时间倒序在浮层展示，页脚提供入口。",why:"「这简历上周谁推进的？」—— 审计与交接时，时间线比记忆可靠。",plugs:[{fn:"createActivityLogPlugin",cfg:"{ maxEntries: {{maxEntries}} }",why:"只读插件：日志由写操作插件经 updateCandidate / moveCandidate 链路自动记录。"}],props:[],controls:[{key:"maxEntries",label:"展示条数",kind:"number",init:20,min:5,max:50,step:5}],note:"样例里 c-001 / c-008 / c-002 自带 history；先去推一张卡再打开日志，能看到新记录。"},g1=ae("ActivityLogPlugin"),m1=Object.freeze(Object.defineProperty({__proto__:null,default:g1,meta:p1},Symbol.toStringTag,{value:"Module"})),h1={slug:"recommend-sort",title:"智能推荐排序",group:"pipeline",plugin:"RecommendSortPlugin",intro:"transformData 对列表排序：score 模式按匹配分（同分按投递时间新在前），fresh 模式按投递时间。",why:"先看分高的、再看新投的 —— 排序插件把「先看谁」这个决定交给数据。",plugs:[{fn:"createRecommendSortPlugin",cfg:'{ by: "{{by}}", desc: {{desc}} }',why:"只重排顺序不改数据；归档过滤交给 ArchivePool，本插件不关心。"}],props:[],controls:[{key:"by",label:"排序依据",kind:"select",init:"score",options:[{label:"匹配分",value:"score"},{label:"投递时间",value:"fresh"}]},{key:"desc",label:"降序",kind:"switch",init:!0}],note:"切换「投递时间」后，applied 列首卡从 81 分的郑星野换成 11-02 投递的同分选手。"},y1=ae("RecommendSortPlugin"),v1=Object.freeze(Object.defineProperty({__proto__:null,default:y1,meta:h1},Symbol.toStringTag,{value:"Module"})),x1={slug:"contact-mask",title:"联系方式脱敏",group:"pipeline",plugin:"ContactMaskPlugin",intro:"把邮箱 / 手机号替换为掩码（138****5678 / a***c@example.com），指定阶段可豁免。",why:"简历池一旦外流，联系方式就是核心资产 —— 默认脱敏是合规底线。",plugs:[{fn:"createContactMaskPlugin",cfg:"{ maskEmail: {{maskEmail}}, maskPhone: {{maskPhone}} }",why:"transformData 管道末位执行（priority 10），保证排序仍用原始数据。"}],props:[],controls:[{key:"maskEmail",label:"脱敏邮箱",kind:"switch",init:!0},{key:"maskPhone",label:"脱敏手机",kind:"switch",init:!0}],note:"visibleStages 可豁免后期阶段（如 offer / hired 需要完整联系方式去约人）。"},S1=ae("ContactMaskPlugin"),w1=Object.freeze(Object.defineProperty({__proto__:null,default:S1,meta:x1},Symbol.toStringTag,{value:"Module"})),k1=`import React from "react";
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
`,C1=`import { makeStage } from "./_factory";
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
`,P1=`import { makeStage } from "./_factory";
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
`,_1=`import { makeStage } from "./_factory";
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
`,b1=`import { makeStage } from "./_factory";
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
`,j1=`import { makeStage } from "./_factory";
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
`,E1=`import React, { useCallback, useMemo, useRef } from "react";
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
`,T1=`import { makeStage } from "./_factory";
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
`,$1=`import { makeStage } from "./_factory";
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
`,N1=`import { makeStage } from "./_factory";
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
`,O1=`import { makeStage } from "./_factory";
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
`,R1=`import { makeStage } from "./_factory";
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
`,D1=`import { makeStage } from "./_factory";
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
`,L1=`import { makeStage } from "./_factory";
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
`,z1=`import React, { useCallback, useMemo, useState } from "react";
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
`,M1=`import { makeStage } from "./_factory";
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
`,I1=`import { makeStage } from "./_factory";
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
`,A1=`import { makeStage } from "./_factory";
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
`,B1=`import { makeStage } from "./_factory";
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
`,F1=`import { makeStage } from "./_factory";
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
`,U1=Object.assign({"./00-basic.tsx":Sy,"./01-score.tsx":wx,"./02-dup-check.tsx":Px,"./03-tags.tsx":jx,"./04-offer.tsx":$x,"./05-star.tsx":Rx,"./06-stage-flow.tsx":zx,"./07-note.tsx":Ax,"./08-interview-slot.tsx":Ux,"./09-reject-tpl.tsx":Vx,"./10-filter.tsx":Qx,"./11-search.tsx":Jx,"./12-batch-op.tsx":e1,"./13-view-switch.tsx":r1,"./14-archive-pool.tsx":l1,"./15-export.tsx":u1,"./16-stats.tsx":f1,"./17-activity-log.tsx":m1,"./18-recommend-sort.tsx":v1,"./19-contact-mask.tsx":w1}),W1=Object.assign({"./00-basic.tsx":k1,"./01-score.tsx":C1,"./02-dup-check.tsx":P1,"./03-tags.tsx":_1,"./04-offer.tsx":b1,"./05-star.tsx":j1,"./06-stage-flow.tsx":E1,"./07-note.tsx":T1,"./08-interview-slot.tsx":$1,"./09-reject-tpl.tsx":N1,"./10-filter.tsx":O1,"./11-search.tsx":R1,"./12-batch-op.tsx":D1,"./13-view-switch.tsx":L1,"./14-archive-pool.tsx":z1,"./15-export.tsx":M1,"./16-stats.tsx":I1,"./17-activity-log.tsx":A1,"./18-recommend-sort.tsx":B1,"./19-contact-mask.tsx":F1}),H1=e=>e.replace(/^\.\//,""),Ul=Object.entries(U1).map(([e,n])=>{const t=H1(e);return{meta:n.meta,Stage:n.default,file:t,source:W1[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),V1=Array.from(new Set(Ul.map(e=>e.meta.group))),Wl={basic:{label:"基础装配",hint:"内核 + 最小插件链"},badge:{label:"徽章与标记",hint:"卡片上的信息密度"},action:{label:"动作与浮层",hint:"卡片操作区与弹层"},toolbar:{label:"工具栏与视图",hint:"筛 / 搜 / 批量 / 视图 / 导出"},pipeline:{label:"管道与统计",hint:"transformData 与只读面板"}};function Qu(e){const n={};for(const t of e.controls??[])n[t.key]=t.init;return n}const K1=`import type { PluginDoc } from "vane-plugin-core";
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
`,G1=`import type { PluginDoc } from "vane-plugin-core";
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
`,Q1=`import type { PluginDoc } from "vane-plugin-core";
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
`,Y1=`import type { PluginDoc } from "vane-plugin-core";
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
`,X1=`import type { PluginDoc } from "vane-plugin-core";
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
`,J1=`import type { PluginDoc } from "vane-plugin-core";
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
`,Z1=`import type { PluginDoc } from "vane-plugin-core";
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
`,q1=`import type { PluginDoc } from "vane-plugin-core";
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
`,eS=`import type { PluginDoc } from "vane-plugin-core";
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
`,nS=`import type { PluginDoc } from "vane-plugin-core";
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
`,tS=`import type { PluginDoc } from "vane-plugin-core";
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
`,rS=`import type { PluginDoc } from "vane-plugin-core";
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
`,oS=`import type { PluginDoc } from "vane-plugin-core";
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
`,iS=`import type { PluginDoc } from "vane-plugin-core";
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
`,lS=`import type { PluginDoc } from "vane-plugin-core";
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
`,aS=`import type { PluginDoc } from "vane-plugin-core";
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
`,sS=`import type { PluginDoc } from "vane-plugin-core";
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
`,uS=`import React from "react";
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
`,cS=`import type { PluginDoc } from "vane-plugin-core";
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
`,tw={badge:"徽章与标记",action:"动作与浮层",toolbar:"工具栏与视图",pipeline:"管道与统计"},Yu=["badge","action","toolbar","pipeline"],Xu=Object.assign({"/src/custom-plugins/ActivityLogPlugin/doc.json":ds,"/src/custom-plugins/ArchivePoolPlugin/doc.json":ss,"/src/custom-plugins/BatchOpPlugin/doc.json":is,"/src/custom-plugins/ContactMaskPlugin/doc.json":gs,"/src/custom-plugins/DupCheckPlugin/doc.json":Ga,"/src/custom-plugins/ExportPlugin/doc.json":us,"/src/custom-plugins/FilterPlugin/doc.json":rs,"/src/custom-plugins/InterviewSlotPlugin/doc.json":es,"/src/custom-plugins/NotePlugin/doc.json":qa,"/src/custom-plugins/OfferPlugin/doc.json":Xa,"/src/custom-plugins/RecommendSortPlugin/doc.json":ps,"/src/custom-plugins/RejectTplPlugin/doc.json":ts,"/src/custom-plugins/ScorePlugin/doc.json":Va,"/src/custom-plugins/SearchPlugin/doc.json":os,"/src/custom-plugins/StageFlowPlugin/doc.json":Ka,"/src/custom-plugins/StarPlugin/doc.json":Za,"/src/custom-plugins/StatsPlugin/doc.json":cs,"/src/custom-plugins/TagPlugin/doc.json":Ya,"/src/custom-plugins/ViewSwitchPlugin/doc.json":ls}),Ju=Object.assign({"/src/custom-plugins/ActivityLogPlugin/create.tsx":K1,"/src/custom-plugins/ArchivePoolPlugin/create.tsx":G1,"/src/custom-plugins/BatchOpPlugin/create.tsx":Q1,"/src/custom-plugins/ContactMaskPlugin/create.tsx":Y1,"/src/custom-plugins/DupCheckPlugin/create.tsx":X1,"/src/custom-plugins/ExportPlugin/create.tsx":J1,"/src/custom-plugins/FilterPlugin/create.tsx":Z1,"/src/custom-plugins/InterviewSlotPlugin/create.tsx":q1,"/src/custom-plugins/NotePlugin/create.tsx":eS,"/src/custom-plugins/OfferPlugin/create.tsx":nS,"/src/custom-plugins/RecommendSortPlugin/create.tsx":tS,"/src/custom-plugins/RejectTplPlugin/create.tsx":rS,"/src/custom-plugins/ScorePlugin/create.tsx":oS,"/src/custom-plugins/SearchPlugin/create.tsx":iS,"/src/custom-plugins/StageFlowPlugin/create.tsx":lS,"/src/custom-plugins/StarPlugin/create.tsx":aS,"/src/custom-plugins/StatsPlugin/create.tsx":sS,"/src/custom-plugins/TagPlugin/create.tsx":uS,"/src/custom-plugins/ViewSwitchPlugin/create.tsx":cS}),Rf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function dS(e){const n=Object.keys(Ju).find(o=>Rf(o)===e),t=n?Ju[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function fS(e){const n=Object.keys(Xu).find(t=>Rf(t)===e);return n?Xu[n]:{name:e,description:"（缺少 doc.json）"}}const pS=[{dir:"ScorePlugin",group:"badge",make:()=>$r({goodThreshold:80})},{dir:"DupCheckPlugin",group:"badge",make:()=>Qa({})},{dir:"TagPlugin",group:"badge",make:()=>ii({suggestTags:["重点","备选","急招","内推"]})},{dir:"OfferPlugin",group:"badge",make:()=>Ja()},{dir:"StarPlugin",group:"action",make:()=>li({pinTop:!0})},{dir:"StageFlowPlugin",group:"action",make:()=>Dt({step:1})},{dir:"NotePlugin",group:"action",make:()=>ai({authorName:"演示 HR"})},{dir:"InterviewSlotPlugin",group:"action",make:()=>ns({slots:["周二 14:00","周三 10:00","周四 16:00"],interviewers:["王工","李总监"],modes:["onsite","video"]})},{dir:"RejectTplPlugin",group:"action",make:()=>si({})},{dir:"FilterPlugin",group:"toolbar",make:()=>ui()},{dir:"SearchPlugin",group:"toolbar",make:()=>ci()},{dir:"BatchOpPlugin",group:"toolbar",make:()=>di()},{dir:"ViewSwitchPlugin",group:"toolbar",make:()=>as({pageSize:0})},{dir:"ArchivePoolPlugin",group:"toolbar",make:()=>Nr()},{dir:"ExportPlugin",group:"toolbar",make:()=>fi({filename:"vane-candidates"})},{dir:"StatsPlugin",group:"pipeline",make:()=>pi({columnCount:!0})},{dir:"ActivityLogPlugin",group:"pipeline",make:()=>fs({maxEntries:50})},{dir:"RecommendSortPlugin",group:"pipeline",make:()=>Or({by:"score",desc:!0})},{dir:"ContactMaskPlugin",group:"pipeline",make:()=>gi({maskEmail:!0,maskPhone:!0})}],Hl=pS.map(e=>{const n=fS(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:dS(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>Yu.indexOf(e.group)-Yu.indexOf(n.group)||n.priority-e.priority),gS={id:"daily-review",title:"日常刷简历",group:"日常运营",ref:{label:"对标 内推日常盘点",url:"https://developer.mozilla.org/"},pain:"每天早上要过一遍新投递：先看谁分高，看完写两笔备注，顺手把能推进的推进 —— 四个动作要一气呵成。",plugs:[{fn:"createRecommendSortPlugin",cfg:'{ by: "score", desc: true }',why:"匹配分高的排在各列最前，打开看板就知道先聊谁。"},{fn:"createScorePlugin",cfg:"{}",why:"分数胶囊按阈值着色，红橙绿把优先级编码进视觉。"},{fn:"createStageFlowPlugin",cfg:"{}",why:"看完直接点 ▶ 推进到下一阶段，history 自动记录。"},{fn:"createNotePlugin",cfg:'{ authorName: "张HR" }',why:"电话沟通结论落到候选人身上，浮层两步完成。"}],props:[],note:"排序经 transformData 只影响列内顺序；推进 / 备注由装配层落内部态，宿主可用 onDataChange 持久化。"};function mS(){const e=v.useMemo(()=>nt(Ln,[Or({by:"score",desc:!0}),$r(),Dt(),ai({authorName:"张HR"})]),[]);return u.jsx(e,{data:Mn,stages:zn,containerStyle:{minWidth:1180}})}const hS=Object.freeze(Object.defineProperty({__proto__:null,default:mS,meta:gS},Symbol.toStringTag,{value:"Module"})),yS={id:"screening-day",title:"HR 筛选日",group:"筛选冲刺",ref:{label:"对标 集中筛简历场景",url:"https://developer.mozilla.org/"},pain:"周末要清完 100+ 投递：先搜关键词、再按阶段过滤，过线的批量推进，不合适的套模板婉拒。",plugs:[{fn:"createSearchPlugin",cfg:"{}",why:"关键词同时匹配姓名 / 岗位 / 标签 / 来源，先缩小战场。"},{fn:"createFilterPlugin",cfg:"{}",why:"阶段 / 标签下拉精确过滤，只看「已投递」这一层。"},{fn:"createBatchOpPlugin",cfg:"{}",why:"批量模式全选后一键流转到「筛选中」，免去逐张点击。"},{fn:"createRejectTplPlugin",cfg:"{}",why:"不合适的套内置模板婉拒，确认后直接流转到 rejected。"},{fn:"createRecommendSortPlugin",cfg:'{ by: "fresh", desc: true }',why:"按投递时间降序，先处理新鲜的、过期的放后面。"}],props:[],note:"批量归档只写 archived 标记；要让看板上消失需配合 ArchivePool —— 见「人才库复盘」场景。"};function vS(){const e=v.useMemo(()=>nt(Ln,[Or({by:"fresh",desc:!0}),ci(),ui(),di(),si()]),[]);return u.jsx(e,{data:Mn,stages:zn,containerStyle:{minWidth:1180}})}const xS=Object.freeze(Object.defineProperty({__proto__:null,default:vS,meta:yS},Symbol.toStringTag,{value:"Module"})),SS={id:"talent-pool",title:"人才库复盘",group:"季度复盘",ref:{label:"对标 人才库季度盘点",url:"https://developer.mozilla.org/"},pain:"季度末盘点人才库：把好苗子星标 + 打标签，联系方式默认脱敏，最后导出一份给老板、看一眼漏斗。",plugs:[{fn:"createArchivePoolPlugin",cfg:"{}",why:"归档的候选人收进人才库浮层，可恢复；主看板只留活跃流水线。"},{fn:"createStarPlugin",cfg:"{ pinTop: true }",why:"好苗子星标置顶，复盘时优先过目。"},{fn:"createTagPlugin",cfg:'{ suggestTags: ["重点", "备选", "人才库"] }',why:"给人才库候选人打上业务标签，下次开岗直接筛。"},{fn:"createContactMaskPlugin",cfg:"{ maskEmail: true, maskPhone: true }",why:"复盘会上投影大屏，联系方式默认脱敏。"},{fn:"createExportPlugin",cfg:'{ filename: "talent-review" }',why:"导出当前管道末态 CSV，直接贴进季度汇报。"},{fn:"createStatsPlugin",cfg:"{}",why:"页脚漏斗 + 列头计数，各阶段存量一眼可读。"}],props:[],note:"本场景是受控模式：onDataChange 回写宿主再喂回 Board，人才库计数 / 漏斗都反映最新数据。"};function wS(){const[e,n]=v.useState(Mn),t=v.useMemo(()=>nt(Ln,[Nr(),li({pinTop:!0}),ii({suggestTags:["重点","备选","人才库"]}),gi({maskEmail:!0,maskPhone:!0}),fi({filename:"talent-review"}),pi()]),[]),r=v.useCallback(o=>n(o),[]);return u.jsx(t,{data:e,stages:zn,containerStyle:{minWidth:1180},onDataChange:r})}const kS=Object.freeze(Object.defineProperty({__proto__:null,default:wS,meta:SS},Symbol.toStringTag,{value:"Module"})),CS=`/**
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
`,PS=`/**
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
`,_S=`/**
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
`,bS=Object.assign({"./01-daily-review.tsx":hS,"./02-screening-day.tsx":xS,"./03-talent-pool.tsx":kS}),jS=Object.assign({"./01-daily-review.tsx":CS,"./02-screening-day.tsx":PS,"./03-talent-pool.tsx":_S}),ES=e=>e.replace(/^\.\//,""),Io=Object.entries(bS).map(([e,n])=>{const t=ES(e);return{meta:n.meta,Component:n.default,file:t,source:jS[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),rw=Io.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),ow=Array.from(new Set(Io.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort(),TS="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",$S="true|false|null|undefined|this|super",NS="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",Zu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${TS})\b`,String.raw`\b(${$S})\b`,String.raw`\b(${NS})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),qu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function OS(e){const n=[];let t=0;Zu.lastIndex=0;let r;for(;r=Zu.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const o=qu.findIndex((i,l)=>r[l+1]!==void 0);n.push({text:r[0],cls:o>=0?qu[o]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function ec(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function RS({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[o,i]=v.useState("idle"),[l,a]=v.useState(!1),s=v.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=t>0&&s.length>t,d=c&&!l?s.slice(0,t).join(`
`):e,f=v.useMemo(()=>OS(d),[d]),h=v.useCallback(async()=>{var y;let x=!1;if((y=navigator.clipboard)!=null&&y.writeText)try{await navigator.clipboard.writeText(e),x=!0}catch{x=ec(e)}else x=ec(e);i(x?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return u.jsxs("div",{className:"code",children:[u.jsxs("div",{className:"code-head",children:[u.jsx("span",{children:n}),u.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[u.jsxs("span",{children:[s.length," 行"]}),u.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:h,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),u.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:u.jsx("code",{children:f.map((x,y)=>x.cls?u.jsx("span",{className:x.cls,children:x.text},y):u.jsx($n.Fragment,{children:x.text},y))})}),c?u.jsx("button",{type:"button",className:"code-more",onClick:()=>a(x=>!x),children:l?"收起":`展开余下 ${s.length-t} 行`}):null]})}function Df(e){return e.props??e.config??[]}function DS({doc:e}){var o,i,l;const n=Df(e),t=e.events??[],r=e.methods??[];return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"属性 Props"}),n.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"属性"}),u.jsx("th",{children:"类型"}),u.jsx("th",{children:"默认"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:n.map(a=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:a.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:a.type})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:a.default??"-"})}),u.jsx("td",{children:a.description??"—"})]},a.name))})]}):u.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"事件 Events"}),t.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"事件"}),u.jsx("th",{children:"触发时机"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:t.map(a=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:a.name})}),u.jsx("td",{children:a.when}),u.jsx("td",{children:a.description})]},a.name))})]}):u.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"方法 Methods"}),r.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"方法"}),u.jsx("th",{children:"签名"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:r.map(a=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:a.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:a.signature})}),u.jsx("td",{children:a.description})]},a.name))})]}):u.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),u.jsxs("div",{className:"doc-cols",children:[(o=e.features)!=null&&o.length?u.jsxs("div",{children:[u.jsx("h5",{children:"能做"}),u.jsx("ul",{children:e.features.map(a=>u.jsx("li",{children:a},a))})]}):null,(i=e.useCases)!=null&&i.length?u.jsxs("div",{children:[u.jsx("h5",{children:"适合"}),u.jsx("ul",{children:e.useCases.map(a=>u.jsx("li",{children:a},a))})]}):null,(l=e.notes)!=null&&l.length?u.jsxs("div",{children:[u.jsx("h5",{children:"注意"}),u.jsx("ul",{children:e.notes.map(a=>u.jsx("li",{children:a},a))})]}):null]})]})}function LS({factory:e,priority:n,summary:t,doc:r,defaultOpen:o=!0}){var l,a;const i={props:Df(r).length,events:((l=r.events)==null?void 0:l.length)??0,methods:((a=r.methods)==null?void 0:a.length)??0};return u.jsxs("details",{className:"api-plug",open:o,children:[u.jsxs("summary",{children:[u.jsx("code",{children:e}),u.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),u.jsx("span",{className:"api-plug-desc",children:t}),u.jsxs("span",{className:"api-plug-n",children:[i.props," 属性 · ",i.events," 事件 · ",i.methods," 方法"]})]}),u.jsx("div",{className:"api-plug-body",children:u.jsx(DS,{doc:r})})]})}const zS=/create[A-Z]\w*Plugin/g;function MS(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Lf(e){return e.dir?`create${e.dir}`:MS(e.factory)}function IS(e){return new Set(e.match(zS)??[])}function AS(e,n){const t=IS(e);return n.filter(r=>t.has(Lf(r))).sort((r,o)=>r.priority-o.priority)}function BS({source:e,plugins:n,heading:t="本页用到的插件"}){const r=v.useMemo(()=>AS(e,n),[e,n]);return r.length===0?null:u.jsxs("section",{className:"api-sec",children:[u.jsxs("div",{className:"api-sec-head",children:[u.jsxs("h2",{className:"api-sec-title",children:[t," · ",r.length," 个"]}),u.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",u.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(o=>u.jsx(LS,{factory:Lf(o),priority:o.priority,summary:o.summary??o.doc.description??"",doc:o.doc},o.factory))]})}const FS=/\{\{\s*([\w-]+)\s*\}\}/g;function ms(e,n){return e.replace(FS,(t,r)=>r in n?String(n[r]):t)}function US(e,n){if(!e)return"";let t=ms(e,n).trim();return t.startsWith("{")&&t.endsWith("}")&&(t=t.slice(1,-1).trim()),t?`{ ${t} }`:""}function zf(e,n){const t=e.plugs.map(r=>`  ${r.fn}(${US(r.cfg,n)}),`).join(`
`);return e.plugs.length?`const Board = withPlugins(CandidateCore, [
${t}
]);`:"const Board = CandidateCore;"}function Mf(e){const n=e.plugs.map(t=>t.fn).sort();return n.length?n.map(t=>{const r=`${t.replace(/^create/,"").replace(/Plugin$/,"")}Plugin`;return`import { ${t} } from "vane-candidate/custom-plugins/${r}";`}).join(`
`):"// 这一页只用 Core props，不需要任何插件"}function WS(e,n){const t=e.props.filter(r=>typeof r=="string"||!r.when||r.when(n)).map(r=>`      ${ms(typeof r=="string"?r:r.text,n)}`).join(`
`);return`// ${e.title} · 最小装配（照抄即可跑）
import { CandidateCore, withPlugins } from "vane-candidate";
import type { Candidate } from "vane-candidate";
${Mf(e)}

${zf(e,n)}

export default function Demo({ data }: { data: Candidate[] }) {
  return (
    <Board
      data={data}
${t}
    />
  );
}
`}function HS(e){return/^[A-Za-z_$][\w$]*$/.test(e)}function Ao(e,n){const t="  ".repeat(n),r="  ".repeat(n+1);if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${r}${Ao(i,n+1)}`).join(`,
`)},
${t}]`;if(typeof e=="object"){const o=Object.entries(e);return o.length===0?"{}":`{
${o.map(([l,a])=>`${r}${HS(l)?l:JSON.stringify(l)}: ${Ao(a,n+1)}`).join(`,
`)},
${t}}`}return JSON.stringify(e)}function VS(){const n=JSON.parse(JSON.stringify(Mn)).map(t=>t.avatar?{...t,avatar:"https://your-avatar.example.com/a.png"}:t);return`const SAMPLE_STAGES: StageConfig[] = ${Ao(zn,0)};

const data: Candidate[] = ${Ao(n,0)};`}function KS(e,n){const t=e.props.filter(r=>typeof r=="string"||!r.when||r.when(n)).map(r=>`      ${ms(typeof r=="string"?r:r.text,n)}`).join(`
`);return`// ${e.title} · 完整示例（直接复制即可运行）
import { CandidateCore, withPlugins } from "vane-candidate";
import type { Candidate, StageConfig } from "vane-candidate";
${Mf(e)}

${zf(e,n)}

${VS()}

export default function Demo() {
  return (
    <Board
      data={data}
      stages={SAMPLE_STAGES}
${t}
    />
  );
}
`}function GS({controls:e,cfg:n,onChange:t}){return u.jsx("div",{className:"ctl-bar",children:e.map(r=>{const o=n[r.key];return u.jsxs("label",{className:"ctl",title:r.hint,children:[u.jsxs("span",{className:"ctl-label",children:[r.label,u.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?u.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>t(r.key,!o),"aria-pressed":!!o,children:u.jsx("i",{})}):r.kind==="select"?u.jsx("select",{className:"ctl-select",value:String(o),onChange:i=>t(r.key,i.target.value),children:(r.options??[]).map(i=>u.jsx("option",{value:i.value,children:i.label},i.value))}):u.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:i=>t(r.key,Number(i.target.value))})]},r.key)})})}function QS({lines:e,title:n="事件日志",empty:t="还没触发 —— 点卡片操作区的按钮，或拖上面的控件",right:r}){return u.jsxs("div",{className:"log",children:[u.jsxs("div",{className:"log-head",children:[u.jsx("span",{children:n}),u.jsxs("span",{className:"log-right",children:[r,u.jsx("b",{children:e.length})]})]}),e.length===0?u.jsx("p",{className:"log-empty",children:t}):u.jsx("ol",{className:"log-list",children:e.map(o=>u.jsxs("li",{className:`log-line is-${o.kind}`,children:[u.jsx("time",{children:o.at}),u.jsx("span",{children:o.text})]},o.id))})]})}function YS({entry:e,order:n}){var b;const{meta:t,Stage:r,file:o,source:i}=e,[l,a]=v.useState(()=>Qu(t)),[s,c]=v.useState([]),[d,f]=v.useState("minimal"),h=v.useCallback((g,p="event")=>{const m=new Date().toLocaleTimeString("zh-CN",{hour12:!1});c(w=>[{id:w.length+1,at:m,text:g,kind:p},...w].slice(0,60))},[]),x=v.useCallback((g,p)=>{a(m=>({...m,[g]:p}))},[]),y=v.useMemo(()=>WS(t,l),[t,l]),S=v.useMemo(()=>KS(t,l),[t,l]);return u.jsxs("section",{className:"demo","data-demo":t.slug,children:[u.jsxs("header",{className:"demo-head",children:[u.jsxs("div",{className:"demo-folio",children:[u.jsx("span",{className:"demo-no",children:String(n).padStart(2,"0")}),u.jsx("em",{children:"plate"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"demo-title-row",children:[u.jsx("h2",{children:t.title}),u.jsx("span",{className:"demo-group",children:Wl[t.group].label}),t.plugin?u.jsx("code",{className:"demo-plugin",children:t.plugin}):null]}),u.jsx("p",{className:"demo-intro",children:t.intro}),u.jsxs("p",{className:"demo-why",children:[u.jsx("b",{children:"什么时候用"}),t.why]})]}),u.jsxs("div",{className:"demo-meta",children:[u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"file"}),u.jsx("b",{children:o})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"group"}),u.jsx("b",{children:Wl[t.group].label})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"plugs"}),u.jsx("b",{children:t.plugs.length?`${t.plugs.length} installed`:"core only"})]})]})]}),(b=t.controls)!=null&&b.length?u.jsxs("div",{className:"demo-controls",children:[u.jsx(GS,{controls:t.controls,cfg:l,onChange:x}),u.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{a(Qu(t)),c([])},children:"重置"})]}):null,u.jsxs("div",{className:"demo-body",children:[u.jsxs("figure",{className:"plate",children:[u.jsxs("figcaption",{className:"plate-cap",children:[u.jsx("b",{children:"stage"}),u.jsxs("span",{children:[t.tone==="light"?"light surface":"live render",t.stageHeight?` · ${t.stageHeight}px`:""]}),u.jsx("em",{children:"live"})]}),u.jsx("div",{className:"plate-ruler","aria-hidden":!0}),u.jsx("div",{className:`plate-body demo-stage${t.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${t.stageHeight??380}px`},children:u.jsx(r,{cfg:l,log:h,setCfg:x})})]}),u.jsxs("aside",{className:"demo-side",children:[u.jsx("div",{className:"demo-plugs",children:t.plugs.length===0?u.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):t.plugs.map(g=>u.jsx("span",{className:"demo-plug",children:g.fn.replace(/^create|Plugin$/g,"")},g.fn))}),u.jsx("ul",{className:"demo-why-list",children:t.plugs.map(g=>u.jsxs("li",{children:[u.jsx("code",{children:g.fn}),u.jsx("span",{children:g.why})]},g.fn))}),t.note?u.jsxs("p",{className:"demo-note",children:["⚠ ",t.note]}):null,u.jsx(QS,{lines:s,empty:t.plugs.length>0?"还没触发 —— 点卡片操作区的按钮，或拖上面的控件":"这一页没有事件类行为，日志留白"})]})]}),u.jsxs("div",{className:"demo-code",children:[u.jsxs("div",{className:"demo-switch",role:"tablist",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>f("minimal"),children:"最小装配"}),u.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>f("full"),children:"完整源码"})]}),u.jsx(RS,{code:d==="minimal"?y:S,title:d==="minimal"?`${t.slug}.minimal.tsx`:o,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]}),u.jsx(BS,{source:i,plugins:Hl})]})}const XS=v.lazy(()=>ri(()=>import("./HomePage-A8ML_iuS.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),JS=v.lazy(()=>ri(()=>import("./PluginsPage-BZL5o1NW.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),ZS=v.lazy(()=>ri(()=>import("./ScenariosPage-kU1MAo7n.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),qS={pkg:"vane-candidate",brand:"C",subtitle:"候选人流水线 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Hl.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Io.length} scenes`}],routes:[{path:"/",element:u.jsx(XS,{})},{path:"/plugins",element:u.jsx(JS,{})},{path:"/scenarios",element:u.jsx(ZS,{})}],crumb:e=>e==="/plugins"?"plugins · 插件工坊":e==="/scenarios"?"scenarios · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:V1.map(e=>({key:e,label:Wl[e].label})),entries:Ul,detail:(e,n)=>u.jsx(YS,{entry:e,order:n})},footer:[`${Hl.length} PLUGINS · ${Io.length} SCENES`,`${Ul.length} DEMOS`]};typeof location<"u"&&location.search.includes("selftest=1")&&ri(()=>import("./selftest-BCFTukUH.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>e.runSelfTestToTitle());function ew(){return u.jsx(kh,{config:qS})}Hi.createRoot(document.getElementById("root")).render(u.jsx(ew,{}));export{fs as A,Or as B,RS as C,Ul as D,gi as E,mm as F,Yu as G,Fl as L,Hl as P,Io as S,ow as U,Wl as a,tw as b,zn as c,Mn as d,Ln as e,rw as f,gm as g,$r as h,Qa as i,u as j,ii as k,Ja as l,li as m,Dt as n,ai as o,ns as p,si as q,v as r,ui as s,ci as t,di as u,as as v,nt as w,Nr as x,fi as y,pi as z};
