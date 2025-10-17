import{c as re,g as or,j as $}from"./index-DYgqlTni.js";import{h as wi,t as Ci}from"./tomorrow-CqI3LVar.js";function Si(n,e){const t={};return(n[n.length-1]===""?[...n,""]:n).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const Pi=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ii=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,vi={};function ft(n,e){return(vi.jsx?Ii:Pi).test(n)}const Ei=/[ \t\n\f\r]/g;function zi(n){return typeof n=="object"?n.type==="text"?pt(n.value):!1:pt(n)}function pt(n){return n.replace(Ei,"")===""}class Kn{constructor(e,t,r){this.normal=t,this.property=e,r&&(this.space=r)}}Kn.prototype.normal={};Kn.prototype.property={};Kn.prototype.space=void 0;function ar(n,e){const t={},r={};for(const i of n)Object.assign(t,i.property),Object.assign(r,i.normal);return new Kn(t,r,e)}function Le(n){return n.toLowerCase()}class en{constructor(e,t){this.attribute=t,this.property=e}}en.prototype.attribute="";en.prototype.booleanish=!1;en.prototype.boolean=!1;en.prototype.commaOrSpaceSeparated=!1;en.prototype.commaSeparated=!1;en.prototype.defined=!1;en.prototype.mustUseProperty=!1;en.prototype.number=!1;en.prototype.overloadedBoolean=!1;en.prototype.property="";en.prototype.spaceSeparated=!1;en.prototype.space=void 0;let Li=0;const T=En(),K=En(),Ae=En(),C=En(),U=En(),Fn=En(),rn=En();function En(){return 2**++Li}const Te=Object.freeze(Object.defineProperty({__proto__:null,boolean:T,booleanish:K,commaOrSpaceSeparated:rn,commaSeparated:Fn,number:C,overloadedBoolean:Ae,spaceSeparated:U},Symbol.toStringTag,{value:"Module"})),me=Object.keys(Te);class He extends en{constructor(e,t,r,i){let o=-1;if(super(e,t),ht(this,"space",i),typeof r=="number")for(;++o<me.length;){const l=me[o];ht(this,me[o],(r&Te[l])===Te[l])}}}He.prototype.defined=!0;function ht(n,e,t){t&&(n[e]=t)}function On(n){const e={},t={};for(const[r,i]of Object.entries(n.properties)){const o=new He(r,n.transform(n.attributes||{},r),i,n.space);n.mustUseProperty&&n.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),e[r]=o,t[Le(r)]=r,t[Le(o.attribute)]=r}return new Kn(e,t,n.space)}const ur=On({properties:{ariaActiveDescendant:null,ariaAtomic:K,ariaAutoComplete:null,ariaBusy:K,ariaChecked:K,ariaColCount:C,ariaColIndex:C,ariaColSpan:C,ariaControls:U,ariaCurrent:null,ariaDescribedBy:U,ariaDetails:null,ariaDisabled:K,ariaDropEffect:U,ariaErrorMessage:null,ariaExpanded:K,ariaFlowTo:U,ariaGrabbed:K,ariaHasPopup:null,ariaHidden:K,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:U,ariaLevel:C,ariaLive:null,ariaModal:K,ariaMultiLine:K,ariaMultiSelectable:K,ariaOrientation:null,ariaOwns:U,ariaPlaceholder:null,ariaPosInSet:C,ariaPressed:K,ariaReadOnly:K,ariaRelevant:null,ariaRequired:K,ariaRoleDescription:U,ariaRowCount:C,ariaRowIndex:C,ariaRowSpan:C,ariaSelected:K,ariaSetSize:C,ariaSort:null,ariaValueMax:C,ariaValueMin:C,ariaValueNow:C,ariaValueText:null,role:null},transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function sr(n,e){return e in n?n[e]:e}function cr(n,e){return sr(n,e.toLowerCase())}const Ai=On({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Fn,acceptCharset:U,accessKey:U,action:null,allow:null,allowFullScreen:T,allowPaymentRequest:T,allowUserMedia:T,alt:null,as:null,async:T,autoCapitalize:null,autoComplete:U,autoFocus:T,autoPlay:T,blocking:U,capture:null,charSet:null,checked:T,cite:null,className:U,cols:C,colSpan:null,content:null,contentEditable:K,controls:T,controlsList:U,coords:C|Fn,crossOrigin:null,data:null,dateTime:null,decoding:null,default:T,defer:T,dir:null,dirName:null,disabled:T,download:Ae,draggable:K,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:T,formTarget:null,headers:U,height:C,hidden:Ae,high:C,href:null,hrefLang:null,htmlFor:U,httpEquiv:U,id:null,imageSizes:null,imageSrcSet:null,inert:T,inputMode:null,integrity:null,is:null,isMap:T,itemId:null,itemProp:U,itemRef:U,itemScope:T,itemType:U,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:T,low:C,manifest:null,max:null,maxLength:C,media:null,method:null,min:null,minLength:C,multiple:T,muted:T,name:null,nonce:null,noModule:T,noValidate:T,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:T,optimum:C,pattern:null,ping:U,placeholder:null,playsInline:T,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:T,referrerPolicy:null,rel:U,required:T,reversed:T,rows:C,rowSpan:C,sandbox:U,scope:null,scoped:T,seamless:T,selected:T,shadowRootClonable:T,shadowRootDelegatesFocus:T,shadowRootMode:null,shape:null,size:C,sizes:null,slot:null,span:C,spellCheck:K,src:null,srcDoc:null,srcLang:null,srcSet:null,start:C,step:null,style:null,tabIndex:C,target:null,title:null,translate:null,type:null,typeMustMatch:T,useMap:null,value:K,width:C,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:U,axis:null,background:null,bgColor:null,border:C,borderColor:null,bottomMargin:C,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:T,declare:T,event:null,face:null,frame:null,frameBorder:null,hSpace:C,leftMargin:C,link:null,longDesc:null,lowSrc:null,marginHeight:C,marginWidth:C,noResize:T,noHref:T,noShade:T,noWrap:T,object:null,profile:null,prompt:null,rev:null,rightMargin:C,rules:null,scheme:null,scrolling:K,standby:null,summary:null,text:null,topMargin:C,valueType:null,version:null,vAlign:null,vLink:null,vSpace:C,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:T,disableRemotePlayback:T,prefix:null,property:null,results:C,security:null,unselectable:null},space:"html",transform:cr}),Ti=On({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:rn,accentHeight:C,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:C,amplitude:C,arabicForm:null,ascent:C,attributeName:null,attributeType:null,azimuth:C,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:C,by:null,calcMode:null,capHeight:C,className:U,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:C,diffuseConstant:C,direction:null,display:null,dur:null,divisor:C,dominantBaseline:null,download:T,dx:null,dy:null,edgeMode:null,editable:null,elevation:C,enableBackground:null,end:null,event:null,exponent:C,externalResourcesRequired:null,fill:null,fillOpacity:C,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Fn,g2:Fn,glyphName:Fn,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:C,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:C,horizOriginX:C,horizOriginY:C,id:null,ideographic:C,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:C,k:C,k1:C,k2:C,k3:C,k4:C,kernelMatrix:rn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:C,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:C,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:C,overlineThickness:C,paintOrder:null,panose1:null,path:null,pathLength:C,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:U,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:C,pointsAtY:C,pointsAtZ:C,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:rn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:rn,rev:rn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:rn,requiredFeatures:rn,requiredFonts:rn,requiredFormats:rn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:C,specularExponent:C,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:C,strikethroughThickness:C,string:null,stroke:null,strokeDashArray:rn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:C,strokeOpacity:C,strokeWidth:null,style:null,surfaceScale:C,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:rn,tabIndex:C,tableValues:null,target:null,targetX:C,targetY:C,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:rn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:C,underlineThickness:C,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:C,values:null,vAlphabetic:C,vMathematical:C,vectorEffect:null,vHanging:C,vIdeographic:C,version:null,vertAdvY:C,vertOriginX:C,vertOriginY:C,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:C,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:sr}),fr=On({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()}}),pr=On({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:cr}),hr=On({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()}}),Di={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Fi=/[A-Z]/g,mt=/-[a-z]/g,Ri=/^data[-\w.:]+$/i;function Oi(n,e){const t=Le(e);let r=e,i=en;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&Ri.test(e)){if(e.charAt(4)==="-"){const o=e.slice(5).replace(mt,_i);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=e.slice(4);if(!mt.test(o)){let l=o.replace(Fi,Mi);l.charAt(0)!=="-"&&(l="-"+l),e="data"+l}}i=He}return new i(r,e)}function Mi(n){return"-"+n.toLowerCase()}function _i(n){return n.charAt(1).toUpperCase()}const Bi=ar([ur,Ai,fr,pr,hr],"html"),Ve=ar([ur,Ti,fr,pr,hr],"svg");function Ni(n){return n.join(" ").trim()}var Ue={},gt=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,ji=/\n/g,Hi=/^\s*/,Vi=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Ui=/^:\s*/,qi=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,$i=/^[;\s]*/,Wi=/^\s+|\s+$/g,Ki=`
`,dt="/",yt="*",In="",Qi="comment",Gi="declaration",Xi=function(n,e){if(typeof n!="string")throw new TypeError("First argument must be a string");if(!n)return[];e=e||{};var t=1,r=1;function i(d){var k=d.match(ji);k&&(t+=k.length);var S=d.lastIndexOf(Ki);r=~S?d.length-S:r+d.length}function o(){var d={line:t,column:r};return function(k){return k.position=new l(d),s(),k}}function l(d){this.start=d,this.end={line:t,column:r},this.source=e.source}l.prototype.content=n;function a(d){var k=new Error(e.source+":"+t+":"+r+": "+d);if(k.reason=d,k.filename=e.source,k.line=t,k.column=r,k.source=n,!e.silent)throw k}function u(d){var k=d.exec(n);if(k){var S=k[0];return i(S),n=n.slice(S.length),k}}function s(){u(Hi)}function f(d){var k;for(d=d||[];k=c();)k!==!1&&d.push(k);return d}function c(){var d=o();if(!(dt!=n.charAt(0)||yt!=n.charAt(1))){for(var k=2;In!=n.charAt(k)&&(yt!=n.charAt(k)||dt!=n.charAt(k+1));)++k;if(k+=2,In===n.charAt(k-1))return a("End of comment missing");var S=n.slice(2,k-2);return r+=2,i(S),n=n.slice(k),r+=2,d({type:Qi,comment:S})}}function h(){var d=o(),k=u(Vi);if(k){if(c(),!u(Ui))return a("property missing ':'");var S=u(qi),y=d({type:Gi,property:xt(k[0].replace(gt,In)),value:S?xt(S[0].replace(gt,In)):In});return u($i),y}}function p(){var d=[];f(d);for(var k;k=h();)k!==!1&&(d.push(k),f(d));return d}return s(),p()};function xt(n){return n?n.replace(Wi,In):In}var Yi=re&&re.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Ue,"__esModule",{value:!0});Ue.default=Zi;var Ji=Yi(Xi);function Zi(n,e){var t=null;if(!n||typeof n!="string")return t;var r=(0,Ji.default)(n),i=typeof e=="function";return r.forEach(function(o){if(o.type==="declaration"){var l=o.property,a=o.value;i?e(l,a,o):a&&(t=t||{},t[l]=a)}}),t}var ue={};Object.defineProperty(ue,"__esModule",{value:!0});ue.camelCase=void 0;var nl=/^--[a-zA-Z0-9_-]+$/,el=/-([a-z])/g,tl=/^[^-]+$/,rl=/^-(webkit|moz|ms|o|khtml)-/,il=/^-(ms)-/,ll=function(n){return!n||tl.test(n)||nl.test(n)},ol=function(n,e){return e.toUpperCase()},kt=function(n,e){return"".concat(e,"-")},al=function(n,e){return e===void 0&&(e={}),ll(n)?n:(n=n.toLowerCase(),e.reactCompat?n=n.replace(il,kt):n=n.replace(rl,kt),n.replace(el,ol))};ue.camelCase=al;var ul=re&&re.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},sl=ul(Ue),cl=ue;function De(n,e){var t={};return!n||typeof n!="string"||(0,sl.default)(n,function(r,i){r&&i&&(t[(0,cl.camelCase)(r,e)]=i)}),t}De.default=De;var fl=De;const pl=or(fl),mr=gr("end"),qe=gr("start");function gr(n){return e;function e(t){const r=t&&t.position&&t.position[n]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function hl(n){const e=qe(n),t=mr(n);if(e&&t)return{start:e,end:t}}function Vn(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?bt(n.position):"start"in n||"end"in n?bt(n):"line"in n||"column"in n?Fe(n):""}function Fe(n){return wt(n&&n.line)+":"+wt(n&&n.column)}function bt(n){return Fe(n&&n.start)+"-"+Fe(n&&n.end)}function wt(n){return n&&typeof n=="number"?n:1}class J extends Error{constructor(e,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",o={},l=!1;if(t&&("line"in t&&"column"in t?o={place:t}:"start"in t&&"end"in t?o={place:t}:"type"in t?o={ancestors:[t],place:t.position}:o={...t}),typeof e=="string"?i=e:!o.cause&&e&&(l=!0,i=e.message,o.cause=e),!o.ruleId&&!o.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?o.ruleId=r:(o.source=r.slice(0,u),o.ruleId=r.slice(u+1))}if(!o.place&&o.ancestors&&o.ancestors){const u=o.ancestors[o.ancestors.length-1];u&&(o.place=u.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=Vn(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}J.prototype.file="";J.prototype.name="";J.prototype.reason="";J.prototype.message="";J.prototype.stack="";J.prototype.column=void 0;J.prototype.line=void 0;J.prototype.ancestors=void 0;J.prototype.cause=void 0;J.prototype.fatal=void 0;J.prototype.place=void 0;J.prototype.ruleId=void 0;J.prototype.source=void 0;const $e={}.hasOwnProperty,ml=new Map,gl=/[A-Z]/g,dl=new Set(["table","tbody","thead","tfoot","tr"]),yl=new Set(["td","th"]),dr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function xl(n,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=e.filePath||void 0;let r;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=vl(t,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Il(t,e.jsx,e.jsxs)}const i={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:r,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?Ve:Bi,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},o=yr(i,n,void 0);return o&&typeof o!="string"?o:i.create(n,i.Fragment,{children:o||void 0},void 0)}function yr(n,e,t){if(e.type==="element")return kl(n,e,t);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return bl(n,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return Cl(n,e,t);if(e.type==="mdxjsEsm")return wl(n,e);if(e.type==="root")return Sl(n,e,t);if(e.type==="text")return Pl(n,e)}function kl(n,e,t){const r=n.schema;let i=r;e.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Ve,n.schema=i),n.ancestors.push(e);const o=kr(n,e.tagName,!1),l=El(n,e);let a=Ke(n,e);return dl.has(e.tagName)&&(a=a.filter(function(u){return typeof u=="string"?!zi(u):!0})),xr(n,l,o,e),We(l,a),n.ancestors.pop(),n.schema=r,n.create(e,o,l,t)}function bl(n,e){if(e.data&&e.data.estree&&n.evaluater){const r=e.data.estree.body[0];return r.type,n.evaluater.evaluateExpression(r.expression)}$n(n,e.position)}function wl(n,e){if(e.data&&e.data.estree&&n.evaluater)return n.evaluater.evaluateProgram(e.data.estree);$n(n,e.position)}function Cl(n,e,t){const r=n.schema;let i=r;e.name==="svg"&&r.space==="html"&&(i=Ve,n.schema=i),n.ancestors.push(e);const o=e.name===null?n.Fragment:kr(n,e.name,!0),l=zl(n,e),a=Ke(n,e);return xr(n,l,o,e),We(l,a),n.ancestors.pop(),n.schema=r,n.create(e,o,l,t)}function Sl(n,e,t){const r={};return We(r,Ke(n,e)),n.create(e,n.Fragment,r,t)}function Pl(n,e){return e.value}function xr(n,e,t,r){typeof t!="string"&&t!==n.Fragment&&n.passNode&&(e.node=r)}function We(n,e){if(e.length>0){const t=e.length>1?e:e[0];t&&(n.children=t)}}function Il(n,e,t){return r;function r(i,o,l,a){const s=Array.isArray(l.children)?t:e;return a?s(o,l,a):s(o,l)}}function vl(n,e){return t;function t(r,i,o,l){const a=Array.isArray(o.children),u=qe(r);return e(i,o,l,a,{columnNumber:u?u.column-1:void 0,fileName:n,lineNumber:u?u.line:void 0},void 0)}}function El(n,e){const t={};let r,i;for(i in e.properties)if(i!=="children"&&$e.call(e.properties,i)){const o=Ll(n,i,e.properties[i]);if(o){const[l,a]=o;n.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&yl.has(e.tagName)?r=a:t[l]=a}}if(r){const o=t.style||(t.style={});o[n.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function zl(n,e){const t={};for(const r of e.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&n.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const a=l.properties[0];a.type,Object.assign(t,n.evaluater.evaluateExpression(a.argument))}else $n(n,e.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&n.evaluater){const a=r.value.data.estree.body[0];a.type,o=n.evaluater.evaluateExpression(a.expression)}else $n(n,e.position);else o=r.value===null?!0:r.value;t[i]=o}return t}function Ke(n,e){const t=[];let r=-1;const i=n.passKeys?new Map:ml;for(;++r<e.children.length;){const o=e.children[r];let l;if(n.passKeys){const u=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(u){const s=i.get(u)||0;l=u+"-"+s,i.set(u,s+1)}}const a=yr(n,o,l);a!==void 0&&t.push(a)}return t}function Ll(n,e,t){const r=Oi(n.schema,e);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?Si(t):Ni(t)),r.property==="style"){let i=typeof t=="object"?t:Al(n,String(t));return n.stylePropertyNameCase==="css"&&(i=Tl(i)),["style",i]}return[n.elementAttributeNameCase==="react"&&r.space?Di[r.property]||r.property:r.attribute,t]}}function Al(n,e){try{return pl(e,{reactCompat:!0})}catch(t){if(n.ignoreInvalidStyle)return{};const r=t,i=new J("Cannot parse `style` attribute",{ancestors:n.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=n.filePath||void 0,i.url=dr+"#cannot-parse-style-attribute",i}}function kr(n,e,t){let r;if(!t)r={type:"Literal",value:e};else if(e.includes(".")){const i=e.split(".");let o=-1,l;for(;++o<i.length;){const a=ft(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=l}else r=ft(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(r.type==="Literal"){const i=r.value;return $e.call(n.components,i)?n.components[i]:i}if(n.evaluater)return n.evaluater.evaluateExpression(r);$n(n)}function $n(n,e){const t=new J("Cannot handle MDX estrees without `createEvaluater`",{ancestors:n.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=n.filePath||void 0,t.url=dr+"#cannot-handle-mdx-estrees-without-createevaluater",t}function Tl(n){const e={};let t;for(t in n)$e.call(n,t)&&(e[Dl(t)]=n[t]);return e}function Dl(n){let e=n.replace(gl,Fl);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function Fl(n){return"-"+n.toLowerCase()}const ge={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Rl={};function Qe(n,e){const t=Rl,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return br(n,r,i)}function br(n,e,t){if(Ol(n)){if("value"in n)return n.type==="html"&&!t?"":n.value;if(e&&"alt"in n&&n.alt)return n.alt;if("children"in n)return Ct(n.children,e,t)}return Array.isArray(n)?Ct(n,e,t):""}function Ct(n,e,t){const r=[];let i=-1;for(;++i<n.length;)r[i]=br(n[i],e,t);return r.join("")}function Ol(n){return!!(n&&typeof n=="object")}const St=document.createElement("i");function Ge(n){const e="&"+n+";";St.innerHTML=e;const t=St.textContent;return t.charCodeAt(t.length-1)===59&&n!=="semi"||t===e?!1:t}function ln(n,e,t,r){const i=n.length;let o=0,l;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,t=t>0?t:0,r.length<1e4)l=Array.from(r),l.unshift(e,t),n.splice(...l);else for(t&&n.splice(e,t);o<r.length;)l=r.slice(o,o+1e4),l.unshift(e,0),n.splice(...l),o+=1e4,e+=1e4}function on(n,e){return n.length>0?(ln(n,n.length,0,e),n):e}const Pt={}.hasOwnProperty;function wr(n){const e={};let t=-1;for(;++t<n.length;)Ml(e,n[t]);return e}function Ml(n,e){let t;for(t in e){const i=(Pt.call(n,t)?n[t]:void 0)||(n[t]={}),o=e[t];let l;if(o)for(l in o){Pt.call(i,l)||(i[l]=[]);const a=o[l];_l(i[l],Array.isArray(a)?a:a?[a]:[])}}}function _l(n,e){let t=-1;const r=[];for(;++t<e.length;)(e[t].add==="after"?n:r).push(e[t]);ln(n,0,0,r)}function Cr(n,e){const t=Number.parseInt(n,e);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function fn(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Z=wn(/[A-Za-z]/),Y=wn(/[\dA-Za-z]/),Bl=wn(/[#-'*+\--9=?A-Z^-~]/);function ie(n){return n!==null&&(n<32||n===127)}const Re=wn(/\d/),Nl=wn(/[\dA-Fa-f]/),jl=wn(/[!-/:-@[-`{-~]/);function L(n){return n!==null&&n<-2}function V(n){return n!==null&&(n<0||n===32)}function R(n){return n===-2||n===-1||n===32}const se=wn(new RegExp("\\p{P}|\\p{S}","u")),vn=wn(/\s/);function wn(n){return e;function e(t){return t!==null&&t>-1&&n.test(String.fromCharCode(t))}}function Mn(n){const e=[];let t=-1,r=0,i=0;for(;++t<n.length;){const o=n.charCodeAt(t);let l="";if(o===37&&Y(n.charCodeAt(t+1))&&Y(n.charCodeAt(t+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=n.charCodeAt(t+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(e.push(n.slice(r,t),encodeURIComponent(l)),r=t+i+1,l=""),i&&(t+=i,i=0)}return e.join("")+n.slice(r)}function M(n,e,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(u){return R(u)?(n.enter(t),a(u)):e(u)}function a(u){return R(u)&&o++<i?(n.consume(u),a):(n.exit(t),e(u))}}const Hl={tokenize:Vl};function Vl(n){const e=n.attempt(this.parser.constructs.contentInitial,r,i);let t;return e;function r(a){if(a===null){n.consume(a);return}return n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),M(n,e,"linePrefix")}function i(a){return n.enter("paragraph"),o(a)}function o(a){const u=n.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=u),t=u,l(a)}function l(a){if(a===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(a);return}return L(a)?(n.consume(a),n.exit("chunkText"),o):(n.consume(a),l)}}const Ul={tokenize:ql},It={tokenize:$l};function ql(n){const e=this,t=[];let r=0,i,o,l;return a;function a(P){if(r<t.length){const D=t[r];return e.containerState=D[1],n.attempt(D[0].continuation,u,s)(P)}return s(P)}function u(P){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&v();const D=e.events.length;let F=D,w;for(;F--;)if(e.events[F][0]==="exit"&&e.events[F][1].type==="chunkFlow"){w=e.events[F][1].end;break}y(r);let _=D;for(;_<e.events.length;)e.events[_][1].end={...w},_++;return ln(e.events,F+1,0,e.events.slice(D)),e.events.length=_,s(P)}return a(P)}function s(P){if(r===t.length){if(!i)return h(P);if(i.currentConstruct&&i.currentConstruct.concrete)return d(P);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},n.check(It,f,c)(P)}function f(P){return i&&v(),y(r),h(P)}function c(P){return e.parser.lazy[e.now().line]=r!==t.length,l=e.now().offset,d(P)}function h(P){return e.containerState={},n.attempt(It,p,d)(P)}function p(P){return r++,t.push([e.currentConstruct,e.containerState]),h(P)}function d(P){if(P===null){i&&v(),y(0),n.consume(P);return}return i=i||e.parser.flow(e.now()),n.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),k(P)}function k(P){if(P===null){S(n.exit("chunkFlow"),!0),y(0),n.consume(P);return}return L(P)?(n.consume(P),S(n.exit("chunkFlow")),r=0,e.interrupt=void 0,a):(n.consume(P),k)}function S(P,D){const F=e.sliceStream(P);if(D&&F.push(null),P.previous=o,o&&(o.next=P),o=P,i.defineSkip(P.start),i.write(F),e.parser.lazy[P.start.line]){let w=i.events.length;for(;w--;)if(i.events[w][1].start.offset<l&&(!i.events[w][1].end||i.events[w][1].end.offset>l))return;const _=e.events.length;let q=_,N,x;for(;q--;)if(e.events[q][0]==="exit"&&e.events[q][1].type==="chunkFlow"){if(N){x=e.events[q][1].end;break}N=!0}for(y(r),w=_;w<e.events.length;)e.events[w][1].end={...x},w++;ln(e.events,q+1,0,e.events.slice(_)),e.events.length=w}}function y(P){let D=t.length;for(;D-- >P;){const F=t[D];e.containerState=F[1],F[0].exit.call(e,n)}t.length=P}function v(){i.write([null]),o=void 0,i=void 0,e.containerState._closeFlow=void 0}}function $l(n,e,t){return M(n,n.attempt(this.parser.constructs.document,e,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Rn(n){if(n===null||V(n)||vn(n))return 1;if(se(n))return 2}function ce(n,e,t){const r=[];let i=-1;for(;++i<n.length;){const o=n[i].resolveAll;o&&!r.includes(o)&&(e=o(e,t),r.push(o))}return e}const Oe={name:"attention",resolveAll:Wl,tokenize:Kl};function Wl(n,e){let t=-1,r,i,o,l,a,u,s,f;for(;++t<n.length;)if(n[t][0]==="enter"&&n[t][1].type==="attentionSequence"&&n[t][1]._close){for(r=t;r--;)if(n[r][0]==="exit"&&n[r][1].type==="attentionSequence"&&n[r][1]._open&&e.sliceSerialize(n[r][1]).charCodeAt(0)===e.sliceSerialize(n[t][1]).charCodeAt(0)){if((n[r][1]._close||n[t][1]._open)&&(n[t][1].end.offset-n[t][1].start.offset)%3&&!((n[r][1].end.offset-n[r][1].start.offset+n[t][1].end.offset-n[t][1].start.offset)%3))continue;u=n[r][1].end.offset-n[r][1].start.offset>1&&n[t][1].end.offset-n[t][1].start.offset>1?2:1;const c={...n[r][1].end},h={...n[t][1].start};vt(c,-u),vt(h,u),l={type:u>1?"strongSequence":"emphasisSequence",start:c,end:{...n[r][1].end}},a={type:u>1?"strongSequence":"emphasisSequence",start:{...n[t][1].start},end:h},o={type:u>1?"strongText":"emphasisText",start:{...n[r][1].end},end:{...n[t][1].start}},i={type:u>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},n[r][1].end={...l.start},n[t][1].start={...a.end},s=[],n[r][1].end.offset-n[r][1].start.offset&&(s=on(s,[["enter",n[r][1],e],["exit",n[r][1],e]])),s=on(s,[["enter",i,e],["enter",l,e],["exit",l,e],["enter",o,e]]),s=on(s,ce(e.parser.constructs.insideSpan.null,n.slice(r+1,t),e)),s=on(s,[["exit",o,e],["enter",a,e],["exit",a,e],["exit",i,e]]),n[t][1].end.offset-n[t][1].start.offset?(f=2,s=on(s,[["enter",n[t][1],e],["exit",n[t][1],e]])):f=0,ln(n,r-1,t-r+3,s),t=r+s.length-f-2;break}}for(t=-1;++t<n.length;)n[t][1].type==="attentionSequence"&&(n[t][1].type="data");return n}function Kl(n,e){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Rn(r);let o;return l;function l(u){return o=u,n.enter("attentionSequence"),a(u)}function a(u){if(u===o)return n.consume(u),a;const s=n.exit("attentionSequence"),f=Rn(u),c=!f||f===2&&i||t.includes(u),h=!i||i===2&&f||t.includes(r);return s._open=!!(o===42?c:c&&(i||!h)),s._close=!!(o===42?h:h&&(f||!c)),e(u)}}function vt(n,e){n.column+=e,n.offset+=e,n._bufferIndex+=e}const Ql={name:"autolink",tokenize:Gl};function Gl(n,e,t){let r=0;return i;function i(p){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(p),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),o}function o(p){return Z(p)?(n.consume(p),l):p===64?t(p):s(p)}function l(p){return p===43||p===45||p===46||Y(p)?(r=1,a(p)):s(p)}function a(p){return p===58?(n.consume(p),r=0,u):(p===43||p===45||p===46||Y(p))&&r++<32?(n.consume(p),a):(r=0,s(p))}function u(p){return p===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(p),n.exit("autolinkMarker"),n.exit("autolink"),e):p===null||p===32||p===60||ie(p)?t(p):(n.consume(p),u)}function s(p){return p===64?(n.consume(p),f):Bl(p)?(n.consume(p),s):t(p)}function f(p){return Y(p)?c(p):t(p)}function c(p){return p===46?(n.consume(p),r=0,f):p===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(p),n.exit("autolinkMarker"),n.exit("autolink"),e):h(p)}function h(p){if((p===45||Y(p))&&r++<63){const d=p===45?h:c;return n.consume(p),d}return t(p)}}const Qn={partial:!0,tokenize:Xl};function Xl(n,e,t){return r;function r(o){return R(o)?M(n,i,"linePrefix")(o):i(o)}function i(o){return o===null||L(o)?e(o):t(o)}}const Sr={continuation:{tokenize:Jl},exit:Zl,name:"blockQuote",tokenize:Yl};function Yl(n,e,t){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(n.enter("blockQuote",{_container:!0}),a.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(l),n.exit("blockQuoteMarker"),o}return t(l)}function o(l){return R(l)?(n.enter("blockQuotePrefixWhitespace"),n.consume(l),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),e):(n.exit("blockQuotePrefix"),e(l))}}function Jl(n,e,t){const r=this;return i;function i(l){return R(l)?M(n,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return n.attempt(Sr,e,t)(l)}}function Zl(n){n.exit("blockQuote")}const Pr={name:"characterEscape",tokenize:no};function no(n,e,t){return r;function r(o){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(o),n.exit("escapeMarker"),i}function i(o){return jl(o)?(n.enter("characterEscapeValue"),n.consume(o),n.exit("characterEscapeValue"),n.exit("characterEscape"),e):t(o)}}const Ir={name:"characterReference",tokenize:eo};function eo(n,e,t){const r=this;let i=0,o,l;return a;function a(c){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(c),n.exit("characterReferenceMarker"),u}function u(c){return c===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(c),n.exit("characterReferenceMarkerNumeric"),s):(n.enter("characterReferenceValue"),o=31,l=Y,f(c))}function s(c){return c===88||c===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(c),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),o=6,l=Nl,f):(n.enter("characterReferenceValue"),o=7,l=Re,f(c))}function f(c){if(c===59&&i){const h=n.exit("characterReferenceValue");return l===Y&&!Ge(r.sliceSerialize(h))?t(c):(n.enter("characterReferenceMarker"),n.consume(c),n.exit("characterReferenceMarker"),n.exit("characterReference"),e)}return l(c)&&i++<o?(n.consume(c),f):t(c)}}const Et={partial:!0,tokenize:ro},zt={concrete:!0,name:"codeFenced",tokenize:to};function to(n,e,t){const r=this,i={partial:!0,tokenize:F};let o=0,l=0,a;return u;function u(w){return s(w)}function s(w){const _=r.events[r.events.length-1];return o=_&&_[1].type==="linePrefix"?_[2].sliceSerialize(_[1],!0).length:0,a=w,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),f(w)}function f(w){return w===a?(l++,n.consume(w),f):l<3?t(w):(n.exit("codeFencedFenceSequence"),R(w)?M(n,c,"whitespace")(w):c(w))}function c(w){return w===null||L(w)?(n.exit("codeFencedFence"),r.interrupt?e(w):n.check(Et,k,D)(w)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),h(w))}function h(w){return w===null||L(w)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),c(w)):R(w)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),M(n,p,"whitespace")(w)):w===96&&w===a?t(w):(n.consume(w),h)}function p(w){return w===null||L(w)?c(w):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),d(w))}function d(w){return w===null||L(w)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),c(w)):w===96&&w===a?t(w):(n.consume(w),d)}function k(w){return n.attempt(i,D,S)(w)}function S(w){return n.enter("lineEnding"),n.consume(w),n.exit("lineEnding"),y}function y(w){return o>0&&R(w)?M(n,v,"linePrefix",o+1)(w):v(w)}function v(w){return w===null||L(w)?n.check(Et,k,D)(w):(n.enter("codeFlowValue"),P(w))}function P(w){return w===null||L(w)?(n.exit("codeFlowValue"),v(w)):(n.consume(w),P)}function D(w){return n.exit("codeFenced"),e(w)}function F(w,_,q){let N=0;return x;function x(B){return w.enter("lineEnding"),w.consume(B),w.exit("lineEnding"),E}function E(B){return w.enter("codeFencedFence"),R(B)?M(w,z,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):z(B)}function z(B){return B===a?(w.enter("codeFencedFenceSequence"),j(B)):q(B)}function j(B){return B===a?(N++,w.consume(B),j):N>=l?(w.exit("codeFencedFenceSequence"),R(B)?M(w,W,"whitespace")(B):W(B)):q(B)}function W(B){return B===null||L(B)?(w.exit("codeFencedFence"),_(B)):q(B)}}}function ro(n,e,t){const r=this;return i;function i(l){return l===null?t(l):(n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?t(l):e(l)}}const de={name:"codeIndented",tokenize:lo},io={partial:!0,tokenize:oo};function lo(n,e,t){const r=this;return i;function i(s){return n.enter("codeIndented"),M(n,o,"linePrefix",5)(s)}function o(s){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(s):t(s)}function l(s){return s===null?u(s):L(s)?n.attempt(io,l,u)(s):(n.enter("codeFlowValue"),a(s))}function a(s){return s===null||L(s)?(n.exit("codeFlowValue"),l(s)):(n.consume(s),a)}function u(s){return n.exit("codeIndented"),e(s)}}function oo(n,e,t){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?t(l):L(l)?(n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),i):M(n,o,"linePrefix",5)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(l):L(l)?i(l):t(l)}}const ao={name:"codeText",previous:so,resolve:uo,tokenize:co};function uo(n){let e=n.length-4,t=3,r,i;if((n[t][1].type==="lineEnding"||n[t][1].type==="space")&&(n[e][1].type==="lineEnding"||n[e][1].type==="space")){for(r=t;++r<e;)if(n[r][1].type==="codeTextData"){n[t][1].type="codeTextPadding",n[e][1].type="codeTextPadding",t+=2,e-=2;break}}for(r=t-1,e++;++r<=e;)i===void 0?r!==e&&n[r][1].type!=="lineEnding"&&(i=r):(r===e||n[r][1].type==="lineEnding")&&(n[i][1].type="codeTextData",r!==i+2&&(n[i][1].end=n[r-1][1].end,n.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return n}function so(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function co(n,e,t){let r=0,i,o;return l;function l(c){return n.enter("codeText"),n.enter("codeTextSequence"),a(c)}function a(c){return c===96?(n.consume(c),r++,a):(n.exit("codeTextSequence"),u(c))}function u(c){return c===null?t(c):c===32?(n.enter("space"),n.consume(c),n.exit("space"),u):c===96?(o=n.enter("codeTextSequence"),i=0,f(c)):L(c)?(n.enter("lineEnding"),n.consume(c),n.exit("lineEnding"),u):(n.enter("codeTextData"),s(c))}function s(c){return c===null||c===32||c===96||L(c)?(n.exit("codeTextData"),u(c)):(n.consume(c),s)}function f(c){return c===96?(n.consume(c),i++,f):i===r?(n.exit("codeTextSequence"),n.exit("codeText"),e(c)):(o.type="codeTextData",s(c))}}class fo{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,t,r){const i=t||0;this.setCursor(Math.trunc(e));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&jn(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),jn(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),jn(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);jn(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);jn(this.left,t.reverse())}}}function jn(n,e){let t=0;if(e.length<1e4)n.push(...e);else for(;t<e.length;)n.push(...e.slice(t,t+1e4)),t+=1e4}function vr(n){const e={};let t=-1,r,i,o,l,a,u,s;const f=new fo(n);for(;++t<f.length;){for(;t in e;)t=e[t];if(r=f.get(t),t&&r[1].type==="chunkFlow"&&f.get(t-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,po(f,t)),t=e[t],s=!0);else if(r[1]._container){for(o=t,i=void 0;o--;)if(l=f.get(o),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},a=f.slice(i,t),a.unshift(r),f.splice(i,t-i+1,a))}}return ln(n,0,Number.POSITIVE_INFINITY,f.slice(0)),!s}function po(n,e){const t=n.get(e)[1],r=n.get(e)[2];let i=e-1;const o=[];let l=t._tokenizer;l||(l=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,u=[],s={};let f,c,h=-1,p=t,d=0,k=0;const S=[k];for(;p;){for(;n.get(++i)[1]!==p;);o.push(i),p._tokenizer||(f=r.sliceStream(p),p.next||f.push(null),c&&l.defineSkip(p.start),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(f),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=t;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(k=h+1,S.push(k),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(l.events=[],p?(p._tokenizer=void 0,p.previous=void 0):S.pop(),h=S.length;h--;){const y=a.slice(S[h],S[h+1]),v=o.pop();u.push([v,v+y.length-1]),n.splice(v,2,y)}for(u.reverse(),h=-1;++h<u.length;)s[d+u[h][0]]=d+u[h][1],d+=u[h][1]-u[h][0]-1;return s}const ho={resolve:go,tokenize:yo},mo={partial:!0,tokenize:xo};function go(n){return vr(n),n}function yo(n,e){let t;return r;function r(a){return n.enter("content"),t=n.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):L(a)?n.check(mo,l,o)(a):(n.consume(a),i)}function o(a){return n.exit("chunkContent"),n.exit("content"),e(a)}function l(a){return n.consume(a),n.exit("chunkContent"),t.next=n.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function xo(n,e,t){const r=this;return i;function i(l){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),M(n,o,"linePrefix")}function o(l){if(l===null||L(l))return t(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(l):n.interrupt(r.parser.constructs.flow,t,e)(l)}}function Er(n,e,t,r,i,o,l,a,u){const s=u||Number.POSITIVE_INFINITY;let f=0;return c;function c(y){return y===60?(n.enter(r),n.enter(i),n.enter(o),n.consume(y),n.exit(o),h):y===null||y===32||y===41||ie(y)?t(y):(n.enter(r),n.enter(l),n.enter(a),n.enter("chunkString",{contentType:"string"}),k(y))}function h(y){return y===62?(n.enter(o),n.consume(y),n.exit(o),n.exit(i),n.exit(r),e):(n.enter(a),n.enter("chunkString",{contentType:"string"}),p(y))}function p(y){return y===62?(n.exit("chunkString"),n.exit(a),h(y)):y===null||y===60||L(y)?t(y):(n.consume(y),y===92?d:p)}function d(y){return y===60||y===62||y===92?(n.consume(y),p):p(y)}function k(y){return!f&&(y===null||y===41||V(y))?(n.exit("chunkString"),n.exit(a),n.exit(l),n.exit(r),e(y)):f<s&&y===40?(n.consume(y),f++,k):y===41?(n.consume(y),f--,k):y===null||y===32||y===40||ie(y)?t(y):(n.consume(y),y===92?S:k)}function S(y){return y===40||y===41||y===92?(n.consume(y),k):k(y)}}function zr(n,e,t,r,i,o){const l=this;let a=0,u;return s;function s(p){return n.enter(r),n.enter(i),n.consume(p),n.exit(i),n.enter(o),f}function f(p){return a>999||p===null||p===91||p===93&&!u||p===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?t(p):p===93?(n.exit(o),n.enter(i),n.consume(p),n.exit(i),n.exit(r),e):L(p)?(n.enter("lineEnding"),n.consume(p),n.exit("lineEnding"),f):(n.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||L(p)||a++>999?(n.exit("chunkString"),f(p)):(n.consume(p),u||(u=!R(p)),p===92?h:c)}function h(p){return p===91||p===92||p===93?(n.consume(p),a++,c):c(p)}}function Lr(n,e,t,r,i,o){let l;return a;function a(h){return h===34||h===39||h===40?(n.enter(r),n.enter(i),n.consume(h),n.exit(i),l=h===40?41:h,u):t(h)}function u(h){return h===l?(n.enter(i),n.consume(h),n.exit(i),n.exit(r),e):(n.enter(o),s(h))}function s(h){return h===l?(n.exit(o),u(l)):h===null?t(h):L(h)?(n.enter("lineEnding"),n.consume(h),n.exit("lineEnding"),M(n,s,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===l||h===null||L(h)?(n.exit("chunkString"),s(h)):(n.consume(h),h===92?c:f)}function c(h){return h===l||h===92?(n.consume(h),f):f(h)}}function Un(n,e){let t;return r;function r(i){return L(i)?(n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),t=!0,r):R(i)?M(n,r,t?"linePrefix":"lineSuffix")(i):e(i)}}const ko={name:"definition",tokenize:wo},bo={partial:!0,tokenize:Co};function wo(n,e,t){const r=this;let i;return o;function o(p){return n.enter("definition"),l(p)}function l(p){return zr.call(r,n,a,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return i=fn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(n.enter("definitionMarker"),n.consume(p),n.exit("definitionMarker"),u):t(p)}function u(p){return V(p)?Un(n,s)(p):s(p)}function s(p){return Er(n,f,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function f(p){return n.attempt(bo,c,c)(p)}function c(p){return R(p)?M(n,h,"whitespace")(p):h(p)}function h(p){return p===null||L(p)?(n.exit("definition"),r.parser.defined.push(i),e(p)):t(p)}}function Co(n,e,t){return r;function r(a){return V(a)?Un(n,i)(a):t(a)}function i(a){return Lr(n,o,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return R(a)?M(n,l,"whitespace")(a):l(a)}function l(a){return a===null||L(a)?e(a):t(a)}}const So={name:"hardBreakEscape",tokenize:Po};function Po(n,e,t){return r;function r(o){return n.enter("hardBreakEscape"),n.consume(o),i}function i(o){return L(o)?(n.exit("hardBreakEscape"),e(o)):t(o)}}const Io={name:"headingAtx",resolve:vo,tokenize:Eo};function vo(n,e){let t=n.length-2,r=3,i,o;return n[r][1].type==="whitespace"&&(r+=2),t-2>r&&n[t][1].type==="whitespace"&&(t-=2),n[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&n[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:n[r][1].start,end:n[t][1].end},o={type:"chunkText",start:n[r][1].start,end:n[t][1].end,contentType:"text"},ln(n,r,t-r+1,[["enter",i,e],["enter",o,e],["exit",o,e],["exit",i,e]])),n}function Eo(n,e,t){let r=0;return i;function i(f){return n.enter("atxHeading"),o(f)}function o(f){return n.enter("atxHeadingSequence"),l(f)}function l(f){return f===35&&r++<6?(n.consume(f),l):f===null||V(f)?(n.exit("atxHeadingSequence"),a(f)):t(f)}function a(f){return f===35?(n.enter("atxHeadingSequence"),u(f)):f===null||L(f)?(n.exit("atxHeading"),e(f)):R(f)?M(n,a,"whitespace")(f):(n.enter("atxHeadingText"),s(f))}function u(f){return f===35?(n.consume(f),u):(n.exit("atxHeadingSequence"),a(f))}function s(f){return f===null||f===35||V(f)?(n.exit("atxHeadingText"),a(f)):(n.consume(f),s)}}const zo=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Lt=["pre","script","style","textarea"],Lo={concrete:!0,name:"htmlFlow",resolveTo:Do,tokenize:Fo},Ao={partial:!0,tokenize:Oo},To={partial:!0,tokenize:Ro};function Do(n){let e=n.length;for(;e--&&!(n[e][0]==="enter"&&n[e][1].type==="htmlFlow"););return e>1&&n[e-2][1].type==="linePrefix"&&(n[e][1].start=n[e-2][1].start,n[e+1][1].start=n[e-2][1].start,n.splice(e-2,2)),n}function Fo(n,e,t){const r=this;let i,o,l,a,u;return s;function s(g){return f(g)}function f(g){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(g),c}function c(g){return g===33?(n.consume(g),h):g===47?(n.consume(g),o=!0,k):g===63?(n.consume(g),i=3,r.interrupt?e:m):Z(g)?(n.consume(g),l=String.fromCharCode(g),S):t(g)}function h(g){return g===45?(n.consume(g),i=2,p):g===91?(n.consume(g),i=5,a=0,d):Z(g)?(n.consume(g),i=4,r.interrupt?e:m):t(g)}function p(g){return g===45?(n.consume(g),r.interrupt?e:m):t(g)}function d(g){const sn="CDATA[";return g===sn.charCodeAt(a++)?(n.consume(g),a===sn.length?r.interrupt?e:z:d):t(g)}function k(g){return Z(g)?(n.consume(g),l=String.fromCharCode(g),S):t(g)}function S(g){if(g===null||g===47||g===62||V(g)){const sn=g===47,Cn=l.toLowerCase();return!sn&&!o&&Lt.includes(Cn)?(i=1,r.interrupt?e(g):z(g)):zo.includes(l.toLowerCase())?(i=6,sn?(n.consume(g),y):r.interrupt?e(g):z(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(g):o?v(g):P(g))}return g===45||Y(g)?(n.consume(g),l+=String.fromCharCode(g),S):t(g)}function y(g){return g===62?(n.consume(g),r.interrupt?e:z):t(g)}function v(g){return R(g)?(n.consume(g),v):x(g)}function P(g){return g===47?(n.consume(g),x):g===58||g===95||Z(g)?(n.consume(g),D):R(g)?(n.consume(g),P):x(g)}function D(g){return g===45||g===46||g===58||g===95||Y(g)?(n.consume(g),D):F(g)}function F(g){return g===61?(n.consume(g),w):R(g)?(n.consume(g),F):P(g)}function w(g){return g===null||g===60||g===61||g===62||g===96?t(g):g===34||g===39?(n.consume(g),u=g,_):R(g)?(n.consume(g),w):q(g)}function _(g){return g===u?(n.consume(g),u=null,N):g===null||L(g)?t(g):(n.consume(g),_)}function q(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||V(g)?F(g):(n.consume(g),q)}function N(g){return g===47||g===62||R(g)?P(g):t(g)}function x(g){return g===62?(n.consume(g),E):t(g)}function E(g){return g===null||L(g)?z(g):R(g)?(n.consume(g),E):t(g)}function z(g){return g===45&&i===2?(n.consume(g),X):g===60&&i===1?(n.consume(g),Q):g===62&&i===4?(n.consume(g),un):g===63&&i===3?(n.consume(g),m):g===93&&i===5?(n.consume(g),mn):L(g)&&(i===6||i===7)?(n.exit("htmlFlowData"),n.check(Ao,gn,j)(g)):g===null||L(g)?(n.exit("htmlFlowData"),j(g)):(n.consume(g),z)}function j(g){return n.check(To,W,gn)(g)}function W(g){return n.enter("lineEnding"),n.consume(g),n.exit("lineEnding"),B}function B(g){return g===null||L(g)?j(g):(n.enter("htmlFlowData"),z(g))}function X(g){return g===45?(n.consume(g),m):z(g)}function Q(g){return g===47?(n.consume(g),l="",an):z(g)}function an(g){if(g===62){const sn=l.toLowerCase();return Lt.includes(sn)?(n.consume(g),un):z(g)}return Z(g)&&l.length<8?(n.consume(g),l+=String.fromCharCode(g),an):z(g)}function mn(g){return g===93?(n.consume(g),m):z(g)}function m(g){return g===62?(n.consume(g),un):g===45&&i===2?(n.consume(g),m):z(g)}function un(g){return g===null||L(g)?(n.exit("htmlFlowData"),gn(g)):(n.consume(g),un)}function gn(g){return n.exit("htmlFlow"),e(g)}}function Ro(n,e,t){const r=this;return i;function i(l){return L(l)?(n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),o):t(l)}function o(l){return r.parser.lazy[r.now().line]?t(l):e(l)}}function Oo(n,e,t){return r;function r(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),n.attempt(Qn,e,t)}}const Mo={name:"htmlText",tokenize:_o};function _o(n,e,t){const r=this;let i,o,l;return a;function a(m){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(m),u}function u(m){return m===33?(n.consume(m),s):m===47?(n.consume(m),F):m===63?(n.consume(m),P):Z(m)?(n.consume(m),q):t(m)}function s(m){return m===45?(n.consume(m),f):m===91?(n.consume(m),o=0,d):Z(m)?(n.consume(m),v):t(m)}function f(m){return m===45?(n.consume(m),p):t(m)}function c(m){return m===null?t(m):m===45?(n.consume(m),h):L(m)?(l=c,Q(m)):(n.consume(m),c)}function h(m){return m===45?(n.consume(m),p):c(m)}function p(m){return m===62?X(m):m===45?h(m):c(m)}function d(m){const un="CDATA[";return m===un.charCodeAt(o++)?(n.consume(m),o===un.length?k:d):t(m)}function k(m){return m===null?t(m):m===93?(n.consume(m),S):L(m)?(l=k,Q(m)):(n.consume(m),k)}function S(m){return m===93?(n.consume(m),y):k(m)}function y(m){return m===62?X(m):m===93?(n.consume(m),y):k(m)}function v(m){return m===null||m===62?X(m):L(m)?(l=v,Q(m)):(n.consume(m),v)}function P(m){return m===null?t(m):m===63?(n.consume(m),D):L(m)?(l=P,Q(m)):(n.consume(m),P)}function D(m){return m===62?X(m):P(m)}function F(m){return Z(m)?(n.consume(m),w):t(m)}function w(m){return m===45||Y(m)?(n.consume(m),w):_(m)}function _(m){return L(m)?(l=_,Q(m)):R(m)?(n.consume(m),_):X(m)}function q(m){return m===45||Y(m)?(n.consume(m),q):m===47||m===62||V(m)?N(m):t(m)}function N(m){return m===47?(n.consume(m),X):m===58||m===95||Z(m)?(n.consume(m),x):L(m)?(l=N,Q(m)):R(m)?(n.consume(m),N):X(m)}function x(m){return m===45||m===46||m===58||m===95||Y(m)?(n.consume(m),x):E(m)}function E(m){return m===61?(n.consume(m),z):L(m)?(l=E,Q(m)):R(m)?(n.consume(m),E):N(m)}function z(m){return m===null||m===60||m===61||m===62||m===96?t(m):m===34||m===39?(n.consume(m),i=m,j):L(m)?(l=z,Q(m)):R(m)?(n.consume(m),z):(n.consume(m),W)}function j(m){return m===i?(n.consume(m),i=void 0,B):m===null?t(m):L(m)?(l=j,Q(m)):(n.consume(m),j)}function W(m){return m===null||m===34||m===39||m===60||m===61||m===96?t(m):m===47||m===62||V(m)?N(m):(n.consume(m),W)}function B(m){return m===47||m===62||V(m)?N(m):t(m)}function X(m){return m===62?(n.consume(m),n.exit("htmlTextData"),n.exit("htmlText"),e):t(m)}function Q(m){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(m),n.exit("lineEnding"),an}function an(m){return R(m)?M(n,mn,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):mn(m)}function mn(m){return n.enter("htmlTextData"),l(m)}}const Xe={name:"labelEnd",resolveAll:Ho,resolveTo:Vo,tokenize:Uo},Bo={tokenize:qo},No={tokenize:$o},jo={tokenize:Wo};function Ho(n){let e=-1;const t=[];for(;++e<n.length;){const r=n[e][1];if(t.push(n[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",e+=i}}return n.length!==t.length&&ln(n,0,n.length,t),n}function Vo(n,e){let t=n.length,r=0,i,o,l,a;for(;t--;)if(i=n[t][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;n[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(n[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=t);const u={type:n[o][1].type==="labelLink"?"link":"image",start:{...n[o][1].start},end:{...n[n.length-1][1].end}},s={type:"label",start:{...n[o][1].start},end:{...n[l][1].end}},f={type:"labelText",start:{...n[o+r+2][1].end},end:{...n[l-2][1].start}};return a=[["enter",u,e],["enter",s,e]],a=on(a,n.slice(o+1,o+r+3)),a=on(a,[["enter",f,e]]),a=on(a,ce(e.parser.constructs.insideSpan.null,n.slice(o+r+4,l-3),e)),a=on(a,[["exit",f,e],n[l-2],n[l-1],["exit",s,e]]),a=on(a,n.slice(l+1)),a=on(a,[["exit",u,e]]),ln(n,o,n.length,a),n}function Uo(n,e,t){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(h){return o?o._inactive?c(h):(l=r.parser.defined.includes(fn(r.sliceSerialize({start:o.end,end:r.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(h),n.exit("labelMarker"),n.exit("labelEnd"),u):t(h)}function u(h){return h===40?n.attempt(Bo,f,l?f:c)(h):h===91?n.attempt(No,f,l?s:c)(h):l?f(h):c(h)}function s(h){return n.attempt(jo,f,c)(h)}function f(h){return e(h)}function c(h){return o._balanced=!0,t(h)}}function qo(n,e,t){return r;function r(c){return n.enter("resource"),n.enter("resourceMarker"),n.consume(c),n.exit("resourceMarker"),i}function i(c){return V(c)?Un(n,o)(c):o(c)}function o(c){return c===41?f(c):Er(n,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function l(c){return V(c)?Un(n,u)(c):f(c)}function a(c){return t(c)}function u(c){return c===34||c===39||c===40?Lr(n,s,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function s(c){return V(c)?Un(n,f)(c):f(c)}function f(c){return c===41?(n.enter("resourceMarker"),n.consume(c),n.exit("resourceMarker"),n.exit("resource"),e):t(c)}}function $o(n,e,t){const r=this;return i;function i(a){return zr.call(r,n,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(fn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(a):t(a)}function l(a){return t(a)}}function Wo(n,e,t){return r;function r(o){return n.enter("reference"),n.enter("referenceMarker"),n.consume(o),n.exit("referenceMarker"),i}function i(o){return o===93?(n.enter("referenceMarker"),n.consume(o),n.exit("referenceMarker"),n.exit("reference"),e):t(o)}}const Ko={name:"labelStartImage",resolveAll:Xe.resolveAll,tokenize:Qo};function Qo(n,e,t){const r=this;return i;function i(a){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(a),n.exit("labelImageMarker"),o}function o(a){return a===91?(n.enter("labelMarker"),n.consume(a),n.exit("labelMarker"),n.exit("labelImage"),l):t(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):e(a)}}const Go={name:"labelStartLink",resolveAll:Xe.resolveAll,tokenize:Xo};function Xo(n,e,t){const r=this;return i;function i(l){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(l),n.exit("labelMarker"),n.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):e(l)}}const ye={name:"lineEnding",tokenize:Yo};function Yo(n,e){return t;function t(r){return n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),M(n,e,"linePrefix")}}const ee={name:"thematicBreak",tokenize:Jo};function Jo(n,e,t){let r=0,i;return o;function o(s){return n.enter("thematicBreak"),l(s)}function l(s){return i=s,a(s)}function a(s){return s===i?(n.enter("thematicBreakSequence"),u(s)):r>=3&&(s===null||L(s))?(n.exit("thematicBreak"),e(s)):t(s)}function u(s){return s===i?(n.consume(s),r++,u):(n.exit("thematicBreakSequence"),R(s)?M(n,a,"whitespace")(s):a(s))}}const nn={continuation:{tokenize:ta},exit:ia,name:"list",tokenize:ea},Zo={partial:!0,tokenize:la},na={partial:!0,tokenize:ra};function ea(n,e,t){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(p){const d=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(d==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Re(p)){if(r.containerState.type||(r.containerState.type=d,n.enter(d,{_container:!0})),d==="listUnordered")return n.enter("listItemPrefix"),p===42||p===45?n.check(ee,t,s)(p):s(p);if(!r.interrupt||p===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),u(p)}return t(p)}function u(p){return Re(p)&&++l<10?(n.consume(p),u):(!r.interrupt||l<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(n.exit("listItemValue"),s(p)):t(p)}function s(p){return n.enter("listItemMarker"),n.consume(p),n.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,n.check(Qn,r.interrupt?t:f,n.attempt(Zo,h,c))}function f(p){return r.containerState.initialBlankLine=!0,o++,h(p)}function c(p){return R(p)?(n.enter("listItemPrefixWhitespace"),n.consume(p),n.exit("listItemPrefixWhitespace"),h):t(p)}function h(p){return r.containerState.size=o+r.sliceSerialize(n.exit("listItemPrefix"),!0).length,e(p)}}function ta(n,e,t){const r=this;return r.containerState._closeFlow=void 0,n.check(Qn,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,M(n,e,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!R(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,n.attempt(na,e,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,M(n,n.attempt(nn,e,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function ra(n,e,t){const r=this;return M(n,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?e(o):t(o)}}function ia(n){n.exit(this.containerState.type)}function la(n,e,t){const r=this;return M(n,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const l=r.events[r.events.length-1];return!R(o)&&l&&l[1].type==="listItemPrefixWhitespace"?e(o):t(o)}}const At={name:"setextUnderline",resolveTo:oa,tokenize:aa};function oa(n,e){let t=n.length,r,i,o;for(;t--;)if(n[t][0]==="enter"){if(n[t][1].type==="content"){r=t;break}n[t][1].type==="paragraph"&&(i=t)}else n[t][1].type==="content"&&n.splice(t,1),!o&&n[t][1].type==="definition"&&(o=t);const l={type:"setextHeading",start:{...n[r][1].start},end:{...n[n.length-1][1].end}};return n[i][1].type="setextHeadingText",o?(n.splice(i,0,["enter",l,e]),n.splice(o+1,0,["exit",n[r][1],e]),n[r][1].end={...n[o][1].end}):n[r][1]=l,n.push(["exit",l,e]),n}function aa(n,e,t){const r=this;let i;return o;function o(s){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(n.enter("setextHeadingLine"),i=s,l(s)):t(s)}function l(s){return n.enter("setextHeadingLineSequence"),a(s)}function a(s){return s===i?(n.consume(s),a):(n.exit("setextHeadingLineSequence"),R(s)?M(n,u,"lineSuffix")(s):u(s))}function u(s){return s===null||L(s)?(n.exit("setextHeadingLine"),e(s)):t(s)}}const ua={tokenize:sa};function sa(n){const e=this,t=n.attempt(Qn,r,n.attempt(this.parser.constructs.flowInitial,i,M(n,n.attempt(this.parser.constructs.flow,i,n.attempt(ho,i)),"linePrefix")));return t;function r(o){if(o===null){n.consume(o);return}return n.enter("lineEndingBlank"),n.consume(o),n.exit("lineEndingBlank"),e.currentConstruct=void 0,t}function i(o){if(o===null){n.consume(o);return}return n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),e.currentConstruct=void 0,t}}const ca={resolveAll:Tr()},fa=Ar("string"),pa=Ar("text");function Ar(n){return{resolveAll:Tr(n==="text"?ha:void 0),tokenize:e};function e(t){const r=this,i=this.parser.constructs[n],o=t.attempt(i,l,a);return l;function l(f){return s(f)?o(f):a(f)}function a(f){if(f===null){t.consume(f);return}return t.enter("data"),t.consume(f),u}function u(f){return s(f)?(t.exit("data"),o(f)):(t.consume(f),u)}function s(f){if(f===null)return!0;const c=i[f];let h=-1;if(c)for(;++h<c.length;){const p=c[h];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function Tr(n){return e;function e(t,r){let i=-1,o;for(;++i<=t.length;)o===void 0?t[i]&&t[i][1].type==="data"&&(o=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==o+2&&(t[o][1].end=t[i-1][1].end,t.splice(o+2,i-o-2),i=o+2),o=void 0);return n?n(t,r):t}}function ha(n,e){let t=0;for(;++t<=n.length;)if((t===n.length||n[t][1].type==="lineEnding")&&n[t-1][1].type==="data"){const r=n[t-1][1],i=e.sliceStream(r);let o=i.length,l=-1,a=0,u;for(;o--;){const s=i[o];if(typeof s=="string"){for(l=s.length;s.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(s===-2)u=!0,a++;else if(s!==-1){o++;break}}if(e._contentTypeTextTrailing&&t===n.length&&(a=0),a){const s={type:t===n.length||u||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:r.start._bufferIndex+l,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...s.start},r.start.offset===r.end.offset?Object.assign(r,s):(n.splice(t,0,["enter",s,e],["exit",s,e]),t+=2)}t++}return n}const ma={42:nn,43:nn,45:nn,48:nn,49:nn,50:nn,51:nn,52:nn,53:nn,54:nn,55:nn,56:nn,57:nn,62:Sr},ga={91:ko},da={[-2]:de,[-1]:de,32:de},ya={35:Io,42:ee,45:[At,ee],60:Lo,61:At,95:ee,96:zt,126:zt},xa={38:Ir,92:Pr},ka={[-5]:ye,[-4]:ye,[-3]:ye,33:Ko,38:Ir,42:Oe,60:[Ql,Mo],91:Go,92:[So,Pr],93:Xe,95:Oe,96:ao},ba={null:[Oe,ca]},wa={null:[42,95]},Ca={null:[]},Sa=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:wa,contentInitial:ga,disable:Ca,document:ma,flow:ya,flowInitial:da,insideSpan:ba,string:xa,text:ka},Symbol.toStringTag,{value:"Module"}));function Pa(n,e,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},o=[];let l=[],a=[];const u={attempt:_(F),check:_(w),consume:v,enter:P,exit:D,interrupt:_(w,{interrupt:!0})},s={code:null,containerState:{},defineSkip:k,events:[],now:d,parser:n,previous:null,sliceSerialize:h,sliceStream:p,write:c};let f=e.tokenize.call(s,u);return e.resolveAll&&o.push(e),s;function c(E){return l=on(l,E),S(),l[l.length-1]!==null?[]:(q(e,0),s.events=ce(o,s.events,s),s.events)}function h(E,z){return va(p(E),z)}function p(E){return Ia(l,E)}function d(){const{_bufferIndex:E,_index:z,line:j,column:W,offset:B}=r;return{_bufferIndex:E,_index:z,line:j,column:W,offset:B}}function k(E){i[E.line]=E.column,x()}function S(){let E;for(;r._index<l.length;){const z=l[r._index];if(typeof z=="string")for(E=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===E&&r._bufferIndex<z.length;)y(z.charCodeAt(r._bufferIndex));else y(z)}}function y(E){f=f(E)}function v(E){L(E)?(r.line++,r.column=1,r.offset+=E===-3?2:1,x()):E!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=E}function P(E,z){const j=z||{};return j.type=E,j.start=d(),s.events.push(["enter",j,s]),a.push(j),j}function D(E){const z=a.pop();return z.end=d(),s.events.push(["exit",z,s]),z}function F(E,z){q(E,z.from)}function w(E,z){z.restore()}function _(E,z){return j;function j(W,B,X){let Q,an,mn,m;return Array.isArray(W)?gn(W):"tokenize"in W?gn([W]):un(W);function un(G){return _n;function _n(kn){const zn=kn!==null&&G[kn],Ln=kn!==null&&G.null,Xn=[...Array.isArray(zn)?zn:zn?[zn]:[],...Array.isArray(Ln)?Ln:Ln?[Ln]:[]];return gn(Xn)(kn)}}function gn(G){return Q=G,an=0,G.length===0?X:g(G[an])}function g(G){return _n;function _n(kn){return m=N(),mn=G,G.partial||(s.currentConstruct=G),G.name&&s.parser.constructs.disable.null.includes(G.name)?Cn():G.tokenize.call(z?Object.assign(Object.create(s),z):s,u,sn,Cn)(kn)}}function sn(G){return E(mn,m),B}function Cn(G){return m.restore(),++an<Q.length?g(Q[an]):X}}}function q(E,z){E.resolveAll&&!o.includes(E)&&o.push(E),E.resolve&&ln(s.events,z,s.events.length-z,E.resolve(s.events.slice(z),s)),E.resolveTo&&(s.events=E.resolveTo(s.events,s))}function N(){const E=d(),z=s.previous,j=s.currentConstruct,W=s.events.length,B=Array.from(a);return{from:W,restore:X};function X(){r=E,s.previous=z,s.currentConstruct=j,s.events.length=W,a=B,x()}}function x(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Ia(n,e){const t=e.start._index,r=e.start._bufferIndex,i=e.end._index,o=e.end._bufferIndex;let l;if(t===i)l=[n[t].slice(r,o)];else{if(l=n.slice(t,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(n[i].slice(0,o))}return l}function va(n,e){let t=-1;const r=[];let i;for(;++t<n.length;){const o=n[t];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=e?" ":"	";break}case-1:{if(!e&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}function Ea(n){const r={constructs:wr([Sa,...(n||{}).extensions||[]]),content:i(Hl),defined:[],document:i(Ul),flow:i(ua),lazy:{},string:i(fa),text:i(pa)};return r;function i(o){return l;function l(a){return Pa(r,o,a)}}}function za(n){for(;!vr(n););return n}const Tt=/[\0\t\n\r]/g;function La(){let n=1,e="",t=!0,r;return i;function i(o,l,a){const u=[];let s,f,c,h,p;for(o=e+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),c=0,e="",t&&(o.charCodeAt(0)===65279&&c++,t=void 0);c<o.length;){if(Tt.lastIndex=c,s=Tt.exec(o),h=s&&s.index!==void 0?s.index:o.length,p=o.charCodeAt(h),!s){e=o.slice(c);break}if(p===10&&c===h&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),c<h&&(u.push(o.slice(c,h)),n+=h-c),p){case 0:{u.push(65533),n++;break}case 9:{for(f=Math.ceil(n/4)*4,u.push(-2);n++<f;)u.push(-1);break}case 10:{u.push(-4),n=1;break}default:r=!0,n=1}c=h+1}return a&&(r&&u.push(-5),e&&u.push(e),u.push(null)),u}}const Aa=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ta(n){return n.replace(Aa,Da)}function Da(n,e,t){if(e)return e;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),o=i===120||i===88;return Cr(t.slice(o?2:1),o?16:10)}return Ge(t)||n}const Dr={}.hasOwnProperty;function Fa(n,e,t){return typeof e!="string"&&(t=e,e=void 0),Ra(t)(za(Ea(t).document().write(La()(n,e,!0))))}function Ra(n){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(st),autolinkProtocol:N,autolinkEmail:N,atxHeading:o(ot),blockQuote:o(Ln),characterEscape:N,characterReference:N,codeFenced:o(Xn),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(Xn,l),codeText:o(pi,l),codeTextData:N,data:N,codeFlowValue:N,definition:o(hi),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(mi),hardBreakEscape:o(at),hardBreakTrailing:o(at),htmlFlow:o(ut,l),htmlFlowData:N,htmlText:o(ut,l),htmlTextData:N,image:o(gi),label:l,link:o(st),listItem:o(di),listItemValue:h,listOrdered:o(ct,c),listUnordered:o(ct),paragraph:o(yi),reference:g,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(ot),strong:o(xi),thematicBreak:o(bi)},exit:{atxHeading:u(),atxHeadingSequence:F,autolink:u(),autolinkEmail:zn,autolinkProtocol:kn,blockQuote:u(),characterEscapeValue:x,characterReferenceMarkerHexadecimal:Cn,characterReferenceMarkerNumeric:Cn,characterReferenceValue:G,characterReference:_n,codeFenced:u(S),codeFencedFence:k,codeFencedFenceInfo:p,codeFencedFenceMeta:d,codeFlowValue:x,codeIndented:u(y),codeText:u(B),codeTextData:x,data:x,definition:u(),definitionDestinationString:D,definitionLabelString:v,definitionTitleString:P,emphasis:u(),hardBreakEscape:u(z),hardBreakTrailing:u(z),htmlFlow:u(j),htmlFlowData:x,htmlText:u(W),htmlTextData:x,image:u(Q),label:mn,labelText:an,lineEnding:E,link:u(X),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:sn,resourceDestinationString:m,resourceTitleString:un,resource:gn,setextHeading:u(q),setextHeadingLineSequence:_,setextHeadingText:w,strong:u(),thematicBreak:u()}};Fr(e,(n||{}).mdastExtensions||[]);const t={};return r;function r(b){let I={type:"root",children:[]};const A={stack:[I],tokenStack:[],config:e,enter:a,exit:s,buffer:l,resume:f,data:t},O=[];let H=-1;for(;++H<b.length;)if(b[H][1].type==="listOrdered"||b[H][1].type==="listUnordered")if(b[H][0]==="enter")O.push(H);else{const cn=O.pop();H=i(b,cn,H)}for(H=-1;++H<b.length;){const cn=e[b[H][0]];Dr.call(cn,b[H][1].type)&&cn[b[H][1].type].call(Object.assign({sliceSerialize:b[H][2].sliceSerialize},A),b[H][1])}if(A.tokenStack.length>0){const cn=A.tokenStack[A.tokenStack.length-1];(cn[1]||Dt).call(A,void 0,cn[0])}for(I.position={start:bn(b.length>0?b[0][1].start:{line:1,column:1,offset:0}),end:bn(b.length>0?b[b.length-2][1].end:{line:1,column:1,offset:0})},H=-1;++H<e.transforms.length;)I=e.transforms[H](I)||I;return I}function i(b,I,A){let O=I-1,H=-1,cn=!1,Sn,dn,Bn,Nn;for(;++O<=A;){const tn=b[O];switch(tn[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{tn[0]==="enter"?H++:H--,Nn=void 0;break}case"lineEndingBlank":{tn[0]==="enter"&&(Sn&&!Nn&&!H&&!Bn&&(Bn=O),Nn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Nn=void 0}if(!H&&tn[0]==="enter"&&tn[1].type==="listItemPrefix"||H===-1&&tn[0]==="exit"&&(tn[1].type==="listUnordered"||tn[1].type==="listOrdered")){if(Sn){let An=O;for(dn=void 0;An--;){const yn=b[An];if(yn[1].type==="lineEnding"||yn[1].type==="lineEndingBlank"){if(yn[0]==="exit")continue;dn&&(b[dn][1].type="lineEndingBlank",cn=!0),yn[1].type="lineEnding",dn=An}else if(!(yn[1].type==="linePrefix"||yn[1].type==="blockQuotePrefix"||yn[1].type==="blockQuotePrefixWhitespace"||yn[1].type==="blockQuoteMarker"||yn[1].type==="listItemIndent"))break}Bn&&(!dn||Bn<dn)&&(Sn._spread=!0),Sn.end=Object.assign({},dn?b[dn][1].start:tn[1].end),b.splice(dn||O,0,["exit",Sn,tn[2]]),O++,A++}if(tn[1].type==="listItemPrefix"){const An={type:"listItem",_spread:!1,start:Object.assign({},tn[1].start),end:void 0};Sn=An,b.splice(O,0,["enter",An,tn[2]]),O++,A++,Bn=void 0,Nn=!0}}}return b[I][1]._spread=cn,A}function o(b,I){return A;function A(O){a.call(this,b(O),O),I&&I.call(this,O)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(b,I,A){this.stack[this.stack.length-1].children.push(b),this.stack.push(b),this.tokenStack.push([I,A||void 0]),b.position={start:bn(I.start),end:void 0}}function u(b){return I;function I(A){b&&b.call(this,A),s.call(this,A)}}function s(b,I){const A=this.stack.pop(),O=this.tokenStack.pop();if(O)O[0].type!==b.type&&(I?I.call(this,b,O[0]):(O[1]||Dt).call(this,b,O[0]));else throw new Error("Cannot close `"+b.type+"` ("+Vn({start:b.start,end:b.end})+"): it’s not open");A.position.end=bn(b.end)}function f(){return Qe(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function h(b){if(this.data.expectingFirstListItemValue){const I=this.stack[this.stack.length-2];I.start=Number.parseInt(this.sliceSerialize(b),10),this.data.expectingFirstListItemValue=void 0}}function p(){const b=this.resume(),I=this.stack[this.stack.length-1];I.lang=b}function d(){const b=this.resume(),I=this.stack[this.stack.length-1];I.meta=b}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const b=this.resume(),I=this.stack[this.stack.length-1];I.value=b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const b=this.resume(),I=this.stack[this.stack.length-1];I.value=b.replace(/(\r?\n|\r)$/g,"")}function v(b){const I=this.resume(),A=this.stack[this.stack.length-1];A.label=I,A.identifier=fn(this.sliceSerialize(b)).toLowerCase()}function P(){const b=this.resume(),I=this.stack[this.stack.length-1];I.title=b}function D(){const b=this.resume(),I=this.stack[this.stack.length-1];I.url=b}function F(b){const I=this.stack[this.stack.length-1];if(!I.depth){const A=this.sliceSerialize(b).length;I.depth=A}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function _(b){const I=this.stack[this.stack.length-1];I.depth=this.sliceSerialize(b).codePointAt(0)===61?1:2}function q(){this.data.setextHeadingSlurpLineEnding=void 0}function N(b){const A=this.stack[this.stack.length-1].children;let O=A[A.length-1];(!O||O.type!=="text")&&(O=ki(),O.position={start:bn(b.start),end:void 0},A.push(O)),this.stack.push(O)}function x(b){const I=this.stack.pop();I.value+=this.sliceSerialize(b),I.position.end=bn(b.end)}function E(b){const I=this.stack[this.stack.length-1];if(this.data.atHardBreak){const A=I.children[I.children.length-1];A.position.end=bn(b.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(I.type)&&(N.call(this,b),x.call(this,b))}function z(){this.data.atHardBreak=!0}function j(){const b=this.resume(),I=this.stack[this.stack.length-1];I.value=b}function W(){const b=this.resume(),I=this.stack[this.stack.length-1];I.value=b}function B(){const b=this.resume(),I=this.stack[this.stack.length-1];I.value=b}function X(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const I=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=I,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function Q(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const I=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=I,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function an(b){const I=this.sliceSerialize(b),A=this.stack[this.stack.length-2];A.label=Ta(I),A.identifier=fn(I).toLowerCase()}function mn(){const b=this.stack[this.stack.length-1],I=this.resume(),A=this.stack[this.stack.length-1];if(this.data.inReference=!0,A.type==="link"){const O=b.children;A.children=O}else A.alt=I}function m(){const b=this.resume(),I=this.stack[this.stack.length-1];I.url=b}function un(){const b=this.resume(),I=this.stack[this.stack.length-1];I.title=b}function gn(){this.data.inReference=void 0}function g(){this.data.referenceType="collapsed"}function sn(b){const I=this.resume(),A=this.stack[this.stack.length-1];A.label=I,A.identifier=fn(this.sliceSerialize(b)).toLowerCase(),this.data.referenceType="full"}function Cn(b){this.data.characterReferenceType=b.type}function G(b){const I=this.sliceSerialize(b),A=this.data.characterReferenceType;let O;A?(O=Cr(I,A==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):O=Ge(I);const H=this.stack[this.stack.length-1];H.value+=O}function _n(b){const I=this.stack.pop();I.position.end=bn(b.end)}function kn(b){x.call(this,b);const I=this.stack[this.stack.length-1];I.url=this.sliceSerialize(b)}function zn(b){x.call(this,b);const I=this.stack[this.stack.length-1];I.url="mailto:"+this.sliceSerialize(b)}function Ln(){return{type:"blockquote",children:[]}}function Xn(){return{type:"code",lang:null,meta:null,value:""}}function pi(){return{type:"inlineCode",value:""}}function hi(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function mi(){return{type:"emphasis",children:[]}}function ot(){return{type:"heading",depth:0,children:[]}}function at(){return{type:"break"}}function ut(){return{type:"html",value:""}}function gi(){return{type:"image",title:null,url:"",alt:null}}function st(){return{type:"link",title:null,url:"",children:[]}}function ct(b){return{type:"list",ordered:b.type==="listOrdered",start:null,spread:b._spread,children:[]}}function di(b){return{type:"listItem",spread:b._spread,checked:null,children:[]}}function yi(){return{type:"paragraph",children:[]}}function xi(){return{type:"strong",children:[]}}function ki(){return{type:"text",value:""}}function bi(){return{type:"thematicBreak"}}}function bn(n){return{line:n.line,column:n.column,offset:n.offset}}function Fr(n,e){let t=-1;for(;++t<e.length;){const r=e[t];Array.isArray(r)?Fr(n,r):Oa(n,r)}}function Oa(n,e){let t;for(t in e)if(Dr.call(e,t))switch(t){case"canContainEols":{const r=e[t];r&&n[t].push(...r);break}case"transforms":{const r=e[t];r&&n[t].push(...r);break}case"enter":case"exit":{const r=e[t];r&&Object.assign(n[t],r);break}}}function Dt(n,e){throw n?new Error("Cannot close `"+n.type+"` ("+Vn({start:n.start,end:n.end})+"): a different token (`"+e.type+"`, "+Vn({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Vn({start:e.start,end:e.end})+") is still open")}function Ma(n){const e=this;e.parser=t;function t(r){return Fa(r,{...e.data("settings"),...n,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function _a(n,e){const t={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(e),!0)};return n.patch(e,t),n.applyData(e,t)}function Ba(n,e){const t={type:"element",tagName:"br",properties:{},children:[]};return n.patch(e,t),[n.applyData(e,t),{type:"text",value:`
`}]}function Na(n,e){const t=e.value?e.value+`
`:"",r={};e.lang&&(r.className=["language-"+e.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return e.meta&&(i.data={meta:e.meta}),n.patch(e,i),i=n.applyData(e,i),i={type:"element",tagName:"pre",properties:{},children:[i]},n.patch(e,i),i}function ja(n,e){const t={type:"element",tagName:"del",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function Ha(n,e){const t={type:"element",tagName:"em",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function Va(n,e){const t=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",r=String(e.identifier).toUpperCase(),i=Mn(r.toLowerCase()),o=n.footnoteOrder.indexOf(r);let l,a=n.footnoteCounts.get(r);a===void 0?(a=0,n.footnoteOrder.push(r),l=n.footnoteOrder.length):l=o+1,a+=1,n.footnoteCounts.set(r,a);const u={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};n.patch(e,u);const s={type:"element",tagName:"sup",properties:{},children:[u]};return n.patch(e,s),n.applyData(e,s)}function Ua(n,e){const t={type:"element",tagName:"h"+e.depth,properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function qa(n,e){if(n.options.allowDangerousHtml){const t={type:"raw",value:e.value};return n.patch(e,t),n.applyData(e,t)}}function Rr(n,e){const t=e.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+r}];const i=n.all(e),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function $a(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return Rr(n,e);const i={src:Mn(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return n.patch(e,o),n.applyData(e,o)}function Wa(n,e){const t={src:Mn(e.url)};e.alt!==null&&e.alt!==void 0&&(t.alt=e.alt),e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"img",properties:t,children:[]};return n.patch(e,r),n.applyData(e,r)}function Ka(n,e){const t={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};n.patch(e,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return n.patch(e,r),n.applyData(e,r)}function Qa(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return Rr(n,e);const i={href:Mn(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:n.all(e)};return n.patch(e,o),n.applyData(e,o)}function Ga(n,e){const t={href:Mn(e.url)};e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"a",properties:t,children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function Xa(n,e,t){const r=n.all(e),i=t?Ya(t):Or(e),o={},l=[];if(typeof e.checked=="boolean"){const f=r[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const f=r[a];(i||a!==0||f.type!=="element"||f.tagName!=="p")&&l.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?l.push(...f.children):l.push(f)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`});const s={type:"element",tagName:"li",properties:o,children:l};return n.patch(e,s),n.applyData(e,s)}function Ya(n){let e=!1;if(n.type==="list"){e=n.spread||!1;const t=n.children;let r=-1;for(;!e&&++r<t.length;)e=Or(t[r])}return e}function Or(n){const e=n.spread;return e??n.children.length>1}function Ja(n,e){const t={},r=n.all(e);let i=-1;for(typeof e.start=="number"&&e.start!==1&&(t.start=e.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const o={type:"element",tagName:e.ordered?"ol":"ul",properties:t,children:n.wrap(r,!0)};return n.patch(e,o),n.applyData(e,o)}function Za(n,e){const t={type:"element",tagName:"p",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function nu(n,e){const t={type:"root",children:n.wrap(n.all(e))};return n.patch(e,t),n.applyData(e,t)}function eu(n,e){const t={type:"element",tagName:"strong",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function tu(n,e){const t=n.all(e),r=t.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:n.wrap([r],!0)};n.patch(e.children[0],l),i.push(l)}if(t.length>0){const l={type:"element",tagName:"tbody",properties:{},children:n.wrap(t,!0)},a=qe(e.children[1]),u=mr(e.children[e.children.length-1]);a&&u&&(l.position={start:a,end:u}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:n.wrap(i,!0)};return n.patch(e,o),n.applyData(e,o)}function ru(n,e,t){const r=t?t.children:void 0,o=(r?r.indexOf(e):1)===0?"th":"td",l=t&&t.type==="table"?t.align:void 0,a=l?l.length:e.children.length;let u=-1;const s=[];for(;++u<a;){const c=e.children[u],h={},p=l?l[u]:void 0;p&&(h.align=p);let d={type:"element",tagName:o,properties:h,children:[]};c&&(d.children=n.all(c),n.patch(c,d),d=n.applyData(c,d)),s.push(d)}const f={type:"element",tagName:"tr",properties:{},children:n.wrap(s,!0)};return n.patch(e,f),n.applyData(e,f)}function iu(n,e){const t={type:"element",tagName:"td",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}const Ft=9,Rt=32;function lu(n){const e=String(n),t=/\r?\n|\r/g;let r=t.exec(e),i=0;const o=[];for(;r;)o.push(Ot(e.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(e);return o.push(Ot(e.slice(i),i>0,!1)),o.join("")}function Ot(n,e,t){let r=0,i=n.length;if(e){let o=n.codePointAt(r);for(;o===Ft||o===Rt;)r++,o=n.codePointAt(r)}if(t){let o=n.codePointAt(i-1);for(;o===Ft||o===Rt;)i--,o=n.codePointAt(i-1)}return i>r?n.slice(r,i):""}function ou(n,e){const t={type:"text",value:lu(String(e.value))};return n.patch(e,t),n.applyData(e,t)}function au(n,e){const t={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(e,t),n.applyData(e,t)}const uu={blockquote:_a,break:Ba,code:Na,delete:ja,emphasis:Ha,footnoteReference:Va,heading:Ua,html:qa,imageReference:$a,image:Wa,inlineCode:Ka,linkReference:Qa,link:Ga,listItem:Xa,list:Ja,paragraph:Za,root:nu,strong:eu,table:tu,tableCell:iu,tableRow:ru,text:ou,thematicBreak:au,toml:Yn,yaml:Yn,definition:Yn,footnoteDefinition:Yn};function Yn(){}const Mr=-1,fe=0,qn=1,le=2,Ye=3,Je=4,Ze=5,nt=6,_r=7,Br=8,Mt=typeof self=="object"?self:globalThis,su=(n,e)=>{const t=(i,o)=>(n.set(o,i),i),r=i=>{if(n.has(i))return n.get(i);const[o,l]=e[i];switch(o){case fe:case Mr:return t(l,i);case qn:{const a=t([],i);for(const u of l)a.push(r(u));return a}case le:{const a=t({},i);for(const[u,s]of l)a[r(u)]=r(s);return a}case Ye:return t(new Date(l),i);case Je:{const{source:a,flags:u}=l;return t(new RegExp(a,u),i)}case Ze:{const a=t(new Map,i);for(const[u,s]of l)a.set(r(u),r(s));return a}case nt:{const a=t(new Set,i);for(const u of l)a.add(r(u));return a}case _r:{const{name:a,message:u}=l;return t(new Mt[a](u),i)}case Br:return t(BigInt(l),i);case"BigInt":return t(Object(BigInt(l)),i);case"ArrayBuffer":return t(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:a}=new Uint8Array(l);return t(new DataView(a),l)}}return t(new Mt[o](l),i)};return r},_t=n=>su(new Map,n)(0),Tn="",{toString:cu}={},{keys:fu}=Object,Hn=n=>{const e=typeof n;if(e!=="object"||!n)return[fe,e];const t=cu.call(n).slice(8,-1);switch(t){case"Array":return[qn,Tn];case"Object":return[le,Tn];case"Date":return[Ye,Tn];case"RegExp":return[Je,Tn];case"Map":return[Ze,Tn];case"Set":return[nt,Tn];case"DataView":return[qn,t]}return t.includes("Array")?[qn,t]:t.includes("Error")?[_r,t]:[le,t]},Jn=([n,e])=>n===fe&&(e==="function"||e==="symbol"),pu=(n,e,t,r)=>{const i=(l,a)=>{const u=r.push(l)-1;return t.set(a,u),u},o=l=>{if(t.has(l))return t.get(l);let[a,u]=Hn(l);switch(a){case fe:{let f=l;switch(u){case"bigint":a=Br,f=l.toString();break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+u);f=null;break;case"undefined":return i([Mr],l)}return i([a,f],l)}case qn:{if(u){let h=l;return u==="DataView"?h=new Uint8Array(l.buffer):u==="ArrayBuffer"&&(h=new Uint8Array(l)),i([u,[...h]],l)}const f=[],c=i([a,f],l);for(const h of l)f.push(o(h));return c}case le:{if(u)switch(u){case"BigInt":return i([u,l.toString()],l);case"Boolean":case"Number":case"String":return i([u,l.valueOf()],l)}if(e&&"toJSON"in l)return o(l.toJSON());const f=[],c=i([a,f],l);for(const h of fu(l))(n||!Jn(Hn(l[h])))&&f.push([o(h),o(l[h])]);return c}case Ye:return i([a,l.toISOString()],l);case Je:{const{source:f,flags:c}=l;return i([a,{source:f,flags:c}],l)}case Ze:{const f=[],c=i([a,f],l);for(const[h,p]of l)(n||!(Jn(Hn(h))||Jn(Hn(p))))&&f.push([o(h),o(p)]);return c}case nt:{const f=[],c=i([a,f],l);for(const h of l)(n||!Jn(Hn(h)))&&f.push(o(h));return c}}const{message:s}=l;return i([a,{name:u,message:s}],l)};return o},Bt=(n,{json:e,lossy:t}={})=>{const r=[];return pu(!(e||t),!!e,new Map,r)(n),r},oe=typeof structuredClone=="function"?(n,e)=>e&&("json"in e||"lossy"in e)?_t(Bt(n,e)):structuredClone(n):(n,e)=>_t(Bt(n,e));function hu(n,e){const t=[{type:"text",value:"↩"}];return e>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),t}function mu(n,e){return"Back to reference "+(n+1)+(e>1?"-"+e:"")}function gu(n){const e=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",t=n.options.footnoteBackContent||hu,r=n.options.footnoteBackLabel||mu,i=n.options.footnoteLabel||"Footnotes",o=n.options.footnoteLabelTagName||"h2",l=n.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let u=-1;for(;++u<n.footnoteOrder.length;){const s=n.footnoteById.get(n.footnoteOrder[u]);if(!s)continue;const f=n.all(s),c=String(s.identifier).toUpperCase(),h=Mn(c.toLowerCase());let p=0;const d=[],k=n.footnoteCounts.get(c);for(;k!==void 0&&++p<=k;){d.length>0&&d.push({type:"text",value:" "});let v=typeof t=="string"?t:t(u,p);typeof v=="string"&&(v={type:"text",value:v}),d.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,p),className:["data-footnote-backref"]},children:Array.isArray(v)?v:[v]})}const S=f[f.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const v=S.children[S.children.length-1];v&&v.type==="text"?v.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...d)}else f.push(...d);const y={type:"element",tagName:"li",properties:{id:e+"fn-"+h},children:n.wrap(f,!0)};n.patch(s,y),a.push(y)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...oe(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(a,!0)},{type:"text",value:`
`}]}}const pe=function(n){if(n==null)return ku;if(typeof n=="function")return he(n);if(typeof n=="object")return Array.isArray(n)?du(n):yu(n);if(typeof n=="string")return xu(n);throw new Error("Expected function, string, or object as test")};function du(n){const e=[];let t=-1;for(;++t<n.length;)e[t]=pe(n[t]);return he(r);function r(...i){let o=-1;for(;++o<e.length;)if(e[o].apply(this,i))return!0;return!1}}function yu(n){const e=n;return he(t);function t(r){const i=r;let o;for(o in n)if(i[o]!==e[o])return!1;return!0}}function xu(n){return he(e);function e(t){return t&&t.type===n}}function he(n){return e;function e(t,r,i){return!!(bu(t)&&n.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function ku(){return!0}function bu(n){return n!==null&&typeof n=="object"&&"type"in n}const Nr=[],wu=!0,Me=!1,Cu="skip";function jr(n,e,t,r){let i;typeof e=="function"&&typeof t!="function"?(r=t,t=e):i=e;const o=pe(i),l=r?-1:1;a(n,void 0,[])();function a(u,s,f){const c=u&&typeof u=="object"?u:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(u.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=Nr,d,k,S;if((!e||o(u,s,f[f.length-1]||void 0))&&(p=Su(t(u,f)),p[0]===Me))return p;if("children"in u&&u.children){const y=u;if(y.children&&p[0]!==Cu)for(k=(r?y.children.length:-1)+l,S=f.concat(y);k>-1&&k<y.children.length;){const v=y.children[k];if(d=a(v,k,S)(),d[0]===Me)return d;k=typeof d[1]=="number"?d[1]:k+l}}return p}}}function Su(n){return Array.isArray(n)?n:typeof n=="number"?[wu,n]:n==null?Nr:[n]}function et(n,e,t,r){let i,o,l;typeof e=="function"&&typeof t!="function"?(o=void 0,l=e,i=t):(o=e,l=t,i=r),jr(n,o,a,i);function a(u,s){const f=s[s.length-1],c=f?f.children.indexOf(u):void 0;return l(u,c,f)}}const _e={}.hasOwnProperty,Pu={};function Iu(n,e){const t=e||Pu,r=new Map,i=new Map,o=new Map,l={...uu,...t.handlers},a={all:s,applyData:Eu,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:u,options:t,patch:vu,wrap:Lu};return et(n,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?r:i,h=String(f.identifier).toUpperCase();c.has(h)||c.set(h,f)}}),a;function u(f,c){const h=f.type,p=a.handlers[h];if(_e.call(a.handlers,h)&&p)return p(a,f,c);if(a.options.passThrough&&a.options.passThrough.includes(h)){if("children"in f){const{children:k,...S}=f,y=oe(S);return y.children=a.all(f),y}return oe(f)}return(a.options.unknownHandler||zu)(a,f,c)}function s(f){const c=[];if("children"in f){const h=f.children;let p=-1;for(;++p<h.length;){const d=a.one(h[p],f);if(d){if(p&&h[p-1].type==="break"&&(!Array.isArray(d)&&d.type==="text"&&(d.value=Nt(d.value)),!Array.isArray(d)&&d.type==="element")){const k=d.children[0];k&&k.type==="text"&&(k.value=Nt(k.value))}Array.isArray(d)?c.push(...d):c.push(d)}}}return c}}function vu(n,e){n.position&&(e.position=hl(n))}function Eu(n,e){let t=e;if(n&&n.data){const r=n.data.hName,i=n.data.hChildren,o=n.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const l="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:l}}t.type==="element"&&o&&Object.assign(t.properties,oe(o)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function zu(n,e){const t=e.data||{},r="value"in e&&!(_e.call(t,"hProperties")||_e.call(t,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function Lu(n,e){const t=[];let r=-1;for(e&&t.push({type:"text",value:`
`});++r<n.length;)r&&t.push({type:"text",value:`
`}),t.push(n[r]);return e&&n.length>0&&t.push({type:"text",value:`
`}),t}function Nt(n){let e=0,t=n.charCodeAt(e);for(;t===9||t===32;)e++,t=n.charCodeAt(e);return n.slice(e)}function jt(n,e){const t=Iu(n,e),r=t.one(n,void 0),i=gu(t),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function Au(n,e){return n&&"run"in n?async function(t,r){const i=jt(t,{file:r,...e});await n.run(i,r)}:function(t,r){return jt(t,{file:r,...n||e})}}function Ht(n){if(n)throw n}var te=Object.prototype.hasOwnProperty,Hr=Object.prototype.toString,Vt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,qt=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Hr.call(e)==="[object Array]"},$t=function(e){if(!e||Hr.call(e)!=="[object Object]")return!1;var t=te.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&te.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!r)return!1;var i;for(i in e);return typeof i>"u"||te.call(e,i)},Wt=function(e,t){Vt&&t.name==="__proto__"?Vt(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},Kt=function(e,t){if(t==="__proto__")if(te.call(e,t)){if(Ut)return Ut(e,t).value}else return;return e[t]},Tu=function n(){var e,t,r,i,o,l,a=arguments[0],u=1,s=arguments.length,f=!1;for(typeof a=="boolean"&&(f=a,a=arguments[1]||{},u=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});u<s;++u)if(e=arguments[u],e!=null)for(t in e)r=Kt(a,t),i=Kt(e,t),a!==i&&(f&&i&&($t(i)||(o=qt(i)))?(o?(o=!1,l=r&&qt(r)?r:[]):l=r&&$t(r)?r:{},Wt(a,{name:t,newValue:n(f,l,i)})):typeof i<"u"&&Wt(a,{name:t,newValue:i}));return a};const xe=or(Tu);function Be(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function Du(){const n=[],e={run:t,use:r};return e;function t(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(u,...s){const f=n[++o];let c=-1;if(u){l(u);return}for(;++c<i.length;)(s[c]===null||s[c]===void 0)&&(s[c]=i[c]);i=s,f?Fu(f,a)(...s):l(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return n.push(i),e}}function Fu(n,e){let t;return r;function r(...l){const a=n.length>l.length;let u;a&&l.push(i);try{u=n.apply(this,l)}catch(s){const f=s;if(a&&t)throw f;return i(f)}a||(u&&u.then&&typeof u.then=="function"?u.then(o,i):u instanceof Error?i(u):o(u))}function i(l,...a){t||(t=!0,e(l,...a))}function o(l){i(null,l)}}const pn={basename:Ru,dirname:Ou,extname:Mu,join:_u,sep:"/"};function Ru(n,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Gn(n);let t=0,r=-1,i=n.length,o;if(e===void 0||e.length===0||e.length>n.length){for(;i--;)if(n.codePointAt(i)===47){if(o){t=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":n.slice(t,r)}if(e===n)return"";let l=-1,a=e.length-1;for(;i--;)if(n.codePointAt(i)===47){if(o){t=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(n.codePointAt(i)===e.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return t===r?r=l:r<0&&(r=n.length),n.slice(t,r)}function Ou(n){if(Gn(n),n.length===0)return".";let e=-1,t=n.length,r;for(;--t;)if(n.codePointAt(t)===47){if(r){e=t;break}}else r||(r=!0);return e<0?n.codePointAt(0)===47?"/":".":e===1&&n.codePointAt(0)===47?"//":n.slice(0,e)}function Mu(n){Gn(n);let e=n.length,t=-1,r=0,i=-1,o=0,l;for(;e--;){const a=n.codePointAt(e);if(a===47){if(l){r=e+1;break}continue}t<0&&(l=!0,t=e+1),a===46?i<0?i=e:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||t<0||o===0||o===1&&i===t-1&&i===r+1?"":n.slice(i,t)}function _u(...n){let e=-1,t;for(;++e<n.length;)Gn(n[e]),n[e]&&(t=t===void 0?n[e]:t+"/"+n[e]);return t===void 0?".":Bu(t)}function Bu(n){Gn(n);const e=n.codePointAt(0)===47;let t=Nu(n,!e);return t.length===0&&!e&&(t="."),t.length>0&&n.codePointAt(n.length-1)===47&&(t+="/"),e?"/"+t:t}function Nu(n,e){let t="",r=0,i=-1,o=0,l=-1,a,u;for(;++l<=n.length;){if(l<n.length)a=n.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(u=t.lastIndexOf("/"),u!==t.length-1){u<0?(t="",r=0):(t=t.slice(0,u),r=t.length-1-t.lastIndexOf("/")),i=l,o=0;continue}}else if(t.length>0){t="",r=0,i=l,o=0;continue}}e&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+n.slice(i+1,l):t=n.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return t}function Gn(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const ju={cwd:Hu};function Hu(){return"/"}function Ne(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function Vu(n){if(typeof n=="string")n=new URL(n);else if(!Ne(n)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(n.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return Uu(n)}function Uu(n){if(n.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const e=n.pathname;let t=-1;for(;++t<e.length;)if(e.codePointAt(t)===37&&e.codePointAt(t+1)===50){const r=e.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(e)}const ke=["history","path","basename","stem","extname","dirname"];class Vr{constructor(e){let t;e?Ne(e)?t={path:e}:typeof e=="string"||qu(e)?t={value:e}:t=e:t={},this.cwd="cwd"in t?"":ju.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ke.length;){const o=ke[r];o in t&&t[o]!==void 0&&t[o]!==null&&(this[o]=o==="history"?[...t[o]]:t[o])}let i;for(i in t)ke.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?pn.basename(this.path):void 0}set basename(e){we(e,"basename"),be(e,"basename"),this.path=pn.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?pn.dirname(this.path):void 0}set dirname(e){Qt(this.basename,"dirname"),this.path=pn.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?pn.extname(this.path):void 0}set extname(e){if(be(e,"extname"),Qt(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=pn.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){Ne(e)&&(e=Vu(e)),we(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?pn.basename(this.path,this.extname):void 0}set stem(e){we(e,"stem"),be(e,"stem"),this.path=pn.join(this.dirname||"",e+(this.extname||""))}fail(e,t,r){const i=this.message(e,t,r);throw i.fatal=!0,i}info(e,t,r){const i=this.message(e,t,r);return i.fatal=void 0,i}message(e,t,r){const i=new J(e,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function be(n,e){if(n&&n.includes(pn.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+pn.sep+"`")}function we(n,e){if(!n)throw new Error("`"+e+"` cannot be empty")}function Qt(n,e){if(!n)throw new Error("Setting `"+e+"` requires `path` to be set too")}function qu(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const $u=function(n){const r=this.constructor.prototype,i=r[n],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},Wu={}.hasOwnProperty;class tt extends $u{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Du()}copy(){const e=new tt;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];e.use(...r)}return e.data(xe(!0,{},this.namespace)),e}data(e,t){return typeof e=="string"?arguments.length===2?(Pe("data",this.frozen),this.namespace[e]=t,this):Wu.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Pe("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(e,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=Zn(e),r=this.parser||this.Parser;return Ce("parse",r),r(String(t),t)}process(e,t){const r=this;return this.freeze(),Ce("process",this.parser||this.Parser),Se("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(o,l){const a=Zn(e),u=r.parse(a);r.run(u,a,function(f,c,h){if(f||!c||!h)return s(f);const p=c,d=r.stringify(p,h);Gu(d)?h.value=d:h.result=d,s(f,h)});function s(f,c){f||!c?l(f):o?o(c):t(void 0,c)}}}processSync(e){let t=!1,r;return this.freeze(),Ce("processSync",this.parser||this.Parser),Se("processSync",this.compiler||this.Compiler),this.process(e,i),Xt("processSync","process",t),r;function i(o,l){t=!0,Ht(o),r=l}}run(e,t,r){Gt(e),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const u=Zn(t);i.run(e,u,s);function s(f,c,h){const p=c||e;f?a(f):l?l(p):r(void 0,p,h)}}}runSync(e,t){let r=!1,i;return this.run(e,t,o),Xt("runSync","run",r),i;function o(l,a){Ht(l),i=a,r=!0}}stringify(e,t){this.freeze();const r=Zn(t),i=this.compiler||this.Compiler;return Se("stringify",i),Gt(e),i(e,r)}use(e,...t){const r=this.attachers,i=this.namespace;if(Pe("use",this.frozen),e!=null)if(typeof e=="function")u(e,t);else if(typeof e=="object")Array.isArray(e)?a(e):l(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function o(s){if(typeof s=="function")u(s,[]);else if(typeof s=="object")if(Array.isArray(s)){const[f,...c]=s;u(f,c)}else l(s);else throw new TypeError("Expected usable value, not `"+s+"`")}function l(s){if(!("plugins"in s)&&!("settings"in s))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(s.plugins),s.settings&&(i.settings=xe(!0,i.settings,s.settings))}function a(s){let f=-1;if(s!=null)if(Array.isArray(s))for(;++f<s.length;){const c=s[f];o(c)}else throw new TypeError("Expected a list of plugins, not `"+s+"`")}function u(s,f){let c=-1,h=-1;for(;++c<r.length;)if(r[c][0]===s){h=c;break}if(h===-1)r.push([s,...f]);else if(f.length>0){let[p,...d]=f;const k=r[h][1];Be(k)&&Be(p)&&(p=xe(!0,k,p)),r[h]=[s,p,...d]}}}}const Ku=new tt().freeze();function Ce(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function Se(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function Pe(n,e){if(e)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Gt(n){if(!Be(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function Xt(n,e,t){if(!t)throw new Error("`"+n+"` finished async. Use `"+e+"` instead")}function Zn(n){return Qu(n)?n:new Vr(n)}function Qu(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function Gu(n){return typeof n=="string"||Xu(n)}function Xu(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const Yu="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Yt=[],Jt={allowDangerousHtml:!0},Ju=/^(https?|ircs?|mailto|xmpp)$/i,Zu=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function ns(n){const e=es(n),t=ts(n);return rs(e.runSync(e.parse(t),t),n)}function es(n){const e=n.rehypePlugins||Yt,t=n.remarkPlugins||Yt,r=n.remarkRehypeOptions?{...n.remarkRehypeOptions,...Jt}:Jt;return Ku().use(Ma).use(t).use(Au,r).use(e)}function ts(n){const e=n.children||"",t=new Vr;return typeof e=="string"&&(t.value=e),t}function rs(n,e){const t=e.allowedElements,r=e.allowElement,i=e.components,o=e.disallowedElements,l=e.skipHtml,a=e.unwrapDisallowed,u=e.urlTransform||is;for(const f of Zu)Object.hasOwn(e,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+Yu+f.id,void 0);return et(n,s),xl(n,{Fragment:$.Fragment,components:i,ignoreInvalidStyle:!0,jsx:$.jsx,jsxs:$.jsxs,passKeys:!0,passNode:!0});function s(f,c,h){if(f.type==="raw"&&h&&typeof c=="number")return l?h.children.splice(c,1):h.children[c]={type:"text",value:f.value},c;if(f.type==="element"){let p;for(p in ge)if(Object.hasOwn(ge,p)&&Object.hasOwn(f.properties,p)){const d=f.properties[p],k=ge[p];(k===null||k.includes(f.tagName))&&(f.properties[p]=u(String(d||""),p,f))}}if(f.type==="element"){let p=t?!t.includes(f.tagName):o?o.includes(f.tagName):!1;if(!p&&r&&typeof c=="number"&&(p=!r(f,c,h)),p&&h&&typeof c=="number")return a&&f.children?h.children.splice(c,1,...f.children):h.children.splice(c,1),c}}}function is(n){const e=n.indexOf(":"),t=n.indexOf("?"),r=n.indexOf("#"),i=n.indexOf("/");return e===-1||i!==-1&&e>i||t!==-1&&e>t||r!==-1&&e>r||Ju.test(n.slice(0,e))?n:""}const ls=`# 🖼️ Vane Lazy Image

一个功能强大、高度可扩展的 React 图片懒加载组件库

[![NPM Version](https://img.shields.io/badge/npm-v1.0.9-blue)](https://www.npmjs.com/package/vane-lazy-image)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)

[在线演示](https://chinavane.netlify.app/) | [快速开始](#快速开始) | [插件列表](#插件列表) | [API 文档](#api-文档)

---

## ✨ 核心特性

### 🔌 **插件化架构**

- 基于事件总线的插件系统，支持灵活组合
- 60+ 内置插件，覆盖各种使用场景
- 易于扩展，支持自定义插件开发

### 🎨 **丰富的视觉效果**

- 水印、模糊占位（BlurUp）、渐变过渡
- 滤镜、边框发光、视差滚动
- 骨架屏、进度条、信息叠层
- 支持自定义 CSS 效果组合

### ⚡ **性能优化**

- 优先级加载控制
- 预连接（Preconnect）降低网络延迟
- 并发控制，避免资源竞争
- 内存缓存 + IndexedDB 持久化缓存
- 滚动空闲检测，优化用户体验

### 🛡️ **错误处理**

- 智能重试机制（指数退避）
- CDN 回退策略
- 降级加载（Fallback Image）
- 离线缓存支持
- 错误追踪与上报

### ♿ **可访问性与 SEO**

- ARIA 属性自动注入
- Alt 文本智能填充
- 结构化数据支持
- 搜索引擎优化
- 符合 WCAG 2.1 标准

### 📊 **监控与分析**

- 性能指标采集
- 网络分析与上报
- 用户行为追踪
- 加载时序统计
- 自定义事件日志

---

## 📦 安装

### NPM / Yarn / PNPM

\`\`\`bash
# npm
npm install vane-lazy-image

# yarn
yarn add vane-lazy-image

# pnpm
pnpm add vane-lazy-image
\`\`\`

### 本地开发

如果您想本地运行演示站点或进行二次开发：

\`\`\`bash
# 克隆仓库
git clone https://github.com/frankvane/vane-lazy-image.git

# 进入项目目录
cd vane-lazy-image

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建产物
npm run preview
\`\`\`

---

## 📊 包大小与优化

### 模块大小

| 模块     | 原始大小 | Gzip 后 | 说明                               |
| -------- | -------- | ------- | ---------------------------------- |
| 核心组件 | ~8 KB    | ~3 KB   | \`LazyLoadImageCore\` 仅包含基础功能 |
| 插件系统 | ~12 KB   | ~4 KB   | 插件管理器 + 事件总线              |
| 单个插件 | ~2-5 KB  | ~1-2 KB | 每个插件平均大小                   |
| 完整包   | ~280 KB  | ~85 KB  | 包含所有 60+ 插件                  |

> 💡 **提示**：使用按需导入可以大幅减小最终打包体积，推荐生产环境使用。

### Tree-Shaking 支持

本库完全支持 **Tree-Shaking**，未使用的插件不会被打包到最终产物中。

#### 为什么支持 Tree-Shaking？

1. **ESM 模块格式**：采用 ES Module 格式发布，便于静态分析
2. **无副作用标记**：在 \`package.json\` 中设置 \`"sideEffects": false\`
3. **命名导出**：所有功能都使用命名导出，而非默认导出
4. **独立模块**：每个插件都是独立的模块，可单独引入

\`\`\`json
// package.json
{
  "sideEffects": false, // ✅ 标记整个包无副作用
  "module": "dist/index.es.js", // ✅ ESM 格式入口
  "exports": {
    ".": {
      "import": "./dist/index.es.js", // ✅ ESM 导出
      "types": "./dist/index.d.ts"
    }
  }
}
\`\`\`

#### ✅ 支持 Tree-Shaking 的导入方式

\`\`\`tsx
// 推荐：按需导入（支持 Tree-Shaking）
import {
  LazyLoadImageCore,
  withPlugins,
  createWatermarkPlugin,
  createFadeInPlugin,
} from "vane-lazy-image";

// 只会打包使用到的插件
// 最终大小：~13 KB (核心 + 系统 + 2个插件)
\`\`\`

#### ⚠️ 不推荐的导入方式

\`\`\`tsx
// ❌ 不推荐：导入所有插件
import * as LazyImage from "vane-lazy-image";

// 会打包所有 60+ 插件
// 最终大小：~280 KB
\`\`\`

### 按需导入示例

#### 方式一：精确导入（最小体积）

\`\`\`tsx
// 仅导入需要的功能
import { LazyLoadImageCore } from "vane-lazy-image/core";
import { withPlugins } from "vane-lazy-image/plugins";
import { createWatermarkPlugin } from "vane-lazy-image/custom-plugins/WatermarkPlugin";
import { createFadeInPlugin } from "vane-lazy-image/custom-plugins/FadeInPlugin";

// 打包大小：~15 KB (最小)
\`\`\`

#### 方式二：分类导入（推荐）

\`\`\`tsx
// 从主入口导入核心和常用插件
import {
  LazyLoadImageCore,
  withPlugins,
  createWatermarkPlugin,
  createFadeInPlugin,
  createRetryOnErrorPlugin,
} from "vane-lazy-image";

// 打包大小：~18 KB (核心 + 3个插件)
\`\`\`

#### 方式三：分组导入

\`\`\`tsx
// 视觉效果插件组
import {
  createWatermarkPlugin,
  createFadeInPlugin,
  createBlurUpPlugin,
  createSkeletonPlugin,
} from "vane-lazy-image";

// 性能优化插件组
import {
  createPreconnectPlugin,
  createMemoryCachePlugin,
  createConcurrencyControlPlugin,
} from "vane-lazy-image";

// 打包大小：~35 KB (核心 + 7个插件)
\`\`\`

### 不同场景的包大小对比

| 使用场景         | 导入插件数 | 预估大小（Gzip） |
| ---------------- | ---------- | ---------------- |
| 最小化（仅核心） | 0          | ~3 KB            |
| 基础使用         | 2-3 个     | ~8-12 KB         |
| 常规项目         | 5-8 个     | ~15-25 KB        |
| 功能丰富         | 10-15 个   | ~30-45 KB        |
| 完整功能         | 60+ 个     | ~85 KB           |

### 打包优化建议

#### 1. 使用动态导入

对于大型插件或不常用的功能，可以使用动态导入：

\`\`\`tsx
import { LazyLoadImageCore, withPlugins } from "vane-lazy-image";

// 基础插件立即加载
const basePlugins = [createFadeInPlugin()];

// 大型插件按需加载
async function loadAdvancedPlugins() {
  const { createGalleryPlugin } = await import("vane-lazy-image");
  const { createParallaxPlugin } = await import("vane-lazy-image");

  return [createGalleryPlugin(), createParallaxPlugin()];
}

// 根据需要组合插件
const LazyImage = withPlugins(LazyLoadImageCore as any, basePlugins);
\`\`\`

#### 2. CDN 方式引入

对于不需要 Tree-Shaking 的场景，可以使用 CDN：

\`\`\`html
<!-- 使用 unpkg -->
<script src="https://unpkg.com/vane-lazy-image@latest/dist/index.umd.js"><\/script>

<!-- 使用 jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/vane-lazy-image@latest/dist/index.umd.js"><\/script>
\`\`\`

#### 3. Vite 配置优化

\`\`\`typescript
// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将懒加载图片库单独打包
          "lazy-image": ["vane-lazy-image"],
        },
      },
    },
  },
});
\`\`\`

#### 4. Webpack 配置优化

\`\`\`javascript
// webpack.config.js
module.exports = {
  optimization: {
    usedExports: true, // 启用 Tree-Shaking
    sideEffects: false, // 标记所有文件无副作用
    splitChunks: {
      cacheGroups: {
        lazyImage: {
          test: /[\\\\/]node_modules[\\\\/]vane-lazy-image[\\\\/]/,
          name: "lazy-image",
          chunks: "all",
        },
      },
    },
  },
};
\`\`\`

### 验证 Tree-Shaking 效果

#### 方法一：使用打包分析工具

\`\`\`bash
# Vite 项目
npm run build
npx vite-bundle-visualizer

# 或使用 rollup-plugin-visualizer
npm install --save-dev rollup-plugin-visualizer
\`\`\`

\`\`\`typescript
// vite.config.ts
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
\`\`\`

#### 方法二：Webpack Bundle Analyzer

\`\`\`bash
npm install --save-dev webpack-bundle-analyzer
\`\`\`

\`\`\`javascript
// webpack.config.js
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: true,
    }),
  ],
};
\`\`\`

#### 方法三：手动检查打包产物

\`\`\`bash
# 构建项目
npm run build

# 查看打包后的文件大小
ls -lh dist/assets/*.js

# 或使用 du 命令
du -sh dist/assets/*.js
\`\`\`

#### 方法四：比较测试

创建两个测试文件进行对比：

\`\`\`tsx
// test-full.tsx - 导入所有插件
import * as LazyImage from "vane-lazy-image";

// test-minimal.tsx - 仅导入需要的插件
import {
  LazyLoadImageCore,
  withPlugins,
  createWatermarkPlugin,
} from "vane-lazy-image";
\`\`\`

分别打包后对比文件大小，验证 Tree-Shaking 效果。

### 查看实际打包大小

使用打包分析工具查看实际大小：

\`\`\`bash
# Vite 项目
npm run build
npx vite-bundle-visualizer

# Webpack 项目
npm install --save-dev webpack-bundle-analyzer
# 在 webpack.config.js 中配置分析工具
\`\`\`

### 性能监控

使用浏览器开发者工具监控加载性能：

\`\`\`tsx
import { createPerformanceMonitorPlugin } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createPerformanceMonitorPlugin({
    onMetric: (metrics) => {
      console.log("性能指标", {
        loadTime: metrics.loadTime,
        renderTime: metrics.renderTime,
        totalTime: metrics.totalTime,
      });
    },
  }),
]);
\`\`\`

---

## 🚀 快速开始

### 基础使用

最简单的使用方式，不带任何插件：

\`\`\`tsx
import { LazyLoadImageCore } from "vane-lazy-image";

function App() {
  return (
    <div style={{ width: 480, height: 300 }}>
      <LazyLoadImageCore
        src="https://picsum.photos/800/600"
        alt="示例图片"
        loading="lazy"
        containerStyle={{ width: "100%", height: "100%" }}
        imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
\`\`\`

### 使用插件

通过 \`withPlugins\` 高阶组件组合多个插件：

\`\`\`tsx
import {
  LazyLoadImageCore,
  withPlugins,
  createWatermarkPlugin,
  createFadeInPlugin,
  createRetryOnErrorPlugin,
} from "vane-lazy-image";

// 组合插件
const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createWatermarkPlugin({
    text: "VANE",
    position: "bottom-right",
    opacity: 0.6,
  }),
  createFadeInPlugin({
    duration: 600,
    timingFunction: "ease-in-out",
  }),
  createRetryOnErrorPlugin({
    maxRetries: 3,
    retryDelay: 1000,
  }),
]);

function App() {
  return (
    <div style={{ width: 480, height: 300 }}>
      <LazyImage
        src="https://picsum.photos/800/600"
        alt="带插件的图片"
        loading="lazy"
        containerStyle={{ width: "100%", height: "100%" }}
        imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
\`\`\`

### 组合示例：性能优化

\`\`\`tsx
import {
  LazyLoadImageCore,
  withPlugins,
  createPreconnectPlugin,
  createPriorityLoadingPlugin,
  createImageOptimizationPlugin,
  createMemoryCachePlugin,
  createConcurrencyControlPlugin,
} from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createPreconnectPlugin({
    domains: ["https://images.example.com"],
  }),
  createPriorityLoadingPlugin({
    loading: "lazy",
    rootMargin: "200px",
  }),
  createImageOptimizationPlugin({
    widthParam: "w",
    qualityParam: "q",
    defaultQuality: 80,
  }),
  createMemoryCachePlugin({
    maxSize: 50,
  }),
  createConcurrencyControlPlugin({
    maxConcurrent: 4,
  }),
]);

export default function PerformanceDemo() {
  const images = [
    "https://images.example.com/photo1.jpg",
    "https://images.example.com/photo2.jpg",
    "https://images.example.com/photo3.jpg",
  ];

  return (
    <div style={{ display: "grid", gap: 16 }}>
      {images.map((src, i) => (
        <LazyImage
          key={i}
          src={src}
          alt={\`图片 \${i + 1}\`}
          loading="lazy"
          containerStyle={{ width: 320, height: 200 }}
          imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ))}
    </div>
  );
}
\`\`\`

---

## 📚 插件列表

本项目提供 60+ 个开箱即用的插件，按功能分类如下：

### 🎨 视觉与效果（15 个）

| 插件                          | 说明                             |
| ----------------------------- | -------------------------------- |
| \`createWatermarkPlugin\`       | 为图片叠加水印文本或标识         |
| \`createBadgePlugin\`           | 添加角标或状态标记               |
| \`createProgressOverlayPlugin\` | 加载进度条与百分比文本覆盖层     |
| \`createSkeletonPlugin\`        | 骨架屏遮罩，支持 shimmer 动画    |
| \`createOverlayInfoPlugin\`     | 信息蒙层，支持顶部/底部/居中显示 |
| \`createBlurUpPlugin\`          | 从模糊到清晰的渐进过渡效果       |
| \`createFadeInPlugin\`          | 图片淡入动画                     |
| \`createDominantColorPlugin\`   | 提取主色用于背景占位             |
| \`createGalleryPlugin\`         | 大图/灯箱查看能力                |
| \`createFilterPlugin\`          | CSS 滤镜，支持悬停交互           |
| \`createCaptionPlugin\`         | 图片说明文字叠层                 |
| \`createBorderGlowPlugin\`      | 边框发光视觉效果                 |
| \`createParallaxPlugin\`        | 视差滚动效果                     |
| \`createColorExtractionPlugin\` | 颜色提取用于背景/主题            |
| \`createRedactionPlugin\`       | 敏感信息遮蔽/打码处理            |

### ⚡ 性能与网络（12 个）

| 插件                             | 说明                       |
| -------------------------------- | -------------------------- |
| \`createPreconnectPlugin\`         | 预连接目标域名，降低延迟   |
| \`createPriorityLoadingPlugin\`    | 控制加载优先级策略         |
| \`createCachePrewarmPlugin\`       | 缓存预热与链接提前建立     |
| \`createMemoryCachePlugin\`        | 内存缓存策略               |
| \`createIDBCachePlugin\`           | IndexedDB 持久缓存         |
| \`createConcurrencyControlPlugin\` | 限制并发加载数量           |
| \`createScrollIdlePlugin\`         | 滚动空闲后再加载           |
| \`createNetworkAnalyticsPlugin\`   | 网络事件与性能数据上报     |
| \`createPredictiveLoadingPlugin\`  | 预测性预加载下一个资源     |
| \`createDataSaverPlugin\`          | 省流模式降级策略           |
| \`createImageOptimizationPlugin\`  | 图片参数优化（尺寸、质量） |
| \`createHoverPrefetchPlugin\`      | 悬停预取资源               |

### 🛡️ 稳健性与错误处理（11 个）

| 插件                              | 说明                       |
| --------------------------------- | -------------------------- |
| \`createErrorBadgePlugin\`          | 失败状态显示角标           |
| \`createErrorOverlayPlugin\`        | 加载失败覆盖层提示         |
| \`createFallbackImagePlugin\`       | 失败回退到备用图片         |
| \`createRetryOnErrorPlugin\`        | 错误重试与退避策略         |
| \`createErrorTrackingPlugin\`       | 错误追踪与上报             |
| \`createOfflinePlugin\`             | 离线占位与状态提示         |
| \`createMemoryPressureAbortPlugin\` | 内存压力触发取消请求       |
| \`createDecodeAfterIdlePlugin\`     | 空闲后再解码               |
| \`createAntiHotlinkPlugin\`         | 防盗链策略                 |
| \`createCDNFallbackPlugin\`         | CDN 失败回退主源           |
| \`createAuthPlugin\`                | 鉴权/携带 token 的资源加载 |

### 👆 视口与交互（7 个）

| 插件                           | 说明                   |
| ------------------------------ | ---------------------- |
| \`createViewportAwarePlugin\`    | 细粒度的视口状态管理   |
| \`createViewportDebouncePlugin\` | 视口变化防抖处理       |
| \`createViewportDwellPlugin\`    | 基于驻留时长的加载策略 |
| \`createUserBehaviorPlugin\`     | 用户行为统计           |
| \`createHoverZoomPlugin\`        | 悬停放大交互           |
| \`createComparisonPlugin\`       | 前后对比滑块           |
| \`createCropPlugin\`             | 裁剪与展示区域控制     |

### ♿ 可访问性与 SEO（6 个）

| 插件                            | 说明                       |
| ------------------------------- | -------------------------- |
| \`createA11yPlugin\`              | 可访问性增强（ARIA、焦点） |
| \`createAltTextPlugin\`           | Alt 文本智能填充           |
| \`createSEOPlugin\`               | 搜索引擎优化               |
| \`createAspectRatioSpacerPlugin\` | 按长宽比占位减少布局偏移   |
| \`createExifOrientationPlugin\`   | EXIF 方向矫正              |
| \`createResponsivePlugin\`        | 响应式 srcset/sizes 管理   |

### 🔧 其他（9 个）

| 插件                             | 说明                      |
| -------------------------------- | ------------------------- |
| \`createEventLoggerPlugin\`        | 事件日志打印与上报        |
| \`createPerformanceMonitorPlugin\` | 性能指标采集              |
| \`createLqipPlugin\`               | 低质量图像占位（LQIP）    |
| \`createSvgPlaceholderPlugin\`     | SVG 占位图渲染            |
| \`createWebPPlugin\`               | WebP 优先加载与回退       |
| \`createAdaptiveQualityPlugin\`    | 基于网络/设备的自适应质量 |
| \`createBatteryAwarePlugin\`       | 电量/省电模式适配         |
| \`createTransitionPlugin\`         | 统一管理加载过渡效果      |
| \`FetchLoaderPlugin\`              | 自定义 Fetch 加载器       |

> 💡 **提示**：所有插件都可以通过 \`vane-lazy-image\` 包导入。详细配置请参考 [API 文档](#api-文档) 或查看 [在线演示](https://chinavane.netlify.app/)。

---

## 📂 项目结构

\`\`\`
vane-lazy-image/
├── src/
│   ├── components/
│   │   └── LazyLoadImagePlugin/
│   │       ├── core/
│   │       │   └── LazyLoadImageCore.tsx    # 核心组件
│   │       ├── plugins/
│   │       │   ├── types.ts                 # 插件类型定义
│   │       │   ├── PluginBus.ts             # 事件总线
│   │       │   ├── PluginManager.ts         # 插件管理器
│   │       │   ├── withPlugins.tsx          # HOC 组合方法
│   │       │   ├── FetchLoaderPlugin.ts     # Fetch 加载器
│   │       │   └── index.ts                 # 插件系统导出
│   │       ├── custom-plugins/              # 60+ 自定义插件
│   │       │   ├── WatermarkPlugin/
│   │       │   ├── FadeInPlugin/
│   │       │   ├── RetryOnErrorPlugin/
│   │       │   └── ...
│   │       └── index.ts                     # 统一导出
│   ├── pages/
│   │   └── LazyLoadImagePlugin/
│   │       ├── _layout/
│   │       │   └── DemoPage.tsx             # 演示页面布局
│   │       ├── Home.tsx                     # 首页
│   │       ├── WatermarkDemo.tsx            # 各插件演示页面
│   │       └── ...                          # 60+ 演示文件
│   ├── App.tsx                              # 应用入口
│   ├── App.css                              # 全局样式
│   └── main.tsx                             # React 入口
├── dist/                                    # 构建产物
├── public/                                  # 静态资源
├── vite.config.ts                           # Vite 配置
├── tsconfig.json                            # TypeScript 配置
├── package.json                             # 项目配置
└── README.md                                # 项目文档
\`\`\`

---

## 🎯 API 文档

### 核心组件：\`LazyLoadImageCore\`

#### Props

| 属性                 | 类型                  | 默认值   | 说明         |
| -------------------- | --------------------- | -------- | ------------ |
| \`src\`                | \`string\`              | **必填** | 图片 URL     |
| \`alt\`                | \`string\`              | \`""\`     | 替代文本     |
| \`loading\`            | \`"lazy" \\| "eager"\`   | \`"lazy"\` | 加载策略     |
| \`rootMargin\`         | \`string\`              | \`"0px"\`  | 视口边距     |
| \`threshold\`          | \`number \\| number[]\`  | \`0.01\`   | 可见度阈值   |
| \`containerStyle\`     | \`React.CSSProperties\` | \`{}\`     | 容器样式     |
| \`imageStyle\`         | \`React.CSSProperties\` | \`{}\`     | 图片样式     |
| \`containerClassName\` | \`string\`              | \`""\`     | 容器类名     |
| \`imageClassName\`     | \`string\`              | \`""\`     | 图片类名     |
| \`onLoad\`             | \`() => void\`          | -        | 加载完成回调 |
| \`onError\`            | \`() => void\`          | -        | 加载失败回调 |

### HOC：\`withPlugins\`

\`\`\`tsx
function withPlugins<P extends CoreImageProps>(
  Component: React.ComponentType<P>,
  plugins: Plugin[]
): React.FC<P>;
\`\`\`

#### 参数

- \`Component\`：核心组件（通常是 \`LazyLoadImageCore\`）
- \`plugins\`：插件数组

#### 返回值

增强后的 React 组件

### 插件类型定义

#### 核心插件接口

\`\`\`typescript
interface LazyImagePlugin {
  name: string;
  version?: string;
  hooks: PluginHooks;
  config?: Record<string, any>;
  init?: () => void | Promise<void>;
  destroy?: () => void | Promise<void>;
}
\`\`\`

#### 插件上下文

\`\`\`typescript
interface PluginContext {
  // 基础属性
  src: string;
  imageState: UseImageStateReturnLike;
  containerRef: React.RefObject<HTMLElement | null>;
  imageRef?: React.RefObject<HTMLImageElement | null>;
  isIntersecting: boolean;
  props: LazyLoadImageCoreProps;
  bus?: PluginBus;

  // 扩展上下文
  networkInfo?: NetworkInfo;
  deviceInfo?: DeviceInfo;
  dimensions?: {
    width: number;
    height: number;
    naturalWidth?: number;
    naturalHeight?: number;
  };
  performanceData?: {
    loadStartTime: number;
    loadEndTime?: number;
    duration?: number;
    size?: number;
  };
  sharedData?: Map<string, any>;
}

interface UseImageStateReturnLike {
  isIdle: boolean;
  isLoading: boolean;
  isLoaded: boolean;
  isError: boolean;
}
\`\`\`

#### 插件钩子

\`\`\`typescript
interface PluginHooks {
  // 生命周期钩子
  onMount?: (context: PluginContext) => void | (() => void);
  onUnmount?: (context: PluginContext) => void;

  // 加载流程钩子
  onBeforeLoad?: (context: PluginContext) => boolean | Promise<boolean>;
  onLoad?: (
    context: PluginContext
  ) => string | Promise<string | undefined> | undefined;
  onLoadSuccess?: (
    context: PluginContext,
    displaySrc: string
  ) => void | Promise<void>;
  onLoadError?: (
    context: PluginContext,
    error: Error
  ) => boolean | Promise<boolean>;

  // 视口钩子
  onEnterViewport?: (context: PluginContext) => void;
  onLeaveViewport?: (context: PluginContext) => void;
  onVisibilityChange?: (context: PluginContext, isVisible: boolean) => void;

  // 进度与重试
  onProgress?: (context: PluginContext, progress: ProgressInfo) => void;
  onRetry?: (
    context: PluginContext,
    retryCount: number,
    maxRetries: number
  ) => void;

  // 状态变化钩子
  onSrcChange?: (
    context: PluginContext,
    oldSrc: string,
    newSrc: string
  ) => void;
  onNetworkChange?: (context: PluginContext, networkInfo: NetworkInfo) => void;
  onResize?: (context: PluginContext, dimensions: Dimensions) => void;

  // 交互钩子
  onInteraction?: (
    context: PluginContext,
    interactionType: InteractionType
  ) => void;

  // 其他钩子
  onAbort?: (context: PluginContext) => void;
  onDecode?: (context: PluginContext) => void;
  onPaint?: (context: PluginContext) => void;

  // 渲染钩子
  render?: (context: PluginContext) => React.ReactNode;
  renderOverlay?: (context: PluginContext) => React.ReactNode;

  // Props 转换
  transformProps?: (props: LazyLoadImageCoreProps) => LazyLoadImageCoreProps;
}
\`\`\`

#### 辅助类型

\`\`\`typescript
// 进度信息
interface ProgressInfo {
  loaded: number;
  total: number;
  percent: number; // 0~100
  indeterminate?: boolean; // 当无法获取总大小时为 true
}

// 网络信息
interface NetworkInfo {
  effectiveType: "4g" | "3g" | "2g" | "slow-2g";
  downlink: number; // Mbps
  rtt: number; // ms
  saveData: boolean;
}

// 设备信息
interface DeviceInfo {
  type: "mobile" | "tablet" | "desktop";
  os: string;
  browser: string;
  devicePixelRatio: number;
  viewportWidth: number;
  viewportHeight: number;
}

// 尺寸信息
interface Dimensions {
  width: number;
  height: number;
}

// 交互类型
type InteractionType = "click" | "hover" | "focus" | "touch";
\`\`\`

#### 插件通信总线

\`\`\`typescript
interface PluginBus {
  emit: (event: string, data: any) => void;
  on: (event: string, handler: (data: any) => void) => () => void;
  getData: (key: string) => any;
  setData: (key: string, value: any) => void;
}
\`\`\`

#### 插件管理器

\`\`\`typescript
interface PluginManager {
  register: (plugin: LazyImagePlugin) => void;
  unregister: (pluginName: string) => void;
  getPlugin: (pluginName: string) => LazyImagePlugin | undefined;
  getAllPlugins: () => LazyImagePlugin[];
  executeHook: <K extends keyof PluginHooks>(
    hookName: K,
    context: PluginContext,
    ...args: any[]
  ) => Promise<any>;
}
\`\`\`

---

## 🔨 自定义插件开发

创建自定义插件非常简单，只需实现 \`LazyImagePlugin\` 接口：

### 基础插件示例

\`\`\`tsx
import type { LazyImagePlugin } from "vane-lazy-image";

interface MyPluginOptions {
  message?: string;
  showOverlay?: boolean;
}

export function createMyCustomPlugin(
  options: MyPluginOptions = {}
): LazyImagePlugin {
  const { message = "自定义插件", showOverlay = true } = options;

  return {
    name: "my-custom-plugin",
    version: "1.0.0",
    config: options,

    // 插件初始化
    init: async () => {
      console.log(\`\${message} 初始化\`);
    },

    // 插件销毁
    destroy: async () => {
      console.log(\`\${message} 销毁\`);
    },

    // 插件钩子
    hooks: {
      // 组件挂载时
      onMount: (context) => {
        console.log("组件挂载", context.src);

        // 返回清理函数（可选）
        return () => {
          console.log("组件卸载清理");
        };
      },

      // 加载前检查
      onBeforeLoad: (context) => {
        console.log("准备加载", context.src);
        // 返回 false 可以阻止加载
        return true;
      },

      // 修改图片源
      onLoad: (context) => {
        // 可以返回修改后的 src
        return context.src + "?custom=param";
      },

      // 加载成功
      onLoadSuccess: (context, displaySrc) => {
        console.log("加载成功", displaySrc);
      },

      // 加载失败
      onLoadError: (context, error) => {
        console.error("加载失败", error);
        // 返回 true 表示已处理错误
        return true;
      },

      // 进入视口
      onEnterViewport: (context) => {
        console.log("进入视口");
      },

      // 离开视口
      onLeaveViewport: (context) => {
        console.log("离开视口");
      },

      // 加载进度
      onProgress: (context, progress) => {
        console.log(\`加载进度: \${progress.percent}%\`);
      },

      // 渲染覆盖层
      renderOverlay: (context) => {
        if (!showOverlay) return null;

        return (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              pointerEvents: "none",
            }}
          >
            {message}
          </div>
        );
      },
    },
  };
}
\`\`\`

### 高级插件示例：带状态管理

\`\`\`tsx
import { useState } from "react";
import type { LazyImagePlugin, PluginContext } from "vane-lazy-image";

interface AdvancedPluginOptions {
  enableCache?: boolean;
  timeout?: number;
}

export function createAdvancedPlugin(
  options: AdvancedPluginOptions = {}
): LazyImagePlugin {
  const { enableCache = true, timeout = 5000 } = options;
  const cache = new Map<string, string>();

  return {
    name: "advanced-plugin",
    version: "1.0.0",

    hooks: {
      onMount: (context) => {
        // 使用插件总线进行通信
        const unsubscribe = context.bus?.on("custom-event", (data) => {
          console.log("收到自定义事件", data);
        });

        // 设置共享数据
        context.sharedData?.set("startTime", Date.now());

        return () => {
          unsubscribe?.();
        };
      },

      onLoad: async (context) => {
        // 检查缓存
        if (enableCache && cache.has(context.src)) {
          return cache.get(context.src);
        }

        // 添加超时控制
        return new Promise((resolve) => {
          const timer = setTimeout(() => {
            resolve(context.src);
          }, timeout);

          // 清理定时器
          context.bus?.on("abort", () => {
            clearTimeout(timer);
          });
        });
      },

      onLoadSuccess: (context, displaySrc) => {
        // 缓存成功的图片
        if (enableCache) {
          cache.set(context.src, displaySrc);
        }

        // 发送自定义事件
        context.bus?.emit("load-complete", {
          src: context.src,
          duration: Date.now() - (context.sharedData?.get("startTime") || 0),
        });
      },

      onNetworkChange: (context, networkInfo) => {
        console.log("网络状态变化", networkInfo);

        // 根据网络状态调整策略
        if (networkInfo.saveData) {
          console.log("开启省流模式");
        }
      },

      renderOverlay: (context) => {
        const { isLoading, isError } = context.imageState;

        if (isLoading) {
          return <div>加载中...</div>;
        }

        if (isError) {
          return <div>加载失败</div>;
        }

        return null;
      },
    },
  };
}
\`\`\`

### 插件开发最佳实践

#### 1. 命名规范

\`\`\`tsx
// ✅ 好的命名
export function createWatermarkPlugin(options) { ... }
export function createRetryOnErrorPlugin(options) { ... }

// ❌ 避免的命名
export function watermark(options) { ... }
export function plugin(options) { ... }
\`\`\`

#### 2. 钩子优先级

钩子按优先级分类：

- **高优先级**：\`onProgress\`, \`onRetry\`, \`onSrcChange\`, \`onNetworkChange\`
- **中优先级**：\`onVisibilityChange\`, \`onResize\`, \`onInteraction\`, \`onAbort\`
- **低优先级**：\`onDecode\`, \`onPaint\`

#### 3. 错误处理

\`\`\`tsx
hooks: {
  onLoadError: (context, error) => {
    try {
      // 处理错误
      console.error("插件错误", error);

      // 返回 true 表示已处理
      return true;
    } catch (e) {
      // 避免插件错误影响其他插件
      console.warn("错误处理失败", e);
      return false;
    }
  },
}
\`\`\`

#### 4. 清理资源

\`\`\`tsx
hooks: {
  onMount: (context) => {
    const timer = setInterval(() => {
      // 定期任务
    }, 1000);

    // 返回清理函数
    return () => {
      clearInterval(timer);
    };
  },
}
\`\`\`

#### 5. 使用插件总线

\`\`\`tsx
hooks: {
  onMount: (context) => {
    // 订阅事件
    const unsubscribe = context.bus?.on("custom-event", (data) => {
      console.log(data);
    });

    // 发送事件
    context.bus?.emit("plugin-ready", { name: "my-plugin" });

    // 共享数据
    context.bus?.setData("myKey", "myValue");

    return unsubscribe;
  },
}
\`\`\`

---

## 💡 使用技巧

### 1. 组合多个视觉效果

\`\`\`tsx
const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createSkeletonPlugin({ type: "shimmer" }),
  createBlurUpPlugin({ duration: 400 }),
  createFadeInPlugin({ duration: 600 }),
  createWatermarkPlugin({ text: "VANE" }),
]);
\`\`\`

### 2. 性能优化最佳实践

\`\`\`tsx
const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createPreconnectPlugin({ domains: ["https://cdn.example.com"] }),
  createMemoryCachePlugin({ maxSize: 50 }),
  createConcurrencyControlPlugin({ maxConcurrent: 4 }),
  createImageOptimizationPlugin({ defaultQuality: 80 }),
]);
\`\`\`

### 3. 错误处理完整方案

\`\`\`tsx
const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createRetryOnErrorPlugin({ maxRetries: 3 }),
  createCDNFallbackPlugin({ fallbackUrls: ["https://backup.cdn.com"] }),
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),
  createErrorOverlayPlugin({ showRetryButton: true }),
]);
\`\`\`

---

## ❓ 常见问题

### Q: "Loading..." 文本没有居中？

**A:** 确保容器使用了正确的定位方式。推荐使用绝对定位 + Flexbox：

\`\`\`tsx
containerStyle={{
  position: "relative",
  width: "100%",
  height: "100%",
}}
\`\`\`

覆盖层样式：

\`\`\`css
position: absolute;
inset: 0;
display: flex;
align-items: center;
justify-content: center;
\`\`\`

### Q: 悬停预取不生效？

**A:** 检查以下几点：

1. 确保设备支持 \`mouseenter\` 事件（触屏设备需要使用 \`touchstart\`）
2. 检查覆盖层是否设置了 \`pointerEvents: "none"\`
3. 确认网络面板中是否有预取请求

### Q: 进度条不显示？

**A:** 资源可能被缓存。解决方法：

1. 打开浏览器开发者工具
2. 在 Network 面板禁用缓存
3. 或者使用网络限速功能模拟慢速网络

### Q: 如何调试插件？

**A:** 使用 \`createEventLoggerPlugin\`：

\`\`\`tsx
const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createEventLoggerPlugin(),
  // 其他插件...
]);
\`\`\`

### Q: 如何在生产环境中使用？

**A:** 安装 npm 包后直接导入：

\`\`\`tsx
import {
  LazyLoadImageCore,
  withPlugins,
  createWatermarkPlugin,
} from "vane-lazy-image";
\`\`\`

### Q: TypeScript 类型报错？

**A:** 确保安装了类型定义，或者临时使用 \`as any\`：

\`\`\`tsx
const LazyImage = withPlugins(LazyLoadImageCore as any, plugins);
\`\`\`

---

## 🌐 浏览器支持

| 浏览器  | 版本 |
| ------- | ---- |
| Chrome  | ≥ 88 |
| Firefox | ≥ 85 |
| Safari  | ≥ 14 |
| Edge    | ≥ 88 |

> 对于不支持 \`IntersectionObserver\` 的老旧浏览器，组件会自动降级为立即加载模式。

---

## 🛠️ 技术栈

- **框架**：React 18+
- **语言**：TypeScript 5+
- **构建工具**：Vite 5+
- **样式**：CSS-in-JS（内联样式）
- **代码高亮**：react-syntax-highlighter

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发流程

1. Fork 本仓库
2. 创建特性分支：\`git checkout -b feature/your-feature\`
3. 提交更改：\`git commit -m "Add some feature"\`
4. 推送到分支：\`git push origin feature/your-feature\`
5. 提交 Pull Request

### 代码规范

- 使用 ESLint 进行代码检查
- 遵循 TypeScript 严格模式
- 保持代码简洁、可读
- 为新功能添加测试和文档

---

## 📄 许可证

[MIT License](./LICENSE) © 2025 Frank Vane

---

## 🔗 相关链接

- [GitHub 仓库](https://github.com/frankvane/vane-lazy-image)
- [NPM 包](https://www.npmjs.com/package/vane-lazy-image)
- [在线演示](https://chinavane.netlify.app/)
- [问题反馈](https://github.com/frankvane/vane-lazy-image/issues)
- [更新日志](./CHANGELOG.md)

---

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

如果这个项目对您有帮助，欢迎 ⭐ Star 支持！

---

Made with ❤️ by Frank Vane
`;function Zt(n,e){const t=String(n);if(typeof e!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(e);for(;i!==-1;)r++,i=t.indexOf(e,i+e.length);return r}function os(n){if(typeof n!="string")throw new TypeError("Expected a string");return n.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function as(n,e,t){const i=pe((t||{}).ignore||[]),o=us(e);let l=-1;for(;++l<o.length;)jr(n,"text",a);function a(s,f){let c=-1,h;for(;++c<f.length;){const p=f[c],d=h?h.children:void 0;if(i(p,d?d.indexOf(p):void 0,h))return;h=p}if(h)return u(s,f)}function u(s,f){const c=f[f.length-1],h=o[l][0],p=o[l][1];let d=0;const S=c.children.indexOf(s);let y=!1,v=[];h.lastIndex=0;let P=h.exec(s.value);for(;P;){const D=P.index,F={index:P.index,input:P.input,stack:[...f,s]};let w=p(...P,F);if(typeof w=="string"&&(w=w.length>0?{type:"text",value:w}:void 0),w===!1?h.lastIndex=D+1:(d!==D&&v.push({type:"text",value:s.value.slice(d,D)}),Array.isArray(w)?v.push(...w):w&&v.push(w),d=D+P[0].length,y=!0),!h.global)break;P=h.exec(s.value)}return y?(d<s.value.length&&v.push({type:"text",value:s.value.slice(d)}),c.children.splice(S,1,...v)):v=[s],S+v.length}}function us(n){const e=[];if(!Array.isArray(n))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!n[0]||Array.isArray(n[0])?n:[n];let r=-1;for(;++r<t.length;){const i=t[r];e.push([ss(i[0]),cs(i[1])])}return e}function ss(n){return typeof n=="string"?new RegExp(os(n),"g"):n}function cs(n){return typeof n=="function"?n:function(){return n}}const Ie="phrasing",ve=["autolink","link","image","label"];function fs(){return{transforms:[xs],enter:{literalAutolink:hs,literalAutolinkEmail:Ee,literalAutolinkHttp:Ee,literalAutolinkWww:Ee},exit:{literalAutolink:ys,literalAutolinkEmail:ds,literalAutolinkHttp:ms,literalAutolinkWww:gs}}}function ps(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ie,notInConstruct:ve},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ie,notInConstruct:ve},{character:":",before:"[ps]",after:"\\/",inConstruct:Ie,notInConstruct:ve}]}}function hs(n){this.enter({type:"link",title:null,url:"",children:[]},n)}function Ee(n){this.config.enter.autolinkProtocol.call(this,n)}function ms(n){this.config.exit.autolinkProtocol.call(this,n)}function gs(n){this.config.exit.data.call(this,n);const e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(n)}function ds(n){this.config.exit.autolinkEmail.call(this,n)}function ys(n){this.exit(n)}function xs(n){as(n,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,ks],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),bs]],{ignore:["link","linkReference"]})}function ks(n,e,t,r,i){let o="";if(!Ur(i)||(/^w/i.test(e)&&(t=e+t,e="",o="http://"),!ws(t)))return!1;const l=Cs(t+r);if(!l[0])return!1;const a={type:"link",title:null,url:o+e+l[0],children:[{type:"text",value:e+l[0]}]};return l[1]?[a,{type:"text",value:l[1]}]:a}function bs(n,e,t,r){return!Ur(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+t,children:[{type:"text",value:e+"@"+t}]}}function ws(n){const e=n.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function Cs(n){const e=/[!"&'),.:;<>?\]}]+$/.exec(n);if(!e)return[n,void 0];n=n.slice(0,e.index);let t=e[0],r=t.indexOf(")");const i=Zt(n,"(");let o=Zt(n,")");for(;r!==-1&&i>o;)n+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),o++;return[n,t]}function Ur(n,e){const t=n.input.charCodeAt(n.index-1);return(n.index===0||vn(t)||se(t))&&(!e||t!==47)}qr.peek=Ts;function Ss(){this.buffer()}function Ps(n){this.enter({type:"footnoteReference",identifier:"",label:""},n)}function Is(){this.buffer()}function vs(n){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},n)}function Es(n){const e=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=fn(this.sliceSerialize(n)).toLowerCase(),t.label=e}function zs(n){this.exit(n)}function Ls(n){const e=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=fn(this.sliceSerialize(n)).toLowerCase(),t.label=e}function As(n){this.exit(n)}function Ts(){return"["}function qr(n,e,t,r){const i=t.createTracker(r);let o=i.move("[^");const l=t.enter("footnoteReference"),a=t.enter("reference");return o+=i.move(t.safe(t.associationId(n),{after:"]",before:o})),a(),l(),o+=i.move("]"),o}function Ds(){return{enter:{gfmFootnoteCallString:Ss,gfmFootnoteCall:Ps,gfmFootnoteDefinitionLabelString:Is,gfmFootnoteDefinition:vs},exit:{gfmFootnoteCallString:Es,gfmFootnoteCall:zs,gfmFootnoteDefinitionLabelString:Ls,gfmFootnoteDefinition:As}}}function Fs(n){let e=!1;return n&&n.firstLineBlank&&(e=!0),{handlers:{footnoteDefinition:t,footnoteReference:qr},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,o,l){const a=o.createTracker(l);let u=a.move("[^");const s=o.enter("footnoteDefinition"),f=o.enter("label");return u+=a.move(o.safe(o.associationId(r),{before:u,after:"]"})),f(),u+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),u+=a.move((e?`
`:" ")+o.indentLines(o.containerFlow(r,a.current()),e?$r:Rs))),s(),u}}function Rs(n,e,t){return e===0?n:$r(n,e,t)}function $r(n,e,t){return(t?"":"    ")+n}const Os=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Wr.peek=js;function Ms(){return{canContainEols:["delete"],enter:{strikethrough:Bs},exit:{strikethrough:Ns}}}function _s(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Os}],handlers:{delete:Wr}}}function Bs(n){this.enter({type:"delete",children:[]},n)}function Ns(n){this.exit(n)}function Wr(n,e,t,r){const i=t.createTracker(r),o=t.enter("strikethrough");let l=i.move("~~");return l+=t.containerPhrasing(n,{...i.current(),before:l,after:"~"}),l+=i.move("~~"),o(),l}function js(){return"~"}function Hs(n){return n.length}function Vs(n,e){const t=e||{},r=(t.align||[]).concat(),i=t.stringLength||Hs,o=[],l=[],a=[],u=[];let s=0,f=-1;for(;++f<n.length;){const k=[],S=[];let y=-1;for(n[f].length>s&&(s=n[f].length);++y<n[f].length;){const v=Us(n[f][y]);if(t.alignDelimiters!==!1){const P=i(v);S[y]=P,(u[y]===void 0||P>u[y])&&(u[y]=P)}k.push(v)}l[f]=k,a[f]=S}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<s;)o[c]=nr(r[c]);else{const k=nr(r);for(;++c<s;)o[c]=k}c=-1;const h=[],p=[];for(;++c<s;){const k=o[c];let S="",y="";k===99?(S=":",y=":"):k===108?S=":":k===114&&(y=":");let v=t.alignDelimiters===!1?1:Math.max(1,u[c]-S.length-y.length);const P=S+"-".repeat(v)+y;t.alignDelimiters!==!1&&(v=S.length+v+y.length,v>u[c]&&(u[c]=v),p[c]=v),h[c]=P}l.splice(1,0,h),a.splice(1,0,p),f=-1;const d=[];for(;++f<l.length;){const k=l[f],S=a[f];c=-1;const y=[];for(;++c<s;){const v=k[c]||"";let P="",D="";if(t.alignDelimiters!==!1){const F=u[c]-(S[c]||0),w=o[c];w===114?P=" ".repeat(F):w===99?F%2?(P=" ".repeat(F/2+.5),D=" ".repeat(F/2-.5)):(P=" ".repeat(F/2),D=P):D=" ".repeat(F)}t.delimiterStart!==!1&&!c&&y.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&v==="")&&(t.delimiterStart!==!1||c)&&y.push(" "),t.alignDelimiters!==!1&&y.push(P),y.push(v),t.alignDelimiters!==!1&&y.push(D),t.padding!==!1&&y.push(" "),(t.delimiterEnd!==!1||c!==s-1)&&y.push("|")}d.push(t.delimiterEnd===!1?y.join("").replace(/ +$/,""):y.join(""))}return d.join(`
`)}function Us(n){return n==null?"":String(n)}function nr(n){const e=typeof n=="string"?n.codePointAt(0):0;return e===67||e===99?99:e===76||e===108?108:e===82||e===114?114:0}function qs(n,e,t,r){const i=t.enter("blockquote"),o=t.createTracker(r);o.move("> "),o.shift(2);const l=t.indentLines(t.containerFlow(n,o.current()),$s);return i(),l}function $s(n,e,t){return">"+(t?"":" ")+n}function Ws(n,e){return er(n,e.inConstruct,!0)&&!er(n,e.notInConstruct,!1)}function er(n,e,t){if(typeof e=="string"&&(e=[e]),!e||e.length===0)return t;let r=-1;for(;++r<e.length;)if(n.includes(e[r]))return!0;return!1}function tr(n,e,t,r){let i=-1;for(;++i<t.unsafe.length;)if(t.unsafe[i].character===`
`&&Ws(t.stack,t.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function Ks(n,e){const t=String(n);let r=t.indexOf(e),i=r,o=0,l=0;if(typeof e!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>l&&(l=o):o=1,i=r+e.length,r=t.indexOf(e,i);return l}function Qs(n,e){return!!(e.options.fences===!1&&n.value&&!n.lang&&/[^ \r\n]/.test(n.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(n.value))}function Gs(n){const e=n.options.fence||"`";if(e!=="`"&&e!=="~")throw new Error("Cannot serialize code with `"+e+"` for `options.fence`, expected `` ` `` or `~`");return e}function Xs(n,e,t,r){const i=Gs(t),o=n.value||"",l=i==="`"?"GraveAccent":"Tilde";if(Qs(n,t)){const c=t.enter("codeIndented"),h=t.indentLines(o,Ys);return c(),h}const a=t.createTracker(r),u=i.repeat(Math.max(Ks(o,i)+1,3)),s=t.enter("codeFenced");let f=a.move(u);if(n.lang){const c=t.enter(`codeFencedLang${l}`);f+=a.move(t.safe(n.lang,{before:f,after:" ",encode:["`"],...a.current()})),c()}if(n.lang&&n.meta){const c=t.enter(`codeFencedMeta${l}`);f+=a.move(" "),f+=a.move(t.safe(n.meta,{before:f,after:`
`,encode:["`"],...a.current()})),c()}return f+=a.move(`
`),o&&(f+=a.move(o+`
`)),f+=a.move(u),s(),f}function Ys(n,e,t){return(t?"":"    ")+n}function rt(n){const e=n.options.quote||'"';if(e!=='"'&&e!=="'")throw new Error("Cannot serialize title with `"+e+"` for `options.quote`, expected `\"`, or `'`");return e}function Js(n,e,t,r){const i=rt(t),o=i==='"'?"Quote":"Apostrophe",l=t.enter("definition");let a=t.enter("label");const u=t.createTracker(r);let s=u.move("[");return s+=u.move(t.safe(t.associationId(n),{before:s,after:"]",...u.current()})),s+=u.move("]: "),a(),!n.url||/[\0- \u007F]/.test(n.url)?(a=t.enter("destinationLiteral"),s+=u.move("<"),s+=u.move(t.safe(n.url,{before:s,after:">",...u.current()})),s+=u.move(">")):(a=t.enter("destinationRaw"),s+=u.move(t.safe(n.url,{before:s,after:n.title?" ":`
`,...u.current()}))),a(),n.title&&(a=t.enter(`title${o}`),s+=u.move(" "+i),s+=u.move(t.safe(n.title,{before:s,after:i,...u.current()})),s+=u.move(i),a()),l(),s}function Zs(n){const e=n.options.emphasis||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize emphasis with `"+e+"` for `options.emphasis`, expected `*`, or `_`");return e}function Wn(n){return"&#x"+n.toString(16).toUpperCase()+";"}function ae(n,e,t){const r=Rn(n),i=Rn(e);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Kr.peek=nc;function Kr(n,e,t,r){const i=Zs(t),o=t.enter("emphasis"),l=t.createTracker(r),a=l.move(i);let u=l.move(t.containerPhrasing(n,{after:i,before:a,...l.current()}));const s=u.charCodeAt(0),f=ae(r.before.charCodeAt(r.before.length-1),s,i);f.inside&&(u=Wn(s)+u.slice(1));const c=u.charCodeAt(u.length-1),h=ae(r.after.charCodeAt(0),c,i);h.inside&&(u=u.slice(0,-1)+Wn(c));const p=l.move(i);return o(),t.attentionEncodeSurroundingInfo={after:h.outside,before:f.outside},a+u+p}function nc(n,e,t){return t.options.emphasis||"*"}function ec(n,e){let t=!1;return et(n,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,Me}),!!((!n.depth||n.depth<3)&&Qe(n)&&(e.options.setext||t))}function tc(n,e,t,r){const i=Math.max(Math.min(6,n.depth||1),1),o=t.createTracker(r);if(ec(n,t)){const f=t.enter("headingSetext"),c=t.enter("phrasing"),h=t.containerPhrasing(n,{...o.current(),before:`
`,after:`
`});return c(),f(),h+`
`+(i===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const l="#".repeat(i),a=t.enter("headingAtx"),u=t.enter("phrasing");o.move(l+" ");let s=t.containerPhrasing(n,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(s)&&(s=Wn(s.charCodeAt(0))+s.slice(1)),s=s?l+" "+s:l,t.options.closeAtx&&(s+=" "+l),u(),a(),s}Qr.peek=rc;function Qr(n){return n.value||""}function rc(){return"<"}Gr.peek=ic;function Gr(n,e,t,r){const i=rt(t),o=i==='"'?"Quote":"Apostrophe",l=t.enter("image");let a=t.enter("label");const u=t.createTracker(r);let s=u.move("![");return s+=u.move(t.safe(n.alt,{before:s,after:"]",...u.current()})),s+=u.move("]("),a(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(a=t.enter("destinationLiteral"),s+=u.move("<"),s+=u.move(t.safe(n.url,{before:s,after:">",...u.current()})),s+=u.move(">")):(a=t.enter("destinationRaw"),s+=u.move(t.safe(n.url,{before:s,after:n.title?" ":")",...u.current()}))),a(),n.title&&(a=t.enter(`title${o}`),s+=u.move(" "+i),s+=u.move(t.safe(n.title,{before:s,after:i,...u.current()})),s+=u.move(i),a()),s+=u.move(")"),l(),s}function ic(){return"!"}Xr.peek=lc;function Xr(n,e,t,r){const i=n.referenceType,o=t.enter("imageReference");let l=t.enter("label");const a=t.createTracker(r);let u=a.move("![");const s=t.safe(n.alt,{before:u,after:"]",...a.current()});u+=a.move(s+"]["),l();const f=t.stack;t.stack=[],l=t.enter("reference");const c=t.safe(t.associationId(n),{before:u,after:"]",...a.current()});return l(),t.stack=f,o(),i==="full"||!s||s!==c?u+=a.move(c+"]"):i==="shortcut"?u=u.slice(0,-1):u+=a.move("]"),u}function lc(){return"!"}Yr.peek=oc;function Yr(n,e,t){let r=n.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<t.unsafe.length;){const l=t.unsafe[o],a=t.compilePattern(l);let u;if(l.atBreak)for(;u=a.exec(r);){let s=u.index;r.charCodeAt(s)===10&&r.charCodeAt(s-1)===13&&s--,r=r.slice(0,s)+" "+r.slice(u.index+1)}}return i+r+i}function oc(){return"`"}function Jr(n,e){const t=Qe(n);return!!(!e.options.resourceLink&&n.url&&!n.title&&n.children&&n.children.length===1&&n.children[0].type==="text"&&(t===n.url||"mailto:"+t===n.url)&&/^[a-z][a-z+.-]+:/i.test(n.url)&&!/[\0- <>\u007F]/.test(n.url))}Zr.peek=ac;function Zr(n,e,t,r){const i=rt(t),o=i==='"'?"Quote":"Apostrophe",l=t.createTracker(r);let a,u;if(Jr(n,t)){const f=t.stack;t.stack=[],a=t.enter("autolink");let c=l.move("<");return c+=l.move(t.containerPhrasing(n,{before:c,after:">",...l.current()})),c+=l.move(">"),a(),t.stack=f,c}a=t.enter("link"),u=t.enter("label");let s=l.move("[");return s+=l.move(t.containerPhrasing(n,{before:s,after:"](",...l.current()})),s+=l.move("]("),u(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(u=t.enter("destinationLiteral"),s+=l.move("<"),s+=l.move(t.safe(n.url,{before:s,after:">",...l.current()})),s+=l.move(">")):(u=t.enter("destinationRaw"),s+=l.move(t.safe(n.url,{before:s,after:n.title?" ":")",...l.current()}))),u(),n.title&&(u=t.enter(`title${o}`),s+=l.move(" "+i),s+=l.move(t.safe(n.title,{before:s,after:i,...l.current()})),s+=l.move(i),u()),s+=l.move(")"),a(),s}function ac(n,e,t){return Jr(n,t)?"<":"["}ni.peek=uc;function ni(n,e,t,r){const i=n.referenceType,o=t.enter("linkReference");let l=t.enter("label");const a=t.createTracker(r);let u=a.move("[");const s=t.containerPhrasing(n,{before:u,after:"]",...a.current()});u+=a.move(s+"]["),l();const f=t.stack;t.stack=[],l=t.enter("reference");const c=t.safe(t.associationId(n),{before:u,after:"]",...a.current()});return l(),t.stack=f,o(),i==="full"||!s||s!==c?u+=a.move(c+"]"):i==="shortcut"?u=u.slice(0,-1):u+=a.move("]"),u}function uc(){return"["}function it(n){const e=n.options.bullet||"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bullet`, expected `*`, `+`, or `-`");return e}function sc(n){const e=it(n),t=n.options.bulletOther;if(!t)return e==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===e)throw new Error("Expected `bullet` (`"+e+"`) and `bulletOther` (`"+t+"`) to be different");return t}function cc(n){const e=n.options.bulletOrdered||".";if(e!=="."&&e!==")")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOrdered`, expected `.` or `)`");return e}function ei(n){const e=n.options.rule||"*";if(e!=="*"&&e!=="-"&&e!=="_")throw new Error("Cannot serialize rules with `"+e+"` for `options.rule`, expected `*`, `-`, or `_`");return e}function fc(n,e,t,r){const i=t.enter("list"),o=t.bulletCurrent;let l=n.ordered?cc(t):it(t);const a=n.ordered?l==="."?")":".":sc(t);let u=e&&t.bulletLastUsed?l===t.bulletLastUsed:!1;if(!n.ordered){const f=n.children?n.children[0]:void 0;if((l==="*"||l==="-")&&f&&(!f.children||!f.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(u=!0),ei(t)===l&&f){let c=-1;for(;++c<n.children.length;){const h=n.children[c];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){u=!0;break}}}}u&&(l=a),t.bulletCurrent=l;const s=t.containerFlow(n,r);return t.bulletLastUsed=l,t.bulletCurrent=o,i(),s}function pc(n){const e=n.options.listItemIndent||"one";if(e!=="tab"&&e!=="one"&&e!=="mixed")throw new Error("Cannot serialize items with `"+e+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return e}function hc(n,e,t,r){const i=pc(t);let o=t.bulletCurrent||it(t);e&&e.type==="list"&&e.ordered&&(o=(typeof e.start=="number"&&e.start>-1?e.start:1)+(t.options.incrementListMarker===!1?0:e.children.indexOf(n))+o);let l=o.length+1;(i==="tab"||i==="mixed"&&(e&&e.type==="list"&&e.spread||n.spread))&&(l=Math.ceil(l/4)*4);const a=t.createTracker(r);a.move(o+" ".repeat(l-o.length)),a.shift(l);const u=t.enter("listItem"),s=t.indentLines(t.containerFlow(n,a.current()),f);return u(),s;function f(c,h,p){return h?(p?"":" ".repeat(l))+c:(p?o:o+" ".repeat(l-o.length))+c}}function mc(n,e,t,r){const i=t.enter("paragraph"),o=t.enter("phrasing"),l=t.containerPhrasing(n,r);return o(),i(),l}const gc=pe(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function dc(n,e,t,r){return(n.children.some(function(l){return gc(l)})?t.containerPhrasing:t.containerFlow).call(t,n,r)}function yc(n){const e=n.options.strong||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize strong with `"+e+"` for `options.strong`, expected `*`, or `_`");return e}ti.peek=xc;function ti(n,e,t,r){const i=yc(t),o=t.enter("strong"),l=t.createTracker(r),a=l.move(i+i);let u=l.move(t.containerPhrasing(n,{after:i,before:a,...l.current()}));const s=u.charCodeAt(0),f=ae(r.before.charCodeAt(r.before.length-1),s,i);f.inside&&(u=Wn(s)+u.slice(1));const c=u.charCodeAt(u.length-1),h=ae(r.after.charCodeAt(0),c,i);h.inside&&(u=u.slice(0,-1)+Wn(c));const p=l.move(i+i);return o(),t.attentionEncodeSurroundingInfo={after:h.outside,before:f.outside},a+u+p}function xc(n,e,t){return t.options.strong||"*"}function kc(n,e,t,r){return t.safe(n.value,r)}function bc(n){const e=n.options.ruleRepetition||3;if(e<3)throw new Error("Cannot serialize rules with repetition `"+e+"` for `options.ruleRepetition`, expected `3` or more");return e}function wc(n,e,t){const r=(ei(t)+(t.options.ruleSpaces?" ":"")).repeat(bc(t));return t.options.ruleSpaces?r.slice(0,-1):r}const ri={blockquote:qs,break:tr,code:Xs,definition:Js,emphasis:Kr,hardBreak:tr,heading:tc,html:Qr,image:Gr,imageReference:Xr,inlineCode:Yr,link:Zr,linkReference:ni,list:fc,listItem:hc,paragraph:mc,root:dc,strong:ti,text:kc,thematicBreak:wc};function Cc(){return{enter:{table:Sc,tableData:rr,tableHeader:rr,tableRow:Ic},exit:{codeText:vc,table:Pc,tableData:ze,tableHeader:ze,tableRow:ze}}}function Sc(n){const e=n._align;this.enter({type:"table",align:e.map(function(t){return t==="none"?null:t}),children:[]},n),this.data.inTable=!0}function Pc(n){this.exit(n),this.data.inTable=void 0}function Ic(n){this.enter({type:"tableRow",children:[]},n)}function ze(n){this.exit(n)}function rr(n){this.enter({type:"tableCell",children:[]},n)}function vc(n){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,Ec));const t=this.stack[this.stack.length-1];t.type,t.value=e,this.exit(n)}function Ec(n,e){return e==="|"?e:n}function zc(n){const e=n||{},t=e.tableCellPadding,r=e.tablePipeAlign,i=e.stringLength,o=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:h,table:l,tableCell:u,tableRow:a}};function l(p,d,k,S){return s(f(p,k,S),p.align)}function a(p,d,k,S){const y=c(p,k,S),v=s([y]);return v.slice(0,v.indexOf(`
`))}function u(p,d,k,S){const y=k.enter("tableCell"),v=k.enter("phrasing"),P=k.containerPhrasing(p,{...S,before:o,after:o});return v(),y(),P}function s(p,d){return Vs(p,{align:d,alignDelimiters:r,padding:t,stringLength:i})}function f(p,d,k){const S=p.children;let y=-1;const v=[],P=d.enter("table");for(;++y<S.length;)v[y]=c(S[y],d,k);return P(),v}function c(p,d,k){const S=p.children;let y=-1;const v=[],P=d.enter("tableRow");for(;++y<S.length;)v[y]=u(S[y],p,d,k);return P(),v}function h(p,d,k){let S=ri.inlineCode(p,d,k);return k.stack.includes("tableCell")&&(S=S.replace(/\|/g,"\\$&")),S}}function Lc(){return{exit:{taskListCheckValueChecked:ir,taskListCheckValueUnchecked:ir,paragraph:Tc}}}function Ac(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Dc}}}function ir(n){const e=this.stack[this.stack.length-2];e.type,e.checked=n.type==="taskListCheckValueChecked"}function Tc(n){const e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=e.children;let o=-1,l;for(;++o<i.length;){const a=i[o];if(a.type==="paragraph"){l=a;break}}l===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(n)}function Dc(n,e,t,r){const i=n.children[0],o=typeof n.checked=="boolean"&&i&&i.type==="paragraph",l="["+(n.checked?"x":" ")+"] ",a=t.createTracker(r);o&&a.move(l);let u=ri.listItem(n,e,t,{...r,...a.current()});return o&&(u=u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,s)),u;function s(f){return f+l}}function Fc(){return[fs(),Ds(),Ms(),Cc(),Lc()]}function Rc(n){return{extensions:[ps(),Fs(n),_s(),zc(n),Ac()]}}const Oc={tokenize:Hc,partial:!0},ii={tokenize:Vc,partial:!0},li={tokenize:Uc,partial:!0},oi={tokenize:qc,partial:!0},Mc={tokenize:$c,partial:!0},ai={name:"wwwAutolink",tokenize:Nc,previous:si},ui={name:"protocolAutolink",tokenize:jc,previous:ci},xn={name:"emailAutolink",tokenize:Bc,previous:fi},hn={};function _c(){return{text:hn}}let Pn=48;for(;Pn<123;)hn[Pn]=xn,Pn++,Pn===58?Pn=65:Pn===91&&(Pn=97);hn[43]=xn;hn[45]=xn;hn[46]=xn;hn[95]=xn;hn[72]=[xn,ui];hn[104]=[xn,ui];hn[87]=[xn,ai];hn[119]=[xn,ai];function Bc(n,e,t){const r=this;let i,o;return l;function l(c){return!je(c)||!fi.call(r,r.previous)||lt(r.events)?t(c):(n.enter("literalAutolink"),n.enter("literalAutolinkEmail"),a(c))}function a(c){return je(c)?(n.consume(c),a):c===64?(n.consume(c),u):t(c)}function u(c){return c===46?n.check(Mc,f,s)(c):c===45||c===95||Y(c)?(o=!0,n.consume(c),u):f(c)}function s(c){return n.consume(c),i=!0,u}function f(c){return o&&i&&Z(r.previous)?(n.exit("literalAutolinkEmail"),n.exit("literalAutolink"),e(c)):t(c)}}function Nc(n,e,t){const r=this;return i;function i(l){return l!==87&&l!==119||!si.call(r,r.previous)||lt(r.events)?t(l):(n.enter("literalAutolink"),n.enter("literalAutolinkWww"),n.check(Oc,n.attempt(ii,n.attempt(li,o),t),t)(l))}function o(l){return n.exit("literalAutolinkWww"),n.exit("literalAutolink"),e(l)}}function jc(n,e,t){const r=this;let i="",o=!1;return l;function l(c){return(c===72||c===104)&&ci.call(r,r.previous)&&!lt(r.events)?(n.enter("literalAutolink"),n.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),n.consume(c),a):t(c)}function a(c){if(Z(c)&&i.length<5)return i+=String.fromCodePoint(c),n.consume(c),a;if(c===58){const h=i.toLowerCase();if(h==="http"||h==="https")return n.consume(c),u}return t(c)}function u(c){return c===47?(n.consume(c),o?s:(o=!0,u)):t(c)}function s(c){return c===null||ie(c)||V(c)||vn(c)||se(c)?t(c):n.attempt(ii,n.attempt(li,f),t)(c)}function f(c){return n.exit("literalAutolinkHttp"),n.exit("literalAutolink"),e(c)}}function Hc(n,e,t){let r=0;return i;function i(l){return(l===87||l===119)&&r<3?(r++,n.consume(l),i):l===46&&r===3?(n.consume(l),o):t(l)}function o(l){return l===null?t(l):e(l)}}function Vc(n,e,t){let r,i,o;return l;function l(s){return s===46||s===95?n.check(oi,u,a)(s):s===null||V(s)||vn(s)||s!==45&&se(s)?u(s):(o=!0,n.consume(s),l)}function a(s){return s===95?r=!0:(i=r,r=void 0),n.consume(s),l}function u(s){return i||r||!o?t(s):e(s)}}function Uc(n,e){let t=0,r=0;return i;function i(l){return l===40?(t++,n.consume(l),i):l===41&&r<t?o(l):l===33||l===34||l===38||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===60||l===63||l===93||l===95||l===126?n.check(oi,e,o)(l):l===null||V(l)||vn(l)?e(l):(n.consume(l),i)}function o(l){return l===41&&r++,n.consume(l),i}}function qc(n,e,t){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(n.consume(a),r):a===38?(n.consume(a),o):a===93?(n.consume(a),i):a===60||a===null||V(a)||vn(a)?e(a):t(a)}function i(a){return a===null||a===40||a===91||V(a)||vn(a)?e(a):r(a)}function o(a){return Z(a)?l(a):t(a)}function l(a){return a===59?(n.consume(a),r):Z(a)?(n.consume(a),l):t(a)}}function $c(n,e,t){return r;function r(o){return n.consume(o),i}function i(o){return Y(o)?t(o):e(o)}}function si(n){return n===null||n===40||n===42||n===95||n===91||n===93||n===126||V(n)}function ci(n){return!Z(n)}function fi(n){return!(n===47||je(n))}function je(n){return n===43||n===45||n===46||n===95||Y(n)}function lt(n){let e=n.length,t=!1;for(;e--;){const r=n[e][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return n.length>0&&!t&&(n[n.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const Wc={tokenize:nf,partial:!0};function Kc(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Yc,continuation:{tokenize:Jc},exit:Zc}},text:{91:{name:"gfmFootnoteCall",tokenize:Xc},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Qc,resolveTo:Gc}}}}function Qc(n,e,t){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l;for(;i--;){const u=r.events[i][1];if(u.type==="labelImage"){l=u;break}if(u.type==="gfmFootnoteCall"||u.type==="labelLink"||u.type==="label"||u.type==="image"||u.type==="link")break}return a;function a(u){if(!l||!l._balanced)return t(u);const s=fn(r.sliceSerialize({start:l.end,end:r.now()}));return s.codePointAt(0)!==94||!o.includes(s.slice(1))?t(u):(n.enter("gfmFootnoteCallLabelMarker"),n.consume(u),n.exit("gfmFootnoteCallLabelMarker"),e(u))}}function Gc(n,e){let t=n.length;for(;t--;)if(n[t][1].type==="labelImage"&&n[t][0]==="enter"){n[t][1];break}n[t+1][1].type="data",n[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},n[t+3][1].start),end:Object.assign({},n[n.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},n[t+3][1].end),end:Object.assign({},n[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},n[n.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[n[t+1],n[t+2],["enter",r,e],n[t+3],n[t+4],["enter",i,e],["exit",i,e],["enter",o,e],["enter",l,e],["exit",l,e],["exit",o,e],n[n.length-2],n[n.length-1],["exit",r,e]];return n.splice(t,n.length-t+1,...a),n}function Xc(n,e,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,l;return a;function a(c){return n.enter("gfmFootnoteCall"),n.enter("gfmFootnoteCallLabelMarker"),n.consume(c),n.exit("gfmFootnoteCallLabelMarker"),u}function u(c){return c!==94?t(c):(n.enter("gfmFootnoteCallMarker"),n.consume(c),n.exit("gfmFootnoteCallMarker"),n.enter("gfmFootnoteCallString"),n.enter("chunkString").contentType="string",s)}function s(c){if(o>999||c===93&&!l||c===null||c===91||V(c))return t(c);if(c===93){n.exit("chunkString");const h=n.exit("gfmFootnoteCallString");return i.includes(fn(r.sliceSerialize(h)))?(n.enter("gfmFootnoteCallLabelMarker"),n.consume(c),n.exit("gfmFootnoteCallLabelMarker"),n.exit("gfmFootnoteCall"),e):t(c)}return V(c)||(l=!0),o++,n.consume(c),c===92?f:s}function f(c){return c===91||c===92||c===93?(n.consume(c),o++,s):s(c)}}function Yc(n,e,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,l=0,a;return u;function u(d){return n.enter("gfmFootnoteDefinition")._container=!0,n.enter("gfmFootnoteDefinitionLabel"),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(d),n.exit("gfmFootnoteDefinitionLabelMarker"),s}function s(d){return d===94?(n.enter("gfmFootnoteDefinitionMarker"),n.consume(d),n.exit("gfmFootnoteDefinitionMarker"),n.enter("gfmFootnoteDefinitionLabelString"),n.enter("chunkString").contentType="string",f):t(d)}function f(d){if(l>999||d===93&&!a||d===null||d===91||V(d))return t(d);if(d===93){n.exit("chunkString");const k=n.exit("gfmFootnoteDefinitionLabelString");return o=fn(r.sliceSerialize(k)),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(d),n.exit("gfmFootnoteDefinitionLabelMarker"),n.exit("gfmFootnoteDefinitionLabel"),h}return V(d)||(a=!0),l++,n.consume(d),d===92?c:f}function c(d){return d===91||d===92||d===93?(n.consume(d),l++,f):f(d)}function h(d){return d===58?(n.enter("definitionMarker"),n.consume(d),n.exit("definitionMarker"),i.includes(o)||i.push(o),M(n,p,"gfmFootnoteDefinitionWhitespace")):t(d)}function p(d){return e(d)}}function Jc(n,e,t){return n.check(Qn,e,n.attempt(Wc,e,t))}function Zc(n){n.exit("gfmFootnoteDefinition")}function nf(n,e,t){const r=this;return M(n,i,"gfmFootnoteDefinitionIndent",5);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="gfmFootnoteDefinitionIndent"&&l[2].sliceSerialize(l[1],!0).length===4?e(o):t(o)}}function ef(n){let t=(n||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(l,a){let u=-1;for(;++u<l.length;)if(l[u][0]==="enter"&&l[u][1].type==="strikethroughSequenceTemporary"&&l[u][1]._close){let s=u;for(;s--;)if(l[s][0]==="exit"&&l[s][1].type==="strikethroughSequenceTemporary"&&l[s][1]._open&&l[u][1].end.offset-l[u][1].start.offset===l[s][1].end.offset-l[s][1].start.offset){l[u][1].type="strikethroughSequence",l[s][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},l[s][1].start),end:Object.assign({},l[u][1].end)},c={type:"strikethroughText",start:Object.assign({},l[s][1].end),end:Object.assign({},l[u][1].start)},h=[["enter",f,a],["enter",l[s][1],a],["exit",l[s][1],a],["enter",c,a]],p=a.parser.constructs.insideSpan.null;p&&ln(h,h.length,0,ce(p,l.slice(s+1,u),a)),ln(h,h.length,0,[["exit",c,a],["enter",l[u][1],a],["exit",l[u][1],a],["exit",f,a]]),ln(l,s-1,u-s+3,h),u=s+h.length-2;break}}for(u=-1;++u<l.length;)l[u][1].type==="strikethroughSequenceTemporary"&&(l[u][1].type="data");return l}function o(l,a,u){const s=this.previous,f=this.events;let c=0;return h;function h(d){return s===126&&f[f.length-1][1].type!=="characterEscape"?u(d):(l.enter("strikethroughSequenceTemporary"),p(d))}function p(d){const k=Rn(s);if(d===126)return c>1?u(d):(l.consume(d),c++,p);if(c<2&&!t)return u(d);const S=l.exit("strikethroughSequenceTemporary"),y=Rn(d);return S._open=!y||y===2&&!!k,S._close=!k||k===2&&!!y,a(d)}}}class tf{constructor(){this.map=[]}add(e,t,r){rf(this,e,t,r)}consume(e){if(this.map.sort(function(o,l){return o[0]-l[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];r.push(e.slice()),e.length=0;let i=r.pop();for(;i;){for(const o of i)e.push(o);i=r.pop()}this.map.length=0}}function rf(n,e,t,r){let i=0;if(!(t===0&&r.length===0)){for(;i<n.map.length;){if(n.map[i][0]===e){n.map[i][1]+=t,n.map[i][2].push(...r);return}i+=1}n.map.push([e,t,r])}}function lf(n,e){let t=!1;const r=[];for(;e<n.length;){const i=n[e];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(n[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(n[e-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);e+=1}return r}function of(){return{flow:{null:{name:"table",tokenize:af,resolveAll:uf}}}}function af(n,e,t){const r=this;let i=0,o=0,l;return a;function a(x){let E=r.events.length-1;for(;E>-1;){const W=r.events[E][1].type;if(W==="lineEnding"||W==="linePrefix")E--;else break}const z=E>-1?r.events[E][1].type:null,j=z==="tableHead"||z==="tableRow"?w:u;return j===w&&r.parser.lazy[r.now().line]?t(x):j(x)}function u(x){return n.enter("tableHead"),n.enter("tableRow"),s(x)}function s(x){return x===124||(l=!0,o+=1),f(x)}function f(x){return x===null?t(x):L(x)?o>1?(o=0,r.interrupt=!0,n.exit("tableRow"),n.enter("lineEnding"),n.consume(x),n.exit("lineEnding"),p):t(x):R(x)?M(n,f,"whitespace")(x):(o+=1,l&&(l=!1,i+=1),x===124?(n.enter("tableCellDivider"),n.consume(x),n.exit("tableCellDivider"),l=!0,f):(n.enter("data"),c(x)))}function c(x){return x===null||x===124||V(x)?(n.exit("data"),f(x)):(n.consume(x),x===92?h:c)}function h(x){return x===92||x===124?(n.consume(x),c):c(x)}function p(x){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(x):(n.enter("tableDelimiterRow"),l=!1,R(x)?M(n,d,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):d(x))}function d(x){return x===45||x===58?S(x):x===124?(l=!0,n.enter("tableCellDivider"),n.consume(x),n.exit("tableCellDivider"),k):F(x)}function k(x){return R(x)?M(n,S,"whitespace")(x):S(x)}function S(x){return x===58?(o+=1,l=!0,n.enter("tableDelimiterMarker"),n.consume(x),n.exit("tableDelimiterMarker"),y):x===45?(o+=1,y(x)):x===null||L(x)?D(x):F(x)}function y(x){return x===45?(n.enter("tableDelimiterFiller"),v(x)):F(x)}function v(x){return x===45?(n.consume(x),v):x===58?(l=!0,n.exit("tableDelimiterFiller"),n.enter("tableDelimiterMarker"),n.consume(x),n.exit("tableDelimiterMarker"),P):(n.exit("tableDelimiterFiller"),P(x))}function P(x){return R(x)?M(n,D,"whitespace")(x):D(x)}function D(x){return x===124?d(x):x===null||L(x)?!l||i!==o?F(x):(n.exit("tableDelimiterRow"),n.exit("tableHead"),e(x)):F(x)}function F(x){return t(x)}function w(x){return n.enter("tableRow"),_(x)}function _(x){return x===124?(n.enter("tableCellDivider"),n.consume(x),n.exit("tableCellDivider"),_):x===null||L(x)?(n.exit("tableRow"),e(x)):R(x)?M(n,_,"whitespace")(x):(n.enter("data"),q(x))}function q(x){return x===null||x===124||V(x)?(n.exit("data"),_(x)):(n.consume(x),x===92?N:q)}function N(x){return x===92||x===124?(n.consume(x),q):q(x)}}function uf(n,e){let t=-1,r=!0,i=0,o=[0,0,0,0],l=[0,0,0,0],a=!1,u=0,s,f,c;const h=new tf;for(;++t<n.length;){const p=n[t],d=p[1];p[0]==="enter"?d.type==="tableHead"?(a=!1,u!==0&&(lr(h,e,u,s,f),f=void 0,u=0),s={type:"table",start:Object.assign({},d.start),end:Object.assign({},d.end)},h.add(t,0,[["enter",s,e]])):d.type==="tableRow"||d.type==="tableDelimiterRow"?(r=!0,c=void 0,o=[0,0,0,0],l=[0,t+1,0,0],a&&(a=!1,f={type:"tableBody",start:Object.assign({},d.start),end:Object.assign({},d.end)},h.add(t,0,[["enter",f,e]])),i=d.type==="tableDelimiterRow"?2:f?3:1):i&&(d.type==="data"||d.type==="tableDelimiterMarker"||d.type==="tableDelimiterFiller")?(r=!1,l[2]===0&&(o[1]!==0&&(l[0]=l[1],c=ne(h,e,o,i,void 0,c),o=[0,0,0,0]),l[2]=t)):d.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(l[0]=l[1],c=ne(h,e,o,i,void 0,c)),o=l,l=[o[1],t,0,0])):d.type==="tableHead"?(a=!0,u=t):d.type==="tableRow"||d.type==="tableDelimiterRow"?(u=t,o[1]!==0?(l[0]=l[1],c=ne(h,e,o,i,t,c)):l[1]!==0&&(c=ne(h,e,l,i,t,c)),i=0):i&&(d.type==="data"||d.type==="tableDelimiterMarker"||d.type==="tableDelimiterFiller")&&(l[3]=t)}for(u!==0&&lr(h,e,u,s,f),h.consume(e.events),t=-1;++t<e.events.length;){const p=e.events[t];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=lf(e.events,t))}return n}function ne(n,e,t,r,i,o){const l=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",a="tableContent";t[0]!==0&&(o.end=Object.assign({},Dn(e.events,t[0])),n.add(t[0],0,[["exit",o,e]]));const u=Dn(e.events,t[1]);if(o={type:l,start:Object.assign({},u),end:Object.assign({},u)},n.add(t[1],0,[["enter",o,e]]),t[2]!==0){const s=Dn(e.events,t[2]),f=Dn(e.events,t[3]),c={type:a,start:Object.assign({},s),end:Object.assign({},f)};if(n.add(t[2],0,[["enter",c,e]]),r!==2){const h=e.events[t[2]],p=e.events[t[3]];if(h[1].end=Object.assign({},p[1].end),h[1].type="chunkText",h[1].contentType="text",t[3]>t[2]+1){const d=t[2]+1,k=t[3]-t[2]-1;n.add(d,k,[])}}n.add(t[3]+1,0,[["exit",c,e]])}return i!==void 0&&(o.end=Object.assign({},Dn(e.events,i)),n.add(i,0,[["exit",o,e]]),o=void 0),o}function lr(n,e,t,r,i){const o=[],l=Dn(e.events,t);i&&(i.end=Object.assign({},l),o.push(["exit",i,e])),r.end=Object.assign({},l),o.push(["exit",r,e]),n.add(t+1,0,o)}function Dn(n,e){const t=n[e],r=t[0]==="enter"?"start":"end";return t[1][r]}const sf={name:"tasklistCheck",tokenize:ff};function cf(){return{text:{91:sf}}}function ff(n,e,t){const r=this;return i;function i(u){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(u):(n.enter("taskListCheck"),n.enter("taskListCheckMarker"),n.consume(u),n.exit("taskListCheckMarker"),o)}function o(u){return V(u)?(n.enter("taskListCheckValueUnchecked"),n.consume(u),n.exit("taskListCheckValueUnchecked"),l):u===88||u===120?(n.enter("taskListCheckValueChecked"),n.consume(u),n.exit("taskListCheckValueChecked"),l):t(u)}function l(u){return u===93?(n.enter("taskListCheckMarker"),n.consume(u),n.exit("taskListCheckMarker"),n.exit("taskListCheck"),a):t(u)}function a(u){return L(u)?e(u):R(u)?n.check({tokenize:pf},e,t)(u):t(u)}}function pf(n,e,t){return M(n,r,"whitespace");function r(i){return i===null?t(i):e(i)}}function hf(n){return wr([_c(),Kc(),ef(n),of(),cf()])}const mf={};function gf(n){const e=this,t=n||mf,r=e.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),l=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(hf(t)),o.push(Fc()),l.push(Rc(t))}function xf(){return $.jsxs("div",{className:"page",children:[$.jsxs("div",{className:"page-header",children:[$.jsx("h1",{className:"page-title",children:"📖 README 文档"}),$.jsx("p",{className:"page-desc",children:"项目完整文档"})]}),$.jsx("div",{className:"page-card",style:{fontSize:"15px",lineHeight:"1.8",maxWidth:"100%"},children:$.jsx(ns,{remarkPlugins:[gf],components:{code({className:n,children:e,...t}){const r=/language-(\w+)/.exec(n||""),i=r?r[1]:"";return!!n&&i?$.jsx(wi,{style:Ci,language:i,PreTag:"div",customStyle:{borderRadius:"4px",fontSize:"14px",lineHeight:"1.5",margin:"16px 0"},children:String(e).replace(/\n$/,"")}):$.jsx("code",{className:n,style:{background:"#f4f4f4",padding:"2px 6px",borderRadius:"3px",fontFamily:"monospace",fontSize:"0.9em"},children:e})},table({children:n,...e}){return $.jsx("div",{style:{overflowX:"auto",margin:"16px 0"},children:$.jsx("table",{style:{borderCollapse:"collapse",width:"100%",border:"1px solid #ddd"},...e,children:n})})},th({children:n,...e}){return $.jsx("th",{style:{border:"1px solid #ddd",padding:"8px",backgroundColor:"#f2f2f2",textAlign:"left"},...e,children:n})},td({children:n,...e}){return $.jsx("td",{style:{border:"1px solid #ddd",padding:"8px"},...e,children:n})},h1({children:n,...e}){return $.jsx("h1",{style:{marginTop:"24px",marginBottom:"12px",fontSize:"2em",fontWeight:"bold"},...e,children:n})},h2({children:n,...e}){return $.jsx("h2",{style:{marginTop:"20px",marginBottom:"12px",fontSize:"1.5em",fontWeight:"bold"},...e,children:n})},h3({children:n,...e}){return $.jsx("h3",{style:{marginTop:"20px",marginBottom:"12px",fontSize:"1.3em",fontWeight:"bold"},...e,children:n})},h4({children:n,...e}){return $.jsx("h4",{style:{marginTop:"20px",marginBottom:"12px",fontSize:"1.1em",fontWeight:"bold"},...e,children:n})},p({children:n,...e}){return $.jsx("p",{style:{marginBottom:"12px",lineHeight:"1.6"},...e,children:n})},a({children:n,href:e,...t}){return $.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{color:"#0066cc",textDecoration:"none"},...t,children:n})},ul({children:n,...e}){return $.jsx("ul",{style:{marginLeft:"20px",marginBottom:"12px"},...e,children:n})},ol({children:n,...e}){return $.jsx("ol",{style:{marginLeft:"20px",marginBottom:"12px"},...e,children:n})},hr({...n}){return $.jsx("hr",{style:{margin:"24px 0",border:"none",borderTop:"1px solid #ddd"},...n})},blockquote({children:n,...e}){return $.jsx("blockquote",{style:{borderLeft:"4px solid #ddd",paddingLeft:"16px",margin:"16px 0",color:"#666",fontStyle:"italic"},...e,children:n})}},children:ls})})]})}export{xf as default};
