import{P as a,D as n,j as e,L as i,V as d,A as o,C as u,c as h,a as x,b as m,d as j,e as p,f as g,g as S,h as k,i as v,k as P}from"./index-BXeMgR_B.js";import{S as r}from"./catalog-CtslNy_o.js";const N=h([x(),m({discountText:"限时8折"}),j({lowStockThreshold:5}),p({purchasedCount:1}),g(),S(),k(),v(),P()]),b=`import { createSkuSelector } from "vane-sku";
import { createPriceLinkPlugin } from "vane-sku/custom-plugins/PriceLinkPlugin";
import { createPriceRangePlugin } from "vane-sku/custom-plugins/PriceRangePlugin";
import { createQuotaPlugin } from "vane-sku/custom-plugins/QuotaPlugin";
import { createStockStatusPlugin } from "vane-sku/custom-plugins/StockStatusPlugin";
import type { SkuAttribute, SkuVariant } from "vane-sku";

// 1. 装配：一个组件类型，模块顶层调一次
const Sku = createSkuSelector([
  createPriceRangePlugin(),            // 未选全显区间
  createPriceLinkPlugin(),             // 命中显单价
  createStockStatusPlugin(),           // 库存状态
  createQuotaPlugin({ purchasedCount: 1 }),  // 限购校验
]);

// 2. 使用：和普通组件一样
export function BuyPanel({
  attributes,
  variants,
}: {
  attributes: SkuAttribute[];
  variants: SkuVariant[];
}) {
  return (
    <Sku
      attributes={attributes}
      variants={variants}
      defaultSelection={{ 颜色: "red", 尺码: "s" }}
    />
  );
}`,f=[["内核只做矩阵与推导","组合矩阵 + 禁用推导内置在内核：候选选项临时代入选择，查是否存在匹配变体，不存在即置灰"],["能力都是插件","12 个官方插件各管一块（价格 / 库存 / 限购 / 数量 / 货号 / 键盘…），不想付的代价不装"],["三插槽零改内核","插件走 vane-plugin-core 现有三槽映射（header / overlay / footer），内核保持 0.1.0 不变"],["键盘可达","方向键在规格间漫游，自动跳过被禁用推导置灰的死路选项"],["插件可单测","12 个插件都能在 happy-dom 里直接调钩子断言，不依赖浏览器"],["深层子路径不进根入口","官方插件走 vane-sku/custom-plugins/<Name>，根入口只含内核与装配器（≤6KB gzip）"],["纯函数矩阵可单测","buildAvailability / matchVariant / isSelectionComplete 从根入口导出，组合逻辑不上 DOM 就能测"]],y=[["装配一次","createSkuSelector 放模块顶层（纯配置）或 useMemo（工厂要读闭包）。每次渲染都调会造出新组件类型，React 直接卸载重建，用户刚选的规格会被清空。"],["一插件一职责","价格区间 / 价格联动 / 库存 / 限购 / 数量 / 货号 / 清空 / 键盘 / 主图 / 埋点 / URL / 本机记忆，12 个插件按 priority 串联，互不覆盖。"],["子路径不进根入口","官方插件走 vane-sku/custom-plugins/<Name>，根入口只含 Core + 装配器 + 矩阵纯函数（实测 6.08KB gzip）。"]];function C(){const c=[{k:`${a.length}`,v:"领域插件",s:`${a.length} 块 · 按 priority 串联`},{k:`${r.length}`,v:"组合场景",s:"每卡两份可复制源码"},{k:`${n.length}`,v:"逐项示例",s:"一插件一页 · 参数可拖"},{k:"3",v:"内核纯函数",s:"矩阵/匹配/完整性"}];return e.jsxs("div",{children:[e.jsxs("div",{className:"masthead",children:[e.jsx("b",{children:"specimen № 04"}),e.jsx("s",{"aria-hidden":!0}),e.jsx("span",{children:"sku · plugin-composed"}),e.jsx("s",{"aria-hidden":!0}),e.jsxs("span",{children:[a.length," plugins / ",r.length," plates"]})]}),e.jsxs("section",{className:"hero",children:[e.jsxs("h1",{children:["规格选择很简单，",e.jsx("em",{children:"难的是用户点了才发现没货。"})]}),e.jsxs("div",{className:"hero-copy",children:[e.jsxs("p",{className:"lede",children:["组合矩阵与",e.jsx("b",{children:"禁用推导"}),"内置在内核：选了「蓝」之后，所有没有蓝色变体的尺码自动置灰。 价格联动 / 限购校验 / 数量步进 / 键盘漫游这些长尾能力做成",e.jsxs("b",{children:[a.length," 个按需插件"]}),"，用几个装几个。"]}),e.jsx("ul",{className:"feature-list",children:f.map(([s,t],l)=>e.jsxs("li",{children:[e.jsx("em",{"aria-hidden":!0,children:String(l+1).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("b",{children:s}),e.jsx("span",{children:t})]})]},s))}),e.jsxs("p",{className:"hero-links",children:[e.jsx(i,{to:"/demo/disable",children:"从「禁用推导」开始"}),e.jsxs(i,{to:"/scenarios",children:["看 ",r.length," 个真实版式"]})]})]}),e.jsxs("figure",{className:"plate hero-demo",children:[e.jsxs("figcaption",{className:"plate-cap",children:[e.jsx("b",{children:"plate 00"}),e.jsx("span",{children:"9 plugins · composed"}),e.jsx("em",{children:"live"})]}),e.jsx("div",{className:"plate-ruler","aria-hidden":!0}),e.jsx("div",{className:"plate-body",children:e.jsx(N,{attributes:o,variants:d,defaultSelection:{颜色:"red",尺码:"s"},containerClassName:"sku-card",containerStyle:{maxWidth:460,margin:"0 auto",background:"#fff",padding:16,borderRadius:3}})})]})]}),e.jsx("section",{className:"ledger","aria-label":"项目规模",children:c.map(s=>e.jsxs("div",{children:[e.jsx("b",{children:s.k}),e.jsx("span",{children:s.v}),e.jsx("em",{children:s.s})]},s.v))}),e.jsxs("section",{className:"two-col",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{children:"五分钟上手"}),e.jsx("code",{children:"2 steps"})]}),e.jsx("p",{children:"两步：装配成组件类型，然后当普通组件用。所有长尾行为都来自插件， 内核的 props 只有数据与回调那几个（attributes / variants / defaultSelection / onChange）。"}),e.jsx("ul",{className:"notes",children:y.map(([s,t],l)=>e.jsxs("li",{children:[e.jsx("em",{"aria-hidden":!0,children:String(l+1).padStart(2,"0")}),e.jsxs("span",{children:[e.jsx("b",{children:s})," —— ",t]})]},s))}),e.jsxs("p",{style:{marginTop:14},children:["想逐个插件看效果，走"," ",e.jsx(i,{to:`/demo/${n[0].meta.slug}`,children:"逐项示例"}),"（",n.length," 页：一插件一页，带参数控件与随参数变化的装配代码）。"]})]}),e.jsx(u,{code:b,title:"buy-panel.tsx",collapseAfter:0,maxHeight:520})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{children:"目录"}),e.jsx("code",{children:"contents"})]}),e.jsxs("div",{className:"index-list",children:[e.jsxs(i,{className:"index-row",to:"/plugins",children:[e.jsx("em",{children:"02"}),e.jsxs("span",{children:[e.jsx("strong",{children:"插件工坊"}),e.jsxs("span",{children:["勾选 ",a.length," 个插件，实时看效果并生成装配代码"]})]}),e.jsx("i",{"aria-hidden":!0,children:"→"})]}),e.jsxs(i,{className:"index-row",to:"/scenarios",children:[e.jsx("em",{children:"03"}),e.jsxs("span",{children:[e.jsx("strong",{children:"场景示例"}),e.jsxs("span",{children:[r.length," 个真实版式（商品详情 / 营销活动 / 状态恢复 / 轻量嵌入），每卡带可复制的完整源码"]})]}),e.jsx("i",{"aria-hidden":!0,children:"→"})]}),e.jsxs(i,{className:"index-row",to:`/demo/${n[0].meta.slug}`,children:[e.jsx("em",{children:"04"}),e.jsxs("span",{children:[e.jsx("strong",{children:"逐项示例"}),e.jsxs("span",{children:[n.length," 页：一插件一页，带参数控件与随参数变化的装配代码"]})]}),e.jsx("i",{"aria-hidden":!0,children:"→"})]})]})]})]})}export{C as HomePage};
