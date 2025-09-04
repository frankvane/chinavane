const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HeavyComponent-Bnz3r3Gc.js","./index-H7t66yxh.js","./index-BFRj4jJ-.css","./ChartComponent-Z7pfbIhC.js","./UserProfileComponent-CyX9kh2D.js"])))=>i.map(i=>d[i]);
import{j as e,r as s,_ as b}from"./index-H7t66yxh.js";import{C}from"./ComponentTemplate-bNJaV0ol.js";const f=()=>e.jsx("div",{className:"flex items-center justify-center p-8",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-blue-200 rounded-full animate-spin",children:e.jsx("div",{className:"absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"})}),e.jsx("div",{className:"mt-4 text-center text-gray-600 text-sm",children:"正在加载..."})]})}),u=()=>e.jsx("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"animate-pulse",children:[e.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-gray-300 rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"h-3 bg-gray-300 rounded"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-5/6"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-4/6"})]})]})}),w=({progress:n})=>e.jsxs("div",{className:"p-6 bg-white border border-gray-200 rounded-lg",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsxs("div",{className:"text-lg font-semibold text-gray-800",children:["加载中... ",n,"%"]}),e.jsx("div",{className:"text-sm text-gray-600 mt-1",children:"正在准备组件资源"})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3 mb-4",children:e.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300 ease-out",style:{width:`${n}%`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[e.jsx("span",{children:"开始"}),e.jsx("span",{children:"完成"})]})]}),g=s.lazy(()=>new Promise(n=>{setTimeout(()=>{n(b(()=>import("./HeavyComponent-Bnz3r3Gc.js"),__vite__mapDeps([0,1,2]),import.meta.url))},2e3)})),c=s.lazy(()=>new Promise(n=>{setTimeout(()=>{n(b(()=>import("./ChartComponent-Z7pfbIhC.js"),__vite__mapDeps([3,1,2]),import.meta.url))},1500)})),m=s.lazy(()=>new Promise(n=>{setTimeout(()=>{n(b(()=>import("./UserProfileComponent-CyX9kh2D.js"),__vite__mapDeps([4,1,2]),import.meta.url))},1e3)})),j=()=>{const[n,o]=s.useState(!1);return e.jsxs("div",{className:"p-6 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础懒加载示例"}),e.jsx("button",{onClick:()=>o(!n),className:"mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:n?"隐藏组件":"加载重型组件"}),n&&e.jsx(s.Suspense,{fallback:e.jsx(f,{}),children:e.jsx(g,{})})]})},L=()=>{const[n,o]=s.useState(null),l=[{id:"chart",label:"数据图表",component:c},{id:"profile",label:"用户资料",component:m}];return e.jsxs("div",{className:"p-6 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"条件懒加载示例"}),e.jsx("div",{className:"flex space-x-2 mb-4",children:l.map(r=>e.jsx("button",{onClick:()=>o(n===r.id?null:r.id),className:`px-4 py-2 rounded transition-colors ${n===r.id?"bg-blue-500 text-white":"bg-white text-gray-700 hover:bg-gray-100"}`,children:r.label},r.id))}),n&&e.jsxs(s.Suspense,{fallback:e.jsx(u,{}),children:[n==="chart"&&e.jsx(c,{data:[45,78,23,67,89,34]}),n==="profile"&&e.jsx(m,{userId:"user-123"})]})]})},P=()=>{const[n,o]=s.useState({}),[l,r]=s.useState(new Set),N=t=>{if(l.has(t)){r(a=>{const i=new Set(a);return i.delete(t),i});return}o(a=>({...a,[t]:{loading:!0,progress:0}}));const d=setInterval(()=>{o(a=>{const i=a[t];if(!i)return a;const v=Math.min(i.progress+10,100);return v===100&&(clearInterval(d),setTimeout(()=>{r(p=>new Set([...p,t])),o(p=>{const x={...p};return delete x[t],x})},500)),{...a,[t]:{...i,progress:v}}})},200)},S=[{id:"heavy",label:"重型组件",component:g},{id:"chart",label:"图表组件",component:c},{id:"profile",label:"用户资料",component:m}];return e.jsxs("div",{className:"p-6 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级懒加载示例"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:S.map(t=>{const d=n[t.id],a=l.has(t.id);return e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4 bg-white",children:[e.jsx("h4",{className:"font-medium mb-3",children:t.label}),e.jsx("button",{onClick:()=>N(t.id),disabled:!!d,className:`w-full px-4 py-2 rounded transition-colors ${d?"bg-gray-300 text-gray-500 cursor-not-allowed":a?"bg-red-500 text-white hover:bg-red-600":"bg-blue-500 text-white hover:bg-blue-600"}`,children:d?"加载中...":a?"卸载组件":"加载组件"}),d&&e.jsx("div",{className:"mt-3",children:e.jsx(w,{progress:d.progress})})]},t.id)})}),e.jsxs("div",{className:"space-y-4",children:[l.has("heavy")&&e.jsx(s.Suspense,{fallback:e.jsx(f,{}),children:e.jsx(g,{})}),l.has("chart")&&e.jsx(s.Suspense,{fallback:e.jsx(u,{}),children:e.jsx(c,{data:[65,45,78,23,89,56,34]})}),l.has("profile")&&e.jsx(s.Suspense,{fallback:e.jsx(u,{}),children:e.jsx(m,{userId:"advanced-user"})})]})]})},h=`import React from "react";

interface ChartComponentProps {
  data: number[];
}

// 模拟图表组件
const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  const maxValue = Math.max(...data);
  
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        📊 数据图表
      </h3>
      <div className="space-y-2">
        {data.map((value, index) => (
          <div key={index} className="flex items-center space-x-3">
            <span className="w-12 text-sm text-gray-600">
              项目{index + 1}
            </span>
            <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: \`\${(value / maxValue) * 100}%\` }}
              />
              <span className="absolute right-2 top-0 text-xs text-gray-700 leading-4">
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-gray-500">
        这是一个懒加载的图表组件，包含动画效果和数据可视化功能。
      </div>
    </div>
  );
};

export default ChartComponent;`,y=`import React from "react";\r
\r
// 模拟重型组件\r
const HeavyComponent: React.FC = () => {\r
  return (\r
    <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">\r
      <h3 className="text-xl font-bold mb-3">🚀 重型组件已加载</h3>\r
      <p className="mb-4">这是一个模拟的重型组件，加载时间为2秒。</p>\r
      <div className="grid grid-cols-2 gap-4">\r
        <div className="bg-white/20 p-3 rounded">\r
          <h4 className="font-semibold mb-2">功能特性</h4>\r
          <ul className="text-sm space-y-1">\r
            <li>• 复杂的业务逻辑</li>\r
            <li>• 大量的数据处理</li>\r
            <li>• 丰富的交互功能</li>\r
          </ul>\r
        </div>\r
        <div className="bg-white/20 p-3 rounded">\r
          <h4 className="font-semibold mb-2">性能优化</h4>\r
          <ul className="text-sm space-y-1">\r
            <li>• 按需加载</li>\r
            <li>• 代码分割</li>\r
            <li>• 缓存策略</li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default HeavyComponent;`,z=`import React, { Suspense, useState, lazy } from "react";
import { CustomSpinner, SkeletonLoader, ProgressLoader } from "./LoadingIndicators";

// 懒加载组件
const LazyHeavyComponent = lazy(() => 
  new Promise(resolve => {
    setTimeout(() => {
      resolve(import("./HeavyComponent"));
    }, 2000);
  })
);

const LazyChartComponent = lazy(() => 
  new Promise(resolve => {
    setTimeout(() => {
      resolve(import("./ChartComponent"));
    }, 1500);
  })
);

const LazyUserProfileComponent = lazy(() => 
  new Promise(resolve => {
    setTimeout(() => {
      resolve(import("./UserProfileComponent"));
    }, 1000);
  })
);

// 基础懒加载示例
export const BasicLazyLoadingExample: React.FC = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">基础懒加载示例</h3>
      
      <button
        onClick={() => setShowComponent(!showComponent)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {showComponent ? "隐藏组件" : "加载重型组件"}
      </button>

      {showComponent && (
        <Suspense fallback={<CustomSpinner />}>
          <LazyHeavyComponent />
        </Suspense>
      )}
    </div>
  );
};

// 条件懒加载示例
export const ConditionalLazyLoadingExample: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const tabs = [
    { id: "chart", label: "数据图表", component: LazyChartComponent },
    { id: "profile", label: "用户资料", component: LazyUserProfileComponent },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">条件懒加载示例</h3>
      
      <div className="flex space-x-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(selectedTab === tab.id ? null : tab.id)}
            className={\`px-4 py-2 rounded transition-colors \${
              selectedTab === tab.id
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }\`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {selectedTab && (
        <Suspense fallback={<SkeletonLoader />}>
          {selectedTab === "chart" && <LazyChartComponent data={[45, 78, 23, 67, 89, 34]} />}
          {selectedTab === "profile" && <LazyUserProfileComponent userId="user-123" />}
        </Suspense>
      )}
    </div>
  );
};

// 高级懒加载示例
export const AdvancedLazyLoadingExample: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: { loading: boolean; progress: number }
  }>({});
  const [loadedComponents, setLoadedComponents] = useState<Set<string>>(new Set());

  const loadComponent = (componentId: string) => {
    if (loadedComponents.has(componentId)) {
      setLoadedComponents(prev => {
        const newSet = new Set(prev);
        newSet.delete(componentId);
        return newSet;
      });
      return;
    }

    // 开始加载
    setLoadingStates(prev => ({
      ...prev,
      [componentId]: { loading: true, progress: 0 }
    }));

    // 模拟加载进度
    const interval = setInterval(() => {
      setLoadingStates(prev => {
        const current = prev[componentId];
        if (!current) return prev;
        
        const newProgress = Math.min(current.progress + 10, 100);
        
        if (newProgress === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoadedComponents(prevLoaded => new Set([...prevLoaded, componentId]));
            setLoadingStates(prevStates => {
              const newStates = { ...prevStates };
              delete newStates[componentId];
              return newStates;
            });
          }, 500);
        }
        
        return {
          ...prev,
          [componentId]: { ...current, progress: newProgress }
        };
      });
    }, 200);
  };

  const components = [
    { id: "heavy", label: "重型组件", component: LazyHeavyComponent },
    { id: "chart", label: "图表组件", component: LazyChartComponent },
    { id: "profile", label: "用户资料", component: LazyUserProfileComponent },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">高级懒加载示例</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {components.map((comp) => {
          const loadingState = loadingStates[comp.id];
          const isLoaded = loadedComponents.has(comp.id);
          
          return (
            <div key={comp.id} className="border border-gray-200 rounded-lg p-4 bg-white">
              <h4 className="font-medium mb-3">{comp.label}</h4>
              
              <button
                onClick={() => loadComponent(comp.id)}
                disabled={!!loadingState}
                className={\`w-full px-4 py-2 rounded transition-colors \${
                  loadingState
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : isLoaded
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }\`}
              >
                {loadingState ? "加载中..." : isLoaded ? "卸载组件" : "加载组件"}
              </button>
              
              {loadingState && (
                <div className="mt-3">
                  <ProgressLoader progress={loadingState.progress} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="space-y-4">
        {loadedComponents.has("heavy") && (
          <Suspense fallback={<CustomSpinner />}>
            <LazyHeavyComponent />
          </Suspense>
        )}
        
        {loadedComponents.has("chart") && (
          <Suspense fallback={<SkeletonLoader />}>
            <LazyChartComponent data={[65, 45, 78, 23, 89, 56, 34]} />
          </Suspense>
        )}
        
        {loadedComponents.has("profile") && (
          <Suspense fallback={<SkeletonLoader />}>
            <LazyUserProfileComponent userId="advanced-user" />
          </Suspense>
        )}
      </div>
    </div>
  );
};`,k=`import React from "react";\r
\r
// 自定义旋转加载器\r
export const CustomSpinner: React.FC = () => {\r
  return (\r
    <div className="flex items-center justify-center p-8">\r
      <div className="relative">\r
        <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin">\r
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>\r
        </div>\r
        <div className="mt-4 text-center text-gray-600 text-sm">\r
          正在加载...\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
// 骨架屏加载器\r
export const SkeletonLoader: React.FC = () => {\r
  return (\r
    <div className="p-4 bg-white border border-gray-200 rounded-lg">\r
      <div className="animate-pulse">\r
        <div className="flex items-center space-x-4 mb-4">\r
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>\r
          <div className="flex-1 space-y-2">\r
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>\r
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>\r
          </div>\r
        </div>\r
        <div className="space-y-3">\r
          <div className="h-3 bg-gray-300 rounded"></div>\r
          <div className="h-3 bg-gray-300 rounded w-5/6"></div>\r
          <div className="h-3 bg-gray-300 rounded w-4/6"></div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
// 进度条加载器\r
interface ProgressLoaderProps {\r
  progress: number;\r
}\r
\r
export const ProgressLoader: React.FC<ProgressLoaderProps> = ({ progress }) => {\r
  return (\r
    <div className="p-6 bg-white border border-gray-200 rounded-lg">\r
      <div className="text-center mb-4">\r
        <div className="text-lg font-semibold text-gray-800">\r
          加载中... {progress}%\r
        </div>\r
        <div className="text-sm text-gray-600 mt-1">\r
          正在准备组件资源\r
        </div>\r
      </div>\r
      \r
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">\r
        <div\r
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300 ease-out"\r
          style={{ width: \`\${progress}%\` }}\r
        ></div>\r
      </div>\r
      \r
      <div className="flex justify-between text-xs text-gray-500">\r
        <span>开始</span>\r
        <span>完成</span>\r
      </div>\r
    </div>\r
  );\r
};`,R=`import React, { useEffect, useState } from "react";

interface UserProfileComponentProps {
  userId: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  stats: {
    projects: number;
    followers: number;
    following: number;
  };
}

// 模拟用户资料组件
const UserProfileComponent: React.FC<UserProfileComponentProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // 模拟API调用
    setTimeout(() => {
      setUser({
        id: userId,
        name: "张三",
        email: "zhangsan@example.com",
        avatar: "https://via.placeholder.com/80/4F46E5/FFFFFF?text=张",
        bio: "全栈开发工程师，专注于React和Node.js开发",
        stats: {
          projects: 42,
          followers: 1234,
          following: 567,
        },
      });
    }, 500);
  }, [userId]);

  if (!user) {
    return (
      <div className="p-4 bg-white border border-gray-200 rounded-lg">
        <div className="animate-pulse">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg">
      <div className="flex items-start space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {user.name}
          </h3>
          <p className="text-gray-600 text-sm">{user.email}</p>
          <p className="text-gray-700 mt-2 text-sm">{user.bio}</p>

          <div className="flex space-x-6 mt-3">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">
                {user.stats.projects}
              </div>
              <div className="text-xs text-gray-500">项目</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">
                {user.stats.followers}
              </div>
              <div className="text-xs text-gray-500">关注者</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">
                {user.stats.following}
              </div>
              <div className="text-xs text-gray-500">关注中</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileComponent;`,I=()=>{const n={title:"懒加载 (Lazy Loading)",description:"懒加载是一种按需加载组件的技术，可以显著减少初始包大小，提升应用启动速度和用户体验。React.lazy和Suspense提供了优雅的懒加载解决方案。",overview:[{title:"核心概念",items:["懒加载（Lazy Loading）是一种优化技术，允许组件在需要时才进行加载","不是在应用启动时就加载所有组件，可以显著减少初始包大小","React.lazy()和Suspense提供了优雅的懒加载解决方案","通过动态import()实现代码分割和按需加载"]},{title:"主要优势",items:["减少初始包大小 - 显著提升首屏加载速度","按需加载 - 节省带宽和内存资源","代码分割 - Webpack自动进行代码分割","用户体验 - 改善移动端和弱网络环境下的体验","并行加载 - 支持多个组件同时加载"]},{title:"适用场景",items:["路由级别的代码分割 - 按页面分割应用","条件渲染的重型组件 - 根据用户交互加载","标签页或模态框中的组件 - 延迟加载非关键内容","第三方库的按需加载 - 减少不必要的依赖","复杂图表或可视化组件 - 提升页面响应速度"]},{title:"注意事项",items:["加载延迟 - 首次使用时会有加载时间","错误处理 - 需要处理网络失败等异常情况","SEO影响 - 搜索引擎可能无法索引懒加载内容","过度分割 - 避免创建过多小文件影响性能","用户体验 - 需要提供合适的加载状态反馈"]}],examples:[{title:"基础懒加载示例",description:"展示React.lazy和Suspense的基本用法，演示组件的按需加载",component:e.jsx(j,{}),observationPoints:["点击加载按钮时组件才开始加载，观察网络请求","Suspense组件显示fallback内容直到组件加载完成","加载完成后可以卸载组件释放内存","重新加载时会从缓存中快速获取组件"],keyPoints:["React.lazy()接受一个返回Promise的函数","Suspense组件处理加载状态和错误边界","懒加载组件会被自动代码分割","组件卸载后可以释放内存资源"],commonTraps:["忘记使用Suspense包装懒加载组件","在服务端渲染中直接使用懒加载","没有提供合适的加载状态反馈","过度使用懒加载导致用户体验下降"],solutions:["始终使用Suspense包装懒加载组件","在SSR中使用动态导入或条件渲染","提供有意义的加载状态和进度反馈","合理选择懒加载的粒度和时机"],importantTips:["懒加载组件只在首次使用时加载，后续使用会从缓存获取","可以通过网络面板观察代码分割的效果","合理的加载状态设计能显著提升用户体验","考虑预加载重要的懒加载组件以减少延迟"],codeExample:{title:"基础懒加载示例",code:y}},{title:"条件懒加载示例",description:"根据用户交互按需加载不同组件，展示标签页场景下的懒加载应用",component:e.jsx(L,{}),observationPoints:["只有点击标签页时对应组件才开始加载","不同组件使用不同的加载状态组件","组件状态实时显示加载情况","可以同时加载多个组件而不冲突"],keyPoints:["条件渲染结合懒加载实现按需加载","不同组件可以使用不同的fallback组件","状态管理确保组件加载的可控性","用户体验优化通过合适的占位符实现"],commonTraps:["在条件渲染中重复创建懒加载组件","没有为不同类型组件提供合适的加载状态","忽略组件卸载时的清理工作","加载状态管理过于复杂"],solutions:["将懒加载组件定义在组件外部避免重复创建","为不同组件类型设计专门的加载组件","在组件卸载时清理相关状态和定时器","使用简单清晰的状态管理模式"],importantTips:["条件懒加载特别适用于标签页和模态框场景","可以为不同组件设计不同的加载体验","合理的状态反馈能让用户了解加载进度","考虑预加载用户可能访问的组件"],codeExample:{title:"条件懒加载示例",code:h}},{title:"高级懒加载示例",description:"包含进度显示、错误处理和重试机制的完整懒加载解决方案",component:e.jsx(P,{}),observationPoints:["加载进度实时显示，用户可以了解加载状态","模拟网络失败情况，展示错误处理机制","提供重试功能，增强用户体验","支持多组件并行加载和状态管理"],keyPoints:["完整的加载状态管理包括进度、错误、成功状态","错误边界和重试机制提升应用健壮性","进度反馈让用户了解加载进度","组件卸载和内存管理确保性能"],commonTraps:["忽略加载失败的错误处理","没有提供重试机制","加载状态管理过于复杂","内存泄漏和定时器清理问题"],solutions:["实现完整的错误边界和错误处理逻辑","提供用户友好的重试机制","使用清晰的状态管理模式","及时清理定时器和事件监听器"],importantTips:["生产环境中应该有完善的错误处理和监控","进度反馈能显著提升用户体验","考虑网络状况和设备性能的差异","合理的重试策略能提高成功率"],preCode:[{title:"LoadingIndicators",code:k},{title:"HeavyComponent",code:y},{title:"ChartComponent",code:h},{title:"UserProfileComponent",code:R}],codeExample:{title:"高级懒加载示例",code:z}}],tutorial:{concepts:["React.lazy()用于动态导入组件，返回一个懒加载组件","Suspense用于处理加载状态，显示fallback内容","动态import()是ES2020的特性，支持代码分割","Webpack会自动进行代码分割，生成独立的chunk文件","懒加载可以显著减少初始包大小，提升首屏加载速度","错误边界可以捕获懒加载过程中的错误","预加载策略可以在用户需要前提前加载组件"],steps:["使用React.lazy()包装需要懒加载的组件","创建自定义的加载组件作为fallback（可选）","使用Suspense包装懒加载组件","设置fallback属性显示加载状态","处理加载错误和重试逻辑","优化加载体验和用户反馈","测试不同网络条件下的表现","监控懒加载组件的性能指标"],tips:["合理选择懒加载的粒度，避免过度分割导致请求过多","为加载状态提供有意义的反馈，提升用户体验","考虑预加载重要的懒加载组件，减少用户等待时间","使用错误边界处理加载失败，提供重试机制","在开发环境中测试懒加载行为，确保正常工作","监控懒加载组件的性能指标，优化加载策略","考虑服务端渲染(SSR)的兼容性问题"]},interview:{questions:[{question:"什么是懒加载？它解决了什么问题？",answer:"懒加载是一种按需加载技术，组件只在需要时才开始加载和渲染。它主要解决以下问题：1) 减少初始包大小，提升首屏加载速度；2) 节省带宽和内存资源；3) 改善用户体验，特别是在移动端和弱网络环境下；4) 实现代码分割，优化应用性能。React.lazy()和Suspense提供了优雅的懒加载解决方案。"},{question:"React.lazy()和Suspense是如何工作的？",answer:"React.lazy()接受一个返回Promise的函数，该Promise解析为一个包含default导出的模块。Suspense组件用于包装懒加载组件，当组件正在加载时显示fallback内容。工作流程：1) React.lazy()创建懒加载组件；2) 当组件首次渲染时，开始动态导入；3) Suspense捕获Promise并显示fallback；4) 加载完成后渲染实际组件；5) 后续渲染直接使用缓存的组件。"},{question:"懒加载的最佳实践有哪些？",answer:"懒加载最佳实践包括：1) 合理选择懒加载粒度，避免过度分割；2) 为加载状态提供有意义的反馈；3) 实现错误处理和重试机制；4) 考虑预加载重要组件；5) 使用路由级别的代码分割；6) 监控性能指标和用户体验；7) 在SSR环境中正确处理懒加载；8) 避免在render方法中创建懒加载组件。"},{question:"如何处理懒加载中的错误？",answer:"处理懒加载错误的方法：1) 使用错误边界(Error Boundary)捕获加载错误；2) 在Promise中添加catch处理；3) 提供重试机制让用户重新加载；4) 显示友好的错误信息；5) 记录错误日志用于监控；6) 考虑降级方案，如显示静态内容；7) 网络超时处理；8) 区分不同类型的错误并采取相应措施。"},{question:"懒加载对SEO有什么影响？如何优化？",answer:"懒加载对SEO的影响：1) 搜索引擎可能无法索引懒加载内容；2) 首屏内容加载延迟可能影响排名；3) JavaScript依赖可能导致爬虫无法获取内容。优化方法：1) 关键内容避免懒加载；2) 使用服务端渲染(SSR)预渲染重要页面；3) 提供sitemap和结构化数据；4) 使用预加载策略；5) 监控Core Web Vitals指标；6) 考虑使用静态生成(SSG)。"}],keyPoints:["React.lazy()只能用于默认导出的组件","Suspense必须包装懒加载组件，否则会报错","懒加载组件会被Webpack自动代码分割","首次加载有延迟，后续使用会从缓存获取","错误处理和用户体验同样重要","合理的懒加载策略能显著提升应用性能","需要考虑SEO和服务端渲染的兼容性"]},bestPractices:{dos:["在路由级别使用懒加载进行代码分割","为懒加载组件提供有意义的加载状态","实现错误边界和重试机制","监控懒加载组件的性能指标","考虑预加载用户可能访问的组件","使用骨架屏或进度条提升用户体验","在开发环境中测试懒加载行为","合理选择懒加载的粒度和时机"],donts:["不要在render方法中创建懒加载组件","不要过度使用懒加载导致请求过多","不要忽略加载失败的错误处理","不要在关键路径上使用懒加载","不要忘记清理定时器和事件监听器","不要在SSR中直接使用懒加载","不要忽略懒加载对SEO的影响","不要缺少合适的加载状态反馈"],patterns:["路由级懒加载：按页面分割应用代码","条件懒加载：根据用户交互按需加载","预加载模式：在空闲时预加载可能需要的组件","渐进式加载：按优先级逐步加载组件","错误重试模式：提供友好的错误处理和重试","骨架屏模式：使用占位符改善加载体验","并行加载模式：同时加载多个独立组件","缓存优化模式：合理利用浏览器和应用缓存"]}};return e.jsx(C,{...n})};export{I as default};
