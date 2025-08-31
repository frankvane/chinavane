import{R as h,j as e,r as u}from"./index-DPG_OKoV.js";import{C as A}from"./ComponentTemplate-HXLvd6Xe.js";const S=(r,n,t,d)=>{const s=t?`[${t}]`:"",o=`${s} 🖼️ 处理图片中...`;`${s}${n.join(",")}`,console.log(o,{imageData:r,filters:n});const i=performance.now();let m=r;for(let a=0;a<1e5;a++)m=`processed_${m}_${n.join("_")}`;const l=performance.now(),c=`${s} 图片处理耗时: ${(l-i).toFixed(2)}ms`;return console.log(c),m},R=r=>{console.log("🛒 计算购物车总价中...",r);const n=performance.now();let t=0;for(let s=0;s<5e4;s++)t=r.reduce((o,i)=>o+i.price*i.quantity,0);const d=performance.now();return console.log(`购物车计算耗时: ${(d-n).toFixed(2)}ms`),t},N=(r,n)=>{if(console.log("🔍 生成搜索建议中...",{query:r,databaseSize:n.length}),!r.trim())return[];const t=performance.now();let d=[];for(let o=0;o<1e4;o++)d=n.filter(i=>i.toLowerCase().includes(r.toLowerCase())).sort((i,m)=>{const l=i.toLowerCase().indexOf(r.toLowerCase()),c=m.toLowerCase().indexOf(r.toLowerCase());return l-c});const s=performance.now();return console.log(`搜索建议生成耗时: ${(s-t).toFixed(2)}ms`),d},I=(r,n,t)=>({size:`${r.length*t/100}KB`,format:"JPEG",filters:n.filter(d=>d.enabled).map(d=>d.name).join(", ")||"无",quality:`${t}%`}),k=(r,n,t)=>{const d=r.reduce((m,l)=>m+l.price*l.quantity,0);let s=0;n==="SAVE10"?s=d*.1:n==="SAVE20"&&(s=d*.2);let o=0;t==="standard"?o=15:t==="express"&&(o=25);const i=d-s+o;return{subtotal:d,discount:s,shipping:o,total:i}},f=["React Hooks教程","JavaScript基础","TypeScript进阶","Vue.js实战","Node.js开发","Python爬虫","Java Spring","Go语言入门","Docker容器","Kubernetes部署","MySQL数据库","Redis缓存","前端性能优化","后端架构设计","微服务架构","分布式系统"],D=({imageData:r,filters:n,quality:t,triggerRender:d})=>{const s=n.filter(m=>m.enabled).map(m=>m.name),o=S(r,s,"NoMemo"),i=I(r,n,t);return e.jsxs("div",{className:"p-4 border border-red-300 rounded bg-red-50",children:[e.jsx("h4",{className:"font-semibold text-red-800 mb-3",children:"❌ 不使用 useMemo"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsx("strong",{children:"处理结果:"}),e.jsxs("div",{className:"text-xs text-gray-600 mt-1 break-all",children:[o.substring(0,50),"..."]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsx("div",{className:"text-xs text-gray-600",children:"大小"}),e.jsx("div",{className:"font-medium",children:i.size})]}),e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsx("div",{className:"text-xs text-gray-600",children:"格式"}),e.jsx("div",{className:"font-medium",children:i.format})]}),e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsx("div",{className:"text-xs text-gray-600",children:"滤镜"}),e.jsx("div",{className:"font-medium",children:i.filters})]}),e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsx("div",{className:"text-xs text-gray-600",children:"质量"}),e.jsx("div",{className:"font-medium",children:i.quality})]})]})]}),e.jsx("p",{className:"text-xs text-red-600 mt-2",children:"每次渲染都重新处理图片，消耗大量 CPU 资源"})]})},P=({imageData:r,filters:n,quality:t,triggerRender:d})=>{const s=u.useMemo(()=>n.filter(m=>m.enabled).map(m=>m.name),[n]),o=u.useMemo(()=>S(r,s,"useMemo"),[r,s]),i=u.useMemo(()=>I(r,n,t),[r,n,t]);return e.jsxs("div",{className:"p-4 border border-green-300 rounded bg-green-50",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-3",children:"✅ 使用 useMemo"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsx("strong",{children:"处理结果:"}),e.jsxs("div",{className:"text-xs text-gray-600 mt-1 break-all",children:[o.substring(0,50),"..."]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsx("div",{className:"text-xs text-gray-600",children:"大小"}),e.jsx("div",{className:"font-medium",children:i.size})]}),e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsx("div",{className:"text-xs text-gray-600",children:"格式"}),e.jsx("div",{className:"font-medium",children:i.format})]}),e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsx("div",{className:"text-xs text-gray-600",children:"滤镜"}),e.jsx("div",{className:"font-medium",children:i.filters})]}),e.jsxs("div",{className:"p-2 bg-white rounded border",children:[e.jsx("div",{className:"text-xs text-gray-600",children:"质量"}),e.jsx("div",{className:"font-medium",children:i.quality})]})]})]}),e.jsx("p",{className:"text-xs text-green-600 mt-2",children:"只有相关依赖变化时才重新处理图片，性能更优"})]})},F=()=>{const[r]=h.useState("sample_image_data"),[n,t]=h.useState([{name:"模糊",enabled:!1},{name:"锐化",enabled:!0},{name:"对比度",enabled:!1},{name:"饱和度",enabled:!0}]),[d,s]=h.useState(80),[o,i]=h.useState(0),m=c=>{t(a=>a.map((x,b)=>b===c?{...x,enabled:!x.enabled}:x))},l=()=>{i(c=>c+1)};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"🖼️ 图片处理优化"}),e.jsxs("div",{className:"mb-4 space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"滤镜设置:"}),n.map((c,a)=>e.jsx("button",{onClick:()=>m(a),className:`px-3 py-1 text-sm rounded ${c.enabled?"bg-blue-500 text-white":"bg-gray-200 text-gray-700"}`,children:c.name},c.name))]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("label",{className:"text-sm font-medium",children:"图片质量:"}),e.jsx("input",{type:"range",min:"10",max:"100",value:d,onChange:c=>s(Number(c.target.value)),className:"flex-1 max-w-xs"}),e.jsxs("span",{className:"text-sm text-gray-600",children:[d,"%"]})]}),e.jsxs("button",{onClick:l,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:["触发重新渲染 (",o,")"]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsx(D,{imageData:r,filters:n,quality:d,triggerRender:o}),e.jsx(P,{imageData:r,filters:n,quality:d,triggerRender:o})]}),e.jsxs("div",{className:"mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"观察要点："}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"🖼️ 切换滤镜时，两侧都会重新处理图片"}),e.jsx("li",{children:"🎚️ 调整质量时，两侧都会重新处理图片"}),e.jsx("li",{children:'🔄 点击"触发重新渲染"时，只有左侧会重新处理'}),e.jsx("li",{children:"📊 打开控制台观察图片处理的执行频率"})]})]})]})})},T=({items:r,discountCode:n,shippingMethod:t,triggerRender:d})=>{R(r);const s=k(r,n,t);return e.jsxs("div",{className:"p-4 border border-red-300 rounded bg-red-50",children:[e.jsx("h4",{className:"font-semibold text-red-800 mb-3",children:"❌ 不使用 useMemo"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsx("div",{className:"p-2 bg-white rounded border",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"商品小计:"}),e.jsxs("span",{className:"font-medium",children:["¥",s.subtotal.toFixed(2)]})]})}),e.jsx("div",{className:"p-2 bg-white rounded border",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"折扣优惠:"}),e.jsxs("span",{className:"font-medium text-green-600",children:["-¥",s.discount.toFixed(2)]})]})}),e.jsx("div",{className:"p-2 bg-white rounded border",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"配送费用:"}),e.jsx("span",{className:"font-medium",children:s.shipping===0?"免费":`¥${s.shipping.toFixed(2)}`})]})}),e.jsx("div",{className:"p-2 bg-white rounded border border-red-300",children:e.jsxs("div",{className:"flex justify-between font-semibold",children:[e.jsx("span",{children:"最终总价:"}),e.jsxs("span",{className:"text-red-600",children:["¥",s.total.toFixed(2)]})]})})]}),e.jsx("p",{className:"text-xs text-red-600 mt-2",children:"每次渲染都重新计算所有费用，影响性能"})]})},L=({items:r,discountCode:n,shippingMethod:t,triggerRender:d})=>{u.useMemo(()=>R(r),[r]);const s=u.useMemo(()=>{console.log("💰 计算折扣中...",n);const l=r.reduce((c,a)=>c+a.price*a.quantity,0);return n==="SAVE10"?l*.1:n==="SAVE20"?l*.2:0},[r,n]),o=u.useMemo(()=>(console.log("🚚 计算配送费用中...",t),t==="standard"?15:t==="express"?25:0),[t]),i=u.useMemo(()=>(console.log("🧮 计算最终总价中..."),r.reduce((c,a)=>c+a.price*a.quantity,0)-s+o),[r,s,o]),m=r.reduce((l,c)=>l+c.price*c.quantity,0);return e.jsxs("div",{className:"p-4 border border-green-300 rounded bg-green-50",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-3",children:"✅ 使用 useMemo"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsx("div",{className:"p-2 bg-white rounded border",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"商品小计:"}),e.jsxs("span",{className:"font-medium",children:["¥",m.toFixed(2)]})]})}),e.jsx("div",{className:"p-2 bg-white rounded border",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"折扣优惠:"}),e.jsxs("span",{className:"font-medium text-green-600",children:["-¥",s.toFixed(2)]})]})}),e.jsx("div",{className:"p-2 bg-white rounded border",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"配送费用:"}),e.jsx("span",{className:"font-medium",children:o===0?"免费":`¥${o.toFixed(2)}`})]})}),e.jsx("div",{className:"p-2 bg-white rounded border border-green-300",children:e.jsxs("div",{className:"flex justify-between font-semibold",children:[e.jsx("span",{children:"最终总价:"}),e.jsxs("span",{className:"text-green-600",children:["¥",i.toFixed(2)]})]})})]}),e.jsx("p",{className:"text-xs text-green-600 mt-2",children:"只有相关依赖变化时才重新计算，性能更优"})]})},E=()=>{const[r,n]=h.useState([{id:1,name:"MacBook Pro",price:12999,quantity:1},{id:2,name:"iPhone 15",price:5999,quantity:2},{id:3,name:"AirPods Pro",price:1999,quantity:1}]),[t,d]=h.useState(""),[s,o]=h.useState("free"),[i,m]=h.useState(0),l=(a,x)=>{x<=0||n(b=>b.map(v=>v.id===a?{...v,quantity:x}:v))},c=()=>{const a={id:Date.now(),name:`新商品 ${r.length+1}`,price:Math.floor(Math.random()*5e3)+1e3,quantity:1};n(x=>[...x,a])};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"🛒 购物车计算优化"}),e.jsxs("div",{className:"mb-4 space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("input",{type:"text",placeholder:"输入折扣码 (SAVE10, SAVE20)",value:t,onChange:a=>d(a.target.value),className:"flex-1 min-w-64 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("select",{value:s,onChange:a=>o(a.target.value),className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"free",children:"免费配送"}),e.jsx("option",{value:"standard",children:"标准配送 (+¥15)"}),e.jsx("option",{value:"express",children:"快速配送 (+¥25)"})]}),e.jsx("button",{onClick:c,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加商品"}),e.jsxs("button",{onClick:()=>m(a=>a+1),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:["触发重新渲染 (",i,")"]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"购物车商品:"}),e.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto",children:r.map(a=>e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{children:[a.name," - ¥",a.price]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>l(a.id,a.quantity-1),className:"w-6 h-6 bg-red-500 text-white rounded text-xs",children:"-"}),e.jsx("span",{className:"w-8 text-center",children:a.quantity}),e.jsx("button",{onClick:()=>l(a.id,a.quantity+1),className:"w-6 h-6 bg-blue-500 text-white rounded text-xs",children:"+"})]})]},a.id))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsx(T,{items:r,discountCode:t,shippingMethod:s,triggerRender:i}),e.jsx(L,{items:r,discountCode:t,shippingMethod:s,triggerRender:i})]}),e.jsxs("div",{className:"mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"观察要点："}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"🛍️ 修改商品数量时，两侧都会重新计算购物车总价"}),e.jsx("li",{children:"💰 更改折扣码时，两侧都会重新计算折扣和总价"}),e.jsx("li",{children:"🚚 切换配送方式时，两侧都会重新计算配送费用"}),e.jsx("li",{children:'🔄 点击"触发重新渲染"时，只有左侧会重新计算所有费用'})]})]})]})})},$=()=>{const[r,n]=u.useState(""),[t,d]=u.useState("all"),[s,o]=u.useState(5),[i,m]=u.useState(0),[l,c]=u.useState(!0),[a,x]=u.useState([]),b=g=>{if(l){const p=new Date().toLocaleTimeString();x((q=[])=>[...q.slice(-4),`[${p}] ${g}`])}},v=u.useMemo(()=>(b("🔍 直接计算搜索建议（无memo）..."),N(r,f).slice(0,s)),[r,s,l]),y=u.useMemo(()=>(b("🔍 计算搜索建议（memo）..."),N(r,f).slice(0,s)),[r,s,l]),j=u.useMemo(()=>(b("❌ 错误的依赖计算..."),N(r,f).slice(0,s)),[r]),w=u.useMemo(()=>(b("⚠️ 过度依赖计算..."),N(r,f).slice(0,s)),[r,s,t,i,l]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"🔍 搜索建议优化与依赖陷阱"}),e.jsxs("div",{className:"mb-4 space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("input",{type:"text",placeholder:"搜索技术关键词...",value:r,onChange:g=>n(g.target.value),className:"flex-1 min-w-64 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("select",{value:t,onChange:g=>d(g.target.value),className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"所有分类"}),e.jsx("option",{value:"frontend",children:"前端技术"}),e.jsx("option",{value:"backend",children:"后端技术"}),e.jsx("option",{value:"devops",children:"运维技术"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("label",{className:"text-sm font-medium",children:"最大结果数:"}),e.jsx("input",{type:"range",min:"1",max:"10",value:s,onChange:g=>o(Number(g.target.value)),className:"flex-1 max-w-xs"}),e.jsxs("span",{className:"text-sm text-gray-600",children:[s," 条"]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>m(g=>g+1),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:["触发重新渲染 (",i,")"]}),e.jsxs("button",{onClick:()=>c(!l),className:`px-4 py-2 text-white rounded ${l?"bg-red-500 hover:bg-red-600":"bg-green-500 hover:bg-green-600"}`,children:[l?"关闭":"开启","控制台日志"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border border-red-300 rounded bg-red-50",children:[e.jsx("h4",{className:"font-semibold text-red-800 mb-2",children:"❌ 不使用 useMemo"}),e.jsx("div",{className:"text-sm space-y-1",children:Array.isArray(v)&&v.length>0?v.map((g,p)=>e.jsx("div",{className:"p-2 bg-white rounded border",children:g},p)):e.jsx("p",{className:"text-gray-500",children:"输入关键词开始搜索..."})}),e.jsx("p",{className:"text-xs text-red-600 mt-2",children:"每次渲染都重新计算搜索建议"})]}),e.jsxs("div",{className:"p-4 border border-orange-300 rounded bg-orange-50",children:[e.jsx("h4",{className:"font-semibold text-orange-800 mb-2",children:"⚠️ 缺少依赖"}),e.jsx("div",{className:"text-sm space-y-1",children:Array.isArray(j)&&j.length>0?j.map((g,p)=>e.jsx("div",{className:"p-2 bg-white rounded border",children:g},p)):e.jsx("p",{className:"text-gray-500",children:"输入关键词开始搜索..."})}),e.jsx("p",{className:"text-xs text-orange-600 mt-2",children:"缺少 maxResults 依赖，结果数量变化时不会更新"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border border-green-300 rounded bg-green-50",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"✅ 正确使用 useMemo"}),e.jsx("div",{className:"text-sm space-y-1",children:Array.isArray(y)&&y.length>0?y.map((g,p)=>e.jsx("div",{className:"p-2 bg-white rounded border",children:g},p)):e.jsx("p",{className:"text-gray-500",children:"输入关键词开始搜索..."})}),e.jsx("p",{className:"text-xs text-green-600 mt-2",children:"只有相关依赖变化时才重新计算"})]}),e.jsxs("div",{className:"p-4 border border-yellow-300 rounded bg-yellow-50",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"⚠️ 过度依赖"}),e.jsx("div",{className:"text-sm space-y-1",children:Array.isArray(w)&&w.length>0?w.map((g,p)=>e.jsx("div",{className:"p-2 bg-white rounded border",children:g},p)):e.jsx("p",{className:"text-gray-500",children:"输入关键词开始搜索..."})}),e.jsx("p",{className:"text-xs text-yellow-600 mt-2",children:"包含不必要的依赖，导致过度重新计算"})]})]})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"观察要点："}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"🔍 输入搜索词时，所有版本都会重新计算"}),e.jsx("li",{children:'📊 调整结果数量时，"缺少依赖"版本不会更新'}),e.jsx("li",{children:'🔄 点击"触发重新渲染"时，观察哪些版本会重新计算'}),e.jsx("li",{children:'📝 "过度依赖"版本在不相关状态变化时也会重新计算'})]})]}),l&&e.jsxs("div",{className:"p-3 bg-gray-50 border border-gray-200 rounded",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"📋 操作日志："}),e.jsx("div",{className:"text-sm space-y-1 max-h-32 overflow-y-auto",children:a.length>0?a.map((g,p)=>e.jsx("div",{className:"text-gray-700 font-mono text-xs",children:g},p)):e.jsx("p",{className:"text-gray-500 text-xs",children:"暂无操作记录"})}),e.jsx("button",{onClick:()=>x([]),className:"mt-2 px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300",children:"清空日志"})]})]})]})})},_=`import React, { useMemo } from "react";\r
import { ImageProcessorProps, ImageFilter, ImageInfo } from "./types";\r
import { processImage, calculateImageInfo } from "./utils";\r
\r
// 不使用 useMemo 的图片处理器\r
export const ImageProcessorWithoutMemo: React.FC<ImageProcessorProps> = ({\r
  imageData,\r
  filters,\r
  quality,\r
  triggerRender,\r
}) => {\r
  // 每次渲染都会重新处理图片\r
  const enabledFilters = filters.filter((f) => f.enabled).map((f) => f.name);\r
  const processedImage = processImage(imageData, enabledFilters, "NoMemo");\r
  const imageInfo = calculateImageInfo(imageData, filters, quality);\r
\r
  return (\r
    <div className="p-4 border border-red-300 rounded bg-red-50">\r
      <h4 className="font-semibold text-red-800 mb-3">❌ 不使用 useMemo</h4>\r
      <div className="space-y-2 text-sm">\r
        <div className="p-2 bg-white rounded border">\r
          <strong>处理结果:</strong>\r
          <div className="text-xs text-gray-600 mt-1 break-all">\r
            {processedImage.substring(0, 50)}...\r
          </div>\r
        </div>\r
        <div className="grid grid-cols-2 gap-2">\r
          <div className="p-2 bg-white rounded border">\r
            <div className="text-xs text-gray-600">大小</div>\r
            <div className="font-medium">{imageInfo.size}</div>\r
          </div>\r
          <div className="p-2 bg-white rounded border">\r
            <div className="text-xs text-gray-600">格式</div>\r
            <div className="font-medium">{imageInfo.format}</div>\r
          </div>\r
          <div className="p-2 bg-white rounded border">\r
            <div className="text-xs text-gray-600">滤镜</div>\r
            <div className="font-medium">{imageInfo.filters}</div>\r
          </div>\r
          <div className="p-2 bg-white rounded border">\r
            <div className="text-xs text-gray-600">质量</div>\r
            <div className="font-medium">{imageInfo.quality}</div>\r
          </div>\r
        </div>\r
      </div>\r
      <p className="text-xs text-red-600 mt-2">\r
        每次渲染都重新处理图片，消耗大量 CPU 资源\r
      </p>\r
    </div>\r
  );\r
};\r
\r
// 使用 useMemo 的图片处理器\r
export const ImageProcessorWithMemo: React.FC<ImageProcessorProps> = ({\r
  imageData,\r
  filters,\r
  quality,\r
  triggerRender,\r
}) => {\r
  // 使用 useMemo 缓存启用的滤镜\r
  const enabledFilters = useMemo(\r
    () => filters.filter((f) => f.enabled).map((f) => f.name),\r
    [filters]\r
  );\r
\r
  // 使用 useMemo 缓存图片处理结果\r
  const processedImage = useMemo(\r
    () => processImage(imageData, enabledFilters, "useMemo"),\r
    [imageData, enabledFilters]\r
  );\r
\r
  // 使用 useMemo 缓存图片信息\r
  const imageInfo = useMemo(\r
    () => calculateImageInfo(imageData, filters, quality),\r
    [imageData, filters, quality]\r
  );\r
\r
  return (\r
    <div className="p-4 border border-green-300 rounded bg-green-50">\r
      <h4 className="font-semibold text-green-800 mb-3">✅ 使用 useMemo</h4>\r
      <div className="space-y-2 text-sm">\r
        <div className="p-2 bg-white rounded border">\r
          <strong>处理结果:</strong>\r
          <div className="text-xs text-gray-600 mt-1 break-all">\r
            {processedImage.substring(0, 50)}...\r
          </div>\r
        </div>\r
        <div className="grid grid-cols-2 gap-2">\r
          <div className="p-2 bg-white rounded border">\r
            <div className="text-xs text-gray-600">大小</div>\r
            <div className="font-medium">{imageInfo.size}</div>\r
          </div>\r
          <div className="p-2 bg-white rounded border">\r
            <div className="text-xs text-gray-600">格式</div>\r
            <div className="font-medium">{imageInfo.format}</div>\r
          </div>\r
          <div className="p-2 bg-white rounded border">\r
            <div className="text-xs text-gray-600">滤镜</div>\r
            <div className="font-medium">{imageInfo.filters}</div>\r
          </div>\r
          <div className="p-2 bg-white rounded border">\r
            <div className="text-xs text-gray-600">质量</div>\r
            <div className="font-medium">{imageInfo.quality}</div>\r
          </div>\r
        </div>\r
      </div>\r
      <p className="text-xs text-green-600 mt-2">\r
        只有相关依赖变化时才重新处理图片，性能更优\r
      </p>\r
    </div>\r
  );\r
};\r
\r
// 图片处理演示组件\r
export const ImageProcessingDemo: React.FC = () => {\r
  const [imageData] = React.useState("sample_image_data");\r
  const [filters, setFilters] = React.useState<ImageFilter[]>([\r
    { name: "模糊", enabled: false },\r
    { name: "锐化", enabled: true },\r
    { name: "对比度", enabled: false },\r
    { name: "饱和度", enabled: true },\r
  ]);\r
  const [quality, setQuality] = React.useState(80);\r
  const [triggerRender, setTriggerRender] = React.useState(0);\r
\r
  const toggleFilter = (index: number) => {\r
    setFilters((prev) =>\r
      prev.map((filter, i) =>\r
        i === index ? { ...filter, enabled: !filter.enabled } : filter\r
      )\r
    );\r
  };\r
\r
  const handleTriggerRender = () => {\r
    setTriggerRender((prev) => prev + 1);\r
  };\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="bg-white p-6 rounded-lg border border-gray-200">\r
        <h3 className="text-lg font-semibold mb-4">🖼️ 图片处理优化</h3>\r
\r
        <div className="mb-4 space-y-3">\r
          <div className="flex flex-wrap gap-2">\r
            <span className="text-sm font-medium">滤镜设置:</span>\r
            {filters.map((filter, index) => (\r
              <button\r
                key={filter.name}\r
                onClick={() => toggleFilter(index)}\r
                className={\`px-3 py-1 text-sm rounded \${\r
                  filter.enabled\r
                    ? "bg-blue-500 text-white"\r
                    : "bg-gray-200 text-gray-700"\r
                }\`}\r
              >\r
                {filter.name}\r
              </button>\r
            ))}\r
          </div>\r
\r
          <div className="flex items-center gap-4">\r
            <label className="text-sm font-medium">图片质量:</label>\r
            <input\r
              type="range"\r
              min="10"\r
              max="100"\r
              value={quality}\r
              onChange={(e) => setQuality(Number(e.target.value))}\r
              className="flex-1 max-w-xs"\r
            />\r
            <span className="text-sm text-gray-600">{quality}%</span>\r
          </div>\r
\r
          <button\r
            onClick={handleTriggerRender}\r
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"\r
          >\r
            触发重新渲染 ({triggerRender})\r
          </button>\r
        </div>\r
\r
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">\r
          <ImageProcessorWithoutMemo\r
            imageData={imageData}\r
            filters={filters}\r
            quality={quality}\r
            triggerRender={triggerRender}\r
          />\r
          <ImageProcessorWithMemo\r
            imageData={imageData}\r
            filters={filters}\r
            quality={quality}\r
            triggerRender={triggerRender}\r
          />\r
        </div>\r
\r
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">\r
          <h4 className="font-medium text-yellow-800 mb-2">观察要点：</h4>\r
          <ul className="text-sm text-yellow-700 space-y-1">\r
            <li>🖼️ 切换滤镜时，两侧都会重新处理图片</li>\r
            <li>🎚️ 调整质量时，两侧都会重新处理图片</li>\r
            <li>🔄 点击"触发重新渲染"时，只有左侧会重新处理</li>\r
            <li>📊 打开控制台观察图片处理的执行频率</li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
`,z=`import React, { useMemo, useState } from 'react';
import { generateSearchSuggestions, SEARCH_DATABASE } from './utils';

// 搜索建议演示组件
export const SearchSuggestionsDemo: React.FC = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxResults, setMaxResults] = useState(5);
  const [triggerRender, setTriggerRender] = useState(0);
  const [showLogs, setShowLogs] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    if (showLogs) {
      const timestamp = new Date().toLocaleTimeString();
      setLogs((prev = []) => [...prev.slice(-4), \`[\${timestamp}] \${message}\`]);
    }
  };

  // 不使用 useMemo 的搜索建议
  const directSuggestions = useMemo(() => {
    addLog("🔍 直接计算搜索建议（无memo）...");
    const suggestions = generateSearchSuggestions(query, SEARCH_DATABASE);
    return suggestions.slice(0, maxResults);
  }, [query, maxResults, showLogs]); // 添加所有依赖，包括 showLogs

  // 使用 useMemo 的搜索建议
  const memoizedSuggestions = useMemo(() => {
    addLog("🔍 计算搜索建议（memo）...");
    const suggestions = generateSearchSuggestions(query, SEARCH_DATABASE);
    return suggestions.slice(0, maxResults);
  }, [query, maxResults, showLogs]);

  // 错误的依赖示例：缺少依赖
  const badMemoSuggestions = useMemo(() => {
    addLog("❌ 错误的依赖计算...");
    const suggestions = generateSearchSuggestions(query, SEARCH_DATABASE);
    return suggestions.slice(0, maxResults);
  }, [query]); // 缺少 maxResults 和 showLogs 依赖

  // 错误的依赖示例：不必要的依赖
  const overDependentSuggestions = useMemo(() => {
    addLog("⚠️ 过度依赖计算...");
    const suggestions = generateSearchSuggestions(query, SEARCH_DATABASE);
    return suggestions.slice(0, maxResults);
  }, [query, maxResults, selectedCategory, triggerRender, showLogs]); // selectedCategory 和 triggerRender 是不必要的

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">
          🔍 搜索建议优化与依赖陷阱
        </h3>

        <div className="mb-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            <input
              type="text"
              placeholder="搜索技术关键词..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 min-w-64 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">所有分类</option>
              <option value="frontend">前端技术</option>
              <option value="backend">后端技术</option>
              <option value="devops">运维技术</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm font-medium">最大结果数:</label>
            <input
              type="range"
              min="1"
              max="10"
              value={maxResults}
              onChange={(e) => setMaxResults(Number(e.target.value))}
              className="flex-1 max-w-xs"
            />
            <span className="text-sm text-gray-600">{maxResults} 条</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setTriggerRender((prev) => prev + 1)}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              触发重新渲染 ({triggerRender})
            </button>
            <button
              onClick={() => setShowLogs(!showLogs)}
              className={\`px-4 py-2 text-white rounded \${
                showLogs
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }\`}
            >
              {showLogs ? "关闭" : "开启"}控制台日志
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="p-4 border border-red-300 rounded bg-red-50">
              <h4 className="font-semibold text-red-800 mb-2">
                ❌ 不使用 useMemo
              </h4>
              <div className="text-sm space-y-1">
                {Array.isArray(directSuggestions) && directSuggestions.length > 0 ? (
                  directSuggestions.map((suggestion, index) => (
                    <div key={index} className="p-2 bg-white rounded border">
                      {suggestion}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">输入关键词开始搜索...</p>
                )}
              </div>
              <p className="text-xs text-red-600 mt-2">
                每次渲染都重新计算搜索建议
              </p>
            </div>

            <div className="p-4 border border-orange-300 rounded bg-orange-50">
              <h4 className="font-semibold text-orange-800 mb-2">
                ⚠️ 缺少依赖
              </h4>
              <div className="text-sm space-y-1">
                {Array.isArray(badMemoSuggestions) && badMemoSuggestions.length > 0 ? (
                  badMemoSuggestions.map((suggestion, index) => (
                    <div key={index} className="p-2 bg-white rounded border">
                      {suggestion}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">输入关键词开始搜索...</p>
                )}
              </div>
              <p className="text-xs text-orange-600 mt-2">
                缺少 maxResults 依赖，结果数量变化时不会更新
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 border border-green-300 rounded bg-green-50">
              <h4 className="font-semibold text-green-800 mb-2">
                ✅ 正确使用 useMemo
              </h4>
              <div className="text-sm space-y-1">
                {Array.isArray(memoizedSuggestions) && memoizedSuggestions.length > 0 ? (
                  memoizedSuggestions.map((suggestion, index) => (
                    <div key={index} className="p-2 bg-white rounded border">
                      {suggestion}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">输入关键词开始搜索...</p>
                )}
              </div>
              <p className="text-xs text-green-600 mt-2">
                只有相关依赖变化时才重新计算
              </p>
            </div>

            <div className="p-4 border border-yellow-300 rounded bg-yellow-50">
              <h4 className="font-semibold text-yellow-800 mb-2">
                ⚠️ 过度依赖
              </h4>
              <div className="text-sm space-y-1">
                {Array.isArray(overDependentSuggestions) && overDependentSuggestions.length > 0 ? (
                  overDependentSuggestions.map((suggestion, index) => (
                    <div key={index} className="p-2 bg-white rounded border">
                      {suggestion}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">输入关键词开始搜索...</p>
                )}
              </div>
              <p className="text-xs text-yellow-600 mt-2">
                包含不必要的依赖，导致过度重新计算
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded">
            <h4 className="font-medium text-blue-800 mb-2">观察要点：</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>🔍 输入搜索词时，所有版本都会重新计算</li>
              <li>📊 调整结果数量时，"缺少依赖"版本不会更新</li>
              <li>🔄 点击"触发重新渲染"时，观察哪些版本会重新计算</li>
              <li>📝 "过度依赖"版本在不相关状态变化时也会重新计算</li>
            </ul>
          </div>

          {showLogs && (
            <div className="p-3 bg-gray-50 border border-gray-200 rounded">
              <h4 className="font-medium text-gray-800 mb-2">📋 操作日志：</h4>
              <div className="text-sm space-y-1 max-h-32 overflow-y-auto">
                {logs.length > 0 ? (
                  logs.map((log, index) => (
                    <div
                      key={index}
                      className="text-gray-700 font-mono text-xs"
                    >
                      {log}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-xs">暂无操作记录</p>
                )}
              </div>
              <button
                onClick={() => setLogs([])}
                className="mt-2 px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                清空日志
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};`,Q=`import React, { useMemo } from 'react';\r
import { ShoppingCartProps, CartItem } from './types';\r
import { calculateCartTotal, calculateCartDetails } from './utils';\r
\r
// 不使用 useMemo 的购物车组件\r
export const ShoppingCartWithoutMemo: React.FC<ShoppingCartProps> = ({\r
  items,\r
  discountCode,\r
  shippingMethod,\r
  triggerRender,\r
}) => {\r
  // 每次渲染都会重新计算\r
  const cartTotal = calculateCartTotal(items);\r
  const cartDetails = calculateCartDetails(items, discountCode, shippingMethod);\r
\r
  return (\r
    <div className="p-4 border border-red-300 rounded bg-red-50">\r
      <h4 className="font-semibold text-red-800 mb-3">❌ 不使用 useMemo</h4>\r
      <div className="space-y-2 text-sm">\r
        <div className="p-2 bg-white rounded border">\r
          <div className="flex justify-between">\r
            <span>商品小计:</span>\r
            <span className="font-medium">¥{cartDetails.subtotal.toFixed(2)}</span>\r
          </div>\r
        </div>\r
        <div className="p-2 bg-white rounded border">\r
          <div className="flex justify-between">\r
            <span>折扣优惠:</span>\r
            <span className="font-medium text-green-600">\r
              -¥{cartDetails.discount.toFixed(2)}\r
            </span>\r
          </div>\r
        </div>\r
        <div className="p-2 bg-white rounded border">\r
          <div className="flex justify-between">\r
            <span>配送费用:</span>\r
            <span className="font-medium">\r
              {cartDetails.shipping === 0 ? '免费' : \`¥\${cartDetails.shipping.toFixed(2)}\`}\r
            </span>\r
          </div>\r
        </div>\r
        <div className="p-2 bg-white rounded border border-red-300">\r
          <div className="flex justify-between font-semibold">\r
            <span>最终总价:</span>\r
            <span className="text-red-600">¥{cartDetails.total.toFixed(2)}</span>\r
          </div>\r
        </div>\r
      </div>\r
      <p className="text-xs text-red-600 mt-2">\r
        每次渲染都重新计算所有费用，影响性能\r
      </p>\r
    </div>\r
  );\r
};\r
\r
// 使用 useMemo 的购物车组件\r
export const ShoppingCartWithMemo: React.FC<ShoppingCartProps> = ({\r
  items,\r
  discountCode,\r
  shippingMethod,\r
  triggerRender,\r
}) => {\r
  // 使用 useMemo 缓存购物车基础计算\r
  const cartTotal = useMemo(\r
    () => calculateCartTotal(items),\r
    [items]\r
  );\r
\r
  // 使用 useMemo 缓存折扣计算\r
  const discount = useMemo(() => {\r
    console.log('💰 计算折扣中...', discountCode);\r
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);\r
    if (discountCode === 'SAVE10') {\r
      return subtotal * 0.1;\r
    } else if (discountCode === 'SAVE20') {\r
      return subtotal * 0.2;\r
    }\r
    return 0;\r
  }, [items, discountCode]);\r
\r
  // 使用 useMemo 缓存配送费用计算\r
  const shipping = useMemo(() => {\r
    console.log('🚚 计算配送费用中...', shippingMethod);\r
    if (shippingMethod === 'standard') {\r
      return 15;\r
    } else if (shippingMethod === 'express') {\r
      return 25;\r
    }\r
    return 0;\r
  }, [shippingMethod]);\r
\r
  // 使用 useMemo 缓存最终总价\r
  const finalTotal = useMemo(() => {\r
    console.log('🧮 计算最终总价中...');\r
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);\r
    return subtotal - discount + shipping;\r
  }, [items, discount, shipping]);\r
\r
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);\r
\r
  return (\r
    <div className="p-4 border border-green-300 rounded bg-green-50">\r
      <h4 className="font-semibold text-green-800 mb-3">✅ 使用 useMemo</h4>\r
      <div className="space-y-2 text-sm">\r
        <div className="p-2 bg-white rounded border">\r
          <div className="flex justify-between">\r
            <span>商品小计:</span>\r
            <span className="font-medium">¥{subtotal.toFixed(2)}</span>\r
          </div>\r
        </div>\r
        <div className="p-2 bg-white rounded border">\r
          <div className="flex justify-between">\r
            <span>折扣优惠:</span>\r
            <span className="font-medium text-green-600">\r
              -¥{discount.toFixed(2)}\r
            </span>\r
          </div>\r
        </div>\r
        <div className="p-2 bg-white rounded border">\r
          <div className="flex justify-between">\r
            <span>配送费用:</span>\r
            <span className="font-medium">\r
              {shipping === 0 ? '免费' : \`¥\${shipping.toFixed(2)}\`}\r
            </span>\r
          </div>\r
        </div>\r
        <div className="p-2 bg-white rounded border border-green-300">\r
          <div className="flex justify-between font-semibold">\r
            <span>最终总价:</span>\r
            <span className="text-green-600">¥{finalTotal.toFixed(2)}</span>\r
          </div>\r
        </div>\r
      </div>\r
      <p className="text-xs text-green-600 mt-2">\r
        只有相关依赖变化时才重新计算，性能更优\r
      </p>\r
    </div>\r
  );\r
};\r
\r
// 购物车演示组件\r
export const ShoppingCartDemo: React.FC = () => {\r
  const [cartItems, setCartItems] = React.useState<CartItem[]>([\r
    { id: 1, name: "MacBook Pro", price: 12999, quantity: 1 },\r
    { id: 2, name: "iPhone 15", price: 5999, quantity: 2 },\r
    { id: 3, name: "AirPods Pro", price: 1999, quantity: 1 },\r
  ]);\r
  const [discountCode, setDiscountCode] = React.useState("");\r
  const [shippingMethod, setShippingMethod] = React.useState("free");\r
  const [triggerRender, setTriggerRender] = React.useState(0);\r
\r
  const updateQuantity = (id: number, newQuantity: number) => {\r
    if (newQuantity <= 0) return;\r
    setCartItems((prev) =>\r
      prev.map((item) =>\r
        item.id === id ? { ...item, quantity: newQuantity } : item\r
      )\r
    );\r
  };\r
\r
  const addItem = () => {\r
    const newItem: CartItem = {\r
      id: Date.now(),\r
      name: \`新商品 \${cartItems.length + 1}\`,\r
      price: Math.floor(Math.random() * 5000) + 1000,\r
      quantity: 1,\r
    };\r
    setCartItems((prev) => [...prev, newItem]);\r
  };\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="bg-white p-6 rounded-lg border border-gray-200">\r
        <h3 className="text-lg font-semibold mb-4">🛒 购物车计算优化</h3>\r
\r
        <div className="mb-4 space-y-3">\r
          <div className="flex flex-wrap gap-2">\r
            <input\r
              type="text"\r
              placeholder="输入折扣码 (SAVE10, SAVE20)"\r
              value={discountCode}\r
              onChange={(e) => setDiscountCode(e.target.value)}\r
              className="flex-1 min-w-64 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"\r
            />\r
            <select\r
              value={shippingMethod}\r
              onChange={(e) => setShippingMethod(e.target.value)}\r
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"\r
            >\r
              <option value="free">免费配送</option>\r
              <option value="standard">标准配送 (+¥15)</option>\r
              <option value="express">快速配送 (+¥25)</option>\r
            </select>\r
            <button\r
              onClick={addItem}\r
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"\r
            >\r
              添加商品\r
            </button>\r
            <button\r
              onClick={() => setTriggerRender((prev) => prev + 1)}\r
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"\r
            >\r
              触发重新渲染 ({triggerRender})\r
            </button>\r
          </div>\r
\r
          <div className="bg-gray-50 p-3 rounded">\r
            <h4 className="font-medium mb-2">购物车商品:</h4>\r
            <div className="space-y-2 max-h-32 overflow-y-auto">\r
              {cartItems.map((item) => (\r
                <div\r
                  key={item.id}\r
                  className="flex items-center justify-between text-sm"\r
                >\r
                  <span>\r
                    {item.name} - ¥{item.price}\r
                  </span>\r
                  <div className="flex items-center gap-2">\r
                    <button\r
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}\r
                      className="w-6 h-6 bg-red-500 text-white rounded text-xs"\r
                    >\r
                      -\r
                    </button>\r
                    <span className="w-8 text-center">{item.quantity}</span>\r
                    <button\r
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}\r
                      className="w-6 h-6 bg-blue-500 text-white rounded text-xs"\r
                    >\r
                      +\r
                    </button>\r
                  </div>\r
                </div>\r
              ))}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">\r
          <ShoppingCartWithoutMemo\r
            items={cartItems}\r
            discountCode={discountCode}\r
            shippingMethod={shippingMethod}\r
            triggerRender={triggerRender}\r
          />\r
          <ShoppingCartWithMemo\r
            items={cartItems}\r
            discountCode={discountCode}\r
            shippingMethod={shippingMethod}\r
            triggerRender={triggerRender}\r
          />\r
        </div>\r
\r
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">\r
          <h4 className="font-medium text-yellow-800 mb-2">观察要点：</h4>\r
          <ul className="text-sm text-yellow-700 space-y-1">\r
            <li>🛍️ 修改商品数量时，两侧都会重新计算购物车总价</li>\r
            <li>💰 更改折扣码时，两侧都会重新计算折扣和总价</li>\r
            <li>🚚 切换配送方式时，两侧都会重新计算配送费用</li>\r
            <li>🔄 点击"触发重新渲染"时，只有左侧会重新计算所有费用</li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};`,M=`// useMemo 优化相关的类型定义\r
\r
// 购物车商品接口\r
export interface CartItem {\r
  id: number;\r
  name: string;\r
  price: number;\r
  quantity: number;\r
}\r
\r
// 图片滤镜接口\r
export interface ImageFilter {\r
  name: string;\r
  enabled: boolean;\r
}\r
\r
// 图片处理器组件属性\r
export interface ImageProcessorProps {\r
  imageData: string;\r
  filters: ImageFilter[];\r
  quality: number;\r
  triggerRender: number;\r
}\r
\r
// 购物车组件属性\r
export interface ShoppingCartProps {\r
  items: CartItem[];\r
  discountCode: string;\r
  shippingMethod: string;\r
  triggerRender: number;\r
}\r
\r
// 图片信息接口\r
export interface ImageInfo {\r
  size: string;\r
  format: string;\r
  filters: string;\r
  quality: string;\r
}\r
\r
// 购物车计算结果接口\r
export interface CartCalculation {\r
  subtotal: number;\r
  discount: number;\r
  shipping: number;\r
  total: number;\r
}\r
\r
// 搜索建议相关类型\r
export type SearchCategory = 'all' | 'frontend' | 'backend' | 'devops';`,C=`// useMemo 优化相关的工具函数\r
\r
import { CartItem, ImageFilter, ImageInfo, CartCalculation } from "./types";\r
import React, { useMemo } from "react";\r
\r
// 修改 processImage 支持日志回调\r
export const processImage = (\r
  imageData: string,\r
  filters: string[],\r
  label?: string,\r
  logCallback?: (msg: string) => void\r
) => {\r
  const tag = label ? \`[\${label}]\` : "";\r
  const msg1 = \`\${tag} 🖼️ 处理图片中...\`;\r
  const msg2 = \`\${tag} filters: \${filters.join(",")}\`;\r
  logCallback?.(msg1);\r
  logCallback?.(msg2);\r
  console.log(msg1, { imageData, filters });\r
  // 模拟复杂的图片处理操作\r
  const start = performance.now();\r
  let result = imageData;\r
  for (let i = 0; i < 100000; i++) {\r
    result = \`processed_\${result}_\${filters.join("_")}\`;\r
  }\r
  const end = performance.now();\r
  const msg3 = \`\${tag} 图片处理耗时: \${(end - start).toFixed(2)}ms\`;\r
  logCallback?.(msg3);\r
  console.log(msg3);\r
  return result;\r
};\r
\r
// 模拟复杂的购物车总价计算\r
export const calculateCartTotal = (items: CartItem[]) => {\r
  console.log("🛒 计算购物车总价中...", items);\r
  // 模拟复杂的计算操作\r
  const start = performance.now();\r
  let total = 0;\r
  for (let i = 0; i < 50000; i++) {\r
    total = items.reduce((sum, item) => {\r
      return sum + item.price * item.quantity;\r
    }, 0);\r
  }\r
  const end = performance.now();\r
  console.log(\`购物车计算耗时: \${(end - start).toFixed(2)}ms\`);\r
  return total;\r
};\r
\r
// 模拟复杂的搜索建议生成\r
export const generateSearchSuggestions = (\r
  query: string,\r
  database: string[]\r
) => {\r
  console.log("🔍 生成搜索建议中...", { query, databaseSize: database.length });\r
  if (!query.trim()) return [];\r
\r
  // 模拟复杂的搜索算法\r
  const start = performance.now();\r
  let suggestions: string[] = [];\r
\r
  // 模拟复杂的匹配和排序算法\r
  for (let i = 0; i < 10000; i++) {\r
    suggestions = database\r
      .filter((item) => item.toLowerCase().includes(query.toLowerCase()))\r
      .sort((a, b) => {\r
        const aIndex = a.toLowerCase().indexOf(query.toLowerCase());\r
        const bIndex = b.toLowerCase().indexOf(query.toLowerCase());\r
        return aIndex - bIndex;\r
      });\r
  }\r
\r
  const end = performance.now();\r
  console.log(\`搜索建议生成耗时: \${(end - start).toFixed(2)}ms\`);\r
  return suggestions;\r
};\r
\r
// 计算图片信息\r
export const calculateImageInfo = (\r
  imageData: string,\r
  filters: ImageFilter[],\r
  quality: number\r
): ImageInfo => {\r
  return {\r
    size: \`\${(imageData.length * quality) / 100}KB\`,\r
    format: "JPEG",\r
    filters:\r
      filters\r
        .filter((f) => f.enabled)\r
        .map((f) => f.name)\r
        .join(", ") || "无",\r
    quality: \`\${quality}%\`,\r
  };\r
};\r
\r
// 计算购物车详细信息\r
export const calculateCartDetails = (\r
  items: CartItem[],\r
  discountCode: string,\r
  shippingMethod: string\r
): CartCalculation => {\r
  const subtotal = items.reduce(\r
    (sum, item) => sum + item.price * item.quantity,\r
    0\r
  );\r
\r
  // 计算折扣\r
  let discount = 0;\r
  if (discountCode === "SAVE10") {\r
    discount = subtotal * 0.1;\r
  } else if (discountCode === "SAVE20") {\r
    discount = subtotal * 0.2;\r
  }\r
\r
  // 计算配送费\r
  let shipping = 0;\r
  if (shippingMethod === "standard") {\r
    shipping = 15;\r
  } else if (shippingMethod === "express") {\r
    shipping = 25;\r
  }\r
\r
  const total = subtotal - discount + shipping;\r
\r
  return {\r
    subtotal,\r
    discount,\r
    shipping,\r
    total,\r
  };\r
};\r
\r
// 模拟数据\r
export const SEARCH_DATABASE = [\r
  "React Hooks教程",\r
  "JavaScript基础",\r
  "TypeScript进阶",\r
  "Vue.js实战",\r
  "Node.js开发",\r
  "Python爬虫",\r
  "Java Spring",\r
  "Go语言入门",\r
  "Docker容器",\r
  "Kubernetes部署",\r
  "MySQL数据库",\r
  "Redis缓存",\r
  "前端性能优化",\r
  "后端架构设计",\r
  "微服务架构",\r
  "分布式系统",\r
];\r
\r
export const INITIAL_CART_ITEMS: CartItem[] = [\r
  { id: 1, name: "MacBook Pro", price: 12999, quantity: 1 },\r
  { id: 2, name: "iPhone 15", price: 5999, quantity: 2 },\r
  { id: 3, name: "AirPods Pro", price: 1999, quantity: 1 },\r
];\r
`,W=()=>e.jsx(A,{title:"useMemo 性能优化",description:"学习如何使用 useMemo 缓存计算结果，避免不必要的重复计算，提升 React 应用性能。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 计算缓存"}),e.jsx("li",{children:"• 依赖追踪"}),e.jsx("li",{children:"• 引用稳定"}),e.jsx("li",{children:"• 性能优化"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 性能提升"}),e.jsx("li",{children:"• 引用稳定"}),e.jsx("li",{children:"• 简单易用"}),e.jsx("li",{children:"• 精确控制"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 复杂计算"}),e.jsx("li",{children:"• 数据转换"}),e.jsx("li",{children:"• 对象创建"}),e.jsx("li",{children:"• 组件优化"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 依赖数组"}),e.jsx("li",{children:"• 过度使用"}),e.jsx("li",{children:"• 内存占用"}),e.jsx("li",{children:"• 依赖陷阱"})]})]})]})}),examples:[{title:"图片处理优化",component:e.jsx(F,{}),description:"展示在图片处理场景中使用 useMemo 的性能优化效果。",observationPoints:["切换滤镜时，两侧都会重新处理图片","调整质量时，两侧都会重新处理图片","点击'触发重新渲染'时，只有左侧会重新处理","打开控制台观察图片处理的执行频率"],keyPoints:["图片处理是典型的 CPU 密集型操作","useMemo 可以缓存复杂的处理结果","依赖数组决定何时重新处理图片","避免在每次渲染时重复执行相同的处理"],commonTraps:["每次渲染都重新处理图片数据","忘记缓存处理结果","依赖数组设置不当导致过度处理"],solutions:["使用 useMemo 缓存图片处理结果","合理设置依赖数组，只包含必要的依赖","将处理逻辑抽取为独立函数"],importantTips:["左侧每次渲染都会重新处理图片，消耗大量 CPU","右侧使用 useMemo 缓存结果，只在必要时重新处理"],preCode:[{title:"Types",code:M},{title:"Utils",code:C}],codeExample:{title:"图片处理优化示例",code:_}},{title:"购物车计算优化",component:e.jsx(E,{}),description:"展示在购物车总价计算场景中使用 useMemo 的性能优化效果。",observationPoints:["修改商品数量时，两侧都会重新计算","输入折扣码时，两侧都会重新计算","点击'触发重新渲染'时，只有左侧会重新计算","打开控制台观察计算的执行频率"],keyPoints:["购物车计算涉及多个步骤：小计、税费、折扣、配送费","useMemo 可以缓存复杂的计算结果","多层 useMemo 可以构建计算依赖链","避免在每次渲染时重复执行相同的计算"],commonTraps:["每次渲染都重新计算购物车总价","忘记缓存中间计算步骤","依赖数组设置不当导致过度计算"],solutions:["使用 useMemo 缓存各个计算步骤","将复杂计算拆分为多个 useMemo","合理设置依赖数组，只包含必要的依赖"],importantTips:["左侧每次渲染都会重新计算所有步骤，影响性能","右侧使用 useMemo 缓存结果，只在必要时重新计算"],preCode:[{title:"Types",code:M},{title:"Utils",code:C}],codeExample:{title:"购物车计算优化示例",code:Q}},{title:"搜索建议优化",component:e.jsx($,{}),description:"展示在搜索建议生成场景中使用 useMemo 的依赖数组最佳实践。",observationPoints:["修改搜索词时，所有示例都会重新计算","修改最大结果数时，观察哪些示例会重新计算","修改分类时，观察哪些示例会重新计算","打开控制台观察各个 memo 的计算频率"],keyPoints:["依赖数组必须包含所有使用的变量","不应包含不必要的依赖项","缺少依赖会导致结果不更新","过度依赖会导致不必要的重新计算"],commonTraps:["缺少必要的依赖项","包含不必要的依赖项","依赖数组设置不准确"],solutions:["使用 ESLint 规则检查依赖数组","仔细分析计算中使用的变量","只包含真正影响计算结果的依赖"],importantTips:["依赖数组的准确性直接影响 useMemo 的效果","正确的依赖数组是性能优化的关键"],preCode:[{title:"Utils",code:C}],codeExample:{title:"Search Suggestions",code:z}}],tutorial:{concepts:["useMemo 用于缓存计算结果，避免重复执行昂贵的计算","只有在依赖项发生变化时才会重新计算","返回值会被缓存，保持引用稳定性","依赖数组决定何时重新计算缓存的值","适用于 CPU 密集型计算和复杂数据处理"],steps:["识别组件中的昂贵计算操作","使用 useMemo 包装计算逻辑","正确设置依赖数组，包含所有使用的变量","测试和验证性能优化效果","避免在简单计算中过度使用","定期审查和优化依赖数组"],tips:["只在真正昂贵的计算中使用 useMemo","依赖数组要包含所有使用的变量","避免依赖整个对象，优先使用具体属性","使用 ESLint 规则帮助检查依赖数组","可以使用 React DevTools Profiler 测量性能","考虑内存占用和计算成本的平衡"]},interview:{questions:[{question:"useMemo 的工作原理是什么？",answer:"useMemo 会在组件渲染时检查依赖数组中的值是否发生变化。如果依赖没有变化，它会返回上次缓存的计算结果；如果依赖发生变化，它会重新执行计算函数并缓存新的结果。这样可以避免在每次渲染时都执行昂贵的计算操作，从而提升性能。"},{question:"什么时候应该使用 useMemo？",answer:"应该在以下情况使用 useMemo：1) 执行昂贵的计算操作，如复杂的数学运算、大量数据处理；2) 创建复杂的对象或数组，需要保持引用稳定性；3) 配合 React.memo 优化子组件渲染；4) 避免在每次渲染时重复执行相同的计算。不应该在简单计算中使用，因为 useMemo 本身也有开销。"},{question:"依赖数组的作用是什么？常见陷阱有哪些？",answer:"依赖数组决定何时重新计算缓存的值。常见陷阱包括：1) 缺少依赖 - 计算中使用的变量没有包含在依赖数组中，导致结果不更新；2) 多余依赖 - 包含不必要的依赖，导致过度重新计算；3) 对象依赖 - 依赖整个对象而不是具体属性，导致不必要的重新计算。解决方法是使用 ESLint 规则检查，仔细分析计算逻辑。"},{question:"useMemo 与 useCallback 的区别是什么？",answer:"useMemo 和 useCallback 的区别：1) 缓存内容不同 - useMemo 缓存计算结果，useCallback 缓存函数；2) 返回值不同 - useMemo 返回计算的值，useCallback 返回函数；3) 使用场景不同 - useMemo 用于昂贵计算，useCallback 用于事件处理函数；4) 语法差异 - useMemo 接收计算函数，useCallback 直接接收要缓存的函数。两者都用于性能优化，经常配合使用。"},{question:"如何判断 useMemo 是否真的提升了性能？",answer:"判断 useMemo 性能提升的方法：1) 使用 React DevTools Profiler 测量渲染时间；2) 在计算函数中添加 console.log 观察执行频率；3) 使用 performance.now() 测量计算耗时；4) 对比使用前后的用户体验；5) 监控应用的整体性能指标。如果计算本身很简单，useMemo 的开销可能大于收益，需要谨慎使用。"}],keyPoints:["useMemo 通过缓存计算结果来优化性能","只有依赖项变化时才重新计算","依赖数组的准确性至关重要","适用于昂贵计算和引用稳定性需求","需要权衡计算成本和缓存开销","配合其他优化技术使用效果更佳"]},bestPractices:{dos:["在昂贵的计算操作中使用 useMemo","正确设置依赖数组，包含所有使用的变量","优先依赖原始值而不是对象","使用 ESLint 规则检查依赖数组","配合 React.memo 优化组件渲染","使用性能分析工具验证优化效果","在数据处理和转换中合理使用","保持计算函数的纯净性"],donts:["不要在简单计算中过度使用 useMemo","不要忘记在依赖数组中包含使用的变量","不要在依赖数组中包含不必要的依赖","不要依赖整个对象，应该依赖具体属性","不要在 useMemo 中执行副作用操作","不要忽略 useMemo 本身的性能开销","不要在每个计算中都使用 useMemo","不要忘记定期审查和优化依赖数组"],patterns:["计算缓存模式 - 缓存昂贵的计算结果","数据处理模式 - 缓存过滤、排序等数据操作","对象稳定模式 - 保持对象和数组的引用稳定","依赖链模式 - 构建多层缓存依赖关系","条件计算模式 - 根据条件决定是否重新计算","统计聚合模式 - 缓存基于数据的统计计算","格式化模式 - 缓存数据格式化和转换结果","组合优化模式 - 与其他 Hook 配合使用"]}});export{W as default};
