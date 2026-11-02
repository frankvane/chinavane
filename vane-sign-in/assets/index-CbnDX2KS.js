var Tf=Object.defineProperty;var Rf=(e,n,t)=>n in e?Tf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var gs=(e,n,t)=>Rf(e,typeof n!="symbol"?n+"":n,t);function If(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function bf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gu={exports:{}},Ji={},Ku={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),$f=Symbol.for("react.portal"),jf=Symbol.for("react.fragment"),Df=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),Of=Symbol.for("react.context"),Lf=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Af=Symbol.for("react.memo"),Bf=Symbol.for("react.lazy"),ms=Symbol.iterator;function Ff(e){return e===null||typeof e!="object"?null:(e=ms&&e[ms]||e["@@iterator"],typeof e=="function"?e:null)}var Qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xu=Object.assign,Yu={};function Dt(e,n,t){this.props=e,this.context=n,this.refs=Yu,this.updater=t||Qu}Dt.prototype.isReactComponent={};Dt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Dt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zu(){}Zu.prototype=Dt.prototype;function Go(e,n,t){this.props=e,this.context=n,this.refs=Yu,this.updater=t||Qu}var Ko=Go.prototype=new Zu;Ko.constructor=Go;Xu(Ko,Dt.prototype);Ko.isPureReactComponent=!0;var hs=Array.isArray,Ju=Object.prototype.hasOwnProperty,Qo={current:null},qu={key:!0,ref:!0,__self:!0,__source:!0};function ec(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Ju.call(n,r)&&!qu.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Br,type:e,key:l,ref:o,props:i,_owner:Qo.current}}function Uf(e,n){return{$$typeof:Br,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Xo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function Wf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ys=/\/+/g;function hl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Wf(""+e.key):n.toString(36)}function fi(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Br:case $f:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+hl(o,0):r,hs(i)?(t="",e!=null&&(t=e.replace(ys,"$&/")+"/"),fi(i,n,t,"",function(u){return u})):i!=null&&(Xo(i)&&(i=Uf(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ys,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",hs(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+hl(l,a);o+=fi(l,n,t,s,i)}else if(s=Ff(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+hl(l,a++),o+=fi(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Qr(e,n,t){if(e==null)return e;var r=[],i=0;return fi(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Hf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},pi={transition:null},Vf={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:pi,ReactCurrentOwner:Qo};function nc(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Qr,forEach:function(e,n,t){Qr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Qr(e,function(){n++}),n},toArray:function(e){return Qr(e,function(n){return n})||[]},only:function(e){if(!Xo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Dt;D.Fragment=jf;D.Profiler=Mf;D.PureComponent=Go;D.StrictMode=Df;D.Suspense=zf;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vf;D.act=nc;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xu({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Qo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Ju.call(n,s)&&!qu.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Br,type:e.type,key:i,ref:l,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:Of,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nf,_context:e},e.Consumer=e};D.createElement=ec;D.createFactory=function(e){var n=ec.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Lf,render:e}};D.isValidElement=Xo;D.lazy=function(e){return{$$typeof:Bf,_payload:{_status:-1,_result:e},_init:Hf}};D.memo=function(e,n){return{$$typeof:Af,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=pi.transition;pi.transition={};try{e()}finally{pi.transition=n}};D.unstable_act=nc;D.useCallback=function(e,n){return ge.current.useCallback(e,n)};D.useContext=function(e){return ge.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};D.useEffect=function(e,n){return ge.current.useEffect(e,n)};D.useId=function(){return ge.current.useId()};D.useImperativeHandle=function(e,n,t){return ge.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return ge.current.useMemo(e,n)};D.useReducer=function(e,n,t){return ge.current.useReducer(e,n,t)};D.useRef=function(e){return ge.current.useRef(e)};D.useState=function(e){return ge.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return ge.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return ge.current.useTransition()};D.version="18.3.1";Ku.exports=D;var y=Ku.exports;const Fr=bf(y),Gf=If({__proto__:null,default:Fr},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf=y,Qf=Symbol.for("react.element"),Xf=Symbol.for("react.fragment"),Yf=Object.prototype.hasOwnProperty,Zf=Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jf={key:!0,ref:!0,__self:!0,__source:!0};function tc(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Yf.call(n,r)&&!Jf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Qf,type:e,key:l,ref:o,props:i,_owner:Zf.current}}Ji.Fragment=Xf;Ji.jsx=tc;Ji.jsxs=tc;Gu.exports=Ji;var h=Gu.exports,Wl={},rc={exports:{}},Te={},ic={exports:{}},lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,I){var b=_.length;_.push(I);e:for(;0<b;){var N=b-1>>>1,U=_[N];if(0<i(U,I))_[N]=I,_[b]=U,b=N;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var I=_[0],b=_.pop();if(b!==I){_[0]=b;e:for(var N=0,U=_.length,We=U>>>1;N<We;){var we=2*(N+1)-1,On=_[we],Ln=we+1,Kr=_[Ln];if(0>i(On,b))Ln<U&&0>i(Kr,On)?(_[N]=Kr,_[Ln]=b,N=Ln):(_[N]=On,_[we]=b,N=we);else if(Ln<U&&0>i(Kr,b))_[N]=Kr,_[Ln]=b,N=Ln;else break e}}return I}function i(_,I){var b=_.sortIndex-I.sortIndex;return b!==0?b:_.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],u=[],f=1,c=null,p=3,v=!1,S=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(_){for(var I=t(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=_)r(u),I.sortIndex=I.expirationTime,n(s,I);else break;I=t(u)}}function w(_){if(x=!1,g(_),!S)if(t(s)!==null)S=!0,Yt(C);else{var I=t(u);I!==null&&Zt(w,I.startTime-_)}}function C(_,I){S=!1,x&&(x=!1,m($),$=-1),v=!0;var b=p;try{for(g(I),c=t(s);c!==null&&(!(c.expirationTime>I)||_&&!de());){var N=c.callback;if(typeof N=="function"){c.callback=null,p=c.priorityLevel;var U=N(c.expirationTime<=I);I=e.unstable_now(),typeof U=="function"?c.callback=U:c===t(s)&&r(s),g(I)}else r(s);c=t(s)}if(c!==null)var We=!0;else{var we=t(u);we!==null&&Zt(w,we.startTime-I),We=!1}return We}finally{c=null,p=b,v=!1}}var R=!1,T=null,$=-1,L=5,j=-1;function de(){return!(e.unstable_now()-j<L)}function un(){if(T!==null){var _=e.unstable_now();j=_;var I=!0;try{I=T(!0,_)}finally{I?Xe():(R=!1,T=null)}}else R=!1}var Xe;if(typeof d=="function")Xe=function(){d(un)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Xt=Qt.port2;Qt.port1.onmessage=un,Xe=function(){Xt.postMessage(null)}}else Xe=function(){P(un,0)};function Yt(_){T=_,R||(R=!0,Xe())}function Zt(_,I){$=P(function(){_(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){S||v||(S=!0,Yt(C))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var b=p;p=I;try{return _()}finally{p=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,I){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var b=p;p=_;try{return I()}finally{p=b}},e.unstable_scheduleCallback=function(_,I,b){var N=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?N+b:N):b=N,_){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=b+U,_={id:f++,callback:I,priorityLevel:_,startTime:b,expirationTime:U,sortIndex:-1},b>N?(_.sortIndex=b,n(u,_),t(s)===null&&_===t(u)&&(x?(m($),$=-1):x=!0,Zt(w,b-N))):(_.sortIndex=U,n(s,_),S||v||(S=!0,Yt(C))),_},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(_){var I=p;return function(){var b=p;p=I;try{return _.apply(this,arguments)}finally{p=b}}}})(lc);ic.exports=lc;var qf=ic.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep=y,_e=qf;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oc=new Set,wr={};function qn(e,n){Et(e,n),Et(e+"Capture",n)}function Et(e,n){for(wr[e]=n,e=0;e<n.length;e++)oc.add(n[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,np=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vs={},Ss={};function tp(e){return Hl.call(Ss,e)?!0:Hl.call(vs,e)?!1:np.test(e)?Ss[e]=!0:(vs[e]=!0,!1)}function rp(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ip(e,n,t,r){if(n===null||typeof n>"u"||rp(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function me(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];oe[n]=new me(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yo=/[\-:]([a-z])/g;function Zo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Yo,Zo);oe[n]=new me(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Yo,Zo);oe[n]=new me(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Yo,Zo);oe[n]=new me(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jo(e,n,t,r){var i=oe.hasOwnProperty(n)?oe[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ip(n,t,i,r)&&(t=null),r||i===null?tp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var an=ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xr=Symbol.for("react.element"),st=Symbol.for("react.portal"),ut=Symbol.for("react.fragment"),qo=Symbol.for("react.strict_mode"),Vl=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),sc=Symbol.for("react.context"),ea=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),na=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),uc=Symbol.for("react.offscreen"),xs=Symbol.iterator;function Jt(e){return e===null||typeof e!="object"?null:(e=xs&&e[xs]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,yl;function ar(e){if(yl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);yl=n&&n[1]||""}return`
`+yl+e}var vl=!1;function Sl(e,n){if(!e||vl)return"";vl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{vl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ar(e):""}function lp(e){switch(e.tag){case 5:return ar(e.type);case 16:return ar("Lazy");case 13:return ar("Suspense");case 19:return ar("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ut:return"Fragment";case st:return"Portal";case Vl:return"Profiler";case qo:return"StrictMode";case Gl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sc:return(e.displayName||"Context")+".Consumer";case ac:return(e._context.displayName||"Context")+".Provider";case ea:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case na:return n=e.displayName||null,n!==null?n:Ql(e.type)||"Memo";case dn:n=e._payload,e=e._init;try{return Ql(e(n))}catch{}}return null}function op(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(n);case 8:return n===qo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ap(e){var n=cc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Yr(e){e._valueTracker||(e._valueTracker=ap(e))}function dc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=cc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,n){var t=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ws(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Tn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fc(e,n){n=n.checked,n!=null&&Jo(e,"checked",n,!1)}function Yl(e,n){fc(e,n);var t=Tn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Zl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Zl(e,n.type,Tn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ks(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Zl(e,n,t){(n!=="number"||Ci(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var sr=Array.isArray;function xt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Tn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Jl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ps(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(sr(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Tn(t)}}function pc(e,n){var t=Tn(n.value),r=Tn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Cs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ql(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?gc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,mc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function kr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sp=["Webkit","ms","Moz","O"];Object.keys(fr).forEach(function(e){sp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),fr[n]=fr[e]})});function hc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||fr.hasOwnProperty(e)&&fr[e]?(""+n).trim():n+"px"}function yc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=hc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var up=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eo(e,n){if(n){if(up[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function no(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var to=null;function ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ro=null,wt=null,kt=null;function _s(e){if(e=Hr(e)){if(typeof ro!="function")throw Error(k(280));var n=e.stateNode;n&&(n=rl(n),ro(e.stateNode,e.type,n))}}function vc(e){wt?kt?kt.push(e):kt=[e]:wt=e}function Sc(){if(wt){var e=wt,n=kt;if(kt=wt=null,_s(e),n)for(e=0;e<n.length;e++)_s(n[e])}}function xc(e,n){return e(n)}function wc(){}var xl=!1;function kc(e,n,t){if(xl)return e(n,t);xl=!0;try{return xc(e,n,t)}finally{xl=!1,(wt!==null||kt!==null)&&(wc(),Sc())}}function Pr(e,n){var t=e.stateNode;if(t===null)return null;var r=rl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var io=!1;if(nn)try{var qt={};Object.defineProperty(qt,"passive",{get:function(){io=!0}}),window.addEventListener("test",qt,qt),window.removeEventListener("test",qt,qt)}catch{io=!1}function cp(e,n,t,r,i,l,o,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var pr=!1,_i=null,Ei=!1,lo=null,dp={onError:function(e){pr=!0,_i=e}};function fp(e,n,t,r,i,l,o,a,s){pr=!1,_i=null,cp.apply(dp,arguments)}function pp(e,n,t,r,i,l,o,a,s){if(fp.apply(this,arguments),pr){if(pr){var u=_i;pr=!1,_i=null}else throw Error(k(198));Ei||(Ei=!0,lo=u)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Pc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Es(e){if(et(e)!==e)throw Error(k(188))}function gp(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Es(i),e;if(l===r)return Es(i),n;l=l.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function Cc(e){return e=gp(e),e!==null?_c(e):null}function _c(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=_c(e);if(n!==null)return n;e=e.sibling}return null}var Ec=_e.unstable_scheduleCallback,Ts=_e.unstable_cancelCallback,mp=_e.unstable_shouldYield,hp=_e.unstable_requestPaint,Z=_e.unstable_now,yp=_e.unstable_getCurrentPriorityLevel,ra=_e.unstable_ImmediatePriority,Tc=_e.unstable_UserBlockingPriority,Ti=_e.unstable_NormalPriority,vp=_e.unstable_LowPriority,Rc=_e.unstable_IdlePriority,qi=null,Ke=null;function Sp(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(qi,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:kp,xp=Math.log,wp=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(xp(e)/wp|0)|0}var Jr=64,qr=4194304;function ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ri(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=ur(a):(l&=o,l!==0&&(r=ur(l)))}else o=t&~i,o!==0?r=ur(o):l!==0&&(r=ur(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Be(n),i=1<<t,r|=e[t],n&=~i;return r}function Pp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Be(l),a=1<<o,s=i[o];s===-1?(!(a&t)||a&r)&&(i[o]=Pp(a,n)):s<=n&&(e.expiredLanes|=a),l&=~a}}function oo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ic(){var e=Jr;return Jr<<=1,!(Jr&4194240)&&(Jr=64),e}function wl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ur(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Be(n),e[n]=t}function _p(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Be(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function ia(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Be(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var O=0;function bc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $c,la,jc,Dc,Mc,ao=!1,ei=[],vn=null,Sn=null,xn=null,Cr=new Map,_r=new Map,pn=[],Ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rs(e,n){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Cr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(n.pointerId)}}function er(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Hr(n),n!==null&&la(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Tp(e,n,t,r,i){switch(n){case"focusin":return vn=er(vn,e,n,t,r,i),!0;case"dragenter":return Sn=er(Sn,e,n,t,r,i),!0;case"mouseover":return xn=er(xn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Cr.set(l,er(Cr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,_r.set(l,er(_r.get(l)||null,e,n,t,r,i)),!0}return!1}function Nc(e){var n=Bn(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=Pc(t),n!==null){e.blockedOn=n,Mc(e.priority,function(){jc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=so(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);to=r,t.target.dispatchEvent(r),to=null}else return n=Hr(t),n!==null&&la(n),e.blockedOn=t,!1;n.shift()}return!0}function Is(e,n,t){gi(e)&&t.delete(n)}function Rp(){ao=!1,vn!==null&&gi(vn)&&(vn=null),Sn!==null&&gi(Sn)&&(Sn=null),xn!==null&&gi(xn)&&(xn=null),Cr.forEach(Is),_r.forEach(Is)}function nr(e,n){e.blockedOn===n&&(e.blockedOn=null,ao||(ao=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Rp)))}function Er(e){function n(i){return nr(i,e)}if(0<ei.length){nr(ei[0],e);for(var t=1;t<ei.length;t++){var r=ei[t];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&nr(vn,e),Sn!==null&&nr(Sn,e),xn!==null&&nr(xn,e),Cr.forEach(n),_r.forEach(n),t=0;t<pn.length;t++)r=pn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(t=pn[0],t.blockedOn===null);)Nc(t),t.blockedOn===null&&pn.shift()}var Pt=an.ReactCurrentBatchConfig,Ii=!0;function Ip(e,n,t,r){var i=O,l=Pt.transition;Pt.transition=null;try{O=1,oa(e,n,t,r)}finally{O=i,Pt.transition=l}}function bp(e,n,t,r){var i=O,l=Pt.transition;Pt.transition=null;try{O=4,oa(e,n,t,r)}finally{O=i,Pt.transition=l}}function oa(e,n,t,r){if(Ii){var i=so(e,n,t,r);if(i===null)$l(e,n,r,bi,t),Rs(e,r);else if(Tp(i,e,n,t,r))r.stopPropagation();else if(Rs(e,r),n&4&&-1<Ep.indexOf(e)){for(;i!==null;){var l=Hr(i);if(l!==null&&$c(l),l=so(e,n,t,r),l===null&&$l(e,n,r,bi,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else $l(e,n,r,null,t)}}var bi=null;function so(e,n,t,r){if(bi=null,e=ta(r),e=Bn(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Pc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return bi=e,null}function Oc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yp()){case ra:return 1;case Tc:return 4;case Ti:case vp:return 16;case Rc:return 536870912;default:return 16}default:return 16}}var mn=null,aa=null,mi=null;function Lc(){if(mi)return mi;var e,n=aa,t=n.length,r,i="value"in mn?mn.value:mn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return mi=i.slice(e,1<r?1-r:void 0)}function hi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function bs(){return!1}function Re(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ni:bs,this.isPropagationStopped=bs,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),n}var Mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sa=Re(Mt),Wr=K({},Mt,{view:0,detail:0}),$p=Re(Wr),kl,Pl,tr,el=K({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(kl=e.screenX-tr.screenX,Pl=e.screenY-tr.screenY):Pl=kl=0,tr=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),$s=Re(el),jp=K({},el,{dataTransfer:0}),Dp=Re(jp),Mp=K({},Wr,{relatedTarget:0}),Cl=Re(Mp),Np=K({},Mt,{animationName:0,elapsedTime:0,pseudoElement:0}),Op=Re(Np),Lp=K({},Mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zp=Re(Lp),Ap=K({},Mt,{data:0}),js=Re(Ap),Bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Up[e])?!!n[e]:!1}function ua(){return Wp}var Hp=K({},Wr,{key:function(e){if(e.key){var n=Bp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ua,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vp=Re(Hp),Gp=K({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ds=Re(Gp),Kp=K({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ua}),Qp=Re(Kp),Xp=K({},Mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yp=Re(Xp),Zp=K({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jp=Re(Zp),qp=[9,13,27,32],ca=nn&&"CompositionEvent"in window,gr=null;nn&&"documentMode"in document&&(gr=document.documentMode);var eg=nn&&"TextEvent"in window&&!gr,zc=nn&&(!ca||gr&&8<gr&&11>=gr),Ms=" ",Ns=!1;function Ac(e,n){switch(e){case"keyup":return qp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ct=!1;function ng(e,n){switch(e){case"compositionend":return Bc(n);case"keypress":return n.which!==32?null:(Ns=!0,Ms);case"textInput":return e=n.data,e===Ms&&Ns?null:e;default:return null}}function tg(e,n){if(ct)return e==="compositionend"||!ca&&Ac(e,n)?(e=Lc(),mi=aa=mn=null,ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zc&&n.locale!=="ko"?null:n.data;default:return null}}var rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Os(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!rg[e.type]:n==="textarea"}function Fc(e,n,t,r){vc(r),n=$i(n,"onChange"),0<n.length&&(t=new sa("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var mr=null,Tr=null;function ig(e){Jc(e,0)}function nl(e){var n=pt(e);if(dc(n))return e}function lg(e,n){if(e==="change")return n}var Uc=!1;if(nn){var _l;if(nn){var El="oninput"in document;if(!El){var Ls=document.createElement("div");Ls.setAttribute("oninput","return;"),El=typeof Ls.oninput=="function"}_l=El}else _l=!1;Uc=_l&&(!document.documentMode||9<document.documentMode)}function zs(){mr&&(mr.detachEvent("onpropertychange",Wc),Tr=mr=null)}function Wc(e){if(e.propertyName==="value"&&nl(Tr)){var n=[];Fc(n,Tr,e,ta(e)),kc(ig,n)}}function og(e,n,t){e==="focusin"?(zs(),mr=n,Tr=t,mr.attachEvent("onpropertychange",Wc)):e==="focusout"&&zs()}function ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Tr)}function sg(e,n){if(e==="click")return nl(n)}function ug(e,n){if(e==="input"||e==="change")return nl(n)}function cg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ue=typeof Object.is=="function"?Object.is:cg;function Rr(e,n){if(Ue(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Hl.call(n,i)||!Ue(e[i],n[i]))return!1}return!0}function As(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bs(e,n){var t=As(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=As(t)}}function Hc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vc(){for(var e=window,n=Ci();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ci(e.document)}return n}function da(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function dg(e){var n=Vc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Hc(t.ownerDocument.documentElement,t)){if(r!==null&&da(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Bs(t,l);var o=Bs(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fg=nn&&"documentMode"in document&&11>=document.documentMode,dt=null,uo=null,hr=null,co=!1;function Fs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;co||dt==null||dt!==Ci(r)||(r=dt,"selectionStart"in r&&da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&Rr(hr,r)||(hr=r,r=$i(uo,"onSelect"),0<r.length&&(n=new sa("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=dt)))}function ti(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ft={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionend:ti("Transition","TransitionEnd")},Tl={},Gc={};nn&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete ft.animationend.animation,delete ft.animationiteration.animation,delete ft.animationstart.animation),"TransitionEvent"in window||delete ft.transitionend.transition);function tl(e){if(Tl[e])return Tl[e];if(!ft[e])return e;var n=ft[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Gc)return Tl[e]=n[t];return e}var Kc=tl("animationend"),Qc=tl("animationiteration"),Xc=tl("animationstart"),Yc=tl("transitionend"),Zc=new Map,Us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,n){Zc.set(e,n),qn(n,[e])}for(var Rl=0;Rl<Us.length;Rl++){var Il=Us[Rl],pg=Il.toLowerCase(),gg=Il[0].toUpperCase()+Il.slice(1);In(pg,"on"+gg)}In(Kc,"onAnimationEnd");In(Qc,"onAnimationIteration");In(Xc,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Yc,"onTransitionEnd");Et("onMouseEnter",["mouseout","mouseover"]);Et("onMouseLeave",["mouseout","mouseover"]);Et("onPointerEnter",["pointerout","pointerover"]);Et("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mg=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function Ws(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,pp(r,n,void 0,e),e.currentTarget=null}function Jc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;Ws(i,a,u),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;Ws(i,a,u),l=s}}}if(Ei)throw e=lo,Ei=!1,lo=null,e}function A(e,n){var t=n[ho];t===void 0&&(t=n[ho]=new Set);var r=e+"__bubble";t.has(r)||(qc(n,e,2,!1),t.add(r))}function bl(e,n,t){var r=0;n&&(r|=4),qc(t,e,r,n)}var ri="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[ri]){e[ri]=!0,oc.forEach(function(t){t!=="selectionchange"&&(mg.has(t)||bl(t,!1,e),bl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ri]||(n[ri]=!0,bl("selectionchange",!1,n))}}function qc(e,n,t,r){switch(Oc(n)){case 1:var i=Ip;break;case 4:i=bp;break;default:i=oa}t=i.bind(null,n,t,e),i=void 0,!io||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function $l(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Bn(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}kc(function(){var u=l,f=ta(t),c=[];e:{var p=Zc.get(e);if(p!==void 0){var v=sa,S=e;switch(e){case"keypress":if(hi(t)===0)break e;case"keydown":case"keyup":v=Vp;break;case"focusin":S="focus",v=Cl;break;case"focusout":S="blur",v=Cl;break;case"beforeblur":case"afterblur":v=Cl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Qp;break;case Kc:case Qc:case Xc:v=Op;break;case Yc:v=Yp;break;case"scroll":v=$p;break;case"wheel":v=Jp;break;case"copy":case"cut":case"paste":v=zp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ds}var x=(n&4)!==0,P=!x&&e==="scroll",m=x?p!==null?p+"Capture":null:p;x=[];for(var d=u,g;d!==null;){g=d;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Pr(d,m),w!=null&&x.push(br(d,w,g)))),P)break;d=d.return}0<x.length&&(p=new v(p,S,null,t,f),c.push({event:p,listeners:x}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&t!==to&&(S=t.relatedTarget||t.fromElement)&&(Bn(S)||S[tn]))break e;if((v||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,v?(S=t.relatedTarget||t.toElement,v=u,S=S?Bn(S):null,S!==null&&(P=et(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=u),v!==S)){if(x=$s,w="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ds,w="onPointerLeave",m="onPointerEnter",d="pointer"),P=v==null?p:pt(v),g=S==null?p:pt(S),p=new x(w,d+"leave",v,t,f),p.target=P,p.relatedTarget=g,w=null,Bn(f)===u&&(x=new x(m,d+"enter",S,t,f),x.target=g,x.relatedTarget=P,w=x),P=w,v&&S)n:{for(x=v,m=S,d=0,g=x;g;g=ot(g))d++;for(g=0,w=m;w;w=ot(w))g++;for(;0<d-g;)x=ot(x),d--;for(;0<g-d;)m=ot(m),g--;for(;d--;){if(x===m||m!==null&&x===m.alternate)break n;x=ot(x),m=ot(m)}x=null}else x=null;v!==null&&Hs(c,p,v,x,!1),S!==null&&P!==null&&Hs(c,P,S,x,!0)}}e:{if(p=u?pt(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var C=lg;else if(Os(p))if(Uc)C=ug;else{C=ag;var R=og}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=sg);if(C&&(C=C(e,u))){Fc(c,C,t,f);break e}R&&R(e,p,u),e==="focusout"&&(R=p._wrapperState)&&R.controlled&&p.type==="number"&&Zl(p,"number",p.value)}switch(R=u?pt(u):window,e){case"focusin":(Os(R)||R.contentEditable==="true")&&(dt=R,uo=u,hr=null);break;case"focusout":hr=uo=dt=null;break;case"mousedown":co=!0;break;case"contextmenu":case"mouseup":case"dragend":co=!1,Fs(c,t,f);break;case"selectionchange":if(fg)break;case"keydown":case"keyup":Fs(c,t,f)}var T;if(ca)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else ct?Ac(e,t)&&($="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&($="onCompositionStart");$&&(zc&&t.locale!=="ko"&&(ct||$!=="onCompositionStart"?$==="onCompositionEnd"&&ct&&(T=Lc()):(mn=f,aa="value"in mn?mn.value:mn.textContent,ct=!0)),R=$i(u,$),0<R.length&&($=new js($,e,null,t,f),c.push({event:$,listeners:R}),T?$.data=T:(T=Bc(t),T!==null&&($.data=T)))),(T=eg?ng(e,t):tg(e,t))&&(u=$i(u,"onBeforeInput"),0<u.length&&(f=new js("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:u}),f.data=T))}Jc(c,n)})}function br(e,n,t){return{instance:e,listener:n,currentTarget:t}}function $i(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Pr(e,t),l!=null&&r.unshift(br(e,l,i)),l=Pr(e,n),l!=null&&r.push(br(e,l,i))),e=e.return}return r}function ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hs(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Pr(t,l),s!=null&&o.unshift(br(t,s,a))):i||(s=Pr(t,l),s!=null&&o.push(br(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var hg=/\r\n?/g,yg=/\u0000|\uFFFD/g;function Vs(e){return(typeof e=="string"?e:""+e).replace(hg,`
`).replace(yg,"")}function ii(e,n,t){if(n=Vs(n),Vs(e)!==n&&t)throw Error(k(425))}function ji(){}var fo=null,po=null;function go(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var mo=typeof setTimeout=="function"?setTimeout:void 0,vg=typeof clearTimeout=="function"?clearTimeout:void 0,Gs=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Gs<"u"?function(e){return Gs.resolve(null).then(e).catch(xg)}:mo;function xg(e){setTimeout(function(){throw e})}function jl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Er(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Er(n)}function wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Nt=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Nt,$r="__reactProps$"+Nt,tn="__reactContainer$"+Nt,ho="__reactEvents$"+Nt,wg="__reactListeners$"+Nt,kg="__reactHandles$"+Nt;function Bn(e){var n=e[Ge];if(n)return n;for(var t=e.parentNode;t;){if(n=t[tn]||t[Ge]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ks(e);e!==null;){if(t=e[Ge])return t;e=Ks(e)}return n}e=t,t=e.parentNode}return null}function Hr(e){return e=e[Ge]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function rl(e){return e[$r]||null}var yo=[],gt=-1;function bn(e){return{current:e}}function B(e){0>gt||(e.current=yo[gt],yo[gt]=null,gt--)}function z(e,n){gt++,yo[gt]=e.current,e.current=n}var Rn={},ce=bn(Rn),ve=bn(!1),Vn=Rn;function Tt(e,n){var t=e.type.contextTypes;if(!t)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Se(e){return e=e.childContextTypes,e!=null}function Di(){B(ve),B(ce)}function Qs(e,n,t){if(ce.current!==Rn)throw Error(k(168));z(ce,n),z(ve,t)}function ed(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,op(e)||"Unknown",i));return K({},t,r)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Vn=ce.current,z(ce,e),z(ve,ve.current),!0}function Xs(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=ed(e,n,Vn),r.__reactInternalMemoizedMergedChildContext=e,B(ve),B(ce),z(ce,e)):B(ve),z(ve,t)}var Ze=null,il=!1,Dl=!1;function nd(e){Ze===null?Ze=[e]:Ze.push(e)}function Pg(e){il=!0,nd(e)}function $n(){if(!Dl&&Ze!==null){Dl=!0;var e=0,n=O;try{var t=Ze;for(O=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ze=null,il=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(e+1)),Ec(ra,$n),i}finally{O=n,Dl=!1}}return null}var mt=[],ht=0,Ni=null,Oi=0,Ie=[],be=0,Gn=null,Je=1,qe="";function zn(e,n){mt[ht++]=Oi,mt[ht++]=Ni,Ni=e,Oi=n}function td(e,n,t){Ie[be++]=Je,Ie[be++]=qe,Ie[be++]=Gn,Gn=e;var r=Je;e=qe;var i=32-Be(r)-1;r&=~(1<<i),t+=1;var l=32-Be(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Je=1<<32-Be(n)+i|t<<i|r,qe=l+e}else Je=1<<l|t<<i|r,qe=e}function fa(e){e.return!==null&&(zn(e,1),td(e,1,0))}function pa(e){for(;e===Ni;)Ni=mt[--ht],mt[ht]=null,Oi=mt[--ht],mt[ht]=null;for(;e===Gn;)Gn=Ie[--be],Ie[be]=null,qe=Ie[--be],Ie[be]=null,Je=Ie[--be],Ie[be]=null}var Ce=null,Pe=null,W=!1,Ae=null;function rd(e,n){var t=$e(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ys(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ce=e,Pe=wn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ce=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Gn!==null?{id:Je,overflow:qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=$e(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ce=e,Pe=null,!0):!1;default:return!1}}function vo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(W){var n=Pe;if(n){var t=n;if(!Ys(e,n)){if(vo(e))throw Error(k(418));n=wn(t.nextSibling);var r=Ce;n&&Ys(e,n)?rd(r,t):(e.flags=e.flags&-4097|2,W=!1,Ce=e)}}else{if(vo(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,Ce=e}}}function Zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function li(e){if(e!==Ce)return!1;if(!W)return Zs(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!go(e.type,e.memoizedProps)),n&&(n=Pe)){if(vo(e))throw id(),Error(k(418));for(;n;)rd(e,n),n=wn(n.nextSibling)}if(Zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=wn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=Ce?wn(e.stateNode.nextSibling):null;return!0}function id(){for(var e=Pe;e;)e=wn(e.nextSibling)}function Rt(){Pe=Ce=null,W=!1}function ga(e){Ae===null?Ae=[e]:Ae.push(e)}var Cg=an.ReactCurrentBatchConfig;function rr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function oi(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Js(e){var n=e._init;return n(e._payload)}function ld(e){function n(m,d){if(e){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function t(m,d){if(!e)return null;for(;d!==null;)n(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=_n(m,d),m.index=0,m.sibling=null,m}function l(m,d,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,w){return d===null||d.tag!==6?(d=Bl(g,m.mode,w),d.return=m,d):(d=i(d,g),d.return=m,d)}function s(m,d,g,w){var C=g.type;return C===ut?f(m,d,g.props.children,w,g.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dn&&Js(C)===d.type)?(w=i(d,g.props),w.ref=rr(m,d,g),w.return=m,w):(w=Pi(g.type,g.key,g.props,null,m.mode,w),w.ref=rr(m,d,g),w.return=m,w)}function u(m,d,g,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Fl(g,m.mode,w),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function f(m,d,g,w,C){return d===null||d.tag!==7?(d=Hn(g,m.mode,w,C),d.return=m,d):(d=i(d,g),d.return=m,d)}function c(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Bl(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Xr:return g=Pi(d.type,d.key,d.props,null,m.mode,g),g.ref=rr(m,null,d),g.return=m,g;case st:return d=Fl(d,m.mode,g),d.return=m,d;case dn:var w=d._init;return c(m,w(d._payload),g)}if(sr(d)||Jt(d))return d=Hn(d,m.mode,g,null),d.return=m,d;oi(m,d)}return null}function p(m,d,g,w){var C=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(m,d,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xr:return g.key===C?s(m,d,g,w):null;case st:return g.key===C?u(m,d,g,w):null;case dn:return C=g._init,p(m,d,C(g._payload),w)}if(sr(g)||Jt(g))return C!==null?null:f(m,d,g,w,null);oi(m,g)}return null}function v(m,d,g,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(d,m,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xr:return m=m.get(w.key===null?g:w.key)||null,s(d,m,w,C);case st:return m=m.get(w.key===null?g:w.key)||null,u(d,m,w,C);case dn:var R=w._init;return v(m,d,g,R(w._payload),C)}if(sr(w)||Jt(w))return m=m.get(g)||null,f(d,m,w,C,null);oi(d,w)}return null}function S(m,d,g,w){for(var C=null,R=null,T=d,$=d=0,L=null;T!==null&&$<g.length;$++){T.index>$?(L=T,T=null):L=T.sibling;var j=p(m,T,g[$],w);if(j===null){T===null&&(T=L);break}e&&T&&j.alternate===null&&n(m,T),d=l(j,d,$),R===null?C=j:R.sibling=j,R=j,T=L}if($===g.length)return t(m,T),W&&zn(m,$),C;if(T===null){for(;$<g.length;$++)T=c(m,g[$],w),T!==null&&(d=l(T,d,$),R===null?C=T:R.sibling=T,R=T);return W&&zn(m,$),C}for(T=r(m,T);$<g.length;$++)L=v(T,m,$,g[$],w),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?$:L.key),d=l(L,d,$),R===null?C=L:R.sibling=L,R=L);return e&&T.forEach(function(de){return n(m,de)}),W&&zn(m,$),C}function x(m,d,g,w){var C=Jt(g);if(typeof C!="function")throw Error(k(150));if(g=C.call(g),g==null)throw Error(k(151));for(var R=C=null,T=d,$=d=0,L=null,j=g.next();T!==null&&!j.done;$++,j=g.next()){T.index>$?(L=T,T=null):L=T.sibling;var de=p(m,T,j.value,w);if(de===null){T===null&&(T=L);break}e&&T&&de.alternate===null&&n(m,T),d=l(de,d,$),R===null?C=de:R.sibling=de,R=de,T=L}if(j.done)return t(m,T),W&&zn(m,$),C;if(T===null){for(;!j.done;$++,j=g.next())j=c(m,j.value,w),j!==null&&(d=l(j,d,$),R===null?C=j:R.sibling=j,R=j);return W&&zn(m,$),C}for(T=r(m,T);!j.done;$++,j=g.next())j=v(T,m,$,j.value,w),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?$:j.key),d=l(j,d,$),R===null?C=j:R.sibling=j,R=j);return e&&T.forEach(function(un){return n(m,un)}),W&&zn(m,$),C}function P(m,d,g,w){if(typeof g=="object"&&g!==null&&g.type===ut&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xr:e:{for(var C=g.key,R=d;R!==null;){if(R.key===C){if(C=g.type,C===ut){if(R.tag===7){t(m,R.sibling),d=i(R,g.props.children),d.return=m,m=d;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dn&&Js(C)===R.type){t(m,R.sibling),d=i(R,g.props),d.ref=rr(m,R,g),d.return=m,m=d;break e}t(m,R);break}else n(m,R);R=R.sibling}g.type===ut?(d=Hn(g.props.children,m.mode,w,g.key),d.return=m,m=d):(w=Pi(g.type,g.key,g.props,null,m.mode,w),w.ref=rr(m,d,g),w.return=m,m=w)}return o(m);case st:e:{for(R=g.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){t(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{t(m,d);break}else n(m,d);d=d.sibling}d=Fl(g,m.mode,w),d.return=m,m=d}return o(m);case dn:return R=g._init,P(m,d,R(g._payload),w)}if(sr(g))return S(m,d,g,w);if(Jt(g))return x(m,d,g,w);oi(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(t(m,d.sibling),d=i(d,g),d.return=m,m=d):(t(m,d),d=Bl(g,m.mode,w),d.return=m,m=d),o(m)):t(m,d)}return P}var It=ld(!0),od=ld(!1),Li=bn(null),zi=null,yt=null,ma=null;function ha(){ma=yt=zi=null}function ya(e){var n=Li.current;B(Li),e._currentValue=n}function xo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ct(e,n){zi=e,ma=yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ye=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(ma!==e)if(e={context:e,memoizedValue:n,next:null},yt===null){if(zi===null)throw Error(k(308));yt=e,zi.dependencies={lanes:0,firstContext:e}}else yt=yt.next=e;return n}var Fn=null;function va(e){Fn===null?Fn=[e]:Fn.push(e)}function ad(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,va(n)):(t.next=i.next,i.next=t),n.interleaved=t,rn(e,r)}function rn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var fn=!1;function Sa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,rn(e,t)}return i=r.interleaved,i===null?(n.next=n,va(r)):(n.next=i.next,i.next=n),r.interleaved=n,rn(e,t)}function yi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ia(e,t)}}function qs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ai(e,n,t,r){var i=e.updateQueue;fn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,o===null?l=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(l!==null){var c=i.baseState;o=0,f=u=s=null,a=l;do{var p=a.lane,v=a.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,x=a;switch(p=n,v=t,x.tag){case 1:if(S=x.payload,typeof S=="function"){c=S.call(v,c,p);break e}c=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,p=typeof S=="function"?S.call(v,c,p):S,p==null)break e;c=K({},c,p);break e;case 2:fn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,s=c):f=f.next=v,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Qn|=o,e.lanes=o,e.memoizedState=c}}function eu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Vr={},Qe=bn(Vr),jr=bn(Vr),Dr=bn(Vr);function Un(e){if(e===Vr)throw Error(k(174));return e}function xa(e,n){switch(z(Dr,n),z(jr,e),z(Qe,Vr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ql(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ql(n,e)}B(Qe),z(Qe,n)}function bt(){B(Qe),B(jr),B(Dr)}function ud(e){Un(Dr.current);var n=Un(Qe.current),t=ql(n,e.type);n!==t&&(z(jr,e),z(Qe,t))}function wa(e){jr.current===e&&(B(Qe),B(jr))}var V=bn(0);function Bi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ml=[];function ka(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var vi=an.ReactCurrentDispatcher,Nl=an.ReactCurrentBatchConfig,Kn=0,G=null,ee=null,te=null,Fi=!1,yr=!1,Mr=0,_g=0;function ae(){throw Error(k(321))}function Pa(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ue(e[t],n[t]))return!1;return!0}function Ca(e,n,t,r,i,l){if(Kn=l,G=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,vi.current=e===null||e.memoizedState===null?Ig:bg,e=t(r,i),yr){l=0;do{if(yr=!1,Mr=0,25<=l)throw Error(k(301));l+=1,te=ee=null,n.updateQueue=null,vi.current=$g,e=t(r,i)}while(yr)}if(vi.current=Ui,n=ee!==null&&ee.next!==null,Kn=0,te=ee=G=null,Fi=!1,n)throw Error(k(300));return e}function _a(){var e=Mr!==0;return Mr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?G.memoizedState=te=e:te=te.next=e,te}function Ne(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=te===null?G.memoizedState:te.next;if(n!==null)te=n,ee=e;else{if(e===null)throw Error(k(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},te===null?G.memoizedState=te=e:te=te.next=e}return te}function Nr(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=Ne(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=ee,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,u=l;do{var f=u.lane;if((Kn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,o=r):s=s.next=c,G.lanes|=f,Qn|=f}u=u.next}while(u!==null&&u!==l);s===null?o=r:s.next=a,Ue(r,n.memoizedState)||(ye=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,G.lanes|=l,Qn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ll(e){var n=Ne(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ue(l,n.memoizedState)||(ye=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function cd(){}function dd(e,n){var t=G,r=Ne(),i=n(),l=!Ue(r.memoizedState,i);if(l&&(r.memoizedState=i,ye=!0),r=r.queue,Ea(gd.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||te!==null&&te.memoizedState.tag&1){if(t.flags|=2048,Or(9,pd.bind(null,t,r,i,n),void 0,null),re===null)throw Error(k(349));Kn&30||fd(t,n,i)}return i}function fd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function pd(e,n,t,r){n.value=t,n.getSnapshot=r,md(n)&&hd(e)}function gd(e,n,t){return t(function(){md(n)&&hd(e)})}function md(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ue(e,t)}catch{return!0}}function hd(e){var n=rn(e,1);n!==null&&Fe(n,e,1,-1)}function nu(e){var n=Ve();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},n.queue=e,e=e.dispatch=Rg.bind(null,G,e),[n.memoizedState,e]}function Or(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function yd(){return Ne().memoizedState}function Si(e,n,t,r){var i=Ve();G.flags|=e,i.memoizedState=Or(1|n,t,void 0,r===void 0?null:r)}function ll(e,n,t,r){var i=Ne();r=r===void 0?null:r;var l=void 0;if(ee!==null){var o=ee.memoizedState;if(l=o.destroy,r!==null&&Pa(r,o.deps)){i.memoizedState=Or(n,t,l,r);return}}G.flags|=e,i.memoizedState=Or(1|n,t,l,r)}function tu(e,n){return Si(8390656,8,e,n)}function Ea(e,n){return ll(2048,8,e,n)}function vd(e,n){return ll(4,2,e,n)}function Sd(e,n){return ll(4,4,e,n)}function xd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wd(e,n,t){return t=t!=null?t.concat([e]):null,ll(4,4,xd.bind(null,n,e),t)}function Ta(){}function kd(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Pa(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Pd(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Pa(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Cd(e,n,t){return Kn&21?(Ue(t,n)||(t=Ic(),G.lanes|=t,Qn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=t)}function Eg(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var r=Nl.transition;Nl.transition={};try{e(!1),n()}finally{O=t,Nl.transition=r}}function _d(){return Ne().memoizedState}function Tg(e,n,t){var r=Cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ed(e))Td(n,t);else if(t=ad(e,n,t,r),t!==null){var i=pe();Fe(t,e,r,i),Rd(t,n,r)}}function Rg(e,n,t){var r=Cn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ed(e))Td(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,a=l(o,t);if(i.hasEagerState=!0,i.eagerState=a,Ue(a,o)){var s=n.interleaved;s===null?(i.next=i,va(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=ad(e,n,i,r),t!==null&&(i=pe(),Fe(t,e,r,i),Rd(t,n,r))}}function Ed(e){var n=e.alternate;return e===G||n!==null&&n===G}function Td(e,n){yr=Fi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Rd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ia(e,t)}}var Ui={readContext:Me,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Ig={readContext:Me,useCallback:function(e,n){return Ve().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:tu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Si(4194308,4,xd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Si(4194308,4,e,n)},useInsertionEffect:function(e,n){return Si(4,2,e,n)},useMemo:function(e,n){var t=Ve();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ve();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Tg.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var n=Ve();return e={current:e},n.memoizedState=e},useState:nu,useDebugValue:Ta,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=nu(!1),n=e[0];return e=Eg.bind(null,e[1]),Ve().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=G,i=Ve();if(W){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),re===null)throw Error(k(349));Kn&30||fd(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,tu(gd.bind(null,r,l,e),[e]),r.flags|=2048,Or(9,pd.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Ve(),n=re.identifierPrefix;if(W){var t=qe,r=Je;t=(r&~(1<<32-Be(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Mr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=_g++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},bg={readContext:Me,useCallback:kd,useContext:Me,useEffect:Ea,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:Sd,useMemo:Pd,useReducer:Ol,useRef:yd,useState:function(){return Ol(Nr)},useDebugValue:Ta,useDeferredValue:function(e){var n=Ne();return Cd(n,ee.memoizedState,e)},useTransition:function(){var e=Ol(Nr)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:cd,useSyncExternalStore:dd,useId:_d,unstable_isNewReconciler:!1},$g={readContext:Me,useCallback:kd,useContext:Me,useEffect:Ea,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:Sd,useMemo:Pd,useReducer:Ll,useRef:yd,useState:function(){return Ll(Nr)},useDebugValue:Ta,useDeferredValue:function(e){var n=Ne();return ee===null?n.memoizedState=e:Cd(n,ee.memoizedState,e)},useTransition:function(){var e=Ll(Nr)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:cd,useSyncExternalStore:dd,useId:_d,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function wo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:K({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ol={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=pe(),i=Cn(e),l=en(r,i);l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,i),n!==null&&(Fe(n,e,i,r),yi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=pe(),i=Cn(e),l=en(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,i),n!==null&&(Fe(n,e,i,r),yi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=pe(),r=Cn(e),i=en(t,r);i.tag=2,n!=null&&(i.callback=n),n=kn(e,i,r),n!==null&&(Fe(n,e,r,t),yi(n,e,r))}};function ru(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Rr(t,r)||!Rr(i,l):!0}function Id(e,n,t){var r=!1,i=Rn,l=n.contextType;return typeof l=="object"&&l!==null?l=Me(l):(i=Se(n)?Vn:ce.current,r=n.contextTypes,l=(r=r!=null)?Tt(e,i):Rn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ol,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function iu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ol.enqueueReplaceState(n,n.state,null)}function ko(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Sa(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Me(l):(l=Se(n)?Vn:ce.current,i.context=Tt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(wo(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ol.enqueueReplaceState(i,i.state,null),Ai(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $t(e,n){try{var t="",r=n;do t+=lp(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function zl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Po(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var jg=typeof WeakMap=="function"?WeakMap:Map;function bd(e,n,t){t=en(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Hi||(Hi=!0,Do=r),Po(e,n)},t}function $d(e,n,t){t=en(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Po(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Po(e,n),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function lu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new jg;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Gg.bind(null,e,n,t),n.then(e,e))}function ou(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function au(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=en(-1,1),n.tag=2,kn(t,n,1))),t.lanes|=1),e)}var Dg=an.ReactCurrentOwner,ye=!1;function fe(e,n,t,r){n.child=e===null?od(n,null,t,r):It(n,e.child,t,r)}function su(e,n,t,r,i){t=t.render;var l=n.ref;return Ct(n,i),r=Ca(e,n,t,r,l,i),t=_a(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,ln(e,n,i)):(W&&t&&fa(n),n.flags|=1,fe(e,n,r,i),n.child)}function uu(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Na(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,jd(e,n,l,r,i)):(e=Pi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Rr,t(o,r)&&e.ref===n.ref)return ln(e,n,i)}return n.flags|=1,e=_n(l,r),e.ref=n.ref,e.return=n,n.child=e}function jd(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Rr(l,r)&&e.ref===n.ref)if(ye=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return n.lanes=e.lanes,ln(e,n,i)}return Co(e,n,t,r,i)}function Dd(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(St,ke),ke|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,z(St,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,z(St,ke),ke|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,z(St,ke),ke|=r;return fe(e,n,i,t),n.child}function Md(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Co(e,n,t,r,i){var l=Se(t)?Vn:ce.current;return l=Tt(n,l),Ct(n,i),t=Ca(e,n,t,r,l,i),r=_a(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,ln(e,n,i)):(W&&r&&fa(n),n.flags|=1,fe(e,n,t,i),n.child)}function cu(e,n,t,r,i){if(Se(t)){var l=!0;Mi(n)}else l=!1;if(Ct(n,i),n.stateNode===null)xi(e,n),Id(n,t,r),ko(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=Se(t)?Vn:ce.current,u=Tt(n,u));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==u)&&iu(n,o,r,u),fn=!1;var p=n.memoizedState;o.state=p,Ai(n,r,o,i),s=n.memoizedState,a!==r||p!==s||ve.current||fn?(typeof f=="function"&&(wo(n,t,f,r),s=n.memoizedState),(a=fn||ru(n,t,a,r,p,s,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,sd(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Le(n.type,a),o.props=u,c=n.pendingProps,p=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Me(s):(s=Se(t)?Vn:ce.current,s=Tt(n,s));var v=t.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||p!==s)&&iu(n,o,r,s),fn=!1,p=n.memoizedState,o.state=p,Ai(n,r,o,i);var S=n.memoizedState;a!==c||p!==S||ve.current||fn?(typeof v=="function"&&(wo(n,t,v,r),S=n.memoizedState),(u=fn||ru(n,t,u,r,p,S,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),o.props=r,o.state=S,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return _o(e,n,t,r,l,i)}function _o(e,n,t,r,i,l){Md(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Xs(n,t,!1),ln(e,n,l);r=n.stateNode,Dg.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=It(n,e.child,null,l),n.child=It(n,null,a,l)):fe(e,n,a,l),n.memoizedState=r.state,i&&Xs(n,t,!0),n.child}function Nd(e){var n=e.stateNode;n.pendingContext?Qs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Qs(e,n.context,!1),xa(e,n.containerInfo)}function du(e,n,t,r,i){return Rt(),ga(i),n.flags|=256,fe(e,n,t,r),n.child}var Eo={dehydrated:null,treeContext:null,retryLane:0};function To(e){return{baseLanes:e,cachePool:null,transitions:null}}function Od(e,n,t){var r=n.pendingProps,i=V.current,l=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(V,i&1),e===null)return So(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=ul(o,r,0,null),e=Hn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=To(t),n.memoizedState=Eo,e):Ra(n,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Mg(e,n,o,r,a,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=_n(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=_n(a,l):(l=Hn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?To(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Eo,r}return l=e.child,e=l.sibling,r=_n(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ra(e,n){return n=ul({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ai(e,n,t,r){return r!==null&&ga(r),It(n,e.child,null,t),e=Ra(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Mg(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=zl(Error(k(422))),ai(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=ul({mode:"visible",children:r.children},i,0,null),l=Hn(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&It(n,e.child,null,o),n.child.memoizedState=To(o),n.memoizedState=Eo,l);if(!(n.mode&1))return ai(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(k(419)),r=zl(l,r,void 0),ai(e,n,o,r)}if(a=(o&e.childLanes)!==0,ye||a){if(r=re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,rn(e,i),Fe(r,e,i,-1))}return Ma(),r=zl(Error(k(421))),ai(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Kg.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Pe=wn(i.nextSibling),Ce=n,W=!0,Ae=null,e!==null&&(Ie[be++]=Je,Ie[be++]=qe,Ie[be++]=Gn,Je=e.id,qe=e.overflow,Gn=n),n=Ra(n,r.children),n.flags|=4096,n)}function fu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),xo(e.return,n,t)}function Al(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Ld(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(fe(e,n,r.children,t),r=V.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fu(e,t,n);else if(e.tag===19)fu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(V,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Bi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Al(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Bi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Al(n,!0,t,null,l);break;case"together":Al(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function xi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Qn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=_n(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=_n(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ng(e,n,t){switch(n.tag){case 3:Nd(n),Rt();break;case 5:ud(n);break;case 1:Se(n.type)&&Mi(n);break;case 4:xa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;z(Li,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(z(V,V.current&1),n.flags|=128,null):t&n.child.childLanes?Od(e,n,t):(z(V,V.current&1),e=ln(e,n,t),e!==null?e.sibling:null);z(V,V.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ld(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(V,V.current),r)break;return null;case 22:case 23:return n.lanes=0,Dd(e,n,t)}return ln(e,n,t)}var zd,Ro,Ad,Bd;zd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ro=function(){};Ad=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Un(Qe.current);var l=null;switch(t){case"input":i=Xl(e,i),r=Xl(e,r),l=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),l=[];break;case"textarea":i=Jl(e,i),r=Jl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ji)}eo(t,r);var o;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&A("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};Bd=function(e,n,t,r){t!==r&&(n.flags|=4)};function ir(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Og(e,n,t){var r=n.pendingProps;switch(pa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return Se(n.type)&&Di(),se(n),null;case 3:return r=n.stateNode,bt(),B(ve),B(ce),ka(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(li(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ae!==null&&(Oo(Ae),Ae=null))),Ro(e,n),se(n),null;case 5:wa(n);var i=Un(Dr.current);if(t=n.type,e!==null&&n.stateNode!=null)Ad(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return se(n),null}if(e=Un(Qe.current),li(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Ge]=n,r[$r]=l,e=(n.mode&1)!==0,t){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(i=0;i<cr.length;i++)A(cr[i],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":ws(r,l),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},A("invalid",r);break;case"textarea":Ps(r,l),A("invalid",r)}eo(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&ii(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&ii(r.textContent,a,e),i=["children",""+a]):wr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&A("scroll",r)}switch(t){case"input":Yr(r),ks(r,l,!0);break;case"textarea":Yr(r),Cs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ji)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Ge]=n,e[$r]=r,zd(e,n,!1,!1),n.stateNode=e;e:{switch(o=no(t,r),t){case"dialog":A("cancel",e),A("close",e),i=r;break;case"iframe":case"object":case"embed":A("load",e),i=r;break;case"video":case"audio":for(i=0;i<cr.length;i++)A(cr[i],e);i=r;break;case"source":A("error",e),i=r;break;case"img":case"image":case"link":A("error",e),A("load",e),i=r;break;case"details":A("toggle",e),i=r;break;case"input":ws(e,r),i=Xl(e,r),A("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),A("invalid",e);break;case"textarea":Ps(e,r),i=Jl(e,r),A("invalid",e);break;default:i=r}eo(t,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?yc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&mc(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&kr(e,s):typeof s=="number"&&kr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(wr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&A("scroll",e):s!=null&&Jo(e,l,s,o))}switch(t){case"input":Yr(e),ks(e,r,!1);break;case"textarea":Yr(e),Cs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?xt(e,!!r.multiple,l,!1):r.defaultValue!=null&&xt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ji)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Bd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Un(Dr.current),Un(Qe.current),li(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ge]=n,(l=r.nodeValue!==t)&&(e=Ce,e!==null))switch(e.tag){case 3:ii(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ii(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ge]=n,n.stateNode=r}return se(n),null;case 13:if(B(V),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Pe!==null&&n.mode&1&&!(n.flags&128))id(),Rt(),n.flags|=98560,l=!1;else if(l=li(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[Ge]=n}else Rt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),l=!1}else Ae!==null&&(Oo(Ae),Ae=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||V.current&1?ne===0&&(ne=3):Ma())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return bt(),Ro(e,n),e===null&&Ir(n.stateNode.containerInfo),se(n),null;case 10:return ya(n.type._context),se(n),null;case 17:return Se(n.type)&&Di(),se(n),null;case 19:if(B(V),l=n.memoizedState,l===null)return se(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)ir(l,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Bi(e),o!==null){for(n.flags|=128,ir(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return z(V,V.current&1|2),n.child}e=e.sibling}l.tail!==null&&Z()>jt&&(n.flags|=128,r=!0,ir(l,!1),n.lanes=4194304)}else{if(!r)if(e=Bi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ir(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!W)return se(n),null}else 2*Z()-l.renderingStartTime>jt&&t!==1073741824&&(n.flags|=128,r=!0,ir(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Z(),n.sibling=null,t=V.current,z(V,r?t&1|2:t&1),n):(se(n),null);case 22:case 23:return Da(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ke&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Lg(e,n){switch(pa(n),n.tag){case 1:return Se(n.type)&&Di(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return bt(),B(ve),B(ce),ka(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return wa(n),null;case 13:if(B(V),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Rt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(V),null;case 4:return bt(),null;case 10:return ya(n.type._context),null;case 22:case 23:return Da(),null;case 24:return null;default:return null}}var si=!1,ue=!1,zg=typeof WeakSet=="function"?WeakSet:Set,E=null;function vt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){X(e,n,r)}else t.current=null}function Io(e,n,t){try{t()}catch(r){X(e,n,r)}}var pu=!1;function Ag(e,n){if(fo=Ii,e=Vc(),da(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,u=0,f=0,c=e,p=null;n:for(;;){for(var v;c!==t||i!==0&&c.nodeType!==3||(a=o+i),c!==l||r!==0&&c.nodeType!==3||(s=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(v=c.firstChild)!==null;)p=c,c=v;for(;;){if(c===e)break n;if(p===t&&++u===i&&(a=o),p===l&&++f===r&&(s=o),(v=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=v}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(po={focusedElem:e,selectionRange:t},Ii=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,P=S.memoizedState,m=n.stateNode,d=m.getSnapshotBeforeUpdate(n.elementType===n.type?x:Le(n.type,x),P);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){X(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return S=pu,pu=!1,S}function vr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Io(n,t,l)}i=i.next}while(i!==r)}}function al(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function bo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Fd(e){var n=e.alternate;n!==null&&(e.alternate=null,Fd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ge],delete n[$r],delete n[ho],delete n[wg],delete n[kg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ud(e){return e.tag===5||e.tag===3||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ji));else if(r!==4&&(e=e.child,e!==null))for($o(e,n,t),e=e.sibling;e!==null;)$o(e,n,t),e=e.sibling}function jo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jo(e,n,t),e=e.sibling;e!==null;)jo(e,n,t),e=e.sibling}var ie=null,ze=!1;function cn(e,n,t){for(t=t.child;t!==null;)Wd(e,n,t),t=t.sibling}function Wd(e,n,t){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(qi,t)}catch{}switch(t.tag){case 5:ue||vt(t,n);case 6:var r=ie,i=ze;ie=null,cn(e,n,t),ie=r,ze=i,ie!==null&&(ze?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(ze?(e=ie,t=t.stateNode,e.nodeType===8?jl(e.parentNode,t):e.nodeType===1&&jl(e,t),Er(e)):jl(ie,t.stateNode));break;case 4:r=ie,i=ze,ie=t.stateNode.containerInfo,ze=!0,cn(e,n,t),ie=r,ze=i;break;case 0:case 11:case 14:case 15:if(!ue&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Io(t,n,o),i=i.next}while(i!==r)}cn(e,n,t);break;case 1:if(!ue&&(vt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){X(t,n,a)}cn(e,n,t);break;case 21:cn(e,n,t);break;case 22:t.mode&1?(ue=(r=ue)||t.memoizedState!==null,cn(e,n,t),ue=r):cn(e,n,t);break;default:cn(e,n,t)}}function mu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new zg),n.forEach(function(r){var i=Qg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Oe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,ze=!1;break e;case 3:ie=a.stateNode.containerInfo,ze=!0;break e;case 4:ie=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(ie===null)throw Error(k(160));Wd(l,o,i),ie=null,ze=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){X(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Hd(n,e),n=n.sibling}function Hd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(n,e),He(e),r&4){try{vr(3,e,e.return),al(3,e)}catch(x){X(e,e.return,x)}try{vr(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:Oe(n,e),He(e),r&512&&t!==null&&vt(t,t.return);break;case 5:if(Oe(n,e),He(e),r&512&&t!==null&&vt(t,t.return),e.flags&32){var i=e.stateNode;try{kr(i,"")}catch(x){X(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&fc(i,l),no(a,o);var u=no(a,l);for(o=0;o<s.length;o+=2){var f=s[o],c=s[o+1];f==="style"?yc(i,c):f==="dangerouslySetInnerHTML"?mc(i,c):f==="children"?kr(i,c):Jo(i,f,c,u)}switch(a){case"input":Yl(i,l);break;case"textarea":pc(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?xt(i,!!l.multiple,v,!1):p!==!!l.multiple&&(l.defaultValue!=null?xt(i,!!l.multiple,l.defaultValue,!0):xt(i,!!l.multiple,l.multiple?[]:"",!1))}i[$r]=l}catch(x){X(e,e.return,x)}}break;case 6:if(Oe(n,e),He(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){X(e,e.return,x)}}break;case 3:if(Oe(n,e),He(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:Oe(n,e),He(e);break;case 13:Oe(n,e),He(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||($a=Z())),r&4&&mu(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(ue=(u=ue)||f,Oe(n,e),ue=u):Oe(n,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(E=e,f=e.child;f!==null;){for(c=E=f;E!==null;){switch(p=E,v=p.child,p.tag){case 0:case 11:case 14:case 15:vr(4,p,p.return);break;case 1:vt(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(x){X(r,t,x)}}break;case 5:vt(p,p.return);break;case 22:if(p.memoizedState!==null){yu(c);continue}}v!==null?(v.return=p,E=v):yu(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=c.stateNode,s=c.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=hc("display",o))}catch(x){X(e,e.return,x)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(x){X(e,e.return,x)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Oe(n,e),He(e),r&4&&mu(e);break;case 21:break;default:Oe(n,e),He(e)}}function He(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ud(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(kr(i,""),r.flags&=-33);var l=gu(e);jo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=gu(e);$o(e,a,o);break;default:throw Error(k(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bg(e,n,t){E=e,Vd(e)}function Vd(e,n,t){for(var r=(e.mode&1)!==0;E!==null;){var i=E,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||si;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||ue;a=si;var u=ue;if(si=o,(ue=s)&&!u)for(E=i;E!==null;)o=E,s=o.child,o.tag===22&&o.memoizedState!==null?vu(i):s!==null?(s.return=o,E=s):vu(i);for(;l!==null;)E=l,Vd(l),l=l.sibling;E=i,si=a,ue=u}hu(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,E=l):hu(e)}}function hu(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ue||al(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ue)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&eu(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}eu(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Er(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ue||n.flags&512&&bo(n)}catch(p){X(n,n.return,p)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function yu(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function vu(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{al(4,n)}catch(s){X(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){X(n,i,s)}}var l=n.return;try{bo(n)}catch(s){X(n,l,s)}break;case 5:var o=n.return;try{bo(n)}catch(s){X(n,o,s)}}}catch(s){X(n,n.return,s)}if(n===e){E=null;break}var a=n.sibling;if(a!==null){a.return=n.return,E=a;break}E=n.return}}var Fg=Math.ceil,Wi=an.ReactCurrentDispatcher,Ia=an.ReactCurrentOwner,De=an.ReactCurrentBatchConfig,M=0,re=null,q=null,le=0,ke=0,St=bn(0),ne=0,Lr=null,Qn=0,sl=0,ba=0,Sr=null,he=null,$a=0,jt=1/0,Ye=null,Hi=!1,Do=null,Pn=null,ui=!1,hn=null,Vi=0,xr=0,Mo=null,wi=-1,ki=0;function pe(){return M&6?Z():wi!==-1?wi:wi=Z()}function Cn(e){return e.mode&1?M&2&&le!==0?le&-le:Cg.transition!==null?(ki===0&&(ki=Ic()),ki):(e=O,e!==0||(e=window.event,e=e===void 0?16:Oc(e.type)),e):1}function Fe(e,n,t,r){if(50<xr)throw xr=0,Mo=null,Error(k(185));Ur(e,t,r),(!(M&2)||e!==re)&&(e===re&&(!(M&2)&&(sl|=t),ne===4&&gn(e,le)),xe(e,r),t===1&&M===0&&!(n.mode&1)&&(jt=Z()+500,il&&$n()))}function xe(e,n){var t=e.callbackNode;Cp(e,n);var r=Ri(e,e===re?le:0);if(r===0)t!==null&&Ts(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ts(t),n===1)e.tag===0?Pg(Su.bind(null,e)):nd(Su.bind(null,e)),Sg(function(){!(M&6)&&$n()}),t=null;else{switch(bc(r)){case 1:t=ra;break;case 4:t=Tc;break;case 16:t=Ti;break;case 536870912:t=Rc;break;default:t=Ti}t=qd(t,Gd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Gd(e,n){if(wi=-1,ki=0,M&6)throw Error(k(327));var t=e.callbackNode;if(_t()&&e.callbackNode!==t)return null;var r=Ri(e,e===re?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Gi(e,r);else{n=r;var i=M;M|=2;var l=Qd();(re!==e||le!==n)&&(Ye=null,jt=Z()+500,Wn(e,n));do try{Hg();break}catch(a){Kd(e,a)}while(!0);ha(),Wi.current=l,M=i,q!==null?n=0:(re=null,le=0,n=ne)}if(n!==0){if(n===2&&(i=oo(e),i!==0&&(r=i,n=No(e,i))),n===1)throw t=Lr,Wn(e,0),gn(e,r),xe(e,Z()),t;if(n===6)gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ug(i)&&(n=Gi(e,r),n===2&&(l=oo(e),l!==0&&(r=l,n=No(e,l))),n===1))throw t=Lr,Wn(e,0),gn(e,r),xe(e,Z()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:An(e,he,Ye);break;case 3:if(gn(e,r),(r&130023424)===r&&(n=$a+500-Z(),10<n)){if(Ri(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mo(An.bind(null,e,he,Ye),n);break}An(e,he,Ye);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Be(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fg(r/1960))-r,10<r){e.timeoutHandle=mo(An.bind(null,e,he,Ye),r);break}An(e,he,Ye);break;case 5:An(e,he,Ye);break;default:throw Error(k(329))}}}return xe(e,Z()),e.callbackNode===t?Gd.bind(null,e):null}function No(e,n){var t=Sr;return e.current.memoizedState.isDehydrated&&(Wn(e,n).flags|=256),e=Gi(e,n),e!==2&&(n=he,he=t,n!==null&&Oo(n)),e}function Oo(e){he===null?he=e:he.push.apply(he,e)}function Ug(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Ue(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gn(e,n){for(n&=~ba,n&=~sl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Be(n),r=1<<t;e[t]=-1,n&=~r}}function Su(e){if(M&6)throw Error(k(327));_t();var n=Ri(e,0);if(!(n&1))return xe(e,Z()),null;var t=Gi(e,n);if(e.tag!==0&&t===2){var r=oo(e);r!==0&&(n=r,t=No(e,r))}if(t===1)throw t=Lr,Wn(e,0),gn(e,n),xe(e,Z()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,An(e,he,Ye),xe(e,Z()),null}function ja(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(jt=Z()+500,il&&$n())}}function Xn(e){hn!==null&&hn.tag===0&&!(M&6)&&_t();var n=M;M|=1;var t=De.transition,r=O;try{if(De.transition=null,O=1,e)return e()}finally{O=r,De.transition=t,M=n,!(M&6)&&$n()}}function Da(){ke=St.current,B(St)}function Wn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,vg(t)),q!==null)for(t=q.return;t!==null;){var r=t;switch(pa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Di();break;case 3:bt(),B(ve),B(ce),ka();break;case 5:wa(r);break;case 4:bt();break;case 13:B(V);break;case 19:B(V);break;case 10:ya(r.type._context);break;case 22:case 23:Da()}t=t.return}if(re=e,q=e=_n(e.current,null),le=ke=n,ne=0,Lr=null,ba=sl=Qn=0,he=Sr=null,Fn!==null){for(n=0;n<Fn.length;n++)if(t=Fn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Fn=null}return e}function Kd(e,n){do{var t=q;try{if(ha(),vi.current=Ui,Fi){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fi=!1}if(Kn=0,te=ee=G=null,yr=!1,Mr=0,Ia.current=null,t===null||t.return===null){ne=1,Lr=n,q=null;break}e:{var l=e,o=t.return,a=t,s=n;if(n=le,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=ou(o);if(v!==null){v.flags&=-257,au(v,o,a,l,n),v.mode&1&&lu(l,u,n),n=v,s=u;var S=n.updateQueue;if(S===null){var x=new Set;x.add(s),n.updateQueue=x}else S.add(s);break e}else{if(!(n&1)){lu(l,u,n),Ma();break e}s=Error(k(426))}}else if(W&&a.mode&1){var P=ou(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),au(P,o,a,l,n),ga($t(s,a));break e}}l=s=$t(s,a),ne!==4&&(ne=2),Sr===null?Sr=[l]:Sr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var m=bd(l,s,n);qs(l,m);break e;case 1:a=s;var d=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pn===null||!Pn.has(g)))){l.flags|=65536,n&=-n,l.lanes|=n;var w=$d(l,a,n);qs(l,w);break e}}l=l.return}while(l!==null)}Yd(t)}catch(C){n=C,q===t&&t!==null&&(q=t=t.return);continue}break}while(!0)}function Qd(){var e=Wi.current;return Wi.current=Ui,e===null?Ui:e}function Ma(){(ne===0||ne===3||ne===2)&&(ne=4),re===null||!(Qn&268435455)&&!(sl&268435455)||gn(re,le)}function Gi(e,n){var t=M;M|=2;var r=Qd();(re!==e||le!==n)&&(Ye=null,Wn(e,n));do try{Wg();break}catch(i){Kd(e,i)}while(!0);if(ha(),M=t,Wi.current=r,q!==null)throw Error(k(261));return re=null,le=0,ne}function Wg(){for(;q!==null;)Xd(q)}function Hg(){for(;q!==null&&!mp();)Xd(q)}function Xd(e){var n=Jd(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?Yd(e):q=n,Ia.current=null}function Yd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Lg(t,n),t!==null){t.flags&=32767,q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,q=null;return}}else if(t=Og(t,n,ke),t!==null){q=t;return}if(n=n.sibling,n!==null){q=n;return}q=n=e}while(n!==null);ne===0&&(ne=5)}function An(e,n,t){var r=O,i=De.transition;try{De.transition=null,O=1,Vg(e,n,t,r)}finally{De.transition=i,O=r}return null}function Vg(e,n,t,r){do _t();while(hn!==null);if(M&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(_p(e,l),e===re&&(q=re=null,le=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ui||(ui=!0,qd(Ti,function(){return _t(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=De.transition,De.transition=null;var o=O;O=1;var a=M;M|=4,Ia.current=null,Ag(e,t),Hd(t,e),dg(po),Ii=!!fo,po=fo=null,e.current=t,Bg(t),hp(),M=a,O=o,De.transition=l}else e.current=t;if(ui&&(ui=!1,hn=e,Vi=i),l=e.pendingLanes,l===0&&(Pn=null),Sp(t.stateNode),xe(e,Z()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hi)throw Hi=!1,e=Do,Do=null,e;return Vi&1&&e.tag!==0&&_t(),l=e.pendingLanes,l&1?e===Mo?xr++:(xr=0,Mo=e):xr=0,$n(),null}function _t(){if(hn!==null){var e=bc(Vi),n=De.transition,t=O;try{if(De.transition=null,O=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,Vi=0,M&6)throw Error(k(331));var i=M;for(M|=4,E=e.current;E!==null;){var l=E,o=l.child;if(E.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(E=u;E!==null;){var f=E;switch(f.tag){case 0:case 11:case 15:vr(8,f,l)}var c=f.child;if(c!==null)c.return=f,E=c;else for(;E!==null;){f=E;var p=f.sibling,v=f.return;if(Fd(f),f===u){E=null;break}if(p!==null){p.return=v,E=p;break}E=v}}}var S=l.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}E=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,E=o;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:vr(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,E=m;break e}E=l.return}}var d=e.current;for(E=d;E!==null;){o=E;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,E=g;else e:for(o=d;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:al(9,a)}}catch(C){X(a,a.return,C)}if(a===o){E=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,E=w;break e}E=a.return}}if(M=i,$n(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(qi,e)}catch{}r=!0}return r}finally{O=t,De.transition=n}}return!1}function xu(e,n,t){n=$t(t,n),n=bd(e,n,1),e=kn(e,n,1),n=pe(),e!==null&&(Ur(e,1,n),xe(e,n))}function X(e,n,t){if(e.tag===3)xu(e,e,t);else for(;n!==null;){if(n.tag===3){xu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=$t(t,e),e=$d(n,e,1),n=kn(n,e,1),e=pe(),n!==null&&(Ur(n,1,e),xe(n,e));break}}n=n.return}}function Gg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=pe(),e.pingedLanes|=e.suspendedLanes&t,re===e&&(le&t)===t&&(ne===4||ne===3&&(le&130023424)===le&&500>Z()-$a?Wn(e,0):ba|=t),xe(e,n)}function Zd(e,n){n===0&&(e.mode&1?(n=qr,qr<<=1,!(qr&130023424)&&(qr=4194304)):n=1);var t=pe();e=rn(e,n),e!==null&&(Ur(e,n,t),xe(e,t))}function Kg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Zd(e,t)}function Qg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Zd(e,t)}var Jd;Jd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ye=!1,Ng(e,n,t);ye=!!(e.flags&131072)}else ye=!1,W&&n.flags&1048576&&td(n,Oi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;xi(e,n),e=n.pendingProps;var i=Tt(n,ce.current);Ct(n,t),i=Ca(null,n,r,e,i,t);var l=_a();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Se(r)?(l=!0,Mi(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sa(n),i.updater=ol,n.stateNode=i,i._reactInternals=n,ko(n,r,e,t),n=_o(null,n,r,!0,l,t)):(n.tag=0,W&&l&&fa(n),fe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(xi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Yg(r),e=Le(r,e),i){case 0:n=Co(null,n,r,e,t);break e;case 1:n=cu(null,n,r,e,t);break e;case 11:n=su(null,n,r,e,t);break e;case 14:n=uu(null,n,r,Le(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Co(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),cu(e,n,r,i,t);case 3:e:{if(Nd(n),e===null)throw Error(k(387));r=n.pendingProps,l=n.memoizedState,i=l.element,sd(e,n),Ai(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=$t(Error(k(423)),n),n=du(e,n,r,t,i);break e}else if(r!==i){i=$t(Error(k(424)),n),n=du(e,n,r,t,i);break e}else for(Pe=wn(n.stateNode.containerInfo.firstChild),Ce=n,W=!0,Ae=null,t=od(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Rt(),r===i){n=ln(e,n,t);break e}fe(e,n,r,t)}n=n.child}return n;case 5:return ud(n),e===null&&So(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,go(r,i)?o=null:l!==null&&go(r,l)&&(n.flags|=32),Md(e,n),fe(e,n,o,t),n.child;case 6:return e===null&&So(n),null;case 13:return Od(e,n,t);case 4:return xa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=It(n,null,r,t):fe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),su(e,n,r,i,t);case 7:return fe(e,n,n.pendingProps,t),n.child;case 8:return fe(e,n,n.pendingProps.children,t),n.child;case 12:return fe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,z(Li,r._currentValue),r._currentValue=o,l!==null)if(Ue(l.value,o)){if(l.children===i.children&&!ve.current){n=ln(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=en(-1,t&-t),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),xo(l.return,t,n),a.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(k(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),xo(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}fe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Ct(n,t),i=Me(i),r=r(i),n.flags|=1,fe(e,n,r,t),n.child;case 14:return r=n.type,i=Le(r,n.pendingProps),i=Le(r.type,i),uu(e,n,r,i,t);case 15:return jd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),xi(e,n),n.tag=1,Se(r)?(e=!0,Mi(n)):e=!1,Ct(n,t),Id(n,r,i),ko(n,r,i,t),_o(null,n,r,!0,e,t);case 19:return Ld(e,n,t);case 22:return Dd(e,n,t)}throw Error(k(156,n.tag))};function qd(e,n){return Ec(e,n)}function Xg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,n,t,r){return new Xg(e,n,t,r)}function Na(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yg(e){if(typeof e=="function")return Na(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ea)return 11;if(e===na)return 14}return 2}function _n(e,n){var t=e.alternate;return t===null?(t=$e(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Pi(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Na(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ut:return Hn(t.children,i,l,n);case qo:o=8,i|=8;break;case Vl:return e=$e(12,t,n,i|2),e.elementType=Vl,e.lanes=l,e;case Gl:return e=$e(13,t,n,i),e.elementType=Gl,e.lanes=l,e;case Kl:return e=$e(19,t,n,i),e.elementType=Kl,e.lanes=l,e;case uc:return ul(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ac:o=10;break e;case sc:o=9;break e;case ea:o=11;break e;case na:o=14;break e;case dn:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=$e(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Hn(e,n,t,r){return e=$e(7,e,r,n),e.lanes=t,e}function ul(e,n,t,r){return e=$e(22,e,r,n),e.elementType=uc,e.lanes=t,e.stateNode={isHidden:!1},e}function Bl(e,n,t){return e=$e(6,e,null,n),e.lanes=t,e}function Fl(e,n,t){return n=$e(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Zg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Oa(e,n,t,r,i,l,o,a,s){return e=new Zg(e,n,t,a,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=$e(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sa(l),e}function Jg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:st,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ef(e){if(!e)return Rn;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Se(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Se(t))return ed(e,t,n)}return n}function nf(e,n,t,r,i,l,o,a,s){return e=Oa(t,r,!0,e,i,l,o,a,s),e.context=ef(null),t=e.current,r=pe(),i=Cn(t),l=en(r,i),l.callback=n??null,kn(t,l,i),e.current.lanes=i,Ur(e,i,r),xe(e,r),e}function cl(e,n,t,r){var i=n.current,l=pe(),o=Cn(i);return t=ef(t),n.context===null?n.context=t:n.pendingContext=t,n=en(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=kn(i,n,o),e!==null&&(Fe(e,i,o,l),yi(e,i,o)),o}function Ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function La(e,n){wu(e,n),(e=e.alternate)&&wu(e,n)}function qg(){return null}var tf=typeof reportError=="function"?reportError:function(e){console.error(e)};function za(e){this._internalRoot=e}dl.prototype.render=za.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));cl(e,n,null,null)};dl.prototype.unmount=za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xn(function(){cl(null,e,null,null)}),n[tn]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Dc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<pn.length&&n!==0&&n<pn[t].priority;t++);pn.splice(t,0,e),t===0&&Nc(e)}};function Aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ku(){}function em(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=Ki(o);l.call(u)}}var o=nf(n,r,e,0,null,!1,!1,"",ku);return e._reactRootContainer=o,e[tn]=o.current,Ir(e.nodeType===8?e.parentNode:e),Xn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ki(s);a.call(u)}}var s=Oa(e,0,!1,null,null,!1,!1,"",ku);return e._reactRootContainer=s,e[tn]=s.current,Ir(e.nodeType===8?e.parentNode:e),Xn(function(){cl(n,s,t,r)}),s}function pl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Ki(o);a.call(s)}}cl(n,o,e,i)}else o=em(t,n,e,i,r);return Ki(o)}$c=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ur(n.pendingLanes);t!==0&&(ia(n,t|1),xe(n,Z()),!(M&6)&&(jt=Z()+500,$n()))}break;case 13:Xn(function(){var r=rn(e,1);if(r!==null){var i=pe();Fe(r,e,1,i)}}),La(e,1)}};la=function(e){if(e.tag===13){var n=rn(e,134217728);if(n!==null){var t=pe();Fe(n,e,134217728,t)}La(e,134217728)}};jc=function(e){if(e.tag===13){var n=Cn(e),t=rn(e,n);if(t!==null){var r=pe();Fe(t,e,n,r)}La(e,n)}};Dc=function(){return O};Mc=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};ro=function(e,n,t){switch(n){case"input":if(Yl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=rl(r);if(!i)throw Error(k(90));dc(r),Yl(r,i)}}}break;case"textarea":pc(e,t);break;case"select":n=t.value,n!=null&&xt(e,!!t.multiple,n,!1)}};xc=ja;wc=Xn;var nm={usingClientEntryPoint:!1,Events:[Hr,pt,rl,vc,Sc,ja]},lr={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tm={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cc(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||qg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{qi=ci.inject(tm),Ke=ci}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nm;Te.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Aa(n))throw Error(k(200));return Jg(e,n,null,t)};Te.createRoot=function(e,n){if(!Aa(e))throw Error(k(299));var t=!1,r="",i=tf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Oa(e,1,!1,null,null,t,!1,r,i),e[tn]=n.current,Ir(e.nodeType===8?e.parentNode:e),new za(n)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Cc(n),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Xn(e)};Te.hydrate=function(e,n,t){if(!fl(n))throw Error(k(200));return pl(null,e,n,!0,t)};Te.hydrateRoot=function(e,n,t){if(!Aa(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=tf;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=nf(n,null,e,1,t??null,i,!1,l,o),e[tn]=n.current,Ir(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new dl(n)};Te.render=function(e,n,t){if(!fl(n))throw Error(k(200));return pl(null,e,n,!1,t)};Te.unmountComponentAtNode=function(e){if(!fl(e))throw Error(k(40));return e._reactRootContainer?(Xn(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};Te.unstable_batchedUpdates=ja;Te.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!fl(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return pl(e,n,t,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function rf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rf)}catch(e){console.error(e)}}rf(),rc.exports=Te;var Qi=rc.exports,lf,Pu=Qi;lf=Wl.createRoot=Pu.createRoot,Wl.hydrateRoot=Pu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zr(){return zr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},zr.apply(null,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Cu="popstate";function rm(e){e===void 0&&(e={});function n(i,l){let{pathname:o="/",search:a="",hash:s=""}=nt(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Lo("",{pathname:o,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(i,l){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof l=="string"?l:Xi(l))}function r(i,l){Ba(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return lm(n,t,r,e)}function J(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ba(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function im(){return Math.random().toString(36).substr(2,8)}function _u(e,n){return{usr:e.state,key:e.key,idx:n}}function Lo(e,n,t,r){return t===void 0&&(t=null),zr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?nt(n):n,{state:t,key:n&&n.key||r||im()})}function Xi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function nt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function lm(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,a=yn.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(zr({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function c(){a=yn.Pop;let P=f(),m=P==null?null:P-u;u=P,s&&s({action:a,location:x.location,delta:m})}function p(P,m){a=yn.Push;let d=Lo(x.location,P,m);t&&t(d,P),u=f()+1;let g=_u(d,u),w=x.createHref(d);try{o.pushState(g,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}l&&s&&s({action:a,location:x.location,delta:1})}function v(P,m){a=yn.Replace;let d=Lo(x.location,P,m);t&&t(d,P),u=f();let g=_u(d,u),w=x.createHref(d);o.replaceState(g,"",w),l&&s&&s({action:a,location:x.location,delta:0})}function S(P){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof P=="string"?P:Xi(P);return d=d.replace(/ $/,"%20"),J(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let x={get action(){return a},get location(){return e(i,o)},listen(P){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Cu,c),s=P,()=>{i.removeEventListener(Cu,c),s=null}},createHref(P){return n(i,P)},createURL:S,encodeLocation(P){let m=S(P);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:v,go(P){return o.go(P)}};return x}var Eu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Eu||(Eu={}));function om(e,n,t){return t===void 0&&(t="/"),am(e,n,t)}function am(e,n,t,r){let i=typeof n=="string"?nt(n):n,l=Fa(i.pathname||"/",t);if(l==null)return null;let o=of(e);sm(o);let a=null,s=xm(l);for(let u=0;a==null&&u<o.length;++u)a=ym(o[u],s);return a}function of(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,o,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};s.relativePath.startsWith("/")&&(J(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=En([r,s.relativePath]),f=t.concat(s);l.children&&l.children.length>0&&(J(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),of(l.children,n,f,u)),!(l.path==null&&!l.index)&&n.push({path:u,score:mm(u,l.index),routesMeta:f})};return e.forEach((l,o)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,o);else for(let s of af(l.path))i(l,o,s)}),n}function af(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=af(r.join("/")),a=[];return a.push(...o.map(s=>s===""?l:[l,s].join("/"))),i&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function sm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:hm(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const um=/^:[\w-]+$/,cm=3,dm=2,fm=1,pm=10,gm=-2,Tu=e=>e==="*";function mm(e,n){let t=e.split("/"),r=t.length;return t.some(Tu)&&(r+=gm),n&&(r+=dm),t.filter(i=>!Tu(i)).reduce((i,l)=>i+(um.test(l)?cm:l===""?fm:pm),r)}function hm(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function ym(e,n,t){let{routesMeta:r}=e,i={},l="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,f=l==="/"?n:n.slice(l.length)||"/",c=vm({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),p=s.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:En([l,c.pathname]),pathnameBase:Pm(En([l,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(l=En([l,c.pathnameBase]))}return o}function vm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Sm(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:p,isOptional:v}=f;if(p==="*"){let x=a[c]||"";o=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const S=a[c];return v&&!S?u[p]=void 0:u[p]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function Sm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ba(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function xm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ba(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Fa(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function wm(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?nt(e):e,l;return t?(t=sf(t),t.startsWith("/")?l=Ru(t.substring(1),"/"):l=Ru(t,n)):l=n,{pathname:l,search:Cm(r),hash:_m(i)}}function Ru(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Ul(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function km(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Ua(e,n){let t=km(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Wa(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=nt(e):(i=zr({},e),J(!i.pathname||!i.pathname.includes("?"),Ul("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),Ul("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),Ul("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,a;if(o==null)a=t;else{let c=n.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),c-=1;i.pathname=p.join("/")}a=c>=0?n[c]:"/"}let s=wm(i,a),u=o&&o!=="/"&&o.endsWith("/"),f=(l||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const sf=e=>e.replace(/\/\/+/g,"/"),En=e=>sf(e.join("/")),Pm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_m=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Em(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uf=["post","put","patch","delete"];new Set(uf);const Tm=["get",...uf];new Set(Tm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ar(){return Ar=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ar.apply(null,arguments)}const Ha=y.createContext(null),Rm=y.createContext(null),jn=y.createContext(null),gl=y.createContext(null),sn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),cf=y.createContext(null);function Im(e,n){let{relative:t}=n===void 0?{}:n;Ot()||J(!1);let{basename:r,navigator:i}=y.useContext(jn),{hash:l,pathname:o,search:a}=pf(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:En([r,o])),i.createHref({pathname:s,search:a,hash:l})}function Ot(){return y.useContext(gl)!=null}function Lt(){return Ot()||J(!1),y.useContext(gl).location}function df(e){y.useContext(jn).static||y.useLayoutEffect(e)}function ff(){let{isDataRoute:e}=y.useContext(sn);return e?Wm():bm()}function bm(){Ot()||J(!1);let e=y.useContext(Ha),{basename:n,future:t,navigator:r}=y.useContext(jn),{matches:i}=y.useContext(sn),{pathname:l}=Lt(),o=JSON.stringify(Ua(i,t.v7_relativeSplatPath)),a=y.useRef(!1);return df(()=>{a.current=!0}),y.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Wa(u,JSON.parse(o),l,f.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:En([n,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[n,r,o,l,e])}function $m(){let{matches:e}=y.useContext(sn),n=e[e.length-1];return n?n.params:{}}function pf(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=y.useContext(jn),{matches:i}=y.useContext(sn),{pathname:l}=Lt(),o=JSON.stringify(Ua(i,r.v7_relativeSplatPath));return y.useMemo(()=>Wa(e,JSON.parse(o),l,t==="path"),[e,o,l,t])}function jm(e,n){return Dm(e,n)}function Dm(e,n,t,r){Ot()||J(!1);let{navigator:i}=y.useContext(jn),{matches:l}=y.useContext(sn),o=l[l.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Lt(),f;if(n){var c;let P=typeof n=="string"?nt(n):n;s==="/"||(c=P.pathname)!=null&&c.startsWith(s)||J(!1),f=P}else f=u;let p=f.pathname||"/",v=p;if(s!=="/"){let P=s.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(P.length).join("/")}let S=om(e,{pathname:v}),x=zm(S&&S.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:En([s,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?s:En([s,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,t,r);return n&&x?y.createElement(gl.Provider,{value:{location:Ar({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:yn.Pop}},x):x}function Mm(){let e=Um(),n=Em(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:i},t):null,null)}const Nm=y.createElement(Mm,null);class Om extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(sn.Provider,{value:this.props.routeContext},y.createElement(cf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lm(e){let{routeContext:n,match:t,children:r}=e,i=y.useContext(Ha);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(sn.Provider,{value:n},r)}function zm(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,a=(i=t)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);f>=0||J(!1),o=o.slice(0,Math.min(o.length,f+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let c=o[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:p,errors:v}=t,S=c.route.loader&&p[c.route.id]===void 0&&(!v||v[c.route.id]===void 0);if(c.route.lazy||S){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,c,p)=>{let v,S=!1,x=null,P=null;t&&(v=a&&c.route.id?a[c.route.id]:void 0,x=c.route.errorElement||Nm,s&&(u<0&&p===0?(Hm("route-fallback"),S=!0,P=null):u===p&&(S=!0,P=c.route.hydrateFallbackElement||null)));let m=n.concat(o.slice(0,p+1)),d=()=>{let g;return v?g=x:S?g=P:c.route.Component?g=y.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=f,y.createElement(Lm,{match:c,routeContext:{outlet:f,matches:m,isDataRoute:t!=null},children:g})};return t&&(c.route.ErrorBoundary||c.route.errorElement||p===0)?y.createElement(Om,{location:t.location,revalidation:t.revalidation,component:x,error:v,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var gf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(gf||{}),mf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mf||{});function Am(e){let n=y.useContext(Ha);return n||J(!1),n}function Bm(e){let n=y.useContext(Rm);return n||J(!1),n}function Fm(e){let n=y.useContext(sn);return n||J(!1),n}function hf(e){let n=Fm(),t=n.matches[n.matches.length-1];return t.route.id||J(!1),t.route.id}function Um(){var e;let n=y.useContext(cf),t=Bm(),r=hf();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Wm(){let{router:e}=Am(gf.UseNavigateStable),n=hf(mf.UseNavigateStable),t=y.useRef(!1);return df(()=>{t.current=!0}),y.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ar({fromRouteId:n},l)))},[e,n])}const Iu={};function Hm(e,n,t){Iu[e]||(Iu[e]=!0)}function Vm(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function zo(e){let{to:n,replace:t,state:r,relative:i}=e;Ot()||J(!1);let{future:l,static:o}=y.useContext(jn),{matches:a}=y.useContext(sn),{pathname:s}=Lt(),u=ff(),f=Wa(n,Ua(a,l.v7_relativeSplatPath),s,i==="path"),c=JSON.stringify(f);return y.useEffect(()=>u(JSON.parse(c),{replace:t,state:r,relative:i}),[u,c,i,t,r]),null}function dr(e){J(!1)}function Gm(e){let{basename:n="/",children:t=null,location:r,navigationType:i=yn.Pop,navigator:l,static:o=!1,future:a}=e;Ot()&&J(!1);let s=n.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:s,navigator:l,static:o,future:Ar({v7_relativeSplatPath:!1},a)}),[s,a,l,o]);typeof r=="string"&&(r=nt(r));let{pathname:f="/",search:c="",hash:p="",state:v=null,key:S="default"}=r,x=y.useMemo(()=>{let P=Fa(f,s);return P==null?null:{location:{pathname:P,search:c,hash:p,state:v,key:S},navigationType:i}},[s,f,c,p,v,S,i]);return x==null?null:y.createElement(jn.Provider,{value:u},y.createElement(gl.Provider,{children:t,value:x}))}function Km(e){let{children:n,location:t}=e;return jm(Ao(n),t)}new Promise(()=>{});function Ao(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let l=[...n,i];if(r.type===y.Fragment){t.push.apply(t,Ao(r.props.children,l));return}r.type!==dr&&J(!1),!r.props.index||!r.props.children||J(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ao(r.props.children,l)),t.push(o)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Bo.apply(null,arguments)}function Qm(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Xm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ym(e,n){return e.button===0&&(!n||n==="_self")&&!Xm(e)}const Zm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Jm="6";try{window.__reactRouterVersion=Jm}catch{}const qm="startTransition",bu=Gf[qm];function eh(e){let{basename:n,children:t,future:r,window:i}=e,l=y.useRef();l.current==null&&(l.current=rm({window:i,v5Compat:!0}));let o=l.current,[a,s]=y.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=y.useCallback(c=>{u&&bu?bu(()=>s(c)):s(c)},[s,u]);return y.useLayoutEffect(()=>o.listen(f),[o,f]),y.useEffect(()=>Vm(r),[r]),y.createElement(Gm,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:o,future:r})}const nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",th=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fo=y.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:a,target:s,to:u,preventScrollReset:f,viewTransition:c}=n,p=Qm(n,Zm),{basename:v}=y.useContext(jn),S,x=!1;if(typeof u=="string"&&th.test(u)&&(S=u,nh))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=Fa(w.pathname,v);w.origin===g.origin&&C!=null?u=C+w.search+w.hash:x=!0}catch{}let P=Im(u,{relative:i}),m=rh(u,{replace:o,state:a,target:s,preventScrollReset:f,relative:i,viewTransition:c});function d(g){r&&r(g),g.defaultPrevented||m(g)}return y.createElement("a",Bo({},p,{href:S||P,onClick:x||l?r:d,ref:t,target:s}))});var $u;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})($u||($u={}));var ju;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ju||(ju={}));function rh(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:a}=n===void 0?{}:n,s=ff(),u=Lt(),f=pf(e,{relative:o});return y.useCallback(c=>{if(Ym(c,t)){c.preventDefault();let p=r!==void 0?r:Xi(u)===Xi(f);s(e,{replace:p,state:i,preventScrollReset:l,relative:o,viewTransition:a})}},[u,s,f,r,i,t,e,l,o,a])}const ih="https://github.com/frankvane/vane-components";class lh extends Fr.Component{constructor(){super(...arguments);gs(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?h.jsxs("div",{className:"crash",role:"alert",children:[h.jsx("h3",{children:"这个页面炸了"}),h.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),h.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function yf(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function oh({demos:e,pathname:n}){var s;const{groups:t,entries:r,label:i}=e,l=(s=r.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:s.meta.group,[o,a]=y.useState(()=>{var f;const u=(f=t[0])==null?void 0:f.key;return Object.fromEntries(t.map(c=>[c.key,c.key===(l??u)]))});return y.useEffect(()=>{l&&a(u=>u[l]?u:{...u,[l]:!0})},[l]),h.jsxs("div",{className:"nav-section",children:[h.jsxs("div",{className:"nav-section-head",children:[h.jsx("span",{children:i}),h.jsxs("code",{children:[r.length," demos"]})]}),t.map(u=>{const f=r.filter(p=>p.meta.group===u.key);if(f.length===0)return null;const c=o[u.key]??!1;return h.jsxs("div",{className:"nav-group",children:[h.jsxs("button",{type:"button",className:`nav-group-head${l===u.key?" is-current":""}`,onClick:()=>a(p=>({...p,[u.key]:!c})),"aria-expanded":c,children:[h.jsx("span",{className:`nav-caret${c?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,h.jsx("code",{children:f.length})]}),c?h.jsx("div",{className:"nav-list",children:f.map(p=>h.jsxs(Fo,{to:`/demo/${p.meta.slug}`,className:`nav-sub${n===`/demo/${p.meta.slug}`?" is-active":""}`,children:[h.jsx("em",{"aria-hidden":!0,children:yf(e,p)}),p.meta.title]},p.meta.slug))}):null]},u.key)})]})}function ah({demos:e}){const{slug:n}=$m(),{entries:t,detail:r}=e,i=n?t.find(o=>o.meta.slug===n):void 0;if(!i)return h.jsx(zo,{to:`/demo/${t[0].meta.slug}`,replace:!0});const l=t.indexOf(i)+1;return h.jsx(Fr.Fragment,{children:r(i,l)},i.meta.slug)}function sh({config:e}){var f;const{pathname:n}=Lt(),[t,r]=y.useState(!1),[i,l]=y.useState(!1);y.useEffect(()=>r(!1),[n]);const o=y.useCallback(()=>l(c=>!c),[]);y.useEffect(()=>{const c=p=>{const v=p.target,S=v&&(v.tagName==="INPUT"||v.tagName==="TEXTAREA"||v.isContentEditable);p.key==="Escape"&&r(!1),!S&&(p.key==="g"||p.key==="G")&&!p.metaKey&&!p.ctrlKey&&l(x=>!x)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]);const a=e.demos,s=y.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const c=n.replace(/^\/demo\/?/,""),p=a.entries.find(v=>v.meta.slug===c);return p?`demo ${yf(a,p)} · ${p.meta.title}`:"demo · 逐项示例"},[n,e,a]),u=y.useMemo(()=>e.nav.map((c,p)=>({...c,no:String(p+1).padStart(2,"0")})),[e.nav]);return h.jsxs("div",{className:`shell${t?" is-nav-open":""}${i?" is-guides":""}`,children:[h.jsx("a",{className:"skip-link",href:"#main",onClick:c=>{c.preventDefault();const p=document.getElementById("main");p==null||p.setAttribute("tabindex","-1"),p==null||p.focus(),p==null||p.scrollIntoView({block:"start"})},children:"跳到内容"}),h.jsxs("aside",{className:"side","aria-label":"站点导航",children:[h.jsxs(Fo,{to:"/",className:"brand",children:[h.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),h.jsxs("span",{children:[h.jsx("strong",{children:e.pkg}),h.jsx("em",{children:e.subtitle})]})]}),h.jsxs("nav",{children:[u.map(c=>h.jsxs(Fo,{to:c.to,className:`nav-item${n===c.to?" is-active":""}`,"aria-current":n===c.to?"page":void 0,children:[h.jsx("em",{"aria-hidden":!0,children:c.no}),h.jsx("span",{children:c.label}),c.hint?h.jsx("code",{children:c.hint}):null]},c.to)),h.jsx(oh,{demos:e.demos,pathname:n})]}),h.jsxs("div",{className:"side-foot",children:[h.jsx("p",{children:e.footer[0]}),h.jsx("p",{className:"muted",children:e.footer[1]})]})]}),h.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),h.jsxs("div",{className:"main",id:"main",children:[h.jsxs("header",{className:"topbar",children:[h.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(c=>!c),children:h.jsx("span",{"aria-hidden":!0})}),h.jsx("span",{className:"crumb",children:s}),h.jsxs("div",{className:"topbar-right",children:[(f=e.stats)==null?void 0:f.map(c=>h.jsxs("span",{className:"topbar-stat",title:c.title,children:[h.jsx("b",{children:c.value})," ",c.label]},c.label)),h.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":i,onClick:o,title:"显示栏位参考线（快捷键 G）",children:[h.jsx("i",{"aria-hidden":!0}),"guides"]}),h.jsx("a",{className:"topbar-link",href:e.sourceUrl??ih,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),h.jsx("div",{className:"guides","aria-hidden":!0}),h.jsx(y.Suspense,{fallback:h.jsx("div",{className:"loading",children:"loading modules…"}),children:h.jsx(lh,{children:h.jsxs(Km,{children:[e.routes.map(c=>h.jsx(dr,{path:c.path,element:c.element},c.path)),h.jsx(dr,{path:"/demo",element:h.jsx(zo,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),h.jsx(dr,{path:"/demo/:slug",element:h.jsx(ah,{demos:e.demos})}),h.jsx(dr,{path:"*",element:h.jsx(zo,{to:"/",replace:!0})})]})})})]})]})}function uh({config:e}){return h.jsx(eh,{children:h.jsx(sh,{config:e})})}const ch="modulepreload",dh=function(e,n){return new URL(e,n).href},Du={},Va=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=dh(u,r),u in Du)return;Du[u]=!0;const f=u.endsWith(".css"),c=f?'[rel="stylesheet"]':"";if(!!r)for(let S=o.length-1;S>=0;S--){const x=o[S];if(x.href===u&&(!f||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":ch,f||(v.as="script"),v.crossOrigin="",v.href=u,s&&v.setAttribute("nonce",s),document.head.appendChild(v),f)return new Promise((S,x)=>{v.addEventListener("load",S),v.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&l(a.reason);return n().catch(l)})};function fh(){const e=new Map,n=new Map,t=(o,a)=>{const s=e.get(o);if(s)for(const u of[...s])try{u(a)}catch(f){console.warn(`[PluginBus] handler error for event "${o}"`,f)}},r=(o,a)=>{let s=e.get(o);return s||(s=new Set,e.set(o,s)),s.add(a),()=>{s==null||s.delete(a)}},i=(o,a)=>{const s=u=>{a(u),l(o,s)};return r(o,s)},l=(o,a)=>{var s;if(!a){e.delete(o);return}(s=e.get(o))==null||s.delete(a)};return{emit:t,on:r,once:i,off:l,getData:o=>n.get(o),setData:(o,a)=>{const s=n.get(o);n.set(o,a),s!==a&&t(o,a)},deleteData:o=>{const a=n.has(o);n.delete(o),a&&t(o,void 0)},hasData:o=>n.has(o),getAll:()=>{const o={};return n.forEach((a,s)=>{o[s]=a}),o},clear:()=>{e.clear(),n.clear()}}}function vf(e){const n=new Map(e.map(a=>[a.name,a])),t=[];for(const a of e)for(const s of a.dependencies??[])n.has(s)||t.push(`${a.name} -> ${s}`);const r=[],i=new Set,l=[...e],o=a=>(a.dependencies??[]).every(s=>i.has(s)||!n.has(s));for(;l.length>0;){const a=l.filter(o);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${l.map(u=>u.name).join(" <-> ")}`);let s=a[0];for(const u of a)(u.priority??0)>(s.priority??0)&&(s=u);r.push(s),i.add(s.name),l.splice(l.indexOf(s),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}async function ph(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:i="unknown"}=n;if(!t||t<=0)return await e();let l;const o=new Promise((a,s)=>{l=setTimeout(()=>{s(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${i} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),o])}finally{l&&clearTimeout(l)}}const gh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function mh(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,i=[],l=[],o=new Map,a=()=>vf([...o.values()].filter(u=>u.enabled!==!1)),s=u=>{o.set(u.name,{...u,enabled:u.enabled??!0}),u.init&&Promise.resolve(u.init()).catch(f=>{n.warn(`[PluginManager] init failed for ${u.name}`,f)})};return{register:s,registerAll:u=>{for(const f of u)s(f)},unregister:u=>{const f=o.get(u);f&&(f.destroy&&Promise.resolve(f.destroy()).catch(c=>{n.warn(`[PluginManager] destroy failed for ${f.name}`,c)}),o.delete(u))},getPlugin:u=>o.get(u),getAllPlugins:()=>[...o.values()],getEnabledPlugins:()=>[...o.values()].filter(u=>u.enabled!==!1),getExecutionOrder:a,enable:u=>{const f=o.get(u);f&&(f.enabled=!0)},disable:u=>{const f=o.get(u);f&&(f.enabled=!1)},has:u=>o.has(u),executeHook:async(u,f,...c)=>{var p,v;for(const S of a()){const x=(p=S.hooks)==null?void 0:p[u];if(typeof x!="function")continue;const P=S.sandbox??t,m=S.timeout??r;let d;try{d=P?await ph(()=>x(f,...c),{timeout:m,name:S.name,hook:String(u)}):await x(f,...c)}catch(g){if(i.push({plugin:S.name,hook:String(u),error:g}),n.warn(`[PluginManager] hook ${String(u)} failed in ${S.name}`,g),(v=e.onError)==null||v.call(e,S.name,String(u),g),u==="onError")break;continue}if(gh.has(String(u))&&typeof d=="function"){l.push(d);continue}if(d===!1)return!1;if(d!==void 0&&d!==!0)return d}},clear:()=>{const u=l.splice(0);for(const f of u.reverse())try{f()}catch(c){n.warn("[PluginManager] cleanup failed",c)}for(const f of o.values())f.destroy&&Promise.resolve(f.destroy()).catch(c=>{n.warn(`[PluginManager] destroy failed for ${f.name}`,c)});o.clear()},getErrors:()=>[...i]}}var hh=Object.defineProperty,yh=(e,n,t)=>n in e?hh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,vh=(e,n,t)=>yh(e,n+"",t);class Ga extends Fr.Component{constructor(){super(...arguments),vh(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var r,i;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(i=(r=this.props).onError)==null||i.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let di=null;function Sh(e=!1){if(di&&!e)return di;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,i=typeof navigator<"u"&&navigator.userAgent||"",l=/iPad|Tablet/i.test(i),o=/Mobile|Android|iPhone/i.test(i),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return di={type:l?"tablet":o?"mobile":"desktop",os:i,browser:i,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:a,isRetina:r>=2},di}function Mu(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),r=Object.keys(n);return t.length!==r.length?!1:t.every(i=>Object.is(e[i],n[i]))}function xh(e){const{plugins:n,props:t,data:r,initialState:i,containerRef:l,enableDebug:o=!1,managerOptions:a,extendContext:s}=e,u=y.useRef(null),f=l??u,c=y.useRef(null);c.current||(c.current=mh(a));const p=c.current,v=y.useRef(null);v.current||(v.current=fh());const S=v.current,x=y.useRef(new Map),[P,m]=y.useState(i??{}),[,d]=y.useState(0),g=y.useCallback(()=>d(I=>I+1),[]),w=y.useMemo(()=>Sh(),[]),C=y.useRef(n),R=C.current;(R.length!==n.length||n.some((I,b)=>I!==R[b]))&&(C.current=n);const T=C.current,$=T.map(I=>I.name).join("|");y.useLayoutEffect(()=>{p.clear(),p.registerAll(T),o&&console.debug("[vane/plugin-core] plugins registered:",$)},[T]),y.useLayoutEffect(()=>()=>{p.executeHook("onUnmount",j.current),p.clear()},[p]);const L=y.useMemo(()=>vf(T),[T]),j=y.useRef(null),de=y.useRef(t);Mu(de.current,t)||(de.current=t);const un=de.current,Xe=y.useRef(r);Mu(Xe.current,r)||(Xe.current=r);const Qt=Xe.current,Xt=y.useMemo(()=>{const I={props:un,data:Qt,bus:S,refs:{container:f,getContainer:()=>f.current},state:P,setState:b=>m(N=>({...N,...b})),shared:x.current,deviceInfo:w,forceUpdate:g,getSize:()=>{const b=f.current;return b?{width:b.offsetWidth,height:b.offsetHeight}:{width:0,height:0}},logger:console};return s?s(I):I},[un,Qt,P,w,S,s]);j.current=Xt;const Yt=y.useCallback(I=>{var N,U;let b=I;for(const We of L){const we=(N=We.hooks)==null?void 0:N.transformProps;if(typeof we=="function")try{b=we(b)}catch(On){(((U=j.current)==null?void 0:U.logger)??console).warn(`[plugin-core] ${We.name}.transformProps 执行失败，已跳过`,On)}}return b},[L]),Zt=y.useCallback(I=>{var N,U;let b=I;for(const We of L){const we=(N=We.hooks)==null?void 0:N.transformData;if(typeof we=="function")try{b=we(j.current,b)}catch(On){(((U=j.current)==null?void 0:U.logger)??console).warn(`[plugin-core] ${We.name}.transformData 执行失败，已跳过`,On)}}return b},[L]),_=y.useCallback((I,...b)=>p.executeHook(I,j.current,...b),[p]);return{manager:p,bus:S,context:Xt,state:P,setState:Xt.setState,execute:_,transformProps:Yt,transformData:Zt,orderedPlugins:L}}y.createContext(null);function wh(e,n,t){const{hook:r,position:i="after"}=t;return e.filter(l=>l.enabled!==!1).filter(l=>{var o;return typeof((o=l.hooks)==null?void 0:o[r])=="function"}).filter(l=>{var a;const o=(a=l.config)==null?void 0:a.slotPosition;return i==="before"?o==="before":i==="footer"?o===void 0||o==="after"||o==="footer":o===void 0||o==="after"}).sort((l,o)=>{var a,s;return(((a=l.config)==null?void 0:a.order)??0)-(((s=o.config)==null?void 0:s.order)??0)||(o.priority??0)-(l.priority??0)}).map(l=>{try{const o=l.hooks[r](n);return o==null?null:h.jsx(Ga,{children:o},`vane-slot-${l.name}`)}catch(o){return console.warn(`[vane/plugin-core] 插件 ${l.name} 的 ${r} 渲染失败`,o),null}})}const Nu=["renderHeader","renderCalendar","renderRewards","renderActions","renderFooter"],Ou=[];function kh(e,n){var t,r;return(((t=e.config)==null?void 0:t.order)??0)-(((r=n.config)==null?void 0:r.order)??0)||(n.priority??0)-(e.priority??0)}function Ph(e){var t;const n={renderHeader:[],renderCalendar:[],renderRewards:[],renderActions:[],renderFooter:[]};for(const r of e)if(r.enabled!==!1)for(const i of Nu)typeof((t=r.hooks)==null?void 0:t[i])=="function"&&n[i].push(r);for(const r of Nu)n[r].sort(kh);return n}const Sf=y.createContext(null);function Ch({orderedPlugins:e,context:n,children:t}){const r=y.useMemo(()=>Ph(e),[e]),i=y.useMemo(()=>({groups:r,context:n}),[r,n]);return h.jsx(Sf.Provider,{value:i,children:t})}function _h(e,n,t){return e.map(r=>{try{const i=r.hooks[t](n);return i==null?null:h.jsx(Ga,{children:i},`signin-slot-${r.name}`)}catch(i){return console.warn(`[vane-sign-in] 插件 ${r.name} 的 ${t} 渲染失败`,i),null}})}function or(e){const n=y.useContext(Sf),t=n==null?void 0:n.groups[e],r=n==null?void 0:n.context;return y.useMemo(()=>{if(!t||!r)return Ou;const i=_h(t,r,e);return i.length?i:Ou},[t,r,e])}const xf=y.createContext(null);function Eh({children:e,onResume:n,intervalMs:t=1e3}){const[r,i]=y.useState(()=>Date.now());return y.useEffect(()=>{const l=setInterval(()=>i(Date.now()),t);return()=>clearInterval(l)},[t]),y.useEffect(()=>{if(typeof document>"u"||typeof window>"u")return;const l=()=>{document.visibilityState!=="hidden"&&(i(Date.now()),n==null||n())};return document.addEventListener("visibilitychange",l),window.addEventListener("focus",l),()=>{document.removeEventListener("visibilitychange",l),window.removeEventListener("focus",l)}},[n]),h.jsx(xf.Provider,{value:r,children:e})}function Ka(){return y.useContext(xf)??Date.now()}const F=y.forwardRef(function(n,t){var d;const{children:r,containerClassName:i,containerStyle:l,containerRefExternal:o}=n,a=y.useRef(null),s=o||a,[,u]=y.useState(0),f=y.useCallback(()=>u(g=>g+1),[]),c=(d=n.callbacks)==null?void 0:d.refresh,p=y.useCallback(()=>{if(c)try{const g=c();g&&typeof g.then=="function"&&g.catch(w=>{console.warn("[vane-sign-in] callbacks.refresh 执行失败",w)})}catch(g){console.warn("[vane-sign-in] callbacks.refresh 执行失败",g)}},[c]),v=or("renderHeader"),S=or("renderCalendar"),x=or("renderRewards"),P=or("renderActions"),m=or("renderFooter");return y.useImperativeHandle(t,()=>({getContainer:()=>s.current,forceUpdate:f,getSize:()=>{const g=s.current;return g?{width:g.offsetWidth,height:g.offsetHeight}:{width:0,height:0}}}),[f]),h.jsx(Eh,{onResume:p,children:h.jsxs("div",{ref:s,"data-testid":"si-root",className:`vs-signin ${i||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",borderRadius:12,border:"1px solid #e3e5e8",boxShadow:"0 1px 3px rgba(16, 22, 26, 0.06)",overflow:"hidden",display:"flex",flexDirection:"column",width:"100%",maxWidth:460,...l},children:[v.length>0&&h.jsx("div",{className:"vs-header",style:{display:"flex",flexDirection:"column",gap:12,padding:"14px 16px 8px"},children:v}),S.length>0&&h.jsx("div",{className:"vs-calendar",style:{display:"flex",flexDirection:"column",gap:12,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:S}),x.length>0&&h.jsx("div",{className:"vs-rewards",style:{display:"flex",flexDirection:"column",gap:10,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:x}),P.length>0&&h.jsx("div",{className:"vs-actions",style:{display:"flex",flexWrap:"wrap",gap:8,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:P}),m.length>0&&h.jsx("div",{className:"vs-footer",style:{display:"flex",flexDirection:"column",gap:12,padding:"8px 16px 16px",borderTop:"1px solid #f0f2f4"},children:m}),r]})})});F.displayName="SignInCore";const wf=/^(\d{4})-(\d{2})-(\d{2})$/,Lu=new Map;function at(e,n=2){return String(e).padStart(n,"0")}function Th(e){const n=Lu.get(e);if(n)return n;const t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"});return Lu.set(e,t),t}function Uo(e){const n=wf.exec(e);if(!n)throw new RangeError(`[vane-sign-in] 非法日期键：${String(e)}`);const t=Number(n[1]),r=Number(n[2]),i=Number(n[3]),l=new Date(0);if(l.setUTCFullYear(t,r-1,i),l.setUTCHours(0,0,0,0),l.getUTCFullYear()!==t||l.getUTCMonth()!==r-1||l.getUTCDate()!==i)throw new RangeError(`[vane-sign-in] 非法日期键：${String(e)}`);return l.getTime()}function Rh(e){if(e instanceof Date)return e;const n=new Date(e);if(Number.isNaN(n.getTime()))throw new RangeError(`[vane-sign-in] 非法时间值：${String(e)}`);return n}function Qa(e){if(typeof e!="string"||!wf.test(e))return!1;try{return Uo(e),!0}catch{return!1}}function Xa(e=Date.now(),n){if(typeof e=="string"&&Qa(e))return e;const t=Rh(e);if(n){const r=Th(n).formatToParts(t);let i="",l="",o="";for(const a of r)a.type==="year"?i=a.value:a.type==="month"?l=a.value:a.type==="day"&&(o=a.value);return`${at(Number(i),4)}-${at(Number(l))}-${at(Number(o))}`}return`${at(t.getFullYear(),4)}-${at(t.getMonth()+1)}-${at(t.getDate())}`}function Ih(e,n){return Xa(e,n)}function zu(e,n){return Uo(e),Uo(n),e===n?0:e<n?-1:1}const bh=["signed","today","missed","future","reward"],$h=["points","coupon","gift","badge"];function Yn(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function je(e,n=0){return typeof e=="number"&&Number.isFinite(e)&&e>=0?Math.trunc(e):n}function Zn(e,n=""){return typeof e=="string"?e:n}function jh(e){return typeof e=="string"&&bh.includes(e)}function Dh(e){if(typeof e!="string"||!e)return!1;try{return new Intl.DateTimeFormat("en-CA",{timeZone:e}),!0}catch{return!1}}function Wo(e){const n=e.kind;return{day:je(e.day),kind:typeof n=="string"&&$h.includes(n)?n:"points",value:typeof e.value=="number"&&Number.isFinite(e.value)?e.value:void 0,label:Zn(e.label),claimed:e.claimed===!0}}function Mh(e){const n=Yn(e)?e:{};return{date:Zn(n.date),day:je(n.day),status:jh(n.status)?n.status:"future",reward:Yn(n.reward)?Wo(n.reward):void 0,canMakeup:n.canMakeup===!0}}function Nh(e){if(!Yn(e))return;const n=typeof e.progress=="number"&&Number.isFinite(e.progress)?Math.min(1,Math.max(0,e.progress)):0;return{name:Zn(e.name),current:je(e.current),next:je(e.next),progress:n}}function Oh(e){return Array.isArray(e)?e.map((n,t)=>{const r=Yn(n)?n:{};return{id:Zn(r.id,`record-${t}`),day:je(r.day),label:Zn(r.label),at:typeof r.at=="number"&&Number.isFinite(r.at)?r.at:0}}):[]}function Lh(e){const n=Yn(e)?e:{};return{available:je(n.available),used:je(n.used),max:je(n.max)}}function zh(e){if(!Yn(e))return;const n=Zn(e.message);if(!n)return;const t=Zn(e.code);return t?{code:t,message:n}:{message:n}}function Ah(e){const n=e??{};return{todaySigned:n.todaySigned===!0,streak:je(n.streak),maxStreak:je(n.maxStreak),totalDays:je(n.totalDays),points:je(n.points),calendar:Array.isArray(n.calendar)?n.calendar.map(Mh):[],rewards:Array.isArray(n.rewards)?n.rewards.map(t=>Yn(t)?Wo(t):Wo({})):[],makeup:Lh(n.makeup),nextResetAt:typeof n.nextResetAt=="number"&&Number.isFinite(n.nextResetAt)?n.nextResetAt:void 0,businessTimeZone:Dh(n.businessTimeZone)?n.businessTimeZone:void 0,todayKey:Qa(n.todayKey)?n.todayKey:void 0,lastError:zh(n.lastError),remindEnabled:typeof n.remindEnabled=="boolean"?n.remindEnabled:void 0,level:Nh(n.level),rules:Array.isArray(n.rules)?n.rules.filter(t=>typeof t=="string"):void 0,history:Oh(n.history)}}const Bh={};function H(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:i=!1}=t,l=y.forwardRef((o,a)=>{const s=y.useRef(null),u=o.callbacks??Bh,f=y.useCallback(g=>({...g,data:o.data,callbacks:u}),[o.data,u]),c=xh({plugins:r,props:o,data:o.data,containerRef:s,extendContext:f,enableDebug:i}),p=y.useCallback((g,...w)=>c.execute(g,...w),[c.manager]),{transformData:v}=c,S=y.useMemo(()=>Ah(v(o.data)),[o.data,v]),x=y.useMemo(()=>({...c.context,data:S,callbacks:u}),[S,u,c.bus,c.state]),P=c.transformProps(o);y.useEffect(()=>{p("onMount")},[p]);const m=y.useRef(o);y.useEffect(()=>{const g=m.current;g!==o&&(m.current=o,p("onPropsChange",g,o))},[o,p]);const d={...P,data:S,containerRefExternal:s,debug:P.debug??i,onMount:()=>{var g;(g=P.onMount)==null||g.call(P)},onUnmount:()=>{var g;(g=P.onUnmount)==null||g.call(P)},children:h.jsx(Ga,{children:h.jsxs(h.Fragment,{children:[P.children,wh(c.orderedPlugins,x,{hook:"renderOverlay"})]})})};return h.jsx(Ch,{orderedPlugins:c.orderedPlugins,context:x,children:h.jsx(e,{ref:a,...d})})});return l.displayName="WithPlugins(SignInCore)",l}const Ee="#cf4407",Fh="#fff1e6",kf="#b8860b",Uh="#0f8a4a",Wh="#1f2328",on="#6b6b6b",Jn="#8a8a8a",Ya="#f2f3f5",Hh="#8a8a8a",Vh="#e3e5e8",Yi={signed:{bg:"#fff1e6",fg:"#d35400",border:"#cf4407"},today:{bg:"#cf4407",fg:"#ffffff",border:"#cf4407"},missed:{bg:"#f2f3f5",fg:"#7d7d7d",border:"#e3e5e8"},future:{bg:"#fafafa",fg:"#8a8a8a",border:"#ececec"},reward:{bg:"#fff8e1",fg:"#b8860b",border:"#e0a800"}},Pf={signed:"✓",today:"今",missed:"·",future:"",reward:"★"},Cf={signed:"已签到",today:"今天",missed:"漏签",future:"未开始",reward:"奖励日"},Gh="StreakStatePlugin",Kh="连签状态：展示当前连签天数与历史最高连签，头部区渲染。",Qh="0.1.0",Xh=["streak","header","status"],Yh=[{name:"showMax",type:"boolean",default:"true",description:"是否展示历史最高连签天数"}],Zh="withSignInPlugins(SignInCore, [createStreakStatePlugin()])",Jh=[{name:"默认",description:"头部展示连签天数与最高连签",src:"createStreakStatePlugin()",config:{}}],Za={name:Gh,description:Kh,since:Qh,tags:Xh,config:Yh,example:Zh,examples:Jh};function Dn(e={}){const{showMax:n=!0}=e;return{name:"StreakState",version:"0.1.0",description:Za.description,priority:10,enabled:!0,hooks:{renderHeader:t=>{const{streak:r,maxStreak:i}=t.data;return h.jsxs("div",{"data-testid":"si-streak",style:{display:"flex",alignItems:"baseline",gap:8},children:[h.jsx("span",{style:{fontSize:34,fontWeight:800,color:Ee,lineHeight:1,letterSpacing:"-0.5px"},children:r}),h.jsx("span",{style:{fontSize:13,color:on,fontWeight:600},children:"天连签"}),n&&h.jsxs("span",{style:{marginLeft:"auto",fontSize:12,color:on,background:"#faf7f4",border:`1px solid ${Vh}`,borderRadius:999,padding:"3px 10px",whiteSpace:"nowrap"},children:["最高 ",i," 天"]})]})}}}}Dn.meta=Za;const qh="CalendarStripPlugin",ey="日历条：横向滚动的逐日格，展示已签/今日/漏签/未来/奖励五态，带奖励格金点提示。",ny="0.1.0",ty=["calendar","strip","status"],ry=[{name:"showRewardDot",type:"boolean",default:"true",description:"是否在带奖励的格右上角显示金点"}],iy="withSignInPlugins(SignInCore, [createCalendarStripPlugin()])",ly=[{name:"默认",description:"日历条展示当月逐日签到状态",src:"createCalendarStripPlugin()",config:{}}],Ja={name:qh,description:ey,since:ny,tags:ty,config:ry,example:iy,examples:ly};function tt(e={}){const{showRewardDot:n=!0}=e;return{name:"CalendarStrip",version:"0.1.0",description:Ja.description,priority:20,enabled:!0,hooks:{renderCalendar:t=>{const r=t.data.calendar??[];return h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:r.map(i=>{const l=Yi[i.status]??Yi.future,o=!!(i.reward&&!i.reward.claimed),a=Cf[i.status]??i.status;return h.jsxs("div",{role:"img","aria-label":`${i.date} ${a}`,title:`${i.date} ${a}`,style:{flex:"0 0 auto",width:42,height:54,borderRadius:8,background:l.bg,color:l.fg,border:`1px solid ${l.border}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"},children:[h.jsxs("span",{style:{fontSize:11,color:l.fg},children:["第",i.day,"天"]}),h.jsx("span",{style:{fontSize:16,fontWeight:700,lineHeight:1.1},children:Pf[i.status]||i.day}),n&&o&&h.jsx("span",{style:{position:"absolute",top:4,right:4,width:6,height:6,borderRadius:"50%",background:kf}})]},i.date)})})}}}}tt.meta=Ja;const oy="RewardPreviewPlugin",ay="奖励预告：从当前连签天数起，逐日展示后续可领奖励（积分 / 券 / 礼包 / 徽章）。",sy="0.1.0",uy=["reward","preview","rewards"],cy=[{name:"limit",type:"number",default:"5",description:"最多展示的奖励预告条数"}],dy="withSignInPlugins(SignInCore, [createRewardPreviewPlugin()])",fy=[{name:"默认",description:"奖励区逐日预告后续奖励",src:"createRewardPreviewPlugin()",config:{}}],qa={name:oy,description:ay,since:sy,tags:uy,config:cy,example:dy,examples:fy};function Mn(e={}){const{limit:n=5}=e;return{name:"RewardPreview",version:"0.1.0",description:qa.description,priority:30,enabled:!0,hooks:{renderRewards:t=>{const r=[...t.data.rewards??[]].filter(i=>i.day>=t.data.streak).sort((i,l)=>i.day-l.day);return r.length?h.jsx("div",{style:{background:"#fafbfc",border:"1px solid #eef0f2",borderRadius:10,padding:"10px 12px",display:"flex",flexDirection:"column",gap:8},children:r.slice(0,n).map(i=>h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[h.jsx("span",{style:{width:32,height:32,borderRadius:8,flex:"0 0 auto",background:"#fff8e1",color:"#9a6a00",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:i.day}),h.jsx("span",{style:{color:"#1f2328"},children:i.label}),i.claimed&&h.jsx("span",{style:{marginLeft:"auto",color:"#0f8a4a",fontSize:12},children:"已领 ✓"})]},i.day))}):null}}}}Mn.meta=qa;const py="MakeupSlotPlugin",gy="补签位：找到可补签的漏签格并提供补签入口，补签次数用尽后置灰禁用。",my="0.1.0",hy=["makeup","actions","recovery"],yy=[{name:"buttonText",type:"string",default:"undefined",description:"自定义按钮文案（仅有可补目标且还有配额时生效）"},{name:"exhaustedText",type:"string",default:"补签次数已用完",description:"补签配额耗尽时的文案"},{name:"noTargetText",type:"string",default:"暂无可补签",description:"配额还在但没有可补目标（漏签格都在窗口外）时的文案"},{name:"errorText",type:"string",default:"补签失败，请重试",description:"回调失败时的兜底文案"}],vy="withSignInPlugins(SignInCore, [createMakeupSlotPlugin()])",Sy=[{name:"默认",description:"操作区补签入口，禁用态置灰",src:"createMakeupSlotPlugin()",config:{}}],es={name:py,description:gy,since:my,tags:hy,config:yy,example:vy,examples:Sy};function zt(e,...n){if(!e)return Promise.resolve();try{const t=e(...n);return t&&typeof t.then=="function"?Promise.resolve(t):Promise.resolve()}catch(t){return Promise.reject(t)}}function ml(e,n){if(typeof e=="string"&&e.trim())return e;if(e&&typeof e=="object"){const t=e.message;if(typeof t=="string"&&t.trim())return t}return n}function xy(e,n,t,r,i){const{makeup:l,calendar:o,todayKey:a,businessTimeZone:s}=e.data,u=a??Xa(n,s),f=(o??[]).filter(x=>x.canMakeup===!0&&Qa(x.date)&&zu(x.date,u)<=0).sort((x,P)=>zu(x.date,P.date))[0],c=l.available-l.used,p=c<=0,v=p||!f,S=p?r:f?t??`补签 · 剩${c}次`:i;return{cell:f,remaining:c,disabled:v,exhausted:p,label:S}}function wy({ctx:e,target:n,errorText:t}){var f;const r=y.useRef(!1),[i,l]=y.useState(!1),[o,a]=y.useState(null),s=async()=>{const c=n.cell;if(!(!c||n.disabled||r.current)){r.current=!0,l(!0),a(null);try{await zt(e.callbacks.makeup,c.date,{day:c.day})}catch(p){a(ml(p,t))}finally{r.current=!1,l(!1)}}},u=n.disabled||i;return h.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[h.jsx("button",{type:"button","data-testid":"si-makeup-btn","data-disabled":String(u),"data-target":(f=n.cell)==null?void 0:f.date,"data-pending":String(i),"aria-busy":i||void 0,disabled:u,onClick:()=>{s()},style:{border:u?"1px solid #d8d8d8":`1px solid ${Ee}`,background:u?Ya:"#fff",color:u?Hh:Ee,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:u?"not-allowed":"pointer"},children:i?"补签中…":n.label}),o&&h.jsx("div",{role:"alert","data-testid":"si-makeup-error",style:{fontSize:12,color:"#d4380d"},children:o})]})}function rt(e={}){const{buttonText:n,exhaustedText:t="补签次数已用完",noTargetText:r="暂无可补签",errorText:i="补签失败，请重试"}=e;return{name:"MakeupSlot",version:"0.1.0",description:es.description,priority:42,enabled:!0,hooks:{renderActions:l=>h.jsx(ky,{ctx:l,buttonText:n,exhaustedText:t,noTargetText:r,errorText:i})}}}function ky({ctx:e,buttonText:n,exhaustedText:t,noTargetText:r,errorText:i}){const l=Ka(),o=y.useMemo(()=>xy(e,l,n,t,r),[e,l,n,t,r]);return h.jsx(wy,{ctx:e,target:o,errorText:i})}rt.meta=es;const Py="TodayCheckInPlugin",Cy="今日签到：主 CTA，已签置灰、未签高亮，点击经回调下发签到动作。",_y="0.1.0",Ey=["checkin","actions","cta"],Ty=[{name:"signedText",type:"string",default:"今日已签 ✓",description:"已签到时的按钮文案"},{name:"unsignedText",type:"string",default:"立即签到",description:"未签到时的按钮文案"},{name:"pendingText",type:"string",default:"签到中…",description:"请求在途（尚未返回）时的按钮文案；期间按钮禁用，防重复签到"},{name:"errorText",type:"string",default:"签到失败，请重试",description:"回调失败时的兜底文案（错误对象自带 message 时优先显示 message）"}],Ry="withSignInPlugins(SignInCore, [createTodayCheckInPlugin()])",Iy=[{name:"默认",description:"操作区主签到按钮",src:"createTodayCheckInPlugin()",config:{}}],ns={name:Py,description:Cy,since:_y,tags:Ey,config:Ty,example:Ry,examples:Iy};function by({ctx:e,signedText:n,unsignedText:t,pendingText:r,errorText:i}){const l=Ka(),{todaySigned:o,nextResetAt:a,todayKey:s,businessTimeZone:u,lastError:f}=e.data,c=y.useRef(!1),[p,v]=y.useState(!1),[S,x]=y.useState(null),P=y.useMemo(()=>o?a!==void 0&&l>=a?!0:s?Xa(l,u)!==s:!1:!1,[o,a,s,u,l]),m=o&&!P,d=S??(f==null?void 0:f.message)??null,g=async()=>{if(!(m||c.current)){c.current=!0,v(!0),x(null);try{await zt(e.callbacks.sign)}catch(w){x(ml(w,i))}finally{c.current=!1,v(!1)}}};return h.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[h.jsx("button",{type:"button","data-testid":"si-checkin-btn","data-signed":String(m),"data-pending":String(p),"aria-busy":p||void 0,disabled:m||p,onClick:()=>{g()},style:{border:"none",background:m?"#f2f3f5":"#cf4407",color:m?"#8a8a8a":"#ffffff",borderRadius:20,padding:"8px 20px",fontSize:14,fontWeight:700,cursor:m||p?"not-allowed":"pointer"},children:p?r:m?n:t}),d&&h.jsx("div",{role:"alert","data-testid":"si-checkin-error",style:{fontSize:12,color:"#d4380d"},children:d})]})}function Nn(e={}){const{signedText:n="今日已签 ✓",unsignedText:t="立即签到",pendingText:r="签到中…",errorText:i="签到失败，请重试"}=e;return{name:"TodayCheckIn",version:"0.1.0",description:ns.description,priority:40,enabled:!0,hooks:{renderActions:l=>h.jsx(by,{ctx:l,signedText:n,unsignedText:t,pendingText:r,errorText:i})}}}Nn.meta=ns;const $y={slug:"basic",title:"最小可用",group:"basic",intro:"内核 + 五个核心插件跑通装配链路；加插件就是往 withPlugins 数组里加一项。"};function jy(e){const n=Array.from({length:14},(t,r)=>{const i=r+1,l=i<8?"signed":i===8&&!e?"today":i===9?"missed":"future";return{date:`2026-10-${String(i).padStart(2,"0")}`,day:i,status:l,canMakeup:i===9}});return{todaySigned:e,streak:e?8:7,maxStreak:12,totalDays:132,points:3680,calendar:n,rewards:[{day:1,kind:"points",value:10,label:"10 积分",claimed:!0},{day:3,kind:"coupon",value:5,label:"5 元券",claimed:!0},{day:7,kind:"gift",label:"7 天礼包",claimed:!0},{day:8,kind:"points",value:50,label:"50 积分"},{day:10,kind:"badge",label:"闪耀徽章"}],makeup:{available:3,used:1,max:3}}}const Dy=H(F,[Dn(),tt(),Mn(),rt(),Nn()]);function My(){const[e,n]=y.useState(!1),t=jy(e),r={sign:()=>n(!0),makeup:()=>alert("触发补签"),claim:i=>alert(`领取第 ${i} 天奖励`)};return h.jsx(Dy,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Ny=Object.freeze(Object.defineProperty({__proto__:null,default:My,meta:$y},Symbol.toStringTag,{value:"Module"}));function Q(e=!1){const n=Array.from({length:14},(i,l)=>{const o=l+1,a=o<8?"signed":o===8&&!e?"today":o===9?"missed":"future";return{date:`2026-10-${String(o).padStart(2,"0")}`,day:o,status:a,canMakeup:o===9}}),t=Date.now()+36e5,r=[{id:"c1",day:7,label:"7 天礼包",at:Date.now()-864e5},{id:"c2",day:3,label:"5 元券",at:Date.now()-3*864e5},{id:"c3",day:1,label:"10 积分",at:Date.now()-7*864e5}];return{todaySigned:e,streak:e?8:7,maxStreak:12,totalDays:132,points:3680,calendar:n,rewards:[{day:1,kind:"points",value:10,label:"10 积分",claimed:!0},{day:3,kind:"coupon",value:5,label:"5 元券",claimed:!0},{day:7,kind:"gift",label:"7 天礼包",claimed:!0},{day:8,kind:"points",value:50,label:"50 积分"},{day:10,kind:"badge",label:"闪耀徽章"}],makeup:{available:3,used:1,max:3},nextResetAt:t,level:{name:"黄金会员",current:680,next:1e3,progress:.68},rules:["每日 0 点刷新签到资格，连续签到奖励递增","断签后连签天数清零，但累计天数保留","补签卡可在断签 7 日内补回当日奖励","积分可 1:100 兑换现金券，详见会员中心"],history:r}}function Y(e={}){return{sign:()=>{},claim:()=>{},makeup:()=>{},share:()=>{},remind:()=>{},invite:()=>{},...e}}const Oy={slug:"streak-state",title:"连签状态 StreakState",group:"plugin",intro:"头部连签天数 + 最高连签；断签清零、累计保留的领域逻辑由内核数据驱动。"},Ly=H(F,[Dn()]);function zy(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(Ly,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Ay=Object.freeze(Object.defineProperty({__proto__:null,default:zy,meta:Oy},Symbol.toStringTag,{value:"Module"})),By={slug:"calendar-strip",title:"日历条 CalendarStrip",group:"plugin",intro:"横向日期条；已签/今日/漏签/补签/未来五态由 DayStatus 着色，各平台运营位通用。"},Fy=H(F,[tt()]);function Uy(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(Fy,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Wy=Object.freeze(Object.defineProperty({__proto__:null,default:Uy,meta:By},Symbol.toStringTag,{value:"Module"})),Hy={slug:"reward-preview",title:"奖励预告 RewardPreview",group:"plugin",intro:"逐日奖励预览：已领取置灰打勾，未到天数半透明，临近大额奖励高亮。"},Vy=H(F,[Mn()]);function Gy(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(Vy,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Ky=Object.freeze(Object.defineProperty({__proto__:null,default:Gy,meta:Hy},Symbol.toStringTag,{value:"Module"})),Qy={slug:"makeup-slot",title:"补签位 MakeupSlot",group:"plugin",intro:"断签缺口处的高亮补签入口：剩余补签卡数 + 一键补回当日奖励，走 callbacks.makeup。"},Xy=H(F,[rt()]);function Yy(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(Xy,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Zy=Object.freeze(Object.defineProperty({__proto__:null,default:Yy,meta:Qy},Symbol.toStringTag,{value:"Module"})),Jy={slug:"today-check-in",title:"今日签到 TodayCheckIn",group:"plugin",intro:"操作区主按钮：未签时高亮的「立即签到」，已签后变为连签天数 + 明日预告。"},qy=H(F,[Nn()]);function ev(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(qy,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const nv=Object.freeze(Object.defineProperty({__proto__:null,default:ev,meta:Jy},Symbol.toStringTag,{value:"Module"})),tv="PointsBalancePlugin",rv="累计积分：展示当前累计积分总额，头部区渲染。",iv="0.1.0",lv=["points","header","balance"],ov=[],av="withSignInPlugins(SignInCore, [createPointsBalancePlugin()])",sv=[{name:"默认",description:"头部展示累计积分",src:"createPointsBalancePlugin()",config:{}}],ts={name:tv,description:rv,since:iv,tags:lv,config:ov,example:av,examples:sv};function At(e={}){return{name:"PointsBalance",version:"0.1.0",description:ts.description,priority:11,enabled:!0,hooks:{renderHeader:n=>{const{points:t}=n.data;return h.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[h.jsx("span",{style:{fontSize:13,color:on},children:"积分"}),h.jsx("span",{style:{fontSize:20,fontWeight:800,color:Ee,lineHeight:1},children:t})]})}}}}At.meta=ts;const uv={slug:"points-balance",title:"积分余额 PointsBalance",group:"plugin",intro:"头部积分余额：大字号展示当前积分 + 累计天数，承接积分商城的入口视觉。"},cv=H(F,[At()]);function dv(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(cv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const fv=Object.freeze(Object.defineProperty({__proto__:null,default:dv,meta:uv},Symbol.toStringTag,{value:"Module"})),pv="StatRowPlugin",gv="数据行：一行展示累计天数与累计积分，头部区渲染。",mv="0.1.0",hv=["stat","header","summary"],yv=[],vv="withSignInPlugins(SignInCore, [createStatRowPlugin()])",Sv=[{name:"默认",description:"头部展示累计天数与积分",src:"createStatRowPlugin()",config:{}}],rs={name:pv,description:gv,since:mv,tags:hv,config:yv,example:vv,examples:Sv};function Bt(e={}){return{name:"StatRow",version:"0.1.0",description:rs.description,priority:12,enabled:!0,hooks:{renderHeader:n=>{const{totalDays:t,points:r}=n.data;return h.jsxs("div",{style:{display:"flex",gap:18,fontSize:12,color:on},children:[h.jsxs("span",{children:["累计 ",h.jsx("b",{style:{color:Wh,fontSize:14},children:t})," 天"]}),h.jsxs("span",{children:["累计 ",h.jsx("b",{style:{color:Ee,fontSize:14},children:r})," 分"]})]})}}}}Bt.meta=rs;const xv={slug:"stat-row",title:"统计行 StatRow",group:"plugin",intro:"头部三项指标横排：当前连签、累计天数、历史最高连签，一屏尽览进度。"},wv=H(F,[Bt()]);function kv(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(wv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Pv=Object.freeze(Object.defineProperty({__proto__:null,default:kv,meta:xv},Symbol.toStringTag,{value:"Module"})),Cv="LevelBadgePlugin",_v="会员等级徽标：展示等级名与进度条，头部区渲染；无等级数据时静默跳过。",Ev="0.1.0",Tv=["level","header","badge"],Rv=[],Iv="withSignInPlugins(SignInCore, [createLevelBadgePlugin()])",bv=[{name:"默认",description:"头部展示会员等级与进度",src:"createLevelBadgePlugin()",config:{}}],is={name:Cv,description:_v,since:Ev,tags:Tv,config:Rv,example:Iv,examples:bv};function it(e={}){return{name:"LevelBadge",version:"0.1.0",description:is.description,priority:13,enabled:!0,hooks:{renderHeader:n=>{const t=n.data.level;if(!t)return null;const r=Math.round(Math.min(1,Math.max(0,t.progress))*100);return h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[h.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#ffffff",background:Ee,borderRadius:10,padding:"2px 8px",whiteSpace:"nowrap"},children:t.name}),h.jsx("div",{style:{flex:1,height:6,borderRadius:3,background:Ya,overflow:"hidden"},children:h.jsx("div",{style:{width:`${r}%`,height:"100%",background:Ee}})}),h.jsxs("span",{style:{fontSize:11,color:Jn,whiteSpace:"nowrap"},children:[t.current,"/",t.next]})]})}}}}it.meta=is;const $v={slug:"level-badge",title:"等级徽章 LevelBadge",group:"plugin",intro:"头部会员徽章：等级名 + 距下一级进度条，读 data.level 渲染。"},jv=H(F,[it()]);function Dv(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(jv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Mv=Object.freeze(Object.defineProperty({__proto__:null,default:Dv,meta:$v},Symbol.toStringTag,{value:"Module"})),Nv="CountdownPlugin",Ov="次签倒计时：依据 nextResetAt 展示距下次可签到剩余时间，头部区渲染。",Lv="0.1.0",zv=["countdown","header","timer"],Av=[],Bv="withSignInPlugins(SignInCore, [createCountdownPlugin()])",Fv=[{name:"默认",description:"头部展示次签倒计时",src:"createCountdownPlugin()",config:{}}],ls={name:Nv,description:Ov,since:Lv,tags:zv,config:Av,example:Bv,examples:Fv};function Uv({nextResetAt:e,todaySigned:n}){const t=Ka(),r=e-t;if(r<=0)return h.jsx("div",{style:{fontSize:12,color:Uh},children:"现在可签到"});const i=Math.floor(r/864e5),l=Math.floor(r%864e5/36e5),o=Math.floor(r%36e5/6e4),a=i>0?`${i}天${l}小时`:`${l}小时${o}分`;return h.jsx("div",{style:{fontSize:12,color:Jn},children:n?`距下次可签到 ${a}`:"今日可签到"})}function Ft(e={}){return{name:"Countdown",version:"0.1.0",description:ls.description,priority:14,enabled:!0,hooks:{renderHeader:n=>{const{nextResetAt:t,todaySigned:r}=n.data;return t?h.jsx(Uv,{nextResetAt:t,todaySigned:r}):null}}}}Ft.meta=ls;const Wv={slug:"countdown",title:"次签倒计时 Countdown",group:"plugin",intro:"头部倒计时：读 data.nextResetAt 计算剩余小时/分钟，已过期则提示「现在可签到」。"},Hv=H(F,[Ft()]);function Vv(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(Hv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Gv=Object.freeze(Object.defineProperty({__proto__:null,default:Vv,meta:Wv},Symbol.toStringTag,{value:"Module"})),Kv="CalendarGridPlugin",Qv="月历网格：以 7 列网格形态呈现整轮签到进度，日历区渲染。",Xv="0.1.0",Yv=["calendar","grid","calendar-slot"],Zv=[{name:"columns",type:"number",default:"7",description:"网格每周列数"}],Jv="withSignInPlugins(SignInCore, [createCalendarGridPlugin()])",qv=[{name:"默认",description:"以 7 列网格展示整轮签到",src:"createCalendarGridPlugin()",config:{}}],os={name:Kv,description:Qv,since:Xv,tags:Yv,config:Zv,example:Jv,examples:qv};function Ut(e={}){const{columns:n=7}=e;return{name:"CalendarGrid",version:"0.1.0",description:os.description,priority:21,enabled:!0,hooks:{renderCalendar:t=>{const r=t.data.calendar??[];return h.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gap:6},children:r.map(i=>{const l=Yi[i.status]??Yi.future,o=Cf[i.status]??i.status;return h.jsxs("div",{role:"img","aria-label":`${i.date} ${o}`,title:`${i.date} ${o}`,style:{height:44,borderRadius:8,background:l.bg,color:l.fg,border:`1px solid ${l.border}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[h.jsxs("span",{style:{fontSize:10,color:l.fg},children:[i.day,"天"]}),h.jsx("span",{style:{fontSize:14,fontWeight:700,lineHeight:1.1},children:Pf[i.status]||i.day})]},i.date)})})}}}}Ut.meta=os;const eS={slug:"calendar-grid",title:"月历网格 CalendarGrid",group:"plugin",intro:"七列月历网格：已签/今日/漏签/补签/奖励日五态着色，适合大运营位全景展示。"},nS=H(F,[Ut()]);function tS(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(nS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const rS=Object.freeze(Object.defineProperty({__proto__:null,default:tS,meta:eS},Symbol.toStringTag,{value:"Module"})),iS="RewardClaimPlugin",lS="当日奖励领取：提供已达天数待领奖励的领取按钮，奖励区渲染。",oS="0.1.0",aS=["reward","claim","rewards-slot"],sS=[{name:"pendingText",type:"string",default:"领取中…",description:"请求在途时的按钮文案；期间按钮禁用，防重复领取"},{name:"errorText",type:"string",default:"领取失败，请重试",description:"回调失败时的兜底文案"}],uS="withSignInPlugins(SignInCore, [createRewardClaimPlugin()])",cS=[{name:"默认",description:"展示待领奖励领取按钮",src:"createRewardClaimPlugin()",config:{}}],as={name:iS,description:lS,since:oS,tags:aS,config:sS,example:uS,examples:cS};function dS({ctx:e,target:n,pendingText:t,errorText:r}){const i=y.useRef(!1),[l,o]=y.useState(!1),[a,s]=y.useState(null),u=async()=>{if(!i.current){i.current=!0,o(!0),s(null);try{await zt(e.callbacks.claim,n.day)}catch(f){s(ml(f,r))}finally{i.current=!1,o(!1)}}};return h.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[h.jsx("button",{type:"button","data-testid":"si-claim-btn","data-day":String(n.day),"data-pending":String(l),"aria-busy":l||void 0,disabled:l,onClick:()=>{u()},style:{border:"none",background:Ee,color:"#ffffff",borderRadius:18,padding:"6px 16px",fontSize:13,fontWeight:700,cursor:l?"not-allowed":"pointer"},children:l?t:`领取第${n.day}天奖励 · ${n.label}`}),a&&h.jsx("div",{role:"alert","data-testid":"si-claim-error",style:{fontSize:12,color:"#d4380d"},children:a})]})}function lt(e={}){const{pendingText:n="领取中…",errorText:t="领取失败，请重试"}=e;return{name:"RewardClaim",version:"0.1.0",description:as.description,priority:31,enabled:!0,hooks:{renderRewards:r=>{const{rewards:i,streak:l}=r.data,o=[...i??[]].filter(a=>a.day<=l&&!a.claimed).sort((a,s)=>a.day-s.day)[0];return o?h.jsx(dS,{ctx:r,target:o,pendingText:n,errorText:t}):h.jsx("div",{style:{fontSize:12,color:Jn},children:"今日奖励已全部领取"})}}}}lt.meta=as;const fS={slug:"reward-claim",title:"奖励领取 RewardClaim",group:"plugin",intro:"奖励区领取：扫描 rewards，对 day<=streak 且未领的奖励给出「领取」按钮，走 callbacks.claim。"},pS=H(F,[lt()]);function gS(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(pS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const mS=Object.freeze(Object.defineProperty({__proto__:null,default:gS,meta:fS},Symbol.toStringTag,{value:"Module"})),hS="MilestonePlugin",yS="里程碑进度：展示距下一未达奖励还差几天与进度条，奖励区渲染。",vS="0.1.0",SS=["milestone","rewards","progress"],xS=[],wS="withSignInPlugins(SignInCore, [createMilestonePlugin()])",kS=[{name:"默认",description:"展示下一里程碑进度",src:"createMilestonePlugin()",config:{}}],ss={name:hS,description:yS,since:vS,tags:SS,config:xS,example:wS,examples:kS};function Wt(e={}){return{name:"Milestone",version:"0.1.0",description:ss.description,priority:32,enabled:!0,hooks:{renderRewards:n=>{const{rewards:t,streak:r}=n.data,i=(t??[]).filter(a=>a.day>r).sort((a,s)=>a.day-s.day)[0];if(!i)return h.jsx("div",{style:{fontSize:12,color:Jn},children:"已达成全部奖励 🎉"});const l=i.day-r,o=Math.round((i.day-l)/i.day*100);return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[h.jsxs("div",{style:{fontSize:12,color:on},children:["再连签 ",h.jsx("b",{style:{color:Ee},children:l})," 天解锁 ",i.label]}),h.jsx("div",{style:{height:6,borderRadius:3,background:Ya,overflow:"hidden"},children:h.jsx("div",{style:{width:`${o}%`,height:"100%",background:kf}})})]})}}}}Wt.meta=ss;const PS={slug:"milestone",title:"里程碑 Milestone",group:"plugin",intro:"奖励区里程碑：找到下一未达奖励，展示「再连签 N 天」+ 进度条；全达成显示庆祝终态。"},CS=H(F,[Wt()]);function _S(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(CS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const ES=Object.freeze(Object.defineProperty({__proto__:null,default:_S,meta:PS},Symbol.toStringTag,{value:"Module"})),TS="SharePlugin",RS="分享成就：触发分享回调的无状态按钮，操作区渲染。",IS="0.1.0",bS=["share","actions","social"],$S=[{name:"text",type:"string",default:"分享成就",description:"按钮文案"}],jS="withSignInPlugins(SignInCore, [createSharePlugin()])",DS=[{name:"默认",description:"操作区展示分享按钮",src:"createSharePlugin()",config:{}}],us={name:TS,description:RS,since:IS,tags:bS,config:$S,example:jS,examples:DS};function Ht(e={}){const{text:n="分享成就"}=e;return{name:"Share",version:"0.1.0",description:us.description,priority:43,enabled:!0,hooks:{renderActions:t=>h.jsx("button",{type:"button",onClick:()=>{zt(t.callbacks.share).catch(r=>{console.warn("[vane-sign-in] callbacks.share 执行失败",r)})},style:{border:"1px solid #d8d8d8",background:"#ffffff",color:on,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:n})}}}Ht.meta=us;const MS={slug:"share",title:"分享成就 Share",group:"plugin",intro:"操作区社交扩散位：点击触发 callbacks.share，海报/链接/卡片由消费方实现。"},NS=H(F,[Ht()]);function OS(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(NS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const LS=Object.freeze(Object.defineProperty({__proto__:null,default:OS,meta:MS},Symbol.toStringTag,{value:"Module"})),zS="RemindPlugin",AS="签到提醒开关：本地维护开关态并回调下发，操作区渲染。",BS="0.1.0",FS=["remind","actions","toggle"],US=[{name:"defaultOn",type:"boolean",default:"false",description:"初始是否开启提醒"}],WS="withSignInPlugins(SignInCore, [createRemindPlugin()])",HS=[{name:"默认",description:"操作区展示提醒开关",src:"createRemindPlugin()",config:{}}],cs={name:zS,description:AS,since:BS,tags:FS,config:US,example:WS,examples:HS};function VS({ctx:e,initialOn:n,errorText:t}){const[r,i]=y.useState(n),[l,o]=y.useState(null),a=y.useRef(!1),s=async()=>{if(a.current)return;a.current=!0;const u=!r,f=r;i(u),o(null);try{await zt(e.callbacks.remind,u)}catch(c){i(f),o(ml(c,t))}finally{a.current=!1}};return h.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[h.jsx("button",{type:"button","data-testid":"si-remind-btn","data-on":String(r),"aria-pressed":r,onClick:()=>{s()},style:{border:`1px solid ${r?Ee:"#d8d8d8"}`,background:r?Fh:"#ffffff",color:r?Ee:on,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:r?"已开启提醒":"签到提醒"}),l&&h.jsx("div",{role:"alert","data-testid":"si-remind-error",style:{fontSize:12,color:"#d4380d"},children:l})]})}function Vt(e={}){const{defaultOn:n=!1,errorText:t="提醒设置失败，请重试"}=e;return{name:"Remind",version:"0.1.0",description:cs.description,priority:44,enabled:!0,hooks:{renderActions:r=>h.jsx(VS,{ctx:r,initialOn:r.data.remindEnabled??n,errorText:t})}}}Vt.meta=cs;const GS={slug:"remind",title:"签到提醒 Remind",group:"plugin",intro:"操作区提醒开关：插件自身管理开关态，切换即经 callbacks.remind 下发给消费方持久化。"},KS=H(F,[Vt()]);function QS(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(KS,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const XS=Object.freeze(Object.defineProperty({__proto__:null,default:QS,meta:GS},Symbol.toStringTag,{value:"Module"})),YS="InvitePlugin",ZS="邀请好友助力：触发邀请回调的按钮，操作区渲染，常用于拉新运营位。",JS="0.1.0",qS=["invite","actions","growth"],e0=[{name:"text",type:"string",default:"邀请好友助力",description:"按钮文案"}],n0="withSignInPlugins(SignInCore, [createInvitePlugin()])",t0=[{name:"默认",description:"操作区展示邀请按钮",src:"createInvitePlugin()",config:{}}],ds={name:YS,description:ZS,since:JS,tags:qS,config:e0,example:n0,examples:t0};function Gt(e={}){const{text:n="邀请好友助力"}=e;return{name:"Invite",version:"0.1.0",description:ds.description,priority:45,enabled:!0,hooks:{renderActions:t=>h.jsx("button",{type:"button",onClick:()=>{zt(t.callbacks.invite).catch(r=>{console.warn("[vane-sign-in] callbacks.invite 执行失败",r)})},style:{border:`1px solid ${Ee}`,background:"#ffffff",color:Ee,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:n})}}}Gt.meta=ds;const r0={slug:"invite",title:"邀请助力 Invite",group:"plugin",intro:"操作区邀请位：点击触发 callbacks.invite，常用于拉新/游戏运营位解锁额外奖励。"},i0=H(F,[Gt()]);function l0(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(i0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const o0=Object.freeze(Object.defineProperty({__proto__:null,default:l0,meta:r0},Symbol.toStringTag,{value:"Module"})),a0="RuleExpandPlugin",s0="规则折叠展开：将活动规则折叠为可展开列表，底部区渲染；无规则时静默跳过。",u0="0.1.0",c0=["rule","footer","collapse"],d0=[{name:"defaultOpen",type:"boolean",default:"false",description:"初始是否展开"}],f0="withSignInPlugins(SignInCore, [createRuleExpandPlugin()])",p0=[{name:"默认",description:"底部展示可折叠的活动规则",src:"createRuleExpandPlugin()",config:{}}],fs={name:a0,description:s0,since:u0,tags:c0,config:d0,example:f0,examples:p0};function g0({rules:e,initialOpen:n}){const[t,r]=y.useState(n),i=y.useId();return!e||!e.length?null:h.jsxs("div",{children:[h.jsx("button",{type:"button","data-testid":"si-rule-toggle","aria-expanded":t,"aria-controls":i,onClick:()=>r(l=>!l),style:{border:"none",background:"transparent",color:on,fontSize:13,cursor:"pointer",padding:0},children:t?"收起活动规则 ▲":"活动规则 ▼"}),t&&h.jsx("ul",{id:i,style:{margin:"6px 0 0",paddingLeft:18,fontSize:12,color:Jn},children:e.map((l,o)=>h.jsx("li",{children:l},o))})]})}function Kt(e={}){const{defaultOpen:n=!1}=e;return{name:"RuleExpand",version:"0.1.0",description:fs.description,priority:50,enabled:!0,hooks:{renderFooter:t=>h.jsx(g0,{rules:t.data.rules,initialOpen:n})}}}Kt.meta=fs;const m0={slug:"rule-expand",title:"规则折叠 RuleExpand",group:"plugin",intro:"底部区规则折叠：data.rules 收进可展开列表，点击展开/收起，避免长文案常驻占用空间。"},h0=H(F,[Kt()]);function y0(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(h0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const v0=Object.freeze(Object.defineProperty({__proto__:null,default:y0,meta:m0},Symbol.toStringTag,{value:"Module"})),S0="RewardHistoryPlugin",x0="领取记录：展示历史领取记录列表，底部区渲染；无记录时显示终态文案。",w0="0.1.0",k0=["history","footer","record"],P0=[{name:"limit",type:"number",default:"5",description:"最多展示几条记录"}],C0="withSignInPlugins(SignInCore, [createRewardHistoryPlugin()])",_0=[{name:"默认",description:"底部展示领取记录",src:"createRewardHistoryPlugin()",config:{}}],ps={name:S0,description:x0,since:w0,tags:k0,config:P0,example:C0,examples:_0};function Gr(e={}){const{limit:n=5}=e;return{name:"RewardHistory",version:"0.1.0",description:ps.description,priority:51,enabled:!0,hooks:{renderFooter:t=>{const r=t.data.history??[],i=t.data.businessTimeZone;return r.length?h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[h.jsx("div",{style:{fontSize:12,color:on},children:"领取记录"}),r.slice(0,n).map(l=>h.jsxs("div",{style:{display:"flex",fontSize:12,color:Jn},children:[h.jsxs("span",{children:["第",l.day,"天 · ",l.label]}),h.jsx("span",{style:{marginLeft:"auto"},children:Ih(l.at,i)})]},l.id))]}):h.jsx("div",{style:{fontSize:12,color:Jn},children:"暂无领取记录"})}}}}Gr.meta=ps;const E0={slug:"reward-history",title:"领取记录 RewardHistory",group:"plugin",intro:"底部区领取记录：data.history 按时间倒序展示，无记录显示终态文案。"},T0=H(F,[Gr()]);function R0(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(T0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const I0=Object.freeze(Object.defineProperty({__proto__:null,default:R0,meta:E0},Symbol.toStringTag,{value:"Module"})),b0=`import React, { useState } from "react";\r
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
`,$0=`import React, { useState } from "react";\r
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
`,j0=`import React, { useState } from "react";\r
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
`,D0=`import React, { useState } from "react";\r
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
`,M0=`import React, { useState } from "react";\r
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
`,N0=`import React, { useState } from "react";\r
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
`,O0=`import React, { useState } from "react";\r
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
`,L0=`import React, { useState } from "react";\r
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
`,z0=`import React, { useState } from "react";\r
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
`,A0=`import React, { useState } from "react";\r
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
`,B0=`import React, { useState } from "react";\r
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
`,F0=`import React, { useState } from "react";\r
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
`,U0=`import React, { useState } from "react";\r
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
`,W0=`import React, { useState } from "react";\r
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
`,H0=`import React, { useState } from "react";\r
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
`,V0=`import React, { useState } from "react";\r
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
`,G0=`import React, { useState } from "react";\r
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
`,K0=`import React, { useState } from "react";\r
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
`,Q0=Object.assign({"./00-basic.tsx":Ny,"./01-streak-state.tsx":Ay,"./02-calendar-strip.tsx":Wy,"./03-reward-preview.tsx":Ky,"./04-makeup-slot.tsx":Zy,"./05-today-check-in.tsx":nv,"./06-points-balance.tsx":fv,"./07-stat-row.tsx":Pv,"./08-level-badge.tsx":Mv,"./09-countdown.tsx":Gv,"./10-calendar-grid.tsx":rS,"./11-reward-claim.tsx":mS,"./12-milestone.tsx":ES,"./13-share.tsx":LS,"./14-remind.tsx":XS,"./15-invite.tsx":o0,"./16-rule-expand.tsx":v0,"./17-reward-history.tsx":I0}),X0=Object.assign({"./00-basic.tsx":b0,"./01-streak-state.tsx":$0,"./02-calendar-strip.tsx":j0,"./03-reward-preview.tsx":D0,"./04-makeup-slot.tsx":M0,"./05-today-check-in.tsx":N0,"./06-points-balance.tsx":O0,"./07-stat-row.tsx":L0,"./08-level-badge.tsx":z0,"./09-countdown.tsx":A0,"./10-calendar-grid.tsx":B0,"./11-reward-claim.tsx":F0,"./12-milestone.tsx":U0,"./13-share.tsx":W0,"./14-remind.tsx":H0,"./15-invite.tsx":V0,"./16-rule-expand.tsx":G0,"./17-reward-history.tsx":K0}),Y0=e=>e.replace(/^\.\//,""),Ho=Object.entries(Q0).map(([e,n])=>{const t=Y0(e);return{meta:n.meta,Stage:n.default,file:t,source:X0[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),Z0=Array.from(new Set(Ho.map(e=>e.meta.group))),_f={basic:{label:"基础用法"},advanced:{label:"进阶用法"},plugin:{label:"插件示例"}},J0="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",q0="true|false|null|undefined|this|super",ex="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",Au=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${J0})\b`,String.raw`\b(${q0})\b`,String.raw`\b(${ex})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),Bu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function nx(e){const n=[];let t=0;Au.lastIndex=0;let r;for(;r=Au.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const i=Bu.findIndex((l,o)=>r[o+1]!==void 0);n.push({text:r[0],cls:i>=0?Bu[i]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function Fu(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function tx({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[i,l]=y.useState("idle"),[o,a]=y.useState(!1),s=y.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&s.length>t,f=u&&!o?s.slice(0,t).join(`
`):e,c=y.useMemo(()=>nx(f),[f]),p=y.useCallback(async()=>{var S;let v=!1;if((S=navigator.clipboard)!=null&&S.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=Fu(e)}else v=Fu(e);l(v?"ok":"fail"),window.setTimeout(()=>l("idle"),1600)},[e]);return h.jsxs("div",{className:"code",children:[h.jsxs("div",{className:"code-head",children:[h.jsx("span",{children:n}),h.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[h.jsxs("span",{children:[s.length," 行"]}),h.jsx("button",{type:"button",className:`code-copy${i==="ok"?" is-ok":i==="fail"?" is-fail":""}`,onClick:p,children:i==="ok"?"已复制":i==="fail"?"复制失败":"复制"})]})]}),h.jsx("pre",{style:r?{maxHeight:r}:void 0,children:h.jsx("code",{children:c.map((v,S)=>v.cls?h.jsx("span",{className:v.cls,children:v.text},S):h.jsx(Fr.Fragment,{children:v.text},S))})}),u?h.jsx("button",{type:"button",className:"code-more",onClick:()=>a(v=>!v),children:o?"收起":`展开余下 ${s.length-t} 行`}):null]})}function rx({entry:e,order:n}){var a;const{meta:t,Stage:r,source:i,file:l}=e,o=String(n).padStart(2,"0");return h.jsxs("article",{children:[h.jsx("header",{className:"page-head",children:h.jsxs("div",{children:[h.jsxs("p",{className:"eyebrow",children:[o," · ",((a=_f[t.group])==null?void 0:a.label)??t.group]}),h.jsx("h1",{className:"page-title",children:t.title})]})}),t.intro?h.jsx("p",{className:"page-sub",children:t.intro}):null,h.jsx("section",{className:"demo-stage",children:h.jsx(r,{})}),h.jsxs("section",{className:"demo-src-wrap",children:[h.jsxs("div",{className:"demo-src-head",children:[h.jsxs("span",{className:"demo-src-title",children:["源码 · ",l]}),h.jsx("span",{className:"demo-src-hint",children:"下面这份就是上面正在跑的那份 · 已高亮"})]}),h.jsx(tx,{code:i,title:l,collapseAfter:28,maxHeight:460})]})]})}const ix=`import type React from "react";
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
`,lx=`import type React from "react";
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
`,ox=`import type React from "react";
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
`,ax=`import type React from "react";
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
`,sx=`import type React from "react";
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
`,ux=`import type React from "react";
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
`,cx=`import type React from "react";
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
`,dx=`import type React from "react";
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
`,fx=`import type React from "react";
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
`,px=`import type React from "react";
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
`,gx=`import type React from "react";
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
`,mx=`import type React from "react";
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
`,hx=`import type React from "react";
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
`,yx=`import type React from "react";
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
`,vx=`import type React from "react";
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
`,Sx=`import type React from "react";
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
`,xx=`import type React from "react";
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
`,c1={header:"头部区 · header",calendar:"日历区 · calendar",rewards:"奖励区 · rewards",actions:"操作区 · actions",footer:"底部区 · footer"},Uu=["header","calendar","rewards","actions","footer"],Wu=Object.assign({"/src/custom-plugins/CalendarGridPlugin/doc.json":os,"/src/custom-plugins/CalendarStripPlugin/doc.json":Ja,"/src/custom-plugins/CountdownPlugin/doc.json":ls,"/src/custom-plugins/InvitePlugin/doc.json":ds,"/src/custom-plugins/LevelBadgePlugin/doc.json":is,"/src/custom-plugins/MakeupSlotPlugin/doc.json":es,"/src/custom-plugins/MilestonePlugin/doc.json":ss,"/src/custom-plugins/PointsBalancePlugin/doc.json":ts,"/src/custom-plugins/RemindPlugin/doc.json":cs,"/src/custom-plugins/RewardClaimPlugin/doc.json":as,"/src/custom-plugins/RewardHistoryPlugin/doc.json":ps,"/src/custom-plugins/RewardPreviewPlugin/doc.json":qa,"/src/custom-plugins/RuleExpandPlugin/doc.json":fs,"/src/custom-plugins/SharePlugin/doc.json":us,"/src/custom-plugins/StatRowPlugin/doc.json":rs,"/src/custom-plugins/StreakStatePlugin/doc.json":Za,"/src/custom-plugins/TodayCheckInPlugin/doc.json":ns}),Hu=Object.assign({"/src/custom-plugins/CalendarGridPlugin/create.tsx":ix,"/src/custom-plugins/CalendarStripPlugin/create.tsx":lx,"/src/custom-plugins/CountdownPlugin/create.tsx":ox,"/src/custom-plugins/InvitePlugin/create.tsx":ax,"/src/custom-plugins/LevelBadgePlugin/create.tsx":sx,"/src/custom-plugins/MakeupSlotPlugin/create.tsx":ux,"/src/custom-plugins/MilestonePlugin/create.tsx":cx,"/src/custom-plugins/PointsBalancePlugin/create.tsx":dx,"/src/custom-plugins/RemindPlugin/create.tsx":fx,"/src/custom-plugins/RewardClaimPlugin/create.tsx":px,"/src/custom-plugins/RewardHistoryPlugin/create.tsx":gx,"/src/custom-plugins/RewardPreviewPlugin/create.tsx":mx,"/src/custom-plugins/RuleExpandPlugin/create.tsx":hx,"/src/custom-plugins/SharePlugin/create.tsx":yx,"/src/custom-plugins/StatRowPlugin/create.tsx":vx,"/src/custom-plugins/StreakStatePlugin/create.tsx":Sx,"/src/custom-plugins/TodayCheckInPlugin/create.tsx":xx}),Ef=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function wx(e){const n=Object.keys(Hu).find(i=>Ef(i)===e),t=n?Hu[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function kx(e){const n=Object.keys(Wu).find(t=>Ef(t)===e);return n?Wu[n]:{name:e,description:"（缺少 doc.json）"}}const Px=[{dir:"StreakStatePlugin",group:"header",make:()=>Dn()},{dir:"PointsBalancePlugin",group:"header",make:()=>At()},{dir:"StatRowPlugin",group:"header",make:()=>Bt()},{dir:"LevelBadgePlugin",group:"header",make:()=>it()},{dir:"CountdownPlugin",group:"header",make:()=>Ft()},{dir:"CalendarStripPlugin",group:"calendar",make:()=>tt({showRewardDot:!0})},{dir:"CalendarGridPlugin",group:"calendar",make:()=>Ut()},{dir:"MakeupSlotPlugin",group:"calendar",make:()=>rt()},{dir:"RewardPreviewPlugin",group:"rewards",make:()=>Mn({limit:5})},{dir:"RewardClaimPlugin",group:"rewards",make:()=>lt()},{dir:"MilestonePlugin",group:"rewards",make:()=>Wt()},{dir:"TodayCheckInPlugin",group:"actions",make:()=>Nn()},{dir:"SharePlugin",group:"actions",make:()=>Ht()},{dir:"RemindPlugin",group:"actions",make:()=>Vt()},{dir:"InvitePlugin",group:"actions",make:()=>Gt()},{dir:"RuleExpandPlugin",group:"footer",make:()=>Kt({defaultOpen:!0})},{dir:"RewardHistoryPlugin",group:"footer",make:()=>Gr()}],Vu=Px.map(e=>{const n=kx(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:wx(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>Uu.indexOf(e.group)-Uu.indexOf(n.group)||n.priority-e.priority),d1=["StreakStatePlugin","LevelBadgePlugin","CalendarStripPlugin","RewardPreviewPlugin","MilestonePlugin","TodayCheckInPlugin","MakeupSlotPlugin","SharePlugin","RuleExpandPlugin","RewardHistoryPlugin"],Cx={id:"ecommerce",title:"电商签到运营位",group:"运营位",ref:{label:"电商 App · 签到弹层",url:"https://vane.dev/examples/sign-in/ecommerce"},pain:"一个按钮的签到太单薄，用户不知道连签能拿什么；把碎插件拼成一张完整运营位卡。",plugs:[{fn:"createStreakStatePlugin",why:"头部连签天数 + 最高连签，给连续打卡的用户正反馈"},{fn:"createCalendarStripPlugin",cfg:"showRewardDot: true",why:"14 天连签条，今天/已签/漏签一眼看清，带奖励的格打点"},{fn:"createRewardPreviewPlugin",why:"逐日奖励预告，把『再签 1 天得 50 积分』前置"},{fn:"createTodayCheckInPlugin",why:"主 CTA：今日签到 / 已签切换"},{fn:"createMakeupSlotPlugin",why:"漏签用户给补签入口，挽回流失"}],props:["data={data}","callbacks={callbacks}"],note:"五个原子插件，组合后就是一张可直接上线的大促签到卡。"},_x=H(F,[Dn(),tt({showRewardDot:!0}),Mn(),Nn(),rt()]);function Ex(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(_x,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const Tx=Object.freeze(Object.defineProperty({__proto__:null,default:Ex,meta:Cx},Symbol.toStringTag,{value:"Module"})),Rx={id:"game-streak",title:"游戏连签激励",group:"激励",ref:{label:"游戏 · 每日任务",url:"https://vane.dev/examples/sign-in/game-streak"},pain:"游戏侧要的是成长曲线与紧迫感，单插件撑不起；用 6 个插件拼出『每日任务』面板。",plugs:[{fn:"createStreakStatePlugin",why:"连签天数 + 最高连签，冲榜动机"},{fn:"createCalendarGridPlugin",why:"月历网格，看整月进度"},{fn:"createMilestonePlugin",why:"里程碑节点（如 7/30 天）给阶段目标"},{fn:"createLevelBadgePlugin",why:"会员等级徽章，成长感"},{fn:"createRewardClaimPlugin",why:"达标奖励一键领取"},{fn:"createCountdownPlugin",why:"距下次刷新倒计时，制造紧迫"}],props:["data={data}","callbacks={callbacks}"],note:"倒计时依赖数据里的 nextResetAt，样本数据已带该字段。"},Ix=H(F,[Dn(),Ut(),Wt(),it(),lt(),Ft()]);function bx(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(Ix,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const $x=Object.freeze(Object.defineProperty({__proto__:null,default:bx,meta:Rx},Symbol.toStringTag,{value:"Module"})),jx={id:"membership",title:"会员积分中心",group:"账户",ref:{label:"会员中心",url:"https://vane.dev/examples/sign-in/membership"},pain:"会员中心重在资产与规则透明；碎插件组合成账户视图。",plugs:[{fn:"createPointsBalancePlugin",why:"积分余额醒目展示"},{fn:"createStatRowPlugin",why:"累计天数 / 连签 / 补签次数一横排"},{fn:"createLevelBadgePlugin",why:"当前等级与进度"},{fn:"createRewardPreviewPlugin",why:"积分可兑奖励预告"},{fn:"createRuleExpandPlugin",cfg:"defaultOpen: true",why:"积分规则可折叠展开"}],props:["data={data}","callbacks={callbacks}"],note:"sampleData 已带 level / rules 字段，等级与规则插件直接能渲染。"},Dx=H(F,[At(),Bt(),it(),Mn(),Kt({defaultOpen:!0})]);function Mx(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(Dx,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const Nx=Object.freeze(Object.defineProperty({__proto__:null,default:Mx,meta:jx},Symbol.toStringTag,{value:"Module"})),Ox={id:"social-viral",title:"社交分享裂变",group:"裂变",ref:{label:"社交裂变",url:"https://vane.dev/examples/sign-in/social-viral"},pain:"裂变链路是『签到→分享→邀请→提醒』，单插件无法表达流程；按顺序拼成一张裂变卡。",plugs:[{fn:"createTodayCheckInPlugin",why:"先完成今日签到这一动作"},{fn:"createSharePlugin",cfg:'text: "晒今日签到"',why:"分享得额外奖励的入口"},{fn:"createInvitePlugin",why:"邀请好友，裂变拉新"},{fn:"createRemindPlugin",why:"开启每日提醒，提升留存"},{fn:"createRewardClaimPlugin",why:"分享 / 邀请带来的奖励领取"}],props:["data={data}","callbacks={callbacks}"],note:"share / invite / remind 走各自 callbacks，组合后即一条裂变漏斗。"},Lx=H(F,[Nn(),Ht({text:"晒今日签到"}),Gt(),Vt(),lt()]);function zx(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(Lx,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const Ax=Object.freeze(Object.defineProperty({__proto__:null,default:zx,meta:Ox},Symbol.toStringTag,{value:"Module"})),Bx={id:"full-stack",title:"全功能中台 · 17 插件全量",group:"全集",ref:{label:"组件能力全集",url:"https://vane.dev/examples/sign-in/full"},pain:"想一次性看全部 17 个插件怎么共存——全量装配的压力测试。",plugs:[{fn:"createStreakStatePlugin",why:"头部连签状态"},{fn:"createPointsBalancePlugin",why:"积分余额"},{fn:"createStatRowPlugin",why:"统计横排"},{fn:"createLevelBadgePlugin",why:"等级徽章"},{fn:"createCountdownPlugin",why:"刷新倒计时"},{fn:"createCalendarStripPlugin",why:"连签条"},{fn:"createCalendarGridPlugin",why:"月历网格"},{fn:"createMakeupSlotPlugin",why:"补签入口"},{fn:"createRewardPreviewPlugin",why:"奖励预告"},{fn:"createRewardClaimPlugin",why:"奖励领取"},{fn:"createMilestonePlugin",why:"里程碑"},{fn:"createTodayCheckInPlugin",why:"今日签到 CTA"},{fn:"createSharePlugin",why:"分享"},{fn:"createRemindPlugin",why:"提醒"},{fn:"createInvitePlugin",why:"邀请"},{fn:"createRuleExpandPlugin",why:"规则展开"},{fn:"createRewardHistoryPlugin",why:"领取记录"}],props:["data={data}","callbacks={callbacks}"],note:"五个槽位（header/calendar/rewards/actions/footer）同时承载多个插件，靠 priority 决定共存顺序。"},Fx=H(F,[Dn(),At(),Bt(),it(),Ft(),tt({showRewardDot:!0}),Ut(),rt(),Mn(),lt(),Wt(),Nn(),Ht(),Vt(),Gt(),Kt({defaultOpen:!0}),Gr()]);function Ux(){const[e,n]=y.useState(!1),t=Q(e),r=Y({sign:()=>n(!0)});return h.jsx(Fx,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Wx=Object.freeze(Object.defineProperty({__proto__:null,default:Ux,meta:Bx},Symbol.toStringTag,{value:"Module"})),Hx=`import React, { useState } from "react";\r
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
`,Vx=`import React, { useState } from "react";\r
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
`,Gx=`import React, { useState } from "react";\r
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
`,Kx=`import React, { useState } from "react";\r
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
`,Qx=`import React, { useState } from "react";\r
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
`,Xx=Object.assign({"./01-ecommerce.tsx":Tx,"./02-game-streak.tsx":$x,"./03-membership.tsx":Nx,"./04-social-viral.tsx":Ax,"./05-full-stack.tsx":Wx}),Yx=Object.assign({"./01-ecommerce.tsx":Hx,"./02-game-streak.tsx":Vx,"./03-membership.tsx":Gx,"./04-social-viral.tsx":Kx,"./05-full-stack.tsx":Qx}),Zx=e=>e.replace(/^\.\//,""),Zi=Object.entries(Xx).map(([e,n])=>{const t=Zx(e);return{meta:n.meta,Component:n.default,file:t,source:Yx[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),f1=Zi.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),p1=Array.from(new Set(Zi.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort(),Jx=y.lazy(()=>Va(()=>import("./HomePage-DeK8G34k.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),qx=y.lazy(()=>Va(()=>import("./PluginsPage-htBWZFrW.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),e1=y.lazy(()=>Va(()=>import("./ScenariosPage-BQ-kU1K-.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),n1={pkg:"vane-sign-in",brand:"S",subtitle:"每日签到 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Vu.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Zi.length} plates`}],routes:[{path:"/",element:h.jsx(Jx,{})},{path:"/plugins",element:h.jsx(qx,{})},{path:"/scenarios",element:h.jsx(e1,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:Z0.map(e=>({key:e,label:_f[e].label})),entries:Ho,detail:(e,n)=>h.jsx(rx,{entry:e,order:n})},footer:[`${Vu.length} PLUGINS · ${Zi.length} PLATES`,`${Ho.length} DEMOS · 插件索引`]};function t1(){return h.jsx(uh,{config:n1})}const r1=H(F,[Dn(),tt(),Mn(),rt(),Nn(),At(),Bt(),it(),Ft(),Ut(),lt(),Wt(),Ht(),Vt(),Gt(),Kt(),Gr()]),Vo=()=>new Promise(e=>setTimeout(e,0)),i1=async(e,n=60)=>{for(let t=0;t<n&&!e();t++)await Vo()};async function l1(e){const n=document.createElement("div");n.style.cssText="position:fixed;left:0;top:0;width:420px;background:#fff",document.body.appendChild(n);const t=lf(n);return Qi.flushSync(()=>t.render(e)),await Vo(),{host:n,root:t,q:r=>n.querySelector(r),qq:r=>n.querySelectorAll(r),click:async r=>{const i=n.querySelector(r);if(!i)throw new Error(`找不到元素 ${r}`);Qi.flushSync(()=>i.click()),await Vo()}}}function o1(e){const t=Array.from(e.querySelectorAll("*")).map(a=>({e:a,r:a.getBoundingClientRect()}));if(!t.some(a=>a.r.width>0||a.r.height>0))return{checked:0,problems:[]};const i=[];let l=0;const o=e.getBoundingClientRect();for(const{r:a}of t)l+=1,(a.width<0||a.height<0)&&i.push("negative-size"),(a.left<-1||a.top<-1)&&i.push("negative-coord"),(a.right>o.right+1||a.bottom>o.bottom+1)&&i.push("overflow"),(a.width===0||a.height===0)&&i.push("zero-size");return e.scrollHeight>e.clientHeight+1&&i.push("scroll-overflow"),{checked:l,problems:Array.from(new Set(i))}}async function a1(){const e=[];let n=0;const t=(l,o)=>{n+=1,document.title=`SELFTEST RUNNING ${n}`,o||e.push(l)},r={signed:!1,claimed:null,makeup:null};function i(){const[l,o]=y.useState(!1),a=Q(l),s={sign:()=>{r.signed=!0,o(!0)},claim:u=>{r.claimed=u},makeup:u=>{r.makeup=u},share:()=>{},remind:()=>{},invite:()=>{}};return h.jsx(r1,{data:a,callbacks:s,containerStyle:{maxWidth:480}})}{const l=await l1(h.jsx(i,{}));t("根容器渲染 si-root",!!l.q('[data-testid="si-root"]'));const o=l.q('[data-testid="si-streak"]');t("连签数渲染（未签 streak=7）",!!o&&(o.textContent??"").includes("7")&&(o.textContent??"").includes("天连签"));const a=l.q('[data-testid="si-checkin-btn"]');t("今日签到按钮：未签态存在",!!a&&a.dataset.signed==="false"),t("今日签到按钮：未签文本「立即签到」",((a==null?void 0:a.textContent)??"")==="立即签到");const s=l.q('[data-testid="si-makeup-btn"]');t("补签入口存在且未禁用",!!s&&s.dataset.disabled==="false"&&s.disabled===!1),t("补签文案含「补签」",((s==null?void 0:s.textContent)??"").includes("补签")),t("未达领奖天数时无领取按钮",!l.q('[data-testid="si-claim-btn"]')),await l.click('[data-testid="si-checkin-btn"]'),await i1(()=>{var v;return((v=l.q('[data-testid="si-checkin-btn"]'))==null?void 0:v.dataset.signed)==="true"});const u=l.q('[data-testid="si-checkin-btn"]');t("签到后：按钮态 signed=true",(u==null?void 0:u.dataset.signed)==="true"),t("签到后：按钮禁用",(u==null?void 0:u.disabled)===!0),t("签到后：文案「今日已签 ✓」",((u==null?void 0:u.textContent)??"").includes("今日已签"));const f=l.q('[data-testid="si-streak"]');t("签到后：连签数更新为 8",!!f&&(f.textContent??"").includes("8")),t("签到回调被触发",r.signed===!0);const c=l.q('[data-testid="si-claim-btn"]');t("达标后：出现领取按钮",!!c&&c.dataset.day==="8"),c&&(await l.click('[data-testid="si-claim-btn"]'),t("领取回调被触发且 day=8",r.claimed===8)),await l.click('[data-testid="si-makeup-btn"]'),t("补签回调被触发且日期=2026-10-09",r.makeup==="2026-10-09");const p=o1(l.host);t("几何体检：0 问题（happy-dom 无布局引擎时自动跳过）",p.problems.length===0&&(p.checked===0||p.checked>=2)),Qi.flushSync(()=>l.root.unmount()),l.host.remove()}return{total:n,passed:n-e.length,failed:e}}async function s1(){document.title="SELFTEST RUNNING";try{const e=await a1();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Wl.createRoot(document.getElementById("root")).render(h.jsx(t1,{}));typeof location<"u"&&location.search.includes("selftest=1")&&s1();export{tx as C,Ho as D,Uu as G,Vu as P,Zi as S,p1 as U,d1 as a,c1 as b,Y as c,Q as d,F as e,f1 as f,h as j,y as r,H as w};
