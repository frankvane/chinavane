import{r as o,j as e}from"./index-CKH9Ek1I.js";import{C as P}from"./ComponentTemplate-B8dTsNLj.js";const h=typeof window>"u",w=n=>new Promise(r=>setTimeout(r,n)),E=n=>{const r=["技术","产品","设计","运营","管理"],t=["React","TypeScript","Node.js","GraphQL","Docker","AWS","MongoDB","Redis"];return Array.from({length:n},(m,l)=>({id:l+1,title:`深入理解 ${t[l%t.length]} 的核心概念与实践应用`,content:`这是一篇关于 ${t[l%t.length]} 的详细文章。文章从基础概念开始，逐步深入到高级特性和实际应用场景。内容包括：

1. 基础概念介绍
2. 核心特性解析
3. 实际应用案例
4. 最佳实践总结
5. 常见问题解答

通过本文，读者可以全面掌握 ${t[l%t.length]} 的使用方法和优化技巧。`,author:`技术专家 ${l%5+1}`,publishDate:new Date(2023,l%12,l%28+1).toISOString().split("T")[0],category:r[l%r.length],tags:[t[l%t.length],t[(l+1)%t.length]],readTime:Math.floor(Math.random()*15)+5,views:Math.floor(Math.random()*1e4)+100,likes:Math.floor(Math.random()*500)+10}))},H=n=>({id:n,name:`技术专家 ${n}`,avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${n}`,bio:`资深${["前端","后端","全栈","架构","DevOps"][n%5]}工程师，专注于现代Web技术栈的研究与实践。`,followers:Math.floor(Math.random()*5e3)+100,following:Math.floor(Math.random()*1e3)+50,articles:Math.floor(Math.random()*100)+10}),A=async(n=1,r)=>{await w(500+Math.random()*500);const t=E(100),m=r?t.filter(s=>s.category===r):t,l=(n-1)*10;return{articles:m.slice(l,l+10),total:m.length}},I=async n=>(await w(300+Math.random()*300),E(100).find(t=>t.id===n)||null),R=async n=>(await w(200+Math.random()*200),H(n)),C=(n,r)=>{if(h)return;let t=document.querySelector(`meta[name="${n}"]`);t||(t=document.createElement("meta"),t.name=n,document.head.appendChild(t)),t.content=r},S=(n,r)=>{if(h)return;let t=document.querySelector(`meta[property="${n}"]`);t||(t=document.createElement("meta"),t.setAttribute("property",n),document.head.appendChild(t)),t.content=r},_=n=>{if(h)return;let r=document.querySelector('link[rel="canonical"]');r||(r=document.createElement("link"),r.rel="canonical",document.head.appendChild(r)),r.href=n},O=n=>{var r;return h?null:((r=window.__SSR_DATA__)==null?void 0:r[n])||null},N=(n,r,t=[])=>{const[m,l]=o.useState(null),[a,s]=o.useState(!h),[p,d]=o.useState(null),u=o.useRef(!1),g=o.useRef(n),b=o.useCallback(()=>{u.current=!1,s(!0),d(null)},[]);return o.useEffect(()=>{if(h)return;g.current!==n&&(u.current=!1,l(null),d(null),g.current=n);const y=O(n);if(y&&!u.current){l(y),s(!1),u.current=!0;return}u.current||(s(!0),d(null),r().then(c=>{l(c),s(!1),u.current=!0}).catch(c=>{d(c.message||"数据获取失败"),s(!1)}))},[n,r,...t]),{data:m,loading:a,error:p,refetch:b}},M=n=>{o.useEffect(()=>{h||(document.title=n.title,C("description",n.description),C("keywords",n.keywords.join(", ")),S("og:title",n.title),S("og:description",n.description),S("og:image",n.ogImage),S("og:url",n.canonicalUrl),_(n.canonicalUrl))},[n])},$=()=>{const[n,r]=o.useState(!1);return o.useEffect(()=>{r(!0)},[]),n},L=()=>{const n=o.useRef(new Map),r=o.useRef(new Set),t=o.useCallback(async(s,p)=>{if(n.current.has(s)||r.current.has(s))return n.current.get(s)||null;r.current.add(s);try{const d=await p();return n.current.set(s,d),r.current.delete(s),d}catch(d){return r.current.delete(s),console.error(`预加载失败 [${s}]:`,d),null}},[]),m=o.useCallback(s=>n.current.get(s)||null,[]),l=o.useCallback(s=>{s?n.current.delete(s):n.current.clear()},[]),a=o.useCallback(s=>r.current.has(s),[]);return{preload:t,getCache:m,clearCache:l,isLoading:a}},U=()=>{const[n,r]=o.useState(""),[t,m]=o.useState(1),l=$(),{data:a,loading:s,error:p,refetch:d}=N(`articles_${n}_${t}`,()=>A(t,n||void 0),[n,t]),u=o.useMemo(()=>({title:n?`${n}分类文章 - 技术博客`:"技术博客 - 最新文章",description:n?`浏览${n}分类下的所有技术文章，包含最新的技术趋势和实践经验。`:"技术博客汇集了最新的前端、后端、架构等技术文章，助您提升技术水平。",keywords:n?[n,"技术文章","编程","开发"]:["技术博客","前端","后端","全栈开发","React","Node.js"],ogImage:"https://example.com/og-image.jpg",canonicalUrl:`https://example.com/articles${n?`?category=${n}`:""}`}),[n]);M(u);const g=["技术","产品","设计","运营","管理"],b=o.useCallback(c=>{console.log("切换分类:",c),r(c),m(1)},[]),f=o.useCallback(c=>{console.log("切换页面:",c),m(c)},[]),y=`articles_${n}_${t}`;return console.log("当前缓存键:",y),console.log("当前分类:",n),console.log("当前页面:",t),console.log("文章数据:",a),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础 SSR 演示"}),e.jsxs("div",{className:"mb-4 p-3 bg-blue-50 border border-blue-200 rounded",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${l?"bg-green-500":"bg-yellow-500"}`}),e.jsx("span",{className:"text-sm font-medium",children:l?"客户端已水合":"服务端渲染中"})]}),e.jsx("p",{className:"text-xs text-blue-700 mt-1",children:l?"页面已完成水合，所有交互功能可用":"页面正在从服务端渲染状态转换到客户端状态"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"文章分类"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:()=>b(""),className:`px-3 py-1 text-sm rounded-full border transition-colors ${n===""?"bg-blue-500 text-white border-blue-500":"bg-white text-gray-700 border-gray-300 hover:border-gray-400"}`,children:"全部"}),g.map(c=>e.jsx("button",{onClick:()=>b(c),className:`px-3 py-1 text-sm rounded-full border transition-colors ${n===c?"bg-blue-500 text-white border-blue-500":"bg-white text-gray-700 border-gray-300 hover:border-gray-400"}`,children:c},c))]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h4",{className:"font-medium text-gray-800",children:"文章列表"}),s&&e.jsxs("div",{className:"flex items-center text-sm text-blue-600",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"}),"加载中..."]})]}),p?e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-800",children:[p,e.jsx("button",{onClick:d,className:"ml-2 text-sm bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700",children:"重试"})]}):a!=null&&a.articles?e.jsx("div",{className:"space-y-4",children:a.articles.map(c=>e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsxs("div",{className:"flex items-start justify-between mb-2",children:[e.jsx("h5",{className:"font-semibold text-gray-900 flex-1",children:c.title}),e.jsx("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2",children:c.category})]}),e.jsx("p",{className:"text-sm text-gray-600 mb-3 line-clamp-2",children:c.content.split(`
`)[0]}),e.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-500",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("span",{children:["作者: ",c.author]}),e.jsx("span",{children:c.publishDate}),e.jsxs("span",{children:[c.readTime," 分钟阅读"]})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("span",{children:["👁 ",c.views]}),e.jsxs("span",{children:["👍 ",c.likes]})]})]}),e.jsx("div",{className:"flex space-x-2 mt-2",children:c.tags.map(v=>e.jsx("span",{className:"text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded",children:v},v))})]},c.id))}):e.jsx("div",{className:"p-8 bg-gray-50 border border-gray-200 rounded text-center text-gray-600",children:l?"暂无文章":"正在加载文章..."})]}),a&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["共 ",a.total," 篇文章"]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>f(Math.max(1,t-1)),disabled:t===1||s,className:"px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",children:"上一页"}),e.jsx("span",{className:"px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded",children:t}),e.jsx("button",{onClick:()=>f(t+1),disabled:t*10>=a.total||s,className:"px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",children:"下一页"})]})]}),e.jsxs("div",{className:"mt-6 p-3 bg-green-50 border border-green-200 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"SSR 基础功能："}),e.jsxs("div",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("p",{children:"• 服务端预渲染：提升首屏加载速度和 SEO"}),e.jsx("p",{children:"• 数据预取：在服务端获取数据，减少客户端请求"}),e.jsx("p",{children:"• 水合过程：客户端接管服务端渲染的 HTML"}),e.jsx("p",{children:"• SEO 优化：动态生成 meta 标签和结构化数据"})]})]})]})})},q=()=>{const[n,r]=o.useState(null),t=$(),{preload:m,getCache:l}=L(),{data:a,loading:s,error:p}=N(n?`article_${n}`:"",()=>n?I(n):Promise.resolve(null),[n]),{data:d,loading:u}=N(a?`user_${a.author}`:"",()=>{var i;return a?R(parseInt(((i=a.author.match(/\d+/))==null?void 0:i[0])||"1")):Promise.resolve(null)},[a==null?void 0:a.author]),{data:g,loading:b}=N("recent_articles",()=>A(1),[]),f=o.useMemo(()=>a?{title:`${a.title} - 技术博客`,description:a.content.substring(0,160)+"...",keywords:[...a.tags,"技术文章","编程"],ogImage:`https://example.com/og-article-${a.id}.jpg`,canonicalUrl:`https://example.com/article/${a.id}`}:{title:"同构应用演示 - 技术博客",description:"展示同构应用的服务端渲染和客户端水合过程，包含动态路由和数据获取。",keywords:["同构应用","SSR","服务端渲染","React"],ogImage:"https://example.com/og-isomorphic.jpg",canonicalUrl:"https://example.com/isomorphic-demo"},[a]);M(f);const y=o.useCallback(async i=>{l(`user_${i}`)||await m(`user_${i}`,()=>R(i))},[m,l]),c=o.useCallback(i=>{r(i),t&&window.history.pushState({},"",`/article/${i}`)},[t]),v=o.useCallback(()=>{r(null),t&&window.history.pushState({},"","/")},[t]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"同构应用演示"}),e.jsxs("div",{className:"mb-6 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${t?"bg-green-500":"bg-yellow-500"}`}),e.jsx("span",{className:"text-sm font-medium",children:"水合状态"})]}),e.jsx("p",{className:"text-xs text-blue-700",children:t?"已完成水合":"正在水合中"})]}),e.jsxs("div",{className:"p-3 bg-green-50 border border-green-200 rounded",children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${typeof window<"u"?"bg-green-500":"bg-red-500"}`}),e.jsx("span",{className:"text-sm font-medium",children:"运行环境"})]}),e.jsx("p",{className:"text-xs text-green-700",children:typeof window<"u"?"客户端":"服务端"})]}),e.jsxs("div",{className:"p-3 bg-purple-50 border border-purple-200 rounded",children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${n?"bg-blue-500":"bg-gray-400"}`}),e.jsx("span",{className:"text-sm font-medium",children:"当前路由"})]}),e.jsx("p",{className:"text-xs text-purple-700",children:n?`/article/${n}`:"/"})]})]}),e.jsx("div",{className:"mb-6",children:e.jsxs("nav",{className:"flex space-x-4",children:[e.jsx("button",{onClick:v,className:`px-3 py-2 text-sm rounded transition-colors ${n?"bg-gray-100 text-gray-700 hover:bg-gray-200":"bg-blue-500 text-white"}`,children:"首页"}),n&&e.jsx("button",{onClick:v,className:"px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200",children:"← 返回列表"})]})}),n?e.jsx("div",{className:"space-y-6",children:s?e.jsxs("div",{className:"p-8 bg-gray-50 border border-gray-200 rounded text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"}),e.jsx("p",{className:"text-gray-600",children:"加载文章详情..."})]}):p?e.jsx("div",{className:"p-4 bg-red-50 border border-red-200 rounded text-red-800",children:p}):a?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-gray-200 pb-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:a.title}),e.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-600",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("span",{children:["作者: ",a.author]}),e.jsx("span",{children:a.publishDate}),e.jsxs("span",{children:[a.readTime," 分钟阅读"]})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("span",{children:["👁 ",a.views]}),e.jsxs("span",{children:["👍 ",a.likes]})]})]}),e.jsxs("div",{className:"flex space-x-2 mt-3",children:[e.jsx("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:a.category}),a.tags.map(i=>e.jsx("span",{className:"text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded",children:i},i))]})]}),e.jsx("div",{className:"prose max-w-none",children:e.jsx("div",{className:"whitespace-pre-line text-gray-800 leading-relaxed",children:a.content})}),u?e.jsx("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded",children:e.jsxs("div",{className:"animate-pulse flex space-x-4",children:[e.jsx("div",{className:"rounded-full bg-gray-300 h-12 w-12"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-1/4"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-3/4"})]})]})}):d?e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"关于作者"}),e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("img",{src:d.avatar,alt:d.name,className:"w-12 h-12 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:d.name}),e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:d.bio}),e.jsxs("div",{className:"flex items-center space-x-4 text-xs text-gray-500",children:[e.jsxs("span",{children:["关注者: ",d.followers]}),e.jsxs("span",{children:["关注中: ",d.following]}),e.jsxs("span",{children:["文章: ",d.articles]})]})]})]})]}):null]}):e.jsx("div",{className:"p-8 bg-gray-50 border border-gray-200 rounded text-center text-gray-600",children:"文章不存在"})}):e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"最新文章"}),b?e.jsx("div",{className:"space-y-4",children:Array.from({length:5}).map((i,x)=>e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded animate-pulse",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded mb-2"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded mb-2"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-3/4"})]},x))}):g!=null&&g.articles?e.jsx("div",{className:"space-y-4",children:g.articles.slice(0,8).map(i=>e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer",onClick:()=>c(i.id),onMouseEnter:()=>{var j;const x=parseInt(((j=i.author.match(/\d+/))==null?void 0:j[0])||"1");y(x)},children:[e.jsxs("div",{className:"flex items-start justify-between mb-2",children:[e.jsx("h3",{className:"font-semibold text-gray-900 flex-1 hover:text-blue-600 transition-colors",children:i.title}),e.jsx("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2",children:i.category})]}),e.jsx("p",{className:"text-sm text-gray-600 mb-3 line-clamp-2",children:i.content.split(`
`)[0]}),e.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-500",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("span",{children:["作者: ",i.author]}),e.jsx("span",{children:i.publishDate}),e.jsxs("span",{children:[i.readTime," 分钟阅读"]})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("span",{children:["👁 ",i.views]}),e.jsxs("span",{children:["👍 ",i.likes]})]})]}),e.jsx("div",{className:"flex space-x-2 mt-2",children:i.tags.map(x=>e.jsx("span",{className:"text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded",children:x},x))})]},i.id))}):e.jsx("div",{className:"p-8 bg-gray-50 border border-gray-200 rounded text-center text-gray-600",children:"暂无文章"})]}),e.jsxs("div",{className:"mt-6 p-3 bg-purple-50 border border-purple-200 rounded",children:[e.jsx("h4",{className:"font-medium text-purple-800 mb-2",children:"同构应用功能："}),e.jsxs("div",{className:"text-sm text-purple-700 space-y-1",children:[e.jsx("p",{children:"• 统一代码库：服务端和客户端使用相同的 React 组件"}),e.jsx("p",{children:"• 动态路由：支持客户端路由和服务端路由"}),e.jsx("p",{children:"• 数据预取：根据路由预取所需数据"}),e.jsx("p",{children:"• 渐进增强：从静态 HTML 逐步增强为交互式应用"})]})]})]})})},B=`import React, { useCallback, useMemo, useState } from "react";
import { useHydration, useSEO, useSSRData } from "./hooks";

import { SEOData } from "./types";
import { fetchArticles } from "./utils";

// 基础 SSR 演示组件
const BasicSSRDemo: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const isHydrated = useHydration();

  // 使用 SSR 数据预取
  const {
    data: articlesData,
    loading,
    error,
    refetch,
  } = useSSRData(
    \`articles_\${selectedCategory}_\${currentPage}\`,
    () => fetchArticles(currentPage, selectedCategory || undefined),
    [selectedCategory, currentPage]
  );

  // SEO 优化
  const seoData = useMemo(
    (): SEOData => ({
      title: selectedCategory
        ? \`\${selectedCategory}分类文章 - 技术博客\`
        : "技术博客 - 最新文章",
      description: selectedCategory
        ? \`浏览\${selectedCategory}分类下的所有技术文章，包含最新的技术趋势和实践经验。\`
        : "技术博客汇集了最新的前端、后端、架构等技术文章，助您提升技术水平。",
      keywords: selectedCategory
        ? [selectedCategory, "技术文章", "编程", "开发"]
        : ["技术博客", "前端", "后端", "全栈开发", "React", "Node.js"],
      ogImage: "https://example.com/og-image.jpg",
      canonicalUrl: \`https://example.com/articles\${
        selectedCategory ? \`?category=\${selectedCategory}\` : ""
      }\`,
    }),
    [selectedCategory]
  );

  useSEO(seoData);

  const categories = ["技术", "产品", "设计", "运营", "管理"];

  const handleCategoryChange = useCallback((category: string) => {
    console.log("切换分类:", category); // 调试日志
    setSelectedCategory(category);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    console.log("切换页面:", page); // 调试日志
    setCurrentPage(page);
  }, []);

  // 调试信息：显示当前的缓存键和状态
  const cacheKey = \`articles_\${selectedCategory}_\${currentPage}\`;
  console.log("当前缓存键:", cacheKey);
  console.log("当前分类:", selectedCategory);
  console.log("当前页面:", currentPage);
  console.log("文章数据:", articlesData);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">基础 SSR 演示</h3>

        {/* 水合状态指示 */}
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
          <div className="flex items-center space-x-2">
            <div
              className={\`w-3 h-3 rounded-full \${
                isHydrated ? "bg-green-500" : "bg-yellow-500"
              }\`}
            ></div>
            <span className="text-sm font-medium">
              {isHydrated ? "客户端已水合" : "服务端渲染中"}
            </span>
          </div>
          <p className="text-xs text-blue-700 mt-1">
            {isHydrated
              ? "页面已完成水合，所有交互功能可用"
              : "页面正在从服务端渲染状态转换到客户端状态"}
          </p>
        </div>

        {/* 分类筛选 */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-3">文章分类</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryChange("")}
              className={\`px-3 py-1 text-sm rounded-full border transition-colors \${
                selectedCategory === ""
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }\`}
            >
              全部
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={\`px-3 py-1 text-sm rounded-full border transition-colors \${
                  selectedCategory === category
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                }\`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 文章列表 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-800">文章列表</h4>
            {loading && (
              <div className="flex items-center text-sm text-blue-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"></div>
                加载中...
              </div>
            )}
          </div>

          {error ? (
            <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800">
              {error}
              <button
                onClick={refetch}
                className="ml-2 text-sm bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                重试
              </button>
            </div>
          ) : articlesData?.articles ? (
            <div className="space-y-4">
              {articlesData.articles.map((article) => (
                <div
                  key={article.id}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-semibold text-gray-900 flex-1">
                      {article.title}
                    </h5>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2">
                      {article.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {article.content.split("\\n")[0]}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>作者: {article.author}</span>
                      <span>{article.publishDate}</span>
                      <span>{article.readTime} 分钟阅读</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span>👁 {article.views}</span>
                      <span>👍 {article.likes}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 bg-gray-50 border border-gray-200 rounded text-center text-gray-600">
              {isHydrated ? "暂无文章" : "正在加载文章..."}
            </div>
          )}
        </div>

        {/* 分页 */}
        {articlesData && (
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              共 {articlesData.total} 篇文章
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1 || loading}
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                上一页
              </button>
              <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded">
                {currentPage}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage * 10 >= articlesData.total || loading}
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                下一页
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 p-3 bg-green-50 border border-green-200 rounded">
          <h4 className="font-medium text-green-800 mb-2">SSR 基础功能：</h4>
          <div className="text-sm text-green-700 space-y-1">
            <p>• 服务端预渲染：提升首屏加载速度和 SEO</p>
            <p>• 数据预取：在服务端获取数据，减少客户端请求</p>
            <p>• 水合过程：客户端接管服务端渲染的 HTML</p>
            <p>• SEO 优化：动态生成 meta 标签和结构化数据</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicSSRDemo;
`,F=`import React, { useCallback, useMemo, useState } from "react";
import { SEOData, User } from "./types";
import { fetchArticle, fetchArticles, fetchUser } from "./utils";
import { useHydration, usePreloader, useSEO, useSSRData } from "./hooks";

// 同构应用演示组件
const IsomorphicAppDemo: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(
    null
  );
  const isHydrated = useHydration();
  const { preload, getCache } = usePreloader<User>();

  // 文章详情数据
  const {
    data: article,
    loading: articleLoading,
    error: articleError,
  } = useSSRData(
    selectedArticleId ? \`article_\${selectedArticleId}\` : "",
    () =>
      selectedArticleId
        ? fetchArticle(selectedArticleId)
        : Promise.resolve(null),
    [selectedArticleId]
  );

  // 作者信息数据
  const { data: author, loading: authorLoading } = useSSRData(
    article ? \`user_\${article.author}\` : "",
    () =>
      article
        ? fetchUser(parseInt(article.author.match(/\\d+/)?.[0] || "1"))
        : Promise.resolve(null),
    [article?.author]
  );

  // 文章列表数据
  const { data: articlesData, loading: articlesLoading } = useSSRData(
    "recent_articles",
    () => fetchArticles(1),
    []
  );

  // 动态 SEO
  const seoData = useMemo((): SEOData => {
    if (article) {
      return {
        title: \`\${article.title} - 技术博客\`,
        description: article.content.substring(0, 160) + "...",
        keywords: [...article.tags, "技术文章", "编程"],
        ogImage: \`https://example.com/og-article-\${article.id}.jpg\`,
        canonicalUrl: \`https://example.com/article/\${article.id}\`,
      };
    }

    return {
      title: "同构应用演示 - 技术博客",
      description:
        "展示同构应用的服务端渲染和客户端水合过程，包含动态路由和数据获取。",
      keywords: ["同构应用", "SSR", "服务端渲染", "React"],
      ogImage: "https://example.com/og-isomorphic.jpg",
      canonicalUrl: "https://example.com/isomorphic-demo",
    };
  }, [article]);

  useSEO(seoData);

  // 预加载用户数据
  const preloadUserData = useCallback(
    async (userId: number) => {
      const cachedUser = getCache(\`user_\${userId}\`);
      if (!cachedUser) {
        await preload(\`user_\${userId}\`, () => fetchUser(userId));
      }
    },
    [preload, getCache]
  );

  // 路由模拟
  const navigateToArticle = useCallback(
    (articleId: number) => {
      setSelectedArticleId(articleId);
      // 模拟路由变化
      if (isHydrated) {
        window.history.pushState({}, "", \`/article/\${articleId}\`);
      }
    },
    [isHydrated]
  );

  const navigateToHome = useCallback(() => {
    setSelectedArticleId(null);
    if (isHydrated) {
      window.history.pushState({}, "", "/");
    }
  }, [isHydrated]);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">同构应用演示</h3>

        {/* 应用状态指示 */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded">
            <div className="flex items-center space-x-2 mb-1">
              <div
                className={\`w-3 h-3 rounded-full \${
                  isHydrated ? "bg-green-500" : "bg-yellow-500"
                }\`}
              ></div>
              <span className="text-sm font-medium">水合状态</span>
            </div>
            <p className="text-xs text-blue-700">
              {isHydrated ? "已完成水合" : "正在水合中"}
            </p>
          </div>

          <div className="p-3 bg-green-50 border border-green-200 rounded">
            <div className="flex items-center space-x-2 mb-1">
              <div
                className={\`w-3 h-3 rounded-full \${
                  typeof window !== "undefined" ? "bg-green-500" : "bg-red-500"
                }\`}
              ></div>
              <span className="text-sm font-medium">运行环境</span>
            </div>
            <p className="text-xs text-green-700">
              {typeof window !== "undefined" ? "客户端" : "服务端"}
            </p>
          </div>

          <div className="p-3 bg-purple-50 border border-purple-200 rounded">
            <div className="flex items-center space-x-2 mb-1">
              <div
                className={\`w-3 h-3 rounded-full \${
                  selectedArticleId ? "bg-blue-500" : "bg-gray-400"
                }\`}
              ></div>
              <span className="text-sm font-medium">当前路由</span>
            </div>
            <p className="text-xs text-purple-700">
              {selectedArticleId ? \`/article/\${selectedArticleId}\` : "/"}
            </p>
          </div>
        </div>

        {/* 导航 */}
        <div className="mb-6">
          <nav className="flex space-x-4">
            <button
              onClick={navigateToHome}
              className={\`px-3 py-2 text-sm rounded transition-colors \${
                !selectedArticleId
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }\`}
            >
              首页
            </button>
            {selectedArticleId && (
              <button
                onClick={navigateToHome}
                className="px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
              >
                ← 返回列表
              </button>
            )}
          </nav>
        </div>

        {/* 内容区域 */}
        {selectedArticleId ? (
          // 文章详情页
          <div className="space-y-6">
            {articleLoading ? (
              <div className="p-8 bg-gray-50 border border-gray-200 rounded text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                <p className="text-gray-600">加载文章详情...</p>
              </div>
            ) : articleError ? (
              <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800">
                {articleError}
              </div>
            ) : article ? (
              <div className="space-y-6">
                {/* 文章头部 */}
                <div className="border-b border-gray-200 pb-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h1>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <span>作者: {article.author}</span>
                      <span>{article.publishDate}</span>
                      <span>{article.readTime} 分钟阅读</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span>👁 {article.views}</span>
                      <span>👍 {article.likes}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 文章内容 */}
                <div className="prose max-w-none">
                  <div className="whitespace-pre-line text-gray-800 leading-relaxed">
                    {article.content}
                  </div>
                </div>

                {/* 作者信息 */}
                {authorLoading ? (
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded">
                    <div className="animate-pulse flex space-x-4">
                      <div className="rounded-full bg-gray-300 h-12 w-12"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                ) : author ? (
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      关于作者
                    </h3>
                    <div className="flex items-start space-x-4">
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">
                          {author.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {author.bio}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>关注者: {author.followers}</span>
                          <span>关注中: {author.following}</span>
                          <span>文章: {author.articles}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="p-8 bg-gray-50 border border-gray-200 rounded text-center text-gray-600">
                文章不存在
              </div>
            )}
          </div>
        ) : (
          // 文章列表页
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">最新文章</h2>

            {articlesLoading ? (
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-50 border border-gray-200 rounded animate-pulse"
                  >
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : articlesData?.articles ? (
              <div className="space-y-4">
                {articlesData.articles.slice(0, 8).map((article) => (
                  <div
                    key={article.id}
                    className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigateToArticle(article.id)}
                    onMouseEnter={() => {
                      // 预加载作者数据
                      const authorId = parseInt(
                        article.author.match(/\\d+/)?.[0] || "1"
                      );
                      preloadUserData(authorId);
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 flex-1 hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2">
                        {article.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {article.content.split("\\n")[0]}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>作者: {article.author}</span>
                        <span>{article.publishDate}</span>
                        <span>{article.readTime} 分钟阅读</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span>👁 {article.views}</span>
                        <span>👍 {article.likes}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 bg-gray-50 border border-gray-200 rounded text-center text-gray-600">
                暂无文章
              </div>
            )}
          </div>
        )}

        <div className="mt-6 p-3 bg-purple-50 border border-purple-200 rounded">
          <h4 className="font-medium text-purple-800 mb-2">同构应用功能：</h4>
          <div className="text-sm text-purple-700 space-y-1">
            <p>• 统一代码库：服务端和客户端使用相同的 React 组件</p>
            <p>• 动态路由：支持客户端路由和服务端路由</p>
            <p>• 数据预取：根据路由预取所需数据</p>
            <p>• 渐进增强：从静态 HTML 逐步增强为交互式应用</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsomorphicAppDemo;
`,k=`import { SEOData, SSRDataResult } from "./types";
import {
  getSSRData,
  isServer,
  updateCanonicalUrl,
  updateMetaTag,
  updatePropertyTag,
} from "./utils";
import { useCallback, useEffect, useRef, useState } from "react";

// SSR 数据预取 Hook
export const useSSRData = <T>(
  key: string,
  fetcher: () => Promise<T>,
  deps: any[] = []
): SSRDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(!isServer);
  const [error, setError] = useState<string | null>(null);
  const fetchedRef = useRef(false);
  const currentKeyRef = useRef(key);

  // 重置函数
  const refetch = useCallback(() => {
    fetchedRef.current = false;
    setLoading(true);
    setError(null);
  }, []);

  useEffect(() => {
    if (isServer) return;

    // 检查缓存键是否发生变化
    const keyChanged = currentKeyRef.current !== key;
    if (keyChanged) {
      // 缓存键变化时，重置状态
      fetchedRef.current = false;
      setData(null);
      setError(null);
      currentKeyRef.current = key;
    }

    // 检查是否有 SSR 预取的数据
    const ssrData = getSSRData(key);
    if (ssrData && !fetchedRef.current) {
      setData(ssrData);
      setLoading(false);
      fetchedRef.current = true;
      return;
    }

    // 客户端数据获取
    if (!fetchedRef.current) {
      setLoading(true);
      setError(null);

      fetcher()
        .then((result) => {
          setData(result);
          setLoading(false);
          fetchedRef.current = true;
        })
        .catch((err) => {
          setError(err.message || "数据获取失败");
          setLoading(false);
        });
    }
  }, [key, fetcher, ...deps]);

  return { data, loading, error, refetch };
};

// SEO Hook
export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    if (isServer) return;

    // 更新页面标题
    document.title = seoData.title;

    // 更新 meta 标签
    updateMetaTag("description", seoData.description);
    updateMetaTag("keywords", seoData.keywords.join(", "));
    updatePropertyTag("og:title", seoData.title);
    updatePropertyTag("og:description", seoData.description);
    updatePropertyTag("og:image", seoData.ogImage);
    updatePropertyTag("og:url", seoData.canonicalUrl);

    // 更新 canonical URL
    updateCanonicalUrl(seoData.canonicalUrl);
  }, [seoData]);
};

// 水合检测 Hook
export const useHydration = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
};

// 客户端路由 Hook
export const useClientRouter = () => {
  const [currentPath, setCurrentPath] = useState(() => {
    if (isServer) return "/";
    return window.location.pathname;
  });

  const navigate = useCallback((path: string) => {
    if (isServer) return;

    setCurrentPath(path);
    window.history.pushState({}, "", path);

    // 触发自定义路由变化事件
    window.dispatchEvent(new CustomEvent("routechange", { detail: { path } }));
  }, []);

  const goBack = useCallback(() => {
    if (isServer) return;
    window.history.back();
  }, []);

  useEffect(() => {
    if (isServer) return;

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return { currentPath, navigate, goBack };
};

// 数据预加载 Hook
export const usePreloader = <T>() => {
  const cacheRef = useRef<Map<string, T>>(new Map());
  const loadingRef = useRef<Set<string>>(new Set());

  const preload = useCallback(
    async (key: string, fetcher: () => Promise<T>) => {
      // 如果已经缓存或正在加载，直接返回
      if (cacheRef.current.has(key) || loadingRef.current.has(key)) {
        return cacheRef.current.get(key) || null;
      }

      loadingRef.current.add(key);

      try {
        const data = await fetcher();
        cacheRef.current.set(key, data);
        loadingRef.current.delete(key);
        return data;
      } catch (error) {
        loadingRef.current.delete(key);
        console.error(\`预加载失败 [\${key}]:\`, error);
        return null;
      }
    },
    []
  );

  const getCache = useCallback((key: string) => {
    return cacheRef.current.get(key) || null;
  }, []);

  const clearCache = useCallback((key?: string) => {
    if (key) {
      cacheRef.current.delete(key);
    } else {
      cacheRef.current.clear();
    }
  }, []);

  const isLoading = useCallback((key: string) => {
    return loadingRef.current.has(key);
  }, []);

  return { preload, getCache, clearCache, isLoading };
};

// 性能监控 Hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    renderTime: 0,
    hydrationTime: 0,
    dataFetchTime: 0,
  });

  const startTimer = useCallback((name: string) => {
    if (isServer) return () => {};

    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;

      setMetrics((prev) => ({
        ...prev,
        [name]: duration,
      }));
    };
  }, []);

  const measureRender = useCallback(
    () => startTimer("renderTime"),
    [startTimer]
  );
  const measureHydration = useCallback(
    () => startTimer("hydrationTime"),
    [startTimer]
  );
  const measureDataFetch = useCallback(
    () => startTimer("dataFetchTime"),
    [startTimer]
  );

  return {
    metrics,
    measureRender,
    measureHydration,
    measureDataFetch,
  };
};
`,D=`// SSR 和同构应用相关的类型定义\r
\r
// 文章数据类型\r
export interface Article {\r
  id: number;\r
  title: string;\r
  content: string;\r
  author: string;\r
  publishDate: string;\r
  category: string;\r
  tags: string[];\r
  readTime: number;\r
  views: number;\r
  likes: number;\r
}\r
\r
// 用户数据类型\r
export interface User {\r
  id: number;\r
  name: string;\r
  avatar: string;\r
  bio: string;\r
  followers: number;\r
  following: number;\r
  articles: number;\r
}\r
\r
// SEO 数据类型\r
export interface SEOData {\r
  title: string;\r
  description: string;\r
  keywords: string[];\r
  ogImage: string;\r
  canonicalUrl: string;\r
}\r
\r
// SSR 数据获取结果类型\r
export interface SSRDataResult<T> {\r
  data: T | null;\r
  loading: boolean;\r
  error: string | null;\r
  refetch: () => void;\r
}\r
\r
// 文章列表响应类型\r
export interface ArticlesResponse {\r
  articles: Article[];\r
  total: number;\r
}\r
\r
// 路由状态类型\r
export interface RouteState {\r
  path: string;\r
  params: Record<string, string>;\r
  query: Record<string, string>;\r
}\r
\r
// 应用状态类型\r
export interface AppState {\r
  isHydrated: boolean;\r
  isServer: boolean;\r
  currentRoute: string;\r
  userProfiles: Map<number, User>;\r
}`,T=`import { Article, User, ArticlesResponse } from './types';

// 环境检测
export const isServer = typeof window === 'undefined';
export const isBrowser = typeof window !== 'undefined';

// 延迟函数
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 模拟数据生成
export const generateArticles = (count: number): Article[] => {
  const categories = ['技术', '产品', '设计', '运营', '管理'];
  const tags = ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Docker', 'AWS', 'MongoDB', 'Redis'];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: \`深入理解 \${tags[i % tags.length]} 的核心概念与实践应用\`,
    content: \`这是一篇关于 \${tags[i % tags.length]} 的详细文章。文章从基础概念开始，逐步深入到高级特性和实际应用场景。内容包括：\\n\\n1. 基础概念介绍\\n2. 核心特性解析\\n3. 实际应用案例\\n4. 最佳实践总结\\n5. 常见问题解答\\n\\n通过本文，读者可以全面掌握 \${tags[i % tags.length]} 的使用方法和优化技巧。\`,
    author: \`技术专家 \${(i % 5) + 1}\`,
    publishDate: new Date(2023, i % 12, (i % 28) + 1).toISOString().split('T')[0],
    category: categories[i % categories.length],
    tags: [tags[i % tags.length], tags[(i + 1) % tags.length]],
    readTime: Math.floor(Math.random() * 15) + 5,
    views: Math.floor(Math.random() * 10000) + 100,
    likes: Math.floor(Math.random() * 500) + 10
  }));
};

export const generateUser = (id: number): User => ({
  id,
  name: \`技术专家 \${id}\`,
  avatar: \`https://api.dicebear.com/7.x/avataaars/svg?seed=\${id}\`,
  bio: \`资深\${['前端', '后端', '全栈', '架构', 'DevOps'][id % 5]}工程师，专注于现代Web技术栈的研究与实践。\`,
  followers: Math.floor(Math.random() * 5000) + 100,
  following: Math.floor(Math.random() * 1000) + 50,
  articles: Math.floor(Math.random() * 100) + 10
});

// 模拟 API 调用
export const fetchArticles = async (page: number = 1, category?: string): Promise<ArticlesResponse> => {
  await delay(500 + Math.random() * 500);
  const allArticles = generateArticles(100);
  const filteredArticles = category
    ? allArticles.filter(article => article.category === category)
    : allArticles;

  const startIndex = (page - 1) * 10;
  const articles = filteredArticles.slice(startIndex, startIndex + 10);
  return { articles, total: filteredArticles.length };
};

export const fetchArticle = async (id: number): Promise<Article | null> => {
  await delay(300 + Math.random() * 300);
  const articles = generateArticles(100);
  return articles.find(article => article.id === id) || null;
};

export const fetchUser = async (id: number): Promise<User | null> => {
  await delay(200 + Math.random() * 200);
  return generateUser(id);
};

// SEO 工具函数
export const updateMetaTag = (name: string, content: string) => {
  if (isServer) return;
  
  let meta = document.querySelector(\`meta[name="\${name}"]\`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

export const updatePropertyTag = (property: string, content: string) => {
  if (isServer) return;
  
  let meta = document.querySelector(\`meta[property="\${property}"]\`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

export const updateCanonicalUrl = (url: string) => {
  if (isServer) return;
  
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
};

// 路由工具函数
export const simulateNavigation = (path: string) => {
  if (isServer || !window.history) return;
  window.history.pushState({}, '', path);
};

// 数据预取工具
export const getSSRData = (key: string) => {
  if (isServer) return null;
  return (window as any).__SSR_DATA__?.[key] || null;
};

export const setSSRData = (key: string, data: any) => {
  if (isServer) return;
  if (!(window as any).__SSR_DATA__) {
    (window as any).__SSR_DATA__ = {};
  }
  (window as any).__SSR_DATA__[key] = data;
};`,Q=()=>e.jsx(P,{title:"SSR 与同构应用",description:"深入理解服务端渲染(SSR)和同构应用的实现原理，掌握数据预取、SEO优化和性能提升技巧。",overview:[{title:"核心概念",items:["服务端渲染(SSR)","同构应用开发","水合(Hydration)","数据预取策略"]},{title:"主要优势",items:["更快的首屏加载","更好的SEO效果","更好的用户体验","代码复用性强"]},{title:"适用场景",items:["内容驱动的网站","需要SEO的应用","性能要求高的应用","多页面应用"]},{title:"注意事项",items:["服务器负载增加","开发复杂度提升","需要合理缓存策略","需要处理渲染失败"]}],examples:[{title:"基础 SSR 演示",component:e.jsx(U,{}),description:"展示基本的服务端渲染功能，包括数据预取、SEO优化和水合过程。",observationPoints:["观察水合状态的变化：从'正在水合中'到'已完成水合'","注意文章列表的加载过程：SSR预取数据 → 客户端水合 → 交互功能激活","查看页面源码可以发现完整的HTML内容（模拟SSR效果）","分页和筛选功能展示了客户端交互与SSR数据的结合"],keyPoints:["useSSRData Hook 实现了统一的数据获取逻辑","useSEO Hook 动态更新页面的SEO信息","useHydration Hook 检测客户端水合状态","服务端预取的数据可以避免客户端的重复请求"],commonTraps:["在服务端使用浏览器特有的API（如localStorage、window对象）","组件在服务端和客户端渲染结果不一致","忘记处理异步数据加载的loading状态","SEO信息更新时机不正确"],solutions:["使用环境检测（typeof window !== 'undefined'）来区分运行环境","确保组件的初始状态在服务端和客户端保持一致","使用统一的数据获取Hook来处理loading和error状态","在useEffect中更新SEO信息，确保只在客户端执行"],importantTips:["水合过程中，React会对比服务端和客户端的渲染结果","数据预取可以显著减少页面的加载时间","合理使用缓存可以避免重复的数据请求","SEO优化需要在服务端渲染时就包含完整的meta信息"],preCode:[{title:"types",code:D},{title:"hooks",code:k},{title:"utils",code:T}],codeExample:{title:"基础 SSR 演示",code:B}},{title:"同构应用演示",component:e.jsx(q,{}),description:"展示完整的同构应用实现，包括路由管理、数据预加载和性能优化。",observationPoints:["观察路由切换时的状态变化：URL更新、数据获取、页面渲染","注意数据预加载的效果：鼠标悬停时预加载作者信息","查看应用状态指示器：水合状态、运行环境、当前路由","体验从列表页到详情页的无缝导航"],keyPoints:["同构路由实现了服务端和客户端的统一导航","数据预加载提升了用户体验","动态SEO根据页面内容自动更新","性能监控帮助识别和优化性能瓶颈"],commonTraps:["路由状态在服务端和客户端不同步","数据预加载导致不必要的网络请求","SEO信息更新延迟或不正确","内存泄漏（未清理的定时器、事件监听器）"],solutions:["使用统一的路由状态管理，确保服务端和客户端一致","实现智能的缓存机制，避免重复请求","使用useMemo优化SEO数据的计算","在组件卸载时清理所有副作用"],importantTips:["同构应用需要考虑代码在不同环境下的兼容性","合理的预加载策略可以显著提升用户体验","路由变化时要及时更新SEO信息","性能监控数据可以指导优化方向"],preCode:[{title:"types",code:D},{title:"hooks",code:k},{title:"utils",code:T}],codeExample:{title:"同构应用演示",code:F}}],tutorial:{concepts:["理解SSR的工作原理：服务端渲染 → HTML传输 → 客户端水合","掌握同构应用的核心思想：一套代码，多端运行","学习数据预取的最佳实践：何时获取、如何缓存、怎样优化","了解SEO优化的关键点：meta标签、结构化数据、页面性能"],steps:["设置服务端渲染环境：配置构建工具、服务器框架","实现数据预取逻辑：识别页面依赖、获取初始数据","开发同构组件：确保服务端和客户端渲染一致性","优化水合过程：减少水合时间、处理水合错误","实现路由管理：支持服务端路由和客户端导航","添加SEO优化：动态meta标签、结构化数据","性能监控和优化：识别瓶颈、优化加载速度"],tips:["使用环境变量区分开发和生产环境的SSR配置","实现渐进式增强：从静态HTML逐步添加交互功能","合理使用缓存：页面缓存、数据缓存、CDN缓存","监控关键指标：TTFB、FCP、LCP、CLS等性能指标","处理边缘情况：网络错误、服务器错误、降级方案"]},interview:{questions:[{question:"什么是SSR？它解决了什么问题？",answer:"SSR（Server-Side Rendering）是在服务器端渲染React组件生成HTML的技术。它解决了SPA应用的首屏加载慢和SEO不友好的问题。通过在服务端预渲染页面，用户可以更快看到内容，搜索引擎也能正确抓取页面信息。"},{question:"同构应用和SSR有什么区别？",answer:"同构应用是指同一套代码可以在服务端和客户端运行的应用架构，SSR是同构应用的一种实现方式。同构应用强调代码复用和一致性，而SSR专注于服务端渲染。同构应用通常包含SSR、客户端路由、数据预取等多个方面。"},{question:"水合(Hydration)过程是什么？",answer:"水合是指客户端JavaScript接管服务端渲染的静态HTML，为其添加交互功能的过程。React会对比服务端渲染的DOM结构和客户端渲染结果，如果一致则复用DOM节点，否则会重新渲染。水合完成后，应用就具备了完整的交互能力。"},{question:"如何处理SSR中的异步数据？",answer:"SSR中的异步数据需要在渲染前获取完成。常见方法包括：1) 在路由层面预取数据；2) 使用数据获取库（如React Query）的SSR支持；3) 实现自定义的数据预取Hook；4) 使用Suspense和并发特性。关键是确保服务端和客户端的数据状态一致。"},{question:"SSR应用如何优化性能？",answer:"SSR性能优化策略包括：1) 页面级缓存和组件级缓存；2) 代码分割和懒加载；3) 数据预取优化；4) 服务端渲染缓存；5) CDN加速；6) 关键资源优先加载；7) 流式渲染；8) 合理的错误边界和降级策略。"}],keyPoints:["SSR提升首屏性能和SEO效果，但增加服务器负载","同构应用实现代码复用，但需要处理环境差异","水合过程要确保服务端和客户端渲染结果一致","数据预取是SSR的核心，需要合理的缓存策略","性能优化需要综合考虑服务端和客户端的因素"]},bestPractices:{dos:["使用环境检测来区分服务端和客户端代码","实现统一的数据获取和状态管理","合理使用缓存策略提升性能","监控关键性能指标和用户体验","实现渐进式增强和优雅降级","使用TypeScript确保类型安全","实现完善的错误处理和日志记录"],donts:["不要在服务端使用浏览器特有的API","不要忽略服务端和客户端的渲染差异","不要过度预取数据导致性能问题","不要忘记清理副作用和事件监听器","不要在生产环境暴露敏感信息","不要忽略SEO和可访问性","不要过度复杂化架构设计"],patterns:["数据预取模式：在路由级别或组件级别预取所需数据","缓存模式：多层缓存策略，包括内存缓存、Redis缓存、CDN缓存","降级模式：SSR失败时降级到CSR，确保应用可用性","流式渲染模式：使用Suspense实现渐进式页面加载","代码分割模式：按路由或功能分割代码，优化加载性能","状态同步模式：确保服务端和客户端状态的一致性","错误边界模式：合理的错误处理和用户反馈机制"]}});export{Q as default};
