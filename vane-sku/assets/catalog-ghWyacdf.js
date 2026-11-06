import{R as i,V as l,j as t,A as u,c as s,a as P,b as d,d as m,e as p,f,g as h,h as y,i as b,k as v,o as _,p as T}from"./index-Cy703kYk.js";const c=new Set,w={id:"full-panel",title:"全功能商品规格面板",group:"商品详情",ref:{label:"淘宝商品页",url:"https://item.taobao.com"},pain:"价格 / 库存 / 限购 / 数量 / 货号 / 清空要一起出现，还得键盘可逛",plugs:[{fn:"createPriceRangePlugin",why:"未选全时先给 ¥199–¥269 区间，选了颜色后随选择收窄"},{fn:"createPriceLinkPlugin",cfg:'discountText: "限时8折"',why:"命中变体显单价 + 原价删除线 + 折扣角标"},{fn:"createStockStatusPlugin",cfg:"lowStockThreshold: 5",why:"库存读数：现货 / 仅剩 N 件 / 缺货"},{fn:"createQuotaPlugin",cfg:"purchasedCount: 1",why:"限购提示条 + canPurchase 门控（red-s 限购 2、已购 1）"},{fn:"createQuantityPlugin",why:"数量步进：上限取库存与限购的较小值"},{fn:"createSkuCodePlugin",why:"货号展示，客服对单 / 用户报修用"},{fn:"createResetBarPlugin",why:"选了一半想重来，一键清空"},{fn:"createKeyboardNavPlugin",why:"方向键在规格间漫游，自动跳过被推导置灰的死路选项"},{fn:"createImageLinkPlugin",why:"规格切主图：只发事件，主图由外层决定怎么渲染"}],props:['defaultSelection={{ 颜色: "red", 尺码: "s" }}'],note:"价格区只有一块：PriceRange 与 PriceLink 都走 overlay 段，命中变体后区间退场、把位置让给单价。主图联动是纯事件出口（onImageChange / sku:image 总线），面板本身不渲染图。"},x=s([P(),d({discountText:"限时8折"}),m({lowStockThreshold:5}),p({purchasedCount:1}),f(),h(),y(),b(),v({onImageChange:e=>c.forEach(n=>n(e))})]);function L(){var r;const[e,n]=i.useState(((r=l[0])==null?void 0:r.image)??""),[a,o]=i.useState([]);return i.useEffect(()=>(c.add(n),()=>{c.delete(n)}),[]),t.jsxs("div",{className:"sku-card",style:{maxWidth:460,margin:"0 auto",background:"#fff",padding:16,borderRadius:3,color:"#1f2328"},children:[t.jsx("img",{src:e,alt:"变体主图",style:{width:128,height:128,objectFit:"cover",borderRadius:3,display:"block",marginBottom:10,background:"#f2f3f5"}}),t.jsx(x,{attributes:u,variants:l,defaultSelection:{颜色:"red",尺码:"s"},onChange:(J,g)=>o(k=>[...k.slice(-3),`${g?g.sku:"未命中"} · ${new Date().toLocaleTimeString()}`])}),t.jsx("p",{style:{margin:"10px 0 0",fontSize:11.5,color:"#57606a"},children:a.length?`最近命中：${a[a.length-1]}`:"试试选「蓝」—— 没有 blue-l 变体，L 会被禁用推导置灰。"})]})}const R=Object.freeze(Object.defineProperty({__proto__:null,default:L,meta:w},Symbol.toStringTag,{value:"Module"})),A=[{name:"颜色",options:[{id:"neon",label:"荧光橙"},{id:"black",label:"曜石黑"}]},{name:"尺码",options:[{id:"s",label:"S"},{id:"m",label:"M"},{id:"l",label:"L"}]}],I=[{sku:"FLASH-NEON-S",attrValues:{颜色:"neon",尺码:"s"},price:89,originalPrice:199,stock:3,quota:2},{sku:"FLASH-NEON-M",attrValues:{颜色:"neon",尺码:"m"},price:89,originalPrice:199,stock:2,quota:2},{sku:"FLASH-BLACK-M",attrValues:{颜色:"black",尺码:"m"},price:99,originalPrice:219,stock:4,quota:2},{sku:"FLASH-BLACK-L",attrValues:{颜色:"black",尺码:"l"},price:99,originalPrice:219,stock:1,quota:2}],N={id:"flash-sale",title:"限时抢购面板",group:"营销活动",ref:{label:"聚划算",url:"https://ju.taobao.com"},pain:"限购 2 已购 1、库存见底、折后价同时生效",plugs:[{fn:"createPriceLinkPlugin",cfg:'discountText: "抢购价"',why:"折后价 + 原价删除线，折扣角标换成抢购语境"},{fn:"createStockStatusPlugin",cfg:"lowStockThreshold: 3",why:"库存见底：仅剩 1–3 件的高亮读数就是催付文案"},{fn:"createQuotaPlugin",cfg:"purchasedCount: 1",why:"限购 2 已购 1：提示条 + canPurchase 门控"},{fn:"createQuantityPlugin",why:"数量上限取库存与限购较小值，别让用户凑满一车才发现在超限"}],props:['defaultSelection={{ 颜色: "neon", 尺码: "m" }}'],note:"荧光橙 / M：¥89 划掉 ¥199，库存 2 触发「仅剩 2 件」，限购 2 已购 1，数量步进上限被收口到 2。"},C=s([d({discountText:"抢购价"}),m({lowStockThreshold:3}),p({purchasedCount:1}),f()]);function j(){const[e,n]=i.useState([]);return t.jsxs("div",{className:"sku-card",style:{maxWidth:420,margin:"0 auto",background:"#fff",padding:16,borderRadius:3,color:"#1f2328"},children:[t.jsx(C,{attributes:A,variants:I,defaultSelection:{颜色:"neon",尺码:"m"},onChange:(a,o)=>n(r=>[...r.slice(-3),`${o?`${o.sku} · 剩${o.stock}件`:"未命中"} · ${new Date().toLocaleTimeString()}`])}),t.jsx("p",{style:{margin:"10px 0 0",fontSize:11.5,color:"#57606a"},children:e.length?`最近命中：${e[e.length-1]}`:"数量步进的上限 = min(库存, 限购剩余) —— 这是抢购页最要紧的一道闸。"})]})}const U=Object.freeze(Object.defineProperty({__proto__:null,default:j,meta:N},Symbol.toStringTag,{value:"Module"})),B={id:"share-replay",title:"分享还原选择",group:"状态恢复",ref:{label:"拼多多",url:"https://mobile.yangkeduo.com"},pain:"分享出去的链接原样还原选择，本机还记住上次",plugs:[{fn:"createUrlSyncPlugin",why:"选择 ↔ 查询串双向同步：分享链接即还原，清空自动删参"},{fn:"createStatePersistencePlugin",why:"本机记忆：localStorage 存上次选择，回访接着选"}],props:['defaultSelection={{ 颜色: "red", 尺码: "s" }}'],note:"两个插件都不渲染 UI、互不感知，靠内核 state 汇流。点「重挂载还原」= 模拟对方打开你分享的链接 + 你自己回访。"},M=s([_(),T()]);function Q(){const[e,n]=i.useState(0),[a,o]=i.useState(()=>typeof window>"u"?"":window.location.search);return t.jsxs("div",{className:"sku-card",style:{maxWidth:420,margin:"0 auto",background:"#fff",padding:16,borderRadius:3,color:"#1f2328"},children:[t.jsx(M,{attributes:u,variants:l,defaultSelection:{颜色:"red",尺码:"s"},onChange:()=>{window.setTimeout(()=>o(window.location.search),0)}},e),t.jsxs("div",{style:{marginTop:10,display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",fontSize:11.5,color:"#57606a"},children:[t.jsx("button",{type:"button",onClick:()=>n(r=>r+1),style:{padding:"4px 10px",fontSize:12,borderRadius:4,border:"1px solid #d0d4da",background:"#fff",color:"#1f2328",cursor:"pointer"},children:"重挂载还原"}),t.jsxs("code",{style:{fontFamily:"var(--ff-mono)",wordBreak:"break-all"},children:["location.search = ",a||"(空)"]})]}),t.jsx("p",{style:{margin:"8px 0 0",fontSize:11.5,color:"#57606a"},children:"改一下规格：地址栏出现 ?sku_…；把这段链接复制给别人，他打开就是你选的组合。"})]})}const F=Object.freeze(Object.defineProperty({__proto__:null,default:Q,meta:B},Symbol.toStringTag,{value:"Module"})),V={id:"minimal",title:"卡片内轻量选规格",group:"轻量嵌入",ref:{label:"vane-card",url:"https://github.com/frankvane/vane-components"},pain:"卡片里只需要选规格，不要一堆浮层花活",plugs:[],props:[],note:"对标 vane-card 的 SKUPlugin（卡片内轻量选规格）：那边每个选项永远可点、错配只是不命中、没有限购校验；vane-sku 裸内核 = 规格按钮组 + 选中摘要，但禁用推导仍在（选「蓝」后 L 依旧置灰）。要价格 / 限购 / 数量这些长尾，这边装插件即可，不用换引擎。"},$=s([]);function E(){return t.jsx("div",{className:"sku-card",style:{maxWidth:300,margin:"0 auto",background:"#fff",padding:14,borderRadius:3,color:"#1f2328"},children:t.jsx($,{attributes:u,variants:l})})}const O=Object.freeze(Object.defineProperty({__proto__:null,default:E,meta:V},Symbol.toStringTag,{value:"Module"})),z=`import React from "react";
import { createSkuSelector } from "vane-sku";
import { createImageLinkPlugin } from "vane-sku/custom-plugins/ImageLinkPlugin";
import { createKeyboardNavPlugin } from "vane-sku/custom-plugins/KeyboardNavPlugin";
import { createPriceLinkPlugin } from "vane-sku/custom-plugins/PriceLinkPlugin";
import { createPriceRangePlugin } from "vane-sku/custom-plugins/PriceRangePlugin";
import { createQuantityPlugin } from "vane-sku/custom-plugins/QuantityPlugin";
import { createQuotaPlugin } from "vane-sku/custom-plugins/QuotaPlugin";
import { createResetBarPlugin } from "vane-sku/custom-plugins/ResetBarPlugin";
import { createSkuCodePlugin } from "vane-sku/custom-plugins/SkuCodePlugin";
import { createStockStatusPlugin } from "vane-sku/custom-plugins/StockStatusPlugin";
import type { ScenarioMeta } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

/**
 * 主图桥：模块级插件实例拿不到组件 state（装配发生在组件外），
 * 用一个极小的发布订阅把 onImageChange 的事件送进正在渲染的组件。
 * 真实项目里这层通常是 gallery 自己的 store —— 这里只为演示「事件出口」怎么接。
 */
const imageListeners = new Set<(img: string) => void>();

/**
 * 01 · 全功能商品规格面板（对标淘宝商品页）
 *
 * 9 个插件按 priority 串联：价格区（区间 → 命中显单价）/ 库存读数 / 限购门控 /
 * 数量步进 / 货号 / 清空重选 / 键盘漫游 / 规格切主图。
 * 内核只渲染规格按钮组（含禁用推导）与选中摘要，其余全是插件。
 */
export const meta: ScenarioMeta = {
  id: "full-panel",
  title: "全功能商品规格面板",
  group: "商品详情",
  ref: { label: "淘宝商品页", url: "https://item.taobao.com" },
  pain: "价格 / 库存 / 限购 / 数量 / 货号 / 清空要一起出现，还得键盘可逛",
  plugs: [
    { fn: "createPriceRangePlugin", why: "未选全时先给 ¥199–¥269 区间，选了颜色后随选择收窄" },
    { fn: "createPriceLinkPlugin", cfg: 'discountText: "限时8折"', why: "命中变体显单价 + 原价删除线 + 折扣角标" },
    { fn: "createStockStatusPlugin", cfg: "lowStockThreshold: 5", why: "库存读数：现货 / 仅剩 N 件 / 缺货" },
    { fn: "createQuotaPlugin", cfg: "purchasedCount: 1", why: "限购提示条 + canPurchase 门控（red-s 限购 2、已购 1）" },
    { fn: "createQuantityPlugin", why: "数量步进：上限取库存与限购的较小值" },
    { fn: "createSkuCodePlugin", why: "货号展示，客服对单 / 用户报修用" },
    { fn: "createResetBarPlugin", why: "选了一半想重来，一键清空" },
    { fn: "createKeyboardNavPlugin", why: "方向键在规格间漫游，自动跳过被推导置灰的死路选项" },
    { fn: "createImageLinkPlugin", why: "规格切主图：只发事件，主图由外层决定怎么渲染" },
  ],
  props: ['defaultSelection={{ 颜色: "red", 尺码: "s" }}'],
  note: "价格区只有一块：PriceRange 与 PriceLink 都走 overlay 段，命中变体后区间退场、把位置让给单价。主图联动是纯事件出口（onImageChange / sku:image 总线），面板本身不渲染图。",
};

// 组件类型必须在模块级创建（渲染函数里每次调用都会造出新类型 → 重挂载 → 选择态丢失）
const Sku = createSkuSelector([
  createPriceRangePlugin(),
  createPriceLinkPlugin({ discountText: "限时8折" }),
  createStockStatusPlugin({ lowStockThreshold: 5 }),
  createQuotaPlugin({ purchasedCount: 1 }),
  createQuantityPlugin(),
  createSkuCodePlugin(),
  createResetBarPlugin(),
  createKeyboardNavPlugin(),
  createImageLinkPlugin({ onImageChange: (img) => imageListeners.forEach((l) => l(img)) }),
]);

export default function FullPanelScenario() {
  const [image, setImage] = React.useState(VARIANTS[0]?.image ?? "");
  const [log, setLog] = React.useState<string[]>([]);

  React.useEffect(() => {
    imageListeners.add(setImage);
    return () => {
      imageListeners.delete(setImage);
    };
  }, []);

  return (
    <div
      className="sku-card"
      style={{
        maxWidth: 460,
        margin: "0 auto",
        background: "#fff",
        padding: 16,
        borderRadius: 3,
        color: "#1f2328",
      }}
    >
      <img
        src={image}
        alt="变体主图"
        style={{
          width: 128,
          height: 128,
          objectFit: "cover",
          borderRadius: 3,
          display: "block",
          marginBottom: 10,
          background: "#f2f3f5",
        }}
      />
      <Sku
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        defaultSelection={{ 颜色: "red", 尺码: "s" }}
        onChange={(_sel, v) =>
          setLog((l) => [
            ...l.slice(-3),
            \`\${v ? v.sku : "未命中"} · \${new Date().toLocaleTimeString()}\`,
          ])
        }
      />
      <p style={{ margin: "10px 0 0", fontSize: 11.5, color: "#57606a" }}>
        {log.length ? \`最近命中：\${log[log.length - 1]}\` : "试试选「蓝」—— 没有 blue-l 变体，L 会被禁用推导置灰。"}
      </p>
    </div>
  );
}
`,H=`import React from "react";
import { createSkuSelector } from "vane-sku";
import { createPriceLinkPlugin } from "vane-sku/custom-plugins/PriceLinkPlugin";
import { createQuantityPlugin } from "vane-sku/custom-plugins/QuantityPlugin";
import { createQuotaPlugin } from "vane-sku/custom-plugins/QuotaPlugin";
import { createStockStatusPlugin } from "vane-sku/custom-plugins/StockStatusPlugin";
import type { SkuAttribute, SkuVariant } from "vane-sku";
import type { ScenarioMeta } from "./types";

/**
 * 抢购专供矩阵：库存见底 + 全员限购 2。
 * 刻意缺 neon-l（售罄下架）：选荧光橙后 L 置灰，避免「付不了款的死单」。
 */
const FLASH_ATTRIBUTES: SkuAttribute[] = [
  {
    name: "颜色",
    options: [
      { id: "neon", label: "荧光橙" },
      { id: "black", label: "曜石黑" },
    ],
  },
  {
    name: "尺码",
    options: [
      { id: "s", label: "S" },
      { id: "m", label: "M" },
      { id: "l", label: "L" },
    ],
  },
];

const FLASH_VARIANTS: SkuVariant[] = [
  { sku: "FLASH-NEON-S", attrValues: { 颜色: "neon", 尺码: "s" }, price: 89, originalPrice: 199, stock: 3, quota: 2 },
  { sku: "FLASH-NEON-M", attrValues: { 颜色: "neon", 尺码: "m" }, price: 89, originalPrice: 199, stock: 2, quota: 2 },
  // neon-l 售罄下架 → 选荧光橙后 L 置灰
  { sku: "FLASH-BLACK-M", attrValues: { 颜色: "black", 尺码: "m" }, price: 99, originalPrice: 219, stock: 4, quota: 2 },
  { sku: "FLASH-BLACK-L", attrValues: { 颜色: "black", 尺码: "l" }, price: 99, originalPrice: 219, stock: 1, quota: 2 },
];

/**
 * 02 · 限时抢购面板（对标聚划算）
 *
 * 抢购的三件事同时生效：折后价（PriceLink 原价删除线）、库存见底（StockStatus
 * 低库存阈值制造紧迫感）、限购校验（Quota 已购 1 / 限 2 + Quantity 上限收口）。
 * 只装这 4 个 —— 抢购页不需要货号与键盘漫游，就不付那份代价。
 */
export const meta: ScenarioMeta = {
  id: "flash-sale",
  title: "限时抢购面板",
  group: "营销活动",
  ref: { label: "聚划算", url: "https://ju.taobao.com" },
  pain: "限购 2 已购 1、库存见底、折后价同时生效",
  plugs: [
    { fn: "createPriceLinkPlugin", cfg: 'discountText: "抢购价"', why: "折后价 + 原价删除线，折扣角标换成抢购语境" },
    { fn: "createStockStatusPlugin", cfg: "lowStockThreshold: 3", why: "库存见底：仅剩 1–3 件的高亮读数就是催付文案" },
    { fn: "createQuotaPlugin", cfg: "purchasedCount: 1", why: "限购 2 已购 1：提示条 + canPurchase 门控" },
    { fn: "createQuantityPlugin", why: "数量上限取库存与限购较小值，别让用户凑满一车才发现在超限" },
  ],
  props: ['defaultSelection={{ 颜色: "neon", 尺码: "m" }}'],
  note: "荧光橙 / M：¥89 划掉 ¥199，库存 2 触发「仅剩 2 件」，限购 2 已购 1，数量步进上限被收口到 2。",
};

// 组件类型必须在模块级创建（渲染函数里每次调用都会造出新类型 → 重挂载 → 选择态丢失）
const Sku = createSkuSelector([
  createPriceLinkPlugin({ discountText: "抢购价" }),
  createStockStatusPlugin({ lowStockThreshold: 3 }),
  createQuotaPlugin({ purchasedCount: 1 }),
  createQuantityPlugin(),
]);

export default function FlashSaleScenario() {
  const [log, setLog] = React.useState<string[]>([]);

  return (
    <div
      className="sku-card"
      style={{
        maxWidth: 420,
        margin: "0 auto",
        background: "#fff",
        padding: 16,
        borderRadius: 3,
        color: "#1f2328",
      }}
    >
      <Sku
        attributes={FLASH_ATTRIBUTES}
        variants={FLASH_VARIANTS}
        defaultSelection={{ 颜色: "neon", 尺码: "m" }}
        onChange={(_sel, v) =>
          setLog((l) => [
            ...l.slice(-3),
            \`\${v ? \`\${v.sku} · 剩\${v.stock}件\` : "未命中"} · \${new Date().toLocaleTimeString()}\`,
          ])
        }
      />
      <p style={{ margin: "10px 0 0", fontSize: 11.5, color: "#57606a" }}>
        {log.length ? \`最近命中：\${log[log.length - 1]}\` : "数量步进的上限 = min(库存, 限购剩余) —— 这是抢购页最要紧的一道闸。"}
      </p>
    </div>
  );
}
`,K=`import React from "react";
import { createSkuSelector } from "vane-sku";
import { createStatePersistencePlugin } from "vane-sku/custom-plugins/StatePersistencePlugin";
import { createUrlSyncPlugin } from "vane-sku/custom-plugins/UrlSyncPlugin";
import type { ScenarioMeta } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

/**
 * 03 · 分享还原选择（对标拼多多的分享链接）
 *
 * 两条恢复通道同时在场：
 *  - UrlSync —— 选择写进查询串（?sku_颜色=red），把链接发出去，
 *    对方打开就是你在选的规格；
 *  - StatePersistence —— 本机 localStorage 记住上次的选择，
 *    刷新 / 回访接着选。
 * 两者都不渲染 UI，页面演示用的「重挂载还原」按钮就是模拟一次回访。
 */
export const meta: ScenarioMeta = {
  id: "share-replay",
  title: "分享还原选择",
  group: "状态恢复",
  ref: { label: "拼多多", url: "https://mobile.yangkeduo.com" },
  pain: "分享出去的链接原样还原选择，本机还记住上次",
  plugs: [
    { fn: "createUrlSyncPlugin", why: "选择 ↔ 查询串双向同步：分享链接即还原，清空自动删参" },
    { fn: "createStatePersistencePlugin", why: "本机记忆：localStorage 存上次选择，回访接着选" },
  ],
  props: ['defaultSelection={{ 颜色: "red", 尺码: "s" }}'],
  note: "两个插件都不渲染 UI、互不感知，靠内核 state 汇流。点「重挂载还原」= 模拟对方打开你分享的链接 + 你自己回访。",
};

// 组件类型必须在模块级创建（渲染函数里每次调用都会造出新类型 → 重挂载 → 选择态丢失）
const Sku = createSkuSelector([
  createUrlSyncPlugin(),
  createStatePersistencePlugin(),
]);

export default function ShareReplayScenario() {
  const [nonce, setNonce] = React.useState(0);
  const [search, setSearch] = React.useState(() =>
    typeof window === "undefined" ? "" : window.location.search
  );

  return (
    <div
      className="sku-card"
      style={{
        maxWidth: 420,
        margin: "0 auto",
        background: "#fff",
        padding: 16,
        borderRadius: 3,
        color: "#1f2328",
      }}
    >
      {/* key 变化 → 整棵重挂载 → UrlSync / StatePersistence 的 onMount 重新走一遍恢复流程 */}
      <Sku
        key={nonce}
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        defaultSelection={{ 颜色: "red", 尺码: "s" }}
        onChange={() => {
          // UrlSync 用 replaceState 写地址栏，等它落盘后再读（只读展示，不改参数）
          window.setTimeout(() => setSearch(window.location.search), 0);
        }}
      />
      <div
        style={{
          marginTop: 10,
          display: "flex",
          gap: 10,
          alignItems: "center",
          flexWrap: "wrap",
          fontSize: 11.5,
          color: "#57606a",
        }}
      >
        <button
          type="button"
          onClick={() => setNonce((n) => n + 1)}
          style={{
            padding: "4px 10px",
            fontSize: 12,
            borderRadius: 4,
            border: "1px solid #d0d4da",
            background: "#fff",
            color: "#1f2328",
            cursor: "pointer",
          }}
        >
          重挂载还原
        </button>
        <code style={{ fontFamily: "var(--ff-mono)", wordBreak: "break-all" }}>
          location.search = {search || "(空)"}
        </code>
      </div>
      <p style={{ margin: "8px 0 0", fontSize: 11.5, color: "#57606a" }}>
        改一下规格：地址栏出现 ?sku_…；把这段链接复制给别人，他打开就是你选的组合。
      </p>
    </div>
  );
}
`,W=`import React from "react";
import { createSkuSelector } from "vane-sku";
import type { ScenarioMeta } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

/**
 * 04 · 卡片内轻量选规格（对标 vane-card 的 SKUPlugin）
 *
 * 只装内核：规格按钮组（含禁用推导）+ 选中摘要，一件长尾都不带。
 * 演示「插件式引擎」的减法 —— 不需要的价格浮层 / 限购 / 数量完全不付代价。
 */
export const meta: ScenarioMeta = {
  id: "minimal",
  title: "卡片内轻量选规格",
  group: "轻量嵌入",
  ref: { label: "vane-card", url: "https://github.com/frankvane/vane-components" },
  pain: "卡片里只需要选规格，不要一堆浮层花活",
  plugs: [],
  props: [],
  note: "对标 vane-card 的 SKUPlugin（卡片内轻量选规格）：那边每个选项永远可点、错配只是不命中、没有限购校验；vane-sku 裸内核 = 规格按钮组 + 选中摘要，但禁用推导仍在（选「蓝」后 L 依旧置灰）。要价格 / 限购 / 数量这些长尾，这边装插件即可，不用换引擎。",
};

// 这一版只用内核：组合矩阵 + 禁用推导 + 规格按钮组，0 个插件
const Sku = createSkuSelector([]);

export default function MinimalSkuScenario() {
  return (
    <div
      className="sku-card"
      style={{
        maxWidth: 300,
        margin: "0 auto",
        background: "#fff",
        padding: 14,
        borderRadius: 3,
        color: "#1f2328",
      }}
    >
      <Sku attributes={ATTRIBUTES} variants={VARIANTS} />
    </div>
  );
}
`,q=Object.assign({"./01-full-panel.tsx":R,"./02-flash-sale.tsx":U,"./03-share-replay.tsx":F,"./04-minimal.tsx":O}),D=Object.assign({"./01-full-panel.tsx":z,"./02-flash-sale.tsx":H,"./03-share-replay.tsx":K,"./04-minimal.tsx":W}),G=e=>e.replace(/^\.\//,""),S=Object.entries(q).map(([e,n])=>{const a=G(e);return{meta:n.meta,Component:n.default,file:a,source:D[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),Y=S.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),Z=Array.from(new Set(S.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort();export{Y as G,S,Z as U};
