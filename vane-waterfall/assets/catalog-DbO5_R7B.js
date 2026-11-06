import{r as u,j as n,F as P,m as f,w as g,c as S,b as p,d as b,h as M,i as $,k as x,W as h,l as H,n as ne,o as F,p as z,q as B,s as v,t as K,u as q,v as k,x as te,y as U,z as ae,A as Q,B as re,E as ie,H as oe,T as V,I as le,J as se,K as ce,M as ue,N as me}from"./index-BqQttyXs.js";const de={id:"photo-feed",title:"摄影作品错落流",group:"图片社区",ref:{label:"Unsplash",url:"https://unsplash.com/"},pain:"图片高度天然不等，列数还要跟着容器宽度走",plugs:[{fn:"createAutoColumnPlugin",cfg:"minColumnWidth: 200, maxColumns: 4",why:"按容器宽度算列数，窗口缩放不需要页面参与"},{fn:"createGapPlugin",cfg:"columnGap: 14, rowGap: 14",why:"图片流要更紧的间距，用插件而不是 Core props"},{fn:"createTransitionPlugin",cfg:"duration: 240",why:"重排时位置过渡，避免卡片瞬间跳动"},{fn:"createReducedMotionPlugin",why:"系统开了「减少动态效果」就自动关掉上面的过渡"},{fn:"createInfiniteScrollPlugin",cfg:"threshold: 400",why:"距底 400px 预加载，滚到底数据已就位"},{fn:"createA11yPlugin",cfg:'containerLabel: "摄影作品列表"',why:"给容器和卡片补 role / aria-label"}],props:["containerStyle={{ height: 420 }}","onLoadMore={loadMore}","renderItem={(item) => <Card item={item} />}"],note:"列数是 AutoColumn 算的，所以 props 里不要写 columns —— 写了也会被插件覆盖。",tone:"light"},Z=12,ge=84,pe=[150,320];function N(e){return f({count:Z,seed:4100+e*7,heightRange:pe})}const he=g(h,[S({minColumnWidth:200,maxColumns:4}),p({columnGap:14,rowGap:14}),b({duration:240}),M(),$({threshold:400}),x({containerLabel:"摄影作品列表",enableTabIndex:!1})]);function fe(){const[e,t]=u.useState(()=>N(0)),r=u.useCallback(()=>{t(l=>l.length>=ge?l:[...l,...N(l.length/Z)])},[]);return n.jsx(he,{items:e,containerStyle:{height:420},keyExtractor:l=>l.id,renderItem:l=>n.jsx(P,{card:l,variant:"photo"}),onLoadMore:r})}const ye=Object.freeze(Object.defineProperty({__proto__:null,default:fe,meta:de},Symbol.toStringTag,{value:"Module"})),we={id:"social-note",title:"三列图文笔记",group:"图文社区",ref:{label:"小红书",url:"https://www.xiaohongshu.com/explore"},pain:"第一条运营活动要钉在最左列顶部，其余内容从它下面继续排",plugs:[{fn:"createPinItemPlugin",cfg:"pinnedIndices: [0], column: 0",why:"把 index 0 钉成「置顶块」，普通项落到该列且低于置顶块底部时自动下推"},{fn:"createAutoColumnPlugin",cfg:"minColumnWidth: 148, maxColumns: 4",why:"笔记卡窄，手机宽度下也要保 2 列以上"},{fn:"createGapPlugin",cfg:"columnGap: 10, rowGap: 10",why:"信息密度高的流用 10px 间距"},{fn:"createClickAnalyticsPlugin",cfg:"showOverlay: true",why:"点击计数角标，验证 onItemClick 钩子真的被触发"}],props:["containerStyle={{ height: 420 }}","renderItem={(item, i) => <Note item={item} pinned={i === 0} />}"],note:"PinItemPlugin 用的是 D1-A 的 calculateItemPosition —— 这个钩子在旧版 Core 里从来没有被执行点，所以旧版置顶是完全不生效的（空转插件）。",tone:"light"},Pe=f({count:30,seed:2201,heightRange:[160,280]}),Se=g(h,[H({pinnedIndices:[0],column:0}),S({minColumnWidth:148,maxColumns:4}),p({columnGap:10,rowGap:10}),ne({showOverlay:!0})]);function be(){const[e]=u.useState(Pe);return n.jsx(Se,{items:e,containerStyle:{height:420},keyExtractor:t=>t.id,renderItem:(t,r)=>n.jsx(P,{card:t,variant:"note",pinned:r===0})})}const Ce=Object.freeze(Object.defineProperty({__proto__:null,default:be,meta:we},Symbol.toStringTag,{value:"Module"})),xe={id:"commerce",title:"商品流 · 筛排翻",group:"电商",ref:{label:"京东搜索结果",url:"https://search.jd.com/"},pain:"筛选、排序、翻页三件事互相踩，顺序错了筛完再翻会把结果切碎",plugs:[{fn:"createFilterPlugin",cfg:"predicate: (item) => item.price <= 500",why:"价格区间筛选；优先级 40，必须排在排序与分页之前"},{fn:"createSortPlugin",cfg:"comparator: (a, b) => b.likes - a.likes",why:"按热度排序；优先级 30，作用在「已筛选」的全量集合上"},{fn:"createPaginationPlugin",cfg:"pageSize: 12, scrollToTop: true",why:"最后才切片；优先级 10，否则一页里只剩筛出来的零星几件"},{fn:"createResponsiveColumnsPlugin",cfg:"breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 720, columns: 3 }, lg: { width: 1080, columns: 4 } }",why:"商品卡有最小宽度，用断点表比算最小列宽更直观"},{fn:"createGapPlugin",cfg:"columnGap: 12, rowGap: 12",why:"统一间距"},{fn:"createBookmarkPlugin",cfg:'storageKey: "demo-commerce-bookmark"',why:"按 b 记位置、按 r 跳回，长列表里挑货很实用"}],props:["containerStyle={{ height: 420 }}","pageIndex={page}","filterFn={maxPrice > 0 ? (item) => item.price <= maxPrice : undefined}","sortComparator={sort}","scrollToTopOnPageChange"],note:"管道顺序由 priority 固定，页面不需要关心调用次序；要改顺序只能改插件 priority，不要试图在 props 上绕。"},A=f({count:72,seed:3301,heightRange:[150,230],commerce:!0}),G=12,ve=g(h,[F({predicate:e=>e.price<=500}),z({comparator:(e,t)=>t.likes-e.likes}),B({pageSize:G,scrollToTop:!0}),v({breakpoints:{sm:{width:0,columns:2},md:{width:720,columns:3},lg:{width:1080,columns:4}}}),p({columnGap:12,rowGap:12}),K({storageKey:"demo-commerce-bookmark"})]),W=[{key:"hot",label:"热度",cmp:(e,t)=>t.likes-e.likes},{key:"price-asc",label:"价格 ↑",cmp:(e,t)=>e.price-t.price},{key:"price-desc",label:"价格 ↓",cmp:(e,t)=>t.price-e.price},{key:"new",label:"最新",cmp:(e,t)=>e.minutesAgo-t.minutesAgo}],ke=[0,200,350,500];function Ae(){const[e,t]=u.useState("hot"),[r,l]=u.useState(0),[s,c]=u.useState(1),i=u.useMemo(()=>W.find(a=>a.key===e).cmp,[e]),m=r>0?A.filter(a=>a.price<=r).length:A.length,o=Math.max(1,Math.ceil(m/G));return n.jsxs("div",{className:"scn-widget",children:[n.jsxs("div",{className:"scn-toolbar",children:[n.jsx("div",{className:"scn-seg",children:W.map(a=>n.jsx("button",{type:"button",className:e===a.key?"is-on":"",onClick:()=>{t(a.key),c(1)},children:a.label},a.key))}),n.jsx("div",{className:"scn-seg",children:ke.map(a=>n.jsx("button",{type:"button",className:r===a?"is-on":"",onClick:()=>{l(a),c(1)},children:a===0?"不限价":`≤¥${a}`},a))})]}),n.jsx(ve,{items:A,containerStyle:{height:362},keyExtractor:a=>a.id,renderItem:a=>n.jsx(P,{card:a,variant:"product"}),pageIndex:s,pageSize:G,sortComparator:i,filterFn:r>0?a=>a.price<=r:void 0,scrollToTopOnPageChange:!0,scrollToTopOnSortChange:!0}),n.jsxs("div",{className:"scn-pager",children:[n.jsx("button",{type:"button",disabled:s<=1,onClick:()=>c(a=>a-1),children:"上一页"}),n.jsxs("span",{children:[s," / ",o]}),n.jsx("button",{type:"button",disabled:s>=o,onClick:()=>c(a=>a+1),children:"下一页"})]})]})}const Te=Object.freeze(Object.defineProperty({__proto__:null,default:Ae,meta:xe},Symbol.toStringTag,{value:"Module"})),_e={id:"video-grid",title:"视频封面墙 · 等高网格",group:"视频",ref:{label:"Bilibili 分区",url:"https://www.bilibili.com/v/douga/"},pain:"封面比例必须统一，否则同一行的封面高度对不齐、看起来像坏图",plugs:[{fn:"createFixedHeightPlugin",cfg:"itemHeight: 176",why:"把每项高度改成固定值；注意它改的是 item.height 字段，卡片要照着渲染"},{fn:"createAlignmentPlugin",cfg:'mode: "sequential"',why:"等高时用轮转分配，保证每行列数稳定、不会出现「某列空一格」"},{fn:"createResponsiveColumnsPlugin",cfg:"breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 780, columns: 3 }, lg: { width: 1120, columns: 4 } }",why:"视频卡偏宽，断点比最小列宽更好控制"},{fn:"createGapPlugin",cfg:"columnGap: 16, rowGap: 18",why:"行间距略大于列间距，避免两行标题粘连"},{fn:"createTransitionPlugin",cfg:"duration: 180",why:"切换分区时重排的过渡"},{fn:"createReducedMotionPlugin",why:"尊重系统的减少动效偏好"}],props:["containerStyle={{ height: 420 }}","renderItem={(item) => <Cover item={item} fixed />}"],note:"FixedHeightPlugin 只覆盖 `item.height` 字段，Core 量的是 DOM 的 offsetHeight —— 所以卡片必须真的按 height 渲染，否则插件等于没开。"},Ge=f({count:40,seed:4401,heightRange:[150,230]}),Ie=g(h,[q({itemHeight:176}),k({mode:"sequential"}),v({breakpoints:{sm:{width:0,columns:2},md:{width:780,columns:3},lg:{width:1120,columns:4}}}),p({columnGap:16,rowGap:18}),b({duration:180}),M()]);function Re(){const[e]=u.useState(Ge);return n.jsx(Ie,{items:e,containerStyle:{height:420},keyExtractor:t=>t.id,renderItem:t=>n.jsx(P,{card:t,variant:"video",fixed:!0})})}const Me=Object.freeze(Object.defineProperty({__proto__:null,default:Re,meta:_e},Symbol.toStringTag,{value:"Module"})),je={id:"dashboard",title:"指标卡看板",group:"后台",ref:{label:"自建 BI 首页",url:"https://ant.design/components/card-cn"},pain:"卡片高度参差、核心指标要固定位置，刷新后还要回到原来的滚动位置",plugs:[{fn:"createAlignmentPlugin",cfg:'mode: "balanced"',why:"看板在意「每列卡片数接近」，而不是「每列高度接近」"},{fn:"createPinItemPlugin",cfg:"pinnedIndices: [0, 1], column: 0",why:"两块核心指标钉在最左列，且按顺序纵向堆叠"},{fn:"createResponsiveColumnsPlugin",cfg:"breakpoints: { sm: { width: 0, columns: 1 }, md: { width: 640, columns: 2 }, lg: { width: 1024, columns: 3 } }",why:"窄屏退到单列，卡片不被压扁"},{fn:"createGapPlugin",cfg:"columnGap: 12, rowGap: 12",why:"看板要紧凑"},{fn:"createStatePersistencePlugin",cfg:'storageKey: "demo-dashboard", persistScroll: true',why:"记住滚动位置，刷新回到原处"}],props:["containerStyle={{ height: 420 }}","renderItem={(item, i) => <Metric item={item} pinned={i < 2} />}"],note:"balanced 与 shortest 在列高相同时都取最左列，所以两种模式的差异只在「项数」与「高度」哪个先触发换列。"},Ne=[["今日 GMV","¥ 1,284,900",12.4,124],["支付订单","18,432",6.1,124],["客单价","¥ 69.7",-2.3,104],["新增用户","3,204",21.8,128],["次日留存","41.2%",.8,128],["退款率","1.9%",-.4,104],["客服响应","38s",-12,118],["库存周转","6.4 天",3.2,118],["履约及时率","97.6%",1.1,124],["投诉工单","24",-18.5,104],["毛利率","38.4%",2.2,112],["复购率","23.9%",4.6,112]],We=Ne.map(([e,t,r,l],s)=>({id:`m${s}`,title:e,value:t,delta:r,height:l,tone:r>=0?"up":"down",series:Array.from({length:12},(c,i)=>30+Math.abs(Math.sin((s+1)*(i+2)*1.7))*70)})),Le=g(h,[k({mode:"balanced"}),H({pinnedIndices:[0,1],column:0}),v({breakpoints:{sm:{width:0,columns:1},md:{width:640,columns:2},lg:{width:1024,columns:3}}}),p({columnGap:12,rowGap:12}),te({storageKey:"demo-dashboard",persistScroll:!0})]);function Ee({points:e,tone:t}){const s=132/(e.length-1),c=e.map((i,m)=>`${m===0?"M":"L"}${(m*s).toFixed(1)},${(22-i/100*22).toFixed(1)}`).join(" ");return n.jsx("svg",{width:132,height:22,viewBox:"0 0 132 22","aria-hidden":!0,className:"wf-spark",children:n.jsx("path",{d:c,fill:"none",className:`wf-spark-line is-${t}`,strokeWidth:"1.6",strokeLinecap:"round"})})}function Oe({item:e,pinned:t}){return n.jsxs("div",{className:`wf-card is-metric${t?" is-pinned":""}`,style:{height:e.height},children:[n.jsxs("div",{className:"wf-metric-head",children:[n.jsx("span",{className:"wf-metric-title",children:e.title}),t?n.jsx("span",{className:"wf-pill",children:"核心"}):null]}),n.jsx("div",{className:"wf-metric-value",children:e.value}),n.jsxs("div",{className:`wf-metric-delta is-${e.tone}`,children:[e.delta>=0?"▲":"▼"," ",Math.abs(e.delta),"%",n.jsx("span",{className:"wf-metric-hint",children:"环比"})]}),n.jsx(Ee,{points:e.series,tone:e.tone})]})}function De(){const[e]=u.useState(We);return n.jsx(Le,{items:e,containerStyle:{height:420},keyExtractor:t=>t.id,renderItem:(t,r)=>n.jsx(Oe,{item:t,pinned:r<2})})}const $e=Object.freeze(Object.defineProperty({__proto__:null,default:De,meta:je},Symbol.toStringTag,{value:"Module"})),He={id:"bookmark-wall",title:"书签墙 · 拖拽排序",group:"效率",ref:{label:"Raindrop.io 收藏墙",url:"https://raindrop.io/"},pain:"收藏顺序要能手动调整，且调整结果必须回到业务数据，不能只停在视图层",plugs:[{fn:"createDragReorderPlugin",cfg:"showHandle: true, onReorder: handleReorder",why:"HTML5 拖拽；插件只算出 from/to，数组怎么改由页面决定"},{fn:"createBookmarkPlugin",cfg:'storageKey: "demo-wall-bookmark", scrollBehavior: "smooth"',why:"按 b 记忆滚动位置、按 r 平滑跳回"},{fn:"createA11yPlugin",cfg:'itemRole: "listitem"',why:"拖拽容器要保留列表语义，否则读屏软件拿不到结构"},{fn:"createResponsiveColumnsPlugin",cfg:"breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 760, columns: 3 } }",why:"书签卡偏小，两列起步"},{fn:"createGapPlugin",cfg:"columnGap: 12, rowGap: 12",why:"统一间距"},{fn:"createTransitionPlugin",cfg:"duration: 200",why:"拖完重排的位置过渡"}],props:["containerStyle={{ height: 392 }}","renderItem={(item) => <Card item={item} />}","onItemClick={(i, item) => open(item)}"],note:"旧版 DragReorderPlugin 只把 from/to 写进 sharedData，没有 onReorder 回调；且它与 A11yPlugin 的 renderItemWrapper 参数顺序相反，两个一起开会把节点与索引错位。"},Fe=f({count:18,seed:6601,heightRange:[120,200]}),ze=n.jsxs("svg",{viewBox:"0 0 16 16",width:"12",height:"12",fill:"currentColor","aria-hidden":!0,children:[n.jsx("circle",{cx:"5",cy:"3",r:"1.3"}),n.jsx("circle",{cx:"11",cy:"3",r:"1.3"}),n.jsx("circle",{cx:"5",cy:"8",r:"1.3"}),n.jsx("circle",{cx:"11",cy:"8",r:"1.3"}),n.jsx("circle",{cx:"5",cy:"13",r:"1.3"}),n.jsx("circle",{cx:"11",cy:"13",r:"1.3"})]});function Be(){const[e,t]=u.useState(Fe),[r,l]=u.useState("拖动右上角手柄换位置；按 b 存书签、按 r 跳回"),s=u.useMemo(()=>g(h,[U({showHandle:!0,onReorder:(i,m)=>{t(o=>{if(i===m||i<0||m<0||i>=o.length||m>=o.length)return o;const a=o.slice(),[d]=a.splice(i,1);return a.splice(m,0,d),a}),l(`第 ${i+1} 张 → 第 ${m+1} 张（已写回 state）`)}}),K({storageKey:"demo-wall-bookmark",scrollBehavior:"smooth"}),x({itemRole:"listitem",containerLabel:"我的收藏",enableTabIndex:!1}),v({breakpoints:{sm:{width:0,columns:2},md:{width:760,columns:3}}}),p({columnGap:12,rowGap:12}),b({duration:200})]),[]);return n.jsxs("div",{className:"scn-widget",children:[n.jsx(s,{items:e,containerStyle:{height:392},keyExtractor:c=>c.id,renderItem:c=>n.jsx(P,{card:c,variant:"plain",corner:n.jsx("span",{className:"wf-drag-handle",title:"拖拽排序",children:ze})})}),n.jsx("p",{className:"scn-hint",children:r})]})}const Ke=Object.freeze(Object.defineProperty({__proto__:null,default:Be,meta:He},Symbol.toStringTag,{value:"Module"})),qe={id:"news-search",title:"资讯流 · 搜索筛排",group:"内容",ref:{label:"少数派 / 掘金 首页",url:"https://sspai.com/"},pain:"关键词、排序、页码三态联动，改任一条件都要回顶，且顺序不能错",plugs:[{fn:"createFilterPlugin",cfg:'predicate: (item) => item.tag !== "旅行"',why:"先做粗筛（例如屏蔽某栏目），优先级 40"},{fn:"createSortPlugin",cfg:"comparator: (a, b) => b.likes - a.likes",why:"排序作用在粗筛后的集合上，优先级 30"},{fn:"createSearchPlugin",cfg:'fields: ["title", "author"], scrollToTop: true',why:"关键词在排序后再筛，优先级 20；匹配字段要显式给，否则会把 undefined 也扫一遍"},{fn:"createPaginationPlugin",cfg:"pageSize: 15",why:"最后切片，优先级 10"},{fn:"createURLSyncPlugin",cfg:'mode: "search", keys: ["searchQuery", "pageIndex"]',why:"条件写进 URL，刷新和分享都能复现同一屏"},{fn:"createResponsiveColumnsPlugin",cfg:"breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 820, columns: 3 }, lg: { width: 1140, columns: 4 } }",why:"资讯卡在宽屏可以排 4 列"},{fn:"createGapPlugin",cfg:"columnGap: 14, rowGap: 16",why:"统一间距"}],props:["containerStyle={{ height: 340 }}","searchQuery={query}","pageIndex={page}","pageSize={15}","sortComparator={cmp}","scrollToTopOnSearchChange","scrollToTopOnPageChange"],note:"URLSyncPlugin 会改写 location.search；demo 用的是 hash 路由，所以下方条件区另外显示了一遍当前条件，便于确认同步生效。"},L=f({count:60,seed:7701,heightRange:[130,210]}),I=15,Ue=g(h,[F({predicate:e=>e.tag!=="旅行"}),z({comparator:(e,t)=>t.likes-e.likes}),ae({fields:["title","author","tag"],scrollToTop:!0}),B({pageSize:I}),Q({mode:"search",keys:["searchQuery","pageIndex"]}),v({breakpoints:{sm:{width:0,columns:2},md:{width:820,columns:3},lg:{width:1140,columns:4}}}),p({columnGap:14,rowGap:16})]);function Qe(){const[e,t]=u.useState(""),[r,l]=u.useState(1),[s,c]=u.useState("hot"),i=u.useMemo(()=>s==="hot"?(a,d)=>d.likes-a.likes:(a,d)=>a.minutesAgo-d.minutesAgo,[s]),m=u.useMemo(()=>{const a=e.trim().toLowerCase(),d=L.filter(y=>y.tag!=="旅行");return a?d.filter(y=>[y.title,y.author,y.tag].some(C=>C.toLowerCase().includes(a))):d},[e]),o=Math.max(1,Math.ceil(m.length/I));return n.jsxs("div",{className:"scn-widget",children:[n.jsxs("div",{className:"scn-toolbar",children:[n.jsx("input",{className:"scn-input",value:e,placeholder:"搜索标题 / 作者 / 标签",onChange:a=>{t(a.target.value),l(1)}}),n.jsx("div",{className:"scn-seg",children:["hot","new"].map(a=>n.jsx("button",{type:"button",className:s===a?"is-on":"",onClick:()=>{c(a),l(1)},children:a==="hot"?"最热":"最新"},a))})]}),n.jsx(Ue,{items:L,containerStyle:{height:316},keyExtractor:a=>a.id,renderItem:a=>n.jsx(P,{card:a,variant:"doc"}),searchQuery:e,pageIndex:r,pageSize:I,sortComparator:i,scrollToTopOnSearchChange:!0,scrollToTopOnSortChange:!0,scrollToTopOnPageChange:!0}),n.jsxs("div",{className:"scn-pager",children:[n.jsx("button",{type:"button",disabled:r<=1,onClick:()=>l(a=>a-1),children:"上一页"}),n.jsxs("span",{children:[r," / ",o,n.jsxs("em",{className:"scn-pager-hint",children:["命中 ",m.length," 条"]})]}),n.jsx("button",{type:"button",disabled:r>=o,onClick:()=>l(a=>a+1),children:"下一页"})]})]})}const Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Qe,meta:qe},Symbol.toStringTag,{value:"Module"})),Ze={id:"infinite-virtual",title:"千项无限流 · 虚拟化",group:"性能",ref:{label:"Pinterest 首页",url:"https://www.pinterest.com/"},pain:"数据涨到上千条后，DOM 节点数跟着涨，滚动掉帧、内存翻倍",plugs:[{fn:"createAutoColumnPlugin",cfg:"minColumnWidth: 190, maxColumns: 5",why:"宽屏多列，配合虚拟化能明显看出渲染节点数不变"},{fn:"createGapPlugin",cfg:"columnGap: 12, rowGap: 12",why:"统一间距"},{fn:"createThrottlePlugin",cfg:"scroll: 16, resize: 120",why:"把滚动回调压到一帧一次；虚拟化下这个开销会被放大"},{fn:"createInfiniteScrollPlugin",cfg:"threshold: 600",why:"提前 600px 追加，滚动体验不断档"},{fn:"createA11yPlugin",cfg:'containerLabel: "无限信息流"',why:"补语义"}],props:["ref={ref}","containerStyle={{ height: 420 }}","virtualize={{ overscan: 2, estimateHeight: 240 }}","onScroll={() => setRange(ref.current?.getVisibleRange())}","onLoadMore={loadMore}"],note:"虚拟化与 RecyclePlugin 不要同开：一个裁渲染、一个改 visibility，叠在一起会互相打架（隐藏的项刚好又被卸载）。"},X=30,Xe=1500,Je=[140,300],E=e=>f({count:X,seed:8800+e*13,heightRange:Je}),Ye=g(h,[S({minColumnWidth:190,maxColumns:5}),p({columnGap:12,rowGap:12}),re({scroll:16,resize:120}),$({threshold:600}),x({containerLabel:"无限信息流",enableTabIndex:!1})]);function en(){const e=u.useRef(null),[t,r]=u.useState(()=>E(0)),[l,s]=u.useState({start:0,end:-1}),c=u.useCallback(()=>{var a;const o=(a=e.current)==null?void 0:a.getVisibleRange();o&&s(d=>d.start===o.start&&d.end===o.end?d:o)},[]),i=u.useCallback(()=>{r(o=>o.length>=Xe?o:[...o,...E(o.length/X)])},[]),m=Math.max(0,l.end-l.start+1);return n.jsxs("div",{className:"scn-widget",children:[n.jsxs("div",{className:"scn-stats",children:[n.jsxs("span",{children:["数据 ",n.jsx("b",{children:t.length})," 项"]}),n.jsxs("span",{children:["实际渲染 ",n.jsx("b",{children:m||"…"})," 项"]}),n.jsx("span",{className:"scn-stats-hint",children:"滚动时节点数保持不变 → 虚拟化生效"})]}),n.jsx(Ye,{ref:e,items:t,containerStyle:{height:372},keyExtractor:o=>o.id,renderItem:o=>n.jsx(P,{card:o,variant:"photo"}),virtualize:{overscan:2,estimateHeight:240},onLayoutComplete:c,onScroll:c,onLoadMore:i})]})}const nn=Object.freeze(Object.defineProperty({__proto__:null,default:en,meta:Ze},Symbol.toStringTag,{value:"Module"})),tn={id:"grouped-wall",title:"分组壁纸墙",group:"图片社区",ref:{label:"Wallhaven 标签页",url:"https://wallhaven.cc/toplist"},pain:"内容按标签分组，既要吸顶提示当前组，又要能一键跳到某组",plugs:[{fn:"createGroupingPlugin",cfg:"groupBy: (item) => item.tag",why:"把组键 → 索引数组写进 sharedData，挂载即算（旧版只在 props 变化时算，首屏永远是空的）"},{fn:"createStickyHeaderPlugin",cfg:'title: "壁纸 · 当前分组"',why:"读 sharedData 里的第一个组名渲染吸顶条（实验版，只取首组）"},{fn:"createAutoColumnPlugin",cfg:"minColumnWidth: 132, maxColumns: 6",why:"壁纸卡窄，窄列能排更多"},{fn:"createGapPlugin",cfg:"columnGap: 10, rowGap: 10",why:"壁纸墙用更紧的间距"}],props:["ref={ref}","containerStyle={{ height: 420 }}","renderItem={(item) => <Wallpaper item={item} />}"],note:"页面侧拿不到 bus（ref 只透传 Core），所以跳转芯片直接用 ref.scrollToItem；插件之间的协作才走 bus / sharedData。"},R=["风景","城市","极简","插画","夜景","几何"],T=f({count:36,seed:9901,heightRange:[150,260]}).map((e,t)=>({...e,tag:R[t%R.length]})),an=g(h,[ie({groupBy:e=>e.tag}),oe({title:"壁纸 · 当前分组"}),S({minColumnWidth:132,maxColumns:6}),p({columnGap:10,rowGap:10})]);function rn({item:e}){return n.jsx("div",{className:"wf-card is-wall",children:n.jsx(V,{height:e.height,hue:e.hue,src:e.image,badge:e.tag,radius:6})})}function on(){const e=u.useRef(null),[t,r]=u.useState(R[0]),l=u.useMemo(()=>{const c=new Map;return T.forEach(i=>c.set(i.tag,(c.get(i.tag)??0)+1)),Array.from(c.entries())},[]),s=c=>{var m;const i=T.findIndex(o=>o.tag===c);i<0||(r(c),(m=e.current)==null||m.scrollToItem(i,{block:"start",behavior:"smooth"}))};return n.jsxs("div",{className:"scn-widget",children:[n.jsx("div",{className:"scn-toolbar",children:n.jsx("div",{className:"scn-seg",children:l.map(([c,i])=>n.jsxs("button",{type:"button",className:t===c?"is-on":"",onClick:()=>s(c),children:[c," ",n.jsx("em",{children:i})]},c))})}),n.jsx(an,{ref:e,items:T,containerStyle:{height:366},keyExtractor:c=>c.id,renderItem:c=>n.jsx(rn,{item:c})})]})}const ln=Object.freeze(Object.defineProperty({__proto__:null,default:on,meta:tn},Symbol.toStringTag,{value:"Module"})),sn={id:"portrait-reels",title:"竖屏短视频流",group:"视频",ref:{label:"抖音 / Reels 探索页",url:"https://www.douyin.com/"},pain:"竖屏卡要等高、列要窄，横屏那套固定高度直接套会变成大长条",plugs:[{fn:"createFixedHeightPlugin",cfg:"itemHeight: 300",why:"竖卡固定 300px 高，覆盖 item.height 字段"},{fn:"createAutoColumnPlugin",cfg:"minColumnWidth: 128, maxColumns: 6",why:"竖卡窄，最小列宽压到 128 才能排出 5–6 列"},{fn:"createAlignmentPlugin",cfg:'mode: "sequential"',why:"等高场景用轮转，避免某列多出一个"},{fn:"createGapPlugin",cfg:"columnGap: 10, rowGap: 14",why:"列紧行松，视觉上更像视频流"},{fn:"createTransitionPlugin",cfg:"duration: 200",why:"重排过渡"},{fn:"createReducedMotionPlugin",why:"尊重系统减少动效"}],props:["containerStyle={{ height: 420 }}","renderItem={(item) => <Reel item={item} />}"],note:"AutoColumn 与 FixedHeight 同开时，列宽由容器算、行高由插件固定 —— 两者互不覆盖，可以放心组合。"},cn=f({count:36,seed:10101,heightRange:[220,320]}),un=g(h,[q({itemHeight:300}),S({minColumnWidth:128,maxColumns:6}),k({mode:"sequential"}),p({columnGap:10,rowGap:14}),b({duration:200}),M()]);function mn({item:e}){return n.jsxs("div",{className:"wf-card is-reel",style:{height:e.height},children:[n.jsx(V,{height:"100%",hue:e.hue,src:e.image,radius:8,deep:!0}),n.jsxs("div",{className:"wf-reel-cap",children:[n.jsx("p",{className:"wf-reel-title",children:e.title}),n.jsxs("p",{className:"wf-reel-meta",children:[n.jsx("span",{children:e.author}),n.jsxs("span",{children:["♥ ",e.likes>999?`${(e.likes/1e3).toFixed(1)}k`:e.likes]})]})]})]})}function dn(){const[e]=u.useState(cn);return n.jsx(un,{items:e,containerStyle:{height:420},keyExtractor:t=>t.id,renderItem:t=>n.jsx(mn,{item:t})})}const gn=Object.freeze(Object.defineProperty({__proto__:null,default:dn,meta:sn},Symbol.toStringTag,{value:"Module"})),pn={id:"kanban",title:"任务看板 · 固定四列",group:"后台",ref:{label:"Trello / 飞书多维表格看板",url:"https://trello.com/"},pain:"列数必须恒定（泳道固定），拖拽换列还要能改业务状态",plugs:[{fn:"createAlignmentPlugin",cfg:'mode: "sequential"',why:"第 i 张卡稳定落 i%4 列，列 = 泳道"},{fn:"createDragReorderPlugin",cfg:"onReorder: (from, to) => move(from, to)",why:"拖拽回调里把 to 换算成目标泳道并更新数据"},{fn:"createA11yPlugin",cfg:'containerLabel: "任务看板"',why:"看板是可交互列表，需要语义与键盘可达"},{fn:"createGapPlugin",cfg:"columnGap: 14, rowGap: 12",why:"列间距大于行间距，泳道感更强"},{fn:"createTransitionPlugin",cfg:"duration: 220",why:"换列后位置过渡"}],props:["columns={4}","containerStyle={{ height: 420 }}","renderItem={(item) => <TaskCard item={item} />}"],note:"sequential 下「列 = index % columns」，所以拖拽换列要真的改数组顺序（把卡片移到目标列对应的下标），只改状态字段是没用的。"},w=["待排期","进行中","待验收","已完成"],O=["阿岚","周知夏","陆青野","苏见月","陈默","白露"],D=["补齐上传失败的重试提示","商品详情页首屏 LCP 优化","订单列表支持按渠道筛选","导出报表加时间范围","修复 iOS 下吸顶错位","结算页地址簿改造","埋点补齐「加入购物车」","优惠券叠加规则梳理","客服工作台拆包","灰度开关接入配置中心","库存超卖兜底方案","对账异常告警"];function hn(){const e=Math.ceil(D.length/w.length);return D.map((t,r)=>{const l=r%w.length;return{id:`t${r}`,title:t,owner:O[r%O.length],lane:l,height:74+r%3*18,tag:["P0","P1","P2"][r%3],order:l*e+Math.floor(r/w.length)}}).sort((t,r)=>t.order-r.order)}function fn(){const[e,t]=u.useState(hn),[r,l]=u.useState("拖到另一列试试：卡片会带状态一起搬走"),s=u.useMemo(()=>{const i=(m,o)=>{t(y=>{if(m===o||m<0||o<0||m>=y.length||o>=y.length)return y;const C=y.slice(),[Y]=C.splice(m,1);return C.splice(o,0,Y),C.map((ee,j)=>({...ee,lane:j%w.length,order:j}))});const a=m%w.length,d=o%w.length;l(a===d?`同列内调整：第 ${m+1} → 第 ${o+1}`:`${w[a]} → ${w[d]}（第 ${o+1} 位）`)};return g(h,[k({mode:"sequential"}),U({onReorder:i}),x({containerLabel:"任务看板",enableTabIndex:!1}),p({columnGap:14,rowGap:12}),b({duration:220})])},[]),c=w.map((i,m)=>e.filter(o=>o.lane===m).length);return n.jsxs("div",{className:"scn-widget",children:[n.jsx("div",{className:"scn-lanes",children:w.map((i,m)=>n.jsxs("span",{className:"scn-lane",children:[i,n.jsx("em",{children:c[m]})]},i))}),n.jsx(s,{items:e,columns:4,containerStyle:{height:372},keyExtractor:i=>i.id,renderItem:i=>n.jsxs("div",{className:"wf-card is-task",style:{height:i.height},children:[n.jsx("span",{className:`wf-task-tag is-${i.tag.toLowerCase()}`,children:i.tag}),n.jsx("p",{className:"wf-task-title",children:i.title}),n.jsxs("p",{className:"wf-task-meta",children:[n.jsx("span",{className:"wf-avatar",children:i.owner.slice(0,1)}),i.owner]})]})}),n.jsx("p",{className:"scn-hint",children:r})]})}const yn=Object.freeze(Object.defineProperty({__proto__:null,default:fn,meta:pn},Symbol.toStringTag,{value:"Module"})),wn={id:"longform-archive",title:"长文归档 · 锚点跳转",group:"内容",ref:{label:"个人博客归档页",url:"https://overreacted.io/"},pain:"几百篇长文要按年归档，目录点击要精确跳转，还要能分享到某一屏",plugs:[{fn:"createScrollAnchorPlugin",cfg:"getAnchorId: (item) => item.id",why:"监听 bus 上的 anchor:scrollToId，按 id 找到索引后 scrollToItem"},{fn:"createAnchorBridgePlugin",why:"本卡内联的自定义插件：把 window 上的 DOM 事件转成 bus 事件（页面拿不到 bus）",local:!0},{fn:"createURLSyncPlugin",cfg:'mode: "hash", keys: ["searchQuery"]',why:"把查询条件写进 URL，刷新可复现"},{fn:"createAutoColumnPlugin",cfg:"minColumnWidth: 260, maxColumns: 3",why:"长文卡偏宽，2–3 列合适"},{fn:"createGapPlugin",cfg:"columnGap: 16, rowGap: 16",why:"长文卡之间要留白"},{fn:"createTransitionPlugin",cfg:"duration: 240",why:"跳转前后的位置过渡"},{fn:"createA11yPlugin",cfg:'containerLabel: "长文归档"',why:"补语义"}],props:["ref={ref}","containerStyle={{ height: 420 }}","renderItem={(item) => <DocCard item={item} />}","onScroll={syncActive}"],note:"锚点跳转的实际落点由 ScrollAnchorPlugin 调 context.scrollToItem 完成；插件里拿得到 context，页面只拿得到 ref —— 这就是桥接的原因。"},_=f({count:30,seed:12101,heightRange:[150,240]});function Pn(){return{name:"AnchorBridgePlugin",enabled:!0,hooks:{onMount:e=>{const t=r=>{var s;const l=(s=r.detail)==null?void 0:s.id;l&&e.bus.emit("anchor:scrollToId",{id:l})};return window.addEventListener("wf:anchor",t),()=>window.removeEventListener("wf:anchor",t)}}}}const Sn=g(h,[le({getAnchorId:e=>e.id}),Pn(),Q({mode:"hash",keys:["searchQuery"]}),S({minColumnWidth:260,maxColumns:3}),p({columnGap:16,rowGap:16}),b({duration:240}),x({containerLabel:"长文归档",enableTabIndex:!1})]);function bn({item:e,active:t}){return n.jsxs("div",{className:`wf-card is-doc${t?" is-active":""}`,style:{height:e.height},children:[n.jsxs("div",{className:"wf-doc-top",children:[n.jsx("span",{className:"wf-doc-tag",children:e.tag}),n.jsx("span",{className:"wf-doc-time",children:se(e.minutesAgo)})]}),n.jsx("p",{className:"wf-doc-title",children:e.title}),n.jsxs("p",{className:"wf-doc-meta",children:[e.author," · 约 ",Math.max(3,Math.round(e.height/12))," 分钟读完"]})]})}function Cn(){const e=u.useRef(null),[t,r]=u.useState(_[0].id),l=_.slice(0,8);return n.jsxs("div",{className:"scn-widget",children:[n.jsx("div",{className:"scn-toc",children:l.map(s=>n.jsx("button",{type:"button",className:t===s.id?"is-on":"",onClick:()=>{r(s.id),window.dispatchEvent(new CustomEvent("wf:anchor",{detail:{id:s.id}}))},children:s.title},s.id))}),n.jsx(Sn,{ref:e,items:_,containerStyle:{height:372},keyExtractor:s=>s.id,renderItem:s=>n.jsx(bn,{item:s,active:s.id===t})})]})}const xn=Object.freeze(Object.defineProperty({__proto__:null,default:Cn,meta:wn},Symbol.toStringTag,{value:"Module"})),vn={id:"recycle-perf",title:"大图墙 · 回收与防抖",group:"性能",ref:{label:"综合性能实验",url:"https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API"},pain:"中等数据量（几百项）时 DOM 不该丢，但离屏项不该继续花绘制成本",plugs:[{fn:"createRecyclePlugin",cfg:"poolSize: 16",why:"离屏项 visibility:hidden，DOM 保留 → 滚回来不用重建，也不触发图片重载"},{fn:"createDebounceLayoutPlugin",cfg:"delay: 140",why:"拖拽窗口时把布局防抖拉到 140ms，避免每帧都重算"},{fn:"createHeatmapAnalyticsPlugin",cfg:"showOverlay: true",why:"统计每项曝光/点击，顶栏汇总；验证 onItemEnterViewport 真的在触发"},{fn:"createAutoColumnPlugin",cfg:"minColumnWidth: 170, maxColumns: 4",why:"常规自适应列数"},{fn:"createGapPlugin",cfg:"columnGap: 12, rowGap: 12",why:"统一间距"}],props:["containerStyle={{ height: 420 }}","renderItem={(item) => <Card item={item} />}","onItemClick={(i, item) => track(item)}"],note:"Recycle 与 Core 的 virtualize 互斥：一个改 visibility、一个直接卸载。选哪个看数据量——几百项用 Recycle，上千项用 virtualize。"},kn=f({count:120,seed:13101,heightRange:[150,280]}),An=g(h,[ce({poolSize:16}),ue({delay:140}),me({showOverlay:!0}),S({minColumnWidth:170,maxColumns:4}),p({columnGap:12,rowGap:12})]);function Tn(){const[e]=u.useState(kn);return n.jsx(An,{items:e,containerStyle:{height:420},keyExtractor:t=>t.id,renderItem:t=>n.jsx(P,{card:t,variant:"photo"})})}const _n=Object.freeze(Object.defineProperty({__proto__:null,default:Tn,meta:vn},Symbol.toStringTag,{value:"Module"})),Gn=`/**
 * 01 · 摄影作品错落流（对标 Unsplash）
 *
 * 版式诉求：图片高度天然不等、列数随容器变、滚到底继续加载。
 * 这里不用固定列数，交给 AutoColumnPlugin；不用 props.columns。
 */
import React, { useCallback, useState } from "react";
import { WaterfallCore, withPlugins } from "vane-waterfall";
import {
  createA11yPlugin,
  createAutoColumnPlugin,
  createGapPlugin,
  createInfiniteScrollPlugin,
  createReducedMotionPlugin,
  createTransitionPlugin,
} from "vane-waterfall/custom-plugins";
import { makeCards, type SeedCard } from "../data/seed";
import { FeedCard } from "../components/FeedCard";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "photo-feed",
  title: "摄影作品错落流",
  group: "图片社区",
  ref: { label: "Unsplash", url: "https://unsplash.com/" },
  pain: "图片高度天然不等，列数还要跟着容器宽度走",
  plugs: [
    { fn: "createAutoColumnPlugin", cfg: "minColumnWidth: 200, maxColumns: 4", why: "按容器宽度算列数，窗口缩放不需要页面参与" },
    { fn: "createGapPlugin", cfg: "columnGap: 14, rowGap: 14", why: "图片流要更紧的间距，用插件而不是 Core props" },
    { fn: "createTransitionPlugin", cfg: "duration: 240", why: "重排时位置过渡，避免卡片瞬间跳动" },
    { fn: "createReducedMotionPlugin", why: "系统开了「减少动态效果」就自动关掉上面的过渡" },
    { fn: "createInfiniteScrollPlugin", cfg: "threshold: 400", why: "距底 400px 预加载，滚到底数据已就位" },
    { fn: "createA11yPlugin", cfg: 'containerLabel: "摄影作品列表"', why: "给容器和卡片补 role / aria-label" },
  ],
  props: ["containerStyle={{ height: 420 }}", "onLoadMore={loadMore}", "renderItem={(item) => <Card item={item} />}"],
  note: "列数是 AutoColumn 算的，所以 props 里不要写 columns —— 写了也会被插件覆盖。",
  tone: "light",
};

const BATCH = 12;
const MAX = 84;
const HEIGHTS: [number, number] = [150, 320];

function seedAt(offset: number) {
  return makeCards({ count: BATCH, seed: 4100 + offset * 7, heightRange: HEIGHTS });
}

const Waterfall = withPlugins<SeedCard>(WaterfallCore, [
  createAutoColumnPlugin({ minColumnWidth: 200, maxColumns: 4 }),
  createGapPlugin({ columnGap: 14, rowGap: 14 }),
  createTransitionPlugin({ duration: 240 }),
  createReducedMotionPlugin(),
  createInfiniteScrollPlugin({ threshold: 400 }),
  createA11yPlugin({ containerLabel: "摄影作品列表", enableTabIndex: false }),
]);

export default function PhotoFeedScenario() {
  const [items, setItems] = useState<SeedCard[]>(() => seedAt(0));

  const loadMore = useCallback(() => {
    setItems((prev) => {
      if (prev.length >= MAX) return prev;
      // 加载是同步的（本地假数据）：真实项目里这里换成 await fetch
      return [...prev, ...seedAt(prev.length / BATCH)];
    });
  }, []);

  return (
    <Waterfall
      items={items}
      containerStyle={{ height: 420 }}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <FeedCard card={item} variant="photo" />}
      onLoadMore={loadMore}
    />
  );
}
`,In=`/**
 * 02 · 三列图文笔记（对标小红书）
 *
 * 版式诉求：固定三列、窄间距、第一条「官方活动」永远占最左列顶部；
 * 点击要能统计（运营侧看点击率）。这三点分别落在 PinItem / Gap / ClickAnalytics。
 */
import React, { useState } from "react";
import { WaterfallCore, withPlugins } from "vane-waterfall";
import {
  createAutoColumnPlugin,
  createClickAnalyticsPlugin,
  createGapPlugin,
  createPinItemPlugin,
} from "vane-waterfall/custom-plugins";
import { makeCards, type SeedCard } from "../data/seed";
import { FeedCard } from "../components/FeedCard";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "social-note",
  title: "三列图文笔记",
  group: "图文社区",
  ref: { label: "小红书", url: "https://www.xiaohongshu.com/explore" },
  pain: "第一条运营活动要钉在最左列顶部，其余内容从它下面继续排",
  plugs: [
    { fn: "createPinItemPlugin", cfg: "pinnedIndices: [0], column: 0", why: "把 index 0 钉成「置顶块」，普通项落到该列且低于置顶块底部时自动下推" },
    { fn: "createAutoColumnPlugin", cfg: "minColumnWidth: 148, maxColumns: 4", why: "笔记卡窄，手机宽度下也要保 2 列以上" },
    { fn: "createGapPlugin", cfg: "columnGap: 10, rowGap: 10", why: "信息密度高的流用 10px 间距" },
    { fn: "createClickAnalyticsPlugin", cfg: "showOverlay: true", why: "点击计数角标，验证 onItemClick 钩子真的被触发" },
  ],
  props: ["containerStyle={{ height: 420 }}", "renderItem={(item, i) => <Note item={item} pinned={i === 0} />}"],
  note:
    "PinItemPlugin 用的是 D1-A 的 calculateItemPosition —— 这个钩子在旧版 Core 里从来没有被执行点，所以旧版置顶是完全不生效的（空转插件）。",
  tone: "light",
};

const DATA = makeCards({ count: 30, seed: 2201, heightRange: [160, 280] });

const Waterfall = withPlugins<SeedCard>(WaterfallCore, [
  createPinItemPlugin({ pinnedIndices: [0], column: 0 }),
  createAutoColumnPlugin({ minColumnWidth: 148, maxColumns: 4 }),
  createGapPlugin({ columnGap: 10, rowGap: 10 }),
  createClickAnalyticsPlugin({ showOverlay: true }),
]);

export default function SocialNoteScenario() {
  const [items] = useState(DATA);

  return (
    <Waterfall
      items={items}
      containerStyle={{ height: 420 }}
      keyExtractor={(item) => item.id}
      renderItem={(item, index) => (
        <FeedCard card={item} variant="note" pinned={index === 0} />
      )}
    />
  );
}
`,Rn=`/**
 * 03 · 商品流（对标京东搜索页）
 *
 * 版式诉求：价格区间筛选 + 销量/价格排序 + 分页 + 「收藏位置」。
 * 这一条是完整数据管线：Filter(40) → Sort(30) → Pagination(10)，
 * 顺序由 priority 决定，页面只管把条件塞进 props。
 */
import React, { useMemo, useState } from "react";
import { WaterfallCore, withPlugins } from "vane-waterfall";
import {
  createBookmarkPlugin,
  createFilterPlugin,
  createGapPlugin,
  createPaginationPlugin,
  createResponsiveColumnsPlugin,
  createSortPlugin,
} from "vane-waterfall/custom-plugins";
import { makeCards, type SeedCard } from "../data/seed";
import { FeedCard } from "../components/FeedCard";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "commerce",
  title: "商品流 · 筛排翻",
  group: "电商",
  ref: { label: "京东搜索结果", url: "https://search.jd.com/" },
  pain: "筛选、排序、翻页三件事互相踩，顺序错了筛完再翻会把结果切碎",
  plugs: [
    { fn: "createFilterPlugin", cfg: "predicate: (item) => item.price <= 500", why: "价格区间筛选；优先级 40，必须排在排序与分页之前" },
    { fn: "createSortPlugin", cfg: "comparator: (a, b) => b.likes - a.likes", why: "按热度排序；优先级 30，作用在「已筛选」的全量集合上" },
    { fn: "createPaginationPlugin", cfg: "pageSize: 12, scrollToTop: true", why: "最后才切片；优先级 10，否则一页里只剩筛出来的零星几件" },
    { fn: "createResponsiveColumnsPlugin", cfg: "breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 720, columns: 3 }, lg: { width: 1080, columns: 4 } }", why: "商品卡有最小宽度，用断点表比算最小列宽更直观" },
    { fn: "createGapPlugin", cfg: "columnGap: 12, rowGap: 12", why: "统一间距" },
    { fn: "createBookmarkPlugin", cfg: 'storageKey: "demo-commerce-bookmark"', why: "按 b 记位置、按 r 跳回，长列表里挑货很实用" },
  ],
  props: [
    "containerStyle={{ height: 420 }}",
    "pageIndex={page}",
    "filterFn={maxPrice > 0 ? (item) => item.price <= maxPrice : undefined}",
    "sortComparator={sort}",
    "scrollToTopOnPageChange",
  ],
  note: "管道顺序由 priority 固定，页面不需要关心调用次序；要改顺序只能改插件 priority，不要试图在 props 上绕。",
};

const DATA = makeCards({ count: 72, seed: 3301, heightRange: [150, 230], commerce: true });

const PAGE_SIZE = 12;

const Waterfall = withPlugins<SeedCard>(WaterfallCore, [
  createFilterPlugin<SeedCard>({ predicate: (item) => item.price <= 500 }),
  createSortPlugin<SeedCard>({ comparator: (a, b) => b.likes - a.likes }),
  createPaginationPlugin<SeedCard>({ pageSize: PAGE_SIZE, scrollToTop: true }),
  createResponsiveColumnsPlugin({
    breakpoints: {
      sm: { width: 0, columns: 2 },
      md: { width: 720, columns: 3 },
      lg: { width: 1080, columns: 4 },
    },
  }),
  createGapPlugin({ columnGap: 12, rowGap: 12 }),
  createBookmarkPlugin({ storageKey: "demo-commerce-bookmark" }),
]);

const SORTS = [
  { key: "hot", label: "热度", cmp: (a: SeedCard, b: SeedCard) => b.likes - a.likes },
  { key: "price-asc", label: "价格 ↑", cmp: (a: SeedCard, b: SeedCard) => a.price - b.price },
  { key: "price-desc", label: "价格 ↓", cmp: (a: SeedCard, b: SeedCard) => b.price - a.price },
  { key: "new", label: "最新", cmp: (a: SeedCard, b: SeedCard) => a.minutesAgo - b.minutesAgo },
];

const PRICES = [0, 200, 350, 500];

export default function CommerceScenario() {
  const [sortKey, setSortKey] = useState("hot");
  const [maxPrice, setMaxPrice] = useState(0);
  const [page, setPage] = useState(1);

  const sortCmp = useMemo(() => SORTS.find((s) => s.key === sortKey)!.cmp, [sortKey]);
  // 页数按「筛选后」算：Filter 在管道里先跑，页面若要显示总页数就得自己先算一遍
  const visibleCount = maxPrice > 0 ? DATA.filter((i) => i.price <= maxPrice).length : DATA.length;
  const totalPages = Math.max(1, Math.ceil(visibleCount / PAGE_SIZE));

  return (
    <div className="scn-widget">
      <div className="scn-toolbar">
        <div className="scn-seg">
          {SORTS.map((s) => (
            <button
              key={s.key}
              type="button"
              className={sortKey === s.key ? "is-on" : ""}
              onClick={() => {
                setSortKey(s.key);
                setPage(1);
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="scn-seg">
          {PRICES.map((p) => (
            <button
              key={p}
              type="button"
              className={maxPrice === p ? "is-on" : ""}
              onClick={() => {
                setMaxPrice(p);
                setPage(1);
              }}
            >
              {p === 0 ? "不限价" : \`≤¥\${p}\`}
            </button>
          ))}
        </div>
      </div>

      <Waterfall
        items={DATA}
        containerStyle={{ height: 362 }}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <FeedCard card={item} variant="product" />}
        pageIndex={page}
        pageSize={PAGE_SIZE}
        sortComparator={sortCmp}
        filterFn={maxPrice > 0 ? (item) => item.price <= maxPrice : undefined}
        scrollToTopOnPageChange
        scrollToTopOnSortChange
      />

      <div className="scn-pager">
        <button type="button" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
          上一页
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          下一页
        </button>
      </div>
    </div>
  );
}
`,Mn=`/**
 * 04 · 视频封面墙（对标 B 站分区页）
 *
 * 版式诉求：封面必须严格 16:9 等高，否则缩略图会被裁得七零八落。
 * FixedHeightPlugin 统一的是**整项高度**，所以卡片要自己吃满 item.height
 * （FeedCard 的 fixed 分支），并且卡片内部的封面用 flex 占满剩余空间。
 */
import React, { useState } from "react";
import { WaterfallCore, withPlugins } from "vane-waterfall";
import {
  createAlignmentPlugin,
  createFixedHeightPlugin,
  createGapPlugin,
  createReducedMotionPlugin,
  createResponsiveColumnsPlugin,
  createTransitionPlugin,
} from "vane-waterfall/custom-plugins";
import { makeCards, type SeedCard } from "../data/seed";
import { FeedCard } from "../components/FeedCard";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "video-grid",
  title: "视频封面墙 · 等高网格",
  group: "视频",
  ref: { label: "Bilibili 分区", url: "https://www.bilibili.com/v/douga/" },
  pain: "封面比例必须统一，否则同一行的封面高度对不齐、看起来像坏图",
  plugs: [
    { fn: "createFixedHeightPlugin", cfg: "itemHeight: 176", why: "把每项高度改成固定值；注意它改的是 item.height 字段，卡片要照着渲染" },
    { fn: "createAlignmentPlugin", cfg: 'mode: "sequential"', why: "等高时用轮转分配，保证每行列数稳定、不会出现「某列空一格」" },
    { fn: "createResponsiveColumnsPlugin", cfg: "breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 780, columns: 3 }, lg: { width: 1120, columns: 4 } }", why: "视频卡偏宽，断点比最小列宽更好控制" },
    { fn: "createGapPlugin", cfg: "columnGap: 16, rowGap: 18", why: "行间距略大于列间距，避免两行标题粘连" },
    { fn: "createTransitionPlugin", cfg: "duration: 180", why: "切换分区时重排的过渡" },
    { fn: "createReducedMotionPlugin", why: "尊重系统的减少动效偏好" },
  ],
  props: ["containerStyle={{ height: 420 }}", "renderItem={(item) => <Cover item={item} fixed />}"],
  note:
    "FixedHeightPlugin 只覆盖 \`item.height\` 字段，Core 量的是 DOM 的 offsetHeight —— 所以卡片必须真的按 height 渲染，否则插件等于没开。",
};

const DATA = makeCards({ count: 40, seed: 4401, heightRange: [150, 230] });

const Waterfall = withPlugins<SeedCard>(WaterfallCore, [
  createFixedHeightPlugin<SeedCard>({ itemHeight: 176 }),
  createAlignmentPlugin({ mode: "sequential" }),
  createResponsiveColumnsPlugin({
    breakpoints: {
      sm: { width: 0, columns: 2 },
      md: { width: 780, columns: 3 },
      lg: { width: 1120, columns: 4 },
    },
  }),
  createGapPlugin({ columnGap: 16, rowGap: 18 }),
  createTransitionPlugin({ duration: 180 }),
  createReducedMotionPlugin(),
]);

export default function VideoGridScenario() {
  const [items] = useState(DATA);
  return (
    <Waterfall
      items={items}
      containerStyle={{ height: 420 }}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <FeedCard card={item} variant="video" fixed />}
    />
  );
}
`,jn=`/**
 * 05 · 指标卡看板（对标自建 BI 首页）
 *
 * 版式诉求：卡片不等高、置顶「核心指标」、列高尽量齐平、刷新后回到原位。
 * balanced 分配 + PinItem + StatePersistence 是这类看板的标配。
 */
import React, { useState } from "react";
import { WaterfallCore, withPlugins } from "vane-waterfall";
import {
  createAlignmentPlugin,
  createGapPlugin,
  createPinItemPlugin,
  createResponsiveColumnsPlugin,
  createStatePersistencePlugin,
} from "vane-waterfall/custom-plugins";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "dashboard",
  title: "指标卡看板",
  group: "后台",
  ref: { label: "自建 BI 首页", url: "https://ant.design/components/card-cn" },
  pain: "卡片高度参差、核心指标要固定位置，刷新后还要回到原来的滚动位置",
  plugs: [
    { fn: "createAlignmentPlugin", cfg: 'mode: "balanced"', why: "看板在意「每列卡片数接近」，而不是「每列高度接近」" },
    { fn: "createPinItemPlugin", cfg: "pinnedIndices: [0, 1], column: 0", why: "两块核心指标钉在最左列，且按顺序纵向堆叠" },
    { fn: "createResponsiveColumnsPlugin", cfg: "breakpoints: { sm: { width: 0, columns: 1 }, md: { width: 640, columns: 2 }, lg: { width: 1024, columns: 3 } }", why: "窄屏退到单列，卡片不被压扁" },
    { fn: "createGapPlugin", cfg: "columnGap: 12, rowGap: 12", why: "看板要紧凑" },
    { fn: "createStatePersistencePlugin", cfg: 'storageKey: "demo-dashboard", persistScroll: true', why: "记住滚动位置，刷新回到原处" },
  ],
  props: ["containerStyle={{ height: 420 }}", "renderItem={(item, i) => <Metric item={item} pinned={i < 2} />}"],
  note: "balanced 与 shortest 在列高相同时都取最左列，所以两种模式的差异只在「项数」与「高度」哪个先触发换列。",
};

interface Metric {
  id: string;
  title: string;
  value: string;
  delta: number;
  height: number;
  series: number[];
  tone: "up" | "down";
}

// 高度要容得下「标题 / 数值 / 环比 / 迷你走势」四行，否则走势图会被裁掉
const RAW: Array<[string, string, number, number]> = [
  ["今日 GMV", "¥ 1,284,900", 12.4, 124],
  ["支付订单", "18,432", 6.1, 124],
  ["客单价", "¥ 69.7", -2.3, 104],
  ["新增用户", "3,204", 21.8, 128],
  ["次日留存", "41.2%", 0.8, 128],
  ["退款率", "1.9%", -0.4, 104],
  ["客服响应", "38s", -12.0, 118],
  ["库存周转", "6.4 天", 3.2, 118],
  ["履约及时率", "97.6%", 1.1, 124],
  ["投诉工单", "24", -18.5, 104],
  ["毛利率", "38.4%", 2.2, 112],
  ["复购率", "23.9%", 4.6, 112],
];

const DATA: Metric[] = RAW.map(([title, value, delta, height], i) => ({
  id: \`m\${i}\`,
  title,
  value,
  delta,
  height,
  tone: delta >= 0 ? "up" : "down",
  series: Array.from({ length: 12 }, (_v, k) => 30 + Math.abs(Math.sin((i + 1) * (k + 2) * 1.7)) * 70),
}));

const Waterfall = withPlugins<Metric>(WaterfallCore, [
  createAlignmentPlugin({ mode: "balanced" }),
  createPinItemPlugin({ pinnedIndices: [0, 1], column: 0 }),
  createResponsiveColumnsPlugin({
    breakpoints: {
      sm: { width: 0, columns: 1 },
      md: { width: 640, columns: 2 },
      lg: { width: 1024, columns: 3 },
    },
  }),
  createGapPlugin({ columnGap: 12, rowGap: 12 }),
  createStatePersistencePlugin({ storageKey: "demo-dashboard", persistScroll: true }),
]);

function Sparkline({ points, tone }: { points: number[]; tone: "up" | "down" }) {
  const w = 132;
  const h = 22;
  const step = w / (points.length - 1);
  const d = points
    .map((p, i) => \`\${i === 0 ? "M" : "L"}\${(i * step).toFixed(1)},\${(h - (p / 100) * h).toFixed(1)}\`)
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={\`0 0 \${w} \${h}\`} aria-hidden className="wf-spark">
      <path
        d={d}
        fill="none"
        className={\`wf-spark-line is-\${tone}\`}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MetricCard({ item, pinned }: { item: Metric; pinned?: boolean }) {
  return (
    <div className={\`wf-card is-metric\${pinned ? " is-pinned" : ""}\`} style={{ height: item.height }}>
      <div className="wf-metric-head">
        <span className="wf-metric-title">{item.title}</span>
        {pinned ? <span className="wf-pill">核心</span> : null}
      </div>
      <div className="wf-metric-value">{item.value}</div>
      <div className={\`wf-metric-delta is-\${item.tone}\`}>
        {item.delta >= 0 ? "▲" : "▼"} {Math.abs(item.delta)}%
        <span className="wf-metric-hint">环比</span>
      </div>
      <Sparkline points={item.series} tone={item.tone} />
    </div>
  );
}

export default function DashboardScenario() {
  const [items] = useState(DATA);
  return (
    <Waterfall
      items={items}
      containerStyle={{ height: 420 }}
      keyExtractor={(item) => item.id}
      renderItem={(item, index) => <MetricCard item={item} pinned={index < 2} />}
    />
  );
}
`,Nn=`/**
 * 06 · 书签墙（可拖拽排序 + 位置书签）
 *
 * 版式诉求：卡片可以手动拖到任意位置，拖完顺序要回到业务数据；
 * 浏览到一半按 b 记位置、按 r 跳回来。
 *
 * 这个场景的装配放在**组件内**（useMemo）而不是模块顶层：\`onReorder\` 要改
 * 组件 state，模块顶层的闭包拿不到 setItems。这也是判断「装配放哪」的准则：
 * 钩子需要读组件闭包 → 放进 useMemo；纯配置 → 模块顶层即可（省一次注册）。
 */
import React, { useMemo, useState } from "react";
import { WaterfallCore, withPlugins } from "vane-waterfall";
import {
  createA11yPlugin,
  createBookmarkPlugin,
  createDragReorderPlugin,
  createGapPlugin,
  createResponsiveColumnsPlugin,
  createTransitionPlugin,
} from "vane-waterfall/custom-plugins";
import { makeCards, type SeedCard } from "../data/seed";
import { FeedCard } from "../components/FeedCard";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "bookmark-wall",
  title: "书签墙 · 拖拽排序",
  group: "效率",
  ref: { label: "Raindrop.io 收藏墙", url: "https://raindrop.io/" },
  pain: "收藏顺序要能手动调整，且调整结果必须回到业务数据，不能只停在视图层",
  plugs: [
    { fn: "createDragReorderPlugin", cfg: "showHandle: true, onReorder: handleReorder", why: "HTML5 拖拽；插件只算出 from/to，数组怎么改由页面决定" },
    { fn: "createBookmarkPlugin", cfg: 'storageKey: "demo-wall-bookmark", scrollBehavior: "smooth"', why: "按 b 记忆滚动位置、按 r 平滑跳回" },
    { fn: "createA11yPlugin", cfg: 'itemRole: "listitem"', why: "拖拽容器要保留列表语义，否则读屏软件拿不到结构" },
    { fn: "createResponsiveColumnsPlugin", cfg: "breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 760, columns: 3 } }", why: "书签卡偏小，两列起步" },
    { fn: "createGapPlugin", cfg: "columnGap: 12, rowGap: 12", why: "统一间距" },
    { fn: "createTransitionPlugin", cfg: "duration: 200", why: "拖完重排的位置过渡" },
  ],
  props: [
    "containerStyle={{ height: 392 }}",
    "renderItem={(item) => <Card item={item} />}",
    "onItemClick={(i, item) => open(item)}",
  ],
  note:
    "旧版 DragReorderPlugin 只把 from/to 写进 sharedData，没有 onReorder 回调；且它与 A11yPlugin 的 renderItemWrapper 参数顺序相反，两个一起开会把节点与索引错位。",
};

const INITIAL = makeCards({ count: 18, seed: 6601, heightRange: [120, 200] });

const HANDLE = (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden>
    <circle cx="5" cy="3" r="1.3" />
    <circle cx="11" cy="3" r="1.3" />
    <circle cx="5" cy="8" r="1.3" />
    <circle cx="11" cy="8" r="1.3" />
    <circle cx="5" cy="13" r="1.3" />
    <circle cx="11" cy="13" r="1.3" />
  </svg>
);

export default function BookmarkWallScenario() {
  const [items, setItems] = useState(INITIAL);
  const [lastOp, setLastOp] = useState("拖动右上角手柄换位置；按 b 存书签、按 r 跳回");

  const Waterfall = useMemo(() => {
    const handleReorder = (from: number, to: number) => {
      setItems((prev) => {
        if (from === to || from < 0 || to < 0 || from >= prev.length || to >= prev.length) {
          return prev;
        }
        const next = prev.slice();
        const [moved] = next.splice(from, 1);
        next.splice(to, 0, moved);
        return next;
      });
      setLastOp(\`第 \${from + 1} 张 → 第 \${to + 1} 张（已写回 state）\`);
    };

    return withPlugins<SeedCard>(WaterfallCore, [
      createDragReorderPlugin<SeedCard>({ showHandle: true, onReorder: handleReorder }),
      createBookmarkPlugin({ storageKey: "demo-wall-bookmark", scrollBehavior: "smooth" }),
      createA11yPlugin({
        itemRole: "listitem",
        containerLabel: "我的收藏",
        enableTabIndex: false,
      }),
      createResponsiveColumnsPlugin({
        breakpoints: {
          sm: { width: 0, columns: 2 },
          md: { width: 760, columns: 3 },
        },
      }),
      createGapPlugin({ columnGap: 12, rowGap: 12 }),
      createTransitionPlugin({ duration: 200 }),
    ]);
  }, []);

  return (
    <div className="scn-widget">
      <Waterfall
        items={items}
        containerStyle={{ height: 392 }}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <FeedCard
            card={item}
            variant="plain"
            corner={
              <span className="wf-drag-handle" title="拖拽排序">
                {HANDLE}
              </span>
            }
          />
        )}
      />
      <p className="scn-hint">{lastOp}</p>
    </div>
  );
}
`,Wn=`/**
 * 07 · 带搜索的资讯流
 *
 * 版式诉求：搜索框输入即筛、可按「最新 / 最热」切换、结果分页。
 * 三类条件都要能回顶，否则用户在第三页改关键词会看到一片空白。
 *
 * 这是数据管线的完整形态：Filter(40) → Sort(30) → Search(20) → Pagination(10)。
 */
import React, { useMemo, useState } from "react";
import { WaterfallCore, withPlugins } from "vane-waterfall";
import {
  createFilterPlugin,
  createGapPlugin,
  createPaginationPlugin,
  createResponsiveColumnsPlugin,
  createSearchPlugin,
  createSortPlugin,
  createURLSyncPlugin,
} from "vane-waterfall/custom-plugins";
import { makeCards, type SeedCard } from "../data/seed";
import { FeedCard } from "../components/FeedCard";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "news-search",
  title: "资讯流 · 搜索筛排",
  group: "内容",
  ref: { label: "少数派 / 掘金 首页", url: "https://sspai.com/" },
  pain: "关键词、排序、页码三态联动，改任一条件都要回顶，且顺序不能错",
  plugs: [
    { fn: "createFilterPlugin", cfg: 'predicate: (item) => item.tag !== "旅行"', why: "先做粗筛（例如屏蔽某栏目），优先级 40" },
    { fn: "createSortPlugin", cfg: "comparator: (a, b) => b.likes - a.likes", why: "排序作用在粗筛后的集合上，优先级 30" },
    { fn: "createSearchPlugin", cfg: 'fields: ["title", "author"], scrollToTop: true', why: "关键词在排序后再筛，优先级 20；匹配字段要显式给，否则会把 undefined 也扫一遍" },
    { fn: "createPaginationPlugin", cfg: "pageSize: 15", why: "最后切片，优先级 10" },
    { fn: "createURLSyncPlugin", cfg: 'mode: "search", keys: ["searchQuery", "pageIndex"]', why: "条件写进 URL，刷新和分享都能复现同一屏" },
    { fn: "createResponsiveColumnsPlugin", cfg: "breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 820, columns: 3 }, lg: { width: 1140, columns: 4 } }", why: "资讯卡在宽屏可以排 4 列" },
    { fn: "createGapPlugin", cfg: "columnGap: 14, rowGap: 16", why: "统一间距" },
  ],
  props: [
    "containerStyle={{ height: 340 }}",
    "searchQuery={query}",
    "pageIndex={page}",
    "pageSize={15}",
    "sortComparator={cmp}",
    "scrollToTopOnSearchChange",
    "scrollToTopOnPageChange",
  ],
  note:
    "URLSyncPlugin 会改写 location.search；demo 用的是 hash 路由，所以下方条件区另外显示了一遍当前条件，便于确认同步生效。",
};

const DATA = makeCards({ count: 60, seed: 7701, heightRange: [130, 210] });
const PAGE_SIZE = 15;

const Waterfall = withPlugins<SeedCard>(WaterfallCore, [
  createFilterPlugin<SeedCard>({ predicate: (item) => item.tag !== "旅行" }),
  createSortPlugin<SeedCard>({ comparator: (a, b) => b.likes - a.likes }),
  createSearchPlugin<SeedCard>({ fields: ["title", "author", "tag"], scrollToTop: true }),
  createPaginationPlugin<SeedCard>({ pageSize: PAGE_SIZE }),
  createURLSyncPlugin({ mode: "search", keys: ["searchQuery", "pageIndex"] }),
  createResponsiveColumnsPlugin({
    breakpoints: {
      sm: { width: 0, columns: 2 },
      md: { width: 820, columns: 3 },
      lg: { width: 1140, columns: 4 },
    },
  }),
  createGapPlugin({ columnGap: 14, rowGap: 16 }),
]);

export default function NewsSearchScenario() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState<"hot" | "new">("hot");

  const cmp = useMemo(
    () =>
      sortKey === "hot"
        ? (a: SeedCard, b: SeedCard) => b.likes - a.likes
        : (a: SeedCard, b: SeedCard) => a.minutesAgo - b.minutesAgo,
    [sortKey]
  );

  const matched = useMemo(() => {
    const q = query.trim().toLowerCase();
    const pool = DATA.filter((item) => item.tag !== "旅行");
    if (!q) return pool;
    return pool.filter((item) =>
      [item.title, item.author, item.tag].some((v) => v.toLowerCase().includes(q))
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(matched.length / PAGE_SIZE));

  return (
    <div className="scn-widget">
      <div className="scn-toolbar">
        <input
          className="scn-input"
          value={query}
          placeholder="搜索标题 / 作者 / 标签"
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
        />
        <div className="scn-seg">
          {(["hot", "new"] as const).map((k) => (
            <button
              key={k}
              type="button"
              className={sortKey === k ? "is-on" : ""}
              onClick={() => {
                setSortKey(k);
                setPage(1);
              }}
            >
              {k === "hot" ? "最热" : "最新"}
            </button>
          ))}
        </div>
      </div>

      <Waterfall
        items={DATA}
        containerStyle={{ height: 316 }}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <FeedCard card={item} variant="doc" />}
        searchQuery={query}
        pageIndex={page}
        pageSize={PAGE_SIZE}
        sortComparator={cmp}
        scrollToTopOnSearchChange
        scrollToTopOnSortChange
        scrollToTopOnPageChange
      />

      <div className="scn-pager">
        <button type="button" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
          上一页
        </button>
        <span>
          {page} / {totalPages}
          <em className="scn-pager-hint">命中 {matched.length} 条</em>
        </span>
        <button type="button" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
          下一页
        </button>
      </div>
    </div>
  );
}
`,Ln=`/**
 * 08 · 无限流 + 虚拟化（1500 项）
 *
 * 版式诉求：数据量上千，DOM 节点不能跟着涨；滚到底继续追加。
 *
 * 这里的虚拟化是 **Core 自带能力**（\`virtualize\`），不是插件：旧版把虚拟化写成
 * VirtualWaterfallPlugin —— 它把 renderItem 置空、自己用 overlay 画卡片，
 * 等于架空 Core；未渲染的项量不到高度就直接 continue，总高严重偏小、滚动条乱跳。
 * 现在虚拟化只裁「渲染」，不裁「布局」：未测项按 estimateHeight 占位。
 */
import React, { useCallback, useRef, useState } from "react";
import { WaterfallCore, withPlugins, type WaterfallCoreRef } from "vane-waterfall";
import {
  createA11yPlugin,
  createAutoColumnPlugin,
  createGapPlugin,
  createInfiniteScrollPlugin,
  createThrottlePlugin,
} from "vane-waterfall/custom-plugins";
import { makeCards, type SeedCard } from "../data/seed";
import { FeedCard } from "../components/FeedCard";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "infinite-virtual",
  title: "千项无限流 · 虚拟化",
  group: "性能",
  ref: { label: "Pinterest 首页", url: "https://www.pinterest.com/" },
  pain: "数据涨到上千条后，DOM 节点数跟着涨，滚动掉帧、内存翻倍",
  plugs: [
    { fn: "createAutoColumnPlugin", cfg: "minColumnWidth: 190, maxColumns: 5", why: "宽屏多列，配合虚拟化能明显看出渲染节点数不变" },
    { fn: "createGapPlugin", cfg: "columnGap: 12, rowGap: 12", why: "统一间距" },
    { fn: "createThrottlePlugin", cfg: "scroll: 16, resize: 120", why: "把滚动回调压到一帧一次；虚拟化下这个开销会被放大" },
    { fn: "createInfiniteScrollPlugin", cfg: "threshold: 600", why: "提前 600px 追加，滚动体验不断档" },
    { fn: "createA11yPlugin", cfg: 'containerLabel: "无限信息流"', why: "补语义" },
  ],
  props: [
    "ref={ref}",
    "containerStyle={{ height: 420 }}",
    "virtualize={{ overscan: 2, estimateHeight: 240 }}",
    "onScroll={() => setRange(ref.current?.getVisibleRange())}",
    "onLoadMore={loadMore}",
  ],
  note:
    "虚拟化与 RecyclePlugin 不要同开：一个裁渲染、一个改 visibility，叠在一起会互相打架（隐藏的项刚好又被卸载）。",
};

const BATCH = 30;
const MAX = 1500;
const HEIGHTS: [number, number] = [140, 300];

const seedAt = (offset: number) =>
  makeCards({ count: BATCH, seed: 8800 + offset * 13, heightRange: HEIGHTS });

const Waterfall = withPlugins<SeedCard>(WaterfallCore, [
  createAutoColumnPlugin({ minColumnWidth: 190, maxColumns: 5 }),
  createGapPlugin({ columnGap: 12, rowGap: 12 }),
  createThrottlePlugin({ scroll: 16, resize: 120 }),
  createInfiniteScrollPlugin({ threshold: 600 }),
  createA11yPlugin({ containerLabel: "无限信息流", enableTabIndex: false }),
]);

export default function InfiniteVirtualScenario() {
  const ref = useRef<WaterfallCoreRef>(null);
  const [items, setItems] = useState<SeedCard[]>(() => seedAt(0));
  const [range, setRange] = useState({ start: 0, end: -1 });

  /** 从 Core 读当前渲染区间；相等就直接 return，避免 setState 打转 */
  const syncRange = useCallback(() => {
    const next = ref.current?.getVisibleRange();
    if (!next) return;
    setRange((prev) => (prev.start === next.start && prev.end === next.end ? prev : next));
  }, []);

  const loadMore = useCallback(() => {
    setItems((prev) => {
      if (prev.length >= MAX) return prev;
      return [...prev, ...seedAt(prev.length / BATCH)];
    });
  }, []);

  const rendered = Math.max(0, range.end - range.start + 1);

  return (
    <div className="scn-widget">
      <div className="scn-stats">
        <span>
          数据 <b>{items.length}</b> 项
        </span>
        <span>
          实际渲染 <b>{rendered || "…"}</b> 项
        </span>
        <span className="scn-stats-hint">滚动时节点数保持不变 → 虚拟化生效</span>
      </div>

      <Waterfall
        ref={ref}
        items={items}
        containerStyle={{ height: 372 }}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <FeedCard card={item} variant="photo" />}
        virtualize={{ overscan: 2, estimateHeight: 240 }}
        // 首帧也要有读数：只监听 onScroll 的话，不滚就永远显示 0
        onLayoutComplete={syncRange}
        onScroll={syncRange}
        onLoadMore={loadMore}
      />
    </div>
  );
}
`,En=`/**
 * 09 · 分组壁纸墙
 *
 * 版式诉求：内容按标签分组，顶部吸顶显示当前组，侧边能直接跳到某一组。
 *
 * 分工要说清楚：GroupingPlugin 只把「组键 → 索引数组」写进
 * \`sharedData.get("GROUPS")\`，它不负责画分组头 —— 画头是 StickyHeaderPlugin
 * 的事（读同一份 sharedData）。页面自己的跳转芯片是最简单的一层 UI。
 */
import React, { useMemo, useRef, useState } from "react";
import { WaterfallCore, withPlugins, type WaterfallCoreRef } from "vane-waterfall";
import {
  createAutoColumnPlugin,
  createGapPlugin,
  createGroupingPlugin,
  createStickyHeaderPlugin,
} from "vane-waterfall/custom-plugins";
import { makeCards, type SeedCard } from "../data/seed";
import { Thumb } from "../components/Thumb";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "grouped-wall",
  title: "分组壁纸墙",
  group: "图片社区",
  ref: { label: "Wallhaven 标签页", url: "https://wallhaven.cc/toplist" },
  pain: "内容按标签分组，既要吸顶提示当前组，又要能一键跳到某组",
  plugs: [
    { fn: "createGroupingPlugin", cfg: "groupBy: (item) => item.tag", why: "把组键 → 索引数组写进 sharedData，挂载即算（旧版只在 props 变化时算，首屏永远是空的）" },
    { fn: "createStickyHeaderPlugin", cfg: 'title: "壁纸 · 当前分组"', why: "读 sharedData 里的第一个组名渲染吸顶条（实验版，只取首组）" },
    { fn: "createAutoColumnPlugin", cfg: "minColumnWidth: 132, maxColumns: 6", why: "壁纸卡窄，窄列能排更多" },
    { fn: "createGapPlugin", cfg: "columnGap: 10, rowGap: 10", why: "壁纸墙用更紧的间距" },
  ],
  props: [
    "ref={ref}",
    "containerStyle={{ height: 420 }}",
    "renderItem={(item) => <Wallpaper item={item} />}",
  ],
  note:
    "页面侧拿不到 bus（ref 只透传 Core），所以跳转芯片直接用 ref.scrollToItem；插件之间的协作才走 bus / sharedData。",
};

const TAGS = ["风景", "城市", "极简", "插画", "夜景", "几何"];
const DATA: SeedCard[] = makeCards({ count: 36, seed: 9901, heightRange: [150, 260] }).map(
  (c, i) => ({ ...c, tag: TAGS[i % TAGS.length] })
);

const Waterfall = withPlugins<SeedCard>(WaterfallCore, [
  createGroupingPlugin<SeedCard>({ groupBy: (item) => item.tag }),
  createStickyHeaderPlugin({ title: "壁纸 · 当前分组" }),
  createAutoColumnPlugin({ minColumnWidth: 132, maxColumns: 6 }),
  createGapPlugin({ columnGap: 10, rowGap: 10 }),
]);

function Wallpaper({ item }: { item: SeedCard }) {
  return (
    <div className="wf-card is-wall">
      <Thumb height={item.height} hue={item.hue} src={item.image} badge={item.tag} radius={6} />
    </div>
  );
}

export default function GroupedWallScenario() {
  const ref = useRef<WaterfallCoreRef>(null);
  const [active, setActive] = useState(TAGS[0]);

  // 页面这份分组只是为了画跳转芯片；插件那份在 sharedData 里，供吸顶条使用
  const groups = useMemo(() => {
    const map = new Map<string, number>();
    DATA.forEach((item) => map.set(item.tag, (map.get(item.tag) ?? 0) + 1));
    return Array.from(map.entries());
  }, []);

  const jump = (tag: string) => {
    const index = DATA.findIndex((item) => item.tag === tag);
    if (index < 0) return;
    setActive(tag);
    ref.current?.scrollToItem(index, { block: "start", behavior: "smooth" });
  };

  return (
    <div className="scn-widget">
      <div className="scn-toolbar">
        <div className="scn-seg">
          {groups.map(([tag, count]) => (
            <button
              key={tag}
              type="button"
              className={active === tag ? "is-on" : ""}
              onClick={() => jump(tag)}
            >
              {tag} <em>{count}</em>
            </button>
          ))}
        </div>
      </div>

      <Waterfall
        ref={ref}
        items={DATA}
        containerStyle={{ height: 366 }}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <Wallpaper item={item} />}
      />
    </div>
  );
}
`,On=`/**
 * 10 · 竖屏短视频流（9:16）
 *
 * 版式诉求：封面严格竖屏比例、等高、列要窄；一行能放 5–6 个才像信息流。
 * 与「视频封面墙」的区别：那边是 16:9 横卡，这边是 9:16 竖卡，
 * 行高与列宽的关系反过来，靠 FixedHeight + AutoColumn 一起控。
 */
import React, { useState } from "react";
import { WaterfallCore, withPlugins } from "vane-waterfall";
import {
  createAlignmentPlugin,
  createAutoColumnPlugin,
  createFixedHeightPlugin,
  createGapPlugin,
  createReducedMotionPlugin,
  createTransitionPlugin,
} from "vane-waterfall/custom-plugins";
import { makeCards, type SeedCard } from "../data/seed";
import { Thumb } from "../components/Thumb";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "portrait-reels",
  title: "竖屏短视频流",
  group: "视频",
  ref: { label: "抖音 / Reels 探索页", url: "https://www.douyin.com/" },
  pain: "竖屏卡要等高、列要窄，横屏那套固定高度直接套会变成大长条",
  plugs: [
    { fn: "createFixedHeightPlugin", cfg: "itemHeight: 300", why: "竖卡固定 300px 高，覆盖 item.height 字段" },
    { fn: "createAutoColumnPlugin", cfg: "minColumnWidth: 128, maxColumns: 6", why: "竖卡窄，最小列宽压到 128 才能排出 5–6 列" },
    { fn: "createAlignmentPlugin", cfg: 'mode: "sequential"', why: "等高场景用轮转，避免某列多出一个" },
    { fn: "createGapPlugin", cfg: "columnGap: 10, rowGap: 14", why: "列紧行松，视觉上更像视频流" },
    { fn: "createTransitionPlugin", cfg: "duration: 200", why: "重排过渡" },
    { fn: "createReducedMotionPlugin", why: "尊重系统减少动效" },
  ],
  props: ["containerStyle={{ height: 420 }}", "renderItem={(item) => <Reel item={item} />}"],
  note: "AutoColumn 与 FixedHeight 同开时，列宽由容器算、行高由插件固定 —— 两者互不覆盖，可以放心组合。",
};

const DATA = makeCards({ count: 36, seed: 10101, heightRange: [220, 320] });

const Waterfall = withPlugins<SeedCard>(WaterfallCore, [
  createFixedHeightPlugin<SeedCard>({ itemHeight: 300 }),
  createAutoColumnPlugin({ minColumnWidth: 128, maxColumns: 6 }),
  createAlignmentPlugin({ mode: "sequential" }),
  createGapPlugin({ columnGap: 10, rowGap: 14 }),
  createTransitionPlugin({ duration: 200 }),
  createReducedMotionPlugin(),
]);

function Reel({ item }: { item: SeedCard }) {
  return (
    <div className="wf-card is-reel" style={{ height: item.height }}>
      <Thumb height="100%" hue={item.hue} src={item.image} radius={8} deep />
      <div className="wf-reel-cap">
        <p className="wf-reel-title">{item.title}</p>
        <p className="wf-reel-meta">
          <span>{item.author}</span>
          <span>♥ {item.likes > 999 ? \`\${(item.likes / 1000).toFixed(1)}k\` : item.likes}</span>
        </p>
      </div>
    </div>
  );
}

export default function PortraitReelsScenario() {
  const [items] = useState(DATA);
  return (
    <Waterfall
      items={items}
      containerStyle={{ height: 420 }}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <Reel item={item} />}
    />
  );
}
`,Dn=`/**
 * 11 · 任务看板（固定列 + 拖拽换列）
 *
 * 版式诉求：固定 4 列（列 = 泳道），拖卡片到别的列就是改状态。
 *
 * 这里刻意不用 AutoColumnPlugin：看板列数由泳道数量决定，不能随宽度变。
 * 用 \`columns={4}\` + \`sequential\` 让第 i 张卡稳定落在第 i%4 列，
 * 再由 DragReorderPlugin 提供 from/to，页面把 to 映射成目标泳道。
 */
import React, { useMemo, useState } from "react";
import { WaterfallCore, withPlugins } from "vane-waterfall";
import {
  createA11yPlugin,
  createAlignmentPlugin,
  createDragReorderPlugin,
  createGapPlugin,
  createTransitionPlugin,
} from "vane-waterfall/custom-plugins";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "kanban",
  title: "任务看板 · 固定四列",
  group: "后台",
  ref: { label: "Trello / 飞书多维表格看板", url: "https://trello.com/" },
  pain: "列数必须恒定（泳道固定），拖拽换列还要能改业务状态",
  plugs: [
    { fn: "createAlignmentPlugin", cfg: 'mode: "sequential"', why: "第 i 张卡稳定落 i%4 列，列 = 泳道" },
    { fn: "createDragReorderPlugin", cfg: "onReorder: (from, to) => move(from, to)", why: "拖拽回调里把 to 换算成目标泳道并更新数据" },
    { fn: "createA11yPlugin", cfg: 'containerLabel: "任务看板"', why: "看板是可交互列表，需要语义与键盘可达" },
    { fn: "createGapPlugin", cfg: "columnGap: 14, rowGap: 12", why: "列间距大于行间距，泳道感更强" },
    { fn: "createTransitionPlugin", cfg: "duration: 220", why: "换列后位置过渡" },
  ],
  props: ["columns={4}", "containerStyle={{ height: 420 }}", "renderItem={(item) => <TaskCard item={item} />}"],
  note:
    "sequential 下「列 = index % columns」，所以拖拽换列要真的改数组顺序（把卡片移到目标列对应的下标），只改状态字段是没用的。",
};

const LANES = ["待排期", "进行中", "待验收", "已完成"];

interface Task {
  id: string;
  title: string;
  owner: string;
  lane: number;
  height: number;
  tag: string;
  /** 用于让 sequential 把卡片排到目标列：由 lane 决定的「虚拟下标」 */
  order: number;
}

const OWNERS = ["阿岚", "周知夏", "陆青野", "苏见月", "陈默", "白露"];
const TITLES = [
  "补齐上传失败的重试提示",
  "商品详情页首屏 LCP 优化",
  "订单列表支持按渠道筛选",
  "导出报表加时间范围",
  "修复 iOS 下吸顶错位",
  "结算页地址簿改造",
  "埋点补齐「加入购物车」",
  "优惠券叠加规则梳理",
  "客服工作台拆包",
  "灰度开关接入配置中心",
  "库存超卖兜底方案",
  "对账异常告警",
];

function build(): Task[] {
  const perLane = Math.ceil(TITLES.length / LANES.length);
  return TITLES.map((title, i) => {
    const lane = i % LANES.length;
    return {
      id: \`t\${i}\`,
      title,
      owner: OWNERS[i % OWNERS.length],
      lane,
      height: 74 + (i % 3) * 18,
      tag: ["P0", "P1", "P2"][i % 3],
      order: lane * perLane + Math.floor(i / LANES.length),
    };
  }).sort((a, b) => a.order - b.order);
}

export default function KanbanScenario() {
  const [tasks, setTasks] = useState<Task[]>(build);
  const [lastOp, setLastOp] = useState("拖到另一列试试：卡片会带状态一起搬走");

  const Waterfall = useMemo(() => {
    const move = (from: number, to: number) => {
      setTasks((prev) => {
        if (from === to || from < 0 || to < 0 || from >= prev.length || to >= prev.length) {
          return prev;
        }
        const next = prev.slice();
        const [moved] = next.splice(from, 1);
        next.splice(to, 0, moved);
        // 换列后重排 order：seq·perLane 决定落在哪一列
        return next.map((task, index) => ({
          ...task,
          lane: index % LANES.length,
          order: index,
        }));
      });
      const laneFrom = from % LANES.length;
      const laneTo = to % LANES.length;
      setLastOp(
        laneFrom === laneTo
          ? \`同列内调整：第 \${from + 1} → 第 \${to + 1}\`
          : \`\${LANES[laneFrom]} → \${LANES[laneTo]}（第 \${to + 1} 位）\`
      );
    };

    return withPlugins<Task>(WaterfallCore, [
      createAlignmentPlugin({ mode: "sequential" }),
      createDragReorderPlugin<Task>({ onReorder: move }),
      createA11yPlugin({ containerLabel: "任务看板", enableTabIndex: false }),
      createGapPlugin({ columnGap: 14, rowGap: 12 }),
      createTransitionPlugin({ duration: 220 }),
    ]);
  }, []);

  const counts = LANES.map((_l, i) => tasks.filter((t) => t.lane === i).length);

  return (
    <div className="scn-widget">
      <div className="scn-lanes">
        {LANES.map((lane, i) => (
          <span key={lane} className="scn-lane">
            {lane}
            <em>{counts[i]}</em>
          </span>
        ))}
      </div>

      <Waterfall
        items={tasks}
        columns={4}
        containerStyle={{ height: 372 }}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <div className="wf-card is-task" style={{ height: item.height }}>
            <span className={\`wf-task-tag is-\${item.tag.toLowerCase()}\`}>{item.tag}</span>
            <p className="wf-task-title">{item.title}</p>
            <p className="wf-task-meta">
              <span className="wf-avatar">{item.owner.slice(0, 1)}</span>
              {item.owner}
            </p>
          </div>
        )}
      />
      <p className="scn-hint">{lastOp}</p>
    </div>
  );
}
`,$n=`/**
 * 12 · 长文归档（锚点跳转 + URL 同步）
 *
 * 版式诉求：几百篇长文，右侧目录点标题直接跳到那篇；当前条件写进 URL，
 * 刷新/分享能复现同一屏。
 *
 * 这一卡演示**自己写插件**：ScrollAnchorPlugin 只监听 \`anchor:scrollToId\`，
 * 而页面侧拿不到 bus（ref 只透传 Core），所以补一个极小的桥接插件，
 * 把 DOM 自定义事件转成 bus 事件。也是 onMount 返回清理函数的标准写法。
 */
import React, { useRef, useState } from "react";
import {
  WaterfallCore,
  withPlugins,
  type WaterfallCoreRef,
  type WaterfallPlugin,
} from "vane-waterfall";
import {
  createA11yPlugin,
  createAutoColumnPlugin,
  createGapPlugin,
  createScrollAnchorPlugin,
  createTransitionPlugin,
  createURLSyncPlugin,
} from "vane-waterfall/custom-plugins";
import { makeCards, timeAgo, type SeedCard } from "../data/seed";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "longform-archive",
  title: "长文归档 · 锚点跳转",
  group: "内容",
  ref: { label: "个人博客归档页", url: "https://overreacted.io/" },
  pain: "几百篇长文要按年归档，目录点击要精确跳转，还要能分享到某一屏",
  plugs: [
    { fn: "createScrollAnchorPlugin", cfg: "getAnchorId: (item) => item.id", why: "监听 bus 上的 anchor:scrollToId，按 id 找到索引后 scrollToItem" },
    { fn: "createAnchorBridgePlugin", why: "本卡内联的自定义插件：把 window 上的 DOM 事件转成 bus 事件（页面拿不到 bus）", local: true },
    { fn: "createURLSyncPlugin", cfg: 'mode: "hash", keys: ["searchQuery"]', why: "把查询条件写进 URL，刷新可复现" },
    { fn: "createAutoColumnPlugin", cfg: "minColumnWidth: 260, maxColumns: 3", why: "长文卡偏宽，2–3 列合适" },
    { fn: "createGapPlugin", cfg: "columnGap: 16, rowGap: 16", why: "长文卡之间要留白" },
    { fn: "createTransitionPlugin", cfg: "duration: 240", why: "跳转前后的位置过渡" },
    { fn: "createA11yPlugin", cfg: 'containerLabel: "长文归档"', why: "补语义" },
  ],
  props: [
    "ref={ref}",
    "containerStyle={{ height: 420 }}",
    "renderItem={(item) => <DocCard item={item} />}",
    "onScroll={syncActive}",
  ],
  note:
    "锚点跳转的实际落点由 ScrollAnchorPlugin 调 context.scrollToItem 完成；插件里拿得到 context，页面只拿得到 ref —— 这就是桥接的原因。",
};

const DATA: SeedCard[] = makeCards({ count: 30, seed: 12101, heightRange: [150, 240] });

/**
 * 自定义插件：window.addEventListener('wf:anchor', …) → bus.emit('anchor:scrollToId')
 * 要点：onMount 返回的函数就是清理函数（旧版 withPlugins 从不执行它，会漏监听）。
 */
function createAnchorBridgePlugin<T = unknown>(): WaterfallPlugin<T> {
  return {
    name: "AnchorBridgePlugin",
    enabled: true,
    hooks: {
      onMount: (context) => {
        const handler = (event: Event) => {
          const id = (event as CustomEvent<{ id?: string }>).detail?.id;
          if (!id) return;
          context.bus.emit("anchor:scrollToId", { id });
        };
        window.addEventListener("wf:anchor", handler);
        return () => window.removeEventListener("wf:anchor", handler);
      },
    },
  };
}

const Waterfall = withPlugins<SeedCard>(WaterfallCore, [
  createScrollAnchorPlugin<SeedCard>({ getAnchorId: (item) => item.id }),
  createAnchorBridgePlugin<SeedCard>(),
  createURLSyncPlugin({ mode: "hash", keys: ["searchQuery"] }),
  createAutoColumnPlugin({ minColumnWidth: 260, maxColumns: 3 }),
  createGapPlugin({ columnGap: 16, rowGap: 16 }),
  createTransitionPlugin({ duration: 240 }),
  createA11yPlugin({ containerLabel: "长文归档", enableTabIndex: false }),
]);

function DocCard({ item, active }: { item: SeedCard; active?: boolean }) {
  return (
    <div className={\`wf-card is-doc\${active ? " is-active" : ""}\`} style={{ height: item.height }}>
      <div className="wf-doc-top">
        <span className="wf-doc-tag">{item.tag}</span>
        <span className="wf-doc-time">{timeAgo(item.minutesAgo)}</span>
      </div>
      <p className="wf-doc-title">{item.title}</p>
      <p className="wf-doc-meta">{item.author} · 约 {Math.max(3, Math.round(item.height / 12))} 分钟读完</p>
    </div>
  );
}

export default function LongformArchiveScenario() {
  const ref = useRef<WaterfallCoreRef>(null);
  const [activeId, setActiveId] = useState(DATA[0].id);

  const toc = DATA.slice(0, 8);

  return (
    <div className="scn-widget">
      <div className="scn-toc">
        {toc.map((item) => (
          <button
            key={item.id}
            type="button"
            className={activeId === item.id ? "is-on" : ""}
            onClick={() => {
              setActiveId(item.id);
              window.dispatchEvent(new CustomEvent("wf:anchor", { detail: { id: item.id } }));
            }}
          >
            {item.title}
          </button>
        ))}
      </div>

      <Waterfall
        ref={ref}
        items={DATA}
        containerStyle={{ height: 372 }}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <DocCard item={item} active={item.id === activeId} />}
      />
    </div>
  );
}
`,Hn=`/**
 * 13 · 大图墙 · 回收 / 防抖 / 热力
 *
 * 这一卡不是某个具体站点，而是「同一个瀑布流上三个性能/观测开关」的组合演示：
 *  · RecyclePlugin —— 离屏项设 visibility:hidden，减少绘制压力（DOM 还在）；
 *  · DebounceLayoutPlugin —— 拖拽窗口时把布局防抖拉长，避免一帧算好几次；
 *  · HeatmapAnalyticsPlugin —— 统计曝光/点击次数，顶栏显示汇总。
 *
 * 与 08 的区别：那边用 Core 自带的 virtualize（真卸载 DOM），这边是「不卸载、只隐藏」。
 * 两者不要同开 —— 见 meta.note。
 */
import React, { useState } from "react";
import { WaterfallCore, withPlugins } from "vane-waterfall";
import {
  createAutoColumnPlugin,
  createDebounceLayoutPlugin,
  createGapPlugin,
  createHeatmapAnalyticsPlugin,
  createRecyclePlugin,
} from "vane-waterfall/custom-plugins";
import { makeCards, type SeedCard } from "../data/seed";
import { FeedCard } from "../components/FeedCard";
import type { ScenarioMeta } from "./types";

export const meta: ScenarioMeta = {
  id: "recycle-perf",
  title: "大图墙 · 回收与防抖",
  group: "性能",
  ref: { label: "综合性能实验", url: "https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API" },
  pain: "中等数据量（几百项）时 DOM 不该丢，但离屏项不该继续花绘制成本",
  plugs: [
    { fn: "createRecyclePlugin", cfg: "poolSize: 16", why: "离屏项 visibility:hidden，DOM 保留 → 滚回来不用重建，也不触发图片重载" },
    { fn: "createDebounceLayoutPlugin", cfg: "delay: 140", why: "拖拽窗口时把布局防抖拉到 140ms，避免每帧都重算" },
    { fn: "createHeatmapAnalyticsPlugin", cfg: "showOverlay: true", why: "统计每项曝光/点击，顶栏汇总；验证 onItemEnterViewport 真的在触发" },
    { fn: "createAutoColumnPlugin", cfg: "minColumnWidth: 170, maxColumns: 4", why: "常规自适应列数" },
    { fn: "createGapPlugin", cfg: "columnGap: 12, rowGap: 12", why: "统一间距" },
  ],
  props: [
    "containerStyle={{ height: 420 }}",
    "renderItem={(item) => <Card item={item} />}",
    "onItemClick={(i, item) => track(item)}",
  ],
  note:
    "Recycle 与 Core 的 virtualize 互斥：一个改 visibility、一个直接卸载。选哪个看数据量——几百项用 Recycle，上千项用 virtualize。",
};

const DATA = makeCards({ count: 120, seed: 13101, heightRange: [150, 280] });

const Waterfall = withPlugins<SeedCard>(WaterfallCore, [
  createRecyclePlugin({ poolSize: 16 }),
  createDebounceLayoutPlugin({ delay: 140 }),
  createHeatmapAnalyticsPlugin({ showOverlay: true }),
  createAutoColumnPlugin({ minColumnWidth: 170, maxColumns: 4 }),
  createGapPlugin({ columnGap: 12, rowGap: 12 }),
]);

export default function RecyclePerfScenario() {
  const [items] = useState(DATA);
  return (
    <Waterfall
      items={items}
      containerStyle={{ height: 420 }}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <FeedCard card={item} variant="photo" />}
    />
  );
}
`,Fn=Object.assign({"./01-photo-feed.tsx":ye,"./02-social-note.tsx":Ce,"./03-commerce.tsx":Te,"./04-video-grid.tsx":Me,"./05-dashboard.tsx":$e,"./06-bookmark-wall.tsx":Ke,"./07-news-search.tsx":Ve,"./08-infinite-virtual.tsx":nn,"./09-grouped-wall.tsx":ln,"./10-portrait-reels.tsx":gn,"./11-kanban.tsx":yn,"./12-longform-archive.tsx":xn,"./13-recycle-perf.tsx":_n}),zn=Object.assign({"./01-photo-feed.tsx":Gn,"./02-social-note.tsx":In,"./03-commerce.tsx":Rn,"./04-video-grid.tsx":Mn,"./05-dashboard.tsx":jn,"./06-bookmark-wall.tsx":Nn,"./07-news-search.tsx":Wn,"./08-infinite-virtual.tsx":Ln,"./09-grouped-wall.tsx":En,"./10-portrait-reels.tsx":On,"./11-kanban.tsx":Dn,"./12-longform-archive.tsx":$n,"./13-recycle-perf.tsx":Hn}),Bn=e=>e.replace(/^\.\//,""),J=Object.entries(Fn).map(([e,t])=>{const r=Bn(e);return{meta:t.meta,Component:t.default,file:r,source:zn[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),qn=J.reduce((e,t)=>(e.includes(t.meta.group)||e.push(t.meta.group),e),[]),Un=Array.from(new Set(J.flatMap(e=>e.meta.plugs.map(t=>t.fn)))).sort();export{qn as G,J as S,Un as U};
