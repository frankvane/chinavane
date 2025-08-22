import{j as e,r as l}from"./index-MmCcWZhd.js";import{C}from"./ComponentTemplate-DoUPe1QN.js";const j=l.lazy(()=>new Promise(a=>{setTimeout(()=>{a({default:()=>e.jsxs("div",{className:"p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg",children:[e.jsx("h3",{className:"text-xl font-bold mb-3",children:"🚀 重型组件已加载"}),e.jsx("p",{className:"mb-4",children:"这是一个模拟的重型组件，加载时间为2秒。"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white/20 p-3 rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"功能特性"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• 复杂的业务逻辑"}),e.jsx("li",{children:"• 大量的数据处理"}),e.jsx("li",{children:"• 丰富的交互功能"})]})]}),e.jsxs("div",{className:"bg-white/20 p-3 rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"性能优化"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• 按需加载"}),e.jsx("li",{children:"• 代码分割"}),e.jsx("li",{children:"• 缓存策略"})]})]})]})]})})},2e3)})),N=l.lazy(()=>new Promise(a=>{setTimeout(()=>{a({default:({data:n})=>{const i=Math.max(...n);return e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"📊 数据图表"}),e.jsx("div",{className:"space-y-2",children:n.map((o,c)=>e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("span",{className:"w-12 text-sm text-gray-600",children:["项目",c+1]}),e.jsxs("div",{className:"flex-1 bg-gray-200 rounded-full h-4 relative",children:[e.jsx("div",{className:"bg-blue-500 h-4 rounded-full transition-all duration-1000 ease-out",style:{width:`${o/i*100}%`}}),e.jsx("span",{className:"absolute right-2 top-0 text-xs text-gray-700 leading-4",children:o})]})]},c))}),e.jsx("div",{className:"mt-4 text-xs text-gray-500",children:"这是一个懒加载的图表组件，包含动画效果和数据可视化功能。"})]})}})},1500)})),f=l.lazy(()=>new Promise(a=>{setTimeout(()=>{a({default:({userId:n})=>{const[i,o]=l.useState(null);return l.useEffect(()=>{setTimeout(()=>{o({id:n,name:"张三",email:"zhangsan@example.com",avatar:"https://via.placeholder.com/80/4F46E5/FFFFFF?text=张",bio:"全栈开发工程师，专注于React和Node.js开发",stats:{projects:42,followers:1234,following:567}})},500)},[n]),i?e.jsx("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("img",{src:i.avatar,alt:i.name,className:"w-16 h-16 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:i.name}),e.jsx("p",{className:"text-gray-600 text-sm",children:i.email}),e.jsx("p",{className:"text-gray-700 mt-2 text-sm",children:i.bio}),e.jsxs("div",{className:"flex space-x-6 mt-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg font-bold text-blue-600",children:i.stats.projects}),e.jsx("div",{className:"text-xs text-gray-500",children:"项目"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg font-bold text-green-600",children:i.stats.followers}),e.jsx("div",{className:"text-xs text-gray-500",children:"关注者"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg font-bold text-purple-600",children:i.stats.following}),e.jsx("div",{className:"text-xs text-gray-500",children:"关注中"})]})]})]})]})}):e.jsx("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:e.jsx("div",{className:"animate-pulse",children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-16 h-16 bg-gray-300 rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-1/2"})]})]})})})}})},1e3)})),S=({message:a="加载中..."})=>e.jsxs("div",{className:"flex flex-col items-center justify-center p-8 space-y-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"}),e.jsx("div",{className:"absolute inset-0 w-12 h-12 border-4 border-transparent border-r-purple-600 rounded-full animate-spin animation-delay-150"})]}),e.jsx("p",{className:"text-gray-600 text-sm font-medium",children:a})]}),p=()=>e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg animate-pulse",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-16 h-16 bg-gray-300 rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-1/2"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-2/3"})]})]}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsx("div",{className:"h-3 bg-gray-300 rounded"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-5/6"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-4/6"})]})]}),L=({progress:a,message:n="正在加载组件..."})=>e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("div",{className:"text-gray-700 font-medium",children:n}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out",style:{width:`${a}%`}})}),e.jsxs("div",{className:"text-sm text-gray-500",children:[a,"% 完成"]})]})}),T=()=>{const[a,n]=l.useState(!1),[i,o]=l.useState(0),[c,d]=l.useState(!1),h=()=>{n(!0),d(!0),o(0);const b=Date.now(),v=setInterval(()=>{o(Date.now()-b)},100);setTimeout(()=>{d(!1),clearInterval(v)},2e3)},g=()=>{n(!1),d(!1),o(0)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-3",children:[e.jsx("button",{onClick:h,disabled:a,className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",children:a?"组件已加载":"加载重型组件"}),a&&e.jsx("button",{onClick:g,className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"卸载组件"})]}),c&&e.jsx("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"}),e.jsxs("span",{className:"text-blue-800 font-medium",children:["正在加载组件... (",(i/1e3).toFixed(1),"s)"]})]})}),a&&e.jsx(l.Suspense,{fallback:e.jsx(S,{message:"正在加载重型组件..."}),children:e.jsx(j,{})}),e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"懒加载说明"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 组件只在需要时才开始加载"}),e.jsx("li",{children:"• 使用Suspense处理加载状态"}),e.jsx("li",{children:"• 可以显著减少初始包大小"}),e.jsx("li",{children:"• 提升应用启动速度"})]})]})]})},k=()=>{const[a,n]=l.useState(null),[i]=l.useState([85,92,78,96,88,91]),[o]=l.useState("user-123"),c=[{id:"chart",label:"📊 数据图表",description:"显示数据可视化图表"},{id:"profile",label:"👤 用户资料",description:"显示用户详细信息"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-2",children:[c.map(d=>e.jsx("button",{onClick:()=>n(a===d.id?null:d.id),className:`px-4 py-2 rounded transition-colors ${a===d.id?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:d.label},d.id)),a&&e.jsx("button",{onClick:()=>n(null),className:"px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm",children:"关闭"})]}),e.jsxs("div",{className:"min-h-[200px]",children:[a==="chart"&&e.jsx(l.Suspense,{fallback:e.jsx(p,{}),children:e.jsx(N,{data:i})}),a==="profile"&&e.jsx(l.Suspense,{fallback:e.jsx(p,{}),children:e.jsx(f,{userId:o})}),!a&&e.jsxs("div",{className:"p-8 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg",children:[e.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),e.jsx("p",{className:"font-medium",children:"选择一个标签页查看内容"}),e.jsx("p",{className:"text-sm mt-1",children:"组件将按需加载"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:c.map(d=>e.jsxs("div",{className:"p-3 bg-white border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-1",children:d.label}),e.jsx("p",{className:"text-sm text-gray-600",children:d.description}),e.jsxs("div",{className:"mt-2 text-xs text-gray-500",children:["状态: ",a===d.id?"✅ 已加载":"⏳ 未加载"]})]},d.id))})]})},z=()=>{const[a,n]=l.useState({}),[i,o]=l.useState(new Set),c=[{id:"heavy",name:"重型组件",loadTime:2e3},{id:"chart",name:"图表组件",loadTime:1500},{id:"profile",name:"用户资料",loadTime:1e3}],d=l.useCallback((s,t)=>{n(x=>({...x,[s]:{isLoading:!0,progress:0,error:null,loaded:!1}}));const r=Date.now(),m=setInterval(()=>{const x=Date.now()-r,y=Math.min(x/t*100,100);if(n(u=>({...u,[s]:{...u[s],progress:y}})),y>=100){clearInterval(m);const u=Math.random()<.2;setTimeout(()=>{n(w=>({...w,[s]:{isLoading:!1,progress:100,error:u?"组件加载失败，请重试":null,loaded:!u}}))},200)}},50)},[]),h=(s,t)=>{o(r=>new Set([...r,s])),d(s,t)},g=(s,t)=>{d(s,t)},b=s=>{o(t=>{const r=new Set(t);return r.delete(s),r}),n(t=>{const r={...t};return delete r[s],r})},v=s=>{var r;const t=a[s];if(t!=null&&t.isLoading)return e.jsx(L,{progress:t.progress,message:`正在加载${(r=c.find(m=>m.id===s))==null?void 0:r.name}...`});if(t!=null&&t.error)return e.jsx("div",{className:"p-4 bg-red-50 border border-red-200 rounded-lg",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"text-red-500 text-xl",children:"❌"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-semibold text-red-800",children:"加载失败"}),e.jsx("p",{className:"text-red-600 text-sm",children:t.error})]}),e.jsx("button",{onClick:()=>{var m;return g(s,((m=c.find(x=>x.id===s))==null?void 0:m.loadTime)||1e3)},className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm",children:"重试"})]})});if(t!=null&&t.loaded)switch(s){case"heavy":return e.jsx(l.Suspense,{fallback:e.jsx(S,{}),children:e.jsx(j,{})});case"chart":return e.jsx(l.Suspense,{fallback:e.jsx(p,{}),children:e.jsx(N,{data:[85,92,78,96,88,91]})});case"profile":return e.jsx(l.Suspense,{fallback:e.jsx(p,{}),children:e.jsx(f,{userId:"user-123"})});default:return null}return null};return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:c.map(s=>{const t=i.has(s.id),r=a[s.id];return e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:s.name}),e.jsxs("p",{className:"text-sm text-gray-600 mb-3",children:["加载时间: ",s.loadTime/1e3,"秒"]}),e.jsxs("div",{className:"space-y-2",children:[t?e.jsx("button",{onClick:()=>b(s.id),className:"w-full px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm",children:"卸载组件"}):e.jsx("button",{onClick:()=>h(s.id,s.loadTime),className:"w-full px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm",children:"加载组件"}),e.jsxs("div",{className:"text-xs text-gray-500",children:["状态:"," ",t?r!=null&&r.isLoading?"加载中":r!=null&&r.error?"加载失败":r!=null&&r.loaded?"已加载":"未知":"未加载"]})]})]},s.id)})}),e.jsx("div",{className:"space-y-4",children:Array.from(i).map(s=>e.jsx("div",{children:v(s)},s))}),e.jsxs("div",{className:"p-4 bg-yellow-50 border border-yellow-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"💡 高级特性说明"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 加载进度显示和状态管理"}),e.jsx("li",{children:"• 错误处理和重试机制"}),e.jsx("li",{children:"• 组件卸载和内存清理"}),e.jsx("li",{children:"• 模拟网络延迟和失败情况"})]})]})]})},P=()=>{const a={title:"懒加载 (Lazy Loading)",description:"懒加载是一种按需加载组件的技术，可以显著减少初始包大小，提升应用启动速度和用户体验。React.lazy和Suspense提供了优雅的懒加载解决方案。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"懒加载（Lazy Loading）是一种优化技术，允许组件在需要时才进行加载， 而不是在应用启动时就加载所有组件。这可以显著减少初始包大小，提升应用性能。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"减少初始包大小 - 显著提升首屏加载速度"}),e.jsx("li",{children:"按需加载 - 节省带宽和内存资源"}),e.jsx("li",{children:"代码分割 - Webpack自动进行代码分割"}),e.jsx("li",{children:"用户体验 - 改善移动端和弱网络环境下的体验"}),e.jsx("li",{children:"并行加载 - 支持多个组件同时加载"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"路由级别的代码分割 - 按页面分割应用"}),e.jsx("li",{children:"条件渲染的重型组件 - 根据用户交互加载"}),e.jsx("li",{children:"标签页或模态框中的组件 - 延迟加载非关键内容"}),e.jsx("li",{children:"第三方库的按需加载 - 减少不必要的依赖"}),e.jsx("li",{children:"复杂图表或可视化组件 - 提升页面响应速度"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"加载延迟 - 首次使用时会有加载时间"}),e.jsx("li",{children:"错误处理 - 需要处理网络失败等异常情况"}),e.jsx("li",{children:"SEO影响 - 搜索引擎可能无法索引懒加载内容"}),e.jsx("li",{children:"过度分割 - 避免创建过多小文件影响性能"}),e.jsx("li",{children:"用户体验 - 需要提供合适的加载状态反馈"})]})]})]}),examples:[{title:"基础懒加载示例",description:"展示React.lazy和Suspense的基本用法，演示组件的按需加载",component:e.jsx(T,{}),observationPoints:["点击加载按钮时组件才开始加载，观察网络请求","Suspense组件显示fallback内容直到组件加载完成","加载完成后可以卸载组件释放内存","重新加载时会从缓存中快速获取组件"],keyPoints:["React.lazy()接受一个返回Promise的函数","Suspense组件处理加载状态和错误边界","懒加载组件会被自动代码分割","组件卸载后可以释放内存资源"],commonTraps:["忘记使用Suspense包装懒加载组件","在服务端渲染中直接使用懒加载","没有提供合适的加载状态反馈","过度使用懒加载导致用户体验下降"],solutions:["始终使用Suspense包装懒加载组件","在SSR中使用动态导入或条件渲染","提供有意义的加载状态和进度反馈","合理选择懒加载的粒度和时机"],importantTips:["懒加载组件只在首次使用时加载，后续使用会从缓存获取","可以通过网络面板观察代码分割的效果","合理的加载状态设计能显著提升用户体验","考虑预加载重要的懒加载组件以减少延迟"],codeExample:{code:`// 基础懒加载实现
import React, { lazy, Suspense, useState } from 'react';

// ← 重点：使用lazy动态导入组件
const HeavyComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        default: () => (
          <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-3">🚀 重型组件已加载</h3>
            <p className="mb-4">这是一个模拟的重型组件，加载时间为2秒。</p>
          </div>
        )
      });
    }, 2000); // ← 重点：模拟2秒加载时间
  });
});

// ← 重点：自定义加载组件
const CustomSpinner: React.FC<{ message?: string }> = ({ message = '加载中...' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-gray-600 text-sm font-medium">{message}</p>
    </div>
  );
};

const BasicLazyLoadingExample: React.FC = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadComponent = () => {
    setShowComponent(true); // ← 重点：触发组件加载
    setIsLoading(true);

    // 监听组件加载完成
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleLoadComponent}
        disabled={showComponent}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {showComponent ? '组件已加载' : '加载重型组件'}
      </button>

      {/* ← 重点：使用Suspense包装懒加载组件 */}
      {showComponent && (
        <Suspense fallback={<CustomSpinner message="正在加载重型组件..." />}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
};`,language:"typescript",highlights:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],description:"基础懒加载实现，展示React.lazy和Suspense的核心用法"}},{title:"条件懒加载示例",description:"根据用户交互按需加载不同组件，展示标签页场景下的懒加载应用",component:e.jsx(k,{}),observationPoints:["只有点击标签页时对应组件才开始加载","不同组件使用不同的加载状态组件","组件状态实时显示加载情况","可以同时加载多个组件而不冲突"],keyPoints:["条件渲染结合懒加载实现按需加载","不同组件可以使用不同的fallback组件","状态管理确保组件加载的可控性","用户体验优化通过合适的占位符实现"],commonTraps:["在条件渲染中重复创建懒加载组件","没有为不同类型组件提供合适的加载状态","忽略组件卸载时的清理工作","加载状态管理过于复杂"],solutions:["将懒加载组件定义在组件外部避免重复创建","为不同组件类型设计专门的加载组件","在组件卸载时清理相关状态和定时器","使用简单清晰的状态管理模式"],importantTips:["条件懒加载特别适用于标签页和模态框场景","可以为不同组件设计不同的加载体验","合理的状态反馈能让用户了解加载进度","考虑预加载用户可能访问的组件"],codeExample:{code:`// 条件懒加载实现
import React, { lazy, Suspense, useState } from 'react';

// ← 重点：定义多个懒加载组件
const ChartComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        default: ({ data }: { data: number[] }) => {
          const maxValue = Math.max(...data);
          return (
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">📊 数据图表</h3>
              <div className="space-y-2">
                {data.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="w-12 text-sm text-gray-600">项目{index + 1}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                      <div
                        className="bg-blue-500 h-4 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: \`\${(value / maxValue) * 100}%\` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
      });
    }, 1500); // ← 重点：不同的加载时间
  });
});

const UserProfileComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        default: ({ userId }: { userId: string }) => {
          const [user, setUser] = useState<any>(null);

          useEffect(() => {
            setTimeout(() => {
              setUser({
                id: userId,
                name: '张三',
                email: 'zhangsan@example.com',
                bio: '全栈开发工程师，专注于React和Node.js开发'
              });
            }, 500);
          }, [userId]);

          if (!user) {
            return <div className="animate-pulse">加载用户信息...</div>;
          }

          return (
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <p className="text-gray-700 mt-2 text-sm">{user.bio}</p>
            </div>
          );
        }
      });
    }, 1000);
  });
});

// ← 重点：不同的加载状态组件
const SkeletonLoader: React.FC = () => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

const ConditionalLazyLoadingExample: React.FC = () => {
  // ← 重点：状态管理控制组件加载
  const [activeTab, setActiveTab] = useState<'chart' | 'profile' | null>(null);
  const [chartData] = useState([85, 92, 78, 96, 88, 91]);
  const [userId] = useState('user-123');

  const tabs = [
    { id: 'chart' as const, label: '📊 数据图表', description: '显示数据可视化图表' },
    { id: 'profile' as const, label: '👤 用户资料', description: '显示用户详细信息' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            // ← 重点：点击时切换活动标签
            onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
            className={\`px-4 py-2 rounded transition-colors \${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }\`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[200px]">
        {/* ← 重点：条件渲染懒加载组件 */}
        {activeTab === 'chart' && (
          <Suspense fallback={<SkeletonLoader />}>
            <ChartComponent data={chartData} />
          </Suspense>
        )}

        {activeTab === 'profile' && (
          <Suspense fallback={<SkeletonLoader />}>
            <UserProfileComponent userId={userId} />
          </Suspense>
        )}

        {!activeTab && (
          <div className="p-8 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="font-medium">选择一个标签页查看内容</p>
            <p className="text-sm mt-1">组件将按需加载</p>
          </div>
        )}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[4,5,31,70,71,85,86,87,88,89,90,91,92,93,94,103,118,119,120,124,125,126],description:"条件懒加载实现，展示根据用户交互按需加载组件"}},{title:"高级懒加载示例",description:"包含进度显示、错误处理和重试机制的完整懒加载解决方案",component:e.jsx(z,{}),observationPoints:["加载进度实时显示，用户可以了解加载状态","模拟网络失败情况，展示错误处理机制","提供重试功能，增强用户体验","支持多组件并行加载和状态管理"],keyPoints:["完整的加载状态管理包括进度、错误、成功状态","错误边界和重试机制提升应用健壮性","进度反馈让用户了解加载进度","组件卸载和内存管理确保性能"],commonTraps:["忽略加载失败的错误处理","没有提供重试机制","加载状态管理过于复杂","内存泄漏和定时器清理问题"],solutions:["实现完整的错误边界和错误处理逻辑","提供用户友好的重试机制","使用清晰的状态管理模式","及时清理定时器和事件监听器"],importantTips:["生产环境中应该有完善的错误处理和监控","进度反馈能显著提升用户体验","考虑网络状况和设备性能的差异","合理的重试策略能提高成功率"],codeExample:{code:`// 高级懒加载实现
import React, { lazy, Suspense, useState, useCallback } from 'react';

// ← 重点：进度加载组件
const ProgressLoader: React.FC<{ progress: number; message?: string }> = ({
  progress,
  message = '正在加载组件...'
}) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg">
      <div className="text-center space-y-4">
        <div className="text-gray-700 font-medium">{message}</div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: \`\${progress}%\` }}
          ></div>
        </div>
        <div className="text-sm text-gray-500">{progress}% 完成</div>
      </div>
    </div>
  );
};

const AdvancedLazyLoadingExample: React.FC = () => {
  // ← 重点：复杂的状态管理
  const [loadingStates, setLoadingStates] = useState<Record<string, {
    isLoading: boolean;
    progress: number;
    error: string | null;
    loaded: boolean;
  }>>({});

  const [visibleComponents, setVisibleComponents] = useState<Set<string>>(new Set());

  const components = [
    { id: 'heavy', name: '重型组件', loadTime: 2000 },
    { id: 'chart', name: '图表组件', loadTime: 1500 },
    { id: 'profile', name: '用户资料', loadTime: 1000 }
  ];

  // ← 重点：模拟加载过程
  const simulateLoading = useCallback((componentId: string, loadTime: number) => {
    setLoadingStates(prev => ({
      ...prev,
      [componentId]: {
        isLoading: true,
        progress: 0,
        error: null,
        loaded: false
      }
    }));

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / loadTime) * 100, 100);

      // ← 重点：更新进度
      setLoadingStates(prev => ({
        ...prev,
        [componentId]: {
          ...prev[componentId],
          progress
        }
      }));

      if (progress >= 100) {
        clearInterval(interval);

        // ← 重点：模拟加载失败
        const shouldFail = Math.random() < 0.2; // 20% 失败率

        setTimeout(() => {
          setLoadingStates(prev => ({
            ...prev,
            [componentId]: {
              isLoading: false,
              progress: 100,
              error: shouldFail ? '组件加载失败，请重试' : null,
              loaded: !shouldFail
            }
          }));
        }, 200);
      }
    }, 50);
  }, []);

  const loadComponent = (componentId: string, loadTime: number) => {
    setVisibleComponents(prev => new Set([...prev, componentId]));
    simulateLoading(componentId, loadTime);
  };

  // ← 重点：重试机制
  const retryLoad = (componentId: string, loadTime: number) => {
    simulateLoading(componentId, loadTime);
  };

  // ← 重点：组件卸载和清理
  const unloadComponent = (componentId: string) => {
    setVisibleComponents(prev => {
      const newSet = new Set(prev);
      newSet.delete(componentId);
      return newSet;
    });

    setLoadingStates(prev => {
      const newStates = { ...prev };
      delete newStates[componentId];
      return newStates;
    });
  };

  const renderComponent = (componentId: string) => {
    const state = loadingStates[componentId];

    // ← 重点：显示加载进度
    if (state?.isLoading) {
      return <ProgressLoader progress={state.progress} message={\`正在加载\${components.find(c => c.id === componentId)?.name}...\`} />;
    }

    // ← 重点：错误处理和重试
    if (state?.error) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="text-red-500 text-xl">❌</div>
            <div className="flex-1">
              <h4 className="font-semibold text-red-800">加载失败</h4>
              <p className="text-red-600 text-sm">{state.error}</p>
            </div>
            <button
              onClick={() => retryLoad(componentId, components.find(c => c.id === componentId)?.loadTime || 1000)}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
            >
              重试
            </button>
          </div>
        </div>
      );
    }

    // ← 重点：成功加载后渲染组件
    if (state?.loaded) {
      switch (componentId) {
        case 'heavy':
          return (
            <Suspense fallback={<div>加载中...</div>}>
              <HeavyComponent />
            </Suspense>
          );
        case 'chart':
          return (
            <Suspense fallback={<div>加载中...</div>}>
              <ChartComponent data={[85, 92, 78, 96, 88, 91]} />
            </Suspense>
          );
        default:
          return null;
      }
    }

    return null;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {components.map(component => {
          const isVisible = visibleComponents.has(component.id);
          const state = loadingStates[component.id];

          return (
            <div key={component.id} className="p-4 bg-white border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">{component.name}</h4>
              <p className="text-sm text-gray-600 mb-3">
                加载时间: {component.loadTime / 1000}秒
              </p>

              <div className="space-y-2">
                {!isVisible ? (
                  <button
                    onClick={() => loadComponent(component.id, component.loadTime)}
                    className="w-full px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                  >
                    加载组件
                  </button>
                ) : (
                  <button
                    onClick={() => unloadComponent(component.id)}
                    className="w-full px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                  >
                    卸载组件
                  </button>
                )}

                <div className="text-xs text-gray-500">
                  状态: {!isVisible ? '未加载' : state?.isLoading ? '加载中' : state?.error ? '加载失败' : state?.loaded ? '已加载' : '未知'}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-4">
        {Array.from(visibleComponents).map(componentId => (
          <div key={componentId}>
            {renderComponent(componentId)}
          </div>
        ))}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[4,5,6,7,42,43,44,45,46,47,48,49,50,51,52,89,90,91,92,100,101,102,103,104,105,106,107,108,109,110,111,112,148,149,150,154,155,156,209],description:"高级懒加载实现，包含进度显示、错误处理和重试机制"}}],tutorial:{concepts:["React.lazy()用于动态导入组件，返回一个懒加载组件","Suspense用于处理加载状态，显示fallback内容","动态import()是ES2020的特性，支持代码分割","Webpack会自动进行代码分割，生成独立的chunk文件","懒加载可以显著减少初始包大小，提升首屏加载速度","错误边界可以捕获懒加载过程中的错误","预加载策略可以在用户需要前提前加载组件"],steps:["使用React.lazy()包装需要懒加载的组件","创建自定义的加载组件作为fallback（可选）","使用Suspense包装懒加载组件","设置fallback属性显示加载状态","处理加载错误和重试逻辑","优化加载体验和用户反馈","测试不同网络条件下的表现","监控懒加载组件的性能指标"],tips:["合理选择懒加载的粒度，避免过度分割导致请求过多","为加载状态提供有意义的反馈，提升用户体验","考虑预加载重要的懒加载组件，减少用户等待时间","使用错误边界处理加载失败，提供重试机制","在开发环境中测试懒加载行为，确保正常工作","监控懒加载组件的性能指标，优化加载策略","考虑服务端渲染(SSR)的兼容性问题"]},interview:{questions:[{question:"什么是懒加载？它解决了什么问题？",answer:"懒加载是一种按需加载技术，组件只在需要时才开始加载和渲染。它主要解决以下问题：1) 减少初始包大小，提升首屏加载速度；2) 节省带宽和内存资源；3) 改善用户体验，特别是在移动端和弱网络环境下；4) 实现代码分割，优化应用性能。React.lazy()和Suspense提供了优雅的懒加载解决方案。"},{question:"React.lazy()和Suspense是如何工作的？",answer:"React.lazy()接受一个返回Promise的函数，该Promise解析为一个包含default导出的模块。Suspense组件用于包装懒加载组件，当组件正在加载时显示fallback内容。工作流程：1) React.lazy()创建懒加载组件；2) 当组件首次渲染时，开始动态导入；3) Suspense捕获Promise并显示fallback；4) 加载完成后渲染实际组件；5) 后续渲染直接使用缓存的组件。"},{question:"懒加载的最佳实践有哪些？",answer:"懒加载最佳实践包括：1) 合理选择懒加载粒度，避免过度分割；2) 为加载状态提供有意义的反馈；3) 实现错误处理和重试机制；4) 考虑预加载重要组件；5) 使用路由级别的代码分割；6) 监控性能指标和用户体验；7) 在SSR环境中正确处理懒加载；8) 避免在render方法中创建懒加载组件。"},{question:"如何处理懒加载中的错误？",answer:"处理懒加载错误的方法：1) 使用错误边界(Error Boundary)捕获加载错误；2) 在Promise中添加catch处理；3) 提供重试机制让用户重新加载；4) 显示友好的错误信息；5) 记录错误日志用于监控；6) 考虑降级方案，如显示静态内容；7) 网络超时处理；8) 区分不同类型的错误并采取相应措施。"},{question:"懒加载对SEO有什么影响？如何优化？",answer:"懒加载对SEO的影响：1) 搜索引擎可能无法索引懒加载内容；2) 首屏内容加载延迟可能影响排名；3) JavaScript依赖可能导致爬虫无法获取内容。优化方法：1) 关键内容避免懒加载；2) 使用服务端渲染(SSR)预渲染重要页面；3) 提供sitemap和结构化数据；4) 使用预加载策略；5) 监控Core Web Vitals指标；6) 考虑使用静态生成(SSG)。"}],keyPoints:["React.lazy()只能用于默认导出的组件","Suspense必须包装懒加载组件，否则会报错","懒加载组件会被Webpack自动代码分割","首次加载有延迟，后续使用会从缓存获取","错误处理和用户体验同样重要","合理的懒加载策略能显著提升应用性能","需要考虑SEO和服务端渲染的兼容性"]},bestPractices:{dos:["在路由级别使用懒加载进行代码分割","为懒加载组件提供有意义的加载状态","实现错误边界和重试机制","监控懒加载组件的性能指标","考虑预加载用户可能访问的组件","使用骨架屏或进度条提升用户体验","在开发环境中测试懒加载行为","合理选择懒加载的粒度和时机"],donts:["不要在render方法中创建懒加载组件","不要过度使用懒加载导致请求过多","不要忽略加载失败的错误处理","不要在关键路径上使用懒加载","不要忘记清理定时器和事件监听器","不要在SSR中直接使用懒加载","不要忽略懒加载对SEO的影响","不要缺少合适的加载状态反馈"],patterns:["路由级懒加载：按页面分割应用代码","条件懒加载：根据用户交互按需加载","预加载模式：在空闲时预加载可能需要的组件","渐进式加载：按优先级逐步加载组件","错误重试模式：提供友好的错误处理和重试","骨架屏模式：使用占位符改善加载体验","并行加载模式：同时加载多个独立组件","缓存优化模式：合理利用浏览器和应用缓存"]}};return e.jsx(C,{...a})};export{P as default};
