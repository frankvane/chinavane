import{j as n,w as a,C as r,s as j}from"./index-4_LIwl5b.js";import{T as i,c,d as v,e as o,f as x,g as p,l as s,m,n as u,s as l,M as d,o as k,p as U,q as S,r as C,t as f,u as I,v as O,w as T,x as N,y as R,z as E,A as P,B as w,E as g,F as M,H as y,I as h,J as _}from"./main-Bc2CKRmJ.js";const K={id:"product-list-card",title:"商品列表卡",group:"列表",industry:"通用",ref:{label:"通用电商列表卡形态",url:"https://github.com/frankvane/vane-components"},pain:"列表里一张卡要同时表达「长什么样、多少钱、有什么标签、能不能点」，但每项来源不同。",plugs:[{fn:"createImagePlugin",why:"主图，破图时兜底不塌高度"},{fn:"createBadgePlugin",cfg:'text: "甄选"',why:"运营角标，不占布局"},{fn:"createPriceCalculatorPlugin",why:"现价 + 折扣，价格区唯一决策者"},{fn:"createHoverPlugin",cfg:"enableScale: true",why:"悬停反馈，暗示「可点」"},{fn:"createActionsPlugin",why:"加购按钮（列表卡也要能直接下单）"}],props:["padding={0}"],note:"列表卡别装 Countdown 和 Animation 之外的重插件：一屏十几张，每个插件都在乘 十几 倍。"},V=a(r,{plugins:[c({alt:i.title}),v({text:"甄选",type:"premium"}),o({showDiscount:!0,showSavings:!0}),x({enableScale:!0,enableShadow:!0}),p()]});function B(){return n.jsx("div",{className:"scn-cards",children:[i,{...i,id:"p-tee-2",title:"同款 · 橄榄绿",price:319}].map((e,t)=>n.jsx(V,{cardId:`list-${t}`,data:e,padding:0,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:e.title}),n.jsx("div",{className:"scn-content__sub",children:e.subtitle})]})},String(e.id)))})}const D=Object.freeze(Object.defineProperty({__proto__:null,default:B,meta:K},Symbol.toStringTag,{value:"Module"})),G=i.attributes,L=l(i),$={id:"sku-detail",title:"SKU 联动商详",group:"商详",industry:"通用",ref:{label:"规格选择 + 价格联动",url:"https://github.com/frankvane/vane-components"},pain:"选规格之后价格、库存、主图三处都要变，手写时总会漏掉一处。",plugs:[{fn:"createSKUPlugin",cfg:"attributes: attrs, variants: variants",why:"唯一的价格 / 库存 / 图片源，写总线"},{fn:"createImagePlugin",why:"主图跟随 sku.image 自动换图"},{fn:"createPriceCalculatorPlugin",cfg:"showDiscount: true",why:"读 sku.price 算到手价与折扣"},{fn:"createQuantityPlugin",cfg:"useVariantStock: true",why:"数量上限跟随选中规格的库存"},{fn:"createInventoryPlugin",cfg:"lowStockThreshold: 5",why:"低库存 / 售罄提示"},{fn:"createActionsPlugin",why:"加购入口"}],props:["padding={0}"],note:"属性没选全时价格回退到商品级 price —— 这是刻意的，避免拿「颜色对了尺码没选」的变体价顶上。"},H=a(r,{plugins:[s({attributes:G,variants:L}),c({alt:i.title}),o({showDiscount:!0,showSavings:!0}),m({useVariantStock:!0,min:1}),u({lowStockThreshold:5}),p()]});function Q(){return n.jsx(H,{cardId:"scn-sku",data:i,padding:0,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:i.title}),n.jsx("div",{className:"scn-content__sub",children:"先选颜色，再选尺码 —— 价格与库存会跟着变"})]})})}const W=Object.freeze(Object.defineProperty({__proto__:null,default:Q,meta:$},Symbol.toStringTag,{value:"Module"})),F={id:"flash-sale",title:"秒杀倒计时",group:"交易",industry:"通用",ref:{label:"限时特卖卡形态",url:"https://github.com/frankvane/vane-components"},pain:"倒计时、库存告警、折扣价三个催促点同时存在时，很容易互相遮挡或互相打断。",plugs:[{fn:"createCountdownPlugin",cfg:'durationMs: 3 * 60 * 60 * 1000, prefix: "⏰"',why:"右上角倒计时（每秒只重渲染自己）"},{fn:"createInventoryPlugin",cfg:"lowStockThreshold: 8",why:"左下角「仅剩 4 件」"},{fn:"createBadgePlugin",cfg:'text: "限时", type: "sale"',why:"左上角活动角标"},{fn:"createPriceCalculatorPlugin",cfg:"showDiscount: true, showSavings: true",why:"折扣价与省多少"},{fn:"createImagePlugin",why:"商品主图"},{fn:"createActionsPlugin",why:"立即抢购"}],props:["padding={0}"],note:"倒计时的 endTimestamp 应该由服务端下发；客户端算「还有多久」会因为改系统时间而失效。"},z=a(r,{plugins:[k({durationMs:3*60*60*1e3,prefix:"⏰"}),u({lowStockThreshold:8}),v({text:"限时",type:"sale",position:"top-left"}),o({showDiscount:!0,showSavings:!0}),c({alt:d.title}),p({cartButtonText:{add:"立即抢购",remove:"已加入"}})]});function q(){return n.jsx(z,{cardId:"scn-flash",data:d,padding:0,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:d.title}),n.jsx("div",{className:"scn-content__sub",children:"前 100 件 8 折 · 售完即止"})]})})}const J=Object.freeze(Object.defineProperty({__proto__:null,default:q,meta:F},Symbol.toStringTag,{value:"Module"})),X={id:"coupon-stack",title:"券叠加到手价",group:"交易",industry:"通用",ref:{label:"券包 + 到手价",url:"https://github.com/frankvane/vane-components"},pain:"用户算不清「用券后多少钱」，客服也答不上来 —— 因为三个地方各算了一遍。",plugs:[{fn:"createCouponRecommendPlugin",cfg:"coupons: coupons, autoApplyBest: true",why:"挑最优券并写 coupon.applied"},{fn:"createPriceCalculatorPlugin",cfg:"showTotalPrice: true, showSavings: true",why:"按数量与券算到手价（唯一算法）"},{fn:"createQuantityPlugin",cfg:"min: 1, max: 5",why:"改数量会改变合计，进而改变最优券"},{fn:"createOrderSummaryPlugin",cfg:"showBreakdown: true, shippingFee: 12",why:"把明细摊开，让「到手价」可核对"}],props:["padding={16}"],note:"券的门槛按「券前金额」还是「券后金额」判断，是业务规则 —— 插件默认按券前，改口径请改配置而不是改插件。"},Y=[{code:"NEW30",discount:30,minAmount:199},{code:"VIP50",discount:50,minAmount:399},{code:"FREESHIP",discount:12,minAmount:99}],Z=a(r,{plugins:[U({coupons:Y,autoApplyBest:!0}),o({showTotalPrice:!0,showSavings:!0,showDiscount:!0}),m({min:1,max:5}),S({showBreakdown:!0,showShipping:!0,shippingFee:12})]});function nn(){return n.jsx(Z,{cardId:"scn-coupon",data:i,padding:16,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:i.title}),n.jsx("div",{className:"scn-content__sub",children:"改数量：最优券可能从 NEW30 换成 VIP50"})]})})}const en=Object.freeze(Object.defineProperty({__proto__:null,default:nn,meta:X},Symbol.toStringTag,{value:"Module"})),tn={id:"order-summary",title:"订单摘要",group:"交易",industry:"通用",ref:{label:"结算页摘要",url:"https://github.com/frankvane/vane-components"},pain:"明细行加起来和合计对不上 —— 因为合计是「另一个函数」算的。",plugs:[{fn:"createSKUPlugin",cfg:"attributes: attrs, variants: variants",why:"规格决定单价"},{fn:"createQuantityPlugin",cfg:"min: 1, max: 10",why:"数量决定小计"},{fn:"createCouponPlugin",cfg:"coupons: coupons",why:"券决定优惠额"},{fn:"createOrderSummaryPlugin",cfg:"showBreakdown: true, showTax: true, taxRate: 0.06, shippingFee: 12",why:"统一算合计并给明细"}],props:["padding={16}"],note:"税与运费在真实项目里应由服务端给（各地税率不同）；这里固定值只为让示例可复现。"},an=a(r,{plugins:[s({attributes:i.attributes,variants:l(i)}),m({min:1,max:10}),C({coupons:[{code:"NEW30",discount:30,minAmount:199},{code:"VIP50",discount:50,minAmount:399}]}),S({showBreakdown:!0,showTax:!0,taxRate:.06,showShipping:!0,shippingFee:12})]});function rn(){return n.jsx(an,{cardId:"scn-summary",data:i,padding:16,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:i.title}),n.jsx("div",{className:"scn-content__sub",children:"选规格 → 领券 → 看合计：三处数字必须一致"})]})})}const on=Object.freeze(Object.defineProperty({__proto__:null,default:rn,meta:tn},Symbol.toStringTag,{value:"Module"})),cn={id:"compare-price",title:"比价",group:"商详",industry:"通用",ref:{label:"多渠道比价",url:"https://github.com/frankvane/vane-components"},pain:"用户先在别处比价再回来下单，页面却假装自己最便宜 —— 一旦被识破就失去信任。",plugs:[{fn:"createComparePricePlugin",cfg:"competitors: competitors, showLowestPrice: true, highlightLowerThanOurPrice: true",why:"列出竞品价、标出最低、比我们便宜时高亮"},{fn:"createPriceCalculatorPlugin",cfg:"showDiscount: true",why:"本店到手价，作为对比基准"},{fn:"createImagePlugin",why:"商品主图"}],props:["padding={0}"],note:"竞品价必须在服务端算好下发：前端抓竞品页面既不稳定，也有合规风险。"},sn=a(r,{plugins:[I({competitors:[{name:"线下专柜",price:599},{name:"某电商",price:439},{name:"官方旗舰",price:499}],showLowestPrice:!0,highlightLowerThanOurPrice:!0,sortBy:"price",sortOrder:"asc"}),o({showDiscount:!0,showSavings:!0}),c({alt:f.title})]});function ln(){return n.jsx(sn,{cardId:"scn-compare",data:f,padding:0,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:f.title}),n.jsx("div",{className:"scn-content__sub",children:"本店 459，某电商 439 —— 高亮是真的，不是话术"})]})})}const un=Object.freeze(Object.defineProperty({__proto__:null,default:ln,meta:cn},Symbol.toStringTag,{value:"Module"})),dn={id:"low-stock",title:"低库存告警",group:"交易",industry:"通用",ref:{label:"库存紧迫感",url:"https://github.com/frankvane/vane-components"},pain:"「仅剩 4 件」和步进器上限各写一遍，改一次库存要改两处，最后一定对不上。",plugs:[{fn:"createInventoryPlugin",cfg:"lowStockThreshold: 10, showOverlayWhenSoldOut: true",why:"按阈值给提示，售罄时盖住加购"},{fn:"createQuantityPlugin",cfg:"min: 1, useVariantStock: true",why:"上限取库存，库存降了就自动钳制"},{fn:"createBadgePlugin",cfg:'text: "仅剩少量", type: "hot"',why:"角标强化紧迫感"},{fn:"createPriceCalculatorPlugin",why:"价格与数量联动（合计）"},{fn:"createImagePlugin",why:"商品主图"},{fn:"createActionsPlugin",why:"加购入口"}],props:["padding={0}","data={{ ...product, inventory: 4 }}"],note:"把 inventory 改成 0 再看：覆盖层出现、加购被挡 —— 这是「同一份数据驱动两处」的做法。"},gn=a(r,{plugins:[u({lowStockThreshold:10,showOverlayWhenSoldOut:!0}),m({min:1,useVariantStock:!0}),v({text:"仅剩少量",type:"hot",position:"top-right"}),o({showTotalPrice:!0}),c({alt:d.title}),p()]});function pn(){return n.jsx(gn,{cardId:"scn-lowstock",data:{...d,inventory:4},padding:0,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:d.title}),n.jsx("div",{className:"scn-content__sub",children:"库存 4 件 · 数量上限会跟着收"})]})})}const mn=Object.freeze(Object.defineProperty({__proto__:null,default:pn,meta:dn},Symbol.toStringTag,{value:"Module"})),hn={id:"video-detail",title:"视频商详",group:"商详",industry:"通用",ref:{label:"视频首屏",url:"https://github.com/frankvane/vane-components"},pain:"户外 / 家电类商品，图片说不清「用起来什么感觉」，但自动播视频又会被骂。",plugs:[{fn:"createVideoPlugin",cfg:"src: videoUrl, poster: poster, muted: true, playOnHover: true",why:"头部视频，悬停播放、移出暂停"},{fn:"createSKUPlugin",cfg:"attributes: attrs, variants: variants",why:"规格选择（这里用单属性）"},{fn:"createPriceCalculatorPlugin",cfg:"showDiscount: true",why:"价格区"},{fn:"createActionsPlugin",why:"加购"}],props:["padding={0}"],note:"Video 与 Gallery 同时装时，Gallery 会声明 media.handledByGallery，Video 自动让位 —— 避免两个播放器抢同一个位置。"},fn=a(r,{plugins:[O({src:T,poster:j({label:"露营椅 · 视频封面",width:480,height:270}),muted:!0,playOnHover:!0,controls:!0}),s({attributes:[{name:"配色",options:["沙色","墨绿"]}],variants:[{sku:"CH-SAND",attrs:{配色:"沙色"},price:459,stock:48},{sku:"CH-GREEN",attrs:{配色:"墨绿"},price:479,stock:12}]}),o({showDiscount:!0,showSavings:!0}),p()]});function Pn(){return n.jsx(fn,{cardId:"scn-video",data:f,padding:0,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:f.title}),n.jsx("div",{className:"scn-content__sub",children:"把鼠标移到视频上：播放；移开：暂停"})]})})}const vn=Object.freeze(Object.defineProperty({__proto__:null,default:Pn,meta:hn},Symbol.toStringTag,{value:"Module"})),wn={id:"review-wall",title:"评论墙",group:"内容",industry:"通用",ref:{label:"UGC 卡片墙",url:"https://github.com/frankvane/vane-components"},pain:"一屏十几张卡同时存在，最容易出的是「状态串了」和「悬停时全部一起动」。",plugs:[{fn:"createImagePlugin",why:"每张卡自己的主图"},{fn:"createReviewPlugin",cfg:"showRating: true, showReviewCount: true",why:"评分与评价数"},{fn:"createPriceCalculatorPlugin",why:"价格（同一套算法，多实例互不影响）"},{fn:"createHoverPlugin",cfg:"enableShadow: true",why:"单卡悬停反馈"}],props:["padding={0}"],note:"插件实例是「每次 withPlugins 一份」还是「每个组件实例一份」？这里是后者 —— 状态隔离靠 React 实例，不靠全局。"},yn=a(r,{plugins:[c(),R({showRating:!0,showReviewCount:!0,enableUserReview:!1}),o({showDiscount:!0,showSavings:!0}),x({enableShadow:!0,enableScale:!1,shadowIntensity:"light"})]}),_n=N().slice(0,4);function Sn(){return n.jsx("div",{className:"scn-wall",children:_n.map(e=>n.jsx(yn,{cardId:String(e.id),data:e,padding:0,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:e.title}),n.jsx("div",{className:"scn-content__sub",children:e.subtitle??"编辑部选品"})]})},String(e.id)))})}const Cn=Object.freeze(Object.defineProperty({__proto__:null,default:Sn,meta:wn},Symbol.toStringTag,{value:"Module"})),bn={id:"mobile-swipe",title:"移动端横滑卡",group:"列表",industry:"通用",ref:{label:"横滑商品位",url:"https://github.com/frankvane/vane-components"},pain:"同一个商品卡，放在主图位、侧栏、横滑位宽度差 3 倍，媒体查询写死就会错位。",plugs:[{fn:"createResponsivePlugin",cfg:"breakpoints: { mobile: 280, tablet: 520, desktop: 880 }",why:"按卡片宽度切布局，而不是按 viewport"},{fn:"createImagePlugin",why:"窄版主图"},{fn:"createPriceCalculatorPlugin",cfg:"showDiscount: true",why:"窄版价格（只留现价与折扣）"},{fn:"createActionsPlugin",cfg:"showWishlistButton: false",why:"窄版只留一个按钮，避免挤成两行"}],props:["padding={0}","containerStyle={{ width: 240 }}"],note:"横滑容器用 scroll-snap：手指划一次停一张，比自由滚动更容易点到想看的卡。",cardWidth:260},xn=a(r,{plugins:[E({breakpoints:{mobile:280,tablet:520,desktop:880}}),c(),o({showDiscount:!0}),p({showWishlistButton:!1})]}),kn=N().slice(0,6);function In(){return n.jsx("div",{className:"scn-swipe",children:kn.map(e=>n.jsx(xn,{cardId:`swipe-${e.id}`,data:e,padding:0,containerStyle:{width:240},children:n.jsx("div",{className:"scn-content",children:n.jsx("div",{className:"scn-content__title",children:e.title})})},String(e.id)))})}const On=Object.freeze(Object.defineProperty({__proto__:null,default:In,meta:bn},Symbol.toStringTag,{value:"Module"})),Tn={id:"fresh-weight",title:"生鲜：按重量卖",group:"商详",industry:"生鲜",ref:{label:"生鲜商详（重量规格 + 时效）",url:"https://github.com/frankvane/vane-components"},pain:"「500g 还是 1kg」是生鲜的第一个决策点，而「几份」是第二个 —— 两个维度揉在同一行里，用户和代码都会算错。",plugs:[{fn:"createImagePlugin",cfg:"alt: MANGO.title",why:"商详必须有主图；没有图时左上角的库存角标会直接压住标题"},{fn:"createSKUPlugin",cfg:"attributes: attrs, variants: variants",why:"规格 = 重量，切规格要连带换库存与价格"},{fn:"createPriceCalculatorPlugin",cfg:"showOriginalPrice: true",why:"价格必须跟着重量（规格）与份数一起变"},{fn:"createQuantityPlugin",cfg:"min: 1, useVariantStock: true",why:"「份数」上限跟着当前规格的剩余份数走"},{fn:"createInventoryPlugin",cfg:"lowStockThreshold: 10",why:"生鲜库存少，低于 10 份要提前告知"},{fn:"createBadgePlugin",cfg:'text: "今日达", type: "new"',why:"时效是生鲜的第二个卖点，角标最省位置"}],props:["padding={16}"],note:"Quantity 的 max 不要写死：生鲜 1kg 只剩 12 份、2kg 只剩 3 份，写死一个数就等于对用户撒谎。"},Nn=P.attributes,An=l(P),jn=a(r,{plugins:[c({alt:P.title}),s({attributes:Nn,variants:An}),o({showOriginalPrice:!0}),m({min:1,useVariantStock:!0}),u({lowStockThreshold:10}),v({text:"今日达",type:"new"})]});function Un(){return n.jsx(jn,{cardId:"scn-fresh",data:P,padding:16,children:n.jsxs("div",{className:"scn-content",style:{paddingTop:26},children:[n.jsx("div",{className:"scn-content__title",children:P.title}),n.jsx("div",{className:"scn-content__sub",children:"换规格看库存：2kg 只剩几份，1kg 还很足"})]})})}const Rn=Object.freeze(Object.defineProperty({__proto__:null,default:Un,meta:Tn},Symbol.toStringTag,{value:"Module"})),En={id:"digital-compare",title:"3C：版本组合 + 全网比价",group:"交易",industry:"3C 数码",ref:{label:"3C 商详（版本 + 比价 + 到手价）",url:"https://github.com/frankvane/vane-components"},pain:"「别家 879」「到手 1049」两个数字同时出现，用户第一反应是被骗 —— 因为比价没跟着选中的套装走。",plugs:[{fn:"createSKUPlugin",cfg:"attributes: attrs, variants: variants",why:"颜色 × 套装，套装会改价格"},{fn:"createComparePricePlugin",cfg:"showLowestPrice: true",why:"全网比价，读的是当前变体价不是原价"},{fn:"createPriceCalculatorPlugin",cfg:"showSavings: true",why:"到手价唯一算法，比价区不自己算"},{fn:"createInventoryPlugin",cfg:"lowStockThreshold: 5",why:"雾白套装已缺货，要在选之前就说明"}],props:["padding={16}"],note:"比价插件只负责「别的店多少钱」，绝不碰「到手价」。两个数分开算，页面才不会自相矛盾。"},Mn=[{name:"京东",price:899},{name:"天猫",price:949},{name:"拼多多",price:879}],Kn=a(r,{plugins:[s({attributes:w.attributes,variants:l(w)}),I({competitors:Mn,showLowestPrice:!0}),o({showSavings:!0,showDiscount:!0}),u({lowStockThreshold:5})]});function Vn(){return n.jsx(Kn,{cardId:"scn-digital",data:w,padding:16,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:w.title}),n.jsx("div",{className:"scn-content__sub",children:"切到「充电盒套装」看比价与到手价是否同步变成 1049"})]})})}const Bn=Object.freeze(Object.defineProperty({__proto__:null,default:Vn,meta:En},Symbol.toStringTag,{value:"Module"})),Dn={id:"beauty-shade",title:"美妆：色号即 SKU",group:"商详",industry:"美妆",ref:{label:"美妆商详（色号图集 + 小样）",url:"https://github.com/frankvane/vane-components"},pain:"选色号不换图，等于让用户闭眼下单；换成别的色，图却还是上一支。",plugs:[{fn:"createGalleryPlugin",cfg:"images: shots, showThumbnails: true",why:"多角度图集，缩略图切换"},{fn:"createSKUPlugin",cfg:"attributes: attrs, variants: variants",why:"色号是 SKU，选中会写 sku.variant"},{fn:"createPriceCalculatorPlugin",cfg:"showOriginalPrice: true",why:"妆效再好看也要给价：色号切换后价格同步"},{fn:"createCouponPlugin",cfg:"coupons: coupons",why:"小样券是美妆的常规钩子，和色号互不干扰"}],props:["padding={16}"],note:"Gallery 的 images 与 SKU 的 variant.image 是两套来源：前者是「这一支的图集」，后者是「这个色号的主图」。别指望它们自动同步，用总线里的 sku.image 对齐。"},Gn=g.images??[g.image].filter(Boolean),Ln=[{code:"首单立减 20",discount:20,minAmount:129},{code:"两支再减 26",discount:26,minAmount:258}],$n=a(r,{plugins:[M({images:Gn,showThumbnails:!0}),s({attributes:g.attributes,variants:l(g)}),o({showOriginalPrice:!0}),C({coupons:Ln})]});function Hn(){return n.jsx($n,{cardId:"scn-beauty",data:g,padding:16,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:g.title}),n.jsx("div",{className:"scn-content__sub",children:"换色号看主图：图集首图会跟着变"})]})})}const Qn=Object.freeze(Object.defineProperty({__proto__:null,default:Hn,meta:Dn},Symbol.toStringTag,{value:"Module"})),Wn={id:"home-delivery",title:"家居：尺寸 + 送装",group:"交易",industry:"家居",ref:{label:"大件家居商详（尺寸 + 送装费）",url:"https://github.com/frankvane/vane-components"},pain:"大件商品的「运费 + 安装费」到结算页才冒出来，是家具类退货率最高的原因之一。",plugs:[{fn:"createSKUPlugin",cfg:"attributes: attrs, variants: variants",why:"尺寸 × 颜色，140cm 已缺货"},{fn:"createOrderSummaryPlugin",cfg:"showShipping: true, shippingFee: 60",why:"大件运费必须提前摊开，别等结算页"},{fn:"createBadgePlugin",cfg:'text: "包安装", type: "premium"',why:"送装一体是家居的核心卖点"}],props:["padding={16}"],note:"运费在 OrderSummary 里是「配置」不是「计算」：真实项目应从地址服务取，示例里写死 60 是为了让明细可见。"},Fn=a(r,{plugins:[s({attributes:y.attributes,variants:l(y)}),S({showBreakdown:!0,showShipping:!0,shippingFee:60}),v({text:"包安装",type:"premium"})]});function zn(){return n.jsx(Fn,{cardId:"scn-home",data:y,padding:16,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:y.title}),n.jsx("div",{className:"scn-content__sub",children:"切 140cm：缺货；运费 60 元写在明细里"})]})})}const qn=Object.freeze(Object.defineProperty({__proto__:null,default:zn,meta:Wn},Symbol.toStringTag,{value:"Module"})),Jn={id:"ticket-session",title:"票务：场次 × 票档",group:"商详",industry:"演出票务",ref:{label:"演出票务（场次 + 票档 + 放票倒计时）",url:"https://github.com/frankvane/vane-components"},pain:"「哪个场次、哪一档、还剩几张、什么时候放票」四个变量同时在变，用户很容易选到已售罄的组合。",plugs:[{fn:"createImagePlugin",cfg:"alt: TICKET.title",why:"剧照是票务的第一说服力，也给左上角的倒计时留出落点"},{fn:"createSKUPlugin",cfg:"attributes: attrs, variants: variants",why:"场次 × 票档，每个组合独立库存"},{fn:"createPriceCalculatorPlugin",cfg:"showOriginalPrice: true",why:"票档就是价格：切票档价格必须跟着变"},{fn:"createCountdownPlugin",cfg:'endTimestamp: opensAt, prefix: "开票"',why:"放票是业务状态，不是营销装饰"},{fn:"createQuantityPlugin",cfg:"min: 1, max: 4",why:"票务普遍限购 4 张，这是规则不是库存"},{fn:"createInventoryPlugin",cfg:"lowStockThreshold: 6",why:"剩余几张要露出来，用户会据此换档"}],props:["padding={16}"],note:"限购和库存是两件事：Quantity 的 max 取「限购 4」和「剩余张数」的较小值，别只写一个。"},Xn=Date.now()+1e3*60*137,Yn=a(r,{plugins:[c({alt:h.title}),s({attributes:h.attributes,variants:l(h)}),o({showOriginalPrice:!0}),k({endTimestamp:Xn,prefix:"开票"}),m({min:1,max:4}),u({lowStockThreshold:6})]});function Zn(){return n.jsx(Yn,{cardId:"scn-ticket",data:h,padding:16,children:n.jsxs("div",{className:"scn-content",style:{paddingTop:26},children:[n.jsx("div",{className:"scn-content__title",children:h.title}),n.jsx("div",{className:"scn-content__sub",children:"上海 · 兰心大戏院 · 105 分钟无中场"})]})})}const ne=Object.freeze(Object.defineProperty({__proto__:null,default:Zn,meta:Jn},Symbol.toStringTag,{value:"Module"})),ee={id:"course-enroll",title:"课程：试看 + 班期",group:"内容",industry:"在线课程",ref:{label:"课程详情（试看 + 班期 + 早鸟价）",url:"https://github.com/frankvane/vane-components"},pain:"课程页最常见的错误是先摆价格和「立即报名」，而用户此刻只想知道「这课讲什么、讲得好不好」。",plugs:[{fn:"createVideoPlugin",cfg:"src: demoVideo, controls: true",why:"试看放在最前，是转化的第一道门"},{fn:"createSKUPlugin",cfg:"attributes: attrs, variants: variants",why:"班期是 SKU，选错只能退不能换"},{fn:"createPriceCalculatorPlugin",cfg:"showOriginalPrice: true, showSavings: true",why:"早鸟券的作用要落在「省了多少」上，而不是改原价"},{fn:"createInventoryPlugin",cfg:"lowStockThreshold: 15",why:"小班课名额少，「剩 16 席」是真实决策信息"},{fn:"createCouponPlugin",cfg:"coupons: coupons",why:"早鸟价用券表达，别改原价（会破坏历史订单对账）"}],props:["padding={16}"],note:"早鸟优惠用券而不是直接改 price：「原价 899 / 早鸟 499」这种叙事一旦落到原价字段上，退款和对账就全乱了。"},te=[{code:"早鸟立减 400",discount:400,minAmount:0},{code:"拼团再减 100",discount:100,minAmount:499}],ae=a(r,{plugins:[O({src:T,controls:!0,muted:!0}),s({attributes:_.attributes,variants:l(_)}),o({showOriginalPrice:!0}),u({lowStockThreshold:15}),C({coupons:te})]});function re(){return n.jsx(ae,{cardId:"scn-course",data:_,padding:16,children:n.jsxs("div",{className:"scn-content",children:[n.jsx("div",{className:"scn-content__title",children:_.title}),n.jsx("div",{className:"scn-content__sub",children:"12 周 / 24 节 · 直播 + 回放永久 · 作业逐份批改"})]})})}const ie=Object.freeze(Object.defineProperty({__proto__:null,default:re,meta:ee},Symbol.toStringTag,{value:"Module"})),oe=`/**
 * 场景 01 · 商品列表卡
 *
 * 最常见的一张卡：图、角标、标题、价格、悬停反馈、加购。
 * 重点是「六个插件互不耦合」：Image 管图、Badge 管角标、PriceCalculator 管价、
 * Hover 管反馈、Actions 管按钮 —— 少装任何一个，其它照常工作。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createActionsPlugin,
  createBadgePlugin,
  createHoverPlugin,
  createImagePlugin,
  createPriceCalculatorPlugin,
} from "vane-card/custom-plugins";
import { TEE } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "product-list-card",
  title: "商品列表卡",
  group: "列表",
  industry: "通用",
  ref: { label: "通用电商列表卡形态", url: "https://github.com/frankvane/vane-components" },
  pain: "列表里一张卡要同时表达「长什么样、多少钱、有什么标签、能不能点」，但每项来源不同。",
  plugs: [
    { fn: "createImagePlugin", why: "主图，破图时兜底不塌高度" },
    { fn: "createBadgePlugin", cfg: 'text: "甄选"', why: "运营角标，不占布局" },
    { fn: "createPriceCalculatorPlugin", why: "现价 + 折扣，价格区唯一决策者" },
    { fn: "createHoverPlugin", cfg: "enableScale: true", why: "悬停反馈，暗示「可点」" },
    { fn: "createActionsPlugin", why: "加购按钮（列表卡也要能直接下单）" },
  ],
  props: ["padding={0}"],
  note: "列表卡别装 Countdown 和 Animation 之外的重插件：一屏十几张，每个插件都在乘 十几 倍。",
};

const Card = withPlugins(CardCore, {
  plugins: [
    createImagePlugin({ alt: TEE.title }),
    createBadgePlugin({ text: "甄选", type: "premium" }),
    createPriceCalculatorPlugin({ showDiscount: true, showSavings: true }),
    createHoverPlugin({ enableScale: true, enableShadow: true }),
    createActionsPlugin(),
  ],
});

export default function ProductListCard() {
  return (
    <div className="scn-cards">
      {[TEE, { ...TEE, id: "p-tee-2", title: "同款 · 橄榄绿", price: 319 }].map((item, i) => (
        <Card key={String(item.id)} cardId={\`list-\${i}\`} data={item} padding={0}>
          <div className="scn-content">
            <div className="scn-content__title">{item.title}</div>
            <div className="scn-content__sub">{item.subtitle}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
`,ce=`/**
 * 场景 02 · SKU 联动商详
 *
 * 商详页的核心链路：选颜色 → 选尺码 → 价格 / 库存 / 图片同时变。
 * 四个插件靠总线串起来，任何一个都不知道其它三个的存在：
 *   SKU（源，写 sku.*） → PriceCalculator（读 sku.price）→ Inventory（读 sku.variant.stock）
 *   Quantity（读变体库存当上限）
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createActionsPlugin,
  createImagePlugin,
  createInventoryPlugin,
  createPriceCalculatorPlugin,
  createQuantityPlugin,
  createSKUPlugin,
} from "vane-card/custom-plugins";
import { skuVariantsOf, TEE } from "../data/seed";
import type { ScenarioMeta } from "./types";

const ATTRS = TEE.attributes as Array<{ name: string; options: string[] }>;
const VARIANTS = skuVariantsOf(TEE);

export const meta: ScenarioMeta = {
  id: "sku-detail",
  title: "SKU 联动商详",
  group: "商详",
  industry: "通用",
  ref: { label: "规格选择 + 价格联动", url: "https://github.com/frankvane/vane-components" },
  pain: "选规格之后价格、库存、主图三处都要变，手写时总会漏掉一处。",
  plugs: [
    { fn: "createSKUPlugin", cfg: "attributes: attrs, variants: variants", why: "唯一的价格 / 库存 / 图片源，写总线" },
    { fn: "createImagePlugin", why: "主图跟随 sku.image 自动换图" },
    { fn: "createPriceCalculatorPlugin", cfg: "showDiscount: true", why: "读 sku.price 算到手价与折扣" },
    { fn: "createQuantityPlugin", cfg: "useVariantStock: true", why: "数量上限跟随选中规格的库存" },
    { fn: "createInventoryPlugin", cfg: "lowStockThreshold: 5", why: "低库存 / 售罄提示" },
    { fn: "createActionsPlugin", why: "加购入口" },
  ],
  props: ["padding={0}"],
  note: "属性没选全时价格回退到商品级 price —— 这是刻意的，避免拿「颜色对了尺码没选」的变体价顶上。",
};

const Card = withPlugins(CardCore, {
  plugins: [
    createSKUPlugin({ attributes: ATTRS, variants: VARIANTS }),
    createImagePlugin({ alt: TEE.title }),
    createPriceCalculatorPlugin({ showDiscount: true, showSavings: true }),
    createQuantityPlugin({ useVariantStock: true, min: 1 }),
    createInventoryPlugin({ lowStockThreshold: 5 }),
    createActionsPlugin(),
  ],
});

export default function SkuDetail() {
  return (
    <Card cardId="scn-sku" data={TEE} padding={0}>
      <div className="scn-content">
        <div className="scn-content__title">{TEE.title}</div>
        <div className="scn-content__sub">先选颜色，再选尺码 —— 价格与库存会跟着变</div>
      </div>
    </Card>
  );
}
`,se=`/**
 * 场景 03 · 秒杀倒计时
 *
 * 时间压力 + 库存压力 + 价格锚点，三件事要同时出现在一屏：
 * 倒计时在 overlay 上，低库存在 overlay 另一角，价格在 footer。它们互不遮挡。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createActionsPlugin,
  createBadgePlugin,
  createCountdownPlugin,
  createImagePlugin,
  createInventoryPlugin,
  createPriceCalculatorPlugin,
} from "vane-card/custom-plugins";
import { MUG } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "flash-sale",
  title: "秒杀倒计时",
  group: "交易",
  industry: "通用",
  ref: { label: "限时特卖卡形态", url: "https://github.com/frankvane/vane-components" },
  pain: "倒计时、库存告警、折扣价三个催促点同时存在时，很容易互相遮挡或互相打断。",
  plugs: [
    { fn: "createCountdownPlugin", cfg: "durationMs: 3 * 60 * 60 * 1000, prefix: \\"⏰\\"", why: "右上角倒计时（每秒只重渲染自己）" },
    { fn: "createInventoryPlugin", cfg: "lowStockThreshold: 8", why: "左下角「仅剩 4 件」" },
    { fn: "createBadgePlugin", cfg: 'text: "限时", type: "sale"', why: "左上角活动角标" },
    { fn: "createPriceCalculatorPlugin", cfg: "showDiscount: true, showSavings: true", why: "折扣价与省多少" },
    { fn: "createImagePlugin", why: "商品主图" },
    { fn: "createActionsPlugin", why: "立即抢购" },
  ],
  props: ["padding={0}"],
  note: "倒计时的 endTimestamp 应该由服务端下发；客户端算「还有多久」会因为改系统时间而失效。",
};

const Card = withPlugins(CardCore, {
  plugins: [
    createCountdownPlugin({ durationMs: 3 * 60 * 60 * 1000, prefix: "⏰" }),
    createInventoryPlugin({ lowStockThreshold: 8 }),
    createBadgePlugin({ text: "限时", type: "sale", position: "top-left" }),
    createPriceCalculatorPlugin({ showDiscount: true, showSavings: true }),
    createImagePlugin({ alt: MUG.title }),
    createActionsPlugin({ cartButtonText: { add: "立即抢购", remove: "已加入" } }),
  ],
});

export default function FlashSale() {
  return (
    <Card cardId="scn-flash" data={MUG} padding={0}>
      <div className="scn-content">
        <div className="scn-content__title">{MUG.title}</div>
        <div className="scn-content__sub">前 100 件 8 折 · 售完即止</div>
      </div>
    </Card>
  );
}
`,le=`/**
 * 场景 04 · 优惠券叠加到手价
 *
 * 「券 → 到手价」最容易出错的地方是「谁算的价」：
 * CouponRecommend 只写 coupon.applied，PriceCalculator 读它算到手价，
 * OrderSummary 再把明细摊开。三处数字必须同源。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createCouponRecommendPlugin,
  createOrderSummaryPlugin,
  createPriceCalculatorPlugin,
  createQuantityPlugin,
} from "vane-card/custom-plugins";
import { TEE } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "coupon-stack",
  title: "券叠加到手价",
  group: "交易",
  industry: "通用",
  ref: { label: "券包 + 到手价", url: "https://github.com/frankvane/vane-components" },
  pain: "用户算不清「用券后多少钱」，客服也答不上来 —— 因为三个地方各算了一遍。",
  plugs: [
    { fn: "createCouponRecommendPlugin", cfg: "coupons: coupons, autoApplyBest: true", why: "挑最优券并写 coupon.applied" },
    { fn: "createPriceCalculatorPlugin", cfg: "showTotalPrice: true, showSavings: true", why: "按数量与券算到手价（唯一算法）" },
    { fn: "createQuantityPlugin", cfg: "min: 1, max: 5", why: "改数量会改变合计，进而改变最优券" },
    { fn: "createOrderSummaryPlugin", cfg: "showBreakdown: true, shippingFee: 12", why: "把明细摊开，让「到手价」可核对" },
  ],
  props: ["padding={16}"],
  note: "券的门槛按「券前金额」还是「券后金额」判断，是业务规则 —— 插件默认按券前，改口径请改配置而不是改插件。",
};

const COUPONS = [
  { code: "NEW30", discount: 30, minAmount: 199 },
  { code: "VIP50", discount: 50, minAmount: 399 },
  { code: "FREESHIP", discount: 12, minAmount: 99 },
];

const Card = withPlugins(CardCore, {
  plugins: [
    createCouponRecommendPlugin({ coupons: COUPONS, autoApplyBest: true }),
    createPriceCalculatorPlugin({ showTotalPrice: true, showSavings: true, showDiscount: true }),
    createQuantityPlugin({ min: 1, max: 5 }),
    createOrderSummaryPlugin({ showBreakdown: true, showShipping: true, shippingFee: 12 }),
  ],
});

export default function CouponStack() {
  return (
    <Card cardId="scn-coupon" data={TEE} padding={16}>
      <div className="scn-content">
        <div className="scn-content__title">{TEE.title}</div>
        <div className="scn-content__sub">改数量：最优券可能从 NEW30 换成 VIP50</div>
      </div>
    </Card>
  );
}
`,ue=`/**
 * 场景 05 · 订单摘要
 *
 * 结算区：规格 + 数量 + 券 + 运费 + 税 → 一行合计。
 * 这个场景刻意把 OrderSummary 放在最后：它只读总线，不猜任何东西。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createCouponPlugin,
  createOrderSummaryPlugin,
  createQuantityPlugin,
  createSKUPlugin,
} from "vane-card/custom-plugins";
import { skuVariantsOf, TEE } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "order-summary",
  title: "订单摘要",
  group: "交易",
  industry: "通用",
  ref: { label: "结算页摘要", url: "https://github.com/frankvane/vane-components" },
  pain: "明细行加起来和合计对不上 —— 因为合计是「另一个函数」算的。",
  plugs: [
    { fn: "createSKUPlugin", cfg: "attributes: attrs, variants: variants", why: "规格决定单价" },
    { fn: "createQuantityPlugin", cfg: "min: 1, max: 10", why: "数量决定小计" },
    { fn: "createCouponPlugin", cfg: "coupons: coupons", why: "券决定优惠额" },
    { fn: "createOrderSummaryPlugin", cfg: "showBreakdown: true, showTax: true, taxRate: 0.06, shippingFee: 12", why: "统一算合计并给明细" },
  ],
  props: ["padding={16}"],
  note: "税与运费在真实项目里应由服务端给（各地税率不同）；这里固定值只为让示例可复现。",
};

const Card = withPlugins(CardCore, {
  plugins: [
    createSKUPlugin({
      attributes: TEE.attributes as Array<{ name: string; options: string[] }>,
      variants: skuVariantsOf(TEE),
    }),
    createQuantityPlugin({ min: 1, max: 10 }),
    createCouponPlugin({
      coupons: [
        { code: "NEW30", discount: 30, minAmount: 199 },
        { code: "VIP50", discount: 50, minAmount: 399 },
      ],
    }),
    createOrderSummaryPlugin({
      showBreakdown: true,
      showTax: true,
      taxRate: 0.06,
      showShipping: true,
      shippingFee: 12,
    }),
  ],
});

export default function OrderSummary() {
  return (
    <Card cardId="scn-summary" data={TEE} padding={16}>
      <div className="scn-content">
        <div className="scn-content__title">{TEE.title}</div>
        <div className="scn-content__sub">选规格 → 领券 → 看合计：三处数字必须一致</div>
      </div>
    </Card>
  );
}
`,de=`/**
 * 场景 06 · 比价
 *
 * 比价必须诚实：竞品更便宜就显示更便宜。这个场景里 288 < 299，
 * 所以「某电商」会被高亮，这是我们刻意留下的「不好看但真实」的示例。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createComparePricePlugin,
  createImagePlugin,
  createPriceCalculatorPlugin,
} from "vane-card/custom-plugins";
import { CHAIR } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "compare-price",
  title: "比价",
  group: "商详",
  industry: "通用",
  ref: { label: "多渠道比价", url: "https://github.com/frankvane/vane-components" },
  pain: "用户先在别处比价再回来下单，页面却假装自己最便宜 —— 一旦被识破就失去信任。",
  plugs: [
    { fn: "createComparePricePlugin", cfg: "competitors: competitors, showLowestPrice: true, highlightLowerThanOurPrice: true", why: "列出竞品价、标出最低、比我们便宜时高亮" },
    { fn: "createPriceCalculatorPlugin", cfg: "showDiscount: true", why: "本店到手价，作为对比基准" },
    { fn: "createImagePlugin", why: "商品主图" },
  ],
  props: ["padding={0}"],
  note: "竞品价必须在服务端算好下发：前端抓竞品页面既不稳定，也有合规风险。",
};

const Card = withPlugins(CardCore, {
  plugins: [
    createComparePricePlugin({
      competitors: [
        { name: "线下专柜", price: 599 },
        { name: "某电商", price: 439 },
        { name: "官方旗舰", price: 499 },
      ],
      showLowestPrice: true,
      highlightLowerThanOurPrice: true,
      sortBy: "price",
      sortOrder: "asc",
    }),
    createPriceCalculatorPlugin({ showDiscount: true, showSavings: true }),
    createImagePlugin({ alt: CHAIR.title }),
  ],
});

export default function ComparePrice() {
  return (
    <Card cardId="scn-compare" data={CHAIR} padding={0}>
      <div className="scn-content">
        <div className="scn-content__title">{CHAIR.title}</div>
        <div className="scn-content__sub">本店 459，某电商 439 —— 高亮是真的，不是话术</div>
      </div>
    </Card>
  );
}
`,ge=`/**
 * 场景 07 · 低库存告警
 *
 * 库存只有 4 件时的完整表达：覆盖层提示「仅剩 4 件」、数量步进上限收到 4、
 * 加购按钮仍然可点（卖完才禁）。三处口径必须一致 —— 否则用户能买 10 件。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createActionsPlugin,
  createBadgePlugin,
  createImagePlugin,
  createInventoryPlugin,
  createPriceCalculatorPlugin,
  createQuantityPlugin,
} from "vane-card/custom-plugins";
import { MUG } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "low-stock",
  title: "低库存告警",
  group: "交易",
  industry: "通用",
  ref: { label: "库存紧迫感", url: "https://github.com/frankvane/vane-components" },
  pain: "「仅剩 4 件」和步进器上限各写一遍，改一次库存要改两处，最后一定对不上。",
  plugs: [
    { fn: "createInventoryPlugin", cfg: "lowStockThreshold: 10, showOverlayWhenSoldOut: true", why: "按阈值给提示，售罄时盖住加购" },
    { fn: "createQuantityPlugin", cfg: "min: 1, useVariantStock: true", why: "上限取库存，库存降了就自动钳制" },
    { fn: "createBadgePlugin", cfg: 'text: "仅剩少量", type: "hot"', why: "角标强化紧迫感" },
    { fn: "createPriceCalculatorPlugin", why: "价格与数量联动（合计）" },
    { fn: "createImagePlugin", why: "商品主图" },
    { fn: "createActionsPlugin", why: "加购入口" },
  ],
  props: ["padding={0}", "data={{ ...product, inventory: 4 }}"],
  note: "把 inventory 改成 0 再看：覆盖层出现、加购被挡 —— 这是「同一份数据驱动两处」的做法。",
};

const Card = withPlugins(CardCore, {
  plugins: [
    createInventoryPlugin({ lowStockThreshold: 10, showOverlayWhenSoldOut: true }),
    createQuantityPlugin({ min: 1, useVariantStock: true }),
    createBadgePlugin({ text: "仅剩少量", type: "hot", position: "top-right" }),
    createPriceCalculatorPlugin({ showTotalPrice: true }),
    createImagePlugin({ alt: MUG.title }),
    createActionsPlugin(),
  ],
});

export default function LowStock() {
  return (
    <Card cardId="scn-lowstock" data={{ ...MUG, inventory: 4 }} padding={0}>
      <div className="scn-content">
        <div className="scn-content__title">{MUG.title}</div>
        <div className="scn-content__sub">库存 4 件 · 数量上限会跟着收</div>
      </div>
    </Card>
  );
}
`,pe=`/**
 * 场景 08 · 视频商详
 *
 * 视频代替主图做第一屏。要注意两点：
 *  1. 默认不自动播（带声会被浏览器拦，静音自动播也常常被用户嫌）
 *  2. 悬停播放要能暂停，且切到别的卡时不残留播放
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createActionsPlugin,
  createPriceCalculatorPlugin,
  createSKUPlugin,
  createVideoPlugin,
} from "vane-card/custom-plugins";
import { svgImage } from "../data/images";
import { CHAIR } from "../data/seed";
import videoUrl from "../assets/demo.mp4?url";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "video-detail",
  title: "视频商详",
  group: "商详",
  industry: "通用",
  ref: { label: "视频首屏", url: "https://github.com/frankvane/vane-components" },
  pain: "户外 / 家电类商品，图片说不清「用起来什么感觉」，但自动播视频又会被骂。",
  plugs: [
    { fn: "createVideoPlugin", cfg: "src: videoUrl, poster: poster, muted: true, playOnHover: true", why: "头部视频，悬停播放、移出暂停" },
    { fn: "createSKUPlugin", cfg: "attributes: attrs, variants: variants", why: "规格选择（这里用单属性）" },
    { fn: "createPriceCalculatorPlugin", cfg: "showDiscount: true", why: "价格区" },
    { fn: "createActionsPlugin", why: "加购" },
  ],
  props: ["padding={0}"],
  note: "Video 与 Gallery 同时装时，Gallery 会声明 media.handledByGallery，Video 自动让位 —— 避免两个播放器抢同一个位置。",
};

const Card = withPlugins(CardCore, {
  plugins: [
    createVideoPlugin({
      src: videoUrl,
      poster: svgImage({ label: "露营椅 · 视频封面", width: 480, height: 270 }),
      muted: true,
      playOnHover: true,
      controls: true,
    }),
    createSKUPlugin({
      attributes: [{ name: "配色", options: ["沙色", "墨绿"] }],
      variants: [
        { sku: "CH-SAND", attrs: { 配色: "沙色" }, price: 459, stock: 48 },
        { sku: "CH-GREEN", attrs: { 配色: "墨绿" }, price: 479, stock: 12 },
      ],
    }),
    createPriceCalculatorPlugin({ showDiscount: true, showSavings: true }),
    createActionsPlugin(),
  ],
});

export default function VideoDetail() {
  return (
    <Card cardId="scn-video" data={CHAIR} padding={0}>
      <div className="scn-content">
        <div className="scn-content__title">{CHAIR.title}</div>
        <div className="scn-content__sub">把鼠标移到视频上：播放；移开：暂停</div>
      </div>
    </Card>
  );
}
`,me=`/**
 * 场景 09 · 评论墙
 *
 * 三张卡 + 评价 + 悬停，验证「同一套插件在多实例下不串状态」：
 * 每张卡有独立的 sharedData / 总线 / state，点其中一张的收藏不会影响另外两张。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createHoverPlugin,
  createImagePlugin,
  createPriceCalculatorPlugin,
  createReviewPlugin,
} from "vane-card/custom-plugins";
import { wallProducts } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "review-wall",
  title: "评论墙",
  group: "内容",
  industry: "通用",
  ref: { label: "UGC 卡片墙", url: "https://github.com/frankvane/vane-components" },
  pain: "一屏十几张卡同时存在，最容易出的是「状态串了」和「悬停时全部一起动」。",
  plugs: [
    { fn: "createImagePlugin", why: "每张卡自己的主图" },
    { fn: "createReviewPlugin", cfg: "showRating: true, showReviewCount: true", why: "评分与评价数" },
    { fn: "createPriceCalculatorPlugin", why: "价格（同一套算法，多实例互不影响）" },
    { fn: "createHoverPlugin", cfg: "enableShadow: true", why: "单卡悬停反馈" },
  ],
  props: ["padding={0}"],
  note: "插件实例是「每次 withPlugins 一份」还是「每个组件实例一份」？这里是后者 —— 状态隔离靠 React 实例，不靠全局。",
};

const Card = withPlugins(CardCore, {
  plugins: [
    createImagePlugin(),
    createReviewPlugin({ showRating: true, showReviewCount: true, enableUserReview: false }),
    createPriceCalculatorPlugin({ showDiscount: true, showSavings: true }),
    createHoverPlugin({ enableShadow: true, enableScale: false, shadowIntensity: "light" }),
  ],
});

const WALL = wallProducts().slice(0, 4);

export default function ReviewWall() {
  return (
    <div className="scn-wall">
      {WALL.map((item) => (
        <Card key={String(item.id)} cardId={String(item.id)} data={item} padding={0}>
          <div className="scn-content">
            <div className="scn-content__title">{item.title}</div>
            <div className="scn-content__sub">{item.subtitle ?? "编辑部选品"}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
`,he=`/**
 * 场景 10 · 移动端横滑卡
 *
 * 窄卡（240px）+ 横滑容器。ResponsivePlugin 看的是**卡片自身宽度**，
 * 所以同一份组件放进横滑位也会自动切成窄版，而不是「以为自己是桌面」。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createActionsPlugin,
  createImagePlugin,
  createPriceCalculatorPlugin,
  createResponsivePlugin,
} from "vane-card/custom-plugins";
import { wallProducts } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "mobile-swipe",
  title: "移动端横滑卡",
  group: "列表",
  industry: "通用",
  ref: { label: "横滑商品位", url: "https://github.com/frankvane/vane-components" },
  pain: "同一个商品卡，放在主图位、侧栏、横滑位宽度差 3 倍，媒体查询写死就会错位。",
  plugs: [
    { fn: "createResponsivePlugin", cfg: "breakpoints: { mobile: 280, tablet: 520, desktop: 880 }", why: "按卡片宽度切布局，而不是按 viewport" },
    { fn: "createImagePlugin", why: "窄版主图" },
    { fn: "createPriceCalculatorPlugin", cfg: "showDiscount: true", why: "窄版价格（只留现价与折扣）" },
    { fn: "createActionsPlugin", cfg: "showWishlistButton: false", why: "窄版只留一个按钮，避免挤成两行" },
  ],
  props: ["padding={0}", "containerStyle={{ width: 240 }}"],
  note: "横滑容器用 scroll-snap：手指划一次停一张，比自由滚动更容易点到想看的卡。",
  cardWidth: 260,
};

const Card = withPlugins(CardCore, {
  plugins: [
    createResponsivePlugin({ breakpoints: { mobile: 280, tablet: 520, desktop: 880 } }),
    createImagePlugin(),
    createPriceCalculatorPlugin({ showDiscount: true }),
    createActionsPlugin({ showWishlistButton: false }),
  ],
});

const SLIDE = wallProducts().slice(0, 6);

export default function MobileSwipe() {
  return (
    <div className="scn-swipe">
      {SLIDE.map((item) => (
        <Card
          key={String(item.id)}
          cardId={\`swipe-\${item.id}\`}
          data={item}
          padding={0}
          containerStyle={{ width: 240 }}
        >
          <div className="scn-content">
            <div className="scn-content__title">{item.title}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
`,fe=`/**
 * 场景 11 · 生鲜：按重量卖
 *
 * 生鲜和服饰最大的区别不是图，是**计量单位**：
 * 服饰的「尺码」是离散属性，生鲜的「规格」是重量，而「数量」在生鲜里
 * 指的是「几份」不是「几件」——两者乘起来才是总重，价格必须跟着重量走。
 *
 * 这一页的坑在于 Quantity 的上限：服饰看库存件数，生鲜看「还剩几份」。
 * 所以 Quantity 的 max 由 SKU 变体的 stock 推，而不是写死。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createBadgePlugin,
  createImagePlugin,
  createInventoryPlugin,
  createPriceCalculatorPlugin,
  createQuantityPlugin,
  createSKUPlugin,
} from "vane-card/custom-plugins";
import { MANGO, skuVariantsOf } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "fresh-weight",
  title: "生鲜：按重量卖",
  group: "商详",
  industry: "生鲜",
  ref: { label: "生鲜商详（重量规格 + 时效）", url: "https://github.com/frankvane/vane-components" },
  pain: "「500g 还是 1kg」是生鲜的第一个决策点，而「几份」是第二个 —— 两个维度揉在同一行里，用户和代码都会算错。",
  plugs: [
    { fn: "createImagePlugin", cfg: "alt: MANGO.title", why: "商详必须有主图；没有图时左上角的库存角标会直接压住标题" },
    { fn: "createSKUPlugin", cfg: "attributes: attrs, variants: variants", why: "规格 = 重量，切规格要连带换库存与价格" },
    { fn: "createPriceCalculatorPlugin", cfg: "showOriginalPrice: true", why: "价格必须跟着重量（规格）与份数一起变" },
    { fn: "createQuantityPlugin", cfg: "min: 1, useVariantStock: true", why: "「份数」上限跟着当前规格的剩余份数走" },
    { fn: "createInventoryPlugin", cfg: "lowStockThreshold: 10", why: "生鲜库存少，低于 10 份要提前告知" },
    { fn: "createBadgePlugin", cfg: 'text: "今日达", type: "new"', why: "时效是生鲜的第二个卖点，角标最省位置" },
  ],
  props: ["padding={16}"],
  note: "Quantity 的 max 不要写死：生鲜 1kg 只剩 12 份、2kg 只剩 3 份，写死一个数就等于对用户撒谎。",
};

const ATTRS = MANGO.attributes;
const VARIANTS = skuVariantsOf(MANGO);

const Card = withPlugins(CardCore, {
  plugins: [
    createImagePlugin({ alt: MANGO.title }),
    createSKUPlugin({ attributes: ATTRS, variants: VARIANTS }),
    createPriceCalculatorPlugin({ showOriginalPrice: true }),
    createQuantityPlugin({ min: 1, useVariantStock: true }),
    createInventoryPlugin({ lowStockThreshold: 10 }),
    createBadgePlugin({ text: "今日达", type: "new" }),
  ],
});

export default function FreshWeight() {
  return (
    <Card cardId="scn-fresh" data={MANGO} padding={16}>
      <div className="scn-content" style={{ paddingTop: 26 }}>
        <div className="scn-content__title">{MANGO.title}</div>
        <div className="scn-content__sub">
          换规格看库存：2kg 只剩几份，1kg 还很足
        </div>
      </div>
    </Card>
  );
}
`,Pe=`/**
 * 场景 12 · 3C：版本组合 + 全网比价
 *
 * 3C 商详的决策链比服饰长：先选「颜色 × 套装」，再比「别家多少钱」，
 * 最后看「到手价」。这三件事分别属于三个插件，但必须读同一份数据 ——
 * 否则会出现「比价区写 899，到手价写 1049」这种当场露馅的错。
 *
 * 这里故意让套装影响价格（标准 899 / 套装 1049），比价区跟着变，
 * 这是「同一份 SKU 状态驱动三个区」的最小验证。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createComparePricePlugin,
  createInventoryPlugin,
  createPriceCalculatorPlugin,
  createSKUPlugin,
} from "vane-card/custom-plugins";
import { BUDS, skuVariantsOf } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "digital-compare",
  title: "3C：版本组合 + 全网比价",
  group: "交易",
  industry: "3C 数码",
  ref: { label: "3C 商详（版本 + 比价 + 到手价）", url: "https://github.com/frankvane/vane-components" },
  pain: "「别家 879」「到手 1049」两个数字同时出现，用户第一反应是被骗 —— 因为比价没跟着选中的套装走。",
  plugs: [
    { fn: "createSKUPlugin", cfg: "attributes: attrs, variants: variants", why: "颜色 × 套装，套装会改价格" },
    { fn: "createComparePricePlugin", cfg: "showLowestPrice: true", why: "全网比价，读的是当前变体价不是原价" },
    { fn: "createPriceCalculatorPlugin", cfg: "showSavings: true", why: "到手价唯一算法，比价区不自己算" },
    { fn: "createInventoryPlugin", cfg: "lowStockThreshold: 5", why: "雾白套装已缺货，要在选之前就说明" },
  ],
  props: ["padding={16}"],
  note: "比价插件只负责「别的店多少钱」，绝不碰「到手价」。两个数分开算，页面才不会自相矛盾。",
};

const COMPETITORS = [
  { name: "京东", price: 899 },
  { name: "天猫", price: 949 },
  { name: "拼多多", price: 879 },
];

const Card = withPlugins(CardCore, {
  plugins: [
    createSKUPlugin({ attributes: BUDS.attributes, variants: skuVariantsOf(BUDS) }),
    createComparePricePlugin({ competitors: COMPETITORS, showLowestPrice: true }),
    createPriceCalculatorPlugin({ showSavings: true, showDiscount: true }),
    createInventoryPlugin({ lowStockThreshold: 5 }),
  ],
});

export default function DigitalCompare() {
  return (
    <Card cardId="scn-digital" data={BUDS} padding={16}>
      <div className="scn-content">
        <div className="scn-content__title">{BUDS.title}</div>
        <div className="scn-content__sub">
          切到「充电盒套装」看比价与到手价是否同步变成 1049
        </div>
      </div>
    </Card>
  );
}
`,ve=`/**
 * 场景 13 · 美妆：色号即 SKU，图必须跟着换
 *
 * 美妆的转化全靠「这个色上我嘴是什么样」。所以色号不是普通属性 ——
 * 选一个色号，主图必须同步换成那个色的实拍，否则用户只能靠想象。
 *
 * 技术上有两条路：Gallery 自己管图集（点缩略图切图），SKU 管色号（写总线）。
 * 两者都订阅 \`sku.image\`：SKU 选中色号 → 写 \`sku.variant\` → Gallery/Image 换图。
 * 这页装的是 Gallery，所以切色号时图集的首图会跟着变。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createCouponPlugin,
  createGalleryPlugin,
  createPriceCalculatorPlugin,
  createSKUPlugin,
} from "vane-card/custom-plugins";
import { LIPSTICK, skuVariantsOf } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "beauty-shade",
  title: "美妆：色号即 SKU",
  group: "商详",
  industry: "美妆",
  ref: { label: "美妆商详（色号图集 + 小样）", url: "https://github.com/frankvane/vane-components" },
  pain: "选色号不换图，等于让用户闭眼下单；换成别的色，图却还是上一支。",
  plugs: [
    { fn: "createGalleryPlugin", cfg: "images: shots, showThumbnails: true", why: "多角度图集，缩略图切换" },
    { fn: "createSKUPlugin", cfg: "attributes: attrs, variants: variants", why: "色号是 SKU，选中会写 sku.variant" },
    { fn: "createPriceCalculatorPlugin", cfg: "showOriginalPrice: true", why: "妆效再好看也要给价：色号切换后价格同步" },
    { fn: "createCouponPlugin", cfg: "coupons: coupons", why: "小样券是美妆的常规钩子，和色号互不干扰" },
  ],
  props: ["padding={16}"],
  note: "Gallery 的 images 与 SKU 的 variant.image 是两套来源：前者是「这一支的图集」，后者是「这个色号的主图」。别指望它们自动同步，用总线里的 sku.image 对齐。",
};

const SHOTS = LIPSTICK.images ?? [LIPSTICK.image].filter(Boolean);

const COUPONS = [
  // 「赠小样」不是券（券只表达「减多少钱」），赠品属于服务承诺，别硬塞进券里
  { code: "首单立减 20", discount: 20, minAmount: 129 },
  { code: "两支再减 26", discount: 26, minAmount: 258 },
];

const Card = withPlugins(CardCore, {
  plugins: [
    createGalleryPlugin({ images: SHOTS, showThumbnails: true }),
    createSKUPlugin({ attributes: LIPSTICK.attributes, variants: skuVariantsOf(LIPSTICK) }),
    createPriceCalculatorPlugin({ showOriginalPrice: true }),
    createCouponPlugin({ coupons: COUPONS }),
  ],
});

export default function BeautyShade() {
  return (
    <Card cardId="scn-beauty" data={LIPSTICK} padding={16}>
      <div className="scn-content">
        <div className="scn-content__title">{LIPSTICK.title}</div>
        <div className="scn-content__sub">换色号看主图：图集首图会跟着变</div>
      </div>
    </Card>
  );
}
`,we=`/**
 * 场景 14 · 家居：尺寸决定能不能进门，送装决定敢不敢买
 *
 * 大件的决策顺序和服饰反着来：先确认「进得了门吗」（尺寸），再确认
 * 「有人装吗」（送装服务），价格反而排在第三。所以这一页把尺寸选择器
 * 放在最前，运费与安装费单独摊开 —— 不摊开，用户会觉得「599 怎么结账变 699」。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createBadgePlugin,
  createOrderSummaryPlugin,
  createSKUPlugin,
} from "vane-card/custom-plugins";
import { LAMP, skuVariantsOf } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "home-delivery",
  title: "家居：尺寸 + 送装",
  group: "交易",
  industry: "家居",
  ref: { label: "大件家居商详（尺寸 + 送装费）", url: "https://github.com/frankvane/vane-components" },
  pain: "大件商品的「运费 + 安装费」到结算页才冒出来，是家具类退货率最高的原因之一。",
  plugs: [
    { fn: "createSKUPlugin", cfg: "attributes: attrs, variants: variants", why: "尺寸 × 颜色，140cm 已缺货" },
    { fn: "createOrderSummaryPlugin", cfg: "showShipping: true, shippingFee: 60", why: "大件运费必须提前摊开，别等结算页" },
    { fn: "createBadgePlugin", cfg: 'text: "包安装", type: "premium"', why: "送装一体是家居的核心卖点" },
  ],
  props: ["padding={16}"],
  note: "运费在 OrderSummary 里是「配置」不是「计算」：真实项目应从地址服务取，示例里写死 60 是为了让明细可见。",
};

const Card = withPlugins(CardCore, {
  plugins: [
    createSKUPlugin({ attributes: LAMP.attributes, variants: skuVariantsOf(LAMP) }),
    createOrderSummaryPlugin({ showBreakdown: true, showShipping: true, shippingFee: 60 }),
    createBadgePlugin({ text: "包安装", type: "premium" }),
  ],
});

export default function HomeDelivery() {
  return (
    <Card cardId="scn-home" data={LAMP} padding={16}>
      <div className="scn-content">
        <div className="scn-content__title">{LAMP.title}</div>
        <div className="scn-content__sub">切 140cm：缺货；运费 60 元写在明细里</div>
      </div>
    </Card>
  );
}
`,ye=`/**
 * 场景 15 · 演出票务：SKU 是「场次 × 票档」
 *
 * 票务的 SKU 组合是**笛卡尔积**：2 个场次 × 2 个票档 = 4 个可售组合，
 * 每个组合的剩余张数单独算。这和服饰的「颜色 × 尺码」形状一样，
 * 但语义完全不同 —— 服饰的库存是「件」，票务是「张」，且不能合并发货。
 *
 * 另一个行业专属点：开票倒计时。票不是随时能买，倒计时结束才放票，
 * 所以 Countdown 在这里不是营销装饰，是**业务状态**。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createCountdownPlugin,
  createImagePlugin,
  createInventoryPlugin,
  createQuantityPlugin,
  createPriceCalculatorPlugin,
  createSKUPlugin,
} from "vane-card/custom-plugins";
import { TICKET, skuVariantsOf } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "ticket-session",
  title: "票务：场次 × 票档",
  group: "商详",
  industry: "演出票务",
  ref: { label: "演出票务（场次 + 票档 + 放票倒计时）", url: "https://github.com/frankvane/vane-components" },
  pain: "「哪个场次、哪一档、还剩几张、什么时候放票」四个变量同时在变，用户很容易选到已售罄的组合。",
  plugs: [
    { fn: "createImagePlugin", cfg: "alt: TICKET.title", why: "剧照是票务的第一说服力，也给左上角的倒计时留出落点" },
    { fn: "createSKUPlugin", cfg: "attributes: attrs, variants: variants", why: "场次 × 票档，每个组合独立库存" },
    { fn: "createPriceCalculatorPlugin", cfg: "showOriginalPrice: true", why: "票档就是价格：切票档价格必须跟着变" },
    { fn: "createCountdownPlugin", cfg: "endTimestamp: opensAt, prefix: \\"开票\\"", why: "放票是业务状态，不是营销装饰" },
    { fn: "createQuantityPlugin", cfg: "min: 1, max: 4", why: "票务普遍限购 4 张，这是规则不是库存" },
    { fn: "createInventoryPlugin", cfg: "lowStockThreshold: 6", why: "剩余几张要露出来，用户会据此换档" },
  ],
  props: ["padding={16}"],
  note: "限购和库存是两件事：Quantity 的 max 取「限购 4」和「剩余张数」的较小值，别只写一个。",
};

/** 放票时间：模块顶层算一次，避免每次渲染都变（会不停重挂倒计时） */
const OPENS_AT = Date.now() + 1000 * 60 * 137;

const Card = withPlugins(CardCore, {
  plugins: [
    createImagePlugin({ alt: TICKET.title }),
    createSKUPlugin({ attributes: TICKET.attributes, variants: skuVariantsOf(TICKET) }),
    createPriceCalculatorPlugin({ showOriginalPrice: true }),
    createCountdownPlugin({ endTimestamp: OPENS_AT, prefix: "开票" }),
    createQuantityPlugin({ min: 1, max: 4 }),
    createInventoryPlugin({ lowStockThreshold: 6 }),
  ],
});

export default function TicketSession() {
  return (
    <Card cardId="scn-ticket" data={TICKET} padding={16}>
      <div className="scn-content" style={{ paddingTop: 26 }}>
        <div className="scn-content__title">{TICKET.title}</div>
        <div className="scn-content__sub">上海 · 兰心大戏院 · 105 分钟无中场</div>
      </div>
    </Card>
  );
}
`,_e=`/**
 * 场景 16 · 在线课程：试看是第一屏
 *
 * 课程不是「看参数下单」的品类，用户要先确认「讲得对不对我的胃口」。
 * 所以视频试看必须放在最前，班期选择次之，价格最后 —— 顺序错了，
 * 转化会在「这课讲什么」这一步就断掉。
 *
 * 班期是 SKU（10 月班 / 11 月班），但和服饰不同的是：班期之间**不能换货**，
 * 选错了只能退。所以这里把「开班日期」写进选项文案，而不是只写「第 8 期」。
 */
import React from "react";
import { CardCore, withPlugins } from "vane-card";
import {
  createCouponPlugin,
  createInventoryPlugin,
  createPriceCalculatorPlugin,
  createSKUPlugin,
  createVideoPlugin,
} from "vane-card/custom-plugins";
import demoVideo from "../assets/demo.mp4?url";
import { COURSE, skuVariantsOf } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "course-enroll",
  title: "课程：试看 + 班期",
  group: "内容",
  industry: "在线课程",
  ref: { label: "课程详情（试看 + 班期 + 早鸟价）", url: "https://github.com/frankvane/vane-components" },
  pain: "课程页最常见的错误是先摆价格和「立即报名」，而用户此刻只想知道「这课讲什么、讲得好不好」。",
  plugs: [
    { fn: "createVideoPlugin", cfg: "src: demoVideo, controls: true", why: "试看放在最前，是转化的第一道门" },
    { fn: "createSKUPlugin", cfg: "attributes: attrs, variants: variants", why: "班期是 SKU，选错只能退不能换" },
    { fn: "createPriceCalculatorPlugin", cfg: "showOriginalPrice: true, showSavings: true", why: "早鸟券的作用要落在「省了多少」上，而不是改原价" },
    { fn: "createInventoryPlugin", cfg: "lowStockThreshold: 15", why: "小班课名额少，「剩 16 席」是真实决策信息" },
    { fn: "createCouponPlugin", cfg: "coupons: coupons", why: "早鸟价用券表达，别改原价（会破坏历史订单对账）" },
  ],
  props: ["padding={16}"],
  note: "早鸟优惠用券而不是直接改 price：「原价 899 / 早鸟 499」这种叙事一旦落到原价字段上，退款和对账就全乱了。",
};

const COUPONS = [
  // 早鸟与拼团都是「减多少」，用券表达，不动 price 字段
  { code: "早鸟立减 400", discount: 400, minAmount: 0 },
  { code: "拼团再减 100", discount: 100, minAmount: 499 },
];

const Card = withPlugins(CardCore, {
  plugins: [
    createVideoPlugin({ src: demoVideo, controls: true, muted: true }),
    createSKUPlugin({ attributes: COURSE.attributes, variants: skuVariantsOf(COURSE) }),
    createPriceCalculatorPlugin({ showOriginalPrice: true }),
    createInventoryPlugin({ lowStockThreshold: 15 }),
    createCouponPlugin({ coupons: COUPONS }),
  ],
});

export default function CourseEnroll() {
  return (
    <Card cardId="scn-course" data={COURSE} padding={16}>
      <div className="scn-content">
        <div className="scn-content__title">{COURSE.title}</div>
        <div className="scn-content__sub">12 周 / 24 节 · 直播 + 回放永久 · 作业逐份批改</div>
      </div>
    </Card>
  );
}
`,Se=Object.assign({"./01-product-list-card.tsx":D,"./02-sku-detail.tsx":W,"./03-flash-sale.tsx":J,"./04-coupon-stack.tsx":en,"./05-order-summary.tsx":on,"./06-compare-price.tsx":un,"./07-low-stock.tsx":mn,"./08-video-detail.tsx":vn,"./09-review-wall.tsx":Cn,"./10-mobile-swipe.tsx":On,"./11-fresh-weight.tsx":Rn,"./12-digital-compare.tsx":Bn,"./13-beauty-shade.tsx":Qn,"./14-home-delivery.tsx":qn,"./15-ticket-session.tsx":ne,"./16-course-enroll.tsx":ie}),Ce=Object.assign({"./01-product-list-card.tsx":oe,"./02-sku-detail.tsx":ce,"./03-flash-sale.tsx":se,"./04-coupon-stack.tsx":le,"./05-order-summary.tsx":ue,"./06-compare-price.tsx":de,"./07-low-stock.tsx":ge,"./08-video-detail.tsx":pe,"./09-review-wall.tsx":me,"./10-mobile-swipe.tsx":he,"./11-fresh-weight.tsx":fe,"./12-digital-compare.tsx":Pe,"./13-beauty-shade.tsx":ve,"./14-home-delivery.tsx":we,"./15-ticket-session.tsx":ye,"./16-course-enroll.tsx":_e}),be=e=>e.replace(/^\.\//,""),b=Object.entries(Se).map(([e,t])=>{const A=be(e);return{meta:t.meta,Component:t.default,file:A,source:Ce[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),Ie=b.reduce((e,t)=>(e.includes(t.meta.group)||e.push(t.meta.group),e),[]),Oe=b.reduce((e,t)=>(e.includes(t.meta.industry)||e.push(t.meta.industry),e),[]).sort((e,t)=>e==="通用"?-1:t==="通用"?1:0),Te=Array.from(new Set(b.flatMap(e=>e.meta.plugs.map(t=>t.fn)))).sort();export{Ie as G,Oe as I,b as S,Te as U};
