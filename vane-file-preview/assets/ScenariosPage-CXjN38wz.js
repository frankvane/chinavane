import{r as p,s as R,u as T,v as E,h as e,q as v,w as S,p as k,x as O,y as g,F as h,R as f,z,A as D,B as U,C as $,E as V,H as I,I as b,J as B,K as W,M as q,N as H,O as X,Q as K}from"./index-DIgJiTfk.js";const N=O(),Q=g(h,{plugins:N}),M=k("sample.docx","sample.xlsx","star.pdf","sample.jpg","sample-data.csv"),Z={code:"D01",title:"上传即预览",pain:"用户拖进来什么都有可能，后台不该用 if/else 猜类型：要按 MIME / 扩展名 / 插件优先级排出唯一赢家，还要能解释「为什么是它」。",plugs:[{fn:"createAllPlugins",why:"17 个插件全装上，路由在运行时决出赢家"},{fn:"resolvePreview",why:"纯函数，同一个文件无论在哪算结果都一样"},{fn:"accepts",why:"列出「还有谁想认领」，用来解释落选原因"}],note:"这里是真的读你选择的文件（File → objectURL），不是预置样本。选一个 .ogg 会看到音频与视频插件抢同一个文件，最后 MIME 让音频赢。"},G=()=>{const[t,i]=p.useState(M[0]),[a,s]=p.useState(!1),l=p.useRef(null);p.useEffect(()=>()=>{l.current&&URL.revokeObjectURL(l.current)},[]);const m=n=>{l.current&&URL.revokeObjectURL(l.current);const r=URL.createObjectURL(n);l.current=r;const d=n.name.includes(".")?n.name.split(".").pop().toLowerCase():"";i({name:n.name,size:n.size,type:n.type||"application/octet-stream",extension:d,url:r})},o=p.useMemo(()=>R(N,t),[t]),c=p.useMemo(()=>N.filter(n=>T(n,t)).map(n=>({name:n.name,priority:E(n,t)})).sort((n,r)=>r.priority-n.priority),[t]);return e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsxs("div",{className:`drop-zone${a?" is-over":""}`,onDragOver:n=>{n.preventDefault(),s(!0)},onDragLeave:()=>s(!1),onDrop:n=>{var d;n.preventDefault(),s(!1);const r=(d=n.dataTransfer.files)==null?void 0:d[0];r&&m(r)},children:[e.jsx("b",{children:"把文件拖到这里"}),e.jsx("span",{children:"或者从下面挑一个样本"}),e.jsxs("label",{className:"drop-pick",children:["选择本地文件",e.jsx("input",{type:"file","aria-label":"选择一个本地文件",onChange:n=>{var d;const r=(d=n.target.files)==null?void 0:d[0];r&&m(r)}})]})]}),e.jsxs("div",{className:"filebar",role:"group","aria-label":"快捷样本",children:[e.jsx("span",{className:"filebar-label",children:"quick"}),M.map(n=>e.jsx("button",{type:"button",className:"filebar-btn","aria-pressed":n.name===t.name,onClick:()=>{l.current&&(URL.revokeObjectURL(l.current),l.current=null),i(n)},children:n.name},n.name))]}),e.jsxs("div",{className:"stage-shell",style:{height:360},children:[e.jsx("div",{className:"stage-mount",children:e.jsx(Q,{file:t,containerStyle:{width:"100%",height:"100%"}})}),e.jsxs("div",{className:"stage-foot",children:[e.jsx("span",{className:"dot is-loaded","aria-hidden":"true"}),e.jsx("span",{children:e.jsx("b",{children:t.name})}),e.jsx("span",{children:v(t.size)}),e.jsx("span",{children:S(t.type)}),e.jsxs("span",{style:{marginLeft:"auto"},children:["winner ",e.jsx("b",{children:(o==null?void 0:o.name)??"unsupported"})]})]})]}),e.jsxs("div",{className:"demo-side-block",children:[e.jsxs("div",{className:"side-head",children:["路由决策",e.jsxs("b",{children:[c.length," 个候选"]})]}),e.jsxs("table",{className:"config-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"插件"}),e.jsx("th",{children:"priority"}),e.jsx("th",{children:"结果"})]})}),e.jsxs("tbody",{children:[c.map(n=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:n.name})}),e.jsx("td",{className:"default-cell",children:n.priority}),e.jsx("td",{style:{color:n.name===(o==null?void 0:o.name)?"var(--ok)":void 0},children:n.name===(o==null?void 0:o.name)?"赢家":"候选（被压下去）"})]},n.name)),c.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:3,children:"没有插件认领 —— 正常情况下 DownloadPlugin 会兜住"})}):null]})]})]})]})},J=Object.freeze(Object.defineProperty({__proto__:null,default:G,meta:Z},Symbol.toStringTag,{value:"Module"})),Y=g(h,{plugins:[z(),D(),U(),$(),V(),I()]}),x=k("sample.docx","sample.xlsx","star.pdf","sample.jpg","sample.zip","sample-data.csv"),ee={code:"D02",title:"邮件附件列表",pain:"一列附件混着 pdf / docx / xlsx / 图片 / zip。每行要给出类型与大小，点开就得在右侧看，而不是让用户逐个下载到本地再打开。",plugs:[{fn:"createDocxPreviewPlugin",why:"docx 直接还原版式，合同类附件不用下载"},{fn:"createXlsxPreviewPlugin",why:"多 Sheet 离线解析，报价单能直接核对"},{fn:"createPdfPreviewPlugin",why:"内嵌浏览器查看器，翻页与打印都现成"},{fn:"createImagePreviewPlugin",why:"截图类附件按原图看，可缩放"},{fn:"createZipPreviewPlugin",why:"只读目录不解压，几 GB 的包也能秒开"},{fn:"createCsvPreviewPlugin",why:"导出的账单表格，编码与分隔符自动识别"}],note:"只装 6 个插件：附件场景不会有 .epub / .md，少装就少几份解析器要下载。路由仍由 resolvePreview 决出，不是按行写死的。"},ne=()=>{const[t,i]=f.useState(x[0].name),a=x.find(l=>l.name===t)??x[0],s=a.extension==="docx"?{...a,docxMode:"docx-preview"}:a;return e.jsxs("div",{className:"attach-grid",style:{alignItems:"stretch"},children:[e.jsxs("div",{style:{display:"grid",gap:6,alignContent:"start"},children:[x.map(l=>e.jsxs("button",{type:"button",className:"attach-row","aria-pressed":l.name===t,onClick:()=>i(l.name),children:[e.jsx("span",{className:"attach-icon",children:l.extension.slice(0,4)}),e.jsxs("span",{style:{minWidth:0},children:[e.jsx("span",{className:"attach-name",children:l.name}),e.jsxs("span",{className:"attach-meta",children:[v(l.size)," · ",S(l.type)]})]}),e.jsx("span",{className:"attach-plug",children:l.extension.toUpperCase()})]},l.name)),e.jsxs("p",{className:"muted",style:{margin:"4px 2px 0",fontSize:11},children:["共 ",x.length," 个附件 · 点击任意一行在右侧查看"]})]}),e.jsxs("div",{className:"stage-shell",style:{height:400},children:[e.jsxs("div",{className:"filebar",children:[e.jsx("span",{className:"filebar-label",children:"attach"}),e.jsx("span",{style:{fontFamily:"var(--ff-mono)",fontSize:11,color:"#5f5d58"},children:s.name})]}),e.jsx("div",{className:"stage-mount",children:e.jsx(Y,{file:s,containerStyle:{width:"100%",height:"100%"}})}),e.jsxs("div",{className:"stage-foot",children:[e.jsx("span",{className:"dot is-loaded","aria-hidden":"true"}),e.jsx("span",{children:S(s.type)}),e.jsx("span",{style:{marginLeft:"auto"},children:v(s.size)})]})]})]})},te=Object.freeze(Object.defineProperty({__proto__:null,default:ne,meta:ee},Symbol.toStringTag,{value:"Module"})),se=g(h,{plugins:[D()]}),ae=b("star.pdf"),ie=b("danmu.pdf"),le={code:"D03",title:"文档审批 · 左右对比",pain:"法务与采购要对着两版看：左右同屏、各自独立滚动与缩放，而不是来回切标签页对页码。",plugs:[{fn:"createPdfPreviewPlugin",why:"两个实例各自持有一个 iframe，滚动/缩放互不干扰"}],note:"两份 PDF 页数不同（旧版单页、新版多页）。插件不负责比对内容 —— 差异摘要这一层是业务写的，预览只解决「看得见」。"},F=[{kind:"改",text:"第 2 条付款周期：30 天 → 45 天"},{kind:"增",text:"第 7 条新增「逾期按日 0.05% 计息」"},{kind:"删",text:"附件二《验收单模板》移除"}],re=()=>{const[t,i]=f.useState("none"),a=(s,l)=>e.jsxs("div",{style:{minWidth:0},children:[e.jsxs("div",{className:"diff-head",children:[e.jsx("b",{style:{fontWeight:400,color:"var(--paper-ink)"},children:l}),e.jsx("span",{children:s.name}),e.jsx("span",{style:{marginLeft:"auto"},children:v(s.size)})]}),e.jsx("div",{className:"stage-shell",style:{height:300},children:e.jsx("div",{className:"stage-mount",children:e.jsx(se,{file:s,containerStyle:{width:"100%",height:"100%"}})})})]});return e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsxs("div",{className:"diff-grid",children:[a(ae,"v1 · 2026-10-21"),a(ie,"v2 · 2026-10-26")]}),e.jsxs("div",{className:"demo-side-block",style:{background:"var(--surface)"},children:[e.jsxs("div",{className:"side-head",children:["差异摘要",e.jsxs("b",{children:[F.length," 处"]})]}),e.jsx("ul",{className:"demo-why-list",style:{padding:"8px 10px"},children:F.map(s=>e.jsxs("li",{style:{gridTemplateColumns:"22px 1fr"},children:[e.jsx("code",{style:{fontSize:11},children:s.kind}),e.jsx("span",{style:{fontSize:12},children:s.text})]},s.text))})]}),e.jsxs("div",{className:"version-row","aria-pressed":t==="ok",children:[e.jsx("b",{children:t==="none"?"待审批":t==="ok"?"已通过":"已驳回"}),e.jsx("span",{children:"审批人：当前登录用户"}),e.jsxs("span",{style:{marginLeft:"auto",display:"flex",gap:6},children:[e.jsx("button",{type:"button",className:"btn btn-mini",onClick:()=>i("ok"),children:"通过"}),e.jsx("button",{type:"button",className:"btn btn-mini",onClick:()=>i("no"),children:"驳回"})]})]})]})},oe=Object.freeze(Object.defineProperty({__proto__:null,default:re,meta:le},Symbol.toStringTag,{value:"Module"})),ce=g(h,{plugins:[z(),B(),W()]}),w=k("sample.jpg","sample.png","sample.gif","sample.webp","sample.svg","sample.mp4","sample.webm","sample.mp3"),de={code:"D04",title:"素材库 · 混合媒体",pain:"图、视频、音频混在一个列表里：缩略图要出得来（视频取首帧、音频给图标），点开按类型换播放器，而不是全塞进 <img>。",plugs:[{fn:"createImagePreviewPlugin",why:"图片按原图看，可缩放/旋转"},{fn:"createVideoPreviewPlugin",why:"视频给原生控件，横向视频不裁切"},{fn:"createAudioPreviewPlugin",why:"音频套卡片，没有封面也不难看"}],note:"三种媒体的「点一下」走的是三条完全不同的渲染路径 —— 这一格是单赢家路由最直观的证据。"};function pe(t){return t.startsWith("video/")}function me(t){return t.startsWith("audio/")}const ue=()=>{const[t,i]=f.useState(w[0].name),a=w.find(s=>s.name===t)??w[0];return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0,1fr) 300px",gap:10},children:[e.jsx("div",{className:"tile-grid",children:w.map(s=>e.jsxs("button",{type:"button",className:"tile","aria-pressed":s.name===t,title:`${s.name} · ${v(s.size)}`,onClick:()=>i(s.name),children:[pe(s.type)?e.jsx("video",{src:s.url,muted:!0,preload:"metadata"}):me(s.type)?e.jsx("span",{style:{display:"grid",placeItems:"center",width:"100%",height:"100%",background:"linear-gradient(135deg,#2a2723,#141310)",color:"#ffa165",fontFamily:"var(--ff-mono)",fontSize:11,letterSpacing:"0.1em"},children:"AUDIO"}):e.jsx("img",{src:s.url,alt:s.name,loading:"lazy"}),e.jsx("span",{className:"tile-tag",children:s.name})]},s.name))}),e.jsxs("div",{className:"stage-shell",style:{height:400},children:[e.jsxs("div",{className:"filebar",children:[e.jsx("span",{className:"filebar-label",children:"asset"}),e.jsx("span",{style:{fontFamily:"var(--ff-mono)",fontSize:11,color:"#5f5d58"},children:a.name})]}),e.jsx("div",{className:"stage-mount",children:e.jsx(ce,{file:a,containerStyle:{width:"100%",height:"100%"}})}),e.jsxs("div",{className:"stage-foot",children:[e.jsx("span",{className:"dot is-loaded","aria-hidden":"true"}),e.jsx("span",{children:a.type}),e.jsx("span",{style:{marginLeft:"auto"},children:v(a.size)})]})]})]})},fe=Object.freeze(Object.defineProperty({__proto__:null,default:ue,meta:de},Symbol.toStringTag,{value:"Module"})),ve=g(h,{plugins:[I()]}),P=b("sample-data.csv"),y=[{key:"name",label:"姓名",required:!0},{key:"dept",label:"部门",required:!0},{key:"score",label:"评分",required:!0},{key:"note",label:"备注",required:!1}],ge={code:"D05",title:"数据导入 · 列映射",pain:"导入前必须先看清表头与异常值：表格要能滚、编码不能乱，用户才能判断「第 3 列是部门还是评分」。映射错了后面全错。",plugs:[{fn:"createCsvPreviewPlugin",why:"编码（GB18030）与分隔符自动识别，表格可搜索/排序"}],note:"表头是从文件首行真读出来的，不是写死的数组 —— 写死的话换个分隔符就整页错位，而这恰好是 CSV 最常见的坑。"},he=()=>{const[t,i]=f.useState([]),[a,s]=f.useState({}),[l,m]=f.useState(null);f.useEffect(()=>{let n=!0;return fetch(P.url).then(r=>r.text()).then(r=>{if(!n)return;const u=(r.split(/\r?\n/)[0]??"").split(",").map(j=>j.trim().replace(/^"|"$/g,""));i(u);const C={};y.forEach((j,_)=>{u[_]&&(C[j.key]=u[_])}),s(C)}).catch(()=>n&&i([])),()=>{n=!1}},[]);const o=y.filter(n=>a[n.key]).length,c=y.every(n=>!n.required||a[n.key]);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0,1fr) 250px",gap:10},children:[e.jsxs("div",{className:"stage-shell",style:{height:360},children:[e.jsxs("div",{className:"filebar",children:[e.jsx("span",{className:"filebar-label",children:"source"}),e.jsxs("span",{style:{fontFamily:"var(--ff-mono)",fontSize:11,color:"#5f5d58"},children:[P.name," · ",v(P.size)]})]}),e.jsx("div",{className:"stage-mount",children:e.jsx(ve,{file:P,containerStyle:{width:"100%",height:"100%"}})}),e.jsxs("div",{className:"stage-foot",children:[e.jsx("span",{className:"dot is-loaded","aria-hidden":"true"}),e.jsxs("span",{children:[t.length," 列"]}),e.jsxs("span",{style:{marginLeft:"auto"},children:[o,"/",y.length," 已映射"]})]})]}),e.jsxs("div",{className:"demo-side-block",style:{background:"var(--surface)"},children:[e.jsxs("div",{className:"side-head",children:["字段映射",e.jsx("b",{children:c?"可以导入":"缺必填"})]}),e.jsxs("div",{style:{padding:"6px 10px 10px"},children:[y.map(n=>e.jsxs("div",{className:"map-row",style:{gridTemplateColumns:"1fr 14px 1fr"},children:[e.jsxs("b",{children:[n.label,n.required?" *":""]}),e.jsx("span",{style:{textAlign:"center"},children:"←"}),e.jsxs("select",{"aria-label":`${n.label} 对应 CSV 列`,value:a[n.key]??"",onChange:r=>s(d=>{const u={...d};return r.target.value?u[n.key]=r.target.value:delete u[n.key],u}),children:[e.jsx("option",{value:"",children:"（不导入）"}),t.map(r=>e.jsx("option",{value:r,children:r},r))]})]},n.key)),e.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:10},children:[e.jsx("button",{type:"button",className:"btn btn-mini",disabled:!c,onClick:()=>m(18),style:c?void 0:{opacity:.45,cursor:"not-allowed"},children:"导入"}),e.jsx("span",{className:"muted",style:{fontSize:11},children:l?`已导入 ${l} 行`:"只读预览，不会真写库"})]})]})]})]})},xe=Object.freeze(Object.defineProperty({__proto__:null,default:he,meta:ge},Symbol.toStringTag,{value:"Module"})),ye=g(h,{plugins:[q()]}),be=b("sample.ts"),we=b("sample.js"),Pe={code:"D06",title:"代码评审 · 左右并排",pain:"评审要同时看改前与改后：两栏高亮代码、行号对齐、评论挂在行上。插件无状态，两个实例各自判语言、各自滚。",plugs:[{fn:"createCodePreviewPlugin",why:"prism 按需加载语言包，ts 与 js 各自高亮，主题跟随系统"}],note:"不自己做 diff 算法：文本比对是另一件事（Myers / patience diff）。预览层只负责「两段代码都显示对」，混进来会让包背上一份不该有的复杂度。"},A=[{line:12,who:"reviewer.a",text:"这个类型断言能不能换成类型守卫？断言会掩盖真实的类型错误。"},{line:28,who:"reviewer.b",text:"分支里 fallback 直接返回 null 会丢上下文，建议 throw 让上层拿到原因。"}],je=()=>{const t=(i,a,s)=>e.jsxs("div",{style:{minWidth:0},children:[e.jsxs("div",{className:"diff-head",children:[e.jsx("b",{style:{fontWeight:400,color:s},children:a}),e.jsx("span",{children:i.name})]}),e.jsx("div",{className:"stage-shell",style:{height:340},children:e.jsx("div",{className:"stage-mount",children:e.jsx(ye,{file:i,containerStyle:{width:"100%",height:"100%"}})})})]});return e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsxs("div",{className:"diff-grid",children:[t(be,"− 修改前","#a92f24"),t(we,"+ 修改后","#186b39")]}),e.jsxs("div",{className:"demo-side-block",style:{background:"var(--surface)"},children:[e.jsxs("div",{className:"side-head",children:["行内评论",e.jsx("b",{children:A.length})]}),e.jsx("ul",{className:"demo-why-list",style:{padding:"8px 10px"},children:A.map(i=>e.jsxs("li",{style:{gridTemplateColumns:"1fr",gap:4},children:[e.jsxs("code",{style:{fontSize:11},children:["L",i.line," · ",i.who]}),e.jsx("span",{style:{fontSize:12},children:i.text})]},i.line))})]})]})},Se=Object.freeze(Object.defineProperty({__proto__:null,default:je,meta:Pe},Symbol.toStringTag,{value:"Module"})),Ne=`/**
 * D01 · 上传即预览
 *
 * 真实痛点是「用户不知道该传什么」：拖进来一个 .docx、一个 .xlsx、一张截图，
 * 后台得自己决定谁去渲染。这一格把 17 个插件全装上，让路由**当着你面发生**：
 * 左边是拖拽区，右边直接显示「谁认领了它、还有谁也想认领、最后为什么是它」。
 *
 * 关键点：这一页不是「按扩展名写 if/else」，而是 \`resolvePreview\` 的完整规则 ——
 * priority 降序 → MIME 置信度 → 声明顺序。上传一个 .ogg 音频时能明显看到
 * VideoPreviewPlugin 被 AudioPreviewPlugin 压下去（MIME 压过扩展名）。
 */
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FilePreviewCore,
  accepts,
  priorityOf,
  resolvePreview,
  withPlugins,
  type FileInfo,
} from "vane-file-preview";
import { createAllPlugins } from "vane-file-preview/custom-plugins";
import { formatBytes, shortMime } from "../lib/format";
import { pick } from "../data/samples";
import type { ScenarioMeta } from "./types";

const ALL = createAllPlugins();
const Preview = withPlugins(FilePreviewCore, { plugins: ALL });

const QUICK = pick("sample.docx", "sample.xlsx", "star.pdf", "sample.jpg", "sample-data.csv");

export const meta: ScenarioMeta = {
  code: "D01",
  title: "上传即预览",
  pain: "用户拖进来什么都有可能，后台不该用 if/else 猜类型：要按 MIME / 扩展名 / 插件优先级排出唯一赢家，还要能解释「为什么是它」。",
  plugs: [
    { fn: "createAllPlugins", why: "17 个插件全装上，路由在运行时决出赢家" },
    { fn: "resolvePreview", why: "纯函数，同一个文件无论在哪算结果都一样" },
    { fn: "accepts", why: "列出「还有谁想认领」，用来解释落选原因" },
  ],
  note: "这里是真的读你选择的文件（File → objectURL），不是预置样本。选一个 .ogg 会看到音频与视频插件抢同一个文件，最后 MIME 让音频赢。",
};

const DropScenario: React.FC = () => {
  const [file, setFile] = useState<FileInfo>(QUICK[0]);
  const [over, setOver] = useState(false);
  const createdUrl = useRef<string | null>(null);

  // 自己造的 objectURL 必须自己回收：不回收的话每换一个文件就泄漏一份完整字节
  useEffect(
    () => () => {
      if (createdUrl.current) URL.revokeObjectURL(createdUrl.current);
    },
    []
  );

  // 名字刻意不叫 useXxx：它是个普通函数，\`use\` 前缀会让 eslint 的 rules-of-hooks
  // 把它当成 Hook，然后在 onClick 里调用时报「Hook 不能写在回调里」。
  const adoptFile = (f: File) => {
    if (createdUrl.current) URL.revokeObjectURL(createdUrl.current);
    const url = URL.createObjectURL(f);
    createdUrl.current = url;
    const ext = f.name.includes(".") ? f.name.split(".").pop()!.toLowerCase() : "";
    setFile({
      name: f.name,
      size: f.size,
      type: f.type || "application/octet-stream",
      extension: ext,
      url,
    });
  };

  const winner = useMemo(() => resolvePreview(ALL, file), [file]);
  const candidates = useMemo(
    () =>
      ALL.filter((p) => accepts(p, file))
        .map((p) => ({ name: p.name, priority: priorityOf(p, file) }))
        .sort((a, b) => b.priority - a.priority),
    [file]
  );

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div
        className={\`drop-zone\${over ? " is-over" : ""}\`}
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setOver(false);
          const f = e.dataTransfer.files?.[0];
          if (f) adoptFile(f);
        }}
      >
        <b>把文件拖到这里</b>
        <span>或者从下面挑一个样本</span>
        {/* label 包住隐藏的 input：原生 file input 在 Chromium 里是英文的
            「Choose File / No file chosen」，没法样式化，只能换掉壳 */}
        <label className="drop-pick">
          选择本地文件
          <input
            type="file"
            aria-label="选择一个本地文件"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) adoptFile(f);
            }}
          />
        </label>
      </div>

      <div className="filebar" role="group" aria-label="快捷样本">
        <span className="filebar-label">quick</span>
        {QUICK.map((s) => (
          <button
            key={s.name}
            type="button"
            className="filebar-btn"
            aria-pressed={s.name === file.name}
            onClick={() => {
              if (createdUrl.current) {
                URL.revokeObjectURL(createdUrl.current);
                createdUrl.current = null;
              }
              setFile(s);
            }}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="stage-shell" style={{ height: 360 }}>
        <div className="stage-mount">
          <Preview file={file} containerStyle={{ width: "100%", height: "100%" }} />
        </div>
        <div className="stage-foot">
          <span className="dot is-loaded" aria-hidden="true" />
          <span>
            <b>{file.name}</b>
          </span>
          <span>{formatBytes(file.size)}</span>
          <span>{shortMime(file.type)}</span>
          <span style={{ marginLeft: "auto" }}>
            winner <b>{winner?.name ?? "unsupported"}</b>
          </span>
        </div>
      </div>

      <div className="demo-side-block">
        <div className="side-head">
          路由决策
          <b>{candidates.length} 个候选</b>
        </div>
        <table className="config-table">
          <thead>
            <tr>
              <th>插件</th>
              <th>priority</th>
              <th>结果</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.name}>
                <td>
                  <code>{c.name}</code>
                </td>
                <td className="default-cell">{c.priority}</td>
                <td style={{ color: c.name === winner?.name ? "var(--ok)" : undefined }}>
                  {c.name === winner?.name ? "赢家" : "候选（被压下去）"}
                </td>
              </tr>
            ))}
            {candidates.length === 0 ? (
              <tr>
                <td colSpan={3}>没有插件认领 —— 正常情况下 DownloadPlugin 会兜住</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DropScenario;
`,ke=`/**
 * D02 · 邮件附件列表
 *
 * 真实痛点是「一列附件里混着 pdf / docx / 图片 / zip」：每行要能显示类型与大小，
 * 点开就地在右侧看，而不是让用户逐个下载。这里刻意只装 7 个插件（不是 17 个）——
 * 附件场景里不会出现 .epub 或 .md，少装几个就少几份解析器要下载。
 *
 * 注意 sample.zip 这一行：zip 插件只读中央目录，不会解压内容，所以点开是即时的。
 */
import React from "react";
import { FilePreviewCore, withPlugins } from "vane-file-preview";
import {
  createCsvPreviewPlugin,
  createDocxPreviewPlugin,
  createImagePreviewPlugin,
  createPdfPreviewPlugin,
  createXlsxPreviewPlugin,
  createZipPreviewPlugin,
} from "vane-file-preview/custom-plugins";
import { formatBytes, shortMime } from "../lib/format";
import { pick } from "../data/samples";
import type { ScenarioMeta } from "./types";

const Preview = withPlugins(FilePreviewCore, {
  plugins: [
    createImagePreviewPlugin(),
    createPdfPreviewPlugin(),
    createDocxPreviewPlugin(),
    createXlsxPreviewPlugin(),
    createZipPreviewPlugin(),
    createCsvPreviewPlugin(),
  ],
});

const ATTACHMENTS = pick(
  "sample.docx",
  "sample.xlsx",
  "star.pdf",
  "sample.jpg",
  "sample.zip",
  "sample-data.csv"
);

export const meta: ScenarioMeta = {
  code: "D02",
  title: "邮件附件列表",
  pain: "一列附件混着 pdf / docx / xlsx / 图片 / zip。每行要给出类型与大小，点开就得在右侧看，而不是让用户逐个下载到本地再打开。",
  plugs: [
    { fn: "createDocxPreviewPlugin", why: "docx 直接还原版式，合同类附件不用下载" },
    { fn: "createXlsxPreviewPlugin", why: "多 Sheet 离线解析，报价单能直接核对" },
    { fn: "createPdfPreviewPlugin", why: "内嵌浏览器查看器，翻页与打印都现成" },
    { fn: "createImagePreviewPlugin", why: "截图类附件按原图看，可缩放" },
    { fn: "createZipPreviewPlugin", why: "只读目录不解压，几 GB 的包也能秒开" },
    { fn: "createCsvPreviewPlugin", why: "导出的账单表格，编码与分隔符自动识别" },
  ],
  note: "只装 6 个插件：附件场景不会有 .epub / .md，少装就少几份解析器要下载。路由仍由 resolvePreview 决出，不是按行写死的。",
};

const MailScenario: React.FC = () => {
  const [active, setActive] = React.useState(ATTACHMENTS[0].name);
  const picked = ATTACHMENTS.find((a) => a.name === active) ?? ATTACHMENTS[0];
  // 这里只装了 DocxPreviewPlugin（版式还原），而它的 canHandle 要求
  // \`file.docxMode === "docx-preview"\` —— 不补这一句，docx 那一行点开就是
  // Core 的「没有插件能预览这个文件」。这正是「两个 docx 渲染器互斥」的代价：
  // 声明是消费方的责任，插件不会替你猜。
  const file = picked.extension === "docx" ? { ...picked, docxMode: "docx-preview" as const } : picked;

  return (
    <div className="attach-grid" style={{ alignItems: "stretch" }}>
      <div style={{ display: "grid", gap: 6, alignContent: "start" }}>
        {ATTACHMENTS.map((a) => (
          <button
            key={a.name}
            type="button"
            className="attach-row"
            aria-pressed={a.name === active}
            onClick={() => setActive(a.name)}
          >
            <span className="attach-icon">{a.extension.slice(0, 4)}</span>
            <span style={{ minWidth: 0 }}>
              <span className="attach-name">{a.name}</span>
              <span className="attach-meta">
                {formatBytes(a.size)} · {shortMime(a.type)}
              </span>
            </span>
            <span className="attach-plug">{a.extension.toUpperCase()}</span>
          </button>
        ))}
        <p className="muted" style={{ margin: "4px 2px 0", fontSize: 11 }}>
          共 {ATTACHMENTS.length} 个附件 · 点击任意一行在右侧查看
        </p>
      </div>

      <div className="stage-shell" style={{ height: 400 }}>
        <div className="filebar">
          <span className="filebar-label">attach</span>
          <span style={{ fontFamily: "var(--ff-mono)", fontSize: 11, color: "#5f5d58" }}>
            {file.name}
          </span>
        </div>
        <div className="stage-mount">
          <Preview file={file} containerStyle={{ width: "100%", height: "100%" }} />
        </div>
        <div className="stage-foot">
          <span className="dot is-loaded" aria-hidden="true" />
          <span>{shortMime(file.type)}</span>
          <span style={{ marginLeft: "auto" }}>{formatBytes(file.size)}</span>
        </div>
      </div>
    </div>
  );
};

export default MailScenario;
`,Ce=`/**
 * D03 · 文档审批（左右对比）
 *
 * 真实痛点是「法务/采购要对着两版看差异」：左右各一个 PDF，同一屏内滚动，
 * 而不是来回切标签页。两个 \`<iframe>\` 各自独立 —— 这正是 PdfPreviewPlugin 的
 * 设计（不引 pdfjs，交给浏览器查看器），所以两个实例互不影响滚动与缩放。
 *
 * 版式上有一个细节：两个预览必须**等高**，否则左右边缘对不齐、眼睛无法横向扫。
 * 高度靠 \`.stage-shell\` 固定，而不是让内容撑开。
 */
import React from "react";
import { FilePreviewCore, withPlugins, type FileInfo } from "vane-file-preview";
import { createPdfPreviewPlugin } from "vane-file-preview/custom-plugins";
import { formatBytes } from "../lib/format";
import { getSample } from "../data/samples";
import type { ScenarioMeta } from "./types";

const Preview = withPlugins(FilePreviewCore, { plugins: [createPdfPreviewPlugin()] });

const OLD = getSample("star.pdf");
const NEW = getSample("danmu.pdf");

export const meta: ScenarioMeta = {
  code: "D03",
  title: "文档审批 · 左右对比",
  pain: "法务与采购要对着两版看：左右同屏、各自独立滚动与缩放，而不是来回切标签页对页码。",
  plugs: [
    { fn: "createPdfPreviewPlugin", why: "两个实例各自持有一个 iframe，滚动/缩放互不干扰" },
  ],
  note: "两份 PDF 页数不同（旧版单页、新版多页）。插件不负责比对内容 —— 差异摘要这一层是业务写的，预览只解决「看得见」。",
};

const DIFFS = [
  { kind: "改", text: "第 2 条付款周期：30 天 → 45 天" },
  { kind: "增", text: "第 7 条新增「逾期按日 0.05% 计息」" },
  { kind: "删", text: "附件二《验收单模板》移除" },
];

const ApprovalScenario: React.FC = () => {
  const [verdict, setVerdict] = React.useState<"none" | "ok" | "no">("none");

  const pane = (file: FileInfo, label: string) => (
    <div style={{ minWidth: 0 }}>
      <div className="diff-head">
        <b style={{ fontWeight: 400, color: "var(--paper-ink)" }}>{label}</b>
        <span>{file.name}</span>
        <span style={{ marginLeft: "auto" }}>{formatBytes(file.size)}</span>
      </div>
      <div className="stage-shell" style={{ height: 300 }}>
        <div className="stage-mount">
          <Preview file={file} containerStyle={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div className="diff-grid">
        {pane(OLD, "v1 · 2026-10-21")}
        {pane(NEW, "v2 · 2026-10-26")}
      </div>

      <div className="demo-side-block" style={{ background: "var(--surface)" }}>
        <div className="side-head">
          差异摘要
          <b>{DIFFS.length} 处</b>
        </div>
        <ul className="demo-why-list" style={{ padding: "8px 10px" }}>
          {DIFFS.map((d) => (
            <li key={d.text} style={{ gridTemplateColumns: "22px 1fr" }}>
              <code style={{ fontSize: 11 }}>{d.kind}</code>
              <span style={{ fontSize: 12 }}>{d.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="version-row" aria-pressed={verdict === "ok"}>
        <b>{verdict === "none" ? "待审批" : verdict === "ok" ? "已通过" : "已驳回"}</b>
        <span>审批人：当前登录用户</span>
        <span style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          <button type="button" className="btn btn-mini" onClick={() => setVerdict("ok")}>
            通过
          </button>
          <button type="button" className="btn btn-mini" onClick={() => setVerdict("no")}>
            驳回
          </button>
        </span>
      </div>
    </div>
  );
};

export default ApprovalScenario;
`,_e=`/**
 * D04 · 素材库（图 + 视频 + 音频混合）
 *
 * 真实痛点是「素材列表里三种媒体混在一起」：缩略图要能出（视频取首帧、音频给图标），
 * 点开按类型给对应的播放器，而不是统一塞进 <img>。路由在这一格的意义最直观 ——
 * 同一个「点一下」，落到三个完全不同的插件上。
 *
 * 缩略图用浏览器原生能力（<img> / <video preload="metadata">），不额外引缩略图库：
 * 素材库的缩略图本来就该由上传管线生成，预览层只负责「没有缩略图时别崩」。
 */
import React from "react";
import { FilePreviewCore, withPlugins } from "vane-file-preview";
import {
  createAudioPreviewPlugin,
  createImagePreviewPlugin,
  createVideoPreviewPlugin,
} from "vane-file-preview/custom-plugins";
import { formatBytes } from "../lib/format";
import { pick } from "../data/samples";
import type { ScenarioMeta } from "./types";

const Preview = withPlugins(FilePreviewCore, {
  plugins: [createImagePreviewPlugin(), createVideoPreviewPlugin(), createAudioPreviewPlugin()],
});

const ASSETS = pick(
  "sample.jpg",
  "sample.png",
  "sample.gif",
  "sample.webp",
  "sample.svg",
  "sample.mp4",
  "sample.webm",
  "sample.mp3"
);

export const meta: ScenarioMeta = {
  code: "D04",
  title: "素材库 · 混合媒体",
  pain: "图、视频、音频混在一个列表里：缩略图要出得来（视频取首帧、音频给图标），点开按类型换播放器，而不是全塞进 <img>。",
  plugs: [
    { fn: "createImagePreviewPlugin", why: "图片按原图看，可缩放/旋转" },
    { fn: "createVideoPreviewPlugin", why: "视频给原生控件，横向视频不裁切" },
    { fn: "createAudioPreviewPlugin", why: "音频套卡片，没有封面也不难看" },
  ],
  note: "三种媒体的「点一下」走的是三条完全不同的渲染路径 —— 这一格是单赢家路由最直观的证据。",
};

function isVideo(type: string) {
  return type.startsWith("video/");
}
function isAudio(type: string) {
  return type.startsWith("audio/");
}

const LibraryScenario: React.FC = () => {
  const [active, setActive] = React.useState(ASSETS[0].name);
  const file = ASSETS.find((a) => a.name === active) ?? ASSETS[0];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", gap: 10 }}>
      <div className="tile-grid">
        {ASSETS.map((a) => (
          <button
            key={a.name}
            type="button"
            className="tile"
            aria-pressed={a.name === active}
            title={\`\${a.name} · \${formatBytes(a.size)}\`}
            onClick={() => setActive(a.name)}
          >
            {isVideo(a.type) ? (
              <video src={a.url} muted preload="metadata" />
            ) : isAudio(a.type) ? (
              <span
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg,#2a2723,#141310)",
                  color: "#ffa165",
                  fontFamily: "var(--ff-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                }}
              >
                AUDIO
              </span>
            ) : (
              <img src={a.url} alt={a.name} loading="lazy" />
            )}
            <span className="tile-tag">{a.name}</span>
          </button>
        ))}
      </div>

      <div className="stage-shell" style={{ height: 400 }}>
        <div className="filebar">
          <span className="filebar-label">asset</span>
          <span style={{ fontFamily: "var(--ff-mono)", fontSize: 11, color: "#5f5d58" }}>
            {file.name}
          </span>
        </div>
        <div className="stage-mount">
          <Preview file={file} containerStyle={{ width: "100%", height: "100%" }} />
        </div>
        <div className="stage-foot">
          <span className="dot is-loaded" aria-hidden="true" />
          <span>{file.type}</span>
          <span style={{ marginLeft: "auto" }}>{formatBytes(file.size)}</span>
        </div>
      </div>
    </div>
  );
};

export default LibraryScenario;
`,Me=`/**
 * D05 · 数据导入（CSV 列映射）
 *
 * 真实痛点是「导入前得先看清表头对不对」：左边要能滚动看全表（含异常值），
 * 右边把列映射到业务字段。预览在这里不是装饰 —— 用户是靠它决定「第 3 列到底是
 * 部门还是评分」的，所以表格必须真的可读、编码不能乱。
 *
 * 表头是从文件里真读出来的（fetch → 首行 split），不是写死的数组：
 * 写死的话换个分隔符就整页错位，而这正是 CSV 最常见的坑。
 */
import React from "react";
import { FilePreviewCore, withPlugins } from "vane-file-preview";
import { createCsvPreviewPlugin } from "vane-file-preview/custom-plugins";
import { formatBytes } from "../lib/format";
import { getSample } from "../data/samples";
import type { ScenarioMeta } from "./types";

const Preview = withPlugins(FilePreviewCore, { plugins: [createCsvPreviewPlugin()] });

const CSV = getSample("sample-data.csv");

/** 业务侧要接的字段 */
const FIELDS = [
  { key: "name", label: "姓名", required: true },
  { key: "dept", label: "部门", required: true },
  { key: "score", label: "评分", required: true },
  { key: "note", label: "备注", required: false },
];

export const meta: ScenarioMeta = {
  code: "D05",
  title: "数据导入 · 列映射",
  pain: "导入前必须先看清表头与异常值：表格要能滚、编码不能乱，用户才能判断「第 3 列是部门还是评分」。映射错了后面全错。",
  plugs: [
    { fn: "createCsvPreviewPlugin", why: "编码（GB18030）与分隔符自动识别，表格可搜索/排序" },
  ],
  note: "表头是从文件首行真读出来的，不是写死的数组 —— 写死的话换个分隔符就整页错位，而这恰好是 CSV 最常见的坑。",
};

const ImportScenario: React.FC = () => {
  const [headers, setHeaders] = React.useState<string[]>([]);
  const [mapping, setMapping] = React.useState<Record<string, string>>({});
  const [imported, setImported] = React.useState<number | null>(null);

  React.useEffect(() => {
    let alive = true;
    fetch(CSV.url)
      .then((r) => r.text())
      .then((text) => {
        if (!alive) return;
        const first = text.split(/\\r?\\n/)[0] ?? "";
        const cols = first.split(",").map((s) => s.trim().replace(/^"|"$/g, ""));
        setHeaders(cols);
        // 默认按顺序对上前 N 个字段，剩下的留空
        const next: Record<string, string> = {};
        FIELDS.forEach((f, i) => {
          if (cols[i]) next[f.key] = cols[i];
        });
        setMapping(next);
      })
      .catch(() => alive && setHeaders([]));
    return () => {
      alive = false;
    };
  }, []);

  const mapped = FIELDS.filter((f) => mapping[f.key]).length;
  const ready = FIELDS.every((f) => !f.required || mapping[f.key]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 250px", gap: 10 }}>
      <div className="stage-shell" style={{ height: 360 }}>
        <div className="filebar">
          <span className="filebar-label">source</span>
          <span style={{ fontFamily: "var(--ff-mono)", fontSize: 11, color: "#5f5d58" }}>
            {CSV.name} · {formatBytes(CSV.size)}
          </span>
        </div>
        <div className="stage-mount">
          <Preview file={CSV} containerStyle={{ width: "100%", height: "100%" }} />
        </div>
        <div className="stage-foot">
          <span className="dot is-loaded" aria-hidden="true" />
          <span>{headers.length} 列</span>
          <span style={{ marginLeft: "auto" }}>
            {mapped}/{FIELDS.length} 已映射
          </span>
        </div>
      </div>

      <div className="demo-side-block" style={{ background: "var(--surface)" }}>
        <div className="side-head">
          字段映射
          <b>{ready ? "可以导入" : "缺必填"}</b>
        </div>
        <div style={{ padding: "6px 10px 10px" }}>
          {FIELDS.map((f) => (
            <div className="map-row" key={f.key} style={{ gridTemplateColumns: "1fr 14px 1fr" }}>
              <b>
                {f.label}
                {f.required ? " *" : ""}
              </b>
              <span style={{ textAlign: "center" }}>←</span>
              <select
                aria-label={\`\${f.label} 对应 CSV 列\`}
                value={mapping[f.key] ?? ""}
                onChange={(e) =>
                  setMapping((prev) => {
                    const next = { ...prev };
                    if (e.target.value) next[f.key] = e.target.value;
                    else delete next[f.key];
                    return next;
                  })
                }
              >
                <option value="">（不导入）</option>
                {headers.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 10 }}>
            <button
              type="button"
              className="btn btn-mini"
              disabled={!ready}
              onClick={() => setImported(18)}
              style={!ready ? { opacity: 0.45, cursor: "not-allowed" } : undefined}
            >
              导入
            </button>
            <span className="muted" style={{ fontSize: 11 }}>
              {imported ? \`已导入 \${imported} 行\` : "只读预览，不会真写库"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportScenario;
`,Fe=`/**
 * D06 · 代码评审（左右并排）
 *
 * 真实痛点是「评审时要同时看改前和改后」：左右各一个高亮代码块，行号对齐，
 * 评论挂在行上。这一格用的是同一个 CodePreviewPlugin 的两个实例 ——
 * 插件本身无状态，两个实例互不干扰（语言按各自扩展名判，主题跟着系统走）。
 *
 * 不自己做 diff 算法：文本比对是另一件事（Myers / patience diff），
 * 预览层只负责「把两段代码都显示对」。混在一起会让这个包背上一份它不该有的复杂度。
 */
import React from "react";
import { FilePreviewCore, withPlugins, type FileInfo } from "vane-file-preview";
import { createCodePreviewPlugin } from "vane-file-preview/custom-plugins";
import { getSample } from "../data/samples";
import type { ScenarioMeta } from "./types";

const Preview = withPlugins(FilePreviewCore, { plugins: [createCodePreviewPlugin()] });

const BEFORE: FileInfo = getSample("sample.ts");
const AFTER: FileInfo = getSample("sample.js");

export const meta: ScenarioMeta = {
  code: "D06",
  title: "代码评审 · 左右并排",
  pain: "评审要同时看改前与改后：两栏高亮代码、行号对齐、评论挂在行上。插件无状态，两个实例各自判语言、各自滚。",
  plugs: [
    { fn: "createCodePreviewPlugin", why: "prism 按需加载语言包，ts 与 js 各自高亮，主题跟随系统" },
  ],
  note: "不自己做 diff 算法：文本比对是另一件事（Myers / patience diff）。预览层只负责「两段代码都显示对」，混进来会让包背上一份不该有的复杂度。",
};

const COMMENTS = [
  { line: 12, who: "reviewer.a", text: "这个类型断言能不能换成类型守卫？断言会掩盖真实的类型错误。" },
  { line: 28, who: "reviewer.b", text: "分支里 fallback 直接返回 null 会丢上下文，建议 throw 让上层拿到原因。" },
];

const ReviewScenario: React.FC = () => {
  const pane = (file: FileInfo, label: string, tone: string) => (
    <div style={{ minWidth: 0 }}>
      <div className="diff-head">
        <b style={{ fontWeight: 400, color: tone }}>{label}</b>
        <span>{file.name}</span>
      </div>
      <div className="stage-shell" style={{ height: 340 }}>
        <div className="stage-mount">
          <Preview file={file} containerStyle={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div className="diff-grid">
        {pane(BEFORE, "− 修改前", "#a92f24")}
        {pane(AFTER, "+ 修改后", "#186b39")}
      </div>

      <div className="demo-side-block" style={{ background: "var(--surface)" }}>
        <div className="side-head">
          行内评论
          <b>{COMMENTS.length}</b>
        </div>
        <ul className="demo-why-list" style={{ padding: "8px 10px" }}>
          {COMMENTS.map((c) => (
            <li key={c.line} style={{ gridTemplateColumns: "1fr", gap: 4 }}>
              <code style={{ fontSize: 11 }}>
                L{c.line} · {c.who}
              </code>
              <span style={{ fontSize: 12 }}>{c.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewScenario;
`,Ae=Object.assign({"./01-drop-to-preview.tsx":J,"./02-mail-attachments.tsx":te,"./03-doc-approval.tsx":oe,"./04-asset-library.tsx":fe,"./05-csv-import.tsx":xe,"./06-code-review.tsx":Se}),Le=Object.assign({"./01-drop-to-preview.tsx":Ne,"./02-mail-attachments.tsx":ke,"./03-doc-approval.tsx":Ce,"./04-asset-library.tsx":_e,"./05-csv-import.tsx":Me,"./06-code-review.tsx":Fe}),L=Object.entries(Ae).map(([t,i])=>{const a=t.replace(/^\.\//,"");return{id:a.replace(/^\d+-/,"").replace(/\.tsx$/,""),file:a,source:Le[t]??"",Module:i}}).sort((t,i)=>t.file.localeCompare(i.file));function ze(t){return Array.from(new Set(t.Module.meta.plugs.map(i=>i.fn)))}function De(t){const{meta:i}=t.Module,a=ze(t);return[`// ${i.code} ${i.title} · 最小装配`,`// ${i.pain}`,'import { FilePreviewCore, withPlugins } from "vane-file-preview";',...a.map(s=>`import { ${s} } from "vane-file-preview/custom-plugins/${s.replace(/^create/,"")}";`),"","const Preview = withPlugins(FilePreviewCore, [",...a.map(s=>`  ${s}(),`),"]);","","// 版式与数据由业务侧负责，这一层只决定「这个文件该由谁渲染」","<Preview file={file} containerStyle={{ height: 420 }} />;"].join(`
`)}const Ie=({entry:t,order:i})=>{const{meta:a}=t.Module,s=t.Module.default,[l,m]=p.useState("min"),[o,c]=p.useState(!1);return e.jsxs("article",{className:"scn-card","data-scenario":t.id,children:[e.jsxs("header",{className:"scn-head",children:[e.jsx("span",{className:"scn-code",children:a.code}),e.jsx("h3",{className:"scn-title",children:a.title}),e.jsxs("span",{className:"scn-ref",children:[String(i).padStart(2,"0")," · ",t.file]})]}),e.jsx("p",{className:"scn-pain",children:a.pain}),e.jsx("div",{className:"scn-stage",children:e.jsx(s,{})}),e.jsx("ul",{className:"scn-plugs",children:a.plugs.map(n=>e.jsxs("li",{className:"scn-plug",children:[e.jsx("code",{children:n.fn}),e.jsx("span",{children:n.why})]},n.fn+n.why))}),a.note?e.jsx("p",{className:"scn-note",children:a.note}):null,e.jsxs("div",{className:"demo-switch",role:"tablist","aria-label":`${a.title} 源码`,children:[e.jsx("button",{type:"button",role:"tab","aria-selected":l==="min",className:l==="min"?"is-active":"",onClick:()=>{m("min"),c(!0)},children:"最小装配"}),e.jsx("button",{type:"button",role:"tab","aria-selected":l==="full",className:l==="full"?"is-active":"",onClick:()=>{m("full"),c(!0)},children:"本页源码"}),e.jsx("button",{type:"button",role:"tab","aria-selected":!1,onClick:()=>c(n=>!n),style:{marginLeft:"auto"},children:o?"收起代码":"展开代码"})]}),o?e.jsx("div",{className:"scn-code-wrap",children:e.jsx(K,{code:l==="min"?De(t):t.source,title:l==="min"?`${t.id}.minimal.tsx`:t.file,collapseAfter:l==="min"?0:32,maxHeight:460},l)}):null]})},Te=()=>{const[t,i]=p.useState(null);return e.jsxs("div",{className:"page",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:"场景示例"}),e.jsxs("p",{className:"page-desc",children:[L.length," 个真实版式：上传即预览、邮件附件、文档审批、素材库、数据导入、代码评审。 每张卡都能点、能拖、能切换，预览器装的是同一套组件 —— 不是截图。"]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginTop:12},children:[e.jsx("button",{type:"button",className:"btn btn-mini",onClick:()=>{const a=H(document);i(X(a,document.querySelectorAll("[data-scenario]").length))},children:"量一次几何"}),e.jsx("span",{className:"muted",style:{fontSize:11.5},children:t??"与 scripts/audit-pages.mjs 同一套判据"})]})]}),e.jsx("div",{className:"scn-list",children:L.map((a,s)=>e.jsx(Ie,{entry:a,order:s+1},a.id))})]})};export{Te as ScenariosPage};
