var bf=Object.defineProperty;var If=(e,n,t)=>n in e?bf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ms=(e,n,t)=>If(e,typeof n!="symbol"?n+"":n,t);function jf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function $f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gu={exports:{}},Ji={},Ku={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),Df=Symbol.for("react.portal"),Nf=Symbol.for("react.fragment"),Mf=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),Lf=Symbol.for("react.provider"),zf=Symbol.for("react.context"),Af=Symbol.for("react.forward_ref"),Bf=Symbol.for("react.suspense"),Ff=Symbol.for("react.memo"),Uf=Symbol.for("react.lazy"),hs=Symbol.iterator;function Wf(e){return e===null||typeof e!="object"?null:(e=hs&&e[hs]||e["@@iterator"],typeof e=="function"?e:null)}var Qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xu=Object.assign,Yu={};function Dt(e,n,t){this.props=e,this.context=n,this.refs=Yu,this.updater=t||Qu}Dt.prototype.isReactComponent={};Dt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Dt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zu(){}Zu.prototype=Dt.prototype;function Kl(e,n,t){this.props=e,this.context=n,this.refs=Yu,this.updater=t||Qu}var Ql=Kl.prototype=new Zu;Ql.constructor=Kl;Xu(Ql,Dt.prototype);Ql.isPureReactComponent=!0;var ys=Array.isArray,Ju=Object.prototype.hasOwnProperty,Xl={current:null},qu={key:!0,ref:!0,__self:!0,__source:!0};function ec(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Ju.call(n,r)&&!qu.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Br,type:e,key:o,ref:l,props:i,_owner:Xl.current}}function Hf(e,n){return{$$typeof:Br,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Yl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function Vf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var vs=/\/+/g;function yo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Vf(""+e.key):n.toString(36)}function fi(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Br:case Df:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+yo(l,0):r,ys(i)?(t="",e!=null&&(t=e.replace(vs,"$&/")+"/"),fi(i,n,t,"",function(u){return u})):i!=null&&(Yl(i)&&(i=Hf(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(vs,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",ys(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+yo(o,a);l+=fi(o,n,t,s,i)}else if(s=Wf(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+yo(o,a++),l+=fi(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Qr(e,n,t){if(e==null)return e;var r=[],i=0;return fi(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Gf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},pi={transition:null},Kf={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:pi,ReactCurrentOwner:Xl};function nc(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Qr,forEach:function(e,n,t){Qr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Qr(e,function(){n++}),n},toArray:function(e){return Qr(e,function(n){return n})||[]},only:function(e){if(!Yl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Dt;D.Fragment=Nf;D.Profiler=Of;D.PureComponent=Kl;D.StrictMode=Mf;D.Suspense=Bf;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kf;D.act=nc;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xu({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Xl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Ju.call(n,s)&&!qu.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Br,type:e.type,key:i,ref:o,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:zf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lf,_context:e},e.Consumer=e};D.createElement=ec;D.createFactory=function(e){var n=ec.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Af,render:e}};D.isValidElement=Yl;D.lazy=function(e){return{$$typeof:Uf,_payload:{_status:-1,_result:e},_init:Gf}};D.memo=function(e,n){return{$$typeof:Ff,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=pi.transition;pi.transition={};try{e()}finally{pi.transition=n}};D.unstable_act=nc;D.useCallback=function(e,n){return ge.current.useCallback(e,n)};D.useContext=function(e){return ge.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};D.useEffect=function(e,n){return ge.current.useEffect(e,n)};D.useId=function(){return ge.current.useId()};D.useImperativeHandle=function(e,n,t){return ge.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return ge.current.useMemo(e,n)};D.useReducer=function(e,n,t){return ge.current.useReducer(e,n,t)};D.useRef=function(e){return ge.current.useRef(e)};D.useState=function(e){return ge.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return ge.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return ge.current.useTransition()};D.version="18.3.1";Ku.exports=D;var y=Ku.exports;const Fr=$f(y),Qf=jf({__proto__:null,default:Fr},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf=y,Yf=Symbol.for("react.element"),Zf=Symbol.for("react.fragment"),Jf=Object.prototype.hasOwnProperty,qf=Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ep={key:!0,ref:!0,__self:!0,__source:!0};function tc(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Jf.call(n,r)&&!ep.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Yf,type:e,key:o,ref:l,props:i,_owner:qf.current}}Ji.Fragment=Zf;Ji.jsx=tc;Ji.jsxs=tc;Gu.exports=Ji;var c=Gu.exports,Ho={},rc={exports:{}},Te={},ic={exports:{}},oc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,b){var I=_.length;_.push(b);e:for(;0<I;){var M=I-1>>>1,U=_[M];if(0<i(U,b))_[M]=b,_[I]=U,I=M;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var b=_[0],I=_.pop();if(I!==b){_[0]=I;e:for(var M=0,U=_.length,We=U>>>1;M<We;){var we=2*(M+1)-1,On=_[we],Ln=we+1,Kr=_[Ln];if(0>i(On,I))Ln<U&&0>i(Kr,On)?(_[M]=Kr,_[Ln]=I,M=Ln):(_[M]=On,_[we]=I,M=we);else if(Ln<U&&0>i(Kr,I))_[M]=Kr,_[Ln]=I,M=Ln;else break e}}return b}function i(_,b){var I=_.sortIndex-b.sortIndex;return I!==0?I:_.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,f=null,h=3,v=!1,S=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(_){for(var b=t(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=_)r(u),b.sortIndex=b.expirationTime,n(s,b);else break;b=t(u)}}function w(_){if(x=!1,g(_),!S)if(t(s)!==null)S=!0,Yt(C);else{var b=t(u);b!==null&&Zt(w,b.startTime-_)}}function C(_,b){S=!1,x&&(x=!1,m(j),j=-1),v=!0;var I=h;try{for(g(b),f=t(s);f!==null&&(!(f.expirationTime>b)||_&&!de());){var M=f.callback;if(typeof M=="function"){f.callback=null,h=f.priorityLevel;var U=M(f.expirationTime<=b);b=e.unstable_now(),typeof U=="function"?f.callback=U:f===t(s)&&r(s),g(b)}else r(s);f=t(s)}if(f!==null)var We=!0;else{var we=t(u);we!==null&&Zt(w,we.startTime-b),We=!1}return We}finally{f=null,h=I,v=!1}}var R=!1,T=null,j=-1,L=5,$=-1;function de(){return!(e.unstable_now()-$<L)}function un(){if(T!==null){var _=e.unstable_now();$=_;var b=!0;try{b=T(!0,_)}finally{b?Xe():(R=!1,T=null)}}else R=!1}var Xe;if(typeof d=="function")Xe=function(){d(un)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Xt=Qt.port2;Qt.port1.onmessage=un,Xe=function(){Xt.postMessage(null)}}else Xe=function(){k(un,0)};function Yt(_){T=_,R||(R=!0,Xe())}function Zt(_,b){j=k(function(){_(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){S||v||(S=!0,Yt(C))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var I=h;h=b;try{return _()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,b){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=h;h=_;try{return b()}finally{h=I}},e.unstable_scheduleCallback=function(_,b,I){var M=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?M+I:M):I=M,_){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=I+U,_={id:p++,callback:b,priorityLevel:_,startTime:I,expirationTime:U,sortIndex:-1},I>M?(_.sortIndex=I,n(u,_),t(s)===null&&_===t(u)&&(x?(m(j),j=-1):x=!0,Zt(w,I-M))):(_.sortIndex=U,n(s,_),S||v||(S=!0,Yt(C))),_},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(_){var b=h;return function(){var I=h;h=b;try{return _.apply(this,arguments)}finally{h=I}}}})(oc);ic.exports=oc;var np=ic.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=y,_e=np;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lc=new Set,wr={};function qn(e,n){Et(e,n),Et(e+"Capture",n)}function Et(e,n){for(wr[e]=n,e=0;e<n.length;e++)lc.add(n[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vo=Object.prototype.hasOwnProperty,rp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ss={},xs={};function ip(e){return Vo.call(xs,e)?!0:Vo.call(Ss,e)?!1:rp.test(e)?xs[e]=!0:(Ss[e]=!0,!1)}function op(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lp(e,n,t,r){if(n===null||typeof n>"u"||op(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function me(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];le[n]=new me(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zl=/[\-:]([a-z])/g;function Jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Zl,Jl);le[n]=new me(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Zl,Jl);le[n]=new me(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Zl,Jl);le[n]=new me(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function ql(e,n,t,r){var i=le.hasOwnProperty(n)?le[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(lp(n,t,i,r)&&(t=null),r||i===null?ip(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var an=tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xr=Symbol.for("react.element"),st=Symbol.for("react.portal"),ut=Symbol.for("react.fragment"),ea=Symbol.for("react.strict_mode"),Go=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),sc=Symbol.for("react.context"),na=Symbol.for("react.forward_ref"),Ko=Symbol.for("react.suspense"),Qo=Symbol.for("react.suspense_list"),ta=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),uc=Symbol.for("react.offscreen"),ws=Symbol.iterator;function Jt(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,vo;function ar(e){if(vo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);vo=n&&n[1]||""}return`
`+vo+e}var So=!1;function xo(e,n){if(!e||So)return"";So=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{So=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ar(e):""}function ap(e){switch(e.tag){case 5:return ar(e.type);case 16:return ar("Lazy");case 13:return ar("Suspense");case 19:return ar("SuspenseList");case 0:case 2:case 15:return e=xo(e.type,!1),e;case 11:return e=xo(e.type.render,!1),e;case 1:return e=xo(e.type,!0),e;default:return""}}function Xo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ut:return"Fragment";case st:return"Portal";case Go:return"Profiler";case ea:return"StrictMode";case Ko:return"Suspense";case Qo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sc:return(e.displayName||"Context")+".Consumer";case ac:return(e._context.displayName||"Context")+".Provider";case na:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ta:return n=e.displayName||null,n!==null?n:Xo(e.type)||"Memo";case dn:n=e._payload,e=e._init;try{return Xo(e(n))}catch{}}return null}function sp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xo(n);case 8:return n===ea?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function up(e){var n=cc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Yr(e){e._valueTracker||(e._valueTracker=up(e))}function dc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=cc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yo(e,n){var t=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ks(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Tn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fc(e,n){n=n.checked,n!=null&&ql(e,"checked",n,!1)}function Zo(e,n){fc(e,n);var t=Tn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Jo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Jo(e,n.type,Tn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ps(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Jo(e,n,t){(n!=="number"||Ci(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var sr=Array.isArray;function xt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Tn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function qo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(sr(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Tn(t)}}function pc(e,n){var t=Tn(n.value),r=Tn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function _s(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function el(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?gc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,mc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function kr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cp=["Webkit","ms","Moz","O"];Object.keys(fr).forEach(function(e){cp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),fr[n]=fr[e]})});function hc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||fr.hasOwnProperty(e)&&fr[e]?(""+n).trim():n+"px"}function yc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=hc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var dp=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(e,n){if(n){if(dp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function tl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,wt=null,kt=null;function Es(e){if(e=Hr(e)){if(typeof il!="function")throw Error(P(280));var n=e.stateNode;n&&(n=ro(n),il(e.stateNode,e.type,n))}}function vc(e){wt?kt?kt.push(e):kt=[e]:wt=e}function Sc(){if(wt){var e=wt,n=kt;if(kt=wt=null,Es(e),n)for(e=0;e<n.length;e++)Es(n[e])}}function xc(e,n){return e(n)}function wc(){}var wo=!1;function kc(e,n,t){if(wo)return e(n,t);wo=!0;try{return xc(e,n,t)}finally{wo=!1,(wt!==null||kt!==null)&&(wc(),Sc())}}function Pr(e,n){var t=e.stateNode;if(t===null)return null;var r=ro(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var ol=!1;if(nn)try{var qt={};Object.defineProperty(qt,"passive",{get:function(){ol=!0}}),window.addEventListener("test",qt,qt),window.removeEventListener("test",qt,qt)}catch{ol=!1}function fp(e,n,t,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var pr=!1,_i=null,Ei=!1,ll=null,pp={onError:function(e){pr=!0,_i=e}};function gp(e,n,t,r,i,o,l,a,s){pr=!1,_i=null,fp.apply(pp,arguments)}function mp(e,n,t,r,i,o,l,a,s){if(gp.apply(this,arguments),pr){if(pr){var u=_i;pr=!1,_i=null}else throw Error(P(198));Ei||(Ei=!0,ll=u)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Pc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ts(e){if(et(e)!==e)throw Error(P(188))}function hp(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Ts(i),e;if(o===r)return Ts(i),n;o=o.sibling}throw Error(P(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function Cc(e){return e=hp(e),e!==null?_c(e):null}function _c(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=_c(e);if(n!==null)return n;e=e.sibling}return null}var Ec=_e.unstable_scheduleCallback,Rs=_e.unstable_cancelCallback,yp=_e.unstable_shouldYield,vp=_e.unstable_requestPaint,Z=_e.unstable_now,Sp=_e.unstable_getCurrentPriorityLevel,ia=_e.unstable_ImmediatePriority,Tc=_e.unstable_UserBlockingPriority,Ti=_e.unstable_NormalPriority,xp=_e.unstable_LowPriority,Rc=_e.unstable_IdlePriority,qi=null,Ke=null;function wp(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(qi,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:Cp,kp=Math.log,Pp=Math.LN2;function Cp(e){return e>>>=0,e===0?32:31-(kp(e)/Pp|0)|0}var Jr=64,qr=4194304;function ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ri(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~i;a!==0?r=ur(a):(o&=l,o!==0&&(r=ur(o)))}else l=t&~i,l!==0?r=ur(l):o!==0&&(r=ur(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Be(n),i=1<<t,r|=e[t],n&=~i;return r}function _p(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ep(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Be(o),a=1<<l,s=i[l];s===-1?(!(a&t)||a&r)&&(i[l]=_p(a,n)):s<=n&&(e.expiredLanes|=a),o&=~a}}function al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bc(){var e=Jr;return Jr<<=1,!(Jr&4194240)&&(Jr=64),e}function ko(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ur(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Be(n),e[n]=t}function Tp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Be(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function oa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Be(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var O=0;function Ic(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jc,la,$c,Dc,Nc,sl=!1,ei=[],vn=null,Sn=null,xn=null,Cr=new Map,_r=new Map,pn=[],Rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bs(e,n){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Cr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(n.pointerId)}}function er(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Hr(n),n!==null&&la(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function bp(e,n,t,r,i){switch(n){case"focusin":return vn=er(vn,e,n,t,r,i),!0;case"dragenter":return Sn=er(Sn,e,n,t,r,i),!0;case"mouseover":return xn=er(xn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Cr.set(o,er(Cr.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_r.set(o,er(_r.get(o)||null,e,n,t,r,i)),!0}return!1}function Mc(e){var n=Bn(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=Pc(t),n!==null){e.blockedOn=n,Nc(e.priority,function(){$c(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ul(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);rl=r,t.target.dispatchEvent(r),rl=null}else return n=Hr(t),n!==null&&la(n),e.blockedOn=t,!1;n.shift()}return!0}function Is(e,n,t){gi(e)&&t.delete(n)}function Ip(){sl=!1,vn!==null&&gi(vn)&&(vn=null),Sn!==null&&gi(Sn)&&(Sn=null),xn!==null&&gi(xn)&&(xn=null),Cr.forEach(Is),_r.forEach(Is)}function nr(e,n){e.blockedOn===n&&(e.blockedOn=null,sl||(sl=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Ip)))}function Er(e){function n(i){return nr(i,e)}if(0<ei.length){nr(ei[0],e);for(var t=1;t<ei.length;t++){var r=ei[t];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&nr(vn,e),Sn!==null&&nr(Sn,e),xn!==null&&nr(xn,e),Cr.forEach(n),_r.forEach(n),t=0;t<pn.length;t++)r=pn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(t=pn[0],t.blockedOn===null);)Mc(t),t.blockedOn===null&&pn.shift()}var Pt=an.ReactCurrentBatchConfig,bi=!0;function jp(e,n,t,r){var i=O,o=Pt.transition;Pt.transition=null;try{O=1,aa(e,n,t,r)}finally{O=i,Pt.transition=o}}function $p(e,n,t,r){var i=O,o=Pt.transition;Pt.transition=null;try{O=4,aa(e,n,t,r)}finally{O=i,Pt.transition=o}}function aa(e,n,t,r){if(bi){var i=ul(e,n,t,r);if(i===null)$o(e,n,r,Ii,t),bs(e,r);else if(bp(i,e,n,t,r))r.stopPropagation();else if(bs(e,r),n&4&&-1<Rp.indexOf(e)){for(;i!==null;){var o=Hr(i);if(o!==null&&jc(o),o=ul(e,n,t,r),o===null&&$o(e,n,r,Ii,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else $o(e,n,r,null,t)}}var Ii=null;function ul(e,n,t,r){if(Ii=null,e=ra(r),e=Bn(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Pc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ii=e,null}function Oc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sp()){case ia:return 1;case Tc:return 4;case Ti:case xp:return 16;case Rc:return 536870912;default:return 16}default:return 16}}var mn=null,sa=null,mi=null;function Lc(){if(mi)return mi;var e,n=sa,t=n.length,r,i="value"in mn?mn.value:mn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return mi=i.slice(e,1<r?1-r:void 0)}function hi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function js(){return!1}function Re(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ni:js,this.isPropagationStopped=js,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),n}var Nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=Re(Nt),Wr=K({},Nt,{view:0,detail:0}),Dp=Re(Wr),Po,Co,tr,eo=K({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(Po=e.screenX-tr.screenX,Co=e.screenY-tr.screenY):Co=Po=0,tr=e),Po)},movementY:function(e){return"movementY"in e?e.movementY:Co}}),$s=Re(eo),Np=K({},eo,{dataTransfer:0}),Mp=Re(Np),Op=K({},Wr,{relatedTarget:0}),_o=Re(Op),Lp=K({},Nt,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=Re(Lp),Ap=K({},Nt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bp=Re(Ap),Fp=K({},Nt,{data:0}),Ds=Re(Fp),Up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Hp[e])?!!n[e]:!1}function ca(){return Vp}var Gp=K({},Wr,{key:function(e){if(e.key){var n=Up[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ca,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kp=Re(Gp),Qp=K({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ns=Re(Qp),Xp=K({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ca}),Yp=Re(Xp),Zp=K({},Nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=Re(Zp),qp=K({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eg=Re(qp),ng=[9,13,27,32],da=nn&&"CompositionEvent"in window,gr=null;nn&&"documentMode"in document&&(gr=document.documentMode);var tg=nn&&"TextEvent"in window&&!gr,zc=nn&&(!da||gr&&8<gr&&11>=gr),Ms=" ",Os=!1;function Ac(e,n){switch(e){case"keyup":return ng.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ct=!1;function rg(e,n){switch(e){case"compositionend":return Bc(n);case"keypress":return n.which!==32?null:(Os=!0,Ms);case"textInput":return e=n.data,e===Ms&&Os?null:e;default:return null}}function ig(e,n){if(ct)return e==="compositionend"||!da&&Ac(e,n)?(e=Lc(),mi=sa=mn=null,ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zc&&n.locale!=="ko"?null:n.data;default:return null}}var og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ls(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!og[e.type]:n==="textarea"}function Fc(e,n,t,r){vc(r),n=ji(n,"onChange"),0<n.length&&(t=new ua("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var mr=null,Tr=null;function lg(e){Jc(e,0)}function no(e){var n=pt(e);if(dc(n))return e}function ag(e,n){if(e==="change")return n}var Uc=!1;if(nn){var Eo;if(nn){var To="oninput"in document;if(!To){var zs=document.createElement("div");zs.setAttribute("oninput","return;"),To=typeof zs.oninput=="function"}Eo=To}else Eo=!1;Uc=Eo&&(!document.documentMode||9<document.documentMode)}function As(){mr&&(mr.detachEvent("onpropertychange",Wc),Tr=mr=null)}function Wc(e){if(e.propertyName==="value"&&no(Tr)){var n=[];Fc(n,Tr,e,ra(e)),kc(lg,n)}}function sg(e,n,t){e==="focusin"?(As(),mr=n,Tr=t,mr.attachEvent("onpropertychange",Wc)):e==="focusout"&&As()}function ug(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return no(Tr)}function cg(e,n){if(e==="click")return no(n)}function dg(e,n){if(e==="input"||e==="change")return no(n)}function fg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ue=typeof Object.is=="function"?Object.is:fg;function Rr(e,n){if(Ue(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Vo.call(n,i)||!Ue(e[i],n[i]))return!1}return!0}function Bs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,n){var t=Bs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Bs(t)}}function Hc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vc(){for(var e=window,n=Ci();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ci(e.document)}return n}function fa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function pg(e){var n=Vc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Hc(t.ownerDocument.documentElement,t)){if(r!==null&&fa(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Fs(t,o);var l=Fs(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gg=nn&&"documentMode"in document&&11>=document.documentMode,dt=null,cl=null,hr=null,dl=!1;function Us(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;dl||dt==null||dt!==Ci(r)||(r=dt,"selectionStart"in r&&fa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&Rr(hr,r)||(hr=r,r=ji(cl,"onSelect"),0<r.length&&(n=new ua("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=dt)))}function ti(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ft={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionend:ti("Transition","TransitionEnd")},Ro={},Gc={};nn&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete ft.animationend.animation,delete ft.animationiteration.animation,delete ft.animationstart.animation),"TransitionEvent"in window||delete ft.transitionend.transition);function to(e){if(Ro[e])return Ro[e];if(!ft[e])return e;var n=ft[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Gc)return Ro[e]=n[t];return e}var Kc=to("animationend"),Qc=to("animationiteration"),Xc=to("animationstart"),Yc=to("transitionend"),Zc=new Map,Ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,n){Zc.set(e,n),qn(n,[e])}for(var bo=0;bo<Ws.length;bo++){var Io=Ws[bo],mg=Io.toLowerCase(),hg=Io[0].toUpperCase()+Io.slice(1);bn(mg,"on"+hg)}bn(Kc,"onAnimationEnd");bn(Qc,"onAnimationIteration");bn(Xc,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(Yc,"onTransitionEnd");Et("onMouseEnter",["mouseout","mouseover"]);Et("onMouseLeave",["mouseout","mouseover"]);Et("onPointerEnter",["pointerout","pointerover"]);Et("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function Hs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,mp(r,n,void 0,e),e.currentTarget=null}function Jc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Hs(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Hs(i,a,u),o=s}}}if(Ei)throw e=ll,Ei=!1,ll=null,e}function A(e,n){var t=n[hl];t===void 0&&(t=n[hl]=new Set);var r=e+"__bubble";t.has(r)||(qc(n,e,2,!1),t.add(r))}function jo(e,n,t){var r=0;n&&(r|=4),qc(t,e,r,n)}var ri="_reactListening"+Math.random().toString(36).slice(2);function br(e){if(!e[ri]){e[ri]=!0,lc.forEach(function(t){t!=="selectionchange"&&(yg.has(t)||jo(t,!1,e),jo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ri]||(n[ri]=!0,jo("selectionchange",!1,n))}}function qc(e,n,t,r){switch(Oc(n)){case 1:var i=jp;break;case 4:i=$p;break;default:i=aa}t=i.bind(null,n,t,e),i=void 0,!ol||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function $o(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Bn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}kc(function(){var u=o,p=ra(t),f=[];e:{var h=Zc.get(e);if(h!==void 0){var v=ua,S=e;switch(e){case"keypress":if(hi(t)===0)break e;case"keydown":case"keyup":v=Kp;break;case"focusin":S="focus",v=_o;break;case"focusout":S="blur",v=_o;break;case"beforeblur":case"afterblur":v=_o;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Yp;break;case Kc:case Qc:case Xc:v=zp;break;case Yc:v=Jp;break;case"scroll":v=Dp;break;case"wheel":v=eg;break;case"copy":case"cut":case"paste":v=Bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ns}var x=(n&4)!==0,k=!x&&e==="scroll",m=x?h!==null?h+"Capture":null:h;x=[];for(var d=u,g;d!==null;){g=d;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Pr(d,m),w!=null&&x.push(Ir(d,w,g)))),k)break;d=d.return}0<x.length&&(h=new v(h,S,null,t,p),f.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&t!==rl&&(S=t.relatedTarget||t.fromElement)&&(Bn(S)||S[tn]))break e;if((v||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,v?(S=t.relatedTarget||t.toElement,v=u,S=S?Bn(S):null,S!==null&&(k=et(S),S!==k||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=u),v!==S)){if(x=$s,w="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ns,w="onPointerLeave",m="onPointerEnter",d="pointer"),k=v==null?h:pt(v),g=S==null?h:pt(S),h=new x(w,d+"leave",v,t,p),h.target=k,h.relatedTarget=g,w=null,Bn(p)===u&&(x=new x(m,d+"enter",S,t,p),x.target=g,x.relatedTarget=k,w=x),k=w,v&&S)n:{for(x=v,m=S,d=0,g=x;g;g=lt(g))d++;for(g=0,w=m;w;w=lt(w))g++;for(;0<d-g;)x=lt(x),d--;for(;0<g-d;)m=lt(m),g--;for(;d--;){if(x===m||m!==null&&x===m.alternate)break n;x=lt(x),m=lt(m)}x=null}else x=null;v!==null&&Vs(f,h,v,x,!1),S!==null&&k!==null&&Vs(f,k,S,x,!0)}}e:{if(h=u?pt(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var C=ag;else if(Ls(h))if(Uc)C=dg;else{C=ug;var R=sg}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=cg);if(C&&(C=C(e,u))){Fc(f,C,t,p);break e}R&&R(e,h,u),e==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Jo(h,"number",h.value)}switch(R=u?pt(u):window,e){case"focusin":(Ls(R)||R.contentEditable==="true")&&(dt=R,cl=u,hr=null);break;case"focusout":hr=cl=dt=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,Us(f,t,p);break;case"selectionchange":if(gg)break;case"keydown":case"keyup":Us(f,t,p)}var T;if(da)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else ct?Ac(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(zc&&t.locale!=="ko"&&(ct||j!=="onCompositionStart"?j==="onCompositionEnd"&&ct&&(T=Lc()):(mn=p,sa="value"in mn?mn.value:mn.textContent,ct=!0)),R=ji(u,j),0<R.length&&(j=new Ds(j,e,null,t,p),f.push({event:j,listeners:R}),T?j.data=T:(T=Bc(t),T!==null&&(j.data=T)))),(T=tg?rg(e,t):ig(e,t))&&(u=ji(u,"onBeforeInput"),0<u.length&&(p=new Ds("onBeforeInput","beforeinput",null,t,p),f.push({event:p,listeners:u}),p.data=T))}Jc(f,n)})}function Ir(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ji(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pr(e,t),o!=null&&r.unshift(Ir(e,o,i)),o=Pr(e,n),o!=null&&r.push(Ir(e,o,i))),e=e.return}return r}function lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vs(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Pr(t,o),s!=null&&l.unshift(Ir(t,s,a))):i||(s=Pr(t,o),s!=null&&l.push(Ir(t,s,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var vg=/\r\n?/g,Sg=/\u0000|\uFFFD/g;function Gs(e){return(typeof e=="string"?e:""+e).replace(vg,`
`).replace(Sg,"")}function ii(e,n,t){if(n=Gs(n),Gs(e)!==n&&t)throw Error(P(425))}function $i(){}var fl=null,pl=null;function gl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ml=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,Ks=typeof Promise=="function"?Promise:void 0,wg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ks<"u"?function(e){return Ks.resolve(null).then(e).catch(kg)}:ml;function kg(e){setTimeout(function(){throw e})}function Do(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Er(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Er(n)}function wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Qs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Mt=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Mt,jr="__reactProps$"+Mt,tn="__reactContainer$"+Mt,hl="__reactEvents$"+Mt,Pg="__reactListeners$"+Mt,Cg="__reactHandles$"+Mt;function Bn(e){var n=e[Ge];if(n)return n;for(var t=e.parentNode;t;){if(n=t[tn]||t[Ge]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Qs(e);e!==null;){if(t=e[Ge])return t;e=Qs(e)}return n}e=t,t=e.parentNode}return null}function Hr(e){return e=e[Ge]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ro(e){return e[jr]||null}var yl=[],gt=-1;function In(e){return{current:e}}function B(e){0>gt||(e.current=yl[gt],yl[gt]=null,gt--)}function z(e,n){gt++,yl[gt]=e.current,e.current=n}var Rn={},ce=In(Rn),ve=In(!1),Vn=Rn;function Tt(e,n){var t=e.type.contextTypes;if(!t)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Se(e){return e=e.childContextTypes,e!=null}function Di(){B(ve),B(ce)}function Xs(e,n,t){if(ce.current!==Rn)throw Error(P(168));z(ce,n),z(ve,t)}function ed(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(P(108,sp(e)||"Unknown",i));return K({},t,r)}function Ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Vn=ce.current,z(ce,e),z(ve,ve.current),!0}function Ys(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=ed(e,n,Vn),r.__reactInternalMemoizedMergedChildContext=e,B(ve),B(ce),z(ce,e)):B(ve),z(ve,t)}var Ze=null,io=!1,No=!1;function nd(e){Ze===null?Ze=[e]:Ze.push(e)}function _g(e){io=!0,nd(e)}function jn(){if(!No&&Ze!==null){No=!0;var e=0,n=O;try{var t=Ze;for(O=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ze=null,io=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(e+1)),Ec(ia,jn),i}finally{O=n,No=!1}}return null}var mt=[],ht=0,Mi=null,Oi=0,be=[],Ie=0,Gn=null,Je=1,qe="";function zn(e,n){mt[ht++]=Oi,mt[ht++]=Mi,Mi=e,Oi=n}function td(e,n,t){be[Ie++]=Je,be[Ie++]=qe,be[Ie++]=Gn,Gn=e;var r=Je;e=qe;var i=32-Be(r)-1;r&=~(1<<i),t+=1;var o=32-Be(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Je=1<<32-Be(n)+i|t<<i|r,qe=o+e}else Je=1<<o|t<<i|r,qe=e}function pa(e){e.return!==null&&(zn(e,1),td(e,1,0))}function ga(e){for(;e===Mi;)Mi=mt[--ht],mt[ht]=null,Oi=mt[--ht],mt[ht]=null;for(;e===Gn;)Gn=be[--Ie],be[Ie]=null,qe=be[--Ie],be[Ie]=null,Je=be[--Ie],be[Ie]=null}var Ce=null,Pe=null,W=!1,Ae=null;function rd(e,n){var t=je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Zs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ce=e,Pe=wn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ce=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Gn!==null?{id:Je,overflow:qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ce=e,Pe=null,!0):!1;default:return!1}}function vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sl(e){if(W){var n=Pe;if(n){var t=n;if(!Zs(e,n)){if(vl(e))throw Error(P(418));n=wn(t.nextSibling);var r=Ce;n&&Zs(e,n)?rd(r,t):(e.flags=e.flags&-4097|2,W=!1,Ce=e)}}else{if(vl(e))throw Error(P(418));e.flags=e.flags&-4097|2,W=!1,Ce=e}}}function Js(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function oi(e){if(e!==Ce)return!1;if(!W)return Js(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gl(e.type,e.memoizedProps)),n&&(n=Pe)){if(vl(e))throw id(),Error(P(418));for(;n;)rd(e,n),n=wn(n.nextSibling)}if(Js(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=wn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=Ce?wn(e.stateNode.nextSibling):null;return!0}function id(){for(var e=Pe;e;)e=wn(e.nextSibling)}function Rt(){Pe=Ce=null,W=!1}function ma(e){Ae===null?Ae=[e]:Ae.push(e)}var Eg=an.ReactCurrentBatchConfig;function rr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function li(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function qs(e){var n=e._init;return n(e._payload)}function od(e){function n(m,d){if(e){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function t(m,d){if(!e)return null;for(;d!==null;)n(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=_n(m,d),m.index=0,m.sibling=null,m}function o(m,d,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,w){return d===null||d.tag!==6?(d=Fo(g,m.mode,w),d.return=m,d):(d=i(d,g),d.return=m,d)}function s(m,d,g,w){var C=g.type;return C===ut?p(m,d,g.props.children,w,g.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dn&&qs(C)===d.type)?(w=i(d,g.props),w.ref=rr(m,d,g),w.return=m,w):(w=Pi(g.type,g.key,g.props,null,m.mode,w),w.ref=rr(m,d,g),w.return=m,w)}function u(m,d,g,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Uo(g,m.mode,w),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function p(m,d,g,w,C){return d===null||d.tag!==7?(d=Hn(g,m.mode,w,C),d.return=m,d):(d=i(d,g),d.return=m,d)}function f(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Fo(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Xr:return g=Pi(d.type,d.key,d.props,null,m.mode,g),g.ref=rr(m,null,d),g.return=m,g;case st:return d=Uo(d,m.mode,g),d.return=m,d;case dn:var w=d._init;return f(m,w(d._payload),g)}if(sr(d)||Jt(d))return d=Hn(d,m.mode,g,null),d.return=m,d;li(m,d)}return null}function h(m,d,g,w){var C=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(m,d,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xr:return g.key===C?s(m,d,g,w):null;case st:return g.key===C?u(m,d,g,w):null;case dn:return C=g._init,h(m,d,C(g._payload),w)}if(sr(g)||Jt(g))return C!==null?null:p(m,d,g,w,null);li(m,g)}return null}function v(m,d,g,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(d,m,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xr:return m=m.get(w.key===null?g:w.key)||null,s(d,m,w,C);case st:return m=m.get(w.key===null?g:w.key)||null,u(d,m,w,C);case dn:var R=w._init;return v(m,d,g,R(w._payload),C)}if(sr(w)||Jt(w))return m=m.get(g)||null,p(d,m,w,C,null);li(d,w)}return null}function S(m,d,g,w){for(var C=null,R=null,T=d,j=d=0,L=null;T!==null&&j<g.length;j++){T.index>j?(L=T,T=null):L=T.sibling;var $=h(m,T,g[j],w);if($===null){T===null&&(T=L);break}e&&T&&$.alternate===null&&n(m,T),d=o($,d,j),R===null?C=$:R.sibling=$,R=$,T=L}if(j===g.length)return t(m,T),W&&zn(m,j),C;if(T===null){for(;j<g.length;j++)T=f(m,g[j],w),T!==null&&(d=o(T,d,j),R===null?C=T:R.sibling=T,R=T);return W&&zn(m,j),C}for(T=r(m,T);j<g.length;j++)L=v(T,m,j,g[j],w),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?j:L.key),d=o(L,d,j),R===null?C=L:R.sibling=L,R=L);return e&&T.forEach(function(de){return n(m,de)}),W&&zn(m,j),C}function x(m,d,g,w){var C=Jt(g);if(typeof C!="function")throw Error(P(150));if(g=C.call(g),g==null)throw Error(P(151));for(var R=C=null,T=d,j=d=0,L=null,$=g.next();T!==null&&!$.done;j++,$=g.next()){T.index>j?(L=T,T=null):L=T.sibling;var de=h(m,T,$.value,w);if(de===null){T===null&&(T=L);break}e&&T&&de.alternate===null&&n(m,T),d=o(de,d,j),R===null?C=de:R.sibling=de,R=de,T=L}if($.done)return t(m,T),W&&zn(m,j),C;if(T===null){for(;!$.done;j++,$=g.next())$=f(m,$.value,w),$!==null&&(d=o($,d,j),R===null?C=$:R.sibling=$,R=$);return W&&zn(m,j),C}for(T=r(m,T);!$.done;j++,$=g.next())$=v(T,m,j,$.value,w),$!==null&&(e&&$.alternate!==null&&T.delete($.key===null?j:$.key),d=o($,d,j),R===null?C=$:R.sibling=$,R=$);return e&&T.forEach(function(un){return n(m,un)}),W&&zn(m,j),C}function k(m,d,g,w){if(typeof g=="object"&&g!==null&&g.type===ut&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xr:e:{for(var C=g.key,R=d;R!==null;){if(R.key===C){if(C=g.type,C===ut){if(R.tag===7){t(m,R.sibling),d=i(R,g.props.children),d.return=m,m=d;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dn&&qs(C)===R.type){t(m,R.sibling),d=i(R,g.props),d.ref=rr(m,R,g),d.return=m,m=d;break e}t(m,R);break}else n(m,R);R=R.sibling}g.type===ut?(d=Hn(g.props.children,m.mode,w,g.key),d.return=m,m=d):(w=Pi(g.type,g.key,g.props,null,m.mode,w),w.ref=rr(m,d,g),w.return=m,m=w)}return l(m);case st:e:{for(R=g.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){t(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{t(m,d);break}else n(m,d);d=d.sibling}d=Uo(g,m.mode,w),d.return=m,m=d}return l(m);case dn:return R=g._init,k(m,d,R(g._payload),w)}if(sr(g))return S(m,d,g,w);if(Jt(g))return x(m,d,g,w);li(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(t(m,d.sibling),d=i(d,g),d.return=m,m=d):(t(m,d),d=Fo(g,m.mode,w),d.return=m,m=d),l(m)):t(m,d)}return k}var bt=od(!0),ld=od(!1),Li=In(null),zi=null,yt=null,ha=null;function ya(){ha=yt=zi=null}function va(e){var n=Li.current;B(Li),e._currentValue=n}function xl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ct(e,n){zi=e,ha=yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ye=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(ha!==e)if(e={context:e,memoizedValue:n,next:null},yt===null){if(zi===null)throw Error(P(308));yt=e,zi.dependencies={lanes:0,firstContext:e}}else yt=yt.next=e;return n}var Fn=null;function Sa(e){Fn===null?Fn=[e]:Fn.push(e)}function ad(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Sa(n)):(t.next=i.next,i.next=t),n.interleaved=t,rn(e,r)}function rn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var fn=!1;function xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,N&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,rn(e,t)}return i=r.interleaved,i===null?(n.next=n,Sa(r)):(n.next=i.next,i.next=n),r.interleaved=n,rn(e,t)}function yi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,oa(e,t)}}function eu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ai(e,n,t,r){var i=e.updateQueue;fn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;l=0,p=u=s=null,a=o;do{var h=a.lane,v=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,x=a;switch(h=n,v=t,x.tag){case 1:if(S=x.payload,typeof S=="function"){f=S.call(v,f,h);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,h=typeof S=="function"?S.call(v,f,h):S,h==null)break e;f=K({},f,h);break e;case 2:fn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=v,s=f):p=p.next=v,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Qn|=l,e.lanes=l,e.memoizedState=f}}function nu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Vr={},Qe=In(Vr),$r=In(Vr),Dr=In(Vr);function Un(e){if(e===Vr)throw Error(P(174));return e}function wa(e,n){switch(z(Dr,n),z($r,e),z(Qe,Vr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:el(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=el(n,e)}B(Qe),z(Qe,n)}function It(){B(Qe),B($r),B(Dr)}function ud(e){Un(Dr.current);var n=Un(Qe.current),t=el(n,e.type);n!==t&&(z($r,e),z(Qe,t))}function ka(e){$r.current===e&&(B(Qe),B($r))}var V=In(0);function Bi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Mo=[];function Pa(){for(var e=0;e<Mo.length;e++)Mo[e]._workInProgressVersionPrimary=null;Mo.length=0}var vi=an.ReactCurrentDispatcher,Oo=an.ReactCurrentBatchConfig,Kn=0,G=null,ee=null,te=null,Fi=!1,yr=!1,Nr=0,Tg=0;function ae(){throw Error(P(321))}function Ca(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ue(e[t],n[t]))return!1;return!0}function _a(e,n,t,r,i,o){if(Kn=o,G=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,vi.current=e===null||e.memoizedState===null?jg:$g,e=t(r,i),yr){o=0;do{if(yr=!1,Nr=0,25<=o)throw Error(P(301));o+=1,te=ee=null,n.updateQueue=null,vi.current=Dg,e=t(r,i)}while(yr)}if(vi.current=Ui,n=ee!==null&&ee.next!==null,Kn=0,te=ee=G=null,Fi=!1,n)throw Error(P(300));return e}function Ea(){var e=Nr!==0;return Nr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?G.memoizedState=te=e:te=te.next=e,te}function Me(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=te===null?G.memoizedState:te.next;if(n!==null)te=n,ee=e;else{if(e===null)throw Error(P(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},te===null?G.memoizedState=te=e:te=te.next=e}return te}function Mr(e,n){return typeof n=="function"?n(e):n}function Lo(e){var n=Me(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var p=u.lane;if((Kn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,G.lanes|=p,Qn|=p}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Ue(r,n.memoizedState)||(ye=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,G.lanes|=o,Qn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function zo(e){var n=Me(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ue(o,n.memoizedState)||(ye=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function cd(){}function dd(e,n){var t=G,r=Me(),i=n(),o=!Ue(r.memoizedState,i);if(o&&(r.memoizedState=i,ye=!0),r=r.queue,Ta(gd.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||te!==null&&te.memoizedState.tag&1){if(t.flags|=2048,Or(9,pd.bind(null,t,r,i,n),void 0,null),re===null)throw Error(P(349));Kn&30||fd(t,n,i)}return i}function fd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function pd(e,n,t,r){n.value=t,n.getSnapshot=r,md(n)&&hd(e)}function gd(e,n,t){return t(function(){md(n)&&hd(e)})}function md(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ue(e,t)}catch{return!0}}function hd(e){var n=rn(e,1);n!==null&&Fe(n,e,1,-1)}function tu(e){var n=Ve();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},n.queue=e,e=e.dispatch=Ig.bind(null,G,e),[n.memoizedState,e]}function Or(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function yd(){return Me().memoizedState}function Si(e,n,t,r){var i=Ve();G.flags|=e,i.memoizedState=Or(1|n,t,void 0,r===void 0?null:r)}function oo(e,n,t,r){var i=Me();r=r===void 0?null:r;var o=void 0;if(ee!==null){var l=ee.memoizedState;if(o=l.destroy,r!==null&&Ca(r,l.deps)){i.memoizedState=Or(n,t,o,r);return}}G.flags|=e,i.memoizedState=Or(1|n,t,o,r)}function ru(e,n){return Si(8390656,8,e,n)}function Ta(e,n){return oo(2048,8,e,n)}function vd(e,n){return oo(4,2,e,n)}function Sd(e,n){return oo(4,4,e,n)}function xd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wd(e,n,t){return t=t!=null?t.concat([e]):null,oo(4,4,xd.bind(null,n,e),t)}function Ra(){}function kd(e,n){var t=Me();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ca(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Pd(e,n){var t=Me();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ca(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Cd(e,n,t){return Kn&21?(Ue(t,n)||(t=bc(),G.lanes|=t,Qn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=t)}function Rg(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var r=Oo.transition;Oo.transition={};try{e(!1),n()}finally{O=t,Oo.transition=r}}function _d(){return Me().memoizedState}function bg(e,n,t){var r=Cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ed(e))Td(n,t);else if(t=ad(e,n,t,r),t!==null){var i=pe();Fe(t,e,r,i),Rd(t,n,r)}}function Ig(e,n,t){var r=Cn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ed(e))Td(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(i.hasEagerState=!0,i.eagerState=a,Ue(a,l)){var s=n.interleaved;s===null?(i.next=i,Sa(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=ad(e,n,i,r),t!==null&&(i=pe(),Fe(t,e,r,i),Rd(t,n,r))}}function Ed(e){var n=e.alternate;return e===G||n!==null&&n===G}function Td(e,n){yr=Fi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Rd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,oa(e,t)}}var Ui={readContext:Ne,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},jg={readContext:Ne,useCallback:function(e,n){return Ve().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:ru,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Si(4194308,4,xd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Si(4194308,4,e,n)},useInsertionEffect:function(e,n){return Si(4,2,e,n)},useMemo:function(e,n){var t=Ve();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ve();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=bg.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var n=Ve();return e={current:e},n.memoizedState=e},useState:tu,useDebugValue:Ra,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=tu(!1),n=e[0];return e=Rg.bind(null,e[1]),Ve().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=G,i=Ve();if(W){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),re===null)throw Error(P(349));Kn&30||fd(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,ru(gd.bind(null,r,o,e),[e]),r.flags|=2048,Or(9,pd.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ve(),n=re.identifierPrefix;if(W){var t=qe,r=Je;t=(r&~(1<<32-Be(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Nr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Tg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},$g={readContext:Ne,useCallback:kd,useContext:Ne,useEffect:Ta,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:Sd,useMemo:Pd,useReducer:Lo,useRef:yd,useState:function(){return Lo(Mr)},useDebugValue:Ra,useDeferredValue:function(e){var n=Me();return Cd(n,ee.memoizedState,e)},useTransition:function(){var e=Lo(Mr)[0],n=Me().memoizedState;return[e,n]},useMutableSource:cd,useSyncExternalStore:dd,useId:_d,unstable_isNewReconciler:!1},Dg={readContext:Ne,useCallback:kd,useContext:Ne,useEffect:Ta,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:Sd,useMemo:Pd,useReducer:zo,useRef:yd,useState:function(){return zo(Mr)},useDebugValue:Ra,useDeferredValue:function(e){var n=Me();return ee===null?n.memoizedState=e:Cd(n,ee.memoizedState,e)},useTransition:function(){var e=zo(Mr)[0],n=Me().memoizedState;return[e,n]},useMutableSource:cd,useSyncExternalStore:dd,useId:_d,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function wl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:K({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var lo={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=pe(),i=Cn(e),o=en(r,i);o.payload=n,t!=null&&(o.callback=t),n=kn(e,o,i),n!==null&&(Fe(n,e,i,r),yi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=pe(),i=Cn(e),o=en(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=kn(e,o,i),n!==null&&(Fe(n,e,i,r),yi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=pe(),r=Cn(e),i=en(t,r);i.tag=2,n!=null&&(i.callback=n),n=kn(e,i,r),n!==null&&(Fe(n,e,r,t),yi(n,e,r))}};function iu(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Rr(t,r)||!Rr(i,o):!0}function bd(e,n,t){var r=!1,i=Rn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(i=Se(n)?Vn:ce.current,r=n.contextTypes,o=(r=r!=null)?Tt(e,i):Rn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=lo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function ou(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&lo.enqueueReplaceState(n,n.state,null)}function kl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},xa(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Ne(o):(o=Se(n)?Vn:ce.current,i.context=Tt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(wl(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&lo.enqueueReplaceState(i,i.state,null),Ai(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jt(e,n){try{var t="",r=n;do t+=ap(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Ao(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Pl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Ng=typeof WeakMap=="function"?WeakMap:Map;function Id(e,n,t){t=en(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Hi||(Hi=!0,Dl=r),Pl(e,n)},t}function jd(e,n,t){t=en(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Pl(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Pl(e,n),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function lu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Ng;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Qg.bind(null,e,n,t),n.then(e,e))}function au(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function su(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=en(-1,1),n.tag=2,kn(t,n,1))),t.lanes|=1),e)}var Mg=an.ReactCurrentOwner,ye=!1;function fe(e,n,t,r){n.child=e===null?ld(n,null,t,r):bt(n,e.child,t,r)}function uu(e,n,t,r,i){t=t.render;var o=n.ref;return Ct(n,i),r=_a(e,n,t,r,o,i),t=Ea(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,on(e,n,i)):(W&&t&&pa(n),n.flags|=1,fe(e,n,r,i),n.child)}function cu(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Oa(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,$d(e,n,o,r,i)):(e=Pi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Rr,t(l,r)&&e.ref===n.ref)return on(e,n,i)}return n.flags|=1,e=_n(o,r),e.ref=n.ref,e.return=n,n.child=e}function $d(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Rr(o,r)&&e.ref===n.ref)if(ye=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return n.lanes=e.lanes,on(e,n,i)}return Cl(e,n,t,r,i)}function Dd(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(St,ke),ke|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,z(St,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,z(St,ke),ke|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,z(St,ke),ke|=r;return fe(e,n,i,t),n.child}function Nd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Cl(e,n,t,r,i){var o=Se(t)?Vn:ce.current;return o=Tt(n,o),Ct(n,i),t=_a(e,n,t,r,o,i),r=Ea(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,on(e,n,i)):(W&&r&&pa(n),n.flags|=1,fe(e,n,t,i),n.child)}function du(e,n,t,r,i){if(Se(t)){var o=!0;Ni(n)}else o=!1;if(Ct(n,i),n.stateNode===null)xi(e,n),bd(n,t,r),kl(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var s=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ne(u):(u=Se(t)?Vn:ce.current,u=Tt(n,u));var p=t.getDerivedStateFromProps,f=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&ou(n,l,r,u),fn=!1;var h=n.memoizedState;l.state=h,Ai(n,r,l,i),s=n.memoizedState,a!==r||h!==s||ve.current||fn?(typeof p=="function"&&(wl(n,t,p,r),s=n.memoizedState),(a=fn||iu(n,t,a,r,h,s,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,sd(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Le(n.type,a),l.props=u,f=n.pendingProps,h=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ne(s):(s=Se(t)?Vn:ce.current,s=Tt(n,s));var v=t.getDerivedStateFromProps;(p=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||h!==s)&&ou(n,l,r,s),fn=!1,h=n.memoizedState,l.state=h,Ai(n,r,l,i);var S=n.memoizedState;a!==f||h!==S||ve.current||fn?(typeof v=="function"&&(wl(n,t,v,r),S=n.memoizedState),(u=fn||iu(n,t,u,r,h,S,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),l.props=r,l.state=S,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return _l(e,n,t,r,o,i)}function _l(e,n,t,r,i,o){Nd(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&Ys(n,t,!1),on(e,n,o);r=n.stateNode,Mg.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=bt(n,e.child,null,o),n.child=bt(n,null,a,o)):fe(e,n,a,o),n.memoizedState=r.state,i&&Ys(n,t,!0),n.child}function Md(e){var n=e.stateNode;n.pendingContext?Xs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Xs(e,n.context,!1),wa(e,n.containerInfo)}function fu(e,n,t,r,i){return Rt(),ma(i),n.flags|=256,fe(e,n,t,r),n.child}var El={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Od(e,n,t){var r=n.pendingProps,i=V.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(V,i&1),e===null)return Sl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=uo(l,r,0,null),e=Hn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Tl(t),n.memoizedState=El,e):ba(n,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Og(e,n,l,r,a,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=_n(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=_n(a,o):(o=Hn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?Tl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=El,r}return o=e.child,e=o.sibling,r=_n(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ba(e,n){return n=uo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ai(e,n,t,r){return r!==null&&ma(r),bt(n,e.child,null,t),e=ba(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Og(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=Ao(Error(P(422))),ai(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=uo({mode:"visible",children:r.children},i,0,null),o=Hn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&bt(n,e.child,null,l),n.child.memoizedState=Tl(l),n.memoizedState=El,o);if(!(n.mode&1))return ai(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(P(419)),r=Ao(o,r,void 0),ai(e,n,l,r)}if(a=(l&e.childLanes)!==0,ye||a){if(r=re,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rn(e,i),Fe(r,e,i,-1))}return Ma(),r=Ao(Error(P(421))),ai(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Xg.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Pe=wn(i.nextSibling),Ce=n,W=!0,Ae=null,e!==null&&(be[Ie++]=Je,be[Ie++]=qe,be[Ie++]=Gn,Je=e.id,qe=e.overflow,Gn=n),n=ba(n,r.children),n.flags|=4096,n)}function pu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),xl(e.return,n,t)}function Bo(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Ld(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(fe(e,n,r.children,t),r=V.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pu(e,t,n);else if(e.tag===19)pu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(V,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Bi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Bo(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Bi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Bo(n,!0,t,null,o);break;case"together":Bo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function xi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function on(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Qn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=_n(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=_n(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Lg(e,n,t){switch(n.tag){case 3:Md(n),Rt();break;case 5:ud(n);break;case 1:Se(n.type)&&Ni(n);break;case 4:wa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;z(Li,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(z(V,V.current&1),n.flags|=128,null):t&n.child.childLanes?Od(e,n,t):(z(V,V.current&1),e=on(e,n,t),e!==null?e.sibling:null);z(V,V.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ld(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(V,V.current),r)break;return null;case 22:case 23:return n.lanes=0,Dd(e,n,t)}return on(e,n,t)}var zd,Rl,Ad,Bd;zd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Rl=function(){};Ad=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Un(Qe.current);var o=null;switch(t){case"input":i=Yo(e,i),r=Yo(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=qo(e,i),r=qo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$i)}nl(t,r);var l;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(o||(o=[]),o.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&A("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Bd=function(e,n,t,r){t!==r&&(n.flags|=4)};function ir(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function zg(e,n,t){var r=n.pendingProps;switch(ga(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return Se(n.type)&&Di(),se(n),null;case 3:return r=n.stateNode,It(),B(ve),B(ce),Pa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ae!==null&&(Ol(Ae),Ae=null))),Rl(e,n),se(n),null;case 5:ka(n);var i=Un(Dr.current);if(t=n.type,e!==null&&n.stateNode!=null)Ad(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return se(n),null}if(e=Un(Qe.current),oi(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ge]=n,r[jr]=o,e=(n.mode&1)!==0,t){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(i=0;i<cr.length;i++)A(cr[i],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":ks(r,o),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},A("invalid",r);break;case"textarea":Cs(r,o),A("invalid",r)}nl(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ii(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ii(r.textContent,a,e),i=["children",""+a]):wr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&A("scroll",r)}switch(t){case"input":Yr(r),Ps(r,o,!0);break;case"textarea":Yr(r),_s(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$i)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ge]=n,e[jr]=r,zd(e,n,!1,!1),n.stateNode=e;e:{switch(l=tl(t,r),t){case"dialog":A("cancel",e),A("close",e),i=r;break;case"iframe":case"object":case"embed":A("load",e),i=r;break;case"video":case"audio":for(i=0;i<cr.length;i++)A(cr[i],e);i=r;break;case"source":A("error",e),i=r;break;case"img":case"image":case"link":A("error",e),A("load",e),i=r;break;case"details":A("toggle",e),i=r;break;case"input":ks(e,r),i=Yo(e,r),A("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),A("invalid",e);break;case"textarea":Cs(e,r),i=qo(e,r),A("invalid",e);break;default:i=r}nl(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?yc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&mc(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&kr(e,s):typeof s=="number"&&kr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&A("scroll",e):s!=null&&ql(e,o,s,l))}switch(t){case"input":Yr(e),Ps(e,r,!1);break;case"textarea":Yr(e),_s(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?xt(e,!!r.multiple,o,!1):r.defaultValue!=null&&xt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$i)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Bd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=Un(Dr.current),Un(Qe.current),oi(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ge]=n,(o=r.nodeValue!==t)&&(e=Ce,e!==null))switch(e.tag){case 3:ii(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ii(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ge]=n,n.stateNode=r}return se(n),null;case 13:if(B(V),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Pe!==null&&n.mode&1&&!(n.flags&128))id(),Rt(),n.flags|=98560,o=!1;else if(o=oi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[Ge]=n}else Rt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),o=!1}else Ae!==null&&(Ol(Ae),Ae=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||V.current&1?ne===0&&(ne=3):Ma())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return It(),Rl(e,n),e===null&&br(n.stateNode.containerInfo),se(n),null;case 10:return va(n.type._context),se(n),null;case 17:return Se(n.type)&&Di(),se(n),null;case 19:if(B(V),o=n.memoizedState,o===null)return se(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)ir(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Bi(e),l!==null){for(n.flags|=128,ir(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return z(V,V.current&1|2),n.child}e=e.sibling}o.tail!==null&&Z()>$t&&(n.flags|=128,r=!0,ir(o,!1),n.lanes=4194304)}else{if(!r)if(e=Bi(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!W)return se(n),null}else 2*Z()-o.renderingStartTime>$t&&t!==1073741824&&(n.flags|=128,r=!0,ir(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Z(),n.sibling=null,t=V.current,z(V,r?t&1|2:t&1),n):(se(n),null);case 22:case 23:return Na(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ke&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function Ag(e,n){switch(ga(n),n.tag){case 1:return Se(n.type)&&Di(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return It(),B(ve),B(ce),Pa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ka(n),null;case 13:if(B(V),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));Rt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(V),null;case 4:return It(),null;case 10:return va(n.type._context),null;case 22:case 23:return Na(),null;case 24:return null;default:return null}}var si=!1,ue=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,E=null;function vt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){X(e,n,r)}else t.current=null}function bl(e,n,t){try{t()}catch(r){X(e,n,r)}}var gu=!1;function Fg(e,n){if(fl=bi,e=Vc(),fa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,s=-1,u=0,p=0,f=e,h=null;n:for(;;){for(var v;f!==t||i!==0&&f.nodeType!==3||(a=l+i),f!==o||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break n;if(h===t&&++u===i&&(a=l),h===o&&++p===r&&(s=l),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(pl={focusedElem:e,selectionRange:t},bi=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,k=S.memoizedState,m=n.stateNode,d=m.getSnapshotBeforeUpdate(n.elementType===n.type?x:Le(n.type,x),k);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){X(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return S=gu,gu=!1,S}function vr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&bl(n,t,o)}i=i.next}while(i!==r)}}function ao(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Il(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Fd(e){var n=e.alternate;n!==null&&(e.alternate=null,Fd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ge],delete n[jr],delete n[hl],delete n[Pg],delete n[Cg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ud(e){return e.tag===5||e.tag===3||e.tag===4}function mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=$i));else if(r!==4&&(e=e.child,e!==null))for(jl(e,n,t),e=e.sibling;e!==null;)jl(e,n,t),e=e.sibling}function $l(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($l(e,n,t),e=e.sibling;e!==null;)$l(e,n,t),e=e.sibling}var ie=null,ze=!1;function cn(e,n,t){for(t=t.child;t!==null;)Wd(e,n,t),t=t.sibling}function Wd(e,n,t){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(qi,t)}catch{}switch(t.tag){case 5:ue||vt(t,n);case 6:var r=ie,i=ze;ie=null,cn(e,n,t),ie=r,ze=i,ie!==null&&(ze?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(ze?(e=ie,t=t.stateNode,e.nodeType===8?Do(e.parentNode,t):e.nodeType===1&&Do(e,t),Er(e)):Do(ie,t.stateNode));break;case 4:r=ie,i=ze,ie=t.stateNode.containerInfo,ze=!0,cn(e,n,t),ie=r,ze=i;break;case 0:case 11:case 14:case 15:if(!ue&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&bl(t,n,l),i=i.next}while(i!==r)}cn(e,n,t);break;case 1:if(!ue&&(vt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){X(t,n,a)}cn(e,n,t);break;case 21:cn(e,n,t);break;case 22:t.mode&1?(ue=(r=ue)||t.memoizedState!==null,cn(e,n,t),ue=r):cn(e,n,t);break;default:cn(e,n,t)}}function hu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Bg),n.forEach(function(r){var i=Yg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Oe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,ze=!1;break e;case 3:ie=a.stateNode.containerInfo,ze=!0;break e;case 4:ie=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(ie===null)throw Error(P(160));Wd(o,l,i),ie=null,ze=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){X(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Hd(n,e),n=n.sibling}function Hd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(n,e),He(e),r&4){try{vr(3,e,e.return),ao(3,e)}catch(x){X(e,e.return,x)}try{vr(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:Oe(n,e),He(e),r&512&&t!==null&&vt(t,t.return);break;case 5:if(Oe(n,e),He(e),r&512&&t!==null&&vt(t,t.return),e.flags&32){var i=e.stateNode;try{kr(i,"")}catch(x){X(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&fc(i,o),tl(a,l);var u=tl(a,o);for(l=0;l<s.length;l+=2){var p=s[l],f=s[l+1];p==="style"?yc(i,f):p==="dangerouslySetInnerHTML"?mc(i,f):p==="children"?kr(i,f):ql(i,p,f,u)}switch(a){case"input":Zo(i,o);break;case"textarea":pc(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?xt(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?xt(i,!!o.multiple,o.defaultValue,!0):xt(i,!!o.multiple,o.multiple?[]:"",!1))}i[jr]=o}catch(x){X(e,e.return,x)}}break;case 6:if(Oe(n,e),He(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){X(e,e.return,x)}}break;case 3:if(Oe(n,e),He(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:Oe(n,e),He(e);break;case 13:Oe(n,e),He(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($a=Z())),r&4&&hu(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(ue=(u=ue)||p,Oe(n,e),ue=u):Oe(n,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(E=e,p=e.child;p!==null;){for(f=E=p;E!==null;){switch(h=E,v=h.child,h.tag){case 0:case 11:case 14:case 15:vr(4,h,h.return);break;case 1:vt(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(x){X(r,t,x)}}break;case 5:vt(h,h.return);break;case 22:if(h.memoizedState!==null){vu(f);continue}}v!==null?(v.return=h,E=v):vu(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=hc("display",l))}catch(x){X(e,e.return,x)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){X(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Oe(n,e),He(e),r&4&&hu(e);break;case 21:break;default:Oe(n,e),He(e)}}function He(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ud(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(kr(i,""),r.flags&=-33);var o=mu(e);$l(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=mu(e);jl(e,a,l);break;default:throw Error(P(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ug(e,n,t){E=e,Vd(e)}function Vd(e,n,t){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||si;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||ue;a=si;var u=ue;if(si=l,(ue=s)&&!u)for(E=i;E!==null;)l=E,s=l.child,l.tag===22&&l.memoizedState!==null?Su(i):s!==null?(s.return=l,E=s):Su(i);for(;o!==null;)E=o,Vd(o),o=o.sibling;E=i,si=a,ue=u}yu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):yu(e)}}function yu(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ue||ao(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ue)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&nu(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}nu(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&Er(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ue||n.flags&512&&Il(n)}catch(h){X(n,n.return,h)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function vu(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function Su(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ao(4,n)}catch(s){X(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){X(n,i,s)}}var o=n.return;try{Il(n)}catch(s){X(n,o,s)}break;case 5:var l=n.return;try{Il(n)}catch(s){X(n,l,s)}}}catch(s){X(n,n.return,s)}if(n===e){E=null;break}var a=n.sibling;if(a!==null){a.return=n.return,E=a;break}E=n.return}}var Wg=Math.ceil,Wi=an.ReactCurrentDispatcher,Ia=an.ReactCurrentOwner,De=an.ReactCurrentBatchConfig,N=0,re=null,q=null,oe=0,ke=0,St=In(0),ne=0,Lr=null,Qn=0,so=0,ja=0,Sr=null,he=null,$a=0,$t=1/0,Ye=null,Hi=!1,Dl=null,Pn=null,ui=!1,hn=null,Vi=0,xr=0,Nl=null,wi=-1,ki=0;function pe(){return N&6?Z():wi!==-1?wi:wi=Z()}function Cn(e){return e.mode&1?N&2&&oe!==0?oe&-oe:Eg.transition!==null?(ki===0&&(ki=bc()),ki):(e=O,e!==0||(e=window.event,e=e===void 0?16:Oc(e.type)),e):1}function Fe(e,n,t,r){if(50<xr)throw xr=0,Nl=null,Error(P(185));Ur(e,t,r),(!(N&2)||e!==re)&&(e===re&&(!(N&2)&&(so|=t),ne===4&&gn(e,oe)),xe(e,r),t===1&&N===0&&!(n.mode&1)&&($t=Z()+500,io&&jn()))}function xe(e,n){var t=e.callbackNode;Ep(e,n);var r=Ri(e,e===re?oe:0);if(r===0)t!==null&&Rs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Rs(t),n===1)e.tag===0?_g(xu.bind(null,e)):nd(xu.bind(null,e)),wg(function(){!(N&6)&&jn()}),t=null;else{switch(Ic(r)){case 1:t=ia;break;case 4:t=Tc;break;case 16:t=Ti;break;case 536870912:t=Rc;break;default:t=Ti}t=qd(t,Gd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Gd(e,n){if(wi=-1,ki=0,N&6)throw Error(P(327));var t=e.callbackNode;if(_t()&&e.callbackNode!==t)return null;var r=Ri(e,e===re?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Gi(e,r);else{n=r;var i=N;N|=2;var o=Qd();(re!==e||oe!==n)&&(Ye=null,$t=Z()+500,Wn(e,n));do try{Gg();break}catch(a){Kd(e,a)}while(!0);ya(),Wi.current=o,N=i,q!==null?n=0:(re=null,oe=0,n=ne)}if(n!==0){if(n===2&&(i=al(e),i!==0&&(r=i,n=Ml(e,i))),n===1)throw t=Lr,Wn(e,0),gn(e,r),xe(e,Z()),t;if(n===6)gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Hg(i)&&(n=Gi(e,r),n===2&&(o=al(e),o!==0&&(r=o,n=Ml(e,o))),n===1))throw t=Lr,Wn(e,0),gn(e,r),xe(e,Z()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:An(e,he,Ye);break;case 3:if(gn(e,r),(r&130023424)===r&&(n=$a+500-Z(),10<n)){if(Ri(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ml(An.bind(null,e,he,Ye),n);break}An(e,he,Ye);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-Be(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wg(r/1960))-r,10<r){e.timeoutHandle=ml(An.bind(null,e,he,Ye),r);break}An(e,he,Ye);break;case 5:An(e,he,Ye);break;default:throw Error(P(329))}}}return xe(e,Z()),e.callbackNode===t?Gd.bind(null,e):null}function Ml(e,n){var t=Sr;return e.current.memoizedState.isDehydrated&&(Wn(e,n).flags|=256),e=Gi(e,n),e!==2&&(n=he,he=t,n!==null&&Ol(n)),e}function Ol(e){he===null?he=e:he.push.apply(he,e)}function Hg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Ue(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gn(e,n){for(n&=~ja,n&=~so,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Be(n),r=1<<t;e[t]=-1,n&=~r}}function xu(e){if(N&6)throw Error(P(327));_t();var n=Ri(e,0);if(!(n&1))return xe(e,Z()),null;var t=Gi(e,n);if(e.tag!==0&&t===2){var r=al(e);r!==0&&(n=r,t=Ml(e,r))}if(t===1)throw t=Lr,Wn(e,0),gn(e,n),xe(e,Z()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,An(e,he,Ye),xe(e,Z()),null}function Da(e,n){var t=N;N|=1;try{return e(n)}finally{N=t,N===0&&($t=Z()+500,io&&jn())}}function Xn(e){hn!==null&&hn.tag===0&&!(N&6)&&_t();var n=N;N|=1;var t=De.transition,r=O;try{if(De.transition=null,O=1,e)return e()}finally{O=r,De.transition=t,N=n,!(N&6)&&jn()}}function Na(){ke=St.current,B(St)}function Wn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,xg(t)),q!==null)for(t=q.return;t!==null;){var r=t;switch(ga(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Di();break;case 3:It(),B(ve),B(ce),Pa();break;case 5:ka(r);break;case 4:It();break;case 13:B(V);break;case 19:B(V);break;case 10:va(r.type._context);break;case 22:case 23:Na()}t=t.return}if(re=e,q=e=_n(e.current,null),oe=ke=n,ne=0,Lr=null,ja=so=Qn=0,he=Sr=null,Fn!==null){for(n=0;n<Fn.length;n++)if(t=Fn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}Fn=null}return e}function Kd(e,n){do{var t=q;try{if(ya(),vi.current=Ui,Fi){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fi=!1}if(Kn=0,te=ee=G=null,yr=!1,Nr=0,Ia.current=null,t===null||t.return===null){ne=1,Lr=n,q=null;break}e:{var o=e,l=t.return,a=t,s=n;if(n=oe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=au(l);if(v!==null){v.flags&=-257,su(v,l,a,o,n),v.mode&1&&lu(o,u,n),n=v,s=u;var S=n.updateQueue;if(S===null){var x=new Set;x.add(s),n.updateQueue=x}else S.add(s);break e}else{if(!(n&1)){lu(o,u,n),Ma();break e}s=Error(P(426))}}else if(W&&a.mode&1){var k=au(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),su(k,l,a,o,n),ma(jt(s,a));break e}}o=s=jt(s,a),ne!==4&&(ne=2),Sr===null?Sr=[o]:Sr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var m=Id(o,s,n);eu(o,m);break e;case 1:a=s;var d=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pn===null||!Pn.has(g)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=jd(o,a,n);eu(o,w);break e}}o=o.return}while(o!==null)}Yd(t)}catch(C){n=C,q===t&&t!==null&&(q=t=t.return);continue}break}while(!0)}function Qd(){var e=Wi.current;return Wi.current=Ui,e===null?Ui:e}function Ma(){(ne===0||ne===3||ne===2)&&(ne=4),re===null||!(Qn&268435455)&&!(so&268435455)||gn(re,oe)}function Gi(e,n){var t=N;N|=2;var r=Qd();(re!==e||oe!==n)&&(Ye=null,Wn(e,n));do try{Vg();break}catch(i){Kd(e,i)}while(!0);if(ya(),N=t,Wi.current=r,q!==null)throw Error(P(261));return re=null,oe=0,ne}function Vg(){for(;q!==null;)Xd(q)}function Gg(){for(;q!==null&&!yp();)Xd(q)}function Xd(e){var n=Jd(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?Yd(e):q=n,Ia.current=null}function Yd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ag(t,n),t!==null){t.flags&=32767,q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,q=null;return}}else if(t=zg(t,n,ke),t!==null){q=t;return}if(n=n.sibling,n!==null){q=n;return}q=n=e}while(n!==null);ne===0&&(ne=5)}function An(e,n,t){var r=O,i=De.transition;try{De.transition=null,O=1,Kg(e,n,t,r)}finally{De.transition=i,O=r}return null}function Kg(e,n,t,r){do _t();while(hn!==null);if(N&6)throw Error(P(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Tp(e,o),e===re&&(q=re=null,oe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ui||(ui=!0,qd(Ti,function(){return _t(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=De.transition,De.transition=null;var l=O;O=1;var a=N;N|=4,Ia.current=null,Fg(e,t),Hd(t,e),pg(pl),bi=!!fl,pl=fl=null,e.current=t,Ug(t),vp(),N=a,O=l,De.transition=o}else e.current=t;if(ui&&(ui=!1,hn=e,Vi=i),o=e.pendingLanes,o===0&&(Pn=null),wp(t.stateNode),xe(e,Z()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hi)throw Hi=!1,e=Dl,Dl=null,e;return Vi&1&&e.tag!==0&&_t(),o=e.pendingLanes,o&1?e===Nl?xr++:(xr=0,Nl=e):xr=0,jn(),null}function _t(){if(hn!==null){var e=Ic(Vi),n=De.transition,t=O;try{if(De.transition=null,O=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,Vi=0,N&6)throw Error(P(331));var i=N;for(N|=4,E=e.current;E!==null;){var o=E,l=o.child;if(E.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(E=u;E!==null;){var p=E;switch(p.tag){case 0:case 11:case 15:vr(8,p,o)}var f=p.child;if(f!==null)f.return=p,E=f;else for(;E!==null;){p=E;var h=p.sibling,v=p.return;if(Fd(p),p===u){E=null;break}if(h!==null){h.return=v,E=h;break}E=v}}}var S=o.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}E=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,E=l;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,E=m;break e}E=o.return}}var d=e.current;for(E=d;E!==null;){l=E;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,E=g;else e:for(l=d;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ao(9,a)}}catch(C){X(a,a.return,C)}if(a===l){E=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,E=w;break e}E=a.return}}if(N=i,jn(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(qi,e)}catch{}r=!0}return r}finally{O=t,De.transition=n}}return!1}function wu(e,n,t){n=jt(t,n),n=Id(e,n,1),e=kn(e,n,1),n=pe(),e!==null&&(Ur(e,1,n),xe(e,n))}function X(e,n,t){if(e.tag===3)wu(e,e,t);else for(;n!==null;){if(n.tag===3){wu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=jt(t,e),e=jd(n,e,1),n=kn(n,e,1),e=pe(),n!==null&&(Ur(n,1,e),xe(n,e));break}}n=n.return}}function Qg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=pe(),e.pingedLanes|=e.suspendedLanes&t,re===e&&(oe&t)===t&&(ne===4||ne===3&&(oe&130023424)===oe&&500>Z()-$a?Wn(e,0):ja|=t),xe(e,n)}function Zd(e,n){n===0&&(e.mode&1?(n=qr,qr<<=1,!(qr&130023424)&&(qr=4194304)):n=1);var t=pe();e=rn(e,n),e!==null&&(Ur(e,n,t),xe(e,t))}function Xg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Zd(e,t)}function Yg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),Zd(e,t)}var Jd;Jd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ye=!1,Lg(e,n,t);ye=!!(e.flags&131072)}else ye=!1,W&&n.flags&1048576&&td(n,Oi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;xi(e,n),e=n.pendingProps;var i=Tt(n,ce.current);Ct(n,t),i=_a(null,n,r,e,i,t);var o=Ea();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Se(r)?(o=!0,Ni(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xa(n),i.updater=lo,n.stateNode=i,i._reactInternals=n,kl(n,r,e,t),n=_l(null,n,r,!0,o,t)):(n.tag=0,W&&o&&pa(n),fe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(xi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Jg(r),e=Le(r,e),i){case 0:n=Cl(null,n,r,e,t);break e;case 1:n=du(null,n,r,e,t);break e;case 11:n=uu(null,n,r,e,t);break e;case 14:n=cu(null,n,r,Le(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Cl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),du(e,n,r,i,t);case 3:e:{if(Md(n),e===null)throw Error(P(387));r=n.pendingProps,o=n.memoizedState,i=o.element,sd(e,n),Ai(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=jt(Error(P(423)),n),n=fu(e,n,r,t,i);break e}else if(r!==i){i=jt(Error(P(424)),n),n=fu(e,n,r,t,i);break e}else for(Pe=wn(n.stateNode.containerInfo.firstChild),Ce=n,W=!0,Ae=null,t=ld(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Rt(),r===i){n=on(e,n,t);break e}fe(e,n,r,t)}n=n.child}return n;case 5:return ud(n),e===null&&Sl(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,gl(r,i)?l=null:o!==null&&gl(r,o)&&(n.flags|=32),Nd(e,n),fe(e,n,l,t),n.child;case 6:return e===null&&Sl(n),null;case 13:return Od(e,n,t);case 4:return wa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=bt(n,null,r,t):fe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),uu(e,n,r,i,t);case 7:return fe(e,n,n.pendingProps,t),n.child;case 8:return fe(e,n,n.pendingProps.children,t),n.child;case 12:return fe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,z(Li,r._currentValue),r._currentValue=l,o!==null)if(Ue(o.value,l)){if(o.children===i.children&&!ve.current){n=on(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=en(-1,t&-t),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),xl(o.return,t,n),a.lanes|=t;break}s=s.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(P(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),xl(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}fe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Ct(n,t),i=Ne(i),r=r(i),n.flags|=1,fe(e,n,r,t),n.child;case 14:return r=n.type,i=Le(r,n.pendingProps),i=Le(r.type,i),cu(e,n,r,i,t);case 15:return $d(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),xi(e,n),n.tag=1,Se(r)?(e=!0,Ni(n)):e=!1,Ct(n,t),bd(n,r,i),kl(n,r,i,t),_l(null,n,r,!0,e,t);case 19:return Ld(e,n,t);case 22:return Dd(e,n,t)}throw Error(P(156,n.tag))};function qd(e,n){return Ec(e,n)}function Zg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,n,t,r){return new Zg(e,n,t,r)}function Oa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jg(e){if(typeof e=="function")return Oa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===na)return 11;if(e===ta)return 14}return 2}function _n(e,n){var t=e.alternate;return t===null?(t=je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Pi(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")Oa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ut:return Hn(t.children,i,o,n);case ea:l=8,i|=8;break;case Go:return e=je(12,t,n,i|2),e.elementType=Go,e.lanes=o,e;case Ko:return e=je(13,t,n,i),e.elementType=Ko,e.lanes=o,e;case Qo:return e=je(19,t,n,i),e.elementType=Qo,e.lanes=o,e;case uc:return uo(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ac:l=10;break e;case sc:l=9;break e;case na:l=11;break e;case ta:l=14;break e;case dn:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=je(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Hn(e,n,t,r){return e=je(7,e,r,n),e.lanes=t,e}function uo(e,n,t,r){return e=je(22,e,r,n),e.elementType=uc,e.lanes=t,e.stateNode={isHidden:!1},e}function Fo(e,n,t){return e=je(6,e,null,n),e.lanes=t,e}function Uo(e,n,t){return n=je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function qg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ko(0),this.expirationTimes=ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function La(e,n,t,r,i,o,l,a,s){return e=new qg(e,n,t,a,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=je(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},xa(o),e}function em(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:st,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ef(e){if(!e)return Rn;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Se(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(Se(t))return ed(e,t,n)}return n}function nf(e,n,t,r,i,o,l,a,s){return e=La(t,r,!0,e,i,o,l,a,s),e.context=ef(null),t=e.current,r=pe(),i=Cn(t),o=en(r,i),o.callback=n??null,kn(t,o,i),e.current.lanes=i,Ur(e,i,r),xe(e,r),e}function co(e,n,t,r){var i=n.current,o=pe(),l=Cn(i);return t=ef(t),n.context===null?n.context=t:n.pendingContext=t,n=en(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=kn(i,n,l),e!==null&&(Fe(e,i,l,o),yi(e,i,l)),l}function Ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ku(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function za(e,n){ku(e,n),(e=e.alternate)&&ku(e,n)}function nm(){return null}var tf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Aa(e){this._internalRoot=e}fo.prototype.render=Aa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));co(e,n,null,null)};fo.prototype.unmount=Aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xn(function(){co(null,e,null,null)}),n[tn]=null}};function fo(e){this._internalRoot=e}fo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Dc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<pn.length&&n!==0&&n<pn[t].priority;t++);pn.splice(t,0,e),t===0&&Mc(e)}};function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pu(){}function tm(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ki(l);o.call(u)}}var l=nf(n,r,e,0,null,!1,!1,"",Pu);return e._reactRootContainer=l,e[tn]=l.current,br(e.nodeType===8?e.parentNode:e),Xn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ki(s);a.call(u)}}var s=La(e,0,!1,null,null,!1,!1,"",Pu);return e._reactRootContainer=s,e[tn]=s.current,br(e.nodeType===8?e.parentNode:e),Xn(function(){co(n,s,t,r)}),s}function go(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Ki(l);a.call(s)}}co(n,l,e,i)}else l=tm(t,n,e,i,r);return Ki(l)}jc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ur(n.pendingLanes);t!==0&&(oa(n,t|1),xe(n,Z()),!(N&6)&&($t=Z()+500,jn()))}break;case 13:Xn(function(){var r=rn(e,1);if(r!==null){var i=pe();Fe(r,e,1,i)}}),za(e,1)}};la=function(e){if(e.tag===13){var n=rn(e,134217728);if(n!==null){var t=pe();Fe(n,e,134217728,t)}za(e,134217728)}};$c=function(e){if(e.tag===13){var n=Cn(e),t=rn(e,n);if(t!==null){var r=pe();Fe(t,e,n,r)}za(e,n)}};Dc=function(){return O};Nc=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};il=function(e,n,t){switch(n){case"input":if(Zo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ro(r);if(!i)throw Error(P(90));dc(r),Zo(r,i)}}}break;case"textarea":pc(e,t);break;case"select":n=t.value,n!=null&&xt(e,!!t.multiple,n,!1)}};xc=Da;wc=Xn;var rm={usingClientEntryPoint:!1,Events:[Hr,pt,ro,vc,Sc,Da]},or={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},im={bundleType:or.bundleType,version:or.version,rendererPackageName:or.rendererPackageName,rendererConfig:or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cc(e),e===null?null:e.stateNode},findFiberByHostInstance:or.findFiberByHostInstance||nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{qi=ci.inject(im),Ke=ci}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rm;Te.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ba(n))throw Error(P(200));return em(e,n,null,t)};Te.createRoot=function(e,n){if(!Ba(e))throw Error(P(299));var t=!1,r="",i=tf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=La(e,1,!1,null,null,t,!1,r,i),e[tn]=n.current,br(e.nodeType===8?e.parentNode:e),new Aa(n)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Cc(n),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Xn(e)};Te.hydrate=function(e,n,t){if(!po(n))throw Error(P(200));return go(null,e,n,!0,t)};Te.hydrateRoot=function(e,n,t){if(!Ba(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=tf;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=nf(n,null,e,1,t??null,i,!1,o,l),e[tn]=n.current,br(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new fo(n)};Te.render=function(e,n,t){if(!po(n))throw Error(P(200));return go(null,e,n,!1,t)};Te.unmountComponentAtNode=function(e){if(!po(e))throw Error(P(40));return e._reactRootContainer?(Xn(function(){go(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};Te.unstable_batchedUpdates=Da;Te.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!po(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return go(e,n,t,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function rf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rf)}catch(e){console.error(e)}}rf(),rc.exports=Te;var Qi=rc.exports,of,Cu=Qi;of=Ho.createRoot=Cu.createRoot,Ho.hydrateRoot=Cu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zr(){return zr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},zr.apply(null,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const _u="popstate";function om(e){e===void 0&&(e={});function n(i,o){let{pathname:l="/",search:a="",hash:s=""}=nt(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Ll("",{pathname:l,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){let l=i.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof o=="string"?o:Xi(o))}function r(i,o){Fa(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return am(n,t,r,e)}function J(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Fa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function lm(){return Math.random().toString(36).substr(2,8)}function Eu(e,n){return{usr:e.state,key:e.key,idx:n}}function Ll(e,n,t,r){return t===void 0&&(t=null),zr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?nt(n):n,{state:t,key:n&&n.key||r||lm()})}function Xi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function nt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function am(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=yn.Pop,s=null,u=p();u==null&&(u=0,l.replaceState(zr({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function f(){a=yn.Pop;let k=p(),m=k==null?null:k-u;u=k,s&&s({action:a,location:x.location,delta:m})}function h(k,m){a=yn.Push;let d=Ll(x.location,k,m);t&&t(d,k),u=p()+1;let g=Eu(d,u),w=x.createHref(d);try{l.pushState(g,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}o&&s&&s({action:a,location:x.location,delta:1})}function v(k,m){a=yn.Replace;let d=Ll(x.location,k,m);t&&t(d,k),u=p();let g=Eu(d,u),w=x.createHref(d);l.replaceState(g,"",w),o&&s&&s({action:a,location:x.location,delta:0})}function S(k){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:Xi(k);return d=d.replace(/ $/,"%20"),J(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let x={get action(){return a},get location(){return e(i,l)},listen(k){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(_u,f),s=k,()=>{i.removeEventListener(_u,f),s=null}},createHref(k){return n(i,k)},createURL:S,encodeLocation(k){let m=S(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(k){return l.go(k)}};return x}var Tu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Tu||(Tu={}));function sm(e,n,t){return t===void 0&&(t="/"),um(e,n,t)}function um(e,n,t,r){let i=typeof n=="string"?nt(n):n,o=Ua(i.pathname||"/",t);if(o==null)return null;let l=lf(e);cm(l);let a=null,s=km(o);for(let u=0;a==null&&u<l.length;++u)a=Sm(l[u],s);return a}function lf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(J(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=En([r,s.relativePath]),p=t.concat(s);o.children&&o.children.length>0&&(J(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),lf(o.children,n,p,u)),!(o.path==null&&!o.index)&&n.push({path:u,score:ym(u,o.index),routesMeta:p})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of af(o.path))i(o,l,s)}),n}function af(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=af(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function cm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:vm(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const dm=/^:[\w-]+$/,fm=3,pm=2,gm=1,mm=10,hm=-2,Ru=e=>e==="*";function ym(e,n){let t=e.split("/"),r=t.length;return t.some(Ru)&&(r+=hm),n&&(r+=pm),t.filter(i=>!Ru(i)).reduce((i,o)=>i+(dm.test(o)?fm:o===""?gm:mm),r)}function vm(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function Sm(e,n,t){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,p=o==="/"?n:n.slice(o.length)||"/",f=xm({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p),h=s.route;if(!f)return null;Object.assign(i,f.params),l.push({params:i,pathname:En([o,f.pathname]),pathnameBase:_m(En([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=En([o,f.pathnameBase]))}return l}function xm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=wm(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,p,f)=>{let{paramName:h,isOptional:v}=p;if(h==="*"){let x=a[f]||"";l=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const S=a[f];return v&&!S?u[h]=void 0:u[h]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function wm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Fa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function km(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Fa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ua(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Pm(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?nt(e):e,o;return t?(t=sf(t),t.startsWith("/")?o=bu(t.substring(1),"/"):o=bu(t,n)):o=n,{pathname:o,search:Em(r),hash:Tm(i)}}function bu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Wo(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Wa(e,n){let t=Cm(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Ha(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=nt(e):(i=zr({},e),J(!i.pathname||!i.pathname.includes("?"),Wo("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),Wo("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),Wo("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=t;else{let f=n.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?n[f]:"/"}let s=Pm(i,a),u=l&&l!=="/"&&l.endsWith("/"),p=(o||l===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}const sf=e=>e.replace(/\/\/+/g,"/"),En=e=>sf(e.join("/")),_m=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Em=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Tm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Rm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uf=["post","put","patch","delete"];new Set(uf);const bm=["get",...uf];new Set(bm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ar(){return Ar=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ar.apply(null,arguments)}const Va=y.createContext(null),Im=y.createContext(null),$n=y.createContext(null),mo=y.createContext(null),sn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),cf=y.createContext(null);function jm(e,n){let{relative:t}=n===void 0?{}:n;Ot()||J(!1);let{basename:r,navigator:i}=y.useContext($n),{hash:o,pathname:l,search:a}=pf(e,{relative:t}),s=l;return r!=="/"&&(s=l==="/"?r:En([r,l])),i.createHref({pathname:s,search:a,hash:o})}function Ot(){return y.useContext(mo)!=null}function Lt(){return Ot()||J(!1),y.useContext(mo).location}function df(e){y.useContext($n).static||y.useLayoutEffect(e)}function ff(){let{isDataRoute:e}=y.useContext(sn);return e?Vm():$m()}function $m(){Ot()||J(!1);let e=y.useContext(Va),{basename:n,future:t,navigator:r}=y.useContext($n),{matches:i}=y.useContext(sn),{pathname:o}=Lt(),l=JSON.stringify(Wa(i,t.v7_relativeSplatPath)),a=y.useRef(!1);return df(()=>{a.current=!0}),y.useCallback(function(u,p){if(p===void 0&&(p={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Ha(u,JSON.parse(l),o,p.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:En([n,f.pathname])),(p.replace?r.replace:r.push)(f,p.state,p)},[n,r,l,o,e])}function Dm(){let{matches:e}=y.useContext(sn),n=e[e.length-1];return n?n.params:{}}function pf(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=y.useContext($n),{matches:i}=y.useContext(sn),{pathname:o}=Lt(),l=JSON.stringify(Wa(i,r.v7_relativeSplatPath));return y.useMemo(()=>Ha(e,JSON.parse(l),o,t==="path"),[e,l,o,t])}function Nm(e,n){return Mm(e,n)}function Mm(e,n,t,r){Ot()||J(!1);let{navigator:i}=y.useContext($n),{matches:o}=y.useContext(sn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Lt(),p;if(n){var f;let k=typeof n=="string"?nt(n):n;s==="/"||(f=k.pathname)!=null&&f.startsWith(s)||J(!1),p=k}else p=u;let h=p.pathname||"/",v=h;if(s!=="/"){let k=s.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(k.length).join("/")}let S=sm(e,{pathname:v}),x=Bm(S&&S.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:En([s,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:En([s,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,t,r);return n&&x?y.createElement(mo.Provider,{value:{location:Ar({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:yn.Pop}},x):x}function Om(){let e=Hm(),n=Rm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:i},t):null,null)}const Lm=y.createElement(Om,null);class zm extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(sn.Provider,{value:this.props.routeContext},y.createElement(cf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Am(e){let{routeContext:n,match:t,children:r}=e,i=y.useContext(Va);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(sn.Provider,{value:n},r)}function Bm(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,a=(i=t)==null?void 0:i.errors;if(a!=null){let p=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);p>=0||J(!1),l=l.slice(0,Math.min(l.length,p+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<l.length;p++){let f=l[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=p),f.route.id){let{loaderData:h,errors:v}=t,S=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||S){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((p,f,h)=>{let v,S=!1,x=null,k=null;t&&(v=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||Lm,s&&(u<0&&h===0?(Gm("route-fallback"),S=!0,k=null):u===h&&(S=!0,k=f.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,h+1)),d=()=>{let g;return v?g=x:S?g=k:f.route.Component?g=y.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=p,y.createElement(Am,{match:f,routeContext:{outlet:p,matches:m,isDataRoute:t!=null},children:g})};return t&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?y.createElement(zm,{location:t.location,revalidation:t.revalidation,component:x,error:v,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var gf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(gf||{}),mf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mf||{});function Fm(e){let n=y.useContext(Va);return n||J(!1),n}function Um(e){let n=y.useContext(Im);return n||J(!1),n}function Wm(e){let n=y.useContext(sn);return n||J(!1),n}function hf(e){let n=Wm(),t=n.matches[n.matches.length-1];return t.route.id||J(!1),t.route.id}function Hm(){var e;let n=y.useContext(cf),t=Um(),r=hf();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Vm(){let{router:e}=Fm(gf.UseNavigateStable),n=hf(mf.UseNavigateStable),t=y.useRef(!1);return df(()=>{t.current=!0}),y.useCallback(function(i,o){o===void 0&&(o={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ar({fromRouteId:n},o)))},[e,n])}const Iu={};function Gm(e,n,t){Iu[e]||(Iu[e]=!0)}function Km(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function zl(e){let{to:n,replace:t,state:r,relative:i}=e;Ot()||J(!1);let{future:o,static:l}=y.useContext($n),{matches:a}=y.useContext(sn),{pathname:s}=Lt(),u=ff(),p=Ha(n,Wa(a,o.v7_relativeSplatPath),s,i==="path"),f=JSON.stringify(p);return y.useEffect(()=>u(JSON.parse(f),{replace:t,state:r,relative:i}),[u,f,i,t,r]),null}function dr(e){J(!1)}function Qm(e){let{basename:n="/",children:t=null,location:r,navigationType:i=yn.Pop,navigator:o,static:l=!1,future:a}=e;Ot()&&J(!1);let s=n.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:s,navigator:o,static:l,future:Ar({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=nt(r));let{pathname:p="/",search:f="",hash:h="",state:v=null,key:S="default"}=r,x=y.useMemo(()=>{let k=Ua(p,s);return k==null?null:{location:{pathname:k,search:f,hash:h,state:v,key:S},navigationType:i}},[s,p,f,h,v,S,i]);return x==null?null:y.createElement($n.Provider,{value:u},y.createElement(mo.Provider,{children:t,value:x}))}function Xm(e){let{children:n,location:t}=e;return Nm(Al(n),t)}new Promise(()=>{});function Al(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let o=[...n,i];if(r.type===y.Fragment){t.push.apply(t,Al(r.props.children,o));return}r.type!==dr&&J(!1),!r.props.index||!r.props.children||J(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Al(r.props.children,o)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Bl.apply(null,arguments)}function Ym(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Zm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jm(e,n){return e.button===0&&(!n||n==="_self")&&!Zm(e)}const qm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],eh="6";try{window.__reactRouterVersion=eh}catch{}const nh="startTransition",ju=Qf[nh];function th(e){let{basename:n,children:t,future:r,window:i}=e,o=y.useRef();o.current==null&&(o.current=om({window:i,v5Compat:!0}));let l=o.current,[a,s]=y.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=y.useCallback(f=>{u&&ju?ju(()=>s(f)):s(f)},[s,u]);return y.useLayoutEffect(()=>l.listen(p),[l,p]),y.useEffect(()=>Km(r),[r]),y.createElement(Qm,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:l,future:r})}const rh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fl=y.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:p,viewTransition:f}=n,h=Ym(n,qm),{basename:v}=y.useContext($n),S,x=!1;if(typeof u=="string"&&ih.test(u)&&(S=u,rh))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=Ua(w.pathname,v);w.origin===g.origin&&C!=null?u=C+w.search+w.hash:x=!0}catch{}let k=jm(u,{relative:i}),m=oh(u,{replace:l,state:a,target:s,preventScrollReset:p,relative:i,viewTransition:f});function d(g){r&&r(g),g.defaultPrevented||m(g)}return y.createElement("a",Bl({},h,{href:S||k,onClick:x||o?r:d,ref:t,target:s}))});var $u;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})($u||($u={}));var Du;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Du||(Du={}));function oh(e,n){let{target:t,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=n===void 0?{}:n,s=ff(),u=Lt(),p=pf(e,{relative:l});return y.useCallback(f=>{if(Jm(f,t)){f.preventDefault();let h=r!==void 0?r:Xi(u)===Xi(p);s(e,{replace:h,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[u,s,p,r,i,t,e,o,l,a])}const lh="https://github.com/frankvane/vane-components";class ah extends Fr.Component{constructor(){super(...arguments);ms(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?c.jsxs("div",{className:"crash",role:"alert",children:[c.jsx("h3",{children:"这个页面炸了"}),c.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),c.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function yf(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function sh({demos:e,pathname:n}){var s;const{groups:t,entries:r,label:i}=e,o=(s=r.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:s.meta.group,[l,a]=y.useState(()=>{var p;const u=(p=t[0])==null?void 0:p.key;return Object.fromEntries(t.map(f=>[f.key,f.key===(o??u)]))});return y.useEffect(()=>{o&&a(u=>u[o]?u:{...u,[o]:!0})},[o]),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-head",children:[c.jsx("span",{children:i}),c.jsxs("code",{children:[r.length," demos"]})]}),t.map(u=>{const p=r.filter(h=>h.meta.group===u.key);if(p.length===0)return null;const f=l[u.key]??!1;return c.jsxs("div",{className:"nav-group",children:[c.jsxs("button",{type:"button",className:`nav-group-head${o===u.key?" is-current":""}`,onClick:()=>a(h=>({...h,[u.key]:!f})),"aria-expanded":f,children:[c.jsx("span",{className:`nav-caret${f?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,c.jsx("code",{children:p.length})]}),f?c.jsx("div",{className:"nav-list",children:p.map(h=>c.jsxs(Fl,{to:`/demo/${h.meta.slug}`,className:`nav-sub${n===`/demo/${h.meta.slug}`?" is-active":""}`,children:[c.jsx("em",{"aria-hidden":!0,children:yf(e,h)}),h.meta.title]},h.meta.slug))}):null]},u.key)})]})}function uh({demos:e}){var a;const{slug:n}=Dm(),{entries:t,detail:r}=e,i=n?t.find(s=>s.meta.slug===n):void 0,o=(a=t[0])==null?void 0:a.meta.slug;if(!i)return c.jsx(zl,{to:o?`/demo/${o}`:"/",replace:!0});const l=t.indexOf(i)+1;return c.jsx(Fr.Fragment,{children:r(i,l)},i.meta.slug)}function ch({config:e}){var f,h;const{pathname:n}=Lt(),[t,r]=y.useState(!1),[i,o]=y.useState(!1);y.useEffect(()=>r(!1),[n]);const l=y.useCallback(()=>o(v=>!v),[]);y.useEffect(()=>{const v=S=>{const x=S.target,k=x&&(x.tagName==="INPUT"||x.tagName==="TEXTAREA"||x.isContentEditable);S.key==="Escape"&&r(!1),!k&&(S.key==="g"||S.key==="G")&&!S.metaKey&&!S.ctrlKey&&o(m=>!m)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]);const a=e.demos,s=(f=a.entries[0])==null?void 0:f.meta.slug,u=y.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const v=n.replace(/^\/demo\/?/,""),S=a.entries.find(x=>x.meta.slug===v);return S?`demo ${yf(a,S)} · ${S.meta.title}`:"demo · 逐项示例"},[n,e,a]),p=y.useMemo(()=>e.nav.map((v,S)=>({...v,no:String(S+1).padStart(2,"0")})),[e.nav]);return c.jsxs("div",{className:`shell${t?" is-nav-open":""}${i?" is-guides":""}`,children:[c.jsx("a",{className:"skip-link",href:"#main",onClick:v=>{v.preventDefault();const S=document.getElementById("main");S==null||S.setAttribute("tabindex","-1"),S==null||S.focus(),S==null||S.scrollIntoView({block:"start"})},children:"跳到内容"}),c.jsxs("aside",{className:"side","aria-label":"站点导航",children:[c.jsxs(Fl,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),c.jsxs("span",{children:[c.jsx("strong",{children:e.pkg}),c.jsx("em",{children:e.subtitle})]})]}),c.jsxs("nav",{children:[p.map(v=>c.jsxs(Fl,{to:v.to,className:`nav-item${n===v.to?" is-active":""}`,"aria-current":n===v.to?"page":void 0,children:[c.jsx("em",{"aria-hidden":!0,children:v.no}),c.jsx("span",{children:v.label}),v.hint?c.jsx("code",{children:v.hint}):null]},v.to)),c.jsx(sh,{demos:e.demos,pathname:n})]}),c.jsxs("div",{className:"side-foot",children:[c.jsx("p",{children:e.footer[0]}),c.jsx("p",{className:"muted",children:e.footer[1]})]})]}),c.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),c.jsxs("div",{className:"main",id:"main",children:[c.jsxs("header",{className:"topbar",children:[c.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(v=>!v),children:c.jsx("span",{"aria-hidden":!0})}),c.jsx("span",{className:"crumb",children:u}),c.jsxs("div",{className:"topbar-right",children:[(h=e.stats)==null?void 0:h.map(v=>c.jsxs("span",{className:"topbar-stat",title:v.title,children:[c.jsx("b",{children:v.value})," ",v.label]},v.label)),c.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":i,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[c.jsx("i",{"aria-hidden":!0}),"guides"]}),c.jsx("a",{className:"topbar-link",href:e.sourceUrl??lh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),c.jsx("div",{className:"guides","aria-hidden":!0}),c.jsx(y.Suspense,{fallback:c.jsx("div",{className:"loading",children:"loading modules…"}),children:c.jsx(ah,{children:c.jsxs(Xm,{children:[e.routes.map(v=>c.jsx(dr,{path:v.path,element:v.element},v.path)),c.jsx(dr,{path:"/demo",element:c.jsx(zl,{to:s?`/demo/${s}`:"/",replace:!0})}),c.jsx(dr,{path:"/demo/:slug",element:c.jsx(uh,{demos:e.demos})}),c.jsx(dr,{path:"*",element:c.jsx(zl,{to:"/",replace:!0})})]})})})]})]})}function dh({config:e}){return c.jsx(th,{children:c.jsx(ch,{config:e})})}const fh="modulepreload",ph=function(e,n){return new URL(e,n).href},Nu={},Ga=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=ph(u,r),u in Nu)return;Nu[u]=!0;const p=u.endsWith(".css"),f=p?'[rel="stylesheet"]':"";if(!!r)for(let S=l.length-1;S>=0;S--){const x=l[S];if(x.href===u&&(!p||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":fh,p||(v.as="script"),v.crossOrigin="",v.href=u,s&&v.setAttribute("nonce",s),document.head.appendChild(v),p)return new Promise((S,x)=>{v.addEventListener("load",S),v.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return i.then(l=>{for(const a of l||[])a.status==="rejected"&&o(a.reason);return n().catch(o)})};function gh(){const e=new Map,n=new Map,t=(l,a)=>{const s=e.get(l);if(s)for(const u of[...s])try{u(a)}catch(p){console.warn(`[PluginBus] handler error for event "${l}"`,p)}},r=(l,a)=>{let s=e.get(l);return s||(s=new Set,e.set(l,s)),s.add(a),()=>{s==null||s.delete(a)}},i=(l,a)=>{const s=u=>{a(u),o(l,s)};return r(l,s)},o=(l,a)=>{var s;if(!a){e.delete(l);return}(s=e.get(l))==null||s.delete(a)};return{emit:t,on:r,once:i,off:o,getData:l=>n.get(l),setData:(l,a)=>{const s=n.get(l);n.set(l,a),s!==a&&t(l,a)},deleteData:l=>{const a=n.has(l);n.delete(l),a&&t(l,void 0)},hasData:l=>n.has(l),getAll:()=>{const l={};return n.forEach((a,s)=>{l[s]=a}),l},clear:()=>{e.clear(),n.clear()}}}function vf(e){const n=new Map(e.map(a=>[a.name,a])),t=[];for(const a of e)for(const s of a.dependencies??[])n.has(s)||t.push(`${a.name} -> ${s}`);const r=[],i=new Set,o=[...e],l=a=>(a.dependencies??[]).every(s=>i.has(s)||!n.has(s));for(;o.length>0;){const a=o.filter(l);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${o.map(u=>u.name).join(" <-> ")}`);let s=a[0];for(const u of a)(u.priority??0)>(s.priority??0)&&(s=u);r.push(s),i.add(s.name),o.splice(o.indexOf(s),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}async function mh(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:i="unknown"}=n;if(!t||t<=0)return await e();let o;const l=new Promise((a,s)=>{o=setTimeout(()=>{s(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${i} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{o&&clearTimeout(o)}}const hh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function yh(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,i=[],o=[],l=new Map,a=()=>vf([...l.values()].filter(u=>u.enabled!==!1)),s=u=>{l.set(u.name,{...u,enabled:u.enabled??!0}),u.init&&Promise.resolve(u.init()).catch(p=>{n.warn(`[PluginManager] init failed for ${u.name}`,p)})};return{register:s,registerAll:u=>{for(const p of u)s(p)},unregister:u=>{const p=l.get(u);p&&(p.destroy&&Promise.resolve(p.destroy()).catch(f=>{n.warn(`[PluginManager] destroy failed for ${p.name}`,f)}),l.delete(u))},getPlugin:u=>l.get(u),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(u=>u.enabled!==!1),getExecutionOrder:a,enable:u=>{const p=l.get(u);p&&(p.enabled=!0)},disable:u=>{const p=l.get(u);p&&(p.enabled=!1)},has:u=>l.has(u),executeHook:async(u,p,...f)=>{var h,v;for(const S of a()){const x=(h=S.hooks)==null?void 0:h[u];if(typeof x!="function")continue;const k=S.sandbox??t,m=S.timeout??r;let d;try{d=k?await mh(()=>x(p,...f),{timeout:m,name:S.name,hook:String(u)}):await x(p,...f)}catch(g){if(i.push({plugin:S.name,hook:String(u),error:g}),n.warn(`[PluginManager] hook ${String(u)} failed in ${S.name}`,g),(v=e.onError)==null||v.call(e,S.name,String(u),g),u==="onError")break;continue}if(hh.has(String(u))&&typeof d=="function"){o.push(d);continue}if(d===!1)return!1;if(d!==void 0&&d!==!0)return d}},clear:()=>{const u=o.splice(0);for(const p of u.reverse())try{p()}catch(f){n.warn("[PluginManager] cleanup failed",f)}for(const p of l.values())p.destroy&&Promise.resolve(p.destroy()).catch(f=>{n.warn(`[PluginManager] destroy failed for ${p.name}`,f)});l.clear()},getErrors:()=>[...i]}}var vh=Object.defineProperty,Sh=(e,n,t)=>n in e?vh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,xh=(e,n,t)=>Sh(e,n+"",t);class Ka extends Fr.Component{constructor(){super(...arguments),xh(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var r,i;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(i=(r=this.props).onError)==null||i.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let di=null;function wh(e=!1){if(di&&!e)return di;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,i=typeof navigator<"u"&&navigator.userAgent||"",o=/iPad|Tablet/i.test(i),l=/Mobile|Android|iPhone/i.test(i),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return di={type:o?"tablet":l?"mobile":"desktop",os:i,browser:i,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:a,isRetina:r>=2},di}function Mu(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),r=Object.keys(n);return t.length!==r.length?!1:t.every(i=>Object.is(e[i],n[i]))}function kh(e){const{plugins:n,props:t,data:r,initialState:i,containerRef:o,enableDebug:l=!1,managerOptions:a,extendContext:s}=e,u=y.useRef(null),p=o??u,f=y.useRef(null);f.current||(f.current=yh(a));const h=f.current,v=y.useRef(null);v.current||(v.current=gh());const S=v.current,x=y.useRef(new Map),[k,m]=y.useState(i??{}),[,d]=y.useState(0),g=y.useCallback(()=>d(b=>b+1),[]),w=y.useMemo(()=>wh(),[]),C=y.useRef(n),R=C.current;(R.length!==n.length||n.some((b,I)=>b!==R[I]))&&(C.current=n);const T=C.current,j=T.map(b=>b.name).join("|");y.useLayoutEffect(()=>{h.clear(),h.registerAll(T),l&&console.debug("[vane/plugin-core] plugins registered:",j)},[T]),y.useLayoutEffect(()=>()=>{h.executeHook("onUnmount",$.current),h.clear()},[h]);const L=y.useMemo(()=>vf(T),[T]),$=y.useRef(null),de=y.useRef(t);Mu(de.current,t)||(de.current=t);const un=de.current,Xe=y.useRef(r);Mu(Xe.current,r)||(Xe.current=r);const Qt=Xe.current,Xt=y.useMemo(()=>{const b={props:un,data:Qt,bus:S,refs:{container:p,getContainer:()=>p.current},state:k,setState:I=>m(M=>({...M,...I})),shared:x.current,deviceInfo:w,forceUpdate:g,getSize:()=>{const I=p.current;return I?{width:I.offsetWidth,height:I.offsetHeight}:{width:0,height:0}},logger:console};return s?s(b):b},[un,Qt,k,w,S,s]);$.current=Xt;const Yt=y.useCallback(b=>{var M,U;let I=b;for(const We of L){const we=(M=We.hooks)==null?void 0:M.transformProps;if(typeof we=="function")try{I=we(I)}catch(On){(((U=$.current)==null?void 0:U.logger)??console).warn(`[plugin-core] ${We.name}.transformProps 执行失败，已跳过`,On)}}return I},[L]),Zt=y.useCallback(b=>{var M,U;let I=b;for(const We of L){const we=(M=We.hooks)==null?void 0:M.transformData;if(typeof we=="function")try{I=we($.current,I)}catch(On){(((U=$.current)==null?void 0:U.logger)??console).warn(`[plugin-core] ${We.name}.transformData 执行失败，已跳过`,On)}}return I},[L]),_=y.useCallback((b,...I)=>h.executeHook(b,$.current,...I),[h]);return{manager:h,bus:S,context:Xt,state:k,setState:Xt.setState,execute:_,transformProps:Yt,transformData:Zt,orderedPlugins:L}}y.createContext(null);function Ph(e,n,t){const{hook:r,position:i="after"}=t;return e.filter(o=>o.enabled!==!1).filter(o=>{var l;return typeof((l=o.hooks)==null?void 0:l[r])=="function"}).filter(o=>{var a;const l=(a=o.config)==null?void 0:a.slotPosition;return i==="before"?l==="before":i==="footer"?l===void 0||l==="after"||l==="footer":l===void 0||l==="after"}).sort((o,l)=>{var a,s;return(((a=o.config)==null?void 0:a.order)??0)-(((s=l.config)==null?void 0:s.order)??0)||(l.priority??0)-(o.priority??0)}).map(o=>{try{const l=o.hooks[r](n);return l==null?null:c.jsx(Ka,{children:l},`vane-slot-${o.name}`)}catch(l){return console.warn(`[vane/plugin-core] 插件 ${o.name} 的 ${r} 渲染失败`,l),null}})}const Ou=["renderHeader","renderCalendar","renderRewards","renderActions","renderFooter"],Lu=[];function Ch(e,n){var t,r;return(((t=e.config)==null?void 0:t.order)??0)-(((r=n.config)==null?void 0:r.order)??0)||(n.priority??0)-(e.priority??0)}function _h(e){var t;const n={renderHeader:[],renderCalendar:[],renderRewards:[],renderActions:[],renderFooter:[]};for(const r of e)if(r.enabled!==!1)for(const i of Ou)typeof((t=r.hooks)==null?void 0:t[i])=="function"&&n[i].push(r);for(const r of Ou)n[r].sort(Ch);return n}const Sf=y.createContext(null);function Eh({orderedPlugins:e,context:n,children:t}){const r=y.useMemo(()=>_h(e),[e]),i=y.useMemo(()=>({groups:r,context:n}),[r,n]);return c.jsx(Sf.Provider,{value:i,children:t})}function Th(e,n,t){return e.map(r=>{try{const i=r.hooks[t](n);return i==null?null:c.jsx(Ka,{children:i},`signin-slot-${r.name}`)}catch(i){return console.warn(`[vane-sign-in] 插件 ${r.name} 的 ${t} 渲染失败`,i),null}})}function lr(e){const n=y.useContext(Sf),t=n==null?void 0:n.groups[e],r=n==null?void 0:n.context;return y.useMemo(()=>{if(!t||!r)return Lu;const i=Th(t,r,e);return i.length?i:Lu},[t,r,e])}const xf=y.createContext(null);function Rh({children:e,onResume:n,intervalMs:t=1e3}){const[r,i]=y.useState(()=>Date.now());return y.useEffect(()=>{const o=setInterval(()=>i(Date.now()),t);return()=>clearInterval(o)},[t]),y.useEffect(()=>{if(typeof document>"u"||typeof window>"u")return;const o=()=>{document.visibilityState!=="hidden"&&(i(Date.now()),n==null||n())};return document.addEventListener("visibilitychange",o),window.addEventListener("focus",o),()=>{document.removeEventListener("visibilitychange",o),window.removeEventListener("focus",o)}},[n]),c.jsx(xf.Provider,{value:r,children:e})}function Qa(){return y.useContext(xf)??Date.now()}const F=y.forwardRef(function(n,t){var d;const{children:r,containerClassName:i,containerStyle:o,containerRefExternal:l}=n,a=y.useRef(null),s=l||a,[,u]=y.useState(0),p=y.useCallback(()=>u(g=>g+1),[]),f=(d=n.callbacks)==null?void 0:d.refresh,h=y.useCallback(()=>{if(f)try{const g=f();g&&typeof g.then=="function"&&g.catch(w=>{console.warn("[vane-sign-in] callbacks.refresh 执行失败",w)})}catch(g){console.warn("[vane-sign-in] callbacks.refresh 执行失败",g)}},[f]),v=lr("renderHeader"),S=lr("renderCalendar"),x=lr("renderRewards"),k=lr("renderActions"),m=lr("renderFooter");return y.useImperativeHandle(t,()=>({getContainer:()=>s.current,forceUpdate:p,getSize:()=>{const g=s.current;return g?{width:g.offsetWidth,height:g.offsetHeight}:{width:0,height:0}}}),[p]),c.jsx(Rh,{onResume:h,children:c.jsxs("div",{ref:s,"data-testid":"si-root",className:`vs-signin ${i||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",borderRadius:12,border:"1px solid #e3e5e8",boxShadow:"0 1px 3px rgba(16, 22, 26, 0.06)",overflow:"hidden",display:"flex",flexDirection:"column",width:"100%",maxWidth:460,...o},children:[v.length>0&&c.jsx("div",{className:"vs-header",style:{display:"flex",flexDirection:"column",gap:12,padding:"14px 16px 8px"},children:v}),S.length>0&&c.jsx("div",{className:"vs-calendar",style:{display:"flex",flexDirection:"column",gap:12,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:S}),x.length>0&&c.jsx("div",{className:"vs-rewards",style:{display:"flex",flexDirection:"column",gap:10,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:x}),k.length>0&&c.jsx("div",{className:"vs-actions",style:{display:"flex",flexWrap:"wrap",gap:8,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:k}),m.length>0&&c.jsx("div",{className:"vs-footer",style:{display:"flex",flexDirection:"column",gap:12,padding:"8px 16px 16px",borderTop:"1px solid #f0f2f4"},children:m}),r]})})});F.displayName="SignInCore";const wf=/^(\d{4})-(\d{2})-(\d{2})$/,zu=new Map;function at(e,n=2){return String(e).padStart(n,"0")}function bh(e){const n=zu.get(e);if(n)return n;const t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"});return zu.set(e,t),t}function Ul(e){const n=wf.exec(e);if(!n)throw new RangeError(`[vane-sign-in] 非法日期键：${String(e)}`);const t=Number(n[1]),r=Number(n[2]),i=Number(n[3]),o=new Date(0);if(o.setUTCFullYear(t,r-1,i),o.setUTCHours(0,0,0,0),o.getUTCFullYear()!==t||o.getUTCMonth()!==r-1||o.getUTCDate()!==i)throw new RangeError(`[vane-sign-in] 非法日期键：${String(e)}`);return o.getTime()}function Ih(e){if(e instanceof Date)return e;const n=new Date(e);if(Number.isNaN(n.getTime()))throw new RangeError(`[vane-sign-in] 非法时间值：${String(e)}`);return n}function Xa(e){if(typeof e!="string"||!wf.test(e))return!1;try{return Ul(e),!0}catch{return!1}}function Ya(e=Date.now(),n){if(typeof e=="string"&&Xa(e))return e;const t=Ih(e);if(n){const r=bh(n).formatToParts(t);let i="",o="",l="";for(const a of r)a.type==="year"?i=a.value:a.type==="month"?o=a.value:a.type==="day"&&(l=a.value);return`${at(Number(i),4)}-${at(Number(o))}-${at(Number(l))}`}return`${at(t.getFullYear(),4)}-${at(t.getMonth()+1)}-${at(t.getDate())}`}function jh(e,n){return Ya(e,n)}function Au(e,n){return Ul(e),Ul(n),e===n?0:e<n?-1:1}const $h=["signed","today","missed","future","reward"],Dh=["points","coupon","gift","badge"];function Yn(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function $e(e,n=0){return typeof e=="number"&&Number.isFinite(e)&&e>=0?Math.trunc(e):n}function Zn(e,n=""){return typeof e=="string"?e:n}function Nh(e){return typeof e=="string"&&$h.includes(e)}function Mh(e){if(typeof e!="string"||!e)return!1;try{return new Intl.DateTimeFormat("en-CA",{timeZone:e}),!0}catch{return!1}}function Wl(e){const n=e.kind;return{day:$e(e.day),kind:typeof n=="string"&&Dh.includes(n)?n:"points",value:typeof e.value=="number"&&Number.isFinite(e.value)?e.value:void 0,label:Zn(e.label),claimed:e.claimed===!0}}function Oh(e){const n=Yn(e)?e:{};return{date:Zn(n.date),day:$e(n.day),status:Nh(n.status)?n.status:"future",reward:Yn(n.reward)?Wl(n.reward):void 0,canMakeup:n.canMakeup===!0}}function Lh(e){if(!Yn(e))return;const n=typeof e.progress=="number"&&Number.isFinite(e.progress)?Math.min(1,Math.max(0,e.progress)):0;return{name:Zn(e.name),current:$e(e.current),next:$e(e.next),progress:n}}function zh(e){return Array.isArray(e)?e.map((n,t)=>{const r=Yn(n)?n:{};return{id:Zn(r.id,`record-${t}`),day:$e(r.day),label:Zn(r.label),at:typeof r.at=="number"&&Number.isFinite(r.at)?r.at:0}}):[]}function Ah(e){const n=Yn(e)?e:{};return{available:$e(n.available),used:$e(n.used),max:$e(n.max)}}function Bh(e){if(!Yn(e))return;const n=Zn(e.message);if(!n)return;const t=Zn(e.code);return t?{code:t,message:n}:{message:n}}function Fh(e){const n=e??{};return{todaySigned:n.todaySigned===!0,streak:$e(n.streak),maxStreak:$e(n.maxStreak),totalDays:$e(n.totalDays),points:$e(n.points),calendar:Array.isArray(n.calendar)?n.calendar.map(Oh):[],rewards:Array.isArray(n.rewards)?n.rewards.map(t=>Yn(t)?Wl(t):Wl({})):[],makeup:Ah(n.makeup),nextResetAt:typeof n.nextResetAt=="number"&&Number.isFinite(n.nextResetAt)?n.nextResetAt:void 0,businessTimeZone:Mh(n.businessTimeZone)?n.businessTimeZone:void 0,todayKey:Xa(n.todayKey)?n.todayKey:void 0,lastError:Bh(n.lastError),remindEnabled:typeof n.remindEnabled=="boolean"?n.remindEnabled:void 0,level:Lh(n.level),rules:Array.isArray(n.rules)?n.rules.filter(t=>typeof t=="string"):void 0,history:zh(n.history)}}const Uh={};function H(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:i=!1}=t,o=y.forwardRef((l,a)=>{const s=y.useRef(null),u=l.callbacks??Uh,p=y.useCallback(g=>({...g,data:l.data,callbacks:u}),[l.data,u]),f=kh({plugins:r,props:l,data:l.data,containerRef:s,extendContext:p,enableDebug:i}),h=y.useCallback((g,...w)=>f.execute(g,...w),[f.manager]),{transformData:v}=f,S=y.useMemo(()=>Fh(v(l.data)),[l.data,v]),x=y.useMemo(()=>({...f.context,data:S,callbacks:u}),[S,u,f.bus,f.state]),k=f.transformProps(l);y.useEffect(()=>{h("onMount")},[h]);const m=y.useRef(l);y.useEffect(()=>{const g=m.current;g!==l&&(m.current=l,h("onPropsChange",g,l))},[l,h]);const d={...k,data:S,containerRefExternal:s,debug:k.debug??i,onMount:()=>{var g;(g=k.onMount)==null||g.call(k)},onUnmount:()=>{var g;(g=k.onUnmount)==null||g.call(k)},children:c.jsx(Ka,{children:c.jsxs(c.Fragment,{children:[k.children,Ph(f.orderedPlugins,x,{hook:"renderOverlay"})]})})};return c.jsx(Eh,{orderedPlugins:f.orderedPlugins,context:x,children:c.jsx(e,{ref:a,...d})})});return o.displayName="WithPlugins(SignInCore)",o}const Ee="#cf4407",Wh="#fff1e6",kf="#b8860b",Hh="#0f8a4a",Vh="#1f2328",ln="#6b6b6b",Jn="#8a8a8a",Za="#f2f3f5",Gh="#8a8a8a",Kh="#e3e5e8",Yi={signed:{bg:"#fff1e6",fg:"#d35400",border:"#cf4407"},today:{bg:"#cf4407",fg:"#ffffff",border:"#cf4407"},missed:{bg:"#f2f3f5",fg:"#7d7d7d",border:"#e3e5e8"},future:{bg:"#fafafa",fg:"#8a8a8a",border:"#ececec"},reward:{bg:"#fff8e1",fg:"#b8860b",border:"#e0a800"}},Pf={signed:"✓",today:"今",missed:"·",future:"",reward:"★"},Cf={signed:"已签到",today:"今天",missed:"漏签",future:"未开始",reward:"奖励日"},Qh="StreakStatePlugin",Xh="连签状态：展示当前连签天数与历史最高连签，头部区渲染。",Yh="0.1.0",Zh=["streak","header","status"],Jh=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],qh=[],ey="只读取 context 字段（props / state / data），不调用上下文方法",ny=[{name:"showMax",type:"boolean",default:"true",description:"是否展示历史最高连签天数"}],ty="withSignInPlugins(SignInCore, [createStreakStatePlugin()])",ry=[{name:"默认",description:"头部展示连签天数与最高连签",src:"createStreakStatePlugin()",config:{}}],Ja={name:Qh,description:Xh,since:Yh,tags:Zh,events:Jh,methods:qh,methodsNote:ey,config:ny,example:ty,examples:ry};function Dn(e={}){const{showMax:n=!0}=e;return{name:"StreakState",version:"0.1.0",description:Ja.description,priority:10,enabled:!0,hooks:{renderHeader:t=>{const{streak:r,maxStreak:i}=t.data;return c.jsxs("div",{"data-testid":"si-streak",style:{display:"flex",alignItems:"baseline",gap:8},children:[c.jsx("span",{style:{fontSize:34,fontWeight:800,color:Ee,lineHeight:1,letterSpacing:"-0.5px"},children:r}),c.jsx("span",{style:{fontSize:13,color:ln,fontWeight:600},children:"天连签"}),n&&c.jsxs("span",{style:{marginLeft:"auto",fontSize:12,color:ln,background:"#faf7f4",border:`1px solid ${Kh}`,borderRadius:999,padding:"3px 10px",whiteSpace:"nowrap"},children:["最高 ",i," 天"]})]})}}}}Dn.meta=Ja;const iy="CalendarStripPlugin",oy="日历条：横向滚动的逐日格，展示已签/今日/漏签/未来/奖励五态，带奖励格金点提示。",ly="0.1.0",ay=["calendar","strip","status"],sy=[{name:"renderCalendar",when:"每次渲染，日历区槽位",description:"日历条 / 月历网格 / 漏签标记"}],uy=[],cy="只读取 context 字段（props / state / data），不调用上下文方法",dy=[{name:"showRewardDot",type:"boolean",default:"true",description:"是否在带奖励的格右上角显示金点"}],fy="withSignInPlugins(SignInCore, [createCalendarStripPlugin()])",py=[{name:"默认",description:"日历条展示当月逐日签到状态",src:"createCalendarStripPlugin()",config:{}}],qa={name:iy,description:oy,since:ly,tags:ay,events:sy,methods:uy,methodsNote:cy,config:dy,example:fy,examples:py};function tt(e={}){const{showRewardDot:n=!0}=e;return{name:"CalendarStrip",version:"0.1.0",description:qa.description,priority:20,enabled:!0,hooks:{renderCalendar:t=>{const r=t.data.calendar??[];return c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:r.map(i=>{const o=Yi[i.status]??Yi.future,l=!!(i.reward&&!i.reward.claimed),a=Cf[i.status]??i.status;return c.jsxs("div",{role:"img","aria-label":`${i.date} ${a}`,title:`${i.date} ${a}`,style:{flex:"0 0 auto",width:42,height:54,borderRadius:8,background:o.bg,color:o.fg,border:`1px solid ${o.border}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"},children:[c.jsxs("span",{style:{fontSize:11,color:o.fg},children:["第",i.day,"天"]}),c.jsx("span",{style:{fontSize:16,fontWeight:700,lineHeight:1.1},children:Pf[i.status]||i.day}),n&&l&&c.jsx("span",{style:{position:"absolute",top:4,right:4,width:6,height:6,borderRadius:"50%",background:kf}})]},i.date)})})}}}}tt.meta=qa;const gy="RewardPreviewPlugin",my="奖励预告：从当前连签天数起，逐日展示后续可领奖励（积分 / 券 / 礼包 / 徽章）。",hy="0.1.0",yy=["reward","preview","rewards"],vy=[{name:"renderRewards",when:"每次渲染，奖励区槽位",description:"逐日奖励预告、领取态、里程碑奖励"}],Sy=[],xy="只读取 context 字段（props / state / data），不调用上下文方法",wy=[{name:"limit",type:"number",default:"5",description:"最多展示的奖励预告条数"}],ky="withSignInPlugins(SignInCore, [createRewardPreviewPlugin()])",Py=[{name:"默认",description:"奖励区逐日预告后续奖励",src:"createRewardPreviewPlugin()",config:{}}],es={name:gy,description:my,since:hy,tags:yy,events:vy,methods:Sy,methodsNote:xy,config:wy,example:ky,examples:Py};function Nn(e={}){const{limit:n=5}=e;return{name:"RewardPreview",version:"0.1.0",description:es.description,priority:30,enabled:!0,hooks:{renderRewards:t=>{const r=[...t.data.rewards??[]].filter(i=>i.day>=t.data.streak).sort((i,o)=>i.day-o.day);return r.length?c.jsx("div",{style:{background:"#fafbfc",border:"1px solid #eef0f2",borderRadius:10,padding:"10px 12px",display:"flex",flexDirection:"column",gap:8},children:r.slice(0,n).map(i=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[c.jsx("span",{style:{width:32,height:32,borderRadius:8,flex:"0 0 auto",background:"#fff8e1",color:"#9a6a00",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:i.day}),c.jsx("span",{style:{color:"#1f2328"},children:i.label}),i.claimed&&c.jsx("span",{style:{marginLeft:"auto",color:"#0f8a4a",fontSize:12},children:"已领 ✓"})]},i.day))}):null}}}}Nn.meta=es;const Cy="MakeupSlotPlugin",_y="补签位：找到可补签的漏签格并提供补签入口，补签次数用尽后置灰禁用。",Ey="0.1.0",Ty=["makeup","actions","recovery"],Ry=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],by=[],Iy="只读取 context 字段（props / state / data），不调用上下文方法",jy=[{name:"buttonText",type:"string",default:"undefined",description:"自定义按钮文案（仅有可补目标且还有配额时生效）"},{name:"exhaustedText",type:"string",default:"补签次数已用完",description:"补签配额耗尽时的文案"},{name:"noTargetText",type:"string",default:"暂无可补签",description:"配额还在但没有可补目标（漏签格都在窗口外）时的文案"},{name:"errorText",type:"string",default:"补签失败，请重试",description:"回调失败时的兜底文案"}],$y="withSignInPlugins(SignInCore, [createMakeupSlotPlugin()])",Dy=[{name:"默认",description:"操作区补签入口，禁用态置灰",src:"createMakeupSlotPlugin()",config:{}}],ns={name:Cy,description:_y,since:Ey,tags:Ty,events:Ry,methods:by,methodsNote:Iy,config:jy,example:$y,examples:Dy};function zt(e,...n){if(!e)return Promise.resolve();try{const t=e(...n);return t&&typeof t.then=="function"?Promise.resolve(t):Promise.resolve()}catch(t){return Promise.reject(t)}}function ho(e,n){if(typeof e=="string"&&e.trim())return e;if(e&&typeof e=="object"){const t=e.message;if(typeof t=="string"&&t.trim())return t}return n}function Ny(e,n,t,r,i){const{makeup:o,calendar:l,todayKey:a,businessTimeZone:s}=e.data,u=a??Ya(n,s),p=(l??[]).filter(x=>x.canMakeup===!0&&Xa(x.date)&&Au(x.date,u)<=0).sort((x,k)=>Au(x.date,k.date))[0],f=o.available-o.used,h=f<=0,v=h||!p,S=h?r:p?t??`补签 · 剩${f}次`:i;return{cell:p,remaining:f,disabled:v,exhausted:h,label:S}}function My({ctx:e,target:n,errorText:t}){var p;const r=y.useRef(!1),[i,o]=y.useState(!1),[l,a]=y.useState(null),s=async()=>{const f=n.cell;if(!(!f||n.disabled||r.current)){r.current=!0,o(!0),a(null);try{await zt(e.callbacks.makeup,f.date,{day:f.day})}catch(h){a(ho(h,t))}finally{r.current=!1,o(!1)}}},u=n.disabled||i;return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[c.jsx("button",{type:"button","data-testid":"si-makeup-btn","data-disabled":String(u),"data-target":(p=n.cell)==null?void 0:p.date,"data-pending":String(i),"aria-busy":i||void 0,disabled:u,onClick:()=>{s()},style:{border:u?"1px solid #d8d8d8":`1px solid ${Ee}`,background:u?Za:"#fff",color:u?Gh:Ee,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:u?"not-allowed":"pointer"},children:i?"补签中…":n.label}),l&&c.jsx("div",{role:"alert","data-testid":"si-makeup-error",style:{fontSize:12,color:"#d4380d"},children:l})]})}function rt(e={}){const{buttonText:n,exhaustedText:t="补签次数已用完",noTargetText:r="暂无可补签",errorText:i="补签失败，请重试"}=e;return{name:"MakeupSlot",version:"0.1.0",description:ns.description,priority:42,enabled:!0,hooks:{renderActions:o=>c.jsx(Oy,{ctx:o,buttonText:n,exhaustedText:t,noTargetText:r,errorText:i})}}}function Oy({ctx:e,buttonText:n,exhaustedText:t,noTargetText:r,errorText:i}){const o=Qa(),l=y.useMemo(()=>Ny(e,o,n,t,r),[e,o,n,t,r]);return c.jsx(My,{ctx:e,target:l,errorText:i})}rt.meta=ns;const Ly="TodayCheckInPlugin",zy="今日签到：主 CTA，已签置灰、未签高亮，点击经回调下发签到动作。",Ay="0.1.0",By=["checkin","actions","cta"],Fy=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],Uy=[],Wy="只读取 context 字段（props / state / data），不调用上下文方法",Hy=[{name:"signedText",type:"string",default:"今日已签 ✓",description:"已签到时的按钮文案"},{name:"unsignedText",type:"string",default:"立即签到",description:"未签到时的按钮文案"},{name:"pendingText",type:"string",default:"签到中…",description:"请求在途（尚未返回）时的按钮文案；期间按钮禁用，防重复签到"},{name:"errorText",type:"string",default:"签到失败，请重试",description:"回调失败时的兜底文案（错误对象自带 message 时优先显示 message）"}],Vy="withSignInPlugins(SignInCore, [createTodayCheckInPlugin()])",Gy=[{name:"默认",description:"操作区主签到按钮",src:"createTodayCheckInPlugin()",config:{}}],ts={name:Ly,description:zy,since:Ay,tags:By,events:Fy,methods:Uy,methodsNote:Wy,config:Hy,example:Vy,examples:Gy};function Ky({ctx:e,signedText:n,unsignedText:t,pendingText:r,errorText:i}){const o=Qa(),{todaySigned:l,nextResetAt:a,todayKey:s,businessTimeZone:u,lastError:p}=e.data,f=y.useRef(!1),[h,v]=y.useState(!1),[S,x]=y.useState(null),k=y.useMemo(()=>l?a!==void 0&&o>=a?!0:s?Ya(o,u)!==s:!1:!1,[l,a,s,u,o]),m=l&&!k,d=S??(p==null?void 0:p.message)??null,g=async()=>{if(!(m||f.current)){f.current=!0,v(!0),x(null);try{await zt(e.callbacks.sign)}catch(w){x(ho(w,i))}finally{f.current=!1,v(!1)}}};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[c.jsx("button",{type:"button","data-testid":"si-checkin-btn","data-signed":String(m),"data-pending":String(h),"aria-busy":h||void 0,disabled:m||h,onClick:()=>{g()},style:{border:"none",background:m?"#f2f3f5":"#cf4407",color:m?"#8a8a8a":"#ffffff",borderRadius:20,padding:"8px 20px",fontSize:14,fontWeight:700,cursor:m||h?"not-allowed":"pointer"},children:h?r:m?n:t}),d&&c.jsx("div",{role:"alert","data-testid":"si-checkin-error",style:{fontSize:12,color:"#d4380d"},children:d})]})}function Mn(e={}){const{signedText:n="今日已签 ✓",unsignedText:t="立即签到",pendingText:r="签到中…",errorText:i="签到失败，请重试"}=e;return{name:"TodayCheckIn",version:"0.1.0",description:ts.description,priority:40,enabled:!0,hooks:{renderActions:o=>c.jsx(Ky,{ctx:o,signedText:n,unsignedText:t,pendingText:r,errorText:i})}}}Mn.meta=ts;const Qy={slug:"basic",title:"最小可用",group:"basic",intro:"内核 + 五个核心插件跑通装配链路；加插件就是往 withPlugins 数组里加一项。"};function Xy(e){const n=Array.from({length:14},(t,r)=>{const i=r+1,o=i<8?"signed":i===8&&!e?"today":i===9?"missed":"future";return{date:`2026-10-${String(i).padStart(2,"0")}`,day:i,status:o,canMakeup:i===9}});return{todaySigned:e,streak:e?8:7,maxStreak:12,totalDays:132,points:3680,calendar:n,rewards:[{day:1,kind:"points",value:10,label:"10 积分",claimed:!0},{day:3,kind:"coupon",value:5,label:"5 元券",claimed:!0},{day:7,kind:"gift",label:"7 天礼包",claimed:!0},{day:8,kind:"points",value:50,label:"50 积分"},{day:10,kind:"badge",label:"闪耀徽章"}],makeup:{available:3,used:1,max:3}}}const Yy=H(F,[Dn(),tt(),Nn(),rt(),Mn()]);function Zy(){const[e,n]=y.useState(!1),t=Xy(e),r={sign:()=>n(!0),makeup:()=>alert("触发补签"),claim:i=>alert(`领取第 ${i} 天奖励`)};return c.jsx(Yy,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Jy=Object.freeze(Object.defineProperty({__proto__:null,default:Zy,meta:Qy},Symbol.toStringTag,{value:"Module"}));function Q(e=!1){const n=Array.from({length:14},(i,o)=>{const l=o+1,a=l<8?"signed":l===8&&!e?"today":l===9?"missed":"future";return{date:`2026-10-${String(l).padStart(2,"0")}`,day:l,status:a,canMakeup:l===9}}),t=Date.now()+36e5,r=[{id:"c1",day:7,label:"7 天礼包",at:Date.now()-864e5},{id:"c2",day:3,label:"5 元券",at:Date.now()-3*864e5},{id:"c3",day:1,label:"10 积分",at:Date.now()-7*864e5}];return{todaySigned:e,streak:e?8:7,maxStreak:12,totalDays:132,points:3680,calendar:n,rewards:[{day:1,kind:"points",value:10,label:"10 积分",claimed:!0},{day:3,kind:"coupon",value:5,label:"5 元券",claimed:!0},{day:7,kind:"gift",label:"7 天礼包",claimed:!0},{day:8,kind:"points",value:50,label:"50 积分"},{day:10,kind:"badge",label:"闪耀徽章"}],makeup:{available:3,used:1,max:3},nextResetAt:t,level:{name:"黄金会员",current:680,next:1e3,progress:.68},rules:["每日 0 点刷新签到资格，连续签到奖励递增","断签后连签天数清零，但累计天数保留","补签卡可在断签 7 日内补回当日奖励","积分可 1:100 兑换现金券，详见会员中心"],history:r}}function Y(e={}){return{sign:()=>{},claim:()=>{},makeup:()=>{},share:()=>{},remind:()=>{},invite:()=>{},...e}}const qy={slug:"streak-state",title:"连签状态 StreakState",group:"plugin",intro:"头部连签天数 + 最高连签；断签清零、累计保留的领域逻辑由内核数据驱动。"},ev=H(F,[Dn()]);function nv(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(ev,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const tv=Object.freeze(Object.defineProperty({__proto__:null,default:nv,meta:qy},Symbol.toStringTag,{value:"Module"})),rv={slug:"calendar-strip",title:"日历条 CalendarStrip",group:"plugin",intro:"横向日期条；已签/今日/漏签/补签/未来五态由 DayStatus 着色，各平台运营位通用。"},iv=H(F,[tt()]);function ov(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(iv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const lv=Object.freeze(Object.defineProperty({__proto__:null,default:ov,meta:rv},Symbol.toStringTag,{value:"Module"})),av={slug:"reward-preview",title:"奖励预告 RewardPreview",group:"plugin",intro:"逐日奖励预览：已领取置灰打勾，未到天数半透明，临近大额奖励高亮。"},sv=H(F,[Nn()]);function uv(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(sv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const cv=Object.freeze(Object.defineProperty({__proto__:null,default:uv,meta:av},Symbol.toStringTag,{value:"Module"})),dv={slug:"makeup-slot",title:"补签位 MakeupSlot",group:"plugin",intro:"断签缺口处的高亮补签入口：剩余补签卡数 + 一键补回当日奖励，走 callbacks.makeup。"},fv=H(F,[rt()]);function pv(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(fv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const gv=Object.freeze(Object.defineProperty({__proto__:null,default:pv,meta:dv},Symbol.toStringTag,{value:"Module"})),mv={slug:"today-check-in",title:"今日签到 TodayCheckIn",group:"plugin",intro:"操作区主按钮：未签时高亮的「立即签到」，已签后变为连签天数 + 明日预告。"},hv=H(F,[Mn()]);function yv(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(hv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const vv=Object.freeze(Object.defineProperty({__proto__:null,default:yv,meta:mv},Symbol.toStringTag,{value:"Module"})),Sv="PointsBalancePlugin",xv="累计积分：展示当前累计积分总额，头部区渲染。",wv="0.1.0",kv=["points","header","balance"],Pv=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],Cv=[],_v="只读取 context 字段（props / state / data），不调用上下文方法",Ev=[],Tv="withSignInPlugins(SignInCore, [createPointsBalancePlugin()])",Rv=[{name:"默认",description:"头部展示累计积分",src:"createPointsBalancePlugin()",config:{}}],rs={name:Sv,description:xv,since:wv,tags:kv,events:Pv,methods:Cv,methodsNote:_v,config:Ev,example:Tv,examples:Rv};function At(e={}){return{name:"PointsBalance",version:"0.1.0",description:rs.description,priority:11,enabled:!0,hooks:{renderHeader:n=>{const{points:t}=n.data;return c.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[c.jsx("span",{style:{fontSize:13,color:ln},children:"积分"}),c.jsx("span",{style:{fontSize:20,fontWeight:800,color:Ee,lineHeight:1},children:t})]})}}}}At.meta=rs;const bv={slug:"points-balance",title:"积分余额 PointsBalance",group:"plugin",intro:"头部积分余额：大字号展示当前积分 + 累计天数，承接积分商城的入口视觉。"},Iv=H(F,[At()]);function jv(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(Iv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const $v=Object.freeze(Object.defineProperty({__proto__:null,default:jv,meta:bv},Symbol.toStringTag,{value:"Module"})),Dv="StatRowPlugin",Nv="数据行：一行展示累计天数与累计积分，头部区渲染。",Mv="0.1.0",Ov=["stat","header","summary"],Lv=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],zv=[],Av="只读取 context 字段（props / state / data），不调用上下文方法",Bv=[],Fv="withSignInPlugins(SignInCore, [createStatRowPlugin()])",Uv=[{name:"默认",description:"头部展示累计天数与积分",src:"createStatRowPlugin()",config:{}}],is={name:Dv,description:Nv,since:Mv,tags:Ov,events:Lv,methods:zv,methodsNote:Av,config:Bv,example:Fv,examples:Uv};function Bt(e={}){return{name:"StatRow",version:"0.1.0",description:is.description,priority:12,enabled:!0,hooks:{renderHeader:n=>{const{totalDays:t,points:r}=n.data;return c.jsxs("div",{style:{display:"flex",gap:18,fontSize:12,color:ln},children:[c.jsxs("span",{children:["累计 ",c.jsx("b",{style:{color:Vh,fontSize:14},children:t})," 天"]}),c.jsxs("span",{children:["累计 ",c.jsx("b",{style:{color:Ee,fontSize:14},children:r})," 分"]})]})}}}}Bt.meta=is;const Wv={slug:"stat-row",title:"统计行 StatRow",group:"plugin",intro:"头部三项指标横排：当前连签、累计天数、历史最高连签，一屏尽览进度。"},Hv=H(F,[Bt()]);function Vv(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(Hv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Gv=Object.freeze(Object.defineProperty({__proto__:null,default:Vv,meta:Wv},Symbol.toStringTag,{value:"Module"})),Kv="LevelBadgePlugin",Qv="会员等级徽标：展示等级名与进度条，头部区渲染；无等级数据时静默跳过。",Xv="0.1.0",Yv=["level","header","badge"],Zv=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],Jv=[],qv="只读取 context 字段（props / state / data），不调用上下文方法",eS=[],nS="withSignInPlugins(SignInCore, [createLevelBadgePlugin()])",tS=[{name:"默认",description:"头部展示会员等级与进度",src:"createLevelBadgePlugin()",config:{}}],os={name:Kv,description:Qv,since:Xv,tags:Yv,events:Zv,methods:Jv,methodsNote:qv,config:eS,example:nS,examples:tS};function it(e={}){return{name:"LevelBadge",version:"0.1.0",description:os.description,priority:13,enabled:!0,hooks:{renderHeader:n=>{const t=n.data.level;if(!t)return null;const r=Math.round(Math.min(1,Math.max(0,t.progress))*100);return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[c.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#ffffff",background:Ee,borderRadius:10,padding:"2px 8px",whiteSpace:"nowrap"},children:t.name}),c.jsx("div",{style:{flex:1,height:6,borderRadius:3,background:Za,overflow:"hidden"},children:c.jsx("div",{style:{width:`${r}%`,height:"100%",background:Ee}})}),c.jsxs("span",{style:{fontSize:11,color:Jn,whiteSpace:"nowrap"},children:[t.current,"/",t.next]})]})}}}}it.meta=os;const rS={slug:"level-badge",title:"等级徽章 LevelBadge",group:"plugin",intro:"头部会员徽章：等级名 + 距下一级进度条，读 data.level 渲染。"},iS=H(F,[it()]);function oS(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(iS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const lS=Object.freeze(Object.defineProperty({__proto__:null,default:oS,meta:rS},Symbol.toStringTag,{value:"Module"})),aS="CountdownPlugin",sS="次签倒计时：依据 nextResetAt 展示距下次可签到剩余时间，头部区渲染。",uS="0.1.0",cS=["countdown","header","timer"],dS=[{name:"renderHeader",when:"每次渲染，头部区槽位",description:"连签天数、积分、等级、倒计时"}],fS=[],pS="只读取 context 字段（props / state / data），不调用上下文方法",gS=[],mS="withSignInPlugins(SignInCore, [createCountdownPlugin()])",hS=[{name:"默认",description:"头部展示次签倒计时",src:"createCountdownPlugin()",config:{}}],ls={name:aS,description:sS,since:uS,tags:cS,events:dS,methods:fS,methodsNote:pS,config:gS,example:mS,examples:hS};function yS({nextResetAt:e,todaySigned:n}){const t=Qa(),r=e-t;if(r<=0)return c.jsx("div",{style:{fontSize:12,color:Hh},children:"现在可签到"});const i=Math.floor(r/864e5),o=Math.floor(r%864e5/36e5),l=Math.floor(r%36e5/6e4),a=i>0?`${i}天${o}小时`:`${o}小时${l}分`;return c.jsx("div",{style:{fontSize:12,color:Jn},children:n?`距下次可签到 ${a}`:"今日可签到"})}function Ft(e={}){return{name:"Countdown",version:"0.1.0",description:ls.description,priority:14,enabled:!0,hooks:{renderHeader:n=>{const{nextResetAt:t,todaySigned:r}=n.data;return t?c.jsx(yS,{nextResetAt:t,todaySigned:r}):null}}}}Ft.meta=ls;const vS={slug:"countdown",title:"次签倒计时 Countdown",group:"plugin",intro:"头部倒计时：读 data.nextResetAt 计算剩余小时/分钟，已过期则提示「现在可签到」。"},SS=H(F,[Ft()]);function xS(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(SS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const wS=Object.freeze(Object.defineProperty({__proto__:null,default:xS,meta:vS},Symbol.toStringTag,{value:"Module"})),kS="CalendarGridPlugin",PS="月历网格：以 7 列网格形态呈现整轮签到进度，日历区渲染。",CS="0.1.0",_S=["calendar","grid","calendar-slot"],ES=[{name:"renderCalendar",when:"每次渲染，日历区槽位",description:"日历条 / 月历网格 / 漏签标记"}],TS=[],RS="只读取 context 字段（props / state / data），不调用上下文方法",bS=[{name:"columns",type:"number",default:"7",description:"网格每周列数"}],IS="withSignInPlugins(SignInCore, [createCalendarGridPlugin()])",jS=[{name:"默认",description:"以 7 列网格展示整轮签到",src:"createCalendarGridPlugin()",config:{}}],as={name:kS,description:PS,since:CS,tags:_S,events:ES,methods:TS,methodsNote:RS,config:bS,example:IS,examples:jS};function Ut(e={}){const{columns:n=7}=e;return{name:"CalendarGrid",version:"0.1.0",description:as.description,priority:21,enabled:!0,hooks:{renderCalendar:t=>{const r=t.data.calendar??[];return c.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gap:6},children:r.map(i=>{const o=Yi[i.status]??Yi.future,l=Cf[i.status]??i.status;return c.jsxs("div",{role:"img","aria-label":`${i.date} ${l}`,title:`${i.date} ${l}`,style:{height:44,borderRadius:8,background:o.bg,color:o.fg,border:`1px solid ${o.border}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[c.jsxs("span",{style:{fontSize:10,color:o.fg},children:[i.day,"天"]}),c.jsx("span",{style:{fontSize:14,fontWeight:700,lineHeight:1.1},children:Pf[i.status]||i.day})]},i.date)})})}}}}Ut.meta=as;const $S={slug:"calendar-grid",title:"月历网格 CalendarGrid",group:"plugin",intro:"七列月历网格：已签/今日/漏签/补签/奖励日五态着色，适合大运营位全景展示。"},DS=H(F,[Ut()]);function NS(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(DS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const MS=Object.freeze(Object.defineProperty({__proto__:null,default:NS,meta:$S},Symbol.toStringTag,{value:"Module"})),OS="RewardClaimPlugin",LS="当日奖励领取：提供已达天数待领奖励的领取按钮，奖励区渲染。",zS="0.1.0",AS=["reward","claim","rewards-slot"],BS=[{name:"renderRewards",when:"每次渲染，奖励区槽位",description:"逐日奖励预告、领取态、里程碑奖励"}],FS=[],US="只读取 context 字段（props / state / data），不调用上下文方法",WS=[{name:"pendingText",type:"string",default:"领取中…",description:"请求在途时的按钮文案；期间按钮禁用，防重复领取"},{name:"errorText",type:"string",default:"领取失败，请重试",description:"回调失败时的兜底文案"}],HS="withSignInPlugins(SignInCore, [createRewardClaimPlugin()])",VS=[{name:"默认",description:"展示待领奖励领取按钮",src:"createRewardClaimPlugin()",config:{}}],ss={name:OS,description:LS,since:zS,tags:AS,events:BS,methods:FS,methodsNote:US,config:WS,example:HS,examples:VS};function GS({ctx:e,target:n,pendingText:t,errorText:r}){const i=y.useRef(!1),[o,l]=y.useState(!1),[a,s]=y.useState(null),u=async()=>{if(!i.current){i.current=!0,l(!0),s(null);try{await zt(e.callbacks.claim,n.day)}catch(p){s(ho(p,r))}finally{i.current=!1,l(!1)}}};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[c.jsx("button",{type:"button","data-testid":"si-claim-btn","data-day":String(n.day),"data-pending":String(o),"aria-busy":o||void 0,disabled:o,onClick:()=>{u()},style:{border:"none",background:Ee,color:"#ffffff",borderRadius:18,padding:"6px 16px",fontSize:13,fontWeight:700,cursor:o?"not-allowed":"pointer"},children:o?t:`领取第${n.day}天奖励 · ${n.label}`}),a&&c.jsx("div",{role:"alert","data-testid":"si-claim-error",style:{fontSize:12,color:"#d4380d"},children:a})]})}function ot(e={}){const{pendingText:n="领取中…",errorText:t="领取失败，请重试"}=e;return{name:"RewardClaim",version:"0.1.0",description:ss.description,priority:31,enabled:!0,hooks:{renderRewards:r=>{const{rewards:i,streak:o}=r.data,l=[...i??[]].filter(a=>a.day<=o&&!a.claimed).sort((a,s)=>a.day-s.day)[0];return l?c.jsx(GS,{ctx:r,target:l,pendingText:n,errorText:t}):c.jsx("div",{style:{fontSize:12,color:Jn},children:"今日奖励已全部领取"})}}}}ot.meta=ss;const KS={slug:"reward-claim",title:"奖励领取 RewardClaim",group:"plugin",intro:"奖励区领取：扫描 rewards，对 day<=streak 且未领的奖励给出「领取」按钮，走 callbacks.claim。"},QS=H(F,[ot()]);function XS(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(QS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const YS=Object.freeze(Object.defineProperty({__proto__:null,default:XS,meta:KS},Symbol.toStringTag,{value:"Module"})),ZS="MilestonePlugin",JS="里程碑进度：展示距下一未达奖励还差几天与进度条，奖励区渲染。",qS="0.1.0",e0=["milestone","rewards","progress"],n0=[{name:"renderRewards",when:"每次渲染，奖励区槽位",description:"逐日奖励预告、领取态、里程碑奖励"}],t0=[],r0="只读取 context 字段（props / state / data），不调用上下文方法",i0=[],o0="withSignInPlugins(SignInCore, [createMilestonePlugin()])",l0=[{name:"默认",description:"展示下一里程碑进度",src:"createMilestonePlugin()",config:{}}],us={name:ZS,description:JS,since:qS,tags:e0,events:n0,methods:t0,methodsNote:r0,config:i0,example:o0,examples:l0};function Wt(e={}){return{name:"Milestone",version:"0.1.0",description:us.description,priority:32,enabled:!0,hooks:{renderRewards:n=>{const{rewards:t,streak:r}=n.data,i=(t??[]).filter(a=>a.day>r).sort((a,s)=>a.day-s.day)[0];if(!i)return c.jsx("div",{style:{fontSize:12,color:Jn},children:"已达成全部奖励 🎉"});const o=i.day-r,l=Math.round((i.day-o)/i.day*100);return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsxs("div",{style:{fontSize:12,color:ln},children:["再连签 ",c.jsx("b",{style:{color:Ee},children:o})," 天解锁 ",i.label]}),c.jsx("div",{style:{height:6,borderRadius:3,background:Za,overflow:"hidden"},children:c.jsx("div",{style:{width:`${l}%`,height:"100%",background:kf}})})]})}}}}Wt.meta=us;const a0={slug:"milestone",title:"里程碑 Milestone",group:"plugin",intro:"奖励区里程碑：找到下一未达奖励，展示「再连签 N 天」+ 进度条；全达成显示庆祝终态。"},s0=H(F,[Wt()]);function u0(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(s0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const c0=Object.freeze(Object.defineProperty({__proto__:null,default:u0,meta:a0},Symbol.toStringTag,{value:"Module"})),d0="SharePlugin",f0="分享成就：触发分享回调的无状态按钮，操作区渲染。",p0="0.1.0",g0=["share","actions","social"],m0=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],h0=[],y0="只读取 context 字段（props / state / data），不调用上下文方法",v0=[{name:"text",type:"string",default:"分享成就",description:"按钮文案"}],S0="withSignInPlugins(SignInCore, [createSharePlugin()])",x0=[{name:"默认",description:"操作区展示分享按钮",src:"createSharePlugin()",config:{}}],cs={name:d0,description:f0,since:p0,tags:g0,events:m0,methods:h0,methodsNote:y0,config:v0,example:S0,examples:x0};function Ht(e={}){const{text:n="分享成就"}=e;return{name:"Share",version:"0.1.0",description:cs.description,priority:43,enabled:!0,hooks:{renderActions:t=>c.jsx("button",{type:"button",onClick:()=>{zt(t.callbacks.share).catch(r=>{console.warn("[vane-sign-in] callbacks.share 执行失败",r)})},style:{border:"1px solid #d8d8d8",background:"#ffffff",color:ln,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:n})}}}Ht.meta=cs;const w0={slug:"share",title:"分享成就 Share",group:"plugin",intro:"操作区社交扩散位：点击触发 callbacks.share，海报/链接/卡片由消费方实现。"},k0=H(F,[Ht()]);function P0(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(k0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const C0=Object.freeze(Object.defineProperty({__proto__:null,default:P0,meta:w0},Symbol.toStringTag,{value:"Module"})),_0="RemindPlugin",E0="签到提醒开关：本地维护开关态并回调下发，操作区渲染。",T0="0.1.0",R0=["remind","actions","toggle"],b0=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],I0=[],j0="只读取 context 字段（props / state / data），不调用上下文方法",$0=[{name:"defaultOn",type:"boolean",default:"false",description:"初始是否开启提醒"}],D0="withSignInPlugins(SignInCore, [createRemindPlugin()])",N0=[{name:"默认",description:"操作区展示提醒开关",src:"createRemindPlugin()",config:{}}],ds={name:_0,description:E0,since:T0,tags:R0,events:b0,methods:I0,methodsNote:j0,config:$0,example:D0,examples:N0};function M0({ctx:e,initialOn:n,errorText:t}){const[r,i]=y.useState(n),[o,l]=y.useState(null),a=y.useRef(!1),s=async()=>{if(a.current)return;a.current=!0;const u=!r,p=r;i(u),l(null);try{await zt(e.callbacks.remind,u)}catch(f){i(p),l(ho(f,t))}finally{a.current=!1}};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[c.jsx("button",{type:"button","data-testid":"si-remind-btn","data-on":String(r),"aria-pressed":r,onClick:()=>{s()},style:{border:`1px solid ${r?Ee:"#d8d8d8"}`,background:r?Wh:"#ffffff",color:r?Ee:ln,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:r?"已开启提醒":"签到提醒"}),o&&c.jsx("div",{role:"alert","data-testid":"si-remind-error",style:{fontSize:12,color:"#d4380d"},children:o})]})}function Vt(e={}){const{defaultOn:n=!1,errorText:t="提醒设置失败，请重试"}=e;return{name:"Remind",version:"0.1.0",description:ds.description,priority:44,enabled:!0,hooks:{renderActions:r=>c.jsx(M0,{ctx:r,initialOn:r.data.remindEnabled??n,errorText:t})}}}Vt.meta=ds;const O0={slug:"remind",title:"签到提醒 Remind",group:"plugin",intro:"操作区提醒开关：插件自身管理开关态，切换即经 callbacks.remind 下发给消费方持久化。"},L0=H(F,[Vt()]);function z0(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(L0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const A0=Object.freeze(Object.defineProperty({__proto__:null,default:z0,meta:O0},Symbol.toStringTag,{value:"Module"})),B0="InvitePlugin",F0="邀请好友助力：触发邀请回调的按钮，操作区渲染，常用于拉新运营位。",U0="0.1.0",W0=["invite","actions","growth"],H0=[{name:"renderActions",when:"每次渲染，操作区槽位",description:"签到 CTA、补签、分享、提醒、邀请"}],V0=[],G0="只读取 context 字段（props / state / data），不调用上下文方法",K0=[{name:"text",type:"string",default:"邀请好友助力",description:"按钮文案"}],Q0="withSignInPlugins(SignInCore, [createInvitePlugin()])",X0=[{name:"默认",description:"操作区展示邀请按钮",src:"createInvitePlugin()",config:{}}],fs={name:B0,description:F0,since:U0,tags:W0,events:H0,methods:V0,methodsNote:G0,config:K0,example:Q0,examples:X0};function Gt(e={}){const{text:n="邀请好友助力"}=e;return{name:"Invite",version:"0.1.0",description:fs.description,priority:45,enabled:!0,hooks:{renderActions:t=>c.jsx("button",{type:"button",onClick:()=>{zt(t.callbacks.invite).catch(r=>{console.warn("[vane-sign-in] callbacks.invite 执行失败",r)})},style:{border:`1px solid ${Ee}`,background:"#ffffff",color:Ee,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:n})}}}Gt.meta=fs;const Y0={slug:"invite",title:"邀请助力 Invite",group:"plugin",intro:"操作区邀请位：点击触发 callbacks.invite，常用于拉新/游戏运营位解锁额外奖励。"},Z0=H(F,[Gt()]);function J0(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(Z0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const q0=Object.freeze(Object.defineProperty({__proto__:null,default:J0,meta:Y0},Symbol.toStringTag,{value:"Module"})),ex="RuleExpandPlugin",nx="规则折叠展开：将活动规则折叠为可展开列表，底部区渲染；无规则时静默跳过。",tx="0.1.0",rx=["rule","footer","collapse"],ix=[{name:"renderFooter",when:"每次渲染，底部区槽位",description:"规则展开、领取记录入口"}],ox=[],lx="只读取 context 字段（props / state / data），不调用上下文方法",ax=[{name:"defaultOpen",type:"boolean",default:"false",description:"初始是否展开"}],sx="withSignInPlugins(SignInCore, [createRuleExpandPlugin()])",ux=[{name:"默认",description:"底部展示可折叠的活动规则",src:"createRuleExpandPlugin()",config:{}}],ps={name:ex,description:nx,since:tx,tags:rx,events:ix,methods:ox,methodsNote:lx,config:ax,example:sx,examples:ux};function cx({rules:e,initialOpen:n}){const[t,r]=y.useState(n),i=y.useId();return!e||!e.length?null:c.jsxs("div",{children:[c.jsx("button",{type:"button","data-testid":"si-rule-toggle","aria-expanded":t,"aria-controls":i,onClick:()=>r(o=>!o),style:{border:"none",background:"transparent",color:ln,fontSize:13,cursor:"pointer",padding:0},children:t?"收起活动规则 ▲":"活动规则 ▼"}),t&&c.jsx("ul",{id:i,style:{margin:"6px 0 0",paddingLeft:18,fontSize:12,color:Jn},children:e.map((o,l)=>c.jsx("li",{children:o},l))})]})}function Kt(e={}){const{defaultOpen:n=!1}=e;return{name:"RuleExpand",version:"0.1.0",description:ps.description,priority:50,enabled:!0,hooks:{renderFooter:t=>c.jsx(cx,{rules:t.data.rules,initialOpen:n})}}}Kt.meta=ps;const dx={slug:"rule-expand",title:"规则折叠 RuleExpand",group:"plugin",intro:"底部区规则折叠：data.rules 收进可展开列表，点击展开/收起，避免长文案常驻占用空间。"},fx=H(F,[Kt()]);function px(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(fx,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const gx=Object.freeze(Object.defineProperty({__proto__:null,default:px,meta:dx},Symbol.toStringTag,{value:"Module"})),mx="RewardHistoryPlugin",hx="领取记录：展示历史领取记录列表，底部区渲染；无记录时显示终态文案。",yx="0.1.0",vx=["history","footer","record"],Sx=[{name:"renderFooter",when:"每次渲染，底部区槽位",description:"规则展开、领取记录入口"}],xx=[],wx="只读取 context 字段（props / state / data），不调用上下文方法",kx=[{name:"limit",type:"number",default:"5",description:"最多展示几条记录"}],Px="withSignInPlugins(SignInCore, [createRewardHistoryPlugin()])",Cx=[{name:"默认",description:"底部展示领取记录",src:"createRewardHistoryPlugin()",config:{}}],gs={name:mx,description:hx,since:yx,tags:vx,events:Sx,methods:xx,methodsNote:wx,config:kx,example:Px,examples:Cx};function Gr(e={}){const{limit:n=5}=e;return{name:"RewardHistory",version:"0.1.0",description:gs.description,priority:51,enabled:!0,hooks:{renderFooter:t=>{const r=t.data.history??[],i=t.data.businessTimeZone;return r.length?c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[c.jsx("div",{style:{fontSize:12,color:ln},children:"领取记录"}),r.slice(0,n).map(o=>c.jsxs("div",{style:{display:"flex",fontSize:12,color:Jn},children:[c.jsxs("span",{children:["第",o.day,"天 · ",o.label]}),c.jsx("span",{style:{marginLeft:"auto"},children:jh(o.at,i)})]},o.id))]}):c.jsx("div",{style:{fontSize:12,color:Jn},children:"暂无领取记录"})}}}}Gr.meta=gs;const _x={slug:"reward-history",title:"领取记录 RewardHistory",group:"plugin",intro:"底部区领取记录：data.history 按时间倒序展示，无记录显示终态文案。"},Ex=H(F,[Gr()]);function Tx(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(Ex,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Rx=Object.freeze(Object.defineProperty({__proto__:null,default:Tx,meta:_x},Symbol.toStringTag,{value:"Module"})),bx=`import React, { useState } from "react";\r
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
`,Ix=`import React, { useState } from "react";\r
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
`,jx=`import React, { useState } from "react";\r
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
`,$x=`import React, { useState } from "react";\r
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
`,Dx=`import React, { useState } from "react";\r
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
`,Nx=`import React, { useState } from "react";\r
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
`,Mx=`import React, { useState } from "react";\r
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
`,Ox=`import React, { useState } from "react";\r
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
`,Lx=`import React, { useState } from "react";\r
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
`,zx=`import React, { useState } from "react";\r
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
`,Ax=`import React, { useState } from "react";\r
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
`,Bx=`import React, { useState } from "react";\r
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
`,Fx=`import React, { useState } from "react";\r
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
`,Ux=`import React, { useState } from "react";\r
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
`,Wx=`import React, { useState } from "react";\r
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
`,Hx=`import React, { useState } from "react";\r
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
`,Vx=`import React, { useState } from "react";\r
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
`,Gx=`import React, { useState } from "react";\r
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
`,Kx=Object.assign({"./00-basic.tsx":Jy,"./01-streak-state.tsx":tv,"./02-calendar-strip.tsx":lv,"./03-reward-preview.tsx":cv,"./04-makeup-slot.tsx":gv,"./05-today-check-in.tsx":vv,"./06-points-balance.tsx":$v,"./07-stat-row.tsx":Gv,"./08-level-badge.tsx":lS,"./09-countdown.tsx":wS,"./10-calendar-grid.tsx":MS,"./11-reward-claim.tsx":YS,"./12-milestone.tsx":c0,"./13-share.tsx":C0,"./14-remind.tsx":A0,"./15-invite.tsx":q0,"./16-rule-expand.tsx":gx,"./17-reward-history.tsx":Rx}),Qx=Object.assign({"./00-basic.tsx":bx,"./01-streak-state.tsx":Ix,"./02-calendar-strip.tsx":jx,"./03-reward-preview.tsx":$x,"./04-makeup-slot.tsx":Dx,"./05-today-check-in.tsx":Nx,"./06-points-balance.tsx":Mx,"./07-stat-row.tsx":Ox,"./08-level-badge.tsx":Lx,"./09-countdown.tsx":zx,"./10-calendar-grid.tsx":Ax,"./11-reward-claim.tsx":Bx,"./12-milestone.tsx":Fx,"./13-share.tsx":Ux,"./14-remind.tsx":Wx,"./15-invite.tsx":Hx,"./16-rule-expand.tsx":Vx,"./17-reward-history.tsx":Gx}),Xx=e=>e.replace(/^\.\//,""),Hl=Object.entries(Kx).map(([e,n])=>{const t=Xx(e);return{meta:n.meta,Stage:n.default,file:t,source:Qx[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),Yx=Array.from(new Set(Hl.map(e=>e.meta.group))),_f={basic:{label:"基础用法"},advanced:{label:"进阶用法"},plugin:{label:"插件示例"}},Zx="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",Jx="true|false|null|undefined|this|super",qx="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",Bu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${Zx})\b`,String.raw`\b(${Jx})\b`,String.raw`\b(${qx})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),Fu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function e1(e){const n=[];let t=0;Bu.lastIndex=0;let r;for(;r=Bu.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const i=Fu.findIndex((o,l)=>r[l+1]!==void 0);n.push({text:r[0],cls:i>=0?Fu[i]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function Uu(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function n1({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[i,o]=y.useState("idle"),[l,a]=y.useState(!1),s=y.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&s.length>t,p=u&&!l?s.slice(0,t).join(`
`):e,f=y.useMemo(()=>e1(p),[p]),h=y.useCallback(async()=>{var S;let v=!1;if((S=navigator.clipboard)!=null&&S.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=Uu(e)}else v=Uu(e);o(v?"ok":"fail"),window.setTimeout(()=>o("idle"),1600)},[e]);return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-head",children:[c.jsx("span",{children:n}),c.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[c.jsxs("span",{children:[s.length," 行"]}),c.jsx("button",{type:"button",className:`code-copy${i==="ok"?" is-ok":i==="fail"?" is-fail":""}`,onClick:h,children:i==="ok"?"已复制":i==="fail"?"复制失败":"复制"})]})]}),c.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:c.jsx("code",{children:f.map((v,S)=>v.cls?c.jsx("span",{className:v.cls,children:v.text},S):c.jsx(Fr.Fragment,{children:v.text},S))})}),u?c.jsx("button",{type:"button",className:"code-more",onClick:()=>a(v=>!v),children:l?"收起":`展开余下 ${s.length-t} 行`}):null]})}function Ef(e){return e.props??e.config??[]}function t1({doc:e}){var i,o,l;const n=Ef(e),t=e.events??[],r=e.methods??[];return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"属性 Props"}),n.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"属性"}),c.jsx("th",{children:"类型"}),c.jsx("th",{children:"默认"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:n.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.type})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.default??"-"})}),c.jsx("td",{children:a.description??"—"})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"事件 Events"}),t.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"事件"}),c.jsx("th",{children:"触发时机"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:t.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:a.when}),c.jsx("td",{children:a.description})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"方法 Methods"}),r.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"方法"}),c.jsx("th",{children:"签名"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:r.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.signature})}),c.jsx("td",{children:a.description})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),c.jsxs("div",{className:"doc-cols",children:[(i=e.features)!=null&&i.length?c.jsxs("div",{children:[c.jsx("h5",{children:"能做"}),c.jsx("ul",{children:e.features.map(a=>c.jsx("li",{children:a},a))})]}):null,(o=e.useCases)!=null&&o.length?c.jsxs("div",{children:[c.jsx("h5",{children:"适合"}),c.jsx("ul",{children:e.useCases.map(a=>c.jsx("li",{children:a},a))})]}):null,(l=e.notes)!=null&&l.length?c.jsxs("div",{children:[c.jsx("h5",{children:"注意"}),c.jsx("ul",{children:e.notes.map(a=>c.jsx("li",{children:a},a))})]}):null]})]})}function r1({factory:e,priority:n,summary:t,doc:r,defaultOpen:i=!0}){var l,a;const o={props:Ef(r).length,events:((l=r.events)==null?void 0:l.length)??0,methods:((a=r.methods)==null?void 0:a.length)??0};return c.jsxs("details",{className:"api-plug",open:i,children:[c.jsxs("summary",{children:[c.jsx("code",{children:e}),c.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),c.jsx("span",{className:"api-plug-desc",children:t}),c.jsxs("span",{className:"api-plug-n",children:[o.props," 属性 · ",o.events," 事件 · ",o.methods," 方法"]})]}),c.jsx("div",{className:"api-plug-body",children:c.jsx(t1,{doc:r})})]})}const i1=/create[A-Z]\w*Plugin/g;function o1(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Tf(e){return e.dir?`create${e.dir}`:o1(e.factory)}function l1(e){return new Set(e.match(i1)??[])}function a1(e,n){const t=l1(e);return n.filter(r=>t.has(Tf(r))).sort((r,i)=>r.priority-i.priority)}function s1({source:e,plugins:n,heading:t="本页用到的插件"}){const r=y.useMemo(()=>a1(e,n),[e,n]);return r.length===0?null:c.jsxs("section",{className:"api-sec",children:[c.jsxs("div",{className:"api-sec-head",children:[c.jsxs("h2",{className:"api-sec-title",children:[t," · ",r.length," 个"]}),c.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",c.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(i=>c.jsx(r1,{factory:Tf(i),priority:i.priority,summary:i.summary??i.doc.description??"",doc:i.doc},i.factory))]})}const u1=`import type React from "react";
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
`,c1=`import type React from "react";
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
`,d1=`import type React from "react";
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
`,f1=`import type React from "react";
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
`,p1=`import type React from "react";
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
`,g1=`import type React from "react";
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
`,m1=`import type React from "react";
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
`,h1=`import type React from "react";
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
`,y1=`import type React from "react";
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
`,v1=`import type React from "react";
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
`,S1=`import type React from "react";
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
`,x1=`import type React from "react";
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
`,w1=`import type React from "react";
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
`,k1=`import type React from "react";
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
`,P1=`import type React from "react";
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
`,C1=`import type React from "react";
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
`,_1=`import type React from "react";
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
`,hw={header:"头部区 · header",calendar:"日历区 · calendar",rewards:"奖励区 · rewards",actions:"操作区 · actions",footer:"底部区 · footer"},Wu=["header","calendar","rewards","actions","footer"],Hu=Object.assign({"/src/custom-plugins/CalendarGridPlugin/doc.json":as,"/src/custom-plugins/CalendarStripPlugin/doc.json":qa,"/src/custom-plugins/CountdownPlugin/doc.json":ls,"/src/custom-plugins/InvitePlugin/doc.json":fs,"/src/custom-plugins/LevelBadgePlugin/doc.json":os,"/src/custom-plugins/MakeupSlotPlugin/doc.json":ns,"/src/custom-plugins/MilestonePlugin/doc.json":us,"/src/custom-plugins/PointsBalancePlugin/doc.json":rs,"/src/custom-plugins/RemindPlugin/doc.json":ds,"/src/custom-plugins/RewardClaimPlugin/doc.json":ss,"/src/custom-plugins/RewardHistoryPlugin/doc.json":gs,"/src/custom-plugins/RewardPreviewPlugin/doc.json":es,"/src/custom-plugins/RuleExpandPlugin/doc.json":ps,"/src/custom-plugins/SharePlugin/doc.json":cs,"/src/custom-plugins/StatRowPlugin/doc.json":is,"/src/custom-plugins/StreakStatePlugin/doc.json":Ja,"/src/custom-plugins/TodayCheckInPlugin/doc.json":ts}),Vu=Object.assign({"/src/custom-plugins/CalendarGridPlugin/create.tsx":u1,"/src/custom-plugins/CalendarStripPlugin/create.tsx":c1,"/src/custom-plugins/CountdownPlugin/create.tsx":d1,"/src/custom-plugins/InvitePlugin/create.tsx":f1,"/src/custom-plugins/LevelBadgePlugin/create.tsx":p1,"/src/custom-plugins/MakeupSlotPlugin/create.tsx":g1,"/src/custom-plugins/MilestonePlugin/create.tsx":m1,"/src/custom-plugins/PointsBalancePlugin/create.tsx":h1,"/src/custom-plugins/RemindPlugin/create.tsx":y1,"/src/custom-plugins/RewardClaimPlugin/create.tsx":v1,"/src/custom-plugins/RewardHistoryPlugin/create.tsx":S1,"/src/custom-plugins/RewardPreviewPlugin/create.tsx":x1,"/src/custom-plugins/RuleExpandPlugin/create.tsx":w1,"/src/custom-plugins/SharePlugin/create.tsx":k1,"/src/custom-plugins/StatRowPlugin/create.tsx":P1,"/src/custom-plugins/StreakStatePlugin/create.tsx":C1,"/src/custom-plugins/TodayCheckInPlugin/create.tsx":_1}),Rf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function E1(e){const n=Object.keys(Vu).find(i=>Rf(i)===e),t=n?Vu[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function T1(e){const n=Object.keys(Hu).find(t=>Rf(t)===e);return n?Hu[n]:{name:e,description:"（缺少 doc.json）"}}const R1=[{dir:"StreakStatePlugin",group:"header",make:()=>Dn()},{dir:"PointsBalancePlugin",group:"header",make:()=>At()},{dir:"StatRowPlugin",group:"header",make:()=>Bt()},{dir:"LevelBadgePlugin",group:"header",make:()=>it()},{dir:"CountdownPlugin",group:"header",make:()=>Ft()},{dir:"CalendarStripPlugin",group:"calendar",make:()=>tt({showRewardDot:!0})},{dir:"CalendarGridPlugin",group:"calendar",make:()=>Ut()},{dir:"MakeupSlotPlugin",group:"calendar",make:()=>rt()},{dir:"RewardPreviewPlugin",group:"rewards",make:()=>Nn({limit:5})},{dir:"RewardClaimPlugin",group:"rewards",make:()=>ot()},{dir:"MilestonePlugin",group:"rewards",make:()=>Wt()},{dir:"TodayCheckInPlugin",group:"actions",make:()=>Mn()},{dir:"SharePlugin",group:"actions",make:()=>Ht()},{dir:"RemindPlugin",group:"actions",make:()=>Vt()},{dir:"InvitePlugin",group:"actions",make:()=>Gt()},{dir:"RuleExpandPlugin",group:"footer",make:()=>Kt({defaultOpen:!0})},{dir:"RewardHistoryPlugin",group:"footer",make:()=>Gr()}],Vl=R1.map(e=>{const n=T1(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:E1(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>Wu.indexOf(e.group)-Wu.indexOf(n.group)||n.priority-e.priority),yw=["StreakStatePlugin","LevelBadgePlugin","CalendarStripPlugin","RewardPreviewPlugin","MilestonePlugin","TodayCheckInPlugin","MakeupSlotPlugin","SharePlugin","RuleExpandPlugin","RewardHistoryPlugin"];function b1({entry:e,order:n}){var a;const{meta:t,Stage:r,source:i,file:o}=e,l=String(n).padStart(2,"0");return c.jsxs("article",{children:[c.jsx("header",{className:"page-head",children:c.jsxs("div",{children:[c.jsxs("p",{className:"eyebrow",children:[l," · ",((a=_f[t.group])==null?void 0:a.label)??t.group]}),c.jsx("h1",{className:"page-title",children:t.title})]})}),t.intro?c.jsx("p",{className:"page-sub",children:t.intro}):null,c.jsx("section",{className:"demo-stage",children:c.jsx(r,{})}),c.jsxs("section",{className:"demo-src-wrap",children:[c.jsxs("div",{className:"demo-src-head",children:[c.jsxs("span",{className:"demo-src-title",children:["源码 · ",o]}),c.jsx("span",{className:"demo-src-hint",children:"下面这份就是上面正在跑的那份 · 已高亮"})]}),c.jsx(n1,{code:i,title:o,collapseAfter:28,maxHeight:460})]}),c.jsx(s1,{source:i,plugins:Vl})]})}const I1={id:"ecommerce",title:"电商签到运营位",group:"运营位",ref:{label:"电商 App · 签到弹层",url:"https://vane.dev/examples/sign-in/ecommerce"},pain:"一个按钮的签到太单薄，用户不知道连签能拿什么；把碎插件拼成一张完整运营位卡。",plugs:[{fn:"createStreakStatePlugin",why:"头部连签天数 + 最高连签，给连续打卡的用户正反馈"},{fn:"createCalendarStripPlugin",cfg:"showRewardDot: true",why:"14 天连签条，今天/已签/漏签一眼看清，带奖励的格打点"},{fn:"createRewardPreviewPlugin",why:"逐日奖励预告，把『再签 1 天得 50 积分』前置"},{fn:"createTodayCheckInPlugin",why:"主 CTA：今日签到 / 已签切换"},{fn:"createMakeupSlotPlugin",why:"漏签用户给补签入口，挽回流失"}],props:["data={data}","callbacks={callbacks}"],note:"五个原子插件，组合后就是一张可直接上线的大促签到卡。"},j1=H(F,[Dn(),tt({showRewardDot:!0}),Nn(),Mn(),rt()]);function $1(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(j1,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const D1=Object.freeze(Object.defineProperty({__proto__:null,default:$1,meta:I1},Symbol.toStringTag,{value:"Module"})),N1={id:"game-streak",title:"游戏连签激励",group:"激励",ref:{label:"游戏 · 每日任务",url:"https://vane.dev/examples/sign-in/game-streak"},pain:"游戏侧要的是成长曲线与紧迫感，单插件撑不起；用 6 个插件拼出『每日任务』面板。",plugs:[{fn:"createStreakStatePlugin",why:"连签天数 + 最高连签，冲榜动机"},{fn:"createCalendarGridPlugin",why:"月历网格，看整月进度"},{fn:"createMilestonePlugin",why:"里程碑节点（如 7/30 天）给阶段目标"},{fn:"createLevelBadgePlugin",why:"会员等级徽章，成长感"},{fn:"createRewardClaimPlugin",why:"达标奖励一键领取"},{fn:"createCountdownPlugin",why:"距下次刷新倒计时，制造紧迫"}],props:["data={data}","callbacks={callbacks}"],note:"倒计时依赖数据里的 nextResetAt，样本数据已带该字段。"},M1=H(F,[Dn(),Ut(),Wt(),it(),ot(),Ft()]);function O1(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(M1,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const L1=Object.freeze(Object.defineProperty({__proto__:null,default:O1,meta:N1},Symbol.toStringTag,{value:"Module"})),z1={id:"membership",title:"会员积分中心",group:"账户",ref:{label:"会员中心",url:"https://vane.dev/examples/sign-in/membership"},pain:"会员中心重在资产与规则透明；碎插件组合成账户视图。",plugs:[{fn:"createPointsBalancePlugin",why:"积分余额醒目展示"},{fn:"createStatRowPlugin",why:"累计天数 / 连签 / 补签次数一横排"},{fn:"createLevelBadgePlugin",why:"当前等级与进度"},{fn:"createRewardPreviewPlugin",why:"积分可兑奖励预告"},{fn:"createRuleExpandPlugin",cfg:"defaultOpen: true",why:"积分规则可折叠展开"}],props:["data={data}","callbacks={callbacks}"],note:"sampleData 已带 level / rules 字段，等级与规则插件直接能渲染。"},A1=H(F,[At(),Bt(),it(),Nn(),Kt({defaultOpen:!0})]);function B1(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(A1,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const F1=Object.freeze(Object.defineProperty({__proto__:null,default:B1,meta:z1},Symbol.toStringTag,{value:"Module"})),U1={id:"social-viral",title:"社交分享裂变",group:"裂变",ref:{label:"社交裂变",url:"https://vane.dev/examples/sign-in/social-viral"},pain:"裂变链路是『签到→分享→邀请→提醒』，单插件无法表达流程；按顺序拼成一张裂变卡。",plugs:[{fn:"createTodayCheckInPlugin",why:"先完成今日签到这一动作"},{fn:"createSharePlugin",cfg:'text: "晒今日签到"',why:"分享得额外奖励的入口"},{fn:"createInvitePlugin",why:"邀请好友，裂变拉新"},{fn:"createRemindPlugin",why:"开启每日提醒，提升留存"},{fn:"createRewardClaimPlugin",why:"分享 / 邀请带来的奖励领取"}],props:["data={data}","callbacks={callbacks}"],note:"share / invite / remind 走各自 callbacks，组合后即一条裂变漏斗。"},W1=H(F,[Mn(),Ht({text:"晒今日签到"}),Gt(),Vt(),ot()]);function H1(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(W1,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const V1=Object.freeze(Object.defineProperty({__proto__:null,default:H1,meta:U1},Symbol.toStringTag,{value:"Module"})),G1={id:"full-stack",title:"全功能中台 · 17 插件全量",group:"全集",ref:{label:"组件能力全集",url:"https://vane.dev/examples/sign-in/full"},pain:"想一次性看全部 17 个插件怎么共存——全量装配的压力测试。",plugs:[{fn:"createStreakStatePlugin",why:"头部连签状态"},{fn:"createPointsBalancePlugin",why:"积分余额"},{fn:"createStatRowPlugin",why:"统计横排"},{fn:"createLevelBadgePlugin",why:"等级徽章"},{fn:"createCountdownPlugin",why:"刷新倒计时"},{fn:"createCalendarStripPlugin",why:"连签条"},{fn:"createCalendarGridPlugin",why:"月历网格"},{fn:"createMakeupSlotPlugin",why:"补签入口"},{fn:"createRewardPreviewPlugin",why:"奖励预告"},{fn:"createRewardClaimPlugin",why:"奖励领取"},{fn:"createMilestonePlugin",why:"里程碑"},{fn:"createTodayCheckInPlugin",why:"今日签到 CTA"},{fn:"createSharePlugin",why:"分享"},{fn:"createRemindPlugin",why:"提醒"},{fn:"createInvitePlugin",why:"邀请"},{fn:"createRuleExpandPlugin",why:"规则展开"},{fn:"createRewardHistoryPlugin",why:"领取记录"}],props:["data={data}","callbacks={callbacks}"],note:"五个槽位（header/calendar/rewards/actions/footer）同时承载多个插件，靠 priority 决定共存顺序。"},K1=H(F,[Dn(),At(),Bt(),it(),Ft(),tt({showRewardDot:!0}),Ut(),rt(),Nn(),ot(),Wt(),Mn(),Ht(),Vt(),Gt(),Kt({defaultOpen:!0}),Gr()]);function Q1(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return c.jsx(K1,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const X1=Object.freeze(Object.defineProperty({__proto__:null,default:Q1,meta:G1},Symbol.toStringTag,{value:"Module"})),Y1=`import React, { useState } from "react";\r
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
`,Z1=`import React, { useState } from "react";\r
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
`,J1=`import React, { useState } from "react";\r
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
`,q1=`import React, { useState } from "react";\r
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
`,ew=`import React, { useState } from "react";\r
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
`,nw=Object.assign({"./01-ecommerce.tsx":D1,"./02-game-streak.tsx":L1,"./03-membership.tsx":F1,"./04-social-viral.tsx":V1,"./05-full-stack.tsx":X1}),tw=Object.assign({"./01-ecommerce.tsx":Y1,"./02-game-streak.tsx":Z1,"./03-membership.tsx":J1,"./04-social-viral.tsx":q1,"./05-full-stack.tsx":ew}),rw=e=>e.replace(/^\.\//,""),Zi=Object.entries(nw).map(([e,n])=>{const t=rw(e);return{meta:n.meta,Component:n.default,file:t,source:tw[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),vw=Zi.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),Sw=Array.from(new Set(Zi.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort(),iw=y.lazy(()=>Ga(()=>import("./HomePage-VMNcRwOz.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),ow=y.lazy(()=>Ga(()=>import("./PluginsPage-D5CEvMVG.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),lw=y.lazy(()=>Ga(()=>import("./ScenariosPage-C0H2ZXJ8.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),aw={pkg:"vane-sign-in",brand:"S",subtitle:"每日签到 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Vl.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Zi.length} plates`}],routes:[{path:"/",element:c.jsx(iw,{})},{path:"/plugins",element:c.jsx(ow,{})},{path:"/scenarios",element:c.jsx(lw,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:Yx.map(e=>({key:e,label:_f[e].label})),entries:Hl,detail:(e,n)=>c.jsx(b1,{entry:e,order:n})},footer:[`${Vl.length} PLUGINS · ${Zi.length} PLATES`,`${Hl.length} DEMOS · 插件索引`]};function sw(){return c.jsx(dh,{config:aw})}const uw=H(F,[Dn(),tt(),Nn(),rt(),Mn(),At(),Bt(),it(),Ft(),Ut(),ot(),Wt(),Ht(),Vt(),Gt(),Kt(),Gr()]),Gl=()=>new Promise(e=>setTimeout(e,0)),cw=async(e,n=60)=>{for(let t=0;t<n&&!e();t++)await Gl()};async function dw(e){const n=document.createElement("div");n.style.cssText="position:fixed;left:0;top:0;width:420px;background:#fff",document.body.appendChild(n);const t=of(n);return Qi.flushSync(()=>t.render(e)),await Gl(),{host:n,root:t,q:r=>n.querySelector(r),qq:r=>n.querySelectorAll(r),click:async r=>{const i=n.querySelector(r);if(!i)throw new Error(`找不到元素 ${r}`);Qi.flushSync(()=>i.click()),await Gl()}}}function fw(e){const t=Array.from(e.querySelectorAll("*")).map(a=>({e:a,r:a.getBoundingClientRect()}));if(!t.some(a=>a.r.width>0||a.r.height>0))return{checked:0,problems:[]};const i=[];let o=0;const l=e.getBoundingClientRect();for(const{r:a}of t)o+=1,(a.width<0||a.height<0)&&i.push("negative-size"),(a.left<-1||a.top<-1)&&i.push("negative-coord"),(a.right>l.right+1||a.bottom>l.bottom+1)&&i.push("overflow"),(a.width===0||a.height===0)&&i.push("zero-size");return e.scrollHeight>e.clientHeight+1&&i.push("scroll-overflow"),{checked:o,problems:Array.from(new Set(i))}}async function pw(){const e=[];let n=0;const t=(o,l)=>{n+=1,document.title=`SELFTEST RUNNING ${n}`,l||e.push(o)},r={signed:!1,claimed:null,makeup:null};function i(){const[o,l]=y.useState(!1),a=Q(o),s={sign:()=>{r.signed=!0,l(!0)},claim:u=>{r.claimed=u},makeup:u=>{r.makeup=u},share:()=>{},remind:()=>{},invite:()=>{}};return c.jsx(uw,{data:a,callbacks:s,containerStyle:{maxWidth:480}})}{const o=await dw(c.jsx(i,{}));t("根容器渲染 si-root",!!o.q('[data-testid="si-root"]'));const l=o.q('[data-testid="si-streak"]');t("连签数渲染（未签 streak=7）",!!l&&(l.textContent??"").includes("7")&&(l.textContent??"").includes("天连签"));const a=o.q('[data-testid="si-checkin-btn"]');t("今日签到按钮：未签态存在",!!a&&a.dataset.signed==="false"),t("今日签到按钮：未签文本「立即签到」",((a==null?void 0:a.textContent)??"")==="立即签到");const s=o.q('[data-testid="si-makeup-btn"]');t("补签入口存在且未禁用",!!s&&s.dataset.disabled==="false"&&s.disabled===!1),t("补签文案含「补签」",((s==null?void 0:s.textContent)??"").includes("补签")),t("未达领奖天数时无领取按钮",!o.q('[data-testid="si-claim-btn"]')),await o.click('[data-testid="si-checkin-btn"]'),await cw(()=>{var v;return((v=o.q('[data-testid="si-checkin-btn"]'))==null?void 0:v.dataset.signed)==="true"});const u=o.q('[data-testid="si-checkin-btn"]');t("签到后：按钮态 signed=true",(u==null?void 0:u.dataset.signed)==="true"),t("签到后：按钮禁用",(u==null?void 0:u.disabled)===!0),t("签到后：文案「今日已签 ✓」",((u==null?void 0:u.textContent)??"").includes("今日已签"));const p=o.q('[data-testid="si-streak"]');t("签到后：连签数更新为 8",!!p&&(p.textContent??"").includes("8")),t("签到回调被触发",r.signed===!0);const f=o.q('[data-testid="si-claim-btn"]');t("达标后：出现领取按钮",!!f&&f.dataset.day==="8"),f&&(await o.click('[data-testid="si-claim-btn"]'),t("领取回调被触发且 day=8",r.claimed===8)),await o.click('[data-testid="si-makeup-btn"]'),t("补签回调被触发且日期=2026-10-09",r.makeup==="2026-10-09");const h=fw(o.host);t("几何体检：0 问题（happy-dom 无布局引擎时自动跳过）",h.problems.length===0&&(h.checked===0||h.checked>=2)),Qi.flushSync(()=>o.root.unmount()),o.host.remove()}return{total:n,passed:n-e.length,failed:e}}async function gw(){document.title="SELFTEST RUNNING";try{const e=await pw();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Ho.createRoot(document.getElementById("root")).render(c.jsx(sw,{}));typeof location<"u"&&location.search.includes("selftest=1")&&gw();export{n1 as C,Hl as D,Wu as G,Vl as P,Zi as S,Sw as U,yw as a,hw as b,Y as c,Q as d,F as e,vw as f,c as j,y as r,H as w};
