import{r as n,j as e,e as r,u as t,h as o,R as m,i as d}from"./index-UJ4-lIJg.js";const g=({combo:a})=>{const[s,c]=n.useState(!1);return e.jsxs("section",{className:"combo-panel",children:[e.jsx("h3",{className:"section-title",children:"组合构成"}),e.jsx("p",{className:"combo-desc",children:a.description}),e.jsx("ul",{className:"combo-plugins",children:a.plugins.map((l,i)=>e.jsxs("li",{className:"combo-plugin",children:[e.jsx("span",{className:"combo-plugin-name",children:l.name}),e.jsx("span",{className:"combo-plugin-role",children:l.role})]},i))}),e.jsx("div",{className:"example-actions",children:e.jsx("button",{type:"button",className:"example-toggle",onClick:()=>c(l=>!l),children:s?"隐藏源码":"查看源码"})}),s&&e.jsx("div",{className:"example-source",children:e.jsx(r,{code:a.code})})]})},p=d("combo"),u=({id:a})=>{const s=o(a);if(!s||s.meta.group!=="combo")return e.jsxs("div",{className:"page",children:["未找到组合示例：",a]});const c=s.Stage,l={id:s.meta.slug,title:s.meta.title,description:s.meta.description??"",component:"",plugins:s.meta.plugins??[],code:s.meta.code??""};return e.jsxs("div",{className:"page combo-detail",children:[e.jsx("h1",{className:"sr-only",children:l.title}),e.jsx(m.Suspense,{fallback:e.jsx("div",{className:"loading",children:"加载中…"}),children:e.jsx(c,{})}),e.jsx(g,{combo:l},l.id)]})},h=()=>{const{id:a}=t();return a?e.jsx(u,{id:a}):e.jsxs("div",{className:"page",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:"组合示例"}),e.jsx("p",{className:"page-desc",children:"多个插件协同的真实业务组合，展示端到端能力。"})]}),e.jsx("div",{className:"index-grid",children:p.map(s=>e.jsxs("a",{href:`#/combo/${s.meta.slug}`,className:"chip chip-lg",children:[s.meta.title,e.jsx("span",{className:"chip-desc",children:s.meta.description})]},s.meta.slug))}),e.jsx("h4",{className:"block-title",children:"组合示例源码（以错误韧性为例）"}),e.jsx(r,{code:`// 组合示例：错误韧性
import {
  LazyLoadImageCore,
  createErrorOverlayPlugin,
  createErrorBadgePlugin,
  createFallbackImagePlugin,
  createRetryOnErrorPlugin,
  createEventLoggerPlugin,
  withPlugins,
} from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorOverlayPlugin({ retryText: "重试" }),
  createErrorBadgePlugin({}),
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),
  createRetryOnErrorPlugin({ maxRetries: 1 }),
  createEventLoggerPlugin({ enabled: true }),
]);`})]})};export{h as CombosPage};
